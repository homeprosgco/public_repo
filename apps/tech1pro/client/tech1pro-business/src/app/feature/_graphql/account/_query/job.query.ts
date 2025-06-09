import {gql} from 'apollo-angular';

const jobsGql = gql`
query jobs {
  account {
    jobs {
      customerId
      id
      status
      createdById
      definedWorkScope
      jobLeadId
      imageURLs
      fileURLs
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
      assignedToId
      startDate
      completedDate
      estimateId
      proposalId
      poNumber
      jobManagerId
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
    }
  }
}
`;

const jobByIdGql = gql`
query jobById($jobId: String!) {
  account {
    jobById(jobId: $jobId) {
      customerId
      id
      status
      createdById
      definedWorkScope
      jobLeadId
      imageURLs
      fileURLs
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
      assignedToId
      startDate
      completedDate
      estimateId
      proposalId
      poNumber
      jobManagerId
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
    }
  }
}
`;