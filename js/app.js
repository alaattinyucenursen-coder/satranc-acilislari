import { Chess } from '../vendor/chess.js';
import { Board } from './board.js';
import { Engine } from './engine.js';
import MODULE from '../data/vezir-gambiti.js';

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// Metindeki **kalın** işaretlerini ve hamle notasyonlarını biçimlendirir.
const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const store = {
  get(k, d) { try { const v = localStorage.getItem('qg:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('qg:' + k, JSON.stringify(v)); } catch { /* depolama kapalı olabilir */ } },
};

// ---------- Oyun verisini hazırla ----------
function prepareGame(g) {
  const chess = new Chess();
  chess.loadPgn(g.pgn);
  const history = chess.history({ verbose: true });
  const plies = history.map((m, i) => {
    const num = Math.floor(i / 2) + 1;
    const side = i % 2 === 0 ? 'w' : 'b';
    const key = num + side;
    return { ply: i + 1, num, side, key, san: m.san, from: m.from, to: m.to, fenAfter: m.after, fenBefore: m.before,
      note: g.notes[key] || '', critical: (g.critical || []).find((c) => c.move === key) || null };
  });
  const missing = plies.filter((p) => !p.note).map((p) => p.key);
  if (missing.length) console.warn(g.id, 'açıklaması eksik hamleler:', missing.join(' '));
  return { ...g, plies, startFen: history[0].before };
}
const games = MODULE.games.map(prepareGame);

// ---------- Durum ----------
const state = {
  gameIdx: Math.min(store.get('game', 0), games.length - 1),
  tab: store.get('tab', 'review'),
  ply: 0,
  trial: null,          // { baseply, chess, moves: [] } maç dışı deneme hamleleri
  engineOn: store.get('engine', false),
  exIdx: 0,
  ex: null,             // aktif alıştırmanın çalışma durumu
};
const solved = new Set(store.get('solved', []));

const engine = new Engine();
const lines = new Map();
let engineFen = null;

// ---------- Ana iskelet ----------
function renderShell() {
  $('#module-title').textContent = MODULE.name;
  $('#module-intro').innerHTML = rich(MODULE.intro);
  $('#game-list').innerHTML = games.map((g, i) => {
    const total = g.exercises.length;
    const done = g.exercises.filter((e) => solved.has(e.id)).length;
    return `<li><button class="game-pick${i === state.gameIdx ? ' active' : ''}" data-i="${i}" aria-current="${i === state.gameIdx}">
      <span class="gp-theme">${esc(g.theme)}</span>
      <span class="gp-players">${esc(g.whiteShort)} – ${esc(g.blackShort)}</span>
      <span class="gp-meta">${esc(g.event)} ${g.year} · ${esc(g.eco)} · <b>${esc(g.result)}</b></span>
      <span class="gp-progress" aria-label="${done} / ${total} alıştırma çözüldü"><i style="width:${(done / total) * 100}%"></i></span>
    </button></li>`;
  }).join('');
}

function selectGame(i) {
  state.gameIdx = i; state.ply = 0; state.trial = null; state.exIdx = 0; state.ex = null;
  store.set('game', i);
  renderShell(); renderGame();
}

function renderGame() {
  const g = games[state.gameIdx];
  $('#g-theme').textContent = g.theme;
  $('#g-title').textContent = `${g.white} – ${g.black}`;
  $('#g-meta').textContent = `${g.event}, ${g.site} ${g.year} · ${g.variation} (${g.eco}) · ${g.result}`;
  $('#g-summary').innerHTML = rich(g.summary);
  const plan = (p) => `<h3>${esc(p.title)}</h3><ul>${p.points.map((x) => `<li>${rich(x)}</li>`).join('')}</ul>`;
  $('#plan-white').innerHTML = plan(g.plans.white);
  $('#plan-black').innerHTML = plan(g.plans.black);
  $('#critical-list').innerHTML = g.critical.map((c) => {
    const p = g.plies.find((x) => x.key === c.move);
    return `<li><button class="crit-jump" data-ply="${p.ply}"><span class="mv">${p.num}${p.side === 'w' ? '.' : '...'}${esc(p.san)}</span> ${esc(c.title)}</button></li>`;
  }).join('');
  $('#lessons').innerHTML = g.lessons.map((l) => `<li>${rich(l)}</li>`).join('');
  renderMoveList();
  setTab(state.tab);
}

function setTab(tab) {
  state.tab = tab; store.set('tab', tab);
  document.querySelectorAll('.tab').forEach((t) => {
    const on = t.dataset.tab === tab;
    t.setAttribute('aria-selected', on); t.classList.toggle('active', on);
  });
  $('#panel-review').hidden = tab !== 'review';
  $('#panel-ex').hidden = tab !== 'ex';
  // Hamle gezinme düğmeleri yalnızca maç incelemesinde anlamlı.
  ['#nav-start', '#nav-prev', '#nav-next', '#nav-end', '#ply-pos'].forEach((s) => { $(s).hidden = tab !== 'review'; });
  if (tab === 'review') { mountBoard('#review-board-slot'); showPly(); }
  else { mountBoard('#ex-board-slot'); renderExList(); loadExercise(state.exIdx); }
}

// Tek bir tahta ve motor paneli iki sekme arasında taşınır.
function mountBoard(slot) {
  const wrap = $('#board-wrap');
  if (wrap.parentElement !== $(slot)) $(slot).appendChild(wrap);
}

// ---------- İnceleme ----------
function renderMoveList() {
  const g = games[state.gameIdx];
  let html = '';
  for (const p of g.plies) {
    if (p.side === 'w') html += `<span class="num">${p.num}.</span>`;
    html += `<button class="mv${p.critical ? ' crit' : ''}" data-ply="${p.ply}">${esc(p.san)}</button>`;
  }
  html += `<span class="res">${esc(g.result)}</span>`;
  $('#move-list').innerHTML = html;
}

function currentChess() {
  if (state.trial) return state.trial.chess;
  const g = games[state.gameIdx];
  return new Chess(state.ply === 0 ? g.startFen : g.plies[state.ply - 1].fenAfter);
}

function showPly() {
  const g = games[state.gameIdx];
  const p = state.ply > 0 ? g.plies[state.ply - 1] : null;
  const chess = currentChess();
  const last = state.trial && state.trial.last ? state.trial.last : p ? { from: p.from, to: p.to } : null;
  board.set({ chess, lastMove: last, interactive: true });
  document.querySelectorAll('#move-list .mv').forEach((b) => b.classList.toggle('cur', +b.dataset.ply === state.ply));
  const cur = $(`#move-list .mv[data-ply="${state.ply}"]`);
  if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'nearest' });

  const box = $('#comment');
  if (state.trial) {
    box.innerHTML = `<div class="c-head"><span class="side trial">Deneme</span><span class="c-move">${esc(state.trial.moves.join(' '))}</span></div>
      <p>Maçtan ayrıldınız. Taşları serbestçe oynayıp motorla değerlendirebilirsiniz.</p>
      <button class="btn" id="back-to-game">Maça dön (${state.trial.baseply > 0 ? g.plies[state.trial.baseply - 1].num + '. hamle' : 'başlangıç'})</button>`;
    $('#back-to-game').onclick = () => { state.trial = null; showPly(); };
  } else if (!p) {
    box.innerHTML = `<div class="c-head"><span class="side">Başlangıç</span></div><p>${rich(g.intro)}</p>
      <p class="hint">İleri gitmek için → tuşunu ya da aşağıdaki düğmeleri kullanın. Kritik anlar hamle listesinde işaretli.</p>`;
  } else {
    const sideName = p.side === 'w' ? 'Beyaz' : 'Siyah';
    const crit = p.critical ? `<div class="crit-box"><span class="crit-tag">Kritik an</span><h4>${esc(p.critical.title)}</h4><p>${rich(p.critical.text)}</p></div>` : '';
    box.innerHTML = `<div class="c-head"><span class="side ${p.side}">${sideName}</span><span class="c-move">${p.num}${p.side === 'w' ? '.' : '...'} ${esc(p.san)}</span></div>
      <p>${rich(p.note)}</p>${crit}`;
  }
  $('#ply-pos').textContent = `${state.ply} / ${g.plies.length}`;
  requestEngine(chess.fen());
}

function go(ply) {
  const g = games[state.gameIdx];
  state.trial = null;
  state.ply = Math.max(0, Math.min(g.plies.length, ply));
  showPly();
}

function onBoardMove(mv) {
  if (state.tab === 'ex') return exerciseMove(mv);
  const g = games[state.gameIdx];
  // Maçtaki hamle oynandıysa ilerle, değilse deneme moduna geç.
  if (!state.trial) {
    const next = g.plies[state.ply];
    if (next && next.from === mv.from && next.to === mv.to) { go(state.ply + 1); return; }
    state.trial = { baseply: state.ply, chess: currentChess(), moves: [] };
  }
  const res = state.trial.chess.move(mv);
  state.trial.moves.push(res.san);
  state.trial.last = { from: res.from, to: res.to };
  showPly();
}

// ---------- Motor ----------
function requestEngine(fen) {
  // Alıştırma çözülmeden motor çalışmaz; çözüm önceden görünmesin.
  if (state.tab === 'ex' && (!state.ex || !state.ex.done)) {
    engineFen = null; lines.clear(); engine.stop(); board.setArrows([]);
    renderEngine();
    if (state.engineOn) $('#engine-lines').innerHTML = '<p class="muted">Motor, alıştırmayı çözdükten sonra devreye girer.</p>';
    return;
  }
  engineFen = fen;
  lines.clear();
  renderEngine();
  if (!state.engineOn) { engine.stop(); board.setArrows([]); return; }
  const c = new Chess(fen);
  if (c.isGameOver()) { engine.stop(); return; }
  engine.analyse(fen, 20);
}

engine.on((msg) => {
  if (msg.type === 'error') { $('#engine-status').textContent = msg.message; return; }
  if (msg.type === 'ready') { $('#engine-status').textContent = 'Hazır'; return; }
  if (msg.fen !== engineFen || !state.engineOn) return;
  if (msg.type === 'info') { lines.set(msg.multipv, msg); renderEngine(); }
});

function scoreWhite(info, fen) {
  const flip = fen.split(' ')[1] === 'b' ? -1 : 1;
  if (info.mate != null) return { mate: info.mate * flip };
  return { cp: info.cp * flip };
}
function fmtScore(s) {
  if (s.mate != null) return (s.mate > 0 ? '+' : '−') + 'M' + Math.abs(s.mate);
  const v = s.cp / 100;
  return (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(2);
}
function pvToSan(fen, pv, max = 8) {
  const c = new Chess(fen);
  const out = [];
  const startNum = +fen.split(' ')[5];
  let blackFirst = fen.split(' ')[1] === 'b';
  for (const u of pv.slice(0, max)) {
    try {
      const turn = c.turn();
      const m = c.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] });
      const n = startNum + Math.floor((out.length + (blackFirst ? 1 : 0)) / 2);
      if (turn === 'w') out.push(`${n}.${m.san}`);
      else out.push(out.length === 0 ? `${n}...${m.san}` : m.san);
    } catch { break; }
  }
  return out.join(' ');
}

