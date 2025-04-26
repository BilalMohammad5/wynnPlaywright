Feature: Example feature

  Scenario: Open example.com
    Given I launch the browser
    When I navigate to "https://example.com"
    Then I should see the page title as "Example Domain"
