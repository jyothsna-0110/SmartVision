import{Browser,element,by, browser} from "protractor"
var EC = browser.ExpectedConditions

export class btnProjectConfiguration{
    drpdwnWhenToExecute =element(by.xpath('//label[text()="When To Execute"]//following::span[@class="smo-clickable fa fa-chevron-down"]'))
    allocationConfiguration = element(by.xpath('//span[text()="Allocation Configuration "]'))
    resultsExportConfiguration =element(by.xpath('//span[text()="Results Export Configuration "]'))
    btnSave = element(by.xpath('//span[text()="Results Export Configuration "]//following::span[text()="Save"]'))

    async DrpdwnWhenToExecute(follow:string){
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="'+follow+' "]'))),60000)
        await element(by.xpath('//span[text()="'+follow+' "]//following::span[@class="smo-clickable fa fa-chevron-down"]')).click();
    }

    async timeSelecting(time:string){
        await element(by.xpath('//span[text()="'+time+'"]')).click();
    }

    async SourceFileLocation(path:string,FilePath:string){
        await element(by.xpath('//legend[text()="'+path+'"]//following::input[contains(@class,"textInput smo-inputtext smo-input-legend")]')).clear();
        await element(by.xpath('//legend[text()="'+path+'"]//following::input[contains(@class,"textInput smo-inputtext smo-input-legend")]')).sendKeys(FilePath)
    }

    async projectIcons(ProjectIcon:string){
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="'+ProjectIcon+'"]'))),20000)
        await element(by.xpath('//span[text()="'+ProjectIcon+'"]')).click();
    }

    async btnArrowMark(ArrowBtn:string){
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="'+ArrowBtn+' "]//following::span[contains(@class,"smo-accordion-toggle-icon")]'))))
        await element(by.xpath('//span[text()="'+ArrowBtn+' "]//following::span[contains(@class,"smo-accordion-toggle-icon")]')).click()
    }

    async AllocationConfigValues(setpath:string,value:string){
        await browser.wait(EC.visibilityOf(this.allocationConfiguration),20000)
        await element(by.xpath('//legend[text()="'+setpath+'"]//following::input[contains(@class,"textInput smo-inputtext smo-input-legend")]')).clear();
        await element(by.xpath('//legend[text()="'+setpath+'"]//following::input[contains(@class,"textInput smo-inputtext smo-input-legend")]')).sendKeys(value)
    }

    async ResultsExportConfigValues(setpath:string,value:string){
        await browser.wait(EC.visibilityOf(this.resultsExportConfiguration),60000)
        await element(by.xpath('//legend[text()="'+setpath+'"]//following::input[contains(@class,"textInput smo-inputtext smo-input-legend")]')).clear();
        await element(by.xpath('//legend[text()="'+setpath+'"]//following::input[contains(@class,"textInput smo-inputtext smo-input-legend")]')).sendKeys(value);
    }

    async btnArrow(setPath:string){
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="'+setPath+' "]//following::span[contains(@class,"smo-accordion-toggle-icon")]'))),60000);
        await element(by.xpath('//span[text()="'+setPath+' "]//following::span[contains(@class,"smo-accordion-toggle-icon")]')).click();
    }
}