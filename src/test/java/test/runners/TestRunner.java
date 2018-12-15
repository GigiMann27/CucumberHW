package test.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features"}
, glue = { "src/test/java/stepDefinition"}
, plugin = { "html:test-output" }
, dryRun = false
, monochrome = true)
// ,dryRun=true all steps are defined
// ,strict=true)

public class TestRunner {


}

