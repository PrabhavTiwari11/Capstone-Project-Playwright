class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('.ico-login');
    this.registerLink = page.locator('.ico-register');
    this.cartLink = page.locator('.ico-cart');
    this.searchBox = page.locator('#small-searchterms');
    this.searchButton = page.locator('input[value="Search"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async goToLogin() {
    await this.loginLink.click();
  }

  async goToRegister() {
    await this.registerLink.click();
  }

  async searchProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }
}

module.exports = { HomePage };