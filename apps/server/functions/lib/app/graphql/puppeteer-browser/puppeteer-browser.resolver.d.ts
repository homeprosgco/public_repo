import { PuppeteerBrowser } from '../../graphql.schema.interface';
import { PuppeteerBrowserService } from './puppeteer-browser.service';
export declare class PuppeteerBrowserResolver {
    private puppeteerBrowserSvc;
    constructor(puppeteerBrowserSvc: PuppeteerBrowserService);
    puppeteerBrowser(): Promise<PuppeteerBrowser>;
}
