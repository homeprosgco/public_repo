import { AuthUserEmailInput, AuthUserInput, Token } from "@graphql-schema/*";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { FirebaseAdminService } from "../admin.service";
import { AccountService } from "./firestore/account.service";
import { UserService } from "./firestore/user.service";
export declare class FirebaseAuthService {
    #private;
    private readonly firebaseAdminSvc;
    private readonly userSvc;
    private readonly accountSvc;
    constructor(firebaseAdminSvc: FirebaseAdminService, userSvc: UserService, accountSvc: AccountService);
    createUser(createUserInput: AuthUserInput): Promise<Token>;
    authUserCustomSigninToken(authUserEmailInput: AuthUserEmailInput): Promise<string>;
    registerAuthUser(authUserInput: AuthUserInput): Promise<{
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
        idToken: string;
    }>;
    verifyIdToken(idToken: string): Promise<DecodedIdToken>;
}
