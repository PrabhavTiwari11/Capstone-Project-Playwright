# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: napCommerce.spec.js >> nopCommerce Basic Test Cases >> TC06 Open Computers category
- Location: tests\napCommerce.spec.js:45:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Computers' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('heading', { name: 'Computers' })

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a01c77c1bcf3a025
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | async function openHomePage(page) {
  4   |   await page.goto('/', {
  5   |     waitUntil: 'domcontentloaded',
  6   |     timeout: 60000
  7   |   });
  8   | 
  9   |   await expect(page.locator('.header-logo')).toBeVisible({
  10  |     timeout: 30000
  11  |   });
  12  | }
  13  | test.describe('nopCommerce Basic Test Cases', () => {
  14  | 
  15  |   test.beforeEach(async ({ page }) => {
  16  |     await openHomePage(page);
  17  |   });
  18  | 
  19  | 
  20  |   test('TC01 Home page should open', async ({ page }) => {
  21  |     await expect(page.locator('.header-logo')).toBeVisible();
  22  |   });
  23  | 
  24  |   test('TC02 Register link should be visible', async ({ page }) => {
  25  |     await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  26  |   });
  27  | 
  28  |   test('TC03 Login link should be visible', async ({ page }) => {
  29  |     await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  30  |   });
  31  | 
  32  |   test('TC04 Search box should be visible', async ({ page }) => {
  33  |     await expect(page.locator('#small-searchterms')).toBeVisible();
  34  |   });
  35  | 
  36  | test('TC05 Search laptop product', async ({ page }) => {
  37  |   await page.locator('#small-searchterms').fill('laptop');
  38  | 
  39  |   await page.locator('button[type="submit"]').click();
  40  | 
  41  |   await expect(page).toHaveURL(/search/);
  42  |   await expect(page).toHaveURL(/q=laptop/);
  43  | });
  44  | 
  45  | test('TC06 Open Computers category', async ({ page }) => {
  46  |   await page.goto('/computers');
  47  | 
  48  |   await expect(page).toHaveURL(/computers/);
> 49  |   await expect(page.getByRole('heading', { name: 'Computers' })).toBeVisible();
      |                                                                  ^ Error: expect(locator).toBeVisible() failed
  50  | });
  51  | 
  52  | test('TC07 Open Electronics category', async ({ page }) => {
  53  |   await page.goto('/electronics');
  54  |   await expect(page).toHaveURL(/electronics/);
  55  | });
  56  | 
  57  | test('TC08 Open Books category', async ({ page }) => {
  58  |   await page.goto('/books');
  59  |   await expect(page).toHaveURL(/books/);
  60  | });
  61  | 
  62  | 
  63  | 
  64  | test('TC9 Open Apparel category', async ({ page }) => {
  65  |   await page.goto('/apparel-shoes', {
  66  |     waitUntil: 'domcontentloaded',
  67  |     timeout: 60000
  68  |   });
  69  | 
  70  |   await expect(page).toHaveURL(/apparel-shoes/);
  71  | });
  72  | 
  73  | test('TC10 Open Digital downloads category', async ({ page }) => {
  74  |   await page.goto('/digital-downloads', {
  75  |     waitUntil: 'domcontentloaded',
  76  |     timeout: 60000
  77  |   });
  78  | 
  79  |   await expect(page).toHaveURL(/digital-downloads/);
  80  | });
  81  | 
  82  | 
  83  | test('TC11 Open Jewelry category', async ({ page }) => {
  84  | 
  85  |   await page.goto('/jewelry', {
  86  |    waitUntil: 'domcontentloaded'
  87  |   });
  88  | 
  89  |   await page.waitForTimeout(5000);
  90  | 
  91  |   await expect(page).toHaveURL(/jewelry/);
  92  | 
  93  | });
  94  | 
  95  | test('TC12 Open Gift Cards category', async ({ page }) => {
  96  | 
  97  |   await page.goto('/gift-cards', {
  98  |     waitUntil: 'domcontentloaded'
  99  |   });
  100 | 
  101 |   await page.waitForTimeout(5000);
  102 | 
  103 |   await expect(page).toHaveURL(/gift-cards/);
  104 | 
  105 | });
  106 | test('TC13 Open Shopping cart page', async ({ page }) => {
  107 | 
  108 |   await page.goto('/cart', {
  109 |     waitUntil: 'domcontentloaded'
  110 |   });
  111 | 
  112 |   await expect(page).toHaveURL(/cart/);
  113 | 
  114 | });
  115 | 
  116 | test('TC14 Open Wishlist page', async ({ page }) => {
  117 | 
  118 |   await page.goto('/wishlist', {
  119 |     waitUntil: 'domcontentloaded'
  120 |   });
  121 | 
  122 |   await expect(page).toHaveURL(/wishlist/);
  123 | 
  124 | });
  125 | 
  126 | 
  127 | test('TC15 Contact us page should open', async ({ page }) => {
  128 |   await page.goto('/contactus', {
  129 |     waitUntil: 'domcontentloaded',
  130 |     timeout: 60000
  131 |   });
  132 | 
  133 |   await expect(page).toHaveURL(/contactus/);
  134 | });
  135 | test('TC16 Newsletter subscribe with invalid email', async ({ page }) => {
  136 | 
  137 |   await page.locator('#newsletter-email').fill('wrongemail');
  138 | 
  139 |   await page.locator('#newsletter-subscribe-button').click();
  140 | 
  141 |   await expect(page.locator('#newsletter-email')).toHaveValue('wrongemail');
  142 | 
  143 | });
  144 | 
  145 | });
```