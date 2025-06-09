import {gql} from 'apollo-angular';

const estimatesGql = gql`
query estimates {
  account {
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

const estimateByIdGql = gql`
query estimateById($estimateId: String!) {
  account {
    estimateById(estimateId: $estimateId) {
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