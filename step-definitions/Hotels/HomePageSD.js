const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../../POM/Hotels/HomePage');
const Dates = require('../../Utils/Dates');

const homePage = new HomePage();
dates = new Dates();

Given(/^I am on hotels$/, async function () {
  console.log(`\n\n\n\n\nI am on hotels`);
  await browser.url('https://www.hotels.com');
  browser.maximizeWindow();
  await browser.pause(2000);
});

When(/^I change language to (.+)$/, async function (languageOption) {
  let currentLanguage = await homePage.getLanguageOption();
  await homePage.openDisplaySettings();
  switch (currentLanguage) {
    case 'English':
      await homePage.selectLanguageOption(languageOption);
      await homePage.clickSaveButton();
      break;
    case 'Español':
      await homePage.selectLanguageOption(languageOption);
      await homePage.clickGuardarButton();
      break;
    default:
      break;
  }
  currentLanguage = await homePage.getLanguageOption();
});

When(/^I verify language got changed to (.+)$/, async function (language) {
  currentLanguage = await homePage.getLanguageOption();
  expect(currentLanguage, 'Language is not as expected').to.equal(language);
});

// GOING TO

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

// DATES

When(/^on HomePage I click on (.+)$/, async function (locator) {
  console.log(`\n\n\n\n\non HomePage I click on ***`);
  await homePage.clickOnWebElement(locator);
});

When(/^on HomePage I select today as Check-in$/, async function () {
  console.log(`\n\n\n\n\non HomePage I select today as Check-in`);
  const todaysDate = dates.format_MMMM_D_YYYY(dates.getCurrentTime());

  console.log(`\todaysDate -> ${todaysDate} \n`);

  await homePage.selectCheckOutDate(todaysDate);
});

When(/^on HomePage I select tomorrow as Check-out$/, async function () {
  console.log(`\n\n\n\n\non HomePage I select tomorrow as Check-out`);
  const tomorrowsDate = dates.format_MMMM_D_YYYY(
    dates.addTime(dates.getCurrentTime(), 1, 'day')
  );

  console.log(`\ntomorrowsDate -> ${tomorrowsDate} \n`);

  await homePage.selectCheckInDate(tomorrowsDate);
});

When(/^on HomePage I navigate calendar to (.+)$/, async function (target) {
  console.log(`\n\n\n\n\non HomePage I navigate calendar to ***`);

  switch (target) {
    case 'current month':
      const currentMonth = dates.format_MMMM_YYYY(dates.getCurrentTime());
      console.log(`\n the current month is ${currentMonth}`);
      const displayedMonth = await homePage.getDisplayedMonth();
      console.log(`\n the displayed month is ${displayedMonth}`);

      const monthsDiff = dates.calculateMonthsDiff(
        currentMonth,
        displayedMonth
      );
      console.log(`\n the difference in months is ${monthsDiff}`);

      // Increment the current month
      if (monthsDiff > 0) {
        for (let clickCounter = 0; clickCounter < monthsDiff; clickCounter++) {
          await homePage.clickOnWebElement('Previous Month');
          console.log(`\n\n I navigate to previous month`);
        }
      } else if (monthsDiff < 0) {
        for (let clickCounter = 0; clickCounter > monthsDiff; clickCounter--) {
          await homePage.clickOnWebElement('Next Month');
          console.log(`\n\n I navigate to next month`);
        }
      } else {
        console.log(`\n\n No navigation needed.`);
      }
      break;
    default:
      break;
  }
});
When(/^on HomePage I verify calendar shows (.+)$/, async function (target) {
  console.log(`\n\n\n\n\non HomePage I verify calendar shows ***`);

  switch (target) {
    case 'current month':
      const currentMonth = dates.format_MMMM_YYYY(dates.getCurrentTime());
      console.log(`\n the current month is ${currentMonth}`);
      const displayedMonth = await homePage.getDisplayedMonth();
      console.log(`\n the displayed month is ${displayedMonth}`);

      expect(currentMonth, 'Language is not as expected').to.equal(
        currentMonth
      );
      break;
    default:
      break;
  }
});

When(/^on HomePage I verify past dates are disabled$/, async function () {
  console.log(`\n\n\n\n\non HomePage I verify past dates are disabled`);
  expect(
    await homePage.arePastDatesDisabled(),
    'Past dates are NOT disabled'
  ).to.be.true;
});

When(/^on HomePage I verify (.+) is disabled$/, async function (webElement) {
  console.log(`\n\n\n\n\non HomePage I verify *** is disabled`);

  switch (webElement) {
    case 'back button':
      const backButtonIsDisabled = await homePage.verifyIsDisplayed(webElement);
      expect(backButtonIsDisabled, 'Back Button is NOT disabled').to.be.true;
      break;
    case 'next button':
      const nextButtonIsDisabled = await homePage.verifyIsDisplayed(webElement);
      expect(nextButtonIsDisabled, 'Next Button is NOT disabled').to.be.true;
      break;
    default:
      break;
  }

  expect(
    await homePage.arePastDatesDisabled(),
    'Past dates are NOT disabled'
  ).to.be.true;
});

// TRAVELERS

When(
  /^I select number of adults in Room 1 as (.+)$/,
  async function (numberOfAdults) {}
  //PSEUDO CODE
  /**
   * get number of adults in room 1
   * use switch case to increase or decrease # of adults
   * use for loop to click the appropriate button
   */
);

When(
  /^I verify the (.+) button for adults is (.+)$/,
  async function (targetButton, status) {}
  //PSEUDO CODE
  /**
   * get status of target button
   * compare with expected
   */
);

When(/^on HomePage I scroll to (.+)$/, async function (webElement) {
  console.log(`\n\n\n\n\non HomePage I scroll to  ***`);
  await homePage.scrollBrowserTo(webElement);
});

When(/^on HomePage I enter "(.+)" in (.+)$/, async function (data, field) {
  console.log(`\n\n\n\n\non HomePage I enter *** in ***`);
  await homePage.enterDataInField(data, field);
  await browser.pause(10000);
});

When(
  /^on HomePage I verify "(.+)" message is displayed$/,
  async function (webElement) {
    console.log(`\n\n\n\n\non HomePage I verify *** message is displayed`);

    const errorMsgIsDisplayed = await homePage.verifyIsDisplayed(webElement);
    expect(errorMsgIsDisplayed, 'Error Message is NOT displayed').to.be.true;
  }
);
