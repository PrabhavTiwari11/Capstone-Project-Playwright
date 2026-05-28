# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC16 Password recovery with invalid email should show validation
- Location: tests\authentication.spec.js:204:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "register"
Received string:    "https://demo.nopcommerce.com/passwordrecovery"
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
              - /url: /register?returnUrl=%2Fpasswordrecovery
          - listitem [ref=e14]:
            - link "Log in" [ref=e15] [cursor=pointer]:
              - /url: /login?returnUrl=%2Fpasswordrecovery
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
      - generic [ref=e55]:
        - heading "Password recovery" [level=1] [ref=e57]
        - generic [ref=e59]:
          - paragraph [ref=e60]: Please enter your email address below. You will receive a link to reset your password.
          - generic [ref=e63]:
            - generic [ref=e64]: "Your email address:"
            - textbox "Your email address:" [ref=e65]: wrongemail
            - text: "*"
            - generic [ref=e66]: Please enter a valid email address.
          - button "Recover" [active] [ref=e68] [cursor=pointer]
    - contentinfo [ref=e69]:
      - generic [ref=e70]:
        - navigation [ref=e71]:
          - heading "Information" [level=2] [ref=e72]
          - menu "Information" [ref=e73]:
            - menuitem "Sitemap" [ref=e74]:
              - link "Sitemap" [ref=e75] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e76]:
              - link "Shipping & returns" [ref=e77] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e78]:
              - link "Privacy notice" [ref=e79] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e80]:
              - link "Conditions of Use" [ref=e81] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e82]:
              - link "About us" [ref=e83] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e84]:
              - link "Contact us" [ref=e85] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e86]
          - menu "Customer service" [ref=e87]:
            - menuitem "Search" [ref=e88]:
              - link "Search" [ref=e89] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e90]:
              - link "News" [ref=e91] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e92]:
              - link "Blog" [ref=e93] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e94]:
              - link "Recently viewed products" [ref=e95] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e96]:
              - link "Compare products list" [ref=e97] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e98]:
              - link "New products" [ref=e99] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e100]
          - menu "My account" [ref=e101]:
            - menuitem "My account" [ref=e102]:
              - link "My account" [ref=e103] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e104]:
              - link "Orders" [ref=e105] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e106]:
              - link "Addresses" [ref=e107] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e108]:
              - link "Shopping cart" [ref=e109] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e110]:
              - link "Wishlist" [ref=e111] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e112]:
              - link "Apply for vendor account" [ref=e113] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e114]:
          - generic [ref=e115]:
            - heading "Follow us" [level=2] [ref=e116]
            - list [ref=e117]:
              - listitem [ref=e118]:
                - link "Facebook" [ref=e119] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e120]:
                - link "Twitter" [ref=e121] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e122]:
                - link "RSS" [ref=e123] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e124]:
                - link "YouTube" [ref=e125] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e126]:
                - link "Instagram" [ref=e127] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e128]:
            - heading "Newsletter" [level=2] [ref=e129]
            - generic [ref=e131]:
              - textbox "Sign up for our newsletter" [ref=e132]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e133] [cursor=pointer]
      - generic [ref=e134]:
        - generic [ref=e135]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e136]:
          - text: Powered by
          - link "nopCommerce" [ref=e137] [cursor=pointer]:
            - /url: https://www.nopcommerce.com/
