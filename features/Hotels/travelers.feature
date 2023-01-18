Feature: travelers

    Background:
        Given I am on hotels

    @sprint1 @TC-18
    Scenario: verify limit for adults count in a room
        When on HomePage I click on Travelers
        When on HomePage I change Adults to 6
        When on HomePage I change Children to 3
        When on HomePage I select first child age: 4
        When on HomePage I select second child age: Under 1
        When on HomePage I select third child age: 7
        When on HomePage I click on Done on Travelers
        When on HomePage I verify total number of travelers is correct



    @sprint2 @TC-28
    Scenario: verify children traveler UI elements
        When on HomePage I click on Travelers

        When on HomePage I change Children to 2
        Then on HomePage I verify Children-age dropdown are 2
        Then on HomePage I verify Children plus-button is enabled
        Then on HomePage I verify Children minus-button is enabled

        When on HomePage I change Children to 6
        Then on HomePage I verify Children-age dropdown are 6
        Then on HomePage I verify Children plus-button is disabled
        Then on HomePage I verify Children minus-button is enabled

        When on HomePage I change Children to 5
        Then on HomePage I verify Children-age dropdown are 5
        Then on HomePage I verify Children plus-button is enabled
        Then on HomePage I verify Children minus-button is enabled

        When on HomePage I change Children to 0
        Then on HomePage I verify Children-age dropdowns are NOT displayed
        Then on HomePage I verify Children plus-button is enabled
        Then on HomePage I verify Children minus-button is disabled