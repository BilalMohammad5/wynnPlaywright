export const production = {
    BASE_URL: process.env.BASE_URL || "https://www.mysite.com",
    DB_HOST: process.env.DB_HOST || "prod-db-host",
    DB_PORT: Number(process.env.DB_PORT) || 5432,
    DB_USER: process.env.DB_USER || "produser",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    HEADLESS: process.env.HEADLESS === 'true',
    PAGE_TIMEOUT: 30000,
    EXPECT_TIMEOUT: 5000,
  };
  