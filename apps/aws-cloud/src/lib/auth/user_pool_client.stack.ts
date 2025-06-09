import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cognito from 'aws-cdk-lib/aws-cognito';

interface UserPoolClientStackProps extends cdk.StackProps {
  userPool: cognito.IUserPool;
}

export class UserPoolClientStack extends cdk.Stack {
  public readonly userPoolClient: cognito.UserPoolClient;

  constructor(scope: Construct, id: string, props: UserPoolClientStackProps) {
    super(scope, id, props);

    if (!props.userPool) {
      throw new Error('UserPool must be provided to UserPoolClientStack.');
    }

    // Create Cognito User Pool Client
    this.userPoolClient = new cognito.UserPoolClient(this, 'UserPoolClient', {
      userPool: props.userPool,
      generateSecret: false,
      authFlows: { userPassword: true, userSrp: true },
      accessTokenValidity: cdk.Duration.hours(1),
      idTokenValidity: cdk.Duration.hours(1),
      refreshTokenValidity: cdk.Duration.days(30),
      enableTokenRevocation: true, // ✅ Allows secure logout
      // ✅ Define OAuth Settings (for social logins, frontend apps)
      oAuth: {
        callbackUrls: ['https://homeprosgco.com/callback', 'http://localhost:4200/callback'], // ✅ Replace with actual URLs
        logoutUrls: ['https://homeprosgco.com/logout', 'http://localhost:4200/logout'], // ✅ Define logout redirection URLs
        flows: {
          authorizationCodeGrant: true, // ✅ Best for secure OAuth flows
          implicitCodeGrant: true,
        },
        scopes: [
          cognito.OAuthScope.EMAIL,
          cognito.OAuthScope.OPENID,
          cognito.OAuthScope.PROFILE,
        ],
      },
    });

    // ✅ Corrected Outputs
    new cdk.CfnOutput(this, 'UserPoolClientId', { value: this.userPoolClient.userPoolClientId });

  }
}
