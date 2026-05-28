# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:41:6

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
  9   |   // wait if cloudflare appears
  10  |   if (await page.locator('text=Performing security verification').isVisible()) {
  11  |     await page.waitForTimeout(10000);
  12  |   }
  13  | 
  14  |   await page.locator('#product_attribute_1').selectOption({ index: 1 });
  15  | 
  16  |   await page.locator('#product_attribute_2').selectOption({ index: 1 });
  17  | 
  18  |   await page.locator('#product_attribute_3_6').check();
  19  | 
  20  |   await page.locator('#add-to-cart-button-1').click();
  21  | 
  22  |   await page.waitForTimeout(5000);
  23  | 
  24  |   // direct cart URL
  25  |   await page.goto('https://demo.nopcommerce.com/cart');
  26  | 
  27  |   // cloudflare check again
  28  |   if (await page.locator('text=Performing security verification').isVisible()) {
  29  |     await page.waitForTimeout(10000);
  30  |   }
  31  | 
> 32  |   await expect(page.locator('h1')).toContainText('Shopping cart');
      |                                    ^ Error: expect(locator).toContainText(expected) failed
  33  | 
  34  | }
  35  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  36  |     await page.goto('/cart');
  37  | 
  38  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  39  |   });
  40  | 
  41  | test.only('CART TC02 Add product to cart', async ({ page }) => {
  42  | 
  43  |   await addProductToCart(page);
  44  | 
  45  |   await page.pause();
  46  | 
  47  | });
  48  | 
  49  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  50  |     await addProductToCart(page);
  51  | 
  52  |     await expect(page.locator('.product-name').first()).toBeVisible();
  53  |   });
  54  | 
  55  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  56  |     await addProductToCart(page);
  57  | 
  58  |     await expect(page.locator('.product-unit-price').first()).toBeVisible();
  59  |   });
  60  | 
  61  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  62  |     await addProductToCart(page);
  63  | 
  64  |     await expect(page.locator('.qty-input').first()).toBeVisible();
  65  |   });
  66  | 
  67  | //   test('CART TC06 Update product quantity', async ({ page }) => {
  68  | //     await addProductToCart(page);
  69  | 
  70  | //     await page.locator('.qty-input').first().fill('3');
  71  | //     await page.locator('#updatecart').click();
  72  | 
  73  | //     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  74  | //   });
  75  | 
  76  | //   test('CART TC07 Remove product using remove button', async ({ page }) => {
  77  | //     await addProductToCart(page);
  78  | 
  79  | //     await page.locator('.remove-btn').first().click();
  80  | 
  81  | //     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  82  | //   });
  83  | 
  84  | //   test('CART TC08 Cart total should be visible', async ({ page }) => {
  85  | //     await addProductToCart(page);
  86  | 
  87  | //     await expect(page.locator('.cart-total')).toBeVisible();
  88  | //   });
  89  | 
  90  | //   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  91  | //     await addProductToCart(page);
  92  | 
  93  | //     await expect(page.locator('#discountcouponcode')).toBeVisible();
  94  | //   });
  95  | 
  96  | //   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  97  | //     await addProductToCart(page);
  98  | 
  99  | //     await page.locator('#discountcouponcode').fill('INVALID123');
  100 | //     await page.locator('#applydiscountcouponcode').click();
  101 | 
  102 | //     await expect(page.locator('.message-failure')).toBeVisible();
  103 | //   });
  104 | 
  105 | //   test('CART TC11 Apply empty discount code', async ({ page }) => {
  106 | //     await addProductToCart(page);
  107 | 
  108 | //     await page.locator('#applydiscountcouponcode').click();
  109 | 
  110 | //     await expect(page.locator('.message-failure')).toBeVisible();
  111 | //   });
  112 | 
  113 | //   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  114 | //     await addProductToCart(page);
  115 | 
  116 | //     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  117 | //   });
  118 | 
  119 | //   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  120 | //     await addProductToCart(page);
  121 | 
  122 | //     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  123 | //     await page.locator('#applygiftcardcouponcode').click();
  124 | 
  125 | //     await expect(page.locator('.message-failure')).toBeVisible();
  126 | //   });
  127 | 
  128 | //   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  129 | //     await addProductToCart(page);
  130 | 
  131 | //     await expect(page.locator('#termsofservice')).toBeVisible();
  132 | //   });
```