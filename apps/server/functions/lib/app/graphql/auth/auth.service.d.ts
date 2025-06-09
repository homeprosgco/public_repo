import { ConfigService } from '@nestjs/config';
import { FirestoreService } from '../_service/firebase/firestore/firestore.service';
import { HttpService } from '@nestjs/axios';
import { FirebaseAdminService } from '../_service/firebase/admin/firebase-admin.service';
interface IUserCredential {
    email: string;
    password: string;
}
interface ICreateAccountUserCredential extends IUserCredential {
    accountId: string;
}
export declare class AuthService {
    #private;
    private configService;
    private firestoreSvc;
    private firebaseAdminSvc;
    private httpSvc;
    constructor(configService: ConfigService, firestoreSvc: FirestoreService, firebaseAdminSvc: FirebaseAdminService, httpSvc: HttpService);
    signupWithEmailAndPassword({ email, password }: IUserCredential): Promise<{
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
        token: string;
    }>;
    signupAccountUserWithEmailAndPassword({ email, password, accountId }: ICreateAccountUserCredential): Promise<{
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
        token: string;
    }>;
    createUserToken(userId: string, accountId: string): Promise<string>;
    signinWithEmailAndPassword({ email, password }: {
        email: any;
        password: any;
    }): Promise<{
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
    }>;
    verifyIdToken(idToken: string): Promise<import("firebase-admin/lib/auth/token-verifier").DecodedIdToken>;
    private configKey;
    private get firebaseApiKey();
    get firebaseSignupURL(): string;
    get firebaseSigninURL(): string;
}
export {};
