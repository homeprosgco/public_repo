import { HttpException, Injectable } from "@nestjs/common";
import { LoadsContainerTabsState, LoadSearch, OriginLocationInput, OriginLocationInputState, Truckstop } from "../../../graphql.schema.interface";
import { PuppeteerBrowserService } from "../puppeteer-browser.service";
import puppeteer from 'puppeteer';
import { loadboardPageURL } from './const/const';
import EventEmitter from 'node:events';

@Injectable()
export class TruckstopService extends EventEmitter {

  #loadboardPage: puppeteer.Page | null = null;

  constructor(private puppeteerBrowserSvc: PuppeteerBrowserService) {
    super();
    if (puppeteerBrowserSvc.browser) {
      const timer = setInterval(async () => {
        const browserReady = this.puppeteerBrowserSvc.browserReady();
        const hasTruckstopPage = await this.puppeteerBrowserSvc.hasPage(loadboardPageURL);;
        if (browserReady && hasTruckstopPage) {
          await this.#loadLoadboardPage();
          console.log(this.#loadboardPage.url());
          this.emit('loadboardLoaded', this.#loadboardPage);
          clearInterval(timer);
        }
        console.log(browserReady);
      }, 1000);
    }

  }

  async #wait(milliseconds: number = 2000) {
    return await new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  async #loadLoadboardPage() {
    if (this.#loadboardPage) return;
    this.#loadboardPage = await this.puppeteerBrowserSvc.getPage(loadboardPageURL);
  }

  async truckstop(options = {}): Promise<Truckstop> {
    const isLoggedIn = await this.puppeteerBrowserSvc.hasPage(loadboardPageURL);
    await this.#loadLoadboardPage();
    return {
      isLoggedIn,
      startNewSearch: false,
      isSearchContainerOpen: false,
      loadsContainerTabsState: null,
      ...options
    }
  }

  async #closeLoginPages() {
    let foundLoginPage: puppeteer.Page;
    const browserPageURLs = await this.puppeteerBrowserSvc.browserPageUrls();
    for (const pageUrl of browserPageURLs) {
      const loginUrl = ['https://app.truckstop.com/', 'https://truckstop.force.com/Signin'].includes(pageUrl);

      if (loginUrl) {
        foundLoginPage = await this.puppeteerBrowserSvc.getPage(pageUrl);
        await foundLoginPage.close();
      }
    }
  }

  async truckstopLogin() {
    await this.#closeLoginPages();
    const loginPage = await this.puppeteerBrowserSvc.openPage('https://truckstop.force.com/Signin');
    await this.#wait();
    try {
      let usernameInput = await loginPage.$eval('#username', (el: HTMLInputElement) => el.value);
      let passwordInput = await loginPage.$eval('#password', (el: HTMLInputElement) => el.value);

      if (!usernameInput && !passwordInput) {
        let usernameInputHandle = await loginPage.$('#username');
        await usernameInputHandle.type('larobinson1@gmail.com', { delay: 100 });
        let passwordInputHandle = await loginPage.$('#password');
        await passwordInputHandle.type('Business1$', { delay: 100 });
      }

      const loginBtn = await loginPage.$('.loginBtn');

      await Promise.all([
        loginPage.waitForNavigation({
          waitUntil: 'networkidle2'
        }),
        loginBtn.click(),
      ]);

    } catch (error) {
      throw new HttpException({ "error": error }, 404);
    }

    await this.#loadLoadboardPage();

    return await this.truckstop({ isLoggedIn: true });

  }

  async #startNewSearch() {
    if (!this.#loadboardPage) return false;
    const found = await this.#loadboardPage.$('[data-cy=start-new-search]');
    return !!found;
  }

  async searchLoads({ city, state }: OriginLocationInput) {
    let tabState: LoadsContainerTabsState | null = null;
    let action = '';
    let loadSearch: LoadSearch = {
      city,
      state,
      action
    };
    let operationMsg = "Search Loads";
    let originLocationInputState: OriginLocationInputState | null = null;

    if (!this.#loadboardPage) {
      return await this.truckstop({ operationMsg: "Loadboard not loaded" });
    }

    const startNewSearch = await this.#startNewSearch();
    if (startNewSearch) {
      const startNewSearchBtn = await this.#loadboardPage.$('[data-cy=start-new-search]');
      if (!startNewSearchBtn) throw new HttpException('AN ERROR OCCURED WHILE CLICKING ADD TAB', 404);
      await startNewSearchBtn.click();
    } else {
      const openTabs = await this.#loadboardPage.$$('.mat-tab-links > a');
      if (openTabs.length < 7) {
        action = (await this.addNewLoadSearch()).action;
        operationMsg += " (add new load search)"
      } else {
        action = (await this.editLoadSearch(openTabs)).action;
        operationMsg += " (edit load search)"
      }
      loadSearch = {
        ...loadSearch,
        action
      };
    }

    const isSearchContainerOpen = await this.#isSearchContainerOpen();

    if (isSearchContainerOpen) {
      originLocationInputState = await this.focusOriginLocationInput({ city, state });
    }

    tabState = await this.setupTabLinks();

    return await this.truckstop({
      startNewSearch,
      loadsContainerTabsState: tabState,
      loadSearch,
      operationMsg,
      originLocationInputState
    });
  }

  async setupTabLinks() {
    const openTabs = await this.#loadboardPage.$$('.mat-tab-links > a');
    const openTabsCityStates = [];
    let foundActive = false;
    let activeTabIndex: number = 0;
    for (const tab of openTabs) {
      const isActive = await tab.evaluate((el) => el.classList.contains('mat-tab-label-active'));
      if (!isActive && !foundActive) {
        activeTabIndex++;
      } else {
        foundActive = true;
      }

      const originLocation = await tab.$eval('.origin', (originEL) => originEL.textContent) as string;
      let destinationLocation = await tab.$eval('.destination', (destEl) => destEl.firstChild.textContent) as string;
      console.log(originLocation);
      console.log(destinationLocation);

      openTabsCityStates.push({
        originLocation,
        destinationLocation
      })
    }
    return {
      openTabsCityStates,
      activeTabIndex
    };
  }

  async addNewLoadSearch() {
    const addTabBtn = await this.#loadboardPage.$('button[data-cy="add-new-tab"]');
    if (!addTabBtn) throw new Error('AN ERROR OCCURED WHILE CLICKING ADD TAB');
    addTabBtn && await addTabBtn.click();
    return {
      action: 'add'
    }
  }

  async editLoadSearch(openTabs: puppeteer.ElementHandle<Element>[]) {
    const randomTabIndex = Math.floor(Math.random() * openTabs.length);
    const randomTab = openTabs[randomTabIndex];
    randomTab && await randomTab.click();

    const editLoadSeachBtn = await this.#loadboardPage.$('[data-cy="edit-load-search-tab"]');
    if (!editLoadSeachBtn) throw new Error('AN ERROR OCCURED: EDIT LOAD SEARCH BUTTON NOT FOUND');
    editLoadSeachBtn && await editLoadSeachBtn.click();
    return {
      action: 'edit'
    }
  }


  async focusOriginLocationInput(originLocationInput: { city: string, state: string, zipcode?: string }) {
    const originInput = await this.#isOriginLocationInputSelectBoxOpen();
    if (originLocationInput.zipcode) {
      await originInput.type(originLocationInput.zipcode, { delay: 100 });
      return {
        originInput: 'zipcode',
        inputValue: originLocationInput.zipcode,
        status: 'zipcode found'
      };
    } else {
      const cityStateInputValue = `${originLocationInput.city}, ${originLocationInput.state}`;
      await originInput.type(cityStateInputValue, { delay: 100 });

      await this.#wait(4000);
      console.log('execution continuing');

      const activeOption = await this.#loadboardPage.$('[data-cy="origin-mat-option-0"]');
      if (!activeOption) throw new Error('ORIGIN ACTIVE OPTION NOT FOUND');
      const activeOptionText = await activeOption.evaluate(option => option.textContent.toLowerCase().trim());

      console.log(cityStateInputValue.toLowerCase());
      console.log(activeOptionText);

      if (cityStateInputValue.toLowerCase() === activeOptionText) {
        await activeOption.click();
        // await this.search();
        return {
          originInput: 'cityState',
          inputValue: `${originLocationInput.city}, ${originLocationInput.state}`,
          status: 'cityState found'
        };
      } else {
        return {
          originInput: 'cityState',
          inputValue: `${originLocationInput.city}, ${originLocationInput.state}`,
          status: 'cityState value not found in origin input selection dropdown box'
        };
      }
    }
  }

  async #isSearchContainerOpen() {
    const searchContainer = await this.#loadboardPage.$('[data-cy="search-container"]');
    searchContainer && await this.truckstop({ isSearchContainerOpen: true });
    return searchContainer ? true : false;
  }

  async #isOriginLocationInputSelectBoxOpen() {
    let originInput: puppeteer.ElementHandle<Element>;
    originInput = await this.#loadboardPage.$('[data-cy="origin"]');
    if (!originInput) throw new Error('ORIGIN INPUT NOT FOUND');

    let selectBox = await this.#loadboardPage.$('#cdk-overlay-7');

    if (!selectBox) {
      await originInput.click();
      selectBox = await this.#loadboardPage.$('.mat-autocomplete-panel');
      if (!selectBox) throw new Error('ORIGIN INPUT SELECT BOX NOT FOUND');
    }

    return originInput;
  }

  async search() {
    const searchBtn = await this.#loadboardPage.$('[data-cy=search-button]');
    if (!searchBtn) throw new HttpException('SEARCH BUTTON NOT FOUND', 404);
    await searchBtn.click();
    await this.truckstop({ isSearchContainerOpen: false });
  }

}