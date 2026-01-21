import { test, expect } from '@playwright/test';
import { goToHomepage } from '../Utils/Common.ts';
import { login, validateWrongCredential } from '../Pages/Login.ts';


test('Verify failed login with invalid credentials', async ({page}) => {

  await goToHomepage(page, (globalThis as any).baseUrl);
  await login(page, 'user11', 'Windows.2');
  await validateWrongCredential(page);

});





