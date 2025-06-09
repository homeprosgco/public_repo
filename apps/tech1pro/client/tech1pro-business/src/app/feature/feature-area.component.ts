import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './_graphql/account/user/user.service';
import { AuthService } from './_graphql/auth/service/auth.service';
import { AccountCrudService } from './_graphql/_service/account.crud.service';

@Component({
  selector: 'app-feature-area',
  template: `
  <app-ui>
    <router-outlet></router-outlet>
  </app-ui>
  `
})
export class FeatureAreaComponent implements OnInit, OnDestroy {

  #userSubscription: Subscription = new Subscription();

  constructor(
    private authSvc: AuthService,
    private userSvc: UserService,
    private accountCrudSvc: AccountCrudService
  ) { 
  }

  ngOnInit() {
    this.#userSubscription = this.userSvc.user$().subscribe(user => {
      console.log(`CurrentUser:`, user);
      if(user) {
        (async () => {
          const token = await this.userSvc.getUserClaims();
          console.log(token);
        })();
      }
    });
  }

  ngOnDestroy() {
    this.#userSubscription.unsubscribe();
    this.accountCrudSvc.unSubscribeAccountId();
  }

}
