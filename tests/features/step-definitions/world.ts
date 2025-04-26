import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { setWorldConstructor, World as CucumberWorld } from '@cucumber/cucumber';

export class World extends CucumberWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async init() {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(World);
