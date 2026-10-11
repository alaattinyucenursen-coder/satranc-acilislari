// Sicilya Kan modülü: Siyahın kazandığı on usta maçı (kronolojik sırayla) ve alıştırmaları.
import keresTal from './games/keres-tal-1959.js';
import spasskyTal from './games/spassky-tal-1965.js';
import spasskyPetrosian from './games/spassky-petrosian-1969.js';
import spasskyFischer from './games/spassky-fischer-1972.js';
import talHuebner from './games/tal-huebner-1973.js';
import ehlvestKasparov from './games/ehlvest-kasparov-1991.js';
import ivanchukRublevsky from './games/ivanchuk-rublevsky-2000.js';
import morozevichSvidler from './games/morozevich-svidler-2002.js';
import carlsenKamsky from './games/carlsen-kamsky-2005.js';
import grischukSvidler from './games/grischuk-svidler-2011.js';

export default {
  id: 'sicilya-kan',
  name: 'Sicilya Kan',
  side: 'b',
  intro: '1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6 ile başlayan Kan (Paulsen) varyantını, Siyahın kazandığı on usta maçıyla çalışın. Siyah piyon yapısını esnek tutar, ...Nf6 ve ...d6 hamlelerini erteler. Tipik fikirler **...Qc7** ile c-hattı ve e5 karesi, **...b5-Bb7** ile e4’e baskı, **...Bc5/...Ba7** ya da **...Bb4** ile filin aktifleşmesi ve **...d5 kırılması**. Beyaz c4 ile Maroczy yapısı kurarsa Siyah kirpi kuruluşuna geçer. Tahta Siyahın tarafından gösterilir; alıştırmalarda Siyahın hamlelerini bulursunuz.',
  games: [keresTal, spasskyTal, spasskyPetrosian, spasskyFischer, talHuebner,
    ehlvestKasparov, ivanchukRublevsky, morozevichSvidler, carlsenKamsky, grischukSvidler],
};
