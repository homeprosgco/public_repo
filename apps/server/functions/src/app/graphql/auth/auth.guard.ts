import { Injectable, CanActivate, ExecutionContext, HttpException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';
import { CompanyProfileService } from '../_service/firebase/firestore/datasource/account/company-profile.service';
import { FirestoreService } from '../_service/firebase/firestore/firestore.service';
import { AuthService } from './auth.service';

const AUTH_RESOLVER_NAME = 'authresolver';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authSvc: AuthService,
    private readonly accountSvc: AccountService,
    private readonly companyProfileSvc: CompanyProfileService,
    private readonly firestoreSvc: FirestoreService
    ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    ctx.getContext().auth = this.authSvc;
    console.log('AUTH_GUARD');
    console.log(ctx.getArgs());

    if(false) {
      const token = ctx.getContext().token;
      const resolverName = context.getClass().name.toLowerCase();
      if (resolverName === AUTH_RESOLVER_NAME) {
        if (token === 'unauthenticated user') {
          return true;
        } else if (token) {
          return false;
        }
        throw new HttpException('Bad Request', 400);
      }
    }
    

    // console.log(token);
    // const { uid, accountId } = await this.authSvc.verifyIdToken(token);
    // console.log("Add user to context");
    // ctx.getContext().user = { uid, accountId };
    ctx.getContext().accountSvc = this.accountSvc;
    ctx.getContext().companyProfileSvc = this.companyProfileSvc;

    //temporary remove once accounts context is implemented
    ctx.getContext().firestore = this.firestoreSvc;
    console.log(`${ctx.getClass().name} -> ${ctx.getHandler().name}`);
    return true;
  }

}