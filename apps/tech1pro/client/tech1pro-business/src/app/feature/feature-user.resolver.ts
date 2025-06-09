import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { tap, map, Observable, take, first } from "rxjs";
import { User } from "src/generated/graphql";
import { UserService } from "./_graphql/account/user/user.service";

@Injectable({ providedIn: 'root' })
export class FeatureUserResolver implements Resolve<User> {
  constructor(private userSvc: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User>|Promise<User>|User {
    return this.userSvc.user$().pipe(
      first(),
      tap(user => console.log(user)),
      take(1),
      map( v => v as User)
      );
  }
}