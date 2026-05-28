# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:26:6

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: /Shopping cart/i }) resolved to 2 elements:
    1) <a href="/cart" class="ico-cart">…</a> aka getByRole('link', { name: 'Shopping cart (0)' })
    2) <a href="/cart" class="footer-menu__link">Shopping cart</a> aka getByRole('link', { name: 'Shopping cart', exact: true })

Call log:
  - waiting for getByRole('link', { name: /Shopping cart/i })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - status
  - generic [ref=e3]:
    - banner [ref=e4]:
      - link "Skip navigation" [ref=e5] [cursor=pointer]:
        - /url: "#main"
      - generic [ref=e6]:
        - combobox "Currency selector" [ref=e9]:
          - option "US Dollar" [selected]
          - option "Euro"
        - list [ref=e12]:
          - listitem [ref=e13]:
            - link "Register" [ref=e14] [cursor=pointer]:
              - /url: /register?returnUrl=%2Fbuild-your-own-computer
          - listitem [ref=e15]:
            - link "Log in" [ref=e16] [cursor=pointer]:
              - /url: /login?returnUrl=%2Fbuild-your-own-computer
          - listitem [ref=e17]:
            - link "Wishlist (0)" [ref=e18] [cursor=pointer]:
              - /url: /wishlist
              - generic [ref=e19]: Wishlist
              - generic [ref=e20]: (0)
          - listitem [ref=e21]:
            - link "Shopping cart (0)" [ref=e22] [cursor=pointer]:
              - /url: /cart
              - generic [ref=e23]: Shopping cart
              - generic [ref=e24]: (0)
      - generic [ref=e25]:
        - link "nopCommerce demo store" [ref=e27] [cursor=pointer]:
          - /url: /
          - img "nopCommerce demo store" [ref=e28]
        - search [ref=e29]:
          - generic [ref=e30]:
            - textbox "Search store" [ref=e31]
            - button "Search" [ref=e32] [cursor=pointer]
    - navigation [ref=e34]:
      - menu "Categories" [ref=e35]:
        - menuitem "Computers" [ref=e36]:
          - button "Computers" [ref=e38] [cursor=pointer]
        - menuitem "Electronics" [ref=e39]:
          - button "Electronics" [ref=e41] [cursor=pointer]
        - menuitem "Apparel" [ref=e42]:
          - button "Apparel" [ref=e44] [cursor=pointer]
        - menuitem "Digital downloads" [ref=e45]:
          - button "Digital downloads" [ref=e46] [cursor=pointer]
        - menuitem "Books" [ref=e47]:
          - button "Books" [ref=e48] [cursor=pointer]
        - menuitem "Jewelry" [ref=e49]:
          - button "Jewelry" [ref=e50] [cursor=pointer]
        - menuitem "Gift Cards" [ref=e51]:
          - button "Gift Cards" [ref=e52] [cursor=pointer]
    - main [ref=e53]:
      - generic [ref=e54]:
        - list [ref=e56]:
          - listitem [ref=e57]:
            - link "Home" [ref=e59] [cursor=pointer]:
              - /url: /
              - generic [ref=e60]: Home
            - generic [ref=e61]: /
          - listitem [ref=e62]:
            - link "Computers" [ref=e63] [cursor=pointer]:
              - /url: /computers
              - generic [ref=e64]: Computers
            - generic [ref=e65]: /
          - listitem [ref=e66]:
            - link "Desktops" [ref=e67] [cursor=pointer]:
              - /url: /desktops
              - generic [ref=e68]: Desktops
            - generic [ref=e69]: /
          - listitem [ref=e70]:
            - strong [ref=e71]: Build your own computer
        - generic [ref=e74]:
          - article [ref=e76]:
            - generic [ref=e77]:
              - generic [ref=e79]:
                - img "Picture of Build your own computer" [ref=e81]
                - generic [ref=e82]:
                  - img "Picture of Build your own computer" [ref=e84] [cursor=pointer]
                  - img "Picture of Build your own computer" [ref=e86] [cursor=pointer]
              - generic [ref=e87]:
                - heading "Build your own computer" [level=1] [ref=e89]
                - generic [ref=e90]: Build it
                - link "1 review(s)" [ref=e96] [cursor=pointer]:
                  - /url: "#productreviews"
                - generic [ref=e98]: "SKU: COMP_CUST"
                - generic [ref=e100]: Free shipping
                - generic [ref=e102]:
                  - term [ref=e103]: Processor *
                  - definition [ref=e104]:
                    - combobox "Processor" [ref=e105]:
                      - option "Please select"
                      - option "2.2 GHz Intel Pentium Dual-Core E2200" [selected]
                      - option "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]"
                  - term [ref=e106]: RAM *
                  - definition [ref=e107]:
                    - combobox "RAM" [ref=e108]:
                      - option "Please select"
                      - option "2 GB" [selected]
                      - option "4GB [+$20.00]"
                      - option "8GB [+$60.00]"
                  - term [ref=e109]: HDD *
                  - definition [ref=e110]:
                    - list [ref=e111]:
                      - listitem [ref=e112]:
                        - radio "320 GB" [checked] [ref=e113]
                        - text: 320 GB
                      - listitem [ref=e114]:
                        - radio "400 GB [+$100.00]" [ref=e115]
                        - text: 400 GB [+$100.00]
                  - term [ref=e116]: OS *
                  - definition [ref=e117]:
                    - list [ref=e118]:
                      - listitem [ref=e119]:
                        - radio "Vista Home [+$50.00]" [checked] [ref=e120]
                        - text: Vista Home [+$50.00]
                      - listitem [ref=e121]:
                        - radio "Vista Premium [+$60.00]" [ref=e122]
                        - text: Vista Premium [+$60.00]
                  - term [ref=e123]: Software
                  - definition [ref=e124]:
                    - list [ref=e125]:
                      - listitem [ref=e126]:
                        - checkbox "Microsoft Office [+$50.00]" [checked] [ref=e127]
                        - text: Microsoft Office [+$50.00]
                      - listitem [ref=e128]:
                        - checkbox "Acrobat Reader [+$10.00]" [ref=e129]
                        - text: Acrobat Reader [+$10.00]
                      - listitem [ref=e130]:
                        - checkbox "Total Commander [+$5.00]" [ref=e131]
                        - text: Total Commander [+$5.00]
                - generic [ref=e133]: $1,200.00
                - generic [ref=e135]:
                  - textbox "Enter a quantity" [ref=e136]: "1"
                  - button "Add to cart" [active] [ref=e137] [cursor=pointer]
                - generic [ref=e138]:
                  - button "Add to wishlist" [ref=e140] [cursor=pointer]
                  - button "Add to compare list" [ref=e142] [cursor=pointer]
                  - button "Email a friend" [ref=e144] [cursor=pointer]
                - generic [ref=e146]:
                  - img "whatsapp sharing button" [ref=e148] [cursor=pointer]
                  - img "facebook sharing button" [ref=e150] [cursor=pointer]
                  - img "twitter sharing button" [ref=e152] [cursor=pointer]
              - paragraph [ref=e154]: Fight back against cluttered workspaces with the stylish IBM zBC12 All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning XBRITE-HiColor LCD technology. The black IBM zBC12 has a built-in microphone and MOTION EYE camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner and Sony's Movie Store software so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, this JS-series All-in-One includes an elegantly designed keyboard and a USB mouse.
            - generic [ref=e156]:
              - heading "Product tags" [level=2] [ref=e157]
              - list [ref=e159]:
                - listitem [ref=e160]:
                  - link "awesome" [ref=e161] [cursor=pointer]:
                    - /url: /awesome
                  - text: (18)
                - listitem [ref=e162]: ","
                - listitem [ref=e163]:
                  - link "computer" [ref=e164] [cursor=pointer]:
                    - /url: /computer
                  - text: (14)
            - generic [ref=e165]:
              - heading "Customers who bought this item also bought" [level=2] [ref=e166]
              - generic [ref=e167]:
                - article [ref=e169]:
                  - link "Picture of Apple MacBook Pro" [ref=e171] [cursor=pointer]:
                    - /url: /apple-macbook-pro
                    - img "Picture of Apple MacBook Pro" [ref=e172]
                  - generic [ref=e173]:
                    - heading "Apple MacBook Pro" [level=2] [ref=e174]:
                      - link "Apple MacBook Pro" [ref=e175] [cursor=pointer]:
                        - /url: /apple-macbook-pro
                    - generic "1 review(s)" [ref=e176]
                    - generic [ref=e179]:
                      - generic [ref=e180]: $1,800.00
                      - generic [ref=e181]:
                        - button "Add to cart" [ref=e182] [cursor=pointer]
                        - button "Add to compare list" [ref=e183] [cursor=pointer]
                        - button "Add to wishlist" [ref=e184] [cursor=pointer]
                - article [ref=e186]:
                  - link "Picture of Microsoft Windows OS" [ref=e188] [cursor=pointer]:
                    - /url: /microsoft-windows-os
                    - img "Picture of Microsoft Windows OS" [ref=e189]
                  - generic [ref=e190]:
                    - heading "Microsoft Windows OS" [level=2] [ref=e191]:
                      - link "Microsoft Windows OS" [ref=e192] [cursor=pointer]:
                        - /url: /microsoft-windows-os
                    - generic "1 review(s)" [ref=e193]
                    - generic [ref=e196]:
                      - generic [ref=e197]: $65.00
                      - generic [ref=e198]:
                        - button "Add to cart" [ref=e199] [cursor=pointer]
                        - button "Add to compare list" [ref=e200] [cursor=pointer]
                        - button "Add to wishlist" [ref=e201] [cursor=pointer]
                - article [ref=e203]:
                  - link "Picture of Digital Storm VANQUISH Custom Performance PC" [ref=e205] [cursor=pointer]:
                    - /url: /digital-storm-vanquish-custom-performance-pc
                    - img "Picture of Digital Storm VANQUISH Custom Performance PC" [ref=e206]
                  - generic [ref=e207]:
                    - heading "Digital Storm VANQUISH Custom Performance PC" [level=2] [ref=e208]:
                      - link "Digital Storm VANQUISH Custom Performance PC" [ref=e209] [cursor=pointer]:
                        - /url: /digital-storm-vanquish-custom-performance-pc
                    - generic "1 review(s)" [ref=e210]
                    - generic [ref=e213]:
                      - generic [ref=e214]: $1,259.00
                      - generic [ref=e215]:
                        - button "Add to cart" [ref=e216] [cursor=pointer]
                        - button "Add to compare list" [ref=e217] [cursor=pointer]
                        - button "Add to wishlist" [ref=e218] [cursor=pointer]
          - generic [ref=e219]:
            - generic [ref=e220]:
              - heading "Existing reviews" [level=2] [ref=e221]
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - strong [ref=e225]: Some sample review
                  - generic [ref=e228]: "4"
                - generic [ref=e229]:
                  - generic [ref=e231]: This sample review is for the Build your own computer. I've been waiting for this product to be available. It is priced just right.
                  - generic [ref=e232]:
                    - generic [ref=e233]: "From: John"
                    - text: "|"
                    - generic [ref=e234]: "Date: 11/4/2025 4:41 AM"
                  - generic [ref=e235]:
                    - text: Was this review helpful?
                    - generic [ref=e236]:
                      - generic [ref=e237] [cursor=pointer]: "Yes"
                      - generic [ref=e238] [cursor=pointer]: "No"
                    - generic [ref=e239]: (0/0)
            - generic [ref=e240]: Only registered users can write reviews
    - contentinfo [ref=e241]:
      - generic [ref=e242]:
        - navigation [ref=e243]:
          - heading "Information" [level=2] [ref=e244]
          - menu "Information" [ref=e245]:
            - menuitem "Sitemap" [ref=e246]:
              - link "Sitemap" [ref=e247] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e248]:
              - link "Shipping & returns" [ref=e249] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e250]:
              - link "Privacy notice" [ref=e251] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e252]:
              - link "Conditions of Use" [ref=e253] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e254]:
              - link "About us" [ref=e255] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e256]:
              - link "Contact us" [ref=e257] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e258]
          - menu "Customer service" [ref=e259]:
            - menuitem "Search" [ref=e260]:
              - link "Search" [ref=e261] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e262]:
              - link "News" [ref=e263] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e264]:
              - link "Blog" [ref=e265] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e266]:
              - link "Recently viewed products" [ref=e267] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e268]:
              - link "Compare products list" [ref=e269] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e270]:
              - link "New products" [ref=e271] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e272]
          - menu "My account" [ref=e273]:
            - menuitem "My account" [ref=e274]:
              - link "My account" [ref=e275] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e276]:
              - link "Orders" [ref=e277] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e278]:
              - link "Addresses" [ref=e279] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e280]:
              - link "Shopping cart" [ref=e281] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e282]:
              - link "Wishlist" [ref=e283] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e284]:
              - link "Apply for vendor account" [ref=e285] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e286]:
          - generic [ref=e287]:
            - heading "Follow us" [level=2] [ref=e288]
            - list [ref=e289]:
              - listitem [ref=e290]:
                - link "Facebook" [ref=e291] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e292]:
                - link "Twitter" [ref=e293] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e294]:
                - link "RSS" [ref=e295] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e296]:
                - link "YouTube" [ref=e297] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e298]:
                - link "Instagram" [ref=e299] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e300]:
            - heading "Newsletter" [level=2] [ref=e301]
            - generic [ref=e303]:
              - textbox "Sign up for our newsletter" [ref=e304]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e305] [cursor=pointer]
      - generic [ref=e306]:
        - generic [ref=e307]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e308]:
          - text: Powered by
          - link "nopCommerce" [ref=e309] [cursor=pointer]:
            - /url: https://www.nopcommerce.com/
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('nopCommerce Shopping Cart Test Cases', () => {
  4   | 
  5   | async function addProductToCart(page) {
  6   |   await page.goto('https://demo.nopcommerce.com/build-your-own-computer');
  7   | 
  8   |   await page.locator('#product_attribute_1').selectOption({ index: 1 });
  9   |   await page.locator('#product_attribute_2').selectOption({ index: 1 });
  10  |   await page.locator('#product_attribute_3_6').check();
  11  | 
  12  |   await page.locator('#add-to-cart-button-1').click();
  13  |   await page.waitForTimeout(2000);
  14  | 
> 15  |   await page.getByRole('link', { name: /Shopping cart/i }).click();
      |                                                            ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: /Shopping cart/i }) resolved to 2 elements:
  16  | 
  17  |   await expect(page.getByRole('heading', { name: 'Shopping cart' })).toBeVisible();
  18  | 
  19  | }
  20  |   test('CART TC01 Open empty shopping cart', async ({ page }) => {
  21  |     await page.goto('/cart');
  22  | 
  23  |     await expect(page.locator('.page-title')).toContainText('Shopping cart');
  24  |   });
  25  | 
  26  | test.only('CART TC02 Add product to cart', async ({ page }) => {
  27  | 
  28  |   await addProductToCart(page);
  29  | 
  30  |   await page.pause();
  31  | 
  32  | });
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
  52  | //   test('CART TC06 Update product quantity', async ({ page }) => {
  53  | //     await addProductToCart(page);
  54  | 
  55  | //     await page.locator('.qty-input').first().fill('3');
  56  | //     await page.locator('#updatecart').click();
  57  | 
  58  | //     await expect(page.locator('.qty-input').first()).toHaveValue('3');
  59  | //   });
  60  | 
  61  | //   test('CART TC07 Remove product using remove button', async ({ page }) => {
  62  | //     await addProductToCart(page);
  63  | 
  64  | //     await page.locator('.remove-btn').first().click();
  65  | 
  66  | //     await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty');
  67  | //   });
  68  | 
  69  | //   test('CART TC08 Cart total should be visible', async ({ page }) => {
  70  | //     await addProductToCart(page);
  71  | 
  72  | //     await expect(page.locator('.cart-total')).toBeVisible();
  73  | //   });
  74  | 
  75  | //   test('CART TC09 Discount code field should be visible', async ({ page }) => {
  76  | //     await addProductToCart(page);
  77  | 
  78  | //     await expect(page.locator('#discountcouponcode')).toBeVisible();
  79  | //   });
  80  | 
  81  | //   test('CART TC10 Apply invalid discount code', async ({ page }) => {
  82  | //     await addProductToCart(page);
  83  | 
  84  | //     await page.locator('#discountcouponcode').fill('INVALID123');
  85  | //     await page.locator('#applydiscountcouponcode').click();
  86  | 
  87  | //     await expect(page.locator('.message-failure')).toBeVisible();
  88  | //   });
  89  | 
  90  | //   test('CART TC11 Apply empty discount code', async ({ page }) => {
  91  | //     await addProductToCart(page);
  92  | 
  93  | //     await page.locator('#applydiscountcouponcode').click();
  94  | 
  95  | //     await expect(page.locator('.message-failure')).toBeVisible();
  96  | //   });
  97  | 
  98  | //   test('CART TC12 Gift card field should be visible', async ({ page }) => {
  99  | //     await addProductToCart(page);
  100 | 
  101 | //     await expect(page.locator('#giftcardcouponcode')).toBeVisible();
  102 | //   });
  103 | 
  104 | //   test('CART TC13 Apply invalid gift card code', async ({ page }) => {
  105 | //     await addProductToCart(page);
  106 | 
  107 | //     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  108 | //     await page.locator('#applygiftcardcouponcode').click();
  109 | 
  110 | //     await expect(page.locator('.message-failure')).toBeVisible();
  111 | //   });
  112 | 
  113 | //   test('CART TC14 Terms of service checkbox should be visible', async ({ page }) => {
  114 | //     await addProductToCart(page);
  115 | 
```