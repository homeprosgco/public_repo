/// <reference types="node" />
import puppeteer from 'puppeteer';
import { HttpService } from '@nestjs/axios';
import { PuppeteerBrowser } from '../../graphql.schema.interface';
import EventEmitter from 'node:events';
export declare class PuppeteerBrowserService extends EventEmitter {
    #private;
    private httpSvc;
    constructor(httpSvc: HttpService);
    launchBrowser(): Promise<void>;
    browserReady(): Boolean;
    puppeteerBrowser(): Promise<PuppeteerBrowser>;
    getBrowserConnectionURL(): Promise<any>;
    get browser(): puppeteer.Browser;
    browserPages(): Promise<puppeteer.Page[]>;
    browserPageUrls(): Promise<string[]>;
    hasPage(url: string): Promise<boolean>;
    getPage(url: string): Promise<puppeteer.Page>;
    openPage(url: string): Promise<puppeteer.Page>;
}
