import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { buildFormGroup } from '../form-util';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryFormService {

  constructor() { }

  get beneficiaryForm() {
    const formGroup = buildFormGroup(["firstname", "lastname", "displayName", "email", "phone", "type"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    formGroup.addControl("address", addressFormGroup);
    return formGroup;
  }

  get addressFormGroup() {
    return this.beneficiaryForm.controls["address"] as FormGroup;
  }

  get formValue() {
    return this.beneficiaryForm.value;
  }

}
