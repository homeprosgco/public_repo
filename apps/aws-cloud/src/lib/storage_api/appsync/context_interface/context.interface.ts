export type AppSyncIdentityLambda = {
  resolverContext: {
    userId: string;
    email: string;
    tenantId: string;
    appId: string;
    groups: string[];
  };
};

type AppSyncIdentityIAM = {
  accountId: string;
  cognitoIdentityPoolId: string;
  cognitoIdentityId: string;
  sourceIp: string[];
  username: string;
  userArn: string;
  cognitoIdentityAuthType: string;
  cognitoIdentityAuthProvider: string;
};

export type AppSyncIdentityCognito = {
  sourceIp: string[];
  username: string;
  groups: string[] | null;
  sub: string;
  issuer: string;
  claims: any;
  defaultAuthStrategy: string;
};

type Identity =
  | AppSyncIdentityLambda
  | AppSyncIdentityIAM
  | AppSyncIdentityCognito;

interface AppSyncEvent<T = any> {
  arguments: T;
  args: T;
  source: any; // A map that contains the resolution of the parent field.
  error?: {
    message: string;
    type: string;
  };
  info: {
    fieldName: string;
    parentTypeName: string;
    variables: Record<string, any>;
    selectionSetList: string[];
    selectionSetGraphQL: string;
  };
  identity: AppSyncIdentity;
  request: {
    headers: Record<string, string>;
  };
  prev: any;
  stash: any;
  result: any;
}

type AppSyncIdentity =
  | APIKeyIdentity
  | CognitoIdentity
  | IAMIdentity
  | LambdaIdentity
  | null;

export interface APIKeyIdentity {
  apiKey: string;
  sourceIp: string[];
  authenticationType: 'API_KEY';
}

export interface CognitoIdentity {
  sub: string;
  issuer: string;
  claims: {
    email?: string;
    'cognito:groups'?: string[];
  };
  sourceIp: string[];
  authenticationType: 'AMAZON_COGNITO_USER_POOLS';
}

export interface IAMIdentity {
  accountId: string;
  cognitoIdentityAuthType: string;
  cognitoIdentityAuthProvider: string;
  cognitoIdentityId: string;
  cognitoIdentityPoolId: string;
  sourceIp: string[];
  userArn: string;
  username: string;
  authenticationType: 'AWS_IAM';
}

export interface LambdaIdentity {
  lambdaAuth: string;
  sourceIp: string[];
  authenticationType: 'AWS_LAMBDA';
}

export type AppSyncResolverContext = AppSyncEvent;

interface ResolverContext {
  arguments: any; // A map that contains all GraphQL arguments for this field.
  args: any; // A map that contains all GraphQL arguments for this field.
  identity: Identity & { appId: string; tenantId: string }; // An object that contains information about the caller. For more information about the structure of this field, see Identity.
  source: any; // A map that contains the resolution of the parent field.
  error?: {
    message: string;
    type: string;
  };
  stash: any;
  result: any;
  prev: any;
  request: Request;
  info: {
    fieldName: string;
    parentTypeName: string;
    variables: any;
    selectionSetList: string[];
    selectionSetGraphQL: string;
  };
}
