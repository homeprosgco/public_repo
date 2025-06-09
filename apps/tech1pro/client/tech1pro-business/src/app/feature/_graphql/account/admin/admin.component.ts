import { Component, OnInit } from '@angular/core';
import { AllAccountsGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-admin',
  template: '<router-outlet></router-outlet>',
})
export class AdminComponent implements OnInit {

  constructor(private allAccounts: AllAccountsGQL) { }

  ngOnInit() {
    this.allAccounts.fetch().subscribe( accounts => console.log(accounts));
  }

}
