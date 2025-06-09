import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

export async function getStripeSecrets() {
  const client = new SecretsManagerClient({ region: process.env['AWS_REGION'] || 'us-east-1' });
  const command = new GetSecretValueCommand({
    SecretId: process.env['STRIPE_SECRET_ID'] || 'stripe/secretKey',
  });

  const response = await client.send(command);

  if (!response.SecretString) throw new Error('Stripe secrets not found');

  const { secretKey, signingSecret } = JSON.parse(response.SecretString);
  return { secretKey, signingSecret };
}
