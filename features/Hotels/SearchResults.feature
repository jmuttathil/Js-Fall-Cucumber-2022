Feature: Search Results

    Background:
        Given I am on hotels

    @sprint2 @TC-23 @SearchResults
    Scenario: Verify filtering and sorting work as expected
        When on HomePage I type 'Manhattan, NY' in destination
        When on HomePage I select 'Manhattan' from auto-suggestions
        When on HomePage I click on the Calendar
        When on HomePage I select February 10 2023 as Check-in date
        When on HomePage I select February 16 2023 as Check-out date
        When on HomePage I click on the Calendar Done button
        When on HomePage I click on the Search button
        When on Search Results I click on 5* under Star rating filter
        When on Search Results I select Price from sort-by dropdown
        Then on Search Results I verify search results are 5* rated
        Then on Search Results I verify search results are sorted by Price
