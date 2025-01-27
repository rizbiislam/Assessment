const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const SignupPage = require('../pages/signupPage');
const signupData = require('../data/signupData.json');

test.describe('Sign-Up Process', () => {
  test('Complete the sign-up process', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);

    await loginPage.navigate();

    await loginPage.fillSignupForm(signupData.name, signupData.email);

    await signupPage.completeSignupForm(signupData);

    try {
        await page.waitForSelector('text=Account Created Successfully', { timeout: 60000 });
        console.log('Account created successfully!');
        await page.screenshot({ path: `screenshots/signup_success.png` });
      } catch (error) {
        console.error('Error waiting for success message:', error);
        await page.screenshot({ path: `screenshots/error.png` });
        throw error;
      }

    //await page.screenshot({ path: `screenshots/signup_success.png` });
  });
});
