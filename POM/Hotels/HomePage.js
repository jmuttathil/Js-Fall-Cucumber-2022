const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class HomePage {
  commands = new Commands();
  dates = new Dates();

  // LOCATORS
  // HEADER
  displaySettingsLink = '//nav[@id="secondaryNav"]//div//button//div//div';

  // DISPLAY SETTINGS
  languageSelector = '//select[@id="language-selector"]';
  saveButton = '//button[contains(text(),"Save")]';
  guardarButton = '//button[contains(text(),"Guardar")]';

  // SIGN IN MENU
  signInLink = '//button[contains(text(),"Sign in")]';
  signInButton = '//a[@data-stid="link-header-account-signin"]';
  signUpLink = '//a[@data-stid="link-header-account-signup"]';
  feedbackLink =
    '//button[contains(text(),"Sign in")]/following-sibling::div//div//a[contains(text(),"Feedback")]';

  // DESTINATION
  goingToLocator = '//button[@aria-label="Going to"]';
  goingToDestinationLocator =
    '//button[starts-with(@aria-label , "Going to ")]';

  goingToTypeLocator = '#destination_form_field';
  autoSuggestionsLocator = '//div[@class="truncate"]//strong';

  // CALENDAR
  datesLocator = '//button[@id="date_form_field-btn"]';

  allDatesLocator_starts = '//button[starts-with(@aria-label, "';
  allDatesLocator_ends = '")]';

  allDisabledDatesLocator = '//button[contains(@class, "is-disabled")]';

  calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';

  prevCalendarButtonLocator =
    '//button[@data-stid="date-picker-paging"]/preceding-sibling::button';
  nextCalendarButtonLocator =
    '//button[@data-stid="date-picker-paging"]/following-sibling::button';
  prevCalendarButtonDisabled =
    '//button[@data-stid="date-picker-paging"]/preceding-sibling::button[@disabled]';
  nextCalendarButtonDisabled =
    '//button[@data-stid="date-picker-paging"]/following-sibling::button[@disabled]';

  leftSideCalendarHeaderLocator =
    '//div[@class="uitk-date-picker-month"]/preceding-sibling::div//h2';
  rightSideCalendarHeaderLocator =
    '//div[@class="uitk-date-picker-month"]/following-sibling::div//h2';

  // TRAVELERS

  travelersLocator = '//button[@data-stid="open-room-picker"]/../../../div';

  totalTravelersLocator = '//button[@data-stid="open-room-picker"]/../input';
  adultTravelersLocator = '//input[@id="traveler_selector_adult_step_input-0"]';
  childTravelersLocator =
    '//input[@id="traveler_selector_children_step_input-0"]';

  // ADULTS

  decreaseAdultsLocator =
    '//*[@id="traveler_selector_adult_step_input-0-decrease-title"]/../../../span';
  increaseAdultsLocator =
    '//*[@id="traveler_selector_adult_step_input-0-increase-title"]/../../../span';

  // CHILDREN

  decreaseChildrenLocator =
    '//*[@id="traveler_selector_children_step_input-0-decrease-title"]/../../../span';
  increaseChildrenLocator =
    '//*[@id="traveler_selector_children_step_input-0-increase-title"]/../../../span';

  decreaseChildrenDisabled =
    '//*[@id="traveler_selector_children_step_input-0-decrease-title"]/../../../../button[@disabled]';
  increaseChildrenDisabled =
    '//*[@id="traveler_selector_children_step_input-0-increase-title"]/../../../../button[@disabled]';

  child1AgeSelector =
    '//select[@id="age-traveler_selector_children_age_selector-0-0"]';
  child2AgeSelector =
    '//select[@id="age-traveler_selector_children_age_selector-0-1"]';
  child3AgeSelector =
    '//select[@id="age-traveler_selector_children_age_selector-0-2"]';
  child4AgeSelector =
    '//select[@id="age-traveler_selector_children_age_selector-0-3"]';
  child5AgeSelector =
    '//select[@id="age-traveler_selector_children_age_selector-0-4"]';
  child6AgeSelector =
    '//select[@id="age-traveler_selector_children_age_selector-0-5"]';

  allChildAgeSelectors =
    '//select[contains(@id , "age-traveler_selector_children_age_selector-0")]';

  travelersDone = '//button[@id="traveler_selector_done_button"]';

  // SEARCH
  searchButtonLocator = '//button[@id="search_button"]';

  // GET THE APP
  phoneNumberField = '//input[@id="phoneNumber"]';
  getTheAppButton = '//button[@id="submitBtn"]';
  phoneNumberError = '//div[@id="phoneNumber-error"]';

  // FUNCTIONS

  async getLanguageOption() {
    var currentLanguage = await this.commands.getTextOfWebElement(
      this.displaySettingsLink
    );
    return currentLanguage;
  }

  async openDisplaySettings() {
    await this.commands.clickWebElement(this.displaySettingsLink);
  }

  async selectLanguageOption(languageOption) {
    await this.commands.selectDataInDropdown(
      this.languageSelector,
      languageOption
    );
  }

  async clickSaveButton() {
    await this.commands.clickWebElement(this.saveButton);
  }

  async clickGuardarButton() {
    await this.commands.clickWebElement(this.guardarButton);
  }

  // SIGN IN MENU
  async clickOnWebElement(locator) {
    switch (locator) {
      case 'Sign in':
        await this.commands.clickWebElement(this.signInLink);
        break;
      case 'Sign in button':
        await this.commands.clickWebElement(this.signInButton);
        break;
      case 'SignUp link':
        await this.commands.clickWebElement(this.signUpLink);
        break;
      case 'Feedback':
        await this.commands.clickWebElement(this.feedbackLink);
        break;
      // CALENDAR
      case 'the Calendar':
        await this.commands.clickWebElement(this.datesLocator);
        break;
      case 'Previous Month':
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
        break;
      case 'Next Month':
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
        break;
      case 'the Calendar Done button':
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
        break;
      // TRAVELERS
      case 'Travelers':
        await this.commands.clickWebElement(this.travelersLocator);
        break;
      case 'Less Adults':
        await this.commands.clickWebElement(this.decreaseAdultsLocator);
        break;
      case 'More Adults':
        await this.commands.clickWebElement(this.increaseAdultsLocator);
        break;
      case 'Less Children':
        await this.commands.clickWebElement(this.decreaseChildrenLocator);
        break;
      case 'More Children':
        await this.commands.clickWebElement(this.increaseChildrenLocator);
        break;
      case 'Done on Travelers':
        await browser.pause(1000);
        await this.commands.clickWebElement(this.travelersDone);
        break;
      // SEARCH
      case 'the Search button':
        await browser.pause(4000);
        await this.commands.clickWebElement(this.searchButtonLocator);
        break;
      // FOOTER
      case 'Get the app button':
        await this.commands.clickWebElement(this.getTheAppButton);
        await browser.pause(1000);
        break;
      default:
        break;
    }
  }

  // DESTINATION
  async enterDestination(destination) {
    await this.commands.clickWebElement(this.goingToLocator);
    await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
  }

  async selectFromSuggestedDestinations(userChoice) {
    await this.commands.selectFromAutoSuggestion(
      this.autoSuggestionsLocator,
      userChoice
    );
  }

  async getDestination() {
    var displayedDestination = await this.commands.getTextOfWebElement(
      this.goingToDestinationLocator
    );
    displayedDestination = displayedDestination.substring(10);
    return displayedDestination;
  }

  // CALENDAR
  async arePastDatesDisabled() {
    var pastDatesAreDisabled = false;
    const allDisabledDates = await this.commands.getAllDisabledDates(
      this.allDisabledDatesLocator
    );

    let expectedCount = this.dates.getCurrentDate_D() - 1;
    let actualCount = allDisabledDates.length;
    if (expectedCount == actualCount) {
      pastDatesAreDisabled = true;
    }
    return pastDatesAreDisabled;
  }

  async selectCheckInDate(date) {
    // date = "December 5 2022"
    // 'December', '5', '2022'
    const dateArray = date.split(' ');
    await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
    const allDatesLocator =
      this.allDatesLocator_starts +
      date.substring(0, 3) +
      this.allDatesLocator_ends;
    await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
  }

  async selectCheckOutDate(date) {
    const dateArray = date.split(' ');
    await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
    const allDatesLocator =
      this.allDatesLocator_starts +
      date.substring(0, 3) +
      this.allDatesLocator_ends;
    await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
  }

  async getDisplayedMonth() {
    var displayedMonth = await this.commands.getTextOfWebElement(
      this.leftSideCalendarHeaderLocator
    );
    return displayedMonth;
  }

  async clickDoneOnCalendar() {
    await this.commands.clickWebElement(this.calendarDoneButtonLocator);
  }

  async clickToGoToNextCalendar() {
    await this.commands.clickWebElement(this.nextCalendarButtonLocator);
  }

  async clickToGoToPrevCalendar() {
    await this.commands.clickWebElement(this.prevCalendarButtonLocator);
  }

  // 'May 2023'
  async goToMonth(monthYear) {
    /**
     * using leftSideCalendarHeaderLocator get headerElement
     * find text of webElement
     * if (text NOT equal to monthYear)
     *      click >
     */
    let count = 1;
    while (count <= 12) {
      const monthHeader = await this.commands.getTextOfWebElement(
        this.leftSideCalendarHeaderLocator
      );
      console.log(`\n monthHeader -> ${monthHeader} \n`);
      if (monthHeader.localeCompare(monthYear) === 0) {
        break;
      }
      await this.commands.clickWebElement(this.nextCalendarButtonLocator);
      await browser.pause(1000);
      count++;
    }
  }

  // TRAVELERS
  async getTravelerCount(travelerType) {
    switch (travelerType) {
      case 'Travelers':
        var travelerCount = await this.commands.getAttributeWebElement(
          this.totalTravelersLocator,
          'value'
        );
        return travelerCount;
      case 'Adults':
        var travelerCount = await this.commands.getAttributeWebElement(
          this.adultTravelersLocator,
          'value'
        );
        return travelerCount;
      case 'Children':
        var travelerCount = await this.commands.getAttributeWebElement(
          this.childTravelersLocator,
          'value'
        );
        return travelerCount;
      default:
        break;
    }
  }

  async selectChildAge(childNumber, childAge) {
    switch (childNumber) {
      case 'first':
        await this.commands.selectDataInDropdown(
          this.child1AgeSelector,
          childAge
        );
        break;
      case 'second':
        await this.commands.selectDataInDropdown(
          this.child2AgeSelector,
          childAge
        );
        break;
      case 'third':
        await this.commands.selectDataInDropdown(
          this.child3AgeSelector,
          childAge
        );
        break;
      case 'fourth':
        await this.commands.selectDataInDropdown(
          this.child4AgeSelector,
          childAge
        );
        break;
      case 'fifth':
        await this.commands.selectDataInDropdown(
          this.child5AgeSelector,
          childAge
        );
        break;
      case 'sixth':
        await this.commands.selectDataInDropdown(
          this.child6AgeSelector,
          childAge
        );
        break;
      default:
        break;
    }
  }

  async verifyDropDownNumber(number) {
    let allChildAgeSelectorElements = await this.commands.findAllWebElement(
      this.allChildAgeSelectors
    );
    let childAgeSelectorCount = allChildAgeSelectorElements.length;
    console.log(
      `\n\n\n There are ${childAgeSelectorCount} Children-age dropdowns\n\n`
    );
    let verification = false;
    if (childAgeSelectorCount == number) {
      verification = true;
    }
    return verification;
  }

  async isButtonEnabled(element, property) {
    switch (element) {
      case 'minus-button':
        switch (property) {
          case 'enabled':
            let minusButtonIsEnabled = await this.commands.isWebElementEnabled(
              this.decreaseChildrenLocator
            );
            console.log(
              `\n\n\n minusButtonIsEnabled: ${minusButtonIsEnabled}\n\n`
            );
            return minusButtonIsEnabled;
            break;
          case 'disabled':
            let minusButtonIsDisabled = await this.commands.isWebElementEnabled(
              this.decreaseChildrenDisabled
            );
            console.log(
              `\n\n\n minusButtonIsDisabled: ${minusButtonIsDisabled}\n\n`
            );
            return minusButtonIsDisabled;
            break;
        }
        break;

      case 'plus-button':
        switch (property) {
          case 'enabled':
            let plusButtonIsEnabled = await this.commands.isWebElementEnabled(
              this.increaseChildrenLocator
            );
            console.log(
              `\n\n\n plusButtonIsEnabled: ${plusButtonIsEnabled}\n\n`
            );
            return plusButtonIsEnabled;
            break;
          case 'disabled':
            let plusButtonIsDisabled = await this.commands.isWebElementEnabled(
              this.increaseChildrenDisabled
            );
            console.log(
              `\n\n\n plusButtonIsDisabled: ${plusButtonIsDisabled}\n\n`
            );
            return plusButtonIsDisabled;
            break;
        }

        break;
    }
  }

  async verifyAgeDropDownDisplayed() {
    let areChildAgeSelectorsDisplayed =
      await this.commands.isWebElementDisplayed(this.allChildAgeSelectors);
    console.log(
      `\n\n\n areChildAgeSelectorsDisplayed: ${areChildAgeSelectorsDisplayed}\n\n`
    );
    return areChildAgeSelectorsDisplayed;
  }

  // GET THE APP BUTTON
  async scrollBrowserTo(webElement) {
    switch (webElement) {
      case 'Get the app button':
        await this.commands.scrollToWebElement(this.getTheAppButton);
      default:
        break;
    }
  }

  async enterDataInField(data, field) {
    switch (field) {
      case 'Phone number':
        await this.commands.typeInWebElement(this.phoneNumberField, data);
        break;
      default:
        break;
    }
  }

  async verifyIsDisplayed(webElement) {
    switch (webElement) {
      case 'back button':
        return await this.commands.isWebElementDisplayed(
          this.prevCalendarButtonDisabled
        );
        break;
      case 'next button':
        return await this.commands.isWebElementDisplayed(
          this.nextCalendarButtonDisabled
        );
        break;
      case 'Please enter a valid phone number.':
        return await this.commands.isWebElementDisplayed(this.phoneNumberError);

        break;
      default:
        break;
    }
  }
}
module.exports = HomePage;
