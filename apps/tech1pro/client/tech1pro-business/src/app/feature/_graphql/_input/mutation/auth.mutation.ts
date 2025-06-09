import { gql } from 'apollo-angular';

const registerAuthUserGql = gql`
    mutation registerAuthUser($input: AuthUserInput!) {
      registerAuthUser(input: $input) {
        status
        statusCode
        operationType
        operationResult
        idToken
      }
    }
  `;

const signinAuthUserGql = gql`
  mutation signinAuthUser($input: AuthUserInput!) {
    signinAuthUser(input: $input) {
      status
      statusCode
      operationType
      operationResult
      idToken
    }
  }
`;

const signinWithCustomTokenGql = gql`
mutation authUserCustomSigninToken($input: AuthUserEmailInput!) {
  authUserCustomSigninToken(input: $input) {
    token
  }
}
`;

// testing purposes onlyl

const seedAuthUsers = gql`
  mutation seedAuthUsers { 
    seedAuthUsers {
      operationResult 
      operationType 
      status 
      statusCode
    } 
  }
`;

const seedTeamMembers = gql`
mutation seedTeamMembers { 
  seedTeamMembers { 
    accountOwnerId 
    activeAccount 
    created 
    id 
    userIds 
  } 
}
`;

const setActiveAccounts = gql`
mutation setActiveAccounts { 
  setActiveAccounts { 
    accountOwnerId 
    activeAccount 
    created 
    id 
    userIds 
  } 
}
`;

const getActiveAccounts = gql`
query activeAccounts { 
  activeAccounts { 
    accountOwnerId 
    activeAccount 
    created 
    id 
    userIds 
  } 
}
`;