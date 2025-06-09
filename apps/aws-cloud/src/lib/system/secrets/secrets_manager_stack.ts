import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export class SecretsManagerStack extends cdk.Stack {
  public readonly googleSecret: secretsmanager.ISecret;
  public readonly facebookSecret: secretsmanager.ISecret;
  public readonly amazonSecret: secretsmanager.ISecret;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Retrieve existing secrets from AWS SecretsManager Manager
    this.googleSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      'GoogleProviderSecret',
      'google_provider_credentials'
    );
    this.facebookSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      'FacebookProviderSecret',
      'facebook_proivider_credentials'
    );
    this.amazonSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      'AmazonProviderSecret',
      'amazon_provider_credentials'
    );

    new cdk.CfnOutput(this, 'GoogleProviderSecretArn', { value: this.googleSecret.secretArn });
    new cdk.CfnOutput(this, 'FacebookProviderSecretArn', { value: this.facebookSecret.secretArn });
    new cdk.CfnOutput(this, 'AmazonProviderSecretArn', { value: this.amazonSecret.secretArn });

  }
}
