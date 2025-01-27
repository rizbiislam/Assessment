class CartPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      cartButton: "//a[contains(text(), ' Cart')]",
      proceedToCheckoutButton: "//a[contains(text(), 'Proceed To Checkout')]",
      placeOrderButton: "//a[contains(text(), 'Place Order')]",
      paymentForm: {
        nameField: "//input[@name='name_on_card']",
        cardNumberField: "//input[@name='card_number']",
        cvcField: "//input[@name='cvc']",
        expirationMonthField: "//input[@name='expiry_month']",
        expirationYearField: "//input[@name='expiry_year']",
      },
      confirmOrderButton: "//button[contains(text(), 'Pay and Confirm Order')]",
    };
  }

  async navigateToCart() {
    await this.page.click(this.locators.cartButton);
    await this.page.waitForSelector(this.locators.proceedToCheckoutButton);
  }

  async proceedToCheckout() {
    await this.page.waitForSelector(this.locators.proceedToCheckoutButton);
    await this.page.click(this.locators.proceedToCheckoutButton);
    await this.page.waitForSelector(this.locators.placeOrderButton);
    await this.page.click(this.locators.placeOrderButton);
    await this.page.waitForSelector(this.locators.paymentForm.nameField);
  }

  async fillPaymentDetails(paymentDetails) {
    const { name, cardNumber, cvc, expirationMonth, expirationYear } = paymentDetails;
    await this.page.fill(this.locators.paymentForm.nameField, name);
    await this.page.fill(this.locators.paymentForm.cardNumberField, cardNumber);
    await this.page.fill(this.locators.paymentForm.cvcField, cvc);
    await this.page.fill(this.locators.paymentForm.expirationMonthField, expirationMonth);
    await this.page.fill(this.locators.paymentForm.expirationYearField, expirationYear);
  }

  async confirmOrder() {
    await this.page.click(this.locators.confirmOrderButton);
  }
}

module.exports = CartPage;
