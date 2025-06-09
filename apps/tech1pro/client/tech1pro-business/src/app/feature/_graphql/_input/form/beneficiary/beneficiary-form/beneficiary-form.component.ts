import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TabForm } from '../../../model/tab-form';
import { BeneficiaryFormService } from '../beneficiary-form.service';

@Component({
  selector: 'app-beneficiary-form',
  templateUrl: './beneficiary-form.component.html',
})
export class BeneficiaryFormComponent extends TabForm implements OnInit, AfterViewInit {

  beneficiaryForm!: FormGroup
  addressForm!: FormGroup;

  constructor(private beneficiaryFormSvc: BeneficiaryFormService) { 
    super();
  }

  ngOnInit() {
    this.beneficiaryForm = this.beneficiaryFormSvc.beneficiaryForm;
    this.addressForm = this.beneficiaryFormSvc.addressFormGroup;
  }

  ngAfterViewInit(): void {
    this.activateTabs();
  }

  onSubmit() {
    console.log(this.beneficiaryFormSvc.formValue);
  }

}
