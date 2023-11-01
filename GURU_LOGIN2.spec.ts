import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
	await page.goto('https://demo.guru99.com/v4/');
	await page.locator('xpath=//tbody/tr[1]/td[2]/input[1]').click();
	await page.locator('xpath=//tbody/tr[1]/td[2]/input[1]').fill('manager');
	await page.locator('xpath=//tbody/tr[2]/td[2]/input[1]').click();
	await page.locator('xpath=//tbody/tr[2]/td[2]/input[1]').fill('pass');
	await page.close();
});