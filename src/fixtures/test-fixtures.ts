import { test as base } from '@playwright/test';
import { LoginPage } from '@/pages/sauce-demo/login.page';
import { InventoryPage } from '@/pages/sauce-demo/inventory.page';
import { CartPage } from '@/pages/sauce-demo/cart.page';
import { credentials } from '@/utils/test-data';

type TestFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  authenticatedInventoryPage: InventoryPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  authenticatedInventoryPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(credentials.standardUser, credentials.password);
    await use(new InventoryPage(page));
  },
});

export { expect } from '@playwright/test';
