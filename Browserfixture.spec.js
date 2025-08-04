import {test,expect} from '@playwright/test'

test( 'Browser Fixture', async({ browser}) =>{

 const context=await browser.newContext({baseURL:"https:",colorScheme:'dark'})
 const page=await context.newPage()

 await page.goto("/")
 
})

test( 'Page Fixture', async({ page}) =>{
   
    await page.goto("https://google.com/")
    
   })