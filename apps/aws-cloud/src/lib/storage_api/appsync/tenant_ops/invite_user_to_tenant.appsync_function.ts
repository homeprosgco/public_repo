import * as ddb from '@aws-appsync/utils/dynamodb';
import { util } from '@aws-appsync/utils';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import {
  AppSyncIdentityCognito,
  AppSyncResolverContext,
} from '../../interface';

const sesClient = new SESClient({ region: 'us-east-1' });

export function request(ctx: AppSyncResolverContext) {
  const identity = ctx.identity as AppSyncIdentityCognito;
  const tenantId = identity.claims['custom:tenantId'];
  const appId = identity.claims['custom:appId'];
  const email = ctx.args.email;

  if (!tenantId || !appId) {
    util.error('Unauthorized: Missing Tenant ID or App ID', 'Unauthorized');
  }

  const groups = identity.claims['cognito:groups'] || [];
  if (!groups.includes('TenantAdmin')) {
    util.error(
      'Unauthorized: Only TenantAdmin can send invites',
      'Unauthorized'
    );
  }

  const partitionKey = `APP#${appId}#TENANT#${tenantId}`;
  const sortKey = `INVITE#${email}`;

  // ✅ Store Invitation in DynamoDB
  return ddb.put({
    key: { PK: partitionKey, SK: sortKey },
    item: {
      PK: partitionKey,
      SK: sortKey,
      tenantId,
      appId,
      email,
      status: 'PENDING',
      createdAt: util.time.nowISO8601(),
    },
  });
}

export async function response(ctx: AppSyncResolverContext) {
  const identity = ctx.identity as AppSyncIdentityCognito;
  const tenantId = identity.claims['custom:tenantId'];
  const appId = identity.claims['custom:appId'];
  const email = ctx.args.email;
  const organizationName = ctx.args.organizationName;
  const inviteLink = `https://homepprosgco.com/signup?tenantId=${tenantId}&appId=${appId}&email=${email}`;

  // ✅ Send Invitation Email
  const emailParams = new SendEmailCommand({
    Source: 'homepprosgco.com',
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: { Data: `You're Invited to Join ${organizationName} Team` },
      Body: {
        Text: { Data: `Click here to accept the invitation: ${inviteLink}` },
      },
    },
  });

  await sesClient.send(emailParams);
  console.log(`✅ Invitation email sent to ${email}`);

  return 'Invitation sent successfully';
}

// type Mutation {
//     inviteUser(email: String!): String @aws_appsync_js
//   }

// Client side implementation
// import { Auth } from "@aws-amplify/auth";
// import { ActivatedRoute } from "@angular/router";

// constructor(private route: ActivatedRoute) {}

// async signUp(email: string, password: string) {
//   const appId = this.route.snapshot.queryParams["appId"];
//   const tenantId = this.route.snapshot.queryParams["tenantId"];

//   try {
//     const response = await Auth.signUp({
//       username: email,
//       password,
//       attributes: { email },
//       clientMetadata: { appId, tenantId, invite: "true" },
//     });

//     console.log("✅ Sign-up successful:", response);
//   } catch (error) {
//     console.error("❌ Sign-up failed:", error);
//   }
// }
