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
	await page.locator('xpath=/html/body/app-root/div[1]/div[1]/div/navbar/nav/ul/li[5]/a').click();
	await page.locator('xpath=//*[@id="Individual"]').click();
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/api-testing/div/div[2]/project-action-area/div/div[2]/project-create-form/form/div/div[2]/input').click();
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/api-testing/div/div[2]/project-action-area/div/div[2]/project-create-form/form/div/div[2]/input').fill('test0');
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/api-testing/div/div[2]/project-action-area/div/div[2]/project-create-form/form/div/div[3]/input').click();
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/api-testing/div/div[2]/project-action-area/div/div[2]/project-create-form/form/div/div[3]/input').fill('pro');
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/api-testing/div/div[2]/project-action-area/div/div[2]/project-create-form/form/div/div[4]/button').click();
	await page.waitForTimeout(5000);
	await page.close();
});