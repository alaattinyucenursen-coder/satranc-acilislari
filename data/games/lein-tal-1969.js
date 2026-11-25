// Lein – Tal, Tiflis turnuvası, Tiflis 1969. Kaynak: PgnMentor (Tal.pgn).
export default {
  id: 'lein-tal-1969',
  theme: '...d4 ile alan, ...c4-c3 ile vezir kanadında ilerleme',
  white: 'Anatoly Lein', black: 'Mihail Tal',
  whiteShort: 'Lein', blackShort: 'Tal',
  event: 'Tiflis turnuvası', site: 'Tiflis', year: 1969, eco: 'B23',
  variation: 'Kapalı Sicilya, 2.Nc3 e6 3.g3 d5 4.d3 d4', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. d3 d4 5. Nce2 Nc6 6. Bg2 g6 7. f4 Bg7 8. Nf3 Nge7 9. O-O O-O 10. Kh1 b6 11. Bd2 Ba6 12. Neg1 Qd7 13. Qe2 Rae8 14. Nh3 Bb7 15. Nf2 f5 16. Rae1 e5 17. fxe5 Nxe5 18. Nxe5 Bxe5 19. Bg5 Bg7 20. Qd2 Nc6 21. Bf4 Ne5 22. Bxe5 Rxe5 23. exf5 Rexf5 24. Ne4 Rxf1+ 25. Bxf1 c4 26. b3 c3 27. Qe2 Bh6 28. Bg2 Kg7 29. Rf1 Rxf1+ 30. Qxf1 Qe7 31. h4 Be3 32. Kh2 a5 33. Qe2 Bd5 34. Bf3 b5 35. Nf2 Bf7 36. Ng4 a4 37. Kg2 a3 38. Kf1 Qc5 39. Nxe3 dxe3 40. Qd1 Qe5 41. Kg2 Be6 42. d4 0-1`,

  summary: 'Oyunu Siyahlarla **Mihail Tal** kazandı (0-1). Tal, Lein’in yavaş Kapalı Sicilya kuruluşuna (2.Nc3, 3.g3, 4.d3) en sağlam cevabı verdi: **4...d4!** ile c3 atını e2’ye kovaladı, merkezi kapattı ve ...g6, ...Bg7, ...Nge7 ile Beyazın kuruluşunun aynısını, ama d4’te fazladan alanla kurdu (bir tür **ters Kral Hint**). Lein f4 ile tipik şah kanadı planına girdi ama 10.Kh1, 12.Neg1, 14.Nh3 ve 15.Nf2 gibi yavaş manevralarla zaman harcadı; motor bu evrede Siyahı hafifçe üstün görüyor (yaklaşık −0.3). Tal önce **15...f5!** ile f4-f5 ilerleyişini durdurdu, sonra **16...e5!** ile merkezi açtı. Atlar ve kaleler değişince ortaya Tal’ın istediği yapı çıktı: d4’te korunan bir piyon, açık uzun çapraz ve vezir kanadında hareketli piyonlar. **25...c4! 26.b3 c3** ile c-piyonu d4’ün desteğiyle c3’e yerleşti, d2 ve b2 karelerini Beyaza kapattı; **31...Be3** ile fil Beyazın şah kanadının ortasına kazık gibi oturdu; ...a5-a4-a3 ile a2 de sabitlendi. Lein 39.Nxe3 ile fili ata değişti ve motor bir an eşitliği gösterdi (0.0), ama c3, e3 ve a3’teki üç ilerlemiş piyon Beyazı tam bir pasifliğe itmişti. **41.Kg2?** (41.Qe1 ile e2 karesini tutmak gerekiyordu, 0.0) ve **42.d4?** (Motor: −1.5) sonrası Siyahın veziri f-hattından içeri girmeye hazırdı; kaynakta oyun 42.d4’ten sonra 0-1 olarak bitiyor. Tal’ın oyunu, atak oyuncusu ününün aksine, tamamen **pozisyonel bir sıkıştırma** örneğidir.',
  intro: 'Maç veri tabanında yalnızca “Tiflis 1969” olarak geçiyor. Tal’ın Wikipedia sayfası onun 1969’da bir böbreğinin alındığını, 1968 sonu – 1969 sonu arasındaki kötü dönemden sonra formunun toparlandığını ve 1969/70’te Tiflis’teki **Goglidze anma turnuvasında 10½/15 ile 1.–2.** olduğunu yazıyor; bu maçın o turnuvadan olması olası, ama kaynaklarda doğrulayamadık. Rakibi **Anatoly Lein** 1968’de büyükusta olmuş güçlü bir Sovyet oyuncusuydu (Wikipedia’ya göre en yüksek reytingi 2545, 1976’da ABD’ye göç etti ve kariyerinde Tal’ı da yendi).\n\n**Açılış: 2.Nc3 e6 3.g3 d5.** Kapalı Sicilya’da Beyaz d4’ü oynamaz; g3, Bg2, d3, f4 ile şah kanadında yavaş bir saldırı kurar. Siyahın 2...e6’sına 3.g3 oynamak ise bir sorun doğurur: Siyah hemen **3...d5** ile merkezde eşitliği alır (Motor: 0.0). Beyaz 4.exd5, 4.Bg2 ya da (bu maçtaki gibi) 4.d3 seçebilir. Siyahın en sağlam cevabı **...d4**’tür: c3 atını kovalar, merkezi kapatır ve Siyaha d4’te bir dayanak verir. Bu modülün ana sırası 4.Bg2 d4 5.Nce2 ile aynı yapıya, burada 6.Bg2 ile ulaşılır.\n\n**Yapı ve planlar.** Beyazın d3-e4 piyonları Siyahın d4-e6 (sonra e5) piyonlarına karşı kilitlenir. Beyaz f4-f5 ve şah kanadı saldırısı ister; Exeter Satranç Kulübü’nün Kapalı Sicilya yazısı da f-hattını kalelerle kullanmayı bu açılışın tipik Beyaz fikri, Siyahın doğal karşı oyununu ise vezir kanadında ...b5-b4 ve ...c5-c4 olarak anlatıyor. Bu maç bu iki planın çarpışmasıdır: Tal önce ...f5 ve ...e5 ile Beyazın şah kanadı planını söndürdü, sonra ...c4-c3 ile vezir kanadındaki planını sonuna kadar götürdü.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Kral Hint Atağı düzeni:** g3, Bg2, d3, Nf3 ve O-O ile sağlam bir kuruluş; 4...d4 sonrası c3 atı e2’ye çekilir ve oradan şah kanadına (g1-h3-f2) yönelir.',
      '**f4-f5 ile şah kanadı saldırısı:** f-piyonuyla Siyah şahına doğru alan almak, f-hattını kalelerle kullanmak. Tal 15...f5 ile bu planı daha başlamadan durdurdu.',
      '**e4 karesini güçlü tutmak:** Qe2, Nf2 ve Rae1 ile e4’ü üç kez korumak; merkez açılınca atı e4’e yerleştirip c5, d6 ve f6’ya baskı yapmak (24.Ne4).',
      '**16.e5 seçeneği:** Merkezi kapatıp d6 ve f6 karelerini almak, sonra h4-h5 ile saldırmak (Motor: 0.0). Lein bunu yerine Rae1 ile esnek kalmayı seçti ve Siyaha ...e5 kırılmasını verdi.',
      '**Vezir kanadını savunmak:** ...c4 gelince b3 ile piyonu tutmak, ...c3 sonrasında da d2/b2 karelerini kaybetmeden vezirini ve filini aktif kareler bulmak.',
      '**Siyahın e3 filini değişmek:** Nf2-g4xe3 manevrası en güçlü Siyah taşından kurtulmanın yoluydu; 39.Nxe3 ile bunu yaptı ama e3’e yeni bir korunan piyon geldi.',
      '**Oyun sonunda e2 karesini tutmak:** Qe1 ve Ke2 ile e-piyonunu durdurmak; 41.Kg2 ve 42.d4 bu kareyi ve şahın güvenliğini bıraktı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...d4 ile alan:** 4...d4 c3 atını kovalar, merkezi kapatır ve Siyaha d4’te Beyaz piyonlarıyla sökülemeyen bir dayanak verir.',
      '**Ters Kral Hint düzeni:** ...g6, ...Bg7, ...Nge7, ...O-O; at e7’de g7 filinin önünü kapatmaz ve gerektiğinde f5’e ya da c6-e5 yoluyla merkeze gelir.',
      '**Önce durdur, sonra kır:** 15...f5 ile f4-f5’i engellemek ve e4’e baskı kurmak, 16...e5 ile de f4’e saldırıp merkezi açmak; böylece g7 fili ve f-hattındaki kaleler canlanır.',
      '**Doğru değişimler:** 18...Bxe5, 22...Rxe5 ve 24...Rxf1+ ile Beyazın saldırı taşlarını değişmek; geriye d4 dayanağı ve vezir kanadı çoğunluğu gibi kalıcı avantajları bırakmak.',
      '**...c4-c3 ile vezir kanadında kama:** 25...c4 ve 26...c3 ile d4’ün koruduğu bir piyonu c3’e yerleştirip d2 ve b2 karelerini Beyaza kapatmak.',
      '**Fili e3’e oturtmak:** 27...Bh6 ve 31...Be3 ile fil d4’ün koruması altında Beyaz şahının yanına yerleşir; g1 ve f2 karelerini kontrol eder.',
      '**...a5-a4-a3 ile yeni zayıflık:** a2 piyonunu sabitlemek, b2 karesini de almak; Beyazın bütün piyonlarını savunmaya bağlamak ve ...e2 gibi kırılmalar için vezirini serbest bırakmak.',
    ] },
  },
  critical: [
    { move: '4b', title: '4...d4: c3 atını kovalamak ve merkezi kapatmak', text: 'Beyaz 4.d3 ile e4’ü korudu ama Bg2’yi geciktirdi. Tal hemen 4...d4 ile c3 atını kovaladı: at e2’ye çekilmek zorunda (5.Bg2?? dxc3 bir taş kaybettirir, Motor: −3.1). Merkez kilitlendi ve Siyah d4’te alan kazandı. Bu yapı 4.Bg2 d4 5.Nce2 ana hattıyla aynıdır; d4 piyonu oyunun sonuna kadar Siyahın bütün planlarının dayanağı olacak (…c4-c3, ...Be3, ...dxe3). Motor 4...d4 ve 4...Nc6’yı eşit görüyor (−0.1).' },
    { move: '10w', title: '10.Kh1: yavaş bir hazırlık', text: 'Beyaz şahı g1-a7 çaprazından çekti ve g1’i ata boşalttı (12.Neg1). Ama bu planın yavaşlığı Siyaha zaman verdi; motor 10.g4!’ü (+0.2) öneriyor: g-piyonu f5 karesini kontrol eder ve ...f5 karşı hamlesini zorlaştırır. 10.Kh1 sonrası değerlendirme −0.4’e indi. Ardından gelen Neg1-h3-f2 turu da (dört hamle) Siyaha ...b6, ...Ba6, ...Qd7, ...Rae8 ile hazırlanma fırsatı verdi.' },
    { move: '15b', title: '15...f5!: önce durdur', text: 'Beyazın taşları f4-f5 için hazırdı. Tal f5 karesine kendi piyonunu koydu: f-piyonu ilerleyemez, e4’e ikinci bir saldırı gelir ve ...e5 kırılması hazırlanır. Motor bunu en iyi hamle görüyor (−0.2); bekleyen 15...a5 ya da 15...Nb4 hamleleri Beyaza 16.e5 ile f6 ve d6 karelerini verirdi (+0.1 / +0.2).' },
    { move: '16b', title: '16...e5!: sonra kır', text: 'Siyah f4 piyonuna saldırır. 17.fxe5 Nxe5 18.Nxe5 Bxe5 sonrası atlar değişir, g7 fili uzun çaprazda (önce e5’te) açılır ve f-hattı Siyah kalelerine kalır. Beyaz 16...e5’e karşı f4’ü tutamaz: 17.Qd1 exf4 −0.6. Motor 16...e5 ve 16...Nb4’ü (…Nxa2 fikri) yaklaşık eşit görüyor (−0.3).' },
    { move: '22b', title: '22...Rxe5: doğru alış', text: 'Siyah e5’i kaleyle aldı. 22...fxe4? 23.Bxg7 e3 24.Bxf8 exd2 25.Rxe8 Qxe8 26.Bxb7 sonrası Beyaz iki fil ve kaleyle vezire karşı üstün olurdu (+1.2); 22...Bxe5 de 23.exf5 Bxg2+ 24.Kxg2 gxf5 25.Qg5+ ile Siyah şahını açardı (+0.5). Kaleyle almak g7 filini savunmada tutar ve kalenin f-hattına geçmesini sağlar (−0.1).' },
    { move: '25b', title: '25...c4!: vezir kanadında kama', text: 'Kaleler değişip Beyaz fili f1’e çekilince Tal c-piyonunu sürdü. 26.dxc4? Bxe4+ 27.Rxe4 Rxf1+ bir taş kaybettiriyordu (Motor: −4.7): f1 fili korumasız kalıyor. 26.b3 c3 sonrası piyon d4 tarafından korunur, d2’deki vezire saldırır, b2 ve d2 karelerini kalıcı olarak alır. Motor 25...Qb5’i biraz daha iyi buluyor (−0.6), ama ...c4 en anlaşılır ve kalıcı plandır (−0.5).' },
    { move: '31b', title: '31...Be3: kazık gibi fil', text: 'Fil h6’dan e3’e gelir; d4 piyonu onu korur ve Beyazın hiçbir piyonu onu kovalayamaz. Fil g1 ve f2’yi kontrol eder, Beyaz şahını ve vezirini bağlar. Beyaz bu fili ancak atını Nf2-g4xe3 yoluyla getirip vererek değişebilir; bu da altı hamle sürdü ve sonunda e3’e yeni bir korunan piyon getirdi.' },
    { move: '41w', title: '41.Kg2?: e2 karesini bırakmak', text: 'e3’teki geçer piyonun önündeki e2 karesi Beyazın savunmasının merkeziydi. 41.Qe1! (0.0) bu kareyi tutar, ardından Ke2 ile şah piyonun önüne geçebilirdi. 41.Kg2 şahı uzaklaştırdı; Tal 41...Be6 ile fili f5/h3 karelerine yönlendirdi ve değerlendirme −1.2’ye düştü. 42.d4? (−1.5) ise 42...Qf5 ile Siyah vezirine f-hattını açtı; kaynakta oyun burada 0-1 bitiyor.' },
  ],
  lessons: [
    '2.Nc3 e6 3.g3 yapısında **3...d5!** Siyaha hemen eşitlik verir; 4.d3 ya da 4.Bg2’ye **...d4** ile c3 atını kovalamak merkezi kapatır ve Siyaha kalıcı alan kazandırır.',
    'Kapalı merkezde zaman önemlidir: Beyazın 10.Kh1, 12.Neg1, 14.Nh3, 15.Nf2 gibi uzun at turları Siyaha ...b6, ...Ba6, ...Qd7, ...Rae8 ile tam hazırlanma fırsatı verdi.',
    'Rakibin piyon saldırısına karşı sıra: **önce durdur, sonra kır.** 15...f5 f4-f5’i engelledi, 16...e5 ise merkezi Siyahın taşları hazırken açtı.',
    'Değişim yaparken hangi kalıcı avantajın kalacağına bakın: Tal atları ve kaleleri değişti, ama d4 dayanağını, uzun çaprazdaki fili ve vezir kanadı piyonlarını korudu.',
    '**Korunan ileri piyon (d4) bir zincirin başıdır:** ...c4-c3, ...Be3 ve ...dxe3 gibi bütün ilerlemeler onun desteğiyle güçlü oldu.',
    'Taşlar azaldıkça ileri piyonlar rakibin taşlarını bağlar: c3, e3 ve a3’teki piyonlar Beyazın vezir, fil ve şahını yalnızca savunmaya mahkûm etti.',
    'Geçer piyonun önündeki kareyi (burada e2) bırakmayın: 41.Qe1 ile eşitlik vardı, 41.Kg2 ve 42.d4 ile oyun kaybedildi.',
  ],
  notes: {
    '1w': {
      text: 'Beyaz şah piyonunu iki kare sürer; d5 ve f5 karelerini kontrol eder, filine ve vezirine yol açar.',
      amac: 'Merkezi piyonla tutmak ve hızlı gelişim. Lein burada e4’ü sonradan d3 ve f4 ile destekleyeceği kapalı bir kuruluş düşünüyor.',
      neden: '1.e4 hem açık oyunlara hem de Kapalı Sicilya gibi yavaş sistemlere kapı açar; Tal gibi bir taktik dahisine karşı Lein açık Sicilya’nın keskin teorisinden kaçmayı seçecek.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; Tal’ın Benoni ve Nimzo-Hint dahil geniş bir repertuvarı vardı. Motor: +0.2.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç, çoğunlukla İngiliz ya da 1.d4 yapılarına döner. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: 'Sicilya Savunması: Siyah c-piyonuyla d4 karesine bakar ve simetriyi bozar.',
      amac: 'Dengesiz bir yapıyla kazanma şansı aramak. Tal Siyahla 1.e4’e karşı en çok Sicilya oynardı.',
      neden: '1...e5 daha simetrik ve dengeli oyunlar verir; Sicilya’da Siyah ...cxd4 sonrası merkezde fazla bir piyon ve yarı açık c-hattı alır, ya da Beyaz Kapalı sistemi seçerse vezir kanadında karşı oyun kurar.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; motorun en çok sevdiği cevap (+0.2), ama daha az dengesizlik.' },
        { move: '1...e6', text: 'Fransız Savunması; merkezde sağlam ama c8 fili sıkışık kalabilir. Motor: +0.35.' },
      ],
    },
    '2w': {
      text: '2.Nc3: Kapalı Sicilya’ya yönelen hamle. Beyaz 2.Nf3 ve 3.d4’ü oynamayıp atı c3’e geliştirir.',
      amac: 'Açık Sicilya’nın Najdorf, Ejderha gibi derin teorisinden kaçmak; g3, Bg2, d3 ve f4 ile şah kanadında yavaş bir saldırı kurmak.',
      neden: 'Kapalı Sicilya o dönemde Smislov ve Spasski gibi oyuncuların da kullandığı pozisyonel bir silahtı. At c3’ten d5’e bakar ve ...d5 hamlesini zorlaştırır; ama c-piyonunun önünü kapattığı için Beyaz c3-d4 kuruluşunu kullanamaz.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya hazırlık (3.d4). Motor bunu en iyi görüyor (+0.5).' },
        { move: '2.c3', text: 'Alapin Varyantı: d4’ü piyonla destekleyip tam merkez kurmak. Motor: +0.3.' },
      ],
    },
    '2b': {
      text: 'Siyah e-piyonunu bir kare sürer; ...d5 hamlesini hazırlar ve f8 filine yol açar.',
      amac: 'Merkezde hemen ...d5 ile tavır almak. Kapalı Sicilya’nın klasik ...Nc6, ...g6, ...d6 kuruluşu yerine Fransız tarzı bir merkez.',
      neden: '2...e6 Beyazın g3-Bg2 planına karşı özellikle etkilidir: fil g2’ye gelmeden ...d5 oynanırsa uzun çapraz kapanır. Ayrıca Beyaz 3.Nf3 ve 4.d4 ile açık Sicilya’ya dönmek isterse Siyah Taimanov/Paulsen yapılarına geçebilir.',
      diger: [
        { move: '2...Nc6', text: 'Kapalı Sicilya’nın ana hattı: 3.g3 g6 4.Bg2 Bg7 5.d3 d6. Motor: +0.4.' },
        { move: '2...d6', text: 'Esnek; 3.Nge2 ya da 3.f4 ile devam edilir. Motor: +0.35.' },
        { move: '2...a6', text: 'Hem ...b5 hem ...d5 fikirlerini hazırlar. Motor: +0.4.' },
      ],
    },
    '3w': {
      text: '3.g3: fil g2’ye gelecek ve uzun çaprazdan e4 ve d5 karelerini destekleyecek.',
      amac: 'Kapalı Sicilya’nın tipik kuruluşu: g3, Bg2, d3, f4, Nf3 (ya da Nge2) ve O-O.',
      neden: 'Bu sıranın bir kusuru var: fil henüz g2’de olmadığından Siyah hemen ...d5 oynayabilir ve Beyazın e4 piyonu baskı altına girer. Bu yüzden motor 3.g3’e yaklaşık eşit (0.0) bakıyor; 3.Nf3 ile açık Sicilya’ya dönmek ya da 3.Nge2 daha iyi sayılır.',
      diger: [
        { move: '3.Nf3', text: 'Ardından 4.d4 ile açık Sicilya (Taimanov/Paulsen yapıları). Motor: +0.3.' },
        { move: '3.Nge2', text: '4.d4’ü hazırlar; 3...d5 4.exd5 exd5 5.d4 ile Siyaha tek kalmış d-piyonu verir. Motor: +0.4.' },
        { move: '3.d4', text: 'Doğrudan merkez: 3...cxd4 4.Qxd4 Nc6 ile vezir erken çıkar. Motor: +0.2.' },
      ],
    },
    '3b': {
      text: 'Siyah merkezde hemen 3...d5 ile e4 piyonuna saldırır.',
      amac: 'Fil g2’ye gelmeden merkezde eşitliği almak; Beyazı ya değişime ya da merkezi kapatmaya zorlamak.',
      neden: 'Bu 3.g3’ün sırasını cezalandıran hamledir (Motor: 0.0). 3...Nc6 ya da 3...Nf6 de oynanabilir, ama Beyaz 4.Bg2 ile ...d5’i zorlaştırır. Bu modülün adı da bu yapıdan gelir.',
      diger: [
        { move: '3...Nc6', text: '4.Bg2 sonrası ...d5 artık daha zordur; klasik Kapalı Sicilya’ya geçer. Motor: +0.1.' },
        { move: '3...Nf6', text: '4.e5 Nd5 5.Nxd5 exd5 ile Beyaz alan alır. Motor: +0.3.' },
      ],
    },
    '4w': {
      text: '4.d3: Beyaz e4’ü piyonla korur. Ana hatta 4.Bg2 oynanır; burada fil iki hamle sonra gelecek.',
      amac: 'Kral Hint Atağı tipi bir merkez (d3-e4) kurmak ve e4’ü değiştirmeden tutmak.',
      neden: '4.exd5 exd5 Siyaha serbest bir oyun verir; 4.Bg2 ise 4...d4 5.Nce2 sonrası aynı yapıya varır. 4.d3 ile Beyaz ...dxe4 değişimini önler, ama Siyahın ...d4’ü hâlâ mümkündür. Motor: 4.d3 ve 4.exd5 eşit (0.0), 4.Bg2 −0.2.',
      diger: [
        { move: '4.exd5', text: '4...exd5 5.Bg2 (ya da 5.d4) ile açık merkez; modüldeki bazı oyunlar bu yoldan aynı yapıya gelir. Motor: 0.0.' },
        { move: '4.Bg2', text: 'Modülün ana sırası: 4...d4 5.Nce2 aynı yapıyı verir; 4...dxe4 5.Nxe4 de oynanır. Motor: −0.2.' },
        { move: '4.f4', text: 'Keskin: 4...dxe4 5.Nxe4 ile merkez açılır. Motor: −0.1.' },
      ],
    },
    '4b': {
      text: '4...d4!: Siyah c3 atını kovalar ve merkezi kapatır.',
      amac: 'd4’te Beyaz piyonlarıyla sökülemeyen bir dayanak kurmak ve atı pasif e2 karesine göndermek.',
      neden: 'd3 piyonu artık e4’ü koruduğu için ...dxe4 dxe4 Siyaha bir şey vermez; ...d4 ise Beyazın c-piyonu c3’te değil c2’de olduğu için kolayca sökülemez (c3 hamlesi önce atın çekilmesini gerektirir). Bu yapı Siyaha ters Kral Hint düzenini, d4’te fazladan alanla verir. Motor: 4...d4 = 4...Nc6 (−0.1).',
      diger: [
        { move: '4...Nc6', text: 'Esnek: 5.f4 d4 6.Nce2 e5 ile benzer yapı. Motor: −0.1.' },
        { move: '4...Nf6', text: 'e4’e baskı; 5.Bg2 Nc6 6.f4 ile Beyaz kuruluşunu tamamlar. Motor: 0.0.' },
        { move: '4...dxe4', text: '5.Nxe4 Nc6 6.Bg2 ile Beyazın atı merkeze gelir ve g2 fili açılır; Siyahın ...d5 hamlesinin amacı kaybolur. Motor: +0.3.' },
      ],
    },
    '5w': {
      text: 'At e2’ye çekilir; buradan g1-h3-f2 ya da f4 yolunu kullanabilir.',
      amac: 'Atı korumak ve f4 hamlesinin önünü açık tutmak; c2-c3 ile d4’e baskı fikrini saklamak.',
      neden: 'At saldırı altında ve başka iyi kare yok: 5.Bg2?? dxc3 bir taş kaybettirir (Motor: −3.1), 5.Nb1 ise gelişimi geri alır (−0.5). e2’de at f-piyonunu kapatmaz.',
      diger: [
        { move: '5.Nb1', text: 'At c3 piyonu için yer açar ama tam bir tempo kaybıdır. Motor: −0.5.' },
        { move: '5.Bg2??', text: '5...dxc3 ve Beyaz bir taş eksik kalır. Motor: −3.1.' },
      ],
    },
    '5b': {
      text: 'At c6’ya gelişir ve d4 piyonunu destekler.',
      amac: 'd4’ü korumak, ...e5 ile merkezi tamamlamak ya da gerekirse ...Nb4 ile vezir kanadına baskı yapmak.',
      neden: 'c3 sökme girişimine karşı d4’ü ikinci kez korur. Motor 5...e5’i biraz daha iyi buluyor (−0.2): Siyah merkezi hemen kurup fili d6’ya geliştirir. Tal ise e-piyonunu e6’da tutarak ...g6-Bg7 kuruluşunu ve f5 karesini esnek bıraktı.',
      diger: [
        { move: '5...e5', text: '6.f4 Bd6 7.Nf3 Nc6: klasik ters Kral Hint, fil d6’da. Motor: −0.2.' },
        { move: '5...Bd6', text: '...e5 ve ...Ne7 ile benzer kuruluş. Motor: −0.2.' },
      ],
    },
    '6w': {
      text: 'Fil g2’ye gelişir; artık yapı 4.Bg2 d4 5.Nce2 hattıyla aynı.',
      amac: 'Uzun çaprazdan e4’ü desteklemek ve rok için hazırlanmak.',
      neden: 'Gelişimin doğal devamı. 6.f4 de mümkündü (−0.1); fil önce gelir ki ...e5 sonrası f4 hamlesi hazır olsun. 6.Bh3 ile c8 filini değişmek de bir fikirdir ama Beyazın açık renk karelerini zayıflatır (−0.3).',
      diger: [
        { move: '6.f4', text: 'Önce f-piyonu: 6...e5 7.Nf3 Bd6 8.Bg2. Motor: −0.1.' },
        { move: '6.Bh3', text: '6...e5 7.Bxc8 Qxc8 ile fil değişimi; Beyaz g2 filinin savunmasını kaybeder. Motor: −0.3.' },
      ],
    },
    '6b': {
      text: '6...g6: Siyah da filini uzun çapraza koyacak; bu ters bir Kral Hint düzenidir.',
      amac: 'Fili g7’den d4’e ve uzun çapraza yöneltmek; at ...Nge7 ile f5’e gelebilsin diye f6 karesini boş bırakmak.',
      neden: 'Bu, Beyazın kuruluşunun aynası ama bir tempo eksik değil, d4’te fazladan alanla. Motor ...Bd6 ya da ...e5’i (−0.1) biraz daha iyi buluyor; Tal fianchetto ile uzun çaprazı seçti, çünkü merkez açılınca bu fil en güçlü taşı olacaktı (…e5 sonrası 18...Bxe5).',
      diger: [
        { move: '6...e5', text: '7.f4 Bd6 8.Nf3 f6: sağlam ama pasif bir merkez. Motor: −0.1.' },
        { move: '6...Bd6', text: 'f4 piyonuna baskı; 7.f4 f6 8.Nf3 e5 ile benzer yapı. Motor: −0.1.' },
        { move: '6...Nf6', text: 'Klasik gelişim; 7.f4 b5 ile vezir kanadı karşı oyunu. Motor: 0.0.' },
      ],
    },
    '7w': {
      text: '7.f4: Beyaz şah kanadında alan alır ve f5 ilerleyişini hazırlar.',
      amac: 'Kapalı Sicilya’nın ana planı: f4-f5 ile şah kanadını açmak, f-hattını kalelerle kullanmak.',
      neden: 'Merkez kapalı olduğu için Beyaz oyunu kanatta aramalı. f4 aynı zamanda ...e5’i bir hedefe çevirir: e5 gelirse f4 piyonu değişebilir ya da e5 karesine baskı yapar. Motor: +0.1 (en iyi).',
      diger: [
        { move: '7.Bd2', text: 'Önce gelişim; f4 sonra gelir. Motor: +0.1.' },
        { move: '7.a3', text: 'Vezir kanadında ...Nb4’ü önler ve b4 fikrini hazırlar. Motor: −0.1.' },
      ],
    },
    '7b': {
      text: 'Fil g7’ye gelir ve d4 piyonunu destekler.',
      amac: 'Uzun çaprazı tutmak; merkez açıldığında bu fil e5 ve b2 karelerine baskı yapacak.',
      neden: 'g6’nın mantıklı devamı. Motor 7...Nge7’yi biraz daha esnek buluyor (+0.05): at önce gelirse ...e5 seçenekleri açık kalır. Fark küçüktür; iki hamle de aynı kuruluşa varır.',
      diger: [
        { move: '7...Nge7', text: 'Önce at: 8.Nf3 e5 9.O-O Bg7. Motor: +0.05.' },
        { move: '7...e5', text: 'Hemen merkez: 8.Nf3 Bg7 9.O-O Nge7. Motor: +0.1.' },
      ],
    },
    '8w': {
      text: 'At f3’e gelişir; e5 ve g5 karelerine bakar, rok için yolu açar.',
      amac: 'Gelişimi tamamlamak ve ...e5 kırılmasına karşı e5 karesini kontrol etmek.',
      neden: 'Doğal hamle. Motor 8.e5’i de eşit buluyor (+0.1): piyon d6 ve f6’yı alır, g7 filini kapatır ve Siyahın ...e5 planını önler; ama e5 piyonu ileride bir hedef olabilir. Lein esnek kalmayı tercih etti.',
      diger: [
        { move: '8.e5', text: 'Merkezi kilitler, d6/f6’ya alan; 8...Bd7 9.Nf3 h5. Motor: +0.1.' },
        { move: '8.a3', text: 'Vezir kanadında bekleme hamlesi; ...Nb4’ü önler. Motor: 0.0.' },
      ],
    },
    '8b': {
      text: '8...Nge7: at f6 yerine e7’ye gelişir.',
      amac: 'g7 filinin önünü kapatmamak ve atı f5’e (Beyazın e4-f4 piyonlarına) ya da c6 yoluyla e5’e götürebilmek.',
      neden: 'Bu yapıda at f6’da e4-e5 ile kovalanabilir; e7’de ise güvendedir ve f5 karesini kontrol eder. Motor 8...e5’i biraz daha iyi buluyor (0.0), Tal önce gelişimi tamamlamayı seçti (+0.1).',
      diger: [
        { move: '8...e5', text: '9.O-O Nge7 10.a4 O-O: merkezi hemen kurmak. Motor: 0.0.' },
        { move: '8...Bd7', text: 'Fili geliştirmek; 9.a3 Nge7 10.O-O a5. Motor: +0.2.' },
      ],
    },
    '9w': {
      text: 'Beyaz kısa rok yapar; şah güvene alınır, f1 kalesi f-hattına bağlanır.',
      amac: 'f4-f5 planı için kaleyi f-hattına getirmek.',
      neden: 'Merkez kapalı, şahın g1’de durması uygun. 9.e5 (0.0) ya da 9.Bd2 de eşdeğer; rok önce gelirse Beyaz ...e5’e karşı f-hattını hazır tutar.',
      diger: [
        { move: '9.e5', text: 'd6 ve f6 karelerini almak: 9...O-O 10.O-O Nd5. Motor: 0.0.' },
        { move: '9.Bd2', text: 'Önce fil, sonra rok. Motor: 0.0.' },
      ],
    },
    '9b': {
      text: 'Siyah da rok yapar.',
      amac: 'Şahı güvene almak ve f8 kalesini ...f5 kırılması için f-hattına getirmek.',
      neden: 'Doğal hamle; ileride ...f5 ile f-hattı açılacak. Motor 9...e5 ile merkezi hemen kurmayı biraz daha iyi buluyor (0.0 / +0.2); Tal ...e5 kararını sonraya, Beyazın taşları yerleşene kadar erteledi.',
      diger: [
        { move: '9...e5', text: '10.Rf2 a5 11.Qf1 Nb4: merkezi hemen sabitlemek. Motor: 0.0.' },
        { move: '9...b6', text: 'Vezir kanadı hazırlığı; 10.g4 h5 keskin. Motor: +0.1.' },
      ],
    },
    '10w': {
      text: '10.Kh1: şah köşeye çekilir, g1 karesi ata boşalır.',
      amac: 'Şahı g1-a7 çaprazından ve olası ...Qb6 baskısından çıkarmak; Ne2-g1-h3-f2 manevrasını hazırlamak.',
      neden: 'Mantığı olan ama yavaş bir hamle. Motor 10.g4!’ü öneriyor (+0.2): g-piyonu f5 karesini kontrol eder, Siyahın ...f5 karşı hamlesini zorlaştırır ve f4-f5 saldırısını hızlandırır. 10.Kh1 sonrası değerlendirme Siyah lehine döndü (−0.4).',
      diger: [
        { move: '10.g4', text: 'f5 karesini kontrol eden saldırı hamlesi: 10...b6 11.e5 Nd5 12.Ng5 ile Beyaz inisiyatif alır. Motor: +0.2.' },
        { move: '10.e5', text: 'Merkezi kapatıp d6 ve f6’yı almak: 10...Nd5 11.Ng5 f6. Motor: 0.0.' },
        { move: '10.a3', text: 'Önce vezir kanadında ...Nb4’ü önlemek. Motor: +0.1.' },
      ],
    },
    '10b': {
      text: '10...b6: fil b7 ya da a6’ya gelecek; vezir kanadında ilerleme hazırlanır.',
      amac: 'c8 filini geliştirmek ve ileride ...c4 ya da ...a5-a4 ile vezir kanadında karşı oyun kurmak.',
      neden: 'c8 fili e6 piyonunun arkasında kapalı; b6 ile ona iki çapraz açılır. Motor bunu en iyi hamle görüyor (−0.3). Fil a6’dan d3’e, b7’den e4’e baskı yapabilir.',
      diger: [
        { move: '10...a5', text: 'Vezir kanadında alan: 11.e5 b6 12.g4 f5. Motor: −0.2.' },
        { move: '10...Qd7', text: 'Önce vezir; kaleleri bağlar. Motor: −0.2.' },
      ],
    },
    '11w': {
      text: 'Fil d2’ye gelişir; b4 ve a5 karelerine bakar, kaleleri bağlar.',
      amac: 'Gelişimi tamamlamak ve vezir kanadını ...Nb4 baskısına karşı korumak.',
      neden: 'c1 filinin başka iyi karesi yok (e3 d4 piyonu yüzünden kapalı). Motor 11.Rb1’i biraz daha iyi buluyor (−0.2): b2-b4 fikrine hazırlık. 11.Bd2 −0.4.',
      diger: [
        { move: '11.Rb1', text: 'Vezir kanadında b4 hazırlığı; 11...Bb7 12.a3 a5. Motor: −0.2.' },
        { move: '11.Neg1', text: 'Hemen at manevrası; 11...Qd7 12.Qe2 Bb7. Motor: −0.4.' },
      ],
    },
    '11b': {
      text: '11...Ba6: fil a6’dan d3 piyonuna ve e2 karesine bakar.',
      amac: 'd3’e baskı yapmak ve Beyazın e2’deki atını rahatsız etmek; Beyaz ...c4 tehdidini hesaba katmak zorunda kalır.',
      neden: 'Fil a6’da ...c4 ile birlikte d3’e çift baskı yapar. Motor 11...Qd7’yi biraz daha iyi buluyor (−0.4); fil sonra 14...Bb7 ile uzun çapraza döneceği için bu bir tempo kaybı sayılabilir, ama Beyazın atı e2’den çekilmeye zorlandı.',
      diger: [
        { move: '11...Qd7', text: 'Önce vezir: 12.a3 a5 13.Neg1 a4. Motor: −0.4.' },
        { move: '11...Bb7', text: 'Doğrudan uzun çapraz; 12.g4 f5 13.gxf5 exf5. Motor: −0.3.' },
      ],
    },
    '12w': {
      text: '12.Neg1: at g1’e çekilir; h3 üzerinden f2’ye gidecek.',
      amac: 'e2 karesini vezire açmak ve atı f2’de e4 ile g4’ü koruyacak bir kareye götürmek.',
      neden: 'At e2’de hem a6 filinin hedefi hem de vezirin önünde. Motor bu hamleyi en iyi görüyor (−0.2). Ama Ng1-h3-f2 toplam üç hamle daha sürecek; bu, Kapalı Sicilya’da Beyazın sık başvurduğu yavaş ama sağlam bir manevradır.',
      diger: [
        { move: '12.h4', text: 'Şah kanadında alan; 12...Qd7 13.Neg1 e5. Motor: −0.3.' },
        { move: '12.a3', text: 'Vezir kanadını sağlamlaştırmak; 12...f5 13.e5 Qd7. Motor: −0.3.' },
      ],
    },
    '12b': {
      text: 'Vezir d7’ye gelir ve kaleleri bağlar.',
      amac: 'a8 kalesini merkeze getirmek ve vezirle f5/e6 karelerini desteklemek.',
      neden: 'Siyahın kaleleri e8 ve f8’de ...e5 ve ...f5 kırılmalarını destekleyecek; bunun için vezirin geri sıradan çıkması gerekiyordu. Motor 12...f5 ile eşdeğer görüyor (−0.2).',
      diger: [
        { move: '12...f5', text: 'Hemen önlem: 13.Qe2 Qd7 14.e5 Nd5. Motor: −0.2.' },
        { move: '12...Rc8', text: '...c4 hazırlığı: 13.Nh3 c4 14.Qe2 c3. Motor: −0.2.' },
      ],
    },
    '13w': {
      text: 'Vezir e2’de e4’ü destekler ve a6 filinin d3’e baskısını karşılar.',
      amac: 'e4’ü korumak, d3’ü savunmak ve Rae1 ile e-hattını hazırlamak.',
      neden: 'e2 karesi atın çekilmesiyle boşaldı; vezir burada hem merkezde hem de f-hattına yakın. Motor en iyi hamle görüyor (−0.2).',
      diger: [
        { move: '13.h4', text: 'h4-h5 ile şah kanadı saldırısı; 13...e5 14.Bh3 f5. Motor: −0.3.' },
        { move: '13.Nh3', text: 'Önce at: 13...f5 14.Qe2 Rae8. Motor: −0.3.' },
      ],
    },
    '13b': {
      text: 'Kale e8’e gelir; ...e5 kırılmasını destekleyecek.',
      amac: 'e-hattını hazırlamak: merkez açılınca e8 kalesi e5’te ya da e-hattında aktif olacak.',
      neden: 'Siyahın planı ...f5 ve ...e5; f8 kalesi f-hattında, a8 kalesi e-hattında yer alır. Motor 13...Rac8 (…c4 fikri) ile eşdeğer görüyor (−0.2). Tal merkez kırılmasını seçti, vezir kanadı planını sonraya bıraktı.',
      diger: [
        { move: '13...Rac8', text: '...c4 hazırlığı: 14.Nh3 e5 15.a4 exf4. Motor: −0.2.' },
        { move: '13...f5', text: 'Kalesiz hemen ...f5: 14.a3 e5 15.Nxe5. Motor: −0.1.' },
      ],
    },
    '14w': {
      text: 'At h3’e gelir; f2’ye geçip e4 ve g4 karelerini koruyacak.',
      amac: 'Atı f2’ye götürmek; f4’ü desteklemek ve f-hattını kaleye açık bırakmak.',
      neden: 'Exeter Satranç Kulübü’nün Kapalı Sicilya yazısı Nh3 fikrini “f4’ü destekler ve f-hattını kalelere açık bırakır” diye anlatıyor. Ama burada at h3’te durmuyor, f2’ye gidiyor: bu bir tempo daha demek. Motor 14.a3’ü (−0.1) öneriyor; 14.Nh3 sonrası −0.3.',
      diger: [
        { move: '14.a3', text: 'Vezir kanadında ...Nb4’ü önler: 14...f5 15.e5 Nd5 16.h4. Motor: −0.1.' },
        { move: '14.a4', text: 'Vezir kanadında alan: 14...f5 15.e5 Nd5. Motor: −0.2.' },
      ],
    },
    '14b': {
      text: 'Fil b7’ye döner ve uzun çaprazdan e4’e baskı yapar.',
      amac: '...f5 sonrası e4’e ikinci saldırıyı hazırlamak; fil b7’de g2’deki Beyaz filine de karşı durur.',
      neden: 'Beyazın atı e2’den gittiği için a6’daki fil artık bir şey yapmıyordu. b7’den ...f5 ve ...fxe4 ile birlikte e4’e baskı yapar. Motor 14...f5’i (−0.4) biraz daha iyi buluyor; fark küçük.',
      diger: [
        { move: '14...f5', text: 'Hemen: 15.Rae1 c4 16.exf5 cxd3 ile Siyah aktif. Motor: −0.4.' },
        { move: '14...e5', text: 'Önce e5: 15.Kg1 Bc8 16.Rae1 h6. Motor: −0.3.' },
      ],
    },
    '15w': {
      text: 'At f2’ye yerleşir; e4 ve g4’ü korur.',
      amac: 'e4’ü üçüncü kez korumak ve f-hattındaki kaleyi serbest bırakmak.',
      neden: 'Manevra tamamlandı. Motor 15.Kg1 ve 15.Nf2’yi eşit görüyor (−0.2). At f2’de iyi korunur ama aktif değildir; Siyah bu arada bütün taşlarını hazırladı.',
      diger: [
        { move: '15.Kg1', text: 'Şahı geri getirmek: 15...e5 16.Rae1 exf4 17.Nxf4. Motor: −0.1.' },
        { move: '15.a3', text: 'Bekleme: 15...e5 16.Rae1 f5. Motor: −0.3.' },
      ],
    },
    '15b': {
      text: '15...f5!: Siyah f-piyonunu iki kare sürer.',
      amac: 'Beyazın f4-f5 ilerleyişini kökten engellemek, e4’e baskı kurmak ve ...e5 kırılmasını hazırlamak.',
      neden: 'Beyazın bütün taşları f5 hamlesi için hazırdı. Bu hamle onu durdurur; ayrıca e4 artık fxe4 ile değişebilir ve b7 filinin uzun çaprazı açılabilir. Motor en iyi hamle görüyor (−0.2). Bekleyen hamleler Beyaza 16.e5 ile d6 ve f6’yı verirdi.',
      diger: [
        { move: '15...a5', text: '16.e5! f5 17.exf6 Bxf6 ile Beyazın taşları serbest kalır. Motor: +0.1.' },
        { move: '15...Nb4', text: 'Vezir kanadına geçmek; 16.c3 dxc3 17.bxc3 Nbc6 ile Beyaz merkezde güçlenir. Motor: +0.2.' },
      ],
    },
    '16w': {
      text: 'Kale e1’e gelir ve e-hattını destekler.',
      amac: 'e4’ü dördüncü kez desteklemek, merkez açılırsa e-hattını tutmak.',
      neden: 'Lein merkezi esnek tuttu. Motor 16.e5’i biraz daha iyi buluyor (−0.1): merkez kilitlenir, Siyahın ...e5 kırılması ortadan kalkar ve d5’e gelen atı Beyaz h4-h5 ile şah kanadında oynayabilir. 16.Rae1 sonrası Siyah ...e5 ile merkezi açar (−0.3).',
      diger: [
        { move: '16.e5', text: 'Merkezi kilitlemek: 16...Nd5 17.h4 Rf7 18.Ng5; Siyahın ...e5 fikri kalkar. Motor: −0.1.' },
        { move: '16.Kg1', text: '16...e5 17.fxe5 Nxe5 18.Nxe5 Bxe5 ile benzer. Motor: −0.3.' },
      ],
    },
    '16b': {
      text: '16...e5!: merkez kırılması; f4 piyonuna saldırı.',
      amac: 'Merkezi Siyahın taşları hazırken açmak; g7 filini canlandırmak ve f-hattını Siyah kalelerine vermek.',
      neden: 'Beyaz f4’ü tutamaz: 17.Qd1 exf4 18.Bxf4 Nd8 Siyaha f4’te aktif oyun verir (−0.6). 17.fxe5 Nxe5 sonrası atlar değişir ve fil e5’e gelir. Motor 16...e5 ve 16...Nb4’ü (17.Qd1 Nxa2 ile piyon kazanma fikri) eşit görüyor (−0.3).',
      diger: [
        { move: '16...Nb4', text: 'Vezir kanadında piyon kazanma: 17.Qd1 Nxa2 18.Qa1 Qa4; at a2’de uzakta kalır. Motor: −0.3.' },
        { move: '16...Nd8', text: 'At f7’ye: 17.Kg1 Nf7 18.a3 e5; daha yavaş. Motor: 0.0.' },
      ],
    },
    '17w': {
      text: 'Beyaz e5’te alır.',
      amac: 'f4 piyonunu kaybetmemek ve f-hattını açmak.',
      neden: 'Diğer hamleler daha kötü: 17.Nxe5 Nxe5 18.fxe5 Bxe5 aynı yere varır (−0.3), 17.Qd1 exf4 ise f4’ü Siyaha bırakır (−0.6).',
      diger: [
        { move: '17.Nxe5', text: '17...Nxe5 18.fxe5 Bxe5: benzer yapı. Motor: −0.3.' },
        { move: '17.Qd1', text: '17...exf4 18.Bxf4 Nd8 ile Siyah aktif. Motor: −0.6.' },
      ],
    },
    '17b': {
      text: 'At e5’te alır ve f3 atına saldırır.',
      amac: 'Piyonu geri almak ve f3 atını değişmeye zorlamak.',
      neden: 'Pratikte tek hamle: 17...fxe4 18.Nxe4 sonrası e5 piyonu Beyazda kalır ve e4’teki at çok güçlü olur (+0.4). At e5’te merkezde ve f3’e saldırıyor; Beyaz değişmek zorunda.',
      diger: [
        { move: '17...fxe4', text: '18.Nxe4 Nf5 19.g4 Nxe5: e4 atı çok güçlü. Motor: +0.4.' },
      ],
    },
    '18w': {
      text: 'Atlar değişir.',
      amac: 'Güçlü e5 atından kurtulmak.',
      neden: 'Zorunlu sayılır: 18.Qd1 Ng4 f2 atını değişir (−0.7), 18.Kg1 Nxf3+ ise e4’ü zayıflatır (−0.9).',
      diger: [
        { move: '18.Qd1', text: '18...Ng4 19.c3 Nxf2+ 20.Rxf2: iki fil Siyahta. Motor: −0.7.' },
      ],
    },
    '18b': {
      text: 'Fil e5’te geri alır; başka hamle bir taş kaybettirirdi.',
      amac: 'Maddeyi eşitlemek ve fili merkeze, uzun çapraza getirmek.',
      neden: 'Zorunlu geri alış (18...Qd8? 19.Nc4 ile Siyah bir taş eksik kalır, +3.9). Fil e5’ten hem b2’ye hem g3’e bakar ve e-hattında kale ile birlikte çalışır.',
    },
    '19w': {
      text: 'Fil g5’ten e7 atına saldırır.',
      amac: 'e7 atını bağlamak ya da değişmek; e5 filini geri çekilmeye zorlamak.',
      neden: 'Fil d2’den daha aktif bir kare arıyor. Ama g5’te fil kolayca kovalanabilir; motor 19.Kg1 ya da 19.b3’ü (−0.2/−0.3) biraz daha iyi buluyor. 19.Bg5 −0.4.',
      diger: [
        { move: '19.Kg1', text: 'Şahı güvenli kareye almak: 19...Bg7 20.Qd1 fxe4 21.Nxe4. Motor: −0.2.' },
        { move: '19.b3', text: 'Vezir kanadını sağlamlaştırmak. Motor: −0.3.' },
      ],
    },
    '19b': {
      text: 'Fil g7’ye döner ve şahı korur.',
      amac: 'Fili güvenli bir kareye çekmek; uzun çaprazı korumak ve h6 ile g5 filini kovalama fikrini saklamak.',
      neden: 'e7 atı korunuyor (vezir ve kale), bu yüzden fil e5’ten çekilebilir. Motor bunu en iyi görüyor (−0.4). 19...Nc6 de mümkündü ama atı aktif kareye geçirmeden fil e5’te savunmasız kalırdı (−0.2).',
      diger: [
        { move: '19...Nc8', text: 'At d6’ya: 20.Qd1 Nd6 21.exf5. Motor: −0.4.' },
        { move: '19...Nc6', text: '20.Qd2 Nb4 21.Kg1 Nxa2: piyon kazanma ama at uzakta. Motor: −0.2.' },
      ],
    },
    '20w': {
      text: 'Vezir d2’ye gelir; g5 filini korur ve f4-h6 çaprazlarına bakar.',
      amac: 'Fili desteklemek ve Bh6 ile g7 filini değişme fikrini hazırlamak.',
      neden: 'Motor 20.Qd1’i biraz daha iyi buluyor (−0.2): 20...Nc6 21.exf5 ile e-hattında kaleler değişir. d2’de vezir ileride ...c4-c3 hamlesiyle saldırı altına girecek.',
      diger: [
        { move: '20.Qd1', text: '20...Nc6 21.exf5 Rxe1 22.Rxe1 ile dengeli. Motor: −0.2.' },
        { move: '20.Bxe7', text: '20...Rxe7 21.Qd2 c4: Siyah iki fil kazanır. Motor: −0.5.' },
      ],
    },
    '20b': {
      text: 'At c6 üzerinden e5’e gidecek.',
      amac: 'Atı e5’e, merkezin en iyi karesine yerleştirmek; g5 filinin baskısından kurtulmak.',
      neden: 'At e7’de g5 filinin hedefiydi. Motor 20...fxe4 ya da 20...c4’ü biraz daha iyi buluyor (−0.5/−0.3); 20...Nc6 −0.2. Tal sade bir plan seçti: at e5’e gelsin, Beyaz ya değişsin ya da e5’teki ata katlansın.',
      diger: [
        { move: '20...fxe4', text: '21.Nxe4 Nf5 22.b3 Bc6: Siyah f-hattında aktif. Motor: −0.5.' },
        { move: '20...c4', text: '21.dxc4 fxe4 22.Bxe4 Bxe4+ 23.Rxe4 Nf5: erken vezir kanadı kırılması. Motor: −0.3.' },
      ],
    },
    '21w': {
      text: 'Fil f4’ten e5 karesini kontrol eder.',
      amac: 'Atın e5’e gelişini karşılamak; gerekirse Bxe5 ile değişmek.',
      neden: 'Motor 21.exf5’i biraz daha iyi buluyor (−0.1): 21...Rxe1 22.Rxe1 Ne5 23.f6 ile Beyaz aktif. 21.Bf4 −0.25; Beyaz e5’e gelecek atı değişmeye hazırlanıyor.',
      diger: [
        { move: '21.exf5', text: '21...Rxe1 22.Rxe1 Ne5 23.f6 ile Beyaz piyonu ileri götürür. Motor: −0.1.' },
        { move: '21.Kg1', text: '21...Nb4 22.a3 fxe4. Motor: −0.3.' },
      ],
    },
    '21b': {
      text: 'At e5’e yerleşir.',
      amac: 'Merkezin en güçlü karesini almak; Beyazı Bxe5 değişimine zorlamak.',
      neden: 'At e5’te d3 ve f3’e bakar ve f4 filiyle değişmek Beyazın iyi filini ortadan kaldırır. Motor 21...Ne5 ve 21...fxe4’ü eşit görüyor (−0.1).',
      diger: [
        { move: '21...fxe4', text: '22.Nxe4 Nb4 23.h4 Nxa2. Motor: −0.1.' },
        { move: '21...Be5', text: 'Fil değişimi: 22.Bh6 Bg7 23.Bxg7 Kxg7. Motor: −0.1.' },
      ],
    },
    '22w': {
      text: 'Beyaz filini e5 atıyla değişir.',
      amac: 'Merkezdeki güçlü atı ortadan kaldırmak.',
      neden: 'At e5’te kalırsa ...Ng4 ile f2 atını değişebilir ya da d3’e baskı yapar. Motor 22.Bxe5’i en iyi görüyor (−0.1).',
      diger: [
        { move: '22.b3', text: '22...fxe4 23.Nxe4 Ng4 24.h3. Motor: −0.15.' },
        { move: '22.Kg1', text: '22...fxe4 23.Nxe4 Ng4 ile Siyah aktif. Motor: −0.4.' },
      ],
    },
    '22b': {
      text: 'Kale e5’te alır.',
      amac: 'g7 filini savunmada tutmak ve kaleyi e5’ten f5’e geçirmeye hazırlamak.',
      neden: '22...fxe4? bir taktik hatası olurdu: 23.Bxg7 e3 24.Bxf8 exd2 25.Rxe8 Qxe8 26.Bxb7 ile Beyaz üstün (+1.2). 22...Bxe5 de 23.exf5 Bxg2+ 24.Kxg2 gxf5 25.Qg5+ ile şahı açar (+0.5). Kaleyle almak doğrudur (−0.1).',
      diger: [
        { move: '22...fxe4?', text: '23.Bxg7 e3 24.Bxf8 exd2 25.Rxe8 Qxe8 26.Bxb7: Beyaz üstün. Motor: +1.2.' },
        { move: '22...Bxe5', text: '23.exf5 Bxg2+ 24.Kxg2 gxf5 25.Qg5+ Bg7 26.Rxe8 ile Siyah şahı zayıf. Motor: +0.5.' },
      ],
    },
    '23w': {
      text: 'Beyaz f5’te alır.',
      amac: 'Merkezdeki gerginliği çözmek ve e-hattını açmak.',
      neden: '23.exf5 doğal ve en iyi (−0.1). Bekleyen 23.Kg1 Rfe8 ya da 23.b3 Rfe8 24.exf5 Bh6! sonrası Siyahın taşları daha aktif olur (−0.25/−0.65).',
      diger: [
        { move: '23.Kg1', text: '23...Rfe8 24.exf5 Bh6 25.Qxh6. Motor: −0.25.' },
        { move: '23.b3', text: '23...Rfe8 24.exf5 Bh6 ile vezir saldırı altında. Motor: −0.65.' },
      ],
    },
    '23b': {
      text: 'e5 kalesi f5’te alır; f-hattında kaleler ikilenir.',
      amac: 'f-hattını almak ve f2 atına baskı yapmak.',
      neden: '23...Rxe1 24.Rxe1 Rxf5 de olurdu (+0.2) ama Beyazın kalesi e-hattını alır. Tal kalelerini f-hattında topladı (−0.05); b7 fili g2’ye karşı uzun çaprazı tutuyor.',
      diger: [
        { move: '23...Rxe1', text: '24.Rxe1 Rxf5 25.Bxb7 Qxb7+: Beyaz e-hattını alır. Motor: +0.2.' },
        { move: '23...Bxg2+', text: '24.Kxg2 Qd5+ 25.Kg1 Rexf5. Motor: +0.2.' },
      ],
    },
    '24w': {
      text: 'At e4’e gelir; c5, d6, f6 ve g5 karelerine bakar.',
      amac: 'Atı merkezin en iyi karesine yerleştirmek; f-hattındaki baskıyı engellemek.',
      neden: 'At e4’te çok güzel duruyor, ama f1 kalesini koruyan taş azalıyor. Motor 24.Qe2’yi biraz daha iyi buluyor (−0.05): önce vezir e-hattına, sonra Ne4. 24.Ne4 −0.1.',
      diger: [
        { move: '24.Qe2', text: '24...Re5 25.Ne4 Rxf1+ 26.Qxf1. Motor: −0.05.' },
        { move: '24.Bxb7', text: '24...Qxb7+ 25.Kg1 Qf7: fil değişimi. Motor: −0.1.' },
      ],
    },
    '24b': {
      text: 'Siyah f-hattında kaleleri değişir.',
      amac: 'Beyazın savunmacı taşlarını azaltmak; Beyaz filini f1’e ya da kalesini f-hattına çekmeye zorlamak.',
      neden: 'Değişim Siyahın kalıcı avantajlarını (d4, vezir kanadı) öne çıkarır. Motor 24...Rxf1+’i en iyi görüyor (−0.1); 24...Bxe4 25.dxe4 Rxf1+ 26.Bxf1 Be5 de eşit (0.0).',
      diger: [
        { move: '24...Bxe4', text: '25.dxe4 Rxf1+ 26.Bxf1 Be5: Beyaz e4’te sağlam. Motor: 0.0.' },
        { move: '24...h6', text: 'Bekleme: 25.Rxf5 Rxf5 26.b3. Motor: +0.05.' },
      ],
    },
    '25w': {
      text: 'Fil f1’de alır.',
      amac: 'Kale çiftini korumak; e1 kalesini e-hattında tutmak.',
      neden: 'Motor 25.Rxf1’i biraz daha iyi buluyor (−0.1): 25...Rxf1+ 26.Bxf1 sonrası kaleler tamamen değişir ve g2 fili uzun çaprazda kalır. 25.Bxf1 sonrası fil uzun çaprazı terk etti ve korumasız kaldı; bu Siyahın ...c4 hamlesini taktik olarak mümkün kıldı (−0.45).',
      diger: [
        { move: '25.Rxf1', text: '25...Rxf1+ 26.Bxf1 c4 27.b3: kaleler değişir, Beyaz biraz daha rahat. Motor: −0.1.' },
      ],
    },
    '25b': {
      text: '25...c4!: c-piyonu ilerler.',
      amac: 'd4’ün desteğiyle c-piyonunu c3’e götürmek ve Beyazın vezir kanadında kalıcı bir kama oluşturmak.',
      neden: '26.dxc4? Bxe4+ 27.Rxe4 Rxf1+ ile f1 fili düşer (−4.7). Beyaz ya b3 ile piyonu tutmalı ya da Bg2 ile c3’e izin vermeli. Motor 25...Qb5’i (−0.6) biraz daha iyi buluyor, ama ...c4 en açık ve kalıcı plandır (−0.5).',
      diger: [
        { move: '25...Qb5', text: '26.Qc1 c4 27.b3 cxd3: d3’e baskı. Motor: −0.6.' },
        { move: '25...b5', text: '26.Bg2 c4 27.b3 c3: daha yavaş. Motor: −0.1.' },
      ],
    },
    '26w': {
      text: 'b3 ile Beyaz c4’ü değişmeyi sorar.',
      amac: 'c4 piyonunu durdurmak ya da ...cxb3 ile değişimi zorlamak.',
      neden: '26.dxc4? taktiksel olarak kaybediyor (−4.7). 26.Bg2 c3 27.bxc3 dxc3 28.Nxc3 Bxg2+ 29.Kxg2 Qf7 piyon kazanır ama Siyah tazminata sahip (−0.3); motor bunu en iyi buluyor. 26.b3 c3 sonrası Beyazın vezir kanadı kalıcı olarak sabitlenir (−0.4).',
      diger: [
        { move: '26.Bg2', text: '26...c3 27.bxc3 dxc3 28.Nxc3 Bxg2+ 29.Kxg2 Qf7: Beyaz piyon kazanır, Siyah aktif. Motor: −0.3.' },
        { move: '26.dxc4?', text: '26...Bxe4+ 27.Rxe4 Rxf1+: fil düşer. Motor: −4.7.' },
      ],
    },
    '26b': {
      text: '26...c3: piyon d4 tarafından korunur ve d2’deki vezire saldırır.',
      amac: 'b2 ve d2 karelerini Beyaza kapatmak; vezir kanadında kalıcı bir kama oluşturmak.',
      neden: '26...cxb3 ya da 26...cxd3 açık oyunlar verir (−0.1), ama Beyazın piyon yapısını rahatlatır. c3’teki piyon oyunun sonuna kadar Beyazın vezir kanadını kilitledi. Motor: −0.2 (en iyi).',
      diger: [
        { move: '26...cxb3', text: '27.cxb3 Bxe4+ 28.dxe4 Be5: dengeli. Motor: −0.1.' },
        { move: '26...cxd3', text: '27.cxd3 Bxe4+ 28.dxe4: Beyazın e4 piyonu sağlam. Motor: −0.1.' },
      ],
    },
    '27w': {
      text: 'Vezir e2’ye çekilir.',
      amac: 'Vezir saldırıdan kaçar; e-hattında ve e4’te aktif kalır.',
      neden: 'Saldırı altındaki vezir için en iyi kare (−0.3). 27.Qd1 (−0.4) pasif, 27.Qc1 ise vezir kanadında sıkışır (−0.8).',
      diger: [
        { move: '27.Qd1', text: '27...Bxe4+ 28.dxe4 Rf2 ile Siyahın kalesi içeri girer. Motor: −0.4.' },
        { move: '27.Qc1', text: '27...b5 28.Bg2 Bxe4 29.Rxe4 Rf2. Motor: −0.8.' },
      ],
    },
    '27b': {
      text: 'Fil h6’ya gelir; c1-h6 çaprazından e3 karesine bakar.',
      amac: 'Fili e3’e götürmek; orada d4 tarafından korunur ve Beyaz şahının yanına yerleşir.',
      neden: 'g7 fili uzun çaprazda c3 piyonunun arkasında artık etkisiz. h6’dan e3 karesine ulaşır. Motor 27...Bh6 ve 27...Rf5’i eşit görüyor (−0.4).',
      diger: [
        { move: '27...Rf5', text: '28.Bg2 Bh6 29.Rf1 Kg7. Motor: −0.4.' },
        { move: '27...Bc8', text: '28.Bg2 h5 29.Rf1 Rxf1+. Motor: −0.25.' },
      ],
    },
    '28w': {
      text: 'Fil g2’ye döner; e4 atını korur.',
      amac: 'Uzun çaprazı yeniden kapatmak ve e4 atını korumak.',
      neden: 'Tek iyi hamle (−0.4). 28.a4? Be3 29.Bg2 Bxe4 30.dxe4 Rf2 ile Siyahın kalesi içeri girer (−1.3); 28.Ra1 de aynı (−1.4).',
      diger: [
        { move: '28.a4?', text: '28...Be3 29.Bg2 Bxe4 30.dxe4 Rf2 ile kale ikinci sırada. Motor: −1.3.' },
        { move: '28.Ra1?', text: '28...Be3 29.Bg2 Bxe4 30.dxe4 Rf2. Motor: −1.4.' },
      ],
    },
    '28b': {
      text: 'Şah g7’ye çekilir.',
      amac: 'Şahı g7’de güvenli tutmak ve f-hattındaki kaleyi şah koruması görevinden kurtarmak.',
      neden: 'Geri sıradaki şah Rf1 sonrası kale değişiminde sıkıntı yaşayabilirdi. Motor 28...Rf5 ve 28...Kg7’yi eşit görüyor (−0.4).',
      diger: [
        { move: '28...Rf5', text: '29.Rf1 Kg7 30.h4 Be3. Motor: −0.4.' },
        { move: '28...Be3', text: '29.Rf1 Qe7 30.Rxf8+ Kxf8. Motor: −0.3.' },
      ],
    },
    '29w': {
      text: 'Beyaz f-hattında kale değişimi önerir.',
      amac: 'Siyahın aktif kalesini değişmek; f2 ve f-hattını korumak.',
      neden: 'Motor en iyi hamle görüyor (−0.2). 29.Nf2 Be3 30.Rf1 Bxf2 ile atı kaybeder (−0.6).',
      diger: [
        { move: '29.h4', text: '29...Be3 30.Rf1 Rf5. Motor: −0.3.' },
        { move: '29.Nf2', text: '29...Be3 30.Rf1 Bxf2. Motor: −0.6.' },
      ],
    },
    '29b': {
      text: 'Kaleler değişir.',
      amac: 'Taşları azaltıp vezir + fil + piyon oyun sonuna geçmek.',
      neden: 'Kalıcı avantajlar (d4, c3) taşlar azaldıkça daha önemli olur. Motor 29...Rxf1+ en iyi (−0.2); 29...Rf5 30.Rxf5 gxf5 piyon yapısını bozar.',
      diger: [
        { move: '29...Rf5', text: '30.Rxf5 gxf5 31.Nf2 Be3: Siyahın piyonları zayıflar. Motor: −0.1.' },
        { move: '29...Bxe4', text: '30.Bxe4 Rxf1+ 31.Qxf1. Motor: 0.0.' },
      ],
    },
    '30w': {
      text: 'Vezir f1’de geri alır.',
      amac: 'Kaleyi geri almak; vezirle f-hattını kontrol etmek.',
      neden: 'Doğal geri alış (−0.2). 30.Bxf1 fili pasif kareye götürür (−0.4).',
      diger: [
        { move: '30.Bxf1', text: '30...Qc7 31.Bg2 Be3. Motor: −0.4.' },
      ],
    },
    '30b': {
      text: 'Vezir e7’den e-hattını ve e3 karesini kontrol eder.',
      amac: 'Fili e3’e götürmeyi desteklemek; e4 atına baskı yapmak.',
      neden: 'Vezir e7’de hem e3’ü hem de c5 ve a3 karelerini kontrol eder. Motor 30...Qe6 ve 30...Qe7’yi eşit görüyor (−0.2).',
      diger: [
        { move: '30...Qe6', text: '31.h4 Qe7 32.a4 Be3. Motor: −0.2.' },
        { move: '30...Qd8', text: '31.Qe2 Bc6 32.h4. Motor: −0.15.' },
      ],
    },
    '31w': {
      text: 'h4 ile Beyaz şah kanadında alan alır.',
      amac: 'h6 filini g5 karesinden uzak tutmak ve g3’ü desteklemek.',
      neden: 'Motor en iyi hamle görüyor (−0.1). 31.Qf3 (−0.35) ve 31.a4 (−0.4) daha zayıf.',
      diger: [
        { move: '31.Qf3', text: '31...Be3 32.h4 h5 33.Kh2. Motor: −0.35.' },
        { move: '31.a4', text: '31...Qe5 32.Qe2 Be3 33.Qg4. Motor: −0.4.' },
      ],
    },
    '31b': {
      text: '31...Be3: fil d4’ün koruduğu kareye yerleşir.',
      amac: 'Fili Beyaz şahının yanına, sökülemeyecek bir kareye yerleştirmek; g1 ve f2 karelerini kontrol etmek.',
      neden: 'e3’te fil d4 piyonuyla korunur ve Beyazın piyonları onu kovalayamaz. Tek yolu Nf2-g4xe3, bu da altı hamle sürdü. Motor 31...Bc6 ve 31...Be3’ü eşit görüyor (−0.2).',
      diger: [
        { move: '31...Bc6', text: '32.a4 Bd5 33.Qd1 Be3. Motor: −0.2.' },
        { move: '31...Bd5', text: '32.Qe2 Be3 33.a4 h5. Motor: −0.1.' },
      ],
    },
    '32w': {
      text: 'Şah h2’ye gelir.',
      amac: 'Şahı g1’den uzaklaştırmak; e3 filinin g1 karesine baskısından kurtulmak.',
      neden: 'Motor en iyi hamle görüyor (−0.3). 32.Qe2 b5 33.Nf2 sonrası Siyah vezir kanadında ilerler (−0.4).',
      diger: [
        { move: '32.a4', text: '32...Bd5 33.Qe2 Bf7 34.Kh2. Motor: −0.3.' },
        { move: '32.Qe2', text: '32...b5 33.Nf2 Bc8 34.Bh3. Motor: −0.4.' },
      ],
    },
    '32b': {
      text: '32...a5: Siyah vezir kanadı piyonlarını ilerletmeye başlar.',
      amac: 'a- ve b-piyonlarını ilerletip Beyazın vezir kanadında yeni zayıflıklar yaratmak.',
      neden: 'Beyaz pasif; Siyahın yeni bir hedef yaratması gerekiyor. Motor 32...Bd5’i biraz daha iyi buluyor (−0.35); 32...a5 −0.3.',
      diger: [
        { move: '32...Bd5', text: '33.Qd1 a5 34.a4 h5. Motor: −0.35.' },
        { move: '32...h5', text: '33.a4 Bd5 34.Qe2 Qe5. Motor: −0.3.' },
      ],
    },
    '33w': {
      text: 'Vezir e2’ye gelir.',
      amac: 'e4 atını ve e-hattını desteklemek.',
      neden: 'Motor 33.a4’ü (−0.3) ya da 33.Ng5’i (−0.3) öneriyor: 33.Ng5 Bxg2 34.Qxg2 Bxg5 35.hxg5 ile e3 filinden kurtulmak. 33.Qe2 sonrası −0.5.',
      diger: [
        { move: '33.a4', text: 'a-piyonunu durdurmak: 33...Bd5 34.Qe2 h6. Motor: −0.3.' },
        { move: '33.Ng5', text: '33...Bxg2 34.Qxg2 Bxg5 35.hxg5: güçlü e3 filinden kurtulmak. Motor: −0.3.' },
      ],
    },
    '33b': {
      text: 'Fil d5’ten b3 ve uzun çapraza bakar.',
      amac: 'b3 piyonuna baskı yapmak; uzun çaprazdan g2’ye karşı durmak.',
      neden: 'Fil d5’te merkezde ve b3’e bakıyor. Motor 33...b5’i biraz daha iyi buluyor (−0.4); fark küçük.',
      diger: [
        { move: '33...b5', text: '34.Nf2 Bc8 35.Bh3 Ba6. Motor: −0.4.' },
        { move: '33...a4', text: '34.Nf2 Ba6 35.bxa4 h5. Motor: −0.3.' },
      ],
    },
    '34w': {
      text: 'Fil f3’e gelir.',
      amac: 'Fili aktif kareye getirmek ve d5 filine karşı durmak.',
      neden: 'Motor 34.a4’ü biraz daha iyi buluyor (−0.3). 34.Bf3 sonrası Siyahın piyonları ilerler (−0.4).',
      diger: [
        { move: '34.a4', text: '34...Bg8 35.Bh3 h5. Motor: −0.3.' },
        { move: '34.Qg4', text: '34...Qe6 35.Qd1 h5. Motor: −0.3.' },
      ],
    },
    '34b': {
      text: '34...b5: b-piyonu da ilerler.',
      amac: '...a4 ve ...b4 ile Beyazın vezir kanadını açmak ya da sabitlemek.',
      neden: 'Motor en iyi hamle görüyor (−0.4). Siyah vezir kanadında piyon çoğunluğuna sahip.',
      diger: [
        { move: '34...a4', text: '35.Bg2 h5 36.Qf3 b5. Motor: −0.4.' },
        { move: '34...h5', text: '35.a4 Be6 36.Bg2. Motor: −0.3.' },
      ],
    },
    '35w': {
      text: 'At f2’ye çekilir ve g4 üzerinden e3 filine gitmek ister.',
      amac: 'e3 filini değişmek; Nf2-g4xe3 manevrası.',
      neden: 'e3 fili Beyazın en büyük derdi. Motor 35.Nf2’yi eşit görüyor (−0.4); 35.h5 (−0.3) de mümkün.',
      diger: [
        { move: '35.h5', text: '35...b4 36.hxg6 hxg6 37.Kg2. Motor: −0.3.' },
        { move: '35.Bg2', text: '35...h5 36.Qf1 Qe5. Motor: −0.3.' },
      ],
    },
    '35b': {
      text: 'Fil f7’ye çekilir ve b3’e bakmayı sürdürür.',
      amac: 'Fili f3 filiyle değişmekten kaçınmak; a2-g8 çaprazından b3’e baskı.',
      neden: 'Fil değişimi Beyazı rahatlatırdı. Motor en iyi hamle görüyor (−0.4).',
      diger: [
        { move: '35...Bg8', text: '36.Bg2 h5 37.Ne4. Motor: −0.4.' },
        { move: '35...Be6', text: '36.Ne4 Bd7 37.Bg2. Motor: −0.4.' },
      ],
    },
    '36w': {
      text: 'At g4’e gelir; e3 filini almayı hedefler.',
      amac: 'Nxe3 ile güçlü fili değişmek.',
      neden: 'Motor 36.Ne4’ü (−0.4) biraz daha iyi buluyor; 36.Ng4 −0.6. At g4’te Siyahın ...h5 hamlesiyle kovalanabilir.',
      diger: [
        { move: '36.Ne4', text: '36...h5 37.Bg2 Qe5 38.Qf3. Motor: −0.4.' },
        { move: '36.Bc6', text: '36...Qe5 37.Bd7. Motor: −0.5.' },
      ],
    },
    '36b': {
      text: '36...a4: piyon b3’e baskı yapar.',
      amac: 'Beyazın vezir kanadını açmak; ...a3 ile a2’yi sabitlemek.',
      neden: 'Motor en iyi hamle görüyor (−0.6). 36...Qc5 ya da 36...h5 Beyaza Nxe3 ile rahatlama verirdi (−0.4).',
      diger: [
        { move: '36...Qc5', text: '37.Be4 h5 38.Nxe3 dxe3. Motor: −0.4.' },
        { move: '36...h5', text: '37.Nxe3 dxe3 38.Be4 Qc5. Motor: −0.4.' },
      ],
    },
    '37w': {
      text: 'Şah g2’ye gelir.',
      amac: 'Şahı merkeze yaklaştırmak; f1 ve e2 karelerine ulaşmak.',
      neden: 'Motor en iyi hamle görüyor (−0.6). 37.Nxe3 Qxe3 38.Qg2 Be6 39.bxa4 ile Siyahın veziri aktif (−0.8).',
      diger: [
        { move: '37.Nxe3', text: '37...Qxe3 38.Qg2 Be6 39.bxa4: Siyah vezir aktif. Motor: −0.8.' },
        { move: '37.Be4', text: '37...Bd2 38.Nf2 h5. Motor: −0.8.' },
      ],
    },
    '37b': {
      text: '37...a3: piyon a2’yi sabitler; b2 karesi de Siyahın kontrolüne geçer.',
      amac: 'Beyazın a-piyonunu kalıcı olarak sabitlemek; ...Qc5 ile a3’ü desteklemek.',
      neden: 'Motor 37...b4’ü daha iyi buluyor (−0.6): 38.Nf2 h5 39.Ne4 Be6. 37...a3 sonrası −0.3; vezir kanadı kilitlenince Beyaza Nxe3 için zaman verdi.',
      diger: [
        { move: '37...b4', text: '38.Nf2 h5 39.Ne4 Be6: Siyah vezir kanadını tamamen kilitler. Motor: −0.6.' },
        { move: '37...axb3', text: '38.axb3 b4 39.Be4 Bd2. Motor: −0.4.' },
      ],
    },
    '38w': {
      text: 'Şah f1’e gelir; e2 ve d1 karelerine yaklaşır.',
      amac: 'Şahı vezir kanadına götürmek ve e-piyonuna karşı hazırlanmak.',
      neden: 'Motor 38.Nf2’yi (−0.3) biraz daha iyi buluyor. 38.Kf1 sonrası −0.5.',
      diger: [
        { move: '38.Nf2', text: '38...h5 39.Ne4 b4 40.Kh2. Motor: −0.3.' },
        { move: '38.Bc6', text: '38...b4 39.Be4 Bd2. Motor: −0.6.' },
      ],
    },
    '38b': {
      text: 'Vezir c5’e gelir; a3 ve d4 piyonlarını destekler.',
      amac: 'Vezir kanadı piyonlarını korumak ve ...Qc5-e5 ile merkeze geçmek.',
      neden: 'Motor 38...b4’ü daha iyi buluyor (−0.6): 39.Nxe3 dxe3 40.Be4. 38...Qc5 sonrası Beyaz 39.Nxe3 dxe3 ile eşitliği yakaladı (0.0).',
      diger: [
        { move: '38...b4', text: '39.Nxe3 dxe3 40.Be4 Qc5: vezir kanadı kilitli. Motor: −0.6.' },
        { move: '38...g5', text: '39.Be4 Bh5 40.Bf3 Bxg4. Motor: −0.2.' },
      ],
    },
    '39w': {
      text: 'At e3 filini alır.',
      amac: 'Siyahın en güçlü taşını ortadan kaldırmak.',
      neden: 'Motor en iyi hamle görüyor (0.0). 39.Qe1 Qf5 ile Siyah aktif (−0.65), 39.h5 gxh5 ile şah kanadı açılır (−0.9).',
      diger: [
        { move: '39.Qe1', text: '39...Qf5 40.Kg2 Qe6 41.Nf2. Motor: −0.65.' },
        { move: '39.h5', text: '39...gxh5 40.Nxe3 dxe3. Motor: −0.9.' },
      ],
    },
    '39b': {
      text: '39...dxe3!: tek iyi hamle; piyon geri alır.',
      amac: 'Maddeyi eşitlemek ve e3’te yeni bir korunan geçer piyon almak.',
      neden: 'Diğer hamleler bir taş kaybettirir: 39...Qd6 40.Ng2 ile Siyah bir taş eksik kalır (+3.3). Şimdi Siyahın c3, e3 ve a3’te üç ilerlemiş piyonu var.',
    },
    '40w': {
      text: 'Vezir d1’e çekilir.',
      amac: 'Vezir kanadını ve e-piyonunu savunmak.',
      neden: 'Motor 40.Qe1 (0.0) ve 40.Qd1’i (−0.05) eşit görüyor. 40.h5 gxh5 şah kanadını açar (−1.0).',
      diger: [
        { move: '40.Qe1', text: '40...Bxb3 41.axb3 b4 42.Ke2. Motor: 0.0.' },
        { move: '40.h5', text: '40...gxh5 41.d4 Qg5. Motor: −1.0.' },
      ],
    },
    '40b': {
      text: 'Vezir e5’e gelir; merkezde ve uzun çaprazda güçlü bir kare.',
      amac: 'Vezirle e-piyonunu ve uzun çaprazı desteklemek.',
      neden: 'Motor en iyi hamle görüyor (−0.05). 40...Bxb3 ve 40...b4 eşit.',
      diger: [
        { move: '40...Bxb3', text: '41.axb3 Qe5 42.Qe1 b4: a- ve c-piyonları sabit, ama Siyahın fili gider. Motor: 0.0.' },
        { move: '40...b4', text: '41.Ke2 Qe5 42.Qe1. Motor: 0.0.' },
      ],
    },
    '41w': {
      text: '41.Kg2?: şah g2’ye çekilir.',
      amac: 'Şahı şah kanadında güvende tutmak.',
      neden: 'Hatalı: e3 piyonunun önündeki e2 karesi Beyazın savunmasının merkeziydi. 41.Qe1! (0.0) bu kareyi tutar ve Ke2 ile şah piyonun önüne geçebilirdi. 41.Kg2 sonrası Siyah üstün (−1.2).',
      diger: [
        { move: '41.Qe1!', text: '41...g5 42.hxg5 Bxb3 43.axb3: e2 karesi tutulur, eşitlik. Motor: 0.0.' },
        { move: '41.Qe2?', text: '41...Qxg3 42.Qxe3 Qxh4 ile Siyah piyon kazanır. Motor: −1.2.' },
      ],
    },
    '41b': {
      text: 'Fil e6’ya gelir; f5 ve h3 karelerine bakar.',
      amac: 'Fili f5’ten d3’e ya da h3’ten şaha yöneltmek; ...e2 kırılmasını desteklemek.',
      neden: 'Motor en iyi hamle görüyor (−1.0). 41...h5 (−0.8) ve 41...Qd4 (−0.3) daha zayıf.',
      diger: [
        { move: '41...h5', text: '42.d4 Qf5 43.d5. Motor: −0.8.' },
        { move: '41...Qd4', text: '42.Kf1 Qe5 43.Qe1. Motor: −0.3.' },
      ],
    },
    '42w': {
      text: '42.d4?: Beyaz d-piyonunu sürer.',
      amac: 'Siyahın vezirini e5’ten kovalamak ve merkezde karşı oyun aramak.',
      neden: 'Hatalı: 42...Qf5 43.g4 Qf4 sonrası Siyahın veziri f-hattından içeri girer (−1.9). Motor 42.Be4 ya da 42.Qe2’yi (−0.9) öneriyor. Kaynakta oyun burada 0-1 olarak bitiyor.',
      diger: [
        { move: '42.Be4', text: '42...h5 43.Bf3 Bf5 44.Qf1. Motor: −0.9.' },
        { move: '42.Qe2', text: '42...h5 43.Be4 Qc5 44.Qe1. Motor: −0.9.' },
      ],
    },
  },
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl?', a: 'Siyahlarla Mihail Tal kazandı (0-1). 4...d4 ile merkezi kapattı, 15...f5 ve 16...e5 ile Beyazın şah kanadı planını durdurdu, 25...c4-c3 ile vezir kanadında kalıcı bir kama oluşturdu ve 31...Be3 ile filini Beyaz şahının yanına yerleştirdi. Lein 41.Kg2? ve 42.d4? ile e2 karesini bıraktı.' },
    { q: 'Siyah neden 4...d4 oynadı?', a: 'c3 atını kovalayıp merkezi kapatmak ve d4’te sökülemeyen bir dayanak kurmak için. Beyazın c-piyonu c2’de olduğu için d4’e c3 ile saldırmak zordur. Bu piyon oyunun sonuna kadar Siyahın bütün planlarının (…c4-c3, ...Be3, ...dxe3) dayanağı oldu.' },
    { q: 'Beyazın açılıştaki hatası neydi?', a: 'Yavaş manevralar: 10.Kh1, 12.Neg1, 14.Nh3, 15.Nf2. Motor 10.g4’ü (+0.2) öneriyor; f5 karesini kontrol eder ve Siyahın ...f5 karşı hamlesini zorlaştırır. Beyaz zaman harcarken Siyah ...b6, ...Ba6, ...Qd7, ...Rae8 ile tam hazırlandı.' },
    { q: 'Siyah neden önce 15...f5, sonra 16...e5 oynadı?', a: '15...f5 Beyazın f4-f5 ilerleyişini durdurdu; 16...e5 ise merkezi Siyahın taşları hazırken açtı. Sıra önemli: ...e5 önce gelseydi Beyaz f5 ile şah kanadında saldırabilirdi.' },
    { q: '22...fxe4 neden kötü olurdu?', a: '23.Bxg7 e3 24.Bxf8 exd2 25.Rxe8 Qxe8 26.Bxb7 ile Beyaz iki fil ve kaleyle üstün olurdu (Motor: +1.2). Tal 22...Rxe5 ile g7 filini savunmada tuttu.' },
    { q: '25...c4 neden iyi bir hamleydi?', a: '26.dxc4? Bxe4+ 27.Rxe4 Rxf1+ ile f1 fili düşer (−4.7). 26.b3 c3 sonrası piyon d4 tarafından korunur, d2’deki vezire saldırır ve b2 ile d2 karelerini kalıcı olarak alır.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: '41.Qe1! ile e2 karesini tutup Ke2 ile şahı piyonun önüne getirmek eşitlik verirdi (0.0). Daha önce 38.Nf2 ya da 33.Ng5 (e3 filini değişmek) de Beyazı dengeye yakın tutuyordu.' },
    { q: 'Tal neden bu oyunda pozisyonel oynadı?', a: 'Pozisyon bunu gerektiriyordu: merkez kapalı, Beyazın şah kanadı planı durdurulmuştu ve Siyahın kalıcı avantajları (d4, vezir kanadı çoğunluğu) vardı. Tal taktik ününe rağmen bu avantajları sabırla büyüttü.' },
  ],
  sources: [
    { title: 'Wikipedia: Mikhail Tal', url: 'https://en.wikipedia.org/wiki/Mikhail_Tal' },
    { title: 'Wikipedia: Anatoly Lein', url: 'https://en.wikipedia.org/wiki/Anatoly_Lein' },
    { title: 'Exeter Chess Club: The Closed Sicilian', url: 'https://exeterchessclub.org.uk/content/closed-sicilian' },
  ],
  exercises: [
    { id: 'lnt-1', kind: 'tekrar', plan: true, title: 'Merkez kırılması: ...e5',
      source: 'Lein – Tal, Tiflis 1969 (16. hamle)',
      fen: '4rrk1/pb1qn1bp/1pn1p1p1/2p2p2/3pPP2/3P1NP1/PPPBQNBP/4RR1K b - - 1 16',
      prompt: 'Siyah ...f5 ile Beyazın f4-f5 ilerleyişini durdurdu. Kaleleri e8 ve f8’de, fili g7’de. Merkezde hangi kırılma Siyahın taşlarını açar?',
      hint: 'e-piyonu f4 piyonuna saldırabilir; değişimlerden sonra at ve fil e5’i kullanır.',
      line: ['e5', 'fxe5', 'Nxe5'],
      explanation: '**16...e5! 17.fxe5 Nxe5** Siyah f4 piyonuna saldırır; değişimden sonra at e5’e gelir ve f3 atını değişmeye zorlar, g7 fili uzun çaprazda açılır. Motor: ...e5 −0.3, sonraki en iyi ...Nb4 −0.2. Fark küçük; bu bir plan hamlesi.',
      link: 'Beyazın f4 piyonu Siyahın ...e5 kırılması için bir hedeftir.' },
    { id: 'lnt-2', kind: 'tekrar', plan: true, title: 'Vezir kanadında ilerleme: ...c4-c3',
      source: 'Lein – Tal, Tiflis 1969 (25. hamle)',
      fen: '5rk1/pb1q2bp/1p4p1/2p5/3pN3/3P2P1/PPPQ3P/4RB1K b - - 0 25',
      prompt: 'Taşlar değişti. Siyahın d4’te sağlam bir piyonu var, Beyazın atı e4’te. Siyah vezir kanadında nasıl ilerler?',
      hint: 'c-piyonu d4’ün desteğiyle ilerleyebilir.',
      line: ['c4', 'b3', 'c3'],
      explanation: '**25...c4! 26.b3 c3** Piyon d4’ün korumasıyla c3’e yerleşir; d2 ve b2 karelerini kontrol eder ve Beyazın taşlarını bağlar. Motor: ...c4 −0.3, sonraki en iyi ...Qb5 −0.1; 26...c3 −0.3, 26...cxb3 −0.1. Fark küçük; bu bir plan hamlesi.',
      link: 'd4 piyonu korunan bir dayanaktır; c-piyonu onun desteğiyle ilerler.' },
    { id: 'lnt-3', kind: 'transfer', plan: false, title: '...c4-c3 ile şaha karşı',
      source: 'Van der Wiel – Timman, Hollanda Şampiyonası, Rotterdam 1998 (16. hamle)',
      fen: '2kr1r2/pp1n2bp/1q2p1p1/2p3Pn/3pP3/3P3P/PPPBNPQ1/2KR1B1R b - - 3 16',
      prompt: 'Siyahın d4 piyonu Beyazın d3-e4 zincirini kilitliyor. Beyaz uzun rok yaptı; Siyahın veziri b6’da b2’ye bakıyor ve g7 fili uzun çaprazda. Siyahın en güçlü planı nedir?',
      hint: 'd4 piyonunun desteğiyle hangi piyon Beyaz şahın önüne doğru ilerleyebilir?',
      line: ['c4', 'Kb1', 'c3'],
      accept: { 2: ['Nc5', 'Be5'] },
      explanation: '**16...c4! 17.Kb1 c3** c-piyonu d4’ün desteğiyle ilerler, d2 filini kovalar ve b2’yi hedef alır; Beyaz şahının önü açılır. Motor: ...c4 −2.8, sonraki en iyi ...Rf7 −1.9; 17...c3 −2.9, 17...Nc5 −2.8 ve 17...Be5 −2.6 birbirine yakın; üçü de kabul edilir.',
      link: 'Tal 25...c4-c3 ile Beyazın vezir kanadını bağladı; Timman aynı ilerlemeyi uzun rok yapmış şaha karşı saldırı için kullandı.' },
    { id: 'lnt-4', kind: 'transfer', plan: false, title: 'Ters Kral Hint’te ...e5',
      source: 'Lutikov – Petrosyan, SSCB Şampiyonası 1969 (17. hamle)',
      fen: 'r1bq1rk1/4npbp/1p2p1p1/pP6/P2pP3/1Q1P2P1/3B1PBP/RN3RK1 b - - 0 17',
      prompt: 'Siyahın d4 piyonu merkezi kilitledi; Beyazın piyonları d3 ve e4’te, fili g2’de. Siyah merkezde hangi hamleyle yapısını tamamlar?',
      hint: 'c8 fili hâlâ gelişmedi ve e6 piyonu onun önünü kapatıyor. Beyazın atı a3-c4 yoluyla b6 ve d6’ya gelmek istiyor.',
      line: ['e5'],
      explanation: '**17...e5!** Siyah e-piyonunu ilerletir; d4 piyonu desteklenir, c8 fili e6’ya gelip c4 karesini kontrol eder ve Beyazın Bh3 ile e6’ya baskı fikri ortadan kalkar. Motor: ...e5 −0.2, sonraki en iyi ...Ra7 +0.8; 17...Bb7? 18.Na3 sonrası +1.4.',
      link: 'Tal da 16...e5 ile ters Kral Hint yapısında e-piyonunu ilerletti; Petrosyan aynı hamleyle merkezi sağlamlaştırdı.' },
  ],
};
