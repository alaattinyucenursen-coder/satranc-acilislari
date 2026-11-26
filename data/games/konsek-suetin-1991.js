// Peter Konsek – Alexey Suetin, Würzburg açık turnuvası, Würzburg 1991. Kaynak: PgnMentor (Suetin.pgn).
export default {
  id: 'konsek-suetin-1991',
  theme: '...d4 ve ...e5 ile alan, ...h5-h4 ile şah kanadını kilitlemek',
  white: 'Peter Konsek', black: 'Alexey Suetin',
  whiteShort: 'Konsek', blackShort: 'Suetin',
  event: 'Würzburg açık turnuvası', site: 'Würzburg', year: 1991, eco: 'B23',
  variation: 'Sicilya Savunması, Kapalı sistem: 2.Nc3 e6 3.g3 d5 4.Bg2 d4', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. Bg2 d4 5. Nce2 Nc6 6. d3 h5 7. f4 e5 8. Nf3 Bd6 9. c3 Bg4 10. h3 Bxf3 11. Bxf3 h4 12. g4 exf4 13. Nxf4 Nge7 14. O-O Qb6 15. c4 O-O-O 16. Bg2 Ne5 17. Rb1 Rd7 18. b4 Qc7 19. Qa4 Kb8 20. Bd2 g5 21. bxc5 Bxc5 22. Nd5 Nxd5 23. exd5 Nxd3 24. d6 Qxd6 25. Rf6 Qe7 26. Bxg5 Rhd8 27. Rfb6 axb6 28. Bxe7 Rxe7 29. Qc2 Nb4 30. Qd2 d3+ 31. Kh1 Nc2 32. Qf4+ Ka7 33. Bd5 Ne3 34. Rb2 Nd1 35. Rb1 Re1+ 36. Kg2 Ne3+ 37. Kf3 Rxb1 0-1`,

  summary: 'Petrosyan’ın uzun yıllar antrenörlüğünü yapmış, Sicilya’nın ...e6 sistemleri üzerine çalışmış Sovyet büyükustası Alexey Suetin, Kapalı Sicilya’da 4.Bg2’ye **4...d4** ile cevap verdi: c3 atını e2’ye geri gönderdi, ardından **...e5** ile ters bir Şah Hint merkezi kurdu ve **...h5-h4** ile Beyazın g3-f4 kuruluşunu sorguladı. Beyaz 10.h3? ile fili kovalayınca Suetin 10...Bxf3 11.Bxf3 h4! ile şah kanadını kilitledi ve hafif üstünlüğü aldı (Motor: −0.7). Sonra iki yanlış karar oyunu tersine çevirdi: 14...Qb6 ile vezir oyun dışına gitti, 15...O-O-O? ile şah Beyazın açılmak üzere olan vezir kanadına yerleşti. Beyaz Rb1 ve **18.b4** ile hücuma geçti; 20...g5? sonrası 21.bxc5 ile b-hattı açıldı ve Beyaz açık üstünlüğe ulaştı (+1.9). Suetin pes etmedi: 23...Nxd3 ile merkez piyonunu aldı, atını d3’e, piyonunu d4’e yerleştirdi ve taşlarını aktif tuttu. Konsek 27.Rfb6?? ile veziri kazanan bir kombinezon yaptığını sandı; ancak 27...axb6 28.Bxe7 Rxe7 sonrası Siyahın iki kalesi, c5 fili, d3 atı ve geçer d-piyonu vezirden çok daha güçlüydü (−3.7). Suetin ...Nb4, ...d3+ (açarak şah) ve ...Nc2-e3-d1 manevrasıyla Beyaz şahını çevreledi; 35...Re1+ ve 36...Ne3+ ile birinci yataydaki kale düştü.',
  intro: '1.e4 c5 2.Nc3 e6 3.g3 d5, Kapalı Sicilya’ya karşı Siyahın en dolaysız cevaplarından biridir: Siyah, Beyazın g3-Bg2-d3-f4 ile yavaş kurulmasına izin vermeden merkezde hemen hak iddia eder. 4.Bg2’den sonra üç yol vardır. **4...dxe4 5.Nxe4** merkezi açar; Siyah rahat gelişir ama Beyazın g2 fili uzun çaprazda serbest kalır (Motor: +0.3). **4...Nf6** gerilimi korur; 5.d3 ya da 5.Nge2 ile oyun sürer ve Siyah daha sonra ...d4 ya da ...dxe4 arasında seçim yapar. Bu modüldeki Lawrence–Schlechter (1904) maçında Schlechter bu sırayla oynayıp ...d4, ...h5 ve ...e5 ile tam olarak bu maçtaki fikirlere ulaşmıştı. **4...d4** ise en keskin ve motorun ilk tercihidir (−0.2): c3 atı e2’ye ya da b1’e çekilmek zorunda kalır, Siyah d4-e5 piyonlarıyla ters Şah Hint merkezini kurar. Bu yapıda Beyazın planı f4 ile e5’i sorgulamak ve c3 ile d4’e baskı yapmak; Siyahın planı ise merkezi sağlam tutup Beyazın g3 piyonuna ...h5-h4 ile saldırmaktır. Suetin bu planı ders kitabı gibi uyguladı, sonra rok seçiminde hata yaptı; Beyaz ise tam kazanmışken kombinezon görüntüsüne kapılıp oyunu verdi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**d3 ve f4** ile Siyahın e5 piyonunu sorgulamak; fxe5 ya da f5 tehdidiyle f-hattını kalelere açmak (Kapalı Sicilya’nın klasik şah kanadı planı).',
      '**c3** ile d4 piyonunun tabanına saldırmak; Siyah ...dxc3 alırsa d4 karesi Beyaza kalır, almazsa cxd4 ile c-hattı açılır.',
      'g3 piyonunu korumak: ...h4 gelince g4 ile hattı kapatmak (12.g4), h-hattını Siyah kalelerine açtırmamak.',
      'Atı f4 üzerinden **d5**’e getirmek; d5’teki at hem merkezi hem de Siyah şahının önündeki kareleri kontrol eder (22.Nd5).',
      'Siyah uzun rok yapınca **Rb1, b4** ile vezir kanadında piyon fırtınası; c5 piyonuna b4 ile vurup b-hattını açmak (18.b4, 21.bxc5).',
      'Açılan hatlarda kaleleri f6 ve b-hattında, fili g5’te kullanarak Siyah vezirine ve b7’ye baskı kurmak (25.Rf6, 26.Bxg5).',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**4...d4** ile alan almak ve c3 atını geri göndermek; ardından **...e5** ile d4-e5 merkezini kurmak ve Beyazın g2 filinin çaprazını kendi piyonlarıyla kapatmak.',
      '**...h5-h4** ile g3 piyonunu sorgulamak: Beyaz g4 oynarsa h4 piyonu orada kalır, Beyazın şah kanadı piyonları sabitlenir ve g3 karesi Siyaha kalır.',
      '...Bg4 ve **...Bxf3** ile e5’e baskı yapan atı ortadan kaldırmak; fil çifti verilir ama merkez korunur (10...Bxf3).',
      '...exf4 ile e5 karesini atlara ve fillere açmak; e5’e at ya da fil yerleştirip c3-b2 ve d3 karelerine baskı yapmak.',
      'Doğru rok seçimi: Beyazın şah kanadı kilitliyken şah kısa rokla daha güvendedir (15...O-O, Motor: −0.3); vezir kanadı ise Beyazın piyon fırtınasına açıktır.',
      'Kötü durumda bile merkez piyonunu almak (23...Nxd3), d-piyonunu geçer piyon olarak itmek ve atları d3-b4-c2-e3 karelerinde dolaştırarak Beyaz şahına yaklaşmak.',
      'Açarak şahları kullanmak: 30...d3+ c5 filinin çaprazını açar; 36...Ne3+ e1 kalesinin önünü açar.',
    ] },
  },
  critical: [
    { move: '4b', title: '4...d4: alan almak ve atı kovalamak', text: 'Siyah e4’te değişmek yerine piyonu ilerletir. c3 atı e2’ye çekilmek zorunda kalır ve f4 ya da g3 karelerini beklerken Beyazın gelişimi yavaşlar. Motor 4...d4’ü (−0.2) 4...Nf6 (0.0) ve 4...dxe4’ten (+0.3) iyi buluyor. Ardından ...e5 ile ters Şah Hint yapısı gelir; Beyazın g2 fili Siyahın d4-e5 piyonlarına çarpar.' },
    { move: '10w', title: '10.h3?: fazla iddialı bir piyon hamlesi', text: 'Beyaz g4 filini kovalar, ama fil geri çekilmez: 10...Bxf3 11.Bxf3 h4! sonrası g3 piyonu saldırı altındadır ve Beyaz 12.g4 ile şah kanadını kendi eliyle kilitler (Motor: −0.75). Doğrusu 10.O-O (0.0) ya da 10.Nxe5 Nxe5 11.fxe5 Bxe5 12.Qa4+ Qd7 13.Qxd7+ Kxd7 ile eşitliktir (0.0). h3 piyonu sonradan h4 piyonunun hedefi değil ama g3 karesi Beyaz için kalıcı bir delik olur.' },
    { move: '15b', title: '15...O-O-O?: şahı fırtınanın içine götürmek', text: 'Beyazın şah kanadı g4-h3 ile kilitli, Siyahın h4 piyonu orayı dondurmuş durumda; bu yüzden Siyah şahının en güvenli yeri g8’dir. 15...O-O (−0.3) sonrası Siyahın hiçbir sorunu yoktu. Uzun roktan sonra ise Beyazın b4 kırılması c5 piyonuna çarpar ve b-hattı açılır: Rb1-b4 planı neredeyse kendiliğinden gelir (Motor: +0.8). Bu, oyunun ilk büyük değer kaybıdır (1.1 puan).' },
    { move: '20b', title: '20...g5?: yanlış kanatta hareket', text: '20.Bd2 Beyazın üstünlüğünü sıfıra indirmişti; Siyah 20...cxb4! 21.Bxb4 Bxb4 22.Rxb4 ile b-hattındaki gerilimi kendi lehine çözebilirdi (Motor: +0.1). 20...g5 f4 atına saldırır ama vezir kanadında olanları görmezden gelir: 21.bxc5 Bxc5 sonrası b-hattı açıktır, 22.Nd5 ya da 22.Nh5 gelir ve Beyaz +1.9’a çıkar.' },
    { move: '23b', title: '23...Nxd3: kötü durumda en dirençli yol', text: 'Siyah zor durumda ama pasif kalmak yerine d3 piyonunu alır. At d3’te hem c1-f4 karelerini hem de b2’yi kontrol eder, d4 piyonu geçer piyon olur. Motor değer olarak hâlâ +2.1 diyor; ama bu at ve piyon, oyunun sonunda kazanan taşlar oldu. Siyah, Beyaza hata yapma fırsatı verecek karmaşık bir konum yarattı.' },
    { move: '26b', title: '26...Rhd8: d-hattını ikilemek', text: 'Siyah iki kaleyi d-hattında ikiler; d3 atı ve d4 piyonu sağlam korunur, d-piyonunun ilerleyişi hazırlanır. Motor 26...Rc7’yi biraz daha iyi buluyor (+1.8, oyunda +2.1); ama oyundaki hamle, Beyaza 27.Rfb6 gibi yanıltıcı bir fikir de sundu: d7 kalesi b7’yi korumaktadır ve e7 vezirinin önünde yalnızca f6 kalesi vardır.' },
    { move: '27w', title: '27.Rfb6??: veziri kazanan ama oyunu kaybettiren kombinezon', text: 'Kale f6’dan çekilince g5 fili e7 vezirine açılır, b6 kalesi de Rxb7+ tehdidi yapar. Konsek veziri kazandığını düşündü; gerçekten de 27...axb6 28.Bxe7 Rxe7 ile vezir gider, ama karşılığında Beyaz kale ve fil verir. Ortaya çıkan konumda Siyahın iki kalesi, c5 fili, d3 atı ve d4 piyonu Beyazın vezirinden ve kalesinden çok daha uyumludur, Beyaz şahı da açıktır (Motor: −3.7). 27.Rf5 (+2.5) ya da 27.Qb3 (+2.3) ile Beyaz kazanç yolundaydı.' },
    { move: '36b', title: '36...Ne3+!: açarak saldırı', text: 'd1 atı b1 kalesi ile e1 kalesi arasında duruyordu. At şah çekerek e3’e gider; Beyaz şaha cevap vermek zorundadır ve e1 kalesi b1’i alır. 37.Kf3 Rxb1 38.Qxe3 Rf1+ sonrası vezir de c5 filine düşerdi; Beyaz terk etti.' },
  ],
  lessons: [
    'Kapalı Sicilya’da 3.g3 d5 4.Bg2’ye karşı **...d4**, c3 atını oyun dışına iter ve Siyaha ters Şah Hint yapısında alan verir. Bu yapıda e5 piyonu Beyazın g2 filinin çaprazını kapatır.',
    'Rakip g3 oynadıysa **...h5-h4** bu piyonu sorgular. Rakip g4 ile hattı kapatırsa h4 piyonu şah kanadını sabitler ve g3 karesi kalıcı bir delik olur (11...h4, 12.g4).',
    'Bir taşın e5 gibi kilit bir merkez piyonuna baskı yaptığı durumlarda fil çiftini vermekten korkmayın: 10...Bxf3 merkezi korudu ve Siyaha üstünlük getirdi.',
    'Rok seçimi piyon yapısına göre yapılır: şah, rakibin piyonlarının kilitli olduğu kanatta güvendedir. 15...O-O-O, şahı b4 kırılmasına açık kanada götürdü ve oyunun dengesini bozdu.',
    'Rakip vezir kanadında saldırırken ...cxb4 gibi gerilimi kendi lehine çözen hamleler, diğer kanatta yapılan ...g5 gibi hamlelerden önce gelir. Bir tempo kaybı b-hattının açılmasına yetti.',
    'Kötü bir konumda bile merkez piyonunu almak (23...Nxd3) ve taşları aktif tutmak, rakibe hata yapma fırsatı verir.',
    'Bir kombinezonun sonunda "materyal kazandım" demek yetmez: taşların uyumuna ve şah güvenliğine bakın. 27.Rfb6 veziri aldı ama kale, fil ve geçer piyon karşısında Beyazın koordinasyonu çöktü.',
  ],
  qa: [
    { q: 'Siyah neden 4...d4 oynadı, 4...dxe4 değil?', a: '4...dxe4 5.Nxe4 sonrası merkez açılır ve Beyazın g2 fili uzun çaprazda b7’ye kadar serbest kalır; Beyaz rahat gelişir (Motor: +0.3). 4...d4 ise c3 atını e2’ye geri gönderir, Beyazın gelişimini yavaşlatır ve Siyaha ...e5 ile sağlam bir merkez kurma imkânı verir (−0.2). Suetin, Sicilya’nın ...e6 sistemlerini iyi tanıyan bir teorisyen olarak alan kazanan ve oyunu kapalı tutan yolu seçti.' },
    { q: '6...h5 hamlesinin amacı neydi? Siyah şahını zayıflatmıyor mu?', a: 'Siyah henüz rok yapmadığı için h-piyonunun ilerlemesi kendi şahını zayıflatmaz. Amaç ...h4 ile g3 piyonuna saldırmaktır: Beyaz hxg3 değişimine izin verirse h-hattı Siyah kalesine açılır, g4 ile kapatırsa şah kanadı kilitlenir. Motor 6...e5’i biraz daha doğru buluyor (−0.2 karşısında +0.0), ama fikir sağlam ve 11...h4 ile tam yerine oturdu.' },
    { q: 'Beyaz 10.h3 yerine ne oynamalıydı?', a: '10.O-O ile rok yapıp merkez gerginliğini korumak doğruydu: 10...Bxf3 11.Rxf3 sonrası kale f-hattında aktif olur (Motor: 0.0). Bir diğer yol 10.Nxe5! Nxe5 11.fxe5 Bxe5 12.Qa4+ Qd7 13.Qxd7+ Kxd7 idi; bu da dengededir. 10.h3 ise fili f3’te almaya zorladı ve 11...h4 ile g3 piyonu saldırı altında kaldı (−0.75).' },
    { q: 'Siyah neden 15...O-O yerine 15...O-O-O oynadı ve bu neden hataydı?', a: 'Suetin muhtemelen d-hattında kalelerini birleştirip d4 piyonunu desteklemek istedi; şah kanadında h4 ve g-piyonuyla ileride bir saldırı da düşünmüş olabilir. Ama Beyazın şah kanadı kilitliydi ve orada saldırı imkânı yoktu; vezir kanadında ise c4-c5 yapısına b4 ile vurmak hazırdı. 15...O-O (−0.3) sonrası Siyah rahattı; 15...O-O-O sonrası Beyaz Rb1-b4 ile hemen hücuma geçti (+0.8).' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Avantaj, Siyah şahının bulunduğu vezir kanadında hatların açılmasından geldi. 18.b4 ile c5 piyonuna vuruldu, 20...g5? bir tempo kaybettirdi ve 21.bxc5 Bxc5 ile b-hattı açıldı. Ardından 22.Nd5, 24.d6 ve 25.Rf6 ile Beyazın taşları b7 ve Siyah vezirine yöneldi; Motor 21. hamleden 26. hamleye kadar Beyazı +1.6 ile +2.1 arasında görüyor.' },
    { q: '27.Rfb6 neden bu kadar kötü? Beyaz veziri almıyor mu?', a: 'Beyaz veziri alıyor ama karşılığında kale ve fil veriyor: 27...axb6 28.Bxe7 Rxe7. Materyal kâğıt üzerinde yakın görünse de Siyahın iki kalesi açık hatları tutuyor, c5 fili g1 karesine bakıyor, d3 atı ve d4 piyonu Beyaz şahına doğru ilerliyor. Beyazın vezirinin tek başına saldıracak hedefi yok, şahı ise açık. Motor 27.Rfb6 sonrası −3.7 diyor; 27.Rf5 ile Beyaz +2.5 ile kazanç yolundaydı.' },
    { q: '29...Nb4 doğru hamle miydi?', a: 'Kazanmak için yeterliydi ama en güçlüsü değildi. 29...Nf4! g2 filine saldırır ve Beyaz şahının etrafındaki son savunucuyu değiştirmeye hazırlanır: 30.Kf1 d3 31.Qd2 Nxg2 sonrası Siyah ezici durumdadır (Motor: −5.0). 29...Nb4 vezire saldırıp ...d3+ ile tempo kazandı, avantaj −2.7’ye indi; ancak Beyaz 32.Qf4+? ve 34.Rb2? ile yeniden hata yapınca fark büyüdü.' },
    { q: 'Siyah son atağı nasıl kurdu?', a: 'Önce 30...d3+ ile açarak şah çekti: d-piyonu ilerlerken c5 filinin g1’e giden çaprazı açıldı ve Beyaz şahı h1’e sıkıştı. Sonra at c2-e3-d1 yolculuğuyla birinci yataya yerleşti ve b-hattındaki kaleye saldırdı. 35...Re1+ ile kale birinci yataya girdi; 36...Ne3+ ise hem şah çekti hem e1 kalesinin b1’e giden yolunu açtı.' },
    { q: 'Beyaz son aşamada nerede direnebilirdi?', a: '32.Qf4+ yerine 32.Bf1! ile d3 piyonunu hedef almak gerekiyordu: 32...Rd4 33.Bxd3 sonrası Beyaz piyonu geri alır (Motor: −2.6). 34.Rb2 yerine 34.Qh2 ile vezir savunmaya dönebilirdi (−4.8). Her iki durumda da Siyah üstündü, ama oyunda yapılan hamleler Siyahın atını birinci yataya davet etti.' },
  ],
  sources: [
    { title: 'Wikipedia: Alexey Suetin', url: 'https://en.wikipedia.org/wiki/Alexey_Suetin' },
    { title: 'Chess.com blog (simaginfan): Four games of Aleksei Suetin, grandmaster and theoretician', url: 'https://chess.com/blog/simaginfan/four-games-of-aleksei-suetin-grandmaster-and-theoretician' },
    { title: 'Russian Chess Federation: Person of the day – Alexey Suetin', url: 'https://ruchess.ru/en/persons_of_day/alexey_suetin/' },
    { title: 'Chess.com: Sicilian-phobia Part Two – Closed Sicilian', url: 'https://www.chess.com/article/view/sicilian-phobia-part-two---closed-sicilian' },
    { title: 'Exeter Chess Club: The Closed Sicilian', url: 'https://exeterchessclub.org.uk/content/closed-sicilian' },
    { title: 'New in Chess (kitap önizlemesi): Kapalı Sicilya ve 2.Nc3 sistemleri', url: 'https://www.newinchess.com/media/wysiwyg/product_pdf/9003.pdf' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Şah piyonu iki kare ilerler, merkezde d5 ve f5 karelerini kontrol eder ve f1 filiyle vezire yol açar.',
      amac: 'Merkezde yer tutmak ve hızlı gelişmek.',
      neden: 'En popüler ilk hamlelerden biridir. Konsek bu maçta açık oyunlar yerine Kapalı Sicilya kuruluşunu seçecek; bu yüzden e4 piyonu, ileride d3 ve f4 ile desteklenen bir merkezin çekirdeği olacak.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışı; daha konumsal oyunlara götürür (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; merkez piyonlarının yerini sonraya bırakır (+0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini yandan kontrol eder.',
      amac: 'Merkezi simetrik değil, asimetrik biçimde tartışmak ve kazanmak için dengesiz bir oyun aramak.',
      neden: 'Suetin, Sicilya’nın özellikle ...e6 sistemlerinin gelişmesine katkıda bulunmuş bir teorisyendi; bu açılış onun bildiği alandır. Sicilya, beraberlikle yetinmeyen Siyah oyuncuların klasik seçimidir.',
      diger: [
        { move: '1...e5', text: 'Simetrik açık oyun; daha sakin ama sağlam (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması; Suetin’in kitabını yazdığı bir diğer açılış (+0.35).' },
      ],
    },
    '2w': {
      text: '2.Nc3: Beyaz önce atını geliştirir ve d4 oynamadan kalır; bu Kapalı Sicilya’ya yönelen hamledir.',
      amac: 'Açık Sicilya’nın keskin teorisinden kaçınmak; g3, Bg2, d3 ve f4 ile şah kanadında yavaş ama sağlam bir kuruluş yapmak.',
      neden: 'Kapalı Sicilya, Smislov ve Spasski gibi dünya şampiyonlarının da kullandığı bir sistemdir. Beyaz merkezi açmaz, oyunu şah kanadındaki piyon ilerleyişine dayandırır. 2.Nc3, Siyaha 2...e6 ile ...d5 hazırlama fırsatı da verir.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya hazırlık; 3.d4 ile merkez açılır (Motor: +0.5).' },
        { move: '2.c3', text: 'Alapin Varyantı; d4’ü piyonla desteklemek için (+0.3).' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah e-piyonunu bir kare ilerletir; f8 filine yol açar ve ...d5’i hazırlar.',
      amac: '...d5 ile merkezde hemen hak iddia etmek; Beyazın yavaş kuruluşunu cezalandırmak.',
      neden: 'Kapalı Sicilya’da Beyazın en iyi bildiği yapılar 2...Nc6 ve ...g6 ile çıkan fianketto yapılarıdır. 2...e6, Beyazı başka bir oyun tipine iter: e4 piyonu ...d5 ile hemen sorgulanır. Suetin’in ...e6 Sicilyalarına yatkınlığı da bu seçimle uyumludur.',
      diger: [
        { move: '2...Nc6', text: 'Klasik Kapalı Sicilya; 3.g3 g6 4.Bg2 Bg7 yapısına gider (Motor: +0.4).' },
        { move: '2...d6', text: 'Esnek; ...e5 ya da ...g6 ile devam edilebilir (+0.35).' },
      ],
    },
    '3w': {
      text: '3.g3: Beyaz g2’de fianketto yapmaya hazırlanır.',
      amac: 'Fili uzun çaprazda (h1-a8) konumlandırıp e4’ü ve d5 karesini desteklemek.',
      neden: 'Kapalı Sicilya’nın standart planı. Ancak 2...e6’dan sonra bu hamle yavaş kalır: Siyah 3...d5 ile merkezi hemen açabilir. Motor 3.Nge2 ya da 3.Nf3’ü daha iyi buluyor; bu hamleler d4 kırılmasını da akılda tutar.',
      diger: [
        { move: '3.Nge2', text: 'Esnek; ileride d4 ile Açık Sicilya’ya dönme seçeneği (Motor: +0.4).' },
        { move: '3.Nf3', text: 'Normal gelişim; 3...d5’e 4.exd5 ile karşılık verilebilir (+0.3).' },
      ],
    },
    '3b': {
      text: '3...d5: Siyah merkezi hemen ister ve e4 piyonuna saldırır.',
      amac: 'Beyazın fianketto kuruluşu tamamlanmadan merkez gerginliği yaratmak; e4’te değişim ya da ...d4 ile alan kazanmak.',
      neden: '2...e6’nın mantıklı devamıdır. Beyaz henüz Bg2 oynamadığı için e4 yalnızca c3 atıyla korunuyor. Motor bu hamleyi en iyi buluyor (0.0): Siyah eşitliği sağlar.',
      diger: [
        { move: '3...Nc6', text: 'Daha yavaş; Beyaz 4.Bg2 ile kuruluşu tamamlar (Motor: +0.1).' },
        { move: '3...Nf6', text: '4.e5 Nd5 ile at merkeze gelir ama Beyaz alan kazanır (+0.3).' },
      ],
    },
    '4w': {
      text: '4.Bg2: Beyaz e4 piyonunu filin desteğine bırakır ve kuruluşunu sürdürür.',
      amac: 'e4’ü g2 fili ve c3 atıyla korumak; merkezi Siyaha teslim etmeden fianketto planına devam etmek.',
      neden: 'Bu modüldeki maçların hepsinin ana konumu budur. Siyah şimdi ...dxe4, ...Nf6 ya da ...d4 arasında seçim yapacak. Motor 4.exd5 exd5 5.d4 ile tek piyon merkezine geçmeyi biraz daha iyi buluyor, ama fark çok küçük.',
      diger: [
        { move: '4.exd5', text: '4...exd5 5.d4 cxd4 6.Qxd4 ile Siyaha yalnız d-piyonu kalır (Motor: −0.05).' },
        { move: '4.f4', text: 'Grand Prix tarzı; 4...dxe4 5.Nxe4 Be7 6.Nf3 ile denge (−0.1).' },
      ],
    },
    '4b': {
      text: '4...d4: Siyah alan alır ve c3 atını kovalar.',
      amac: 'c3 atını oyun dışına itmek, ardından ...e5 ile d4-e5 merkezini kurmak ve g2 filinin çaprazını kapatmak.',
      neden: 'Motor bu hamleyi en iyi buluyor (−0.2). 4...dxe4 merkezi açar ve g2 filini serbest bırakır; 4...d4 ise oyunu kapalı tutar ve Siyaha alan verir. Bu modüldeki Lawrence–Schlechter (1904) maçında Schlechter, önce ...Nf6 oynayıp ...d4’ü sonraya bırakmıştı; Suetin ise piyonu hemen ileri itti.',
      diger: [
        { move: '4...Nf6', text: '5.d3 Nc6 6.f4 Be7 ile gerilim korunur (Motor: 0.0).' },
        { move: '4...dxe4', text: '5.Nxe4 Nc6 6.d3 Be7 ile açık bir oyun; g2 fili çok güçlü (+0.3).' },
      ],
    },
    '5w': {
      text: '5.Nce2: At e2’ye çekilir.',
      amac: 'Atı f4 ya da g3 üzerinden yeniden oyuna sokmak; c-piyonunu serbest bırakıp c3 ile d4’e saldırmak.',
      neden: 'Bu at için en mantıklı karedir: c-piyonunun önünü açar ve şah kanadına yakın kalır. Motor 5.Nce2’yi açık ara en iyi buluyor (−0.2); 5.Nb1 ve 5.Nb5 zaman kaybettirir.',
      diger: [
        { move: '5.Nb1', text: 'At tekrar gelişmek zorunda kalır (Motor: −0.5).' },
        { move: '5.Nb5', text: '5...Nc6 6.Na3 ile at kenara düşer (−0.6).' },
      ],
    },
    '5b': {
      text: '5...Nc6: At gelişir ve d4 piyonunu destekler.',
      amac: 'd4 ve e5 karelerini korumak; ...e5 ilerleyişini hazırlamak.',
      neden: 'Doğal gelişim hamlesi, motorun da ilk tercihi (−0.2). c3 ile d4’e saldırı gelirse at bu piyonu korur. Siyah, f8 filini nereye götüreceğine (d6 ya da e7) daha sonra karar vermek için ata öncelik verir.',
      diger: [
        { move: '5...Bd6', text: 'Önce fil; 6.f4 e5 7.d3 Nc6 ile aynı yapıya çıkılabilir (Motor: −0.1).' },
        { move: '5...e5', text: 'Hemen merkez; 6.f4 ile sorgulanır (yaklaşık −0.1).' },
      ],
    },
    '6w': {
      text: '6.d3: Beyaz e4’ü sağlamlaştırır ve c1 filinin önünü açar.',
      amac: 'Merkezi sağlam tutmak, f4 ilerleyişine hazırlanmak.',
      neden: 'Kapalı Sicilya’nın temel hamlesidir: e4 piyonu artık d3 piyonuyla da desteklenir ve Beyaz f4 oynadığında merkezi düşmez. Motor 6.d3’ü en iyi buluyor (−0.2); 6.b3 ve 6.a3 daha yavaş (−0.6).',
      diger: [
        { move: '6.b3', text: 'Fil b2’de fianketto; ama d4 piyonu bu fili kapatır (Motor: −0.6).' },
        { move: '6.f4', text: 'd3 olmadan f4 merkezi zayıf bırakır; e4 korumasız kalabilir.' },
      ],
    },
    '6b': {
      text: '6...h5: Siyah h-piyonunu iki kare ilerletir.',
      amac: '...h4 ile g3 piyonunu sorgulamak; Beyazın şah kanadı piyonlarını sabitlemek ya da h-hattını açmak.',
      neden: 'Siyah henüz rok yapmadığı için bu hamle kendi şahını zayıflatmaz. Beyazın kısa rok yapacağı belli olduğu için h-piyonu saldırıya katılabilir. Lawrence–Schlechter maçında da aynı ...h5 fikri görülmüştü. Motor 6...e5’i biraz daha doğru buluyor (−0.2’ye karşı 0.0), ama 6...h5 yapıya uygun bir plan hamlesidir.',
      diger: [
        { move: '6...e5', text: '7.f4 Bd6 8.Nf3 Nge7 ile normal ters Şah Hint yapısı (Motor: −0.2).' },
        { move: '6...Bd6', text: '7.f4 e5 8.Nf3 Nge7 ile aynı yapıya çıkar (−0.2).' },
      ],
    },
    '7w': {
      text: '7.f4: Beyaz f-piyonunu ilerletir.',
      amac: 'Siyahın ...e5 kurmasını zorlaştırmak; kurduğu takdirde f4 ile e5’e baskı yapıp f-hattını açmak.',
      neden: 'Kapalı Sicilya’nın klasik şah kanadı planı budur. Motor 7.f4’ü en iyi buluyor (+0.1). Beyaz, Siyahın ...h4 hamlesine karşı g4 ile cevap verme seçeneğini de saklı tutar.',
      diger: [
        { move: '7.h3', text: '...h4 hamlesine karşı önlem (Motor: +0.1).' },
        { move: '7.c3', text: 'Önce d4’e saldırı; 7...e5 8.h3 ile oyun sürer (−0.2).' },
      ],
    },
    '7b': {
      text: '7...e5: Merkez kilitlenir; d4 ve e5 piyonları ters Şah Hint yapısını kurar.',
      amac: 'e5’i ileri karakol olarak tutmak; g2 filinin uzun çaprazını kapatmak.',
      neden: 'Siyah f4 piyonunun e5’e ilerlemesini (e4-e5 kırılmasını) engeller. Artık Beyazın g2 fili d5-e4 piyonlarına çarpar. Motor 7...e5 ile 7...Bd6’yı eşit buluyor (+0.1).',
      diger: [
        { move: '7...Bd6', text: '8.Nf3 e5 9.O-O Bg4 ile aynı konuma çıkılır (Motor: +0.1).' },
        { move: '7...h4', text: '8.g4 e5 9.h3 exf4 ile h-piyonu hemen ilerler (+0.1).' },
      ],
    },
    '8w': {
      text: '8.Nf3: At f3’e gelir ve e5 piyonuna baskıyı artırır.',
      amac: 'e5 piyonuna f4 piyonu ve f3 atıyla iki kez saldırmak; rok yapmaya hazırlanmak.',
      neden: 'Doğal gelişim. Beyaz e5’e baskı kurarken Siyahın bu piyonu korumak için taşlarını bağlamasını ister. Motor 8.Nf3’ü en iyi buluyor (0.0). 8.f5 ise merkezi kapatır ve Siyaha e5’i kalıcı olarak verir (−0.6).',
      diger: [
        { move: '8.h3', text: '...h4’e karşı önlem; 8...f6 9.Nf3 ile denge (Motor: −0.05).' },
        { move: '8.f5', text: 'Merkezi kapatır, Siyahın e5 karesi sağlamlaşır (−0.6).' },
      ],
    },
    '8b': {
      text: '8...Bd6: Fil d6’dan e5 piyonunu korur.',
      amac: 'e5’i korumak; ...Nge7 ile gelişimi tamamlamaya hazırlanmak.',
      neden: 'e5 iki kez saldırı altındadır (f4 ve f3 atı); c6 atı ve d6 fili onu iki kez korur. Motor 8...Bd6 ile 8...h4’ü eşit buluyor (0.0). 8...f6 ise g8 atının ve Siyahın şahının gelişimini zorlaştırır (+0.3).',
      diger: [
        { move: '8...h4', text: '9.h3 hxg3 10.Nxe5 Nxe5 11.fxe5 ile karmaşık oyun (Motor: 0.0).' },
        { move: '8...f6', text: 'e5’i piyonla korur ama g8 atı ve e6 karesi zayıflar (+0.3).' },
      ],
    },
    '9w': {
      text: '9.c3: Beyaz d4 piyonunun tabanına saldırır.',
      amac: 'cxd4 ile c-hattını açmak ya da Siyahı ...dxc3 ile merkezi dağıtmaya zorlamak.',
      neden: 'Ters Şah Hint yapısında Beyazın vezir kanadındaki temel kaldıracıdır. Motor 9.c3, 9.O-O ve 9.h3’ü eşit buluyor (0.0). Beyaz merkezde gerilim yaratır.',
      diger: [
        { move: '9.O-O', text: '9...Bg4 10.c3 Bxf3 11.Bxf3 ile benzer oyun (Motor: 0.0).' },
        { move: '9.h3', text: '...Bg4’ü önler; 9...f6 10.O-O Be6 ile denge (0.0).' },
      ],
    },
    '9b': {
      text: '9...Bg4: Fil f3 atını bağlar.',
      amac: 'e5’e baskı yapan atı etkisizleştirmek; gerekirse ...Bxf3 ile ortadan kaldırmak.',
      neden: 'f3 atı hem e5’e saldırıyor hem de d4’e dolaylı baskı yapıyordu. Fil bu atı hedef alır; Siyah gelişimini de tamamlamış olur. Motor 9...h4’ü hafifçe tercih ediyor (−0.2), oyundaki hamle 0.0 civarında.',
      diger: [
        { move: '9...h4', text: '10.gxh4 Bg4 11.O-O Bxf3 ile h-hattı açılır (Motor: −0.2).' },
        { move: '9...Nge7', text: '10.O-O Bg4 11.f5 ile Beyaz alan kazanır (0.0).' },
      ],
    },
    '10w': {
      text: '10.h3?: Beyaz g4 filine saldırır. Bu hamle değeri 0.0’dan −0.75’e düşürür.',
      amac: 'Fili kovalamak ve g4 ile şah kanadında alan kazanmak.',
      neden: 'Beyaz, filin geri çekileceğini ve kendisinin cxd4, fxe5 ile merkezi açacağını umdu. Ama Siyah fili verir: 10...Bxf3 11.Bxf3 h4! sonrası g3 piyonu saldırı altındadır ve Beyaz 12.g4 ile şah kanadını kilitlemek zorunda kalır. g3 karesi kalıcı bir delik olur.',
      diger: [
        { move: '10.O-O', text: '10...Bxf3 11.Rxf3 Nf6 12.Bd2 ile kale f-hattında aktif (Motor: 0.0).' },
        { move: '10.Nxe5', text: '10...Nxe5 11.fxe5 Bxe5 12.Qa4+ Qd7 13.Qxd7+ Kxd7 ile denge (0.0).' },
        { move: '10.cxd4', text: '10...Bxf3 11.Bxf3 cxd4 12.Bd2 ile Beyaz c-hattını açar (−0.15).' },
      ],
    },
    '10b': {
      text: '10...Bxf3!: Fil atı alır.',
      amac: 'e5’e baskı yapan taşı ortadan kaldırmak; g2 filini f3’e çekip ...h4 ile g3’ü sorgulamak.',
      neden: 'Fil geri çekilirse Beyaz merkezi açar: 10...Be6 11.O-O f6 12.fxe5 fxe5 sonrası Siyahın d4 piyonu aşırı yüklenir (+0.4). Fil çifti verilse de merkez sağlam kalır ve sonraki ...h4 güçlüdür. Motor 10...Bxf3’ü açık ara en iyi buluyor (−0.7).',
      diger: [
        { move: '10...Be6', text: '11.O-O f6 12.fxe5 fxe5 ile merkez zayıflar (Motor: +0.4).' },
        { move: '10...Bc8', text: 'Zaman kaybı; 11.O-O Nge7 12.Rf2 ile Beyaz rahat (+0.8).' },
      ],
    },
    '11w': {
      text: '11.Bxf3: Fil geri alır.',
      amac: 'Materyal dengesini korumak.',
      neden: 'Zorunlu bir geri alış: 11.O-O Bxg2 12.Kxg2 sonrası Beyaz bir at eksik kalır (Motor: −4.7). Fil f3’e geldiğinde artık g4 piyonunu destekleyebilir ama g3 piyonu korumasız kalır.',
    },
    '11b': {
      text: '11...h4!: h-piyonu g3’e saldırır.',
      amac: 'Beyazı g4 ile şah kanadını kilitlemeye zorlamak ya da hxg3 ile h-hattını açmak.',
      neden: 'f3 fili artık g3’ü değil g4’ü koruyor; g3 savunmasız. Beyaz gxh4 alırsa piyon yapısı dağılır, g4 oynarsa h4 piyonu orada kalır ve g3 karesi Siyahın eline geçer. Motor 11...h4’ü en iyi buluyor (−0.8); 11...Qd7 ve 11...Nf6 daha az iddialı (−0.3).',
      diger: [
        { move: '11...Qd7', text: '12.cxd4 cxd4 13.Bd2 a5 ile sakin oyun (Motor: −0.3).' },
        { move: '11...Nf6', text: '12.O-O a5 13.cxd4 cxd4 ile Beyaz rahatlar (−0.25).' },
      ],
    },
    '12w': {
      text: '12.g4: Beyaz h-hattının açılmasını önler.',
      amac: 'g3 piyonunu kurtarmak ve şah kanadında alan tutmak.',
      neden: '12.gxh4 piyon yapısını dağıtır, 12.O-O hxg3 ise h-hattını açar. g4 hattı kapatır ama şah kanadını tamamen dondurur: Beyaz artık orada piyon kırılması yapamaz. Motor 12.cxd4’ü biraz daha iyi buluyor (−0.6), 12.g4 ise −0.7.',
      diger: [
        { move: '12.cxd4', text: '12...cxd4 13.g4 exf4 14.Nxf4 ile benzer yapı (Motor: −0.6).' },
        { move: '12.Bg2', text: '12...hxg3 13.cxd4 cxd4 14.O-O ile h-hattı açılır (−0.7).' },
      ],
    },
    '12b': {
      text: '12...exf4: Siyah f4’te alır.',
      amac: 'e5 karesini Siyahın taşlarına açmak; f4 piyonunun ileride e5’e çarpmasını önlemek.',
      neden: 'Merkez gerginliğini Siyah kendi lehine çözer: e5 artık atlar ve d6 fili için güçlü bir merkez karesidir. Motor 12...exf4’ü en iyi buluyor (−0.65); 12...Nf6 ise 13.g5 ile Beyaza alan verir (−0.15).',
      diger: [
        { move: '12...Nf6', text: '13.g5 Nh7 14.cxd4 cxd4 ile at kenara düşer (Motor: −0.15).' },
        { move: '12...Qe7', text: '13.f5 ile Beyaz şah kanadında alan kazanır (+0.1).' },
      ],
    },
    '13w': {
      text: '13.Nxf4: At f4’te geri alır.',
      amac: 'Atı merkeze getirip d5 karesine yöneltmek.',
      neden: 'f4 atı d5’e ve h5’e sıçrayabilir; aynı zamanda d6 filine baskı yapar. Motor 13.cxd4’ü çok az tercih ediyor (−0.7 karşısında −0.8). 13.Bxf4 ise Siyahın d6 filiyle değişimi kolaylaştırır (−1.1).',
      diger: [
        { move: '13.cxd4', text: '13...g5 14.e5 Bc7 15.Qb3 ile karmaşık oyun (Motor: −0.7).' },
        { move: '13.Bxf4', text: '13...Nge7 14.O-O Ng6 ile Siyah taşlarını rahat yerleştirir (−1.1).' },
      ],
    },
    '13b': {
      text: '13...Nge7: At e7’ye gelişir.',
      amac: 'Gelişimi tamamlamak; atı g6 ya da c6 üzerinden e5’e getirmek, rok yapmaya hazırlanmak.',
      neden: 'At e7’den f4 atının d5’e gelmesini de kontrol eder. Motor 13...Qf6’yı çok az tercih ediyor (14.e5 Qxe5+ 15.Qe2 dxc3, −0.85), ama 13...Nge7 sağlam ve doğal bir hamle (−0.75).',
      diger: [
        { move: '13...Qf6', text: '14.e5 Qxe5+ 15.Qe2 dxc3 ile karmaşık oyun (Motor: −0.85).' },
        { move: '13...Be5', text: '14.O-O Nge7 15.Nd5 O-O ile benzer konum (−0.75).' },
      ],
    },
    '14w': {
      text: '14.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini f-hattına getirmek.',
      neden: 'Şah g1’de biraz açıktır (g4-h3 piyonları ilerlemiş), ama merkez hâlâ kapalı ve f-hattı Beyazın kalesine açıktır. Motor 14.O-O’yu en iyi buluyor (−0.75). 14.e5 bir piyon vererek merkezi açar (−1.1).',
      diger: [
        { move: '14.e5', text: '14...Bxe5 15.c4 Ng6 16.O-O ile piyon verilir (Motor: −1.1).' },
        { move: '14.Bg2', text: '14...Be5 15.Bd2 O-O ile Siyah rahat (−0.9).' },
      ],
    },
    '14b': {
      text: '14...Qb6?!: Vezir b6’ya gelir ve b2 piyonuna saldırır.',
      amac: 'Beyazın vezir kanadına baskı yapmak; ileride uzun roku hazırlamak.',
      neden: 'Vezir b2’yi hedef alır ama kendini oyun dışına çeker; Beyaz 15.Nd5! ile tempo kazanabilirdi. Değer −0.7’den −0.1’e düşer. Motor 14...Be5’i öneriyor: fil merkezi blokaj karesine yerleşir, c3 ve b2’ye bakar (15.Nd5 O-O 16.Kh1 Qd6, −0.7).',
      diger: [
        { move: '14...Be5', text: '15.Nd5 O-O 16.Kh1 Qd6 ile fil e5’te mükemmel (Motor: −0.7).' },
        { move: '14...O-O', text: '15.e5 Bxe5 16.c4 Qd7 ile Siyah sağlam (−0.6).' },
      ],
    },
    '15w': {
      text: '15.c4: Beyaz merkezi kapatır; d4 piyonu sabitlenir.',
      amac: 'c-hattındaki gerginliği kaldırmak, d4’ü sabitleyip b2-b4 kırılmasına zemin hazırlamak.',
      neden: 'c4 ile Beyaz, Siyahın ...dxc3 imkânını ortadan kaldırır ve vezir kanadında b4 ile oynayacağı bir yapı kurar. Motor 15.Nd5’i tercih ediyor: 15...Qa6 16.Nxe7 Bxe7 17.Bf4 ile Beyaz dengeyi tamamen sağlar (0.0). Oyundaki hamle de iyidir (−0.25).',
      diger: [
        { move: '15.Nd5', text: '15...Qa6 16.Nxe7 Bxe7 17.Bf4 ile denge (Motor: 0.0).' },
        { move: '15.g5', text: '15...O-O 16.c4 ile benzer yapı (−0.35).' },
      ],
    },
    '15b': {
      text: '15...O-O-O?: Siyah uzun rok yapar. Değer −0.3’ten +0.8’e çıkar.',
      amac: 'Kaleleri d-hattında birleştirip d4 piyonunu desteklemek; şah kanadını piyon saldırısı için serbest bırakmak.',
      neden: 'Yanlış kanat. Beyazın şah kanadı g4-h3 ile kilitlidir, h4 piyonu orayı dondurmuştur; Siyahın şahı g8’de güvende olurdu. Vezir kanadında ise Beyaz b2-b4 ile c5’e vurmaya hazırdır ve b-hattı Siyah şahına açılacaktır. Motor 15...O-O’yu öneriyor (16.g5 Ne5 17.Bg4 N5g6, −0.3).',
      diger: [
        { move: '15...O-O', text: '16.g5 Ne5 17.Bg4 N5g6 ile Siyah sağlam ve rahat (Motor: −0.3).' },
        { move: '15...Ne5', text: '16.g5 O-O 17.b3 Qc6 ile at merkezde (−0.1).' },
        { move: '15...Qc7', text: '16.Nd5 Qd7 17.Bg5 Ng6 ile vezir geri döner (−0.3).' },
      ],
    },
    '16w': {
      text: '16.Bg2: Fil uzun çapraza geri döner.',
      amac: 'Filin b7’ye uzanan çaprazını açmak; Siyahın uzun rokuna karşı ileride b7’yi hedef almak.',
      neden: 'Fil f3’te h4 piyonuna bakıyordu ama orada bir işe yaramıyordu. g2’de e4’ü korur ve ileride d5 karesi açılınca b7’ye bakar. Motor 16.a3 ya da 16.Rb1’i biraz daha iyi buluyor (+1.0), oyundaki hamle +0.5.',
      diger: [
        { move: '16.a3', text: '16...f6 17.g5 Ne5 ile b4 hazırlığı (Motor: +1.0).' },
        { move: '16.Rb1', text: '16...Ne5 17.a3 a5 18.Bg2 ile aynı plan (+1.0).' },
      ],
    },
    '16b': {
      text: '16...Ne5: At e5’e yerleşir.',
      amac: 'd3 ve c4 piyonlarına baskı yapmak; merkezdeki en güçlü kareyi tutmak.',
      neden: 'e5, Siyahın piyonlarla korunmayan ama Beyaz piyonlarıyla da saldırılamayan bir karesidir. Motor 16...Bxf4 17.Bxf4 Ng6 18.Bh2 Nge5’i biraz daha iyi buluyor (+0.5): Beyazın güçlü f4 atını değiştirmek d5 karesini Beyaza vermez. Oyunda +0.8.',
      diger: [
        { move: '16...Bxf4', text: '17.Bxf4 Ng6 18.Bh2 Nge5 ile at e5’e gelir, d5 atı oluşmaz (Motor: +0.5).' },
        { move: '16...a5', text: 'b4’ü önlemeye çalışır; 17.Nh5 Be5 ile Beyaz şah kanadında aktif (+0.8).' },
      ],
    },
    '17w': {
      text: '17.Rb1: Kale b-hattına geçer.',
      amac: 'b2-b4 ilerleyişini hazırlamak; b-hattı açıldığında Siyah şahına doğrudan baskı yapmak.',
      neden: 'Siyah uzun rok yaptığına göre Beyazın saldırısı vezir kanadından gelir. Kale b1’den b4’ü destekler ve Qb6’nın b2’ye baskısını da hafifletir. Motor 17.Rb1’i en iyi buluyor (+0.9).',
      diger: [
        { move: '17.a3', text: '17...a5 18.Bd2 Kc7 19.Rb1 ile aynı plan (Motor: +0.85).' },
        { move: '17.Kh1', text: 'Daha yavaş; 17...Bc7 18.b4 ile Beyaz yine saldırır (+0.55).' },
      ],
    },
    '17b': {
      text: '17...Rd7: Kale d7’ye gelir.',
      amac: 'Kaleleri d-hattında ikilemek ve b7’yi ikinci yataydan korumak.',
      neden: 'd7 kalesi b7’yi korur; bu, b-hattı açılınca önemli olacaktır. Motor 17...a5 ya da 17...Kc7 ile b4’ü önceden engellemeyi tercih ediyor (+0.75). Oyundaki hamle +1.0.',
      diger: [
        { move: '17...a5', text: '18.Bd2 Kc7 19.a3 Ra8 ile b4 yavaşlar (Motor: +0.75).' },
        { move: '17...Kb8', text: '18.a3 a5 19.Bd2 Rc8 ile şah güvenliğe alınır (+0.85).' },
      ],
    },
    '18w': {
      text: '18.b4!: Piyon fırtınası başlar; b4 piyonu c5’e saldırır.',
      amac: 'b-hattını ve c-hattını açmak; Siyah şahının önündeki piyonları dağıtmak.',
      neden: 'b4, piyon verir gibi görünse de 18...cxb4 sonrası a3 ile hattı açar. Siyahın vezir kanadı piyonları zayıflar. Motor 18.a3 (+1.2) ve 18.b4’ü (+0.9) yakın buluyor: önce a3 ile hazırlamak b4’ü daha güçlü kılar.',
      diger: [
        { move: '18.a3', text: '18...f6 19.b4 Kb8 20.Kh1 ile hazırlıklı saldırı (Motor: +1.2).' },
        { move: '18.Qc2', text: '18...Qd8 19.a3 N7g6 20.Nd5 ile benzer plan (+0.9).' },
      ],
    },
    '18b': {
      text: '18...Qc7: Vezir c7’ye çekilir ve c5’i korur.',
      amac: 'b4’e karşı c5’i tutmak; vezir b-hattından uzaklaşır.',
      neden: 'Siyah piyon değişimini istemez ama bu Beyazın b-hattını açmasını engellemez. Motor 18...a5 ya da 18...cxb4’ü öneriyor (+0.85): 18...a5 19.a3 cxb4 20.axb4 Bxb4 ile Siyah piyon kazanır ve hatların kapanmasına çalışır. Oyunda +1.2.',
      diger: [
        { move: '18...a5', text: '19.a3 cxb4 20.axb4 Bxb4 ile Siyah piyon alır (Motor: +0.85).' },
        { move: '18...cxb4', text: '19.a3 a5 20.axb4 Bxb4 ile aynı fikir (+0.9).' },
      ],
    },
    '19w': {
      text: '19.Qa4: Vezir a4’e gelir ve a7’ye saldırır.',
      amac: 'Siyah şahının önündeki a7 piyonunu hedef almak; b4-b5 ilerleyişini desteklemek.',
      neden: 'Saldırgan bir fikir ama yavaştır. Motor 19.bxc5! Bxc5 20.Nd5 Qd6 21.Bf4 ile b-hattını hemen açmayı öneriyor (+1.3). 19.Qa4 sonrası Siyah 19...cxb4 ile saldırıyı yavaşlatabilirdi (+0.5).',
      diger: [
        { move: '19.bxc5', text: '19...Bxc5 20.Nd5 Qd6 21.Bf4 ile b-hattı açılır (Motor: +1.3).' },
        { move: '19.a3', text: '19...Kb8 20.Kh1 Qc8 21.Nd5 ile sağlam hazırlık (+1.2).' },
      ],
    },
    '19b': {
      text: '19...Kb8: Şah b8’e çekilir ve a7’yi korur.',
      amac: 'a7’yi korumak ve şahı c-hattından uzaklaştırmak.',
      neden: 'a7 saldırı altındaydı. Motor 19...cxb4 20.Qxa7 b5 21.Qa6+ Qb7 ile karmaşık bir oyunu öneriyor (+0.5); Siyah piyon verip hatları kapalı tutar. Oyundaki hamle +0.85.',
      diger: [
        { move: '19...cxb4', text: '20.Qxa7 b5 21.Qa6+ Qb7 ile karmaşık oyun (Motor: +0.5).' },
        { move: '19...Qb8', text: '20.bxc5 Bxc5 21.Qd1 Qd6 ile vezir pasif (+1.0).' },
      ],
    },
    '20w': {
      text: '20.Bd2?: Fil d2’ye gelir ve b4’ü destekler. Değer +0.85’ten 0.0’a düşer.',
      amac: 'b4’ü bir kez daha korumak ve a5 karesine bakmak.',
      neden: 'Fil b4’ü korur ama Siyah 20...cxb4! 21.Bxb4 Bxb4 22.Rxb4 ile taşları değiştirip saldırıyı söndürebilir. Motor 20.a3’ü öneriyor (+0.8): piyon b4’ü korur ve ...cxb4 axb4 sonrası a-hattı açılır.',
      diger: [
        { move: '20.a3', text: '20...Qc6 21.Qc2 N7g6 22.Nd5 ile Beyaz üstün (Motor: +0.8).' },
        { move: '20.bxc5', text: '20...Bxc5 21.Kh1 Qd6 22.Qc2 ile b-hattı açılır (+0.7).' },
      ],
    },
    '20b': {
      text: '20...g5?: Siyah g-piyonuyla f4 atına saldırır. Değer 0.0’dan +1.6’ya çıkar.',
      amac: 'Güçlü f4 atını kovalamak; şah kanadında karşı oyun aramak.',
      neden: 'Yanlış kanatta hareket. Vezir kanadındaki gerginlik çözülmediği için Beyaz 21.bxc5 Bxc5 ile b-hattını açar; atın gideceği d5 ve h5 kareleri de hazırdır. Motor 20...cxb4! 21.Bxb4 Bxb4 22.Rxb4 g5 ile gerginliği çözmeyi öneriyor (+0.1).',
      diger: [
        { move: '20...cxb4', text: '21.Bxb4 Bxb4 22.Rxb4 g5 23.Rb5 ile denge (Motor: +0.1).' },
        { move: '20...Qc6', text: '21.b5 Qc8 22.Qc2 N7g6 ile vezir geri çekilir (+0.6).' },
      ],
    },
    '21w': {
      text: '21.bxc5!: Beyaz c5’te alır ve b-hattını açar.',
      amac: 'b-hattını açıp b1 kalesini Siyah şahına yöneltmek.',
      neden: 'Motor bunu açık farkla en iyi buluyor (+1.9). 21.Nd5? Nxd5 22.cxd5 cxb4 ise Siyaha rahat bir oyun verir (0.0). b-hattı açılınca b7 hem kale hem de g2 filinin hedefi olur.',
      diger: [
        { move: '21.Nh5', text: '21...cxb4 22.Qc2 Rg8 23.Nf6 ile b-hattı kapanır (Motor: +0.9).' },
        { move: '21.Nd5', text: '21...Nxd5 22.cxd5 cxb4 ile Siyah rahatlar (0.0).' },
      ],
    },
    '21b': {
      text: '21...Bxc5: Fil c5’te geri alır.',
      amac: 'Materyali geri almak; fili g1’e bakan aktif çapraza yerleştirmek.',
      neden: 'En iyi geri alış (+1.9). 21...gxf4? 22.cxd6 sonrası Beyaz taş kazanır (+2.6); 21...Qxc5 ise 22.Nd5 Nxd5 23.exd5 ile Beyaz d5’te güçlü bir piyon alır (+2.3).',
      diger: [
        { move: '21...Qxc5', text: '22.Nd5 Nxd5 23.exd5 Qc7 ile vezir açıkta (Motor: +2.3).' },
        { move: '21...gxf4', text: '22.cxd6 Rxd6 23.Bxf4 ile Beyaz taş kazanır (+2.6).' },
      ],
    },
    '22w': {
      text: '22.Nd5: At d5’e gelir ve e7 atına, c7 vezirine saldırır.',
      amac: 'Merkezdeki en güçlü kareyi tutmak; atların değişiminden sonra d5 piyonuyla Siyahın merkezini parçalamak.',
      neden: 'Motor 22.Nd5 ve 22.Nh5’i eşit buluyor (+1.7). Nh5 ise 22...Rg8 23.Nf6 ile kaleleri çatallama fikri taşır. Beyaz merkeze yerleşmeyi seçti; bu, ileride exd5 ve d5-d6 fikirlerini doğurdu.',
      diger: [
        { move: '22.Nh5', text: '22...Rg8 23.Nf6 Rdd8 24.Nxg8 ile çatal (Motor: +1.7).' },
        { move: '22.Ne2', text: '22...Nxd3 23.Bxg5 Ng6 ile d3 düşer (0.0).' },
      ],
    },
    '22b': {
      text: '22...Nxd5: Atlar değişir.',
      amac: 'Güçlü d5 atını ortadan kaldırmak.',
      neden: 'd5 atı c7 vezirine ve e7 atına saldırıyordu; bırakmak mümkün değildi. Motor 22...Nxd5’i en iyi buluyor (+1.9). 22...Qc8? 23.Bxg5 ile Beyaz bir piyon daha kazanır (+2.5).',
      diger: [
        { move: '22...Qc6', text: '23.Qa5 Nxd3 24.e5 ile Beyaz saldırır (Motor: +2.0).' },
        { move: '22...Qc8', text: '23.Bxg5 Nxd5 24.cxd5 ile piyon düşer (+2.5).' },
      ],
    },
    '23w': {
      text: '23.exd5: Beyaz e-piyonuyla geri alır.',
      amac: 'g2 filinin uzun çaprazını açmak; d5 piyonunu d6’ya ilerletmek.',
      neden: 'exd5 ile g2 fili e4 karesinden geçerek b7’ye bakar ve d5 piyonu d6’ya ilerleme tehdidi yapar. Motor 23.exd5 ile 23.cxd5’i yakın buluyor (+1.8 ve +1.6). 23.Rxb7+? ise taş kaybettirir (−2.4).',
      diger: [
        { move: '23.cxd5', text: '23...Rg8 24.Rf5 f6 ile c4 karesi Siyaha kalır (Motor: +1.6).' },
        { move: '23.Rxb7+', text: '23...Qxb7 24.exd5 Rd6 ile Siyah taş kazanır (−2.4).' },
      ],
    },
    '23b': {
      text: '23...Nxd3: At d3 piyonunu alır.',
      amac: 'Merkez piyonunu kazanmak; atı d3’e yerleştirip d4 piyonunu geçer piyon yapmak.',
      neden: 'Siyah kötü durumda ama pasif kalmak yerine materyal ve aktivite toplar. d3 atı c1-f2-b2 karelerini kontrol eder, d4 piyonu ilerlemeye hazırdır. Motor 23...Nxd3, 23...Rd6 ve 23...Rg8’i hemen hemen eşit buluyor (+2.1).',
      diger: [
        { move: '23...Rd6', text: '24.Bxg5 Nxd3 25.Bf6 Rf8 ile aynı fikir (Motor: +2.1).' },
        { move: '23...Rg8', text: '24.Rf5 f6 25.Rxf6 Rd6 ile pasif savunma (+2.2).' },
      ],
    },
    '24w': {
      text: '24.d6: Beyaz piyonu feda eder.',
      amac: 'Siyah vezirini d6’ya çekmek; g2 filinin b7’ye uzanan çaprazını açmak; Rf6 ile tempo kazanmak.',
      neden: '24...Qxd6 sonrası 25.Rf6 vezire tempo ile saldırır. 24...Bxd6? 25.Bxb7 ile Beyaz kazanır (+2.9); 24...Qc8 25.Bc6 ile kale düşer. Motor 24.Bxg5’i çok az tercih ediyor (+2.0), oyundaki hamle +1.8.',
      diger: [
        { move: '24.Bxg5', text: '24...Rd6 25.Bf6 Rf8 26.Qd1 ile piyon geri alınır (Motor: +2.0).' },
        { move: '24.Rf3', text: '24...Ne5 25.Rxb7+ Qxb7 26.Rb3 ile karmaşık oyun (+1.3).' },
      ],
    },
    '24b': {
      text: '24...Qxd6: Vezir d6 piyonunu alır.',
      amac: 'Piyonu almak ve tehlikeli d-piyonunu ortadan kaldırmak.',
      neden: 'En iyi savunma (+1.6). 24...Bxd6? 25.Bxb7 ile fil b7’ye girer (+2.9); 24...Qc8 25.Bc6 Ne5 26.Bxd7 ile kale düşer (+2.5).',
      diger: [
        { move: '24...Bxd6', text: '25.Bxb7 Nc5 26.Bc6+ ile Beyaz kazanır (Motor: +2.9).' },
        { move: '24...Qc8', text: '25.Bc6 Ne5 26.Bxd7 ile kale düşer (+2.5).' },
      ],
    },
    '25w': {
      text: '25.Rf6: Kale d6 vezirine saldırır.',
      amac: 'Veziri tempo ile kovalamak; kaleyi f6’da Siyah şahına ve g5’e karşı aktif konumlandırmak.',
      neden: 'Vezir kaçmak zorundadır; Beyaz bu sırada Bxg5 ile piyonu geri alacaktır. Motor 25.Rf6 ve 25.Bxg5’i eşit buluyor (+1.6).',
      diger: [
        { move: '25.Bxg5', text: '25...Bb6 26.Rf6 Qc7 27.Qb5 ile benzer baskı (Motor: +1.65).' },
        { move: '25.Rf5', text: '25...Re7 26.Bxg5 Re2 ile Siyah kale girer (+1.5).' },
      ],
    },
    '25b': {
      text: '25...Qe7: Vezir e7’ye çekilir.',
      amac: 'Veziri güvenli bir kareye çekmek; e-hattından birinci yataya bakmak.',
      neden: 'Tek iyi kare (+1.8). 25...Qc7? 26.Rxb7+ Qxb7 27.Bxb7 ile Beyaz kazanır (+3.0); 25...Bb6? 26.Rxd6 ile vezir düşer.',
      diger: [
        { move: '25...Qc7', text: '26.Rxb7+ Qxb7 27.Bxb7 ile b7 düşer (Motor: +3.0).' },
        { move: '25...Bb6', text: '26.Rxd6 Rxd6 27.Qa3 ile vezir kaybedilir (+4.9).' },
      ],
    },
    '26w': {
      text: '26.Bxg5: Fil g5 piyonunu alır.',
      amac: 'Materyali geri almak; fili f6 kalesinin arkasından e7 vezirine yöneltmek.',
      neden: 'Motor bunu açık farkla en iyi buluyor (+2.05). 26.Qb5? ise 26...Rg8 ile Siyaha karşı oyun verir (−0.7). Fil g5’te olunca f6 kalesi çekildiğinde e7 vezirine açarak saldırı imkânı doğar.',
      diger: [
        { move: '26.Qb5', text: '26...Rg8 27.Bd5 Rxd5 28.cxd5 ile Siyah karşı oyun bulur (Motor: −0.7).' },
        { move: '26.Rf5', text: '26...f6 27.Qb3 Ne5 ile Siyah sağlamlaşır (−1.0).' },
      ],
    },
    '26b': {
      text: '26...Rhd8: Siyah kaleleri d-hattında ikiler.',
      amac: 'd3 atını ve d4 piyonunu korumak; d-piyonunun ilerleyişini hazırlamak.',
      neden: 'Kale h8’den d8’e gelerek merkeze katılır. Motor 26...Rc7’yi biraz daha iyi buluyor (+1.8, oyunda +2.1). Ancak bu kuruluş, Beyaza Rfb6 fikrini çekici gösterdi: e7 vezirinin önünde yalnızca f6 kalesi vardı.',
      diger: [
        { move: '26...Rc7', text: '27.Rf5 Qe2 28.Bf1 Qe4 ile vezir aktif (Motor: +1.8).' },
        { move: '26...Rg8', text: '27.Bxh4 Ne5 28.Rg6 d3+ ile karşı oyun (+2.35).' },
      ],
    },
    '27w': {
      text: '27.Rfb6??: Kale b6’ya gelir; g5 fili e7 vezirine açılır. Değer +2.5’ten −2.9’a düşer.',
      amac: 'Açarak saldırıyla veziri kazanmak; aynı zamanda Rxb7+ tehdidi yapmak.',
      neden: 'Beyaz veziri kazandığını düşündü ve gerçekten de vezir gidecek; ama 27...axb6 28.Bxe7 Rxe7 sonrası Beyaz kale ve fil vermiş olur. Siyahın iki kalesi, c5 fili, d3 atı ve d4 piyonu birlikte çok güçlüdür. 27.Rf5 f6 28.Bxf6 Qe3+ 29.Kh1 (+2.5) ya da 27.Qb3 (+2.3) ile Beyaz kazanç yolundaydı.',
      diger: [
        { move: '27.Rf5', text: '27...f6 28.Bxf6 Qe3+ 29.Kh1 Be7 30.Qb5 ile Beyaz kazanır (Motor: +2.5).' },
        { move: '27.Qb3', text: '27...Rg8 28.Rg6 Qe8 29.Rxg8 ile Beyaz üstün (+2.3).' },
        { move: '27.Qb5', text: '27...Rc7 28.Rxf7 Qxf7 29.Bxd8 ile materyal kazanılır (+1.9).' },
      ],
    },
    '27b': {
      text: '27...axb6!: Siyah kaleyi piyonla alır.',
      amac: 'Kaleyi almak; c5 filini ve d3 atını yerinde tutmak.',
      neden: 'Motor bunu açık farkla en iyi buluyor (−3.7). 27...Bxb6? 28.Bxe7 Rxe7 29.Rxb6 axb6 sonrası Beyaz materyali geri alır (−1.15). 27...Qe8?? ise 28.Rxb7+ ile Beyaz kazanır.',
      diger: [
        { move: '27...Bxb6', text: '28.Bxe7 Rxe7 29.Rxb6 axb6 ile Beyaz materyali geri alır (Motor: −1.15).' },
        { move: '27...Qe8', text: '28.R6b3 f6 29.Bd2 ile Beyaz kazanır (+4.5).' },
      ],
    },
    '28w': {
      text: '28.Bxe7: Fil veziri alır.',
      amac: 'Veziri almak; materyal dengesini yeniden kurmak.',
      neden: 'Zorunlu: 28.Qd1? Qxg5 ya da 28.Bd2? Qe2 ile Beyaz bir kale eksik kalır (−7.3). Vezir alındıktan sonra Beyazın veziri ve kalesi, Siyahın iki kalesi, fili ve atıyla karşı karşıyadır.',
      diger: [
        { move: '28.Bd2', text: '28...Qe2 29.Qd1 Qf2+ 30.Kh1 ile Siyah kazanır (Motor: −7.3).' },
      ],
    },
    '28b': {
      text: '28...Rxe7: Kale filini geri alır.',
      amac: 'Materyali dengelemek; kaleyi e-hattına ve birinci yataya yöneltmek.',
      neden: 'En iyi geri alış (−4.2). 28...Bxe7? 29.Rxb6 ile Beyaz dengeyi kurar (+0.2). Şimdi Siyahın kale çifti, fili, atı ve d-piyonu Beyazın vezirinden çok daha güçlüdür.',
      diger: [
        { move: '28...Bxe7', text: '29.Rxb6 Nc5 30.Qa5 ile denge (Motor: +0.2).' },
        { move: '28...Nb2', text: '29.Qxd7 Rxd7 30.Bxc5 ile Beyaz kazanır (+3.5).' },
      ],
    },
    '29w': {
      text: '29.Qc2: Vezir d3 atına saldırır.',
      amac: 'd3 atını hedef almak; vezir ile savunmaya geçmek.',
      neden: 'Motor 29.Rf1’i öneriyor (−4.2): kale f-hattına geçer ve Beyaz şahını korur. 29.Qc2 ise Siyaha 29...Nf4! ile g2 filine saldırma imkânı verir (−5.0).',
      diger: [
        { move: '29.Rf1', text: '29...Nb2 30.Qb3 d3+ 31.Kh2 ile Beyaz direnir (Motor: −4.2).' },
        { move: '29.Bf1', text: '29...Nf4 30.Rb5 d3+ 31.Rxc5 ile karmaşık oyun (−4.3).' },
      ],
    },
    '29b': {
      text: '29...Nb4: At vezire saldırır.',
      amac: 'Veziri kovalamak; ...d3+ ile açarak şah hazırlamak.',
      neden: 'Motor 29...Nf4’ü öneriyor: 30.Kf1 d3 31.Qd2 Nxg2 ile Siyah ezici (−5.0). 29...Nb4 de iyi bir hamledir ama avantaj −2.7’ye düşer. Siyah vezire tempo ile saldırarak ...d3+ için hazırlık yaptı.',
      diger: [
        { move: '29...Nf4', text: '30.Kf1 d3 31.Qd2 Nxg2 32.Qxg2 Re3 ile Siyah kazanır (Motor: −5.0).' },
        { move: '29...Ne1', text: '30.Qf5 d3+ 31.Kh1 d2 ile piyon ilerler (−4.85).' },
      ],
    },
    '30w': {
      text: '30.Qd2: Vezir d2’ye çekilir.',
      amac: 'Veziri d-piyonunun önüne koymak; birinci yatayı korumak.',
      neden: 'Tek iyi kare (−3.1). 30.Qd1? d3+ 31.Kh1 d2 ile piyon ikinci yataya ulaşır (−4.9); 30.Qb3? d3+ ile aynı sorun (−5.6).',
      diger: [
        { move: '30.Qd1', text: '30...d3+ 31.Kh1 d2 32.Bd5 ile piyon çok güçlü (Motor: −4.9).' },
        { move: '30.Qb3', text: '30...d3+ 31.Kh2 d2 32.Qd1 ile Siyah kazanır (−5.6).' },
      ],
    },
    '30b': {
      text: '30...d3+: d-piyonu açarak şah çeker.',
      amac: 'c5 filinin g1’e giden çaprazını açmak; d-piyonunu ilerletmek.',
      neden: 'Piyon ilerlerken c5 fili Beyaz şahına şah çeker; Beyaz tempo kaybeder. Motor 30...d3+ ve 30...Nc2’yi eşit buluyor (−3.1). Piyon artık d3’te Beyaz vezirinin önündedir.',
      diger: [
        { move: '30...Nc2', text: '31.Rb5 d3+ 32.Rxc5 bxc5 ile benzer oyun (Motor: −3.1).' },
        { move: '30...f6', text: '31.Kh1 d3 32.a4 Re3 ile yavaş (−2.7).' },
      ],
    },
    '31w': {
      text: '31.Kh1: Şah h1’e çekilir.',
      amac: 'Şahı c5 filinin çaprazından ve atın şahlarından uzaklaştırmak.',
      neden: 'En iyi kare (−2.9). 31.Kh2? Re2 32.Qg5 ile şah daha açık kalır (−4.3); 31.Kf1? Nc2 32.Qg5 d2 ile piyon terfiye yaklaşır (−5.9).',
      diger: [
        { move: '31.Kh2', text: '31...Re2 32.Qg5 Be7 ile Siyah saldırır (Motor: −4.3).' },
        { move: '31.Kf1', text: '31...Nc2 32.Qg5 d2 ile piyon terfiye yaklaşır (−5.9).' },
      ],
    },
    '31b': {
      text: '31...Nc2: At c2’ye gelir.',
      amac: 'd3 piyonunu desteklemek; e3 ve e1 karelerine yönelmek.',
      neden: 'At, d-piyonunun ilerlemesini destekler ve birinci yataya baskı yapar. Motor 31...Nc2’yi en iyi buluyor (−2.9). 31...Rd4 ve 31...Re2 daha zayıf (−2.1).',
      diger: [
        { move: '31...Rd4', text: '32.Re1 Rxe1+ 33.Qxe1 d2 ile kaleler değişir (Motor: −2.1).' },
        { move: '31...Re2', text: '32.Qf4+ Ka7 33.Qc7 ile Beyaz karşı oyun bulur (−2.1).' },
      ],
    },
    '32w': {
      text: '32.Qf4+?: Vezir şah çeker.',
      amac: 'Tempo ile şah çekmek; Siyah şahını a7’ye itmek.',
      neden: 'Şah a7’ye kaçar ve Siyahın taşları rahatlar (−4.15). Motor 32.Bf1!’i öneriyor (−2.6): 32...Rd4 33.Bxd3 ile Beyaz piyonu geri alır. Şah çekmek her zaman en iyisi değildir; burada d3 piyonu asıl hedefti.',
      diger: [
        { move: '32.Bf1', text: '32...Rd4 33.Bxd3 Re3 34.Qxc2 Rxh3+ ile Beyaz direnir (Motor: −2.6).' },
        { move: '32.a4', text: '32...Rd4 33.Bf1 Na3 34.Rd1 ile benzer (−2.9).' },
      ],
    },
    '32b': {
      text: '32...Ka7: Şah a7’ye çekilir.',
      amac: 'Şahı güvenli bir kareye götürmek.',
      neden: 'En iyi kare (−4.15). 32...Ka8 33.Qd2 Ka7 ile zaman kaybı (−3.2); 32...Rd6 ise 33.Rd1 ile d3 piyonu baskı altında kalır (−2.3).',
      diger: [
        { move: '32...Ka8', text: '33.Qd2 Ka7 34.Bf1 ile zaman kaybı (Motor: −3.2).' },
        { move: '32...Rd6', text: '33.Rd1 Ka7 34.Bd5 ile Beyaz direnir (−2.3).' },
      ],
    },
    '33w': {
      text: '33.Bd5: Fil d5’e gelir ve f7’ye bakar.',
      amac: 'Fili merkeze getirmek; f7 piyonuna saldırmak.',
      neden: 'Motor 33.Bd5’i en iyi buluyor (−4.4). Fil d-hattını da kapatır. 33.Rd1 ve 33.Qd2 daha kötü (−4.9 ve −5.2).',
      diger: [
        { move: '33.Rd1', text: '33...Ne3 34.Rd2 Rd4 ile Siyah kazanır (Motor: −4.9).' },
        { move: '33.Qd2', text: '33...Re2 34.Qg5 d2 ile piyon terfiye yaklaşır (−5.2).' },
      ],
    },
    '33b': {
      text: '33...Ne3: At e3’ten d5 filine saldırır.',
      amac: 'Merkezdeki fili kovalamak; d1 ve g2 karelerine yönelmek.',
      neden: 'Motor 33...Rde8 ve 33...Ne3’ü eşit buluyor (−4.7). At e3’te hem d5’e hem d1’e bakar; birinci yataya giden yolu hazırlar.',
      diger: [
        { move: '33...Rde8', text: '34.Rf1 Re1 35.Bg2 Rxf1+ ile kaleler değişir (Motor: −4.7).' },
        { move: '33...Na3', text: '34.Rf1 Nc2 35.g5 ile Beyaz direnir (−3.1).' },
      ],
    },
    '34w': {
      text: '34.Rb2?: Kale ikinci yataya çekilir.',
      amac: 'd2 karesini korumak; d-piyonunun ilerleyişini durdurmak.',
      neden: 'Kale d1 atının saldırısına açık kalır (−5.7). Motor 34.Qh2’yi öneriyor (−4.8): 34...Nxd5 35.cxd5 Rxd5 36.Qd2 ile vezir savunmaya döner.',
      diger: [
        { move: '34.Qh2', text: '34...Nxd5 35.cxd5 Rxd5 36.Qd2 ile direnir (Motor: −4.8).' },
        { move: '34.a4', text: '34...d2 35.a5 d1=Q+ 36.Rxd1 ile Siyah kazanır (−5.3).' },
      ],
    },
    '34b': {
      text: '34...Nd1: At b2 kalesine saldırır.',
      amac: 'Kaleyi kovalamak; birinci yataya yerleşip d2 ve e1 karelerine baskı yapmak.',
      neden: 'Motor 34...Nd1’i en iyi buluyor (−5.8). At birinci yatayda hem b2 kalesine hem de f2 karesine bakar; 35...Re1+ fikrini hazırlar.',
      diger: [
        { move: '34...Nc2', text: '35.Rb1 Rde8 36.Rf1 Re1 ile benzer (Motor: −5.15).' },
        { move: '34...Rde8', text: '35.Bf3 Nc2 36.a3 Re1+ ile yavaş (−4.1).' },
      ],
    },
    '35w': {
      text: '35.Rb1?: Kale birinci yataya çekilir.',
      amac: 'Kaleyi kurtarmak ve birinci yatayı korumak.',
      neden: 'Kale b1’de d1 atı ile aynı yatayda kalır ve 35...Re1+ ile açarak saldırıya açık olur (−6.9). Motor 35.Rxb6 ya da 35.Rd2’yi öneriyor (−6.4), ama Beyaz her durumda kaybediyor.',
      diger: [
        { move: '35.Rxb6', text: '35...Bxb6 36.c5 Bxc5 37.Qa4+ ile umutsuz direniş (Motor: −6.4).' },
        { move: '35.Rd2', text: '35...Re1+ 36.Kh2 Bg1+ 37.Kg2 ile Siyah kazanır (−6.5).' },
      ],
    },
    '35b': {
      text: '35...Re1+!: Kale şah çeker.',
      amac: 'Kaleyi birinci yataya sokmak; d1 atının arkasında b1 kalesini hedef almak.',
      neden: 'd1 atı b1 kalesi ile e1 kalesi arasında durur; at çekildiğinde kale b1’i alacaktır. Motor 35...Re1+’i en iyi buluyor (−7.1); 35...Nc3 ve 35...Ne3 çok daha zayıf (−4.8 ve −4.4).',
      diger: [
        { move: '35...Nc3', text: '36.Ra1 Ne2 37.Qg5 Ng3+ ile Siyah üstün (Motor: −4.8).' },
        { move: '35...Ne3', text: '36.Qh2 Nxd5 37.cxd5 Rxd5 ile Siyah üstün (−4.4).' },
      ],
    },
    '36w': {
      text: '36.Kg2: Şah g2’ye çıkar.',
      amac: 'Şahtan kurtulmak.',
      neden: 'Zorunlu sayılır: 36.Kh2 Bd6 37.Qxd6 Rxd6 ile Beyaz yine kaybeder (−7.8); 36.Qf1?? Rxf1+ 37.Kg2 Ne3+ ise üç hamlede mat olur. Kg2 ile şah atın şah çekebileceği kareye girer.',
      diger: [
        { move: '36.Kh2', text: '36...Bd6 37.Qxd6 Rxd6 ile Siyah kazanır (Motor: −7.8).' },
        { move: '36.Qf1', text: '36...Rxf1+ 37.Kg2 Ne3+ ile mat (Motor: −M3).' },
      ],
    },
    '36b': {
      text: '36...Ne3+!: At şah çekerek d1’den ayrılır.',
      amac: 'e1 kalesinin b1’e giden yolunu açmak; şah çekerek Beyaza karşılık süresi vermemek.',
      neden: 'Açarak saldırının klasik örneği: at şah çektiği için Beyaz b1 kalesini kurtaramaz. Motor 36...Ne3+ ve 36...Re2+’i eşit buluyor (−7.1).',
      diger: [
        { move: '36...Re2+', text: '37.Kf1 Ne3+ 38.Qxe3 Rxe3 ile benzer (Motor: −7.1).' },
        { move: '36...d2', text: '37.Qxd2 Ne3+ 38.Kf3 Rxb1 ile kazanılır (−5.7).' },
      ],
    },
    '37w': {
      text: '37.Kf3: Şah f3’e çekilir.',
      amac: 'Şahtan kurtulmak ve e3 atına saldırmak.',
      neden: 'En iyi kare (−7.4). 37.Qxe3 Rxe3 ile Beyaz veziri kaybeder (−8.0); 37.Kf2 Rxb1 ile kale düşer (−8.75). b1 kalesi artık korumasızdır.',
      diger: [
        { move: '37.Qxe3', text: '37...Rxe3 38.Bf3 d2 ile Siyah kazanır (Motor: −8.0).' },
      ],
    },
    '37b': {
      text: '37...Rxb1: Kale b1’i alır. Beyaz terk etti.',
      amac: 'Kaleyi almak; materyal üstünlüğünü kesinleştirmek.',
      neden: 'Siyah artık bir kale fazladır. 38.Qxe3 Rf1+ 39.Kg2 Bxe3 ile vezir de düşer (−7.4). Beyazın savunma imkânı kalmamıştır.',
      diger: [
        { move: '37...d2', text: '38.Qe4 f5 39.Qd3 ile Siyah yine kazanır (Motor: −7.0).' },
      ],
    },
  },
  exercises: [
    { id: 'ksn-1', kind: 'tekrar', plan: false, title: 'Fil atı alıyor',
      source: 'Konsek – Suetin, Würzburg 1991 (10. hamle)',
      fen: 'r2qk1nr/pp3pp1/2nb4/2p1p2p/3pPPb1/2PP1NPP/PP2N1B1/R1BQK2R b KQkq - 0 10',
      prompt: 'Beyaz 10.h3 ile g4 filine saldırdı. f3 atı e5 piyonuna baskı yapıyor; c3 piyonu da d4’e saldırıyor. Siyah fili nereye götürmeli?',
      hint: 'Fil geri çekilirse Beyaz cxd4 ve fxe5 ile merkezi açar. e5’e baskı yapan taşı ortadan kaldırın.',
      line: ['Bxf3'],
      explanation: '**10...Bxf3!** Fil e5 piyonuna baskı yapan atı alır; 11.Bxf3 h4 ile Siyah şah kanadını kilitler. Fil geri çekilirse 11.cxd4 cxd4 12.fxe5 Nxe5 13.Nf4 ile Beyaz merkezi açar. Motor: ...Bxf3 −0.7, sonraki en iyi 10...Be6 +0.6.',
      link: 'Siyah, ...d4 ve ...e5 ile kurduğu merkezi korumak için fil çiftinden vazgeçti.' },
    { id: 'ksn-2', kind: 'tekrar', plan: false, title: 'Kaleyi doğru taşla almak',
      source: 'Konsek – Suetin, Würzburg 1991 (27. hamle)',
      fen: '1k1r4/pp1rqp2/1R6/2b3B1/Q1Pp2Pp/3n3P/P5B1/1R4K1 b - - 2 27',
      prompt: 'Beyaz 27.Rfb6 ile kalesini b6’ya getirdi; artık g5 fili e7 vezirine saldırıyor ve kale b7’yi tehdit ediyor. Siyah ne yapmalı?',
      hint: 'Vezir kurtarılamaz; ama b6 kalesi alınabilir. Hangi taşla almak daha iyi?',
      line: ['axb6', 'Bxe7', 'Rxe7'],
      explanation: '**27...axb6! 28.Bxe7 Rxe7** Siyah vezir karşılığında kale ve fil alır; c5 fili ve d3 atı yerinde kalır, d-piyonu güçlüdür. 27...Bxb6? 28.Bxe7 Rxe7 29.Rxb6 axb6 sonrası Beyaz materyali geri alır. Motor: ...axb6 −3.7, sonraki en iyi 27...Bxb6 −0.9.',
      link: 'Suetin’in merkezdeki atı ve d-piyonu, Beyazın hatasından sonra oyunu kazandıran taşlar oldu.' },
    { id: 'ksn-3', kind: 'transfer', plan: true, title: '...h4 ile g3’e saldırı',
      source: 'Kramnik – Meier, Dortmund turnuvası 2014 (10. hamle)',
      fen: 'r1bqk2r/1p2bpp1/2n2n2/p1p1p2p/2PpPP2/P2P2P1/1P4BP/RNBQNRK1 b kq - 0 10',
      prompt: 'Ters bir yapı: Siyahın d4 ve e5 piyonları merkezi tutuyor, Beyaz f4 ile e5’e baskı yapıyor. Siyahın h-piyonu h5’te. Siyah nasıl devam etmeli?',
      hint: 'Suetin’in 11...h4 hamlesini düşünün: g3 piyonu hangi piyona dayanıyor?',
      line: ['h4', 'f5', 'hxg3'],
      explanation: '**10...h4! 11.f5 hxg3** h-piyonu g3’e saldırır ve h-hattını açar; Beyazın şahı açık h-hattıyla karşı karşıya kalır. Motor: ...h4 −2.0, sonraki en iyi 10...a4 −1.2. Fark küçük olduğu için bu bir plan hamlesi: fikir, g3 piyonuna h-piyonuyla saldırmak.',
      link: 'Suetin de g3 piyonuna karşı ...h5-h4 oynadı; Beyaz g4 ile hattı kapattı. Meier aynı yapıda hattı açmayı başardı.' },
    { id: 'ksn-4', kind: 'transfer', plan: false, title: 'h-piyonuyla şah kanadını kilitlemek',
      source: 'Atako – Adams, Britanya Şampiyonası, Sheffield 2011 (19. hamle)',
      fen: '3qk2r/p1r1npb1/4b3/3pp2p/3p4/N2P1BP1/PPP4P/R1BQ1RK1 b k - 1 19',
      prompt: 'Siyahın d4, d5 ve e5 piyonları merkezi tutuyor. Beyazın fili f3’te, g3 piyonu şahın önünde. Siyah şah kanadında nasıl ilerlemeli?',
      hint: 'h-piyonu g3’e saldırabilir. Beyaz g4 oynarsa piyon nereye gider?',
      line: ['h4', 'g4', 'h3'],
      accept: { 2: ['Qd7', 'O-O', 'Ng6'] },
      explanation: '**19...h4! 20.g4 h3** h-piyonu g3’e saldırır; Beyaz g4 ile hattı kapatınca piyon h3’e ilerler ve g2 karesi ile Beyaz şahının çevresi zayıflar. Motor: ...h4 −2.4, sonraki en iyi 19...Bh3 −1.5. 20.g4 sonrası ...h3, ...Qd7, ...Ng6 ve ...O-O hemen hemen eşit; hepsi kabul edilir.',
      link: 'Suetin 11...h4 ile aynı fikri uyguladı: Beyaz g4 oynayınca h4 piyonu şah kanadında kaldı ve Beyazın piyonlarını sabitledi.' },
  ],
};
