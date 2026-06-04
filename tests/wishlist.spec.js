import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Wishlist Service', () => {
  test('WISH TC01 Wishlist page opens', async ({ page }) => {
    await open(page, '/wishlist');
    await expectVisible(page, '.wishlist-page');
  });

  test('WISH TC02 Wishlist link visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.ico-wishlist');
  });

  test('WISH TC03 Wishlist quantity visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.wishlist-qty');
  });

  test('WISH TC04 Wishlist content visible', async ({ page }) => {
    await open(page, '/wishlist');
    await expectVisible(page, '.wishlist-content');
  });

  test('WISH TC05 Wishlist URL should be correct', async ({ page }) => {
    await open(page, '/wishlist');
    await expect(page).toHaveURL(/wishlist/);
  });

  test('WISH TC06 Wishlist title visible', async ({ page }) => {
    await open(page, '/wishlist');
    await expect(page.locator('h1')).toContainText(/Wishlist/i);
  });

  test('WISH TC08 Wishlist body visible', async ({ page }) => {
    await open(page, '/wishlist');
    await expectVisible(page, 'body');
  });

  test('WISH TC09 Wishlist page layout visible', async ({ page }) => {
    await open(page, '/wishlist');
    await expectVisible(page, '.page-body');
  });

  test('WISH TC10 Wishlist h1 visible', async ({ page }) => {
    await open(page, '/wishlist');
    await expectVisible(page, 'h1');
  });

  test('WISH TC11 Wishlist no crash check', async ({ page }) => {
    await open(page, '/wishlist');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('WISH TC12 Gift cards page opens for wishlist product', async ({ page }) => {
    await open(page, '/gift-cards');
    await expectVisible(page, '.product-grid');
  });

  test('WISH TC13 Product item visible on gift cards', async ({ page }) => {
    await open(page, '/gift-cards');
    await expectVisible(page, '.product-item');
  });


});