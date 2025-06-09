import { gql } from 'apollo-angular';

const workServicesGql = gql`
query workServices {
  account {
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

const workServiceByIdGql = gql`
query workServiceById($workServiceId: String!) {
  account {
    workServiceById(workServiceId: $workServiceId) {
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