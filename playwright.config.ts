import { defineConfig, devices } from '@playwright/test';
import { env } from './src/config/environment';

const crossBrowserProjects = [
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
];

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: env.ci,
  retries: env.ci ? 2 : 0,
  workers: env.ci ? 2 : undefined,
  timeout: env.defaultTimeout,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: env.baseUrl,
    headless: env.headless,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: env.defaultTimeout,
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results',
        detail: true,
        suiteTitle: true,
      },
    ],
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    ...(env.crossBrowser ? crossBrowserProjects : []),
  ],
});
