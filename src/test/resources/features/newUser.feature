#Author: your.email@your.domain.com
Feature: Create an new Account

  Scenario: Successfully create new account
    Given I open browser
    And I navigate to the FreeCrm
    When I am on site I clik on sign up
    And I click on Free Edition
    And I enter first Name "Harper" and last name "Jim" and email "jimharper@gmail.com" and reenter "jimharper@gmail.com"
    And I enter username "harper1" and password "harper1111" and reenter password "harper1111"
    And I click agree terms box
    And I click on submit button
    And I fill in company name "Testing1" and Phone Number "7032222222"
    And I click on continue
    Then I have successfully created new user
    Then I close browser
