import { Customer, CustomerInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
import { AddressService } from "./address.service";
export declare class CustomerService {
    #private;
    private readonly firestoreSvc;
    private readonly addressSvc;
    readonly collectionName = "customers";
    constructor(firestoreSvc: FirestoreService, addressSvc: AddressService);
    addCustomer(accountId: string, customerInput: CustomerInput): Promise<Customer>;
    getLastAddedCustomer(accountId: string): Promise<Customer>;
    getLastUpdatedCustomer(accountId: string): Promise<Customer>;
    getCustomers(accountId: string): Promise<Customer[]>;
    getCustomerById(accountId: string, customerId: string): Promise<Customer>;
    getCustomersByType(accountId: string, customerType: string): Promise<Customer[]>;
    updateCustomer(accountId: string, customerId: string, customerInput: CustomerInput): Promise<Customer>;
    deleteCustomer(accountId: string, customerId: string): Promise<FirebaseFirestore.WriteResult>;
}
