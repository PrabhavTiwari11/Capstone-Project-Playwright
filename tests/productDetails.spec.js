import { test } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Product Details Service', () => {
  test('PD TC01 Product detail page opens', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.product-essential');
  });

  test('PD TC02 Product name visible', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.product-name');
  });

  test('PD TC03 Product price visible', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.product-price');
  });

  test('PD TC04 Product overview visible', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.overview');
  });

  test('PD TC05 Add to cart section visible', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.add-to-cart');
  });

  test('PD TC06 Add to cart panel visible', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.add-to-cart-panel');
  });

  test('PD TC07 Product collateral section visible', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.product-collateral');
  });

  test('PD TC08 Email a friend button visible', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.email-a-friend-button');
  });

  test('PD TC09 Compare button visible', async ({ page }) => {
    await open(page, '/books');
    await page.locator('.product-title a').first().click();
    await expectVisible(page, '.add-to-compare-list-button');
  });

  test('PD TC10 Product images visible', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '.picture img');
  });

  test('PD TC11 Product title visible on list', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '.product-title');
  });

  test('PD TC12 Product price visible on list', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '.prices');
  });

  test('PD TC13 Recently viewed page opens', async ({ page }) => {
    await open(page, '/recentlyviewedproducts');
    await expectVisible(page, '.recently-viewed-products-page');
  });

  test('PD TC15 Product list add to cart button visible', async ({ page }) => {
    await open(page, '/books');
    await expectVisible(page, '.product-box-add-to-cart-button');
  });
});