function renderEngine() {
  const panel = $('#engine');
  panel.classList.toggle('off', !state.engineOn);
  $('#engine-toggle').setAttribute('aria-pressed', state.engineOn);
  $('#engine-toggle').textContent = state.engineOn ? 'Motoru kapat' : 'Motoru aç';
  const bar = $('#evalbar i');
  const out = $('#engine-lines');
  if (!state.engineOn) {
    out.innerHTML = '<p class="muted">Stockfish 19 tarayıcınızda çalışır. Açınca her pozisyonu değerlendirir ve en iyi devamları gösterir.</p>';
    bar.style.height = '50%'; $('#eval-num').textContent = '';
    return;
  }
  const l1 = lines.get(1);
  if (!l1) { out.innerHTML = '<p class="muted">Hesaplıyor…</p>'; return; }
  const s = scoreWhite(l1, engineFen);
  const pct = s.mate != null ? (s.mate > 0 ? 100 : 0) : 50 + 50 * (2 / (1 + Math.exp(-s.cp / 250)) - 1);
  bar.style.height = pct + '%';
  $('#eval-num').textContent = fmtScore(s);
  out.innerHTML = [1, 2].map((k) => lines.get(k)).filter(Boolean).map((l) =>
    `<div class="eline"><span class="escore">${fmtScore(scoreWhite(l, engineFen))}</span><span class="epv">${esc(pvToSan(engineFen, l.pv))}</span></div>`).join('') +
    `<p class="muted small">Derinlik ${l1.depth}</p>`;
  const u = l1.pv[0];
  if (u) board.setArrows([{ from: u.slice(0, 2), to: u.slice(2, 4) }]);
}

