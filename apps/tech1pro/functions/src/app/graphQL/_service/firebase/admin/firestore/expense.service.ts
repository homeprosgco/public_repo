import { Expense, ExpenseInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface ExpenseCreated extends Omit<Expense, "created"> {
  created: string;
}

interface ExpenseUpdated extends Omit<Expense, "updated"> {
  updated: string;
}

@Injectable()
export class ExpenseService {

  readonly collectionName = 'expenses';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addExpense(accountId: string, expenseInput: ExpenseInput) {
    try {
      return await this.firestoreSvc.addDocument<Expense>(this.#collectionPath(accountId), {
        ...expenseInput,
        created: createdISOStringDate()
      }) as Expense;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedExpense(accountId: string) {
    try {
      const sortExpensesByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<ExpenseCreated>(this.#collectionPath(accountId));
      return sortExpensesByCreatedDate[0] as Expense;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedExpense(accountId: string) {
    try {
      const sortExpensesByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<ExpenseUpdated>(this.#collectionPath(accountId));
      return sortExpensesByUpdatedDate[0] as Expense;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getExpenses(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Expense>(this.#collectionPath(accountId)) as Expense[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getExpenseById(accountId: string, expenseId: string) {
    try {
      return await this.firestoreSvc.getDocument<Expense>(`${this.#collectionPath(accountId)}/${expenseId}`) as Expense;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getExpensesCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined) {
    try {
      return await this.firestoreSvc.getDocumentsCreatedBetween(accountId, afterISODateString, beforeISODateString) as Expense[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getExpensesWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as Expense[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateExpense(accountId: string, expenseId: string, expenseInput: ExpenseInput) {
    try {
     return await this.firestoreSvc.updateDocument<Expense>(`${this.#collectionPath(accountId)}/${expenseId}`, {
        ...expenseInput,
        updated: createdISOStringDate()
      });

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteExpense(accountId: string, expenseId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, expenseId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}