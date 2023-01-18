Feature: signin

    Background:
        Given I am on hotels

    @sprint2 @TC-21
    Scenario: Verify Verification message for invalid sign in credentials
        When on HomePage I click on Sign in
        When on HomePage I click on Sign in button
        When on SignIn I enter "invalid@gmail.com" in email address
        When on SignIn I enter "invalidPassword" in password
        When on SignIn I click on Sign in button
        Then on SignIn I verify "Email and password don't match. Please try again." message is displayed