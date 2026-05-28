# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:27:6

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demo.nopcommerce.com/build-your-own-computer", waiting until "load"

```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('nopCommerce Shopping Cart Test Cases', () => {
  4   | 
  5   | async function addProductToCart(page) {
> 6   |   await page.goto('https://demo.nopcommerce.com/build-your-own-computer');
      |              ^ Error: page.goto: Target page, context or browser has been closed
  7   | 
  8   |   await page.locator('#product_attribute_1').selectOption({ index: 1 });
  9   |   await page.locator('#product_attribute_2').selectOption({ index: 1 });
  10  |   await page.locator('#product_attribute_3_6').check();
  11  | 
  12  |   await page.getByRole('button', { name: 'Add to cart' }).click();
  13  | 
  14  |   await page.waitForTimeout(2000);
  15  | 
  16  |   await page.getByRole('link', { name: /Shopping cart/i }).click();
  17  | 
  18  |   await expect(page.getByRole('heading', { name: 'Shopping cart' })).toBeVisible();
  19  | 
  20  | }
  21  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  22  |     await page.goto('/cart');
  23  | 
  24  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  25  |   });
  26  | 
  27  | test.only('CART TC02 Add product to cart', async ({ page }) => {
  28  | 
  29  |   await addProductToCart(page);
  30  | 
  31  |   await page.pause();
  32  | 
  33  | });
  34  | 
  35  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  36  |     await addProductToCart(page);
  37  | 
  38  |     await expect(page.locator('.product-name').first()).toBeVisible();
  39  |   });
  40  | 
  41  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  42  |     await addProductToCart(page);
  43  | 
  44  |     await expect(page.locator('.product-unit-price').first()).toBeVisible();
  45  |   });
  46  | 
  47  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  48  |     await addProductToCart(page);
  49  | 
  50  |     await expect(page.locator('.qty-input').first()).toBeVisible();
  51  |   });
  52  | 
  53  | //   test('CART TC06 Update product quantity', async ({ page }) => {
  54  | //     await addProductToCart(page);
  55  | 
  56  | //     await page.locator('.qty-input').first().fill('3');
  57  | //     await page.locator('#updatecart').click();
  58  | 
  59  | //     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  60  | //   });
  61  | 
  62  | //   test('CART TC07 Remove product using remove button', async ({ page }) => {
  63  | //     await addProductToCart(page);
  64  | 
  65  | //     await page.locator('.remove-btn').first().click();
  66  | 
  67  | //     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  68  | //   });
  69  | 
  70  | //   test('CART TC08 Cart total should be visible', async ({ page }) => {
  71  | //     await addProductToCart(page);
  72  | 
  73  | //     await expect(page.locator('.cart-total')).toBeVisible();
  74  | //   });
  75  | 
  76  | //   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  77  | //     await addProductToCart(page);
  78  | 
  79  | //     await expect(page.locator('#discountcouponcode')).toBeVisible();
  80  | //   });
  81  | 
  82  | //   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  83  | //     await addProductToCart(page);
  84  | 
  85  | //     await page.locator('#discountcouponcode').fill('INVALID123');
  86  | //     await page.locator('#applydiscountcouponcode').click();
  87  | 
  88  | //     await expect(page.locator('.message-failure')).toBeVisible();
  89  | //   });
  90  | 
  91  | //   test('CART TC11 Apply empty discount code', async ({ page }) => {
  92  | //     await addProductToCart(page);
  93  | 
  94  | //     await page.locator('#applydiscountcouponcode').click();
  95  | 
  96  | //     await expect(page.locator('.message-failure')).toBeVisible();
  97  | //   });
  98  | 
  99  | //   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  100 | //     await addProductToCart(page);
  101 | 
  102 | //     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  103 | //   });
  104 | 
  105 | //   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  106 | //     await addProductToCart(page);
```