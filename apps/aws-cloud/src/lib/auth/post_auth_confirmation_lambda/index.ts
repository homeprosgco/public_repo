import {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
  AdminUpdateUserAttributesCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { PostConfirmationTriggerEvent } from 'aws-lambda';
import { randomUUID } from 'crypto';

const dynamoDB = new DynamoDBClient({ region: process.env['AWS_REGION'] });
const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env['AWS_REGION'],
});

export const handler = async (event: PostConfirmationTriggerEvent) => {
  console.log('Post-Sign-Up Event:', JSON.stringify(event, null, 2));

  // ✅ Extract user attributes
  const userId = event.request.userAttributes['sub'];
  const email = event.request.userAttributes['email'];
  const userPoolId = event.userPoolId;
  const isInvite = event.request.clientMetadata?.['invite'] === 'true';
  const appId = event.request.clientMetadata?.['appId'];

  if (!appId) {
    console.error('❌ Missing appId in clientMetadata.');
    throw new Error('Unauthorized: appId is required.');
  }
  console.log(`✅ Retrieved appId: ${appId}`);

  if (isInvite) {
    // ✅ Invited user handling
    const tenantId = event.request.clientMetadata?.['tenantId'];
    if (!tenantId) {
      console.error('❌ Missing tenantId for invited user.');
      throw new Error('Unauthorized: tenantId is required for invited users.');
    }
    console.log(`✅ User ${email} was invited to tenant ${tenantId}`);

    // ✅ Retrieve invitation
    const partitionKey = `APP#${appId}#TENANT#${tenantId}`;
    const sortKey = `INVITE#${email}`;
    const invitationParams = new GetItemCommand({
      TableName: process.env['DYNAMODB_TABLE']!,
      Key: { PK: { S: partitionKey }, SK: { S: sortKey } },
    });

    const invitationResult = await dynamoDB.send(invitationParams);

    if (
      !invitationResult.Item ||
      invitationResult.Item['status'].S !== 'PENDING'
    ) {
      console.error(`❌ Invalid invitation for ${email}`);
      throw new Error('Unauthorized: Invalid invitation');
    }

    // ✅ Update invitation status to ACCEPTED
    const updateInvitationParams = new UpdateItemCommand({
      TableName: process.env['DYNAMODB_TABLE']!,
      Key: { PK: { S: partitionKey }, SK: { S: sortKey } },
      UpdateExpression: 'SET #s = :status',
      ExpressionAttributeNames: { '#s': 'status' },
      ExpressionAttributeValues: { ':status': { S: 'ACCEPTED' } },
    });
    await dynamoDB.send(updateInvitationParams);
    console.log(`✅ Invitation accepted for ${email}`);

    // ✅ Create USERPROFILE document for invited user
    const saveUserProfileParams = new PutItemCommand({
      TableName: process.env['DYNAMODB_TABLE']!,
      Item: {
        PK: { S: `USERPROFILE#${userId}` },
        SK: { S: `USER#${userId}` },
        email: { S: email },
        tenantId: { S: tenantId },
      },
    });
    await dynamoDB.send(saveUserProfileParams);
    console.log(`✅ Stored USERPROFILE for invited user ${email}`);

    // ✅ Add user to existing TENANT_ACCOUNT document
    const updateTenantAccountParams = new UpdateItemCommand({
      TableName: process.env['DYNAMODB_TABLE']!,
      Key: {
        PK: { S: `APP#${appId}#TENANT#${tenantId}` },
        SK: { S: `ACCOUNT#${tenantId}` },
      },
      UpdateExpression: 'ADD accountUserIds :userId',
      ExpressionAttributeValues: { ':userId': { SS: [userId] } },
    });
    await dynamoDB.send(updateTenantAccountParams);
    console.log(`✅ Added ${email} to tenant account ${tenantId}`);

    return event;
  }

  // ✅ New tenant owner handling
  const tenantId = `tenant-${randomUUID()}`;
  console.log(`✅ Generated new tenantId for ${email}: ${tenantId}`);

  // ✅ Create TENANT_ACCOUNT document
  const createdAt = new Date().toISOString();
  const saveTenantAccountParams = new PutItemCommand({
    TableName: process.env['DYNAMODB_TABLE']!,
    Item: {
      PK: { S: `APP#${appId}#TENANT#${tenantId}` },
      SK: { S: `ACCOUNT#${tenantId}` },
      appId: { S: appId },
      ownerId: { S: userId },
      created: { S: createdAt },
      accountUserIds: { SS: [userId] }, // Start with owner
    },
  });
  await dynamoDB.send(saveTenantAccountParams);
  console.log(`✅ Created TENANT_ACCOUNT document for ${email}`);

  // ✅ Create USERPROFILE document for tenant owner
  const saveUserProfileParams = new PutItemCommand({
    TableName: process.env['DYNAMODB_TABLE']!,
    Item: {
      PK: { S: `USERPROFILE#${userId}` },
      SK: { S: `USER#${userId}` },
      email: { S: email },
      tenantId: { S: tenantId },
    },
  });
  await dynamoDB.send(saveUserProfileParams);
  console.log(`✅ Created USERPROFILE document for owner ${email}`);

  // ✅ Assign `tenantId` and `appId` to the user in Cognito
  const updateAttributesParams = new AdminUpdateUserAttributesCommand({
    UserPoolId: userPoolId,
    Username: userId,
    UserAttributes: [
      { Name: 'custom:tenantId', Value: tenantId },
      { Name: 'custom:appId', Value: appId },
    ],
  });
  await cognitoClient.send(updateAttributesParams);
  console.log(
    `✅ Assigned tenantId ${tenantId} and appId ${appId} to user ${email}`
  );

  // ✅ Add user to `TenantAdmin` group
  const addUserToGroupParams = new AdminAddUserToGroupCommand({
    UserPoolId: userPoolId,
    Username: userId,
    GroupName: 'TenantAdmin',
  });
  await cognitoClient.send(addUserToGroupParams);
  console.log(`✅ Added ${email} to TenantAdmin group`);

  return event;
};