// ---------- Alıştırmalar ----------
function renderExList() {
  const g = games[state.gameIdx];
  $('#ex-list').innerHTML = g.exercises.map((e, i) => `<li><button class="ex-pick${i === state.exIdx ? ' active' : ''}${solved.has(e.id) ? ' solved' : ''}" data-i="${i}">
    <span class="ex-kind ${e.kind}">${e.kind === 'tekrar' ? 'Tekrar' : 'Aynı fikir, başka maç'}</span>
    <span class="ex-title">${esc(e.title)}</span>
    <span class="ex-src">${esc(e.source)}</span></button></li>`).join('');
}

function loadExercise(i) {
  const g = games[state.gameIdx];
  state.exIdx = i;
  const e = g.exercises[i];
  const chess = new Chess(e.fen);
  state.ex = { e, chess, step: 0, done: false, tries: 0, last: null, revealed: false };
  board.orientation = chess.turn();
  board.set({ chess, interactive: true });
  renderExList();
  renderExercise();
  requestEngine(state.ex.done ? chess.fen() : null);
}

function renderExercise() {
  const { e, chess, step, done, revealed } = state.ex;
  const side = new Chess(e.fen).turn() === 'w' ? 'Beyaz' : 'Siyah';
  $('#ex-head').innerHTML = `<span class="ex-kind ${e.kind}">${e.kind === 'tekrar' ? 'Tekrar' : 'Aynı fikir, başka maç'}</span>
    <h3>${esc(e.title)}</h3><p class="ex-src">${esc(e.source)}</p>`;
  $('#ex-prompt').innerHTML = `<p><strong>${side} oynar.</strong> ${rich(e.prompt)}</p>`;
  const played = e.line.slice(0, step);
  $('#ex-progress').textContent = played.length ? played.join(' ') : '';
  const fb = $('#ex-feedback');
  if (done) {
    fb.className = 'feedback ok';
    fb.innerHTML = `<h4>${revealed ? 'Çözüm' : 'Doğru!'}</h4><p>${rich(e.explanation)}</p>
      <p class="link-idea"><span>Ana maçla bağlantı</span>${rich(e.link)}</p>`;
  } else if (state.ex.msg) {
    fb.className = 'feedback ' + state.ex.msgType;
    fb.innerHTML = `<p>${rich(state.ex.msg)}</p>`;
  } else {
    fb.className = 'feedback'; fb.innerHTML = '';
  }
  $('#ex-hint').hidden = done;
  $('#ex-show').hidden = done;
  $('#ex-next').hidden = !done;
  $('#ex-engine-note').hidden = done;
}

