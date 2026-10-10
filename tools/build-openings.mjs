// Kaynak varyant dosyalarını (data/kaynak/*.json) okur, her hamleyi chess.js ile
// doğrular ve iki çıktı üretir:
//   data/<id>.json  -> etkileşimli tahta ve antrenman modu için varyant ağacı
//   data/<id>.pgn   -> her varyant ayrı bir oyun (Lichess çalışmasına aktarılabilir)
// Kullanım: npm run build   (yalnızca doğrulamak için: npm run check)
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Chess } from 'chess.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'data', 'kaynak');
const outDir = join(root, 'data');
const checkOnly = process.argv.includes('--check');

// tools/oynanma-say.mjs ile üretilen oynanma sayıları (varsa). Varyantlar bu sayılara
// göre sıralanır: önce "genel" veritabanı, eşitlikte "usta".
const statsPath = join(outDir, 'oynanma.json');
const stats = existsSync(statsPath) ? JSON.parse(readFileSync(statsPath, 'utf8')) : {};
const DB_ORDER = ['genel', 'usta'];

function lineStats(openingId, lineId) {
  const out = {};
  for (const [db, data] of Object.entries(stats)) {
    const s = data.acilislar?.[openingId]?.varyantlar?.[lineId];
    if (s) out[db] = s;
  }
  return Object.keys(out).length ? out : undefined;
}

function sortByPlayed(src) {
  const key = (l) => DB_ORDER.map((db) => lineStats(src.id, l.id)?.[db]?.mac ?? -1);
  const keys = new Map(src.lines.map((l) => [l.id, key(l)]));
  const cmp = (a, b) => {
    const ka = keys.get(a.id);
    const kb = keys.get(b.id);
    for (let i = 0; i < ka.length; i++) if (ka[i] !== kb[i]) return kb[i] - ka[i];
    return 0;
  };
  return { ...src, lines: [...src.lines].sort(cmp) };
}

const START_FEN = new Chess().fen();
const SYMBOL_RE = /(\?\?|\?!|!\?|!!|\?|!)$/;

// "1.d4 d5 2.c4 e6" -> [{ san, symbol }]
function parseMoves(text) {
  return text
    .split(/\s+/)
    .map((t) => t.replace(/^\d+\.(\.\.)?/, ''))
    .filter(Boolean)
    .map((t) => {
      const m = t.match(SYMBOL_RE);
      return { san: m ? t.slice(0, -m[1].length) : t, symbol: m ? m[1] : undefined };
    });
}

// ply 0 -> "1.d4", ply 1 -> "1...d5"
function moveLabel(ply, san) {
  const n = Math.floor(ply / 2) + 1;
  return ply % 2 === 0 ? `${n}.${san}` : `${n}...${san}`;
}

// Aynı düğüme iki farklı değer yazılmasını hata sayar.
function setOnce(node, key, value, where) {
  if (value === undefined) return;
  if (node[key] !== undefined && JSON.stringify(node[key]) !== JSON.stringify(value)) {
    throw new Error(`${where}: "${key}" çakışması (${JSON.stringify(node[key])} / ${JSON.stringify(value)})`);
  }
  node[key] = value;
}

