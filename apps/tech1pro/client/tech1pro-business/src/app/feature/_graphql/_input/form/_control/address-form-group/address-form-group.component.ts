import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form-group',
  template: `
    <ng-container [formGroup]="form">
      <div class="row gy-4" [formGroupName]="'address'">
        <div class="col-md-6">
          <app-form-group [controlName]="'streetAddress'" [form]="addressForm" [inputId]="idSuffx + '-street-address'"
            [label]="'Street Address'" [placeholder]="'123 Thank You Place'"></app-form-group>
        </div>
        <div class="col-md-6">
          <app-form-group [controlName]="'city'" [form]="addressForm" [inputId]="idSuffx + '-city'"
            [label]="'City'" [placeholder]="'Wonderland'"></app-form-group>
        </div>
        <div class="col-md-6">
          <app-form-group [controlName]="'state'" [form]="addressForm" [inputId]="idSuffx + '-state'"
            [label]="'State'" [placeholder]="'Florida'"></app-form-group>
        </div>
        <div class="col-md-6">
          <app-form-group [controlName]="'zipcode'" [form]="addressForm" [inputId]="idSuffx + '-zipcode'"
            [label]="'Zipcode'" [placeholder]="'43453'"></app-form-group>
        </div>
      </div>
    </ng-container>
  `,
})
export class AddressFormGroupComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() addressForm!: FormGroup;
  @Input() idSuffx: string = 'update id suffex'

  constructor() { }

  ngOnInit() {
  }

}
