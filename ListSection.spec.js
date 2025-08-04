import {test, expect} from '@playwright/test'

test('Section Wise List', async ({page}) => {

await page.goto('https://training.rcvacademy.com')

const listsection =page.locator("(//ul[@class='list-basic pricing-features'])[1]");
await expect(listsection.getByRole('listitem')).toHaveCount(6);

})