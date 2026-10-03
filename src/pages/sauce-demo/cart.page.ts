import type { Locator } from '@playwright/test';
import { BasePage } from '@/pages/base.page';

export class CartPage extends BasePage {
  private readonly lineItems: Locator;

  constructor(page: import('@playwright/test').Page) {
    super(page);
    this.lineItems = page.locator('.cart_item .inventory_item_name');
  }

  async getLineItemNames(): Promise<string[]> {
    return this.lineItems.allTextContents();
  }
}
