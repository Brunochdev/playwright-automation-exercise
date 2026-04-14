import { test, expect } from '@playwright/test';
import { generateUser } from '../helpers/user';
import { login, registerUser } from '../helpers/authorization';

test('new user account', async ({ page }) => {

  const user = generateUser();
  const baseUrl = 'https://automationexercise.com/login';

  await page.goto(baseUrl);

  await registerUser(page, user);

  await expect(page.locator('h2[data-qa="account-created"]')).toBeVisible();

  // continue + logout
  await page.locator('a[data-qa="continue-button"]').click();
  await page.locator('a[href="/logout"]').click();

  // login (usando helper)
  await page.goto(baseUrl);
  await login(page, user.email, user.password);

  await expect(page.locator('text=Logged in as')).toBeVisible();
});