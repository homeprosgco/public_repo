import { Injectable } from '@angular/core';
import { MutationResult } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import { AccountProspectByIdGQL, AccountProspectsGQL, AddProspectGQL, AddProspectMutation, Prospect, ProspectInput, UpdateProspectGQL } from 'src/generated/graphql';
import { Select2Option } from '../_type/select2-option.type';

@Injectable({
  providedIn: 'root'
})
export class ProspectCrudService {

  constructor(
    private addProspectGQL: AddProspectGQL,
    private accountProspectByIdGQL: AccountProspectByIdGQL,
    private updateProspectGQL: UpdateProspectGQL,
    private accountProspectsGQL: AccountProspectsGQL
  ) { }

  addProspect(prospect: Prospect): Observable<MutationResult<AddProspectMutation>> {
    return this.addProspectGQL.mutate({ prospectInput: prospect });
  }

  prospects$() {
    return this.accountProspectsGQL.fetch().pipe(
      map(response => response.data.account.prospects as Prospect[])
    );
  }

  prospectSelect2Options$() {
    return this.prospects$().pipe(
      map(prospects => prospects.map(prospect => {
        return {
          ...prospect,
          text: `${prospect.firstname} ${prospect.lastname}`
        } as Select2Option<Prospect>;
      }))
    );
  }

  prospectById(prospectId: string) {
    return this.accountProspectByIdGQL.fetch({ prospectId }).pipe(
      map(response => {
        return response.data.account.prospectById;
      })
    );
  }

  updateProspsect(prospectIdInput: string, updateProspectInput: ProspectInput) {
    return this.updateProspectGQL.mutate({ prospectIdInput, updateProspectInput }).pipe(
      map(response => response.data?.updateProspect.prospectLastUpdated)
    );
  }


}
