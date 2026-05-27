# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC05 Register with password mismatch should show error
- Location: tests\authentication.spec.js:93:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#ConfirmPassword-error')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('#ConfirmPassword-error')

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
        - /url: /register?returnUrl=%2Fregister
    - listitem:
      - link "Log in":
        - /url: /login?returnUrl=%2Fregister
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
  - heading "Register" [level=1]
  - heading "Your Personal Details" [level=2]
  - text: "Gender:"
  - radio "Male"
  - text: Male
  - radio "Female"
  - text: "Female First name:"
  - textbox "First name:": Prabhav
  - text: "* Last name:"
  - textbox "Last name:": Tiwari
  - text: "* Email:"
  - textbox "Email:": testuser1779796522309@gmail.com
  - text: "*"
  - heading "Company Details" [level=2]
  - text: "Company name:"
  - textbox "Company name:"
  - heading "Subscribe to newsletter" [level=2]
  - list:
    - listitem:
      - text: IsActive
      - checkbox "IsActive" [checked]
  - heading "Your Password" [level=2]
  - text: "Password:"
  - textbox "Password:"
  - text: "* Confirm password:"
  - textbox "Confirm password:"
  - text: "* The password and confirmation password do not match."
  - button "Register"
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
  4   |   return `testuser${Date.now()}@gmail.com`;
  5   | }
  6   | 
  7   | test.describe('nopCommerce Authentication Test Cases', () => {
  8   | 
  9   |   test.beforeEach(async ({ page }) => {
  10  |     await page.goto('/', {
  11  |       waitUntil: 'domcontentloaded',
  12  |       timeout: 60000
  13  |     });
  14  |   });
  15  | 
  16  | // -Opens the Register page.
  17  | // -Checks whether the URL contains /register.
  18  | // -Verifies that navigation to the registration page works properly.
  19  | 
  20  |   test('AUTH TC01 Register page should open', async ({ page }) => {
  21  |     await page.goto('/register');
  22  |     await expect(page).toHaveURL(/register/);
  23  |   });
  24  | 
  25  | // -Opens the Register page.
  26  | // -Checks visibility of all important input fields:
  27  | // -First Name
  28  | // -Last Name
  29  | // -Email
  30  | // -Password
  31  | // -Confirm Password
  32  | 
  33  |   test('AUTH TC02 Register form fields should be visible', async ({ page }) => {
  34  |     await page.goto('/register');
  35  | 
  36  |     await expect(page.locator('#FirstName')).toBeVisible();
  37  |     await expect(page.locator('#LastName')).toBeVisible();
  38  |     await expect(page.locator('#Email')).toBeVisible();
  39  |     await expect(page.locator('#Password')).toBeVisible();
  40  |     await expect(page.locator('#ConfirmPassword')).toBeVisible();
  41  |   });
  42  | 
  43  | // -Opens Register page.
  44  | // -Clicks Register button without filling any fields.
  45  | // -Verifies validation error messages appear.
  46  | // #Validation messages checked:
  47  | // -First name is required.
  48  | // -Last name is required.
  49  | // -Email is required.
  50  | // -Password is required.
  51  | 
  52  | 
  53  | test('AUTH TC03 Register with empty form should show validation', async ({ page }) => {
  54  | 
  55  |   await page.goto('/register', {
  56  |     waitUntil: 'domcontentloaded',
  57  |     timeout: 60000
  58  |   });
  59  | 
  60  |   await page.locator('#register-button').click();
  61  | 
  62  |   await expect(page.locator('body')).toContainText('First name is required.');
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
> 104 |     await expect(page.locator('#ConfirmPassword-error')).toBeVisible();
      |                                                          ^ Error: expect(locator).toBeVisible() failed
  105 |   });
  106 | 
  107 | test('AUTH TC06 Register with valid details', async ({ page }) => {
  108 |   const email = `testuser${Date.now()}@gmail.com`;
  109 | 
  110 |   await page.goto('/register', {
  111 |     waitUntil: 'domcontentloaded',
  112 |     timeout: 60000
  113 |   });
  114 | 
  115 |   await page.locator('#gender-male').check();
  116 | 
  117 |   await page.locator('#FirstName').fill('Prabhav');
  118 |   await page.locator('#LastName').fill('Tiwari');
  119 |   await page.locator('#Email').fill(email);
  120 | 
  121 |   await page.locator('#Company').fill('NIET');
  122 | 
  123 |   await page.locator('#Password').fill('Password@123');
  124 |   await page.locator('#ConfirmPassword').fill('Password@123');
  125 | 
  126 |   await page.locator('#register-button').click();
  127 | 
  128 |   await expect(page).toHaveURL(/registerresult/);
  129 | });
  130 | 
  131 |   test('AUTH TC07 Login page should open', async ({ page }) => {
  132 |     await page.goto('/login');
  133 | 
  134 |     await expect(page).toHaveURL(/login/);
  135 |   });
  136 | 
  137 |   test('AUTH TC08 Login form fields should be visible', async ({ page }) => {
  138 |     await page.goto('/login');
  139 | 
  140 |     await expect(page.locator('#Email')).toBeVisible();
  141 |     await expect(page.locator('#Password')).toBeVisible();
  142 |     await expect(page.locator('button.login-button')).toBeVisible();
  143 |   });
  144 | 
  145 |   test('AUTH TC09 Login with empty fields should show validation', async ({ page }) => {
  146 |     await page.goto('/login');
  147 | 
  148 |     await page.locator('button.login-button').click();
  149 | 
  150 |     await expect(page.locator('#Email-error')).toBeVisible();
  151 |   });
  152 | 
  153 |   test('AUTH TC10 Login with invalid email format', async ({ page }) => {
  154 |     await page.goto('/login');
  155 | 
  156 |     await page.locator('#Email').fill('invalidemail');
  157 |     await page.locator('#Password').fill('Password@123');
  158 | 
  159 |     await page.locator('button.login-button').click();
  160 | 
  161 |     await expect(page.locator('#Email-error')).toBeVisible();
  162 |   });
  163 | 
  164 | 
  165 | 
  166 | });
```