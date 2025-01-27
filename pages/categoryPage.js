class CategoryPage {
    constructor(page) {
      this.page = page;
      this.categoryPanel = (category) =>
        `//div[@class="panel-heading"]//a[contains(normalize-space(.), '${category}')]`;
      this.subcategoryLink = (subcategory) =>
        `//div[@class="panel-body"]//a[contains(normalize-space(.), '${subcategory}')]`;
      this.firstProduct = "//div[@class='productinfo text-center']//p";
      this.firstProductCart = "(//div[@class='productinfo text-center']//p)[2]";
    }
  
    async navigateToCategory(category, subcategory) {
      try {
        await this.page.click(this.categoryPanel(category));
        console.log(`Clicked on category: ${category}`);
  
        await this.page.waitForSelector(this.subcategoryLink(subcategory));
        console.log(`Subcategory ${subcategory} is visible`);
  
        await this.page.click(this.subcategoryLink(subcategory));
        console.log(`Clicked on subcategory: ${subcategory}`);
  
        await this.page.waitForSelector("//div[@class='features_items']");
      } catch (error) {
        console.error(`Error navigating to ${category} > ${subcategory}:`, error);
      }
    }
  
    async printFirstProductDetails() {
      try {
        const productName = await this.page.textContent(this.firstProduct);
        console.log(`First product Name: ${productName}`);
        await this.page.click(this.firstProductCart);
      } catch (error) {
        console.error("Error retrieving product details:", error);
      }
    }
  }
  
  module.exports = CategoryPage;
  