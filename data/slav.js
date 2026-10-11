// Slav Savunması modülü: Siyahın kazandığı on usta maçı (kronolojik sırayla) ve alıştırmaları.
import alekhineEuwe from './games/alekhine-euwe-1935.js';
import euweAlekhine from './games/euwe-alekhine-1937.js';
import ragozinCapablanca from './games/ragozin-capablanca-1937.js';
import kortschnojSmyslov from './games/kortschnoj-smyslov-1967.js';
import timmanKasparov from './games/timman-kasparov-1998.js';
import anandMorozevich from './games/anand-morozevich-2001.js';
import carlsenGelfand from './games/carlsen-gelfand-2006.js';
import gelfandAronian from './games/gelfand-aronian-2008.js';
import aronianIvanchuk from './games/aronian-ivanchuk-2008.js';
import anandAronian from './games/anand-aronian-2009.js';

export default {
  id: 'slav',
  name: 'Slav Savunması',
  side: 'b',
  intro: '1.d4 d5 2.c4 c6 ile başlayan Slav Savunması’nı, Siyahın kazandığı on usta maçıyla çalışın. Siyah d5’i c-piyonuyla destekler ve Vezir Gambiti Reddi’nin aksine c8 filini ...e6’dan önce **...Bf5** ya da **...Bg4** ile oyuna sokar. Maçlar ana hat 5.a4 Bf5 (Çek varyantı), **Chebanenko 4...a6** (...b5 ve ...e5 kırılmaları), **...g6** ile Schlechter kuruluşu ve 4.e3 ile sakin hatları kapsıyor. Öne çıkan fikirler **...c5 ve ...e5 kırılmaları**, ileri geçer piyonlar ve ikinci yataya giren kaleler. Tahta Siyahın tarafından gösterilir; alıştırmalarda Siyahın hamlelerini bulursunuz.',
  games: [alekhineEuwe, euweAlekhine, ragozinCapablanca, kortschnojSmyslov, timmanKasparov,
    anandMorozevich, carlsenGelfand, gelfandAronian, aronianIvanchuk, anandAronian],
};
