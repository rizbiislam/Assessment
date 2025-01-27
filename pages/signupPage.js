class SignupPage {
    constructor(page) {
      this.page = page;
      this.locators = {
        passwordField: "//input[@data-qa='password']",
        genderMaleRadio: "//input[@id='id_gender1']",
        dobDropDown: {
          day: "//select[@id='days']",
          month: "//select[@id='months']",
          year: "//select[@id='years']",
        },
        addressField1: "//input[@id='address1']",
        addressField2: "//input[@id='address2']",
        cityField: "//input[@id='city']",
        stateField: "//input[@id='state']",
        countryDropDown: "//select[@id='country']",
        zipcodeField: "//input[@id='zipcode']",
        firstNameField: "//input[@id='first_name']",
        lastNameField: "//input[@id='last_name']",
        mobileNumberField: "//input[@id='mobile_number']",
        submitButton: "//button[@data-qa='create-account']",
      };
    }
  
    async completeSignupForm(data) {
      const { password, dob, address, firstName, lastName, mobileNumber } = data;
  
      await this.page.fill(this.locators.passwordField, password);
      await this.page.check(this.locators.genderMaleRadio);
      await this.page.selectOption(this.locators.dobDropDown.day, dob.day);
      await this.page.selectOption(this.locators.dobDropDown.month, dob.month);
      await this.page.selectOption(this.locators.dobDropDown.year, dob.year);
      await this.page.fill(this.locators.addressField1, address.line1);
      if (address.line2) {
        await this.page.fill(this.locators.addressField2, address.line2);
      }
      await this.page.fill(this.locators.cityField, address.city);
      await this.page.fill(this.locators.stateField, address.state);
      await this.page.selectOption(this.locators.countryDropDown, address.country);
      await this.page.fill(this.locators.zipcodeField, address.zipcode);
      await this.page.fill(this.locators.firstNameField, firstName);
      await this.page.fill(this.locators.lastNameField, lastName);
      await this.page.fill(this.locators.mobileNumberField, mobileNumber);
      await this.page.click(this.locators.submitButton);
    }
  }
  
  module.exports = SignupPage;
  