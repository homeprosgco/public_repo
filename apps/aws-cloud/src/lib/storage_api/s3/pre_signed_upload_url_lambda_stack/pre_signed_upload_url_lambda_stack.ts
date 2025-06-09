// upload from command line
// aws s3 cp template.json s3://website-template-json-files/templates/

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { capitalizeFirstLetter } from '../../../util';
import * as s3 from 'aws-cdk-lib/aws-s3';

interface PreSignedUploadURLLambdaStackProps extends cdk.StackProps {
  appsyncApi: appsync.IGraphqlApi;
  buckets: s3.IBucket[];
  graphQLFieldName: string;
}

export class PreSignedUploadURLLambdaStack extends cdk.Stack {
  public preSignedURLLambda: lambda.Function;
  constructor(
    scope: Construct,
    id: string,
    props: PreSignedUploadURLLambdaStackProps
  ) {
    super(scope, id, props);

    const { buckets, appsyncApi, graphQLFieldName } = props;

    // Step 3: Create a Lambda function to upload files to the bucket prop
    this.preSignedURLLambda = new lambda.Function(this, `BucketUploadLambda`, {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
    });

    // Grant Lambda access to S3 bucket
    buckets.forEach((bucket) => bucket.grantReadWrite(this.preSignedURLLambda));

    // Step 5: Attach the Lambda function to the AppSync API
    const preSignURLLambdaDs = appsyncApi.addLambdaDataSource(
      `PreSignedUploadURLLambdaDataSource`,
      this.preSignedURLLambda
    );

    const resolverId = capitalizeFirstLetter(graphQLFieldName);

    preSignURLLambdaDs.createResolver(resolverId, {
      typeName: 'Mutation',
      fieldName: graphQLFieldName,
    });
  }
}
