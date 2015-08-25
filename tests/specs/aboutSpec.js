describe('Test About Page', function () {
    it("Should navigate to the about us page.", function () {
        browser.get('http://localhost:8000/#/');
        // get a reference to the about link
        var aboutLink = element(by.linkText('About'));
        aboutLink.click();

        // Check the url to make sure it has /about in it
        expect(browser.getLocationAbsUrl()).toContain('/about');
        // Check to see if the header has the following text
        var aboutParagraph = element(by.css('.lead'));
        expect(aboutParagraph.getText()).toEqual('This is a sample app to describe how to perform end-to-end testing for your Angular.js app.');
    });
});
