import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListViewComponent } from './customers-list-view/customers-list-view.component';
import { CustomerByIdComponent } from './customer-by-id/customer-by-id.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomersComponent,
    CustomersListViewComponent,
    CustomerByIdComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent
  ]
})
export class CustomersModule { }
