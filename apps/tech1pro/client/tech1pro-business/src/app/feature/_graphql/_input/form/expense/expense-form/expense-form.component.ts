import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExpenseFormService } from '../expense-form.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  expenseForm!: FormGroup;
  isEditing: boolean = false;
  isTesting: boolean = true;

  constructor(private expenseFormSvc: ExpenseFormService) { }

  ngOnInit() {
    this.expenseForm = this.expenseFormSvc.formGroup();
  }

  onSubmit() {}

  //for testing purposes only
  addTestExpense() {
    this.expenseFormSvc.addTestExpense();
  }

}
