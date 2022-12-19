const { Given, When } = require('@wdio/cucumber-framework');
const HomePage = require('../../POM/Darksky/Homepage');
const { expect } = require('chai');
const Dates = require('../../Utils/Dates');

const homePage = new HomePage();
dates = new Dates();

// Given(/^I am on darksky$/, async function ()

When(/^I verify that the default units is as expected$/, async function () {
  await homePage.getCurrentUnit();
});

When(
  /^I verify that the Feels Like Temperature is as expected$/,
  async function () {
    timelineIsCorrect = await homePage.isTimelineCorrect();
    expect(timelineIsCorrect, 'Timeline is NOT as expected').to.be.true;
  }
);
