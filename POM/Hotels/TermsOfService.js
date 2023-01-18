const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class TermsOfService {
  commands = new Commands();
  dates = new Dates();

  // LOCATORS
  lastRevisedDate = '//span[contains(text(),"Last revised")]';

  // FUNCTIONS
  async clickOnWebElement(locator) {
    switch (locator) {
      case 'Sign in':
        await this.commands.clickWebElement(this.signInLink);
        break;
    }
  }

  async verifyNewWindow(targetWindow, originWindow) {
    await browser.pause(1000);
    console.log(`\n\n\n\n\n Switching to Window: ${originWindow}`);
    await this.commands.switchWindowByName(originWindow);
    await browser.pause(1000);
    console.log(`\n\n\n\n\n Switching to Window: ${targetWindow}`);
    await this.commands.switchWindowByName(targetWindow);
  }

  async verifyDateFormat(locator, dateFormat) {
    var displayedDate = await this.commands.getTextOfWebElement(
      this.lastRevisedDate
    );
    displayedDate = displayedDate.slice(14);
    console.log(`\n\n\n\n\n displayedDate = ${displayedDate}`);
    const expectedDate = await this.dates.format_MM$DD$YY(displayedDate);
    console.log(`\n\n\n\n\n expectedDate = ${expectedDate}`);
    if (displayedDate.localeCompare(expectedDate) === 0) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = TermsOfService;
