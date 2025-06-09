import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job.component';
import { RouterModule } from '@angular/router';
import { JobListViewComponent } from './job-list-view/job-list-view.component';
import { JobByIdComponent } from './job-by-id/job-by-id.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JobComponent,
        children: [
          {
            path: '',
            component: JobListViewComponent
          },
          {
            path: 'job/:jobId',
            component: JobByIdComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    JobComponent,
    JobListViewComponent,
    JobByIdComponent
  ]
})
export class JobModule { }
