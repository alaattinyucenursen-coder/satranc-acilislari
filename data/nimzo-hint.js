// Nimzo-Hint modülü: Beyazın kazandığı on usta maçı (kronolojik sırayla) ve alıştırmaları.
import rubinsteinNimzowitsch from './games/rubinstein-nimzowitsch-1928.js';
import alekhineEuwe from './games/alekhine-euwe-1937.js';
import botvinnikCapablanca from './games/botvinnik-capablanca-1938.js';
import botvinnikKeres from './games/botvinnik-keres-1948.js';
import spasskySmyslov from './games/spassky-smyslov-1953.js';
import petrosianSpassky from './games/petrosian-spassky-1966.js';
import kasparovKarpov from './games/kasparov-karpov-1985.js';
import kramnikKasparov from './games/kramnik-kasparov-2000.js';
import kramnikAnand from './games/kramnik-anand-2008.js';
import carlsenAnand from './games/carlsen-anand-2013.js';

export default {
  id: 'nimzo-hint',
  name: 'Nimzo-Hint Savunması',
  intro: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 ile başlayan Nimzo-Hint Savunması’nı, Beyazın kazandığı on usta maçıyla çalışın. Siyah c3 atını bağlar ve çoğu zaman filini ata vererek Beyaza ikiye katlanmış piyon ya da kapalı bir merkez bırakır. Maçlar Beyazın farklı cevaplarını gösteriyor: **4.Qc2**, **4.e3**, **4.Bg5** ve **4.Nf3**. Öne çıkan fikirler **fil çifti**, **merkez kırılmaları** (e4, d5, f4), **tek kalmış d-piyonu** ve **zayıf piyonlara baskı**. Her maçta iki tarafın planı, hamle hamle açıklama ve kritik anlar var; alıştırmalar aynı fikri hem maçın kendisinde hem başka bir ustanın maçında sorar.',
  games: [rubinsteinNimzowitsch, alekhineEuwe, botvinnikCapablanca, botvinnikKeres, spasskySmyslov,
    petrosianSpassky, kasparovKarpov, kramnikKasparov, kramnikAnand, carlsenAnand],
};
