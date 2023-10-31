class loginPage {

    //Locators for login page
    loginErrorLocator = '//div[contains(text() ,"connected to an account.")]'
    //Functions to interact with elements on login page
    async isLoginErrorDisplayed(){
        await $(this.loginErrorLocator).waitForDisplayed();
        return await $(this.loginErrorLocator).isDisplayed();
    }

}
module.exports = new loginPage;