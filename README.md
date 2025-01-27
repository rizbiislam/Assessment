# **Automation Project**

This repository contains UI test automation scripts built using **Playwright** and the Page Object Model (POM). The project adheres to best practices, including proper assertions, and is configured to skip unnecessary files in GitHub.

---

## **Setup and Usage**

### Prerequisites
- Node.js installed (v14 or above)
- Git installed

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/rizbiislam/Assessment.git
cd automation-project

Step 2: Install Dependencies
Run the following command to install required dependencies:

bash
Copy
npm install
Step 3: Run Tests
Run all tests:
bash
Copy
npx playwright test
Run a specific test file:
bash
Copy
npx playwright test tests/<test-file-name>.spec.js
Generate and view the test report:
bash
Copy
npx playwright show-report

