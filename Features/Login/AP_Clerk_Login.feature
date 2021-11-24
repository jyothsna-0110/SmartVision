@Login @SmartVision @AP_Clerk  @Regression
Feature: Login with AP_Clerk

    Feature Description :  Verifying Login functionality for AP_Clerk and verifying the correct user

    Scenario Outline: Successful Login with AP_Clerk
        Given "AP_Clerk" renders to the SmartVision URL
        When "AP_Clerk" enters username as "<Username>"
        And "AP_Clerk" enters password as "<Password>"
        Then "AP_Clerk" clicks on sign in buttton
        And "AP_Clerk" verifying the title of the page as "Smart Vision"
        And "AP_Clerk" verifying the signin username as " Ap Clerk T... " is displayed at the top right corner
        Examples:
            | Username       | Password    |
            | ap_clerk_tolas | SmartOps123 |