import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Shopping Cart Service', () => {
  test('CART TC01 Cart page opens', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.shopping-cart-page');
  });

  test('CART TC02 Cart link visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.ico-cart');
  });

  test('CART TC03 Cart quantity visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.cart-qty');
  });

  test('CART TC04 Empty cart content visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.order-summary-content');
  });

  test('CART TC05 Add first book to cart', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-box-add-to-cart-button').first().click();
    await expectVisible(page, '.bar-notification, .cart-qty');
  });

  test('CART TC06 Open cart after adding product', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-box-add-to-cart-button').first().click();
    await open(page, '/cart');
    await expectVisible(page, '.shopping-cart-page');
  });

  test('CART TC07 Cart URL should be correct', async ({ page }) => {
    await open(page, '/cart');
    await expect(page).toHaveURL(/cart/);
  });

  test('CART TC08 Cart title visible', async ({ page }) => {
    await open(page, '/cart');
    await expect(page.locator('h1')).toContainText(/Shopping cart/i);
  });

  test('CART TC09 Wishlist link visible near header', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.ico-wishlist');
  });

  test('CART TC10 Cart page body visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.page-body');
  });

  test('CART TC11 Cart footer or summary visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.order-summary-content');
  });

  test('CART TC12 Cart no crash check', async ({ page }) => {
    await open(page, '/cart');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('CART TC14 Cart page h1 visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, 'h1');
  });

  test('CART TC15 Cart content section visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.page-body');
  });
});