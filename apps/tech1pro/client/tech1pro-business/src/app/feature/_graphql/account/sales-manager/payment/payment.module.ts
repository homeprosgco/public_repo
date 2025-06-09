import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { RouterModule } from '@angular/router';
import { PaymentListViewComponent } from './payment-list-view/payment-list-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaymentComponent,
        children: [
          {
            path: 'payments',
            component: PaymentListViewComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    PaymentComponent,
    PaymentListViewComponent
  ]
})
export class PaymentModule { }
