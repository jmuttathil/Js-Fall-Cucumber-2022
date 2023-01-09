Feature: Calendar

  Background:
    Given I am on hotels

  Scenario: Verify calendar works as expected
    When on HomePage I click on Dates
    And on HomePage I select today as Check-in
    And on HomePage I select tomorrow as Check-out

  @sprint1
  Scenario: Verify past dates and back button are disabled in calendar
    When on HomePage I click on Dates
    When on HomePage I navigate calendar to current month
    When on HomePage I verify calendar shows current month
    Then on HomePage I verify past dates are disabled
    Then on HomePage I verify back button is disabled
