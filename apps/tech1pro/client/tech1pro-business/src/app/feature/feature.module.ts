import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureAreaComponent } from './feature-area.component';
import { FeatureUserResolver } from './feature-user.resolver';
import { AuthGuard } from './feature.guard';


@NgModule({
  declarations: [
    FeatureAreaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureAreaComponent,
        canActivate:[AuthGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: '',
            loadChildren: () => import('./_graphql/graph-ql.module').then(m => m.GraphQLModule),
          }
        ]
      }
    ])
  ]
})
export class FeatureModule { }
