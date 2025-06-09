import { Injectable } from "@angular/core";
import { MutationResult } from "apollo-angular";
import { Observable, map } from "rxjs";
import { AddBeneficiaryGQL, AddBeneficiaryMutation, BeneficiariesByCustomerIdGQL, BeneficiariesGQL, Beneficiary, BeneficiaryInput, RemoveBeneficiaryGQL, UpdateBeneficiaryGQL } from "src/generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryCrudService {

  constructor(
    private addBeneficiaryGQL: AddBeneficiaryGQL,
    private updateBeneficiaryGQL: UpdateBeneficiaryGQL,
    private removeBeneficiaryGQL: RemoveBeneficiaryGQL,
    private beneficiariesGQL:  BeneficiariesGQL,
    private beneficiariesByCustomerIdGQL: BeneficiariesByCustomerIdGQL
  ){}

  addBeneficiary$(beneficiary: Beneficiary): Observable<MutationResult<AddBeneficiaryMutation>> {
    return this.addBeneficiaryGQL.mutate({ beneficiaryInput: beneficiary});
  }

  updateBeneficiary$(beneficiaryIdInput: string, updateBeneficiaryInput: BeneficiaryInput) {
    return this.updateBeneficiaryGQL.mutate( { beneficiaryIdInput, updateBeneficiaryInput}).pipe(
      map(res => res.data?.updateBeneficiary.beneficiaryLastUpdated)
    );
  }

  removeBeneficiary$(beneficiaryIdInput: string) {
    return this.removeBeneficiaryGQL.mutate( {beneficiaryIdInput}).pipe(
      map(res => res.data?.removeBeneficiary.beneficiaries)
    )
  }

  fetchBeneficiaries$() {
    return this.beneficiariesGQL.fetch().pipe(
      map(res => res.data.account.beneficiaries)
    );
  }

  fetchBeneficiaryById$() {
    return this.beneficiariesByCustomerIdGQL.fetch().pipe(
      map(res => res.data.account.beneficiariesByCustomerId)
    );
  }
  
}