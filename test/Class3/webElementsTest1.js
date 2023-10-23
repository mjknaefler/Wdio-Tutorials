const { expect } = require("chai");

describe('Basic Locator strategies', () =>{
    it('Verify user can enter login credentials and click login button', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Enter "abcd@test.com" as login email
         * 3. Enter "test@1234" as login password
         * 4. Click login button
         */

        //1. Launch Facebook.com
        await browser.url('https://facebook.com/');
        await browser.pause(3000);
        //2. Enter "abcd@test.com" as login email
        const loginEmailElement = await $('#email');
        loginEmailElement.setValue("abcd@test.com");
        await browser.pause(3000);

        //3. Enter "test@1234" as login password
        const loginPasswordElement = await $('input[name=pass]');
        loginPasswordElement.setValue('test@1234');
        await browser.pause(3000);

        //4. Click login button
        const loginButtonElement = await $('button=Log In');
        loginButtonElement.click();
        await browser.pause(20000);

    })
    it.only('Verify forgot password on messenger takes user to Find Your Account page', async () =>{
        /**
         * 1.Launch Facebook.com
         * 2.Click on Messenger link
         * 3.Click on forgot your password
         * 4.Verify user lands on 'Find Your Account' page
         */

        //1.Launch Facebook.com
        await browser.url('https://facebook.com/');

        //2.Click on Messenger link
        const messengerLinkElement = await $('=Messenger');
        messengerLinkElement.click();

        //3.Click on forgot your password
        const forgotPasswordLinkElement = await $('*=got your');
        await forgotPasswordLinkElement.click();

        //4.Verify user lands on 'Find Your Account' page
        const findYourAccountHeaderElement = await $('.uiHeaderTitle');
        const isFindYourAccountHeaderElementDisplayed = await findYourAccountHeaderElement.isDisplayed();
        expect(isFindYourAccountHeaderElementDisplayed,'Find Your Account Header is not displayed').to.be.true;
    }) 
})