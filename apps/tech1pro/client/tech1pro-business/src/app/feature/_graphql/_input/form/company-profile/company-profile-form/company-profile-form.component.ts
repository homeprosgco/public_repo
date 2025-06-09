import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TabForm } from '../../../model/tab-form';
import { CompanyProfileFormService } from '../company-profile.service';

@Component({
  selector: 'app-company-profile-form',
  templateUrl: './company-profile-form.component.html',
})
export class CompanyProfileFormComponent extends TabForm implements OnInit, AfterViewInit {

  companyProfileForm!: FormGroup
  addressForm!: FormGroup;

  constructor(private companyProfileFormSvc: CompanyProfileFormService) { 
    super();
  }

  ngOnInit() {
    this.companyProfileForm = this.companyProfileFormSvc.companyProfileForm;
    this.addressForm = this.companyProfileFormSvc.addressFormGroup;
  }

  ngAfterViewInit(): void {
    this.activateTabs();
  }

  onSubmit() {
    console.log(this.companyProfileFormSvc.formValue);
  }

}
