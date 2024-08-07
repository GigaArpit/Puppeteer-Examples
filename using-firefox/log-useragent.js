import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  browser: "firefox"
});

console.log(await browser.userAgent());

await browser.close();