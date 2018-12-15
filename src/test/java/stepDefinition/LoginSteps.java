package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testUtils.BaseClass;

public class LoginSteps extends BaseClass{


	@Given("^I open browser$")
	public void i_open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver");

		driver = new ChromeDriver();

		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().window().fullscreen();

	}

	@Given("^I navigate to the FreeCrm$")
	public void i_navigate_to_the_FreeCrm() {
		driver.get("https://www.freecrm.com/index.html");
	}

	
	@When("^I click login button$")
	public void i_click_login_button() throws Throwable {
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@Then("^I successfully logged in$")
	public void i_successfully_logged_in() throws Throwable {
		driver.switchTo().frame(1);
		boolean home = driver.findElement(By.xpath("//a[@href='https://www.freecrm.com/system/index.cfm?action=home']"))
				.isDisplayed();
		Assert.assertTrue(home);
	}

	@Then("^I quit browser$")
	public void i_quit_browser() throws Throwable {
		driver.quit();
	}

	@When("^I enter invalid username and password$")
	public void i_enter_invalid_username_and_password() throws Throwable {
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("gkaur");
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("gigi1111");
		Thread.sleep(5000);
	}

	@When("^I enter username and invaild password$")
	public void i_enter_username_and_invaild_password() throws Throwable {
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("gkaur1");
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("gigi1");
		Thread.sleep(5000);
	}

	@Then("^I get error message$")
	public void i_get_error_message() throws Throwable {
		boolean login = driver.findElement(By.xpath("//input[@value='Login']")).isDisplayed();
		Assert.assertTrue(login);
	}

}
