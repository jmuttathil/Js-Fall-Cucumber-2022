const Commands = require('../Commands');
const Dates = require('../../Utils/Dates');

class SearchResults {
  commands = new Commands();
  dates = new Dates();

  // LOCATORS

  sortBySelector = '//select[@id="sort-filter-dropdown-sort"]';

  starRatingSection =
    '//h4[contains(text(),"Star rating")]/following-sibling::div';
  starRating5 = '//label[@aria-label="5 star"]';
  starRating4 = '//label[@aria-label="4 star"]';
  starRating3 = '//label[@aria-label="3 star"]';
  starRating2 = '//label[@aria-label="2 star"]';
  starRating1 = '//label[@aria-label="1 star"]';

  // HOTEL CARD
  allStarRating = '//div[@class="uitk-rating"]//span';
  allPrices = '//div[contains(text() , "The price is $")]';

  // FUNCTIONS
  async clickOnFilter(selection, filter) {
    switch (filter) {
      case 'Star rating':
        await this.commands.scrollToWebElement(this.starRatingSection);
        switch (selection) {
          case '5*':
            await this.commands.clickWebElement(this.starRating5);
            break;
          case '4*':
            await this.commands.clickWebElement(this.starRating4);
            break;
          case '3*':
            await this.commands.clickWebElement(this.starRating3);
            break;
          case '2*':
            await this.commands.clickWebElement(this.starRating2);
            break;
          case '1*':
            await this.commands.clickWebElement(this.starRating1);
            break;
        }
        break;
    }
  }

  async verifyStarRating(starRating) {
    let allStarRatingsElements = await this.commands.findAllWebElement(
      this.allStarRating
    );
    let verification = true;
    for (let elem of allStarRatingsElements) {
      let elemText = await this.commands.getTextOfWebElement(elem);
      let ratingNumber = parseFloat(elemText.substring(0, 2));
      if (ratingNumber < starRating) {
        verification = false;
      }
    }
    return verification;
  }

  async selectSortOption(sortOption) {
    await this.commands.selectDataInDropdown(this.sortBySelector, sortOption);
    await browser.pause(5000);
  }

  async verifyPriceSorting() {
    // allPrices = '//div[contains(text() , "The price is $")]';

    let allPricesElements = await this.commands.findAllWebElement(
      this.allPrices
    );
    let verification = true;
    let previousPrice = 0;
    for (let elem of allPricesElements) {
      let elemText = await this.commands.getTextOfWebElement(elem);
      let currentPrice = parseFloat(elemText.substring(14));

      console.log(`\n\n comparing ${previousPrice} & ${currentPrice} `);
      if (currentPrice < previousPrice) {
        verification = false;
      }
      previousPrice = currentPrice;
    }
    return verification;
  }
}
module.exports = SearchResults;
