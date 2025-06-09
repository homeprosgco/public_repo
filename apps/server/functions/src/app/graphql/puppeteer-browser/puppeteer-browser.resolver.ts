import { Resolver, Query } from '@nestjs/graphql';
import { PuppeteerBrowser } from '../../graphql.schema.interface';
import { PuppeteerBrowserService } from './puppeteer-browser.service';


@Resolver('PuppeteerBrowser')
export class PuppeteerBrowserResolver {

  constructor(private puppeteerBrowserSvc: PuppeteerBrowserService){}

  @Query()
  puppeteerBrowser(): Promise<PuppeteerBrowser> {
    return this.puppeteerBrowserSvc.puppeteerBrowser();
  }
  
}