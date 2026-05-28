# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:28:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.bar-notification')
Expected substring: "The product has been added"
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('.bar-notification')

```

```yaml
- status
- banner:
  - link "Skip navigation":
    - /url: "#main"
  - combobox "Currency selector":
    - option "US Dollar" [selected]
    - option "Euro"
  - list:
    - listitem:
      - link "Register":
        - /url: /register?returnUrl=%2Fbuild-your-own-computer
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fbuild-your-own-computer
    - listitem:
      - link "Wishlist (0)":
        - /url: /wishlist
    - listitem:
      - link "Shopping cart (0)":
        - /url: /cart
  - link "nopCommerce demo store":
    - /url: /
    - img "nopCommerce demo store"
  - search:
    - textbox "Search store"
    - button "Search"
- navigation:
  - menu "Categories":
    - menuitem "Computers":
      - button "Computers"
    - menuitem "Electronics":
      - button "Electronics"
    - menuitem "Apparel":
      - button "Apparel"
    - menuitem "Digital downloads":
      - button "Digital downloads"
    - menuitem "Books":
      - button "Books"
    - menuitem "Jewelry":
      - button "Jewelry"
    - menuitem "Gift Cards":
      - button "Gift Cards"
- main:
  - list:
    - listitem:
      - link "Home":
        - /url: /
      - text: /
    - listitem:
      - link "Computers":
        - /url: /computers
      - text: /
    - listitem:
      - link "Desktops":
        - /url: /desktops
      - text: /
    - listitem:
      - strong: Build your own computer
  - article:
    - img "Picture of Build your own computer"
    - img "Picture of Build your own computer"
    - img "Picture of Build your own computer"
    - heading "Build your own computer" [level=1]
    - text: Build it
    - link "1 review(s)":
      - /url: "#productreviews"
    - text: "SKU: COMP_CUST Free shipping"
    - term: Processor *
    - definition:
      - combobox "Processor":
        - option "Please select"
        - option "2.2 GHz Intel Pentium Dual-Core E2200" [selected]
        - option "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]"
    - term: RAM *
    - definition:
      - combobox "RAM":
        - option "Please select"
        - option "2 GB" [selected]
        - option "4GB [+$20.00]"
        - option "8GB [+$60.00]"
    - term: HDD *
    - definition:
      - list:
        - listitem:
          - radio "320 GB" [checked]
          - text: 320 GB
        - listitem:
          - radio "400 GB [+$100.00]"
          - text: 400 GB [+$100.00]
    - term: OS *
    - definition:
      - list:
        - listitem:
          - radio "Vista Home [+$50.00]" [checked]
          - text: Vista Home [+$50.00]
        - listitem:
          - radio "Vista Premium [+$60.00]"
          - text: Vista Premium [+$60.00]
    - term: Software
    - definition:
      - list:
        - listitem:
          - checkbox "Microsoft Office [+$50.00]" [checked]
          - text: Microsoft Office [+$50.00]
        - listitem:
          - checkbox "Acrobat Reader [+$10.00]"
          - text: Acrobat Reader [+$10.00]
        - listitem:
          - checkbox "Total Commander [+$5.00]"
          - text: Total Commander [+$5.00]
    - text: $1,300.00
    - textbox "Enter a quantity": "1"
    - button "Add to cart"
    - button "Add to wishlist"
    - button "Add to compare list"
    - button "Email a friend"
    - img "whatsapp sharing button"
    - img "facebook sharing button"
    - img "twitter sharing button"
    - img "email sharing button"
    - img "odnoklassniki sharing button"
    - paragraph: Fight back against cluttered workspaces with the stylish IBM zBC12 All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning XBRITE-HiColor LCD technology. The black IBM zBC12 has a built-in microphone and MOTION EYE camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner and Sony's Movie Store software so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, this JS-series All-in-One includes an elegantly designed keyboard and a USB mouse.
    - heading "Product tags" [level=2]
    - list:
      - listitem:
        - link "awesome":
          - /url: /awesome
        - text: (18)
      - listitem: ","
      - listitem:
        - link "computer":
          - /url: /computer
        - text: (14)
  - heading "Existing reviews" [level=2]
  - strong: Some sample review
  - text: "4 This sample review is for the Build your own computer. I've been waiting for this product to be available. It is priced just right. From: John | Date: 11/4/2025 4:41 AM Was this review helpful? Yes No (0/0) Only registered users can write reviews"
- contentinfo:
  - navigation:
    - heading "Information" [level=2]
    - menu "Information":
      - menuitem "Sitemap":
        - link "Sitemap":
          - /url: /sitemap
      - menuitem "Shipping & returns":
        - link "Shipping & returns":
          - /url: /shipping-returns
      - menuitem "Privacy notice":
        - link "Privacy notice":
          - /url: /privacy-notice
      - menuitem "Conditions of Use":
        - link "Conditions of Use":
          - /url: /conditions-of-use
      - menuitem "About us":
        - link "About us":
          - /url: /about-us
      - menuitem "Contact us":
        - link "Contact us":
          - /url: /contactus
    - heading "Customer service" [level=2]
    - menu "Customer service":
      - menuitem "Search":
        - link "Search":
          - /url: /search
      - menuitem "News":
        - link "News":
          - /url: /news
      - menuitem "Blog":
        - link "Blog":
          - /url: /blog
      - menuitem "Recently viewed products":
        - link "Recently viewed products":
          - /url: /recentlyviewedproducts
      - menuitem "Compare products list":
        - link "Compare products list":
          - /url: /compareproducts
      - menuitem "New products":
        - link "New products":
          - /url: /newproducts
    - heading "My account" [level=2]
    - menu "My account":
      - menuitem "My account":
        - link "My account":
          - /url: /customer/info
      - menuitem "Orders":
        - link "Orders":
          - /url: /order/history
      - menuitem "Addresses":
        - link "Addresses":
          - /url: /customer/addresses
      - menuitem "Shopping cart":
        - link "Shopping cart":
          - /url: /cart
      - menuitem "Wishlist":
        - link "Wishlist":
          - /url: /wishlist
      - menuitem "Apply for vendor account":
        - link "Apply for vendor account":
          - /url: /vendor/apply
  - heading "Follow us" [level=2]
  - list:
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/nopCommerce
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/nopCommerce
    - listitem:
      - link "RSS":
        - /url: /news/rss/1
    - listitem:
      - link "YouTube":
        - /url: https://www.youtube.com/user/nopCommerce
    - listitem:
      - link "Instagram":
        - /url: https://www.instagram.com/nopcommerce_official
  - form:
    - heading "Newsletter" [level=2]
    - textbox "Sign up for our newsletter":
      - /placeholder: Enter your email here...
    - button "Subscribe"
  - text: Copyright © 2026 nopCommerce demo store. All rights reserved. Powered by
  - link "nopCommerce":
    - /url: https://www.nopcommerce.com/
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
  8   |   await page.locator('#product_attribute_1').selectOption({ index: 1 });
  9   |   await page.locator('#product_attribute_2').selectOption({ index: 1 });
  10  |   await page.locator('#product_attribute_3_6').check();
  11  | 
  12  |   await page.locator('#add-to-cart-button-1').click();
  13  | 
> 14  |   await expect(page.locator('.bar-notification')).toContainText('The product has been added', {
      |                                                   ^ Error: expect(locator).toContainText(expected) failed
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
  107 |     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  108 |     await page.locator('#applygiftcardcouponcode').click();
  109 | 
  110 |     await expect(page.locator('.message-failure')).toBeVisible();
  111 |   });
  112 | 
  113 |   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  114 |     await addProductToCart(page);
```