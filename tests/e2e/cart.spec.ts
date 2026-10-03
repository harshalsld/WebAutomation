import * as allure from 'allure-js-commons';
import { test, expect } from '@/fixtures/test-fixtures';
import { products } from '@/utils/test-data';

test.describe('Sauce Demo — Cart', () => {
  test.beforeEach(async () => {
    await allure.feature('Cart');
  });

  test('@smoke authenticated user can add a product to cart', async ({
    authenticatedInventoryPage,
  }) => {
    await allure.severity('critical');

    await authenticatedInventoryPage.addProductByName(products.backpack);

    await expect.poll(() => authenticatedInventoryPage.getCartBadgeCount()).toBe('1');
  });
});
