describe('WaitFor concept', () => {
    it('waitForDisplayed - example', async () => {
        await browser.url('https://www.facebook.com/');
 
 
        await $('#day').waitForDisplayed({timeout: 5000, timeoutMsg: 'Date dropdown is NOT displayed with in 2-seconds'});
    });
 });
 