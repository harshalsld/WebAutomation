import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_BASE_URL = 'https://www.saucedemo.com';

function parseBoolean(value: string | undefined, defaultValue: boolean): boolean {
  if (value === undefined) {
    return defaultValue;
  }
  return value.toLowerCase() === 'true';
}

function parseNumber(value: string | undefined, defaultValue: number): number {
  if (value === undefined) {
    return defaultValue;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : defaultValue;
}

export const env = {
  baseUrl: process.env.BASE_URL ?? DEFAULT_BASE_URL,
  defaultTimeout: parseNumber(process.env.DEFAULT_TIMEOUT, 30_000),
  headless: parseBoolean(process.env.HEADLESS, true),
  ci: parseBoolean(process.env.CI, false),
  crossBrowser: parseBoolean(process.env.CROSS_BROWSER, false),
} as const;
