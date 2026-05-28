# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productSearch.spec.js >> nopCommerce Product Search Test Cases >> PRODUCT TC17 Change view mode
- Location: tests\productSearch.spec.js:114:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 90000ms exceeded.
Call log:
  - waiting for locator('#products-viewmode')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - status
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "Skip navigation" [ref=e4] [cursor=pointer]:
        - /url: "#main"
      - generic [ref=e5]:
        - combobox "Currency selector" [ref=e8]:
          - option "US Dollar" [selected]
          - option "Euro"
        - list [ref=e11]:
          - listitem [ref=e12]:
            - link "Register" [ref=e13] [cursor=pointer]:
              - /url: /register?returnUrl=%2Fsearch%3Fq%3Dcomputer
          - listitem [ref=e14]:
            - link "Log in" [ref=e15] [cursor=pointer]:
              - /url: /login?returnUrl=%2Fsearch%3Fq%3Dcomputer
          - listitem [ref=e16]:
            - link "Wishlist (0)" [ref=e17] [cursor=pointer]:
              - /url: /wishlist
              - generic [ref=e18]: Wishlist
              - generic [ref=e19]: (0)
          - listitem [ref=e20]:
            - link "Shopping cart (0)" [ref=e21] [cursor=pointer]:
              - /url: /cart
              - generic [ref=e22]: Shopping cart
              - generic [ref=e23]: (0)
      - generic [ref=e24]:
        - link "nopCommerce demo store" [ref=e26] [cursor=pointer]:
          - /url: /
          - img "nopCommerce demo store" [ref=e27]
        - search [ref=e28]:
          - generic [ref=e29]:
            - textbox "Search store" [ref=e30]
            - button "Search" [ref=e31] [cursor=pointer]
    - navigation [ref=e33]:
      - menu "Categories" [ref=e34]:
        - menuitem "Computers" [ref=e35]:
          - button "Computers" [ref=e37] [cursor=pointer]
        - menuitem "Electronics" [ref=e38]:
          - button "Electronics" [ref=e40] [cursor=pointer]
        - menuitem "Apparel" [ref=e41]:
          - button "Apparel" [ref=e43] [cursor=pointer]
        - menuitem "Digital downloads" [ref=e44]:
          - button "Digital downloads" [ref=e45] [cursor=pointer]
        - menuitem "Books" [ref=e46]:
          - button "Books" [ref=e47] [cursor=pointer]
        - menuitem "Jewelry" [ref=e48]:
          - button "Jewelry" [ref=e49] [cursor=pointer]
        - menuitem "Gift Cards" [ref=e50]:
          - button "Gift Cards" [ref=e51] [cursor=pointer]
    - main [ref=e52]:
      - generic [ref=e53]:
        - complementary [ref=e54]:
          - generic [ref=e56]:
            - heading "Filter by price" [level=2] [ref=e57]
            - generic [ref=e59]:
              - text: "0"
              - generic [ref=e60]: "10000"
          - generic [ref=e65]:
            - heading "Categories" [level=2] [ref=e66]
            - list [ref=e68]:
              - listitem [ref=e69]:
                - link "Computers" [ref=e70] [cursor=pointer]:
                  - /url: /computers
              - listitem [ref=e71]:
                - link "Electronics" [ref=e72] [cursor=pointer]:
                  - /url: /electronics
              - listitem [ref=e73]:
                - link "Apparel" [ref=e74] [cursor=pointer]:
                  - /url: /apparel
              - listitem [ref=e75]:
                - link "Digital downloads" [ref=e76] [cursor=pointer]:
                  - /url: /digital-downloads
              - listitem [ref=e77]:
                - link "Books" [ref=e78] [cursor=pointer]:
                  - /url: /books
              - listitem [ref=e79]:
                - link "Jewelry" [ref=e80] [cursor=pointer]:
                  - /url: /jewelry
              - listitem [ref=e81]:
                - link "Gift Cards" [ref=e82] [cursor=pointer]:
                  - /url: /gift-cards
          - generic [ref=e83]:
            - heading "Manufacturers" [level=2] [ref=e84]
            - generic [ref=e85]:
              - list [ref=e86]:
                - listitem [ref=e87]:
                  - link "Apple" [ref=e88] [cursor=pointer]:
                    - /url: /apple
                - listitem [ref=e89]:
                  - link "HP" [ref=e90] [cursor=pointer]:
                    - /url: /hp
              - link "View all" [ref=e92] [cursor=pointer]:
                - /url: /manufacturer/all
          - generic [ref=e93]:
            - heading "Popular tags" [level=2] [ref=e94]
            - generic [ref=e95]:
              - list [ref=e97]:
                - listitem [ref=e98]:
                  - link "apparel" [ref=e99] [cursor=pointer]:
                    - /url: /apparel-2
                - listitem [ref=e100]:
                  - link "awesome" [ref=e101] [cursor=pointer]:
                    - /url: /awesome
                - listitem [ref=e102]:
                  - link "book" [ref=e103] [cursor=pointer]:
                    - /url: /book
                - listitem [ref=e104]:
                  - link "camera" [ref=e105] [cursor=pointer]:
                    - /url: /camera
                - listitem [ref=e106]:
                  - link "cell" [ref=e107] [cursor=pointer]:
                    - /url: /cell
                - listitem [ref=e108]:
                  - link "compact" [ref=e109] [cursor=pointer]:
                    - /url: /compact
                - listitem [ref=e110]:
                  - link "computer" [ref=e111] [cursor=pointer]:
                    - /url: /computer
                - listitem [ref=e112]:
                  - link "cool" [ref=e113] [cursor=pointer]:
                    - /url: /cool
                - listitem [ref=e114]:
                  - link "digital" [ref=e115] [cursor=pointer]:
                    - /url: /digital
                - listitem [ref=e116]:
                  - link "game" [ref=e117] [cursor=pointer]:
                    - /url: /game
                - listitem [ref=e118]:
                  - link "jeans" [ref=e119] [cursor=pointer]:
                    - /url: /jeans
                - listitem [ref=e120]:
                  - link "jewelry" [ref=e121] [cursor=pointer]:
                    - /url: /jewelry-2
                - listitem [ref=e122]:
                  - link "nice" [ref=e123] [cursor=pointer]:
                    - /url: /nice
                - listitem [ref=e124]:
                  - link "shirt" [ref=e125] [cursor=pointer]:
                    - /url: /shirt
                - listitem [ref=e126]:
                  - link "shoes" [ref=e127] [cursor=pointer]:
                    - /url: /shoes-2
              - link "View all" [ref=e129] [cursor=pointer]:
                - /url: /producttag/all
        - generic [ref=e131]:
          - heading "Search" [level=1] [ref=e133]
          - generic [ref=e134]:
            - generic [ref=e136]:
              - generic [ref=e139]:
                - generic [ref=e140]:
                  - generic [ref=e141]: "Search keyword:"
                  - textbox "Search keyword:" [ref=e142]: computer
                - generic [ref=e143]:
                  - checkbox "Advanced search" [ref=e144]
                  - text: Advanced search
              - button "Search" [ref=e146] [cursor=pointer]
            - generic [ref=e147]:
              - generic [ref=e148]:
                - button "Grid" [ref=e149] [cursor=pointer]
                - button "List" [ref=e150] [cursor=pointer]
              - generic [ref=e151]:
                - text: Sort by
                - combobox "Select product sort order" [ref=e152]:
                  - option "Position" [selected]
                  - 'option "Name: A to Z"'
                  - 'option "Name: Z to A"'
                  - 'option "Price: Low to High"'
                  - 'option "Price: High to Low"'
                  - option "Created on"
              - generic [ref=e153]:
                - text: Display
                - combobox "Select number of products per page" [ref=e154]:
                  - option "3"
                  - option "6" [selected]
                  - option "9"
                  - option "18"
                - text: per page
            - article [ref=e161]:
              - link "Picture of Build your own computer" [ref=e163] [cursor=pointer]:
                - /url: /build-your-own-computer
                - img "Picture of Build your own computer" [ref=e164]
              - generic [ref=e165]:
                - heading "Build your own computer" [level=2] [ref=e166]:
                  - link "Build your own computer" [ref=e167] [cursor=pointer]:
                    - /url: /build-your-own-computer
                - generic "1 review(s)" [ref=e168]
                - generic [ref=e171]:
                  - generic [ref=e172]: $1,200.00
                  - generic [ref=e173]:
                    - button "Add to cart" [ref=e174] [cursor=pointer]
                    - button "Add to compare list" [ref=e175] [cursor=pointer]
                    - button "Add to wishlist" [ref=e176] [cursor=pointer]
    - contentinfo [ref=e177]:
      - generic [ref=e178]:
        - navigation [ref=e179]:
          - heading "Information" [level=2] [ref=e180]
          - menu "Information" [ref=e181]:
            - menuitem "Sitemap" [ref=e182]:
              - link "Sitemap" [ref=e183] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e184]:
              - link "Shipping & returns" [ref=e185] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e186]:
              - link "Privacy notice" [ref=e187] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e188]:
              - link "Conditions of Use" [ref=e189] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e190]:
              - link "About us" [ref=e191] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e192]:
              - link "Contact us" [ref=e193] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e194]
          - menu "Customer service" [ref=e195]:
            - menuitem "Search" [ref=e196]:
              - link "Search" [ref=e197] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e198]:
              - link "News" [ref=e199] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e200]:
              - link "Blog" [ref=e201] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e202]:
              - link "Recently viewed products" [ref=e203] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e204]:
              - link "Compare products list" [ref=e205] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e206]:
              - link "New products" [ref=e207] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e208]
          - menu "My account" [ref=e209]:
            - menuitem "My account" [ref=e210]:
              - link "My account" [ref=e211] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e212]:
              - link "Orders" [ref=e213] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e214]:
              - link "Addresses" [ref=e215] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e216]:
              - link "Shopping cart" [ref=e217] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e218]:
              - link "Wishlist" [ref=e219] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e220]:
              - link "Apply for vendor account" [ref=e221] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e222]:
          - generic [ref=e223]:
            - heading "Follow us" [level=2] [ref=e224]
            - list [ref=e225]:
              - listitem [ref=e226]:
                - link "Facebook" [ref=e227] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e228]:
                - link "Twitter" [ref=e229] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e230]:
                - link "RSS" [ref=e231] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e232]:
                - link "YouTube" [ref=e233] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e234]:
                - link "Instagram" [ref=e235] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e236]:
            - heading "Newsletter" [level=2] [ref=e237]
            - generic [ref=e239]:
              - textbox "Sign up for our newsletter" [ref=e240]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e241] [cursor=pointer]
      - generic [ref=e242]:
        - generic [ref=e243]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e244]:
          - text: Powered by
          - link "nopCommerce" [ref=e245] [cursor=pointer]:
            - /url: https://www.nopcommerce.com/
