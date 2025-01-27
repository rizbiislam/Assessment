class ContactUsPage {
    constructor(page) {
      this.page = page;
      this.locators = {
        contactUsLink: "//a[contains(text(), 'Contact us')]",
        nameField: "//input[@name='name']",
        emailField: "//input[@name='email']",
        subjectField: "//input[@name='subject']",
        messageField: "//textarea[@name='message']",
        uploadFileInput: "//input[@name='upload_file']",
        submitButton: "//input[@name='submit']",
        successMessage: "//div[contains(text(), 'Success! Your details have been submitted successfully.')]",
      };
    }
  
    async navigate() {
      await this.page.goto('https://automationexercise.com');
      await this.page.click(this.locators.contactUsLink);
      await this.page.waitForSelector(this.locators.nameField);
    }
  
    async fillContactForm(name, email, subject, message, filePath) {
      await this.page.fill(this.locators.nameField, name);
      await this.page.fill(this.locators.emailField, email);
      await this.page.fill(this.locators.subjectField, subject);
      await this.page.fill(this.locators.messageField, message);
      //await this.page.click(this.locators.uploadFileInput);
      await this.page.setInputFiles(this.locators.uploadFileInput, filePath);
      console.log(`file path: ${filePath}`);
    }
  
    async submitForm() {
        
        await this.page.click(this.locators.submitButton);
    }
  }
  
  module.exports = ContactUsPage;
  