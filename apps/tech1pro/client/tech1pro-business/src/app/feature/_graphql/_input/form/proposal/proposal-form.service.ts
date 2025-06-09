import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Proposal } from 'src/generated/graphql';
import { addControls, buildArrayControls, buildFormGroup } from '../form-util';

@Injectable({
  providedIn: 'root'
})
export class ProposalFormService {

  proposal!: Proposal;

  constructor() { }

  get proposalForm() {
    const formGroup = buildFormGroup(["category", "requestedWorkScope", "definedWorkScope", "notes"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    addControls(formGroup, {"address": addressFormGroup});
    buildArrayControls(formGroup, ['lineWorkServices']);
    return formGroup;
  }

  get addressFormGroup() {
    return this.proposalForm.controls["address"] as FormGroup;
  }

  set prospectId(prospectId: string) {
    this.#setPproposal<string>({ prospectId });
  }

  set createdById(createdById: string) {
    this.#setPproposal<string>({ createdById });
  }

  set jobLeadId(jobLeadId: string) {
    this.#setPproposal<string>({ jobLeadId });
  }

  set referenceId(referenceId: string) {
    this.#setPproposal<string>({ referenceId });
  }

  #setPproposal<T>(state: { [key: string]: T } = {}) {
    this.proposal = {
      ...this.proposal,
      ...this.proposalForm.value,
      ...state
    };
  }

  onSubmit() {
    if (this.proposalForm.valid) {
      this.#setPproposal();
      console.log(this.proposal);
    }
  }

  get formValue() {
    return this.proposalForm.value;
  }

}
