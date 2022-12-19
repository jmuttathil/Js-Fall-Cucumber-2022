@windowHandling
Feature: Window Handling

  Background:
    Given I am on facebook

  @windowHandling
  Scenario Outline: Verify user gets a new page when click <pageName>
    When I click on <pageName> link
    Then I verify opens in a new window with title "<pageTitle>"
    Examples:
      | pageName  | pageTitle                                               |
      | Instagram | Instagram                                               |
      | Oculus    | Meta Quest VR headsets, accessories and equipment       |
      | Meta Pay  | Meta Pay: Simple, Secure, Free Payments                 |
      | Portal    | Meta Portal – Video calling devices with Alexa built-in |
