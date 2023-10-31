const { expect } = require("chai");
describe('Test case to practice auto suggestions in web elements', async () => {
    it('Verify user can select value from auto-suggestion', async () => {
        /**
         * 1. Launch hotels.com  
         * 2. Enter 'new' in the destination
         * 3. Select 'Newport Beach' from auto-suggestion.
         */

        //1. Launch hotels.com  
        await browser.url('https://hotels.com/');
        await $('//button[@data-stid="uitk-date-selector-input1-default"]').click();

        await browser.pause(2000);

        //2. Pick Checkin date as Nov-23
        const allNovemberDates = await $$('//table[@aria-label="November 2023"]//td//div[@class="uitk-date-number uitk-date-number-default uitk-type-300 uitk-type-regular"]');
       
        for (const novemberDate of allNovemberDates){
            const dateValue = await novemberDate.getText();
            if(dateValue === "23"){
                await novemberDate.click();
                break;
            }
        }

        await browser.pause(2000);

        const allNovemberDates2 = await $$('//table[@aria-label="November 2023"]//td//div[@class="uitk-date-number uitk-date-number-default uitk-type-300 uitk-type-regular"]');
        //3. Pick check-out date as Nov-28
        for (const novemberDate of allNovemberDates2){
            const dateValue = await novemberDate.getText();
            if(dateValue === "28"){
                await novemberDate.click();
                break;
            }
        }
         await browser.pause(2000);
        // //4. Click the select button
         await $('//button[@data-stid="apply-date-selector"]').click();
    });
});