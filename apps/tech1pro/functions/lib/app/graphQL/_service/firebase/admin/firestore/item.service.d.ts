import { Item, ItemInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class ItemService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "items";
    constructor(firestoreSvc: FirestoreService);
    addItem(accountId: string, itemInput: ItemInput): Promise<Item>;
    getLastAddedItem(accountId: string): Promise<Item>;
    getLastUpdatedItem(accountId: string): Promise<Item>;
    getItems(accountId: string): Promise<Item[]>;
    getItemById(accountId: string, itemId: string): Promise<Item>;
    getItemsWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<Item[]>;
    updateItem(accountId: string, itemId: string, itemInput: ItemInput): Promise<import("../../_types/types").TypeDataWithId<Item>>;
    deleteItem(accountId: string, itemId: string): Promise<FirebaseFirestore.WriteResult>;
}
