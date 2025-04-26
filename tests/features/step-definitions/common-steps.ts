import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { World } from './world';  // Make sure correct path

Given('I launch the browser', async function (this: World) {
  // Browser and page are already launched in Before hook
  console.log('Browser launched successfully.');
});

When('I navigate to {string}', async function (this: World, url: string) {
  await this.page.goto(url);
});

Then('I should see the page title as {string}', async function (this: World, expectedTitle: string) {
  const actualTitle = await this.page.title();
  expect(actualTitle).toBe(expectedTitle);
});

