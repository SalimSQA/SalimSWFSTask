package Pages;

import PageObjects.LoginPageObjects;
import org.openqa.selenium.support.ui.ExpectedConditions;
import Utils.ChromeSetup;
import Utils.Wait;


import java.io.IOException;


public class LoginPage extends ChromeSetup {

    LoginPageObjects loginPageObjects = new LoginPageObjects(driver);

    // Login Page Methods Repo


    public void openURL() throws IOException
    {
        driver.get("https://www.saucedemo.com/");
    }

    public void enterUserName() throws IOException, InterruptedException
    {

        Wait.WaitForWebElement().until(ExpectedConditions.visibilityOf(loginPageObjects.UserName)).sendKeys("standard_user");

    }

    public void enterPassword() throws IOException
    {
        Wait.WaitForWebElement().until(ExpectedConditions.visibilityOf(loginPageObjects.Password)).sendKeys("secret_sauce");

    }

    public void clickLoginButton()
    {
        Wait.WaitForWebElement().until(ExpectedConditions.visibilityOf(loginPageObjects.LoginButton)).click();
    }


    public String getHomePageUrl()
    {
        //System.out.println(driver.getCurrentUrl());
        return driver.getCurrentUrl();
    }


}