import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { AddEstimateGQL, EstimateByIdGQL, EstimateInput, EstimatesGQL, RemoveEstimateGQL, UpdateEstimateGQL } from "src/generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class EstimateCrudService {

  constructor(
    private addEstimateGQL: AddEstimateGQL,
    private updateEstimateGQL: UpdateEstimateGQL,
    private removeEstimateGQL: RemoveEstimateGQL,
    private estimatesGQL: EstimatesGQL,
    private estimateByIdGQL: EstimateByIdGQL
  ) {}

  addEstimate$(estimateInput: EstimateInput) {
    return this.addEstimateGQL.mutate({ estimateInput }).pipe(
      map( res => res.data?.addEstimate.estimateLastAdded)
    );
  }

  updateEstimate$(estimateIdInput: string, updateEstimateInput: EstimateInput) {
    return this.updateEstimateGQL.mutate({ estimateIdInput, updateEstimateInput}).pipe(
      map(res => res.data?.updateEstimate.estimateLastUpdated)
    );
  }

  removeEstimate$(estimateIdInput: string) {
    return this.removeEstimateGQL.mutate({ estimateIdInput }).pipe(
      map(res => res.data?.removeEstimate.estimates)
    );
  }

  fetchEstimates$() {
    return this.estimatesGQL.fetch().pipe(
      map(res => res.data.account.estimates)
    );
  }

  fetchEstimateById$(estimateId: string) {
    return this.estimateByIdGQL.fetch({estimateId}).pipe(
      map(res => res.data.account.estimateById)
    )
  }
  
}