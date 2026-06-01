const { test, expect } = require('@playwright/test');

async function checkCloudflare(page) {
  const body = await page.locator('body').innerText().catch(() => '');
  if (body.includes('Performing security verification')) {
    test.skip(true, 'Cloudflare security verification detected');
  }
}

test.describe('nopCommerce Sorting and Filtering Test Cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/books');
    await checkCloudflare(page);
  });

  test('SORT FILTER TC01 Books category page should open', async ({ page }) => {
    await expect(page).toHaveURL(/books/);
    await expect(page.locator('h1')).toContainText(/Books/i);
  });

  test('SORT FILTER TC02 Sort by dropdown should be visible', async ({ page }) => {
    await expect(page.locator('#products-orderby')).toBeVisible();
  });

test('SORT FILTER TC03 Sort by Name A to Z should work', async ({ page }) => {
  await page.locator('#products-orderby').selectOption({
    label: 'Name: A to Z'
  });

  await page.waitForLoadState('networkidle');

  await expect(page.locator('.product-item').first()).toBeVisible();
});

test('SORT FILTER TC04 Sort by Price Low to High should work', async ({ page }) => {
  await page.locator('#products-orderby').selectOption({
    label: 'Price: Low to High'
  });

  await page.waitForLoadState('networkidle');

  await expect(page.locator('.product-item').first()).toBeVisible();
});

  test('SORT FILTER TC05 Display per page dropdown should be visible', async ({ page }) => {
    await expect(page.locator('#products-pagesize')).toBeVisible();
  });

  test('SORT FILTER TC06 Display 3 products per page should work', async ({ page }) => {
    await page.locator('#products-pagesize').selectOption({ label: '3' });
    await expect(page).toHaveURL(/pagesize/);
  });

test('SORT FILTER TC07 Product grid should be visible', async ({ page }) => {
  await expect(page.locator('.product-grid')).toBeVisible();
});

test('SORT FILTER TC08 Product items should be displayed', async ({ page }) => {
  await expect(page.locator('.product-item').first()).toBeVisible();
});
});