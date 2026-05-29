const { test, expect } = require('@playwright/test');

test.describe('nopCommerce Checkout Test Cases', () => {
  test.setTimeout(120000);

  async function registerUser(page) {
    const email = `prabhav${Date.now()}@test.com`;

    await page.goto('https://demo.nopcommerce.com/register', {
      waitUntil: 'domcontentloaded'
    });

    await page.locator('#gender-male').check();
    await page.locator('#FirstName').fill('Prabhav');
    await page.locator('#LastName').fill('T');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill('Test@12345');
    await page.locator('#ConfirmPassword').fill('Test@12345');
    await page.locator('#register-button').click();

    return email;
  }

  async function addProductToCart(page) {
    await page.goto('https://demo.nopcommerce.com/build-your-own-computer', {
      waitUntil: 'domcontentloaded'
    });

    await page.locator('#product_attribute_1').selectOption({ index: 1 });
    await page.locator('#product_attribute_2').selectOption({ index: 1 });
    await page.locator('#product_attribute_3_6').check();

    await page.locator('#add-to-cart-button-1').click();
    await page.waitForTimeout(2000);

    await page.goto('https://demo.nopcommerce.com/cart', {
      waitUntil: 'domcontentloaded'
    });
  }

  async function goToCheckout(page) {
    await registerUser(page);
    await addProductToCart(page);

    await page.locator('#termsofservice').check();
    await page.locator('#checkout').click();

    await expect(page).toHaveURL(/onepagecheckout/);
  }

  async function fillBillingAddress(page) {
    await page.locator('#BillingNewAddress_FirstName').fill('Prabhav');
    await page.locator('#BillingNewAddress_LastName').fill('T');
    await page.locator('#BillingNewAddress_Email').fill('tiwariprabhav111@gmail.com');
    await page.locator('#BillingNewAddress_Company').fill('NIET');
    await page.locator('#BillingNewAddress_CountryId').selectOption({ label: 'United States of America' });

    await page.locator('#BillingNewAddress_City').fill('Kanpur');
    await page.locator('#BillingNewAddress_Address1').fill('Civil Lines');
    await page.locator('#BillingNewAddress_Address2').fill('Near Metro');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('208001');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('9876543210');
    await page.locator('#BillingNewAddress_FaxNumber').fill('123456');

    await page.locator('#billing-buttons-container button').click();
  }

  async function completeCheckoutTillShipping(page) {
    await goToCheckout(page);
    await fillBillingAddress(page);

    await expect(page.locator('#opc-shipping_method')).toBeVisible();
  }

  async function selectShippingMethod(page) {
    await completeCheckoutTillShipping(page);

    await page.locator('input[name="shippingoption"]').first().check();
    await page.locator('#shipping-method-buttons-container button').click();

    await expect(page.locator('#opc-payment_method')).toBeVisible();
  }

  async function selectPaymentMethod(page) {
    await selectShippingMethod(page);

    await page.locator('input[name="paymentmethod"]').first().check();
    await page.locator('#payment-method-buttons-container button').click();

    await expect(page.locator('#opc-payment_info')).toBeVisible();
  }

  async function completePaymentInfo(page) {
    await selectPaymentMethod(page);

    await page.locator('#payment-info-buttons-container button').click();

    await expect(page.locator('#opc-confirm_order')).toBeVisible();
  }

  test('CHECKOUT TC01 Cart page should open with product', async ({ page }) => {
    await registerUser(page);
    await addProductToCart(page);

    await expect(page).toHaveURL(/cart/);
  });

  test('CHECKOUT TC02 Terms of service checkbox should be visible', async ({ page }) => {
    await registerUser(page);
    await addProductToCart(page);

    await expect(page.locator('#termsofservice')).toBeVisible();
  });

  test('CHECKOUT TC03 Checkout button should be visible', async ({ page }) => {
    await registerUser(page);
    await addProductToCart(page);

    await expect(page.locator('#checkout')).toBeVisible();
  });

  test('CHECKOUT TC04 Checkout without accepting terms should show warning', async ({ page }) => {
    await registerUser(page);
    await addProductToCart(page);

    await page.locator('#checkout').click();

    await expect(page.locator('#terms-of-service-warning-box')).toBeVisible();
  });

  test('CHECKOUT TC05 Accept terms and open checkout page', async ({ page }) => {
    await goToCheckout(page);

    await expect(page).toHaveURL(/onepagecheckout/);
  });

  test('CHECKOUT TC06 Billing first name field should be visible', async ({ page }) => {
    await goToCheckout(page);

    await expect(page.locator('#BillingNewAddress_FirstName')).toBeVisible();
  });

  test('CHECKOUT TC07 Billing last name field should be visible', async ({ page }) => {
    await goToCheckout(page);

    await expect(page.locator('#BillingNewAddress_LastName')).toBeVisible();
  });

  test('CHECKOUT TC08 Billing email field should be visible', async ({ page }) => {
    await goToCheckout(page);

    await expect(page.locator('#BillingNewAddress_Email')).toBeVisible();
  });

  test('CHECKOUT TC09 Billing country dropdown should be visible', async ({ page }) => {
    await goToCheckout(page);

    await expect(page.locator('#BillingNewAddress_CountryId')).toBeVisible();
  });

  test('CHECKOUT TC10 Billing city field should be visible', async ({ page }) => {
    await goToCheckout(page);

    await expect(page.locator('#BillingNewAddress_City')).toBeVisible();
  });

  test('CHECKOUT TC11 Billing address field should be visible', async ({ page }) => {
    await goToCheckout(page);

    await expect(page.locator('#BillingNewAddress_Address1')).toBeVisible();
  });

  test('CHECKOUT TC12 Billing zip code field should be visible', async ({ page }) => {
    await goToCheckout(page);

    await expect(page.locator('#BillingNewAddress_ZipPostalCode')).toBeVisible();
  });

  test('CHECKOUT TC13 Billing phone number field should be visible', async ({ page }) => {
    await goToCheckout(page);

    await expect(page.locator('#BillingNewAddress_PhoneNumber')).toBeVisible();
  });

  test('CHECKOUT TC14 Fill billing address and continue to shipping method', async ({ page }) => {
    await completeCheckoutTillShipping(page);

    await expect(page.locator('#opc-shipping_method')).toBeVisible();
  });

  test('CHECKOUT TC15 Shipping methods should be visible', async ({ page }) => {
    await completeCheckoutTillShipping(page);

    await expect(page.locator('input[name="shippingoption"]').first()).toBeVisible();
  });

  test('CHECKOUT TC16 Select shipping method and continue to payment method', async ({ page }) => {
    await selectShippingMethod(page);

    await expect(page.locator('#opc-payment_method')).toBeVisible();
  });

  test('CHECKOUT TC17 Payment methods should be visible', async ({ page }) => {
    await selectShippingMethod(page);

    await expect(page.locator('input[name="paymentmethod"]').first()).toBeVisible();
  });

  test('CHECKOUT TC18 Select payment method and continue to payment info', async ({ page }) => {
    await selectPaymentMethod(page);

    await expect(page.locator('#opc-payment_info')).toBeVisible();
  });

  test('CHECKOUT TC19 Continue payment info and open confirm order section', async ({ page }) => {
    await completePaymentInfo(page);

    await expect(page.locator('#opc-confirm_order')).toBeVisible();
  });

  test('CHECKOUT TC20 Confirm order and verify completed page', async ({ page }) => {
    await completePaymentInfo(page);

    await page.locator('#confirm-order-buttons-container button').click();

    await expect(page).toHaveURL(/checkout\/completed/);
    await expect(page.locator('body')).toContainText(/Thank you|order/);
  });
});