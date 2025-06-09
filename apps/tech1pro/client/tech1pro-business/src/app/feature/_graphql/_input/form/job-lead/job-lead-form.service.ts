import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { createAddress, dateNowIsoString } from 'src/app/_lib/util/util';
import { Address, JobLead, Prospect } from 'src/generated/graphql';
import { UserService } from '../../../account/user/user.service';
import { AccountCrudService } from '../../../_service/account.crud.service';
import { buildFormGroup } from '../form-util';
import { StorageService } from '../_upload/service/storage.service';
import { UploadService } from '../_upload/service/upload.service';

const createJobLead = (jobLead: Partial<JobLead>) => {
  return jobLead;
}

@Injectable({
  providedIn: 'root'
})
export class JobLeadFormService {

  #isSubmitted: boolean = false;
  #formGroup!: FormGroup;
  #jobLead: Partial<JobLead> = createJobLead({
    status: 'new',
    leadSource: 'none'
  });

  constructor(
    private readonly accountCrudSvc: AccountCrudService,
    private readonly userSvc: UserService,
    private readonly uploadSvc: UploadService
  ) { }

  setUploadServices(imageUploadSvc: StorageService, documentUploadSvc: StorageService) {
    this.uploadSvc.setUploadServices(imageUploadSvc, documentUploadSvc);
  }

  get #jobLeadId() {
    return this.uploadSvc.firestoreDocId(`${this.accountCrudSvc.accountDocumentPath}/job-leads`);
  }

  get jobLeadFormGroup(): FormGroup {
    this.#formGroup = this.jobLeadForm;
    return this.#formGroup;
  }

  get jobLeadForm(): FormGroup {
    const formGroup = buildFormGroup(["requestedWorkScope", "definedWorkScope", "notes", "referenceId"]);
    const addressFormGroup = buildFormGroup(["city", "streetAddress", "state", "zipcode"]);
    formGroup.addControl("address", addressFormGroup);
    return formGroup;
  }

  get addressFormGroup() {
    return this.#formGroup.controls["address"] as FormGroup;
  }

  get isSubmitted() {
    return this.#isSubmitted;
  }

  get formValue() {
    return this.#formGroup.value;
  }

  onProspectSelected(prospect: Prospect) {
    console.log(prospect);
    if(prospect.address) {
      const address = createAddress(prospect.address as Address);
      this.addressFormGroup.setValue({ ...address });
    }
    
    this.#jobLead.prospectId = prospect.id as string;
  }

  onStatusSelected(status: string) {
    this.#jobLead.status = status.toLowerCase();
  }

  onLeadSourceSelected(leadSource: string) {
    this.#jobLead.leadSource = leadSource.toLowerCase();
  }

  onWorkCategorySelected(workCategory: string) {
    this.#jobLead.category = workCategory.toLowerCase();
  }

  async onSubmit() {
    console.log(this.#isFormValid);
    if (this.#isFormValid) {
      console.log(`Prospect ID: ${this.#jobLead.prospectId}`);

      const jobLeadId = this.#jobLeadId;
      console.log(`JobLead ID: ${jobLeadId}`);
      const [imageURLs, fileURLs] = await this.uploadSvc.uploadAll(`job-leads/${jobLeadId}`);
      this.uploadSvc.clearTimers();
      console.log(imageURLs);
      console.log(fileURLs);
      this.#jobLead = {
        ...this.#jobLead,
        ...this.formValue,
        imageURLs,
        fileURLs,
        createdById: this.userSvc.user.uid,
        created: dateNowIsoString
      };
      this.#postJobLead();
    }
    console.log(this.#formGroup.valid);
    console.log(this.#jobLead);
  }

  get #isFormValid(): boolean {
    return !!this.#jobLead.prospectId && this.#formGroup.valid;
  }

  #postJobLead() {
    console.log(this.#jobLead);
  }

  // all methods below are for testing purposes only

  addTestJobLead() {
  }

}
