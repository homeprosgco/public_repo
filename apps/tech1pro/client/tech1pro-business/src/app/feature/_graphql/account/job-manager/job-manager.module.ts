import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobManagerComponent } from './job-manager.component';
import { RouterModule } from '@angular/router';
import { JobManagerDashboardComponent } from './job-manager-dashboard/job-manager-dashboard.component';
import { JobLeadModule } from './job-lead/job-lead.module';
import { JobLeadComponent } from './job-lead/job-lead.component';
import { JobLeadsComponent } from './job-lead/job-leads/job-leads.component';
import { JobLeadByIdComponent } from './job-lead/job-lead-by-id/job-lead-by-id.component';

@NgModule({
  imports: [
    CommonModule,
    JobLeadModule,
    RouterModule.forChild([
      {
        path: '',
        component: JobManagerComponent,
        children: [
          {
            path: 'job-leads',
            loadChildren: () => import("./job-lead/job-lead.module").then(m => m.JobLeadModule)
          },
          {
            path: 'jobs',
            loadChildren: () => import("./job/job.module").then(m => m.JobModule)
          },
          {
            path: 'job-manager-dashboard',
            component: JobManagerDashboardComponent
          },
          {
            path: '',
            redirectTo: 'job-manger-dashboard',
            pathMatch: 'full'
          },
        ],
      },
    ])
  ],
  declarations: [
    JobManagerComponent
  ]
})
export class JobManagerModule { }
