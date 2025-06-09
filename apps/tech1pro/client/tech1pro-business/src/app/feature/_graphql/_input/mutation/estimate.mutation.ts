import {gql} from 'apollo-angular';

const addEstimateGql = gql`
mutation addEstimate($estimateInput: EstimateInput!) {
  addEstimate(estimateInput: $estimateInput) {
    estimateLastAdded {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      expires
      fileURLs
      id
      imageURLs
      jobLeadId
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
      notes {
        id
        userId
        note
        created
      }
      number
      prospectId
      referenceId
      status
      viewedDate
    }
  }
}
`;

const updateEstimateGql = gql`
mutation updateEstimate($estimateIdInput: String!, $updateEstimateInput: EstimateInput!) {
  updateEstimate(estimateIdInput: $estimateIdInput, updateEstimateInput: $updateEstimateInput) {
    estimateLastUpdated {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      expires
      fileURLs
      id
      imageURLs
      jobLeadId
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
      notes {
        id
        userId
        note
        created
      }
      number
      prospectId
      referenceId
      status
      viewedDate
    }
  }
}
`;

const removeEstimateGql = gql`
mutation removeEstimate($estimateIdInput: String!) {
  removeEstimate(estimateIdInput: $estimateIdInput) {
    estimates {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
      expires
      fileURLs
      id
      imageURLs
      jobLeadId
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
      notes {
        id
        userId
        note
        created
      }
      number
      prospectId
      referenceId
      status
      viewedDate
    }
  }
}
`;
