import { Given, When, Then } from "cucumber"
import { browser } from "protractor"
import { CreateProject } from "../../PageObjects/CreateProjectPage"
import chai from "chai"
import { btnProjectConfiguration } from "../../PageObjects/ProjectConfigurationPage"
var EC = browser.ExpectedConditions
var expect = chai.expect;
var objCreateProject = new CreateProject()
let objProjectConfiguration = new btnProjectConfiguration()
var PropertiesReader = require('properties-reader')
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties')
var FileLocation = properties.get('main.'+globalThis.environment+'_SourceFileLocation')

When('{string} clicks on Create New Project Button', async function (userRole) {
    try {
        await objCreateProject.btnCreateNewProject.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is not able to click on create new project button"
    }
})

Then('{string} enters the Project Name as {string}', async function (userRole, projectName) {
    try {
        await objCreateProject.projectName(projectName)
    } catch (error) {
        await console.log(error);
        throw userRole + " unable to enter the project Name"
    }
})

Then('{string} enters the Project Description as {string}', async function (userRole, projectDescription) {
    try {
        await objCreateProject.projectDescription(projectDescription)
    } catch (error) {
        await console.log(error)
        throw userRole + " unable to enter the projectDescription"
    }
})

Then('{string} clicks on Create Button', async function (userRole) {
    try {
        await browser.wait(EC.presenceOf(objCreateProject.btnCreate), 100000)
        await browser.wait(EC.elementToBeClickable(objCreateProject.btnCreate), 100000)
        //we need to wait here because page is loading so that project can't be created without waiting
        await browser.sleep(5000);
        await objCreateProject.btnCreate.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on create button"
    }
})

Then('{string} verifies if {string} message is displayed as {string}', async function (userRole, toaster,toastMessage) {
    try {
        await objCreateProject.validateToastMessage(toastMessage)
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to validate "+toaster+"the Toast Message"
    }
})

Then('{string} should navigate to project configuration page', async function (userRole) {
    try {
        await objCreateProject.btnProjectConfiguration.isDisplayed().then(async function (element) {
            await expect(element).to.be.true
        })
    } catch (error) {
        await console.log(error);
        throw userRole + " should not navigates to the project Configuration Page"
    }
})

Then('{string} verifying the Project Configuration icon is blue {string} and ticked', async function (userRole, Color) {
    try {
        await objCreateProject.btnProjectConfiguration.getCssValue('color').then(async function (actualColor) {
            await expect(actualColor).to.equal(Color)
        })
    } catch (error) {
        await console.log(error);
        throw userRole + " unable to verify the color of the icon"
    }
})

When('{string} clicks on the Project configuration icon', async function (userRole) {
    try {
        await objCreateProject.btnProjectConfiguration.click()
    } catch (error) {
        await console.log(error);
        throw userRole + " unable to click on the Project configuration icon"
    }
})

When('{string} clicks on {string} Arrow',async function(userRole,ArrowSign){
    try {
        await objProjectConfiguration.btnArrow(ArrowSign)
    } catch (error) {
      await console.log(error);
      throw userRole+" unable to clicks on the "+ArrowSign+" Down Arrow Sign"  
    }
})
When('{string} enters the {string} when to execute as {string}', async function (userRole,follow, Time) {
    try {
        await objProjectConfiguration.DrpdwnWhenToExecute(follow)
        await objProjectConfiguration.timeSelecting(Time)

    } catch (error) {
        await console.log(error);
        throw userRole + " unable to select the when to execute value "
    }
});


When('{string} enters the {string} as {string}', async function (userRole, ftpnames, FTPUsername) {
    try {
        await objProjectConfiguration.SourceFileLocation(ftpnames,FTPUsername)

    } catch (error) {
        await console.log(error);
        throw userRole + " enters invalid" +FTPUsername 
    }
});


When('{string} enters the {string} as FileLocation', async function (userRole, sourceFileLocation) {
    try {
        await objProjectConfiguration.SourceFileLocation(sourceFileLocation, FileLocation)
    } catch (error) {
        await console.log(error);
        throw userRole + " enter invalid File Location"
    }
});


When('{string} clicks on Save Button', async function (userRole) {
    try {
        await objProjectConfiguration.btnSave.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " not able to click on save button"
    }
});


When('{string} enters the {string} value as {string}', async function (userRole,setPath, Value) {
    try {
        await objProjectConfiguration.AllocationConfigValues(setPath,Value)
    } catch (error) {
        await console.log(error);
        throw userRole + " entered a invalid "+setPath+" value"
    }
});

When('{string} enters the {string}  as {string}', async function (userRole, setPath, values) {
    try {
        await objProjectConfiguration.ResultsExportConfigValues(setPath,values)

    } catch (error) {
        await console.log(error)
        throw userRole + " enter invalid "+setPath+" value as "+values
    }
});

