const Commands = require('../Commands');

class LoginPage {
  commands = new Commands();

  // 1) LOCATORS

  // GENERAL
  allLinks = '<a>';

  // LOGIN
  loginEmailField = '#email';
  loginPassField = '#pass';
  loginButton = '<button>';
  forgotPasswordLink = '=Forgot password?';
  newAccountButton = 'a[data-testid=open-registration-form-button]';
  createAPageLink = '=Create a Page';

  // FOOTER
  // LANGUAGES
  allFooterLanguages = '//ul[contains(@class , "localeSelectorList")]//li';
  españolLink = '*=Español';
  FrançaisLink = '*=Français (France)';
  中文Link = '*=中文(简体)';
  لعربيةLink = '*=العربية';
  portuguêsLink = '*=Português (Brasil)';
  italianoLink = '*=Italiano';
  한국어Link = '*=한국어';
  deutschLink = '*=Deutsch';
  हिन्दीLink = '*=हिन्दी';
  日本語Link = '*=日本語';
  showMoreLanguagesLink = '//a[@title="Show more languages"]';
  allLanguages =
    '//div[contains(@class , "intl-region-none selected-intl-region1")]//table//tbody//tr//td//ul//li//div//a';

  closeLanguageDialog = '//a[text()="Close"]';

  // FOOTER LINKS
  allFooterLinks = '//div[@id="pageFooterChildren"]//ul//li//a';
  //
  signUpLink = '=Sign Up';
  logInLink = '=Log In';
  messengerLink = '=Messenger';
  facebookLiteLink = '=Facebook Lite';
  watchLink = '=Watch';
  placesLink = '=Places';
  gamesLink = '=Games';
  marketplaceLink = '=Marketplace';
  metaPayLink = '=Meta Pay';
  oculusLink = '=Oculus';
  portalLink = '=Portal';
  InstagramLink = '=Instagram';
  bulletinLink = '=Bulletin';
  fundraisersLink = '=Fundraisers';
  //
  servicesLink = '=Services';
  votingInformationCenterLink = '=Voting Information Center';
  privacyPolicyLink = '=Privacy Policy';
  privacyCenterLink = '=Privacy Center';
  groupsLink = '=Groups';
  aboutLink = '=About';
  createAdLink = '=Create Ad';
  createPageLink = '=Create Page';
  developersLink = '=Developers';
  careersLink = '=Careers';
  cookiesLink = '=Cookies';
  //
  adChoicesLink = '=Ad choices';
  termsLink = '=Terms';
  helpLink = '=Help';
  contactLink = '=Contact Uploading & Non-Users';

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

  async clickLinkName(linkName) {
    await this.commands.clickWebElement(`=${linkName}`);
  }

  async isMultipleWindowsOpen(expWindowsCount) {
    console.log(
      `\n\n this.commands.getHandles().length -> ${
        (await this.commands.getHandles()).length
      }`
    );
    return (await this.commands.getHandles()).length === expWindowsCount;
  }

  async getCurrentWindowsCount() {
    return (await this.commands.getHandles()).length;
  }

  async waitForNewLinkWindow(numWindowBeforeClick) {
    // waitFor until number of windows/handles is equals to (this.totalWindowsBeforeClick+1)
    this.commands.waitForNewWindow(numWindowBeforeClick);
  }
}
module.exports = LoginPage;
