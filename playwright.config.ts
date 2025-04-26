import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/features',
  outputDir: 'test-results/',
  workers: 4,
  reporter: [['list'], ['allure-playwright']],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  fullyParallel: true,
  globalTimeout: 600000,
});
