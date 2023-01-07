Feature: getAppButton

    Background:
        Given I am on hotels
    @sprint5
    Scenario: Verify invalid phone number produces error message
        When I scroll to "Get the app" button
        When I enter "0000000000" in Phone number
        When I click on "Get the app" button
        Then I verify "Please enter a valid phone number." error is displayed