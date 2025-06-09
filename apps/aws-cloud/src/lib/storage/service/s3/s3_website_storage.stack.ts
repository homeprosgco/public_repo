import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53targets from 'aws-cdk-lib/aws-route53-targets';

interface S3StorageStackProps extends cdk.StackProps {
    domainName?: string;  // Optional: Custom domain
    hostedZoneId?: string; // Optional: Route 53 Hosted Zone ID
}

export class S3StorageStack extends cdk.Stack {
    public readonly cloudFrontDistribution: cloudfront.CfnDistribution;

    constructor(scope: Construct, id: string, props: S3StorageStackProps) {
        super(scope, id, props);

        // ✅ Create an S3 bucket for file storage
        const bucket = new s3.Bucket(this, 'FileStorageBucket', {
            removalPolicy: cdk.RemovalPolicy.RETAIN, // Keep data safe in production
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            versioned: true, // Enable versioning for safe updates
            autoDeleteObjects: false, // Prevent accidental deletion
            encryption: s3.BucketEncryption.S3_MANAGED, // Enable S3 encryption
        });

        // ✅ Create an Origin Access Control (OAC) for secure CloudFront access
        const oac = new cloudfront.CfnOriginAccessControl(this, 'OAC', {
            originAccessControlConfig: {
                name: 'FileStorageOAC',
                description: 'OAC for CloudFront to securely access S3',
                originAccessControlOriginType: 's3',
                signingBehavior: 'always',
                signingProtocol: 'sigv4',
            },
        });

        let aliases: string[] = [];
        let certificateArn: string | undefined;
        let hostedZone: route53.IHostedZone | undefined;

        // ✅ If a custom domain is provided, configure SSL and Route 53
        if (props.domainName && props.hostedZoneId) {
            hostedZone = route53.HostedZone.fromHostedZoneId(this, 'HostedZone', props.hostedZoneId);
            const certificate = new certificatemanager.Certificate(this, 'FileStorageCertificate', {
                domainName: props.domainName,
                validation: certificatemanager.CertificateValidation.fromDns(hostedZone),
            });

            aliases.push(props.domainName);
            certificateArn = certificate.certificateArn;
        }

        // ✅ Create CloudFront Distribution for secure file delivery
        this.cloudFrontDistribution = new cloudfront.CfnDistribution(this, 'FileStorageDistribution', {
            distributionConfig: {
                enabled: true,
                aliases: aliases.length > 0 ? aliases : undefined, // ✅ Use custom domain if provided
                defaultRootObject: '',
                origins: [
                    {
                        id: 'S3Origin',
                        domainName: bucket.bucketRegionalDomainName, // ✅ Use regional domain for OAC
                        originAccessControlId: oac.ref, // ✅ Attach OAC
                        s3OriginConfig: {
                            originAccessIdentity: '', // ✅ MUST be empty when using OAC
                        },
                    },
                ],
                defaultCacheBehavior: {
                    targetOriginId: 'S3Origin',
                    viewerProtocolPolicy: 'redirect-to-https',
                    allowedMethods: ['GET', 'HEAD'],
                    cachedMethods: ['GET', 'HEAD'],
                    compress: true, // ✅ Optimize file transfer
                    cachePolicyId: cloudfront.CachePolicy.CACHING_OPTIMIZED.cachePolicyId,
                },
                viewerCertificate: certificateArn
                    ? {
                        acmCertificateArn: certificateArn,
                        sslSupportMethod: 'sni-only',
                        minimumProtocolVersion: 'TLSv1.2_2021',
                    }
                    : undefined, // ✅ Attach SSL if custom domain is used
            },
        });

        // ✅ Restrict S3 bucket access to CloudFront using an IAM policy
        bucket.addToResourcePolicy(
            new iam.PolicyStatement({
                actions: ['s3:GetObject'],
                resources: [`${bucket.bucketArn}/*`],
                principals: [new iam.ServicePrincipal('cloudfront.amazonaws.com')],
                conditions: {
                    StringEquals: {
                        'AWS:SourceArn': `arn:aws:cloudfront::${this.account}:distribution/${this.cloudFrontDistribution.ref}`,
                    },
                },
            })
        );

        // ✅ Create a Route 53 alias record if a custom domain is used
        if (hostedZone && props.domainName) {

            new route53.CfnRecordSet(this, `CloudFrontAliasRecord-${props.domainName}`, {
                hostedZoneId: hostedZone.hostedZoneId, // ✅ Hosted Zone ID
                name: props.domainName, // ✅ Domain name (e.g., example.com)
                type: 'A', // ✅ Alias A record
                aliasTarget: {
                    dnsName: this.cloudFrontDistribution.attrDomainName, // ✅ CloudFront domain name
                    hostedZoneId: 'Z2FDTNDATAQYW2', // ✅ CloudFront's fixed hosted zone ID
                },
            });

            new cdk.CfnOutput(this, 'CustomDomainURL', {
                value: `https://${props.domainName}`,
            });
        }

        // ✅ Output the CloudFront distribution URL
        new cdk.CfnOutput(this, 'CloudFrontURL', {
            value: `https://${this.cloudFrontDistribution.attrDomainName}`,
        });

        // ✅ Output the S3 bucket name
        new cdk.CfnOutput(this, 'S3BucketName', {
            value: bucket.bucketName,
        });
    }
}
