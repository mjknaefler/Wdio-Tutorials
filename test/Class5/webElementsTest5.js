const { expect } = require("chai");
describe('Advanced Xpath locator strategy', () => {
    it('Verify user can select gender on sign-up page', async () =>{
        /**
         * 1.Launch Facebook.com
         * 2.Click on "Create new account" link
         * 3.Select male gender
         * 4.Verify male gender is selected
         */

        //1.Launch Facebook.com
        await browser.url('https://facebook.com/');
        await browser.pause(5000);``

        //2.Click on "Create new account" link
        const createNewAccountBtn = await $('//form[@data-testid="royal_login_form"]//a[@data-testid]');
        await createNewAccountBtn.click();

        await browser.pause(5000);

        //3.Select male gender
        const maleGenderBtn = await $('//label[text()="Male"]/following-sibling::input');
        await maleGenderBtn.click();

        await browser.pause(5000);

        //4.Verify male gender is selected
        const maleGenderBtnAfterClick = await $('//label[text()="Male"]/following-sibling::input');
        expect( await maleGenderBtnAfterClick.isSelected(),"Male Gender button is not selected").to.be.true;

        await browser.pause(5000);
    }) 

})