import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL!)
});

test.describe('Entry Tests', () => {
  test('Should have the correct titles', async ({ page }) => {
    await expect(page).toHaveTitle(/Cineplanet/);
    await expect(page.getByRole('heading', { name: 'Películas' })).toBeVisible();
  });
});