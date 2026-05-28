# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productSearch.spec.js >> nopCommerce Product Search Test Cases >> PRODUCT TC16 Change display per page option
- Location: tests\productSearch.spec.js:95:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#products-pagesize')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - heading "demo.nopcommerce.com" [level=1] [ref=e5]
      - heading "Performing security verification" [level=2] [ref=e6]
      - paragraph [ref=e7]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e11]:
    - generic [ref=e13]:
      - generic [ref=e15]:
        - text: "Ray ID:"
        - code [ref=e16]: a02b70a5a889e862
      - generic [ref=e17]:
        - generic [ref=e18]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e19] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e21] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('nopCommerce Product Search Test Cases', () => {
  4   | 
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await page.goto('https://demo.nopcommerce.com/');
  7   |   });
  8   | 
  9   |   async function searchProduct(page, productName) {
  10  |     await page.locator('#small-searchterms').fill(productName);
  11  |     await page.locator('button.search-box-button').click();
  12  |   }
  13  | 
  14  |   test('PRODUCT TC01 Search existing product', async ({ page }) => {
  15  |     await searchProduct(page, 'computer');
  16  |     await expect(page.locator('.product-item').first()).toBeVisible();
  17  |   });
  18  | 
  19  |   test('PRODUCT TC02 Search non-existing product', async ({ page }) => {
  20  |     await searchProduct(page, 'abcdefghxyz');
  21  |     await expect(page.locator('.no-result')).toContainText('No products were found');
  22  |   });
  23  | 
  24  |   test('PRODUCT TC03 Search with empty input', async ({ page }) => {
  25  |     page.once('dialog', async dialog => {
  26  |       expect(dialog.message()).toContain('Please enter some search keyword');
  27  |       await dialog.accept();
  28  |     });
  29  | 
  30  |     await page.locator('button.search-box-button').click();
  31  |   });
  32  | 
  33  |   test('PRODUCT TC04 Search product with uppercase letters', async ({ page }) => {
  34  |     await searchProduct(page, 'COMPUTER');
  35  |     await expect(page.locator('.product-item').first()).toBeVisible();
  36  |   });
  37  | 
  38  |   test('PRODUCT TC05 Search product with lowercase letters', async ({ page }) => {
  39  |     await searchProduct(page, 'computer');
  40  |     await expect(page.locator('.product-item').first()).toBeVisible();
  41  |   });
  42  | 
  43  |   test('PRODUCT TC06 Search product with partial keyword', async ({ page }) => {
  44  |     await searchProduct(page, 'comp');
  45  |     await expect(page.locator('.product-item').first()).toBeVisible();
  46  |   });
  47  | 
  48  |   test('PRODUCT TC07 Search apple product', async ({ page }) => {
  49  |     await searchProduct(page, 'apple');
  50  |     await expect(page.locator('.product-item').first()).toBeVisible();
  51  |   });
  52  | 
  53  |   test('PRODUCT TC08 Search book product', async ({ page }) => {
  54  |     await searchProduct(page, 'book');
  55  |     await expect(page.locator('.product-item').first()).toBeVisible();
  56  |   });
  57  | 
  58  |   test('PRODUCT TC09 Verify search page title', async ({ page }) => {
  59  |     await searchProduct(page, 'computer');
  60  |     await expect(page.locator('h1')).toContainText('Search');
  61  |   });
  62  | 
  63  |   test('PRODUCT TC10 Verify search keyword remains in input', async ({ page }) => {
  64  |     await searchProduct(page, 'computer');
  65  |     await expect(page.locator('#q')).toHaveValue('computer');
  66  |   });
  67  | 
  68  |   test('PRODUCT TC11 Open first product from search result', async ({ page }) => {
  69  |     await searchProduct(page, 'computer');
  70  |     await page.locator('.product-title a').first().click();
  71  |     await expect(page.locator('h1')).toBeVisible();
  72  |   });
  73  | 
  74  |   test('PRODUCT TC12 Verify product price visible in search result', async ({ page }) => {
  75  |     await searchProduct(page, 'computer');
  76  |     await expect(page.locator('.prices').first()).toBeVisible();
  77  |   });
  78  | 
  79  |   test('PRODUCT TC13 Verify product image visible in search result', async ({ page }) => {
  80  |     await searchProduct(page, 'computer');
  81  |     await expect(page.locator('.picture img').first()).toBeVisible();
  82  |   });
  83  | 
  84  |   test('PRODUCT TC14 Verify product name visible in search result', async ({ page }) => {
  85  |     await searchProduct(page, 'computer');
  86  |     await expect(page.locator('.product-title').first()).toBeVisible();
  87  |   });
  88  | 
  89  |   test('PRODUCT TC15 Change sorting option', async ({ page }) => {
  90  |     await searchProduct(page, 'computer');
  91  |     await page.locator('#products-orderby').selectOption({ index: 1 });
  92  |     await expect(page.locator('.product-item').first()).toBeVisible();
  93  |   });
  94  | 
  95  |   test('PRODUCT TC16 Change display per page option', async ({ page }) => {
  96  |     await searchProduct(page, 'computer');
> 97  |     await page.locator('#products-pagesize').selectOption({ index: 1 });
      |                                              ^ Error: locator.selectOption: Test timeout of 60000ms exceeded.
  98  |     await expect(page.locator('.product-item').first()).toBeVisible();
  99  |   });
  100 | 
  101 |   test('PRODUCT TC17 Change view mode', async ({ page }) => {
  102 |     await searchProduct(page, 'computer');
  103 |     await page.locator('#products-viewmode').selectOption({ index: 1 });
  104 |     await expect(page.locator('.product-item').first()).toBeVisible();
  105 |   });
  106 | 
  107 |   test('PRODUCT TC18 Search with special characters', async ({ page }) => {
  108 |     await searchProduct(page, '@@@###');
  109 |     await expect(page.locator('.no-result')).toContainText('No products were found');
  110 |   });
  111 | 
  112 |   test('PRODUCT TC19 Search with numeric value', async ({ page }) => {
  113 |     await searchProduct(page, '12345');
  114 |     await expect(page.locator('.no-result')).toContainText('No products were found');
  115 |   });
  116 | 
  117 |   test('PRODUCT TC20 Search and verify URL contains search term', async ({ page }) => {
  118 |     await searchProduct(page, 'computer');
  119 |     await expect(page).toHaveURL(/q=computer/);
  120 |   });
  121 | 
  122 | });
```