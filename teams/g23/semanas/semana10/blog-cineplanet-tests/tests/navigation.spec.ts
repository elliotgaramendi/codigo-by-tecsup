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
  test('Should allow internal navigation and  of title', async ({ page }) => {
    await page.getByRole('link', { name: 'Noticias' }).click();
    await expect(page.getByRole('heading', { name: 'Noticias planet' })).toBeVisible();
    await page.getByRole('link', { name: 'Notas' }).click();
    await expect(page.getByRole('heading', { name: 'Notas planet' })).toBeVisible();
    await page.getByRole('link', { name: 'Videos' }).click();
    await expect(page.getByRole('heading', { name: 'Videos planet' })).toBeVisible();
    await page.getByRole('link', { name: 'Blog Cineplanet' }).click();
    await expect(page.getByRole('heading', { name: 'Blog Cineplanet I Lo mejor del cine y entretenimiento' })).toBeVisible();
  });

  test('Should allow navigation to movies and view their title', async ({ page }) => {
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('banner').getByRole('link', { name: 'Cartelera' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Aceptar Cookies' }).click();
    await page1.getByRole('heading', { name: 'Películas' }).locator('span').click();
  });
});