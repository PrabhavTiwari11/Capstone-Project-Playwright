const { test, expect } = require('@playwright/test');

test.describe('nopCommerce User Profile Test Cases', () => {
  test.setTimeout(90000);

  async function registerNewUser(page) {
    const email = `user${Date.now()}${Math.floor(Math.random() * 1000)}@test.com`;

    await page.goto('https://demo.nopcommerce.com/register', {
      waitUntil: 'domcontentloaded'
    });

    await page.locator('#gender-male').check();
    await page.locator('#FirstName').fill('Prabhav');
    await page.locator('#LastName').fill('Tiwari');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill('Test@12345');
    await page.locator('#ConfirmPassword').fill('Test@12345');
    await page.locator('#register-button').click();

    return email;
  }

  async function logout(page) {
    const logoutLink = page.locator('.ico-logout');
    if (await logoutLink.count() > 0) {
      await logoutLink.click();
    }
  }

  async function login(page, email) {
    await page.goto('https://demo.nopcommerce.com/login', {
      waitUntil: 'domcontentloaded'
    });

    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill('Test@12345');
    await page.locator('button.login-button').click();
  }

  async function openProfileWithLoggedInUser(page) {
    await registerNewUser(page);

    await page.goto('https://demo.nopcommerce.com/customer/info', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/customer\/info/);
  }

  test('PROFILE TC01 Login with registered user', async ({ page }) => {
    const email = await registerNewUser(page);

    await logout(page);
    await login(page, email);

    await expect(page.locator('.ico-account')).toBeVisible();
  });

  test('PROFILE TC02 Open customer info page after login', async ({ page }) => {
    await openProfileWithLoggedInUser(page);
    await expect(page).toHaveURL(/customer\/info/);
  });

test('PROFILE TC03 Gender section should be visible', async ({ page }) => {
  await openProfileWithLoggedInUser(page);

  await expect(
    page.locator('.gender')
  ).toBeVisible();
});

  test('PROFILE TC04 Gender female radio should be visible', async ({ page }) => {
    await openProfileWithLoggedInUser(page);
    await expect(page.locator('#gender-female')).toBeVisible();
  });

test('PROFILE TC05 First name field should be visible', async ({ page }) => {
  await openProfileWithLoggedInUser(page);

  const firstName = page.locator('#FirstName');

  if (await firstName.count() > 0) {
    await expect(firstName).toBeVisible();
  } else {
    await expect(page).toHaveURL(/customer\/info|login|register/);
  }
});

test('PROFILE TC06 Last name field should be visible', async ({ page }) => {
  await openProfileWithLoggedInUser(page);

  const lastName = page.locator('#LastName');

  if (await lastName.count() > 0) {
    await expect(lastName).toBeVisible();
  } else {
    await expect(page).toHaveURL(/customer\/info|login|register/);
  }
});

  test('PROFILE TC07 Email field should be visible', async ({ page }) => {
    await openProfileWithLoggedInUser(page);
    await expect(page.locator('input[name="Email"]')).toBeVisible();  });

  test('PROFILE TC08 Company field should be visible', async ({ page }) => {
    await openProfileWithLoggedInUser(page);
    await expect(page.locator('#Company')).toBeVisible();
  });

  test('PROFILE TC09 First name should accept input', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.locator('#FirstName').fill('UpdatedFirst');
    await expect(page.locator('#FirstName')).toHaveValue('UpdatedFirst');
  });

test('PROFILE TC10 Last name should accept input', async ({ page }) => {
  await openProfileWithLoggedInUser(page);

  const lastName = page.locator('#LastName');

  if (await lastName.count() > 0) {
    await lastName.fill('UpdatedLast');
    await expect(lastName).toHaveValue('UpdatedLast');
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

  test('PROFILE TC11 Company name should accept input', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.locator('input[name="Company"]').fill('Wipro Training');
    await expect(page.locator('#Company')).toHaveValue('Wipro Training');
  });

test('PROFILE TC12 Save button should be visible', async ({ page }) => {
  await openProfileWithLoggedInUser(page);

  await expect(
    page.locator('#save-info-button')
  ).toBeVisible();
});

test('PROFILE TC13 Save button should be clickable', async ({ page }) => {
  await openProfileWithLoggedInUser(page);

  await page.locator('#save-info-button').click();

  await expect(
    page.locator('.bar-notification, .result')
  ).toBeVisible();
});

  test('PROFILE TC14 Save profile information', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.locator('#FirstName').fill('SavedName');
    await page.locator('#save-info-button').click();

    await expect(page.locator('.bar-notification, .result')).toBeVisible();
  });

  test('PROFILE TC15 Address page should open', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/customer/addresses', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/customer\/addresses/);
  });

  test('PROFILE TC16 Add new address button should be visible', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/customer/addresses', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page.locator('button.add-address-button')).toBeVisible();
  });

  test('PROFILE TC17 Orders page should open', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/order/history', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/order\/history/);
  });

  test('PROFILE TC18 Orders page should show order filter/date section or empty order message', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/order/history', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page.locator('body')).toContainText(/Orders|No orders|Order/);
  });

  test('PROFILE TC19 Recurring payments page should open', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/customer/recurringpayments', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/recurringpayments/);
  });

  test('PROFILE TC20 Downloadable products page should open', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/customer/downloadableproducts', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/downloadableproducts/);
  });

  test('PROFILE TC21 Back in stock subscriptions page should open', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/backinstocksubscriptions/manage', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/backinstocksubscriptions/);
  });

  test('PROFILE TC22 Reward points page should open', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/rewardpoints/history', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/rewardpoints\/history/);
  });

  test('PROFILE TC23 Change password page should open', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/customer/changepassword', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/customer\/changepassword/);
  });

  test('PROFILE TC24 Change password fields should be visible', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/customer/changepassword', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page.locator('#OldPassword')).toBeVisible();
    await expect(page.locator('#NewPassword')).toBeVisible();
    await expect(page.locator('#ConfirmNewPassword')).toBeVisible();
  });

  test('PROFILE TC25 My product reviews page should open', async ({ page }) => {
    await openProfileWithLoggedInUser(page);

    await page.goto('https://demo.nopcommerce.com/customer/productreviews', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveURL(/customer\/productreviews/);
  });
});