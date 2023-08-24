import {By, Builder, Capabilities, WebDriver,until} from 'selenium-webdriver'; 
import { after } from 'node:test';
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome()).build()

test('async and await functionality', async () => {
    await driver.get('https://www.google.com'); 
    await driver.wait(until.elementLocated(By.name('q'))); 
    await driver.findElement(By.name('q')).sendKeys('Puppies\n'); 
    await driver.wait(until.elementLocated(By.id('rcnt'))); 
    let results = await driver.findElement(By.id('rcnt')).getText(); 
    expect(results.toLowerCase()).toContain('puppies')
})
afterAll(async () => {
    await driver.quit()
})