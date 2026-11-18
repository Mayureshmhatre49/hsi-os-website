/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam,
 * Naver — Google does not use IndexNow). Run after a production deploy:
 *
 *   npm run indexnow
 *
 * The key below matches the file served at https://www.hsios.in/<key>.txt
 * (public/2adb7341f9f349e36b382db34cb8a38a.txt).
 */
import fs from 'fs'
import path from 'path'

const HOST = 'www.hsios.in'
const KEY = process.env.INDEXNOW_KEY || '2adb7341f9f349e36b382db34cb8a38a'
const keyFile = path.join(process.cwd(), 'public', `${KEY}.txt`)

if (!fs.existsSync(keyFile)) {
  console.warn(`[IndexNow] Warning: verification file public/${KEY}.txt not found. Creating it...`)
  fs.writeFileSync(keyFile, KEY, 'utf8')
}

let urlList = []
try {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
} catch (err) {
  console.warn(`[IndexNow] Could not fetch live sitemap from https://${HOST}/sitemap.xml:`, err.message)
}

if (!urlList.length) {
  console.log('[IndexNow] Falling back to default core URLs...')
  urlList = [
    `https://${HOST}/`,
    `https://${HOST}/pricing`,
    `https://${HOST}/about`,
    `https://${HOST}/projects`,
    `https://${HOST}/hsi-os`,
    `https://${HOST}/alibag-villa-interiors`,
    `https://${HOST}/insights`,
    `https://${HOST}/insights/alibag-villa-cost`,
    `https://${HOST}/insights/alibag-timeline`,
    `https://${HOST}/insights/alibag-challenges`,
    `https://${HOST}/insights/designer-vs-execution-firm`,
  ]
}

console.log(`[IndexNow] Submitting ${urlList.length} URLs to IndexNow for host ${HOST}...`)

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  })

  console.log(`[IndexNow] Result: submitted ${urlList.length} URLs → HTTP ${res.status}`)
  if (res.status === 200 || res.status === 202) {
    console.log('[IndexNow] Success: Bing and IndexNow-compatible search engines have queued the URLs.')
  } else {
    const errorText = await res.text().catch(() => '')
    console.error(`[IndexNow] Non-success response: ${res.status} ${errorText}`)
  }
} catch (err) {
  console.error('[IndexNow] Submission failed:', err.message)
}
