# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sortingFiltering.spec.js >> nopCommerce Sorting and Filtering Test Cases >> SORT FILTER TC06 Display 3 products per page should work
- Location: tests/sortingFiltering.spec.js:49:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /pagesize/
Received string:  "https://demo.nopcommerce.com/books"
Timeout: 15000ms

Call log:
  - Expect "toHaveURL" with timeout 15000ms
    33 × unexpected value "https://demo.nopcommerce.com/books"

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
        - /url: /register?returnUrl=%2Fbooks
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fbooks
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
      - strong: Books
  - complementary:
    - heading "Categories" [level=2]
    - list:
      - listitem:
        - link "Computers":
          - /url: /computers
      - listitem:
        - link "Electronics":
          - /url: /electronics
      - listitem:
        - link "Apparel":
          - /url: /apparel
      - listitem:
        - link "Digital downloads":
          - /url: /digital-downloads
      - listitem:
        - link "Books":
          - /url: /books
      - listitem:
        - link "Jewelry":
          - /url: /jewelry
      - listitem:
        - link "Gift Cards":
          - /url: /gift-cards
    - heading "Manufacturers" [level=2]
    - list:
      - listitem:
        - link "Apple":
          - /url: /apple
      - listitem:
        - link "HP":
          - /url: /hp
    - link "View all":
      - /url: /manufacturer/all
    - heading "Popular tags" [level=2]
    - list:
      - listitem:
        - link "apparel":
          - /url: /apparel-2
      - listitem:
        - link "awesome":
          - /url: /awesome
      - listitem:
        - link "book":
          - /url: /book
      - listitem:
        - link "camera":
          - /url: /camera
      - listitem:
        - link "cell":
          - /url: /cell
      - listitem:
        - link "compact":
          - /url: /compact
      - listitem:
        - link "computer":
          - /url: /computer
      - listitem:
        - link "cool":
          - /url: /cool
      - listitem:
        - link "digital":
          - /url: /digital
      - listitem:
        - link "game":
          - /url: /game
      - listitem:
        - link "jeans":
          - /url: /jeans
      - listitem:
        - link "jewelry":
          - /url: /jewelry-2
      - listitem:
        - link "nice":
          - /url: /nice
      - listitem:
        - link "shirt":
          - /url: /shirt
      - listitem:
        - link "shoes":
          - /url: /shoes-2
    - link "View all":
      - /url: /producttag/all
  - heading "Books" [level=1]
  - button "Grid"
  - button "List"
  - text: Sort by
  - combobox "Select product sort order":
    - option "Position" [selected]
    - 'option "Name: A to Z"'
    - 'option "Name: Z to A"'
    - 'option "Price: Low to High"'
    - 'option "Price: High to Low"'
    - option "Created on"
  - text: Display
  - combobox "Select number of products per page":
    - option "3" [selected]
    - option "6"
    - option "9"
  - text: per page
  - article:
    - link "Picture of Fahrenheit 451 by Ray Bradbury":
      - /url: /fahrenheit-451-by-ray-bradbury
      - img "Picture of Fahrenheit 451 by Ray Bradbury"
    - heading "Fahrenheit 451 by Ray Bradbury" [level=2]:
      - link "Fahrenheit 451 by Ray Bradbury":
        - /url: /fahrenheit-451-by-ray-bradbury
    - text: $30.00 $27.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
  - article:
    - link "Picture of First Prize Pies":
      - /url: /first-prize-pies
      - img "Picture of First Prize Pies"
    - heading "First Prize Pies" [level=2]:
      - link "First Prize Pies":
        - /url: /first-prize-pies
    - text: $67.00 $51.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
  - article:
    - link "Picture of Pride and Prejudice":
      - /url: /pride-and-prejudice
      - img "Picture of Pride and Prejudice"
    - heading "Pride and Prejudice" [level=2]:
      - link "Pride and Prejudice":
        - /url: /pride-and-prejudice
    - text: $35.00 $24.00
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
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
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | async function checkCloudflare(page) {
  4  |   const body = await page.locator('body').innerText().catch(() => '');
  5  |   if (body.includes('Performing security verification')) {
  6  |     test.skip(true, 'Cloudflare security verification detected');
  7  |   }
  8  | }
  9  | 
  10 | test.describe('nopCommerce Sorting and Filtering Test Cases', () => {
  11 |   test.beforeEach(async ({ page }) => {
  12 |     await page.goto('/books');
  13 |     await checkCloudflare(page);
  14 |   });
  15 | 
  16 |   test('SORT FILTER TC01 Books category page should open', async ({ page }) => {
  17 |     await expect(page).toHaveURL(/books/);
  18 |     await expect(page.locator('h1')).toContainText(/Books/i);
  19 |   });
  20 | 
  21 |   test('SORT FILTER TC02 Sort by dropdown should be visible', async ({ page }) => {
  22 |     await expect(page.locator('#products-orderby')).toBeVisible();
  23 |   });
  24 | 
  25 | test('SORT FILTER TC03 Sort by Name A to Z should work', async ({ page }) => {
  26 |   await page.locator('#products-orderby').selectOption({
  27 |     label: 'Name: A to Z'
  28 |   });
  29 | 
  30 |   await page.waitForLoadState('networkidle');
  31 | 
  32 |   await expect(page.locator('.product-item').first()).toBeVisible();
  33 | });
  34 | 
  35 | test('SORT FILTER TC04 Sort by Price Low to High should work', async ({ page }) => {
  36 |   await page.locator('#products-orderby').selectOption({
  37 |     label: 'Price: Low to High'
  38 |   });
  39 | 
  40 |   await page.waitForLoadState('networkidle');
  41 | 
  42 |   await expect(page.locator('.product-item').first()).toBeVisible();
  43 | });
  44 | 
  45 |   test('SORT FILTER TC05 Display per page dropdown should be visible', async ({ page }) => {
  46 |     await expect(page.locator('#products-pagesize')).toBeVisible();
  47 |   });
  48 | 
  49 |   test('SORT FILTER TC06 Display 3 products per page should work', async ({ page }) => {
  50 |     await page.locator('#products-pagesize').selectOption({ label: '3' });
> 51 |     await expect(page).toHaveURL(/pagesize/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  52 |   });
  53 | 
  54 | test('SORT FILTER TC07 Product grid should be visible', async ({ page }) => {
  55 |   await expect(page.locator('.product-grid')).toBeVisible();
  56 | });
  57 | 
  58 | test('SORT FILTER TC08 Product items should be displayed', async ({ page }) => {
  59 |   await expect(page.locator('.product-item').first()).toBeVisible();
  60 | });
  61 | });
```