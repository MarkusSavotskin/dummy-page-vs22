import { test, expect } from '@playwright/test';

test('has heading', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect page to have a heading saying 'A Typical Page'.
  await expect(page.getByRole('heading', { name: 'A Typical Page' })).toBeVisible();
});

test('log in', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Fill email input field.
  await page.locator("input#email").fill('test@test.test');
  // Fill password input field
  await page.locator("input#password").fill('testingtesting123');
  // Click login button.
  await page.getByRole('button', { name: 'Login' }).click();

  // Expect page to have a heading saying 'Welcome back!'.
  await expect(page.getByRole('heading', { name: 'Welcome back!' })).toBeVisible();
});

test('log out', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Fill email input field.
  await page.locator("input#email").fill('test@test.test');
  // Fill password input field
  await page.locator("input#password").fill('testingtesting123');
  // Click login button.
  await page.getByRole('button', { name: 'Login' }).click();

  // Expect page to have a heading saying 'Welcome back!'.
  await expect(page.getByRole('heading', { name: 'Welcome back!' })).toBeVisible();
  // Click logout button.
  await page.getByRole('button', { name: 'Logout' }).click();

  // Expect page to have login form.
  await expect(page.locator('form')).toBeVisible();
});
