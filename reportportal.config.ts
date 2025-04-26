import { IReporterOptions } from '@reportportal/agent-js-cucumber';

const reportPortalConfig: IReporterOptions = {
  token: process.env.RP_TOKEN || '',         // You get this from ReportPortal UI
  endpoint: process.env.RP_ENDPOINT || '',   // Example: 'https://yourcompany.reportportal.io/api/v1'
  launch: process.env.RP_LAUNCH || 'Playwright-Cucumber-Automation',
  project: process.env.RP_PROJECT || 'your_project_name',
  description: 'Automated tests execution using Playwright and Cucumber',
  attributes: [{ key: 'platform', value: 'playwright' }],
  rerun: false,
  debug: false,
  restClientConfig: {
    timeout: 30000,
  },
};

export default reportPortalConfig;
