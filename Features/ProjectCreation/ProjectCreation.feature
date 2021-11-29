@ProjectCreation @SmartVision @IE  @Regression

Feature: Project Creation By IE

    Feature Description : User creates a new project and validate the toast messages

    # Scenario Outline: Project Creation - Check whether Installation Engineer can create project
    #     When "Admin" clicks on Create New Project Button
    #     Then "Admin" enters the Project Name as "<ProjectName>"
    #     And "Admin" enters the Project Description as "<ProjectDescription>"
    #     And "Admin" clicks on Create Button
    #  Then "Admin" verifies if "success" message is displayed as "<ToastMessage>"
    #     And "Admin" should navigate to project configuration page

    #     Examples:
    #         | ProjectName      | ProjectDescription    | ToastMessage                 |
    #         | Automation_IB_01 | Automation_IB_Project | Project Created Successfully |

    Scenario Outline: Configuration - Project configuration - Document import configuration
        # Then "Admin" verifying the Project Configuration icon is blue "<color>" and ticked
        And "Admin" enters Project Name as "<ProjectName>" and clicks on enter key
        And "Admin" click on three dots from selected project "<ProjectName>"
        And "Admin" click on edit Project
        When "Admin" click on "Project Configuration" option
        # When "Admin" clicks on "Document Import Configuration" Arrow
        And "Admin" clicks on cross mark icon of the cron expression
        And "Admin" enters the "Document Import Configuration" when to execute as "<Time>"
        And "Admin" enters the "FTP Username" as "<FTPUsername>"
        And "Admin" enters the "FTP Password" as "<FTPPassword>"
        And "Admin" enters the "FTP Host Name" as "<FTPHostName>"
        And "Admin" enters the "Source File Location" as FileLocation
        When "Admin" clicks on "Document Import Configuration" Arrow

        Examples:
            | ProjectName      | Time           | FTPUsername       | FTPPassword   | FTPHostName   | color                |
            | Automation_IB_02 | Every 10 Minute | smartops-ftp-user | Sm@rt0P5-Us3R | 104.45.153.39 | rgba(17, 67, 126, 1) |

    Scenario Outline: Configuration - Project configuration - Allocation
        When "Admin" clicks on "Allocation Configuration" Arrow
        And "Admin" enters the "Allocation Configuration" when to execute as "<Time>"
        And "Admin" enters the "Min" value as "<Minimum>"
        And "Admin" enters the "Max" value as "<Maximum>"
        And "Admin" enters the "Priority criteria" value as "<Priority>"
        When "Admin" clicks on "Allocation Configuration" Arrow

        Examples:
            | Time           | Minimum | Maximum | Priority | ToastMessage                  |
            | Every 10 Minute | 20      | 80      | PKGUS    | Project Configuration Updated |

    Scenario Outline: Configuration - Project configuration - Results Export
        When "Admin" clicks on "Results Export Configuration" Arrow
        And "Admin" clicks on cross mark icon of the cron expression
        When "Admin" enters the "Results Export Configuration" when to execute as "<Time>"
        And "Admin" enters the "Target Server Host Name"  as "<HostName>"
        And "Admin" enters the "Target Server FTP Username"  as "<ServerUserName>"
        And "Admin" enters the "Target Server FTP Password"  as "<ServerPassword>"
        And "Admin" enters the "Target Folder Location" as FileLocation
        And "Admin" clicks on Save Button
        Then "Admin" verifies if "success" message is displayed as "<ToastMessage>"

        Examples:
            | Time           | HostName      | ServerUserName    | ServerPassword | ToastMessage                   |
            | Every 5 Minute | 104.45.153.39 | smartops-ftp-user | Sm@rt0P5-Us3R  | Project Configurations Updated |