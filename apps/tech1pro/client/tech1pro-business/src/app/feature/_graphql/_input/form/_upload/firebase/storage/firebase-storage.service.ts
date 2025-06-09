import { Inject, Injectable } from '@angular/core';
import { FIREBASE_APP_CONFIG } from '../initialize-app';
import { FirebaseApp } from 'firebase/app';
import { getFirestore, collection, doc } from 'firebase/firestore';
import {
  getStorage,
  FirebaseStorage,
  StorageReference,
  ref,
  uploadBytesResumable,
  UploadTask,
  UploadTaskSnapshot,
  StorageError,
  connectStorageEmulator
} from "firebase/storage";
import { environment } from 'src/environments/environment';
export { UploadTaskSnapshot, StorageError, UploadTask, getDownloadURL, StorageReference } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  #_firebaseStorage: FirebaseStorage;

  constructor(@Inject(FIREBASE_APP_CONFIG) app: FirebaseApp) {
    this.#_firebaseStorage = getStorage(app);
    if (!environment.production) {
      connectStorageEmulator(this.#_firebaseStorage, 'localhost', 3290);
    }
  }

  firestoreDocId(collectionPath: string): string {
    return doc(collection(getFirestore(), collectionPath)).id
  }

  #getStorageRef(uploadPath: string): StorageReference | undefined {
    if (!uploadPath) return;
    return ref(this.#_firebaseStorage, uploadPath);
  }

  uploadFileOrBlob(
    file: File | Blob,
    uploadPath: string,
    next: (snapshot: UploadTaskSnapshot) => void | null,
    error: (error: StorageError) => void | null,
    complete: () => void | null
  ) {
    const ref = this.#getStorageRef(uploadPath);
    if (!ref) return;
    const uploadTask: UploadTask = uploadBytesResumable(ref, file);
    uploadTask.on('state_changed', next, error, complete);
    return uploadTask;
  }

}
