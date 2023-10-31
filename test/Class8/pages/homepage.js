class Homepage {

//Locators on homepage
loginEmailLocator = '#email';
loginPwdLocator = '#pass';
loginButtonLocator = '<button>';
createNewAccountLocator = '=Create new account';

//Functions to interact with the elements on Homepage
async enterLoginEmail(logingEmail){
    await $(this.loginEmailLocator).setValue(loginEmail);
}

async enterLoginPwd(loginPwd){
    await $(this.loginPwdLocator).setValue(loginPwd);
}

async clickLoginButton(){
    await $(this.loginButtonLocator).click();
}

async clickCreateNewAccountButton(){
    await $(this.createNewAccountLocator).click();
}

async isLoginEmailEnabled(){
    return await $(this.loginEmailLocator).isEnabled();
}

async isLoginPwdEnabled(){
    return await $(this.loginPwdLocator).isEnabled();
}

async isLoginButtonEnabled(){
    return await $(this.loginButtonLocator).isEnabled();
}
}
module.exports = new Homepage;