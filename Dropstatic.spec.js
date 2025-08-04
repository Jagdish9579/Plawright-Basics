import {test ,expect } from '@playwright/test'

test('Static Dropdown Demo', async ({ page }) => {
  test.slow();

  await page.goto('https://www.salesforce.com/form/signup/elf-v2-login/?d=70130000000Enus');
  await page.waitForTimeout(5000);
  await page.locator("//*[@name='CompanyCountry']").selectOption("Haiti")
  await page.waitForTimeout(5000);
  await page.locator("//*[@name='CompanyCountry']").selectOption({ label: 'India' });
  await page.waitForTimeout(5000);

  await page.locator("//*[@name='CompanyCountry']").selectOption({index: 0 });
  await page.waitForTimeout(5000);
  // //  await page.locator("//*[@name='CompanyCountry']").selectOption("Haiti")
  //await page.waitForTimeout(5000);
});
