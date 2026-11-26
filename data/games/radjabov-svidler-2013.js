// Radjabov – Svidler, ACP Kupası, Riga 2013 (2. tur, 1. oyun). Kaynak: PgnMentor (Svidler.pgn).
export default {
  id: 'radjabov-svidler-2013',
  theme: 'a6 fili ve a7 veziri: ...Bxd3 ile ...c4+ açarak şah',
  white: 'Teimour Radjabov', black: 'Peter Svidler',
  whiteShort: 'Radjabov', blackShort: 'Svidler',
  event: 'ACP Kupası, 2. tur', site: 'Riga', year: 2013, eco: 'B40',
  variation: 'Sicilya Savunması, 2.Nf3 e6 3.g3 (kapalı kuruluş)', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. g3 Nc6 4. Bg2 Nf6 5. Nc3 a6 6. O-O Qc7 7. d3 Be7 8. Nh4 d6 9. f4 b5 10. Bd2 Bb7 11. h3 b4 12. Ne2 a5 13. c4 bxc3 14. bxc3 d5 15. e5 Nd7 16. Nf3 O-O 17. g4 Ba6 18. Qc2 Rab8 19. Ng3 Qb6 20. Rab1 Qa7 21. Rbe1 Bxd3 22. Qxd3 c4+ 23. Be3 cxd3 24. Bxa7 Nxa7 25. f5 Nb5 26. Rd1 Nc5 27. Nd4 Nxc3 28. Rc1 Bg5 0-1`,

  summary: 'ACP Kupası’nın çeyrek finalinde (25 dakika + 10 saniye ile oynanan hızlı satranç) Radjabov, Sicilya’ya karşı 2.Nf3 e6 3.g3 ile kapalı bir kuruluş seçti. ChessBase bu tercihi bir **“anti-Paulsen”** olarak niteledi: Beyaz, 3.d4 ile Paulsen/Taimanov teorisine girmek yerine Bg2, d3, Nh4 ve f4 ile şah kanadında piyon saldırısı kurdu. Svidler buna klasik Sicilya karşı oyunuyla yanıt verdi: **...b5–b4** ile c3 atını kovdu, ...d5 ile merkezi kilitledi, sonra fili e5’e çarpan b7’den **a6’ya** (d3 piyonuna) ve veziri c5 piyonunun arkasına, **a7’ye** (a7–g1 çaprazına) taşıdı. Pozisyon yaklaşık dengedeydi (Motor: −0.4), ama Radjabov 21.Rbe1?? ile şahını g1’de, o çaprazın ucunda bıraktı. **21...Bxd3! 22.Qxd3 c4+!** ile c-piyonu hem açarak şah verdi hem d3 vezirine saldırdı; 23.Be3 cxd3 24.Bxa7 Nxa7 sonrası Siyah vezir değişiminden bir piyon fazlası ve d3’te derin bir geçer piyonla çıktı (Motor: −3.1). Svidler ardından önce geçer piyonunu korudu (26...Nc5!), sonra c3 piyonunu aldı ve 28...Bg5 ile ...Be3+ çatalını hazırlayınca Radjabov terk etti. Svidler ikinci oyunda berabere kalarak mini maçı 1½–½ kazandı.',
  intro: 'Bu oyun modüldeki 1.e4 c5 2.Nc3 e6 3.g3 a6 sırasıyla değil, **1.e4 c5 2.Nf3 e6 3.g3 Nc6 4.Bg2 Nf6 5.Nc3 a6 6.O-O Qc7 7.d3** sırasıyla başladı; sonuçta aynı yapıya varıldı: Beyazda Nc3, g3, Bg2, d3 (Kapalı Sicilya / Şah-Hint Atağı kuruluşu), Siyahta ...e6, ...a6, ...Qc7 (Paulsen tarzı kuruluş). Bu yapıda iki taraf farklı kanatlarda oynar. Beyaz Nh4 (ya da Ne2) ile f-piyonunun önünü açar, f4, g4 ve f5 ile şah kanadında yer kazanır; e5 itişi de f6 atını kovmak için hazır bekler. Siyah ise vezir kanadında **...b5–b4** ile c3 atını kovar, b-hattını açar ve ...d5 ile merkezde kendi payını alır. Oyunun asıl dersi, iki planın çarpıştığı anda bir “küçük” ayrıntının — g1’deki şah ile a7’deki vezirin aynı çaprazda durmasının — her şeyi belirlemesidir. Oyun hızlı satranç süresiyle oynandı; bu, 21. hamledeki körlüğü açıklamaya yardımcı olabilir, ama Svidler’in kombinasyonu hazırlayış biçimi her süre kontrolünde örnek alınacak kadar temizdir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Nh4 ve f4**: at f-piyonunun önünden çekilir, f4 ile e5 karesi kontrol edilir; ardından g4 ve f5 ile şah kanadında piyon çoğunluğu harekete geçer. Kapalı Sicilya’nın Smislov ve Spasski’den beri bilinen ana planıdır.',
      '**e5 itişi**: f6 atını kovmak, d6’yı sıkıştırmak ve Bg2’nin uzun çaprazını açmak. 10.e5! (Motor: +1.2) burada kaçırılan en güçlü fırsattı, çünkü 9...b5 a8 kalesini çaprazda savunmasız bırakmıştı.',
      '...b4 sonrası atı **Ne2–g3** yoluyla şah kanadına çevirmek; at g3’ten h5 ve f5 karelerine bakar.',
      '**c4 ve bxc3** ile b-hattının bir kısmını kapatıp merkezi c3–d3 piyonlarıyla sağlamlaştırmak; ama bu d3’ü kalıcı bir hedef yapar.',
      'Siyahın taşları vezir kanadında toplanırken **şahı güvenli kareye almak**: f4 oynandıktan sonra a7–g1 çaprazı açık kaldığı için Kh1 ya da Kh2 neredeyse zorunlu bir önlemdi (21.Kh1, Motor: −0.4).',
      'Malzeme kaybından sonra, f5 ve f6 ile şah kanadında karşı şans aramak; ama önce d3 piyonunu durdurmak (25.Rd1) daha dayanıklıydı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...b5–b4** ile c3 atını kovmak ve vezir kanadında yer kazanmak; ...a5 ile b4 piyonunu desteklemek. Kapalı yapıda Siyahın standart karşı oyunu budur.',
      '**...d5** ile merkezde karşılık vermek: e5 itişinden sonra merkez kapanır, ama Beyazın Bg2 fili e4 piyonuna değil kendi e5 piyonuna çarpar.',
      'Fili **b7’den a6’ya** yeniden konuşlandırmak: b7’de e5’e çarpan fil a6’dan d3 piyonuna baskı yapar ve ...c4 ilerleyişini destekler.',
      'Veziri **...Qb6–a7** yoluyla c5 piyonunun arkasına almak: vezir a7–g1 çaprazında durur, ...c4 oynanınca çapraz açılır ve g1’deki şah hedef olur.',
      'b-hattını kaleyle (...Rab8) almak; Beyaz kalesini bu hattan çektiği anda b-hattı ve d3 daha da zayıflar.',
      'Kombinasyondan sonra **önce geçer piyonu korumak** (26...Nc5), sonra zayıf piyonları toplamak (27...Nxc3) ve son olarak fil çatalıyla (28...Bg5, ...Be3+) bitirmek.',
    ] },
  },
  critical: [
    { move: '9b', title: '9...b5: doğru plan, erken zamanlama', text: 'Siyahın planı ...b5–b4’tür, ama 9...b5 a8 kalesini g2 filinin çaprazında korumasız bıraktı. Beyaz 10.e5! ile çaprazı açabilirdi: 10...dxe5 11.fxe5 Nxe5? 12.Bxa8 kale kazanır, 11...Nd7 12.Rxf7! Kxf7 13.Qh5+ ise şaha saldırı getirir (Motor: +1.2). Motor önce 9...Rb8’i öneriyor (−0.2): kale çaprazdan çekilir, sonra ...b5 güvenle gelir. Radjabov 10.Bd2 ile fırsatı kaçırdı ve Siyah 10...Bb7 ile a8’i korudu.' },
    { move: '13w', title: '13.c4: merkez sağlam, d3 zayıf', text: 'Beyaz 13.c4 ile Siyahı geçerken almaya davet etti; 13...bxc3 14.bxc3 sonrası Beyazın merkezi c3–d3 piyonlarıyla sağlamlaştı, ama d3 artık yarı açık b- ve d-hatlarında kalıcı bir hedefti. Motor 13.f5’i (−0.3) biraz daha iyi buluyor; 13.c4 (−0.5) da ciddi bir hata değil. Bu yapı oyunun geri kalanını belirledi: tam bu d3 piyonu 21. hamlede kombinasyonun kapısı oldu.' },
    { move: '17b', title: '17...Ba6: fil yeni hedefine gidiyor', text: '15.e5 sonrası b7 fili kendi d5 piyonuna ve Beyazın e5 piyonuna çarpan “kötü” bir fil olmuştu. Svidler onu a6’ya getirdi: burada fil d3 piyonuna bakar, ...c4 ilerleyişini destekler ve ileride ...Bxd3’ü mümkün kılar. Motor 17...Ba6’yı (−0.5) en iyi hamlelerle (17...a4, −0.5) aynı düzeyde buluyor.' },
    { move: '20b', title: '20...Qa7: vezir çapraza giriyor', text: '19...Qb6 ve 20...Qa7 ile vezir c5 piyonunun arkasına, a7–g1 çaprazına yerleşti. Şimdi çaprazda yalnızca c5 piyonu (ve kendi d4 karesi) vardı: piyon c4’e gidince çapraz açılır ve g1’deki şaha şah verilir. 20...Qa7 motorun ilk tercihi (−0.4); 20...Qc7 (−0.3) daha sakin, 20...Qd8 (+0.1) daha pasifti. Hamle aynı zamanda c5’i ve a5’i korur.' },
    { move: '21w', title: '21.Rbe1?? şah çaprazda kalıyor', text: 'Beyaz b-hattındaki kaleyi e1’e çekti; bu hem b-hattını Siyaha bıraktı hem de asıl tehdidi görmedi. Doğrusu 21.Kh1! ya da 21.Kh2’ydi (Motor: −0.4): şah çaprazdan çıkınca 21...Bxd3 22.Qxd3 c4 artık şah olmaz ve Beyaz 23.Qc2 ile fazla taşla kalır (Motor: +2.5). Maç hamlesinden sonra değerlendirme −3.1’e düştü: oyunun tek ama belirleyici hatası.' },
    { move: '22b', title: '21...Bxd3! 22.Qxd3 c4+! açarak şah', text: 'Fil d3 piyonunu aldı ve aynı anda c2 vezirine, f1 kalesine saldırdı; Beyaz almak zorundaydı (22.Qd1 c4+ daha kötü, −3.7). 22...c4+! ile piyon iki işi birden yaptı: a7 vezirinin önünden çekilerek g1’deki şaha şah verdi ve d3 vezirine saldırdı. Şahı kesen tek iyi hamle 23.Be3 idi; 23...cxd3 24.Bxa7 Nxa7 sonrası vezirler değişti ve Siyah temiz bir piyon fazlası ile d3’te derin bir geçer piyonla kaldı (Motor: −3.1). 22...c4 yerine 22...Rb2 ya da 22...a4 oynansaydı Beyaz bir taş fazlasıyla kalırdı (+1.6 / +2.3).' },
    { move: '26b', title: '26...Nc5!: önce d3’ü koru', text: '26.Rd1 d3 piyonuna saldırdı. 26...Nxc3? 27.Rxd3 ile piyon düşer ve Siyahın avantajı azalırdı (Motor: −3.5). Svidler önce 26...Nc5! ile d3’ü korudu (−4.7); 27.Nd4 sonrası c3 piyonu yine savunmasızdı ve 27...Nxc3 kaleye saldırarak alındı. Hamle sırası küçük görünür ama bir buçuk piyonluk fark yaratır.' },
    { move: '28b', title: '28...Bg5: Bxc1 ve Be3+ tehditleri', text: 'Fil g5’e gelerek c1 kalesine baktı ve ...Be3+ çatalını hazırladı. 29.Rxc3 Be3+ 30.Kh1 Bxd4 ile Siyah bir taş daha kazanır (Motor: −5.1); 29.Nb3 Bxc1 ya da 29.Nc6 Bxc1 ise kalite kaybettirir (−5.8 / −6.0). Beyazın hiçbir iyi devamı olmadığı için Radjabov terk etti.' },
  ],
  lessons: [
    'Kapalı Sicilya ve Şah-Hint Atağı yapılarında Siyahın ana karşı oyunu vezir kanadındadır: **...b5–b4** ile c3 atı kovulur, b-hattı açılır ve d3 piyonu hedef olur.',
    'Bir planı uygularken taşların açıkta kalıp kalmadığına bakın: 9...b5 doğru fikirdi ama a8 kalesini g2 filinin çaprazında bıraktı; 10.e5! bunu cezalandırabilirdi.',
    'Kötü fili iyi bir göreve gönderin: 15.e5 sonrası b7’de etkisiz kalan fil **a6’dan d3’ü** vurunca Siyahın bütün kombinasyonunun anahtarı oldu.',
    'Şah bir çaprazda, önünde yalnızca bir piyon varsa, o piyonun ilerleyişi **açarak şah** verebilir ve aynı anda başka bir taşa saldırabilir. f4 oynamış Beyaz için a7–g1 çaprazı tam bu tehlikeyi taşır; Kh1/Kh2 önceden önlem olarak düşünülmelidir.',
    'Rakibin taşları bir hedefe yönelirken her hamlede “Rakibim ne tehdit ediyor?” diye sorun: 21.Rbe1 makul görünen ama tehdidi görmeyen bir hamleydi; hızlı satrançta bu soruyu sormak daha da önemlidir.',
    'Malzeme kazandıktan sonra hamle sırası önemlidir: **önce kazanılan geçer piyonu koru, sonra saldır** (26...Nc5, 27...Nxc3).',
    'Avantajı paraya çevirirken çatal ve şah tehditleri arayın: 28...Bg5 hem c1 kalesine baktı hem ...Be3+ ile d4 atını almayı hazırladı.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 0-1: Peter Svidler (Siyah) kazandı. 28...Bg5 sonrası Beyaz ya 29.Rxc3 Be3+ 30.Kh1 Bxd4 ile bir taş daha kaybedecek ya da kalesini verecekti (Motor: −5.1); üstelik d3’teki geçer piyon hâlâ ilerlemeye hazırdı. Radjabov terk etti. Oyun ACP Kupası çeyrek finalinin ilk oyunuydu; Svidler ikinci oyunda berabere kalarak turu 1½–½ geçti.' },
    { q: 'Beyaz neden 3.d4 ile Açık Sicilya’ya girmedi?', a: '2...e6 ve 3...Nc6 kuruluşu Paulsen ve Taimanov sistemlerine gider; bunlar derin teori isteyen, Siyahın iyi bildiği hatlardır. Radjabov 3.g3 ile bu teoriden kaçındı ve kapalı bir yapı kurdu; ChessBase oyunun raporunda bunu bir “anti-Paulsen” olarak adlandırdı. Motor 3.d4’ü biraz daha iyi buluyor (+0.3’e karşı +0.2), fark küçüktür; seçim üslup ve hazırlık meselesidir.' },
    { q: 'Siyah 9...b5 ile neyi riske attı?', a: 'a8 kalesi g2 filinin uzun çaprazında kaldı ve e4 piyonu bu çaprazı kapatan tek engeldi. 10.e5! dxe5 11.fxe5 sonrası 11...Nxe5? 12.Bxa8 kale kazanırdı; 11...Nd7 ise 12.Rxf7! Kxf7 13.Qh5+ ile şaha saldırı getirir (Motor: +1.2). 9...Rb8 (−0.2) önce kaleyi çaprazdan alıp ...b5’i sonraya bırakan daha temiz bir sıraydı. Radjabov 10.Bd2 oynadı ve Svidler 10...Bb7 ile tehlikeyi kapattı.' },
    { q: 'Svidler fili neden b7’den a6’ya taşıdı?', a: '15.e5 ve ...d5 sonrası merkez kapandı; b7’deki fil artık kendi d5 piyonuna ve Beyazın e5 piyonuna çarpıyordu. a6’da ise fil d3 piyonuna baskı yapar ve ...c4 ilerleyişini destekler. 13...bxc3 14.bxc3 sonrası d3’ü koruyacak c- ya da e-piyonu kalmamıştı, bu yüzden fil burada gerçek bir hedef buldu. 21...Bxd3 kombinasyonu doğrudan bu manevraya dayanır.' },
    { q: 'Vezir a7’de ne yapıyordu?', a: '20...Qa7 ile vezir c5 piyonunun arkasına, a7–g1 çaprazına geldi. Bu çaprazda c5 piyonu dışında engel yoktu ve g1’de Beyazın şahı duruyordu. Böylece ...c4 her an açarak şah olabilirdi; tek yapılması gereken piyonu bir tempo ile, yani bir taşa saldırarak ilerletmekti. 21...Bxd3 22.Qxd3 bu tempoyu yarattı: beyaz vezir d3’e gelince ...c4+ hem şah hem vezire saldırı oldu.' },
    { q: 'Beyazın asıl hatası neydi ve nasıl korunabilirdi?', a: '21.Rbe1?? şahı g1’de bıraktı. 21.Kh1! (Motor: −0.4) ile şah çaprazdan çıkar; o zaman 21...Bxd3 22.Qxd3 c4 şah olmaz ve Beyaz 23.Qc2 ile vezirini kurtarıp bir taş fazla kalır (+2.5). 21.Kh2 de aynı işi görürdü (−0.4). Ayrıca 21.Rbe1 b-hattını Siyaha bıraktığı için kombinasyon olmasa bile şüpheli bir hamleydi.' },
    { q: '22.Qxd3 yerine Beyazın başka seçeneği var mıydı?', a: 'Yoktu. Fil c2 vezirine ve f1 kalesine aynı anda saldırıyordu. 22.Qd1 c4+ 23.Kh1 Bxf1 sonrası Siyah kaliteyle birlikte bir piyon kazanır (Motor: −3.7); 22.Qc1 ya da 22.Qa4 da benzer biçimde daha kötüdür (−3.9 / −4.0). 22.Qxd3 en az kaybettiren hamleydi ama ...c4+ yüzünden yine bir piyon kaybına ve kötü bir oyun sonuna gidiyordu.' },
    { q: 'Neden 26...Nxc3 hemen oynanmadı?', a: '26.Rd1 d3 piyonuna saldırıyordu. 26...Nxc3? 27.Rxd3 Nxa2 sonrası Siyah bir piyon kazanır ama en değerli varlığı olan derin geçer piyonu kaybeder (Motor: −3.5). 26...Nc5! d3’ü korudu (−4.7); c3 piyonu kaçamayacağı için Svidler onu bir hamle sonra, 27...Nxc3 ile kaleye tempo kazanarak aldı.' },
    { q: 'Beyaz 25.f5 yerine ne oynamalıydı?', a: 'Motor 25.Rd1’i öneriyor (−3.3): kale hemen d3 piyonuna saldırır ve Siyahın hamle sırasını zorlaştırır. 25.f5 şah kanadında bir karşı şans aradı ama tempo kaybettirdi; 25...Nb5 ile at c3 ve d4’e baktı ve değerlendirme −4.0’a düştü. Kötü bir oyun sonunda önce rakibin en güçlü kozunu (burada d3 piyonunu) durdurmak gerekir.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Beyaz şah piyonuyla merkeze girer, d5 ve f5 karelerini kontrol eder, f1 filine ve veziri yol açar.',
      amac: 'Merkezde yer kaplamak ve hızlı gelişmek. Radjabov e4 ile başlayıp Sicilya’ya karşı kapalı kuruluşları seven bir oyuncudur.',
      neden: 'En popüler ve motorun da en çok beğendiği ilk hamlelerden biri. Bu oyunda e4 piyonu ileride e5’e giderek Siyahın şah kanadını sıkıştıracak.',
      diger: [
        { move: '1.d4', text: 'Kapalı açılışlara gider (Motor: +0.2). Radjabov da sık oynar, ama Sicilya yapısı ortaya çıkmaz.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); Şah-Hint Atağı kuruluşuna doğrudan da gidilebilir.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini yandan kontrol eder ve asimetrik bir yapı kurar.',
      amac: 'Beyazın d4 ile kurmak istediği klasik merkezi önlemek, kazanma şansı yüksek dengesiz bir oyun almak.',
      neden: 'Svidler hem 1...e5’i hem Sicilya’yı oynayan geniş repertuvarlı bir oyuncudur. Sicilya, Beyaz kapalı kuruluş seçtiğinde bile Siyaha vezir kanadında doğal bir karşı oyun verir (…b5–b4).',
      diger: [
        { move: '1...e5', text: 'Simetrik ve sağlam (Motor: +0.2); Rus Savunması ve İspanyol’a gider.' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.4); merkez daha erken kapanır.' },
      ],
    },
    '2w': {
      text: '2.Nf3: at gelişir ve d4 karesine bakar. Modüldeki 2.Nc3 yerine bu sıra seçildi; Beyaz bir süre 3.d4 seçeneğini açık tutar.',
      amac: 'Siyahın 2. hamlesini görmeden kesin bir kuruluşa bağlanmamak; Açık Sicilya da, g3’lü kapalı kuruluş da hâlâ mümkün.',
      neden: 'Motorun ilk tercihi (+0.5). 2.Nc3 ile başlasaydı Beyaz Kapalı Sicilya’ya daha doğrudan bağlanırdı; 2.Nf3 sonrası g3 oynanınca atın f3’ten h4’e gitmesi ve f-piyonunun önünün açılması gerekecek, bu oyunda da öyle oldu (8.Nh4).',
      diger: [
        { move: '2.Nc3', text: 'Modüldeki hamle: Kapalı Sicilya (Motor: +0.3). At f3’e gelmediği için f4 daha kolay oynanır.' },
        { move: '2.c3', text: 'Alapin Sicilya’sı (Motor: +0.3); d4 ile piyon merkezi kurmayı hedefler.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini kontrol eder, f8 filine yol açar ve Paulsen/Taimanov tipi esnek bir kuruluşa hazırlanır.',
      amac: 'İleride ...d5 kırılmasını mümkün kılmak ve Beyaz kapalı oynarsa merkezde sağlam bir yapı kurmak.',
      neden: '...e6 hem Açık Sicilya’da (Paulsen, Taimanov, Kan) hem de g3’lü kapalı kuruluşlarda işe yarar: Bg2’nin uzun çaprazına ...d5 ile karşı durulabilir.',
      diger: [
        { move: '2...Nc6', text: 'Motorun ilk tercihi (+0.3); Klasik/Sveşnikov yollarına gider.' },
        { move: '2...d6', text: 'Najdorf ve Dragon’a giden en popüler sıra (Motor: +0.5).' },
      ],
    },
    '3w': {
      text: '3.g3: Beyaz fili g2’de fianketto yapmaya hazırlanır. 3.d4 ile Açık Sicilya’ya girmek yerine kapalı bir kuruluş seçer.',
      amac: 'Siyahın iyi bildiği Paulsen/Taimanov teorisinden kaçmak ve Şah-Hint Atağı / Kapalı Sicilya tipi, plan ağırlıklı bir oyun almak.',
      neden: 'ChessBase oyunun raporunda Radjabov’un seçimini bir “anti-Paulsen” olarak adlandırıyor. Motor 3.d4’ü (+0.3) biraz daha iyi buluyor, ama 3.g3 (+0.2) da sağlamdır; hızlı satrançta tanıdık bir yapıda oynamak pratik bir avantajdır.',
      diger: [
        { move: '3.d4', text: 'Açık Sicilya (Motor: +0.3): 3...cxd4 4.Nxd4 Nc6 / a6 ile Taimanov veya Kan.' },
        { move: '3.Nc3', text: 'Sırayı değiştirerek kapalı yapıya ya da d4’e gidebilir (Motor: +0.3).' },
        { move: '3.d3', text: 'Klasik Şah-Hint Atağı sırası; d3, g3, Bg2, Nbd2 (Motor yaklaşık +0.2).' },
      ],
    },
    '3b': {
      text: '3...Nc6: at gelişir, d4 ve e5 karelerine bakar.',
      amac: 'Merkezi kontrol etmek ve Beyazın ileride oynayabileceği d4’ü zorlaştırmak.',
      neden: 'Doğal gelişme hamlesi (Motor: +0.2). 3...d5 de aynı değerdedir ve merkezi hemen açar; Svidler önce taşlarını geliştirmeyi, piyon kararlarını sonraya bırakmayı seçti.',
      diger: [
        { move: '3...d5', text: '4.exd5 exd5 ile merkezi hemen açar (Motor: +0.2); Siyah izole/serbest d-piyonu yapısı alır.' },
        { move: '3...Be7', text: 'Daha yavaş (Motor: +0.4); Beyaz d4 ile merkezi alabilir.' },
      ],
    },
    '4w': {
      text: '4.Bg2: fil uzun çapraza yerleşir; e4 piyonunu destekler ve h1–a8 çaprazında vezir kanadına bakar.',
      amac: 'Şah kanadı fiyanketosunu tamamlayıp rok yapmak; ...d5 kırılmasını zorlaştırmak.',
      neden: 'Kuruluşun mantıklı devamı (Motor: +0.2). Bu fil ileride a8 kalesi için tehlike yaratacak (9...b5 sonrası 10.e5 fikri).',
      diger: [
        { move: '4.d4', text: 'Gecikmeli Açık Sicilya (Motor: +0.2); 4...cxd4 5.Nxd4 sonrası g3’lü bir Taimanov.' },
        { move: '4.d3', text: 'Aynı yapı, farklı sıra (Motor: +0.2).' },
      ],
    },
    '4b': {
      text: '4...Nf6: at gelişir ve e4 piyonuna baskı yapar.',
      amac: 'Beyazı e4’ü korumaya zorlamak ve kısa roka hazırlanmak.',
      neden: 'Motorun ilk tercihi (+0.2). e4’e baskı, Beyazı ya Nc3 ya d3 ya da Qe2 oynamaya zorlar.',
      diger: [
        { move: '4...d5', text: 'Merkezi hemen açar (Motor: +0.2).' },
        { move: '4...Be7', text: 'Esnek ama yavaş (Motor: +0.3).' },
      ],
    },
    '5w': {
      text: '5.Nc3: at e4’ü korur ve d5 karesine bakar. Şimdi modüldeki yapı oluşuyor: Nc3, g3, Bg2.',
      amac: 'e4’ü sağlamlaştırmak ve ...d5 kırılmasını zorlaştırmak.',
      neden: 'Motorun ilk tercihi (+0.2). Nc3 ile Beyaz hâlâ d4’ü tutabiliyor; ama at c3’e gelince ileride ...b5–b4 ile kovulmaya açık hâle gelir; bu oyunda da 11...b4 ile öyle oldu.',
      diger: [
        { move: '5.d3', text: 'Klasik Şah-Hint Atağı (Motor: +0.2); at d2’ye gider, c-piyonu serbest kalır.' },
        { move: '5.Qe2', text: 'e4’ü vezirle korur (Motor: +0.1); e5 itişine hazırlanır.' },
      ],
    },
    '5b': {
      text: '5...a6: Siyah b5 karesini hazırlar; vezir kanadı ilerleyişi için ilk adım.',
      amac: '...b5, ...Bb7 ve ...b4 ile vezir kanadında yer kazanmak ve c3 atını kovmak.',
      neden: 'Paulsen kuruluşunun karakteristik hamlesi. Motor 5...Be7 ya da 5...d5’i (+0.2) çok az daha iyi buluyor; 5...a6 (+0.2) aynı ölçüde oynanabilir ve Siyahın planını açıkça ilan eder.',
      diger: [
        { move: '5...d5', text: '6.exd5 exd5 ile merkezi açar (Motor: +0.2).' },
        { move: '5...Be7', text: 'Önce gelişme (Motor: +0.2); ...a6 sonraya kalır.' },
      ],
    },
    '6w': {
      text: '6.O-O: Beyaz rok yapar; şah güvenliği tamam, f1 kalesi f-hattına bağlanır.',
      amac: 'Şahı güvene almak ve ileride f4 ile açılacak f-hattında kaleyi hazır tutmak.',
      neden: 'Motorun ilk tercihi (+0.3). Ama bu şah g1’de, ileride açılacak a7–g1 çaprazının tam ucunda duruyor; oyunun kaderini belirleyen ayrıntı daha şimdiden tahtada.',
      diger: [
        { move: '6.d4', text: 'Açık Sicilya’ya geç geçiş (Motor: +0.2).' },
        { move: '6.d3', text: 'Kapalı yapıya bağlanır (Motor: +0.1).' },
      ],
    },
    '6b': {
      text: '6...Qc7: vezir c7’den e5 karesini kontrol eder ve c-hattına yerleşir.',
      amac: 'Beyazın e5 itişini zorlaştırmak ve Paulsen tipi esnek bir yapı kurmak.',
      neden: 'Paulsen sistemine özgü vezir yeri (Motor: +0.3). 6...d6 (+0.3) da benzerdir. Vezir ileride b6 ve a7’ye giderek oyunun kilit taşı olacak.',
      diger: [
        { move: '6...d6', text: 'Motorun ilk tercihi (+0.3); Scheveningen tipi yapı.' },
        { move: '6...Be7', text: 'Beyaza 7.d4 ile daha iyi bir Açık Sicilya verir (Motor: +0.6).' },
      ],
    },
    '7w': {
      text: '7.d3: Beyaz e4’ü piyonla korur ve merkezi kapalı tutar; artık Açık Sicilya yok.',
      amac: 'Sağlam bir merkezle şah kanadında Nh4, f4 ve f5 planını uygulamak.',
      neden: 'Motor 7.Re1 ya da 7.d4’ü biraz daha iyi buluyor (+0.3 / +0.2); 7.d3 sonrası değerlendirme eşit (−0.1). Radjabov plan açısından net bir yapı istedi; d3 ise ileride Siyahın a6 filinin hedefi olacak.',
      diger: [
        { move: '7.Re1', text: 'Motorun ilk tercihi (+0.3): d4’ü hazırlar ve e4’ü destekler.' },
        { move: '7.d4', text: '7...cxd4 8.Nxd4 ile Açık Sicilya’ya döner (Motor: +0.2).' },
      ],
    },
    '7b': {
      text: '7...Be7: fil gelişir; Siyah rok yapmaya hazırlanır.',
      amac: 'Gelişmeyi tamamlamak ve şahı güvene almak.',
      neden: 'Sağlam bir hamle (Motor: +0.1). Fil e7’de ileride h4’teki atı ve g5 karesini kontrol eder; oyunun sonunda 28...Bg5 ile belirleyici bir rol oynayacak.',
      diger: [
        { move: '7...d6', text: 'Aynı değerde (Motor: 0.0); önce e5’i kontrol eder.' },
        { move: '7...h6', text: 'g5’i kontrol eder (Motor: +0.1), ama 8.e5 sonrası merkez açılır.' },
      ],
    },
    '8w': {
      text: '8.Nh4: at f-piyonunun önünden çekilir; f4 ve f5 ile şah kanadı saldırısı geliyor.',
      amac: 'f4 ile e5’i kontrol etmek, sonra f5 ile e6’ya baskı yapmak. At h4’ten f5 karesine de bakar.',
      neden: 'Şah-Hint Atağı’nda Nf3’ten sonra f4 oynamanın tipik yolu. Motor 8.Ne2’yi (+0.2) tercih ediyor; 8.Nh4 (−0.1) atı kenara gönderir ve Siyaha ...Bxh4 değişimi fikri verir. Ama Radjabov için plan netliği önemliydi.',
      diger: [
        { move: '8.Ne2', text: 'Motorun ilk tercihi (+0.2): at f4’e ya da c3–d4’e gider, ...b4 ile kovulma derdi kalmaz.' },
        { move: '8.Re1', text: 'Merkezi güçlendirir (Motor: +0.1).' },
      ],
    },
    '8b': {
      text: '8...d6: Siyah e5 karesini kontrol eder ve Scheveningen tipi bir yapı kurar.',
      amac: 'Beyazın e5 itişine karşı hazırlıklı olmak ve c8 filine yol açmak.',
      neden: 'Motorun ilk tercihi (−0.2). f4 gelmeden önce e5’i kontrol altına almak doğal; ...d6 ileride ...d5 ile bir kez daha ilerleyecek.',
      diger: [
        { move: '8...Rb8', text: 'Önce kaleyi uzun çaprazdan çeker (Motor: −0.2); ...b5 güvenle gelir.' },
        { move: '8...O-O', text: 'Önce rok (Motor: −0.2).' },
      ],
    },
    '9w': {
      text: '9.f4: Beyazın şah kanadı planı başlar; e5 karesi kontrol edilir ve f5 hazırlanır.',
      amac: 'Şah kanadında piyon çoğunluğunu ilerletmek; e5 ve f5 itişleriyle Siyahın şahına doğru yer kazanmak.',
      neden: 'Motorun ilk tercihi (−0.1). Nh4’ten sonra mantıklı devam. Ama f4 ile g1–a7 çaprazındaki f2 piyonu da gitti: şah artık bu çaprazda piyon korumasından yoksun.',
      diger: [
        { move: '9.a3', text: '...b4’ü önceden önler (Motor: −0.2).' },
        { move: '9.Ne2', text: 'At c3’ten çekilerek ...b4 hedefini ortadan kaldırır (Motor: −0.2).' },
      ],
    },
    '9b': {
      text: '9...b5: vezir kanadı ilerleyişi başlar. Ama a8 kalesi g2 filinin çaprazında korumasız kalır.',
      amac: '...b4 ile c3 atını kovmak ve b-hattını açmak.',
      neden: 'Plan doğru, zamanlama yanlış. Motor 9...Rb8’i öneriyor (−0.2): kale çaprazdan çekilir ve ...b5 sonra gelir. 9...b5 sonrası 10.e5! ile Beyaz +1.2 alabilirdi; çünkü e4 kalkınca g2 fili a8’e kadar uzanır.',
      diger: [
        { move: '9...Rb8', text: 'Motorun ilk tercihi (−0.2): 10.f5 b5 ile aynı plan, ama a8 güvende.' },
        { move: '9...Bd7', text: 'Gelişmeye devam eder (Motor: 0.0); c6 atını destekler.' },
      ],
    },
    '10w': {
      text: '10.Bd2: fil gelişir ve a1 kalesiyle bağlantı kurulur. Ama 10.e5! fırsatı kaçar.',
      amac: 'Gelişmeyi tamamlamak ve kaleleri birleştirmek; fil d2’den b4 ve h6 karelerine bakar.',
      neden: 'Motor 10.e5!’i gösteriyor (+1.2): 10...dxe5 11.fxe5 Nxe5? 12.Bxa8 ile kale kazanılır (+3.7); 11...Nd7 12.Rxf7! Kxf7 13.Qh5+ ile şaha saldırı gelir; 10...Nd5 ise 11.Bxd5 exd5 12.Nxd5 ile piyon kaybettirir (+1.6). 10.Bd2 (−0.2) sağlam ama pasif bir hamle.',
      diger: [
        { move: '10.e5!', text: 'Motorun ilk tercihi (+1.2): uzun çaprazı açar, a8 kalesi ve f7 hedef olur.' },
        { move: '10.f5', text: 'Planın devamı (Motor: 0.0); 10...Rb8 ile Siyah çaprazdan kurtulur.' },
      ],
    },
    '10b': {
      text: '10...Bb7: fil uzun çapraza gelir; a8 kalesini korur ve e4 piyonuna baskı yapar.',
      amac: 'g2 filinin çaprazına karşı koymak ve e4 itişini / açılmasını Siyah lehine çevirmek.',
      neden: 'a8’i koruyarak 10.e5 türü taktikleri kapatır (Motor: −0.1). Motor 10...b4’ü (−0.4) biraz daha aktif buluyor: önce at kovulur, sonra fil gelir.',
      diger: [
        { move: '10...b4', text: 'Motorun ilk tercihi (−0.4): 11.Ne2 d5 12.e5 Nd7 ile aynı yapıya daha hızlı varılır.' },
        { move: '10...Rb8', text: 'Kaleyi çaprazdan alır (Motor: −0.3).' },
      ],
    },
    '11w': {
      text: '11.h3: g4 hazırlanır; Beyaz şah kanadı piyonlarını ilerletmek istiyor.',
      amac: 'g4 ve f5 ile şah kanadında yer kazanmak; g4’ün ...Nxg4 ile alınmasını önlemek.',
      neden: 'Plana uygun ama yavaş (Motor: −0.4). Motor 11.Ne2’yi (−0.1) tercih ediyor: atı ...b4 gelmeden kendisi yeniden konuşlandırır. h3 aynı zamanda ileride şah için h2 karesini açar.',
      diger: [
        { move: '11.Ne2', text: 'Motorun ilk tercihi (−0.1): ...b4 tempo kazanmaz.' },
        { move: '11.a3', text: '...b4’ü önler (Motor: −0.2).' },
      ],
    },
    '11b': {
      text: '11...b4!: c3 atı kovulur; kapalı yapıda Siyahın tipik fikri.',
      amac: 'Atı e4’ün savunmasından uzaklaştırmak ve vezir kanadında yer kazanmak.',
      neden: 'Motorun ilk tercihi (−0.4). At çekilince e4 zayıflar ve Siyah ...d5 kırılmasını daha rahat yapar; b-hattı da ...a5 ve ...a4 ile açılmaya hazırlanır.',
      diger: [
        { move: '11...O-O', text: 'Önce rok (Motor: −0.4); ...b4 bir hamle sonra.' },
        { move: '11...Nd7', text: 'At f6’dan çekilip e5’e baskı yapar (Motor: −0.3).' },
      ],
    },
    '12w': {
      text: '12.Ne2: at e2’ye çekilir; ileride g3’e gidecek.',
      amac: 'Atı şah kanadına, saldırının yapıldığı yere yeniden yönlendirmek.',
      neden: 'Motorun ilk tercihi (−0.3). 12.Na4 atı kenarda bırakır (−0.4), 12.Nb1 ise geri adımdır (−0.7). e2’den at g3, c1 ya da f4 karelerine gidebilir.',
      diger: [
        { move: '12.Na4', text: 'At c5 piyonuna bakar ama kenarda kalır (Motor: −0.4).' },
        { move: '12.Nb1', text: 'Atı d2’ye götürmek için geri çeker (Motor: −0.7).' },
      ],
    },
    '12b': {
      text: '12...a5: b4 piyonu desteklenir; Siyah ...a4–a3 ile vezir kanadı ilerleyişini sürdürmeye hazırlanır.',
      amac: 'b4’ü sağlamlaştırmak ve Beyazın a3 ya da c3 ile bu piyonu sökmesini zorlaştırmak.',
      neden: 'Motorun ilk tercihi (−0.3). 12...d5 da aynı değerde; Svidler önce vezir kanadındaki piyon zincirini güvenceye aldı.',
      diger: [
        { move: '12...d5', text: 'Merkezde hemen karşılık (Motor: −0.3): 13.e5 Nd7 14.c3 O-O.' },
        { move: '12...O-O', text: 'Önce rok (Motor: −0.2).' },
      ],
    },
    '13w': {
      text: '13.c4: Beyaz Siyahı geçerken almaya davet eder; b-hattı açılırsa c3–d3 piyonlarıyla merkezi tutmayı planlar.',
      amac: 'b4 piyonunun c3’e giderek yapıyı sıkıştırmasını önlemek ve d4 karesini kontrol etmek.',
      neden: 'Motor 13.f5’i (−0.3) biraz daha iyi buluyor; 13.c4 (−0.5) ciddi bir hata değil, ama 13...bxc3 14.bxc3 sonrası d3 piyonu artık hiçbir piyonla korunmuyor. Bu zayıflık 21. hamledeki kombinasyonun kapısı olacak.',
      diger: [
        { move: '13.f5', text: 'Motorun ilk tercihi (−0.3): 13...e5 ile merkez kapanır, Beyaz şah kanadında oynar.' },
        { move: '13.Qe1', text: 'Veziri şah kanadına hazırlar (Motor: −0.4).' },
      ],
    },
    '13b': {
      text: '13...bxc3: Siyah geçerken alır ve b-hattını açar.',
      amac: 'b-hattında kaleyle baskı kurmak ve d3’ü kalıcı bir hedef hâline getirmek.',
      neden: 'Motor 13...Nd7’yi (−0.5) biraz daha iyi buluyor; değişim (−0.1) Beyazın merkezini güçlendirir ama b-hattını açar ve d3’ü korumasız bırakır. Svidler’in seçimi uzun vadeli bir yapısal karardı: oyunun kombinasyonu doğrudan bu yapıdan doğdu.',
      diger: [
        { move: '13...Nd7', text: 'Motorun ilk tercihi (−0.5): 14.Nf3 Bf6 ile e5’e baskı; b4 yerinde kalır.' },
        { move: '13...O-O', text: 'Önce rok (Motor: −0.2).' },
      ],
    },
    '14w': {
      text: '14.bxc3: Beyaz b-piyonuyla geri alır; c3 ve d3 merkezi tutar.',
      amac: 'd4 karesini kontrol etmek ve piyon yapısını merkeze doğru toplamak.',
      neden: 'Neredeyse zorunlu: 14.Nxc3 (−0.7) b2’yi zayıf bırakır, 14.Bxc3 (−1.0) da benzer şekilde vezir kanadını açar. bxc3 ile değerlendirme dengede (0.0).',
      diger: [
        { move: '14.Nxc3', text: 'b2 geri kalmış ve b-hattında hedef olur (Motor: −0.7).' },
        { move: '14.Bxc3', text: 'Fil aktif olur ama b2 ve a2 zayıflar (Motor: −1.0).' },
      ],
    },
    '14b': {
      text: '14...d5: merkez kırılması; Siyah e4’e saldırır ve Beyazı karar vermeye zorlar.',
      amac: 'e4’ü sökmek ya da e5 itişini zorlayarak merkezi kapatmak; böylece Bg2’nin çaprazını da kendi d5 piyonuyla kesmek.',
      neden: 'Motor önce 14...O-O’yu (+0.1) öneriyor; 14...d5 (+0.3) biraz erken ama planlı. e5 gelince Bg2 fili kendi e5 piyonuna çarpacak, Siyahın b7 fili de kısıtlanacak; Svidler bu filin yeni görevini sonra bulacak (17...Ba6).',
      diger: [
        { move: '14...O-O', text: 'Motorun ilk tercihi (+0.1): önce şah güvenliği.' },
        { move: '14...Ba6', text: 'Fili hemen a6’ya getirir (Motor: +0.2).' },
      ],
    },
    '15w': {
      text: '15.e5: at f6’dan kovulur ve merkez kapanır.',
      amac: 'Şah kanadında yer kazanmak, Siyahın atını şah kanadından uzaklaştırmak ve f5 itişine zemin hazırlamak.',
      neden: 'Motor 15.exd5’i (+0.4) biraz daha iyi buluyor; 15.e5 (+0.3) da sağlam. Kapalı merkez Beyazın şah kanadı planına uyar, ama d3 artık kalıcı bir zayıflık ve Bg2 fili d5’e çarpıyor.',
      diger: [
        { move: '15.exd5', text: 'Motorun ilk tercihi (+0.4): 15...Nxd5 16.f5 ile oyun açılır.' },
        { move: '15.f5', text: '15...dxe4 ile merkez Siyah lehine açılır (Motor: 0.0).' },
      ],
    },
    '15b': {
      text: '15...Nd7: at d7’ye çekilir; e5 piyonuna baskı yapmaya ve c5’i desteklemeye hazırlanır.',
      amac: 'Atı merkezde tutmak ve ileride ...Nb6–c4 ya da ...Nc5 gibi manevraları hazırlamak.',
      neden: 'Tek iyi kare (Motor: +0.2). 15...Nh5 atı kenara atar (+0.5), 15...Ng8 ise 16.f5 ile çok zor bir pozisyon verir (+2.1).',
      diger: [
        { move: '15...Nh5', text: 'At kenarda kalır ve g4 ile kovulur (Motor: +0.5).' },
        { move: '15...Ng8', text: 'Çok pasif; 16.f5 ile Beyaz saldırır (Motor: +2.1).' },
      ],
    },
    '16w': {
      text: '16.Nf3: at merkeze döner; e5’i destekler ve d4 karesine bakar.',
      amac: 'h4 atını kenardan kurtarmak ve e5 piyonunu sağlamlaştırmak.',
      neden: 'Motor 16.f5’i (+0.2) öneriyor: 16...Ndxe5 17.fxe6 fxe6 ile şah kanadı açılır. 16.Nf3 sonrası −0.5: Beyaz atak momentumunu bir tempo kaybetti. Ama at h4’te ...Bxh4 değişimine de açıktı.',
      diger: [
        { move: '16.f5', text: 'Motorun ilk tercihi (+0.2): şah kanadını hemen açar.' },
        { move: '16.d4', text: 'Merkezi kilitler (Motor: −0.1); 16...Bxh4 17.gxh4 ile yapı zayıflar.' },
      ],
    },
    '16b': {
      text: '16...O-O: Siyah rok yapar; şah güvende, kaleler birleşir.',
      amac: 'Şahı güvene almak ve kaleleri b- ve c-hatlarında kullanmak.',
      neden: 'Motorun ilk tercihi (−0.6). Beyaz şah kanadında piyon itse de merkez kapalı olduğu için şah g8’de yeterince güvende; uzun rok bu yapıda anlamsızdır.',
      diger: [
        { move: '16...Rd8', text: 'Şahı ortada bırakır (Motor: −0.2).' },
        { move: '16...g6', text: 'f5’i önler ama şah kanadını zayıflatır (Motor: −0.1).' },
      ],
    },
    '17w': {
      text: '17.g4: Beyaz f5 için hazırlanır; şah kanadı piyonları ilerliyor.',
      amac: 'f5 itişini desteklemek ve ileride g5 ile Siyahın şah kanadını zorlamak.',
      neden: 'Motorun ilk tercihi (−0.4). Ama f4 ve g4 ilerledikçe g1’deki şahın önü boşalıyor: f2 piyonu artık yok, a7–g1 çaprazında şahı koruyan hiçbir piyon kalmadı.',
      diger: [
        { move: '17.Qc2', text: 'Önce d3’ü korur (Motor: −0.5).' },
        { move: '17.f5', text: '17...Ncxe5 18.Nxe5 Nxe5 ile piyon verir (Motor: −0.5).' },
      ],
    },
    '17b': {
      text: '17...Ba6!: fil b7’den a6’ya geçer; d3 piyonunu hedef alır.',
      amac: 'Kapalı merkezde etkisiz kalan fili yeni bir hedefe yöneltmek: d3 ve ...c4 ilerleyişi.',
      neden: 'Fil b7’de d5 ve e5’e çarpıyordu. a6’da d3’e baskı yapar; d3’ü koruyacak piyon da yok. Motor 17...Ba6’yı (−0.5) en iyi hamle 17...a4 (−0.5) ile aynı düzeyde buluyor. Bu manevra 21...Bxd3 kombinasyonunun temelidir.',
      diger: [
        { move: '17...a4', text: 'Motorun ilk tercihi (−0.5): ...a3 ile vezir kanadında yer kazanır.' },
        { move: '17...Rfb8', text: 'b-hattını alır (Motor: −0.4).' },
      ],
    },
    '18w': {
      text: '18.Qc2: vezir c2’de d3’ü korur ve b1–h7 çaprazına bakar.',
      amac: 'a6 filinin baskısına karşı d3’ü savunmak.',
      neden: 'Motor 18.Bc1’i (−0.6) çok az daha iyi buluyor; 18.Qc2 (−0.6) da aynı ölçüde. Ama vezir c2’de ileride ...Bxd3 ile tempo kazanılarak saldırıya açık olacak.',
      diger: [
        { move: '18.Bc1', text: 'Motorun ilk tercihi (−0.6): fil a3’e giderek c5’e baskı yapabilir.' },
        { move: '18.Be3', text: 'c5’e baskı (Motor: −0.8).' },
      ],
    },
    '18b': {
      text: '18...Rab8: kale b-hattını alır.',
      amac: 'Açık b-hattında baskı kurmak, Beyazın b-hattına girmesini önlemek ve ileride b2 karesine girmek.',
      neden: 'Motor 18...a4’ü (−0.6) biraz daha iyi buluyor; 18...Rab8 (−0.5) doğal bir hamle. a-kalesi oyuna girer, f-kalesi şah kanadında kalır.',
      diger: [
        { move: '18...a4', text: 'Motorun ilk tercihi (−0.6): ...a3 ile c1 ve b2 karelerini zayıflatır.' },
        { move: '18...Rfb8', text: 'f-kalesiyle (Motor: −0.5).' },
      ],
    },
    '19w': {
      text: '19.Ng3: at g3’e gelir; h5 ve f5 karelerine bakar.',
      amac: 'Atı şah kanadı saldırısına katmak; Nh5 ile g7’ye baskı ya da f5 itişini desteklemek.',
      neden: 'Motor 19.Bc1’i (−0.4) çok az daha iyi buluyor; 19.Ng3 (−0.4) aynı ölçüde. Planın mantıklı devamı.',
      diger: [
        { move: '19.Bc1', text: 'Motorun ilk tercihi (−0.4).' },
        { move: '19.g5', text: 'Şah kanadında ilerler (Motor: −0.4).' },
      ],
    },
    '19b': {
      text: '19...Qb6: vezir b6’ya gelir; bir sonraki durak a7.',
      amac: 'Veziri a7–g1 çaprazına getirmek; b-hattında da baskıyı artırmak.',
      neden: 'Motor 19...a4’ü (−0.5) önce oynamayı öneriyor; 19...Qb6 (−0.4) da iyi. Vezir c7’de e5’e çarpıyordu, b6–a7 yolunda ise c5 piyonunun arkasından g1’e bakacak.',
      diger: [
        { move: '19...a4', text: 'Motorun ilk tercihi (−0.5).' },
        { move: '19...Rb6', text: 'b-hattında kaleleri ikiler (Motor: −0.5).' },
      ],
    },
    '20w': {
      text: '20.Rab1: kale b-hattına gelir ve Siyahın b8 kalesine karşı durur.',
      amac: 'b-hattını Siyaha bırakmamak ve b2 karesine girişi önlemek.',
      neden: 'Motor 20.Rfb1’i (−0.2) biraz daha iyi buluyor; 20.Rab1 (−0.4) da mantıklı. 20.Rf2 ise 20...Qb2 ile kötüydü (−1.3).',
      diger: [
        { move: '20.Rfb1', text: 'Motorun ilk tercihi (−0.2): f-kalesiyle b-hattını tutar.' },
        { move: '20.Rf2', text: '20...Qb2 ile vezirler değişir ve Siyah b-hattına girer (Motor: −1.3).' },
      ],
    },
    '20b': {
      text: '20...Qa7!: vezir c5 piyonunun arkasında, a7–g1 çaprazında. ...c4 ile açarak şah fikri hazır.',
      amac: 'g1’deki şahı çapraz üzerinden hedef almak; ...c4 ile çaprazı açmak ve a5’i korumak.',
      neden: 'Motorun ilk tercihi (−0.4). Bu çaprazda yalnızca c5 piyonu var; piyon c4’e giderken bir taşa saldırırsa Beyaz aynı anda iki tehdide karşı koyamaz. 20...Qc7 (−0.3) daha sakin, 20...Qd8 (+0.1) pasifti.',
      diger: [
        { move: '20...Qc7', text: 'Vezir e5’e baskıya döner (Motor: −0.3).' },
        { move: '20...Qd8', text: 'Pasif (Motor: +0.1).' },
      ],
    },
    '21w': {
      text: '21.Rbe1??: ağır hata. Kale b-hattından e1’e çekilir ve şah g1’de, a7–g1 çaprazının ucunda kalır.',
      amac: 'Beyaz muhtemelen e-hattında e5’i desteklemek ve şah kanadı saldırısı için kaleyi merkeze almak istedi.',
      neden: 'Hamle hem b-hattını Siyaha bırakır hem 21...Bxd3! 22.Qxd3 c4+ tehdidini görmez. Motor 21.Kh1’i öneriyor (−0.4): şah çaprazdan çıkınca 21...Bxd3 22.Qxd3 c4 şah olmaz, 23.Qc2 ile Beyaz bir taş fazla kalır (+2.5). Maç hamlesinden sonra −3.1. Hızlı satrançta bu tür tek hamlelik körlükler daha sık görülür.',
      diger: [
        { move: '21.Kh1!', text: 'Motorun ilk tercihi (−0.4): 21...Bxd3? 22.Qxd3 c4 23.Qc2 (+2.5) ile Siyah taş kaybeder.' },
        { move: '21.Kh2', text: 'Aynı fikir (Motor: −0.4); h3 piyonu sayesinde h2 karesi şah için hazır.' },
        { move: '21.Ne2', text: 'd4’ü kontrol eder (Motor: −0.8), ama çapraz sorunu sürer.' },
      ],
    },
    '21b': {
      text: '21...Bxd3!: fil d3 piyonunu alır; c2 vezirine ve f1 kalesine aynı anda saldırır.',
      amac: 'Beyaz veziri d3’e çekmek, böylece ...c4+ ile hem şah hem vezire saldırı yaratmak.',
      neden: 'Motorun ilk tercihi (−2.9); sonraki en iyi 21...Qb6 yalnızca −0.4. Kombinasyonun ilk hamlesi: Beyaz almak zorunda, almazsa kalesini ya da piyonu bedavaya kaybeder.',
      diger: [
        { move: '21...Qb6', text: 'b-hattına döner (Motor: −0.4); fırsatı kaçırır.' },
        { move: '21...Qb7', text: 'Aynı ölçüde sakin (Motor: −0.4).' },
      ],
    },
    '22w': {
      text: '22.Qxd3: Beyaz fili alır; başka iyi seçenek yok.',
      amac: 'Malzeme dengesini korumak: fil hem vezire hem f1 kalesine saldırıyordu.',
      neden: '22.Qd1 c4+ 23.Kh1 ile Siyah f1 kalesini de alır (−3.7); 22.Qc1 (−3.9) da kötü. 22.Qxd3 (−2.9) en az kaybettiren hamle, ama vezir artık ...c4+ çatalının hedefi.',
      diger: [
        { move: '22.Qd1', text: '22...c4+ 23.Kh1 ile Siyah kaliteyle birlikte piyon kazanır (Motor: −3.7).' },
        { move: '22.Qc1', text: '22...Rb1 ile b-hattı açılır (Motor: −3.9).' },
      ],
    },
    '22b': {
      text: '22...c4+!: açarak şah. Piyon d3 vezirine saldırır, a7 veziri g1’deki şaha şah çeker.',
      amac: 'Çifte saldırı: Beyaz şahı korumak zorunda, d3’teki veziri aynı anda kurtaramaz.',
      neden: 'Motorun ilk tercihi (−3.1); diğer hamleler kötü: 22...Rb2 (+1.6) ve 22...a4 (+2.3) Beyazı bir taş fazla bırakır. Hamlenin gücü zamanlamasında: vezir d3’teyken piyon ilerleyişi tempoyla gelir.',
      diger: [
        { move: '22...Rb2', text: 'b-hattına girer ama taş geri gelmez (Motor: +1.6).' },
        { move: '22...a4', text: 'Fırsatı kaçırır; Beyaz Kh1 ile kurtulur (Motor: +2.3).' },
      ],
    },
    '23w': {
      text: '23.Be3: Beyaz şahı fil ile keser; fil aynı anda a7 vezirine de saldırır.',
      amac: 'Şahı korumak ve vezir kaybını vezir değişimine çevirmek.',
      neden: 'En iyi savunma (−3.1). Fil e3’e geldiği için 23...cxd3 24.Bxa7 ile Beyaz vezirini geri alır. 23.Qe3 23...Bc5 bağlamasıyla daha kötü (−3.7), 23.Qd4 ise vezir verir (−4.8). 23.Kh1/Kh2 veziri bedavaya bırakır.',
      diger: [
        { move: '23.Qe3', text: '23...Bc5 ile vezir bağlanır; 24.Kh1 Bxe3 (Motor: −3.7).' },
        { move: '23.Qd4', text: '23...Nxd4 ile vezir kaybı (Motor: −4.8).' },
      ],
    },
    '23b': {
      text: '23...cxd3: Siyah veziri alır ve d3’te ilerlemiş bir piyon kurar.',
      amac: 'Kombinasyonu tamamlamak: vezir alınır, karşılığında a7 veziri gidecek ve Siyah bir piyon fazla kalacak.',
      neden: 'Tek doğru hamle (−3.2). 23...d4 (+1.2) ya da 23...Rb2 (+1.2) gibi hamleler veziri kurtarmaz ve Beyaz hem vezirini hem taşı korur.',
      diger: [
        { move: '23...d4', text: 'Fili kovar ama d3 veziri kaçar (Motor: +1.2).' },
        { move: '23...Rb2', text: 'Vezir kaçar, Siyah taş eksik kalır (Motor: +1.2).' },
      ],
    },
    '24w': {
      text: '24.Bxa7: fil a7 vezirini alır; vezirler değişmiş olur.',
      amac: 'Malzemeyi geri almak: vezir karşılığında vezir.',
      neden: 'Zorunlu (−3.0). 24.Kh1 ya da 24.Nf5 gibi hamleler veziri geri almadan Siyaha vezir fazlası bırakır (−6.5 civarı).',
      diger: [
        { move: '24.Nf5', text: 'Veziri almaz; 24...Bc5 sonrası Siyah vezir fazla (Motor: −6.5).' },
      ],
    },
    '24b': {
      text: '24...Nxa7: at geri alır. Vezirler gitti; Siyah bir piyon fazla ve d3’te güçlü bir geçer piyonu var.',
      amac: 'Malzemeyi geri almak ve d3 geçer piyonunu desteklemeye hazırlanmak.',
      neden: 'Zorunlu (−3.1). 24...d2? 25.Nxd2 Nxa7 ile piyon gider (−0.5), 24...Rb2? ise taş kaybettirir (+0.7). Şimdi d3 piyonu Beyazın kalelerini ve atlarını bağlar; Siyahın atları ise c5 ve b5 gibi aktif karelere gidecek.',
      diger: [
        { move: '24...d2', text: '25.Nxd2 Nxa7 ile geçer piyon gider (Motor: −0.5).' },
        { move: '24...Rb2', text: 'Taş eksik kalır (Motor: +0.7).' },
      ],
    },
    '25w': {
      text: '25.f5: Beyaz şah kanadında karşı şans arar; e6’ya baskı yapar ve f6 itişini hazırlar.',
      amac: 'Kaybedilen piyonun karşılığında Siyahın şah kanadını zorlamak ve taşlarını oraya çekmek.',
      neden: 'Motor 25.Rd1’i (−3.3) daha iyi buluyor: önce d3 piyonuna saldırmak. 25.f5 (−4.0) tempo kaybeder ve Siyah atları vezir kanadında rahatça aktifleşir. Kötü oyun sonlarında rakibin en güçlü kozunu önce durdurmak gerekir.',
      diger: [
        { move: '25.Rd1', text: 'Motorun ilk tercihi (−3.3): d3 piyonuna hemen saldırır.' },
        { move: '25.Nd4', text: 'Atı merkeze getirir (Motor: −3.5).' },
        { move: '25.Re3', text: 'd3’e yan taraftan saldırır (Motor: −3.6).' },
      ],
    },
    '25b': {
      text: '25...Nb5: at b5’e gelir; c3 piyonuna ve d4 karesine bakar.',
      amac: 'Kenardaki atı oyuna sokmak ve c3 piyonunu hedef almak.',
      neden: 'Motorun ilk tercihi (−4.2). At a7’de pasifti; b5’ten c3, d4 ve a3 karelerine bakar. 25...Nc5 (−3.1) ya da 25...Rfc8 (−3.0) daha az etkiliydi.',
      diger: [
        { move: '25...Nc5', text: 'd3’ü korur (Motor: −3.1), ama a7 atı pasif kalır.' },
        { move: '25...Rfc8', text: 'c-hattını alır (Motor: −3.0).' },
      ],
    },
    '26w': {
      text: '26.Rd1: kale d3 piyonuna saldırır.',
      amac: 'Siyahın geçer piyonunu kazanmak ya da en azından Siyahı savunmaya zorlamak.',
      neden: 'Motor 26.h4’ü (−4.2) ya da 26.Kh2’yi (−4.3) çok az daha iyi buluyor; 26.Rd1 (−4.5) mantıklı ama Siyahın 26...Nc5! yanıtı var.',
      diger: [
        { move: '26.h4', text: 'Motorun ilk tercihi (−4.2): şah kanadında piyon ilerletir.' },
        { move: '26.Kh2', text: 'Şahı aktifleştirir (Motor: −4.3).' },
      ],
    },
    '26b': {
      text: '26...Nc5!: önce d3 korunur.',
      amac: 'Geçer piyonu güvenceye almak, sonra c3 piyonunu kazanmak.',
      neden: 'Motorun ilk tercihi (−4.7). 26...Nxc3? 27.Rxd3 Nxa2 sonrası Siyah bir piyon kazanır ama geçer piyonu kaybeder (−3.5). c3 piyonu kaçamayacağı için önce d3’ü korumak doğru sıra.',
      diger: [
        { move: '26...Nxc3?', text: '27.Rxd3 Nxa2 ile d3 piyonu gider (Motor: −3.5).' },
        { move: '26...Bc5+', text: '27.Kh1 Nxc3 28.Rxd3 ile benzer sorun (Motor: −2.9).' },
      ],
    },
    '27w': {
      text: '27.Nd4: at merkeze yerleşir ve b5 atına saldırır.',
      amac: 'Merkezde güçlü bir kare almak ve d3 piyonunun önünü kapatmaya hazırlanmak.',
      neden: 'Motorun ilk tercihi (−4.5). Ama c3 piyonu yine savunmasız kalıyor; Beyaz için iyi bir çözüm yok.',
      diger: [
        { move: '27.Kh2', text: 'Şahı aktifleştirir (Motor: −4.7).' },
        { move: '27.Nh5', text: 'Şah kanadında karşı oyun (Motor: −4.7).' },
      ],
    },
    '27b': {
      text: '27...Nxc3: at c3 piyonunu alır; d1 kalesine ve a2 piyonuna saldırır.',
      amac: 'İkinci piyonu kazanmak ve tempoyla kaleyi kovmak.',
      neden: 'Motorun ilk tercihi (−4.8). Şimdi Siyah iki piyon fazla; 27...Bh4 (−3.5) ya da 27...Rfc8 (−3.1) daha az etkiliydi.',
      diger: [
        { move: '27...Bh4', text: 'g3 atına saldırır (Motor: −3.5).' },
        { move: '27...Rfc8', text: 'c-hattını alır (Motor: −3.1).' },
      ],
    },
    '28w': {
      text: '28.Rc1: kale c-hattına çekilir ve c3 atına saldırır.',
      amac: 'c3 atını kovmak ya da almak; c-hattında aktifleşmek.',
      neden: 'Motor 28.f6’yı (−4.8) çok az daha iyi buluyor; 28.Rc1 (−4.9) ise 28...Bg5 ile yeni bir taktik verir. Beyazın taşları birbirini savunmuyor.',
      diger: [
        { move: '28.f6', text: 'Motorun ilk tercihi (−4.8): şah kanadında açılım.' },
        { move: '28.Nc6', text: '28...Bg5 ile kale tehdit edilir (Motor: −5.1).' },
      ],
    },
    '28b': {
      text: '28...Bg5!: fil c1 kalesine bakar ve ...Be3+ çatalını hazırlar. Radjabov terk etti.',
      amac: 'Bir taş daha kazanmak: 29.Rxc3 Be3+ 30.Kh1 Bxd4 ya da kale kaybı.',
      neden: 'Motorun ilk tercihi (−5.1). 29.Nb3 Bxc1 ya da 29.Nc6 Bxc1 kalite kaybettirir (−5.8 / −6.0). Beyazın hiçbir iyi devamı yok; d3 piyonu da hâlâ ilerlemeye hazır.',
      diger: [
        { move: '28...N5a4', text: 'd2’yi destekler (Motor: −5.0).' },
        { move: '28...Nxa2', text: 'Piyon alır (Motor: −4.6).' },
      ],
    },
  },
  exercises: [
    { id: 'rsv-1', kind: 'tekrar', plan: false, title: 'Bxd3 ve açarak şah',
      source: 'Radjabov – Svidler, Riga 2013 (21. hamle)',
      fen: '1r3rk1/q2nbppp/b1n1p3/p1ppP3/5PP1/2PP1NNP/P1QB2B1/4RRK1 b - - 8 21',
      prompt: 'Siyahın fili a6’da d3 piyonuna, veziri a7’de c5 piyonunun arkasından g1’e bakıyor. Beyazın şahı hâlâ g1’de. Kombinasyonu sonuna kadar oynayın.',
      hint: 'Önce d3’teki piyonu alın. Vezir geri alırsa c-piyonu iki işi birden yapabilir.',
      line: ['Bxd3', 'Qxd3', 'c4+', 'Be3', 'cxd3'],
      explanation: '**21...Bxd3! 22.Qxd3 c4+! 23.Be3 cxd3** Piyon ilerleyince a7 veziri şah çeker ve aynı anda c4 piyonu d3 vezirine saldırır. 24.Bxa7 Nxa7 sonrası Siyah bir piyon fazla ve d3’te geçer piyonu var. Motor: ...Bxd3 −3.0, sonraki en iyi −0.5; 22...c4+ −3.1, sonraki en iyi +1.5.',
      link: 'Siyahın kapalı Sicilya planı, a6 fili ve a7 veziriyle tek bir taktikte birleşti.' },
    { id: 'rsv-2', kind: 'tekrar', plan: false, title: 'Önce d3’ü koru',
      source: 'Radjabov – Svidler, Riga 2013 (26. hamle)',
      fen: '1r3rk1/3nbppp/4p3/pn1pPP2/6P1/2Pp1NNP/P5B1/3R1RK1 b - - 2 26',
      prompt: 'Siyah bir piyon fazla. Beyazın kalesi d1’den d3 geçer piyonuna saldırıyor, Siyahın b5 atı da c3’e bakıyor. En iyi hamle hangisi?',
      hint: 'c3’ü hemen almak d3’ü savunmasız bırakır. Önce d3’ü koruyan hamleyi bulun.',
      line: ['Nc5'],
      explanation: '**26...Nc5!** At d3’ü korur. 27.Nd4 Nxc3 ile Siyah sonra c3’ü kaleye saldırarak alır. 26...Nxc3? 27.Rxd3 ile d3 piyonu düşer. Motor: ...Nc5 −4.7, sonraki en iyi ...Nxc3 −3.3.',
      link: 'Kazanılan geçer piyon Siyahın en önemli varlığıdır; önce onu korumak gerekir.' },
    { id: 'rsv-3', kind: 'transfer', plan: false, title: 'Tal’ın ...c4+ hamlesi',
      source: 'Kotov – Tal, SSCB Şampiyonası, Riga 1958 (37. hamle)',
      fen: '3rr1k1/q7/3p1p2/2p4p/1P2PP2/PQ3P2/3N1K2/1R6 b - - 2 37',
      prompt: 'Beyaz 37.Qb3+ ile şah çekti. Siyahın veziri a7’de, c5 piyonu ile f2’deki beyaz şahın arasında duruyor. Şahı nasıl karşılarsınız?',
      hint: 'Şahı kesen hamle aynı zamanda şah çekebilir mi?',
      line: ['c4+', 'Qe3', 'Qxe3+'],
      explanation: '**37...c4+! 38.Qe3 Qxe3+** Piyon b3–g8 çaprazını keser, a7 veziri f2’deki şaha şah çeker ve c4 piyonu b3 vezirine saldırır. Beyaz vezirleri değişmek zorunda kalır; Siyah iki bağlı merkez piyonuyla kazanan bir oyun sonuna geçer. Motor: ...c4+ −3.2, sonraki en iyi −1.0; 38...Qxe3+ −3.9, sonraki en iyi −0.5.',
      link: 'Svidler’in 22...c4+ hamlesiyle aynı mekanizma: a7 veziri c-piyonunun arkasında, piyon ilerleyince hem şah hem vezire saldırı.' },
    { id: 'rsv-4', kind: 'transfer', plan: false, title: 'Keres’in ...e4+ hamlesi',
      source: 'Burehall – Keres, Stockholm 1961 (38. hamle)',
      fen: '8/1pq3kp/6p1/4pR2/2r5/2PQ3P/2P1N1PK/8 b - - 0 38',
      prompt: 'Beyaz 38.Rxf5 ile f5’teki atı aldı. Siyahın veziri c7’de, e5 piyonunun arkasından h2’deki şaha bakıyor. Beyazın veziri d3’te. Hamle sizde.',
      hint: 'e5 piyonu ilerlerse hangi çapraz açılır ve piyon neye saldırır?',
      line: ['e4+', 'Qg3', 'Qxg3+'],
      explanation: '**38...e4+! 39.Qg3 Qxg3+** Piyon ilerleyince c7 veziri h2’deki şaha şah çeker, e4 piyonu da d3 vezirine saldırır. Vezirler değişir ve 40.Nxg3 gxf5 sonrası Siyah ata karşı kaleyle kalır. Motor: ...e4+ −4.7, sonraki en iyi (...gxf5) −1.2; 39...Qxg3+ −4.6, diğer hamleler +5.0.',
      link: 'Svidler’in ...c4+ hamlesinin aynısı başka bir piyonla: vezir piyonun arkasında, şahla aynı çaprazda; piyon şah verir ve vezire saldırır.' },
  ],
  sources: [
    { title: 'ChessBase: ACP 02 – Rapid World Champion out (Svidler–Radjabov maçı)', url: 'https://en.chessbase.com/post/acp-02-rapid-world-champion-out-160913' },
    { title: 'ChessBase: ACP 01 – No surprises (turnuva formatı ve süre kontrolü)', url: 'https://en.chessbase.com/post/acp-01-no-surprises-140913' },
    { title: 'The Chess World: ACP Cup Riga 2013 Part II', url: 'https://thechessworld.com/articles/reviews/acp-cup-riga-2013-part-ii/' },
    { title: 'Chessdom: ACP Cup quarter finals', url: 'https://www.chessdom.com/acp-cup-quarter-finals/' },
    { title: 'The Week in Chess: ACP Cup Riga 2013', url: 'https://theweekinchess.com/chessnews/events/acp-cup-riga-2013' },
    { title: 'USCF Sales: Take up the Powerful Closed Sicilian (Kapalı Sicilya planları)', url: 'https://www.uscfsales.com/chess-blog/take-up-the-powerful-closed-sicilian/' },
  ],
};
