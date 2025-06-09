import { Beneficiary, BeneficiaryInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { AddressService } from "./address.service";
import { throwFirestoreServerException } from "./_error/_util";

interface BeneficiaryCreated extends Omit<Beneficiary, "created"> {
  created: string;
}

interface BeneficiaryUpdated extends Omit<Beneficiary, "updated"> {
  updated: string;
}

@Injectable()
export class BeneficiaryService {

  readonly collectionName = 'beneficiaries';

  constructor(
    private readonly firestoreSvc: FirestoreService,
    private readonly addressSvc: AddressService
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addBeneficiary(accountId: string, beneficiaryInput: BeneficiaryInput) {
    try {
      const { address, ...rest } = beneficiaryInput;
      let savedAddress;
      if (address) {
        savedAddress = await this.addressSvc.addAddress(accountId, address);
      }

      return await this.firestoreSvc.addDocument<Beneficiary>(this.#collectionPath(accountId), {
        addressId: savedAddress ? savedAddress.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as Beneficiary;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedBeneficiary(accountId: string) {
    try {
      const sortBeneficiarysByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<BeneficiaryCreated>(this.#collectionPath(accountId));
      return sortBeneficiarysByCreatedDate[0] as Beneficiary;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedBeneficiary(accountId: string) {
    try {
      const sortBeneficiarysByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<BeneficiaryUpdated>(this.#collectionPath(accountId));
      return sortBeneficiarysByUpdatedDate[0] as Beneficiary;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getBeneficiaries(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Beneficiary>(this.#collectionPath(accountId)) as Beneficiary[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getBeneficiariesByCustomerId(accountId: string, customerId: string) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual<Beneficiary>(this.#collectionPath(accountId), 'customerId', customerId) as Beneficiary[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getBeneficiaryById(accountId: string, beneficiaryId: string) {
    try {
      return await this.firestoreSvc.getDocument<Beneficiary>(`${this.#collectionPath(accountId)}/${beneficiaryId}`) as Beneficiary;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async updateBeneficiary(accountId: string, beneficiaryId: string, beneficiaryInput: BeneficiaryInput) {
    try {
      const { address, ...rest } = beneficiaryInput;
      const beneficiary = await this.firestoreSvc.updateDocument<Beneficiary>(`${this.#collectionPath(accountId)}/${beneficiaryId}`, {
        ...rest,
        updated: createdISOStringDate()
      });

      if (beneficiary.addressId && address) {
        await this.addressSvc.updateAddress(accountId, beneficiary.addressId, address);
      }

      return beneficiary as Beneficiary;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteBeneficiary(accountId: string, beneficiaryId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, beneficiaryId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}