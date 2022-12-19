const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class HomePage {
  commands = new Commands();
  dates = new Dates();

  // LOCATORS
  // DESTINATION
  goingToLocator = '//button[@aria-label="Going to"]';
  goingToDestinationLocator =
    '//button[starts-with(@aria-label , "Going to ")]';

  goingToTypeLocator = '#destination_form_field';
  autoSuggestionsLocator = '//div[@class="truncate"]//strong';

  // CALENDAR
  calendarOpenLocator = '#date_form_field-btn';
  allDatesLocator_starts = '//button[starts-with(@aria-label, "';
  allDatesLocator_ends = '")]';

  allDisabledDatesLocator = '//button[contains(@class, "is-disabled")]';

  calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
  nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
  prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
  leftSideCalendarHeaderLocator =
    '(//div[@class="uitk-date-picker-month"])[1]//h2';

  // FUNCTIONS
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
  async openCalendar() {
    await this.commands.clickWebElement(this.calendarOpenLocator);
  }

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
}
module.exports = HomePage;