// Usta maçlarının hamle yorumlarını üretir.
// Girdi: tools/mac-incele.mjs çıktısındaki bir maç (hamleler + motor değerlendirmeleri),
// varyantın kendisi (kitap hamlelerinin açıklamaları için) ve elle yazılmış notlar.
// Çıktı: uygulamanın gösterdiği sade maç nesnesi; her yarım hamle için etiket ve Türkçe açıklama.
//
// Her hamlenin açıklaması üç katmandan oluşur:
//  1. Elle yazılmış not (varsa): planlar, amaçlar, kritik anlar.
//  2. Hamlenin amacı: konumdan çıkarılan olgular (gelişim, rok, merkez, saldırılan taşlar,
//     tehditler, açık hat, piyon kırılması, geçer piyon...). Kitap hamlelerinde varyantın açıklaması.
//  3. Motorun görüşü: değerlendirme, hamlenin kalitesi, daha iyi devam ve rakibin en iyi cevabı.
import { Chess } from 'chess.js';

const NAME = { p: 'piyon', n: 'at', b: 'fil', r: 'kale', q: 'vezir', k: 'şah' };
const ACC = { p: 'piyonu', n: 'atı', b: 'fili', r: 'kaleyi', q: 'veziri', k: 'şahı' };
const VAL = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 100 };
const SIDE = { w: 'Beyaz', b: 'Siyah' };
const SIDE_GEN = { w: 'Beyazın', b: 'Siyahın' };
// Kare adının sonuna gelen ekler (sayının Türkçe okunuşuna göre).
const LOC = { 1: "'deki", 2: "'deki", 3: "'teki", 4: "'teki", 5: "'teki", 6: "'daki", 7: "'deki", 8: "'deki" };
const DAT = { 1: "'e", 2: "'ye", 3: "'e", 4: "'e", 5: "'e", 6: "'ya", 7: "'ye", 8: "'e" };
const LOCA = { 1: "'de", 2: "'de", 3: "'te", 4: "'te", 5: "'te", 6: "'da", 7: "'de", 8: "'de" };
const loc = (sq) => sq + LOC[sq[1]];
const dat = (sq) => sq + DAT[sq[1]];
const at = (sq) => sq + LOCA[sq[1]];
const other = (c) => (c === 'w' ? 'b' : 'w');
const FILES = 'abcdefgh';

