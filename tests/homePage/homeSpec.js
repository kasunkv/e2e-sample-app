var HomePage = require('./homePageObject.js');

describe('Test Home Page', function () {
	var homePage = new HomePage();

	it('Should display the text typed in to the input field. ', function () {
		homePage.getPage();
		homePage.typeText('Kasun');
		expect(homePage.getDisplayTest()).toBe('Kasun');
	});

	it('Should navigate to About page when about nav link is clicked', function () {
		var aboutPage = homePage.clickAboutPageLink();
		expect(aboutPage.getPageUrl()).toContain('/about');
		expect(aboutPage.getAboutParagraph()).toContain('This is a sample app to describe how to perform end-to-end testing');
	});

	it('Should naviate to Contact page and send contact details', function () {
		var contactPage = homePage.clickContactPageLink();
		expect(contactPage.getPageUrl()).toContain('/contact');
		contactPage.enterName('Kasun Kodagoda');
		contactPage.enterEmail('kasunk@99x.lk');
		contactPage.enterMessage('Welcome!');
		contactPage.clickSendButton();
		expect(contactPage.isSuccessful()).toBeTruthy();
	});
});