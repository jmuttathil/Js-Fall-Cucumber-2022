const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../../POM/Hotels/HomePage');
const Dates = require('../../Utils/Dates');

const homePage = new HomePage();
dates = new Dates();

// Given I am on hotels

When(/^I type '(.+)' in destination$/, async function (data) {
  await homePage.enterDestination(data);
});

When(/^I select (.+) from auto-suggestions$/, async function (selection) {
  await homePage.selectFromSuggestedDestinations(selection);
});

When(
  /^I verify (.+) is displayed as destination$/,
  async function (expectedDestination) {
    var correctDestinationDisplayed = false;
    const displayedDestination = await homePage.getDestination();

    if (displayedDestination.localeCompare(expectedDestination) === 0) {
      correctDestinationDisplayed = true;
    }

    console.log(
      `\n\n${expectedDestination}|${displayedDestination}|${correctDestinationDisplayed} \n`
    );

    expect(
      correctDestinationDisplayed,
      `Destination is NOT '${expectedDestination}'`
    ).to.be.true;
  }
);
 