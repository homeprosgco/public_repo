import { Component } from '@angular/core';

@Component({
  selector: 'app-sale-account-form-builder',
  template: `
    <div class="container pt-5 mt-5">
      <div class="d-flex align-items-center justify-content-center">
      <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      div.container {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      }
    `
  ]
})
export class SaleAccountFormBuilderComponent {}
