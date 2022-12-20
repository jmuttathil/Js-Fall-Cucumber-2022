Feature: Code Test
    # Score - 40

    Background:
        Given I am on hotels

    @codeTest @codeTest-1
    Scenario Outline: Verify user is able to change language
        When I change language to <languageOption>
        Then I verify language got changed to <language>

        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |

    @codeTest @codeTest-2
    Scenario: Verify limit for adults count in a room
        When I select number of adults in Room 1 as 1
        Then I verify the minus button for adults is disabled
        Then I verify the plus button for adults is enabled
        When I select number of adults in Room 1 as 14
        Then I verify the plus button for adults is disabled
        Then I verify the minus button for adults is enabled






