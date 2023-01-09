Feature: getAppButton

    Background:
        Given I am on hotels

    @sprint1 @TC-30
    Scenario: Verify invalid phone number produces error message
        When  on HomePage I scroll to Get the app button
        When  on HomePage I enter "0000000000" in Phone number
        When  on HomePage I click on Get the app button
        Then  on HomePage I verify "Please enter a valid phone number." message is displayed