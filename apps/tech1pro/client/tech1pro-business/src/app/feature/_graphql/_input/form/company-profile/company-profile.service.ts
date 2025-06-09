import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { addControls, buildFormGroup } from '../form-util';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileFormService {

  constructor() { }

  get companyProfileForm() {
    const formGroup = buildFormGroup(["companyName", "email", "phone", "serviceCategory", "fax", "website", "bio"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    addControls(formGroup, {"address": addressFormGroup});
    return formGroup;
  }

  get addressFormGroup() {
    return this.companyProfileForm.controls["address"] as FormGroup;
  }

  get formValue() {
    return this.companyProfileForm.value;
  }

}
