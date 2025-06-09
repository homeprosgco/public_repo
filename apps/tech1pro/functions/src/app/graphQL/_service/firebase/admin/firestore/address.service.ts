import { Address, AddressInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { FirestoreServerException } from "../../exception";
import { Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";

@Injectable()
export class AddressService {

  readonly #collectionName = 'addresses';

  constructor(private readonly firestoreSvc: FirestoreService) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.#collectionName}`
  }

  async addAddress(accountId: string, address: AddressInput) {
    try {
      return await this.firestoreSvc.addDocument<Address>(this.#collectionPath(accountId), address) as Address;
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async getAddress(accountId: string, addressId: string) {
    try {
      return await this.firestoreSvc.getDocument<Address>(`${this.#collectionPath(accountId)}/${addressId}`) as Address;
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async updateAddress(accountId: string, addressId: string, address: AddressInput) {
    try {
      return this.firestoreSvc.updateDocument<Address>(`${this.#collectionPath(accountId)}/${addressId}`, address);
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

}