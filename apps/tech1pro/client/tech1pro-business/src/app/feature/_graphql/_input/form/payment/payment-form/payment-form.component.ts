import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaymentFormService } from '../payment-form.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentForm!: FormGroup;
  isEditing: boolean = false;
  isTesting: boolean = true;

  constructor(private paymentFormSvc: PaymentFormService) { }

  ngOnInit() {
    this.paymentForm = this.paymentFormSvc.formGroup();
  }

  onSubmit() {}

  // for testing purposes only
  addTestPayment() {
    this.paymentFormSvc.addTestPayment();
  }

}
