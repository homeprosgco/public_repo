import { gql } from 'apollo-angular';

const userProfileById = gql`query userByProfileId($userProfileId: String!) {
  userProfileById(userProfileId: $userProfileId) {
    id
    email
    idToken
    activeAccountId
  }
}`;