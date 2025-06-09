import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkServiceComponent } from './work-service.component';
import { RouterModule } from '@angular/router';
import { WorkServiceListViewComponent } from './work-service-list-view/work-service-list-view.component';
import { WorkServiceByIdComponent } from './work-service-by-id/work-service-by-id.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WorkServiceComponent,
        children: [
          {
            path: 'work-services',
            component: WorkServiceListViewComponent
          },
          {
            path: 'work-service/:id',
            component: WorkServiceByIdComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    WorkServiceComponent,
    WorkServiceListViewComponent,
    WorkServiceByIdComponent
  ]
})
export class WorkServiceModule { }
