import { Page } from '@playwright/test';

export class BrowserUtils {
  constructor(private page: Page) {}

  async click(selector: string) {
    await this.page.click(selector);
  }

  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }
}
