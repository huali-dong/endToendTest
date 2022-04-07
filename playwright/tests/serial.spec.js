const { test } = require('@playwright/test');

// test.describe.configure({ mode: 'serial' });
let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});

test.afterAll(async () => {
    await page.close();
});

test('runs first', async () => {
    await page.goto('https://playwright.dev/');
});

test('runs second', async () => {
    await page.click('text=Get Started');
});