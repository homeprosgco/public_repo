import { AccountService } from "../account/account.service";
import { AuthService } from "../auth/auth.service";
import { CompanyProfileService } from "../_service/firebase/firestore/datasource/account/company-profile.service";
import { FirestoreService } from "../_service/firebase/firestore/firestore.service";
export interface ServerContext {
    uid: string;
    accountId: string;
    auth: AuthService;
    firestore: FirestoreService;
    token: string;
    accountSvc: AccountService;
    companyProfileSvc: CompanyProfileService;
}
