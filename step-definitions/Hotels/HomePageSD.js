const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../../POM/Hotels/HomePage');
const Dates = require('../../Utils/Dates');

const homePage = new HomePage();
dates = new Dates();

Given(/^I am on hotels$/, async function () {
  console.log(`\n\n\n\n\nI am on hotels`);
  await browser.url('https://www.hotels.com');
  // browser.maximizeWindow();
  await browser.pause(2000);
});

When(
  /^on HomePage I switch language to (.+)$/,
  async function (languageOption) {
    console.log(
      `\n\n\n\n\n on HomePage I switch language to ${languageOption} `
    );
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
  }
);

When(
  /^on HomePage I verify language got changed to (.+)$/,
  async function (language) {
    console.log(
      `\n\n\n\n\n on HomePage I verify language got changed to ${language} `
    );
    currentLanguage = await homePage.getLanguageOption();
    expect(currentLanguage, 'Language is not as expected').to.equal(language);
  }
);

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
  console.log(`\n\n\n\n\non HomePage I click on ${locator}`);
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

      expect(currentMonth, 'Month is NOT as expected').to.equal(currentMonth);
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
  /^on HomePage I change (.+) to (.+)$/,
  async function (travelerType, travelerCount) {
    console.log(
      `\n\n\n\n\n on HomePage I change ${travelerType} to ${travelerCount}`
    );

    switch (travelerType) {
      case 'Adults':
        // CALCULATE CHANGE IN NUMBER OF ADULTS
        const startAdults = parseInt(
          await homePage.getTravelerCount(travelerType)
        );
        console.log(`\n\n there are currently ${startAdults} Adults`);
        const desiredAdults = parseInt(travelerCount);
        console.log(`\n\n I want ${desiredAdults} Adults`);
        const diffAdults = desiredAdults - startAdults;
        console.log(`\n\n That is a change of ${diffAdults} Adults`);

        // CHANGE THE NUMBER OF ADULTS
        if (diffAdults > 0) {
          for (
            let clickCounter = 0;
            clickCounter < diffAdults;
            clickCounter++
          ) {
            await homePage.clickOnWebElement('More Adults');
            console.log(`\n\n I added 1 Adult`);
          }
        } else if (diffAdults < 0) {
          for (
            let clickCounter = 0;
            clickCounter > diffAdults;
            clickCounter--
          ) {
            await homePage.clickOnWebElement('Less Adults');
            console.log(`\n\n I removed 1 Adult`);
          }
        } else {
          console.log(`\n\n No change in Adults needed.`);
        }
        // VERIFY CHANGE IN NUMBER OF ADULTS
        const finishAdults = parseInt(
          await homePage.getTravelerCount(travelerType)
        );
        console.log(`\n\n there are now ${finishAdults} Adults`);
        expect(finishAdults, 'WRONG number of Adults').to.equal(desiredAdults);
        break;

      case 'Children':
        // CALCULATE CHANGE IN NUMBER OF CHILDREN
        const startChildren = parseInt(
          await homePage.getTravelerCount(travelerType)
        );
        console.log(`\n\n there are currently ${startChildren} Children`);
        const desiredChildren = parseInt(travelerCount);
        console.log(`\n\n I want ${desiredChildren} Children`);
        const diffChildren = desiredChildren - startChildren;
        console.log(`\n\n That is a change of ${diffChildren} Children`);

        // CHANGE THE NUMBER OF CHILDREN
        if (diffChildren > 0) {
          for (
            let clickCounter = 0;
            clickCounter < diffChildren;
            clickCounter++
          ) {
            await homePage.clickOnWebElement('More Children');
            console.log(`\n\n I added 1 Child`);
          }
        } else if (diffChildren < 0) {
          for (
            let clickCounter = 0;
            clickCounter > diffChildren;
            clickCounter--
          ) {
            await homePage.clickOnWebElement('Less Children');
            console.log(`\n\n I removed 1 Child`);
          }
        } else {
          console.log(`\n\n No change in Children needed.`);
        }
        // VERIFY CHANGE IN NUMBER OF CHILDREN
        const finishChildren = parseInt(
          await homePage.getTravelerCount(travelerType)
        );
        console.log(`\n\n there are now ${finishChildren} Children`);
        expect(finishChildren, 'WRONG number of Children').to.equal(
          desiredChildren
        );
        break;

        break;
      default:
        break;
    }
  }
);

When(
  /^on HomePage I select (.+) child age: (.+)$/,
  async function (childNumber, childAge) {
    console.log(
      `\n\n\n\n\n on HomePage I select ${childNumber} child age: ${childAge}`
    );
    await homePage.selectChildAge(childNumber, childAge);
  }
);

When(
  /^on HomePage I verify total number of travelers is correct$/,
  async function () {
    console.log(
      `\n\n\n\n\n on HomePage I verify total number of travelers is correct`
    );
    const totalTravelers = parseInt(
      await homePage.getTravelerCount('Travelers')
    );
    const totalAdults = parseInt(await homePage.getTravelerCount('Adults'));
    const totalChildren = parseInt(await homePage.getTravelerCount('Children'));

    console.log(`\n\n\n\n\n There are ${totalAdults} Adults`);
    console.log(`\n There are ${totalChildren} Children`);
    console.log(`\n There are ${totalTravelers} Total Travelers\n\n\n\n\n`);

    const expectedTotalTravelers = totalAdults + totalChildren;
    expect(expectedTotalTravelers, 'WRONG number of Travelers').to.equal(
      totalTravelers
    );
  }
);

// GET THE APP BUTTON

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
