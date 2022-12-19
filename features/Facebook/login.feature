@login @regression
Feature: Login

  Background:
    Given I am on facebook

  @login-1 @imp @smoke
  Scenario Outline: Verify error for invalid <flowName>
    When I type '<username>' as username
    And I type '<password>' as password
    And I click login button
    Then I verify error is displayed

    Examples:
      | flowName | username            | password          |
      | login    | #$%^&*              | abcd@1234         |
      | password | validUser@gmail.com | incorrectPassword |

  @login-2
  Scenario: Verify error for empty login flow
    And I click login button
    Then I verify error is displayed

  @login-3 @imp
  Scenario: Verify error for empty login flow
    And I verify login "email" is enabled
    And I verify login "password" is enabled
    And I verify login "button" is enabled
