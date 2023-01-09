Feature: travelers

    Background:
        Given I am on hotels

    @sprint1 @TC-18
    Scenario: Verify limit for adults count in a room
        When on HomePage I click on Travelers
        
        When on HomePage I change Adults to 6
        When on HomePage I change Children to 3

        When on HomePage I select first child age: 4
        When on HomePage I select second child age: Under 1
        When on HomePage I select third child age: 7

        When on HomePage I click on Done on Travelers
        When on HomePage I verify total number of travelers is correct



