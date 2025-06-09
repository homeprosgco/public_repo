import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { buildFormGroup } from '../form-util';

@Injectable({
  providedIn: 'root'
})
export class CustomerFormService {

  constructor() { }

  get customerForm() {
    const formGroup = buildFormGroup(["firstname", "lastname", "displayName", "email", "phone", "type"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    formGroup.addControl("address", addressFormGroup);
    return formGroup;
  }

  get addressFormGroup() {
    return this.customerForm.controls["address"] as FormGroup;
  }

  get formValue() {
    return this.customerForm.value;
  }

}
