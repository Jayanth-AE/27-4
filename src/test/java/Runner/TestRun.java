package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/FBLogin.feature", glue= {"StepDefn"},
tags= {"@smoke"},
strict= true,
dryRun= false,
monochrome = true,
plugin= {"pretty","de.monochromata.cucumber.report.PrettyReports:target/cucumber"}
//plugin= {"pretty","html:reports/testreports"}
)
public class TestRun 
{

}