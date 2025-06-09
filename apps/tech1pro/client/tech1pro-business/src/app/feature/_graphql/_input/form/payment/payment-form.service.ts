import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { payment } from 'src/app/test/query-graphql';
import { Payment } from 'src/generated/graphql';
import { PaymentCrudService } from '../../../_service/payment.crud.service';
import { buildFormGroup } from '../form-util';

const createPayment = (payment: Payment) => {
  return {
    amount: payment.amount || '',
    direction: payment.direction || '',
    to: payment.to || '',
    for: payment.for || '',
    referenceId: payment.referenceId || '',
    referenceType: payment.referenceType || '',
    note: payment.note || '',
  } as Partial<Payment>
}

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {

  private _isSubmitted = false;
  isEditing = false;
  #formGroup!: FormGroup;

  constructor(private paymentCrudSvc: PaymentCrudService) { }

  formGroup() {
    this.#formGroup = this.paymentForm;
    return this.#formGroup;
  }

  get paymentForm() {
    return buildFormGroup(["to", "for", "direction", "referenceId", "referenceType", "note"]);
  }

  addTestPayment() {
    this.#formGroup.setValue(createPayment(payment() as Payment))
  }
  
}
