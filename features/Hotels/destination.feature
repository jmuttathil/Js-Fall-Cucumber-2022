Feature: Destination

  Background: 
    Given I am on hotels

  Scenario: Verify destination auto-suggestion works as expected
    When I type 'nEw' in destination
    When I select Manhattan from auto-suggestions
    Then I verify Manhattan is displayed as destination

  Scenario: Verify destination auto-suggestion works as expected
    When I type '90210' in destination
    When I select 90210, Beverly Hills from auto-suggestions
    Then I verify 90210, Beverly Hills is displayed as destination
