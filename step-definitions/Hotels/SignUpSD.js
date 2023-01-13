const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const SignUp = require('../../POM/Hotels/SignUp');

const signUp = new SignUp();

When(/^on SignUp I enter "(.+)" in (.+)$/, async function (data, field) {
  console.log(`\n\n\n\n\n on SignUp I enter ${data} in ${field}`);
  await signUp.enterDataInField(data, field);
  await browser.pause(100);
});

When(/^on SignUp I Enter (.+) in (.+)$/, async function (data, field) {
  console.log(`\n\n\n\n\n on SignUp I Enter ${data} in ${field}`);
  await signUp.enterDataInField(data, field);
  await browser.pause(100);
  await signUp.clickOnWebElement('Hide Password Button');
  await browser.pause(100);
});

When(/^on SignUp I click on (.+)$/, async function (locator) {
  console.log(`\n\n\n\n\n on SignUp I click on ${locator}`);
  await signUp.clickOnWebElement(locator);
});

When(
  /^on SignUp I verify (.+) is (.+)$/,
  async function (webElement, attribute) {
    console.log(`\n\n\n\n\non SignUp I verify ${webElement} is ${attribute}`);

    switch (attribute) {
      case 'displayed':
        const webElementIsDisplayed = await signUp.verifyIsDisplayed(
          webElement
        );
        expect(webElementIsDisplayed, 'webElement is NOT displayed').to.be.true;
        break;
      case 'enabled':
        const webElementIsEnabled = await signUp.verifyIsEnabled(webElement);
        expect(webElementIsEnabled, 'webElement is NOT enabled').to.be.true;
        break;
      case 'NOT enabled':
        const webElementIsNotEnabled = await signUp.verifyIsNotEnabled(
          webElement
        );
        expect(webElementIsNotEnabled, 'webElement should NOT be enabled').to.be
          .true;
        break;
      default:
        break;
    }
  }
);

When(
  /^on SignUp I confirm (.+) is (.+)$/,
  async function (webElement, attribute) {
    console.log(`\n\n\n\n\non SignUp I confirm ${webElement} is ${attribute}`);

    switch (webElement) {
      case 'Password strength bar.':
        const fillLevelAsExpected = await signUp.confirmFillLevel(attribute);
        expect(fillLevelAsExpected, 'Fill Level is NOT as expected').to.be.true;
        break;

      case 'Password strength message':
        const strengthMsgAsExpected = await signUp.confirmStrengthMsg(
          attribute
        );
        await browser.pause(5000);
        expect(
          strengthMsgAsExpected,
          'Password Strength Message is NOT as expected'
        ).to.be.true;
        break;

      default:
        break;
    }
  }
);

When(
  /^on SignUp I verify that (.+) page opens in new tab$/,
  async function (webElement, attribute) {
    console.log(`\n\n\n\n\non SignUp I verify ${webElement} is ${attribute}`);

    switch (attribute) {
      case 'displayed.':
        const webElementIsDisplayed = await signUp.verifyIsDisplayed(
          webElement
        );
        expect(webElementIsDisplayed, 'webElement is NOT displayed').to.be.true;
        break;
      case 'enabled':
        const webElementIsEnabled = await signUp.verifyIsEnabled(webElement);
        expect(webElementIsEnabled, 'webElement is NOT enabled').to.be.true;
        break;
      case 'NOT enabled':
        const webElementIsNotEnabled = await signUp.verifyIsNotEnabled(
          webElement
        );
        expect(webElementIsNotEnabled, 'webElement should NOT be enabled').to.be
          .true;
        break;
      default:
        break;
    }
  }
);
