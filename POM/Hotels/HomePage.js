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
  decreaseTravelersLocator =
    '//*[@id="traveler_selector_adult_step_input-0-decrease-title"]/../../../span';
  adultTravelersLocator =
    '//button[@data-stid="open-room-picker"]/../../../div';
  increaseTravelersLocator =
    '//*[@id="traveler_selector_adult_step_input-0-increase-title"]/../../../span';

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
      case 'Feedback':
        await this.commands.clickWebElement(this.feedbackLink);
        break;
      case 'Dates':
        await this.commands.clickWebElement(this.datesLocator);
        break;
      case 'Previous Month':
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
        break;
      case 'Next Month':
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
        break;
      case 'Get the app button':
        await this.commands.clickWebElement(this.getTheAppButton);
        await browser.pause(4000);
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
