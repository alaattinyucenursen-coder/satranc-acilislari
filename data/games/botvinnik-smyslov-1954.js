// Botvinnik – Smislov, Dünya Şampiyonası maçı, Moskova 1954 (12. oyun). Kaynak: PgnMentor (Botvinnik.pgn).
export default {
  id: 'botvinnik-smyslov-1954',
  theme: 'Fil çifti ve e5-f5 piyon yürüyüşü',
  white: 'Mihail Botvinnik', black: 'Vasili Smislov',
  whiteShort: 'Botvinnik', blackShort: 'Smislov',
  event: 'Dünya Şampiyonası maçı, 12. oyun', site: 'Moskova', year: 1954, eco: 'D18',
  variation: 'Slav Savunması, Hollanda varyantı (5.a4 Bf5 6.e3 e6 7.Bxc4 Bb4 8.O-O Nbd7 9.Nh4)', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7 9. Nh4 O-O 10. f3 Bg6 11. e4 e5 12. Nxg6 hxg6 13. Be3 Qe7 14. Qe2 exd4 15. Bxd4 Bc5 16. Bxc5 Qxc5+ 17. Kh1 g5 18. g3 Rad8 19. Ba2 Rfe8 20. Rad1 Nf8 21. Rxd8 Rxd8 22. e5 Nd5 23. Nxd5 cxd5 24. Qd2 Ne6 25. f4 gxf4 26. gxf4 Qc6 27. f5 Nc5 28. Qg5 Rd7 29. Rg1 f6 30. exf6 Ne4 31. f7+ Rxf7 32. Qd8+ Kh7 33. Bxd5 Nf2+ 34. Kg2 Qf6 35. Qxf6 Rxf6 36. Kxf2 Rxf5+ 37. Bf3 Rf4 38. Rg4 1-0`,


  summary: 'Dünya şampiyonluğu maçının 12. oyunu (Moskova, 10 Nisan 1954). Smislov üst üste üç galibiyetle maçta 6–5 öne geçmişti; Botvinnik bu oyunla skoru 6–6’ya getirdi ve ardından gelen seriyle maçı yeniden ele aldı. Slav Savunmasının Hollanda varyantında Botvinnik **9.Nh4** ile f5 filini kovaladı, **10.f3** ve **11.e4** ile merkezi kurdu, **12.Nxg6** ile fil çiftini aldı. Smislov **11...e5** ile merkeze zamanında karşı çıktığı için oyun uzun süre dengede kaldı (Motor: 0.0 civarı); kara kareli filler değişince Beyazın elinde a2-g8 çaprazındaki güçlü fil kaldı. Kaleler de değiştikten sonra Botvinnik **22.e5** ile merkezde yer tuttu ve **25.f4–27.f5** ile e5-f5 piyon ikilisini Siyahın şahına doğru sürdü. Smislov 26...Qc6 ve 27...Nc5 ile küçük hatalar yaptı, **28...Rd7?** ile de belirleyici karşı hamleyi (28...f6) kaçırdı (Motor: +0.9 → +2.4). **29.Rg1**, **30.exf6** ve **31.f7+!** ile şahın önü açıldı; **32.Qd8+ Kh7 33.Bxd5!** çatalı Siyahı taş kaybına zorladı ve oyun bir fil fazlasıyla sona erdi.',
  intro: 'Slav Savunmasında Siyah 2...c6 ile d5’i destekler ve Vezir Gambiti Reddi’nden farklı olarak c8 filini piyonların arkasına kapatmaz. 4...dxc4 ile c4 alınır; Beyaz **5.a4** ile ...b5’in piyonu tutmasını engeller. 5...Bf5 Çek sistemidir: fil dışarı çıkar ve 6.e4’ü önler. **6.e3 e6 7.Bxc4 Bb4 8.O-O** dizisine **Hollanda varyantı** denir; Beyaz e4 ilerleyişini gelişimini bitirene kadar erteler, Siyah ise Bb4 ile c3 atını bağlayıp e4’ü zorlaştırır. Ana yol 9.Qe2 ile e4’ü hazırlamaktır; Botvinnik’in seçtiği **9.Nh4** ise doğrudan f5 filine yönelir: fil g6’ya çekilmek zorunda kalırsa Beyaz **f3 ve e4** ile merkezi kurar, sonra Nxg6 ile fil çiftini alır. Bunun bedeli h4 atının bir süre kenarda kalması ve f3’ün beyaz şahın önünü biraz gevşetmesidir. Siyahın cevabı klasik **...e5** kırılmasıdır: Beyazın merkezi d4’te sorgulanır ve d-hattı açılır.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**5.a4** ile ...b5’i engelleyip e3 ve Bxc4 ile c4 piyonunu rahatça geri almak; gelişim bitmeden e4’e acele etmemek.',
      '**9.Nh4** ile f5 filini hedef almak; **10.f3–11.e4** ile merkezi kurup **12.Nxg6** ile fil çiftini almak.',
      'Kara kareli filler değiştikten sonra kalan fili **a2**’ye çekip a2-g8 çaprazında tutmak: hem d5’e hem f7’ye baskı.',
      'Şahı **Kh1** ile güvene almak, **g3** ile f4 ilerleyişini hazırlamak ve Siyahın ...g5 kalesini sorgulamak.',
      'Kaleler değişince **22.e5** ile merkezde yer tutmak, Siyah atı f6’dan kovmak ve d5’te sabit bir hedef yaratmak.',
      '**25.f4** ile g5’i değiştirip açılan f-piyonunu **27.f5**’e sürmek; e5-f5 ikilisini Siyah şaha karşı koç başı yapmak.',
      'Veziri g5’e, kaleyi g-hattına getirip **exf6** ve **f7+** ile Siyahın şahını açmak; son vuruşu a2 filiyle (Bxd5) yapmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...Bb4** ve **...O-O** ile hızlı gelişmek; Nh4 gelince fili g6’ya çekip h-piyonuyla yeniden almak ve yapıyı sağlam tutmak.',
      '**11...e5** ile Beyaz merkezine hemen karşı çıkmak; Beyaz rahatça d5 veya e5 kuramadan d4’ü sorgulamak.',
      'Kara kareli filleri **15...Bc5** ile değiştirip Beyazın fil çiftini azaltmak, şah çekerek (16...Qxc5+) tempo kazanmak.',
      '**17...g5** ile f4 karesini tutmak ve Beyazın f-piyonunu durdurmak.',
      'Kaleleri d- ve e-hatlarına koymak; at manevrasıyla (...Nf8–e6) d4 ve f4 karelerini kontrol etmek.',
      'e5-f5 piyonları ilerlerken zamanında **...f6** ile karşılık verip piyon zincirini kırmak; ya da vezirleri değişip (26...Qd4) baskıyı azaltmak.',
      'Oyunda bu son adımlar geç kaldı: 26...Qc6, 27...Nc5 ve özellikle **28...Rd7?** Siyahın şah kanadını savunmasız bıraktı.',
    ] },
  },
  critical: [
    { move: '9w', title: '9.Nh4: fil çiftinin peşinde', text: 'Ana yol 9.Qe2 ve e4’tür; Botvinnik daha doğrudan bir yol seçti. At kenara gider ve f5 filine saldırır. 9...O-O 10.Nxf5 exf5 sonrası Siyah e-hattını ve e4’ü kontrol eden f5 piyonunu alır, bu yüzden Botvinnik hemen almadı; 10.f3 ile önce e4’ü hazırladı. Fil g6’ya çekilince Beyaz hem merkezi kurdu hem de Nxg6 ile fil çiftini garantiledi. Motor bu planı ana yoldan biraz daha az iddialı görüyor (9.Nh4 +0.3, 9.Qe2 +0.4), ama oyunun karakterini Beyazın istediği yöne çekti.' },
    { move: '11b', title: '11...e5: zamanında karşı darbe', text: 'Beyaz e4’ü kurar kurmaz Smislov ...e5 ile merkeze vurdu. Bb4 fili c3 atını bağladığı için d4 piyonu yeterince korunmuyor; Beyaz ne d5 ile merkezi kapatabildi ne de dxe5 ile bir şey kazanabildi. Motor bu hamleyi en iyi olarak görüyor (−0.0); 11...c5 daha yavaş (+0.2). Bu darbe sayesinde açılıştan Beyaz bir avantaj çıkaramadı.' },
    { move: '12w', title: '12.Nxg6: fil çifti, ama açık h-hattı', text: 'Beyaz g6 filini alır ve fil çiftini elde eder. Siyah h-piyonuyla alır; piyon merkeze yaklaşır ve h-hattı Siyah kaleye açılır. Burada 12...exd4?? 13.Nxf8 bir kale kaybettirir (+4.5), 12...Bxc3? 13.bxc3 hxg6 ise Beyazın fil çiftini güçlendirir (+2.1). Motor 12.Nxg6’yı 12.dxe5 ve 12.d5 ile aşağı yukarı eşit görüyor: konum dengeli, ama Beyazın ileride işine yarayacak uzun vadeli bir artısı (iki fil, sonra da güçlü beyaz kareli fil) var.' },
    { move: '22w', title: '22.e5: merkezde yer tutmak', text: 'Kaleler değiştikten sonra Botvinnik e-piyonunu ilerletti. f6 atı kovulur, d5’e gider ve 23.Nxd5 cxd5 sonrası Siyahın d5’te sabit, a2 filinin baktığı bir piyonu oluşur. Daha önemlisi e5 piyonu f6 karesini tutar ve ileride f-piyonuyla birlikte Siyahın şahına doğru yürüyecek bir koç başı olur. Motor konumu hâlâ eşit görüyor (0.0); avantaj sonradan, Siyahın hatalarıyla doğdu.' },
    { move: '26b', title: '26...Qc6?!: f5’e tempo vermek', text: 'f-hattı açıldıktan sonra Siyahın en sade yolu vezirleri değişmekti (26...Qd4 +0.2) ya da şahı merkeze yaklaştırmaktı (26...Kf8 +0.1, 26...b6 0.0). Vezir c6’ya gidince 27.f5 tempo ile e6 atını kovaladı ve e5-f5 ikilisi canlandı (derinlik 20’de Motor: +0.4). Bu küçük bir kusurdu; asıl hata iki hamle sonra geldi.' },
    { move: '28b', title: '28...Rd7?: belirleyici gecikme', text: 'Beyaz veziri g5’e gelip g7’ye ve d8’e baktığında Siyahın tek iyi yolu 28...f6’ydı: 29.exf6? Qxf6 eşitler (+0.1), en iyisi 29.Qg2 Nd3 30.Rg1 ile Beyaz biraz üstündür (+0.9). Smislov kaleyi d7’ye çekti; bu, d8’i korudu ama ...f6’yı bir tempo geciktirdi. 29.Rg1 ile g7’ye baskı katlandı ve Motor +2.4’e çıktı: artık 29...g6 30.e6! ya da 29...Kf8 30.Qxg7+ gibi yollar da kaybediyor.' },
    { move: '30w', title: '30.exf6!: vezir yerine piyonla almak', text: 'Smislov sonunda 29...f6 oynadı. 30.Qxf6? Nd3 sonrası vezirler değişir ve Siyah kurtulur (+0.3). Botvinnik piyonla aldı: f6 piyonu g7’yi tehdit eder, g-hattındaki kale ve g5 veziri ona destek verir. Motor: 30.exf6 +4.1. 30...Nd3 (+3.8) daha dirençliydi; oyundaki 30...Ne4 kombinasyona izin verdi.' },
    { move: '31w', title: '31.f7+! Rxf7 32.Qd8+ Kh7 33.Bxd5!', text: 'Piyon fedası Siyah kaleyi f7’ye, şahı da h7’ye çeker. Kale f7’ye gelince d8 karesi korumasız kalır; 32.Qd8+ sonrası 33.Bxd5 fili hem c6 vezirine hem f7 kalesine saldırır. Siyah 33...Nf2+ 34.Kg2 Qf6 ile ikisini birden korumaya çalıştı, ama 35.Qxf6 Rxf6 36.Kxf2 sonrası Beyaz bir fil fazlası kaldı. Sakin 31.Qe3 ise eşitliğe döner (Motor: 0.0); f7+ ise +4.6.' },
  ],
  lessons: [
    'Hollanda varyantında **Nh4**, f5 filini kovalayıp fil çiftini almanın tipik yoludur; ama Beyaz önce f3–e4 ile merkezi hazırlamalı, yoksa Nxf5 exf5 Siyaha e4 üzerinde rahat bir kontrol verir.',
    'Rakip merkezi kurar kurmaz yapılan karşı darbe (**11...e5**) açılış avantajını sıfırlar; Slavda ...e5 ve ...c5 kırılmaları bu yüzden çok önemlidir.',
    'Kara kareli filler değişince kalan beyaz kareli fil a2-g8 çaprazında, özellikle d5’te sabit bir piyon ve f7 hedefi varken, uzun süre güçlü kalır.',
    '**e5 + f4-f5** ikilisi, karşı tarafın şahının önündeki piyonlar (f7, g7) sabitken çok tehlikelidir; f-piyonunun değişimle açılması (25.f4 gxf4 26.gxf4) bu ikiliyi hareketlendirdi.',
    'Piyon yürüyüşüne karşı savunan taraf zamanında **...f6** ile kırmalıdır; bir tempo gecikme (28...Rd7) eşit konumu kayıp konuma çevirebilir.',
    'Kombinasyonlarda piyon fedası (**f7+**) rakip taşları kötü karelere çeker; sonra çatal (Bxd5) ile malzeme toplanır.',
    'Kazanılmış bir oyun sonunda en kısa yol değişimdir: taş fazlası olan taraf (38.Rg4) kaleleri değişip rakibe hiç karşı oyun bırakmaz.',
  ],
  notes: {
    '1w': {
      text: 'Beyaz vezir piyonunu iki kare ilerletir ve merkezde e5 ile c5 karelerini kontrol eder.',
      amac: 'Merkezi tutmak ve c4 ile Vezir Gambiti yapısına geçmek.',
      neden: 'Botvinnik bu maçta Beyazla hep 1.d4 oynadı; Smislov’a karşı kapalı ve yarı kapalı yapılarda pozisyonel üstünlük arıyordu. 1.d4 piyonu vezirle korunduğu için e4’ten daha sağlam bir merkez başlangıcıdır.',
      diger: [
        { move: '1.e4', text: 'Motorun ilk tercihi (Motor: +0.4). Smislov’a karşı açık oyunlar ve Fransız/İspanyol yapıları getirir; Botvinnik bu maçta Beyazla bu yolu denemedi.' },
        { move: '1.Nf3', text: 'Daha esnek bir sıra (Motor: +0.2); genellikle aynı Vezir Gambiti yapılarına gider.' },
      ],
    },
    '1b': {
      text: 'Siyah d5 ile merkezde simetrik karşılık verir ve e4 karesini kontrol eder.',
      amac: 'Merkezde eşit pay almak; Beyazın e4 ilerleyişini engellemek.',
      neden: '1...d5 klasik cevaptır ve Vezir Gambiti Reddi ile Slav yapılarına kapı açar. Smislov hem 1...Nf6 sistemlerini hem de ...d5’li sağlam yapıları oynayan çok yönlü bir oyuncuydu.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına (Nimzo-Hint, Kral Hintli) açılır (Motor: +0.3). Smislov maçın ikinci yarısında Kral Hintli ile önemli galibiyetler aldı.' },
        { move: '1...c6', text: 'Slav’a farklı bir sırayla girer, ama 2.e4 ile Caro-Kann’a dönülebilir (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: 'c4 ile Vezir Gambiti: Beyaz kanat piyonuyla d5’e saldırır.',
      amac: 'Siyahın merkez piyonunu değişime zorlamak ya da onu c-piyonuyla desteklemeye mecbur bırakmak.',
      neden: 'Beyaz d5’i alırsa merkezde e-piyonu için yol açılır. c4 ayrıca c-hattını ileride açmaya ve d5 üzerinde kalıcı baskıya hizmet eder.',
      diger: [
        { move: '2.Nf3', text: 'Daha sakin bir sıra (Motor: +0.2); c4 sonraya bırakılır.' },
        { move: '2.g3', text: 'Katalan tarzı bir kurulum (Motor: +0.2); Botvinnik bu tür kurulumları da kullanırdı.' },
      ],
    },
    '2b': {
      text: 'Slav Savunması: d5 piyonu c6 ile desteklenir.',
      amac: 'Merkezi korumak ve c8 filini ...e6’dan önce dışarı çıkarma imkânını saklamak.',
      neden: '2...e6 (Vezir Gambiti Reddi) sağlamdır ama c8 filini kapatır. 2...c6 ile Siyah hem d5’i tutar hem de bu “kötü fil” sorununu ...Bf5 ile çözmeye hazırlanır. Bedeli, b8 atının doğal c6 karesini kaybetmesidir.',
      diger: [
        { move: '2...e6', text: 'Klasik Vezir Gambiti Reddi (Motor: +0.3); c8 fili sonra ...b6 ve ...Bb7 ile gelişir.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü (Motor: +0.3); Siyah piyonu alır ve hızlı ...c5 ile merkeze vurur. Botvinnik bu maçın 4. ve 10. oyunlarında bu açılışla karşılaştı.' },
      ],
    },
    '3w': {
      text: 'At f3’e gelişir; e5 ve d4’ü kontrol eder.',
      amac: 'Gelişmek ve Siyahın ...e5 kırılmasını zorlaştırmak.',
      neden: '3.Nf3 en esnek sıradır: 3.Nc3’te Siyah 3...dxc4 ve ...b5 ile piyonu tutmayı deneyebilir, 3.cxd5 ise simetrik Değişim varyantına gider. Botvinnik ana yol mücadelesini istedi.',
      diger: [
        { move: '3.Nc3', text: 'Motorun ilk tercihi (Motor: +0.4); ama 3...e6 ile Yarı-Slav’a ya da 3...dxc4 ile keskin çizgilere izin verir.' },
        { move: '3.cxd5', text: 'Değişim Slavı (Motor: +0.4): simetrik ve beraberlik eğilimli bir yapı.' },
      ],
    },
    '3b': {
      text: 'Siyah atını f6’ya geliştirir ve e4’ü bir kez daha kontrol eder.',
      amac: 'Merkezi tutmak ve şah kanadında gelişmeyi tamamlamaya başlamak.',
      neden: '3...Nf6 Slavın ana hamlesidir. 3...e6 Yarı-Slava döner; 3...dxc4 ise Beyaza 4.e3 ve 5.Bxc4 ile rahat bir merkez verir.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav yapısı (Motor: +0.4); c8 fili kapanır ama yapı çok sağlamdır.' },
        { move: '3...dxc4', text: 'Erken alış (Motor: +0.5); 4.e3 b5 5.a4 ile Beyaz piyonu rahatça geri alır.' },
      ],
    },
    '4w': {
      text: 'İkinci at c3’e gelir ve d5’e baskıyı artırır.',
      amac: 'Gelişmeyi sürdürmek ve e4 ilerleyişini desteklemek.',
      neden: 'Nc3 ile d5 iki kez saldırı altındadır; Siyah ya c4’te piyonu alır ya da ...e6 ile Yarı-Slava geçer. 4.e3 daha sakin olurdu ama c1 filini kapatır.',
      diger: [
        { move: '4.e3', text: 'Sakin sistem (Motor: +0.3); 4...Bf5 ile Siyah fili rahatça dışarı çıkarır.' },
        { move: '4.cxd5', text: 'Değişim varyantı (Motor: +0.3); simetrik ve sakin.' },
      ],
    },
    '4b': {
      text: 'Siyah c4 piyonunu alır.',
      amac: 'Beyazı piyonu geri almak için zaman harcamaya zorlamak ve bu arada c8 filini dışarı çıkarmak.',
      neden: 'Bu, Slavın ana yoludur. Siyah piyonu sonsuza dek tutmayı amaçlamaz; Beyaz a4, e3 ve Bxc4 ile tempo harcarken Siyah ...Bf5 ve ...e6 ile rahat gelişir. 4...e6 Yarı-Slava döner.',
      diger: [
        { move: '4...e6', text: 'Yarı-Slav (Motor: +0.4); Meran ve Botvinnik sistemi gibi çok keskin çizgilere gider.' },
        { move: '4...a6', text: 'Chebanenko fikri; ...b5 ile kanatta yer kazanmaya çalışır.' },
      ],
    },
    '5w': {
      text: 'a4 ile Beyaz ...b5’i engeller.',
      amac: 'Siyahın b5 ile c4 piyonunu tutmasının önüne geçmek.',
      neden: '5.e3 b5 sonrası Siyah piyonu korumaya çalışır ve oyun keskinleşir. 5.a4’ün bedeli b4 karesinin zayıflamasıdır: Siyahın fili ileride (7...Bb4) tam oraya yerleşecek.',
      diger: [
        { move: '5.e4', text: 'Gambit tarzı (5...b5 ile Siyah piyonu tutar); daha keskin ve riskli.' },
        { move: '5.g3', text: 'Fianketto kurulumu (Motor: +0.1); c4 piyonunu sonra geri almayı hedefler.' },
        { move: '5.Ne5', text: 'Daha erken Krause fikri (Motor: 0.0); 5...Nbd7 6.Nxc4 ile piyon hemen geri alınır.' },
      ],
    },
    '5b': {
      text: 'Fil f5’e çıkar: Çek sistemi.',
      amac: 'c8 filini ...e6’dan önce açık bir çapraza getirmek ve 6.e4’ü önlemek.',
      neden: 'Slavın bütün fikri budur: fil dışarıda olunca ...e6 artık filin önünü kesmez. f5 fili b1-h7 çaprazında e4’ü kontrol eder. 5...Bg4 ve 5...Na6 (Smislov varyantı) da oynanır.',
      diger: [
        { move: '5...Bg4', text: 'Fil g4’e gider; 6.Ne5 ile Beyaz hemen fili sorgular.' },
        { move: '5...Na6', text: 'Smislov’un adını taşıyan varyant: at b4’e yönelir.' },
        { move: '5...e6', text: 'Fil dışarı çıkmadan ...e6 (Motor: +0.6); c8 fili kapanır.' },
      ],
    },
    '6w': {
      text: 'e3 ile Beyaz c4 piyonunu filiyle almaya hazırlanır: Hollanda varyantı.',
      amac: 'Önce gelişmeyi tamamlamak, e4’ü sonraya bırakmak.',
      neden: 'Bu sakin yol, Beyazın merkezi gelişimini bitirdikten sonra kurmasına dayanır. Daha keskin 6.Ne5 (Krause) ile Beyaz f3 ve e4’ü hemen hedefler; 6.Nh4 (Bled saldırısı) ise doğrudan fili kovalar.',
      diger: [
        { move: '6.Ne5', text: 'Krause saldırısı (Motor: +0.3); f3, e4 ve Nxc4 planları. Siyah 6...e6 ve 7...Bb4 ya da 6...Nbd7 ile karşılar.' },
        { move: '6.Nh4', text: 'Bled saldırısı (Motor: +0.2); 6...e6 7.Nxf5 exf5 ile fil çifti hemen alınır, ama Siyahın f5 piyonu e4’ü tutar.' },
      ],
    },
    '6b': {
      text: 'Siyah ...e6 ile sağlam bir piyon yapısı kurar.',
      amac: 'f8 filine yol açmak ve d5 ile c6 piyonlarını desteklemek.',
      neden: 'Fil artık dışarıda olduğu için ...e6 bir kusur değildir. Bu yapıyla Siyah ...Bb4 veya ...Bd6 ile gelişir, sonra ...e5 ya da ...c5 ile merkeze vurur.',
      diger: [
        { move: '6...Na6', text: 'Lasker varyantı: at b4’e yönelir; daha nadir.' },
        { move: '6...Nbd7', text: 'Esnek sıra (Motor: +0.3); genellikle aynı yapıya döner.' },
      ],
    },
    '7w': {
      text: 'Beyaz filiyle c4 piyonunu geri alır.',
      amac: 'Malzemeyi eşitlemek ve fili aktif c4 karesine yerleştirmek.',
      neden: 'Bu noktada geri almamak için bir sebep yok; fil c4’ten hem d5’e hem de ileride a2-g8 çaprazından f7’ye bakar. Bu fil oyunun sonunda belirleyici rol oynayacak.',
      diger: [
        { move: '7.Ne5', text: 'Krause tarzı (Motor: +0.2); önce atı merkeze getirir, c4’ü sonra alır.' },
        { move: '7.a5', text: 'Kanatta yer kazanmaya çalışır (Motor: +0.1), ama c4 piyonunu geri almayı geciktirir.' },
      ],
    },
    '7b': {
      text: 'Fil b4’e gelir ve c3 atını bağlar.',
      amac: 'e4 ilerleyişini zorlaştırmak ve a4’ün zayıflattığı b4 karesini kullanmak.',
      neden: 'Hollanda varyantının özü budur: c3 atı bağlı kaldıkça Beyaz e4’ü kolayca oynayamaz. Fil ayrıca ileride d4 piyonuna baskıya da katılabilir. 7...Nbd7 ve 7...Bd6 da oynanır.',
      diger: [
        { move: '7...Nbd7', text: 'Önce gelişme (Motor: +0.3); 8.Qe2 ve e4’e izin verir.' },
        { move: '7...Bd6', text: 'Fil d6’da e5’e bakar, ama c3 atını bağlamaz; Beyaz e4’ü daha rahat kurar.' },
      ],
    },
    '8w': {
      text: 'Beyaz kısa rok yapar.',
      amac: 'Şahı güvene almak ve kaleyi f1’e getirmek; f3–e4 planı için hazırlık.',
      neden: 'Rok en doğal hamledir. 8.Qe2 ile önce e4 hazırlanabilirdi, ama Beyaz şahını merkezde bırakmak istemedi. Rok ayrıca f-piyonunun ileride ilerlemesi için kaleyi doğru hatta koyar.',
      diger: [
        { move: '8.Qe2', text: 'Motorun ilk tercihi (Motor: +0.3); 8...c5 veya 8...Bg4 gibi cevaplarla daha keskin bir oyun olabilir.' },
        { move: '8.Nh4', text: 'Nh4 bir hamle erken (Motor: +0.2); 8...O-O 9.O-O ile oyuna benzer konumlar çıkar.' },
      ],
    },
    '8b': {
      text: 'At d7’ye gelişir.',
      amac: 'İleride ...e5 kırılmasını desteklemek ve f6 atını yedeklemek.',
      neden: 'd7 atı e5’i destekler ve b6 üzerinden c4’e yönelebilir. Ana yollar 8...O-O ve 8...Nbd7’dir; ikisi çoğu zaman aynı yapıya döner. 8...Ne4 ise c3’e baskı yapar.',
      diger: [
        { move: '8...O-O', text: 'Motorun ilk tercihi (Motor: +0.3); 9.Qe2 Ne4 gibi fikirlerle aktif oyun.' },
        { move: '8...a5', text: 'b4 filini sağlamlaştırır (Motor: +0.4); ama bir tempo harcar.' },
      ],
    },
    '9w': {
      text: '9.Nh4: At kenara gider ve f5 filine saldırır.',
      amac: 'f5 filini kovalayıp fil çiftini almak; bu arada f3 ve e4 ile merkezi kurmak.',
      neden: 'Ana yol 9.Qe2 ve e4’tür. Botvinnik daha somut bir plan seçti: fil g6’ya çekilirse at onu her an alabilir, f3 ile de e4 rahatça hazırlanır. Bunun bedeli atın bir süre kenarda kalmasıdır.',
      diger: [
        { move: '9.Qe2', text: 'Ana yol (Motor: +0.4); 9...O-O 10.e4 Bg6 11.Bd3 ile merkez kurulur.' },
        { move: '9.Bd3', text: 'Fil değişimi önerir (Motor: +0.4); 9...Bxd3 10.Qxd3 O-O 11.e4 ile sade bir oyun.' },
        { move: '9.Qb3', text: 'Hollanda varyantının beraberliğe yakın sayılan yolu; b7’ye baskı yapar ama fazla iddiası yoktur.' },
      ],
    },
    '9b': {
      text: 'Siyah rok yapar ve fili f5’te bırakır.',
      amac: 'Gelişimi tamamlamak; fili şimdilik çekmeyip Beyazın kararını beklemek.',
      neden: '10.Nxf5 exf5 sonrası Siyahın çift f-piyonu kötü değildir: f5 piyonu e4’ü kontrol eder ve e-hattı açılır. Bu yüzden Siyah fili hemen çekmeye gerek görmedi. 9...Bg6 10.Nxg6 hxg6 de mümkündü.',
      diger: [
        { move: '9...Bg6', text: 'Fili hemen çekmek (Motor: +0.3); 10.Nxg6 hxg6 ile Beyaz fil çiftini alır, ama e4 henüz hazır değildir.' },
        { move: '9...Bg4', text: 'Fil g4’e gider (Motor: +0.5); 10.f3 Bh5 11.g4 Bg6 sonrası Beyaz şah kanadında yer kazanır.' },
      ],
    },
    '10w': {
      text: 'f3 ile Beyaz e4 ilerleyişini hazırlar.',
      amac: 'e4’ü desteklemek ve f5 filini geri çekilmeye zorlamak.',
      neden: '10.Nxf5 exf5 Siyaha e4 üzerinde kontrol verirdi. f3 ile Beyaz önce e4’ü güvenceye alır; fil g6’ya çekildiğinde Nxg6 hâlâ elde olur. Bedeli e3 piyonunun zayıflaması ve g1-a7 çaprazının açılmasıdır (sonra 16...Qxc5+ şahı ile bu ortaya çıkacak).',
      diger: [
        { move: '10.Nxf5', text: 'Fil çiftini hemen almak (Motor: +0.1); 10...exf5 sonrası Siyahın f5 piyonu e4’ü tutar ve Siyah rahat oynar.' },
        { move: '10.Qe2', text: 'Motorun tercihi (Motor: +0.2); 10...Ne8 11.Nxf5 exf5 12.f3 gibi.' },
        { move: '10.h3', text: 'Beklemeci (Motor: +0.1); fili çekme kararını Siyaha bırakır.' },
      ],
    },
    '10b': {
      text: 'Fil g6’ya çekilir.',
      amac: 'Fili korumak; Nxg6 hxg6 sonrası h-hattını açık tutmak.',
      neden: 'e4 tehdidi geldiğinde fil zaten çekilmek zorundaydı; g6 en doğal karedir. Nxg6 hxg6 ile Siyahın piyon yapısı bozulmaz, h-hattı Siyah kaleye açılır. Motor bunu tek iyi hamle sayıyor (0.0); 10...Rc8 +0.3.',
      diger: [
        { move: '10...Rc8', text: 'Fili yerinde bırakmak (Motor: +0.3); 11.e4 Bg6 12.Qb3 ile Beyaz tempo kazanır.' },
        { move: '10...Qa5', text: 'b4 filini korur (Motor: +0.4), ama 11.Na2 Be7 12.b4 ile Beyaz kanatta yer kazanır.' },
      ],
    },
    '11w': {
      text: 'e4 ile Beyaz merkezi kurar: d4 ve e4 yan yana.',
      amac: 'Merkezde yer kazanmak ve ileride e5 ile Siyah atı kovmak.',
      neden: 'Bütün hazırlık bunun içindi. Fakat c3 atı hâlâ bağlıdır ve d4 piyonu sadece vezirle korunur; Siyahın ...e5 darbesi buna dayanır. 11.Kh1 ile önce şah güvene alınabilirdi.',
      diger: [
        { move: '11.Kh1', text: 'Motorun hafif tercihi (Motor: +0.0); g1-a7 çaprazındaki şah çekmelere önceden önlem.' },
        { move: '11.Qb3', text: 'b7’ye baskı (Motor: 0.0); 11...Qb6 ile Siyah vezir değişimi önerir.' },
      ],
    },
    '11b': {
      text: 'Siyah hemen ...e5 ile merkeze karşı çıkar.',
      amac: 'Beyazın merkezini sorgulamak; d-hattını açmak ve d4 piyonunu baskı altına almak.',
      neden: 'Beyaz merkezi tamamen yerleştirmeden önce vurmak gerekiyordu. b4 fili c3’ü bağladığı için d4 zayıftır; 12.d5 merkezi kapatır ama c4 filini sınırlar, 12.dxe5 Nxe5 ise Siyah atı merkeze getirir. Motor bunu en iyi hamle olarak görüyor (−0.0).',
      diger: [
        { move: '11...c5', text: 'Diğer kırılma (Motor: +0.2); 12.Na2 Ba5 13.dxc5 sonrası Siyah piyonu geri alır, ama daha yavaştır.' },
        { move: '11...Rc8', text: 'Bekleme (Motor: +0.2); 12.Be2 ve Nxg6 ile Beyaz rahatça yerleşir.' },
      ],
    },
    '12w': {
      text: '12.Nxg6: Beyaz fil çiftini alır.',
      amac: 'Uzun vadeli bir artı (iki fil) elde etmek ve kenardaki atı oyuna değer bir şeyle değiştirmek.',
      neden: 'Merkez gerginken h4 atı Nf5’e gidemez ve kenarda pasif kalır; şimdi alma zamanıdır. Motor 12.d5 ve 12.dxe5’i aynı düzeyde görüyor (0.0 / −0.1), ama Botvinnik fil çiftini tercih etti. Not: burada 12...exd4?? 13.Nxf8 bir kale kaybettirir.',
      diger: [
        { move: '12.d5', text: 'Merkezi kapatır (Motor: 0.0); 12...Nb6 13.Bb3 cxd5 sonrası c4 fili sınırlanır.' },
        { move: '12.dxe5', text: 'Merkezi açar (Motor: −0.1); 12...Nxe5 13.Be2 Qb6+ 14.Kh1 ile Siyah aktiftir.' },
      ],
    },
    '12b': {
      text: 'Siyah h-piyonuyla geri alır.',
      amac: 'Malzemeyi eşitlemek ve piyonu merkeze yaklaştırmak; h-hattını Siyah kaleye açmak.',
      neden: 'Bu, tek iyi hamledir. 12...fxg6 f7’yi ve şahın önünü zayıflatırdı; 12...exd4?? 13.Nxf8 kale kaybettirir (+4.5); 12...Bxc3? 13.bxc3 hxg6 ise Beyazın fillerine daha da serbestlik verir (+2.1).',
      diger: [
        { move: '12...Bxc3?', text: '13.bxc3 hxg6 14.Ba3 c5 sonrası Beyazın iki fili çok güçlüdür (Motor: +2.1).' },
        { move: '12...exd4??', text: '13.Nxf8 Bxf8 sonrası Beyaz kalite kazanır (Motor: +4.5).' },
      ],
    },
    '13w': {
      text: 'Fil e3’e gelir ve d4’ü destekler.',
      amac: 'Merkezi korumak ve kara kareli fili g1-a7 çaprazına yerleştirmek.',
      neden: 'd4 saldırı altındadır; e3 fili hem onu korur hem de g1-a7 çaprazını kapatır. Motor üç seçeneği (13.dxe5, 13.d5, 13.Be3) eşit görüyor (−0.1).',
      diger: [
        { move: '13.dxe5', text: 'Merkezi açar (Motor: −0.1); 13...Nxe5 14.Be2 Qb6+ 15.Kh1 ile oyun dengede.' },
        { move: '13.d5', text: 'Merkezi kapatır (Motor: −0.1); 13...Nb6 14.Bb3 cxd5 ile Siyah karşı oyun bulur.' },
      ],
    },
    '13b': {
      text: 'Vezir e7’ye gelir ve e-hattına yerleşir.',
      amac: 'e5’i desteklemek ve vezirle Beyazın e4 ile c5 karelerine bakmak.',
      neden: 'Smislov değişimi bir hamle erteledi. Motor 13...exd4’ü biraz daha iyi buluyor (−0.2): 14.Bxd4 Qa5 ile Siyah vezir hemen aktifleşir. 13...Qe7 de sağlamdır (0.0).',
      diger: [
        { move: '13...exd4', text: 'Motorun tercihi (Motor: −0.2); 14.Bxd4 Qa5 15.Kh1 Rad8 ile Siyah iyi gelişmiştir.' },
        { move: '13...Qb6', text: 'b2 ve g1-a7 çaprazına bakar (Motor: +0.1); 14.Kh1 Rad8 15.Ne2 ile Beyaz konumunu toplar.' },
      ],
    },
    '14w': {
      text: 'Vezir e2’ye gelir; c4 filini ve e4’ü destekler.',
      amac: 'Taşları birleştirmek ve d1’i kaleye bırakmak.',
      neden: 'Vezir e2’de c4 filini korur, böylece ...exd4 sonrası fil asılı kalmaz. Motor 14.Qe2, 14.dxe5 ve 14.Ba2’yi eşit görüyor (0.0).',
      diger: [
        { move: '14.dxe5', text: 'Merkezi açar (Motor: 0.0); 14...Bc5 15.Qe2 Nxe5 ile Siyah taşları aktifleşir.' },
        { move: '14.Ba2', text: 'Fili önceden güvene alır (Motor: 0.0); daha sonra oyunda da bu kareye gidecek.' },
      ],
    },
    '14b': {
      text: 'Siyah e5’te değişim yapar.',
      amac: 'Merkezi açmak ve Beyazın d4’teki filine karşı ...Bc5 ile değişim hazırlamak.',
      neden: 'Gergin merkezi tutmak Siyahın aleyhine olabilirdi (Beyaz d5 veya dxe5 seçimini kendisi yapardı). Değişimle Siyah d-hattını açar ve kaleleri d8’e getirmeye hazırlanır. Motor bu hamleyi en iyi buluyor (−0.1).',
      diger: [
        { move: '14...Rfd8', text: 'Bekleme (Motor: 0.0); 15.dxe5 Nxe5 16.Ba2 Rd3 ile Siyah aktif.' },
        { move: '14...Rad8', text: '15.d5 ile Beyaz merkezi kapatır (Motor: +0.2).' },
      ],
    },
    '15w': {
      text: 'Fil d4’te geri alır ve merkezde güçlü bir kareye yerleşir.',
      amac: 'Malzemeyi geri almak ve fili merkezde tutmak.',
      neden: 'Bu doğal ve tek iyi geri alıştır. 15.Bxf7+? Rxf7 16.Bxd4 bir taş kaybettirir (Motor: −4.1).',
      diger: [
        { move: '15.Bxf7+?', text: '15...Rxf7 16.Bxd4 sonrası Beyaz bir taş eksik kalır (Motor: −4.1).' },
      ],
    },
    '15b': {
      text: 'Fil c5’e gelir ve d4 filine değişim önerir.',
      amac: 'Beyazın fil çiftini azaltmak ve şah çekerek tempo kazanmak.',
      neden: 'Smislov iki fil avantajını hemen kırmak istedi. Ancak değişimden sonra Beyaza a2-g8 çaprazında çok güçlü bir fil kalacak; Siyahın elinde ise iki at olacak. Motor 15...Rad8 veya 15...Rfd8’i biraz daha iyi buluyor (0.0); maç hamlesiyle +0.3.',
      diger: [
        { move: '15...Rad8', text: 'Motorun tercihi (Motor: 0.0); 16.Ba2 Rfe8 17.Rad1 Bc5 ile değişim bir hamle sonra gelir.' },
        { move: '15...Rfe8', text: 'Önce kaleyi e-hattına getirir (Motor: +0.1); 16.Kh1 Rad8 17.Rad1 Bc5.' },
      ],
    },
    '16w': {
      text: 'Kara kareli filler değişir.',
      amac: 'Siyahın aktif filini oyundan çıkarmak; beyaz kareli fili tek ve güçlü fil olarak bırakmak.',
      neden: '16.Rad1 Bxd4+ 17.Rxd4 Ne5 Siyaha merkezde güzel bir at verirdi (−0.1). 16.Be3 ise Siyahın değişime girip girmemeyi seçmesine izin verir. Değişimle Beyaz, Siyahın e5 karesini kullanan atlarına karşı uzun vadeli bir fil üstünlüğü bekler.',
      diger: [
        { move: '16.Rad1', text: '16...Bxd4+ 17.Rxd4 Ne5 18.f4 sonrası Siyah at güzel kareler bulur (Motor: −0.1).' },
        { move: '16.Be3', text: 'Değişimi reddeder (Motor: −0.3); 16...Rad8 17.Ba2 Rfe8 ile Siyah rahat.' },
      ],
    },
    '16b': {
      text: 'Vezir şah çekerek geri alır.',
      amac: 'Tempo kazanmak ve veziri c5’te aktif tutmak.',
      neden: '16...Nxc5 (+0.6) da mümkündü ama 17.e5 ile at kovulur. Vezirle almak hem şah çeker hem de c4 filine baskı yapar; 10.f3’ün açtığı g1-a7 çaprazı burada işe yarar.',
      diger: [
        { move: '16...Nxc5', text: '17.e5 Nfd7 18.Rae1 g5 ile Beyaz merkezde yer kazanır (Motor: +0.6).' },
      ],
    },
    '17w': {
      text: 'Şah h1’e gider.',
      amac: 'Şahı g1-a7 çaprazından çıkarmak; c4 filini savunmaya devam etmek.',
      neden: 'Diğer savunmalar kötüdür: 17.Rf2? Ne5 ile Siyah c4 filine baskı yapar ve aktifleşir (Motor: −1.1), 17.Qf2?? Qxc4 ise taş kaybettirir (−4.5). Kh1 tek sağlam yoldur.',
      diger: [
        { move: '17.Rf2?', text: '17...Ne5 18.Ba2 Rfd8 sonrası Siyahın atı ve kaleleri çok aktif (Motor: −1.1).' },
        { move: '17.Qf2??', text: '17...Qxc4 ile Siyah bir taş kazanır (Motor: −4.5).' },
      ],
    },
    '17b': {
      text: 'Siyah ...g5 ile f4 karesini kontrol eder.',
      amac: 'Beyazın f4 ilerleyişini engellemek; atları için e5 karesini güvene almak.',
      neden: 'Smislov, Beyazın f4 ve e5 ile merkezde yer almasını önlemek istedi. Fakat g5 piyonu sonra bir hedef olur: Beyaz g3 ve f4 ile onu değiştirince f-hattı Beyaz lehine açılır. Motor 17...Rae8 veya 17...Nb6’yı biraz daha iyi görüyor (+0.3; derinlik 20’de oyun hamlesi +0.5).',
      diger: [
        { move: '17...Rae8', text: 'Kaleyi e-hattına getirir (Motor: +0.3); 18.Ba2 Nb6 19.Rfd1 Nbd5 ile at d5’e yerleşir.' },
        { move: '17...Nb6', text: 'c4 filine saldırır (Motor: +0.3); 18.Ba2 Rae8 19.Rfd1 a5.' },
        { move: '17...Qh5', text: 'Vezir şah kanadına (Motor: +0.3); 18.Rae1 Ne5 19.f4 Nxc4 ile filler değişir.' },
      ],
    },
    '18w': {
      text: 'g3 ile Beyaz f4’ü yeniden hazırlar.',
      amac: 'g5 piyonunu sorgulamak ve f4 ile f-hattını açmak.',
      neden: 'f4 ilerleyişi Beyazın ana planıdır; g3 ile f4 piyonu desteklenir ve f4’te alış olursa g-piyonuyla geri alınır. Motor bu hamleyi en iyi buluyor (+0.6). 18.Bb3? ise Siyaha zaman verir (−0.2).',
      diger: [
        { move: '18.Ba2', text: 'Önce fili güvene almak (Motor: +0.2); 18...Rad8 19.g3 Rfe8 ile aynı yapı.' },
        { move: '18.Rad1', text: '18...Ne5 19.Ba2 Rfd8 ile Siyah d-hattını ele geçirir (Motor: −0.2).' },
      ],
    },
    '18b': {
      text: 'Kale d8’e, açık d-hattına gelir.',
      amac: 'd-hattını kontrol etmek ve d3 karesine baskı yapmak.',
      neden: 'Açık hat kaleler içindir. Motor 18...Rfe8’i aynı güçte görüyor (+0.5); ikisinden sonra da Beyaz f4 ile planını sürdürür.',
      diger: [
        { move: '18...Rfe8', text: 'Aynı değerde (Motor: +0.5); 19.f4 Rad8 20.Rac1 gxf4.' },
        { move: '18...Nb6', text: 'c4 filini kovalar (Motor: +0.7); 19.Ba2 Rae8 20.Rac1 Qb4.' },
      ],
    },
    '19w': {
      text: 'Fil a2’ye çekilir.',
      amac: 'Fili ...Nb6 veya ...Ne5 saldırılarından korumak ve a2-g8 çaprazında tutmak.',
      neden: 'a2’de fil korunur ve f7’ye bakmaya devam eder; bu çapraz oyunun sonunda belirleyici olacak (33.Bxd5). Motor 19.f4’ü daha keskin buluyor (+0.6 / +0.3).',
      diger: [
        { move: '19.f4', text: 'Motorun tercihi (Motor: +0.6); 19...Rfe8 20.Rac1 gxf4 21.gxf4 ile f-hattı hemen açılır.' },
        { move: '19.a5', text: 'Kanatta yer (Motor: 0.0); 19...Ne5 20.Ba2 Rd3 ile Siyah kale aktifleşir.' },
      ],
    },
    '19b': {
      text: 'İkinci kale e8’e gelir.',
      amac: 'e4 piyonuna baskı yapmak ve iki kaleyi merkez hatlarında toplamak.',
      neden: 'e4 piyonu Beyazın merkezinin kalbidir; Siyah onu iki kez saldırı altına almak istiyor. Motor bu hamleyi en iyi buluyor (+0.2). 19...g6 (+0.4) şah kanadını zayıflatırdı.',
      diger: [
        { move: '19...g6', text: 'Daha yavaş (Motor: +0.4); 20.f4 gxf4 21.gxf4 Qh5 ile Beyazın merkezi güçlenir.' },
        { move: '19...b6', text: 'Kanadı sağlamlaştırır (Motor: +0.6), ama Beyaz f4 ile planını hızlandırır.' },
      ],
    },
    '20w': {
      text: 'Beyaz kalesini d1’e, açık hatta getirir.',
      amac: 'Siyahın d-hattı kontrolüne karşı çıkmak ve kale değişimine hazır olmak.',
      neden: 'Botvinnik önce d-hattını dengelemeyi seçti; f4 sonraya kaldı. Motor 20.f4’ü biraz daha iyi buluyor (+0.2 ile −0.2). Kale değişimi, Beyazın bir sonraki planı olan e5 ve f4 için Siyahın karşı oyununu azaltır.',
      diger: [
        { move: '20.f4', text: 'Motorun tercihi (Motor: +0.2); 20...gxf4 21.gxf4 Qh5 22.Qg2 ile f-hattı açılır.' },
        { move: '20.Qg2', text: 'Vezir şah kanadına (Motor: −0.1); 20...b5 21.axb5 cxb5 ile Siyah kanatta oyun bulur.' },
      ],
    },
    '20b': {
      text: 'At f8’e gider; e6 ve g6 karelerine yönelir.',
      amac: 'Atı e6’ya getirip d4 ve f4 karelerini kontrol etmek, g5’i desteklemek.',
      neden: 'At e6’dan f4’ü tutacak ve Beyazın f4 ilerleyişini zorlaştıracak. Ancak bu manevra e4’ten baskıyı alır ve d-hattında Beyaza kale değişimi fırsatı verir. Motor 20...Kf8 ve 20...Qb4’ü biraz daha iyi görüyor (−0.1 / 0.0).',
      diger: [
        { move: '20...Kf8', text: 'Motorun tercihi (Motor: −0.1); 21.Rd2 Ne5 22.Rxd8 Rxd8 ile şah oyun sonuna hazırlanır.' },
        { move: '20...Qb4', text: 'b2 piyonuna saldırır (Motor: 0.0); 21.Qe3 a5 ile Siyah kanatta karşı oyun.' },
      ],
    },
    '21w': {
      text: 'Kaleler d-hattında değişir.',
      amac: 'Siyahın d-hattı kontrolünü bitirmek ve e5 ilerleyişine yol açmak.',
      neden: 'Bir çift kale değişince e8 kalesi d8’e gelmek zorunda kalır ve e4 üzerindeki baskı kalkar; böylece 22.e5 mümkün olur. Motor 21.Rde1’i aynı güçte görüyor (0.0).',
      diger: [
        { move: '21.Rde1', text: 'Kaleleri tutmak (Motor: 0.0); 21...Ng6 22.Qg2 Qe5 ile Siyah e5’e yerleşir.' },
        { move: '21.Rfe1', text: 'Daha pasif (Motor: −0.2); 21...Rxd1 22.Rxd1 Re7 ile Siyah hatları tutar.' },
      ],
    },
    '21b': {
      text: 'Siyah kaleyle geri alır.',
      amac: 'Malzemeyi eşitlemek ve d-hattını elinde tutmak.',
      neden: 'Zorunlu bir geri alış: 21...Qxc3?? 22.Rxe8 veya başka bir hamle bir kale kaybettirir (Motor: +6).',
    },
    '22w': {
      text: '22.e5! Piyon f6 atını kovalar ve merkezde yer tutar.',
      amac: 'f6 karesini almak, Siyah atı merkezden uzaklaştırmak ve ileride f4-f5 ile birlikte şah kanadına ilerlemek.',
      neden: 'e8 kalesi d8’e geçince e5’i durduracak bir taş kalmadı. Bu hamle d5’te bir değişim zinciri başlatır ve Siyahın piyonunu d5’te sabitler. Motor eşit görüyor (0.0), ama yapının uzun vadeli artıları Beyazdadır: koç başı e5 piyonu ve a2 filinin hedefleri.',
      diger: [
        { move: '22.f4', text: 'Önce f4 (Motor: −0.1); 22...gxf4 23.e5 Nd5 ile benzer konumlar.' },
        { move: '22.Re1', text: 'e4’ü korur (Motor: −0.2); 22...Qe5 23.Qe3 Ne6 ile Siyah e5’e yerleşir.' },
      ],
    },
    '22b': {
      text: 'At d5’e gelir.',
      amac: 'Merkezde güçlü bir kareye yerleşmek ve c3 atına değişim önermek.',
      neden: 'Atın en iyi karesi budur; 22...N6d7 (+1.3) atı pasifleştirir ve 22...Re8 (+0.4) e5’i kazanmayı umar ama 23.f4 ile Beyaz merkezi sağlamlaştırır.',
      diger: [
        { move: '22...Re8', text: '23.f4 gxf4 24.gxf4 Nd5 ile Beyaz piyonları sağlamdır (Motor: +0.4).' },
        { move: '22...N6d7', text: 'At pasif kalır (Motor: +1.3); 23.f4 gxf4 24.gxf4 ile Beyaz hızlanır.' },
      ],
    },
    '23w': {
      text: 'Atlar d5’te değişir.',
      amac: 'Siyahın güçlü atını oyundan çıkarmak ve d5’te sabit bir piyon oluşturmak.',
      neden: 'cxd5 sonrası d5 piyonu a2 filinin hedefi olur ve Siyahın e6 atı için tek destek noktası kalır. Motor 23.Ne4 ve 23.f4’ü aynı düzeyde görüyor (0.0).',
      diger: [
        { move: '23.Ne4', text: 'Atı tutmak (Motor: 0.0); 23...Qe7 24.Qd2 Qxe5 25.Qxg5 ile piyonlar değişir.' },
        { move: '23.f4', text: 'Önce f4 (Motor: 0.0); 23...gxf4 24.Nxd5 cxd5 25.gxf4 ile aynı yapıya döner.' },
      ],
    },
    '23b': {
      text: 'Siyah c-piyonuyla geri alır; d5’te sabit bir piyon oluşur.',
      amac: 'Malzemeyi eşitlemek ve merkezde bir piyon tutmak.',
      neden: '23...Rxd5? 24.Bxd5 cxd5 25.Qb5 bir kalite kaybettirir (+2.6). c-piyonuyla almak tek iyi yoldur; d5 piyonu ileride zayıf olabilir, ama şimdilik Siyahın merkezini korur.',
      diger: [
        { move: '23...Rxd5?', text: '24.Bxd5 cxd5 25.Qb5 Qd4 sonrası Beyaz kalite fazlasıdır (Motor: +2.6).' },
      ],
    },
    '24w': {
      text: 'Vezir d2’ye gelir; g5 piyonuna ve d-hattına bakar.',
      amac: 'g5’e baskı yapıp Siyahı bu piyonu korumaya zorlamak; d5 piyonunu da gözetmek.',
      neden: 'd2-g5 çaprazında vezir g5’i tehdit eder; Siyah bir taşı savunmaya ayırmak zorunda kalır. Motor bu hamleyi en iyi buluyor (0.0).',
      diger: [
        { move: '24.f4', text: 'Doğrudan (Motor: −0.0); 24...gxf4 25.gxf4 Qd4 ile Siyah vezir merkeze gelir.' },
        { move: '24.Rd1', text: 'd5’e baskı (Motor: −0.3); 24...Ne6 25.Kg2 Qc6 ile Siyah rahattır.' },
      ],
    },
    '24b': {
      text: 'At e6’ya gelir ve g5’i korur.',
      amac: 'g5’i savunmak, f4 ve d4 karelerini kontrol etmek.',
      neden: 'At e6’da hem g5’i hem de f4’ü tutar; Beyazın f4 ilerleyişini zorlaştırır. Motor 24...Rd7, 24...b5 ve 24...Qc6’yı eşit görüyor (0.0); oyun hâlâ dengededir.',
      diger: [
        { move: '24...Rd7', text: 'Motorun tercihi (Motor: 0.0); 25.Rc1 Qb6 26.Rc8 g6 ile Siyah sağlam.' },
        { move: '24...b5', text: 'g5’i feda edip kanatta oyun (Motor: 0.0); 25.Qxg5 Ne6 26.Qh4 bxa4.' },
      ],
    },
    '25w': {
      text: 'f4 ile Beyaz g5 piyonunu sorgular.',
      amac: 'g5 piyonunu değiştirip f-hattını açmak; f-piyonunu f5’e ilerletmeye hazırlanmak.',
      neden: 'Bu, 18.g3’ten beri beklenen hamledir. gxf4 gxf4 sonrası Beyazın e5 ve f4 piyonları yan yana durur; f5 ilerleyişi e6 atını kovalayacaktır. Motor en iyi hamle olarak görüyor (0.0).',
      diger: [
        { move: '25.b4', text: 'Vezirlere kanat oyunu (Motor: −0.1); 25...Qd4 26.Qxd4 Nxd4 ile vezirler değişir.' },
        { move: '25.Rc1', text: 'c-hattını almak (Motor: −0.2); 25...Qe7 ile Siyah e5’e baskı yapar.' },
      ],
    },
    '25b': {
      text: 'Siyah f4’te değişir.',
      amac: 'g5 piyonunu kaybetmemek; f4’te alarak Beyaz piyonunu g-hattından uzaklaştırmak.',
      neden: '25...g6 26.f5 gxf5 27.Rxf5 Beyazın kalesini aktifleştirir (+0.2); 25...g4 ise Siyahın piyonunu kanatta yalnız bırakır (+0.5). Değişim en iyi yoldur (+0.1).',
      diger: [
        { move: '25...g6', text: '26.f5 gxf5 27.Rxf5 Rd7 ile Beyaz kalesi aktifleşir (Motor: +0.2).' },
        { move: '25...g4', text: '26.b4 Qe7 27.f5 Ng5 ile Beyaz merkezde rahattır (Motor: +0.5).' },
      ],
    },
    '26w': {
      text: 'Beyaz g-piyonuyla geri alır.',
      amac: 'e5 ve f4 piyonlarını yan yana tutmak; f5 ilerleyişine hazır olmak.',
      neden: 'Zorunludur: 26.Rc1 Qe3 veya 26.Qd1 fxg3 bir piyon kaybettirir (Motor: −1.5 / −2.1). gxf4 ile Beyazın şahının önü biraz açılır, ama Siyahın da g-hattına kale getirecek zamanı yoktur.',
      diger: [
        { move: '26.Rc1?', text: '26...Qe3 27.Qxe3 fxe3 sonrası Siyah bir piyon fazlası (Motor: −1.5).' },
      ],
    },
    '26b': {
      text: 'Vezir c6’ya gider. Küçük bir kusur: f5 tempo ile gelir.',
      amac: 'c-hattını almak, a4 piyonuna ve uzun çapraza bakmak; d5’i korumak.',
      neden: 'Smislov aktif bir vezir aradı, ama vezir c5’ten çekilince f4-f5 ilerleyişine karşı en önemli kontrol kayboldu: 27.f5 e6 atını tempo ile kovalar. Motor 26...b6 veya 26...Kf8’i öneriyor (0.0 / +0.1); 26...Qd4 vezirleri değişip saldırı ihtimalini ortadan kaldırırdı (+0.2). Maç hamlesiyle +0.4 (derinlik 20).',
      diger: [
        { move: '26...Kf8', text: 'Şah merkeze yaklaşır (Motor: +0.1); 27.Rc1 Qd4 28.Qxd4 Nxd4 ile vezirler değişir.' },
        { move: '26...Qd4', text: 'Vezir değişimi önerir (Motor: +0.2); 27.Qxd4 Nxd4 28.Rd1 Ne2 ile oyun sonu dengede.' },
        { move: '26...b6', text: 'Motorun ilk tercihi (Motor: 0.0); 27.Rd1 d4 28.f5 Nc7 ile Siyah at oyunda kalır.' },
      ],
    },
    '27w': {
      text: '27.f5! At e6’dan kovalanır ve piyonlar ilerler.',
      amac: 'e5-f5 piyon ikilisini oluşturmak ve Siyahın şah kanadına doğru ilerlemek.',
      neden: 'Tempo ile gelen bu hamle Siyahın en iyi savunma taşını uzaklaştırır. f5 piyonu e6 ve g6 karelerini tutar, ileride f6 ile şahın önünü açar. 27.Qg2?! d4 ile vezirler değişir ve avantaj kaybolur (0.0).',
      diger: [
        { move: '27.Qg2', text: '27...d4 28.f5 Qxg2+ 29.Kxg2 ile vezirler değişir ve konum eşittir (Motor: 0.0).' },
        { move: '27.a5', text: '27...d4+ 28.Qg2 d3 ile Siyah d-piyonu tehlikeli olur (Motor: −0.2).' },
      ],
    },
    '27b': {
      text: 'At c5’e gider ve d3 karesine yönelir.',
      amac: 'Atı aktif tutmak ve d3 üzerinden Beyazın kanatlarına saldırmak.',
      neden: 'Smislov karşı oyun aradı, ama at şah kanadından uzaklaştı. Motor 27...Nc7’yi daha iyi buluyor (+0.3): 28.Rc1 Qxa4 29.Bb1 sonrası Siyah bir piyon kazanır ve at e8 üzerinden savunmaya döner. Maç hamlesiyle +0.8.',
      diger: [
        { move: '27...Nc7', text: 'Motorun tercihi (Motor: +0.3); 28.Rc1 Qxa4 29.Bb1 Rd7 ile Siyah a4’ü alır.' },
        { move: '27...Nf8', text: 'At savunmaya (Motor: +1.3); 28.Qd4 Nd7 29.Rd1 sonrası Siyah pasif kalır.' },
      ],
    },
    '28w': {
      text: 'Vezir g5’e gelir ve g7 ile d8’e baskı yapar.',
      amac: 'g7’ye baskıyı başlatmak ve kaleyi g-hattına getirmeye hazırlanmak.',
      neden: 'g5’te vezir hem g7’yi hem d8 kalesini hedefler; Siyah bir savunma hamlesi yapmak zorunda kalır. Motor bu hamleyi açık ara en iyi buluyor (+1.0); 28.Rc1 ve 28.Qf2 eşitliğe döner (0.0).',
      diger: [
        { move: '28.Rc1', text: '28...d4+ 29.Kg1 d3 30.f6 ile Siyah d-piyonu karşı oyun verir (Motor: 0.0).' },
        { move: '28.Qf2', text: '28...Qxa4 29.Qxc5 Qxa2 ile malzeme eşit (Motor: 0.0).' },
      ],
    },
    '28b': {
      text: 'Hata. Kale d7’ye çekilir; ...f6 bir hamle gecikir.',
      amac: 'd8 kalesini vezirin saldırısından kurtarmak ve g7’yi yatay boyunca korumak.',
      neden: 'Kale d7’de g7’yi korur ama Beyaza 29.Rg1 için zaman verir. Motor 28...f6’yı tek doğru hamle sayıyor: 29.exf6? Qxf6 eşitlik (+0.1), 29.Qg2 Nd3 30.Rg1 ile Beyaz biraz üstün (+0.9). Maç hamlesiyle +2.4 (derinlik 20).',
      diger: [
        { move: '28...f6', text: 'Motorun tercihi (Motor: +0.9); 29.Qg2 Nd3 30.Rg1 Rd7 31.e6 Re7 32.Qxd5 Qxd5+ 33.Bxd5 ile Beyaz biraz üstün ama Siyah dayanır.' },
        { move: '28...Re8', text: '29.Rg1 Kf8 30.Qxg7+ Ke7 31.Rc1 ile Siyahın şahı açıktır (Motor: +2.5).' },
      ],
    },
    '29w': {
      text: 'Kale g1’e gelir; g7’ye baskı ikiye katlanır.',
      amac: 'g7’ye saldırmak ve f6 veya e6 ile şahın önünü açmak.',
      neden: 'Vezir ve kale g-hattında birleşince Siyahın savunması zorlaşır: 29...g6? 30.e6! ve 29...Kf8? 30.Qxg7+ kaybeder. Motor en iyi hamle olarak görüyor (+2.6); 29.Rc1 (+2.0) da güçlüdür.',
      diger: [
        { move: '29.Rc1', text: '29...Ne4 30.Rxc6 Nxg5 31.Rd6 ile Beyaz üstün ama vezirler değişmiş (Motor: +2.0).' },
        { move: '29.a5', text: '29...Qa4 30.Bb1 Ne4 ile Siyah karşı oyun bulur (Motor: +0.5).' },
      ],
    },
    '29b': {
      text: 'Siyah ...f6 ile vezire saldırır ve e5’i sorgular.',
      amac: 'e5-f5 zincirini kırmak ve vezire tempo ile saldırmak.',
      neden: 'Bir hamle önce iyi olan fikir artık geç kalmıştır: 30.exf6 g7’yi tehdit eder. Motor 29...g6’yı biraz daha dirençli buluyor (+2.7): 30.e6 Nxe6 31.fxe6 Qxe6 sonrası Siyahın piyonu eksik ama oyun devam eder. Maç hamlesiyle +3.8.',
      diger: [
        { move: '29...g6', text: '30.e6 Nxe6 31.fxe6 Qxe6 32.Qg2 sonrası Beyaz bir taş fazlası ama Siyahın iki piyonu var (Motor: +2.7).' },
        { move: '29...Kf8?', text: '30.Qxg7+ Ke7 31.e6 d4+ ile Siyahın şahı çok açık (Motor: +4.5).' },
      ],
    },
    '30w': {
      text: '30.exf6! e-piyonu f6’yı alır; g7 baskı altındadır.',
      amac: 'g7’ye üçüncü bir saldırgan eklemek ve f-piyonunu f7’ye kadar sürmek.',
      neden: 'Vezirle almak cazip görünür, ama 30.Qxf6? Nd3 31.Qxc6 bxc6 sonrası vezirler değişir ve Siyah kurtulur (+0.3). Piyonla almak vezirleri tahtada bırakır ve g7 üç taşın hedefi olur. Motor: +4.1.',
      diger: [
        { move: '30.Qxf6?', text: '30...Nd3 31.Qxc6 bxc6 32.e6 Rb7 ile Siyah dengeyi bulur (Motor: +0.3).' },
        { move: '30.Qh5', text: '30...Nd3 31.exf6 Rf7 32.Qf3 Nb4 ile Siyah taşları savunmaya döner (Motor: +0.2).' },
      ],
    },
    '30b': {
      text: 'At e4’e gelip vezire saldırır.',
      amac: 'Veziri g5’ten kovmak ve f6 piyonunu almak.',
      neden: 'Smislov aktif savunma aradı, ama at e4’te f7+ ve Qd8+ kombinasyonuna izin verdi. 30...Nd3 (+3.8) daha dirençliydi: 31.Qg3 Nb4 32.fxg7 Qd6 33.Qxd6 Rxd6 ile Siyah vezirleri değişir; Beyaz yine çok üstündür.',
      diger: [
        { move: '30...Nd3', text: '31.Qg3 Nb4 32.fxg7 Qd6 33.Qxd6 Rxd6 ile Siyah oyun sonuna kaçar (Motor: +3.8).' },
        { move: '30...Nb3', text: '31.Bxb3 b5 32.Qg6 Rf7 sonrası Siyah bir taş eksik (Motor: +6.4).' },
      ],
    },
    '31w': {
      text: '31.f7+! Piyon fedası kaleyi f7’ye çeker.',
      amac: 'd8 karesini boşaltmak, Siyah şahı h7’ye ve kaleyi f7’ye çekip a2 filinin çatalını hazırlamak.',
      neden: 'Vezir saldırı altında olsa da Beyaz onu kurtarmak için zaman harcamaz. 31.Qe3 Nxf6 ile Siyah her şeyi korur (0.0). Şah çekmesi Siyaha seçim hakkı vermez: 31...Kxf7 32.Qxg7+ ve 31...Kf8 32.Qxg7+ Ke7 33.f8=Q# daha da kötüdür.',
      diger: [
        { move: '31.Qe3', text: '31...Nxf6 32.Qxa7 Re7 ile Siyah konumunu toplar (Motor: 0.0).' },
        { move: '31.Qf4', text: '31...Nxf6 32.Rc1 Qa6 ile Siyah taşları savunmaya döner (Motor: −0.2).' },
      ],
    },
    '31b': {
      text: 'Siyah kaleyle f7’yi alır.',
      amac: 'Piyonu almak ve şahı açık g-hattından uzak tutmak.',
      neden: 'Diğer seçenekler daha kötüdür: 31...Kxf7 32.Qxg7+ Ke8 33.Qh8+ ile Siyah şah tamamen açılır (+5.6), 31...Kf8?? 32.Qxg7+ Ke7 33.f8=Q# mattır.',
      diger: [
        { move: '31...Kxf7', text: '32.Qxg7+ Ke8 33.Qh8+ Ke7 34.Rg7+ ile Siyah şah çok açık (Motor: +5.6).' },
        { move: '31...Kf8??', text: '32.Qxg7+ Ke7 33.f8=Q# mat.' },
      ],
    },
    '32w': {
      text: 'Vezir d8’e girer ve şah çeker.',
      amac: 'Şahı h7’ye sürmek ve d5’i alarak çatal kurmak için zaman kazanmak.',
      neden: 'Kale f7’ye geçtiği için d8 artık korunmuyor. Vezirin e4 atı tarafından saldırı altında olması önemli değil: şah çekmesi Siyaha zaman bırakmaz. 32.Qe3 Qd7 (−0.5) ile Beyaz bütün avantajını kaybederdi.',
      diger: [
        { move: '32.Qe3', text: '32...Qd7 33.Qf4 Qxf5 ile Siyah piyon fazlası (Motor: −0.5).' },
      ],
    },
    '32b': {
      text: 'Şah h7’ye gider.',
      amac: 'Şahı güvenli bir kareye çekmek.',
      neden: 'Diğer yollar daha kötüdür: 32...Rf8 33.Bxd5+ Kh7 34.Qh4+ Qh6 sonrası Siyah daha çok malzeme kaybeder (+5.9), 32...Qe8?? 33.Qxe8+ Kh7 ise mata gider (motor mat görüyor).',
      diger: [
        { move: '32...Rf8', text: '33.Bxd5+ Kh7 34.Qh4+ Qh6 35.Qxe4+ ile Beyaz bir at kazanır (Motor: +5.9).' },
      ],
    },
    '33w': {
      text: '33.Bxd5! Fil hem c6 vezirine hem f7 kalesine saldırır.',
      amac: 'Çatal ile malzeme kazanmak.',
      neden: 'a2 filinin 19. hamleden beri beklediği an budur: d5 piyonu alınınca a2-g8 çaprazı açılır. 33.Qxd5? Qxd5 34.Bxd5 sonrası Beyaz yalnızca biraz üstündür (+0.5). 33.Qh4+ Qh6 de beraberliğe gider (+0.1).',
      diger: [
        { move: '33.Qxd5?', text: '33...Qxd5 34.Bxd5 Re7 35.b4 ile vezirler değişir, avantaj azalır (Motor: +0.5).' },
        { move: '33.Qh4+', text: '33...Qh6 34.Qxh6+ Kxh6 35.Bxd5 ile malzeme eşit (Motor: +0.1).' },
      ],
    },
    '33b': {
      text: 'At şah çekerek f2’ye gider.',
      amac: 'Tempo kazanmak ve vezirini kurtarmak için zaman bulmak.',
      neden: 'Smislov hem vezirini hem kalesini kurtaramayacağını görüp bir şah çekmesiyle zaman kazandı. 33...Qf6 hemen de mümkündü (aynı değer, +4.6); 33...Ng3+? 34.Rxg3 Qc1+ ise malzeme kaybını artırır (+5.8).',
      diger: [
        { move: '33...Qf6', text: '34.Qxf6 Nf2+ 35.Kg2 Rxf6 ile aynı oyun sonu (Motor: +4.6).' },
        { move: '33...Ng3+', text: '34.Rxg3 Qc1+ 35.Rg1 Qxg1+ ile Siyah daha çok malzeme kaybeder (Motor: +5.8).' },
      ],
    },
    '34w': {
      text: 'Şah g2’ye gider ve f2 atına saldırır.',
      amac: 'Şahtan kurtulmak ve f2 atını hedef almak.',
      neden: 'Zorunludur: g1 karesinde Beyazın kalesi durur, h1’den başka çıkış yoktur. Şah g2’de atı saldırı altına alır ve ileride onu toplayacaktır.',
    },
    '34b': {
      text: 'Vezir f6’ya gelip değişim önerir.',
      amac: 'Hem veziri hem f7 kalesini korumak; vezir değişimiyle saldırıyı bitirmek.',
      neden: 'Bu, malzeme kaybını en aza indiren yoldur. 34...Rf8 35.Qh4+ Qh6 36.Qxf2 ile Siyah bir at kaybeder (+4.9); 34...Qd7 35.Qh4+ Kg8 36.Bxf7+ ise daha kötüdür (+5.1).',
      diger: [
        { move: '34...Rf8', text: '35.Qh4+ Qh6 36.Qxf2 Rd8 ile Beyaz bir taş fazlası (Motor: +4.9).' },
        { move: '34...Qd7', text: '35.Qh4+ Kg8 36.Bxf7+ Kxf7 ile Beyaz kale kazanır (Motor: +5.1).' },
      ],
    },
    '35w': {
      text: 'Vezirler değişir.',
      amac: 'Siyahın karşı oyununu bitirmek ve f2 atını toplamaya hazırlanmak.',
      neden: 'Değişimden sonra f2 atı korumasız kalır ve Beyaz onu şahla alır. 35.Qe8? Qg5+ ile Siyah karşı saldırı bulur (+0.4); 35.Qb8 ise avantajı tamamen kaybeder (+0.1).',
      diger: [
        { move: '35.Qe8?', text: '35...Qg5+ 36.Kf1 Qc1+ 37.Qe1 ile Siyah şah çekmeye devam eder (Motor: +0.4).' },
      ],
    },
    '35b': {
      text: 'Kale f6’da geri alır.',
      amac: 'Malzemeyi geri almak ve f-hattında kalarak f5 piyonuna baskı yapmak.',
      neden: '35...gxf6 36.Bxf7 sonrası Siyah bir kale kaybeder (+5.8). Kaleyle almak f7’yi kurtarır.',
      diger: [
        { move: '35...gxf6', text: '36.Bxf7 Nd3 37.b3 ile Beyaz bir kale fazlası (Motor: +5.8).' },
      ],
    },
    '36w': {
      text: 'Şah f2 atını alır; Beyaz bir taş fazlası.',
      amac: 'Kazanılan malzemeyi toplamak.',
      neden: 'At f2’de korumasızdır; şahla almak hem malzeme kazanır hem de şahı merkeze yaklaştırır. 36.b3? Nd3 ile at kaçar (+1.4).',
      diger: [
        { move: '36.b3?', text: '36...Nd3 37.Kg3 Rd6 ile at kurtulur (Motor: +1.4).' },
      ],
    },
    '36b': {
      text: 'Kale f5 piyonunu şah çekerek alır.',
      amac: 'Bir piyonu geri almak ve aktif kaleyle karşı oyun aramak.',
      neden: 'En doğal hamle; Siyah en azından bir piyon geri alır. 36...g6 veya 36...b5 da aynı sonuca gider (+4.9 / +5.1).',
      diger: [
        { move: '36...g6', text: '37.Ke3 gxf5 38.b3 ile Beyaz bir taş fazlası (Motor: +4.9).' },
      ],
    },
    '37w': {
      text: 'Fil f3’e gelip şahı korur.',
      amac: 'Şahtan kurtulurken fili de d5’ten güvene almak.',
      neden: 'Fil d5’te kale tarafından saldırı altındadır; 37.Ke3? Rxd5 bir taş kaybettirir (0.0). Fil f3’te hem şahı korur hem de güvendedir.',
      diger: [
        { move: '37.Ke3?', text: '37...Rxd5 ile Siyah fili alır ve oyun eşit olur (Motor: 0.0).' },
      ],
    },
    '37b': {
      text: 'Kale f4’e gelir ve a4 piyonuna saldırır.',
      amac: 'Kaleyi aktif tutmak ve a4’ü almaya çalışmak.',
      neden: 'Siyahın elinde umut verici bir yol yok; Motor 37...Ra5, 37...b5 ve 37...Kh6’yı aynı düzeyde görüyor (+4.7). Kale f4’te 38.Rg4 değişim teklifine açık kalır.',
      diger: [
        { move: '37...Ra5', text: '38.b3 Rc5 39.Rg4 Rc2+ ile Siyah kale aktif ama Beyaz fil fazlası (Motor: +4.7).' },
        { move: '37...Kh6', text: '38.Rg4 b5 39.a5 Rc5 ile Siyah sabreder (Motor: +4.7).' },
      ],
    },
    '38w': {
      text: '38.Rg4: Beyaz kale değişimi önerir. Smislov terk etti.',
      amac: 'Kaleleri değiştirip taş fazlası oyun sonunu en kısa yoldan kazanmak.',
      neden: 'Kaleler değişince Beyazın bir fili ve şahı Siyahın piyonlarına karşı rahatça kazanır; Siyah değişimden kaçarsa (38...Rf6 gibi) Beyaz kaleyle a7 ve b7’yi hedef alır. Motor +5.0. Smislov devam etmenin anlamsız olduğunu görüp terk etti.',
      diger: [
        { move: '38.b3', text: 'a4’ü korur (Motor: +4.6); 38...b5 39.axb5 Rf5 40.Rg4 ile aynı sonuca gider.' },
        { move: '38.Ke3', text: '38...Rxa4 39.Bxb7 ile Beyaz yine kazanır, ama bir piyon azalır (Motor: +4.3).' },
      ],
    },
  },
  qa: [
    { q: 'Beyaz neden 9.Nh4 oynadı, ana yol 9.Qe2 değil?', a: '9.Qe2 ve e4 ile Beyaz merkezi kurar, ama Siyahın f5 fili e4’ü kontrol eder ve rahatça g6’ya çekilir. 9.Nh4 ile Botvinnik fili kovalayıp fil çiftini almayı hedefledi. Hemen 10.Nxf5 exf5 Siyaha e4 üzerinde kontrol verirdi; bu yüzden önce 10.f3 ve 11.e4 ile merkezi kurdu, fil g6’ya çekilince 12.Nxg6 ile fil çiftini aldı. Motor iki yolu da eşit görüyor (+0.3 civarı).' },
    { q: 'Siyah neden 11...e5 ile hemen karşılık verdi?', a: 'Beyaz d4-e4 merkezini kurmuştu, ama b4 fili c3 atını bağladığı için d4 piyonu sadece vezirle korunuyordu. Smislov beklerse Beyaz Kh1, Be3 ile merkezini sağlamlaştırırdı. 11...e5 ile d4 sorgulandı ve Beyaz ne d5 ne de dxe5 ile bir şey kazanabildi. Motor bu hamleyi en iyi buluyor (0.0); 11...c5 (+0.2) daha yavaştı.' },
    { q: 'Fil çifti Beyaza ne kazandırdı, filler değişince avantaj kayboldu mu?', a: 'İki fil kendi başına büyük bir üstünlük değildi; Smislov 15...Bc5 ile kara kareli filleri değişti. Ama Beyazın elinde kalan a2 fili a2-g8 çaprazında d5 ve f7’ye bakıyordu ve Siyahın iki atına karşı uzun vadeli bir güç oldu. Oyunu bitiren 33.Bxd5! çatalı tam bu filden geldi.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: '22. hamleye kadar Motor konumu eşit (0.0) görüyor. Avantaj, Beyazın e5 ve f4-f5 piyonlarının bir koç başı olmasından ve Siyahın bu ikiliye karşı zamanında karşılık vermemesinden doğdu. 26...Qc6 ile f5 tempo ile geldi (+0.4), 27...Nc5 ile at şah kanadından uzaklaştı (+0.8), 28...Rd7? ile de ...f6 gecikti ve Motor +2.4’e fırladı.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En açık an 28. hamleydi: 28...f6! ile Siyah e5-f5 zincirini hemen kırabilirdi; 29.exf6? Qxf6 eşitlik, 29.Qg2 Nd3 30.Rg1 sonrası Beyaz biraz üstün (+0.9). Daha önce 26...Qd4 ile vezirleri değişmek (+0.2) ya da 27...Nc7 ile atı savunmaya yakın tutmak (+0.3) da Siyahın işini kolaylaştırırdı.' },
    { q: 'Beyaz neden 30.Qxf6 değil de 30.exf6 oynadı?', a: '30.Qxf6 Nd3 sonrası vezirler değişir ve Siyahın tehlikesi kalmaz (Motor: +0.3). 30.exf6 ile vezir g5’te kalır, g-hattındaki kale ve f6 piyonu ile birlikte g7’ye üç taşla baskı kurulur. Siyah g7’yi tutmak için taşlarını kötü karelere koymak zorunda kalır; 31.f7+ kombinasyonu bundan doğdu.' },
    { q: '31.f7+ kombinasyonu nasıl çalışıyor?', a: 'Piyon f7’ye ilerleyince Siyah onu kaleyle almak zorunda kalır (31...Kxf7 32.Qxg7+ ve 31...Kf8 32.Qxg7+ Ke7 33.f8=Q# daha kötü). Kale f7’ye geçince d8 karesi korumasız kalır ve 32.Qd8+ Kh7 gelir. Sonra 33.Bxd5! fili hem c6 vezirine hem f7 kalesine saldırır; Siyah 33...Nf2+ 34.Kg2 Qf6 ile ikisini korur, ama 35.Qxf6 Rxf6 36.Kxf2 sonrası bir taş eksik kalır.' },
    { q: 'Siyah neden 17...g5 oynadı ve bu hamle doğru muydu?', a: '17...g5 f4 karesini kontrol ederek Beyazın f4 ilerleyişini engellemeye çalıştı. Fakat Beyaz 18.g3 ile f4’ü yeniden hazırladı ve 25.f4 gxf4 26.gxf4 ile f-hattı Beyaz lehine açıldı. Motor 17...Rae8 veya 17...Nb6’yı (+0.3) biraz daha iyi buluyor; g5 kendi başına hata değildi, ama Siyaha uzun vadede bir hedef yarattı.' },
    { q: 'Bu oyunun maç içindeki önemi neydi?', a: 'Smislov 9., 10. ve 11. oyunları üst üste kazanarak maçta 6–5 öne geçmişti. Botvinnik bu oyunla skoru 6–6’ya getirdi ve sonraki beş oyunun dördünü kazanarak 9–7 öne geçti. Maç sonunda 12–12 bitti ve Botvinnik şampiyonluğunu korudu.' },
  ],
  sources: [
    { title: 'Wikipedia: World Chess Championship 1954', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1954' },
    { title: 'Wikipedia (DE): Schachweltmeisterschaft 1954', url: 'https://de.wikipedia.org/wiki/Schachweltmeisterschaft_1954' },
    { title: 'Chessgames.com: Botvinnik – Smyslov World Championship Match 1954', url: 'https://chessgames.com/perl/chess.pl?tid=54196' },
    { title: 'OlimpBase: FIDE World Chess Championship 1954', url: 'https://olimpbase.org/ind-wcc/wc1954-wch.html' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
    { title: 'Lichess blog: Main Line Slav Defense – Dutch Variation (structural approach)', url: 'https://lichess.org/@/mizant83/blog/main-line-slav-defense-dutch-variation/0yvdb0rR' },
  ],
  exercises: [
    { id: 'bsm-1', kind: 'tekrar', plan: false, title: 'exf6: şahın önünü açmak',
      source: 'Botvinnik – Smislov, Moskova 1954, 12. oyun (30. hamle)',
      fen: '6k1/pp1r2p1/2q2p2/2npPPQ1/P7/8/BP5P/6RK w - - 0 30',
      prompt: 'Siyah ...f6 ile vezire saldırdı. Beyazın e5 ve f5 piyonları Siyahın şahına yakın, kalesi g-hattında. En güçlü hamle hangisi?',
      hint: 'Vezir yerine piyonla alın; g7 ve f7 kareleri ne olur?',
      line: ['exf6'],
      explanation: '**30.exf6!** e5 piyonu f6’yı alır; g7 baskı altına girer ve f-piyonu f7’ye kadar ilerleyebilir. 30.Qxf6 Nd3 sonrası ise Siyah karşı oyun bulur. Motor: exf6 +3.2, sonraki en iyi 30.Qxf6 +0.3.',
      link: 'e5 ve f5 piyonları birlikte ilerledi; şimdi e-piyonu f6’yı alarak şahın önünü açıyor.' },
    { id: 'bsm-2', kind: 'tekrar', plan: false, title: 'f7+! piyon fedası',
      source: 'Botvinnik – Smislov, Moskova 1954, 12. oyun (31. hamle)',
      fen: '6k1/pp1r2p1/2q2P2/3p1PQ1/P3n3/8/BP5P/6RK w - - 1 31',
      prompt: 'Siyahın atı e4’ten g5 vezirine saldırıyor. Beyazın f6 piyonu ve g-hattındaki kalesi Siyahın şahına çok yakın. Kombinasyonu sonuna kadar oynayın.',
      hint: 'Önce piyonla şah çekin; kale f7’ye gelirse d8 karesi açılır. Sonra fil iki taşa birden saldırabilir.',
      line: ['f7+', 'Rxf7', 'Qd8+', 'Kh7', 'Bxd5'],
      explanation: '**31.f7+! Rxf7 32.Qd8+ Kh7 33.Bxd5!** Kale f7’ye çekilince d-hattı ve d8 karesi açılır; fil d5’te hem c6 vezirine hem f7 kalesine saldırır. Motor: f7+ +4.6, sonraki en iyi 31.Qe3 0.0.',
      link: 'e5-f5 piyonları f7’ye kadar ilerledi; son piyon fedası Siyahın taşlarını kötü karelere çekti.' },
    { id: 'bsm-3', kind: 'transfer', plan: false, title: 'e6 ile piyon kırılması',
      source: 'Kasparov – Anand, Linares turnuvası 1993 (30. hamle)',
      fen: '6k1/1p1r1pp1/6p1/p1pBP3/Pb3q2/1Q1R3P/1P3PP1/6K1 w - - 0 30',
      prompt: 'Aynı Slav varyantından bir oyun. Siyah veziriyle f4’teki fili aldı. Beyazın e5 piyonu, d5 fili ve b3 veziri f7’ye bakıyor. Hamle sizde.',
      hint: 'e-piyonu bir kare ilerlerse f7 ve d7’ye saldırır.',
      line: ['e6'],
      explanation: '**30.e6!** Piyon f7’ye ve d7 kalesine saldırır; d5 fili ve b3 veziriyle f7 hedefe gelir. 30...Re7 31.exf7+ Kf8 sonrası Siyahın şahı açıktır. Motor: e6 +4.8, sonraki en iyi 30.Rf3 +1.4.',
      link: 'Botvinnik gibi Kasparov da Hollanda varyantında e5 piyonunu Siyahın şahına karşı koç başı olarak kullandı.' },
    { id: 'bsm-4', kind: 'transfer', plan: false, title: 'e6 ile çatal',
      source: 'Spasski – Nei, Tallinn turnuvası 1975 (27. hamle)',
      fen: 'r1q3k1/pp1nbrp1/7p/PPp1P3/2Q5/2N3BP/5PP1/3R2K1 w - - 0 27',
      prompt: 'Beyaz kalite eksik ama e5 piyonu Siyahın şah kanadına yakın. Siyahın atı d7’de, kalesi f7’de. Hamle sizde.',
      hint: 'e-piyonu ilerlerse hangi iki taşa birden saldırır?',
      line: ['e6'],
      explanation: '**27.e6!** Piyon hem d7 atına hem f7 kalesine saldırır; Siyah malzeme kaybeder. 27...Nf6 28.exf7+ Kf8 sonrası Beyaz üstün. Motor: e6 +3.8, sonraki en iyi 27.Nd5 +0.6.',
      link: 'Botvinnik’in e5 piyonu f6’ya ilerleyip şahı açtı; Spasski’nin e5 piyonu e6’ya ilerleyip iki taşa saldırdı.' },
  ],
};
