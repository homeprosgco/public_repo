import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as iam from 'aws-cdk-lib/aws-iam';

export class CacheInvalidationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ✅ Import existing CloudFront distribution & S3 bucket
    const cloudFrontDistributionId = 'YOUR_CLOUDFRONT_DISTRIBUTION_ID'; // Replace with your distribution ID
    const s3Bucket = s3.Bucket.fromBucketName(
      this,
      'ImageBucket',
      'your-image-bucket-name'
    );

    // ✅ Step 1: Create a Lambda function for cache invalidation
    const cacheInvalidationLambda = new lambda.Function(
      this,
      'CacheInvalidationLambda',
      {
        runtime: lambda.Runtime.NODEJS_18_X,
        handler: 'index.handler',
        code: lambda.Code.fromAsset('lambda'),
        environment: {
          CLOUDFRONT_DISTRIBUTION_ID: cloudFrontDistributionId,
        },
      }
    );

    // ✅ Step 2: Grant the Lambda function permission to invalidate CloudFront cache
    cacheInvalidationLambda.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['cloudfront:CreateInvalidation'],
        resources: [
          `arn:aws:cloudfront::${this.account}:distribution/${cloudFrontDistributionId}`,
        ],
      })
    );

    // ✅ Step 3: Trigger Lambda when an image is updated in S3
    const eventRule = new events.Rule(this, 'S3UpdateEventRule', {
      eventPattern: {
        source: ['aws.s3'],
        detailType: ['Object Created', 'Object Removed'],
        detail: {
          bucket: {
            name: [s3Bucket.bucketName],
          },
        },
      },
    });

    eventRule.addTarget(new targets.LambdaFunction(cacheInvalidationLambda));
  }
}
