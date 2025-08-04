import {test, expect} from '@playwright/test'

test('Iframe Demo', async({ page }) =>{
 await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_inner_html')
 await page.waitForTimeout(3000)
 const PageI=page.frameLocator("//*[@id='iframeResult']")
 await page.waitForTimeout(3000)
 await PageI.locator("//button[normalize-space()='Click Me!']").click()
 await page.waitForTimeout(3000)
 await page.locator("//button[@id='runbtn']").click()
 await page.waitForTimeout(3000)

})


