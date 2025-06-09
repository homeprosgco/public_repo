import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';
import {
  AppSyncResolverContext,
  APIKeyIdentity,
  CognitoIdentity,
  IAMIdentity,
  LambdaIdentity,
} from '../context_interface';

// ✅ Type Guards
const isAPIKeyIdentity = (identity: any): identity is APIKeyIdentity =>
  identity?.authenticationType === 'API_KEY';

const isCognitoIdentity = (identity: any): identity is CognitoIdentity =>
  identity?.authenticationType === 'AMAZON_COGNITO_USER_POOLS';

const isIAMIdentity = (identity: any): identity is IAMIdentity =>
  identity?.authenticationType === 'AWS_IAM';

const isLambdaIdentity = (identity: any): identity is LambdaIdentity =>
  identity?.authenticationType === 'AWS_LAMBDA';

// ✅ Fetch Cognito Public Keys
const jwks = jwksClient({
  jwksUri: `https://cognito-idp.${process.env['AWS_REGION']}.amazonaws.com/${process.env['USER_POOL_ID']}/.well-known/jwks.json`,
});

// ✅ Helper function to get public key from JWKS
const getSigningKey = async (kid: string) => {
  const key = await jwks.getSigningKey(kid);
  return key.getPublicKey();
};

export const handler = async (event: AppSyncResolverContext) => {
  console.log('🔹 Authorizer Event:', JSON.stringify(event, null, 2));

  const identity = event.identity || {};
  let authType: string;

  try {
    // ✅ Handle API Key Authentication
    if (isAPIKeyIdentity(identity)) {
      authType = 'API_KEY';
      console.log('✅ Authenticated via API Key');

      return {
        isAuthorized: true,
        resolverContext: {
          apiKeyUsed: identity.apiKey,
          sourceIp: identity.sourceIp,
        },
        deniedFields: [],
        ttlOverride: 300,
      };
    }

    // ✅ Handle IAM Authentication
    if (isIAMIdentity(identity)) {
      authType = 'AWS_IAM';
      console.log('✅ Authenticated via IAM. User ARN:', identity.userArn);

      return {
        isAuthorized: true,
        resolverContext: {
          iamUserArn: identity.userArn,
          iamAccountId: identity.accountId,
          cognitoIdentityId: identity.cognitoIdentityId,
        },
        deniedFields: [],
        ttlOverride: 300,
      };
    }

    // ✅ Handle Lambda Custom Authentication
    if (isLambdaIdentity(identity)) {
      authType = 'AWS_LAMBDA';
      console.log('✅ Authenticated via Lambda Authorizer');

      return {
        isAuthorized: true,
        resolverContext: {
          lambdaAuthContext: identity.lambdaAuth,
          sourceIp: identity.sourceIp,
        },
        deniedFields: [],
        ttlOverride: 300,
      };
    }

    // ✅ Handle Cognito User Pool Authentication
    if (isCognitoIdentity(identity)) {
      authType = 'AMAZON_COGNITO_USER_POOLS';
      console.log(
        '✅ Authenticated via Cognito User Pool. Email:',
        identity.claims.email
      );

      const token = event.request.headers?.['Authorization'];
      if (!token) throw new Error('🚨 Unauthorized: No token provided');

      // ✅ Decode Token to Extract the Key ID (kid)
      const decoded: any = jwt.decode(token, { complete: true });
      if (!decoded) throw new Error('🚨 Unauthorized: Invalid token');

      const kid = decoded.header.kid;
      if (!kid) throw new Error('🚨 Unauthorized: Missing key ID');

      // ✅ Get public key for verification
      const publicKey = await getSigningKey(kid);

      // ✅ Verify JWT Signature & Claims
      const verified = jwt.verify(token, publicKey, {
        algorithms: ['RS256'],
        issuer: `https://cognito-idp.${process.env['AWS_REGION']}.amazonaws.com/${process.env['USER_POOL_ID']}`,
      }) as any;

      // ✅ Extract User Information from Verified Token
      const userId = verified.sub;
      const email = verified.email;
      const appId = verified['custom:appId'];
      let tenantId = verified['custom:tenantId'];

      if (!appId) throw new Error('🚨 Unauthorized: Missing App ID');
      if (!tenantId) throw new Error('🚨 Unauthorized: Missing Tenant ID');
      if (!userId) throw new Error('🚨 Unauthorized: Missing User ID');

      console.log('✅ Token Verified:', verified);

      return {
        isAuthorized: true,
        resolverContext: {
          userId,
          email,
          tenantId,
          appId,
          groups: verified['cognito:groups'] || [],
        },
        deniedFields: [],
        ttlOverride: 300,
      };
    }

    // 🚨 If none of the authentication methods match
    console.log('🚨 Unknown authentication method');
    return {
      isAuthorized: false,
    };
  } catch (err: any) {
    console.error('🚨 Authorization Error:', err.message);

    // ✅ Return isAuthorized: false instead of throwing an error
    return {
      isAuthorized: false,
    };
  }
};
