# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC04 Verify product price in cart
- Location: tests\cart.spec.js:39:3

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://demo.nopcommerce.com/apple-macbook-pro", waiting until "load"

```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('nopCommerce Shopping Cart Test Cases', () => {
  4   | 
  5   |   async function addProductToCart(page) {
> 6   |     await page.goto('/apple-macbook-pro');
      |                ^ Error: page.goto: Test ended.
  7   | 
  8   |     const qty = page.locator('#product_enteredQuantity_4');
  9   |     if (await qty.isVisible()) {
  10  |       await qty.clear();
  11  |       await qty.fill('2');
  12  |     }
  13  | 
  14  |     await page.locator('#add-to-cart-button-4').click();
  15  |     await expect(page.locator('.bar-notification.success')).toBeVisible();
  16  |     await page.goto('/cart');
  17  |   }
  18  | 
  19  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  20  |     await page.goto('/cart');
  21  | 
  22  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  23  |     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  24  |   });
  25  | 
  26  |   test('CART TC02 Add product to cart', async ({ page }) => {
  27  |     await addProductToCart(page);
  28  | 
  29  |     await expect(page.locator('.cart')).toBeVisible();
  30  |     await expect(page.locator('.product-name')).toContainText('Apple MacBook Pro');
  31  |   });
  32  | 
  33  |   test('CART TC03 Verify product name in cart', async ({ page }) => {
  34  |     await addProductToCart(page);
  35  | 
  36  |     await expect(page.locator('.product-name')).toContainText('Apple MacBook Pro');
  37  |   });
  38  | 
  39  |   test('CART TC04 Verify product price in cart', async ({ page }) => {
  40  |     await addProductToCart(page);
  41  | 
  42  |     await expect(page.locator('.product-unit-price')).toBeVisible();
  43  |   });
  44  | 
  45  |   test('CART TC05 Verify quantity field is visible', async ({ page }) => {
  46  |     await addProductToCart(page);
  47  | 
  48  |     await expect(page.locator('.qty-input')).toBeVisible();
  49  |   });
  50  | 
  51  |   test('CART TC06 Update product quantity', async ({ page }) => {
  52  |     await addProductToCart(page);
  53  | 
  54  |     await page.locator('.qty-input').clear();
  55  |     await page.locator('.qty-input').fill('3');
  56  |     await page.locator('#updatecart').click();
  57  | 
  58  |     await expect(page.locator('.qty-input')).toHaveValue('3');
  59  |   });
  60  | 
  61  |   test('CART TC07 Remove product using remove button', async ({ page }) => {
  62  |     await addProductToCart(page);
  63  | 
  64  |     await page.locator('.remove-btn').click();
  65  | 
  66  |     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  67  |   });
  68  | 
  69  |   test('CART TC08 Cart subtotal should be visible', async ({ page }) => {
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