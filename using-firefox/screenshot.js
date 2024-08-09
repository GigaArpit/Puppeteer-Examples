import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  browser: "firefox"
});

const page = await browser.newPage();

await page.goto('https://gs.statcounter.com/detect');

await page.screenshot({path: './screenshot.png', fullPage: true});

await browser.close();