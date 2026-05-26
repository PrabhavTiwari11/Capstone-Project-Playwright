import { test, expect } from '@playwright/test';

async function openHomePage(page) {
  await page.goto('/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page.locator('.header-logo')).toBeVisible({
    timeout: 30000
  });
}
test.describe('nopCommerce Basic Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    await openHomePage(page);
  });


  test('TC01 Home page should open', async ({ page }) => {
    await expect(page.locator('.header-logo')).toBeVisible();
  });

  test('TC02 Register link should be visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  });

  test('TC03 Login link should be visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  });

  test('TC04 Search box should be visible', async ({ page }) => {
    await expect(page.locator('#small-searchterms')).toBeVisible();
  });

test('TC05 Search laptop product', async ({ page }) => {
  await page.locator('#small-searchterms').fill('laptop');

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/search/);
  await expect(page).toHaveURL(/q=laptop/);
});

test('TC06 Open Computers category', async ({ page }) => {
  await page.goto('/computers');

  await expect(page).toHaveURL(/computers/);
  await expect(page.getByRole('heading', { name: 'Computers' })).toBeVisible();
});

test('TC07 Open Electronics category', async ({ page }) => {
  await page.goto('/electronics');
  await expect(page).toHaveURL(/electronics/);
});

test('TC08 Open Books category', async ({ page }) => {
  await page.goto('/books');
  await expect(page).toHaveURL(/books/);
});



test('TC9 Open Apparel category', async ({ page }) => {
  await page.goto('/apparel-shoes', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page).toHaveURL(/apparel-shoes/);
});

test('TC10 Open Digital downloads category', async ({ page }) => {
  await page.goto('/digital-downloads', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page).toHaveURL(/digital-downloads/);
});


test('TC11 Open Jewelry category', async ({ page }) => {

  await page.goto('/jewelry', {
   waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(5000);

  await expect(page).toHaveURL(/jewelry/);

});

test('TC12 Open Gift Cards category', async ({ page }) => {

  await page.goto('/gift-cards', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(5000);

  await expect(page).toHaveURL(/gift-cards/);

});
test('TC13 Open Shopping cart page', async ({ page }) => {

  await page.goto('/cart', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveURL(/cart/);

});

test('TC14 Open Wishlist page', async ({ page }) => {

  await page.goto('/wishlist', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveURL(/wishlist/);

});


test('TC15 Contact us page should open', async ({ page }) => {
  await page.goto('/contactus', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page).toHaveURL(/contactus/);
});
test('TC16 Newsletter subscribe with invalid email', async ({ page }) => {

  await page.locator('#newsletter-email').fill('wrongemail');

  await page.locator('#newsletter-subscribe-button').click();

  await expect(page.locator('#newsletter-email')).toHaveValue('wrongemail');

});

});