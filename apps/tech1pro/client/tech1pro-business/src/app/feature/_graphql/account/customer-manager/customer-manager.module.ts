import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagerComponent } from './customer-manager.component';
import { RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { CustomersListViewComponent } from './customers/customers-list-view/customers-list-view.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomerByIdComponent } from './customers/customer-by-id/customer-by-id.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerManagerComponent,
        children: [
          {
            path: 'customers',
            component: CustomersListViewComponent
          },
          {
            path: 'create',
            component: CreateCustomerComponent
          },
          {
            path: "manage-prospects",
            loadChildren: () => import("./propects/propects.module").then(m => m.PropectsModule)
          },
          {
            path: ":customerId",
            component: CustomerByIdComponent
          },
          {
            path: ":customerId/update",
            component: UpdateCustomerComponent
          }
        ]
      }
    ])
  ],
  declarations: [CustomerManagerComponent]
})
export class CustomerManagerModule { }
