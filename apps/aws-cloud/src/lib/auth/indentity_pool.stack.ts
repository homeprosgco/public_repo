import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as iam from 'aws-cdk-lib/aws-iam';

interface IdentityPoolStackProps extends cdk.StackProps {
  userPool: cognito.IUserPool;
  userPoolClient: cognito.IUserPoolClient;
  secretsStack?: {
    googleSecret: secretsmanager.ISecret;
    facebookSecret: secretsmanager.ISecret;
    amazonSecret: secretsmanager.ISecret;
  };
}

export class IdentityPoolStack extends cdk.Stack {
  public readonly identityPool: cognito.CfnIdentityPool;

  constructor(scope: Construct, id: string, props: IdentityPoolStackProps) {
    super(scope, id, props);

    // Create Cognito Identity Pool
    this.identityPool = new cognito.CfnIdentityPool(this, 'IdentityPool', {
      allowUnauthenticatedIdentities: false,
      cognitoIdentityProviders: [
        {
          clientId: props.userPoolClient.userPoolClientId,
          providerName: props.userPool.userPoolProviderName,
        },
      ],
      
    });

    if (props.secretsStack) {
      // Retrieve secrets from the Secrets Stack
      const googleClientId = props.secretsStack.googleSecret
        .secretValueFromJson('clientId')
        .toString();
      const facebookClientId = props.secretsStack.facebookSecret
        .secretValueFromJson('appId')
        .toString();
      const amazonClientId = props.secretsStack.amazonSecret
        .secretValueFromJson('clientId')
        .toString();

      // Create Cognito Identity Pool
      this.identityPool = new cognito.CfnIdentityPool(this, 'IdentityPool', {
        allowUnauthenticatedIdentities: false,
        cognitoIdentityProviders: [
          {
            clientId: props.userPoolClient.userPoolClientId,
            providerName: props.userPool.userPoolProviderName,
          },
          {
            providerName: `accounts.google.com`,
            clientId: googleClientId,
          },
          {
            providerName: `graph.facebook.com`,
            clientId: facebookClientId,
          },
          {
            providerName: `www.amazon.com`,
            clientId: amazonClientId,
          },
        ],
      });
    }

    // ✅ IAM Role for Authenticated Users
    const authenticatedRole = new iam.Role(
      this,
      'IdentityPoolAuthenticatedRole',
      {
        assumedBy: new iam.FederatedPrincipal(
          'cognito-identity.amazonaws.com',
          {
            StringEquals: {
              'cognito-identity.amazonaws.com:aud': this.identityPool.ref,
            },
            'ForAnyValue:StringLike': {
              'cognito-identity.amazonaws.com:amr': 'authenticated',
            },
          },
          'sts:AssumeRoleWithWebIdentity'
        ),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonCognitoPowerUser'),
        ],
      }
    );

    // ✅ IAM Role for Unauthenticated Users (Optional)
    const unauthenticatedRole = new iam.Role(
      this,
      'IdentityPoolUnauthenticatedRole',
      {
        assumedBy: new iam.FederatedPrincipal(
          'cognito-identity.amazonaws.com',
          {
            StringEquals: {
              'cognito-identity.amazonaws.com:aud': this.identityPool.ref,
            },
            'ForAnyValue:StringLike': {
              'cognito-identity.amazonaws.com:amr': 'unauthenticated',
            },
          },
          'sts:AssumeRoleWithWebIdentity'
        ),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonCognitoReadOnly'),
        ],
      }
    );

    // ✅ Attach Roles to Identity Pool
    new cognito.CfnIdentityPoolRoleAttachment(
      this,
      'IdentityPoolRoleAttachment',
      {
        identityPoolId: this.identityPool.ref,
        roles: {
          authenticated: authenticatedRole.roleArn,
          unauthenticated: unauthenticatedRole.roleArn,
        },
      }
    );

    // ✅ Outputs for easy reference
    new cdk.CfnOutput(this, 'IdentityPoolId', { value: this.identityPool.ref });
    new cdk.CfnOutput(this, 'AuthenticatedRoleArn', {
      value: authenticatedRole.roleArn,
    });
    new cdk.CfnOutput(this, 'UnauthenticatedRoleArn', {
      value: unauthenticatedRole.roleArn,
    });
  }
}
