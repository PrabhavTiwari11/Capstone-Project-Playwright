# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:31:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "Shopping cart"
Received string:    "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a02aed37497bdcccPerformance and Security by CloudflarePrivacy"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('body')
    34 × locator resolved to <body>…</body>
       - unexpected value "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a02aed37497bdcccPerformance and Security by CloudflarePrivacy"

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a02aed37497bdccc
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
  5   | async function addProductToCart(page) {
  6   | 
  7   |   await page.goto('https://demo.nopcommerce.com/build-your-own-computer');
  8   | 
  9   |   await page.locator('#product_attribute_1').selectOption({ index: 1 });
  10  |   await page.locator('#product_attribute_2').selectOption({ index: 1 });
  11  | 
  12  |   await page.locator('#product_attribute_3_6').check();
  13  | 
  14  |   await page.locator('#add-to-cart-button-1').click();
  15  | 
  16  |   await page.waitForTimeout(3000);
  17  | 
  18  |   await page.goto('https://demo.nopcommerce.com/cart');
  19  | 
  20  |   await expect(page).toHaveURL(/cart/);
  21  | 
> 22  |   await expect(page.locator('body')).toContainText('Shopping cart');
      |                                      ^ Error: expect(locator).toContainText(expected) failed
  23  | 
  24  | }
  25  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  26  |     await page.goto('/cart');
  27  | 
  28  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  29  |   });
  30  | 
  31  | test.only('CART TC02 Add product to cart', async ({ page }) => {
  32  | 
  33  |   await addProductToCart(page);
  34  | 
  35  |   await page.pause();
  36  | 
  37  | });
  38  | 
  39  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  40  |     await addProductToCart(page);
  41  | 
  42  |     await expect(page.locator('.product-name').first()).toBeVisible();
  43  |   });
  44  | 
  45  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  46  |     await addProductToCart(page);
  47  | 
  48  |     await expect(page.locator('.product-unit-price').first()).toBeVisible();
  49  |   });
  50  | 
  51  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  52  |     await addProductToCart(page);
  53  | 
  54  |     await expect(page.locator('.qty-input').first()).toBeVisible();
  55  |   });
  56  | 
  57  | //   test('CART TC06 Update product quantity', async ({ page }) => {
  58  | //     await addProductToCart(page);
  59  | 
  60  | //     await page.locator('.qty-input').first().fill('3');
  61  | //     await page.locator('#updatecart').click();
  62  | 
  63  | //     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  64  | //   });
  65  | 
  66  | //   test('CART TC07 Remove product using remove button', async ({ page }) => {
  67  | //     await addProductToCart(page);
  68  | 
  69  | //     await page.locator('.remove-btn').first().click();
  70  | 
  71  | //     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  72  | //   });
  73  | 
  74  | //   test('CART TC08 Cart total should be visible', async ({ page }) => {
  75  | //     await addProductToCart(page);
  76  | 
  77  | //     await expect(page.locator('.cart-total')).toBeVisible();
  78  | //   });
  79  | 
  80  | //   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  81  | //     await addProductToCart(page);
  82  | 
  83  | //     await expect(page.locator('#discountcouponcode')).toBeVisible();
  84  | //   });
  85  | 
  86  | //   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  87  | //     await addProductToCart(page);
  88  | 
  89  | //     await page.locator('#discountcouponcode').fill('INVALID123');
  90  | //     await page.locator('#applydiscountcouponcode').click();
  91  | 
  92  | //     await expect(page.locator('.message-failure')).toBeVisible();
  93  | //   });
  94  | 
  95  | //   test('CART TC11 Apply empty discount code', async ({ page }) => {
  96  | //     await addProductToCart(page);
  97  | 
  98  | //     await page.locator('#applydiscountcouponcode').click();
  99  | 
  100 | //     await expect(page.locator('.message-failure')).toBeVisible();
  101 | //   });
  102 | 
  103 | //   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  104 | //     await addProductToCart(page);
  105 | 
  106 | //     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  107 | //   });
  108 | 
  109 | //   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  110 | //     await addProductToCart(page);
  111 | 
  112 | //     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  113 | //     await page.locator('#applygiftcardcouponcode').click();
  114 | 
  115 | //     await expect(page.locator('.message-failure')).toBeVisible();
  116 | //   });
  117 | 
  118 | //   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  119 | //     await addProductToCart(page);
  120 | 
  121 | //     await expect(page.locator('#termsofservice')).toBeVisible();
  122 | //   });
```