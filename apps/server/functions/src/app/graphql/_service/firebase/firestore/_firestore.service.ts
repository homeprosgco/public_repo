import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from '../admin/firebase-admin.service';
import { DocumentReference } from '../admin/type';

type TypeDataWithId<T> = { id: string } & T;

@Injectable()
export class FirestoreService {

  constructor(private adminSvc: FirebaseAdminService){}

  documentRefId(collectionPath: string) {
    return this.adminSvc.firestore().collection(collectionPath).doc().id;
  }

  async createDocument<T>(collectionName: string, data: T) {
    return await this.adminSvc.firestore().collection(collectionName).add(data);
  }

  async deleteDocument(collectionName: string, docId: string) {
    return await this.adminSvc.firestore().collection(collectionName).doc(docId).delete();
  }

  async getDocuments<T>(path: string) {
    const querySnapshot = await this.adminSvc.firestore().collection(path).get();
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as TypeDataWithId<T>[];
  }

  async getDocumentIds(path: string) {
    const docs = await this.getDocuments(path);
    return docs.map(doc => doc.id);
  }

  async getDocument<T>(path: string) {
    const doc = await this.adminSvc.firestore().doc(path).get();
    return { id: doc.id, ...doc.data() } as TypeDataWithId<T>;
  }

  async mapDocRefToDoc<T>(ref: DocumentReference) {
    const doc = await ref.get();
    return { id: doc.id, ...doc.data() } as TypeDataWithId<T>;
  }

  async mergeDocument<T>(documentPath: string, data: T) {
    await this.adminSvc.firestore().doc(documentPath).set(data, { merge: true });
    return this.adminSvc.firestore().doc(documentPath)
  }

  async setDocument<T>(documentPath: string, data: T) {
    await this.adminSvc.firestore().doc(documentPath).set(data);
    return this.adminSvc.firestore().doc(documentPath)
  }

  async updateDocument<T>(documentPath: string, data: T) {
    return await this.adminSvc.firestore().doc(documentPath).update(data);
  }

}