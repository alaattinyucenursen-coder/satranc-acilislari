// Tıklayarak (ya da sürükleyerek değil, iki tıkla) hamle yapılabilen sade bir satranç tahtası.

// Lichess cburnett taş seti (GPLv2+, Colin M.L. Burnett)
const PIECE_DIR = 'assets/pieces/cburnett/';
const FILES = 'abcdefgh';

export class Board {
  constructor(el, { onMove } = {}) {
    this.el = el;
    this.onMove = onMove;
    this.orientation = 'w';
    this.chess = null;
    this.interactive = false;
    this.selected = null;
    this.lastMove = null;
    this.arrows = [];
    this.marks = {};
    el.classList.add('board');
    el.setAttribute('role', 'grid');
    el.addEventListener('click', (e) => {
      const sq = e.target.closest('[data-sq]');
      if (sq) this.handleClick(sq.dataset.sq);
    });
  }

  set({ chess, lastMove = null, interactive = false, arrows = [], marks = {} }) {
    this.chess = chess;
    this.lastMove = lastMove;
    this.interactive = interactive;
    this.arrows = arrows;
    this.marks = marks;
    this.selected = null;
    this.render();
  }

  setArrows(arrows) { this.arrows = arrows; this.renderArrows(); }

  flip() { this.orientation = this.orientation === 'w' ? 'b' : 'w'; this.render(); }

  squares() {
    const ranks = this.orientation === 'w' ? [8, 7, 6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6, 7, 8];
    const files = this.orientation === 'w' ? [...FILES] : [...FILES].reverse();
    const out = [];
    for (const r of ranks) for (const f of files) out.push(f + r);
    return out;
  }

  handleClick(sq) {
    if (!this.interactive || !this.chess) return;
    const piece = this.chess.get(sq);
    if (this.selected) {
      const legal = this.chess.moves({ square: this.selected, verbose: true });
      const mv = legal.find((m) => m.to === sq);
      if (mv) {
        const from = this.selected;
        this.selected = null;
        this.onMove && this.onMove({ from, to: sq, promotion: mv.promotion ? 'q' : undefined });
        return;
      }
    }
    if (piece && piece.color === this.chess.turn()) {
      this.selected = this.selected === sq ? null : sq;
    } else {
      this.selected = null;
    }
    this.render();
  }

  render() {
    const c = this.chess;
    const targets = new Set();
    if (this.selected && c) c.moves({ square: this.selected, verbose: true }).forEach((m) => targets.add(m.to));
    let checkSq = null;
    if (c && c.inCheck()) {
      const b = c.board();
      for (const row of b) for (const p of row) if (p && p.type === 'k' && p.color === c.turn()) checkSq = p.square;
    }
    const html = this.squares().map((sq, i) => {
      const fileIdx = FILES.indexOf(sq[0]);
      const rank = +sq[1];
      const dark = (fileIdx + rank) % 2 === 0;
      const p = c ? c.get(sq) : null;
      const cls = ['sq', dark ? 'dark' : 'light'];
      if (this.lastMove && (this.lastMove.from === sq || this.lastMove.to === sq)) cls.push('last');
      if (this.selected === sq) cls.push('sel');
      if (targets.has(sq)) cls.push(p ? 'capture' : 'target');
      if (checkSq === sq) cls.push('check');
      if (this.marks[sq]) cls.push('mark-' + this.marks[sq]);
      const col = i % 8, row = Math.floor(i / 8);
      const coordF = row === 7 ? `<span class="cf">${sq[0]}</span>` : '';
      const coordR = col === 0 ? `<span class="cr">${sq[1]}</span>` : '';
      const piece = p ? `<img class="pc" src="${PIECE_DIR}${p.color}${p.type.toUpperCase()}.svg" alt="" draggable="false">` : '';
      const label = p ? `${sq} ${p.color === 'w' ? 'beyaz' : 'siyah'} ${p.type}` : sq;
      return `<div class="${cls.join(' ')}" data-sq="${sq}" role="gridcell" aria-label="${label}">${piece}${coordF}${coordR}</div>`;
    }).join('');
    this.el.innerHTML = html + '<svg class="arrows" viewBox="0 0 8 8" aria-hidden="true"></svg>';
    this.el.classList.toggle('interactive', this.interactive);
    this.renderArrows();
  }

  center(sq) {
    let f = FILES.indexOf(sq[0]), r = 8 - +sq[1];
    if (this.orientation === 'b') { f = 7 - f; r = 7 - r; }
    return [f + 0.5, r + 0.5];
  }

  renderArrows() {
    const svg = this.el.querySelector('svg.arrows');
    if (!svg) return;
    svg.innerHTML = this.arrows.map(({ from, to, kind = 'engine' }) => {
      const [x1, y1] = this.center(from), [x2, y2] = this.center(to);
      const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
      const ux = dx / len, uy = dy / len;
      const ex = x2 - ux * 0.32, ey = y2 - uy * 0.32;
      const hx = x2 - ux * 0.05, hy = y2 - uy * 0.05;
      const px = -uy * 0.2, py = ux * 0.2;
      return `<g class="arrow ${kind}"><line x1="${x1}" y1="${y1}" x2="${ex}" y2="${ey}"/>` +
        `<polygon points="${hx},${hy} ${ex + px},${ey + py} ${ex - px},${ey - py}"/></g>`;
    }).join('');
  }
}
