// Açılış Defteri: telefon uygulaması. Veriler data.js içinde (window.APP_DATA).
import { Chess } from "./chess.js";

const { openings: OPENINGS, categories: CATEGORIES, sources: SOURCES } = window.APP_DATA;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const fmtN = (n) => n.toLocaleString("tr-TR");
const fmtP = (p) => "%" + p.toLocaleString("tr-TR", { maximumFractionDigits: p < 1 ? 2 : 1 });

// ---------- Kalıcı ayarlar ve ilerleme ----------
function load(key, def) {
  try { const v = localStorage.getItem(key); return v == null ? def : JSON.parse(v); } catch { return def; }
}
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* depolama yoksa yoksay */ }
}
const settings = Object.assign(
  { board: "kahve", coords: true, engine: false, db: "genel", sort: "oran", side: "w", theme: "auto" },
  load("ayarlar", {}),
);
const saveSettings = () => save("ayarlar", settings);
let progress = load("ilerleme", {});
const lineProgress = (oid, lid) => progress[oid]?.[lid];
function recordResult(oid, lid, stars, firstTry, total) {
  const p = (progress[oid] ||= {});
  const prev = p[lid] || { best: 0, plays: 0 };
  p[lid] = { best: Math.max(prev.best, stars), plays: prev.plays + 1, last: Date.now(), firstTry, total };
  save("ilerleme", progress);
}
function openingProgress(o) {
  const done = o.lines.filter((l) => lineProgress(o.id, l.id)?.best > 0).length;
  return { done, total: o.lines.length };
}

