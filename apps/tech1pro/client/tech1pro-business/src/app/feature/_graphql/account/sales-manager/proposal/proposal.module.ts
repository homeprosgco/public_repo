import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalComponent } from './proposal.component';
import { RouterModule } from '@angular/router';
import { ProposalListViewComponent } from './proposal-list-view/proposal-list-view.component';
import { ProposalByIdComponent } from './proposal-by-id/proposal-by-id.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProposalComponent,
        children: [
          {
            path: 'proposals',
            component: ProposalListViewComponent
          },
          {
            path: 'proposal/:proposalId',
            component: ProposalByIdComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    ProposalComponent,
    ProposalListViewComponent,
    ProposalByIdComponent
  ]
})
export class ProposalModule { }
