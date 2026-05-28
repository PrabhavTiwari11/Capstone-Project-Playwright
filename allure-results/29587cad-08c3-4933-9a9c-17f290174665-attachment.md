# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC17 Logout link should appear after registration
- Location: tests\authentication.spec.js:215:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.ico-logout')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.ico-logout')

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a02296343d0774e3
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  126 | //   await page.locator('#register-button').click();
  127 | 
  128 | //   await expect(page).toHaveURL(/registerresult/);
  129 | // });
  130 | 
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
  215 |   test('AUTH TC17 Logout link should appear after registration', async ({ page }) => {
  216 |     await page.goto('/register');
  217 | 
  218 |     await page.locator('#FirstName').fill('Prabhav');
  219 |     await page.locator('#LastName').fill('Tiwari');
  220 |     await page.locator('#Email').fill(generateEmail());
  221 |     await page.locator('#Password').fill('Password@123');
  222 |     await page.locator('#ConfirmPassword').fill('Password@123');
  223 | 
  224 |     await page.locator('#register-button').click();
  225 | 
> 226 |     await expect(page.locator('.ico-logout')).toBeVisible();
      |                                               ^ Error: expect(locator).toBeVisible() failed
  227 |   });
  228 | 
  229 |   test('AUTH TC18 User should logout successfully', async ({ page }) => {
  230 |     await page.goto('/register');
  231 | 
  232 |     await page.locator('#FirstName').fill('Prabhav');
  233 |     await page.locator('#LastName').fill('Tiwari');
  234 |     await page.locator('#Email').fill(generateEmail());
  235 |     await page.locator('#Password').fill('Password@123');
  236 |     await page.locator('#ConfirmPassword').fill('Password@123');
  237 | 
  238 |     await page.locator('#register-button').click();
  239 | 
  240 |     await page.locator('.ico-logout').click();
  241 | 
  242 |     await expect(page.locator('.ico-login')).toBeVisible();
  243 |   });
  244 | 
  245 |   test('AUTH TC19 My account link should appear after registration', async ({ page }) => {
  246 |     await page.goto('/register');
  247 | 
  248 |     await page.locator('#FirstName').fill('Prabhav');
  249 |     await page.locator('#LastName').fill('Tiwari');
  250 |     await page.locator('#Email').fill(generateEmail());
  251 |     await page.locator('#Password').fill('Password@123');
  252 |     await page.locator('#ConfirmPassword').fill('Password@123');
  253 | 
  254 |     await page.locator('#register-button').click();
  255 | 
  256 |     await expect(page.locator('.ico-account')).toBeVisible();
  257 |   });
  258 | 
  259 |   test('AUTH TC20 My account page should open after registration', async ({ page }) => {
  260 |     await page.goto('/register');
  261 | 
  262 |     await page.locator('#FirstName').fill('Prabhav');
  263 |     await page.locator('#LastName').fill('Tiwari');
  264 |     await page.locator('#Email').fill(generateEmail());
  265 |     await page.locator('#Password').fill('Password@123');
  266 |     await page.locator('#ConfirmPassword').fill('Password@123');
  267 | 
  268 |     await page.locator('#register-button').click();
  269 | 
  270 |     await page.locator('.ico-account').click();
  271 | 
  272 |     await expect(page).toHaveURL(/customer/);
  273 |   });
  274 | 
  275 | 
  276 | });
```