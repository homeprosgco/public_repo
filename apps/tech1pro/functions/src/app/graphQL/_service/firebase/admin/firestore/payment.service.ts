import { Payment, PaymentInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface PaymentCreated extends Omit<Payment, "created"> {
  created: string;
}

interface PaymentUpdated extends Omit<Payment, "updated"> {
  updated: string;
}

@Injectable()
export class PaymentService {

  readonly collectionName = 'payments';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addPayment(accountId: string, paymentInput: PaymentInput) {
    try {
      return await this.firestoreSvc.addDocument<Payment>(this.#collectionPath(accountId), {
        ...paymentInput,
        created: createdISOStringDate()
      }) as Payment;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedPayment(accountId: string) {
    try {
      const sortPaymentsByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<PaymentCreated>(this.#collectionPath(accountId));
      return sortPaymentsByCreatedDate[0] as Payment;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedPayment(accountId: string) {
    try {
      const sortPaymentsByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<PaymentUpdated>(this.#collectionPath(accountId));
      return sortPaymentsByUpdatedDate[0] as Payment;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getPayments(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Payment>(this.#collectionPath(accountId)) as Payment[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getPaymentById(accountId: string, paymentId: string) {
    try {
      return await this.firestoreSvc.getDocument<Payment>(`${this.#collectionPath(accountId)}/${paymentId}`) as Payment;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async updatePayment(accountId: string, paymentId: string, paymentInput: PaymentInput) {
    try {
     return await this.firestoreSvc.updateDocument<Payment>(`${this.#collectionPath(accountId)}/${paymentId}`, {
        ...paymentInput,
        updated: createdISOStringDate()
      });

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getPaymentsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined) {
    try {
      return await this.firestoreSvc.getDocumentsCreatedBetween(accountId, afterISODateString, beforeISODateString) as Payment[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getPaymentsWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as Payment[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deletePayment(accountId: string, paymentId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, paymentId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}