```

# Test source

```ts
  111 | //     waitUntil: 'domcontentloaded',
  112 | //     timeout: 60000
  113 | //   });
  114 | 
  115 | //   await page.locator('#gender-male').check();
  116 | 
  117 | //   await page.locator('#FirstName').fill('Prabhav');
  118 | //   await page.locator('#LastName').fill('Tiwari');
  119 | //   await page.locator('#Email').fill(email);
  120 | 
  121 | //   await page.locator('#Company').fill('NIET');
  122 | 
  123 | //   await page.locator('#Password').fill('Password@123');
  124 | //   await page.locator('#ConfirmPassword').fill('Password@123');
  125 | 
  126 | //   await page.locator('#register-button').click();
  127 | 
  128 | //   await expect(page).toHaveURL(/registerresult/);
  129 | // });
  130 | 
  131 | //   test('AUTH TC07 Login page should open', async ({ page }) => {
  132 | //     await page.goto('/login');
  133 | 
  134 | //     await expect(page).toHaveURL(/login/);
  135 | //   });
  136 | 
  137 | //   test('AUTH TC08 Login form fields should be visible', async ({ page }) => {
  138 | //     await page.goto('/login');
  139 | 
  140 | //     await expect(page.locator('#Email')).toBeVisible();
  141 | //     await expect(page.locator('#Password')).toBeVisible();
  142 | //     await expect(page.locator('button.login-button')).toBeVisible();
  143 | //   });
  144 | 
  145 | //   test('AUTH TC09 Login with empty fields should show validation', async ({ page }) => {
  146 | //     await page.goto('/login');
  147 | 
  148 | //     await page.locator('button.login-button').click();
  149 | 
  150 | //     await expect(page.locator('#Email-error')).toBeVisible();
  151 | //   });
  152 | 
  153 |   // test('AUTH TC10 Login with invalid email format', async ({ page }) => {
  154 |   //   await page.goto('/login');
  155 | 
  156 |   //   await page.locator('#Email').fill('invalidemail');
  157 |   //   await page.locator('#Password').fill('Password@123');
  158 | 
  159 |   //   await page.locator('button.login-button').click();
  160 | 
  161 |   //   await expect(page.locator('#Email-error')).toBeVisible();
  162 |   // });
  163 | 
  164 |   test('AUTH TC11 Login with wrong credentials should show error', async ({ page }) => {
  165 |     await page.goto('/login');
  166 | 
  167 |     await page.locator('#Email').fill('wronguser@gmail.com');
  168 |     await page.locator('#Password').fill('WrongPassword@123');
  169 | 
  170 |     await page.locator('button.login-button').click();
  171 | 
  172 |     await expect(page.locator('body')).toContainText('Login was unsuccessful');  });
  173 | 
  174 |   test('AUTH TC12 Remember me checkbox should be clickable', async ({ page }) => {
  175 |     await page.goto('/login');
  176 | 
  177 |     await page.locator('#RememberMe').check();
  178 | 
  179 |     await expect(page.locator('#RememberMe')).toBeChecked();
  180 |   });
  181 | 
  182 |   test('AUTH TC13 Forgot password page should open', async ({ page }) => {
  183 |     await page.goto('/login');
  184 | 
  185 |     await page.locator('a[href="/passwordrecovery"]').click();
  186 | 
  187 |     await expect(page).toHaveURL(/passwordrecovery/);
  188 |   });
  189 | 
  190 |   test('AUTH TC14 Password recovery field should be visible', async ({ page }) => {
  191 |     await page.goto('/passwordrecovery');
  192 | 
  193 |     await expect(page.locator('#Email')).toBeVisible();
  194 |   });
  195 | 
  196 |   test('AUTH TC15 Password recovery with empty email should show validation', async ({ page }) => {
  197 |     await page.goto('/passwordrecovery');
  198 | 
  199 |     await page.locator('button.password-recovery-button').click();
  200 | 
  201 |     await expect(page.locator('#Email-error')).toBeVisible();
  202 |   });
  203 | 
  204 |   test('AUTH TC16 Password recovery with invalid email should show validation', async ({ page }) => {
  205 |     await page.goto('/passwordrecovery');
  206 | 
  207 |     await page.locator('#Email').fill('wrongemail');
  208 | 
  209 |     await page.locator('button.password-recovery-button').click();
  210 | 
> 211 |     await expect(page.url()).toContain('register');  });
      |                              ^ Error: expect(received).toContain(expected) // indexOf
  212 | 
  213 | test('AUTH TC17 Registration success message should appear', async ({ page }) => {
  214 | 
  215 |   const email = `testuser${Date.now()}@gmail.com`;
  216 | 
  217 |   await page.goto('/register');
  218 | 
  219 |   await page.locator('#FirstName').fill('Prabhav');
  220 |   await page.locator('#LastName').fill('Tiwari');
  221 |   await page.locator('#Email').fill(email);
  222 | 
  223 |   await page.locator('#Password').fill('Password@123');
  224 |   await page.locator('#ConfirmPassword').fill('Password@123');
  225 | 
  226 |   await page.locator('#register-button').click();
  227 | 
  228 |   await expect(page.locator('.result'))
  229 |     .toContainText('Your registration completed');
  230 | 
  231 | });
  232 | 
  233 | test('AUTH TC18 Register button should submit form', async ({ page }) => {
  234 | 
  235 |   const email = `testuser${Date.now()}@gmail.com`;
  236 | 
  237 |   await page.goto('/register');
  238 | 
  239 |   await page.locator('#FirstName').fill('Prabhav');
  240 |   await page.locator('#LastName').fill('Tiwari');
  241 |   await page.locator('#Email').fill(email);
  242 | 
  243 |   await page.locator('#Password').fill('Password@123');
  244 |   await page.locator('#ConfirmPassword').fill('Password@123');
  245 | 
  246 |   await page.locator('#register-button').click();
  247 | 
  248 |   await expect(page).toHaveURL(/register/);
  249 | 
  250 | });
  251 | test('AUTH TC19 Registration result page should open', async ({ page }) => {
  252 | 
  253 |   const email = `testuser${Date.now()}@gmail.com`;
  254 | 
  255 |   await page.goto('/register');
  256 | 
  257 |   await page.locator('#FirstName').fill('Prabhav');
  258 |   await page.locator('#LastName').fill('Tiwari');
  259 |   await page.locator('#Email').fill(email);
  260 | 
  261 |   await page.locator('#Password').fill('Password@123');
  262 |   await page.locator('#ConfirmPassword').fill('Password@123');
  263 | 
  264 |   await page.locator('#register-button').click();
  265 | 
  266 |   await expect(page.url()).toContain('register');
  267 | });
  268 | 
  269 | test('AUTH TC20 Continue button should be visible after registration', async ({ page }) => {
  270 | 
  271 |   const email = `testuser${Date.now()}@gmail.com`;
  272 | 
  273 |   await page.goto('/register');
  274 | 
  275 |   await page.locator('#FirstName').fill('Prabhav');
  276 |   await page.locator('#LastName').fill('Tiwari');
  277 |   await page.locator('#Email').fill(email);
  278 | 
  279 |   await page.locator('#Password').fill('Password@123');
  280 |   await page.locator('#ConfirmPassword').fill('Password@123');
  281 | 
  282 |   await page.locator('#register-button').click();
  283 | 
  284 |   await expect(page.locator('body')).toContainText('Register');
  285 | 
  286 | });
  287 | 
  288 | 
  289 | });
```