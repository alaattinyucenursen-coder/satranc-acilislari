// Kramnik – Kasparov, Dünya Şampiyonası maçı, Londra 2000 (10. oyun). Kaynak: PgnMentor (Kasparov.pgn).
export default {
  id: 'kramnik-kasparov-2000',
  theme: 'Tek kalmış piyonla saldırı: e6’da fil fedası',
  white: 'Vladimir Kramnik', black: 'Garri Kasparov',
  whiteShort: 'Kramnik', blackShort: 'Kasparov',
  event: 'Dünya Şampiyonası maçı, 10. oyun', site: 'Londra', year: 2000, eco: 'E54',
  variation: 'Nimzo-Hint Savunması, Rubinstein sistemi, tek kalmış piyon yapısı', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O cxd4 8. exd4 dxc4 9. Bxc4 b6 10. Bg5 Bb7 11. Re1 Nbd7 12. Rc1 Rc8 13. Qb3 Be7 14. Bxf6 Nxf6 15. Bxe6 fxe6 16. Qxe6+ Kh8 17. Qxe7 Bxf3 18. gxf3 Qxd4 19. Nb5 Qxb2 20. Rxc8 Rxc8 21. Nd6 Rb8 22. Nf7+ Kg8 23. Qe6 Rf8 24. Nd8+ Kh8 25. Qe7 1-0`,

  summary: 'Londra 2000 maçının 10. oyunu (24 Ekim 2000), Kramnik’i 6–4 öne geçirerek dünya şampiyonluğunu fiilen kesinleştiren karşılaşmadır. Kasparov Nimzo-Hint’in Rubinstein sisteminde **Karpov varyantını** seçti; Beyaz d4’te **tek kalmış piyonla** (TKP) kaldı ama karşılığında açık hatlar ve aktif taşlar aldı. 13.Qb3 ile b4 filine ve a2–g8 çaprazına baskı kuran Kramnik, 14.Bxf6 ile e6’nın komşu savunucusunu ortadan kaldırdı ve hazırlıklı **15.Bxe6!?** fedasını yaptı. ChessBase’in yazısına göre bu fedanın fikri maçtan önce Boris Gelfand’dan gelmişti ve objektif olarak Beyaza avantaj vermiyordu. Motor da aynı şeyi söylüyor: 15...Rc7! ile denge korunurdu. Kasparov fili aldı (15...fxe6), materyal dengesini 17...Bxf3 ve 18...Qxd4 ile geri kurdu, ama **19...Qxb2?** ile veziri şahından uzaklaştırınca Beyazın veziri ve atı Siyah şahının etrafında mat ağı ördü. 23...Rf8? (Keene’e göre “korkunç bir hata”) sonrası 24.Nd8+ ve 25.Qe7 ile Siyah kalite kaybediyordu; Kasparov terk etti.',
  intro: 'Rubinstein sistemi (4.e3) Nimzo-Hint’e karşı en sağlam ve en yaygın cevaptır: Beyaz önce gelişir, planını sonra seçer. 4...O-O 5.Bd3 d5 6.Nf3 c5 7.O-O sonrası Siyah 7...cxd4 8.exd4 dxc4 9.Bxc4 b6 ile Karpov varyantına girer: Beyaza d4’te tek kalmış bir piyon bırakır, fili b7’ye getirip d5 karesini kontrol etmeyi, sonra ...Nbd7, ...Rc8 ve gerekirse ...Bxc3 ile c ve d piyonlarını frenlemeyi hedefler. Wikipedia’nın maç sayfasına göre Kramnik’in yardımcıları Joël Lautier ve Evgeni Bareev 4.e3 sistemini çok iyi tanıyordu ve bu sistem Kasparov’un zayıf sonuçlar aldığı bir yol olduğu için seçilmişti. Bu oyun, TKP’li tarafın planının her zaman d4–d5 kırılması olmadığını gösteriyor: burada Beyaz, taşlarının aktifliğini doğrudan e6 ve f7 noktalarına yöneltti.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Tek kalmış d4 piyonunun verdiği alanla taşları en aktif karelere yerleştirmek: Bc4 (a2–g8 çaprazı), Bg5 (f6 atına bağ), Re1 (e-hattı), Rc1 (c-hattı) ve Qb3.',
      '13.Qb3 ile hem korumasız b4 filine saldırmak hem de vezir–fil bataryasını e6 ve f7’ye çevirmek; Siyahı fili e7’ye çekmeye zorlamak.',
      'e6’yı dolaylı olarak koruyan f6 atını **14.Bxf6** ile almak: d7 atı f6’ya gelince d4’e d-hattından baskı artar ama e6 da zayıflar; Beyaz zamanı kendi lehine kullanmak zorundadır.',
      'Hazırlanmış **15.Bxe6** fedasıyla iki piyon ve e7 filini geri almak, Siyah şahının çevresini (f7, e6, g8) açık bırakmak.',
      'Vezir e7’de, at b5–d6–f7 yolunda: yedinci yatay ve e-hattı üzerinden şaha açarak şah tehditleri (Nd8+, Ng5+, Nh6+) kurmak.',
      'Kendi şahının açılmasına (gxf3) aldırmadan inisiyatifi elde tutmak; Siyahın veziri piyon toplarken saldırıyı hızlandırmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'd5 karesini b7 fili ve f6 atıyla kontrol ederek tek kalmış piyonu ablukaya almak; uzun vadede d4’ü bir oyun sonu zayıflığına çevirmek.',
      'Kaleyi c8’e getirip c-hattında karşı baskı kurmak; gerekirse ...Bxc3 ile c3 kalesinin önünü kapatmak.',
      'Taş değişimleriyle Beyazın saldırı potansiyelini azaltmak; her değişim TKP’yi daha da zayıf bırakır.',
      'Fedadan sonra 17...Bxf3 ve 18...Qxd4 ile materyali geri almak, Beyazın şah kanadını bozmak.',
      'Kritik anda veziri merkezde (d3, d2) tutarak hem şahı savunmak hem de d6 ve f5 karelerini kontrol etmek; açgözlü piyon kazançlarından kaçınmak.',
      'Kale ve şah koordinasyonunu kurmak: ...h5 veya ...h6 ile şaha nefes karesi açıp açarak şah tehditlerini zayıflatmak.',
    ] },
  },
  critical: [
    { move: '13b', title: '13...Be7: bağı kaldırmak ama e6’yı zayıflatmak', text: '13.Qb3 korumasız b4 filine saldırınca Siyah bir karar vermek zorunda kaldı. Motor 13...Bxc3 (0.00) ve 13...Ba5’i (+0.10) gösteriyor; Kasparov ise fili e7’ye çekti (Motor: +0.43). Be7 g5’teki bağı kaldırır ama Bxf6 sonrası d7 atı f6’ya gidince e6 piyonunu yalnızca f7 piyonu korur, Beyazın Qb3 + Bc4 bataryası da tam bu noktaya bakar. Fedanın sahnesi bu hamleyle kuruldu.' },
    { move: '15w', title: '15.Bxe6!? hazırlanmış fil fedası', text: 'ChessBase’in maç yıldönümü yazısına göre bu fikir maçtan önce Boris Gelfand tarafından Kramnik’e söylenmişti; yazı fedanın objektif olarak avantaj getirmediğini de ekliyor. Motor bunu doğruluyor (0.00), ama ilginç olan, Beyazın başka iyi hamlesinin de olmamasıdır: 15.Rcd1 ya da 15.Ne2 sonrası Siyah ...Bxf3 ve d4’e baskıyla öne geçer (Motor: yaklaşık −0.9). Yani feda hem tek dengeli yol hem de rakibe pratik bir problem yükleyen hamledir.' },
    { move: '15b', title: '15...fxe6: kabul, ama doğru cevap 15...Rc7!', text: 'Fili almak doğal görünür, ama 16.Qxe6+ ve 17.Qxe7 ile Beyaz iki piyon ve e7 filini geri alır. Motor 15...Rc7! (0.00) öneriyor: kale yedinci yatayı korur (e7 fili ve f7), fil e6’da asılı kalmaya devam eder, ör. 16.Ng5 Qxd4 17.Rc2 Bd6 ile Siyah fazla taşını korur ve Beyazın yalnızca dengeyi sağlayan bir telafisi olur. 15...fxe6 sonrası Motor +0.6–0.8 veriyor: kayıp değil, ama Siyah artık savunan taraf.' },
    { move: '17b', title: '17...Bxf3!: doğru ara hamle', text: 'Siyah e7’deki filini kaybetmişken hemen 17...Qxe7? oynasaydı 18.Rxe7 sonrası kale yedinci yatayda hükmederdi (Motor: +2.1). Kasparov önce f3 atını aldı: Beyazın şah önü bozuldu, d4 piyonu korumasız kaldı ve 18...Qxd4 ile materyal dengelendi. Bu bölümde Siyah doğru oynadı; Motor +0.3 civarında.' },
    { move: '19b', title: '19...Qxb2? asıl kırılma noktası', text: 'Bu oyunun gerçek hatası budur. 19.Nb5 veziri kovaladı; Siyah b2 piyonunu alıp veziri a1–h8 köşesine gönderdi. Motor 19...Qd3! ile +0.35–0.4 veriyor: vezir d6 karesini kontrol eder, gerektiğinde g6’ya gelip şahı korur. Qxb2 sonrası 20.Rxc8 Rxc8 21.Nd6 ile at tempo kazanarak kaleye ve f7’ye saldırır; değerlendirme +1.6’dan +2.5’e tırmanır. Keene’e göre 19. hamle civarındaki konum daha önce bir oyunda görülmüştü ve Kasparov bunu bilmiyor gibiydi.' },
    { move: '22w', title: '22.Nf7+ ve 23.Qe6: açarak şah makinesi', text: 'At f7’ye girdiğinde Siyahın tek hamlesi 22...Kg8’dir. 23.Qe6 ile vezir e6–g8 çaprazına oturur; artık atın her hamlesi açarak şahtır (Nd8+, Ng5+, Nh6+, Ne5+). Motor bu konumu +3.8 olarak görüyor. 22.Ne8 de hemen hemen aynı değerdeydi (f6 atına saldırı), ama Kramnik’in seçimi en doğrudan olanıydı.' },
    { move: '23b', title: '23...Rf8? son hata', text: 'Raymond Keene The Spectator’daki “Yılın oyunu” yazısında bu hamleyi orada bulunan büyükustaları şoke eden “korkunç bir hata” olarak niteliyor ve en iyi savunmanın 23...h5 olduğunu yazıyor. Motor aynı sırayı veriyor: 23...h5 +2.4 (24.Ng5+ Kh8 25.Qf5 sonrası Beyaz yine çok üstün), 23...h6 +3.4, 23...Rf8 +4.5. Kale f7’deki atı tehdit eder gibi görünür ama 24.Nd8+ ile at açarak şah çekip kaçar ve 25.Qe7 ile f8 kalesi ve Nf7 matı tehdidi birleşir.' },
    { move: '25w', title: '25.Qe7: çifte tehdit, terk', text: '25.Qe7 hem 26.Qxf8+ Ng8 27.Nf7# matını hem de f8 kalesini tehdit eder. Siyahın tek savunması 25...Rxd8 26.Qxd8+ Ng8’dir; Beyaz kalite (kaleye karşı at) önde kalır ve Motor +4.3–4.6 veriyor. Keene’in yazdığı gibi bu seviyede kale-at farkı kolay bir kazanç demektir; Kasparov terk etti.' },
  ],
  lessons: [
    'Tek kalmış piyon yapısında Beyazın tek planı d4–d5 değildir: açık e ve c hatları, a2–g8 çaprazındaki fil ve Bg5 bağı doğrudan şah kanadı saldırısına da dönüşebilir.',
    'Bir piyonu (e6) dolaylı olarak koruyan taşı (f6 atı) değiştirmek fedanın klasik hazırlığıdır; Bxf6 sonrası “şimdi hangi taş bu kareyi koruyor?” sorusunu sorun.',
    'Fedanın objektif değeri ile pratik değeri farklı olabilir: 15.Bxe6 motorla 0.00, ama rakibe tek doğru cevabı (15...Rc7) bulma yükü bindirir. Maç hazırlığında bu tür “zor soru soran” fikirler çok değerlidir.',
    'Savunan taraf için en tehlikeli şey veziri piyon toplamak için uzaklaştırmaktır: 19...Qxb2 materyali eşitledi ama şahın en önemli savunucusunu oyundan çıkardı.',
    'Doğru ara hamle hayat kurtarır: 17...Bxf3! ile Siyah önce atı aldı, sonra d4’ü kazandı; 17...Qxe7? hemen kaybettirirdi.',
    'Vezir + at, şah köşedeyken çok güçlü bir ikilidir: vezir bir çaprazı tutar, at açarak şah çekerek tempo kazanır. Bu yapıda şaha bir nefes karesi (…h5/…h6) açmak çoğu zaman tek savunmadır.',
    'Zor konumda “aktif” görünen hamle (23...Rf8) çoğu zaman taktik bir açık bırakır; önce rakibin zorlayıcı hamlelerini (şahlar, almalar, tehditler) sayın.',
  ],
  notes: {
    '1w': {
      text: '1.d4: Kramnik vezir piyonu açılışıyla başlar ve merkezde e5 ile c5 karelerini kontrol eder.',
      amac: 'Kapalı açılış yapılarına girip Kasparov’u hazırlıklı olduğu bir alana çekmek.',
      neden: 'Bu maçta Kramnik beyazla 1.d4 oynadı; 2. oyunda Kasparov’un Grünfeld’ini yenmişti. 1.d4, Beyazın evine çalıştığı Nimzo-Hint ve Vezir Gambiti hatlarına kapı açar.',
      diger: [
        { move: '1.e4', text: 'Motorun hafifçe tercih ettiği hamle (Motor: +0.29). Kasparov’un Sicilya ve İspanyol hazırlığıyla karşılaşmak demekti; Kramnik bu maçta beyazla bu yolu seçmedi.' },
        { move: '1.Nf3', text: 'Esnek bir Réti/İngiliz başlangıcı (Motor: +0.22). Hamle sırası oyunları ile rakibi farklı yapılara yönlendirebilir.' },
      ],
    },
    '1b': {
      text: '1...Nf6: Siyah Hint savunmalarının ilk hamlesini yapar; e4’e baskı kurar ve 2.e4’ü engeller.',
      amac: 'Hangi sisteme (Grünfeld, Nimzo-Hint, Vezir-Hint, Kral-Hint) gireceğine Beyazın ikinci hamlesinden sonra karar vermek.',
      neden: 'Kasparov hayatı boyunca 1.d4’e 1...Nf6 ile cevap verdi; bu esneklik onun geniş repertuvarına uygundu.',
      diger: [
        { move: '1...d5', text: 'Klasik Vezir Gambiti yolu (Motor: +0.32). Kasparov bu maçta 4. ve 6. oyunlarda Vezir Gambiti Kabulü oynamıştı.' },
        { move: '1...c6', text: '1...c6 Caro-Kann veya Slav yapısına gidebilir (Motor: +0.43); Kasparov’un tarzı için fazla pasif.' },
      ],
    },
    '2w': {
      text: '2.c4: Beyaz d5 karesini kontrol eder ve Vezir Gambiti yapısına geçer.',
      amac: 'Merkezde iki piyonla alan kazanmak ve Nc3 ile e4 ilerleyişini hazırlamak.',
      neden: 'Ana yol budur. 2.Nf3 Nimzo-Hint’i önleyip Vezir-Hint’e yönlendirir; Kramnik ise Nimzo-Hint’e girmeye hazırdı, çünkü 4.e3 hazırlığı vardı.',
      diger: [
        { move: '2.Nf3', text: 'Motorun ilk tercihi (Motor: +0.30). 3.Nc3’ü geciktirerek Nimzo-Hint’i engeller, ama Siyaha Vezir-Hint ve Bogo-Hint seçeneği bırakır.' },
        { move: '2.Bg5', text: 'Trompowsky; Siyahı alışılmadık bir yapıya çeker ama bir dünya şampiyonası maçında ana fikirli hazırlıktan uzaklaşmak olurdu.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah f8 filine yol açar ve ...d5 ya da ...Bb4 seçeneklerini hazırlar.',
      amac: 'Nimzo-Hint (3.Nc3 Bb4) veya Vezir-Hint (3.Nf3 b6) yapısına girmek.',
      neden: 'ChessBase’in yazısına göre Kasparov 2. oyunda Grünfeld’le yenildikten sonra Grünfeld’i bu maçta bir daha oynamadı ve rahat etmediği Nimzo-Hint’e döndü. 2...e6 bu kararın sonucudur.',
      diger: [
        { move: '2...g6', text: 'Grünfeld veya Kral-Hint (Motor: +0.41). Kasparov’un en sevdiği silah, ama 2. oyundaki yenilgiden sonra terk edildi.' },
        { move: '2...c5', text: 'Benoni yapısı; Kasparov gençliğinde oynadı, ama bu seviyede Beyaza merkezde fazla alan verir.' },
      ],
    },
    '3w': {
      text: '3.Nc3: Beyaz atını gelişip e4’ü hazırlar ve Nimzo-Hint’e izin verir.',
      amac: 'Merkezde e4 ilerleyişini destekleyip Siyahın ...Bb4 bağını kabul etmek.',
      neden: '8. oyunda da Kramnik Nimzo-Hint’e girmiş ve 4.Qc2 oynamıştı. 3.Nc3, Kramnik’in hazırladığı 4.e3 hattına giden yoldur.',
      diger: [
        { move: '3.g3', text: 'Katalan (Motor: +0.44). Beyaz fili g2’ye koyar; Nimzo-Hint’i atlamanın bir yolu.' },
        { move: '3.Nf3', text: 'Vezir-Hint ya da Bogo-Hint’e (3...Bb4+) gider (Motor: +0.39); Nimzo-Hint hazırlığını kullanmaz.' },
      ],
    },
    '3b': {
      text: '3...Bb4: Nimzo-Hint Savunması. Fil c3 atını bağlar ve e4 karesine dolaylı baskı yapar.',
      amac: 'e4 ilerleyişini engellemek; gerekirse ...Bxc3 ile Beyaza çift piyon bırakmak.',
      neden: 'Nimzoviç’in fikri: merkezi piyonla değil taşlarla kontrol etmek. Siyah fil çiftini verebilir, ama karşılığında yapısal bir taviz alır.',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Reddi (Motor: +0.33). Daha klasik ve sağlam, ama Beyaza Bg5 ile bağ fırsatı verir.' },
        { move: '3...b6', text: 'Vezir-Hint hamle sırası; c3’teki at varken Beyaz 4.e4 ile merkezi alabilir.' },
      ],
    },
    '4w': {
      text: '4.e3: Rubinstein sistemi. Beyaz f1 filine yol açar ve önce gelişmeyi tamamlar.',
      amac: 'Sakin bir gelişmeyle (Bd3, Nf3/Ne2, O-O) merkezde sağlam kalmak; d4 piyonunu e3 ile desteklemek.',
      neden: 'Wikipedia’ya göre Kramnik’in yardımcıları Lautier ve Bareev bu sistemi çok iyi biliyordu ve Kasparov 4.e3’e karşı zayıf sonuçlar almıştı. 8. oyundaki 4.Qc2’den sonra Kramnik bu kez farklı bir yol denedi.',
      diger: [
        { move: '4.Qc2', text: 'Klasik (Capablanca) sistem (Motor: +0.30). Fil çiftini çift piyon olmadan almayı hedefler; Kramnik 8. oyunda bunu oynamış, oyun berabere bitmişti.' },
        { move: '4.Nf3', text: 'Kasparov varyantı (Motor: +0.25); Beyaz doğal gelişip Siyahın planını bekler.' },
        { move: '4.a3', text: 'Sämisch: fil çifti karşılığında çift c piyonlarını kabul eder; keskin ama yapısal risk taşır.' },
      ],
    },
    '4b': {
      text: '4...O-O: Siyah önce şahını güvenceye alır.',
      amac: 'Merkezde ...d5 veya ...c5 ile hangi yapıya gideceğine karar vermeden önce rok yapmak.',
      neden: '4...O-O en esnek hamledir; Beyazın Ne2 mi Nf3 mü oynayacağını görmeden Siyah piyon yapısını belirlemez.',
      diger: [
        { move: '4...c5', text: 'Doğrudan d4’e baskı (Motor: +0.20); genellikle aynı yapılara aktarılır.' },
        { move: '4...b6', text: 'Fili b7’ye getiren sistem; e4 karesine iki taşla baskı kurar.' },
        { move: '4...d5', text: 'Merkezi hemen tutmak (Motor: +0.20); 5.a3 ile Beyaz fil çiftini ister.' },
      ],
    },
    '5w': {
      text: '5.Bd3: Fil d3’e gelişir ve e4 karesini kontrol eder.',
      amac: 'Şah kanadını hızla geliştirip rok yapmak; ileride b1–h7 çaprazından şaha baskı kurmak.',
      neden: 'Ana hattır. 5.Ne2 çift piyondan kaçınmak için kullanılır, ama Nf3 ile ana yolda kalmak Beyazın hazırladığı TKP yapısına gider.',
      diger: [
        { move: '5.Nf3', text: 'Aynı konumlara aktarılabilir (Motor: +0.11).' },
        { move: '5.Ne2', text: 'At c3’te alırsa geri almak için; 1980’lerden beri sık oynanan bir yol. Daha az aktif bir gelişme.' },
      ],
    },
    '5b': {
      text: '5...d5: Siyah merkezde d5 piyonuyla yer alır.',
      amac: 'Merkezde payını almak; ileride ...dxc4 ile Beyaza tek kalmış piyon bırakmanın zeminini hazırlamak.',
      neden: '5...d5 ve ...c5 ikilisi Rubinstein ana hattının temelidir. Siyah, Beyazın piyon merkezini kırmayı hedefler.',
      diger: [
        { move: '5...c5', text: 'Aynı değerde (Motor: +0.12), sık sık aynı konuma aktarılır.' },
        { move: '5...Re8', text: 'Daha az kullanılan bir bekleme hamlesi (Motor: +0.26).' },
      ],
    },
    '6w': {
      text: '6.Nf3: At doğal karesine gelişir ve e5 ile d4’ü korur.',
      amac: 'Rok yapmak ve d4 piyonunu desteklemek; tek kalmış piyon yapısında Ne5 sıçramasını hazırlamak.',
      neden: 'Ana yol. 6.cxd5 merkez yapısını hemen belirler; Kramnik ise gerilimi korumayı ve Siyahın Karpov varyantına girmesine izin vermeyi seçti.',
      diger: [
        { move: '6.cxd5', text: 'Motorun hafifçe tercih ettiği hamle (Motor: +0.16): exd5 sonrası Carlsbad tipi yapı oluşur.' },
        { move: '6.a3', text: 'Fil hakkında hemen karar istemek (Motor: +0.10).' },
      ],
    },
    '6b': {
      text: '6...c5: Siyah d4 piyonuna saldırır.',
      amac: 'Merkezi kırmak; ...cxd4 ve ...dxc4 ile Beyaza tek kalmış piyon bırakmak.',
      neden: 'Rubinstein’in ana hattı. Siyahın c-piyonu ile d4’e baskısı, Beyazın merkezde rahat kalmasını önler.',
      diger: [
        { move: '6...dxc4', text: 'Önce c4’ü almak (Motor: +0.12); genellikle aynı yapıya gelir.' },
        { move: '6...b6', text: 'Fili b7’ye getirip merkezi sakin tutmak (Motor: +0.13).' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz rok yapar ve gelişmeyi tamamlamaya yaklaşır.',
      amac: 'Şahı güvenceye alıp kalelerin merkeze gelmesine yol açmak.',
      neden: 'Wikipedia’nın Nimzo-Hint sayfasında 7.O-O sonrasındaki konum, Rubinstein’in ana konumu olarak geçer; buradan Parma, Karpov, Larsen ve ana varyantlar ayrılır.',
      diger: [
        { move: '7.cxd5', text: 'Gerilimi hemen çözer (Motor: +0.18).' },
        { move: '7.Bd2', text: 'Pasif; Siyah ...cxd4 ile rahat eşitler (Motor: −0.09).' },
      ],
    },
    '7b': {
      text: '7...cxd4: Siyah merkezde değişim yapar.',
      amac: 'e-piyonunu d4’e çekip ...dxc4 ile tek kalmış piyon yapısını oluşturmak.',
      neden: 'Bu hamle sırası Karpov varyantına (7...dxc4 8.Bxc4 cxd4 9.exd4 b6) aktarılır. Siyahın fikri, d4’ü uzun vadeli bir hedef haline getirmektir.',
      diger: [
        { move: '7...dxc4', text: 'Karpov varyantının kitaptaki sırası (Motor: +0.04).' },
        { move: '7...Nc6', text: 'Ana varyant: 8.a3 Bxc3 9.bxc3 ile Beyaz fil çifti, Siyah yapı avantajı alır.' },
        { move: '7...Nbd7', text: 'Averbakh varyantı; daha yavaş bir kurulum.' },
      ],
    },
    '8w': {
      text: '8.exd4: Beyaz e-piyonuyla geri alır; e-hattı açılır.',
      amac: 'Merkezde d4 piyonunu tutmak ve e-hattını kale için açmak.',
      neden: '8.Nxd4? sonrası ...Bxc3 bxc3 ile Beyazın yapısı bozulur (Motor: −0.21). exd4 doğal ve neredeyse zorunludur.',
      diger: [
        { move: '8.Nxd4', text: 'Yapıyı bozar (Motor: −0.21); Siyah ...Bxc3 ve ...e5 ile rahat eder.' },
      ],
    },
    '8b': {
      text: '8...dxc4: Siyah c4’ü alır; Beyazın d4 piyonu artık tek kalmış piyondur.',
      amac: 'TKP yapısını kesinleştirmek ve d5 karesini sağlam bir abluka noktasına çevirmek.',
      neden: 'Bu yapı Siyaha d5 karesi ve uzun vadede zayıf bir hedef verir; Beyaza ise açık hatlar, e5 karesi ve aktif taşlar. Kasparov bilinçli olarak bu dengeli yapıyı seçti.',
      diger: [
        { move: '8...Nc6', text: 'Gerilimi korumak (Motor: +0.39); 9.c5 ile Beyaz vezir kanadında alan kazanır.' },
        { move: '8...b6', text: 'Önce fil gelişimi; 9.cxd5 ile farklı bir yapıya gidilebilir.' },
      ],
    },
    '9w': {
      text: '9.Bxc4: Fil c4’e gelir ve a2–g8 çaprazından e6 ile f7’ye bakar.',
      amac: 'Fili aktif bir çaprazda tutmak; ileride Bb3, Bd3 veya burada kalıp e6’ya baskı kurmak.',
      neden: 'Diğer alma şekilleri olmadığı için doğaldır. Bu fil, oyunun 15. hamlesinde e6’da feda edilecek taştır.',
      diger: [
        { move: '9.Be2', text: 'Fili pasif bir kareye koyar (Motor: −0.28).' },
      ],
    },
    '9b': {
      text: '9...b6: Karpov varyantı. Fil b7’ye gelişecek.',
      amac: 'b7 filiyle d5 karesini ve uzun çaprazı kontrol etmek; ...Nbd7, ...Rc8 ve gerekirse ...Bxc3 ile c ve d piyonlarını frenlemek.',
      neden: 'Wikipedia’ya göre bu kurulumda Siyah ...Bxc3 ve ...Bb7, ardından ...Nbd7, ...Rc8 ve ...Qc7 ile Beyazın c ve d piyonlarını kısıtlamayı planlar. Karpov bu sistemi çok kullandı.',
      diger: [
        { move: '9...Nc6', text: 'At d4’e baskı yapar (Motor: +0.12); a3 ile Beyaz fil hakkında karar ister.' },
        { move: '9...a6', text: 'Vezir kanadında ...b5 ile alan almak (Motor: +0.28); gelişmede biraz gecikir.' },
      ],
    },
    '10w': {
      text: '10.Bg5: Fil f6 atını bağlar.',
      amac: 'd5 karesini kontrol eden f6 atını bağlamak ve ileride Bxf6 ile almak; d4–d5 kırılmasını kolaylaştırmak.',
      neden: 'Wikipedia’ya göre Karpov varyantında genellikle 10.Bg5 Bb7 gelir. TKP’li tarafın siyah alanlardaki filini aktif kullanması önemlidir.',
      diger: [
        { move: '10.Qe2', text: 'Vezir e-hattına ve e5’e baskı kurar (Motor: +0.02); Bg5 genellikle sonra gelir.' },
        { move: '10.Ne5', text: 'Merkezde ileri karakol (Motor: +0.00), ama erken bir sıçrama.' },
      ],
    },
    '10b': {
      text: '10...Bb7: Fil uzun çaprazda d5 ve f3’e bakar.',
      amac: 'd5 abluka karesini güçlendirmek; ileride f3 atını alıp Beyazın şah önünü bozma seçeneği tutmak.',
      neden: 'Planın doğal devamı. 17. hamledeki ...Bxf3 bu filin ne kadar önemli olduğunu gösterecek.',
      diger: [
        { move: '10...Nbd7', text: 'Önce at (Motor: +0.31); fil gelişimi biraz gecikir.' },
        { move: '10...h6', text: 'Fili sormak (Motor: +0.37); Bh4 sonrası bağ sürer.' },
      ],
    },
    '11w': {
      text: '11.Re1: Kale e-hattına gelir.',
      amac: 'e6 piyonuna baskı kurmak ve Ne5 sıçramasını desteklemek.',
      neden: 'Wikipedia bu konumda 11.Ne5, 11.Re1, 11.Rc1 ve 11.Qe2’nin hepsini Beyaz için iyi sayıyor. Re1, sonradan e6’ya yapılacak fedanın kale desteğini hazırlar.',
      diger: [
        { move: '11.Qe2', text: 'Motorun eşdeğer bulduğu hamle (Motor: +0.06).' },
        { move: '11.Ne5', text: 'Doğrudan ileri karakol (Motor: 0.00); ...Nbd7 ile değişim teklif edilir.' },
      ],
    },
    '11b': {
      text: '11...Nbd7: At d7’ye gelir ve f6 atını destekler.',
      amac: 'Ne5 sıçramasını kontrol altına almak ve Bxf6 sonrası atla geri alabilmek.',
      neden: 'Ana kurulum. Ama bu at, 14.Bxf6 sonrası f6’ya gidince e6’nın yanı korumasız kalacak; yapının gizli zaafı budur.',
      diger: [
        { move: '11...h6', text: 'Fili sormak (Motor: 0.00); Bh4 sonrası bağ sürer ama Siyah ...g5 seçeneği kazanır.' },
        { move: '11...Nc6', text: 'At d4’e baskı yapar (Motor: +0.04); a3 sonrası fil kararı gelir.' },
      ],
    },
    '12w': {
      text: '12.Rc1: Kale c-hattına gelir.',
      amac: 'c-hattında Siyahın baskısına karşı durmak ve c3 atını desteklemek.',
      neden: 'Beyaz bütün taşlarını merkeze ve hatlara getirir. Motor fili önceden b3 ya da d3’e çekmeyi (−0.03) aynı değerde görüyor.',
      diger: [
        { move: '12.Bb3', text: 'Fili ...Rc8 baskısından önce çekmek (Motor: −0.03).' },
        { move: '12.Bd3', text: 'Fili b1–h7 çaprazına çevirmek (Motor: −0.03).' },
      ],
    },
    '12b': {
      text: '12...Rc8: Siyah da kalesini c-hattına getirir.',
      amac: 'c4 filine baskı yapmak ve c-hattında karşı oyun kurmak.',
      neden: 'Doğal hamle. c4 filine baskı, Beyazın fili hareket ettirmesini ya da korumasını gerektirir.',
      diger: [
        { move: '12...h6', text: 'Fili sormak (Motor: +0.07).' },
        { move: '12...a6', text: '...b5 hazırlığı (Motor: +0.08).' },
      ],
    },
    '13w': {
      text: '13.Qb3: Vezir b3’e gelir; korumasız b4 filine saldırır ve c4 filiyle a2–g8 çaprazında batarya kurar.',
      amac: 'Siyahı fil hakkında karar vermeye zorlamak ve e6 ile f7’yi vezir–fil bataryasıyla hedef almak.',
      neden: 'Motor bu hamleyi Qe2 ile aynı değerde görüyor, ama Qb3 rakibe hemen bir soru sorar: b4 fili hiçbir piyonla korunmuyor. Siyah fili e7’ye çekerse e6’ya fedanın şartları oluşur.',
      diger: [
        { move: '13.Qe2', text: 'Eşdeğer (Motor: −0.11); e-hattında baskı, ama b4 filine saldırmaz.' },
        { move: '13.Qd3', text: 'Benzer değerde (Motor: −0.12); vezir b1–h7 çaprazına bakar.' },
      ],
    },
    '13b': {
      text: '13...Be7: Fil e7’ye çekilir ve g5’teki bağı kaldırır.',
      amac: 'f6 atını bağdan kurtarmak ve fil çiftini korumak.',
      neden: 'Doğal ama küçük bir yanlışlık: motor 13...Bxc3 (0.00) veya 13...Ba5’i (+0.10) gösteriyor, Be7 sonrası +0.43. Fil e7’ye gelince Bxf6 Nxf6 sonrası e6’nın yanı zayıflar ve fil e7’de Qxe7 için hedef olur.',
      diger: [
        { move: '13...Bxc3', text: 'Motor: 0.00. 14.Rxc3 h6 15.Bh4 sonrası Beyazın e6’ya baskısı azalır; Siyah fil çiftini verir ama yapı sağlam kalır.' },
        { move: '13...Ba5', text: 'Motor: +0.10. Fil a5’te kalır, c3 atına bağ sürer; Ne5 sonrası değişimlerle denge.' },
      ],
    },
    '14w': {
      text: '14.Bxf6: Beyaz fil çiftini verir ve f6 atını alır.',
      amac: 'Siyahı d7 atıyla geri almaya zorlamak; d7’deki at f6’ya gidince e6 piyonu yalnızca f7 piyonuyla korunur.',
      neden: 'Bu, fedanın hazırlığıdır. 14.Bxe6? hemen oynanırsa ...fxe6 15.Rxe6 sonrası Siyahın taşları kalır (Motor: −1.4). Önce f6’daki savunucuyu değiştirmek gerekir.',
      diger: [
        { move: '14.Ne5', text: 'Motor: +0.10. Değişimlerle sakin bir oyun; TKP oyun sonuna kalabilir.' },
        { move: '14.Bh4', text: 'Motor: 0.00. Bağı sürdürür ama ...Bxf3 gxf3 ...Nd5 ile Siyah rahat eder.' },
        { move: '14.Bxe6', text: 'Erken feda: ...fxe6 15.Rxe6 Rf7 sonrası Motor: −1.4. Savunucular yerinde olduğu için kötü.' },
      ],
    },
    '14b': {
      text: '14...Nxf6: Siyah atla geri alır.',
      amac: 'Şah kanadının piyon yapısını korumak ve d4’e d-hattından baskı yapmak (d7 boşaldı, d8 veziri d4’e bakıyor).',
      neden: 'Keene’e göre Kasparov bu geri almadan önce uzun düşündü. Motor da Nxf6’yı en iyi buluyor: 14...Bxf6? 15.Nb5 ile at d6’ya gelir (Motor: +0.57), 14...gxf6? ise şah önünü açar (Motor: +0.6).',
      diger: [
        { move: '14...Bxf6', text: '15.Nb5! ile at d6’ya yönelir, c8 kalesine ve b7 filine saldırır (Motor: +0.57).' },
        { move: '14...gxf6', text: 'Şahın önü açılır; d5 sonrası Beyaz çok aktif (Motor: +0.6).' },
      ],
    },
    '15w': {
      text: '15.Bxe6!? Fil e6’da feda edilir.',
      amac: 'e6 piyonunu ve ardından e7 filini kazanıp Siyah şahının çevresini açmak; f7 ve e-hattını Beyaz vezir ve kalesine açmak.',
      neden: 'ChessBase’in yazısına göre bu, Boris Gelfand’ın maçtan önce Kramnik’e söylediği hazırlanmış bir fikirdi ve objektif olarak avantaj getirmiyordu. Motor da 0.00 diyor, ama başka hamleler daha kötü: Siyah ...Bxf3 ve ...Qxd4 (ya da ...Bd6) ile d4’ü toplamakla tehdit ediyor.',
      diger: [
        { move: '15.Rcd1', text: 'd4’ü korur ama 15...Bxf3 16.gxf3 Bd6 ile Siyah üstün (Motor: −0.9).' },
        { move: '15.Ne2', text: 'Pasif savunma: 15...Qd6 sonrası Siyahın baskısı artar (Motor: −0.9).' },
      ],
    },
    '15b': {
      text: '15...fxe6: Kasparov fili alır.',
      amac: 'Fazla taşı almak ve Beyazın telafisinin yetersiz olduğunu kanıtlamak.',
      neden: 'Psikolojik olarak anlaşılır: bir fil almak kolay görünür. Ama 16.Qxe6+ ve 17.Qxe7 zinciri materyali geri getirir. Motor 15...Rc7! öneriyor; ChessBase de Kasparov’un en iyi cevapları bulamadığını yazıyor.',
      diger: [
        { move: '15...Rc7', text: 'Motor: 0.00. Kale yedinci yatayı korur (e7 ve f7). 16.Ng5 Qxd4 17.Rc2 Bd6 sonrası Siyah fazla taşla kalır, Beyazın baskısı ancak dengeyi sağlar.' },
        { move: '15...Rb8', text: 'Yanlış kare: 16.Ng5 sonrası f7 düşer (Motor: +1.9).' },
      ],
    },
    '16w': {
      text: '16.Qxe6+: Vezir e6 piyonunu şahla alır.',
      amac: 'Tempoyla e7 filine saldırmak; Siyah şahını köşeye itmek.',
      neden: 'Tek mantıklı devam; 16.Ng5? Bd5 ile Siyah fazla taşını korur (Motor: −3.8).',
      diger: [
        { move: '16.Ng5', text: '16...Bd5 vezire saldırır ve Siyah fazla taşla kalır (Motor: −3.8).' },
      ],
    },
    '16b': {
      text: '16...Kh8: Şah köşeye gider.',
      amac: 'Şahtan kurtulmak ve f-hattındaki kaleyi serbest bırakmak.',
      neden: 'Pratik olarak zorunlu: 16...Rf7? 17.Ng5 (ya da Ne5) ile bağlı kale düşer (Motor: +5.4).',
      diger: [
        { move: '16...Rf7', text: '17.Ng5 sonrası bağlı kale kaybedilir (Motor: +5.4).' },
      ],
    },
    '17w': {
      text: '17.Qxe7: Vezir e7 filini alır.',
      amac: 'Materyali geri almak: Beyaz iki fil verdi, karşılığında at, fil ve iki piyon aldı. Vezir yedinci yatayda kalır.',
      neden: 'Diğer hamleler (17.Ng5, 17.Ne5) sadece Siyahın fazla taşla kalmasına yol açar (Motor: −2). Qxe7 sonrası Beyaz iki piyon önde, ama Siyahın ara hamlesi gelecek.',
      diger: [
        { move: '17.Ng5', text: '17...Rc7 sonrası fil korunur (Motor: −2.0).' },
      ],
    },
    '17b': {
      text: '17...Bxf3!: Siyah önce f3 atını alır.',
      amac: 'Beyazın şah önünü bozmak ve d4 piyonunun koruyucusunu yok etmek; ardından ...Qxd4 ile materyali dengelemek.',
      neden: 'Doğru ara hamle. 17...Qxe7? 18.Rxe7 sonrası kale yedinci yatayı ele geçirir (Motor: +2.1); 17...Rc7? 18.Qxd8 ile Beyaz üstün kalır (Motor: +2.2).',
      diger: [
        { move: '17...Qxe7', text: '18.Rxe7 Bxf3 19.gxf3 Nd5 20.Rd7 sonrası kale yedinci yatayda (Motor: +2.1).' },
        { move: '17...Rc7', text: '18.Qxd8 Rxd8 19.Ng5 ile Beyaz iki piyon önde (Motor: +2.2).' },
      ],
    },
    '18w': {
      text: '18.gxf3: Beyaz piyonla geri alır.',
      amac: 'Vezirleri tahtada tutmak ve saldırı potansiyelini korumak.',
      neden: '18.Qxd8 Rcxd8 19.gxf3 Rxd4 de eşit değerde (Motor: +0.37), ama vezirsiz oyun sonunda Beyazın yapısı bozuk kalır. Kramnik vezirleri tutarak Siyah şahına baskıyı sürdürmeyi seçti.',
      diger: [
        { move: '18.Qxd8', text: 'Vezir değişimi (Motor: +0.37); kayık piyonlu bir oyun sonu, kazanma şansı az.' },
        { move: '18.Qxa7', text: 'Açgözlü: ...Bc6 ile Siyah taş fazlası tutar (Motor: −2.9).' },
      ],
    },
    '18b': {
      text: '18...Qxd4: Vezir d4 piyonunu alır.',
      amac: 'Materyali neredeyse eşitlemek ve veziri merkeze getirmek.',
      neden: 'Doğal ve en iyi. Şimdi Beyaz bir piyon önde, ama şah önü bozuk; Siyahın veziri merkezde güçlü. Motor: +0.34.',
      diger: [
        { move: '18...Ng8', text: 'Pasif (Motor: +1.1); vezir değişimi sonrası Beyaz kale aktivitesiyle üstün.' },
        { move: '18...h6', text: 'Şaha nefes karesi, ama d4 alınmaz (Motor: +1.7).' },
      ],
    },
    '19w': {
      text: '19.Nb5: At vezire saldırır ve d6 karesine yönelir.',
      amac: 'Tempo kazanarak atı d6’ya getirmek; c8 kalesine ve f7 karesine baskı kurmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.58). d6 karesi, Siyahın siyah kareli fili gittiği için savunmasız bir ileri karakoldur.',
      diger: [
        { move: '19.Rcd1', text: 'Vezire saldırır (Motor: +0.08); Siyah ...Qh4 ile rahat eder.' },
        { move: '19.Qe3', text: 'Vezir değişimi teklifi (Motor: 0.00); saldırı fırsatı kaybolur.' },
      ],
    },
    '19b': {
      text: '19...Qxb2?: Vezir b2 piyonunu alır.',
      amac: 'Materyali eşitlemek ve Beyazın a2 piyonunu da hedef almak.',
      neden: 'Ciddi hata: vezir şahın savunmasından uzaklaşır, d6 karesini kontrol etmez. Motor 19...Qd3! (+0.35–0.4) öneriyor. Keene’e göre bu civardaki konum daha önce bir oyunda görülmüştü ve Kasparov bunu bilmiyordu gibiydi.',
      diger: [
        { move: '19...Qd3', text: 'Motor: +0.4. 20.Rxc8 Rxc8 21.Nd6 Ra8 22.Kg2 Qg6+ ile vezir şahı savunur ve d6 atına bakar.' },
        { move: '19...Qd2', text: 'Motor: +0.6. Vezir yine merkeze yakın kalır.' },
      ],
    },
    '20w': {
      text: '20.Rxc8: Beyaz c-hattında kaleleri değişir.',
      amac: 'Siyah kaleyi c8’e çekmek ve 21.Nd6 ile tempo kazanmak.',
      neden: '20.Nd6? Qxc1! ile kaleyi alır (Motor: 0.00). Önce değişim yapmak, atın d6’ya kale tehdidiyle gelmesini sağlar (Motor: +1.7).',
      diger: [
        { move: '20.Nd6', text: '20...Qxc1! 21.Rxc1 Rxc1+ ile Siyah materyali kurtarır (Motor: 0.00).' },
        { move: '20.Rc7', text: 'Yedinci yatay, ama ...Ng8 sonrası savunma kurulur (Motor: −0.15).' },
      ],
    },
    '20b': {
      text: '20...Rxc8: Siyah kaleyi geri alır.',
      amac: 'Materyali korumak.',
      neden: 'Zorunlu: 20...Qxf2+? 21.Kxf2 hemen kaybeder, 20...Rg8 ise kalite verir (Motor: +6).',
      diger: [
        { move: '20...Qxf2+', text: 'Vezir kaybedilir (Motor: Beyaz kazanıyor).' },
      ],
    },
    '21w': {
      text: '21.Nd6: At c8 kalesine ve f7 karesine saldırır.',
      amac: 'Kaleyi sekizinci yataydan uzaklaştırmak ve Nf7+ ile şaha yaklaşmak.',
      neden: 'Motor: +2.4. 21.Nxa7 Rc5 sonrası Siyah savunur (Motor: 0.00). At d6’da Siyahın en zayıf karesine oturur.',
      diger: [
        { move: '21.Nxa7', text: 'Piyon kazanır ama saldırıyı yavaşlatır (Motor: 0.00).' },
        { move: '21.Qe6', text: '21...Rc1 ile Siyah karşı saldırı kurar (Motor: −0.2).' },
      ],
    },
    '21b': {
      text: '21...Rb8: Kale b8’e çekilir.',
      amac: 'Kaleyi sekizinci yatayda tutmak ve f8’i gerektiğinde savunmak.',
      neden: 'Motor 21...Ra8 ile eşdeğer görüyor (+2.6). 21...Qc2? ya da 21...Qc3? 22.Nxc8 ile kale kaybedilir (Motor: +4.6 ve üzeri).',
      diger: [
        { move: '21...Ra8', text: 'Eşdeğer (Motor: +2.6).' },
        { move: '21...Qc3', text: '22.Nxc8 ile kale kaybedilir (Motor: +4.6).' },
      ],
    },
    '22w': {
      text: '22.Nf7+: At f7’den şah çeker.',
      amac: 'Siyah şahını g8’e zorlamak; ardından Qe6 ile açarak şah makinesi kurmak.',
      neden: 'Motor: +2.8. 22.Ne8 de eşdeğer (f6 atına saldırı), ama Kramnik en doğrudan yolu seçti.',
      diger: [
        { move: '22.Ne8', text: 'f6 atına saldırır; 22...Ng8 23.Qd7 ile eşdeğer (Motor: +2.85).' },
        { move: '22.Qc7', text: 'Yedinci yatay baskısı (Motor: +2.7).' },
      ],
    },
    '22b': {
      text: '22...Kg8: Şah g8’e gider.',
      amac: 'Şahtan kurtulmak.',
      neden: 'Tek yasal hamle: g7 ve h7 piyonları şahın yolunu kapatır, f7’deki at da alınamaz.',
    },
    '23w': {
      text: '23.Qe6: Vezir e6’ya gelir ve e6–g8 çaprazına oturur.',
      amac: 'At her hamlesinde açarak şah çeksin: Nd8+, Ng5+, Nh6+ veya Ne5+.',
      neden: 'Motor: +3.8. 23.Ng5 ya da 23.Nd8 sonrası Siyah ...h6 ile savunur (Motor: yaklaşık 0.0–0.3).',
      diger: [
        { move: '23.Ng5', text: '23...h6 ile Siyah kurtulur (Motor: +0.3).' },
        { move: '23.Nd8', text: '23...h6 sonrası denge (Motor: +0.1).' },
      ],
    },
    '23b': {
      text: '23...Rf8?: Kale f8’e gelir ve f7’deki ata saldırır.',
      amac: 'Atı almak ve saldırıyı kırmak.',
      neden: 'Keene’e göre “korkunç bir hata”. Motor: +4.5. 23...h5! şaha nefes karesi açar (Motor: +2.4); Beyaz yine üstün, ama oyun devam ederdi.',
      diger: [
        { move: '23...h5', text: 'Keene ve motorun önerdiği savunma: 24.Ng5+ Kh8 25.Qf5 sonrası Beyaz üstün ama kazanç uzun (Motor: +2.4).' },
        { move: '23...h6', text: '24.Nxh6+ Kh7 25.Qf5+ Kh8 sonrası Beyaz piyon kazanır (Motor: +3.4).' },
      ],
    },
    '24w': {
      text: '24.Nd8+: At açarak şah çekerek d8’e kaçar.',
      amac: 'Atı kurtarmak ve 25.Qe7 ile çifte tehdit kurmak.',
      neden: 'Motor: +4.6. 24.Ng5+ ya da 24.Ne5+ de aynı değerde, çünkü at tekrar f7’ye dönüp aynı konuma gelebilir.',
      diger: [
        { move: '24.Ng5+', text: 'Eşdeğer (Motor: +4.6); 24...Kh8 25.Nf7+ Kg8 26.Nd8+ ile aynı konum.' },
      ],
    },
    '24b': {
      text: '24...Kh8: Şah h8’e döner.',
      amac: 'Şahtan kurtulmak.',
      neden: 'Zorunlu: 24...Rf7? 25.Qxf7+ Kh8 26.Qf8+ Ng8 27.Nf7# ile mat.',
      diger: [
        { move: '24...Rf7', text: 'Mat: 25.Qxf7+ Kh8 26.Qf8+ Ng8 27.Nf7#.' },
      ],
    },
    '25w': {
      text: '25.Qe7: Vezir e7’ye gelir; f8 kalesine ve Nf7 matına çifte tehdit.',
      amac: 'Siyahı kalite vermeye zorlamak: 25...Rxd8 26.Qxd8+ Ng8 sonrası Beyaz kale-at önde.',
      neden: 'Motor: +4.6. 25...Qb1? 26.Qxf8+ Ng8 27.Nf7# ile mat olur. Kasparov terk etti.',
      diger: [
        { move: '25.Nf7+', text: 'Tekrar (Motor: +4.5); zaman kazanmak için oynanabilirdi.' },
        { move: '25.Qd6', text: 'Eşdeğer (Motor: +4.6).' },
      ],
    },
  },
  qa: [
    { q: 'Beyaz neden 15.Bxe6 fedasını yaptı?', a: 'Çünkü başka iyi hamle yoktu: Siyah ...Bxf3 ve ...Qxd4 ile d4’ü toplamakla tehdit ediyordu (15.Rcd1 Bxf3 sonrası Motor: −0.9). ChessBase’e göre fikir Gelfand’dan geliyordu ve objektif olarak denge sağlıyordu (Motor: 0.00).' },
    { q: 'Siyah 15. hamlede nasıl daha iyi oynayabilirdi?', a: '15...Rc7! ile kale yedinci yatayı korur, fil e6’da kalır. 16.Ng5 Qxd4 17.Rc2 Bd6 sonrası Siyah fazla taşını korur ve Beyazın telafisi ancak dengeyi sağlar (Motor: 0.00).' },
    { q: 'Siyah nerede asıl hatayı yaptı?', a: '19...Qxb2? ile. Vezir şahın savunmasından uzaklaştı, d6 karesini kontrol etmedi. 19...Qd3! (Motor: +0.4) ile vezir d6’ya bakar ve g6’ya gelip şahı koruyabilirdi.' },
    { q: '17...Bxf3 neden doğruydu?', a: '17...Qxe7? 18.Rxe7 sonrası kale yedinci yatayda hükmederdi (Motor: +2.1). Önce atı alıp d4’ün koruyucusunu yok etmek, 18...Qxd4 ile materyali dengeledi.' },
    { q: '23...Rf8 neden kötüydü?', a: 'Kale f7’deki ata saldırıyor gibi görünür, ama 24.Nd8+ ile at açarak şah çekerek kaçar ve 25.Qe7 ile f8 kalesi ve Nf7 matı tehdit edilir. 23...h5! (Motor: +2.4) daha dirençliydi.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Siyahın veziri b2’ye gidince Beyazın veziri (e7) ve atı (d6–f7) Siyah şahının çevresinde serbestçe dolaştı. Açarak şah tehditleri, Siyahın kale ve atının koordinasyonunu bozdu.' },
    { q: 'Kramnik neden 18.Qxd8 ile vezir değişmedi?', a: '18.Qxd8 Rcxd8 19.gxf3 Rxd4 de eşit (Motor: +0.37), ama vezirsiz oyun sonunda Beyazın bozuk piyonları kazanma şansını yok eder. Vezirleri tutmak, saldırı potansiyelini korudu.' },
    { q: 'Bu oyun maçta neden bu kadar önemliydi?', a: 'Wikipedia’ya göre Kramnik 5–4 önde başladığı bu oyunu kazanarak 6–4’e çıktı. ChessBase bu oyunu “belirleyici darbe” olarak niteliyor; Kasparov kalan oyunlarda iki galibiyet bulmak zorundaydı ve bulamadı.' },
  ],
  sources: [
    { title: 'ChessBase: 25 Years Ago – Kramnik beats Kasparov', url: 'https://en.chessbase.com/post/25-years-ago-kramnik-beats-kasparov' },
    { title: 'The Spectator (Raymond Keene): Game of the Year, 30 Aralık 2000', url: 'https://archive.spectator.co.uk/article/30th-december-2000/42/game-of-the-year' },
    { title: 'Wikipedia: Classical World Chess Championship 2000', url: 'https://en.wikipedia.org/wiki/Classical_World_Chess_Championship_2000' },
    { title: 'Wikipedia: Nimzo-Indian Defence', url: 'https://en.wikipedia.org/wiki/Nimzo-Indian_Defence' },
    { title: 'Wikipedia (DE): Schachweltmeisterschaft 2000', url: 'https://de.wikipedia.org/wiki/Schachweltmeisterschaft_2000' },
  ],
  exercises: [
    { id: 'kk00-1', kind: 'tekrar', plan: false, title: 'At d6’ya',
      source: 'Kramnik – Kasparov, Londra 2000 (21. hamle)',
      fen: '2r4k/p3Q1pp/1p3n2/1N6/8/5P2/Pq3P1P/4R1K1 w - - 0 21',
      prompt: 'Vezirler tahtada, Siyah b2’yi aldı. Beyazın atı b5’te, veziri e7’de. Saldırıyı sürdüren at hamlesi hangisi?',
      hint: 'At c8 kalesine ve f7’ye saldırabileceği kareye gitsin.',
      line: ['Nd6'],
      explanation: '**21.Nd6!** At c8 kalesine saldırır ve f7 üzerinden şaha yaklaşmaya hazırlanır. Motor: Nd6 +2.7, 21.Nxa7 0.0.',
      link: 'Atın merkezden şaha yaklaşması, vezirle birlikte mat ağı kurar.' },
    { id: 'kk00-2', kind: 'tekrar', plan: false, title: 'Qe6 ile şahı kapatmak',
      source: 'Kramnik – Kasparov, Londra 2000 (23. hamle)',
      fen: '1r4k1/p3QNpp/1p3n2/8/8/5P2/Pq3P1P/4R1K1 w - - 4 23',
      prompt: 'At f7’den şah çekti, Siyah şahı g8’e gitti. Vezir nereye gitmeli?',
      hint: 'Vezir hem şaha yakın olmalı hem de at açarak şah çektiğinde etkili olmalı.',
      line: ['Qe6'],
      explanation: '**23.Qe6!** Vezir şahı g8’e kapatır; Nd8+ ile açarak şah tehdidi var. Motor: Qe6 +3.9, sonraki en iyi hamle +0.6.',
      link: 'Vezir ve at birlikte çalışınca şah köşeden çıkamaz.' },
    { id: 'kk00-3', kind: 'transfer', plan: false, title: 'd8’deki atı kurtarmadan saldırı',
      source: 'Polugayevski – Petrosyan, SSCB Şampiyonası, Leningrad 1960 (19. hamle)',
      fen: '2qN2k1/p2n1rpp/bp6/b1p5/4P3/8/PP2QPPP/R1BR2K1 w - - 1 19',
      prompt: 'Beyazın atı d8’de tehlikede, Siyahın veziri c8’de. a6’daki fili almak cazip. En güçlü hamle hangisi?',
      hint: 'Veziri e3’e getirin; at kurtulmasa da e5 ve e6 ilerleyişi gelir.',
      line: ['Qe3'],
      explanation: '**19.Qe3!** Qxd8 sonrası e5-e6 ile merkez piyonu saldırıya katılır ve d7 atı düşer. Motor: Qe3 +3.1, 19.Qxa6 +0.1.',
      link: 'Kramnik de e6’da fil verdi ve e-hattından saldırdı. İki maçta da e6 karesi saldırının kapısı oldu.' },
    { id: 'kk00-4', kind: 'transfer', plan: false, title: 'Doğru taşla almak',
      source: 'Geller – Smislov, SSCB Şampiyonası, Moskova 1961 (30. hamle)',
      fen: '5rk1/pp3pp1/2b4n/1r2p1Bq/1P1R1Q1P/P7/B4PP1/4R1K1 w - - 0 30',
      prompt: 'Rubinstein yapısında tek kalmış piyon savaşı. Siyahın e5 piyonu Beyazın veziriyle kalesine saldırıyor. Doğru alma hangisi?',
      hint: 'Kaleyle mi, vezirle mi alırsınız? Hangisi sonra kazanır?',
      line: ['Rxe5'],
      explanation: '**30.Rxe5!** Kale e5’i alır; ...Rxe5 31.Qxe5 sonrası Beyazın veziri ve filleri şaha saldırır. 30.Qxe5? Rxe5 31.Rxe5 sonrası Siyah kazançlı çıkar. Motor: Rxe5 +3.5, Qxe5 −4.1.',
      link: 'Kramnik’in maçında olduğu gibi, Beyazın aktif taşları malzemeden önemli: doğru taşla almak saldırıyı sürdürür.' },
  ],
};
