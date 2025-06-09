import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

interface AddUserPoolGroupStackProps extends cdk.StackProps {
    userPool: cognito.IUserPool;
    groups: { name: string; description?: string }[];
}

export class AddUserPoolGroupStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: AddUserPoolGroupStackProps) {
        super(scope, id, props);

        const { userPool, groups } = props;

        groups.forEach((group) => {
            new cognito.CfnUserPoolGroup(this, `${group.name}Group`, {
                groupName: group.name,
                userPoolId: userPool.userPoolId,
                description: group.description || '',
            });
        });

        new cdk.CfnOutput(this, 'CognitoUserPoolId', {
            value: userPool.userPoolId,
        });
    }
}

// ✅ Create Cognito User Groups
// ✅ Define User Pool Groups
// const groups = [
//     { name: 'TenantAdmin', description: 'Administrators with full access' },
//     { name: 'ProjectManager', description: 'Manages projects in a tenant' },
//     { name: 'TeamMember', description: 'Standard team member' },
//     { name: 'Viewer', description: 'Read-only access' },
//   ];
  
//   // ✅ Deploy Groups Stack
//   new AddUserPoolGroupStack(app, 'AddUserPoolGroupStack', {
//     userPool,
//     groups,
//   });
