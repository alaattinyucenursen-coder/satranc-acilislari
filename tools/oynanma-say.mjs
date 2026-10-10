// Bir PGN oyun arşivinden her varyantın kaç maçta oynandığını sayar ve
// data/oynanma.json dosyasına yazar. build-openings.mjs bu dosyayı okuyup
// varyantları oynanma sayısına göre sıralar.
//
// Kullanım:
//   node tools/oynanma-say.mjs --ad usta --kaynak "Açıklama" oyunlar1.pgn [oyunlar2.pgn ...]
// Aynı dosyada birden çok veritabanı tutulabilir; her biri --ad ile ayrılır.
//
// Nasıl sayılır:
// - Bir varyantın "belirleyici hamlesi", onu diğer varyantlardan ayıran ilk hamledir;
//   varyantın adı daha ileride bir hamleye bağlıysa (ör. Marshall Gambiti 4.e4) o hamle kullanılır.
// - Sayım konuma göredir: maç, belirleyici hamleden önceki ve sonraki konumların ikisinden de
//   geçtiyse sayılır. Böylece hamle sırası farklı olan maçlar da sayılır (ör. 1.d4 Nf6 2.c4 e6
//   3.Nf3 d5 4.Nc3 Bb4 bir Ragozin'dir), ama başka bir açılıştan aynı konuma düşen maçlar
//   (ör. Fransız Savunması'ndan Alapin'e geçiş) yalnızca o hamle gerçekten oynandıysa sayılır.
// - Her maç en fazla bir varyanta sayılır: birden çok varyantın belirleyici hamlesinden
//   geçtiyse (hamle sırası değişikliğiyle), en derindeki varyanta yazılır.
// - Oran = varyantın maçı / açılıştaki varyantların toplam maçı; böylece bir açılışın
//   varyant oranlarının toplamı %100 olur.
// - "taban": bütün varyantların ortak başlangıç konumuna ulaşan ya da varyantlardan birine
//   giren maçlar; "diger": bunlardan listedeki hiçbir varyanta girmeyenler (bilgi için).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Chess } from 'chess.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
function takeOpt(name) {
  const i = args.indexOf(name);
  return i >= 0 ? args.splice(i, 2)[1] : undefined;
}
const dbName = takeOpt('--ad');
const sourceLabel = takeOpt('--kaynak') ?? '';
const outPath = takeOpt('--cikti') ?? join(root, 'data', 'oynanma.json');
const files = args;
if (!dbName || files.length === 0) {
  console.error('Kullanım: node tools/oynanma-say.mjs --ad usta --kaynak "Açıklama" oyunlar.pgn ...');
  process.exit(1);
}

const posKey = (fen) => fen.split(' ').slice(0, 4).join(' ');
const label = (n) => (n.color === 'w' ? `${n.moveNumber}.${n.san}` : `${n.moveNumber}...${n.san}`);

// Açılış ağaçlarını oku; her varyant için belirleyici düğümü ve ortak tabanı bul.
const index = JSON.parse(readFileSync(join(root, 'data', 'acilislar.json'), 'utf8'));
const openings = index.map((o) => JSON.parse(readFileSync(join(root, 'data', o.file), 'utf8')));
let maxPly = 0;
const plan = openings.map((op) => {
  const byId = new Map();
  (function ix(n) {
    byId.set(n.id, n);
    n.children.forEach(ix);
  })(op.tree);
  const paths = op.lines.map((l) => l.leaf.split('.').map((_, i, p) => p.slice(0, i + 1).join('.')));
  let common = 0;
  while (paths.every((p) => p[common] && p[common] === paths[0][common])) common++;
  const base = common === 0 ? null : byId.get(paths[0][common - 1]);
  const lines = op.lines.map((l, li) => {
    const p = paths[li];
    let k = p.findIndex((id) => paths.every((q, qi) => qi === li || !q.includes(id)));
    // Adı daha ileride verilen bir hamleye bağlıysa onu kullan (yalnızca bu varyanta özgü düğümlerde).
    for (let j = p.length - 1; j > k; j--) {
      if (byId.get(p[j]).opening) {
        k = j;
        break;
      }
    }
    const node = byId.get(p[k]);
    const prev = k === 0 ? op.tree : byId.get(p[k - 1]);
    maxPly = Math.max(maxPly, node.ply);
    return { id: l.id, node, key: posKey(node.fen), prevKey: posKey(prev.fen) };
  });
  return { op, base, baseKey: base ? posKey(base.fen) : null, lines, counts: new Map(), baseGames: 0 };
});

