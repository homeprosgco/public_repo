import {gql} from 'apollo-angular';

const createJobLeadGql = gql`
mutation createJobLead($jobLeadInput: JobLeadInput!) {
  createJobLead(jobLeadInput: $jobLeadInput) {
    jobLeadLastAdded {
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

const updateJobLeadGql = gql`
mutation updateJobLead($jobLeadIdInput: String!, $updateJobLeadInput: JobLeadInput!) {
  updateJobLead(jobLeadIdInput: $jobLeadIdInput, updateJobLeadInput: $updateJobLeadInput) {
    jobLeadLastUpdated {
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

const removeJobLeadGql = gql`
mutation removeJobLead($jobLeadIdInput: String!) {
  removeJobLead(jobLeadIdInput: $jobLeadIdInput) {
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
