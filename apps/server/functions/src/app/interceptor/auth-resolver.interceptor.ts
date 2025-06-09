import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthResolverInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('AUTHINTERCEPTOR BEFORE');
    return next
      .handle()
      .pipe(
        tap(() => {
          const ctx = GqlExecutionContext.create(context).getContext();
          console.log(ctx.token);
          if (ctx.token !== 'unauthenticated user') {
            ctx.req.res.set('Authorization', `Bearer ${ctx.token}`);
            ctx.req.res.set('X-Sender', 'Tech1Pro Business');
          }
          console.log('AUTHINTERCEPTOR AFTER');
        }),
      );
  }
}