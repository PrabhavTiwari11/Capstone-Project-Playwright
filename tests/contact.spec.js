import { test, expect } from '@playwright/test';
import { open, expectVisible } from './helpers.js';

test.describe('Contact Newsletter Poll Service', () => {
  test('CNP TC01 Contact page opens', async ({ page }) => {
    await open(page, '/contactus');
    await expectVisible(page, '.contact-page');
  });

  test('CNP TC02 Contact full name visible', async ({ page }) => {
    await open(page, '/contactus');
    await expectVisible(page, '#FullName');
  });

  test('CNP TC03 Contact email visible', async ({ page }) => {
    await open(page, '/contactus');
    await expectVisible(page, '#Email');
  });

  test('CNP TC04 Contact enquiry visible', async ({ page }) => {
    await open(page, '/contactus');
    await expectVisible(page, '#Enquiry');
  });

  test('CNP TC05 Contact submit button visible', async ({ page }) => {
    await open(page, '/contactus');
    await expectVisible(page, '.contact-us-button');
  });

  test('CNP TC06 Newsletter email field visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '#newsletter-email');
  });

  test('CNP TC07 Newsletter subscribe button visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '#newsletter-subscribe-button');
  });

  test('CNP TC08 Newsletter invalid email shows result', async ({ page }) => {
    await open(page);
    await page.locator('#newsletter-email').fill('wrong');
    await page.locator('#newsletter-subscribe-button').click();
    await expectVisible(page, '#newsletter-result-block');
  });

  test('CNP TC09 Poll block visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.poll');
  });

  test('CNP TC10 Poll options visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.poll-options');
  });

  test('CNP TC11 Poll vote button visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.vote-poll-button');
  });

  test('CNP TC12 Sitemap opens', async ({ page }) => {
    await open(page, '/sitemap');
    await expectVisible(page, '.sitemap-page');
  });

  test('CNP TC13 Contact URL should be correct', async ({ page }) => {
    await open(page, '/contactus');
    await expect(page).toHaveURL(/contactus/);
  });

  test('CNP TC14 Footer visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.footer');
  });

  test('CNP TC15 Footer information visible', async ({ page }) => {
    await open(page);
    await expectVisible(page, '.footer-menu-wrapper');
  });
});