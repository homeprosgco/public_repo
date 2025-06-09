import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { join } from 'path';
import { UserPoolClientStack } from './user_pool_client.stack';
import { IdentityPoolStack } from './indentity_pool.stack';

interface CognitoStackProps extends cdk.StackProps {
  dynamoTable: dynamodb.Table;
  secretsStack?: {
    googleSecret: secretsmanager.ISecret;
    facebookSecret: secretsmanager.ISecret;
    amazonSecret: secretsmanager.ISecret;
  };
}

export class CognitoStack extends cdk.Stack {
  public readonly userPool: cognito.IUserPool;

  constructor(scope: Construct, id: string, props: CognitoStackProps) {
    super(scope, id, props);

    const { dynamoTable } = props;

    // ✅ Create the Lambda function role first (avoids circular dependency)
    const lambdaRole = new iam.Role(this, 'LambdaRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole'
        ),
      ],
    });

    lambdaRole.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          'cognito-idp:AdminUpdateUserAttributes',
          'cognito-idp:AdminAddUserToGroup',
        ],
        resources: [
          `arn:aws:cognito-idp:${this.region}:${this.account}:userpool/*`,
        ],
      })
    );
    // ✅ Use Lazy Evaluation for UserPool ID to Avoid Circular Dependency
    const postAuthConfirmLambda = new lambda.Function(
      this,
      'PostAuthConfirmLambda',
      {
        runtime: lambda.Runtime.NODEJS_18_X,
        handler: 'index.handler',
        code: lambda.Code.fromAsset(
          join(__dirname, 'lambda/trigger/post_auth_confirmation')
        ),
        role: lambdaRole,
        environment: {
          DYNAMODB_TABLE: dynamoTable.tableName,
        },
      }
    );

    // ✅ Grant Permission to Read/Write to DynamoDB
    dynamoTable.grantReadWriteData(postAuthConfirmLambda);

    // Create Cognito User Pool
    this.userPool = new cognito.UserPool(this, 'UserPool', {
      userPoolName: 'UserPool',
      selfSignUpEnabled: true,
      signInAliases: { email: true },
      autoVerify: { email: true },
      standardAttributes: {
        email: { required: true, mutable: true },
      },
      customAttributes: {
        tenantId: new cognito.StringAttribute({ mutable: false }),
        appId: new cognito.StringAttribute({ mutable: false }), // If appId should never change
        role: new cognito.StringAttribute({ mutable: true }),
      },
      mfa: cognito.Mfa.OPTIONAL, // 🔹 Set to REQUIRED for stronger security
      mfaSecondFactor: {
        sms: true,
        otp: true, // 🔥 Enables Time-Based OTP authentication
      },
      passwordPolicy: {
        minLength: 12,
        requireUppercase: true,
        requireLowercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      lambdaTriggers: {
        postConfirmation: postAuthConfirmLambda
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY, // 🔹 Use email for account recovery
      removalPolicy: cdk.RemovalPolicy.RETAIN, // 🔹 Prevent accidental deletion
    });

    if (props && props.secretsStack) {
      // Retrieve secrets from the Secrets Stack
      // ✅ Retrieve secrets as `SecretValue` instead of immediately converting to string
      const googleClientId = props.secretsStack.googleSecret
        .secretValueFromJson('clientId')
        .toString();
      const googleClientSecret =
        props.secretsStack.googleSecret.secretValueFromJson('clientSecret');
      const facebookClientId = props.secretsStack.facebookSecret
        .secretValueFromJson('appId')
        .toString();
      const facebookClientSecret = props.secretsStack.facebookSecret
        .secretValueFromJson('appSecret')
        .toString();
      const amazonClientId = props.secretsStack.amazonSecret
        .secretValueFromJson('clientId')
        .toString();
      const amazonClientSecret = props.secretsStack.amazonSecret
        .secretValueFromJson('clientSecret')
        .toString();

      // Add Google as an Identity Provider
      new cognito.UserPoolIdentityProviderGoogle(this, 'GoogleIdP', {
        userPool: this.userPool,
        clientId: googleClientId,
        clientSecretValue: googleClientSecret,
        scopes: ['profile', 'email', 'openid'],
        attributeMapping: {
          email: cognito.ProviderAttribute.GOOGLE_EMAIL,
          givenName: cognito.ProviderAttribute.GOOGLE_GIVEN_NAME,
          familyName: cognito.ProviderAttribute.GOOGLE_FAMILY_NAME,
        },
      });

      // Add Facebook as an Identity Provider
      new cognito.UserPoolIdentityProviderFacebook(this, 'FacebookIdP', {
        userPool: this.userPool,
        clientId: facebookClientId,
        clientSecret: facebookClientSecret,
        scopes: ['email', 'public_profile'],
        attributeMapping: {
          email: cognito.ProviderAttribute.FACEBOOK_EMAIL,
        },
      });

      // Add Amazon as an Identity Provider
      new cognito.UserPoolIdentityProviderAmazon(this, 'AmazonIdP', {
        userPool: this.userPool,
        clientId: amazonClientId,
        clientSecret: amazonClientSecret,
        scopes: ['profile', 'postal_code', 'email'],
        attributeMapping: {
          email: cognito.ProviderAttribute.AMAZON_EMAIL,
        },
      });
    }

    const userPoolClientStack = new UserPoolClientStack(
      this,
      `UserPoolClient`,
      { userPool: this.userPool }
    );

    new IdentityPoolStack(this, `IdentityPool`, {
      userPool: this.userPool,
      userPoolClient: userPoolClientStack.userPoolClient,
    });


    new cdk.CfnOutput(this, 'UserPoolId', { value: this.userPool.userPoolId });
    new cdk.CfnOutput(this, 'UserPoolARN', {
      value: this.userPool.userPoolArn,
    });
    new cdk.CfnOutput(this, 'PostAuthConfirmLambdaArn', {
      value: postAuthConfirmLambda.functionArn,
    });
  }
}
