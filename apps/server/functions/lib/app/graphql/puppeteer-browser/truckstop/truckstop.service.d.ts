/// <reference types="node" />
import { OriginLocationInput, Truckstop } from "../../../graphql.schema.interface";
import { PuppeteerBrowserService } from "../puppeteer-browser.service";
import puppeteer from 'puppeteer';
import EventEmitter from 'node:events';
export declare class TruckstopService extends EventEmitter {
    #private;
    private puppeteerBrowserSvc;
    constructor(puppeteerBrowserSvc: PuppeteerBrowserService);
    truckstop(options?: {}): Promise<Truckstop>;
    truckstopLogin(): Promise<Truckstop>;
    searchLoads({ city, state }: OriginLocationInput): Promise<Truckstop>;
    setupTabLinks(): Promise<{
        openTabsCityStates: any[];
        activeTabIndex: number;
    }>;
    addNewLoadSearch(): Promise<{
        action: string;
    }>;
    editLoadSearch(openTabs: puppeteer.ElementHandle<Element>[]): Promise<{
        action: string;
    }>;
    focusOriginLocationInput(originLocationInput: {
        city: string;
        state: string;
        zipcode?: string;
    }): Promise<{
        originInput: string;
        inputValue: string;
        status: string;
    }>;
    search(): Promise<void>;
}
