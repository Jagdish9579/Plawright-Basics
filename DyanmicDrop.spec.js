import {test ,expect } from '@playwright/test'

test('Dyamic  Dropdown Demo', async ({ page }) => {
  test.slow();

  await page.goto('https://yatra.com/');
  await page.waitForTimeout(5000);
  const depfrom=page.locator('')
  await page.locator()
  await page.waitForTimeout(5000);
  await page.locator();
  await page.waitForTimeout(5000);

  await page.locator();
  await page.waitForTimeout(5000);
  // //  await page.locator("//*[@name='CompanyCountry']").selectOption("Haiti")
  //await page.waitForTimeout(5000);
});
