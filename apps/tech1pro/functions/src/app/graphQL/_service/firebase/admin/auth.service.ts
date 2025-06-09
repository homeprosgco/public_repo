import { AuthUserEmailInput, AuthUserInput, Token } from "@graphql-schema/*";
import { HttpException, Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { FirebaseAdminService } from "../admin.service";
import { FirestoreServerException } from "../exception";
import { AccountService } from "./firestore/account.service";
import { UserService } from "./firestore/user.service";

@Injectable()
export class FirebaseAuthService {

  constructor(
    private readonly firebaseAdminSvc: FirebaseAdminService,
    private readonly userSvc: UserService,
    private readonly accountSvc: AccountService
  ) { }

  #auth() {
    return this.firebaseAdminSvc.auth();
  }

  async createUser(createUserInput: AuthUserInput): Promise<Token> {
    try {
      const { uid } = await this.#auth().createUser({
        ...createUserInput
      });
      const token = await this.#createCustomToken(uid);
      return { token };
    } catch (error) {
      throw new HttpException("Error creating custom token", 404);
    }

  }

  async authUserCustomSigninToken(authUserEmailInput: AuthUserEmailInput) {
    try {
      const authUser = await this.#auth().getUserByEmail(authUserEmailInput.email.toLowerCase());
      const userAssociatedAccount = await this.accountSvc.getUserAssociatedAccount(authUser.uid);
      return this.#createCustomToken(authUser.uid, { accountId: userAssociatedAccount.id });
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async registerAuthUser(authUserInput: AuthUserInput) {
    try {
      const { uid } = await this.#auth().createUser({
        ...authUserInput
      });
      await this.userSvc.setUser(uid, { ...authUserInput });
      const { id } = await this.accountSvc.addNewAccount({ accountOwnerId: uid, userIds: [uid] });
      await this.userSvc.updateUserProfile(uid, { activeAccountId: id });

      const token = await this.#createCustomToken(uid, { accountId: id });
      return {
        status: 'ok',
        operationType: 'register-auth-user',
        operationResult: 'successful',
        statusCode: 200,
        idToken: token
      }
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }
  }

  async #createCustomToken(uid: string, claims = {}) {
    try {
      const token = await this.#auth().createCustomToken(uid, claims);
      console.log(token);
      return token;
    } catch (error) {
      throw new FirestoreServerException((error as FirebaseError));
    }

  }

  async verifyIdToken(idToken: string): Promise<DecodedIdToken> {
    return await this.#auth().verifyIdToken(idToken);
  }

}