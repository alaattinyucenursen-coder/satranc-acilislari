// Smyslov – Keres, Dünya Şampiyonası Turnuvası, Lahey/Moskova 1948 (17. tur). Kaynak: PgnMentor (Keres.pgn).
export default {
  id: 'smyslov-keres-1948',
  theme: 'Azınlık saldırısı',
  white: 'Vasili Smislov', black: 'Paul Keres',
  whiteShort: 'Smislov', blackShort: 'Keres',
  event: 'Dünya Şampiyonası Turnuvası', site: 'Moskova', year: 1948, eco: 'D36',
  variation: 'Vezir Gambiti Reddi, Değişim Varyantı', result: '1-0',
  pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c6 5. e3 Nbd7 6. cxd5 exd5 7. Bd3 Be7 8. Nf3 O-O 9. Qc2 Re8 10. O-O Nf8 11. Rab1 Ng6 12. b4 Bd6 13. b5 Bd7 14. bxc6 Bxc6 15. Qb3 Be7 16. Bxf6 Bxf6 17. Bb5 Qd6 18. Rfc1 h5 19. Ne2 h4 20. Bxc6 bxc6 21. Qa4 Ne7 22. Rb7 a5 23. h3 Reb8 24. Rcb1 Rxb7 25. Rxb7 c5 26. Rb5 cxd4 27. Nexd4 Rc8 28. Nb3 Bc3 29. Qxh4 Rc4 30. g4 a4 31. Nbd4 Bxd4 32. Nxd4 Qe5 33. Nf3 Qd6 34. Ra5 Rc8 35. Rxa4 Ng6 36. Qh5 Qf6 37. Qf5 Qc6 38. Ra7 Rf8 39. Rd7 d4 40. Rxd4 Ra8 41. a4 1-0`,


  summary: 'Değişim Varyantının (Karlsbad yapısı) en öğretici planlarından biri olan azınlık saldırısının ders kitabı örneği. Beyazın vezir kanadında iki piyonu (a, b), Siyahın üç piyonu (a, b, c) var; Smislov Rab1, b4 ve b5 ile bu iki piyonu ileri sürerek Siyahın piyon zincirini kırdı. Keres 14...Bxc6 ile filiyle alıp c6’da geri kalmış piyondan kaçtı ama bu kez d5 piyonu yalnız kaldı. Smislov önce d5’i savunan iki taşı değişti (16.Bxf6 ve 17.Bb5 ile 20.Bxc6), sonra açık b-hattından kalesini yedinci yataya soktu (22.Rb7). 24.Rcb1 ile verdiği küçük bir fırsatı Keres 25...c5 ile değerlendirip yapısını çözdü, ama karşılığında a ve d piyonları yalnız kaldı ve şah kanadındaki ...h5-h4 ilerleyişi bir zayıflığa dönüştü. Beyaz önce h4’ü, sonra a4’ü topladı; 36...Qf6 hatası d5’i de düşürdü ve Keres üç piyon eksikle 41. hamlede terk etti.',
  intro: 'Bu maç 1948 Dünya Şampiyonası Turnuvası’nın Moskova ayağında, 17. turda oynandı. Smislov turnuvayı Botvinnik’in arkasında 11/20 ile ikinci bitirdi; Keres ise 10,5 puanla Reshevsky ile üçüncülüğü paylaştı. Açılış 4...c6 ve 5...Nbd7 ile Cambridge Springs’e giden bir hamle sırasıydı; Smislov 6.cxd5 ile hem bu savunmadan kaçtı hem de oyunun karakterini belirledi: Karlsbad yapısı. Bu yapıda Beyazın açık c-hattı ve vezir kanadında azınlık saldırısı planı var; Siyahın ise yarı açık e-hattı ve şah kanadında daha rahat taşları. Maç, iki tarafın planlarının yarışıdır: Beyaz vezir kanadında kalıcı bir zayıflık yaratmaya, Siyah şah kanadında karşı oyun bulmaya çalışır. Smislov’un sade ama kararlı oyunu, azınlık saldırısının hangi sırayla oynanacağını (önce piyonlar, sonra savunucuların değişimi, sonra kalelerin girişi) çok net gösterir.',
  plans: {
    white: { title: 'Beyazın planı: azınlık saldırısı ve zayıf piyonlara yüklenmek', points: [
      '**Rab1, b4, b5** ile iki vezir kanadı piyonunu üç piyonluk a7-b7-c6 zincirine karşı yürütmek. Kale b-hattının arkasında durur ki hat açılınca hemen hazır olsun.',
      'b5xc6 değişiminden sonra Siyahı ya **c6’da geri kalmış piyon** ya da **tek kalmış d5 piyonu** ile bırakmak. İkisi de taşlarla aylarca hedef alınabilecek, hareket edemeyen zayıflıklardır.',
      'Zayıf piyonun savunucularını değişmek: **16.Bxf6** ile d5’i koruyan atı, **17.Bb5 ve 20.Bxc6** ile d5’i koruyan açık kareli fili ortadan kaldırmak.',
      'Açık b-hattından kaleyi **yedinci yataya** (22.Rb7, 25.Rxb7) sokmak, a7 ve e7’yi bağlayıp Siyah taşları pasif savunmaya mahkûm etmek.',
      'Atlarla blokaj kurmak: **27.Nexd4** ve 31.Nbd4 ile d4 karesine yerleşip tek kalan d5 piyonunu durdurmak.',
      'Siyahın şah kanadındaki ilerleyişini zayıflığa çevirmek: **23.h3** ile h4 piyonunu dondurup **29.Qxh4** ile almak, ardından **30.g4** ile şah kanadını kapatmak.',
      'Piyon fazlası sağlandıktan sonra vezir değişimi teklif ederek (37.Qf5) ya da geçer a-piyonunu yürüterek (41.a4) oyunu sadeleştirmek.',
    ] },
    black: { title: 'Siyahın planı: şah kanadında karşı oyun ve yapıyı çözmek', points: [
      'Taşları şah kanadına toplamak: **9...Re8, 10...Nf8, 11...Ng6, 12...Bd6**. Klasik Karlsbad manevrası; at g6’dan f4 ve h4 karelerine, fil h2’ye bakar.',
      'b4-b5’e karşı nasıl alacağını seçmek: **14...bxc6** ile c6’da geri kalmış piyonu ya da **14...Bxc6** ile tek kalmış d5’i kabul etmek. Keres ikincisini seçti.',
      '...h5-h4 ile şah kanadında alan kazanıp Beyaz şahını rahatsız etmek; ancak bu piyonlar ileri gittikçe kendileri de hedef olur.',
      'Zayıflık kalıcı olmadan **...c5** ile piyon yapısını çözmek; bunun için önce b-hattındaki kaleleri değişmek (24...Rxb7, 25...c5).',
      'Taş değişimleriyle baskıyı azaltmak (ChessBase’in azınlık saldırısı dersindeki önerilerden biri) ve kalan taşlarla c-hattında aktif olmak (27...Rc8, 29...Rc4).',
      'Daha sade bir alternatif: ...Ne4 ile e4 karesini almak ve filleri değiştirip baskının hızını kesmek (11...Ne4 ya da 12...Ne4). Keres bunu oynamadı.',
    ] },
  },
  critical: [
    { move: '6w', title: 'Karlsbad yapısı kuruluyor', text: '6.cxd5 iki işi birden yapar. Önce, 6.Nf3 Qa5 ile gelecek Cambridge Springs savunmasını önler: Siyahın veziri a5’ten c3’teki atı ve g5’teki fili bağlayarak karşı oyun arayamaz. Sonra piyon yapısını kalıcı olarak belirler: Beyazın d4-e3, Siyahın c6-d5 piyonları. Açık c-hattı Beyazın, yarı açık e-hattı Siyahın. Bu yapıda Beyazın en bilinen planı azınlık saldırısıdır ve maçın geri kalanı bu planın uygulamasıdır.' },
    { move: '12w', title: '12.b4: azınlık saldırısı başlıyor', text: 'İki piyon üç piyona saldırır. Amaç piyon kazanmak değil, b5xc6 değişiminden sonra Siyahın yapısında kalıcı bir zayıflık bırakmaktır. Motor 12.b4’ü pozisyonun en iyi hamlesi olarak gösteriyor (Motor: +0.4). Rab1 kalesi piyonu arkadan destekler; b-hattı açıldığında kale ilk girecek taş olur.' },
    { move: '13b', title: '13...Bd7: kaçan zamanlama', text: 'Siyah c6’yı fille korumaya hazırlanır, ama g5’teki fili kovmayı ihmal eder. Motor 13...h6! 14.Bxf6 Qxf6 15.bxc6 bxc6 ile Siyahın neredeyse eşit kaldığını gösteriyor (Motor: +0.1); oyundaki 13...Bd7 sonrası değer +0.9’a çıkıyor. Fark şu: h6 ile Beyazın fili hemen kararını vermek zorunda kalır ve Siyahın veziri f6’da aktifleşir.' },
    { move: '14b', title: '14...Bxc6: d5 yalnız kaldı', text: '14...bxc6 ile c6 geri kalmış piyon olurdu; Keres filiyle alıp yapıyı korudu ama bu kez d5 piyonu tek kaldı (yanında c ve e piyonu yok). chessgames.com’daki yorumculardan biri, Smislov’un kendisinin de 14...Bxc6’yı daha iyi bulduğunu aktarıyor; motor ise 14...bxc6’yı biraz tercih ediyor (Motor: +0.75 / +0.90). Azınlık saldırısı her iki durumda da bir hedef yaratır; fark, hedefin c6 mı d5 mi olduğudur.' },
    { move: '17w', title: '17.Bb5!: savunucuyu değiştirmek', text: 'd5’in iki savunucusu vardı: f6’daki at ve c6’daki fil. Smislov atı 16.Bxf6 ile aldı, şimdi de 17.Bb5 ile fili değişmeyi teklif eder. Fil değişilince d5’i koruyabilecek tek küçük taş kalmaz ve c6’dan b-piyonu ile geri alınca da c6 yeniden zayıf bir piyon olur. chessgames.com yorumlarında bu hamle “öğretici 17.Bb5!” diye anılıyor.' },
    { move: '22w', title: '22.Rb7: yedinci yatay', text: 'Kale b-hattından yedinci yataya girer: a7’ye ve e7 atına baskı yapar, Siyah taşlarını pasif savunmaya zorlar. Azınlık saldırısının açtığı b-hattının ödülü budur. Motor 22.Nf4, 22.Rb7 ve 22.h3’ü neredeyse eşit görüyor (Motor: +1.1–1.2); Rb7 en doğal ve en zorlayıcı olanıdır.' },
    { move: '24w', title: '24.Rcb1?: Siyaha nefes aldıran hamle', text: 'Beyaz b-hattını ikiye katlamak ister ama c1’deki kaleyi c-hattından çekmek, Siyaha 24...Rxb7 25.Rxb7 c5! kurtuluşunu verir. Daha güçlüsü 24.Rxb8+ Qxb8 25.Nf4 idi (Motor: +1.2): kale c1’de kalınca 25...c5 26.Rxc5 ile piyon düşer (Motor: +2.2), Siyah da c6’ya bağlı kalırdı. Oyundaki hamleden sonra değer +0.4’e iner; Smislov’un maçtaki tek ciddi isabetsizliği budur.' },
    { move: '28b', title: '28...Bc3: hangi piyon gidecek?', text: '28.Nb3’ten sonra a5 ve h4 piyonları aynı anda saldırı altında. Keres 28...Bc3 ile a5’i korudu, h4’ü bıraktı. Motor 28...Rc2! 29.Qxa5 g6 ile kalenin ikinci yataya girmesini tercih ediyor (Motor: +0.65); oyunda 29.Qxh4 sonrası Beyaz rahatça bir piyon önde (Motor: +1.25). Aktif kale çoğu zaman bir piyondan daha değerlidir.' },
    { move: '36b', title: '36...Qf6?: d5 korumasız kaldı', text: 'Vezir d6’dan ayrılınca d5 piyonunun tek savunucusu gider. 37.Qxd5! ile Beyaz üçüncü piyonu hemen alabilirdi (Motor: +5.4); 37...Qxf3?? ise 38.Qxf3 ile vezir kaybettirir, çünkü d5’teki vezir f3’ü korur. Smislov 37.Qf5 ile vezir değişimini teklif etti (Motor: +2.9); bu da kazanıyordu ve Keres’in 37...Qc6 ile değişimden kaçması işini kolaylaştırmadı.' },
  ],
  lessons: [
    'Karlsbad yapısında Beyazın klasik planı: **Rab1, b4, b5**. İki piyon, üç piyonluk zinciri bozmaya yeter; amaç piyon kazanmak değil, kalıcı bir zayıflık yaratmaktır.',
    'b5xc6 değişiminden sonra Siyah ya **c6’da geri kalmış piyon** ya da **tek kalmış d5** ile kalır. Hangisini seçeceği, taşlarının bu zayıflığı ne kadar iyi savunabileceğine bağlıdır.',
    'Zayıf piyonun **savunucularını değişmek** (burada f6’daki at ve c6’daki fil) baskıyı en hızlı artıran yoldur. Bir piyona saldıran taş sayısını artırmak kadar, savunan taş sayısını azaltmak da önemlidir.',
    'Açılan b-hattından **yedinci yataya** giren kale Siyahın taşlarını bağlar. Ama kaleleri hattan çekerken dikkat: 24.Rcb1 c-hattını bıraktığı için Siyaha ...c5 kurtuluşunu verdi.',
    'Şah kanadında piyon ilerletmek (...h5-h4) karşı oyun yaratabilir, ama piyonlar ileri gittikçe korunması zorlaşır. Rakip h3 ile durdurduğunda h4 bir hedefe dönüşür.',
    'Pasif savunmada ...c5 gibi kurtarıcı bir kırılma çoğu zaman yeni zayıflıklar doğurur (a5 ve d5 yalnız kaldı). Kırılmanın bedelini önceden hesaplayın.',
    'Kazanılmış pozisyonda en basit yol çoğu zaman en iyisidir: piyonları birer birer toplayıp, vezir değişimini teklif etmek ve geçer piyonu yürütmek.',
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkezde e5 ve c5 karelerini kontrol eder ve vezir piyonu açılışlarını seçer.',
      amac: 'Merkezde yer almak ve c4 ile Vezir Gambiti yapısına geçmek.',
      neden: 'Smislov hem 1.e4 hem 1.d4 oynayan, konumsal tarzı güçlü bir oyuncuydu. d4 açılışları uzun vadeli yapı planlarına (burada azınlık saldırısına) uygun pozisyonlar verir.',
      diger: [
        { move: '1.e4', text: 'Motorun hafif tercihi (Motor: +0.4). Daha açık oyunlara gider; Smislov da sık oynardı.' },
        { move: '1.Nf3', text: 'Esnek başlangıç (Motor: +0.2); çoğunlukla aynı Vezir Gambiti yapılarına döner.' },
      ],
    },
    '1b': {
      text: '1...d5 ile Siyah merkezde eşit pay ister ve d4 piyonunun karşısına piyonunu koyar.',
      amac: 'e4 karesini kontrol etmek ve klasik, sağlam bir yapı kurmak.',
      neden: 'Keres çok yönlü bir oyuncuydu; 1...d5 en klasik ve en sağlam cevaptır. Vezir Gambiti Reddi, Siyaha az risk ve sağlam bir piyon zinciri sağlar.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına esnek giriş (Motor: +0.3); Nimzo-Hint ve Kral Hint seçeneklerini açık tutar.' },
        { move: '1...c6', text: 'Slav/Caro-Kann tarzına geçiş (Motor: +0.4); Beyaz 2.e4 ile Caro-Kann’a dönebilir.' },
      ],
    },
    '2w': {
      text: '2.c4 Vezir Gambiti: Beyaz c-piyonunu feda eder gibi yapıp d5’e baskı kurar.',
      amac: 'd5 piyonunu merkezden uzaklaştırmak ya da Siyahı gergin bir pozisyonda d5’i savunmaya zorlamak.',
      neden: '2...dxc4 kabul edilirse Beyaz e4 ile merkezi alır ve piyonu genellikle geri kazanır. c4 aynı zamanda ileride c-hattının açılmasını hazırlar; bu maçta 6.cxd5 ile o hat açılacak.',
      diger: [
        { move: '2.Nf3', text: 'Sakin gelişim (Motor: +0.2); c4’ü bir hamle sonraya bırakır.' },
        { move: '2.Bf4', text: 'Londra Sistemi tarzı (Motor: +0.2); 1948’de nadirdi ve d5’e baskı kurmaz.' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah gambiti reddeder ve d5’i e-piyonuyla korur.',
      amac: 'Merkezdeki d5 piyonunu sağlam tutmak ve f8 filine yol açmak.',
      neden: 'Vezir Gambiti Reddi’nin temel hamlesi. Bedeli c8 filinin e6 piyonunun arkasında kalmasıdır; bu yüzden ileride exd5 ile o filin önünün açılması Siyahın işine yarar.',
      diger: [
        { move: '2...c6', text: 'Slav Savunması (Motor: +0.3); c8 filini kapatmadan d5’i korur.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü (Motor: +0.3); Siyah merkezi bırakıp hızlı gelişim arar.' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile at d5’e üçüncü kez baskı yapar ve e4 karesini kontrol eder.',
      amac: 'Gelişirken d5 üzerindeki gerginliği artırmak; Bg5 ile f6 atını bağlamaya hazırlanmak.',
      neden: 'Nc3 sonrası Beyazın e4 ve cxd5 planlarının ikisi de güçlenir. Motor 3.Nf3’ü çok az tercih ediyor; fark önemsiz.',
      diger: [
        { move: '3.Nf3', text: 'Motorun hafif tercihi (Motor: +0.4); daha esnek, ama Beyaz 3...Bb4 ile Ragozin’e ya da 3...dxc4 ile Kabul’e izin verir.' },
        { move: '3.cxd5', text: 'Değişimi hemen yapmak (Motor: +0.1); Siyah ...exd5 ile filine yol açar ve Beyazın seçenekleri azalır.' },
      ],
    },
    '3b': {
      text: '3...Nf6 ile Siyah gelişir, d5’i bir kez daha korur ve e4 karesini kontrol eder.',
      amac: 'Kısa rok için hazırlık ve merkez kontrolü.',
      neden: 'En doğal hamle. Buna karşı Beyazın Bg5 ile atı bağlaması klasik devamdır; bağlanma d5 üzerindeki savunmayı zayıflatır.',
      diger: [
        { move: '3...Be7', text: 'Alekhin’in sevdiği hamle sırası; Beyazın Bg5 bağlamasını önceden önler (Motor: +0.4).' },
        { move: '3...Bb4', text: 'Nimzo-Hint’e yakın bir kurulum (Motor: +0.4); c3 atını bağlar.' },
      ],
    },
    '4w': {
      text: '4.Bg5 fil f6 atını bağlar: at kalkarsa d8’deki vezir saldırı altında kalır.',
      amac: 'd5’i savunan f6 atını etkisizleştirmek ve ileride Bxf6 ile d5’in savunucusunu almak.',
      neden: 'Klasik Ortodoks hamlesi. Bu fil maçın 16. hamlesinde Bxf6 ile tam da bu amaca hizmet edecek: d5’i koruyan atı ortadan kaldırmak.',
      diger: [
        { move: '4.cxd5', text: 'Değişimi önce yapmak (Motor: +0.4); Siyahın ...c5 gibi seçeneklerini daraltır.' },
        { move: '4.Nf3', text: 'Esnek gelişim (Motor: +0.3); Siyah 4...c5 ile Yarı Tarrasch’a gidebilir.' },
      ],
    },
    '4b': {
      text: '4...c6 ile d5 bir kez daha korunur; Siyah esnek, Slav’a benzeyen bir kurulum seçer.',
      amac: '5...Nbd7 ve ...Qa5 ile Cambridge Springs savunmasına ya da sağlam Ortodoks kurulumlarına hazırlanmak.',
      neden: 'c6 hem d5’i destekler hem de vezire a5 karesini açar. Bedeli, c6 piyonunun azınlık saldırısında hedef olabilmesidir. Motor 4...Be7’yi biraz daha sağlam buluyor.',
      diger: [
        { move: '4...Be7', text: 'Ortodoks Savunma’nın ana yolu (Motor: +0.25); bağlanmayı hemen çözer.' },
        { move: '4...Nbd7', text: 'Klasik kurulum; ünlü “Elephant Trap” (5.cxd5 exd5 6.Nxd5?? Nxd5! 7.Bxd8 Bb4+) ile tanınır.' },
      ],
    },
    '5w': {
      text: '5.e3 ile d4 desteklenir, f1 filine yol açılır.',
      amac: 'Sağlam bir merkez kurup Bd3, Nf3 ve kısa rok ile gelişimi tamamlamak.',
      neden: 'Karlsbad yapısında Beyazın e3-d4 zinciri hem sağlam hem esnektir; ileride e4 kırılması da mümkün olur. Motor bu hamleyi en iyi olarak gösteriyor (Motor: +0.4).',
      diger: [
        { move: '5.cxd5', text: 'Değişimi hemen yapmak (Motor: +0.4); oyundakine çok benzer pozisyonlara gider.' },
        { move: '5.Nf3', text: 'Gelişim (Motor: +0.4); Siyah 5...h6 ya da 5...dxc4 ile Botvinnik/Moskova sistemlerine girebilir.' },
      ],
    },
    '5b': {
      text: '5...Nbd7 ile at d7’ye çıkar ve f6 atını destekler.',
      amac: '6.Nf3 gelirse 6...Qa5 ile Cambridge Springs savunmasına girmek: vezir c3 atını ve g5 filini bağlar.',
      neden: 'Cambridge Springs 1940’larda popülerdi ve Beyaz için can sıkıcı olabiliyordu. 5...Nbd7 bu tehdidi taşırken sağlam bir yapı da korur.',
      diger: [
        { move: '5...Be7', text: 'Ortodoks yol (Motor: +0.4); Cambridge Springs seçeneğinden vazgeçer.' },
        { move: '5...h6', text: 'Fili sormak (Motor: +0.4); 6.Bh4 ya da 6.Bxf6 kararını hemen zorlar.' },
      ],
    },
    '6w': {
      text: '6.cxd5! Değişim. Karlsbad yapısı ortaya çıkıyor: Beyazın d4-e3, Siyahın c6-d5 piyonları.',
      amac: 'Cambridge Springs’i önlemek ve piyon yapısını azınlık saldırısına uygun hale getirmek.',
      neden: 'cxd5 sonrası ...Qa5 artık tehlikeli değildir çünkü c-hattı açık ve Beyazın Bd3, Qc2 gelişimi doğaldır. Yapı kalıcıdır: Beyazın vezir kanadında 2’ye 3 piyonu var ve b4-b5 kırılması planın kendisi olacak.',
      diger: [
        { move: '6.Nf3', text: 'Siyaha 6...Qa5 ile Cambridge Springs’e izin verir; 7.Nd2 Bb4 gibi keskin teorik yollar başlar.' },
        { move: '6.a3', text: 'Önce Bb4 ve Qa5 fikirlerini önlemek (Motor: +0.3); daha yavaş.' },
      ],
    },
    '6b': {
      text: '6...exd5 ile Siyah piyonla alır: c8 filinin önü açılır, e-hattı yarı açılır.',
      amac: 'Merkezdeki d5 piyonunu tutmak ve filin hareketlenmesini sağlamak.',
      neden: '6...cxd5 simetrik bir yapı verirdi ama Siyahın c8 fili kapalı kalırdı. 6...Nxd5 de mümkündü ama merkezi bırakır. exd5, Karlsbad yapısının tanımıdır.',
      diger: [
        { move: '6...cxd5', text: 'Simetrik yapı (Motor: +0.5); e6 piyonu c8 filini kapatmaya devam eder.' },
        { move: '6...Nxd5', text: 'Merkezi bırakır; Beyaz e4 ile alan kazanır.' },
      ],
    },
    '7w': {
      text: '7.Bd3 fil d3’ten h7 ve f5 karelerine bakar.',
      amac: 'Kısa roka hazırlanmak ve Siyahın açık kareli filinin en iyi karesi olan f5’i kontrol etmek.',
      neden: 'Karlsbad yapısında Beyazın açık kareli fili için d3 standart karedir. Qc2 ile birlikte h7’ye baskı kurar ve ...Bf5 değişim teklifini engeller. Motor en iyi hamle olarak gösteriyor (Motor: +0.4).',
      diger: [
        { move: '7.Qc2', text: 'Önce vezir (Motor: +0.3); ...Bf5 fikrini daha erken durdurur.' },
        { move: '7.Nf3', text: 'Gelişim (Motor: +0.3); ...Ne4 fikirlerine karşı daha az kontrol.' },
      ],
    },
    '7b': {
      text: '7...Be7 ile Siyah bağlanmayı çözmeye ve rok yapmaya hazırlanır.',
      amac: 'Kısa rok ve d8-e7 hattındaki bağlantıyı kaldırmak.',
      neden: 'Be7 sağlam ve klasik bir karedir; f6 atını destekler. Bedeli, filin pasif olmasıdır; ileride Keres onu d6’ya getirip h2’ye bakmasını sağlayacak.',
      diger: [
        { move: '7...Bd6', text: 'Daha aktif kare (Motor: +0.5) ama Bg5 bağlaması devam eder.' },
        { move: '7...Nb6', text: 'Atı c4’e götürme fikri (Motor: +0.5); vezir kanadına karşı oyun.' },
      ],
    },
    '8w': {
      text: '8.Nf3 ile at gelişir; e5 ve d4 karelerini kontrol eder.',
      amac: 'Kısa roku tamamlayıp vezir kanadı planına geçmek.',
      neden: 'Nf3, azınlık saldırısının klasik kurulumudur. Alternatif 8.Nge2 ise Botvinnik’in sevdiği f3 ve e4 planına hazırlıktır; lichess’teki Karlsbad yazısında belirtildiği gibi e4 kırılması at e2’de ve piyon f3’teyken daha iyi çalışır. Smislov vezir kanadında oynamayı seçtiği için Nf3 mantıklıdır.',
      diger: [
        { move: '8.Nge2', text: 'Merkez planı: f3 ve e4 (Motor: +0.3); bambaşka bir oyun karakteri.' },
        { move: '8.h3', text: 'Motorun tercihi (Motor: +0.5); ...Ng4 ve ...Bg4 fikirlerini önler, fil için h2’de kaçış karesi hazırlar.' },
      ],
    },
    '8b': {
      text: '8...O-O ile Siyah şahını güvenceye alır.',
      amac: 'Gelişimi tamamlamak ve kaleleri birbirine bağlamak.',
      neden: 'Doğal hamle. 8...h6 ile fili önce sormak da mümkündü; Keres rokla esnekliği korudu.',
      diger: [
        { move: '8...h6', text: 'Fili sormak (Motor: +0.4); 9.Bf4 ile fil iyi bir kareye geçer.' },
        { move: '8...Ne4', text: 'Taş değişimleriyle rahatlamak (Motor: +0.4); Karlsbad’da Siyahın tipik fikri.' },
      ],
    },
    '9w': {
      text: '9.Qc2 ile vezir c-hattına geçer, h7’ye baskı yapar ve e4/f5 karelerini kontrol eder.',
      amac: 'Bd3 ile birlikte h7’ye çift baskı kurmak ve Rab1 için birinci yatayı boşaltmak.',
      neden: 'Qc2, Karlsbad yapısında Beyazın standart vezir karesidir: hem ...Bf5’i engeller hem de c-hattında baskı hazırlar. Motor 9.h3’ü biraz tercih ediyor.',
      diger: [
        { move: '9.h3', text: 'Motorun tercihi (Motor: +0.4); ...Ng4 ve ...Bg4 fikirlerini önler.' },
        { move: '9.O-O', text: 'Önce rok (Motor: +0.3); 9...h6 10.Bf4 Nh5 fikri gelir.' },
      ],
    },
    '9b': {
      text: '9...Re8 ile kale e-hattına çıkar ve f8 karesini boşaltır.',
      amac: '...Nf8-g6 manevrasına yer açmak ve yarı açık e-hattında baskı kurmak.',
      neden: 'Karlsbad yapısında Siyahın klasik kurulumudur: Re8, Nf8, Ng6. Motor 9...h6’yı biraz daha iyi buluyor çünkü filin kararını önce sormak, Bxf6 ile d5’in savunucusunun değişilmesi seçeneğini Siyah açısından daha uygun bir anda zorlar.',
      diger: [
        { move: '9...h6', text: 'Motorun tercihi (Motor: +0.3); 10.Bh4 Re8 ile benzer oyun ama fil h4’te daha az rahat.' },
        { move: '9...a6', text: 'Vezir kanadını önceden hazırlamak (Motor: +0.5); b5 kırılmasında a-piyonları değişir.' },
      ],
    },
    '10w': {
      text: '10.O-O ile Beyaz rok yapar.',
      amac: 'Şahı güvenceye alıp kaleleri bağlamak; ardından Rab1.',
      neden: 'Kısa rok, azınlık saldırısında doğal tercih. Uzun rok vezir kanadında piyon ilerletmeyi imkânsız hale getirirdi.',
      diger: [
        { move: '10.h3', text: 'Motorun hafif tercihi (Motor: +0.5); fil için h2 karesini hazırlar.' },
        { move: '10.Bf4', text: 'Fili önceden geri çekmek (Motor: +0.3); ...Ne4 sonrası değişimlerden kaçar.' },
      ],
    },
    '10b': {
      text: '10...Nf8 ile at f8 üzerinden g6’ya yola çıkar.',
      amac: 'Atı şah kanadında aktif bir kareye (g6) götürmek; buradan f4, h4 ve e5 karelerine bakacak.',
      neden: 'd7’deki at başka bir iş yapmıyordu; Karlsbad yapısının en tipik Siyah manevrasıdır. Ancak motor 10...a5 ya da 10...g6 ile biraz daha esnek oyunu tercih ediyor; at g6’dayken Bxf6 sonrası d5 bir savunucusunu kaybeder.',
      diger: [
        { move: '10...a5', text: 'b4’ü önceden zorlaştırmak (Motor: +0.5); azınlık saldırısını yavaşlatır.' },
        { move: '10...h6', text: 'Fili sormak (Motor: +0.5); 11.Bf4 Nh5 12.Be5 gibi devamlar.' },
      ],
    },
    '11w': {
      text: '11.Rab1: azınlık saldırısı ilan edildi. Kale b4-b5 piyonlarını arkadan destekler.',
      amac: 'b4 ve b5 ile Siyahın a7-b7-c6 piyonlarına saldırmak; b-hattı açılınca kaleyi hazır tutmak.',
      neden: 'Smislov planını açıkça ilan eder. a3 ile b4’ü desteklemek de mümkündü (Petrosyan’ın tercih ettiği yol), ama Rab1 bir tempo kazandırır ve kaleyi b-hattına önceden koyar. Motor 11.h3’ü biraz tercih ediyor; fark küçük.',
      diger: [
        { move: '11.h3', text: 'Motorun tercihi (Motor: +0.5); önce şah kanadı güvenliği.' },
        { move: '11.a3', text: 'b4’ü piyonla desteklemek (Motor: +0.4); daha yavaş ama sağlam.' },
      ],
    },
    '11b': {
      text: '11...Ng6 ile at hedef karesine ulaşır; f4 ve h4 karelerine bakar.',
      amac: 'Şah kanadında karşı oyun hazırlamak; ...Bd6 ile h2’ye baskı.',
      neden: 'Plan tutarlı ama yavaş. Motor 11...Ne4! ile değişimleri tercih ediyor: 12.Bxe7 Qxe7 sonrası Siyahın en kötü küçük taşı değişilir ve ChessBase’in azınlık saldırısı dersinde önerildiği gibi taş değişimleri baskıyı azaltır.',
      diger: [
        { move: '11...Ne4', text: 'Motorun tercihi (Motor: +0.3); 12.Bxe7 Qxe7 13.Nd2 Nxd2 ile rahat Siyah.' },
        { move: '11...a5', text: 'b4’ü önceden engellemek; a-piyonu b4 kırılmasını pahalı hale getirir.' },
      ],
    },
    '12w': {
      text: '12.b4! Azınlık saldırısı başladı. b-piyonu b5’e yürüyecek.',
      amac: 'b5 ile c6’ya saldırmak ve değişimden sonra Siyahın yapısında kalıcı bir zayıflık bırakmak.',
      neden: 'Rab1 tamamlandı, şimdi zamanı geldi. Motor bu pozisyonda en iyi hamleyi b4 olarak gösteriyor (Motor: +0.4). Beyaz şah kanadında bir şey yapmıyor; bütün enerjisini vezir kanadına harcıyor.',
      diger: [
        { move: '12.Bxf6', text: 'd5’in savunucusunu hemen almak (Motor: +0.3); acele, b4-b5 hazırlığı daha önemli.' },
        { move: '12.h3', text: 'Önce şah kanadı (Motor: +0.2); ...Ne4 ile Siyah rahatlar.' },
      ],
    },
    '12b': {
      text: '12...Bd6 ile fil d6’ya geçer; h2’ye bakar.',
      amac: 'Şah kanadında karşı oyun: fil ve g6’daki at Beyaz şahını hedefler.',
      neden: 'Keres karşı oyunla cevap vermek ister ama vezir kanadını savunmasız bırakır. Motor 12...Ne4! (Motor: +0.3) ya da 12...a6 (Motor: +0.35) ile vezir kanadını önce güvenceye almayı öneriyor; oyundaki hamleden sonra değer +0.65’e çıkıyor.',
      diger: [
        { move: '12...a6', text: 'b5’i önceden yavaşlatmak (Motor: +0.35); b5 kırılmasında a-piyonları değişir ve c6 tek zayıflık olur.' },
        { move: '12...Ne4', text: 'Taş değişimi (Motor: +0.3); 13.Bxe7 Qxe7 ile Siyahın pasif fili gider.' },
      ],
    },
    '13w': {
      text: '13.b5 ile piyon c6’ya saldırır. Siyah ya bxc6 ya da cxb5 ile yapısını değiştirmek zorunda.',
      amac: 'c6 piyonunu değişime zorlayıp Siyahın piyon zincirinde zayıflık yaratmak.',
      neden: 'Planın tutarlı devamıdır. Motor 13.Rfe1 ve 13.h3’ü biraz tercih ediyor, ama 13.b5 ile Smislov Siyaha zaman vermez. Siyahın ...a6 ile b5’i durdurma fırsatını da ortadan kaldırır.',
      diger: [
        { move: '13.Rfe1', text: 'Motorun tercihi (Motor: +0.4); merkezi önce güçlendirir.' },
        { move: '13.h3', text: 'Şah kanadını güvenceye almak (Motor: +0.35); 13...h6 14.Bxf6 Qxf6 15.e4 ile merkez planı.' },
      ],
    },
    '13b': {
      text: '13...Bd7 ile Siyah c6’yı fille korumaya hazırlanır.',
      amac: 'bxc6 sonrası filiyle alıp yapıyı korumak ve c6’da geri kalmış piyondan kaçmak.',
      neden: 'Keres bxc6 bxc6’yı istemiyor. Ama motor 13...h6! ile önce fili kovmayı öneriyor: 14.Bxf6 Qxf6 15.bxc6 bxc6 (Motor: +0.1) ile vezir f6’da aktifleşir. Oyundaki hamle değeri +0.9’a çıkarır; bu maçın ilk ciddi isabetsizliğidir.',
      diger: [
        { move: '13...h6', text: 'Motorun tercihi (Motor: +0.15); Beyazın filini karar vermeye zorlar.' },
        { move: '13...cxb5', text: 'Beyaz Nxb5 ile alır; d5 tek kalır, b7 de açık b-hattında hedef olur.' },
        { move: '13...Be6', text: 'Fili e6’ya koymak (Motor: +0.8); 14.bxc6 bxc6 ile c6 zayıf kalır.' },
      ],
    },
    '14w': {
      text: '14.bxc6 değişim; b-hattı açılıyor.',
      amac: 'Siyahı alım kararı vermeye zorlamak ve b-hattını kale için açmak.',
      neden: 'Motorun ilk tercihi de bu (Motor: +1.0). b5’i yerinde bırakmak Siyaha ...cxb5 ya da ...c5 ile zayıflığı çözme şansı verirdi.',
      diger: [
        { move: '14.e4', text: 'Merkezi açmak (Motor: +0.9); planı karıştırır.' },
        { move: '14.h3', text: 'Bekleme (Motor: +0.8); Siyah 14...cxb5 ile çözülebilir.' },
      ],
    },
    '14b': {
      text: '14...Bxc6 ile Keres filiyle alır. c6’da geri kalmış piyon yok, ama d5 artık yanında piyonu olmayan tek bir piyon.',
      amac: 'Piyon yapısını sağlam tutmak ve filiyle d5’i korumak.',
      neden: 'chessgames.com yorumcuları bunu “daha az yaygın” buluyor: normalde Siyah piyonla alır çünkü filiyle almak bir yerine iki zayıf piyon (d5 ve b7/a7) bırakır. Aynı sayfada bir yorumcu Smislov’un 14...Bxc6’yı daha iyi bulduğunu aktarıyor. Motor ise 14...bxc6’yı biraz tercih ediyor (Motor: +0.75 / +0.9).',
      diger: [
        { move: '14...bxc6', text: 'Motorun tercihi (Motor: +0.75); c6 geri kalmış piyon olur ama yapı daha kompakttır.' },
        { move: '14...Bg4', text: 'Hata: 15.cxb7 Rb8 16.Bxf6 gxf6 ile Beyazın b7’de güçlü bir piyonu kalır (Motor: +3.6).' },
      ],
    },
    '15w': {
      text: '15.Qb3 vezir b-hattına geçer: d5 ve b7’ye çift baskı.',
      amac: 'Açılan b-hattını vezir ve kaleyle doldurmak; b7 ve d5 zayıflarını hedeflemek.',
      neden: 'Motor da bu hamleyi seçiyor (Motor: +0.95). Vezir b3’ten b7’ye bakar; Siyah b7’yi kaleyle ya da vezirle korumak zorunda kalır. Aynı zamanda d5’e de baskı yapar.',
      diger: [
        { move: '15.Nb5', text: 'At c7’ye gitmek ister (Motor: +0.65); 15...Bb8 ile Siyah sağlamlaşır.' },
        { move: '15.Rfc1', text: 'c-hattı (Motor: +0.6); b-hattında baskı daha etkili.' },
      ],
    },
    '15b': {
      text: '15...Be7 ile fil e7’ye geri döner; f6 atını destekler.',
      amac: 'Bxf6 sonrası filiyle geri alıp piyon yapısını bozmamak.',
      neden: 'Bxf6 tehdidine karşı hazırlık. Motor 15...Re6 (Motor: +0.95) ya da 15...a5 ile daha aktif oyunu tercih ediyor; geri çekilme Siyahın şah kanadı planından vazgeçtiğini gösteriyor.',
      diger: [
        { move: '15...Re6', text: 'Kaleyi altıncı yataya getirmek (Motor: +0.95); b6 ve c6’yı savunabilir.' },
        { move: '15...a5', text: 'a-piyonunu kurtarmak (Motor: +1.0); 16.Bxf6 Qxf6 17.Nxd5 ile Beyaz piyon kazanır.' },
      ],
    },
    '16w': {
      text: '16.Bxf6 ile Beyaz d5’in birinci savunucusunu, f6 atını değişir.',
      amac: 'd5’i koruyan taş sayısını azaltmak.',
      neden: 'Bu, azınlık saldırısının ikinci aşamasıdır: zayıflık yaratıldıktan sonra savunucularını değişmek. Motorun birinci sırası bu (Motor: +1.1). Beyazın bu fili kendisi için çok değerli değil; d5 zayıflığı ise kalıcı.',
      diger: [
        { move: '16.Bb5', text: 'Önce fil değişimi teklifi (Motor: +1.1); oyundakine benzer.' },
        { move: '16.h4', text: 'Şah kanadı baskısı (Motor: +1.1); g6 atını kovma fikri.' },
      ],
    },
    '16b': {
      text: '16...Bxf6 ile Siyah filiyle alır; fil d4’e ve uzun çapraza bakar.',
      amac: 'Piyon yapısını korumak ve fili aktif tutmak.',
      neden: 'Zorunluya yakın: 16...gxf6 şah kanadını zayıflatırdı (Motor: +1.8) ve 16...Rc8 gibi bir hamle taş kaybettirir.',
      diger: [
        { move: '16...gxf6', text: 'Şah kanadını açar (Motor: +1.8); Beyazın Bf5 ve Nh4 fikirleri güçlenir.' },
      ],
    },
    '17w': {
      text: '17.Bb5! d5’in ikinci savunucusu c6 filini değişmeyi teklif eder.',
      amac: 'c6’daki fili değişip d5’i küçük taş desteğinden yoksun bırakmak; değişimden sonra c6’da yine zayıf bir piyon yaratmak.',
      neden: 'chessgames.com yorumlarında “öğretici 17.Bb5!” diye anılan hamle. Motor 17.Rfc1’i çok az tercih ediyor (Motor: +1.0 / +0.9); ama fikir aynı. Beyaz önce piyon yapısını bozdu, sonra savunucuları birer birer değişiyor.',
      diger: [
        { move: '17.Rfc1', text: 'Motorun tercihi (Motor: +1.0); önce kaleyi c-hattına getirmek.' },
        { move: '17.g3', text: 'Siyah atın f4’e gelmesini önlemek (Motor: +0.8).' },
      ],
    },
    '17b': {
      text: '17...Qd6 ile vezir d5’i korur ve h2’ye bakar.',
      amac: 'd5’i savunmak ve şah kanadında bir saldırı potansiyeli bırakmak.',
      neden: 'Vezir d6’da hem merkezi hem de şah kanadını gözetler. Ama motor 17...Rc8 (Motor: +0.9) ya da 17...Nh4 ile daha iyi savunma öneriyor; Qd6 sonrası değer +1.3’e çıkıyor.',
      diger: [
        { move: '17...Rc8', text: 'Motorun tercihi (Motor: +0.9); c-hattını kontrol eder.' },
        { move: '17...Nh4', text: 'At değişimi teklifi (Motor: +0.9); 18.Nxh4 Bxh4 ile Beyazın şah kanadı savunucusu gider.' },
      ],
    },
    '18w': {
      text: '18.Rfc1 ile kale c-hattına geçer; c6 üzerinde baskı.',
      amac: 'c-hattını kontrol etmek ve c6’daki fil ile c7 karesine baskı yapmak.',
      neden: 'Motor bu hamleyi onaylıyor (Motor: +1.1). Bxc6 değişiminden sonra c-hattında kale, geri kalmış c6 piyonunun karşısında ideal yerde olacak.',
      diger: [
        { move: '18.Bxc6', text: 'Değişimi hemen yapmak (Motor: +1.05); 18...bxc6 19.Qb7 ile baskı.' },
        { move: '18.Qa4', text: 'Vezir a4’e (Motor: +1.0); c6 ve a7’ye baskı.' },
      ],
    },
    '18b': {
      text: '18...h5 ile Siyah şah kanadında karşı oyun arar.',
      amac: '...h4 ile Beyazın şah kanadında alan kazanmak ve g3’ü zayıflatmak.',
      neden: 'Keres pasif savunmadan kaçınmak istiyor. Motor 18...Be7 (Motor: +1.0) ile daha sağlam oyunu tercih ediyor; h-piyonunun ileri gitmesi ileride onu bir hedefe dönüştürecek.',
      diger: [
        { move: '18...Be7', text: 'Motorun tercihi (Motor: +1.0); 19.Na4 Rab8 20.Nc5 ile benzer baskı.' },
        { move: '18...Reb8', text: 'b-hattını savunmak (Motor: +1.2); 19.Qa4 Qd7.' },
      ],
    },
    '19w': {
      text: '19.Ne2 ile at e2’den d4 ve f4’e gidebilir.',
      amac: 'd5’e baskı yapmak ve şah kanadını savunmak; ileride d4 karesine yerleşmek.',
      neden: 'Motor en iyi hamle olarak gösteriyor (Motor: +1.15). At c3’te pek bir işe yaramıyordu; e2’den d4 ve f4 kareleri hem d5 blokajı hem de şah kanadı savunması sağlar.',
      diger: [
        { move: '19.Bxc6', text: 'Değişim (Motor: +1.1); 19...bxc6 20.Qb7 ile baskı.' },
        { move: '19.Qc2', text: 'Vezir geri döner (Motor: +1.0); daha pasif.' },
      ],
    },
    '19b': {
      text: '19...h4 ile h-piyonu ilerler.',
      amac: 'h3 ile Beyaz şahını rahatsız etmek ve g3’ü zayıflatmak.',
      neden: 'Karşı oyun arayışı. Motor 19...Rec8 (Motor: +1.0) ile c-hattını kontrol etmeyi tercih ediyor; h4 piyonu daha sonra 29.Qxh4 ile alınacak.',
      diger: [
        { move: '19...Rec8', text: 'Motorun tercihi (Motor: +1.0); c-hattını kontrol eder.' },
        { move: '19...Rac8', text: 'Benzer fikir (Motor: +1.0); kale c-hattına.' },
      ],
    },
    '20w': {
      text: '20.Bxc6 ile d5’in son küçük taş savunucusu gider.',
      amac: 'Siyahın d5’i koruyabilecek fili yok etmek ve c6’da yeni bir zayıflık yaratmak.',
      neden: 'Planın tutarlı devamı. Motor 20.h3’ü çok az tercih ediyor (Motor: +1.1); fark önemsiz.',
      diger: [
        { move: '20.h3', text: 'Motorun hafif tercihi (Motor: +1.1); h4 piyonunu önceden dondurur.' },
        { move: '20.Qa4', text: 'Vezir a4’e (Motor: +1.1); oyundakine benzer.' },
      ],
    },
    '20b': {
      text: '20...bxc6 zorunlu geri alım. Şimdi c6 geri kalmış ve b-hattı tamamen açık.',
      neden: 'Başka bir alım yok; 20...Rxe3?? gibi hamleler Beyazın Qxb7 ile ezici üstünlüğüne yol açar (Motor: +5.8).',
    },
    '21w': {
      text: '21.Qa4 ile vezir a4’ten c6 ve a7’ye saldırır.',
      amac: 'Siyahın iki zayıf piyonu (a7 ve c6) üzerinde aynı anda baskı kurmak.',
      neden: 'Motorun ilk tercihi de bu (Motor: +1.0). Vezir b-hattını kaleye bırakır ve kendisi zayıf piyonlara yüklenir.',
      diger: [
        { move: '21.Qb4', text: 'Vezir değişimi teklifi (Motor: +1.0); 21...Qe6 ile Siyah kaçar.' },
        { move: '21.h3', text: 'Önce h4’ü dondurmak (Motor: +0.9).' },
      ],
    },
    '21b': {
      text: '21...Ne7 ile at e7’den c6’yı korur.',
      amac: 'c6 piyonunu savunmak.',
      neden: 'Doğal görünse de pasif bir hamle. Motor 21...Rec8! 22.Rb7 c5 ile aktif oyunu tercih ediyor (Motor: +0.9); Ne7 sonrası değer +1.2’ye çıkıyor.',
      diger: [
        { move: '21...Rec8', text: 'Motorun tercihi (Motor: +0.9); ...c5 ile yapıyı çözmeye hazırlanır.' },
        { move: '21...Rac8', text: 'Benzer fikir (Motor: +0.9).' },
      ],
    },
    '22w': {
      text: '22.Rb7! Kale yedinci yatayda: a7’ye ve e7 atına baskı.',
      amac: 'Siyah taşlarını pasif savunmaya zorlamak.',
      neden: 'Azınlık saldırısının açtığı b-hattının ödülü. Motor 22.Nf4, 22.Rb7 ve 22.h3’ü neredeyse eşit görüyor (Motor: +1.1–1.2); Smislov en doğal planı seçti.',
      diger: [
        { move: '22.Nf4', text: 'Motorun hafif tercihi (Motor: +1.2); d5’e baskı.' },
        { move: '22.h3', text: 'Önce h4’ü dondurmak (Motor: +1.1).' },
      ],
    },
    '22b': {
      text: '22...a5 ile Siyah a-piyonunu ilerleterek kaleden kurtarır.',
      amac: 'a7 piyonunu Rb7 ve Qa4’ün çift saldırısından kurtarmak.',
      neden: 'a7 iki kez saldırı altındaydı. 22...a6 de benzer (Motor: +1.15), ama a5 piyonu ileride Rb5 ile hedef olacak.',
      diger: [
        { move: '22...a6', text: 'Benzer savunma (Motor: +1.15); a6 piyonu daha az saldırıya açık.' },
        { move: '22...g5', text: 'Şah kanadında karşı oyun (Motor: +1.35); şahı açar.' },
      ],
    },
    '23w': {
      text: '23.h3 ile şaha kaçış karesi açılır ve ...h3 ilerleyişi engellenir.',
      amac: 'h4 piyonunu yerinde dondurmak ve birinci yatay matı riskini ortadan kaldırmak.',
      neden: 'h4 piyonu ileride bir hedef olacak; h3 ile onu dondurmak hem güvenlik hem de saldırı hamlesidir. Motor 23.Rc5’i biraz tercih ediyor (Motor: +1.2 / +1.1).',
      diger: [
        { move: '23.Rc5', text: 'Motorun tercihi (Motor: +1.2); a5 ve d5’e baskı.' },
        { move: '23.Nf4', text: 'd5’e baskı (Motor: +1.1).' },
      ],
    },
    '23b': {
      text: '23...Reb8 ile Siyah kaleleri değişerek yedinci yataydaki baskıyı azaltmak ister.',
      amac: 'Beyazın aktif kalesini değişmek.',
      neden: 'Pasif savunmada taş değişimi rahatlatıcıdır. Motor bu hamleyi en iyi olarak gösteriyor (Motor: +1.3, derinlik 20).',
      diger: [
        { move: '23...g6', text: 'Benzer değer (Motor: +1.5); şaha kaçış karesi açar.' },
      ],
    },
    '24w': {
      text: '24.Rcb1? ile Beyaz b-hattını iki kaleyle tutar, ama c-hattını bırakır.',
      amac: 'b-hattındaki kontrolü sürdürmek ve Siyaha kale değişimini zorlaştırmak.',
      neden: 'Bu maçın en önemli isabetsizliği. 24.Rxb8+ Qxb8 25.Nf4 ile kale c1’de kalsaydı Siyah ...c5 oynayamazdı (25...c5 26.Rxc5, Motor: +2.2). Oyunda 24...Rxb7 25.Rxb7 c5! ile Siyah yapısını çözdü ve değer +1.2’den +0.4’e düştü.',
      diger: [
        { move: '24.Rxb8+', text: 'Motorun tercihi (Motor: +1.2); 24...Qxb8 25.Nf4 ile c6 bağlı kalır.' },
        { move: '24.Rb3', text: 'Kaleyi geri çekmek (Motor: +0.65).' },
      ],
    },
    '24b': {
      text: '24...Rxb7 ile Siyah değişir.',
      amac: 'Yedinci yataydaki kaleyi değişip ...c5 için zemin hazırlamak.',
      neden: 'Motor da bu hamleyi seçiyor (Motor: +0.4). 24...g6 gibi bekleyici hamleler 25.Rxb8+ ile Beyaza tekrar avantaj verirdi (Motor: +1.4).',
      diger: [
        { move: '24...g6', text: 'Bekleme (Motor: +1.4); 25.Rxb8+ Rxb8 26.Rxb8+ Qxb8 ile c6 zayıf kalır.' },
      ],
    },
    '25w': {
      text: '25.Rxb7 zorunlu geri alım; kale yine yedinci yatayda.',
      neden: 'Başka hamle yok: 25.Qd1 gibi hamleler 25...Rxb1 ile kale kaybettirir (Motor: −5.9).',
    },
    '25b': {
      text: '25...c5! ile Siyah zayıf c6 piyonunu çözer.',
      amac: 'Geri kalmış c6 piyonunu değişip yapısını rahatlatmak.',
      neden: 'Motorun birinci sırası bu (Motor: +0.3). Bedeli, a5 ve d5 piyonlarının yalnız kalmasıdır. ChessBase’in dersinde de b5 kırılmasına karşı ...c5 ile yapıyı çözme fikri Siyahın temel savunma yöntemlerinden biri olarak anılıyor.',
      diger: [
        { move: '25...g6', text: 'Bekleme (Motor: +0.85); c6 zayıf kalır.' },
        { move: '25...Qd8', text: 'Pasif savunma (Motor: +1.25).' },
      ],
    },
    '26w': {
      text: '26.Rb5 ile kale b5’ten a5, c5 ve d5’e saldırır.',
      amac: 'Siyahın yalnız kalan a5 ve d5 piyonlarını hedeflemek.',
      neden: 'Motor bu hamleyi onaylıyor (Motor: +0.3). 26.dxc5 Qxc5 ile Siyah taşlarını aktifleştirirdi.',
      diger: [
        { move: '26.dxc5', text: 'Değişim (Motor: +0.3); 26...Qxc5 ile Siyah vezir aktifleşir.' },
        { move: '26.Kf1', text: 'Bekleme (Motor: +0.2).' },
      ],
    },
    '26b': {
      text: '26...cxd4 ile Siyah d4’ü değişir.',
      amac: 'Merkezdeki gerginliği çözmek.',
      neden: 'Motor en iyi hamle olarak gösteriyor (Motor: +0.3). 26...Rc8 27.dxc5 Rxc5 28.Rxa5 ile Siyah piyon kaybeder (Motor: +1.2).',
      diger: [
        { move: '26...Rc8', text: 'Piyon kaybettirir (Motor: +1.2).' },
        { move: '26...c4', text: 'Geçer piyon yaratmak (Motor: +1.4); 27.Nc3 ile d5 düşer.' },
      ],
    },
    '27w': {
      text: '27.Nexd4 ile at d4’e yerleşir: d5’in önünde ideal blokaj karesi.',
      amac: 'd5 piyonunu durdurmak ve f3 atını h4’e baskı için yerinde tutmak.',
      neden: 'Motorun ilk tercihi de bu (Motor: +0.45). 27.exd4 ise piyon yapısını simetrik hale getirirdi (Motor: −0.05).',
      diger: [
        { move: '27.Nfxd4', text: 'Diğer at (Motor: +0.25); h4’e baskı kaybolur.' },
        { move: '27.exd4', text: 'Simetrik yapı (Motor: −0.05); d5 artık zayıf değil.' },
      ],
    },
    '27b': {
      text: '27...Rc8 ile kale c-hattını alır.',
      amac: 'Kaleyi aktifleştirmek ve c-hattında karşı oyun aramak.',
      neden: 'Doğal görünse de motor 27...Qa6 (Motor: +0.3) ile a5’i önceden savunmayı öneriyor. Oyundaki hamleden sonra 28.Nb3 ile a5 ve h4 aynı anda saldırı altında kalıyor ve değer +1.1’e çıkıyor.',
      diger: [
        { move: '27...Qa6', text: 'Motorun tercihi (Motor: +0.3); a5’i korur.' },
        { move: '27...Qc7', text: 'Vezir c-hattına (Motor: +0.3); 28.Qc2 ile değişim.' },
      ],
    },
    '28w': {
      text: '28.Nb3 ile at a5’e bakar. Siyahın a5 ve h4 piyonları aynı anda hedef.',
      amac: 'Çift saldırı: Siyah iki piyondan birini kaybedecek.',
      neden: 'Motor da bu hamleyi seçiyor (Motor: +1.1). 28.Ne2 ise daha az zorlayıcı (Motor: +0.45).',
      diger: [
        { move: '28.Ne2', text: 'Daha yavaş (Motor: +0.45).' },
        { move: '28.Rb1', text: 'Kale geri çekilir (Motor: +0.1).' },
      ],
    },
    '28b': {
      text: '28...Bc3 ile fil a5’i korur, ama h4 piyonunu bırakır.',
      amac: 'a5 piyonunu tutmak ve filin aktif çaprazda kalmasını sağlamak.',
      neden: 'Motor 28...Rc2! 29.Qxa5 g6 ile kalenin ikinci yataya girmesini tercih ediyor (Motor: +0.65). Oyunda 29.Qxh4 ile Beyaz bir piyon önde (Motor: +1.25). Aktif kale çoğu zaman bir piyondan daha değerlidir.',
      diger: [
        { move: '28...Rc2', text: 'Motorun tercihi (Motor: +0.65); kale ikinci yatayda aktif.' },
        { move: '28...Qc6', text: 'Vezir c-hattına (Motor: +0.75); 29.Rxa5 Qc2 ile karşı oyun.' },
      ],
    },
    '29w': {
      text: '29.Qxh4 ile Beyaz h4 piyonunu alır: bir piyon önde.',
      amac: 'Somut maddi kazanç; şah kanadındaki Siyah ilerleyişini cezalandırmak.',
      neden: 'Motorun birinci sırası bu (Motor: +1.25). 23.h3 ile dondurulan piyon sonunda düştü.',
      diger: [
        { move: '29.Rc5', text: 'Kale değişimi teklifi (Motor: +0.65).' },
        { move: '29.Rb7', text: 'Yedinci yataya (Motor: +0.55).' },
      ],
    },
    '29b': {
      text: '29...Rc4 ile kale dördüncü yatayda vezire saldırır.',
      amac: 'Beyaz vezirini rahatsız etmek ve a4/g4 karelerine baskı.',
      neden: 'Aktif bir hamle ama motor 29...Nf5 (Motor: +1.25) ile benzer değer veriyor. Beyazın 30.g4 cevabı hamlenin etkisini azaltır.',
      diger: [
        { move: '29...Nf5', text: 'Motorun tercihi (Motor: +1.25); 30.Qg5 g6 ile benzer.' },
        { move: '29...d4', text: 'Merkezi açmak (Motor: +1.3).' },
      ],
    },
    '30w': {
      text: '30.g4! ile şah kanadı sağlamlaşır; vezir Rc4 saldırısından korunur.',
      amac: 'Vezirleri tahtada tutarak Siyahın şah kanadında Beyaza saldırma şansı olmadan baskıyı sürdürmek.',
      neden: 'Motor bu hamleyi onaylıyor (Motor: +1.6). 30.Qg3 Qxg3 31.fxg3 Ra4 ile Siyah a-piyonunu geri kazanırdı (Motor: +0.3). Smislov vezirleri tahtada tutmanın avantajını gördü.',
      diger: [
        { move: '30.Qg3', text: 'Vezir değişimi (Motor: +0.3); 30...Qxg3 31.fxg3 Ra4 ile Siyah rahatlar.' },
        { move: '30.Qg5', text: 'Benzer (Motor: +0.3).' },
      ],
    },
    '30b': {
      text: '30...a4 ile a-piyonu ilerler ama yalnız ve uzakta.',
      amac: 'a-piyonunu geçer piyon olarak ileri sürmek.',
      neden: 'Motor 30...Bf6 ile şah kanadını savunmayı biraz tercih ediyor (Motor: +1.6). Oyunda a4 piyonu 35.Rxa4 ile düşecek.',
      diger: [
        { move: '30...Bf6', text: 'Motorun tercihi (Motor: +1.6); 31.Ng5 Ng6 32.Qh7+ ile Beyaz baskısı.' },
        { move: '30...Rc8', text: 'Kale geri (Motor: +1.9).' },
      ],
    },
    '31w': {
      text: '31.Nbd4 ile at d4’e döner ve fili değişmeye zorlar.',
      amac: 'Siyahın aktif filini değişmek ve d4 blokajını sağlamlaştırmak.',
      neden: 'Motor en iyi hamle olarak gösteriyor (Motor: +1.65). Diğer at hamleleri değeri çok düşürür (31.Ng5 +0.4).',
      diger: [
        { move: '31.Ng5', text: 'Saldırı denemesi (Motor: +0.4); 31...Qh6 ile Siyah karşılık verir.' },
        { move: '31.Nbd2', text: 'Daha pasif (Motor: +0.3).' },
      ],
    },
    '31b': {
      text: '31...Bxd4 ile Siyah fili değişir.',
      amac: 'Beyazın güçlü d4 atını değişmek.',
      neden: 'Motorun ilk tercihi de bu (Motor: +2.0); 31...Rb4 de benzer.',
      diger: [
        { move: '31...Rb4', text: 'Kale değişimi teklifi (Motor: +2.05).' },
      ],
    },
    '32w': {
      text: '32.Nxd4 ile at d4’te tek kalan d5 piyonunun önüne yerleşir.',
      amac: 'd5 blokajını kurmak.',
      neden: 'Motor da bu hamleyi seçiyor (Motor: +2.1). 32.exd4 c-hattını Siyaha açardı (Motor: 0.0).',
      diger: [
        { move: '32.exd4', text: 'Piyonla almak (Motor: 0.0); 32...Rc1+ ile Siyah kalesi aktifleşir.' },
      ],
    },
    '32b': {
      text: '32...Qe5 ile vezir merkezde aktif olmaya çalışır.',
      amac: 'Beyaz atına baskı yapmak ve şah kanadında karşı oyun aramak.',
      neden: 'Motor 32...Nc6 (Motor: +2.0) ile atı değişmeyi tercih ediyor. Qe5 sonrası 33.Nf3 ile vezir kovulur.',
      diger: [
        { move: '32...Nc6', text: 'Motorun tercihi (Motor: +2.0); 33.Nxc6 Rxc6 ile taş değişimi.' },
        { move: '32...Qc7', text: 'Vezir c-hattına (Motor: +2.1).' },
      ],
    },
    '33w': {
      text: '33.Nf3 ile at f3’e çekilir; vezire saldırır ve e5/d4 karelerini kontrol eder.',
      amac: 'Tempo kazanmak ve şah kanadını savunmak.',
      neden: 'Motorun birinci sırası bu (Motor: +2.4).',
      diger: [
        { move: '33.Kg2', text: 'Şah güvenliği (Motor: +1.8).' },
      ],
    },
    '33b': {
      text: '33...Qd6 ile vezir d6’ya döner.',
      amac: 'd5’i korumak.',
      neden: 'Motor bu hamleyi onaylıyor (Motor: +2.4).',
      diger: [
        { move: '33...Qc7', text: 'Benzer (Motor: +2.6); 34.Ng5 ile baskı.' },
      ],
    },
    '34w': {
      text: '34.Ra5 ile kale a4 piyonunu hedefler.',
      amac: 'İkinci piyonu almak.',
      neden: 'Motor en iyi hamle olarak gösteriyor (Motor: +2.5).',
      diger: [
        { move: '34.Qh5', text: 'Vezir hamlesi (Motor: +2.4).' },
      ],
    },
    '34b': {
      text: '34...Rc8 ile kale c8’e döner.',
      amac: 'Kaleyi açıkta kalmaktan kurtarıp birinci yatayı ve c-hattını korumak.',
      neden: 'Motor 34...a3 (Motor: +2.45) ile a-piyonunu ileri sürmeyi tercih ediyor.',
      diger: [
        { move: '34...a3', text: 'Motorun tercihi (Motor: +2.45); piyon a3’te daha zor alınır.' },
      ],
    },
    '35w': {
      text: '35.Rxa4 ile ikinci piyon düşer. Beyaz iki piyon önde.',
      amac: 'Maddi avantajı artırmak.',
      neden: 'Motor 35.Kg2’yi çok az tercih ediyor (Motor: +2.8 / +2.7); piyonu almak en doğal ve güvenli yol.',
      diger: [
        { move: '35.Kg2', text: 'Önce şah güvenliği (Motor: +2.8).' },
      ],
    },
    '35b': {
      text: '35...Ng6 ile at g6’dan f4 ve h4’e bakar; Siyah son karşı şanslarını arar.',
      amac: 'Şah kanadında karşı oyun yaratmak.',
      neden: 'Motor 35...Qd7 (Motor: +2.9) ile daha sağlam savunmayı tercih ediyor; oyundaki hamle değeri +3.3’e çıkarır.',
      diger: [
        { move: '35...Qd7', text: 'Motorun tercihi (Motor: +2.9).' },
      ],
    },
    '36w': {
      text: '36.Qh5 ile vezir d5’e ve g6’ya baskı yapar.',
      amac: 'd5 piyonunu hedeflemek.',
      neden: 'Motor 36.Qg5’i biraz tercih ediyor (Motor: +3.5 / +3.0). Ama Qh5 de güçlü ve basit.',
      diger: [
        { move: '36.Qg5', text: 'Motorun tercihi (Motor: +3.5); 36...Ne7 37.Kg2 ile baskı.' },
      ],
    },
    '36b': {
      text: '36...Qf6? ile vezir d6’dan ayrılır ve d5 korumasız kalır.',
      amac: 'f2’ye ve uzun çapraza baskı yapmak.',
      neden: 'Ciddi hata. 37.Qxd5! ile Beyaz üçüncü piyonu hemen alabilirdi (Motor: +5.4). Motor 36...Qd7 ya da 36...Qc6 ile daha sağlam savunmayı öneriyor (Motor: +3.4).',
      diger: [
        { move: '36...Qd7', text: 'Motorun tercihi (Motor: +3.4); d5’i korur.' },
        { move: '36...Qc6', text: 'Benzer (Motor: +3.4).' },
      ],
    },
    '37w': {
      text: '37.Qf5 vezir değişimi teklifi; Beyaz iki piyon fazlayla oyunsonuna gitmekten memnun.',
      amac: 'Sadeleştirip kazanılmış oyunsonuna geçmek.',
      neden: 'Motor 37.Qxd5! ile hemen üçüncü piyonu almayı tercih ediyor (Motor: +5.4); 37...Qxf3?? ise 38.Qxf3 ile vezir kaybettirir çünkü d5’teki vezir f3’ü korur. Smislov daha sade bir yolu seçti (Motor: +2.9).',
      diger: [
        { move: '37.Qxd5', text: 'Motorun tercihi (Motor: +5.4); üçüncü piyon düşer.' },
        { move: '37.Kg2', text: 'Şah güvenliği (Motor: +3.7).' },
      ],
    },
    '37b': {
      text: '37...Qc6? ile Siyah değişimden kaçar.',
      amac: 'Vezirleri tahtada tutarak karşı oyun şansı korumak.',
      neden: 'Motor 37...Qxf5 38.gxf5 Ne7 ile vezir değişimini tercih ediyor (Motor: +3.0); oyundaki hamle 38.Ra7 ile Beyaza yeni bir saldırı fırsatı verir (Motor: +4.5).',
      diger: [
        { move: '37...Qxf5', text: 'Motorun tercihi (Motor: +3.0); oyunsonunda Siyahın direnme şansı daha fazla.' },
      ],
    },
    '38w': {
      text: '38.Ra7 ile kale yine yedinci yatayda; f7’ye çift saldırı.',
      amac: 'f7 piyonuna vezir ve kaleyle saldırmak.',
      neden: 'Motorun ilk tercihi de bu (Motor: +4.6).',
      diger: [
        { move: '38.Rd4', text: 'd5’e baskı (Motor: +3.8).' },
      ],
    },
    '38b': {
      text: '38...Rf8 ile kale f8’den f7’yi korur.',
      amac: 'f7 piyonunu savunmak.',
      neden: 'Motor da bu hamleyi seçiyor (Motor: +4.2); başka hamleler f7’yi kaybettirir.',
      diger: [
        { move: '38...Qe8', text: 'Vezir savunması (Motor: +4.5); 39.Qxd5 ile d5 düşer.' },
      ],
    },
    '39w': {
      text: '39.Rd7 ile kale d5 piyonuna saldırır.',
      amac: 'Üçüncü piyonu almak.',
      neden: 'Motorun birinci sırası bu (Motor: +4.5).',
      diger: [
        { move: '39.Ng5', text: 'Şah kanadı saldırısı (Motor: +4.25).' },
      ],
    },
    '39b': {
      text: '39...d4 ile Siyah piyonu kurtarmaya çalışır.',
      amac: 'd5 piyonunu değişip yapıyı çözmek.',
      neden: 'Motor bu hamleyi onaylıyor (Motor: +4.5); başka hamleler de d5’i kurtaramaz.',
    },
    '40w': {
      text: '40.Rxd4 ile üçüncü piyon da düşer.',
      amac: 'Maddi avantajı üç piyona çıkarmak.',
      neden: 'Motor en iyi hamle olarak gösteriyor (Motor: +4.5). 40.exd4?? gibi hamleler Siyaha karşı oyun verirdi.',
      diger: [
        { move: '40.Nxd4', text: 'At ile almak (Motor: +3.8).' },
      ],
    },
    '40b': {
      text: '40...Ra8 ile kale a-hattına geçer; a-piyonunu durdurmak ister.',
      amac: 'Beyazın geçer a-piyonunu durdurmak.',
      neden: 'Motorun ilk tercihi de bu (Motor: +4.7); ama pozisyon artık kayıp.',
    },
    '41w': {
      text: '41.a4 ile geçer a-piyonu ilerliyor. Siyah üç piyon eksikle terk etti.',
      amac: 'a-piyonunu vezire yürütmek.',
      neden: 'Motor da bu hamleyi seçiyor (Motor: +4.75). Siyahın şah kanadında iki piyonu, Beyazın beş piyonu var; oyunsonu umutsuz.',
    },
  },
  qa: [
    { q: 'Siyah neden 14...Bxc6 oynadı, 14...bxc6 değil?', a: '14...bxc6 ile c6 geri kalmış piyon olurdu ve Beyaz onu c-hattından hedef alırdı. Keres filiyle alıp yapıyı korudu ama bu kez d5 yalnız kaldı. chessgames.com yorumcularından biri Smislov’un 14...Bxc6’yı daha iyi bulduğunu aktarıyor; motor ise 14...bxc6’yı biraz tercih ediyor (Motor: +0.75 / +0.9).' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Azınlık saldırısının yarattığı yapısal zayıflıklardan: önce d5, sonra c6. Smislov bu zayıflıkların savunucularını (16.Bxf6, 20.Bxc6) değişti ve kalesini b-hattından yedinci yataya soktu (22.Rb7). Siyahın ...h5-h4 ilerleyişi de ekstra bir hedef yarattı.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'İlk fırsat 13...h6! idi (Motor: +0.15). Sonra Beyazın 24.Rcb1 hatasından sonra Siyah 25...c5 ile neredeyse eşitledi (Motor: +0.3), ama 27...Rc8 ve 28...Bc3 ile piyon kaybetti. 28...Rc2! (Motor: +0.65) ile kale aktif kalabilirdi.' },
    { q: '24.Rcb1 neden isabetsizdi?', a: 'Kale c-hattından çekilince Siyah 24...Rxb7 25.Rxb7 c5! ile yapısını çözdü. 24.Rxb8+ Qxb8 25.Nf4 ile kale c1’de kalsaydı 25...c5 26.Rxc5 ile piyon düşerdi (Motor: +2.2). Değer +1.2’den +0.4’e düştü.' },
    { q: '30.g4 neden 30.Qg3’ten daha iyiydi?', a: '30.Qg3 Qxg3 31.fxg3 Ra4 ile Siyah a-piyonunu kurtarır ve oyun neredeyse eşite döner (Motor: +0.3). 30.g4 vezirleri tahtada tutar ve Siyahın şah kanadındaki taşlarını kısıtlar (Motor: +1.6).' },
    { q: '36...Qf6 neden hataydı?', a: 'Vezir d6’dan ayrılınca d5 korumasız kaldı. 37.Qxd5! ile Beyaz piyonu hemen alabilirdi (Motor: +5.4); 37...Qxf3?? 38.Qxf3 vezir kaybettirir. Smislov 37.Qf5 ile vezir değişimi teklif etti ve yine kazandı.' },
    { q: 'Azınlık saldırısı neden işe yarar?', a: 'Beyazın iki piyonu Siyahın üç piyonuna saldırır ve değişimden sonra Siyahı bir zayıf piyonla bırakır. Bu zayıflık kalıcıdır ve Beyazın taşları onu uzun süre hedef alabilir. ChessBase’in dersinde Siyahın savunma yöntemleri olarak taş değişimi, ...c5 ve ...cxb5 sonrası a-piyonu geçer piyonu yaratma gibi fikirler sayılıyor.' },
  ],
  sources: [
    { title: 'chessgames.com: Smyslov vs Keres, World Championship Tournament 1948', url: 'https://www.chessgames.com/perl/chessgame?gid=1072243' },
    { title: 'ChessBase: The Winning Academy 28 – How to defend against a minority attack', url: 'https://en.chessbase.com/post/the-winning-academy-28-how-to-defend-against-a-minority-attack' },
    { title: 'Lichess: The Main Plans In The Carlsbad Structure', url: 'https://lichess.org/ublog/6ZFdHRC1/redirect' },
    { title: 'chess.com: Carlsbad Pawn Structure', url: 'https://www.chess.com/terms/carlsbad-pawn-structure-chess' },
    { title: 'chess.com: Clash of Champions – the 1948 World Championship Tournament', url: 'https://www.chess.com/article/view/clash-of-champions-the-haguemoscow-1948' },
    { title: 'chess24: Paul Keres v the 1948 World Championship', url: 'https://chess24.com/en/read/news/paul-keres-v-the-1948-world-championship' },
  ],
  exercises: [
    { id: 'sk-1', kind: 'tekrar', plan: true, title: 'Planı başlatın',
      source: 'Smislov – Keres, 1948 (12. hamle)',
      fen: 'r1bqr1k1/pp2bppp/2p2nn1/3p2B1/3P4/2NBPN2/PPQ2PPP/1R3RK1 w - - 10 12',
      prompt: 'Karlsbad yapısı kuruldu, kale b1’de. Beyazın vezir kanadındaki planını başlatan hamleyi oynayın.',
      hint: 'İki piyon üç piyona karşı. Kalenin arkasındaki piyonu ileri sürün.',
      line: ['b4'],
      explanation: '**12.b4!** Azınlık saldırısı başlıyor. Rb1 kalesi piyonu destekler; plan b5 ile c6’ya saldırmak ve bxc6 sonrası Siyahın yapısında zayıflık bırakmak. Motor b4’ü bu pozisyonun en iyi hamlesi olarak gösteriyor.',
      link: 'Maçın bütün stratejisi bu hamleyle başlar: b-hattı açılacak, sonra Rb7 ile yedinci yataya girilecek.' },
    { id: 'sk-2', kind: 'tekrar', plan: true, title: 'Açılan hattan yedinci yataya',
      source: 'Smislov – Keres, 1948 (22. hamle)',
      fen: 'r3r1k1/p3npp1/2pq1b2/3p4/Q2P3p/4PN2/P3NPPP/1RR3K1 w - - 2 22',
      prompt: 'Azınlık saldırısı b-hattını açtı ve c6 zayıf kaldı. Kaleyi en etkili kareye götürün.',
      hint: 'Yedinci yatayda a7 ve e7 savunmasız.',
      line: ['Rb7'],
      accept: { 0: ['h3'] },
      explanation: '**22.Rb7!** Kale yedinci yatayda a7’ye ve e7 atına saldırır. Siyah taşları savunmaya bağlanır, Beyazın vezir ve atları c6 ve d5’e yüklenir. Motor 22.h3’ü de eşit güçte görüyor; Rb7 ise planın doğal devamıdır.',
      link: 'Azınlık saldırısının amacı yalnızca zayıf piyon yaratmak değil, açılan b-hattını kaleler için kullanmaktır.' },
    { id: 'sk-3', kind: 'transfer', plan: false, title: 'Petrosyan da aynı yoldan',
      source: 'Petrosyan – Furman, SSCB Şampiyonası 1959 (17. hamle)',
      fen: 'rn1q1rk1/pp3p2/2p2bpp/3p4/1P1P4/P1NQPN2/5PPP/1R3RK1 w - - 2 17',
      prompt: 'Aynı yapı, farklı bir hazırlık: Petrosyan önce a3 ve Rb1 oynadı, filleri değişti. Şimdi zamanı geldi mi?',
      hint: 'b4 piyonu c6’ya hangi kareden saldırır?',
      line: ['b5'],
      explanation: '**17.b5!** Siyah ya bxc6 ile geri kalmış c6 piyonunu ya da cxb5 ile yalnız d5 piyonunu kabul edecek. a3 piyonu b4’ü önceden desteklediği için Beyaz bu kırılmayı en uygun anda yapabildi. Motor: b5 +0.9, sonraki en iyi hamle +0.6.',
      link: 'Smislov b4-b5’i kaleyle destekleyerek yaptı; Petrosyan a3 ile aynı kırılmayı hazırladı. Hedef aynı: c6’da kalıcı zayıflık.' },
    { id: 'sk-4', kind: 'transfer', plan: false, title: 'Yine yedinci yatay',
      source: 'Petrosyan – Furman, SSCB Şampiyonası 1959 (22. hamle)',
      fen: '2r2rk1/p2n1pb1/2p3pp/q2p4/3P1N2/P2QPN2/5PPP/1RR3K1 w - - 6 22',
      prompt: 'Azınlık saldırısı tamamlandı: c6 geri kaldı, b-hattı açık. Baskıyı somut hale getirin.',
      hint: 'Smislov maçında kalenin gittiği kareyi hatırlayın.',
      line: ['Rb7'],
      explanation: '**22.Rb7!** Kale a7 ve d7’ye saldırır. Siyah ...Rb8 ile değişmek zorunda kalır, ama c6 zayıflığı ve dağınık piyonlar kalır. Motor: Rb7 +2.0, sonraki en iyi hamle +1.2.',
      link: 'Smislov – Keres’teki Rb7 ile aynı fikir: açılan b-hattı kaleye yedinci yatayın kapısını açar.' },
  ],
};
