// Telefon uygulamasının web dosyalarını app/dist klasörüne hazırlar.
// Kullanım: npm run build && npm run app   (ardından: npx cap sync android)
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'app', 'src');
const dist = join(root, 'app', 'dist');
const data = join(root, 'data');

// Ana sayfadaki bölümler. Listede olmayan açılışlar "Diğer" bölümüne düşer.
const CATEGORIES = [
  { title: '1.e4: Beyazın sistemleri', ids: ['ispanyol', 'sicilya-alapin', 'kapali-sicilya', 'smith-morra'] },
  { title: "1.e4'e karşı savunmalar", ids: ['sicilya-kan', 'fransiz', 'caro-kann', 'iskandinav', 'pirc', 'modern', 'alekhine', 'petrov'] },
  { title: '1.d4', ids: ['vezir-gambiti', 'slav', 'yari-slav', 'nimzo-hint'] },
];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(src, dist, { recursive: true });
cpSync(join(root, 'node_modules', 'chess.js', 'dist', 'esm', 'chess.js'), join(dist, 'chess.js'));
cpSync(join(root, 'node_modules', 'stockfish.js', 'stockfish.js'), join(dist, 'stockfish.js'));

const index = JSON.parse(readFileSync(join(data, 'acilislar.json'), 'utf8'));
const openings = index.map((o) => JSON.parse(readFileSync(join(data, o.file), 'utf8')));
const known = new Set(CATEGORIES.flatMap((c) => c.ids));
const others = openings.filter((o) => !known.has(o.id)).map((o) => o.id);
const categories = others.length ? [...CATEGORIES, { title: 'Diğer', ids: others }] : CATEGORIES;
const statsPath = join(data, 'oynanma.json');
const stats = existsSync(statsPath) ? JSON.parse(readFileSync(statsPath, 'utf8')) : {};
const sources = Object.fromEntries(Object.entries(stats).map(([k, v]) => [k, v.kaynak]));

// Temel varyantlar: uygulamada varsayılan olarak yalnızca bunlar görünür.
// data/temel.json'da listesi olmayan açılışlarda en çok oynanan TEMEL_SAYI varyant seçilir.
const TEMEL_SAYI = 6;
const temel = JSON.parse(readFileSync(join(data, 'temel.json'), 'utf8'));
for (const o of openings) {
  let ids = temel[o.id];
  if (ids) {
    const missing = ids.filter((id) => !o.lines.some((l) => l.id === id));
    if (missing.length) throw new Error(`temel.json: ${o.id} içinde bulunamayan varyant: ${missing.join(', ')}`);
  } else {
    const count = (l) => l.played?.genel?.mac ?? 0;
    ids = [...o.lines].sort((a, b) => count(b) - count(a)).slice(0, TEMEL_SAYI).map((l) => l.id);
  }
  for (const l of o.lines) if (ids.includes(l.id)) l.core = true;
}

const payload = { openings, categories, sources };
writeFileSync(join(dist, 'data.js'), `window.APP_DATA = ${JSON.stringify(payload).replace(/</g, '\\u003c')};\n`);
console.log(`app/dist hazır: ${openings.length} açılış, ${openings.reduce((a, o) => a + o.lines.length, 0)} varyant (${openings.reduce((a, o) => a + o.lines.filter((l) => l.core).length, 0)} temel)`);
