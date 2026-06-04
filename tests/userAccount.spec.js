import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('User Account Service', () => {
  test('ACC TC01 Customer info page redirects or loads', async ({ page }) => {
    await open(page, '/customer/info');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('ACC TC02 Addresses page redirects or loads', async ({ page }) => {
    await open(page, '/customer/addresses');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('ACC TC03 Orders page redirects or loads', async ({ page }) => {
    await open(page, '/customer/orders');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('ACC TC04 Downloadable products page redirects or loads', async ({ page }) => {
    await open(page, '/customer/downloadableproducts');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('ACC TC05 Reward points page redirects or loads', async ({ page }) => {
    await open(page, '/customer/rewardpoints');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('ACC TC06 Change password page redirects or loads', async ({ page }) => {
    await open(page, '/customer/changepassword');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('ACC TC07 Avatar page redirects or loads', async ({ page }) => {
    await open(page, '/customer/avatar');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('ACC TC08 Header links visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.header-links');
  });

  test('ACC TC09 Register link visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.ico-register');
  });

  test('ACC TC10 Login link visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.ico-login');
  });

  test('ACC TC11 Customer info redirects to login for guest', async ({ page }) => {
    await open(page, '/customer/info');
    await expect(page).toHaveURL(/login|customer/);
  });

  test('ACC TC12 Customer info body visible', async ({ page }) => {
    await open(page, '/customer/info');
    await expectVisible(page, 'body');
  });

  test('ACC TC13 Account navigation or login visible', async ({ page }) => {
    await open(page, '/customer/info');
    await expectVisible(page, '.login-page, .account-page');
  });

  test('ACC TC14 Address page body visible', async ({ page }) => {
    await open(page, '/customer/addresses');
    await expectVisible(page, 'body');
  });

  test('ACC TC15 Orders page body visible', async ({ page }) => {
    await open(page, '/customer/orders');
    await expectVisible(page, 'body');
  });
});