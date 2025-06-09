import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CreateJobLeadGQL, JobLeadByIdGQL, JobLeadInput, JobLeadsGQL, RemoveJobLeadGQL, UpdateJobLeadGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class JobLeadCrudService {

  constructor(
    private createJobLeadGQL: CreateJobLeadGQL,
    private updateJobLeadGQL: UpdateJobLeadGQL,
    private removeJobLeadGQL: RemoveJobLeadGQL,
    private jobLeadsGQL: JobLeadsGQL,
    private jobLeadByIdGQL: JobLeadByIdGQL
  ) { }

  createJobLead$(jobLeadInput: JobLeadInput) {
    return this.createJobLeadGQL.mutate( {jobLeadInput }).pipe(
      map( res => res.data?.createJobLead.jobLeadLastAdded)
    );
  }

  updateJobLead$(jobLeadIdInput: string, updateJobLeadInput: JobLeadInput) {
    return this.updateJobLeadGQL.mutate({ jobLeadIdInput, updateJobLeadInput }).pipe(
      map( res => res.data?.updateJobLead.jobLeadLastUpdated)
    );
  }

  removeJoblead$(jobLeadIdInput: string) {
    return this.removeJobLeadGQL.mutate({ jobLeadIdInput }).pipe(
      map( res => res.data?.removeJobLead.jobLeads)
    );
  }

  fetchJobLeads$() {
    return this.jobLeadsGQL.fetch().pipe(
      map( res => res.data.account.jobLeads)
    );
  }

  fetcheJobLeadById$(jobLeadId: string) {
    return this.jobLeadByIdGQL.fetch( {jobLeadId}).pipe(
      map( res => res.data.account.jobLeadById)
    );
  }

}
