$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Primus.feature");
formatter.feature({
  "line": 1,
  "name": "Login Search",
  "description": "",
  "id": "login-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "I am Testing Log n Page",
  "description": "",
  "id": "login-search;i-am-testing-log-n-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@primus"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I lauch PrimusBankURL in Google chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate title",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.i_lauch_PrimusBankURL_in_Google_chrome()"
});
formatter.result({
  "duration": 25767343353,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_enter_username()"
});
formatter.result({
  "duration": 302702444,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_enter_Password()"
});
formatter.result({
  "duration": 222130835,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_Login_button()"
});
formatter.result({
  "duration": 1929686379,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_validate_title()"
});
formatter.result({
  "duration": 12985057,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_Logout()"
});
formatter.result({
  "duration": 313138297,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 2781394048,
  "status": "passed"
});
});