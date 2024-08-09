# Use  Firefox in Puppeteer

Puppeteer now has [first-class support of Firefox](https://hacks.mozilla.org/2024/08/puppeteer-support-for-firefox/). Let's play with it.

## Notes

* Install Firefox first: `npx puppeteer browsers install firefox`
* In order to use Firefox in Puppeteer, specify `browser: "firefox"` in `puppeteer.launch`
* Run individual files, like `node .\log-useragent`

## Examples

* [Log User-Agent](/using-firefox/log-useragent.js)
* [Take screenshot of web page](/using-firefox/screenshot.js)
*  
