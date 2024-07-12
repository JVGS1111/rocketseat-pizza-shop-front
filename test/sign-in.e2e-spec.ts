import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel('Seu e-mail').fill("johndoe@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Enviamos um link de autenticação para seu e-mail.");

  await expect(toast).toBeVisible();
});

test('sign with wrongh credentials', async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel('Seu e-mail').fill("wrongh@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Credenciais inválidas.");

  await expect(toast).toBeVisible();
});

test('navigate to the new restaurant page', async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click();

  expect(page.url()).toContain("/sign-up");
});
