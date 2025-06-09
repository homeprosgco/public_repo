import { Estimate, EstimateInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface EstimateCreated extends Omit<Estimate, "created"> {
  created: string;
}

interface EstimateUpdated extends Omit<Estimate, "updated"> {
  updated: string;
}

const createEstimate = ({
  address,
  category,
  created,
  createdById,
  jobLeadId,
  prospectId,
  status,
  activities,
  comments,
  fileURLs,
  imageURLs,
  lineItems,
  lineWorkServices,
  notes,
  referenceId
}: EstimateInput) => {
  return {
    address,
    category,
    created,
    createdById,
    jobLeadId,
    prospectId,
    status,
    activities,
    comments,
    fileURLs,
    imageURLs,
    lineItems,
    lineWorkServices,
    notes,
    referenceId
  } as Estimate;
}

@Injectable()
export class EstimateService {

  readonly collectionName = 'estimates';

  constructor(
    private readonly firestoreSvc: FirestoreService
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addEstimate(accountId: string, estimateInput: EstimateInput) {
    try {
      const { address, comments, activities, notes, ...rest } = createEstimate(estimateInput);

      return await this.firestoreSvc.addDocument<Estimate>(this.#collectionPath(accountId), {
        addressId: (address && address.id) ? address.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as Estimate;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedEstimate(accountId: string) {
    try {
      const sortEstimatesByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<EstimateCreated>(this.#collectionPath(accountId));
      return sortEstimatesByCreatedDate[0] as Estimate;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedEstimate(accountId: string) {
    try {
      const sortEstimatesByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<EstimateUpdated>(this.#collectionPath(accountId));
      return sortEstimatesByUpdatedDate[0] as Estimate;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getEstimates(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Estimate>(this.#collectionPath(accountId)) as Estimate[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getEstimateById(accountId: string, estimateId: string) {
    try {
      return await this.firestoreSvc.getDocument<Estimate>(`${this.#collectionPath(accountId)}/${estimateId}`) as Estimate;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getEstimatesCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined) {
    try {
      return await this.firestoreSvc.getDocumentsCreatedBetween(accountId, afterISODateString, beforeISODateString) as Estimate[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getEstimatesWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as Estimate[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateEstimate(accountId: string, estimateId: string, estimateInput: EstimateInput) {
    try {
      const { address, comments, activities, ...rest } = createEstimate(estimateInput);
      return await this.firestoreSvc.updateDocument<Estimate>(`${this.#collectionPath(accountId)}/${estimateId}`, {
        ...rest,
        updated: createdISOStringDate()
      }) as Estimate;

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteEstimate(accountId: string, estimateId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, estimateId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}