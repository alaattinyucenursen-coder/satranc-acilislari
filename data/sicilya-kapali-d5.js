// Sicilya 2.Nc3 e6 3.g3 d5 yapısı: Siyahın kazandığı on usta maçı (kronolojik sırayla) ve alıştırmaları.
import lawrenceSchlechter from './games/lawrence-schlechter-1904.js';
import chigorinTarrasch from './games/chigorin-tarrasch-1907.js';
import leinTal from './games/lein-tal-1969.js';
import suttlesTal from './games/suttles-tal-1973.js';
import hugKorchnoi from './games/hug-korchnoi-1986.js';
import narodizkiTal from './games/narodizki-tal-1991.js';
import klimenkoMilov from './games/klimenko-milov-1991.js';
import konsekSuetin from './games/konsek-suetin-1991.js';
import belottiPortisch from './games/belotti-portisch-1992.js';
import shortSokolov from './games/short-sokolov-2001.js';

export default {
  id: 'sicilya-kapali-d5',
  name: 'Sicilya: 2.Nc3 e6 3.g3 d5',
  side: 'b',
  intro: '1.e4 c5 2.Nc3 e6 3.g3 d5 4.Bg2 yapısını, Siyahın kazandığı on usta maçıyla çalışın. Tam 4.Bg2 sırası usta maçlarında çok seyrektir: veri tabanında Siyahın kazandığı yalnızca dört maç var (Lawrence–Schlechter, Narodizki–Tal, Klimenko–Milov, Konsek–Suetin). Diğer altı maç aynı 3.g3 d5 yapısına ulaşır, Bg2 bir iki hamle sonra gelir (4.exd5 exd5 5.Bg2 ya da 4.d3). Her maçın girişinde hangi sırayla oynandığı yazıyor. Siyah merkezi hemen **...d5** ile ister; 4.Bg2’ye **...dxe4**, **...d4** ya da **...Nf6** ile karşılık verebilir. ...d4 ile alan kazanıp c3 atını kovalamak, ardından ...e5 ile ters Kral Hint kuruluşu kurmak ve Beyazın f4 hamlesine karşı oynamak bu yapının ana fikirleridir. Tahta Siyahın tarafından gösterilir; alıştırmalarda Siyahın hamlelerini bulursunuz.',
  games: [lawrenceSchlechter, chigorinTarrasch, leinTal, suttlesTal, hugKorchnoi,
    narodizkiTal, klimenkoMilov, konsekSuetin, belottiPortisch, shortSokolov],
};
