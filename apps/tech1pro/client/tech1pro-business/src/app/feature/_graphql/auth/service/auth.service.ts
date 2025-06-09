import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { authForm } from 'src/app/feature/_graphql/_input/form/form';
import { exhaustMap, map, Observable, of } from 'rxjs';
import { MutationResult } from 'apollo-angular';
import { getAuth, signInWithCustomToken, UserCredential, onAuthStateChanged, connectAuthEmulator, signOut } from "firebase/auth";
import { ActiveAccountsGQL, AuthUserCustomSigninTokenGQL, AuthUserResponse, RegisterAuthUserGQL, RegisterAuthUserMutation, SeedAuthUsersGQL, SeedTeamMembersGQL, SetActiveAccountsGQL, SigninAuthUserGQL, SigninAuthUserMutation, UserByProfileIdGQL } from 'src/generated/graphql';
import { UserService } from '../../account/user/user.service';
import { Token } from 'src/generated/graphql';
import { UIService } from 'src/app/ui/_ui-service/ui-service';

connectAuthEmulator(getAuth(), "http://localhost:3299");

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #_serverErrorMsg = '';

  private _isSubmitted = false;

  constructor(
    private signinAuthUserGQL: SigninAuthUserGQL,
    private registerAuthUserGQL: RegisterAuthUserGQL,
    private authUserCustomSigninTokenGQL: AuthUserCustomSigninTokenGQL,
    private seedAuthusersGql: SeedAuthUsersGQL,
    private seedTeamMembers: SeedTeamMembersGQL,
    private setActiveAccounts: SetActiveAccountsGQL,
    private activeAccounts: ActiveAccountsGQL,
    private userSvc: UserService,
    private uiService: UIService,
    private userByProfileGQL: UserByProfileIdGQL
  ) {
    this.authStateListener();
    this.uiService.signOut$().subscribe(async _ => {
      console.log('signing out');
      await this.#signOut();
    });
  }

  authStateListener() {
    onAuthStateChanged(getAuth(), this.userSvc.userObserver(this.userByProfileGQL));
  }

  set serverErrorMsg(msg: string) {
    this.#_serverErrorMsg = msg;
  }

  get authForm(): FormGroup {
    const form = authForm();
    form.setValue({
      email: 'Brown.Schamberger9@hotmail.com',
      password: 'OHmMabznvewdW3y',
      confirmPassword: 'OHmMabznvewdW3y'
    })
    return form;
  }

  get serverErrorMsg() {
    return this.#_serverErrorMsg;
  }

  get email(): AbstractControl {
    return this.authForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.authForm.controls['password'];
  }

  get confirmPassword(): AbstractControl {
    return this.authForm.controls['confirmPassword'];
  }

  get isSubmitted() {
    return this._isSubmitted;
  }

  #cancelSubmission() {
    this._isSubmitted = false;
    this.authForm.reset({
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  #onSubmit() {
    this._isSubmitted = true;
    console.log(this.email.valid);
    console.log(this.password.valid);
    console.log(this.confirmPassword.valid);
    console.log(this.confirmPassword.errors);
    console.log(this.authForm.value);
    console.log(this.authForm.errors)
    return this.authForm.valid;
  }

  // used for testing purposes only.
  signinWithCustomToken() {
    console.log('signinwithcustomtoken')
    if (!this.#onSubmit()) return;
    const { email } = this.authForm.value;
    return this.authUserCustomSigninTokenGQL.mutate({ input: { email } }).pipe(
      map(async response => {
        const resp = response.data as { "authUserCustomSigninToken": Token };
        const { token } = resp["authUserCustomSigninToken"];
        console.log(token);
        return await this.#signinWithCustomToken(token);
      }),
    );
  }

  registerUser() {
    if (!this.#onSubmit()) return;
    const { email, password } = this.authForm.value;
    return this.#postAuthCredential(this.registerAuthUserGQL.mutate({ input: { email, password } }), 'registerAuthUser');
  }

  signinUser() {
    if (!this.#onSubmit()) return;
    return this.#postAuthCredential(this.signinAuthUserGQL.mutate({ input: this.authForm.value }), 'signinAuthUser');
  }

  #postAuthCredential(mutationResult: Observable<MutationResult<RegisterAuthUserMutation | SigninAuthUserMutation>>, key: string) {
    return mutationResult.pipe(
      exhaustMap(async (response: MutationResult<RegisterAuthUserMutation | SigninAuthUserMutation>) => {
        const resp = response.data as { [key: string]: AuthUserResponse };
        console.log(resp[key]);
        const result = resp[key];
        this.#cancelSubmission();

        await this.#signinWithCustomToken((result.idToken as string));

        return result;
      })
    );
  }

  async #signOut() {
    const auth = getAuth();
    await signOut(auth);
  }

  async #signinWithCustomToken(customToken: string) {
    const auth = getAuth();
    const userCredential = await signInWithCustomToken(auth, customToken);
    const idToken = await userCredential.user.getIdToken();
    localStorage.setItem('idToken', idToken);
    this.userSvc.user = userCredential.user;
    console.log(this.userSvc.user);
  }

  // all methods below used for testing purposes to pupulate firebase emulator
  
  seedAuthUsers$() {
    return this.seedAuthusersGql.mutate();
  }

  seedTeamMembers$() {
    return this.seedTeamMembers.mutate();
  }

  setActiveAccounts$() {
    return this.setActiveAccounts.mutate();
  }

  activeAccounts$() {
    return this.activeAccounts.fetch();
  }

}
