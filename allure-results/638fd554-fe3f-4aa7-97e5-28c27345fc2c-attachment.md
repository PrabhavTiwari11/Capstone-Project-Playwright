# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC03 Verify product name in cart
- Location: tests\cart.spec.js:33:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.bar-notification.success')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.bar-notification.success')

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
        - /url: /register?returnUrl=%2Fapple-macbook-pro
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fapple-macbook-pro
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
      - link "Notebooks":
        - /url: /notebooks
      - text: /
    - listitem:
      - strong: Apple MacBook Pro
  - article:
    - img "Picture of Apple MacBook Pro"
    - img "Picture of Apple MacBook Pro"
    - img "Picture of Apple MacBook Pro"
    - heading "Apple MacBook Pro" [level=1]
    - text: A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.
    - link "1 review(s)":
      - /url: "#productreviews"
    - text: "Manufacturer:"
    - link "Apple":
      - /url: /apple
    - text: "SKU: AP_MBP_13 Free shipping $1,800.00 This product has a minimum quantity of 2"
    - textbox "Enter a quantity": "2"
    - button "Add to cart"
    - button "Add to wishlist"
    - button "Add to compare list"
    - button "Email a friend"
    - img "whatsapp sharing button"
    - img "facebook sharing button"
    - img "twitter sharing button"
    - img "email sharing button"
    - img "odnoklassniki sharing button"
    - paragraph: With fifth-generation Intel Core processors, the latest graphics, and faster flash storage, the incredibly advanced MacBook Pro with Retina display moves even further ahead in performance and battery life.* *Compared with the previous generation.
    - paragraph: Retina display with 2560-by-1600 resolution
    - paragraph: Fifth-generation dual-core Intel Core i5 processor
    - paragraph: Intel Iris Graphics
    - paragraph: Up to 9 hours of battery life1
    - paragraph: Faster flash storage2
    - paragraph: 802.11ac Wi-Fi
    - paragraph: Two Thunderbolt 2 ports for connecting high-performance devices and transferring data at lightning speed
    - paragraph: Two USB 3 ports (compatible with USB 2 devices) and HDMI
    - paragraph: FaceTime HD camera
    - paragraph: Pages, Numbers, Keynote, iPhoto, iMovie, GarageBand included
    - paragraph: OS X, the world's most advanced desktop operating system
    - heading "Products specifications" [level=2]
    - table:
      - rowgroup:
        - row "Attribute name Attribute value":
          - columnheader "Attribute name"
          - columnheader "Attribute value"
      - rowgroup:
        - row "Screensize 13.0''":
          - cell "Screensize"
          - cell "13.0''"
        - row "System unit":
          - cell "System unit"
        - row "CPU Type Intel Core i5":
          - cell "CPU Type"
          - cell "Intel Core i5"
        - row "Memory 4 GB":
          - cell "Memory"
          - cell "4 GB"
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
      - listitem: ","
      - listitem:
        - link "compact":
          - /url: /compact
        - text: (7)
    - heading "Related products" [level=2]
    - article:
      - link "Picture of Lenovo Thinkpad Carbon Laptop":
        - /url: /lenovo-thinkpad-carbon-laptop
        - img "Picture of Lenovo Thinkpad Carbon Laptop"
      - heading "Lenovo Thinkpad Carbon Laptop" [level=2]:
        - link "Lenovo Thinkpad Carbon Laptop":
          - /url: /lenovo-thinkpad-carbon-laptop
      - text: $1,360.00
      - button "Add to cart"
      - button "Add to compare list"
      - button "Add to wishlist"
    - article:
      - link "Picture of Samsung Premium Ultrabook":
        - /url: /samsung-premium-ultrabook
        - img "Picture of Samsung Premium Ultrabook"
      - heading "Samsung Premium Ultrabook" [level=2]:
        - link "Samsung Premium Ultrabook":
          - /url: /samsung-premium-ultrabook
      - text: $1,590.00
      - button "Add to cart"
      - button "Add to compare list"
      - button "Add to wishlist"
    - article:
      - link "Picture of Asus Laptop":
        - /url: /asus-laptop
        - img "Picture of Asus Laptop"
      - heading "Asus Laptop" [level=2]:
        - link "Asus Laptop":
          - /url: /asus-laptop
      - text: $1,500.00
      - button "Add to cart"
      - button "Add to compare list"
      - button "Add to wishlist"
    - article:
      - link "Picture of HP Spectre XT Pro UltraBook":
        - /url: /hp-spectre-xt-pro-ultrabook
        - img "Picture of HP Spectre XT Pro UltraBook"
      - heading "HP Spectre XT Pro UltraBook" [level=2]:
        - link "HP Spectre XT Pro UltraBook":
          - /url: /hp-spectre-xt-pro-ultrabook
      - text: $1,350.00
      - button "Add to cart"
      - button "Add to compare list"
      - button "Add to wishlist"
  - heading "Existing reviews" [level=2]
  - strong: Some sample review
  - text: "5 This sample review is for the Apple MacBook Pro. I've been waiting for this product to be available. It is priced just right. From: John | Date: 11/4/2025 4:41 AM Was this review helpful? Yes No (0/0) Only registered users can write reviews"
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
  6   |     await page.goto('/apple-macbook-pro');
  7   | 
  8   |     const qty = page.locator('#product_enteredQuantity_4');
  9   |     if (await qty.isVisible()) {
  10  |       await qty.clear();
  11  |       await qty.fill('2');
  12  |     }
  13  | 
  14  |     await page.locator('#add-to-cart-button-4').click();
> 15  |     await expect(page.locator('.bar-notification.success')).toBeVisible();
      |                                                             ^ Error: expect(locator).toBeVisible() failed
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
  107 |     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  108 |     await page.locator('#applygiftcardcouponcode').click();
  109 | 
  110 |     await expect(page.locator('.message-failure')).toBeVisible();
  111 |   });
  112 | 
  113 |   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  114 |     await addProductToCart(page);
  115 | 
```