function build(src) {
  const tree = { id: 'root', fen: START_FEN, children: [] };
  const lines = [];
  const seenIds = new Set();

  for (const line of src.lines) {
    if (seenIds.has(line.id)) throw new Error(`Yinelenen varyant id: ${line.id}`);
    seenIds.add(line.id);

    const chess = new Chess();
    const usedLabels = new Set();
    let node = tree;
    const sans = [];

    parseMoves(line.moves).forEach(({ san, symbol }, ply) => {
      let move;
      try {
        move = chess.move(san);
      } catch {
        throw new Error(`${line.id}: geçersiz hamle ${moveLabel(ply, san)} (FEN: ${chess.fen()})`);
      }
      if (move.san !== san) {
        throw new Error(`${line.id}: ${moveLabel(ply, san)} standart SAN değil, "${move.san}" yazılmalı`);
      }
      const uci = move.from + move.to + (move.promotion ?? '');
      let child = node.children.find((c) => c.uci === uci);
      if (!child) {
        child = {
          id: node.id === 'root' ? uci : `${node.id}.${uci}`,
          ply: ply + 1,
          moveNumber: Math.floor(ply / 2) + 1,
          color: ply % 2 === 0 ? 'w' : 'b',
          san,
          uci,
          fen: chess.fen(),
          children: [],
        };
        node.children.push(child);
      }
      const label = moveLabel(ply, san);
      usedLabels.add(label);
      setOnce(child, 'symbol', symbol, `${line.id} ${label}`);
      setOnce(child, 'comment', line.comments?.[label], `${line.id} ${label}`);
      setOnce(child, 'opening', line.names?.[label], `${line.id} ${label}`);
      sans.push(san);
      node = child;
    });

    for (const label of [...Object.keys(line.comments ?? {}), ...Object.keys(line.names ?? {})]) {
      if (!usedLabels.has(label)) throw new Error(`${line.id}: "${label}" bu varyantta geçmiyor`);
    }
    if (node.children.length > 0 || lines.some((l) => l.leaf === node.id)) {
      throw new Error(`${line.id}: başka bir varyantın içinde bitiyor`);
    }

    lines.push({
      id: line.id,
      group: line.group,
      name: line.name,
      eco: line.eco,
      trap: Boolean(line.trap),
      moves: sans,
      leaf: node.id,
      played: lineStats(src.id, line.id),
    });
  }

  return {
    id: src.id,
    name: src.name,
    eco: src.eco,
    description: src.description,
    played: Object.keys(stats).length
      ? Object.fromEntries(
          Object.entries(stats).map(([db, d]) => [db, { source: d.kaynak, base: d.acilislar?.[src.id]?.taban, total: d.acilislar?.[src.id]?.toplam, other: d.acilislar?.[src.id]?.diger }]),
        )
      : undefined,
    startFen: START_FEN,
    lines,
    tree,
  };
}

function pgnEscape(text) {
  return text.replace(/[{}]/g, '');
}

function toPgn(opening) {
  const byId = new Map();
  (function index(n) {
    byId.set(n.id, n);
    n.children.forEach(index);
  })(opening.tree);

  return opening.lines
    .map((line) => {
      const ids = line.leaf.split('.').map((_, i, parts) => parts.slice(0, i + 1).join('.'));
      const tokens = ids.map((id) => {
        const n = byId.get(id);
        const num = n.color === 'w' ? `${n.moveNumber}. ` : '';
        const comment = n.comment ? ` {${pgnEscape(n.comment)}}` : '';
        // Yorumdan sonra gelen siyah hamle numarasını tekrar yaz (PGN okunabilirliği için).
        return { text: `${num}${n.san}${n.symbol ?? ''}${comment}`, comment: Boolean(n.comment), n };
      });
      let body = '';
      tokens.forEach((t, i) => {
        const prev = tokens[i - 1];
        if (t.n.color === 'b' && prev?.comment) body += `${t.n.moveNumber}... `;
        body += t.text + ' ';
      });
      const headers = [
        ['Event', line.name],
        ['Site', '?'],
        ['Date', '????.??.??'],
        ['Round', '-'],
        ['White', '?'],
        ['Black', '?'],
        ['Result', '*'],
        ['ECO', line.eco],
        ['Opening', line.name],
      ];
      return headers.map(([k, v]) => `[${k} "${v}"]`).join('\n') + '\n\n' + body + '*\n';
    })
    .join('\n');
}

let failed = false;
const index = [];
for (const file of readdirSync(srcDir).filter((f) => f.endsWith('.json'))) {
  try {
    const src = JSON.parse(readFileSync(join(srcDir, file), 'utf8'));
    // En çok oynanan varyant önce gelsin (ağaçta da ilk çocuk = en çok oynanan devam).
    const opening = build(sortByPlayed(src));
    if (!checkOnly) {
      writeFileSync(join(outDir, `${opening.id}.json`), JSON.stringify(opening, null, 2) + '\n');
      writeFileSync(join(outDir, `${opening.id}.pgn`), toPgn(opening));
    }
    index.push({ id: opening.id, name: opening.name, eco: opening.eco, file: `${opening.id}.json` });
    let nodes = 0;
    (function count(n) {
      nodes += n.children.length;
      n.children.forEach(count);
    })(opening.tree);
    console.log(`✓ ${file}: ${opening.lines.length} varyant, ${nodes} hamle düğümü`);
  } catch (err) {
    failed = true;
    console.error(`✗ ${file}: ${err.message}`);
  }
}
// Uygulamanın hangi açılışların olduğunu bilmesi için liste.
if (!checkOnly && !failed) writeFileSync(join(outDir, 'acilislar.json'), JSON.stringify(index, null, 2) + '\n');
process.exit(failed ? 1 : 0);
