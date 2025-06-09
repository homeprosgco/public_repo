import {gql} from 'apollo-angular';

const companyProfileGql = gql`
query companyProfile {
  account {
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