import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Category Service', () => {
  test('CAT TC01 Books category opens', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '.product-grid');
  });

  test('CAT TC02 Computers category opens', async ({ page }) => {
    await open(page, '/computers');
    await expectVisible(page, '.sub-category-grid');
  });

  test('CAT TC03 Electronics category opens', async ({ page }) => {
    await open(page, '/electronics');
    await expectVisible(page, '.sub-category-grid');
  });

  test('CAT TC04 Apparel category opens', async ({ page }) => {
    await open(page, '/apparel-shoes');
    await expectVisible(page, '.product-grid, .sub-category-grid');
  });

  test('CAT TC05 Digital downloads category opens', async ({ page }) => {
    await open(page, '/digital-downloads');
    await expectVisible(page, '.product-grid');
  });

  test('CAT TC06 Jewelry category opens', async ({ page }) => {
    await open(page, '/jewelry');
    await expectVisible(page, '.product-grid');
  });

  test('CAT TC07 Gift cards category opens', async ({ page }) => {
    await open(page, '/gift-cards');
    await expectVisible(page, '.product-grid');
  });

  test('CAT TC08 Books heading visible', async ({ page }) => {
    await open(page, '/books');
    await expect(page.locator('h1')).toContainText(/Books/i);
  });

  test('CAT TC09 Sort dropdown visible', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '#products-orderby');
  });

  test('CAT TC10 Page size dropdown visible', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '#products-pagesize');
  });

  test('CAT TC11 View mode dropdown visible', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '#products-viewmode');
  });

  test('CAT TC12 Product item visible', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '.product-item');
  });

  test('CAT TC13 Category navigation visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.block-category-navigation');
  });

  test('CAT TC14 Top menu visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.top-menu');
  });

  test('CAT TC15 Category URL should be correct', async ({ page }) => {
    await open(page, '/books');
    await expect(page).toHaveURL(/books/);
  });
});