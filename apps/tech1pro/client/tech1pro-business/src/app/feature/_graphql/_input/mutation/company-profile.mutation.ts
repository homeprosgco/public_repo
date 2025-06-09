import {gql} from 'apollo-angular';

const createCompanyProfileGql = gql`
mutation createCompanyProfile($companyProfileInput: CompanyProfileInput!) { 
  createCompanyProfile(companyProfileInput: $companyProfileInput) { 
    id 
    companyProfile { 
      bio 
      companyName 
      created 
      logoURL 
      email 
      phone 
      website 
    } 
  }
}
`;

const updateCompanyProfileGql = gql`
mutation updateCompanyProfile($companyIdInput: String!, $updateCompanyProfileInput: CompanyProfileInput!) {
  updateCompanyProfile(companyIdInput: $companyIdInput, updateCompanyProfileInput: $updateCompanyProfileInput) {
    companyProfile {
      bio 
      companyName 
      created 
      logoURL 
      email 
      phone 
      website 
    }
  }
}
`;

const removeCompanyProfileGql = gql`
mutation removeCompanyProfile($companyIdInput: String!) {
  removeCompanyProfile(companyIdInput: $companyIdInput) {
    accountId: id
  }
}
`;