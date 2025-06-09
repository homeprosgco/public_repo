import {gql} from 'apollo-angular';

const invoicesGql = gql`
query invoices {
  account {
    invoices {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
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
      referenceId
      status
      viewedDate
    }
  }
}
`;

const invoiceByIdGql = gql`
query invoicesById($invoiceId: String!) {
  account {
    invoiceById(invoiceId: $invoiceId) {
      address {
        streetAddress
        city
        state
        zipcode
      }
      category
      created
      createdById
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
      referenceId
      status
      viewedDate
    }
  }
}
`;