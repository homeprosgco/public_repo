import {gql} from 'apollo-angular';

const jobLeadByIdGql = gql`
query jobLeadById($jobLeadId: String!) {
  account {
    jobLeadById(jobLeadId: $jobLeadId) {
      id
      prospectId
      leadSource
      status
      createdById
      category
      addressId
      address { 
        streetAddress 
        city 
        state 
        zipcode 
      }
      requestedWorkScope
      created
      referenceId
    }
  }
}
`;

const jobLeadsGql = gql`
query jobLeads {
  account {
    jobLeads {
      id
      prospectId
      leadSource
      status
      createdById
      category
      addressId
      address { 
        streetAddress 
        city 
        state 
        zipcode 
      }
      requestedWorkScope
      created
      referenceId
    }
  }
}
`;