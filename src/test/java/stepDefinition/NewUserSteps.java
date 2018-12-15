package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testUtils.BaseClass;

public class NewUserSteps extends BaseClass {

	@When("^I am on site I clik on sign up$")
	public void i_am_on_site_I_clik_on_sign_up() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.linkText("Sign Up")).click();
	}

	@When("^I click on Free Edition$")
	public void i_click_on_Free_Edition() throws Throwable {

		WebElement dropdown = driver.findElement(By.xpath("//select[@class='form-control input-text']"));
		Select obj = new Select(dropdown);
		obj.selectByVisibleText("Free Edition");
	}

	@When("^I enter first Name \"([^\"]*)\" and last name \"([^\"]*)\" and email \"([^\"]*)\" and reenter \"([^\"]*)\"$")
	public void i_enter_first_Name_and_last_name_and_email_and_reenter(String fname, String lname, String email,
			String reemail) {
		driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(fname);
		driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(lname);
		driver.findElement(By.xpath("//input[@placeholder='Email']")).sendKeys(email);
		driver.findElement(By.xpath("//input[@placeholder='Confirm Email']")).sendKeys(reemail);
	}

	@When("^I enter username \"([^\"]*)\" and password \"([^\"]*)\" and reenter password \"([^\"]*)\"$")
	public void i_enter_username_and_password_and_reenter_password(String uname, String pwd, String conpwd) {
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(uname);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
		driver.findElement(By.xpath("//input[@name='passwordconfirm']")).sendKeys(conpwd);
	}

	@When("^I click agree terms box$")
	public void i_click_agree_terms_box() throws Throwable {
		driver.findElement(By.xpath("//input[@name='agreeTerms']")).click();
	}

	@When("^I click on submit button$")
	public void i_click_on_submit_button() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//div[@class='myButton']")).click();
	}

	@When("^I fill in company name \"([^\"]*)\" and Phone Number \"([^\"]*)\"$")
	public void i_fill_in_company_name_and_Phone_Number(String comname, String comphone) {
		driver.findElement(By.xpath("//input[@id='company_name']")).sendKeys(comname);
		driver.findElement(By.xpath("//input[@name='phone']")).sendKeys(comphone);
	}

	@When("^I click on continue$")
	public void i_click_on_continue() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button[@name='btnSubmit']")).click();
	}

	@Then("^I have successfully created new user$")
	public void i_have_successfully_created_new_user() throws Throwable {
		boolean confirm = driver.findElement(By.xpath("//span[@class='text_normal']")).isDisplayed();
		Assert.assertTrue(confirm);
	}

	@Then("^I will quit browser$")
	public void i_will_quit_browser() throws Throwable {
		driver.quit();
	}

}
