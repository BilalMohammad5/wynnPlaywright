import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
};
