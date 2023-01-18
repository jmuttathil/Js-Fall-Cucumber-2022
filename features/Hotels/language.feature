Feature: language

    Background:
        Given I am on hotels

    @sprint1 @TC-31
    Scenario Outline: Verify user is able to change language
        When on HomePage I switch language to <languageOption>
        Then on HomePage I verify language got changed to <language>

        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |
