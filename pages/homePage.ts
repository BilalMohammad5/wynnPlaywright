import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async getTitle() {
    return this.page.title();
  }
}
