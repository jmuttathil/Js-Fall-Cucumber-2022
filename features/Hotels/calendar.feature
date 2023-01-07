Feature: Calendar

  Background:
    Given I am on hotels

  Scenario: Verify calendar works as expected
    When I click on the calendar
    And I select today as Check-in
    And I select tomorrow as Check-out
@sprint1
  Scenario: Verify past dates are disabled in calendar
    When I click on "Dates"
    When I navigate to the current month
    Then I verify past dates are disabled
    Then I verify back button on current month is disabled
