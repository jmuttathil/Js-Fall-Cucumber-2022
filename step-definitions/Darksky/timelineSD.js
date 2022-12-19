const { Given, When } = require('@wdio/cucumber-framework');
const HomePage = require('../../POM/Darksky/Homepage');
const { expect } = require('chai');
const Dates = require('../../Utils/Dates');

const homePage = new HomePage();
dates = new Dates();

Given(/^I am on darksky$/, async function () {
  await browser.url('https://www.darksky.net');
});

When(/^I verify timeline is as expected$/, async function () {
  actTimeline = await homePage.getActTimeline();
  expTimeline = await homePage.getExpTimeline();
  expect(actTimeline, 'Timeline is not as expected').to.deep.equal(expTimeline);
});
