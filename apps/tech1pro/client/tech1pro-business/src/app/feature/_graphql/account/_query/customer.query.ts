import {gql} from 'apollo-angular';

const customersGql = gql`
query customers {
  account {
    customers {
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
      prospectId
      type
    }
  }
}
`;

const customerByIdGql = gql`
query customerById($customerId: String!) {
  account {
    customerById(customerId: $customerId) {
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
      prospectId
      type
    }
  }
}
`;