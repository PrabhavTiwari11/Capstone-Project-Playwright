# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> nopCommerce Shopping Cart Test Cases >> CART TC02 Add product to cart
- Location: tests\cart.spec.js:27:6

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Add to cart' }) resolved to 4 elements:
    1) <button type="button" data-productid="1" id="add-to-cart-button-1" class="button-1 add-to-cart-button" onclick="if (!window.__cfRLUnblockHandlers) return false; return AjaxCart.addproducttocart_details("/addproducttocart/details/1/1","#product-details-form"),!1">Add to cart</button> aka locator('#add-to-cart-button-1')
    2) <button type="button" class="button-2 product-box-add-to-cart-button" onclick="if (!window.__cfRLUnblockHandlers) return false; return AjaxCart.addproducttocart_catalog("/addproducttocart/catalog/4/1/1"),!1">Add to cart</button> aka getByRole('button', { name: 'Add to cart' }).nth(1)
    3) <button type="button" class="button-2 product-box-add-to-cart-button" onclick="if (!window.__cfRLUnblockHandlers) return false; return AjaxCart.addproducttocart_catalog("/addproducttocart/catalog/11/1/1"),!1">Add to cart</button> aka getByRole('button', { name: 'Add to cart' }).nth(2)
    4) <button type="button" class="button-2 product-box-add-to-cart-button" onclick="if (!window.__cfRLUnblockHandlers) return false; return AjaxCart.addproducttocart_catalog("/addproducttocart/catalog/2/1/1"),!1">Add to cart</button> aka getByRole('button', { name: 'Add to cart' }).nth(3)

