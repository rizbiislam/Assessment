const { test } = require('@playwright/test');
const ProductPage = require('../pages/productPage');

test('View and Update Random Product Quantity', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto('https://automationexercise.com');

  await productPage.selectRandomProduct();

  await productPage.viewAndUpdateProduct(2);

  await page.screenshot({ path: `screenshots/ViewAndUpdateProduct_success.png` });
});
