import { CompanyProfile, CompanyProfileInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

@Injectable()
export class CompanyProfileService {

  readonly collectionName = 'company-profile';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addCompanyProfile(accountId: string, companyProfileInput: CompanyProfileInput) {
    try {

      return await this.firestoreSvc.addDocument<CompanyProfile>(this.#collectionPath(accountId), {
        ...companyProfileInput,
        created: createdISOStringDate()
      }) as CompanyProfile;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getCompanyProfile(accountId: string): Promise<CompanyProfile> {
    try {
      const companyProfile = await this.firestoreSvc.getDocuments<CompanyProfile>(this.#collectionPath(accountId)) as CompanyProfile[];
      return companyProfile[0];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getCompanyProfileById(accountId: string, companyProfileId: string) {
    try {
      return await this.firestoreSvc.getDocument<CompanyProfile>(`${this.#collectionPath(accountId)}/${companyProfileId}`) as CompanyProfile;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async updateCompanyProfile(accountId: string, companyProfileId: string, companyProfileInput: CompanyProfileInput) {
    try {
      return await this.firestoreSvc.updateDocument<CompanyProfile>(`${this.#collectionPath(accountId)}/${companyProfileId}`, {
        ...companyProfileInput,
        updated: createdISOStringDate()
      });

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteCompanyProfile(accountId: string, companyProfileId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, companyProfileId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}