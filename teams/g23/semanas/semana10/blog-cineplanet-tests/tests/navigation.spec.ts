import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL!);
});

test.describe('Blog Cineplanet entry tests', () => {
  test('Should have the correct titles', async ({ page }) => {
    await expect(page).toHaveTitle(/Blog Cineplanet/);
    await expect(page.getByRole('heading', { name: 'Blog Cineplanet I Lo mejor del cine y entretenimiento' })).toBeVisible();
  });
});