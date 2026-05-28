# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:25:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Shopping cart' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('heading', { name: 'Shopping cart' })

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a02b3161d94265b8
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
  6   |   await page.goto('https://demo.nopcommerce.com/build-your-own-computer');
  7   | 
  8   |   await page.locator('#product_attribute_1').selectOption({ index: 1 });
  9   |   await page.locator('#product_attribute_2').selectOption({ index: 1 });
  10  |   await page.locator('#product_attribute_3_6').check();
  11  | 
  12  |   await page.locator('#add-to-cart-button-1').click();
  13  |   await page.waitForTimeout(2000);
  14  | 
  15  |   await page.locator('.ico-cart').click();
> 16  |   await expect(page.getByRole('heading', { name: 'Shopping cart' })).toBeVisible();
      |                                                                      ^ Error: expect(locator).toBeVisible() failed
  17  | 
  18  | }
  19  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  20  |     await page.goto('/cart');
  21  | 
  22  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  23  |   });
  24  | 
  25  | test.only('CART TC02 Add product to cart', async ({ page }) => {
  26  | 
  27  |   await addProductToCart(page);
  28  | 
  29  |   await page.pause();
  30  | 
  31  | });
  32  | 
  33  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  34  |     await addProductToCart(page);
  35  | 
  36  |     await expect(page.locator('.product-name').first()).toBeVisible();
  37  |   });
  38  | 
  39  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  40  |     await addProductToCart(page);
  41  | 
  42  |     await expect(page.locator('.product-unit-price').first()).toBeVisible();
  43  |   });
  44  | 
  45  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  46  |     await addProductToCart(page);
  47  | 
  48  |     await expect(page.locator('.qty-input').first()).toBeVisible();
  49  |   });
  50  | 
  51  | //   test('CART TC06 Update product quantity', async ({ page }) => {
  52  | //     await addProductToCart(page);
  53  | 
  54  | //     await page.locator('.qty-input').first().fill('3');
  55  | //     await page.locator('#updatecart').click();
  56  | 
  57  | //     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  58  | //   });
  59  | 
  60  | //   test('CART TC07 Remove product using remove button', async ({ page }) => {
  61  | //     await addProductToCart(page);
  62  | 
  63  | //     await page.locator('.remove-btn').first().click();
  64  | 
  65  | //     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  66  | //   });
  67  | 
  68  | //   test('CART TC08 Cart total should be visible', async ({ page }) => {
  69  | //     await addProductToCart(page);
  70  | 
  71  | //     await expect(page.locator('.cart-total')).toBeVisible();
  72  | //   });
  73  | 
  74  | //   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  75  | //     await addProductToCart(page);
  76  | 
  77  | //     await expect(page.locator('#discountcouponcode')).toBeVisible();
  78  | //   });
  79  | 
  80  | //   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  81  | //     await addProductToCart(page);
  82  | 
  83  | //     await page.locator('#discountcouponcode').fill('INVALID123');
  84  | //     await page.locator('#applydiscountcouponcode').click();
  85  | 
  86  | //     await expect(page.locator('.message-failure')).toBeVisible();
  87  | //   });
  88  | 
  89  | //   test('CART TC11 Apply empty discount code', async ({ page }) => {
  90  | //     await addProductToCart(page);
  91  | 
  92  | //     await page.locator('#applydiscountcouponcode').click();
  93  | 
  94  | //     await expect(page.locator('.message-failure')).toBeVisible();
  95  | //   });
  96  | 
  97  | //   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  98  | //     await addProductToCart(page);
  99  | 
  100 | //     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  101 | //   });
  102 | 
  103 | //   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  104 | //     await addProductToCart(page);
  105 | 
  106 | //     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  107 | //     await page.locator('#applygiftcardcouponcode').click();
  108 | 
  109 | //     await expect(page.locator('.message-failure')).toBeVisible();
  110 | //   });
  111 | 
  112 | //   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  113 | //     await addProductToCart(page);
  114 | 
  115 | //     await expect(page.locator('#termsofservice')).toBeVisible();
  116 | //   });
```