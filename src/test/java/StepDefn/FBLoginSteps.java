package StepDefn;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import Generic.Browser_Factory;
import Generic.File_Manager;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pom.Facebook_login_page;

public class FBLoginSteps 
{
	WebDriver driver;
	Browser_Factory bf=new Browser_Factory();
	Facebook_login_page lp;
	@Before(order = 0)		//global hooks
	public void setup()
	{
		driver.manage().deleteAllCookies();
		driver=bf.open_Browser("chrome");
		driver.get(new File_Manager().getPre_url());
		lp=new Facebook_login_page(driver);
	}
	
	@After(order = 0)		//global hooks
	public void teardown(Scenario sc)
	{
		if(sc.isFailed())		//class that is responsible to get the status of scenarios.
		{
			TakesScreenshot ts=(TakesScreenshot) driver;
			byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
			sc.embed(screenshot, "Image/PNG", sc.getName());	//embed is a method used to attach screenshot
		}
		driver.quit();
	}
	
	@Before("@regression")		//conditional hooks
	public void mobileSetup()
	{
		System.out.println("execute in mobile environment");
	}
	
	@After("@regression")		//conditional hooks
	public void tearDown()
	{
		System.out.println("close the mobile environment");
	}
	
	//@regression
	@Given("User is on login page")
	public void user_is_on_login_page() 
	{
		System.out.println("user is on login page");
	}

	@When("enters valid username {string} and password {string}")
	public void enters_valid_username_and_password(String email, String password) 
	{
		lp.enterEmail(email);
		lp.enterPassword(password);
	}

	@When("clicks on login button")
	public void clicks_on_login_button() 
	{
		lp.clickOnLogin();
	}

	@Then("verify the title {string}")
	public void verify_the_title(String titl) throws InterruptedException 
	{
		lp.verifyTitle(10, "Facebook");
		Assert.assertEquals(titl, driver.getTitle());
		driver.close();
	}
	
	//@smoke
	@When("enters invalid username {string} and password {string}")
	public void enters_invalid_username_and_password(String email, String password) 
	{
		lp.enterEmail(email);
		lp.enterPassword(password);
	}

	//@ft
	@Given("User is on home page")
	public void user_is_on_home_page() 
	{
		System.out.println("user is on home page");
	}

	@When("User search for product")
	public void user_search_for_product(io.cucumber.datatable.DataTable dataTable) 
	{
		List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);
		String pname = data.get(0).get("product");
		String qty = data.get(0).get("quantity");
		System.out.println(pname+"-"+qty);
	}

	@Then("Product page should be displayed")
	public void product_page_should_be_displayed() 
	{
		System.out.println("product page is displayed");
	}
}