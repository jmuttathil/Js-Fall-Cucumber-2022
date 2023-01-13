const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const SignIn = require('../../POM/Hotels/SignIn');

const signIn = new SignIn();

When(/^on SignIn I enter "(.+)" in (.+)$/, async function (data, field) {
  console.log(`\n\n\n\n\n on SignIn I enter ${data} in ${field}`);
  await signIn.enterDataInField(data, field);
  await browser.pause(1000);
});

When(/^on SignIn I click on (.+)$/, async function (locator) {
  console.log(`\n\n\n\n\n on SignIn I click on ${locator}`);
  await signIn.clickOnWebElement(locator);
});

When(
  /^on SignIn I verify "(.+)" message is displayed$/,
  async function (message) {
    console.log(`\n\n\n\n\non SignIn I verify "${message}" message is displayed`);

    const errorMsgIsDisplayed = await signIn.verifyIsDisplayed(message);
    
    expect(errorMsgIsDisplayed, 'Error Message is NOT displayed').to.be.true;
  }
);
