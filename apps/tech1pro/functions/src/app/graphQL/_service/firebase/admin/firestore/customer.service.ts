import { Customer, CustomerInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { AddressService } from "./address.service";
import { throwFirestoreServerException } from "./_error/_util";

interface CustomerCreated extends Omit<Customer, "created"> {
  created: string;
}

interface CustomerUpdated extends Omit<Customer, "updated"> {
  updated: string;
}

@Injectable()
export class CustomerService {

  readonly collectionName = 'customers';

  constructor(
    private readonly firestoreSvc: FirestoreService,
    private readonly addressSvc: AddressService
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addCustomer(accountId: string, customerInput: CustomerInput) {
    try {
      const { address, ...rest } = customerInput;
      let savedAddress;
      if (address) {
        savedAddress = await this.addressSvc.addAddress(accountId, address);
      }

      return await this.firestoreSvc.addDocument<Customer>(this.#collectionPath(accountId), {
        addressId: savedAddress ? savedAddress.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as Customer;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedCustomer(accountId: string) {
    try {
      const sortCustomersByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<CustomerCreated>(this.#collectionPath(accountId));
      return sortCustomersByCreatedDate[0] as Customer;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedCustomer(accountId: string) {
    try {
      const sortCustomersByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<CustomerUpdated>(this.#collectionPath(accountId));
      return sortCustomersByUpdatedDate[0] as Customer;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getCustomers(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Customer>(this.#collectionPath(accountId)) as Customer[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getCustomerById(accountId: string, customerId: string) {
    try {
      return await this.firestoreSvc.getDocument<Customer>(`${this.#collectionPath(accountId)}/${customerId}`) as Customer;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getCustomersByType(accountId: string, customerType: string) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual<Customer>(this.#collectionPath(accountId), 'type', customerType) as Customer[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateCustomer(accountId: string, customerId: string, customerInput: CustomerInput) {
    try {
      const { address, ...rest } = customerInput;
      const customer = await this.firestoreSvc.updateDocument<Customer>(`${this.#collectionPath(accountId)}/${customerId}`, {
        ...rest,
        updated: createdISOStringDate()
      });

      if (customer.addressId && address) {
        await this.addressSvc.updateAddress(accountId, customer.addressId, address);
      }

      return customer as Customer;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteCustomer(accountId: string, customerId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, customerId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}