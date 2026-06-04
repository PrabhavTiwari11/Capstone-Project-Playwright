import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Registration Service', () => {

  test('REG TC02 Male gender radio visible', async ({ page }) => {
    await open(page, '/register');
    await expectVisible(page, '#gender-male');
  });

  test('REG TC03 Female gender radio visible', async ({ page }) => {
    await open(page, '/register');
    await expectVisible(page, '#gender-female');
  });

  test('REG TC04 First name field visible', async ({ page }) => {
    await open(page, '/register');
    await expectVisible(page, '#FirstName');
  });

  test('REG TC05 Last name field visible', async ({ page }) => {
    await open(page, '/register');
    await expectVisible(page, '#LastName');
  });

  test('REG TC06 Email field visible', async ({ page }) => {
    await open(page, '/register');
    await expectVisible(page, '#Email');
  });

  test('REG TC07 Password field visible', async ({ page }) => {
    await open(page, '/register');
    await expectVisible(page, '#Password');
  });

  test('REG TC08 Confirm password field visible', async ({ page }) => {
    await open(page, '/register');
    await expectVisible(page, '#ConfirmPassword');
  });

  test('REG TC09 Register button visible', async ({ page }) => {
    await open(page, '/register');
    await expectVisible(page, '#register-button');
  });

  test('REG TC10 Empty form validation appears', async ({ page }) => {
    await open(page, '/register');
    await page.locator('#register-button').click();
    await expectVisible(page, '.field-validation-error');
  });

  test('REG TC15 Register URL should be correct', async ({ page }) => {
    await open(page, '/register');
    await expect(page).toHaveURL(/register/);
  });
});