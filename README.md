# Web Automation — Playwright TypeScript Framework

Enterprise-style UI test automation for [Sauce Demo](https://www.saucedemo.com) using Playwright, TypeScript, Page Object Model, custom fixtures, and Allure reporting.

## Prerequisites

- Node.js 20 LTS (or newer)
- npm 10+

## Setup

```bash
cp .env.example .env
npm install
npx playwright install
```

Optional: set `CROSS_BROWSER=true` in `.env` to run Firefox and WebKit projects in addition to Chromium.

## Run tests

```bash
npm test              # headless, all tests
npm run test:headed   # visible browser
npm run test:ui       # Playwright UI mode
npm run test:smoke    # @smoke tagged tests only
```

## Reports

**Playwright HTML report**

```bash
npm run report
```

**Allure**

```bash
npm run allure:generate
npm run allure:open
```

JUnit XML is written to `test-results/junit.xml` for CI dashboards.

## Project structure

| Path | Purpose |
|------|---------|
| `src/pages/` | Page Object Model (actions only, no assertions) |
| `src/fixtures/` | Extended `test` with page objects and auth helper |
| `src/config/` | Environment and typed configuration |
| `src/utils/` | Test data and helpers |
| `tests/e2e/` | Spec files (`*.spec.ts`) |

## Conventions

- Import `test` and `expect` from `@/fixtures/test-fixtures`, not from `@playwright/test` directly.
- Prefer role-based locators (`getByRole`, `getByPlaceholder`) over brittle CSS.
- Keep assertions in specs; page objects expose actions and locators for verification when needed.
- Tag tests in titles (`@smoke`, `@regression`) for selective runs.
- Tests must be independent; use the `authenticatedInventoryPage` fixture when a logged-in session is required.

## Code quality

```bash
npm run lint
npm run typecheck
npm run format:check
```

## Record new flows

```bash
npm run codegen -- $BASE_URL
```

## CI

GitHub Actions workflow runs on push/PR to `main`: install browsers, execute tests, upload HTML/Allure/JUnit artifacts.
