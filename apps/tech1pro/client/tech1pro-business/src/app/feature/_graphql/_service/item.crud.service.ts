import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Apollo, gql } from "apollo-angular";
import { ItemByIdGQL, ItemInput, ItemsGQL, RemoveItemGQL, UpdateItemGQL } from "src/generated/graphql";

const createItemGql = gql`
mutation createItem($itemInput: ItemInput!) {
  createItem(itemInput: $itemInput) {
    itemLastAdded {
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

@Injectable({
  providedIn: 'root'
})
export class ItemCrudService {

  constructor(
    private apollo: Apollo,
    private updateItemGQL: UpdateItemGQL,
    private removeItemGQL: RemoveItemGQL,
    private itemsGQL: ItemsGQL,
    private itemByIdGQL: ItemByIdGQL
  ) {}

  addItem$(itemInput: ItemInput) {
    this.apollo.mutate({
      mutation: createItemGql,
      variables: { itemInput }
    }).pipe(
      map((res: any) => res.data?.addItem.itemLastAdded)
    );
  }

  updateItem$(itemIdInput: string, updateItemInput: ItemInput) {
    return this.updateItemGQL.mutate({ itemIdInput, updateItemInput}).pipe(
      map(res => res.data?.updateItem.itemLastUpdated)
    );
  }

  removeItem$(itemIdInput: string) {
    return this.removeItemGQL.mutate({ itemIdInput }).pipe(
      map(res => res.data?.removeItem.items)
    );
  }

  fetchItems$() {
    return this.itemsGQL.fetch().pipe(
      map(res => res.data.account.items)
    );
  }

  fetchItemById$(itemId: string) {
    return this.itemByIdGQL.fetch({itemId}).pipe(
      map(res => res.data.account.itemById)
    )
  }
  
}