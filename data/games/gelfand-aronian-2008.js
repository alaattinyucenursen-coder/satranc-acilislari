// Gelfand – Aronian, Corus A, Wijk aan Zee 2008. Kaynak: PgnMentor (Aronian.pgn).
export default {
  id: 'gelfand-aronian-2008',
  theme: '...e5 kırılması ve merkezde kalan şaha karşı geçer d-piyonu',
  white: 'Boris Gelfand', black: 'Levon Aronian',
  whiteShort: 'Gelfand', blackShort: 'Aronian',
  event: 'Corus turnuvası, A grubu', site: 'Wijk aan Zee', year: 2008, eco: 'D15',
  variation: 'Slav Savunması, Chebanenko varyantı, 6.c5 ve ...e5',
  result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 a6 5. Nc3 b5 6. c5 Nbd7 7. Bd3 e5 8. Nxe5 Nxe5 9. dxe5 Ng4 10. f4 Bxc5 11. Qf3 Qb6 12. Ke2 Nh6 13. h3 Nf5 14. g4 Ne7 15. Bd2 O-O 16. Rac1 f6 17. exf6 Rxf6 18. e4 Bd4 19. exd5 cxd5 20. Kd1 Rf7 21. Re1 Bb7 22. Qe2 Ng6 23. Bxg6 hxg6 24. Qe6 Rd8 25. Qxb6 Bxb6 26. Re6 Ba7 27. Ne2 d4 28. Ng3 d3 29. Rxg6 Bf2 30. Ba5 Bxg3 0-1`,

  summary: 'Corus 2008’in 2. turunda (13 Ocak 2008) Aronian siyahlarla Gelfand’ı yendi; bu galibiyet, turnuvayı Carlsen’le birlikte 8/13 puanla birinci bitirmesinin yapı taşlarından biriydi. Chebanenko varyantında Gelfand 6.c5 ile vezir kanadını kilitledi. Aronian bu kilidi **7...e5!** kırılmasıyla çözdü: değişimlerden sonra c5 piyonunu **10...Bxc5** ile geri aldı ve fil a7-g1 çaprazından e3’e baskı kurdu. Beyaz şahı rok yapamadı (12.O-O? Bxe3+ kalite kaybettirirdi) ve **12.Ke2** ile merkezde kaldı. ChessBase’in raporuna göre Aronian’ın hazırlığı derindi ve **13...Nf5** yeni hamleydi. Siyah 16...f6! ile Beyazın e5 piyonunu söktü, f-hattını açtı ve merkezde d5 piyonuyla kaldı. Gelfand 22.Qe2 ile vezir değişimine yöneldi, ama değişimden sonra Siyahın iki fili ve **geçer d-piyonu** kaldı. 27...d4 ve 28...d3 ile piyon Beyaz şahının burnunun dibine geldi; Gelfand zaman sıkıntısında **29.Rxg6??** ile g3 atını korumasız bıraktı, **29...Bf2!** ile at düştü ve Beyaz terk etti.',
  intro: '4...a6 Chebanenko hamlesidir: Siyah önce ...b5 ile c4 piyonuna baskı kurmak, vezir kanadında alan almak ister ve c8 filini nereye geliştireceğine sonra karar verir. 4.e3’lü sistemde Beyazın iki ana yolu vardır: piyonu c4’te tutup b3 ile desteklemek ya da **c4-c5** ile kilitlemek. Gelfand 6.c5’i seçti: bu hamle ...dxc4 fikrini ortadan kaldırır, b6 karesini zayıflatır ve Siyahın piyonlarını b5-c6-d5’te sabitler. Ama kilidin bir bedeli vardır: c5 piyonu yalnızca d4 tarafından korunur. Mihail Marin’in ChessBase’teki analizine göre Aronian 6...Bg4 yerine 6...Nbd7 ile fili esnek tuttu ve kilide karşı tematik piyon kırılmasını kendisi yaptı: **...e5**. d4 piyonu değişince c5 desteksiz kalır ve Siyah onu geri alır; bu sırada Beyazın e3 piyonu ve rok yapamayan şahı yeni hedefler olur.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '6.c5 ile vezir kanadında alan kazanmak, ...dxc4’ü engellemek ve Siyahın b5-c6-d5 piyonlarını sabit hedeflere çevirmek; ileride a4 ile b5’i sorgulamak.',
      '...e5 kırılmasından sonra e5’e gelen piyonu f4 ile tutmak; böylece Siyah atını e5’ten uzak tutup şah kanadında alan kazanmak (h3, g4).',
      'a7-g1 çaprazındaki fil e3’e baktığı için rok yapamayan şahı önce e2’de tutmak, sonra d1-c2-b1 yoluyla vezir kanadına taşımak (Marin’e göre Steinitz bu hamleden hoşlanırdı).',
      'e4 ile geri kalmış e3 piyonundan kurtulmak, merkezi açıp d5 piyonunu tek bırakmak ve e-hattına kale yerleştirmek.',
      'Vezir değişimiyle şahı güvene almak; değişimden sonra kaleyle e6’ya girip g6 ve a6 piyonlarına baskı kurmak.',
      'Atı g3-e4 üzerinden merkeze getirip d-piyonunu durdurmak (29.Ne4 doğruydu); taşların birbirini koruduğu bir düzen kurmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...e5** kırılmasıyla c5’i destekleyen d4 piyonunu ortadan kaldırmak ve c5’i **...Bxc5** ile geri almak.',
      'Fili a7-g1 çaprazına, veziri b6’ya yerleştirip e3’e iki kat baskı kurmak; böylece Beyazın rok yapmasını engellemek.',
      'Atı h6-f5-e7-g6 yoluyla yeniden düzenlemek: f5’ten e3 ve d4’e baskı, sonra g6’dan f4 ve e5’e.',
      '**...f6!** ile e5 piyonunu söküp f-hattını açmak (Marin’in deyişiyle Nimzowitsch ilkesi: hareketli piyon grubuna saldırılmalıdır).',
      'Beyaz e4 ile merkezi açınca ...cxd5 ile güçlü bir merkez piyonu tutmak ve ...Bb7 ile onu desteklemek; Bd4 ile c3 atını bağlamak.',
      'Vezirler değişince fil çifti ve **geçer d-piyonuyla** oynamak: ...d4, ...d3; piyonu Beyaz şahının önüne kadar götürüp taşlarını bağlamak.',
      'Beyaz taşları dağılınca fillerle şah çekme ve mat motifleri bulmak (...Bf2, ...Bf3+).',
    ] },
  },
  critical: [
    { move: '7b', title: '7...e5! kilidi kırmak', text: 'Siyah 6.c5 ile kurulan kilidi merkezden kırar. d4 piyonu değişince c5 piyonunun desteği kalmaz ve Siyah onu geri alabilir. Motor ...e5’i açık ara en iyi hamle buluyor (+0.1); sakin 7...g6 ve 7...Qc7 +0.5 / +0.8 civarında, çünkü Beyaz rok yapıp e4 ile merkezi açmaya hazırdır. Marin’e göre Aronian ...Bg4’ü bilerek ertelemiş ve kırılmayı kendisi yapmıştı.' },
    { move: '10b', title: '10...Bxc5: piyon geri alındı, e3 hedefte', text: 'Siyah piyonunu geri alır ve fil a7-g1 çaprazına yerleşir. Bu fil e3’e baktığı için Beyaz rok yapamaz: 12.O-O? Bxe3+ 13.Kh1 Nf2+ 14.Rxf2 Bxf2 sonrası Siyah kalite kazanır (Motor: −0.4). Bu yüzden Gelfand 12.Ke2 ile şahını merkezde tuttu. Bu andan itibaren oyunun ana teması Beyaz şahının güvenliği oldu.' },
    { move: '13b', title: '13...Nf5: hazırlanmış yeni hamle', text: 'ChessBase’in raporuna göre 13...Nf5 Aronian’ın hazırladığı yenilikti ve “çok keskin” bir konum doğurdu. At e3 ve d4’e bakar; Beyaz onu kovalamak için 14.g4 oynamak zorunda kalır, bu da şah kanadındaki piyonlarını daha da ilerletir. Motor 13...a5 ile 13...Nf5’i yaklaşık eşit buluyor (+0.2 / +0.3).' },
    { move: '16b', title: '16...f6! e5 piyonunu sökmek', text: 'Beyazın e5-f4-g4 piyonları şah kanadında alan veriyordu. Siyah 16...f6 ile bu zinciri hemen sorgular; Marin bu hamleyi “!” ile işaretleyip Nimzowitsch’in hareketli piyon grubuna saldırılması ilkesine bağlar. 17.exf6 Rxf6 sonrası f-hattı açılır, Siyahın kalesi oyuna girer ve e3 piyonu geri kalmış olur. Motor: −0.6, Siyah hafif üstün.' },
    { move: '22w', title: '22.Qe2: şah mı, vezir değişimi mi?', text: 'Beyaz şahını 22.Kc2 ile b1’e taşıyabilirdi; motor bu hamleyi en iyi buluyor (0.0). Marin ise 22.Kc2 Bxc3 23.Bxc3 d4 24.Qf2 Nd5 ile Siyahın girişim alacağını yazar (motor bu çizgide 25.Bd2’yi bulup Beyazı biraz önde görüyor, +0.5). Gelfand 22.Qe2 ile vezir değişimini seçti; ama 22...Ng6 23.Bxg6 hxg6 24.Qe6 Rd8 25.Qxb6 Bxb6 sonrası iki fil ve d-piyonu Siyaha kalıcı üstünlük verdi (Motor: −0.8).' },
    { move: '27b', title: '27...d4! geçer piyon yürüyor', text: 'Vezirler değişti, Beyaz şahı d1’de. Siyah d-piyonunu ilerletir; piyon atın d4 karesini elinden alır, c3 ve e3’ü kontrol eder ve d3’e kadar gidecektir. Marin, fillerin şimdilik “mütevazı” göründüğünü ama d-piyonu ilerleyince Beyazın şah kanadına “yıkıcı” baskı yapacağını yazar. Motor: −0.8; 27...Rfd7 ve 27...Bf2 ise yaklaşık eşit.' },
    { move: '29w', title: '29.Rxg6?? uzaktaki kale', text: 'Beyaz bir piyon alır, ama kale merkezden uzaklaşır ve g3 atını koruyan kimse kalmaz. Marin’e göre Gelfand şahının Siyah fillerin etki alanında olduğunu gözden kaçırdı; ChessBase’in raporuna göre zaman sıkıntısındaydı. Motor 29.Ne4’ü öneriyordu (−0.7): at d2-c3 karelerini korur ve Bb7’nin çaprazını kapatır. Maç hamlesinden sonra değerlendirme −4.8.' },
    { move: '29b', title: '29...Bf2! at bağlandı', text: 'Fil g3 atına saldırır ve atın gidebileceği karelerin çoğunda ...Bf3 mattır, çünkü şahın kaçacağı d2’de kendi fili, c1’de kalesi durur ve e1’i f2 fili kontrol eder (Marin: at ...Bf3 mat yüzünden oynayamaz). 30.Ne4 ise Bxe4 ile düşer. Gelfand 30.Ba5 ile d2’yi boşalttı, ama 30...Bxg3 31.Bxd8 Bf3+ 32.Kd2 Bxf4+ 33.Kxd3 Rd7+ 34.Kc3 Bxc1 sonrası Siyah bir taş fazlasıyla kalır (Motor: −5.0). Gelfand terk etti.' },
  ],
  lessons: [
    'Chebanenko’da (ve genel olarak Slav’da) Beyaz c4-c5 ile kilitlerse Siyahın ana silahı çoğu zaman **...e5** kırılmasıdır: c5’i koruyan tek piyon d4’tür; o değişince c5 düşer.',
    'Kırılmanın zamanlaması önemlidir: Aronian ...e5’i Beyaz rok yapmadan ve e4 oynamadan yaptı, bu yüzden değişimlerden sonra Beyaz şahı merkezde kaldı.',
    'a7-g1 çaprazındaki bir fil, e3 zayıfsa rakibin rok yapmasını engelleyebilir (12.O-O? Bxe3+). Rok yapamayan şah her taktik hesapta ek bir yük olur.',
    'Rakip şah kanadında piyonlarla alan kazanınca bu piyonlara hemen saldırmak gerekir (16...f6!): açılan hat, geride kalan piyon ve aktif kale kazanç olarak kalır.',
    'Vezir değişimi merkezdeki şahı güvene alır, ama fil çifti ve geçer piyon oyun sonunda daha da güçlenir. Değişime gitmeden önce kalan oyun sonunu değerlendirmek gerekir.',
    'Geçer piyon ilerledikçe rakibin taşlarını bağlar; şah piyonun önünde durunca küçük bir dikkatsizlik (29.Rxg6??) fil çiftine mat ve taş kazanma motifleri verir.',
    'Zaman sıkıntısında “açgözlü” piyon almadan önce şu soruyu sor: aldığım taşı alan taşım nereden uzaklaşıyor ve neyi korumasız bırakıyor?',
  ],
  qa: [
    { q: 'Beyaz neden 6.c5 oynadı ve bunun bedeli neydi?', a: '6.c5 Siyahın ...dxc4 ve ...b5-b4 fikirlerini yavaşlatır, vezir kanadında alan verir ve b6 karesini zayıflatır. Bedeli şuydu: c5 piyonunu yalnızca d4 korur ve merkezde bir hareket yapılırsa o destek kaybolur. Motor 6.b3’ü biraz daha iyi buluyor (+0.4); 6.c5 +0.35 ile yine sağlam. Aronian’ın 7...e5’i tam olarak bu zaafı hedef aldı.' },
    { q: 'Siyah neden 6...Bg4 değil de 6...Nbd7 oynadı?', a: 'Marin’in analizine göre 6...Bg4 sık oynanır, ama fil vezir kanadından ayrılınca Beyaz a4 ile b5’e baskı kurup orada taş fedasıyla iki bağlı geçer piyon elde etme fikrine sahip olur. 6...Nbd7 ile Siyah fili esnek tutar ve e5 karesini destekler. Motor da 6...Nbd7’yi (+0.4) 6...Bg4’ten (+0.65) iyi buluyor.' },
    { q: 'Beyaz neden 12. hamlede rok yapmadı?', a: 'Çünkü c5 fili ve b6 veziri e3’e bakıyordu ve g4 atı da f2’ye sıçramaya hazırdı. 12.O-O? Bxe3+ 13.Kh1 Nf2+ 14.Rxf2 Bxf2 ile Siyah kalite kazanır (Motor: −0.4). 12.Ke2 e3’ü şahla korur; motor bunu (+0.3 / +0.6) 12.Nd1 ile birlikte en iyi hamleler arasında görüyor. Ama şah merkezde kaldı ve oyunun geri kalanında Beyazın baş derdi oldu.' },
    { q: '16...f6’nın amacı neydi, 17...gxf6 neden kötü olurdu?', a: '16...f6 Beyazın e5-f4-g4 piyon zincirinin başını hedef alır. 17.exf6 Rxf6 sonrası f-hattı açılır, Siyah kalesi aktifleşir ve Beyazın e3 piyonu geri kalmış hale gelir. 17...gxf6? ise Siyahın kendi şahının önünü açardı ve g4-f5 ile Beyaz piyonları ona yaklaşırdı; motor bu durumda Beyazı +0.8 önde görüyor, maç hamlesi ise −0.5.' },
    { q: 'Beyazın vezir değişimine gitmesi doğru muydu?', a: 'Motora göre değil: 22.Kc2 (yaklaşık 0.0) şahı b1’e taşıyıp vezirleri tahtada tutuyordu. 22.Qe2 Ng6 23.Bxg6 hxg6 24.Qe6 sonrası değişim zorunlu hale geldi ve Siyah iki fil ve geçer d-piyonuyla −0.8’lik bir oyun sonu elde etti. Marin ise 22.Kc2 Bxc3 23.Bxc3 d4 24.Qf2 Nd5 ile Siyahın girişim alacağını yazar; burada motor 25.Bd2 ile Beyazın tutunabildiğini gösteriyor.' },
    { q: 'Siyahın avantajı tam olarak nereden geldi?', a: 'Üç etkenden: (1) ...e5 ve ...Bxc5 ile Beyazın vezir kanadı kilidi işe yaramaz hale geldi ve Beyaz şahı merkezde kaldı; (2) ...f6 ile açılan f-hattı ve e4 sonrası doğan d5 geçer piyonu; (3) vezirler değişince iki fil. a7 fili g1’e, b7 fili h1 köşesine kadar uzanan çaprazlarda Beyaz şahının kaçış karelerini kontrol ediyordu.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'Son ve en net an 29. hamleydi: 29.Ne4! Bd5 30.Rd6 ile at merkezde d-piyonunu durdurur ve b7 filinin f3 çaprazını kapatır; motor −0.7 diyor, yani Beyaz ciddi sıkıntıda olsa da oyun sürerdi. Daha önce 27.a3 (−0.6, atı a2-c3 yoluyla getirmek) ve özellikle 22.Kc2 (yaklaşık 0.0) daha iyi direniş sunuyordu.' },
    { q: '29...Bf2’den sonra Beyaz neden atı kaçıramadı?', a: 'Şah d1’de, d2’de kendi fili, c1’de kendi kalesi var ve e1’i f2 fili kontrol ediyor. At g3’ten ayrılınca (Nf5, Nh5, Nf1 gibi) ...Bf3 mat olur. 30.Ne4 Bxe4 ile at düşer, 30.Ne2 ise dxe2+ ile. Gelfand 30.Ba5 ile d2’yi boşalttı, ama 30...Bxg3 31.Bxd8 Bf3+ 32.Kd2 Bxf4+ 33.Kxd3 Rd7+ 34.Kc3 Bxc1 ile Siyah bir fil fazlasıyla kalır.' },
    { q: 'Aronian bu oyunda hata yaptı mı?', a: 'Büyük bir hata yok, ama motor bazı küçük kusurlar görüyor: 11...Qb6 (+0.6) yerine 11...Nh6 ya da 11...f6 (+0.4) biraz daha kesindi ve 18...Bd4 (−0.1) yerine 18...Bb7 (−0.7) avantajı koruyordu. 28...d3 de 28...Bd5’e (−1.2) göre biraz aceleciydi. Beyaz bu fırsatları kullanamadı ve zaman sıkıntısında hata yaptı.' },
  ],
  sources: [
    { title: 'ChessBase: Wijk R02 – Carlsen and Aronian score again (Steve Giddins)', url: 'https://en.chessbase.com/post/wijk-r02-carlsen-and-aronian-score-again' },
    { title: 'ChessBase: Oh the intensity... Wijk round two analysis (GM Mihail Marin)', url: 'https://en.chessbase.com/post/oh-the-intensity-wijk-round-two-analysis' },
    { title: 'Wikipedia: Corus Chess Tournament 2008', url: 'https://en.wikipedia.org/wiki/Corus_Chess_Tournament_2008' },
    { title: 'ChessBase: Viktor Bologan – Chebanenco still improved (inceleme)', url: 'https://en.chessbase.com/newsroom/post/viktor-bologan-chebanenco-still-improved-review?page=0' },
    { title: 'Modern Chess: GM Repertoire against the Slav, part 3 – Squeeze the Chebanenko Slav', url: 'https://www.modern-chess.com/course/gm-repertoire-against-the-slav-part-3-squeeze-the-chebanenko-slav/87632/' },
  ],
  notes: {
    '1w': {
      text: 'Gelfand vezir piyonuyla açar ve merkezde e5 ile c5 karelerini kontrol eder.',
      amac: 'Merkezi kurup c2-c4 ile Vezir Gambiti yapılarına geçmek.',
      neden: 'Gelfand kariyeri boyunca ağırlıklı olarak 1.d4 oynadı; kapalı oyunlardaki stratejik mücadele onun tarzıdır. Motor 1.d4, 1.e4 ve 1.Nf3’ü eşit görüyor (+0.25 civarı).',
      diger: [
        { move: '1.e4', text: 'Açık oyunlara gider; Aronian’ın Ruy Lopez ve Marshall bilgisine karşı oynanırdı. Motor: +0.3.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; çoğu zaman aynı yapılara geçer. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: 'Siyah d5 ile merkeze klasik karşılık verir.',
      amac: 'd4 piyonunun karşısında durmak ve e4 ilerlemesini engellemek.',
      neden: 'Aronian 1.d4’e karşı Slav yapılarını sık oynayan bir oyuncuydu. 1...d5 ile Slav ve Vezir Gambiti Reddi yolları açık kalır.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmaları (Nimzo, Grünfeld); motor 1...d5 ile eşit görür (+0.3).' },
      ],
    },
    '2w': {
      text: 'Vezir Gambiti: c4 piyonu d5’e saldırır.',
      amac: 'd5 piyonunu merkezden uzaklaştırmak ya da Siyahı onu korumak için bir taviz vermeye zorlamak.',
      neden: 'cxd5 tehdidiyle Siyahın merkezini sorgulamak 1.d4’ün en prensipli devamıdır.',
      diger: [
        { move: '2.Nf3', text: 'Önce at gelişir; Slav’a ve Grünfeld’e karşı hamle sırası oyunları içindir. Motor: +0.4.' },
        { move: '2.Bf4', text: 'Londra sistemi; daha sakin ama teorik baskı daha az.' },
      ],
    },
    '2b': {
      text: 'Slav Savunması: d5 c-piyonuyla desteklenir.',
      amac: 'Merkezi korurken c8 filinin önünü kapatmamak (2...e6’dan farkı budur).',
      neden: 'Slav’da Siyah, Vezir Gambiti Reddi’nin “kötü fil” sorununu yaşamaz. Ayrıca ...dxc4 ve ...b5 ile piyon tutma fikirleri yapıya gömülüdür. Motor 2...c6’yı en iyi seçenek olarak görüyor (+0.24).',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi; sağlam ama c8 fili geç gelişir. Motor: +0.34.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü; merkezi geçici olarak bırakır. Motor: +0.33.' },
      ],
    },
    '3w': {
      text: 'At gelişir, e5 karesine bakar ve d4’ü destekler.',
      amac: 'Gelişimi tamamlarken Siyahın ...e5 kırılmasını önceden zorlaştırmak.',
      neden: '3.Nf3 en esnek hamledir; 3.Nc3’ün aksine 3...e6 4.e4 gibi Slav gambitlerine ya da ...dxc4 sonrası e4 karmaşasına zorunlu olarak girmez.',
      diger: [
        { move: '3.Nc3', text: 'Daha keskin; 3...dxc4 4.e4 ya da 3...e6 ile Yarı-Slav’a gidilebilir. Motor: +0.4.' },
        { move: '3.cxd5', text: 'Değişim Slav’ı; simetrik ve sakin bir yapı. Motor: +0.35.' },
      ],
    },
    '3b': {
      text: 'At gelişir ve d5’i bir kez daha korur.',
      amac: 'Gelişmek ve e4 karesini kontrol etmek.',
      neden: 'Slav’ın ana hamlesidir. 3...e6 Yarı-Slav’a, 3...dxc4 Slav Kabulü’ne gider; 3...Nf6 seçenekleri açık tutar.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav yapısı; c8 fili yine kapanır. Motor: +0.5.' },
        { move: '3...dxc4', text: 'Piyonu hemen almak; 4.e3 b5 5.a4 ile Beyaz piyonu geri alır.' },
      ],
    },
    '4w': {
      text: 'Sakin 4.e3: Beyaz önce sağlam bir merkez kurar ve f1 filine yol açar.',
      amac: 'c4’ü Bxc4 ile koruyabilmek; böylece ...dxc4 fikrini zararsız kılmak.',
      neden: '4.Nc3 dxc4 ana hatlarındaki uzun teoriden kaçınır. Bedeli, c1 filinin e3 piyonunun arkasında kalmasıdır. Motor 4.Nc3, 4.cxd5 ve 4.e3’ü yaklaşık eşit görüyor (+0.3).',
      diger: [
        { move: '4.Nc3', text: 'Ana yol; 4...dxc4 5.a4 Bf5 ya da 4...a6 ile Chebanenko. Motor: +0.3.' },
        { move: '4.cxd5', text: 'Değişim yapısı; 4...cxd5 5.Nc3 Nc6 6.Bf4. Motor: +0.3.' },
      ],
    },
    '4b': {
      text: 'Chebanenko hamlesi 4...a6: Siyah ...b5’i hazırlar.',
      amac: '...b5 ile c4’e baskı kurmak ve vezir kanadında alan almak; c8 filinin nereye gideceğine sonra karar vermek.',
      neden: 'e3 oynanınca c1 fili kapandığı için 4...Bf5 en doğal hamledir; motor da onu biraz önde görüyor (+0.25). ChessBase’teki Bologan DVD incelemesi de 4.e3 a6’ya karşı 4...Bf5’i iyi bir alternatif olarak anar. 4...a6 daha az bilinen, esnek bir seçenektir ve Aronian’ın hazırlığına uygun bir yapıya götürür.',
      diger: [
        { move: '4...Bf5', text: 'Klasik Slav: fil e3 piyonunun önünden dışarı çıkar. 5.Nc3 e6 6.Nh4 ile Beyaz fili kovalar. Motor: +0.25.' },
        { move: '4...e6', text: 'Yarı-Slav’a geçiş; fil c8’de kalır. Motor: +0.3.' },
      ],
    },
    '5w': {
      text: 'At gelişir, d5’e baskıyı artırır ve b5 karesine bakar.',
      amac: 'Gelişimi sürdürüp ...b5’e karşı Nxb5 taktiklerini hazırlamak.',
      neden: 'Motor 5.Nc3’ü en iyi buluyor (+0.4). 5.Qc2 ve 5.b3 de Chebanenko’ya karşı oynanır; ama at c3’te ...b5 sonrası c4-c5 kilidine en iyi destek verir.',
      diger: [
        { move: '5.b3', text: 'c4’ü önceden destekler; Siyah fili ...Bg4 ya da ...Bf5 ile dışarı çıkarabilir.' },
        { move: '5.Bd3', text: '5...dxc4 6.Bxc4 c5 ile Siyah rahat eşitler. Motor: +0.27.' },
      ],
    },
    '5b': {
      text: '...b5 ile c4 piyonuna saldırı ve vezir kanadında alan.',
      amac: 'Beyazı c4 piyonu konusunda karar vermeye zorlamak: c5 ile kilitlemek, b3 ile korumak ya da cxb5 ile değiştirmek.',
      neden: 'Chebanenko’nun mantıklı devamıdır. Motor 5...e6 ve 5...Bf5’i biraz daha iyi görüyor (+0.3 / +0.4); 5...b5 +0.4 ile yine kabul edilebilir ve Siyaha dinamik bir oyun verir.',
      diger: [
        { move: '5...e6', text: '6.c5 b6 7.cxb6 Qxb6 ile Siyah c5 kilidini önceden önler. Motor: +0.3.' },
        { move: '5...Bf5', text: 'Fil dışarı; 6.Bd3 Bg6 ya da 6.Nh4. Motor: +0.37.' },
      ],
    },
    '6w': {
      text: '6.c5: Beyaz kilitler; ...dxc4 fikri ortadan kalkar ve b6 karesi zayıflar.',
      amac: 'Vezir kanadında alan kazanmak ve Siyahın b5-c6-d5 piyonlarını sabitlemek; ileride a4 ile b5’e saldırmak.',
      neden: 'Modern Chess’in Chebanenko kursunun yazarı c5 kilidini (orada 5.c5 hamle sırasıyla) “en prensipli” cevaplardan biri sayar, ama kendisi 5.e3 ve 6.b3’ü önerir. Kilidin zayıf yanı, c5 piyonunu yalnızca d4’ün korumasıdır: ...e5 kırılması bu desteği hedef alır. Motor: 6.b3 +0.4, 6.c5 +0.35.',
      diger: [
        { move: '6.b3', text: 'Piyonu c4’te tutar; 6...Bg4 7.Be2 ile Modern Chess kursunun ana yolu. Motor: +0.4.' },
        { move: '6.cxd5', text: '6...cxd5 sonrası b5 piyonu Siyaha vezir kanadında alan verir. Motor: +0.1.' },
      ],
    },
    '6b': {
      text: 'At d7’ye gelişir ve e5 karesini destekler.',
      amac: '...e5 kırılmasını hazırlamak ve c8 filini esnek tutmak.',
      neden: 'Marin’e göre 6...Bg4 sık oynanır, ama fil vezir kanadından ayrılınca Beyaz a4 ile b5’e baskı kurup taş fedasıyla iki bağlı geçer piyon elde etmeyi düşünebilir. Aronian fili bekletip kırılmayı kendisi yaptı. Motor: 6...Nbd7 +0.4, 6...g6 +0.5, 6...Bg4 +0.65.',
      diger: [
        { move: '6...Bg4', text: '7.h3 Bxf3 8.gxf3 Nbd7 ile Beyaz fil çifti alır; Marin’in uyardığı a4 fikri de vardır. Motor: +0.65.' },
        { move: '6...g6', text: 'Fili g7’ye gelişip ...e5’i sonraya bırakmak; 7.Ne5 ile Beyaz aktif. Motor: +0.5.' },
      ],
    },
    '7w': {
      text: 'Fil d3’e gelişir ve e4 karesine bakar.',
      amac: 'Rok yapmaya hazırlanmak ve e4 ilerlemesini desteklemek.',
      neden: 'Doğal bir gelişme hamlesidir, ama ...e5’e karşı bir şey yapmaz; motor 7.Bd3’ü (+0.1) 7.a3, 7.Qc2 ve 7.Bd2’den (+0.45 / +0.5) zayıf buluyor. 7.Qc2 e5 karesini ikinci kez kontrol eder ve ...e5’i zorlaştırırdı.',
      diger: [
        { move: '7.a3', text: 'b4 karesini kontrol eder ve vezir kanadını sağlamlaştırır; 7...a5 8.Qe2 Bb7. Motor: +0.5.' },
        { move: '7.Qc2', text: 'e5’e ek kontrol; 7...g6 8.Bd3 Bg7 9.O-O. Motor: +0.45.' },
        { move: '7.Bd2', text: '7...a5 8.Nxb5!? cxb5 9.Bxb5 ile Marin’in sözünü ettiği taş fedası fikri ortaya çıkar. Motor: +0.45.' },
      ],
    },
    '7b': {
      text: '7...e5! Kilide karşı merkez kırılması.',
      amac: 'd4 piyonunu değiştirip c5’in desteğini kesmek ve piyonu geri almak.',
      neden: 'Beyaz henüz rok yapmamıştır ve e4 oynamamıştır; kırılmanın tam zamanı budur. 8.Nxe5 Nxe5 9.dxe5 Ng4 sonrası e5 piyonu saldırı altındadır ve c5 de düşecektir. Motor ...e5’i açık ara en iyi buluyor (+0.03); gecikirse Beyaz O-O ve e4 ile üstün gelir.',
      diger: [
        { move: '7...g6', text: '8.O-O Bg7 9.e4 dxe4 10.Nxe4 ile Beyaz merkezi açar. Motor: +0.6.' },
        { move: '7...Qc7', text: 'e5’i hazırlar ama yavaş; 8.Qe2 g6 9.O-O. Motor: +0.7.' },
      ],
    },
    '8w': {
      text: 'Beyaz e5’i atla alır.',
      amac: 'Taşları değiştirip e5’e bir piyon yerleştirmek ve Siyahın atını f6’dan kovmak.',
      neden: 'Motor 8.Nxe5, 8.Bc2 ve 8.dxe5’i yaklaşık eşit görüyor (+0.1 / +0.2). 8.Nxe5 en net yoldur; 8.Bc2 sonrası ...exd4 9.exd4 ile Beyaz yalıtılmış olmayan ama sabit bir merkez alır.',
      diger: [
        { move: '8.Bc2', text: '8...Qc7 9.h3 Be7 10.O-O; gerilim korunur. Motor: +0.2.' },
        { move: '8.dxe5', text: '8...Ng4 9.b4 a5 sonrası Siyah e5’i geri alır. Motor: +0.1.' },
      ],
    },
    '8b': {
      text: 'Siyah atla geri alır.',
      amac: 'Taşı geri kazanmak ve Beyazı d4 ile geri almaya zorlamak.',
      neden: 'Zorunlu bir geri almadır: Beyaz bir at almıştır. 8...Qc7? gibi bir hamle taş kaybettirir (Motor: +2.4).',
    },
    '9w': {
      text: 'Piyonla geri alınır; Beyazın e5’te bir piyonu var ama c5 artık desteksiz.',
      amac: 'Kaybedilen atın karşılığını almak.',
      neden: 'Zorunludur; başka hamleler bir taş eksik bırakır (9.Bc2? Ng6 sonrası Motor: −2.5).',
    },
    '9b': {
      text: 'At g4’e gelip e5 piyonuna saldırır.',
      amac: 'e5 piyonunu baskı altına almak; bu sırada f2 ve e3 karelerine de bakmak.',
      neden: 'f6’daki at saldırı altındaydı. g4’te hem e5’e baskı yapar hem de ileride ...Nxe3 ve ...Nf2 fikirlerine hazır durur. Motor: 9...Ng4 +0.3, 9...Nd7 +0.5 (10.e6! Nxc5 11.exf7+ ile Beyaz aktif).',
      diger: [
        { move: '9...Nd7', text: '10.e6 Nxc5 11.exf7+ Kxf7 ile Siyahın şahı açılır. Motor: +0.5.' },
        { move: '9...b4', text: '10.exf6 bxc3 11.fxg7 Bxg7 ile Beyaz piyon fazlası ve daha iyi yapıyla çıkar. Motor: +1.3.' },
      ],
    },
    '10w': {
      text: 'f4 ile e5 korunur.',
      amac: 'e5 piyonunu tutmak ve Siyahın atını geri püskürtmek için alan kazanmak.',
      neden: 'Motor 10.f4’ü en iyi buluyor (+0.35). Bedeli büyüktür: e3 geri kalır, a7-g1 çaprazı zayıflar ve rok güvensiz hale gelir. 10.b4 c5’i tutar, ama e5 düşer.',
      diger: [
        { move: '10.b4', text: '10...a5 11.Bb2 Nxe5 ile Siyah piyonunu geri alır ve rahatlar. Motor: −0.1.' },
        { move: '10.Be2', text: '10...Nxe5 11.Qd4 Nd7 sonrası Siyah c5’i de alacaktır. Motor: −0.35.' },
      ],
    },
    '10b': {
      text: '10...Bxc5: Siyah piyonu geri alır.',
      amac: 'Materyal dengesini kurmak ve fili a7-g1 çaprazına yerleştirip e3’e baskı yapmak.',
      neden: '...e5 kırılmasının asıl ödülü budur. Fil c5’te e3’ü hedef alır ve g4 atıyla birlikte Beyazın rok yapmasını tehlikeli hale getirir. Motor: 10...Bxc5 +0.3; geciktirmek (10...a5) +1.0.',
      diger: [
        { move: '10...a5', text: 'Önce vezir kanadını sağlamlaştırmak; 11.Qf3 Bxc5 12.h3 ile Beyaz atı kovalar. Motor: +1.0.' },
        { move: '10...h5', text: 'g4 atını desteklemek; ama yavaş: 11.Qf3 Nh6 12.h3. Motor: +1.2.' },
      ],
    },
    '11w': {
      text: 'Vezir f3’e gelip g4 atına ve d5’e saldırır.',
      amac: 'Atı geri püskürtmek, d5 piyonuna baskı kurmak ve e3’ü vezirle desteklemek.',
      neden: 'Motor 11.Qf3’ü en iyi buluyor (+0.2). 11.Qe2 Qh4+ 12.g3 Qh3 ile Siyah aktifleşir; 11.Qc2? Nxe3! ise piyon kaybettirir.',
      diger: [
        { move: '11.Qe2', text: '11...Qh4+ 12.g3 Qh3 ile vezir Beyazın şah kanadına yerleşir. Motor: −0.25.' },
        { move: '11.Qc2', text: '11...Nxe3 12.Bxe3 Bxe3 ile Siyah bir piyon kazanır. Motor: −1.5.' },
      ],
    },
    '11b': {
      text: 'Vezir b6’ya gelip c5 filinin arkasına geçer.',
      amac: 'e3’e baskıyı ikiye çıkarmak ve Beyazın rok yapmasını engellemek.',
      neden: 'Saldırgan ve tutarlı bir hamledir: Bxe3 tehdidi Beyazı şahını merkezde tutmaya zorlar. Motor ise 11...Nh6 ve 11...f6’yı biraz daha kesin buluyor (+0.36’ya karşı +0.6); bu hamleler önce şah kanadındaki gerilimi çözer ve veziri esnek tutar.',
      diger: [
        { move: '11...Nh6', text: '12.h3 f6 13.exf6 Qxf6 ile Siyah aktif. Motor: +0.36.' },
        { move: '11...f6', text: 'Hemen e5’e saldırı; 12.h3 Nh6 13.exf6 Qxf6. Motor: +0.36.' },
      ],
    },
    '12w': {
      text: 'Şah e2’ye çıkıp e3’ü korur.',
      amac: 'e3 piyonunu savunmak ve f3 vezirini serbest bırakmak.',
      neden: 'Marin’e göre Steinitz bu hamleden hoşlanırdı: şah aktif bir taş gibi kullanılıyor, ama Marin bunun ileride giderek sorun olacağını da belirtir. 12.O-O? Bxe3+ 13.Kh1 Nf2+ 14.Rxf2 Bxf2 kalite kaybettirir (Motor: −0.4). Motor 12.Ke2 ile 12.Nd1’i yakın görüyor (+0.3 / +0.5).',
      diger: [
        { move: '12.Nd1', text: '12...Bb4+ 13.Kf1 Nh6 14.Nf2 ile at e3’ü korur ve şah f1’de kalır. Motor: +0.5.' },
        { move: '12.O-O', text: '12...Bxe3+ 13.Kh1 Nf2+ 14.Rxf2 Bxf2 ile Siyah kalite kazanır. Motor: −0.4.' },
      ],
    },
    '12b': {
      text: 'At h6’ya çekilir.',
      amac: 'h3’e karşı atı önceden kurtarmak ve f5 karesine yönlendirmek.',
      neden: 'g4 atı h3 ile kovalanacaktı. h6’dan f5’e giden at e3 ve d4’e bakacaktır. Motor 12...a5 ile 12...Nh6’yı eşit görüyor (+0.27); 12...O-O +0.4.',
      diger: [
        { move: '12...a5', text: 'Önce vezir kanadı; 13.h3 Nh6 14.Bd2 Nf5 ile aynı yapıya gelinir. Motor: +0.27.' },
        { move: '12...O-O', text: '13.h3 Nh6 14.g4 ile Beyaz şah kanadında alan kazanır. Motor: +0.4.' },
      ],
    },
    '13w': {
      text: 'h3: ...Ng4’ü önler ve g4’ü hazırlar.',
      amac: 'Siyah atını g4 ve f5 karelerinden uzak tutmak.',
      neden: 'Motor 13.h3’ü en iyi buluyor (+0.1). 13.f5 e5 piyonunu zayıflatır (13...Qb8!), 13.Kf1? ise 13...Bg4 ile vezire saldırı yer (−1.5).',
      diger: [
        { move: '13.f5', text: '13...Qb8 14.e4 Qxe5 ile Siyah piyonu alır. Motor: −0.4.' },
        { move: '13.Kf1', text: '13...Bg4 14.Qf2 O-O ile Siyah çok aktif. Motor: −1.5.' },
      ],
    },
    '13b': {
      text: '13...Nf5: ChessBase raporuna göre Aronian’ın hazırladığı yeni hamle.',
      amac: 'Atı e3 ve d4’e bakan güçlü bir kareye getirmek ve Beyazı g4 ile şah kanadını daha da açmaya zorlamak.',
      neden: 'Beyaz g4 ile atı kovalamalıdır; bu da f4-g4-h3 piyonlarını ileri gönderir ve şahın çevresini zayıflatır. Rapor bu yeniliğin “çok keskin” bir konum doğurduğunu yazar. Motor: 13...a5 +0.2, 13...Nf5 +0.3, 13...O-O +0.35; yani pratik bir seçim.',
      diger: [
        { move: '13...a5', text: '14.g4 Ng8 15.e4 Ne7 ile at daha uzun yoldan gelir. Motor: +0.2.' },
        { move: '13...O-O', text: '14.g4 a5 15.Bd2 Kh8; at h6’da pasif kalır. Motor: +0.35.' },
      ],
    },
    '14w': {
      text: 'g4 ile at kovalanır ve şah kanadında alan kazanılır.',
      amac: 'Atı f5’ten uzaklaştırmak ve f4-g4 ile şah kanadında alan kazanmak.',
      neden: 'Mantıklı ve tutarlı, ama şahın çevresi iyice açılır. Motor 14.a4’ü biraz daha iyi buluyor (+0.2): 14...d4 15.a5 ile vezir kanadında oyun. 14.Bd2 ise 14...a5 ile pasif.',
      diger: [
        { move: '14.a4', text: '14...d4 15.a5 Qc7 16.Bxf5 ile Beyaz atı değişir ve b5’e baskı kurar. Motor: +0.2.' },
        { move: '14.Bd2', text: '14...a5 15.Rac1 O-O; at f5’te kalır. Motor: 0.0.' },
      ],
    },
    '14b': {
      text: 'At e7’ye çekilir.',
      amac: 'Atı güvende tutmak; buradan g6, f5 veya c6 üzerinden yeniden oyuna dönebilir.',
      neden: 'Motor 14...Ne7’yi en iyi buluyor (0.0). 14...Nh4 15.Qg3 Be7 16.f5 ile at kenarda sıkışır (+0.3); 14...Nh6? 15.a4 Qb7 16.f5 ile at oyundan çıkar (+1.3).',
      diger: [
        { move: '14...Nh4', text: '15.Qg3 Be7 16.f5 ile at h4’te kapanır. Motor: +0.3.' },
        { move: '14...Nh6', text: '15.a4 Qb7 16.f5 ile at hiç oyuna giremez. Motor: +1.3.' },
      ],
    },
    '15w': {
      text: 'Fil d2’ye gelişir ve kaleler birbirini görmeye başlar.',
      amac: 'Vezir kanadındaki gelişimi tamamlamak ve Rac1 ile c-hattına baskı hazırlamak.',
      neden: 'Gelişme hamlesidir, ama motor 15.a4’ü (0.0) daha iyi buluyor: b5’e saldırı Siyahı vezir kanadında meşgul eder. 15.f5 de oynanabilirdi (−0.1).',
      diger: [
        { move: '15.a4', text: '15...O-O 16.Bd2 a5 17.axb5 ile a-hattı açılır. Motor: 0.0.' },
        { move: '15.f5', text: 'f-piyonunu ilerletip ...f6’yı önceden önlemek; 15...a5 16.b3 O-O. Motor: −0.1.' },
      ],
    },
    '15b': {
      text: 'Siyah rok yapar.',
      amac: 'Şahını güvene almak ve f8 kalesini f-hattına hazırlamak.',
      neden: 'Beyaz şahı merkezde kalmışken Siyahın şahı güvende olunca ...f6 kırılması daha etkili olur. Motor 15...a5’i biraz daha iyi buluyor (−0.2), 15...O-O −0.1; 15...Bb7? ise 16.h4 ile Beyaz şah kanadında ilerler (+0.4).',
      diger: [
        { move: '15...a5', text: '16.h4 O-O 17.h5 f6 ile aynı fikirler. Motor: −0.2.' },
        { move: '15...Bb7', text: 'Fil gelişir ama rok gecikir; 16.h4 a5 17.a3. Motor: +0.4.' },
      ],
    },
    '16w': {
      text: 'Kale c-hattına gelir ve c5 filine bakar.',
      amac: 'c-hattındaki filin önünü baskı altına almak ve şah kanadından önce vezir kanadında oynamak.',
      neden: 'Marin burada 16.f5’i önerir: ...f6’yı önler, ama e5 zayıf kalır ve 16...Qc7 17.Qf4 Ba7 18.Rac1 Rd8! ile Siyah ...d4’ü hazırlar (motor bu çizgide eşitlik görüyor). Motor 16.a4’ü en iyi buluyor (0.0); 16.Rac1 ise 16...f6’ya izin verir (−0.4).',
      diger: [
        { move: '16.f5', text: 'Marin’in önerisi: 16...Qc7 17.Qf4 Ba7 18.Rac1 Rd8! 19.Rhf1 d4 ile denge. Motor: yaklaşık 0.0.' },
        { move: '16.a4', text: '16...Bb7 17.Rhc1 a5 18.axb5 cxb5 19.Nxb5 ile vezir kanadında oyun. Motor: 0.0.' },
        { move: '16.h4', text: 'Şah kanadında ilerleme; 16...a5 17.h5 f6 18.exf6. Motor: −0.15.' },
      ],
    },
    '16b': {
      text: '16...f6! Siyah e5 piyonuna saldırır.',
      amac: 'Beyazın şah kanadındaki piyon zincirini başından kırmak ve f-hattını açmak.',
      neden: 'Marin bu hamleyi “!” ile işaretler ve Nimzowitsch’in “terfi etmemiş her piyon çoğunluğuna (ya da hareketli piyon grubuna) saldırılmalıdır” ilkesine bağlar. Beyaz g5-f5 ile ilerlemeden önce zincir sökülür. Motor: 16...f6 −0.6, 16...a5 −0.2.',
      diger: [
        { move: '16...a5', text: '17.f5 a4 18.Qf4 b4 ile her iki taraf kendi kanadında oynar. Motor: −0.2.' },
        { move: '16...Qa7', text: '17.f5 Bb6 18.Rhf1 ile Beyaz şah kanadında ilerler. Motor: 0.0.' },
      ],
    },
    '17w': {
      text: 'Beyaz f6’da değişir.',
      amac: 'e5 piyonunu kaybetmemek ve f-hattının açılmasını kabul etmek.',
      neden: 'Motor 17.exf6’yı en iyi buluyor (−0.5). 17.a3 ya da 17.Rhf1 fxe5 18.Ne4 dxe4 19.Qxe4 ile taş fedasına dayanır ve daha kötüdür (−0.7).',
      diger: [
        { move: '17.Rhf1', text: '17...fxe5 18.Ne4 dxe4 19.Qxe4 ile yetersiz bir girişim. Motor: −0.7.' },
      ],
    },
    '17b': {
      text: 'Kaleyle alınır.',
      amac: 'f-hattını açmak ve şahının önündeki piyonları bozmamak.',
      neden: '17...gxf6? Siyahın kendi şahını açardı; g4-f5 sonrası Beyaz piyonları şaha yaklaşırdı (Motor: +0.8). 17...Ng6? ise 18.Nxd5! cxd5 19.Qxd5+ ile taş kaybettirir (+2.9).',
      diger: [
        { move: '17...gxf6', text: '18.Rhg1 Kh8 19.f5 ile Siyah şahı zayıflar. Motor: +0.8.' },
        { move: '17...Ng6', text: '18.Nxd5! cxd5 19.Qxd5+ Be6 20.Qxa8 ile vezir çatalı kaleyi kazandırır. Motor: +2.9.' },
      ],
    },
    '18w': {
      text: 'e4 ile merkez açılır.',
      amac: 'Geri kalmış e3 piyonundan kurtulmak ve d5’e saldırmak.',
      neden: 'Marin’e göre stratejik olarak doğrudur, çünkü e-hattındaki zayıflığı ortadan kaldırır; ama şahı tehlikeli bir duruma sokar. Motor 18.Kd1’i (−0.5) biraz daha iyi buluyor: önce şahı güvenli yola koymak, sonra e4.',
      diger: [
        { move: '18.Kd1', text: '18...Bd6 19.e4 Bb7 20.exd5 ile önce şah kaçar. Motor: −0.5.' },
        { move: '18.Rhf1', text: '18...Rf7 19.e4 Bb7 20.e5 ile Beyaz merkezde alan tutar. Motor: −0.5.' },
      ],
    },
    '18b': {
      text: 'Fil d4’e gelip c3 atına ve b2’ye bakar.',
      amac: 'Merkezde güçlü bir kare almak ve c3 atını bağlayarak d5’in savunmasını kolaylaştırmak.',
      neden: 'Aktif bir hamle, ama motor 18...Bb7’yi daha iyi buluyor (−0.7’ye karşı −0.1): fil d5’i destekler ve h1-a8 çaprazında Beyaz şahına bakar. 18...Bd4 sonrası Beyaz biraz rahatlar.',
      diger: [
        { move: '18...Bb7', text: '19.Kd1 Ng6 20.exd5 cxd5 ile Siyah merkezini tutar. Motor: −0.7.' },
        { move: '18...Rf7', text: '19.exd5 cxd5 20.Nxd5 Nxd5 ile değişimler. Motor: −0.3.' },
      ],
    },
    '19w': {
      text: 'Beyaz d5’te değişir.',
      amac: 'Merkezi açmak ve Siyaha tek bir d5 piyonu bırakmak.',
      neden: 'Motor 19.Rhe1, 19.Kd1 ve 19.exd5’i yakın görüyor (−0.2 / −0.3). Beyaz gerginliği çözerek d5’i bir hedefe çevirmek istedi; ama d5 aynı zamanda geçer piyon olacaktır.',
      diger: [
        { move: '19.Rhe1', text: '19...Bb7 20.exd5 cxd5 21.Kf1 ile şah f1’e kaçar. Motor: −0.2.' },
        { move: '19.Kd1', text: '19...Bb7 20.Re1 Rf7 21.Kc2 ile önce şah. Motor: −0.3.' },
      ],
    },
    '19b': {
      text: 'c-piyonuyla alınır.',
      amac: 'Merkezde d5 piyonunu tutmak ve c-hattını açmak.',
      neden: 'Motor 19...cxd5 ile 19...Bb7’yi eşit görüyor (−0.1). 19...Nxd5? 20.Nxd5 cxd5 sonrası taşlar değişir ve Siyahın baskısı azalır (+0.2).',
      diger: [
        { move: '19...Nxd5', text: '20.Nxd5 cxd5 21.Rhe1 Be6; at değişince baskı azalır. Motor: +0.2.' },
      ],
    },
    '20w': {
      text: 'Şah d1’e gider; c2-b1 üzerinden güvene ulaşmak istiyor.',
      amac: 'e-hattından çıkmak ve şahı vezir kanadına taşımak.',
      neden: 'Motor bu hamleyi en iyi buluyor (+0.1). Şah e-hattında kalırsa Siyahın kalesi ve filleri ona saldırır. 20.Rhe1 de mümkündü (−0.2).',
      diger: [
        { move: '20.Rhe1', text: '20...Bb7 21.Kd1 Rf7 22.Kc2; aynı plan farklı sırayla. Motor: −0.2.' },
        { move: '20.f5', text: '20...Bb7 21.Rhe1 Rf7; f5 piyonu zayıf kalabilir. Motor: −0.25.' },
      ],
    },
    '20b': {
      text: 'Kale f7’ye çekilip ikinci yatayı savunur.',
      amac: 'e7 atını korumak ve kaleyi f-hattında tutmak.',
      neden: 'Motor 20...Bb7’yi biraz daha iyi görüyor (−0.3’e karşı −0.1). 20...Qd6? 21.f5 ile Beyaza alan verir (+0.7).',
      diger: [
        { move: '20...Bb7', text: '21.Re1 Rf7 22.Kc2 Ng6 ile aynı yapı. Motor: −0.3.' },
        { move: '20...Qd6', text: '21.f5 Bb7 22.Re1 Ng6; Beyazın f5 piyonu güçlenir. Motor: +0.7.' },
      ],
    },
    '21w': {
      text: 'Kale e-hattına gelir.',
      amac: 'Açık e-hattını almak ve e7 atına baskı kurmak.',
      neden: 'Motor 21.Re1 ile 21.Kc2’yi eşit görüyor (0.0). Kale e-hattında Re6 fikirlerine hazırlanır.',
      diger: [
        { move: '21.Kc2', text: '21...Bb7 22.Rhe1 Ng6 23.Kb1; şah önce güvene. Motor: 0.0.' },
        { move: '21.f5', text: '21...Bb7 22.Re1 Ng6 23.Rc2; f5 piyonu Siyah atının karelerini kısar. Motor: −0.2.' },
      ],
    },
    '21b': {
      text: 'Fil b7’ye gelişip d5’i destekler.',
      amac: 'Son taşını geliştirmek ve h1-a8 çaprazına yerleşmek.',
      neden: 'Marin bu noktada Siyahın gelişimini tamamladığını ve Beyaz şahının şimdilik güvende olsa da taşların uyumunu bozduğunu yazar. Motor 21...Bb7’yi en iyi buluyor (−0.05); 21...Bxc3? fil çiftini verir (+1.2).',
      diger: [
        { move: '21...Bxc3', text: '22.Bxc3 Bb7 23.Bb4 ile Beyazın koyu kare fili güçlenir. Motor: +1.2.' },
        { move: '21...Qd8', text: '22.Kc2 Ng6 23.Kb1; pasif. Motor: +0.9.' },
      ],
    },
    '22w': {
      text: 'Vezir e2’ye gelir ve e-hattında ikinci kat baskı kurar.',
      amac: 'e7 atına ve e6 karesine baskı yapmak; vezir değişimine yol açmak.',
      neden: 'Marin’e göre 22.Kc2 Bxc3 23.Bxc3 d4 24.Qf2 Nd5 ile Siyah girişim alırdı; Gelfand bu yüzden şahı yerinde bıraktı. Motor ise 22.Kc2’yi en iyi buluyor (0.0) ve Marin’in çizgisinde 25.Bd2 ile Beyazı biraz önde görüyor. 22.Qe2 sonrası değerlendirme −0.8.',
      diger: [
        { move: '22.Kc2', text: '22...Ng6 23.Kb1 Ne5 24.Qe2; şah güvenli köşeye ulaşır. Motor: 0.0.' },
        { move: '22.f5', text: '22...Bf2 23.Re5 Bh4 24.Qe2; f5 piyonu atı kısar. Motor: −0.3.' },
      ],
    },
    '22b': {
      text: 'At g6’ya gelip f4 ve e5 karelerine bakar.',
      amac: 'e-hattından atı çıkarmak ve f4 piyonuna baskı kurmak.',
      neden: 'Motor 22...Ng6’yı en iyi buluyor (−0.7). Hamle Beyazı 23.Bxg6 ile fil-at değişimine zorlar; böylece Siyah iki fil kazanır. 22...Rd8 ya da 22...Bf2 sonrası denge korunur.',
      diger: [
        { move: '22...Rd8', text: '23.Kc2 Ng6 24.f5 Re7; Beyaz şahı kaçar. Motor: −0.2.' },
        { move: '22...Bf2', text: '23.Qe6 Qd4 24.Bxh7+ Kxh7 ile karmaşa. Motor: 0.0.' },
      ],
    },
    '23w': {
      text: 'Beyaz atı alır.',
      amac: 'Atı f4 karesinden uzak tutmak ve g6’da bir hedef yaratmak.',
      neden: 'Motor 23.Bxg6, 23.Qh2 ve 23.Bf5’i eşit görüyor (−0.7). Bedeli Siyaha iki fil vermektir; ama at g6’dan f4’e ve e5’e çok tehlikeli olacaktı.',
      diger: [
        { move: '23.Qh2', text: '23...Qd6 24.Qg3 Rd8 ile Siyah atını korur. Motor: −0.7.' },
        { move: '23.Bf5', text: '23...Re7 24.Qf1 Rae8; e-hattı çekişmesi. Motor: −0.75.' },
      ],
    },
    '23b': {
      text: 'h-piyonuyla alınır.',
      amac: 'Taşı geri almak ve veziri b6’da tutmak.',
      neden: 'Motor 23...hxg6’yı en iyi buluyor (−0.7). 23...Qxg6 da mümkündü (−0.4), ama vezir a7-g1 çaprazından ayrılır. f7 kalesi g6 filinin saldırısı altında olduğundan 23...Rff8? 24.Bf5 taş kaybettirir (+3.7).',
      diger: [
        { move: '23...Qxg6', text: '24.f5 Qd6 25.Qe6 Qd8; vezir pasifleşir. Motor: −0.4.' },
      ],
    },
    '24w': {
      text: 'Vezir e6’ya gelir ve b6 vezirine karşı durur.',
      amac: 'Vezirleri değiştirip şahı tehlikeden kurtarmak; g6 piyonuna da baskı yapmak.',
      neden: 'Motor 24.Qe6’yı en iyi buluyor (−0.8); 24.Qd3 ya da 24.b4 sonrası 24...Rd8 ve ...Bf2 ile Siyah baskıyı artırır (−1.2). Değişimden sonra Siyah iki fil ve geçer piyona sahiptir, ama vezirsiz oyunda şah daha güvendedir.',
      diger: [
        { move: '24.Qd3', text: '24...Rd8 25.b4 Bf2 26.Re5 ile Siyah aktif. Motor: −1.2.' },
        { move: '24.b4', text: 'Fili d4’ten uzaklaştırmak amaçlanır; 24...Rd8 25.Qd3 Bf2. Motor: −1.2.' },
      ],
    },
    '24b': {
      text: 'Kale d8’e gelip d5’i destekler.',
      amac: 'd-piyonunu korumak ve ileride ilerlemesine destek olmak.',
      neden: 'Motor 24...Rd8, 24...Bf2 ve 24...Qxe6’yı yakın görüyor (−0.7 / −0.8). Siyah değişimi Beyazın yapmasına izin verir; böylece fili b6’da geri alır ve kalesi d-hattında hazırdır.',
      diger: [
        { move: '24...Qxe6', text: '25.Rxe6 Ba7 26.Kc2 Rd7; Beyaz kalesi aktif. Motor: −0.7.' },
        { move: '24...Bf2', text: '25.Qxb6 Bxb6 26.Re6 Ba7; benzer oyun sonu. Motor: −0.7.' },
      ],
    },
    '25w': {
      text: 'Vezirler değişir.',
      amac: 'Merkezdeki şahı mat tehlikesinden kurtarmak.',
      neden: 'Motor bunu açık ara en iyi buluyor (−0.8): 25.g5 Rd6 26.Qe8+ Rf8 ya da 25.Nb1 Qxe6 26.Rxe6 Bxb2 Beyaz için daha kötüdür (−1.5 / −1.7).',
      diger: [
        { move: '25.g5', text: '25...Rd6 26.Qe8+ Rf8 27.Qe7 ile vezir sıkışır. Motor: −1.5.' },
        { move: '25.Nb1', text: '25...Qxe6 26.Rxe6 Bxb2 ile Siyah piyon kazanır. Motor: −1.7.' },
      ],
    },
    '25b': {
      text: 'Fil geri alır.',
      amac: 'Materyali geri kazanmak ve fili a7-g1 çaprazında tutmak.',
      neden: 'Zorunludur: vezir alınmıştır. Başka bir hamle (25...Bf6?) bir vezir kaybettirir (Motor: +8).',
    },
    '26w': {
      text: 'Kale e6’ya girer; b6 filine ve g6 piyonuna saldırır.',
      amac: 'Kaleyi aktifleştirip Siyahın zayıf piyonlarına (g6, a6) baskı yapmak.',
      neden: 'Motor 26.Re6, 26.Kc2 ve 26.b3’ü yakın görüyor (−0.8). Aktif kale oyun sonunda pasif kaleden çok daha değerlidir.',
      diger: [
        { move: '26.Kc2', text: '26...d4 27.Ne4 d3+ 28.Kb1; şah güvene. Motor: −0.8.' },
        { move: '26.b3', text: '26...Bf2 27.Re6 Rfd7 28.Re5; c4 karesi kontrol edilir. Motor: −0.9.' },
      ],
    },
    '26b': {
      text: 'Fil a7’ye çekilir ve a7-g1 çaprazında kalır.',
      amac: 'Fili korumaya almak ve g1-e3-d4 karelerine uzun menzilli bakmasını sürdürmek.',
      neden: 'Motor 26...Bf2’yi biraz daha iyi buluyor (−0.8’e karşı −0.7): 27.Ke2 Bg3 28.Kd3 d4. Marin fillerin şimdilik “mütevazı” göründüğünü, ama d-piyonu ilerleyince yıkıcı olacağını yazar.',
      diger: [
        { move: '26...Bf2', text: '27.Ke2 Bg3 28.Kd3 d4; fil şah kanadı piyonlarına saldırır. Motor: −0.8.' },
        { move: '26...Rf6', text: '27.Re7 Rf7 28.Re6; tekrar. Motor: −0.75.' },
      ],
    },
    '27w': {
      text: 'At e2’ye gider; g3 veya d4’e yönelecek.',
      amac: 'Atı d4 karesine getirip d-piyonunu durdurmak ya da g3-e4 yoluyla merkeze getirmek.',
      neden: 'Mantıklı ama yavaş: Siyah hemen 27...d4 ile d4 karesini kapatır. Motor 27.a3’ü (−0.6) daha iyi buluyor: Na2-b4 ya da Nc3 ile at vezir kanadında kalır ve b4 karesine yerleşir.',
      diger: [
        { move: '27.a3', text: '27...Rfd7 28.Na2 Kf7 29.Re1; at b4 üzerinden d-piyonuna bakar. Motor: −0.6.' },
        { move: '27.Re1', text: '27...b4 28.Na4 d4 29.Bxb4 ile karmaşa. Motor: −1.1.' },
      ],
    },
    '27b': {
      text: '27...d4! Geçer piyon ilerler.',
      amac: 'At için d4 karesini kapatmak, c3 ve e3’ü kontrol etmek ve piyonu d3’e götürmek.',
      neden: 'Beyaz şahı d1’de; piyon ilerledikçe şahın ve d2 filinin hareket alanı daralır. Motor ...d4’ü açık ara en iyi buluyor (−0.8); 27...Rfd7 ve 27...Bf2 ise yaklaşık eşit (−0.1 / 0.0).',
      diger: [
        { move: '27...Rfd7', text: '28.Ba5 Kf7 29.f5 gxf5 ile denge. Motor: −0.15.' },
        { move: '27...Bf2', text: '28.Be1 Bxe1 29.Kxe1 d4; filin biri değişir. Motor: 0.0.' },
      ],
    },
    '28w': {
      text: 'At g3’e gelir; e4 ve f5 karelerine bakar.',
      amac: 'Atı e4 karesine getirip d-piyonunu durdurmak.',
      neden: 'Motor 28.Ng3’ü en iyi buluyor (−1.3). 28.Ba5 Rdd7 29.Re8+ Kh7 ya da 28.f5 gxf5 daha kötüdür (−1.5 / −1.7).',
      diger: [
        { move: '28.Ba5', text: '28...Rdd7 29.Re8+ Kh7 30.Ng3; fil b6’yı kontrol eder. Motor: −1.5.' },
        { move: '28.f5', text: '28...gxf5 29.Ba5 Rdd7 30.Re8+; Beyazın şah kanadı piyonları zayıflar. Motor: −1.7.' },
      ],
    },
    '28b': {
      text: 'Piyon d3’e ulaşır ve Beyaz şahının hemen önüne gelir.',
      amac: 'Şahı bağlamak ve Beyaz taşlarını savunmaya zorlamak; d2’ye ilerleme tehdidi.',
      neden: 'Motor 28...Bd5’i (−1.2) ve 28...Bf3+’yı (−0.9) biraz daha iyi buluyor; 28...d3 −0.7. 28...Bd5 önce e6 kalesine saldırırdı: 29.Ba5 Bxe6 30.Bxd8 Rxf4. Yine de 28...d3 doğal ve tehlikeli bir hamledir.',
      diger: [
        { move: '28...Bd5', text: '29.Ba5 Bxe6 30.Bxd8 Rxf4 ile kaleler karşılıklı alınır ve Siyah f4 piyonunu da kazanır. Motor: −1.2.' },
        { move: '28...Bf3+', text: '29.Ke1 d3 30.f5 gxf5; şah e1’e itilir. Motor: −0.9.' },
      ],
    },
    '29w': {
      text: '29.Rxg6?? Kale g6 piyonunu alır ama g3 atı korumasız kalır.',
      amac: 'Bir piyon kazanmak ve g7’ye baskı yapmak.',
      neden: 'Marin’e göre Gelfand şahının Siyah fillerin etki alanında olduğunu gözden kaçırdı; ChessBase’in raporu Beyazın zaman sıkıntısında olduğunu da belirtir. 29.Ne4! Bd5 30.Rd6 ile at hem d-piyonunu durdurur hem de b7 filinin f3 çaprazını kapatır (Motor: −0.7). Maç hamlesinden sonra −4.8.',
      diger: [
        { move: '29.Ne4', text: '29...Bd5 30.Rd6 Rff8 31.Rxd8 Rxd8 32.Ng5; at merkezde güçlü. Motor: −0.7.' },
        { move: '29.f5', text: '29...gxf5 30.Nxf5 Kh7 31.Bg5; piyonlar değişir. Motor: −0.9.' },
        { move: '29.Ba5', text: '29...Rd4 30.f5 Bb8; fil d8 kalesine bakar. Motor: −0.9.' },
      ],
    },
    '29b': {
      text: '29...Bf2! Fil g3 atına saldırır.',
      amac: 'Korumasız atı kazanmak; at oynarsa ...Bf3 mat motifini kullanmak.',
      neden: 'Marin: at ...Bf3 mat yüzünden oynayamaz. Şahın kaçış kareleri kapalıdır: d2’de fil, c1’de kale, e1 f2 filinin kontrolünde. 30.Ne4 Bxe4 ve 30.Ne2 dxe2+ ise atı yine kaybettirir. Motor: 29...Bf2 −5.0, 29...Bf3+ −4.2.',
      diger: [
        { move: '29...Bf3+', text: '30.Ke1 Re7+ 31.Kf1 Re2 32.Nxe2 dxe2+ ile de kazanır, ama daha uzun yoldan. Motor: −4.2.' },
        { move: '29...Re7', text: '30.Rc3 Bf2 31.Nf5; Beyaz atını kurtarır. Motor: −1.8.' },
      ],
    },
    '30w': {
      text: 'Beyaz fili a5’e çeker ve d8 kalesine saldırır.',
      amac: 'd2 karesini şah için boşaltmak ve d8 kalesini alarak materyali dengelemek.',
      neden: 'Tüm hamleler kaybeder (Motor: −4.9 ile −5.4 arası). 30.Rc3 Bf3+ 31.Kc1 Bxg3 ve 30.Rcc6 Bxc6 de taş kaybettirir; 30.Ba5 en azından karşı tehdit yaratır.',
      diger: [
        { move: '30.Rc3', text: '30...Bf3+ 31.Kc1 Bxg3 32.f5 ile Siyah bir taş önde. Motor: −5.2.' },
        { move: '30.Rcc6', text: '30...Bxc6 31.Rxc6 Bxg3 ile Siyah yaklaşık bir kale önde. Motor: −5.4.' },
      ],
    },
    '30b': {
      text: '30...Bxg3 ile at alınır; Gelfand terk etti.',
      amac: 'Atı almak ve f3 ve f4 karelerinden iki şah çekme tehdidi kurmak.',
      neden: 'Marin bu hamlenin f3 ve f4’ten art arda iki şah tehdit ettiğini yazar: 31.Bxd8 Bf3+ 32.Kd2 Bxf4+ 33.Kxd3 Rd7+ 34.Kc3 Bxc1 sonrası Siyah bir fil fazlasıyla kalır (Motor: −5.0). 30...Bf3+ da aynı sonuca götürür.',
      diger: [
        { move: '30...Bf3+', text: '31.Kd2 Bxg3 32.Bxd8 Bxf4+ 33.Kxd3 Rd7+; hamle sırası farklı, sonuç aynı. Motor: −4.9.' },
      ],
    },
  },
  exercises: [
    { id: 'gar-1', kind: 'tekrar', plan: false, title: 'Korumasız at',
      source: 'Gelfand – Aronian, Wijk aan Zee 2008 (29. hamle)',
      fen: '3r2k1/bb3rp1/p5R1/1p6/5PP1/3p2NP/PP1B4/2RK4 b - - 0 29',
      prompt: 'Beyaz kalesiyle g6 piyonunu aldı. Siyahın d3’te geçer piyonu ve iki fili var; Beyaz şahı d1’de. Hamle Siyahta.',
      hint: 'g3’teki atı kim koruyor?',
      line: ['Bf2', 'Ba5', 'Bxg3'],
      accept: { 0: ['Bf3+'], 2: ['Bf3+'] },
      explanation: '**29...Bf2!** Fil korumasız g3 atına saldırır. 30.Ne4 Bxe4 ile at yine düşer. Maçta **30.Ba5 Bxg3** geldi: 31.Bxd8 Bf3+ 32.Kd2 Bxf4+ 33.Kxd3 Rd7+ sonrası filler c1 kalesini de alır. Motor: ...Bf2 −5.0, ...Bf3+ −4.5 (o da kazanır), sonraki en iyi hamle −1.6.',
      link: 'Geçer d-piyonu Beyaz şahını bağlarken uzaklaşan kale atı korumasız bıraktı; filler bunu hemen cezalandırdı.' },
    { id: 'gar-2', kind: 'tekrar', plan: false, title: 'Geçer piyon yürüsün',
      source: 'Gelfand – Aronian, Wijk aan Zee 2008 (27. hamle)',
      fen: '3r2k1/bb3rp1/p3R1p1/1p1p4/5PP1/7P/PP1BN3/2RK4 b - - 3 27',
      prompt: 'Vezirler değişti. Siyahın fil çifti ve d5’te bir piyonu var; Beyazın atı e2’de, şahı d1’de. Siyah nasıl devam eder?',
      hint: 'd5 piyonunun önünde hiçbir Beyaz piyonu yok.',
      line: ['d4'],
      explanation: '**27...d4!** Geçer piyon ilerler: at d4 karesini kaybeder ve piyon d3’e kadar gidip Beyaz şahını ve taşlarını bağlar. Motor: ...d4 −1.1, sonraki en iyi hamle (27...Rfd7) −0.2.',
      link: '...e5 kırılması ve ...Bxc5 ile başlayan merkez oyunu, oyun sonunda geçer bir d-piyonuna dönüştü.' },
    { id: 'gar-3', kind: 'transfer', plan: false, title: 'c5 piyonunu geri almak',
      source: 'Eljanov – Karjakin, Aerosvit turnuvası, Foros 2007 (11. hamle)',
      fen: 'r1bqkb1r/3n2pp/2p1p3/ppPp4/3N2n1/P1NBP3/1P3PPP/R1BQK2R b KQkq - 1 11',
      prompt: 'Aynı Chebanenko yapısı: Beyaz c5 ile kilitledi, Siyah ...e5 ile kırdı ve değişimlerden sonra e6’da bir piyonu kaldı. Siyahın iki atı aktif. Hamle Siyahta.',
      hint: 'Kilidi kırmanın amacı neydi? c5 piyonunu artık kim koruyor?',
      line: ['Nxc5', 'Be2', 'Nxf2'],
      explanation: '**11...Nxc5!** Siyah c5 piyonunu geri alır ve at d3 filine saldırır. 12.Be2 sonrası **12...Nxf2!** ile at f2’yi alır; 13.Kxf2 sonrası Beyaz şahı açıkta kalır. Motor: ...Nxc5 −0.5, sonraki en iyi hamle (11...Nde5) +0.3; 12...Nxf2 −0.6, sonraki en iyi +0.6.',
      link: 'Aronian ...e5’ten sonra c5’i fille geri aldı; Karjakin aynı yapıda atla geri aldı ve Beyaz şahının merkezde kalmasından yararlandı.' },
    { id: 'gar-4', kind: 'transfer', plan: false, title: 'Geçer piyonla bağlamak',
      source: 'Miles – Kasparov, Basel maçı 1986 (19. hamle)',
      fen: '3q1b1r/5pp1/p3pk1p/4n3/2rpB2P/8/PP3PP1/R1BQ1RK1 b - - 3 19',
      prompt: 'Siyahın d4’te geçer bir piyonu var ve kalesi c4’te aktif. Beyazın filleri e4 ve c1’de. Siyah nasıl devam eder?',
      hint: 'Piyon bir kare ilerlerse c1 filini ve Beyazın arka yatayını nasıl etkiler?',
      line: ['d3'],
      explanation: '**19...d3!** Piyon ilerler ve Beyazın taşlarını birbirinden ayırır; d2’ye gitmekle tehdit eder ve c1 filinin gelişmesini zorlaştırır. Motor: ...d3 −2.5, sonraki en iyi hamle (19...Bc5) +0.5.',
      link: 'Aronian 27...d4 ve 28...d3 ile geçer piyonunu Beyaz şahının önüne kadar götürdü; Kasparov da d-piyonunu d3’e ilerletip Beyazın taşlarını bağladı.' },
  ],
};
