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
  test('Should allow internal navigation and check title', async ({ page }) => {
    const links = [
      { name: 'Noticias', title: 'Noticias planet' },
      { name: 'Notas', title: 'Notas planet' },
      { name: 'Videos', title: 'Videos planet' },
      { name: 'Blog Cineplanet', title: 'Blog Cineplanet I Lo mejor del cine y entretenimiento' },
    ];

    for (const link of links) {
      await page.getByRole('link', { name: link.name }).click();
      await expect(page.getByRole('heading', { name: link.title })).toBeVisible();
    }
  });

  test('Should allow navigation to movies and view their title', async ({ page }) => {
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('banner').getByRole('link', { name: 'Cartelera' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Aceptar Cookies' }).click();
    await page1.getByRole('heading', { name: 'Películas' }).locator('span').click();
  });
});

test.describe('Footer navigation', () => {
  test('It should allow navigation of the footer links', async ({ page }) => {
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Sobre nosotros' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveTitle(/Nosotros/);
    page1.close();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Cartelera' }).click();
    const page2 = await page2Promise;
    await expect(page2).toHaveTitle(/Cineplanet/);
    page2.close();
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Ventas corporativas' }).click();
    const page3 = await page3Promise;
    await expect(page3).toHaveTitle(/Ventas corporativas/);
    page3.close();
    const page4Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Trabaja con nosotros' }).click();
    const page4 = await page4Promise;
    await expect(page4).toHaveTitle(/Cineplanet/);
    page4.close();
    const page5Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Política de privacidad' }).click();
    const page5 = await page5Promise;
    expect(page5).not.toBeNull();
    page5.close();
    const page6Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'aquí.' }).click();
    const page6 = await page6Promise;
    await expect(page6).toHaveTitle(/Superintendencia del Mercado de Valores/);
    page6.close();
    const page7Promise = page.waitForEvent('popup');
    await page.getByLabel('Abrir la red social de Facebook').click();
    const page7 = await page7Promise;
    await expect(page7).toHaveTitle(/Cineplanet/);
    page7.close();
    const page8Promise = page.waitForEvent('popup');
    await page.getByLabel('Abrir la red social de Instagram').click();
    const page8 = await page8Promise;
    await expect(page8).toHaveTitle(/Cineplanet/);
    page8.close();
    const page9Promise = page.waitForEvent('popup');
    await page.getByLabel('Abrir la red social de Twitter').click();
    const page9 = await page9Promise;
    await expect(page9).toHaveTitle(/Cineplanet/);
    page9.close();
    const page10Promise = page.waitForEvent('popup');
    await page.getByLabel('Abrir la red social de TikTok').click();
    const page10 = await page10Promise;
    await expect(page10).toHaveTitle(/Cineplanet/);
    page10.close();
  });
});