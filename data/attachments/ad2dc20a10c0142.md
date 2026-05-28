# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC20 Continue button should be visible after registration
- Location: tests\authentication.spec.js:269:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "Register"
Received string:    "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a022b33cecd7d359Performance and Security by CloudflarePrivacy"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('body')
    15 × locator resolved to <body>…</body>
       - unexpected value ""
    18 × locator resolved to <body>…</body>
       - unexpected value "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a022b33cecd7d359Performance and Security by CloudflarePrivacy"

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a022b33cecd7d359
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  211 |     await expect(page.url()).toContain('register');  });
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
> 284 |   await expect(page.locator('body')).toContainText('Register');
      |                                      ^ Error: expect(locator).toContainText(expected) failed
  285 | 
  286 | });
  287 | 
  288 | 
  289 | });
```