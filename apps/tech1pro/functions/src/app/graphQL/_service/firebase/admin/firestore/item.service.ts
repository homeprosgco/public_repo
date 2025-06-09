import { Item, ItemInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface ItemCreated extends Omit<Item, "created"> {
  created: string;
}

interface ItemUpdated extends Omit<Item, "updated"> {
  updated: string;
}

@Injectable()
export class ItemService {

  readonly collectionName = 'items';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addItem(accountId: string, itemInput: ItemInput) {
    try {
      return await this.firestoreSvc.addDocument<Item>(this.#collectionPath(accountId), {
        ...itemInput,
        created: createdISOStringDate()
      }) as Item;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedItem(accountId: string) {
    try {
      const sortItemsByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<ItemCreated>(this.#collectionPath(accountId));
      return sortItemsByCreatedDate[0] as Item;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedItem(accountId: string) {
    try {
      const sortItemsByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<ItemUpdated>(this.#collectionPath(accountId));
      return sortItemsByUpdatedDate[0] as Item;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getItems(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Item>(this.#collectionPath(accountId)) as Item[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getItemById(accountId: string, itemId: string) {
    try {
      return await this.firestoreSvc.getDocument<Item>(`${this.#collectionPath(accountId)}/${itemId}`) as Item;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getItemsWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as Item[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateItem(accountId: string, itemId: string, itemInput: ItemInput) {
    try {
      return await this.firestoreSvc.updateDocument<Item>(`${this.#collectionPath(accountId)}/${itemId}`, {
        ...itemInput,
        updated: createdISOStringDate()
      });

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteItem(accountId: string, itemId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, itemId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}