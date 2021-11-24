import { element, by, browser, protractor } from "protractor";
var EC = browser.ExpectedConditions;
var Actual_Title;
import chai from "chai"
var expect = chai.expect;

export class ProjectListing {
    btnAllProjects = element(by.xpath('//div[text()="All Projects "]'))
    btnLogo = element(by.xpath('//img[@class="logo-icon"]'))
    btnProjectCount = element(by.className('smo-badge smo-badge-round smo-badge-secondary smo-badge-right'))
    txtSearch = element(by.xpath('//input[@placeholder="Search"]'))
    btnThreeDots = element(by.xpath('//span[contains(@class,"smo smo-more-vert-24px")]'))

    async pageTitle() {
        await browser.wait(EC.presenceOf(this.btnAllProjects), 60000);
        await browser.getTitle().then(async function (title) {
            Actual_Title = title
        })
        return Actual_Title;
    }

    async logOutUser() {
        await element(by.className("smo smo-chevron-down-solid color-blue")).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 10000);
        await element(by.xpath('//span[text()="Logout"]')).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//input[@name="login"]'))), 10000);
    }

    async verifySignInUser(signInUsername: string) {
        await element(by.xpath('//div[text()="' + signInUsername + '"]')).isDisplayed().then(async function (isVisible) {
            await expect(isVisible).to.be.true;
        });
    }

    async verifyIcons(iconName: string) {
        await element(by.xpath('//span[text()="' + iconName + '"]')).isPresent().then(async function (isVisible) {
            await expect(isVisible).to.be.true;
        })
    }

    async verifyIconsBelowProjectListing(IconName: string) {
        await element(by.xpath('//legend[text()="' + IconName + '"]')).isDisplayed().then(async function (isVisible) {
            await expect(isVisible).to.be.true;
        })
    }

    async verifyProject(projectName: string) {
        await this.txtSearch.clear();
        await browser.wait(EC.presenceOf(this.txtSearch), 60000);
        await this.txtSearch.sendKeys(projectName);
        await browser.wait(EC.presenceOf(this.btnAllProjects), 60000);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.wait(EC.presenceOf(this.btnAllProjects), 60000);

    }
    async verifyProjectCard(projectName: string) {
        await browser.sleep(5000);
        await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()=' "+projectName+" ']"))), 60000)
        await element(by.xpath("//div[text()=' "+projectName+" ']")).isDisplayed().then(async function (isVisible) {
            await expect(isVisible).to.be.true;
        })
    }
}