const BOARDS = [
  ["kahve", "Kahverengi", "#f0d9b5", "#b58863"],
  ["yesil", "Yeşil", "#eeeed2", "#769656"],
  ["mavi", "Mavi", "#dee3e6", "#8ca2ad"],
  ["ceviz", "Ceviz", "#c9bb9c", "#866846"],
  ["mor", "Mor", "#e9e1f1", "#9a7cb6"],
  ["gri", "Gri", "#dcdcdc", "#8f8f8f"],
  ["kiremit", "Kiremit", "#f3dfcd", "#c0775a"],
];
function applyTheme() {
  const b = BOARDS.find((x) => x[0] === settings.board) || BOARDS[0];
  document.documentElement.style.setProperty("--b-light", b[2]);
  document.documentElement.style.setProperty("--b-dark", b[3]);
  if (settings.theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.dataset.theme = settings.theme;
}

// ---------- Veri yardımcıları ----------
const OPENING = new Map(OPENINGS.map((o) => [o.id, o]));
for (const o of OPENINGS) {
  o.byId = new Map();
  o.parent = new Map();
  (function ix(n, p) {
    o.byId.set(n.id, n);
    if (p) o.parent.set(n.id, p);
    n.children.forEach((c) => ix(c, n));
  })(o.tree, null);
}
function pathTo(o, leafId) {
  const out = [];
  let n = o.byId.get(leafId);
  while (n && n.id !== "root") { out.unshift(n); n = o.parent.get(n.id); }
  return out;
}
const stat = (l) => l.played?.[settings.db];
function sortedLines(o) {
  const arr = [...o.lines];
  if (o.played?.[settings.db]) arr.sort((a, b) => (stat(b)?.mac ?? -1) - (stat(a)?.mac ?? -1));
  return arr;
}
function shortName(l) {
  return l.name.replace(/^(Reddedilmiş Vezir Gambiti|Kabul Edilmiş Vezir Gambiti|Slav Savunması|Yarı-Slav|Albin Karşı Gambiti|Tuzak): /, "");
}
const moveLabel = (n) => (n.color === "w" ? `${n.moveNumber}.${n.san}` : `${n.moveNumber}...${n.san}`);
function starsHtml(n) {
  return `<span class="stars" aria-label="${n} yıldız">${"★".repeat(n)}<span class="off">${"★".repeat(3 - n)}</span></span>`;
}
const chevron = `<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// ---------- Tahta bileşeni ----------
const PIECE_SRC = (code) => `pieces/${code}.svg`;
function createBoard(container, { onMove, canMove } = {}) {
  const board = document.createElement("div");
  board.className = "board";
  board.setAttribute("role", "img");
  container.appendChild(board);
  let fen = null, flipped = false, selected = null, drag = null, marks = {};
  const chessOf = () => new Chess(fen);

  function squareAt(e) {
    const r = board.getBoundingClientRect();
    const fx = Math.floor(((e.clientX - r.left) / r.width) * 8), fy = Math.floor(((e.clientY - r.top) / r.height) * 8);
    if (fx < 0 || fx > 7 || fy < 0 || fy > 7) return null;
    return "abcdefgh"[flipped ? 7 - fx : fx] + (flipped ? fy + 1 : 8 - fy);
  }
  function targets(from) {
    try { return chessOf().moves({ square: from, verbose: true }).map((m) => m.to); } catch { return []; }
  }
  function draw() {
    const rows = fen.split(" ")[0].split("/");
    const cells = [];
    rows.forEach((row, r) => {
      let f = 0;
      for (const ch of row) {
        if (/\d/.test(ch)) for (let i = 0; i < +ch; i++) cells.push({ r, f: f++ });
        else cells.push({ r, f: f++, p: ch });
      }
    });
    const order = flipped ? [...cells].reverse() : cells;
    const dests = selected ? targets(selected) : [];
    board.innerHTML = order.map((c) => {
      const sq = "abcdefgh"[c.f] + (8 - c.r);
      const cls = ["sq", (c.r + c.f) % 2 ? "d" : "l"];
      for (const [k, list] of Object.entries(marks)) if (list?.includes(sq)) cls.push(k);
      if (sq === selected) cls.push("sel");
      if (dests.includes(sq)) cls.push("dest");
      if (c.p) cls.push("occ");
      const piece = c.p ? `<img class="pc" alt="" draggable="false" src="${PIECE_SRC((c.p === c.p.toUpperCase() ? "w" : "b") + c.p.toUpperCase())}">` : "";
      const showFile = settings.coords && (flipped ? c.r === 0 : c.r === 7);
      const showRank = settings.coords && (flipped ? c.f === 7 : c.f === 0);
      return `<div data-sq="${sq}" class="${cls.join(" ")}">${piece}${showFile ? `<span class="coord f">${sq[0]}</span>` : ""}${showRank ? `<span class="coord r">${sq[1]}</span>` : ""}</div>`;
    }).join("") + `<svg class="annot" viewBox="0 0 8 8" aria-hidden="true">${arrowSvg()}</svg>`;
    board.setAttribute("aria-label", "Satranç tahtası");
  }
  let arrows = [];
  function center(sq) {
    const f = "abcdefgh".indexOf(sq[0]), r = +sq[1];
    return [(flipped ? 7 - f : f) + 0.5, (flipped ? r - 1 : 8 - r) + 0.5];
  }
  function arrowSvg() {
    return `<defs><marker id="ah" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="2.6" markerHeight="2.6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1e6ee6"/></marker></defs>` +
      arrows.map(([a, b]) => {
        const [x1, y1] = center(a), [x2, y2] = center(b), len = Math.hypot(x2 - x1, y2 - y1), k = (len - 0.32) / len;
        return `<line x1="${x1}" y1="${y1}" x2="${x1 + (x2 - x1) * k}" y2="${y1 + (y2 - y1) * k}" stroke="#1e6ee6" stroke-width=".17" stroke-linecap="round" opacity=".85" marker-end="url(#ah)"/>`;
      }).join("");
  }
  function tryMove(from, to) {
    selected = null;
    let ok = false;
    try { ok = onMove?.(from, to); } catch { ok = false; }
    if (!ok) draw();
  }
  function ownPiece(sq) {
    try {
      const p = chessOf().get(sq);
      return p && p.color === fen.split(" ")[1] ? p : null;
    } catch { return null; }
  }
  board.addEventListener("contextmenu", (e) => e.preventDefault());
  board.addEventListener("pointerdown", (e) => {
    if (!fen || !(canMove?.() ?? true)) return;
    const sq = squareAt(e);
    if (!sq) return;
    if (selected && selected !== sq && targets(selected).includes(sq)) { tryMove(selected, sq); return; }
    if (ownPiece(sq)) {
      selected = sq;
      draw();
      const img = board.querySelector(`.sq[data-sq="${sq}"] .pc`);
      if (img) {
        const ghost = img.cloneNode();
        ghost.className = "dragghost";
        board.appendChild(ghost);
        img.classList.add("dragging");
        drag = { from: sq, img, ghost, moved: false };
        moveGhost(e);
        board.setPointerCapture(e.pointerId);
      }
    } else if (selected) { selected = null; draw(); }
  });
  function moveGhost(e) {
    const r = board.getBoundingClientRect();
    drag.ghost.style.left = `${e.clientX - r.left}px`;
    drag.ghost.style.top = `${e.clientY - r.top}px`;
  }
  board.addEventListener("pointermove", (e) => { if (drag) { drag.moved = true; moveGhost(e); } });
  board.addEventListener("pointerup", (e) => {
    if (!drag) return;
    const { from, img, ghost } = drag;
    drag = null;
    ghost.remove();
    img.classList.remove("dragging");
    const sq = squareAt(e);
    if (sq && sq !== from && targets(from).includes(sq)) tryMove(from, sq);
  });
  board.addEventListener("pointercancel", () => {
    if (drag) { drag.ghost.remove(); drag.img.classList.remove("dragging"); drag = null; }
  });

  return {
    el: board,
    set(newFen, opts = {}) {
      fen = newFen;
      if (opts.flipped !== undefined) flipped = opts.flipped;
      marks = opts.marks || {};
      arrows = opts.arrows || [];
      selected = null;
      draw();
    },
    shake() {
      board.classList.remove("shake");
      void board.offsetWidth;
      board.classList.add("shake");
    },
    get flipped() { return flipped; },
  };
}
const lastMoveMarks = (uci) => (uci ? { hl: [uci.slice(0, 2), uci.slice(2, 4)] } : {});

// ---------- Motor (isteğe bağlı) ----------
const engine = {
  worker: null, ready: false, fen: null, pending: null, listener: null,
  start() {
    if (this.worker) return;
    try { this.worker = new Worker("stockfish.js"); } catch { this.worker = null; return; }
    this.worker.onmessage = (e) => this.onMsg(String(e.data));
    this.worker.postMessage("uci");
    this.worker.postMessage("isready");
  },
  analyse(fen, listener) {
    this.fen = fen;
    this.listener = listener;
    this.start();
    if (!this.worker) return listener?.({ error: true });
    if (!this.ready) { this.pending = fen; return; }
    this.worker.postMessage("stop");
    this.worker.postMessage(`position fen ${fen}`);
    this.worker.postMessage("go depth 16");
  },
  stop() { this.listener = null; this.worker?.postMessage("stop"); },
  onMsg(msg) {
    if (msg === "readyok") {
      this.ready = true;
      if (this.pending) { const f = this.pending; this.pending = null; this.analyse(f, this.listener); }
      return;
    }
    if (!this.listener || !msg.startsWith("info") || !msg.includes(" pv ")) return;
    const fen = this.fen;
    const sign = fen.split(" ")[1] === "w" ? 1 : -1;
    const cp = msg.match(/ score cp (-?\d+)/), mate = msg.match(/ score mate (-?\d+)/);
    const depth = +msg.match(/ depth (\d+)/)?.[1];
    const uci = msg.split(" pv ")[1].trim().split(" ").slice(0, 6);
    let san = [];
    try {
      const c = new Chess(fen);
      san = uci.map((u) => c.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }).san);
    } catch { return; }
    this.listener({ depth, score: mate ? { mate: sign * +mate[1] } : { cp: sign * +(cp?.[1] || 0) }, san });
  },
};
function fmtScore(s) {
  if (s.mate !== undefined) return `${s.mate > 0 ? "+" : "−"}M${Math.abs(s.mate)}`;
  const v = s.cp / 100;
  return (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(v).toFixed(1);
}
function winPct(s, fen) {
  if (s.mate !== undefined) return s.mate > 0 || (s.mate === 0 && fen.split(" ")[1] === "b") ? 100 : 0;
  return 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * s.cp)) - 1);
}

// ---------- Yönlendirme ----------
const view = $("view");
let cleanup = null;
function setHeader(title, subtitle, canBack) {
  $("title").textContent = title;
  $("subtitle").textContent = subtitle || "";
  $("back").hidden = !canBack;
  document.title = title;
}
function go(hash) { location.hash = hash; }
function route() {
  cleanup?.();
  cleanup = null;
  engine.stop();
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  window.scrollTo(0, 0);
  if (parts[0] === "a" && OPENING.has(parts[1])) {
    const o = OPENING.get(parts[1]);
    const l = parts[2] === "v" ? o.lines.find((x) => x.id === parts[3]) : null;
    if (l && parts[4] === "alistirma") return renderExercise(o, l);
    if (l) return renderStudy(o, l);
    if (parts[2] === "karisik") return renderMixed(o);
    return renderOpening(o);
  }
  if (parts[0] === "ayarlar") return renderSettings();
  renderHome();
}
window.addEventListener("hashchange", route);
function goBack() {
  if (history.length > 1 && location.hash && location.hash !== "#/") history.back();
  else go("#/");
}
$("back").onclick = goBack;
$("settingsBtn").onclick = () => go("#/ayarlar");

// Android geri tuşu (Capacitor App eklentisi varsa).
try {
  const App = window.Capacitor?.registerPlugin?.("App");
  App?.addListener("backButton", () => {
    if (!location.hash || location.hash === "#/" || location.hash === "#") App.exitApp();
    else goBack();
  });
} catch { /* tarayıcıda çalışıyor */ }

// ---------- Ana sayfa ----------
function progressRing(done, total) {
  const r = 18, c = 2 * Math.PI * r, f = total ? done / total : 0;
  return `<div class="progress" aria-label="${done}/${total} alıştırma tamamlandı"><svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="${r}" fill="none" stroke="var(--line)" stroke-width="5"/>${f ? `<circle cx="22" cy="22" r="${r}" fill="none" stroke="var(--accent-2)" stroke-width="5" stroke-linecap="round" stroke-dasharray="${c * f} ${c}"/>` : ""}</svg><span>${done}/${total}</span></div>`;
}
function renderHome() {
  setHeader("Açılış Defteri", "Varyantları öğren, alıştırmayla pekiştir", false);
  const last = load("son", null);
  const lastO = last && OPENING.get(last.o), lastL = lastO?.lines.find((l) => l.id === last.l);
  const totalLines = OPENINGS.reduce((a, o) => a + o.lines.length, 0);
  const doneLines = OPENINGS.reduce((a, o) => a + openingProgress(o).done, 0);
  let html = `<div class="card hero">
    <h2>${lastL ? "Kaldığın yerden devam et" : "Hoş geldin!"}</h2>
    <p>${lastL ? `${esc(lastO.name)} · ${esc(shortName(lastL))}` : "Bir açılış seç, varyantı adım adım izle, sonra alıştırmada hamleleri kendin bul."}</p>
    <p style="margin-top:6px">${doneLines} / ${totalLines} varyantın alıştırması tamamlandı.</p>
    ${lastL ? `<div class="row"><a class="btn light" href="#/a/${lastO.id}/v/${lastL.id}">Varyanta dön</a><a class="btn light" href="#/a/${lastO.id}/v/${lastL.id}/alistirma">Alıştırma</a></div>` : ""}
  </div>`;
  for (const cat of CATEGORIES) {
    html += `<h2 class="section-title">${esc(cat.title)}</h2><div class="list">`;
    for (const id of cat.ids) {
      const o = OPENING.get(id);
      if (!o) continue;
      const p = openingProgress(o);
      html += `<a class="item opening-item" href="#/a/${o.id}">
        <span><span class="name">${esc(o.name)}</span><span class="sub">${o.lines.length} varyant · ECO ${esc(o.eco)}</span></span>
        <span class="side">${progressRing(p.done, p.total)}</span></a>`;
    }
    html += `</div>`;
  }
  html += `<p class="footer">Taşlar: Lichess “cburnett” seti (Colin M. L. Burnett, GPLv2+). Motor: Stockfish (GPLv3).</p>`;
  view.innerHTML = html;
}

// ---------- Açılış sayfası ----------
function renderOpening(o) {
  setHeader(o.name, `${o.lines.length} varyant · ECO ${o.eco}`, true);
  const info = o.played?.[settings.db];
  const lines = sortedLines(o);
  const max = Math.max(1, ...o.lines.map((l) => stat(l)?.oran || 0));
  const p = openingProgress(o);
  const item = (l) => {
    const s = stat(l), pr = lineProgress(o.id, l.id);
    const rate = s ? `<span class="rate"><span class="bar"><i style="width:${((s.oran / max) * 100).toFixed(1)}%"></i></span><b>${fmtP(s.oran)}</b> · ${fmtN(s.mac)} maç</span>` : "";
    return `<a class="item" href="#/a/${o.id}/v/${l.id}">
      <span class="name">${esc(shortName(l))}</span>
      <span class="side">${pr?.best ? starsHtml(pr.best) : ""}${chevron}</span>
      <span class="meta"><span class="eco">${esc(l.eco)}</span>${l.trap ? `<span class="badge trap">Tuzak</span>` : ""}${settings.sort === "oran" && l.group ? `<span>${esc(l.group)}</span>` : ""}${rate}</span></a>`;
  };
  let list = "";
  if (settings.sort === "grup") {
    const groups = [...new Set(lines.map((l) => l.group || ""))];
    list = groups.map((g) => `${g ? `<h3 class="section-title">${esc(g)}</h3>` : ""}<div class="list">${lines.filter((l) => (l.group || "") === g).map(item).join("")}</div>`).join("");
  } else list = `<div class="list">${lines.map(item).join("")}</div>`;
  view.innerHTML = `
    <div class="card intro"><p class="clamp" id="desc">${esc(o.description)}</p><button class="more" id="more">Devamını oku</button></div>
    <div class="card" style="margin-top:10px;display:grid;gap:10px">
      <div class="exrow"><span><b style="color:var(--fg)">${p.done}/${p.total}</b> varyantın alıştırması tamam</span>${p.done ? starsHtml(Math.round(o.lines.reduce((a, l) => a + (lineProgress(o.id, l.id)?.best || 0), 0) / o.lines.length)) : ""}</div>
      <a class="btn block" href="#/a/${o.id}/karisik">Karışık alıştırma (5 varyant)</a>
    </div>
    <div class="toolbar">
      <div class="chips" role="group" aria-label="Sıralama">
        <button class="chip" data-sort="oran" aria-pressed="${settings.sort === "oran"}">En çok oynanan</button>
        <button class="chip" data-sort="grup" aria-pressed="${settings.sort === "grup"}">Gruplar</button>
      </div>
      ${info ? `<div class="chips" role="group" aria-label="Veritabanı">${["genel", "usta"].filter((k) => o.played[k]).map((k) => `<button class="chip" data-db="${k}" aria-pressed="${settings.db === k}">${k === "genel" ? "Genel" : "Usta"}</button>`).join("")}</div>` : ""}
    </div>
    ${list}
    ${info ? `<p class="note">Oran: bu açılışın listedeki varyantlarına giren ${fmtN(info.total || 0)} maç içindeki pay (toplam %100). Kaynak: ${esc(info.source || "")}.</p>` : ""}`;
  $("more").onclick = () => { $("desc").classList.toggle("clamp"); $("more").textContent = $("desc").classList.contains("clamp") ? "Devamını oku" : "Daha az göster"; };
  view.querySelectorAll("[data-sort]").forEach((b) => (b.onclick = () => { settings.sort = b.dataset.sort; saveSettings(); renderOpening(o); }));
  view.querySelectorAll("[data-db]").forEach((b) => (b.onclick = () => { settings.db = b.dataset.db; saveSettings(); renderOpening(o); }));
}

// ---------- Varyant çalışma ekranı ----------
function renderStudy(o, line) {
  save("son", { o: o.id, l: line.id });
  setHeader(shortName(line), o.name, true);
  const path = pathTo(o, line.leaf);
  let idx = 0, extra = [], extraIdx = 0;
  const flipped = settings.side === "b";
  view.innerHTML = `<div class="study">
    <div class="boardbox" id="bb"><div class="evalbar${flipped ? " flip" : ""}" id="evalbar" ${settings.engine ? "" : "hidden"}><div class="w" id="evalw" style="height:50%"></div></div></div>
    ${settings.engine ? `<div class="card engine" id="engine"><b id="escore">…</b><span class="pv" id="epv">hesaplanıyor</span></div>` : ""}
    <div class="card movecard" id="movecard"></div>
    <div class="card"><div class="movelist" id="moves"></div></div>
    <div class="navbar">
      <button class="nb" id="first" aria-label="Başa dön">⏮</button>
      <button class="nb" id="prev" aria-label="Önceki hamle">◀</button>
      <button class="nb" id="next" aria-label="Sonraki hamle">▶</button>
      <button class="nb" id="last" aria-label="Sona git">⏭</button>
      <a class="btn" href="#/a/${o.id}/v/${line.id}/alistirma">Alıştırma</a>
    </div></div>`;
  const curNode = () => (idx ? path[idx - 1] : o.tree);
  const curFen = () => (extraIdx ? extra[extraIdx - 1].fen : curNode().fen);
  const board = createBoard($("bb"), {
    onMove(from, to) {
      const c = new Chess(curFen());
      let m;
      try { m = c.move({ from, to, promotion: "q" }); } catch { return false; }
      const uci = m.from + m.to + (m.promotion || "");
      if (!extraIdx) {
        const child = curNode().children.find((ch) => ch.uci === uci);
        if (child && path[idx] === child) { idx++; render(); return true; }
        if (child) {
          // Başka bir varyantın hamlesi: o varyanta geç.
          let n = child;
          while (n.children.length) n = n.children[0];
          const other = o.lines.find((x) => x.leaf === n.id);
          if (other) { toast(`${shortName(other)} varyantına geçildi`); location.replace(`#/a/${o.id}/v/${other.id}`); return true; }
        }
      }
      extra = extra.slice(0, extraIdx);
      extra.push({ san: m.san, uci, fen: c.fen(), color: m.color, moveNumber: +curFen().split(" ")[5] });
      extraIdx = extra.length;
      render();
      return true;
    },
  });
  function render() {
    const node = curNode();
    const own = extraIdx ? extra[extraIdx - 1] : null;
    board.set(curFen(), { flipped, marks: lastMoveMarks(own ? own.uci : idx ? node.uci : null) });
    let op = null;
    for (let i = idx - 1; i >= 0; i--) if (path[i].opening) { op = path[i].opening; break; }
    const mc = $("movecard");
    if (own) {
      mc.innerHTML = `<div class="head"><span class="mv">${esc(own.color === "w" ? `${own.moveNumber}.${own.san}` : `${own.moveNumber}...${own.san}`)}</span><span class="offbook">kitap dışı</span></div>
        <p class="comment">Bu hamle varyantta yok. Konumu serbestçe inceleyebilirsin.</p>
        <div class="alts"><button class="chip" id="backBook">Varyanta dön</button></div>`;
      $("backBook").onclick = () => { extra = []; extraIdx = 0; render(); };
    } else if (!idx) {
      mc.innerHTML = `<div class="head"><span class="mv">Başlangıç</span><span class="op">${esc(line.group || "")}</span></div>
        <p class="comment">${line.trap ? "Bu bir tuzak varyantı: hatalı hamleyi ve cezasını gösterir. " : ""}Hamleleri ▶ ile tek tek izle ya da taşları kendin oynat. Sonunda alıştırmayla pekiştir.</p>`;
    } else {
      const sym = node.symbol ? `<span class="sym${node.symbol.includes("!") && !node.symbol.includes("?") ? " good" : ""}">${esc(node.symbol)}</span>` : "";
      const others = node.children.filter((c) => c !== path[idx]);
      const atEnd = idx === path.length;
      mc.innerHTML = `<div class="head"><span class="mv">${esc(moveLabel(node))}${sym}</span>${op ? `<span class="op">${esc(op.name)} · ${esc(op.eco)}</span>` : ""}</div>
        <p class="comment">${esc(node.comment || "Bu hamle için açıklama yok.")}</p>
        ${others.length ? `<div class="alts"><span>Diğer devamlar:</span>${others.map((c) => `<button class="chip" data-alt="${c.id}">${esc(moveLabel(c))}${esc(c.symbol || "")}</button>`).join("")}</div>` : ""}`;
      if (atEnd) {
        mc.classList.add("endcard");
        const pr = lineProgress(o.id, line.id);
        mc.insertAdjacentHTML("beforeend", `<div style="margin-top:12px"><h3>Varyantın sonu</h3><p>${pr?.best ? `En iyi sonucun: ${starsHtml(pr.best)}. Tekrar ederek pekiştirebilirsin.` : "Şimdi hamleleri kendin bularak alıştırma yap."}</p><a class="btn block" href="#/a/${o.id}/v/${line.id}/alistirma">Alıştırmaya başla</a></div>`);
      } else mc.classList.remove("endcard");
      mc.querySelectorAll("[data-alt]").forEach((b) => (b.onclick = () => {
        let n = o.byId.get(b.dataset.alt);
        while (n.children.length) n = n.children[0];
        const other = o.lines.find((x) => x.leaf === n.id);
        if (other) location.replace(`#/a/${o.id}/v/${other.id}`);
      }));
    }
    $("moves").innerHTML = path.map((n, i) => {
      const num = n.color === "w" ? `<span class="num">${n.moveNumber}.</span>` : "";
      return `${num}<button class="${n.comment ? "c" : ""}" data-i="${i + 1}" aria-current="${!extraIdx && i + 1 === idx}">${esc(n.san)}${esc(n.symbol || "")}</button>`;
    }).join("");
    $("moves").querySelectorAll("[data-i]").forEach((b) => (b.onclick = () => { extra = []; extraIdx = 0; idx = +b.dataset.i; render(); }));
    $("moves").querySelector('[aria-current="true"]')?.scrollIntoView({ block: "nearest" });
    $("first").disabled = $("prev").disabled = idx === 0 && !extraIdx;
    $("next").disabled = $("last").disabled = extra.length ? extraIdx === extra.length : idx === path.length;
    if (settings.engine) {
      const fen = curFen();
      $("escore").textContent = "…";
      engine.analyse(fen, (r) => {
        if (r.error) { $("epv").textContent = "motor çalışmadı"; return; }
        $("escore").textContent = fmtScore(r.score);
        $("epv").textContent = `d${r.depth} · ${r.san.join(" ")}`;
        $("evalw").style.height = `${winPct(r.score, fen)}%`;
      });
    }
  }
  $("first").onclick = () => { extra = []; extraIdx = 0; idx = 0; render(); };
  $("prev").onclick = () => { if (extraIdx) { extraIdx--; if (!extraIdx) extra = []; } else if (idx) idx--; render(); };
  $("next").onclick = () => { if (extra.length) { if (extraIdx < extra.length) extraIdx++; } else if (idx < path.length) idx++; render(); };
  $("last").onclick = () => { if (extra.length) extraIdx = extra.length; else idx = path.length; render(); };
  render();
}

