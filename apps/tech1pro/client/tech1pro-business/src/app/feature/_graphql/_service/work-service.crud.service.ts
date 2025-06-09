import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CreateWorkServiceGQL, WorkServiceByIdGQL, WorkServiceInput, WorkServicesGQL, RemoveWorkServiceGQL, UpdateWorkServiceGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class WorkServiceCrudService {

  constructor(
    private createWorkServiceGQL: CreateWorkServiceGQL,
    private updateWorkServiceGQL: UpdateWorkServiceGQL,
    private removeWorkServiceGQL: RemoveWorkServiceGQL,
    private workServicesGQL: WorkServicesGQL,
    private workServiceByIdGQL: WorkServiceByIdGQL
  ) { }

  createWorkService$(workServiceInput: WorkServiceInput) {
    return this.createWorkServiceGQL.mutate( {workServiceInput }).pipe(
      map( res => res.data?.createWorkService.workServiceLastAdded)
    );
  }

  updateWorkService$(workServiceIdInput: string, updateWorkServiceInput: WorkServiceInput) {
    return this.updateWorkServiceGQL.mutate({ workServiceIdInput, updateWorkServiceInput }).pipe(
      map( res => res.data?.updateWorkService.workServiceLastUpdated)
    );
  }

  removeWorkServicelead$(workServiceIdInput: string) {
    return this.removeWorkServiceGQL.mutate({ workServiceIdInput }).pipe(
      map( res => res.data?.removeWorkService.workServices)
    );
  }

  fetchWorkServices$() {
    return this.workServicesGQL.fetch().pipe(
      map( res => res.data.account.workServices)
    );
  }

  fetcheWorkServiceById$(workServiceId: string) {
    return this.workServiceByIdGQL.fetch( {workServiceId}).pipe(
      map( res => res.data.account.workServiceById)
    );
  }

}
