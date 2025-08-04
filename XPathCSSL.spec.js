import { test, expect } from '@playwright/test';

test('XPath CSS Demo', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await page.locator("xpath=//*[@id='username']").fill("RCV")
  await page.locator("css=#password").fill("RCV")
});