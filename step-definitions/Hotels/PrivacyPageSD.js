const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const PrivacyPage = require('../../POM/Hotels/PrivacyPage');

const privacyPage = new PrivacyPage();

When(/^on Privacy Page I click on (.+)$/, async function (locator) {
  console.log(`\n\n\n\n\n on Privacy Page I click on ${locator}`);
  await privacyPage.clickOnWebElement(locator);
});

When(/^on Privacy Page I verify the page is on a new tab$/, async function () {
  console.log(`\n\n\n\n\n on Privacy Page I verify the page is on a new tab`);
  await privacyPage.verifyNewWindow(
    'Hotels.com - Deals & Discounts for Hotel Reservations from Luxury Hotels to Budget Accommodations',
    'Create an account'
  );
});

When(
  /^on Privacy Page I verify (.+) format is as expected$/,
  async function (locator) {
    console.log(
      `\n\n\n\n\n on Privacy Page I verify ${locator} format is as expected`
    );
    await privacyPage.verifyDateFormat(locator, 'DD MMMM, YYYY');
  }
);