// ---------- Alıştırma ----------
// Kullanıcı seçtiği renkle varyantın hamlelerini bulur; rakip hamleleri otomatik oynanır.
function exerciseRunner(o, line, { side, onFinish, container, header }) {
  const path = pathTo(o, line.leaf);
  const userTurns = path.filter((n) => n.color === side).length;
  let idx = 0, wrong = 0, firstTry = 0, attempts = 0, busy = false, done = false;
  const mistakes = [];
  container.innerHTML = `<div class="study">
    ${header || ""}
    <div class="exrow"><span id="excount"></span><span>${side === "w" ? "Beyazla" : "Siyahla"} oynuyorsun</span></div>
    <div class="progressbar"><i id="exbar" style="width:0%"></i></div>
    <div class="boardbox" id="exbb"></div>
    <div class="prompt" id="prompt"></div>
    <div class="card movecard" id="excomment" hidden></div>
    <div class="navbar" style="grid-template-columns:1fr 1fr">
      <button class="btn ghost" id="hintBtn">İpucu</button>
      <button class="btn ghost" id="showBtn">Hamleyi göster</button>
    </div></div>`;
  const fen = () => (idx ? path[idx - 1].fen : o.tree.fen);
  let marks = {}, arrows = [];
  const board = createBoard($("exbb"), {
    canMove: () => !busy && !done && path[idx]?.color === side,
    onMove(from, to) {
      const c = new Chess(fen());
      let m;
      try { m = c.move({ from, to, promotion: "q" }); } catch { return false; }
      const uci = m.from + m.to + (m.promotion || "");
      const want = path[idx];
      if (uci === want.uci) {
        if (attempts === 0) firstTry++;
        attempts = 0;
        idx++;
        marks = { ok: [want.uci.slice(0, 2), want.uci.slice(2, 4)] };
        arrows = [];
        setPrompt("good", `Doğru! ${moveLabel(want)}`);
        showComment(want);
        draw();
        advance();
        return true;
      }
      attempts++;
      wrong++;
      const alt = (idx ? path[idx - 1] : o.tree).children.find((ch) => ch.uci === uci);
      if (alt) setPrompt("info", `${moveLabel({ ...want, san: m.san })} de oynanır, ama bu varyantta başka bir hamle var. Tekrar dene.`);
      else setPrompt("bad", attempts >= 2 ? "Yine olmadı. İpucu: işaretli taşı oynat." : "Bu hamle değil, tekrar dene.");
      if (!mistakes.some((x) => x.node === want)) mistakes.push({ node: want, played: m.san });
      if (attempts >= 2) marks = { hint: [want.uci.slice(0, 2)] };
      board.shake();
      if (navigator.vibrate) navigator.vibrate(80);
      draw();
      if (attempts >= 3) revealMove();
      return true;
    },
  });
  function draw() { board.set(fen(), { flipped: side === "b", marks, arrows }); updateBar(); }
  function updateBar() {
    const doneTurns = path.slice(0, idx).filter((n) => n.color === side).length;
    $("excount").textContent = `Hamle ${Math.min(doneTurns + 1, userTurns)} / ${userTurns}`;
    $("exbar").style.width = `${(doneTurns / userTurns) * 100}%`;
  }
  function setPrompt(kind, text) {
    const p = $("prompt");
    p.className = `prompt ${kind}`;
    p.innerHTML = kind === "turn" ? `<span class="dot ${side}"></span>${esc(text)}` : esc(text);
  }
  function showComment(n) {
    const c = $("excomment");
    if (!n?.comment) { c.hidden = true; return; }
    c.hidden = false;
    c.innerHTML = `<div class="head"><span class="mv">${esc(moveLabel(n))}${esc(n.symbol || "")}</span></div><p class="comment">${esc(n.comment)}</p>`;
  }
  function revealMove() {
    const want = path[idx];
    busy = true;
    arrows = [[want.uci.slice(0, 2), want.uci.slice(2, 4)]];
    marks = {};
    setPrompt("info", `Doğru hamle: ${moveLabel(want)}`);
    draw();
    attempts = 0;
    setTimeout(() => {
      idx++;
      arrows = [];
      marks = lastMoveMarks(want.uci);
      showComment(want);
      draw();
      busy = false;
      advance();
    }, 1100);
  }
  function advance() {
    if (idx >= path.length) return finish();
    if (path[idx].color !== side) {
      busy = true;
      setTimeout(() => {
        const n = path[idx];
        idx++;
        marks = lastMoveMarks(n.uci);
        showComment(n);
        draw();
        busy = false;
        advance();
      }, 650);
      return;
    }
    setPrompt("turn", `Sıra sende: ${side === "w" ? "beyazın" : "siyahın"} hamlesini bul`);
  }
  function finish() {
    done = true;
    const stars = wrong === 0 ? 3 : firstTry / userTurns >= 0.75 ? 2 : 1;
    onFinish({ stars, firstTry, total: userTurns, mistakes });
  }
  $("hintBtn").onclick = () => {
    if (busy || done) return;
    const want = path[idx];
    if (!want || want.color !== side) return;
    if (attempts === 0) { attempts = 1; wrong++; if (!mistakes.some((x) => x.node === want)) mistakes.push({ node: want, played: "ipucu" }); }
    marks = { hint: [want.uci.slice(0, 2)] };
    setPrompt("info", "İpucu: işaretli taşı oynat.");
    draw();
  };
  $("showBtn").onclick = () => {
    if (busy || done) return;
    const want = path[idx];
    if (!want || want.color !== side) return;
    wrong++;
    if (!mistakes.some((x) => x.node === want)) mistakes.push({ node: want, played: "gösterildi" });
    revealMove();
  };
  draw();
  setPrompt("turn", "Hazırlan…");
  setTimeout(advance, 400);
  return { stop() { done = true; } };
}

