import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';

interface MultiOriginProps extends cdk.StackProps {
  origins: { [pathPattern: string]: string }; // Named pathPatterns with bucket names
}

export class MultiOriginCloudFrontStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MultiOriginProps) {
    super(scope, id, props);

    if (Object.keys(props.origins).length === 0) {
      throw new Error('At least one origin must be specified.');
    }

    const buckets: { [name: string]: s3.Bucket } = {};
    const originsConfig: any[] = [];
    const behaviorsConfig: any[] = [];

    // Create S3 buckets and configure CloudFront origins
    for (const [pathPattern, bucketName] of Object.entries(props.origins)) {
      const bucket = new s3.Bucket(this, `${bucketName}Bucket`, {
        bucketName: cdk.PhysicalName.GENERATE_IF_NEEDED,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      });

      buckets[bucketName] = bucket;

      // Create OAC for the bucket
      const oac = new cloudfront.CfnOriginAccessControl(
        this,
        `${bucketName}OAC`,
        {
          originAccessControlConfig: {
            name: `${bucketName}OAC`,
            originAccessControlOriginType: 's3',
            signingBehavior: 'always',
            signingProtocol: 'sigv4',
          },
        }
      );

      // Add origin configuration
      originsConfig.push({
        id: bucketName,
        domainName: bucket.bucketRegionalDomainName,
        s3OriginConfig: {},
        originAccessControlId: oac.ref,
      });

      // Define behavior for the path pattern
      behaviorsConfig.push({
        pathPattern,
        targetOriginId: bucketName,
        viewerProtocolPolicy: 'redirect-to-https',
        allowedMethods: ['GET', 'HEAD'],
        cachedMethods: ['GET', 'HEAD'],
        compress: true,
        forwardedValues: {
          queryString: false,
          cookies: { forward: 'none' },
        },
      });
    }

    // Set first bucket as the default origin
    const [defaultPath, defaultBucketName] = Object.entries(props.origins)[0];

    // Create CloudFront distribution using L1 construct
    const cloudFrontDistribution = new cloudfront.CfnDistribution(
      this,
      'CloudFrontDistribution',
      {
        distributionConfig: {
          enabled: true,
          origins: originsConfig,
          defaultCacheBehavior: {
            targetOriginId: defaultBucketName,
            viewerProtocolPolicy: 'redirect-to-https',
            allowedMethods: ['GET', 'HEAD'],
            cachedMethods: ['GET', 'HEAD'],
            compress: true,
            forwardedValues: {
              queryString: false,
              cookies: { forward: 'none' },
            },
          },
          cacheBehaviors: behaviorsConfig,
        },
      }
    );

    // **Update S3 bucket policies after CloudFront distribution is created**
    for (const [bucketName, bucket] of Object.entries(buckets)) {
      bucket.addToResourcePolicy(
        new iam.PolicyStatement({
          actions: ['s3:GetObject'],
          resources: [`${bucket.bucketArn}/*`],
          principals: [new iam.ServicePrincipal('cloudfront.amazonaws.com')],
          conditions: {
            StringEquals: {
              'AWS:SourceArn': `arn:aws:cloudfront::${this.account}:distribution/${cloudFrontDistribution.ref}`,
            },
          },
        })
      );

      new cdk.CfnOutput(this, `${bucketName}BucketName`, {
        value: bucket.bucketName,
        description: `S3 Bucket Name for ${bucketName}`,
      });

      new cdk.CfnOutput(this, `${bucketName}BucketArn`, {
        value: bucket.bucketArn,
        description: `S3 Bucket ARN for ${bucketName}`,
      });
    }

    // Output CloudFront URL
    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: `https://${cloudFrontDistribution.attrDomainName}`,
      description: 'CloudFront Distribution URL',
    });
  }
}
