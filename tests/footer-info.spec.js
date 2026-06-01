const { test, expect } = require('@playwright/test');

async function checkCloudflare(page) {
  const body = await page.locator('body').innerText().catch(() => '');
  if (body.includes('Performing security verification')) {
    test.skip(true, 'Cloudflare security verification detected');
  }
}

test.describe('nopCommerce Footer Information Test Cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await checkCloudflare(page);
  });

  test('FOOTER TC01 Footer should be visible', async ({ page }) => {
    await expect(page.locator('.footer')).toBeVisible();
  });

  test('FOOTER TC02 Sitemap page should open', async ({ page }) => {
    await page.getByRole('link', { name: 'Sitemap' }).click();
    await expect(page).toHaveURL(/sitemap/);
  });

  test('FOOTER TC03 Shipping & returns page should open', async ({ page }) => {
    await page.getByRole('link', { name: /Shipping & returns/i }).click();
    await expect(page.locator('h1')).toBeVisible();
  });

  test('FOOTER TC04 Privacy notice page should open', async ({ page }) => {
    await page.getByRole('link', { name: /Privacy notice/i }).click();
    await expect(page.locator('h1')).toBeVisible();
  });

  test('FOOTER TC05 Conditions of use page should open', async ({ page }) => {
    await page.getByRole('link', { name: /Conditions of Use/i }).click();
    await expect(page.locator('h1')).toBeVisible();
  });

  test('FOOTER TC06 About us page should open', async ({ page }) => {
    await page.getByRole('link', { name: /About us/i }).click();
    await expect(page.locator('h1')).toBeVisible();
  });

  test('FOOTER TC07 Contact us page should open', async ({ page }) => {
    await page.getByRole('link', { name: /Contact us/i }).click();
    await expect(page).toHaveURL(/contactus/);
  });


  test('FOOTER TC08 Search link/page should be accessible from footer/header', async ({ page }) => {
    await page.goto('/search');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('FOOTER TC09 News page should open', async ({ page }) => {
    await page.goto('/news');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('FOOTER TC10 Blog page should open', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('h1')).toBeVisible();
  });
});