import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/feature/_graphql/account/user/user.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private userSvc: UserService) {
    console.log('auth int')
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    // const authToken = this.auth.getAuthorizationToken();
    console.log('auth bearer');
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    // const authReq = req.clone({
    //   // headers: req.headers.set('Authorization', authToken)
    //   headers: req.headers.set('Authorization', 'Bearer ew9q04erc,qojddisodsafjds')
    // });

    // send cloned request with header to the next handler.
    // return next.handle(authReq);
    return next.handle(req);
  }

}
