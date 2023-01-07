Feature: travelers

    Background:
        Given I am on hotels
    @sprint2
    Scenario: Verify limit for adults count in a room
        When I click on "Travelers"
        When I select "Adults" as 6
        When I select "Children" as 3
        When I select first child age: 4
        When I select second child age: Under 1
        When I select third child age: 7
        When I click on "Done"
        When I verify total number of guests is correct





