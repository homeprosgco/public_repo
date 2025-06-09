import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PuppeteerBrowserService } from '../puppeteer-browser.service';

@Module({
  imports: [HttpModule],
  providers: [
    PuppeteerBrowserService
  ],
  exports: [HttpModule, PuppeteerBrowserService]
})
export class PuppeteerProviderModule {}
