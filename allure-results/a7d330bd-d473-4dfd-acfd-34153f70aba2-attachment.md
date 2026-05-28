# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: napCommerce.spec.js >> nopCommerce Basic Test Cases >> TC06 Open Computers category
- Location: tests\napCommerce.spec.js:45:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "Computers"
Received string:    "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a024b3e4bae3f47fPerformance and Security by CloudflarePrivacy"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('body')
    13 × locator resolved to <body>…</body>
       - unexpected value ""
    20 × locator resolved to <body>…</body>
       - unexpected value "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a024b3e4bae3f47fPerformance and Security by CloudflarePrivacy"

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a024b3e4bae3f47f
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
  46  |   await page.goto('/computers', {
  47  |     waitUntil: 'domcontentloaded',
  48  |     timeout: 60000
  49  |   });
  50  | 
  51  |   await expect(page).toHaveURL(/computers/);
> 52  |   await expect(page.locator('body')).toContainText('Computers');
      |                                      ^ Error: expect(locator).toContainText(expected) failed
  53  | });
  54  | 
  55  | test('TC07 Open Electronics category', async ({ page }) => {
  56  |   await page.goto('/electronics');
  57  |   await expect(page).toHaveURL(/electronics/);
  58  | });
  59  | 
  60  | test('TC08 Open Books category', async ({ page }) => {
  61  |   await page.goto('/books');
  62  |   await expect(page).toHaveURL(/books/);
  63  | });
  64  | 
  65  | 
  66  | 
  67  | test('TC9 Open Apparel category', async ({ page }) => {
  68  |   await page.goto('/apparel-shoes', {
  69  |     waitUntil: 'domcontentloaded',
  70  |     timeout: 60000
  71  |   });
  72  | 
  73  |   await expect(page).toHaveURL(/apparel-shoes/);
  74  | });
  75  | 
  76  | test('TC10 Open Digital downloads category', async ({ page }) => {
  77  |   await page.goto('/digital-downloads', {
  78  |     waitUntil: 'domcontentloaded',
  79  |     timeout: 60000
  80  |   });
  81  | 
  82  |   await expect(page).toHaveURL(/digital-downloads/);
  83  | });
  84  | 
  85  | 
  86  | test('TC11 Open Jewelry category', async ({ page }) => {
  87  | 
  88  |   await page.goto('/jewelry', {
  89  |    waitUntil: 'domcontentloaded'
  90  |   });
  91  | 
  92  |   await page.waitForTimeout(5000);
  93  | 
  94  |   await expect(page).toHaveURL(/jewelry/);
  95  | 
  96  | });
  97  | 
  98  | test('TC12 Open Gift Cards category', async ({ page }) => {
  99  | 
  100 |   await page.goto('/gift-cards', {
  101 |     waitUntil: 'domcontentloaded'
  102 |   });
  103 | 
  104 |   await page.waitForTimeout(5000);
  105 | 
  106 |   await expect(page).toHaveURL(/gift-cards/);
  107 | 
  108 | });
  109 | test('TC13 Open Shopping cart page', async ({ page }) => {
  110 | 
  111 |   await page.goto('/cart', {
  112 |     waitUntil: 'domcontentloaded'
  113 |   });
  114 | 
  115 |   await expect(page).toHaveURL(/cart/);
  116 | 
  117 | });
  118 | 
  119 | test('TC14 Open Wishlist page', async ({ page }) => {
  120 | 
  121 |   await page.goto('/wishlist', {
  122 |     waitUntil: 'domcontentloaded'
  123 |   });
  124 | 
  125 |   await expect(page).toHaveURL(/wishlist/);
  126 | 
  127 | });
  128 | 
  129 | 
  130 | test('TC15 Contact us page should open', async ({ page }) => {
  131 |   await page.goto('/contactus', {
  132 |     waitUntil: 'domcontentloaded',
  133 |     timeout: 60000
  134 |   });
  135 | 
  136 |   await expect(page).toHaveURL(/contactus/);
  137 | });
  138 | test('TC16 Newsletter subscribe with invalid email', async ({ page }) => {
  139 | 
  140 |   await page.locator('#newsletter-email').fill('wrongemail');
  141 | 
  142 |   await page.locator('#newsletter-subscribe-button').click();
  143 | 
  144 |   await expect(page.locator('#newsletter-email')).toHaveValue('wrongemail');
  145 | 
  146 | });
  147 | 
  148 | });
```