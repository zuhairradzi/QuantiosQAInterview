import { Page, expect } from '@playwright/test';

(globalThis as any).baseUrl = 'https://qainterview.netlify.app';


//in a real world scenario, data will be loaded from external sources/encrypted
//eg: let username: string = process.env.USERNAME!;
(globalThis as any).username = 'userB1';
(globalThis as any).password = 'Windows.2000';

export async function goToHomepage(page:Page, url: string) {
const loginButton = page.getByRole('button', {name: 'Login'});

  //go to portal url and validate portal loaded
  await page.goto(url);
  await expect(page.locator('h2')).toHaveText('Login');
  await expect(loginButton).toBeDisabled();

    
}