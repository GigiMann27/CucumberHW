#Author: your.email@your.domain.com
Feature: LoginFeature

  Scenario: Vaild Login
    Validating vaild login

    Given I open browser
    And I navigate to the FreeCrm
    When I enter "gkaur1" and "gigi1111"
    And I click login button
    Then I successfully logged in
    And I quit browser

  #Author GIGI
  Scenario Outline: Invaild Login
    
    Validating invalid login with invalid username and invaild password

    Given I open browser
    And I navigate to the FreeCrm
    When I enter "<username>" and "<password>"
    And I click login button
    Then I get error message
    And I quit browser

    Examples: 
      | username | password |
      | gkaur    | gigi1111 |
      | gamie    | gigi1111 |

  Scenario: Invaild Login
    Given I open browser
    And I navigate to the FreeCrm
    When I enter "gkaur1" and "gigi"
    And I click login button
    Then I get error message
    And I quit browser
