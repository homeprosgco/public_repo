import { gql } from 'apollo-angular';

const allAccounts = gql`
  query allAccounts {
    allAccounts {
      id
      accountOwnerId
    }
  }
`

const accountId = gql`query accountId {
  accountId {
    id
  }
}
`;