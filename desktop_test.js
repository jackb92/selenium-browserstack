var webdriver = require('selenium-webdriver');

var userName = "";
var accessKey = ""
var browserstackURL = 'https://' +  userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub';

// Input capabilities
var capabilities = {

}

var driver = new webdriver.Builder().
  usingServer(browserstackURL).
  withCapabilities(capabilities).
  build();

driver.get('https://staging-aol.ao-qa.com');
    driver.findElement(webdriver.By.id('siteSearch-input'))
        .sendKeys('washing machine', webdriver.Key.RETURN).then(function(){
            driver.findElement(webdriver.By.className('main-title')).then(function(title) {
                console.log("Jack")
                    driver.quit()
            })
        });


//test



    

