import { chromium } from '@playwright/test';

const browser = await chromium.launch({
  headless: false,
  slowMo: 300,
});

const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://demo.nopcommerce.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000,
});

console.log('Agar CAPTCHA aaye to manually solve karo.');
console.log('Website open hone ke baad Playwright Inspector me Resume/Continue dabao.');

await page.pause();

await context.storageState({ path: 'auth/storageState.json' });

await browser.close();

console.log('Session saved successfully.');