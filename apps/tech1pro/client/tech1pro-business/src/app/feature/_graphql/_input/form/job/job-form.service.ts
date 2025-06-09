import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { dateNowIsoString } from 'src/app/_lib/util/util';
import { Job } from 'src/generated/graphql';
import { buildFormGroup } from '../form-util';

@Injectable({
  providedIn: 'root'
})
export class JobFormService {

  job!: Job;

  constructor() { }

  get jobForm() {
    const formGroup = buildFormGroup(["category", "requestedWorkScope", "definedWorkScope", "notes", "poNumber"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    formGroup.addControl("address", addressFormGroup);
    return formGroup;
  }

  get addressFormGroup() {
    return this.jobForm.controls["address"] as FormGroup;
  }

  setCreatedDate() {
    this.#setJob<string>({ created: dateNowIsoString });
  }

  set createdById(createdById: string) {
    this.#setJob<string>({ createdById });
  }

  set prospectId(prospectId: string) {
    this.#setJob<string>({ prospectId });
  }

  set customerId(customerId: string) {
    this.#setJob<string>({ customerId });
  }

  set proposalId(proposalId: string) {
    this.#setJob<string>({ proposalId });
  }

  set jobLeadId(jobLeadId: string) {
    this.#setJob<string>({ jobLeadId });
  }

  set referenceId(referenceId: string) {
    this.#setJob<string>({ referenceId });
  }

  set estimateId(estimateId: string) {
    this.#setJob<string>({ estimateId });
  }

  set poNumber( poNumber: string) {
    this.#setJob<string>({ poNumber });
  }

  set assignedToId(assignedToId: string) {
    this.#setJob<string>({ assignedToId });
  }

  set jobManagerId(jobManagerId: string) {
    this.#setJob<string>({ jobManagerId });
  }

  set startDate( start: string) {
    this.#setJob<string>({ start });
  }

  set completedDate( completedDate: string) {
    this.#setJob<string>({ completedDate });
  }

  #setJob<T>(state: { [key: string]: T } = {}) {
    this.job = {
      ...this.job,
      ...this.jobForm.value,
      ...state
    };
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.setCreatedDate();
      this.#setJob();
      console.log(this.job);
    }
  }

  get formValue() {
    return this.jobForm.value;
  }

}
