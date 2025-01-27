const { test } = require('@playwright/test');
const ContactUsPage = require('../pages/contactUsPage');
const contactUsData = require('../data/contactUsData.json');
const path = require('path');

test.describe('Contact Us Form Submission', () => {
  test('Submit Contact Us Form with File Attachment', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.navigate();

    const filePath = path.resolve(__dirname, '../screenshots/catagory_success.png');
    await contactUsPage.fillContactForm(
      contactUsData.name,
      contactUsData.email,
      contactUsData.subject,
      contactUsData.message,
      filePath
    );

    await page.screenshot({ path: `screenshots/contactUs_success.png` });
    await contactUsPage.submitForm();
    console.log("Contact Us form submitted successfully!");
  });
});
