Feature: Demo

    Demo Feature
    @demo1
    Scenario Outline: Running first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |