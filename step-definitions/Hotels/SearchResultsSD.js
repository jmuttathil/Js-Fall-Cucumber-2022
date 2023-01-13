const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const SearchResults = require('../../POM/Hotels/SearchResults');
const Dates = require('../../Utils/Dates');

const searchResults = new SearchResults();
dates = new Dates();

When(
  /^on Search Results I click on (.+) under (.+) filter$/,
  async function (selection, filter) {
    console.log(
      `\n\n\n\n\n on Search Results I click on  ${selection} under ${filter} filter`
    );
    await searchResults.clickOnFilter(selection, filter);
    await browser.pause(5000);
  }
);

When(
  /^on Search Results I select (.+) from sort-by dropdown$/,
  async function (sortOption) {
    console.log(
      `\n\n\n\n\n on Search Results I select ${sortOption} from sort-by dropdown`
    );
    await searchResults.selectSortOption(sortOption);
  }
);

When(
  /^on Search Results I verify search results are (.+)$/,
  async function (property) {
    console.log(
      `\n\n\n\n\n on Search Results I verify search results are ${property} `
    );

    switch (property) {
      case '5* rated':
        const starRating = property.substring(0, 1);
        console.log(`\n\n\n\n\n starRating = ${starRating} `);
        let verifyRating = await searchResults.verifyStarRating(starRating);

        expect(verifyRating, 'Search results are NOT all 5*').to.be.true;
        break;
      case 'sorted by Price':
        let verifySorting = await searchResults.verifyPriceSorting();

        expect(verifySorting, 'Search results are NOT sorted as expected').to.be
          .true;
        break;

        break;
      default:
        break;
    }
  }
);