export function winPct(e, turnAfterMate) {
  if (e.mate !== undefined && e.mate !== null) {
    if (e.mate === 0) return turnAfterMate === 'w' ? 0 : 100;
    return e.mate > 0 ? 100 : 0;
  }
  const cp = Math.max(-2000, Math.min(2000, e.cp ?? 0));
  return 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * cp)) - 1);
}
export function fmtEval(e) {
  if (e.mate !== undefined && e.mate !== null) return e.mate === 0 ? 'mat' : `${e.mate > 0 ? '+' : '−'}M${Math.abs(e.mate)}`;
  const v = (e.cp ?? 0) / 100;
  return (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(1);
}
function evalWords(e) {
  if (e.mate !== undefined && e.mate !== null) {
    if (e.mate === 0) return 'mat';
    return `${e.mate > 0 ? 'Beyaz' : 'Siyah'} ${Math.abs(e.mate)} hamlede mat ediyor`;
  }
  const cp = e.cp ?? 0, a = Math.abs(cp), s = cp > 0 ? 'Beyaz' : 'Siyah';
  if (a < 35) return 'denge';
  if (a < 90) return `${s} biraz daha rahat`;
  if (a < 180) return `${s} belirgin üstün`;
  if (a < 400) return `${s} büyük avantajlı`;
  return `${s} kazanıyor`;
}

function material(ch) {
  const m = { w: 0, b: 0 }, cnt = { w: {}, b: {} };
  for (const row of ch.board()) for (const p of row) if (p && p.type !== 'k') { m[p.color] += VAL[p.type]; cnt[p.color][p.type] = (cnt[p.color][p.type] || 0) + 1; }
  return { m, cnt };
}
function materialWords(ch) {
  const { m, cnt } = material(ch);
  const d = m.w - m.b;
  if (d === 0) {
    const minorsW = (cnt.w.n || 0) + (cnt.w.b || 0), minorsB = (cnt.b.n || 0) + (cnt.b.b || 0);
    if ((cnt.w.r || 0) !== (cnt.b.r || 0) && minorsW !== minorsB) return 'Malzeme sayıca eşit ama dengesiz (kale karşılığı hafif taş ve piyonlar).';
    return '';
  }
  const s = d > 0 ? 'Beyaz' : 'Siyah', a = Math.abs(d);
  const what = a === 1 ? 'bir piyon' : a === 2 ? 'iki piyon' : a === 3 ? 'bir hafif taş kadar' : a === 5 ? 'bir kale kadar' : `${a} piyon değerinde`;
  return `Malzeme: ${s} ${what} önde.`;
}

// Bir karedeki taşı kimler tehdit ediyor, kimler koruyor.
function attackersOf(ch, sq, color) {
  try { return ch.attackers(sq, color); } catch { return []; }
}
function pieceAt(ch, sq) { return ch.get(sq) || null; }
// Taş tehlikede mi: korumasız saldırı altında ya da daha değersiz bir taşın saldırısında.
function hanging(ch, sq) {
  const p = pieceAt(ch, sq);
  if (!p || p.type === 'k') return false;
  const att = attackersOf(ch, sq, other(p.color));
  if (!att.length) return false;
  const minAtt = Math.min(...att.map((s) => VAL[ch.get(s).type]));
  if (minAtt < VAL[p.type]) return true;
  const def = attackersOf(ch, sq, p.color);
  return def.length === 0;
}
function squaresOf(ch, color) {
  const out = [];
  ch.board().forEach((row, r) => row.forEach((p, f) => { if (p && p.color === color) out.push({ sq: FILES[f] + (8 - r), ...p }); }));
  return out;
}
// Hamleyi yapan tarafın, karşı taraf hamle sırasındaymış gibi saldırdığı kareler.
function attacksFrom(ch, sq) {
  // chess.js'te doğrudan "bu taş neye saldırıyor" yok; bütün karelerde attackers ile bakarız.
  const out = [];
  for (const f of FILES) for (let r = 1; r <= 8; r++) {
    const t = f + r;
    if (attackersOf(ch, t, ch.get(sq).color).includes(sq)) out.push(t);
  }
  return out;
}
function kingSq(ch, color) {
  for (const p of squaresOf(ch, color)) if (p.type === 'k') return p.sq;
  return null;
}
function fileState(ch, file, color) {
  let own = 0, opp = 0;
  for (let r = 1; r <= 8; r++) { const p = ch.get(file + r); if (p && p.type === 'p') (p.color === color ? own++ : opp++); }
  if (!own && !opp) return 'açık';
  if (!own) return 'yarı açık';
  return null;
}
function isPassed(ch, sq, color) {
  const f = FILES.indexOf(sq[0]), r = +sq[1];
  for (let df = -1; df <= 1; df++) {
    const ff = FILES[f + df];
    if (!ff) continue;
    for (let rr = 1; rr <= 8; rr++) {
      if (color === 'w' ? rr <= r : rr >= r) continue;
      const p = ch.get(ff + rr);
      if (p && p.type === 'p' && p.color !== color) return false;
    }
  }
  return true;
}

function describeMove(before, after, m, ctx) {
  const c = m.color, opp = other(c), parts = [];
  const piece = m.piece, ply = ctx.ply;
  const castled = ctx.castled;
  // Alış
  if (m.flags.includes('k')) parts.push('Kısa rok: şah güvenli köşeye geçer, h1/h8 kalesi oyuna girer.'.replace('h1/h8', c === 'w' ? 'h1' : 'h8'));
  else if (m.flags.includes('q')) parts.push(`Uzun rok: şah vezir kanadına geçer, kale ${c === 'w' ? 'd1' : 'd8'}'de merkez hattına gelir. Şahlar farklı kanatlardaysa iki taraf da piyonlarıyla rakip şaha yüklenebilir.`);
  else if (m.captured) {
    const recapture = ctx.prev && ctx.prev.to === m.to && ctx.prev.captured;
    const capName = m.flags.includes('e') ? 'piyonu (geçerken alma)' : ACC[m.captured];
    if (recapture) parts.push(`${NAME[piece][0].toUpperCase() + NAME[piece].slice(1)} ${at(m.to)} geri alır${m.captured === ctx.prev.piece ? '; değişim tamamlanır.' : ` (${ACC[m.captured]}).`}`);
    else parts.push(`${loc(m.to)} ${capName} alır.`);
  } else if (piece === 'p') {
    const file = m.to[0], rank = +m.to[1];
    const rel = c === 'w' ? rank : 9 - rank;
    const tgt = [-1, 1].map((d) => FILES[FILES.indexOf(file) + d]).filter(Boolean).map((f) => f + (c === 'w' ? rank + 1 : rank - 1)).filter((s) => { const p = after.get(s); return p && p.color === opp; });
    const attackedPawn = tgt.filter((s) => after.get(s).type === 'p');
    const attackedPiece = tgt.filter((s) => after.get(s).type !== 'p');
    if (attackedPiece.length >= 2) parts.push(`Piyon çatalı: ${attackedPiece.map((s) => loc(s) + ' ' + NAME[after.get(s).type]).join(' ve ')} aynı anda saldırı altında.`);
    else if (attackedPiece.length) parts.push(`Piyon ${loc(attackedPiece[0])} ${ACC[after.get(attackedPiece[0]).type]} kovalar; taş yerini değiştirmek zorunda.`);
    else if (attackedPawn.length) parts.push(`Piyon kırılması: ${loc(attackedPawn[0])} piyona dokunarak hatları açmayı ve rakibin piyon zincirini sorgulamayı amaçlar.`);
    else if (isPassed(after, m.to, c) && rel >= 5) parts.push(`Geçer piyon ilerliyor: önünde onu durduracak piyon yok, ${rel >= 6 ? 'terfi tehdidi giderek büyüyor' : 'rakip taşları onu durdurmakla meşgul olacak'}.`);
    else if ((file === 'd' || file === 'e') && ply < 30) parts.push('Merkezde yer kazanır, taşların arkasından gelişmesine alan açar.');
    else if ((file === 'c' || file === 'f') && ply < 30) parts.push(`Yan piyonla merkeze (${file === 'c' ? 'd4/d5' : 'e4/e5'} karelerine) etki eder.`);
    else if (castled[c] && ((castled[c] === 'k' && 'fgh'.includes(file)) || (castled[c] === 'q' && 'abc'.includes(file))) && Math.abs(m.to[1] - m.from[1]) === 1 && (file === 'h' || file === 'a')) parts.push('Şaha kaçış karesi (luft) açar ve arka yatay matlarını önler; ayrıca g4/g5 kareleri kontrol altına girer.'.replace('g4/g5 kareleri', file === 'h' ? (c === 'w' ? 'g4' : 'g5') + ' karesi' : (c === 'w' ? 'b4' : 'b5') + ' karesi'));
    else if (castled[opp] && ((castled[opp] === 'k' && 'fgh'.includes(file)) || (castled[opp] === 'q' && 'abc'.includes(file)))) parts.push('Rakip şahın bulunduğu kanatta piyon hücumu: hatları açıp saldırıya zemin hazırlar.');
    else if ('ab'.includes(file)) parts.push('Vezir kanadında yer kazanır; ileride piyon kırılmasıyla hat açmayı hedefler.');
    else if ('gh'.includes(file) && ply < 24) parts.push(file === 'g' ? 'Filin uzun çaprazdan oynaması (fiyanketto) için hazırlık ya da kanatta yer kazanma.' : 'Bir taşın (çoğunlukla filin ya da atın) g4/g5 karesine gelmesini engeller.'.replace('g4/g5', c === 'w' ? 'g4' : 'g5'));
    if (m.promotion) parts.push(`Piyon ${dat(m.to)} çıkıp ${m.promotion === 'q' ? 'vezir' : NAME[m.promotion]} olur!`);
  } else {
    const fromRank = +m.from[1], back = c === 'w' ? 1 : 8;
    if ((piece === 'n' || piece === 'b') && fromRank === back && ply < 30) parts.push(`${NAME[piece][0].toUpperCase() + NAME[piece].slice(1)} gelişir${piece === 'b' && 'bg'.includes(m.to[0]) && ['2', '7'].includes(m.to[1]) ? ': uzun çaprazdan merkeze baskı (fiyanketto).' : '.'}`);
    else if (piece === 'k' && ctx.endgame) parts.push('Oyun sonunda şah güçlü bir taştır: merkeze ve piyonlara yaklaşır.');
    else if (piece === 'k') parts.push(ctx.inCheckBefore ? 'Şah tehditten kaçar.' : 'Şah daha güvenli bir kareye çekilir.');
    else if (piece === 'r') {
      const fs = fileState(after, m.to[0], c);
      const rel7 = c === 'w' ? m.to[1] === '7' : m.to[1] === '2';
      if (rel7) parts.push('Kale 7. yataya iner: rakibin piyonlarını ve şahını arkadan sıkıştırır.');
      else if (fs && m.from[0] !== m.to[0]) parts.push(`Kale ${fs} ${m.to[0]} hattına gelir; bu hattı ele geçirmek ve rakip konumuna sızmak ister.`);
      else {
        const doubled = squaresOf(after, c).some((p) => p.sq !== m.to && (p.type === 'r' || p.type === 'q') && p.sq[0] === m.to[0]);
        if (doubled && fs) parts.push(`Ağır taşlar ${m.to[0]} hattında ikizlenir.`);
        else parts.push(`Kale ${dat(m.to)} geçer.`);
      }
    } else if (piece === 'n' && ['d4', 'e4', 'd5', 'e5', 'c5', 'f5', 'c4', 'f4'].includes(m.to)) {
      const pawnAtt = attackersOf(after, m.to, opp).some((s) => after.get(s).type === 'p');
      parts.push(pawnAtt ? 'At merkeze gelir; buradan birçok kareyi kontrol eder.' : `At ${dat(m.to)} yerleşir: rakip piyonlarla kovalanamayan güçlü bir ileri karakol.`);
    } else if (piece === 'q') parts.push(`Vezir ${dat(m.to)} geçer.`);
    else if (piece === 'b') parts.push(`Fil ${dat(m.to)} geçer; yeni çaprazında görev alır.`);
    else parts.push(`At ${dat(m.to)} yeniden konumlanır.`);
  }
  // Saldırılar ve tehditler (hamleden sonra)
  if (after.inCheck()) {
    const disc = !attackersOf(after, kingSq(after, opp), c).includes(m.to);
    parts.push(after.isCheckmate() ? 'Mat!' : disc ? 'Açarak şah: arkadaki taş şah çeker.' : 'Şah çeker.');
  }
  if (!after.isCheckmate()) {
    const targets = [];
    if (m.piece !== 'k') {
      for (const t of attacksFrom(after, m.to)) {
        const p = after.get(t);
        if (!p || p.color !== opp || p.type === 'p') continue;
        if (p.type === 'k') continue;
        if (VAL[p.type] > VAL[m.piece] || hanging(after, t)) targets.push(t);
      }
    }
    if (targets.length >= 2) parts.push(`Çatal: ${targets.map((t) => loc(t) + ' ' + NAME[after.get(t).type]).join(' ve ')} aynı anda saldırı altında.`);
    else if (targets.length === 1 && !(m.captured && targets[0] === m.to)) parts.push(`${loc(targets[0])} ${ACC[after.get(targets[0]).type]} tehdit eder.`);
    // Açarak saldırı: hamleyle başka bir taşın önü açıldı mı?
    for (const p of squaresOf(after, opp)) {
      if (p.type === 'p' || p.type === 'k' || targets.includes(p.sq)) continue;
      const nowAtt = attackersOf(after, p.sq, c).filter((s) => s !== m.to);
      const wasAtt = attackersOf(before, p.sq, c);
      const fresh = nowAtt.filter((s) => !wasAtt.includes(s));
      if (fresh.length && hanging(after, p.sq) && !hanging(before, p.sq)) { parts.push(`Açarak saldırı: ${loc(fresh[0])} ${NAME[after.get(fresh[0]).type]} artık ${loc(p.sq)} ${ACC[p.type]} hedef alıyor.`); break; }
    }
  }
  // Hamleyle korumaya alınan, saldırı altındaki taşlar
  if (m.piece !== 'k') {
    const guarded = [];
    for (const p of squaresOf(after, c)) {
      if (p.sq === m.to || p.type === 'k') continue;
      const def = attackersOf(after, p.sq, c);
      if (!def.includes(m.to) || attackersOf(before, p.sq, c).includes(m.from)) continue;
      if (attackersOf(after, p.sq, opp).length) guarded.push(p);
    }
    if (guarded.length) parts.push(`Saldırı altındaki ${guarded.slice(0, 2).map((p) => loc(p.sq) + ' ' + NAME[p.type]).join(' ve ')} korunur.`);
  }
  // Tehditten kaçma / savunma
  if (!m.captured && m.piece !== 'p' && m.piece !== 'k' && hanging(before, m.from) && !hanging(after, m.to)) parts.push(`Tehdit altındaki ${NAME[m.piece]} güvenli bir kareye çekilir.`);
  for (const p of squaresOf(before, c)) {
    if (p.sq === m.from || p.type === 'k') continue;
    if (hanging(before, p.sq) && after.get(p.sq) && !hanging(after, p.sq) && !(m.captured)) { parts.push(`${loc(p.sq)} ${ACC[p.type]} da korumaya alır.`); break; }
  }
  return parts;
}

function pvLine(pv, fen, n = 5) {
  if (!pv?.length) return '';
  const ch = new Chess(fen);
  let num = +fen.split(' ')[5], turn = fen.split(' ')[1], out = '';
  pv.slice(0, n).forEach((s, i) => {
    if (turn === 'w') out += `${num}.${s} `; else out += i === 0 ? `${num}...${s} ` : `${s} `;
    if (turn === 'b') num++;
    turn = turn === 'w' ? 'b' : 'w';
  });
  void ch;
  return out.trim();
}
const label = (num, color, san) => (color === 'w' ? `${num}.${san}` : `${num}...${san}`);

// Bir motor değerlendirmesini oyuncunun bakış açısından kazanma yüzdesine çevirir.
function wpFor(e, color, fenAfter) {
  const turn = fenAfter ? fenAfter.split(' ')[1] : null;
  const w = winPct(e, turn);
  return color === 'w' ? w : 100 - w;
}

export function buildGame(raw, line, notes = {}, posComments = new Map()) {
  const ch = new Chess();
  const fens = [ch.fen()];
  const moves = [];
  for (const mv of raw.moves) { const m = ch.move(mv.san); moves.push(m); fens.push(ch.fen()); }
  const ev = raw.evals.map((e, i) => (e.mate === 0 ? { mate: 0, side: e.side } : e));
  const evalOf = (i) => (ev[i].over ? { cp: 0 } : ev[i]);
  // Varyantın açıklamaları: konum -> { yorum, varyanttaki hamle etiketi } (açılış ağacından)
  const lc = new Chess(), lineCmt = new Map();
  for (const s of line.moves) {
    const num = +lc.fen().split(' ')[5], col = lc.turn();
    const mm = lc.move(s);
    const key = lc.fen().split(' ').slice(0, 4).join(' ');
    lineCmt.set(key, { cm: posComments.get(key), label: label(num, col, mm.san) });
  }
  // Kitap kısmı: maçın varyantın konumlarından geçtiği son yarım hamleye kadar (hamle sırası farklı olsa da).
  let book = 0;
  for (let i = 1; i < fens.length; i++) if (lineCmt.has(fens[i].split(' ').slice(0, 4).join(' '))) book = i;
  raw = { ...raw, book };
  const nextLineMove = (() => {
    // Maçın varyanttan ayrıldığı yerde varyantta oynanan hamle
    const c2 = new Chess();
    for (let i = 0; i < raw.book; i++) c2.move(raw.moves[i].san);
    const key = c2.fen().split(' ').slice(0, 4).join(' ');
    const c3 = new Chess();
    for (const s of line.moves) {
      if (c3.fen().split(' ').slice(0, 4).join(' ') === key) { const mm = c3.move(s); return mm.san; }
      c3.move(s);
    }
    return null;
  })();
  const usedNotes = new Set();
  const castled = { w: null, b: null };
  const out = [];
  let prevTag = null;
  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    const before = new Chess(fens[i]), after = new Chess(fens[i + 1]);
    const num = +fens[i].split(' ')[5];
    const lab = label(num, m.color, m.san);
    const labKey = label(num, m.color, m.san.replace(/[+#]/g, ''));
    const eB = evalOf(i), eA = evalOf(i + 1);
    const lossRaw = wpFor(eB, m.color, fens[i]) - wpFor(eA, m.color, fens[i + 1]);
    const loss = Math.max(0, lossRaw);
    const isBest = (ev[i].best && ev[i].best === m.from + m.to + (m.promotion || '')) || ev[i].pv?.[0] === m.san;
    const { m: matNow } = material(after);
    const endgame = matNow.w + matNow.b - 0 <= 26;
    const parts = [];
    const note = notes[labKey] ?? notes[lab];
    if (note) usedNotes.add(notes[labKey] !== undefined ? labKey : lab);
    let tag;
    const inBook = i < raw.book;
    if (inBook) {
      tag = 'kitap';
      const lcm = lineCmt.get(fens[i + 1].split(' ').slice(0, 4).join(' '));
      const facts = describeMove(before, after, m, { ply: i, castled, prev: moves[i - 1], endgame, inCheckBefore: before.inCheck() });
      const text = lcm?.cm ? lcm.cm : lcm ? facts.join(' ') : `${facts.join(' ')} (Hamle sırası varyanttan farklı; birkaç hamle sonra aynı konuma varılıyor.)`;
      parts.push(text);
      if (lcm && lcm.label.replace(/[+#]/g, '') !== lab.replace(/[+#]/g, '')) parts.push(`(Varyantta bu konuma ${lcm.label} ile geliniyor; maçta hamle sırası farklı.)`);
    } else {
      if (i === raw.book && nextLineMove) parts.push(`Maç burada varyanttan ayrılıyor: varyantta ${label(num, m.color, nextLineMove)} oynanıyor, ${m.color === 'w' ? 'Beyaz' : 'Siyah'} ise başka bir yol seçiyor.`);
      else if (i === raw.book && !nextLineMove) parts.push('Varyantın hamleleri burada bitiyor; bundan sonrası ustaların kendi oyunu.');
      parts.push(...describeMove(before, after, m, { ply: i, castled, prev: moves[i - 1], endgame, inCheckBefore: before.inCheck() }));
      // Motorun görüşü
      const bestSan = ev[i].pv?.[0];
      const bestLine = pvLine(ev[i].pv, fens[i], 5);
      if (after.isCheckmate()) tag = 'eniyi';
      else if (isBest) tag = 'eniyi';
      else if (loss < 2) tag = 'iyi';
      else if (loss < 8) tag = 'kabul';
      else if (loss < 16) tag = '?!';
      else if (loss < 28) tag = '?';
      else tag = '??';
      // Kesin kazanan konumda küçük kayıplar önemsiz
      const wpA = wpFor(eA, m.color, fens[i + 1]);
      if ((tag === '?!' || tag === '?') && wpA > 92) tag = 'kabul';
      const missed = (prevTag === '?' || prevTag === '??') && loss >= 10;
      if (tag === 'eniyi') parts.push(after.isCheckmate() ? '' : 'Motorun da ilk tercihi.');
      else if (tag === 'iyi') parts.push(bestSan ? `İyi bir hamle; motor ${bestSan} hamlesini çok az farkla tercih ediyor.` : 'İyi bir hamle.');
      else if (tag === 'kabul') parts.push(`Oynanabilir bir hamle, ama ${bestSan} biraz daha güçlüydü (${bestLine}).`);
      else {
        const word = tag === '?!' ? 'Dikkatsizlik' : tag === '?' ? 'Hata' : 'Ciddi hata';
        parts.push(`${word}: değerlendirme ${fmtEval(eB)} iken ${fmtEval(eA)} oldu. Doğrusu ${bestSan}; motorun devamı: ${bestLine}.`);
        // En iyi devam malzeme kazandırıyor muydu?
        try {
          const pc = new Chess(fens[i]);
          const m0 = material(pc).m;
          for (const s of ev[i].pv.slice(0, 5)) pc.move(s);
          const m1 = material(pc).m;
          const gain = (m.color === 'w' ? 1 : -1) * ((m1.w - m1.b) - (m0.w - m0.b));
          if (gain >= 2) parts.push(`${bestSan} ile malzeme kazanılıyordu.`);
        } catch { /* yoksay */ }
      }
      if (missed) parts.push('Rakibin bir önceki hatasını cezalandırma fırsatı kaçtı.');
      // Rakibin en iyi cevabı ve hamlenin fikri (motorun ana devamından)
      const pvA = ev[i + 1]?.pv;
      if (pvA?.length >= 2 && !after.isGameOver() && (tag === 'eniyi' || tag === 'iyi')) {
        const c4 = new Chess(fens[i + 1]);
        const r1 = c4.move(pvA[0]);
        const idea = c4.move(pvA[1]);
        if (idea && (idea.captured || c4.inCheck())) parts.push(`Fikir: ${m.color === 'w' ? 'Beyaz' : 'Siyah'}, rakip ${r1.san} ile karşılık verirse ${idea.san} ile devam etmeyi planlıyor.`);
      }
    }
    if (m.flags.includes('k') || m.flags.includes('q')) castled[m.color] = m.flags.includes('k') ? 'k' : 'q';
    const mw = materialWords(after);
    const recaptured = moves[i + 1] && moves[i + 1].to === m.to && moves[i + 1].captured;
    if (m.captured && mw && !recaptured) parts.push(mw);
    // Son hamle: sonuç
    if (i === moves.length - 1) {
      if (after.isCheckmate()) parts.push('Maç matla bitti.');
      else if (raw.result === '1-0') parts.push('Siyah burada terk etti.');
      else if (raw.result === '0-1') parts.push('Beyaz burada terk etti.');
      else if (raw.result === '1/2-1/2') parts.push(after.isStalemate() ? 'Pat: berabere.' : after.isThreefoldRepetition() ? 'Üç kez aynı konum: berabere.' : 'Oyuncular beraberlikte anlaştı.');
    }
    parts.push(`Değerlendirme: ${fmtEval(eA)} (${evalWords(eA.mate === 0 ? { mate: 0 } : eA)}).`);
    out.push({
      s: m.san, u: m.from + m.to + (m.promotion || ''),
      e: eA.mate !== undefined && eA.mate !== null ? (eA.mate === 0 ? (m.color === 'w' ? 'M+' : 'M-') : `M${eA.mate}`) : (eA.cp ?? 0),
      k: tag, n: note || undefined,
      t: parts.filter(Boolean).join(' '),
      b: !inBook && !isBest && tag !== 'eniyi' ? ev[i].pv?.[0] : undefined,
    });
    prevTag = tag;
  }
  const unknown = Object.keys(notes).filter((k) => !usedNotes.has(k));
  return { moves: out, unknownNotes: unknown, deviation: nextLineMove, book };
}
