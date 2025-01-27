# **API Test Requirements and Implementation**

This section outlines the API tests implemented to meet the provided requirements. The tests validate functionality for the brand list and user login endpoints.

---

## **API Tests Overview**

### **Test 1: Validate Brand List**
- **Endpoint:** `https://automationexercise.com/api/brandsList`
- **Method:** `GET`

#### **Tests:**
1. Verify that the response contains the following brands:
   - Polo
   - Babyhug
   - Biba
2. Verify that the response does NOT contain the following brands:
   - Heineken
   - BMW
   - Razor

#### **Implementation:**
- Perform a `GET` request to fetch the brand list.
- Validate the response to ensure required brands exist and excluded brands are not present.
- Assertion ensures accurate comparison of brand data.

---

### **Test 2: Verify User Login**
- **Endpoint:** `https://automationexercise.com/api/verifyLogin`
- **Method:** `POST`

#### **Request Parameters:**
- `email` (used in the UI testing section)
- `password` (used in the UI testing section)

#### **Tests:**
1. Use the **email** and **password** from the UI testing process.
2. Verify that the response message is: `"User exists!"`

#### **Implementation:**
- Perform a `POST` request with `form-data` including `email` and `password`.
- Validate that the response contains the expected message, indicating successful user verification.

---

## **Postman API Test Collection**

The API tests for the above requirements have been implemented and passed successfully using **Postman**. Access the collection through the following link:

[Postman API Test Collection](https://api.postman.com/collections/38181257-7dc69f59-6a68-4661-9688-9bb70300fe74?access_key=PMAT-01JJJ5XCXCCDQQYYD1XG9ME081)

---

## **How to Use the Collection**

### **1. Import the Collection**
1. Open Postman.
2. Click the **Import** button and choose the **Link** tab.
3. Paste the collection link and import it into your workspace.

### **2. Run the Tests**
1. Open the collection in Postman.
2. Click the **Run Collection** button.
3. View test results in the Collection Runner, ensuring all assertions pass.

---

## **Outcome**
- Both API tests passed successfully:
  1. **Validate Brand List:** Ensures brand inclusion and exclusion criteria are met.
  2. **Verify User Login:** Confirms valid user authentication with appropriate response validation.
