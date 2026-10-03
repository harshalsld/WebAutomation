import type { Locator } from '@playwright/test';
import { BasePage } from '@/pages/base.page';

export class InventoryPage extends BasePage {
  private readonly cartLink: Locator;
  private readonly cartBadge: Locator;

  constructor(page: import('@playwright/test').Page) {
    super(page);
    this.cartLink = page.getByRole('link', { name: 'shopping cart' });
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductByName(productName: string): Promise<void> {
    const productContainer = this.page
      .locator('.inventory_item')
      .filter({ has: this.page.locator('.inventory_item_name', { hasText: productName }) });
    await productContainer.getByRole('button', { name: 'Add to cart' }).click();
  }

  async getCartBadgeCount(): Promise<string | null> {
    if (await this.cartBadge.count()) {
      return this.cartBadge.textContent();
    }
    return null;
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
