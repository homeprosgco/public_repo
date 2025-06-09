import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobLeadComponent } from './job-lead.component';
import { JobLeadsComponent } from './job-leads/job-leads.component';
import { JobLeadByIdComponent } from './job-lead-by-id/job-lead-by-id.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JobLeadComponent,
        children: [
          {
            path: '',
            component: JobLeadsComponent
          },
          {
            path: 'job-lead/:jobLeadId',
            component: JobLeadByIdComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    JobLeadComponent,
    JobLeadsComponent,
    JobLeadByIdComponent,
  ]
})
export class JobLeadModule { }
