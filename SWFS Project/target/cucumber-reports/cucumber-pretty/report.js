$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Scene01_LoginFeatures.feature");
formatter.feature({
  "name": "Successful Login to Sauce Website",
  "description": "  As a customer\n  I want to login to the website\n  So that I can shop",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on the Saucedemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a valid username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.EnterUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a valid password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.Enter_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.Enter_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be redirected to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.GotoHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Scene02_CheckoutFeatures.feature");
formatter.feature({
  "name": "Checkout Process",
  "description": "  As a customer\n  I want to purchase items\n  So that I can complete the checkout process successfully",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding item to the cart and checking out",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on the Sauce website",
  "keyword": "Given "
});
formatter.match({
  "location": "CheckoutSteps.VerifyHomepageLogo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a product to my cart",
  "keyword": "When "
});
formatter.match({
  "location": "CheckoutSteps.AddtoCartProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to the cart page",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.ClickCartIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.ClickCheckoutBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my information",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.EnterInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.ClickContinueBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the finish button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.ClickFinishBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckoutSteps.CheckSuccessMsg()"
});
formatter.result({
  "status": "passed"
});
});