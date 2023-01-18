const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class SignUp {
  commands = new Commands();
  dates = new Dates();

  // LOCATORS
  emailField = '//input[@id="signupFormEmailInput"]';
  emailFieldError = '//div[@id="signupFormEmailInput-error"]';

  firstNameField = '//input[@id="signupFormFirstNameInput"]';
  firstNameFieldError = '//div[@id="signupFormFirstNameInput-error"]';

  lastNameField = '//input[@id="signupFormLastNameInput"]';
  lastNameFieldError = '//div[@id="signupFormLastNameInput-error"]';

  // PASSWORD

  passwordField = '//input[@id="signupFormPasswordInput"]';
  hidePasswordButton =
    '//input[@id="signupFormPasswordInput"]/following-sibling::button';

  strengthMsg_Weak = '//div[contains(text(),"Weak")]';
  strengthMsg_Strong = '//div[contains(text(),"Strong")]';
  strengthMsg_VeryStrong = '//div[contains(text(),"Very Strong")]';

  strengthBar_not = '//div[@style="width: 0%;"]';
  strengthBar_half = '//div[@style="width: 50%;"]';
  strengthBar_almost = '//div[@style="width: 75%;"]';
  strengthBar_completely = '//div[@style="width: 100%;"]';

  passWordMsg_characters = '//li[contains(text(),"Includes 8-64 characters")]';
  passWordMsg_lessCommon =
    '//li[contains(text(),"Add more words that are less common.")]';
  passWordMsg_combinesLaN =
    '//li[contains(text(),"Combines letters and numbers")]';
  passWordMsg_avoidSequences =
    '//li[contains(text(),"Avoid common character sequences.")]';

  // KEEP ME SIGNED IN

  keepMeSignedInBox = '//input[@id="rememberMeSignUpCheckbox"]';
  keepMeSignedInText = '//span[contains(text(),"Keep me signed in")]';

  termsAndConditions = '//a[contains(text(),"Terms and Conditions")]';
  privacyStatement = '//a[contains(text(),"Privacy Statement")]';

  continueButton = '//button[@id="signupFormSubmitButton"]';
  continueButtonDisabled = '//button[@disabled]';

  signInLink = '//a[@id="signinRedirectLink"]';

  signInMismatchError = '//h3[@class="uitk-error-summary-heading"]';

  // FUNCTIONS

  async enterDataInField(data, field) {
    switch (field) {
      case 'email address':
        await this.commands.typeInWebElement(this.emailField, data);
        break;
      case 'first name':
        await this.commands.typeInWebElement(this.firstNameField, data);
        break;
      case 'last name':
        await this.commands.typeInWebElement(this.lastNameField, data);
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
      case 'Hide Password Button':
        await this.commands.clickWebElement(this.hidePasswordButton);
        break;
      case 'Continue button':
        await this.commands.clickWebElement(this.continueButton);
        break;
      case 'Sign in link':
        await this.commands.clickWebElement(this.signInLink);
        break;
      case 'Keep me signed in':
        await this.commands.clickWebElement(this.keepMeSignedIn);
        break;
      case 'Terms and Conditions link':
        await this.commands.clickWebElement(this.termsAndConditions);
        break;
      case 'Privacy Statement link':
        await this.commands.clickWebElement(this.privacyStatement);
        break;
    }
  }

  async verifyIsDisplayed(webElement) {
    switch (webElement) {
      case 'Enter a valid email':
        return await this.commands.isWebElementDisplayed(this.emailFieldError);
        break;
      case 'First name cannot contain special characters':
        return await this.commands.isWebElementDisplayed(
          this.firstNameFieldError
        );
        break;
      case 'Last name cannot contain special characters':
        return await this.commands.isWebElementDisplayed(
          this.lastNameFieldError
        );
        break;

      case 'Includes 8-64 characters message':
        return await this.commands.isWebElementDisplayed(
          this.passWordMsg_characters
        );
        break;

      case 'Add more words that are less common message':
        return await this.commands.isWebElementDisplayed(
          this.passWordMsg_lessCommon
        );
        break;

      case 'Combines letters and numbers message':
        return await this.commands.isWebElementDisplayed(
          this.passWordMsg_combinesLaN
        );
        break;

      case 'Avoid common character sequences message':
        return await this.commands.isWebElementDisplayed(
          this.passWordMsg_avoidSequences
        );
        break;

      case 'Keep me signed in':
        return await this.commands.isWebElementDisplayed(
          this.keepMeSignedInText
        );
        break;
      case 'Continue button':
        return await this.commands.isWebElementDisplayed(this.continueButton);
        break;
      default:
        break;
    }
  }

  async verifyIsEnabled(webElement) {
    switch (webElement) {
      case 'Keep me signed in':
        return await this.commands.isWebElementEnabled(this.keepMeSignedInText);
        break;
      case 'Continue button':
        return await this.commands.isWebElementEnabled(this.continueButton);
        break;
      default:
        break;
    }
  }

  async verifyIsNotEnabled(webElement) {
    switch (webElement) {
      case 'Continue button':
        return await this.commands.isWebElementDisplayed(
          this.continueButtonDisabled
        );
        break;
      default:
        break;
    }
  }

  async confirmFillLevel(attribute) {
    switch (attribute) {
      case 'not filled':
        return await this.commands.isWebElementDisplayed(this.strengthBar_not);
        break;
      case 'half filled':
        return await this.commands.isWebElementDisplayed(this.strengthBar_half);
        break;
      case 'almost filled':
        return await this.commands.isWebElementDisplayed(
          this.strengthBar_almost
        );
        break;
      case 'completely filled':
        return await this.commands.isWebElementDisplayed(
          this.strengthBar_completely
        );
        break;

      default:
        break;
    }
  }

  async confirmStrengthMsg(attribute) {
    switch (attribute) {
      case 'Weak':
        return await this.commands.isWebElementDisplayed(this.strengthMsg_Weak);
        break;
      case 'Strong':
        return await this.commands.isWebElementDisplayed(
          this.strengthMsg_Strong
        );
        break;
      case 'Very Strong':
        return await this.commands.isWebElementDisplayed(
          this.strengthMsg_VeryStrong
        );
        break;

      default:
        break;
    }
  }
}

module.exports = SignUp;
