package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinitions {
	
	WebDriver driver;
	
	@Given("^I lauch PrimusBankURL in Google chrome$")
	public void i_lauch_PrimusBankURL_in_Google_chrome() throws Throwable {
	    
		System.setProperty("webdriver.gecko.driver", "e://geckodriver.exe");
		
		driver = new FirefoxDriver();
		
		driver.manage().window().maximize();
		
		driver.get("http://primusbank.qedgetech.com/");
				
	}

	@When("^I enter username$")
	public void i_enter_username() throws Throwable {
	    
		driver.findElement(By.xpath("//input[@id='txtuId']")).clear();
		driver.findElement(By.xpath("//input[@id='txtuId']")).sendKeys("Admin");
		
		
	}

	@When("^I enter Password$")
	public void i_enter_Password() throws Throwable {
	    
		driver.findElement(By.xpath("//input[@id='txtPword']")).clear();
		driver.findElement(By.xpath("//input[@id='txtPword']")).sendKeys("Admin");
		
	}

	@When("^I click on Login button$")
	public void i_click_on_Login_button() throws Throwable {
	    
		driver.findElement(By.xpath("//input[@id='login']")).click();
		
	}

	@Then("^I validate title$")
	public void i_validate_title() throws Throwable {
	   
		String title = driver.getTitle();
		
		Assert.assertEquals(title, "Primus BANK");
		
	}

	@Then("^I click on Logout$")
	public void i_click_on_Logout() throws Throwable {

		driver.findElement(By.xpath("//td[3]//a[1]//img[1]")).click();
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	    
		driver.close();
		
	}

}
