import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { join } from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';

interface AppSyncApiStackProps extends cdk.StackProps {
  userPool: IUserPool;
  homeProSgCoDynamoDBTable: dynamodb.Table;
}

export class AppSyncApiStack extends cdk.Stack {
  public readonly appsyncApi: appsync.GraphqlApi;
  public readonly homeProSgCoDynamoDBTableDatasource: appsync.DynamoDbDataSource;

  constructor(scope: Construct, id: string, props: AppSyncApiStackProps) {
    super(scope, id, props);

    const authorizerLambda = new lambda.Function(this, 'AuthorizerLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(join(__dirname, 'authorizer_lambda')), // Your Lambda directory
      environment: {
        USER_POOL_ID: props.userPool.userPoolId,
        AWS_REGION: this.region
      }
    });

    // Create AppSync API
    this.appsyncApi = new appsync.GraphqlApi(this, 'AppSyncAPI', {
      name: 'AppSyncAPI',
      definition: {
        schema: appsync.SchemaFile.fromAsset(join(__dirname, 'schema.graphql')),
      },
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.LAMBDA,
          lambdaAuthorizerConfig: {
            handler: authorizerLambda
          }
        },
        additionalAuthorizationModes: [
          {
            authorizationType: appsync.AuthorizationType.API_KEY,
            apiKeyConfig: {
              expires: cdk.Expiration.after(cdk.Duration.days(365)),
            },
          },
          {
            authorizationType: appsync.AuthorizationType.IAM,
          },
          {
            authorizationType: appsync.AuthorizationType.USER_POOL,
            userPoolConfig: { userPool: props.userPool },
          },
        ],
      },
    });

    this.homeProSgCoDynamoDBTableDatasource =
      this.appsyncApi.addDynamoDbDataSource(
        'DDBDatasource',
        props.homeProSgCoDynamoDBTable
      );

    // ✅ (Optional) Output API Endpoint
    new cdk.CfnOutput(this, 'GraphQLAPIEndpoint', {
      value: this.appsyncApi.graphqlUrl,
    });

    // ✅ (Optional) Output API Key (for dev/debugging)
    if (this.appsyncApi.apiKey) {
      new cdk.CfnOutput(this, 'GraphQLAPIKey', {
        value: this.appsyncApi.apiKey,
      });
    }
  }
}

// const app = new cdk.App();
// // Create the AppSync API and Data Source
// const api = new appsync.GraphqlApi(app, 'MyGraphqlApi', {
//   name: 'MyApi',
//   schema: appsync.Schema.fromAsset('schema.graphql'),
// });

// const dataSource = api.addDynamoDbDataSource('MyDataSource', myDynamoTable);

// // ✅ Create shared functions **once**
// const sharedFunctionsStack = new AppsyncSharedFunctionsStack(app, 'SharedFunctionsStack', {
//   api,
//   dataSource,
// });

// // ✅ Use shared functions across multiple resolver stacks
// new AppsyncResolverStack(app, 'UserResolverStack', {
//   entityType: 'User',
//   api,
//   dataSource,
//   sharedFunctions: sharedFunctionsStack.sharedFunctions,
//   operations: ['get', 'put', 'update', 'delete'],
// });

// new AppsyncResolverStack(app, 'ProductResolverStack', {
//   entityType: 'Product',
//   api,
//   dataSource,
//   sharedFunctions: sharedFunctionsStack.sharedFunctions,
//   operations: ['query', 'get', 'put', 'delete'],
// });
