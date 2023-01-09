Feature: language

    Background:
        Given I am on hotels
    @sprint6
    Scenario Outline: Verify user is able to change language
        When I change language to <languageOption>
        Then I verify language got changed to <language>

        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |
 