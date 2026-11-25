// Euwe – Alekhine, Dünya Şampiyonası maçı, Hollanda 1937 (7. oyun). Kaynak: PgnMentor (Alekhine.pgn).
export default {
  id: 'euwe-alekhine-1937',
  theme: 'Zayıflamış beyaz şaha karşı kale baskını',
  white: 'Max Euwe', black: 'Aleksandr Alekhine',
  whiteShort: 'Euwe', blackShort: 'Alekhine',
  event: 'Dünya Şampiyonası maçı, 7. oyun', site: 'Hollanda', year: 1937, eco: 'D18',
  variation: 'Slav Savunması, Çek varyantı, Hollanda sistemi (6.e3 e6 7.Bxc4)', result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Nbd7 8. O-O Bd6 9. Qe2 Ne4 10. Nxe4 Bxe4 11. Nd2 Bg6 12. e4 Bc7 13. Bb3 O-O 14. f4 Nf6 15. Bc2 Qxd4+ 16. Kh1 Qb4 17. g4 Rad8 18. f5 exf5 19. exf5 Rfe8 20. Qg2 Qxg4 21. fxg6 hxg6 22. Bd1 Qxg2+ 23. Kxg2 Rd4 24. Nf3 Rg4+ 25. Kh3 Rd8 26. Bg5 Rb4 27. Bd2 Re4 28. Bb3 Re2 29. Bc3 Rd3 30. Kh4 Rxf3 31. Rxf3 Rxh2+ 32. Rh3 g5+ 33. Kxg5 Rxh3 34. Bd1 Ne4+ 0-1`,

  summary: 'Siyah kazandı: 1937 rövanş maçının 7. oyununu, şampiyonluğu Euwe’den geri almak için oynayan Alekhine aldı ve maçta ilk kez öne geçti (4–3). Euwe, Slav’ın Hollanda sisteminde rahat bir açılış oynadı ve 12.e4 ile merkezde iki piyon kurdu. Ama d4’ü koruyan hiçbir taş yokken oynanan **14.f4?** g1-a7 çaprazını açtı: Alekhine 14...Nf6 ile d-hattını açtı ve **15...Qxd4+** ile piyonu şahla aldı (Motor: −1.0). Euwe g4-f5 ile g6 filini kapana kıstırınca Alekhine filini kurtarmaya uğraşmadı; **20...Qxg4!** ile fil karşılığında toplam üç piyon aldı ve vezirleri değiştirdi. Oyun sonunda taş karşılığı üç piyon ve çok aktif iki kale dengeyi korudu (motor Beyazı yalnızca +0.4 üstün görüyordu). Beyazın açıktaki şahı h3’e gidince **28.Bb3?** e2 karesini korumasız bıraktı; **28...Re2! 29.Bc3 Rd3!** ile kaleler ikinci ve üçüncü yataya girdi, f3 atı bağlandı ve **30...Rxf3 31.Rxf3 Rxh2+ 32.Rh3 g5+! 33.Kxg5 Rxh3 34.Bd1 Ne4+** ile Siyah malzeme üstünlüğünü kesinleştirdi.',
  intro: 'Bağlam: 1935’te unvanı kaybeden Alekhine, 1937 rövanşında favori sayılmıyordu. Euwe 1. oyunu kazandı, 5. oyundan sonra 3–2 öndeydi; 6. oyunda Alekhine 23 hamlelik bir fedayla skoru eşitledi ve bu 7. oyunla maçta ilk kez öne geçti. Açılış, iki oyuncunun da çok iyi bildiği Slav’ın 4...dxc4 5.a4 Bf5 ana hattıdır: 5.a4 ...b5’i engeller, 5...Bf5 ise 6.e4’ü önler. Euwe, 1935’te iki tarafın da oynadığı 6.Ne5 yerine sakin **6.e3** ile Hollanda sistemini seçti: piyonu filiyle geri alıp rok yapacak, sonra Qe2 ve e4 ile merkezi genişletecekti. Alekhine bilinen 8...Bb4 yerine 8...Bd6 ve 9...Ne4 ile taş değiştirip e4’ü geciktirmeyi denedi. Oyunun asıl öyküsü 14.f4 ile başlar: Beyaz şah kanadında saldırı ararken merkezini ve şahını zayıflattı; Alekhine önce piyon aldı, sonra filini üç piyona değişerek kalelerini beyaz şahın etrafına soktu.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Hollanda sisteminde c4 piyonunu Bxc4 ile geri almak, rok yapmak ve Qe2 ile **e4** ilerleyişini hazırlamak.',
      '...Ne4 ile gelen taş değişiminden sonra Nd2 ile e4 filini kovup e4’ü tempoyla oynamak; d4–e4 merkezi kurmak.',
      'Fil çiftinden yararlanmak için oyunu açmak; Bb3 ile a2-g8 çaprazını, Bc2 ile b1-h7 çaprazını tutmak.',
      'f4-f5 ve g4 ile şah kanadında alan kazanıp g6 filini kapana kıstırmak; e-hattını ve f-hattını açmak.',
      'Asıl sorun: f4 d4 piyonunu ve g1-a7 çaprazını zayıflattı; 13.Nb3 gibi d4’ü koruyan sakin hamleler (+0.6) daha sağlamdı.',
      'Oyun sonunda taş fazlasını değerlendirmek için şahı güvenli bir kareye (Kg2/Kh1) koymak, kaleleri birleştirmek ve Siyah kalelerinin gireceği e2/d2 karelerini kapalı tutmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'c6–e6 piyonlarıyla sağlam bir Slav yapısı kurmak; c8 filini piyon zincirinin dışına, f5’e çıkarmak.',
      '...Ne4 ile taş değiştirip Beyazın e4 ilerleyişini yavaşlatmak; fili g6’da b1-h7 çaprazında tutup e4’e baskı yapmak.',
      'Beyaz f4 oynayınca ...Nf6 ile d-hattını açıp **...Qxd4+** ile piyonu şahla almak; sonra ...Qb4 ile b2 ve a4’e baskı.',
      'Fil kapana girince onu kurtarmaya uğraşmak yerine **...Qxg4** ile fil karşılığında üç piyon toplamak ve vezirleri değiştirmek.',
      'Vezirsiz oyunda kaleleri d- ve e-hatlarından **dördüncü, ikinci ve üçüncü yataya** sokmak; beyaz şahı şahlarla h3’e itmek.',
      'Bağlama (...Rd3 ile f3 atı), şah çekme ve piyon şahı (...g5+) ile şahı atın çatal karesine çekmek.',
    ] },
  },
  critical: [
    { move: '13w', title: '13.Bb3: d4’ü koruma fırsatı kaçıyor', text: 'Motor bu konumda 13.Nb3’ü öneriyor (+0.6): at d4’ü korur, a5 ve c5’e bakar. Euwe filini b3’e çekti (+0.1) ve d2 atını yerinde bıraktı. Bu kararın bedeli hemen ödenmedi; ama bir hamle sonra f4 ile d4 tamamen korumasız kalınca at d2’de pasif kaldığı için piyonu kurtaracak bir taş bulunamadı.' },
    { move: '14w', title: '14.f4? d4 ve g1-a7 çaprazı', text: 'Euwe f4-f5 ile şah kanadında oynamak istedi. Ama f4’ten sonra 14...Nf6 hem e4’e ikinci kez saldırır hem de d-hattını açar: Siyah veziri d4’ü görür ve alırken g1’deki şaha şah çeker. Beyaz e4 ile d4’ü aynı anda tutamaz. Motor: 14.Bc2 +0.2, 14.Nf3 0.0; maç hamlesinden sonra −1.0. Yani tek hamlede yarım piyonluk üstünlük bir piyonluk dezavantaja döndü.' },
    { move: '15b', title: '15...Qxd4+ piyon şahla geliyor', text: 'At f6’ya gidince Qd8’in önü açıldı. 15...Qxd4+ şahla geldiği için Beyaz piyonun karşılığında tempo kazanamaz; 16.Kh1 tek hamledir, çünkü 16.Rf2? Bb6 kaleyi şaha bağlar (−3.1) ve 16.Qf2 Qxf2+ 17.Rxf2 Ng4 çatalı kalite kaybettirir (−3.7). Motor: 15...Qxd4+ −1.0; en yakın alternatif 15...c5 yalnızca −0.3.' },
    { move: '17b', title: '17...Rad8: filden vazgeçen karar', text: 'Beyaz 17.g4 ile f5’i ve filin kapana kısılmasını hazırladı. Motorun önerisi 17...Qc5 (−1.2): vezir g1-a7 çaprazına döner, fil h7’ye kaçabilir. Alekhine ise 17...Rad8 ile taşlarını geliştirmeyi seçti ve 18.f5’e izin verdi. Chess.com’daki "A Century of Chess" yazısı bu oyundaki fedanın 17. hamlede geldiğini ve Alekhine’in taş karşılığında sonunda üç piyon ve daha aktif oyun aldığını yazıyor. Motor bu kararı biraz zayıf buluyor (−0.4), ama ortaya çıkan konum Siyah için oynaması çok daha kolaydı.' },
    { move: '20b', title: '20...Qxg4!: fil için üç piyon', text: 'Fil g6’da kurtarılamaz durumdaydı. Alekhine g4 piyonunu alır: vezir g2 vezirini karşılar ve 21.Qxg4? Nxg4 22.fxg6 Re2 sonrası Siyah kazanır (−2.5). Euwe 21.fxg6 ile fili aldı, Siyah 21...hxg6 ile geri aldı. Sonuç: Siyah d4, g4 ve f5’ten gelen üç piyonu toplamış, vezirleri de değişmeye hazır. Motor dengeli görüyor (+0.2); 20...Bf4 ve 20...Nxg4 da yaklaşık 0.0.' },
    { move: '24b', title: '24...Rg4+: kaleler şaha yöneliyor', text: 'Taş eksiği olan taraf için en önemli kaynak etkinliktir. Alekhine kalesiyle şah çekerek beyaz şahı h3’e çekti; şah orada bir daha güvenli bir kare bulamadı. Motor sakin 24...Rb4’ü biraz daha iyi buluyor (+0.7’ye karşı +1.1), ve 25.Kh1! (+0.9) şahı daha güvenli bir köşeye götürürdü. Euwe’nin 25.Kh3’ü kaleye saldırdı ama şahı oyunun geri kalanında hedef yaptı.' },
    { move: '28w', title: '28.Bb3?: e2 karesi açılıyor', text: 'd1 fili e2 karesini koruyordu ve e4 kalesinin içeri girmesini engelliyordu. Fil b3’e gidince 28...Re2! d2 filine (d8 kalesiyle birlikte) ve h2 piyonuna saldırır. Motor 28.Kg2 (+0.5), 28.Ra3 (+0.3) ya da 28.a5 (+0.2) ile Beyazın biraz üstün olduğunu söylüyor; maç hamlesinden sonra −2.9. Oyunun sonucu bu tek hamlede değişti.' },
    { move: '29b', title: '29...Rd3!: f3 atı şaha bağlı', text: 'Fil c3’e kaçınca d-hattı ve üçüncü yatay Siyah kalesine açıldı. 29...Rd3 f3 atını h3’teki şaha bağlar; e2 kalesi de h2’ye bakar. 30.Kh4 Rxf3 31.Rxf3 Rxh2+ 32.Rh3 g5+! 33.Kxg5 Rxh3 34.Bd1 Ne4+ ile at şahla birlikte c3 filine saldırır. Motor: 29...Rd3 −5.4; doğal görünen 29...g5 yalnızca −0.7, 29...Nd5 ise 0.0. Kazanç tek bir kesin hamleye bağlıydı ve Alekhine onu buldu.' },
  ],
  lessons: [
    'Slav’ın Hollanda sisteminde Beyaz e4 ile merkezi alır; ama d4 piyonu çoğu zaman tek bir taşla korunur. f4 gibi bir ilerleyiş g1-a7 çaprazını açınca bu piyon şahla alınabilir hâle gelir.',
    'Bir taş bir hattı kapatıyorsa (d7 atı d-hattını), onu tempo kazanarak çekmek arkadaki vezirin hedefini açığa çıkarır: 14...Nf6 hem e4’e saldırdı hem de 15...Qxd4+’ü hazırladı.',
    'Kapana giren bir taşı kurtarmaya çalışmak yerine onun karşılığında en çok şeyi almak gerekir: Alekhine fili verdi, üç piyon ve vezir değişimi aldı.',
    'Taş karşılığı piyon alan taraf için etkinlik her şeydir: kaleleri açık hatlara ve rakip yataylara sokmak, piyonları korumaktan önce gelir.',
    'Vezirler değişse de şahın önündeki piyonlar gitmişse şah oyun sonunda hedef olur; şahı tempo kazanmak için ileri götürmek (25.Kh3) yerine güvenli bir köşeye çekmek (25.Kh1) gerekir.',
    'Her taşın hangi kareyi koruduğunu hamleden önce kontrol edin: d1 fili e2’yi koruyordu ve 28.Bb3 tek hamlede oyunu kaybettirdi.',
    'Kale baskını, bağlama ve piyon şahının birleşimiyle biter: ...Rd3 atı bağladı, ...g5+ şahı atın çatal karesine çekti.',
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Euwe vezir piyonunu iki kare ilerletir; merkezde e5 ve c5’e bakar.',
      amac: 'Merkezde yer tutmak ve c4 ile bir Vezir Gambiti kurmak; Euwe’nin bu maçta beyazla sık seçtiği yapılar.',
      neden: 'Chess.com’daki "A Century of Chess" yazısına göre Euwe 1935’te Alekhine’in 1.d4’e karşı savunmalarındaki zayıflıktan yararlanmıştı; rövanşta da beyazla 1.d4 oynadı. Motor 1.e4 (+0.3) ve 1.d4’ü (+0.3) eşit görüyor.',
      diger: [
        { move: '1.e4', text: 'Açık oyunlar ve Fransız/Sicilya yapılarına yol açar (Motor: +0.3). Euwe bu maçta beyazla 1.d4’e bağlı kaldı.' },
        { move: '1.Nf3', text: 'Esnek bir giriş; çoğu zaman aynı Vezir Gambiti yapılarına döner (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...d5 ile Alekhine merkezde doğrudan karşı koyar.',
      amac: 'd5 piyonuyla e4’ü kontrol etmek ve klasik Vezir Gambiti yapılarına girmek.',
      neden: 'Bu maçta iki oyuncu da Slav’ı çok iyi biliyordu; 1...d5 bu yapıya giden en doğrudan yoldur. 1...Nf6 (+0.3) Hint savunmalarına esneklik bırakır.',
      diger: [
        { move: '1...Nf6', text: 'Nimzo-Hint veya Vezir-Hint yapılarına yol açar (Motor: +0.3). Maçın ilerleyen oyunlarında da bu tür savunmalar görüldü.' },
        { move: '1...e6', text: 'Hem Fransız hem Vezir Gambiti Reddine dönebilen esnek bir hamle.' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. Beyaz c-piyonunu d5’e karşı oynar.',
      amac: 'd5 piyonunu merkezden uzaklaştırmaya zorlamak; Siyah alırsa e4 ile merkezi tamamen almak.',
      neden: 'c4, d5’e kanattan saldırarak Siyahın merkezini sorgular; Siyahın bu piyonu sonsuza dek tutması zordur. 2.Nf3 (+0.4) aynı yapılara daha esnek bir sırayla gider.',
      diger: [
        { move: '2.Nf3', text: 'Önce at; c4’ü sonra oynar ve bazı Siyah sistemlerini atlar (Motor: +0.4).' },
        { move: '2.Bf4', text: 'Londra sistemi; daha sakin bir kurulum (Motor: yaklaşık +0.2).' },
      ],
    },
    '2b': {
      text: '2...c6: Slav Savunması. d5 c-piyonuyla desteklenir.',
      amac: 'd5’i sağlam tutarken c8 filini e6 piyonunun arkasına hapsetmemek; fil daha sonra f5 veya g4’e çıkacak.',
      neden: 'Vezir Gambiti Reddinde (2...e6) c8 fili uzun süre kapalı kalır. Slav’da önce fil dışarı çıkar, sonra e6 oynanır. 2...dxc4 Vezir Gambiti Kabulüdür; maçın 5. oyununda bu yapı görülmüştü.',
      diger: [
        { move: '2...e6', text: 'Klasik Vezir Gambiti Reddi; sağlam ama c8 fili pasif kalır (Motor: +0.3).' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü; Siyah merkezi bırakıp hızlı gelişim arar (Motor: +0.3).' },
      ],
    },
    '3w': {
      text: '3.Nf3: at gelişir, e5’i ve d4’ü kontrol eder.',
      amac: 'Doğal gelişim; Nc3 ile birlikte e4 ilerleyişini hazırlamak.',
      neden: '3.Nc3 motorun ilk tercihi (+0.4), ama 3...dxc4 ve 3...e5 gibi keskin seçenekler verir. 3.Nf3 bu yanıtları sınırlar ve ana hatta gider.',
      diger: [
        { move: '3.Nc3', text: 'Daha iddialı; 3...dxc4 ya da 3...e5 Winawer karşı gambiti gibi seçenekler doğar (Motor: +0.4).' },
        { move: '3.cxd5', text: 'Değişme Slav’ı; simetrik ve sakin bir yapı (Motor: +0.35).' },
      ],
    },
    '3b': {
      text: '3...Nf6: at gelişir ve e4’ü kontrol eder.',
      amac: 'Gelişim ve merkeze baskı; e4 ilerleyişini zorlaştırmak.',
      neden: 'Slav’ın en yaygın sırası. 3...e6 Yarı-Slav’a gider ve c8 filini kapatır; 3...dxc4 hemen piyon alır ama Beyaz e3/e4 ile rahatça geri alır.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav’a hazırlanır; fil c8’de kapalı kalır (Motor: +0.5).' },
        { move: '3...dxc4', text: 'Erken piyon alma; Beyaz 4.e3 ya da 4.a4 ile rahatça geri alır.' },
      ],
    },
    '4w': {
      text: '4.Nc3: ikinci at da gelişir; e4 ilerleyişine hazırlık.',
      amac: 'd5’e baskıyı artırmak ve e4’ü desteklemek.',
      neden: 'Ana hat. 4.e3 (Yavaş Slav) sağlam ama c4’ü koruyarak oyunu sakinleştirir; 4.Nc3 Siyahı 4...dxc4 kararını vermeye zorlar.',
      diger: [
        { move: '4.e3', text: 'Yavaş Slav; 4...Bf5 ile Siyah filini rahatça geliştirir (Motor: +0.3).' },
        { move: '4.cxd5', text: 'Değişme varyantı; daha az iddialı (Motor: +0.3).' },
      ],
    },
    '4b': {
      text: '4...dxc4: Siyah c4’ü alır; Slav’ın ana hattı.',
      amac: 'Piyonu alıp ...b5 ile tutmayı tehdit etmek; Beyazı a4 gibi bir zayıflatıcı hamleye zorlamak ve fili f5’e çıkarmak için zaman kazanmak.',
      neden: '4...dxc4 Slav’ın en çok oynanan ve en çok çalışılmış devamıdır (Motor: +0.25, en iyisi). 4...e6 Yarı-Slav’a, 4...a6 Çebanenko sistemine gider.',
      diger: [
        { move: '4...e6', text: 'Yarı-Slav; Meran ve Moskova varyantları gibi keskin yapılara gider (Motor: +0.35).' },
        { move: '4...a6', text: 'Çebanenko fikri: ...b5 ile kanatta yer kazanmak (Motor: +0.4).' },
      ],
    },
    '5w': {
      text: '5.a4: Beyaz ...b5’i engeller.',
      amac: 'Piyonu geri alabilmek için ...b5 ile c4’ün korunmasını önlemek; ardından e3/e4 ve Bxc4.',
      neden: 'Wikipedia’daki Slav maddesinin özetlediği gibi 5.a4 ...b5’e karşı oynanır ve 6.e4 ile 7.Bxc4’ü hazırlar. Bedeli b4 karesinin kalıcı zayıflığıdır; Siyah fili ileride oraya oturabilir. 5.e4 b5 ise Geller gambitine gider.',
      diger: [
        { move: '5.e4', text: '5...b5 ile Geller gambiti; Beyaz piyonu verip merkezde ve gelişimde öne geçer (Motor: 0.0).' },
        { move: '5.e3', text: '5...b5 ile Alapin varyantı; Siyah piyonu tutmaya çalışır.' },
      ],
    },
    '5b': {
      text: '5...Bf5: Çek varyantı. Fil e6 oynanmadan önce f5’e çıkar.',
      amac: 'c8 filini piyon zincirinin dışına çıkarmak ve e4 karesine bakarak 6.e4’ü önlemek.',
      neden: 'Slav’ın ana fikri tam budur: fil önce dışarı, sonra e6. 5...e6 (+0.5) 6.e4 ile merkezi Beyaza bırakır; 5...Bg4 (Steiner) ve 5...Na6 (Smislov) diğer seçeneklerdir.',
      diger: [
        { move: '5...e6', text: '6.e4 Bb4 sonrası Beyaz merkezde rahatça yer kaplar (Motor: +0.5).' },
        { move: '5...Bg4', text: 'Steiner fikri; f3 atını bağlar ama e4’ü engellemez.' },
        { move: '5...Na6', text: 'Smislov sistemi: at b4’e gidip a4’ün zayıflattığı kareyi kullanır.' },
      ],
    },
    '6w': {
      text: '6.e3: Hollanda sistemi. Beyaz c4’ü filiyle geri almaya hazırlanır.',
      amac: 'Sağlam bir yapıyla piyonu geri almak, rok yapmak ve e4’ü daha sonra Qe2 desteğiyle oynamak.',
      neden: '6.Ne5 (Krause saldırısı) 1935 maçında iki tarafın da oynadığı keskin devamdı. Chess.com’daki Euwe ve Slav yazısına göre rövanşta Beyaz üstünlük aramak için 6.e3’e geçti. Motor iki hamleyi eşit görüyor (+0.25).',
      diger: [
        { move: '6.Ne5', text: 'Krause saldırısı: Nxc4 ya da f3 ve e4 fikri; daha keskin (Motor: +0.25).' },
        { move: '6.Nh4', text: 'Fili kovalayan yan hat; Siyah 6...Bc8 ya da ...e6 ile karşılar (Motor: +0.1).' },
      ],
    },
    '6b': {
      text: '6...e6: Siyah piyon yapısını kurar ve f8 filinin yolunu açar.',
      amac: 'Sağlam c6-e6 yapısı; f8 filini b4 veya d6’ya geliştirip rok yapmak.',
      neden: 'Fil artık f5’te olduğu için e6 onu kapatmıyor. 6...Nbd7 (+0.3) aynı yapıya gider; 6...Bg6?! 7.Ne5 ile fili alma fikri verir.',
      diger: [
        { move: '6...Nbd7', text: 'Aynı kuruluşa başka bir sırayla gider (Motor: +0.3).' },
        { move: '6...Na6', text: 'At b4’e yönelir; a4 hamlesinin zayıflattığı kareyi kullanır.' },
      ],
    },
    '7w': {
      text: '7.Bxc4: piyon geri alınır; fil c4’te a2-g8 çaprazında aktif.',
      amac: 'Malzeme dengesini kurmak ve hızla rok yapmak.',
      neden: 'Hollanda sisteminin amacı budur; başka bir hamle piyonu geri almayı geciktirir. Motor 7.Bxc4’ü en iyi buluyor (+0.3).',
      diger: [
        { move: '7.Nh4', text: 'Önce fili kovalamak; c4 piyonu bekleyebilir (Motor: +0.2).' },
        { move: '7.Ne5', text: 'Nxc4 fikri; daha az doğal (Motor: +0.2).' },
      ],
    },
    '7b': {
      text: '7...Nbd7: at d7’ye gelişir.',
      amac: '...Ne4, ...Nb6 veya ...e5 gibi fikirleri hazır tutmak; e5 karesini kontrol etmek.',
      neden: 'Teorinin ana yolu 7...Bb4 (Motor: +0.3) ile filin önce b4’e çıkmasıdır; Wikipedia’nın özetlediği hat 7...Bb4 8.O-O O-O ile sakin bir oyundur. 7...Nbd7 de aynı değerdedir ve fil kararını erteler.',
      diger: [
        { move: '7...Bb4', text: 'Ana hat; fil b4 karesine oturur ve c3 atını bağlar (Motor: +0.3).' },
        { move: '7...h6', text: 'Filin geri çekileceği h7 karesini hazırlar (Motor: +0.3).' },
      ],
    },
    '8w': {
      text: '8.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini oyuna sokmak.',
      neden: 'Merkez hâlâ kapalıyken rok en doğal hamledir. 8.Nh4 (+0.3) fili hemen sorgular, 8.Qe2 rok öncesi e4’ü hazırlar.',
      diger: [
        { move: '8.Nh4', text: 'f5 filine saldırır; Siyah 8...Bg4 ya da ...Bg6 ile karşılar (Motor: +0.3).' },
        { move: '8.Qe2', text: 'e4’ü hemen hazırlar; rok sonra (Motor: +0.3).' },
      ],
    },
    '8b': {
      text: '8...Bd6: fil d6’ya gelir ve b8-h2 çaprazından h2’ye bakar.',
      amac: 'Fili şaha yönelik bir çapraza koymak ve e5 karesini kontrol etmek; ...Ne4 ile birlikte şah kanadında oyun.',
      neden: 'Alekhine teorinin 8...Bb4’ünden ayrıldı. Motor 8...Bd6’yı biraz zayıf buluyor (+0.7’ye karşı 8...Bb4 +0.3): fil d6’da Beyazın e4-e5 ilerleyişine tempo verir. Alekhine pratik şansları ve daha dinamik bir yapıyı tercih etti.',
      diger: [
        { move: '8...Bb4', text: 'Ana hat; c3 atını bağlar ve e4’ü zorlaştırır (Motor: +0.3).' },
        { move: '8...Bg6', text: 'Fili Nh4 saldırısından önce emniyete alır (Motor: +0.3).' },
      ],
    },
    '9w': {
      text: '9.Qe2: vezir e2’de e4 ilerleyişini destekler.',
      amac: 'e4’ü hazırlamak; Rd1 ile d-hattını desteklemek.',
      neden: 'Hollanda sisteminde Beyazın tipik kurulumu Qe2 ve e4’tür. 9.Re1 (+0.7) aynı fikri kaleyle uygular; 9.Nh4 (+0.3) filin peşine düşer.',
      diger: [
        { move: '9.Re1', text: 'e4’ü kaleyle destekler (Motor: +0.7).' },
        { move: '9.Nh4', text: 'Fili alma fikri; Siyah ...Bg6 ile karşılar (Motor: +0.3).' },
      ],
    },
    '9b': {
      text: '9...Ne4: at merkeze atlar ve c3 atına bakar.',
      amac: 'Taş değiştirerek Beyazın e4 ilerleyişini yavaşlatmak ve merkezdeki baskıyı azaltmak.',
      neden: 'Beyaz e4 oynamak üzere; ...Ne4 bu karede oturup değişimi zorlar. Motor 9...Bg6’yı (+0.6) biraz daha iyi buluyor, ama fark küçük (+0.8).',
      diger: [
        { move: '9...Bg6', text: 'Fili önceden g6’ya çeker; e4’e hazır olur (Motor: +0.6).' },
        { move: '9...Nb6', text: 'c4 filine saldırır, d5 karesine yönelir (Motor: +0.7).' },
      ],
    },
    '10w': {
      text: '10.Nxe4: Beyaz atları değişir.',
      amac: 'e4 atını ortadan kaldırıp fili e4’e çekmek; sonra Nd2 ile fili tempoyla kovmak.',
      neden: 'Motor 10.Nd2’yi (+0.7) biraz daha iyi buluyor: değişimi Siyaha bırakır. Euwe 10.Nxe4 ile basit bir yapıya girdi (+0.5).',
      diger: [
        { move: '10.Nd2', text: 'Değişimi zorlamadan e4’ü hazırlar; 10...Ndf6 11.f3 (Motor: +0.7).' },
        { move: '10.Bd3', text: 'e4 atına baskı; 10...Nxc3 11.bxc3 (Motor: +0.6).' },
      ],
    },
    '10b': {
      text: '10...Bxe4: fil geri alır; zorunlu.',
      amac: 'Malzemeyi eşitlemek ve fili merkezde tutmak.',
      neden: 'Başka her şey bir taş kaybettirir. 10...Bxh2+? 11.Nxh2 Bxe4 sonrası Beyaz bir taş fazladır (Motor: +5.0).',
      diger: [
        { move: '10...Bxh2+', text: '11.Nxh2 Bxe4 12.f3 ve fil tehdit altında; Siyah bir taş eksik kalır (Motor: +5.0).' },
      ],
    },
    '11w': {
      text: '11.Nd2: at e4 filine saldırır.',
      amac: 'Fili kovup e4’ü tempoyla oynamak.',
      neden: 'Plan basit: fil çekilince e4 oynanacak ve Beyaz merkezde iki piyon kuracak. Motor 11.Nd2’yi en iyi buluyor (+0.4).',
      diger: [
        { move: '11.a5', text: 'Kanat hamlesi; e4 bekler (Motor: +0.4).' },
        { move: '11.h3', text: 'Önleyici hamle; daha yavaş (Motor: +0.3).' },
      ],
    },
    '11b': {
      text: '11...Bg6: fil g6’ya çekilir.',
      amac: 'b1-h7 çaprazında kalarak e4’e baskıyı sürdürmek ve şahın önünü korumak.',
      neden: '11...Bd5 12.e4 Bxc4 13.Nxc4 sonrası Beyazın fil çifti ve merkezi kalır (+0.7). g6’da fil hem aktif hem güvendedir — en azından f4-f5 gelene kadar.',
      diger: [
        { move: '11...Bd5', text: '12.e4 Bxc4 13.Nxc4; Beyaz fil çiftine sahip (Motor: +0.7).' },
        { move: '11...Nf6', text: '12.Nxe4 Nxe4 13.Qd3; merkez Beyazın (Motor: +0.9).' },
      ],
    },
    '12w': {
      text: '12.e4: Beyaz merkezde d4 ve e4 piyonlarını kurdu.',
      amac: 'Merkezde üstünlük; ileride e5 ile d6 filini kovmak ya da f4-f5 ile şah kanadında oynamak.',
      neden: 'Bütün açılışın hedefi buydu ve en iyi hamle de budur (Motor: +0.4). Ama d4 piyonunu artık yalnızca dolaylı yollarla korumak gerekecek.',
      diger: [
        { move: '12.a5', text: 'Kanatta yer kazanır; e4 bekler (Motor: +0.3).' },
        { move: '12.h3', text: 'Sakin bir hazırlık hamlesi (Motor: +0.1).' },
      ],
    },
    '12b': {
      text: '12...Bc7: fil c7’ye çekilir.',
      amac: 'e5 ilerleyişine tempo vermemek ve fili b8-h2 çaprazında tutmak.',
      neden: 'd6’daki fil e4-e5 ile tempoyla kovalanabilirdi. c7’de aynı çaprazda kalır ve ileride ...Qxd4 sonrası g1-a7 çaprazındaki fikirleri destekler. Motor 12...Qc7 (+0.4), 12...Bc7 (+0.5) ve 12...Bb4’ü (+0.5) yakın görüyor.',
      diger: [
        { move: '12...Qc7', text: 'Vezir çaprazı destekler; 13.h4 h6 14.h5 (Motor: +0.4).' },
        { move: '12...Bb4', text: 'Fil d2 atına baskı yapar; 13.Nb3 O-O 14.a5 (Motor: +0.5).' },
      ],
    },
    '13w': {
      text: '13.Bb3: fil b3’e çekilir ve a2-g8 çaprazını tutar.',
      amac: 'Fili ...Nb6 ya da ...e5 saldırılarından önce güvenli bir kareye almak; g8’deki şahın çaprazına bakmak.',
      neden: 'Motor burada 13.Nb3’ü öneriyor (+0.6): at d4’ü korur, a5 ve c5’e bakar. Euwe atı d2’de bıraktı (+0.1); bu, d4’ün bir hamle sonra savunmasız kalmasının hazırlığı oldu.',
      diger: [
        { move: '13.Nb3', text: 'd4’ü korur; 13...O-O 14.a5 b5 15.Bd3 e5 (Motor: +0.6).' },
        { move: '13.Bd3', text: 'Fil b1-h7 çaprazına; 13...e5 14.d5 (Motor: +0.2).' },
      ],
    },
    '13b': {
      text: '13...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini oyuna sokmak.',
      neden: 'Merkez açılmak üzere ve şahın e8’de kalması tehlikeli. Motor 13...Nf6 (+0.2) ile rokun (+0.2) eşit olduğunu söylüyor.',
      diger: [
        { move: '13...Nf6', text: 'Önce e4’e saldırır; 14.e5 Nd5 15.Ne4 (Motor: +0.2).' },
        { move: '13...Qf6', text: 'Vezir şah kanadına; 14.e5 Qf4 (Motor: +0.3).' },
      ],
    },
    '14w': {
      text: '14.f4? Beyaz f-piyonunu iki kare ilerletir; f5 ilerleyişini hazırlar.',
      amac: 'f5 ile e6 piyonunu ve g6 filini sıkıştırmak; şah kanadında saldırı.',
      neden: 'Euwe merkezini şah kanadı saldırısıyla desteklemek istedi. Ama f4 g1-a7 çaprazını açar ve d4’ü koruyan hiçbir taş yoktur: 14...Nf6 d-hattını açınca 15...Qxd4+ şahla gelir. Motor: 14.f4 −1.0; 14.Bc2 +0.2.',
      diger: [
        { move: '14.Bc2', text: 'e4’ü korur ve sakin oynar; 14...c5 15.dxc5 Nxc5 16.Nc4 (Motor: +0.2).' },
        { move: '14.Nf3', text: 'At d4’ü korur; 14...h6 15.Bc2 (Motor: 0.0).' },
        { move: '14.Ra3', text: 'Kaleyi üçüncü yatayda oyuna sokar (Motor: 0.0).' },
      ],
    },
    '14b': {
      text: '14...Nf6!: at f6’ya gider, e4’e saldırır ve d-hattını açar.',
      amac: 'd8 vezirinin d4’ü görmesini sağlamak; e4’ü ikinci kez (Nf6 ve Bg6) tehdit etmek.',
      neden: 'Bu tek kesin hamledir: Beyaz hem e4’ü hem d4’ü koruyamaz. 14...Re8 15.Bc2 ile Beyaz tutunur (0.0). Motor: 14...Nf6 −1.0.',
      diger: [
        { move: '14...Re8', text: '15.Bc2 Bb6 16.Nf3; Beyaz merkezi tutar (Motor: 0.0).' },
        { move: '14...h6', text: 'Fil için h7 karesini açar; 15.Bc2 f5 16.e5 (Motor: +0.2).' },
      ],
    },
    '15w': {
      text: '15.Bc2: fil e4’ü korur.',
      amac: 'En azından e4’ü tutmak; d4’ün kaybını kabullenmek.',
      neden: 'd4’ü kurtarmanın iyi bir yolu yok. 15.Kh1 (−0.8) şahı önceden köşeye çeker, ama aynı piyon yine düşer. 15.Qd3? Bb6 ile çok daha kötü (−1.7).',
      diger: [
        { move: '15.Kh1', text: 'Şahı önceden köşeye çeker; 15...Qxd4 16.Bc2 Qb4 (Motor: −0.8).' },
        { move: '15.Qd3', text: '15...Bb6 16.Kh1 Qxd4 17.Qxd4 Bxd4; Siyah bir piyon fazla ve vezirsiz oyun (Motor: −1.7).' },
      ],
    },
    '15b': {
      text: '15...Qxd4+!: vezir d4’ü şahla alır.',
      amac: 'Temiz bir piyon kazanmak ve vezirle g1-a7 çaprazını kontrol etmek.',
      neden: 'Şah çekmesi önemli: Beyaz bu piyon karşılığında tempo kazanamaz. 15...c5 (−0.3) daha yavaştır ve Beyaza toparlanma zamanı verir. Motor: −1.0.',
      diger: [
        { move: '15...c5', text: '16.dxc5 Qd4+ 17.Kh1 Qxc5; piyon dengesi kurulur (Motor: −0.3).' },
        { move: '15...Bb6', text: 'Önce çaprazı güçlendirir; Beyaz 16.g4 ile karşılık verir (Motor: −0.1).' },
      ],
    },
    '16w': {
      text: '16.Kh1: şah köşeye gider; tek iyi hamle.',
      amac: 'Şahı çaprazdan çıkarmak ve araya taş koymaktan doğan bağlamalardan kaçınmak.',
      neden: '16.Rf2? Bb6 kaleyi şaha bağlar ve kazanır (−3.1); 16.Qf2 Qxf2+ 17.Rxf2 Ng4 çatalı kalite kaybettirir (−3.7). Motor: 16.Kh1 −1.0.',
      diger: [
        { move: '16.Rf2', text: '16...Bb6 17.a5 Qxf2+ 18.Qxf2 Bxf2+; Siyah kalite ve piyon fazla (Motor: −3.1).' },
        { move: '16.Qf2', text: '16...Qxf2+ 17.Rxf2 Ng4 ile kale ve fil çatalı (Motor: −3.7).' },
      ],
    },
    '16b': {
      text: '16...Qb4: vezir b4’e çekilir; b2, a4 ve d2’ye bakar.',
      amac: 'Veziri güvenli ama aktif bir kareye koymak; Beyazın vezir kanadındaki piyonlarını hedeflemek.',
      neden: 'd4’te vezir Nf3 veya Nb3 ile tempoyla kovalanacaktı. Motor 16...Rfd8 (−1.1) ile 16...Qb4’ü (−1.0) eşit görüyor; 16...Qc5 biraz daha zayıf (−0.7).',
      diger: [
        { move: '16...Rfd8', text: 'Önce kale; 17.Nb3 Qb4 18.Bd2 (Motor: −1.1).' },
        { move: '16...Qc5', text: '17.Nb3 Qh5 18.Qxh5 Bxh5; vezirler değişir (Motor: −0.7).' },
      ],
    },
    '17w': {
      text: '17.g4: Beyaz şah kanadı piyonlarını ilerletir.',
      amac: 'f5 ile g6 filini kapana kıstırmak; fil h5 veya h7’ye kaçamasın.',
      neden: 'Piyon eksiği olan Beyaz karşı oyun arıyor. Ama g4 şahın önünü daha da açar. Motor 17.b3’ü (−0.8) biraz daha iyi buluyor; 17.g4 −1.2.',
      diger: [
        { move: '17.b3', text: 'b2’yi korur; 17...Qc5 18.Nc4 Qh5 (Motor: −0.8).' },
        { move: '17.a5', text: 'Kanatta yer kazanır; 17...Rad8 18.a6 (Motor: −1.1).' },
      ],
    },
    '17b': {
      text: '17...Rad8: a8 kalesi d-hattına gelir ve d2 atına baskı yapar.',
      amac: 'Taşları geliştirmek; f5 gelirse fili vermeye ve açılan hatlardan yararlanmaya hazırlanmak.',
      neden: 'Motor 17...Qc5’i öneriyor (−1.2): vezir g1-a7 çaprazına döner. Alekhine ise 18.f5’e izin verdi; Chess.com’daki "A Century of Chess" yazısı oyundaki fedanın 17. hamlede geldiğini yazıyor. Motor: 17...Rad8 −0.4.',
      diger: [
        { move: '17...Qc5', text: '18.Bb3 Rae8 19.Qg2 h6; Siyah piyon fazlasını korur (Motor: −1.2).' },
        { move: '17...Rfe8', text: '18.Qg2 h5 19.f5 Bh7; fil kurtulur (Motor: −0.7).' },
      ],
    },
    '18w': {
      text: '18.f5: f-piyonu g6 filine saldırır.',
      amac: 'Fili kazanmak ya da e-hattını açmak.',
      neden: 'Planın mantıklı devamı ve en iyi hamle (Motor: −0.2). 18.g5 Bh5 sonrası fil kurtulur (−0.9).',
      diger: [
        { move: '18.g5', text: '18...Bh5 19.Qg2 Nd7; fil kurtulur (Motor: −0.9).' },
        { move: '18.Ra3', text: '18...Nxg4; Siyah piyon toplamaya devam eder (Motor: −0.9).' },
      ],
    },
    '18b': {
      text: '18...exf5: Siyah alır ve e-hattını açar.',
      amac: 'Fil düşerse karşılığında piyon ve açık hat almak.',
      neden: 'Tek hamle. 18...Nd7 19.Nb3 ya da 18...h6 19.fxg6 sonrası Siyah karşılık alamadan taş kaybeder (Motor: +2.2). 18...exf5 ile denge (+0.1).',
      diger: [
        { move: '18...Nd7', text: '19.Nb3 Ne5 20.fxg6; Siyah taş eksiğiyle kalır (Motor: +2.2).' },
        { move: '18...h6', text: '19.fxg6 fxg6 20.Ra3; Beyaz bir taş fazla (Motor: +2.2).' },
      ],
    },
    '19w': {
      text: '19.exf5: Beyaz e-piyonuyla geri alır; fil hâlâ tehdit altında.',
      amac: 'g6 filine baskıyı sürdürmek.',
      neden: '19.gxf5 Bh5 ile fil kaçar ve Beyazın veziri saldırı altına girer (−1.3). 19.Nc4? fxe4 ile çok kötü (−4.2).',
      diger: [
        { move: '19.gxf5', text: '19...Bh5 20.Qg2 Kh8; fil kurtulur (Motor: −1.3).' },
        { move: '19.Nc4', text: '19...fxe4; Siyah merkezi alır (Motor: −4.2).' },
      ],
    },
    '19b': {
      text: '19...Rfe8: kale e8’e gelir ve e2 vezirine tempoyla saldırır.',
      amac: 'Veziri e-hattından kovmak; e-hattını Siyah kalelerine vermek.',
      neden: 'Fil kurtarılamayacağına göre en önemli şey tempo. 19...Bxf5 20.Bxf5 ile Siyahın karşılığı daha az (+0.6). Motor: 19...Rfe8 +0.1.',
      diger: [
        { move: '19...Bxf5', text: '20.Bxf5 Rfe8 21.Qc4; Beyaz bir taş fazla (Motor: +0.6).' },
        { move: '19...Rde8', text: '20.Qc4 Qd6 21.Nf3 Nxg4; benzer fikirler (Motor: +0.2).' },
      ],
    },
    '20w': {
      text: '20.Qg2: vezir g2’ye çekilir ve g4’ü korur; tek iyi hamle.',
      amac: 'g4 piyonunu tutmak ve şah kanadını savunmak.',
      neden: '20.Qc4 Qxc4 21.Nxc4 Re2 ile Siyah kale ikinci yataya girer (−0.6); 20.Qf3? Qxg4 ile daha kötü (−1.3). Motor: 20.Qg2 +0.1.',
      diger: [
        { move: '20.Qc4', text: '20...Qxc4 21.Nxc4 Re2 22.Bd1; Siyah kalesi aktif (Motor: −0.6).' },
        { move: '20.Qf3', text: '20...Qxg4 21.fxg6 Re2; Siyah büyük karşı oyun alır (Motor: −1.3).' },
      ],
    },
    '20b': {
      text: '20...Qxg4!: Siyah g4 piyonunu alır.',
      amac: 'Fili karşılığında üçüncü piyonu almak ve vezirleri değiştirmek.',
      neden: '21.Qxg4? Nxg4 22.fxg6 Re2 sonrası Siyah kazanır (−2.5), bu yüzden vezir alamaz. Motor 20...Bf4 ve 20...Nxg4’ü de 0.0 görüyor; 20...Qxg4 +0.2.',
      diger: [
        { move: '20...Bf4', text: '21.Nf3 Bxc1 22.fxg6 hxg6 23.Raxc1 Nxg4; denge (Motor: 0.0).' },
        { move: '20...Nxg4', text: '21.fxg6 hxg6 22.Nf3; denge (Motor: 0.0).' },
      ],
    },
    '21w': {
      text: '21.fxg6: Beyaz fili alır; zorunlu.',
      amac: 'Taş fazlasını almak.',
      neden: '21.Qxg4? Nxg4 22.fxg6 Re2 Siyahı kazanırken bırakır (−2.5). Motor: 21.fxg6 +0.1.',
      diger: [
        { move: '21.Qxg4', text: '21...Nxg4 22.fxg6 Re2 23.gxf7+ Kf8; Siyah kazanır (Motor: −2.5).' },
      ],
    },
    '21b': {
      text: '21...hxg6: h-piyonuyla geri alınır.',
      amac: 'Malzemeyi tamamlamak: bir taş karşılığında üç piyon.',
      neden: '21...Qxg2+ 22.Kxg2 Re2+ (+0.2) da mümkündü. Alekhine önce piyon yapısını düzeltti ve f7’yi korudu. Motor: +0.3.',
      diger: [
        { move: '21...Qxg2+', text: '22.Kxg2 Re2+ 23.Rf2 Rxf2+ 24.Kxf2 Ng4+; benzer konum (Motor: +0.2).' },
        { move: '21...Re2', text: '22.gxf7+ Kf8 23.Rf2; karmaşık (Motor: +0.4).' },
      ],
    },
    '22w': {
      text: '22.Bd1: fil d1’e gelir ve g4’teki vezire saldırır.',
      amac: 'Vezir değişimini zorlamak ve e2 karesini korumak.',
      neden: 'Beyaz taş fazlasıyla vezirsiz oyunda daha rahat olacaktır. 22.Qxg4 ve 22.Bb3 eşittir (0.0); 22.Bd1 +0.3.',
      diger: [
        { move: '22.Qxg4', text: '22...Nxg4 23.Bb3 Re2; Siyah kalesi aktif (Motor: 0.0).' },
        { move: '22.Bb3', text: '22...Qxg2+ 23.Kxg2 Re2+; benzer (Motor: 0.0).' },
      ],
    },
    '22b': {
      text: '22...Qxg2+: vezirler değişir.',
      amac: 'Beyaz şahını vezir değişimi sonrası açıkta bırakmak; kaleleri aktif oyuna sokmak.',
      neden: 'Motor 22...Qb4’ü (0.0) biraz daha iyi buluyor; vezirleri tutmak Beyaz şahına baskıyı sürdürür. Alekhine kale oyun sonunu seçti (+0.4).',
      diger: [
        { move: '22...Qb4', text: '23.Ra3 Bf4 24.Rb3 Qd4; vezirler tahtada kalır (Motor: 0.0).' },
        { move: '22...Qd7', text: '23.Bb3 Re3 24.Ra3; denge (Motor: +0.4).' },
      ],
    },
    '23w': {
      text: '23.Kxg2: şah veziri geri alır; zorunlu.',
      amac: 'Malzemeyi eşitlemek: Beyaz bir taş fazla, Siyah üç piyon fazla.',
      neden: 'Şah çekmeden kurtulmanın tek yolu vezir almaktır; başka yasal hamle yok. Bundan sonra şah g2’de yarı açık: g- ve h-hatlarındaki piyonlar gitti, sadece h2 kaldı.',
    },
    '23b': {
      text: '23...Rd4: d8 kalesi d4’e yükselir; d2 atına, a4 piyonuna ve g4 karesine bakar.',
      amac: 'Kaleyi dördüncü yatayda etkinleştirip Beyazın gelişimini (Nf3, c1 filinin çıkışı) zorlaştırmak; ...Rg4+ fikrini hazırlamak.',
      neden: 'Taş eksiği olan taraf zaman kaybedemez; kaleler hemen çalışmalı. Ama motor 23...g5’i (+0.2) daha iyi buluyor: piyon g4’e kadar ilerleyip f3 ve h3 karelerini alır, beyaz şahı kısıtlar ve piyon kütlesini harekete geçirir. 23...Rd4 sonrası Nf3 tempoyla gelir (+0.7).',
      diger: [
        { move: '23...g5', text: '24.Nf3 g4 25.Nh4 Rxd1 26.Rxd1 Re2+; piyon ilerleyişi ve kale şahı birlikte çalışır (Motor: +0.2).' },
        { move: '23...Nd5', text: '24.Nf3 Bf4 25.Bxf4 Nxf4+ 26.Kg3; at f4’te güçlü ama Beyaz fil çiftini kaybetmeden toparlanır (Motor: +0.4).' },
      ],
    },
    '24w': {
      text: '24.Nf3: at f3’e gelişir, d4 kalesine saldırır ve c1 filinin yolunu açar.',
      amac: 'Gelişimi tamamlamak; d2’deki atı pasif konumundan çıkarıp şah kanadını savunmaya getirmek.',
      neden: 'Taş fazlası olan taraf önce bütün taşlarını oyuna sokmalıdır; at d2’de hem c1 filini hem d-hattını kapatıyordu. Motor en iyi hamle olarak bunu gösteriyor (+0.7). 24.Nb3 atı kanatta bırakır, 24.a5 gelişimi geciktirir.',
      diger: [
        { move: '24.Nb3', text: '24...Rb4 25.a5 Nd5; at kanatta kalır, şah kanadı savunmasız (Motor: +0.2).' },
        { move: '24.a5', text: '24...Red8 25.Rf2 Ng4 26.Re2; Siyah kaleleri aktif (Motor: +0.1).' },
      ],
    },
    '24b': {
      text: '24...Rg4+: kale g-hattında şah çeker.',
      amac: 'Beyaz şahını ya köşeye ya da açık h3 karesine zorlamak; kaleyi şahın yakınında tutmak.',
      neden: 'Alekhine şahı huzursuz etmeyi seçti. g4’teki kale f6 atıyla korunuyor, bu yüzden Kh3 ile kovalansa da düşmez. Motor sakin 24...Rb4’ü (+0.7) biraz daha iyi buluyor; maç hamlesi +1.1. Pratikte bu şah, Beyazın şahı h3’e götürmesine yol açtı ve oyunun sonundaki kombinasyonun zemini oldu.',
      diger: [
        { move: '24...Rb4', text: '25.Re1 Rxe1 26.Nxe1 g5; Siyah b2’ye baskı yapar ve piyonlarını ilerletir (Motor: +0.7).' },
        { move: '24...Rde4', text: '25.Ng5 Rd4 26.a5; kaleler merkezde aktif kalır (Motor: +0.7).' },
      ],
    },
    '25w': {
      text: '25.Kh3: şah h3’e gider ve g4 kalesine saldırır.',
      amac: 'Kaleyi tempoyla kovmak; şahı oyun sonu taşı olarak aktif kullanmak.',
      neden: 'Oyun sonunda şahın etkin olması genelde doğrudur, ama burada tahtada dört kale ve iki küçük taş var; şah h3’te ...Rd3 gibi bağlamalara ve h-hattından şahlara açık. Motor 25.Kh1’i (+0.9) öneriyor: şah köşede güvende, Beyaz taş fazlasını sakin oynayabilir. 25.Kf2? Bb6+ 26.Nd4 Bxd4+ ile taş kaybettirir (−5.2).',
      diger: [
        { move: '25.Kh1', text: '25...Bd6 26.a5 a6 27.Bd2; şah güvende, Beyaz biraz üstün (Motor: +0.9).' },
        { move: '25.Kf2', text: '25...Bb6+ 26.Nd4 Bxd4+ 27.Kf3; Siyah taşı geri kazanır ve üç piyon fazla kalır (Motor: −5.2).' },
      ],
    },
    '25b': {
      text: '25...Rd8: e8 kalesi d-hattına geçer ve d1 filine bakar.',
      amac: 'd-hattını kontrol etmek, d1 filini ve dolayısıyla f1 kalesini bağlı tutmak; kalenin d2/d3’e girmesini hazırlamak.',
      neden: 'g4 kalesi Kh3 ile saldırı altında ama f6 atı onu koruyor, bu yüzden Siyah kaleyi çekmek zorunda değil; zamanını diğer kaleyi açık hatta getirmek için kullanır. Motor en iyi hamle olarak bunu gösteriyor (+0.5); 25...Rge4 (+0.6) neredeyse aynı.',
      diger: [
        { move: '25...Rge4', text: '26.Ng5 Rd4 27.Ra3 Nd5; kaleler merkezde, at f4’e yönelir (Motor: +0.6).' },
        { move: '25...Rc4', text: '26.Bd2 Nd5 27.Ra3 Nf4+; at şah çekerek etkinleşir (Motor: +0.7).' },
      ],
    },
    '26w': {
      text: '26.Bg5: fil g5’e çıkar; f6 atına baskı yapar ve g-hattını keser.',
      amac: 'Kaleyi g4’ten kovmak ve f6 atını değiştirmeyi tehdit edip g4 kalesinin korumasını sorgulamak.',
      neden: 'Fil Nf3 ile korunuyor; g4 kalesi onu alırsa 27.Nxg5 ile kalite verir. Motor 26.Bb3’ü (+0.4) biraz daha iyi buluyor: fil f7’ye bakar ve e2 karesini d1’deki diğer fil korumaya devam eder. 26.Bg5 sonrası Beyaz hâlâ biraz üstün (+0.2).',
      diger: [
        { move: '26.Bb3', text: '26...Re8 27.a5 Rb4 28.Ra3; Beyazın taşları uyumlu (Motor: +0.4).' },
        { move: '26.Ng5', text: '26...Rd3+ 27.Bf3 a5 28.Rf2; denge (Motor: 0.0).' },
      ],
    },
    '26b': {
      text: '26...Rb4: kale g4’ten b4’e geçer ve b2 piyonuna saldırır.',
      amac: 'Saldırıdan kurtulurken bir hedef bulmak; kaleyi Beyazın vezir kanadına sokmak ve dördüncü piyonu almayı tehdit etmek.',
      neden: 'Motor 26...Rxg5’i (+0.1) en iyi buluyor: 27.Nxg5 Rd2 sonrası kalite eksiğine rağmen Siyah kalesi ikinci yatayda çok etkin olur. Alekhine malzemeyi korumayı seçti (+0.4); b2 piyonunu tehdit etmek de Beyazı pasif bir savunmaya itti.',
      diger: [
        { move: '26...Rxg5', text: '27.Nxg5 Rd2 28.Rh1 Nd5; kalite verip ikinci yatayda aktif kale (Motor: +0.1).' },
        { move: '26...Re4', text: '27.Ra3 Bf4 28.Bb3; Siyah daha pasif kalır (Motor: +0.7).' },
      ],
    },
    '27w': {
      text: '27.Bd2: fil d2’ye çekilip b4 kalesine saldırır.',
      amac: 'b2 piyonunu dolaylı savunmak ve kaleyi kovmak; filleri Bc3 ile uzun çapraza hazırlamak.',
      neden: 'En iyi hamle (Motor: +0.5). Fil d2’de bir yandan d8 kalesinin hattında durur, bu da ileride ...Re2 ile ikili saldırıya kapı açacak. 27.Rb1 ve 27.Kg2 ise b2’yi teslim etmeye yakındır (+0.2).',
      diger: [
        { move: '27.Rb1', text: '27...Rd5 28.Re1 Ne4 29.Be7; denge (Motor: +0.2).' },
        { move: '27.Kg2', text: '27...Rxb2+ 28.Kh1 Rd3 29.Bc1; Siyah dördüncü piyonu alır (Motor: +0.2).' },
      ],
    },
    '27b': {
      text: '27...Re4: kale e4’e geçer ve e-hattını tutar.',
      amac: 'Kaleyi e2’ye girmeye hazır tutmak; Bd1’in e2’yi korumayı bırakmasını beklemek.',
      neden: 'Motor 27...Rxb2’yi (+0.3) biraz daha iyi buluyor: dördüncü piyon alınır ama 28.Bc3 kaleyi kovalar. Alekhine kalesini merkezde, e2 karesinin hemen önünde tuttu (+0.4); bir hamle sonra bu konumlanma karşılığını aldı.',
      diger: [
        { move: '27...Rxb2', text: '28.Bc3 Rb6 29.Ba5 g5; Siyah dördüncü piyonu alır (Motor: +0.3).' },
        { move: '27...Rg4', text: '28.Bc3 Re4 29.Bb3; zaman kaybı (Motor: +0.6).' },
      ],
    },
    '28w': {
      text: '28.Bb3?: fil d1’den b3’e gider.',
      amac: 'Fili a2-g8 çaprazına sokup f7’ye baskı yapmak; d1-d8 hattındaki bağlamadan kurtulmak.',
      neden: 'Oyunun kaybettiren hatası: d1 fili e2 karesini koruyordu. Şimdi 28...Re2! d2 filine (d8 kalesiyle birlikte) ve h2 piyonuna saldırır; Bd2 yalnızca Nf3 ile korunuyor. Motor: 28.Kg2 +0.5 (şah h2’yi korur ve bağlamalardan uzaklaşır); maç hamlesinden sonra −2.9.',
      diger: [
        { move: '28.Kg2', text: '28...Bf4 29.Bxf4 Rxf4 30.Bc2; şah güvende, Beyaz biraz üstün (Motor: +0.5).' },
        { move: '28.Ra3', text: '28...Bf4 29.Bxf4 Rxf4 30.Re1; kale üçüncü yatayı tutar (Motor: +0.3).' },
        { move: '28.a5', text: '28...a6 29.Kg2 Ng4 30.Bc1; denge (Motor: +0.2).' },
      ],
    },
    '28b': {
      text: '28...Re2!: kale ikinci yataya girer.',
      amac: 'd2 filine iki taşla (Re2 ve Rd8) saldırmak ve h2 piyonunu tehdit etmek.',
      neden: 'e2 karesi açılır açılmaz kale girer; d2 fili iki kez saldırı altında, bir kez korunuyor. 28...Rd3 29.Bd1 ile Beyaz kareyi yeniden kapatır (−0.3); 28...Rxd2 29.Nxd2 Re2 ise yalnızca küçük bir üstünlük verir (−0.3). Motor: 28...Re2 −2.9.',
      diger: [
        { move: '28...Rd3', text: '29.Bd1 Red4 30.Bc3; Beyaz e2’yi yeniden kapatır (Motor: −0.3).' },
        { move: '28...Rxd2', text: '29.Nxd2 Re2 30.Nf3 g5; Siyah biraz üstün (Motor: −0.3).' },
      ],
    },
    '29w': {
      text: '29.Bc3: fil saldırıdan c3’e kaçar.',
      amac: 'Fili kurtarmak ve uzun çaprazda f6 atına baskı yapmak.',
      neden: 'Fil kurtuldu ama d-hattı ve üçüncü yatay Siyah kalesine açıldı. Motor 29.Rad1’i (−3.0) öneriyor: kale d-hattını kapatır, Siyah yine üstün ama oyun sürer. 29.Bc3 sonrası 29...Rd3! kazanır (−4.4).',
      diger: [
        { move: '29.Rad1', text: '29...Rd3 30.Bf4 Rxb3 31.Bxc7; Siyah piyon fazlasıyla üstün (Motor: −3.0).' },
        { move: '29.Be1', text: '29...Rd3 30.Bxf7+ Kxf7 31.Bg3; Siyah üstün (Motor: −3.7).' },
      ],
    },
    '29b': {
      text: '29...Rd3!: kale üçüncü yatayda f3 atını h3’teki şaha bağlar.',
      amac: 'Atı kazanmak ya da onun korumasını kaldırıp Rxh2 ile şah çekmek.',
      neden: 'Tek kazanan hamle (Motor: −5.4). Bağlı at hem d3 kalesi hem de ileride Rxf3 ile tehdit altında; e2 kalesi de h2’yi hedefliyor. Doğal 29...g5 30.Bxf6 gxf6 sonrası Siyah yalnızca biraz üstün (−0.7); 29...Nd5 eşitlik (0.0).',
      diger: [
        { move: '29...g5', text: '30.Bxf6 gxf6 31.Rae1 Rxb2; Siyah biraz üstün (Motor: −0.7).' },
        { move: '29...Nd5', text: '30.Rad1 Nf4+ 31.Kh4 Ng2+; denge (Motor: 0.0).' },
      ],
    },
    '30w': {
      text: '30.Kh4: şah bağlamadan çıkmak için h4’e gider.',
      amac: 'Atı bağlamadan kurtarmak.',
      neden: 'Beyazın iyi bir seçeneği yok: 30.Bxf6 gxf6 31.Be6 Rxe6 (−5.9) ve 30.Be5 Bxe5 (−8.2) daha da kötü. Kh4 bağlamayı kaldırır ama şahı tahtanın kenarında, g5 ve h-hattı şahlarına açık bırakır. Motor: −5.6.',
      diger: [
        { move: '30.Bxf6', text: '30...gxf6 31.Be6 Rxe6 32.Kg2; Siyah kalite ve piyon fazla (Motor: −5.9).' },
        { move: '30.Be5', text: '30...Bxe5 31.Kh4 Rxb3; Siyah kazanır (Motor: −8.2).' },
      ],
    },
    '30b': {
      text: '30...Rxf3!: kale atı alır.',
      amac: 'h2’yi ve g5 karesini koruyabilecek atı ortadan kaldırmak; ardından Rxh2+ ile şahı köşeye sıkıştırmak.',
      neden: 'Kalite verilir ama karşılığında beyaz şah tamamen çıplak kalır. Motor 30...Re4+’ı (−5.6) aynı güçte buluyor: 31.Kh3 Re2 ile bağlama tekrarlanır. 30...g5+? 31.Kxg5 sonrası kazanç azalır (−3.6).',
      diger: [
        { move: '30...Re4+', text: '31.Kh3 Re2 32.Bxf6 gxf6; Siyah kazanır (Motor: −5.6).' },
        { move: '30...g5+', text: '31.Kxg5 Re4 32.Bxf6 gxf6+; daha az kesin (Motor: −3.6).' },
      ],
    },
    '31w': {
      text: '31.Rxf3: Beyaz kaleyi geri alır; zorunlu.',
      amac: 'Malzemeyi geri almak ve f-hattındaki kaleyi şahın savunmasına getirmek.',
      neden: 'Diğer hamleler matla biter: 31.Bxf7+ Kxf7 32.Rxf3 Rxh2+ ile 6 hamlede, 31.Be5 Re4+ 32.Bf4 Rexf4+ ile 3 hamlede mat. Kale alınması hem malzeme hem savunma için tek yol.',
      diger: [
        { move: '31.Bxf7+', text: '31...Kxf7 32.Rxf3 Rxh2+; Siyah 6 hamlede mat eder.' },
        { move: '31.Be5', text: '31...Re4+ 32.Bf4 Rexf4+ 33.Kg5; Siyah 3 hamlede mat eder.' },
      ],
    },
    '31b': {
      text: '31...Rxh2+!: kale h2’yi şahla alır.',
      amac: 'Şahı h-hattında sıkıştırmak; Beyazı kalesini h3’e koymaya zorlamak.',
      neden: 'Tek kazanan hamle (Motor: −5.5). Şimdi şahın kaçabileceği kareler sınırlı: g3’ü c7 fili, g4’ü f6 atı tutuyor. 31...Nd5 ya da 31...Kh7 gibi yavaş hamleler Beyaza üstünlük bırakır (+2.2), çünkü Beyaz bir kale fazladır.',
      diger: [
        { move: '31...Nd5', text: '32.Bxd5 cxd5 33.Rd3 Rxh2+; Beyaz malzeme fazlasıyla üstün (Motor: +2.2).' },
        { move: '31...Kh7', text: '32.Rh1 Kh6 33.Bxf6 gxf6; Beyaz üstün (Motor: +2.2).' },
      ],
    },
    '32w': {
      text: '32.Rh3: kale araya girer; tek hamle.',
      amac: 'Mattan kurtulmak.',
      neden: 'Şahın tek diğer karesi g5’tir ve 32.Kg5? Rh5# ile hemen mat olur. g3 (c7 fili) ve g4 (f6 atı) kontrol altında. Kale araya girer ama artık h2 kalesinin saldırısı altındadır.',
      diger: [
        { move: '32.Kg5', text: '32...Rh5# mat.' },
      ],
    },
    '32b': {
      text: '32...g5+!: piyon şah çeker.',
      amac: 'Şahı g5 karesine çekmek: burada ...Ne4+ ile at hem şaha hem c3 filine saldıracak.',
      neden: 'Tek kazanan hamle (Motor: −5.4). Şah piyonu almak zorunda (Kg4 kareyi f6 atı tutuyor); sonra Siyah h3 kalesini alır ve çatal kesinleşir. 32...Re2 33.Rhh1 ile Beyaz toparlanır (0.0); 32...Rg2 ise Beyaza üstünlük verir (+0.6).',
      diger: [
        { move: '32...Re2', text: '33.Rhh1 Re3 34.Rad1 g5+; Beyaz savunur (Motor: 0.0).' },
        { move: '32...Rg2', text: '33.Bxf6 gxf6 34.Rah1; Beyaz malzeme fazlasıyla (Motor: +0.6).' },
      ],
    },
    '33w': {
      text: '33.Kxg5: şah piyonu alır; zorunlu.',
      amac: 'Şahtan çıkmak.',
      neden: 'Tek yasal hamle: h4 şahı için g4 (f6 atı) ve g3 (c7 fili) kontrol altında, h5’e de g5 piyonu bakar. Şah artık atın çatal karesi olan g5’te.',
    },
    '33b': {
      text: '33...Rxh3: kale h3’ü alır.',
      amac: 'Kaleyi kazanmak ve ...Ne4+ çatalını hazırlamak.',
      neden: 'Malzeme artık Siyahın lehine: Beyazın kalesi gitti. Motor 33...Rg2+’yı aynı güçte buluyor (−5.8). Önce çatal 33...Ne4+? ise 34.Kf5 Rxh3 35.Kxe4 ile atı kaybettirir (+1.5); sıra önemli.',
      diger: [
        { move: '33...Rg2+', text: '34.Kf5 Rf2+ 35.Rf3 Rxf3+; Siyah kazanır (Motor: −5.8).' },
        { move: '33...Ne4+', text: '34.Kf5 Rxh3 35.Kxe4; Beyaz taş fazlasıyla üstün (Motor: +1.5).' },
      ],
    },
    '34w': {
      text: '34.Bd1: fil b3’ten d1’e çekilir.',
      amac: 'Fili g4-h5 karelerine bakan bir çapraza getirmek ve h-hattından şahlara karşı kare kontrolü sağlamak.',
      neden: 'Beyazın iyi bir savunması yok. 34.Bxf6 gxf6+ 35.Kxf6 Rxb3 (−5.5) de kaybeder; Bd1 ise c3 filini korumasız bırakır ve ...Ne4+ çatalına izin verir (−5.7).',
      diger: [
        { move: '34.Bxf6', text: '34...gxf6+ 35.Kxf6 Rxb3 36.Ke7; Siyah bir taş ve piyonlar fazla (Motor: −5.5).' },
        { move: '34.Bxf7+', text: '34...Kxf7 35.Bxf6 gxf6+ 36.Kg4; Siyah kazanır (Motor: −6.3).' },
      ],
    },
    '34b': {
      text: '34...Ne4+!: at şah çeker ve c3 filine saldırır.',
      amac: 'Çatalla bir taş daha kazanmak.',
      neden: 'Şah çekildiği için Beyaz filini kurtaramaz: 35.Kf5 Nxc3 36.bxc3 g6+ sonrası Siyah üç piyon fazladır ve beyaz şah mat ağındadır (Motor: −6.0). Euwe bu noktada terk etti.',
      diger: [
        { move: '34...Nd5', text: '35.Bg4 Bd8+ 36.Kf5; Siyah yine kazanır ama daha yavaş (Motor: −5.7).' },
        { move: '34...Rg3+', text: '35.Kf5 Nd5 36.Bd2; Siyah kazanır (Motor: −5.6).' },
      ],
    },
  },
  qa: [
    { q: 'Beyazın en büyük hatası neydi: 14.f4 mü, 28.Bb3 mü?', a: 'Değerlendirmeye göre iki hata var. 14.f4 motoru +0.2’den −1.0’e götürdü ve d4 piyonunu kaybettirdi; ama Beyaz 20. hamleden sonra taş fazlasıyla dengeyi geri kazandı ve 27. hamlede +0.5 civarında biraz üstündü. Oyunu doğrudan kaybettiren 28.Bb3? oldu: e2’yi açık bıraktı ve değerlendirme −2.9’a düştü.' },
    { q: 'f4’ten sonra d4 neden korunamadı?', a: 'd4 piyonunu koruyan tek taş yoktu: d2 atı yalnızca Nb3 ile korurdu, ama 13.Bb3 seçildi. f4 g1-a7 çaprazını açtığı için 14...Nf6 15.Bc2 Qxd4+ şahla geldi. Beyaz aynı anda hem e4’ü (Nf6 ve Bg6 saldırıyordu) hem de d4’ü tutamadı.' },
    { q: 'Siyah neden 17...Rad8 oynayıp filini kaybetti, 17...Qc5 değil?', a: 'Motor 17...Qc5’i (−1.2) öneriyor; fil h7’ye kaçabilir ve Siyah piyon fazlasını korur. Alekhine ise fili üç piyona değişmeyi ve aktif kale oyununu tercih etti (17...Rad8 −0.4). Chess.com’daki "A Century of Chess" yazısı fedanın 17. hamlede geldiğini ve Alekhine’in sonunda üç piyon ve daha aktif oyun aldığını yazıyor.' },
    { q: '20...Qxg4 neden bir fedadan çok bir toplama hamlesiydi?', a: 'Fil zaten kapana kısılmıştı. 20...Qxg4 ile Siyah üçüncü piyonu aldı ve vezir değişimini zorladı. 21.Qxg4? Nxg4 22.fxg6 Re2 Siyahı kazanırken bırakırdı (−2.5); bu yüzden Beyaz 21.fxg6 ile fili almak zorunda kaldı.' },
    { q: 'Vezirsiz oyunda Siyahın üç piyonu bir taşa eşit miydi?', a: 'Motor 21. ile 27. hamleler arasında değerlendirmeyi +0.2 ile +0.9 arasında gösteriyor; yani Beyaz biraz üstün ama kazanmaya yakın değil. Siyahın karşılığı yalnızca piyonlar değil, açık d- ve e-hatlarındaki kaleleri ve Beyazın açık şahıydı.' },
    { q: 'Beyaz şahı nerede durmalıydı?', a: '25.Kh3 kaleye saldırdı ama şahı bağlamalara açık bıraktı. Motor 25.Kh1’i (+0.9) ve 28. hamlede 28.Kg2’yi (+0.5) öneriyor. Şah h3’te olmasaydı 29...Rd3 bağlaması mümkün olmazdı.' },
    { q: 'Siyah 29. hamlede neden 29...g5 değil 29...Rd3 oynadı?', a: '29...Rd3 f3 atını şaha bağlar ve 30.Kh4 Rxf3 31.Rxf3 Rxh2+ 32.Rh3 g5+ 33.Kxg5 Rxh3 34.Bd1 Ne4+ ile kazanır (−5.4). 29...g5 30.Bxf6 gxf6 ise yalnızca küçük bir üstünlük verir (−0.7). Kazanmanın tek yolu buydu.' },
    { q: '33...Ne4+ neden 33...Rxh3’ten önce oynanamazdı?', a: '33...Ne4+? 34.Kf5 sonrası at korumasız kalır: 34...Rxh3 35.Kxe4 ile Beyaz taş fazlasıyla üstün olur (+1.5). Önce kale alınmalı, sonra çatal gelmelidir; sıra her şeydir.' },
  ],
  sources: [
    { title: 'Chess.com (kahns): A Century of Chess – Alekhine-Euwe 1937 (Part I)', url: 'https://www.chess.com/blog/kahns/a-century-of-chess-alekhine-euwe-1937-part-i' },
    { title: 'OlimpBase: 1937 Dünya Şampiyonası maçı, oyun oyun skor', url: 'https://www.olimpbase.org/ind-wcc/wc1937-wch.html' },
    { title: 'Wikipedia: World Chess Championship 1937', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1937' },
    { title: 'Chess.com: Clash of Champions – Alekhine vs. Euwe (1937 Rematch)', url: 'https://www.chess.com/article/view/clash-of-champions-alekhine-vs-euwe-1937-rematch' },
    { title: 'Chess.com: The Openings of World Champions – Max Euwe and the Slav Defense', url: 'https://www.chess.com/article/view/the-openings-of-world-champions-max-euwe-and-the-slav-defense' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  exercises: [
    { id: 'eal-1', kind: 'tekrar', plan: false, title: 'Kaleler içeri giriyor',
      source: 'Euwe – Alekhine, Hollanda 1937 (28. hamle)',
      fen: '3r2k1/ppb2pp1/2p2np1/8/P3r3/1B3N1K/1P1B3P/R4R2 b - - 10 28',
      prompt: 'Beyaz filini d1’den b3’e çekti. Beyaz şahı h3’te açıkta duruyor ve d2 fili d8 kalesinin hattında. Siyah nasıl yararlanır?',
      hint: 'd1 fili hangi kareyi koruyordu?',
      line: ['Re2', 'Bc3', 'Rd3'],
      explanation: '**28...Re2!** Kale d2 filine ve h2 piyonuna saldırır. **29.Bc3 Rd3!** ve f3 atı h3’teki şaha bağlanır. Motor: 28...Re2 −3.0, sonraki en iyi 28...Rxd2 −0.3; 29.Bc3 sonrası ...Rd3 −5.4, sonraki en iyi ...g5 −0.7.',
      link: 'Fil b3’e gidince e2 karesi korumasız kaldı; Siyahın kaleleri bu kareden beyaz şaha ulaştı.' },
    { id: 'eal-2', kind: 'tekrar', plan: false, title: 'Şahı g5’e çekmek',
      source: 'Euwe – Alekhine, Hollanda 1937 (31. hamle)',
      fen: '6k1/ppb2pp1/2p2np1/8/P6K/1BB2R2/1P2r2P/R7 b - - 0 31',
      prompt: 'Siyah f3’te kalesini at için verdi. Beyaz şahı h4’te, c3 fili ise korumasız. Siyahın devamı nedir?',
      hint: 'Önce şahla bir piyon alın, sonra şahı atın çatal yapabileceği bir kareye çekin.',
      line: ['Rxh2+', 'Rh3', 'g5+'],
      explanation: '**31...Rxh2+! 32.Rh3 g5+!** Şah g5’e gitmek zorunda kalır; 33.Kxg5 Rxh3 34.Bd1 Ne4+ ile at şahla birlikte c3 filine saldırır. Motor: 31...Rxh2+ −5.6, sonraki en iyi +2.4; 32...g5+ −5.8, sonraki en iyi yaklaşık 0.',
      link: 'Kale baskını, şahı atın çatal karesine çeken piyon şahıyla bitti.' },
    { id: 'eal-3', kind: 'transfer', plan: false, title: 'f4’ten sonra d4',
      source: 'Kozul – Shirov, Saraybosna 2003 (23. hamle)',
      fen: 'r2q1rk1/1p2np1p/4p1p1/pPn3P1/1bBP1P1N/1P5Q/7P/R1B2RK1 b - - 0 23',
      prompt: 'Aynı Slav varyantından çıkan bir oyun. Beyaz piyonlarını f4 ve g5’e kadar ilerletti. Siyahın veziri d8’de, beyaz şah g1’de.',
      hint: 'd4 piyonunu kim koruyor? g1-a7 çaprazına bakın.',
      line: ['Qxd4+'],
      explanation: '**23...Qxd4+!** d4 piyonu korumasızdır ve şahla alınır; 24.Be3 Qe4 ile vezir merkezde kalır. Motor: ...Qxd4+ −2.4, sonraki en iyi ...Nd7 −1.4.',
      link: 'Euwe’ye karşı Alekhine de f4’ten sonra 15...Qxd4+ ile aynı piyonu aynı çaprazdan şahla aldı.' },
    { id: 'eal-4', kind: 'transfer', plan: false, title: 'İkinci yatayda iki kale',
      source: 'Garcia – Smislov, Capablanca Anma Turnuvası, Havana 1962 (27. hamle)',
      fen: '1r4k1/3R1pbp/6p1/8/8/3p2PB/P4r1P/3R3K b - - 3 27',
      prompt: 'Siyahın bir kalesi f2’de, beyaz şah h1’de. Beyazın kaleleri d-hattında d3 piyonuyla meşgul. Siyahın en güçlü devamı nedir?',
      hint: 'İkinci kale de ikinci yataya gelebilir mi?',
      line: ['Rbb2'],
      accept: { 0: ['Rc2'] },
      explanation: '**27...Rbb2!** Kaleler ikinci yatayda ikilenir; h2 ve a2 piyonları düşer, beyaz şah sıkışır. Motor: ...Rbb2 −5.2, ...Rc2 −4.6 (aynı fikir, kabul edilir), sonraki en iyi ...Bh6 −2.8.',
      link: 'Alekhine de kalelerini e2 ve d3’e sokarak açık beyaz şaha karşı kale baskını yaptı.' },
  ],
};
