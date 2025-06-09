import { gql } from 'apollo-angular';

const addInvoiceGql = gql`
mutation addInvoice($invoiceInput: InvoiceInput!) {
  addInvoice(invoiceInput: $invoiceInput) {
    invoiceLastAdded {
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

const updateInvoiceGql = gql`
mutation updateInvoice($invoiceIdInput: String!, $updateInvoiceInput: InvoiceInput!) {
  updateInvoice(invoiceIdInput: $invoiceIdInput, updateInvoiceInput: $updateInvoiceInput) {
    invoiceLastUpdated {
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

const removeInvoiceGql = gql`
mutation removeInvoice($invoiceIdInput: String!) {
  removeInvoice(invoiceIdInput: $invoiceIdInput) {
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