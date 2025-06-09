import { Injectable } from '@angular/core';
import { User, ParsedToken, NextOrObserver, IdTokenResult } from 'firebase/auth';
import { Observable, Subject } from 'rxjs';
import { UserByProfileIdGQL, UserProfile } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  #user!: User;
  #user$: Subject<User | null> = new Subject();
  #userProfile!: UserProfile;
  #accountId!: string

  constructor() { }

  userObserver(userByProfileGQL: UserByProfileIdGQL): NextOrObserver<User> {
    return {
      next: (user) => {
        if (user) {
          this.user = user;
          this.#user$.next(this.user);
          userByProfileGQL.fetch({userProfileId: this.user.uid}).subscribe( userProfile => {
            this.#userProfile = userProfile.data.userProfileById as UserProfile;
            this.#accountId = this.#userProfile.activeAccountId as string;
          })
        } else {
          this.#user$.next(null);
        }
      },
      error: (error) => { },
      complete: () => { }
    }
  }

  user$(): Observable<User | null> {
    return this.#user$.asObservable();
  }

  set user(user: User) {
    this.#user = user;
  }

  get user() {
    return this.#user;
  }

  get userAccountId() {
    return this.#accountId;
  }

  async getUserIdToken(): Promise<string> {
    return await this.#user.getIdToken();
  }

  async getUserClaims(): Promise<ParsedToken> {
    return await this.#user.getIdTokenResult().then(result => result.claims);
  }

}
