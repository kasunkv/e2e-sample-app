describe('Test Home Page', function () {
    it("Should display the text typed in to the input field.", function () {
        browser.get('http://localhost:8000/#/');

        // Type in a value to input field
        var textInput = element(by.model('sampleInput'));
        textInput.sendKeys('The KVK Blog');

        // Check if the same value is displayed
        var displayField = element(by.binding('sampleInput'));
        expect(displayField.getText()).toEqual('The KVK Blog');
    });
});
