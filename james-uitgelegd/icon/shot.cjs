const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1024, height: 1024 } });
 await p.goto('file://' + __dirname + '/icon.html'); await p.waitForTimeout(1500); await p.evaluate(() => document.fonts.ready);
 await p.screenshot({ path: __dirname + '/james-uitgelegd-icoon.png' }); await b.close(); })();
