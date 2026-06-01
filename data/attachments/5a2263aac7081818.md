# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC10 Login with invalid email format
- Location: tests/authentication.spec.js:164:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#Email-error')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('#Email-error')

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
        - /url: /register?returnUrl=%2Flogin
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Flogin
    - listitem:
      - link "Wishlist (0)":
        - /url: /wishlist
    - listitem:
      - link "Shopping cart (0)":
        - /url: /cart
  - text: You have no items in your shopping cart.
  - link "nopCommerce demo store":
    - /url: /
    - img "nopCommerce demo store"
  - search:
    - textbox "Search store"
    - button "Search"
- navigation:
  - button "Categories"
  - menu "Categories":
    - menuitem "Computers":
      - button "Computers"
      - menu "Computers":
        - menuitem "Desktops":
          - button "Desktops"
        - menuitem "Notebooks":
          - button "Notebooks"
        - menuitem "Software":
          - button "Software"
    - menuitem "Electronics":
      - button "Electronics"
      - menu "Electronics":
        - menuitem "Camera & photo":
          - button "Camera & photo"
        - menuitem "Cell phones":
          - button "Cell phones"
        - menuitem "Others":
          - button "Others"
    - menuitem "Apparel":
      - button "Apparel"
      - menu "Apparel":
        - menuitem "Shoes":
          - button "Shoes"
        - menuitem "Clothing":
          - button "Clothing"
        - menuitem "Accessories":
          - button "Accessories"
    - menuitem "Digital downloads":
      - button "Digital downloads"
    - menuitem "Books":
      - button "Books"
    - menuitem "Jewelry":
      - button "Jewelry"
    - menuitem "Gift Cards":
      - button "Gift Cards"
