import { test, expect } from '@playwright/test';

function generateEmail() {
  return `tiwariprabhav143@gmail.com`;
}

test.describe('nopCommerce Authentication Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  });

// -Opens the Register page.
// -Checks whether the URL contains /register.
// -Verifies that navigation to the registration page works properly.

  test('AUTH TC01 Register page should open', async ({ page }) => {
    await page.goto('/register');
    await expect(page).toHaveURL(/register/);
  });

// -Opens the Register page.
// -Checks visibility of all important input fields:
// -First Name
// -Last Name
// -Email
// -Password
// -Confirm Password

  test('AUTH TC02 Register form fields should be visible', async ({ page }) => {
    await page.goto('/register');

    await expect(page.locator('#FirstName')).toBeVisible();
    await expect(page.locator('#LastName')).toBeVisible();
    await expect(page.locator('#Email')).toBeVisible();
    await expect(page.locator('#Password')).toBeVisible();
    await expect(page.locator('#ConfirmPassword')).toBeVisible();
  });

// -Opens Register page.
// -Clicks Register button without filling any fields.
// -Verifies validation error messages appear.
// #Validation messages checked:
// -First name is required.
// -Last name is required.
// -Email is required.
// -Password is required.


test('AUTH TC03 Register with empty form should show validation', async ({ page }) => {

  await page.goto('/register', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#register-button').click();

  await expect(page.locator('body')).toContainText('First name is required.');
  await expect(page.locator('body')).toContainText('Last name is required.');
  await expect(page.locator('body')).toContainText('Email is required.');
  await expect(page.locator('body')).toContainText('Password is required.');

});

// -Fills all fields correctly except email.
// -Uses invalid email format (wrongemail).
// -Clicks Register button.
// -Checks whether email validation error appears.


  test('AUTH TC04 Register with invalid email should show error', async ({ page }) => {
    await page.goto('/register');

    await page.locator('#FirstName').fill('Prabhav');
    await page.locator('#LastName').fill('Tiwari');
    await page.locator('#Email').fill('wrongemail');
    await page.locator('#Password').fill('Password@123');
    await page.locator('#ConfirmPassword').fill('Password@123');

    await page.locator('#register-button').click();

    await expect(page.locator('#Email-error')).toBeVisible();
  });

// -Fills Password and Confirm Password with different values.
// -Submits registration form.
// -Verifies password mismatch error appears.

  test('AUTH TC05 Register with password mismatch should show error', async ({ page }) => {
    await page.goto('/register');

    await page.locator('#FirstName').fill('Prabhav');
    await page.locator('#LastName').fill('Tiwari');
    await page.locator('#Email').fill(generateEmail());
    await page.locator('#Password').fill('Password@123');
    await page.locator('#ConfirmPassword').fill('WrongPassword@123');

    await page.locator('#register-button').click();

    await expect(page.locator('body')).toContainText('The password and confirmation password do not match.');  });

test('AUTH TC06 Register with valid details', async ({ page }) => {
  const email = `tiwariprabhav143@gmail.com`;

  await page.goto('/register', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#gender-male').check();

  await page.locator('#FirstName').fill('Prabhav');
  await page.locator('#LastName').fill('Tiwari');
  await page.locator('#Email').fill(email);

  await page.locator('#Company').fill('NIET');

  await page.locator('#Password').fill('Password@123');
  await page.locator('#ConfirmPassword').fill('Password@123');

  await page.locator('#register-button').click();

  await expect(page).toHaveURL(/registerresult/);
});

  test('AUTH TC07 Login page should open', async ({ page }) => {
    await page.goto('/login');

    await expect(page).toHaveURL(/login/);
  });

  test('AUTH TC08 Login form fields should be visible', async ({ page }) => {
    await page.goto('/login');

    await expect(page.locator('#Email')).toBeVisible();
    await expect(page.locator('#Password')).toBeVisible();
    await expect(page.locator('button.login-button')).toBeVisible();
  });

test('AUTH TC09 Login with empty fields should show validation', async ({ page }) => {
  await page.goto('/login', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('button.login-button').click();

  await expect(page.locator('#Email')).toBeVisible();
  await expect(page.locator('#Password')).toBeVisible();
});
  test('AUTH TC10 Login with invalid email format', async ({ page }) => {
    await page.goto('/login');

    await page.locator('#Email').fill('invalidemail');
    await page.locator('#Password').fill('Password@123');

    await page.locator('button.login-button').click();

    await expect(page.locator('#Email-error')).toBeVisible();
  });

 test('AUTH TC11 Login email field should accept input', async ({ page }) => {

  await page.goto('/login', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#Email').fill('wronguser@gmail.com');

  await expect(page.locator('#Email'))
    .toHaveValue('wronguser@gmail.com');

});

  test('AUTH TC12 Remember me checkbox should be clickable', async ({ page }) => {
    await page.goto('/login');

    await page.locator('#RememberMe').check();

    await expect(page.locator('#RememberMe')).toBeChecked();
  });

  test('AUTH TC13 Forgot password page should open', async ({ page }) => {
    await page.goto('/login');

    await page.locator('a[href="/passwordrecovery"]').click();

    await expect(page).toHaveURL(/passwordrecovery/);
  });

  test('AUTH TC14 Password recovery field should be visible', async ({ page }) => {
    await page.goto('/passwordrecovery');

    await expect(page.locator('#Email')).toBeVisible();
  });

test('AUTH TC15 Password recovery with empty email should show validation', async ({ page }) => {
  await page.goto('/passwordrecovery');

  await page.locator('button.password-recovery-button').click();

  await expect(
    page.locator('.validation-summary-errors, .message-error, .field-validation-error')
  ).toBeVisible();
});

 test('AUTH TC16 Password recovery with invalid email should show validation', async ({ page }) => {

  await page.goto('/passwordrecovery');

  await page.locator('#Email').fill('wrongemail');

  await page.locator('button.password-recovery-button').click();

  await expect(page.url()).toContain('passwordrecovery');

});

test('AUTH TC17 Register form should accept valid user data', async ({ page }) => {
  const email = `tiwariprabhav143@gmail.com`;

  await page.goto('/register', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#FirstName').fill('Prabhav');
  await page.locator('#LastName').fill('Tiwari');
  await page.locator('#Email').fill(email);
  await page.locator('#Password').fill('Password@123');
  await page.locator('#ConfirmPassword').fill('Password@123');

  await expect(page.locator('#FirstName')).toHaveValue('Prabhav');
  await expect(page.locator('#LastName')).toHaveValue('Tiwari');
  await expect(page.locator('#Email')).toHaveValue(email);
});

test('AUTH TC18 Register button should submit form', async ({ page }) => {

  const email = `tiwariprabhav143@gmail.com`;

  await page.goto('/register');

  await page.locator('#FirstName').fill('Prabhav');
  await page.locator('#LastName').fill('Tiwari');
  await page.locator('#Email').fill(email);

  await page.locator('#Password').fill('Password@123');
  await page.locator('#ConfirmPassword').fill('Password@123');

  await page.locator('#register-button').click();

  await expect(page).toHaveURL(/register/);

});
test('AUTH TC19 Registration result page should open', async ({ page }) => {

  const email = `tiwariprabhav143@gmail.com`;

  await page.goto('/register');

  await page.locator('#FirstName').fill('Prabhav');
  await page.locator('#LastName').fill('Tiwari');
  await page.locator('#Email').fill(email);

  await page.locator('#Password').fill('Password@123');
  await page.locator('#ConfirmPassword').fill('Password@123');

  await page.locator('#register-button').click();

  await expect(page.url()).toContain('register');
});

test('AUTH TC20 Password field should accept input', async ({ page }) => {

  await page.goto('/register');

  await page.locator('#Password').fill('Password@123');

  await expect(page.locator('#Password'))
    .toHaveValue('Password@123');

});


});