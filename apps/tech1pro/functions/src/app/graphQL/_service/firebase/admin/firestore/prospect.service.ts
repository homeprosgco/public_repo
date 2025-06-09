import { Prospect, ProspectInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { AddressService } from "./address.service";
import { throwFirestoreServerException } from "./_error/_util";

interface ProspectCreated extends Omit<Prospect, "created"> {
  created: string;
}

interface ProspectUpdated extends Omit<Prospect, "updated"> {
  updated: string;
}

@Injectable()
export class ProspectService {

  readonly collectionName = 'prospects';

  constructor(
    private readonly firestoreSvc: FirestoreService,
    private readonly addressSvc: AddressService
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addProspect(accountId: string, prospectInput: ProspectInput) {
    try {
      const { address, ...rest } = prospectInput;
      let savedAddress;
      if (address) {
        savedAddress = await this.addressSvc.addAddress(accountId, address);
      }

      return await this.firestoreSvc.addDocument<Prospect>(this.#collectionPath(accountId), {
        addressId: savedAddress ? savedAddress.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as Prospect;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedProspect(accountId: string) {
    try {
      const sortProspectsByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<ProspectCreated>(this.#collectionPath(accountId));
      return sortProspectsByCreatedDate[0] as Prospect;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedProspect(accountId: string) {
    try {
      const sortProspectsByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<ProspectUpdated>(this.#collectionPath(accountId));
      return sortProspectsByUpdatedDate[0] as Prospect;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProspects(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Prospect>(this.#collectionPath(accountId)) as Prospect[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProspectById(accountId: string, prospectId: string) {
    try {
      return await this.firestoreSvc.getDocument<Prospect>(`${this.#collectionPath(accountId)}/${prospectId}`) as Prospect;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async updateProspect(accountId: string, prospectId: string, prospectInput: ProspectInput) {
    try {
      const { address, ...rest } = prospectInput;
      const prospect = await this.firestoreSvc.updateDocument<Prospect>(`${this.#collectionPath(accountId)}/${prospectId}`, {
        ...rest,
        updated: createdISOStringDate()
      });

      if (prospect.addressId && address) {
        await this.addressSvc.updateAddress(accountId, prospect.addressId, address);
      }

      return prospect as Prospect;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteProspect(accountId: string, prospectId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, prospectId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}