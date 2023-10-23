const { expect } = require("chai");
describe('Basic Xpath locator strategy', () => {
    it('Verify forgot password on messenger takes user to Find Your Account page', async () =>{
        /**
         * 1.Launch Facebook.com
         * 2.Click on Messenger link
         * 3.Click on forgot your password
         * 4.Verify user lands on 'Find Your Account' page
         */

        //1.Launch Facebook.com
        await browser.url('https://facebook.com/');

        //2.Click on Messenger link
        const messengerLinkElement = await $('//a[@title="Check out Messenger."]');
        messengerLinkElement.click();

        //3.Click on forgot your password
        const forgotPasswordLinkElement = await $('//a[contains(@href, "/recover/initiate")]');
        await forgotPasswordLinkElement.click();

        //4.Verify user lands on 'Find Your Account' page
        const findYourAccountHeaderElement = await $('//h2[starts-with(@class, "uiHeaderTitle")]');
        const isFindYourAccountHeaderElementDisplayed = await findYourAccountHeaderElement.isDisplayed();
        expect(isFindYourAccountHeaderElementDisplayed,'Find Your Account Header is not displayed').to.be.true;
    }) 
    it.only('Verify empty login fields', async () => {
        /**
         * 1.Launch facebook.com
         * 2.Verify login-email field is enabled
         * 3.Verify login-password field is enabled
         * 4.Verify login-button is enabled
         */

        //1.Launch facebook.com
        await browser.url('https//:www.facebook.com/');

        //2.Verify login-email field is enabled
        const loginEmailField = await $('//input[contains(@data-testid,"royal_email")]');
        const isLoginEmailFieldEnabled = await loginEmailField.isEnabled();
        expect(isLoginEmailFieldEnabled,'Login email is NOT enabled').to.be.true;

        //3.Verify login-password field is enabled
        const loginPasswordField = await $('//input[@type="password"]');
        const isLoginPasswordFieldEnabled = await loginPasswordField.isEnabled();
        expect(isLoginPasswordFieldEnabled, 'Login password is NOT enabled').to.be.true;

        //4.Verify login-button is enabled
        const buttonField = await $('//button[contains(text(),"og In")]');
        const isButtonFieldEnabled = await buttonField.isEnabled();
        expect(isButtonFieldEnabled,'Login button is NOT enabled').to.be.true;
    })
})