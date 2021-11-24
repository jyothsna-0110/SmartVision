import { Given, When, Then } from "cucumber"
import { browser } from "protractor"
import chai from "chai"
import { CreateProject } from "../../PageObjects/CreateProjectPage"
import { LogIn } from "../../PageObjects/LoginPage"
import { btnProjectConfiguration } from "../../PageObjects/ProjectConfigurationPage"
import { ProjectListing } from "../../PageObjects/ProjectListing_Page"
var propertiesReader = require('properties-reader')
var properties = propertiesReader('./PropertyFile/ConfigParam.properties')
var EC = browser.ExpectedConditions
var expect = chai.expect;

var objCreateProject = new CreateProject()
var objLogin = new LogIn();
var objProjectListing = new ProjectListing();
let objProjectConfiguration = new btnProjectConfiguration()


Given('{string} renders to the SmartVision URL', async function (userRole) {
    try {
        await browser.waitForAngularEnabled(false);
        await browser.get(properties.get('main.' + globalThis.environment + '_url'));
        await browser.wait(EC.presenceOf(objLogin.btnClickOnSignIn), 100000);
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to render valid SmartVision url"
    }
})

When('{string} enters username as {string}', async function (userRole, username) {
    try {
        await objLogin.enterUserName(username);
    } catch (error) {
        await console.log(error);
        throw `${userRole} is not able to enter the valid username`
    }
});
When('{string} enters password as {string}', async function (userRole, Password) {
    try {
        await objLogin.enterPassword(Password);
    } catch (error) {
        await console.log(error);
        throw `${userRole} is not able to enter the valid Password`
    }
})


Then('{string} clicks on sign in buttton', async function (userRole) {
    try {
        await objLogin.clickOnLogInButton();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to sign in"
    }
});

Then('{string} verifying the title of the page as {string}', async function (userRole, Title) {
    try {
        await expect(await objProjectListing.pageTitle()).to.equal(Title);
    } catch (error) {
        await console.log(error);
        throw "Actual title and expected title are incorrect"
    }
})

Then('{string} verifying the signin username as {string} is displayed at the top right corner', async function (userRole, signInUsername) {
    try {
        await objProjectListing.verifySignInUser(signInUsername);

    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to verify the username in the Application"

    }
})

Then('{string} verifying the Smart Vision Logo is Visible at the top left end', async function (userRole) {
    try {
        await objProjectListing.btnLogo.isDisplayed().then(async function (isVisible) {
            await expect(isVisible).to.be.true;
        })
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to find the Smart Vision Logo"
    }
})

Then('{string} Verifying the Project Count is displayed near to the logo', async function (userRole) {
    try {
        await objProjectListing.btnProjectCount.isDisplayed().then(async function (isVisible) {
            await expect(isVisible).to.be.true;
        })
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to find the Project Count"
    }
})

Then('{string} verifying the icons as {string} is displayed in the top right end', async function (userRole, iconName) {
    try {
        await objProjectListing.verifyIcons(iconName);
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to find the " + iconName;
    }
})

Then('{string} verifying the Search Field is displayed in the top right corner below Create New project button', async function (userRole) {
    try {
        await objProjectListing.txtSearch.isDisplayed().then(async function (isVisible) {
            await expect(isVisible).to.be.true;
        })
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to find the Search Field"
    }
})

Then('{string} verifying the icons as {string} is displayed in the top right corner below Create New project button', async function (userRole, IconName) {
    try {
        await objProjectListing.verifyIconsBelowProjectListing(IconName);
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to find the icons " + IconName
    }
})
Then('{string} enters Project Name as {string} and clicks on enter key', async function (userRole, projectName) {

    try {
        await objProjectListing.verifyProject(projectName);
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to find the project name as " + projectName
    }
})

Then('{string} click on edit Project', async function (userRole) {
    try {
        await objCreateProject.editProjectClick.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on edit Project"
    }
});

Then('{string} click on three dots from selected project {string}', async function (userRole, projectName) {
    try {
        await objCreateProject.ProjectName(projectName)
        await objCreateProject.threeDotBtn.click();
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on three dots from selected project"
    }
});

When('{string} click on {string} option', async function (userRole, projectIcons) {
    try {
        await objProjectConfiguration.projectIcons(projectIcons)
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to click on " + projectIcons + " option"
    }
});

When('{string} clicks on cross mark icon of the cron expression', async function (userRole) {
    try {
        var myElement = await objCreateProject.iconCross.isDisplayed()
        await console.log("MyELement is "+myElement)
        if (myElement === true) {
            await objCreateProject.iconCross.click();
        }
        else {
          await console.log("Cross mark not find")
        }
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable click the cross mark"
    }
})

Then('{string} verifying Project name {string} is displayed in the cards', async function (userRole, projectName) {
    try {
        await objProjectListing.verifyProjectCard(projectName)
    } catch (error) {
        await console.log(error);
        throw userRole + " is unable to verify the project name in cards"
    }
})
When('{string} clicks on logout button', async function (userRole) {
    try {
        await objProjectListing.logOutUser();
    } catch (error) {
        await console.log(error);
        throw userRole + " not able to logout from the Application"
    }
})