const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class SignIn {
  commands = new Commands();
  dates = new Dates();

  // LOCATORS
  signInMismatchError = '//h3[@class="uitk-error-summary-heading"]';
  emailField = '//input[@id="loginFormEmailInput"]';
  passwordField = '//input[@id="loginFormPasswordInput"]';
  keepMeSignedIn = '//input[@id="loginFormRememberMeCheck"]';
  termsAndConditions = '//a[contains(text(),"Terms and Conditions"]';
  privacyStatement = '//a[contains(text(),"Privacy Statement"]';
  signInButton = '//button[@id="loginFormSubmitButton"]';
  signInButtonDisabled = '//button[@disabled]';
  forgotPasswordLink = '//a[@id="loginFormForgoPwdLink"]';
  createAccountLink = '//a[@id="createAcctRedirectLink"]';

  // FUNCTIONS

  async enterDataInField(data, field) {
    switch (field) {
      case 'email address':
        await this.commands.typeInWebElement(this.emailField, data);
        break;
      case 'password':
        await this.commands.typeInWebElement(this.passwordField, data);
        break;
      default:
        break;
    }
  }

  async clickOnWebElement(locator) {
    switch (locator) {
      case 'Sign in button':
        await this.commands.clickWebElement(this.signInButton);
        console.log(`\n\n\n\n\n BRIEF PAUSE...\n\n\n\n\n`);
        await browser.pause(5000);
        break;
      case 'Keep me signed in':
        await this.commands.clickWebElement(this.keepMeSignedIn);
        break;
      case 'Terms and Conditions':
        await this.commands.clickWebElement(this.termsAndConditions);
        break;
      case 'Privacy Statement':
        await this.commands.clickWebElement(this.privacyStatement);
        break;
    }
  }

  async verifyIsDisplayed(webElement) {
    switch (webElement) {
      case "Email and password don't match. Please try again.":
        console.log(`\n\n\n\n\n BRIEF PAUSE...\n\n\n\n\n`);
        await browser.pause(1000);
        return await this.commands.isWebElementDisplayed(
          this.signInMismatchError
        );

        break;
      default:
        break;
    }
  }
}
module.exports = SignIn;
