# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> nopCommerce Authentication Test Cases >> AUTH TC20 My account page should open after registration
- Location: tests\authentication.spec.js:259:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.ico-account')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - heading "demo.nopcommerce.com" [level=1] [ref=e5]
      - heading "Performing security verification" [level=2] [ref=e6]
      - paragraph [ref=e7]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e11]:
    - generic [ref=e13]:
      - generic [ref=e15]:
        - text: "Ray ID:"
        - code [ref=e16]: a02298e2fc09d382
      - generic [ref=e17]:
        - generic [ref=e18]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e19] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e21] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
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
  226 |     await expect(page.locator('.ico-logout')).toBeVisible();
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
> 270 |     await page.locator('.ico-account').click();
      |                                        ^ Error: locator.click: Test timeout of 60000ms exceeded.
  271 | 
  272 |     await expect(page).toHaveURL(/customer/);
  273 |   });
  274 | 
  275 | 
  276 | });
```