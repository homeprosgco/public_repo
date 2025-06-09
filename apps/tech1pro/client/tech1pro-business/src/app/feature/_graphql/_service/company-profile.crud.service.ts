import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { CompanyProfileGQL, CompanyProfileInput, CreateCompanyProfileGQL, RemoveCompanyProfileGQL, UpdateCompanyProfileGQL } from "src/generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileCrudService {

  constructor(
    private createCompanyProfileGQL: CreateCompanyProfileGQL,
    private updateCompanyProfileGQL: UpdateCompanyProfileGQL,
    private removeCompanyProfileGQL: RemoveCompanyProfileGQL,
    private companyProfileGQL: CompanyProfileGQL
  ) { }

  createCompanyProfile$(companyProfileInput: CompanyProfileInput) {
    return this.createCompanyProfileGQL.mutate({ companyProfileInput }).pipe(
      map(res => res.data?.createCompanyProfile.companyProfile)
    );
  }

  updateCompanyProfile$(companyIdInput: string, updateCompanyProfileInput: CompanyProfileInput) {
    return this.updateCompanyProfileGQL.mutate({ companyIdInput, updateCompanyProfileInput }).pipe(
      map(res => res.data?.updateCompanyProfile.companyProfile)
    );
  }

  removeCompanyProfile$(companyIdInput: string) {
    return this.removeCompanyProfileGQL.mutate({ companyIdInput }).pipe(
      map(res => res.data?.removeCompanyProfile.accountId)
    );
  }

  companyProfile$() {
    return this.companyProfileGQL.fetch().pipe(
      map(res => res.data.account.companyProfile)
    );
  }

}