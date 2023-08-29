import * as Shows from ''
import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  Shows.forEach((shows) => {
      test(`searching google for ${shows}`, async () => {
        await driver.get('https://www.google.com'); 
        await driver.wait(until.elementLocated(By.name('q'))); 
        await driver.findElement(By.name('q')).sendKeys(`${shows}\n`); 
        await driver.quit()
      })
  })