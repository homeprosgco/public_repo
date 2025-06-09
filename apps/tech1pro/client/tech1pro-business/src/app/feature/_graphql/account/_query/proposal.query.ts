import { gql } from 'apollo-angular';

const proposalsGql = gql`
query proposals {
  account {
    proposals {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
`;

const proposalById = gql`
query proposalById($proposalId: String!) {
  account {
    proposalById(proposalId: $proposalId) {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
`;