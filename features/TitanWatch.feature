Feature: Mens titan watch brand page

@smoke
Scenario Outline: Fetch watch name and price details
  Given Enter into the page
  When Enter into "<category>" category in the mega menu
  And Select "<brand>" brand watch
  And Scroll down and Navigate to <pageNumber>
  Then Print the watch name & price details

Examples:
  | category | brand    | pageNumber |
  | Men      | Titan    | 2          |
  | Men      | Fastrack | 3          |
  | Women    | Topwear  | 3          |
