# **Automation Project**

This repository contains UI test automation scripts built using **Playwright** and the Page Object Model (POM). The project adheres to best practices, including proper assertions, and is configured to skip unnecessary files in GitHub.


# **Updated Plan for All Requirements**

This section outlines the detailed automation plan for the project requirements, ensuring robust interactions, proper assertions, and enhanced reliability.

---

## **1. Visit the Login Page**
- Navigate to the login page: `https://automationexercise.com/login`.

---

## **2. Complete the Sign-Up Process**
- **Required Fields:**
  - Fill in all mandatory fields such as Name, Email, and Password.
- **Non-Required Fields:**
  - Populate additional fields like Date of Birth to ensure proper validation.
- Add assertions to verify the successful account creation message.
- Include error handling for scenarios like duplicate email.

---

## **3. Select Product Category**
- Navigate to the **Men** category from the homepage.
- Select the **Jeans** sub-category.
- After that it will print a random product name.

---

## **4. View and Update Product**
- Click on **View Product** for any product in the selected category.
- **Update Quantity:**
  - Modify the product quantity to `2`.
  - Verify the interaction sequence: quantity update → add to cart.
- Add the product to the cart.

---

## **5. Proceed to Checkout**
- Go to the **Cart** page and verify the items and quantity.
- Click on **Proceed to Checkout** and confirm the checkout page loads correctly.
- **Dummy Payment Details:**
  - Fill in the payment details with dummy data.


---

## **6. Contact Us Form Submission**
- Navigate to the **Contact Us** page from the homepage.
- Fill in all fields, including Name, Email, and Subject.
- Attached a file (e.g., a `.json` or `.txt` or `.png` file).
- Submit the form and validate the success message.

---



# **Updated Plan for All Requirements**

This section outlines the detailed automation plan for the project requirements, ensuring robust interactions, proper assertions, and enhanced reliability.

---

## **1. Visit the Login Page**
- Navigated to the login page: `https://automationexercise.com/login`.

---

## **2. Complete the Sign-Up Process**
  - Fill in all mandatory fields such as Name, Email, and Password.
  - Populate additional fields like Date of Birth to ensure proper validation.
- Add assertions to verify the successful account creation message.

---

## **3. Select Product Category**
- Navigate to the **Men** category from the homepage.
- Select the **Jeans** sub-category.
- And print a random product name after filter or selects catagory.

---

## **4. View and Update Product**
- Click on **View Product** for any product in the selected category.
  - select arandom product
  - Modify the product quantity to `2`.
  - Verify the interaction sequence: quantity update → add to cart.
- Add the product to the cart.

---

## **5. Proceed to Checkout**
- Go to the **Cart** page and verify the items and quantity.
- Click on **Proceed to Checkout** and confirm the checkout page loads correctly.
- **Dummy Payment Details:**
  - Fill in the payment details with dummy data.
  - Ensure proper assertions to verify the input fields accept valid values.
- Confirm the order and verify the success message: "Your order has been placed successfully!"

---

## **6. Contact Us Form Submission**
- Navigate to the **Contact Us** page from the homepage.
- Fill in all fields, including Name, Email, and Subject.
- Attach a file (e.g., a `.json` or `.txt` file).
- Submit the form and validate the success message.
- Add error handling for invalid file types or missing fields.

---

## **Setup and Usage**

### Prerequisites
- Node.js installed
- Git installed

---

### **Step 1: Clone the Repository**
Run the following commands to clone the repository:
```bash
git clone https://github.com/rizbiislam/Assessment.git
cd automation-project

---

---

### **Step 2: Install Dependencies**
Run the following command to install required dependencies:
```bash
npm install
---

### **Step 3: Run Tests**

- **Run specific test:**
  Execute the the test in the project by running:
  ```bash
  npx playwright test tests/<test-file-name>.spec.js

---

### ** Run tests in headed mode: If you need to debug or visually observe the test execution, use:
  ```bash
npx playwright test --headed

---

### **Generate and view the test report: After running tests, generate and serve a report with:
  ```bash
npx playwright show-report

---

### **View test execution logs: To output logs during the test run, add the --debug flag:
```bash
npx playwright test --debug
---

