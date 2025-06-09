import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TabForm } from '../../../model/tab-form';
import { CustomerFormService } from '../customer-form.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
})
export class CustomerFormComponent extends TabForm implements OnInit, AfterViewInit {

  customerForm!: FormGroup
  addressForm!: FormGroup;

  constructor(private customerFormSvc: CustomerFormService) { 
    super();
  }

  ngOnInit() {
    this.customerForm = this.customerFormSvc.customerForm;
    this.addressForm = this.customerFormSvc.addressFormGroup;
  }

  ngAfterViewInit(): void {
    this.activateTabs();
  }

  onSubmit() {
    console.log(this.customerFormSvc.formValue);
  }

}
