# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC10 Login with invalid email format
- Location: tests\authentication.spec.js:155:7

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
  63  |   await expect(page.locator('body')).toContainText('Last name is required.');
  64  |   await expect(page.locator('body')).toContainText('Email is required.');
  65  |   await expect(page.locator('body')).toContainText('Password is required.');
  66  | 
  67  | });
  68  | 
  69  | // -Fills all fields correctly except email.
  70  | // -Uses invalid email format (wrongemail).
  71  | // -Clicks Register button.
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
  107 |   const email = `testuser${Date.now()}@gmail.com`;
  108 | 
  109 |   await page.goto('/register', {
  110 |     waitUntil: 'domcontentloaded',
  111 |     timeout: 60000
  112 |   });
  113 | 
  114 |   await page.locator('#gender-male').check();
  115 | 
  116 |   await page.locator('#FirstName').fill('Prabhav');
  117 |   await page.locator('#LastName').fill('Tiwari');
  118 |   await page.locator('#Email').fill(email);
  119 | 
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
> 163 |     await expect(page.locator('#Email-error')).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
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
  180 |   test('AUTH TC12 Remember me checkbox should be clickable', async ({ page }) => {
  181 |     await page.goto('/login');
  182 | 
  183 |     await page.locator('#RememberMe').check();
  184 | 
  185 |     await expect(page.locator('#RememberMe')).toBeChecked();
  186 |   });
  187 | 
  188 |   test('AUTH TC13 Forgot password page should open', async ({ page }) => {
  189 |     await page.goto('/login');
  190 | 
  191 |     await page.locator('a[href="/passwordrecovery"]').click();
  192 | 
  193 |     await expect(page).toHaveURL(/passwordrecovery/);
  194 |   });
  195 | 
  196 |   test('AUTH TC14 Password recovery field should be visible', async ({ page }) => {
  197 |     await page.goto('/passwordrecovery');
  198 | 
  199 |     await expect(page.locator('#Email')).toBeVisible();
  200 |   });
  201 | 
  202 |   test('AUTH TC15 Password recovery with empty email should show validation', async ({ page }) => {
  203 |     await page.goto('/passwordrecovery');
  204 | 
  205 |     await page.locator('button.password-recovery-button').click();
  206 | 
  207 |     await expect(page.locator('#Email-error')).toBeVisible();
  208 |   });
  209 | 
  210 |  test('AUTH TC16 Password recovery with invalid email should show validation', async ({ page }) => {
  211 | 
  212 |   await page.goto('/passwordrecovery');
  213 | 
  214 |   await page.locator('#Email').fill('wrongemail');
  215 | 
  216 |   await page.locator('button.password-recovery-button').click();
  217 | 
  218 |   await expect(page.url()).toContain('passwordrecovery');
  219 | 
  220 | });
  221 | 
  222 | test('AUTH TC17 Register form should accept valid user data', async ({ page }) => {
  223 |   const email = `testuser${Date.now()}@gmail.com`;
  224 | 
  225 |   await page.goto('/register', {
  226 |     waitUntil: 'domcontentloaded',
  227 |     timeout: 60000
  228 |   });
  229 | 
  230 |   await page.locator('#FirstName').fill('Prabhav');
  231 |   await page.locator('#LastName').fill('Tiwari');
  232 |   await page.locator('#Email').fill(email);
  233 |   await page.locator('#Password').fill('Password@123');
  234 |   await page.locator('#ConfirmPassword').fill('Password@123');
  235 | 
  236 |   await expect(page.locator('#FirstName')).toHaveValue('Prabhav');
  237 |   await expect(page.locator('#LastName')).toHaveValue('Tiwari');
  238 |   await expect(page.locator('#Email')).toHaveValue(email);
  239 | });
  240 | 
  241 | test('AUTH TC18 Register button should submit form', async ({ page }) => {
  242 | 
  243 |   const email = `testuser${Date.now()}@gmail.com`;
  244 | 
  245 |   await page.goto('/register');
  246 | 
  247 |   await page.locator('#FirstName').fill('Prabhav');
  248 |   await page.locator('#LastName').fill('Tiwari');
  249 |   await page.locator('#Email').fill(email);
  250 | 
  251 |   await page.locator('#Password').fill('Password@123');
  252 |   await page.locator('#ConfirmPassword').fill('Password@123');
  253 | 
  254 |   await page.locator('#register-button').click();
  255 | 
  256 |   await expect(page).toHaveURL(/register/);
  257 | 
  258 | });
  259 | test('AUTH TC19 Registration result page should open', async ({ page }) => {
  260 | 
  261 |   const email = `testuser${Date.now()}@gmail.com`;
  262 | 
  263 |   await page.goto('/register');
```