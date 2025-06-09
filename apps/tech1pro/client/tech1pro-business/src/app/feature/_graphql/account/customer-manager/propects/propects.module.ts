import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProspectManagerComponent } from './prospect-manager/prospect-manager.component';
import { ProspectsListViewComponent } from './prospect-manager/prospects-list-view/prospects-list-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    ProspectManagerComponent,
    ProspectsListViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProspectManagerComponent,
        children: [
          {
            path: "",
            component: ProspectsListViewComponent
          },
        ]
      }
    ])
  ]
})
export class PropectsModule { }
