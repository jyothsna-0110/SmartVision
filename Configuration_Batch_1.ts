const args = require('minimist')(process.argv.slice(2));
import { Config, browser } from "protractor";
import { GenerateCustomReport } from './TestReport/GenerateCustomReport'

var moment = require("moment");
var fse = require("fs-extra");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
declare var environment: string;

export let config: Config = {
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,
  capabilities: {
    'browserName': args.browser,
    chromeOptions:

    {
      args: [args.Options, "--window-size=1920,1080"]

    },
  },

  params: {
    env: "",
    url: ""
  },
  onPrepare: async function () {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(45000);
    globalThis.environment = browser.params.env;
    globalThis.BrowserMode = args.Options;
  },
  specs: [
    //clerk
    '../Features/Login/AP_Clerk_Login.feature',
    '../Features/Logout/Logout.feature',

    //Supervisor
    '../Features/Login/AP_Supervisor_Login.feature',
    '../Features/Logout/Logout.feature',
    
    //Installation Engineer
    '../Features/Login/Login_IE.feature',
    '../Features/ProjectCreation/ProjectCreation.feature',
    '../Features/Logout/Logout.feature',
  ],
  cucumberOpts: {

    format: 'json:./TestReport/cucumberreport_batch_1.json',
    tags: "",
    require: [
      '../JSFiles/Step_Definitions/*/*.js',
      '../JSFiles/support/hook.js',
      '../support/timeout.js'
    ]
  },


  onComplete: async () => {
    var options = {
      brandTitle: 'Ideabytes',
      name: 'Automation Test Report',
      theme: 'bootstrap',
      jsonFile: './TestReport/cucumberreport_batch_1.json',
      output: './TestReport/Test_Report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": " 7.3 © 2021 UST",
        "Test Environment": "STAGING",
        "Browser": "Chrome  91.0.4472.77",
        "Platform": "Windows 10 Pro",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    let generateCustomReport = new GenerateCustomReport();
    await generateCustomReport.readJson('batch_1');

  },
  jasmineNodeOpts: {
    showColors: true,
  }

};
