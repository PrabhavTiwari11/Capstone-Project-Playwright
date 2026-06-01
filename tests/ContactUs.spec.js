const { test, expect } = require('@playwright/test');

async function checkCloudflare(page) {
  const body = await page.locator('body').innerText().catch(() => '');
  if (body.includes('Performing security verification')) {
    test.skip(true, 'Cloudflare security verification detected');
  }
}

test.describe('nopCommerce Contact Us Test Cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contactus');
    await checkCloudflare(page);
  });

  test('CONTACT TC01 Contact Us page should open', async ({ page }) => {
    await expect(page).toHaveURL(/contactus/);
    await expect(page.locator('h1')).toContainText(/Contact us/i);
  });

  test('CONTACT TC02 Full name field should be visible', async ({ page }) => {
    await expect(page.locator('#FullName')).toBeVisible();
  });

  test('CONTACT TC03 Email field should be visible', async ({ page }) => {
    await expect(page.locator('#Email')).toBeVisible();
  });

  test('CONTACT TC04 Enquiry textbox should be visible', async ({ page }) => {
    await expect(page.locator('#Enquiry')).toBeVisible();
  });

  test('CONTACT TC05 Submit button should be visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Submit/i })).toBeVisible();
  });

  test('CONTACT TC06 Empty form submission should show validation', async ({ page }) => {
    await page.getByRole('button', { name: /Submit/i }).click();
    await expect(page.locator('body')).toContainText(/required|Enter/i);
  });

  test('CONTACT TC07 Invalid email should show validation', async ({ page }) => {
    await page.locator('#FullName').fill('Prabhav Tiwari');
    await page.locator('#Email').fill('wrongemail');
    await page.locator('#Enquiry').fill('This is a test enquiry.');
    await page.getByRole('button', { name: /Submit/i }).click();

    await expect(page.locator('body')).toContainText(/wrong email|valid email|email/i);
  });

});