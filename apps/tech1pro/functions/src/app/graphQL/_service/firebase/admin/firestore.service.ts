/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from '../admin.service';
import { createdBetweenDate, sortByISOStringCreatedDate, sortByISOStringUpdatedDate, Tech1ProAccountsPath, Tech1ProUsersPath } from '../util/util';
import { DocumentReference, TypeDataWithId } from '../_types/types';

@Injectable()
export class FirestoreService {

  constructor(private readonly firestoreSvc: FirebaseAdminService) { }

  accountsPath(accountId: string): string {
    return `${Tech1ProAccountsPath}/${accountId}`
  }

  usersPath(): string {
    return `${Tech1ProUsersPath}`;
  }

  documentRefId(collectionPath: string) {
    return this.firestoreSvc.firestore().collection(collectionPath).doc().id;
  }
  async addDocument<T>(collectionName: string, data: T): Promise<TypeDataWithId<T>> {
    const ref = await this.firestoreSvc.firestore().collection(collectionName).add(data);
    return this.#mapDocRefToDoc<T>(ref);
  }

  async createDocument<T>(collectionName: string, data: T) {
    return await this.firestoreSvc.firestore().collection(collectionName).add(data);
  }

  async mergeDocument<T>(documentPath: string, data: T) {
    await this.firestoreSvc.firestore().doc(documentPath).set(data, { merge: true });
    return this.#documentData(documentPath);
  }

  async setDocument<T>(documentPath: string, data: T) {
    await this.firestoreSvc.firestore().doc(documentPath).set(data);
    return this.#documentData(documentPath);
  }

  async updateDocument<T>(documentPath: string, data: T) {
    await this.firestoreSvc.firestore().doc(documentPath).update(data);
    return this.#documentData<T>(documentPath);
  }

  async #documentData<T>(documentPath: string) {
    const ref = this.firestoreSvc.firestore().doc(documentPath);
    return this.#mapDocRefToDoc<T>(ref);
  }

  addArrayElement<T>(...elements: any[]) {
    return this.firestoreSvc.arrayUnion(...elements);
  }

  async deleteDocument(collectionName: string, docId: string) {
    return await this.firestoreSvc.firestore().collection(collectionName).doc(docId).delete();
  }

  async getDocuments<T>(path: string) {
    const querySnapshot = await this.firestoreSvc.firestore().collection(path).get();
    return this.#querySnapshotToDocs<T>(querySnapshot);
  }

  async getDocumentsWhereEqual<T>(collectionPath: string, property: string, value: any) {
    const query = this.firestoreSvc.firestore().collection(collectionPath).where(property, '==', value);
    const snapshot = await query.get();
    return this.#querySnapshotToDocs<T>(snapshot);
  }

  async getLastDocumentAdded<T extends { created: string }>(collectionPath: string) {
    const documents: T[] = await this.getDocuments<T>(collectionPath);
    return sortByISOStringCreatedDate(documents);
  }

  async getDocumentsCreatedBetween<T extends { created: string }>(collectionPath: string, afterISODateString: string, beforeISODateString?: string) { 
    const documents: T[] = await this.getDocuments<T>(collectionPath);
    return createdBetweenDate(documents, afterISODateString, beforeISODateString);
  }

  async getLastDocumentUpdated<T extends { updated: string }>(collectionPath: string) {
    const documents: T[] = await this.getDocuments<T>(collectionPath);
    return sortByISOStringUpdatedDate(documents);
  }

  async getDocumentIds(path: string) {
    const docs = await this.getDocuments(path);
    return docs.map(doc => doc.id);
  }

  async getDocument<T>(path: string) {
    const doc = await this.firestoreSvc.firestore().doc(path).get();
    return { id: doc.id, ...doc.data() } as TypeDataWithId<T>;
  }

  async getDocumentWhereArrayIncludes<T>(collectionPath: string, property: string, value: any) {
    const query = this.firestoreSvc.firestore().collection(collectionPath).where(property, 'array-contains', value);
    const snapshot = await query.get();
    return this.#querySnapshotToDocs<T>(snapshot);
  }

  #querySnapshotToDocs<T>(snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>) {
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as TypeDataWithId<T>[];
  }

  async mapDocRefToDoc<T>(ref: DocumentReference) {
    const doc = await ref.get();
    return { id: doc.id, ...doc.data() } as TypeDataWithId<T>;
  }

  async #mapDocRefToDoc<T>(ref: DocumentReference) {
    const doc = await ref.get();
    return { id: doc.id, ...doc.data() } as TypeDataWithId<T>;
  }

  // async #mapRef(ref: Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>[]) {
  //   const allRefs = await Promise.all(ref);
  //   return allRefs.map(async ref => {
  //     const doc = await this.#mapDocRefToDoc(ref);
  //     console.log(doc);
  //     return doc;
  //   });
  // }

}
