import {test ,expect} from '@playwright/test'

test( 'Mouse Hover', async({page})=>{

await page.goto("https://www.flipkart.com/");
await page.waitForTimeout(4000);
await page.locator("//span[contains(text(),'Login')]").hover();
await page.waitForTimeout(4000);


})

test.only( 'Slider', async({page})=>{

    await page.goto("https://www.flipkart.com/");
    await page.waitForTimeout(4000);
    await page.locator("(//*[@id='container']//div[2])[12]").getByRole("img").first().click();
    await page.waitForTimeout(4000);
    
    const sl=await page.locator("//*[@id='container']/div/div[3]/div/div[1]/div/div[1]/div/section[2]/div[3]/div[1]/div[1]")

    const bb= await sl.boundingBox();
    await page.mouse.move(bb.x+bb.width/2, bb.y+bb.height/2);
    await page.waitForTimeout(4000);
    await page.mouse.down();
    await page.waitForTimeout(4000);
    await page.mouse.move(bb.x+40, bb.y+bb.height/2);
    await page.waitForTimeout(4000);
    await page.mouse.up();
    await page.waitForTimeout(4000);
    })