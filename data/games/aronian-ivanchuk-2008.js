// Aronian – Ivanchuk, M-Tel Masters, Sofya 2008 (5. tur). Kaynak: PgnMentor (Aronian.pgn).
export default {
  id: 'aronian-ivanchuk-2008',
  theme: 'Ara şah ve vezir akını: ...Qa5+ ve ...Qxd1+',
  white: 'Levon Aronian', black: 'Vasil Ivanchuk',
  whiteShort: 'Aronian', blackShort: 'Ivanchuk',
  event: 'M-Tel Masters turnuvası', site: 'Sofya', year: 2008, eco: 'D12',
  variation: 'Slav Savunması, 4.e3 Bf5 5.Nc3 e6 6.Nh4', result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. Nc3 e6 6. Nh4 Bg6 7. Nxg6 hxg6 8. a3 Nbd7 9. g3 Be7 10. b3 e5 11. cxd5 Nxd5 12. Nxd5 Qa5+ 13. Nc3 Qxc3+ 14. Bd2 Qb2 15. d5 cxd5 16. Bb5 a6 17. Bxd7+ Kxd7 18. O-O e4 19. Bc3 Qxc3 20. Qxd5+ Ke8 21. Rac1 Qd3 22. Qxb7 Rd8 23. Rfd1 Qxd1+ 24. Rxd1 Rxd1+ 25. Kg2 a5 26. g4 Kf8 27. Qxe4 g5 28. Qf5 Bd8 29. Qc5+ Kg8 30. Qe5 g6 31. b4 axb4 32. axb4 Kh7 33. b5 Rf8 34. Qc5 Kg8 35. b6 Rb1 36. f4 Rb2+ 37. Kg3 gxf4+ 38. exf4 Bxb6 39. Qc3 Rb1 40. f5 Rg1+ 41. Kh3 Re8 42. Qf6 Bf2 43. Qg7+ Kxg7 44. f6+ Kf8 0-1`,

  summary: 'Ivanchuk’un Sofya 2008’de art arda kazandığı beş oyunun beşincisi. Slav Savunmasının sakin 4.e3 kolunda Aronian 6.Nh4 ile fil çiftini aldı; Ivanchuk ise h-hattını açan 7...hxg6 ve şahı henüz merkezdeyken oynanan cesur **10...e5** ile karşılık verdi. Beyazın a3+b3 yapısının bıraktığı a5–e1 çaprazı, **12...Qa5+!** ara şahıyla taşı geri kazandırdı ve Siyah veziri b2’ye kadar daldı. Aronian Siyah şahını merkezde tutmak için önce 15.d5 ile bir piyon, sonra 19.Bc3 ile bir fil verdi; ama Ivanchuk **21...Qd3!** ile vezirini merkeze kurtardı ve **23...Qxd1+** ile iki kale aldı. Oyun sonunda iki kale ve fil, vezire ve b-piyonuna üstün geldi; Aronian’ın 35.b6? hamlesi geçer piyonu kaybettirdi. Son anda 43.Qg7+ ile kurulan pat tuzağını (44...Kxf6?? 45.g5+) Ivanchuk 44...Kf8 ile görüp geçti ve ...Re3# karşısında Aronian terk etti.',
  intro: '4.e3, “Yavaş Slav” diye anılan koldur: Beyaz c4 piyonunu f1 filiyle sağlam korur, ...dxc4 ile kazanılacak tempoları baştan reddeder; bedeli c1 filinin piyon zincirinin arkasında kalmasıdır. Siyah buna Slav’ın klasik cevabıyla, 4...Bf5 ile c8 filini zincirin dışına çıkararak karşılık verir. 5.Nc3 e6 6.Nh4, bu yapının en çok oynanan devamıdır: at fili kovalar, Beyaz fil çiftini alır. Karşılığında Siyah, hxg6 ile açık h-hattı ve f5/h5 karelerini tutan sağlam bir şah kanadı kazanır; Wikipedia’nın da belirttiği gibi Siyahın bu yapıdaki asıl karşı oyunu **...e5 kırılmasıdır**. Bu oyunda Ivanchuk ...e5’i hem gelişimi bitmeden hem de taktik bir fikirle (…Qa5+) birlikte oynadı ve oyun sakin bir açılıştan çok dengesiz bir mücadeleye dönüştü: önce taş fedası, sonra vezire karşı iki kale.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '6.Nh4 ve 7.Nxg6 ile Siyahın c8’den çıkan “iyi” filini almak ve uzun vadede **fil çiftine** dayanmak.',
      '8.a3, 9.g3 ve 10.b3 ile ...Bb4 ve ...Nb4 karelerini almak, fili g2’den uzun çapraza yerleştirmek, c4’ü desteklemek. Bu kurulumun zaafı c3 ve a5–e1 çaprazıdır: 12...Qa5+ tam oradan geldi.',
      'Merkez açıldığında 15.d5 ve 16.Bb5 ile Siyah şahını merkezde tutmak; ChessBase’in yorumuyla 15.d5 tam olarak bu amaçla verilen bir piyon fedasıdır.',
      'Rok yapıp kaleleri c- ve d-hatlarına getirmek (18.O-O, 21.Rac1, 23.Rfd1) ve b2’ye dalmış Siyah vezirini sıkıştırmak.',
      '19.Bc3 ile fil vererek d5 ve b7 piyonlarını almak ve iki piyon karşılığında Siyah şahına karşı inisiyatif kurmak; motor bu fedanın yeterli olmadığını gösteriyor (−0.8’den −2.0’ye).',
      'Vezire karşı iki kale oyun sonunda tek umut: vezir ve vezir kanadı piyonlarıyla geçer piyon yaratmak (31.b4, 33.b5) ve şah kanadında f4–f5–f6 ile Siyah şahına mat tehditleri kurmak.',
      'Kaybedilmiş konumda son çare olarak pat tuzağı kurmak (43.Qg7+ ve 44.f6+).',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Slav’ın ana fikrine uygun olarak c8 filini ...Bf5-g6 ile dışarı çıkarmak; değişimden sonra hxg6 ile **açık h-hattını** kullanmak.',
      '**...e5 kırılmasıyla** merkezi açmak; açılan hatlarda Beyazın a3+b3 yapısının zayıf bıraktığı c3’e ve a5–e1 çaprazına **...Qa5+ ara şahı** ile vurmak.',
      'Veziri b2’ye daldırıp a3, b3 ve a1 kalesini baskı altında tutmak; 18...e4 ile e5 karesini vezirin dönüşüne açmak ve Beyazın f3/d3 karelerini kapatmak.',
      'Şah merkezde kalsa bile (ChessBase’in esprisiyle “elle rok”) şahı e8–f8–g8–h7 üzerinden adım adım güvenliğe götürmek.',
      'Vezir tehlikeye girdiğinde onu **merkeze (d3) kurtarmak** ve doğru anda **iki kale karşılığında** vermek (23...Qxd1+).',
      'Oyun sonunda kaleyi geçer piyonun **arkasına** koymak (35...Rb1), piyonu fille toplamak ve iki kale ile fili Beyaz şahına karşı birleştirmek (...Re8, ...Bf2, ...Re3#).',
      'Son anda pat tuzağına dikkat etmek: rakibin feda ettiği veziri almadan önce şahın nereye gideceğini hesaplamak (44...Kf8!).',
    ] },
  },
  critical: [
    { move: '10b', title: '10...e5: şah merkezdeyken merkez kırılması', text: 'Siyah rok yapmadan ...e5 ile merkezi açar. Bu riskli görünür, ama Beyazın şahı da merkezdedir ve 8.a3 ile 10.b3 c3 karesini ve a5–e1 çaprazını zayıflatmıştır. Motor sakin 10...Ne4’ü (−0.1) hafifçe yeğliyor; ...e5 sonrası 11.dxe5! Nxe5 12.cxd5 ile Beyaz küçük bir üstünlük alabilirdi (+0.6). Aronian 11.cxd5 ile Ivanchuk’un hazırladığı taktiğe izin verdi.' },
    { move: '12b', title: '12...Qa5+! ara şah taşı geri getirir', text: 'Beyaz 12.Nxd5 ile at aldı. Siyah hemen geri almak yerine şah çeker: 13.Nc3 neredeyse zorunludur (13.b4 Qxd5 ya da 13.Ke2 sonrası Beyaz bir piyon eksik ve şahı açık kalır, Motor: −1.7/−1.9), 13...Qxc3+ ile taş geri gelir ve vezir 14.Bd2 Qb2 ile Beyaz kampına dalar. Sıradan geri alışlar daha kötüydü: 12...cxd5 13.dxe5 (+0.5), 12...exd4? 13.Nxe7 ise bir taş kaybettirir (+4.1).' },
    { move: '15w', title: '15.d5: şahı merkezde tutmak için piyon fedası', text: 'ChessBase’in raporu, aynı konumda Wang Yue – Bobras (2007) oyununda 15.Bg2’nin oynandığını ve oyunun oldukça dengeli geçtiğini belirtiyor. Aronian ise 15.d5 ile bir piyon verip Siyah şahının merkezde kalmasını sağlamayı seçti. Motor bu fedayı makul ama tam karşılıklı bulmuyor (−0.4/−0.7); en sağlamı 15.a4 exd4 16.Rb1 (0.0) idi.' },
    { move: '18b', title: '18...e4! e5 karesi vezire, f3 ve d3 Beyaza kapalı', text: 'Siyah e-piyonunu ilerletir: piyon d3 ve f3 karelerini Beyaz taşlarına kapatır, e5 karesi de b2’deki vezirin merkeze dönüşü için boşalır (…Qe5). Ayrıca d5 piyonu artık e-piyonuyla ilgili bir hedef olmaktan çıkar. Motor: 18...e4 −0.7; daha yavaş 18...Rhc8 ise +0.3 verir, çünkü 19.Ba5 ve Qxd5+ ile şah açık kalır.' },
    { move: '19w', title: '19.Bc3? fil iki piyona', text: 'Aronian fili verip d5’i (ve sonra b7’yi) alarak Siyah şahına ve vezirine saldırmayı umar; ChessBase bunu “iki vezir kanadı piyonu karşılığında fil” diye özetliyor. Motor fedayı yetersiz buluyor: 19.Bb4 Qe5 20.Bxe7 Kxe7 ile fillerin değişimi (−0.8) ya da 19.Qg4+ f5 20.Qxg6 (yaklaşık −0.6/−1.1) çok daha iyiydi; maç hamlesinden sonra Siyah açıkça üstün (−2.0).' },
    { move: '21b', title: '21...Qd3! vezir merkeze kaçar', text: '21.Rac1 vezire saldırdı ve vezirin kaçabileceği karelerin çoğu kötü. 21...Qd3 vezire hem güvenli bir kare hem de d-hattının kontrolünü verir; b3 ve a3’e de bakar. Motor: 21...Qd3 −2.2; 21...Qf6 −0.3, 21...Qb2 0.0 ile üstünlüğün çoğu gider; 21...Qe5?? 22.Qxe5 ve 21...Rd8?? 22.Qxd8+ ise vezir kaybettirir (+6.4 / +4.3).' },
    { move: '23b', title: '23...Qxd1+: vezir iki kaleye', text: '23.Rfd1 ile Beyaz d-hattında vezire saldırdı. Ivanchuk veziri d1 kalesiyle değişir ve 24.Rxd1 Rxd1+ ile ikinci kaleyi de alır. Malzeme: Siyahın iki kalesi ve fili, Beyazın veziri ve dört piyonuna karşı; ama Beyazın e4 ve a3 piyonları zayıf, Siyah şahı ise artık güvende. Motor: 23...Qxd1+ −2.6; 23...Qb5 24.Rxd8+ Bxd8 25.Qxe4+ beraberliğe gider (0.0).' },
    { move: '35w', title: '35.b6? geçer piyon kaybedilir', text: 'ChessBase’in raporu bu hamleyi Aronian’ın “son hatası” olarak niteliyor: piyon b6’ya gelince d8 filinin vurduğu kareye girer ve 35...Rb1! ile kale arkadan gelir. Motor: 35.Qc6 Rb1 36.e4 ile piyonu vezirle desteklemek −2.8/−3.2; maç hamlesinden sonra −4.3. 36.f4 Rb2+ 37.Kg3 gxf4+ 38.exf4 Bxb6 ile piyon düştü.' },
    { move: '42b', title: '42...Bf2! ve pat tuzağı', text: 'Fil g3 ve h4 karelerini tutar; artık 43...Re3+ mattır. Beyazın veziri vermeden kurtuluşu yok (43.Qc3 Re3+ 44.Qxe3 Bxe3). Aronian 43.Qg7+ Kxg7 44.f6+ ile son bir tuzak kurdu: 44...Kxf6?? 45.g5+ sonrası Siyah ne oynarsa oynasın Beyaz pat olur. ChessBase’in iki ayrı yazısı da tuzağı anlatıyor; Ivanchuk 44...Kf8 ile tuzağa düşmedi ve 45...Re3# karşısında Aronian terk etti.' },
  ],
  lessons: [
    'a3 ve b3 gibi “küçük” piyon hamleleri c3 karesini ve a5–e1 çaprazını zayıflatabilir; merkez açıldığında bu zayıflık bir **ara şah** (12...Qa5+) ile hemen cezalandırılabilir.',
    'Açılan merkezde bir taş alındığında hemen geri almak zorunlu değildir: önce şah çekmek, taşı daha iyi koşullarda geri kazandırabilir ve vezire aktif bir kare verir.',
    'Rakip kampına dalan vezir için her zaman bir kaçış karesi hesaplanmalıdır; merkezdeki bir kare (21...Qd3) çoğu zaman hem en güvenli hem en etkili olanıdır.',
    'Şahı merkezde tutmak için verilen feda, rakip şahı “elle” güvenliğe götürebiliyorsa (…Ke8–f8–g8–h7) karşılıksız kalır; 19.Bc3 bunun örneğidir.',
    'Vezir iki kale karşılığında verilebilir; karşı tarafın piyonları zayıf ve kendi şahı güvendeyse iki kale ve bir fil vezirden güçlüdür.',
    'Geçer piyona karşı kale piyonun **arkasına** yerleşmelidir (35...Rb1); piyonu ilerletmeden önce de onu durduracak taşları saymak gerekir (35.b6?).',
    'Kazanılmış konumda bile rakibin feda ettiği taşı almadan önce **pat** olasılığına bakılmalıdır: 44...Kxf6?? 45.g5+ ile oyun berabere biterdi.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve kazanmanın temelinde ne vardı?', a: 'Siyahla Vasil Ivanchuk kazandı (0-1); bu, onun Sofya 2008’de ilk beş oyunun hepsini kazandığı serinin beşinci zaferiydi. Temelde iki şey vardı: 12...Qa5+ ara şahıyla Beyazın a3+b3 yapısının bıraktığı c3 zaafından yararlanması ve 21...Qd3! ile b2’de sıkışacak gibi görünen vezirini kurtarıp 23...Qxd1+ ile iki kale alması. Sonrasında Ivanchuk şahını adım adım güvenliğe götürdü ve geçer piyonu 35...Rb1 ile topladı.' },
    { q: 'Siyah neden 10...e5 ile gelişimini bitirmeden merkezi açtı?', a: 'Beyazın şahı da merkezdeydi, c1 fili gelişmemişti ve 8.a3 ile 10.b3 c3 karesini yalnızca atla korunur hale getirmişti. Ivanchuk 11.cxd5 Nxd5 12.Nxd5 Qa5+ taktiğine güvendi. Motor sakin 10...Ne4’ü (−0.1) hafifçe yeğliyor ve 11.dxe5! Nxe5 12.cxd5 ile Beyazın küçük bir üstünlük alabileceğini gösteriyor (+0.6); ama Aronian’ın 11.cxd5’i Siyahın fikrini işletti.' },
    { q: '12...Qa5+ neden 12...cxd5’ten daha iyiydi?', a: '12...cxd5 13.dxe5 sonrası Siyahın izole d5 piyonu kalır ve Beyaz fil çiftiyle rahat oynar (+0.5). 12...Qa5+ ise Beyazı 13.Nc3’e zorlar (13.b4 Qxd5 ya da 13.Ke2 Qxd5 çok daha kötü), 13...Qxc3+ 14.Bd2 Qb2 ile vezir tempo kazanarak Beyaz kampına girer ve Beyaz rok yapmadan önce a1 kalesi ile a3 piyonunu korumakla uğraşır.' },
    { q: 'Aronian 15.d5 ve 19.Bc3 ile neyi amaçladı?', a: 'İkisi de Siyah şahını merkezde tutmaya yönelik fedalardı. ChessBase’in raporuna göre aynı konumda Wang Yue – Bobras (2007) oyununda 15.Bg2 ile dengeli bir oyun çıkmıştı; Aronian daha keskin bir yolu seçti. 15.d5 makul bir piyon fedasıydı (−0.4/−0.7), ama 19.Bc3 ile verilen fil, karşılığında yalnızca d5 ve b7 piyonlarını getirdi ve Siyah şahı e8–f8–g8 üzerinden kaçabildiği için saldırı tutmadı (19.Bb4 −0.8 yerine −2.0).' },
    { q: 'Siyah vezir b2’de tuzağa düşmeyecek miydi?', a: 'Bir süre öyle göründü: Beyaz 21.Rac1 ile vezire saldırdığında 21...Qe5?? 22.Qxe5 ve 21...Rd8?? 22.Qxd8+ veziri kaybettiriyordu, 21...Qf6 ve 21...Qb2 ise üstünlüğün çoğunu bırakıyordu. Ivanchuk 21...Qd3! ile veziri hem güvenli hem aktif bir kareye getirdi; 18...e4’ün d3’ü Beyaz taşlarına kapatmış olması bu kareyi Siyaha bırakmıştı.' },
    { q: 'Vezir iki kale karşılığında verilince neden Siyah üstün kaldı?', a: '23...Qxd1+ 24.Rxd1 Rxd1+ sonrasında Siyahın iki kalesi ve fili, Beyazın veziri ve dört piyonuna karşıydı. Siyah şahı artık vezir şahlarından kolayca korunabiliyordu, iki kale birbirini destekliyordu ve Beyazın e4 ile a-b piyonları hedefti. Motor bu konumu −2.5 civarında değerlendiriyor; yani Siyah net üstün ama kazanmak için sabırlı bir teknik gerekiyordu.' },
    { q: 'Beyaz oyun sonunda nerede direnebilirdi?', a: 'En önemli an 35. hamleydi: 35.Qc6 Rb1 36.e4 ile piyonu vezirle desteklemek Beyazı −2.8/−3.2 civarında tutardı. 35.b6? piyonu d8 filinin vurduğu kareye soktu ve 35...Rb1! 36.f4 Rb2+ 37.Kg3 gxf4+ 38.exf4 Bxb6 ile piyon düştü; ChessBase de 35.b6’yı Aronian’ın son hatası olarak niteliyor. Daha sonra 41.Kf4 ve 42.Qd2 de direnişi uzatırdı.' },
    { q: '42...Bf2 neden bu kadar güçlüydü?', a: 'Fil f2’de g3 ve h4 karelerini tutar; g2 karesini de g1’deki kale kontrol eder. Böylece h3’teki Beyaz şahının hiç kaçış karesi kalmaz ve 43...Re3+ mat olur. Beyazın tek savunması veziri e3’te vermekti (43.Qc3 Re3+ 44.Qxe3 Bxe3).' },
    { q: 'Aronian’ın son tuzağı neydi ve Ivanchuk nasıl kaçındı?', a: '43.Qg7+ Kxg7 44.f6+ sonrası 44...Kxf6?? oynanırsa 45.g5+ gelir ve Siyah ne oynarsa oynasın (Kxg5, Rxg5 ya da başka bir şah hamlesi) Beyaz şahının yasal hamlesi kalmaz: pat. ChessBase’in hem tur raporu hem de “Throwback Thursday” yazısı bu tuzağı anlatıyor. Ivanchuk 44...Kf8 oynadı; 45.g5 Re3# tehdidi karşısında Aronian terk etti.' },
  ],
  sources: [
    { title: 'ChessBase: MTel R5 – Ivanchuk aiming for infinity with 5.0/5', url: 'https://en.chessbase.com/post/mtel-r5-ivanchuk-aiming-for-infinity-with-5-0-5' },
    { title: 'ChessBase: Throwback Thursday – Ivanchuk stuns at M-Tel Masters 2008', url: 'https://en.chessbase.com/newsroom/post/throwback-thursday-ivanchuk-mtel-2008' },
    { title: 'ChessBase: MTel R10 – Ivanchuk wins Sofia by 1½ points', url: 'https://en.chessbase.com/post/mtel-r10-ivanchuk-wins-sofia-by-1-points' },
    { title: 'Chess.com: Round 5 at M-Tel Masters', url: 'https://www.chess.com/news/view/round-5-at-m-tel-masters' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  notes: {
    '1w': {
      text: 'Aronian vezir piyonuyla açar ve merkezde d4’ü alır.',
      amac: 'Merkezi tutmak ve c4 ile Vezir Gambiti yapılarına gitmek.',
      neden: 'Aronian o yıllarda 1.d4’le ağırlıklı olarak Vezir Gambiti yapılarını oynuyordu; Ivanchuk gibi her açılışı bilen bir rakibe karşı sağlam, uzun vadeli bir yapı istedi.',
      diger: [
        { move: '1.e4', text: 'Açık oyunlara ve Sicilyalıya gider. Motor: +0.4, aradaki fark pratikte önemsiz.' },
        { move: '1.Nf3', text: 'Esnek başlangıç; çoğu zaman aynı yapılara geçer. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: 'Siyah simetrik d5 ile karşılık verir.',
      amac: 'Merkezde d5 piyonunu sabitlemek ve klasik Vezir Gambiti yapılarına girmek.',
      neden: 'Ivanchuk ...d5 ile Slav ve Vezir Gambiti Kabul/Ret yapılarının hepsini açık tutar; 1...Nf6 Hint savunmalarına giderdi.',
      diger: [
        { move: '1...Nf6', text: 'Nimzo-Hint, Kral Hint ya da Grünfeld’e kapı açar. Motor: +0.3.' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. Beyaz d5 piyonuna kanattan saldırır.',
      amac: 'd5’i değiştirerek merkezde e4 için yer açmak ya da Siyahı d5’i korumaya zorlamak.',
      neden: 'c-piyonunu c3’ten önce ilerletmek, merkez savaşına aktif bir başlangıçtır; at c3’e daha sonra gelir.',
      diger: [
        { move: '2.Nf3', text: 'Gelişimi önce tamamlar, c4’ü ertelemek mümkündür. Motor: +0.2.' },
        { move: '2.Bf4', text: 'Londra Sistemi: daha sakin, merkez gerilimi az. Motor: yaklaşık +0.2.' },
      ],
    },
    '2b': {
      text: '2...c6: Slav Savunması. d5 piyonu c-piyonuyla desteklenir.',
      amac: 'd5’i korurken c8 filinin önünü kapatmamak: fil ...e6’dan önce dışarı çıkabilecek.',
      neden: 'Vezir Gambiti Ret’in (2...e6) temel sorunu c8 filinin içeride kalmasıdır; Slav bu sorunu çözer. Ivanchuk Slav’ı geniş bir repertuarın parçası olarak oynuyordu.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Ret: sağlam ama c8 fili içeride kalır. Motor: +0.3.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabul: merkezi bırakıp hızlı gelişim. Motor: +0.3.' },
      ],
    },
    '3w': {
      text: 'At f3’e gelişir; e5 karesini kontrol eder.',
      amac: 'Gelişmek ve Siyahın ...e5 kırılmasını zorlaştırmak.',
      neden: '3.Nc3 sonrası Siyah 3...e6 ile Yarı-Slav’a ya da 3...dxc4 hamlelerine gidebilir; Aronian 3.Nf3 ile hamle sırasını kendi seçtiği kollara yönlendirir.',
      diger: [
        { move: '3.Nc3', text: '3...e6 4.e4 gibi keskin kollara (Marshall Gambiti) yol açar. Motor: +0.4.' },
        { move: '3.cxd5', text: 'Değişim Slav: simetrik ve sakin bir yapı. Motor: +0.4.' },
      ],
    },
    '3b': {
      text: 'Siyahın atı f6’ya gelir ve d5’i bir kez daha korur.',
      amac: 'Gelişmek ve merkezi tutmak; e4 karesini kontrol etmek.',
      neden: 'Klasik Slav hamlesi. 3...e6 Yarı-Slav’a giderdi ve c8 filini yine kapatırdı; 3...dxc4 ise ...b5 ile piyon tutma fikirlerine yol açar.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav hamle sırası. Motor: +0.4.' },
        { move: '3...dxc4', text: 'Piyonu alıp 4.e3 b5 ile tutmaya çalışmak; riskli. Motor: +0.5.' },
      ],
    },
    '4w': {
      text: '4.e3: “Yavaş Slav”. c4 piyonu artık f1 filiyle korunuyor.',
      amac: 'Ana kollardaki (4.Nc3 dxc4 5.a4) teorik tartışmalardan kaçınmak ve sağlam bir merkez kurmak.',
      neden: '4.e3 sonrası ...dxc4 Siyaha tempo kazandırmaz, çünkü Bxc4 hemen alır. Bedeli c1 filinin içeride kalmasıdır; bu yüzden Siyah c8 filini rahatça dışarı çıkarabilir.',
      diger: [
        { move: '4.Nc3', text: 'Ana yol: 4...dxc4 5.a4 Bf5 ile en teorik kollar. Motor: +0.3.' },
        { move: '4.cxd5', text: 'Değişim kolu: 4...cxd5 5.Nc3 Nc6 6.Bf4. Motor: +0.3.' },
      ],
    },
    '4b': {
      text: '4...Bf5: c8 fili piyon zincirinin dışına çıkar.',
      amac: 'Slav’ın ana fikrini gerçekleştirmek: ...e6’dan önce fili aktif bir kareye getirmek.',
      neden: 'Wikipedia, 4.e3 sonrası en yaygın devamın 4...Bf5 5.Nc3 e6 6.Nh4 olduğunu belirtiyor. 4...Bg4 de oynanır, ama Qb3 ile b7’ye baskı daha can sıkıcı olabilir.',
      diger: [
        { move: '4...Bg4', text: 'Fil g4’e: 5.Qb3 Qc7 6.Ne5 e6 gibi kollar. Motor: +0.4.' },
        { move: '4...g6', text: 'Schlechter Slav: fil g7’ye, daha nadir. Motor: +0.4.' },
        { move: '4...a6', text: 'Chebanenko fikri: ...b5 ile vezir kanadında yer kazanmak.' },
      ],
    },
    '5w': {
      text: 'At c3’e gelişir ve d5’e baskıyı artırır.',
      amac: 'Gelişimi sürdürmek ve Nh4 ile filin peşine düşmeye hazırlanmak.',
      neden: '5.Bd3 filleri değişir ve Beyaza hiçbir dengesizlik vermez; 5.Nc3 ise 6.Nh4 fikrini en uygun şekilde hazırlar.',
      diger: [
        { move: '5.Bd3', text: 'Bxd3 Qxd3 ile beyaz kareli filler değişir; sakin ve eşit. Motor: +0.2.' },
        { move: '5.cxd5', text: '5...cxd5 6.Qb3 ile b7’ye saldırı; Wikipedia’ya göre ...Qc7 ile Siyah iyi durumdadır.' },
        { move: '5.Nh4', text: 'Fili hemen kovalamak; 5...Be6 ya da 5...Bg6. Motor: +0.2.' },
      ],
    },
    '5b': {
      text: '5...e6: Siyah sağlam bir piyon üçgeni kurar.',
      amac: 'd5’i e-piyonuyla da desteklemek ve f8 filine yol açmak.',
      neden: 'Fil zaten dışarıda olduğu için ...e6 artık bir zaaf değil. 5...Nbd7? 6.cxd5 cxd5 7.Qb3 ile b7 sorun olabilir.',
      diger: [
        { move: '5...a6', text: '...b5 fikriyle; daha yavaş. Motor: +0.5.' },
        { move: '5...Nbd7', text: 'cxd5 ve Qb3’e izin verir. Motor: +0.5.' },
      ],
    },
    '6w': {
      text: '6.Nh4: at Siyahın f5 filine saldırır.',
      amac: 'Fil çiftini almak; Siyahın en iyi taşını tahtadan çıkarmak.',
      neden: 'Bu yapıda Siyahın sorunsuz geliştirdiği c8 fili onun en iyi taşıdır. At h4’te kenarda dursa da kısa süre sonra filini alıp görevini tamamlayacak. Motor bu hamleyi en iyi buluyor.',
      diger: [
        { move: '6.Bd3', text: 'Bxd3 Qxd3 ile sade bir oyun. Motor: yaklaşık +0.2.' },
        { move: '6.a3', text: 'Bekleme hamlesi: ...Bb4’ü engeller. Motor: +0.1.' },
        { move: '6.cxd5', text: '6...exd5 ile simetrik olmayan ama sakin yapı. Motor: 0.0.' },
      ],
    },
    '6b': {
      text: 'Fil g6’ya çekilir; değişirse Siyah h-piyonuyla alacak.',
      amac: 'Fili b1–h7 çaprazında tutmak ve değişimden sonra açık h-hattı kazanmak.',
      neden: '6...Bg4 vezire karşı tempo kazanır (Qb3 ve h3 fikirleri), 6...Be4 ise f3 ile kovalanır. Bg6 en doğal ve en sağlam seçimdir; motor da bunu en iyi buluyor.',
      diger: [
        { move: '6...Be4', text: '7.f3 Bg6 8.Qb3 Qb6: Beyaz f3 ile merkezi güçlendirir. Motor: +0.4.' },
        { move: '6...Bg4', text: '7.Qb3 Qb6 8.h3 Bh5 9.g4 Bg6 gibi keskin kollar.' },
        { move: '6...g6?', text: 'Fili korumak için şah kanadını zayıflatır. Motor: +0.6.' },
      ],
    },
    '7w': {
      text: 'Beyaz fil çiftini alır.',
      amac: 'Uzun vadede iki filin gücüne dayanmak.',
      neden: 'At h4’te sonsuza dek bekleyemez; Siyah ...Be7 ve ...Nbd7 ile hazırlanırsa at ya geri dönmek ya da yine değişmek zorundadır. 7.Qb3 önce b7’yi sorgular, ama sonunda yine Nxg6 gelir.',
      diger: [
        { move: '7.Qb3', text: '7...Qb6 8.Nxg6 hxg6: vezirler b-hattında karşılaşır. Motor: +0.3.' },
        { move: '7.Bd2', text: 'Değişimi erteler; 7...Nbd7. Motor: +0.3.' },
      ],
    },
    '7b': {
      text: 'h-piyonu merkeze doğru alır ve h8 kalesinin önü açılır.',
      amac: 'Açık h-hattını Beyazın h2 piyonuna karşı kullanmak ve şah kanadında sağlam bir piyon yapısı kurmak.',
      neden: 'Merkeze doğru almak genel kuraldır. g6’daki ikiz piyonlar f5 ve h5 karelerini tutar; h-hattı da kaleye kendiliğinden bir hat verir. 7...fxg6 e6’yı zayıflatır ve şahı açar.',
      diger: [
        { move: '7...fxg6', text: 'f-hattı açılır ama e6 ve şah zayıflar. Motor: +1.2.' },
      ],
    },
    '8w': {
      text: '8.a3: ...Bb4 ve ...Nb4 kareleri alınır.',
      amac: 'c3 atını bağlayacak ...Bb4’ü önlemek ve ileride b4 ile vezir kanadında yer kazanmayı hazırlamak.',
      neden: 'Bu yapıda Siyahın f8 fili b4’ten c3’ü bağlamayı sever. Ancak a3, b3 ile birleşince c3 karesini ve a5–e1 çaprazını zayıf bırakacak; 12...Qa5+ bunun cezasıdır.',
      diger: [
        { move: '8.Qb3', text: 'b7’ye saldırı: 8...Qc7 9.Bd2 Nbd7 10.cxd5. Motor: +0.3 (en iyi).' },
        { move: '8.Bd2', text: 'Fili geliştirir; 8...Nbd7 9.g3 Be7 10.h4. Motor: +0.3.' },
        { move: '8.g3', text: 'Fili g2’ye hazırlar. Motor: +0.2.' },
      ],
    },
    '8b': {
      text: 'At d7’ye gelişir.',
      amac: '...e5 ve ...c5 kırılmalarını desteklemek; ...dxc4 sonrası e5 karesini kontrol etmek.',
      neden: 'At b8’den c6’ya gidemez (c6’da piyon var); d7 bu yapının doğal karesidir. 8...Be7 ve 8...Bd6 de eşdeğerdir; hamle sırası küçük bir tercih meselesi.',
      diger: [
        { move: '8...Be7', text: 'Önce fil; 9.g3 Nbd7 10.Be2 a6. Motor: +0.2.' },
        { move: '8...Bd6', text: 'Fil h2’ye bakar; 9.Qb3 Qc7. Motor: +0.2.' },
      ],
    },
    '9w': {
      text: '9.g3: fil g2’ye gelecek.',
      amac: 'Fili uzun çapraza yerleştirip d5’e baskı yapmak; h2 piyonunu ...Bd6 ve h-hattı baskısına karşı güvenceye almak.',
      neden: 'g3, Siyahın d6 filinin h2’ye uzanan çaprazını da etkisiz kılar. Ama bu, Beyazın çok fazla piyon hamlesi yapıp rok yapmayı geciktirmesi demek.',
      diger: [
        { move: '9.Bd2', text: '9...Be7 10.g3 dxc4 11.Bxc4. Motor: +0.2.' },
        { move: '9.Qc2', text: 'b1–h7 çaprazında vezir; 9...Bd6 10.g3 O-O. Motor: +0.2.' },
      ],
    },
    '9b': {
      text: 'Fil e7’ye gelişir.',
      amac: 'Rok için hazırlanmak ve h-hattındaki kaleyi esnek tutmak.',
      neden: 'g3 sonrası d6’daki fil granite çarpar; e7 daha mütevazı ama sağlam bir karedir ve d8–a5 çaprazında vezire yol açar. 9...Qc7 de mümkündü.',
      diger: [
        { move: '9...Qc7', text: '10.b3 Ne4 11.Nxe4 dxe4 fikriyle. Motor: +0.3.' },
        { move: '9...Bd6', text: 'g3 piyonuna çarpan fil. Motor: +0.3.' },
      ],
    },
    '10w': {
      text: '10.b3: c4 desteklenir ve fil b2’ye hazırlanır.',
      amac: '...dxc4 değişimini anlamsız kılmak ve c1 filine b2 karesini açmak.',
      neden: 'Bu hamle yapıyı tutarlı hale getirir, ama a3 ile birlikte c3 karesini yalnızca atla bırakır ve a1 kalesini uzun çaprazda savunmasız kılar. Motor 10.Be2 ya da 10.Bd3 ile önce gelişimi bitirmeyi (+0.2) yeğliyor.',
      diger: [
        { move: '10.Be2', text: '10...Qc7 11.Bd2 dxc4 12.Bxc4: rok için hazırlık. Motor: +0.2.' },
        { move: '10.Bd3', text: '10...O-O 11.h4 dxc4 12.Bxc4. Motor: +0.1.' },
      ],
    },
    '10b': {
      text: '10...e5! Siyah gelişimini bitirmeden merkezi açar.',
      amac: 'Merkezi açıp Beyazın a3/b3 yapısının zayıflattığı c3’e ve a5–e1 çaprazına vurmak.',
      neden: 'Beyazın şahı da merkezde ve c1 fili hâlâ gelişmemiş. 11.cxd5 Nxd5 12.Nxd5 Qa5+ taktiği hazır. Motor 10...Ne4’ü biraz daha sağlam buluyor (−0.1); ...e5 sonrası 11.dxe5! ile Beyaz küçük bir üstünlük alabilirdi (+0.6).',
      diger: [
        { move: '10...Ne4', text: '11.Nxe4 dxe4 12.Bb2 f5: c3’teki atı değişip sağlam bir yapı. Motor: −0.1.' },
        { move: '10...O-O', text: 'Önce rok; 11.Be2 Rc8 12.O-O c5. Motor: +0.3.' },
      ],
    },
    '11w': {
      text: 'Beyaz d5’te değişir.',
      amac: 'Merkezi açmak ve d-hattında Siyah şahına karşı oyun kurmak.',
      neden: 'Bu hamle Siyahın taktiğine izin verir. 11.dxe5 Nxe5 12.cxd5 Nxd5 13.Nxd5 cxd5 ile Beyaz izole d5 piyonuna karşı rahat bir oyun alırdı (Motor: +0.6). 11.cxd5 sonrası değerlendirme eşitliğe düşer (+0.1).',
      diger: [
        { move: '11.dxe5', text: '11...Nxe5 12.cxd5 Nxd5 13.Nxd5 cxd5 14.Be2: Siyahın izole d-piyonu. Motor: +0.6.' },
        { move: '11.Bg2', text: '11...e4 12.Bd2 ile kapalı merkez. Motor: +0.6.' },
      ],
    },
    '11b': {
      text: 'At d5’te alır ve c3 atına saldırır.',
      amac: 'Merkezi açık tutmak ve 12...Qa5+ taktiğini hazırlamak.',
      neden: '11...cxd5 merkezi kapatır ve Beyaza dxe5 ile rahat bir oyun verir. Nxd5 ise c3 atını sorgular; Beyaz atı değişirse a5–e1 çaprazı açılır.',
      diger: [
        { move: '11...Qa5', text: '12.Bb2 Nxd5 13.Qc2: daha az etkili. Motor: +0.5.' },
        { move: '11...exd4', text: '12.Qxd4 Nxd5 13.Nxd5 cxd5: Beyaz merkezde güçlü. Motor: +0.7.' },
      ],
    },
    '12w': {
      text: 'Beyaz d5 atını alır.',
      amac: 'Taş değişerek oyunu sadeleştirmek ve Siyahın ara şahından sonra b2’ye gelecek veziri hedef almak.',
      neden: 'Aronian 12...Qa5+ fikrini kuşkusuz görüyordu; vezirin b2’ye dalmasını kendi gelişim avantajı için bir hedef saydı. 12.Bd2 ve 12.Bb2 de aynı değerdedir (−0.1).',
      diger: [
        { move: '12.Bd2', text: '12...Nxc3 13.Bxc3 e4 14.b4: c3’ü filde tutmak. Motor: −0.1.' },
        { move: '12.Bb2', text: '12...Nxc3 13.Bxc3 e4. Motor: −0.1.' },
      ],
    },
    '12b': {
      text: '12...Qa5+! Ara şah: Siyah atı hemen geri almaz.',
      amac: 'Şah çekerek Beyazı atını c3’e geri getirmeye zorlamak ve o atı şahla almak.',
      neden: 'a3 ve b3 yüzünden c3 yalnızca atla korunabiliyor; b4 ile araya girmek ise piyon kaybettirir. 12...cxd5 13.dxe5 Beyaza rahat bir oyun verirdi; 12...exd4? 13.Nxe7 ise bir taş kaybettirir.',
      diger: [
        { move: '12...cxd5', text: '13.dxe5 Nxe5 14.Be2: Siyahın izole piyonu kalır. Motor: +0.5.' },
        { move: '12...exd4?', text: '13.Nxe7 Qxe7 14.Bg2: Beyaz bir taş önde. Motor: +4.1.' },
      ],
    },
    '13w': {
      text: 'At c3’e geri döner ve şahı keser.',
      amac: 'Şahı kesip malzemeyi dengede tutmak.',
      neden: 'Bu neredeyse zorunlu: 13.b4 Qxd5 ya da 13.Ke2 Qxd5 sonrası Beyaz bir piyon eksik kalır ve şahı açıktır. 13.Nc3 ile Beyaz atı verir ama Siyah vezir de b2’ye gidecek ve orada hedef olacak.',
      diger: [
        { move: '13.b4', text: '13...Qxd5 14.f3 exd4: merkez çöker. Motor: −1.7.' },
        { move: '13.Ke2', text: '13...Qxd5 14.f3 exd4: şah merkezde kalır. Motor: −1.9.' },
      ],
    },
    '13b': {
      text: 'Vezir c3 atını şahla alır; malzeme eşitlendi.',
      amac: 'Taşı geri almak ve tempo kazanarak veziri Beyaz kampına sokmak.',
      neden: 'Planın devamı. 13...exd4 14.b4 ile karmaşık bir oyun çıkar; 13...Bb4? ise 14.axb4 Qxa1 15.Qc2 ile vezir tuzağa düşer.',
      diger: [
        { move: '13...exd4', text: '14.b4 Bxb4 15.axb4 Qxa1: karmaşık, Beyaz biraz iyi. Motor: +0.2.' },
        { move: '13...Bb4?', text: '14.axb4 Qxa1 15.Qc2 exd4: vezir sıkışır. Motor: +3.2.' },
      ],
    },
    '14w': {
      text: 'Fil d2’ye gelir ve vezire saldırır.',
      amac: 'Şahı tempo kazanarak kesmek ve c1 filini geliştirmek.',
      neden: 'Tek iyi hamle: 14.Qd2?? Qxa1 ya da 14.Ke2?? Qxa1 kale kaybettirir.',
      diger: [
        { move: '14.Qd2??', text: '14...Qxa1 15.Bc4 Qb1: kale gitti. Motor: −5.6.' },
        { move: '14.Ke2??', text: '14...Qxa1: yine kale gitti. Motor: −6.3.' },
      ],
    },
    '14b': {
      text: 'Vezir b2’ye dalar.',
      amac: 'Veziri a1 kalesine, a3 ve b3 piyonlarına karşı aktif tutmak.',
      neden: 'Vezirin tek güvenli karesi b2: c4 ve d3 filin, a5/b4 karesi d2 filinin ve a3/b3 piyonlarının kontrolünde, Qxa1?? ise 15.Qxa1 ile veziri kaybettirir. 14...exd4? 15.Bxc3 de veziri verir.',
      diger: [
        { move: '14...exd4??', text: '15.Bxc3 dxc3: vezir fil karşılığında gider. Motor: +4.0.' },
        { move: '14...Qxa1??', text: '15.Qxa1: vezir kale karşılığında. Motor: +4.9.' },
      ],
    },
    '15w': {
      text: '15.d5: Beyaz merkezi açıp bir piyon verir.',
      amac: 'Siyah şahını merkezde tutmak: c-hattı ve d-hattı açılırsa, Bb5 ile d7 atı bağlanacak ve rok yapılamayacak.',
      neden: 'ChessBase’in raporuna göre Wang Yue – Bobras (2007) oyununda 15.Bg2 oynandı ve oyun oldukça dengeli geçti; Aronian ise 15.d5 ile şahı merkezde tutmak için piyon verdi. Motor 15.a4 exd4 16.Rb1 ile eşitliği (0.0) en sağlam buluyor.',
      diger: [
        { move: '15.a4', text: '15...exd4 16.Rb1 Qa2 17.Ra1: vezir sürekli kovalanır. Motor: 0.0.' },
        { move: '15.Bg2', text: 'Wang Yue – Bobras 2007’deki hamle: 15...exd4 16.O-O. Motor: −0.3.' },
        { move: '15.Ba5', text: '15...b6 16.Bd2 exd4. Motor: −0.4.' },
      ],
    },
    '15b': {
      text: 'Siyah piyonu alır ve bir piyon öne geçer.',
      amac: 'Fedayı kabul edip merkezde iki piyona sahip olmak.',
      neden: 'Motor en iyi bu hamleyi buluyor (−0.7). 15...e4 16.dxc6 bxc6 ile Beyaz piyonu geri alır ve eşitliği bulur.',
      diger: [
        { move: '15...e4', text: '16.dxc6 bxc6 17.Rb1 Qxa3 18.Qc2: eşitlik. Motor: +0.1.' },
        { move: '15...Nc5', text: '16.Rb1 Qa2 17.Bg2 e4. Motor: +0.1.' },
      ],
    },
    '16w': {
      text: '16.Bb5: fil d7 atını bağlar.',
      amac: 'Siyahın rok yapmasını engellemek ve atı alarak şahı d7’ye çekmek.',
      neden: 'Atı değişirse Siyah ya şahla almak (rok hakkı gider) ya da taş kaybetmek zorundadır. 16.b4 ve 16.h4 daha yavaş ve Siyaha ...e4 ile rahat bir oyun verir.',
      diger: [
        { move: '16.b4', text: '16...e4 17.Rb1 Qe5: vezir merkeze döner. Motor: −1.2.' },
        { move: '16.h4', text: '16...Rc8 17.b4 e4. Motor: −1.3.' },
      ],
    },
    '16b': {
      text: '16...a6: fil sorgulanır.',
      amac: 'Beyazı hemen Bxd7+ oynamaya zorlamak ve fil çiftini Beyazın elinden almak.',
      neden: 'Motor bu hamleyi en iyi buluyor. 16...Rd8 17.O-O O-O sakin bir oyun verirdi, ama Siyah fili uzun süre bağlı bırakmak istemiyor.',
      diger: [
        { move: '16...Rd8', text: '17.O-O O-O 18.Ba5 b6. Motor: −0.6.' },
        { move: '16...e4', text: '17.Rc1 Rd8 18.Rc7: Beyaz kale yedinci yataya girer. Motor: −0.2.' },
      ],
    },
    '17w': {
      text: 'Beyaz atı alır ve şahı d7’ye çeker.',
      amac: 'Siyah şahını merkezde tutmak ve d5 piyonunu hedef almak.',
      neden: 'Fil geri çekilirse Siyah rok yapar ve fazla piyonuyla rahat bir oyun alır (17.Be2 O-O, Motor: −1.2).',
      diger: [
        { move: '17.Be2', text: '17...O-O 18.O-O Rac8: Siyah piyon fazlasıyla güvende. Motor: −1.2.' },
        { move: '17.Rb1', text: '17...Qxa3 18.Bxd7+ Kxd7. Motor: −1.6.' },
      ],
    },
    '17b': {
      text: 'Şah d7’de fili alır.',
      amac: 'Taşı geri almak; başka bir alış yolu yok.',
      neden: 'Bu tek alış: vezir b2’de, d7’ye ulaşamaz. 17...Kf8 ya da 17...Kd8 fili almaz ve taş kaybettirir (Motor: +3.7 / +4.0).',
    },
    '18w': {
      text: 'Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleleri c- ve d-hatlarına getirmek.',
      neden: 'Siyah şahı merkezde ama Beyaz da gelişimini bitirmeli. 18.Ba5 ya da 18.Rc1 şahı merkezde bırakır ve biraz daha kötüdür.',
      diger: [
        { move: '18.Ba5', text: '18...Ke6 19.O-O f5 20.Bb4. Motor: −0.9.' },
        { move: '18.Rc1', text: '18...Rhc8 19.O-O Ke8. Motor: −1.1.' },
      ],
    },
    '18b': {
      text: '18...e4! e-piyonu ilerler.',
      amac: 'e5 karesini vezirin dönüşüne açmak ve Beyazın f3/d3 karelerini kapatmak.',
      neden: 'Vezir b2’de tehlikeli bir yerde; ...Qe5 dönüşü için e5 boş olmalı. Ayrıca e4 piyonu Beyaz vezirin d3’e ve f3’e gelmesini engeller. 18...Rhc8 19.Ba5 ve Qxd5+ ile şah açık kalırdı.',
      diger: [
        { move: '18...Rhc8', text: '19.Ba5 Rc6 20.Qxd5+ Ke8: Beyaz piyonu geri alır. Motor: +0.3.' },
        { move: '18...Rh5', text: '19.Ba5 e4 20.Rc1: kale yanal savunma. Motor: +0.3.' },
      ],
    },
    '19w': {
      text: '19.Bc3? Beyaz fili verir.',
      amac: 'Vezir fili alırken d5 piyonunu şahla almak ve iki piyon karşılığında Siyah şahına saldırmak.',
      neden: 'ChessBase bunu “iki vezir kanadı piyonu karşılığında fil” diye özetliyor. Fedanın sorunu, Siyah şahının e8 ve f8 üzerinden güvenliğe ulaşabilmesi. 19.Bb4 ile fillerin değişimi ya da 19.Qg4+ çok daha sağlamdı.',
      diger: [
        { move: '19.Bb4', text: '19...Qe5 20.Bxe7 Kxe7 21.Qd2: siyah kareli filler değişir. Motor: −0.8.' },
        { move: '19.Qg4+', text: '19...f5 20.Qxg6 Qf6 21.Qxf6: g6 piyonu geri alınır. Motor: yaklaşık −0.6/−1.1.' },
        { move: '19.Rc1', text: '19...Qe5 20.Bb4 Bxb4 21.axb4. Motor: −0.9/−1.3.' },
      ],
    },
    '19b': {
      text: 'Vezir fili alır.',
      amac: 'Taşı almak ve bir taş önde kalmak.',
      neden: 'Doğal ve en iyi. 19...Qxa1? 20.Qxd5+ Ke8 21.Rxa1 sonrası vezir kale karşılığında gider; 19...Bf6? 20.Bxb2 Bxb2 21.Qxd5+ ile Beyaz kazanır.',
      diger: [
        { move: '19...Qxa1?', text: '20.Qxd5+ Ke8 21.Rxa1: vezir kaleye gider. Motor: +5.9.' },
      ],
    },
    '20w': {
      text: 'Vezir d5’i şahla alır.',
      amac: 'Bir piyon geri almak ve şaha karşı inisiyatif kurmak.',
      neden: 'Planın tek tutarlı devamı. 20.Ra2 ya da 20.b4 piyonu geri almaz ve bir taş eksik kalır (Motor: −4.9 / −5.0).',
      diger: [
        { move: '20.Ra2', text: '20...Qe5 21.Rd2 Rh5: Siyah bir taş önde. Motor: −4.9.' },
      ],
    },
    '20b': {
      text: 'Şah e8’e çekilir.',
      amac: 'f7 ve e7 filine yakın kalmak ve şahı f8–g8 üzerinden güvenliğe götürmek.',
      neden: '20...Bd6? 21.Qxf7+ ve 20...Kc7? 21.Rac1 ile şah c-hattında sıkışır (Motor: +3.8 / +5.8). e8 şahı Beyazın kalelerinin açacağı hatlardan uzak tutar.',
      diger: [
        { move: '20...Bd6?', text: '21.Qxf7+ Kd8 22.Rfd1: şah açık. Motor: +3.8.' },
        { move: '20...Kc7?', text: '21.Rac1 Rae8 22.Rxc3+: c-hattında vezir gider. Motor: +5.8.' },
      ],
    },
    '21w': {
      text: 'Kale c-hattına gelir ve vezire saldırır.',
      amac: 'Veziri kovalamak ve Siyah şahına karşı kaleleri devreye sokmak.',
      neden: '21.Rfc1 aynı değerdedir (−2.1); 21.Qxb7 ise önce piyonu alır ama Siyaha 21...Qc8 ile vezir değişimi verir.',
      diger: [
        { move: '21.Rfc1', text: '21...Qd3 22.Qxb7 Rd8 23.Rc7. Motor: −2.1.' },
        { move: '21.Qxb7', text: '21...Qc8 22.Qxe4 Ra7: vezirler değişebilir. Motor: −2.2.' },
      ],
    },
    '21b': {
      text: '21...Qd3! Vezir merkeze kaçar.',
      amac: 'Veziri güvenli bir kareye çekmek ve d-hattını tutmak; b3 ve a3’e de bakmak.',
      neden: 'Diğer kareler ya güvensiz ya pasif: 21...Qe5?? 22.Qxe5, 21...Rd8?? 22.Qxd8+ veziri kaybettirir; 21...Qf6 ve 21...Qb2 üstünlüğün çoğunu bırakır.',
      diger: [
        { move: '21...Qf6', text: '22.Qxb7 Rd8 23.Rfd1 Qe6: Beyaz piyonu ve inisiyatifi geri aldı. Motor: −0.3.' },
        { move: '21...Qb2', text: '22.Rfd1 f5 23.Qxb7: vezir yine sıkışır. Motor: 0.0/+0.4.' },
        { move: '21...Rd8??', text: '22.Qxd8+ Kxd8 23.Rxc3: vezir gider. Motor: +4.3.' },
      ],
    },
    '22w': {
      text: 'Beyaz b7 piyonunu alır.',
      amac: 'İkinci piyonu almak ve a6 piyonunu hedeflemek.',
      neden: 'Fedanın karşılığı: artık bir taş için iki piyon. 22.Qe5 ya da 22.Qa5 daha kötüdür (Motor: −3.5 / −4.0).',
      diger: [
        { move: '22.Qe5', text: '22...f6 23.Qe6 Qd7: vezirler değişir. Motor: −3.5.' },
      ],
    },
    '22b': {
      text: '22...Rd8! Kale d-hattına gelir.',
      amac: 'd3 vezirini desteklemek ve d-hattında Beyazın birinci yatayına baskı kurmak.',
      neden: 'Kale vezirle d-hattında birleşir; Beyazın Rfd1 ile itirazı vezirin iki kale karşılığında verilmesine yol açacak. 22...Qxf1+? 23.Kxf1 bir kale için vezir verir (+5.6); 22...Qd8 ise eşitliğe razı olmaktır.',
      diger: [
        { move: '22...Qd8', text: '23.Rfd1 Qb8 24.Qxe4: Beyaz e4’ü de alır. Motor: 0.0.' },
        { move: '22...Qxf1+?', text: '23.Kxf1 Rd8 24.Rc8: vezir kaleye. Motor: +5.6.' },
      ],
    },
    '23w': {
      text: 'Beyaz d-hattına kale koyar ve veziri sorgular.',
      amac: 'd-hattında Siyah kaleyle yüzleşmek ve vezire saldırmak.',
      neden: 'Bu hamle Siyaha 23...Qxd1+ ile iki kale alma imkânı verir. Motor 23.Rc7 Qd6 24.Rfc1 ile yedinci yatayı tutmayı biraz daha iyi buluyor (−2.2/−2.3).',
      diger: [
        { move: '23.Rc7', text: '23...Qd6 24.Rfc1 Rh5 25.Qxe4: kale yedinci yatayda. Motor: −2.3.' },
        { move: '23.b4', text: '23...Qd7 24.Rc7 Qe6. Motor: −2.6.' },
      ],
    },
    '23b': {
      text: '23...Qxd1+! Vezir kaleyi alır.',
      amac: 'Veziri iki kale karşılığında vermek ve şahı tamamen güvenceye almak.',
      neden: 'Vezir değişimiyle Beyazın saldırı fırsatları biter. Siyahın iki kalesi ve fili, Beyazın veziri ve dört piyonu var; Beyazın e4 piyonunu geri alması zor değil, ama Siyahın taşları koordineli. 23...Qb5 ise eşitliğe gider.',
      diger: [
        { move: '23...Qb5', text: '24.Rxd8+ Bxd8 25.Qxe4+ Kf8: eşitlik. Motor: 0.0.' },
        { move: '23...Qe2?', text: '24.Qc6+ Kf8 25.Rxd8+: Beyaz kazanır. Motor: +3.4.' },
      ],
    },
    '24w': {
      text: 'Beyaz veziri alır.',
      amac: 'Malzemeyi geri almak; başka seçenek yok.',
      neden: 'Zorunlu: 24.Kg2 Qxc1 ile bir kale daha gider (−9.1).',
    },
    '24b': {
      text: 'Kale d1’de alır ve şah çeker.',
      amac: 'İkinci kaleyi almak ve vezire karşı iki kale dengesini kurmak.',
      neden: 'Planın tamamlanması; 24...a5? 25.Rxd8+ ile Beyaz bir kale önde kalır (+5.7).',
    },
    '25w': {
      text: 'Şah g2’ye çekilir.',
      amac: 'Şahtan kaçmak.',
      neden: 'Tek yasal hamle. Şah g2’de h-hattındaki kaleye karşı h2 piyonunu da korur.',
    },
    '25b': {
      text: '25...a5: a-piyonu b7’deki vezirin saldırısından kurtulur.',
      amac: 'a6’daki piyonu korumak ve Beyazın b-piyonunu durdurmak.',
      neden: 'Qxa6 tehdidi vardı. Motor 25...Rd6 26.Qb8+ Rd8 ile önce vezir kanadını savunmayı az farkla yeğliyor (−2.5).',
      diger: [
        { move: '25...Rd6', text: '26.Qb8+ Rd8 27.Qb6 Kf8: kale altıncı yatayda. Motor: −2.5.' },
        { move: '25...Rh5', text: '26.Qxa6 Rf5: kale f2’ye baskı. Motor: −2.4.' },
      ],
    },
    '26w': {
      text: '26.g4: Beyaz şah kanadında yer kazanır.',
      amac: 'Kalenin h5 ve f5’e gelmesini engellemek ve piyon çoğunluğunu ilerletmeye başlamak.',
      neden: 'Siyahın h8 kalesi h5-f5 üzerinden f2’ye ulaşabiliyordu. g4 bunu önler ve Beyazın piyonlarına alan açar. Motor bunu en iyi buluyor.',
      diger: [
        { move: '26.Qa8+', text: '26...Rd8 27.Qxa5 Rh5. Motor: −2.5.' },
        { move: '26.Qxe4', text: '26...Rh5 27.Qa4+ Kf8. Motor: −2.8.' },
      ],
    },
    '26b': {
      text: 'Şah f8’e gelir.',
      amac: 'Şahı g8–h7 üzerinden güvenliğe götürmek ve f7’yi korumak.',
      neden: 'ChessBase’in esprisiyle Ivanchuk “elle rok yapar”: şah zaten hareket ettiği için rok imkânı yok. 26...Rd8 ve 26...g5 de yakındır.',
      diger: [
        { move: '26...Rd8', text: '27.Qxe4 Kf8 28.Qa4 Kg8. Motor: −2.6.' },
        { move: '26...g5', text: '27.b4 axb4 28.a4. Motor: −2.4.' },
      ],
    },
    '27w': {
      text: 'Vezir e4 piyonunu alır.',
      amac: 'Malzeme farkını azaltmak: artık bir taşa üç piyon.',
      neden: 'e4 piyonu Beyazın şah kanadını sıkıştıran ve f3/d3’ü tutan bir taştı; onu almak hem malzeme hem alan kazandırır. Vezir e4’ten a8 ve h7’ye de bakar. 27.b4 axb4 28.a4 ile geçer piyon fikri daha yavaş (−2.9).',
      diger: [
        { move: '27.b4', text: '27...axb4 28.a4 Rd8 29.a5. Motor: −2.9.' },
        { move: '27.Qa8+', text: '27...Bd8 28.Qxe4 g5. Motor: −3.0.' },
      ],
    },
    '27b': {
      text: '27...g5: Siyah f4 ve h4 karelerini kontrol eder.',
      amac: 'Beyazın şah kanadı piyonlarını sabitlemek ve h8 kalesinin oyuna girmesini hazırlamak.',
      neden: 'g4 piyonunu sabitler, f4’ü kontrol eder ve Beyazın f4–f5 ile şah kanadında piyon ilerletmesini zorlaştırır. Ayrıca h-hattını h4’e kadar kaleye açık tutar. 27...Rd8 28.Qa4 Kg8 de mümkün (−2.6).',
      diger: [
        { move: '27...Rd8', text: '28.Qa4 Kg8 29.Qxa5 Kh7. Motor: −2.6.' },
        { move: '27...Rh6', text: '28.Qa4 Rd5 29.e4. Motor: −2.6.' },
      ],
    },
    '28w': {
      text: 'Vezir f5’e gelir.',
      amac: 'f7 ve d7’ye bakmak ve şah kanadında aktif kalmak.',
      neden: 'f5’te vezir f7’ye ve d7’ye bakar, Siyah kalelerin yanlamasına hareketini kısıtlar. Ama vezir kanadında a5 piyonu zayıftı; motor 28.Qa4 ile oraya yönelmeyi yeğliyor (−2.8), çünkü Beyazın geleceği vezir kanadında bir geçer piyondur.',
      diger: [
        { move: '28.Qa4', text: '28...Rh6 29.b4 Rd5 30.e4. Motor: −2.8.' },
        { move: '28.Qe5', text: '28...Rh6 29.Qxa5 Kg8. Motor: −3.0.' },
      ],
    },
    '28b': {
      text: 'Fil d8’e çekilir.',
      amac: 'a5 ve f6’yı korumak.',
      neden: 'Fil d8’de hem a5’i hem de f6 ve g5’i korur; e7’de ise vezir şahlarıyla hedef olabilirdi. Vezire karşı oyunda taşların birbirini koruması, çatalları önlemenin yoludur. 28...Rh6 aynı değerde ama a5’i bırakır (−3.2).',
      diger: [
        { move: '28...Rh6', text: '29.Qxa5 Kg8 30.a4 Re6: piyon gider ama Siyah aktif. Motor: −3.2.' },
        { move: '28...Kg8', text: '29.Qc2 Ra1 30.Qc7. Motor: −2.9.' },
      ],
    },
    '29w': {
      text: 'Vezir şah çeker.',
      amac: 'Şahı geri çekmeye zorlamak ve vezirle merkeze dönmek.',
      neden: 'Şah f8’de kalırsa Siyah kaleleri birinci yatayda birbirine bağlanamaz; Beyaz şahla şahı g8’e ve h7’ye iterken vezirini c5’ten b-piyonunun desteğine getirir. Motor bunu en iyi buluyor; 29.Qc2 ve 29.b4 biraz daha zayıf (−3.4 / −3.5).',
      diger: [
        { move: '29.Qc2', text: '29...Rd6 30.e4 Rhh6. Motor: −3.4.' },
      ],
    },
    '29b': {
      text: 'Şah g8’e gider.',
      amac: 'h7’ye yaklaşmak ve h8 kalesine yer açmak.',
      neden: 'Şah g8–h7 üzerinden güvenliğe gidecek; ChessBase’in deyişiyle bu, rok yerine “elle rok”tur. 29...Ke8 30.Qb5+ ile şah yine merkeze döner, 29...Be7 ise a5’i bırakır.',
      diger: [
        { move: '29...Ke8', text: '30.Qb5+ Kf8 31.b4. Motor: −2.7.' },
        { move: '29...Be7', text: '30.Qxa5 Kg8 31.Qe5: piyon gider. Motor: −2.4.' },
      ],
    },
    '30w': {
      text: 'Vezir e5’te merkezi tutar.',
      amac: 'g7 ve b8’e bakmak, b-piyonunun ilerlemesini desteklemek.',
      neden: 'Vezire karşı kaleler oyununda vezirin gücü merkezden aynı anda birçok hedefe bakmasından gelir: e5’ten b8’e, g7’ye ve a5’e uzanır. Siyahın kaleleri henüz bağlantılı değil, bu yüzden vezir çatal fırsatları arar. 30.Qb5 ve 30.Qc6 de aynı değerde (−3.1/−3.2).',
      diger: [
        { move: '30.Qb5', text: '30...g6 31.b4 axb4 32.Qa4. Motor: −3.1.' },
        { move: '30.Qc6', text: '30...g6 31.e4 Kg7. Motor: −3.2.' },
      ],
    },
    '30b': {
      text: '30...g6: Siyah şahın önünü sağlamlaştırır.',
      amac: 'h7’ye bir kare açmak ve h8 kalesini serbest bırakmak.',
      neden: 'h8’deki kale şimdiye dek şahın yanında kilitliydi; ...g6 ve ...Kh7 ile kale f8 ya da b8’e çıkabilecek. Ayrıca g7 piyonu e5’teki vezirin çaprazında bir hedefti, g6’da g5 piyonuyla zincir kurar. Motor bunu en iyi buluyor (−3.3).',
      diger: [
        { move: '30...Kf8', text: '31.Qc5+ Kg8 32.Qb5: tekrar. Motor: −3.2.' },
        { move: '30...Kh7', text: '31.b4 g6 32.b5. Motor: −2.8.' },
      ],
    },
    '31w': {
      text: '31.b4: Beyaz geçer piyon yaratmak ister.',
      amac: 'a ve b piyonlarını değişip tek ve hızlı bir b-piyonu elde etmek.',
      neden: 'Vezir tek başına iki kaleye karşı mat kuramaz; Beyazın kurtuluşu, Siyah taşları bağlayacak bir geçer piyondur. b4 ile a5 piyonu değişime zorlanır ve geriye tek, iki hamlede b6’ya ulaşabilecek bir b-piyonu kalır. Bekleyen hamleler (31.h3, 31.a4) Siyaha kalelerini bağlama zamanı verir.',
      diger: [
        { move: '31.h3', text: '31...Kh7 32.b4 axb4. Motor: −3.2.' },
        { move: '31.a4', text: '31...Kh7 32.h3 Rf8. Motor: −3.4.' },
      ],
    },
    '31b': {
      text: 'Piyonlar değişir.',
      amac: 'a5 piyonunu tahtadan çıkarmak ve b-piyonunu tek bırakmak.',
      neden: 'Motor bunu en iyi buluyor; 31...a4 ile kendi a-piyonunu korumak 32.b5 sonrası Beyaza güçlü bir piyon verir.',
      diger: [
        { move: '31...a4', text: '32.b5 Kh7 33.Qe4: Beyazın b-piyonu güçlü. Motor: −2.3.' },
      ],
    },
    '32w': {
      text: 'Beyaz a3 ile alır; b-piyonu geçer piyon oldu.',
      amac: 'Geçer piyonu yaratmak.',
      neden: 'Zorunlu ve doğal. 32.h4? bxa3 ile a-piyonu Siyaha geçer (−4.4).',
      diger: [
        { move: '32.h4?', text: '32...bxa3 33.Qe8+ Kg7: Siyahın a-piyonu. Motor: −4.4.' },
      ],
    },
    '32b': {
      text: 'Şah h7’ye geçer.',
      amac: 'h8 kalesini serbest bırakmak.',
      neden: 'Geçer piyon b5–b6’ya yürümeden önce Siyah tüm taşlarını oyuna sokmalı; h8 kalesi şahın yanından çıkmadıkça iki kale birbirini koruyamaz. Kh7 bunu sağlar ve şahı vezir şahlarına karşı g6–g5 zincirinin arkasına saklar. 32...Rh4 33.Kf3 Rh8 de benzer bir fikirdir (−3.0).',
      diger: [
        { move: '32...Rh4', text: '33.Kf3 Rh8 34.Ke2 Rb1. Motor: −3.0.' },
      ],
    },
    '33w': {
      text: 'Geçer piyon ilerler.',
      amac: 'b-piyonunu ilerletmek ve Siyah taşlarını savunmaya zorlamak.',
      neden: 'Piyon ne kadar ilerlerse Siyah taşlarını o kadar bağlar. b5’te piyon d7 ve c6 karelerinden de vezirle desteklenebilir. 33.h3 ve 33.e4 daha yavaş; Siyaha kalelerini bağlama zamanı tanır. Motor: 33.b5 −3.3.',
      diger: [
        { move: '33.h3', text: '33...Rf8 34.b5 Kg8. Motor: −3.3.' },
      ],
    },
    '33b': {
      text: 'Kale f8’e gelir.',
      amac: 'f7’yi korumak ve kaleyi esnek tutmak.',
      neden: 'Vezir f7’yi alırsa Siyah şahı açılır ve sürekli şah tehlikesi doğar; Rf8 bunu önler ve kaleyi gerektiğinde b8’e ya da e8’e geçebilecek bir yere koyar. 33...Rd7 34.b6 Bxb6 35.Qxg5 piyonu hemen alır ama g5’i bırakır (−3.0).',
      diger: [
        { move: '33...Rd7', text: '34.b6 Bxb6 35.Qxg5. Motor: −3.0.' },
      ],
    },
    '34w': {
      text: 'Vezir c5’ten b6 karesini destekler.',
      amac: 'b6–b7 ilerleyişini hazırlamak.',
      neden: 'c5’ten vezir hem b6 karesini hem de f8 kalesini görür; b6–b7 sonrası Qc8 ile piyonun vezir olması tehdit edilebilir. Motor yine de 34.f4 ile g5’i sorgulayıp şah kanadında ikinci bir cephe açmayı az farkla yeğliyor (−3.1), çünkü tek cepheli saldırıyı iki kale kolayca karşılar.',
      diger: [
        { move: '34.f4', text: '34...Rd2+ 35.Kh3 gxf4 36.exf4. Motor: −3.1.' },
        { move: '34.Qc3', text: '34...Rd7 35.Qc6 Re7. Motor: −3.2.' },
      ],
    },
    '34b': {
      text: 'Şah g8’e gider.',
      amac: 'f7 ve g6’yı korumak.',
      neden: 'Şah f7’ye ve f8 kalesine yakınlaşır; böylece kale serbest kalır. Motor 34...Kg7 35.Qc3+ Bf6 ile filin f6’dan uzun çaprazı tutmasını biraz daha iyi buluyor (−3.4); maç hamlesi −2.9. Fark küçük, ama Beyaza 35.Qc6 ile direnme şansı bıraktı.',
      diger: [
        { move: '34...Kg7', text: '35.Qc3+ Bf6 36.Qc5 Rh8. Motor: −3.4.' },
      ],
    },
    '35w': {
      text: '35.b6? Piyon ilerler.',
      amac: 'Piyonu b7’ye yaklaştırmak.',
      neden: 'ChessBase’in raporu bunu Aronian’ın son hatası olarak niteliyor. b6, d8 filinin vurduğu karedir; 35...Rb1 ile kale arkadan gelir ve piyon düşer. 35.Qc6 ile piyonu vezirle desteklemek daha iyiydi.',
      diger: [
        { move: '35.Qc6', text: '35...Rb1 36.e4 Rb4 37.h3: piyon vezirle korunur. Motor: −2.8/−3.2.' },
        { move: '35.e4', text: '35...Rd7 36.h4 gxh4. Motor: −3.4.' },
      ],
    },
    '35b': {
      text: '35...Rb1! Kale piyonun arkasına geçer.',
      amac: 'b6 piyonunu kale ve fille iki kez saldırarak almak.',
      neden: 'Kale piyonun arkasında en güçlü konumdadır. 35...Bf6 ve 35...Rd7 piyonu almaz.',
      diger: [
        { move: '35...Bf6', text: '36.Qc2 Rdd8 37.h4. Motor: −2.5.' },
        { move: '35...Rd7', text: '36.Qc6 Rd2 37.Qc3. Motor: −2.0/−2.3.' },
      ],
    },
    '36w': {
      text: 'Beyaz f4 ile karşı oyun arar.',
      amac: 'g5 piyonunu sorgulamak ve şah kanadında piyonlarını hareketlendirmek.',
      neden: 'b6 piyonu Rb1 ve Bd8 tarafından iki kez saldırı altında, yalnızca vezir koruyor; uzun vadede düşecek. Beyaz bu zamanı g5’i sorgulamak ve f-piyonunu f5–f6’ya yürütmek için kullanır, böylece Siyah şahına karşı mat fikirleri doğar. Motor bunu en iyi buluyor (−4.3).',
      diger: [
        { move: '36.h4', text: '36...gxh4 37.f4 Re8. Motor: −4.6.' },
        { move: '36.Kg3', text: '36...Rxb6 37.f4 gxf4+. Motor: −4.6.' },
      ],
    },
    '36b': {
      text: 'Kale ikinci yataya şahla girer.',
      amac: 'Kaleyi aktif tutmak ve Beyaz şahı sıkıştırmak.',
      neden: 'Kale yedinci yataya (Beyaz için ikinci yatay) girer ve Beyaz şahını sıkıştırır; şah g3 ya da f3’e gitmek zorunda kalır. 36...gxf4 37.h4 f3+ ya da 36...Rxb6 da aynı değerde (−4.5/−4.7); Ivanchuk önce şahla tempo kazanmayı seçti.',
      diger: [
        { move: '36...gxf4', text: '37.h4 f3+ 38.Kxf3 Rxb6. Motor: −4.7.' },
      ],
    },
    '37w': {
      text: 'Şah g3’e çıkar.',
      amac: 'Şahı ileri götürüp f4’ü desteklemek.',
      neden: 'g3’te şah f4 ve h4 piyonlarını destekler ve f-piyonunun ilerleyişine eşlik eder. Ama bu kare ...gxf4+ ile şah çekişine açıktır. 37.Kf3 Rxb6 38.f5 ya da 37.Kf1 aynı değerde (−4.5/−4.6).',
      diger: [
        { move: '37.Kf3', text: '37...Rxb6 38.f5 Re8. Motor: −4.5.' },
      ],
    },
    '37b': {
      text: 'Siyah f4’te değişir.',
      amac: 'Beyazın piyonlarını parçalamak.',
      neden: 'Değişimle Beyazın e3–f4 zinciri bozulur ve e-hattı Siyah kaleleri için açılır; şah çekişi tempo da kazandırır. Motor 37...Re8 38.b7 Rxb7 ile önce kaleyi oyuna sokmayı biraz daha iyi buluyor (−4.9), ama maç hamlesi de kazancı tehlikeye sokmaz (−4.2/−4.5).',
      diger: [
        { move: '37...Re8', text: '38.b7 Rxb7 39.f5 Rb6. Motor: −4.9.' },
      ],
    },
    '38w': {
      text: 'Piyon geri alınır.',
      amac: 'Malzemeyi geri almak.',
      neden: 'Geri almazsa Beyaz bir piyon daha eksik kalır; 38.Kf3 fxe3 39.Qxe3 ile e-piyonu yerine f-piyonu kalır ama b6 da düşer (−5.0). exf4 ile Beyaz f-piyonunu korur ve f5–f6 planını canlı tutar.',
      diger: [
        { move: '38.Kf3', text: '38...fxe3 39.Qxe3 Bxb6. Motor: −5.0.' },
      ],
    },
    '38b': {
      text: 'Fil b6 piyonunu alır.',
      amac: 'Beyazın geçer piyonunu tahtadan çıkarmak.',
      neden: 'Beyazın tek geçer piyonu gider ve Beyaz kazanç umudunu tamamen kaybeder. Fil b6’da a7–g1 çaprazına yerleşir; daha sonra ...Bf2 ile Beyaz şahının etrafındaki kareleri tutacak olan da bu fildir. Motor bunu en iyi buluyor (−4.7).',
      diger: [
        { move: '38...Rb3+', text: '39.Kg2 Rb2+ 40.Kf3 Bxb6. Motor: −4.5.' },
      ],
    },
    '39w': {
      text: 'Vezir c3’ten büyük çapraza bakar.',
      amac: 'f5–f6 ile Qg7# ya da Qh8# tehdidi kurmak.',
      neden: 'Siyah şahı g8’de, kalesi f8’de; f6 piyonu g7’yi destekleyebilirse Qg7# ya da Qh8# tehdidi doğar. Vezir c3’ten a1–h8 çaprazını tutar. Motor 39.Qc1 ve 39.Qc6’yı aynı değerde görüyor (−4.7).',
      diger: [
        { move: '39.Qc1', text: '39...Re2 40.g5 Rfe8. Motor: −4.7.' },
      ],
    },
    '39b': {
      text: 'Kale b1’e döner.',
      amac: 'Birinci yatayı tutmak ve ...Rg1+ fikrini hazırlamak.',
      neden: 'Kale g-hattına geçip şah çekmeye hazırlanır ve birinci yatayı kontrol eder. Motor 39...Bf2+ ya da 39...Re2 ile e-hattını ve Beyaz şahını hemen hedeflemeyi daha güçlü buluyor (−5.0); maç hamlesi biraz daha yavaş (−4.4) ama yine açıkça kazanıyor.',
      diger: [
        { move: '39...Bf2+', text: '40.Kf3 Rfb8 41.Qc1. Motor: −5.0.' },
        { move: '39...Re2', text: '40.Qc6 Re6 41.Qc4 Re3+. Motor: −4.9.' },
      ],
    },
    '40w': {
      text: 'Beyaz f5 ile şah kanadında ilerler.',
      amac: 'f6 ile Qg7# tehdidi kurmak.',
      neden: 'f6 gelirse Qg7# tehdidi oluşur ve Siyah savunmaya geçmek zorunda kalır. Ayrıca gxf5 gxf5 ile g-hattı açılabilir. 40.Kh4 ya da 40.Qd2 daha pasif kalır (−4.6/−4.7).',
      diger: [
        { move: '40.Kh4', text: '40...Rd8 41.f5 Bf2+. Motor: −4.6.' },
      ],
    },
    '40b': {
      text: 'Kale şah çeker.',
      amac: 'Beyaz şahını kenara itmek.',
      neden: 'Şahı h-hattına itmek, onu ...Re3+ ve ...Bf2 gibi mat ağlarına yaklaştırır. Motor 40...Re8 ile önce e-hattını kontrol etmeyi biraz daha iyi buluyor (−4.9); 40...gxf5 41.gxf5 Rd8 de mümkün (−4.3).',
      diger: [
        { move: '40...Re8', text: '41.Qd2 Rb3+ 42.Kg2 Rbe3. Motor: −4.9.' },
        { move: '40...gxf5', text: '41.gxf5 Rd8 42.Qe5. Motor: −4.3.' },
      ],
    },
    '41w': {
      text: 'Şah h3’e çekilir.',
      amac: 'Şahtan kaçmak.',
      neden: 'h3’te şah kenarda kalır ve g2 karesi g1 kalesinin kontrolündedir; Siyah bir fil hamlesiyle g3 ve h4’ü kapatırsa mat ağı kurulur. Motor 41.Kf4’ü yeğliyor (−4.1/−4.3): şah merkezde daha aktif ve f-piyonunu destekler. ChessBase’in fotoğraf altı yazısı da 41.Kh3 sonrasında oyunun neredeyse bittiğini ve Aronian’ın bir pat hilesi aradığını söylüyor.',
      diger: [
        { move: '41.Kf4', text: '41...gxf5 42.gxf5 Rd8 43.Qc6. Motor: −4.1/−4.3.' },
      ],
    },
    '41b': {
      text: 'İkinci kale e-hattına gelir.',
      amac: '...Re3+ fikrini hazırlamak ve f8 karesini şaha açmak.',
      neden: 'Kale f8’den çıkınca f6 sonrası Qg7+ artık mat değildir, çünkü şah f8’e kaçabilir. Aynı zamanda kale e-hattından e3’e bakar; ...Re3+ ile Beyaz şahı kenara sıkıştırılacak. 41...gxf5 42.Qb4 Bd8 de güçlüydü (−5.3).',
      diger: [
        { move: '41...gxf5', text: '42.Qb4 Bd8 43.gxf5. Motor: −5.3.' },
      ],
    },
    '42w': {
      text: '42.Qf6? Vezir g7’ye bakar.',
      amac: 'fxg6 ile f7’yi açmak ve Qg7# tehdidi kurmak.',
      neden: 'Vezir birinci yatayı ve e3’ü bırakır; 42...Bf2! ile ...Re3# tehdidi gelir. Motor 42.Qd2’yi yeğliyor (−5.2).',
      diger: [
        { move: '42.Qd2', text: '42...Bc5 43.g5 gxf5 44.Kh4. Motor: −5.2.' },
        { move: '42.Qb2', text: '42...Re3+ 43.Kh4 Bd8+ 44.f6. Motor: −5.4/−5.8.' },
      ],
    },
    '42b': {
      text: '42...Bf2! Fil g3 ve h4 karelerini tutar.',
      amac: '43...Re3# matını tehdit etmek.',
      neden: 'Re3+ sonrası şahın g2 (Rg1), g3 ve h4 (Bf2) kareleri kapalıdır; tek savunma veziri e3’te vermektir.',
      diger: [
        { move: '42...Bc5', text: '43.fxg6 Re3+ 44.Kh4 Be7. Motor: −5.4.' },
        { move: '42...Re3+', text: '43.Kh4 Bc5 44.Qd8+ Kh7. Motor: −4.6.' },
      ],
    },
    '43w': {
      text: '43.Qg7+: Vezir feda edilir.',
      amac: 'Pat tuzağı kurmak: 43...Kxg7 44.f6+ Kxf6?? 45.g5+ ile pat.',
      neden: 'ChessBase’in iki yazısı da bunu bir pat tuzağı olarak anlatıyor. Diğer hamleler veziri yine kaybettirir: 43.Qc3 Re3+ 44.Qxe3 Bxe3.',
      diger: [
        { move: '43.Qc3', text: '43...Re3+ 44.Qxe3 Bxe3: vezir gider ve Siyah iki kale önde kalır; motor bunu kesin kayıp olarak gösteriyor. Qg7+ ise en azından bir pat şansı bırakır.' },
      ],
    },
    '43b': {
      text: 'Şah veziri alır.',
      amac: 'Veziri almak; başka yasal hamle yok.',
      neden: 'Tek yasal hamle: vezir g7’de şah çekiyor ve h8, f8, h7 karelerini tutuyor.',
    },
    '44w': {
      text: 'Piyon şah çeker.',
      amac: 'Tuzağı tamamlamak: 44...Kxf6?? 45.g5+ ile Beyaz pat olur.',
      neden: '44.g5 Rh8# ya da 44.fxg6 Re3# ile hemen mat olunur.',
      diger: [
        { move: '44.g5', text: '44...Rh8#: mat.' },
        { move: '44.fxg6', text: '44...Re3#: mat.' },
      ],
    },
    '44b': {
      text: 'Şah f8’e çekilir; Aronian terk etti.',
      amac: 'Pat tuzağından kaçmak ve 45.g5 Re3# ile mat etmek.',
      neden: '44...Kxf6?? 45.g5+ sonrası Siyahın her hamlesi Beyazı pat eder; Ivanchuk bunu gördü.',
      diger: [
        { move: '44...Kxf6??', text: '45.g5+ ile pat: oyun berabere.' },
        { move: '44...Kg8', text: '45.g5 Re3#: aynı mat.' },
      ],
    },
  },
  exercises: [
    { id: 'aiv-1', kind: 'tekrar', plan: false, title: 'Vezir kurtuluyor, sonra iki kaleye',
      source: 'Aronian – Ivanchuk, Sofya 2008 (21. hamle)',
      fen: 'r3k2r/1p2bpp1/p5p1/3Q4/4p3/PPq1P1P1/5P1P/2R2RK1 b - - 2 21',
      prompt: 'Siyah bir taş önde, ama c3’teki veziri c1 kalesinin saldırısı altında ve şahı merkezde. Vezir için doğru kareyi bulun ve devamını oynayın.',
      hint: 'Vezir merkezde hem güvende olsun hem d-hattını tutsun; sonra kale d-hattına gelsin.',
      line: ['Qd3', 'Qxb7', 'Rd8', 'Rfd1', 'Qxd1+'],
      explanation: '**21...Qd3! 22.Qxb7 Rd8! 23.Rfd1 Qxd1+** ve 24.Rxd1 Rxd1+ ile Siyah vezir karşılığında iki kale alır. Motor: 21...Qd3 −2.2, 21...Qf6 −0.3; 22...Rd8 −2.3, 22...Qd8 −0.2; 23...Qxd1+ −2.7, 23...Qb5 0.0.',
      link: 'Ivanchuk b2’ye dalan vezirini merkeze kurtardı ve doğru anda iki kale karşılığında verdi.' },
    { id: 'aiv-2', kind: 'tekrar', plan: false, title: 'Kale geçer piyonun arkasına',
      source: 'Aronian – Ivanchuk, Sofya 2008 (35. hamle)',
      fen: '3b1rk1/5p2/1P4p1/2Q3p1/6P1/4P3/5PKP/3r4 b - - 0 35',
      prompt: 'Beyazın b6’da geçer piyonu var ve vezir onu destekliyor. Siyahın iki kalesi ve fili var. Piyonu nasıl durdurursunuz?',
      hint: 'Kale piyonun önünde değil, arkasında daha güçlüdür.',
      line: ['Rb1'],
      explanation: '**35...Rb1!** Kale b-hattına, piyonun arkasına geçer; piyon ilerledikçe kalenin etkisi artar ve fil b6’yı alabilir. Motor: Rb1 −4.4, 35...Bf6 −2.6, 35...Rd7 −2.3.',
      link: 'Vezire karşı iki kale oynayan taraf, geçer piyonu kaleyle arkadan durdurur.' },
    { id: 'aiv-3', kind: 'transfer', plan: false, title: 'Ara şahla taşı geri almak',
      source: 'Pillsbury – Lasker, Sankt-Peterburg turnuvası 1895-96 (20. hamle)',
      fen: '6k1/pp3rp1/5b1p/q2p3Q/3P4/P7/P5PP/1K1R1B1R b - - 0 20',
      prompt: 'Siyah kalesini feda etti ve şimdi malzemece geride. Beyazın şahı b1’de, önü açık. Siyahın veziri a5’te. Hamle sizde.',
      hint: 'Vezir şah çekerse Beyaz hangi taşla araya girmek zorunda kalır?',
      line: ['Qb6+', 'Bb5', 'Qxb5+'],
      explanation: '**20...Qb6+! 21.Bb5 Qxb5+** Vezir şah çeker, Beyaz fille araya girmek zorunda kalır ve vezir fili şahla alır. Motor: Qb6+ −3.2, sonraki en iyi 20...Bg5 +4.4; 21...Qxb5+ −3.0, 21...Bg5 +3.0.',
      link: 'Ivanchuk 12...Qa5+ ile şah çekip araya giren c3 atını aldı; Lasker de şah çekip araya giren fili aldı.' },
    { id: 'aiv-4', kind: 'transfer', plan: false, title: 'Vezir iki kale karşılığında',
      source: 'Timman – Kasparov, Tilburg turnuvası 1991 (24. hamle)',
      fen: 'r3r1k1/1p1bqp2/2pp2p1/pP1N4/P1PB2n1/5QP1/6B1/2R1R1K1 b - - 0 24',
      prompt: 'Siyahın e7’deki veziri d5 atının ve e1 kalesinin saldırısı altında. Beyazın kaleleri e1 ve c1’de, şahı g1’de.',
      hint: 'Vezir e-hattındaki kaleyi şahla alırsa ne olur?',
      line: ['Qxe1+', 'Rxe1', 'Rxe1+'],
      explanation: '**24...Qxe1+! 25.Rxe1 Rxe1+** ve Siyah vezir karşılığında iki kale alır; ardından ...cxd5 ile at da düşer. Motor: Qxe1+ −2.2, sonraki en iyi 24...Qg5 +4.3; 25...Rxe1+ −2.1.',
      link: 'Ivanchuk 23...Qxd1+ 24.Rxd1 Rxd1+ ile aynı şekilde veziri iki kale karşılığında verdi.' },
  ],
};
