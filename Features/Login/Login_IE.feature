@Login @SmartVision @IE  @Regression
Feature: Login with Installation Engineer

    Feature Description :  Verifying Login functionality for IE and verifying the correct user

    Scenario Outline: Successful Login with Installation Engineer
        Given "Admin" renders to the SmartVision URL
        When "Admin" enters username as "<Username>"
        And "Admin" enters password as "<Password>"
        Then "Admin" clicks on sign in buttton
        And "Admin" verifying the title of the page as "Smart Vision"
        And "Admin" verifying the signin username as " Smartops " is displayed at the top right corner

        Examples:
            | Username | Password     |
            | Smartops | Smartops_988 |

    Scenario Outline: Smart Vision Home page - Check the options available in home page
        And "Admin" verifying the Smart Vision Logo is Visible at the top left end
        And "Admin" Verifying the Project Count is displayed near to the logo
        And "Admin" verifying the icons as "<EditConfigurationBtn>" is displayed in the top right end
        And "Admin" verifying the icons as "<CreateNewProjectBtn>" is displayed in the top right end
        And "Admin" verifying the Search Field is displayed in the top right corner below Create New project button
        And "Admin" verifying the icons as "<FilterByStatusDropDown>" is displayed in the top right corner below Create New project button
        And "Admin" verifying the icons as "<SortByDropDown>" is displayed in the top right corner below Create New project button
        And "Admin" enters Project Name as "<ProjectName>" and clicks on enter key
        And "Admin" verifying Project name "<ProjectName>" is displayed in the cards

        Examples:
            | EditConfigurationBtn | CreateNewProjectBtn | FilterByStatusDropDown | SortByDropDown | ProjectName      |
            | Edit Configuration   | Create New Project  | Filter by status       | Sort by        | Automation_Demo1 |