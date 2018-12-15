#Author: teamMann
Feature: SignUpWithDT

  Scenario: Sign Up to the FreeCRM
    Given I open browser
    And I navigate to the FreeCrm
    When I am on site I clik on sign up
    And I provide the following details
      | Edition      | FirstName | LastName | Email              |  | ConfirmEmail      | UserName  | Password  | ConfirmPassword | Company | PhoneNumber |
      | Free Edition | Ella      | Swaner   | EllaS@gmail.com    |  | EllaS@gmail.com   | Ella1111  | Ella1111  | Ella1111        | Testing |   703222222 |
      | Free Edition | Jacob     | Kim      | JacobKim@gmail.com |  | acobKim@gmail.com | Jacob2222 | Jacob1111 | Jacob1111       | Testing |   703222222 |

