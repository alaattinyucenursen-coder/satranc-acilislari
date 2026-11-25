// Spasski – Tal, Adaylar finali, Tiflis 1965 (2. oyun). Kaynak: PgnMentor (Tal.pgn).
export default {
  id: 'spassky-tal-1965',
  theme: 'Uzun çaprazda vezir fedası: ...Qxd6 ve ...Bxf3',
  white: 'Boris Spasski', black: 'Mihail Tal',
  whiteShort: 'Spasski', blackShort: 'Tal',
  event: 'Adaylar finali, 2. oyun', site: 'Tiflis', year: 1965, eco: 'B82',
  variation: 'Sicilya Kan (Paulsen), 5.Nc3 Qc7 6.Bd3',
  result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 Qc7 6. Bd3 Nc6 7. Be3 Nf6 8. O-O b5 9. Nb3 Be7 10. f4 d6 11. Qf3 O-O 12. a4 b4 13. Ne2 e5 14. f5 d5 15. Ng3 Na5 16. exd5 Bb7 17. Ne4 Nc4 18. Bg5 Nxb2 19. d6 Qxd6 20. Nxd6 Bxf3 21. Rxf3 Bxd6 22. Bxf6 gxf6 23. Be4 Rac8 24. a5 Bb8 25. g3 Rfd8 26. Re1 Ba7+ 27. Kg2 Rd6 28. Rff1 Nc4 29. Kh3 Ne3 30. Rf3 Nxc2 31. Rc1 Rc4 32. Rd3 Bd4 33. Rxc2 Rxc2 34. Rxd4 exd4 35. Bxc2 d3 36. Bd1 Rd5 37. Kg4 Re5 38. Kf4 Re2 39. h4 h5 40. Nc5 Re1 41. Bxh5 0-1`,

  summary: 'Sonuç 0-1: **Mihail Tal (Siyah) kazandı.** Bu, Tiflis’teki Adaylar finalinde (1–26 Kasım 1965) Tal’ın aldığı tek galibiyetti; Spasski maçı sonunda 7–4 kazanıp Petrosyan’a rakip oldu. Kan kuruluşunda Tal ...b5-b4 ile c3 atını e2’ye kovaladı, ...e5 ve **14...d5!** ile merkezi kırdı ve d5 piyonunu vererek **16...Bb7** ile b7–f3 uzun çaprazını açtı. Spasski 17.Ne4 ile iyi bir pozisyon (Motor: +1.0) kurmuştu, ama 18.Bg5 ile bunu dağıttı ve **19.d6?** ile c7 vezirini ve e7 filini çatallamak isterken d-piyonunun arkasındaki çaprazı tamamen açtı: **19...Qxd6! 20.Nxd6 Bxf3** ile Siyah veziri geri aldı ve bir piyon önde bir oyunsonuna geçti (Motor: −1.1/−1.3). Oyunsonunda iki taraf da hata yaptı (Tal 30...Nd1’i kaçırdı, Spasski 33.Nd2’yi), ama sonunda Siyah kale ve iki fazla piyona karşı fil ve at kaldı. Belirleyici an **38.Kf4?** oldu: **38...Re2!** ile d3’teki geçer piyonun koruduğu kale d1 filini canlı canlı gömdü; ...Re1 ve ...d2 ile fil piyona verilmek zorunda kalınca Spasski terk etti.',
  intro: 'Kan (Paulsen) Varyantında Siyah 4...a6 ile Nb5’i ve Bb5’i önler, ...b5 için hazırlık yapar ve atlarını, d-piyonunu bilerek geride tutar; 5...Qc7 ile de e5 karesini tutup Beyazın e4-e5 itişini zorlaştırır. Bu esneklik Siyaha hangi yapıyı (Scheveningen benzeri ...d6–...e6 ya da ...d5 kırılması) kuracağına sonradan karar verme imkânı verir. Spasski Bd3, Be3, rok, Nb3, f4 ve Qf3 ile şah kanadında baskı kuran klasik bir kuruluş seçti; 10...d6’dan sonra oyun B82 (f4’lü Scheveningen) yapısına benzedi. Tal’ın cevabı vezir kanadında ...b5-b4 ile c3 atını kovalamak, sonra Beyaz f5 ile merkezi kapatınca hemen ...d5 ile vurmaktı. Oyunun can alıcı noktası, Tal’ın bir piyon karşılığında açtığı b7–f3 uzun çaprazıdır: Beyaz veziri f3’te, Siyah fili b7’de ve aradaki tek engel Beyazın d5 piyonudur. Spasski o piyonu 19.d6 ile ileri sürdüğü anda çapraz açıldı ve oyunun kaderi değişti.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Bd3, Be3 ve rokla hızlı gelişmek; 9.Nb3 ile d4 atını ...Nxd4 değişiminden kaçırıp taşları tahtada tutmak, böylece saldırı için daha çok malzeme bırakmak.',
      '10.f4 ve 11.Qf3 ile şah kanadında yer kazanmak; e5 ya da f5 itişleriyle Siyahın f6 atını ve şahını hedef almak. 14.f5 bu planın devamıydı: e5 piyonunu sabitleyip ...exf4’ü önledi, ama d5 kırılmasına kapı açtı.',
      '12.a4 ile ...b5 piyonunu sorgulamak: Siyah ya ...bxa4 ile piyon yapısını bozar ya da ...b4 ile vezir kanadını kapatır. Tal ...b4’ü seçti ve c3 atı e2’ye gitmek zorunda kaldı.',
      '16.exd5 ile alınan piyonu tutmak, atları e4 ve b3 karelerine yerleştirmek ve **Nxf6+ ya da Bxc4 ile Siyahın en iyi savunucularını değiştirmek** (18.Bxc4 Qxc4 19.Nxf6+ Bxf6 20.Rad1 ile Motor: +1.0).',
      'd5 piyonunu yerinde bırakmak: o piyon, b7 filinin f3 vezirine giden yolunu kesen bir kalkandı. 19.d6? bu kalkanı kaldırdı.',
      'Oyunsonunda fil ve atı birlikte kullanıp d-geçer piyonunu durdurmak, Siyahın kalesini aktif kalmaktan alıkoymak; bunun için filin d1–h5 çaprazındaki çıkış karesini (38.Bf3!) açık tutmak gerekiyordu.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Kan esnekliğiyle önce ...a6 ve ...Qc7, sonra ...Nc6, ...Nf6 ve ...b5: vezir kanadında yer almak ve fili b7’ye getirmeye hazırlanmak.',
      '...b5-b4 ile c3 atını kovalamak; böylece e4 ve d5 karelerinin bekçisi tahtanın kenarına gider ve ...d5 kırılması kolaylaşır.',
      'Beyaz şah kanadında ilerlerken merkezde karşılık vermek: önce 13...e5 ile f4’e baskı, Beyaz 14.f5 ile kapatınca hemen **14...d5!**',
      'd5 piyonunu hemen geri almak yerine **16...Bb7** ile uzun çaprazı açmak; fil d5 piyonunun arkasından f3’teki Beyaz vezirine bakar ve her an bir taktiğe hazırdır.',
      'At ile a5–c4–b2 yolculuğu: piyonu geri almak, d3 filine ve a4 piyonuna baskı yapmak. 19.d6 gelince **19...Qxd6! 20.Nxd6 Bxf3** ile veziri geri alıp bir piyon önde oyunsonuna geçmek.',
      'Oyunsonunda filin a7’de g1 çaprazını tutması, kalelerin c- ve d-hatlarını alması, atın c4–e3 ile Beyazın taşlarını rahatsız etmesi.',
      'Son aşamada d-geçer piyonunu d3’e kadar sürmek ve kaleyi **e2’ye** koyarak Beyazın d1 filini hapsetmek; ardından ...Re1 ve ...d2 ile fili piyona verdirmek.',
    ] },
  },
  critical: [
    { move: '14b', title: '14...d5! kanattaki saldırıya merkezden cevap', text: 'Spasski 14.f5 ile e5 piyonunu sabitledi ve şah kanadında yer aldı. Klasik kural şöyledir: rakip kanatta ilerlerken merkezi açın. Tal tam bunu yaptı: ...d5 ile e4’e saldırdı, c3 atının e2’ye kovalandığı anı kullandı ve b7’ye gelecek fil için çaprazı hazırladı. Motor 14...Bb7’yi (−0.0) çok az daha iyi buluyor, ama 14...d5 de eşitliğe yakın (+0.2) ve oyunun bütün karakterini belirledi.' },
    { move: '16b', title: '16...Bb7: piyon yerine çapraz', text: 'Beyaz 16.exd5 ile bir piyon kazandı. Tal bunu hemen geri almaya çalışmadı; fili b7’ye koydu. Fil şimdilik d5 piyonuna çarpıyor, ama o piyonun arkasında f3’te Beyaz veziri, ilerisinde g2 ve h1 var. Motor (+0.5) Beyazı biraz daha iyi buluyor; yine de bu yatırım, Beyaz d-piyonunu kımıldattığı anda karşılığını verecekti.' },
    { move: '18w', title: '18.Bg5: avantaj elden kaçıyor', text: '17...Nc4 sonrası Beyaz bir piyon önde ve iyi durumdaydı. 18.Bxc4 Qxc4 19.Nxf6+ Bxf6 20.Rad1 ile Siyahın en tehlikeli atını değişip piyonu tutabilirdi (Motor: +1.1). 18.Bg5 ise b2’yi koruyan e3 filini oradan çekti; 18...Nxb2 ile Siyah piyonu geri aldı ve d3 ile a4’e baskı kurdu. Değerlendirme +1.0’dan 0.0’a düştü.' },
    { move: '19w', title: '19.d6? çatal mı, çapraz mı?', text: 'Beyaz d6 ile c7 vezirini ve e7 filini aynı anda vurdu; vezir kaçsa e7 fili düşecek gibi görünüyordu. Ama d5 piyonu b7–f3 çaprazının tek engeliydi. Doğrusu 19.Bxf6 Bxf6 idi (Motor: 0.0): f6 atını değişip Nb2’yi yalnız bırakmak. Maç hamlesinden sonra Motor: −1.5.' },
    { move: '19b', title: '19...Qxd6! 20.Nxd6 Bxf3: vezir geri geliyor', text: 'Tal veziri d6 piyonuna verdi. 20.Nxd6 Bxf3 ile b7 fili açılan çaprazda Beyaz vezirini aldı, sonra ...Bxd6 ile d6 atı da düştü. Hesap: Siyah vezir ve fil verdi, Beyaz vezir, at ve d-piyonunu kaybetti; 22.Bxf6 gxf6 sonrası Siyah net bir piyon önde ve Nb2 hâlâ d3’ü vuruyor. Başka her hamle kaybederdi: 19...Qb6+ (+2.8) ya da 19...Bxe4 20.dxc7 (+2.9).' },
    { move: '30b', title: '30...Nxc2?! kaçan fırsat: 30...Nd1!', text: 'Tal’ın atı e3’te çok güçlüydü ve Beyazın şahı h3’te kötü duruyordu. 30...Nd1! 31.Bd3 Nf2+ ile şah çekip kaleyi kazanırdı (Motor: −2.5). Maçta 30...Nxc2 31.Rc1 Rc4 ile Siyah piyonu aldı, ama at c2’de çivilendi ve Beyaz zorla dengeye yakın bir oyuna döndü (−0.9).' },
    { move: '33w', title: '33.Rxc2? ve kale + iki piyon karşı iki hafif taş', text: '33.Nd2! (Motor: −1.0) c4 kalesine tempo kazanarak saldırırdı. Spasski 33.Rxc2 Rxc2 34.Rxd4 exd4 35.Bxc2 ile değişimleri seçti; sonuçta Siyahın kale ve altı piyonuna karşı Beyazın fil, at ve dört piyonu kaldı (−2.0). Siyahın yeni d4 geçer piyonu Beyaz taşlarını pasif savunmaya mahkûm etti.' },
    { move: '38b', title: '38...Re2! d1 filine mezar', text: 'Spasski 38.Kf4? ile e5 kalesine tempo kazanmak istedi, ama kale e2’ye gidip fili hapsetti: e2’deki kale d3 piyonuyla korunuyor, c2 karesini de d3 piyonu tutuyor, b3’te kendi atı duruyor. Fil d1’den hiçbir yere gidemez. 38.Bf3! ile fil önce e2’den çıkmalıydı (Motor: −0.8); maç hamlesinden sonra −2.9 ve birkaç hamle sonra ...Re1 ile fil piyona verilmek zorunda kaldı.' },
  ],
  lessons: [
    'Kan Varyantında ...b5-b4 ile c3 atını kovalamak, e4 ve d5 karelerinin bekçisini uzaklaştırır ve Siyahın ...d5 kırılmasını kolaylaştırır.',
    'Rakip kanatta ilerlediğinde (14.f5) en iyi cevap çoğu zaman merkezde kırılmadır (14...d5). Kapanmış bir merkez kanat saldırısını güçlendirir; açılan merkez onu zayıflatır.',
    'Bir piyon fedası bir filin uzun çaprazını açıyorsa uzun vadeli bir yatırımdır: 16...Bb7 hemen bir şey kazanmadı, ama Beyazın d5 piyonunu kımıldatmasını yasakladı.',
    'Bir piyon ilerleyişi bir taşa saldırırken arkasında bir hat ya da çapraz açıyorsa, önce o hattaki karşı saldırıyı hesaplayın. 19.d6 “çatal” gibi görünüyordu, ama asıl açılan b7–f3 çaprazıydı.',
    'Avantajlı pozisyonda en tehlikeli rakip taşını değiştirmek (18.Bxc4 ya da 18.Nxf6+) çoğu zaman en sağlam yoldur; süslü bir bağlama (18.Bg5) aynı anda kendi zayıf noktanızı (b2) açabilir.',
    'Kale ve geçer piyon birlikte çalıştığında, piyonun kontrol ettiği karelerle birlikte rakip fili tamamen hapsedebilir (38...Re2!). Oyunsonunda her hamleden önce filinizin kaçış karelerini sayın.',
    'Kaybedilecek bir taş varsa onunla son bir şey alın: 34...Rxh2+ (Motor: −2.1) c2’de zaten düşecek olan kaleyle bir piyon daha kazanırdı.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve bu galibiyet maçta ne anlama geliyordu?', a: 'Sonuç 0-1: Mihail Tal (Siyah) kazandı; Spasski 41.Bxh5’ten sonra 41...d2 gelmeden terk etti (Motor: −5.1). Olimpbase’in maç tablosuna göre bu galibiyetle Tal 1½–½ öne geçti, ama Spasski hemen 3. oyunda eşitledi, 9, 10 ve 11. oyunları kazanarak maçı 7–4 (+4 =6 −1) aldı. Yani bu, Tal’ın Tiflis finalindeki tek galibiyetiydi.' },
    { q: 'Siyah neden 15...Bb7 yerine önce 15...Na5 oynadı?', a: 'Motor aslında 15...Bb7’yi biraz daha iyi buluyor: 16.exd5 Nd4! 17.Nxd4 Bxd5 ile Siyah piyonu hemen geri alır (+0.2). Tal ise atı a5–c4–b2 yoluna soktu: hem b3 atına bakan hem e3 filini ve b2 piyonunu hedefleyen bir at. 15...Na5 16.exd5 Bb7 ile Siyah bir piyonu geçici olarak verdi, ama uzun çapraz ve aktif at karşılığında (+0.5). Bu, Tal’ın inisiyatifi malzemeye tercih eden üslubuna uyar.' },
    { q: 'Beyazın avantajı nerede doruğa ulaştı ve nasıl kaybedildi?', a: '17...Nc4 sonrası Beyaz bir piyon önde ve Motor +1.0 gösteriyordu. 18.Bxc4 Qxc4 19.Nxf6+ Bxf6 20.Rad1 ile Siyahın aktif atını değişip d5 piyonunu tutmak en temiz yoldu. 18.Bg5 ise e3 filini b2’nin korumasından çekti; 18...Nxb2 ile Siyah piyonu geri aldı (0.0). Sonra 19.d6? ile Beyaz eşit pozisyonu kaybedilmiş sayılabilecek bir oyunsonuna çevirdi.' },
    { q: '19.d6 neden kötüydü? Hem vezire hem file saldırmıyor muydu?', a: 'Saldırıyordu, ama Siyah vezirini “kaçırmak” zorunda değildi. 19...Qxd6! 20.Nxd6 Bxf3: d-piyonu artık d5’te olmadığı için b7 fili f3 vezirini görür. 21.Rxf3 Bxd6 22.Bxf6 gxf6 sonrası Siyah Beyazın d-piyonunu kazanmış olur ve b2 atı hâlâ d3 filine bakar (Motor: −1.3). Beyaz 19.Bxf6 Bxf6 ile dengede kalırdı (0.0).' },
    { q: 'Tal nerede daha hızlı kazanabilirdi?', a: '30. hamlede: e3 atı ve h3’teki Beyaz şahı yan yana duruyordu. 30...Nd1! 31.Bd3 Nf2+ 32.Rxf2 Bxf2 ile Siyah kalite kazanırdı (Motor: −2.5). 30...Nxc2 31.Rc1 Rc4 sonrası at c2’de takıldı ve değerlendirme −0.9’a geriledi. Bir de 34...Rxh2+! 35.Kxh2 exd4 ile c2’de zaten kaybedilecek kaleyle h2 piyonunu almak −2.1 verirdi; maçta 34...exd4 −0.9 idi.' },
    { q: 'Beyaz oyunsonunda nerede kurtulabilirdi?', a: 'İki an var. 33.Nd2! Rc3 34.Rxc3 Bxc3 35.Nb1 ile Beyaz değişimleri reddedip −1.0 civarında direnirdi; 33.Rxc2 sonrası −2.0 oldu. Asıl kritik an 38. hamleydi: 38.Bf3! ile fil e2 karesinden önce çıksaydı, 38...Re2 39.Kf4 sonrası fil e4’ten d3 piyonuna saldırabilirdi (Motor: −0.8). 38.Kf4? Re2! ile fil d1’de gömüldü (−2.9).' },
    { q: '38...Re2’den sonra d1 fili neden hareket edemiyordu?', a: 'Filin iki çaprazı var: d1–h5 ve d1–a4. Birincisinde e2’de kale duruyor ve onu d3 piyonu koruyor; Bxe2 dxe2 piyonu vezir yapar. İkincisinde c2’yi d3 piyonu kontrol ediyor ve b3’te Beyazın kendi atı var. Fil kımıldayamazken Siyah şahını getirebilir ya da ...Re1 ile file saldırabilir; maçta 40...Re1 41.Bxh5 sonrası 41...d2 42.Nb3 d1=Q 43.Bxd1 Rxd1 ile Siyah ata karşı kale ile kalırdı.' },
    { q: 'Siyahın 22...gxf6 ile bozulan piyon yapısı bir sorun değil miydi?', a: 'Kâğıt üstünde f7–f6 ikilisi ve açık g-hattı zayıflıktır, ama vezirler değişmiş olduğu için Siyahın şahına saldırı tehlikesi yoktu. Buna karşılık f6 ve e5 piyonları e4–d4–g5 gibi merkez karelerini tuttu ve e5 piyonu ...e4 ile d3 filini ve f3 kalesini çatallama tehdidini taşıyordu (22.Kf1? e4!). Önemli olan bir piyon fazlalığı ve Siyah taşlarının aktifliğiydi (Motor: −1.4).' },
    { q: 'Kan Varyantında 5...Qc7’nin amacı nedir?', a: 'Vezir c7’den e5 karesini tutar. Bu sayede Siyah ...Nf6 oynadığında Beyazın e4-e5 ile atı kovalaması zorlaşır; aynı zamanda vezir c-hattına, ileride ...b5 sonrası da çapraz yönde h2’ye bakar. Lichess’teki bir eğitim çalışmasında (FM Neustroev) 5...Qc7 “klasik” Kan karesi olarak anılıyor, 5...b5 ise popüler ama daha riskli diye geçiyor.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: şah piyonu merkeze iki kare ilerler; d5 ve f5’i kontrol eder, vezir ve f1 filine yol açar.',
      amac: 'Hızlı gelişim ve merkezde yer. Spasski 1.e4 ile hem açık oyunlarda hem Sicilya’da çok başarılıydı.',
      neden: 'Spasski Sicilya’ya karşı iyi bir sicile sahipti; ChessBase’in derlemesine göre beyazla 1.e4 c5 oynanan 290 oyununda yalnızca 23 yenilgisi var. Tal gibi taktik bir rakibe karşı keskin bir açık Sicilya’ya girmekten çekinmedi.',
      diger: [
        { move: '1.d4', text: 'Daha kapalı oyunlara yol açar (Motor: +0.2). Spasski de sık oynardı, ama Tal’ın taktik gücünü açık konumlarda sınamayı tercih etti.' },
        { move: '1.c4', text: 'İngiliz Açılışı; pozisyonel bir mücadele. Bu maçta Beyazla daha çok açık oyunlar oynandı.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini yandan kontrol eder ve simetrik olmayan bir oyun ister.',
      amac: 'Beyazın d4 ile ideal merkez kurmasını zorlaştırmak ve c-piyonunu d-piyonuyla değişip yarı açık c-hattını almak.',
      neden: 'Tal kazanmak zorunda olduğu ya da dengesizlik istediği oyunlarda Sicilya’ya başvururdu. 1...e5 daha sakin ve simetrik oyunlara götürür.',
      diger: [
        { move: '1...e5', text: 'Açık oyun (Motor: +0.2). Tal Beyazla İspanyol oynadığı bu maçta Siyahla da keskinliği seçti.' },
        { move: '1...e6', text: 'Fransız Savunması (+0.4); daha kapalı ve stratejik bir yapı.' },
      ],
    },
    '2w': {
      text: '2.Nf3: at gelişir, d4 itişini destekler.',
      amac: 'Açık Sicilya için d4’ü hazırlamak.',
      neden: 'Ana yol budur. 2.Nc3 ya da 2.c3 gibi yan yollar Siyaha daha az sorun çıkarır; Spasski ana teorik tartışmaya girdi.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya’ya ya da Grand Prix Saldırısına gidebilir (+0.3). Spasski bu yapıyı başka maçlarda (örneğin 1968’de Geller’e karşı) kullanmıştır.' },
        { move: '2.c3', text: 'Alapin: d4’ü piyonla destekler (+0.3), ama keskin Açık Sicilya mücadelesinden kaçar.' },
      ],
    },
    '2b': {
      text: '2...e6: Kan, Taymanov ve Scheveningen yapılarının ortak hamlesi. Siyah d5 karesini tutar ve f8 filine yol açar.',
      amac: 'Esnek bir kuruluş: d-piyonunu d6’ya ya da d5’e, atı c6’ya ya da e7’ye koyma seçeneğini açık tutmak.',
      neden: '2...d6 (Najdorf/Dragon) ya da 2...Nc6’ya göre 2...e6 daha az teori gerektirir ve Siyaha ...d5 kırılmasını hep elde tutma imkânı verir; Tal’ın bu oyunda yapacağı da tam olarak budur.',
      diger: [
        { move: '2...d6', text: 'Najdorf, Dragon ya da klasik yapılar (+0.5). Siyah ...d5 yerine ...e5 ya da ...d6–e6 yapısıyla oynar.' },
        { move: '2...Nc6', text: 'Klasik Sicilya ve Sveshnikov kapısı (+0.3).' },
      ],
    },
    '3w': {
      text: '3.d4: Beyaz merkezi açar.',
      amac: 'c5 piyonunu değişip merkezde piyon çoğunluğu (e4’e karşı d- ve e-piyonları) ve gelişim önceliği elde etmek.',
      neden: 'Açık Sicilya’nın tanımı budur. Beyaz bir merkez piyonunu bir kanat piyonuyla değişir ve daha hızlı gelişir; Siyah ise yarı açık c-hattını ve ileride merkez çoğunluğunu alır.',
      diger: [
        { move: '3.c3', text: 'Önce d4’ü piyonla desteklemek (+0.3); daha sakin bir oyun.' },
        { move: '3.Nc3', text: 'd4’ü geciktirip esnek kalır (+0.3), Siyaha ...Nc6 ya da ...a6 seçenekleri bırakır.' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah alır; c-hattı Siyah için yarı açılır.',
      amac: 'Merkezde iki piyona (d7 ve e6) karşı Beyazın tek e-piyonu kalsın; ileride ...d5 kırılması için temel.',
      neden: 'Sicilya’nın temel takası. 3...d5 4.exd5 exd5 ile Siyah izole piyonla kalır ve geride gelişimdedir (Motor: +1.0); 3...a6 ise 4.d5 ile alan kaybettirir (+0.8).',
      diger: [
        { move: '3...d5', text: '4.exd5 exd5 5.Bb5+ ile Siyah izole piyonla zor durumda (Motor: +1.0).' },
        { move: '3...a6', text: '4.d5 ile Beyaz merkezde alan kazanır (+0.8).' },
      ],
    },
    '4w': {
      text: '4.Nxd4: at piyonu geri alır ve merkeze yerleşir.',
      amac: 'Merkezdeki atla e6, c6 ve b5 karelerine baskı yapmak; gelişimi sürdürmek.',
      neden: 'Doğal ve tek ciddi geri alış. 4.a3 ya da 4.Be2 gibi gecikmeler Siyaha fazladan tempo verir.',
      diger: [
        { move: '4.Be2', text: 'Piyonu geri almayı geciktirir; 4...Bb4+ gibi hamlelerle Siyah rahat oynar (+0.2).' },
      ],
    },
    '4b': {
      text: '4...a6: Kan (Paulsen) Varyantı. Siyah b5 karesini kontrol eder; ne at ne fil oraya gelebilir.',
      amac: 'Nb5 ve Bb5 sıçrayışlarını önlemek, ...b5 ve ...Bb7 için zemin hazırlamak; atları ve d-piyonunu geride tutup esnek kalmak.',
      neden: 'Chess.com’daki Kan anlatımının da vurguladığı gibi 4...a6 önce Nb5’i keser ve ...b5’e hazırlık yapar. 4...Nf6 ve 4...Nc6’ya göre Siyah hangi yapıyı kuracağını Beyazın kuruluşuna göre seçer.',
      diger: [
        { move: '4...Nf6', text: '5.Nc3 ile Dört At / Pin varyantlarına ya da Scheveningen’e gider (+0.5).' },
        { move: '4...Nc6', text: 'Taymanov Varyantı (+0.5). Bu oyunda da 6...Nc6 ile Taymanov’a çok yakın bir yapı oluşacak.' },
      ],
    },
    '5w': {
      text: '5.Nc3: at gelişir; e4’ü korur, d5 ve b5’e bakar.',
      amac: 'Hızlı gelişim ve ileride Bd3, Be3, rok ile klasik kuruluş.',
      neden: '5.c4 (Maroczy yapısı) ya da 5.Bd3 Kan’a karşı daha çok tercih edilir (Motor her ikisinde +0.6). Spasski en doğal hamleyi yaptı; Siyahın ...b5-b4 ile bu atı kovalama fikrine izin veriyor, ki oyunda tam olarak bu olacak.',
      diger: [
        { move: '5.c4', text: 'Maroczy bağı: d5’i ve b5’i tutar, ...b5 ve ...d5 kırılmalarını zorlaştırır (+0.6).' },
        { move: '5.Bd3', text: 'Atı c3’ten önce fili getirir; c-piyonunun c4’e gitmesi mümkün kalır (+0.6).' },
      ],
    },
    '5b': {
      text: '5...Qc7: vezir e5 karesini ve c-hattını kontrol eder.',
      amac: 'Beyazın e4-e5 itişini önlemek, böylece ...Nf6 güvenle oynanabilsin; vezirin c-hattında Beyazın c2 ve c3’üne baskı yapması.',
      neden: 'Chess.com’daki Kan anlatımına göre 5...Nf6 6.e5 ile atı kötü bir kareye kovalayabileceği için Siyah önce e5’i kontrol eder; FM Neustroev’in Lichess çalışmasında da 5...Qc7 “klasik” Kan karesi, 5...b5 ise daha riskli olarak anılır.',
      diger: [
        { move: '5...b5', text: 'Hemen ...Bb7 ve ...b4 fikri (Motor: +0.3); daha keskin ama vezir kanadı açık kalır.' },
        { move: '5...Nc6', text: 'Doğrudan Taymanov’a geçer (+0.6).' },
        { move: '5...d6', text: 'Scheveningen yapısına geçer.' },
      ],
    },
    '6w': {
      text: '6.Bd3: fil e4’ü korur ve şah kanadına bakar.',
      amac: 'Rok hazırlamak; e4’ü sağlam tutup c-piyonunun önünü açık bırakmak. İleride Qf3 ve f4 ile şah kanadı saldırısı.',
      neden: 'Bd3, ...Nf6 ve ...Bb4 ile e4’e gelecek baskıyı önceden karşılar. 6.Be3 (Lichess çalışmasındaki ana yol) ve 6.g3 de oynanır; Spasski en doğrudan saldırı kuruluşunu seçti.',
      diger: [
        { move: '6.Be3', text: 'Ana yol: 6...Bb4 ya da 6...Nf6 ile karşılanır; Siyah ...Bb4 ile e4’e baskı kurar.' },
        { move: '6.g3', text: 'Fianketto; e4’ü g2 filiyle korur ve daha pozisyonel bir oyuna gider.' },
        { move: '6.Qf3', text: 'Erken vezir; e4’ü korur ve g3’e geçmeye hazırlanır (+0.4).' },
      ],
    },
    '6b': {
      text: '6...Nc6: at gelişir ve d4 atına baskı yapar.',
      amac: 'Beyazın d4 atını sorgulamak: ya değişsin (Nxc6) ya da çekilsin; Siyah ...Nxd4 ve ...Bc5 fikriyle rahatlamak ister.',
      neden: 'Motor 6...Nf6, 6...Nc6 ve 6...d6’yı eşit buluyor (+0.5). Nc6 ile oyun Taymanov yapısına döner; Siyah ...Nf6’yı bir hamle geciktirip önce d4 atını rahatsız eder.',
      diger: [
        { move: '6...Nf6', text: '7.O-O ile klasik Kan; Siyah ...d6 ya da ...Bc5 ile devam eder (+0.5).' },
        { move: '6...Bc5', text: 'd4 atına doğrudan saldırı; 7.Nb3 ile at çekilir ve fil a7’ye ya da e7’ye gider.' },
        { move: '6...d6', text: 'Scheveningen yapısı (+0.5).' },
      ],
    },
    '7w': {
      text: '7.Be3: fil gelişir ve d4 atını korur.',
      amac: 'Atı merkezde tutmak, vezir kanadına (b6, c5) baskı yapmak ve uzun rok seçeneğini de açık bırakmak.',
      neden: '7.Nxc6 ile Siyahın b-piyonunu merkeze çekmek de mümkündü (Motor: +0.6), ama Spasski taşları tahtada tutmayı ve saldırıya malzeme bırakmayı tercih etti.',
      diger: [
        { move: '7.Nxc6', text: '7...bxc6 (ya da 7...dxc6) sonrası Siyahın merkez piyonları güçlenir; Beyaz biraz daha iyi (+0.6).' },
        { move: '7.Nb3', text: 'Atı hemen çeker (+0.3); ...Nf6 ve ...b5 ile Siyah rahat gelişir.' },
      ],
    },
    '7b': {
      text: '7...Nf6: at gelişir ve e4’e baskı yapar.',
      amac: 'Rok için şah kanadını geliştirmek, e4’ü sorgulamak ve ...Ng4 ile e3 filini taciz etme olasılığını açık tutmak.',
      neden: 'Vezir c7’den e5’i tuttuğu için e4-e5 artık at için tehlikeli değil. 7...b5 ve 7...Nxd4 de eşit (+0.3/+0.4), ama Nf6 gelişimi tamamlamaya en çok yardımcı olan hamle.',
      diger: [
        { move: '7...b5', text: 'Önce vezir kanadında yer (+0.3); 8.Nxc6 Qxc6 ile vezir aktif kalır.' },
        { move: '7...Nxd4', text: '8.Bxd4 sonrası taş değişimiyle rahatlamak (+0.4).' },
      ],
    },
    '8w': {
      text: '8.O-O: Beyaz kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f-kalesini f4–f5 itişine hazırlamak.',
      neden: 'Motor 8.Qe2’yi (+0.4) biraz daha iyi buluyor; vezir e4’ü korur ve uzun rok seçeneği kalır. Rok, Siyaha ...Nxd4 ve ...Bc5 ile rahatlama imkânı verir, ama Spasski f4 planı için şahı g1’e götürmek istedi.',
      diger: [
        { move: '8.Qe2', text: 'Vezir e4’ü korur; 8...Bb4 9.O-O Bxc3 10.bxc3 ile Beyaz fil çifti alır (+0.4).' },
        { move: '8.Nxc6', text: '8...bxc6 9.f4 d5 10.Qf3 gibi yapılara gider (+0.3).' },
      ],
    },
    '8b': {
      text: '8...b5: Siyah vezir kanadında yer kazanır.',
      amac: 'Fili b7’ye getirmek, ...b4 ile c3 atını kovalamak ve ...Ne5–c4 gibi manevraları desteklemek.',
      neden: 'Motorun ilk tercihi (+0.1). ...b5 Kan’ın imzası: Siyah vezir kanadında Beyazdan önce harekete geçer. ...Nxd4 9.Bxd4 Bc5 de mümkün (+0.3), ama b-piyonu ilerlemesi daha dinamik.',
      diger: [
        { move: '8...Nxd4', text: '9.Bxd4 Bc5 10.Bxc5 Qxc5 ile taşlar değişir (+0.3); sağlam ama pasif.' },
        { move: '8...Ne5', text: '9.h3 b5 sonrası at e5’te güzel durur, ama f4 ile kovalanabilir (+0.3).' },
      ],
    },
    '9w': {
      text: '9.Nb3: at d4’ten b3’e çekilir.',
      amac: '...Nxd4 değişimini önlemek ve taşları tahtada tutmak; b3 atı c5 ve a5 karelerine bakar ve a4 itişini destekler.',
      neden: 'Motor 9.Nxc6 dxc6’yı biraz daha iyi buluyor (+0.2), ama o zaman Siyahın merkez piyonları güçlenir. Spasski f4–f5 saldırısı için atın değil Siyah atının tahtadan gitmesini istemedi; at b3’te de a4 ile ...b5’i sorgulamaya yardım edecek.',
      diger: [
        { move: '9.Nxc6', text: '9...dxc6 10.f4 e5 11.Qe2 ile Siyah merkezde sağlam (+0.2).' },
        { move: '9.Qe2', text: '9...Bb7 10.Nb3 ile benzer yapılara gider (+0.1).' },
      ],
    },
    '9b': {
      text: '9...Be7: fil e7’ye gelişir; rok hazırlanır.',
      amac: 'Şahı hızla güvenceye almak ve f6 atını korumak.',
      neden: 'Motor 9...Ne5, 9...Be7 ve 9...Bb7’yi eşit buluyor (+0.15). 9...Ne5 10.f4 Nc4 11.Bd4 Nxb2 ile b2’yi kapmak mümkündü, ama Tal önce gelişimini tamamlamayı seçti; b2 fikrini daha sonra a5–c4–b2 yoluyla gerçekleştirecek.',
      diger: [
        { move: '9...Ne5', text: '10.f4 Nc4 11.Bd4 Nxb2 ile Siyah piyon kapar ama şahı merkezde kalır (+0.15).' },
        { move: '9...Bb7', text: '10.f4 d6 11.Kh1 Be7 ile aynı yapıya gider (+0.15).' },
      ],
    },
    '10w': {
      text: '10.f4: f-piyonu iki kare ilerler.',
      amac: 'e5 ve f5 itişlerine hazırlanmak, f-hattını kaleye açmak ve Siyahın f6 atını kovalamak.',
      neden: 'Rok sonrası Beyazın standart saldırı planı (Motor: +0.1). 10.Qe2 ya da 10.Kh1 daha yavaştır; f4 hemen e5 tehdidi kurduğu için Siyahı ...d6’ya zorlar.',
      diger: [
        { move: '10.Qe2', text: 'Önce vezir; 10...O-O 11.f4 d6 ile benzer konumlar (+0.1).' },
        { move: '10.Kh1', text: 'Şahı çapraz şahlardan önceden kaçırır (+0.1); bu oyunda ileride ...Ba7+ geldiği için anlamlı bir hazırlık olabilirdi.' },
      ],
    },
    '10b': {
      text: '10...d6: Siyah e5 karesini kontrol eder; yapı f4’lü Scheveningen’e (ECO B82) döner.',
      amac: 'e4-e5 itişini önleyip f6 atını korumak; ileride ...e5 ya da ...d5 ile merkezde karşılık vermeyi hazırlamak.',
      neden: 'Gerekli bir hamle. 10...O-O? 11.e5 Ne8 ile at geri itilir (Motor: +0.35) ve 10...Nb4 11.a3 Nxd3 12.cxd3 Bb7 de Beyazı rahatlatır (+0.5).',
      diger: [
        { move: '10...O-O', text: '11.e5 Ne8 ile Siyahın atı pasifleşir (+0.35).' },
        { move: '10...Nb4', text: 'd3 filini değişmek ister, ama 11.a3 ile Beyaz tempo kazanır (+0.5).' },
      ],
    },
    '11w': {
      text: '11.Qf3: vezir f3’e gelir.',
      amac: 'Şah kanadı saldırısını desteklemek (Qg3 ya da Qh3 geçişleri), e4’ü korumak ve f-hattında f4–f5’i desteklemek.',
      neden: 'Motor 11.Qf3, 11.h3 ve 11.Kh1’i eşit buluyor (+0.2). Ama bu karenin bir bedeli var: vezir artık b7–f3 uzun çaprazında duruyor. Siyah fili b7’ye geldiğinde aradaki engeller (e4, d5) kalkarsa vezir tehlikeye girer; oyunun düğümü burada atıldı.',
      diger: [
        { move: '11.Kh1', text: 'Şahı g1–a7 çaprazından çıkarır (+0.2); sakin bir hazırlık.' },
        { move: '11.h3', text: 'g4 ve ...Ng4’e karşı önlem (+0.2).' },
      ],
    },
    '11b': {
      text: '11...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleleri birleştirmek.',
      neden: 'Doğal ama Motor 11...Rb8’i (+0.1) tercih ediyor; rok Beyaza 12.a4 ile vezir kanadında daha iyi bir anda saldırma imkânı verir (+0.4). Tal yine de şahını önceden saklayıp merkezde açılacak mücadeleye hazırlandı.',
      diger: [
        { move: '11...Rb8', text: 'b-piyonunu önceden destekler; 12.a4 bxa4 sonrası b-hattı Siyahın olur (+0.1).' },
        { move: '11...b4', text: 'Hemen c3 atını kovalamak; 12.Na4 Rb8 ile at kenarda kalır (+0.25).' },
      ],
    },
    '12w': {
      text: '12.a4: Beyaz b5 piyonunu sorgular.',
      amac: 'Siyahı bir karar vermeye zorlamak: ...bxa4 ile vezir kanadı yapısı bozulur, ...b4 ile c3 atı kovalanır ama c4 ve b4 civarı zayıflar.',
      neden: 'Motorun ilk tercihi (+0.4). 12.g4 (+0.1) gibi doğrudan saldırı hamlelerine göre a4, Siyahın vezir kanadı oyununu yavaşlatır ve b3 atını aktifleştirir.',
      diger: [
        { move: '12.g4', text: 'Doğrudan şah kanadı saldırısı; 12...b4 13.Na4 ile at kenara gider (+0.1).' },
        { move: '12.Kh1', text: 'Sakin bir bekleme hamlesi (0.0).' },
      ],
    },
    '12b': {
      text: '12...b4: piyon c3 atına saldırır.',
      amac: 'c3 atını e4 ve d5 karelerinden uzaklaştırmak; ...d5 kırılmasının önünü açmak.',
      neden: '12...bxa4 13.Rxa4 Bd7 (+0.3) de mümkündü, ama Siyahın a6 piyonu yalnız kalırdı. 12...Bb7? ise 13.axb5 axb5 14.Nxb5 ile piyon kaybettirir (+0.6). Tal ...b4 ile merkezi açma planını seçti.',
      diger: [
        { move: '12...bxa4', text: '13.Rxa4 Bd7 14.Rc4 sonrası Beyaz c-hattında aktif (+0.3).' },
        { move: '12...Bb7', text: '13.axb5 axb5 14.Nxb5 Qb8 ile Siyah piyon kaybeder (+0.6).' },
      ],
    },
    '13w': {
      text: '13.Ne2: at e2’ye çekilir.',
      amac: 'Atı g3 üzerinden şah kanadına (h5, f5) getirmek ya da d4’e geri koymak.',
      neden: 'Motorun ilk tercihi (+0.4). 13.Nb1 ya da 13.Nd1 atı oyundan çıkarır; e2’den at hem g3’e hem d4’e gidebilir. Bedeli, d5 ve e4 karelerinin artık bu atla korunmamasıdır.',
      diger: [
        { move: '13.Nd1', text: 'At f2 üzerinden e4’ü korumaya gider (+0.25), ama yavaş.' },
        { move: '13.Nb1', text: 'At d2’ye gelir (0.0); pasif.' },
      ],
    },
    '13b': {
      text: '13...e5: Siyah merkezde yer alır ve f4 piyonuna saldırır.',
      amac: 'Beyazı f4 piyonu hakkında karar vermeye zorlamak; ...exf4 ile e5 karesini atlara açmak ya da Beyaz f5 oynarsa ...d5 ile merkezi kırmak.',
      neden: 'Motorun ilk tercihi (+0.25). Beyaz şah kanadında ilerlemeye hazırlanırken Siyah merkezde gerilim yaratır. 13...Na5 de mümkündü, ama ...e5 hem f4’ü vurur hem ...d5 için hazırlık olur.',
      diger: [
        { move: '13...Na5', text: '14.Nxa5 Qxa5 15.Ng3 Bb7 ile at değişir (+0.35).' },
        { move: '13...Re8', text: '14.a5 e5 15.Bb6 ile Beyazın vezir kanadı baskısı artar (+0.4).' },
      ],
    },
    '14w': {
      text: '14.f5: Beyaz piyonu ilerletip e5’in önünü kapatır ve ...exf4’ü önler.',
      amac: 'Şah kanadında alan kazanmak; g4–g5 ile f6 atını kovalama ve d5 karesine baskı yapma.',
      neden: 'Motor 14.h3, 14.Kh1 ve 14.a5’i çok az daha iyi buluyor (+0.1); 14.f5 sonrası −0.0. f5 ile Beyaz e5 piyonunu sabitler ama e4’ü tek başına bırakır ve d5 kırılmasını engelleyecek c3 atı artık yoktur. Böylece Siyahın merkezde vuruşu çok güçlü hale gelir.',
      diger: [
        { move: '14.h3', text: '14...exf4 15.Qxf4 Ne5 ile gerilim sürer (+0.1); Beyaz merkezi açık tutar.' },
        { move: '14.a5', text: 'Vezir kanadında b6 karesini zayıflatmak (+0.1): 14...exf4 15.Qxf4 Ne5.' },
        { move: '14.Kh1', text: 'Bekleme; 14...exf4 15.Nxf4 Ne5 16.Qg3 (+0.1).' },
      ],
    },
    '14b': {
      text: '14...d5! Siyah merkezi açar ve e4’e saldırır.',
      amac: 'Beyazın şah kanadı saldırısına merkezden cevap vermek; e4 piyonunu değiştirip b7’ye gelecek fil için uzun çaprazı açmak.',
      neden: 'Beyaz f5 ile merkezi kapatmaya çalışırken Siyah ikinci merkez piyonunu oyuna sokar. Motor 14...Bb7’yi biraz daha iyi buluyor (15.a5 d5 ile, −0.0), ama 14...d5 de eşite yakın (+0.2) ve Tal’ın oyun planını en doğrudan uygular.',
      diger: [
        { move: '14...Bb7', text: 'Önce fil; 15.a5 d5 16.Bb6 dxe4 ile aynı fikir (−0.0).' },
        { move: '14...Re8', text: '15.a5 Bb7 16.Bb6 Qc8 ile daha yavaş (+0.1).' },
      ],
    },
    '15w': {
      text: '15.Ng3: at g3’e gelir; e4’ü korur ve h5 karesine bakar.',
      amac: 'e4 piyonunu korumak ve atı şah kanadına (h5) yaklaştırmak.',
      neden: 'Motorun ilk tercihi (+0.1). 15.exd5 hemen alabilirdi, ama 15...Nb4 ya da ...Nxd5 ile Siyah aktifleşir; 15.Nd2 (−0.4) ise b3 atının vezir kanadındaki rolünü bırakır.',
      diger: [
        { move: '15.a5', text: '15...Bb7 16.Bb6 Qc8 ile vezir kanadında baskı (−0.1).' },
        { move: '15.Nd2', text: '15...Rd8 16.Ng3 Bb7 ile Siyah merkezde rahat (−0.4).' },
      ],
    },
    '15b': {
      text: '15...Na5: at a5’e gelir; c4 karesine ve b3 atına yönelir.',
      amac: 'Atı c4’e getirip e3 filine ve b2’ye baskı yapmak; d5 piyonunu gerekirse geçici olarak vermek.',
      neden: 'Motor 15...Bb7’yi daha iyi buluyor: 16.exd5 Nd4! 17.Nxd4 Bxd5 ile piyon hemen geri gelir (+0.2). 15...Na5 ile Tal bir piyonu bilerek verdi (+0.5) ve b7 filinin çaprazını, atın c4’ü işgalini ödül olarak aldı. İnisiyatif için piyon vermek Tal’ın üslubuna uygundu.',
      diger: [
        { move: '15...Bb7', text: '16.exd5 Nd4! 17.Nxd4 Bxd5 18.Qe2 exd4 ile Siyah merkezde güçlü (+0.2).' },
        { move: '15...dxe4', text: '16.Nxe4 Bb7 17.Nxf6+ Bxf6 ile taş değişimi (+0.3).' },
      ],
    },
    '16w': {
      text: '16.exd5: Beyaz d5’i alır ve bir piyon kazanır.',
      amac: 'Merkezde serbest bir d-piyonu elde etmek ve Siyahın e5 piyonunu yalnız bırakmak.',
      neden: 'Motorun ilk tercihi ve açık farkla en iyisi (+0.5). 16.Nxa5 Qxa5 ya da 16.Nh5 piyonu kazanmadan dengeye döner (−0.1). Ama d5’teki piyon b7–f3 çaprazında Beyaz vezirinin önünde bir kalkan olacak; onu kımıldatmak her zaman taktik bir risk taşıyacak.',
      diger: [
        { move: '16.Nxa5', text: '16...Qxa5 17.Bg5 Bb7 ile Siyah piyonu geri alır (−0.1).' },
        { move: '16.Nh5', text: '16...Nxh5 17.Qxh5 Nc4 ile Siyah aktif (−0.1).' },
      ],
    },
    '16b': {
      text: '16...Bb7: Siyah d5’i hemen geri almak yerine fili uzun çapraza koyar.',
      amac: 'd5 piyonuna baskı yapmak ve onun arkasındaki f3 vezirini hedef almak; Beyazın d-piyonunu kımıldatmasını taktik açıdan yasaklamak.',
      neden: 'Motor 16...Nxb3 17.cxb3 Bb7’yi çok az daha iyi buluyor (+0.3/+0.5). Tal at değişimini istemedi; atı c4’e götürmek için tahtada tuttu. 16...Bd7 (+1.7) ise filin bütün gücünü boşa harcardı.',
      diger: [
        { move: '16...Nxb3', text: '17.cxb3 Bb7 18.Nh5 Nxh5 ile Siyah piyonu geri almaya yaklaşır (+0.3).' },
        { move: '16...Bd7', text: 'Fil d5’e bakmaz; 17.Nd2 Bc5 ile Beyaz piyonu rahatça tutar (+1.7).' },
      ],
    },
    '17w': {
      text: '17.Ne4: at e4’e gelir; f6 atına saldırır ve d6, c5 karelerine bakar.',
      amac: 'Nxf6+ ile d5 piyonunun en iyi saldırganlarından birini değiştirmek ve atı merkezde güçlü bir kareye yerleştirmek.',
      neden: 'Motorun ilk tercihi (+0.5). 17.Nh5 (+0.1) daha az etkili, 17.Be4 (−0.3) ise filin d3’teki rolünü bırakır. Ne4 ile at e4’ten Siyahın baskısını da keser.',
      diger: [
        { move: '17.Nh5', text: '17...Rfd8 18.Nxf6+ Bxf6 ile at değişir ama Beyaz merkezde zayıflar (+0.1).' },
        { move: '17.Be4', text: '17...Nc4 18.Bg5 Rfd8 ile Siyah aktif (−0.3).' },
      ],
    },
    '17b': {
      text: '17...Nc4: at c4’e girer; e3 filine ve b2’ye saldırır.',
      amac: 'e3 filini ve b2 piyonunu hedef almak; d3 filini rahatsız etmek.',
      neden: 'Motor 17...Rad8’i tercih ediyor (18.Nxf6+ Bxf6 19.Nc5 Bxd5, +0.5). 17...Nc4 ile Siyah Beyaza 18.Bxc4 Qxc4 19.Nxf6+ ile hem atı değişme hem piyonu tutma imkânı verdi (+1.0). Tal aktif atını öne sürdü, ama bu taktik bir fırsat yarattı.',
      diger: [
        { move: '17...Rad8', text: '18.Nxf6+ Bxf6 19.Nc5 Bxd5 ile Siyah piyonu geri alır (+0.5).' },
        { move: '17...Nxb3', text: '18.Nxf6+ Bxf6 19.cxb3 e4 ile benzer ama daha kötü (+1.1).' },
      ],
    },
    '18w': {
      text: '18.Bg5: fil g5’e gelip f6 atını bağlar.',
      amac: 'f6 atına baskıyı artırmak; Nxf6+ sonrası Siyahın piyon yapısını bozmak.',
      neden: 'Doğrusu 18.Bxc4 Qxc4 19.Nxf6+ Bxf6 20.Rad1 idi (Motor: +1.1): c4 atı değişir, d5 piyonu tutulur. 18.Bg5 e3 filini b2’nin korumasından çekti; 18...Nxb2 ile piyon geri geldi ve değerlendirme 0.0’a düştü.',
      diger: [
        { move: '18.Bxc4', text: '18...Qxc4 19.Nxf6+ Bxf6 20.Rad1 Rac8 21.Na5 ile Beyaz bir piyon önde ve sağlam (+1.1).' },
        { move: '18.Nxf6+', text: '18...Bxf6 19.Bxc4 Qxc4 20.Rad1 ile aynı fikir (+1.1).' },
        { move: '18.Bc5', text: '18...Bxc5+ 19.Nbxc5 Nxe4 20.Nxe4 Bxd5 ile Siyah piyonu geri alır (+0.3).' },
      ],
    },
    '18b': {
      text: '18...Nxb2: at b2’yi alır ve piyon geri gelir.',
      amac: 'Malzemeyi eşitlemek; at b2’den d3 filine ve a4 piyonuna saldırır.',
      neden: 'Motorun ilk tercihi (−0.2). 18...Kh8 (+0.3) ya da 18...Bxd5 19.Nxf6+ Bxf6 20.Qxd5 (+0.5) daha kötü. Önemli bir ayrıntı: b2’deki at d3’ü vurduğu için Beyaz ileride sürekli taş değişimine zorlanacak.',
      diger: [
        { move: '18...Bxd5', text: '19.Nxf6+ Bxf6 20.Qxd5 Nb6 ile Beyaz piyonu tutar (+0.5).' },
        { move: '18...Kh8', text: '19.Bxf6 gxf6 20.Ng5 ile Siyah şahı açılır (+0.3).' },
      ],
    },
    '19w': {
      text: '19.d6? piyon c7 vezirine ve e7 filine aynı anda saldırır.',
      amac: 'Çatal: vezir kaçarsa e7 fili düşer; Beyaz malzeme kazanmayı umar.',
      neden: 'Ciddi hata. d5 piyonu b7 filinin f3 vezirine giden yolunu kesiyordu; d6’ya gidince çapraz açılır ve 19...Qxd6! 20.Nxd6 Bxf3 ile Siyah veziri geri alır (Motor: −1.5). 19.Bxf6 Bxf6 20.a5 ile Beyaz dengede kalırdı (0.0).',
      diger: [
        { move: '19.Bxf6', text: '19...Bxf6 20.a5 Rfd8 21.Nxf6+ gxf6 22.Be4 Nc4 ile denge (0.0).' },
        { move: '19.Nxf6+', text: '19...Bxf6 20.Bxf6 gxf6 21.Be4 Rfd8 ile Siyah biraz daha iyi (−0.4).' },
        { move: '19.Kh1', text: '19...Bxd5 20.Bxf6 gxf6 21.Nxf6+ Bxf6 22.Qxd5 Nxd3 ile Siyah üstün (−1.1).' },
      ],
    },
    '19b': {
      text: '19...Qxd6! vezir d6 piyonunu alır ve kendini at karşısına verir.',
      amac: 'Veziri b7–f3 çaprazında geri almak: 20.Nxd6 Bxf3 sonrası Siyah ...Bxd6 ile atı da toplar ve bir piyon önde kalır.',
      neden: 'Tek iyi hamle (Motor: −1.1). Vezir kaçarsa e7 fili düşer, fil e4’ü alırsa vezir gider: 19...Qb6+ 20.Be3 Qxd6 21.Nxf6+ (+2.8) ve 19...Bxe4 20.Bxe4 Bxd6 (+2.9) kaybeder. Tal’ın 16...Bb7 ile yaptığı yatırım burada geri döndü.',
      diger: [
        { move: '19...Bxe4', text: '20.Bxe4 Bxd6 21.Bxf6 gxf6 ile Beyaz vezir için iki taşı aşan malzeme kazanır (+2.9).' },
        { move: '19...Qb6+', text: '20.Be3 Qxd6 21.Nxf6+ Bxf6 sonrası Siyah taş kaybeder (+2.8).' },
      ],
    },
    '20w': {
      text: '20.Nxd6: at veziri alır.',
      amac: 'Malzemeyi geri almak; Beyazın başka bir seçeneği yoktur.',
      neden: 'Vezir d6’da e4 atına ve d3 filine bakıyor; almamak daha kötü: 20.Bxf6 Qb6+ 21.Kh1 gxf6 (−2.0) ya da 20.Rab1 Nxd3 21.Nxd6 Bxf3 (−1.8).',
      diger: [
        { move: '20.Bxf6', text: '20...Qb6+ 21.Kh1 gxf6 ile Siyah vezirini korur ve iyi durumda (−2.0).' },
        { move: '20.Rab1', text: '20...Nxd3 21.Nxd6 Bxf3 22.Rxf3 ile Siyah taş fazlası (−1.8).' },
      ],
    },
    '20b': {
      text: '20...Bxf3: b7 fili açılan çaprazda Beyaz vezirini alır.',
      amac: 'Veziri geri almak; uzun çaprazın işi tamamlandı.',
      neden: 'Zorunlu ve tek hamle (−1.2). 20...Bxd6? 21.Qxb7 ile Beyaz vezirle kalır (+6.1).',
      diger: [
        { move: '20...Bxd6', text: '21.Qxb7 Nxd3 22.cxd3 ile Beyaz vezir fazlası (+6.1).' },
      ],
    },
    '21w': {
      text: '21.Rxf3: kale fili geri alır.',
      amac: 'Malzemeyi eşitlemek ve kaleyi üçüncü yatayda aktifleştirmek (Rg3+ ya da Rh3 olasılıkları).',
      neden: 'Motor 21.Bxf6, 21.Rxf3 ve 21.gxf3’ü eşit buluyor (−1.3). gxf3 şahı açar, Rxf3 ise kaleye aktif bir rol verir; Spasski en doğal olanı seçti.',
      diger: [
        { move: '21.gxf3', text: '21...Bxd6 22.Bxf6 Nxd3 23.cxd3 ile Beyazın piyon yapısı bozulur (−1.3).' },
        { move: '21.Bxf6', text: '21...gxf6 22.Rxf3 Bxd6 23.Be4 ile aynı yapı (−1.3).' },
      ],
    },
    '21b': {
      text: '21...Bxd6: e7 fili d6 atını alır. Siyah artık Beyazın d-piyonunu kazanmış durumda.',
      amac: 'Fazladan piyonu kalıcı hale getirmek.',
      neden: 'Tek hamle (−1.3); at d6’da kalsaydı Siyah taş kaybederdi: 21...Nxd3 22.Rxd3 Bxd6 23.Bxf6 (+3.2).',
      diger: [
        { move: '21...Nxd3', text: '22.Rxd3 Bxd6 23.Bxf6 gxf6 24.Rxd6 ile Beyaz taş fazlası (+3.2).' },
      ],
    },
    '22w': {
      text: '22.Bxf6: fil f6 atını alır.',
      amac: 'Siyahın piyon yapısını bozmak ve ...e4 tehdidini önlemek.',
      neden: 'Motorun ilk tercihi (−1.3). Siyah ...e4 ile d3 filini ve f3 kalesini çatallamayı tehdit ediyordu: 22.Kf1? e4 23.Bxf6 Nxd3 (−1.6). Bxf6 hem bu tehdidi azaltır hem de f6’daki atın e4’e ya da d5’e gelmesini engeller.',
      diger: [
        { move: '22.Kf1', text: '22...e4 23.Bxf6 Nxd3 24.Re3 ile Siyah çok aktif (−1.6).' },
        { move: '22.Rh3', text: '22...Rfc8 23.Bxf6 gxf6 24.Be4 ile benzer (−1.6).' },
      ],
    },
    '22b': {
      text: '22...gxf6: Siyah piyonla alır.',
      amac: 'Malzemeyi korumak; piyon yapısı bozulsa da vezirler olmadığı için şah tehlikede değil.',
      neden: 'Zorunlu: 22...e4? 23.Bxb2 exf3 ile Siyah taş kaybeder (+3.2), 22...Nxd3 23.Rg3 g6 24.Rxd3 ise taş kaybettirir (+3.6).',
      diger: [
        { move: '22...e4', text: '23.Bxb2 exf3 24.g3 ile Beyaz taş fazlası (+3.2).' },
      ],
    },
    '23w': {
      text: '23.Be4: fil b2 atının saldırısından kaçar ve uzun çapraza (b7, a8) bakar.',
      amac: 'Filin d3’teki tehlikeden kurtarmak ve onu b7 karesine giderek a6 piyonuna saldırabilecek aktif bir yere koymak.',
      neden: 'Motorun ilk tercihi (−1.4). 23.Ra2 23...Nxd3 ile filin değişmesine izin verir (−1.5); 23.Kf1 de benzer. Fil e4’te merkezi ve b7 ile a8’e bakıyor.',
      diger: [
        { move: '23.Kf1', text: '23...Rfc8 24.Be4 Ra7 ile aynı yapı (−1.4).' },
        { move: '23.Ra2', text: '23...Nxd3 24.Rxd3 Rfd8 ile Siyah fil çifti farkı olmadan da rahat (−1.5).' },
      ],
    },
    '23b': {
      text: '23...Rac8: kale c-hattına gelir ve c2’ye baskı yapar.',
      amac: 'c2 piyonuna baskı ve kaleyi aktifleştirmek.',
      neden: 'Motor 23...Ra7’yi tercih ediyor (24.Na5 Rc8, −1.3); kale a6 piyonunu ikinci yataydan korur. 23...Rac8 sonrası 24.Bb7! hem c8 kalesine hem a6’ya saldırabilirdi (−0.9).',
      diger: [
        { move: '23...Ra7', text: '24.Na5 Rc8 25.Kf1 Rac7 ile Siyah c-hattını alır, a6 güvende (−1.3).' },
        { move: '23...Rab8', text: '24.Na5 Rbc8 ile benzer (−1.2).' },
      ],
    },
    '24w': {
      text: '24.a5: piyon a5’e ilerler ve b6 karesini kontrol eder.',
      amac: 'a5 piyonunu sabitlemek ve b6’yı Siyah taşlarına kapatmak.',
      neden: 'Motor 24.Bb7’yi tercih ediyor (24...Rc7 25.Bxa6 e4 26.Re3, −0.8): fil tempo kazanarak a6’yı alır ve malzeme eşitlenir. 24.a5 bu fırsatı kaçırdı (−1.5).',
      diger: [
        { move: '24.Bb7', text: '24...Rc7 25.Bxa6 e4 26.Re3 ile Beyaz piyonu geri alır (−0.8).' },
        { move: '24.Ra2', text: '24...Nd1 25.Bb7 ile benzer fikir (−1.2).' },
      ],
    },
    '24b': {
      text: '24...Bb8: fil b8’e çekilir; ...Ba7 ile g1–a7 çaprazına geçecek.',
      amac: 'Fili Beyazın şahına bakan a7–g1 çaprazına götürmek.',
      neden: 'Motor 24...Rc7 ve 24...Bb8’i eşit buluyor (−1.6). 24...Rfd8? 25.Bb7 Rxc2 26.Rf2 ile Beyaz rahatlar (−1.3).',
      diger: [
        { move: '24...Rc7', text: '25.Rb1 Na4 26.Rd1 Be7 ile Siyah sağlam (−1.7).' },
        { move: '24...Rfd8', text: '25.Bb7 Rxc2 26.Rf2 ile Beyaz aktifleşir (−1.3).' },
      ],
    },
    '25w': {
      text: '25.g3: Beyaz şaha kaçış karesi yapar.',
      amac: 'Şah g2’ye gelebilsin; arka yatay şah tehditlerinden kurtulmak.',
      neden: 'Motor 25.Kf1 ya da 25.Rb1’i tercih ediyor (−1.4/−1.5). 25.g3 f3 kalesini ve f-piyonunu korumasız bırakır ve şahın g1–a7 çaprazındaki konumunu değiştirmez (−2.1).',
      diger: [
        { move: '25.Kf1', text: '25...Rfd8 26.Rb1 Rc4 ile şah merkeze yaklaşır (−1.4).' },
        { move: '25.Rb1', text: '25...Nc4 26.Kf1 Ba7 ile b4 piyonuna baskı (−1.5).' },
      ],
    },
    '25b': {
      text: '25...Rfd8: kale d-hattına gelir.',
      amac: 'İki kaleyle c- ve d-hatlarını tutmak; ...Rd1+ ya da ...Rd2 ile Beyazın ikinci yatayına girmek.',
      neden: 'Motor 25...Ba7+ ile 25...Rfd8’i eşit buluyor (−2.0/−2.1). Tal önce kaleyi açık hatta aldı; şah önce kaçsın ya da kaçmasın, ...Ba7+ zaten gelecek.',
      diger: [
        { move: '25...Ba7+', text: '26.Kf1 Kg7 27.Ra2 Nd1 ile Siyah aktif (−2.1).' },
        { move: '25...Kg7', text: '26.Kf1 Ba7 27.Rb1 Nc4 ile benzer (−1.9).' },
      ],
    },
    '26w': {
      text: '26.Re1: kale e1’e gelir ve e4 filini destekler.',
      amac: 'e4 filini korumak ve e-hattında Siyahın e5 piyonuna bakmak.',
      neden: 'Motor 26.Rb1’i biraz daha iyi buluyor (−1.7), çünkü b4 piyonuna baskı yapar. 26.Re1 fili korur ama şah hâlâ çapraz şahlara açık.',
      diger: [
        { move: '26.Rb1', text: '26...Ba7+ 27.Kf1 Nc4 28.Rd3 ile b4’e baskı (−1.7).' },
        { move: '26.Kf1', text: '26...Rd6 27.Rb1 Nd1 ile Siyahın atı aktif (−1.9).' },
      ],
    },
    '26b': {
      text: '26...Ba7+: fil şah çeker ve g1–a7 çaprazına yerleşir.',
      amac: 'Şahı g2’ye ya da h1’e göndermek; fil a7’den g1, f2 ve e3 karelerini kontrol eder.',
      neden: 'Motor 26...Kg7 ile eşit buluyor (−2.0). Ba7+ tempo kazanır ve fil burada uzun süre güçlü kalacak: ileride e3’e gelecek at ve d4’e gelecek fil bu çapraza dayanacak.',
      diger: [
        { move: '26...Kg7', text: '27.Re2 Ba7+ 28.Kg2 Rc4 ile aynı fikir (−2.0).' },
        { move: '26...Rd6', text: '27.Kg2 Ba7 28.Re2 h5 (−1.8).' },
      ],
    },
    '27w': {
      text: '27.Kg2: şah g2’ye kaçar.',
      amac: 'Şahı çapraz şahtan kurtarmak ve f3 kalesini korumak.',
      neden: 'Motorun ilk tercihi (−2.0). 27.Kf1 27...h5 ile şah merkezde rahatsız edilebilir (−2.1); 27.Kh1 ise şahı köşeye hapseder.',
      diger: [
        { move: '27.Kf1', text: '27...h5 28.Re2 Rd1+ 29.Re1 ile şah rahatsız (−2.1).' },
        { move: '27.Kh1', text: '27...Rc7 28.Kg2 ile zaman kaybı (−2.2).' },
      ],
    },
    '27b': {
      text: '27...Rd6: kale d6’ya gelip üçüncü yatayı tutar.',
      amac: 'Kaleyi ...Rc6/...Rb6 ya da ...Rd2 için esnek bir kareye koymak; e5 piyonunu korumak.',
      neden: 'Motor 27...Kg7’yi biraz daha iyi buluyor (−2.1). Rd6 savunma ve hücum arasında esnek bir kare.',
      diger: [
        { move: '27...Kg7', text: '28.Re2 Rc7 29.Kh3 h5 ile şah yapısı güçlenir (−2.1).' },
        { move: '27...Rc7', text: '28.Re2 Kg7 29.Kh3 Rd1 (−2.0).' },
      ],
    },
    '28w': {
      text: '28.Rff1: kale f1’e döner.',
      amac: 'Kaleyi Siyah atın saldırısından uzak tutmak ve f-hattında esneklik.',
      neden: 'Motor 28.Re2’yi tercih ediyor (−1.9): ikinci yatayı savunur ve c2’yi destekler. Rff1 pasif bir yeniden yerleşme (−2.1).',
      diger: [
        { move: '28.Re2', text: '28...Kg7 29.Nd2 Na4 30.Bd3 ile Beyaz konsolide olur (−1.9).' },
        { move: '28.g4', text: '28...Kh8 29.Re2 Rg8 ile şah kanadında karşılıklı fırsatlar (−2.0).' },
      ],
    },
    '28b': {
      text: '28...Nc4: at b2’den c4’e döner; e3 karesine yönelir.',
      amac: 'Kenardaki atı merkeze getirmek; e3 karesinden f1 kalesine ve c2’ye bakmak.',
      neden: 'Motor 28...h5’i biraz daha iyi buluyor (−2.1), ama Nc4 doğal ve güçlü bir manevra (−1.7). b2’deki at uzun süredir oyun dışındaydı.',
      diger: [
        { move: '28...h5', text: '29.Kh3 Kg7 30.Re2 Nd1 ile şah kanadını güçlendirir (−2.1).' },
        { move: '28...Kg7', text: '29.Kh3 h5 30.Re2 Nd1 (−2.0).' },
      ],
    },
    '29w': {
      text: '29.Kh3: şah h3’e gider.',
      amac: 'Şahı g1–a7 çaprazından uzaklaştırmak.',
      neden: 'Motor 29.Rf3’ü tercih ediyor (29...Nd2 30.Nxd2 Rxd2+ 31.Kh3, −1.7). Kh3 şahı kenara iter ve 29...Ne3 ile atın şah yakınına gelmesine izin verir (−2.4). 29.Kf3? Nd2+ ise daha kötü (−2.9).',
      diger: [
        { move: '29.Rf3', text: '29...Nd2 30.Nxd2 Rxd2+ 31.Kh3 ile Siyah aktif ama Beyaz dayanır (−1.7).' },
        { move: '29.Kf3', text: '29...Nd2+ 30.Nxd2 Rxd2 31.Bd3 ile Siyah kale ikinci yatayda (−2.9).' },
      ],
    },
    '29b': {
      text: '29...Ne3: at f1 kalesine ve f5 piyonuna saldırır; c2 ve d1 karelerine de bakar.',
      amac: 'Kaleyi kovalamak, c2 piyonunu almak ya da ...Nd1–f2+ ile şaha çatal kurmak.',
      neden: 'Motorun ilk tercihi (−2.5). Diğer hamleler (29...Kg7 −1.8) daha yavaş. At e3’te a7 filiyle korunuyor ve Beyaz şahı h3’te at sıçramalarına karşı çok zayıf.',
      diger: [
        { move: '29...Kg7', text: '30.Rd1 Bd4 31.Rd3 ile Beyaz rahatlar (−1.8).' },
        { move: '29...Kf8', text: '30.Rd1 Bd4 31.Rfe1 (−1.6).' },
      ],
    },
    '30w': {
      text: '30.Rf3: kale f3’e gelip e3 atına saldırır.',
      amac: 'Atı kovalamak ve kaleyi aktif tutmak.',
      neden: 'Motorun ilk tercihi (−2.7); 30.Rf2 ve 30.Rh1 biraz daha kötü. Ama kale f3’te, şah h3’te: f2 karesi bir at çatalına açık.',
      diger: [
        { move: '30.Rf2', text: '30...Nd1 31.Rfe2 Nf2+ 32.Kg2 ile Siyah aktif (−2.9).' },
        { move: '30.Rh1', text: '30...Rc4 31.Bd3 Rc3 ile Siyah baskıyı artırır (−2.9).' },
      ],
    },
    '30b': {
      text: '30...Nxc2?! at c2’yi alır.',
      amac: 'Bir piyon daha kazanmak.',
      neden: 'Motor 30...Nd1! 31.Bd3 Nf2+ 32.Rxf2 Bxf2’yi gösteriyor (−2.5): at şahı ve kaleyi çatallayıp kalite kazanır. Maç hamlesi piyon kazandırsa da at c2’de çivilenir: 31.Rc1 Rc4 ile Siyah dayanabilir, ama değerlendirme −0.9’a düşer.',
      diger: [
        { move: '30...Nd1', text: '31.Bd3 Nf2+ 32.Rxf2 Bxf2 33.Re4 Bd4 ile Siyah kalite fazlası (−2.5).' },
        { move: '30...Rc3', text: '31.Re2 Kg7 32.Nc1 Nd1 ile güçlü baskı (−2.0).' },
      ],
    },
    '31w': {
      text: '31.Rc1: kale c1’e gelir ve c2 atına saldırır.',
      amac: 'Atı c2’de çivilemek ve geri almaya çalışmak.',
      neden: 'Tek iyi hamle (−0.5). 31.Re2 Nd4 (−2.7) ya da 31.Rb1 Ne3 (−3.8) Beyazı pasif bırakır.',
      diger: [
        { move: '31.Re2', text: '31...Nd4 32.Rd3 Rdd8 ile at merkeze döner (−2.7).' },
        { move: '31.Rb1', text: '31...Ne3 32.Rf2 Nd1 ile Siyahın atı çok aktif (−3.8).' },
      ],
    },
    '31b': {
      text: '31...Rc4: kale c4’ten c2 atını korur.',
      amac: 'Atı savunmak ve e4 filine de baskı yapmak.',
      neden: 'Tek hamle (−0.7). 31...Rdc6? 32.Bxc6 Rxc6 (+0.1) ile kalite kaybı; 31...Rd7? 32.Rxc2 ise taş verir (+3.0).',
      diger: [
        { move: '31...Rdc6', text: '32.Bxc6 Rxc6 33.Rd3 Bd4 ile Siyah kalite verir, denge (+0.1).' },
        { move: '31...Rd7', text: '32.Rxc2 Rxc2 33.Bxc2 ile Beyaz taş kazanır (+3.0).' },
      ],
    },
    '32w': {
      text: '32.Rd3: kale d3’e gelir ve d6 kalesine saldırır.',
      amac: 'd6 kalesini kovalamak ya da değiştirmek ve c2 atının savunmasını zayıflatmak.',
      neden: 'Motor 32.Rd3’ü en iyi buluyor (−0.9); 32.Bxc2 Rdc6 33.Na1 Bd4 de yakın (−1.2). 32.Rxc2? Rxe4 ise Siyahı rahatlatır (−2.9).',
      diger: [
        { move: '32.Bxc2', text: '32...Rdc6 33.Na1 Bd4 34.Rd1 ile Beyaz c-hattında savunur (−1.2).' },
        { move: '32.Rxc2', text: '32...Rxe4 33.Rf1 Rd3 ile Siyah çok aktif (−2.9).' },
      ],
    },
    '32b': {
      text: '32...Bd4: fil d-hattını keser ve d6 kalesini korur.',
      amac: 'Kale değişimini önlemek ve fili merkezde güçlü bir kareye yerleştirmek.',
      neden: 'Tek iyi hamle (−1.1). 32...Rxd3 33.Bxd3 Rc3 34.Bxc2 (+2.1) ya da 32...Rxe4 33.Rxd6 (+2.6) Siyahı kaybettirir.',
      diger: [
        { move: '32...Rxd3', text: '33.Bxd3 Rc3 34.Bxc2 Be3 ile Beyaz taş fazlası (+2.1).' },
        { move: '32...Rxe4', text: '33.Rxd6 Nd4 34.Rxa6 ile Beyaz üstün (+2.6).' },
      ],
    },
    '33w': {
      text: '33.Rxc2? Beyaz c2 atını alır.',
      amac: 'Malzemeyi geri almak ve değişimlerle oyunu sadeleştirmek.',
      neden: 'Motor 33.Nd2!’yi tercih ediyor (33...Rc3 34.Rxc3 Bxc3 35.Nb1, −1.0): at c4 kalesine tempo kazanarak saldırır. Maçtaki değişim zinciri sonunda Siyah kale ve iki fazla piyonla kalır (−2.0).',
      diger: [
        { move: '33.Nd2', text: '33...Rc3 34.Rxc3 Bxc3 35.Nb1 ile at c3 filine saldırır, Beyaz dayanır (−1.0).' },
        { move: '33.Nxd4', text: '33...exd4 34.Rb3 Ne3 35.Rxc4 ile benzer ama daha kötü (−1.6).' },
      ],
    },
    '33b': {
      text: '33...Rxc2: Siyah kaleyle geri alır.',
      amac: 'Malzemeyi korumak.',
      neden: 'Zorunlu: 33...Rc3? 34.Rdxc3 bxc3 ile Beyaz taş kazanır (+3.3).',
      diger: [
        { move: '33...Rc3', text: '34.Rdxc3 bxc3 35.Kg2 ile Beyaz taş fazlası (+3.3).' },
      ],
    },
    '34w': {
      text: '34.Rxd4: kale d4 filini alır.',
      amac: 'Malzemeyi geri almak.',
      neden: 'Zorunlu (−2.0). 34.Rd1 (−5.0) ya da 34.Nxd4 (−5.4) Siyaha bir kale fazlası bırakır.',
      diger: [
        { move: '34.Nxd4', text: '34...exd4 35.Rb3 Ra2 ile Siyah fazladan kaleyle kazanır (−5.4).' },
      ],
    },
    '34b': {
      text: '34...exd4: Siyah e-piyonuyla alır ve d-hattında güçlü bir geçer piyon yaratır.',
      amac: 'Merkezde ve Beyazın şahından uzakta bir geçer piyon elde etmek; c2 kalesini Beyaza verip d6 kalesiyle oyunu sürdürmek.',
      neden: 'Motor 34...Rxh2+! 35.Kxh2 exd4’ü tercih ediyor (−2.1): c2’deki kale 35.Bxc2 ile zaten düşeceği için onunla h2 piyonunu almak bir piyon kazandırır. Maçta 34...exd4 35.Bxc2 sonrası −0.9.',
      diger: [
        { move: '34...Rxh2+', text: '35.Kxh2 exd4 36.Kg2 d3 ile Siyah aynı oyunsonunda fazladan bir piyonla (−2.1).' },
        { move: '34...Rxd4', text: '35.Bxc2 Rc4 36.Bd1 Rc3 ile Siyah aktif ama geçer piyonsuz (−1.7).' },
      ],
    },
    '35w': {
      text: '35.Bxc2: fil c2 kalesini alır.',
      amac: 'Malzemeyi geri almak; Siyahın kale ve iki piyonuna karşı Beyazın fil ve atı kalır.',
      neden: 'Zorunlu (−1.4). 35.Kg4? d3 ile c2 kalesi kurtulur ve Siyah bir kale fazlasıyla kalır (−6.9).',
      diger: [
        { move: '35.Kg4', text: '35...d3 36.h4 Rb2 ile Siyah iki kale ve geçer piyonla kazanır (−6.9).' },
      ],
    },
    '35b': {
      text: '35...d3: geçer piyon d3’e ilerler ve fili kovalar.',
      amac: 'Piyonu Beyazın taşlarına daha yakın, daha tehlikeli bir kareye ilerletmek ve fili savunmaya zorlamak.',
      neden: 'Motor 35...d3 ve 35...h5’i eşit buluyor (−1.6). d3 piyonu c2 ve e2 karelerini kontrol eder; bu, ileride 38...Re2 ile filin hapsedilmesinin temeli olacak.',
      diger: [
        { move: '35...h5', text: '36.Kg2 d3 37.Bd1 Rd5 ile aynı yapı (−1.6).' },
        { move: '35...Kg7', text: '36.Kg4 d3 37.Bd1 Rd5 ile şah aktifleşir, ama Beyaz da (−0.9).' },
      ],
    },
    '36w': {
      text: '36.Bd1: fil d1’e çekilir; d-piyonunun önünü kapatır.',
      amac: 'Piyonun d2–d1 yolunu kesmek.',
      neden: 'Zorunlu (−1.7). 36.Bxd3? Rxd3 (−5.9) ve 36.Bb1? d2 (−5.9) piyonun vezir olmasına izin verir.',
      diger: [
        { move: '36.Bxd3', text: '36...Rxd3 37.Nc5 Rd5 ile Siyah kale fazlası (−5.9).' },
        { move: '36.Bb1', text: '36...d2 37.Bc2 d1=Q 38.Bxd1 ile piyon vezir olur (−5.9).' },
      ],
    },
    '36b': {
      text: '36...Rd5: kale d5’ten f5 piyonuna ve e-hattına bakar.',
      amac: 'f5 piyonuna saldırmak ve kaleyi e5 üzerinden e2’ye götürmeye hazırlanmak.',
      neden: 'Motor 36...h5’i biraz daha iyi buluyor (−1.4); 36...Rd5 −0.9. Kale aktif, ama ...h5 ile önce Beyazın şahını g4’ten uzak tutmak daha kesindi.',
      diger: [
        { move: '36...h5', text: '37.Kg2 Rd5 38.Kf2 Re5 ile Siyah şahın g4’e gelmesini önler (−1.4).' },
        { move: '36...d2', text: '37.Kg2 Rd5 38.Kf3 Re5 ile piyon d2’de (−1.4).' },
      ],
    },
    '37w': {
      text: '37.Kg4: şah g4’e gelir ve f5 piyonunu korur.',
      amac: 'f5’i savunmak ve şahı merkeze yaklaştırmak.',
      neden: 'Tek hamle (−0.8). 37.g4 d2 (−2.9) ve 37.Kg2 Rxf5 (−3.1) kaybeder.',
      diger: [
        { move: '37.Kg2', text: '37...Rxf5 38.g4 Re5 ile Siyah iki piyon fazlası (−3.1).' },
        { move: '37.g4', text: '37...d2 38.Kg2 Re5 39.Bf3 ile Siyahın piyonu d2’de (−2.9).' },
      ],
    },
    '37b': {
      text: '37...Re5: kale e-hattına geçer.',
      amac: 'Kaleyi e2’ye götürmek; e2 karesi d3 piyonuyla korunuyor.',
      neden: 'Motor 37...Kg7, 37...Rb5 ve 37...Re5’i eşit buluyor (−0.8). Re5 basit bir tuzak kuruyor: şah e5 kalesine saldırırsa kale e2’ye gider.',
      diger: [
        { move: '37...Kg7', text: '38.Kf4 Re5 39.Bf3 Re2 ile benzer (−0.8).' },
        { move: '37...d2', text: '38.Kf4 Re5 39.Bf3 ile piyon d2’de (−0.8).' },
      ],
    },
    '38w': {
      text: '38.Kf4? şah e5 kalesine saldırır.',
      amac: 'Kaleyi kovalamak ve şahı merkeze yaklaştırmak.',
      neden: 'Belirleyici hata. Motor 38.Bf3!’ü öneriyor (38...Re2 39.Kf4 Kg7 40.h3, −0.8): fil önce e2 karesinden çıkar ve e4 üzerinden d3’e saldırabilir. Maçta kale 38...Re2 ile fili d1’de hapsetti (−2.3/−2.9).',
      diger: [
        { move: '38.Bf3', text: '38...Re2 39.Kf4 Kg7 40.h3 ile fil özgür, Beyaz dayanır (−0.8).' },
        { move: '38.Kh3', text: '38...Re1 39.Bg4 Rb1 40.Nc5 ile Siyahın kalesi vezir kanadı piyonlarını alır (−4.2).' },
      ],
    },
    '38b': {
      text: '38...Re2! kale e2’yi tutar ve d1 filini hapseder.',
      amac: 'Fili oyun dışı bırakmak: e2 kalesi d3 piyonuyla korunuyor, c2’yi d3 tutuyor ve b3’te Beyazın kendi atı var.',
      neden: 'Motorun ilk tercihi açık farkla (−2.9). 38...Kf8 ya da 38...Kg7 39.Bf3 ile filin kaçmasına izin verir (−0.8). Bu hamleyle Beyazın iki hafif taşı da savunmaya bağlanır.',
      diger: [
        { move: '38...Kf8', text: '39.Bf3 Re2 40.Nd4 Rxh2 ile Siyah piyon kazanır ama fil özgür (−0.8).' },
        { move: '38...Kg7', text: '39.Bf3 Re2 40.h3 Kf8 ile benzer (−0.8).' },
      ],
    },
    '39w': {
      text: '39.h4: h-piyonu ilerler.',
      amac: 'Şah kanadında hareket ve g4–g5 ile piyon değişimi hazırlamak.',
      neden: 'Motor 39.h3 ya da 39.g4’ü tercih ediyor (−3.1); 39.h4 ise 39...h5 ile şah kanadının kilitlenmesine izin verir (−5.0). Beyazın elinde iyi bir plan kalmamıştı.',
      diger: [
        { move: '39.h3', text: '39...Kf8 40.g4 Ke7 41.h4 ile şah kanadında piyon ilerlemesi (−3.1).' },
        { move: '39.g4', text: '39...Kf8 40.h3 Ke7 41.h4 (−3.1).' },
      ],
    },
    '39b': {
      text: '39...h5: Siyah g4 karesini kontrol eder ve Beyazın g4 ilerleyişini önler.',
      amac: 'Beyazın şah kanadı piyonlarını kilitlemek ve Beyaz şahının g4 karesini kesmek.',
      neden: 'Motorun ilk tercihi (−4.9). 39...h6 ya da 39...Kf8 de kazanır (−4.1), ama h5 Beyazın g4 ile karşı oyun kurmasını tamamen keser.',
      diger: [
        { move: '39...h6', text: '40.g4 Kf8 41.Kg3 Rb2 ile Siyah kazanır (−4.1).' },
        { move: '39...Kf8', text: '40.g4 h6 41.Kg3 Rb2 (−4.1).' },
      ],
    },
    '40w': {
      text: '40.Nc5: at c5’e gelir ve d3 piyonuna saldırır.',
      amac: 'd3 piyonunu almaya çalışmak.',
      neden: 'Motor 40.Nc5 ve 40.Nd4’ü eşit buluyor (−4.9/−5.0). At b3’ten ayrılınca d2 karesi korumasız kalır; ama Beyazın başka aktif bir fikri yok.',
      diger: [
        { move: '40.Nd4', text: '40...Re1 41.Bxh5 d2 42.Nb3 d1=Q 43.Bxd1 Rxd1 ile benzer (−5.0).' },
        { move: '40.g4', text: '40...hxg4 41.Kxg4 Rb2 ile Siyah vezir kanadını alır (−5.5).' },
      ],
    },
    '40b': {
      text: '40...Re1! kale d1 filine saldırır.',
      amac: 'Fili d1’den kovmak; fil giderse d-piyonu ilerler.',
      neden: 'Motorun ilk tercihi (−5.0). 40...Ra2 (−1.6) ya da 40...Kg7 (−1.6) Beyaza Nxd3 ile piyonu alma imkânı verir. Re1 sonrası fil ya kaçar (41...d2) ya da alınır.',
      diger: [
        { move: '40...Ra2', text: '41.Ke3 Rxa5 42.Nxd3 ile Beyaz piyonu alır (−1.6).' },
        { move: '40...Kg7', text: '41.Bb3 d2 42.Ne4 ile at d2 karesine yetişir ve Beyaz direnir (−1.6).' },
      ],
    },
    '41w': {
      text: '41.Bxh5: fil h5’i alır.',
      amac: 'En azından bir piyon almak.',
      neden: '41...d2 42.Nb3 d1=Q 43.Bxd1 Rxd1 sonrası Siyah ata karşı kale ile kazanılmış bir oyunsonuna geçer (Motor: −5.1). Spasski terk etti.',
      diger: [
        { move: '41.Bf3', text: '41...d2 42.Bxh5 d1=Q ile aynı sonuç (−5.3).' },
        { move: '41.Bb3', text: '41...d2 42.Nxa6 d1=R 43.Bxd1 ile aynı sonuç (−5.3).' },
      ],
    },
  },
  exercises: [
    { id: 'sta-1', kind: 'tekrar', plan: false, title: 'Çatala karşı çapraz',
      source: 'Spasski – Tal, Tiflis 1965 (19. hamle)',
      fen: 'r4rk1/1bq1bppp/p2P1n2/4pPB1/Pp2N3/1N1B1Q2/1nP3PP/R4RK1 b - - 0 19',
      prompt: 'Beyaz 19.d6 ile c7 vezirine ve e7 filine aynı anda saldırdı. Vezir kaçarsa e7 fili gider. Siyahın b7 fili ve Beyazın f3 veziri aynı çaprazda.',
      hint: 'd-piyonu d5’ten ayrıldı. b7 filinin önünde artık ne var?',
      line: ['Qxd6', 'Nxd6', 'Bxf3'],
      explanation: '**19...Qxd6! 20.Nxd6 Bxf3** Vezir d6 piyonunu alır; at veziri alınca b7 fili açılan çaprazda f3 vezirini alır, ardından ...Bxd6 ile d6 atı da düşer. Siyah bir piyon önde bir oyun sonuna geçer. Motor: ...Qxd6 −1.2, sonraki en iyi 19...Bxe4 +2.3. 20.Nxd6’dan sonra ...Bxf3 tek hamle.',
      link: 'Tal’ın 16...Bb7 ile açtığı uzun çapraz burada karşılığını verdi.' },
    { id: 'sta-2', kind: 'tekrar', plan: false, title: 'Fili hapsetmek',
      source: 'Spasski – Tal, Tiflis 1965 (38. hamle)',
      fen: '6k1/5p1p/p4p2/P3rP2/1p3K2/1N1p2P1/7P/3B4 b - - 5 38',
      prompt: 'Siyahın kalesi ve d3’te geçer piyonu var; Beyazın fili d1’de, atı b3’te. Beyaz şahı e5 kalesine saldırıyor.',
      hint: 'd3 piyonu c2 ve e2 karelerini kontrol ediyor. d1 filinin başka çıkışı var mı?',
      line: ['Re2'],
      explanation: '**38...Re2!** Kale e2’yi tutar. d3 piyonu c2 ve e2’yi koruduğu, b3’te de kendi atı durduğu için d1 filinin güvenli karesi kalmaz: Bc2 veya Bxe2 piyona taş verir. Beyaz pasif kalırken Siyah ...Re1 veya ...Rb2 ile ilerler. Motor: ...Re2 −3.2, sonraki en iyi 38...Kf8 −0.7.',
      link: 'Tal’ın geçer piyonu ve kalesi birlikte çalışarak Beyazın filini oyundan çıkardı.' },
    { id: 'sta-3', kind: 'transfer', plan: false, title: 'Vezir verip çaprazda geri almak',
      source: 'Spasski – Yusupov, Linares turnuvası 1990 (19. hamle)',
      fen: 'r5k1/1bp1q1pp/p2p4/1p6/5B2/1P3Q2/1PP2P1P/R3R1K1 b - - 0 19',
      prompt: 'f3’te taşlar değiştirildi ve Beyaz veziri f3’e geldi. Siyahın e7 veziri e1 kalesinin karşısında, b7 fili ise f3 vezirine bakıyor.',
      hint: 'Önce bir şahla, sonra uzun çaprazla.',
      line: ['Qxe1+', 'Rxe1', 'Bxf3'],
      explanation: '**19...Qxe1+! 20.Rxe1 Bxf3** Vezir e1 kalesini şahla alır; kale veziri alınca b7 fili uzun çaprazda f3 vezirini alır. Malzeme eşitlenir ve Siyahın fili güçlüdür. Motor: ...Qxe1+ −0.5, sonraki en iyi 19...Qg5+ +5.4; 19...Bxf3? 20.Rxe7 ise veziri kaybeder.',
      link: 'Tal’ın 19...Qxd6 20.Nxd6 Bxf3 dizisinin aynısı: vezir bir taşı alıp kendini verir, b7 fili f3’teki veziri geri alır.' },
    { id: 'sta-4', kind: 'transfer', plan: false, title: 'Önce şah, sonra vezir',
      source: 'Lombardy – Fischer, ABD Şampiyonası, New York 1960 (15. hamle)',
      fen: 'r4rk1/ppqbbppp/8/1Q6/1N2P3/4BP2/PP4PP/2R1KB1R b K - 0 15',
      prompt: 'Beyaz 15.Nxb4 ile Siyahın atını aldı. c1 kalesi c7 vezirine, d7 fili ise b5 vezirine bakıyor. Hamle Siyahta.',
      hint: '15...Bxb5 16.Rxc7 sonrası malzeme ne olur? Önce vezirle şah çekmeyi düşünün.',
      line: ['Qxc1+', 'Bxc1', 'Bxb5'],
      explanation: '**15...Qxc1+! 16.Bxc1 Bxb5** Vezir c1 kalesini şahla alır, sonra fil b5 vezirini alır. Siyah kale kazanmış olur; 17.Bxb5 Bxb4+ ile atı da geri alır. Motor: ...Qxc1+ −0.6, sonraki en iyi 15...Bxb5 +1.6.',
      link: 'Tal gibi Fischer de kendi veziri saldırı altındayken onu önce bir taş karşılığında verdi, sonra fille rakip veziri aldı.' },
  ],
  sources: [
    { title: 'OlimpBase: FIDE Dünya Şampiyonası döngüsü 1963–1966, Adaylar finali Spasski – Tal (Tiflis 1965)', url: 'https://olimpbase.org/ind-wcc/wc1966-candf.html' },
    { title: 'ChessBase: A selection of brilliancies – Spassky faces the Sicilian', url: 'https://en.chessbase.com/post/spassky-plays-the-sicilian' },
    { title: 'Chess.com blog: In the candidate chess championship cycle of 1964–1966… maybe Mikhail Tal’s last great event', url: 'https://chess.com/blog/introuble2/in-the-candidate-chess-championship-circle-of-1964-1966-maybe-mikhail-tals-last-great-event' },
    { title: 'Chess.com blog: B43 Sicilian, Kan Variation', url: 'https://www.chess.com/blog/kleelof/b43-sicilian-kan-variation' },
    { title: 'Lichess çalışması (FM Viktor Neustroev): Kan Varyantı, 5.Nc3 Qc7 6.Be3 ve 6.g3', url: 'https://lichess.org/study/embed/pwKDHqSR/5pTZfoaG' },
  ],
};