function resultHtml(r, extra) {
  const msg = r.stars === 3 ? "Kusursuz!" : r.stars === 2 ? "Çok iyi!" : "Tamamlandı";
  return `<div class="card result">
    <div class="big">${starsHtml(r.stars)}</div>
    <h2>${msg}</h2>
    <p>${r.firstTry} / ${r.total} hamleyi ilk denemede buldun.</p>
    ${r.mistakes.length ? `<div class="mistakes"><b>Tekrar bakman gereken hamleler:</b>${r.mistakes.map((m) => `<div><b>${esc(moveLabel(m.node))}</b>${m.played && !["ipucu", "gösterildi"].includes(m.played) ? ` (sen: ${esc(m.played)})` : ""}${m.node.comment ? ` — ${esc(m.node.comment)}` : ""}</div>`).join("")}</div>` : ""}
    <div class="actions">${extra}</div></div>`;
}

function sideToggle(onChange) {
  return `<div class="chips" role="group" aria-label="Renk"><button class="chip" data-side="w" aria-pressed="${settings.side === "w"}">Beyazla</button><button class="chip" data-side="b" aria-pressed="${settings.side === "b"}">Siyahla</button></div>`;
}
function bindSide(rerun) {
  view.querySelectorAll("[data-side]").forEach((b) => (b.onclick = () => { settings.side = b.dataset.side; saveSettings(); rerun(); }));
}

