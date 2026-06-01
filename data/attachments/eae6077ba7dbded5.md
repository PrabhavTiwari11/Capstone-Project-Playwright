# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user-profile.spec.js >> nopCommerce User Profile Test Cases >> PROFILE TC08 Company field should be visible
- Location: tests/user-profile.spec.js:106:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#Company')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('#Company')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a04dc2a4df29a682
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  8   | 
  9   |     await page.goto('https://demo.nopcommerce.com/register', {
  10  |       waitUntil: 'domcontentloaded'
  11  |     });
  12  | 
  13  |     await page.locator('#gender-male').check();
  14  |     await page.locator('#FirstName').fill('Prabhav');
  15  |     await page.locator('#LastName').fill('Tiwari');
  16  |     await page.locator('#Email').fill(email);
  17  |     await page.locator('#Password').fill('Test@12345');
  18  |     await page.locator('#ConfirmPassword').fill('Test@12345');
  19  |     await page.locator('#register-button').click();
  20  | 
  21  |     return email;
  22  |   }
  23  | 
  24  |   async function logout(page) {
  25  |     const logoutLink = page.locator('.ico-logout');
  26  |     if (await logoutLink.count() > 0) {
  27  |       await logoutLink.click();
  28  |     }
  29  |   }
  30  | 
  31  |   async function login(page, email) {
  32  |     await page.goto('https://demo.nopcommerce.com/login', {
  33  |       waitUntil: 'domcontentloaded'
  34  |     });
  35  | 
  36  |     await page.locator('#Email').fill(email);
  37  |     await page.locator('#Password').fill('Test@12345');
  38  |     await page.locator('button.login-button').click();
  39  |   }
  40  | 
  41  |   async function openProfileWithLoggedInUser(page) {
  42  |     await registerNewUser(page);
  43  | 
  44  |     await page.goto('https://demo.nopcommerce.com/customer/info', {
  45  |       waitUntil: 'domcontentloaded'
  46  |     });
  47  | 
  48  |     await expect(page).toHaveURL(/customer\/info/);
  49  |   }
  50  | 
  51  |   test('PROFILE TC01 Login with registered user', async ({ page }) => {
  52  |     const email = await registerNewUser(page);
  53  | 
  54  |     await logout(page);
  55  |     await login(page, email);
  56  | 
  57  |     await expect(page.locator('.ico-account')).toBeVisible();
  58  |   });
  59  | 
  60  |   test('PROFILE TC02 Open customer info page after login', async ({ page }) => {
  61  |     await openProfileWithLoggedInUser(page);
  62  |     await expect(page).toHaveURL(/customer\/info/);
  63  |   });
  64  | 
  65  | test('PROFILE TC03 Gender section should be visible', async ({ page }) => {
  66  |   await openProfileWithLoggedInUser(page);
  67  | 
  68  |   await expect(
  69  |     page.locator('.gender')
  70  |   ).toBeVisible();
  71  | });
  72  | 
  73  |   test('PROFILE TC04 Gender female radio should be visible', async ({ page }) => {
  74  |     await openProfileWithLoggedInUser(page);
  75  |     await expect(page.locator('#gender-female')).toBeVisible();
  76  |   });
  77  | 
  78  | test('PROFILE TC05 First name field should be visible', async ({ page }) => {
  79  |   await openProfileWithLoggedInUser(page);
  80  | 
  81  |   const firstName = page.locator('#FirstName');
  82  | 
  83  |   if (await firstName.count() > 0) {
  84  |     await expect(firstName).toBeVisible();
  85  |   } else {
  86  |     await expect(page).toHaveURL(/customer\/info|login|register/);
  87  |   }
  88  | });
  89  | 
  90  | test('PROFILE TC06 Last name field should be visible', async ({ page }) => {
  91  |   await openProfileWithLoggedInUser(page);
  92  | 
  93  |   const lastName = page.locator('#LastName');
  94  | 
  95  |   if (await lastName.count() > 0) {
  96  |     await expect(lastName).toBeVisible();
  97  |   } else {
  98  |     await expect(page).toHaveURL(/customer\/info|login|register/);
  99  |   }
  100 | });
  101 | 
  102 |   test('PROFILE TC07 Email field should be visible', async ({ page }) => {
  103 |     await openProfileWithLoggedInUser(page);
  104 |     await expect(page.locator('input[name="Email"]')).toBeVisible();  });
  105 | 
  106 |   test('PROFILE TC08 Company field should be visible', async ({ page }) => {
  107 |     await openProfileWithLoggedInUser(page);
> 108 |     await expect(page.locator('#Company')).toBeVisible();
      |                                            ^ Error: expect(locator).toBeVisible() failed
  109 |   });
  110 | 
  111 |   test('PROFILE TC09 First name should accept input', async ({ page }) => {
  112 |     await openProfileWithLoggedInUser(page);
  113 | 
  114 |     await page.locator('#FirstName').fill('UpdatedFirst');
  115 |     await expect(page.locator('#FirstName')).toHaveValue('UpdatedFirst');
  116 |   });
  117 | 
  118 | test('PROFILE TC10 Last name should accept input', async ({ page }) => {
  119 |   await openProfileWithLoggedInUser(page);
  120 | 
  121 |   const lastName = page.locator('#LastName');
  122 | 
  123 |   if (await lastName.count() > 0) {
  124 |     await lastName.fill('UpdatedLast');
  125 |     await expect(lastName).toHaveValue('UpdatedLast');
  126 |   } else {
  127 |     await expect(page.locator('body')).toBeVisible();
  128 |   }
  129 | });
  130 | 
  131 |   test('PROFILE TC11 Company name should accept input', async ({ page }) => {
  132 |     await openProfileWithLoggedInUser(page);
  133 | 
  134 |     await page.locator('input[name="Company"]').fill('Wipro Training');
  135 |     await expect(page.locator('#Company')).toHaveValue('Wipro Training');
  136 |   });
  137 | 
  138 | test('PROFILE TC12 Save button should be visible', async ({ page }) => {
  139 |   await openProfileWithLoggedInUser(page);
  140 | 
  141 |   await expect(
  142 |     page.locator('#save-info-button')
  143 |   ).toBeVisible();
  144 | });
  145 | 
  146 | test('PROFILE TC13 Save button should be clickable', async ({ page }) => {
  147 |   await openProfileWithLoggedInUser(page);
  148 | 
  149 |   await page.locator('#save-info-button').click();
  150 | 
  151 |   await expect(
  152 |     page.locator('.bar-notification, .result')
  153 |   ).toBeVisible();
  154 | });
  155 | 
  156 |   test('PROFILE TC14 Save profile information', async ({ page }) => {
  157 |     await openProfileWithLoggedInUser(page);
  158 | 
  159 |     await page.locator('#FirstName').fill('SavedName');
  160 |     await page.locator('#save-info-button').click();
  161 | 
  162 |     await expect(page.locator('.bar-notification, .result')).toBeVisible();
  163 |   });
  164 | 
  165 |   test('PROFILE TC15 Address page should open', async ({ page }) => {
  166 |     await openProfileWithLoggedInUser(page);
  167 | 
  168 |     await page.goto('https://demo.nopcommerce.com/customer/addresses', {
  169 |       waitUntil: 'domcontentloaded'
  170 |     });
  171 | 
  172 |     await expect(page).toHaveURL(/customer\/addresses/);
  173 |   });
  174 | 
  175 |   test('PROFILE TC16 Add new address button should be visible', async ({ page }) => {
  176 |     await openProfileWithLoggedInUser(page);
  177 | 
  178 |     await page.goto('https://demo.nopcommerce.com/customer/addresses', {
  179 |       waitUntil: 'domcontentloaded'
  180 |     });
  181 | 
  182 |     await expect(page.locator('button.add-address-button')).toBeVisible();
  183 |   });
  184 | 
  185 |   test('PROFILE TC17 Orders page should open', async ({ page }) => {
  186 |     await openProfileWithLoggedInUser(page);
  187 | 
  188 |     await page.goto('https://demo.nopcommerce.com/order/history', {
  189 |       waitUntil: 'domcontentloaded'
  190 |     });
  191 | 
  192 |     await expect(page).toHaveURL(/order\/history/);
  193 |   });
  194 | 
  195 |   test('PROFILE TC18 Orders page should show order filter/date section or empty order message', async ({ page }) => {
  196 |     await openProfileWithLoggedInUser(page);
  197 | 
  198 |     await page.goto('https://demo.nopcommerce.com/order/history', {
  199 |       waitUntil: 'domcontentloaded'
  200 |     });
  201 | 
  202 |     await expect(page.locator('body')).toContainText(/Orders|No orders|Order/);
  203 |   });
  204 | 
  205 |   test('PROFILE TC19 Recurring payments page should open', async ({ page }) => {
  206 |     await openProfileWithLoggedInUser(page);
  207 | 
  208 |     await page.goto('https://demo.nopcommerce.com/customer/recurringpayments', {
```