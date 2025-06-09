import {gql} from 'apollo-angular';

const createWorkServiceGql = gql`
mutation createWorkService($workServiceInput: WorkServiceInput!) {
  createWorkService(workServiceInput: $workServiceInput) {
    workServiceLastAdded {
      category
      costGuides
      created
      description
      id
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
      name
      notes {
        id
        userId
        note
        created
      }
      salePrice
      timeToComplete
    }
  }
}
`;

const updateWorkServiceGql = gql`
mutation updateWorkService($workServiceIdInput: String!, $updateWorkServiceInput: WorkServiceInput!) {
  updateWorkService(workServiceIdInput: $workServiceIdInput, updateWorkServiceInput: $updateWorkServiceInput) {
    workServiceLastUpdated {
      category
      costGuides
      created
      description
      id
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
      name
      notes {
        id
        userId
        note
        created
      }
      salePrice
      timeToComplete
    }
  }
}
`;

const removeWorkServiceGql = gql`
mutation removeWorkService($workServiceIdInput: String!) {
  removeWorkService(workServiceIdInput: $workServiceIdInput) {
    workServices {
      category
      costGuides
      created
      description
      id
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
      name
      notes {
        id
        userId
        note
        created
      }
      salePrice
      timeToComplete
    }
  }
}
`;