Call log:
  - waiting for getByRole('button', { name: 'Add to cart' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - /url: /register?returnUrl=%2Fbuild-your-own-computer
          - listitem [ref=e14]:
            - link "Log in" [ref=e15] [cursor=pointer]:
              - /url: /login?returnUrl=%2Fbuild-your-own-computer
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
        - list [ref=e55]:
          - listitem [ref=e56]:
            - link "Home" [ref=e58] [cursor=pointer]:
              - /url: /
              - generic [ref=e59]: Home
            - generic [ref=e60]: /
          - listitem [ref=e61]:
            - link "Computers" [ref=e62] [cursor=pointer]:
              - /url: /computers
              - generic [ref=e63]: Computers
            - generic [ref=e64]: /
          - listitem [ref=e65]:
            - link "Desktops" [ref=e66] [cursor=pointer]:
              - /url: /desktops
              - generic [ref=e67]: Desktops
            - generic [ref=e68]: /
          - listitem [ref=e69]:
            - strong [ref=e70]: Build your own computer
        - generic [ref=e73]:
          - article [ref=e75]:
            - generic [ref=e76]:
              - generic [ref=e78]:
                - img "Picture of Build your own computer" [ref=e80]
                - generic [ref=e81]:
                  - img "Picture of Build your own computer" [ref=e83] [cursor=pointer]
                  - img "Picture of Build your own computer" [ref=e85] [cursor=pointer]
              - generic [ref=e86]:
                - heading "Build your own computer" [level=1] [ref=e88]
                - generic [ref=e89]: Build it
                - link "1 review(s)" [ref=e95] [cursor=pointer]:
                  - /url: "#productreviews"
                - generic [ref=e97]: "SKU: COMP_CUST"
                - generic [ref=e99]: Free shipping
                - generic [ref=e101]:
                  - term [ref=e102]: Processor *
                  - definition [ref=e103]:
                    - combobox "Processor" [ref=e104]:
                      - option "Please select"
                      - option "2.2 GHz Intel Pentium Dual-Core E2200" [selected]
                      - option "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]"
                  - term [ref=e105]: RAM *
                  - definition [ref=e106]:
                    - combobox "RAM" [ref=e107]:
                      - option "Please select"
                      - option "2 GB" [selected]
                      - option "4GB [+$20.00]"
                      - option "8GB [+$60.00]"
                  - term [ref=e108]: HDD *
                  - definition [ref=e109]:
                    - list [ref=e110]:
                      - listitem [ref=e111]:
                        - radio "320 GB" [checked] [active] [ref=e112]
                        - text: 320 GB
                      - listitem [ref=e113]:
                        - radio "400 GB [+$100.00]" [ref=e114]
                        - text: 400 GB [+$100.00]
                  - term [ref=e115]: OS *
                  - definition [ref=e116]:
                    - list [ref=e117]:
                      - listitem [ref=e118]:
                        - radio "Vista Home [+$50.00]" [checked] [ref=e119]
                        - text: Vista Home [+$50.00]
                      - listitem [ref=e120]:
                        - radio "Vista Premium [+$60.00]" [ref=e121]
                        - text: Vista Premium [+$60.00]
                  - term [ref=e122]: Software
                  - definition [ref=e123]:
                    - list [ref=e124]:
                      - listitem [ref=e125]:
                        - checkbox "Microsoft Office [+$50.00]" [checked] [ref=e126]
                        - text: Microsoft Office [+$50.00]
                      - listitem [ref=e127]:
                        - checkbox "Acrobat Reader [+$10.00]" [ref=e128]
                        - text: Acrobat Reader [+$10.00]
                      - listitem [ref=e129]:
                        - checkbox "Total Commander [+$5.00]" [ref=e130]
                        - text: Total Commander [+$5.00]
                - generic [ref=e132]: $1,200.00
                - generic [ref=e134]:
                  - textbox "Enter a quantity" [ref=e135]: "1"
                  - button "Add to cart" [ref=e136] [cursor=pointer]
                - generic [ref=e137]:
                  - button "Add to wishlist" [ref=e139] [cursor=pointer]
                  - button "Add to compare list" [ref=e141] [cursor=pointer]
                  - button "Email a friend" [ref=e143] [cursor=pointer]
                - generic [ref=e145]:
                  - img "whatsapp sharing button" [ref=e147] [cursor=pointer]
                  - img "facebook sharing button" [ref=e149] [cursor=pointer]
                  - img "twitter sharing button" [ref=e151] [cursor=pointer]
              - paragraph [ref=e153]: Fight back against cluttered workspaces with the stylish IBM zBC12 All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning XBRITE-HiColor LCD technology. The black IBM zBC12 has a built-in microphone and MOTION EYE camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner and Sony's Movie Store software so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, this JS-series All-in-One includes an elegantly designed keyboard and a USB mouse.
            - generic [ref=e155]:
              - heading "Product tags" [level=2] [ref=e156]
              - list [ref=e158]:
                - listitem [ref=e159]:
                  - link "awesome" [ref=e160] [cursor=pointer]:
                    - /url: /awesome
                  - text: (18)
                - listitem [ref=e161]: ","
                - listitem [ref=e162]:
                  - link "computer" [ref=e163] [cursor=pointer]:
                    - /url: /computer
                  - text: (14)
            - generic [ref=e164]:
              - heading "Customers who bought this item also bought" [level=2] [ref=e165]
              - generic [ref=e166]:
                - article [ref=e168]:
                  - link "Picture of Apple MacBook Pro" [ref=e170] [cursor=pointer]:
                    - /url: /apple-macbook-pro
                    - img "Picture of Apple MacBook Pro" [ref=e171]
                  - generic [ref=e172]:
                    - heading "Apple MacBook Pro" [level=2] [ref=e173]:
                      - link "Apple MacBook Pro" [ref=e174] [cursor=pointer]:
                        - /url: /apple-macbook-pro
                    - generic "1 review(s)" [ref=e175]
                    - generic [ref=e178]:
                      - generic [ref=e179]: $1,800.00
                      - generic [ref=e180]:
                        - button "Add to cart" [ref=e181] [cursor=pointer]
                        - button "Add to compare list" [ref=e182] [cursor=pointer]
                        - button "Add to wishlist" [ref=e183] [cursor=pointer]
                - article [ref=e185]:
                  - link "Picture of Microsoft Windows OS" [ref=e187] [cursor=pointer]:
                    - /url: /microsoft-windows-os
                    - img "Picture of Microsoft Windows OS" [ref=e188]
                  - generic [ref=e189]:
                    - heading "Microsoft Windows OS" [level=2] [ref=e190]:
                      - link "Microsoft Windows OS" [ref=e191] [cursor=pointer]:
                        - /url: /microsoft-windows-os
                    - generic "1 review(s)" [ref=e192]
                    - generic [ref=e195]:
                      - generic [ref=e196]: $65.00
                      - generic [ref=e197]:
                        - button "Add to cart" [ref=e198] [cursor=pointer]
                        - button "Add to compare list" [ref=e199] [cursor=pointer]
                        - button "Add to wishlist" [ref=e200] [cursor=pointer]
                - article [ref=e202]:
                  - link "Picture of Digital Storm VANQUISH Custom Performance PC" [ref=e204] [cursor=pointer]:
                    - /url: /digital-storm-vanquish-custom-performance-pc
                    - img "Picture of Digital Storm VANQUISH Custom Performance PC" [ref=e205]
                  - generic [ref=e206]:
                    - heading "Digital Storm VANQUISH Custom Performance PC" [level=2] [ref=e207]:
                      - link "Digital Storm VANQUISH Custom Performance PC" [ref=e208] [cursor=pointer]:
                        - /url: /digital-storm-vanquish-custom-performance-pc
                    - generic "1 review(s)" [ref=e209]
                    - generic [ref=e212]:
                      - generic [ref=e213]: $1,259.00
                      - generic [ref=e214]:
                        - button "Add to cart" [ref=e215] [cursor=pointer]
                        - button "Add to compare list" [ref=e216] [cursor=pointer]
                        - button "Add to wishlist" [ref=e217] [cursor=pointer]
          - generic [ref=e218]:
            - generic [ref=e219]:
              - heading "Existing reviews" [level=2] [ref=e220]
              - generic [ref=e221]:
                - generic [ref=e222]:
                  - strong [ref=e224]: Some sample review
                  - generic [ref=e227]: "4"
                - generic [ref=e228]:
                  - generic [ref=e230]: This sample review is for the Build your own computer. I've been waiting for this product to be available. It is priced just right.
                  - generic [ref=e231]:
                    - generic [ref=e232]: "From: John"
                    - text: "|"
                    - generic [ref=e233]: "Date: 11/4/2025 4:41 AM"
                  - generic [ref=e234]:
                    - text: Was this review helpful?
                    - generic [ref=e235]:
                      - generic [ref=e236] [cursor=pointer]: "Yes"
                      - generic [ref=e237] [cursor=pointer]: "No"
                    - generic [ref=e238]: (0/0)
            - generic [ref=e239]: Only registered users can write reviews
    - contentinfo [ref=e240]:
      - generic [ref=e241]:
        - navigation [ref=e242]:
          - heading "Information" [level=2] [ref=e243]
          - menu "Information" [ref=e244]:
            - menuitem "Sitemap" [ref=e245]:
              - link "Sitemap" [ref=e246] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e247]:
              - link "Shipping & returns" [ref=e248] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e249]:
              - link "Privacy notice" [ref=e250] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e251]:
              - link "Conditions of Use" [ref=e252] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e253]:
              - link "About us" [ref=e254] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e255]:
              - link "Contact us" [ref=e256] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e257]
          - menu "Customer service" [ref=e258]:
            - menuitem "Search" [ref=e259]:
              - link "Search" [ref=e260] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e261]:
              - link "News" [ref=e262] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e263]:
              - link "Blog" [ref=e264] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e265]:
              - link "Recently viewed products" [ref=e266] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e267]:
              - link "Compare products list" [ref=e268] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e269]:
              - link "New products" [ref=e270] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e271]
          - menu "My account" [ref=e272]:
            - menuitem "My account" [ref=e273]:
              - link "My account" [ref=e274] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e275]:
              - link "Orders" [ref=e276] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e277]:
              - link "Addresses" [ref=e278] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e279]:
              - link "Shopping cart" [ref=e280] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e281]:
              - link "Wishlist" [ref=e282] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e283]:
              - link "Apply for vendor account" [ref=e284] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e285]:
          - generic [ref=e286]:
            - heading "Follow us" [level=2] [ref=e287]
            - list [ref=e288]:
              - listitem [ref=e289]:
                - link "Facebook" [ref=e290] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e291]:
                - link "Twitter" [ref=e292] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e293]:
                - link "RSS" [ref=e294] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e295]:
                - link "YouTube" [ref=e296] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e297]:
                - link "Instagram" [ref=e298] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e299]:
            - heading "Newsletter" [level=2] [ref=e300]
            - generic [ref=e302]:
              - textbox "Sign up for our newsletter" [ref=e303]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e304] [cursor=pointer]
      - generic [ref=e305]:
        - generic [ref=e306]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e307]:
          - text: Powered by
          - link "nopCommerce" [ref=e308] [cursor=pointer]:
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
> 12  |   await page.getByRole('button', { name: 'Add to cart' }).click();
      |                                                           ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Add to cart' }) resolved to 4 elements:
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
  107 | 
  108 | //     await page.locator('#giftcardcouponcode').fill('WRONGGIFT123');
  109 | //     await page.locator('#applygiftcardcouponcode').click();
  110 | 
  111 | //     await expect(page.locator('.message-failure')).toBeVisible();
  112 | //   });
```