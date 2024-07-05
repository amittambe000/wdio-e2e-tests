Feature: Inventory add
    @demo
    Scenario Outline: Iterating list example
        Given Login to inventory app
        Then Inventory page should list <NumberOfProducts>
        Then Validate all the products price
        Examples:
            | TestID     | NumberOfProducts |
            | INTV_TC001 | 6                |
