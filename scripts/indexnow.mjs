/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam,
 * Naver — Google does not use IndexNow). Run after a production deploy:
 *
 *   npm run indexnow
 *
 * The key below must match the file served at https://www.hsios.in/<key>.txt
 * (public/2adb7341f9f349e36b382db34cb8a38a.txt). Rotate both together if the key ever leaks.
 */
const HOST = 'www.hsios.in'
const KEY = '2adb7341f9f349e36b382db34cb8a38a'

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (!urlList.length) throw new Error('No URLs found in sitemap')

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
})
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`)
if (!res.ok && res.status !== 202) process.exit(1)
