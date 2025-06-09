import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

interface GitHubWorkflowRoleStackProps extends cdk.StackProps {
    bucket: s3.IBucket;
}

export class GitHubWorkflowRolStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: GitHubWorkflowRoleStackProps) {
        super(scope, id, props);

         // 📌 2️⃣ Create an IAM Role for GitHub Actions OIDC Authentication
        const githubOidcProvider = new iam.OpenIdConnectProvider(this, 'GitHubOIDC', {
            url: 'https://token.actions.githubusercontent.com',
            clientIds: ['sts.amazonaws.com'],
        });

        const githubActionsRole = new iam.Role(this, 'GitHubActionsRole', {
            assumedBy: new iam.FederatedPrincipal(
                githubOidcProvider.openIdConnectProviderArn,
                {
                    "StringEquals": {
                        "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                    },
                    "StringLike": {
                        "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_USER/YOUR_REPO:*"
                    }
                },
                "sts:AssumeRoleWithWebIdentity"
            )
        });

        githubActionsRole.addToPolicy(
            new iam.PolicyStatement({
                actions: ['s3:PutObject', 's3:DeleteObject'],
                resources: [`${props.bucket.bucketArn}/*`], // Allow only uploads/deletions inside the bucket
            })
        );


        // 📌 3️⃣ Output Bucket Name & CloudFront Distribution ID for GitHub Actions
        new cdk.CfnOutput(this, 'BucketName', { value: props.bucket.bucketName });
        new cdk.CfnOutput(this, 'GitHubActionsRoleARN', { value: githubActionsRole.roleArn });
    }
}
