import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TabForm } from '../../../model/tab-form';
import { JobFormService } from '../job-form.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
})
export class JobFormComponent extends TabForm implements OnInit, AfterViewInit {

  jobForm!: FormGroup
  addressForm!: FormGroup;

  constructor(private jobFormSvc: JobFormService) { 
    super();
  }

  ngOnInit() {
    this.jobForm = this.jobFormSvc.jobForm;
    this.addressForm = this.jobFormSvc.addressFormGroup;
  }

  ngAfterViewInit(): void {
    this.activateTabs();
  }

  onSubmit() {
    console.log(this.jobFormSvc.formValue);
  }

}
