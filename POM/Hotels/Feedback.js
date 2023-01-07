const Commands = require('../Commands');

class Feedback {
  commands = new Commands();

  // LOCATORS
  FeedbackTabName = 'DirectWord';

  // HOMEPAGE HEADER
  // SIGN IN MENU
  signInLink = '//button[contains(text(),"Sign in")]';
  feedbackLink =
    '//button[contains(text(),"Sign in")]/following-sibling::div//div//a[contains(text(),"Feedback")]';

  // OVERALL SATISFACTION WITH PAGE
  oneStarButton = '//label[@for="page-rating-1"]';
  twoStarButton = '//label[@for="page-rating-2"]';
  threeStarButton = '//label[@for="page-rating-3"]';
  fourStarButton = '//label[@for="page-rating-4"]';
  fiveStarButton = '//label[@for="page-rating-5"]';
  // ERROR: RED DOTTED BORDER
  requiredBoxPageRating =
    '//fieldset[@style="padding: 5px; border: 2px dotted rgb(204, 0, 0);"]';

  // PAGE COMMENTS
  pageCommentsField = '//textarea[@id="verbatim"]';

  // HOW LIKELY ARE YOU TO RETURN TO HOTELS.COM?
  willYouReturnSelector = '//select[@id="will-you-return"]';

  // HAVE YOU EVER BOOKED ON HOTELS.COM?
  bookedBeforeYesButton = '//label[@for="booked-here-before-yes"]';
  bookedBeforeNoButton = '//label[@for="booked-here-before-no"]';

  // DID YOU ACCOMPLISH WHAT YOU WANTED TO DO ON THIS PAGE?
  wereYouSuccessfulYesButton = '//label[@for="were-you-successful-yes"]';
  wereYouSuccessfulNoButton = '//label[@for="were-you-successful-no"]';

  // PLEASE ENTER YOUR EMAIL ADDRESS (OPTIONAL)
  emailAddressField = '//input[@id="email_address"]';

  submitButton = '//button[@id="submit-button"]';

  // ERROR: PLEASE FILL IN THE REQUIRED INFORMATION HIGHLIGHTED BELOW.
  requiredInfoErrorMessage = '//div[@id="required"]';

  // ERROR: THANK YOU FOR YOUR FEEDBACK.
  thankYouMessage = '//div[@id="thank-you"]';

  // FUNCTIONS
  async clickOnWebElement(locator) {
    switch (locator) {
      case 'Sign in':
        await this.commands.clickWebElement(this.signInLink);
        break;
      case 'Feedback':
        await this.commands.clickWebElement(this.feedbackLink);
        break;
      case 'Submit button':
        await this.commands.clickWebElement(this.submitButton);
        await browser.pause(4000);
        break;
      default:
        break;
    }
  }

  async changeActiveWindow(tabName) {
    await browser.pause(2000);
    let allHandles = [];
    allHandles = await this.commands.getHandles();
    let targetHandle = allHandles[allHandles.length - 1];
    await this.commands.switchToWindowHandle(targetHandle);
  }

  async verifyErrorIsDisplayed(errorMsg) {
    switch (errorMsg) {
      case 'Please fill in the required information highlighted below.':
        return await $(this.requiredInfoErrorMessage).isDisplayed();
        break;
      default:
        break;
    }
  }

  async verifyIsDisplayed(webElement) {
    switch (webElement) {
      case 'star boxes section is in a red dotted box':
        return await $(this.requiredBoxPageRating).isDisplayed();
        break;
      default:
        break;
    }
  }

  async clickOnStarRating(starRating) {
    switch (starRating) {
      case '1':
        await this.commands.clickWebElement(this.oneStarButton);
        break;
      case '2':
        await this.commands.clickWebElement(this.twoStarButton);
        break;
      case '3':
        await this.commands.clickWebElement(this.threeStarButton);
        break;
      case '4':
        await this.commands.clickWebElement(this.fourStarButton);
        break;
      case '5':
        await this.commands.clickWebElement(this.fiveStarButton);
        break;
      default:
        break;
    }
  }

  async enterDataInField(data, field) {
    switch (field) {
      case 'comments':
        await this.commands.typeInWebElement(this.pageCommentsField, data);
        break;
      default:
        break;
    }
  }

  async selectAnswer(answer, question) {
    switch (question) {
      case 'How likely are you to return to Hotels.com?':
        await this.commands.selectDataInDropdown(
          this.willYouReturnSelector,
          answer
        );
        break;
      default:
        break;
    }
  }

  async clickAnswer(answer, question) {
    switch (question) {
      case 'Prior to this visit, have you ever booked on Hotels.com?':
        switch (answer) {
          case 'Yes':
            await this.commands.clickWebElement(this.bookedBeforeYesButton);
            break;
          case 'No':
            await this.commands.clickWebElement(this.bookedBeforeNoButton);
            break;
          default:
            break;
        }
        break;
      case 'Did you accomplish what you wanted to do on this page?':
        switch (answer) {
          case 'Yes':
            await this.commands.clickWebElement(
              this.wereYouSuccessfulYesButton
            );
            break;
          case 'No':
            await this.commands.clickWebElement(this.wereYouSuccessfulNoButton);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
}
module.exports = Feedback;
