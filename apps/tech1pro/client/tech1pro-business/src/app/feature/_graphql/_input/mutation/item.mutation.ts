import {gql} from 'apollo-angular';


const updateItemGql = gql`
mutation updateItem($itemIdInput: String!, $updateItemInput: ItemInput!) {
  updateItem(itemIdInput: $itemIdInput, updateItemInput: $updateItemInput) {
    itemLastUpdated {
      brand
      category
      description
      id
      imageURL
      installLinks
      make
      modelNumber
      name
      orderLinks
      purchasePrice
      salePrice
      sku
      websiteReferences
    }
  }
}
`;

const removeItemGql = gql`
mutation removeItem($itemIdInput: String!) {
  removeItem(itemIdInput: $itemIdInput) {
    items {
      brand
      category
      description
      id
      imageURL
      installLinks
      make
      modelNumber
      name
      orderLinks
      purchasePrice
      salePrice
      sku
      websiteReferences
    }
  }
}
`;