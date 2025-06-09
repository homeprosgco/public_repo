import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { join } from 'path';

interface AppsyncSharedFunctionsProps extends cdk.StackProps {
  api: appsync.IGraphqlApi;
  dataSource: appsync.DynamoDbDataSource;
  functionBasePath?: string;
}

export class AppsyncSharedFunctionsStack extends cdk.Stack {
  public readonly sharedFunctions: { [key: string]: appsync.AppsyncFunction };

  constructor(
    scope: Construct,
    id: string,
    props: AppsyncSharedFunctionsProps
  ) {
    super(scope, id, props);

    const { api, dataSource, functionBasePath = '../' } = props;

    const baseFunction = (functionName: string, codePath: string) =>
      new appsync.AppsyncFunction(this, `${functionName}Function`, {
        name: functionName,
        api,
        dataSource,
        code: appsync.Code.fromAsset(
          join(__dirname, `${functionBasePath}/${codePath}`)
        ),
        runtime: appsync.FunctionRuntime.JS_1_0_0,
      });

    this.sharedFunctions = {
      authValidation: baseFunction('AuthValidation', '_auth_validation'),
      constructDynamoDBKey: baseFunction(
        'ConstructDynamoDBKey',
        '_construct_dynamodb_key'
      ),
      processRequestHeaders: baseFunction(
        'ProcessRequestHeaders',
        '_process_request_headers'
      ),
      validateEntityOperation: baseFunction(
        'ValidateEntityOperation',
        '_validate_entity_operation'
      ),
    };
  }
}
