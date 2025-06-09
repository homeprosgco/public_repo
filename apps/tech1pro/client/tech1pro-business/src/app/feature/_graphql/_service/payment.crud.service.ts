import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CreatePaymentGQL, PaymentByIdGQL, PaymentInput, PaymentsGQL, RemovePaymentGQL, UpdatePaymentGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class PaymentCrudService {

  constructor(
    private createPaymentGQL: CreatePaymentGQL,
    private updatePaymentGQL: UpdatePaymentGQL,
    private removePaymentGQL: RemovePaymentGQL,
    private paymentsGQL: PaymentsGQL,
    private paymentByIdGQL: PaymentByIdGQL
  ) { }

  createPayment$(paymentInput: PaymentInput) {
    return this.createPaymentGQL.mutate( {paymentInput }).pipe(
      map( res => res.data?.createPayment.paymentLastAdded)
    );
  }

  updatePayment$(paymentIdInput: string, updatePaymentInput: PaymentInput) {
    return this.updatePaymentGQL.mutate({ paymentIdInput, updatePaymentInput }).pipe(
      map( res => res.data?.updatePayment.paymentLastUpdated)
    );
  }

  removePaymentlead$(paymentIdInput: string) {
    return this.removePaymentGQL.mutate({ paymentIdInput }).pipe(
      map( res => res.data?.removePayment.payments)
    );
  }

  fetchPayments$() {
    return this.paymentsGQL.fetch().pipe(
      map( res => res.data.account.payments)
    );
  }

  fetchePaymentById$(paymentId: string) {
    return this.paymentByIdGQL.fetch( {paymentId}).pipe(
      map( res => res.data.account.paymentById)
    );
  }

}
