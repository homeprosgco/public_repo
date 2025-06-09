import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesManagerComponent } from './sales-manager.component';
import { RouterModule } from '@angular/router';
import { SalesManagerDashboardComponent } from './sales-manager-dashboard/sales-manager-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SalesManagerComponent,
        children: [
          {
            path: '',
            component: SalesManagerDashboardComponent
          },
          {
            path: 'proposal-manager',
            loadChildren: () => import("./proposal/proposal.module").then(m => m.ProposalModule)
          },
          {
            path: 'estimate-manager',
            loadChildren: () => import("./estimate/estimate.module").then(m => m.EstimateModule)
          },
          {
            path: 'expense-manager',
            loadChildren: () => import("./expense/expense.module").then(m => m.ExpenseModule)
          },
          {
            path: 'invoice-manager',
            loadChildren: () => import("./invoice/invoice.module").then(m => m.InvoiceModule)
          },
          {
            path: 'item-manager',
            loadChildren: () => import("./item/item.module").then(m => m.ItemModule)
          },
          {
            path: 'payment-manager',
            loadChildren: () => import("./payment/payment.module").then(m => m.PaymentModule)
          },
          {
            path: 'work-service-manager',
            loadChildren: () => import("./work-service/work-service.module").then(m => m.WorkServiceModule)
          }
        ]
      }
    ])
  ],
  declarations: [SalesManagerComponent]
})
export class SalesManagerModule { }
