// Tarayıcıda çalışan Stockfish 19 (lite, tek iş parçacıklı WASM) için küçük bir sarmalayıcı.
// Motor bir Web Worker içinde çalışır; her analiz isteği bir öncekini iptal eder.

const ENGINE_URL = new URL('../vendor/stockfish/stockfish-19-lite-single.js', import.meta.url);

export class Engine {
  constructor() {
    this.worker = null;
    this.ready = false;
    this.listeners = new Set();
    this.pending = null;      // bekleyen analiz (fen, depth)
    this.searching = false;
    this.currentFen = null;
    this.failed = false;
  }

  start() {
    if (this.worker || this.failed) return;
    try {
      this.worker = new Worker(ENGINE_URL);
    } catch (err) {
      this.failed = true;
      this.emit({ type: 'error', message: 'Motor başlatılamadı. Sayfayı bir web sunucusu üzerinden açın (README).' });
      return;
    }
    this.worker.onmessage = (e) => this.onLine(String(e.data));
    this.worker.onerror = () => {
      this.failed = true;
      this.emit({ type: 'error', message: 'Motor yüklenemedi. Sayfayı bir web sunucusu üzerinden açın (README).' });
    };
    this.send('uci');
  }

  send(cmd) { this.worker && this.worker.postMessage(cmd); }

  on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  emit(msg) { this.listeners.forEach((fn) => fn(msg)); }

  onLine(line) {
    if (line === 'uciok') {
      this.send('setoption name Hash value 32');
      this.send('setoption name MultiPV value 2');
      this.send('isready');
      return;
    }
    if (line === 'readyok') {
      this.ready = true;
      this.emit({ type: 'ready' });
      this.flush();
      return;
    }
    if (line.startsWith('info') && line.includes(' pv ')) {
      const info = parseInfo(line);
      if (info) this.emit({ type: 'info', fen: this.currentFen, ...info });
      return;
    }
    if (line.startsWith('bestmove')) {
      this.searching = false;
      this.emit({ type: 'done', fen: this.currentFen, bestmove: line.split(' ')[1] });
      this.flush();
    }
  }

  analyse(fen, depth = 18) {
    this.start();
    this.pending = { fen, depth };
    if (this.searching) { this.send('stop'); return; }
    this.flush();
  }

  stop() {
    this.pending = null;
    if (this.searching) this.send('stop');
  }

  flush() {
    if (!this.ready || this.searching || !this.pending) return;
    const { fen, depth } = this.pending;
    this.pending = null;
    this.currentFen = fen;
    this.searching = true;
    this.send('position fen ' + fen);
    this.send('go depth ' + depth);
  }
}

function parseInfo(line) {
  const t = line.split(' ');
  const out = { multipv: 1 };
  for (let i = 0; i < t.length; i++) {
    switch (t[i]) {
      case 'depth': out.depth = +t[++i]; break;
      case 'multipv': out.multipv = +t[++i]; break;
      case 'score':
        if (t[i + 1] === 'cp') out.cp = +t[i + 2];
        else if (t[i + 1] === 'mate') out.mate = +t[i + 2];
        i += 2;
        break;
      case 'pv': out.pv = t.slice(i + 1); i = t.length; break;
    }
  }
  return out.pv ? out : null;
}
