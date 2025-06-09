import { Injectable } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { AccountIdGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class AccountCrudService {

  #accountId!: string;
  #accountIdSub: Subscription;

  constructor(
    private readonly acccountIdGQL: AccountIdGQL
  ) {
    this.#accountIdSub = this.#accountId$().subscribe(accountId => {
      this.#accountId = accountId;
      console.log(`User Account ID: ${this.#accountId}`);
    });
  }

  subscribeToAccountId() {
    
  }

  #accountId$(): Observable<string> {
    return this.acccountIdGQL.fetch().pipe(
      map(response => response.data.accountId.id)
    );
  }

  get accountDocumentPath() {
    return `app/tech1pro/accounts/${this.#accountId}`;
  }

  unSubscribeAccountId() {
    this.#accountIdSub.unsubscribe();
  }


}
