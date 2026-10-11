// Slav Savunması, Beyazın kazandığı on usta maçı (kronolojik sırayla) ve alıştırmaları.
import alekhineEuwe1 from './games/alekhine-euwe-1935-1.js';
import botvinnikSmyslov from './games/botvinnik-smyslov-1954.js';
import portischPetrosian from './games/portisch-petrosian-1967.js';
import kramnikMorozevich from './games/kramnik-morozevich-2001.js';
import kasparovSvidler from './games/kasparov-svidler-2004.js';
import topalovKramnik from './games/topalov-kramnik-2006.js';
import eljanovKamsky from './games/eljanov-kamsky-2008.js';
import topalovAnand from './games/topalov-anand-2010.js';
import nakamuraTopalov from './games/nakamura-topalov-2016.js';
import dingCaruana from './games/ding-caruana-2020.js';

export default {
  id: 'slav-beyaz',
  name: 'Slav: Beyazın kazandığı maçlar',
  side: 'w',
  intro: 'Vezir Gambitine (1.d4 d5 2.c4) Slav Savunmasıyla (2...c6) karşılık verilen ve Beyazın kazandığı on usta maçını çalışın. Slav’ı Siyahın tarafından gösteren modülün tamamlayıcısıdır. Beyazın fikirleri: ...dxc4 sonrası a4 ile ...b5’i önleyip c4 piyonunu geri almak, e4 ile merkezi kurmak, f5’e çıkan filin vezir kanadını boş bırakmasından yararlanmak (Qb3 ile b7’ye baskı, Nh4 ile fil çiftini almak), değişim Slav’ında c-hattı ve azınlık hücumu, e4-e5 ile şah kanadında alan. Tahta Beyazın tarafından gösterilir; alıştırmalarda Beyazın hamlelerini bulursunuz.',
  games: [alekhineEuwe1, botvinnikSmyslov, portischPetrosian, kramnikMorozevich, kasparovSvidler,
    topalovKramnik, eljanovKamsky, topalovAnand, nakamuraTopalov, dingCaruana],
};
