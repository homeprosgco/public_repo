import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        children: [
          {
            path: 'customer-manager',
            loadChildren: () => import('./customer-manager/customer-manager.module').then(m => m.CustomerManagerModule)
          },
          {
            path: 'job-manager',
            loadChildren: () => import('./job-manager/job-manager.module').then(m => m.JobManagerModule)
          },
          {
            path: 'sales-manager',
            loadChildren: () => import('./sales-manager/sales-manager.module').then( m => m.SalesManagerModule)
          },
          {
            path: 'admin',
            loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
          },
          {
            path: '',
            loadChildren: () => import('../_input/input.module').then(m => m.InputModule),
            
          }
        ]
      }
    ])
  ]
})
export class AccountModule { }
