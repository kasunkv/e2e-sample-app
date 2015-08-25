var AboutPage = require('../aboutPage/aboutPageObject.js');
var ContactPage = require('../contactPage/contactPageObject.js');

module.exports = function () {

	this.getPage = function () {
		browser.get(browser.params.siteUrl);
	};

	this.getInputField = function () {
		return element(by.model('sampleInput'));
	};

	this.typeText = function (text) {
		this.getInputField().sendKeys(text);
	};

	this.getDisplayField = function () {
		return element(by.binding('sampleInput'));
	};	

	this.getDisplayTest = function () {
		return this.getDisplayField().getText();
	};

	this.clickAboutPageLink = function () {
		element(by.linkText('About')).click();
		return new AboutPage();
	};

	this.clickContactPageLink = function () {
		element(by.linkText('Contact')).click();
		return new ContactPage();
	};
};