```

# Test source

```ts
  16  | 
  17  |   async function searchProduct(page, keyword) {
  18  |     await page.goto(`https://demo.nopcommerce.com/search?q=${encodeURIComponent(keyword)}`);
  19  |     await checkCloudflare(page);
  20  |     await expect(page.locator('h1')).toContainText('Search');
  21  |   }
  22  | 
  23  |   test('PRODUCT TC01 Search existing product', async ({ page }) => {
  24  |     await searchProduct(page, 'computer');
  25  |     await expect(page.locator('.product-item').first()).toBeVisible();
  26  |   });
  27  | 
  28  |   test('PRODUCT TC02 Search non-existing product', async ({ page }) => {
  29  |     await searchProduct(page, 'abcdefghxyz');
  30  |     await expect(page.locator('.no-result')).toContainText('No products were found');
  31  |   });
  32  | 
  33  |   test('PRODUCT TC03 Search with empty input should show alert', async ({ page }) => {
  34  |     await page.goto('https://demo.nopcommerce.com/');
  35  |     await checkCloudflare(page);
  36  | 
  37  |     page.once('dialog', async dialog => {
  38  |       expect(dialog.message()).toContain('Please enter some search keyword');
  39  |       await dialog.accept();
  40  |     });
  41  | 
  42  |     await page.locator('button.search-box-button').click();
  43  |   });
  44  | 
  45  |   test('PRODUCT TC04 Search product with uppercase letters', async ({ page }) => {
  46  |     await searchProduct(page, 'COMPUTER');
  47  |     await expect(page.locator('.product-item').first()).toBeVisible();
  48  |   });
  49  | 
  50  |   test('PRODUCT TC05 Search product with lowercase letters', async ({ page }) => {
  51  |     await searchProduct(page, 'computer');
  52  |     await expect(page.locator('.product-item').first()).toBeVisible();
  53  |   });
  54  | 
  55  |   test('PRODUCT TC06 Search product with partial keyword', async ({ page }) => {
  56  |     await searchProduct(page, 'comp');
  57  |     await expect(page.locator('.product-item').first()).toBeVisible();
  58  |   });
  59  | 
  60  |   test('PRODUCT TC07 Search apple product', async ({ page }) => {
  61  |     await searchProduct(page, 'apple');
  62  |     await expect(page.locator('.product-item').first()).toBeVisible();
  63  |   });
  64  | 
  65  |   test('PRODUCT TC08 Search book product', async ({ page }) => {
  66  |     await searchProduct(page, 'book');
  67  |     await expect(page.locator('.product-item').first()).toBeVisible();
  68  |   });
  69  | 
  70  |   test('PRODUCT TC09 Verify search page title', async ({ page }) => {
  71  |     await searchProduct(page, 'computer');
  72  |     await expect(page.locator('h1')).toContainText('Search');
  73  |   });
  74  | 
  75  |   test('PRODUCT TC10 Verify search keyword remains in input', async ({ page }) => {
  76  |     await searchProduct(page, 'computer');
  77  |     await expect(page.locator('#q')).toHaveValue('computer');
  78  |   });
  79  | 
  80  |   test('PRODUCT TC11 Open first product from search result', async ({ page }) => {
  81  |     await searchProduct(page, 'computer');
  82  |     await page.locator('.product-title a').first().click();
  83  |     await checkCloudflare(page);
  84  |     await expect(page.locator('h1')).toBeVisible();
  85  |   });
  86  | 
  87  |   test('PRODUCT TC12 Verify product price visible in search result', async ({ page }) => {
  88  |     await searchProduct(page, 'computer');
  89  |     await expect(page.locator('.prices').first()).toBeVisible();
  90  |   });
  91  | 
  92  |   test('PRODUCT TC13 Verify product image visible in search result', async ({ page }) => {
  93  |     await searchProduct(page, 'computer');
  94  |     await expect(page.locator('.picture img').first()).toBeVisible();
  95  |   });
  96  | 
  97  |   test('PRODUCT TC14 Verify product name visible in search result', async ({ page }) => {
  98  |     await searchProduct(page, 'computer');
  99  |     await expect(page.locator('.product-title').first()).toBeVisible();
  100 |   });
  101 | 
  102 |   test('PRODUCT TC15 Change sorting option', async ({ page }) => {
  103 |     await searchProduct(page, 'computer');
  104 |     await page.locator('#products-orderby').selectOption({ index: 1 });
  105 |     await expect(page.locator('.product-item').first()).toBeVisible();
  106 |   });
  107 | 
  108 |   test('PRODUCT TC16 Change display per page option', async ({ page }) => {
  109 |     await searchProduct(page, 'computer');
  110 |     await page.locator('#products-pagesize').selectOption({ index: 1 });
  111 |     await expect(page.locator('.product-item').first()).toBeVisible();
  112 |   });
  113 | 
  114 |   test('PRODUCT TC17 Change view mode', async ({ page }) => {
  115 |     await searchProduct(page, 'computer');
> 116 |     await page.locator('#products-viewmode').selectOption({ index: 1 });
      |                                              ^ Error: locator.selectOption: Test timeout of 90000ms exceeded.
  117 |     await expect(page.locator('.product-item').first()).toBeVisible();
  118 |   });
  119 | 
  120 |   test('PRODUCT TC18 Search with special characters', async ({ page }) => {
  121 |     await searchProduct(page, '@@@###');
  122 |     await expect(page.locator('.no-result')).toContainText('No products were found');
  123 |   });
  124 | 
  125 |   test('PRODUCT TC19 Search with numeric value', async ({ page }) => {
  126 |     await searchProduct(page, '12345');
  127 |     await expect(page.locator('.no-result')).toContainText('No products were found');
  128 |   });
  129 | 
  130 |   test('PRODUCT TC20 Search URL should contain search keyword', async ({ page }) => {
  131 |     await searchProduct(page, 'computer');
  132 |     await expect(page).toHaveURL(/q=computer/i);
  133 |   });
  134 | });
```