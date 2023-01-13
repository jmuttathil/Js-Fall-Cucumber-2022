Feature: signUp

    Background:
        Given I am on hotels

    @sprint2 @TC-20-1 @TACLink
    Scenario: Verify window behavior and date format
        When on HomePage I click on Sign in
        And on HomePage I click on SignUp link
        When on SignUp I click on Terms and Conditions link
        Then on ToS Page I verify the page is on a new tab
        Then on ToS Page I verify Last revised date format is as expected

    @sprint2 @TC-20-2 @PrivacyLink
    Scenario: Verify window behavior and date format
        When on HomePage I click on Sign in
        And on HomePage I click on SignUp link
        When on SignUp I click on Privacy Statement link
        Then on Privacy Page I verify the page is on a new tab
        Then on Privacy Page I verify Last Updated  date format is as expected

    @sprint2 @TC-22
    Scenario: Verify Verification message for invalid sign in credentials
        When on HomePage I click on Sign in
        And on HomePage I click on SignUp link
        When on SignUp I enter "#@gmail.com" in email address
        Then on SignUp I verify Enter a valid email is displayed
        When on SignUp I enter "!@" in first name
        Then on SignUp I verify First name cannot contain special characters is displayed
        When on SignUp I enter "%^&" in last name
        Then on SignUp I verify Last name cannot contain special characters is displayed
        When on SignUp I enter "invalidPassword" in password
        Then on SignUp I verify Keep me signed in is displayed
        Then on SignUp I verify Keep me signed in is enabled
        Then on SignUp I verify Continue button is displayed
        Then on SignUp I verify Continue button is NOT enabled


    @sprint2 @TC-32 @passwordStrengthBar
    Scenario Outline: Verify password strength bar and messages
        When on HomePage I click on Sign in
        And on HomePage I click on SignUp link
        When on SignUp I enter "user@test.com" in email address
        And on SignUp I enter "fUser" in first name
        And on SignUp I enter "lUser" in last name
        And on SignUp I Enter <password> in password
        Then on SignUp I confirm Password strength bar is <fillLevel> filled
        And  on SignUp I confirm Password strength message is <strengthMsg>

    Examples:
            | password     | fillLevel   | strengthMsg |
            | abcd         | not         | Weak        |
            | abcd@123     | half        | Weak        |
            | abcd@12324   | almost      | Strong      |
            | abcd@12@pl@2 | completely  | Very Strong |


    @sprint2 @TC-33 @passwordStrengthMessages
    Scenario Outline: Verify weak password messages
        When on HomePage I click on Sign in
        And on HomePage I click on SignUp link
        When on SignUp I enter "user@test.com" in email address
        And on SignUp I enter "fUser" in first name
        And on SignUp I enter "lUser" in last name
        And on SignUp I Enter <password> in password

        Then on SignUp I verify <msg1> message is displayed
        And  on SignUp I verify <msg2> message is displayed


    Examples:
            | password | msg1                                | msg2                             |
            | abcd     | Includes 8-64 characters            | Combines letters and numbers     |
            | abcd@123 | Add more words that are less common | Avoid common character sequences |