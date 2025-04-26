import { qa } from './environments/qa';
import { staging } from './environments/staging';
import { production } from './environments/prod';

const ENV = process.env.ENVIRONMENT || 'qa';

let environment;

switch (ENV.toLowerCase()) {
  case 'qa':
    environment = qa;
    break;
  case 'staging':
    environment = staging;
    break;
  case 'production':
    environment = production;
    break;
  default:
    console.warn(`⚠️ Unknown environment '${ENV}', falling back to QA.`);
    environment = qa;
    break;
}

export { environment };
