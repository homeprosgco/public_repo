import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from '@aws-sdk/client-cloudfront';

const cloudFront = new CloudFrontClient({ region: 'us-east-2' });

export async function handler(event: any) {
  console.log('S3 Event Received:', JSON.stringify(event, null, 2));

  const distributionId = process.env['CLOUDFRONT_DISTRIBUTION_ID'];

  try {
    const command = new CreateInvalidationCommand({
      DistributionId: distributionId,
      InvalidationBatch: {
        Paths: {
          Quantity: 1,
          Items: ['/*'], // 🔹 Invalidates all objects (modify if needed)
        },
        CallerReference: `invalidate-${Date.now()}`,
      },
    });

    await cloudFront.send(command);
    console.log('✅ CloudFront cache invalidation successful!');
  } catch (error) {
    console.error('❌ Failed to invalidate CloudFront cache:', error);
  }
}
