import { Invoice, InvoiceInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class InvoiceService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "invoices";
    constructor(firestoreSvc: FirestoreService);
    addInvoice(accountId: string, invoiceInput: InvoiceInput): Promise<Invoice>;
    getLastAddedInvoice(accountId: string): Promise<Invoice>;
    getLastUpdatedInvoice(accountId: string): Promise<Invoice>;
    getInvoices(accountId: string): Promise<Invoice[]>;
    getInvoiceById(accountId: string, invoiceId: string): Promise<Invoice>;
    getInvoicesCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined): Promise<Invoice[]>;
    getInvoicesWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<Invoice[]>;
    updateInvoice(accountId: string, invoiceId: string, invoiceInput: InvoiceInput): Promise<Invoice>;
    deleteInvoice(accountId: string, invoiceId: string): Promise<FirebaseFirestore.WriteResult>;
}
