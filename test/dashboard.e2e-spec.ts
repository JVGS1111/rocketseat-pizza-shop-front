import { test, expect } from '@playwright/test';

test('display month revenue metric', async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await expect(page.locator('span').filter({ hasText: 'R$ 2,00' })).toBeVisible();
    await expect(page.getByText('-5% em relação ao mês passado').first()).toBeVisible();
});

test('display month orders amount metric', async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await expect(page.getByText('10')).toBeVisible();
    await expect(page.getByText('-20% em relação ao mês passado')).toBeVisible();
});

test('display day orders amount metric', async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await expect(page.getByText('20', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('-5% em relação a ontem')).toBeVisible();
});


test('display month canceled orders amount metric', async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^20-5% em relação ao mês passado$/ }).getByRole('paragraph')).toBeVisible();
});

