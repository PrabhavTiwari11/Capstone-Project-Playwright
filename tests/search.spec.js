import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Product Search Service', () => {
  test('SEARCH TC01 Search box visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '#small-searchterms');
  });

  test('SEARCH TC02 Search button visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.search-box-button');
  });

  test('SEARCH TC03 Search book keyword', async ({ page }) => {
    await open(page);
    await page.locator('#small-searchterms').fill('book');
    await page.locator('.search-box-button').click();
    await expect(page).toHaveURL(/search/);
  });

  test('SEARCH TC04 Search computer keyword', async ({ page }) => {
    await open(page, '/search?q=computer');
    await expectVisible(page, '.search-results');
  });

  test('SEARCH TC05 Search gift keyword', async ({ page }) => {
    await open(page, '/search?q=gift');
    await expectVisible(page, '.search-results');
  });

  test('SEARCH TC06 Search jewelry keyword', async ({ page }) => {
    await open(page, '/search?q=jewelry');
    await expectVisible(page, '.search-results');
  });

  test('SEARCH TC07 Search page opens', async ({ page }) => {
    await open(page, '/search');
    await expectVisible(page, '.search-page');
  });

  test('SEARCH TC08 Advanced search checkbox visible', async ({ page }) => {
    await open(page, '/search');
    await expectVisible(page, '#As');
  });

  test('SEARCH TC09 Search input visible on search page', async ({ page }) => {
    await open(page, '/search');
    await expectVisible(page, '#Q');
  });


  test('SEARCH TC14 Search page button visible', async ({ page }) => {
    await open(page, '/search');
    await expectVisible(page, '.search-button');
  });

  test('SEARCH TC15 Search URL should be correct', async ({ page }) => {
    await open(page, '/search?q=book');
    await expect(page).toHaveURL(/search/);
  });
});