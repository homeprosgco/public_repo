import { JobLead, JobLeadInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { AddressService } from "./address.service";
import { throwFirestoreServerException } from "./_error/_util";

interface JobLeadCreated extends Omit<JobLead, "created"> {
  created: string;
}

interface JobLeadUpdated extends Omit<JobLead, "updated"> {
  updated: string;
}

const createJobLead = ({
  address,
  category,
  created,
  createdById,
  prospectId,
  requestedWorkScope,
  status,
  activities,
  comments,
  fileURLs,
  imageURLs,
  notes,
  referenceId
}: JobLeadInput) => {
  return {
    address,
    category,
    created,
    createdById,
    prospectId,
    requestedWorkScope,
    status,
    activities,
    comments,
    fileURLs,
    imageURLs,
    notes,
    referenceId
  } as JobLead;
}

@Injectable()
export class JobLeadService {

  readonly collectionName = 'job-leads';

  constructor(
    private readonly firestoreSvc: FirestoreService,
    private readonly addressSvc: AddressService
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addJobLead(accountId: string, jobLeadInput: JobLeadInput) {
    try {
      const { address, comments, activities, ...rest } = createJobLead(jobLeadInput);
      let savedAddress;
      if (address) {
        savedAddress = await this.addressSvc.addAddress(accountId, address);
      }

      return await this.firestoreSvc.addDocument<JobLead>(this.#collectionPath(accountId), {
        addressId: savedAddress ? savedAddress.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as JobLead;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastAddedJobLead(accountId: string) {
    try {
      const sortJobLeadsByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<JobLeadCreated>(this.#collectionPath(accountId));
      return sortJobLeadsByCreatedDate[0] as JobLead;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedJobLead(accountId: string) {
    try {
      const sortJobLeadsByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<JobLeadUpdated>(this.#collectionPath(accountId));
      return sortJobLeadsByUpdatedDate[0] as JobLead;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getJobLeads(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<JobLead>(this.#collectionPath(accountId)) as JobLead[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getJobLeadsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined) {
    try {
      return await this.firestoreSvc.getDocumentsCreatedBetween(accountId, afterISODateString, beforeISODateString) as JobLead[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getJobLeadById(accountId: string, jobLeadId: string) {
    try {
      return await this.firestoreSvc.getDocument<JobLead>(`${this.#collectionPath(accountId)}/${jobLeadId}`) as JobLead;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getJobLeadsWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as JobLead[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateJobLead(accountId: string, jobLeadId: string, jobLeadInput: JobLeadInput) {
    try {
      const { address, comments, activities, ...rest } = createJobLead(jobLeadInput);
      const jobLead = await this.firestoreSvc.updateDocument<JobLead>(`${this.#collectionPath(accountId)}/${jobLeadId}`, {
        ...rest,
        updated: createdISOStringDate()
      }) as JobLead;

      if (jobLead.addressId && address) {
        await this.addressSvc.updateAddress(accountId, jobLead.addressId, address);
      }

      return jobLead as JobLead;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteJobLead(accountId: string, jobLeadId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, jobLeadId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}