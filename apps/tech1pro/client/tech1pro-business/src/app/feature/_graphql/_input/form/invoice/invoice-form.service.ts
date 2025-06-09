import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { dateNowIsoString } from 'src/app/_lib/util/util';
import { Invoice, Item, WorkService } from 'src/generated/graphql';
import { addControls, buildArrayControls, buildFormGroup, lineItemFormGroup, lineWorkServiceFormGroup } from '../form-util';

@Injectable({
  providedIn: 'root'
})
export class InvoiceFormService {

  invoice!: Invoice;

  get invoiceForm() {
    const formGroup = buildFormGroup(["category", "requestedWorkScope", "definedWorkScope", "notes", "status"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    addControls(formGroup, {"address": addressFormGroup});
    buildArrayControls(formGroup, ["lineItems", "lineWorkServices"]);
    return formGroup;
  }

  get addressFormGroup() {
    return this.invoiceForm.controls["address"] as FormGroup;
  }

  setCreatedDate() {
    this.#setInvoice<string>({ created: dateNowIsoString });
  }

  setInvoiceNumber() {
    this.#setInvoice<string>({number: '2399238'});
  }

  setCompanyId() {
    this.#setInvoice<string>({companyId: 'companyId'})
  }

  set createdById(createdById: string) {
    this.#setInvoice<string>({ createdById });
  }

  set prospectId(prospectId: string) {
    this.#setInvoice<string>({ prospectId });
  }

  set jobId(jobId: string) {
    this.#setInvoice<string>({ jobId });
  }

  set projectId(projectId: string) {
    this.#setInvoice<string>({ projectId });
  }

  set jobLeadId(jobLeadId: string) {
    this.#setInvoice<string>({ jobLeadId });
  }

  set customerId(customerId: string) {
    this.#setInvoice<string>({ customerId });
  }

  set proposalId(proposalId: string) {
    this.#setInvoice<string>({ proposalId });
  }

  set estimateId(estimateId: string) {
    this.#setInvoice<string>({ estimateId });
  }

  set referenceId(referenceId: string) {
    this.#setInvoice<string>({ referenceId });
  }

  set invoiceId(invoiceId: string) {
    this.#setInvoice<string>({ invoiceId });
  }

  set poNumber( poNumber: string) {
    this.#setInvoice<string>({ poNumber });
  }

  set assignedToId(assignedToId: string) {
    this.#setInvoice<string>({ assignedToId });
  }

  set invoiceManagerId(invoiceManagerId: string) {
    this.#setInvoice<string>({ invoiceManagerId });
  }

  set startDate( start: string) {
    this.#setInvoice<string>({ start });
  }

  set completedDate( completedDate: string) {
    this.#setInvoice<string>({ completedDate });
  }

  get lineItemsControl() {
    return this.invoiceForm.controls["lineItems"] as FormArray;
  }

  addLineItem(item: Item) {
    const lineItemForm = lineItemFormGroup(item);
    this.lineItemsControl.push(lineItemForm);
  }

  removeLineItem(index: number) {
    this.lineItemsControl.removeAt(index)
  }

  get lineWorkServicesControl() {
    return this.invoiceForm.controls["lineWorkServices"] as FormArray;
  }

  addLineWorkService(workService: WorkService) {
    const lineWorkServiceForm = lineWorkServiceFormGroup(workService);
    this.lineWorkServicesControl.push(lineWorkServiceForm);
  }

  removeLineWorkService(index: number) {
    this.lineWorkServicesControl.removeAt(index);
  }

  #setInvoice<T>(state: { [key: string]: T } = {}) {
    this.invoice = {
      ...this.invoice,
      ...this.invoiceForm.value,
      ...state
    };
  }

  onSubmit() {
    if (this.invoiceForm.valid) {
      this.setCreatedDate();
      this.setInvoiceNumber();
      this.#setInvoice();
      console.log(this.invoice);
    }
  }

  get formValue() {
    return this.invoiceForm.value;
  }

}
