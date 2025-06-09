import { Injectable } from '@angular/core';
import { AccountCrudService } from 'src/app/feature/_graphql/_service/account.crud.service';
import { FirebaseStorageService, getDownloadURL, StorageError, StorageReference, UploadTask, UploadTaskSnapshot } from '../firebase/storage/firebase-storage.service';
import { DropzoneFileType } from '../_upload-control/directive/type/dropzone-file.type';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  #files: DropzoneFileType[];
  #uploadTaskQueue: UploadTask[] = [];
  #downLoadURLs: string[] = [];
  #timer!: NodeJS.Timeout;

  firestoreDocId(path: string) {
    return this.firebaseStorageSvc.firestoreDocId(path);
  }

  constructor(private firebaseStorageSvc: FirebaseStorageService, private readonly accountCrudSvc: AccountCrudService) {
    this.#files = [];
    console.log('service storage');
  }

  showFiles() {
    console.log(this.#files);
    (this.#files[0].dropzoneFile.previewElement.querySelector('[data-dz-uploadprogress]') as HTMLSpanElement).style.width = '30px';
  }

  addFile(file: DropzoneFileType) {
    console.log(file);
    this.#files.push(file);
  }

  fileQueue() {
    return this.#files;
  }

  // returns a resolved promise for each file in the instance member file array populate by the addFile method
  // returns a void promise to the calling context when all file uploads have completed
  uploadFiles(documentPath: string, type = "images") {
    console.log(this.#files);
    return new Promise<string[] | undefined>((resolve) => {
      if (!this.#files.length) {
        console.log('No files resolving promise');
        resolve(undefined);
        return;
      }
      for (let dropzoneFile of this.#files) {
        if (dropzoneFile.dropzoneFile.upload.progress !== 100) {
          const uploadFile = dropzoneFile.file as File;
          const uploadTask: UploadTask = this.firebaseStorageSvc.uploadFileOrBlob(
            uploadFile,
            `${this.accountCrudSvc.accountDocumentPath}/${documentPath}/${type}/${uploadFile.name}`,
            this.#onUploadSnapshot.bind(this),
            this.#onUploadError,
            this.#onUploadComplete.bind(this)
          ) as UploadTask;
          this.#uploadTaskQueue.push(uploadTask);
        }
      }
      this.#timer = setInterval(() => {
        console.log(this.#uploadTaskQueue);
        console.log(!this.#uploadTaskQueue.length);
        if (!this.#uploadTaskQueue.length) {
          console.log('uploads complete');
          resolve(this.#downLoadURLs);
        }
      }, 1000);
    });
  }

  processFile() {
    return
  }

  clearTimer() {
    if (this.#timer) {
      clearInterval(this.#timer);
    }
  }

  #findDropzoneFile(filename: string) {
    return this.#files.find((dropzoneFile) => (dropzoneFile.file as File).name === filename) as DropzoneFileType;
  }

  // function executed for an upload when the upload snapshot responds with progress data
  // passed as a callback in an observer object to the uploadFile method
  #onUploadSnapshot(snapshot: UploadTaskSnapshot) {
    console.log(snapshot.ref.name);
    const dzFile = this.#findDropzoneFile(snapshot.ref.name) as any;
    console.log(dzFile.file.upload.uuid);
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    dzFile.file.upload.progress = progress;
    (dzFile.file.previewElement.querySelector('[data-dz-uploadprogress]') as HTMLSpanElement).style.width = `${progress.toString()}px`;
  }

  // function executed for an upload where an error occurred
  // passed as a error callback in an observer object to the uploadFile method
  #onUploadError(error: StorageError) {
    console.log(error);
  }

  // function executed for each upload successfully completed
  // passed as a complete callback in an observer object to the uploadFile method
  #onUploadComplete() {
    const dzFileIndex = this.#uploadTaskQueue.findIndex(task => task.snapshot.state === 'success');
    console.log(dzFileIndex);
    const dzFile = this.#uploadTaskQueue[dzFileIndex];
    getDownloadURL((dzFile?.snapshot.ref as StorageReference))
      .then(downloadURL => {
        console.log(downloadURL);
        this.#downLoadURLs.push(downloadURL);
        this.#uploadTaskQueue.splice(dzFileIndex, 1);
        console.log('upload complete');
      })
  }

}
