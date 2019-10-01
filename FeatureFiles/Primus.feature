Feature: Login Search

@primus
Scenario: I am Testing Log n Page

	Given I lauch PrimusBankURL in Google chrome
	When I enter username
	And I enter Password
	And I click on Login button
	Then I validate title
	Then I click on Logout
	And Close the browser