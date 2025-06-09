import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { RouterModule } from '@angular/router';
import { InvoiceListViewComponent } from './invoice-list-view/invoice-list-view.component';
import { InvoiceByIdComponent } from './invoice-by-id/invoice-by-id.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvoiceComponent,
        children: [
          {
            path: 'invoices',
            component: InvoiceListViewComponent
          },
          {
            path: 'invoice/:invoiceId',
            component: InvoiceByIdComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    InvoiceComponent,
    InvoiceListViewComponent,
    InvoiceByIdComponent
  ]
})
export class InvoiceModule { }
