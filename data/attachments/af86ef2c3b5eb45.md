# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC03 Verify product name in cart
- Location: tests\cart.spec.js:34:3

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://demo.nopcommerce.com/build-your-own-computer", waiting until "load"

```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('nopCommerce Shopping Cart Test Cases', () => {
  4   | 
  5   |   async function addProductToCart(page) {
> 6   |   await page.goto('/build-your-own-computer');
      |              ^ Error: page.goto: Test ended.
  7   | 
  8   |   await page.locator('#product_attribute_1').selectOption({ index: 1 });
  9   |   await page.locator('#product_attribute_2').selectOption({ index: 1 });
  10  |   await page.locator('#product_attribute_3_6').check();
  11  | 
  12  |   await page.locator('#add-to-cart-button-1').click();
  13  | 
  14  |   await expect(page.locator('.bar-notification')).toContainText('The product has been added', {
  15  |     timeout: 15000
  16  |   });
  17  | 
  18  |   await page.goto('/cart');
  19  | 
  20  |   await expect(page.locator('.cart')).toBeVisible();
  21  | }
  22  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  23  |     await page.goto('/cart');
  24  | 
  25  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  26  |   });
  27  | 
  28  |   test('CART TC02 Add product to cart', async ({ page }) => {
  29  |     await addProductToCart(page);
  30  | 
  31  |     await expect(page.locator('.product-name').first()).toBeVisible();
  32  |   });
  33  | 
  34  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  35  |     await addProductToCart(page);
  36  | 
  37  |     await expect(page.locator('.product-name').first()).toBeVisible();
  38  |   });
  39  | 
  40  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  41  |     await addProductToCart(page);
  42  | 
  43  |     await expect(page.locator('.product-unit-price').first()).toBeVisible();
  44  |   });
  45  | 
  46  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  47  |     await addProductToCart(page);
  48  | 
  49  |     await expect(page.locator('.qty-input').first()).toBeVisible();
  50  |   });
  51  | 
  52  |   test('CART TC06 Update product quantity', async ({ page }) => {
  53  |     await addProductToCart(page);
  54  | 
  55  |     await page.locator('.qty-input').first().fill('3');
  56  |     await page.locator('#updatecart').click();
  57  | 
  58  |     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  59  |   });
  60  | 
  61  |   test('CART TC07 Remove product using remove button', async ({ page }) => {
  62  |     await addProductToCart(page);
  63  | 
  64  |     await page.locator('.remove-btn').first().click();
  65  | 
  66  |     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  67  |   });
  68  | 
  69  |   test('CART TC08 Cart total should be visible', async ({ page }) => {
  70  |     await addProductToCart(page);
  71  | 
  72  |     await expect(page.locator('.cart-total')).toBeVisible();
  73  |   });
  74  | 
  75  |   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  76  |     await addProductToCart(page);
  77  | 
  78  |     await expect(page.locator('#discountcouponcode')).toBeVisible();
  79  |   });
  80  | 
  81  |   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  82  |     await addProductToCart(page);
  83  | 
  84  |     await page.locator('#discountcouponcode').fill('INVALID123');
  85  |     await page.locator('#applydiscountcouponcode').click();
  86  | 
  87  |     await expect(page.locator('.message-failure')).toBeVisible();
  88  |   });
  89  | 
  90  |   test('CART TC11 Apply empty discount code', async ({ page }) => {
  91  |     await addProductToCart(page);
  92  | 
  93  |     await page.locator('#applydiscountcouponcode').click();
  94  | 
  95  |     await expect(page.locator('.message-failure')).toBeVisible();
  96  |   });
  97  | 
  98  |   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  99  |     await addProductToCart(page);
  100 | 
  101 |     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  102 |   });
  103 | 
  104 |   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  105 |     await addProductToCart(page);
  106 | 
```