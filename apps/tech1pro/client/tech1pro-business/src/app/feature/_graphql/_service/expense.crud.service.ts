import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { CreateExpenseGQL, ExpenseByIdGQL, ExpenseInput, ExpensesGQL, RemoveExpenseGQL, UpdateExpenseGQL } from "src/generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class ExpenseCrudService {

  constructor(
    private createExpenseGQL: CreateExpenseGQL,
    private updateExpenseGQL: UpdateExpenseGQL,
    private removeExpenseGQL: RemoveExpenseGQL,
    private expensesGQL: ExpensesGQL,
    private expenseByIdGQL: ExpenseByIdGQL
  ) { }

  createExpense$(expenseInput: ExpenseInput) {
    return this.createExpenseGQL.mutate({ expenseInput }).pipe(
      map(res => res.data?.createExpense.expenseLastAdded)
    );
  }

  updateExpense$(expenseIdInput: string, updateExpenseInput: ExpenseInput) {
    return this.updateExpenseGQL.mutate({ expenseIdInput, updateExpenseInput }).pipe(
      map(res => res.data?.updateExpense.expenseLastUpdated)
    );
  }

  removeExpense$(expenseIdInput: string) {
    return this.removeExpenseGQL.mutate({ expenseIdInput }).pipe(
      map(res => res.data?.removeExpense.expenses)
    );
  }

  fetchExpenses$() {
    return this.expensesGQL.fetch().pipe(map( res => res.data.account.expenses));
  }

  fetchExpenseById$(expenseId: string) {
    return this.expenseByIdGQL.fetch({ expenseId }).pipe(map( res => res.data.account.expenseById))
  }

}