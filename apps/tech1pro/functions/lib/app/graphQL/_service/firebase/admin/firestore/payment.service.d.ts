import { Payment, PaymentInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class PaymentService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "payments";
    constructor(firestoreSvc: FirestoreService);
    addPayment(accountId: string, paymentInput: PaymentInput): Promise<Payment>;
    getLastAddedPayment(accountId: string): Promise<Payment>;
    getLastUpdatedPayment(accountId: string): Promise<Payment>;
    getPayments(accountId: string): Promise<Payment[]>;
    getPaymentById(accountId: string, paymentId: string): Promise<Payment>;
    updatePayment(accountId: string, paymentId: string, paymentInput: PaymentInput): Promise<import("../../_types/types").TypeDataWithId<Payment>>;
    getPaymentsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined): Promise<Payment[]>;
    getPaymentsWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<Payment[]>;
    deletePayment(accountId: string, paymentId: string): Promise<FirebaseFirestore.WriteResult>;
}
