import {test,expect} from '@playwright/test'

test.only( 'Handle Multiple Tabs', async({ browser}) =>{
   
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://training.rcvacademy.com/");
    
   const [newPage]= await Promise.all([
        
       context.waitForEvent('page'),
        page.locator("(//img)[3]").click()
        
    ])


   await newPage.locator("//button[@aria-label='Install']").click();
   //await newPage.waitForTimeout(30000);
   await  newPage.locator("(//button[contains(text(),'Cancel')])[2]").click();
   //await newPage.waitForTimeout(30000);
   await newPage.close();
   //await newPage.waitForTimeout(30000);
   await page.locator("(//*[@id='name'])[1]").fill("Jagdish Hadaman Jangid");
   await page.waitForTimeout(30000);
   await page.close();


   })