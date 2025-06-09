import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { AddInvoiceGQL, InvoiceInput, InvoicesByIdGQL, InvoicesGQL, RemoveInvoiceGQL, UpdateInvoiceGQL } from "src/generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class InvoiceCrudService {

  constructor(
    private addInvoiceGQL: AddInvoiceGQL,
    private updateInvoiceGQL: UpdateInvoiceGQL,
    private removeInvoiceGQL: RemoveInvoiceGQL,
    private invoicesGQL: InvoicesGQL,
    private invoiceByIdGQL: InvoicesByIdGQL
  ){}

  addInvoice$(invoiceInput: InvoiceInput) {
    return this.addInvoiceGQL.mutate({ invoiceInput }).pipe(
      map( res => res.data?.addInvoice.invoiceLastAdded)
    );
  }

  updateInvoice$(invoiceIdInput: string, updateInvoiceInput: InvoiceInput) {
    return this.updateInvoiceGQL.mutate( { invoiceIdInput, updateInvoiceInput}).pipe(
      map( res => res.data?.updateInvoice.invoiceLastUpdated)
    );
  }

  removeInvoice$(invoiceIdInput: string) {
    return this.removeInvoiceGQL.mutate({ invoiceIdInput }).pipe(
      map( res => res.data?.removeInvoice.invoices)
    );
  }

  fetchInvoices$() {
    return this.invoicesGQL.fetch().pipe( map( res => res.data.account.invoices));
  }

  fetchInvoiceById$(invoiceId: string) {
    return this.invoiceByIdGQL.fetch({ invoiceId }).pipe(
      map( res => res.data.account.invoiceById)
    );
  }
  
}