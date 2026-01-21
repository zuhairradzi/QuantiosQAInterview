import { Page, expect } from '@playwright/test';

export async function login(page:Page, username: string, password: string) {
const usernameField = page.locator('#username');
const passwordField = page.locator('#password'); 
const loginButton = page.getByRole('button', {name: 'Login'});


  //enter username and password
  await usernameField.fill(username);
  await passwordField.fill(password);

  //click login button
  await expect(loginButton).toBeEnabled();
  await loginButton.click();

    
}

export async function validateLoginSuccessfull(page:Page, username: string) {

 //validate correct user is logged in
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h1')).toHaveText('Stock Market Dashboard');
  await expect(page.locator('#greeting')).toHaveText('Hi '+username+'!');
    
}

export async function validateWrongCredential(page:Page) {

 //validate error message
  await expect(page.locator('#errorMsg')).toHaveText('Invalid username or password');
    
}