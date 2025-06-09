import { faker } from "@faker-js/faker";
import { Account, AccountProfile, AccountProfileInput, UserProfile } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { FirestoreServerException } from "../../exception";
import { Tech1ProAccountsPath } from "../../util/util";
import { TypeDataWithId } from "../../_types/types";
import { FirestoreService } from "../firestore.service";
import { UserService } from "./user.service";

@Injectable()
export class AccountService {

  constructor(
    private readonly firestoreSvc: FirestoreService,
    private readonly userSvc: UserService
  ) { }

  #collectionPath() {
    return `${Tech1ProAccountsPath}`
  }

  #documentPath(accountId: string) {
    return `${this.#collectionPath()}/${accountId}`;
  }

  async getUserAssociatedAccount(userId: string): Promise<AccountProfile> {
    const userAssociatedAccount = await this.firestoreSvc.getDocumentWhereArrayIncludes<AccountProfile>(`${Tech1ProAccountsPath}`, "userIds", userId) as AccountProfile[];
    return userAssociatedAccount[0];
  }

  async addNewAccount(accountProfileInput: AccountProfileInput) {
    try {
      return await this.firestoreSvc.addDocument(`${Tech1ProAccountsPath}`, accountProfileInput);
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async accountById(id: string) {
    try {
      return await this.firestoreSvc.getDocument<Account>(this.#documentPath(id)) as Account;
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async accountProfileById(id: string) {
    try {
      return await this.firestoreSvc.getDocument<AccountProfile>(this.#documentPath(id)) as AccountProfile;
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async allAccounts(): Promise<TypeDataWithId<Account>[]> {
    try {
      return await this.firestoreSvc.getDocuments<Account>(Tech1ProAccountsPath);
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async accountsWithUsersGreaterThan(userCount: number): Promise<AccountProfile[]> {
    try {
      const accounts = await this.allAccounts() as AccountProfile[];
      const filteredAccounts = accounts.filter(account => (account.userIds as string[]).length > userCount);
      return filteredAccounts.length > 0 ? filteredAccounts : [];
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async setActiveAccounts(): Promise<AccountProfile[]> {
    const activeAccounts = await this.accountsWithUsersGreaterThan(1);
    const promises = activeAccounts.map(account => this.firestoreSvc.updateDocument(`${Tech1ProAccountsPath}/${(account.id as string)}`, {
      activeAccount: true
    }));

    await Promise.all(promises);
    return activeAccounts;
  }

  async getActiveAccounts() {
    return await this.firestoreSvc.getDocumentsWhereEqual<AccountProfile>(`${Tech1ProAccountsPath}`, "activeAccount", true) as AccountProfile[];
  }

  async randomAccount() {
    const activeAccounts = await this.getActiveAccounts();
    return faker.helpers.arrayElement(activeAccounts);
  }

  async addTeamMember(accountId: string, userId: string) {
    try {
      return await this.firestoreSvc.updateDocument(`${Tech1ProAccountsPath}/${accountId}`, {
        userIds: this.firestoreSvc.addArrayElement(userId)
      });
    } catch (error) {
      throw new FirestoreServerException(error as FirebaseError);
    }
  }

  async seedTeamMembers(accounts: AccountProfile[], users: UserProfile[]) {
    const randomAccounts = faker.helpers.arrayElements(accounts, faker.datatype.number({ max: Math.floor(accounts.length / 2) }))
    const accountOwnerIds: string[] = randomAccounts.map(acccount => acccount.accountOwnerId) as string[];
    const accountIds: string[] = randomAccounts.map(acccount => acccount.id) as string[];

    for (let user of users) {
      const accountId = faker.helpers.arrayElement(accountIds);

      if (!accountOwnerIds.includes(user.id)) {
        await this.addTeamMember(accountId, user.id);
        await this.userSvc.updateUserProfile(user.id, { activeAccountId: accountId });
      }
    }
    return await this.allAccounts() as Account[];
  }

}