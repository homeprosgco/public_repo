import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { join } from 'path';
import {
  capitalizeFirstLetter,
  snakeToCamelCase,
} from 'libs/aws-cloud/src/lib/util';

interface AppsyncResolverStackProps<T> extends cdk.StackProps {
  entityType: string;
  api: appsync.IGraphqlApi;
  dataSource: appsync.DynamoDbDataSource;
  operations?: string[]; // Allow passing custom operations
  sharedFunctions: { [key: string]: appsync.AppsyncFunction };
}

export class AppsyncResolverStack<T> extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: AppsyncResolverStackProps<T>
  ) {
    super(scope, id, props);

    const { entityType, api, dataSource, sharedFunctions } = props;
    const operations = props.operations ?? [
      'put',
      'get',
      'query',
      'update',
      'soft_delete',
      'delete',
    ];

    const accessPipelineConfig = [
      sharedFunctions['validateEntityOperation'],
      sharedFunctions['authValidation'],
      sharedFunctions['processRequestHeaders'],
      sharedFunctions['constructDynamoDBKey'],
    ];

    const baseOperationFunction = (functionName: string, operation: string) => {
      let codePath = `${operation}_item`;
      if (operation == 'query') {
        codePath = codePath + 's';
      }

      return new appsync.AppsyncFunction(
        this,
        `${capitalizeFirstLetter(functionName)}DataFunction`,
        {
          name: `${capitalizeFirstLetter(functionName)}DataFunction`,
          api,
          dataSource,
          code: appsync.Code.fromAsset(`../../functions/${operation}_item`),
          runtime: appsync.FunctionRuntime.JS_1_0_0,
        }
      );
    };

    const baseResolver = (
      fieldName: string,
      typeName: string,
      pipelineConfig: appsync.AppsyncFunction[]
    ) =>
      new appsync.Resolver(
        this,
        `${capitalizeFirstLetter(fieldName)}Resolver`,
        {
          api,
          typeName,
          fieldName,
          runtime: appsync.FunctionRuntime.JS_1_0_0,
          pipelineConfig: [...accessPipelineConfig, ...pipelineConfig],
          code: appsync.Code.fromAsset(join(__dirname, '../default')),
        }
      );

    for (const operation of operations) {
      const typeName = ['get', 'query'].includes(operation)
        ? 'Query'
        : 'Mutation';
      const name = snakeToCamelCase(operation);
      baseResolver(`${name}${entityType}`, typeName, [
        baseOperationFunction(`${name}${entityType}`, operation),
      ]);
    }

    // Output API details
    new cdk.CfnOutput(this, `${entityType}GraphQLAPIID`, {
      value: api.apiId,
      description: `GraphQL API ID for ${entityType}`,
    });
  }
}

// Example Usage for Different GraphQL Types
// Stack for User Entity
// typescript
// Copy
// Edit
// new AppsyncResolverStack(app, 'UserResolverStack', {
//   entityType: 'User',
//   api: myGraphqlApi,
//   dataSource: userDataSource,
//   operations: ['get', 'put', 'update', 'delete'],
// });
// Stack for Product Entity
// typescript
// Copy
// Edit
// new AppsyncResolverStack(app, 'ProductResolverStack', {
//   entityType: 'Product',
//   api: myGraphqlApi,
//   dataSource: productDataSource,
//   operations: ['query', 'get', 'put', 'delete'],
//   functionBasePath: '../../custom-resolvers',
// });
