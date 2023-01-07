const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const Feedback = require('../../POM/Hotels/Feedback');

const feedback = new Feedback();

// Given I am on hotels

When(/^I click on (.+)$/, async function (locator) {
  console.log(`\n\n\n\n\nI click on ***`);
  await feedback.clickOnWebElement(locator);
});

When(/^I verify I am on (.+) tab$/, async function (tabName) {
  console.log(`\n\n\n\n\nI verify  am on *** tab`);
  await feedback.changeActiveWindow(tabName);
});

When(/^I verify error message "(.+)" is displayed$/, async function (errorMsg) {
  console.log(`\n\n\n\n\nI verify error message *** is displayed`);
  await feedback.verifyErrorIsDisplayed(errorMsg);
});

When(/^I verify (.+) is displayed$/, async function (webElement) {
  console.log(`\n\n\n\n\nI verify *** is displayed`);
  await feedback.verifyIsDisplayed(webElement);
});

When(/^I select star-rating (.+)$/, async function (starRating) {
  console.log(`\n\n\n\n\nI select star-rating ***`);
  await feedback.clickOnStarRating(starRating);
  await browser.pause(5000);
});

When(/^I enter "(.+)" in (.+)$/, async function (data, field) {
  console.log(`\n\n\n\n\nI enter *** in ***`);

  await feedback.enterDataInField(data, field);
  await browser.pause(10000);
});

When(/^I select "(.+)" for "(.+)"$/, async function (answer, question) {
  console.log(`\n\n\n\n\nI select *** for ***`);
  await feedback.selectAnswer(answer, question);
  await browser.pause(10000);
});

When(/^I click "(.+)" for "(.+)"$/, async function (answer, question) {
  console.log(`\n\n\n\n\nI click *** for ***`);
  await feedback.clickAnswer(answer, question);
  await browser.pause(10000);
});

When(/^I verify "(.+)" message is displayed$/, async function (webElement) {
  console.log(`\n\n\n\n\nI verify *** message is displayed`);
  await feedback.verifyIsDisplayed(webElement);
});
