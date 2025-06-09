import { Invoice, InvoiceInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface InvoiceCreated extends Omit<Invoice, "created"> {
  created: string;
}

interface InvoiceUpdated extends Omit<Invoice, "updated"> {
  updated: string;
}

const createInvoice = ({
  address,
  category,
  created,
  createdById,
  customerId,
  jobLeadId,
  status,
  activities,
  comments,
  fileURLs,
  imageURLs,
  lineItems,
  lineWorkServices,
  notes,
  number,
  referenceId
}: InvoiceInput) => {
  return {
    address,
    category,
    created,
    createdById,
    customerId,
    jobLeadId,
    status,
    activities,
    comments,
    fileURLs,
    imageURLs,
    lineItems,
    lineWorkServices,
    notes,
    number,
    referenceId
  } as Invoice;
}

@Injectable()
export class InvoiceService {

  readonly collectionName = 'invoices';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addInvoice(accountId: string, invoiceInput: InvoiceInput) {
    try {
      const { address, comments, activities, ...rest } = createInvoice(invoiceInput);

      return await this.firestoreSvc.addDocument<Invoice>(this.#collectionPath(accountId), {
        addressId: (address && address.id) ? address.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as Invoice;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedInvoice(accountId: string) {
    try {
      const sortInvoicesByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<InvoiceCreated>(this.#collectionPath(accountId));
      return sortInvoicesByCreatedDate[0] as Invoice;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedInvoice(accountId: string) {
    try {
      const sortInvoicesByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<InvoiceUpdated>(this.#collectionPath(accountId));
      return sortInvoicesByUpdatedDate[0] as Invoice;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getInvoices(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Invoice>(this.#collectionPath(accountId)) as Invoice[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getInvoiceById(accountId: string, invoiceId: string) {
    try {
      return await this.firestoreSvc.getDocument<Invoice>(`${this.#collectionPath(accountId)}/${invoiceId}`) as Invoice;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getInvoicesCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined) {
    try {
      return await this.firestoreSvc.getDocumentsCreatedBetween(accountId, afterISODateString, beforeISODateString) as Invoice[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getInvoicesWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as Invoice[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateInvoice(accountId: string, invoiceId: string, invoiceInput: InvoiceInput) {
    try {
      const { address, comments, activities, ...rest } = createInvoice(invoiceInput);
      return await this.firestoreSvc.updateDocument<Invoice>(`${this.#collectionPath(accountId)}/${invoiceId}`, {
        ...rest,
        updated: createdISOStringDate()
      }) as Invoice;

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteInvoice(accountId: string, invoiceId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, invoiceId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}