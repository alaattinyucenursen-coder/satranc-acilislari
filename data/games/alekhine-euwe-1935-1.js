// Alekhine – Euwe, Dünya Şampiyonası maçı, Hollanda 1935 (1. oyun). Kaynak: PgnMentor (Alekhine.pgn).
export default {
  id: 'alekhine-euwe-1935-1',
  theme: 'Açık d-hattı ve f5’e sıçrayan at',
  white: 'Aleksandr Alekhine', black: 'Max Euwe',
  whiteShort: 'Alekhine', blackShort: 'Euwe',
  event: 'Dünya Şampiyonası maçı, 1. oyun', site: 'Hollanda', year: 1935, eco: 'D17',
  variation: 'Slav Savunması, Çek varyantı, 6.Ne5 (Krause saldırısı)', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Nbd7 7. Nxc4 Qc7 8. g3 e5 9. dxe5 Nxe5 10. Bf4 Nfd7 11. Bg2 Be6 12. Nxe5 Nxe5 13. O-O Be7 14. Qc2 Rd8 15. Rfd1 O-O 16. Nb5 Rxd1+ 17. Rxd1 Qa5 18. Nd4 Bc8 19. b4 Qc7 20. b5 c5 21. Nf5 f6 22. Ne3 Be6 23. Bd5 Bxd5 24. Rxd5 Qa5 25. Nf5 Qe1+ 26. Kg2 Bd8 27. Bxe5 fxe5 28. Rd7 Bf6 29. Nh6+ Kh8 30. Qxc5 1-0`,

  summary: '1935 dünya şampiyonası maçının ilk oyunu (3 Ekim 1935). Unvan sahibi Alekhine 1.d4 açtı, Euwe Slav’ın Çek varyantıyla karşılık verdi ve iki oyuncu maçın teorik savaş alanı olacak 5.a4 Bf5 6.Ne5 Nbd7 7.Nxc4 Qc7 hattına girdi. Siyah **8...e5** ile merkezi açtı ve açılıştan rahat çıktı, ama karşılığında **d-hattını** açmış, e5’teki atını da f4 filinin bağlamasına bırakmıştı. Beyaz kalesini hemen d-hattına koydu, 16.Nb5 ile kale değişimini zorladı ve hattın tek sahibi oldu. Belirleyici hata **17...Qa5?** oldu: vezir kenara gidince 18.Nd4! ve 19.b4! tempo kazandırdı (19...Qxb4? 20.Bxe5 bir at kaybettirir), b5 ilerleyişi c6 piyonunu c5’e itti ve **d5 karesi** Beyazın kalıcı ileri karakolu oldu. 21...f6 ve 22...Be6 Siyahın konumunu daha da pasifleştirdi (Motor: +2.2’den +3.0’a), 24...Qa5 ile vezir bir kez daha kenara gitti. Alekhine atını yeniden f5’e getirdi, **27.Bxe5!** ile d7 karesinin tek savunucusunu aldı, kalesini **28.Rd7** ile yedinci yataya soktu ve **29.Nh6+!** ile c2’deki vezirin h7’ye giden çaprazını açtı: 29...gxh6 30.Qxh7 mat. 29...Kh8 30.Qxc5 sonrası Qxf8 matı ve Nf7+ tehditleri aynı anda geldiği için Euwe terk etti.',
  intro: 'Bu oyun, Alekhine ile Euwe arasındaki 30 oyunluk dünya şampiyonası maçını açtı. Maç Ekim–Aralık 1935’te Hollanda’nın on üç farklı kentinde oynandı. Alekhine başta öne geçti (dört oyundan sonra iki, dokuz oyundan sonra üç puan farkı), ama Euwe sonunda maçı 15½–14½ kazanarak dünya şampiyonu oldu. Maçın teorik merkezi Slav Savunmasıydı: Euwe bu açılışın erken teorisinin, özellikle 4...dxc4 ile başlayan açık hatların en önemli isimlerinden biriydi. Bu ilk oyunda sınanan hat (5.a4 Bf5 6.Ne5 Nbd7 7.Nxc4 Qc7) maç boyunca tekrar oynandı; Euwe 20. oyunda aynı varyantı Beyazla oynayıp kazandı.\n\n**Açılışın mantığı.** Slav 1.d4 d5 2.c4 **c6** ile d5’i piyonla destekler ve Vezir Gambiti Reddi’nin aksine c8 filini kapatmaz. 3.Nf3 Nf6 4.Nc3 sonrası **4...dxc4** Çek varyantıdır: Siyah piyonu alıp ...b5 ile tutmayı ya da ...Bf5 ile filini dışarı çıkarmayı düşünür. **5.a4** ...b5’i önler; karşılığında b4 karesi zayıflar. **6.Ne5** (Krause saldırısı; Avustralyalı IM Max Illingworth bu maçta çok oynandığı için ona “Alekhine saldırısı” demenin de yerinde olacağını yazar) atla c4 piyonunu geri almayı ve gerekirse f3-e4 ile merkezi kurmayı hedefler. Siyah ...Nbd7, ...Qc7 ve **...e5** ile merkezi açar. Bu hamlenin bedeli açık d-hattı ve f4 filinin c7 vezirine karşı bağladığı e5 atıdır. Oyunun geri kalanı bu iki unsurun üzerinden yürüdü.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '5.a4 ile ...b5’i önleyip 6.Ne5 ve 7.Nxc4 ile gambit piyonunu geri almak. 8.g3 ve Bg2 ile uzun çaprazı (c6, b7) hedef almak; e3 oynanmadığı için f5 filine e4 karesinde rakip çıkmaz ama Beyazın şahı da güvenle rok yapar.',
      '...e5 sonrası dxe5 ve **10.Bf4** ile e5 atını c7 vezirine karşı bağlamak. Bu bağlama, at e5’ten kıpırdadığında vezirin açıkta kalması demektir ve oyunun sonuna kadar Siyahın bütün taktik sorunlarının kaynağı oldu.',
      'Rokla, Qc2 ve Rfd1 ile **açık d-hattını** almak, 16.Nb5 ile kale değişimini zorlamak ve 17.Rxd1 ile hattın tek sahibi olmak.',
      'Siyahın veziri kenara (a5) çıkınca atı **Nb5-d4** ile merkeze döndürmek ve **b4-b5** ile tempo kazanmak. b5 piyonu c6’yı c5’e iter; bundan sonra d5 karesine hiçbir Siyah piyonu saldıramaz.',
      'Atı **Nd4-f5-e3-f5** yollarıyla oynatmak: f5’te at e7, d6, g7 ve h6 karelerini hedef alır, e3’te ise d5’e bakar. Beyaz kareli filleri d5’te değiştirip kaleyi **d5** karesine yerleştirmek.',
      'Doğru anda **Bxe5** ile d7 karesinin savunucusunu almak, **Rd7** ile yedinci yataya girmek ve f5 atıyla c2 vezirinin b1-h7 çaprazını birleştirip **Nh6+** açarak şaha saldırmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...dxc4 ve **...Bf5** ile filini piyon zincirinin dışına çıkarmak; Slav’ın temel fikri budur. Sonra ...e6 değil, ...Nbd7 ve ...Qc7 ile **...e5** kırılmasını hazırlamak.',
      '...e5 ile merkezi açıp eşitliği almak: 9.dxe5 Nxe5 sonrası at e5’te güçlü durur, d3, c4, f3 ve d7 karelerini kontrol eder. Motor bu bölümde Beyaza yalnızca küçük bir avantaj veriyor (+0.6).',
      'e5 atını ...Nfd7 ile ikinci kez desteklemek ve f4-c7 bağlamasından kurtulmak için doğru zamanda veziri bağlama çizgisinden çekmek (örneğin 13...Qa5 ya da 17...Qc8).',
      'Kaleleri d-hattında değiştirip Beyazın hat üstünlüğünü azaltmak; şah kanadında ...g5 gibi hamlelerle f4 filini kovalamak (modern 11...g5 fikri, Morozevich’in hattı).',
      'Vezir oyunun ortasında, merkeze yakın kalmalıydı. Euwe vezirini iki kez a5’e götürdü (17...Qa5? ve 24...Qa5?), Beyaz da her seferinde tempo kazandı. 21...f6 e5’i destekledi ama e7 filini kendi piyonlarının arkasında hapsetti.',
    ] },
  },
  critical: [
    { move: '8b', title: '...e5: merkez kırılmasının bedeli', text: '8...e5 Slav’da Siyahın klasik serbestleşme hamlesidir. 9.dxe5 Nxe5 sonrası at merkezde güzel durur, ama iki uzun vadeli sorun ortaya çıkar: d-hattı açılır ve Beyazın kaleleri bu hatta Siyahınkilerden önce gelir; 10.Bf4 ile de e5 atı c7’deki vezire karşı bağlanır. Motor ...e5’i kötü saymıyor (+0.6). Sorunlar sonradan, Siyah bu iki ayrıntıyı ihmal edince ortaya çıktı.' },
    { move: '16w', title: '16.Nb5: d-hattını ele geçiren tempo', text: 'At c7 vezirine saldırır. Siyah d8 kalesini korumak ve vezirini kurtarmak arasında kalır ve 16...Rxd1+ ile kaleleri değişir. 17.Rxd1 sonrası d-hattının tek sahibi Beyazdır. Burada 17.Qxd1?? oynanamazdı: 17...cxb5 sonrası c2’deki vezir artık c7 vezirini almıyor ve Beyaz bir at kaybeder (Motor: −3.7).' },
    { move: '17b', title: '17...Qa5? vezir kenara gidiyor', text: 'Wikipedia’nın maç sayfası bu hamleyi soru işaretiyle anıyor: Beyaza 18.Nd4 Bc8 19.b4! ile aktif bir devam hakkı verdi. Daha iyisi 17...Qc8’di: vezir hem e6 filini korur hem de f4-c7 bağlamasından çıkar (18.Nd6 Bxd6 19.Rxd6 sonrası Motor: +0.6). Vezir a5’te b4 piyonuna hedef olur, e5 atıyla bağlantısını da kaybeder. Bundan sonra Beyaz her hamlede tempo kazandı.' },
    { move: '19w', title: '19.b4! alınamayan piyon', text: 'Illingworth bu hamleyi “çok güçlü, çünkü Siyah b4’ü alamaz” diye niteler. 19...Qxb4? 20.Bxe5 ile e5 atı korumasız kalır ve Beyaz bir taş kazanır (Motor: +3.5). 19...Bxb4 20.Nb3 Qc7 21.Qe4 sonrası fil b4’te kapana girer ve Beyazın baskısı sürer (Motor: +1.6). Euwe vezirini c7’ye geri götürmek zorunda kaldı. Veziri a5’e götürüp geri getirmek iki tempoya mal oldu.' },
    { move: '21b', title: '21...f6?! e7 fili kendi piyonlarının arkasında', text: '21.Nf5 ile at e7 filine ve g7’ye baskı kurdu. Euwe 21...f6 ile e5 atını destekledi, ama bu hamle e7 filinin çaprazını kapattı, e6 karesini ve a2-g8 çaprazını zayıflattı. Motor 21...g5’i öneriyordu: f4 filini kovalar ve e5’in bağlanmasını kaldırır (22.Bd2 Rd8 sonrası +1.5). Maç hamlesinden sonra +2.2. 22...Be6 ise d5 karesine gelen fil değişimine kapı açtı (+3.0).' },
    { move: '24b', title: '24...Qa5? ikinci kez kenara', text: 'Wikipedia’ya göre bu hamle Alekhine’e uygun bir taş değişimi sağladı ve Euwe’yi kendi piyonlarının kısıtladığı pasif bir fille, f5’teki mükemmel ata karşı bıraktı. Illingworth hamleyi “çaresiz görünüyor” diye yorumlar, ama 24...Rd8 25.Bxe5 fxe5 26.Qe4 Rxd5 27.Qxd5+ Kf8 28.Nc4 sonrası da kazancın “yalnızca zaman meselesi” olduğunu ekler. Motor da aynı fikirde: 24...Rd8 +3.1, maç hamlesi +3.6.' },
    { move: '27w', title: '27.Bxe5! d7’nin savunucusu gidiyor', text: 'e5 atı Siyahın en iyi taşıydı ve d7 ile c4 karelerini tutuyordu. Fil onu alınca 27...fxe5 zorunludur (27...Qb4 28.Bd6 ya da 27...Qa5 28.Bf4 daha da kötü, +6’nın üzeri). 28.Rd7 ile kale yedinci yataya girer, b7 ve g7’ye saldırır. Motor: 27.Bxe5 +5.1, 27.h3 ya da 27.Rd1 +3.9.' },
    { move: '29w', title: '29.Nh6+! çaprazı açan şah', text: 'f5’teki at c2 vezirinin b1-h7 çaprazını kapatıyordu. At h6’ya şah çekerek gittiği anda çapraz açılır: 29...gxh6 30.Qxh7 mat (f7’yi d7 kalesi tutar). 29...Kh8 tek hamledir ve 30.Qxc5 ile vezir c5 piyonunu alıp f8 kalesine saldırır. Tehditler Qxf8 matı ve Nf7+. 30...Qxf2+ 31.Qxf2 gxh6 sonrası Beyaz bir kale fazlasıyla kalır (Motor: +7.3). Wikipedia’nın belirttiği gibi 30...Re8 de 31.Qd5’e (ya da 31.Nf7+’ya) çarpar: Qg8+ Rxg8 Nf7 boğmaca matı tehdidi vardır.' },
  ],
  lessons: [
    'Çek varyantında **5.a4** ...b5’i önler ve c4 piyonunu geri almanın ön koşuludur. Bedeli b4 karesinin zayıflamasıdır; Siyah buna ...Bb4 ya da ...Na6-b4 ile oynar.',
    'Merkezi açan bir kırılma (...e5) hatları herkese açar. İlk soru şudur: açılan hattı (burada d-hattını) kim önce ele geçirecek? Alekhine Rfd1 ve Nb5 ile ilk o oldu.',
    'Bağlama bir taktiğin değil bir **stratejinin** kaynağı olabilir: f4 filinin c7 vezirine karşı e5 atını bağlaması 19...Qxb4?’ü imkansız kıldı ve oyunun sonunda 27.Bxe5 kombinasyonunu doğurdu.',
    'Vezir kenara (a5) giderse rakip piyonlar tempo kazanarak ilerler. 17...Qa5 ve 19...Qc7 Siyahın iki tempo kaybetmesine, Beyazın b4-b5 ile yer kazanmasına yol açtı.',
    'Piyon itmek kare bırakır: ...c5 sonrası d5 karesine hiçbir Siyah piyonu saldıramaz, ...f6 sonrası e7 fili kendi piyonlarının arkasında hapsolur. Bir piyonu iterken geride bıraktığınız kareyi düşünün.',
    'Bir istila karesinin (d7) tek savunucusunu almak (Bxe5) çoğu zaman kalenin yedinci yataya girmesiyle sonuçlanır. Yedinci yataydaki kale ile f5’teki at birlikte şahı çevreler.',
    'At ile şah çekmek arkasındaki vezirin çaprazını açabilir (29.Nh6+ ve Qxh7 tehdidi). Böyle bir “açarak şah”, rakibe tek bir yasal cevap bırakır ve bir sonraki hamle bedava gelir.',
  ],
  qa: [
    { q: 'Siyah neden 8...e5 oynadı? Bu hamle bir hata mıydı?', a: 'Hayır. ...e5 Slav’ın açık hatlarında Siyahın merkezde eşitliği aramasının klasik yoludur ve motor da hamleden sonra yalnızca +0.6 gösteriyor. Siyah piyon değişimleriyle filinin ve atlarının önünü açtı, atını da e5’e getirdi. Bedeli açık d-hattı ve 10.Bf4 ile gelen bağlamaydı. Siyah bu iki ayrıntıyı ciddiye almayınca konum bozuldu.' },
    { q: 'Beyaz neden 8.e3 değil de 8.g3 oynadı?', a: '8.e3 sonrası Siyah 8...e5 ile rahat oynar ve f5 fili d3/e4 karelerinde güçlü kalır (Motor: 8.e3 yaklaşık −0.1). 8.g3 fili g2’ye, uzun çapraza yerleştirir: oradan c6, b7 ve d5’e bakar, d-hattı açılınca da merkezi destekler. Illingworth 8.f3’ü yavaş bulur, çünkü 8...e5 9.e4 exd4 10.Qxd4 Bc5 sonrası Siyah gelişimde önde olur. Motor da bu hattı eşit sayıyor.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'İki kaynaktan geldi. Birincisi **açık d-hattıydı**: 15.Rfd1 ve 16.Nb5 Rxd1+ 17.Rxd1 sonrası Siyahın bu hatta hiç kalesi kalmadı. İkincisi e5 atının **bağlanmasıydı**: f4 fili, at kıpırdadığında c7 vezirine saldıracak durumdaydı ve vezir çekildiğinde de at korumasız kalıyordu. 19...Qxb4? 20.Bxe5 ve oyunun sonundaki 27.Bxe5 bu ikinci unsurdan doğdu. Bunlara Siyahın kendi hataları eklendi: 17...Qa5, 21...f6 ve 24...Qa5.' },
    { q: 'Siyah 17. hamlede ne oynamalıydı?', a: 'Motor 17...Qc8’i öneriyor. Vezir e6 filini korumaya devam eder, f4-c7 bağlamasından çıkar ve merkeze yakın kalır. 18.Nd6 Bxd6 19.Rxd6 sonrası Beyaz yalnızca küçük bir avantajla kalır (+0.6). 17...Qa5 ise b4 piyonuna hedef oldu ve 18.Nd4 Bc8 19.b4 sonrası vezir c7’ye dönmek zorunda kaldı. Siyah iki tempo kaybetti, Beyaz da bedavaya b4-b5 oynadı.' },
    { q: '19...Bxb4 ile piyon neden alınamadı?', a: 'Alınabilirdi, ama sorun bitmezdi. 19...Bxb4 20.Nb3! sonrası vezirin a5’te kalacak güvenli karesi yoktur ve 20...Qc7 21.Qe4 gelir. Beyaz vezir e4’ten b7’ye ve h7’ye bakar, b4 fili de Rc1/Rb1 ile kovalanır (Motor: +1.6). Illingworth 21...Bd6 22.Qd4 g5 23.Bxg5 f6 24.Bf4 hattında Siyahın şahının çok zayıfladığını, 21...Bc3 22.Rc1 Bb2 23.Rb1 Bc3 24.Qe3 hattında ise Beyazın taş kazandığını gösterir.' },
    { q: 'Siyah neden 20...c5 oynadı? Piyonu c6’da tutamaz mıydı?', a: '20.b5 c6’ya saldırdı. 20...cxb5 axb5 sonrası Beyazın atı ve kalesi a7 ile b7’ye baskı kurar, 20...Bf6 ise 21.bxc6 bxc6 22.Nxc6 ile piyon kaybettirir (+2.2). 20...c5 piyonu korur ama d5 karesini kalıcı olarak teslim eder. Motor alternatif olarak 20...g5’i gösteriyor, ancak değerlendirmeler yakın (+1.3 ile +1.8 arası). Illingworth’ün dediği gibi bu noktadan sonra d5 karesi “çok hassas” hale geldi.' },
    { q: 'Beyaz neden 23.Nd5 değil 23.Bd5 oynadı?', a: 'Illingworth 23.Bd5’i daha iyi bulur, çünkü fil değişimi d5 ileri karakolunu Beyaz için güvenceye alır. 23.Nd5 Bxd5 24.Bxd5+ Kh8 sonrası Beyazın beyaz kareli fili güçlüdür ama atı gitmiştir (Motor: +2.0). 23.Bd5 sonrası ise hem at hem de kale oyunda kalır (+2.9). Atın f5’e ve h6’ya gidebilmesi kombinasyonun da temelidir.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En açık an 17. hamleydi: 17...Qc8 ile Beyazın avantajı küçük kalırdı (+0.6). İkinci şans 21. hamleydi: 21...g5 f4 filini kovalar ve e5 bağlamasını çözerdi (+1.5). 22. hamleden sonra konum zaten kötüydü (+2.2’den +3.0’a). 24...Rd8 bile Illingworth’e göre uzun ama kaybedilmiş bir oyun sonuna gidiyordu.' },
    { q: 'Euwe neden 30.Qxc5’ten sonra terk etti?', a: 'Beyaz iki tehdit kurmuştu: 31.Qxf8 mat ve 31.Nf7+. 30...Qxf2+ 31.Qxf2 gxh6 sonrası Beyaz bir kale fazlasıyla kalır (Motor: +7.3). 30...Re8 31.Qd5! (ya da 31.Nf7+) ile Qg8+ Rxg8 Nf7 boğmaca matı tehdit edilir. 30...Rg8?? ise 31.Nf7 mat. 30...Be7 31.Rxe7 de bir taş daha kaybettirir. Mat ya da ağır malzeme kaybı kaçınılmazdı.' },
  ],
  notes: {
    '1w': {
      text: 'Beyaz vezir piyonunu iki kare ilerletir; d4 piyonu e5 ve c5 karelerini kontrol eder ve c1 filine yol açar.',
      amac: 'Merkezde yer tutmak ve c4 ile Vezir Gambiti’ne geçmek. Alekhine maçta Beyazla çoğunlukla 1.d4 oynadı.',
      neden: 'd4 piyonu vezirle korunduğu için 1.e4’ten daha sağlam bir merkez verir. Euwe’nin Slav ve Vezir Gambiti Reddi repertuvarına karşı Alekhine bilinen yapılarda baskı kurmayı seçti.',
      diger: [
        { move: '1.e4', text: 'Alekhine’in sık kullandığı diğer büyük açılış. Euwe’ye karşı daha açık oyunlara yol açar (Motor: +0.3). 1.d4 ile aynı düzeyde.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıçtır ve çoğu zaman 2.c4 ile aynı yapılara döner (+0.2).' },
      ],
    },
    '1b': {
      text: 'Siyah d5 ile merkezde Beyazın piyonunun karşısına geçer ve e4 karesini kontrol eder.',
      amac: 'Klasik bir merkez kurmak, Beyazın e4’ü serbestçe oynamasını engellemek.',
      neden: '1...d5 en doğrudan cevaptır. Euwe ...d5 ile kurulan Slav ve Vezir Gambiti Reddi sistemlerini çok iyi tanıyordu.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına (Nimzo-Hint, Grünfeld) giden esnek hamle (Motor: +0.3). Euwe maçta Siyahla bunları da kullandı.' },
      ],
    },
    '2w': {
      text: 'Vezir Gambiti: c4 piyonu d5’e saldırır ve merkezin yan tarafından baskı kurar.',
      amac: 'Siyahı d5’i bırakmaya (...dxc4) ya da onu e6 veya c6 ile desteklemeye zorlamak.',
      neden: 'c4 “gerçek bir gambit” değildir: ...dxc4 olursa piyon genellikle e3 ve Bxc4 ile geri alınır. Beyaz merkezde piyon çoğunluğu elde etmeyi umar.',
      diger: [
        { move: '2.Nf3', text: 'Önce at gelişir. Motor da eşit sayıyor (+0.4) ve çoğu zaman aynı oyuna döner.' },
        { move: '2.Bf4', text: 'Londra sistemine benzer, daha sakin bir kurulum (bugün popüler, 1935’te değildi).' },
      ],
    },
    '2b': {
      text: 'Slav Savunması: d5 c6 piyonuyla desteklenir.',
      amac: 'd5’i piyonla tutup c8 filini kapatmamak. Fil sonra f5 ya da g4’e çıkabilir.',
      neden: '2...e6 (Vezir Gambiti Reddi) d5’i destekler ama c8 filinin önünü kapatır. 2...c6 bu sorunu çözer. Bedeli c6 karesinin b8 atına kapanmasıdır, ama at d7’den gelişir. Motor Slav’ı en sağlam cevap sayıyor (+0.2).',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi. Sağlam ama c8 fili pasif kalır (Motor: +0.3).' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü. Siyah merkezi hemen bırakır, sonra ...c5 ile karşı oyun arar (+0.3).' },
      ],
    },
    '3w': {
      text: 'Kral atı gelişir, e5 karesini kontrol eder ve ileride Ne5 sıçramasına hazırlanır.',
      amac: 'Gelişimi tamamlamak ve ...dxc4 sonrası e5-c4 manevrasının yolunu açmak.',
      neden: '3.Nc3 hemen 3...dxc4 4.e4 ya da 3...e5 gibi keskin hatlara izin verir. 3.Nf3 daha sakindir ve Çek varyantındaki 6.Ne5 fikrinin ön koşuludur.',
      diger: [
        { move: '3.Nc3', text: 'Motorun ilk tercihi (+0.4). Siyaha 3...e5 (Winawer karşı gambiti) gibi seçenekler bırakır.' },
        { move: '3.cxd5', text: 'Değişim Slav’ı. Simetrik ve sakin bir yapı verir (+0.35).' },
      ],
    },
    '3b': {
      text: 'Siyahın kral atı gelişir ve d5 ile e4’ü kontrol eder.',
      amac: 'Gelişimi sürdürmek ve ...dxc4 ile ...Bf5 planlarına hazırlanmak.',
      neden: '3...Nf6 en esnek hamledir. 3...e6 Yarı-Slav’a, 3...dxc4 ise hemen gambit piyonunu tutmaya döner. Euwe Çek varyantına giden yolu seçti.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav yapısına geçer, c8 fili yine kapanır (Motor: +0.5).' },
        { move: '3...dxc4', text: 'Piyonu hemen alır. 4.e3 b5 5.a4 e6 gibi keskin hatlar doğar.' },
      ],
    },
    '4w': {
      text: 'Vezir atı gelişir ve d5’e baskıyı artırır.',
      amac: 'd5’e iki taşla baskı kurmak, e4 ilerleyişini desteklemek.',
      neden: '4.Nc3 Siyahı karar vermeye zorlar: d5 artık zor korunuyor ve ...dxc4 ana seçenek haline geliyor. 4.e3 ise daha sakin bir yoldur ve f5 filine yol açar.',
      diger: [
        { move: '4.e3', text: 'Sağlam ama c1 filini kapatır. 4...Bf5 ile Siyah rahat gelişir (Motor: +0.3).' },
        { move: '4.cxd5', text: '4...cxd5 ile simetrik yapı. Siyah için en az riskli yol.' },
      ],
    },
    '4b': {
      text: '4...dxc4: Çek varyantı. Siyah c4 piyonunu alır.',
      amac: 'Beyazın piyonu geri alması için zaman harcamasını sağlamak ve bu sırada ...Bf5 ile filini dışarı çıkarmak.',
      neden: 'Euwe 4...dxc4 sistemlerinin erken teorisinde öncü bir isimdir. 4...e6 (Yarı-Slav) daha kapalı oyunlar verir. 4...dxc4 sonrası Beyaz piyonu geri almak için a4 gibi bir hamle harcamak zorunda kalır. Motor bu hamleyi en iyi buluyor (+0.25).',
      diger: [
        { move: '4...e6', text: 'Yarı-Slav. 5.Bg5 ya da 5.e3 ile zengin ana hatlar (Motor: +0.35).' },
        { move: '4...a6', text: 'Çebanenko sistemi: ...b5’i hazırlar. 1935’te henüz bilinmeyen modern bir fikirdir (+0.4).' },
      ],
    },
    '5w': {
      text: '5.a4: Beyaz ...b5’i önler ve c4 piyonunu geri almaya hazırlanır.',
      amac: 'Siyahın piyonu ...b5 ile tutmasını engellemek ve e3-Bxc4 ya da Ne5xc4 ile piyonu geri almak.',
      neden: '5.e4? b5! ile Siyah piyonu tutar ve vezir kanadında çoğunluk kazanır (Motor: yaklaşık 0.0). a4 bunun önünü keser. Karşılığında b4 karesi zayıflar; Siyah bunu ...Bb4 ya da ...Na6-b4 ile kullanabilir.',
      diger: [
        { move: '5.e4', text: '5...b5 6.Be2 e6 ile Siyah piyonu tutar. Keskin bir gambit (Motor: 0.0).' },
        { move: '5.e3', text: '5...b5 ile Siyah piyonu korur. Bu da a4’ü gerektirir, yani hamle sırası değişir.' },
        { move: '5.g3', text: 'Katalan tarzı bir kurulum. Piyonu daha sonra geri alır (+0.2).' },
      ],
    },
    '5b': {
      text: 'Fil f5’e çıkar ve piyon zincirinin dışında kalır.',
      amac: 'c8 filini e6 piyonundan önce dışarı çıkarmak. Fil b1-h7 çaprazını tutar ve e4 ilerleyişini zorlaştırır.',
      neden: 'Slav’ın ana fikri budur: önce fil dışarı, sonra ...e6. 5...Bg4 ise Ne5 ile kovalanabilir. 5...Na6 (Smislov’un fikri) b4 karesini hedef alır. Motor 5...Bf5’i en iyi buluyor (+0.3).',
      diger: [
        { move: '5...Bg4', text: 'Fil g4’e çıkar. 6.Ne5 Bh5 7.f3 ile Beyaz tempo kazanır ve e4’e hazırlanır.' },
        { move: '5...e6', text: 'Fil kapanır, ama 6.e4 Bb4 ile keskin bir oyun olur (Motor: +0.5).' },
        { move: '5...Na6', text: 'At b4’e gitmeyi hedefler. a4’ün bıraktığı zayıflığı kullanır.' },
      ],
    },
    '6w': {
      text: '6.Ne5 (Krause saldırısı): at merkeze sıçrar, c4 piyonuna yaklaşır ve f7’ye bakar.',
      amac: 'Piyonu Nxc4 ile geri almak ve f3-e4 ile güçlü bir merkez kurmak. Illingworth hamleyi Alekhine’in bu maçta çok oynaması nedeniyle “Alekhine saldırısı” olarak anar ve f3 ile e4 üzerinden merkezi kontrol etme fikrini vurgular.',
      neden: '6.e3 (Hollanda varyantı) daha sakin ve bugün daha popüler olan ana hattır: Bxc4 ve O-O ile gelişir, ama f5 fili rahat kalır. 6.Ne5 ise e3 oynamadan, yani c1 filini kapatmadan piyonu geri alır. Motor iki hamleyi eşit görüyor (+0.25).',
      diger: [
        { move: '6.e3', text: 'Hollanda varyantı: 6...e6 7.Bxc4 Bb4 8.O-O ile ana teori (Motor: +0.25).' },
        { move: '6.Nh4', text: 'f5 filine saldırır, ama at kenarda kalır (+0.1).' },
      ],
    },
    '6b': {
      text: 'At d7’ye gelir, e5 atına meydan okur ve ...e5 kırılmasını hazırlar.',
      amac: 'Beyazın e5 atını değiştirmek ya da kovalamak, sonra ...Qc7 ve ...e5 ile merkezi açmak.',
      neden: 'Motor 6...e6’yı biraz daha iyi buluyor (+0.3; 7.g3 Bb4 8.Bg2 Nd5 gibi). 6...Nbd7 daha aktif bir yoldur ve hızla ...e5’e gider. Kaynakların belirttiğine göre iki oyuncu da 1935 maçında 6...Nbd7 7.Nxc4 Qc7 hattını en iyi devam olarak benimsedi. Euwe 1937 rövanşında 6...e6’ya geçti.',
      diger: [
        { move: '6...e6', text: 'Ana alternatif. 7.f3 Bb4 8.e4 ile keskin, karmaşık bir oyun olur (Motor: +0.3).' },
        { move: '6...Qc7', text: 'Aynı fikir, farklı hamle sırası. Genellikle 7.g3 Nbd7 8.Nxc4 e5 ile buraya döner (+0.4).' },
      ],
    },
    '7w': {
      text: 'At c4 piyonunu alır; malzeme eşitlenir.',
      amac: 'Gambit piyonunu geri almak ve atı c4’te tutmak. Oradan e5, d6 ve b6 karelerine baskı yapar.',
      neden: '7.Nxd7? Qxd7 sonrası c4 piyonu Siyahta kalır ve Siyah gelişimde öndedir (Motor: −0.75). 7.Nxc4 tek mantıklı devamdır (+0.6).',
      diger: [
        { move: '7.Nxd7', text: '7...Qxd7 8.e3 O-O-O ile Siyah piyonu korur ve ...e5 ile merkezi açar (Motor: −0.75).' },
        { move: '7.Qd2', text: 'Piyonu geri almayı erteler. 7...Nxe5 8.dxe5 sonrası Siyah rahattır (−0.5).' },
      ],
    },
    '7b': {
      text: 'Vezir c7’ye gelir ve e5 karesini destekler.',
      amac: '...e5 kırılmasını hazırlamak. Vezir aynı zamanda b1-h7 çaprazında f5 filiyle uyumlu durur.',
      neden: 'Motor 7...Nd5’i hafifçe tercih ediyor (+0.5): at c3’e saldırır ve 8.e3 Nxc3 9.bxc3 e5 ile benzer bir merkez kırılması gelir. 7...Qc7 ise ...e5’i doğrudan hazırlar. Kusuru vezirin c7’de, f4 filinin çaprazında olmasıdır. Bu ayrıntı oyunun geri kalanında belirleyici oldu.',
      diger: [
        { move: '7...Nd5', text: 'Motorun ilk tercihi (+0.5): 8.e3 Nxc3 9.bxc3 e5, Beyazın piyon yapısını bozar.' },
        { move: '7...e6', text: 'Sakin bir hamle. 8.f3 Bb4 9.e4 ile Beyaz merkezi kurar (+0.7).' },
      ],
    },
    '8w': {
      text: '8.g3: Beyaz fili g2’ye, uzun çapraza getirmeye hazırlanır.',
      amac: 'Fili g2’ye koyup c6, b7 ve d5’e baskı kurmak; ardından kısa rok yapmak.',
      neden: 'Illingworth 8.f3’ü “çok yavaş” bulur: 8...e5 9.e4 exd4 10.Qxd4 Bc5 11.Qd2 Be6 sonrası Siyahın gelişim üstünlüğü tehlikeli olur (Motor: yaklaşık eşit). 8.e3 ise 8...e5 9.Bd3 Bxd3 ile Siyaha rahat bir değişim verir (−0.1). 8.g3 en iyisidir (+0.5).',
      diger: [
        { move: '8.f3', text: '8...e5 9.e4 exd4 10.Qxd4 Bc5 sonrası Siyah gelişimde öndedir (Motor: −0.1 / −0.25).' },
        { move: '8.e3', text: '8...e5 9.Bd3 Bxd3 10.Qxd3 ile Siyah rahat eşitler (−0.1).' },
        { move: '8.Qd2', text: 'Tuhaf bir kurulum. 8...Be6 ile Siyah rahat oynar (0.0).' },
      ],
    },
    '8b': {
      text: '8...e5: Siyah merkezi açar.',
      amac: 'd4 piyonunu değiştirip taşlarının önünü açmak. e5’e gelecek atla merkezde güçlü bir konum almak.',
      neden: 'Slav’da ...e5, Siyahın sıkışık olmadan serbestleşmesinin klasik yoludur. Beyaz henüz rok yapmamıştır ve fil g2’ye gelmemiştir, yani zamanlama uygundur. Motor hamle sırası için 8...Rd8’i hafifçe öneriyor (+0.6), ama özünde aynı fikir. Bedeli açık d-hattıdır.',
      diger: [
        { move: '8...Rd8', text: 'Önce kale d-hattına. 9.Bf4 e5 10.dxe5 Nxe5 ile benzer yapı, ama kale zaten d8’de (Motor: +0.6).' },
        { move: '8...O-O-O', text: 'Uzun rok ve ...e5. Keskin, ama şah c-hattında açık kalır (+0.8).' },
      ],
    },
    '9w': {
      text: 'Beyaz e5 piyonunu alır.',
      amac: 'Merkezi açmak ve Siyahın atını e5’te geri almaya zorlamak. Ardından Bf4 ile bu atı bağlamak.',
      neden: '9.Bg2? exd4 ya da 9.e4? Nxe4 sonrası Siyah serbestleşir (Motor: −0.1 / −0.2). 9.dxe5 d-hattını açar; Beyazın kaleleri bu hatta Siyahınkilerden önce gelecek.',
      diger: [
        { move: '9.Bg2', text: '9...Rd8 10.O-O Be6 sonrası Siyah merkezi elinde tutar (Motor: −0.1).' },
        { move: '9.e4', text: '9...Nxe4 10.Bg2 Nxc3 ile Siyah piyon kazanır (−0.2).' },
      ],
    },
    '9b': {
      text: 'At e5’e gelir ve c4 atına saldırır.',
      amac: 'Merkezde en iyi kareye yerleşmek: at d3, c4, f3 ve d7 karelerini kontrol eder.',
      neden: '9...Ng4? 10.Nd6+! Bxd6 11.exd6 sonrası Beyazın d6 piyonu ve fil çifti güçlüdür (Motor: +1.0). 9...Nd5 de 10.Nd6+ ile benzer sorunlar yaratır (+1.2). Atla almak tek sağlıklı yoldur (+0.6).',
      diger: [
        { move: '9...Ng4', text: '10.Nd6+! Bxd6 11.exd6 Qb6 sonrası Beyazın d6 piyonu ve fil çifti avantaj verir (Motor: +1.0).' },
        { move: '9...Nd5', text: '10.Nd6+ Bxd6 11.exd6 Qxd6 sonrası Beyaz gelişimde ve merkezde öndedir (+1.2).' },
      ],
    },
    '10w': {
      text: '10.Bf4: fil e5 atını c7 vezirine karşı bağlar.',
      amac: 'e5 atını oynayamaz hale getirmek ve Siyahı bu atı ikinci kez desteklemeye zorlamak. Bir kaynakta bu oyun “e5 atına yapılan bağlamanın çevresinde oynanmış” bir zafer olarak özetlenir.',
      neden: '10.Nxe5? Qxe5 sonrası Siyahın veziri merkezde güçlüdür ve bağlama yoktur (Motor: −0.2). 10.Bf4 gelişir ve tempo kazanır. Bu bağlama oyun boyunca Siyahın vezir hareketlerini kısıtladı.',
      diger: [
        { move: '10.Nxe5', text: '10...Qxe5 11.Qb3 O-O-O sonrası Siyah aktiftir (Motor: −0.2).' },
        { move: '10.Qd4', text: '10...Nxc4 11.Qxc4 Be6 ile Siyah tempo kazanır (−0.6).' },
      ],
    },
    '10b': {
      text: 'İkinci at d7’ye gelir ve e5’i ikinci kez destekler.',
      amac: 'Bağlamayı hafifletmek: c7 vezir çekilse bile e5 atı korunur kalsın.',
      neden: '10...Rd8 11.Qc1 Bd6 de mümkündür (Motor: +0.75), ama 10...Nfd7 bağlamaya en doğrudan cevaptır (+0.7). 10...Nfg4 11.Bh3 sonrası g4 atı rahatsız edilir (+0.8).',
      diger: [
        { move: '10...Rd8', text: '11.Qc1 Bd6 12.Nxd6+ Qxd6 ile kale önce d-hattına gelir (Motor: +0.75).' },
        { move: '10...Nfg4', text: '11.Bh3 Qd7 12.Bxg4 Nxg4 sonrası Beyaz fil çiftini verir ama Siyah gelişimde geride kalır (+0.8).' },
      ],
    },
    '11w': {
      text: 'Fil g2’ye, uzun çapraza gelir.',
      amac: 'c6 ve b7’ye baskı kurmak, d5 karesini kontrol etmek ve rok yapmaya hazırlanmak.',
      neden: '11.Nxe5 Nxe5 bağlamayı kendiliğinden bitirir ve Siyaha kolay bir oyun verir (Motor: +0.25). Beyaz önce gelişimini tamamlar. 11.Bg2 en iyi hamledir (+0.6).',
      diger: [
        { move: '11.Nxe5', text: '11...Nxe5 12.Bg2 Rd8 sonrası Siyah rahat eşitler (Motor: +0.25).' },
        { move: '11.a5', text: 'Vezir kanadında yer kazanır ama gelişimi geciktirir (+0.2).' },
      ],
    },
    '11b': {
      text: 'Fil e6’ya döner ve c4 atına saldırır.',
      amac: 'c4 atını değişime zorlamak ve e5 atına yönelik baskıyı azaltmak.',
      neden: 'Illingworth hamleyi “sağlam ama pasif” bulur ve modern ana hattın 11...g5 olduğunu, bu hamleye Morozevich’in öncülük ettiğini belirtir: 12.Ne3 gxf4 13.Nxf5 O-O-O 14.Qc2 Nc5 15.O-O Ne6 sonrası Siyahın siyah kare kontrolü yapısal zayıflıklarını telafi eder (Motor: +0.6). Motor 11...g5’i biraz daha iyi buluyor (+0.55), maç hamlesi +0.7.',
      diger: [
        { move: '11...g5', text: 'Morozevich’in fikri: 12.Ne3 gxf4 13.Nxf5 O-O-O 14.Qc2 Nc5 15.O-O Ne6. Siyah f4 filini alır ve dinamik bir oyun kurar (Motor: +0.55 / +0.6).' },
        { move: '11...f6', text: 'e5’i bir piyonla destekler. 12.O-O Be6 13.Nxe5 Nxe5 ile benzer bir oyun (+0.7).' },
      ],
    },
    '12w': {
      text: 'Atlar e5’te değişir.',
      amac: 'c4 atını e6 filine kaptırmadan e5 atını değişmek ve Siyahı yeniden atla almaya zorlamak.',
      neden: 'At c4’te saldırı altındaydı. 12.Nd2 a5 ya da 12.Qd4 Bxc4 sonrası Beyazın avantajı kaybolur (Motor: +0.2 / +0.1). 12.Nxe5 en iyisidir (+0.7). Değişim sonrası Siyahın kalan atı e5’te yine bağlanmış durumdadır.',
      diger: [
        { move: '12.Nd2', text: 'At geri çekilir. 12...a5 13.O-O h6 sonrası Siyah rahattır (Motor: +0.2).' },
        { move: '12.Qd4', text: '12...Bxc4 13.Qxc4 Nxc4 14.Bxc7 sonrası avantaj kalmaz (+0.1).' },
      ],
    },
    '12b': {
      text: 'At geri alır ve e5’te yeniden merkezi tutar.',
      amac: 'Malzemeyi eşitlemek ve atı merkezde tutmak.',
      neden: 'Zorunlu bir geri alıştır. 12...Qa5? ya da 12...Bd6? Beyazı bir at fazlasıyla bırakırdı (Motor: +5.0), 12...Bb4? ise 13.Nxf7! ile felakete gider (+5.7).',
      diger: [
        { move: '12...Bb4', text: '13.Nxf7! Qxf4 14.gxf4 Bxc3+ sonrası Beyaz taşla öndedir (Motor: +5.7).' },
      ],
    },
    '13w': {
      text: 'Beyaz kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini d-hattına getirmeye hazırlamak.',
      neden: 'Rok, gelişimin son adımıdır. 13.Qc2 aynı düzeydedir (+0.8), ama rok önce yapılırsa Beyazın şahı f-hattındaki olası şahlardan korunur. Motor: 13.O-O +0.85.',
      diger: [
        { move: '13.Qc2', text: '13...Rd8 14.O-O Be7 ile oyunda olan konuma gidebilir (Motor: +0.8).' },
        { move: '13.a5', text: 'Vezir kanadında yer kazanır ama rok gecikir (+0.5).' },
      ],
    },
    '13b': {
      text: 'Fil e7’ye gelişir ve kısa roku hazırlar.',
      amac: 'Gelişimi tamamlamak ve şahı güvenli bir yere götürmek.',
      neden: 'Illingworth 13...Qa5 14.Qc2 f6’yı daha sağlam bulur, ama Beyazı yine hafifçe üstün görür. Motor da yakın değerlendiriyor (13...Qa5 14.Qc2 f6 15.Rfd1 sonrası +0.6). 13...Be7 de iyidir (+0.7); burada vezir hâlâ bağlama çizgisinde kalıyor.',
      diger: [
        { move: '13...Qa5', text: 'Vezir bağlamadan çıkar. 14.Qc2 f6 15.Rfd1 Be7 ile sağlam (Motor: +0.6).' },
        { move: '13...f6', text: 'e5’i piyonla destekler. 14.Qc2 Qa5 15.Rfd1 ile benzer (+0.8).' },
      ],
    },
    '14w': {
      text: 'Vezir c2’ye gelir; c-hattını ve b1-h7 çaprazını kullanır.',
      amac: 'a1 ile f1 kalelerini bağlamak, d-hattına kale getirmeye hazırlanmak ve vezirle e4 ile h7’yi gözetmek.',
      neden: 'Motor 14.Qc1’i aynı düzeyde görüyor (+0.8). Qc2 ise b1-h7 çaprazında durur ve oyunun sonundaki Nh6+ kombinasyonunun vezirini şimdiden yerleştirir. 14.Ne4 f6 sonrası Siyah rahattır (+0.55).',
      diger: [
        { move: '14.Qc1', text: 'Vezir c1’den f4 filini destekler. 14...a6 15.b4 ile benzer bir oyun (Motor: +0.8).' },
        { move: '14.Ne4', text: '14...f6 15.Qc2 O-O ile Siyah sağlam durur (+0.55).' },
      ],
    },
    '14b': {
      text: 'Kale d8’e, açık hatta gelir.',
      amac: 'Beyazın d-hattına hâkim olmasını önlemek ve gerekirse kaleleri değiştirmek.',
      neden: 'Illingworth 14...f6’nın 15.Nd5 Qd6 16.Nxe7 Qxe7 17.Rfd1 O-O 18.Be4 ile Beyaza fil çifti avantajı verdiğini gösterir (Motor: +0.9). 14...O-O ise 15.Nb5 Qc8 16.Bxe5 cxb5 ile karmaşıklaşır (+1.0). 14...Rd8 en iyisidir (+0.85).',
      diger: [
        { move: '14...f6', text: '15.Nd5 Qd6 16.Nxe7 Qxe7 17.Rfd1 O-O 18.Be4 sonrası Beyaz fil çiftini alır (Motor: +0.9).' },
        { move: '14...O-O', text: '15.Nb5 Qc8 16.Bxe5 cxb5 sonrası Beyaz daha aktiftir (+1.0).' },
      ],
    },
    '15w': {
      text: 'Beyaz f1 kalesini d-hattına getirir.',
      amac: 'd-hattında Siyahın kalesine karşı durmak ve hattı ele geçirmek.',
      neden: '15.Nb5 hemen oynanabilirdi (+0.8), ama önce Rfd1 ile d8 kalesine karşı durmak, Nb5’in daha sonra kale değişimini zorlamasını sağlar. Motor: 15.Rfd1 +0.75.',
      diger: [
        { move: '15.Nb5', text: 'Hemen vezire saldırır. 15...Qb8 16.Qc3 Bf6 17.Nd4 ile benzer bir baskı (Motor: +0.8).' },
        { move: '15.b4', text: 'Vezir kanadında yer kazanır. 15...O-O 16.Ne4 f6 17.b5 (+0.7).' },
      ],
    },
    '15b': {
      text: 'Siyah kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini oyuna sokmak.',
      neden: 'Şah merkezde kalamazdı. 15...a6? 16.Rxd8+ Bxd8 17.Ne4 sonrası Siyah gelişimde geride kalır (Motor: +1.0). 15...O-O en iyisidir (+0.5).',
      diger: [
        { move: '15...Rxd1+', text: '16.Rxd1 Qa5 17.Nd5 ile Beyaz d-hattını alır (Motor: +0.55).' },
        { move: '15...a6', text: 'b5 karesini korur, ama şah merkezde kalır (+1.0).' },
      ],
    },
    '16w': {
      text: '16.Nb5!: at c7 vezirine ve a7’ye saldırır, d6 karesine de bakar.',
      amac: 'Siyahı d8 kalesiyle ilgili bir karar vermeye zorlamak. Kaleler değişirse d-hattı Beyazda kalır.',
      neden: 'Siyah 16...cxb5?? oynayamaz: c-hattı açılır ve 17.Qxc7 ile vezir gider. Yani vezir c7’de kaldığı sürece at b5’te dokunulmazdır. Motor: 16.Nb5 +0.7. 16.Nd5 Bxd5 sonrası Beyazın baskısı azalır (+0.45).',
      diger: [
        { move: '16.Nd5', text: '16...Bxd5 17.Rxd5 Rxd5 18.Bxd5 ile sakin bir eşitlik (Motor: +0.45).' },
        { move: '16.Be4', text: 'h7’ye bakar. 16...g6 17.Nb5 Rxd1+ ile benzer bir oyun (+0.5).' },
      ],
    },
    '16b': {
      text: 'Kaleler d1’de değişir.',
      amac: 'd-hattındaki baskıyı azaltmak ve d8 kalesini kaybetmemek.',
      neden: 'Illingworth 16...Qb6’yı 17.Bxe5 cxb5 ile Beyazın güzel bir inisiyatif aldığı bir hat olarak gösterir. Motor bu hattı 18.Rxd8 Rxd8 ile yaklaşık +0.5 görüyor. 16...Rxd1+ de yakın (+0.55). Asıl hata bir hamle sonra geldi.',
      diger: [
        { move: '16...Qb6', text: '17.Rxd8 Rxd8 18.Bxe5 cxb5 19.a5 Qc5 sonrası Beyaz biraz daha aktiftir (Motor: +0.5).' },
        { move: '16...Qb8', text: '17.Nd4 Bc8 18.a5 ile Beyaz yer kazanır (+0.6).' },
      ],
    },
    '17w': {
      text: 'Kale geri alır ve d-hattı Beyazda kalır.',
      amac: 'Açık hattın tek sahibi olmak.',
      neden: 'Tek doğru hamledir: 17.Qxd1?? cxb5 sonrası vezir artık c7’ye saldırmıyor ve at kaybedilir (Motor: −3.7). 17.Bf1?? Rxf1+ ise daha da kötüdür (−5.1). Kaleyle almak vezirin c2’de, c7 vezirinin karşısında kalmasını sağlar: ...cxb5 artık Qxc7 ile cevaplanır.',
      diger: [
        { move: '17.Qxd1', text: '17...cxb5 18.axb5 g5 sonrası Beyaz bir at eksiktir (Motor: −3.7).' },
      ],
    },
    '17b': {
      text: '17...Qa5?: vezir bağlamadan çıkar ama kenara gider.',
      amac: 'b5 atına saldırmak ve f4-c7 bağlamasından kurtulmak.',
      neden: 'Wikipedia’nın maç sayfası 17...Qa5’i oyunun ana hatası olarak gösterir: 18.Nd4 Bc8 19.b4! ile Beyaz aktif oyun kazandı. Motor bu derinlikte 17...Qc8 ile 17...Qa5’i eşit görüyor (+0.8), ama devamında fark açılıyor: Qa5 sonrası 18.Nd4 Beyazı +1.5’e taşıyor, 17...Qc8 18.Nd6 Bxd6 19.Rxd6 sonrası ise +0.6 kalıyor. a5’te vezir b4 piyonuna hedef olur ve e5 atıyla bağlantısını kaybeder.',
      diger: [
        { move: '17...Qc8', text: 'Vezir e6 filini korur ve merkeze yakın kalır: 18.Nd6 Bxd6 19.Rxd6 Nc4 20.Rd4 Nb6 (Motor: +0.6).' },
        { move: '17...Qb6', text: '18.Nd4 Ng4 19.h3 ile Beyaz tempo kazanır (+1.3).' },
      ],
    },
    '18w': {
      text: '18.Nd4!: at merkeze döner ve e6 filine saldırır.',
      amac: 'e6 filini çekilmeye zorlamak ve b2 piyonunun yolunu açıp b4 ile a5 vezirine tempo kazanmak.',
      neden: 'Illingworth 18.Bxe5’in daha az umut verici olduğunu yazar: 18...cxb5 19.Bxb7 bxa4 20.Qe4 a3 21.bxa3 Qxa3 sonrası Beyaz a-piyonunu alsa bile yeterli bir şey bulamaz (Motor: +0.2). Nd4 ise +1.5. Bu, açık ara en iyi hamledir. 18.Bd2 sakin kalır (+0.15).',
      diger: [
        { move: '18.Bxe5', text: '18...cxb5 19.Bxb7 bxa4 20.Qe4 a3 21.bxa3 Qxa3 sonrası avantaj kalmaz (Motor: +0.2).' },
        { move: '18.Bd2', text: 'Vezire saldırır. 18...Bb4 19.Nd4 Bc8 20.Be3 (+0.15).' },
      ],
    },
    '18b': {
      text: 'Fil c8’e çekilir.',
      amac: 'Fili değişimden korumak ve e6’da zayıf bir piyon oluşmasını önlemek.',
      neden: '18...Bg4 19.h3 Bc8 20.b4 sonrası Siyah bir tempo daha kaybeder (Motor: +2.0). 18...g5 19.Bd2 Qc5 20.Bc3 ile şah kanadı zayıflar (+2.3). Fil değişimine izin vermek (Nxe6 fxe6) e6’da kalıcı bir zayıflık yaratırdı. 18...Bc8 en iyisidir (+1.2).',
      diger: [
        { move: '18...Bg4', text: '19.h3 Bc8 20.b4 ile Beyaz tempo kazanır (Motor: +2.0).' },
        { move: '18...g5', text: '19.Bd2 Qc5 20.Bc3 Ng6 sonrası şah kanadı açılır (+2.3).' },
      ],
    },
    '19w': {
      text: '19.b4!: piyon a5 vezirine saldırır.',
      amac: 'Veziri tempo kazanarak geri göndermek, vezir kanadında yer kazanmak ve b5 ile c6’ya saldırmaya hazırlanmak.',
      neden: 'Illingworth: “çok güçlü, çünkü Siyah b4’ü alamaz.” 19...Qxb4? 20.Bxe5 ile e5 atı korumasız düşer (Motor: +3.5). 19...Bxb4 20.Nb3 Qc7 21.Qe4 sonrası b4 fili kapana girer. Alternatif 19.Nb3 yalnızca +0.8 verir.',
      diger: [
        { move: '19.Nb3', text: '19...Qc7 20.Qc3 f6 ile Siyah toparlanır (Motor: +0.8).' },
        { move: '19.Be4', text: 'h7’ye bakar. 19...g6 20.Nb3 (+0.4).' },
      ],
    },
    '19b': {
      text: 'Vezir c7’ye geri döner.',
      amac: 'e5 atını korumak ve vezire güvenli bir kare bulmak.',
      neden: '19...Qxb4? 20.Bxe5 bir at kaybettirir (Motor: +3.5). 19...Bxb4 20.Nb3 Qc7 21.Qe4 Bc3 22.Rc1 Bb2 23.Rb1 sonrası Beyaz baskıyı sürdürür (+1.6). Euwe’nin hamlesi de aynı düzeyde (+1.5), ama vezir iki hamle önceki karesine döndü: iki tempo kaybedildi.',
      diger: [
        { move: '19...Bxb4', text: '20.Nb3 Qc7 21.Qe4 Bc3 22.Rc1 Bb2 23.Rb1 sonrası fil kovalanır ve Beyaz baskıyı sürdürür (Motor: +1.6).' },
        { move: '19...Qxb4', text: '20.Bxe5 Rd8 21.e3 sonrası Beyaz bir at fazlasıyla kalır (+3.5).' },
      ],
    },
    '20w': {
      text: '20.b5: piyon c6’ya saldırır.',
      amac: 'c6 piyonunu ...c5’e zorlamak ve d5 karesini kalıcı bir ileri karakol haline getirmek.',
      neden: '20.Nb5 Qb6 21.Be3 Qa6 22.Nxa7 bir piyon kazanır ama atı kenara götürür (Motor: +1.3). 20.b5 yapısal bir kazanç sağlar (+1.6). ...c5 sonrası d5’e hiçbir Siyah piyonu saldıramaz.',
      diger: [
        { move: '20.Nb5', text: '20...Qb6 21.Be3 Qa6 22.Nxa7 ile piyon kazanılır ama at kenarda kalır (Motor: +1.3).' },
        { move: '20.Be4', text: '20...Bxb4 21.Bxh7+ Kh8 22.Bf5 ile karşılıklı keskin bir oyun (+1.2).' },
      ],
    },
    '20b': {
      text: '20...c5: piyon ilerler ve atı kovalar.',
      amac: 'd4 atını merkezden uzaklaştırmak ve c6 piyonunu kaybetmemek.',
      neden: '20...Bf6? 21.bxc6 bxc6 22.Nxc6 bir piyon kaybettirir (Motor: +2.2). 20...cxb5 axb5 ise a7 ve b7’yi açıkta bırakır. Motor 20...g5’i alternatif olarak gösteriyor, ama değerlendirmeler yakın (+1.3 ile +1.8 arası). Illingworth bu noktada d5 karesinin “çok hassas” olduğunu ve Siyahın Beyazın inisiyatifine dayanamadığını yazar.',
      diger: [
        { move: '20...g5', text: 'f4 filini kovalar. 21.Bxe5 Qxe5 22.bxc6 bxc6 23.Nxc6 ile Beyaz piyon kazanır (Motor: +1.3 / +1.85).' },
        { move: '20...Bf6', text: '21.bxc6 bxc6 22.Nxc6 Bb7 sonrası Beyaz piyon fazlasıyla kalır (+2.2).' },
      ],
    },
    '21w': {
      text: '21.Nf5!: at f5’e sıçrar; e7 filine, g7’ye ve d6 karesine bakar.',
      amac: 'Atı şah kanadına yerleştirmek ve c2 veziriyle birlikte b1-h7 çaprazında baskı kurmak.',
      neden: 'At d4’te ...cxd4 tehdidi altındaydı. 21.Nf3 Nxf3+ değişimi Beyazın en iyi taşını oyundan çıkarır (Motor: +1.1). 21.Qe4 Bf6 22.Nf5 de iyidir (+1.2), ama Nf5 en güçlüsüdür (+1.7).',
      diger: [
        { move: '21.Nf3', text: '21...Nxf3+ 22.Bxf3 Qb6 ile taşlar değişir ve Siyah rahatlar (Motor: +1.1).' },
        { move: '21.Qe4', text: '21...Bf6 22.Nf5 Be6 23.g4 ile şah kanadına baskı (+1.2).' },
      ],
    },
    '21b': {
      text: '21...f6?!: piyon e5 atını destekler.',
      amac: 'e5 atını bağlamadan kurtarmak: vezir c7’den çekilse bile at korunur kalır.',
      neden: 'Hamle e7 filinin önünü kapatır, e6 karesini ve a2-g8 çaprazını zayıflatır. Motor 21...g5’i öneriyor: f4 filini kovalar ve bağlamayı hemen bitirir (22.Bd2 Rd8 23.Nxe7+ Qxe7 sonrası +1.5). Maç hamlesinden sonra +2.2.',
      diger: [
        { move: '21...g5', text: '22.Bd2 Rd8 23.Nxe7+ Qxe7 24.Bc3 Ng6 sonrası Siyahın şahı biraz açılır ama taşları aktiftir (Motor: +1.5).' },
        { move: '21...Bf6', text: '22.Ne3 b6 23.Nd5 Qd6 ile fil aktif kalır (+1.75).' },
      ],
    },
    '22w': {
      text: 'At e3’e döner ve d5 karesine yönelir.',
      amac: 'Atı d5 ileri karakoluna ya da gerektiğinde yeniden f5’e getirmek.',
      neden: 'f6 sonrası f5 atı e7’de bir şey kazanamaz; d5 karesi ise artık kalıcı olarak Beyazın. 22.h4 de aynı değerdedir (+2.1). Beyaz Ne3 ile esnekliğini korur.',
      diger: [
        { move: '22.h4', text: '22...Kh8 23.Ne3 Rd8 24.Rxd8+ ile benzer bir baskı (Motor: +2.1).' },
        { move: '22.Qe4', text: '22...g6 23.Ne3 Kg7 24.Nc4 ile at c4’ten b6’ya ve d6’ya yönelir (+2.0).' },
      ],
    },
    '22b': {
      text: 'Fil e6’ya gelir ve d5 karesini kontrol eder.',
      amac: 'd5 karesine bir taş daha bakarak Beyazın oraya yerleşmesini zorlaştırmak.',
      neden: 'Mantıklı görünür ama Beyaza beyaz kareli fil değişimini sunar: 23.Bd5 Bxd5 sonrası d5 karesi kaleye kalır. Motor 22...g5 (22...g5 23.Nd5 Qd6 sonrası +2.2) ya da 22...Kh8’i (+2.2) tercih ediyor. Maç hamlesi +3.0.',
      diger: [
        { move: '22...g5', text: 'f4 filini kovalar. 23.Nd5 Qd6 24.Bxe5 Qxe5 sonrası Siyahın taşları daha aktiftir (Motor: +2.2).' },
        { move: '22...Kh8', text: 'Şah a2-g8 çaprazından çekilir. 23.h4 Rd8 24.Rxd8+ Bxd8 (+2.2).' },
      ],
    },
    '23w': {
      text: '23.Bd5: Beyaz filini d5’e koyar.',
      amac: 'Beyaz kareli filleri değişmek, d5’i kale için almak ve atı serbest bırakmak.',
      neden: 'Illingworth 23.Bd5’i 23.Nd5’ten daha iyi bulur, çünkü bu hamle ileri karakolu at için güvenceye alır. 23.Nd5 Bxd5 24.Bxd5+ Kh8 sonrası at gider (Motor: +2.0). 23.Bd5 +2.9. 23.Be4 de iyidir (+2.8).',
      diger: [
        { move: '23.Nd5', text: '23...Bxd5 24.Bxd5+ Kh8 25.h4 sonrası Beyaz atını kaybeder ve baskı azalır (Motor: +2.0).' },
        { move: '23.Be4', text: '23...g6 24.Bd5 Bxd5 25.Rxd5 ile aynı plana döner (+2.8).' },
      ],
    },
    '23b': {
      text: 'Filler d5’te değişir.',
      amac: 'Beyazın güçlü filini değişmek; aksi halde fil d5’ten g8 ve b7’yi hedef alır.',
      neden: '23...Bf7 24.Qe4 Bd8 25.Bxb7 bir piyon kaybettirir (Motor: +3.4), 23...Qc8 24.Bxe5 fxe5 25.Qe4 sonrası e5 zayıflar (+3.7). Değişim en iyisidir (+3.0).',
      diger: [
        { move: '23...Bf7', text: '24.Qe4 Bd8 25.Bxb7 sonrası Beyaz piyon kazanır (Motor: +3.4).' },
        { move: '23...Qc8', text: '24.Bxe5 fxe5 25.Qe4 b6 sonrası e5 hedef olur (+3.7).' },
      ],
    },
    '24w': {
      text: 'Kale d5’e gelir; c5 ve e5 baskı altındadır.',
      amac: 'Kaleyi ileri karakola yerleştirmek ve beşinci yatayda Siyahın iki piyonuna baskı kurmak.',
      neden: 'Illingworth 24.Nxd5 Qd6 25.Qa2 Kh8 26.Ne3 Qc7 27.Bxe5 fxe5 28.Qe6 hattını “daha da güçlü” bulur ama oyun hamlesinin de yeterli olduğunu ekler. Motor iki hamleyi yakın görüyor (24.Rxd5 +2.9, 24.Nxd5 +2.8; Illingworth’ün hattının sonunda +3.4). 24.Bxe5? Qxe5 25.Rxd5 erken değişimdir (+1.9).',
      diger: [
        { move: '24.Nxd5', text: '24...Qd6 25.Qa2 Kh8 26.Ne3 Qc7 27.Bxe5 fxe5 28.Qe6 ile vezir e6’ya girer (Motor: +2.8 / +3.4).' },
        { move: '24.Bxe5', text: '24...Qxe5 25.Rxd5 Qe6 26.Qc4 sonrası Siyah rahatlar (+1.9).' },
      ],
    },
    '24b': {
      text: '24...Qa5?: vezir ikinci kez a5’e gider.',
      amac: 'Beyazın a4 piyonuna saldırmak ve vezirle karşı oyun aramak.',
      neden: 'Wikipedia bu hamleyi Alekhine’e uygun bir taş değişimi sağlayan hata olarak gösterir: Siyah pasif bir fille f5’teki mükemmel ata karşı kalır. Illingworth 24...Rd8 25.Bxe5 fxe5 26.Qe4 Rxd5 27.Qxd5+ Kf8 28.Nc4 hattında da kazancın “zaman meselesi” olduğunu yazar. Motor: 24...Rd8 +3.1, 24...Qa5 +3.6.',
      diger: [
        { move: '24...Rd8', text: '25.Bxe5 fxe5 26.Qe4 Rxd5 27.Qxd5+ Kf8 28.Nc4 sonrası Beyazın oyun sonu açıkça üstündür (Motor: +3.1 / +3.4).' },
        { move: '24...b6', text: '25.Qe4 Bd8 26.Bxe5 fxe5 27.Rxe5 sonrası Beyaz piyon kazanır (+3.2).' },
      ],
    },
    '25w': {
      text: '25.Nf5!: at yeniden f5’e döner ve e7 filine saldırır.',
      amac: 'Atı en iyi karesine yerleştirmek: oradan e7, d6, g7 ve h6 karelerini hedef alır, c2 vezirinin çaprazının önünde durur.',
      neden: 'Vezir a5’e gittiği için e5 artık bağlı değil, ama Bxe5 fxe5 değişimi her an mümkün. 25.Bxe5 fxe5 26.Nf5 de aynı düzeydedir (+3.9), 25.Kg2 de (+3.8). Nf5 en esnek olanıdır.',
      diger: [
        { move: '25.Bxe5', text: '25...fxe5 26.Nf5 Bf6 27.Rxc5 ile piyon hemen kazanılır (Motor: +3.9).' },
        { move: '25.Kg2', text: 'Şah önce güvenceye alınır. 25...Qc7 26.Qe4 Rd8 (+3.8).' },
      ],
    },
    '25b': {
      text: 'Vezir e1’den şah çeker.',
      amac: 'Beyazın şahını rahatsız etmek ve ...Ng4 gibi bir karşı saldırı aramak.',
      neden: 'Tek başına bir vezir saldırısı tehdit oluşturmaz: Beyaz Kg2 ile kurtulur ve Siyahın veziri merkezden uzakta kalır. Motor 25...Bd8 (26.Bxe5 fxe5 27.Kg2 Qb4 sonrası +3.9) ya da 25...Qc7’yi (26.Bxe5 fxe5 27.Qc4 Rf7 sonrası +4.0) tercih ediyor. Maç hamlesi +4.5.',
      diger: [
        { move: '25...Bd8', text: 'Fil saldırıdan çekilir. 26.Bxe5 fxe5 27.Kg2 Qb4 (Motor: +3.9).' },
        { move: '25...Qc7', text: 'Vezir merkeze döner. 26.Bxe5 fxe5 27.Qc4 Rf7 28.Nxe7+ (+4.0).' },
      ],
    },
    '26w': {
      text: 'Şah g2’ye çekilir.',
      amac: 'Şahtan kurtulmak.',
      neden: 'Tek yasal hamledir: fil d5’te değişildiği için f1 karesine bir taş giremez, şahın da başka güvenli karesi yoktur. Kg2 sonrası şah f3 ve h3’ü korur ve vezir e1’de etkisiz kalır.',
    },
    '26b': {
      text: 'Fil d8’e çekilir.',
      amac: 'e7 filini f5 atının saldırısından kurtarmak ve ...Bb6 ya da ...Bf6 ile yeniden oyuna sokmak.',
      neden: '26...Ng4 27.Nxe7+ Kf7 28.e3 Nxf2 sonrası Siyah karşı şans arar ama yine kaybeder (Motor: +4.4–4.6). 26...Ng6 27.Rd7 Kh8 28.Nxe7 sonrası Beyaz taş kazanır (+5.2). 26...Bd8 +5.1.',
      diger: [
        { move: '26...Ng4', text: '27.Nxe7+ Kf7 28.e3 Nxf2 29.Qxf2 sonrası Beyaz taş fazlasıyla kalır (Motor: +4.4).' },
        { move: '26...Ng6', text: '27.Rd7 Kh8 28.Nxe7 Nxf4+ sonrası Beyaz kale ile yedinci yataya girer (+5.2).' },
      ],
    },
    '27w': {
      text: '27.Bxe5!: fil d7 karesinin savunucusu olan atı alır.',
      amac: 'e5 atını oyundan çıkarıp kaleyi d7’ye, yedinci yataya sokmak.',
      neden: 'e5 atı Siyahın en iyi taşıydı: d7 ve c4 karelerini tutuyordu. Fil onu alınca 27...fxe5 zorunludur ve Rd7 gelir. Motor: 27.Bxe5 +5.1, 27.h3 ya da 27.Rd1 +3.9.',
      diger: [
        { move: '27.h3', text: 'Şahı korur. 27...Qb4 28.Bxe5 fxe5 29.Rd7 ile yine aynı plan (Motor: +3.9).' },
        { move: '27.Rd1', text: '27...Qb4 28.Bxe5 fxe5 29.Rd7 (+3.8).' },
      ],
    },
    '27b': {
      text: 'Siyah piyonla geri alır.',
      amac: 'Malzemeyi eşitlemek.',
      neden: 'Neredeyse zorunludur: 27...Qa5 28.Bf4 ya da 27...Qb4 28.Bd6 Beyazı bir taş fazlasıyla bırakır (Motor: +6.2 / +6.6). fxe5 sonrası f-hattı kapanır ve d7 korumasız kalır (+5.0).',
      diger: [
        { move: '27...Qb4', text: '28.Bd6 Bb6 29.Bxf8 Kxf8 sonrası Beyaz kale fazlasıyla kalır (Motor: +6.6).' },
      ],
    },
    '28w': {
      text: '28.Rd7!: kale yedinci yataya girer; b7 ve g7’ye saldırır.',
      amac: 'f5 atı ile birlikte g7’ye baskı kurmak ve Siyahın şahını arka yatayda sıkıştırmak.',
      neden: '28.Rxe5 Qb4 29.Re4 sonrası Beyaz piyon kazanır ama saldırı yavaşlar (Motor: +5.3). 28.Rd7 en güçlüsüdür (+5.4): Rxg7+ tehdidi Siyahı tek bir savunmaya zorlar.',
      diger: [
        { move: '28.Rxe5', text: '28...Qb4 29.Re4 Rxf5 30.Rxb4 ile malzeme kazanılır ama oyun uzar (Motor: +5.3).' },
        { move: '28.Rd1', text: 'Kale geri çekilir. 28...Qb4 29.Rd7 ile zaman kaybeder (+4.2).' },
      ],
    },
    '28b': {
      text: 'Fil f6’ya gelir ve g7’yi korur.',
      amac: 'Rxg7+ tehdidini durdurmak.',
      neden: 'Bu hamle Nh6+ kombinasyonuna kapı açar. 28...Qb4 29.Rxg7+ Kh8 30.Rxb7 Bf6 sonrası Beyaz piyon kazanır ve saldırı sürer (Motor: +5.6–5.7). 28...Kh8 29.Qxc5 de kaybeder (+6.3). Maç hamlesi +6.0.',
      diger: [
        { move: '28...Qb4', text: '29.Rxg7+ Kh8 30.Rxb7 Bf6 31.Nd6 sonrası Beyaz iki piyon kazanır (Motor: +5.6).' },
        { move: '28...Kh8', text: '29.Qxc5 Rg8 30.Nd6 ile Beyaz piyon kazanır ve f7’ye girer (+6.3).' },
      ],
    },
    '29w': {
      text: '29.Nh6+!: at şah çekerken c2 vezirinin h7’ye giden çaprazını açar.',
      amac: 'Siyahın şahını h8’e zorlamak ve ardından bedava bir hamle kazanmak.',
      neden: '29...gxh6? 30.Qxh7 mat (f7’yi d7 kalesi tutar). Bu yüzden Siyahın tek yasal cevabı Kh8’dir ve Beyaz istediği hamleyi oynar. 29.Qc4+ Kh8 30.Qxc5 de kazanır (Motor: +5.3), ama Nh6+ daha güçlüdür (+6.4–7.2).',
      diger: [
        { move: '29.Qc4+', text: '29...Kh8 30.Qxc5 Kg8 31.Qc4+ ile Beyaz kazanır ama at f5’te kalır (Motor: +5.3).' },
        { move: '29.Rxb7', text: '29...h5 30.Nh6+ Kh8 31.Qxc5 ile aynı kombinasyon bir hamle gecikir (+4.6).' },
      ],
    },
    '29b': {
      text: 'Şah köşeye, h8’e gider.',
      amac: 'Mattan kurtulmak.',
      neden: 'Tek hamledir: 29...gxh6 30.Qxh7 mat. Şahın başka karesi yoktur: f7’yi d7 kalesi tutar, f8’de kendi kalesi, h7’de kendi piyonu durur.',
    },
    '30w': {
      text: '30.Qxc5: vezir c5 piyonunu alır ve f8 kalesine saldırır. Euwe terk etti.',
      amac: 'Aynı anda iki tehdit kurmak: 31.Qxf8 mat ve 31.Nf7+.',
      neden: '30...Qxf2+ 31.Qxf2 gxh6 sonrası Beyaz bir kale fazlasıyla kalır (Motor: +7.3). 30...Re8 31.Qd5! (ya da 31.Nf7+) ile Qg8+ Rxg8 Nf7 boğmaca matı tehdit edilir; Wikipedia’nın notlarına göre 31...gxh6 bunu önler ama 32.Qf7 sonrası h7 ya da g7’de mat önlenemez. 30...Rg8?? 31.Nf7 mat. 30.Nf7+ Rxf7 31.Rxf7 de kazanır (+6.1–6.3), ama maç hamlesi en güçlüsüdür.',
      diger: [
        { move: '30.Nf7+', text: '30...Rxf7 31.Rxf7 Kg8 32.Rxb7 ile Beyaz malzeme kazanır (Motor: +6.1 / +6.3).' },
        { move: '30.Rxb7', text: '30...Be7 31.f3 Bf6 32.Nf7+ ile daha yavaş bir kazanç (+4.85).' },
      ],
    },
  },
  sources: [
    { title: 'Sydney Academy of Chess: Alekhine–Euwe match (IM Max Illingworth’ün notlarıyla 1. oyun)', url: 'https://sydneyacademyofchess.com.au/node/13344' },
    { title: 'Wikipedia: World Chess Championship 1935', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1935' },
    { title: 'Chess.com: The Openings of World Champions – Max Euwe and the Slav Defense', url: 'https://www.chess.com/article/view/the-openings-of-world-champions-max-euwe-and-the-slav-defense' },
    { title: 'Chess.com blog: A Century of Chess – Euwe–Alekhine 1935', url: 'https://www.chess.com/blog/picolypishi/a-century-of-chess-euwe-alekhine-1935' },
    { title: 'Chess.com blog: A Century of Chess – Euwe–Alekhine 1935 (Part 2)', url: 'https://www.chess.com/blog/kahns/a-century-of-chess-euwe-alekhine-1935-part-2' },
    { title: 'FIDE Satranç Müzesi: The start of the first game Alekhine–Euwe of the 1935 World Championship Match', url: 'https://museum.fide.com/exhibits/the-start-of-the-first-game-alekhine-euwe-of-the-1935-world-championship-match' },
  ],
  exercises: [
    { id: 'aeb-1', kind: 'tekrar', plan: false, title: 'At merkeze döner',
      source: 'Alekhine – Euwe, 1935, 1. oyun (18. hamle)',
      fen: '5rk1/pp2bppp/2p1b3/qN2n3/P4B2/6P1/1PQ1PPBP/3R2K1 w - - 1 18',
      prompt: 'Beyaz d-hattının sahibi. Siyahın veziri a5’e çıktı ve e6’daki fil yalnızca f7 piyonuyla korunuyor. b5’teki at nereye gitmeli?',
      hint: 'At merkezden e6 filine saldırabilir ve b-piyonunun yolunu açar.',
      line: ['Nd4'],
      explanation: '**18.Nd4!** At e6 filine saldırır; b2 piyonu da artık b4 ile a5 vezirine tempo kazanabilir. Euwe 18...Bc8 oynadı ve 19.b4 ile vezir geri çekildi. Motor: Nd4 +1.7, sonraki en iyi hamle 18.Bd2 +0.3.',
      link: 'Alekhine’in atı Nb5-d4-f5 yoluyla merkezden şah kanadına gitti; bu hamle o yolun ilk adımıdır.' },
    { id: 'aeb-2', kind: 'tekrar', plan: false, title: 'Çaprazı açan şah',
      source: 'Alekhine – Euwe, 1935, 1. oyun (29. hamle)',
      fen: '5rk1/pp1R2pp/5b2/1Pp1pN2/P7/6P1/2Q1PPKP/4q3 w - - 2 29',
      prompt: 'Beyazın kalesi d7’de, atı f5’te, veziri c2’de. Siyahın şahı g8’de. Kombinasyonu bulun.',
      hint: 'f5’teki at c2 vezirinin önünde duruyor. At şah çekerek çekilirse vezir hangi kareye bakar?',
      line: ['Nh6+', 'Kh8', 'Qxc5'],
      accept: { 2: ['Nf7+'] },
      explanation: '**29.Nh6+! Kh8 30.Qxc5** At şah çekerken c2-h7 çaprazını açar: 29...gxh6? 30.Qxh7 mat. Şah h8’e gidince vezir c5 piyonunu alır ve f8 kalesine saldırır. Motor: Nh6+ +7.2, 29.Qc4+ +5.5; 30.Qxc5 +7.2, 30.Nf7+ +6.6.',
      link: 'Atın f5’e yerleşmesi ve kalenin d7’ye girmesi bu kombinasyonu hazırladı.' },
    { id: 'aeb-3', kind: 'transfer', plan: false, title: 'e5 atını almak',
      source: 'Ivanchuk – Carlsen, Avrupa Kulüpler Kupası, Kallithea 2008 (29. hamle)',
      fen: '3r2k1/1pq2pb1/p1p2np1/2P1n3/6Pp/2B1P2P/P3NPB1/1QR3K1 w - - 0 29',
      prompt: 'Siyahın atı e5’te güçlü duruyor ve vezir c7’de b7 piyonunu koruyor. Beyazın veziri b1’de, fili c3’te. Hamle sizde.',
      hint: 'Fil e5 atını alırsa Siyah vezirle geri almak zorunda. O zaman b7’yi kim korur?',
      line: ['Bxe5', 'Qxe5', 'Qxb7'],
      explanation: '**29.Bxe5! Qxe5 30.Qxb7** Fil merkezdeki atı alır; vezir e5’e gelince b7 korumasız kalır ve Beyaz piyon kazanıp vezirini Siyahın piyonlarına sokar. Motor: Bxe5 +2.0, sonraki en iyi hamle 29.Qc2 +0.6; 30.Qxb7 +2.1, sonraki en iyi 0.0.',
      link: 'Alekhine 27.Bxe5 ile d7’nin savunucusunu aldı ve kale içeri girdi; Ivanchuk aynı değişimle b7’nin savunucusunu saptırdı.' },
    { id: 'aeb-4', kind: 'transfer', plan: false, title: 'Yedinci yataydaki kaleye at desteği',
      source: 'Lputian – Sedina, Saint-Vincent 2001 (34. hamle)',
      fen: '4r1k1/3R2pp/2p2p2/Bp6/b3Pn1N/5P2/1P4PP/6K1 w - - 0 34',
      prompt: 'Aynı Çek varyantından bir oyun sonu. Beyazın kalesi d7’de, atı h4’te. Siyahın c6 piyonu zayıf. At nereye gitmeli?',
      hint: 'At, kaleyle birlikte e7’ye ve oradan c6’ya ulaşabileceği bir kareye gitsin.',
      line: ['Nf5'],
      explanation: '**34.Nf5!** At f5’ten e7’ye şah çekmeyi tehdit eder; Ne7+ ile c6 piyonu düşer. Oyunda 34...Ne6 35.Ne7+ Kh8 36.Nxc6 geldi. Motor: Nf5 +2.2, sonraki en iyi hamle 34.Bb6 +1.1.',
      link: 'Alekhine de kalesini d7’ye sokup atını f5’e getirdi; at ve yedinci yataydaki kale birlikte Siyahın arka yatayını hedef aldı.' },
  ],
};
