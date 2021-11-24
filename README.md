# Project Introduction: Regression Test Automation for UST - SmartOps platform

# Project Overview:

     Automation of 250 Regression Test cases in ITOps platform covering GUI & API functionality testing using robust framework

# Project Description:

    Automation of Regression test cases using Protractor framework, cucumber BDD tool and Custom Cucumber reports.
    Jenkins to trigger Test scripts execution as a part of DevOps CI-CD pipeline

# Project Setup:

    Recommended Editor: Visual Studio Code

# Project installation Steps:

install node js exe file(version 14.17.3) from https://nodejs.org/en/download/
"npm install -g protractor" (version 7.0.0)
"npm install" run this command from project folder path  
 "npm run webdriver-update" (chromedriver version 91.0.4472.101)

# Prerequisites:

    Chrome Version 92.0.4515.107

# Test data updates:

    Project name of new project to be updated in Testdata properties files for respective batches

    Ensure project is already created and available in application for Batch 2 and the same name is given in properties file

    path for Testdata properties: itops-automation\PropertyFile\TestData.properties

# Running the Test:

    node node_modules/protractor/bin//protractor JSFiles/Configuration_Batch_1.js --params.env ${Environment_Name} --browser=${Browser} --Options=${BrowserMode} --no-sandbox

node node_modules/protractor/bin//protractor JSFiles/Configuration_Batch_2.js --params.env ${Environment_Name} --browser=${Browser} --Options=${BrowserMode} --no-sandbox

# Troubleshooting:

    1.	Analyze the reports and identify the failures
    2.	Validate the failures manually with application functionality
    3.	Raise bugs for valid failures
    4.	Debug the script failures and provide fix
    5.	Rerun the script and verify the fix locally
    6.	Integrate script changes with batch sequence and rerun
    7.	Push the script changes to git
    8.	Verify the changes in next job execution
