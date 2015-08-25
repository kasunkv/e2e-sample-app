var HomePage = require('../homePage/homePageObject.js');
var ContactPage = require('../contactPage/contactPageObject.js');

module.exports = function () {
	this.getPage = function () {
		browser.get(browser.params.siteUrl + '/about');
	};

	this.getPageUrl = function () {
		return browser.getLocationAbsUrl();
	};

	this.getAboutParagraph = function () {
		return element(by.css('.lead')).getText();
	};

	this.clickHomePageLink = function () {
		element(by.linkText('Home'));
		return new HomePage();
	};

	this.clickContactPageLink = function () {
		element(by.linkText('Contact')).click();
		return new ContactPage();
	};

	this.clickHomePageLink = function () {
		element(by.linkText('Home')).click();
		return new HomePage();
	};
};	