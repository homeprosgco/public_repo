import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { allControlsValid, jobLeadForm, nestedFormControl } from 'src/app/feature/_graphql/_input/form/form';
import { buildFormGroup } from '../../../_input/form/form-util';

@Injectable({
  providedIn: 'root'
})
export class TempJobLeadFormService {

  #isSubmitted: boolean = false;
  #stepOneSubmitted: boolean = false;
  #stepTwoSubmitted: boolean = false;
  #stepThreeSubmitted: boolean = false;
  #stepFourSubmitted: boolean = false;

  constructor() { }

  get jobLeadFormGroup(): FormGroup {
    const formGroup = buildFormGroup(["category", "requestedWorkScope", "definedWorkScope", "notes", "leadSource"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    formGroup.addControl("address", addressFormGroup);
    return formGroup;
  }

  get #jobLeadForm() {
    return jobLeadForm();
  }

  get customerFormGroup() {
    return this.jobLeadFormGroup.controls["customer"] as FormGroup;
  }

  get addressFormGroup() {
    return this.jobLeadFormGroup.controls["address"] as FormGroup;
  }

  get firstname() {
    return this.#jobLeadForm["firstname"]
  }

  get lastname() {
    return this.#jobLeadForm["lastname"];
  }
  
  get email() {
    return this.#jobLeadForm["email"];
  }

  get phone() {
    return this.#jobLeadForm["phone"];
  }

  get streetAddress() {
    return this.#jobLeadForm["streetAddress"];
  }

  get city() {
    return this.#jobLeadForm["city"];
  }

  get state() {
    return this.#jobLeadForm["state"];
  }

  get zipcode() {
    return this.#jobLeadForm["zipcode"];
  }

  get requestedScope() {
    return this.#jobLeadForm["requestedScope"];
  }

  get stepOneValid() {
    return allControlsValid([this.firstname, this.lastname, this.email, this.phone]);
  }

  get stepTwoValid() {
    return allControlsValid([this.streetAddress, this.city, this.state, this.zipcode]);
  }

  get stepThreeValid() {
    return allControlsValid([this.requestedScope]);
  }

  stepOneSubmitted() {
    this.#stepOneSubmitted = true;
  }

  stepTwoSubmitted() {
    this.#stepTwoSubmitted = true;
  }

  stepThreeSubmitted() {
    this.#stepThreeSubmitted = true;
  }

  stepFourSubmitted() {
    this.#stepFourSubmitted = true;
  }

  get isStepOneSubmitted() {
    return this.#stepOneSubmitted;
  }

  get isStepTwoSubmitted() {
    return this.#stepTwoSubmitted;
  }

  get isStepThreeSubmitted() {
    return this.#stepThreeSubmitted;
  }

  get isStepFourSubmitted() {
    return this.#stepFourSubmitted;
  }

  get isSubmitted() {
    return this.#isSubmitted;
  }

  get formValue() {
    return this.jobLeadFormGroup.value;
  }

  onSubmit() {
    console.log(this.jobLeadFormGroup.valid);
    console.log(this.jobLeadFormGroup.value);
  }

}
