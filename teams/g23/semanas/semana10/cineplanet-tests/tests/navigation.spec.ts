import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL!)
});