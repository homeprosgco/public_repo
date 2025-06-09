import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImagesUploadComponent } from 'src/app/feature/_graphql/_input/form/_upload/_upload-control/images-upload/images-upload.component';
import { Prospect } from 'src/generated/graphql';
import { TabForm } from '../../../model/tab-form';
import { FilesUploadComponent } from '../../_upload/_upload-control/files-upload/files-upload.component';
import { JobLeadFormService } from '../job-lead-form.service';

@Component({
  selector: 'app-job-lead-form',
  templateUrl: './job-lead-form.component.html',
})
export class JobLeadFormComponent extends TabForm implements OnInit, AfterViewInit {

  @ViewChild(ImagesUploadComponent)
  imagesUploadComponent!: ImagesUploadComponent;
  @ViewChild(FilesUploadComponent)
  documentUploadComponent!: FilesUploadComponent;

  jobLeadForm!: FormGroup
  addressForm!: FormGroup;

  constructor(private jobLeadFormSvc: JobLeadFormService) { 
    super();
  }

  ngOnInit() {
    this.jobLeadForm = this.jobLeadFormSvc.jobLeadFormGroup;
    this.addressForm = this.jobLeadFormSvc.addressFormGroup;
  }

  ngAfterViewInit(): void {
    this.activateTabs();
    this.jobLeadFormSvc.setUploadServices(this.imagesUploadComponent.storage, this.documentUploadComponent.storage);
  }

  onProspectSelected(prospect: Prospect) {
    console.log(prospect);
    this.jobLeadFormSvc.onProspectSelected(prospect);
  }

  onStatusSelected(status: string) {
    console.log(status);
    this.jobLeadFormSvc.onStatusSelected(status);
  }

  onLeadSourceSelected(leadSource: string) {
    console.log(leadSource);
    this.jobLeadFormSvc.onLeadSourceSelected(leadSource);
  }

  onWorkCategorySelected(workCategory: string) {
    console.log(workCategory);
    this.jobLeadFormSvc.onWorkCategorySelected(workCategory);
  }

  onSubmit() {
    this.jobLeadFormSvc.onSubmit();
  }

}
