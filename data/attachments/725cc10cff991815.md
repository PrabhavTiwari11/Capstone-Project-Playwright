# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC16 Password recovery with invalid email should show validation
- Location: tests\authentication.spec.js:218:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://demo.nopcommerce.com/passwordrecovery", waiting until "load"

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
        - generic:
          - link "nopCommerce demo store":
            - /url: /
            - img "nopCommerce demo store"
        - search [ref=e25]:
          - generic [ref=e26]:
            - textbox "Search store" [ref=e27]
            - button "Search" [ref=e28] [cursor=pointer]
    - navigation [ref=e30]:
      - menu "Categories" [ref=e31]:
        - menuitem "Computers" [ref=e32]:
          - button "Computers" [ref=e34] [cursor=pointer]
        - menuitem "Electronics" [ref=e35]:
          - button "Electronics" [ref=e37] [cursor=pointer]
        - menuitem "Apparel" [ref=e38]:
          - button "Apparel" [ref=e40] [cursor=pointer]
        - menuitem "Digital downloads" [ref=e41]:
          - button "Digital downloads" [ref=e42] [cursor=pointer]
        - menuitem "Books" [ref=e43]:
          - button "Books" [ref=e44] [cursor=pointer]
        - menuitem "Jewelry" [ref=e45]:
          - button "Jewelry" [ref=e46] [cursor=pointer]
        - menuitem "Gift Cards" [ref=e47]:
          - button "Gift Cards" [ref=e48] [cursor=pointer]
    - main [ref=e49]:
      - generic [ref=e52]:
        - heading "Password recovery" [level=1] [ref=e54]
        - generic [ref=e56]:
          - paragraph [ref=e57]: Please enter your email address below. You will receive a link to reset your password.
          - generic [ref=e60]:
            - generic [ref=e61]: "Your email address:"
            - textbox "Your email address:" [ref=e62]
            - text: "*"
          - button "Recover" [ref=e64] [cursor=pointer]
    - contentinfo [ref=e65]:
      - generic [ref=e66]:
        - navigation [ref=e67]:
          - heading "Information" [level=2] [ref=e68]
          - menu "Information" [ref=e69]:
            - menuitem "Sitemap" [ref=e70]:
              - link "Sitemap" [ref=e71] [cursor=pointer]:
                - /url: /sitemap
            - menuitem "Shipping & returns" [ref=e72]:
              - link "Shipping & returns" [ref=e73] [cursor=pointer]:
                - /url: /shipping-returns
            - menuitem "Privacy notice" [ref=e74]:
              - link "Privacy notice" [ref=e75] [cursor=pointer]:
                - /url: /privacy-notice
            - menuitem "Conditions of Use" [ref=e76]:
              - link "Conditions of Use" [ref=e77] [cursor=pointer]:
                - /url: /conditions-of-use
            - menuitem "About us" [ref=e78]:
              - link "About us" [ref=e79] [cursor=pointer]:
                - /url: /about-us
            - menuitem "Contact us" [ref=e80]:
              - link "Contact us" [ref=e81] [cursor=pointer]:
                - /url: /contactus
          - heading "Customer service" [level=2] [ref=e82]
          - menu "Customer service" [ref=e83]:
            - menuitem "Search" [ref=e84]:
              - link "Search" [ref=e85] [cursor=pointer]:
                - /url: /search
            - menuitem "News" [ref=e86]:
              - link "News" [ref=e87] [cursor=pointer]:
                - /url: /news
            - menuitem "Blog" [ref=e88]:
              - link "Blog" [ref=e89] [cursor=pointer]:
                - /url: /blog
            - menuitem "Recently viewed products" [ref=e90]:
              - link "Recently viewed products" [ref=e91] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - menuitem "Compare products list" [ref=e92]:
              - link "Compare products list" [ref=e93] [cursor=pointer]:
                - /url: /compareproducts
            - menuitem "New products" [ref=e94]:
              - link "New products" [ref=e95] [cursor=pointer]:
                - /url: /newproducts
          - heading "My account" [level=2] [ref=e96]
          - menu "My account" [ref=e97]:
            - menuitem "My account" [ref=e98]:
              - link "My account" [ref=e99] [cursor=pointer]:
                - /url: /customer/info
            - menuitem "Orders" [ref=e100]:
              - link "Orders" [ref=e101] [cursor=pointer]:
                - /url: /order/history
            - menuitem "Addresses" [ref=e102]:
              - link "Addresses" [ref=e103] [cursor=pointer]:
                - /url: /customer/addresses
            - menuitem "Shopping cart" [ref=e104]:
              - link "Shopping cart" [ref=e105] [cursor=pointer]:
                - /url: /cart
            - menuitem "Wishlist" [ref=e106]:
              - link "Wishlist" [ref=e107] [cursor=pointer]:
                - /url: /wishlist
            - menuitem "Apply for vendor account" [ref=e108]:
              - link "Apply for vendor account" [ref=e109] [cursor=pointer]:
                - /url: /vendor/apply
        - generic [ref=e110]:
          - generic [ref=e111]:
            - heading "Follow us" [level=2] [ref=e112]
            - list [ref=e113]:
              - listitem [ref=e114]:
                - link "Facebook" [ref=e115] [cursor=pointer]:
                  - /url: https://www.facebook.com/nopCommerce
              - listitem [ref=e116]:
                - link "Twitter" [ref=e117] [cursor=pointer]:
                  - /url: https://twitter.com/nopCommerce
              - listitem [ref=e118]:
                - link "RSS" [ref=e119] [cursor=pointer]:
                  - /url: /news/rss/1
              - listitem [ref=e120]:
                - link "YouTube" [ref=e121] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/nopCommerce
              - listitem [ref=e122]:
                - link "Instagram" [ref=e123] [cursor=pointer]:
                  - /url: https://www.instagram.com/nopcommerce_official
          - form [ref=e124]:
            - heading "Newsletter" [level=2] [ref=e125]
            - generic [ref=e127]:
              - textbox "Sign up for our newsletter" [ref=e128]:
                - /placeholder: Enter your email here...
              - button "Subscribe" [ref=e129] [cursor=pointer]
      - generic [ref=e130]:
        - generic [ref=e131]: Copyright © 2026 nopCommerce demo store. All rights reserved.
        - generic [ref=e132]:
          - text: Powered by
          - link "nopCommerce" [ref=e133] [cursor=pointer]:
            - /url: https://www.nopcommerce.com/
