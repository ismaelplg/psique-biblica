// ponytail: smallest check that fails if SEO output breaks
import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const home = readFileSync('dist/index.html', 'utf8');
assert(existsSync('dist/sitemap-index.xml'), 'sitemap missing');
assert(existsSync('dist/robots.txt'), 'robots missing');
assert(existsSync('dist/rss.xml'), 'rss missing');
assert(existsSync('dist/blog/index.html'), 'blog index missing');
for (const s of ['<link rel="canonical"', 'name="description"', 'application/ld+json', 'FAQPage', 'property="og:title"', 'calendly.com', 'lang="es"'])
  assert(home.includes(s), `home missing ${s}`);
console.log('SEO checks passed');
