import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from './form/forms.module';
import { RouterModule } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ProspectFormComponent } from './form/prospect/prospect-form/prospect-form.component';
import { CustomerFormComponent } from './form/customer/customer-form/customer-form.component';
import { BeneficiaryFormComponent } from './form/beneficiary/beneficiary-form/beneficiary-form.component';
import { CompanyProfileFormComponent } from './form/company-profile/company-profile-form/company-profile-form.component';
import { ItemFormComponent } from './form/item/item-form/item-form.component';
import { WorkServiceFormComponent } from './form/work-service/work-service-form/work-service-form.component';
import { JobFormComponent } from './form/job/job-form/job-form.component';
import { JobLeadFormComponent } from './form/job-lead/job-lead-form/job-lead-form.component';
import { ProposalFormComponent } from './form/proposal/proposal-form/proposal-form.component';
import { SaleAccountFormBuilderComponent } from './form-builder/sale-account-form-builder.component';
import { EstimateFormComponent } from './form/estimate/estimate-form/estimate-form.component';
import { InvoiceFormComponent } from './form/invoice/invoice-form/invoice-form.component';
import { PaymentFormComponent } from './form/payment/payment-form/payment-form.component';
import { ExpenseFormComponent } from './form/expense/expense-form/expense-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'form-builder',
        component: FormBuilderComponent,
        children: [
          {
            path: 'prospect-form',
            component: ProspectFormComponent
          },
          {
            path: 'prospect-form/:prospectId/update',
            component: ProspectFormComponent
          },
          {
            path: 'customer-form',
            component: CustomerFormComponent
          },
          {
            path: 'beneficiary-form',
            component: BeneficiaryFormComponent
          },
          {
            path: 'company-profile-form',
            component: CompanyProfileFormComponent
          },
          {
            path: 'item-form',
            component: ItemFormComponent
          },
          {
            path: 'job-lead-form',
            component: JobLeadFormComponent
          },
          {
            path: 'job-form',
            component: JobFormComponent
          },
          {
            path: 'proposal-form',
            component: ProposalFormComponent
          },
          {
            path: 'proposal-form/:proposalId/update',
            component: ProposalFormComponent
          },
          {
            path: 'work-service-form',
            component: WorkServiceFormComponent
          },
          {
            path: 'payment-form',
            component: PaymentFormComponent
          },
          {
            path: 'expense-form',
            component: ExpenseFormComponent
          }
        ]
      },
      {
        path: 'sale-account-form-builder',
        component: SaleAccountFormBuilderComponent,
        children: [
          {
            path: 'estimate-form',
            component: EstimateFormComponent
          },
          {
            path: 'invoice-form',
            component: InvoiceFormComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    FormBuilderComponent,
    SaleAccountFormBuilderComponent
  ],
  exports: [
    FormsModule
  ]
})
export class InputModule { }
