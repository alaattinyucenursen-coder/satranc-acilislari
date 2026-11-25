// Zherebukh – Caruana, ABD Şampiyonası, Saint Louis 2018 (10. tur). Kaynak: PgnMentor (Caruana.pgn).
export default {
  id: 'zherebukh-caruana-2018',
  theme: '...b4 ve ...exf5 ile şah kanadı hamlesini karşılamak',
  white: 'Yaroslav Zherebukh', black: 'Fabiano Caruana',
  whiteShort: 'Zherebukh', blackShort: 'Caruana',
  event: 'ABD Şampiyonası', site: 'Saint Louis', year: 2018, eco: 'B23',
  variation: 'Sicilya Savunması, 2.Nc3 e6 3.Nf3 a6 4.g3 b5 (kapalı kuruluş)', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. Nf3 a6 4. g3 b5 5. Bg2 Bb7 6. d3 Nc6 7. O-O d6 8. Ng5 h6 9. Nh3 Nf6 10. f4 Be7 11. f5 b4 12. Ne2 exf5 13. Rxf5 O-O 14. c4 bxc3 15. bxc3 Ne5 16. c4 Bc8 17. Rf1 Rb8 18. Nhf4 g5 19. Nd5 Nxd5 20. cxd5 Bf6 21. d4 cxd4 22. Nxd4 Bg4 23. Qa4 Nd3 24. Qc4 Rb4 25. Qxd3 Bxd4+ 26. Be3 Bxa1 27. Rxa1 Qf6 28. Re1 Rc8 29. h3 Bd7 30. Qxa6 Rc2 31. Rf1 0-1`,
  summary: 'Oyun, 2018 ABD Şampiyonası’nın 10. turunda (28 Nisan 2018) oynandı ve 31 hamlede **Siyahın (Caruana) galibiyetiyle** bitti. Zherebukh bir yıl önce aynı turnuvada Caruana’yı yenmişti; bu kez 2.Nc3 ve 4.g3 ile ana yollardan uzak, kapalı bir Sicilya kuruluşu seçti ve atını **8.Ng5–9.Nh3** yoluyla oynayıp **10.f4–11.f5** ile şah kanadında hamleye geçti. Caruana önce **11...b4!** ile c3 atını kovdu, sonra **12...exf5** ile piyonu alıp d6 piyonunun koruduğu e5 karesini atına kazandı. Turnuva sitesindeki notlar 14.c4’ü stratejik bir yanlışlık sayar: Beyaz 16.c4 ile d5’i tuttu ama d3 piyonu ve d4 ile e3 gibi kara kareler zayıfladı. Asıl hata **18.Nhf4?** oldu (Motor: −0.6’dan −1.5’e): **18...g5!** atı kovdu, 19.Nd5 Nxd5 20.cxd5 sonrası **20...Bf6** ile Siyahın kara kareli fili uzun çapraza yerleşti. 21.d4 merkezi açınca bu fil d4 atına ve a1 kalesine uzandı; **22...Bg4, 23...Nd3, 24...Rb4!** ve **25...Bxd4+ 26.Be3 Bxa1** bir kalite kazandırdı. Son bölümde Siyahın kaleleri b ve c hatlarından ikinci yataya girdi, vezir f6’dan e5 ve b2’ye bakıyordu; Beyaz 31. hamlede terk etti (Motor: −3.3).',
  intro: 'Bu oyun modülün başlığındaki 2.Nc3 e6 3.g3 a6 sırasıyla değil, **1.e4 c5 2.Nc3 e6 3.Nf3 a6 4.g3 b5 5.Bg2 Bb7** sırasıyla başladı, ama aynı yapıya ulaştı: Beyazda Nc3, g3, Bg2 ve d3; Siyahta ...e6, ...a6, ...b5 ve ...Bb7. 2.Nc3 ile başlayan Beyaz, 3.Nf3’ten sonra da isterse d4 ile açık Sicilya’ya (Kan ya da Taimanov yapılarına) geçebilirdi; 4.g3 ile bu kapıyı kapattı ve kapalı Sicilya’ya benzer bir orta oyun seçti. Kapalı Sicilya’nın klasik fikirleri burada da geçerli: Beyaz atını h3 üzerinden f4’e getirip **f4–f5** ile şah kanadında piyon hamlesi yapar, Siyah ise **...b5–b4** ile vezir kanadında karşı oyun kurar ve f5 gelince **...exf5** ile alıp **e5 karesini** atına kazanır. ChessBase’in tur raporu Zherebukh’un So’ya ve Caruana’ya karşı ana yollardan uzak Sicilya kollarına girmesini eleştirir ve Halifman’ın “güçlü rakiplere karşı Beyazla ana hatları oyna” tavsiyesini hatırlatır. Bu oyun, kapalı yapıda erken bir f4–f5 hamlesine Siyahın nasıl cevap vermesi gerektiğini ve kara karelerdeki zayıflığın bir anda taktik bir felakete nasıl dönüştüğünü çok net gösterir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Kapalı Sicilya düzeni: g3, Bg2, d3 ve kısa rok; merkezi kapalı tutup oyunu şah kanadına taşımak.',
      'Atı **Ng5–Nh3** yoluyla getirerek f-piyonunun önünü açık tutmak; at h3’ten f4’e geçip d5 ve e6 karelerine baskı yapacak.',
      '**f4–f5** ile e6 piyonunu sıkıştırmak, f-hattını açmak ve kaleyi f5’e çıkarıp Siyahın şahını hedef almak.',
      '...b4 gelince atı e2’ye çekip oradan f4 ya da c3’e yönlendirmek; d5 karesini at için hedef karesi yapmak.',
      '**c4** ile d5’i kontrol edip b7 filinin çaprazını kapatmak. Oyunda bu plan d3 piyonunu ve d4–e3 kara karelerini zayıflattı.',
      'd4 ile merkezi açıp e5 atını kovmak; ama bunu ancak Siyahın kara kareli fili uzun çapraza oturmadan yapmak gerekirdi.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...a6–b5–Bb7** ile vezir kanadında alan almak ve fil ile e4 piyonuna baskı yapmak.',
      '**...b5–b4** ile c3 atını kovmak: at d5’e gelemez (exd5), e2’ye çekilince merkezden uzaklaşır.',
      'f5 gelince **...exf5** ile almak; d6 piyonunun desteklediği **e5 karesine** atı yerleştirmek ve e-hattını açmak.',
      'Açılan **b-hattını** kaleyle almak; c1 filini b2 karesini korumaya bağlamak.',
      'Beyazın atları f4’e gelince **...g5** ile kovmak; şahın önü açılsa da Beyazın taşları buradan yararlanamaz.',
      'Kara kareli fili **f6’ya** getirip a1–h8 çaprazında d4’ü ve a1 kalesini hedeflemek.',
      'Doğru anda **...Bg4, ...Nd3 ve ...Rb4** ile tempo kazanarak taktikleri başlatmak; kaleleri ikinci yataya sokmak.',
    ] },
  },
  critical: [
    { move: '11b', title: '11...b4! Önce c3 atını kovmak', text: 'Beyaz 11.f5 ile e6’ya baskı yaptı. Caruana hemen almak yerine önce ...b4 ile c3 atını kovar. 12.Nd5? exd5 13.exd5 sonrası Beyaz bir taş kaybeder (Motor: −4.0); 12.fxe6 bxc3 ise vezir kanadındaki Beyaz piyonlarını bozar. Bu yüzden at e2’ye çekilmek zorunda kalır ve d5 ile e4’ü artık desteklemez. Motor da bu hamleyi en iyi buluyor (−0.6); 11...exf5 de hemen hemen aynı değerde (−0.6), ama ...b4’ün önce gelmesi Beyazın Nd5 fikrini temelden ortadan kaldırır.' },
    { move: '12b', title: '12...exf5: e5 karesi Siyahın', text: 'Siyah f5 piyonunu alır ve 13.Rxf5 ile Beyaz kaleyle geri alır. Kâğıt üzerinde Beyaz f-hattında aktif görünür, ama merkezde önemli olan şey değişti: e-piyonu gittiği için e5 karesi artık hiçbir Beyaz piyonu tarafından kovulamaz ve d6 piyonu onu destekler. Turnuva sitesindeki notlar da Siyahın burada sağlam kaldığını ve önemli e5 karesinin kontrolünü kazandığını vurgular. 12...e5 (Motor: −0.2) merkezi kapatıp Beyazın şah kanadı planına zaman tanırdı; ...exf5 −0.8 ile daha güçlüdür.' },
    { move: '14w', title: '14.c4: geçerken almaya davet', text: 'Beyaz b4 piyonunu geçerken almaya davet eder ve 16.c4 ile d5 karesini tutmayı planlar. Turnuva sitesindeki notlar bu hamleyi “ciddi bir stratejik yanlışlık” sayar ve 14.a3’ü önerir: c4’ten sonra Siyahın atı e5’e hiçbir piyon rahatsız etmeden yerleşir ve d3 piyonu geride, korunması zor kalır. Motor kısa vadede 14.c4 (−0.6), 14.c3 (−0.7) ve 14.a3 (−0.8) arasında belirgin bir fark görmüyor; yani hata hemen değil, yapının uzun vadeli sonuçlarında ortaya çıkıyor.' },
    { move: '16b', title: '16...Bc8: kapanan fil yön değiştiriyor', text: 'Beyaz 16.c4 ile d5’i tuttu ve b7 filinin uzun çaprazını kendi e4 piyonuyla birlikte kapattı. Caruana fili c8’e geri alır: fil artık c8–h3 çaprazında f5 kalesine saldırır, Beyaz kaleyi çekmek zorunda kalır ve fil ileride g4’e çıkıp Beyaz vezire tempo kazanacak. Motor bu hamleyi 16...Rb8 (−0.6) ile yaklaşık eşit görüyor (−0.5); ama oyunun devamında g4’e çıkan bu fil kombinasyonun önemli bir parçası oldu.' },
    { move: '18w', title: '18.Nhf4? Atı yanlış kareye göndermek', text: 'Beyaz atı f4’e getirip d5’e sıçramak ve e7 filini değiştirmek istedi. Turnuva sitesindeki notlar bu hamleyi Siyahın sıradaki hamlesinin sonuçlarını yanlış değerlendirmek olarak açıklar. Motor 18.Kh1 (−0.6), 18.Nc3 (−0.6) ya da 18.Qc2’yi (−0.6) öneriyor; maç hamlesinden sonra değerlendirme −1.5’e iner. Sorun, f4’teki atın ...g5 ile kovulabilmesi ve gidebileceği her karede Siyahın kara kare hâkimiyetini artırmasıdır.' },
    { move: '18b', title: '18...g5! Kara karelerin anahtarı', text: 'Siyah f4 atını kovar. Chessdom’un tur özeti bu hamleyi “patlayıcı ...g5!” diye anar ve bundan sonra Beyaz için her şeyin bittiğini yazar. At h3’e dönerse 19...Nfg4 ile at e3’e girmeyi tehdit eder (Motor: 19.Nh3 Nfg4 20.Qc2 Bf6 −1.6); Nd5’e giderse oyundaki gibi değişilir ve Siyahın fili f6’ya geçer. Şahın önü açılıyor gibi görünse de Beyazın c1 fili oyun dışında ve şah kanadında saldıracak taşı yok. Motor: ...g5 −1.5, sonraki en iyi 18...Bg4 −0.5.' },
    { move: '19b', title: '19...Nxd5! Değerli fili korumak', text: 'Beyaz Nd5 ile e7 filini almak istiyordu. Caruana atı hemen alır: 20.cxd5 sonrası Siyahın kara kareli fili korunur ve f6 üzerinden uzun çapraza geçer. 19...Be6? 20.Nxe7+ Qxe7 ile bu fil kaybolsaydı Siyahın üstünlüğü tamamen giderdi (Motor: −0.2). Motor: Nxd5 −2.1. Bu, “iyi fili değişme, kötü taşını değiş” ilkesinin somut bir örneğidir.' },
    { move: '24b', title: '24...Rb4! Saptırma ve kombinasyon', text: 'Beyaz 23.Qa4 ve 24.Qc4 ile hem d4 atını korudu hem d3 atına saldırdı. Caruana kaleyi b4’e getirerek veziri saptırır: 25.Qxb4 Nxb4 sonrası Siyah vezir karşılığında kale alır (Motor: −5.5); 25.Qxd3 ise d4 atının korumasını kaldırır ve 25...Bxd4+ 26.Be3 Bxa1 ile Siyah bir kalite kazanır. Motor 24...Nxc1 25.Raxc1 Qb6’yı çok az daha iyi buluyor (−2.9’a karşı −2.7), ama oyundaki kombinasyon çok daha net ve hesaplaması kolay.' },
  ],
  lessons: [
    'Kapalı Sicilya’da Beyaz f4–f5 ile gelince Siyahın klasik cevabı **...exf5** ile almak ve **e5 karesini** atına kazanmaktır; d6 piyonu bu atı destekler ve hiçbir Beyaz piyonu onu kovamaz.',
    'Piyon almadan önce **...b4** gibi bir ara hamleyle rakibin en iyi taşını kovmak (burada c3 atı) Nd5 gibi tehlikeli fikirleri baştan ortadan kaldırır.',
    'c4 ile d5’i tutmak cazip görünür, ama geride kalan d3 piyonu ve d4–e3 gibi kara kareler zayıflar. Bir piyon hamlesi her zaman bazı kareleri kalıcı olarak bırakır.',
    'Atı f4 gibi bir piyonla kovulabilecek kareye göndermeden önce **...g5** cevabını hesaplayın. Şahın önündeki piyonu oynatmak, rakibin taşları saldırıya hazır değilse güvenlidir.',
    'Kara kareli fil değerliyse onu değiştirmeyin: 19...Nxd5! ile fil korundu ve 20...Bf6 ile uzun çapraza geçti. Kombinasyonun her adımında bu fil vardı.',
    'Merkezi açan hamle (21.d4) iyi yerleşmiş rakip filin çaprazını açıyorsa tehlikelidir: d4 atı f6 filinin hedefi oldu, arkasında da a1 kalesi duruyordu.',
    'Tempo kazanan hamleler (...Bg4 vezire, ...Nd3 file, ...Rb4 vezire) kombinasyonların yakıtıdır: rakip her hamlede saldırıya cevap verince kendi taşlarını korumaya vakit bulamaz.',
  ],
  qa: [
    { q: 'Siyah 11...b4 yerine neden hemen 11...exf5 oynamadı?', a: 'Motor ikisini de yaklaşık eşit buluyor (−0.6), ama 11...b4 önce c3 atını kovarak Beyazın en tehlikeli fikri olan Nd5’i ortadan kaldırır. 12.Nd5? exd5 bir taş kaybettirir (Motor: −4.0), 12.fxe6 bxc3 ise Beyazın vezir kanadı piyonlarını dağıtır. Böylece Beyaz atı e2’ye çekmek zorunda kaldı ve at d5 ile e4’ü artık desteklemiyordu; ...exf5 bir hamle sonra daha güçlü geldi.' },
    { q: 'e5 karesi neden bu kadar önemliydi?', a: '12...exf5 13.Rxf5’ten sonra Beyazın e4 piyonu var ama f-piyonu yok; d4 ile e5’i kovmak ise d3 piyonunu öne sürmeyi gerektirir. Bu yüzden e5’teki at d6 piyonunun desteğiyle kalıcı bir merkez karesine oturdu: buradan d3’e, g4’e, f3’e ve c4’e sıçrayabiliyordu. Oyunun sonundaki 23...Nd3 de bu atın e5’ten çıkışıydı.' },
    { q: 'Beyazın asıl hatası hangisiydi?', a: 'Motora göre 18.Nhf4? (−0.6’dan −1.5’e): at ...g5 ile kovulabileceği bir kareye gitti ve her kaçışında Siyahın kara kare hâkimiyeti arttı. Turnuva sitesindeki notlar ayrıca 14.c4’ü stratejik bir yanlışlık olarak işaretler; motor bunu kısa vadede cezalandırmasa da d3 ve d4–e3 zayıflıklarının kaynağı bu piyon hamlesidir.' },
    { q: '18...g5 şahı zayıflatmadı mı?', a: 'Kâğıt üzerinde zayıflattı: f5 ve h5 kareleri açıldı. Ama Beyazın bundan yararlanacak taşı yoktu: c1 fili b2’yi korumakla meşguldü, vezir d1’de, atlar ise kovuluyordu. Motor ...g5’i −1.5 ile açık ara en iyi hamle buluyor; sonraki en iyi 18...Bg4 sadece −0.5. Saldırı imkânı yoksa zayıflık sadece teoride kalır.' },
    { q: 'Siyah 19...Be6 oynasaydı ne olurdu?', a: '20.Nxe7+ Qxe7 sonrası Beyaz Siyahın kara kareli filini değişirdi ve oyun dengeye yakın olurdu (Motor: −0.2). Oyundaki 19...Nxd5 20.cxd5 Bf6 ise bu fili uzun çapraza getirdi ve değerlendirme −2.1’e çıktı. Kombinasyonun tamamı bu filin f6’da kalmasına dayanıyordu.' },
    { q: 'Beyaz 23. hamlede başka ne yapabilirdi?', a: 'Turnuva sitesindeki notlar 23.Qe1’i de inceler. Motor ona göre de Siyah üstün: 23.Qe1 Nf3+ 24.Nxf3 Bxa1 25.Bxg5 hxg5 26.Qxa1 Bxf3 ile Siyah taş kazanır (Motor: −2.6). Oyundaki 23.Qa4 de −2.5 ile benzer; yani 22.Nxd4’ten sonra Beyazın durumu zaten çok zordu. Daha iyi şans 22.h3’tü (−2.4), ama o da piyon kaybını kabul etmekti.' },
    { q: '24...Rb4 kombinasyonu nasıl işliyor?', a: 'Beyaz vezir c4’te iki görev yapıyor: d4 atını koruyor ve d3 atına saldırıyor. 24...Rb4 veziri vurur: 25.Qxb4 Nxb4 vezir kaybettirir (Motor: −5.5); 25.Qxd3 ise d4’ün korumasını bırakır ve 25...Bxd4+ şah çeker. 26.Be3 ile şah kapatılınca fil a1’deki kaleyi de alır. Bu, “aşırı yüklenmiş taş” temasının ders kitabı örneğidir.' },
    { q: 'Kalite önde olduktan sonra Siyah oyunu nasıl bitirdi?', a: 'Caruana veziri f6’ya getirip uzun çaprazda b2’ye ve f-hattına baktı, sonra kaleyi c8 ve c2’ye taşıyarak ikinci yataya girdi. Beyaz 30.Qxa6 ile bir piyon aldı ama vezir merkezden uzaklaştı ve 30...Rc2 ile g2 fili ve a2 piyonu baskı altına girdi. 31.Rf1’den sonra Siyah ...Qe5 ya da ...Qb2 ile g3’e ve ikinci yataya saldırmaya devam ediyordu (Motor: −3.3) ve Beyaz terk etti.' },
    { q: 'Bu oyun turnuva için neden önemliydi?', a: 'ChessBase’in raporuna göre çok az uzman Caruana’nın bu kadar çabuk kazanmasını bekliyordu. chess24’ün raporuna göre bu galibiyet Caruana’yı son tur öncesinde Shankland ile eşitlemeye yetmedi; Chessdom’a göre arada yarım puan kaldı. Shankland turnuva sonrası röportajında Caruana’ya karşı Zherebukh’un konumunun kötü olduğunu ve kendi oyununda daha iyi olmadığını görünce şampiyonluğu kazanabileceğini düşünmediğini söyledi.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Beyaz şah piyonunu iki kare ilerletir, d5 ve f5 karelerini kontrol eder, fil ve vezire yol açar.',
      amac: 'Merkezde hemen yer kaplamak ve hızlı gelişim yapmak.',
      neden: 'Zherebukh e4 ile açan bir oyuncudur ve Caruana’nın Sicilya’sına karşı hazırlıklı geldi. Motor 1.e4’ü en iyi hamle olarak görüyor (+0.3).',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışı; daha konumsal oyunlara yol açar (Motor: +0.3).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; e4 ya da d4 kararını sonraya bırakır (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini kanat piyonuyla kontrol eder.',
      amac: 'Simetrik olmayan, iki tarafa da kazanma şansı veren bir oyun kurmak.',
      neden: 'Caruana 2018’de hem 1...e5 hem 1...c5 oynuyordu; bu turda dengesiz bir yapıyı seçti. ChessBase’in raporu da Caruana’nın Siyahla Sicilya’ya girerek saldırgan bir başlangıç yaptığını yazar.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; Caruana’nın bu dönemde Petrov ve İspanyol ile oynadığı yol. Daha sağlam ama daha az dengesiz (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması; kapalı bir merkez yapısı (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: '2.Nc3: At c3’e gelişir ve e4’ü destekler; d4 hamlesi hemen gelmez.',
      amac: 'Kararı ertelemek: hem kapalı Sicilya’ya (g3, Bg2, d3) hem de Nf3 ve d4 ile açık Sicilya’ya geçebilmek.',
      neden: 'Esnek bir hamle: Siyah 2...d6 gibi bir hamle yaparsa Beyaz kapalı yapıya, 2...e6’dan sonra ise farklı bir kurulum seçebilir. ChessBase’in raporu Zherebukh’un bu turnuvada So’ya ve Caruana’ya karşı ana yollardan uzak Sicilya kollarını seçtiğini eleştirir.',
      diger: [
        { move: '2.Nf3', text: 'Ana hat: 3.d4 ile açık Sicilya’ya girilir (Motor: +0.4). Siyahın en iyi hazırlığıyla karşılaşma riski en yüksek yol.' },
        { move: '2.d4', text: '2...cxd4 3.c3 ile Smith–Morra gambiti ya da 3.Nf3 ile açık oyunlar (Motor: +0.3).' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini kontrol eder ve kara kareli filine yol açar.',
      amac: 'Kan/Taimanov tipi esnek bir yapı kurmak; ...d5 kırılmasını da hazırda tutmak.',
      neden: '2.Nc3’ten sonra ...e6, Beyaz kapalı yapı seçerse Siyaha merkezde ...d5 kırılması imkânı verir; açık Sicilya’ya geçilirse de Taimanov ya da Kan yapısına uyar.',
      diger: [
        { move: '2...Nc6', text: 'Kapalı Sicilya’nın klasik cevabı; 3.g3 g6 ile simetrik kurulum (Motor: +0.4).' },
        { move: '2...d6', text: 'Esnek; Najdorf ya da Dragon yapılarına yönelir (Motor: +0.4).' },
        { move: '2...a6', text: 'Hemen ...b5 hazırlığı; oyundaki fikirlere benzer (Motor: +0.5).' },
      ],
    },
    '3w': {
      text: '3.Nf3: At f3’e gelişir; Beyaz hâlâ d4 ile açık Sicilya’ya geçebilir.',
      amac: 'Gelişimi sürdürmek ve Siyaha kendi yapısını önce açıklama sorumluluğunu vermek.',
      neden: '3.Nf3 ile açık Sicilya kapısı açık kalır; Siyah 3...a6 ya da 3...Nc6 oynarsa Beyaz 4.d4 veya 4.g3 arasında seçim yapabilir. Motor bu hamleyi en iyi buluyor (+0.4).',
      diger: [
        { move: '3.Nge2', text: 'Kapalı yapı için at e2’ye; ama 3...d5 4.exd5 exd5 5.d4 sonrası merkez açılır (Motor: +0.4).' },
        { move: '3.g3', text: 'Modülün sırası: 3...a6 4.Bg2 b5 ile aynı yapıya gelinir.' },
      ],
    },
    '3b': {
      text: '3...a6: Siyah b5 karesini hazırlar ve Nb5 sıçramasını önler.',
      amac: 'Vezir kanadında ...b5 ile alan almak ve gerekirse Kan yapısına geçmek.',
      neden: '...a6 hem açık Sicilya’da (Kan) hem kapalı yapıda işe yarar: 4.d4 cxd4 5.Nxd4 sonrası Kan, 4.g3 sonrası ise ...b5–Bb7 ile uzun çapraz filine geçiş.',
      diger: [
        { move: '3...Nc6', text: 'Taimanov yolu; 4.d4 cxd4 5.Nxd4 ile açık Sicilya (Motor: +0.4).' },
        { move: '3...d6', text: 'Scheveningen tipi yapı; 4.d4 ile açık oyun (Motor: +0.6).' },
      ],
    },
    '4w': {
      text: '4.g3: Beyaz fili g2’ye getirmeye hazırlanır; açık Sicilya’yı seçmez.',
      amac: 'Kapalı Sicilya kurulumu: Bg2, d3, O-O ve ardından şah kanadında f4–f5.',
      neden: 'Zherebukh Caruana’nın açık Sicilya’daki derin hazırlığından kaçmak istedi. Motor 4.d4’ü daha iyi görüyor (+0.5’e karşı +0.2), ama fark bir oyun tercihi kadar küçük. Bu hamleyle oyun modülün yapısına ulaştı.',
      diger: [
        { move: '4.d4', text: '4...cxd4 5.Nxd4 b5 ile Kan Savunması’na geçiş; teorinin ana yolu (Motor: +0.5).' },
        { move: '4.a3', text: 'b4 karesini önceden kontrol eder; 4...b5 5.d4 ile açık oyun (Motor: +0.1).' },
      ],
    },
    '4b': {
      text: '4...b5: Siyah vezir kanadında alan alır ve ...b4 ile c3 atını kovmaya hazırlanır.',
      amac: 'Fili b7’ye getirip e4’e baskı yapmak ve ...b4 ile Beyazın merkezi destekleyen atını rahatsız etmek.',
      neden: 'Beyazın g3 kurulumuna karşı ...b5 en aktif cevaplardan biridir: Beyaz fili g2’ye getirince Siyahın fili b7’de karşı çaprazda durur. Motor 4...Nc6’yı biraz daha sağlam görüyor (+0.3’e karşı +0.5), ama ...b5 dengesiz oyun isteyen Caruana’nın tarzına uyar.',
      diger: [
        { move: '4...Nc6', text: 'Taimanov tipi gelişim; 5.d4 cxd4 6.Nxd4 sonrası açık oyun (Motor: +0.3).' },
        { move: '4...Qc7', text: 'Esnek vezir hamlesi; e5 ve b8–h2 çaprazına bakar (Motor: +0.4).' },
      ],
    },
    '5w': {
      text: '5.Bg2: Fil uzun çapraza yerleşir ve e4’ü destekler.',
      amac: 'Kurulumu tamamlamak ve rok yapmak.',
      neden: 'g3’ün mantıksal devamı; fil hem e4’ü korur hem de ileride merkez açılırsa a8’e kadar uzanır. Motor en iyi buluyor (+0.4).',
      diger: [
        { move: '5.d4', text: 'Hâlâ açık Sicilya’ya geçiş: 5...cxd4 6.Nxd4 Bb7 (Motor: +0.4).' },
        { move: '5.d3', text: 'Önce e4’ü sağlamlaştırır; genellikle aynı yapıya döner (Motor: +0.3).' },
      ],
    },
    '5b': {
      text: '5...Bb7: Siyahın fili de uzun çapraza çıkar ve e4 piyonuna baskı yapar.',
      amac: 'e4’ü sürekli hedefte tutmak ve Beyazı d3 ile pasif bir yapıya zorlamak.',
      neden: '...b5’in doğal devamı. 5...b4 6.Na4 hemen at kovar, ama at a4’ten c5’e bakar ve Siyah kararını erken vermiş olur.',
      diger: [
        { move: '5...b4', text: '6.Na4 Bb7 7.d3 ile benzer oyun; at a4’te tuhaf durur ama c5’e baskı yapar (Motor: +0.5).' },
        { move: '5...Nc6', text: 'Gelişimi önceler; fil b7’ye sonra gelir (Motor: +0.6).' },
      ],
    },
    '6w': {
      text: '6.d3: Beyaz e4’ü sağlamlaştırır ve kapalı Sicilya düzenini tamamlar.',
      amac: 'Merkezi kapalı tutup f4–f5 ile şah kanadında oynamak.',
      neden: 'b7 filinin e4’e baskısı karşısında d3 en sağlam korumadır. Motor 6.d4’ü tercih ediyor (+0.4, 6...b4 7.Na4 cxd4 8.Nxd4), 6.d3 ile değerlendirme dengeye yaklaşır (+0.1). Beyaz merkezde kavga yerine kapalı bir manevra oyunu seçti.',
      diger: [
        { move: '6.d4', text: '6...b4 7.Na4 cxd4 8.Nxd4 ile açık ve aktif bir oyun (Motor: +0.4).' },
        { move: '6.Qe2', text: 'e4’ü vezirle korur, d-piyonunu serbest bırakır (Motor: +0.2).' },
      ],
    },
    '6b': {
      text: '6...Nc6: At c6’ya gelişir, d4 ve e5 karelerine bakar.',
      amac: 'Gelişimi sürdürmek ve Beyazın d4 hamlesini caydırmak.',
      neden: 'Doğal bir gelişim hamlesi, ama motor 6...d6’yı belirgin şekilde daha iyi buluyor (+0.1’e karşı +0.5): ...Nc6’dan sonra Beyaz 7.O-O ve d4 ile merkezi açabilirdi. Zherebukh ise kapalı planına sadık kaldı.',
      diger: [
        { move: '6...d6', text: 'Önce e5’i destekler; 7.d4 Nf6 sonrası Siyah rahat (Motor: +0.1).' },
        { move: '6...Be7', text: 'Gelişim; 7.e5 ile Beyaz alan alabilir (Motor: +0.4).' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz kısa rok yapar.',
      amac: 'Şahı güvene almak ve f-hattını kale için hazırlamak.',
      neden: 'Rok, f4–f5 planı için gereklidir: kale f1’de durunca f-hattı açıldığında hemen oyuna girer. Motor en iyi buluyor (+0.5).',
      diger: [
        { move: '7.Bf4', text: 'Fil aktif kareye çıkar, d6’ya baskı yapar (Motor: +0.2).' },
        { move: '7.Ne2', text: 'Atı şah kanadına çevirmek için erken bir manevra; daha yavaş (Motor: 0.0).' },
      ],
    },
    '7b': {
      text: '7...d6: Siyah e5 karesini destekler ve d6–e6 ile sağlam bir piyon zinciri kurar.',
      amac: 'Merkezi sağlamlaştırmak ve fili e7’ye, atı f6’ya getirmek.',
      neden: 'Bu hamle ileride oyunun kaderini belirleyecek: e-piyonu f5’te değiştiğinde d6 piyonu e5 karesini atın kalıcı yeri yapacak. Motor ...d6 ile ...Rc8’i yaklaşık eşit görüyor (+0.4).',
      diger: [
        { move: '7...Rc8', text: 'Kaleyi c-hattına getirir; ...c4 fikrini hazırlar (Motor: +0.4).' },
        { move: '7...Qc7', text: 'Vezir e5’e bakar; 8.Re1 Bd6 ile ...e5 hazırlanır (Motor: +0.4).' },
      ],
    },
    '8w': {
      text: '8.Ng5: At g5’e sıçrar; buradan h3 üzerinden f4’e gidecek.',
      amac: 'f3 atını yoldan çekip f-piyonunun ilerleyişini serbest bırakmak.',
      neden: 'Zherebukh’un fikri, Siyahı ...h6 oynamaya zorlayıp atı h3’e getirmek ve f4–f5 planını hızla uygulamaktı. Ama bu iki tempo harcar: motor 8.e5 (+0.4) ya da 8.Re1’i (+0.3) öneriyor; maç hamlesinden sonra değerlendirme −0.4’e döner.',
      diger: [
        { move: '8.e5', text: 'Merkezde alan alır ve f6 karesini Siyahın atına kapatır; 8...Rb8 9.Bf4 ile Beyaz aktif (Motor: +0.4).' },
        { move: '8.Re1', text: 'e4’ü destekler ve e5 kırılmasını hazırlar (Motor: +0.3).' },
        { move: '8.Bf4', text: 'Fil d6’ya baskı yapar; 8...Be7 9.e5 ile benzer fikirler (Motor: +0.2).' },
      ],
    },
    '8b': {
      text: '8...h6: Siyah atı g5’ten kovar.',
      amac: 'Atı geri çekilmeye zorlamak ve g5 karesini kontrol altına almak.',
      neden: 'Atın g5’te durması Siyahı rahatsız ediyordu (Qh5 ve f7 fikirleri). ...h6 aynı zamanda ileride ...g5 hamlesini destekleyecek; oyundaki 18...g5 bu piyonla birlikte işledi. Motor ...h6, ...Nf6 ve ...Be7’yi eşit görüyor (−0.4).',
      diger: [
        { move: '8...Nf6', text: 'Gelişimi önceler; 9.Nh3 g6 10.f4 Bg7 ile şah kanadı fianketto (Motor: −0.4).' },
        { move: '8...Be7', text: '9.Nh3 Nf6 10.f4 b4 ile oyundakine benzer (Motor: −0.4).' },
      ],
    },
    '9w': {
      text: '9.Nh3: At h3’e çekilir; f4’e gelmeye hazır.',
      amac: 'f-piyonunun önünü kapatmadan atı şah kanadında tutmak.',
      neden: 'Beyazın planının mantıksal devamı: at f3’te olsaydı f4 oynanamazdı. Kapalı Sicilya’da Nh3 manevrası tanıdık bir fikirdir; at f4’ten d5 ve e6 karelerine bakar. Motor en iyi buluyor (−0.3).',
      diger: [
        { move: '9.Nf3', text: 'Ata geri döner; iki tempoyu boşa harcamak demek (Motor: −0.4).' },
        { move: '9.Qh5?', text: 'Saldırı denemesi; 9...g6 10.Qh3 Nd4 sonrası vezir kötü durur (Motor: −1.5).' },
      ],
    },
    '9b': {
      text: '9...Nf6: At f6’ya gelişir ve e4’e baskı yapar.',
      amac: 'e4’ü hem b7 filiyle hem atla hedef almak; rok hazırlığı.',
      neden: 'Atın f6’da olması Beyazın f4–f5 hamlesine karşı e4’ü sürekli zayıf tutar. Motor bu hamleyi en iyi buluyor (−0.3).',
      diger: [
        { move: '9...Be7', text: 'Önce fil; 10.a3 Nf6 11.f4 Qc7 ile benzer yapı (Motor: −0.3).' },
        { move: '9...g6', text: 'Fili g7’ye getirmek için; 10.f4 Nge7 (Motor: −0.3).' },
      ],
    },
    '10w': {
      text: '10.f4: Beyaz şah kanadında piyon hamlesine başlar.',
      amac: 'f5 ile e6’ya baskı yapmak ve f-hattını açmak.',
      neden: 'Kapalı Sicilya’nın klasik saldırı planı. Motor 10.a3’ü (−0.4) biraz daha iyi buluyor çünkü önce ...b4’ü önler; Beyaz ise vezir kanadına bir tempo harcamak istemedi (10.f4 −0.5).',
      diger: [
        { move: '10.a3', text: '...b4’ü önler; 10...Be7 11.f4 Qb6 12.f5 (Motor: −0.4).' },
        { move: '10.Ne2', text: 'Atı ...b4’ten önce yeniden konumlandırır (Motor: −0.5).' },
      ],
    },
    '10b': {
      text: '10...Be7: Fil e7’ye gelişir; Siyah rok yapmaya hazırlanır.',
      amac: 'Gelişimi tamamlamak ve şahı güvene almak.',
      neden: 'Siyah f5 gelmeden önce rok için hazırlanmak istedi. 10...b4 hemen at kovmak da eşit değerde (−0.4); Caruana önce gelişmeyi seçti, ...b4’ü Beyazın f5’ine cevap olarak sakladı.',
      diger: [
        { move: '10...b4', text: '11.Ne2 a5 12.a3 Be7 ile vezir kanadında hızlı oyun (Motor: −0.4).' },
        { move: '10...Qc7', text: 'Vezir e5’i kontrol eder; 11.a3 Be7 (Motor: −0.3).' },
      ],
    },
    '11w': {
      text: '11.f5: Piyon e6’ya saldırır ve f-hattını açmak ister.',
      amac: 'e6 piyonunu değiştirip Siyahın merkezini bozmak ve f-hattında kaleyle oynamak.',
      neden: 'Beyaz planına devam etti. Turnuva sitesindeki notlar 11.Kh1’i alternatif olarak anar ve Bacrot–Karjakin (Paris 2017) oyununa işaret eder. Motor 11.a3 (−0.3) ile 11.f5 (−0.5) arasında büyük fark görmüyor, ama f5’ten sonra Siyah ...b4 ile hemen cevap verir.',
      diger: [
        { move: '11.a3', text: '...b4’ü önler; 11...Qb6 12.f5 exf5 13.Rxf5 O-O (Motor: −0.3).' },
        { move: '11.Kh1', text: 'Turnuva notlarında Bacrot–Karjakin, Paris 2017 ile anılan sakin hamle; 11...b4 12.Na4 Rb8 (Motor: −0.5).' },
        { move: '11.Nf2', text: 'At e4’ü destekler; 11...b4 12.Na4 Qc7 (Motor: −0.4).' },
      ],
    },
    '11b': {
      text: '11...b4! Siyah cevabını vezir kanadında verir: c3 atını kovar.',
      amac: 'Atı d5 ve e4’ten uzaklaştırmak; Nd5 fikrini tamamen ortadan kaldırmak.',
      neden: 'Ara hamle: hemen 11...exf5 12.exf5 d5 13.Nf4 de iyidir (−0.6), ama önce ...b4 Beyazı zor bir seçime zorlar. 12.Nd5? exd5 taş kaybettirir; 12.fxe6 bxc3 ise vezir kanadında Beyaz piyonlarını bozar. Motor ...b4’ü en iyi buluyor (−0.6).',
      diger: [
        { move: '11...exf5', text: '12.exf5 d5 13.Nf4 Nd4 ile Siyah merkezde güçlü (Motor: −0.6).' },
        { move: '11...Nd4?', text: '12.fxe6 Nxe6 13.a4 b4 sonrası Beyaz rahat (Motor: +0.3).' },
      ],
    },
    '12w': {
      text: '12.Ne2: At e2’ye çekilir. Turnuva notlarına göre bu bir yenilik; önceki oyunda 12.Nb1 oynanmıştı.',
      amac: 'Atı f4 ya da c3’e yeniden yönlendirmek ve d4’ü kontrol etmek.',
      neden: '12.Nd5? exd5 13.exd5 sonrası Beyaz bir taş kaybeder (Motor: −4.0). 12.Na4 de oynanabilirdi ama at kenarda kalır. Ne2 en iyi seçenek (Motor: −0.7); at buradan f4’e gidip d5’e bakacak.',
      diger: [
        { move: '12.Nd5?', text: '12...exd5 13.exd5 Ne5 sonrası Beyaz bir taş geride (Motor: −4.0).' },
        { move: '12.Nb1', text: 'Turnuva notlarında Tripoteau–Bricard (2003) oyunuyla anılan önceki hamle; 12...exf5 13.Rxf5 O-O 14.Nd2 (Motor: −1.0).' },
        { move: '12.fxe6', text: '12...bxc3 13.exf7+ Kxf7 14.bxc3 ile Beyazın vezir kanadı dağılır (Motor: −0.8).' },
      ],
    },
    '12b': {
      text: '12...exf5: Siyah f5 piyonunu alır; e-hattı açılır ve e5 karesi atına kalır.',
      amac: 'Beyazın e4 piyonunu yalnız bırakmak ve e5 karesini kalıcı olarak ele geçirmek.',
      neden: 'Turnuva sitesindeki notlar, Beyazın şah kanadındaki girişimine rağmen Siyahın sağlam kaldığını ve önemli e5 karesinin kontrolünü kazandığını yazar. 12...e5 merkezi kapatırdı ve Beyaz g4–g5 ile şah kanadında rahatça oynardı (Motor: −0.2). Motor ...exf5’i en iyi buluyor (−0.8).',
      diger: [
        { move: '12...e5', text: 'Merkezi kapatır; 13.c3 d5 14.exd5 Nxd5 ile oyun açılır ama Siyahın avantajı küçük (Motor: −0.2).' },
        { move: '12...Qd7', text: '13.fxe6 Qxe6 14.Nhf4 sonrası Beyaz aktif (Motor: +0.2).' },
      ],
    },
    '13w': {
      text: '13.Rxf5: Kale f5’ten geri alır ve şah kanadında aktifleşir.',
      amac: 'f-hattında kaleyle baskı kurmak ve e4 piyonunu piyon zincirinin parçası olarak tutmak.',
      neden: '13.exf5 e4 karesini ve b7 filinin çaprazını açardı: 13...O-O 14.Nef4 Qb6 sonrası Siyahın fili g2’ye karşı güçlü (Motor: −1.0). 13.Nf2 ise piyon kaybettirir (−1.6). Rxf5 en iyisi (−0.7).',
      diger: [
        { move: '13.exf5', text: 'Uzun çaprazı açar; 13...O-O 14.Nef4 Qb6 15.g4 (Motor: −1.0).' },
        { move: '13.Nf2', text: '13...fxe4 14.Nxe4 Nxe4 15.Bxe4 sonrası Beyaz piyonu geri alamaz (Motor: −1.6).' },
      ],
    },
    '13b': {
      text: '13...O-O: Siyah rok yapar.',
      amac: 'Şahı güvene almak ve kaleyi f8’den oyuna sokmak.',
      neden: 'Merkez Siyahın kontrolünde, şah ise henüz e8’de; f-hattı açıkken şahı merkezde tutmak riskliydi. Motor 13...a5 ile roku eşit görüyor (−0.6); önce rok en doğal ve güvenli seçim.',
      diger: [
        { move: '13...a5', text: 'Vezir kanadında ilerlemeyi sürdürür; 14.Rf1 O-O 15.Nef4 Ne5 (Motor: −0.6).' },
        { move: '13...Ne5', text: 'Atı hemen e5’e getirir; 14.c4 a5 15.a3 (Motor: −0.4).' },
      ],
    },
    '14w': {
      text: '14.c4: Beyaz b4 piyonunu geçerken almaya davet eder ve c-piyonuyla merkezi tutmak ister.',
      amac: 'd5 karesini kontrol etmek ve vezir kanadındaki b4 piyonunu ortadan kaldırmak.',
      neden: 'Turnuva sitesindeki notlar bunu ciddi bir stratejik yanlışlık sayar: c4 ile Siyahın atı e5’e piyon rahatsızlığı olmadan yerleşir ve d3 piyonu geride kalır; notlar 14.a3’ü önerir. Motor kısa vadede 14.c4 (−0.6), 14.c3 (−0.7) ve 14.a3 (−0.8) arasında fark görmüyor; zararın kaynağı uzun vadeli yapıdır.',
      diger: [
        { move: '14.a3', text: 'Turnuva notlarının önerisi: b4’ü değiştirip vezir kanadını açar; 14...a5 15.c4 Nd7 (Motor: −0.8).' },
        { move: '14.c3', text: 'b4’e saldırır ama d3’ü daha da zayıflatır; 14...a5 15.a4 (Motor: −0.7).' },
      ],
    },
    '14b': {
      text: '14...bxc3: Siyah geçerken alır; b-hattı açılır.',
      amac: 'Açık b-hattını kaleyle kullanmak ve Beyazın piyon yapısını bozmak.',
      neden: 'Geçerken almak b-hattını açar ve Beyazı bxc3 ile c-piyonunu ileri itmeye zorlar. 14...Bc8 hemen fili oyuna sokmak da aynı değerde (−0.6); Caruana önce yapıyı netleştirmeyi seçti.',
      diger: [
        { move: '14...Bc8', text: 'Fil f5 kalesine saldırır; 15.Rf1 Bg4 16.Nf2 (Motor: −0.6).' },
        { move: '14...a5', text: 'b4 piyonunu korur ve vezir kanadını kapalı tutar (Motor: −0.6).' },
      ],
    },
    '15w': {
      text: '15.bxc3: Piyonla geri alınır.',
      amac: 'Merkezi piyonlarla tutmak; c3 piyonu d4 hamlesini destekler.',
      neden: '15.Nxc3 Nd4 sonrası Siyahın atı merkeze girer (Motor: −1.0); 15.Rb1? cxb2 ise piyon kaybettirir (−1.7). Piyonla almak tek mantıklı hamledir (−0.7).',
      diger: [
        { move: '15.Nxc3', text: '15...Nd7 16.Nd5 Nd4 ile Siyahın atları güçlü (Motor: −1.0).' },
        { move: '15.Rb1', text: '15...cxb2 16.Bxb2 Rb8 sonrası Beyaz piyon geride (Motor: −1.7).' },
      ],
    },
    '15b': {
      text: '15...Ne5: At d6 piyonunun desteğiyle merkezin en iyi karesine oturur.',
      amac: 'Atı e5’e yerleştirip d3’e, g4’e ve c4’e baskı yapmak.',
      neden: 'Bu at 12...exf5’in kazancıdır: hiçbir Beyaz piyonu onu kovamaz. At g4’e sıçrayıp e3’e ya da f2’ye girmeyi, d3’e girmeyi tehdit eder. Motor ...Ne5 ile ...Rb8’i eşit görüyor (−0.6).',
      diger: [
        { move: '15...Rb8', text: 'Önce b-hattını alır; 16.Rf1 Ne5 17.Nf2 Bc6 (Motor: −0.7).' },
        { move: '15...Bc8', text: 'Fil f5 kalesine saldırır; 16.Rf1 Rb8 (Motor: −0.6).' },
      ],
    },
    '16w': {
      text: '16.c4: Beyaz d5 karesini kontrol eder ve b7 filinin çaprazını kapatır.',
      amac: 'd5’e at oturtmak ve Siyahın uzun çapraz filini etkisizleştirmek.',
      neden: 'b7 fili e4’e ve g2’ye baskı yapıyordu; c4 ile d5 piyonla korundu. Motor bu hamleyi en iyi buluyor (−0.7), ama bedeli büyük: d3 piyonu geride, d4 karesi ise hiçbir zaman piyonla korunamayacak. 16.d4? Neg4 17.Qd3 sonrası Siyahın atı e3’e yaklaşır (−1.0).',
      diger: [
        { move: '16.Rf1', text: 'Kale geri çekilir; 16...c4 17.d4 Nd3 ile Siyahın atı d3’e girer (Motor: −0.8).' },
        { move: '16.d4', text: '16...Neg4 17.Qd3 a5 18.Nf2 sonrası Siyahın atları aktif (Motor: −1.0).' },
      ],
    },
    '16b': {
      text: '16...Bc8! Fil kapanan çaprazdan ayrılır ve f5 kalesine saldırır.',
      amac: 'Fili c8–h3 çaprazına geçirip g4’e çıkarmak; Beyaz kaleyi geri çekmeye zorlamak.',
      neden: 'b7’de fil artık c4 ve e4 piyonlarına çarpıyordu. c8’den hem f5 kalesine tempo kazanır hem de ileride g4 üzerinden Beyaz vezire saldırır; 22...Bg4 bu filin hamlesidir. Motor 16...Rb8’i (−0.6) çok az daha iyi buluyor, ...Bc8 −0.5.',
      diger: [
        { move: '16...Rb8', text: 'Önce b-hattı; 17.Rf1 Bc6 18.Qc2 Nfd7 (Motor: −0.6).' },
        { move: '16...Bc6', text: 'Fil a4 ve d7’ye bakar; 17.Rf1 Rb8 18.Kh1 (Motor: −0.6).' },
      ],
    },
    '17w': {
      text: '17.Rf1: Kale f1’e geri çekilir.',
      amac: 'Kaleyi saldırıdan kurtarmak ve f-hattında tutmak.',
      neden: 'Fil kaleye saldırıyordu; f1 en güvenli kare. 17.Rf2 ve 17.Rf4 kaleyi ...Nfg4 ya da ...g5 gibi saldırılara açık bırakır. Motor en iyi buluyor (−0.7).',
      diger: [
        { move: '17.Rf2', text: '17...Rb8 18.Nc3 Nfg4 sonrası at kaleyi vurur (Motor: −0.8).' },
        { move: '17.Rf4', text: '17...Rb8 18.Rf1 Bg4 ile tempo kaybı (Motor: −1.0).' },
      ],
    },
    '17b': {
      text: '17...Rb8: Kale açık b-hattına gelir; b2 ve b1 karelerini hedefler.',
      amac: 'b-hattını almak ve Beyazın c1 filini b2’yi korumaya bağlamak.',
      neden: 'Turnuva sitesindeki notlar bu hamlenin açık hattı aldığını ve Beyazın filini b2’ye girişi önlemekle meşgul ettiğini söyler. c1 filinin bu bağlılığı ileride Beyazın kara kareleri savunamamasının nedenlerinden biri oldu. Motor ...Rb8’i belirgin şekilde en iyi buluyor (−0.6).',
      diger: [
        { move: '17...Bd7', text: '18.Nc3 Rb8 19.Nf4 Re8 ile daha yavaş (Motor: −0.3).' },
        { move: '17...Nh7', text: 'At g5’e gitmek için; 18.Rb1 Bxh3 19.Bxh3 Rb8 (Motor: −0.3).' },
      ],
    },
    '18w': {
      text: '18.Nhf4? At f4’e gelir ve d5’e sıçramayı hazırlar.',
      amac: 'Nd5 ile e7 filini değiştirmek ya da d5’e kalıcı bir at oturtmak.',
      neden: 'Turnuva sitesindeki notlara göre Beyaz Siyahın sıradaki hamlesinin sonuçlarını yanlış değerlendirdi. Atın f4’te ...g5 ile kovulabilmesi ve gidebileceği her karede (h3, d5, h5) kara kare hâkimiyetinin Siyaha geçmesi asıl sorundur. Motor 18.Kh1 ya da 18.Nc3’ü öneriyor (−0.6); oyundaki hamleden sonra −1.5.',
      diger: [
        { move: '18.Kh1', text: 'Şahı g1–a7 çaprazından çıkarır; 18...Re8 19.Qc2 Bf8 ile oyun dengeli kalır (Motor: −0.6).' },
        { move: '18.Nc3', text: 'At d5’e c3 üzerinden gider; 18...Nc6 19.Kh1 Ng4 20.Nd5 (Motor: −0.6).' },
        { move: '18.Qc2', text: 'b-hattını korur; 18...Nh7 19.Nhf4 Bf6 20.Rb1 (Motor: −0.6).' },
      ],
    },
    '18b': {
      text: '18...g5! At f4’ten kovulur.',
      amac: 'Atı kötü bir kareye zorlamak ve Siyahın kara kareli filine f6 ve g7 karelerini açmak.',
      neden: 'Chessdom’un özeti bu hamleyi “patlayıcı ...g5!” diye niteler ve Shankland’ın Onişçuk’a karşı oynadığı benzer ...g5 ile karşılaştırır. 19.Nh3 Nfg4 20.Qc2 Bf6 ile Siyahın atı e3’e girmeyi tehdit eder; Beyazın şah kanadı saldırısı için hazır taşı olmadığından şahın önündeki zayıflık önemsizdir. Motor: ...g5 −1.5, sonraki en iyi 18...Bg4 −0.5.',
      diger: [
        { move: '18...Bg4', text: '19.h3 Bxe2 20.Qxe2 Nfd7 ile Siyah biraz daha iyi ama fırsat kaçar (Motor: −0.5).' },
        { move: '18...Re8', text: '19.Nc3 Bf8 20.Bd2 g6 sonrası oyun dengeye yakın (Motor: −0.5).' },
      ],
    },
    '19w': {
      text: '19.Nd5: Beyaz e7 filini almak ister.',
      amac: 'Siyahın kara kareli filini değişerek kara karelerdeki baskıyı azaltmak.',
      neden: 'At kaçmak zorundaydı (19.Nc3? gxf4 taş kaybettirir). 19.Nh3 Nfg4 20.Qc2 Bf6 de Siyaha büyük avantaj verir ama motor bunu en iyi savunma sayıyor (−1.6). Nd5 −2.3’e kötüleşir, çünkü Siyah değişimi kendi şartlarıyla yapar.',
      diger: [
        { move: '19.Nh3', text: '19...Nfg4 20.Qc2 Bf6 21.Rb1 Rxb1 22.Qxb1 sonrası Siyahın taşları aktif ama Beyaz direnir (Motor: −1.6).' },
        { move: '19.Kh1', text: '19...gxf4 20.gxf4 Ng6 21.f5 ile Beyaz taş karşılığında saldırı arar (Motor: −2.0).' },
      ],
    },
    '19b': {
      text: '19...Nxd5! Siyah atı hemen alır ve kara kareli filini korur.',
      amac: 'e7 filini değişime sokmadan uzun çapraza geçirmek.',
      neden: '19...Be6? 20.Nxe7+ Qxe7 sonrası Siyahın en değerli taşı gider ve avantaj neredeyse tamamen kaybolur (Motor: −0.2). 19...Bd7 de aynı nedenle kötüdür (+0.2). Nxd5 ile Siyahın atı Beyaz atla değişir, fil kalır: Motor −2.1.',
      diger: [
        { move: '19...Be6?', text: '20.Nxe7+ Qxe7 21.Nc3 Nfd7 sonrası denge (Motor: −0.2).' },
        { move: '19...Bd7?', text: '20.Nxe7+ Qxe7 21.Qd2 ile Beyaz hatta biraz daha iyi (Motor: +0.2).' },
      ],
    },
    '20w': {
      text: '20.cxd5: Piyonla geri alınır; c-hattı açılır.',
      amac: 'Merkezde d5 piyonu ile alan tutmak.',
      neden: '20.exd5 e4 karesini açar ve Siyahın atına daha da yer verir (Motor: −2.5); 20.d4 cxd4 de iyi değil (−2.5). cxd5 en iyisi (−2.1), ama artık d5 piyonu Siyahın kara kareli filini engellemiyor.',
      diger: [
        { move: '20.exd5', text: '20...Bf6 21.Bd2 Nxd3 sonrası Siyah piyon kazanır (Motor: −2.5).' },
        { move: '20.d4', text: '20...cxd4 21.cxd5 Bg4 22.h3 ile Beyazın merkezi dağılır (Motor: −2.5).' },
      ],
    },
    '20b': {
      text: '20...Bf6: Fil uzun çapraza geçer; d4 karesine ve a1 kalesine bakar.',
      amac: 'a1–h8 çaprazını kontrol etmek ve Beyazın d4 hamlesini zorlaştırmak.',
      neden: 'Turnuva sitesindeki notlar Siyahın kara kareler üzerindeki kontrolünün bu noktada “kesin” olduğunu söyler. Fil artık e5 atının arkasında, d4 ve a1’e bakıyor; Beyazın c1 fili ise b2’yi korumakla meşgul. Motor ...Bf6’yı açık ara en iyi buluyor (−2.1); 20...Bd7 sadece −1.1.',
      diger: [
        { move: '20...Bd7', text: '21.d4 cxd4 22.Nxd4 Bf6 23.Be3 sonrası Beyaz merkezi tutar (Motor: −1.1).' },
        { move: '20...Bg4', text: '21.h3 Bxe2 22.Qxe2 Bf6 ile fil değişir (Motor: −1.1).' },
      ],
    },
    '21w': {
      text: '21.d4: Beyaz merkezi açıp e5 atını kovmak ister.',
      amac: 'Geri kalmış d3 piyonundan kurtulmak ve e5 atını merkezden uzaklaştırmak.',
      neden: 'Beyaz pasif kalırsa Siyah ...Ng4 ve ...Bd4+ ile baskıyı artırır. Ama d4 aynı zamanda f6 filinin çaprazını açar. Motor 21.Be3, 21.Nc3 ve 21.d4’ü eşit görüyor (−2.1); yani Beyazın durumu artık her hamlede zor.',
      diger: [
        { move: '21.Be3', text: '21...Ng4 22.Bd2 Bxa1 23.Qxa1 ile Beyaz kalite verip direnir (Motor: −2.1).' },
        { move: '21.Nc3', text: '21...Ng4 22.Qc2 Qe7 23.Rb1 sonrası Siyahın atı aktif (Motor: −2.1).' },
      ],
    },
    '21b': {
      text: '21...cxd4: Siyah c5 piyonuyla alır.',
      amac: 'f6 filinin çaprazını d4’e kadar açmak.',
      neden: 'Motor 21...Bg4’ü (−2.4) biraz daha iyi buluyor, ama ...cxd4 de güçlü (−2.1): d4 karesi artık bir Beyaz taşının oturacağı bir hedef olur. 21...Ng4? 22.e5 dxe5 23.dxc5 sonrası Beyaz merkezi açar (−1.5).',
      diger: [
        { move: '21...Bg4', text: '22.h3 Bxe2 23.Qxe2 cxd4 ile Siyah piyon kazanır (Motor: −2.4).' },
        { move: '21...Ng4', text: '22.e5 dxe5 23.dxc5 e4 ile karmaşık oyun (Motor: −1.5).' },
      ],
    },
    '22w': {
      text: '22.Nxd4: At d4’ten geri alır. Ancak şimdi d4 atı f6 filinin çaprazında duruyor.',
      amac: 'Atı merkeze getirip c6 ve e6 karelerine bakmak.',
      neden: 'Doğal görünür, ama at artık e5 atının arkasındaki f6 filinin hedefidir: e5 atı herhangi bir yere giderse fil d4’ü vurur ve d4–g1 çaprazında şah çeker. Motor 22.h3’ü (−2.4) çok az daha iyi buluyor; 22.Nxd4 −2.5.',
      diger: [
        { move: '22.h3', text: '22...d3 23.Nd4 g4 24.Kh2 ile Beyaz piyon verip kara kare çaprazını kapalı tutar (Motor: −2.4).' },
        { move: '22.Bd2', text: '22...Ng4 23.Rb1 Rxb1 24.Qxb1 d3 sonrası Siyahın piyonu güçlü (Motor: −3.2).' },
      ],
    },
    '22b': {
      text: '22...Bg4: Fil d1 vezirine saldırarak tempo kazanır.',
      amac: 'Veziri d-hattından uzaklaştırmak ve ...Nf3+ ya da ...Nd3 gibi açarak saldırı fikirlerini hazırlamak.',
      neden: '16...Bc8’in meyvesi: fil g4’e çıkarken vezire saldırır ve vezir d4 atını korumayı zorlaştıran karelere gitmek zorunda kalır. 23.Qe1 Nf3+! fikri de buradan doğar. Motor ...Bg4’ü en iyi buluyor (−2.4); 22...Ng4 sadece −1.6.',
      diger: [
        { move: '22...Ng4', text: '23.Kh1 Qb6 24.Rxf6 Nxf6 ile Beyaz kalite verip durumu karıştırır (Motor: −1.6).' },
        { move: '22...Bg7', text: '23.Be3 Bd7 24.Nc6 ile Beyazın atı aktifleşir (Motor: −1.1).' },
      ],
    },
    '23w': {
      text: '23.Qa4: Vezir a4’e çıkar; a6 piyonuna saldırır ve dördüncü yataydan d4 atını korur.',
      amac: 'Hem d4 atını korumak hem de karşı oyun için a6’yı hedeflemek.',
      neden: 'Vezirin gidebileceği her karenin bir sorunu var. Turnuva sitesindeki notlar 23.Qe1’i de inceler: 23.Qe1 Nf3+ 24.Nxf3 Bxa1 25.Bxg5 hxg5 26.Qxa1 Bxf3 ile Siyah taş kazanır (Motor: −2.6). 23.Qd2 Bg7 ise −2.9. Qa4 en iyisi (−2.5), ama d4’ü sadece vezirle korumak onu aşırı yüklenmiş bir taş yapar.',
      diger: [
        { move: '23.Qe1', text: '23...Nf3+ 24.Nxf3 Bxa1 25.Bxg5 hxg5 26.Qxa1 Bxf3 sonrası Siyah bir taş önde (Motor: −2.6).' },
        { move: '23.Qd2', text: '23...Bg7 24.Qc2 Nf3+ 25.Nxf3 Bxa1 ile Siyah kalite kazanır (Motor: −2.9).' },
      ],
    },
    '23b': {
      text: '23...Nd3! At boş kalan d3 karesine girer, c1 filine saldırır ve f6 filinin çaprazını açar.',
      amac: 'd4 atını iki kez (fil ve vezir) hedef alacak duruma gelmek ve c1 filini tehdit etmek.',
      neden: 'd3 piyonu d4’e gidince bu kare boş bir delik oldu. At e5’ten çıkınca f6 fili d4 atını görür ve d4–g1 çaprazında şah tehdidi doğar. Motor ...Nd3’ü en iyi buluyor (−2.8): 24.Ba3 Be5 25.Qc4 Qb6 de Siyaha büyük üstünlük verir.',
      diger: [
        { move: '23...Bd7', text: '24.Qd1 Ng4 25.Kh1 Be5 ile Siyah üstün ama daha yavaş (Motor: −2.2).' },
        { move: '23...a5', text: 'a6’yı korur; 24.a3 Bd7 25.Qd1 ile Beyaz nefes alır (Motor: −1.5).' },
      ],
    },
    '24w': {
      text: '24.Qc4: Vezir c4’e gelir; d3 atına saldırır ve d4’ü korumaya devam eder.',
      amac: 'd3 atını almak ve d4’ü dördüncü yataydan tutmak.',
      neden: 'Beyaz hem atı almak hem d4’ü korumak istiyor; ama b4 karesi Siyahın kalesine açık kaldı. 24.Ba3 Be5 25.Qc4 Qb6 26.Qxd3 ile benzer bir zor konum gelirdi (Motor: −2.5); 24.Be3 Rb4 de aynı temalar (−2.7). Motor 24.Qc4’ü −2.7 görüyor.',
      diger: [
        { move: '24.Ba3', text: 'Fili kurtarır; 24...Be5 25.Qc4 Qb6 26.Qxd3 Qxd4+ 27.Qxd4 Bxd4+ ile vezirler değişir ama Siyahın taşları çok daha aktif (Motor: −2.5).' },
        { move: '24.Be3', text: '24...Rb4 25.Qa3 Bxd4 26.Qxd3 ile Siyah taş kazanır (Motor: −2.7).' },
      ],
    },
    '24b': {
      text: '24...Rb4! Kale vezire saldırır ve onu d4’ün korumasından saptırır.',
      amac: 'Veziri ya kale için ya da d3 atı için oynamaya zorlamak; her iki durumda da d4’ü korumasız bırakmak.',
      neden: '25.Qxb4 Nxb4 sonrası Siyah kale karşılığında vezir kazanır (Motor: −5.5); 25.Qxd3 ise 25...Bxd4+ ile kalite kaybettirir. Motor 24...Nxc1 25.Raxc1 Qb6’yı (d4 atını şaha açmazlar) çok az daha iyi buluyor (−2.9’a karşı −2.7), ama ...Rb4 net ve zorlayıcı.',
      diger: [
        { move: '24...Nxc1', text: '25.Raxc1 Qb6 26.Rxf6 Rfc8 ile Siyah d4’teki açmazdan yararlanır (Motor: −2.9).' },
        { move: '24...Be2', text: '25.Be3 Bxf1 26.Rxf1 Bxd4 27.Qxd4 ile Siyah kalite kazanır ama Beyaz aktif (Motor: −2.1).' },
      ],
    },
    '25w': {
      text: '25.Qxd3: Vezir d3 atını alır. Bu zorunlu.',
      amac: 'Bir taş geri almak ve en az kayıpla kurtulmak.',
      neden: '25.Qxb4 Nxb4 vezir kaybettirir (Motor: −5.5); 25.Bxg5 Rxc4 de aynı sonuç (−5.9). Qxd3 en az kötüsü (−2.9), ama d4 atının korumasını bırakır.',
      diger: [
        { move: '25.Qxb4', text: '25...Nxb4 26.Be3 Bxd4 27.Bxd4 Nc2 sonrası Siyah vezir karşılığında kale aldı (Motor: −5.5).' },
        { move: '25.Bxg5', text: '25...Rxc4 26.Bxf6 Qb6 sonrası Siyah vezir önde (Motor: −5.9).' },
      ],
    },
    '25b': {
      text: '25...Bxd4+! Fil şah çekerek d4 atını alır; sırada a1 kalesi var.',
      amac: 'Atı şah çekerek geri almak ve ardından uzun çaprazdan a1 kalesini toplamak.',
      neden: 'Kombinasyonun asıl hedefi buydu: fil d4’ten hem g1’deki şahı hem a1’deki kaleyi görür. 25...Rxd4? 26.Qxa6 sonrası Siyahın avantajı büyük ölçüde gider (Motor: −0.9). 25...Qb6?? ise 26.Rxf6 ile fil kaybettirir (+4.5). Motor: ...Bxd4+ −2.7.',
      diger: [
        { move: '25...Rxd4', text: '26.Qxa6 Rb4 27.Bd2 Rb2 ile Siyah sadece biraz üstün (Motor: −0.9).' },
        { move: '25...Qb6??', text: '26.Rxf6 Rxd4 27.Be3 ile Beyaz bir taş önde (Motor: +4.5).' },
      ],
    },
    '26w': {
      text: '26.Be3: Fil e3’e girerek şahı kapatır.',
      amac: 'Şahtan kurtulmak ve en azından fili oyuna sokmak.',
      neden: '26.Kh1 Bxa1 27.Ba3 sonrası Beyaz daha da kötü (Motor: −4.1); 26.Qxd4? Rxd4 vezir kaybettirir (−5.9). Be3 en iyi (−2.7), ama a1 kalesi çaprazda kalıyor.',
      diger: [
        { move: '26.Kh1', text: '26...Bxa1 27.Ba3 Rd4 28.Qb1 sonrası Siyah kalite önde ve Beyazın şahı daha açık (Motor: −4.1).' },
        { move: '26.Qxd4?', text: '26...Rxd4 27.Rb1 Rd3 ile Siyah vezir karşılığında kale alır (Motor: −5.9).' },
      ],
    },
    '26b': {
      text: '26...Bxa1: Fil a1 kalesini alır; Siyah bir kalite önde.',
      amac: 'Malzeme kazancını kesinleştirmek.',
      neden: 'Fil burada iki taşa saldırıyordu: e3 fili ve a1 kalesi. Kaleyi almak bir kalite kazandırır. 26...Be5 ya da 26...Bg7 ile fili korumak avantajı −1.1’e düşürürdü. Motor: ...Bxa1 −2.7.',
      diger: [
        { move: '26...Be5', text: '27.Rab1 Ra4 28.Qd2 ile Beyaz eşitliğe yaklaşır (Motor: −1.1).' },
        { move: '26...Bg7', text: '27.Rab1 Ra4 28.Rf2 sonrası Siyahın avantajı küçük (Motor: −0.9).' },
      ],
    },
    '27w': {
      text: '27.Rxa1: Kale geri alır.',
      amac: 'Fili geri almak.',
      neden: 'Bir taş geride kalmamak için zorunlu: 27.h3? Be5 28.hxg4 sonrası Siyah hem kalite hem şah kanadında baskı kazanır (Motor: −4.8). 27.a3 Ra4 28.Rxa1 aynı yere çıkar (−2.8). Rxa1 −2.7.',
      diger: [
        { move: '27.a3', text: 'Önce kaleyi kovar; 27...Ra4 28.Rxa1 Qf6 ile aynı yapı (Motor: −2.8).' },
      ],
    },
    '27b': {
      text: '27...Qf6: Vezir uzun çapraza ve f-hattına geçer.',
      amac: 'a1 kalesine ve b2 karesine bakmak, aynı zamanda f-hattını kontrol etmek.',
      neden: 'Vezir f6’da hem f-hattını hem a1–h8 çaprazını tutar; Beyazın Rf1 ile f-hattında baskı kurmasını önler ve ...Qb2 ile ikinci yataya girmeyi hazırlar. Motor en iyi buluyor (−2.7); 27...Qd7 ve 27...Qe7 daha pasif.',
      diger: [
        { move: '27...Qd7', text: '28.h4 Bh3 29.a3 Rb2 ile Siyah üstün ama vezir pasif (Motor: −2.2).' },
        { move: '27...Qe7', text: '28.Bd4 Rc8 29.a3 Ra4 sonrası Beyazın fili güçlü (Motor: −2.0).' },
      ],
    },
    '28w': {
      text: '28.Re1: Kale e1’e çekilir.',
      amac: 'e4 piyonunu korumak ve kaleyi merkezde tutmak.',
      neden: 'Beyaz e4’ü korumak istedi, ama bu f-hattını Siyaha bırakır. Motor 28.Rf1’i öneriyor (−2.9): 28...Qb2 29.Qxa6 ile Beyaz piyon alıp kaleyi aktif tutar. Oyundaki hamleden sonra −3.5.',
      diger: [
        { move: '28.Rf1', text: '28...Qb2 29.Qxa6 Qe5 30.Qa7 sonrası Beyaz aktif kalır (Motor: −2.9).' },
        { move: '28.Rc1', text: '28...Rc8 29.Rf1 Qb2 sonrası Siyahın vezir ve kaleleri ikinci yataya girer (Motor: −3.8).' },
      ],
    },
    '28b': {
      text: '28...Rc8: Kale c-hattını alır; c2 karesine girecek.',
      amac: 'İkinci kaleyi de oyuna sokmak ve c-hattından ikinci yataya girmek.',
      neden: 'f8 kalesi pasifti; c-hattı tamamen açık. Kale c2 ya da c3’e girdiğinde Beyazın a2 piyonu ve g2 fili saldırı altında kalır. Motor ...Rc8’i en iyi buluyor (−3.5); 28...Rfb8 −2.9.',
      diger: [
        { move: '28...Rfb8', text: '29.h3 Bd7 30.Rc1 ile Beyaz c-hattını tutar (Motor: −2.9).' },
        { move: '28...Bd7', text: '29.a3 Ra4 30.h4 Qe5 ile daha yavaş (Motor: −2.6).' },
      ],
    },
    '29w': {
      text: '29.h3: Beyaz g4 filini kovar.',
      amac: 'Filin d1 ve e2 karelerine baskısını kaldırmak ve şaha h2 karesi açmak.',
      neden: 'g4’teki fil Beyazın birinci yatayını ve e2’yi kontrol ediyordu. Motor 29.a3’ü çok az daha iyi buluyor (−3.5): b4 kalesini kovmak. Oyundaki h3 −3.7, şah kanadında yeni bir zayıflık (g3) yaratır.',
      diger: [
        { move: '29.a3', text: '29...Rbc4 30.Bf1 Qe5 31.Bf2 ile Beyaz direnir (Motor: −3.5).' },
        { move: '29.Bf1', text: '29...Qe5 30.Bf2 Ra4 31.a3 (Motor: −3.7).' },
      ],
    },
    '29b': {
      text: '29...Bd7: Fil d7’ye çekilir ve b5 ile a4 karelerine bakar.',
      amac: 'Fili korumak ve vezir kanadında Beyaz vezirine karşı kullanmak.',
      neden: 'Motor 29...Bh5’i biraz daha iyi buluyor (−3.6) çünkü fil h5–e2 çaprazında kalır. Oyundaki ...Bd7 de güçlü (−3.1): a6’yı dolaylı olarak savunur ve ...Bb5 ile vezire saldırma imkânı tutar. 29...Qe5? 30.hxg4 Qxg3 sonrası Beyaz rahatlar (−1.5).',
      diger: [
        { move: '29...Bh5', text: '30.Rf1 Qe5 31.Qxa6 Rc2 ile Siyah saldırıyı sürdürür (Motor: −3.6).' },
        { move: '29...Qe5?', text: '30.hxg4 Qxg3 31.Qe2 sonrası Beyaz fil kazanır ve kurtulur (Motor: −1.5).' },
      ],
    },
    '30w': {
      text: '30.Qxa6: Beyaz a6 piyonunu alır ve bir piyonu geri kazanır.',
      amac: 'Malzeme farkını azaltmak ve a-piyonunu geçer piyon yapmak.',
      neden: 'Piyon alırken vezir merkezden uzaklaşır ve ikinci yatay korumasız kalır. Motor 30.a3 (−3.6) ya da 30.Qd1’i (−3.7) öneriyor; oyundaki hamle −4.0. Fark büyük değil ama Siyahın kalesi c2’ye hemen girer.',
      diger: [
        { move: '30.a3', text: '30...Rc3 31.Qd2 Rbc4 32.Rf1 Qe5 ile Siyah üstün ama Beyazın vezir kanadı korunur (Motor: −3.6).' },
        { move: '30.Qd1', text: '30...Qe5 31.a3 Ra4 32.Qf3 ile vezir şah kanadını savunur (Motor: −3.7).' },
      ],
    },
    '30b': {
      text: '30...Rc2: Kale ikinci yataya girer; g2 fili ve a2 piyonu baskı altında.',
      amac: '...Rbb2 ile kaleleri ikinci yatayda ikileyip g2’ye saldırmak.',
      neden: 'İkinci yataydaki kale oyun sonlarının en güçlü silahlarından biridir. Motor 30...Qe5’i (−3.7) biraz daha iyi buluyor: vezir g3’e baskı yaparken kale c2’ye sonra girer. Oyundaki ...Rc2 −3.4.',
      diger: [
        { move: '30...Qe5', text: '31.Bf2 Rc2 32.Re2 Ra4 ile Siyah vezir ve kaleyle saldırır (Motor: −3.7).' },
        { move: '30...Qc3', text: '31.Bf2 Rb2 32.Qa7 Qd2 (Motor: −3.2).' },
      ],
    },
    '31w': {
      text: '31.Rf1: Kale f1’e geçip f6 vezirine saldırır. Bu hamleden sonra Beyaz terk etti.',
      amac: 'Veziri kovup bir tempo kazanmak ve f-hattında karşı oyun bulmak.',
      neden: 'Beyazın en iyi denemesi buydu (Motor: −3.3); 31.Qf1 Qc3 ya da 31.Re2 Rb1+ daha kötü. Ama Siyah 31...Qe5 (−3.5), 31...Qc3 ya da 31...Qb2 ile g3’e ve ikinci yataya baskıyı sürdürür; bir kalite eksik ve zayıf şahla Beyazın kurtuluş şansı yoktu.',
      diger: [
        { move: '31.Qf1', text: '31...Qc3 32.Re2 Rbb2 33.Rxc2 Rxc2 ile Siyahın kalesi ikinci yatayda kalır (Motor: −4.2).' },
        { move: '31.Re2', text: '31...Rb1+ 32.Kh2 Rbb2 33.Rxc2 Rxc2 ile Siyahın kaleleri ikinci yatayda kalır (Motor: −4.8).' },
      ],
    },
  },
  sources: [
    { title: 'U.S. Chess Champs: 2018 U.S. Championships – Round 10 (notlu oyun)', url: 'https://uschesschamps.com/?p=6120' },
    { title: 'ChessBase: US Championship – Caruana keeps it close', url: 'https://en.chessbase.com/post/us-championship-2018-round-10' },
    { title: 'Chessdom: 2018 U.S. Championships Round 10 recap', url: 'https://www.chessdom.com/2018-u-s-championships-round-10-recap/' },
    { title: 'chess24: US Champs 10-11 – Shankland in dreamland', url: 'https://chess24.com/en/read/news/us-champs-10-11-shankland-in-dreamland' },
    { title: 'Exeter Chess Club: The Closed Sicilian', url: 'https://exeterchessclub.org.uk/content/closed-sicilian' },
  ],
  exercises: [
    { id: 'zca-1', kind: 'tekrar', plan: false, title: 'Kara kareli fili korumak',
      source: 'Zherebukh – Caruana, Saint Louis 2018 (19. hamle)',
      fen: '1rbq1rk1/4bp2/p2p1n1p/2pNn1p1/2P1P3/3P2P1/P3N1BP/R1BQ1RK1 b - - 1 19',
      prompt: 'Beyazın atı d5’e geldi ve e7 filine saldırıyor. Siyahın atı e5’te güçlü duruyor. Hamle sizde.',
      hint: 'Beyazın atı hangi taşınızı almak istiyor? Onu almadan önce siz davranın.',
      line: ['Nxd5'],
      explanation: '**19...Nxd5! 20.cxd5** ve Siyah kara kareli filini korur; fil ...Bf6 ile uzun çapraza geçecek, e5 atı ise merkezde kalacak. 19...Be6? 20.Nxe7+ Qxe7 sonrası bu fil kaybolur. Motor: ...Nxd5 −2.1, sonraki en iyi 19...Be6 −0.2.',
      link: 'Caruana’nın planı kara kareli fili uzun çapraza getirmekti; bu alış o planı korudu.' },
    { id: 'zca-2', kind: 'tekrar', plan: false, title: 'Şah çekip kaleyi toplamak',
      source: 'Zherebukh – Caruana, Saint Louis 2018 (25. hamle)',
      fen: '3q1rk1/5p2/p2p1b1p/3P2p1/1r1NP1b1/3Q2P1/P5BP/R1B2RK1 b - - 0 25',
      prompt: 'Beyaz d3 atını vezirle aldı. Siyahın f6 fili uzun çaprazda, Beyazın a1 kalesi aynı çaprazın sonunda duruyor. Hamle sizde.',
      hint: 'd4 atını şahla birlikte hedef alın.',
      line: ['Bxd4+', 'Be3', 'Bxa1'],
      explanation: '**25...Bxd4+! 26.Be3 Bxa1** ve Siyah atı geri aldıktan sonra a1 kalesini de toplar; bir kalite önde kalır. 25...Rxd4? zayıftır. Motor: ...Bxd4+ −2.6, sonraki en iyi 25...Rxd4 −1.1; 26. hamlede ...Bxa1 −2.8, sonraki en iyi 26...Be5 −1.1.',
      link: '20...Bf6 ile uzun çapraza geçen fil burada a1 kalesine kadar uzandı.' },
    { id: 'zca-3', kind: 'transfer', plan: false, title: 'g-piyonuyla taşı kovmak',
      source: 'Balinas – Najdorf, Olimpiyat, Nice 1974 (23. hamle)',
      fen: '1r3rk1/1b2qn1p/p2p1bp1/1ppP1p2/5B2/P2P2PP/1PPQNRB1/5RK1 b - - 9 23',
      prompt: 'Kapalı Sicilya: Beyaz f4–f5 ile geldi, Siyah ...exf5 ile aldı ve e-hattı açıldı. Beyazın fili f4’te, Siyahın veziri e7’de, f6 fili uzun çaprazda. Hamle sizde.',
      hint: 'Caruana’nın 18...g5 hamlesini hatırlayın: f4’teki taş nereye kaçabilir?',
      line: ['g5'],
      explanation: '**23...g5!** f4 filine saldırır. 24.Be3 Rbe8! sonrası fil e-hattında e7 vezirine karşı açmazda kalır; 24.Bxg5 Bxg5 ise taş verir. Oyunda 24.Kh2 gxf4 25.Nxf4 ile Beyaz fil karşılığında yalnızca bir piyon aldı. Motor: ...g5 −2.6, sonraki en iyi 23...Bxb2 −0.8.',
      link: 'Caruana ...exf5’ten sonra 18...g5 ile f4 atını kovdu; Najdorf aynı yapıda, yine ...exf5’in açtığı e-hattıyla, ...g5 ile f4 filini kazandı.' },
    { id: 'zca-4', kind: 'transfer', plan: false, title: 'Kalite verip fil şahı',
      source: 'Raicevic – Andersson, Hastings turnuvası 1979/80 (31. hamle)',
      fen: '2r3k1/4r1bp/p2p2p1/1b1p4/3P1PP1/2P3NP/1R3K2/R2N4 b - - 5 31',
      prompt: 'Siyahın g7 fili uzun çaprazda d4 piyonunun arkasında duruyor. Beyazın şahı f2’de, kalesi b2’de. Kapalı Sicilya’dan çıkan bu oyun sonunda hamle sizde.',
      hint: 'c3 piyonu gitse d4 piyonu korumasız kalır; fil oradan şah çekebilir.',
      line: ['Rxc3', 'Nxc3', 'Bxd4+'],
      explanation: '**31...Rxc3! 32.Nxc3 Bxd4+** ve fil şah çekerek c3 atına ve b2 kalesine bakar; 33.Kf3 Re3+ 34.Kg2 Bxc3 sonrası Siyah malzemeyi geri alır ve öne geçer. Motor: ...Rxc3 −2.5, sonraki en iyi 31...Rf8 −0.9; 32...Bxd4+ ise tek hamle.',
      link: 'Caruana’nın fili ...Bxd4+ ile şah çekip a1 kalesini topladı; Andersson da uzun çapraz filiyle d4’ü şahla alıp kale ve atı hedef aldı.' },
  ],
};
