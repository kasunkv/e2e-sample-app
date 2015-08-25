describe('Test Contact Page', function () {
    it("Should send feedback to the backend.", function () {
        browser.get('http://localhost:8000/#/');
        // get a reference to the contact link
        var contactLink = element(by.linkText('Contact'));
        contactLink.click();

        // make sure we are in the contact page.
        expect(browser.getLocationAbsUrl()).toContain('/contact');

        // set values to the contact form
        element(by.model('feedback.name')).sendKeys('Kasun Kodagoda');
        element(by.model('feedback.email')).sendKeys('example@example.com');
        element(by.model('feedback.message')).sendKeys('This is a message.');

        // click the send button
        var sendButton = element(by.buttonText('Send'));
        sendButton.click();

        // get a reference to the alert message
        var alertMsg = element(by.id('success-alert'));
        expect(alertMsg.isDisplayed()).toBeTruthy();

    });
});
