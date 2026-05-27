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

Locator: locator('h1')
Expected substring: "Computers"
Received string:    "demo.nopcommerce.com"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('h1')
    33 × locator resolved to <h1>demo.nopcommerce.com</h1>
       - unexpected value "demo.nopcommerce.com"

```

```yaml
- heading "demo.nopcommerce.com" [level=1]
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
> 47  |   await expect(page.locator('h1')).toContainText('Computers');
      |                                    ^ Error: expect(locator).toContainText(expected) failed
  48  | });
  49  | 
  50  | test('TC07 Open Electronics category', async ({ page }) => {
  51  |   await page.goto('/electronics');
  52  |   await expect(page).toHaveURL(/electronics/);
  53  | });
  54  | 
  55  | test('TC08 Open Books category', async ({ page }) => {
  56  |   await page.goto('/books');
  57  |   await expect(page).toHaveURL(/books/);
  58  | });
  59  | 
  60  | 
  61  | 
  62  | test('TC9 Open Apparel category', async ({ page }) => {
  63  |   await page.goto('/apparel-shoes', {
  64  |     waitUntil: 'domcontentloaded',
  65  |     timeout: 60000
  66  |   });
  67  | 
  68  |   await expect(page).toHaveURL(/apparel-shoes/);
  69  | });
  70  | 
  71  | test('TC10 Open Digital downloads category', async ({ page }) => {
  72  |   await page.goto('/digital-downloads', {
  73  |     waitUntil: 'domcontentloaded',
  74  |     timeout: 60000
  75  |   });
  76  | 
  77  |   await expect(page).toHaveURL(/digital-downloads/);
  78  | });
  79  | 
  80  | 
  81  | test('TC11 Open Jewelry category', async ({ page }) => {
  82  | 
  83  |   await page.goto('/jewelry', {
  84  |    waitUntil: 'domcontentloaded'
  85  |   });
  86  | 
  87  |   await page.waitForTimeout(5000);
  88  | 
  89  |   await expect(page).toHaveURL(/jewelry/);
  90  | 
  91  | });
  92  | 
  93  | test('TC12 Open Gift Cards category', async ({ page }) => {
  94  | 
  95  |   await page.goto('/gift-cards', {
  96  |     waitUntil: 'domcontentloaded'
  97  |   });
  98  | 
  99  |   await page.waitForTimeout(5000);
  100 | 
  101 |   await expect(page).toHaveURL(/gift-cards/);
  102 | 
  103 | });
  104 | test('TC13 Open Shopping cart page', async ({ page }) => {
  105 | 
  106 |   await page.goto('/cart', {
  107 |     waitUntil: 'domcontentloaded'
  108 |   });
  109 | 
  110 |   await expect(page).toHaveURL(/cart/);
  111 | 
  112 | });
  113 | 
  114 | test('TC14 Open Wishlist page', async ({ page }) => {
  115 | 
  116 |   await page.goto('/wishlist', {
  117 |     waitUntil: 'domcontentloaded'
  118 |   });
  119 | 
  120 |   await expect(page).toHaveURL(/wishlist/);
  121 | 
  122 | });
  123 | 
  124 | 
  125 | test('TC15 Contact us page should open', async ({ page }) => {
  126 |   await page.goto('/contactus', {
  127 |     waitUntil: 'domcontentloaded',
  128 |     timeout: 60000
  129 |   });
  130 | 
  131 |   await expect(page).toHaveURL(/contactus/);
  132 | });
  133 | test('TC16 Newsletter subscribe with invalid email', async ({ page }) => {
  134 | 
  135 |   await page.locator('#newsletter-email').fill('wrongemail');
  136 | 
  137 |   await page.locator('#newsletter-subscribe-button').click();
  138 | 
  139 |   await expect(page.locator('#newsletter-email')).toHaveValue('wrongemail');
  140 | 
  141 | });
  142 | 
  143 | });
```