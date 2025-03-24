import { test, expect } from '@playwright/test';

test('Notion Login and Navigation', async ({ page }) => {
  await page.goto('https://www.notion.so/sherlock-hq/1bd9088454b581a9a6a3f9263b8e79e9');

  await page.fill('input#notion-email-input-1', '');

  await page.click("form div[role='button']:has-text('Continue')");

  await page.fill('input#identifierId', '');

  await page.click("button.VfPpkd-LgbsSe span:has-text('Next')");

  await page.fill("input[name='Passwd']", '');

  await page.click("button.VfPpkd-LgbsSe span.VfPpkd-vQzf8d:has-text('Next')");

  await page.waitForLoadState('domcontentloaded');

  await page.click('div.notion-collection-add-view');
  console.log('Clicked the Add View button');

  // Click the div with ID ':r3j:'
  await page.click("div[id=':r3j:']");
  console.log('Clicked the div with ID :r3j:');
});