// Sicilya Alapin modülü: Beyazın kazandığı on usta maçı (kronolojik sırayla) ve alıştırmaları.
import alekhinePodgorny from './games/alekhine-podgorny-1943.js';
import bronsteinMestel from './games/bronstein-mestel-1976.js';
import adamsTiviakov from './games/adams-tiviakov-1994.js';
import karpovPolgar from './games/karpov-polgar-1994.js';
import adamsDzindzichashvili from './games/adams-dzindzichashvili-1994.js';
import adamsHuebner from './games/adams-huebner-1996.js';
import adamsMcShane from './games/adams-mcshane-1997.js';
import tiviakovCarlsen from './games/tiviakov-carlsen-2005.js';
import tiviakovTimman from './games/tiviakov-timman-2006.js';
import nakamuraNepomniachtchi from './games/nakamura-nepomniachtchi-2015.js';

export default {
  id: 'sicilya-alapin',
  name: 'Sicilya Alapin',
  side: 'w',
  intro: '1.e4 c5 2.c3 ile başlayan Alapin varyantını, Beyazın kazandığı on usta maçıyla çalışın. Beyaz c3 hamlesiyle d4’ü hazırlar ve Sicilya’nın keskin ana hatlarına girmeden **tam bir piyon merkezi** kurmaya çalışır. Siyahın cevapları farklı yapılar doğurur: **2...d5** ve **2...Nf6** sonrası çoğu zaman **tek kalmış d-piyonu**, **2...e6** sonrası Fransız’a benzeyen bir merkez, **2...d6** ve **2...g6** sonrası geniş bir piyon merkezi. Her maçta iki tarafın planı, hamle hamle açıklama ve kritik anlar var; alıştırmalar aynı fikri hem maçın kendisinde hem başka bir ustanın maçında sorar.',
  games: [alekhinePodgorny, bronsteinMestel, adamsTiviakov, karpovPolgar, adamsDzindzichashvili,
    adamsHuebner, adamsMcShane, tiviakovCarlsen, tiviakovTimman, nakamuraNepomniachtchi],
};
