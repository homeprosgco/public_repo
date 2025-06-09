import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirestoreService } from '../_service/firebase/firestore/firestore.service';
import { FirestoreServerException } from '../../exception';
import { HttpService } from '@nestjs/axios';
import { FirebaseAdminService } from '../_service/firebase/admin/firebase-admin.service';
import { UserRecord } from '../_service/firebase/admin/type';

interface IUserCredential {
  email: string;
  password: string;
};

interface ICreateAccountUserCredential extends IUserCredential {
  accountId: string;
}


@Injectable()
export class AuthService {

  constructor(
    private configService: ConfigService,
    private firestoreSvc: FirestoreService,
    private firebaseAdminSvc: FirebaseAdminService,
    private httpSvc: HttpService
  ) { }

  // use fireabase rest api for production to retrieve uid and refresh token *****
  async signupWithEmailAndPassword({ email, password }: IUserCredential) {
    try {
      const user = await this.#createUserWithEmailAndPassword({ email, password });
      console.log(user);
      // add new user as an account owner  and add token to response ******
      const accountId = await this.#createNewAccount(user);
      await this.#createAccountUser(accountId, user);
      const token = await this.#createAccountOwnerToken(user.uid, accountId);

      return {
        status: 'ok',
        operationType: 'register-auth-user',
        operationResult: 'successful',
        statusCode: 200,
        token
      }
    } catch (error) {
      throw new FirestoreServerException(error);
    }

  }

  async #createNewAccount(user: UserRecord) {
    const { data: { accountOwnerId } } = await this.firestoreSvc.createNew('account', {
      accountOwnerId: user.uid,
      userIds: [user.uid],
      accountOwnerEmail: user.email
    });

    return accountOwnerId;
  }

  async #createAccountUser(accountId: string, user: UserRecord) {
    const { disabled, displayName, email, emailVerified, phoneNumber, photoURL, uid } = user;
    await this.firestoreSvc.createNewWithId('user', uid, {
      disabled, displayName, email, emailVerified, phoneNumber, photoURL, accountId
    });
  }

  async #createAccountOwnerToken(accountOwnerId: string, accountId: string) {
    try {
      return this.#createCustomToken(accountOwnerId, {
        accountId: accountId,
        accountOwner: true,
        authenticated: true,
        roles: ['admin', 'super-admin']
      });
    } catch (error) {
      throw new FirestoreServerException(error);
    }
  }

  async signupAccountUserWithEmailAndPassword({ email, password, accountId }: ICreateAccountUserCredential) {
    const user = await this.#createUserWithEmailAndPassword({ email, password });
    console.log(user);
    await this.#createAccountUser(accountId, user);
    const token = await this.#createUserToken(user.uid, accountId, {
      authenticated: true,
      roles: ['user']
    });

    return {
      status: 'ok',
      operationType: 'register-account-user',
      operationResult: 'successful',
      statusCode: 200,
      token
    }
  }

  async createUserToken(userId: string, accountId: string): Promise<string> {
    try {
      const customToken = await this.#createUserToken(userId, accountId, {
        authenticated: true,
        roles: ['user']
      });
      const { data: { idToken, refreshToken } } = await this.httpSvc.axiosRef.post(this.configKey('FIREBASE_CUSTOM_TOKEN_EXCHANGE_URL'), {
        token: customToken,
        returnSecureToken: true
      });
  
      console.log(idToken, refreshToken, userId);
      await this.firestoreSvc.updateDocument(`app/nextstephomerepair/users/${userId}`, { idToken, refreshToken });
      return idToken;
    } catch (error) {
      console.log(error.response.data.error);
      throw new FirestoreServerException(error);
    }
    
  }

  async #createUserWithEmailAndPassword({ email, password }: IUserCredential) {
    try {
      return await this.firebaseAdminSvc.auth().createUser({ email, password });
    } catch (error) {
      throw new FirestoreServerException(error);
    }
  }

  async #createUserToken(userId: string, accountId: string, claims: { [key: string]: any }) {
    try {
      return await this.#createCustomToken(userId, {
        ...claims,
        accountId
      });
    } catch (error) {
      throw new FirestoreServerException(error);
    }
  }

  async #createCustomToken(userId: string, claims: { [key: string]: any }) {
    try {
      return await this.firebaseAdminSvc.auth().createCustomToken(userId, claims);
    } catch (error) {
      throw new FirestoreServerException(error);
    }
  }

  // use fireabase rest api for production to retrieve uid and refresh token
  async signinWithEmailAndPassword({ email, password }) {
    return {
      status: 'ok',
      operationType: 'signin-auth-user',
      operationResult: 'successful',
      statusCode: 200
    };
  }

  async verifyIdToken(idToken: string) {
    console.log(`VERIFYING ID TOKEN: ${idToken}`);
    try {
      return this.firebaseAdminSvc.auth().verifyIdToken(idToken)
    } catch (error) {
      throw new FirestoreServerException(error);
    }

  }

  private configKey(key: string) {
    return this.configService.get<string>(key);
  }

  private get firebaseApiKey() {
    return this.configKey('FIREBASE_ACCOUNT_API_KEY');
  }

  get firebaseSignupURL() {
    return `${this.configKey('FIREBASE_ACCOUNT_SIGNUP_URL')}${this.firebaseApiKey}`;
  }

  get firebaseSigninURL() {
    return `${this.configKey('FIREBASE_ACCOUNT_SIGNIN_URL')}${this.firebaseApiKey}`;
  }

}
