#Author: your.email@your.domain.com
Feature: SignUpWithDT

  Scenario: Sign Up to the FreeCRM
    Given I open browser
    And I navigate to the FreeCrm
    When I am on site I clik on sign up
    And I provide the following details
      | Edition      | FirstName | LastName | Email             | ConfirmEmail      | UserName    | Password    | ConfirmPassword | Company  | PhoneNumber |
      | Free Edition | Jane      | Lee      | Janel@gmail.com   | Janel@gmail.com   | jane3333    | jane3333    | jane3333        | Testing2 |   703222222 |
      | Free Edition | Tom       | Evan     | TomEvan@gmail.com | TomEvan@gmail.com | tomevan2222 | tomevan2222 | tomevan2222     | Testing3 |   703222222 |
    Then I close browser
