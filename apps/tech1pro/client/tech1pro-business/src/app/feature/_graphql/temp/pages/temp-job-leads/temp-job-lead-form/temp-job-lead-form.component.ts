import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StorageService } from 'src/app/feature/_graphql/_input/form/_upload/service/storage.service';
import { TempJobLeadFormService } from '../temp-job-lead-form.service';

type JobFormViewState = 'personal details' | 'address' | 'requested scope' | 'uploads';

@Component({
  selector: 'app-temp-job-lead-form',
  templateUrl: './temp-job-lead-form.component.html',
  providers: [StorageService]
})
export class TempJobLeadFormComponent implements OnInit {

  formViewStates: JobFormViewState[] = ['personal details', 'address', 'requested scope', 'uploads'];
  currentFormState!: JobFormViewState;
  currentFormStateIndex!: number;
  isUpdating!: boolean;
  previousBtnText!: string;
  nextBtnText!: string;

  jobLeadForm!: FormGroup;

  constructor(private jobLeadFormSvc: TempJobLeadFormService, private storageSvc: StorageService) { }

  ngOnInit() {
    this.isUpdating = false;
    this.currentFormState = 'uploads';
    this.currentFormStateIndex = 0;
    this.jobLeadForm = this.jobLeadFormSvc.jobLeadFormGroup;
  }

  get storage() {
    return this.storageSvc;
  }

  ngAfterViewInit() {
  }

  #updateFormState() {
    this.currentFormState = this.formViewStates[this.currentFormStateIndex];
  }

  onFile(e: Event) {
    console.log((e.target as HTMLInputElement).files);
  }

  onNextBtnPressed() {
    console.log(this.jobLeadFormSvc.jobLeadFormGroup.value);
    switch (this.currentFormStateIndex) {
      case 0:
        this.jobLeadFormSvc.stepOneSubmitted();
        console.log(this.jobLeadFormSvc.stepOneValid);
        if (!this.jobLeadFormSvc.stepOneValid) return;
        break;

      case 1:
        this.jobLeadFormSvc.stepTwoSubmitted();
        if (!this.jobLeadFormSvc.stepTwoValid) return;
        break;

      case 2:
        this.jobLeadFormSvc.stepThreeSubmitted();
        if (!this.jobLeadFormSvc.stepThreeValid) return;
        break;

      case 3:
        this.jobLeadFormSvc.stepFourSubmitted();
        if (!this.jobLeadFormSvc.stepFourSubmitted) return;
        break;

      default:
        break;
    }

    this.currentFormStateIndex++;
    this.#updateFormState();
  }

  onPreviousBtnPressed() {
    this.currentFormStateIndex--;
    this.#updateFormState();
  }

  async uploadFiles() {
    await this.storageSvc.uploadFiles('');
    console.log('submit file data');
  }

  get customer() {
    return this.jobLeadFormSvc.customerFormGroup;
  }

  get address() {
    return this.jobLeadFormSvc.addressFormGroup;
  }

  get firstname() {
    return this.jobLeadFormSvc.firstname;
  }

  get lastname() {
    return this.jobLeadFormSvc.lastname;
  }

  get email() {
    return this.jobLeadFormSvc.email;
  }

  get phone() {
    return this.jobLeadFormSvc.phone;
  }

  get streetAddress() {
    return this.jobLeadFormSvc.streetAddress;
  }

  get city() {
    return this.jobLeadFormSvc.city;
  }

  get state() {
    return this.jobLeadFormSvc.state;
  }

  get zipcode() {
    return this.jobLeadFormSvc.zipcode;
  }

  get requestedScope() {
    return this.jobLeadFormSvc.requestedScope;
  }

  get isStepOneSubmitted() {
    return this.jobLeadFormSvc.isStepOneSubmitted;
  }

  get isStepTwoSubmitted() {
    return this.jobLeadFormSvc.isStepTwoSubmitted;
  }

  get isStepThreeSubmitted() {
    return this.jobLeadFormSvc.isStepThreeSubmitted;
  }

  get isStepFourSubmitted() {
    return this.jobLeadFormSvc.isStepFourSubmitted;
  }

  get isSubmitted() {
    return this.jobLeadFormSvc.isSubmitted;
  }

  onSubmit() {
    this.jobLeadFormSvc.onSubmit();
  }

}
