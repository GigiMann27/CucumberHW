package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import testUtils.BaseClass;

public class SignUpSteps extends BaseClass {
	// list a collection of objects
	@Given("^I provide the following details$")
	public void i_provide_the_following_details(DataTable SignTable) throws InterruptedException {
		List<Map<String, String>> maps = SignTable.asMaps(String.class, String.class);

		for (Map<String, String> map : maps) {

			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

			driver.findElement(By.linkText("Sign Up")).click();

			WebElement dropdown = driver.findElement(By.xpath("//select[@class='form-control input-text']"));
			Select obj = new Select(dropdown);
			obj.selectByVisibleText(map.get("Edition"));

			driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(map.get("FirstName"));
			driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(map.get("LastName"));
			driver.findElement(By.xpath("//input[@placeholder='Email']")).sendKeys(map.get("Email"));
			driver.findElement(By.xpath("//input[@placeholder='Confirm Email']")).sendKeys(map.get("ConfirmEmail"));
			driver.findElement(By.xpath("//input[@name='username']")).sendKeys(map.get("UserName"));
			driver.findElement(By.xpath("//input[@name='password']")).sendKeys(map.get("Password"));
			driver.findElement(By.xpath("//input[@name='passwordconfirm']")).sendKeys(map.get("ConfirmPassword"));

			driver.findElement(By.xpath("//input[@value='false']")).click();
			Thread.sleep(500);
			driver.findElement(By.xpath("//div[@class='myButton']")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='company_name']")).sendKeys(map.get("Company"));
			driver.findElement(By.xpath("//input[@name='phone']")).sendKeys(map.get("PhoneNumber"));
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[@name='btnSubmit']")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[@name='finish']")).click();
		}

	}

}
