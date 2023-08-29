import {Google} from './googlePageWBase'; 
const google = new Google(); 
const fs = require('fs')
test('do a search', async () => {
    await google.navigate(); 
    await google.search('pizza near me'); 
    let text = await google.getResults(); 
    expect(text).toContain('pizza'); 
    fs.writeFile(`${__dirname}/testResults.txt`, text, (e) => {
        if (e) console.log(e); 
        else console.log('Save Successful'); 
    }); 
    fs.writeFile(`${__dirname}/google.png`, 
    await google.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.log(e); 
        else console.log("a picture is worth a thousand words"); 
    }); 

    await google.driver.quit(); 
}); 