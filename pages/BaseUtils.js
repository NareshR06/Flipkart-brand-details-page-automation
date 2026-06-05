const {expect} = require('@playwright/test');

class BaseUtils{
    constructor(page){
this.page=page;
}

async navigationTo(url){
await this.page.goto(url);
}

async clickElement(locator){
await locator.click();
}

async fillField(locator, text){
await locator.fill(text);
}

async selectDropdown(locator, value){
await locator.selectOption(value);
}

async isElementVisible(locator){
return await locator.isVisible();
}

async waitForElement(locator){
await locator.waitFor();
}

async waitForNavigation(){
await this.page.waitForLoadState('networkidle');
}

async waitForTimeOut(ms){
await this.page.waitForTimeOut(ms);
}

async verifyURL(expectedUrl){
await expect(this.page).toHaveURL(expectedUrl) 
}

async takeScreenshot(name){
await this.page.screenshot({path: `screenshots/${name}.png`});
}

async getTitle(){
return await this.page.getTitle();
}
async getUrl(){
return await this.page.url();
}

async scrollAndClick(locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
}

async getText(locator) {
        return await locator.textContent();
    }

    async scrollToElement(locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async scrollAndClick(locator) {
        await locator.scrollIntoViewIfNeeded();
        await locator.click();
    }

    async getAllText(locator) {
        return await locator.allTextContents();
    }

    async getAttribute(locator, attribute) {
        return await locator.getAttribute(attribute);
    }

    async waitForElement(locator) {
        await locator.waitFor({ state: 'visible' });
    }

}
module.exports = BaseUtils;