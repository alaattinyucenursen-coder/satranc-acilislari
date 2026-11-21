// Seçilen usta maçlarını Stockfish ile hamle hamle inceler ve data/ustamaclari.json dosyasını yazar.
// Kullanım: STOCKFISH=/yol/stockfish node tools/mac-incele.mjs secim.json [--dugum 1000000] [--paralel 4]
// secim.json: [{ opening, line, white, black, we, be, event, site, date, round, result, tokens }]
// Her konum için motorun en iyi hamlesi, değerlendirmesi ve ana devamı kaydedilir;
// app tarafında (tools/build-app.mjs) bunlardan Türkçe hamle yorumları üretilir.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Chess } from 'chess.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args.splice(i, 2)[1] : d; };
const NODES = +opt('--dugum', 1000000);
const BOOK_NODES = Math.round(NODES / 3);
const PAR = +opt('--paralel', 4);
const outPath = opt('--cikti', join(root, 'data', 'ustamaclari.json'));
const sel = JSON.parse(readFileSync(args[0], 'utf8'));
const SF = process.env.STOCKFISH || 'stockfish';

function makeEngine() {
  const p = spawn(SF, [], { stdio: ['pipe', 'pipe', 'inherit'] });
  let buf = '', waiter = null, lines = [];
  p.stdout.on('data', (d) => {
    buf += d;
    let i;
    while ((i = buf.indexOf('\n')) >= 0) {
      const l = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
      lines.push(l);
      if (waiter && waiter.test(l)) { const w = waiter; waiter = null; const out = lines; lines = []; w.resolve(out); }
    }
  });
  const send = (s) => p.stdin.write(s + '\n');
  const until = (re) => new Promise((resolve) => { waiter = { test: (l) => re.test(l), resolve }; });
  return {
    async init() { send('uci'); await until(/^uciok/); send('setoption name Threads value 1'); send('setoption name Hash value 64'); send('isready'); await until(/^readyok/); },
    async newGame() { send('ucinewgame'); send('isready'); await until(/^readyok/); },
    async analyse(fen, nodes) {
      send(`position fen ${fen}`); send(`go nodes ${nodes}`);
      const out = await until(/^bestmove/);
      const info = out.filter((l) => l.startsWith('info') && l.includes(' pv ') && !l.includes('lowerbound') && !l.includes('upperbound')).pop();
      const best = out[out.length - 1].split(' ')[1];
      if (!info) return { best: null };
      const cp = info.match(/ score cp (-?\d+)/), mate = info.match(/ score mate (-?\d+)/);
      return { best, depth: +info.match(/ depth (\d+)/)[1], cp: cp ? +cp[1] : null, mate: mate ? +mate[1] : null, pv: info.split(' pv ')[1].split(' ').slice(0, 8) };
    },
    quit() { send('quit'); },
  };
}

// Varyantın hamleleri (kitap kısmını işaretlemek için).
const lineMoves = new Map();
for (const o of JSON.parse(readFileSync(join(root, 'data', 'acilislar.json'), 'utf8'))) {
  const op = JSON.parse(readFileSync(join(root, 'data', o.file), 'utf8'));
  for (const l of op.lines) lineMoves.set(`${op.id}/${l.id}`, l);
}

async function analyseGame(eng, g) {
  await eng.newGame();
  const c = new Chess();
  const fens = [c.fen()], moves = [];
  for (const t of g.tokens) { const m = c.move(t); moves.push({ san: m.san, uci: m.from + m.to + (m.promotion || '') }); fens.push(c.fen()); }
  // Kitap: oyunun varyantla aynı konumları izlediği ilk yarım hamleler.
  const line = lineMoves.get(`${g.opening}/${g.line}`);
  const lc = new Chess(); const lineFens = new Set([lc.fen().split(' ').slice(0, 4).join(' ')]);
  for (const s of line.moves) { lc.move(s); lineFens.add(lc.fen().split(' ').slice(0, 4).join(' ')); }
  let book = 0;
  for (let i = 1; i < fens.length; i++) if (lineFens.has(fens[i].split(' ').slice(0, 4).join(' '))) book = i;
  const evals = [];
  for (let i = 0; i < fens.length; i++) {
    const ch = new Chess(fens[i]);
    if (ch.isGameOver()) { evals.push(ch.isCheckmate() ? { mate: 0, side: ch.turn() } : { cp: 0, over: true }); continue; }
    const r = await eng.analyse(fens[i], i < book ? BOOK_NODES : NODES);
    const sign = fens[i].split(' ')[1] === 'w' ? 1 : -1;
    let pvSan = [];
    try { const pc = new Chess(fens[i]); pvSan = r.pv.map((u) => pc.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }).san); } catch { /* yarım kalsın */ }
    evals.push({ cp: r.cp == null ? undefined : sign * r.cp, mate: r.mate == null ? undefined : sign * r.mate, best: r.best, pv: pvSan, depth: r.depth });
  }
  return { ...g, tokens: undefined, book, moves, evals };
}

const results = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : {};
const queue = sel.filter((g) => !results[`${g.opening}/${g.line}`] || results[`${g.opening}/${g.line}`].white !== g.white || results[`${g.opening}/${g.line}`].date !== g.date);
console.error(`${queue.length} maç incelenecek (${NODES} düğüm/konum, ${PAR} paralel)`);
let done = 0;
await Promise.all(Array.from({ length: PAR }, async () => {
  const eng = makeEngine(); await eng.init();
  while (queue.length) {
    const g = queue.shift();
    results[`${g.opening}/${g.line}`] = await analyseGame(eng, g);
    done++;
    console.error(`[${done}] ${g.opening}/${g.line}: ${g.white} - ${g.black}`);
    writeFileSync(outPath, JSON.stringify(results));
  }
  eng.quit();
}));
writeFileSync(outPath, JSON.stringify(results));
