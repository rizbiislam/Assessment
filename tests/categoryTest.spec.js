const { test } = require('@playwright/test');
const CategoryPage = require('../pages/categoryPage');
const categoryData = require('../data/categoryData.json');

test('Navigate to Men > Jeans and print first product details', async ({ page }) => {
  const categoryPage = new CategoryPage(page);

  const { category, subcategory } = categoryData;

  await page.goto('https://automationexercise.com/products');

  await categoryPage.navigateToCategory(category, subcategory);

  await categoryPage.printFirstProductDetails();
  await page.screenshot({ path: `screenshots/catagory_success.png` });
});
