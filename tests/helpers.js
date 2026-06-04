import { expect } from '@playwright/test';

export const BASE_URL = 'https://demowebshop.tricentis.com';

export async function open(page, path = '/') {
  await page.goto(`${BASE_URL}${path}`, {
    waitUntil: 'domcontentloaded',
    timeout: 100000
  });
}

export async function expectVisible(page, selector) {
  await expect(page.locator(selector).first()).toBeVisible();
}