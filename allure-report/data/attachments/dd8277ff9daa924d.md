# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC17 Registration success message should appear
- Location: tests\authentication.spec.js:213:5

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
  - code: a022b857dad9906c
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  172 |     await expect(page.locator('body')).toContainText('Login was unsuccessful');  });
  173 | 
  174 |   // test('AUTH TC12 Remember me checkbox should be clickable', async ({ page }) => {
  175 |   //   await page.goto('/login');
  176 | 
  177 |   //   await page.locator('#RememberMe').check();
  178 | 
  179 |   //   await expect(page.locator('#RememberMe')).toBeChecked();
  180 |   // });
  181 | 
  182 |   // test('AUTH TC13 Forgot password page should open', async ({ page }) => {
  183 |   //   await page.goto('/login');
  184 | 
  185 |   //   await page.locator('a[href="/passwordrecovery"]').click();
  186 | 
  187 |   //   await expect(page).toHaveURL(/passwordrecovery/);
  188 |   // });
  189 | 
  190 |   // test('AUTH TC14 Password recovery field should be visible', async ({ page }) => {
  191 |   //   await page.goto('/passwordrecovery');
  192 | 
  193 |   //   await expect(page.locator('#Email')).toBeVisible();
  194 |   // });
  195 | 
  196 |   // test('AUTH TC15 Password recovery with empty email should show validation', async ({ page }) => {
  197 |   //   await page.goto('/passwordrecovery');
  198 | 
  199 |   //   await page.locator('button.password-recovery-button').click();
  200 | 
  201 |   //   await expect(page.locator('#Email-error')).toBeVisible();
  202 |   // });
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
> 229 |     .toContainText('Your registration completed');
      |      ^ Error: expect(locator).toContainText(expected) failed
  230 | 
  231 | });
  232 | 
  233 | // test('AUTH TC18 Register button should submit form', async ({ page }) => {
  234 | 
  235 | //   const email = `testuser${Date.now()}@gmail.com`;
  236 | 
  237 | //   await page.goto('/register');
  238 | 
  239 | //   await page.locator('#FirstName').fill('Prabhav');
  240 | //   await page.locator('#LastName').fill('Tiwari');
  241 | //   await page.locator('#Email').fill(email);
  242 | 
  243 | //   await page.locator('#Password').fill('Password@123');
  244 | //   await page.locator('#ConfirmPassword').fill('Password@123');
  245 | 
  246 | //   await page.locator('#register-button').click();
  247 | 
  248 | //   await expect(page).toHaveURL(/register/);
  249 | 
  250 | // });
  251 | // test('AUTH TC19 Registration result page should open', async ({ page }) => {
  252 | 
  253 | //   const email = `testuser${Date.now()}@gmail.com`;
  254 | 
  255 | //   await page.goto('/register');
  256 | 
  257 | //   await page.locator('#FirstName').fill('Prabhav');
  258 | //   await page.locator('#LastName').fill('Tiwari');
  259 | //   await page.locator('#Email').fill(email);
  260 | 
  261 | //   await page.locator('#Password').fill('Password@123');
  262 | //   await page.locator('#ConfirmPassword').fill('Password@123');
  263 | 
  264 | //   await page.locator('#register-button').click();
  265 | 
  266 | //   await expect(page.url()).toContain('register');
  267 | // });
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
  284 |   await expect(page.locator('body')).toContainText('Register');
  285 | 
  286 | });
  287 | 
  288 | 
  289 | });
```