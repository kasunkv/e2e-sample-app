var HomePage = require('../homePage/homePageObject.js');
var AboutPage = require('../aboutPage/aboutPageObject.js');

module.exports = function () {
	this.getPage = function () {
		browser.get(browser.params.siteUrl + '/contact');
	};

	this.getPageUrl = function () {
		return browser.getLocationAbsUrl();
	};

	this.enterName = function (name) {
		return element(by.model('feedback.name')).sendKeys(name);
	};

	this.enterEmail = function (email) {
		return element(by.model('feedback.email')).sendKeys(email);
	};

	this.enterMessage = function (message) {
		return element(by.model('feedback.message')).sendKeys(message);
	};

	this.clickSendButton = function () {
		return element(by.buttonText('Send')).click();
	};

	this.getMessageBox = function () {
		return element(by.id('success-alert'));
	};

	this.isSuccessful = function () {
		return this.getMessageBox().isDisplayed();
	};
};