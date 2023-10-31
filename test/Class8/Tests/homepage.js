const homepage = require('../pages/homepage.js');
const {expect} = require('chai');
const loginPage = require('../pages/loginPage.js');
describe('Homepage test cases', () => {
    it('Verify login fields are enabled', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify login email input is enabled
         * 3. Verify login password input is enabled
         * 4. Login button is enabled
         */
        await browser.url('https://facebook.com/')

        expect(await homepage.isLoginEmailEnabled(),'Login email field is not enabled').to.be.true;

        expect(await homepage.isLoginPwdEnabled(),'Login password field is not enabled').to.be.true;

        expect(await homepage.isLoginButtonEnabled(),'Login button is not enabled').to.be.true;

    })

    it.only('Verify error is displayed for empty login flow', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click login button 
         * 3. Verify error is displayed
         */
        await browser.url('https://facebook.com/')

        //2. Click login button 
        await homepage.clickLoginButton();
        expect(await loginPage.isLoginErrorDisplayed(),'Login error is not displayed').to.be.true;
    })
})