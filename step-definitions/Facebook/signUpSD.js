const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const LoginPage = require('../../POM/Facebook/LoginPage');
const SignUpPage = require('../../POM/Facebook/SignUpPage');
const Dates = require('../../Utils/Dates');

const loginPage = new LoginPage();
const signUpPage = new SignUpPage();
dates = new Dates();

When(/^I click on Create New Account$/, async function () {
  await loginPage.clickNewAccountButton();
});

Then(
  /^I verify current date is displayed in birthdate dropdown$/,
  async function () {
    const actualSelectedDate = await signUpPage.getDay(); // 9
    const actualSelectedMonth = await signUpPage.getMonth(); // Dec
    const actualSelectedYear = await signUpPage.getYear(); // 2022

    const expectedSelectedDate = await signUpPage.getExpectedDay();
    const expectedSelectedMonth = await signUpPage.getExpectedMonth();
    const expectedSelectedYear = await signUpPage.getExpectedYear();

    console.log(
      `\n\nActual: ${actualSelectedMonth}| Expected: ${expectedSelectedMonth}`
    );

    expect(
      actualSelectedDate,
      'Default date in dropdown is NOT current date'
    ).to.be.equal(expectedSelectedDate);
    expect(
      actualSelectedMonth,
      'Default month in dropdown is NOT current month'
    ).to.be.equal(expectedSelectedMonth);
    expect(
      actualSelectedYear,
      'Default year in dropdown is NOT current year'
    ).to.be.equal(expectedSelectedYear);
  }
);

When(
  /^I verify (female|male|custom) radio button is not selected$/,
  async function (genderButton) {
    expect(
      await signUpPage.isGenderSelected(genderButton),
      `${genderButton} gender is selected`
    ).to.be.false;
  }
);

When(/^I enter "(.+)" in (.+)$/, async function (data, field) {
  await signUpPage.enterSignUpDataInField(data, field);
});

When(/^I select "(.+)" in (.+)$/, async function (data, field) {
  await signUpPage.selectSignUpDataInField(data, field);
});

When(/^I click Sign Up button$/, async function () {
  await signUpPage.clickSignUpButton();
});

When(
  /^I verify user is already registered error is displayed$/,
  async function () {
    await browser.pause(3000);
  }
);
