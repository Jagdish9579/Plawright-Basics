import {test, expect} from '@playwright/test'

test('List Fetch', async({page}) => {

await page.goto('https://training.rcvacademy.com')
const listsection = page.locator("(//ul[@class='list-basic pricing-features'])[1]")

//for(const ele of await page.getByRole('listitem').all())
   // console.log(await ele.textContent())


const rows = listsection.getByRole('listitem');
const count = await rows.count();
for (var i = 0; i < count; i++)
  console.log(await rows.nth(i).textContent());


})