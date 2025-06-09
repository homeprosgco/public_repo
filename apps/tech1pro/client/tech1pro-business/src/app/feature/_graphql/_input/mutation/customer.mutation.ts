import {gql} from 'apollo-angular';

export const addCustomerGql = gql`
mutation addCustomer($customerInput: CustomerInput!) {
  addCustomer(customerInput: $customerInput) {
    customerLastAdded {
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

export const updateCustomerGql = gql`
mutation updateCustomer($customerIdInput: String!, $updateCustomerInput: CustomerInput) {
  updateCustomer(customerIdInput: $customerIdInput, updateCustomerInput: $updateCustomerInput) {
    customerLastUpdated {
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
`;

export const removeCustomerGql = gql`
mutation removeCustomer($customerIdInput: String!) {
  removeCustomer(customerIdInput: $customerIdInput) {
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