import { Injectable } from "@nestjs/common";
import { NextStepHomeRepairAccountsPath, randomArrayAmount } from "../../../../../../lib/util/util";
import { FirestoreService } from "../_firestore.service";

@Injectable()
export class DatasourceService {

  constructor(private firestoreSvc: FirestoreService){}

  collectionPath(accountId: string, collectionName: string) {
    return `${NextStepHomeRepairAccountsPath}/${accountId}/${collectionName}`
  }

  async createIndividual<T>(collectionPath: string, cb: () => T, min = 10, max = 35) {
    const ref = randomArrayAmount(min, max).map(async _ => {
      return await this.firestoreSvc.createDocument<T>(collectionPath, cb());
    });
    return this.#mapRef(ref);
  }

  async mergeIndividual<T>(documentPath: string, cb: () => T, min = 10, max = 35) {
    const ref = randomArrayAmount(min, max).map(async _ => {
      return await this.firestoreSvc.mergeDocument<T>(documentPath, cb());
    });
    return this.#mapRef(ref);
  }

  async setIndividual<T>(documentPath: string, cb: () => T, min = 10, max = 35) {
    const ref = randomArrayAmount(min, max).map(async _ => {
      return await this.firestoreSvc.setDocument<T>(documentPath, cb());
    });
    return Promise.all(ref);
  }

  async getAll<T>(collectionPath: string) {
    return await this.firestoreSvc.getDocuments<T>(collectionPath);
  }

  async getDocument<T>(documentPath: string) {
    return await this.firestoreSvc.getDocument<T>(documentPath);
  }

  async deleteIndividual(collectionPath: string) {
    const docIds = await this.firestoreSvc.getDocumentIds(collectionPath);
    const deletes = docIds.map(async docId => await this.firestoreSvc.deleteDocument(collectionPath, docId));
    return await Promise.all(deletes);
  }

  async #mapRef(ref: Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>[]) {
    const allRefs = await Promise.all(ref);
    return allRefs.map(async ref => {
      const doc = await this.firestoreSvc.mapDocRefToDoc(ref);
      console.log(doc);
      return doc;
    });
  }

}