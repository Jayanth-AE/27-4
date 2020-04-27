Feature: Facebook login
@regression
Scenario Outline:: User login with valid credentials
Given User is on login page
When enters valid username "<user name>" and password "<password>"
And clicks on login button
Then verify the title "<title>"

Examples:
|user name        |password     |title|
|jay496j@gmail.com|jay@facebook1|Facebook|
|88845123123      |fac@12315    |Facebook – log in or sign up|
|jkafi@hotmail.com|1564@fd      |Facebook – log in or sign up|
|jay496j@gmail.com|jay@facebook1|Facebook|

@smoke
Scenario: User login with invalid credentials
Given User is on login page
When enters invalid username "user name" and password "pass"
And clicks on login button
Then verify the title "Log in to Facebook  Facebook"

@ft
Scenario: User searches for product
Given User is on home page
When User search for product
|product|quantity|
|Mobile |1       |
|Laptop |1       |
|Shoes  |4       |
|Watches|5       |
|Jackets|3       |
Then Product page should be displayed