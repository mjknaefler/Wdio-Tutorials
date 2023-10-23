/*
* url()
* To launch a webpage (or webUrl) on a browser window
* input: url-address as a string
*/
const { expect } = require("chai");
describe('Basic Functions of webDriverIO', () =>{
    it('To launch a webpage', async () => {
        /*
        * 1. Launch weather.com
        */
        await browser.url('https://www.weather.com');
        /*
        * pause()
        *
        * input: milliseconds (as a number) for which execution should pause  
        */
        await browser.pause(5000);
    })
    
    it('Learning to maximize window, get title, and get url functions', async () =>{
        /*
        * 1. Launch facebook.com
        * 2. Maximize the window
        * 3. Get the page title
        * 4. verify the page title starts with 'Facebook'
        * 5. Get current url
        * 6. Verify current url contains 'book.co'
         */

        // 1. Launch facebook.com
        await browser.url('https://Facebook.com');

        //await browser.pause(5000);
        // 2. Maximize the window
        await browser.maximizeWindow();

        //await browser.pause(5000);

        // 3. Get the page title
        const pageTitle = await browser.getTitle();

        // 4. verify the page title starts with 'Facebook'
        expect (pageTitle.startsWith('Facebook'), 'Page title does not start with "Facebook"').to.be.true;

        // 5. Get current url
        const pageUrl = await browser.getUrl();

        // 6. Verify current url contains 'book.co'
        expect (pageUrl.includes('book.co'), 'Url does not include "book.co"').to.be.true;
    })

    it.only("Learning getWindowHandle, back, forward, refresh functions", async () =>{
        /**
         * 1. Launch weather.com
         * 2. get the windowHandle
         * 3. Verify windowHandle is greater than 0
         * 4. Launch Facebook.com
         * 5. Launch amazon.com
         * 6. go to back
         * 7. go to back
         * 8. Launch scholastic.com
         * 9. go to back
         * 10. go to forward
         * 11. Launch zillow.com
         * 12. Refresh the webpage
         * 
         */

        // 1. Launch weather.com
        await browser.url('https://www.weather.com/');

        //2. get the windowHandle
        const handle = await browser.getWindowHandle();

        //3. Verify windowHandle is greater than 0
        expect (handle.length > 0, 'Window handle length is NOT greater than 0').to.be.true;

        //4. Launch Facebook.com
        await browser.url('https://www.Facebook.com/');

        //5. Launch amazon.com
        await browser.url('https://www.amazon.com/');

        //6. go to back
        await browser.back();
        //7. go to back
        await browser.back();

        //8. Launch scholastic.com
        await browser.url('https://www.scholastic.com/');

        //9. go to back
        await browser.back();

        //10. go to forward
        await browser.forward();

        //11. Launch zillow.com
        await browser.url('https://zillow.com/');

        //12. Refresh the webpage
        await browser.refresh();
    })
})