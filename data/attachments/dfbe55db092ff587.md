# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC17 Registration success message should appear
- Location: tests\authentication.spec.js:215:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.result')
Expected substring: "Your registration completed"
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('.result')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a022a2282b2a360f
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  172 |     await expect(page.locator('.message-error')).toBeVisible();
  173 |   });
  174 | 
  175 |   test('AUTH TC12 Remember me checkbox should be clickable', async ({ page }) => {
  176 |     await page.goto('/login');
  177 | 
  178 |     await page.locator('#RememberMe').check();
  179 | 
  180 |     await expect(page.locator('#RememberMe')).toBeChecked();
  181 |   });
  182 | 
  183 |   test('AUTH TC13 Forgot password page should open', async ({ page }) => {
  184 |     await page.goto('/login');
  185 | 
  186 |     await page.locator('a[href="/passwordrecovery"]').click();
  187 | 
  188 |     await expect(page).toHaveURL(/passwordrecovery/);
  189 |   });
  190 | 
  191 |   test('AUTH TC14 Password recovery field should be visible', async ({ page }) => {
  192 |     await page.goto('/passwordrecovery');
  193 | 
  194 |     await expect(page.locator('#Email')).toBeVisible();
  195 |   });
  196 | 
  197 |   test('AUTH TC15 Password recovery with empty email should show validation', async ({ page }) => {
  198 |     await page.goto('/passwordrecovery');
  199 | 
  200 |     await page.locator('button.password-recovery-button').click();
  201 | 
  202 |     await expect(page.locator('#Email-error')).toBeVisible();
  203 |   });
  204 | 
  205 |   test('AUTH TC16 Password recovery with invalid email should show validation', async ({ page }) => {
  206 |     await page.goto('/passwordrecovery');
  207 | 
  208 |     await page.locator('#Email').fill('wrongemail');
  209 | 
  210 |     await page.locator('button.password-recovery-button').click();
  211 | 
  212 |     await expect(page.locator('#Email-error')).toBeVisible();
  213 |   });
  214 | 
  215 | test('AUTH TC17 Registration success message should appear', async ({ page }) => {
  216 | 
  217 |   const email = `testuser${Date.now()}@gmail.com`;
  218 | 
  219 |   await page.goto('/register');
  220 | 
  221 |   await page.locator('#FirstName').fill('Prabhav');
  222 |   await page.locator('#LastName').fill('Tiwari');
  223 |   await page.locator('#Email').fill(email);
  224 | 
  225 |   await page.locator('#Password').fill('Password@123');
  226 |   await page.locator('#ConfirmPassword').fill('Password@123');
  227 | 
  228 |   await page.locator('#register-button').click();
  229 | 
  230 |   await expect(page.locator('.result'))
> 231 |     .toContainText('Your registration completed');
      |      ^ Error: expect(locator).toContainText(expected) failed
  232 | 
  233 | });
  234 | 
  235 |   test('AUTH TC18 User should logout successfully', async ({ page }) => {
  236 |     await page.goto('/register');
  237 | 
  238 |     await page.locator('#FirstName').fill('Prabhav');
  239 |     await page.locator('#LastName').fill('Tiwari');
  240 |     await page.locator('#Email').fill(generateEmail());
  241 |     await page.locator('#Password').fill('Password@123');
  242 |     await page.locator('#ConfirmPassword').fill('Password@123');
  243 | 
  244 |     await page.locator('#register-button').click();
  245 | 
  246 |     await page.locator('.ico-logout').click();
  247 | 
  248 |     await expect(page.locator('.ico-login')).toBeVisible();
  249 |   });
  250 | test('AUTH TC19 Registration result page should open', async ({ page }) => {
  251 | 
  252 |   const email = `testuser${Date.now()}@gmail.com`;
  253 | 
  254 |   await page.goto('/register');
  255 | 
  256 |   await page.locator('#FirstName').fill('Prabhav');
  257 |   await page.locator('#LastName').fill('Tiwari');
  258 |   await page.locator('#Email').fill(email);
  259 | 
  260 |   await page.locator('#Password').fill('Password@123');
  261 |   await page.locator('#ConfirmPassword').fill('Password@123');
  262 | 
  263 |   await page.locator('#register-button').click();
  264 | 
  265 |   await expect(page).toHaveURL(/registerresult/);
  266 | 
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
  284 |   await expect(page.locator('.register-continue-button'))
  285 |     .toBeVisible();
  286 | 
  287 | });
  288 | 
  289 | 
  290 | });
```