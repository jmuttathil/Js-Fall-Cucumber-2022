const Commands = require('../Commands');

class LoginErrorPage {
  commands = new Commands();

  // 1) LOCATORS
  loginErrorMsg = '//a[contains(text() , "Find your account")]';

  // 2) FUNCTIONS
  async isLoginErrorDisplayed() {
    return await this.commands.isWebElementDisplayed(this.loginErrorMsg);
  }
}
module.exports = LoginErrorPage;
