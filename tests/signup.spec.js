import { test, expect } from '@playwright/test';

const email = `bruno${Date.now()}@test.com`;//${Date.now()} evita erro de email duplicado

test('new user account', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');

//fill the informations to reach the page for create a account
  await page.locator('input[data-qa="signup-name"]').fill('Bruno Test');
  await page.locator('input[data-qa="signup-email"]').fill(email);
  await page.locator('button[data-qa="signup-button"]').click();

  await expect(page.locator('text=Enter Account Information')).toBeVisible();

//registration process / account information

  // title
  await page.locator('#id_gender1').check();

  // password
  await page.locator('input[data-qa="password"]').fill('123456');

  // birth date
  await page.locator('select[data-qa="days"]').selectOption('29');
  await page.locator('select[data-qa="months"]').selectOption('10');
  await page.locator('select[data-qa="years"]').selectOption('1987');

  // checkbox
  await page.locator('#newsletter').check();
  await page.locator('#optin').check();

  // address
  await page.locator('input[data-qa="first_name"]').fill('Bruno');
  await page.locator('input[data-qa="last_name"]').fill('Test');
  await page.locator('input[data-qa="company"]').fill('Companhia B');
  await page.locator('input[data-qa="address"]').fill('Rua Teste');
  await page.locator('input[data-qa="address2"]').fill('Rua Teste 2');
  await page.locator('#country').selectOption('Canada');
  await page.locator('input[data-qa="state"]').fill('State');
  await page.locator('input[data-qa="city"]').fill('City');
  await page.locator('input[data-qa="zipcode"]').fill('12345');
  await page.locator('input[data-qa="mobile_number"]').fill('999999999');

  // create account
  await page.locator('button[data-qa="create-account"]').click();

  // final vallidation
  await expect(page.locator('h2[data-qa="account-created"]')).toBeVisible();
});