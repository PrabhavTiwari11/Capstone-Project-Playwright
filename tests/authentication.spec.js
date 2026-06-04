import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Authentication Service', () => {
  test('AUTH TC01 Login page opens', async ({ page }) => {
    await open(page, '/login');
    await expectVisible(page, '.login-page');
  });

  test('AUTH TC02 Email field visible', async ({ page }) => {
    await open(page, '/login');
    await expectVisible(page, '#Email');
  });

  test('AUTH TC03 Password field visible', async ({ page }) => {
    await open(page, '/login');
    await expectVisible(page, '#Password');
  });

  test('AUTH TC04 Login button visible', async ({ page }) => {
    await open(page, '/login');
    await expectVisible(page, '.login-button');
  });

  test('AUTH TC05 Remember me checkbox visible', async ({ page }) => {
    await open(page, '/login');
    await expectVisible(page, '#RememberMe');
  });

  test('AUTH TC06 Forgot password link visible', async ({ page }) => {
    await open(page, '/login');
    await expectVisible(page, 'a[href="/passwordrecovery"]');
  });

  test('AUTH TC07 Empty login should show validation', async ({ page }) => {
    await open(page, '/login');
    await page.locator('.login-button').click();
    await expectVisible(page, '.validation-summary-errors');
  });

  test('AUTH TC08 Invalid email should show validation', async ({ page }) => {
    await open(page, '/login');
    await page.locator('#Email').fill('wrong');
    await page.locator('.login-button').click();
    await expectVisible(page, '.field-validation-error');
  });

  test('AUTH TC09 Password recovery page opens', async ({ page }) => {
    await open(page, '/passwordrecovery');
    await expectVisible(page, '.password-recovery-page');
  });

  test('AUTH TC10 Recovery email field visible', async ({ page }) => {
    await open(page, '/passwordrecovery');
    await expectVisible(page, '#Email');
  });

  test('AUTH TC11 Recovery button visible', async ({ page }) => {
    await open(page, '/passwordrecovery');
    await expectVisible(page, '.password-recovery-button');
  });

  test('AUTH TC12 Login page heading visible', async ({ page }) => {
    await open(page, '/login');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('AUTH TC13 Register button visible on login page', async ({ page }) => {
    await open(page, '/login');
    await expectVisible(page, '.register-button');
  });

  test('AUTH TC14 Checkout as guest button visible', async ({ page }) => {
    await open(page, '/login/checkoutasguest');
    await expectVisible(page, '.checkout-as-guest-button');
  });

  test('AUTH TC15 Login URL should be correct', async ({ page }) => {
    await open(page, '/login');
    await expect(page).toHaveURL(/login/);
  });
});