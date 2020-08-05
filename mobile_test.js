var webdriver = require('selenium-webdriver');

var userName = "jackbentley4";
var accessKey = "kmTw8uuZqPHjW6ryBsvb"
var browserstackURL = 'https://' +  userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub';

// Input capabilities
var capabilities = {
    "os_version" : "11",
    "device" : "iPhone 8 Plus",
    "real_mobile" : "true",
    "browserstack.local" : "false",
    "browserstack.user" : "jackbentley4",
    "browserstack.key" : "kmTw8uuZqPHjW6ryBsvb",
    "browserName" : "iPhone"
    }

var driver = new webdriver.Builder().
  usingServer(browserstackURL).
  withCapabilities(capabilities).
  build();
    
driver.get('https://staging-aol.ao-qa.com')
    driver.findElement(webdriver.By.tagName('[data-testid="cookieBanner-accept-btn"]')).click()
        driver.findElement(webdriver.By.className('mobileElement.mobileShadow.mobileSearchButon.icon-search.showMobileOption')).click()
            driver.findElement(webdriver.By.tagName('[data-testid="siteSearch-input"]'))
                .sendKeys('washing machine', webdriver.Key.RETURN).then(function(){
                    driver.findElement(webdriver.By.className('main-title')).then(function(title) {
                        console.log(title.getText())
                            driver.quit()
                    })
                });
