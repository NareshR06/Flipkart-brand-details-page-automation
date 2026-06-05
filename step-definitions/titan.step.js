const { Given, When, Then } = require('@cucumber/cucumber');
const TitanPage = require('../pages/TitanPage');
require('dotenv').config();

Given('Enter into the page', async function () {
  this.titanpage = new TitanPage(this.page);
  await this.titanpage.openApplication();
});

When('Enter into {string} category in the mega menu', async function (category) {
  await this.titanpage.selectCategoryPage(category);
});

When('Select {string} brand watch', async function (brand) {
  await this.titanpage.selectBrand(brand);
});

When('Scroll down and Navigate to {int}', async function (pageNumber) {
  await this.titanpage.navigateToPage(pageNumber);
});

Then('Print the watch name & price details', async function () {
  await this.titanpage.getWatchNameAndPrice();
});
