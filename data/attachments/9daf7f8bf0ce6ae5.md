# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user-profile.spec.js >> nopCommerce User Profile Test Cases >> PROFILE TC18 Orders page should show order filter/date section or empty order message
- Location: tests/user-profile.spec.js:196:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected pattern: /Orders|No orders|Order/
Received string:  "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a04d612e2dc72562Performance and Security by CloudflarePrivacy"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('body')
    33 × locator resolved to <body>…</body>
       - unexpected value "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a04d612e2dc72562Performance and Security by CloudflarePrivacy"

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a04d612e2dc72562
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  103 |     await openProfileWithLoggedInUser(page);
  104 |     await expect(page.locator('#Email')).toBeVisible();
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
> 203 |     await expect(page.locator('body')).toContainText(/Orders|No orders|Order/);
      |                                        ^ Error: expect(locator).toContainText(expected) failed
  204 |   });
  205 | 
  206 |   test('PROFILE TC19 Recurring payments page should open', async ({ page }) => {
  207 |     await openProfileWithLoggedInUser(page);
  208 | 
  209 |     await page.goto('https://demo.nopcommerce.com/customer/recurringpayments', {
  210 |       waitUntil: 'domcontentloaded'
  211 |     });
  212 | 
  213 |     await expect(page).toHaveURL(/recurringpayments/);
  214 |   });
  215 | 
  216 |   test('PROFILE TC20 Downloadable products page should open', async ({ page }) => {
  217 |     await openProfileWithLoggedInUser(page);
  218 | 
  219 |     await page.goto('https://demo.nopcommerce.com/customer/downloadableproducts', {
  220 |       waitUntil: 'domcontentloaded'
  221 |     });
  222 | 
  223 |     await expect(page).toHaveURL(/downloadableproducts/);
  224 |   });
  225 | 
  226 |   test('PROFILE TC21 Back in stock subscriptions page should open', async ({ page }) => {
  227 |     await openProfileWithLoggedInUser(page);
  228 | 
  229 |     await page.goto('https://demo.nopcommerce.com/backinstocksubscriptions/manage', {
  230 |       waitUntil: 'domcontentloaded'
  231 |     });
  232 | 
  233 |     await expect(page).toHaveURL(/backinstocksubscriptions/);
  234 |   });
  235 | 
  236 |   test('PROFILE TC22 Reward points page should open', async ({ page }) => {
  237 |     await openProfileWithLoggedInUser(page);
  238 | 
  239 |     await page.goto('https://demo.nopcommerce.com/rewardpoints/history', {
  240 |       waitUntil: 'domcontentloaded'
  241 |     });
  242 | 
  243 |     await expect(page).toHaveURL(/rewardpoints\/history/);
  244 |   });
  245 | 
  246 |   test('PROFILE TC23 Change password page should open', async ({ page }) => {
  247 |     await openProfileWithLoggedInUser(page);
  248 | 
  249 |     await page.goto('https://demo.nopcommerce.com/customer/changepassword', {
  250 |       waitUntil: 'domcontentloaded'
  251 |     });
  252 | 
  253 |     await expect(page).toHaveURL(/customer\/changepassword/);
  254 |   });
  255 | 
  256 |   test('PROFILE TC24 Change password fields should be visible', async ({ page }) => {
  257 |     await openProfileWithLoggedInUser(page);
  258 | 
  259 |     await page.goto('https://demo.nopcommerce.com/customer/changepassword', {
  260 |       waitUntil: 'domcontentloaded'
  261 |     });
  262 | 
  263 |     await expect(page.locator('#OldPassword')).toBeVisible();
  264 |     await expect(page.locator('#NewPassword')).toBeVisible();
  265 |     await expect(page.locator('#ConfirmNewPassword')).toBeVisible();
  266 |   });
  267 | 
  268 |   test('PROFILE TC25 My product reviews page should open', async ({ page }) => {
  269 |     await openProfileWithLoggedInUser(page);
  270 | 
  271 |     await page.goto('https://demo.nopcommerce.com/customer/productreviews', {
  272 |       waitUntil: 'domcontentloaded'
  273 |     });
  274 | 
  275 |     await expect(page).toHaveURL(/customer\/productreviews/);
  276 |   });
  277 | });
```