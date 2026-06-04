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

  test('CHK TC07 Checkout as guest URL correct', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expect(page).toHaveURL(/checkoutasguest/);
  });

  test('CHK TC08 Checkout login email visible', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, '#Email');
  });

  test('CHK TC09 Checkout login password visible', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, '#Password');
  });

  test('CHK TC10 Checkout login button visible', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, '.login-button');
  });

  test('CHK TC11 Cart summary visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.order-summary-content');
  });

  test('CHK TC12 Cart page body visible', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, '.page-body');
  });

  test('CHK TC13 Checkout page no crash', async ({ page }) => {
    await open(page, '/cart');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('CHK TC14 Cart title visible before checkout', async ({ page }) => {
    await open(page, '/cart');
    await expectVisible(page, 'h1');
  });

  test('CHK TC15 Checkout guest page heading visible', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, 'h1');
  });
});