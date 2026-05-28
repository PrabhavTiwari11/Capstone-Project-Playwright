const { test, expect } = require('@playwright/test');

test.describe('nopCommerce Product Search Test Cases', () => {
  test.setTimeout(90000);

  async function checkCloudflare(page) {
    const bodyText = await page.locator('body').innerText().catch(() => '');

    if (
      bodyText.includes('Performing security verification') ||
      bodyText.includes('demo.nopcommerce.com')
    ) {
      test.skip(true, 'Cloudflare security verification appeared');
    }
  }

  async function searchProduct(page, keyword) {
    await page.goto(`https://demo.nopcommerce.com/search?q=${encodeURIComponent(keyword)}`);
    await checkCloudflare(page);
    await expect(page.locator('h1')).toContainText('Search');
  }

  test('PRODUCT TC01 Search existing product', async ({ page }) => {
    await searchProduct(page, 'computer');
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

  test('PRODUCT TC02 Search non-existing product', async ({ page }) => {
    await searchProduct(page, 'abcdefghxyz');
    await expect(page.locator('.no-result')).toContainText('No products were found');
  });

  test('PRODUCT TC03 Search with empty input should show alert', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');
    await checkCloudflare(page);

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Please enter some search keyword');
      await dialog.accept();
    });

    await page.locator('button.search-box-button').click();
  });

  test('PRODUCT TC04 Search product with uppercase letters', async ({ page }) => {
    await searchProduct(page, 'COMPUTER');
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

  test('PRODUCT TC05 Search product with lowercase letters', async ({ page }) => {
    await searchProduct(page, 'computer');
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

  test('PRODUCT TC06 Search product with partial keyword', async ({ page }) => {
    await searchProduct(page, 'comp');
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

  test('PRODUCT TC07 Search apple product', async ({ page }) => {
    await searchProduct(page, 'apple');
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

  test('PRODUCT TC08 Search book product', async ({ page }) => {
    await searchProduct(page, 'book');
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

  test('PRODUCT TC09 Verify search page title', async ({ page }) => {
    await searchProduct(page, 'computer');
    await expect(page.locator('h1')).toContainText('Search');
  });

  test('PRODUCT TC10 Verify search keyword remains in input', async ({ page }) => {
    await searchProduct(page, 'computer');
    await expect(page.locator('#q')).toHaveValue('computer');
  });

  test('PRODUCT TC11 Open first product from search result', async ({ page }) => {
    await searchProduct(page, 'computer');
    await page.locator('.product-title a').first().click();
    await checkCloudflare(page);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('PRODUCT TC12 Verify product price visible in search result', async ({ page }) => {
    await searchProduct(page, 'computer');
    await expect(page.locator('.prices').first()).toBeVisible();
  });

  test('PRODUCT TC13 Verify product image visible in search result', async ({ page }) => {
    await searchProduct(page, 'computer');
    await expect(page.locator('.picture img').first()).toBeVisible();
  });

  test('PRODUCT TC14 Verify product name visible in search result', async ({ page }) => {
    await searchProduct(page, 'computer');
    await expect(page.locator('.product-title').first()).toBeVisible();
  });

  test('PRODUCT TC15 Change sorting option', async ({ page }) => {
    await searchProduct(page, 'computer');
    await page.locator('#products-orderby').selectOption({ index: 1 });
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

  test('PRODUCT TC16 Change display per page option', async ({ page }) => {
    await searchProduct(page, 'computer');
    await page.locator('#products-pagesize').selectOption({ index: 1 });
    await expect(page.locator('.product-item').first()).toBeVisible();
  });

test('PRODUCT TC17 Verify search result product list view is visible', async ({ page }) => {
  await searchProduct(page, 'computer');

  await expect(page.locator('.product-grid, .product-list')).toBeVisible();
  await expect(page.locator('.product-item').first()).toBeVisible();
});

  test('PRODUCT TC18 Search with special characters', async ({ page }) => {
    await searchProduct(page, '@@@###');
    await expect(page.locator('.no-result')).toContainText('No products were found');
  });

  test('PRODUCT TC19 Search with numeric value', async ({ page }) => {
    await searchProduct(page, '12345');
    await expect(page.locator('.no-result')).toContainText('No products were found');
  });

  test('PRODUCT TC20 Search URL should contain search keyword', async ({ page }) => {
    await searchProduct(page, 'computer');
    await expect(page).toHaveURL(/q=computer/i);
  });
});