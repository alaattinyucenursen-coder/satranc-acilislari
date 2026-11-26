// Korçnoy – Smislov, Moskova–Leningrad maçı, Leningrad 1967. Kaynak: PgnMentor (Korchnoi.pgn).
export default {
  id: 'kortschnoj-smyslov-1967',
  theme: 'Merkez piyonlarıyla şaha yürüyüş: ...e5-e4 ve ...f5-f4',
  white: 'Viktor Korçnoy', black: 'Vasili Smislov',
  whiteShort: 'Korçnoy', blackShort: 'Smislov',
  event: 'Moskova–Leningrad takım maçı', site: 'Leningrad', year: 1967, eco: 'D94',
  variation: 'Slav Savunması, Schlechter varyantı (4.e3 g6)',
  result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 g6 5. Nf3 Bg7 6. Bd3 O-O 7. O-O Bg4 8. h3 Bxf3 9. Qxf3 e6 10. Rd1 Nbd7 11. b4 dxc4 12. Bxc4 Nb6 13. Bb3 Nbd5 14. Na4 Nxb4 15. e4 Nd7 16. Ba3 a5 17. Rac1 Qh4 18. Nb2 Rfd8 19. Nc4 Bf8 20. Bxb4 axb4 21. d5 cxd5 22. exd5 e5 23. Re1 Re8 24. Re4 Qg5 25. Rce1 b5 26. h4 Qh6 27. Ne3 Bd6 28. h5 f5 29. Rh4 Rf8 30. Rh3 e4 31. hxg6 Qxg6 32. Qd1 Rf7 33. Nc2 Rg7 34. g3 Ne5 35. Nd4 Nd3 36. Rf1 f4 37. Qh5 fxg3 38. Qxg6 gxf2+ 39. Kh1 Rxg6 40. Nxb5 Bc5 0-1`,

  summary: 'Sonuç 0-1: **Smislov kazandı.** Schlechter Slav’ında 7...Bg4 ve 8...Bxf3 ile fil çiftini bilerek verdi, c6-d5-e6 yapısıyla sağlam durdu ve Korçnoy’un iddialı 11.b4 ilerleyişinden sonra 14...Nxb4 ile **bir piyon kazandı**. Korçnoy e4 ve d5 ile merkezi açıp taşlarını aktifleştirdi; motora göre 21...cxd5’ten sonra denge tamamen geri gelmişti (Motor: 0.00). Ama Beyaz 23.Re1, 24.Re4 ve özellikle **25.Rce1?** ile kalelerini e-hattına yığınca Smislov’un e- ve f-piyonları tempo kazanarak yürüdü: 27...Bd6 ile d-piyonu durduruldu, **28...f5, 30...e4, 36...f4** ile beyaz şahın önü söküldü. Belirleyici hata **37.Qh5?** oldu (Motor: −2.0’dan −4.3’e); vezirler değişirken gelen **38...gxf2+!** ara şahı Siyaha iki temiz piyon ve f2’de boğucu bir piyon bıraktı.',
  intro: 'Bu oyun 1967’de Leningrad’da oynanan geleneksel Moskova–Leningrad takım maçından. 365chess’in turnuva kaydına göre maç iki turluydu ve Smislov, Leningrad’ın lider tahtası Korçnoy’u iki oyunda da yendi: bu oyunda Siyahla, rövanşta da Beyazla bir Katalan’da. Açılış, Slav yapısını (c6-d5) Grünfeld tarzı bir fianchettoyla birleştiren **Schlechter varyantı** (4.e3 g6); ECO kodu bu yüzden Grünfeld bölümünde (D94) yer alır. Siyahın fikri basittir: g7 fili uzun çaprazdan d4’e baskı yapar, c8 fili ...Bg4 ile e6 kapanmadan önce dışarı çıkar ve gerekirse f3 atıyla değişilir. Beyaz bunun karşılığında fil çiftini ve merkezde biraz alan alır, sonra e4 ile merkezi genişletmeye çalışır. Oyunun öğretici yanı, piyon fazlasını alan Smislov’un sabırla taşlarını kara karelere yerleştirmesi, Beyazın saldırısı şah kanadına kayınca da **merkez piyonlarını bir kama gibi ileri sürerek** karşı saldırıyı kendisinin yapmasıdır.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Fil çiftini almak:** 8.h3 Bxf3 9.Qxf3 ile iki fili tutmak; f3’teki vezir hem d5’e hem de b7 ve f7’ye bakar.',
      '**Vezir kanadında alan:** 11.b4 ile b5 ve c5 hedeflendi; ama ...dxc4 ve ...Nbd5 sonrası b4 piyonu tutulamadı ve 14...Nxb4 ile gitti.',
      '**Piyon karşılığında aktiflik:** 15.e4 ile merkezi genişletmek, kara kareli fili (Ba3) ve kaleleri açık hatlara koymak, d5 kırılmasıyla taşlara alan açmak.',
      '**d5’te geçer piyon:** 21.d5 ve 22.exd5 sonrası d-piyonu geçer piyon oldu; doğru plan bunu 24.d6 veya 27.d6 ile ilerletmekti, Korçnoy ise kalelerini e-hattına götürdü.',
      '**Şah kanadı saldırısı:** 24.Re4, 26.h4, 28.h5 ve Rh4-h3 ile g6’yı ve h7’yi hedef almak; bu saldırı Siyahın ...f5 ve ...e4 ilerleyişleriyle tempo kaybetti.',
      '**Savunmada vezir değişimi:** Siyah üstünlüğü ele geçirince 32.Qh5 veya 33.Qh5 ile vezirleri değişmek en dirençli yoldu; 32.Qd1 ve 33.Nc2 ile vezir pasif kaldı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**Sağlam Schlechter kuruluşu:** ...g6, ...Bg7, ...O-O, sonra ...Bg4xf3 ve ...e6 ile c6-d5-e6 duvarını kurmak; fil çiftini vermenin karşılığı sağlam yapı ve g7 filinin d4’e baskısıdır.',
      '**Gevşek b4 piyonunu almak:** 11...dxc4 ile c4’ü açmak, atları ...Nb6-d5 ile b4’e yöneltmek ve 14...Nxb4 ile piyonu kazanmak; ardından 16...a5 ile atı sağlamlaştırmak.',
      '**Kara karelerde taş yerleştirmek:** ...Qh4, ...Rfd8, ...Bf8 ile hem b4’ü hem merkezi korumak; fil gerektiğinde f8’den d6’ya gidip d-piyonunu durduracak.',
      '**Merkezi piyonla tıkamak:** Beyaz d5 ile açınca 22...e5 ile merkezde kalıcı bir piyon kurmak, 27...Bd6 ile geçer d-piyonunu blokaj altına almak.',
      '**Piyonlarla karşı saldırı:** Beyaz kaleleri e4 ve h-hattına gelince 28...f5, 30...e4 ve 36...f4 ile her ilerleyişte bir beyaz taşa saldırıp tempo kazanmak; g-hattını ...Rf7-g7 ile ele geçirmek.',
      '**Atı beyaz şahın yakınına getirmek:** 34...Ne5 ve 35...Nd3 ile f2’ye ve e1’e baskı kurmak.',
      '**Ara hamle hesabı:** Vezirler değişirken hemen geri almak yerine 38...gxf2+! ile önce şah çekip maddi üstünlüğü ikiye katlamak.',
    ] },
  },
  critical: [
    { move: '11w', title: '11.b4?! iddialı ama gevşek', text: 'Korçnoy vezir kanadında alan almak için b-piyonunu sürdü. Motor dengenin bu hamleyle kaybolduğunu söylüyor: 11.Bf1 (+0.3) veya 11.b3 (+0.3) yerine 11.b4 sonrası +0.0. Sorun şu ki 11...dxc4 12.Bxc4 sonrası Siyahın atları d5 karesine yerleşip b4 piyonunu vurabiliyor; b4’ü bir daha hiçbir beyaz taş rahatça koruyamadı.' },
    { move: '14b', title: '14...Nxb4: piyon Siyahın', text: 'Beyaz 14.Na4 ile c3 atını değişimden kaçırdı ve b4’ü kendi kaderine bıraktı. Smislov hiç tereddüt etmeden aldı (Motor: +0.2; 14...Qe7 +0.6, 14...Nd7 +0.8). Motora göre Beyazın merkez ve geliştirme karşılığı piyona yetecek düzeyde, ama artık Siyahın elinde oyun boyunca sakladığı somut bir artı var. 14.Ne2 ya da 14.Bd2 de piyonu kurtarmıyordu; fark sadece karşılığın kalitesindeydi.' },
    { move: '16w', title: '16.Ba3? fil boşa çalışıyor', text: 'Fil b4 atına saldırır, ama 16...a5 tek hamlede atı sağlamlaştırır ve a3 fili sonradan b4’ü almaktan başka bir iş bulamaz. Motor 16.Rb1’i (+0.3: b-hattına baskı) öneriyor; 16.Ba3 sonrası −0.3/−0.5. Bu, piyon karşılığı oynayan tarafın tempo kaybetmemesi gerektiğine güzel bir örnek.' },
    { move: '21b', title: '21...cxd5: Smislov’un tek gerçek gevşekliği', text: 'Korçnoy 21.d5 ile merkezi açtı. Smislov’un 21...cxd5’i dengeyi geri verdi (Motor: 0.00). 21...Bh6! (−0.6) fili c1-h6 çaprazına getirip c1 kalesine baskı yapacaktı; 21...b5 (−0.8) ise c4 atını kovalayacaktı. Maç hamlesiyle Beyaz d5’te geçer bir piyon aldı ve Siyahın artısı kâğıt üstünde kaldı.' },
    { move: '25w', title: '25.Rce1? c-hattını terk etmek', text: 'Korçnoy iki kalesini e-hattına yığdı; ama e4 kalesi Siyahın ...f5 ilerleyişine açık bir hedef, c-hattı da boşaldı. Motor: 25.Rc2 −0.2, 25.Rd1 −0.3, maç hamlesi −1.3. 25...f5! 26.R4e2 e4 27.Qe3 Qxe3 28.Nxe3 Nc5 ile Siyah sağlam bir piyon fazlasıyla oyunsonuna geçerdi (−1.2/−1.4); Smislov 25...b5 ile de üstünlüğü korudu (−0.9).' },
    { move: '28b', title: '28...f5! piyonlar yürümeye başlıyor', text: 'Beyaz 28.h5 ile g6’ya saldırırken Smislov savunmaya çekilmek yerine f-piyonunu e4 kalesinin üzerine sürdü (Motor: −1.4, en iyi hamle). e5-f5 ikilisi hem e4’ü hem g4’ü kontrol eder ve sıradaki ...e4 vezire tempo kazandıracak. Beyazın h-hattı saldırısı bundan sonra hep bir adım geride kaldı.' },
    { move: '37w', title: '37.Qh5? belirleyici hata', text: 'Korçnoy vezir değişimiyle rahatlamak istedi, ama hesap Siyahın lehine işliyordu: 37...fxg3 38.fxg3 Qxh5 39.Rxh5 Rxg3+ ya da maçtaki gibi 38.Qxg6 gxf2+. Motor (derinlik 19): 37.Ne6! Rf7 38.Qe2 −2.0; 37.Qh5 −4.3. Ne6 hem g7 kalesine hem de f4 piyonuna saldırarak Siyahın taşlarını yerinden oynatacaktı.' },
    { move: '38b', title: '38...gxf2+! önce şah, sonra vezir', text: 'Beyaz 38.Qxg6 ile vezirleri değişti. Hemen 38...Rxg6? 39.fxg3 sonrası Siyah yalnızca bir piyon önde kalırdı (−2.5); 38...hxg6? ise neredeyse dengeye döner (−0.2). Smislov önce g3 piyonuyla f2’yi şah çekerek aldı: piyon şimdi d3 atıyla korunuyor (39.Kxf2 bu yüzden kural dışı), 39.Rxf2 Rxg6+ 40.Kf1 Nxf2 kalite kaybettirir. Motor: −5.2.' },
  ],
  lessons: [
    'Schlechter Slav’ında ...Bg4xf3 ile fil çiftini vermek bir taviz değil, bir tercihtir: Siyah karşılığında hızlı gelişim, sağlam c6-d5-e6 yapısı ve kara karelerde kalıcı kontrol alır.',
    'Merkezde değişim olacaksa (...dxc4), önce kanatta ilerlettiğiniz piyonun (b4) kim tarafından korunacağını hesaplayın; bir at d5’e gelince o piyon çoğu zaman düşer.',
    'Piyon karşılığı oynuyorsanız her hamle bir şey yapmalı: 16.Ba3 gibi bir hamle rakibe ...a5 ile ücretsiz bir sağlamlaştırma verir.',
    'Geçer piyon (d5) ancak ilerlerse değerlidir; kaleler başka işe giderse rakip önüne bir taş (27...Bd6) koyar ve piyon ölü ağırlık olur.',
    'Rakip kanatta saldırıyorsa en iyi karşılık çoğu zaman merkezden gelir: ...f5, ...e4, ...f4 gibi her biri bir taşa saldıran piyon ilerleyişleri karşı tarafın saldırısını yavaşlatır.',
    'Üstün taraf karşısında savunan oyuncu vezir değişimini doğru anda yapmalı; 32.Qh5 iyi bir rahatlamaydı, 37.Qh5 ise bir taktiğe yakalandı.',
    'Değişimlerde hemen geri almadan önce şah çeken bir ara hamle olup olmadığına bakın: 38...gxf2+! maddi üstünlüğü bir piyondan iki piyona ve boğucu bir f2 piyonuna çevirdi.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 0-1: Vasili Smislov (Siyah) kazandı. 40...Bc5 sonrası Siyahın iki piyon fazlası vardı ve f2’deki piyon fil ile at tarafından korunuyor, f1 kalesini bağlıyordu; ...e3 ve g-hattından ...Rg1+ fikirlerine karşı Beyazın savunması yoktu (Motor: −6.6). Korçnoy burada terk etti.' },
    { q: 'Smislov neden 8...Bxf3 ile fil çiftini verdi?', a: '8.h3 fili sorguladı. 8...Bf5? 9.Bxf5 gxf5 şahın önünü bozar (Motor: +0.8), 8...Bh5 ise fili oyundan uzak tutar. 8...Bxf3 9.Qxf3 e6 ile Siyah c6-d5-e6 yapısını kurar ve fil çiftinin sağlam yapılı bir konumda çok iş göremeyeceğine güvenir (Motor: +0.3, Beyaz için küçük ve normal bir artı). Schlechter’in "sağlam" kuruluşu tam olarak budur.' },
    { q: 'b4 piyonu neden kaybedildi?', a: '11.b4 sonrası 11...dxc4 12.Bxc4 Nb6 13.Bb3 Nbd5 ile Siyahın atı d5’e geldi ve hem c3’e hem b4’e saldırdı. b4’ü koruyan hiçbir beyaz taş yoktu; a3 oynansa bile at değişimiyle c3’teki savunucu gidiyordu. Motor 14.Ne2 (+0.4) veya 14.Bd2’yi (+0.3) piyonu bırakıp daha iyi taşlarla devam etmek olarak görüyor; 14.Na4 de bir gambit, sadece at a4’te kenarda kaldı.' },
    { q: 'Beyazın piyon karşılığı neydi, ve ne zaman dengeye geldi?', a: 'Beyazın e4-d4 merkezi, fil çifti ve açık c- ve d-hatları vardı. 21.d5 cxd5 22.exd5 ile d5’te geçer bir piyon oluştu ve motor burada eşitlik görüyor (0.00). Smislov 21...Bh6 ile (−0.6) üstünlüğünü koruyabilirdi; bu oyunda Siyahın tek ciddi gevşekliği bu oldu.' },
    { q: 'Korçnoy nerede yanlış plan seçti?', a: 'Denge geldikten sonra 23.Re1, 24.Re4 ve 25.Rce1 ile kalelerini e-hattına ve şah kanadına götürdü. Motor ise 23.g3 (0.00), 24.d6 (0.0) ve 25.Rc2 (−0.2) gibi hamlelerle geçer piyonu öne çıkarmayı ya da veziri kovalamayı öneriyor. e4’teki kale, Siyahın ...f5 ilerleyişine tempo veren bir hedef oldu; 25.Rce1 sonrası −1.3.' },
    { q: 'Siyahın merkez piyonları neden bu kadar güçlüydü?', a: 'Çünkü her biri tempo kazanarak ilerledi: 28...f5 e4 kalesine, 30...e4 f3 vezirine, 36...f4 g3 piyonuna saldırdı. Beyaz her seferinde savunmak zorunda kaldı ve h-hattı saldırısı için gerekli zamanı bulamadı. Bu piyonlar aynı zamanda d3 ve f3 karelerini Siyahın atına hazırladı; 35...Nd3 bu sayede mümkün oldu.' },
    { q: 'Korçnoy 32. hamlede neden 32.Qh5 oynamalıydı?', a: '31...Qxg6 sonrası 32.Qh5 vezirleri değiştirip Siyahın g-hattı saldırısını sönümlerdi (Motor: −1.4). 32.Qd1 ile vezir pasif kaldı ve Siyah ...Rf7-g7 ile g2’ye baskı kurdu (−2.6). Savunan tarafın en büyük silahı, saldıran taşların en güçlüsünü değişmektir.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'Son ciddi şans 37. hamledeydi: 37.Ne6! Rf7 38.Qe2 fxg3 39.fxg3 Rxf1+ ile Beyaz bir piyon eksiği ama ayakta bir oyunla devam ederdi (Motor: −2.0). 37.Qh5? sonrası 37...fxg3 iki yoldan da (38.fxg3 Qxh5 39.Rxh5 Rxg3+ veya 38.Qxg6 gxf2+) Beyazı kaybedilmiş bir oyunsonuna götürdü (−4.3).' },
    { q: '38...gxf2+ neden 38...Rxg6’dan çok daha iyi?', a: '38...Rxg6 39.fxg3 ile Beyaz g3’teki tehlikeli piyonu ortadan kaldırır, Siyah yalnızca bir piyon önde kalır (−2.5). 38...gxf2+ ise önce şahı çeker: d3 atı f2’yi koruduğu için 39.Kxf2 kural dışı, 39.Rxf2 Rxg6+ 40.Kf1 Nxf2 kalite kaybettirir, 39.Kh1 Rxg6 ise f2’de f1 kalesini bağlayan bir piyon bırakır (−5.3). 39.Kg2?? ise Rxg6+ ile mata gider.' },
  ],
  notes: {
    '1w': {
      text: '1.d4: vezir piyonu iki kare ilerler, e5 ve c5 karelerini kontrol eder ve c1 filine yol açar.',
      amac: 'Merkezi kaplamak ve sonra c4 ile Vezir Gambiti yapısına geçmek. Korçnoy her iki merkez piyonunu da oynayan çok yönlü bir oyuncuydu.',
      neden: 'Motor 1.e4, 1.d4 ve 1.Nf3’ü neredeyse eşit görür (+0.2/+0.4). 1.d4 sonrası oyunlar daha konumsal olur; Korçnoy bu tip yapılarda uzun süre baskı kurmayı severdi.',
      diger: [
        { move: '1.e4', text: 'Açık oyunlar ve Sicilya’ya yol açar (Motor: +0.4). Smislov’un 1.e4’e karşı Ruy Lopez ve Sicilya’daki sağlam repertuvarına karşı daha az şans verirdi.' },
        { move: '1.Nf3', text: 'Esnek bir sıra (Motor: +0.2); çoğu zaman aynı Vezir Gambiti yapılarına döner ama Siyaha ...d5 dışındaki kuruluşları da bırakır.' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah merkezde kendi piyonunu d5’e koyar ve e4’ü kontrol eder.',
      amac: 'Merkezde eşit pay almak ve klasik Vezir Gambiti yapılarına girmek.',
      neden: 'Smislov hem 1...d5 hem de 1...Nf6 oynayan bir ustaydı. 1...d5 ile Grünfeld’in keskin hatlarından kaçınıp yine de ...g6 fikrini ileride kullanma imkânı korunur (Motor: +0.35).',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına esnek giriş (Motor: +0.3). Smislov Beyazın 3.c4 Bg7 4.Nc3 sırasına karşı çoğunlukla ...d5 ile Grünfeld oynardı.' },
        { move: '1...e6', text: 'Fransız ya da Vezir Gambiti Kabul Edilmemiş yapılarına esnek bir sıra (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. c-piyonu d5’e saldırır.',
      amac: 'Siyahın merkez piyonunu değiştirmeye zorlamak ya da c4xd5 ile merkezi Beyaz lehine açmak.',
      neden: 'Bu yapının klasik hamlesi (Motor: +0.3); 2.Nf3 ve 2.g3 gibi sıralar daha sakin kalır.',
      diger: [
        { move: '2.Nf3', text: 'Siyaha seçenekleri biraz kısıtlayan sıra (Motor: +0.2); c4 daha sonra gelebilir.' },
        { move: '2.Bf4', text: 'Londra Sistemi tarzı (Motor: +0.2); 1967’de bugünkü kadar popüler değildi.' },
      ],
    },
    '2b': {
      text: '2...c6: Slav Savunması. d5 piyonu c-piyonuyla desteklenir.',
      amac: 'd5’i e6 oynamadan korumak; böylece c8 filinin çaprazı açık kalır ve fil ...Bf5 ya da ...Bg4 ile dışarı çıkabilir.',
      neden: 'Vezir Gambiti Kabul Edilmemiş’te (2...e6) c8 fili sık sık hapis kalır. Slav bu sorunu çözer. Motor 2...dxc4, 2...c6 ve 2...e6’yı neredeyse eşit görür (+0.3).',
      diger: [
        { move: '2...e6', text: 'Klasik VGKE (Motor: +0.3); sağlam ama c8 filinin gelişimi daha zor.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabul (Motor: +0.3); merkezi bırakıp hızlı gelişime oynar.' },
      ],
    },
    '3w': {
      text: '3.Nc3: at gelişir ve d5’e ikinci baskıyı yapar; ayrıca e4’ü kontrol eder.',
      amac: 'd5 üzerindeki baskıyı artırmak ve e4 ilerleyişini hazırlamak.',
      neden: 'Motor 3.Nc3’ü en iyi görür (+0.4). 3.Nf3 sırası Siyaha ...dxc4 ve ...b5 hatlarında daha fazla seçenek bırakır; 3.Nc3 ise 3...dxc4 4.e4 gibi merkezi hatlarla Siyahı sınar.',
      diger: [
        { move: '3.Nf3', text: 'Ana sıra (Motor: +0.4); 3...Nf6 4.Nc3 dxc4 ile ana Slav’a gider.' },
        { move: '3.cxd5', text: 'Değişme Slav’ı (Motor: +0.4); simetrik ve sakin bir yapı.' },
      ],
    },
    '3b': {
      text: '3...Nf6: at gelişir, d5’i destekler ve e4’ü kontrol eder.',
      amac: 'Normal gelişim; Beyazın e4 ilerleyişini engellemek.',
      neden: 'Motor 3...dxc4’ü biraz daha iyi görür (+0.3) ama 4.e4 ile keskin bir oyun gelir. 3...Nf6 sağlamdır (+0.4) ve Smislov’un konumsal tarzına uyar.',
      diger: [
        { move: '3...dxc4', text: 'Piyonu alıp ...b5 ile tutmaya çalışmak (Motor: +0.3); 4.e3 b5 5.a4 b4 gibi keskin hatlar.' },
        { move: '3...e6', text: 'Yarı Slav’a geçiş (Motor: +0.4); Noteboom ve Meran gibi sistemlere yol açar.' },
      ],
    },
    '4w': {
      text: '4.e3: Beyaz d4’ü sağlamlaştırır ve f1 filine yol açar; c1 filinin önü ise kapanır.',
      amac: 'Sakin, sağlam bir kuruluş: Bd3, Nf3 ve O-O ile hızlı gelişim; keskin ana Slav teorisinden kaçmak.',
      neden: 'Wikipedia’daki Slav maddesi 4.e3 hatlarını "Yavaş Slav" diye anar: ana hattın karmaşıklığından kaçmanın yoludur. Motor bunu en iyi hamle sayar (+0.4). Siyahın 4...Bf5’ine karşı 5.cxd5 cxd5 6.Qb3 hamlesi ise b7’ye baskı yapar.',
      diger: [
        { move: '4.Nf3', text: 'Ana Slav (Motor: +0.35); 4...dxc4 5.a4 Bf5 ile en çok oynanan teorik hatlar.' },
        { move: '4.cxd5', text: 'Değişme hatlarına geçiş (Motor: +0.4); 4...cxd5 5.Bf4 ile simetrik bir oyun.' },
      ],
    },
    '4b': {
      text: '4...g6: Schlechter varyantı. Fil g7’ye gidecek ve uzun çaprazda d4’e baskı yapacak.',
      amac: 'Slav yapısının sağlamlığını Grünfeld’in kara kareli filiyle birleştirmek. chessiro’daki D94 açıklamasına göre Siyah g7 filiyle d4’e uzaktan baskı yapar ve merkeze ...c5 ya da ...e5 ile itiraz etme seçeneğini saklar.',
      neden: '4.e3 sonrası c1 fili pasif kaldığı için Siyahın kara kareli fili g7’de rakipsiz kalır; bu Schlechter’in temel mantığıdır. Motor 4...e6 ve 4...Bf5’i biraz daha iyi görür (+0.3) ama farklar küçük (4...g6 +0.5).',
      diger: [
        { move: '4...Bf5', text: 'Klasik Slav fikri (Motor: +0.3); 5.cxd5 cxd5 6.Qb3 ile b7’ye baskı keskin bir oyun açar.' },
        { move: '4...e6', text: 'Yarı Slav (Motor: +0.3); 5.Nf3 Nbd7 6.Bd3 dxc4 ile Meran’a geçilir.' },
        { move: '4...a6', text: 'Çebanenko fikri; ...b5 ile vezir kanadında alan almak.' },
      ],
    },
    '5w': {
      text: '5.Nf3: at gelişir, d4’ü ve e5’i korur.',
      amac: 'Rok için şah kanadını hazırlamak.',
      neden: 'En doğal gelişim (Motor: +0.5); 5.Be2 aynı değerde. f3’teki at ileride ...Bg4 ile bağlanabilir, bu da Siyahın oyunu için bir hedef olacak.',
      diger: [
        { move: '5.Be2', text: 'Motor aynı değeri verir (+0.5); fil e2’de ...dxc4 ile tempo kaybetmez.' },
        { move: '5.Bd3', text: '5...Bg7 6.Nf3 c5 gibi esnek hatlar (Motor: +0.45).' },
      ],
    },
    '5b': {
      text: '5...Bg7: fil uzun çapraza yerleşir.',
      amac: 'd4’e baskı yapmak ve şahı rok için hazırlamak.',
      neden: 'Planın doğal devamı (Motor: +0.5). Fil g7’de hem savunur hem de ileride ...e5 veya ...c5 kırılmalarında d4’e destek olur.',
      diger: [
        { move: '5...a6', text: 'Çebanenko tarzı bekleme (Motor: +0.55); ...b5 hazırlar.' },
        { move: '5...e6', text: 'Erken ...e6 (Motor: +0.6); c8 filini kapattığı için Schlechter’in ruhuna aykırı.' },
      ],
    },
    '6w': {
      text: '6.Bd3: fil d3’e gelişir; b1-h7 çaprazına bakar ve rok hazırlanır.',
      amac: 'Hızlı rok ve ardından e4 ilerleyişi.',
      neden: 'Motor 6.Be2’yi (+0.5) biraz daha iyi görüyor çünkü d3’teki fil Siyahın ...dxc4 hamlesiyle tempo kaybedecek; bu oyunda da 11...dxc4 sonrası fil bir kez daha oynamak zorunda kaldı. Bd3’ün artısı, fil e4 ilerleyişini desteklemesidir.',
      diger: [
        { move: '6.Be2', text: 'Motor en iyiyi bunu görür (+0.5); fil ...dxc4 ile tempo kaybetmez.' },
        { move: '6.h3', text: '...Bg4’ü önleyen ihtiyat (Motor: +0.4); ama bir gelişim temposu harcar.' },
      ],
    },
    '6b': {
      text: '6...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini oyuna sokmak.',
      neden: 'Motor 6...Bg4 (+0.3), 6...O-O (+0.4) ve 6...c5’i (+0.4) yakın görür. Smislov önce şahını güvenceye alıp ...Bg4’ü sonraki hamleye bıraktı.',
      diger: [
        { move: '6...Bg4', text: 'Hemen bağlamak (Motor: +0.3); 7.Qb3 Bxf3 8.gxf3 Qb6 gibi hatlar.' },
        { move: '6...c5', text: 'Merkeze Grünfeld tarzı itiraz (Motor: +0.4); 7.O-O cxd4 8.exd4 ile yalnız piyon yapısı.' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz da rok yapar.',
      amac: 'Gelişimi tamamlamak; kaleyi d1 veya e1’e getirmek.',
      neden: 'Motor 7.h3’ü (+0.4) biraz daha iyi görür çünkü ...Bg4’ü önler. Korçnoy rok yapmayı seçti ve ...Bg4’e izin verdi (+0.3).',
      diger: [
        { move: '7.h3', text: '...Bg4’ü önler (Motor: +0.4); 7...c5 8.O-O cxd4 9.exd4 ile devam.' },
        { move: '7.cxd5', text: 'Merkezi değiştirmek (Motor: +0.3); 7...cxd5 sonrası simetrik ve sakin bir oyun.' },
      ],
    },
    '7b': {
      text: '7...Bg4: c8 fili dışarı çıkar ve f3 atını bağlar.',
      amac: 'e6 ile fil kapanmadan önce onu oyuna sokmak; gerekirse f3 atıyla değişip d4’ü ve e5’i korumasız bırakmak.',
      neden: 'Motor bunu en iyi hamle görür (+0.3). Modern-Chess’in Schlechter kursu tanıtımında 7...Bg4 "en güvenilir, sağlam kuruluş" olarak anılıyor; 7...dxc4 ve 7...Nbd7 de diğer seçenekler.',
      diger: [
        { move: '7...Be6', text: 'Fili e6’ya koymak (Motor: +0.4); 8.cxd5 cxd5 sonrası fil biraz garip durur.' },
        { move: '7...dxc4', text: 'Merkezi bırakıp d3 filine tempo kazanmak; Modern-Chess kursunun "profesyonel" kuruluş dediği yol.' },
        { move: '7...a6', text: 'Bekleme (Motor: +0.5); ...b5 hazırlar.' },
      ],
    },
    '8w': {
      text: '8.h3: fil sorgulanır; ya değişmeli ya da geri çekilmeli.',
      amac: 'Fil çiftini kazanmak ve f3 atının bağını çözmek.',
      neden: 'Motor en iyi bunu görür (+0.4). 8.Qb3 b7’ye baskı yapar ama 8...Bxf3 9.gxf3 sonrası Beyazın yapısı bozulur (+0.3).',
      diger: [
        { move: '8.Qb3', text: 'b7’ye baskı (Motor: +0.3); 8...Bxf3 9.gxf3 Qb6 ile şah kanadı yapısı bozulur.' },
        { move: '8.Be2', text: 'Sakin (Motor: +0.3); 8...dxc4 9.Bxc4 c5 ile Siyah rahat eşitler.' },
      ],
    },
    '8b': {
      text: '8...Bxf3: Siyah fili atla değişir.',
      amac: 'Beyaz fil çiftini alır, ama Siyah sağlam bir yapıyla karşılık verir; f3 atı gittiği için d4 artık daha zayıf.',
      neden: 'Motor en iyi bunu görür (+0.25). 8...Bf5? 9.Bxf5 gxf5 şahın önünü bozar (+0.8); 8...dxc4 9.Bxc4 Bxf3 10.Qxf3 (+0.6) ise c4 filine aktif bir yer verir.',
      diger: [
        { move: '8...Bf5', text: '9.Bxf5 gxf5 sonrası şah kanadı yapısı bozulur (Motor: +0.8).' },
        { move: '8...dxc4', text: '9.Bxc4 Bxf3 10.Qxf3 ile fil c4’te ideal yerde (Motor: +0.6).' },
      ],
    },
    '9w': {
      text: '9.Qxf3: vezir geri alır; f3’ten d5’e ve b7’ye bakar.',
      amac: 'Fil çiftini korumak ve şah kanadı yapısını bozmamak.',
      neden: 'Zorunlu bir geri alış: 9.Qb3?? gibi bir hamle fili f3’te bırakır ve bir taş kaybettirir (Motor: −3.9). 9.gxf3 yapıyı bozar ve motor bunu Beyaz için daha kötü görür.',
      diger: [
        { move: '9.gxf3', text: 'Yapıyı bozar; Beyaz g-hattını açar ama şahı açıkta kalır (Motor: −0.15).' },
      ],
    },
    '9b': {
      text: '9...e6: d5 ikinci kez desteklenir; c6-d5-e6 yapısı kurulur.',
      amac: 'f3 vezirinin d5’e baskısını nötrlemek ve merkezi kilitlemek; fil çiftinin açık hatlara ihtiyacı vardır, Siyah bu hatları kapatır.',
      neden: 'Motor en iyi bunu görür (+0.3). Artık beyaz kareli fil olmadığı için e6 piyonu bir fili hapsetmez. 9...Re8 ve 9...Qd6 de aynı değerde.',
      diger: [
        { move: '9...Re8', text: '...e5 hazırlığı (Motor: +0.3); 10.Rd1 e6 ile genelde aynı yapıya döner.' },
        { move: '9...Qd6', text: 'Vezir d6’dan b4 ve h2’ye bakar (Motor: +0.3).' },
      ],
    },
    '10w': {
      text: '10.Rd1: kale d-hattına gelir; d4’ü destekler.',
      amac: 'Merkezde ileride d5 veya e4 kırılmaları için kaleyi hazırlamak.',
      neden: 'Motor en iyi bunu görür (+0.3); 10.b3 ve 10.Bd2 eşdeğer. Kale d1’de ileride d5 kırılmasıyla açılacak d-hattında aktif olacak.',
      diger: [
        { move: '10.b3', text: 'Fili b2’ye getirmek (Motor: +0.3); c4’ü sağlamlaştırır.' },
        { move: '10.Bd2', text: 'Sakin gelişim (Motor: +0.3); 10...c5 ile Siyah merkeze itiraz eder.' },
      ],
    },
    '10b': {
      text: '10...Nbd7: b8 atı gelişir.',
      amac: 'Atı ...Nb6 veya ...e5 için hazırlamak; f6 atını desteklemek.',
      neden: 'Motor 10...Re8, 10...Qe7 ve 10...Nbd7’yi aynı görür (+0.3). Nbd7 esnektir: ...e5 veya ...dxc4 ve ...Nb6-d5 planlarından birini seçme imkânı verir.',
      diger: [
        { move: '10...Re8', text: '...e5 hazırlığı (Motor: +0.3).' },
        { move: '10...Qe7', text: 'Vezir e7’de c5 ve e5’i destekler (Motor: +0.3).' },
      ],
    },
    '11w': {
      text: '11.b4?!: Beyaz vezir kanadında alan almak ister; b5 ile c6’ya baskı fikri.',
      amac: 'Bir azınlık saldırısı fikri: b5 ile Siyahın c6-d5 zincirini kırmak ve c-hattını açmak.',
      neden: 'Motor bunu doğru bulmuyor: 11.Bf1 (+0.3), 11.b3 (+0.25) yerine +0.0. Sorun, ...dxc4 sonrası d5 karesinin bir at için boşalması ve b4’ün korumasız kalmasıdır. Korçnoy belki b4’ü bir gambit gibi düşünmüştü.',
      diger: [
        { move: '11.Bf1', text: 'Fili ...dxc4 tempolarından korumak (Motor: +0.3).' },
        { move: '11.b3', text: 'c4’ü sağlamlaştırmak ve fili b2’ye getirmek (Motor: +0.25).' },
        { move: '11.a4', text: 'a5 ile alan almak (Motor: +0.2).' },
      ],
    },
    '11b': {
      text: '11...dxc4: Siyah c4’te alır ve d3 filini geri almaya zorlar.',
      amac: 'd5 karesini atlar için boşaltmak ve b4 piyonunu zayıflatmak.',
      neden: 'Motor en iyi bunu görür (+0.1). Şimdi d5’e bir at gelince hem c3’e hem b4’e saldıracak.',
      diger: [
        { move: '11...a6', text: 'b5’i önlemek (Motor: +0.1); ama daha pasif.' },
        { move: '11...Re8', text: '...e5 hazırlığı (Motor: +0.2).' },
      ],
    },
    '12w': {
      text: '12.Bxc4: fil geri alır.',
      amac: 'Piyonu geri kazanmak.',
      neden: 'Zorunlu: 12.Be2? Nd5 13.e4 Nxc3 sonrası b4 de düşer ve Siyah piyon fazlasıyla kalır (Motor: −1.4).',
      diger: [
        { move: '12.Be2', text: '12...Nd5 13.e4 Nxc3 14.Qxc3 ile Siyah bir piyon önde (Motor: −1.4).' },
      ],
    },
    '12b': {
      text: '12...Nb6: at fili kovalar ve d5’e yönelir.',
      amac: 'c4 filini tempo kazanarak kovalamak ve ikinci atı d5’e getirmek.',
      neden: 'Motor 12...Nd5’i (+0.2) biraz daha iyi görür çünkü at hemen c3’e ve b4’e saldırır. 12...Nb6 (+0.5) daha yavaş ama aynı fikri izler.',
      diger: [
        { move: '12...Nd5', text: 'Hemen c3’e ve b4’e saldırmak (Motor: +0.2); 13.e4 Nxc3 14.Qxc3 a5.' },
        { move: '12...b5', text: 'Fili kovalayıp vezir kanadında alan almak (Motor: +0.2).' },
      ],
    },
    '13w': {
      text: '13.Bb3: fil b3’e çekilir; d5 ve e6’ya bakmayı sürdürür.',
      amac: 'Fili aktif çaprazda tutmak; ileride d5 kırılmasını desteklemek.',
      neden: 'Motor en iyi bunu görür (+0.5). 13.Be2 (+0.1) daha pasif, 13.Bf1 (+0.3) fili oyun dışı bırakır.',
      diger: [
        { move: '13.Be2', text: 'Daha pasif (Motor: +0.1).' },
        { move: '13.Bf1', text: 'Fil şahı korur ama oyun dışı kalır (Motor: +0.3).' },
      ],
    },
    '13b': {
      text: '13...Nbd5: at d5’e gelir; c3 atına ve b4 piyonuna saldırır.',
      amac: 'b4 piyonunu almak ya da c3 atını değiştirip vezir kanadındaki beyaz yapıyı zayıflatmak.',
      neden: 'Motor en iyi bunu görür (+0.5). 13...Nfd5 (+0.6) f6 atını şah kanadından uzaklaştırır.',
      diger: [
        { move: '13...Nfd5', text: 'f6 atıyla d5’e gelmek (Motor: +0.6); şah kanadı savunması zayıflar.' },
        { move: '13...Qe7', text: 'b4’e baskı (Motor: +0.8); e4 ve e5 ile Beyaz merkezde ilerler.' },
      ],
    },
    '14w': {
      text: '14.Na4: at a4’e çekilir; değişimden kaçar ama b4’ü korumayı bırakır.',
      amac: 'Atı c5’e götürmek ve piyon karşılığında aktif oyun aramak.',
      neden: 'b4 zaten korunamıyordu; asıl soru karşılığın kalitesiydi. Motor 14.Ne2’yi (+0.4) öneriyor: at merkeze yakın kalır ve 14...Nxb4 15.e4 ile Beyaz iyi bir karşılık alır. 14.Na4 (+0.3) atı kenara götürür.',
      diger: [
        { move: '14.Ne2', text: '14...Nxb4 15.e4 a5 16.Rb1 (Motor: +0.4); at şah kanadına ve merkeze yakın.' },
        { move: '14.Bd2', text: '14...Nxb4 15.e4 Qxd4 16.Bf4 (Motor: +0.3).' },
      ],
    },
    '14b': {
      text: '14...Nxb4!: Siyah piyonu alır.',
      amac: 'Somut bir maddi üstünlük almak; bu piyon oyun boyunca Siyahın elinde kalacak.',
      neden: 'Motor en iyi bunu görür (+0.2); 14...Qe7 (+0.6) ve 14...Nd7 (+0.8) çok daha zayıf. Smislov Beyazın merkez karşılığının fazla olmadığını doğru değerlendirdi.',
      diger: [
        { move: '14...Qe7', text: 'Piyonu almadan önce merkezi korumak (Motor: +0.6); 15.a3 ile Beyaz b4’ü korur.' },
        { move: '14...Nd7', text: 'Çok pasif (Motor: +0.8); 15.Bd2 Qf6 16.Qxf6 Bxf6.' },
      ],
    },
    '15w': {
      text: '15.e4: merkez genişler; e5 tehdidi f6 atına yöneliyor.',
      amac: 'Piyon karşılığında alan ve aktif oyun almak; e5 ile f6 atını kovalayıp g7 filini kapatmak.',
      neden: 'Motor en iyi bunu görür (+0.15). 15.Bd2 (+0.1) ve 15.Rb1 (+0.1) daha yavaş.',
      diger: [
        { move: '15.Bd2', text: 'b4 atına saldırmak (Motor: +0.1); 15...a5 16.Rab1.' },
        { move: '15.Rb1', text: 'b-hattında baskı (Motor: +0.1).' },
      ],
    },
    '15b': {
      text: '15...Nd7: at d7’ye çekilir; e5 ve c5’i kontrol eder.',
      amac: 'e5 tehdidini önceden önlemek ve g7 filinin d4’e baskısını açmak.',
      neden: 'Motor en iyi bunu görür (+0.1). At f6’da kalsaydı e5 ile kovalanırdı. 15...b5 (+0.3) ise 16.Nc5 ile atı güçlü bir kareye getirir.',
      diger: [
        { move: '15...b5', text: '16.Nc5 Nd7 17.Nxd7 Qxd7 ile at değişimi (Motor: +0.3).' },
        { move: '15...Qe7', text: '16.Rb1 Nd7 17.Qg3 (Motor: +0.3).' },
      ],
    },
    '16w': {
      text: '16.Ba3?: fil b4 atına saldırır.',
      amac: 'b4 atını kovalamak ya da değişip piyonu geri almak.',
      neden: 'Motor bunu yanlış buluyor: 16.Rb1 (+0.3) b-hattında baskı kurar, 16.a3 (+0.1) atı geri gönderir. 16.Ba3 sonrası 16...a5 atı sağlamlaştırır ve fil sonunda yalnızca b4’le değişebilir (−0.3/−0.5).',
      diger: [
        { move: '16.Rb1', text: '16...b5 17.Nc3 Qa5 18.e5 ile b-hattında baskı (Motor: +0.3).' },
        { move: '16.a3', text: '16...Na6 17.Rb1 b5 18.Nc3 ile at kenarda (Motor: +0.1).' },
        { move: '16.Be3', text: 'Merkezi destekleyen gelişim (Motor: +0.0).' },
      ],
    },
    '16b': {
      text: '16...a5: b4 atı piyonla desteklenir.',
      amac: 'Piyon fazlasını korumak ve atı b4’te kazık gibi sabitlemek. a5 piyonu aynı zamanda a-hattını ileride kale için açmaya hazırlar.',
      neden: 'Motor en iyi bunu görür (−0.5). At b4’te a5 ile korununca a3 filinin tek işi onu almak olur; bu da Siyaha bağlantılı b-piyonları ve açık a-hattı verecek. 16...Qa5? 17.Qc3 c5 18.Nxc5 Qxa3 ise taşları dağıtır ve oyunu eşitler (−0.1).',
      diger: [
        { move: '16...Qa5', text: '17.Qc3 c5 18.Nxc5 Qxa3 ile eşit bir oyun (Motor: −0.1).' },
        { move: '16...Qe7', text: 'b4’ü vezirle korumak (Motor: −0.4).' },
      ],
    },
    '17w': {
      text: '17.Rac1: kale c-hattına gelir ve c6’ya baskı yapar.',
      amac: 'c-hattında baskı kurup c6’yı hedef almak.',
      neden: 'Motor en iyi bunu görür (−0.5). Kale c1’de c6’ya ve c7’ye baskı yapar.',
      diger: [
        { move: '17.Rab1', text: 'b-hattında baskı (Motor: −0.7).' },
        { move: '17.Qe2', text: 'Vezir e2’den b5’e bakar (Motor: −0.7).' },
      ],
    },
    '17b': {
      text: '17...Qh4: vezir h4’e gelir; e4’e saldırır ve şah kanadında aktifleşir.',
      amac: 'e4’e baskı kurmak, d8’i kaleye boşaltmak ve vezirle şah kanadını hem saldırı hem savunma için kontrol etmek.',
      neden: 'Motor en iyi bunu görür (−0.4); 17...Qe7 (−0.4) eşdeğer. Vezir h4’ten e4’e ve f2’ye bakar; f3 vezirini e4’ü korumaya bağlar. Daha sonra g5 ve h6’ya geçerek şah kanadının bekçisi olacak — 26...Qh6 ve 31...Qxg6 bu kararın meyveleri.',
      diger: [
        { move: '17...Qe7', text: '17...Qe7 18.e5 Rfd8 19.Qe2 (Motor: −0.4).' },
        { move: '17...Qf6', text: 'Vezir değişimi önerir (Motor: −0.3).' },
      ],
    },
    '18w': {
      text: '18.Nb2: at b2’ye çekilir; c4 ve d3’e gitmek için.',
      amac: 'Atı kenardan kurtarıp c4 karesine götürmek; oradan d6’ya, b6’ya ve e5’e bakacak.',
      neden: 'Motor 18.d5’i (−0.2) öneriyor: 18...Ne5 19.Qe2 exd5 20.Bxb4 ile merkez hemen açılır ve Beyazın taşları canlanır. 18.Nb2 iki tempoluk bir manevra (−0.8); piyon eksiği olan taraf için zaman kaybı pahalıdır.',
      diger: [
        { move: '18.d5', text: '18...Ne5 19.Qe2 exd5 20.Bxb4 ile merkez açılır (Motor: −0.2).' },
        { move: '18.Bxb4', text: '18...axb4 19.d5 (Motor: −0.3).' },
        { move: '18.Nc5', text: '18...Nxc5 19.Rxc5 Rfd8 (Motor: −0.4).' },
      ],
    },
    '18b': {
      text: '18...Rfd8: kale d-hattına gelir ve d4’e karşı durur.',
      amac: 'd-hattını kontrol etmek ve d4 piyonuna baskı yapmak.',
      neden: 'Motor 18...b5’i (−0.7) biraz daha iyi görür; 18...Rfd8 (−0.6) sağlam ve doğal.',
      diger: [
        { move: '18...b5', text: '19.Bxb4 axb4 20.Rxc6 Bxd4 ile aktif oyun (Motor: −0.7).' },
        { move: '18...Bh6', text: 'Fil c1 kalesine baskı (Motor: −0.6).' },
      ],
    },
    '19w': {
      text: '19.Nc4: at c4’e gelir; d6 ve b6’ya bakar.',
      amac: 'Atı aktifleştirip vezir kanadındaki baskıyı artırmak.',
      neden: 'Motor en iyi bunu görür (−0.6). 19.g3? Qxh3 bir piyon daha kaybettirir (−1.2).',
      diger: [
        { move: '19.Na4', text: 'Atı geri götürmek (Motor: −1.1).' },
        { move: '19.g3', text: '19...Qxh3 ile bir piyon daha gider (Motor: −1.2).' },
      ],
    },
    '19b': {
      text: '19...Bf8: fil f8’e çekilir ve b4 atını f8-b4 çaprazından destekler.',
      amac: 'b4’ü ikinci kez korumak; ileride fil d6’ya gidip blokaj yapacak.',
      neden: 'Motor en iyi bunu görür (−0.7); 19...Bh6 (−0.6) eşdeğer.',
      diger: [
        { move: '19...Bh6', text: 'Fil c1 kalesine baskı (Motor: −0.6).' },
        { move: '19...Qf6', text: 'Vezir değişimi önerir (Motor: −0.3).' },
      ],
    },
    '20w': {
      text: '20.Bxb4: Beyaz fili b4 atıyla değişir.',
      amac: 'Siyahın en aktif atını oyundan almak ve d5 kırılmasının yolunu temizlemek.',
      neden: 'Motor 20.Bb2’yi (−0.6) biraz daha iyi görür; fil uzun çaprazda kalır. 20.Bxb4 (−0.8) Beyazın kara kareli filini verir, Siyahın kara kareli fili ise rakipsiz kalır; bu ileride ...Bd6 ve ...Bc5 ile önemli olacak.',
      diger: [
        { move: '20.Bb2', text: '20...b5 21.Nxa5 Rxa5 22.a3 (Motor: −0.6).' },
        { move: '20.e5', text: 'Merkezi ilerletmek (Motor: −0.7).' },
      ],
    },
    '20b': {
      text: '20...axb4: piyonla alınır; a-hattı açılır.',
      amac: 'Fili f8’de tutmak ve a-hattını açmak.',
      neden: 'Motor en iyi bunu görür (−0.8). 20...a4?? 21.Bxf8 axb3 22.Bd6 bir taş kaybettirir (+3.5).',
      diger: [
        { move: '20...Bxb4', text: 'Fil b4’te aktif (Motor: −0.7).' },
        { move: '20...a4', text: '21.Bxf8 axb3 22.Bd6 ile bir taş gider (Motor: +3.5).' },
      ],
    },
    '21w': {
      text: '21.d5: Beyaz merkezi açar.',
      amac: 'Siyahın piyon fazlasına karşı hatları açmak: d-hattı kaleye, b3 filine a2-g8 çaprazı açılır ve d5’te geçer piyon fırsatı doğar.',
      neden: 'Motor en iyi bunu görür (−0.6). Piyon eksiği olan tarafın kapalı merkezde beklemesi kaybettirir; Korçnoy doğru anda açtı. 21.e5 ve 21.g3 (−0.9) daha zayıf; 21.g3? Qxh3 bir piyon daha verir.',
      diger: [
        { move: '21.e5', text: '21...Rac8 22.Kh2 b5 (Motor: −0.9).' },
        { move: '21.g3', text: '21...Qxh3 ile bir piyon daha (Motor: −0.9).' },
      ],
    },
    '21b': {
      text: '21...cxd5: Siyah alır.',
      amac: 'Merkezi değiştirmek; ama d5’te Beyaza geçer bir piyon verir.',
      neden: 'Motor bunu doğru bulmuyor: 21...Bh6 (−0.6) veya 21...b5 (−0.8) üstünlüğü korur. 21...cxd5 sonrası 0.00.',
      diger: [
        { move: '21...Bh6', text: '22.Rc2 b5 23.g3 Qe7 ile Siyah üstün (Motor: −0.6).' },
        { move: '21...b5', text: '22.dxc6 bxc4 23.Rxd7 Rxd7 24.cxd7 cxb3 (Motor: −0.8).' },
      ],
    },
    '22w': {
      text: '22.exd5: zorunlu geri alış; d5’te geçer bir piyon oluşur.',
      amac: 'Piyonu geri almak ve geçer piyonu yaratmak.',
      neden: 'Zorunlu: 22.g3? dxe4 23.Qxf7+ Kxf7 24.gxh4 Siyahı çok önde bırakır (−2.7).',
      diger: [
        { move: '22.g3', text: '22...dxe4 23.Qxf7+ Kxf7 24.gxh4 (Motor: −2.7).' },
      ],
    },
    '22b': {
      text: '22...e5: Siyah e-piyonunu e5’e sürer.',
      amac: 'd5 geçer piyonunun önünü tıkamak, merkezde kalıcı bir piyon kurmak ve f4/d4 karelerini kontrol etmek.',
      neden: 'Motor en iyi bunu görür (−0.1). e5 piyonu ileride e4 ile vezire tempo kazanacak ve f-piyonunun ilerleyişine destek olacak; yani bu, oyunun sonraki piyon yürüyüşünün ilk adımı. 22...Qf6 (+0.1) vezirleri değişir ama d-piyonu dxe6 ile daha tehlikeli bir hale gelir.',
      diger: [
        { move: '22...Qf6', text: '23.Qxf6 Nxf6 24.dxe6 fxe6 (Motor: +0.1).' },
        { move: '22...Qg5', text: '23.dxe6 fxe6 24.Qxb7 Nc5 (Motor: +0.2).' },
      ],
    },
    '23w': {
      text: '23.Re1: kale e-hattına gelir ve e5’e baskı yapar.',
      amac: 'e5 piyonuna baskı kurmak.',
      neden: 'Motor 23.g3’ü (0.00) öneriyor: vezir kovalanır ve 23...e4 24.Qg2 Qf6 25.d6. 23.Re1 (−0.4) daha yavaş.',
      diger: [
        { move: '23.g3', text: '23...e4 24.Qg2 Qf6 25.d6 ile denge (Motor: 0.00).' },
        { move: '23.d6', text: '23...e4 24.Qg4 Qxg4 25.hxg4 (Motor: −0.1).' },
      ],
    },
    '23b': {
      text: '23...Re8: kale e8’de e5’i destekler.',
      amac: 'e5’i savunmak ve e-hattını kontrol etmek.',
      neden: 'Motor 23...Qf4’ü (−0.5) biraz daha iyi görür: 24.Nxe5 Qxf3 25.gxf3 Nc5 ile vezirler gider ve Siyah piyon fazlasıyla oyunsonuna geçer. 23...Re8 (0.00) sağlam.',
      diger: [
        { move: '23...Qf4', text: '24.Nxe5 Qxf3 25.gxf3 Nc5 (Motor: −0.5).' },
        { move: '23...Qf6', text: '24.Qxf6 Nxf6 25.Nxe5 Nd7 (Motor: +0.1).' },
      ],
    },
    '24w': {
      text: '24.Re4: kale e4’e gelip h4 vezirine saldırır.',
      amac: 'Veziri kovalamak ve kaleyi dördüncü yatay üzerinden şah kanadına getirmek (Re4-g4/h4).',
      neden: 'Motor 24.d6’yı (0.0) öneriyor: geçer piyon ilerler ve d7 atını sıkıştırır. 24.Re4 (−0.5) aktif görünür ama kale e4’te ...f5 ile kovalanacak bir hedef olur. Bu, Korçnoy’un d-piyonu yerine şah saldırısını seçtiği andır.',
      diger: [
        { move: '24.d6', text: '24...e4 25.Qd1 Qg5 26.Qd2 ile denge (Motor: 0.0).' },
        { move: '24.g3', text: '24...e4 25.Qxf7+ Kxf7 26.gxh4 (Motor: 0.0).' },
      ],
    },
    '24b': {
      text: '24...Qg5: vezir g5’e çekilir; g2’ye ve c1 kalesine bakar.',
      amac: 'Veziri aktif tutmak ve c1 kalesine baskı yapmak.',
      neden: 'Motor en iyi bunu görür (−0.3); 24...Qh6 (−0.2) eşdeğer.',
      diger: [
        { move: '24...Qh6', text: '25.Rc2 b5 26.Ne3 Bd6 (Motor: −0.2).' },
        { move: '24...Qf6', text: '25.Qxf6 Nxf6 26.Rxe5 Rxe5 (Motor: +0.0).' },
      ],
    },
    '25w': {
      text: '25.Rce1?: kaleler e-hattında ikilenir.',
      amac: 'e5’e baskıyı artırmak ve ikinci kaleyi şah kanadındaki operasyonlara yaklaştırmak.',
      neden: 'Motor bunu yanlış buluyor: 25.Rc2 (−0.2) veya 25.Rd1 (−0.3), maç hamlesi −1.3. c-hattı terk edilir ve iki kale de e-hattında, Siyahın ...f5 ve ...e4 ilerleyişlerine tempo veren hedeflere dönüşür. 25...f5! 26.R4e2 e4 27.Qe3 Qxe3 28.Nxe3 Nc5 sonrası Siyah sağlam bir oyunsonu alırdı.',
      diger: [
        { move: '25.Rc2', text: '25...f5 26.d6 Kh8 27.Re1 (Motor: −0.2).' },
        { move: '25.Rd1', text: '25...f5 26.d6 Kh8 27.Re2 (Motor: −0.3).' },
      ],
    },
    '25b': {
      text: '25...b5: c4 atı kovalanır.',
      amac: 'Atı c4’ten uzaklaştırmak ve vezir kanadında alan almak.',
      neden: 'Motor 25...f5’i (−1.2) biraz daha iyi görür: 26.Nxe5 Bd6 27.Nxd7 Rxe4. 25...b5 (−0.9) de üstünlüğü korur.',
      diger: [
        { move: '25...f5', text: '26.R4e2 e4 27.Qe3 Qxe3 28.Nxe3 Nc5 (Motor: −1.2).' },
        { move: '25...Kg7', text: 'Bekleme (Motor: −0.2).' },
      ],
    },
    '26w': {
      text: '26.h4: vezir kovalanır ve h5 hazırlanır.',
      amac: 'Veziri g5’ten uzaklaştırmak ve h5 ile g6’ya saldırmak.',
      neden: 'Motor en iyi bunu görür (−0.9). 26.Ne3 (−1.8) 26...Bd6 ile Siyaha tempo kazandırır.',
      diger: [
        { move: '26.Nd2', text: '26...f5 27.Qe3 Qxe3 (Motor: −1.5).' },
        { move: '26.Ne3', text: '26...Bd6 27.Rg4 Qf6 (Motor: −1.8).' },
      ],
    },
    '26b': {
      text: '26...Qh6: vezir h6’ya çekilir; h-hattını ve d2’yi izler.',
      amac: 'Şah kanadını savunmak ve h-hattını kontrol etmek.',
      neden: 'Motor en iyi bunu görür (−0.5). 26...Qf5? 27.Nxe5 Rxe5 28.Rxe5 Qxf3 ile eşitlik (−0.2).',
      diger: [
        { move: '26...Qf5', text: '27.Nxe5 Rxe5 28.Rxe5 Qxf3 (Motor: −0.2).' },
        { move: '26...Qd8', text: '27.Nxe5 Nxe5 28.Rxe5 (Motor: +0.0).' },
      ],
    },
    '27w': {
      text: '27.Ne3: at e3’e gelir; f5 ve g4’e bakar.',
      amac: 'Atı şah kanadına getirmek ve f5 karesini kontrol etmek.',
      neden: 'Motor 27.d6’yı (−0.5) öneriyor: 27...bxc4 28.Rxc4 ile geçer piyon güçlü. 27.Ne3 (−0.9) d-piyonunun blokajına izin verir.',
      diger: [
        { move: '27.d6', text: '27...bxc4 28.Rxc4 Qh5 29.g4 (Motor: −0.5).' },
        { move: '27.Nxe5', text: '27...Rxe5 28.Rxe5 Nxe5 29.Rxe5 (Motor: −1.2).' },
      ],
    },
    '27b': {
      text: '27...Bd6: fil d6’ya gelir; e5’i destekler ve d-piyonunu blokaj altına alır.',
      amac: 'Geçer d-piyonunu durdurmak (blokaj) ve e5’i sağlamlaştırmak; fil aynı zamanda b8-h2 çaprazından beyaz şaha bakar.',
      neden: 'Motor en iyi bunu görür (−1.1). Nimzowitsch’in klasik kuralı: geçer piyonun önüne bir taş koy. d6’daki fil hem savunur hem de saldırır. 27...f5? (−0.1) 28.d6+ ile piyonu ilerletir ve Siyahın üstünlüğünü siler.',
      diger: [
        { move: '27...f5', text: '28.d6+ Kh8 29.Rxb4 e4 (Motor: −0.1).' },
        { move: '27...Kh8', text: '28.Qxf7 Qg7 29.Qxg7+ (Motor: +0.1).' },
      ],
    },
    '28w': {
      text: '28.h5: Beyaz şaha saldırır ve g6’yı hedef alır.',
      amac: 'h-hattını açmak ve Siyahın şahına saldırmak.',
      neden: 'Motor en iyi bunu görür (−1.0); 28.Rg4 (−1.0) eşdeğer.',
      diger: [
        { move: '28.Rg4', text: '28...Kh8 29.Qxf7 Re7 (Motor: −1.0).' },
        { move: '28.Qg3', text: '28...Qg7 29.Rg4 Qf6 (Motor: −1.5).' },
      ],
    },
    '28b': {
      text: '28...f5!: Siyah e4 kalesini kovarken f-piyonunu ileri sürer.',
      amac: 'e5-f5 ikilisini kurmak, e4 kalesini kovalamak ve ...e4 ile tempo kazanmayı hazırlamak.',
      neden: 'Motor en iyi bunu görür (−1.4). Beyaz h5 ile g6’ya saldırırken Smislov pasif savunma (28...Rf8 −0.9) yerine merkezden karşı saldırıyı seçti. f5 aynı zamanda g4 karesini kapatır ve e3 atının f5’e gelmesini engeller.',
      diger: [
        { move: '28...Rf8', text: '29.hxg6 fxg6 30.Qe2 Qg5 (Motor: −0.9).' },
        { move: '28...Rac8', text: '29.g3 Qg5 30.hxg6 fxg6 (Motor: −0.8).' },
      ],
    },
    '29w': {
      text: '29.Rh4: kale h4’e gelir ve h-hattında saldırıyı sürdürür.',
      amac: 'h-hattında baskıyı artırmak.',
      neden: 'Motor en iyi bunu görür (−1.3). 29.hxg6? (−2.5) h-hattını erken açar.',
      diger: [
        { move: '29.Qh3', text: '29...Kh8 30.Rh4 Be7 (Motor: −1.5).' },
        { move: '29.hxg6', text: '29...hxg6 30.Qg3 Qg7 (Motor: −2.5).' },
      ],
    },
    '29b': {
      text: '29...Rf8: kale f8’e gelir; f-piyonunu destekler.',
      amac: 'f5’i desteklemek ve f-hattında baskı kurmak.',
      neden: 'Motor 29...Qg5’i (−1.5) biraz daha iyi görür; 29...Rf8 (−1.2) sağlam.',
      diger: [
        { move: '29...Qg5', text: '30.Qh3 Nf6 31.hxg6 hxg6 (Motor: −1.5).' },
        { move: '29...e4', text: '30.Qh3 Qg7 31.hxg6 hxg6 (Motor: −0.7).' },
      ],
    },
    '30w': {
      text: '30.Rh3: kale h3’e çekilir; h-hattında kalır ve e3 atını korur.',
      amac: 'h-hattında kalmak ve e3’ü savunmak.',
      neden: 'Motor 30.Qh3’ü (−1.1) biraz daha iyi görür; 30.Rh3 (−1.3) yakın.',
      diger: [
        { move: '30.Qh3', text: '30...g5 31.Nxf5 Qf6 (Motor: −1.1).' },
        { move: '30.Rb1', text: '30...Rad8 31.Rh3 e4 (Motor: −1.5).' },
      ],
    },
    '30b': {
      text: '30...e4!: piyon f3 vezirine saldırır ve tempo kazanır.',
      amac: 'Veziri pasif bir kareye göndermek, f-piyonunun önünü açmak ve d3/f3 karelerini taşlarına hazırlamak.',
      neden: 'Motor en iyi bunu görür (−1.5). Piyon vezire saldırdığı için Beyaz tempo kaybeder; bu sırada Siyah ...Rf7-g7 ve ...f4 planlarına zaman bulur. 30...Qf4 (−0.5) vezirleri değişip üstünlüğün çoğunu bırakırdı.',
      diger: [
        { move: '30...Qg7', text: '31.Qe2 e4 32.hxg6 hxg6 (Motor: −1.0).' },
        { move: '30...Qf4', text: '31.Qxf4 exf4 32.Nc2 (Motor: −0.5).' },
      ],
    },
    '31w': {
      text: '31.hxg6: Beyaz g6’da alır; h-hattını açmak ister.',
      amac: 'h-hattını açıp Siyahın şahına saldırmak.',
      neden: 'Motor en iyi bunu görür (−1.6). 31.Qd1 ve 31.Qe2 (−2.1) daha zayıf.',
      diger: [
        { move: '31.Qd1', text: '31...Nc5 32.hxg6 Qxg6 (Motor: −2.1).' },
        { move: '31.Qe2', text: '31...g5 32.g4 f4 (Motor: −2.1).' },
      ],
    },
    '31b': {
      text: '31...Qxg6: vezirle geri alınır.',
      amac: 'g6’yı geri almak ve g-hattını kontrol etmek.',
      neden: 'Tek hamle: 31...Qg7? 32.Nxf5 Qxg6 33.Nh6+ Qxh6 34.Rxh6 vezir kaybettirir (+1.0); 31...Qg5? 32.Rh5 (+1.2).',
      diger: [
        { move: '31...Qg7', text: '32.Nxf5 Qxg6 33.Nh6+ ile vezir gider (Motor: +1.0).' },
        { move: '31...Qg5', text: '32.Rh5 Qf6 33.gxh7+ (Motor: +1.2).' },
      ],
    },
    '32w': {
      text: '32.Qd1?: vezir d1’e çekilir.',
      amac: 'Veziri e4 piyonunun saldırısından güvenceye almak ve d-piyonunu desteklemek.',
      neden: 'Motor 32.Qh5’i (−1.4) öneriyor: vezirler değişir ve Siyahın g-hattı saldırısı söner. 32.Qd1 (−2.6) veziri pasif bırakır, Siyaha ...Rf7-g7 için zaman verir. Savunan taraf için en değerli kaynak, saldıran vezirle değişimdir.',
      diger: [
        { move: '32.Qh5', text: '32...Kg7 33.Nc2 Qxh5 34.Rxh5 (Motor: −1.4).' },
        { move: '32.Qe2', text: '32...f4 33.Ng4 h5 (Motor: −3.0).' },
      ],
    },
    '32b': {
      text: '32...Rf7: kale f7’ye gelir; g-hattına geçecek.',
      amac: 'Kaleyi f7 üzerinden g-hattına getirip vezirle ikilenmek ve g2’ye baskı yapmak.',
      neden: 'Motor 32...Nf6’yı (−2.6) öneriyor: at g4’e gelip f2 ve h2’ye baskı yapar. 32...Rf7 (−1.5) daha yavaş ama planı açık: g-hattında kale ve vezir ikilisi. Beyaz yine 33.Qh5 ile vezir değişimine şans buldu.',
      diger: [
        { move: '32...Nf6', text: '33.Nf1 Ra7 34.Rg3 Ng4 (Motor: −2.6).' },
        { move: '32...f4', text: '33.Nf1 Nf6 34.Bc2 Rf7 (Motor: −2.1).' },
      ],
    },
    '33w': {
      text: '33.Nc2: at c2’ye gelir; b4 piyonuna ve d4’e bakar.',
      amac: 'b4 piyonunu kazanmak ve atı d4 üzerinden merkeze getirmek.',
      neden: 'Motor 33.Qh5’i (−1.5) öneriyor; vezir değişimi hâlâ mümkündü. 33.Nc2 (−2.3) atı şah kanadından uzaklaştırır ve Siyahın ...Rg7 ile g2’ye baskısı daha etkili olur.',
      diger: [
        { move: '33.Qh5', text: '33...Kg7 34.Nc2 Nc5 35.Nd4 (Motor: −1.5).' },
        { move: '33.Rg3', text: '33...Bxg3 34.fxg3 Kh8 35.Qd4+ (Motor: −2.4).' },
      ],
    },
    '33b': {
      text: '33...Rg7: kale g7’ye gelir; vezirle birlikte g2’ye baskı yapar.',
      amac: 'g-hattında kale ve vezirle ikilenmek ve g2’ye baskı yapmak; Beyazı g3 ile şah kanadını zayıflatmaya zorlamak.',
      neden: 'Motor en iyi bunu görür (−2.6). g3 zorla oynanacak ve ...f4 ile kırılabilecek bir hedef olacak. 33...Nf6 (−2.0) ve 33...Nc5 (−1.4) daha zayıf.',
      diger: [
        { move: '33...Nf6', text: '34.Nd4 Rg7 35.g3 f4 (Motor: −2.0).' },
        { move: '33...Nc5', text: '34.Qh5 Nd3 35.Rd1 Nf4 (Motor: −1.4).' },
      ],
    },
    '34w': {
      text: '34.g3: zorunlu; g2 savunulur.',
      amac: 'g2’yi korumak ve g-hattını kapatmak.',
      neden: 'Zorunlu: 34.Ne3? f4 35.Ng4 Qxg4 (−4.3); 34.Rg3? Bxg3 35.fxg3 Qxg3 (−5.1).',
      diger: [
        { move: '34.Ne3', text: '34...f4 35.Ng4 Qxg4 36.Qxg4 (Motor: −4.3).' },
        { move: '34.Rg3', text: '34...Bxg3 35.fxg3 Qxg3 (Motor: −5.1).' },
      ],
    },
    '34b': {
      text: '34...Ne5: at e5’ten d3’e yönelir.',
      amac: 'Atı e5 üzerinden d3’e getirip e1 kalesine ve f2’ye saldırmak; ayrıca f3 karesinden şah çekme tehditleri.',
      neden: 'Motor 34...f4’ü (−2.9) öneriyor: 35.Qh5 Nc5 36.Qxg6 Rxg6 ile g3 hemen kırılır. 34...Ne5 (−2.0) daha yavaş ama at d3’te çok güçlü bir kareye yerleşecek ve 38...gxf2+’ye destek olacak.',
      diger: [
        { move: '34...f4', text: '35.Qh5 Nc5 36.Qxg6 Rxg6 (Motor: −2.9).' },
        { move: '34...Nc5', text: '35.Nd4 f4 36.f3 fxg3 (Motor: −2.9).' },
      ],
    },
    '35w': {
      text: '35.Nd4: at d4’e gelir ve f5 ile e6’ya bakar.',
      amac: 'Atı merkeze getirip savunmaya katmak.',
      neden: 'Motor en iyi bunu görür (−1.8). 35.Qh5? Nf3+ 36.Kf1 Nxe1 çatal (−2.8).',
      diger: [
        { move: '35.Qh5', text: '35...Nf3+ 36.Kf1 Nxe1 ile kalite gider (Motor: −2.8).' },
        { move: '35.Kf1', text: '35...Nf3 36.Nd4 Nxe1 (Motor: −3.0).' },
      ],
    },
    '35b': {
      text: '35...Nd3: at d3’e girer; e1 kalesine ve f2 piyonuna saldırır.',
      amac: 'e1 kalesini kovalamak ve f2’ye baskı kurmak; d3 atı f2’yi kontrol ederek ileride 39.Kxf2’yi imkânsız kılacak.',
      neden: 'Motor en iyi bunu görür (−2.0); 35...f4 (−2.0) eşdeğer. d3’teki at e4 piyonuyla korunuyor ve Beyazın hiçbir taşı onu kolayca değişemez.',
      diger: [
        { move: '35...f4', text: '36.Qh5 Qxh5 37.Rxh5 fxg3 (Motor: −2.0).' },
        { move: '35...Ng4', text: '36.Qc2 Rc7 37.Qb2 (Motor: −1.6).' },
      ],
    },
    '36w': {
      text: '36.Rf1: kale f1’e çekilir ve f2’yi savunur.',
      amac: 'f2’yi korumak.',
      neden: 'Motor en iyi bunu görür (−2.2). 36.Ne6? Nxf2 37.Kxf2 Bxg3+ (−3.2).',
      diger: [
        { move: '36.Ne6', text: '36...Nxf2 37.Kxf2 Bxg3+ 38.Ke3 (Motor: −3.2).' },
        { move: '36.Re2', text: '36...Nf4 37.Rh1 Nxe2+ (Motor: −3.3).' },
      ],
    },
    '36b': {
      text: '36...f4!: f-piyonu da ilerler ve g3’e saldırır.',
      amac: 'g3’ü kırmak ve beyaz şahın önünü açmak; f-hattında kale ve g-hattında kale-vezir ile çift baskı kurmak.',
      neden: 'Motor 36...Nxf2’yi (−2.0) biraz daha iyi görür: 37.Kxf2 Bxg3+ 38.Rxg3 Qxg3+. 36...f4 (−1.7) da güçlü; piyon g3’e saldırır ve Beyazı zor kararlara zorlar.',
      diger: [
        { move: '36...Nxf2', text: '37.Kxf2 Bxg3+ 38.Rxg3 Qxg3+ (Motor: −2.0).' },
        { move: '36...Rc8', text: '37.Ne6 Rf7 38.Qh5 Rf6 (Motor: −0.9).' },
      ],
    },
    '37w': {
      text: '37.Qh5?: vezir değişimi önerir.',
      amac: 'Vezirleri değişip Siyahın saldırısını sönümlemek.',
      neden: 'Motor bunu belirleyici hata buluyor: 37.Ne6! Rf7 38.Qe2 (−2.0) taşları savunmada tutar. 37.Qh5 (−4.3) 37...fxg3 ile kaybeder: 38.fxg3 Qxh5 39.Rxh5 Rxg3+ ya da maçtaki 38.Qxg6 gxf2+. Hesap, vezir değişiminin Siyahın piyonlarına zaman verdiğini gösterir.',
      diger: [
        { move: '37.Ne6', text: '37...Rf7 38.Qe2 fxg3 39.fxg3 Rxf1+ (Motor: −2.0).' },
        { move: '37.Kh1', text: '37...fxg3 38.fxg3 e3 39.Bc2 Qe4+ (Motor: −3.9).' },
      ],
    },
    '37b': {
      text: '37...fxg3: Siyah g3’te alır; beyaz şahın önü açılır.',
      amac: 'g3’ü kırmak, f2’ye baskı kurmak ve beyaz şahın önünü tamamen açmak.',
      neden: 'Motor en iyi bunu görür (−4.6); 37...Qxh5 (−4.6) eşdeğer. Önemli olan g3 piyonunun g3’te kalması: d3 atıyla birlikte f2’ye saldırıyor ve 38...gxf2+ fikrini hazırlıyor.',
      diger: [
        { move: '37...Qxh5', text: '38.Rxh5 fxg3 39.fxg3 Rxg3+ (Motor: −4.6).' },
        { move: '37...Rf8', text: '38.Qxg6 Rxg6 39.Ne6 (Motor: −2.1).' },
      ],
    },
    '38w': {
      text: '38.Qxg6: Beyaz vezirleri değişir.',
      amac: 'Vezirleri değişmek; ama Siyahın ara şahını hesaba katmadan.',
      neden: 'Motor 38.fxg3’ü (−4.6) eşdeğer görür; ikisi de kaybedilmiş bir oyunsonu. 38.f4? (−7.2) daha kötü: 38...Qf6 39.Qe2 g2 ile piyon kaleyi vurur. Beyazın kurtuluşu artık yok; doğru seçim 37. hamledeydi.',
      diger: [
        { move: '38.fxg3', text: '38...Qxh5 39.Rxh5 Rxg3+ 40.Kh1 (Motor: −4.6).' },
        { move: '38.f4', text: '38...Qf6 39.Qe2 g2 (Motor: −7.2).' },
      ],
    },
    '38b': {
      text: '38...gxf2+!: ara şah; Siyah veziri geri almadan önce f2’yi şahla alır.',
      amac: 'Maddi üstünlüğü artırmak ve f1 kalesini f2 piyonuna bağlamak.',
      neden: 'Motor en iyi bunu görür (−5.2). Hemen geri almak (38...Rxg6 39.fxg3, −2.5) g3’teki güçlü piyonu verir; 38...hxg6 (−0.2) ise neredeyse dengeye dönüş. Ara şahın gücü: Beyaz şah hamlesine zorlanır, Siyah veziri sonra rahatça geri alır.',
      diger: [
        { move: '38...Rxg6', text: '39.fxg3 Bc5 40.Kg2 (Motor: −2.5).' },
        { move: '38...hxg6', text: '39.fxg3 Rf7 40.Rh4 (Motor: −0.2).' },
      ],
    },
    '39w': {
      text: '39.Kh1: şah h1’e gider.',
      amac: 'Şahtan kaçmak ve f2 piyonunun yanında kalmak.',
      neden: '39.Kxf2 kural dışı (d3 atı f2’yi korur). 39.Rxf2 Rxg6+ 40.Kf1 Nxf2 kalite kaybettirir (−5.2). 39.Kg2?? Rxg6+ mata gider (#−10). Kh1 en doğal ama f2 piyonu f1 kalesini bağlı tutar.',
      diger: [
        { move: '39.Rxf2', text: '39...Rxg6+ 40.Kf1 Nxf2 41.Kxf2 (Motor: −5.2).' },
        { move: '39.Kg2', text: '39...Rxg6+ 40.Kh1 Kh8 ile mat (Motor: #−10).' },
      ],
    },
    '39b': {
      text: '39...Rxg6: Siyah veziri geri alır.',
      amac: 'Veziri geri almak ve g-hattını kontrol etmek.',
      neden: 'Motor en iyi bunu görür (−5.4). 39...hxg6 (−4.2) g-hattını kapatır. 39...Nf4?? 40.Qxd6 ise beyaz vezir hâlâ g6’da olduğu için bir taş kaybettirir (+6.1).',
      diger: [
        { move: '39...hxg6', text: '40.Ne6 Rf7 41.Rh6 (Motor: −4.2).' },
        { move: '39...Nf4', text: '40.Qxd6 Nxh3 41.Qe6+ (Motor: +6.1).' },
      ],
    },
    '40w': {
      text: '40.Nxb5: at b5 piyonunu alır.',
      amac: 'Bir piyon geri almak ve b4’e saldırmak.',
      neden: 'Motor 40.Bc2’yi (−5.3) biraz daha iyi görür: 40...Bc5 41.Bxd3 Bxd4 42.Rxf2 ile d3 atı değişilir. 40.Nxb5 (−5.9) atı merkezden uzaklaştırır ve Siyaha ...Bc5 ile f2’yi sağlamlaştırma fırsatı verir.',
      diger: [
        { move: '40.Bc2', text: '40...Bc5 41.Bxd3 Bxd4 42.Rxf2 (Motor: −5.3).' },
        { move: '40.Nf5', text: '40...Kh8 41.Nxd6 Rxd6 42.Bc2 (Motor: −5.4).' },
      ],
    },
    '40b': {
      text: '40...Bc5: fil f2 piyonunu destekler; Korçnoy terk etti.',
      amac: 'f2 piyonunu sağlamlaştırmak ve ...e3 ile ilerlemek; Beyaz şahı g-hattında ...Rg1+ tehditleriyle sıkıştırmak.',
      neden: 'Motor en iyi bunu görür (−6.6). Siyahın iki piyon fazlası, f2’de f1 kalesini bağlayan bir piyonu ve g-hattında kalesi var. Beyazın karşı oyunu yok; Korçnoy terk etti.',
      diger: [
        { move: '40...e3', text: '41.Nd4 Nf4 42.Rh2 e2 (Motor: −5.8).' },
        { move: '40...Nf4', text: '41.Rh2 e3 42.Nxd6 Rxd6 (Motor: −5.5).' },
      ],
    },
  },
  exercises: [
    { id: 'ksm-1', kind: 'tekrar', plan: true, title: 'Korumasız b4 piyonu',
      source: 'Korçnoy – Smislov, Leningrad 1967 (14. hamle)',
      fen: 'r2q1rk1/pp3pbp/2p1pnp1/3n4/NP1P4/1B2PQ1P/P4PP1/R1BR2K1 b - - 4 14',
      prompt: 'Beyaz 11.b4 ile vezir kanadında alan kazanmak istedi, ardından atını a4’e çekti. Siyahın atları d5 ve f6’da. Siyah ne yapmalı?',
      hint: 'b4 piyonunu kim koruyor?',
      line: ['Nxb4'],
      explanation: '**14...Nxb4!** Siyah korumasız piyonu alır. Beyazın merkezde biraz aktifliği var ama piyon fazlası Siyahta kalır. Motor: Nxb4 +0.1, sonraki en iyi 14...Nd7 +0.7. Fark çok büyük olmadığı için bu bir plan hamlesidir.',
      link: 'Smislov’un oyun boyunca koruduğu piyon fazlası bu hamleyle geldi.' },
    { id: 'ksm-2', kind: 'tekrar', plan: false, title: 'Geri almadan önce ara şah',
      source: 'Korçnoy – Smislov, Leningrad 1967 (38. hamle)',
      fen: 'r5k1/6rp/3b2Q1/1p1P4/1p1Np3/1B1n2pR/P4P2/5RK1 b - - 0 38',
      prompt: 'Beyaz 38.Qxg6 ile vezirleri değişti. Siyahın g3’te ileri bir piyonu, d3’te atı var. Veziri hemen geri almak mı, yoksa daha iyisi var mı?',
      hint: 'g3 piyonu bir şey alabilir mi, hem de şahla?',
      line: ['gxf2+', 'Kh1', 'Rxg6'],
      accept: { 2: ['hxg6'] },
      explanation: '**38...gxf2+! 39.Kh1 Rxg6** Önce piyon şah çekerek f2’yi alır, sonra vezir geri alınır. f2 piyonu f1 kalesini bağlar ve Siyah maddi olarak çok önde kalır. 39.Rxf2 Rxg6+ 40.Kf1 Nxf2 ise kalite kaybettirir. Motor: ...gxf2+ −4.8, 38...Rxg6 −2.5.',
      link: 'e- ve f-piyonlarının ilerleyişi beyaz şahın önünü açtı; ara şah bu açılmayı sonuca bağladı.' },
    { id: 'ksm-3', kind: 'transfer', plan: false, title: 'Piyon şahla alır',
      source: 'Botvinnik – Levenfish, maç, Leningrad 1937 (2. oyun, 40. hamle)',
      fen: '7k/p6p/8/1p6/1Pp5/P2n1p2/6RP/5R1K b - - 0 40',
      prompt: 'Aynı açılıştan bir oyun sonu. Siyahın f3’te ileri bir piyonu, d3’te atı ve c4’te geçer piyonu var. Beyazın kaleleri g2 ve f1’de. Hamle Siyahta.',
      hint: 'f3 piyonu g2 kalesini şahla alabilir; sonra c-piyonunu düşünün.',
      line: ['fxg2+', 'Kxg2', 'c3'],
      explanation: '**40...fxg2+! 41.Kxg2 c3** Piyon kaleyi şahla alır, ardından c-piyonu yürür; d3 atı c1 karesini kontrol ettiği için Beyaz piyonu durduramaz. Motor: fxg2+ −3.3, 40...Nf4 +6.7.',
      link: 'Smislov’un 38...gxf2+ hamlesi gibi: ileri bir piyon şah çekerek alır ve tempo kazanır.' },
    { id: 'ksm-4', kind: 'transfer', plan: false, title: 'e4-f4 piyon ikilisi',
      source: 'Spasski – Petrosyan, Dünya Şampiyonası maçı, Moskova 1966 (7. oyun, 42. hamle)',
      fen: '1k5r/8/p2q4/Pp1P4/1Pp1ppP1/2P3p1/3R4/3QRK2 b - - 0 42',
      prompt: 'Siyahın e4 ve f4’te yan yana piyonları, g3’te ileri bir piyonu ve h-hattında kalesi var. Beyaz şah f1’de. Hamle Siyahta.',
      hint: 'Yan yana duran piyonlardan biri bir kare daha ilerleyebilir.',
      line: ['f3'],
      explanation: '**42...f3!** Piyon e2 ve g2 karelerini kontrol eder ve beyaz şahın kaçış yollarını kapatır. ...Rh1+ ve ...Qh6 ile mat tehditleri gelir. Motor: f3 mat görüyor (#−17), sonraki en iyi 42...Rh1+ −11.5.',
      link: 'Smislov da e- ve f-piyonlarını (...e4, ...f4) ileri sürerek beyaz şahın önünü açmıştı.' },
  ],
  sources: [
    { title: '365chess: Moskova–Leningrad maçı 1967 (oyun listesi ve puan durumu)', url: 'https://www.365chess.com/tournaments/Moscow-Leningrad_m_1967/26434' },
    { title: 'chessiro: D94 Grünfeld/Slav Schlechter açıklaması', url: 'https://chessiro.com/openings/D94-gruenfeld-slav-schlecter' },
    { title: 'chessiro: D15 Slav Savunması, Schlechter varyantı', url: 'https://chessiro.com/openings/D15-slav-defense-schlechter-variation' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
    { title: 'Modern-Chess: The Unexplored Schlechter Slav (kurs tanıtımı)', url: 'https://www.modern-chess.com/course/the-unexplored-schlechter-slav/78620/' },
  ],
};
