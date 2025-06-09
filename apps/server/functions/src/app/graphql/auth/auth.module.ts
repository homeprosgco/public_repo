import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
// import { AuthResolverInterceptor } from '../../interceptor/auth-resolver.interceptor';

@Module({
  controllers: [AuthController],
  imports: [
    HttpModule
  ],
  providers: [
    AuthService, 
    AuthResolver,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: AuthResolverInterceptor
    // }
  ]
})
export class AuthModule { }
