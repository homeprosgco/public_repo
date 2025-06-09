import { Account, AccountProfile, AccountProfileInput, UserProfile } from "@graphql-schema/";
import { TypeDataWithId } from "../../_types/types";
import { FirestoreService } from "../firestore.service";
import { UserService } from "./user.service";
export declare class AccountService {
    #private;
    private readonly firestoreSvc;
    private readonly userSvc;
    constructor(firestoreSvc: FirestoreService, userSvc: UserService);
    getUserAssociatedAccount(userId: string): Promise<AccountProfile>;
    addNewAccount(accountProfileInput: AccountProfileInput): Promise<TypeDataWithId<AccountProfileInput>>;
    accountById(id: string): Promise<Account>;
    accountProfileById(id: string): Promise<AccountProfile>;
    allAccounts(): Promise<TypeDataWithId<Account>[]>;
    accountsWithUsersGreaterThan(userCount: number): Promise<AccountProfile[]>;
    setActiveAccounts(): Promise<AccountProfile[]>;
    getActiveAccounts(): Promise<AccountProfile[]>;
    randomAccount(): Promise<AccountProfile>;
    addTeamMember(accountId: string, userId: string): Promise<TypeDataWithId<{
        userIds: FirebaseFirestore.FieldValue;
    }>>;
    seedTeamMembers(accounts: AccountProfile[], users: UserProfile[]): Promise<Account[]>;
}
