# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:30:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.page-title')
Expected substring: "Shopping cart"
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('.page-title')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a02ade98ba98d380
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('nopCommerce Shopping Cart Test Cases', () => {
  4   | 
  5   |   async function addProductToCart(page) {
  6   |   await page.goto('/build-your-own-computer');
  7   | 
  8   |   await page.locator('#product_attribute_1').selectOption('1');
  9   |   await page.locator('#product_attribute_2').selectOption('3');
  10  | 
  11  |   await page.locator('#product_attribute_3_6').check();
  12  |   await page.locator('#product_attribute_4_9').check();
  13  | 
  14  |   await page.locator('#add-to-cart-button-1').click();
  15  | 
  16  |   await page.waitForTimeout(2000);
  17  | 
  18  |   await page.goto('/cart');
  19  | 
> 20  |   await expect(page.locator('.page-title')).toContainText('Shopping cart');
      |                                             ^ Error: expect(locator).toContainText(expected) failed
  21  |   await expect(page.locator('.cart')).toBeVisible();
  22  |   await expect(page.locator('.product-name').first()).toBeVisible();
  23  | }
  24  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  25  |     await page.goto('/cart');
  26  | 
  27  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  28  |   });
  29  | 
  30  |   test('CART TC02 Add product to cart', async ({ page }) => {
  31  |     await addProductToCart(page);
  32  | 
  33  |     await expect(page.locator('.product-name').first()).toBeVisible();
  34  |   });
  35  | 
  36  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  37  |     await addProductToCart(page);
  38  | 
  39  |     await expect(page.locator('.product-name').first()).toBeVisible();
  40  |   });
  41  | 
  42  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  43  |     await addProductToCart(page);
  44  | 
  45  |     await expect(page.locator('.product-unit-price').first()).toBeVisible();
  46  |   });
  47  | 
  48  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  49  |     await addProductToCart(page);
  50  | 
  51  |     await expect(page.locator('.qty-input').first()).toBeVisible();
  52  |   });
  53  | 
  54  |   test('CART TC06 Update product quantity', async ({ page }) => {
  55  |     await addProductToCart(page);
  56  | 
  57  |     await page.locator('.qty-input').first().fill('3');
  58  |     await page.locator('#updatecart').click();
  59  | 
  60  |     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  61  |   });
  62  | 
  63  |   test('CART TC07 Remove product using remove button', async ({ page }) => {
  64  |     await addProductToCart(page);
  65  | 
  66  |     await page.locator('.remove-btn').first().click();
  67  | 
  68  |     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  69  |   });
  70  | 
  71  |   test('CART TC08 Cart total should be visible', async ({ page }) => {
  72  |     await addProductToCart(page);
  73  | 
  74  |     await expect(page.locator('.cart-total')).toBeVisible();
  75  |   });
  76  | 
  77  |   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  78  |     await addProductToCart(page);
  79  | 
  80  |     await expect(page.locator('#discountcouponcode')).toBeVisible();
  81  |   });
  82  | 
  83  |   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  84  |     await addProductToCart(page);
  85  | 
  86  |     await page.locator('#discountcouponcode').fill('INVALID123');
  87  |     await page.locator('#applydiscountcouponcode').click();
  88  | 
  89  |     await expect(page.locator('.message-failure')).toBeVisible();
  90  |   });
  91  | 
  92  |   test('CART TC11 Apply empty discount code', async ({ page }) => {
  93  |     await addProductToCart(page);
  94  | 
  95  |     await page.locator('#applydiscountcouponcode').click();
  96  | 
  97  |     await expect(page.locator('.message-failure')).toBeVisible();
  98  |   });
  99  | 
  100 |   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  101 |     await addProductToCart(page);
  102 | 
  103 |     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  104 |   });
  105 | 
  106 |   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  107 |     await addProductToCart(page);
  108 | 
  109 |     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  110 |     await page.locator('#applygiftcardcouponcode').click();
  111 | 
  112 |     await expect(page.locator('.message-failure')).toBeVisible();
  113 |   });
  114 | 
  115 |   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  116 |     await addProductToCart(page);
  117 | 
  118 |     await expect(page.locator('#termsofservice')).toBeVisible();
  119 |   });
  120 | 
```