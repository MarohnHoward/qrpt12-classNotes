import {BasePage} from './basePageReview'
import {By} from 'selenium-webdriver'; 
export class emManager extends BasePage {
    header: By = By.css('.titleText'); 
    addEmployee: By = By.name('addEmployee'); 
    newEmployee: By = By.xpath('//li[text()="New Employee"]'); 
    nameInput: By = By.name('nameEntry'); 
    phoneInput: By = By.name('phoneEntry'); 
    titleInput: By = By.name('titleEntry'); 
    saveBtn: By = By.id('saveBtn'); 
    constructor() {
        super({url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'}); 
    }
}