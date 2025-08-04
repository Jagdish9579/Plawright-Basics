import {test ,expect} from '@playwright/test'

test( 'Mouse Clicks', async({page})=>{

await page.goto("https://textbox.johnjago.com/");
await page.locator("//textarea").pressSequentially("JAGDISH JANGID",{delay:2000})

await page.locator("//textarea").dblclick();
await page.locator("//textarea").click({button:'right'});

})