function renderExercise(o, line) {
  save("son", { o: o.id, l: line.id });
  setHeader(`Alıştırma: ${shortName(line)}`, o.name, true);
  let runner;
  const start = () => {
    runner?.stop();
    runner = exerciseRunner(o, line, {
      side: settings.side,
      container: view,
      header: `<div class="exrow">${sideToggle()}<a class="chip" href="#/a/${o.id}/v/${line.id}">Varyantı izle</a></div>`,
      onFinish(r) {
        recordResult(o.id, line.id, r.stars, r.firstTry, r.total);
        const order = sortedLines(o);
        const next = order[order.findIndex((l) => l.id === line.id) + 1];
        view.innerHTML = resultHtml(r,
          `<button class="btn block" id="again">Tekrar dene</button>
           ${next ? `<a class="btn ghost block" href="#/a/${o.id}/v/${next.id}">Sonraki varyant: ${esc(shortName(next))}</a>` : ""}
           <a class="btn ghost block" href="#/a/${o.id}">Açılışa dön</a>`);
        $("again").onclick = start;
      },
    });
    bindSide(start);
  };
  start();
  cleanup = () => runner?.stop();
}

// Açılıştan 5 varyant: önce hiç çalışılmamış ya da düşük puanlılar.
function renderMixed(o) {
  setHeader("Karışık alıştırma", o.name, true);
  const pick = [...o.lines]
    .map((l) => ({ l, s: (lineProgress(o.id, l.id)?.best || 0) + Math.random() * 0.9 }))
    .sort((a, b) => a.s - b.s)
    .slice(0, Math.min(5, o.lines.length))
    .map((x) => x.l);
  let i = 0, runner;
  const results = [];
  const next = () => {
    runner?.stop();
    if (i >= pick.length) {
      const total = results.reduce((a, r) => a + r.stars, 0);
      view.innerHTML = `<div class="card result"><div class="big">${starsHtml(Math.round(total / results.length))}</div><h2>Karışık alıştırma bitti</h2>
        <p>${results.length} varyantta toplam ${total} / ${results.length * 3} yıldız.</p>
        <div class="mistakes">${results.map((r) => `<div style="background:var(--accent-soft)">${starsHtml(r.stars)} ${esc(shortName(r.line))}</div>`).join("")}</div>
        <div class="actions"><button class="btn block" id="again">Yeni karışık alıştırma</button><a class="btn ghost block" href="#/a/${o.id}">Açılışa dön</a></div></div>`;
      $("again").onclick = () => renderMixed(o);
      return;
    }
    const line = pick[i];
    runner = exerciseRunner(o, line, {
      side: settings.side,
      container: view,
      header: `<div class="exrow"><b style="color:var(--fg)">${i + 1}/${pick.length}: ${esc(shortName(line))}</b></div>`,
      onFinish(r) {
        recordResult(o.id, line.id, r.stars, r.firstTry, r.total);
        results.push({ ...r, line });
        i++;
        view.innerHTML = resultHtml(r, `<button class="btn block" id="cont">${i < pick.length ? "Sıradaki varyant" : "Sonuçları gör"}</button>`);
        $("cont").onclick = next;
      },
    });
  };
  next();
  cleanup = () => runner?.stop();
}

