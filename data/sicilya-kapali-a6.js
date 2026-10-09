// Sicilya 2.Nc3 e6 3.g3 a6 4.Bg2 yapısı: Siyahın kazandığı on usta maçı (kronolojik sırayla) ve alıştırmaları.
import timmanPopov from './games/timman-popov-1975.js';
import perssonKamsky from './games/persson-kamsky-2012.js';
import franzoniPolugaevsky from './games/franzoni-polugaevsky-1985.js';
import romeroLautier from './games/romero-lautier-1998.js';
import galliamovaPortisch from './games/galliamova-portisch-2001.js';
import tseshkovskyKarjakin from './games/tseshkovsky-karjakin-2003.js';
import ehlvestKamsky from './games/ehlvest-kamsky-2011.js';
import radjabovSvidler from './games/radjabov-svidler-2013.js';
import narcisoMorozevich from './games/narciso-morozevich-2015.js';
import zherebukhCaruana from './games/zherebukh-caruana-2018.js';

export default {
  id: 'sicilya-kapali-a6',
  name: 'Sicilya: 2.Nc3 e6 3.g3 a6',
  side: 'b',
  intro: '1.e4 c5 2.Nc3 e6 3.g3 a6 4.Bg2 yapısını, Siyahın kazandığı on usta maçıyla çalışın. Bu hamle sırası usta maçlarında nadirdir; buradaki maçlar aynı yapıya başka sıralarla ulaşır (2.Nf3 e6 3.Nc3 a6 4.g3, 2.Nc3 a6 3.g3 gibi). Her maçın girişinde hangi sırayla gelindiği yazıyor. Beyaz g3-Bg2 ile kapalı bir kuruluş seçer, çoğu zaman d3 ve f4-f5 ile şah kanadında oynar. Siyahın fikirleri **...b5-b4** ile c3 atını kovalamak, **...Bb7** ile uzun çaprazdan e4’e baskı, **...d5 kırılması** ve Beyazın piyon hücumuna merkezden karşılık vermek. Tahta Siyahın tarafından gösterilir; alıştırmalarda Siyahın hamlelerini bulursunuz.',
  games: [timmanPopov, franzoniPolugaevsky, romeroLautier, galliamovaPortisch,
    tseshkovskyKarjakin, ehlvestKamsky, perssonKamsky, radjabovSvidler, narcisoMorozevich, zherebukhCaruana],
};
