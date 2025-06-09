import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PuppeteerBrowserModule } from './puppeteer-browser/puppeteer-browser.module';
import { UserModule } from './user/user.module';
import { ServiceModule } from './_service/service.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    PuppeteerBrowserModule,
    UserModule,
    AuthModule,
    ServiceModule,
    AccountModule,
  ]
})
export class GraphqlModule {}
