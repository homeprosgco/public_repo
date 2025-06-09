import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { CompanyProfileService } from '../_service/firebase/firestore/datasource/account/company-profile.service';
import { FirestoreService } from '../_service/firebase/firestore/firestore.service';
import { AuthService } from './auth.service';
export declare class AuthGuard implements CanActivate {
    private readonly authSvc;
    private readonly accountSvc;
    private readonly companyProfileSvc;
    private readonly firestoreSvc;
    constructor(authSvc: AuthService, accountSvc: AccountService, companyProfileSvc: CompanyProfileService, firestoreSvc: FirestoreService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
