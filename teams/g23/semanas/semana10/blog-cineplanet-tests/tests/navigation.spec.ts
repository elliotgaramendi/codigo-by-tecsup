import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL!);
});

test.describe('Blog Cineplanet Entry Tests', () => {
  test('Should have the correct titles', async ({ page }) => {
    await expect(page).toHaveTitle(/Blog Cineplanet/);
    await expect(page.getByRole('heading', { name: 'Blog Cineplanet I Lo mejor del cine y entretenimiento' })).toBeVisible();
  });
});

test.describe('Header navigation', () => {
  test('Should allow navigation and display of title', async ({ page }) => {
    await page.getByRole('link', { name: 'Noticias' }).click();
    await expect(page.getByRole('heading', { name: 'Noticias planet' })).toBeVisible();
    await page.getByRole('link', { name: 'Notas' }).click();
    await expect(page.getByRole('heading', { name: 'Notas planet' })).toBeVisible();
    await page.getByRole('link', { name: 'Videos' }).click();
    await expect(page.getByRole('heading', { name: 'Videos planet' })).toBeVisible();
    await page.getByRole('link', { name: 'Blog Cineplanet' }).click();
    await expect(page.getByRole('heading', { name: 'Blog Cineplanet I Lo mejor del cine y entretenimiento' })).toBeVisible();
  });
});