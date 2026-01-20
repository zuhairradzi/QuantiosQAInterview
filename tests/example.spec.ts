import { test, expect } from '@playwright/test';

//in a real world scenario, data will be loaded from external sources/encrypted
//eg: let username: string = process.env.USERNAME!;
let username: string = "userB1";
let password: string = "Windows.2000";
let url: string = "https://qainterview.netlify.app/";

test('Verify successful login with valid credentials', async ({page}) => {

const loginButton = page.getByRole('button', {name: 'Login'});
const usernameField = page.locator('#username');
const passwordField = page.locator('#password'); 

  //go to portal url and validate portal loaded
  await page.goto(url);
  await expect(page.locator('h2')).toHaveText('Login');
  await expect(loginButton).toBeDisabled();

  //enter username and password
  await usernameField.fill(username);
  await passwordField.fill(password);

  //click login button
  await expect(loginButton).toBeEnabled();
  await loginButton.click();

  //validate correct user is logged in
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h1')).toHaveText('Stock Market Dashboard');
  await expect(page.locator('#greeting')).toHaveText('Hi '+username+'!');

});





