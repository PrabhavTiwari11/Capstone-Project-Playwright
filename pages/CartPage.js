class CartPage {
  constructor(page) {
    this.page = page;
    this.cartQty = page.locator('.cart-qty');
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.locator('#checkout');
  }

  async openCart() {
    await this.page.goto('/cart');
  }

  async acceptTermsAndCheckout() {
    await this.termsCheckbox.check();
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };