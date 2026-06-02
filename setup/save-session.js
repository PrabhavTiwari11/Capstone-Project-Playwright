import { chromium } from '@playwright/test';

const browser = await chromium.launch({
  headless: false,
  slowMo: 300,
  args: [
    '--disable-blink-features=AutomationControlled',
  ]
});

const context = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  viewport: { width: 1280, height: 720 }
});
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