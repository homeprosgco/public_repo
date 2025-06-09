import {gql} from 'apollo-angular';

const createJob = gql`
mutation createJob($jobInput: JobInput!) {
  createJob(jobInput: $jobInput) {
    jobLastAdded {
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

const updateJobGql = gql`
mutation updateJob($jobIdInput: String!, $updateJobInput: JobInput!) {
  updateJob(jobIdInput: $jobIdInput, updateJobInput: $updateJobInput) {
    jobLastUpdated {
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

const removeJobGql = gql`
mutation removeJob($jobIdInput: String!) {
  removeJob(jobIdInput: $jobIdInput) {
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