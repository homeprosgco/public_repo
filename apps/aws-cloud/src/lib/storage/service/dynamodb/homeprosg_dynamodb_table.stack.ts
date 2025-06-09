import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

interface HomeProSgCoDynamoDBTableStackProps extends cdk.StackProps {}

export class HomeProSgCoDynamoDBTableStack extends cdk.Stack {
  public readonly homeProSgCoDynamoDBTable: dynamodb.Table;

  constructor(scope: Construct, id: string, props?: HomeProSgCoDynamoDBTableStackProps) {
    super(scope, id, props);

    // ✅ Create DynamoDB Table
    this.homeProSgCoDynamoDBTable = new dynamodb.Table(this, "DynamoDBTable", {
      partitionKey: { name: "PK", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "SK", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      tableClass: dynamodb.TableClass.STANDARD,
      removalPolicy: cdk.RemovalPolicy.RETAIN, // Prevent accidental deletion
      stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES, // ✅ Enable
    });

    // ✅ Add Global Secondary Index (GSI) for EntityType + TenantId
    this.homeProSgCoDynamoDBTable.addGlobalSecondaryIndex({
      indexName: "EntityTypeAccountIndex",
      partitionKey: { name: "EntityType", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "TenantId", type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    this.homeProSgCoDynamoDBTable.addGlobalSecondaryIndex({
      indexName: "EntityTypeIndex",
      partitionKey: { name: "EntityType", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "created", type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });


    // ✅ CDK Outputs
    new cdk.CfnOutput(this, "DynamoDBTableName", {
      value: this.homeProSgCoDynamoDBTable.tableName,
    });

    new cdk.CfnOutput(this, "DynamoDBTableArn", {
      value: this.homeProSgCoDynamoDBTable.tableArn,
    });

    new cdk.CfnOutput(this, "DynamoDBGSIName", {
      value: "EntityTypeAccountIndex",
    });
  }
}
