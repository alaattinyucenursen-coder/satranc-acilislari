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
  { title: '1.e4: Beyazın sistemleri', ids: ['ispanyol', 'sicilya-alapin', 'smith-morra'] },
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

const payload = { openings, categories, sources };
writeFileSync(join(dist, 'data.js'), `window.APP_DATA = ${JSON.stringify(payload).replace(/</g, '\\u003c')};\n`);
console.log(`app/dist hazır: ${openings.length} açılış, ${openings.reduce((a, o) => a + o.lines.length, 0)} varyant`);
