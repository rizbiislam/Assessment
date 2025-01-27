const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const CartPage = require('../pages/cartPage');
const userData = require('../data/signupData.json');
const cartData = require('../data/cartData.json');

test.describe('Proceed to Checkout and Place Order', () => {
  test('Complete Checkout Process after Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    await loginPage.navigate();
    await loginPage.login(userData.email, userData.password);
    await cartPage.navigateToCart();
    await cartPage.proceedToCheckout();
    await cartPage.fillPaymentDetails(cartData.paymentDetails);

    const successMessage = await cartPage.confirmOrder();
    console.log('Order Success Message:', successMessage);
    //expect(successMessage).toContain('Order has been placed successfully');
  });
});
