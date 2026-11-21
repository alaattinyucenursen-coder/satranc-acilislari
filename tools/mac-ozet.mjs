// Elle not yazmak için incelenen maçların kısa dökümü (geliştirici aracı).
// Kullanım: node tools/mac-ozet.mjs [açılış-id ...]
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildGame } from './mac-yorum.mjs';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const games = JSON.parse(readFileSync(join(root, 'data', 'ustamaclari.json'), 'utf8'));
const want = process.argv.slice(2);
for (const [key, raw] of Object.entries(games)) {
  const [oid, lid] = key.split('/');
  if (want.length && !want.includes(oid) && !want.includes(key)) continue;
  const op = JSON.parse(readFileSync(join(root, 'data', `${oid}.json`), 'utf8'));
  const line = op.lines.find((l) => l.id === lid);
  const pc = new Map();
  (function w(n) { if (n.comment) pc.set(n.fen.split(' ').slice(0, 4).join(' '), n.comment); n.children.forEach(w); })(op.tree);
  const g = buildGame(raw, line, {}, pc);
  console.log(`\n### ${key} | ${raw.white} (${raw.we}) - ${raw.black} (${raw.be}) ${raw.result} | ${raw.event} ${raw.site} ${raw.date}`);
  console.log(`Varyant: ${line.name}: ${line.moves.join(' ')}`);
  console.log(`Kitap: ${g.book} yarım hamle; ayrılış: varyantta ${g.deviation ?? '-'}`);
  let s = '';
  g.moves.forEach((m, i) => {
    const num = Math.floor(i / 2) + 1;
    const lab = i % 2 === 0 ? `${num}.${m.s}` : `${num}...${m.s}`;
    const ev = typeof m.e === 'number' ? (m.e / 100).toFixed(1) : m.e;
    const tag = ['?!', '?', '??'].includes(m.k) ? m.k : '';
    const best = m.b && tag ? `{${m.b} ${raw.evals[i].pv.slice(0, 4).join(' ')}}` : '';
    s += i < g.book ? `${lab} ` : `${lab}${tag}[${ev}]${best} `;
  });
  console.log(s);
}
