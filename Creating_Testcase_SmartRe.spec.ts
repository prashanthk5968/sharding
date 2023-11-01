import { test, expect } from '@playwright/test';
import * as fs from "fs";

test('test', async ({ page }) => {
	await page.goto('https://itap.valuemomentum.com:8888/spa');
	await page.locator('xpath=//*[@id="navbar"]/div/div[2]/a').click();
	await page.locator('xpath=//*[@id="email"]').click();
	await page.locator('xpath=//*[@id="email"]').fill('satyam.kanakasurekha@valuemomentum.com');
	await page.locator('xpath=//*[@id="password"]').click();
	await page.locator('xpath=//*[@id="password"]').fill('Satyam@16');
	await page.locator('xpath=/html/body/app-root/div[1]/div/div/login/div/div/div/div/div/div/div[2]/form/div[3]/button').click();
	await page.locator('xpath=/html/body/app-root/div[1]/div[1]/div/navbar/nav/ul/li[9]/a').click();
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/app-smartre/div/div[2]/app-action-area/app-smartre-home/div/div[2]/form/div/div[2]/div[2]/select').click();
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/app-smartre/div/div[2]/app-action-area/app-smartre-home/div/div[2]/form/div/div[2]/div[2]/select').selectOption({ label: 'Asset Migration - Cognitive'});
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/app-smartre/div/div[2]/app-action-area/app-smartre-home/div/div[2]/form/div/div[3]/div[2]/select').click();
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/app-smartre/div/div[2]/app-action-area/app-smartre-home/div/div[2]/form/div/div[3]/div[2]/select').selectOption({ label: 'Release4.3'});
	await page.locator('xpath=/html/body/app-root/div[1]/div[2]/div/app-smartre/div/div[2]/app-action-area/app-smartre-home/div/div[2]/form/div/div[5]/div/button').click();
	await page.close();
});