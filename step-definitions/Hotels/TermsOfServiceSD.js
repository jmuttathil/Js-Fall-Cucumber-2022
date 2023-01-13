const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const TermsOfService = require('../../POM/Hotels/TermsOfService');

const termsOfService = new TermsOfService();

When(/^on ToS Page I click on (.+)$/, async function (locator) {
  console.log(`\n\n\n\n\n on ToS Page I click on ${locator}`);
  await termsOfService.clickOnWebElement(locator);
});

When(/^on ToS Page I verify the page is on a new tab$/, async function () {
  console.log(`\n\n\n\n\n on ToS Page I verify the page is on a new tab`);
  await termsOfService.verifyNewWindow('Terms of Service', 'Create an account');
});

When(
  /^on ToS Page I verify (.+) format is as expected$/,
  async function (locator) {
    console.log(
      `\n\n\n\n\n on ToS Page I verify ${locator} format is as expected`
    );
    await termsOfService.verifyDateFormat(locator, 'MM/DD/YY');
  }
);
