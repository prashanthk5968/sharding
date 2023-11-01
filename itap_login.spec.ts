import { test, expect } from '@playwright/test';
import * as fs from "fs";

test('test', async ({ page }) => {
	await page.goto('https://itap.valuemomentum.com:8888/spa');
	await page.locator('xpath=//*[@id="navbar"]/div/div[2]/a').click();
	await page.locator('xpath=//*[@id="email"]').click();
	await page.locator('xpath=//*[@id="email"]').fill('tester@valuemomentum.com');
	await page.locator('xpath=//*[@id="password"]').click();
	await page.locator('xpath=//*[@id="password"]').fill('test');
	await page.locator('xpath=/html/body/app-root/div[1]/div/div/login/div/div/div/div/div/div/div[2]/form/div[3]/button').click();
});