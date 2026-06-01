const { test, expect } = require('@playwright/test');

const HOME_URL = 'https://demo.nopcommerce.com/';
const PRODUCT_URL = 'https://demo.nopcommerce.com/build-your-own-computer';

async function openProduct(page) {
  await page.goto(PRODUCT_URL, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toContainText(/Build your own computer/i);
}

test.describe('nopCommerce Product Reviews Test Cases', () => {

test('TC01 User should navigate to product page', async ({ page }) => {

  await page.goto(PRODUCT_URL);

  await expect(page.locator('h1').first())
    .toContainText('Build your own computer');
});

  test('TC02 Product rating should be visible', async ({ page }) => {
    await openProduct(page);
await expect(
  page.locator('.product-review-box').first()
).toBeVisible();  });

  test('TC03 Review count link should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/1 review/i)).toBeVisible();
  });

  test('TC04 Existing reviews heading should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/Existing reviews/i)).toBeVisible();
  });

  test('TC05 Existing review title should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/Some sample review/i)).toBeVisible();
  });

  test('TC06 Existing review text should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/This sample review is for the Build your own computer/i)).toBeVisible();
  });

  test('TC07 Reviewer name and date should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/From: John/i)).toBeVisible();
    await expect(page.getByText(/Date:/i)).toBeVisible();
  });

  test('TC08 Helpful question should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/Was this review helpful/i)).toBeVisible();
  });

  test('TC09 Yes helpful link should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/^Yes$/).first()).toBeVisible();
  });

  test('TC10 No helpful link should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/^No$/).first()).toBeVisible();
  });

  test('TC11 Helpful count should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/\(0\/0\)/)).toBeVisible();
  });

  test('TC12 Guest user cannot write review message should be visible', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByText(/Only registered users can write reviews/i)).toBeVisible();
  });

  test('TC13 Review title field should not be visible for guest user', async ({ page }) => {
    await openProduct(page);
    await expect(page.locator('#AddProductReview_Title')).toHaveCount(0);
  });

  test('TC14 Submit review button should not be visible for guest user', async ({ page }) => {
    await openProduct(page);
    await expect(page.getByRole('button', { name: /Submit review/i })).toHaveCount(0);
  });

  test('TC15 Product page should contain review section content', async ({ page }) => {
    await openProduct(page);
    await expect(page.locator('body')).toContainText(/Existing reviews|Only registered users can write reviews/i);
  });

});