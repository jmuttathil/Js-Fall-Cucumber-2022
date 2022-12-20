const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../../POM/Hotels/HomePage');
const Dates = require('../../Utils/Dates');

const homePage = new HomePage();
dates = new Dates();

Given(/^I am on hotels$/, async function () {
  await browser.url('https://www.hotels.com');
});

When(/^I click on the calendar$/, async function () {
  await homePage.openCalendar();
});

When(/^I select today as Check-in$/, async function () {
  const todaysDate = dates.format_MMMM_D_YYYY(dates.getCurrentTime());

  console.log(`\todaysDate -> ${todaysDate} \n`);

  await homePage.selectCheckOutDate(todaysDate);
});

When(/^I select tomorrow as Check-out$/, async function () {
  const tomorrowsDate = dates.format_MMMM_D_YYYY(
    dates.addTime(dates.getCurrentTime(), 1, 'day')
  );

  console.log(`\ntomorrowsDate -> ${tomorrowsDate} \n`);

  await homePage.selectCheckInDate(tomorrowsDate);
});

When(/^I verify past dates are disabled$/, async function () {
  expect(
    await homePage.arePastDatesDisabled(),
    'Past dates are NOT disabled'
  ).to.be.true;
});
 