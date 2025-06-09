import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as route53 from 'aws-cdk-lib/aws-route53';

interface MultiHostedZoneCloudFrontStackProps extends cdk.StackProps {
    domains: {
        domainName: string;
        hostedZoneId: string;
        mappedPaths?: { [mappedDomain: string]: string }; // Mapped domain → Parent bucket path
    }[];
}

// Define the app stack
export class MultiHostedZoneCloudFrontStack extends cdk.Stack {
    public readonly cloudFrontDistribution: cdk.aws_cloudfront.CfnDistribution;

    constructor(scope: Construct, id: string, props: MultiHostedZoneCloudFrontStackProps) {
        super(scope, id, props);

        const bucket = new s3.Bucket(this, 'WebsiteHostingBucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            versioned: true,
            autoDeleteObjects: true,
        });

        // ✅ Create an Origin Access Control (OAC)
        const oac = new cloudfront.CfnOriginAccessControl(this, 'OAC', {
            originAccessControlConfig: {
                name: 'MyOAC',
                description: 'OAC for CloudFront to access S3',
                originAccessControlOriginType: 's3',
                signingBehavior: 'always',
                signingProtocol: 'sigv4',
            },
        });

        let aliases: string[] = [];
        let certificateArns: string[] = [];
        let hostedZones: { domain: string; hostedZone: route53.IHostedZone }[] = [];
        let behaviors: any[] = []; // Stores all CloudFront behaviors

        // ✅ Process all parent domains and their mapped paths
        for (const domainEntry of props.domains) {
            const { domainName, hostedZoneId, mappedPaths } = domainEntry;

            // ✅ Fetch the hosted zone
            const hostedZone = route53.HostedZone.fromHostedZoneId(this, `HostedZone-${domainName}`, hostedZoneId);
            hostedZones.push({ domain: domainName, hostedZone });

            // ✅ Request an SSL certificate for this domain
            const certificate = new certificatemanager.Certificate(this, `Cert-${domainName}`, {
                domainName,
                validation: certificatemanager.CertificateValidation.fromDns(hostedZone),
            });

            aliases.push(domainName);
            certificateArns.push(certificate.certificateArn);

            // ✅ Define a CloudFront behavior for the **parent domain**
            behaviors.push({
                pathPattern: `${domainName}/*`,
                targetOriginId: 'S3Origin',
                viewerProtocolPolicy: 'redirect-to-https',
                allowedMethods: ['GET', 'HEAD'],
                cachedMethods: ['GET', 'HEAD'],
                compress: true,
                cachePolicyId: cloudfront.CachePolicy.CACHING_OPTIMIZED.cachePolicyId,
            });

            // ✅ Process mapped domains (subdomains)
            if (mappedPaths) {
                for (const [mappedDomain, parentPath] of Object.entries(mappedPaths)) {
                    aliases.push(mappedDomain); // ✅ Add mapped domain to CloudFront
                    behaviors.push({
                        pathPattern: `${mappedDomain}/*`,
                        targetOriginId: 'S3Origin',
                        viewerProtocolPolicy: 'redirect-to-https',
                        allowedMethods: ['GET', 'HEAD'],
                        cachedMethods: ['GET', 'HEAD'],
                        compress: true,
                        cachePolicyId: cloudfront.CachePolicy.CACHING_OPTIMIZED.cachePolicyId,
                        originRequestPolicyId: parentPath, // ✅ Serve from this path
                    });
                }
            }
        }

        // ✅ Use the first certificate for CloudFront (AWS allows only one ACM certificate per distribution)
        const primaryCertificateArn = certificateArns[0];
        

        // ✅ Define the CloudFront Distribution
        this.cloudFrontDistribution = new cloudfront.CfnDistribution(this, 'CloudFrontDistribution', {
            distributionConfig: {
                enabled: true,
                defaultRootObject: 'index.html',
                aliases: aliases.length > 0 ? aliases : undefined, // ✅ Use alias only if provided
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
                cacheBehaviors: behaviors,
                defaultCacheBehavior: {
                    targetOriginId: 'S3Origin',
                    viewerProtocolPolicy: 'redirect-to-https',
                    allowedMethods: ['GET', 'HEAD'],
                    cachedMethods: ['GET', 'HEAD'],
                    forwardedValues: {
                        queryString: false,
                        cookies: { forward: 'none' },
                    },
                    compress: true,
                    cachePolicyId: cloudfront.CachePolicy.CACHING_OPTIMIZED.cachePolicyId,
                },
                viewerCertificate: primaryCertificateArn
                    ? {
                        acmCertificateArn: primaryCertificateArn,
                        sslSupportMethod: 'sni-only',
                        minimumProtocolVersion: 'TLSv1.2_2021',
                    }
                    : undefined, // ✅ Attach SSL only if custom domains are used
            },
        });

        // ✅ Attach an IAM policy to allow CloudFront to access the S3 bucket
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

        // ✅ Create Route 53 alias records for multiple hosted zones
        for (const { domain, hostedZone } of hostedZones) {
            new route53.CfnRecordSet(this, `CloudFrontAliasRecord-${domain}`, {
                hostedZoneId: hostedZone.hostedZoneId, // ✅ Hosted Zone ID
                name: domain, // ✅ Domain name (e.g., example.com)
                type: 'A', // ✅ Alias A record
                aliasTarget: {
                    dnsName: this.cloudFrontDistribution.attrDomainName, // ✅ CloudFront domain name
                    hostedZoneId: 'Z2FDTNDATAQYW2', // ✅ CloudFront's fixed hosted zone ID
                },
            });

            new cdk.CfnOutput(this, `CustomDomainURL-${domain}`, {
                value: `https://${domain}`,
            });
        }

        // ✅ Output the CloudFront distribution URL (default AWS domain)
        new cdk.CfnOutput(this, 'CloudFrontURL', {
            value: `https://${this.cloudFrontDistribution.attrDomainName}`,
        });
    }
}

// With Custom Domain:
// new MultiHostedZoneCloudFrontStack(app, 'MyStack', {
//     domains: [
//         { domainName: 'example.com', hostedZoneId: 'ZAAAAAAA1' },
//         { domainName: 'anotherdomain.com', hostedZoneId: 'ZBBBBBBB2' },
//     ],
// });


// Without Custom Domain:

// new MultiHostedZoneCloudFrontStack(app, 'MyStack', {
//     bucket: myS3Bucket,
// });
