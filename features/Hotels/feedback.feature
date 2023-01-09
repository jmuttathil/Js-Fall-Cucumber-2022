Feature: feedback

    Background:
        Given I am on hotels

    @sprint3
    Scenario: Verify blank feedback form produces expected error message
        When on HomePage I click on Sign in
        When on HomePage I click on Feedback
        When on Feedback I verify I am on Feedback tab
        When on Feedback I click on Submit button
        Then on Feedback I verify PLEASE FILL IN THE REQUIRED INFORMATION HIGHLIGHTED BELOW message is displayed
        Then on Feedback I verify STAR RATING SECTION IN A RED DOTTED BOX is displayed

    @sprint4
    Scenario: Verify filled out feedback form produces expected message
        When on HomePage I click on Sign in
        When on HomePage I click on Feedback
        When on Feedback I verify I am on Feedback tab
        When on Feedback I select star-rating 1
        When on Feedback I enter "test" in comments
        When on Feedback I select "Highly likely" for "How likely are you to return to Hotels.com?"
        When on Feedback I click "No" for "Prior to this visit, have you ever booked on Hotels.com?"
        When on Feedback I click "Yes" for "Did you accomplish what you wanted to do on this page?"
        When on Feedback I click on Submit button
        Then on Feedback I verify THANK YOU FOR YOUR FEEDBACK message is displayed