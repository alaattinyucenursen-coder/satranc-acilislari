// Carlsen – Gelfand, Tal Memorial, Moskova 2006 (1. tur). Kaynak: PgnMentor (Carlsen.pgn).
export default {
  id: 'carlsen-gelfand-2006',
  theme: 'Zayıflamış e3 piyonu ve ikinci yataya giren kale',
  white: 'Magnus Carlsen', black: 'Boris Gelfand',
  whiteShort: 'Carlsen', blackShort: 'Gelfand',
  event: 'Tal Memorial', site: 'Moskova', year: 2006, eco: 'D17',
  variation: 'Slav Savunması, Çek varyantı, 6.Nh4', result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 dxc4 5. a4 Bf5 6. Nh4 Bg4 7. h3 Bh5 8. g4 Bg6 9. Nxg6 hxg6 10. e3 e6 11. Bxc4 Bb4 12. Bf1 Qd5 13. f3 Qa5 14. Bg2 c5 15. dxc5 Nc6 16. O-O O-O 17. f4 Qxc5 18. g5 Rfd8 19. Qe2 Bxc3 20. bxc3 Nd5 21. Qb5 Qxc3 22. Rb1 Ndb4 23. Qe2 Rac8 24. Be4 Na5 25. Bb2 Qc4 26. Qg2 Nb3 27. Bxb7 Rd2 28. Qf3 Rcd8 29. Be5 Nc5 30. Rbc1 Nc2 31. Bc6 a6 32. Rf2 Nb3 33. Rcf1 Nb4 34. Qe4 Qxc6 35. Qxb4 Rxf2 36. Rxf2 Qc1+ 37. Kg2 Qxe3 38. Qb7 Nd2 0-1`,

  summary: 'Siyah (Gelfand) kazandı. Çek varyantında 15 yaşındaki Carlsen 6.Nh4 ile Siyahın beyaz kareli filini kovaladı ve 9.Nxg6 ile **fil çiftini** aldı; bunun için h3, g4 ve ardından f3, f4 oynadı. ChessBase’in tur raporuna göre 12.Bf1 “ikna edici olmayan bir yenilik”ti: fil c4’ten geri dönünce Beyaz bir tempo kaybetti, Gelfand ise 12...Qd5 ile h1 kalesine bakarak Beyazı 13.f3’e zorladı. Bu ilerleyişler **e3 piyonunu** ve Beyazın ikinci yatayını kalıcı olarak zayıflattı. Gelfand 14...c5 ile merkezi açtı, piyonu 17...Qxc5 ile geri aldı, 19...Bxc3 ile ikili c-piyonu yarattı ve 21...Qxc3 ile bir piyon kazandı. Carlsen 26.Qg2 ile vezir değişimini reddedip 27.Bxb7 ile piyonu geri aldı, ama 27...Rd2! ile Siyah kalesi ikinci yataya yerleşti. Sonrasında Beyazın 31.Bc6, 33.Rcf1 ve 34.Qe4 hataları üzerine 34...Qxc6, 36...Qc1+ ve 37...Qxe3 geldi; 38...Nd2 ile f2 kalesi ve beyaz şah karşı konulmaz tehditler altında kalınca Carlsen terk etti. ChessBase’in raporuna göre Gelfand, Carlsen’in iki filine karşı iki atıyla rakibini oyun gücüyle geride bıraktı.',
  intro: 'Slav Savunmasında 4...dxc4 ile Siyah c4 piyonunu alır; Beyaz 5.a4 ile ...b5’i önler ve piyonu sonra e3 ve Bxc4 ile geri almayı planlar. 5...Bf5 Çek varyantıdır: Siyah, e6’yı oynamadan önce beyaz kareli filini zincirin dışına çıkarır. Beyazın ana cevapları sakin 6.e3 (Hollanda varyantı), keskin 6.Ne5 (Krause hücumu) ve bu oyundaki **6.Nh4**’tür (Bled hücumu). 6.Nh4’ün mantığı basittir: Siyahın en iyi taşı sayılan f5 filini kovalayıp ya geri göndermek ya da atla değişerek fil çiftini almak. Bedeli de bellidir: h4’teki at kenarda kalır ve fili takip etmek için Beyaz h3, g4 gibi piyon hamleleri yapmak zorunda kalır. Bu oyun, o piyon hamlelerinin bedelinin nasıl ödendiğini çok açık gösterir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '6.Nh4, 7.h3 ve 8.g4 ile Siyahın beyaz kareli filini kovalayıp 9.Nxg6 ile **fil çiftini** almak; uzun vadede iki filin açık konumda güçlü olacağına güvenmek.',
      'c4 piyonunu e3 ve Bxc4 ile geri almak, sonra fili g2’ye getirip uzun çaprazda b7 ve a8’e baskı kurmak (12.Bf1 ve 14.Bg2 bu fikirle oynandı).',
      'f3 ve f4 ile merkezde e4 ve e5 karelerini tutmak, g5 ile f6 atını kovalayıp Siyahın şah kanadı savunmasını zayıflatmak.',
      'Kara kareli fili b2 ve e5’e getirip uzun çaprazda g7’ye baskı yapmak; fil çiftinin uzun çaprazlarda birlikte çalışmasını sağlamak.',
      'Geri düşünce karşı oyun aramak: 21.Qb5 ve 27.Bxb7 ile b7 piyonunu almak, 26.Qg2 ile vezirleri tutup taktik şans aramak.',
      'Planın bedeli: g4, f3, f4 ilerleyişleri e3 piyonunu yalnız bıraktı, ikinci yatay korumasız kaldı ve 20.bxc3 sonrası c3 piyonu zayıf bir hedef oldu.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Fil çiftine karşılık hızlı gelişmek ve sağlam kalmak: 9...hxg6 ile h-hattını açmak, ...e6 ve ...Bb4 ile c3 atını bağlamak.',
      '12...Qd5 ile h1 kalesine bakıp Beyazı f3’e zorlamak, ardından 13...Qa5 ile c3 ve a4’e baskı kurarak Beyazın şahını merkezde tutmak.',
      '**14...c5** kırılmasıyla merkezi açmak; piyonu geri almak için ...Nc6, ...Qxc5 ile acele etmeden gelişimi tamamlamak.',
      'Açık d-hattını kalelerle almak (18...Rfd8 tempo ile), sonra **19...Bxc3** ile Beyazın piyon yapısını bozup c3’ü kazanmak.',
      'Atları b4, b3, c2, d3 gibi ileri karelere sokmak ve kaleyi **d2’ye, ikinci yataya** yerleştirmek; Beyazın fillerine karşı atların ileri karakollarda daha güçlü olduğunu göstermek.',
      'Vezir değişimine açık olmak (25...Qc4), ama vezirler kalırsa onu Beyazın açık şahına ve **e3 piyonuna** karşı kullanmak (36...Qc1+, 37...Qxe3).',
    ] },
  },
  critical: [
    { move: '12w', title: '12.Bf1?! yenilik ve kaybedilen tempo', text: 'ChessBase’in tur raporu bu hamleyi “ikna edici olmayan bir yenilik” olarak niteledi. Fil c4’teki aktif yerinden f1’e dönüp g2’ye gitmeyi planlar, ama bu iki tempo demektir. Motor 12.Kf1 (+0.3), 12.Bd2 (+0.3) ya da 12.Qf3’ü (+0.2) tercih ediyor; Bf1 sonrası denge sıfıra iner (Motor: −0.1) ve 12...Qd5’in h1 kalesine yönelik tehdidi Beyazı 13.f3 ile e3’ü zayıflatmaya zorlar.' },
    { move: '14b', title: '14...c5! merkezi açmak', text: '14.Bg2 sonrası Beyaz şahı hâlâ e1’de ve c1 fili gelişmemişken Gelfand 14...c5 ile merkezi açtı. Motor bu hamleyi en iyi buluyor (−0.8 / −1.0). Fikir, d4 piyonunu değiştirip d-hattını açmak ve ...Nc6, ...Qxc5 ile piyonu rahatça geri almaktır. 14.Kf2 (Motor: −0.5) şahı önceden güvenliğe alıp bunu biraz hafifletebilirdi.' },
    { move: '18b', title: '18...Rfd8! tempo ile d-hattı', text: '18.g5 f6 atına saldırdı, ama Gelfand atı kaçırmak yerine kalesini d8’e getirdi. 19.gxf6? Rxd1 sonrası Beyaz veziri kaybeder (Motor: −3.7), çünkü d-hattı tamamen açıktır. Beyaz önce 19.Qe2 ile vezirini çekmek zorunda kaldı ve Siyah bu tempo ile 19...Bxc3 oynayabildi.' },
    { move: '19b', title: '19...Bxc3: piyon yapısını bozmak', text: 'Siyah kara kareli filini c3 atıyla değişti; böylece fil çiftine karşı iki at kaldı, ama Beyaz yapısı c3’te ikili ve yalnız bir piyonla bozuldu. 20.bxc3 zorunluydu: 20.Qb5? ya da 20.Qc2? Bb4! ile fil kaçar ve g5 piyonu f6 atını alsa bile Siyah malzeme kazanır (Motor: −2.5). 20...Nd5 ile c3 ve e3 hemen hedef oldu.' },
    { move: '21w', title: '21.Qb5?! ve c3’ün düşmesi', text: 'Beyaz vezir değişimiyle b7’yi hedef almak istedi, ama 21...Qxc3 ile Siyah bir piyon kazandı. Motor 21.c4!’ü öneriyor (−1.1): 21...Nc3 22.Qe1 Qxc4 23.Bb2 ile Beyaz en azından taşlarını aktifleştirir. Maçta değerlendirme −1.4’e indi ve Siyahın vezir ile atları vezir kanadında yerleşti.' },
    { move: '26w', title: '26.Qg2?! vezir değişimini reddetmek', text: '25...Qc4 vezir değişimi önerdi. Motor 26.Qxc4 Rxc4 27.Bf3’ü en iyi buluyor (−1.4): Beyaz bir piyon geride ama oyun sonunda fil çifti savunma şansı verir. Carlsen vezirleri tutup karşı oyun aradı; 26.Qg2 sonrası Siyahın atları b3’e ve kalesi d2’ye girdi (Motor: −2.2 / −2.3).' },
    { move: '27b', title: '27...Rd2! kale ikinci yatayda', text: 'Beyaz 27.Bxb7 ile piyonu geri aldı ve c8 kalesine saldırdı. Gelfand kaleyi kurtarmak yerine d-hattından d2’ye girdi: hem g2 vezirine hem b2 filine saldırır. 28.Bxc8? Rxg2+ 29.Kxg2 sonrası Siyah vezir karşılığında kale verir (Motor: −5.1). Motor: 27...Rd2 −2.5, sonraki en iyi 27...Rc7 −1.6.' },
    { move: '34w', title: '34.Qe4? ve son çöküş', text: 'Beyaz zaten zor durumdaydı (Motor: −3.4), ama 34.Qe4 b4 atına saldırırken c6 filini korumasız bıraktı. 34...Qxc6! 35.Qxb4 Rxf2 36.Rxf2 Qc1+ 37.Kg2 Qxe3 ile Siyah veziri oyunun başından beri zayıf olan e3 piyonunu aldı (Motor: −4.6). İlginç olan, 34...Qxe4? 35.Bxe4 hamlesinin Siyahın avantajını neredeyse tamamen silmesidir (Motor: −0.1); doğru alış sırası önemliydi.' },
  ],
  lessons: [
    'Fil çiftini almak için yapılan piyon hamleleri (h3, g4, f3, f4) şahın önünde ve merkezde kalıcı zayıflıklar bırakabilir; burada e3 piyonu ve ikinci yatay oyun boyunca hedef kaldı.',
    'Aynı taşı iki kez oynamak (11.Bxc4 ve 12.Bf1) gelişimde geri kalmaya yol açar; rakip bu zamanı 12...Qd5 ve 14...c5 gibi aktif hamlelerle kullanır.',
    'Gelişimde öndeyken ve rakibin şahı merkezdeyken **...c5** gibi bir piyon kırılması hatları açar; piyonu hemen geri almak gerekmez, önce taşları geliştirin (15...Nc6, 16...O-O, sonra 17...Qxc5).',
    'Bir taş saldırı altındayken tempolu bir karşı hamle (18...Rfd8, açık d-hattında vezire bakış) taşı kurtarmaktan daha değerli olabilir.',
    'Fil çiftini iki ata bırakmak, karşılığında rakibin piyon yapısı bozuluyor ve atlar için ileri karakollar oluşuyorsa iyi bir alışveriştir (19...Bxc3, sonra atlar b4, b3, c2’de).',
    'Açık bir hattaki kale **ikinci yataya** (Beyaz için yedinci yataya) girdiğinde birden çok taşa saldırır ve rakibin savunmasını felç eder (27...Rd2).',
    'Geride olan taraf vezir değişiminden kaçabilir (26.Qg2), ama bu, açık şahla savaşmak demektir; çoğu zaman pasif ama sağlam bir oyun sonu daha iyi kurtuluş şansı verir.',
  ],
  qa: [
    { q: 'Kazanan kimdi ve oyunu nasıl kazandı?', a: 'Sonuç 0-1: Boris Gelfand kazandı. Gelfand fil çiftini Beyaza verdi, karşılığında sağlam bir yapı ve hızlı gelişim aldı; 14...c5 ile merkezi açtı, 19...Bxc3 ile Beyazın piyon yapısını bozdu ve 21...Qxc3 ile piyon kazandı. Sonra atlarını ileri karelere, kalesini 27...Rd2 ile ikinci yataya soktu ve Beyazın hatalarından sonra 36...Qc1+ ve 37...Qxe3 ile şaha ve e3’e ulaştı.' },
    { q: 'Beyaz neden 6.Nh4 oynadı, bu hamlenin fikri neydi?', a: 'Çek varyantında Siyahın en iyi taşı f5 filidir; 6.Nh4 (Bled hücumu) bu fili hemen sorgular. Siyah 6...Bc8 ile geri dönerse Beyaz 7.Nf3 Bf5 ile tekrarı ya da 7.e3 ile sakin oyunu seçer (Motor: +0.3); 6...e6 7.Nxf5 exf5 ise Siyaha iyi gelişim karşılığında yapı bozukluğu verir (Motor: +0.1). Gelfand’ın 6...Bg4’ü filini tutmak istedi, bu da Beyazı h3 ve g4 ile şah kanadını açmaya zorladı.' },
    { q: '12.Bf1 neden eleştirildi?', a: 'Fil 11.Bxc4 ile c4’e daha yeni gelmişti; 12.Bf1 onu geri çekip g2’ye götürme planıydı ve iki tempo kaybettirdi. ChessBase raporu bunu “ikna edici olmayan bir yenilik” diye niteledi ve Gelfand’ın bu çekilişten sonra bir piyon kazandığını yazdı. Motor 12.Kf1 ya da 12.Bd2’yi tercih ediyor (+0.3); Bf1 sonrası denge 0.0 civarına iner ve 12...Qd5, h1 kalesine yönelik tehdidiyle Beyazı 13.f3’e zorlar.' },
    { q: 'Siyah neden 13...Qa5 ve 14...c5 oynadı, ...O-O değil?', a: 'Beyaz şahı hâlâ e1’de ve c1 fili gelişmemişti; Siyah bu anı kaçırmamak için önce baskıyı artırdı. 13...Qa5 c3 atını (b4 filiyle birlikte) ve a4 piyonunu hedef aldı (Motor: −0.6); 13...O-O ise −0.3 ile daha yavaştı. 14...c5 ile d4 piyonu değiştirildi ve d-hattı açıldı; şah merkezde kalsaydı Beyaz çok daha büyük sıkıntıya girerdi.' },
    { q: '19...Bxc3 neden iyi bir karardı, fil çiftine bir fil daha vermek değil mi?', a: 'Siyah kendi kara kareli filini değişti ve iki ata karşı iki fil kaldı; motor 19...Nd5 ile aynı değeri veriyor (−1.1). Ama Bxc3 somut bir kazanç getirdi: 20.bxc3 zorunluydu (20.Qb5? Bb4! −2.5) ve c3’te korunması zor ikili bir piyon kaldı. Ayrıca kapalı merkezde (e3, f4, e6 piyonları) atlar ileri karelerde fillerden daha etkili oldu; ChessBase de oyunu “iki atın iki file karşı üstünlüğü” olarak özetledi.' },
    { q: 'Carlsen 26. hamlede neden vezir değişimini kabul etmedi?', a: 'Bir piyon geride vezirsiz oyun sonu pasif bir savunma demekti: a4 ve e3 zayıf, Siyahın atları b4 ve a5’te aktifti. Carlsen 26.Qg2 ile vezirleri tutup uzun çaprazda b7’ye karşı oyun aradı ve 27.Bxb7 ile piyonu gerçekten geri aldı. Ancak motora göre 26.Qxc4 Rxc4 27.Bf3 daha iyiydi (−1.4); Qg2 sonrası 27...Rd2 ile Siyahın baskısı arttı (−2.5).' },
    { q: 'Siyah nerede daha hızlı kazanabilirdi?', a: 'En büyük fırsat 31. hamledeydi: 31...Nb3! ile c1 kalesine saldırmak ve e3 üzerindeki baskıyı korumak motor değerlendirmesiyle −4.2 idi; maçtaki 31...a6 ise avantajı −2.0’a indirdi. Ayrıca 29...Nc5 yerine 29...Ra2 (−3.4) ve 33...Nb4 yerine 33...Qc5 (−5.1) daha güçlüydü. Gelfand yine de baskıyı hiç bırakmadı ve Beyazın hatalarını cezalandırdı.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'Açılışta 14.Kf2 (−0.5) ve orta oyunda 21.c4 (−1.1) oyunu dengeye yakın tutardı. Daha sonra 24.Bb2 (−1.2) ve özellikle 26.Qxc4 ile vezir değişimi (−1.4) Beyaza fil çiftiyle savunma şansı verirdi. 31. hamlede 31.Bc7! (−2.8) Siyahın d8 kalesini kovup değişim yaratarak baskıyı azaltabilirdi; maçtaki 31.Bc6 −4.0’a düştü.' },
    { q: 'Son hamle 38...Nd2 neden terk ettirdi?', a: 'At e4 ya da f3’e gelmeye hazırlanır: 39...Ne4 f2 kalesine ikinci kez saldırır (vezir e3 zaten saldırıyor) ve e5 filine de bakar. 39.Rf3 Nxf3 kaleyi kaybettirir, 39.Bd4 Qxd4 fili kaybettirir, 39.Bd6 Ne4 40.Rb2 Qg3+ 41.Kf1 Nxd6 sonrası Siyah bir at ve piyon önde kalır (Motor: −5.4 / −6.0). Beyazın b7’deki veziri savunmaya uzaktır.' },
  ],
  sources: [
    { title: 'ChessBase: Tal Memorial (category 20) starts in Moscow – 1. tur raporu, 2006', url: 'https://en.chessbase.com/post/tal-memorial-category-20-starts-in-moscow' },
    { title: 'ChessBase: Tal Memorial Moscow 2006, 1. tur oyunları (PGN görüntüleyici)', url: 'https://en.chessbase.com/portals/4/files/news/2006/games/talmem_01.htm' },
    { title: 'ChessBase: Tal-Mem R9 – turnuvanın son turu ve sıralama, 2006', url: 'https://en.chessbase.com/post/tal-mem-r9-all-games-drawn-three-grandmasters-win' },
    { title: 'Wikipedia: Slav Defense (Çek varyantı, 6.e3, 6.Ne5, 6.Nh4 Bled hücumu)', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkezi vezir piyonuyla alır ve c1 filinin yolunu açar.',
      amac: 'Merkezde d4 piyonuyla e5 ve c5 karelerini kontrol etmek, ardından c4 ile Siyahın d5 piyonuna baskı kurmak.',
      neden: '1.d4 genellikle daha pozisyonel bir mücadeleye yol açar; bu oyunda Slav Savunmasının en teorik yollarından birine girildi.',
      diger: [
        { move: '1.e4', text: 'Motor en yüksek değeri buna veriyor (Motor: +0.4); Gelfand’a karşı Sicilya Najdorf gibi keskin yollar açar.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); genellikle aynı vezir piyonu yapılarına geçer.' },
      ],
    },
    '1b': {
      text: '1...d5 ile Siyah merkezde aynı kareye karşı durur ve e4’ü önler.',
      amac: 'Merkezde eşit pay almak ve Beyazın c4’üne karşı d5’i Slav ya da Vezir Gambiti yapısında tutmak.',
      neden: '1...d5 doğrudan klasik Vezir Gambiti ve Slav yapılarına gider ve merkezde hemen bir piyonla yer tutar; 1...Nf6 daha esnektir ama Beyaza daha çok sistem seçeneği bırakır.',
      diger: [
        { move: '1...Nf6', text: 'Motorun ilk tercihi (Motor: +0.3); Hint savunmalarına ve Grünfeld’e yol açar.' },
        { move: '1...c6', text: 'Doğrudan Slav’a hazırlanır ama 2.e4 ile Caro-Kann’a geçilebilir (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: '2.c4 Vezir Gambiti: Beyaz c-piyonunu d5’i sorgulamak için verir.',
      amac: 'd5 piyonunu değiştirmeye ya da almaya zorlayıp merkezde e4 ile tam piyon merkezi kurmak.',
      neden: 'c4, d5’e kanattan saldırarak Siyahın merkezini zayıflatır; piyonu Siyah alsa bile genellikle geri kazanılır.',
      diger: [
        { move: '2.Nf3', text: 'Daha sakin bir sıra (Motor: +0.2); c4’ü bir hamle sonraya bırakır.' },
        { move: '2.Bf4', text: 'Londra sistemi; daha az teorik ama Beyaza daha küçük avantaj verir.' },
      ],
    },
    '2b': {
      text: '2...c6 Slav Savunması: d5 c-piyonuyla desteklenir.',
      amac: 'd5’i sağlam tutmak, c8 filini kapatmadan (e6’dan önce) dışarı çıkarmak.',
      neden: 'Vezir Gambitini Kabul Etmeyen 2...e6’nın aksine 2...c6 c8 filine f5 ya da g4 yolunu açık bırakır; Slav’ın temel fikri budur. Siyah ayrıca daha sonra ...dxc4 ile piyonu alıp ...b5 ile tutma seçeneğini kazanır.',
      diger: [
        { move: '2...e6', text: 'Klasik Vezir Gambiti (Motor: +0.3); sağlam ama c8 fili kapanır.' },
        { move: '2...dxc4', text: 'Vezir Gambitini Kabul (Motor: +0.3); merkezi hemen bırakır.' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile at gelişir ve d5’e ikinci kez baskı yapar.',
      amac: 'e4 ilerleyişini desteklemek ve d5 üzerindeki baskıyı artırmak.',
      neden: 'Nc3 en doğal gelişim hamlesidir; ancak Siyaha ...dxc4 sonrası ...b5 ile piyonu tutma fikri verir, bu yüzden Beyaz ileride a4 oynamak zorunda kalır.',
      diger: [
        { move: '3.Nf3', text: 'Ana yollardan biri (Motor: +0.4); oyun genellikle aynı konuma gelir.' },
        { move: '3.cxd5', text: 'Değişim Slav’ı (Motor: +0.4); simetrik ve sakin bir yapı.' },
      ],
    },
    '3b': {
      text: '3...Nf6 ile Siyah atını geliştirir ve e4’ü kontrol eder.',
      amac: 'Gelişimi tamamlamak, Beyazın e4 ile merkezi genişletmesini zorlaştırmak.',
      neden: '3...dxc4 ya da 3...e6 da oynanır; 3...Nf6 en esnek hamledir ve ana Slav konumlarına götürür.',
      diger: [
        { move: '3...dxc4', text: 'Hemen piyonu alır (Motor: +0.3); 4.e4 ile keskin oyun başlar.' },
        { move: '3...e6', text: 'Yarı Slav ya da Noteboom yapılarına gider (Motor: +0.4).' },
      ],
    },
    '4w': {
      text: '4.Nf3 ile ikinci at gelişir; ana Slav konumu oluşur.',
      amac: 'Merkezi desteklemek ve rok için hazırlanmak.',
      neden: '4.e3 de sık oynanır (Motor: +0.4) ama c1 filini kapatır; 4.Nf3 fili serbest tutar ve 4...dxc4 sonrası ana Çek varyantına girer.',
      diger: [
        { move: '4.e3', text: 'Motorun hafif tercihi (Motor: +0.4); daha sağlam ama pasif bir kurulum.' },
        { move: '4.cxd5', text: 'Değişim yapısına geçiş (Motor: +0.4).' },
      ],
    },
    '4b': {
      text: '4...dxc4 ile Siyah c4 piyonunu alır.',
      amac: '...b5 ile piyonu tutmayı tehdit edip Beyazı a4 oynamaya zorlamak; ardından c8 filini f5’e çıkarmak.',
      neden: 'Ana Slav’ın en çok oynanan hamlesidir. Piyonu almak d5 merkezini bıraksa da Siyaha zaman kazandırır, çünkü Beyaz piyonu geri almak için e3 ve Bxc4 oynamak zorundadır.',
      diger: [
        { move: '4...e6', text: 'Yarı Slav (Motor: +0.4); çok farklı, keskin bir teori.' },
        { move: '4...a6', text: 'Çebanenko sistemi; ...b5 ile esnek bir kurulum.' },
      ],
    },
    '5w': {
      text: '5.a4 ...b5’i önler.',
      amac: 'Siyahın c4 piyonunu tutmasını engellemek; piyonu e3 ve Bxc4 ile geri almak.',
      neden: '5.a4 b4 karesini zayıflatır (Siyah sonra ...Bb4 ve ...Nb4 kullanır), ama ...b5 ile piyon tutulursa Beyazın merkez avantajı kaybolur. 5.e4 ise 5...b5 ile keskin, Siyahın da memnun olduğu bir gambit oyununa yol açar.',
      diger: [
        { move: '5.e4', text: 'Gambit tarzı oyun; 5...b5 6.e5 Nd5 ile çok keskin bir mücadele.' },
        { move: '5.Ne5', text: 'Daha az oynanan bir deneme (Motor: +0.1).' },
      ],
    },
    '5b': {
      text: '5...Bf5 Çek varyantı: fil e6’dan önce dışarı çıkar.',
      amac: 'c8 filini aktif bir çapraza yerleştirmek ve 6.e4’ü önlemek; sonra ...e6, ...Bb4 ile gelişmek.',
      neden: 'Wikipedia’nın da belirttiği gibi Siyahın ana cevabı budur ve 6.e4’ü önler. 5...Bg4 (Steiner) ya da 5...e6 da oynanır ama 5...Bf5 en sağlam ve en çok güvenilen yoldur (Motor: +0.2).',
      diger: [
        { move: '5...Bg4', text: 'Steiner varyantı; fil daha agresif ama Ne5 ile kovalanabilir.' },
        { move: '5...e6', text: 'c8 filini kapatır (Motor: +0.4); daha pasif bir yapı.' },
      ],
    },
    '6w': {
      text: '6.Nh4 (Bled hücumu) ile at f5 filine saldırır.',
      amac: 'Siyahın en iyi taşı olan f5 filini kovalamak ve uygun anda atla değişip **fil çiftini** almak.',
      neden: 'Ana yol 6.e3’tür (Hollanda varyantı, Motor: +0.3); 6.Nh4 de aynı değerde ama daha az bilinen, rakibi erken düşünmeye zorlayan bir seçimdir. Bedeli, atın kenara gitmesi ve fili takip için h3, g4 gibi piyon hamlelerinin gerekmesidir.',
      diger: [
        { move: '6.e3', text: 'Hollanda varyantı (Motor: +0.3): 6...e6 7.Bxc4 Bb4 8.O-O O-O ile sakin bir oyun.' },
        { move: '6.Ne5', text: 'Krause hücumu (Motor: +0.2): f3 ve e4 ya da Nxc4 fikriyle daha keskin.' },
      ],
    },
    '6b': {
      text: '6...Bg4 ile fil g4’e kaçar ve çaprazdan e2’ye bakar.',
      amac: 'Fili kenarda değiştirmek yerine aktif tutmak; Beyazı fili kovalamak için piyon hamlelerine zorlamak.',
      neden: 'Gelfand, 6...Bc8’in tekrar tekliflerini ya da 6...e6’nın yapı bozukluğunu istemedi. 6...Bg4 7.h3 sonrası fil h5’e, sonra g6’ya gider; Beyaz fil çiftini alır ama g4 ile şahının önünü açar. Motor bu hamleye hafif Beyaz üstünlüğü veriyor (+0.4).',
      diger: [
        { move: '6...Bc8', text: 'En çok oynanan geri çekiliş (Motor: +0.3); 7.Nf3 Bf5 ile tekrar mümkün, Beyaz isterse 7.e3 oynar.' },
        { move: '6...e6', text: '7.Nxf5 exf5 8.e3 ile Siyah fil çiftini verir ama hızlı gelişir (Motor: +0.1).' },
        { move: '6...Bd7', text: 'Motorun ilk tercihi (Motor: +0.1); fil pasif ama Beyazın atı h4’te garip duruyor.' },
      ],
    },
    '7w': {
      text: '7.h3 ile fil yeniden sorgulanır.',
      amac: 'Fili h5’e itip g4 ile kovalamak ya da Siyahı fil değişimine razı etmek.',
      neden: 'Motor buna açık farkla en iyi diyor (+0.4); 7.f3 (−0.1) ve 7.Nf3 (−0.3) Beyazın 6.Nh4 ile kaybettiği tempoları geri kazandırmaz.',
      diger: [
        { move: '7.f3', text: 'Fili kapatır ama e3 ve g3 karelerini zayıflatır (Motor: −0.1).' },
        { move: '7.Nf3', text: 'Atı geri getirmek tempo kaybıdır (Motor: −0.3).' },
      ],
    },
    '7b': {
      text: '7...Bh5 ile fil çaprazda kalır ve g4’e karşı Beyazı karar vermeye zorlar.',
      amac: 'Beyazın g4 oynamasını zorlayarak şah kanadını zayıflatmak.',
      neden: '7...Bd7 ya da 7...Bc8 fili pasifleştirir (her ikisi Motor: +0.8); 7...Bh5 g4 sonrası g6’ya geçip atla değişmeyi kabul eder, ama karşılığında Beyazın piyonları ilerlemiş olur.',
      diger: [
        { move: '7...Bd7', text: 'Pasif bir geri çekiliş (Motor: +0.8); Beyaz 8.e4 ile merkezi alır.' },
        { move: '7...Bc8', text: 'Fil tamamen geri döner (Motor: +0.8); Siyah iki tempo kaybetmiş olur.' },
      ],
    },
    '8w': {
      text: '8.g4 ile fil kovalanır ve Beyaz şah kanadında alan kazanır.',
      amac: 'Fili g6’ya iterek Nxg6 ile fil çiftini almak.',
      neden: 'Mantıklı devam budur (Motor: +0.7); 8.a5 ya da 8.Bg5 (0.0) filin h5’te kalmasına izin verir. g4’ün bedeli f4 ve h4 karelerinin zayıflaması ve şahın önündeki piyon örtüsünün azalmasıdır.',
      diger: [
        { move: '8.a5', text: 'Vezir kanadında alan kazanır ama fil çiftini almayı erteler (Motor: 0.0).' },
        { move: '8.Bg5', text: 'Gelişim hamlesi, ama 8...e6 sonrası fil h5’te rahat kalır (Motor: 0.0).' },
      ],
    },
    '8b': {
      text: '8...Bg6 ile fil çekilir; Beyaz atı onu alacak.',
      amac: 'Fili atla değiştirmek ve hxg6 ile h-hattını açmak.',
      neden: 'Tek makul kare budur. 8...e5? 9.dxe5 Nfd7 ile karışıklık Beyaz lehinedir (Motor: +1.1); 8...g5? 9.Bxg5 bir piyon kaybettirir (Motor: +2.0).',
      diger: [
        { move: '8...e5', text: 'Merkezi açma denemesi, ama 9.dxe5 Nfd7 10.Nf5 sonrası Beyaz çok iyi (Motor: +1.1).' },
        { move: '8...g5', text: 'At h4’ü kovmaya çalışır ama 9.Bxg5 ile piyon düşer (Motor: +2.0).' },
      ],
    },
    '9w': {
      text: '9.Nxg6 ile Beyaz fil çiftini alır.',
      amac: 'İki fille uzun vadeli bir avantaj elde etmek ve h4’teki kenar atı değiştirmek.',
      neden: 'Atın h4’te başka işi yoktur; 9.g5 Nd5 (+0.3) ya da 9.a5 (+0.3) Siyaha ...Nh5 gibi kaynaklar verir. Değişim 6.Nh4 planının mantıklı sonucudur (Motor: +0.7).',
      diger: [
        { move: '9.g5', text: 'f6 atını kovar ama 9...Nd5 ile at merkezde iyi bir kare bulur (Motor: +0.3).' },
        { move: '9.a5', text: 'Değişimi erteler (Motor: +0.3); Siyah ...Na6 ile gelişir.' },
      ],
    },
    '9b': {
      text: '9...hxg6 ile h-piyonuyla alınır ve h-hattı açılır.',
      amac: 'h8 kalesini oyuna sokmak ve h3 piyonuna baskı kurmak; piyon yapısını merkeze doğru toplamak.',
      neden: 'Doğru alış budur. 9...fxg6? e6 ve e5 karelerini zayıflatır ve şahı açar: 10.e4 e5 11.dxe5 Qxd1+ sonrası Beyaz rahat üstün (Motor: +1.6 / +1.9). hxg6 ile h-hattı Siyahın kalesine kendiliğinden açılır.',
      diger: [
        { move: '9...fxg6', text: '10.e4 ile Beyaz merkezi alır ve Siyahın yapısı dağılır (Motor: +1.6).' },
      ],
    },
    '10w': {
      text: '10.e3 ile Beyaz c4 piyonunu geri almaya hazırlanır.',
      amac: 'f1 filinin yolunu açıp Bxc4 ile piyonu almak, sonra gelişimi tamamlamak.',
      neden: 'Motor 10.e4’ü biraz daha iyi buluyor (+0.5): merkezi tam almak, ama 10...e5 ile keskin bir oyun başlar. Carlsen sağlam e3’ü seçti (+0.3); bu, ileride f3 ve f4 sonrası zayıflayacak olan piyondur.',
      diger: [
        { move: '10.e4', text: 'Tam merkez (Motor: +0.5): 10...e5 11.Bxc4 exd4 12.e5 ile keskin oyun.' },
        { move: '10.g5', text: 'Atı kovar ama gelişimi geciktirir (Motor: +0.3).' },
      ],
    },
    '10b': {
      text: '10...e6 ile kara kareli filin yolu açılır.',
      amac: '...Bb4 ile c3 atını bağlamak ve d5’i desteklemek.',
      neden: 'Sakin ve sağlam hamle (Motor: +0.3). 10...e5 de aynı değerde ama merkezi açıp Beyazın fillerine yol açabilir; Gelfand fil çiftine karşı kapalı merkezi tercih etti.',
      diger: [
        { move: '10...e5', text: 'Aynı değerde (Motor: +0.3): 11.Bxc4 Bb4 12.Bd2 exd4 ile açık oyun.' },
        { move: '10...Qa5', text: 'Erken vezir hamlesi (Motor: +0.6); 11.Bd2 ile Beyaz rahat gelişir.' },
      ],
    },
    '11w': {
      text: '11.Bxc4 ile Beyaz piyonu geri alır.',
      amac: 'Malzeme dengesini kurmak ve fili aktif c4 karesine yerleştirmek.',
      neden: 'Doğal ve en iyi hamle (Motor: +0.4). 11.g5 ya da 11.Qf3 piyonu hemen almaz ve Siyaha zaman verir.',
      diger: [
        { move: '11.g5', text: '11...Nd5 ile at merkezde güçlü bir kare bulur (Motor: +0.3).' },
        { move: '11.Qf3', text: 'Önce veziri geliştirir (Motor: +0.3), piyonu bir sonraki hamlede alır.' },
      ],
    },
    '11b': {
      text: '11...Bb4 ile fil c3 atını bağlar.',
      amac: 'Beyazın e4 ilerleyişini engellemek ve c3’e baskı kurmak; rok için hazırlanmak.',
      neden: 'Slav’ın tipik fil hamlesidir (Motor: +0.4). 5.a4 b4 karesini zayıflattığı için fil burada rahat durur. 11...Nbd7 (+0.6) daha yavaştır ve Beyaza 12.g5 ile tempo kazandırır.',
      diger: [
        { move: '11...Nbd7', text: '12.g5 Nd5 13.e4 ile Beyaz merkezi alır (Motor: +0.6).' },
        { move: '11...Qa5', text: '12.Kf1 Bb4 13.Na2 ile Beyaz bağlamadan kurtulur (Motor: +0.7).' },
      ],
    },
    '12w': {
      text: '12.Bf1?! ile fil c4’ten geri dönüp g2’ye gitmeye hazırlanır.',
      amac: 'Fili uzun çaprazda g2’ye yerleştirip b7’ye ve merkeze baskı kurmak; ayrıca h1 kalesini ve şahın çevresini korumak.',
      neden: 'ChessBase’in tur raporunda bu hamle “ikna edici olmayan bir yenilik” olarak geçiyor. Fil daha yeni c4’e gelmişti; geri dönüş iki tempo kaybettirir ve değerlendirmeyi +0.4’ten −0.1’e düşürür. Beyazın sorunu, g4 sonrası şahın rok için güvenli olmamasıydı; Carlsen bunu filini g2’ye getirerek çözmek istedi.',
      diger: [
        { move: '12.Kf1', text: 'Şahı yapay rokla güvenliğe alma planı (Motor: +0.3): 12...c5 13.g5 Nh7 14.f4 ile Beyaz iyi.' },
        { move: '12.Qf3', text: 'Vezir gelişir ve f-hattını tutar (Motor: +0.2 / +0.4): 12...Nbd7 13.Bd2 ile sağlam bir konum.' },
        { move: '12.Bd2', text: 'Bağlamayı çözer (Motor: +0.3); fil c4’te aktif kalır.' },
      ],
    },
    '12b': {
      text: '12...Qd5! ile vezir merkeze çıkar ve d5–h1 çaprazından h1 kalesine saldırır.',
      amac: 'Beyazın f1 filiyle kapattığı çaprazı kullanmak: Qxh1 tehdidiyle Beyazı f3 ya da Rg1 gibi zorunlu bir hamleye mecbur etmek.',
      neden: 'g4 hamlesi g2 karesini boşalttı ve fil henüz g2’ye gelmedi; bu yüzden d5–h1 çaprazı açık ve h1 kalesi korumasız. Motor bu hamleyi en iyi buluyor (−0.1). 12...c5 de mümkündü, ama vezirin tempolu çıkışı Beyazın gelişimini daha da geciktirir.',
      diger: [
        { move: '12...Qe7', text: 'Sakin bir alternatif (Motor: −0.1); 13.Bd2 e5 ile merkezi açar.' },
        { move: '12...c5', text: 'Hemen merkezi sorgular (Motor: +0.1); 13.Bg2 Nc6 14.dxc5 ile Beyaz rahatlar.' },
      ],
    },
    '13w': {
      text: '13.f3 ile çapraz kapanır ve e4 karesi kontrol edilir.',
      amac: 'h1 kalesini korumak ve Siyah vezirinin e4’e gelmesini önlemek.',
      neden: 'Motor 13.Rg1’i biraz daha iyi buluyor (−0.2): kale çaprazdan çıkar ve e3 zayıflamaz. 13.f3 ise e3’ü yalnız bırakır ve g3 karesini zayıflatır; bu kararın bedeli oyunun sonunda 37...Qxe3 ile ödenecekti.',
      diger: [
        { move: '13.Rg1', text: 'Kale çaprazdan kaçar (Motor: −0.2): 13...Qa5 14.Bd2 c5 15.g5 ile oyun dengede.' },
        { move: '13.Rh2', text: 'Kale ikinci yatayda garip durur (Motor: −0.9).' },
      ],
    },
    '13b': {
      text: '13...Qa5 ile vezir a5’e geçer; c3 atı ve a4 piyonu baskı altında.',
      amac: 'b4 filiyle birlikte c3 atına baskı kurup Beyazın rok yapmasını ve gelişmesini zorlaştırmak.',
      neden: 'Motor bu hamleyi en iyi buluyor (−0.6). 13...O-O (−0.3) daha yavaştır; Gelfand Beyaz şahı merkezdeyken baskıyı sürdürmeyi tercih etti. Vezir a5’ten a4 piyonuna da bakar.',
      diger: [
        { move: '13...O-O', text: '14.Bg2 c5 15.O-O ile Beyaz şahını kurtarır (Motor: −0.3).' },
        { move: '13...Qd8', text: 'Geri çekiliş; Beyaz 14.Kf2 ile rahatlar (Motor: −0.1).' },
      ],
    },
    '14w': {
      text: '14.Bg2?! ile fil uzun çapraza gelir ve rok için hazırlanır.',
      amac: 'Planını tamamlamak: fil g2’de, sonra O-O ile şah güvenliğe.',
      neden: 'Motor 14.Kf2’yi öneriyor (−0.5): şah e3’ü de korur ve Na2 ile c3’teki baskı azaltılır. 14.Bg2 sonrası (−1.0) Siyahın 14...c5 kırılması daha güçlü olur, çünkü şah hâlâ e1’de ve c3 bağlı.',
      diger: [
        { move: '14.Kf2', text: 'Şah e3’ü korur (Motor: −0.5): 14...Nbd7 15.Kg2 e5 16.Na2 ile Beyaz idare eder.' },
        { move: '14.Bd2', text: 'Bağlamayı çözer (Motor: −0.6): 14...O-O 15.Na2 Bxd2+ 16.Qxd2.' },
        { move: '14.Qc2', text: '(Motor: −0.7); 14...c5 15.dxc5 O-O ile Siyah yine iyi.' },
      ],
    },
    '14b': {
      text: '14...c5! ile Siyah merkezi açar.',
      amac: 'd4 piyonunu değiştirip d-hattını açmak; Beyazın şahı merkezde ve c1 fili gelişmemişken taşlarını aktifleştirmek.',
      neden: 'Gelişimde öndeki taraf hatları açmalıdır. Motor bunu en iyi buluyor (−0.8 / −1.0). 15.dxc5 sonrası piyon hemen geri alınmasa da Siyah ...Nc6 ve ...O-O ile gelişir, sonra Qxc5 ile alır; c5 piyonu Beyaz için korunamaz.',
      diger: [
        { move: '14...e5', text: '15.dxe5 Bxc3+ 16.bxc3 Qxc3+ ile piyon alır ama merkez Beyazın fillerine açılır (Motor: −0.4).' },
        { move: '14...Na6', text: 'Gelişim hamlesi (Motor: −0.3); 15.f4 c5 ile benzer ama daha yavaş.' },
      ],
    },
    '15w': {
      text: '15.dxc5 ile Beyaz alır ve d-hattını açar.',
      amac: 'Bir piyonu geçici olarak kazanmak ve Siyahın ...cxd4 ile merkezi açmasını engellemek.',
      neden: 'Motor 15.O-O’yu biraz daha iyi buluyor (−0.8): önce şah güvenliğe, sonra c5’i almak. dxc5 sonrası (−1.1) d-hattı Siyahın kalelerine açılır ve c5 piyonu tutulamaz.',
      diger: [
        { move: '15.O-O', text: 'Önce rok (Motor: −0.8): 15...Nc6 16.dxc5 O-O 17.Qe2.' },
        { move: '15.f4', text: 'e5’i kontrol eder (Motor: −0.9); 15...Nc6 16.dxc5 Rd8 ile Siyah aktif.' },
      ],
    },
    '15b': {
      text: '15...Nc6 ile at gelişir; Siyah c5 piyonunu hemen almaz.',
      amac: 'Önce gelişimi tamamlamak, sonra ...Qxc5 ile piyonu geri almak.',
      neden: 'Motor 15...O-O’yu biraz daha iyi buluyor (−1.1), ama fark küçük (15...Nc6 −0.8). c5 piyonu kaçamaz: b6 ile korunması Siyahın ...Qxa4 ya da ...Bxc3 fikirleri yüzünden mümkün değil. At c6’dan e5, a5 ve b4 karelerine bakar.',
      diger: [
        { move: '15...O-O', text: 'Önce rok (Motor: −1.1): 16.O-O Rd8 17.Bd2 Na6 ile Siyah c5’i sonra alır.' },
        { move: '15...Qxc5', text: 'Piyonu hemen geri alır (Motor: −0.8); vezir merkezde iyi ama tempo verir.' },
      ],
    },
    '16w': {
      text: '16.O-O ile Beyaz şahını güvenliğe alır.',
      amac: 'Şahı merkezden çıkarmak ve f1 kalesini oyuna sokmak.',
      neden: 'Motor bunu en iyi buluyor (−0.8). Şah g1’de g4 ve f3 piyonlarıyla zayıf görünse de merkezde kalmaktan iyidir. 16.f4 (−1.1) şahı yine merkezde bırakır.',
      diger: [
        { move: '16.Bd2', text: 'Bağlamayı çözer (Motor: −0.8), ama şah merkezde kalır.' },
        { move: '16.f4', text: '16...Rd8 17.Bd2 Bxc3 18.bxc3 ile d-hattı Siyahta (Motor: −1.1).' },
      ],
    },
    '16b': {
      text: '16...O-O ile Siyah da rok yapar.',
      amac: 'Şahı güvenliğe almak ve f8 kalesini d-hattına getirmeye hazırlanmak.',
      neden: 'Motor 16...Rd8, 16...O-O ve 16...Qxc5’i eşit görüyor (yaklaşık −0.8). Siyah şahı g6 piyonu ve g7 ile iyi korunuyor; h-hattı açık olsa da Beyazın oraya kalesi yok.',
      diger: [
        { move: '16...Rd8', text: 'Önce d-hattını alır (Motor: −0.8): 17.Qe2 Qxc5 18.f4 O-O.' },
        { move: '16...Qxc5', text: 'Piyonu alır (Motor: −0.7); 17.Qe2 Rd8 18.f4 O-O.' },
      ],
    },
    '17w': {
      text: '17.f4 ile e5 ve g5 karelerine yönelir.',
      amac: 'Siyah atının e5’e gelmesini engellemek ve g5 ile f6 atını kovmaya hazırlanmak.',
      neden: 'Motor 17.Qe2’yi biraz daha iyi buluyor (−0.8). f4 iki yönden riskli: e3 piyonunu tamamen yalnız bırakır ve g1–a7 çaprazı Siyah vezirine açılır. Bu, 17...Qxc5 sonrası vezirin c5’ten e3’e bakmasıyla hemen görülür.',
      diger: [
        { move: '17.Qe2', text: 'Vezir e3 ve c4’ü korur (Motor: −0.8): 17...Qxc5 18.f4 Na5 19.Bd2.' },
        { move: '17.Bd2', text: 'Gelişim (Motor: −0.8): 17...Rad8 18.Qe2 Ne5.' },
      ],
    },
    '17b': {
      text: '17...Qxc5 ile Siyah piyonu geri alır; vezir c5’ten e3’e bakar.',
      amac: 'Malzeme dengesini kurmak ve veziri g1–a7 çaprazına yerleştirerek e3’e ve g1’deki şaha baskı yapmak.',
      neden: '17...Rfd8 (−0.9) ve 17...Qxc5 (−0.8) yaklaşık eşit. 17...Bxc5 (−0.6) daha zayıf, çünkü fil c3 atına baskıyı bırakır. Vezirle almak hem e3’ü hedef alır hem de fili b4’te tutar.',
      diger: [
        { move: '17...Rfd8', text: 'Önce kale (Motor: −0.9): 18.Qe2 Qxc5 19.Bd2 Na5.' },
        { move: '17...Bxc5', text: 'Fil e3’e bakar ama c3 baskısı kalkar (Motor: −0.6).' },
      ],
    },
    '18w': {
      text: '18.g5 ile f6 atı kovalanır.',
      amac: 'Atı merkezden uzaklaştırmak ve şah kanadında alan kazanmak.',
      neden: 'Motor 18.Qe2’yi öneriyor (−0.9); 18.g5 (−1.0) da yakın. Ama g5 sonrası Siyah atı kaçırmak zorunda değildir: 18...Rfd8 ile d1 vezirine bakış yaratır ve 19.gxf6? Rxd1 vezir kaybettirir. Böylece g5 tempo kazanmak yerine Beyaza tempo kaybettirir.',
      diger: [
        { move: '18.Qe2', text: 'Önce vezir çıkar (Motor: −0.9): 18...Na5 19.Bd2 Nc4 20.Rac1.' },
        { move: '18.Kh2', text: 'Şahı g1–a7 çaprazından çıkarır (Motor: −1.0): 18...Rad8 19.Qe2.' },
      ],
    },
    '18b': {
      text: '18...Rfd8! ile kale açık d-hattına tempo ile gelir.',
      amac: 'd-hattını almak ve atı kurtarmak yerine Beyaz vezirine bakarak tempo kazanmak.',
      neden: '19.gxf6? Rxd1 sonrası Beyaz veziri kaybeder (Motor: −3.7), bu yüzden Beyaz önce veziri çekmek zorundadır. Motor 18...Bxc3 (−1.2) ve 18...Rfd8’i (−1.1) eşit görüyor. f8 kalesini seçmek a8 kalesini c-hattı için bırakır.',
      diger: [
        { move: '18...Bxc3', text: 'Hemen yapıyı bozar (Motor: −1.2): 19.bxc3 Nd5 20.Qe2 Nxc3.' },
        { move: '18...Rad8', text: 'Aynı fikir diğer kaleyle (Motor: −1.1).' },
      ],
    },
    '19w': {
      text: '19.Qe2 ile vezir d-hattından çıkar; c4 ve e3’ü korur.',
      amac: 'Vezirin d1’de kale tarafından yakalanmasını önlemek ve e3’ü savunmak.',
      neden: 'En iyi hamle (Motor: −1.2). 19.Qf3 (−1.4) vezirini aynı kareden f6’ya karşı kullanır ama e3 korumasız kalır; 19.Qe1 (−1.7) daha pasiftir.',
      diger: [
        { move: '19.Qf3', text: '19...Nh5 20.Rf2 Bxc3 21.bxc3 ile Siyah iyi (Motor: −1.4).' },
        { move: '19.Qe1', text: '19...Nd5 20.Qf2 Nxc3 ile c3 düşer (Motor: −1.7).' },
      ],
    },
    '19b': {
      text: '19...Bxc3! ile Siyah fili c3 atıyla değişir.',
      amac: 'Beyazın piyon yapısını bozmak: c3’te yalnız, ikili bir piyon yaratmak ve onu hedef almak.',
      neden: 'Motor 19...Nd5 ile aynı değeri veriyor (−1.1), ama Bxc3 somut bir hedef yaratır. Bu değişimden sonra Siyahın iki atı, Beyazın fil çiftine karşı kalır; ChessBase raporu oyunu tam da “iki atın iki file karşı” üstünlüğü olarak anlattı.',
      diger: [
        { move: '19...Nd5', text: 'At merkeze (Motor: −1.1): 20.Nxd5 exd5 21.Rd1 Rac8.' },
        { move: '19...Nh5', text: 'At f4’e bakar (Motor: −1.0); 20.Ne4 Qb6 21.Kh2.' },
      ],
    },
    '20w': {
      text: '20.bxc3 ile piyonla alınır; c3 zayıf kalır.',
      amac: 'Malzeme dengesini korumak.',
      neden: 'Zorunlu. 20.Qb5? ya da 20.Qc2? Bb4! ile fil kaçar; 21.Qxc5 Bxc5 22.gxf6 gxf6 sonrası Siyah bir piyon önde ve Beyazın yapısı dağınık (Motor: −2.5). Bu yüzden Beyaz ikili piyonu kabul etmek zorundadır.',
      diger: [
        { move: '20.Qb5', text: '20...Bb4! 21.Qxc5 Bxc5 22.gxf6 gxf6 ile Siyah malzeme kazanır (Motor: −2.5).' },
        { move: '20.Qc2', text: '20...Bb4 21.Qxc5 Bxc5 22.gxf6 gxf6 (Motor: −2.4).' },
      ],
    },
    '20b': {
      text: '20...Nd5 ile at saldırıdan kaçar ve d5’ten c3 ile e3’e saldırır.',
      amac: 'c3 piyonuna ikinci kez saldırmak ve atı merkezde güçlü bir kareye yerleştirmek.',
      neden: 'En iyi hamle (Motor: −1.2). 20...Nh5 (−0.8) ve 20...Nd7 (−0.1) c3 ve e3 baskısını bırakır. Beyaz atı ancak c3–c4 ile kovalayabilir, bu da c3 piyonunu ileri götürüp Siyah vezirine c4’te hedef verir.',
      diger: [
        { move: '20...Nh5', text: 'At kenara gider (Motor: −0.8): 21.Ba3 Qa5.' },
        { move: '20...Nd7', text: 'Pasif (Motor: −0.1): 21.Ba3 Qa5 ile Beyaz fillerini aktifleştirir.' },
      ],
    },
    '21w': {
      text: '21.Qb5?! ile vezir değişimi önerilir ve b7 hedef alınır.',
      amac: 'Vezirleri değişip b7 piyonuna baskı kurmak, c3 kaybını karşı oyunla telafi etmek.',
      neden: 'Motor 21.c4!’ü öneriyor (−1.1): 21...Nc3 22.Qe1 Qxc4 23.Bb2 ile Beyaz bir piyon verir ama filleri canlanır, ya da 21...Nb6 22.Ba3 ile c4 tutulur. 21.Qb5 sonrası c3 karşılıksız düşer (−1.4).',
      diger: [
        { move: '21.c4', text: '21...Nb6 22.Ba3 Qxc4 23.Qb2 ile Beyaz fillerini açar (Motor: −1.1).' },
        { move: '21.Bd2', text: '21...Nxc3 22.Bxc3 Qxc3 23.Rfc1 (Motor: −1.3).' },
      ],
    },
    '21b': {
      text: '21...Qxc3 ile Siyah c3 piyonunu alır ve bir piyon önde.',
      amac: 'Malzeme kazanmak ve veziri c3’te Beyazın a1 kalesine ve e3’e bakacak şekilde aktif tutmak.',
      neden: 'Açık farkla en iyi (Motor: −1.4). Vezir değişimini kabul etmek (21...Qxb5 22.axb5) Beyazın a-hattını açar; 21...Qe7 (−0.9) ya da 21...Qd6 (−0.7) ise piyonu bırakır.',
      diger: [
        { move: '21...Qe7', text: 'Vezir değişiminden kaçar ama c3’ü almaz (Motor: −0.9).' },
        { move: '21...Qd6', text: '22.c4 Ndb4 ile Beyaz yapıyı onarır (Motor: −0.7).' },
      ],
    },
    '22w': {
      text: '22.Rb1 ile kale açık b-hattına gelir ve b7’ye baskı yapar.',
      amac: 'b7 piyonunu hedef almak ve c1 filini b2’ye çıkarmaya hazırlanmak.',
      neden: 'Motor 22.Ra3’ü öneriyor (−1.3): kale üçüncü yatayda Siyah vezirini kovar ve e3’ü korur. 22.Rb1 sonrası (−1.6) Siyahın atları b4’e girebilir. 22.Ra2 (−2.0) ise ...Ncb4 ile kaleyi taciz ettirir.',
      diger: [
        { move: '22.Ra3', text: 'Vezir kovalanır ve e3 korunur (Motor: −1.3): 22...Qc2 23.Qb2 Qc5 24.Rb3.' },
        { move: '22.Ra2', text: '22...Ncb4 23.Bd2 Qb3 ile kale taciz edilir (Motor: −2.0).' },
      ],
    },
    '22b': {
      text: '22...Ndb4 ile at b4’e gelir; d3 ve c2 karelerine yönelir.',
      amac: 'Atı ileri bir karakola yerleştirip ...Nd3 ile b2 ve f2 karelerine baskı yapmak; Beyaz vezirini b5’ten uzaklaştırmak.',
      neden: 'Motor 22...a6 (−1.8) ve 22...Na5’i (−1.7) biraz daha iyi buluyor, ama 22...Ndb4 de iyidir (−1.6). b4 karesi 5.a4’ten beri zayıftır; bir piyon onu asla kovalayamaz. At Beyaz vezirini de kovalar (...a6 tehdidi).',
      diger: [
        { move: '22...a6', text: 'Veziri hemen kovalar (Motor: −1.8): 23.Qb3 Qc5 24.Bxd5 exd5.' },
        { move: '22...Na5', text: 'b7’yi korur ve c4’e bakar (Motor: −1.7).' },
      ],
    },
    '23w': {
      text: '23.Qe2 ile vezir geri döner ve d3 karesini korur.',
      amac: 'Siyah atının d3’e girmesini zorlaştırmak ve e3 piyonunu savunmak.',
      neden: 'Motor 23.h4’ü biraz daha iyi buluyor (−1.5), Qe2 de yakın (−1.7). Vezir b5’te ...a6 ile kovalanacaktı; e2’de hem d3’ü hem e3’ü hem de ikinci yatayı korur.',
      diger: [
        { move: '23.h4', text: 'h-piyonunu korumaya alır (Motor: −1.5): 23...a6 24.Qe2 Nd3 25.Bb2.' },
        { move: '23.Be4', text: '(Motor: −1.6) 23...a6 24.Qe2 Nd3 25.h4.' },
      ],
    },
    '23b': {
      text: '23...Rac8 ile kale c-hattına gelir; Siyah tüm taşlarını oyuna sokar.',
      amac: 'c-hattını almak ve c1 filinin gelişimine c-hattından baskı yapmak.',
      neden: 'Motor 23...Nd3’ü öneriyor (−1.8): 24.Bb2 Nxb2 25.Rxb2 ile Beyazın fil çifti bozulur. 23...Rac8 (−1.1) biraz yavaş, ama taşların uyumunu artırır ve c-hattında ileride vezir değişimi tehditleri hazırlar.',
      diger: [
        { move: '23...Nd3', text: 'Fil çiftini bozmak için (Motor: −1.8): 24.Bb2 Nxb2 25.Rxb2 Rac8.' },
        { move: '23...Rd7', text: 'Kaleleri ikilemek için (Motor: −1.4): 24.Bb2 Qc5 25.Rfc1.' },
      ],
    },
    '24w': {
      text: '24.Be4?! ile fil merkezde e4’e gelir ve g6’ya bakar.',
      amac: 'Fili merkezde aktifleştirmek, d3 karesini kontrol etmek ve g6 piyonuna baskı yapmak.',
      neden: 'Motor 24.Bb2’yi öneriyor (−1.2): fil hemen uzun çapraza gelir ve vezire saldırır. 24.Be4 sonrası (−1.8) Siyah 24...Nd3! ile b2 karesini kontrol edebilirdi; c1 fili gelişmeden kalır.',
      diger: [
        { move: '24.Bb2', text: 'Vezire tempolu saldırı (Motor: −1.2): 24...Qc5 25.Rfc1 Qe7 26.Ba3.' },
        { move: '24.Bxc6', text: '24...Nxc6 25.Rxb7 ile piyonu geri alır ama fil çifti gider (Motor: −1.5).' },
      ],
    },
    '24b': {
      text: '24...Na5 ile at a5’e geçer; b3 ve c4 karelerine yönelir.',
      amac: 'b7’yi korumak ve atı b3 ya da c4 üzerinden Beyaz taşlarına yaklaştırmak.',
      neden: 'Motor 24...Nd3!’ü öneriyordu (−1.8 / −2.0): 25.Rd1 Nc5 ile fil e4’e saldırır ve d-hattı Siyahta kalır. 24...Na5 (−1.3 / −1.5) da sağlam ama Beyaza 25.Bb2 ile filini geliştirme zamanı verir.',
      diger: [
        { move: '24...Nd3', text: 'Atı karakola sokar (Motor: −1.8): 25.Rd1 Nc5 26.Bb2 Rxd1+.' },
        { move: '24...Nd5', text: '(Motor: −1.3) 25.Rxb7 Na5 26.Bxd5 Rxd5.' },
      ],
    },
    '25w': {
      text: '25.Bb2 ile fil uzun çapraza geçer ve vezire saldırır.',
      amac: 'c1 filini nihayet oyuna sokmak ve uzun çaprazda g7’ye baskı kurmak.',
      neden: 'En iyi hamlelerden biri (Motor: −1.4); 25.Qe1 de aynı değerde (vezir değişimi önerir). Fil tempo ile gelişir ve Siyah vezirini c3’ten kovalar.',
      diger: [
        { move: '25.Qe1', text: 'Vezir değişimi (Motor: −1.4): 25...Qxe1 26.Rxe1 Nd5 27.Bd2.' },
        { move: '25.Rd1', text: '25...Rxd1+ 26.Qxd1 Na2 ile at a2’den c1’e (Motor: −1.8).' },
      ],
    },
    '25b': {
      text: '25...Qc4 ile vezir c4’e gelir ve vezir değişimi önerir.',
      amac: 'Bir piyon fazlasıyla oyun sonuna geçmek ya da Beyazı veziri kötü bir kareye çekmeye zorlamak.',
      neden: 'Tek iyi hamle (Motor: −1.4). 25...Qc5? 26.Ba3! sonrası bağlı b4 atı düşer: 26...Nac6 27.Bxc6 Qxc6 28.Bxb4 (Motor: +0.7). 25...Qc7 (−0.3) avantajın çoğunu bırakır.',
      diger: [
        { move: '25...Qc5', text: 'Hata: 26.Ba3! Nac6 27.Bxc6 Qxc6 28.Bxb4 ile Beyaz taş kazanır (Motor: +0.7).' },
        { move: '25...Qc7', text: '26.Rfc1 Qd6 27.Rxc8 Rxc8 ile Beyaz rahatlar (Motor: −0.3).' },
      ],
    },
    '26w': {
      text: '26.Qg2?! ile Beyaz vezir değişiminden kaçar.',
      amac: 'Vezirleri tahtada tutup uzun çaprazda b7’ye ve Siyah şahına karşı oyun aramak.',
      neden: 'Motor 26.Qxc4’ü öneriyor (−1.4): 26...Rxc4 27.Bf3 Nc2 28.Kf2 ile oyun sonunda fil çifti savunma şansı verir. Carlsen pasif savunmayı istemedi; ama 26.Qg2 sonrası (−2.2) vezir g2’de Siyahın kalesi için bir hedef oldu.',
      diger: [
        { move: '26.Qxc4', text: 'Oyun sonu (Motor: −1.4): 26...Rxc4 27.Bf3 Nc2 28.Kf2 Rxa4.' },
        { move: '26.Bf3', text: 'Vezirler kalır ama fil e2’yi korur (Motor: −1.8 / −2.0).' },
      ],
    },
    '26b': {
      text: '26...Nb3 ile at b3’e girer; c1, d2 ve c5 karelerine bakar.',
      amac: 'Atı daha da ileriye sokmak, ...Nd2 ya da ...Nc5 ile Beyaz taşlarını taciz etmek.',
      neden: 'Motor 26...b6, 26...Nd3 ve 26...Nb3’ü yaklaşık eşit görüyor (−2.1 / −2.3). b3 karesi Beyaz piyonlarıyla kovalanamaz ve at buradan d2’ye gelip f1 kalesine ve f3’e saldırabilir.',
      diger: [
        { move: '26...b6', text: 'b7’yi önceden korur (Motor: −2.2): 27.h4 Nb3 28.Rbd1 Nc5.' },
        { move: '26...Nd3', text: '(Motor: −2.1 / −2.3) 27.Bd4 b6 ile at d3’te güçlü.' },
      ],
    },
    '27w': {
      text: '27.Bxb7 ile Beyaz b7 piyonunu alır ve c8 kalesine saldırır.',
      amac: 'Malzeme dengesini kurmak ve tempo kazanmak.',
      neden: 'Motor 27.Bxb7 ve 27.Rbd1’i eşit görüyor (−2.4). Bxb7 malzemeyi geri alır, ama fil b7’de uzakta kalır ve g2 veziriyle b2 filini birlikte korumaz hale gelir; 27...Rd2 bu açığı kullanır.',
      diger: [
        { move: '27.Rbd1', text: 'd-hattını sorgular (Motor: −2.4): 27...Nc5 28.Bf3 Nxa4 29.Bd4.' },
        { move: '27.Be5', text: '(Motor: −2.7) 27...Nd5 28.Rbe1 Qb4.' },
      ],
    },
    '27b': {
      text: '27...Rd2! ile kale ikinci yataya girer ve g2 vezirine, b2 filine saldırır.',
      amac: 'c8 kalesini kurtarmak yerine ikinci yatayı ele geçirmek; Beyazın vezir ve filine aynı anda saldırmak.',
      neden: 'Tek iyi hamle (Motor: −2.5; 27...Rc7 −1.6, 27...Rb8 −1.4). 28.Bxc8? Rxg2+ 29.Kxg2 sonrası Siyah vezir karşılığında kale verir (Motor: −5.1). Beyazın 13.f3 ve 17.f4 ile açtığı ikinci yatay burada cezalandırılır.',
      diger: [
        { move: '27...Rc7', text: 'Kale kaçar (Motor: −1.6): 28.Rfd1 Nd5 29.Bxd5 Rxd5.' },
        { move: '27...Rb8', text: '28.Qe4 Qxe4 29.Bxe4 Nd2 ile oyun sonu (Motor: −1.4).' },
      ],
    },
    '28w': {
      text: '28.Qf3 ile vezir kaçar ve d1’i ve e3’ü korumaya çalışır.',
      amac: 'Veziri saldırıdan kurtarmak ve b7 filini dolaylı korumak.',
      neden: 'Motor 28.Qg3 ve 28.Qg4’ü biraz daha iyi buluyor (−2.7 / −2.9): oradan vezir ...Rc7 sonrası f5 ile şah kanadında karşı oyun arar. 28.Qf3 de yakındır (−2.9); Beyaz vezir için iyi bir kare yoktur.',
      diger: [
        { move: '28.Qg3', text: '28...Rc7 29.f5 Rxb7 30.fxg6 ile karşı oyun (Motor: −2.7).' },
        { move: '28.Qg4', text: '28...Rcd8 29.Be5 Nd3 30.Bg2 (Motor: −2.9).' },
      ],
    },
    '28b': {
      text: '28...Rcd8 ile kaleler d-hattında ikilenir.',
      amac: 'd-hattını tamamen almak ve ikinci yataydaki kaleyi desteklemek.',
      neden: 'Motor bunu en iyi buluyor (−3.3). c8 kalesi b7 filinin saldırısından kurtulur ve d-hattında Rd2’nin arkasına geçer; ...Rd1 gibi değişim tehditleri doğar.',
      diger: [
        { move: '28...Rb8', text: 'Filine saldırır (Motor: −3.2): 29.Be4 Rdd8 30.Qg2 Nd2.' },
        { move: '28...Rc7', text: '29.f5 exf5 30.Qf4 ile Beyaz karşı oyun bulur (Motor: −3.0).' },
      ],
    },
    '29w': {
      text: '29.Be5 ile fil merkezde güçlü bir kareye gelir.',
      amac: 'Kara kareli fili d2 kalesinin saldırısından kurtarmak ve uzun çaprazda g7’ye bakmak.',
      neden: 'En iyi hamle (Motor: −3.4). e5’te fil f4 piyonuyla korunur ve hiçbir Siyah taşı tarafından kolayca kovalanamaz. 29.Qg3 (−3.6) ya da 29.a5 (−3.7) b2 filini korumasız bırakır.',
      diger: [
        { move: '29.Qg3', text: '29...Nd3 30.Ba3 Qxa4 ile Siyah piyon alır (Motor: −3.6).' },
        { move: '29.Ba1', text: 'Fil köşede güvende ama pasif (Motor: −2.7 / −3.4).' },
      ],
    },
    '29b': {
      text: '29...Nc5 ile at c5’e döner ve b7 filine saldırır.',
      amac: 'Beyazın b7 filini kovmak ve atı a4 piyonuna ve d3 karesine yönlendirmek.',
      neden: 'Küçük bir doğruluk kaybı: motor 29...Ra2 (−3.4) ya da 29...Rc2’yi (−3.0) öneriyor, ki ikinci yataydaki kaleler a4’ü toplar ve Beyazı daha da sıkıştırır. 29...Nc5 sonrası değerlendirme −2.3’e iner.',
      diger: [
        { move: '29...Ra2', text: 'a4’e saldırır (Motor: −3.4): 30.Rbd1 Rxd1 31.Rxd1 Qc2.' },
        { move: '29...Rc2', text: '(Motor: −3.0) 30.Rbd1 Nd2 31.Qg2 Rd3.' },
      ],
    },
    '30w': {
      text: '30.Rbc1 ile kale c1’e gelir ve c-hattında vezire karşı durur.',
      amac: 'Siyah vezirini kovalamak ve c-hattını tartışmak.',
      neden: 'En iyi hamle (Motor: −2.7). Kale b1’de işsizdi; c1’de hem vezire baskı yapar hem de ...Nd3 ile bir değişim tehdidine karşı c-hattını tutar. 30.Ba8 (−3.2) pasif kalır.',
      diger: [
        { move: '30.Rfc1', text: '(Motor: −2.9) 30...Rc2 31.Rxc2 Qxc2 32.Qf1.' },
        { move: '30.Ba8', text: 'Fil kaçar (Motor: −3.2): 30...Nb3 31.Be4 Nd3.' },
      ],
    },
    '30b': {
      text: '30...Nc2 ile at c2’ye girer ve e3’e saldırır.',
      amac: 'e3 piyonuna baskıyı artırmak ve c-hattını kapatarak vezirini korumak.',
      neden: 'En iyi hamle (Motor: −2.8). 30...Qb3? ise 31.Rxc5! ile c5 atı düşer (Motor: +2.3), çünkü vezir onu korumayı bırakır. At c2’de hem c-hattını kapatır hem de e3, a3 ve e1 karelerine bakar.',
      diger: [
        { move: '30...Qb3', text: 'Hata: 31.Rxc5 Nd3 32.Rc7 ile Beyaz taş kazanır (Motor: +2.3).' },
        { move: '30...Rc2', text: '31.Rxc2 Nxc2 32.Rb1 Na3 ile at kenara gider (Motor: −2.5).' },
      ],
    },
    '31w': {
      text: '31.Bc6? ile fil c6’ya gelir ve vezirin c-hattını kapatır.',
      amac: 'b7 filini kurtarmak ve c-hattını kapatarak Siyah vezirinin c1’e bakışını engellemek.',
      neden: 'Motor 31.Bc7!’yi öneriyor (−2.8): 31...Nxb7 32.Bxd8 Nxd8 ile d8 kalesi değişir ve Siyahın d-hattı baskısı azalır. 31.Bc6 sonrası (−4.0) Siyah 31...Nb3 ile c1 kalesine saldırabilirdi.',
      diger: [
        { move: '31.Bc7', text: 'd8 kalesine saldırır (Motor: −2.8): 31...Nxb7 32.Bxd8 Nxd8 33.Rcd1.' },
        { move: '31.f5', text: 'Karşı oyun arayışı (Motor: −3.8): 31...exf5 32.Bc7.' },
      ],
    },
    '31b': {
      text: '31...a6 ile Siyah b5 karesini korur.',
      amac: 'Beyazın filinin b5’e gelip c4 vezirine ve d3 karesine saldırmasını önlemek.',
      neden: 'Doğruluk kaybı: motor 31...Nb3!’ü öneriyordu (−4.2): 32.Bb5 Qc5 33.Qe4 Nxc1 ile kale düşer. 31...a6 sonrası değerlendirme −2.0’a iner; Siyah avantajını korur ama yarısını kaybeder.',
      diger: [
        { move: '31...Nb3', text: 'c1 kalesine saldırı (Motor: −4.2): 32.Bb5 Qc5 33.Qe4 Nxc1.' },
        { move: '31...Nxa4', text: '(Motor: −2.5) 32.Bxa4 Qxa4 33.Rf2 Qb3.' },
      ],
    },
    '32w': {
      text: '32.Rf2 ile kale f2’de ikinci yatayı savunur ve d2 kalesine karşı durur.',
      amac: 'Siyah kalesini ikinci yataydan çıkarmak ya da değişimle etkisizleştirmek.',
      neden: 'Motor 32.Bc7’yi öneriyor (−2.2): 32...Rc8 33.Ba5 ile fil d8 kalesini kovar. 32.Rf2 (−3.0) mantıklı ama f1 kalesini c1’deki kaleden uzaklaştırır ve ...Nb3 ile c1 hedef olur.',
      diger: [
        { move: '32.Bc7', text: '32...Rc8 33.Ba5 Re2 34.Rf2 ile Beyaz biraz rahatlar (Motor: −2.2).' },
        { move: '32.f5', text: '32...exf5 33.Bc7 Rc8 (Motor: −3.6).' },
      ],
    },
    '32b': {
      text: '32...Nb3 ile at yeniden b3’e gelir ve c1 kalesine saldırır.',
      amac: 'Beyazın c1 kalesini kovalamak ve d2 kalesini desteklemek.',
      neden: 'En iyi hamle (Motor: −3.1). 32...Qb3 (−2.0) ya da 32...Qb4 (−2.7) daha zayıf. At b3’ten hem c1’i hem d2’yi korur; Beyaz 33.Rxd2 ile değiştirse bile Siyahın baskısı sürer.',
      diger: [
        { move: '32...Qb4', text: '(Motor: −2.7) 33.Rcf1 Qb3 34.Bc7.' },
        { move: '32...Qb3', text: '33.Bc7 R8d3 34.Rxd2 ile Beyaz değişim yapar (Motor: −2.0).' },
      ],
    },
    '33w': {
      text: '33.Rcf1? ile kale f1’e gelir ve f2 kalesini destekler.',
      amac: 'c1 kalesini kurtarmak ve f-hattında kaleleri ikilemek.',
      neden: 'Motor 33.Rxd2!’yi öneriyor (−3.2): 33...Rxd2 34.Rd1 Rxd1+ 35.Qxd1 ile Siyahın en tehlikeli taşı değişir. 33.Rcf1 sonrası (−4.8) d2 kalesi yerinde kalır ve Siyah 33...Qc5 ile e3’e baskı yapabilir.',
      diger: [
        { move: '33.Rxd2', text: 'Kaleyi değişmek (Motor: −3.2): 33...Rxd2 34.Rd1 Rxd1+ 35.Qxd1.' },
        { move: '33.Rb1', text: '33...Rxf2 34.Kxf2 Nd2 ile at kaleye saldırır (Motor: −4.5).' },
      ],
    },
    '33b': {
      text: '33...Nb4 ile at b4’e döner ve c6 filine saldırır.',
      amac: 'c6 filini kovalamak ve ...Nd3 ile e5 filine ve f2 kalesine saldırı hazırlamak.',
      neden: 'Motor 33...Qc5’i öneriyordu (−5.1): 34.Bc7 R8d3 ile e3 düşer. 33...Nb4 de güçlü (−3.3) ve c6 filini b5 ve d5’ten yoksun bırakır. Bu, Beyazı 34. hamlede zor bir karara zorlar.',
      diger: [
        { move: '33...Qc5', text: 'e3’e baskı (Motor: −5.1): 34.Bc7 R8d3 35.a5 Rxf2.' },
        { move: '33...Rxf2', text: '(Motor: −4.0) 34.Rxf2 Ne1 35.Qe2 Qc1.' },
      ],
    },
    '34w': {
      text: '34.Qe4? ile vezir b4 atına ve c4 vezirine saldırır, ama c6 filini korumasız bırakır.',
      amac: 'Vezir değişimi önermek ve b4 atını kazanmak.',
      neden: 'Motor 34.Bb7’yi öneriyor (−3.4): fil kaçar ve 34...Nd3 35.Rg2 ile Beyaz direnir. 34.Qe4 sonrası (−4.5) 34...Qxc6! ile fil düşer, sonra Beyaz b4 atını alır ama Siyahın taşları şaha ulaşır.',
      diger: [
        { move: '34.Bb7', text: 'Fil kaçar (Motor: −3.4): 34...Nd3 35.Rg2 a5 36.Kh1.' },
        { move: '34.Ba8', text: '(Motor: −4.0) 34...Nd3 35.Qc6.' },
      ],
    },
    '34b': {
      text: '34...Qxc6! ile Siyah fili alır.',
      amac: 'Vezirleri tutarak taş kazanmak; b4 atını Beyaza bırakıp karşılığında f2 ve e3’e saldırmak.',
      neden: 'Motor 34...Qxc6 ve 34...Qc5’i eşit görüyor (−4.6). 34...Qxe4? 35.Bxe4 Rxf2 36.Rxf2 Nc5 sonrası vezirler gider ve avantajın tamamı kaybolur (Motor: −0.1). Doğru alış sırası, vezirleri tutup Beyaz şahının açıklığını kullanmaktır.',
      diger: [
        { move: '34...Qxe4', text: 'Hata: 35.Bxe4 Rxf2 36.Rxf2 Nc5 37.Bc2 ile oyun dengeye gelir (Motor: −0.1).' },
        { move: '34...Qc5', text: '35.Bb7 Nd3 36.Bxa6 Rxf2 ile aynı güçte (Motor: −4.6).' },
      ],
    },
    '35w': {
      text: '35.Qxb4 ile Beyaz b4 atını alır.',
      amac: 'Malzeme dengesini kurmak.',
      neden: '35.Qxc6 Nxc6 (−4.6) de aynı değerdedir; Beyazın iyi seçeneği yoktur. Qxb4 sonrası vezir b4’te uzakta kalır ve şah savunmasız.',
      diger: [
        { move: '35.Qxc6', text: '35...Nxc6 36.Bc7 Rc8 37.Bb6 ile oyun sonu (Motor: −4.6).' },
        { move: '35.Rxd2', text: '35...Nxd2 36.Qxc6 Nxc6 ile Siyah bir taş önde (Motor: −5.1).' },
      ],
    },
    '35b': {
      text: '35...Rxf2 ile kaleler değişir.',
      amac: 'f2’deki savunucuyu ortadan kaldırmak ve ...Qc1+ ile vezirin birinci yataya girmesine yol açmak.',
      neden: 'En iyi hamle (Motor: −4.6). 35...R2d3 (−4.0) da iyi, ama 35...Qd5? (−2.2) zaman kaybıdır. Değişimden sonra f-hattı Beyazın kalesiyle meşgul olur ve c1 karesi açılır.',
      diger: [
        { move: '35...R2d3', text: '(Motor: −4.0) 36.Rb2 Nd2 37.Qb7.' },
        { move: '35...Qd5', text: '36.Qb6 Rd3 37.Rb1 ile Beyaz toparlanır (Motor: −2.2).' },
      ],
    },
    '36w': {
      text: '36.Rxf2 ile kale geri alır.',
      amac: 'Malzeme dengesini korumak.',
      neden: 'Zorunlu. 36.Kxf2 Nd2 37.e4 Nxf1 sonrası Siyah kale kazanır (Motor: −5.8); 36.Qf8+?? Kxf8 ise mat ile biter.',
      diger: [
        { move: '36.Kxf2', text: '36...Nd2 37.e4 Nxf1 ile Siyah kale kazanır (Motor: −5.8).' },
      ],
    },
    '36b': {
      text: '36...Qc1+! ile vezir şah çekerek Beyazın arka yatayına girer.',
      amac: 'Tempo ile e3 piyonuna ulaşmak: Qc1+ sonra Qxe3.',
      neden: 'En iyi hamle (Motor: −4.6). 36...Rd1+ 37.Rf1 (−2.9) ya da 36...Nd2 (−3.2) daha zayıf. Şah çekmek, vezirin aynı anda e3’e yaklaşmasını sağlar; Beyazın şah kaçacak tek iyi karesi g2’dir.',
      diger: [
        { move: '36...Rd1+', text: '37.Rf1 Rxf1+ 38.Kxf1 ile kaleler değişir (Motor: −2.9).' },
        { move: '36...Nd2', text: '37.Kh2 Nf3+ 38.Kg3 Nxe5 (Motor: −3.2).' },
      ],
    },
    '37w': {
      text: '37.Kg2 ile şah g2’ye gider.',
      amac: 'Şahı birinci yataydan çıkarmak ve f2 kalesini korumak.',
      neden: 'En iyi hamle (Motor: −4.7). 37.Kh2 Qxe3 (−5.7) f2 kalesini korumasız bırakır; 37.Rf1 Qxe3+ (−6.2) ise şah çekme ile e3’ü kaybettirir.',
      diger: [
        { move: '37.Kh2', text: '37...Qxe3 38.Rc2 Nd4 ile Siyah kazanır (Motor: −5.7).' },
        { move: '37.Rf1', text: '37...Qxe3+ 38.Kg2 Rd3 (Motor: −6.2).' },
      ],
    },
    '37b': {
      text: '37...Qxe3! ile zayıf e3 piyonu düşer.',
      amac: 'Bir piyon kazanmak ve veziri f2 kalesine ve e5 filine aynı anda saldıracak şekilde merkeze yerleştirmek.',
      neden: 'Açık farkla en iyi (Motor: −4.6; 37...Nc5 −2.6, 37...Qd1 −1.1). Vezir e3’ten f2’ye, e5’e ve f4’e bakar; 13.f3 ve 17.f4 ile zayıflayan piyon sonunda alınır.',
      diger: [
        { move: '37...Nc5', text: '38.Re2 Qd1 39.Qe1 ile Beyaz savunur (Motor: −2.6).' },
        { move: '37...Qd1', text: '38.Qc4 Nd2 ile Beyaz toparlanır (Motor: −1.1).' },
      ],
    },
    '38w': {
      text: '38.Qb7 ile vezir a6 piyonuna saldırır.',
      amac: 'Karşı oyun aramak ve vezir kanadında geçer piyon yaratmak.',
      neden: 'Motor 38.Bd6’yı öneriyor (−4.6): fil ...Nd4 sonrası c5’e gelir ve savunmaya katılır. 38.Qb7 (−5.8) veziri daha da uzaklaştırır ve Siyahın 38...Nd2’sine karşı savunmasız kalır.',
      diger: [
        { move: '38.Bd6', text: '38...Nd4 39.Bc5 Rd5 ile Siyah yine kazanır (Motor: −4.6).' },
        { move: '38.f5', text: '38...Qxe5 39.fxg6 Qd5+ (Motor: −5.2).' },
      ],
    },
    '38b': {
      text: '38...Nd2! ile at e4 ve f3 karelerine yönelir. Carlsen terk etti.',
      amac: '...Ne4 ile f2 kalesine ikinci kez saldırmak (vezir e3 zaten saldırıyor) ve e5 filini de hedef almak.',
      neden: 'En iyi hamle (Motor: −5.8). 39.Rf3 Nxf3 40.Qxf3 Qd2+ kale kaybettirir; 39.Bd4 Qxd4 fili kaybettirir; 39.Bd6 Ne4 40.Rb2 Qg3+ 41.Kf1 Nxd6 ile Siyah bir taş önde kalır (Motor: −5.4 / −6.0). Beyazın b7’deki veziri savunmaya uzaktır.',
      diger: [
        { move: '38...Nc1', text: '39.Qf3 Qc5 ile at d3’e döner (Motor: −3.3).' },
        { move: '38...Qd3', text: '39.Qf3 Qc4 ile Beyaz biraz direnir (Motor: −3.2).' },
      ],
    },
  },
  exercises: [
    { id: 'cge-1', kind: 'tekrar', plan: false, title: 'Kale ikinci yataya',
      source: 'Carlsen – Gelfand, Moskova 2006 (27. hamle)',
      fen: '2rr2k1/pB3pp1/4p1p1/6P1/Pnq2P2/1n2P2P/1B4Q1/1R3RK1 b - - 0 27',
      prompt: 'Beyaz b7 piyonunu aldı ve filiyle c8 kalesine saldırıyor. Siyahın kaleleri c- ve d-hatlarında, d-hattı ise tamamen açık. Hamle sizde.',
      hint: 'd-hattındaki kale nereye kadar gidebilir ve orada nelere saldırır?',
      line: ['Rd2'],
      explanation: '**27...Rd2!** Kale ikinci yataya girer ve hem g2 vezirine hem b2 filine saldırır; c8 kalesinin tehlikede olması önemli değildir, çünkü 28.Bxc8? Rxg2+ 29.Kxg2 sonrası Siyah vezir karşılığında kale verir (motor −5.1). Motor: ...Rd2 −2.6, sonraki en iyi ...Rc7 −1.6.',
      link: 'Beyazın g4-f4 ilerleyişleri ikinci yatayı savunmasız bıraktı; açık d-hattı Siyahın kalesine yol açtı.' },
    { id: 'cge-2', kind: 'tekrar', plan: false, title: 'e3 piyonunu almak',
      source: 'Carlsen – Gelfand, Moskova 2006 (36. hamle)',
      fen: '3r2k1/5pp1/p1q1p1p1/4B1P1/PQ3P2/1n2P2P/5R2/6K1 b - - 0 36',
      prompt: 'Kaleler değişti. Beyazın şahı açık ve e3 piyonunu hiçbir taş korumuyor. Siyahın veziri c6’da. Hamle sizde.',
      hint: 'Vezir şah çekerek Beyazın arka yatayına girebilir mi? Sonra hangi piyon düşer?',
      line: ['Qc1+', 'Kg2', 'Qxe3'],
      explanation: '**36...Qc1+! 37.Kg2 Qxe3** Vezir şah çekerek içeri girer ve e3 piyonunu alır; şimdi f2 kalesi ve beyaz şah hedefte. Motor: ...Qc1+ −4.5, sonraki en iyi ...Rd1+ −3.2; 37...Qxe3 de açık farkla en iyi.',
      link: 'Oyunun başında f3 ve f4 ile zayıflayan e3 piyonu sonunda Siyahın veziri tarafından alındı.' },
    { id: 'cge-3', kind: 'transfer', plan: false, title: 'Kale ikinci yatayda',
      source: 'Tabatadze – Shirov, Frunze açık turnuvası 1989 (22. hamle)',
      fen: 'r5k1/pbq2p1p/3R1p2/2p5/Np6/8/PPQ1BPrP/3R1K2 b - - 1 22',
      prompt: 'Siyahın kalesi g2’de, ikinci yatayda duruyor. Beyazın şahı f1’de, kaleleri d-hattında. Siyahın en güçlü devamı nedir?',
      hint: 'İkinci yataydaki kale bir piyon alıp beyaz şahın yakınında yeni tehditler yaratabilir.',
      line: ['Rxh2'],
      explanation: '**22...Rxh2!** Kale ikinci yatayda bir piyon daha alır ve ...Rh1+ tehdidi doğar; b7 fili de uzun çaprazdan f3 ve h1’e bakar. Motor: ...Rxh2 −3.4, sonraki en iyi ...Re8 −0.2.',
      link: 'Gelfand kalesini d2’ye sokup ikinci yataydaki taşlara saldırdı; Shirov da ikinci yataydaki kalesiyle şahın önündeki piyonları topladı.' },
    { id: 'cge-4', kind: 'transfer', plan: false, title: 'Şahlarla e3’e',
      source: 'Polugayevski – Ivanchuk, Biel 1989 (41. hamle)',
      fen: '4r1k1/pp5p/2p2qpQ/2R3R1/P7/4P3/3K1P2/8 b - - 0 41',
      prompt: 'Beyazın veziri h6’da ve kaleleri saldırıya hazır. Beyaz şah d2’de, f2 ve e3 piyonlarıyla korunuyor. Siyahın veziri f6’da. Hamle sizde.',
      hint: 'Vezir şah çekerek piyonları birer birer alabilir mi?',
      line: ['Qxf2+', 'Kc1', 'Qxe3+'],
      explanation: '**41...Qxf2+! 42.Kc1 Qxe3+** Vezir şah çekerek önce f2’yi, sonra e3’ü alır; beyaz şah açıkta kalır ve Siyahın saldırısı belirleyici olur. Motor: ...Qxf2+ −3.5, sonraki en iyi ...Qb2+ +2.7; 42...Qxe3+ de açık farkla en iyi.',
      link: 'Gelfand 36...Qc1+ ve 37...Qxe3 ile şah çekip e3’ü aldı; Ivanchuk da şahlarla f2 ve e3 piyonlarını toplayarak şahı açığa çıkardı.' },
  ],
};
