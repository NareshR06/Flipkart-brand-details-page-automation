Feature: Mens titan watch brand page

Scenario Outline: Fetch watch name and price details
  Given Enter into the page
  When Enter into "<category>" category in the mega menu
  And Select "<brand>" brand watch
  And Scroll down and Navigate to <pageNumber>
  Then Print the watch name & price details

Examples:
  | category | brand    | pageNumber |
  | Men      | Titan    | 2          |
  | Men      | Fastrack | 4          |
  | Women    | Topwear  | 5          |
