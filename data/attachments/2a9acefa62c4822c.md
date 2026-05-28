# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:33:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Shopping cart"
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('h1')
    21 × locator resolved to <h1>demo.nopcommerce.com</h1>
       - unexpected value "demo.nopcommerce.com"

```

```yaml
- main
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
  9   |   // Wait if Cloudflare page appears
  10  |   if (await page.locator('text=Performing security verification').isVisible()) {
  11  |     await page.waitForTimeout(10000);
  12  |   }
  13  | 
  14  |   await page.locator('#product_attribute_1').selectOption({ index: 1 });
  15  |   await page.locator('#product_attribute_2').selectOption({ index: 1 });
  16  | 
  17  |   await page.locator('#product_attribute_3_6').check();
  18  | 
  19  |   await page.locator('#add-to-cart-button-1').click();
  20  | 
  21  |   await page.waitForLoadState('networkidle');
  22  | 
  23  |   await page.locator('.cart-label').click();
  24  | 
> 25  |   await expect(page.locator('h1')).toContainText('Shopping cart');
      |                                    ^ Error: expect(locator).toContainText(expected) failed
  26  | }
  27  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  28  |     await page.goto('/cart');
  29  | 
  30  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  31  |   });
  32  | 
  33  | test.only('CART TC02 Add product to cart', async ({ page }) => {
  34  | 
  35  |   await addProductToCart(page);
  36  | 
  37  |   await page.pause();
  38  | 
  39  | });
  40  | 
  41  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  42  |     await addProductToCart(page);
  43  | 
  44  |     await expect(page.locator('.product-name').first()).toBeVisible();
  45  |   });
  46  | 
  47  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  48  |     await addProductToCart(page);
  49  | 
  50  |     await expect(page.locator('.product-unit-price').first()).toBeVisible();
  51  |   });
  52  | 
  53  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  54  |     await addProductToCart(page);
  55  | 
  56  |     await expect(page.locator('.qty-input').first()).toBeVisible();
  57  |   });
  58  | 
  59  | //   test('CART TC06 Update product quantity', async ({ page }) => {
  60  | //     await addProductToCart(page);
  61  | 
  62  | //     await page.locator('.qty-input').first().fill('3');
  63  | //     await page.locator('#updatecart').click();
  64  | 
  65  | //     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  66  | //   });
  67  | 
  68  | //   test('CART TC07 Remove product using remove button', async ({ page }) => {
  69  | //     await addProductToCart(page);
  70  | 
  71  | //     await page.locator('.remove-btn').first().click();
  72  | 
  73  | //     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  74  | //   });
  75  | 
  76  | //   test('CART TC08 Cart total should be visible', async ({ page }) => {
  77  | //     await addProductToCart(page);
  78  | 
  79  | //     await expect(page.locator('.cart-total')).toBeVisible();
  80  | //   });
  81  | 
  82  | //   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  83  | //     await addProductToCart(page);
  84  | 
  85  | //     await expect(page.locator('#discountcouponcode')).toBeVisible();
  86  | //   });
  87  | 
  88  | //   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  89  | //     await addProductToCart(page);
  90  | 
  91  | //     await page.locator('#discountcouponcode').fill('INVALID123');
  92  | //     await page.locator('#applydiscountcouponcode').click();
  93  | 
  94  | //     await expect(page.locator('.message-failure')).toBeVisible();
  95  | //   });
  96  | 
  97  | //   test('CART TC11 Apply empty discount code', async ({ page }) => {
  98  | //     await addProductToCart(page);
  99  | 
  100 | //     await page.locator('#applydiscountcouponcode').click();
  101 | 
  102 | //     await expect(page.locator('.message-failure')).toBeVisible();
  103 | //   });
  104 | 
  105 | //   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  106 | //     await addProductToCart(page);
  107 | 
  108 | //     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  109 | //   });
  110 | 
  111 | //   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  112 | //     await addProductToCart(page);
  113 | 
  114 | //     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  115 | //     await page.locator('#applygiftcardcouponcode').click();
  116 | 
  117 | //     await expect(page.locator('.message-failure')).toBeVisible();
  118 | //   });
  119 | 
  120 | //   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  121 | //     await addProductToCart(page);
  122 | 
  123 | //     await expect(page.locator('#termsofservice')).toBeVisible();
  124 | //   });
  125 | 
```