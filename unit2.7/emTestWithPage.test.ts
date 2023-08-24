import {Builder, Capabilities, WebDriver} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome()).build();
//page object import
import {employeePage} from './employeeMangerPage'; 
const ep = new employeePage(driver)
//test set up 
describe('Practicing Page Objects', () => {
    beforeEach(async () => {
        await ep.navigate()
    }); 
    afterAll(async() => {
        await ep.driver.quit()
    } )
    test('adding an employee with a seperate POM', async () => {
        await ep.click(ep.addEmployee); 
        await ep.click(ep.newEmployee); 
        await ep.sendKeys(ep.nameInput, 'Cal Kestis'); 
        await ep.sendKeys(ep.phoneInput, 8008675309); 
        await ep.sendKeys(ep.titleInput, 'Restorer of the Jedi Orderish'); 
        await ep.click(ep.saveBtn); 
    })
}) 