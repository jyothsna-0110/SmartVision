import { element, by, browser, protractor } from "protractor";
var EC = browser.ExpectedConditions;
import chai from "chai"
var expect = chai.expect;

export class CreateProject {
    txtProjectName = element(by.name('pjctName'))
    txtProjectDescription = element(by.xpath('//textarea[@label="Project Description"]'))
    btnCreate = element(by.xpath('//span[@class="ng-star-inserted"]//following-sibling::span[text()="Create"]'))
    btnCreateNewProject = element(by.xpath('//span[text()="Create New Project"]'))
    projectDetails = element(by.xpath('//h3[text()="Project Details"]'))
    divToastMessage = element(by.xpath('//div[@class="smo-toast-detail"]'))
    btnProjectConfiguration = element(by.xpath('//span[text()="Project Configuration"]'))
    iconCross = element(by.xpath('//span[contains(@class,"smo-clickable fa fa-chevron-down")]'))
    documentImportConfiguration = element(by.xpath('//span[text()="Document Import Configuration "]'))
    threeDotBtn= element(by.xpath("//span[contains(@class,'smo smo-more')]"))
    editProjectClick= element(by.xpath("//span[.='Edit Project']"))

    async projectName(ProjectName: string) {
        await browser.wait(EC.visibilityOf(this.txtProjectName), 100000)
        await browser.wait(EC.presenceOf(this.projectDetails), 100000)
        await this.txtProjectName.clear();
        await this.txtProjectName.sendKeys(ProjectName);
    }

    async projectDescription(ProjectDescription: string) {
        await browser.wait(EC.presenceOf(this.projectDetails), 100000)
        await this.txtProjectDescription.clear();
        await this.txtProjectDescription.sendKeys(ProjectDescription)
    }

    async validateToastMessage(toastMsg:string){
        await browser.wait(EC.visibilityOf(this.divToastMessage),60000)
        await this.divToastMessage.getText().then(async function(toastText){
            await expect(toastMsg).to.equal(toastText)
        })
        await browser.wait(EC.invisibilityOf(this.divToastMessage),60000)
    }

    async ProjectName(projectName:string){
        await browser.wait(EC.presenceOf(element(by.xpath('//div[text()=" '+projectName+' "]'))),20000)
        await browser.wait(EC.presenceOf(this.threeDotBtn),20000)
    }
}