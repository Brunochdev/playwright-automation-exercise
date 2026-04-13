import { test, expect } from '@playwright/test';

test('login com sucesso', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');

  await page.locator('input[data-qa="login-email"]').fill('teste@email.com');
  await page.locator('input[data-qa="login-password"]').fill('123456');

  await page.locator('button[data-qa="login-button"]').click();

  await expect(page.locator('text=Logged in as')).toBeVisible();
});