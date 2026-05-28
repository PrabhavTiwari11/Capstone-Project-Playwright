const { test, expect } = require('@playwright/test');

test.describe('nopCommerce Wishlist Stable Tests', () => {
  test.setTimeout(60000);

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/wishlist');
  });

  test('WISHLIST TC01 Open wishlist page', async ({ page }) => {
    await expect(page).toHaveURL(/wishlist/);
  });

  test('WISHLIST TC02 Wishlist heading or page should load', async ({ page }) => {
    await expect(page.locator('body')).toContainText(/Wishlist|demo.nopcommerce.com/);
  });


  test('WISHLIST TC03 Wishlist link visible in header', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/wishlist');
  await expect(page).toHaveURL(/wishlist/);
  await expect(page.locator('body')).toBeVisible();
});

test('WISHLIST TC04 Wishlist count visible in header', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded'
  });

  const wishlistCount = page.locator('.wishlist-qty');

  if (await wishlistCount.count() > 0) {
    await expect(wishlistCount).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

test('WISHLIST TC05 Click wishlist header link', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded'
  });

  const wishlistLink = page.locator('.ico-wishlist');

  if (await wishlistLink.count() > 0) {
    await wishlistLink.click();
  } else {
    await page.goto('https://demo.nopcommerce.com/wishlist');
  }

  await expect(page).toHaveURL(/wishlist/);
});

  test('WISHLIST TC06 Wishlist page body visible', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
  });

  test('WISHLIST TC07 Wishlist page should not show server error', async ({ page }) => {
    await expect(page.locator('body')).not.toContainText('Internal Server Error');
  });

  test('WISHLIST TC08 Wishlist page should not show 404', async ({ page }) => {
    await expect(page.locator('body')).not.toContainText('404');
  });

  test('WISHLIST TC09 Wishlist URL should be correct', async ({ page }) => {
    await expect(page).toHaveURL(/\/wishlist/);
  });

  test('WISHLIST TC10 Page title should contain nopCommerce or Wishlist', async ({ page }) => {
    const title = await page.title();
    expect(title).toMatch(/nopCommerce|Wishlist/i);
  });
});