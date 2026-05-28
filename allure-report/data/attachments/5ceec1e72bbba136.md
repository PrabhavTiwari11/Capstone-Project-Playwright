# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: napCommerce.spec.js >> nopCommerce Basic Test Cases >> TC02 Register link should be visible
- Location: tests\napCommerce.spec.js:24:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('.header-logo')
Expected: visible
Received: hidden
Timeout:  30000ms

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.header-logo')
    61 × locator resolved to <div class="header-logo">…</div>
       - unexpected value "hidden"

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
        - /url: /register?returnUrl=%2F
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2F
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
  - link:
    - /url: https://demo.nopcommerce.com/apple-iphone-16-128gb
    - img
  - link:
    - /url: https://demo.nopcommerce.com/samsung-galaxy-s24-256gb
    - img
  - heading "Welcome to our store" [level=2]
  - paragraph: Online shopping is the process consumers go through to purchase products or services over the Internet. You can edit this in the admin site.
  - paragraph:
    - text: If you have questions, see the
    - link "Documentation":
      - /url: http://docs.nopcommerce.com/
    - text: ", or post in the"
    - link "Forums":
      - /url: https://www.nopcommerce.com/boards/
    - text: at
    - link "nopCommerce.com":
      - /url: https://www.nopcommerce.com
  - article:
    - heading "Electronics" [level=2]:
      - link "Electronics":
        - /url: /electronics
    - link "Picture for category Electronics":
      - /url: /electronics
      - img "Picture for category Electronics"
  - article:
    - heading "Apparel" [level=2]:
      - link "Apparel":
        - /url: /apparel
    - link "Picture for category Apparel":
      - /url: /apparel
      - img "Picture for category Apparel"
  - article:
    - heading "Digital downloads" [level=2]:
      - link "Digital downloads":
        - /url: /digital-downloads
    - link "Picture for category Digital downloads":
      - /url: /digital-downloads
      - img "Picture for category Digital downloads"
  - heading "Featured products" [level=2]
  - article:
    - link "Picture of Build your own computer":
      - /url: /build-your-own-computer
      - img "Picture of Build your own computer"
    - heading "Build your own computer" [level=2]:
      - link "Build your own computer":
        - /url: /build-your-own-computer
    - text: $1,200.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
  - article:
    - link "Picture of Apple MacBook Pro":
      - /url: /apple-macbook-pro
      - img "Picture of Apple MacBook Pro"
    - heading "Apple MacBook Pro" [level=2]:
      - link "Apple MacBook Pro":
        - /url: /apple-macbook-pro
    - text: $1,800.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
  - article:
    - link "Picture of HTC smartphone":
      - /url: /htc-smartphone
      - img "Picture of HTC smartphone"
    - heading "HTC smartphone" [level=2]:
      - link "HTC smartphone":
        - /url: /htc-smartphone
    - text: $245.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
  - article:
    - link "Picture of $25 Virtual Gift Card":
      - /url: /25-virtual-gift-card
      - img "Picture of $25 Virtual Gift Card"
    - heading "$25 Virtual Gift Card" [level=2]:
      - link "$25 Virtual Gift Card":
        - /url: /25-virtual-gift-card
    - text: $25.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
  - heading "News" [level=2]
  - article:
    - link "About nopCommerce":
      - /url: /about-nopcommerce
      - heading "About nopCommerce" [level=3]
    - time: "-Tuesday, November 4, 2025"
    - text: It's stable and highly usable. From downloads to documentation, www.nopCommerce.com offers a comprehensive base of information, resources, and support to the nopCommerce community.
    - link "details":
      - /url: /about-nopcommerce
  - article:
    - link "nopCommerce new release!":
      - /url: /nopcommerce-new-release
      - heading "nopCommerce new release!" [level=3]
    - time: "-Tuesday, November 4, 2025"
    - text: nopCommerce includes everything you need to begin your e-commerce online store. We have thought of everything and it's all included! nopCommerce is a fully customizable shopping cart
    - link "details":
      - /url: /nopcommerce-new-release
  - article:
    - link "New online store is open!":
      - /url: /new-online-store-is-open
      - heading "New online store is open!" [level=3]
    - time: "-Tuesday, November 4, 2025"
    - text: The new nopCommerce store is open now! We are very excited to offer our new range of products. We will be constantly adding to our range so please register on our site.
    - link "details":
      - /url: /new-online-store-is-open
  - link "View News Archive":
    - /url: /news
  - heading "Community poll" [level=2]
  - strong: Do you like nopCommerce?
  - list:
    - listitem:
      - radio "Excellent"
      - text: Excellent
    - listitem:
      - radio "Good"
      - text: Good
    - listitem:
      - radio "Poor"
      - text: Poor
    - listitem:
      - radio "Very bad"
      - text: Very bad
  - button "Vote"
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
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | async function openHomePage(page) {
  4   |   await page.goto('/', {
  5   |     waitUntil: 'domcontentloaded',
  6   |     timeout: 60000
  7   |   });
  8   | 
> 9   |   await expect(page.locator('.header-logo')).toBeVisible({
      |                                              ^ Error: expect(locator).toBeVisible() failed
  10  |     timeout: 30000
  11  |   });
  12  | }
  13  | test.describe('nopCommerce Basic Test Cases', () => {
  14  | 
  15  |   test.beforeEach(async ({ page }) => {
  16  |     await openHomePage(page);
  17  |   });
  18  | 
  19  | 
  20  |   test('TC01 Home page should open', async ({ page }) => {
  21  |     await expect(page.locator('.header-logo')).toBeVisible();
  22  |   });
  23  | 
  24  |   test('TC02 Register link should be visible', async ({ page }) => {
  25  |     await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  26  |   });
  27  | 
  28  |   test('TC03 Login link should be visible', async ({ page }) => {
  29  |     await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  30  |   });
  31  | 
  32  |   test('TC04 Search box should be visible', async ({ page }) => {
  33  |     await expect(page.locator('#small-searchterms')).toBeVisible();
  34  |   });
  35  | 
  36  | test('TC05 Search laptop product', async ({ page }) => {
  37  |   await page.locator('#small-searchterms').fill('laptop');
  38  | 
  39  |   await page.locator('button[type="submit"]').click();
  40  | 
  41  |   await expect(page).toHaveURL(/search/);
  42  |   await expect(page).toHaveURL(/q=laptop/);
  43  | });
  44  | 
  45  | test('TC06 Open Computers category', async ({ page }) => {
  46  | 
  47  |   await page.goto('/computers', {
  48  |     waitUntil: 'domcontentloaded',
  49  |     timeout: 60000
  50  |   });
  51  | 
  52  |   await expect(page).toHaveURL(/computers/);
  53  | 
  54  | });
  55  | 
  56  | test('TC07 Open Electronics category', async ({ page }) => {
  57  |   await page.goto('/electronics');
  58  |   await expect(page).toHaveURL(/electronics/);
  59  | });
  60  | 
  61  | test('TC08 Open Books category', async ({ page }) => {
  62  |   await page.goto('/books');
  63  |   await expect(page).toHaveURL(/books/);
  64  | });
  65  | 
  66  | 
  67  | 
  68  | test('TC9 Open Apparel category', async ({ page }) => {
  69  |   await page.goto('/apparel-shoes', {
  70  |     waitUntil: 'domcontentloaded',
  71  |     timeout: 60000
  72  |   });
  73  | 
  74  |   await expect(page).toHaveURL(/apparel-shoes/);
  75  | });
  76  | 
  77  | test('TC10 Open Digital downloads category', async ({ page }) => {
  78  |   await page.goto('/digital-downloads', {
  79  |     waitUntil: 'domcontentloaded',
  80  |     timeout: 60000
  81  |   });
  82  | 
  83  |   await expect(page).toHaveURL(/digital-downloads/);
  84  | });
  85  | 
  86  | 
  87  | test('TC11 Open Jewelry category', async ({ page }) => {
  88  | 
  89  |   await page.goto('/jewelry', {
  90  |    waitUntil: 'domcontentloaded'
  91  |   });
  92  | 
  93  |   await page.waitForTimeout(5000);
  94  | 
  95  |   await expect(page).toHaveURL(/jewelry/);
  96  | 
  97  | });
  98  | 
  99  | test('TC12 Open Gift Cards category', async ({ page }) => {
  100 | 
  101 |   await page.goto('/gift-cards', {
  102 |     waitUntil: 'domcontentloaded'
  103 |   });
  104 | 
  105 |   await page.waitForTimeout(5000);
  106 | 
  107 |   await expect(page).toHaveURL(/gift-cards/);
  108 | 
  109 | });
```