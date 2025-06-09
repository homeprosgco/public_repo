import { gql } from 'apollo-angular';
import { onProspectFragment } from '../../_fragment/fragment';

const addProspectGql = gql`
  mutation addProspect($prospectInput: ProspectInput!) {
    addProspect(prospectInput: $prospectInput) {
      prospectLastAdded {
        ...prospectFields
      }
    }
    ${onProspectFragment}
  }
`;

const removeProspectGQL = gql`mutation removeProspect($prospectIdInput: String!) {
  removeProspect(prospectIdInput: $prospectIdInput) {
    prospects {
      ...prospectFields
    }
  }
}`;

const updateProspectGql = gql`
  mutation updateProspect($prospectIdInput: String!, $updateProspectInput: ProspectInput!) {
    updateProspect(prospectIdInput: $prospectIdInput, updateProspectInput: $updateProspectInput) {
      prospectLastUpdated {
        ...prospectFields
      }
    }
    ${onProspectFragment}
  }
`;