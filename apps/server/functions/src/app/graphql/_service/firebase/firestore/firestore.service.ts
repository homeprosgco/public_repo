/*
https://docs.nestjs.com/providers#services
*/
import admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { FirestoreDocumentNotFoundException, FirestoreServerException } from '../../../../exception';
admin.firestore().settings({ ignoreUndefinedProperties: true });
// all methods return an object with a data property key holding the result of the transaction
@Injectable()
export class FirestoreService {

  async createNew<T>(path: string, createInput: T) {
    try {
      const ref = await admin.firestore().collection(path).add(createInput);
      const document = await ref.get();
      return {
        data: this.#getData<T>(document)
      }
    } catch (error) {
      throw this.#internalFirestoreError(error);
    }
  }

  async createNewWithId<T>(path: string, id: string, createInput: T) {
    try {
      await admin.firestore().collection(path).doc(id).set(createInput);
      const document = await admin.firestore().collection(path).doc(id).get();
      return this.#getData(document);
    } catch (error) {
      throw this.#internalFirestoreError(error);
    }
  }

  async getDocuments<T>(path: string) {
    try {
      const ref = await admin.firestore().collection(path).get();
      return {
        data: ref.docs
          .filter(doc => !(doc.data["removed"] === true))
          .map(doc => this.#getData<T>(doc))
      }
    } catch (error) {
      throw this.#internalFirestoreError(error);
    }
  }

  async getDocumentById<T>(path: string, id: string) {
    try {
      const document = await admin.firestore().collection(path).doc(id).get();
      this.#isDocumentRemoved(document);
      return this.#getData(document);
    } catch (error) {
      throw this.#internalFirestoreError(error);
    }
  }

  async updateDocument<T>(path: string, updateInput: T) {
    try {
      await admin.firestore().doc(path).update(updateInput);
      const document = await admin.firestore().doc(path).get();
      this.#isDocumentRemoved(document);
      return this.#getData<T>(document);
    } catch (error) {
      throw this.#internalFirestoreError(error);
    }
  }

  async mergeDocument<T>(path: string, id: string, mergeInput: T) {
    try {
      return await admin.firestore().collection(path).doc(id).set(mergeInput, {merge: true});
    } catch (e) {
      throw this.#internalFirestoreError(e);
    }
  }

  async removeDocument(path: string) {
    try {
      await this.updateDocument(path, { removed: true });
      return {
        status: 'ok',
        operationType: 'delete-record',
        operationResult: 'successful',
        statusCode: 200,
      }
    } catch (error) {
      throw this.#internalFirestoreError(error);
    }

  }

  #getData<T>(doc: admin.firestore.DocumentSnapshot<admin.firestore.DocumentData>) {
    return this.#createType<T>(doc.id, doc.data())
  }

  #createType<T>(id: string, data: admin.firestore.DocumentData) {
    return {
      id,
      ...data
    } as unknown as T;
  }

  #isDocumentRemoved(doc: admin.firestore.DocumentSnapshot<admin.firestore.DocumentData>) {
    if (doc.data["removed"] === true) {
      throw this.#documentNotFound();
    }
  }

  #documentNotFound() { throw new FirestoreDocumentNotFoundException() }

  #internalFirestoreError(error: admin.FirebaseError) { return new FirestoreServerException(error) }

}
