const BaseUtils = require('./BaseUtils');

class TitanPage extends BaseUtils {
  constructor(page) {
    super(page);
    this.watchName = this.page.locator("a.atJtCj");
    this.watchPrice = this.page.locator("div.hZ3P6w");
  }

  async openApplication() {
    this.baseUtils = new BaseUtils(this.page);
    await this.baseUtils.navigationTo(process.env.URL);
  }

  async selectCategoryPage(category) {
    const categoryLocator = this.page.locator(`//span[text()='${category}']`);
    await this.baseUtils.clickElement(categoryLocator);
  }

  async selectBrand(brand) {
    const brandLocator = this.page.locator(`//a[text()='${brand}']`);
    await this.baseUtils.clickElement(brandLocator);
  }

  async navigateToPage(pageNumber) {
    const pageNavigator = this.page.locator(`//*[@class='iu0OAI']//*[text()='${pageNumber}']`);
    await this.baseUtils.scrollAndClick(pageNavigator);
    await this.page.waitForLoadState('networkidle');
  }

  async getWatchNameAndPrice() {
    const count = await this.watchName.count();
    for (let i = 0; i < count; i++) {
      const name = await this.baseUtils.getAttribute(this.watchName.nth(i), "title");
      const price = await this.baseUtils.getText(this.watchPrice.nth(i));
      console.log(`${i + 1}. ${name} - ${price}`);
    }
  }
}
module.exports = TitanPage;
