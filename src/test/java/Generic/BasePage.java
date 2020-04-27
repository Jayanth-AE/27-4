package Generic;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class BasePage 
{
	public WebDriver driver;
	public BasePage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public void clickableElement(int time, WebElement element)
	{
		WebDriverWait wait=new WebDriverWait(driver, time);
		try
		{
			wait.until(ExpectedConditions.elementToBeClickable(element));
		}
		catch(Exception e)
		{
			System.out.println("failed to click the element");
			Assert.fail();
		}
	}
	
	public void visibleElement(int time, String xpath)
	{
		WebDriverWait wait=new WebDriverWait(driver, time);
		try
		{
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
		}
		catch(Exception e)
		{
			System.out.println("element not visible"); 
			Assert.fail();
		}
	}
	
	public void presenceOfElement(int time, String xpath)
	{
		WebDriverWait wait=new WebDriverWait(driver, time);
		try
		{
			wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xpath)));
		}
		catch(Exception e)
		{
			System.out.println("element is not present");
			Assert.fail();
		}
	}
	
	public void verifyTitle(int time,String title)
	{
		WebDriverWait wait= new WebDriverWait(driver, time);
		try
		{
		wait.until(ExpectedConditions.titleContains(title));
		}
		catch(Exception e)
		{
			System.out.println("title not displayed");
			Assert.fail();
		}
	}
}