import { gql } from 'apollo-angular';
import { onProspectFragment } from '../../_fragment/fragment';

const prospectsGQL = gql`query accountProspects {
  account {
    prospects {
      address {
        streetAddress
        city
        state
        zipcode
      }
      id 
      displayName 
      firstname 
      lastname 
      email 
      phone 
      type 
    }
  }
}`;

const prospectByIdGQL = gql`query accountProspectById($prospectId: String!){
  account{
      prospectById(prospectId: $prospectId) {
      ...prospectFields
    }
  }
  ${onProspectFragment}
}`;
