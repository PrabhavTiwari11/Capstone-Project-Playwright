# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:37:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Shopping cart"
Received string:    "demo.nopcommerce.com"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('h1')
    34 × locator resolved to <h1>demo.nopcommerce.com</h1>
       - unexpected value "demo.nopcommerce.com"

```

```yaml
- heading "demo.nopcommerce.com" [level=1]
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
  11  |   await page.locator('#product_attribute_3_6').check();
  12  | 
  13  |   await page.locator('#add-to-cart-button-1').click();
  14  | 
  15  |   await page.waitForTimeout(3000);
  16  | 
  17  |   await page.goto('https://demo.nopcommerce.com/cart');
  18  | 
  19  |   // Detect Cloudflare
  20  |   const cloudflareHeading = page.getByText('Performing security verification');
  21  | 
  22  |   if (await cloudflareHeading.isVisible()) {
  23  |     console.log('Cloudflare verification detected');
  24  |     await page.waitForTimeout(15000);
  25  |   }
  26  | 
  27  |   // Final assertion
> 28  |   await expect(page.locator('h1')).toContainText('Shopping cart');
      |                                    ^ Error: expect(locator).toContainText(expected) failed
  29  | 
  30  | }
  31  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  32  |     await page.goto('/cart');
  33  | 
  34  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  35  |   });
  36  | 
  37  | test.only('CART TC02 Add product to cart', async ({ page }) => {
  38  | 
  39  |   await addProductToCart(page);
  40  | 
  41  |   await page.pause();
  42  | 
  43  | });
  44  | 
  45  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  46  |     await addProductToCart(page);
  47  | 
  48  |     await expect(page.locator('.product-name').first()).toBeVisible();
  49  |   });
  50  | 
  51  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  52  |     await addProductToCart(page);
  53  | 
  54  |     await expect(page.locator('.product-unit-price').first()).toBeVisible();
  55  |   });
  56  | 
  57  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  58  |     await addProductToCart(page);
  59  | 
  60  |     await expect(page.locator('.qty-input').first()).toBeVisible();
  61  |   });
  62  | 
  63  | //   test('CART TC06 Update product quantity', async ({ page }) => {
  64  | //     await addProductToCart(page);
  65  | 
  66  | //     await page.locator('.qty-input').first().fill('3');
  67  | //     await page.locator('#updatecart').click();
  68  | 
  69  | //     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  70  | //   });
  71  | 
  72  | //   test('CART TC07 Remove product using remove button', async ({ page }) => {
  73  | //     await addProductToCart(page);
  74  | 
  75  | //     await page.locator('.remove-btn').first().click();
  76  | 
  77  | //     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  78  | //   });
  79  | 
  80  | //   test('CART TC08 Cart total should be visible', async ({ page }) => {
  81  | //     await addProductToCart(page);
  82  | 
  83  | //     await expect(page.locator('.cart-total')).toBeVisible();
  84  | //   });
  85  | 
  86  | //   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  87  | //     await addProductToCart(page);
  88  | 
  89  | //     await expect(page.locator('#discountcouponcode')).toBeVisible();
  90  | //   });
  91  | 
  92  | //   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  93  | //     await addProductToCart(page);
  94  | 
  95  | //     await page.locator('#discountcouponcode').fill('INVALID123');
  96  | //     await page.locator('#applydiscountcouponcode').click();
  97  | 
  98  | //     await expect(page.locator('.message-failure')).toBeVisible();
  99  | //   });
  100 | 
  101 | //   test('CART TC11 Apply empty discount code', async ({ page }) => {
  102 | //     await addProductToCart(page);
  103 | 
  104 | //     await page.locator('#applydiscountcouponcode').click();
  105 | 
  106 | //     await expect(page.locator('.message-failure')).toBeVisible();
  107 | //   });
  108 | 
  109 | //   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  110 | //     await addProductToCart(page);
  111 | 
  112 | //     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  113 | //   });
  114 | 
  115 | //   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  116 | //     await addProductToCart(page);
  117 | 
  118 | //     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  119 | //     await page.locator('#applygiftcardcouponcode').click();
  120 | 
  121 | //     await expect(page.locator('.message-failure')).toBeVisible();
  122 | //   });
  123 | 
  124 | //   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  125 | //     await addProductToCart(page);
  126 | 
  127 | //     await expect(page.locator('#termsofservice')).toBeVisible();
  128 | //   });
```