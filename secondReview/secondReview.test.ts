import {emManager} from './reviewPage'; 
const page = new emManager(); 

class Inturns {
    name: string; 
    phone: number; 
    title: string; 

    constructor(name: string, phone: number, title: string){
        this.name = name; 
        this.phone = phone; 
        this.title = title; 
    }
}

let newInturns: Array<Inturns> = [
    new Inturns("Blossom", 1234567890, "PPG"), 
    new Inturns("Buttercup", 1234567890, "PPG"), 
    new Inturns("Bubbles", 1234567890, "PPG"), 
    new Inturns("Sara Bellum", 9087654321, "Secretary") 
]

let addEmp = async (newInturns) => {
    await page.click(page.addEmployee); 
    await page.click(page.newEmployee); 
    await page.setInput(page.nameInput, newInturns.name); 
    await page.setInput(page.phoneInput, newInturns.phone); 
    await page.setInput(page.titleInput, newInturns.title); 
    await page.click(page.saveBtn);
    await page.driver.sleep(3000); 
}

test('can add employees using array', async () => {
    await page.navigate(); 
    await page.getElement(page.header); 
    for(let i = 0; i < newInturns.length; i ++) {
        await addEmp(newInturns[i])
    }
    await page.driver.quit()
})