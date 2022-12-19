const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class SignUpPage {
  commands = new Commands();
  dates = new Dates();

  // LOCATORS
  // BASIC PROFILE
  firstNameField = 'input[name=firstname]';
  lastNameField = 'input[name=lastname]';
  numberOrEmailField = 'input[name=reg_email__]';
  passwordField = 'input[name=reg_passwd__]';

  // BIRTHDAY
  monthSelector = '#month';
  monthSelection = '//select[@id="month"]//option[@selected]';
  daySelector = '#day';
  daySelection = '//select[@id="day"]//option[@selected]';
  yearSelector = '#year';
  yearSelection = '//select[@id="year"]//option[@selected]';

  // GENDER
  femaleGenderChoice = 'input[value="1"]'; // Female
  maleGenderChoice = 'input[value="2"]'; // Male
  customGenderChoice = 'input[value="-1"]'; // Custom

  pronounSelector = 'select[name=preferred_pronoun]'; // She/He/They
  customGenderField = 'input[name=custom_gender]'; // Custom String

  // SIGNUP BUTTON
  signUpButton = 'button[name=websubmit]';

  // FUNCTIONS
  async enterSignUpDataInField(data, field) {
    switch (field) {
      case 'firstname':
        await this.commands.typeInWebElement(this.firstNameField, data);
        break;
      case 'lastname':
        await this.commands.typeInWebElement(this.lastNameField, data);
        break;
      case 'mobile number':
        await this.commands.typeInWebElement(this.numberOrEmailField, data);
        break;
      case 'new password':
        await this.commands.typeInWebElement(this.passwordField, data);
        break;
      default:
        break;
    }
  }

  async selectSignUpDataInField(data, field) {
    switch (field) {
      case 'date of birth':
        this.selectBirthData(data);
        break;
      case 'gender':
        this.selectGender(data);
        break;
      default:
        break;
    }
  }

  selectBirthData(birthDate) {
    // 'Dec 12 1990'
    const birthDateArray = birthDate.split(' '); // 'Dec' , '12' , '1990'
    this.setMonth(birthDateArray[0]);
    this.setDay(birthDateArray[1]);
    this.setYear(birthDateArray[2]);
  }

  async selectGender(data) {
    switch (data) {
      case 'female':
        this.commands.clickWebElement(this.femaleGenderChoice);
        break;
      case 'male':
        this.commands.clickWebElement(this.maleGenderChoice);
        break;
      case 'custom':
        this.commands.clickWebElement(this.customGenderChoice);
        break;
      default:
        break;
    }
  }

  // BASIC PROFILE
  async enterFirstName(firstName) {
    await this.commands.typeInWebElement(this.firstNameField, firstName);
  }

  async enterLastName(lastName) {
    await this.commands.typeInWebElement(this.lastNameField, lastName);
  }
  async enterNumberOrEmail(numberOrEmail) {
    await this.commands.typeInWebElement(
      this.numberOrEmailField,
      numberOrEmail
    );
  }
  async enterPassword(password) {
    await this.commands.typeInWebElement(this.passwordField, password);
  }

  // BIRTHDAY
  async setMonth(month) {
    await this.commands.selectDataInDropdown(this.monthSelector, month); // Month format MMM
  }
  async setDay(day) {
    await this.commands.selectDataInDropdown(this.daySelector, day); // Day format D
  }
  async setYear(year) {
    await this.commands.selectDataInDropdown(this.yearSelector, year); // Year format YYYY
  }

  async getMonth() {
    return await $(this.monthSelection).getValue();
  }
  async getDay() {
    return await $(this.daySelection).getValue();
  }
  async getYear() {
    return await $(this.yearSelection).getValue();
  }

  async getExpectedMonth() {
    return dates.getCurrentMonth_MM();
  }
  async getExpectedDay() {
    return dates.getCurrentDate_D();
  }
  async getExpectedYear() {
    return dates.getCurrentYear_YYYY();
  }

  // GENDER
  async isGenderSelected(genderButton) {
    let isButtonSelected = 0;
    switch (genderButton) {
      case 'female':
        isButtonSelected = await this.commands.isWebElementSelected(
          this.femaleGenderChoice
        );
        break;
      case 'male':
        isButtonSelected = await this.commands.isWebElementSelected(
          this.maleGenderChoice
        );
        break;
      case 'custom':
        isButtonSelected = await this.commands.isWebElementSelected(
          this.customGenderChoice
        );
        break;
      default:
        break;
    }

    return isButtonSelected;
  }

  // SIGNUP BUTTON
  async clickSignUpButton() {
    await this.commands.clickWebElement(this.signUpButton);
  }
}
module.exports = SignUpPage;
