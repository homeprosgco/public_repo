import {gql} from 'apollo-angular';

const itemsGql = gql`
query items {
  account {
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

const itemByIdGql = gql`
query itemById($itemId: String!) {
  account {
    itemById(itemId: $itemId) {
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
