import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL);
});

test.describe('Web entry test', () => {
  test('Has title', async ({page}) => {
    await expect(page).toHaveTitle(/Blog Cineplanet/);
  });
});