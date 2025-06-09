import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { dateNowIsoString } from 'src/app/_lib/util/util';
import { Estimate, Item, WorkService } from 'src/generated/graphql';
import { addControls, buildArrayControls, buildFormGroup, lineItemFormGroup, lineWorkServiceFormGroup } from '../form-util';

@Injectable({
  providedIn: 'root'
})
export class EstimateFormService {

  estimate!: Estimate;

  get estimateForm() {
    const formGroup = buildFormGroup(["category", "requestedWorkScope", "definedWorkScope", "notes", "status"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    addControls(formGroup, {"address": addressFormGroup});
    buildArrayControls(formGroup, ["lineItems", "lineWorkServices"]);
    return formGroup;
  }

  get addressFormGroup() {
    return this.estimateForm.controls["address"] as FormGroup;
  }

  setCreatedDate() {
    this.#setEstimate<string>({ created: dateNowIsoString });
  }

  setEstimateNumber() {
    this.#setEstimate<string>({number: '2399238'});
  }

  setCompanyId() {
    this.#setEstimate<string>({companyId: 'companyId'})
  }

  set createdById(createdById: string) {
    this.#setEstimate<string>({ createdById });
  }

  set prospectId(prospectId: string) {
    this.#setEstimate<string>({ prospectId });
  }

  set jobLeadId(jobLeadId: string) {
    this.#setEstimate<string>({ jobLeadId });
  }

  set customerId(customerId: string) {
    this.#setEstimate<string>({ customerId });
  }

  set proposalId(proposalId: string) {
    this.#setEstimate<string>({ proposalId });
  }

  set referenceId(referenceId: string) {
    this.#setEstimate<string>({ referenceId });
  }

  set startDate( start: string) {
    this.#setEstimate<string>({ start });
  }

  set completedDate( completedDate: string) {
    this.#setEstimate<string>({ completedDate });
  }

  get lineItemsControl() {
    return this.estimateForm.controls["lineItems"] as FormArray;
  }

  addLineItem(item: Item) {
    const lineItemForm = lineItemFormGroup(item);
    this.lineItemsControl.push(lineItemForm);
  }

  removeLineItem(index: number) {
    this.lineItemsControl.removeAt(index)
  }

  get lineWorkServicesControl() {
    return this.estimateForm.controls["lineWorkServices"] as FormArray;
  }

  addLineWorkService(workService: WorkService) {
    const lineWorkServiceForm = lineWorkServiceFormGroup(workService);
    this.lineWorkServicesControl.push(lineWorkServiceForm);
  }

  removeLineWorkService(index: number) {
    this.lineWorkServicesControl.removeAt(index);
  }

  #setEstimate<T>(state: { [key: string]: T } = {}) {
    this.estimate = {
      ...this.estimate,
      ...this.estimateForm.value,
      ...state
    };
  }

  onSubmit() {
    if (this.estimateForm.valid) {
      this.setCreatedDate();
      this.setEstimateNumber();
      this.#setEstimate();
      console.log(this.estimate);
    }
  }

  get formValue() {
    return this.estimateForm.value;
  }

}
