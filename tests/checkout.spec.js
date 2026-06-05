import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Checkout Service', () => {
  test('CHK TC01 Checkout as guest login page opens', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, '.login-page');
  });

  test('CHK TC02 Guest checkout button visible', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, '.checkout-as-guest-button');
  });

  test('CHK TC03 Register checkout button visible', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, '.register-button');
  });

  test('CHK TC04 Checkout cart page opens', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.shopping-cart-page');
  });


  test('CHK TC05 Cart summary visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.order-summary-content');
  });

  test('CHK TC06 Cart page body visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.page-body');
  });

  test('CHK TC07 Checkout page no crash', async ({ page }) => {
    await open(page, '/cart');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('CHK TC08 Cart title visible before checkout', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, 'h1');
  });

  test('CHK TC09 Checkout guest page heading visible', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, 'h1');
  });
});