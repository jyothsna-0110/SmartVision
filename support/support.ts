import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

export class support {

  async selectByVisibleText(DropdownValue: string) {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='" + DropdownValue + "']"))), 10000);
    await browser.wait(EC.presenceOf(element(by.xpath("//span[text()='" + DropdownValue + "']"))), 10000);
    await browser.wait(EC.elementToBeClickable(element(by.xpath("//span[text()='" + DropdownValue + "']"))), 10000);
    await element(by.xpath("//span[text()='" + DropdownValue + "']")).click();
  }
  async clickOnCheckBoxUsingText(value: string) {
    await browser.wait(EC.visibilityOf(element(by.xpath("//label[text()='" + value + "']"))), 10000);
    await browser.wait(EC.presenceOf(element(by.xpath("//label[text()='" + value + "']"))), 10000);
    await browser.wait(EC.elementToBeClickable(element(by.xpath("//label[text()='" + value + "']"))), 10000);
    await element(by.xpath("//label[text()='" + value + "']")).click();
  }
}
