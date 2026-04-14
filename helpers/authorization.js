// helpers/auth.js

export async function registerUser(page, user) {
  // iniciar signup
  await page.locator('input[data-qa="signup-name"]').fill(user.name);
  await page.locator('input[data-qa="signup-email"]').fill(user.email);
  await page.locator('button[data-qa="signup-button"]').click();

  // valida que entrou na tela correta
  await page.locator('text=Enter Account Information').waitFor();

  // account info
  await page.locator('#id_gender1').check();
  await page.locator('input[data-qa="password"]').fill(user.password);

  await page.locator('select[data-qa="days"]').selectOption('29');
  await page.locator('select[data-qa="months"]').selectOption('10');
  await page.locator('select[data-qa="years"]').selectOption('1987');

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

  // criar conta
  await page.locator('button[data-qa="create-account"]').click();
}

export async function login(page, email, password) {
  await page.locator('input[data-qa="login-email"]').fill(email);
  await page.locator('input[data-qa="login-password"]').fill(password);
  await page.locator('button[data-qa="login-button"]').click();
}