// Kısa hamle dizileri çok tekrarlandığı için ilk hamlelerin konumlarını önbelleğe al.
const MEMO_PLY = 14;
const memo = new Map();
const chess = new Chess();

function positions(tokens) {
  const keys = [];
  let prefix = '';
  let fen = null;
  let live = false; // chess nesnesi şu anki konumda mı
  for (let i = 0; i < Math.min(tokens.length, maxPly + 8); i++) {
    prefix += ' ' + tokens[i];
    const cached = i < MEMO_PLY ? memo.get(prefix) : undefined;
    if (cached !== undefined) {
      if (cached === null) break;
      fen = cached;
      live = false;
      keys.push(posKey(fen));
      continue;
    }
    if (!live) {
      if (fen) chess.load(fen);
      else chess.reset();
      live = true;
    }
    try {
      chess.move(tokens[i]);
    } catch {
      if (i < MEMO_PLY) memo.set(prefix, null);
      break;
    }
    fen = chess.fen();
    if (i < MEMO_PLY) memo.set(prefix, fen);
    keys.push(posKey(fen));
  }
  return keys;
}

function stripVariations(t) {
  let out = '';
  let depth = 0;
  for (const ch of t) {
    if (ch === '(') depth++;
    else if (ch === ')') depth = Math.max(0, depth - 1);
    else if (depth === 0) out += ch;
  }
  return out;
}

let total = 0;
for (const file of files) {
  const text = readFileSync(file, 'latin1');
  for (const game of text.split(/\n(?=\[Event )/)) {
    if (/\[(SetUp|FEN) /.test(game)) continue;
    const body = game
      .replace(/^\[[^\]]*\]\s*$/gm, '')
      .replace(/\{[^}]*\}/g, ' ')
      .replace(/;[^\n]*/g, ' ')
      .replace(/\$\d+/g, ' ');
    const tokens = (body.includes('(') ? stripVariations(body) : body)
      .split(/\s+/)
      .map((t) => t.replace(/^\d+\.+/, '').replace(/[?!+#]+$/, ''))
      .filter((t) => t && !/^(1-0|0-1|1\/2-1\/2|\*)$/.test(t));
    if (tokens.length === 0) continue;
    total++;
    // Şah işaretleri silindiği için chess.js'in kabul ettiği biçim: "+" olmadan da SAN geçerli.
    const keys = positions(tokens);
    if (keys.length === 0) continue;
    const seen = new Set(keys);
    for (const p of plan) {
      let best = null;
      for (const l of p.lines) {
        if (seen.has(l.key) && seen.has(l.prevKey) && (!best || l.node.ply > best.node.ply)) best = l;
      }
      if (best) p.counts.set(best.id, (p.counts.get(best.id) ?? 0) + 1);
      if (best || !p.baseKey || seen.has(p.baseKey)) p.baseGames++;
    }
  }
  console.error(`${file}: toplam ${total} maç tarandı`);
}

const out = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : {};
out[dbName] = { kaynak: sourceLabel, macSayisi: total, acilislar: {} };
for (const p of plan) {
  const baseMoves = p.base ? p.base.id.split('.').length : 0;
  const assigned = [...p.counts.values()].reduce((a, b) => a + b, 0);
  out[dbName].acilislar[p.op.id] = {
    taban: { hamleler: p.op.lines[0].moves.slice(0, baseMoves).join(' '), mac: p.baseGames },
    toplam: assigned,
    diger: p.baseGames - assigned,
    varyantlar: Object.fromEntries(
      p.lines.map(({ id, node }) => {
        const games = p.counts.get(id) ?? 0;
        return [id, { mac: games, oran: assigned ? Math.round((games / assigned) * 10000) / 100 : 0, hamle: label(node) }];
      }),
    ),
  };
  console.error(`${p.op.id}: ${assigned} maç varyantlarda, taban ${p.baseGames}`);
}
writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
console.error(`${outPath} yazıldı (${dbName})`);
