const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

// Given I am on hotels

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
