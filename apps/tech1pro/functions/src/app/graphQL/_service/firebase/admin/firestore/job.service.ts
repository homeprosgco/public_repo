import { Job, JobInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface JobCreated extends Omit<Job, "created"> {
  created: string;
}

interface JobUpdated extends Omit<Job, "updated"> {
  updated: string;
}

const createJob = ({
  address,
  category,
  created,
  createdById,
  customerId,
  definedWorkScope,
  jobLeadId,
  status,
  activities,
  comments,
  fileURLs,
  imageURLs,
  lineItems,
  lineWorkServices,
  notes,
  poNumber,
  requestedWorkScope
}: JobInput) => {
  return {
    address,
    category,
    created,
    createdById,
    customerId,
    definedWorkScope,
    jobLeadId,
    status,
    activities,
    comments,
    fileURLs,
    imageURLs,
    lineItems,
    lineWorkServices,
    notes,
    poNumber,
    requestedWorkScope
  } as Job;
}

@Injectable()
export class JobService {

  readonly collectionName = 'jobs';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addJob(accountId: string, jobInput: JobInput) {
    try {
      const { address, comments, activities, ...rest } = createJob(jobInput);

      return await this.firestoreSvc.addDocument<Job>(this.#collectionPath(accountId), {
        addressId: (address && address.id) ? address.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as Job;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedJob(accountId: string) {
    try {
      const sortJobsByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<JobCreated>(this.#collectionPath(accountId));
      return sortJobsByCreatedDate[0] as Job;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedJob(accountId: string) {
    try {
      const sortJobsByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<JobUpdated>(this.#collectionPath(accountId));
      return sortJobsByUpdatedDate[0] as Job;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getJobs(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Job>(this.#collectionPath(accountId)) as Job[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getJobById(accountId: string, jobId: string) {
    try {
      return await this.firestoreSvc.getDocument<Job>(`${this.#collectionPath(accountId)}/${jobId}`) as Job;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getJobsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined) {
    try {
      return await this.firestoreSvc.getDocumentsCreatedBetween(accountId, afterISODateString, beforeISODateString) as Job[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getJobsWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as Job[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateJob(accountId: string, jobId: string, jobInput: JobInput) {
    try {
      const { address, comments, activities, ...rest } = createJob(jobInput);
      return await this.firestoreSvc.updateDocument<Job>(`${this.#collectionPath(accountId)}/${jobId}`, {
        ...rest,
        updated: createdISOStringDate()
      }) as Job;

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteJob(accountId: string, jobId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, jobId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}