function userTurnIndex() { return state.ex.step; }

function exerciseMove(mv) {
  const ex = state.ex;
  if (!ex || ex.done) {
    // Çözümden sonra serbest deneme.
    const r = ex.chess.move(mv);
    ex.last = { from: r.from, to: r.to };
    board.set({ chess: ex.chess, lastMove: ex.last, interactive: true });
    requestEngine(ex.chess.fen());
    return;
  }
  const want = ex.e.line[userTurnIndex()];
  const test = new Chess(ex.chess.fen());
  const r = test.move(mv);
  const accepted = [want, ...((ex.e.accept && ex.e.accept[userTurnIndex()]) || [])];
  if (!accepted.includes(r.san)) {
    ex.tries++;
    const wrongNote = ex.e.wrong && ex.e.wrong[r.san];
    ex.msg = wrongNote || (ex.e.plan
      ? `${r.san} oynanabilir, ama ustanın seçtiği plan hamlesi bu değil. Maçtaki fikri düşünün ve tekrar deneyin.`
      : `${r.san} burada en güçlü devam değil. Pozisyondaki fikri düşünün ve tekrar deneyin.`);
    ex.msgType = 'bad';
    board.set({ chess: ex.chess, lastMove: ex.last, interactive: true });
    renderExercise();
    return;
  }
  // Kabul edilen alternatif hamle oynandıysa ana çözümü gösterip devam ederiz.
  const m = ex.chess.move(want);
  ex.last = { from: m.from, to: m.to };
  ex.step++;
  ex.msg = r.san !== want ? `${r.san} de iyi; ana çözüm ${want}.` : null;
  ex.msgType = 'ok';
  advanceOpponent();
}

