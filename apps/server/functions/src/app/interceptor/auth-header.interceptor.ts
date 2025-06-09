import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHeaderInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const req = context.getArgByIndex(2).req;
    const token = req.header("authorization") && req.header("authorization").split(' ')[1] || '';
    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() => {
          const resolver = context.getClass().name.toLowerCase();
          if (resolver !== 'authresolver') {
            console.log(`After... ${Date.now() - now}ms`);
            req.res.set('Authorization', `Bearer ${token}`);
            req.res.set('Tech1-pro', 't1pro-server');
          }
          console.log('After...');
        }),
      );
  }
}