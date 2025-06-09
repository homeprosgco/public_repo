import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  #imageUploadSvc!: StorageService;
  #fileUploadSvc!: StorageService;

  constructor() { }

  setUploadServices(imageUploadSvc: StorageService, documentUploadSvc: StorageService) {
    this.imageUploadSvc = imageUploadSvc;
    this.documentUploadSvc = documentUploadSvc;
  }

  set imageUploadSvc(storageSvc: StorageService) {
    this.#imageUploadSvc = storageSvc;
  }

  set documentUploadSvc(storageSvc: StorageService) {
    this.#fileUploadSvc = storageSvc;
  }

  async uploadAll(path: string) {
    const imageURLs = await this.#imageUploadSvc.uploadFiles(path);
    const fileURLs = await this.#fileUploadSvc.uploadFiles(path, "documents");
    return Promise.all([imageURLs, fileURLs]) as Promise<[imageURLs: string[], documentURLs: string[]]>
  }

  clearTimers() {
    this.#imageUploadSvc.clearTimer();
    this.#fileUploadSvc.clearTimer();
  }

  firestoreDocId(collectionPath: string) {
    return this.#imageUploadSvc.firestoreDocId(collectionPath);
  }

}