function advanceOpponent() {
  const ex = state.ex;
  board.set({ chess: ex.chess, lastMove: ex.last, interactive: false });
  if (ex.step >= ex.e.line.length) { finishExercise(false); return; }
  renderExercise();
  setTimeout(() => {
    const m = ex.chess.move(ex.e.line[ex.step]);
    ex.last = { from: m.from, to: m.to };
    ex.step++;
    if (ex.step >= ex.e.line.length) { finishExercise(false); return; }
    board.set({ chess: ex.chess, lastMove: ex.last, interactive: true });
    ex.msg = ex.msg || 'Doğru. Devam edin.'; ex.msgType = 'ok';
    renderExercise();
  }, 550);
}

function finishExercise(revealed) {
  const ex = state.ex;
  ex.done = true; ex.revealed = revealed;
  if (!revealed) { solved.add(ex.e.id); store.set('solved', [...solved]); }
  board.set({ chess: ex.chess, lastMove: ex.last, interactive: true });
  renderExercise(); renderExList(); renderShell();
  requestEngine(ex.chess.fen());
}

function revealExercise() {
  const ex = state.ex;
  const stepAll = () => {
    if (ex.step >= ex.e.line.length) { finishExercise(true); return; }
    const m = ex.chess.move(ex.e.line[ex.step]);
    ex.last = { from: m.from, to: m.to }; ex.step++;
    board.set({ chess: ex.chess, lastMove: ex.last, interactive: false });
    $('#ex-progress').textContent = ex.e.line.slice(0, ex.step).join(' ');
    setTimeout(stepAll, 500);
  };
  stepAll();
}

// ---------- Olaylar ----------
const board = new Board($('#board'), { onMove: onBoardMove });

document.addEventListener('click', (e) => {
  const t = e.target.closest('button');
  if (!t) return;
  if (t.matches('.game-pick')) selectGame(+t.dataset.i);
  else if (t.matches('.tab')) setTab(t.dataset.tab);
  else if (t.matches('#move-list .mv, .crit-jump')) { if (state.tab !== 'review') setTab('review'); go(+t.dataset.ply); }
  else if (t.matches('.ex-pick')) loadExercise(+t.dataset.i);
});
$('#nav-start').onclick = () => go(0);
$('#nav-prev').onclick = () => state.trial ? (state.trial = null, showPly()) : go(state.ply - 1);
$('#nav-next').onclick = () => go(state.trial ? state.trial.baseply + 1 : state.ply + 1);
$('#nav-end').onclick = () => go(1e9);
$('#flip').onclick = () => board.flip();
$('#engine-toggle').onclick = () => {
  state.engineOn = !state.engineOn; store.set('engine', state.engineOn);
  if (state.engineOn) { $('#engine-status').textContent = engine.ready ? 'Hazır' : 'Yükleniyor…'; }
  const fen = state.tab === 'review' ? currentChess().fen() : (state.ex && state.ex.done ? state.ex.chess.fen() : null);
  if (fen) requestEngine(fen); else renderEngine();
};
$('#ex-hint').onclick = () => {
  const ex = state.ex;
  ex.msg = ex.e.hint; ex.msgType = 'hint'; renderExercise();
};
$('#ex-show').onclick = () => revealExercise();
$('#ex-next').onclick = () => {
  const g = games[state.gameIdx];
  loadExercise((state.exIdx + 1) % g.exercises.length);
};
$('#ex-reset').onclick = () => loadExercise(state.exIdx);

document.addEventListener('keydown', (e) => {
  if (state.tab !== 'review' || e.target.closest('input, textarea')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); $('#nav-next').click(); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); $('#nav-prev').click(); }
  else if (e.key === 'Home') go(0);
  else if (e.key === 'End') go(1e9);
});

renderShell();
renderGame();
