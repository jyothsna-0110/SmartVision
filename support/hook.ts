
import { After, Status } from "cucumber";
import { browser } from "protractor"
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var moment = require("moment");

//screenshots for scenarios

After(async function (scenario) {

  if (scenario.result.status === Status.FAILED) {
    console.log("\n" +moment().format("YYYY-MM-DD HH:mm:ss") + " ############ Feature : " + scenario.sourceLocation.uri);
    console.log("\n" +moment().format("YYYY-MM-DD HH:mm:ss") + " ############ FAILED Scenario : " + scenario.pickle.name);
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot, "image/png");

  }
  else
    if (scenario.result.status === Status.PASSED) {
      console.log("\n" +moment().format("YYYY-MM-DD HH:mm:ss") + " ############ Feature: " + scenario.sourceLocation.uri);
      console.log(moment().format("\n" +"YYYY-MM-DD HH:mm:ss") + " ############ PASSED Scenario : " + scenario.pickle.name);
      if (properties.get('main.Required_screenshot') == true) {
        const screenshot = await browser.takeScreenshot();

        this.attach(screenshot, "image/png");
      }
    }

});

