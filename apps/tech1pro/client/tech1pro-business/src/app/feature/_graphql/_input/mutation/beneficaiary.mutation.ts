import { gql } from 'apollo-angular';

const addBeneficiaryGql = gql`
mutation addBeneficiary($beneficiaryInput: BeneficiaryInput!) {
  addBeneficiary(beneficiaryInput: $beneficiaryInput) {
    beneficiaryLastAdded {
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

const updateBeneficiaryGql = gql`
mutation updateBeneficiary($beneficiaryIdInput: String!, $updateBeneficiaryInput: BeneficiaryInput!) {
  updateBeneficiary(beneficiaryIdInput: $beneficiaryIdInput, updateBeneficiaryInput: $updateBeneficiaryInput) {
    beneficiaryLastUpdated {
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

const removeBeneficiaryGql = gql`
mutation removeBeneficiary($beneficiaryIdInput: String!) {
  removeBeneficiary(beneficiaryIdInput: $beneficiaryIdInput) {
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