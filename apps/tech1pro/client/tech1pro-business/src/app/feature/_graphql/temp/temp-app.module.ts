import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempAppAccountPageLayoutComponent } from './components/layout/temp-app-account-page.layout';
import { TempPageHeaderComponent } from './components/elements/temp-page-header.component';
import { RouterModule } from '@angular/router';
import { TempAppComponent } from './temp-app.component';
import { TempIndexComponent } from './pages/temp-index/temp-index.component';
import { TempAppAccountComponent } from './temp-account.component';
import { TempDashboardComponent } from './pages/temp-dashboard/temp-dashboard.component';
import { TempJobListComponent } from './pages/temp-jobs/temp-job-list/temp-job-list.component';
import { TempJobFormComponent } from './pages/temp-jobs/temp-job-form/temp-job-form.component';
import { TempJobLeadListComponent } from './pages/temp-job-leads/temp-job-lead-list/temp-job-lead-list.component';
import { TempJobLeadFormComponent } from './pages/temp-job-leads/temp-job-lead-form/temp-job-lead-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/ui/ui.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputModule } from '../_input/input.module';
import { UploadModule } from '../_input/form/_upload/upload.module';

@NgModule({
  declarations: [
    TempAppComponent,
    TempAppAccountPageLayoutComponent,
    TempPageHeaderComponent,
    TempIndexComponent,
    TempAppAccountComponent,
    TempDashboardComponent,
    TempJobListComponent,
    TempJobFormComponent,
    TempJobLeadListComponent,
    TempJobLeadFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIModule,
    UploadModule,
    InputModule,
    RouterModule.forChild([
      {
        path: 'temp',
        component: TempAppComponent,
        children: [
          {
            path: '',
            // component: TempIndexComponent,
            redirectTo: 'account/dashboard',
            pathMatch: 'full'
          },
          {
            path: 'account',
            component: TempAppAccountComponent,
            children: [
              {
                path: 'dashboard',
                component: TempDashboardComponent
              },
              {
                path: 'job-manager',
                children: [
                  {
                    path: 'jobs',
                    component: TempJobListComponent
                  },
                  {
                    path: 'job-leads',
                    component: TempJobLeadListComponent
                  },
                  {
                    path: '',
                    redirectTo: 'job-leads',
                    pathMatch: 'full'
                  },
                ]

              }
            ]
          },
          {
            path: '',
            redirectTo: 'account',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ]
})
export class TempAppModule { }
