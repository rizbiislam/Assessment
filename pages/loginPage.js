class LoginPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      nameField: "//input[@data-qa='signup-name']",
      emailField: "//input[@data-qa='signup-email']",
      signUpButton: "//button[@data-qa='signup-button']",
      loginEmailField: "//input[@data-qa='login-email']",
      loginPasswordField: "//input[@data-qa='login-password']",
      loginButton: "//button[@data-qa='login-button']",
      logoutButton: "//a[contains(text(), 'Logout')]",
    };
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async fillSignupForm(name, email) {
    await this.page.fill(this.locators.nameField, name);
    await this.page.fill(this.locators.emailField, email);
    await this.page.click(this.locators.signUpButton);
  }

  async login(email, password) {
    await this.page.fill(this.locators.loginEmailField, email);
    await this.page.fill(this.locators.loginPasswordField, password);
    await this.page.click(this.locators.loginButton);
    // await this.page.waitForSelector(this.locators.logoutButton);
  }
}

module.exports = LoginPage;