```

# Test source

```ts
  120 |   await page.locator('#Company').fill('NIET');
  121 | 
  122 |   await page.locator('#Password').fill('Password@123');
  123 |   await page.locator('#ConfirmPassword').fill('Password@123');
  124 | 
  125 |   await page.locator('#register-button').click();
  126 | 
  127 |   await expect(page).toHaveURL(/registerresult/);
  128 | });
  129 | 
  130 |   test('AUTH TC07 Login page should open', async ({ page }) => {
  131 |     await page.goto('/login');
  132 | 
  133 |     await expect(page).toHaveURL(/login/);
  134 |   });
  135 | 
  136 |   test('AUTH TC08 Login form fields should be visible', async ({ page }) => {
  137 |     await page.goto('/login');
  138 | 
  139 |     await expect(page.locator('#Email')).toBeVisible();
  140 |     await expect(page.locator('#Password')).toBeVisible();
  141 |     await expect(page.locator('button.login-button')).toBeVisible();
  142 |   });
  143 | 
  144 | test('AUTH TC09 Login with empty fields should show validation', async ({ page }) => {
  145 |   await page.goto('/login', {
  146 |     waitUntil: 'domcontentloaded',
  147 |     timeout: 60000
  148 |   });
  149 | 
  150 |   await page.locator('button.login-button').click();
  151 | 
  152 |   await expect(page.locator('#Email')).toBeVisible();
  153 |   await expect(page.locator('#Password')).toBeVisible();
  154 | });
  155 |   test('AUTH TC10 Login with invalid email format', async ({ page }) => {
  156 |     await page.goto('/login');
  157 | 
  158 |     await page.locator('#Email').fill('invalidemail');
  159 |     await page.locator('#Password').fill('Password@123');
  160 | 
  161 |     await page.locator('button.login-button').click();
  162 | 
  163 |     await expect(page.locator('#Email-error')).toBeVisible();
  164 |   });
  165 | 
  166 |  test('AUTH TC11 Login email field should accept input', async ({ page }) => {
  167 | 
  168 |   await page.goto('/login', {
  169 |     waitUntil: 'domcontentloaded',
  170 |     timeout: 60000
  171 |   });
  172 | 
  173 |   await page.locator('#Email').fill('wronguser@gmail.com');
  174 | 
  175 |   await expect(page.locator('#Email'))
  176 |     .toHaveValue('wronguser@gmail.com');
  177 | 
  178 | });
  179 | 
  180 | test('AUTH TC12 Remember me checkbox should be clickable', async ({ page }) => {
  181 |   await page.goto('/login', {
  182 |     waitUntil: 'domcontentloaded',
  183 |     timeout: 30000
  184 |   });
  185 | 
  186 |   const rememberMe = page.locator('#RememberMe');
  187 | 
  188 |   await expect(rememberMe).toBeVisible();
  189 |   await rememberMe.check();
  190 | 
  191 |   await expect(rememberMe).toBeChecked();
  192 | });
  193 | 
  194 |   test('AUTH TC13 Forgot password page should open', async ({ page }) => {
  195 |     await page.goto('/login');
  196 | 
  197 |     await page.locator('a[href="/passwordrecovery"]').click();
  198 | 
  199 |     await expect(page).toHaveURL(/passwordrecovery/);
  200 |   });
  201 | 
  202 |   test('AUTH TC14 Password recovery field should be visible', async ({ page }) => {
  203 |     await page.goto('/passwordrecovery');
  204 | 
  205 |     await expect(page.locator('#Email')).toBeVisible();
  206 |   });
  207 | 
  208 | test('AUTH TC15 Password recovery with empty email should show validation', async ({ page }) => {
  209 |   await page.goto('/passwordrecovery');
  210 | 
  211 |   await page.locator('button.password-recovery-button').click();
  212 | 
  213 |   await expect(
  214 |     page.locator('.validation-summary-errors, .message-error, .field-validation-error')
  215 |   ).toBeVisible();
  216 | });
  217 | 
  218 |  test('AUTH TC16 Password recovery with invalid email should show validation', async ({ page }) => {
  219 | 
> 220 |   await page.goto('/passwordrecovery');
      |              ^ Error: page.goto: Test timeout of 60000ms exceeded.
  221 | 
  222 |   await page.locator('#Email').fill('wrongemail');
  223 | 
  224 |   await page.locator('button.password-recovery-button').click();
  225 | 
  226 |   await expect(page.url()).toContain('passwordrecovery');
  227 | 
  228 | });
  229 | 
  230 | test('AUTH TC17 Register form should accept valid user data', async ({ page }) => {
  231 |   const email = `tiwariprabhav143@gmail.com`;
  232 | 
  233 |   await page.goto('/register', {
  234 |     waitUntil: 'domcontentloaded',
  235 |     timeout: 60000
  236 |   });
  237 | 
  238 |   await page.locator('#FirstName').fill('Prabhav');
  239 |   await page.locator('#LastName').fill('Tiwari');
  240 |   await page.locator('#Email').fill(email);
  241 |   await page.locator('#Password').fill('Password@123');
  242 |   await page.locator('#ConfirmPassword').fill('Password@123');
  243 | 
  244 |   await expect(page.locator('#FirstName')).toHaveValue('Prabhav');
  245 |   await expect(page.locator('#LastName')).toHaveValue('Tiwari');
  246 |   await expect(page.locator('#Email')).toHaveValue(email);
  247 | });
  248 | 
  249 | test('AUTH TC18 Register button should submit form', async ({ page }) => {
  250 | 
  251 |   const email = `tiwariprabhav143@gmail.com`;
  252 | 
  253 |   await page.goto('/register');
  254 | 
  255 |   await page.locator('#FirstName').fill('Prabhav');
  256 |   await page.locator('#LastName').fill('Tiwari');
  257 |   await page.locator('#Email').fill(email);
  258 | 
  259 |   await page.locator('#Password').fill('Password@123');
  260 |   await page.locator('#ConfirmPassword').fill('Password@123');
  261 | 
  262 |   await page.locator('#register-button').click();
  263 | 
  264 |   await expect(page).toHaveURL(/register/);
  265 | 
  266 | });
  267 | test('AUTH TC19 Registration result page should open', async ({ page }) => {
  268 | 
  269 |   const email = `tiwariprabhav143@gmail.com`;
  270 | 
  271 |   await page.goto('/register');
  272 | 
  273 |   await page.locator('#FirstName').fill('Prabhav');
  274 |   await page.locator('#LastName').fill('Tiwari');
  275 |   await page.locator('#Email').fill(email);
  276 | 
  277 |   await page.locator('#Password').fill('Password@123');
  278 |   await page.locator('#ConfirmPassword').fill('Password@123');
  279 | 
  280 |   await page.locator('#register-button').click();
  281 | 
  282 |   await expect(page.url()).toContain('register');
  283 | });
  284 | 
  285 | test('AUTH TC20 Password field should accept input', async ({ page }) => {
  286 | 
  287 |   await page.goto('/register');
  288 | 
  289 |   await page.locator('#Password').fill('Password@123');
  290 | 
  291 |   await expect(page.locator('#Password'))
  292 |     .toHaveValue('Password@123');
  293 | 
  294 | });
  295 | 
  296 | 
  297 | });
```