// Nakamura – Topalov, Adaylar turnuvası, Moskova 2016 (7. tur). Kaynak: PgnMentor (Nakamura.pgn).
export default {
  id: 'nakamura-topalov-2016',
  theme: 'Nh4xg6, vezir kanadında yayılma, ...Bxc5 fedası ve b8’de vezir vuruşu',
  white: 'Hikaru Nakamura', black: 'Veselin Topalov',
  whiteShort: 'Nakamura', blackShort: 'Topalov',
  event: 'Adaylar turnuvası', site: 'Moskova', year: 2016, eco: 'D12',
  variation: 'Slav Savunması, 4.e3 Bf5 5.Nc3 e6 6.Nh4', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. Nc3 e6 6. Nh4 Bg6 7. Nxg6 hxg6 8. Rb1 Nbd7 9. c5 a5 10. a3 Be7 11. g3 e5 12. Bg2 e4 13. b4 axb4 14. axb4 Nf8 15. b5 Ne6 16. Bd2 O-O 17. Na4 Ng5 18. h4 Nf3+ 19. Bxf3 exf3 20. bxc6 bxc6 21. Nc3 Bxc5 22. dxc5 d4 23. exd4 Qxd4 24. O-O Qg4 25. Re1 Rfd8 26. Rb2 Rd4 27. Re7 Rad8 28. Qb3 Rf8 29. Qd1 Rfd8 30. Qb3 Rf8 31. Nd1 Nd5 32. Re5 Kh7 33. Kh2 Nf6 34. Be3 Rb8 35. Qxb8 Rxd1 36. Rb1 Qd7 37. Rg5 Ne4 38. Rxd1 Qxd1 39. Qf4 1-0`,

  summary: 'Moskova Adaylar turnuvasının 7. turunda Nakamura, sakin 4.e3 Slavında bilinen **6.Nh4** fikriyle Siyahın f5 filini kovaladı ve **7.Nxg6** ile fil çiftini aldı. Sonra Topalov’un 2006 Elista maçında Kramnik’e karşı denediği **8.Rb1 ve 9.c5** planıyla vezir kanadında yayıldı: a3, b4 ve **15.b5** ile b-hattını açmak istedi. Topalov merkezde ...e5-e4 ile alan aldı, atını f8-e6-g5-f3 yolculuğuyla g2 filine değişip f3’te bir piyon kaması bıraktı ve **21...Bxc5!?** ile bir fil feda etti. 22...d4 ile merkez açıldı, siyah vezir g4’e gelip ...Qh3 ve ...Qg2# tehditleri kurdu. Motor uzun süre tam denge (0.00) gösteriyor; Nakamura 30. hamlede tekrar beraberliğine razı olmadı ve **31.Nd1** ile oyunu sürdürdü. Topalov 31...Qf5! (Beyazın tek savunması 32.Re3) yerine 31...Nd5 oynadı, ardından **32...Kh7?** ile ...Rb8 vuruşunu hazırlamak isterken şahını ve kalesini taktiğe açtı. **33.Kh2!** ...Qh3 fikrini durdurdu; 34...Rb8’e **35.Qxb8!** ile karşılık verildi, **36.Rb1!** mat tehdidini kesti, **37.Rg5!** de ...Ng4+ çatalını önledi. 39.Qf4’te Beyaz bir fil fazlasıyla kalınca Topalov terk etti.',
  intro: '1.d4 d5 2.c4 c6 Slav Savunmasıdır: Siyah d5’i c-piyonuyla destekler, böylece c8 fili ...e6’dan önce dışarı çıkabilir. Vezir Gambitini Kabul Etmeyen klasik savunmada (2...e6) bu fil uzun süre içeride kalır; Slavın bütün fikri bu sorunu çözmektir. 3.Nf3 Nf6 4.e3, ana yol 4.Nc3 dxc4 5.a4’ün teorisine girmeden c4’ü sağlama alan sakin bir sistemdir. Siyah 4...Bf5 ile fili zincirin dışına çıkarır ve 5...e6 ile kuruluşu tamamlar. Burada Beyazın en keskin fikri **6.Nh4**’tür: at f5 filini kovalar ve onu alarak fil çiftini kazanır. Siyah karşılığında h-hattını açar ve g6-f7 ile sağlam bir şah kanadı kurar. Bu partinin özel yanı, Nakamura’nın 8.Rb1 ve 9.c5 ile vezir kanadında alan alması, Topalov’un da buna merkezde ...e5-e4 ve sonra bir fil fedasıyla cevap vermesidir. 7. turdan önce iki oyuncu da turnuvada geride kalmıştı; chess24 raporu, liderlere yetişmek için bu partinin iki taraf için de neredeyse kazanılması gereken bir oyun olduğunu yazıyor.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**6.Nh4 ve 7.Nxg6** ile Siyahın “iyi” filini alıp fil çiftini kazanmak; bu fil Slavda Siyahın en değerli taşıdır.',
      '**8.Rb1 ve 9.c5** ile vezir kanadında alan almak; Rb1 sayesinde ...axb4’ten sonra a1 kalesi açıkta kalmaz. Ardından a3, b4 ve **b5** ile b-hattını açmak.',
      'g3 ve Bg2 ile e4 piyonuna ve d5’e bakmak; c5 piyonunu Na4 ile desteklemek, b6 karesini kullanmak.',
      'Siyahın f3 piyon kamasına ve ...Qg4-h3, ...Qg2# fikrine karşı şahı dikkatle savunmak: h1, h3 ve g4 karelerini sürekli kontrol etmek (33.Kh2, 36.Rb1, 37.Rg5).',
      'Fazla taşı (fil) korumak için kaleleri aktif hatlara getirmek: e-hattı ve yedinci yatay (27.Re7, 28.Qb3 ile f7’ye baskı).',
      'Denge varken bile kazanma şansı aramak: 31.Nd1 ile tekrarlamadan kaçıp atı e3’e, vezire karşı getirmeyi hedeflemek.',
      'Rakip hata yaptığında taktiği tam zamanında bulmak: 35.Qxb8!, ardından mat tehditlerini sırayla durdurmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Fili f5’e piyon zincirinin dışına çıkarmak; 6.Nh4’ten sonra fili g6’ya çekip, alınırsa h-hattını açmak.',
      '9.c5’ten sonra ...a5 ile b4-b5 ilerleyişini yavaşlatmak ve a-hattını açmak.',
      'c5 Beyazın d4 üzerindeki baskısını kaldırdığı için **...e5-e4** ile merkezde ve şah kanadında alan almak.',
      'Atı d7-f8-e6-g5 üzerinden f3’e getirip g2 filine değişmek; f3’te Beyaz şahının yanında kalıcı bir piyon kaması bırakmak.',
      '**21...Bxc5** fedası ve **22...d4** ile merkezi açıp vezir, kaleler ve f3 piyonunu Beyaz şahına karşı birleştirmek.',
      'Kaleleri d-hattına ve dördüncü yataya getirip h4 piyonuna ve d2 filine baskı yapmak; ...Qh3 tehdidiyle Beyazı pasif tutmak.',
      'Bu karşı oyun dengeyi korudu; ama 31...Nd5 ve 32...Kh7 ile şahını ve b8 kalesini korumasız bırakınca planı çöktü.',
    ] },
  },
  critical: [
    { move: '7w', title: 'Nxg6: fil çifti', text: 'Beyaz 6.Nh4 fikrinin sonucunu alır: Siyahın zincir dışındaki iyi fili gider ve Beyaz fil çiftine sahip olur. Siyah 7...hxg6 ile h-hattını açar; g6-f7 piyonları şahı korur ve h8 kalesi rok yapmadan bile oyuna katılır. Motor bu değişime Beyaz için küçük bir artı veriyor (Motor: +0.36); 7...fxg6? ise yapıyı bozar (Motor: +1.15).' },
    { move: '9w', title: 'Rb1 ve c5: Elista planı', text: '8.Rb1 ve 9.c5 ile Beyaz merkezi kapatıp vezir kanadında piyon çoğunluğu ilerletmeyi seçer. ChessBase’te Sagar Shah, bu Rb1-c5 fikrini ilk kez Topalov’un 2006 Elista Dünya Şampiyonası maçında Kramnik’e karşı kullandığını hatırlatıyor (11. parti, beraberlik). Şimdi Topalov kendi silahına karşı Siyahla oynuyor. c5’in bedeli: d4 artık c-piyonuyla desteklenmez ve Siyah ...e5’i rahatça oynayabilir.' },
    { move: '21b', title: '...Bxc5!? fedası', text: 'Topalov fil karşılığında c5 piyonunu alır, 22...d4 ile c3 atına ve e3’e saldırır ve 23...Qxd4 ile iki piyona ulaşır. Asıl kazancı materyal değil, f3 kaması yanında vezirin g4’e gelip ...Qh3 ve ...Qg2# tehditleri yaratmasıdır. Shah ünlem işaretinin objektif değer için değil pratik etkisi için olduğunu yazıyor. Motor bunu 21...Qc8 (−0.04) ve 21...Qd7 kadar iyi buluyor: Motor: 0.00.' },
    { move: '25w', title: 'Re1: veziri d1’de tutmak', text: 'Beyaz f3 kamasına karşı kaleyi e-hattına getirir. Doğal görünen 25.Be3? ise büyük hatadır: 25...Rfd8 26.Kh2 Rxd1 sonrası Beyaz veziri kaybeder (Motor: −4.7). Shah, d1 vezirinin f3’e bakmaya devam etmesinin önemli olduğunu vurguluyor. Motor 25.Bf4’ü (+0.08…+0.28) biraz daha iyi buluyor, ama maç hamlesi de dengeyi korur.' },
    { move: '31w', title: 'Nd1: tekrardan kaçış', text: 'Pozisyon 28-30. hamlelerde tekrar ediyordu (Qb3-Qd1, ...Rf8-Rfd8); 31.Qd1 beraberlik getirirdi (Motor: 0.00). Nakamura riski kabul eder ve atı d1’e çekip e3’e, g4 vezirine karşı yollamak ister. Objektif olarak hamle biraz kötü (Motor: −0.2/−0.3); Shah ünlemi mücadele ruhu için verdiğini yazıyor. TWIC raporu, saklı 31...Qf5’in oyunu Siyah lehine çevirebileceğini belirtiyor.' },
    { move: '31b', title: '...Nd5?! fırsatı kaçırıyor', text: 'Motorun hamlesi 31...Qf5! (Motor: −0.3). Tehdit ...Rxh4’tür ve Beyazın tek savunması 32.Re3! Qd7 33.Rxf3 Rxd2 34.Rxd2 Qxd2’dir; 32.Bg5? (−2.6) ve 32.Ne3? Qh3! (−3.3) kaybeder. Rus Satranç Federasyonu raporu Topalov’un bu hamleyi doğrudan tehdit içermediği için zor bulduğunu yazıyor. 31...Nd5 ile Siyah üstünlüğü bırakır (Motor: +0.1).' },
    { move: '32b', title: '...Kh7? sonra 33.Kh2!', text: 'Topalov şahı h7’ye çekerek ...Rb8 vuruşunu hazırlar: şah g8’de değilken Qxb8 şah olmaz, Siyah da ...Rxd1 için zaman kazanır. Ama Beyaz önce **33.Kh2!** oynar: h3 karesi artık şahın kontrolündedir, ...Qh3 yoktur ve Ne3 ile vezire ve d5 atına saldırı gelir (Motor: +2.2). Doğrusu 32...Nf6 (−0.05) veya 32...Ra8 (0.00) idi. Shah 32...Kh7 için “fazla spekülatif” diyor.' },
    { move: '35w', title: 'Qxb8! korumasız kale', text: 'Topalov 34...Rb8 ile planını uygular. Beyazın veziri saldırı altında ve d1 atı da tehdit ediliyor. Vezir geri çekilmek yerine b8’deki kaleyi alır: 35...Rxd1 36.Rb1! sonrası Beyaz bir kale fazlasıyla kalır (Motor: +2.45). 35.Bxd4? Rxb3 ise Siyahı kazandırır (Motor: −1.7). Shah’ın aktardığına göre Topalov sonra 34...Rb8 için “tek sorunu kaybettirmesi” demiş.' },
    { move: '37w', title: 'Rg5! g4 karesini kapatmak', text: 'Siyah 36...Qd7 ile d1 kalesini korur ve ...Ng4+ çatalını hazırlar. 37.Rxd1? Ng4+ 38.Kh3 Nxf2+ 39.Kh2 Qh3+ 40.Kg1 Qg2# ile mat olur. 37.Rg5! kaleyi saldırıdan çıkarır ve g4’ü kontrol eder (Motor: +4.2; ikinci en iyi 37.Re4 −0.75). Shah bu hamlenin Topalov tarafından tamamen gözden kaçırıldığını yazıyor.' },
  ],
  lessons: [
    'Slavda ...Bf5’e karşı **Nh4** fikri, Siyahın zincir dışına çıkan iyi filini alıp fil çiftini kazanmayı hedefler; Siyah buna h-hattını açarak ve sağlam yapıyla karşılık verir. Fili kurtarmak için 6...Bg4? gibi hamleler 7.Qb3 ile b7’yi sorun yapar.',
    'c5 ile merkezi kapatan taraf vezir kanadında hızlı olmalıdır (a3, b4, b5), çünkü c5 d4 üzerindeki baskıyı kaldırır ve rakip ...e5 ile merkezde kendi oyununu kurar.',
    'Bir at, uzun bir yolculukla (d7-f8-e6-g5-f3) önemli bir savunma taşını değişip kalıcı bir zayıflık (f3 kaması) bırakabilir. Kamalı pozisyonda h1, h3 ve g2 kareleri her hamle yeniden hesaplanmalıdır.',
    'Taş fedası her zaman materyal için değildir: 21...Bxc5 ile Topalov merkezi açtı ve vezirini şaha getirdi; motor bunu tam dengede buldu.',
    'Tekrar beraberliğini reddetmek (31.Nd1) objektif olarak riskli olabilir, ama rakibe çözülmesi zor sorular sorar. Rakibin sessiz ama güçlü hamleleri (31...Qf5) çoğu zaman en zor bulunanlardır.',
    'Saldırı altındaki bir taşı geri çekmeden önce rakibin korumasız taşlarına bakın: 35.Qxb8 bir kaleyi aldı. Şahınızı hareket ettirirken de hangi taşları korumasız bıraktığınızı sayın (32...Kh7 b8 kalesini savunmasız bıraktı).',
    'Kazançlı bir pozisyonda önce rakibin mat ve çatal tehditlerini durdurun (36.Rb1, 37.Rg5), sonra materyali toplayın (38.Rxd1, 39.Qf4).',
  ],
  qa: [
    { q: 'Beyaz neden 6.Nh4 ile atını kenara götürdü?', a: 'Çünkü f5 fili Slavda Siyahın en iyi taşıdır: piyon zincirinin (c6-d5-e6) dışında, aktif bir filtir. 6.Nh4 onu kovalar; 6...Bg6 7.Nxg6 ile Beyaz fil çiftini alır. At kenarda kötü durmaz, çünkü hemen değişilir. Fili korumaya çalışan 6...Bg4 7.Qb3 Qb6 8.h3 Bh5 Beyaza daha iyi bir oyun verir (Motor: +0.64).' },
    { q: '8.Rb1 hamlesinin amacı neydi?', a: 'Beyaz c5 ve b4-b5 ile vezir kanadında ilerlemek istiyor. a-hattı açılınca (13.b4 axb4 14.axb4) a1’deki kale siyah a8 kalesinin karşısında kalırdı. Rb1 ile kale önceden b-hattına geçer ve b-hattı açıldığında hazırdır. ChessBase’te Shah, Topalov’un aynı fikri 2006’da Kramnik’e karşı kullandığını hatırlatıyor. Motor 8.Qb3’ü (+0.32) biraz daha iyi buluyor; 8.Rb1 +0.07.' },
    { q: 'Siyah neden 12...e4 oynadı, 12...exd4 değil?', a: '12...exd4 13.exd4 merkezi açar ve Beyazın fil çifti ile g2 fili güçlenir (Motor: +0.56). 12...e4 ise merkezi kapatır, g2 filini sınırlar ve Siyaha şah kanadında alan verir; f3 karesi ileride atın hedefi olur. Motor bu hamleyi en iyi buluyor (−0.09).' },
    { q: 'Topalov 21...Bxc5 ile neden bir fil verdi?', a: 'Vezir kanadında Beyaz b-hattını ele geçirmek üzereydi ve c5 piyonu oyunu sıkıştırıyordu. 21...Bxc5 22.dxc5 d4! ile Siyah merkezi açar; 23.exd4 Qxd4 ile iki piyon alır, vezir de f3 kamasının yanına, Beyaz şahının önüne gelir. 22...d4’ün tek iyi hamle olduğuna dikkat: 22...Re8 (+1.39) veya 22...Ra3 (+1.89) fedayı boşa çıkarırdı. Motor feda sonrasını tam dengede görüyor (0.00).' },
    { q: 'Nakamura 24.Qxf3 ile piyonu neden almadı?', a: 'ChessBase’e göre Nakamura’nın ilk niyeti 24.Qxf3 idi, ama Shah bunun 24...Ra3 ile sorun yaşadığını yazıyor: kale c3 atına saldırır ve vezir d2 filini alabilir. Motor bu yolu kaybettiren bulmuyor (25.O-O Qxd2 26.Ne4, Motor: −0.04), ama Beyazın taşları dağınık kalır. 24.O-O ile şah güvenliği önce gelir (Motor: 0.00).' },
    { q: 'Siyah nerede kazanma şansı yakaladı?', a: '31.Nd1’den sonra. 31...Qf5! ...Rxh4 tehdidiyle Beyazı tek bir savunmaya zorlardı: 32.Re3! Qd7 33.Rxf3 Rxd2 (Motor: −0.3). 32.Ne3? Qh3! veya 32.Bg5? ise kaybederdi (−3.3 / −2.6). Topalov 31...Nd5 oynadı; Rus Federasyonu raporu, 31...Qf5’in doğrudan tehdit içermediği için zor bulunduğunu yazıyor.' },
    { q: '32...Kh7 neden kaybettiren hata oldu?', a: 'Topalov ...Rb8 ile b3 vezirini saptırmak istiyordu; şah h7’de olunca Qxb8 şah çekmez. Ama Kh7 Beyaza zaman verdi: 33.Kh2! ile şah h3 karesini kapattı, ...Qh3 tehdidi ortadan kalktı. Ardından Ne3 ile vezire ve d5 atına saldırı tehdidi vardı. 33.Kh2’den sonra motor +2.2 veriyor; 32...Nf6 ile denge sürerdi (−0.05).' },
    { q: '35.Qxb8’den sonra Beyaz neden hâlâ dikkatli olmak zorundaydı?', a: 'Çünkü f3 kaması yüzünden Beyazın şahı mat ağındaydı. 35...Rxd1’den sonra 36...Qh3+! 37.Kxh3 Rh1# tehdidi vardı; tek hamle 36.Rb1 idi (36.Rh5+? −5.5). Sonra 36...Qd7 ile ...Ng4+ çatalı geldi; 37.Rxd1? Ng4+ dört hamlede mat olurdu. 37.Rg5! g4’ü kapatınca Siyahın tehditleri bitti.' },
    { q: 'Beyazın kazancı tam olarak nereden geldi?', a: 'Oyun 31. hamleye kadar dengedeydi; Beyazın fazla fili, Siyahın iki piyonu ve saldırısıyla dengeleniyordu. Kazanç 31...Nd5 ve özellikle 32...Kh7 hatalarından doğdu: Siyahın b8 kalesi korumasız kaldı, şahın kaçış kareleri de taktiğe açıldı. Nakamura 33.Kh2, 35.Qxb8, 36.Rb1 ve 37.Rg5 ile dört kesin hamle buldu; 39.Qf4’ten sonra bir fil fazlası kaldı.' },
  ],
  notes: {
    '1w': {
      text: '1.d4 merkezde d4 karesini tutar ve c1 filine yol açar.',
      amac: 'Nakamura bu partide kapalı bir açılış seçerek Topalov’un sevdiği keskin açık oyunlardan kaçınmak ister.',
      neden: '1.d4 genellikle daha stratejik pozisyonlara götürür. Nakamura bu turnuvada hem 1.e4 hem 1.d4 oynadı; Topalov’a karşı Slav yapısına yönelmesi, Siyahın aktif karşı oyununu sınırlama isteğine uyar.',
      diger: [
        { move: '1.e4', text: 'Motorun ilk tercihi (Motor: +0.39); Topalov’un iyi bildiği açık Sicilya ve Ruy Lopez yapılarına götürür.' },
        { move: '1.Nf3', text: 'Esnek başlangıç (Motor: +0.16); çoğunlukla aynı Vezir Gambiti yapılarına döner.' },
      ],
    },
    '1b': {
      text: 'Siyah 1...d5 ile merkezde simetrik olarak karşılık verir.',
      amac: 'd5 ile e4’ü kontrol eder ve klasik Vezir Gambiti yapılarına hazırlanır.',
      neden: 'Topalov Slavı ve Vezir Gambitini her iki renkle de iyi bilir; 1...d5 ile Beyazın merkezini doğrudan sınırlar.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmaları (Nimzo, Kral Hint, Grünfeld) için esnek giriş (Motor: +0.32).' },
        { move: '1...c6', text: 'Slava doğrudan gitmek isteyenlerin seçimi (Motor: +0.42), ama 2.e4 ile Caro-Kann’a dönebilir.' },
      ],
    },
    '2w': {
      text: '2.c4 Vezir Gambitidir: c-piyonu d5’e saldırır.',
      amac: 'Beyaz Siyahı d5’ten uzaklaştırmak veya onu e6/c6 ile desteklemeye zorlamak ister.',
      neden: 'c4 merkez kontrolünü artırır ve Beyaza vezir kanadında alan sağlar. Bu partideki c5 planının tohumu da burada atılır.',
      diger: [
        { move: '2.Nf3', text: 'Önce at (Motor: +0.20); Siyaha 2...Bf5 gibi seçenekler bırakır.' },
        { move: '2.Bf4', text: 'Londra Sistemi; daha sakin, merkezde gerilim kurmaz.' },
      ],
    },
    '2b': {
      text: '2...c6 Slav Savunmasıdır: d5 c-piyonuyla desteklenir.',
      amac: 'd5’i sağlam tutarken c8 filinin önünü kapatmamak; fil ...e6’dan önce f5 veya g4’e çıkacak.',
      neden: '2...e6 (Ortodoks savunma) c8 filini içeride bırakır; 2...dxc4 ise merkezi bırakır. Slav ikisinin arasında bir yoldur: merkez sağlam, fil aktif.',
      diger: [
        { move: '2...e6', text: 'Ortodoks Vezir Gambiti (Motor: +0.34); c8 fili uzun süre pasif kalabilir.' },
        { move: '2...dxc4', text: 'Vezir Gambitini Kabul (Motor: +0.27); Siyah merkezi bırakıp hızlı gelişim arar.' },
      ],
    },
    '3w': {
      text: '3.Nf3 atı gelişir ve e5 karesini kontrol eder.',
      amac: 'Beyaz hızlı gelişim ister ve e4/e5 karelerini kontrol altında tutar.',
      neden: '3.Nf3, 3.Nc3’ün aksine 3...e6 4.e4 gibi keskin gambit yollarına girmez ve 3...dxc4 sonrası e3 ile piyonu geri almayı kolaylaştırır.',
      diger: [
        { move: '3.Nc3', text: 'Motorun küçük tercihi (Motor: +0.44); 3...e6 ile Yarı Slava veya Marshall Gambitine gidebilir.' },
        { move: '3.cxd5', text: 'Değişme Slavı (Motor: +0.36); simetrik ve sakin, beraberlik payı yüksek.' },
      ],
    },
    '3b': {
      text: '3...Nf6 atı gelişir ve d5’i bir kez daha destekler.',
      amac: 'Siyah e4 karesini kontrol eder ve rok için hazırlanır.',
      neden: 'Klasik Slavın standart hamlesidir; 3...e6 ile Yarı Slav kuruluşu fili yine içeride bırakırdı.',
      diger: [
        { move: '3...e6', text: 'Yarı Slava geçiş (Motor: +0.44); c8 fili kapanır.' },
        { move: '3...dxc4', text: 'Erken piyon alma (Motor: +0.48); 4.e3 b5 5.a4 ile Beyaz piyonu geri alır.' },
      ],
    },
    '4w': {
      text: '4.e3 c4 piyonunu korur ve f1 filine yol açar.',
      amac: 'Nakamura ana yolun (4.Nc3 dxc4 5.a4) büyük teorisine girmeden sağlam bir yapı kurmak ister.',
      neden: '4.e3’ün dezavantajı c1 filini kapatmasıdır, ama ...dxc4 her zaman Bxc4 ile karşılanabilir. Bu sakin sistem Siyaha 4...Bf5 oynama izni verir; Beyaz da buna Nh4 ile cevap vermeyi planlar.',
      diger: [
        { move: '4.Nc3', text: 'Ana yol (Motor: +0.31): 4...dxc4 5.a4 Bf5 ile büyük teori.' },
        { move: '4.cxd5', text: 'Değişme (Motor: +0.29); simetrik yapı, kazanma şansı az.' },
      ],
    },
    '4b': {
      text: '4...Bf5 fili ...e6’dan önce zincirin dışına çıkarır.',
      amac: 'Slavın ana fikri: fil f5’te b1-h7 köşegeninde aktif olur ve sonra ...e6 ile kuruluş tamamlanır.',
      neden: '4...Bf5’in bilinen eksiği b7’nin zayıflamasıdır (Qb3 fikri) ve filin Nh4 ile kovalanabilmesidir. Topalov bu kuruluşu kabul eder, çünkü fil çifti karşılığında h-hattını açacağını bilir.',
      diger: [
        { move: '4...Bg4', text: 'Fil g4’e (Motor: +0.36); 5.Qb3 ile b7 baskısı ve h3 ile kovalama gelir.' },
        { move: '4...g6', text: 'Schlechter Slavı (Motor: +0.42); fil g7’ye, Grünfeld benzeri yapı.' },
        { move: '4...a6', text: 'Chebanenko fikri; ...b5 ile vezir kanadında yer arar.' },
      ],
    },
    '5w': {
      text: '5.Nc3 at gelişir ve d5’e ikinci kez baskı yapar.',
      amac: 'Beyaz gelişimini tamamlarken Nh4 için zaman kazanmayı bekler.',
      neden: 'Hemen 5.Nh4 de mümkündü (Motor: +0.15), ama fil 5...Be6 veya 5...Bg4 ile farklı karelere gidebilirdi. Önce Nc3 ile Siyahın ...e6 oynamasını beklemek, filin geri çekilme karelerini azaltır.',
      diger: [
        { move: '5.Bd3', text: 'Fili değişme teklifi (Motor: +0.19); daha sakin.' },
        { move: '5.Nh4', text: 'Hemen kovalama (Motor: +0.15); 5...Be6 ile fil kurtulabilir.' },
      ],
    },
    '5b': {
      text: '5...e6 zinciri tamamlar ve f8 filine yol açar.',
      amac: 'Siyah sağlam bir merkez (c6-d5-e6) kurar ve hızlı rok yapmak ister.',
      neden: 'Fil artık dışarıda olduğu için ...e6 onu kapatmaz. Ancak e6 piyonu f5 filinin geri çekilme karelerini azaltır, bu yüzden 6.Nh4 şimdi daha etkilidir.',
      diger: [
        { move: '5...a6', text: '...b5 hazırlığı (Motor: +0.45); gelişimden zaman kaybettirir.' },
        { move: '5...Nbd7', text: 'Önce at (Motor: +0.49); 6.cxd5 sonrası yapı Beyazın lehine açılır.' },
      ],
    },
    '6w': {
      text: '6.Nh4 at f5 filine saldırır.',
      amac: 'Filin değişmesini zorlamak ve fil çiftini kazanmak; fil gidince b7 ve beyaz kareler zayıflar.',
      neden: 'Bu, 4.e3 Slavının en bilinen silahıdır. Fil kaçacak iyi bir kare bulamaz: g6’da alınır, g4’te 7.Qb3 b7’yi sorun yapar. At kenarda olsa da hemen işe yarayan bir hamle yapacağı için zaman kaybı sayılmaz.',
      diger: [
        { move: '6.Bd3', text: 'Fil değişimi; sakin bir oyun, fil çifti yok.' },
        { move: '6.a3', text: 'Bekleme hamlesi (Motor: +0.08); c5 veya b4 için hazırlık.' },
        { move: '6.cxd5', text: 'Merkezi açmak (Motor: +0.04); 6...exd5 ile fil yine rahat eder.' },
      ],
    },
    '6b': {
      text: '6...Bg6 fil g6’ya çekilir ve alınmasına izin verilir.',
      amac: 'Fil alınırsa h-piyonuyla geri alınacak ve h-hattı açılacak; Siyah yapısını bozmadan oyuna devam eder.',
      neden: 'Fili kurtarmaya çalışmak daha pahalıdır: 6...Bg4 7.Qb3 Qb6 8.h3 Bh5 sonrası Beyaz daha iyi durur (Motor: +0.64). 6...Bg6 bu pozisyonun ana yoludur.',
      diger: [
        { move: '6...Bg4', text: '7.Qb3 Qb6 8.h3 Bh5 ile fil kenara itilir (Motor: +0.64).' },
        { move: '6...Be4', text: '7.f3 Bg6 ile fil yine g6’ya gelir, ama Beyaz f3 ile merkezi güçlendirir (Motor: +0.38).' },
        { move: '6...g6', text: 'Fili korumak için şah kanadını zayıflatır (Motor: +0.59).' },
      ],
    },
    '7w': {
      text: '7.Nxg6 fili alır ve Beyaz fil çiftini kazanır.',
      amac: 'Uzun vadede iki filin gücünden yararlanmak, özellikle pozisyon açılırsa.',
      neden: 'Beklemek (7.Qb3, 7.Bd2) de mümkündü, ama Siyah ...Nbd7 ve ...Be7 ile ...Bh5 veya ...Nh5 gibi fikirler bulabilirdi. Hemen almak en net yoldur.',
      diger: [
        { move: '7.Qb3', text: 'Önce b7’ye baskı (Motor: +0.31); 7...Qb6 8.Nxg6 hxg6 ile aynı yapıya döner.' },
        { move: '7.Bd2', text: 'Bekleme (Motor: +0.28); Siyaha gelişim için zaman verir.' },
      ],
    },
    '7b': {
      text: '7...hxg6 h-piyonuyla geri alır.',
      amac: 'h-hattını h8 kalesi için açmak ve g6-f7 ile şahın önünü sağlam tutmak.',
      neden: '7...fxg6 piyon yapısını bozar ve e6’yı zayıflatır (Motor: +1.15). hxg6 standart cevaptır; ChessBase raporu da bu konumu “Slavın standart pozisyonu” diye tanımlıyor.',
      diger: [
        { move: '7...fxg6', text: 'Yapıyı bozar, e6 zayıflar (Motor: +1.15).' },
      ],
    },
    '8w': {
      text: '8.Rb1 kale b-hattına geçer.',
      amac: 'c5 ve b4-b5 ile vezir kanadında ilerlemeyi hazırlamak; a-hattı açılırsa kale açıkta kalmasın.',
      neden: 'Shah ChessBase’teki analizinde bunu “küçük bir kale hamlesi” diye tanıtıyor ve c5-b4 fikirlerini hazırladığını yazıyor. Topalov 2006 Elista maçının 11. partisinde aynı pozisyonda 8.Rb1 oynamıştı; 9. partide 8.a3 denemişti. En popüler hamleler 8.g3 ve 8.Bd2’dir.',
      diger: [
        { move: '8.Qb3', text: 'b7’ye baskı (Motor: +0.32); motorun tercihi, daha klasik bir yol.' },
        { move: '8.Bd2', text: 'Sakin gelişim (Motor: +0.28); ana yollardan biri.' },
        { move: '8.g3', text: 'Fil g2’ye (Motor: +0.22); e4 ve d5 üzerinde baskı.' },
      ],
    },
    '8b': {
      text: '8...Nbd7 at d7’ye gelişir.',
      amac: '...e5 kırılmasını desteklemek ve c5’ten sonra b6 ile karşı vuruşu mümkün kılmak.',
      neden: 'At d7’de esnektir: e5’i ve c5’i kontrol eder, gerekirse f8 üzerinden e6’ya gidebilir (partide olduğu gibi).',
      diger: [
        { move: '8...Qc7', text: 'Vezir önce gelişir (Motor: +0.18).' },
        { move: '8...Be7', text: 'Önce fil (Motor: +0.18); rok hazırlığı.' },
      ],
    },
    '9w': {
      text: '9.c5 vezir kanadında alan alır ve merkezi kapatır.',
      amac: 'Siyahın ...dxc4 ve ...e5 ile merkezi açmasını zorlaştırmak, ardından b4-b5 ile vezir kanadında ilerlemek.',
      neden: 'c5 Siyahın f8 filini sınırlar (d6 karesi kapalı). Ama bedeli vardır: d4 artık c-piyonuyla desteklenmez ve Siyah ...e5 kırılmasını rahatça yapabilir. Topalov–Kramnik 2006 maçının yorumunda 9.b4 dxc4 10.Bxc4 Bd6 eşit bir alternatif olarak gösterilmiş.',
      diger: [
        { move: '9.g3', text: 'Önce gelişim (Motor: +0.12); merkez esnek kalır.' },
        { move: '9.Qb3', text: 'b7’ye baskı (Motor: +0.02); 9...Rb8 ile karşılanır.' },
        { move: '9.b4', text: '9...dxc4 10.Bxc4 Bd6 ile eşit bir oyun.' },
      ],
    },
    '9b': {
      text: '9...a5 b4 ilerleyişini zorlaştırır.',
      amac: 'b4 oynandığında ...axb4 ile a-hattını açmak ve Beyazın b5 kırılmasını yavaşlatmak.',
      neden: 'Elista yorumunda bu hamlenin fikri “b4-b5’ten önce a-piyonlarını değişmek” olarak açıklanıyor. ...b6 ile c5 piyonunu hemen sorgulamak da mümkündü, ama 10.b4 ile Beyaz zinciri destekler.',
      diger: [
        { move: '9...b6', text: '10.b4 ile Beyaz c5’i korur (Motor: +0.20); ...bxc5 sonrası b-hattı Beyaz için açılır.' },
        { move: '9...Qc7', text: 'Vezir gelişir (Motor: +0.21); b4’e karşı bir şey yapmaz.' },
      ],
    },
    '10w': {
      text: '10.a3 b4 ilerleyişini hazırlar.',
      amac: 'b4’ü a3 ile desteklemek; ...axb4 olursa a-piyonuyla geri almak.',
      neden: 'Hemen 11.b4 axb4 sonrası Beyaz b4’ü piyonla geri alamazdı. a3 bu ilerleyişin zorunlu hazırlığıdır.',
      diger: [
        { move: '10.Be2', text: 'Önce gelişim (Motor: +0.05).' },
        { move: '10.g3', text: 'Fil g2’ye hazırlık (Motor: +0.01).' },
      ],
    },
    '10b': {
      text: '10...Be7 fil e7’ye gelişir.',
      amac: 'Rok için hazırlık; fil e7’den g5 ve h4’e de bakar.',
      neden: 'c5 yüzünden fil d6’ya gelemez; e7 tek doğal karedir. Kramnik 2006’da bu konumda hemen 10...e5 oynamıştı; Topalov önce gelişimi seçer.',
      diger: [
        { move: '10...b6', text: 'c5’i hemen sorgulamak (Motor: +0.04).' },
        { move: '10...e5', text: 'Kramnik’in Elista’daki seçimi: merkez kırılması önce gelir.' },
      ],
    },
    '11w': {
      text: '11.g3 fili g2’ye hazırlar.',
      amac: 'Fil g2’den e4 ve d5 karelerine baskı yapacak; ayrıca Siyahın ...e4 sonrası merkezini sorgulayacak.',
      neden: 'f1 filinin e2 veya d3’te pasif kalmasındansa g2’de uzun köşegende olması tercih edilir. Ancak g3 şah kanadında h3 ve f3 karelerini zayıflatır; bu partide bu kareler önem kazanacak.',
      diger: [
        { move: '11.b4', text: 'Hemen ilerleme (Motor: +0.03).' },
        { move: '11.Bd2', text: 'Sakin gelişim (Motor: 0.00).' },
      ],
    },
    '11b': {
      text: '11...e5! Siyah merkezde kendi kırılmasını yapar.',
      amac: 'c5’ten sonra d4 zayıfladı; Siyah merkezde alan almak ve ...e4 ile şah kanadında oyun kurmak ister.',
      neden: 'Beyazın vezir kanadı oyununa pasif kalmak Siyahı sıkıştırırdı. ...e5 Slavın bu yapısındaki tipik karşı fikirdir; Elista yorumunda da Siyahın iki ana planından biri olarak gösteriliyor (diğeri ...b6 ve ...c5).',
      diger: [
        { move: '11...Qc7', text: 'Bekleme (Motor: +0.08); 12.b4 ile Beyaz ilerler.' },
        { move: '11...O-O', text: 'Önce rok (Motor: +0.11).' },
      ],
    },
    '12w': {
      text: '12.Bg2 fil uzun köşegene yerleşir.',
      amac: 'Gelişimi tamamlamak ve d5-e4 piyonlarına baskı yapmak.',
      neden: 'Motor burada 12.b4’ü (+0.15) biraz daha iyi buluyor: vezir kanadı oyunu hemen başlar. Bg2 de doğal; Beyaz rokunu hazırlar.',
      diger: [
        { move: '12.b4', text: 'Hemen ilerleme (Motor: +0.15).' },
        { move: '12.Be2', text: 'Fil e2’ye (Motor: +0.05); daha savunmacı.' },
      ],
    },
    '12b': {
      text: '12...e4 merkezi kapatır.',
      amac: 'g2 filini sınırlamak ve şah kanadında alan almak; f3 ve d3 karelerini ileride kullanmak.',
      neden: '12...exd4 13.exd4 merkezi açar ve Beyazın fil çiftine yarar (Motor: +0.56). 12...e4 ile Siyah Beyazın c5’ine kendi e4’üyle cevap verir: iki taraf da bir kanatta alan alır.',
      diger: [
        { move: '12...exd4', text: '13.exd4 ile merkez açılır ve Beyazın filleri güçlenir (Motor: +0.56).' },
        { move: '12...O-O', text: 'Bekleme (Motor: 0.00).' },
      ],
    },
    '13w': {
      text: '13.b4 vezir kanadında ilerleyişi başlatır.',
      amac: 'b5 ile c6’ya baskı yapmak ve b-hattını açmak.',
      neden: 'Planın mantıklı devamı; c5 piyonu da desteklenir. Motor 13.Bd2 ve 13.O-O ile aynı değeri veriyor (−0.16/−0.17).',
      diger: [
        { move: '13.Bd2', text: 'Önce gelişim (Motor: −0.16).' },
        { move: '13.O-O', text: 'Önce rok (Motor: −0.17); 13...Nf8 14.Na4 Ne6 ile benzer oyun.' },
      ],
    },
    '13b': {
      text: '13...axb4 Siyah b4’te değişir.',
      amac: 'a-hattını açmak ve a8 kalesini aktif hale getirmek.',
      neden: 'Beklemek Beyaza b5’i rahatça hazırlama imkanı verirdi. ...axb4 9...a5’in mantıklı sonucudur.',
      diger: [
        { move: '13...b6', text: 'c5’i sorgulamak (Motor: −0.02).' },
        { move: '13...Qc8', text: 'Bekleme (Motor: −0.01).' },
      ],
    },
    '14w': {
      text: '14.axb4 a-piyonuyla geri alır.',
      amac: 'b4 piyonunu korumak ve b5 ilerleyişini hazırlamak.',
      neden: 'Tek iyi hamle: 14.Rxb4 b6 15.Rb1 bxc5 piyonu kaybettirir (Motor: −2.17), 14.Na2 bxa3 de kötü (Motor: −2.24). 8.Rb1 sayesinde a-hattı açıldığında kale tehlikede değildir.',
      diger: [
        { move: '14.Rxb4', text: '14...b6! ile c5 düşer (Motor: −2.17).' },
        { move: '14.Na2', text: '14...bxa3 ile Siyah piyon kazanır (Motor: −2.24).' },
      ],
    },
    '14b': {
      text: '14...Nf8 at f8 üzerinden e6’ya gidecek.',
      amac: 'At e6’dan d4 ve g5 karelerine bakar; oradan f3’e ulaşabilir.',
      neden: 'Shah, “atı roktan önce e6’ya getirmek Kramnik’in de yaptığı şeydi” diyor. f8 karesi rok yapılmadığı için boştur; bu yüzden manevra şimdi mümkündür.',
      diger: [
        { move: '14...Nh7', text: 'At g5’e daha hızlı gider (Motor: −0.13).' },
        { move: '14...O-O', text: 'Önce rok (Motor: −0.04); manevra yolu kapanır.' },
      ],
    },
    '15w': {
      text: '15.b5 vezir kanadını kırar.',
      amac: 'bxc6 ile b-hattını açmak ve c6, d5 piyonlarını zayıflatmak.',
      neden: 'Bu, 8.Rb1 ve 9.c5’ten beri hazırlanan kırılmadır. Motor 15.Na4’ü aynı değerde buluyor (−0.17); Nakamura doğrudan yolu seçer.',
      diger: [
        { move: '15.Na4', text: 'Önce at (Motor: −0.17); b6 karesine bakar.' },
        { move: '15.Qb3', text: 'Vezir b-hattına (Motor: −0.25).' },
      ],
    },
    '15b': {
      text: '15...Ne6 at merkeze gelir.',
      amac: 'd4 ve g5 karelerini kontrol etmek; ileride g5 üzerinden f3’e gitmek.',
      neden: 'At e6’da c5 piyonuna da dolaylı baskı yapar. 15...g5 daha keskin (Motor: −0.09), ama şah kanadını zayıflatır.',
      diger: [
        { move: '15...g5', text: 'Şah kanadında piyon saldırısı (Motor: −0.09).' },
        { move: '15...Qc7', text: 'Vezir gelişir (Motor: −0.01).' },
      ],
    },
    '16w': {
      text: '16.Bd2 fil gelişir ve kaleler bağlanmaya hazırlanır.',
      amac: 'Vezir kanadındaki kaleleri birleştirmek ve b4 karesini desteklemek.',
      neden: 'Motor 16.O-O’yu biraz daha iyi buluyor (−0.30). Nakamura rokunu erteler; şahın nereye gideceği henüz belli değil.',
      diger: [
        { move: '16.O-O', text: 'Önce şah güvenliği (Motor: −0.30).' },
        { move: '16.Qb3', text: 'Vezir b-hattına (Motor: −0.38).' },
      ],
    },
    '16b': {
      text: '16...O-O Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini oyuna sokmak.',
      neden: 'At artık f8’den çıktığı için rok mümkündür. Motor 16...Qd7’yi biraz daha iyi buluyor (−0.37).',
      diger: [
        { move: '16...Qd7', text: 'Vezir gelişir (Motor: −0.37); rok sonra yapılabilir.' },
        { move: '16...Qc7', text: 'Vezir c7’ye (Motor: −0.21).' },
      ],
    },
    '17w': {
      text: '17.Na4 at c5’i destekler ve b6’ya bakar.',
      amac: 'Nb6 ile a8 kalesine saldırmak ve c5 zincirini sağlamlaştırmak.',
      neden: 'Atın c3’te yapacağı bir iş kalmamıştı. Ancak at kenarda şah kanadından uzaklaşır; Siyahın şah kanadı fikirleri için zaman kazandırır. Motor 17.O-O’yu (−0.35) aynı değerde buluyor.',
      diger: [
        { move: '17.O-O', text: 'Önce rok (Motor: −0.35).' },
        { move: '17.Qe2', text: 'Vezir e2’ye (Motor: −0.44).' },
      ],
    },
    '17b': {
      text: '17...Ng5 at f3’e gitmek ister.',
      amac: '...Nf3+ ile g2 filini değişmek ve f3’te piyon kaması bırakmak.',
      neden: 'Topalov şah kanadında doğrudan oyun ister. Motor bu hamleyi biraz kötü buluyor (Motor: +0.24); 17...Ra7 (−0.17) veya 17...Nd7 (−0.10) daha sağlam.',
      diger: [
        { move: '17...Ra7', text: 'Kaleyi b-hattına hazırlamak (Motor: −0.17).' },
        { move: '17...Nd7', text: 'At c5’e baskı için (Motor: −0.10).' },
      ],
    },
    '18w': {
      text: '18.h4 atı kovalar.',
      amac: 'Atı g5’ten kovalamak; ...Nf3+ olursa fil ile almak.',
      neden: 'Shah ChessBase’te 18.O-O’nun “çok daha iyi” bir devam olduğunu yazıyor; ama motor (derinlik 20) buna katılmıyor: 18.O-O Qe8 sonrası −0.16, 18.h4 ise +0.02. h4 g3 ile birlikte şah kanadında yeni zayıflıklar yaratır (h3, g4 kareleri) ama Siyahın atını karar vermeye zorlar.',
      diger: [
        { move: '18.Nb6', text: 'Kaleye saldırı (Motor: +0.04); ...Ra7 ile karşılanır.' },
        { move: '18.O-O', text: 'ChessBase’in önerisi; motor 18...Qe8 19.h4 Nf3+ ile −0.16 veriyor.' },
      ],
    },
    '18b': {
      text: '18...Nf3+ at g2 filiyle değişilecek.',
      amac: 'Beyazın iyi filini değişmek ve exf3 ile f3’te bir kama kurmak.',
      neden: 'Motor 18...Ne6’yı biraz daha iyi buluyor (+0.15), ama Topalov’un planı f3 kamasıdır. Bu kama ileride Beyaz şahını sürekli tehlikede tutacak ve vezirle birlikte g2’de mat tehditleri yaratacak.',
      diger: [
        { move: '18...Ne6', text: 'Geri çekilme (Motor: +0.15); 19.Nb6 ile Beyaz biraz daha rahat.' },
        { move: '18...Ngh7', text: 'Pasif geri çekilme (Motor: +0.46).' },
      ],
    },
    '19w': {
      text: '19.Bxf3 zorunlu: fil atı alır.',
      amac: 'Şah çekmeye son vermek ve rok hakkını korumak.',
      neden: 'Diğer hamleler kötüdür: 19.Ke2 Nxd2 sonrası şah merkezde kalır (Motor: −0.72), 19.Kf1 ise Nxd2+ ile a4 atını da kaybettirir (Motor: −3.51).',
      diger: [
        { move: '19.Ke2', text: '19...Nxd2 20.Kxd2 Qa5+ ile şah açıkta (Motor: −0.72).' },
        { move: '19.Kf1', text: '19...Nxd2+ ve ...Rxa4 ile taş kaybı (Motor: −3.51).' },
      ],
    },
    '19b': {
      text: '19...exf3 e-piyonuyla geri alır; f3’te kama oluşur.',
      amac: 'f3 piyonu g2 ve e2 karelerini kontrol eder; vezirle birlikte ...Qh3-g2 fikri hazırlanır.',
      neden: 'Bu, 17...Ng5’ten beri planlanan sonuçtur. 19...Rxa4 20.Qxa4 exf3 kalite kaybettirir (Motor: +1.84).',
      diger: [
        { move: '19...Rxa4', text: '20.Qxa4 exf3 21.bxc6 bxc6 ile kalite eksik (Motor: +1.84).' },
        { move: '19...cxb5', text: '20.Nb6 ile a8 kalesi düşer (Motor: +1.97).' },
      ],
    },
    '20w': {
      text: '20.bxc6 b-hattını açar.',
      amac: 'b-hattını kale için açmak ve c6’da bir zayıf piyon bırakmak.',
      neden: 'Motor burada 20.Nc3’ü daha iyi buluyor (+0.50): at merkeze döner ve b5 gerilimi korunur. 20.bxc6 bxc6 sonrası Siyahın c6 piyonu Bxc5 fikrini mümkün kılan bir yapı oluşturur.',
      diger: [
        { move: '20.Nc3', text: 'At merkeze (Motor: +0.50); 20...Bxc5 21.dxc5 d4 ile benzer feda fikri.' },
        { move: '20.Rb2', text: 'Kale ikinci yataya (Motor: −0.64); 20...Qc8 ve ...Qf5 ile Siyah aktif.' },
      ],
    },
    '20b': {
      text: '20...bxc6 piyonla geri alır.',
      amac: 'Piyon yapısını korumak; b-hattı açılsa da c6-d5 zinciri sağlam kalır.',
      neden: 'Tek iyi hamle: 20...Rb8 21.cxb7 (Motor: +1.89) veya 20...Rxa4 21.Qxa4 bxc6 (Motor: +2.11) materyal kaybettirir.',
      diger: [
        { move: '20...Rb8', text: '21.cxb7 ile Beyaz piyon kazanır (Motor: +1.89).' },
        { move: '20...Rxa4', text: 'Kalite fedası (Motor: +2.11); yeterli karşılık yok.' },
      ],
    },
    '21w': {
      text: '21.Nc3 at merkeze döner ve d5’e baskı yapar.',
      amac: 'Atı oyunun merkezine getirmek ve f3 piyonunu Qxf3 ile almaya hazırlanmak.',
      neden: 'At a4’te kenarda işe yaramıyordu. 21.Rb4? Qc8 (Motor: −0.93) ve 21.Rb2? Qc8 (Motor: −0.96) Siyahın vezirini c8-f5’e aktif hale getirir.',
      diger: [
        { move: '21.Rb4', text: '21...Qc8 22.Qxf3 Ne4 ile Siyah aktif (Motor: −0.93).' },
        { move: '21.Rb2', text: '21...Qc8 22.Nb6 Qa6 ile Siyah üstün (Motor: −0.96).' },
      ],
    },
    '21b': {
      text: '21...Bxc5!? fil c5 piyonu için feda edilir.',
      amac: '...d4 ile merkezi açmak, vezirini d4’e ve sonra g4’e getirmek; f3 kaması ile Beyaz şahına saldırmak.',
      neden: 'Shah’a göre Topalov bu fedayı önceden hazırlamıştı; ünlem objektif değerden çok pratik etki içindir. Motor fedayı 21...Qc8 (−0.04) ve 21...Qd7 kadar iyi buluyor: Motor: 0.00. Sakin yolda Beyaz Qxf3 ile piyonu geri alır ve fil çiftiyle rahat ederdi.',
      diger: [
        { move: '21...Qc8', text: 'Sakin yol (Motor: −0.04): 22.Qxf3 Bd8 23.O-O Ba5, denge.' },
        { move: '21...Qd7', text: '22.Qxf3 Bd8 23.Rb2 Ba5 (Motor: 0.00).' },
      ],
    },
    '22w': {
      text: '22.dxc5 fili alır.',
      amac: 'Feda edilen taşı almak; artık Beyaz bir fil fazlasıyla.',
      neden: 'Fedayı reddetmek için iyi bir neden yok: 22.Qxf3 Bb6 (Motor: −0.28) veya 22.O-O Bb6 (Motor: −0.30) sadece bir piyon kaybettirir.',
      diger: [
        { move: '22.Qxf3', text: '22...Bb6 23.O-O Ba5 ile Siyah piyon fazlası (Motor: −0.28).' },
        { move: '22.O-O', text: '22...Bb6 ile benzer (Motor: −0.30).' },
      ],
    },
    '22b': {
      text: '22...d4! c3 atına ve e3 piyonuna saldırır.',
      amac: 'Merkezi açmak, d-hattını kaleler için açmak ve vezire d4 karesini sağlamak.',
      neden: 'Tek iyi hamle: 22...Re8 (Motor: +1.39) veya 22...Ra3 (Motor: +1.89) fedanın amacını kaybettirir. Shah, Nakamura’nın bu fikri küçümsediğini ve motor Beyaz için küçük bir üstünlük gösterse de doğru yolu bulmanın tahtada çok zor olduğunu yazıyor.',
      diger: [
        { move: '22...Re8', text: '23.O-O d4 24.exd4 ile Beyaz rahat (Motor: +1.39).' },
        { move: '22...Ra3', text: '23.Qxf3 d4 24.Ne2 ile Beyaz üstün (Motor: +1.89).' },
      ],
    },
    '23w': {
      text: '23.exd4 piyonu alır.',
      amac: 'c3 atını kurtarmak ve merkezi kapatmak.',
      neden: 'Tek iyi hamle: 23.O-O dxc3 (Motor: −0.99) veya 23.Nb5 cxb5 (Motor: −1.00) taşı geri verir.',
      diger: [
        { move: '23.O-O', text: '23...dxc3 24.Bxc3 Ne4 ile Siyah üstün (Motor: −0.99).' },
        { move: '23.Nb5', text: '23...cxb5 24.O-O d3 ile Siyah üstün (Motor: −1.00).' },
      ],
    },
    '23b': {
      text: '23...Qxd4 vezir merkeze gelir.',
      amac: 'c3 atına ve d2 filine bakmak; ...Qg4 ile şah kanadına geçmek.',
      neden: 'Siyah şimdi fil için iki piyon almıştır. 23...Re8+ 24.Be3 (Motor: +0.74) daha az etkilidir; 23...Ra3 de piyonu geri almaz (Motor: +1.76).',
      diger: [
        { move: '23...Re8+', text: '24.Be3 Ra3 25.Rb3 ile Beyaz sağlam (Motor: +0.74).' },
        { move: '23...Ra3', text: '24.O-O Qxd4 25.Bc1 ile Beyaz rahat (Motor: +1.76).' },
      ],
    },
    '24w': {
      text: '24.O-O Beyaz rok yapar.',
      amac: 'Şahı merkezden çıkarmak ve kaleleri birleştirmek.',
      neden: 'ChessBase’e göre Nakamura’nın ilk niyeti 24.Qxf3 idi; Shah bunun 24...Ra3 ile sorun yaşadığını yazıyor. Motor bu yolu da dengede buluyor (25.O-O Qxd2 26.Ne4, Motor: −0.04), ama rok yapmak daha sade. Şah g1’de f3 kamasının yanında durur; bu ileride tehlike yaratacak.',
      diger: [
        { move: '24.Qxf3', text: '24...Ra3 25.O-O Qxd2 26.Ne4 ile denge (Motor: −0.04).' },
        { move: '24.Kf1', text: 'Elle rok (Motor: −0.07).' },
      ],
    },
    '24b': {
      text: '24...Qg4 vezir şah kanadına geçer.',
      amac: '...Qh3 ve ...Qg2# tehdidi; f3 kaması ile birlikte mat ağı kurmak.',
      neden: 'Motor 24...Rfd8’i daha iyi buluyor (0.00): 25.Qxf3 Qxd2 ile Siyah piyonu geri verir ama fili kazanır. Topalov saldırıyı tercih eder (Motor: +0.18); Beyaz artık f3’ü almakta zorlanacak.',
      diger: [
        { move: '24...Rfd8', text: '25.Qxf3 Qxd2 26.Rfe1 ile denge (Motor: 0.00).' },
        { move: '24...Rad8', text: '25.Qxf3 Qxd2 ile denge (Motor: 0.00).' },
      ],
    },
    '25w': {
      text: '25.Re1 kale e-hattına gelir.',
      amac: 'Re3 ile f3 piyonuna saldırmak; birinci yatayı da tutmak.',
      neden: 'Shah, 25.Be3?’ü “hata” olarak işaretliyor: d1 vezirinin f3’e bakmaya devam etmesi gerekir. Motor bunu doğruluyor: 25.Be3? Rfd8 26.Kh2 Rxd1 (Motor: −4.7). Motor 25.Bf4’ü biraz daha iyi buluyor (+0.08), ama Re1 de dengeyi korur.',
      diger: [
        { move: '25.Bf4', text: 'Fil aktif kareye (Motor: +0.08); 25...Rfd8 26.Bd6 ile.' },
        { move: '25.Be3', text: 'Hata: 25...Rfd8 26.Kh2 Rxd1 ile vezir kaybı (Motor: −4.7).' },
        { move: '25.Kh2', text: 'Şah güvenliği (Motor: 0.00).' },
      ],
    },
    '25b': {
      text: '25...Rfd8 kale d-hattına gelir.',
      amac: 'd2 filine baskı yapmak ve ...Rd4 ile dördüncü yatayı tutmak.',
      neden: 'Kaleler açık hatlara gelmeli. 25...Kh7? 26.Re3 ile f3 düşer (Motor: +1.78).',
      diger: [
        { move: '25...Rad8', text: 'Aynı fikir, diğer kale (Motor: +0.03).' },
        { move: '25...Kh7', text: '26.Re3 Rfd8 27.Rb2 ile f3 düşer (Motor: +1.78).' },
      ],
    },
    '26w': {
      text: '26.Rb2 kale ikinci yatayı korur.',
      amac: 'd2 filini ve f2’yi korumak; ...Rxd2 fikirlerini önlemek.',
      neden: '26.Kh2? g5! ile Siyahın saldırısı güçlenir (Motor: −1.77). Rb2 sağlam bir savunma hamlesidir.',
      diger: [
        { move: '26.Re3', text: '26...Qh3 27.Qxf3 Rxd2 ile denge (Motor: −0.01).' },
        { move: '26.Kh2', text: '26...g5! ile Siyah saldırıyı güçlendirir (Motor: −1.77).' },
      ],
    },
    '26b': {
      text: '26...Rd4 kale dördüncü yataya gelir.',
      amac: 'h4 piyonuna baskı yapmak ve vezir ile birlikte şah kanadına saldırmak.',
      neden: 'Kale d4’te hem d-hattını hem dördüncü yatayı tutar. Motor 26...Rd7 ile aynı değeri veriyor (+0.35).',
      diger: [
        { move: '26...Rd7', text: 'Kale ikinci kaleyi destekler (Motor: +0.35).' },
        { move: '26...Ra7', text: 'Kale yedinci yatayda (Motor: +0.92).' },
      ],
    },
    '27w': {
      text: '27.Re7 kale yedinci yataya girer.',
      amac: 'f7’ye saldırmak ve Siyahı savunmaya zorlamak.',
      neden: 'Motor 27.Re3’ü biraz daha iyi buluyor (+0.28): f3’e doğrudan saldırı. Nakamura aktif bir yol seçer; Re7 ile Beyaz Siyahın kalelerini f7’yi korumaya bağlar.',
      diger: [
        { move: '27.Re3', text: 'f3’e saldırı (Motor: +0.28).' },
        { move: '27.Re5', text: 'Kale merkezde (Motor: +0.03).' },
      ],
    },
    '27b': {
      text: '27...Rad8 diğer kale d-hattına gelir.',
      amac: 'Kaleleri d-hattında birleştirmek ve ...Rd3 veya ...Rxd2 fikirlerini güçlendirmek.',
      neden: 'Tek iyi hamle: 27...Rd3 (Motor: +0.83) veya 27...Qf5 (Motor: +1.05) Beyaza üstünlük verir.',
      diger: [
        { move: '27...Rd3', text: '28.Qf1 ile Beyaz rahat (Motor: +0.83).' },
        { move: '27...Qf5', text: '28.Qb1 ile Beyaz üstün (Motor: +1.05).' },
      ],
    },
    '28w': {
      text: '28.Qb3 vezir f7’ye saldırır.',
      amac: 'Rxf7 tehdidi; vezir ve kale f7’de birleşir.',
      neden: 'Bu hamle Siyahı tek bir savunmaya zorlar. Motor 28.Re3 ile aynı değeri veriyor (0.00). 28.Ra2? Rd3 ile Beyaz zor durumda kalırdı (Motor: −1.18).',
      diger: [
        { move: '28.Re3', text: '28...Qh3 29.Qxf3 Rxd2 ile denge (Motor: 0.00).' },
        { move: '28.Ra2', text: '28...Rd3 ile Siyah üstün (Motor: −1.18).' },
      ],
    },
    '28b': {
      text: '28...Rf8 kale f7’yi korur.',
      amac: 'Rxf7 tehdidini durdurmak.',
      neden: 'Tek iyi hamle: 28...Nd5 29.Nxd5 (Motor: +1.95) veya 28...R8d5 (Motor: +3.36) kaybeder. Shah bu hamleye ünlem veriyor ve “şimdi ...Qh3 tehdidi nasıl karşılanacak?” diye soruyor.',
      diger: [
        { move: '28...Nd5', text: '29.Nxd5 R4xd5 30.Kh2 ile Beyaz üstün (Motor: +1.95).' },
        { move: '28...R8d5', text: '29.Nxd5 cxd5 ile Beyaz kazanır (Motor: +3.36).' },
      ],
    },
    '29w': {
      text: '29.Qd1 vezir d1’e döner ve f3’e bakar.',
      amac: '...Qh3 tehdidini durdurmak; vezir f3 ve d1’i korur.',
      neden: 'Siyahın ...Qh3 ve ...Qg2# tehdidi vardı. Qd1 tek güvenli yol; 29.Kh2 Qf5 (Motor: −0.09) veya 29.Nd1 Qf5 (Motor: −0.15) de oynanabilirdi.',
      diger: [
        { move: '29.Kh2', text: '29...Qf5 30.Bg5 ile (Motor: −0.09).' },
        { move: '29.Nd1', text: '29...Qf5 30.Re3 ile (Motor: −0.15).' },
      ],
    },
    '29b': {
      text: '29...Rfd8 kale yine d-hattına gelir.',
      amac: 'd-hattında baskıyı sürdürmek.',
      neden: 'f7 artık tehdit altında değil. 29...Rd3 (Motor: +0.80) gibi aktif denemeler kötü.',
      diger: [
        { move: '29...Qh5', text: 'Vezir h5’e (Motor: +0.27).' },
        { move: '29...Rd3', text: '30.Re3 ile Beyaz üstün (Motor: +0.80).' },
      ],
    },
    '30w': {
      text: '30.Qb3 vezir tekrar b3’e gelir.',
      amac: 'f7’ye yeniden baskı yapmak; tekrar beraberliği olasılığını açık tutmak.',
      neden: 'Pozisyon aynı hamlelerle tekrar edebilir. 30.Ra2? Rd3 (Motor: −0.86) kötü.',
      diger: [
        { move: '30.Re3', text: '30...Qh3 31.Qxf3 Rxd2 ile (Motor: −0.07).' },
        { move: '30.Ra2', text: '30...Rd3 ile Siyah üstün (Motor: −0.86).' },
      ],
    },
    '30b': {
      text: '30...Rf8 tekrar f7’yi korur.',
      amac: 'Rxf7 tehdidini durdurmak; beraberliği kabul etmek.',
      neden: 'Tek iyi hamle: 30...Nd5 (Motor: +1.92) veya 30...R8d5 (Motor: +3.05) kaybeder. Shah burada “beraberlik zamanı mı?” diye soruyor.',
      diger: [
        { move: '30...Nd5', text: '31.Nxd5 ile Beyaz üstün (Motor: +1.92).' },
        { move: '30...R8d5', text: '31.Nxd5 ile Beyaz kazanır (Motor: +3.05).' },
      ],
    },
    '31w': {
      text: '31.Nd1 Beyaz tekrardan kaçar.',
      amac: 'Atı e3’e getirip g4 vezirine saldırmak ve Siyahın saldırısını püskürtmek.',
      neden: '31.Qd1 tekrar beraberliği getirirdi (Motor: 0.00). Nakamura kazanma şansı arar; Shah ünlemi mücadele ruhu için verdiğini yazıyor. Objektif olarak hamle biraz kötü (Motor: −0.33); TWIC raporu 31...Qf5’in oyunu Siyah lehine çevirebileceğini yazıyor.',
      diger: [
        { move: '31.Qd1', text: 'Tekrar beraberliği (Motor: 0.00).' },
        { move: '31.Kh2', text: '31...Qf5 32.Bg5 ile (Motor: −0.21).' },
      ],
    },
    '31b': {
      text: '31...Nd5?! at d5’e gelir.',
      amac: 'Atı merkeze getirmek ve e3 karesini kontrol etmek.',
      neden: 'Motorun hamlesi 31...Qf5! (Motor: −0.31): ...Rxh4 tehdidi ve Beyazın tek savunması 32.Re3! Qd7 33.Rxf3 Rxd2. 32.Bg5? Rd3! (Motor: −2.55) ve 32.Ne3? Qh3! (Motor: −3.26) kaybeder. Rus Federasyonu raporu Topalov’un bu hamleyi doğrudan tehdit içermediği için zor bulduğunu yazıyor. 31...Nd5 ile Siyah üstünlüğü bırakır (Motor: +0.08).',
      diger: [
        { move: '31...Qf5', text: '32.Re3 Qd7 33.Rxf3 Rxd2 34.Rxd2 Qxd2 ile Siyah biraz üstün (Motor: −0.31).' },
        { move: '31...Kh7', text: '32.Kh2 Qh5 33.Bg5 ile Beyaz biraz üstün (Motor: +0.65).' },
      ],
    },
    '32w': {
      text: '32.Re5 kale d5 atına saldırır.',
      amac: 'd5 atını sorgulamak ve kaleyi merkeze getirmek.',
      neden: '32.Ne3? Qh3! 33.Rxf7 Rxf7 kaybeder (Motor: −5.16); Rus Federasyonu raporu bu tuzağı gösteriyor. Motor 32.Ra7’yi (+0.04) veya 32.Re1’i önerir; Re5 de dengeyi korur (Motor: −0.05).',
      diger: [
        { move: '32.Ra7', text: '32...Qe6 33.Raa2 ile denge (Motor: +0.04).' },
        { move: '32.Re3', text: '32...Qd7 33.Rxf3 Nf6 ile denge (Motor: −0.02).' },
        { move: '32.Ne3', text: '32...Qh3! ile Siyah kazanır (Motor: −5.16).' },
      ],
    },
    '32b': {
      text: '32...Kh7? şah h7’ye çekilir.',
      amac: '...Rb8 ile b3 vezirini saptırmak; şah g8’de değilken Qxb8 şah olmaz.',
      neden: 'Rus Federasyonu raporu bunu “ikinci hata” olarak işaretliyor; TWIC “açık bir hata” diyor. 33.Kh2! ile Beyaz ...Qh3 tehdidini durdurur (Motor: +2.17). Doğrusu 32...Nf6 (Motor: −0.05) veya 32...Ra8 (Motor: 0.00); ikisi de ...Qd7 fikriyle dengede kalır.',
      diger: [
        { move: '32...Nf6', text: '33.Re1 Qd7 34.Qxf3 Rxd2 ile denge (Motor: −0.05).' },
        { move: '32...Ra8', text: '33.Kh2 Rxd2 34.Rxd2 Nf4 ile denge (Motor: 0.00).' },
      ],
    },
    '33w': {
      text: '33.Kh2! şah h3 karesini kontrol eder.',
      amac: '...Qh3 tehdidini sonsuza dek durdurmak; ardından Ne3 ile vezire ve d5 atına saldırmak.',
      neden: 'Shah: “...Qh3’ü bir noktada doğrudan önlemek.” 33.Ne3 Qh3 34.Rxd5 sonrası Beyazın üstünlüğü küçük (Motor: +0.42). Kh2 önce şahı güvenceye alır, sonra Ne3 gelir (Motor: +2.17).',
      diger: [
        { move: '33.Rxd5', text: '33...Rxd5 34.Ne3 Qh3 ile küçük üstünlük (Motor: +0.34).' },
        { move: '33.Ne3', text: '33...Qh3 34.Rxd5 ile küçük üstünlük (Motor: +0.21).' },
      ],
    },
    '33b': {
      text: '33...Nf6 at f6’ya çekilir.',
      amac: 'Atı Ne3 saldırısından kurtarmak ve g4 karesini korumak.',
      neden: 'Motor 33...f5’i (Motor: +1.70) veya 33...Rxd2’yi (Motor: +1.69) biraz daha dirençli buluyor. Pozisyon zaten kaybettiren; Nf6 ile Siyah ...Rb8 için hazırlanır.',
      diger: [
        { move: '33...f5', text: '34.Qc2 Rc4 35.Qb1 ile Beyaz üstün (Motor: +1.70).' },
        { move: '33...Rxd2', text: '34.Rxd2 Nf4 35.Ne3 ile Beyaz üstün (Motor: +1.69).' },
      ],
    },
    '34w': {
      text: '34.Be3 fil d4 kalesine saldırır.',
      amac: 'Siyah kaleyi geri çekmeye zorlamak ve e3’ü kontrol etmek.',
      neden: '34.Ne3 (Motor: +2.40) ve 34.Bc3 (Motor: +2.32) de iyi. Be3 ile Beyaz hem kaleye saldırır hem de f2’yi korur (Motor: +2.42).',
      diger: [
        { move: '34.Ne3', text: '34...Qd7 35.Bc3 ile (Motor: +2.40).' },
        { move: '34.Bc3', text: '34...Rd3 35.Ne3 ile (Motor: +2.32).' },
      ],
    },
    '34b': {
      text: '34...Rb8 Siyah b3 vezirine saldırır.',
      amac: 'Veziri saptırmak; Qxb8 olursa ...Rxd1 ile at alınır ve ...Qh3+ tehdidi gelir.',
      neden: 'Shah’a göre Topalov bu hamle için “tek sorunu kaybettirmesi” demiş. 34...Rd5 35.Rxd5 Nxd5 (Motor: +2.47) veya 34...Ra4 (Motor: +2.53) de iyi değil; pozisyon zaten kötü.',
      diger: [
        { move: '34...Rd5', text: '35.Rxd5 Nxd5 36.Bg5 ile Beyaz üstün (Motor: +2.47).' },
        { move: '34...Ra4', text: '35.Bf4 Rxf4 ile kalite fedası (Motor: +2.53).' },
      ],
    },
    '35w': {
      text: '35.Qxb8! vezir b8 kalesini alır.',
      amac: 'Korumasız kaleyi almak; Siyah d1 atını alsa da Beyaz kalite fazlasıyla kalır.',
      neden: 'b8 kalesi korumasızdı: şah h7’de olduğu için Qxb8 şah değil, ama bir kale bedavaya gelir. 35.Bxd4? Rxb3 Siyahı kazandırır (Motor: −1.74); 35.Qc2? Rxd1 (Motor: −2.67).',
      diger: [
        { move: '35.Bxd4', text: '35...Rxb3 36.Rxb3 Qxd4 ile Siyah üstün (Motor: −1.74).' },
        { move: '35.Qc2', text: '35...Rxd1 ile Siyah üstün (Motor: −2.67).' },
      ],
    },
    '35b': {
      text: '35...Rxd1 Siyah d1 atını alır.',
      amac: '...Qh3+ ve ...Rh1# tehdidi kurmak.',
      neden: 'Shah: “tek hamle.” 35...Rd3 (Motor: +4.33) veya 35...Nd7 (Motor: +4.60) daha da kötü. Şimdi tehdit 36...Qh3+! 37.Kxh3 Rh1#.',
      diger: [
        { move: '35...Rd3', text: '36.Rg5 ile Beyaz kazanır (Motor: +4.33).' },
        { move: '35...Nd7', text: '36.Rg5 ile Beyaz kazanır (Motor: +4.60).' },
      ],
    },
    '36w': {
      text: '36.Rb1! kale d1 kalesine saldırır ve h1’i korur.',
      amac: '...Qh3+ ve ...Rh1# tehdidini durdurmak ve d1 kalesine saldırmak.',
      neden: 'Tek hamle: başka her hamlede 36...Qh3+! 37.Kxh3 Rh1# gelir. 36.Rh5+? Qxh5 (Motor: −5.46) veya 36.Qh8+? Kxh8 (Motor: −8.75) kaybeder (Motor: +3.16).',
      diger: [
        { move: '36.Rh5+', text: '36...Qxh5 37.Rb4 ile Siyah kazanır (Motor: −5.46).' },
        { move: '36.Qh8+', text: '36...Kxh8 ile Siyah kazanır (Motor: −8.75).' },
      ],
    },
    '36b': {
      text: '36...Qd7 vezir d1 kalesini korur.',
      amac: '...Ng4+ ile çatal ve mat saldırısı hazırlamak.',
      neden: 'Shah bu hamleye “?!” veriyor. 36...Nd7 (Motor: +4.02) biraz daha dirençli, ama Beyaz yine kazanır. 36...Rxb1 37.Qxb1 (Motor: +4.32) da kötü.',
      diger: [
        { move: '36...Nd7', text: '37.Rxd1 Nxb8 38.Re8 ile Beyaz kazanır (Motor: +4.02).' },
        { move: '36...Rxb1', text: '37.Qxb1 Qc4 ile Beyaz kazanır (Motor: +4.32).' },
      ],
    },
    '37w': {
      text: '37.Rg5! kale g4 karesini kontrol eder.',
      amac: '...Ng4+ çatalını önlemek ve kaleyi e5’teki saldırıdan çıkarmak.',
      neden: 'Shah bu hamlenin Topalov tarafından tamamen gözden kaçırıldığını yazıyor. 37.Rxd1? Ng4+ 38.Kh3 Nxf2+ 39.Kh2 Qh3+ 40.Kg1 Qg2# ile mat. Rg5 tek kazandıran hamle (Motor: +4.20; ikinci en iyi 37.Re4 −0.75).',
      diger: [
        { move: '37.Rxd1', text: '37...Ng4+ ile dört hamlede mat.' },
        { move: '37.Re4', text: '37...Nxe4 ile Siyah dengeyi kurar (Motor: −0.75).' },
      ],
    },
    '37b': {
      text: '37...Ne4 at g5 kalesine ve f2’ye saldırır.',
      amac: 'Son karşı saldırı denemesi: ...Nxg5 veya ...Nxf2.',
      neden: 'Pozisyon kaybettiren; 37...Qd3 (Motor: +4.26) veya 37...Ng4+ (Motor: +4.36) de sonucu değiştirmez.',
      diger: [
        { move: '37...Qd3', text: '38.Rxd1 Qxd1 39.Qf4 ile Beyaz kazanır (Motor: +4.26).' },
        { move: '37...Ng4+', text: '38.Rxg4 Rxb1 39.Qxb1 ile Beyaz kazanır (Motor: +4.36).' },
      ],
    },
    '38w': {
      text: '38.Rxd1 Beyaz d1 kalesini alır.',
      amac: 'Materyali toplamak; Siyahın en tehlikeli taşını almak.',
      neden: 'Şimdi g4 karesi korunduğu için Rxd1 güvenlidir. 38.Re5 de aynı değerde (Motor: +4.39).',
      diger: [
        { move: '38.Re5', text: '38...Rxb1 39.Qxb1 ile Beyaz kazanır (Motor: +4.39).' },
        { move: '38.Qb4', text: '38...f5 ile Beyaz kazanır (Motor: +3.05).' },
      ],
    },
    '38b': {
      text: '38...Qxd1 zorunlu: vezir geri alır.',
      amac: 'Kaleyi geri almak.',
      neden: 'Tek hamle: 38...Qe7 (Motor: +8.03) veya 38...Nxg5 (Motor: +9.52) bir kale daha kaybettirir.',
      diger: [
        { move: '38...Qe7', text: '39.Qe5 ile Beyaz kazanır (Motor: +8.03).' },
        { move: '38...Nxg5', text: '39.Rxd7 ile vezir düşer (Motor: +9.52).' },
      ],
    },
    '39w': {
      text: '39.Qf4 vezir e4 atına ve f7’ye saldırır, g5 kalesini ve f2’yi korur.',
      amac: 'Bütün Siyah tehditlerini durdurmak ve fil fazlasıyla kazanılmış bir oyun bırakmak.',
      neden: '39...Nxg5 40.hxg5 sonrası Beyaz bir fil fazlasıyla kalır; f7 ve şah zayıf (Motor: +4.45). 39.Rxg6? fxg6 (Motor: +0.09) kazancı atardı. Topalov burada terk etti.',
      diger: [
        { move: '39.Qb4', text: '39...Qc2 40.Qd4 ile Beyaz üstün (Motor: +3.09).' },
        { move: '39.Rxg6', text: '39...fxg6 40.Qf4 Nf6 ile denge (Motor: +0.09).' },
      ],
    },
  },
  exercises: [
    { id: 'nto-1', kind: 'tekrar', plan: false, title: 'Qxb8! ve Rb1!',
      source: 'Nakamura – Topalov, Moskova 2016 (35. hamle)',
      fen: '1r6/5ppk/2p2np1/2P1R3/3r2qP/1Q2BpP1/1R3P1K/3N4 w - - 22 35',
      prompt: 'Siyahın b8 kalesi b3 vezirine, d4 kalesi d1 atına saldırıyor. Siyahın veziri ve f3 piyonu Beyaz şahının yakınında. Beyazın en iyi devamını bulun.',
      hint: 'b8 kalesini kim koruyor? Sonra birinci yatayı unutmayın.',
      line: ['Qxb8', 'Rxd1', 'Rb1'],
      explanation: '**35.Qxb8! Rxd1 36.Rb1!** b8 kalesi korumasızdı. Siyah d1 atını alır, ama 36.Rb1 d1 kalesine saldırır ve h1 karesini korur; başka hamlede 36...Qh3+! 37.Kxh3 Rh1# gelir. Motor: Qxb8 +3.3, sonraki en iyi 35.Bxd4 −2.6; 36.Rb1 +3.4, diğer hamleler mat.',
      link: 'Saldırı altındaki vezir geri çekilmek yerine korumasız bir taşı aldı; ardından mat tehdidi tek hamleyle durduruldu.' },
    { id: 'nto-2', kind: 'tekrar', plan: false, title: 'Rg5! çataldan kaçış',
      source: 'Nakamura – Topalov, Moskova 2016 (37. hamle)',
      fen: '1Q6/3q1ppk/2p2np1/2P1R3/7P/4BpP1/5P1K/1R1r4 w - - 2 37',
      prompt: 'Beyaz bir kale fazlasıyla görünüyor, ama Siyahın d1 kalesi korunuyor ve ...Ng4+ ile hem şaha hem e5 kalesine saldırmak istiyor. Beyaz ne oynamalı?',
      hint: 'e5 kalesi hem çataldan çıkmalı hem de g4 karesini kontrol etmeli.',
      line: ['Rg5', 'Ne4', 'Rxd1'],
      accept: { 2: ['Re5'] },
      explanation: '**37.Rg5! Ne4 38.Rxd1 Qxd1 39.Qf4** Kale g4 karesini kontrol eder; at artık şah çekemez. 37.Rxd1? Ng4+ ise Siyaha mat getirir (38.Kh3 Nxf2+ 39.Kh2 Qh3+ 40.Kg1 Qg2#). Motor: Rg5 +4.1, sonraki en iyi 37.Re4 −0.4. 38. hamlede Re5 de aynı değerde (+4.4).',
      link: 'Önce rakibin mat ve çatal tehdidini durdur, sonra materyali topla.' },
    { id: 'nto-3', kind: 'transfer', plan: false, title: 'Nh4xg6: fili almak',
      source: 'Bareev – Kobalia, Aeroflot Open, Moskova 2010 (17. hamle)',
      fen: '3rk2r/2q1bppp/p3pnb1/1pn5/3P3N/4PPP1/PP1BQ1BP/2R1K2R w Kk - 0 17',
      prompt: 'Aynı 6.Nh4 Slavından bir pozisyon. Siyahın g6 fili d3 karesine bakıyor ve c5 atı d4 piyonunun saldırısı altında. Beyaz ne oynamalı?',
      hint: 'h4 atı, Slavda hep hedeflediği fili alabilir. Sonra c-hattındaki kaleye bakın.',
      line: ['Nxg6', 'hxg6', 'dxc5'],
      explanation: '**17.Nxg6! hxg6 18.dxc5** Önce ...Bd3 tehdidi olan fil alınır, sonra c5 atı alınır: 18...Qxc5 19.Rxc5 olduğu için Siyah geri alamaz. Motor: Nxg6 +1.0, sonraki en iyi 17.Kd1 −1.1; 18.dxc5 +1.0, 18.f4 −0.2.',
      link: 'Nakamura 7.Nxg6 ile Slavın f5 filini aldı; Bareev aynı Nh4 atıyla aynı fili, bu kez taktik bir anda aldı.' },
    { id: 'nto-4', kind: 'transfer', plan: false, title: 'Vezir b8’de alıyor',
      source: 'Korçnoy – S. Polgar, San Francisco 1995 (27. hamle)',
      fen: '1n2r2k/4q3/r1b1N1p1/1Q1pPp1p/p1p4P/2P2BP1/P4P2/1R2R1K1 w - - 1 27',
      prompt: 'Beyazın b5 veziri c6 filinin, e6 atı e7 vezirinin saldırısı altında. Beyazın b1 kalesi b-hattında. Beyaz ne oynamalı?',
      hint: 'Vezir geri çekilirse e6 atı düşer. b-hattındaki kale, b8’de neyi destekliyor?',
      line: ['Qxb8', 'Rxb8', 'Rxb8+'],
      explanation: '**27.Qxb8! Rxb8 28.Rxb8+** Vezir b8 atını alır ve kale b8’de geri alır: Beyaz vezir için at ve kale alır, oyunda da üstün kalır. Motor: Qxb8 +1.2, sonraki en iyi 27.Qc5 −3.0; 28.Rxb8+ +1.1, 28.Nf4 −4.3.',
      link: 'Nakamura da saldırı altındaki vezirini geri çekmek yerine b8’de alıp b1 kalesiyle devam etti.' },
  ],
  sources: [
    { title: 'ChessBase: Candidates R07 – Nakamura beats Topalov (Sagar Shah’ın analiziyle)', url: 'https://en.chessbase.com/post/candidates-r07-nakamura-beats-topalov' },
    { title: 'ChessBase (İspanyolca): Candidatos R7 – Nakamura doblega a Topalov', url: 'https://es.chessbase.com/post/candidatos-r7-nakamura-doblega-a-topalov' },
    { title: 'Rus Satranç Federasyonu: Candidates, 7. tur raporu', url: 'https://www.ruchess.ru/en/news/report/candidates_report07/' },
    { title: 'The Week in Chess: Karjakin and Aronian draw to retain the Candidates lead at the half way stage', url: 'https://theweekinchess.com/chessnews/events/fide-candidates-2016/karjakin-and-aronian-draw-to-retain-the-candidates-lead-at-the-half-way-stage' },
    { title: 'Chess.com: Nakamura Beats Topalov; Aronian & Karjakin Retain Lead At Halfway Point', url: 'https://www.chess.com/news/view/nakamura-beats-topalov-aronian-karjakin-retain-lead-at-halfway-point-5356' },
    { title: 'chess24: Moscow Candidates 7 – Nakamura wins and loses', url: 'https://chess24.com/en/read/news/moscow-candidates-7-nakamura-wins-and-loses' },
    { title: 'Chess Daily News: Topalov – Kramnik, Elista 2006, 11. parti analizi (8.Rb1 ve 9.c5 fikri)', url: 'https://chessdailynews.com/game-11-analysis-topalov-12-kramnik/' },
  ],
};
