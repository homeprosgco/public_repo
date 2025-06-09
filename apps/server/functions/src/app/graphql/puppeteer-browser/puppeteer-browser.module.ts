import { Module } from '@nestjs/common';
import { PuppeteerBrowserResolver } from './puppeteer-browser.resolver';
import { TruckstopModule } from './truckstop/truckstop.module';
import { PuppeteerProviderModule } from './puppeteer-provider/puppeteer-provider.module';

@Module({
  imports: [
    TruckstopModule,
    PuppeteerProviderModule
  ],
  providers: [PuppeteerBrowserResolver]
})
export class PuppeteerBrowserModule {}
