const { Given, When } = require('@wdio/cucumber-framework');
const LoginPage = require('../../POM/Facebook/LoginPage');
const { expect } = require('chai');

const loginPage = new LoginPage();

// Given I am on facebook

When(/^I click on (.+) link$/, async function (pageName) {
  this.totalWindowsBeforeClick = await loginPage.getCurrentWindowsCount();
  await loginPage.clickLinkName(pageName);
  await browser.pause(1000);
});

When(
  /^I verify opens in a new window with title "(.+)"$/,
  async function (pageTitle) {
    console.log(
      `\n\n totalWindowsBeforeClick -> ${this.totalWindowsBeforeClick}`
    );

    loginPage.waitForNewLinkWindow(this.totalWindowsBeforeClick);

    this.totalWindowsAfterClick = await loginPage.getCurrentWindowsCount();

    console.log(
      `\n\n totalWindowsAfterClick -> ${this.totalWindowsAfterClick}`
    );
    expect(
      this.totalWindowsBeforeClick + 1,
      'Number of windows are not as expected'
    ).to.equal(this.totalWindowsAfterClick);
  }
);
