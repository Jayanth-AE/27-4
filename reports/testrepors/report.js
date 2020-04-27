$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FBLogin.feature");
formatter.feature({
  "name": "Facebook login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": ": User login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "enters valid username \"\u003cuser name\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the title \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user name",
        "password",
        "title"
      ]
    },
    {
      "cells": [
        "jay496j@gmail.com",
        "jay@facebook1",
        "Facebook"
      ]
    },
    {
      "cells": [
        "88845123123",
        "fac@12315",
        "Facebook – log in or sign up"
      ]
    },
    {
      "cells": [
        "jkafi@hotmail.com",
        "1564@fd",
        "Facebook – log in or sign up"
      ]
    },
    {
      "cells": [
        "jay496j@gmail.com",
        "jay@facebook1",
        "Facebook"
      ]
    }
  ]
});
formatter.scenario({
  "name": ": User login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters valid username \"jay496j@gmail.com\" and password \"jay@facebook1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the title \"Facebook\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.verify_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": User login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters valid username \"88845123123\" and password \"fac@12315\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the title \"Facebook – log in or sign up\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.verify_the_title(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Facebook – log in or sign up]\u003e but was:\u003c[Log in to Facebook | Facebook]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefn.FBLoginSteps.verify_the_title(FBLoginSteps.java:47)\r\n\tat ✽.verify the title \"Facebook – log in or sign up\"(file:///F:/Manufacturing/Vigorous_Management/src/test/resources/FBLogin.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": ": User login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters valid username \"jkafi@hotmail.com\" and password \"1564@fd\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the title \"Facebook – log in or sign up\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.verify_the_title(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Facebook – log in or sign up]\u003e but was:\u003c[Log in to Facebook | Facebook]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefn.FBLoginSteps.verify_the_title(FBLoginSteps.java:47)\r\n\tat ✽.verify the title \"Facebook – log in or sign up\"(file:///F:/Manufacturing/Vigorous_Management/src/test/resources/FBLogin.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": ": User login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters valid username \"jay496j@gmail.com\" and password \"jay@facebook1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the title \"Facebook\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.verify_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid username \"user name\" and password \"pass\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.enters_invalid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the title \"Log in to Facebook | Facebook\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.verify_the_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User searches for product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ft"
    }
  ]
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search for product",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.user_search_for_product(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.FBLoginSteps.product_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
});