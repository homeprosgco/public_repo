import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { Construct } from 'constructs';
import { join } from 'path';
import { capitalizeFirstLetter } from '../../../../util';

export interface GraphQLCrudStackProps extends cdk.StackProps {
  api: appsync.IGraphqlApi;
  dataSource: appsync.DynamoDbDataSource;
  entityType: string; // Example: "Customer", "Order", "Job"
}

export class GraphQLCrudStack extends cdk.Stack {
  // public readonly genericContextBuilderFunction: appsync.AppsyncFunction;
  // public readonly dynamoDbFunction: appsync.AppsyncFunction;

  constructor(scope: Construct, id: string, props: GraphQLCrudStackProps) {
    super(scope, id, props);

    const { api, dataSource, entityType } = props;

    // this.genericContextBuilderFunction = new appsync.AppsyncFunction(
    //   this,
    //   `${entityType}-AppsyncFunction`,
    //   {
    //     name: `${entityType}-AppsyncFunction`,
    //     api,
    //     dataSource,
    //     code: appsync.Code.fromAsset(
    //       join(
    //         __dirname,
    //         'unit/graphql_context_resolver_function'
    //       )
    //     ),
    //     runtime: appsync.FunctionRuntime.JS_1_0_0,
    //   }
    // );

    // this.dynamoDbFunction = new appsync.AppsyncFunction(
    //   this,
    //   `${entityType}-DynamoDBFunction`,
    //   {
    //     name: `${entityType}-DynamoDBFunction`,
    //     api,
    //     dataSource,
    //     code: appsync.Code.fromAsset(
    //       join(
    //         __dirname,
    //         'unit/generic_dynamodb_function'
    //       )
    //     ),
    //     runtime: appsync.FunctionRuntime.JS_1_0_0,
    //   }
    // );

    // const operations = ['put', 'get', 'update', 'delete', 'query'];
    const operations = ['put'];

    operations.forEach((operation) => {
      const fieldName = `${operation}${capitalizeFirstLetter(entityType)}`;

      new appsync.Resolver(this, `${capitalizeFirstLetter(fieldName)}-PipelineResolver`, {
        api,
        typeName:
          fieldName.startsWith('get') || fieldName.startsWith('query')
            ? 'Query'
            : 'Mutation',
        fieldName,
        runtime: appsync.FunctionRuntime.JS_1_0_0,
        pipelineConfig: [],
        code: appsync.Code.fromAsset(join(__dirname, '../appsync/graphql_auth_validation.pipeline.js')),
      });
    });
  }
}
