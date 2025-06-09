// import * as cdk from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import { Stage } from 'aws-cdk-lib';
// import { HomeProSgCoDynamoDBTableStack } from './infrastucture/dynamodb';
// import { CognitoStack } from './infrastucture/cognito';

// // Define the stage
// export class AppStage extends Stage {
//   constructor(scope: Construct, id: string, props?: cdk.StageProps) {
//     super(scope, id, props);

//     // Add both stacks to the stage
//     const homeProSgCoDynamoDBTableStack = new HomeProSgCoDynamoDBTableStack(
//       this,
//       'DynamoDBTableStack'
//     );

//     new CognitoStack(this, `UserPool`, {
//       dynamoTable: homeProSgCoDynamoDBTableStack.homeProSgCoDynamoDBTable,
//     });

//     // ✅ Step 6: Deploy AppSync API Stack (Depends on User Pool & DynamoDB)
//     // new AppSyncApiStack(app, `AppSyncAPI`, {
//     //   userPool: userPoolStack.userPool,
//     //   homeProSgCoDynamoDBTable:
//     //     homeProSgCoDynamoDBTableStack.homeProSgCoDynamoDBTable,
//     // });
//   }
// }
