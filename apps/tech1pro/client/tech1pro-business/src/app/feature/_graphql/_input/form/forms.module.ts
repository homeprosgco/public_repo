import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordControlComponent } from './_control/password-control/password-control.component';
import { FormGroupComponent } from './_control/form-group/form-group.component';
import { RadioFormGroupComponent } from './_control/radio-form-group/radio-form-group.component';
import { RadioFormGroupDirective } from './_control/radio-form-group/radio-form-group.directive';
import { ProspectFormComponent } from './prospect/prospect-form/prospect-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaControlComponent } from './_control/textarea-control/textarea-control.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { BeneficiaryFormComponent } from './beneficiary/beneficiary-form/beneficiary-form.component';
import { ElementsModule } from 'src/app/ui/component/elements/elements.module';
import { CompanyProfileFormComponent } from './company-profile/company-profile-form/company-profile-form.component';
import { ItemFormComponent } from './item/item-form/item-form.component';
import { ArrayFormGroupComponent } from './_control/array-form-group/array-form-group.component';
import { WorkServiceFormComponent } from './work-service/work-service-form/work-service-form.component';
import { JobFormComponent } from './job/job-form/job-form.component';
import { JobLeadFormComponent } from './job-lead/job-lead-form/job-lead-form.component';
import { ProposalFormComponent } from './proposal/proposal-form/proposal-form.component';
import { FileUploadComponent } from './_control/file-upload/file-upload.component';
import { EstimateFormComponent } from './estimate/estimate-form/estimate-form.component';
import { AddressFormGroupComponent } from './_control/address-form-group/address-form-group.component';
import { Select2Directive } from './_control/select2-form-group/select2.directive';
import { Select2FormGroupComponent } from './_control/select2-form-group/select2-form-group.component';
import { ProspectSelectComponent } from './_control/select2-form-group/prospect-selector.select2';
import { Select2Component } from './_control/select2-form-group/select2';
import { UploadModule } from './_upload/upload.module';
import { InvoiceFormComponent } from './invoice/invoice-form/invoice-form.component';
import { ExpenseFormComponent } from './expense/expense-form/expense-form.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ElementsModule,
    UploadModule
  ],
  declarations: [
    AddressFormGroupComponent,
    Select2Directive,
    ArrayFormGroupComponent,
    BeneficiaryFormComponent,
    CompanyProfileFormComponent,
    CustomerFormComponent,
    EstimateFormComponent,
    ExpenseFormComponent,
    FileUploadComponent,
    FormGroupComponent,
    InvoiceFormComponent,
    ItemFormComponent,
    JobFormComponent,
    JobLeadFormComponent,
    PasswordControlComponent,
    PaymentFormComponent,
    ProspectFormComponent,
    ProspectSelectComponent,
    ProposalFormComponent,
    RadioFormGroupComponent,
    RadioFormGroupDirective,
    Select2FormGroupComponent,
    Select2Component,
    TextareaControlComponent,
    WorkServiceFormComponent
  ],
  exports: [
    AddressFormGroupComponent,
    ArrayFormGroupComponent,
    Select2Directive,
    BeneficiaryFormComponent,
    CompanyProfileFormComponent,
    CustomerFormComponent,
    EstimateFormComponent,
    ExpenseFormComponent,
    FileUploadComponent,
    FormGroupComponent,
    InvoiceFormComponent,
    ItemFormComponent,
    JobFormComponent,
    JobLeadFormComponent,
    PasswordControlComponent,
    PaymentFormComponent,
    ProposalFormComponent,
    ProspectFormComponent,
    ProspectSelectComponent,
    RadioFormGroupComponent,
    RadioFormGroupDirective,
    Select2FormGroupComponent,
    Select2Component,
    TextareaControlComponent,
    WorkServiceFormComponent
  ]
})
export class FormsModule { }
