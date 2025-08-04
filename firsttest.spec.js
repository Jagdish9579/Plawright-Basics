import { test, expect } from '@playwright/test';

test('Sign In', async ({ page }) => {
 // await page.goto('https://v3-lts-eetestsystem.tooljet.com/cypress-qa/apps/058679da-2df2-441c-a382-7a5e2e120029');


  await page.goto('https://v3-lts-eetestsystem.tooljet.com/login/cypress-qa?redirectTo=/');

  await page.locator('//*[@id="email"]').fill("intern@example.com");


 await page.locator('//*[@id="password"]').fill("password");


 await page.locator('//div[@class="row"]').click();



 

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Google/);
});