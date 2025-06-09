import { Expense, ExpenseInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class ExpenseService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "expenses";
    constructor(firestoreSvc: FirestoreService);
    addExpense(accountId: string, expenseInput: ExpenseInput): Promise<Expense>;
    getLastAddedExpense(accountId: string): Promise<Expense>;
    getLastUpdatedExpense(accountId: string): Promise<Expense>;
    getExpenses(accountId: string): Promise<Expense[]>;
    getExpenseById(accountId: string, expenseId: string): Promise<Expense>;
    getExpensesCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined): Promise<Expense[]>;
    getExpensesWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<Expense[]>;
    updateExpense(accountId: string, expenseId: string, expenseInput: ExpenseInput): Promise<import("../../_types/types").TypeDataWithId<Expense>>;
    deleteExpense(accountId: string, expenseId: string): Promise<FirebaseFirestore.WriteResult>;
}
