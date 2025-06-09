import { gql } from 'apollo-angular';

const beneficiariesByCustomerIdGql = gql`
query beneficiariesByCustomerId($customerId: String!) {
  account {
    beneficiariesByCustomerId(customerId: $customerId) {
      address { 
        streetAddress 
        city 
        state 
        zipcode 
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      type
    }
  }
}
`;

const beneficiariesGql = gql`
query beneficiaries {
  account {
    beneficiaries {
      address { 
        streetAddress 
        city 
        state 
        zipcode 
      }
      addressId
      created
      email
      displayName
      firstname
      lastname
      id
      phone
      type
    }
  }
}
`;