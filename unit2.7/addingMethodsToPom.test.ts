import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
    header: By = By.css('.titleText')
    addEmployee: By = By.name('addEmployee')
    newEmployee: By = By.xpath('//li[text()="New Employee"]')
    nameInput: By = By.name('nameEntry')
    phoneInput: By = By.name('phoneEntry')
    titleInput: By = By.name('titleEntry')
    saveBtn: By = By.id('saveBtn')
    //constructor
    constructor(driver: WebDriver) {
        this.driver = driver
    }
    //methods
    async navigate() {
        await this.driver.get(this.url); 
        await this.driver.wait(until.elementLocated(this.header))
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }
    async sendKeys(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy)).clear();
        return this.driver.findElement(elementBy).sendKeys(keys);
    };
    async getText(elementBy) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    }
  }
const emPage = new employeePage(driver)
  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      })
      afterAll(async () => {
          await driver.quit()
      })
      test("adding an employee", async () => {
        await emPage.click(emPage.addEmployee); 
        await emPage.click(emPage.newEmployee); 
        await emPage.sendKeys(emPage.nameInput, 'John Doe'); 
        await emPage.sendKeys(emPage.phoneInput, 8008675309); 
        await emPage.sendKeys(emPage.titleInput, 'CEO of CEOs');
        await emPage.click(emPage.saveBtn)
  })
  })
  /* this is a commment */