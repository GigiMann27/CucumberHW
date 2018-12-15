$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/Gurpreet/eclipse-workspace/cucumberProject/src/test/resources/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Vaild Login",
  "description": "",
  "id": "loginfeature;vaild-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter \"gkaur1\" and \"gigi1111\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3753477514,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 3920275811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gkaur1",
      "offset": 9
    },
    {
      "val": "gigi1111",
      "offset": 22
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 5419216787,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 4542779924,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 77187834,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_quit_browser()"
});
formatter.result({
  "duration": 306529549,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Invaild Login",
  "description": "",
  "id": "loginfeature;invaild-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"gkaur\" and \"gigi1111\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get error message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 1753907107,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 2410360476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gkaur",
      "offset": 9
    },
    {
      "val": "gigi1111",
      "offset": 21
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 5280605066,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 5800468714,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_get_error_message()"
});
formatter.result({
  "duration": 46801587,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_quit_browser()"
});
formatter.result({
  "duration": 263346222,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invaild password",
  "description": "",
  "id": "loginfeature;invaild-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"gkaur1\" and \"gigi\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I get error message",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 1668710063,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 4294664344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gkaur1",
      "offset": 9
    },
    {
      "val": "gigi",
      "offset": 22
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 5300101583,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 687897072,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_get_error_message()"
});
formatter.result({
  "duration": 59054669,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_quit_browser()"
});
formatter.result({
  "duration": 259379509,
  "status": "passed"
});
});