import { element, by} from "protractor";

export class LogIn {
    txtUserName = element(by.name("username"))
    txtPassword = element(by.name("password"))
    btnClickOnSignIn = element(by.xpath('//input[@name="login"]'))
    
    async enterUserName(UserName: string) {
        await this.txtUserName.sendKeys(UserName)
    }

    async enterPassword(Password: string) {
        await this.txtPassword.sendKeys(Password)
    }

    async clickOnLogInButton() {
        await this.btnClickOnSignIn.click();
    }

}
