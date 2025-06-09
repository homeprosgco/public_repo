import { Component } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  template: `
    <div class="container wide-md pt-3">
      <div class="d-flex align-items-center justify-content-center">
      <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      div.container {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      }
    `
  ]
})
export class FormBuilderComponent {}
