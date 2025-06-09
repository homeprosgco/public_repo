import { Proposal, ProposalInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface ProposalCreated extends Omit<Proposal, "created"> {
  created: string;
}

interface ProposalUpdated extends Omit<Proposal, "updated"> {
  updated: string;
}

const createProposal = ({
  address,
  category,
  created,
  createdById,
  definedWorkScope,
  jobLeadId,
  prospectId,
  requestedWorkScope,
  status,
  activities,
  comments,
  fileURLs,
  imageURLs,
  lineWorkServices,
  notes,
  referenceId
}: ProposalInput) => {
  return {
    address,
    category,
    created,
    createdById,
    definedWorkScope,
    jobLeadId,
    prospectId,
    requestedWorkScope,
    status,
    activities,
    comments,
    fileURLs,
    imageURLs,
    lineWorkServices,
    notes,
    referenceId
  } as Proposal;
}

@Injectable()
export class ProposalService {

  readonly collectionName = 'proposals';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addProposal(accountId: string, proposalInput: ProposalInput) {
    try {
      const { address, comments, activities, ...rest } = createProposal(proposalInput);

      return await this.firestoreSvc.addDocument<Proposal>(this.#collectionPath(accountId), {
        addressId: (address && address.id) ? address.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as Proposal;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedProposal(accountId: string) {
    try {
      const sortProposalsByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<ProposalCreated>(this.#collectionPath(accountId));
      return sortProposalsByCreatedDate[0] as Proposal;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedProposal(accountId: string) {
    try {
      const sortProposalsByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<ProposalUpdated>(this.#collectionPath(accountId));
      return sortProposalsByUpdatedDate[0] as Proposal;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProposals(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Proposal>(this.#collectionPath(accountId)) as Proposal[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProposalById(accountId: string, proposalId: string) {
    try {
      return await this.firestoreSvc.getDocument<Proposal>(`${this.#collectionPath(accountId)}/${proposalId}`) as Proposal;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProposalsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined) {
    try {
      return await this.firestoreSvc.getDocumentsCreatedBetween(accountId, afterISODateString, beforeISODateString) as Proposal[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProposalsWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as Proposal[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateProposal(accountId: string, proposalId: string, proposalInput: ProposalInput) {
    try {
      const { address, comments, activities, ...rest } = createProposal(proposalInput);
      return await this.firestoreSvc.updateDocument<Proposal>(`${this.#collectionPath(accountId)}/${proposalId}`, {
        ...rest,
        updated: createdISOStringDate()
      }) as Proposal;

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteProposal(accountId: string, proposalId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, proposalId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}