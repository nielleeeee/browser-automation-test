import { test, expect } from "@playwright/test";

test("Notion Login and Navigation", async ({ page }) => {
  // Login to notion database page
  await page.goto(
    ""
  );

  await page.fill("input#notion-email-input-1", "");

  await page.click("form div[role='button']:has-text('Continue')");

  await page.fill("input#identifierId", "");

  await page.click("button.VfPpkd-LgbsSe span:has-text('Next')");

  await page.fill("input[name='Passwd']", "");

  await page.click("button.VfPpkd-LgbsSe span.VfPpkd-vQzf8d:has-text('Next')");

  // Check if verification code input is visible
  if (await page.locator("div[data-challengetype='13']").isVisible()) {
    await page.click("div[data-challengetype='13']");

    // Check if the phone number input is visible
    if (await page.locator("input#phoneNumberId").isVisible()) {
      await page.fill("input#phoneNumberId", "+");
    }

    // Check if the next button is visible
    if (
      await page
        .locator("button.VfPpkd-LgbsSe span.VfPpkd-vQzf8d:has-text('Next')")
        .isVisible()
    ) {
      await page.click(
        "button.VfPpkd-LgbsSe span.VfPpkd-vQzf8d:has-text('Next')"
      );
    }
  }

  await page.waitForURL("/**", {
    timeout: 10000,
  });

  await page.waitForLoadState("domcontentloaded", { timeout: 10000 });

  // Workflow inside notion
  await page.click("div[role='button'].notion-collection-add-view");

  await page.click("div[role=menuitem]:has-text('Board')");

  await page.fill("input[placeholder='View name']", "Task");

  await page.click(
    "div[role='menuitemcheckbox'] div:has-text('Color columns')"
  );

  await page.click("div[role='button']:has-text('Done')");

  // Edit properties of the task board
  await page.click("div[role='button'] div:has-text('Properties')");

  await page.click("div[role='button'] div:has-text('New property')");

  await page.click("div[role='menuitem'] div:has-text('Status')");

  await page.fill("input[placeholder='Property name']", "Task Status");

  // Select the add to do status button
  await page
    .locator("div[role='button'][aria-label='Add an option']")
    .nth(0)
    .click();

  await page.locator("input[placeholder]").nth(1).fill("Backlog");

  await page.click("div[role='button'] span:has-text('Not started')");

  await page.fill("div[role='dialog'] input", "Ready to start");

  await page.click("div[role='menuitem'] div:has-text('Blue')");
});
