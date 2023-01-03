const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class HomePage {
  commands = new Commands();
  dates = new Dates();

  // LOCATORS
  logInLocator = '//div[@data-tag="navbar"]//a[text()="Log In"]';
  continueWithGoogle = '//div[text()="Continue with Google"]';

  // FUNCTIONS
  async clickLogIn() {
    await this.commands.clickWebElement(this.logInLocator);
  }

  async clickContinueWithGoogle() {
    await this.commands.clickWebElement(this.continueWithGoogle);
  }
}
module.exports = HomePage;
