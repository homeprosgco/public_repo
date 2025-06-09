import { WorkService, WorkServiceInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface WorkServiceCreated extends Omit<WorkService, "created"> {
  created: string;
}

interface WorkServiceUpdated extends Omit<WorkService, "updated"> {
  updated: string;
}

@Injectable()
export class WorkServiceService {

  readonly collectionName = 'work-services';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addWorkService(accountId: string, workServiceInput: WorkServiceInput) {
    try {
      return await this.firestoreSvc.addDocument<WorkService>(this.#collectionPath(accountId), {
        ...workServiceInput,
        created: createdISOStringDate()
      }) as WorkService;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedWorkService(accountId: string) {
    try {
      const sortWorkServicesByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<WorkServiceCreated>(this.#collectionPath(accountId));
      return sortWorkServicesByCreatedDate[0] as WorkService;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedWorkService(accountId: string) {
    try {
      const sortWorkServicesByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<WorkServiceUpdated>(this.#collectionPath(accountId));
      return sortWorkServicesByUpdatedDate[0] as WorkService;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getWorkServices(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<WorkService>(this.#collectionPath(accountId)) as WorkService[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getWorkServiceById(accountId: string, workServiceId: string) {
    try {
      return await this.firestoreSvc.getDocument<WorkService>(`${this.#collectionPath(accountId)}/${workServiceId}`) as WorkService;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getWorkServicesWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as WorkService[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateWorkService(accountId: string, workServiceId: string, workServiceInput: WorkServiceInput) {
    try {
      return await this.firestoreSvc.updateDocument<WorkService>(`${this.#collectionPath(accountId)}/${workServiceId}`, {
        ...workServiceInput,
        updated: createdISOStringDate()
      });

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteWorkService(accountId: string, workServiceId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, workServiceId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}