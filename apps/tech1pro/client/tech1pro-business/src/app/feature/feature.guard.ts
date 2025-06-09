import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from './_graphql/account/user/user.service';
import { AuthService } from './_graphql/auth/service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userSvc: UserService,
    private authSvc: AuthService
  ) { };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.userSvc.user$().pipe(
      map(user => {
        if (user) {
          return !!user as boolean;
        } else {
          return this.router.parseUrl('/signin');
        }
      })
    )
    // let isLoggedIn = true
    // if (isLoggedIn) {
    //   return true
    // } else {
    //   return this.router.navigate(['/signin']);
    // }
  }

}