// ---------- Ayarlar ----------
function renderSettings() {
  setHeader("Ayarlar", "", true);
  view.innerHTML = `<div class="card">
    <div class="setting"><span class="lbl">Tahta rengi</span><div class="swatches">${BOARDS.map(([id, name, l, d]) => `<button class="swatch" data-board="${id}" aria-label="${name}" aria-pressed="${settings.board === id}" style="--l:${l};--d:${d}"><i></i><i></i><i></i><i></i></button>`).join("")}</div></div>
    <div class="setting"><span class="lbl">Görünüm</span><div class="chips">${[["auto", "Telefona göre"], ["light", "Açık"], ["dark", "Koyu"]].map(([k, n]) => `<button class="chip" data-theme="${k}" aria-pressed="${settings.theme === k}">${n}</button>`).join("")}</div></div>
    <div class="setting"><span class="lbl">Alıştırmada oynadığın renk</span>${sideToggle()}<span class="desc">Tahta da bu renge göre çevrilir.</span></div>
    <div class="setting"><label class="switch">Kare koordinatları<input type="checkbox" id="coords" ${settings.coords ? "checked" : ""}></label></div>
    <div class="setting"><label class="switch">Satranç motoru (Stockfish)<input type="checkbox" id="engineChk" ${settings.engine ? "checked" : ""}></label><span class="desc">Varyant ekranında değerlendirme ve en iyi devamı gösterir. Pili daha çok kullanır.</span></div>
    <div class="setting"><span class="lbl">Oynanma oranı veritabanı</span><div class="chips"><button class="chip" data-db="genel" aria-pressed="${settings.db === "genel"}">Genel</button><button class="chip" data-db="usta" aria-pressed="${settings.db === "usta"}">Usta (2600+)</button></div><span class="desc">${esc(SOURCES.genel || "")}<br>${esc(SOURCES.usta || "")}</span></div>
    <div class="setting"><span class="lbl">İlerleme</span><span class="desc">Alıştırma sonuçların yalnızca bu telefonda saklanır.</span><button class="btn ghost" id="reset">İlerlemeyi sıfırla</button></div>
  </div>
  <p class="footer">Açılış Defteri · Taşlar: Lichess “cburnett” (Colin M. L. Burnett, GPLv2+) · Motor: Stockfish (GPLv3)</p>`;
  view.querySelectorAll("[data-board]").forEach((b) => (b.onclick = () => { settings.board = b.dataset.board; saveSettings(); applyTheme(); renderSettings(); }));
  view.querySelectorAll("[data-theme]").forEach((b) => (b.onclick = () => { settings.theme = b.dataset.theme; saveSettings(); applyTheme(); renderSettings(); }));
  view.querySelectorAll("[data-db]").forEach((b) => (b.onclick = () => { settings.db = b.dataset.db; saveSettings(); renderSettings(); }));
  bindSide(renderSettings);
  $("coords").onchange = (e) => { settings.coords = e.target.checked; saveSettings(); };
  $("engineChk").onchange = (e) => { settings.engine = e.target.checked; saveSettings(); };
  $("reset").onclick = () => {
    if (confirm("Tüm alıştırma sonuçların silinsin mi?")) { progress = {}; save("ilerleme", progress); toast("İlerleme sıfırlandı"); }
  };
}

applyTheme();
route();
