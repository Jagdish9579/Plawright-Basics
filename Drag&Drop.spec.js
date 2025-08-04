import {test,expect} from '@playwright/test'

test('Drag & Drop', async({page}) =>{

    await page.goto("https://jqueryui.com/droppable/");
   const pageIframe= page.frameLocator("//*[@id='content']/iframe");

   const d1= await pageIframe.locator("//div[@id='draggable']");
   const d2= await pageIframe.locator("//div[@id='droppable']");
   
   await d1.dragTo(d2);
  await  page.waitForTimeout(40000);

page.close();


})