- main:
  - heading "Welcome, Please Sign In!" [level=1]
  - heading "New Customer" [level=2]
  - text: By creating an account on our website, you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
  - button "Register"
  - heading "Returning Customer" [level=2]
  - text: "Email:"
  - textbox "Email:": invalidemail
  - text: "Password:"
  - textbox "Password:": Password@123
  - checkbox "Remember me?"
  - text: Remember me?
  - link "Forgot password?":
    - /url: /passwordrecovery
  - button "Log in"
  - heading "About login / registration" [level=2]
  - paragraph: Put your login / registration information here. You can edit this in the admin site.
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
  72  | // -Checks whether email validation error appears.
  73  | 
  74  | 
  75  |   test('AUTH TC04 Register with invalid email should show error', async ({ page }) => {
  76  |     await page.goto('/register');
  77  | 
  78  |     await page.locator('#FirstName').fill('Prabhav');
  79  |     await page.locator('#LastName').fill('Tiwari');
  80  |     await page.locator('#Email').fill('wrongemail');
  81  |     await page.locator('#Password').fill('Password@123');
  82  |     await page.locator('#ConfirmPassword').fill('Password@123');
  83  | 
  84  |     await page.locator('#register-button').click();
  85  | 
  86  |     await expect(page.locator('#Email-error')).toBeVisible();
  87  |   });
  88  | 
  89  | // -Fills Password and Confirm Password with different values.
  90  | // -Submits registration form.
  91  | // -Verifies password mismatch error appears.
  92  | 
  93  |   test('AUTH TC05 Register with password mismatch should show error', async ({ page }) => {
  94  |     await page.goto('/register');
  95  | 
  96  |     await page.locator('#FirstName').fill('Prabhav');
  97  |     await page.locator('#LastName').fill('Tiwari');
  98  |     await page.locator('#Email').fill(generateEmail());
  99  |     await page.locator('#Password').fill('Password@123');
  100 |     await page.locator('#ConfirmPassword').fill('WrongPassword@123');
  101 | 
  102 |     await page.locator('#register-button').click();
  103 | 
  104 |     await expect(page.locator('body')).toContainText('The password and confirmation password do not match.');  });
  105 | 
  106 | test('AUTH TC06 Register with valid details', async ({ page }) => {
  107 | 
  108 |   await page.goto('/register', {
  109 |     waitUntil: 'domcontentloaded'
  110 |   });
  111 | 
  112 |   const randomEmail = `test${Date.now()}@gmail.com`;
  113 | 
  114 |   await page.locator('#FirstName').fill('Prabhav');
  115 | 
  116 |   await page.locator('#LastName').fill('Tiwari');
  117 | 
  118 |   await page.locator('#Email').fill(randomEmail);
  119 | 
  120 |   await page.locator('#Password').fill('Test@123');
  121 | 
  122 |   await page.locator('#ConfirmPassword').fill('Test@123');
  123 | 
  124 |   await page.locator('#register-button').click();
  125 | 
  126 |   await expect(page).toHaveURL(/registerresult/, {
  127 |     timeout: 30000
  128 |   });
  129 | 
  130 | });
  131 | 
  132 | test('AUTH TC07 Login page should open', async ({ page }) => {
  133 |   await page.goto('/login', {
  134 |     waitUntil: 'domcontentloaded',
  135 |     timeout: 30000
  136 |   });
  137 | 
  138 |   await expect(page).toHaveURL(/login/);
  139 | 
  140 |   await expect(page.locator('#Email')).toBeVisible();
  141 |   await expect(page.locator('#Password')).toBeVisible();
  142 |   await expect(page.locator('button.login-button')).toBeVisible();
  143 | });
  144 | 
  145 |   test('AUTH TC08 Login form fields should be visible', async ({ page }) => {
  146 |     await page.goto('/login');
  147 | 
  148 |     await expect(page.locator('#Email')).toBeVisible();
  149 |     await expect(page.locator('#Password')).toBeVisible();
  150 |     await expect(page.locator('button.login-button')).toBeVisible();
  151 |   });
  152 | 
  153 | test('AUTH TC09 Login with empty fields should show validation', async ({ page }) => {
  154 |   await page.goto('/login', {
  155 |     waitUntil: 'domcontentloaded',
  156 |     timeout: 60000
  157 |   });
  158 | 
  159 |   await page.locator('button.login-button').click();
  160 | 
  161 |   await expect(page.locator('#Email')).toBeVisible();
  162 |   await expect(page.locator('#Password')).toBeVisible();
  163 | });
  164 |   test('AUTH TC10 Login with invalid email format', async ({ page }) => {
  165 |     await page.goto('/login');
  166 | 
  167 |     await page.locator('#Email').fill('invalidemail');
  168 |     await page.locator('#Password').fill('Password@123');
  169 | 
  170 |     await page.locator('button.login-button').click();
  171 | 
> 172 |     await expect(page.locator('#Email-error')).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
  173 |   });
  174 | 
  175 |  test('AUTH TC11 Login email field should accept input', async ({ page }) => {
  176 | 
  177 |   await page.goto('/login', {
  178 |     waitUntil: 'domcontentloaded',
  179 |     timeout: 60000
  180 |   });
  181 | 
  182 |   await page.locator('#Email').fill('wronguser@gmail.com');
  183 | 
  184 |   await expect(page.locator('#Email'))
  185 |     .toHaveValue('wronguser@gmail.com');
  186 | 
  187 | });
  188 | 
  189 | test('AUTH TC12 Remember me checkbox should be clickable', async ({ page }) => {
  190 |   await page.goto('/login', {
  191 |     waitUntil: 'domcontentloaded',
  192 |     timeout: 30000
  193 |   });
  194 | 
  195 |   const rememberMe = page.locator('#RememberMe');
  196 | 
  197 |   await expect(rememberMe).toBeVisible();
  198 |   await rememberMe.check();
  199 | 
  200 |   await expect(rememberMe).toBeChecked();
  201 | });
  202 | 
  203 |   test('AUTH TC13 Forgot password page should open', async ({ page }) => {
  204 |     await page.goto('/login');
  205 | 
  206 |     await page.locator('a[href="/passwordrecovery"]').click();
  207 | 
  208 |     await expect(page).toHaveURL(/passwordrecovery/);
  209 |   });
  210 | 
  211 |   test('AUTH TC14 Password recovery field should be visible', async ({ page }) => {
  212 |     await page.goto('/passwordrecovery');
  213 | 
  214 |     await expect(page.locator('#Email')).toBeVisible();
  215 |   });
  216 | 
  217 | test('AUTH TC15 Password recovery with empty email should show validation', async ({ page }) => {
  218 |   await page.goto('/passwordrecovery');
  219 | 
  220 |   await page.locator('button.password-recovery-button').click();
  221 | 
  222 |   await expect(
  223 |     page.locator('.validation-summary-errors, .message-error, .field-validation-error')
  224 |   ).toBeVisible();
  225 | });
  226 | 
  227 |  test('AUTH TC16 Password recovery with invalid email should show validation', async ({ page }) => {
  228 | 
  229 |   await page.goto('/passwordrecovery', {waitUntil: 'domcontentloaded',timeout: 30000});
  230 |   await page.locator('#Email').fill('wrongemail');
  231 | 
  232 |   await page.locator('button.password-recovery-button').click();
  233 | 
  234 |   await expect(page.url()).toContain('passwordrecovery');
  235 | 
  236 | });
  237 | 
  238 | test('AUTH TC17 Register form should accept valid user data', async ({ page }) => {
  239 |   const email = `tiwariprabhav143@gmail.com`;
  240 | 
  241 |   await page.goto('/register', {
  242 |     waitUntil: 'domcontentloaded',
  243 |     timeout: 60000
  244 |   });
  245 | 
  246 |   await page.locator('#FirstName').fill('Prabhav');
  247 |   await page.locator('#LastName').fill('Tiwari');
  248 |   await page.locator('#Email').fill(email);
  249 |   await page.locator('#Password').fill('Password@123');
  250 |   await page.locator('#ConfirmPassword').fill('Password@123');
  251 | 
  252 |   await expect(page.locator('#FirstName')).toHaveValue('Prabhav');
  253 |   await expect(page.locator('#LastName')).toHaveValue('Tiwari');
  254 |   await expect(page.locator('#Email')).toHaveValue(email);
  255 | });
  256 | 
  257 | test('AUTH TC18 Register button should submit form', async ({ page }) => {
  258 | 
  259 |   await page.goto('/register', {
  260 |     waitUntil: 'domcontentloaded'
  261 |   });
  262 | 
  263 |   await expect(
  264 |     page.locator('#register-button')
  265 |   ).toBeVisible();
  266 | 
  267 | });
  268 | test('AUTH TC19 Registration result page should open', async ({ page }) => {
  269 | 
  270 |   const email = `tiwariprabhav143@gmail.com`;
  271 | 
  272 |   await page.goto('/register');
```