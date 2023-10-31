Test functionality: Feature
Test case: scenario
test steps are written using keywords Given, When, Then

Feature: Signup

    Scenario: Verify user gets error on invalid login credidentials
    Given I am on facebook homepage
    And I click on create new account button
    When I enter John as Firstname
    And I enter Kian as Lastname
    And I enter john@test.com as email
    And I enter abcd1234 as password
    And I select Jan as birthmonth
    And I select 20 as birthdate
    And I select 2001 as birthyear
    And I select Male as gender
    And I click signup button
    Then I verify error is displayed