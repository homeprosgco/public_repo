import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { JobLeadsService } from 'src/app/feature/_graphql/account/job-manager/job-lead/service/job-leads.service';

@Component({
  selector: 'app-temp-job-lead-list',
  templateUrl: './temp-job-lead-list.component.html',
})
export class TempJobLeadListComponent implements OnInit {

  jobLeads$: Observable<any> = EMPTY;

  constructor(private jobLeadsSvc: JobLeadsService) { }

  ngOnInit() {
    this.jobLeads$ = this.jobLeadsSvc.jobLeads$();
  }

  onJobLeadView(id: string) {
    console.log(`Job Lead ID: ${id}`);
  }

  onJobLeadEdit(id: string) {
    console.log(`Job Lead ID: ${id}`);
  }

  onJobLeadRemove(id: string) {
    console.log(`Job Lead ID: ${id}`);
  }

}
