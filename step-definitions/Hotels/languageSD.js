const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

// Given I am on hotels

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
