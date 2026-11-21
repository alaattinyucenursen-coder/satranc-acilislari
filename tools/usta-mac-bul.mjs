// Her temel varyant için PGN arşivlerinden aday usta maçlarını bulur.
// Kullanım: node tools/usta-mac-bul.mjs --cikti adaylar.json oyunlar1.pgn [...]
// Maç, varyantın ayırt edici konumundan geçmeli; adaylar varyantın ne kadar derinine
// (konum olarak, hamle sırası farklı olsa da) indiklerine göre sıralanır.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Chess } from 'chess.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const oi = args.indexOf('--cikti');
const outPath = oi >= 0 ? args.splice(oi, 2)[1] : 'adaylar.json';
// --yalniz a/b,c/d : yalnız bu varyantlar; ayırt edici konum şartı yerine varyantın 10. yarım hamlesinden
// sonraki herhangi bir konumdan geçen maçlar aranır (hiç maçı olmayan nadir varyantlar için).
const yi = args.indexOf('--yalniz');
const only = yi >= 0 ? new Set(args.splice(yi, 2)[1].split(',')) : null;
const posKey = (fen) => fen.split(' ').slice(0, 4).join(' ');

const index = JSON.parse(readFileSync(join(root, 'data', 'acilislar.json'), 'utf8'));
const temel = JSON.parse(readFileSync(join(root, 'data', 'temel.json'), 'utf8'));
const targets = [];
let maxPly = 0;
for (const o of index) {
  const op = JSON.parse(readFileSync(join(root, 'data', o.file), 'utf8'));
  let ids = temel[op.id];
  if (!ids) ids = [...op.lines].sort((a, b) => (b.played?.genel?.mac ?? 0) - (a.played?.genel?.mac ?? 0)).slice(0, 6).map((l) => l.id);
  const byId = new Map();
  (function ix(n) { byId.set(n.id, n); n.children.forEach(ix); })(op.tree);
  const paths = op.lines.map((l) => l.leaf.split('.').map((_, i, p) => p.slice(0, i + 1).join('.')));
  for (const [li, l] of op.lines.entries()) {
    if (!ids.includes(l.id)) continue;
    if (only && !only.has(`${op.id}/${l.id}`)) continue;
    const p = paths[li];
    let k = p.findIndex((id) => paths.every((q, qi) => qi === li || !q.includes(id)));
    if (k < 0) k = p.length - 1;
    const keys = new Map(p.map((id, i) => [posKey(byId.get(id).fen), i + 1]));
    maxPly = Math.max(maxPly, p.length);
    targets.push({ opening: op.id, line: l.id, name: l.name, moves: l.moves, len: p.length, distinct: k + 1,
      distinctKey: posKey(byId.get(p[k]).fen), keys, cands: [] });
  }
}
console.error(`${targets.length} temel varyant, en uzun ${maxPly} yarım hamle`);

function stripVariations(t) {
  let out = '', depth = 0;
  for (const ch of t) { if (ch === '(') depth++; else if (ch === ')') depth = Math.max(0, depth - 1); else if (depth === 0) out += ch; }
  return out;
}
const tag = (g, n) => (g.match(new RegExp(`\\[${n} "([^"]*)"\\]`)) || [])[1] ?? '';
const memo = new Map();
const chess = new Chess();
let total = 0;
for (const file of args) {
  const text = readFileSync(file, 'latin1');
  for (const game of text.split(/\n(?=\[Event )/)) {
    if (/\[(SetUp|FEN) /.test(game)) continue;
    const bodyRaw = game.replace(/^\[[^\]]*\]\s*$/gm, '').replace(/\{[^}]*\}/g, ' ').replace(/;[^\n]*/g, ' ').replace(/\$\d+/g, ' ');
    const tokens = (bodyRaw.includes('(') ? stripVariations(bodyRaw) : bodyRaw).split(/\s+/)
      .map((t) => t.replace(/^\d+\.+/, '').replace(/[?!+#]+$/, '')).filter((t) => t && !/^(1-0|0-1|1\/2-1\/2|\*)$/.test(t));
    if (tokens.length < 30) continue;
    total++;
    const seen = new Map();
    let prefix = '', fen = null, live = false;
    for (let i = 0; i < Math.min(tokens.length, maxPly + 10); i++) {
      prefix += ' ' + tokens[i];
      let f = i < 16 ? memo.get(prefix) : undefined;
      if (f === undefined) {
        if (!live) { if (fen) chess.load(fen); else chess.reset(); live = true; }
        try { chess.move(tokens[i]); f = chess.fen(); } catch { f = null; }
        if (i < 16) memo.set(prefix, f);
      } else live = false;
      if (f === null) break;
      fen = f;
      const k = posKey(f);
      if (!seen.has(k)) seen.set(k, i + 1);
    }
    for (const t of targets) {
      if (only) { if (![...t.keys].some(([k, d]) => d > 10 && seen.has(k))) continue; } else if (!seen.has(t.distinctKey)) continue;
      let depth = 0, exact = true;
      for (const [k, d] of t.keys) if (seen.has(k)) { if (d > depth) depth = d; }
      // Tam aynı hamle sırasıyla mı?
      exact = seen.get([...t.keys].find(([, d]) => d === depth)[0]) === depth;
      const we = +tag(game, 'WhiteElo') || 0, be = +tag(game, 'BlackElo') || 0;
      if (t.cands.length > 4000) continue;
      t.cands.push({ depth, exact, file, white: tag(game, 'White'), black: tag(game, 'Black'), we, be,
        result: tag(game, 'Result'), event: tag(game, 'Event'), site: tag(game, 'Site'), date: tag(game, 'Date'), round: tag(game, 'Round'),
        plies: tokens.length, tokens: tokens.join(' ') });
    }
  }
  console.error(`${file}: ${total} maç`);
}
// Hızlı oyun ve çevrim içi turnuvalar yerine klasik tempolu turnuva maçları tercih edilir.
const FAST = /bullet|blitz|titled|online|rapid|active|speed|armageddon|blind|simul|lichess|chess\.com|banter|pro league|tour final|champions chess|meltwater|\bcct\b|\bncl\b|\bSCO\b|PNWCC|airthings|opera euro|magnus|julius|ftx|chessable|aimchess|goldmoney|skilling|lindores|960|freestyle|random|tiebreak|tie-break|playoff|\bblz\b|\brpd\b/i;
const out = targets.map((t) => {
  const score = (c) => c.depth * 100 + (c.exact ? 30 : 0) + (FAST.test(c.event + ' ' + c.site) ? 0 : 250) + (c.result !== '1/2-1/2' ? 40 : 0) +
    (c.plies >= 50 && c.plies <= 120 ? 20 : c.plies > 160 ? -40 : 0) + (c.we + c.be) / 40;
  for (const c of t.cands) c.score = Math.round(score(c));
  t.cands.sort((a, b) => score(b) - score(a));
  return { opening: t.opening, line: t.line, name: t.name, moves: t.moves, len: t.len, distinct: t.distinct, count: t.cands.length, cands: t.cands.slice(0, 12) };
});
writeFileSync(outPath, JSON.stringify(out, null, 1));
for (const t of out) console.log(`${t.opening}/${t.line}\tlen ${t.len}\tn=${t.count}\tbest=${t.cands[0] ? t.cands[0].depth + (t.cands[0].exact ? '' : '~') + ' ' + t.cands[0].white + '-' + t.cands[0].black + ' ' + t.cands[0].date.slice(0, 4) : '-'}`);
