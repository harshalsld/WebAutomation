import * as allure from 'allure-js-commons';
import { test, expect } from '@/fixtures/test-fixtures';
import { credentials, messages } from '@/utils/test-data';

test.describe('Sauce Demo — Login', () => {
  test.beforeEach(async () => {
    await allure.feature('Login');
  });

  test('@smoke standard user can log in and reach inventory', async ({ loginPage, page }) => {
    await allure.severity('critical');

    await loginPage.open();
    await loginPage.login(credentials.standardUser, credentials.password);

    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('@regression locked out user sees an error message', async ({ loginPage }) => {
    await allure.severity('normal');

    await loginPage.open();
    await loginPage.login(credentials.lockedOutUser, credentials.password);

    await expect(loginPage.errorBanner()).toHaveText(messages.lockedOutError);
  });
});
