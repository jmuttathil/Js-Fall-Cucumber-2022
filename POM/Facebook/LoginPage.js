const Commands = require('../Commands');

class LoginPage {
  commands = new Commands();

  // 1) LOCATORS
  loginEmailField = '#email';
  loginPassField = '#pass';
  loginButton = '<button>';
  newAccountButton = 'a[data-testid=open-registration-form-button]';
  messengerLink = '=Messenger';

  // 2) FUNCTIONS
  async enterLoginEmail(userEmail) {
    await this.commands.typeInWebElement(this.loginEmailField, userEmail);
  }

  async enterLoginPassword(userPwd) {
    await this.commands.typeInWebElement(this.loginPassField, userPwd);
  }

  async clickLoginInButton() {
    await this.commands.clickWebElement(this.loginButton);
  }

  async clickNewAccountButton() {
    await this.commands.clickWebElement(this.newAccountButton);
  }

  async clickMessengerLink() {
    await this.commands.clickWebElement(this.messengerLink);
  }

  async isLoginFieldEnabled(fieldName) {
    let isFieldEnabled = false;
    switch (fieldName.toLowerCase()) {
      case 'email':
        isFieldEnabled = await this.commands.isWebElementEnabled(
          this.loginEmailField
        );
        break;
      case 'password':
        isFieldEnabled = await this.commands.isWebElementEnabled(
          this.loginPassField
        );
        break;
      case 'button':
        isFieldEnabled = await this.commands.isWebElementEnabled(
          this.loginButton
        );
        break;
      default:
        break;
    }
    return isFieldEnabled;
  }

  async isLoginEmailEnabled() {
    return await this.commands.isWebElementEnabled(this.loginEmailField);
  }

  async isLoginPasswordEnabled() {
    return await this.commands.isWebElementEnabled(this.loginPassField);
  }

  async isLoginButtonEnabled() {
    return await this.commands.isWebElementEnabled(this.loginButton);
  }
}
module.exports = LoginPage;
