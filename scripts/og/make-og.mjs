// Vẽ public/og.jpg từ scripts/og/og.html bằng Playwright (Chromium).
// Thêm --kiem để vẽ thêm khung đỏ 630×630 (ô Facebook cắt) ra og-kiem.png.
// Cần playwright (npx playwright, hoặc cài toàn cục rồi đặt NODE_PATH=$(npm root -g)).
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import { fileURLToPath } from 'node:url';
const here = (p) => fileURLToPath(new URL(p, import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto('file://' + here('./og.html'));
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: here('../../public/og.jpg'), type: 'jpeg', quality: 88 });
if (process.argv.includes('--kiem')) {
  await page.evaluate(() => document.body.classList.add('kiem'));
  await page.screenshot({ path: here('./og-kiem.png') });
}
await browser.close();
