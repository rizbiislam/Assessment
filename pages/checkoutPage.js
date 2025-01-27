class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.locators = {
        nameOnCardField: "//input[@name='name_on_card']",
        cardNumberField: "//input[@name='card_number']",
        cvcField: "//input[@name='cvc']",
        expiryMonthField: "//input[@name='expiry_month']",
        expiryYearField: "//input[@name='expiry_year']",
        placeOrderButton: "//button[@data-qa='place-order']",
      };
    }
  
    async fillPaymentDetails(paymentDetails) {
      const { nameOnCard, cardNumber, cvc, expiryMonth, expiryYear } = paymentDetails;
      await this.page.fill(this.locators.nameOnCardField, nameOnCard);
      await this.page.fill(this.locators.cardNumberField, cardNumber);
      await this.page.fill(this.locators.cvcField, cvc);
      await this.page.fill(this.locators.expiryMonthField, expiryMonth);
      await this.page.fill(this.locators.expiryYearField, expiryYear);
    }
  
    async placeOrder() {
      await this.page.click(this.locators.placeOrderButton);
    }
  }
  
  module.exports = CheckoutPage;
  