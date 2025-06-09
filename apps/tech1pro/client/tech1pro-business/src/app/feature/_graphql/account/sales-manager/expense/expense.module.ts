import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { RouterModule } from '@angular/router';
import { ExpenseListViewComponent } from './expense-list-view/expense-list-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExpenseComponent,
        children: [
          {
            path: 'expenses',
            component: ExpenseListViewComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    ExpenseComponent,
    ExpenseListViewComponent
  ]
})
export class ExpenseModule { }
