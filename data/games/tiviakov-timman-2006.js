// Tiviakov – Timman, Hollanda Şampiyonası, Hilversum 2006 (10. tur). Kaynak: PgnMentor (Tiviakov.pgn).
export default {
  id: 'tiviakov-timman-2006',
  theme: 'Merkezde kalan şaha karşı d5–f6 atı',
  white: 'Sergei Tiviakov', black: 'Jan Timman',
  whiteShort: 'Tiviakov', blackShort: 'Timman',
  event: 'Hollanda Şampiyonası', site: 'Hilversum', year: 2006, eco: 'B22',
  variation: 'Sicilya Alapin, 2...Nf6 3.e5 Nd5 4.Nf3 Nc6 5.Bc4 Nb6 6.Bb3 c4', result: '1-0',
  pgn: `1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. Bc4 Nb6 6. Bb3 c4 7. Bc2 Qc7 8. Qe2 g5 9. h3 Bg7 10. O-O Nxe5 11. Nxg5 d5 12. a4 h6 13. Nf3 Nbd7 14. Re1 Bf6 15. d4 cxd3 16. Bxd3 Nxd3 17. Qxd3 Nc5 18. Qxd5 Be6 19. Qh5 Rd8 20. Nd4 Bxd4 21. cxd4 Nb3 22. Nc3 Nxa1 23. Rxe6 Nb3 24. Be3 Nxd4 25. Re4 Nc6 26. b4 Rd3 27. Nd5 Qd6 28. Nf4 Rxe3 29. fxe3 Nd8 30. Nd5 e6 31. Nf6+ Kf8 32. Rd4 Qc7 33. Rd7 Qc1+ 34. Kh2 Kg7 35. Qe5 1-0`,


  summary: 'Hollanda Şampiyonası’nda 11 maçta 9 puanla birinci olan Alapin uzmanı Tiviakov’a karşı Timman, 2...Nf6 3.e5 Nd5 hattında 6...c4 ve 8...g5!? ile çok keskin bir yol seçti: amacı e5 piyonunu ...g4 tehdidiyle düşürmekti. Tiviakov piyonu gelişim karşılığında bıraktı, 11.Nxg5 ile hemen geri aldı ve oyun dengeli bir karmaşaya döndü. 15.d4 erken bir kırılmaydı (Motor: −0.6) ve Siyah biraz üstün oldu; ama Timman şahını merkezde bıraktı ve 20...Bxd4? ile kara kareli filini verdi (Motor: −0.6’dan +1.0’a). Ardından iki taraf da hata yaptı: Timman 22...Nxa1 ile kaleyi aldı ama atı köşeye hapsetti, Tiviakov 24.Be3? ile kazanan 24.d5’i kaçırdı ve oyun yeniden eşitlendi. Belirleyici an 26...Rd3? ve özellikle 29...Nd8? oldu: Beyaz atını **d5 üzerinden f6’ya** soktu, kalesini **d4–d7** yoluyla yedinci yataya çıkardı ve 35.Qe5! ile vezirini atın arkasına, a1–h8 çaprazına yerleştirdi. Her at hamlesi açarak şah olacaktı; Timman terk etti.',
  intro: 'Alapin’de 2...Nf6 3.e5 Nd5 hattı, Alekhine Savunması’na benzeyen bir yapıdır: Beyaz e5 piyonuyla alan kazanır, Siyah taşlarıyla bu piyona saldırır. Beyazın c3 piyonu b4 karesini aldığı için d5 atı Alekhine’deki kadar rahat değildir, ama Beyazın d4 planı da henüz yapılmamıştır. 4.Nf3 Nc6 5.Bc4 Nb6 6.Bb3 sonrası Siyah 6...c4 ile fili bir kez daha kovar; bu hamle b3–c2 hattını değiştirir, d3 karesini zayıflatır ve Beyazın d2 piyonunu sıkıştırır: d2–d4 artık geçerken alma (...cxd3) ile karşılanabilir. Timman bu yapıda en sivri yolu seçti: 7...Qc7, 8...g5 ve 9...Bg7 ile e5’e üç taşla saldırdı. Bunun bedeli, şahın uzun süre merkezde kalması ve g-hattının da açılması oldu. Turnuvayı 3/11 ile sondan ikinci sırayı paylaşarak bitirecek olan Timman için bu, kötü geçen bir turnuvanın tipik bir oyunuydu; Tiviakov için ise 8 galibiyetle kazandığı şampiyonluğun bir halkası.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'e5 piyonu düşerse onu geri almaya değil, gelişim üstünlüğüne yatırmak: hızlı rok, Re1, Nxg5 ile g-piyonunu toplamak ve e-hattını açmak.',
      'd2 piyonunu doğru anda d4’e sürüp c4 piyonunu sorgulamak; oyunda 15.d4 biraz erken geldi, 15.Na3 veya 15.Nxe5 Nxe5 16.d4 daha iyiydi.',
      'Siyahın kara kareli fili değişilince f6, e7 ve d6 karelerindeki boşluğu kullanmak; bunun için d4 piyonunu tutmak ya da 24.d5 gibi bir hamleyle merkezi açmak.',
      'Atı c3–d5–f4–d5–f6 yolculuğuyla şahın yanına getirmek: f6 atı g8, e8 ve d7 karelerini tutup şahı merkezde kilitler.',
      'Kaleyi e-hattından d-hattına (Re4–Rd4–Rd7) geçirip yedinci yataya sokmak; f7 ve d8 aynı anda hedef olur.',
      'Veziri e5’e getirip f6 atıyla aynı çapraza dizmek; atın her hamlesi açarak şah olur ve mat ağı tamamlanır.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...c4 ile Beyazın filini c2’ye kovup d3 karesini ve d2 piyonunu hedef almak.',
      '...Qc7, ...g5–g4 ve ...Bg7 ile e5 piyonunu üç taşla kuşatıp kazanmak; bu Alekhine yapısındaki tipik “öndeki piyonu yık” fikridir.',
      'Piyonu aldıktan sonra merkezde ...d5 ile güçlü bir yapı kurmak ve c8 filini geliştirmek.',
      'Şahı güvenliğe almak: 14...O-O veya 19...O-O-O motorun da kabul ettiği seçeneklerdi; Timman şahını hiç rok yaptırmadı.',
      'Kara kareli fili koruyup şahın çevresindeki f6 ve e7 karelerini tutmak; 20...Bxd4? bu planı bozdu.',
      'Taktik fırsatları kullanmak (...Nb3 çatalı), ama kazanılan materyali oyundan düşürmemek: 22...Nxa1 atı köşeye hapsetti.',
    ] },
  },
  critical: [
    { move: '8b', title: '...g5!? e5 piyonuna karşı kanat hamlesi', text: 'Timman 8...g5 ile ...g4 tehdidi yaratır: f3 atı kovulursa e5 piyonu düşer. Motor hamleyi en iyi seçenek sayıyor (Motor: +0.3), ama bedeli büyük: g-hattı ve h6–f6 kareleri zayıflar, şah kısa roka gitmeyi zorlaştırır. Bütün oyunun karakteri bu hamleyle belirlendi: Siyah piyon kazanacak, Beyaz gelişim ve açık hatlar alacaktı.' },
    { move: '15w', title: '15.d4: erken kırılma', text: 'Beyaz c4 piyonunu hemen sorgular, ama 15...cxd3! 16.Bxd3 Nxd3 17.Qxd3 sonrası Siyah c2 filini değişir ve 17...Nc5 ile tempo kazanır (Motor: −0.6). Motor önce 15.Na3 a6 16.Nxe5 Nxe5 17.d4’ü (Motor: +0.3) ya da 15.Nxe5 Nxe5 16.d4’ü (Motor: +0.2) istiyor: önce güçlü e5 atını değişmek, sonra d4’ü sürmek.' },
    { move: '20b', title: '20...Bxd4? kara kareli filin değişimi', text: 'Timman d4 atını alır ve kara kareli filini verir. Motor 20...Bd5!’i öneriyor (Motor: −0.6): fil merkezde kalır, şah kanadında ...Rg8 gelir. Değişimden sonra 21.cxd4 Beyaza merkezde piyon, c5 atına tempo ve en önemlisi Siyah şahının çevresinde sahipsiz kara kareler verir (Motor: +1.0).' },
    { move: '22b', title: '22...Nxa1: kalite ama at köşede', text: 'At a1 kalesini alır; ama hemen 23.Rxe6 ile e6 fili düşer ve a1 atı ancak b3 üzerinden zor kurtulur. Motor 22...Nxd4’ü öneriyordu (Motor: +1.1); oyun hamlesinden sonra Beyaz +2.1 üstün. Siyah materyal kazandı ama inisiyatifi tamamen verdi.' },
    { move: '24w', title: '24.Be3? kaçan 24.d5', text: 'Tiviakov burada kazancı kaçırdı. 24.d5! a6 25.Be3 ile piyon d6’ya doğru yürür ve e7 ile şahın çevresi çöker (Motor: +2.5). 24.Be3 sonrası 24...Nxd4 ile Siyah d4 piyonunu alır ve oyun eşitlenir (Motor: +0.2).' },
    { move: '26b', title: '26...Rd3? kale çok ileri gidiyor', text: 'Kale e3 filine ve c3 atına saldırır, ama 27.Nd5! vezire tempo kazanır ve 28.Nf4 kaleyi kovar; Siyah 28...Rxe3 ile kaliteyi geri vermek zorunda kalır. Motor 26...Rg8!’i öneriyordu (Motor: −0.2): kale g-hattından g5’e gelerek hem savunur hem saldırır.' },
    { move: '29b', title: '29...Nd8? belirleyici hata', text: 'Materyal eşit, şah merkezde ama oyun dengede (Motor: +0.2). 29...Rg8 ile kale oyuna girmeliydi. 29...Nd8 ise atı pasif bir kareye çeker ve e7’yi korumaya kilitler; 30.Nd5 ile Beyazın atı f6 ve e7’ye bakar, ayrıca 30.Qb5+ Qd7 31.Rxe7+! Kxe7 32.Qe5+ gibi vuruşlar doğar (Motor: +3.0).' },
    { move: '35w', title: '35.Qe5! açarak şah ağı', text: 'Vezir e5’e gelir; f6 atının arkasında, g7 şahıyla aynı çaprazdadır. Artık atın her hamlesi açarak şah olur. 35...Qxe3 36.Nh5+ Kg6 37.Qf6+ Kxh5 38.g4# ile mat; 35...Qc7 36.Rxc7 ise vezir kaybettirir (Motor: +8.4, derin aramada mat). Timman terk etti.' },
  ],
  lessons: [
    '2...Nf6 Alapin’inde 6...c4 b3 filini kovar ve d2–d4 kırılmasını geçerken almaya açık hale getirir; Beyaz d4’ü ancak hazırlıkla (önce Na3 ya da e5 atını değişerek) sürmeli.',
    'Öndeki merkez piyonunu kazanmak için ...g5 gibi kanat hamleleri oynayan taraf, piyonu aldıktan sonra şahını güvenliğe almayı unutmamalı; Timman 14...O-O ve 19...O-O-O fırsatlarını kullanmadı.',
    'Şahın çevresindeki tek kara kareli savunucuyu bir at için vermek (20...Bxd4?) f6, e7 ve d6 karelerini sahipsiz bırakır; bu kareler daha sonra Beyazın atına ev sahipliği yaptı.',
    'Kalite kazanmak her zaman iyi değildir: köşede hapsolan bir at (22...Nxa1) oyunun en kritik anında yoktur ve rakip bu sırada inisiyatifi alır.',
    'Merkezde kalan şaha karşı en güçlü ikili, f6’daki at ile yedinci yataydaki kaledir; at kaçış karelerini keser, kale hem f7’yi hem arka yatayı baskılar.',
    'Pasif savunma hamleleri (29...Nd8) kaybettirir; savunmada da taşlar aktif olmalı (29...Rg8).',
    'Vezir, atın arkasında rakip şahla aynı çapraza gelince açarak şah silahı doğar; bu durumda atın her hamlesi bedava bir tempo ve genellikle materyal kazanır.',
  ],
  qa: [
    { q: 'Siyah neden 8...g5 gibi bir kanat hamlesi oynadı?', a: 'Siyahın bütün planı e5 piyonunu kazanmaktı: c7 veziri ve c6 atı zaten bu piyona bakıyordu. 8...g5 ile ...g4 tehdidi geldi; f3 atı kovulunca e5 savunmasız kalır. 9.h3 ile Beyaz bunu durdurdu, ama 9...Bg7 üçüncü saldırganı getirdi ve Beyaz 10.O-O ile piyonu bırakmayı seçti. Motor 8...g5’i en iyi hamle sayıyor (Motor: +0.3), ama bu hamle Siyahın kısa rok yapmasını da riskli hale getirdi.' },
    { q: 'Beyaz e5 piyonunu neden savunmadı?', a: 'Savunmak için d2–d4 gerekirdi, ama c4 piyonu yüzünden d4 her zaman ...cxd3 ile karşılanabilir. Bu yüzden Tiviakov 10.O-O Nxe5 11.Nxg5 ile piyonu hemen geri aldı: g5 piyonu düştü, materyal eşitlendi ve Beyaz gelişimde öne geçti. Motor bu dizide oyunu eşit görüyor (Motor: +0.2).' },
    { q: '15.d4 neden hata sayılıyor?', a: '15.d4 cxd3! 16.Bxd3 Nxd3 17.Qxd3 Nc5 dizisinde Siyah, Beyazın güçlü c2 filini değişir ve atını tempo ile c5’e getirir; d2 piyonunun sorunu çözülür ama Beyaz değerli bir taşını kaybeder (Motor: −0.6). Önce 15.Na3 a6 16.Nxe5 Nxe5 17.d4 ya da 15.Nxe5 Nxe5 16.d4 ile güçlü e5 atını ortadan kaldırmak gerekiyordu (Motor: +0.3 / +0.2).' },
    { q: 'Siyah neden 20...Bxd4 ile kara kareli filini verdi ve bu neden kötüydü?', a: 'Timman muhtemelen ...Nb3 çatalını hazırlamak istedi: 21.cxd4 Nb3 ile a1 kalesi ve d4 piyonu hedef oldu. Ama fil, Siyah şahının çevresindeki f6 ve e7 karelerinin tek bekçisiydi. 20...Bd5! (Motor: −0.6) ile fil merkezde kalmalıydı; oyun hamlesinden sonra Beyaz +1.0 üstün oldu ve oyunun sonundaki Nf6+ fikri tam da bu boşluktan doğdu.' },
    { q: 'Tiviakov nerede kazancı kaçırdı?', a: '24. hamlede. 24.d5! a6 25.Be3 ile d-piyonu ilerler ve Siyahın merkezde kalan şahı açılırdı (Motor: +2.5). Tiviakov 24.Be3 oynadı ve 24...Nxd4 ile Siyah piyonu aldı; durum eşitlendi (Motor: +0.2). Kazancı ikinci kez kurmak için Timman’ın 26...Rd3? ve 29...Nd8? hatalarını beklemesi gerekti.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'Birçok yerde: 19...O-O-O ile şahı güvenliğe alarak (Motor: −0.7), 20...Bd5 ile fili koruyarak (Motor: −0.6), 22...Nxd4 ile atı köşeye göndermeyerek (Motor: +1.1), 26...Rg8 ile kaleyi aktifleştirerek (Motor: −0.2) ve son olarak 29...Rg8 ile (Motor: +0.2). 29...Nd8’den sonra artık savunma yoktu (Motor: +3.0).' },
    { q: 'f6 atı neden bu kadar güçlüydü?', a: 'Siyahın kara kareli fili yoktu ve f6 karesini hiçbir piyon kovamıyordu (g-piyonu yoktu, e-piyonu da e6’ya geçmişti). f6’daki at e8, g8, d7 ve h7 karelerini tutar; böylece şah f8–g7 arasında sıkıştı. Kale d7’ye girince f7 ve d8 aynı anda baskı altındaydı; vezir e5’e gelince de at bir “açarak şah” topuna dönüştü.' },
    { q: '35.Qe5’ten sonra Siyah neden hemen terk etti?', a: 'Çünkü atın her hamlesi g7’deki şaha açarak şah oluyor. 35...Qxe3 36.Nh5+ Kg6 37.Qf6+ Kxh5 38.g4# mattır; 35...Kg6 36.Ng4 ile vezir f6’ya girer; 35...Qc7 36.Rxc7 vezir kaybettirir. Motor +8.4 veriyor ve daha derinde mat buluyor.' },
  ],
  sources: [
    { title: 'ChessBase: Sergey Tiviakov wins the Dutch Championship (2006)', url: 'https://en.chessbase.com/post/sergey-tiviakov-wins-the-dutch-championship' },
    { title: 'ChessBase: Tiviakov leads in the Dutch Championship (2006)', url: 'https://en.chessbase.com/post/tiviakov-leads-in-the-dutch-championship' },
    { title: 'Chessgames.com: Dutch Championship 2006 – turnuva sayfası ve sıralama', url: 'https://chessgames.com/perl/chess.pl?tid=52532' },
    { title: 'Wikipedia: Sicilian Defence, Alapin Variation', url: 'https://en.wikipedia.org/wiki/Sicilian_Defence,_Alapin_Variation' },
    { title: 'New in Chess kitap örneği (PDF): 6...d5 hattı, Sveşnikov–Haugli, Riga 2004', url: 'https://www.newinchess.com/media/wysiwyg/product_pdf/7851.pdf' },
    { title: 'Wikipedia: Sergei Tiviakov', url: 'https://en.wikipedia.org/wiki/Sergei_Tiviakov' },
    { title: 'Chess.com (GM Alexander Colovic): Tiviakov’s Alapin Sicilian – A Practical Choice for White', url: 'https://chess.com/blog/gmalexcolovic/tiviakovs-alapin-sicilian-a-practical-choice-for-white' },
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkezi alır, f1 filine ve vezire yol açar.',
      amac: 'Merkezde e4–d4 ikilisini kurmak ve hızlı gelişmek.',
      neden: 'Tiviakov hayatı boyunca 1.e4 ile oynadı ve Sicilya’ya karşı ana silahı 2.c3 oldu; açık Sicilya teorisine girmeden kendi bildiği yapılara yönelmek istiyor.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları daha kapalı oyun verir (Motor: +0.3). Tiviakov’un repertuvarı e4 üzerine kuruludur.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2), ama Timman’ı kendi Alapin bilgisine çekmek için e4 gerekiyordu.' },
      ],
    },
    '1b': {
      text: '1...c5 ile Sicilya Savunması: Siyah d4 karesine kanattan bakar.',
      amac: 'Simetrik olmayan, iki taraflı şans veren bir oyun kurmak.',
      neden: 'Timman geniş bir repertuvara sahip; 1...c5 en çok kazanma şansı veren cevaplardan biridir. Karşılığında Alapin gibi sağlam anti-Sicilya hatlarını da kabul etmesi gerekir.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar (Motor: +0.2); daha simetrik ve daha az dengesiz.' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.4); merkezde kapalı bir yapı.' },
      ],
    },
    '2w': {
      text: '2.c3 Alapin varyantı: c3 piyonu d4 hamlesini hazırlar ki ...cxd4 sonrası c-piyonuyla geri alınabilsin.',
      amac: 'cxd4 değişiminden sonra e4–d4 tam merkezi kurmak ve açık Sicilya’nın keskin teorisinden kaçınmak.',
      neden: 'Wikipedia’nın da belirttiği gibi Alapin bugün en sağlam anti-Sicilya hatlarından biri sayılır ve Sveşnikov ile Tiviakov bu açılışın en tanınmış savunucularıdır. GM Colovic’in Tiviakov’un Alapin oyunlarını anlattığı yazıda vurgulandığı gibi, motor eşit dese bile pratikte Beyazın oynaması daha kolay pozisyonlar çıkar.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya hazırlık (Motor: +0.4); 3.d4 sonrası Necdorf, Sveşnikov gibi derin teori başlar.' },
        { move: '2.Nc3', text: 'Kapalı Sicilya ya da Grand Prix saldırısı (Motor: +0.4).' },
      ],
    },
    '2b': {
      text: '2...Nf6 ile at e4’e saldırır ve Beyazı hemen karar vermeye zorlar.',
      amac: 'e4 piyonunu e5’e çekip Alekhine Savunması’na benzer bir yapıda bu piyonu hedef almak.',
      neden: 'Bugün 2...Nf6 3.e5 Nd5, Alapin’in ana hattı sayılıyor. 2...d5’e göre vezir erken oyuna girmez; Siyah taşlarıyla e5’e baskı kurmayı amaçlar.',
      diger: [
        { move: '2...d5', text: '3.exd5 Qxd5 ile vezir merkezde aktif olur (Motor: +0.2); klasik dengeleme yöntemi.' },
        { move: '2...Nc6', text: 'Esnek bekleme hamlesi (Motor: +0.2); 3.d4 d5 ile benzer yapılara geçilebilir.' },
        { move: '2...e6', text: 'Fransız yapısına geçiş (Motor: +0.3); 3.d4 d5 4.e5 ile Fransız ilerleme varyantına benzer.' },
      ],
    },
    '3w': {
      text: '3.e5 ile at kovulur, Beyaz alan kazanır.',
      amac: 'Atı d5’e itip sonra Bc4 veya d4 ile tempo kazanmak.',
      neden: 'e4 piyonunu korumak için 3.d3 pasiftir (Motor: −0.0). 3.e5 tek iddialı hamledir; c3 piyonu b4 karesini aldığı için at Alekhine’deki kadar rahat değildir.',
      diger: [
        { move: '3.d3', text: 'Sağlam ama iddiasız (Motor: −0.0); Siyah ...d5 ile rahatça eşitler.' },
        { move: '3.Qc2', text: 'e4’ü vezirle korur (Motor: −0.2); vezir erken çıkar ve gelişim aksar.' },
      ],
    },
    '3b': {
      text: '3...Nd5 ile at merkeze gelir.',
      amac: 'Atı en aktif kareye koymak ve e5 piyonuna karşı ...d6 veya ...Nc6 ile baskı kurmak.',
      neden: 'c3 piyonu yüzünden b4 kullanılamaz; d5 hem merkezde hem güvenlidir. 3...Ng8 geri çekilme zaman kaybıdır (Motor: +0.6), 3...Ne4? ise 4.d3 ile atı tuzağa sokar (Motor: +2.6).',
      diger: [
        { move: '3...Ng8', text: 'Çok pasif (Motor: +0.6); Beyaz merkezde rahatça yayılır.' },
        { move: '3...Ne4?', text: '4.d3 Nxf2 5.Kxf2 sonrası Siyah taş kaybeder (Motor: +2.6).' },
      ],
    },
    '4w': {
      text: '4.Nf3 ile at gelişir ve e5’i korur.',
      amac: 'Önce taşları geliştirip d4’ü daha sonra, uygun anda oynamak.',
      neden: '4.d4 cxd4 5.cxd4 ile hemen merkez kurmak da ana hat sayılır (Motor: +0.1). 4.Nf3 ise d4 kararını erteler: Beyaz önce taşlarını getirir, merkezin nasıl açılacağına Siyahın düzenine göre karar verir (Motor: +0.2).',
      diger: [
        { move: '4.d4', text: '4...cxd4 5.cxd4 d6 ile en çok oynanan yol (Motor: +0.1).' },
        { move: '4.Bc4', text: 'Doğrudan d5 atına saldırı; GM Colovic’in incelediği Tiviakov–Savçenko 2005’te 4.Bc4 Nb6 5.Bb3 Nc6 6.Nf3 d5 sırası oynandı ve Tiviakov vezir kanadı çoğunluğuyla kazandı.' },
      ],
    },
    '4b': {
      text: '4...Nc6 ile ikinci at e5 piyonuna baskı yapar.',
      amac: 'e5’i taşlarla kuşatmak ve d4 karesini kontrol etmek.',
      neden: 'Siyah henüz ...d6 ile merkezi açmaz; önce taşlarını getirir. Motor bu hamleyi en iyi sayıyor (Motor: +0.1).',
      diger: [
        { move: '4...d6', text: '5.exd6 Qxd6 ile hemen açma (Motor: +0.2); Siyah vezirini erken çıkarır.' },
        { move: '4...e6', text: 'Daha sağlam ama pasif (Motor: +0.4); 5.d4 ile Fransız benzeri yapı.' },
      ],
    },
    '5w': {
      text: '5.Bc4 ile fil d5 atına saldırır.',
      amac: 'Atı yeniden kovarak tempo kazanmak ve a2–g8 çaprazına yerleşmek.',
      neden: 'Fil c4’ten f7’ye de bakar ve d5 atını rahatsız eder. 5.d4 cxd4 6.Bc4 (Motor: +0.2) aynı fikirdir; Tiviakov d4’ü bekletmeyi tercih eder.',
      diger: [
        { move: '5.d4', text: '5...cxd4 6.Bc4 Nb6 7.Bb3 ile benzer yapı (Motor: +0.2), ama merkez erken açılır.' },
        { move: '5.Na3', text: 'Atı c4 veya b5’e hazırlar (Motor: −0.0); daha yavaş.' },
      ],
    },
    '5b': {
      text: '5...Nb6 ile at çekilir ve c4 filine saldırır.',
      amac: 'Fili kovalayıp tempo geri almak ve ...c4 hamlesini hazırlamak.',
      neden: '5...Nc7 (Motor: +0.5) ve 5...e6 (Motor: +0.5) daha pasiftir. b6’dan at hem c4’e hem d5’e döner ve ...c4 ile birlikte Beyazın filini sıkıştırır.',
      diger: [
        { move: '5...Nc7', text: 'At d5’i korur ama pasif kalır (Motor: +0.5); Beyaz 6.d4 ile merkez kurar.' },
        { move: '5...e6', text: '6.O-O d6 7.d4 ile Fransız yapısı (Motor: +0.5).' },
      ],
    },
    '6w': {
      text: '6.Bb3 ile fil a2–g8 çaprazında kalır.',
      amac: 'Fili aktif tutmak ve f7’ye bakmayı sürdürmek.',
      neden: '6.Be2 (Motor: 0.0) fili pasifleştirir. b3’te fil, ...c4 ile kovulabilir ama c2’ye geçince b1–h7 çaprazında yine işe yarar.',
      diger: [
        { move: '6.Be2', text: 'Güvenli ama pasif (Motor: 0.0); 6...d6 7.exd6 e5 gibi aktif cevaplar gelir.' },
        { move: '6.Na3', text: '6...d5 7.Be2 Bg4 (Motor: −0.2); fil geri çekilir ve Siyah rahat gelişir.' },
      ],
    },
    '6b': {
      text: '6...c4 ile fil yeniden kovulur ve c4 piyonu d3 karesine bakar.',
      amac: 'Filin çaprazını değiştirmek, d2–d4 hamlesini geçerken almaya açık hale getirmek ve d3 karesini zayıflatmak.',
      neden: 'Ana alternatif 6...d5 7.exd6 Qxd6’dır (Motor: +0.3); New in Chess’in Sveşnikov–Haugli (Riga 2004) incelemesinde bu yolun Beyaza rahat gelişim verdiği görülür. 6...c4 daha dengesizdir: Beyazın d2 piyonu geride kalır, ama Siyahın c-piyonu da ileride, hedef olabilecek bir konumdadır.',
      diger: [
        { move: '6...d5', text: '7.exd6 Qxd6 8.Na3 ile ana teori (Motor: +0.3).' },
        { move: '6...d6', text: '7.exd6 c4 8.Bc2 Qxd6 ile benzer yapılar (Motor: +0.3).' },
      ],
    },
    '7w': {
      text: '7.Bc2 ile fil b1–h7 çaprazına geçer.',
      amac: 'Fili korumak ve h7 ile şah kanadına bakan uzun bir çapraz almak.',
      neden: 'Tek iyi kare: 7.Ba4 (Motor: −0.4) fili ...a6–b5 ile tehlikeye atar, 7.d4? cxb3 ise taş kaybettirir (Motor: −1.8).',
      diger: [
        { move: '7.Ba4', text: 'Fil kenarda kalır (Motor: −0.4); 7...d5 sonrası Siyah rahat.' },
        { move: '7.d4?', text: '7...cxb3 8.d5 bxa2 ile Beyaz taş kaybeder (Motor: −1.8).' },
      ],
    },
    '7b': {
      text: '7...Qc7 ile vezir e5 piyonuna saldırır.',
      amac: 'e5’e ikinci kez saldırıp piyonu kazanmak; gerekirse ...g5 ile f3 atını da kovmak.',
      neden: 'Timman’ın keskin seçimi. Motor 7...d6 veya 7...d5 ile merkezi açmayı (Motor: +0.2) daha sağlam buluyor; 7...Qc7 sonrası Beyaz 8.O-O! Nxe5 9.Nxe5 Qxe5 10.Re1 ile gelişimde büyük fark yakalardı (Motor: +0.8). Siyah bu yüzden e5’i hemen almak yerine ...g5 ile ek baskı aramak zorunda kalacak.',
      diger: [
        { move: '7...d6', text: '8.Qe2 g6 9.Na3 ile normal gelişim (Motor: +0.2).' },
        { move: '7...d5', text: '8.exd6 Qxd6 9.O-O Bg4 ile merkezde dengeli oyun (Motor: +0.2).' },
        { move: '7...g6', text: '8.Na3 d6 ile filin uzun çaprazdan e5’e bakması (Motor: +0.4).' },
      ],
    },
    '8w': {
      text: '8.Qe2 ile vezir e5’i korur ve c4 piyonuna bakar.',
      amac: 'Piyonu sağlam biçimde tutmak ve d2–d3 ile c4’ü sorgulamaya hazırlanmak.',
      neden: 'Motor burada 8.O-O!’ı daha güçlü buluyor (Motor: +0.8): 8...Nxe5 9.Nxe5 Qxe5 10.Re1 Qc7 11.a4 ile Beyaz vezire tempo kazanır, e-hattını açar ve Siyahın geride kalan gelişimini cezalandırır. Tiviakov piyonu bırakmak yerine savunmayı seçti ve Siyaha 8...g5 fırsatını verdi (Motor: +0.2).',
      diger: [
        { move: '8.O-O', text: '8...Nxe5 9.Nxe5 Qxe5 10.Re1 Qc7 11.a4 ile gelişim üstünlüğü (Motor: +0.8).' },
        { move: '8.a4', text: '8...Nxe5 9.O-O Nd3 ile Siyah rahatlar (Motor: −0.3).' },
      ],
    },
    '8b': {
      text: '8...g5!? ile g-piyonu ...g4 tehdidiyle ilerler.',
      amac: 'f3 atını kovup e5 piyonunu savunucusuz bırakmak.',
      neden: 'Motor bunu en iyi hamle sayıyor (Motor: +0.3); 8...d5 ve 8...d6 (Motor: +0.6) daha yavaştır. Bedeli: şah kanadındaki piyon örtüsü zayıflar, h6 ve f6 kareleri boşalır ve kısa rok riskli hale gelir. Timman’ın şahı bu yüzden oyunun sonuna kadar merkezde kalacak.',
      diger: [
        { move: '8...d5', text: '9.exd6 Qxd6 10.O-O ile sakin oyun (Motor: +0.6).' },
        { move: '8...d6', text: '9.exd6 Qxd6 10.O-O Qe6 (Motor: +0.6); Beyaz gelişimde önde.' },
      ],
    },
    '9w': {
      text: '9.h3 ile ...g4 hamlesi önlenir.',
      amac: 'g4 karesini kontrol edip f3 atını yerinde tutmak.',
      neden: 'Motor 9.Na3!’ı biraz daha iyi buluyor (Motor: +0.4): 9...g4 10.Nb5 Qb8 11.Nh4 ile at hem d6’ya bakar hem f3’ten kurtulur. 9.h3 daha sağlamdır, ama g-piyonu ileride bir hedef olarak kalınca Beyazın 11.Nxg5 imkanı doğacak (Motor: +0.1).',
      diger: [
        { move: '9.Na3', text: '9...g4 10.Nb5 Qb8 11.Nh4 ile karşı oyun (Motor: +0.4).' },
        { move: '9.O-O', text: '9...g4 10.Ne1 Qxe5 11.Qxg4 (Motor: +0.2); piyonlar değişir.' },
      ],
    },
    '9b': {
      text: '9...Bg7 ile fil e5’e üçüncü kez saldırır.',
      amac: 'Piyonu artık savunulamaz hale getirmek.',
      neden: 'Motor bu hamleyi açık ara en iyi buluyor (Motor: +0.2); 9...e6 veya 9...d6 (Motor: +0.9–1.0) Beyaza d4 ve gelişim için zaman verir. Fil g7’de aynı zamanda şah kanadının boşlukları için tek savunucu olacak; bu yüzden daha sonra değişilmesi önemli olacak.',
      diger: [
        { move: '9...e6', text: '10.d4 cxd3 11.Bxd3 ile Beyaz rahat (Motor: +0.9).' },
        { move: '9...d6', text: '10.exd6 Qxd6 11.Na3 (Motor: +1.0); Siyahın g5 piyonu zayıf.' },
      ],
    },
    '10w': {
      text: '10.O-O ile Beyaz rok yapar ve e5 piyonunu bırakır.',
      amac: 'Piyonu gelişim karşılığında vermek; ...Nxe5 sonrası Nxg5 ile hemen geri almak.',
      neden: 'Piyonu tutmanın yolu yoktu; motor 10.O-O’yu en iyi buluyor (Motor: +0.2). Rok, şahı güvenliğe alır ve f1 kalesini e-hattına hazırlar. Şahı merkezde kalan Siyaha karşı hatların açılması Beyazın yararınadır.',
      diger: [
        { move: '10.Na3', text: '10...Nxe5 11.O-O h6 12.Nxe5 (Motor: +0.1); daha yavaş.' },
        { move: '10.a4', text: '10...Nxe5 11.O-O Nd5 (Motor: −0.2); a4 hamlesi henüz bir şey tehdit etmiyor.' },
      ],
    },
    '10b': {
      text: '10...Nxe5 ile Siyah piyonu alır.',
      amac: 'Planın sonucunu toplamak: merkezde güçlü bir at ve fazla bir piyon.',
      neden: 'Motor bu hamleyi en iyi buluyor (Motor: +0.2). 10...h5 (Motor: +0.3) g5’i korur ama zaman kaybettirir; 10...g4 11.hxg4 ise g-hattını açar ve Siyaha fayda getirmez (Motor: +0.6).',
      diger: [
        { move: '10...h5', text: '11.e6 dxe6 ile Beyaz piyonu kendisi verir (Motor: +0.3).' },
        { move: '10...g4', text: '11.hxg4 d5 12.exd6 Qxd6 (Motor: +0.6); Siyahın şah kanadı açılır.' },
      ],
    },
    '11w': {
      text: '11.Nxg5 ile at g5 piyonunu alır; materyal eşitlenir.',
      amac: 'Kaybedilen piyonu geri almak ve atı aktif bir kareye koymak.',
      neden: '11.Re1 (Motor: +0.2) de iyiydi: 11...Nxf3+ 12.Qxf3 ile Beyaz atları değişip açık hatlarla oynar. Tiviakov g5 piyonunu hemen toplamayı tercih etti (Motor: +0.1); bunun bir sakıncası, atın ...h6 ile kovulabilmesidir.',
      diger: [
        { move: '11.Re1', text: '11...Nxf3+ 12.Qxf3 d5 13.a4 (Motor: +0.2).' },
        { move: '11.Na3', text: '11...h6 12.Nxe5 Qxe5 13.Qd1 (Motor: +0.2).' },
      ],
    },
    '11b': {
      text: '11...d5 ile Siyah merkezde güçlü bir piyon kurar ve c8 filine yol açar.',
      amac: 'e5 atını desteklemek, c4 piyonunu korumak ve merkezde alan sahibi olmak.',
      neden: 'Motor 11...Nd5!’i öneriyor (Motor: +0.1): at merkeze dönerken b6’dan oyuna girer ve 12.d4 cxd3 13.Bxd3 Nxd3 ile c2 fili değişir. 11...d5 de mantıklıdır ama b6 atını uzun süre pasif bırakır (Motor: +0.6).',
      diger: [
        { move: '11...Nd5', text: '12.d4 cxd3 13.Bxd3 Nxd3 14.Qxd3 ile eşitlik (Motor: +0.1).' },
        { move: '11...Qc6', text: '12.f4 Nd3 13.Bxd3 cxd3 (Motor: +0.1); d3 piyonu Beyazı rahatsız eder.' },
      ],
    },
    '12w': {
      text: '12.a4 ile a5 tehdit edilir; b6 atı kovulacak.',
      amac: 'Siyahın kenardaki atını daha da kötü bir kareye itmek ve vezir kanadında alan almak.',
      neden: 'Motor 12.Re1’i daha iyi buluyor (Motor: +0.4): kale önce e-hattına gelir ve 12...h6 13.Nf3 Nxf3+ 14.Qxf3 ile e7 hedef olur. 12.a4 de mantıklıdır ama Siyaha ...h6 için bir tempo verir (Motor: +0.1).',
      diger: [
        { move: '12.Re1', text: '12...h6 13.Nf3 Nxf3+ 14.Qxf3 ile e-hattında baskı (Motor: +0.4).' },
        { move: '12.Na3', text: '12...Bd7 13.Re1 O-O-O (Motor: 0.0).' },
      ],
    },
    '12b': {
      text: '12...h6 ile g5 atı sorgulanır.',
      amac: 'Atı geri kovup g-hattını kale için açmak.',
      neden: 'Motor 12...Nbd7’yi tercih ediyor (Motor: +0.2): önce kötü atı kurtarmak ve a5 tehdidini önlemek. 12...h6 bir tempo kaybıdır ve a5 tehdidi askıda kalır (Motor: +0.6); ayrıca h6 piyonu daha sonra vezire hedef olacak.',
      diger: [
        { move: '12...Nbd7', text: '13.Na3 a6 14.b3 h6 ile sağlam (Motor: +0.2).' },
        { move: '12...a6', text: '13.Re1 Bf6 14.a5 Nbd7 (Motor: +0.3).' },
      ],
    },
    '13w': {
      text: '13.Nf3 ile at geri çekilir ve e5 atına saldırır.',
      amac: 'Atı kurtarmak ve Siyahın e5’teki güçlü atını değişime zorlamak.',
      neden: 'Tek iyi hamle. 13.f4? hxg5 14.fxe5 Qxe5 15.Qxe5 Bxe5 sonrası Siyah bir piyon önde (Motor: −1.8); 13.a5? hxg5 14.axb6 Qxb6 ise taş kaybettirir (Motor: −1.9).',
      diger: [
        { move: '13.f4?', text: '13...hxg5 14.fxe5 Qxe5 15.Qxe5 Bxe5 ile Siyah üstün (Motor: −1.8).' },
        { move: '13.a5?', text: '13...hxg5 14.axb6 Qxb6 (Motor: −1.9); g5 atı gider.' },
      ],
    },
    '13b': {
      text: '13...Nbd7 ile at d7’ye gelir; e5 atını destekler ve c5’e yönelir.',
      amac: 'a5 tehdidini önlemek ve b6 atını merkeze yaklaştırmak.',
      neden: 'Motor 13...Rg8 (Motor: +0.5) ve 13...Be6 (Motor: +0.6) hamlelerini benzer buluyor. Nbd7 sonrası at c5’e gelip d3 karesine bakabilir; bu, oyunda 17...Nc5 ile gerçekleşti (Motor: +0.7).',
      diger: [
        { move: '13...Rg8', text: '14.Kh1 Nbd7 15.Na3 a6 ile g-hattında baskı (Motor: +0.5).' },
        { move: '13...Be6', text: '14.Re1 Nbd7 15.Na3 a6 (Motor: +0.6).' },
      ],
    },
    '14w': {
      text: '14.Re1 ile kale e-hattına gelir; e5 atı ve e7 piyonu hedefte.',
      amac: 'e-hattını açmak ve merkezde kalan şaha karşı ağır taşları hazırlamak.',
      neden: 'Motor 14.b3, 14.Na3 ve 14.Re1’i eşit buluyor (Motor: +0.4). Re1 en doğal plandır: Siyah şahı e8’de olduğu sürece e-hattı her zaman tehlikelidir.',
      diger: [
        { move: '14.b3', text: '14...Nd3 15.Na3 a6 (Motor: +0.5); c4 piyonu sorgulanır.' },
        { move: '14.Na3', text: '14...a6 15.Re1 Bf6 16.Nxe5 (Motor: +0.4).' },
      ],
    },
    '14b': {
      text: '14...Bf6 ile fil f6’ya çekilir ve e5 atını korur.',
      amac: 'e5 atını ikinci kez savunmak ve e7’yi örtmek.',
      neden: 'Motor 14...Bf6 ve 14...O-O’yu eşit buluyor (Motor: +0.6). Kısa rok g-hattı açık olsa da şahı merkezden çıkarırdı; Timman bunun yerine fil ile savunmayı ve şahı merkezde tutmayı seçti. 14...Qd6? ise 15.b3 Nxf3+ 16.Qxf3 ile sorun yaratır (Motor: +1.0).',
      diger: [
        { move: '14...O-O', text: '15.b3 Rd8 16.Na3 a6 ile şah güvende (Motor: +0.6).' },
        { move: '14...Qd6', text: '15.b3 Nxf3+ 16.Qxf3 Ne5 (Motor: +1.0).' },
      ],
    },
    '15w': {
      text: '15.d4 ile c4 piyonu sorgulanır.',
      amac: 'Sıkışık d2 piyonunu kurtarmak ve c1 filine yol açmak.',
      neden: 'Bu kırılma erken geldi: 15...cxd3! 16.Bxd3 Nxd3 17.Qxd3 ile Siyah, Beyazın güçlü c2 filini değişir (Motor: −0.6). Motor önce 15.Na3 a6 16.Nxe5 Nxe5 17.d4’ü (Motor: +0.3) ya da 15.Nxe5 Nxe5 16.d4’ü (Motor: +0.2) istiyor: e5 atı değişilince d3 karesi o kadar tehlikeli olmaz.',
      diger: [
        { move: '15.Na3', text: '15...a6 16.Nxe5 Nxe5 17.d4 (Motor: +0.3).' },
        { move: '15.Nxe5', text: '15...Nxe5 16.d4 cxd3 17.Bxd3 (Motor: +0.2).' },
        { move: '15.Kh1', text: '15...h5 16.Na3 a6 (Motor: 0.0); bekleme hamlesi.' },
      ],
    },
    '15b': {
      text: '15...cxd3 ile Siyah geçerken alır.',
      amac: 'c2 filini değişmek ve Beyazın merkezini çözmek.',
      neden: 'Tek iyi hamle. 15...Ng6? 16.b3 cxb3 17.Bxb3 ile Beyaz piyon kazanır (Motor: +2.3); 15...Nd3 16.Bxd3 cxd3 17.Qxd3 de kötüdür (Motor: +2.1).',
      diger: [
        { move: '15...Ng6?', text: '16.b3 cxb3 17.Bxb3 Nb6 ile Beyaz üstün (Motor: +2.3).' },
        { move: '15...Nc6?', text: '16.b3 ile c4 piyonu düşer (Motor: +2.3).' },
      ],
    },
    '16w': {
      text: '16.Bxd3 ile fil d3’te alır.',
      amac: 'Piyonu geri almak.',
      neden: 'Zorunlu: 16.Qe3? dxc2 (Motor: −4.5) ve 16.Nxe5? dxe2 (Motor: −6.1) taş kaybettirir.',
      diger: [
        { move: '16.Qe3?', text: '16...dxc2 17.Na3 ile Beyaz taş geride (Motor: −4.5).' },
      ],
    },
    '16b': {
      text: '16...Nxd3 ile at d3 filini alır.',
      amac: 'Beyazın şah kanadına bakan beyaz kareli filini ortadan kaldırmak.',
      neden: 'En iyi hamle (Motor: −0.5): Beyazın b1–h7 çaprazı biter ve Siyah iki fil karşılığı at–fil dengesine geçer. 16...Nc6 (Motor: +1.5) Beyaza c4 ile merkez verirdi.',
      diger: [
        { move: '16...Nc6', text: '17.c4 d4 18.Nbd2 (Motor: +1.5).' },
        { move: '16...Nc4', text: '17.Na3 Nxa3 18.Rxa3 (Motor: +1.9).' },
      ],
    },
    '17w': {
      text: '17.Qxd3 ile vezir geri alır.',
      amac: 'Materyali dengelemek ve d5 piyonuna baskı yapmak.',
      neden: 'Zorunlu geri alma: 17.Rf1? veya 17.Rd1? Nxc1 ile taş kaybettirir (Motor: −4.7/−5.0).',
    },
    '17b': {
      text: '17...Nc5 ile at tempo kazanarak vezire saldırır.',
      amac: 'Veziri d3’ten kovmak ve d3 karesini at için almak.',
      neden: 'Motor bunu en iyi buluyor (Motor: −0.2). 17...Rg8 (Motor: +0.2) g-hattını alır, ama d5 piyonu savunmasız kalır; 17...a6 18.Qxd5 ise bir piyon kaybettirir (Motor: +0.8).',
      diger: [
        { move: '17...Rg8', text: '18.Na3 a6 19.Qh7 (Motor: +0.2).' },
        { move: '17...a6', text: '18.Qxd5 Rg8 19.Bxh6 (Motor: +0.8).' },
      ],
    },
    '18w': {
      text: '18.Qxd5 ile vezir d5 piyonunu alır; piyonlar yeniden eşit.',
      amac: 'Merkezdeki son Siyah piyonunu almak ve d-hattını açmak.',
      neden: 'Motor en iyi buluyor (Motor: −0.4); 18.Qe2 (Motor: −0.8) daha pasif. Bedeli: vezir merkezde açıkta kalır ve ...Be6 ile tempo kaybeder.',
      diger: [
        { move: '18.Qe2', text: '18...Rg8 19.Kh1 Bf5 (Motor: −0.8).' },
        { move: '18.Qe3', text: '18...Bf5 19.Nd4 Bg6 (Motor: −0.7).' },
      ],
    },
    '18b': {
      text: '18...Be6 ile fil vezire saldırarak gelişir.',
      amac: 'Tempo kazanmak ve d-hattında ...Rd8 ile baskı kurmak.',
      neden: 'Motor en iyi buluyor (Motor: −0.4). 18...Rg8 (Motor: 0.0) de mümkündü. 18...Qc6? 19.Qxc6+ bxc6 vezirleri değişip Siyahın piyon yapısını bozar (Motor: +0.7).',
      diger: [
        { move: '18...Rg8', text: '19.Na3 Bxh3 20.Nb5 (Motor: 0.0).' },
        { move: '18...Qc6?', text: '19.Qxc6+ bxc6 20.Be3 (Motor: +0.7).' },
      ],
    },
    '19w': {
      text: '19.Qh5 ile vezir h5’e çekilir; h6 piyonuna ve f7’ye bakar.',
      amac: 'Veziri Siyah şahının yakınında tutmak ve şah kanadındaki zayıflıkları hedef almak.',
      neden: 'Motor 19.Bf4!’ü öneriyor (Motor: −0.4): fil gelişir ve c7 vezirine tempo kazanır; 19...Qb6 20.Qd1. Qh5 ise veziri kenara götürür ve c1 filini geliştirmeyi geciktirir (Motor: −0.9).',
      diger: [
        { move: '19.Bf4', text: '19...Qb6 20.Qd1 Qxb2 21.Nbd2 (Motor: −0.4).' },
        { move: '19.Qd1', text: '19...Rg8 20.Rxe6 Rd8 (Motor: −1.0).' },
      ],
    },
    '19b': {
      text: '19...Rd8 ile kale açık d-hattını alır.',
      amac: 'd-hattında baskı kurmak ve ...Nd3 gibi atlayışları desteklemek.',
      neden: 'Derinlik 20’de motor 19...Rd8 ve 19...O-O-O’yu eşit buluyor (Motor: −0.7). Uzun rok aynı kaleyi d8’e getirirken şahı da güvenliğe alırdı; Timman kısa vadeli baskıyı seçti ve şah merkezde kaldı. Oyunun geri kalanında bu fark belirleyici oldu.',
      diger: [
        { move: '19...O-O-O', text: '20.Nd4 Nd3 21.Nxe6 fxe6 ile şah güvende (Motor: −0.7).' },
        { move: '19...Qc6', text: '20.Be3 Nd3 21.Re2 Rg8 (Motor: −0.1).' },
      ],
    },
    '20w': {
      text: '20.Nd4 ile at e6 filine saldırır.',
      amac: 'Siyahın en iyi taşlarından biri olan e6 filini değişime zorlamak ya da kovmak.',
      neden: 'Motor bunu en iyi buluyor (Motor: −0.7). 20.c4 (Motor: −0.8) d-hattını kapatır ama d4 karesini zayıflatır; 20.Bf4? Qxf4 21.Qxc5 ise kalite kaybettirir (Motor: −1.4).',
      diger: [
        { move: '20.c4', text: '20...Nd3 21.Rxe6 Qxc4 (Motor: −0.8).' },
        { move: '20.Nh2', text: '20...Rd5 21.Qf3 Rf5 (Motor: −1.4).' },
      ],
    },
    '20b': {
      text: '20...Bxd4? Siyah kara kareli filini at için verir.',
      amac: 'cxd4 sonrası ...Nb3 çatalını hazırlamak.',
      neden: 'Bu oyunun dönüm noktası. 20...Bd5! ile fil merkezde kalmalıydı (Motor: −0.6): 21.Na3 Rg8 22.g4 Nd3 ile Siyah aktif. Değişimden sonra Beyaz cxd4 ile merkez piyonu kazanır, c5 atına tempo kazanır ve en önemlisi Siyahın f6–e7–d6 kareleri sahipsiz kalır (Motor: +1.0). Sonuçta Beyazın atı tam da f6’ya girecek.',
      diger: [
        { move: '20...Bd5', text: '21.Na3 Rg8 22.g4 Nd3 ile Siyah biraz üstün (Motor: −0.6).' },
        { move: '20...Bd7', text: '21.Na3 Rg8 22.Nab5 (Motor: +0.8).' },
      ],
    },
    '21w': {
      text: '21.cxd4 ile c-piyonu geri alır; d4 piyonu c5 atına saldırır.',
      amac: 'Materyali geri almak ve merkezde güçlü bir piyon edinmek.',
      neden: 'Tek iyi hamle: 21.Be3? Bxe3 (Motor: −4.5) ve 21.Rf1? Be5 (Motor: −4.9) Beyazı bir taş geride bırakır.',
      diger: [
        { move: '21.Be3?', text: '21...Bxe3 22.Rxe3 Rg8 ile Beyaz taş geride (Motor: −4.5).' },
      ],
    },
    '21b': {
      text: '21...Nb3 ile at a1 kalesine ve c1 filine bakar.',
      amac: 'Çatal ile kalite kazanmak ya da d4 piyonunu almak.',
      neden: 'Motor 21...Nb3, 21...Rd5 ve 21...Rxd4’ü yaklaşık eşit buluyor (Motor: +1.1). Hepsinde Beyaz biraz üstün, çünkü kara kareler artık zayıf. Timman en dinamik yolu seçti.',
      diger: [
        { move: '21...Rxd4', text: '22.Nc3 Qc6 23.Be3 Rg8 (Motor: +1.1).' },
        { move: '21...Rd5', text: '22.Qf3 Rxd4 23.Qc3 Rg8 (Motor: +1.1).' },
      ],
    },
    '22w': {
      text: '22.Nc3 ile at gelişir ve a1 kalesini bırakır.',
      amac: 'Kaliteyi feda edip gelişimi tamamlamak; Siyah atını köşeye çekmek.',
      neden: 'Motor en iyi buluyor (Motor: +1.2). 22.Ra3 (Motor: 0.0) kaleyi kurtarır ama atı ve fili geliştirmez; 22.Qb5+? Rd7 23.Ra3 Nxd4 ise kötü (Motor: −0.5).',
      diger: [
        { move: '22.Ra3', text: '22...Rd5 23.Qe2 Nxd4 24.Qe3 (Motor: 0.0).' },
        { move: '22.Qb5+?', text: '22...Rd7 23.Ra3 Nxd4 (Motor: −0.5).' },
      ],
    },
    '22b': {
      text: '22...Nxa1 ile at kaleyi alır.',
      amac: 'Kalite kazanmak.',
      neden: 'Motor 22...Nxd4!’ü öneriyordu (Motor: +1.1): at merkezde kalır ve Nb5 tehditlerini karşılar. Nxa1 sonrası at köşede kalır ve 23.Rxe6 ile Siyah e6 filini kaybeder; bilanço kalite karşılığı bir fil ve inisiyatif Beyazda (Motor: +2.1).',
      diger: [
        { move: '22...Nxd4', text: '23.Nb5 Qc4 24.b3 Qc6 ile merkez at sağlam (Motor: +1.1).' },
        { move: '22...Qc6', text: '23.d5 Bxd5 24.Qe5 O-O (Motor: +2.0).' },
      ],
    },
    '23w': {
      text: '23.Rxe6 ile kale e6 filini alır.',
      amac: 'Materyali geri kazanmak ve e-hattında kaleyi aktifleştirmek.',
      neden: 'Derinlik 20’de motor 23.Rxe6 (Motor: +2.4) ve 23.d5 (Motor: +2.6) hamlelerini çok yakın buluyor. Rxe6 en doğal olanıdır: fil alınır, a1 atı köşede kalır ve e7 baskı altına girer.',
      diger: [
        { move: '23.d5', text: '23...Bc8 24.Bg5 hxg5 25.Qxh8+ ile saldırı (Motor: +2.6).' },
        { move: '23.Nb5?', text: '23...Qc6 24.Qe5 f6 25.Nc7+ (Motor: −0.9); Beyaz fazla zorlar.' },
      ],
    },
    '23b': {
      text: '23...Nb3 ile at köşeden çıkar.',
      amac: 'Atı kurtarıp d4 piyonuna yönlendirmek.',
      neden: 'Motor en iyi buluyor (Motor: +2.6). 23...Nc2 (Motor: +3.4) atı daha kötü bir yere götürür. Siyah şimdi d4 piyonunu almayı umuyor.',
      diger: [
        { move: '23...a6', text: '24.Re4 Rg8 25.Bf4 (Motor: +2.9).' },
        { move: '23...Nc2', text: '24.d5 Nb4 25.d6 (Motor: +3.4).' },
      ],
    },
    '24w': {
      text: '24.Be3? fil gelişir ve d4’ü korur gibi görünür.',
      amac: 'Son taşı geliştirmek ve d4 piyonunu tutmak.',
      neden: 'Bu Tiviakov’un oyundaki en büyük hatası. 24.d5! a6 25.Be3 Nc5 26.Rxh6 ile d-piyonu ilerler ve Siyahın e7’si çöker (Motor: +2.5). 24.Be3 Nxd4 sonrası fil d4’ü koruyamaz çünkü e6 kalesi de saldırı altındadır; durum eşitlenir (Motor: +0.2).',
      diger: [
        { move: '24.d5', text: '24...a6 25.Be3 Nc5 26.Rxh6 ile kazanan üstünlük (Motor: +2.5).' },
        { move: '24.Rxh6', text: '24...Rxh6 25.Bxh6 Nxd4 26.Be3 (Motor: 0.0).' },
      ],
    },
    '24b': {
      text: '24...Nxd4 ile at d4 piyonunu alır ve e6 kalesine saldırır.',
      amac: 'Piyonu kazanıp kaleye tempo kazanmak.',
      neden: 'Tek iyi hamle (Motor: +0.0): 24...a6 (Motor: +3.4) ve 24...Rg8 (Motor: +3.5) Beyaza d5 imkanı bırakır.',
      diger: [
        { move: '24...a6?', text: '25.Re4 Qd6 26.Bf4 Qg6 (Motor: +3.4).' },
      ],
    },
    '25w': {
      text: '25.Re4 ile kale çekilir ve d4 atına saldırır.',
      amac: 'Kaleyi kurtarırken ata baskı yapmak ve kaleyi dördüncü yatayda tutmak.',
      neden: 'En iyi hamle (Motor: 0.0). 25.Re5 (Motor: −0.5) kaleyi açıkta bırakır; 25.Bxd4? Rxd4 Siyaha temiz kalite fazlası verir (Motor: −1.1).',
      diger: [
        { move: '25.Re5', text: '25...Rg8 26.Rc5 Qb8 (Motor: −0.5).' },
        { move: '25.Bxd4?', text: '25...Rxd4 26.Re5 Rg8 (Motor: −1.1).' },
      ],
    },
    '25b': {
      text: '25...Nc6 ile at çekilir.',
      amac: 'Atı güvenli bir kareye koymak.',
      neden: 'Tek iyi hamle (Motor: 0.0). 25...Qc4? 26.Qe5 Nf3+ 27.gxf3 (Motor: +4.3) ve 25...Rg8? 26.Bxd4 (Motor: +4.3) kaybeder.',
      diger: [
        { move: '25...Rg8?', text: '26.Bxd4 Rg6 27.Be3 (Motor: +4.7).' },
      ],
    },
    '26w': {
      text: '26.b4 ile b5 ilerleyişi hazırlanır.',
      amac: 'Piyonla c6 atını kovup Siyahın savunmasını gevşetmek.',
      neden: 'Motor 26.Bc5 ve 26.Rf4’ü biraz daha iyi buluyor (Motor: 0.0): Bc5 e7’ye ve şahın kaçış karelerine bakar. 26.b4 de dengede kalır (Motor: −0.1), ama c3 atını korumasız bırakır.',
      diger: [
        { move: '26.Bc5', text: '26...Qd7 27.b4 b6 28.b5 (Motor: 0.0).' },
        { move: '26.Rf4', text: '26...Rh7 27.Rg4 Qe5 (Motor: 0.0).' },
      ],
    },
    '26b': {
      text: '26...Rd3? kale d3’e girer, e3 filine ve c3 atına saldırır.',
      amac: 'İki taşa birden saldırarak materyal kazanmak.',
      neden: 'Görünüşte güçlü ama bir hata (Motor: +0.7). 27.Nd5! vezire tempo kazanır ve 28.Nf4 kaleyi kovar. Motor 26...Rg8!’i öneriyordu (Motor: −0.2): 27.Bc5 Rg5 28.Qxh6 Re5 ile kale savunmaya ve saldırıya katılır.',
      diger: [
        { move: '26...Rg8', text: '27.Bc5 Rg5 28.Qxh6 Re5 (Motor: −0.2).' },
        { move: '26...Rd7', text: '27.b5 Na5 28.Bd4 (Motor: +1.8).' },
      ],
    },
    '27w': {
      text: '27.Nd5! ile at c7 vezirine saldırır ve d-hattını keser.',
      amac: 'Tempo kazanıp sonraki hamlede Nf4 ile d3 kalesine saldırmak.',
      neden: 'Motor 27.Nd5 ve 27.Nb5’i iyi buluyor (Motor: +0.3/+0.6); Bf4 (Motor: 0.0) daha az iddialı. At vezir tarafından korunur (Qh5–d5 çaprazı), ...Rxd5 ise kaliteyi geri verir.',
      diger: [
        { move: '27.Nb5', text: '27...Qd7 28.Rf4 Nd8 29.Qe5 (Motor: +0.6).' },
        { move: '27.Bf4', text: '27...Qd7 28.Nb5 Kf8 (Motor: 0.0).' },
      ],
    },
    '27b': {
      text: '27...Qd6 ile vezir d6’ya gelir ve d5 atına baskı yapar.',
      amac: 'Veziri kurtarmak ve d3 kalesini korumak.',
      neden: 'Tek iyi hamle (Motor: +0.3). 27...Rxd5? 28.Qxd5 Beyaza kalite üstünlüğü verir (Motor: +2.9); 27...Qb8? 28.b5 (Motor: +3.0).',
      diger: [
        { move: '27...Rxd5?', text: '28.Qxd5 Qd7 29.Qh5 ile Beyaz kalite önde (Motor: +2.9).' },
      ],
    },
    '28w': {
      text: '28.Nf4! ile at d3 kalesine saldırır.',
      amac: 'Kaleyi kovmak ve e3 filinin kurtulmasını sağlamak.',
      neden: 'Tek hamle. 28.Nc3? Rxc3 (Motor: −4.5) ve 28.Nc7+? Qxc7 (Motor: −4.4) taş kaybettirir. Nf4 sonrası d3 kalesi saldırı altında, e3 fili de kaleyi alabilir.',
      diger: [
        { move: '28.Nc3?', text: '28...Rxc3 29.b5 Nd8 ile Siyah taş önde (Motor: −4.5).' },
      ],
    },
    '28b': {
      text: '28...Rxe3 ile Siyah kaleyi e3 filiyle değişir.',
      amac: 'Kaleyi bedavaya kaybetmemek; kalite iade edilir.',
      neden: 'En iyi hamle (Motor: +0.2). 28...Rd1+ 29.Kh2 (Motor: +1.4) kaleyi kurtarır ama Beyaz inisiyatifi alır; 28...Rg8 29.Nxd3 ise bir kale kaybettirir (Motor: +2.4).',
      diger: [
        { move: '28...Rd1+', text: '29.Kh2 Rg8 30.Re6 Qc7 (Motor: +1.4).' },
      ],
    },
    '29w': {
      text: '29.fxe3 ile f-piyonu geri alır.',
      amac: 'Materyali dengelemek ve f4 atını desteklemek.',
      neden: 'Zorunlu ve doğal: 29.Rxe3? Qxf4 (Motor: −2.7) ata bir taş kaybettirir. fxe3 sonrası f4 atı sağlam bir şekilde e3 piyonuyla desteklenir.',
      diger: [
        { move: '29.Rxe3?', text: '29...Qxf4 30.b5 Nd4 (Motor: −2.7).' },
      ],
    },
    '29b': {
      text: '29...Nd8? ile at d8’e çekilir.',
      amac: 'e6 karesini tutmak ve b5 ile kovalanmadan önce atı güvenli bir yere koymak.',
      neden: 'Belirleyici hata (Motor: +3.0). At e7’ye kilitlenir ve oyun dışı kalır, h8 kalesi de hâlâ geliştirilmemiştir. 29...Rg8! (Motor: +0.2) ile kale g-hattından oyuna girmeliydi. Nd8 sonrası 30.Qb5+ Qd7 31.Rxe7+! Kxe7 32.Qe5+ Ne6 33.Nd5+ gibi kombinasyonlar doğar.',
      diger: [
        { move: '29...Rg8', text: '30.b5 Rg5 31.Qe2 Re5 ile kale aktif (Motor: +0.2).' },
        { move: '29...e5', text: '30.b5 Ne7 31.Rxe5 (Motor: +2.0).' },
      ],
    },
    '30w': {
      text: '30.Nd5 ile at d5’e döner; e7 ve f6 karelerine bakar.',
      amac: 'Nxe7 ya da Nf6+ tehdidiyle şahın etrafındaki son savunmayı yıkmak.',
      neden: 'Motor 30.Nd5 ve 30.Rd4’ü eşit buluyor (Motor: +3.2). 30.Qb5+ Qd7 31.Rxe7+ (Motor: +2.9) de güçlüydü. Nd5 en somut olanıdır: e7 düşmek üzeredir.',
      diger: [
        { move: '30.Rd4', text: '30...Qc7 31.Nd5 Qd6 (Motor: +3.2).' },
        { move: '30.Qb5+', text: '30...Qd7 31.Rxe7+ Kxe7 32.Qe5+ Ne6 33.Nd5+ (Motor: +2.9).' },
      ],
    },
    '30b': {
      text: '30...e6 ile at kovulur, ama f6 ve d6 kareleri zayıflar.',
      amac: 'e7 piyonunu kurtarmak ve d5 atını kovmak.',
      neden: 'Motor 30...Kf8’i daha iyi buluyor (Motor: +3.0): 31.Nxe7 Ne6 ile şah biraz güvenliğe yaklaşır. 30...e6 ise f6 karesini Beyaz ata teslim eder (Motor: +3.7).',
      diger: [
        { move: '30...Kf8', text: '31.Nxe7 Ne6 32.Nf5 Qd5 (Motor: +3.0).' },
        { move: '30...O-O', text: '31.Rxe7 Qg6 32.Qf3 (Motor: +3.9); kısa rok çok geç.' },
      ],
    },
    '31w': {
      text: '31.Nf6+! ile at şah çekerek f6’ya girer.',
      amac: 'Atı şahın yanına kalıcı olarak yerleştirmek: e8, g8, d7 ve h7 karelerini kontrol etmek.',
      neden: 'Motor en iyi buluyor (Motor: +4.0). f6 atını hiçbir piyon kovamaz ve kara kareli fil de yok; 20...Bxd4’ün uzun vadeli sonucu tam olarak budur. 31.Kh1 (Motor: +2.9) daha yavaştır.',
      diger: [
        { move: '31.Kh1', text: '31...Kf8 32.Nf6 Nc6 (Motor: +2.9).' },
        { move: '31.b5', text: '31...b6 32.Nf6+ Ke7 (Motor: +2.9).' },
      ],
    },
    '31b': {
      text: '31...Kf8 ile şah f8’e gider.',
      amac: 'e7 yerine f8’de kalıp d-hattından uzaklaşmak.',
      neden: 'Motor 31...Ke7’yi biraz daha iyi buluyor (Motor: +3.9): 32.Rf4 e5 ile şah atı kovalamaya çalışır. 31...Kf8 sonrası Beyazın kalesi d4–d7 yolunu rahatça kullanır (Motor: +4.6).',
      diger: [
        { move: '31...Ke7', text: '32.Rf4 e5 33.Rf1 Kf8 (Motor: +3.9).' },
      ],
    },
    '32w': {
      text: '32.Rd4 ile kale d-hattına geçer ve vezire saldırır.',
      amac: 'Kaleyi d7’ye sokmak için d-hattını almak.',
      neden: 'Motor en iyi buluyor (Motor: +4.6); 32.b5 ve 32.Qf3 (Motor: +3.5) daha yavaş. Kale tempo ile vezire saldırdığı için Siyahın karşı oyun için zamanı olmaz.',
      diger: [
        { move: '32.b5', text: '32...e5 33.Qf5 Ne6 (Motor: +3.5).' },
        { move: '32.Qf3', text: '32...Nc6 33.b5 Ne7 (Motor: +3.5).' },
      ],
    },
    '32b': {
      text: '32...Qc7 ile vezir c7’ye çekilir ve d7’yi korumaya çalışır.',
      amac: 'Kalenin d7’ye girmesini zorlaştırmak ve c1’den şah çekme imkanı aramak.',
      neden: 'En iyi savunma (Motor: +4.7). 32...Qc6 33.Rxd8+ (Motor: +5.2) ve 32...Qxd4 33.exd4 (Motor: +5.9) materyal kaybettirir.',
      diger: [
        { move: '32...Qc6', text: '33.Rxd8+ Kg7 34.Rd7 (Motor: +5.2).' },
        { move: '32...Qxd4', text: '33.exd4 Nc6 34.Qf3 (Motor: +5.9).' },
      ],
    },
    '33w': {
      text: '33.Rd7! ile kale yedinci yataya girer, f7 ve d8’e saldırır.',
      amac: 'Mat ağını sıkılaştırmak: kale f7’yi, at d7–e8–g8’i keser.',
      neden: 'Motor en iyi buluyor (Motor: +5.1). 33.b5 ve 33.Nd7+ (Motor: +4.9) de kazanır, ama Rd7 en doğrudan olanıdır: kale vezirle birlikte f7’ye baskı kurar.',
      diger: [
        { move: '33.b5', text: '33...Qc1+ 34.Kh2 Qc7+ 35.Kh1 (Motor: +4.9).' },
        { move: '33.Nd7+', text: '33...Ke8 34.Nf6+ Kf8 35.b5 (Motor: +4.9).' },
      ],
    },
    '33b': {
      text: '33...Qc1+ ile vezir şah çeker.',
      amac: 'Karşı saldırı ile e3 piyonunu hedef almak ve zaman kazanmak.',
      neden: 'Motor en iyi buluyor (Motor: +5.3). Siyahın vezir şahları dışında oyunu yoktur; 33...Qc3 ve 33...Qc2 (Motor: +5.4) da kaybeder.',
      diger: [
        { move: '33...Qc3', text: '34.Rxd8+ Kg7 35.Qg4+ Kxf6 (Motor: +5.4).' },
      ],
    },
    '34w': {
      text: '34.Kh2 ile şah h2’ye kaçar.',
      amac: 'Şahı güvenli kareye koymak ve saldırıyı sürdürmek.',
      neden: 'Tek iyi hamle (Motor: +5.0). 34.Rd1? (Motor: +1.6) kaleyi geri çekip üstünlüğün çoğunu verir; 34.Qd1? Qxd1+ ise vezirleri değiştirir (Motor: +0.1).',
      diger: [
        { move: '34.Rd1?', text: '34...Qxe3+ 35.Kh1 Nc6 (Motor: +1.6).' },
        { move: '34.Qd1?', text: '34...Qxd1+ 35.Rxd1 Ke7 (Motor: +0.1).' },
      ],
    },
    '34b': {
      text: '34...Kg7? ile şah f6 atına saldırır.',
      amac: 'f6 atını almak ve kaleyi h8’den çıkarmak.',
      neden: 'Motor 34...Qxe3’ü öneriyor, ama o da kaybeder: 35.Rxd8+ Kg7 36.Qg4+ Qg5 37.Qxg5+ hxg5 38.Rxh8 (Motor: +4.9). 34...Kg7 ise şahı a1–h8 çaprazına getirir ve 35.Qe5! vuruşunu mümkün kılar (Motor: +7.6).',
      diger: [
        { move: '34...Qxe3', text: '35.Rxd8+ Kg7 36.Qg4+ Qg5 37.Qxg5+ hxg5 38.Rxh8 (Motor: +4.9).' },
        { move: '34...Qc3', text: '35.Rxd8+ Kg7 36.Qg4+ Kxf6 (Motor: +5.4).' },
      ],
    },
    '35w': {
      text: '35.Qe5! ile vezir f6 atının arkasına, a1–h8 çaprazına geçer.',
      amac: 'Açarak şah silahı kurmak: atın her hamlesi g7 şahına şah olur.',
      neden: 'Motor en iyi buluyor (Motor: +8.4, derin aramada mat). 35...Qxe3 36.Nh5+ Kg6 37.Qf6+ Kxh5 38.g4# mattır; 35...Kg6 36.Ng4 ile vezir f6’ya girer; 35...Qc7 36.Rxc7 veziri kazanır. 35.Ng4 (Motor: +6.6) ve 35.Qf3 (Motor: +6.0) de kazanır, ama Qe5 en kesin olanıdır. Timman terk etti.',
      diger: [
        { move: '35.Ng4', text: '35...Qc8 36.Ne5 Qxd7 37.Nxd7 (Motor: +6.6).' },
        { move: '35.Qf3', text: '35...h5 36.Nxh5+ Rxh5 37.Qxh5 (Motor: +6.0).' },
      ],
    },
  },
  exercises: [
    { id: 'tti-1', kind: 'tekrar', plan: true, title: 'Atla iki vuruş: Nd5 ve Nf4',
      source: 'Tiviakov – Timman, Hilversum 2006 (27. hamle)',
      fen: '4k2r/ppq1pp2/2n4p/7Q/PP2R3/2NrB2P/5PP1/6K1 w k - 1 27',
      prompt: 'Siyahın d3 kalesi e3 filine ve c3 atına saldırıyor. Siyahın veziri c7’de, şahı hâlâ e8’de. Beyaz bu baskıdan nasıl kurtulur?',
      hint: 'At önce vezire saldırarak tempo kazansın, sonra d3 kalesine dönsün.',
      line: ['Nd5', 'Qd6', 'Nf4'],
      explanation: '**27.Nd5! Qd6 28.Nf4!** At önce c7 vezirini kovar, sonra d3 kalesine saldırır. Siyah 28...Rxe3 29.fxe3 ile kaleyi file vermek zorunda kalır ve kalite geri gelir. Motor: Nd5 +0.5, sonraki en iyi 27.Bf4 −0.3; 28.Nf4 +0.3, 28.Nc3? −4.6.',
      link: 'Tiviakov’un atı burada d5 karesini ilk kez kullandı; aynı at daha sonra d5 üzerinden f6’ya girecek.' },
    { id: 'tti-2', kind: 'tekrar', plan: false, title: 'Vezir atın arkasına',
      source: 'Tiviakov – Timman, Hilversum 2006 (35. hamle)',
      fen: '3n3r/pp1R1pk1/4pN1p/7Q/PP6/4P2P/6PK/2q5 w - - 8 35',
      prompt: 'Beyazın atı f6’da, kalesi d7’de. Siyah şahı g7’ye getirdi ve şimdi f6 atına saldırıyor. Beyazın en güçlü hamlesi nedir?',
      hint: 'Vezir, atla aynı çaprazda durursa atın her hamlesi şah olur.',
      line: ['Qe5'],
      explanation: '**35.Qe5!** Vezir f6 atının arkasına geçer ve a1-h8 çaprazını alır. Artık atın her hamlesi açarak şah olur; Siyah hem matı hem büyük materyal kaybını önleyemez. Motor: Qe5 8 hamlede mat, sonraki en iyi 35.Qf3 +6.1.',
      link: 'd5–f6 atı ve d7 kalesi şahı kıstırdı; son darbeyi vezirin çapraza gelmesi vurdu.' },
    { id: 'tti-3', kind: 'transfer', plan: false, title: 'f6’ya at fedası',
      source: 'Keres – Kluger, Macaristan–SSCB maçı, Budapeşte 1955 (26. hamle)',
      fen: 'r2n2k1/1b2qppp/2p5/1p6/4N3/1BP5/1P2QPPP/3R2K1 w - - 1 26',
      prompt: 'Beyazın atı e4’te, veziri e2’de ve Siyahın e7 vezirine aynı hatta bakıyor. Siyah şahının önünde g7 ve h7 piyonları var. Saldırıyı başlatın.',
      hint: 'At f6’ya şahla girerse e-hattı açılır. ...gxf6 ve ...Qxf6’ya ne olur?',
      line: ['Nf6+', 'Kf8', 'Nxh7+'],
      explanation: '**26.Nf6+! Kf8 27.Nxh7+** ve Siyah şahı açık kalır. At alınamaz: 26...gxf6 27.Qxe7 veziri kazanır, 26...Qxf6 27.Qe8# mattır. Motor: Nf6+ +4.9, sonraki en iyi 26.Qd3 +1.7; 27.Nxh7+ +5.2, 27.Nd7+ +3.0.',
      link: 'Tiviakov’un atı da f6’ya şahla girdi; f6 atı şahın kaçış karelerini kesip ağır taşlara yol açar.' },
    { id: 'tti-4', kind: 'transfer', plan: false, title: 'f6 atı ve yedinci yatay',
      source: 'Short – Seirawan, Manila Bölgelerarası turnuvası 1990 (32. hamle)',
      fen: 'r2nk3/1rRN1p2/p3p2p/1p1pPb1P/3P4/4P3/P3BK2/2R5 w - - 3 32',
      prompt: 'Beyazın kalesi c7’de yedinci yatayda, atı d7’de. Siyah şahı e8’de ve kaçış kareleri az. Beyaz mat ağını nasıl kurar?',
      hint: 'At şahla f6’ya girsin; sonra boştaki kale g-hattını alsın.',
      line: ['Nf6+', 'Kf8', 'Rg1'],
      explanation: '**32.Nf6+! Kf8 33.Rg1!** At e8, g8 ve d7 karelerini tutar, c7 kalesi yedinci yatayı keser; Rg8 matı tehdit edilir. Motor: Nf6+ +9.8, sonraki en iyi 32.Rg1 +2.5; 33.Rg1 11 hamlede mat, 33.R7c5 +5.0.',
      link: 'Tiviakov’un Nf6+ ve Rd7 ikilisinin aynısı: f6 atı ve yedinci yataydaki kale merkezde kalan şahı kıstırır.' },
  ],
};
