import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimateComponent } from './estimate.component';
import { RouterModule } from '@angular/router';
import { EstimateListViewComponent } from './estimate-list-view/estimate-list-view.component';
import { EstimateByIdComponent } from './estimate-by-id/estimate-by-id.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EstimateComponent,
        children: [
          {
            path: 'estimates',
            component: EstimateListViewComponent
          },
          {
            path: 'estimate/:id',
            component: EstimateByIdComponent
          }
        ]
      },
      {
        redirectTo: 'estimates',
        pathMatch: 'full',
        path: ''
      }
    ])
  ],
  declarations: [
    EstimateComponent,
    EstimateListViewComponent,
    EstimateByIdComponent
  ]
})
export class EstimateModule { }
