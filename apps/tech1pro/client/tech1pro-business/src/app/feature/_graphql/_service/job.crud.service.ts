import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CreateJobGQL, JobByIdGQL, JobInput, JobsGQL, RemoveJobGQL, UpdateJobGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class JobCrudService {

  constructor(
    private createJobGQL: CreateJobGQL,
    private updateJobGQL: UpdateJobGQL,
    private removeJobGQL: RemoveJobGQL,
    private jobsGQL: JobsGQL,
    private jobByIdGQL: JobByIdGQL
  ) { }

  createJob$(jobInput: JobInput) {
    return this.createJobGQL.mutate( {jobInput }).pipe(
      map( res => res.data?.createJob.jobLastAdded)
    );
  }

  updateJob$(jobIdInput: string, updateJobInput: JobInput) {
    return this.updateJobGQL.mutate({ jobIdInput, updateJobInput }).pipe(
      map( res => res.data?.updateJob.jobLastUpdated)
    );
  }

  removeJoblead$(jobIdInput: string) {
    return this.removeJobGQL.mutate({ jobIdInput }).pipe(
      map( res => res.data?.removeJob.jobs)
    );
  }

  fetchJobs$() {
    return this.jobsGQL.fetch().pipe(
      map( res => res.data.account.jobs)
    );
  }

  fetcheJobById$(jobId: string) {
    return this.jobByIdGQL.fetch( {jobId}).pipe(
      map( res => res.data.account.jobById)
    );
  }

}
