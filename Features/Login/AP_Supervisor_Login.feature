@Login @SmartVision @AP_Supervisor @Regression

Feature: Login with AP_Supervisor

    Feature Description :  Verifying Login functionality for AP_Supervisor and verifying the correct user

    Scenario Outline: Successful Login with AP_Supervisor
        Given "AP_Supervisor" renders to the SmartVision URL
        When "AP_Supervisor" enters username as "<Username>"
        And "AP_Supervisor" enters password as "<Password>"
        Then "AP_Supervisor" clicks on sign in buttton
        And "AP_Supervisor" verifying the title of the page as "Smart Vision"
        And "AP_Supervisor" verifying the signin username as " Ap Supervi... " is displayed at the top right corner
        Examples:
            | Username      | Password    |
            | ap_supervisor | smartops007 |