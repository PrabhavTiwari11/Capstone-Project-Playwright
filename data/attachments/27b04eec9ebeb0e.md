# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user-profile.spec.js >> nopCommerce User Profile Test Cases >> PROFILE TC07 Email field should be visible
- Location: tests/user-profile.spec.js:102:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#Email')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('#Email')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a04d49b24e9ff095
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  4   |   test.setTimeout(90000);
  5   | 
  6   |   async function registerNewUser(page) {
  7   |     const email = `user${Date.now()}${Math.floor(Math.random() * 1000)}@test.com`;
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
> 104 |     await expect(page.locator('#Email')).toBeVisible();
      |                                          ^ Error: expect(locator).toBeVisible() failed
  105 |   });
  106 | 
  107 |   test('PROFILE TC08 Company field should be visible', async ({ page }) => {
  108 |     await openProfileWithLoggedInUser(page);
  109 |     await expect(page.locator('#Company')).toBeVisible();
  110 |   });
  111 | 
  112 |   test('PROFILE TC09 First name should accept input', async ({ page }) => {
  113 |     await openProfileWithLoggedInUser(page);
  114 | 
  115 |     await page.locator('#FirstName').fill('UpdatedFirst');
  116 |     await expect(page.locator('#FirstName')).toHaveValue('UpdatedFirst');
  117 |   });
  118 | 
  119 | test('PROFILE TC10 Last name should accept input', async ({ page }) => {
  120 |   await openProfileWithLoggedInUser(page);
  121 | 
  122 |   const lastName = page.locator('#LastName');
  123 | 
  124 |   if (await lastName.count() > 0) {
  125 |     await lastName.fill('UpdatedLast');
  126 |     await expect(lastName).toHaveValue('UpdatedLast');
  127 |   } else {
  128 |     await expect(page.locator('body')).toBeVisible();
  129 |   }
  130 | });
  131 | 
  132 |   test('PROFILE TC11 Company name should accept input', async ({ page }) => {
  133 |     await openProfileWithLoggedInUser(page);
  134 | 
  135 |     await page.locator('#Company').fill('Wipro Training');
  136 |     await expect(page.locator('#Company')).toHaveValue('Wipro Training');
  137 |   });
  138 | 
  139 | test('PROFILE TC12 Save button should be visible', async ({ page }) => {
  140 |   await openProfileWithLoggedInUser(page);
  141 | 
  142 |   await expect(
  143 |     page.locator('#save-info-button')
  144 |   ).toBeVisible();
  145 | });
  146 | 
  147 | test('PROFILE TC13 Save button should be clickable', async ({ page }) => {
  148 |   await openProfileWithLoggedInUser(page);
  149 | 
  150 |   await page.locator('#save-info-button').click();
  151 | 
  152 |   await expect(
  153 |     page.locator('.bar-notification, .result')
  154 |   ).toBeVisible();
  155 | });
  156 | 
  157 |   test('PROFILE TC14 Save profile information', async ({ page }) => {
  158 |     await openProfileWithLoggedInUser(page);
  159 | 
  160 |     await page.locator('#FirstName').fill('SavedName');
  161 |     await page.locator('#save-info-button').click();
  162 | 
  163 |     await expect(page.locator('.bar-notification, .result')).toBeVisible();
  164 |   });
  165 | 
  166 |   test('PROFILE TC15 Address page should open', async ({ page }) => {
  167 |     await openProfileWithLoggedInUser(page);
  168 | 
  169 |     await page.goto('https://demo.nopcommerce.com/customer/addresses', {
  170 |       waitUntil: 'domcontentloaded'
  171 |     });
  172 | 
  173 |     await expect(page).toHaveURL(/customer\/addresses/);
  174 |   });
  175 | 
  176 |   test('PROFILE TC16 Add new address button should be visible', async ({ page }) => {
  177 |     await openProfileWithLoggedInUser(page);
  178 | 
  179 |     await page.goto('https://demo.nopcommerce.com/customer/addresses', {
  180 |       waitUntil: 'domcontentloaded'
  181 |     });
  182 | 
  183 |     await expect(page.locator('button.add-address-button')).toBeVisible();
  184 |   });
  185 | 
  186 |   test('PROFILE TC17 Orders page should open', async ({ page }) => {
  187 |     await openProfileWithLoggedInUser(page);
  188 | 
  189 |     await page.goto('https://demo.nopcommerce.com/order/history', {
  190 |       waitUntil: 'domcontentloaded'
  191 |     });
  192 | 
  193 |     await expect(page).toHaveURL(/order\/history/);
  194 |   });
  195 | 
  196 |   test('PROFILE TC18 Orders page should show order filter/date section or empty order message', async ({ page }) => {
  197 |     await openProfileWithLoggedInUser(page);
  198 | 
  199 |     await page.goto('https://demo.nopcommerce.com/order/history', {
  200 |       waitUntil: 'domcontentloaded'
  201 |     });
  202 | 
  203 |     await expect(page.locator('body')).toContainText(/Orders|No orders|Order/);
  204 |   });
```