Feature: feedback

    Background:
        Given I am on hotels
    @sprint3
    Scenario: Verify blank feedback form produces expected error message
        When I click on Sign in
        When I click on Feedback
        When I verify I am on Feedback tab
        When I click on Submit button
        Then I verify error message "Please fill in the required information highlighted below." is displayed
        Then I verify star boxes section is in a red dotted box is displayed

    @sprint4
    Scenario: Verify filled out feedback form produces expected message
        When I click on Sign in
        When I click on Feedback
        When I verify I am on Feedback tab
        When I select star-rating 1
        When I enter "test" in comments
        When I select "Highly likely" for "How likely are you to return to Hotels.com?"
        When I click "No" for "Prior to this visit, have you ever booked on Hotels.com?"
        When I click "Yes" for "Did you accomplish what you wanted to do on this page?"
        When I click on "Submit" button
        Then I verify "THANK YOU FOR YOUR FEEDBACK." message is displayed