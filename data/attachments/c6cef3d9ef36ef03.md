# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC03 Register with empty form should show validation
- Location: tests/authentication.spec.js:53:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "First name is required."
Received string:    "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a04dcdff9e3051c4Performance and Security by CloudflarePrivacy"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('body')
    34 × locator resolved to <body>…</body>
       - unexpected value "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a04dcdff9e3051c4Performance and Security by CloudflarePrivacy"

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a04dcdff9e3051c4
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | function generateEmail() {
  4   |   return `tiwariprabhav143@gmail.com`;
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
> 62  |   await expect(page.locator('body')).toContainText('First name is required.');
      |                                      ^ Error: expect(locator).toContainText(expected) failed
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
```