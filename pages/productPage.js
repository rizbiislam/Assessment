class ProductPage {
    constructor(page) {
      this.page = page;
  
      this.productList = "//a[contains(text(), 'View Product')]";
      this.quantityField = "//input[@id='quantity']";
      this.addToCartButton = "//button[contains(text(), 'Add to cart')]";
    }
  
    async selectRandomProduct() {
      try {
        const products = await this.page.locator(this.productList).elementHandles();
  
        if (products.length === 0) {
          throw new Error("No products found on the page.");
        }

        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];

        await randomProduct.click();
        console.log(`Clicked on 'View Product' for product #${randomIndex + 1}`);
      } catch (error) {
        console.error("Error selecting a random product:", error);
      }
    }
  
    async viewAndUpdateProduct(quantity) {
      try {
        await this.page.waitForSelector(this.quantityField);

        await this.page.fill(this.quantityField, quantity.toString());
        console.log(`Updated product quantity to: ${quantity}`);
  
        const addToCartButton = "//button[contains(@class,'btn-default cart')]";
        await this.page.waitForSelector(addToCartButton);
        await this.page.click(addToCartButton);
        console.log("Add to Cart clicked");

      } catch (error) {
        console.error("Error viewing and updating product:", error);
      }
    }
  }
  
  module.exports = ProductPage;
  