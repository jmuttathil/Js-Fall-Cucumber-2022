const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const Feedback = require('../../POM/Hotels/Feedback');

const feedback = new Feedback();

// Given I am on hotels

When(/^on Feedback I click on (.+)$/, async function (locator) {
  console.log(`\n\n\n\n\n on Feedback I click on ***`);
  await feedback.clickOnWebElement(locator);
});

When(/^on Feedback I verify I am on (.+) tab$/, async function (tabName) {
  console.log(`\n\n\n\n\n on Feedback I verify  am on *** tab`);
  await feedback.changeActiveWindow(tabName);
});

When(
  /^on Feedback I verify error message (.+) is displayed$/,
  async function (errorMsg) {
    console.log(
      `\n\n\n\n\n on Feedback I verify error message *** is displayed`
    );
    await feedback.verifyErrorIsDisplayed(errorMsg);
  }
);

When(/^on Feedback I verify (.+) is displayed$/, async function (webElement) {
  console.log(`\n\n\n\n\n on Feedback I verify *** is displayed`);
  await feedback.verifyIsDisplayed(webElement);
});

When(/^on Feedback I select star-rating (.+)$/, async function (starRating) {
  console.log(`\n\n\n\n\n on Feedback I select star-rating ***`);
  await feedback.clickOnStarRating(starRating);
});

When(/^on Feedback I enter "(.+)" in (.+)$/, async function (data, field) {
  console.log(`\n\n\n\n\n on Feedback I enter *** in ***`);
  await feedback.enterDataInField(data, field);
});

When(
  /^on Feedback I select "(.+)" for "(.+)"$/,
  async function (answer, question) {
    console.log(`\n\n\n\n\n on Feedback I select *** for ***`);
    await feedback.selectAnswer(answer, question);
  }
);

When(
  /^on Feedback I click "(.+)" for "(.+)"$/,
  async function (answer, question) {
    console.log(`\n\n\n\n\n on Feedback I click *** for ***`);
    await feedback.clickAnswer(answer, question);
  }
);

When(
  /^on Feedback I verify "(.+)" message is displayed$/,
  async function (webElement) {
    console.log(`\n\n\n\n\n on Feedback I verify *** message is displayed`);
    await feedback.verifyIsDisplayed(webElement);
  }
);
