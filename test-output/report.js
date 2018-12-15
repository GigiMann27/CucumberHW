$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateNewUser.feature");
formatter.feature({
  "line": 1,
  "name": "Create an new Account",
  "description": "",
  "id": "create-an-new-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successfully create new account",
  "description": "",
  "id": "create-an-new-account;successfully-create-new-account",
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
  "name": "I am on site I clik on sign up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Free Edition",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first Name \"Harper\" and last name \"Jim\" and email \"jimharper@gmail.com\" and reenter \"jimharper@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter username \"harper1\" and password \"harper1111\" and reenter password \"harper1111\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click agree terms box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I fill in company name \"Testing1\" and Phone Number \"7032222222\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I have successfully created new user",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I will quit browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#gmann0827@gmail.com"
    }
  ],
  "line": 2,
  "name": "LoginFeature",
  "description": "",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Vaild Login",
  "description": "Validating vaild login",
  "id": "loginfeature;vaild-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"gkaur1\" and \"gigi1111\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Invaild Login",
  "description": "\nValidating invalid login with invalid username and invaild password",
  "id": "loginfeature;invaild-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I get error message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "loginfeature;invaild-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "loginfeature;invaild-login;;1"
    },
    {
      "cells": [
        "gkaur",
        "gigi1111"
      ],
      "line": 27,
      "id": "loginfeature;invaild-login;;2"
    },
    {
      "cells": [
        "gamie",
        "gigi1111"
      ],
      "line": 28,
      "id": "loginfeature;invaild-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Invaild Login",
  "description": "\nValidating invalid login with invalid username and invaild password",
  "id": "loginfeature;invaild-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"gkaur\" and \"gigi1111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I get error message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 28,
  "name": "Invaild Login",
  "description": "\nValidating invalid login with invalid username and invaild password",
  "id": "loginfeature;invaild-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"gamie\" and \"gigi1111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I get error message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 30,
  "name": "Invaild Login",
  "description": "",
  "id": "loginfeature;invaild-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter \"gkaur1\" and \"gigi\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I get error message",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("SignUpwithDT.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: teamMann"
    }
  ],
  "line": 2,
  "name": "SignUpWithDT",
  "description": "",
  "id": "signupwithdt",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Sign Up to the FreeCRM",
  "description": "",
  "id": "signupwithdt;sign-up-to-the-freecrm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I provide the following details",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "UserName",
        "Password",
        "ConfirmPassword",
        "Company",
        "PhoneNumber"
      ],
      "line": 8
    },
    {
      "cells": [
        "Free Edition",
        "Nancy",
        "Su",
        "nacnysu@gmail.com",
        "nancys",
        "nancy1111",
        "nancy1111",
        "Testing",
        "703222222"
      ],
      "line": 9
    },
    {
      "cells": [
        "Free Edition",
        "Kelly",
        "Wu",
        "Kellywu@gmail.com",
        "kellywu",
        "nancy1111",
        "nancy1111",
        "Testing",
        "703222222"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I quit browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});