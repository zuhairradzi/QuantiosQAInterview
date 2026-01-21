import { test, expect } from '@playwright/test';
import { login, validateLoginSuccessfull } from '../Pages/Login.ts';
import { goToHomepage } from '../Utils/Common.ts';

test('Verify successful login with valid credentials', async ({page}) => {

  await goToHomepage(page, (globalThis as any).baseUrl);
  await login(page, (globalThis as any).username, (globalThis as any).password);
  await validateLoginSuccessfull(page, (globalThis as any).username);

});





