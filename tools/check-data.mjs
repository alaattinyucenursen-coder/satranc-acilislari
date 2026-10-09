// Veri doğrulama: PGN'ler geçerli mi, her hamlenin açıklaması var mı, alıştırma hatları yasal mı?
// Çalıştırma: node tools/check-data.mjs
import { Chess } from '../vendor/chess.js';
import MODULES from '../data/modules.js';

let errors = 0;
const fail = (msg) => { errors++; console.error('HATA:', msg); };

const ids = new Set();
for (const MODULE of MODULES) for (const g of MODULE.games) {
  const c = new Chess();
  try { c.loadPgn(g.pgn); } catch (e) { fail(`${g.id}: PGN okunamadı: ${e.message}`); continue; }
  const hist = c.history();
  const keys = hist.map((_, i) => `${Math.floor(i / 2) + 1}${i % 2 ? 'b' : 'w'}`);
  for (const k of keys) if (!g.notes[k]) fail(`${g.id}: ${k} hamlesinin açıklaması yok`);
  for (const k of Object.keys(g.notes)) if (!keys.includes(k)) fail(`${g.id}: fazladan açıklama ${k}`);
  for (const cr of g.critical) if (!keys.includes(cr.move)) fail(`${g.id}: kritik an ${cr.move} maçta yok`);
  const result = g.pgn.trim().split(/\s+/).pop();
  if (result !== g.result) fail(`${g.id}: sonuç uyuşmuyor`);
  const want = MODULE.side === 'b' ? '0-1' : '1-0';
  if (g.result !== want) fail(`${g.id}: sonuç ${want} olmalı (${MODULE.name})`);
  for (const e of g.exercises) {
    if (ids.has(e.id)) fail(`${e.id}: alıştırma kimliği tekrar ediyor`);
    ids.add(e.id);
    const x = new Chess(e.fen);
    for (const san of e.line) {
      try { x.move(san); } catch { fail(`${e.id}: ${san} yasal değil`); break; }
    }
  }
  console.log(`${g.id}: ${hist.length} yarım hamle, ${g.exercises.length} alıştırma`);
}
if (errors) { console.error(`${errors} hata`); process.exit(1); }
console.log('Tüm veriler geçerli.');
