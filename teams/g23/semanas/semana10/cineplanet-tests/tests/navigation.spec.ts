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

test.describe('Header Navigation Tests', () => {
  test('Should allow navigation and display of titles with text links', async ({ page }) => {
    await page.getByRole('button', { name: 'Aceptar Cookies' }).click();
    await page.locator('.icon.cineplanet-icon.cineplanet-icon_close.cineplanet-icon_small.alert--title-icon-close').click();
    await expect(page.getByRole('heading', { name: 'Películas' })).toBeVisible();
    await page.getByRole('link', { name: 'Películas' }).click();
    await expect(page.getByRole('heading', { name: 'Películas' }).locator('span')).toBeVisible();
    await page.getByRole('link', { name: 'Cines' }).click();
    await expect(page.getByRole('heading', { name: 'Cines' }).locator('span')).toBeVisible();
    await page.getByRole('link', { name: 'Promociones' }).click();
    await expect(page.getByRole('heading', { name: 'Eres entel, eres cine' })).toBeVisible();
    await page.getByRole('link', { name: 'Socio' }).click();
    await expect(page.getByRole('heading', { name: 'Más visitas, más beneficios' })).toBeVisible();
    await page.getByRole('link', { name: 'Dulcería' }).click();
    await expect(page.getByText('Escoge un Cineplanet para comprar productos de nuestra dulcería')).toBeVisible();
    await page.getByRole('link', { name: 'Corporativo' }).click();
    await expect(page.getByText('Comunicado Corporativo').first()).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Blog' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByRole('heading', { name: 'Blog Cineplanet I Lo mejor del cine y entretenimiento' })).toBeVisible();
    page1.close();
  });

  test('It should allow navigation and display of the titles with the icon links', async ({ page }) => {
    await page.getByRole('button', { name: 'Aceptar Cookies' }).click();
    await page.locator('.icon.cineplanet-icon.cineplanet-icon_close.cineplanet-icon_small.alert--title-icon-close').click();
    await page.locator('.icon.cineplanet-icon.cineplanet-icon_login.cineplanet-icon_28').click();
    await page.getByRole('link', { name: 'Iniciar Sesión' }).click();
    await expect(page.getByRole('heading', { name: 'Iniciar sesión' })).toBeVisible();
    await page.locator('.authentication-page--actions--left').click();
    await page.locator('.icon.cineplanet-icon.cineplanet-icon_close.cineplanet-icon_small.alert--title-icon-close').click();
    await page.locator('.icon.cineplanet-icon.cineplanet-icon_search.cineplanet-icon_28').click();
    await expect(page.getByPlaceholder('Buscador...')).toBeVisible();
    await page.locator('.autocomplete--close-button').click();
    await page.locator('.header--right-menu-link.head--contact').click();
    await expect(page.getByRole('heading', { name: 'Contáctanos' })).toBeVisible();
    await page.locator('.header--logo-container').click();
    await expect(page.getByRole('heading', { name: 'Películas' })).toBeVisible();
  });
});