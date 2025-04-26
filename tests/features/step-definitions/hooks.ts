import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { World } from './world'; // Your custom World class
import { allure } from 'allure-playwright'; // Correct import for allure steps/screenshots

setDefaultTimeout(60 * 1000); // 60 seconds timeout for each scenario

Before(async function (this: World) {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: World, { result }) {
  if (result?.status === Status.FAILED) {
    // Take a screenshot if the test failed
    const screenshotBuffer = await this.page.screenshot({ type: 'png' });

    // Attach screenshot to Allure report
    allure.attachment('Failure Screenshot', screenshotBuffer, 'image/png');
  }

  // Clean up browser, context, page
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});
