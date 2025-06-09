import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { HttpService } from '@nestjs/axios';
import { PuppeteerBrowser } from '../../graphql.schema.interface';
import EventEmitter from 'node:events';

@Injectable()
export class PuppeteerBrowserService extends EventEmitter  {

  #endpoint: null | string;
  #browser: puppeteer.Browser | null;
  #browserReady: Boolean = false;

  constructor(private httpSvc: HttpService) {
    super();
    this.#endpoint = null;
    this.#browser = null;
  }

  async launchBrowser() {
    this.#endpoint = await this.getBrowserConnectionURL();
    this.#browser = await this.#connectEndpoint();
    console.log(this.#endpoint);
    console.log(this.#browser.target());
    this.#browserReady = true;
    this.emit('browserReady', true);
  }

  browserReady() {
    return this.#browserReady;
  }

  async puppeteerBrowser(): Promise<PuppeteerBrowser> {
    const connectionURL = this.#endpoint;
    const openPagesURLs = await this.browserPageUrls();
    return {
      connectionURL,
      openPagesURLs
    }
  }

  async getBrowserConnectionURL() {
    const response = await this.httpSvc.axiosRef.get("http://localhost:3000/browser/browser-endpoint");
    return response.data["data"]["endpoint"];
  }

  async #connectEndpoint() {
    return await puppeteer.connect({
      browserWSEndpoint: this.#endpoint,
      slowMo: 100,
      defaultViewport: {
        height: 768,
        width: 1366,
        deviceScaleFactor: 1
      }
    });
  }

  get browser() {
    return this.#browser;
  }

  async browserPages() {
    return await this.browser.pages();
  }

  async browserPageUrls() {
    const browserPages = await this.browserPages();
    return browserPages.map(page => page.url())
  }

  async hasPage(url: string) {
    const pages = await this.browserPageUrls();
    return pages.includes(url);
  }

  async getPage(url: string) {
    const browserPages = await this.browserPages();
    const pageFound = browserPages.find(page => page.url() === url);
    if (!pageFound) {
      return null;
    }
    return pageFound;
  }

  async openPage(url: string) {
    const newPage = await this.browser.newPage();
    await newPage.goto(url, { waitUntil: 'networkidle0' });
    return newPage;
  }


}
