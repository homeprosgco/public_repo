import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Expense } from 'src/generated/graphql';
import { ExpenseCrudService } from '../../../_service/expense.crud.service';
import { buildFormGroup } from '../form-util';
import { expense } from '../../../../../test/query-graphql';

const createExpense = (expense: Expense) => {
  return {
    amount: expense.amount || '',
    category: expense.category || '',
    location: expense.location || '',
    subCategory: expense.subCategory || '',
  } as Partial<Expense>;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseFormService {

  private _isSubmitted = false;
  isEditing = false;
  #formGroup!: FormGroup;

  constructor(private expenseCrudSvc: ExpenseCrudService) { }

  formGroup() {
    this.#formGroup = this.expenseForm;
    return this.#formGroup;
  }

  get expenseForm() {
    return buildFormGroup(["amount", "category", "location", "subCategory"]);
  }

  addTestExpense() {
    this.#formGroup.setValue(createExpense(expense() as Expense));
  }

}
