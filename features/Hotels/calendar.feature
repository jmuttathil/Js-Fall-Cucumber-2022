Feature: Calendar

  Background:
    Given I am on hotels

@sprint1 @TC-17
  Scenario: Verify past dates and back button are disabled in calendar
    When on HomePage I click on the Calendar
    When on HomePage I navigate calendar to current month
    When on HomePage I verify calendar shows current month
    Then on HomePage I verify past dates are disabled
    Then on HomePage I verify Calendar back button is disabled
