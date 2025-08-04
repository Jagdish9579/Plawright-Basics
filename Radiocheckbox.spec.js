import {test,expect} from '@playwright/test'

test('test checkbox radio',async({page}) =>{

 await page.goto('https://training.rcvacademy.com/test-automation-practice-page')
 await page.locator("//input[@type='radio']").nth(1).click()
 })