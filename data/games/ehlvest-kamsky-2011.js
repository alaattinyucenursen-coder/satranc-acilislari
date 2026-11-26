// Jaan Ehlvest – Gata Kamsky, ABD Şampiyonası, Saint Louis 2011. Kaynak: PgnMentor (Kamsky.pgn).
export default {
  id: 'ehlvest-kamsky-2011',
  theme: '...d5 kırılması ve altıncı yataydaki kale',
  white: 'Jaan Ehlvest', black: 'Gata Kamsky',
  whiteShort: 'Ehlvest', blackShort: 'Kamsky',
  event: 'ABD Şampiyonası', site: 'Saint Louis', year: 2011, eco: 'B40',
  variation: 'Sicilya Savunması, 2.Nf3 e6 3.Nc3 a6 4.g3 b5 (kapalı kuruluş)', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. Nc3 a6 4. g3 b5 5. Bg2 Bb7 6. d3 d6 7. O-O Nf6 8. Ng5 b4 9. Nb1 h6 10. Nh3 Nc6 11. Nd2 g6 12. Nc4 Bg7 13. Bf4 e5 14. Be3 O-O 15. f4 exf4 16. Bxf4 Ne8 17. Qd2 Kh7 18. Nf2 Nd4 19. Ng4 h5 20. Nf2 Ne6 21. Be3 Rb8 22. Nh3 N8c7 23. Ng5+ Kg8 24. a3 b3 25. c3 d5 26. exd5 Bxd5 27. Ne4 f5 28. Ned6 Rf6 29. Bh6 Bxg2 30. Bxg7 Nxg7 0-1`,

  summary: 'Sonuç 0-1: **Gata Kamsky** Siyahla kazandı. 2011 ABD Şampiyonası’nın sekiz kişilik A grubunun 4. turunda oynanan bu oyunda Kamsky, maç sonrası kendi deyişiyle “karmaşaya hemen girmeden sadece gelişmek” istedi. ...a6–b5–Bb7 ile vezir kanadında alan aldı, 8...b4 ile c3 atını b1’e geri gönderdi ve iki filini iki uzun çapraza (b7, g7) yerleştirdi. Ehlvest atlarını g5–h3–f2–g4 arasında dolaştırıp 15.f4 ile şah kanadında oynamaya çalıştı, ama Siyah ...exf4, ...Ne8, ...Kh7, ...h5 ve ...Ne6 ile her şeyi sakin karşıladı. 24...b3! ile Beyazın vezir kanadını kilitleyen Kamsky, 25...d5! ile merkezi açtı ve 26...Bxd5 ile filini merkeze getirdi. 27...f5 ve 28...Rf6 ile f6 kalesini altıncı yataya koydu; bu kalenin d6’ya giden yolunu yalnızca kendi e6 atı kapatıyordu. Ehlvest 29.Bh6? ile filleri değiştirmek isteyince bu at tempoyla g7’ye alındı (30...Nxg7!), kale d6 atına saldırdı ve Beyaz bir kale karşılığında iki taş vermek zorunda kaldı. Ehlvest burada terk etti (Motor: −2.9).',
  intro: 'Bu oyun modülün başlığındaki 2.Nc3 e6 3.g3 a6 4.Bg2 sırasıyla değil, **1.e4 c5 2.Nf3 e6 3.Nc3 a6 4.g3 b5 5.Bg2 Bb7** sırasıyla başladı ve aynı yapıya ulaştı: Beyazda Nc3, g3, Bg2 ve d3 (Kapalı Sicilya / Şah-Hint Saldırısı tipi kuruluş); Siyahta ...e6, ...a6, ...b5 ve ...Bb7 (Kan Varyantı’ndan tanıdık bir vezir kanadı kuruluşu). Tek fark, Beyazın atının e2 yerine f3’te olması. Oyun 18 Nisan 2011’de, ABD Şampiyonası’nın ön eleme grubunun 4. turunda oynandı; Kamsky bu turnuvayı kazanıp unvanını korudu. Siyahın planı basittir ama çok öğreticidir: ...b4 ile c3 atını kovmak, b7 filiyle e4’e baskı yapmak, Beyazın f4 saldırısını ...exf4 ve sağlam bir şah kanadıyla karşılamak, ...b3 ile vezir kanadını kilitlemek ve en uygun anda **...d5** ile merkezi açmak. Oyunun sonunu ise küçük ama güzel bir taktik getirir: kendi atının arkasında bekleyen bir kale.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Kapalı kuruluş:** g3, Bg2, d3 ve kısa rok. Merkezi açmadan (d4 oynamadan) e4 piyonunu sağlam tutmak ve oyunu şah kanadına taşımak. Motor bu yapıda d4 ile Açık Sicilya’ya dönmeyi biraz daha iyi buluyor; Ehlvest’in seçimi bir tercih meselesiydi.',
      '**f4 ilerleyişi:** f3 atını yoldan çekmek için 8.Ng5 ve 10.Nh3 ile atı h3’e götürmek, sonra f-piyonunu f4’e sürüp f-hattını açmak. Kapalı Sicilya’da bu plan klasiktir (Nh3 ve f4 ile f-hattında kaleleri toplamak).',
      '**Kara karelerde fil ve vezir:** Be3/Bf4 ve Qd2 ile h6 piyonuna ve g7 filine bakmak; Bh6 ile Siyahın kara kare filini değişmek, şahı zayıflatmak.',
      '**Atları ileri karelere yerleştirmek:** b1 atını d2–c4’e, diğer atı f2–g4–g5 ve e4–d6’ya getirmek. c4 atı hem d6’ya hem b6/a5’e bakar.',
      '**Vezir kanadında karşı oyun:** a3 ile b4 piyonunu sorgulamak. Ama Siyah ...b3 ile cevap verince Beyazın c2 piyonu sabitlendi, c3 zorunlu oldu ve d3 geri piyon olarak kaldı.',
      '**Hata noktası:** Ehlvest d6 atını yalnızca c4 atıyla korunan bir ileri karakola koydu, sonra 29.Bh6? ile fil değişimine gidip Siyahın e6 atına tempoyla çekilme fırsatı verdi. 29.Qf2 ile oyun hâlâ savunulabilirdi (Motor: −0.5).',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...a6–b5–b4:** Vezir kanadında alan almak ve c3 atını kovalamak. 8...b4 sonrası at b1’e dönmek zorunda kaldı ve Beyaz onu d2–c4 üzerinden geri getirmek için üç tempo harcadı.',
      '**İki uzun çapraz:** ...Bb7 ile e4 ve g2’ye, ...g6–Bg7 ile b2 ve merkeze bakmak. Kamsky’nin kendi sözüyle amaç “karmaşaya girmeden gelişmek”ti.',
      '**...e5 ve ...Nd4:** 13...e5 ile Bf4’ü kovalamak, d4 karesini ata kazandırmak; Beyaz f4 oynayınca ...exf4 ile e5 karesini ve g7 filinin çaprazını açmak.',
      '**Sağlam şah kanadı:** ...Ne8, ...Kh7, ...h5 ve ...Ne6. Beyazın atlarının g4/g5’e gelmesi, Bf4’ün ve Qd2’nin h6’ya bakması sakin hamlelerle karşılandı; e6 atı hem f4’ü hem g5’i kontrol etti.',
      '**...b3:** Piyonu b3’e kadar sürüp c2’yi sabitlemek. Beyaz c3 oynamak zorunda kalınca d3 geri ve zayıf bir piyon oldu, a1 kalesi oyundan düştü.',
      '**...d5 kırılması:** Taşlar hazır olunca (Nc7 ve Bb7 d5’i destekliyor) merkezi açmak ve filini 26...Bxd5 ile uzun çaprazın merkezine yerleştirmek.',
      '**Altıncı yataydaki kale:** 27...f5 ve 28...Rf6 ile kaleyi d6 atının hizasına getirmek, kendi e6 atının arkasında bekletmek ve bu atı uygun anda tempoyla çekerek hattı açmak (30...Nxg7!).',
    ] },
  },
  critical: [
    { move: '8w', title: '8.Ng5: f-piyonunun önünü açmak', text: 'Ehlvest f4 planı için f3 atını g5 üzerinden h3’e götürmeye karar verdi. Plan bu yapıda bilinir ama bu sırada iki tempoya mal oldu ve 8...b4 ile c3 atı da kovalanınca Beyazın iki atı birden geri çekilmek zorunda kaldı. Motor 8.d4 ile merkezi açmayı daha iyi buluyor (Motor: +0.3); maç hamlesinden sonra Siyah biraz daha rahat (Motor: −0.4).' },
    { move: '15w', title: '15.f4: Beyazın şah kanadı hamlesi', text: 'Hazırlık uzundu: atlar h3 ve c4’te, fil e3’te. 15.f4 ile Beyaz f-hattını açar, ama Siyah 15...exf4 16.Bxf4 Ne8! ile g7 filinin çaprazını açıp sakin bir savunma kurar. f-hattı açıldı, ancak Beyazın oraya getirebileceği taş yok: Siyahın şahı ...Kh7 ve ...h5 ile güvende. Motor 15.a3 ile vezir kanadında önce b4’ü sorgulamayı biraz daha iyi buluyor (−0.3’e karşı −0.5).' },
    { move: '24b', title: '24...b3!: vezir kanadını kilitlemek', text: 'Beyaz 24.a3 ile b4 piyonunu sorgularken Kamsky piyonu alıp değiştirmek yerine (24...bxa3 25.Rxa3) b3’e sürdü. Piyon c2’yi sabitler: 25.cxb3? d5 ile Siyahın oyunu açılır (Motor: −0.4), bu yüzden 25.c3 zorunlu gibidir. Sonuçta d3 geri bir piyon olur, a1 kalesi hareketsiz kalır ve b3 piyonu oyun sonuna kadar Beyazın vezir kanadını sıkıştırır.' },
    { move: '25b', title: '25...d5!: merkezi açmak', text: 'Siyahın bütün taşları bu kırılmaya hazır: c7 atı ve b7 fili d5’i destekliyor, e6 atı Ng5’i karşılıyor. Merkez açılınca b7 fili uzun çaprazın merkezine gelir ve d3 piyonu tamamen geride kalır. Motor 25...d5’i en iyi buluyor (yaklaşık 0.0), 25...Ba8 ya da 25...f6 gibi bekleme hamleleri Beyaza zaman verir (+0.6/+0.7). Ardından 26.exd5 Bxd5! doğrudur; 26...Nxd5? 27.Nxe6 fxe6 28.Rxf8+ Bxf8 29.Bg5 sonrası Siyahın yapısı dağılır: e6 geri ve zayıf bir piyon, şah açık, b3 piyonu da korumasız kalır (Motor: +1.9).' },
    { move: '28w', title: '28.Ned6: ileri karakola giden at', text: 'Ehlvest atını d6’ya atladı. At göz alıcı görünür ama yalnızca c4 atıyla korunuyor ve Siyahın g7 fili (...Bf8) ile kalesi (...Rf6) onu hedef alabilir. Motor 28.Ng5 Bxg2 29.Kxg2 Nxg5 30.Bxg5 Qd5+ ile basit değişimleri öneriyor (Motor: 0.0); maç hamlesinden sonra Siyah hafif önde (−0.4).' },
    { move: '28b', title: '28...Rf6: kale kendi atının arkasında', text: 'Kale altıncı yataya çıkar ve d6 atının hizasına girer, ama arada Siyahın kendi e6 atı var. Hamle iki işi birden yapar: f-hattını f5 piyonunun arkasında korur ve e6 atı nereye giderse gitsin d6 atına bir “açılan saldırı” hazırlar. Bu, birkaç hamle sonraki taktiğin temelidir. Motor 28...Rf6 ile 28...Qd7’yi eşit görüyor (−0.5).' },
    { move: '29w', title: '29.Bh6?: savunmayı koparan değişim', text: 'Ehlvest, Siyahın kara kare filini değişip şahını zayıflatmak istedi. Ama 29...Bxg2 sonrası 30.Bxg7 Nxg7! ile e6 atı tempoyla geri çekilir ve f6 kalesi d6 atına saldırır; 30.Kxg2 Bxh6 31.Qxh6 Ng7 de aynı fikirdir. Doğrusu 29.Qf2! Bxg2 30.Qxg2 Nb5 idi; vezir g2’yi geri alır, Be3 yerinde kalır ve e6 atı d6’nın önünde bloke olarak durur (Motor: −0.5). 29.Bxd5? Nxd5 ise d6 atını daha da zayıf bırakır (Motor: −1.9). Maç hamlesinden sonra: −1.5 ile −2.2 arası.' },
    { move: '30b', title: '30...Nxg7!: altıncı yatay açılıyor', text: 'At e6’dan çekilince f6 kalesi d6 atına saldırır. d6 atı kale ve vezir tarafından iki kez saldırı altında, yalnızca c4 atıyla korunuyor; üstelik Beyaz g2’deki siyah fili de geri almak zorunda. 31.Qxg2 Rxd6 32.Nxd6 Qxd6 sonrası Siyah bir kale karşılığında iki at kazanmış olur (Motor: −2.9). Kamsky maç sonrası, Ehlvest’in erken terkini soran Maurice Ashley’ye “İki atın bir kaleye karşılığı yetmez mi sizce?” diye karşılık verdi. 30...Kxg7? ise 31.Qxg2 ile dengeye döner (0.0).' },
  ],
  lessons: [
    'Bu kapalı yapıda **...b5–b4** hem c3 atını kovalar hem de Siyaha vezir kanadında alan kazandırır. c3 atı b1’e dönerse Beyaz onu yeniden oyuna sokmak için birkaç tempo harcar.',
    'Beyazın f4 saldırısına karşı **...exf4** ve sağlam bir şah kanadı (...Ne8, ...Kh7, ...h5, ...Ne6) çoğu zaman yeterlidir; f-hattının açılması tek başına saldırı demek değildir, o hatta taş getirmek gerekir.',
    'Bir piyonu ilerletmek (24...b3) bazen değiştirmekten (24...bxa3) daha güçlüdür: rakibin piyonunu sabitler, ona zorunlu bir cevap (25.c3) dayatır ve kalıcı bir zayıflık (d3) yaratır.',
    '**...d5 kırılması** taşlar hazır olduğunda yapılır: d5’i destekleyen taşları sayın, geri alma sırasını doğru seçin (26...Bxd5!, 26...Nxd5? değil).',
    'Bir kalenin hattını kendi taşınız kapatıyorsa, o taşı **tempoyla** (bir alma ya da tehditle) çekmek açılan saldırıyı başlatır (30...Nxg7!). Böyle konumlarda “bu taş çekilirse ne olur?” sorusunu hem kendiniz hem rakibiniz için sorun.',
    'İleri karakoldaki bir at ancak sağlam korunuyorsa güçlüdür. d6 atı yalnızca c4 atıyla korunuyordu; Siyahın kalesi, veziri ve fili aynı kareye bakınca at yük hâline geldi.',
    'Değişim yaparken sadece değişen taşlara değil, değişimin kimin hangi taşına tempo kazandırdığına bakın: 29.Bh6? filleri değiştirdi ama Siyahın atına en iyi kareye tempoyla gitme fırsatı verdi.',
  ],
  qa: [
    { q: 'Kazanan kimdi ve oyunu nasıl kazandı?', a: 'Sonuç 0-1: Gata Kamsky Siyahla kazandı. Kamsky vezir kanadında ...b5–b4–b3 ile alan aldı, Beyazın f4 saldırısını ...exf4, ...Kh7, ...h5 ve ...Ne6 ile sakin karşıladı, sonra 25...d5! ile merkezi açtı. 28...Rf6 ile kalesini kendi e6 atının arkasına, d6 atının hizasına koydu; Ehlvest 29.Bh6? ile filleri değişince 30...Nxg7! ile at tempoyla çekildi ve d6 atı düştü. 31.Qxg2 Rxd6 32.Nxd6 Qxd6 sonrası iki atı bir kaleye karşı kazanan Siyah kesin üstün (Motor: −2.9), Ehlvest de terk etti.' },
    { q: 'Siyah neden 4...b5 gibi erken bir vezir kanadı hamlesi seçti?', a: 'Beyaz 4.g3 ile kapalı kuruluşa geçince d4 hemen gelmeyecek demektir; Siyah da bu zamanı vezir kanadında alan almak için kullanır. ...b5 sonrası ...Bb7 e4’e baskı yapar, ...b4 ise c3 atını kovalar. Motor 4...Qc7 ve 4...d6’yı biraz daha sağlam buluyor (+0.3/+0.4’e karşı +0.5) ama fark küçük. Kamsky’nin maç sonrası açıklaması da bunu destekler: “Sadece gelişmek ve hemen karmaşaya girmemek istedim.”' },
    { q: 'Beyazın 8.Ng5 ve 10.Nh3 manevrası ne işe yarıyordu?', a: 'Amaç f3 atını f-piyonunun önünden çekip f4’ü hazırlamaktı; h3 atı f4’ü destekler ve sonra f2 üzerinden g4’e gidebilir. Ama manevra iki tempo aldı ve 8...b4 9.Nb1 ile diğer at da geri gidince Beyazın gelişimi geride kaldı. Motor 8.d4 (Motor: +0.3) ya da 8.Re1 (0.0) hamlelerini öneriyor; 8.Ng5 sonrası Siyah biraz daha rahat (−0.4).' },
    { q: 'Siyah neden 24...bxa3 değil de 24...b3 oynadı?', a: '24...bxa3 25.Rxa3 sonrası a1 kalesi a-hattında oyuna girer ve Beyazın vezir kanadı rahatlar (Motor: +0.3). 24...b3 ise c2 piyonunu sabitler: 25.cxb3? d5 Siyaha iyi oyun verir (−0.4), 25.c3 sonrası da d3 geri bir piyon olarak kalır ve a1 kalesi hareketsiz kalır. Motor 24...b3’ü en iyi buluyor.' },
    { q: 'Siyah 26. hamlede neden atla değil de filiyle aldı?', a: '26...Nxd5? sonrası 27.Nxe6! fxe6 28.Rxf8+ Bxf8 29.Bg5 ile Beyaz büyük üstünlük kurar: c7 atı d5’e gidince e6 atı korumasız kalır, değişimden sonra Siyahın e6 piyonu zayıf, şahı açık ve b3 piyonu hedef olur (Motor: +1.9 ile +2.3 arası). 26...Bxd5! ise filin uzun çaprazdaki en güçlü karesidir; g2 filine karşı durur ve c4 atına bakar (Motor: +0.2). 26...Nxg5? 27.Bxg5 Qd7 28.d6 ise daha da kötü (+2.6).' },
    { q: 'Beyazın asıl hatası neydi? 29.Bh6 yerine ne oynamalıydı?', a: 'Asıl hata 29.Bh6? idi (Motor: −0.5’ten yaklaşık −1.5/−2.2’ye). Fil değişimi, Siyahın e6 atına g7’ye tempoyla gitme fırsatı verdi ve f6 kalesinin d6’ya giden yolu açıldı. 29.Qf2! Bxg2 30.Qxg2 Nb5 ile Beyaz d6 atını değişip zorluklara rağmen dengeye yakın kalırdı (−0.5). Daha önce 28.Ned6 yerine 28.Ng5 ile basit değişimler de iyi bir yoldu (0.0).' },
    { q: '30.Bxg7 yerine 30.Kxg2 Beyazı kurtarır mıydı?', a: 'Hayır. 30.Kxg2 Bxh6 31.Qxh6 Ng7! sonrası aynı fikir çalışır: at g7’ye çekilir, f6 kalesi d6 atına saldırır ve Siyah malzeme kazanır (Motor: yaklaşık −2.6, derinlik 20). 30.Qxg2? Bxh6 ise h6 filini düpedüz kaybettirir (−4.0 civarı). Yani 29.Bh6 sonrasında Beyazın konumu zaten kaybedilmişti; 30.Bxg7 ayrı bir hata sayılmaz.' },
    { q: 'Ehlvest neden 30...Nxg7 sonrasında hemen terk etti?', a: '31.Qxg2 Rxd6 32.Nxd6 Qxd6 sonrası Siyahın iki atı Beyazın kalesine karşı duruyor; b3 piyonu Beyazın vezir kanadını kilitliyor, d3 zayıf, Siyahın atları d5 ve e6 gibi merkez karelere gelebiliyor (Motor: −2.9). 31.Ne4? Bxf1 ise daha da kötü (−4.4). Maç sonrası Maurice Ashley erken terki sorgulayınca Kamsky “İki atın bir kaleye karşılığı yetmez mi?” dedi ve Ehlvest’in enerjisini sonraki turlara saklamak istediğini söyledi.' },
    { q: 'Bu oyundan Kapalı Sicilya’da Siyah için genel ders ne?', a: 'Beyaz merkezi kapalı tutup şah kanadında oynarken Siyahın üç kozu vardır: vezir kanadında piyon ilerleyişi (...b5–b4–b3), Beyazın f4’üne karşı ...exf4 ile kara kareleri ve g7 çaprazını açmak, ve doğru anda ...d5 ile merkezi açmak. Kamsky üçünü de sırasıyla uyguladı ve taşlarını (Bb7, Nc7, Ne6, Rf6) bu kırılmaya göre yerleştirdi.' },
  ],
  sources: [
    { title: 'Chess.com: Youth Movement Continues at U.S. Championships (4. tur raporu, Kamsky’nin maç sonrası sözleri)', url: 'https://www.chess.com/news/view/youth-movement-continues-at-us-championships-1113' },
    { title: 'ChessBase: 2011 US Championships – midway through prelims', url: 'https://en.chessbase.com/post/2011-us-championships-midway-through-prelims' },
    { title: 'The Week in Chess: Youth succeeds in round 4 – US Championships 2011', url: 'https://theweekinchess.com/chessnews/events/us-chess-championships-2011/youth-succeeds-in-round-4.-krush-beats-zatonskih-in-the-us-championships' },
    { title: 'The Week in Chess: US Chess Championships 2011 (oyunlar ve sonuçlar, turnuva formatı)', url: 'https://theweekinchess.com/chessnews/events/us-chess-championships-2011' },
    { title: '365Chess: ch-USA Group A 2011 (tur ve tarih bilgisi)', url: 'https://www.365chess.com/tournaments/ch-USA_GpA_2011/38996' },
    { title: 'Exeter Chess Club: The Closed Sicilian (Kapalı Sicilya’da f4, Nh3 ve ...d5 planları)', url: 'https://exeterchessclub.org.uk/content/closed-sicilian' },
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkezde e4 piyonunu kurar, vezire ve f1 filine yol açar.',
      amac: 'Merkezde alan almak ve hızlı gelişmek.',
      neden: 'Ehlvest 1.e4 ile de 1.d4/1.c4 ile de oynayan, geniş repertuvarlı bir oyuncudur. Bu oyunda Sicilya’ya karşı uzun Açık Sicilya teorisine girmek yerine sakin bir kapalı kuruluş seçecekti.',
      diger: [
        { move: '1.d4', text: 'Kapalı oyunlara yol açar (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); çoğu zaman d4’lü yapılara döner.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini kenardan kontrol eder ve simetrik olmayan bir mücadele seçer.',
      amac: 'Kazanma şansı yüksek, dengesiz bir yapı kurmak; ileride c-hattını yarı açık kullanmak.',
      neden: 'Kamsky 1.e4’e karşı hem 1...e5 hem 1...c5 oynamıştır. Sicilya, Beyazın sakin kuruluşlarında bile Siyaha vezir kanadında karşı oyun verir; bu oyunda da öyle oldu.',
      diger: [
        { move: '1...e5', text: 'Daha simetrik ve sağlam bir yol (Motor: +0.2). Kamsky bu turnuvada Ivanov’a karşı 1...e5 ile oynamıştı.' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.35); farklı bir merkez yapısı getirir.' },
      ],
    },
    '2w': {
      text: '2.Nf3 at gelişir, d4 ve e5’e bakar.',
      amac: 'Doğal gelişim ve d4 ile Açık Sicilya seçeneğini saklı tutmak.',
      neden: 'Bu sıra Beyaza iki seçenek bırakır: 3.d4 ile Açık Sicilya ya da Nc3/g3 ile kapalı kuruluş. Modülün 2.Nc3 sırasından farkı budur; at e2 yerine f3’e gelmiştir.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya sırası (Motor: +0.3). Modülün ana sırası 2.Nc3 e6 3.g3 a6’dır; at sonra e2’ye gider ve f4 daha kolay gelir.' },
        { move: '2.c3', text: 'Alapin (Motor: +0.3): d4’ü piyonla desteklemek ister.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini kontrol eder ve f8 filine yol açar.',
      amac: 'Kan, Taimanov ya da Paulsen yapılarına esnek bir başlangıç; ileride ...d5 kırılmasını hazırlamak.',
      neden: '...e6 Siyaha atlarını ve fillerini nereye koyacağını sonraya bırakma esnekliği verir. Kapalı kuruluşlarda da işe yarar, çünkü ...d5 ile merkezi açma imkânı saklı kalır; oyunda da kazanç bu kırılmadan geldi.',
      diger: [
        { move: '2...Nc6', text: 'Klasik gelişim (Motor: +0.3); motorun hafif tercihi.' },
        { move: '2...d6', text: 'Najdorf/Dragon yoluna gider (Motor: +0.5).' },
      ],
    },
    '3w': {
      text: '3.Nc3 at gelişir ve e4’ü destekler; Beyaz d4’e acele etmez.',
      amac: 'Kapalı kuruluş seçeneğini açık tutmak; g3–Bg2 ile e4’ü sağlamlaştırmak.',
      neden: 'Ehlvest, 3.d4 cxd4 4.Nxd4 ile Kan ya da Taimanov’un geniş teorisine girmek yerine kendi bildiği kapalı yapıya yöneldi. Motor için 3.d4 ve 3.Nc3 eşit değerde (+0.3).',
      diger: [
        { move: '3.d4', text: 'Açık Sicilya (Motor: +0.3). 3...cxd4 4.Nxd4 a6 ile Kan Varyantı’na girilir.' },
        { move: '3.c3', text: 'Alapin’e benzer yapılar (Motor: +0.3).' },
      ],
    },
    '3b': {
      text: '3...a6: b5 karesini beyaz taşlara kapatır ve ...b5 ilerleyişini hazırlar.',
      amac: 'Vezir kanadında piyonlarla alan almak; Beyaz kapalı oynarsa ...b5–b4 ile c3 atını kovmak.',
      neden: 'Beyaz d4 oynarsa Kan yapısı oluşur, oynamazsa ...b5 ile hızla vezir kanadında oynanır. Motor bu konumda 3...a6’yı en iyi hamle olarak görüyor (+0.3). 3...d6? 4.d4 ile Siyaha istediği yapıyı vermez (+0.7).',
      diger: [
        { move: '3...Nc6', text: 'Taimanov tipi gelişim (Motor: +0.4); 4.d4 ile Açık Sicilya’ya dönülür.' },
        { move: '3...d6', text: 'Daha pasif (Motor: +0.7); 4.d4 cxd4 5.Nxd4 sonrası Scheveningen yapısı.' },
      ],
    },
    '4w': {
      text: '4.g3: Beyaz kapalı kuruluşu seçer; fil g2’den uzun çapraza bakacak. Oyun bu hamleyle modülün yapısına girer.',
      amac: 'e4 piyonunu g2 filiyle desteklemek, kısa rok yapıp şah kanadında f4 ile oynamak.',
      neden: 'Beyaz merkezi açmadan oynamayı tercih eder. Bedeli, Siyahın vezir kanadında rahatça ...b5 oynayabilmesidir; Beyazın c3 atı ...b4 ile hedef olur. Motor 4.d4’ü biraz daha iyi buluyor (+0.5’e karşı +0.4).',
      diger: [
        { move: '4.d4', text: 'Açık Sicilya, Kan Varyantı (Motor: +0.5): 4...cxd4 5.Nxd4 b5 6.g3 gibi.' },
        { move: '4.a3', text: '...b5–b4’ü önceden engeller (Motor: +0.2), ama bir tempo harcar.' },
      ],
    },
    '4b': {
      text: '4...b5: Siyah vezir kanadında hemen alan alır.',
      amac: '...Bb7 ile e4’e baskı yapmak ve ...b4 ile c3 atını kovalamak.',
      neden: 'Beyaz d4 oynamadığı için Siyahın merkezde acele etmesine gerek yok; tempoyu vezir kanadında kullanır. Kamsky maç sonrası açılışını “sadece gelişmek ve hemen karmaşaya girmemek istedim” diye anlattı. Motor 4...Qc7’yi biraz daha sağlam buluyor (+0.3), ama fark küçük (+0.5).',
      diger: [
        { move: '4...Qc7', text: 'Vezir c7’den e5’e bakar, ...Nc6 ile esnek kalınır (Motor: +0.3).' },
        { move: '4...d6', text: 'Merkezi önce sağlamlaştırmak (Motor: +0.4).' },
        { move: '4...Nc6', text: 'Taimanov tarzı gelişim (Motor: +0.4).' },
      ],
    },
    '5w': {
      text: '5.Bg2 fil uzun çapraza yerleşir ve e4’ü korur.',
      amac: 'Kuruluşu tamamlamak; b7 filinin e4 baskısını karşılamak.',
      neden: 'Siyah ...Bb7 ile e4’e bakacağından fil hemen g2’ye gelir. 5.d3 ve 5.d4 de motor için eşit (+0.4); Beyaz önce fili getirip d-piyonunun kararını sonraya bırakır.',
      diger: [
        { move: '5.d4', text: '5...cxd4 6.Nxd4 Bb7 ile Kan’a benzer yapılar (Motor: +0.4).' },
        { move: '5.d3', text: 'Aynı kuruluş, farklı sıra (Motor: +0.4).' },
      ],
    },
    '5b': {
      text: '5...Bb7: fil uzun çaprazda e4 piyonuna baskı yapar ve g2 filinin karşısına geçer.',
      amac: 'e4’ü sabitlemek, Beyazın d4 ya da f4 hamlelerinde merkezi açınca çaprazdan yararlanmak.',
      neden: 'Fil b7’de hem savunma (g2 filini karşılar) hem saldırı işi görür. 26. hamlede bu fil d5’e gelip oyunun en güçlü taşı olacak. Motor 5...Bb7’yi açık ara en iyi buluyor (+0.4); 5...Ne7 ya da 5...Nc6 biraz daha zayıf (+0.55).',
      diger: [
        { move: '5...Nc6', text: 'Önce at; ama e4 üzerindeki baskı gecikir (Motor: +0.6).' },
        { move: '5...Ne7', text: 'At e7–c6/g6 kurulumu (Motor: +0.5).' },
      ],
    },
    '6w': {
      text: '6.d3 ile e4 piyonla desteklenir; Beyaz merkezi kapalı tutacak.',
      amac: 'Kapalı yapıda e4’ü kalıcı olarak sağlam tutmak; şah kanadına yönelmek.',
      neden: 'Ehlvest Şah-Hint Saldırısı tipi bir kuruluşu seçti. Motor 6.d4’ü daha aktif buluyor (6...cxd4 7.Nxd4 b4 8.Na4, Motor: +0.4); 6.d3 sonrası Beyaz biraz pasif kalır (+0.3).',
      diger: [
        { move: '6.d4', text: 'Merkezi açar (Motor: +0.4): 6...cxd4 7.Nxd4 b4 8.Na4 gibi.' },
        { move: '6.Qe2', text: 'e4’ü vezirle desteklemek (Motor: +0.2).' },
      ],
    },
    '6b': {
      text: '6...d6: Siyah e5 karesini kontrol eder ve esnek bir yapı kurar.',
      amac: 'Beyazın e5 ilerleyişini önlemek; ileride ...e5 ya da ...d5 seçeneğini saklamak.',
      neden: 'Kapalı yapıda Siyah merkezini sağlamlaştırır; d6 piyonu hem e5’i hem c5’i destekler. Motor 6...Be7 ve 6...d6’yı eşit görüyor (+0.2).',
      diger: [
        { move: '6...Be7', text: 'Önce gelişim (Motor: +0.2).' },
        { move: '6...Qc7', text: 'Vezir e5’e bakar (Motor: +0.3).' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz rok yapar ve şahını güvene alır.',
      amac: 'Kuruluşu tamamlamak; f-piyonunu ilerletmeden önce şahı güvene almak.',
      neden: 'Kapalı kuruluşta rok, f4 planının ön koşuludur: kale f1’de f-hattı açılınca hemen işe yarar. Motor burada da 7.d4’ü biraz daha iyi buluyor (+0.2’ye karşı +0.1).',
      diger: [
        { move: '7.d4', text: '7...b4 8.Na4 cxd4 9.Nxd4 ile merkezi açmak (Motor: +0.2).' },
        { move: '7.Qe2', text: 'e4’ü destekleyip e5 fikrini hazırlamak (Motor: −0.1).' },
      ],
    },
    '7b': {
      text: '7...Nf6: at gelişir ve e4’e ikinci kez bakar.',
      amac: 'e4 baskısını artırmak, kısa roka hazırlanmak.',
      neden: 'b7 fili ve f6 atı birlikte e4’ü hedefler; bu, Beyazın ataklarını kısıtlar çünkü e4 piyonu sürekli korunmalıdır. Motor 7...Nd7 ve 7...Nf6’yı eşit buluyor (+0.1).',
      diger: [
        { move: '7...Nd7', text: 'At d7’den e5’e gider, f6 karesi boş kalır (Motor: +0.1).' },
        { move: '7...Qc7', text: 'Vezir önce (Motor: +0.1).' },
      ],
    },
    '8w': {
      text: '8.Ng5: at f3’ten çıkar; yolu h3–f2 ya da f3’e dönüştür, ama asıl amaç f-piyonunun önünü açmak.',
      amac: 'f4 ilerleyişini hazırlamak; at h3’ten f4’ü destekleyecek.',
      neden: 'Kapalı yapıda Beyazın en tipik planı f4–f5’tir; f3’teki at buna engeldir. Ama bu manevra iki tempo alır ve ...h6 ile at kovalanır. Motor 8.d4’ü öneriyor (8...cxd4 9.Nxd4, Motor: +0.3); maç hamlesinden sonra Siyah biraz daha rahat (−0.4).',
      diger: [
        { move: '8.d4', text: 'Merkezi açar (Motor: +0.3): 8...cxd4 9.Nxd4 Qc7 10.Qe2 gibi.' },
        { move: '8.Re1', text: 'Kale e-hattına; d4 ve e5’i hazırlar (Motor: +0.1).' },
        { move: '8.Nh4', text: 'Atı h4’e götürüp f4 oynamak da benzer bir fikirdir, ama at kenarda kalır.' },
      ],
    },
    '8b': {
      text: '8...b4: c3 atı kovalanır; bu yapıda Siyahın tipik hamlesi.',
      amac: 'Atı e4’ün savunmasından uzaklaştırmak ve vezir kanadında alan kazanmak.',
      neden: 'Beyazın atı c3’ten çekilince e4 zayıflar ve Beyaz hem g5 atını hem b1 atını yeniden yerleştirmek zorunda kalır. Motor 8...Nc6 ve 8...h6’yı biraz daha iyi buluyor (−0.4’e karşı −0.2); ...b4 hemen oynanınca c4 karesi Beyazın atına kalır (oyunda 12.Nc4 gelecek).',
      diger: [
        { move: '8...Nc6', text: 'Önce gelişim, ...b4 sonraya (Motor: −0.4).' },
        { move: '8...h6', text: 'Önce g5 atını sormak: 9.Nh3 Nc6 10.f4 (Motor: −0.4).' },
      ],
    },
    '9w': {
      text: '9.Nb1: at geri çekilir; d2 üzerinden yeniden oyuna girecek.',
      amac: 'Atı c4 karesine götürmek ve c-piyonunun önünü açık tutmak.',
      neden: 'Atın üç karesi var: b1, e2 ve a4. e2’de f4 planını engellemez ama g5 atı için de bir yol bırakmaz; a4’te kenarda kalır. Motor üçünü de yakın görüyor (−0.2/−0.3).',
      diger: [
        { move: '9.Ne2', text: 'At e2’de f4 ve c3’ü destekler (Motor: −0.2).' },
        { move: '9.Na4', text: 'At kenarda c5’e bakar, ama ...Bc6 ile kovalanabilir (Motor: −0.3).' },
      ],
    },
    '9b': {
      text: '9...h6: g5 atı kovalanır.',
      amac: 'Atı geri gönderip tempo kazanmak; g5 karesini kontrol altına almak.',
      neden: 'Beyaz atı zaten h3’e götürmek istiyordu, bu yüzden ...h6 tempoyu tam kazandırmaz; ama g5 karesini kalıcı olarak kontrol eder. Motor 9...a5, 9...Nc6 ve 9...h6’yı eşit buluyor (−0.2).',
      diger: [
        { move: '9...a5', text: 'b4 piyonunu desteklemek (Motor: −0.3).' },
        { move: '9...Nc6', text: 'Gelişim (Motor: −0.2).' },
      ],
    },
    '10w': {
      text: '10.Nh3: at h3’e çekilir; f2 ve f4 karelerine yönelecek.',
      amac: 'f-piyonunun önünü açık tutmak ve f4’ü desteklemek.',
      neden: '10.Nf3 ile geri dönmek planın iki tempoluk boşa gittiğini kabul etmek olurdu. 10.Nxf7? Kxf7 11.f4 fedası ise yetersiz (Motor: −1.8). Motor 10.Nf3’ü biraz daha iyi buluyor (−0.2’ye karşı −0.4).',
      diger: [
        { move: '10.Nf3', text: 'Geri dönmek (Motor: −0.2); f4 planından vazgeçmek demek.' },
        { move: '10.Nxf7?', text: '10...Kxf7 11.f4 ile at fedası yetersiz (Motor: −1.8).' },
      ],
    },
    '10b': {
      text: '10...Nc6: at c6’ya gelişir ve d4 karesine bakar.',
      amac: 'Gelişimi tamamlamak; ...Nd4 ile merkeze yerleşmek.',
      neden: 'Beyaz d4’ü oynamadığı için d4 karesi Siyah atı için doğal bir yerdir. Motor 10...Be7, 10...a5 ve 10...Nc6’yı eşit görüyor (−0.4).',
      diger: [
        { move: '10...Be7', text: 'Önce kısa rok hazırlığı (Motor: −0.4).' },
        { move: '10...a5', text: 'b4’ü desteklemek (Motor: −0.4).' },
      ],
    },
    '11w': {
      text: '11.Nd2: b1 atı d2’ye gelir; c4’e gidecek.',
      amac: 'Atı c4’e getirip d6 piyonuna ve b6/a5 karelerine baskı yapmak.',
      neden: 'b4 piyonu c3’ü kontrol ettiği için at oraya dönemez; c4 ise ...b4 sonrası boşalan güçlü bir karedir. Motor 11.a3, 11.Nd2 ve 11.f4’ü eşit buluyor (−0.4).',
      diger: [
        { move: '11.a3', text: 'Önce b4’ü sorgulamak (Motor: −0.4).' },
        { move: '11.f4', text: 'Hemen f4 (Motor: −0.4).' },
      ],
    },
    '11b': {
      text: '11...g6: Siyah ikinci filini g7’ye koyacak.',
      amac: 'Fili uzun çaprazda b2’ye ve merkeze bakacak şekilde yerleştirmek; f4 açılırsa e5 karesini kontrol etmek.',
      neden: 'Kamsky iki filini iki uzun çapraza koymayı seçti. Bu kurulum Beyazın f4 hamlesinden sonra çok işe yaradı (g7 fili açılan çaprazda). Ama motor bunu küçük bir gevşeklik olarak görüyor: 11...a5 ya da 11...Be7 daha iyi (−0.4’e karşı 0.0), çünkü ...h6 ve ...g6 birlikte g6 ve h6’yı zayıflatır.',
      diger: [
        { move: '11...a5', text: 'b4’ü desteklemek, c4 atının b6’ya gelmesini zorlaştırmak (Motor: −0.4).' },
        { move: '11...Be7', text: 'Sakin gelişim (Motor: −0.4).' },
      ],
    },
    '12w': {
      text: '12.Nc4: at c4’te d6 piyonuna ve b6’ya bakar.',
      amac: 'd6’ya baskı yapmak; Bf4 ile ikinci taşı d6’ya getirmek.',
      neden: 'Planlanan manevranın sonu. Motor burada 12.f4’ü biraz daha iyi buluyor (+0.05’e karşı −0.15), çünkü ...g6 sonrası f5 hamlesi daha da güçlenir.',
      diger: [
        { move: '12.f4', text: '12...Bg7 13.f5 ile şah kanadında hemen oynamak (Motor: +0.05).' },
        { move: '12.a3', text: 'Önce b4’ü sorgulamak (Motor: −0.2).' },
      ],
    },
    '12b': {
      text: '12...Bg7: fil uzun çaprazda.',
      amac: 'Gelişimi tamamlamak ve kısa rok için hazırlanmak.',
      neden: '...g6’nın mantıklı devamı; motor 12...Bg7’yi en iyi buluyor (−0.2). 12...a5 ya da 12...Na5 ise gelişimi geciktirir (0.0/+0.1).',
      diger: [
        { move: '12...a5', text: 'Vezir kanadında devam (Motor: 0.0).' },
        { move: '12...Na5', text: 'c4 atını değişmek (Motor: +0.1); ama g6–h6 zayıflıkları kalır.' },
      ],
    },
    '13w': {
      text: '13.Bf4: fil f4’ten d6 piyonuna baskı yapar.',
      amac: 'd6’ya ikinci kez saldırmak (Nc4 + Bf4); Siyahı bir karar vermeye zorlamak.',
      neden: 'd6 piyonu c4 atı ve f4 fili tarafından hedef alınınca Siyah onu korumak ya da ...e5 ile yapıyı değiştirmek zorunda. Motor 13.Bf4’ü en iyi buluyor (−0.2).',
      diger: [
        { move: '13.Be3', text: 'c5’e bakan sakin bir kare (Motor: −0.3).' },
        { move: '13.a3', text: 'Vezir kanadında oynamak (Motor: −0.35).' },
      ],
    },
    '13b': {
      text: '13...e5: Siyah merkezi kapatır, f4 filini kovalar ve d4 karesini atına hazırlar.',
      amac: 'd6’nın baskısını kaldırmak, d4 karesini kalıcı olarak kazanmak.',
      neden: 'Bu tek iyi hamledir. 13...Ne5? 14.Nxe5 dxe5 15.Bxe5 bir piyon kaybettirir (Motor: +1.0); 13...Bf8 ise çok pasiftir (+0.7). ...e5 sonrası d5 karesi zayıflar, ama Beyazın oraya gelecek taşı yok.',
      diger: [
        { move: '13...Ne5?', text: '14.Nxe5 dxe5 15.Bxe5 ile piyon kaybı (Motor: +1.0).' },
        { move: '13...Bf8', text: 'd6’yı filiyle korumak, ama Siyah geri çekilir (Motor: +0.7).' },
      ],
    },
    '14w': {
      text: '14.Be3: fil e3’e çekilir ve c5’e bakar.',
      amac: 'Fili koruyup c5 piyonunu baskı altında tutmak; f4 ilerleyişini serbest bırakmak.',
      neden: 'Fil f4’te kalamaz; e3, f4 ilerleyişinin önünü açar. Motor 14.Be3 ve 14.Bd2’yi eşit buluyor (−0.3).',
      diger: [
        { move: '14.Bd2', text: 'b4’e bakan kare; c3 ile birlikte vezir kanadında oynamak (Motor: −0.3).' },
        { move: '14.Bc1', text: 'f4’ü hazırlamak (Motor: −0.4).' },
      ],
    },
    '14b': {
      text: '14...O-O: Siyah kısa rok yapar.',
      amac: 'Şahı güvene almak, kaleleri birleştirmek.',
      neden: 'Gelişim bitmek üzere ve Beyazın f4 hamlesi gelmeden şahın güvende olması gerekir. Motor 14...O-O’yu en iyi buluyor (−0.3); 14...Na5 değişimi daha zayıf (−0.1).',
      diger: [
        { move: '14...Na5', text: 'c4 atını değişmek (Motor: −0.1).' },
        { move: '14...Qc7', text: 'Rok ertelenir; 15.a3 ile vezir kanadı açılır (Motor: +0.2).' },
      ],
    },
    '15w': {
      text: '15.f4: Beyazın şah kanadı planı başlar; f-hattı açılacak.',
      amac: 'f-hattını açmak, f1 kalesini ve Be3’ü Siyahın şahına karşı kullanmak.',
      neden: 'Bütün hazırlık (Ng5–h3) bu hamle içindi. Ama f-hattı açıldığında oraya gelecek ikinci bir Beyaz taşı yok; Siyah ...exf4 ile g7 filinin çaprazını açar. Motor 15.a3’ü biraz daha iyi buluyor (−0.3’e karşı −0.5).',
      diger: [
        { move: '15.a3', text: '15...a5 16.axb4 axb4 ile a-hattını açmak (Motor: −0.3).' },
        { move: '15.f3', text: 'Sağlam bekleme (Motor: −0.3).' },
      ],
    },
    '15b': {
      text: '15...exf4: Siyah alır; e5 karesi atına kalır, g7 filinin çaprazı açılır.',
      amac: 'Beyazın f5 ile şah kanadını kapatmasını önlemek ve kara kareleri kullanmak.',
      neden: '15...exf4 tek iyi cevaptır. 15...Qc7 ya da 15...Na5 sonrası 16.f5 ile Beyaz şah kanadında yer kazanır (Motor: +0.1/+0.4). Bu yapıda Kapalı Sicilya’nın klasik savunma reçetesi de budur: f5’e izin vermemek için ...exf4.',
      diger: [
        { move: '15...Qc7', text: '16.Qd2 Kh7 17.a3 ile Beyaz rahat (Motor: +0.1).' },
        { move: '15...Na5', text: '16.Nxa5 Qxa5 17.f5 ile şah kanadı saldırısı (Motor: +0.4).' },
      ],
    },
    '16w': {
      text: '16.Bxf4: fil f4’e yerleşir ve d6 ile h6’ya bakar.',
      amac: 'f-hattında piyon yapısını bozmadan almak ve fil ile d6’ya yeniden baskı yapmak.',
      neden: '16.gxf4 şahın önünü açar, 16.Nxf4 ise atı g6’ya bakan ama ...Ne5 ile itilebilecek bir kareye koyar. Motor 16.Bxf4’ü en iyi buluyor (−0.4).',
      diger: [
        { move: '16.gxf4', text: 'Merkez piyonları güçlenir ama şah açılır (Motor: −0.5).' },
        { move: '16.Nxf4', text: 'At f4’te, fil e3’te kalır (Motor: −0.6).' },
      ],
    },
    '16b': {
      text: '16...Ne8: at e8’e çekilir; c7 üzerinden e6’ya gidebilir ve g7 filinin önünü açar.',
      amac: 'd6’yı korumak (at c7/e8 üzerinden), g7 filinin uzun çaprazını açmak ve atı yeniden yerleştirmek.',
      neden: 'Kamsky aceleci değişimler yerine taşlarını yeniden düzenlemeyi seçti. Motor 16...Ne5 17.Nxe5 dxe5 ile değişimi biraz daha iyi buluyor (−0.5’e karşı −0.2); 16...d5 17.Nd6 ise keskin bir alternatif (−0.3).',
      diger: [
        { move: '16...Ne5', text: '17.Nxe5 dxe5 18.Be3 ile basit oyun (Motor: −0.5).' },
        { move: '16...d5', text: 'Merkezi hemen açmak: 17.Nd6 Bc8 18.exd5 (Motor: −0.3).' },
      ],
    },
    '17w': {
      text: '17.Qd2: vezir d2’de; h6 piyonuna ve Bh6 fikrine bakar.',
      amac: 'Bxh6 tehdidiyle Siyahı zorlamak; kaleleri bağlamak.',
      neden: 'Vezir ve fil birlikte h6’yı hedefler. Motor 17.Nf2 ile atı hemen oyuna sokmayı biraz daha iyi buluyor (−0.1’e karşı −0.2).',
      diger: [
        { move: '17.Nf2', text: 'h3 atını g4’e yönlendirmek (Motor: −0.1).' },
        { move: '17.a3', text: 'Vezir kanadında oynamak (Motor: −0.2).' },
      ],
    },
    '17b': {
      text: '17...Kh7: şah h7’ye geçer ve h6 piyonunu korur.',
      amac: 'Bxh6 tehdidini karşılamak.',
      neden: '17...h5? 18.Bg5 ile filin g5’e yerleşmesine izin verir (Motor: +0.6). 17...g5 ise h3 atını kovalar ama f5 karesini zayıflatır (−0.3). Kamsky en sakin hamleyi seçti.',
      diger: [
        { move: '17...g5', text: '18.Be3 Rb8 ile f5 zayıflığı kabul edilir (Motor: −0.3).' },
        { move: '17...h5?', text: '18.Bg5 Qc7 19.c3 ile fil g5’e yerleşir (Motor: +0.6).' },
      ],
    },
    '18w': {
      text: '18.Nf2: h3 atı f2’ye gelir; g4 karesine yönelir.',
      amac: 'Atı g4’e getirip h6 ve f6 karelerine baskı yapmak.',
      neden: 'h3 atı uzun süredir oyun dışındaydı. Motor 18.Nf2’yi en iyi hamle olarak görüyor (−0.2).',
      diger: [
        { move: '18.a3', text: 'Vezir kanadında oynamak (Motor: −0.3).' },
        { move: '18.Be3', text: 'Fili c5’e yöneltmek (Motor: −0.3).' },
      ],
    },
    '18b': {
      text: '18...Nd4: at merkezdeki güçlü kareye yerleşir.',
      amac: 'd4 karesini kullanmak; c2 ve e2’ye baskı yapmak.',
      neden: 'At d4’te göz alıcıdır ama motor bunu küçük bir hata görüyor: 19.c3 ile at geri gönderilebilir (Motor: +0.3). 18...a5 ya da 18...Rb8 ile vezir kanadı planına devam etmek daha iyi (−0.3/−0.2).',
      diger: [
        { move: '18...a5', text: 'b4’ü desteklemek (Motor: −0.3).' },
        { move: '18...Rb8', text: 'Kale b-hattına (Motor: −0.2).' },
      ],
    },
    '19w': {
      text: '19.Ng4: at g4’ten h6 ve f6 karelerine bakar.',
      amac: 'Bxh6 ve Nxh6 tehditleri kurmak; Siyahı şah kanadında zayıflığa zorlamak.',
      neden: 'Motor 19.c3 ile d4 atını hemen kovalamayı biraz daha iyi buluyor (+0.3’e karşı +0.2), ama Ehlvest saldırı fikrini önde tuttu.',
      diger: [
        { move: '19.c3', text: '19...Ne6 20.Be3 ile at geri gider (Motor: +0.3).' },
        { move: '19.Be3', text: 'd4 atına baskı yapmak (Motor: +0.2).' },
      ],
    },
    '19b': {
      text: '19...h5: g4 atı kovalanır.',
      amac: 'Atı şah kanadından uzaklaştırmak ve h6’daki zayıflığı ortadan kaldırmak.',
      neden: 'Atın h6’ya ve f6’ya bakması tehlikeliydi. 19...Bc8? 20.Nxh6 bir piyon kaybettirir (Motor: +1.0). ...h5 ile g5 karesi zayıflar, ama Siyah onu ...Ne6 ile kapatacak.',
      diger: [
        { move: '19...g5', text: 'Fili kovalamak (Motor: +0.3); f5 karesi zayıflar.' },
        { move: '19...Bc8?', text: '20.Nxh6 ile piyon kaybı (Motor: +1.0).' },
      ],
    },
    '20w': {
      text: '20.Nf2: at f2’ye geri döner.',
      amac: 'Atı koruyup yeniden h3–g5 yoluna sokmak; e4’ü desteklemek.',
      neden: 'At g4’te kalamaz. Motor 20.Nf2’yi en iyi buluyor (+0.3); 20.Nh6? d5 ile at oyun dışı kalır (−0.3).',
      diger: [
        { move: '20.Nge3', text: 'Atı merkeze getirmek (Motor: +0.1).' },
        { move: '20.Nh6', text: 'Atı h6’ya atmak; 20...d5 ile Siyah karşılık verir (Motor: −0.3).' },
      ],
    },
    '20b': {
      text: '20...Ne6: at e6’ya gelir; f4 filine saldırır ve g5 karesini kontrol eder.',
      amac: 'f4 filini kovalamak ve g5 karesindeki zayıflığı kapatmak.',
      neden: 'e6 atı Siyahın savunmasının merkezi oldu: g5’i ve f4’ü kontrol ediyor, d4’e geri dönebiliyor. Motor 20...Ne6’yı en iyi buluyor (+0.15); 20...d5 de oynanabilirdi (+0.4).',
      diger: [
        { move: '20...d5', text: '21.exd5 Bxd5 22.Ne4 ile merkezi açmak (Motor: +0.4).' },
        { move: '20...a5', text: 'Vezir kanadı (Motor: +0.5).' },
      ],
    },
    '21w': {
      text: '21.Be3: fil e3’e çekilir.',
      amac: 'Fili korumak ve c5 piyonuna bakmak.',
      neden: 'Ehlvest fili değişime bırakmak istemedi. Motor 21.Nh3 Nxf4 22.gxf4 ile merkezde piyon kazanmayı biraz daha iyi buluyor (+0.1’e karşı −0.1).',
      diger: [
        { move: '21.Nh3', text: '21...Nxf4 22.gxf4 d5 ile merkez piyonları güçlenir (Motor: +0.1).' },
        { move: '21.a3', text: 'Vezir kanadında oynamak (Motor: +0.1).' },
      ],
    },
    '21b': {
      text: '21...Rb8: kale b8’de b-piyonunun ilerleyişini destekler.',
      amac: 'b4–b3 ilerleyişini hazırlamak ve b-hattını kullanmak.',
      neden: 'Kale b8’de, Beyaz a3 oynarsa b-hattını açmaya hazır. Motor 21...N8c7 ve 21...Rb8’i eşit buluyor (−0.1).',
      diger: [
        { move: '21...N8c7', text: 'd5’i hazırlamak (Motor: −0.1).' },
        { move: '21...Nf6', text: 'e4’e baskı (Motor: −0.1).' },
      ],
    },
    '22w': {
      text: '22.Nh3: at yeniden h3 üzerinden g5’e yönelir.',
      amac: 'Ng5+ ile şahı kovmak ve e6 atına baskı yapmak.',
      neden: 'Ehlvest atı yeniden g5’e götürmek istedi. Motor 22.Rae1 ve 22.a3’ü biraz daha iyi buluyor (0.0’a karşı −0.1).',
      diger: [
        { move: '22.Rae1', text: 'e-hattını desteklemek (Motor: 0.0).' },
        { move: '22.a3', text: 'b4’ü sorgulamak (Motor: 0.0).' },
      ],
    },
    '22b': {
      text: '22...N8c7: e8 atı c7’ye gelir; d5 ilerleyişini destekleyecek.',
      amac: '...d5 için ikinci bir destek kurmak.',
      neden: 'Kamsky hemen 22...d5 oynamak yerine önce atı c7’ye getirdi. Motor 22...d5’i biraz daha iyi buluyor (−0.1’e karşı 0.0).',
      diger: [
        { move: '22...d5', text: '23.exd5 Bxd5 24.Ng5+ ile merkezi hemen açmak (Motor: −0.1).' },
        { move: '22...a5', text: 'Vezir kanadında devam (Motor: 0.0).' },
      ],
    },
    '23w': {
      text: '23.Ng5+: şah çekilir; at g5’te e6 atına baskı yapar.',
      amac: 'Şahı kovmak ve e6 atını değişime zorlamak.',
      neden: 'At g5’te güçlü bir kare bulur. 23.a3? d5 24.exd5 Nxd5 ile Siyah iyi (Motor: −0.4).',
      diger: [
        { move: '23.Nf4', text: '23...a5 24.Rf2 Nxf4 25.Bxf4 ile değişim (Motor: +0.1).' },
        { move: '23.a3', text: '23...d5 ile Siyah merkezi açar (Motor: −0.4).' },
      ],
    },
    '23b': {
      text: '23...Kg8: şah g8’e döner.',
      amac: 'Şahı çekmek ve f7’yi korumak.',
      neden: '23...Kh8?? 24.Nxf7+ Rxf7 25.Rxf7 kale kaybettirir (Motor: +3.5). 23...Nxg5 24.Bxg5 Qd7 de oynanabilirdi (0.0), ama Kamsky e6 atını tuttu.',
      diger: [
        { move: '23...Nxg5', text: '24.Bxg5 Qd7 ile değişim (Motor: 0.0).' },
        { move: '23...Kh8??', text: '24.Nxf7+ ile kale kaybı (Motor: +3.5).' },
      ],
    },
    '24w': {
      text: '24.a3: b4 piyonu sorgulanır.',
      amac: 'Vezir kanadını açmak ve a1 kalesini oyuna sokmak.',
      neden: 'Beyaz vezir kanadında da oynamak istiyor. Motor 24.a3 ve 24.Rf2’yi eşit buluyor (0.0). Ama Kamsky’nin cevabı (...b3) bu hamleyi pek işe yaramaz hâle getirdi.',
      diger: [
        { move: '24.Rf2', text: '24...d5 25.Na5 ile bekleme (Motor: 0.0).' },
        { move: '24.Rad1', text: 'Merkezi desteklemek (Motor: −0.1).' },
      ],
    },
    '24b': {
      text: '24...b3!: piyon ilerler ve c2’yi sabitler; Beyazın vezir kanadı sıkışır.',
      amac: 'c2 piyonunu sabitlemek ve d3’ü geri bir piyon hâline getirmek.',
      neden: '24...bxa3 25.Rxa3 sonrası a1 kalesi oyuna girer (Motor: +0.3). 24...b3 Beyaza 25.c3 oynamayı dayatır; motor 24...b3’ü en iyi buluyor (+0.1).',
      diger: [
        { move: '24...bxa3', text: '25.Rxa3 d5 26.exd5 Bxd5 ile a-kalesi oyunda (Motor: +0.3).' },
        { move: '24...a5', text: 'b4’ü korumak (Motor: +0.2).' },
      ],
    },
    '25w': {
      text: '25.c3: c-piyonu ilerler; d3 piyonu artık geride kalmış bir piyon.',
      amac: 'b3 piyonunu kilitlemek ve d4’ü kontrol etmek.',
      neden: '25.cxb3? d5 ile Siyah merkezi açar ve d3 piyonu çok zayıflar (Motor: −0.4). 25.Nxe6 Nxe6 de oynanabilirdi (−0.1).',
      diger: [
        { move: '25.cxb3?', text: '25...d5 26.Na5 Ba8 ile Siyah iyi (Motor: −0.4).' },
        { move: '25.Nxe6', text: '25...Nxe6 26.c3 Kh7 ile değişim (Motor: −0.1).' },
      ],
    },
    '25b': {
      text: '25...d5!: Siyah merkezi açar; taşları bu kırılmaya hazır.',
      amac: 'Merkezi açıp b7 filini d5’e getirmek ve d3’ü zayıflatmak.',
      neden: 'c7 atı ve b7 fili d5’i destekliyor, e6 atı Ng5’i karşılıyor. Motor 25...d5’i en iyi buluyor (yaklaşık 0.0); 25...Ba8 ve 25...f6 Beyaza zaman verir (+0.6/+0.7).',
      diger: [
        { move: '25...Ba8', text: '26.Rad1 Qd7 ile bekleme (Motor: +0.75).' },
        { move: '25...f6', text: '26.Nf3 Kh7 ile at kovalanır (Motor: +0.6).' },
      ],
    },
    '26w': {
      text: '26.exd5: Beyaz alır.',
      amac: 'Merkezi açarak e-hattını kullanmak.',
      neden: 'Beyazın piyonu almaktan başka iyi seçeneği yok: 26.Nxe6 Nxe6 27.exd5 Bxd5 sonrası Siyahın taşları daha aktif (Motor: −0.3).',
      diger: [
        { move: '26.Na5', text: '26...d4 27.cxd4 Nxd4 ile merkez Siyahın (Motor: +0.1).' },
        { move: '26.Nxe6', text: '26...Nxe6 27.exd5 Bxd5 ile Siyah aktif (Motor: −0.3).' },
      ],
    },
    '26b': {
      text: '26...Bxd5!: fil uzun çaprazda d5’e gelir ve g2 filiyle karşılaşır.',
      amac: 'Fili merkezin en güçlü karesine koymak.',
      neden: '26...Nxd5? 27.Nxe6 fxe6 28.Rxf8+ Bxf8 29.Bg5 sonrası Siyahın e6 piyonu ve açık şahı zayıf kalır (Motor: +1.9). 26...Nxg5? 27.Bxg5 Qd7 28.d6 daha da kötü (+2.6).',
      diger: [
        { move: '26...Nxd5?', text: '27.Nxe6 fxe6 28.Rxf8+ Bxf8 29.Bg5 ile Siyahın yapısı dağılır (Motor: +1.9).' },
        { move: '26...Nxg5?', text: '27.Bxg5 Qd7 28.d6 ile Beyaz iyi (Motor: +2.6).' },
      ],
    },
    '27w': {
      text: '27.Ne4: at e4’e gelir ve c5 piyonuna bakar.',
      amac: 'Atı merkeze getirmek, d6 ve f6 karelerine bakmak.',
      neden: 'Motor 27.Be4 Bxe4 28.dxe4 ile basit bir değişimi biraz daha iyi buluyor (+0.3’e karşı −0.1); Ne4 ise Siyaha ...f5 ile tempoyla ilerleme fırsatı verir.',
      diger: [
        { move: '27.Be4', text: '27...Bxe4 28.dxe4 Qe7 ile değişim (Motor: +0.3).' },
        { move: '27.Nf3', text: 'At geri döner (Motor: +0.3).' },
      ],
    },
    '27b': {
      text: '27...f5!: at kovalanır ve e4 karesi kontrol altına alınır.',
      amac: 'e4 atını kovalamak ve f-hattını kale için açmak.',
      neden: 'Motor bu hamleyi açık farkla en iyi buluyor (−0.1). 27...Na8 ya da 27...Bxc4 yaklaşık bir piyon daha kötü (+0.7/+0.9).',
      diger: [
        { move: '27...Na8', text: '28.Qf2 Bxe4 29.Bxe4 ile Beyaz iyi (Motor: +0.7).' },
        { move: '27...Bxc4', text: '28.dxc4 Qxd2 29.Nxd2 ile fil verilir (Motor: +0.9).' },
      ],
    },
    '28w': {
      text: '28.Ned6: at d6’ya atlar; c4 atı onu korur.',
      amac: 'Atı ileri karakola koymak ve f7 ile b7’ye bakmak.',
      neden: 'At d6’da göz alıcı ama yalnızca c4 atıyla korunuyor. Motor 28.Ng5 Bxg2 29.Kxg2 Nxg5 ile değişimi öneriyor (0.0); 28.Nf2 daha pasif (−0.5).',
      diger: [
        { move: '28.Ng5', text: '28...Bxg2 29.Kxg2 Nxg5 30.Bxg5 Qd5+ ile basit oyun (Motor: 0.0).' },
        { move: '28.Nf2', text: 'Geri çekilmek (Motor: −0.5).' },
      ],
    },
    '28b': {
      text: '28...Rf6: kale d6 atına bakar; arada şimdilik kendi e6 atı var.',
      amac: 'e6 atının çekilmesiyle açılacak saldırıyı hazırlamak.',
      neden: 'Kale altıncı yatayda d6’nın hizasına girer. Motor 28...Rf6 ve 28...Qd7’yi eşit buluyor (−0.5).',
      diger: [
        { move: '28...Qd7', text: '29.Bh6 Bxg2 30.Bxg7 Kxg7 ile değişim (Motor: −0.5).' },
        { move: '28...Kh7', text: 'Şahı çekmek (Motor: −0.4).' },
      ],
    },
    '29w': {
      text: '29.Bh6?: Beyaz filleri değişmek ister, ama d6 atının savunmasını zayıflatır.',
      amac: 'Siyahın kara kare filini değişip şahını zayıflatmak.',
      neden: 'Değişim, Siyahın e6 atına g7’ye tempoyla gitme fırsatı verir ve f6 kalesinin d6’ya giden yolu açılır. Motor 29.Qf2 Bxg2 30.Qxg2 Nb5’i öneriyor (−0.5); maç hamlesinden sonra −1.5.',
      diger: [
        { move: '29.Qf2', text: '29...Bxg2 30.Qxg2 Nb5 31.Nxb5 axb5 ile Beyaz savunur (Motor: −0.5).' },
        { move: '29.Bxd5?', text: '29...Nxd5 30.Rae1 Bf8 ile d6 atı düşer (Motor: −1.9).' },
        { move: '29.Rad1', text: '29...Bf8 30.d4 Bxg2 ile d6 atı yine zayıf (Motor: −1.5).' },
      ],
    },
    '29b': {
      text: '29...Bxg2: Siyah g2 filini alır.',
      amac: 'Beyazın şahını açmak ve fili değişmek.',
      neden: '29...Bxh6 30.Qxh6 Bxg2 31.Kxg2 Ng7 de aynı derecede güçlü (Motor: −2.2). 29...Bf8? 30.Bxf8 Nxf8 ise fırsatı kaçırır (−0.6).',
      diger: [
        { move: '29...Bxh6', text: '30.Qxh6 Bxg2 31.Kxg2 Ng7 ile aynı fikir (Motor: −2.2).' },
        { move: '29...Bf8?', text: '30.Bxf8 Nxf8 ile fırsat kaçar (Motor: −0.6).' },
      ],
    },
    '30w': {
      text: '30.Bxg7: Beyaz g7 filini alır.',
      amac: 'Filleri değişmek ve Siyahın şahını açmak.',
      neden: '30.Kxg2 Bxh6 31.Qxh6 Ng7 de aynı fikri getirir (Motor: −2.6). 30.Qxg2? Bxh6 ise fili düpedüz kaybettirir (−4.0). Yani 30.Bxg7 ayrı bir hata değil; konum zaten kaybedilmişti.',
      diger: [
        { move: '30.Kxg2', text: '30...Bxh6 31.Qxh6 Ng7 ile d6 atı düşer (Motor: −2.6).' },
        { move: '30.Qxg2?', text: '30...Bxh6 ile fil kaybı (Motor: −4.0).' },
      ],
    },
    '30b': {
      text: '30...Nxg7!: at e6’dan çekilince f6 kalesi d6 atına saldırır.',
      amac: 'd6 atını kazanmak ve g2 filini korumak.',
      neden: 'd6 atı iki kez saldırı altında ve Beyaz g2’deki fili de geri almak zorunda. 31.Qxg2 Rxd6 32.Nxd6 Qxd6 ile Siyah bir kale karşılığında iki at kazanır (Motor: −2.9). 30...Kxg7? 31.Qxg2 ile denge (0.0).',
      diger: [
        { move: '30...Kxg7?', text: '31.Qxg2 Nb5 ile denge (Motor: 0.0).' },
        { move: '30...Bxf1?', text: '31.Bxf6 Qxf6 32.Rxf1 ile Beyaz iyi (Motor: +0.5).' },
      ],
    },
  },
  exercises: [
    { id: 'eka-1', kind: 'tekrar', plan: true, title: '...d5 kırılması',
      source: 'Ehlvest – Kamsky, Saint Louis 2011 (25. hamle)',
      fen: '1r1q1rk1/1bn2pb1/p2pn1p1/2p3Np/2N1P3/PpPPB1P1/1P1Q2BP/R4RK1 b - - 0 25',
      prompt: 'Siyahın b-piyonu b3’e kadar ilerledi, atlar c7 ve e6’da, fil b7’de. Beyazın e4 piyonu merkezi tutuyor. Siyah merkezde ne yapmalı?',
      hint: 'c7 atı ve b7 fili hangi kareyi destekliyor?',
      line: ['d5', 'exd5', 'Bxd5'],
      explanation: '**25...d5!** Merkez açılır; **26.exd5 Bxd5!** ile fil d5’te güçlü bir yere gelir. 25...d5 bir plan hamlesi: motor onu en iyi buluyor ama fark küçük (d5 +0.4, 25...Ba8 +0.8). 26. hamlede ise fark büyük: Bxd5 +0.3, 26...Nxd5? 27.Nxe6 fxe6 28.Bxc5 ile +2.0.',
      link: 'Bu yapıda Siyahın ana kırılması ...d5’tir; ardından b7 fili uzun çaprazda merkeze gelir.' },
    { id: 'eka-2', kind: 'tekrar', plan: false, title: 'Altıncı yatayı açmak',
      source: 'Ehlvest – Kamsky, Saint Louis 2011 (30. hamle)',
      fen: '1r1q2k1/2n3B1/p2Nnrp1/2p2p1p/2N5/PpPP2P1/1P1Q2bP/R4RK1 b - - 0 30',
      prompt: 'Beyaz g7 filini aldı. Siyahın fili g2’de, kalesi f6’da. Beyazın atı d6’da. g7’deki fili nasıl almalı?',
      hint: 'f6 kalesinin d6’ya giden yolunu ne kapatıyor?',
      line: ['Nxg7'],
      explanation: '**30...Nxg7!** At e6’dan çekilir ve f6 kalesi d6 atına saldırır. d6 atı iki kez (kale ve vezir) saldırı altında, yalnızca c4 atıyla korunuyor; Beyaz g2 filini de geri almak zorunda. Motor: Nxg7 −2.8, 30...Kxg7 −0.2.',
      link: 'Kamsky ...Rf6 ile hazırladığı fikri, kendi atını tempoyla çekerek uyguladı.' },
    { id: 'eka-3', kind: 'transfer', plan: false, title: 'Merkezi açmak: ...exd5',
      source: 'Schneider – Nakamura, New York Masters 2004 (19. hamle)',
      fen: '2r2rk1/1bqn1ppn/p3p2p/2bP4/1pP2PP1/1P3N1N/P1P1Q1BP/R1B2R1K b - - 2 19',
      prompt: 'Aynı açılış yapısı: Siyahın b-piyonu b4’te, fili b7’de. Beyaz f4 ve g4 ile şah kanadında ilerledi ve d5’e bir piyon itti. Hamle Siyahta.',
      hint: 'Beyazın piyonları şah kanadında ilerledi; merkezi açmak kimin işine yarar?',
      line: ['exd5'],
      explanation: '**19...exd5!** Merkez açılır: e-hattı ve b7 filinin çaprazı Beyazın h1’deki şahına doğru açılır, c5 fili de g1’e bakar. Beyazın ilerlemiş f4–g4 piyonları şahını açıkta bırakmıştır. Motor: exd5 −1.7, sonraki en iyi 19...Rfe8 +0.4 (20.d6 ile Beyaz iyi).',
      link: 'Kamsky de Beyazın şah kanadı hamlesinden sonra merkezi ...d5 ile açtı; Nakamura aynı fikri d5’teki piyonu alarak uyguladı.' },
    { id: 'eka-4', kind: 'transfer', plan: false, title: 'Kale altıncı yatayda',
      source: 'Galego – Gulko, Olimpiyat, Bled 2002 (24. hamle)',
      fen: '4r1k1/6pp/p3pr2/1pp1qPQ1/7n/P1NPP2P/1PP2R2/5RK1 b - - 2 24',
      prompt: 'Beyaz f5 piyonuyla saldırıyor ve veziri g5’te. Siyahın kalesi f6’da, veziri e5’te, atı h4’te. Hamle Siyahta.',
      hint: 'Beyaz vezirinin kaçabileceği kareleri sayın.',
      line: ['Rg6'],
      explanation: '**24...Rg6!** Kale altıncı yatayda vezire saldırır. 25.fxg6 Qxg5+ ile Siyah vezir kazanır; oyundaki 25.Qg4 Rxg4 26.hxg4 Qg3+ sonrası da Siyahın saldırısı kesindir. Motor: Rg6 −5.0, sonraki en iyi 24...Nf3+ −0.9.',
      link: 'Kamsky f6 kalesini altıncı yatayda kullanarak d6 atını kazandı; Gulko da f6 kalesini altıncı yataydan g6’ya getirip Beyazın f5 saldırısını cezalandırdı.' },
  ],
};
