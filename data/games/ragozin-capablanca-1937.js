// Ragozin – Capablanca, Semmering-Baden turnuvası, Semmering 1937. Kaynak: PgnMentor (Capablanca.pgn).
export default {
  id: 'ragozin-capablanca-1937',
  theme: '...c5 kırılması ve d4’teki kama piyonu',
  white: 'Vyaçeslav Ragozin', black: 'José Raúl Capablanca',
  whiteShort: 'Ragozin', blackShort: 'Capablanca',
  event: 'Semmering-Baden turnuvası, 12. tur', site: 'Semmering', year: 1937, eco: 'D18',
  variation: 'Slav Savunması, Hollanda varyantı (5.a4 Bf5 6.e3 e6 7.Bxc4 Bb4)', result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qb3 Qe7 10. Ne5 c5 11. Na2 Ba5 12. Qb5 b6 13. f3 cxd4 14. e4 Bg6 15. Bg5 a6 16. Qb3 Qc5 17. Bxf6 gxf6 18. Nd3 Qd6 19. Qd1 Rc8 20. b3 Nd7 21. Qe2 Nc5 22. Nxc5 Qxc5 23. Bd3 f5 24. Rab1 fxe4 25. fxe4 Bc3 26. b4 Qe5 27. Nc1 a5 28. bxa5 Bxa5 29. Rb5 Rc5 30. Qf3 Rxb5 31. axb5 Bd2 32. Ne2 Be3+ 33. Kh1 Ra3 34. Rd1 h5 35. h3 Rxd3 36. Rxd3 Bxe4 37. Rxe3 dxe3 38. Qf1 Qxb5 39. Qf4 Bxg2+ 40. Kxg2 Qxe2+ 0-1`,

  summary: 'Siyahla oynayan Capablanca kazandı. Slav Savunmasının Hollanda varyantında Ragozin, Qb3 ve Ne5 ile Siyahın vezir kanadına baskı kurmak istedi. Capablanca buna **10...c5** kırılmasıyla cevap verdi ve 11...Ba5 ile filini tuttu. Ragozin 13.f3 ve 14.e4 ile merkezi ele geçirmek için bir piyon verdi. Bu piyon d4’te kaldı ve Beyazın kampına bir **kama** gibi girdi. 17.Bxf6 gxf6 sonrası 18.Nxg6! ile piyonu geri almak mümkündü; 18.Nd3 sonrası Siyah temiz bir piyon fazlasıyla ve iki filiyle kaldı. Capablanca ...Nd7-c5 ile bir çift atı değişti, ...f5 ile e4’ü kırdı ve kara kareli filini 20.b3’ün zayıflattığı c3 karesine, sonra d2 ve e3 karelerine taşıdı. 30.Qf3?’ten sonra kaleler değişti, fil e3’e yerleşti ve **35...Rxd3! 36.Rxd3 Bxe4!** kombinezonu d-piyonunu e3’te geçer piyona çevirdi. 39.Qf4? atı korumasız bıraktı ve oyun bitti.',
  intro: 'Turnuva 8 kişilik çift devreli bir turnuvaydı: ilk dört tur Semmering’de, gerisi Baden bei Wien’de oynandı; bu 12. tur oyunu 24 Eylül 1937’de oynandı. Keres 9 puanla birinci oldu, Capablanca 7,5 puanla Reshevsky ile 3.–4. sırayı paylaştı, Ragozin ise 6 puanla 6.–7. oldu. Slav Savunması o yıllarda, özellikle 1935 Euwe–Alekhine dünya şampiyonluğu maçında, en çok sınanan açılışlardan biriydi. 5.a4 ile Beyaz ...b5’i önler; Siyah fili e6’dan önce f5’e çıkarır (Çek varyantı). 6.e3 e6 7.Bxc4 Bb4 ile Hollanda varyantı oluşur: fil b4’te Nc3’ü bağlar ve 5.a4’ün zayıflattığı b4 karesini kullanır. Beyazın tipik planı e4’ü itmek, gerekirse f3 ile bunu bir piyon pahasına yapmaktır. Ragozin bu oyunda Qb3 ve Ne5 ile farklı bir yol seçti; Capablanca ise ...c5 kırılmasıyla merkeze saldırdı ve d4’te kalan piyonu bütün oyunun ana kozuna çevirdi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '9.Qb3 ile b7’ye ve b4 filine baskı kurmak; ana yol 9.Qe2 ve e4 iken Ragozin vezir kanadında oynamayı seçti.',
      '10.Ne5 ile atı merkeze koymak, 11.Na2 ile b4 filini sorgulamak ve 12.Qb5 ile a5 filine ve b7’ye saldırmak.',
      '13.f3 ve 14.e4 ile f5 filini kovalamak ve merkezi piyonlarla doldurmak; bunun için d4 piyonunu feda etmek.',
      '15.Bg5 ve 17.Bxf6 ile Siyahın şah kanadı piyonlarını dağıtmak; ardından 18.Nxg6 ve Bxe6 ile piyonu geri almak mümkündü.',
      'Taşları d4 piyonunun etrafına toplamak (Nd3, Nab4 fikri, Qd1-e2) ve d4’ü ya kazanmak ya da durdurmak.',
      'Oyunda bu plan gerçekleşmedi: a2’deki at oyun dışı kaldı, 20.b3 c3 karesini zayıflattı ve Siyahın filleri Beyazın kampına girdi.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '10...c5 ile Beyazın d4 merkezine saldırmak; Beyaz vezir kanadına baskı kurarken merkezde karşı oyun açmak.',
      '11...Ba5 ve 12...b6 ile kara kareli fili korumak; Na2 ile değişime izin vermemek, çünkü bu fil ileride en güçlü taş olacak.',
      '...cxd4 ile kazanılan d4 piyonunu tutmak: piyon Beyazın atlarına c3 ve e3 karelerini kapatır ve a7-g1 çaprazında vezire destek olur.',
      '...Nd7-c5 ile at değişimi yapıp Beyazın en iyi savunucusunu (d3 atını) ortadan kaldırmak; malzeme fazlasında taş değişimi işe yarar.',
      '23...f5 ile dağılmış f-piyonunu silaha çevirmek: e4’ü kırmak, g6 filinin çaprazını açmak ve f-hattını açmak.',
      'Kara kareli fili c3, d2 ve e3 karelerine taşımak; e3’teki fil Beyazın şahını h1’e kilitler ve d4 piyonunu destekler.',
      'Kaleyi c-hattından a-hattına geçirip 35...Rxd3 ile savunucuyu almak ve d-piyonunu e3’te geçer piyona çevirmek.',
    ] },
  },
  critical: [
    { move: '10b', title: '10...c5: baskıya merkezden cevap', text: 'Beyaz 9.Qb3 ve 10.Ne5 ile b7’ye ve vezir kanadına baskı kurdu. Capablanca savunmaya geçmek yerine 10...c5 ile d4’e saldırdı. Motor bu hamleyi en iyi buluyor (−0.24); 10...Nbd7 ise +0.19. ChessTalk forumundaki yorumda 10.Ne5 c5 11.Na2 Ba5 için “Siyah kolayca eşitledi” deniyor. Burada başlayan merkez gerilimi, oyunun bütün yapısını belirledi: ...cxd4 sonrası d4’te bir kama piyonu kalacaktı.' },
    { move: '14w', title: '14.e4: Ragozin bir piyon veriyor', text: '13.f3 cxd4 sonrası 14.exd4 ile piyon geri alınabilirdi (−0.36). Ragozin 14.e4 ile f5 filini kovaladı ve merkezi piyonlarla doldurdu; karşılığında d4 piyonu Siyahta kaldı. Motora göre fark küçük (−0.42), ama artık Beyaz, piyonu geri almak için somut bir yol bulmak zorundaydı. Forumdaki yorumcuya göre Ragozin merkez piyonunu “yanlış adama” karşı feda etti: Capablanca bu piyonu oyunun sonuna kadar kullandı.' },
    { move: '18w', title: '18.Nd3?: piyonu geri alma fırsatı kaçtı', text: '17.Bxf6 gxf6 sonrası Siyahın şah kanadı dağıldı. Burada 18.Nxg6! hxg6 19.Bxe6 ile Beyaz piyonu geri alırdı; Motor (derinlik 20): −0.68, oyun dengeye yakın. 18.Nd3 ise vezire saldırarak tempo kazanmayı seçti, ama e6 piyonu artık hiçbir zaman alınamadı ve Siyah iki fil ve bir piyon fazlasıyla kaldı (−1.45). Derinlik 16’da motor 17.Bxf6’yı da kötü görüyor, ancak derinlik 20’de asıl hatanın 18. hamle olduğu ortaya çıkıyor.' },
    { move: '23b', title: '23...f5: dağılmış piyon silaha dönüşüyor', text: 'Dağılmış f-piyonları bir kusur gibi görünür, ama Capablanca 23...f5 ile bunu bir silaha çevirdi: piyon e4’e saldırır, g6 filinin b1-h7 çaprazını açar ve f-hattını açmaya hazırlanır. Motor 23...f5 ile 23...Bc3’ü aynı güçte görüyor (−1.28 ve −1.23). 24.Rab1? sonrası (−1.82; 24.Rac1 −1.26) Siyah e4’ü kırdı ve fili c3’e getirdi.' },
    { move: '25b', title: '25...Bc3: 20.b3’ün açtığı delik', text: 'Forumdaki yorumcu, 20.b3’ün c3 karesinde bir delik açtığını ve Capablanca’nın bunu kullandığını yazıyor. 25...Bc3 ile fil d4 piyonunu korur ve b4 karesini kontrol eder; 26.Nxc3 dxc3+ sonrası ise d-piyonu ilerler ve c5 vezirinin çaprazı açılarak şah çekilir. Motor: −1.74. Bu fil oyunun geri kalanında c3, a5, d2 ve e3 karelerinde Beyazın taşlarını hep rahatsız etti.' },
    { move: '30w', title: '30.Qf3?: kale değişimi Siyaha yarıyor', text: '29.Rb5 Rc5 sonrası 30.Qf3? kale değişimine izin verdi. Motor (derinlik 20): 30.Qa2 veya 30.Rb2 −2.7, maç hamlesi −3.76. 30...Rxb5 31.axb5 Bd2! sonrası fil c1 atına saldırır, 32.Ne2 Be3+ ile e3’e yerleşir ve 33...Ra3 ile a-hattından d3 filine baskı gelir. Beyaz artık sadece savunabiliyordu.' },
    { move: '35b', title: '35...Rxd3!: savunucuyu almak', text: 'Kale d3 filini alır. Bu fil e4 piyonunun tek savunucusuydu. 36.Rxd3 zorunlu (36.Rf1 Rd2 −6.0), ve 36...Bxe4! hem d3 kalesine hem de f3 vezirine saldırır. Motor: 35...Rxd3 −4.93, sonraki en iyi 35...Qg5 −4.19.' },
    { move: '36b', title: '36...Bxe4!: kama piyonu geçer piyon oluyor', text: 'Fil çatal yapar. 37.Rxe3 dxe3 sonrası d4 piyonu e3’te korunan ve çok ilerlemiş bir geçer piyona dönüşür; 37...Bxf3?? ise 38.Rxe5 ile vezir kaybettirirdi. Motor: 36...Bxe4 −4.96, sonraki en iyi 36...Qxe4 −2.68. 13. hamlede kazanılan piyon, 24 hamle sonra oyunu bitiren piyon oldu.' },
  ],
  lessons: [
    'Hollanda varyantında Beyaz vezir kanadına baskı kurarsa (Qb3, Ne5) ...c5 kırılması Siyahın en doğal cevabıdır: kanattaki saldırıya merkezde karşılık verilir.',
    'Merkez piyonu feda etmeden önce (14.e4) onu nasıl geri alacağınızı somut olarak görün. Ragozin 18.Nxg6 ile piyonu geri alabilirdi; bu fırsat geçince d4 piyonu bütün oyun boyunca bir “boğazdaki kemik” oldu.',
    '...cxd4 sonrası rakibin merkezine giren d-piyonu, taşlarla desteklenirse güçlü bir kama olur: rakibin atlarına kare bırakmaz ve ileride geçer piyona dönüşebilir.',
    'Bir piyon hamlesi (20.b3) bir kareyi (c3) kalıcı olarak zayıflatabilir; Capablanca bu kareye filini koydu ve oradan bütün oyunu yönetti.',
    'Dağılmış piyonlar (…gxf6) iki fil ve açık hatlarla karşılanıyorsa kusur değil, kaynak olabilir: 23...f5 ile f-piyonu e4’ü kırdı.',
    'Malzeme fazlası olan taraf taş değiştirmeyi sever: Capablanca önce atları (22.Nxc5), sonra kaleleri (30...Rxb5) değişti ve kalan taşlarla saldırdı.',
    'Bir savunucuyu almak için malzeme vermek (35...Rxd3) arkasından gelen çatal (36...Bxe4) ve geçer piyonla geri kazanılır; böyle kombinezonlar genellikle uzun bir pozisyonel hazırlığın sonucudur.',
  ],
  notes: {
    '1w': {
      text: 'Beyaz vezir piyonuyla açar ve merkezde d4 karesini tutar.',
      amac: 'Merkezde yer kaplamak, c1 filine yol açmak ve ardından c4 ile Vezir Gambitine geçmek.',
      neden: 'Ragozin kariyeri boyunca Vezir Gambiti yapılarında uzmanlaşmış bir oyuncuydu; Vezir Gambitinde onun adını taşıyan bir sistem bile vardır. 1.d4, kapalı ve pozisyonel bir oyuna yönelir.',
      diger: [
        { move: '1.e4', text: 'Açık oyunlara yönelir; Capablanca 1.e4’e karşı genellikle 1...e5 oynardı. Motor: +0.29, 1.d4 ile neredeyse aynı.' },
        { move: '1.Nf3', text: 'Esnek bir hamle; çoğu zaman aynı yapılara geçer. Motor: +0.22.' },
      ],
    },
    '1b': {
      text: 'Siyah merkezde d5 piyonuyla karşılık verir.',
      amac: 'd4 piyonunun e5’e ilerlemesini zorlaştırmak ve merkezde eşit pay almak.',
      neden: 'Capablanca klasik açılışları tercih ederdi; 1...d5 ile Vezir Gambitinin kabul ya da ret yapılarına girer. Hint savunmaları o yıllarda daha yeniydi.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına (Nimzo-Hint, Vezir-Hint, Şah-Hint) giden esnek hamle. Motor: +0.30.' },
        { move: '1...c6', text: 'Slav yapısına doğrudan girer ama 2.e4 ile Caro-Kann’a geçilebilir. Motor: +0.43.' },
      ],
    },
    '2w': {
      text: 'Vezir Gambiti: c4 piyonu d5’e saldırır.',
      amac: 'Siyahın d5’teki merkez piyonunu yanlardan sarsmak ve c-hattını açmak.',
      neden: 'c4 ile Beyaz d5’i değişmeye ya da savunmaya zorlar. Siyah ...dxc4 oynarsa Beyaz merkezde e4 ile çoğunluğu alır; Siyah d5’i tutarsa c4 baskısı sürer.',
      diger: [
        { move: '2.Nf3', text: 'Önce at gelişir, c4 sonraya kalır; motor bunu biraz daha esnek buluyor. Motor: +0.38.' },
        { move: '2.Bf4', text: 'Londra sistemi tarzı sakin bir kurulum; Vezir Gambitinin baskısından vazgeçer.' },
      ],
    },
    '2b': {
      text: 'Slav Savunması: d5 piyonu c6 piyonuyla desteklenir.',
      amac: 'Merkezi sağlam tutarken c8 filinin önünü kapatmamak; Siyah bu fili sonradan f5 veya g4’e çıkaracak.',
      neden: '2...e6 (Vezir Gambiti Reddi) da d5’i destekler ama c8 filini e6 piyonunun arkasına hapseder. Slav, bu “kötü fil” sorununu çözer. Slav’ın adı Alapin gibi Slav kökenli ustaların bu açılışın teorisine katkısından gelir.',
      diger: [
        { move: '2...e6', text: 'Klasik Vezir Gambiti Reddi; sağlam ama c8 fili kapanır. Motor: +0.34.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü; Siyah piyonu alır ve merkezi bir süre Beyaza bırakır. Motor: +0.33.' },
      ],
    },
    '3w': {
      text: 'At f3’e gelişir; e5 karesine bakar ve d4’ü destekler.',
      amac: 'Gelişimi sürdürmek ve ileride Ne5 ya da e4 fikirlerine hazırlanmak.',
      neden: 'Nf3, Siyahın ...e5 kırılmasını önler. 3.Nc3 de oynanır, ama 3.Nf3 bazı keskin varyantları (örneğin 3.Nc3 e5) baştan engeller.',
      diger: [
        { move: '3.Nc3', text: 'Motorun ilk tercihi (+0.40); ama 3...e5 veya 3...dxc4 4.e4 b5 gibi keskin gambitlere izin verir.' },
        { move: '3.cxd5', text: 'Değişme Slav’ı: simetrik ve sakin bir yapı. Motor: +0.35.' },
      ],
    },
    '3b': {
      text: 'Siyahın atı f6’ya çıkar ve d5’i destekler.',
      amac: 'Gelişmek ve e4 karesini kontrol etmek.',
      neden: '3...Nf6 doğal ve en esnek hamledir. 3...e6 yarı-Slav’a, 3...dxc4 ise erken bir piyon kapmaya yönelir.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav’a yönelir ama c8 filini kapatır. Motor: +0.49.' },
        { move: '3...dxc4', text: 'Piyonu hemen alır; 4.e3 b5 5.a4 ile Beyaz kolayca geri alır.' },
      ],
    },
    '4w': {
      text: 'İkinci at da gelişir ve d5 ile e4 karelerine bakar.',
      amac: 'e4 ilerleyişini hazırlamak ve gelişimi tamamlamak.',
      neden: '4.Nc3 en doğal ve en iddialı hamledir. 4.e3 daha sakin bir yoldur; c1 filini kapatır ama c4 piyonunu korur.',
      diger: [
        { move: '4.e3', text: 'Sakin yol: c4’ü korur ama c1 filini kapatır. Motor: +0.26.' },
        { move: '4.cxd5', text: 'Değişme varyantı; simetrik yapı. Motor: +0.29.' },
      ],
    },
    '4b': {
      text: '4...dxc4: Siyah c4 piyonunu alır.',
      amac: 'Beyazı piyonu geri almak için zaman harcamaya zorlamak; tehdit ...b5 ile piyonu tutmaktır.',
      neden: 'Wikipedia’nın deyişiyle bu “saf” Slav’dır: Siyah c8 filini dışarı çıkarmak ister. Piyonu almak, Beyazı a4 gibi bir hamleye zorlar; bu da b4 karesini zayıflatır.',
      diger: [
        { move: '4...e6', text: 'Yarı-Slav: Siyah piyonu almaz, sağlam bir merkez kurar. Motor: +0.35.' },
        { move: '4...a6', text: 'Çebanenko varyantı (sonraki dönemlerde popüler oldu): ...b5 hazırlanır. Motor: +0.39.' },
      ],
    },
    '5w': {
      text: '5.a4 ile Beyaz ...b5’i önler.',
      amac: 'Siyahın c4 piyonunu ...b5 ile tutmasını engellemek ve piyonu e3 ile Bxc4 üzerinden rahatça geri almak.',
      neden: 'Bedeli şudur: b4 karesi kalıcı olarak zayıflar ve Siyahın fili ya da atı oraya yerleşebilir. Wikipedia, 5.a4 Bf5’i (Çek varyantı) Slav’ın ana yolu olarak sayar.',
      diger: [
        { move: '5.e3', text: 'Alekhine varyantı: 5...b5 ile Siyah piyonu tutmaya çalışır. Sağlam ama Beyaza az avantaj verir.' },
        { move: '5.e4', text: 'Geller gambiti: 5...b5 6.e5 ile keskin bir oyun. Wikipedia’ya göre genellikle Siyah lehine kabul edilir. Motor: +0.04.' },
      ],
    },
    '5b': {
      text: 'Fil e6 piyonundan önce f5’e çıkar.',
      amac: 'c8 filini piyon zincirinin dışına almak; böylece ...e6 sonrası fil kapalı kalmaz.',
      neden: 'Slav’ın bütün fikri budur: fil önce çıkar, sonra ...e6 oynanır. 5...Bf5, Beyazın e4’ünü de doğrudan kontrol eder.',
      diger: [
        { move: '5...Na6', text: 'Smislov varyantı: at b4’e yönelir; Siyah e4’e izin verir ama ...Bg4 ile karşı oyun arar.' },
        { move: '5...Bg4', text: 'Fil g4’e çıkar ve f3 atını bağlar; daha az oynanan bir yol.' },
        { move: '5...e6', text: 'Fili kapatır; 6.e4 Bb4 7.e5 ile keskin bir oyun. Motor: +0.49.' },
      ],
    },
    '6w': {
      text: '6.e3: Hollanda varyantı. Beyaz fili c4 piyonunu almak için açar.',
      amac: 'Piyonu sade bir yolla geri almak, rok yapmak ve sonra e4 ile merkezde ilerlemek.',
      neden: 'Bu sağlam ve klasik yoldur. Beyaz önce gelişir, merkezde e4 ilerleyişini sonraya bırakır.',
      diger: [
        { move: '6.Ne5', text: 'Krause atağı: Beyaz c4’ü atla geri almak ve f3-e4 ile merkezi kurmak ister. Motor: +0.25.' },
        { move: '6.Nh4', text: 'At f5 filine saldırır; 6...Bc8 veya 6...Bd7 ile fil geri çekilir. Motor: +0.12.' },
      ],
    },
    '6b': {
      text: 'Siyah ...e6 ile gelişimini tamamlamaya hazırlanır.',
      amac: 'f8 filine yol açmak ve d5 karesini kontrol etmek.',
      neden: 'Fil zaten f5’te olduğundan ...e6 artık bir kusur değildir. 6...Nbd7 de oynanır, ama ...e6 b4’e fil çıkışını hazırlar.',
      diger: [
        { move: '6...Nbd7', text: 'At önce gelişir; genellikle aynı yapılara geçer. Motor: +0.29.' },
        { move: '6...Na6', text: 'At b4’e yönelir; Bxc4 sonrası at b4’te güçlü durur.' },
      ],
    },
    '7w': {
      text: 'Beyaz piyonu geri alır; malzeme eşit.',
      amac: 'c4 piyonunu kazanmak ve fili aktif bir çapraza (a2-g8) koymak.',
      neden: 'Piyonu geri almanın en doğal yoludur. Fil c4’ten e6 ve f7’ye bakar.',
      diger: [
        { move: '7.h3', text: 'Fil için bir kaçış karesi hazırlar ama zaman kaybettirir. Motor: +0.21.' },
        { move: '7.Ne5', text: 'Piyonu atla almaya hazırlanır. Motor: +0.20.' },
      ],
    },
    '7b': {
      text: '7...Bb4: fil b4’te Nc3’ü bağlar.',
      amac: 'Beyazın e4 ilerleyişini zorlaştırmak ve 5.a4’ün zayıflattığı b4 karesini kullanmak.',
      neden: 'Nc3 bağlı kaldıkça e4 ilerleyişi zordur, çünkü e4 piyonunu koruyan at bağlıdır. Bu, Hollanda varyantının ana hamlesidir.',
      diger: [
        { move: '7...Nbd7', text: 'Önce at gelişir; fil sonra b4’e çıkar. Motor: +0.33.' },
        { move: '7...Be7', text: 'Daha pasif; fil Nc3’ü bağlamaz ve Beyaz e4’ü kolayca oynar.' },
      ],
    },
    '8w': {
      text: 'Beyaz rok yapar.',
      amac: 'Şahı güvene almak ve f1 kalesini oyuna katmak.',
      neden: 'Rok, Siyahın b4 fili Nc3’ü bağlamaya devam etse de Beyazın merkezde oynamasını kolaylaştırır. 8.Qe2 de oynanır.',
      diger: [
        { move: '8.Qe2', text: 'Önce vezir gelişir; e4 için hazırlık. Motor: +0.30, rokla aynı.' },
        { move: '8.h3', text: 'f5 filinin g4’e gelmesini önler. Motor: +0.19.' },
      ],
    },
    '8b': {
      text: 'Siyah da rok yapar.',
      amac: 'Şahı güvene almak ve f8 kalesini oyuna katmak.',
      neden: 'Simetrik ve doğal. 8...Nbd7 de oynanır; o zaman Beyaz 9.Qb3 ile b7’ye saldırabilir.',
      diger: [
        { move: '8...Nbd7', text: 'Önce at gelişir; Beyaz 9.Nh4 ile f5 filini kovalayabilir. Motor: +0.28.' },
        { move: '8...h6', text: 'Fil için bir kaçış karesi hazırlar. Motor: +0.39.' },
      ],
    },
    '9w': {
      text: '9.Qb3: vezir b7 piyonuna ve b4 filine baskı yapar.',
      amac: 'Siyahın vezir kanadına baskı kurmak, b4 filini zor durumda bırakmak ve Siyahın gelişimini (özellikle b8 atını) yavaşlatmak.',
      neden: 'Ana yol 9.Qe2 ve 10.e4’tür; Ragozin daha az bilinen bir yolu seçti. Motor 9.Qb3’ü biraz zayıf buluyor (+0.04); vezir b3’te merkezden uzaktır ve Siyahın ...c5 kırılmasını engelleyemez.',
      diger: [
        { move: '9.Qe2', text: 'Ana yol: e4 hazırlığı. 9...Nbd7 10.e4 Bg6 11.Bd3 gibi devam eder. Motor: +0.33.' },
        { move: '9.Nh4', text: 'At f5 filine saldırır; 9...Nbd7 10.Nxf5 exf5 ile Beyaz iki fil alır. Motor: +0.21.' },
      ],
    },
    '9b': {
      text: 'Vezir e7’ye gelir ve b4 filini korur.',
      amac: 'b4 filini korumak ve vezir kanadında b7’yi savunmaya hazırlamak.',
      neden: 'Capablanca sağlam bir hamle seçti. Motor ise hemen 9...c5’i öneriyor (−0.10): Beyazın vezir kanadındaki baskısına merkezden cevap vermek. 9...Qe7 sonrası Beyaz biraz daha iyi (+0.42).',
      diger: [
        { move: '9...c5', text: 'Motorun ilk tercihi: 10.dxc5 a5 ile Siyah taşlarını aktif tutar. Motor: −0.10.' },
        { move: '9...a5', text: 'b4 filini sağlamlaştırır. Motor: +0.21.' },
        { move: '9...Qb6', text: 'Vezirleri karşı karşıya getirir. Motor: +0.34.' },
      ],
    },
    '10w': {
      text: '10.Ne5: at merkeze çıkar; d7, f7 ve c6 karelerine bakar.',
      amac: 'b8 atının d7’ye gelişini zorlaştırmak ve f3 ile e4’e hazırlanmak.',
      neden: 'Bu hamle, Siyahın ...c5 kırılmasını önlemez. Motor 10.Nh4’ü öneriyor (+0.42): Chess Explained kitabının anlattığı gibi Hollanda varyantında Beyazın tipik fikri f5 filini Nh4 ile avlamaktır. 10.Ne5 sonrası oyun Siyah lehine döner (−0.29).',
      diger: [
        { move: '10.Nh4', text: 'f5 filine saldırır: 10...c5 11.d5 Nbd7 12.Nxf5 exf5 ile Beyaz iki fil alır. Motor: +0.42.' },
        { move: '10.Re1', text: 'e4 için hazırlık. Motor: +0.23.' },
        { move: '10.a5', text: 'b4 filinin geri çekilme yolunu (a5) kapatır; ChessTalk forumundaki yorumda da bu hamleye değiniliyor. Motor: −0.01, yani eşit.' },
      ],
    },
    '10b': {
      text: '10...c5! Siyah merkeze saldırır.',
      amac: 'd4 piyonunu baskı altına almak ve Beyazın vezir kanadındaki baskısına merkezde karşılık vermek.',
      neden: 'c5, b4 filinin a5’e çekilmesine yol açar ve ...cxd4 sonrası Siyahın d4’te bir piyonu kalır. Forumdaki yorumcuya göre 10.Ne5 c5 11.Na2 Ba5 ile Siyah kolayca eşitledi.',
      diger: [
        { move: '10...Nbd7', text: '11.Nxd7 Nxd7 12.e4 Bg6 ile Beyaz merkezi rahatça alır. Motor: +0.19.' },
        { move: '10...a5', text: 'b4 filini sağlamlaştırır ama merkezde aktif değildir. Motor: +0.21.' },
      ],
    },
    '11w': {
      text: 'At a2’ye çekilerek b4 filine saldırır.',
      amac: 'b4 filini ya değişmeye ya da çekilmeye zorlamak ve Nc3’ün bağlanmasını kaldırmak.',
      neden: '11.Na2 a2-b4 karesindeki fili sorgular. Bedeli, atın a2’de kenara düşmesidir; bu at oyunda uzun süre pasif kaldı. Motor 11.Na2’yi en iyi hamle olarak görüyor (−0.23).',
      diger: [
        { move: '11.Ne2', text: 'At e2 üzerinden d4’e yönelir. Motor: −0.25, neredeyse aynı.' },
        { move: '11.Bd3', text: 'f5 filini değiştirmek ister: 11...Bxd3 12.Nxd3 cxd4. Motor: −0.35.' },
      ],
    },
    '11b': {
      text: 'Tek iyi hamle. Fil a5’e çekilir.',
      amac: 'Kara kareli fili korumak; bu fil ileride oyunun en güçlü taşı olacak.',
      neden: '11...Rd8? 12.Nxb4 cxb4 sonrası Beyaz üstün (+1.11), çünkü Siyah değerli filini kaybeder ve b4 piyonu zayıf kalır. 11...Nd5? 12.Bxd5 exd5 13.Nxb4 cxb4 de Beyaz lehine (+0.92).',
      diger: [
        { move: '11...Rd8', text: '12.Nxb4 cxb4 13.f3 Bg6 ile Beyaz iki fil alır ve b4 piyonu zayıf kalır. Motor: +1.11.' },
        { move: '11...Nd5', text: '12.Bxd5 exd5 13.Nxb4 cxb4 sonrası Siyahın piyon yapısı kötüleşir. Motor: +0.92.' },
      ],
    },
    '12w': {
      text: 'Vezir b5’e gelir ve a5 filine ve b7 piyonuna saldırır.',
      amac: 'Siyahı vezir kanadında savunmaya zorlamak.',
      neden: 'Forumdaki yorumcuya göre 12.Qb5 ile başlayan karmaşa Beyazın aleyhine döndü, çünkü vezir b5’te a5 filinden daha kötü durdu. Motor 12.f3’ü biraz daha iyi buluyor (−0.35 yerine −0.45).',
      diger: [
        { move: '12.f3', text: 'e4 hazırlığı: 12...cxd4 13.e4 Bg6 14.Qb5. Motor: −0.35.' },
        { move: '12.Qa3', text: 'Vezir a3’ten c5 piyonuna baskı yapar. Motor: −0.47.' },
      ],
    },
    '12b': {
      text: '12...b6 ile b7 kurtarılır ve a5 fili korunur.',
      amac: 'Hem a5 filini hem b7 piyonunu tek hamleyle korumak.',
      neden: 'Doğal ve sağlam bir hamle. Motor 12...Bc7’yi öneriyor (−0.39): Siyah b7’yi feda eder ama 13.Qxb7 Be4 ile taşlarını aktif hale getirir. 12...b6 sonrası oyun eşit (−0.07).',
      diger: [
        { move: '12...Bc7', text: '13.Qxb7 Be4 14.Qb3 Nc6 ile Siyah piyonu verir ama gelişimde öne geçer. Motor: −0.39.' },
        { move: '12...Bb6', text: 'Fil b6’ya çekilir; 13.a5 Bc7 ile benzer bir yapı. Motor: −0.26.' },
      ],
    },
    '13w': {
      text: '13.f3 ile e4 ilerleyişi hazırlanır.',
      amac: 'e4 ile f5 filini kovalamak ve merkezi piyonlarla doldurmak.',
      neden: 'Chess Explained kitabında belirtildiği gibi bu yapılarda Beyaz sık sık f3 ve e4 oynar, gerekirse bunu bir piyon pahasına yapar. Bedeli, e3 piyonunun zayıflaması ve d4’ün korumasız kalmasıdır. Motor 13.Be2’yi öneriyor (−0.07 yerine −0.36).',
      diger: [
        { move: '13.Be2', text: 'Sakin bir hamle: 13...Be4 14.Bf3 ile beyaz kareli filler değişir. Motor: −0.07.' },
        { move: '13.Bd3', text: 'f5 filiyle değişim önerir: 13...a6 14.Qc4 Bxd3 15.Nxd3. Motor: −0.20.' },
      ],
    },
    '13b': {
      text: 'Siyah d4’te alır.',
      amac: 'Merkezi açmak ve Beyazı d4’te geri almak ya da piyon vermek arasında seçime zorlamak.',
      neden: '13...cxd4, Beyazın e4 ilerleyişinden önce merkezdeki gerilimi Siyah lehine çözer. Bu hamle ile oyunun ana yapısı oluşur.',
      diger: [
        { move: '13...a6', text: 'Önce vezir kovalanır: 14.Qb3 cxd4 15.exd4 Nbd7. Motor: −0.31.' },
        { move: '13...Bg6', text: 'Fil önceden çekilir; 14.Qb3 Rc8. Motor: −0.14.' },
      ],
    },
    '14w': {
      text: '14.e4: Beyaz fili kovalar ve d4 piyonunu geri almaz.',
      amac: 'Merkezi piyonlarla doldurmak ve f5 filini pasif bir kareye itmek; karşılığında bir piyon vermek.',
      neden: 'Ragozin, merkez ve hızlı gelişim için piyonu verdi. Motor 14.exd4’ü biraz daha iyi görüyor ama fark küçük (−0.36 ve −0.42). Forumdaki yorumcu, Ragozin’in merkez piyonunu “yanlış adama” karşı feda ettiğini yazıyor: Capablanca d4 piyonunu oyunun sonuna kadar kullandı.',
      diger: [
        { move: '14.exd4', text: 'Piyonu geri alır: 14...Rc8 15.Bb3 a6 16.Qe2 ile yapı dengeli. Motor: −0.36.' },
        { move: '14.Bb3', text: 'Fili güvene alır ama 14...a6 15.Qc4 Nfd7 ile Siyah tempo kazanır. Motor: −0.93.' },
      ],
    },
    '14b': {
      text: 'Fil g6’ya çekilir.',
      amac: 'Fili b1-h7 çaprazında tutmak; ileride ...f5 ile bu çapraz açılacak.',
      neden: 'Motor önce 14...a6 ile vezire saldırmayı öneriyor (−0.30); maç hamlesi sonrası durum eşit (+0.01). 14...Rc8? ise 15.exf5 Rc5 16.Qb3 Rxe5 ile Beyaz lehine (+0.79).',
      diger: [
        { move: '14...a6', text: '15.Qb3 Bg6 16.Bg5 Nbd7 ile Siyah tempo kazanır. Motor: −0.30.' },
        { move: '14...Rc8', text: '15.exf5 sonrası Siyah fili kaybeder; 15...Rc5 16.Qb3 Rxe5 yeterli değil. Motor: +0.79.' },
      ],
    },
    '15w': {
      text: 'Fil g5’ten f6 atını bağlar.',
      amac: 'f6 atını bağlamak ve Bxf6 ile Siyahın şah kanadını dağıtma tehdidi yaratmak.',
      neden: 'Ragozin piyon karşılığında aktif taşlar istedi. Motor 15.Be2’yi öneriyor (+0.07): fil c4’ten çekilir ve vezir d3’e gelerek d4 piyonuna baskı yapar. 15.Bg5 sonrası −0.46.',
      diger: [
        { move: '15.Be2', text: '15...a6 16.Qd3 b5 ile d4 piyonuna baskı. Motor: +0.07.' },
        { move: '15.Bd3', text: 'Fil d3’ten e4’ü korur; 15...a6 16.Qc4 Nbd7 17.Qxd4. Motor: −0.39.' },
      ],
    },
    '15b': {
      text: '15...a6 ile vezir kovalanır.',
      amac: 'Beyaz veziri b5’ten uzaklaştırmak ve vezir kanadında tempo kazanmak.',
      neden: 'Vezir b5’te Siyah için bir rahatsızlıktır; ...a6 onu geri çekilmeye zorlar. Motor bu hamleyi en iyi buluyor (−0.46).',
      diger: [
        { move: '15...Qc7', text: '16.Bf4 Qe7 ile tekrar. Motor: −0.26.' },
        { move: '15...Rc8', text: '16.Be2 a6 17.Qd3 ile Beyaz dengeyi bulur. Motor: 0.00.' },
      ],
    },
    '16w': {
      text: 'Tek iyi hamle. Vezir b3’e döner ve c4 filini savunur.',
      amac: 'Veziri güvene almak ve c4 filini korumak.',
      neden: '16.Bxf6? Qxf6 17.Ng4 axb5 ile Beyaz vezirini kaybeder (−4.89). 16.Nxg6 hxg6 17.Qb3 Qc5 ise h-hattını Siyaha açar ve vezir yine c4’e baskı yapar (−1.39).',
      diger: [
        { move: '16.Nxg6', text: '16...hxg6 17.Qb3 Qc5 sonrası d4 piyonu sağlam kalır ve Siyahın h-hattı açılır. Motor: −1.39.' },
        { move: '16.Bxf6', text: '16...Qxf6 17.Ng4 axb5 ile vezir gider. Motor: −4.89.' },
      ],
    },
    '16b': {
      text: 'Vezir c5’e gelir ve c4 filine baskı yapar.',
      amac: 'c4 filine saldırmak, d4 piyonunu desteklemek ve a7-g1 çaprazında Beyazın şahına bakmak.',
      neden: 'Vezir c5’te d4 piyonunun arkasında durur; bu çapraz oyun boyunca Siyahın ana silahlarından biri olacak. Motor: −0.68.',
      diger: [
        { move: '16...Qc7', text: '17.Nd3 Qb7 ile vezir e4’e baskı yapar. Motor: −0.48.' },
        { move: '16...Nbd7', text: '17.Nxd7 Qxd7 ile at değişir. Motor: −0.35.' },
      ],
    },
    '17w': {
      text: 'Beyaz f6 atını alır.',
      amac: 'Siyahın şah kanadını dağıtmak ve ardından Nxg6 ile Bxe6 ile piyonu geri almak.',
      neden: 'Bu hamle, d4 piyonunu geri almanın bir hazırlığıdır: f6 atı gidince e6 piyonu zayıflar. Motorun değerlendirmesi derinliğe göre değişiyor: derinlik 16’da 17.Bf4 daha iyi görünüyor (−0.76 ve −1.24), derinlik 20’de fark kayboluyor (Bxf6 −0.34). Asıl önemli olan bir sonraki hamledir.',
      diger: [
        { move: '17.Bf4', text: 'Fili tutar: 17...Nh5 18.Nd3 Qe7. Motor: −0.39 (derinlik 20).' },
        { move: '17.Nxg6', text: '17...hxg6 18.Bxf6 gxf6 19.Bxe6 ile piyon geri alınır. Motor: −0.25 (derinlik 20).' },
      ],
    },
    '17b': {
      text: 'Tek iyi hamle. Siyah piyonla alır.',
      amac: 'Taşı geri almak; şah kanadı piyonları dağılır ama iki fil ve g-hattı Siyahın olur.',
      neden: '17...d3+ 18.Kh1 gxf6 19.Nxd3 ile Siyah d4 piyonunu kaybeder (+0.15). 17...b5? ise 18.Bxe6 ile Beyaz lehine (+1.21).',
      diger: [
        { move: '17...d3+', text: '18.Kh1 gxf6 19.Nxd3 Qe7 ile Siyahın kama piyonu gider. Motor: +0.15.' },
      ],
    },
    '18w': {
      text: 'At d3’e çekilir ve vezire saldırır.',
      amac: 'Tempo kazanmak ve d4 piyonuna karşı bir savunucu getirmek.',
      neden: 'Bu oyunun ilk ciddi hatası budur. 18.Nxg6! hxg6 19.Bxe6 ile Beyaz piyonu geri alırdı ve oyun dengeye yakın olurdu (derinlik 20: −0.68; 19.Bxe6 d3+ 20.Kh1 d2 sonrası −0.22). 18.Nd3 sonrası e6 artık hiç alınamaz ve Siyah temiz bir piyon fazlasıyla kalır (−1.45).',
      diger: [
        { move: '18.Nxg6', text: '18...hxg6 19.Bxe6 d3+ 20.Kh1 d2 21.Bd5 ile malzeme eşitlenir. Motor: −0.68.' },
        { move: '18.Ng4', text: '18...d3+ 19.Kh1 d2 ile d-piyonu çok tehlikeli ilerler. Motor: −1.79.' },
      ],
    },
    '18b': {
      text: 'Vezir d6’ya gelir ve d4 piyonunu korur.',
      amac: 'd4 piyonunu desteklemek ve Beyazın Nab4 ya da Nf4 ile baskı kurmasını önlemek.',
      neden: 'Vezir d6’da hem d4’ü hem de b4 karesini kontrol eder. 18...Qe7 ve 18...Qc7 de iyi hamlelerdir, ama d6 en merkezi karedir.',
      diger: [
        { move: '18...Qe7', text: '19.Qd1 Rc8 20.Rc1 Qd6 ile aynı yapı. Motor: −1.17.' },
        { move: '18...Qc6', text: 'Vezir c6’dan e4’e baskı yapar. Motor: −1.00.' },
      ],
    },
    '19w': {
      text: 'Vezir d1’e geri döner.',
      amac: 'Veziri yeniden yerleştirmek; d1’den e2’ye ya da d-hattına geçmek.',
      neden: 'Vezir b3’te a6 ve b6 piyonlarıyla rahatsız ediliyordu. Ama d1’e çekilmek de pasiftir. Motor 19.Nab4’ü öneriyor: a2’deki pasif at oyuna girer (−1.35 yerine −1.50, derinlik 20).',
      diger: [
        { move: '19.Nab4', text: 'At oyuna girer ve a6’ya bakar: 19...Rc8 20.Rfc1 Nd7. Motor: −1.35.' },
        { move: '19.Rfd1', text: 'Kale d4 piyonuna baskı yapar: 19...Rc8 20.Nf2. Motor: −1.42.' },
      ],
    },
    '19b': {
      text: 'Kale c-hattına gelir ve c4 filine baskı yapar.',
      amac: 'Açık c-hattını almak ve c4 filini savunmaya zorlamak.',
      neden: 'Siyah gelişimini tamamlamak istiyor; b8 atı henüz gelişmedi. c-hattı Siyahın doğal hattıdır. Motor: −1.54.',
      diger: [
        { move: '19...Nc6', text: 'Önce at gelişir. Motor: −1.42.' },
        { move: '19...b5', text: '20.axb5 axb5 21.Bxb5 ile piyon geri gider. Motor: −1.32.' },
      ],
    },
    '20w': {
      text: '20.b3 ile c4 fili desteklenir.',
      amac: 'c4 filini korumak ve vezir kanadında piyon zinciri kurmak.',
      neden: 'Forumdaki yorumcuya göre 20.b3 c3 karesinde bir delik açtı ve Capablanca bunu kullandı. O yorumcu 20.Rc1’i önerse de motor bu fikre katılmıyor (20.Rc1 b5 ile −2.39); motorun tercihi 20.Bb3 (−1.58). 20.b3 sonrası −1.84.',
      diger: [
        { move: '20.Bb3', text: 'Fil b3’e çekilir ve c3 karesi zayıflamaz: 20...b5 21.Qe2. Motor: −1.58.' },
        { move: '20.Rc1', text: 'Forumda önerilen hamle: 20...b5 21.Bb3 Nc6 ile Siyah vezir kanadında ilerler. Motor: −2.39.' },
      ],
    },
    '20b': {
      text: 'At d7’den c5’e yönelir.',
      amac: 'Atı c5’e getirip d3 atıyla değişmek ya da b3 ve e4 piyonlarına baskı yapmak.',
      neden: 'Malzeme fazlası olan taraf taş değişimini sever. At c5’te d3 atına (d4 piyonunun en iyi savunucusuna) karşı durur. 20...Bc3 de iyidir: 21.Nxc3 dxc3 ile c3’te geçer piyon oluşur (−1.83).',
      diger: [
        { move: '20...Nc6', text: 'At c6’dan b4 ve e5 karelerine bakar. Motor: −1.86.' },
        { move: '20...Bc3', text: 'Fil hemen c3’e girer; 21.Nxc3 dxc3 ile Siyahın ilerlemiş bir c-piyonu olur. Motor: −1.83.' },
      ],
    },
    '21w': {
      text: 'Vezir e2’de c4 filini korur.',
      amac: 'Veziri merkezileştirmek ve c4 filini savunmak.',
      neden: '21.Nf2 veya 21.g4 daha kötüdür (−2.09). Vezir e2’de hem c4’ü hem de f2 ve e3 karelerini korur. Motor: −1.74.',
      diger: [
        { move: '21.Nf2', text: 'At f2’ye çekilir ama c4 zayıf kalır. Motor: −2.09.' },
        { move: '21.g4', text: 'Şah kanadında piyon ilerletir; 21...Rcb8 22.Bxe6 fxe6. Motor: −2.09.' },
      ],
    },
    '21b': {
      text: 'At c5’e yerleşir.',
      amac: 'd3 atına saldırmak ve değişim önermek.',
      neden: 'Capablanca sade bir yol seçti: atları değişmek. Motor 21...Rcb8’i biraz daha iyi buluyor (−1.71 yerine −1.18), ama 21...Nc5 planı nettir: d4’ü koruyacak Beyaz taşı azalır.',
      diger: [
        { move: '21...Rcb8', text: 'Kale b-hattından b4 ve b3’e baskı yapar: 22.b4 b5. Motor: −1.71.' },
        { move: '21...b5', text: 'Vezir kanadında ilerleyiş: 22.axb5 Bc7. Motor: −1.17.' },
      ],
    },
    '22w': {
      text: 'Beyaz atları değişir.',
      amac: 'c5 atını oyundan çıkarmak.',
      neden: 'At c5’te b3 ve e4’e baskı yapıyordu. 22.b4 Nxd3 23.Bxd3 Bxb4 ile Siyah bir piyon daha kazanır (−1.23). Motor değişimi en iyi buluyor (−1.13).',
      diger: [
        { move: '22.b4', text: '22...Nxd3 23.Bxd3 Bxb4 24.Nxb4 Qxb4 ile ikinci piyon gider. Motor: −1.23.' },
        { move: '22.Rac1', text: '22...b5 23.Nxc5 Rxc5 ile Siyah vezir kanadında ilerler. Motor: −1.92.' },
      ],
    },
    '22b': {
      text: 'Vezir c5’e döner.',
      amac: 'Veziri a7-g1 çaprazına geri getirmek ve d4 piyonunu desteklemek.',
      neden: '22...bxc5 piyon yapısını bozar (−0.53). 22...Rxc5? 23.b4 Rxc4 24.Qxc4 ile kale verilir (+0.56). Vezirle almak en doğal yoldur.',
      diger: [
        { move: '22...bxc5', text: '23.Nc1 sonrası c5 ve c-piyonları zayıf kalır. Motor: −0.53.' },
        { move: '22...Rxc5', text: '23.b4 Rxc4 24.Qxc4 ile Siyah kalite kaybeder. Motor: +0.56.' },
      ],
    },
    '23w': {
      text: 'Fil d3’e çekilir ve e4’ü destekler.',
      amac: 'c4 filini c-hattından uzaklaştırmak ve e4 piyonunu korumak.',
      neden: 'Fil c4’te c8 kalesinin baskısı altındaydı. 23.Kh1 de iyidir (−1.30): şahı a7-g1 çaprazından çıkarır. 23.Bd3 sonrası −1.31.',
      diger: [
        { move: '23.Kh1', text: 'Şah a7-g1 çaprazından çıkar; ileride ...d3+ veya ...Be3+ tehditleri olmaz. Motor: −1.30.' },
        { move: '23.Rf2', text: '23...b5 24.Bd3 Qa3 ile Siyah vezir kanadında baskı kurar. Motor: −1.84.' },
      ],
    },
    '23b': {
      text: '23...f5! Dağılmış f-piyonu e4’e saldırır.',
      amac: 'e4 piyonunu kırmak, g6 filinin çaprazını açmak ve f-hattını açmak.',
      neden: 'Dağılmış piyon bir kusur değil, bir silahtır: ...f5 ile f-piyonu oyuna girer. Motor 23...f5 ile 23...Bc3’ü neredeyse aynı güçte görüyor (−1.28 ve −1.23).',
      diger: [
        { move: '23...Bc3', text: 'Fil hemen c3’e girer: 24.Rac1 f5 25.exf5 Bxf5. Motor: −1.23.' },
        { move: '23...b5', text: 'Vezir kanadında ilerleyiş: 24.f4 Bc3. Motor: −1.10.' },
      ],
    },
    '24w': {
      text: 'Kale b1’e gelir.',
      amac: 'b4 ilerleyişini hazırlamak ve b-hattını almak.',
      neden: 'Motor 24.Rac1’i öneriyor (−1.26): kale c-hattına gelir ve Siyahın c-hattı baskısını dengeler. 24.Rab1 sonrası Siyah ...fxe4 ve ...Bc3 ile hızla ilerler (−1.82).',
      diger: [
        { move: '24.Rac1', text: '24...Bc3 25.b4 Qd6 26.exf5 ile Beyaz direnir. Motor: −1.26.' },
        { move: '24.exf5', text: '24...Bxf5 25.f4 Bc3 ile Siyahın fili aktif kalır. Motor: −1.29.' },
      ],
    },
    '24b': {
      text: 'Siyah e4’te alır.',
      amac: 'Beyazın merkezini kırmak ve f-hattını açmak.',
      neden: '24...fxe4 Beyazı piyonla geri almaya zorlar; Bxe4 olmaz, çünkü ...d3+ gelir. Motor: −1.86.',
      diger: [
        { move: '24...Bc3', text: '25.exf5 exf5 26.b4 Qd6 ile benzer bir oyun. Motor: −1.68.' },
        { move: '24...Bb4', text: '25.Nxb4 Qxb4 26.exf5 Bxf5 ile Siyahın en iyi fili değişir. Motor: −0.62.' },
      ],
    },
    '25w': {
      text: 'Tek iyi hamle. Beyaz piyonla alır.',
      amac: 'e4 piyonunu geri almak ve merkezi tutmak.',
      neden: '25.Bxe4? d3+! 26.Qf2 Qxf2+ 27.Rxf2 ile Siyah bir taş kazanır (−3.89). 25.b4? exd3 ise doğrudan bir taş kaybettirir (−5.00).',
      diger: [
        { move: '25.Bxe4', text: '25...d3+ çift saldırı: piyon vezire saldırır ve c5 vezirinin çaprazından şah çekilir. Motor: −3.89.' },
      ],
    },
    '25b': {
      text: '25...Bc3! Fil d4’ü destekler.',
      amac: 'Fili 20.b3’ün açtığı c3 karesine yerleştirmek; d4’ü korumak ve b4 ile e1 karelerini kontrol etmek.',
      neden: 'Na2 fili alırsa 26.Nxc3 dxc3+ ile d-piyonu ilerler ve vezirin çaprazı açılarak şah çekilir; Siyahın c3’te ilerlemiş bir piyonu olur. Motor: −1.74.',
      diger: [
        { move: '25...Bb4', text: '26.Nxb4 Qxb4 27.Rf3 Rc3 ile fil değişir. Motor: −1.22.' },
        { move: '25...Bh5', text: '26.g4 Qg5 27.Kh1 ile fil kapanır. Motor: +0.30.' },
      ],
    },
    '26w': {
      text: 'b4 ile c5 vezirine saldırılır.',
      amac: 'Veziri a7-g1 çaprazından uzaklaştırmak ve vezir kanadında ilerlemek.',
      neden: 'Motor 26.Rf3’ü öneriyor (−1.83): kale f-hattını alır ve şah kanadında aktif olur. 26.b4 sonrası b4 piyonu zayıflar ve c3 fili daha güçlü olur (−2.54).',
      diger: [
        { move: '26.Rf3', text: '26...b5 27.Qf2 Qe5 28.Rf1 ile Beyaz f-hattında karşı oyun arar. Motor: −1.83.' },
        { move: '26.Rbd1', text: '26...b5 27.e5 bxa4 28.b4 ile vezir kanadında karmaşa. Motor: −1.98.' },
      ],
    },
    '26b': {
      text: 'Vezir e5’e gelir.',
      amac: 'Veziri merkezileştirmek; e4 ve h2’ye baskı yapmak.',
      neden: 'Vezir e5’te hem e4 piyonuna hem de b8-h2 çaprazına bakar. Motor 26...Qg5’i öneriyor (−2.68): vezir g-hattından Beyazın şahına baskı yapar.',
      diger: [
        { move: '26...Qg5', text: '27.Bxa6 Rd8 28.Rf3 d3 ile d-piyonu ilerler. Motor: −2.68.' },
        { move: '26...Qe7', text: '27.Bxa6 Rc7 ile a6 gider. Motor: −1.91.' },
      ],
    },
    '27w': {
      text: 'At c1’e çekilir.',
      amac: 'Atı b3 ya da e2 üzerinden yeniden oyuna sokmak.',
      neden: 'At a2’de tamamen pasifti. Ama c1’de de pasiftir: d3 filini korur, ama b3 ve e2 dışında gidebileceği iyi bir kare yoktur. Motor 27.Qf2’yi öneriyor (−2.25 yerine −3.09).',
      diger: [
        { move: '27.Qf2', text: 'Vezir f-hattına gelir: 27...b5 28.a5 Qg5. Motor: −2.25.' },
        { move: '27.h4', text: 'Şah için kaçış karesi açar: 27...b5 28.a5 Bh5. Motor: −2.28.' },
      ],
    },
    '27b': {
      text: '27...a5 ile vezir kanadı açılır.',
      amac: 'b4 piyonunu değişip a-hattını açmak ve a8 kalesini oyuna katmak.',
      neden: 'Capablanca vezir kanadını açmayı seçti. Motor 27...Qg5’i öneriyor (−3.03): vezir g-hattından e3 karesine girer. 27...a5 sonrası −2.08.',
      diger: [
        { move: '27...Qg5', text: '28.Kh1 Bd2 29.Nb3 Be3 ile fil ve vezir Beyazın şahına baskı yapar. Motor: −3.03.' },
        { move: '27...Bh5', text: '28.Qf2 Qg5 29.Ne2 Bd2 ile fil g6’dan h5’e geçer. Motor: −2.74.' },
      ],
    },
    '28w': {
      text: 'Tek iyi hamle. Beyaz a5’te alır.',
      amac: 'b4 piyonunu değişmek ve a-hattını Siyaha vermeden önce kendi kalesini oyuna katmak.',
      neden: '28.Na2? axb4 29.Nxb4 Rxa4 ile Siyah bir piyon daha kazanır (−3.20). 28.b5 Qg5 29.Nb3 Bh5 ile Siyahın saldırısı güçlenir (−3.39).',
      diger: [
        { move: '28.Na2', text: '28...axb4 29.Nxb4 Rxa4 ile a4 piyonu gider. Motor: −3.20.' },
        { move: '28.b5', text: '28...Qg5 29.Nb3 Bh5 ile Siyah şah kanadında saldırır. Motor: −3.39.' },
      ],
    },
    '28b': {
      text: 'Fil a5’e döner.',
      amac: 'Fili a5’e getirip c3 karesini boşaltmak ve a-hattını kapatmak.',
      neden: 'Motor 28...bxa5’i biraz daha iyi buluyor (−2.19): b-piyonu a5’e gider ve fil c3’te kalır. Capablanca fili a5’e çekip b6 piyonunu korudu (−1.83).',
      diger: [
        { move: '28...bxa5', text: '29.Rb5 Rc5 30.Rb7 Rb8 ile b-hattı Siyaha geçer. Motor: −2.19.' },
        { move: '28...Rxa5', text: '29.Qd1 Bxe4 30.Rxb6 Ba8 ile e4 piyonu gider. Motor: −2.08.' },
      ],
    },
    '29w': {
      text: 'Kale b5’ten e5 vezirine ve a5 filine saldırır.',
      amac: 'Siyahın taşlarını rahatsız etmek ve b-hattında aktif olmak.',
      neden: 'Kale b5’te aktif görünür, ama 29...Rc5 ile değişime zorlanır. Motor 29.Kh1’i öneriyor (−1.97): şah a7-g1 çaprazından çıkar.',
      diger: [
        { move: '29.Kh1', text: '29...Ra7 30.Qf3 Bd2 31.Ne2 ile Beyaz savunur. Motor: −1.97.' },
        { move: '29.Qd1', text: '29...Rc3 30.Rb5 Rc5 31.Ne2 ile vezir d1’den savunur. Motor: −2.05.' },
      ],
    },
    '29b': {
      text: 'Tek iyi hamle. Kale c5’e gelir ve değişim önerir.',
      amac: 'Hem vezire hem file gelen saldırıyı tek hamleyle kesmek.',
      neden: '29...Qg7 30.Nb3 Qh6 31.Nxd4 ile d4 piyonu gider (−1.62). 29...Qd6 ise 30.h4 Rc5 31.Rxc5 Qxc5 ile avantajın çoğunu kaybettirir (−0.31).',
      diger: [
        { move: '29...Qg7', text: '30.Nb3 Qh6 31.Nxd4 Bd2 ile d4 kaybedilir. Motor: −1.62.' },
        { move: '29...Qd6', text: '30.h4 Rc5 31.Rxc5 Qxc5 ile a5 fili zayıf kalır. Motor: −0.31.' },
      ],
    },
    '30w': {
      text: 'Hata. Vezir f3’e gelir ve kale değişimine izin verir.',
      amac: 'Veziri f-hattına getirip f7’ye baskı yapmak.',
      neden: 'Kale değişimi Siyaha yarar: a-hattı açılır ve fil d2-e3 karelerine girer. Motor (derinlik 20) 30.Qa2 veya 30.Rb2’yi öneriyor (−2.70); 30.Qf3 sonrası −3.76.',
      diger: [
        { move: '30.Rb2', text: '30...Qg5 31.Nb3 Rc3 32.Nxa5 bxa5 ile kale b-hattında kalır. Motor: −2.71.' },
        { move: '30.Rxc5', text: '30...bxc5 31.Qc2 Rc8 32.Qc4 ile Siyahın c-piyonu zayıf kalır. Motor: −2.72.' },
      ],
    },
    '30b': {
      text: 'Kaleler değişir.',
      amac: 'Beyazın en aktif taşını değişmek ve a-hattını açmak.',
      neden: 'Motor 30...Bd2’yi öneriyor (−3.69): fil c1 atına saldırır ve kale değişimi sonraya kalır. 30...Rxb5 sonrası −2.83, ama 31.axb5 ile Beyaz daha iyi bir alma yolunu kaçırdı.',
      diger: [
        { move: '30...Bd2', text: '31.Ne2 Rxb5 32.axb5 Ra3 ile oyunun aynı yapısı bir tempo farkla oluşur. Motor: −3.69.' },
        { move: '30...Qg5', text: '31.Rxc5 bxc5 32.Nb3 Bc7 ile değişim yine olur. Motor: −2.40.' },
      ],
    },
    '31w': {
      text: 'Beyaz piyonla alır.',
      amac: 'b5’te bir geçer piyon yaratmak.',
      neden: '31.Bxb5 daha iyiydi (−3.32): fil aktif olur ve e4 piyonunu korumasız bırakır ama d3’te hedef olmaz. 31.axb5 sonrası fil d3’te kalır ve Siyahın kalesinin hedefi olur (−3.86). 31.Ne2? ise 31...Rb2 ile hemen kaybeder (−5.42).',
      diger: [
        { move: '31.Bxb5', text: '31...Qxe4 32.Qf6 Be1 33.Ne2 ile Beyaz karşı oyun arar. Motor: −3.32.' },
        { move: '31.Ne2', text: '31...Rb2 32.Nf4 Rf8 ile Siyahın kalesi ikinci yataya girer. Motor: −5.42.' },
      ],
    },
    '31b': {
      text: '31...Bd2! Fil c1 atına saldırır.',
      amac: 'Atı c1’den kovalamak ve fili e3 karesine yönlendirmek.',
      neden: 'Fil d2’den e3’e geçerek Beyazın şahını h1’e kilitler. 31...Bc3 veya 31...Qg5 daha yavaştır (−2.83). Motor: −3.83.',
      diger: [
        { move: '31...Bc3', text: '32.g3 Bd2 33.Ne2 Bh5 ile aynı fikir bir tempo geç gelir. Motor: −2.83.' },
        { move: '31...Qg5', text: '32.Kh1 Qe3 33.Bb1 Bd2 ile vezirler değişebilir. Motor: −2.83.' },
      ],
    },
    '32w': {
      text: 'At e2’ye kaçar.',
      amac: 'Atı güvene almak ve d4 piyonuna bakmak.',
      neden: '32.Nb3? Be3+ 33.Kh1 Rc8 ile Siyahın kalesi c-hattına girer (−4.25). 32.Ne2 ile at hem d4’e hem de f4 ve g3 karelerine bakar. Motor: −3.57.',
      diger: [
        { move: '32.Kh1', text: 'Önce şah çekilir; 32...Ra3 33.Ne2 ile aynı yapı. Motor: −3.60.' },
        { move: '32.Nb3', text: '32...Be3+ 33.Kh1 Rc8 ile c-hattı Siyaha geçer. Motor: −4.25.' },
      ],
    },
    '32b': {
      text: 'Fil şah çeker ve e3’e yerleşir.',
      amac: 'Fili e3’te d4 piyonuyla desteklemek ve Beyazın şahını h1’e itmek.',
      neden: 'e3’teki fil Beyazın şahını kilitler ve f2 ile g1 karelerini kontrol eder. Motor 32...Ra3’ü biraz daha iyi buluyor (−3.76), ama fark küçük (−3.65).',
      diger: [
        { move: '32...Ra3', text: '33.Kh1 Be3 34.Bc2 h5 ile aynı yapı bir tempo farkla. Motor: −3.76.' },
        { move: '32...Ra2', text: '33.g3 Qh5 34.Kh1 Qxf3+ ile vezirler değişir. Motor: −3.27.' },
      ],
    },
    '33w': {
      text: 'Tek iyi hamle. Şah h1’e çekilir.',
      amac: 'Şahı şahtan çıkarmak.',
      neden: '33.Qxe3? dxe3 sonrası e3’te tehlikeli bir geçer piyon oluşur (−6.10). 33.Qf2? Qg5 34.g4 Bxf2+ ile vezir kaybedilir (−6.89).',
      diger: [
        { move: '33.Qxe3', text: '33...dxe3 34.Ng3 Ra2 35.Bc4 ile e3 piyonu çok güçlü. Motor: −6.10.' },
        { move: '33.Qf2', text: '33...Qg5 34.g4 Bxf2+ ile vezir gider. Motor: −6.89.' },
      ],
    },
    '33b': {
      text: 'Kale a3’ten d3 filine saldırır.',
      amac: 'd3 filini savunmaya bağlamak ve Beyazın taşlarını pasifleştirmek.',
      neden: 'Fil d3’ü sadece vezir ve kale koruyabilir; f3 vezirinin d3’e yolu e3 fili tarafından kapalı. Motor 33...Ra3’ü en iyi buluyor (−3.75).',
      diger: [
        { move: '33...h5', text: 'Önce şah için kaçış karesi: 34.Ng3 Ra3 35.Be2 h4. Motor: −3.10.' },
        { move: '33...Qg5', text: '34.e5 Ra7 35.Bxg6 hxg6 ile Beyaz biraz rahatlar. Motor: −2.97.' },
      ],
    },
    '34w': {
      text: 'Kale d1’e gelir ve d3 filini korur.',
      amac: 'd3 filini savunmak ve d4 piyonuna baskı yapmak.',
      neden: 'Bu doğal savunmadır. 34.Bc4 de iyidir (−3.92): fil d3’ten çekilir ve e6’ya baskı yapar. 34.Rd1 sonrası −4.01.',
      diger: [
        { move: '34.Bc4', text: '34...h5 35.h4 Qxe4 36.Qf6 ile Beyaz karşı oyun arar. Motor: −3.92.' },
        { move: '34.Bc2', text: '34...Ra2 35.Bb3 Rb2 36.Bd1 ile fil pasifleşir. Motor: −4.14.' },
      ],
    },
    '34b': {
      text: '34...h5 ile şaha kaçış karesi açılır ve g4 karesi kontrol edilir.',
      amac: 'Arka yatayı güvene almak ve g4 karesini kontrol etmek.',
      neden: 'Siyah şahına h7 karesini açar ve ...h4 ile g3 karesini kontrol etmeye hazırlanır; böylece arka yataydaki şah tehlikeleri baştan ortadan kalkar. Motor bu hamleyi en iyi buluyor (−4.08).',
      diger: [
        { move: '34...Kg7', text: '35.Ng3 Qg5 36.Be2 Rc3 ile şah g7’de güvende. Motor: −3.72.' },
        { move: '34...Qg5', text: '35.Bc4 Ra4 36.Bd3 Bh5 ile fil h5’e geçer. Motor: −3.67.' },
      ],
    },
    '35w': {
      text: '35.h3 ile şaha kaçış karesi açılır.',
      amac: 'Arka yatayı güvene almak ve g4 karesini kontrol etmek.',
      neden: 'Motor 35.Qg3’ü öneriyor (−3.90): vezir değişimi Beyazın şahını kurtarır ama oyun yine kaybedilmiştir. Forumda tartışılan 35.Ng3 ise 35...h4 ile daha kötüdür (−4.75). 35.h3 sonrası Siyahın kombinezonu gelir (−4.10).',
      diger: [
        { move: '35.Qg3', text: '35...Qxg3 36.hxg3 e5 37.Ng1 ile vezirsiz oyunda Siyah iki fil ve piyon fazlasıyla kazanır. Motor: −3.90.' },
        { move: '35.Ng3', text: '35...h4 36.Ne2 Bh5 37.Qf1 ile at geri döner. Motor: −4.75.' },
      ],
    },
    '35b': {
      text: '35...Rxd3! Kale e4’ün savunucusunu alır.',
      amac: 'd3 filini ortadan kaldırmak, e4 piyonunu korumasız bırakmak ve ...Bxe4 ile çatal yapmak.',
      neden: 'd3 fili e4 piyonunun tek savunucusuydu. 36.Rxd3 sonrası 36...Bxe4 hem d3 kalesine hem de f3 vezirine saldırır. Motor: 35...Rxd3 −4.93, sonraki en iyi 35...Qg5 −4.19.',
      diger: [
        { move: '35...Qg5', text: '36.Ng1 Ra2 37.Rf1 Rd2 ile Siyah baskıyı sürdürür. Motor: −4.19.' },
        { move: '35...Kg7', text: '36.Bc2 Ra2 37.Bd3 h4 ile Siyah yavaş ilerler. Motor: −3.83.' },
      ],
    },
    '36w': {
      text: 'Tek iyi hamle. Beyaz kaleyle alır.',
      amac: 'Kaleyi geri almak ve malzeme dengesini korumak.',
      neden: '36.Rf1 Rd2 37.Nf4 Qxf4 ile Siyah bir taş daha kazanır (−6.02). 36.Re1 Rd2 37.Ng3 h4 de aynı sonuca gider (−6.03).',
      diger: [
        { move: '36.Rf1', text: '36...Rd2 37.Nf4 Qxf4 38.Qxf4 Bxf4 ile Siyah iki taş fazlasıyla kalır. Motor: −6.02.' },
        { move: '36.Re1', text: '36...Rd2 37.Ng3 h4 38.Nf1 ile kale e2 atına saldırır. Motor: −6.03.' },
      ],
    },
    '36b': {
      text: 'Tek iyi hamle. 36...Bxe4! fil d3 kalesine ve f3 vezirine aynı anda saldırır.',
      amac: 'Çatal ile kaleyi kazanmak ve d4 piyonunu geçer piyona çevirmek.',
      neden: '36...Qxe4 37.Qxe4 Bxe4 38.Rd1 ile vezirler değişir ve oyun çok daha zor bir oyunsonuna döner (−2.68). 36...Bxe4 ile Siyah zorunlu bir şekilde kazanır (−4.96).',
      diger: [
        { move: '36...Qxe4', text: '37.Qxe4 Bxe4 38.Rd1 e5 ile iki fil ve iki fazla piyona karşı kale ve at kalır; Siyah üstün ama kazanç uzun sürer. Motor: −2.68.' },
        { move: '36...Qxb5', text: '37.Rd1 Qe5 38.Rf1 ile Beyaz biraz rahatlar. Motor: −2.58.' },
      ],
    },
    '37w': {
      text: 'Beyaz kaleyi e3 filine verir.',
      amac: 'Kaleyi bir fil için vermek ve en azından malzemenin bir kısmını kurtarmak.',
      neden: 'Kale d3’te ve vezir f3’te saldırı altında; ikisini birden kurtarmak mümkün değil. 37.Qxe3 dxe3 38.Rxe3 Bxg2+ daha kötüdür (−5.35). 37.Nxd4? Bxd3 ise bir kale kaybettirir (−5.96).',
      diger: [
        { move: '37.Qxe3', text: '37...dxe3 38.Rxe3 Bxg2+ 39.Kxg2 ile Beyaz vezirini bir fil ve iki piyona vermiş olur. Motor: −5.35.' },
        { move: '37.Nxd4', text: '37...Bxd3 38.Nb3 Bg6 ile Siyah kaleyi alır ve bir taş ile iki piyon fazlasıyla kalır. Motor: −5.96.' },
      ],
    },
    '37b': {
      text: 'Tek iyi hamle. Piyonla alınır; Siyahın e3’te geçer piyonu var.',
      amac: 'Kaleyi geri almak ve d4 piyonunu e3’e ilerletmek.',
      neden: '37...Bxf3?? 38.Rxe5 ile e5 vezirini kaybeder (+4.81). 37...dxe3 ile Siyah hem e3’te geçer piyon kazanır hem de f3 vezirine saldırmaya devam eder.',
      diger: [
        { move: '37...Bxf3', text: '38.Rxe5 Bxe2 39.Rxe2 ile Beyaz bir kale fazlasıyla. Motor: +4.81.' },
      ],
    },
    '38w': {
      text: 'Vezir f1’e çekilir.',
      amac: 'Veziri e4 filinin saldırısından kurtarmak ve e2 atını korumak.',
      neden: '38.Qg3+ daha iyiydi (−4.81): vezirleri değişir ve Beyaz en azından direnir. 38.Qf1 sonrası Siyahın veziri b5’i alır ve e2 atını bağlar (−5.14).',
      diger: [
        { move: '38.Qg3+', text: '38...Qxg3 39.Nxg3 Bd3 40.Kg1 ile vezirsiz bir oyunsonu. Motor: −4.81.' },
        { move: '38.Qf4', text: '38...Qxf4 39.Nxf4 e5 40.Ne2 ile vezirler değişir. Motor: −5.03.' },
      ],
    },
    '38b': {
      text: 'Vezir b5 piyonunu alır ve e2 atını f1 vezirine bağlar.',
      amac: 'Beyazın son geçer piyonunu almak ve e2 atını bağlamak.',
      neden: 'Vezir b5’ten e2 atına ve f1’e bakar; at artık hareket edemez. Motor: −5.00. 38...Bd3 de iyidir (−4.98).',
      diger: [
        { move: '38...Bd3', text: '39.Qd1 Bxb5 40.Qd8+ Kg7 ile benzer bir oyun. Motor: −4.98.' },
        { move: '38...h4', text: '39.Kg1 Qxb5 40.Qf4 Qxe2 ile daha yavaş. Motor: −4.54.' },
      ],
    },
    '39w': {
      text: 'Hata. Vezir f4’e gelir ve e2 atını korumasız bırakır.',
      amac: 'e4 filine ve e3 piyonuna saldırmak.',
      neden: 'Vezir f1’den çekilince e2 atı korumasız kalır. Motor 39.Kg1’i öneriyor (−4.96); 39.Qf4 sonrası −6.06.',
      diger: [
        { move: '39.Kg1', text: '39...Qg5 40.Nc3 Bc6 41.Ne2 ile Beyaz direnir. Motor: −4.96.' },
        { move: '39.h4', text: '39...Bg6 40.Qf3 Qa4 41.Nf4 ile Beyaz karşı oyun arar. Motor: −4.95.' },
      ],
    },
    '39b': {
      text: 'Fil g2’de şah çeker.',
      amac: 'Fili feda ederek şahı g2’ye çekmek ve ardından e2 atını şahla almak.',
      neden: 'Forumdaki bir yorumcu Capablanca’nın neden 39...Qxe2 yerine 39...Bxg2+ oynadığını soruyor; motor ikisini de kazanç olarak görüyor (−6.63 ve −6.54). Bxg2+ sonrası Siyah atı şahla alır ve e3 piyonu vezirle korunur.',
      diger: [
        { move: '39...Qxe2', text: '40.Qxe4 Qd1+ 41.Kh2 e2 ile e-piyonu vezir olur. Motor: −6.63.' },
        { move: '39...Qf5', text: '40.Qg3+ Qg6 41.Qxg6+ Bxg6 ile vezirler değişir. Motor: −4.84.' },
      ],
    },
    '40w': {
      text: 'Beyaz fili alır.',
      amac: 'Fili geri almak.',
      neden: 'Bu tek doğal hamledir; 40.Kg1 veya 40.Kh2 de aynı sonuca gider (−6.60).',
      diger: [
        { move: '40.Kg1', text: '40...Qxe2 41.Qg3+ Kh7 42.Qxg2 ile benzer. Motor: −6.60.' },
      ],
    },
    '40b': {
      text: 'Vezir e2 atını şahla alır. Ragozin terk etti.',
      amac: 'Atı almak ve e3 piyonunu vezirle desteklemek.',
      neden: 'Siyah vezir ve beş piyona karşı vezir ve bir piyonla kaldı; e3 piyonu da vezir olmak üzere. 41.Kg1 Qf2+ 42.Qxf2 exf2+ ile piyon oyunsonu Siyah için kolay bir kazançtır. Motor: −6.59.',
      diger: [
        { move: '40...Qd5+', text: '41.Kg3 b5 42.Nd4 e2 ile Siyah atı bırakır ve avantajın çoğunu kaybeder. Motor: −0.02.' },
      ],
    },
  },
  qa: [
    { q: 'Siyah neden 10...c5 oynadı, 10...Nbd7 değil?', a: '10...Nbd7 11.Nxd7 Nxd7 12.e4 Bg6 sonrası Beyaz merkezi rahatça alır (Motor: +0.19). 10...c5 ise Beyazın vezir kanadındaki baskısına merkezden cevap verir ve d4’ü hemen sorgular (−0.24). ChessTalk forumundaki yorumcuya göre 10.Ne5 c5 11.Na2 Ba5 ile Siyah kolayca eşitledi.' },
    { q: 'Ragozin 14.e4 ile neden bir piyon verdi?', a: 'Hollanda varyantında Beyazın tipik planı f3 ve e4 ile merkezi almaktır; Chess Explained kitabında bunun sık sık bir piyon pahasına yapıldığı belirtiliyor. Ragozin, merkezdeki piyonlar ve aktif taşlarla d4’ü geri alabileceğini düşündü. 14.exd4 de mümkündü (−0.36); fark küçüktü, ama piyonu geri almak için somut bir yol bulmak gerekiyordu.' },
    { q: 'Beyaz piyonu nerede geri alabilirdi?', a: '17.Bxf6 gxf6 sonrası 18.Nxg6! hxg6 19.Bxe6 ile Beyaz e6 piyonunu alırdı (derinlik 20: −0.68). 18.Nd3 ile bu fırsat kaçtı; e6 artık hiçbir zaman alınamadı ve Siyah bir piyon fazlasıyla kaldı (−1.45).' },
    { q: 'd4 piyonu Siyaha ne kazandırdı?', a: 'Forumdaki yorumcunun deyişiyle d4 piyonu Beyazın pozisyonunda “boğazdaki bir kemik” oldu. Beyazın atlarına c3 ve e3 karelerini kapattı, c5 vezirine a7-g1 çaprazında destek verdi ve 25.Bxe4? d3+ gibi taktikler yarattı. Sonunda 37...dxe3 ile e3’te korunan bir geçer piyona dönüştü.' },
    { q: '20.b3 neden zayıf bir hamleydi?', a: 'Forumdaki yorumcuya göre 20.b3 c3 karesinde bir delik açtı ve Capablanca bunu kullandı: 25...Bc3 ile fil bu kareye yerleşti. Motor 20.Bb3’ü öneriyor (−1.58 yerine −1.84). Yorumcunun önerdiği 20.Rc1’i ise motor daha da kötü görüyor (−2.39).' },
    { q: 'Capablanca dağılmış piyonlarını nasıl bir avantaja çevirdi?', a: '23...f5 ile f-piyonu e4’e saldırdı, g6 filinin çaprazını açtı ve 24...fxe4 25.fxe4 ile f-hattı açıldı. Böylece dağılmış piyonlar bir kusur olmaktan çıktı ve Siyahın filleri aktif hale geldi.' },
    { q: '30.Qf3 neden bir hataydı?', a: '30.Qf3 sonrası 30...Rxb5 31.axb5 Bd2! ile fil c1 atına saldırdı ve 32...Be3+ ile e3’e yerleşti; 33...Ra3 ile de a-hattından d3 filine baskı geldi. Motor (derinlik 20) 30.Qa2 veya 30.Rb2’yi öneriyor (−2.70); 30.Qf3 sonrası −3.76.' },
    { q: '35...Rxd3 kombinezonu nasıl çalışıyor?', a: 'd3 fili e4 piyonunun tek savunucusuydu. 35...Rxd3 36.Rxd3 Bxe4! sonrası fil hem d3 kalesine hem de f3 vezirine saldırır. 37.Rxe3 dxe3 ile Siyah kaleyi geri alır ve e3’te geçer piyon kazanır. 37...Bxf3?? ise 38.Rxe5 ile vezir kaybettirirdi.' },
    { q: 'Ragozin sonda nerede daha uzun direnebilirdi?', a: '38.Qg3+ ile vezirleri değişmek (−4.81) ya da 39.Kg1 ile e2 atını korumak (−4.96) daha uzun bir direniş sağlardı. 39.Qf4? e2 atını korumasız bıraktı ve 39...Bxg2+ 40.Kxg2 Qxe2+ ile oyun bitti.' },
  ],
  sources: [
    { title: 'ChessTalk forumu: Semmering Baden 1937 (2. sayfa, 12. tur ve oyun yorumları)', url: 'https://forum.chesstalk.com/forum/chesstalk-canada-s-chess-discussion-board-go-to-www-strategygames-ca-for-your-chess-needs/205678-semmering-baden-1937/page2' },
    { title: 'ChessTalk forumu: Semmering Baden 1937 (turnuva bilgisi)', url: 'https://forum.chesstalk.com/forum/chesstalk-canada-s-chess-discussion-board-go-to-www-strategygames-ca-for-your-chess-needs/205678-semmering-baden-1937' },
    { title: '365Chess: Semmering Baden 1937', url: 'https://www.365chess.com/tournaments/Semmering_Baden_1937/28473' },
    { title: 'ChessBase: Remembering Ragozin', url: 'https://en.chessbase.com/post/110th-birthday-of-viacheslav-ragozin' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
    { title: 'Wikipedia: Viacheslav Ragozin', url: 'https://en.wikipedia.org/wiki/Viacheslav_Ragozin' },
    { title: 'Chess Explained: The Main-Line Slav (örnek bölüm)', url: 'https://chess-tigers.de/cdn/shop/files/Chess_Explained_The_Main-Line_Slav.pdf' },
  ],
  exercises: [
    { id: 'rca-1', kind: 'tekrar', plan: false, title: 'Fil c3’e',
      source: 'Ragozin – Capablanca, Semmering 1937 (25. hamle)',
      fen: 'r1r3k1/5p1p/pp2p1b1/b1q5/P2pP3/1P1B4/N3Q1PP/1R3RK1 b - - 0 25',
      prompt: 'Siyah ...f5 ile e4’ü kırdı ve Beyaz fxe4 ile geri aldı. Siyahın d4’te bir kama piyonu ve a5’te kara kareli bir fili var. Fil nerede en güçlü olur?',
      hint: 'Fil d4 piyonunu desteklesin. a2 atı onu alırsa d-piyonu ne yapar?',
      line: ['Bc3'],
      explanation: '**25...Bc3!** Fil d4’ü destekler ve Beyazın b4 ilerleyişini kontrol eder. 26.Nxc3 dxc3+ sonrası piyon c5 vezirinin çaprazını açarak şah çeker ve Siyah c3’te ilerlemiş bir piyon kazanır. Motor: ...Bc3 −1.8, sonraki en iyi 25...Bb4 −0.7.',
      link: '...c5 kırılmasından kalan d4 piyonu, filin c3’te durmasını mümkün kıldı.' },
    { id: 'rca-2', kind: 'tekrar', plan: false, title: 'Çatal ve geçer piyon',
      source: 'Ragozin – Capablanca, Semmering 1937 (36. hamle)',
      fen: '6k1/5p2/1p2p1b1/1P2q2p/3pP3/3RbQ1P/4N1P1/7K b - - 0 36',
      prompt: 'Capablanca kalesini d3 filine verdi ve Beyaz kaleyle aldı. Şimdi e4 piyonunu kimse korumuyor. Siyah nasıl devam eder?',
      hint: 'g6 filinin çaprazında hem bir piyon hem de iki Beyaz taşı var.',
      line: ['Bxe4', 'Rxe3', 'dxe3'],
      explanation: '**36...Bxe4!** Fil hem d3 kalesine hem de f3 vezirine saldırır. **37.Rxe3 dxe3** sonrası Siyahın e3’te güçlü bir geçer piyonu var. Motor: ...Bxe4 −5.0, sonraki en iyi 36...Qxe4 −2.8.',
      link: 'd4’teki kama piyonu bu kombinezonla e3’te geçer piyona dönüştü.' },
    { id: 'rca-3', kind: 'transfer', plan: false, title: 'Geçer d-piyonu ilerliyor',
      source: 'Yusupov – Bareev, Linares turnuvası 1992 (22. hamle)',
      fen: '3q1Bk1/pp3pp1/4p1p1/b7/P2p1Pn1/1P6/N1Q3PP/R5K1 b - - 0 22',
      prompt: 'Aynı Slav varyantından bir oyun: Beyazın atı yine a2’de, Siyahın fili a5’te ve d4’te geçer bir piyonu var. f8’deki Beyaz fili alınabilir. Siyahın en güçlü hamlesi hangisi?',
      hint: 'Fil kaçamaz. Önce tempo kazanarak ilerleyebilecek bir piyon var mı?',
      line: ['d3'],
      explanation: '**22...d3!** Piyon c2 vezirine saldırarak ilerler; ...d2 tehdidi gelir ve a5 fili d2 karesini destekler. Motor: ...d3 −5.7, sonraki en iyi 22...Kxf8 −2.4.',
      link: 'Capablanca’nın oyununda olduğu gibi ...cxd4 sonrası kalan d-piyonu, Na2 ve Ba5 yapısıyla Siyahın ana kozu oldu.' },
    { id: 'rca-4', kind: 'transfer', plan: false, title: 'Kale değişimi ve vezir girişi',
      source: 'Bagirov – Mamedyarov, Bakü 2005 (26. hamle)',
      fen: '3rr1k1/p4p1p/1bp1q1p1/P4p2/1Q6/2N2P2/1P4PP/3R1R1K b - - 0 26',
      prompt: 'Aynı Slav varyantından bir oyun. Beyaz a5 ile b6 filine saldırdı. Siyahın kaleleri d-hattında, Beyazın şahı h1’de ve fil a7-g1 çaprazına bakıyor.',
      hint: 'Fili kurtarmak acele değil. d-hattındaki savunucuyu değiştirirseniz vezir nereye girer?',
      line: ['Rxd1', 'Nxd1', 'Qe2'],
      explanation: '**26...Rxd1! 27.Nxd1 Qe2!** Vezir ikinci yataya girer, d1 atına ve b2’ye saldırır; b6 fili g1 karesine bakar. Motor: ...Rxd1 −5.4, sonraki en iyi 26...Bc7 −3.4; 27...Qe2 −5.9, sonraki en iyi −3.9.',
      link: 'Capablanca da kaleleri değiştirip (30...Rxb5) kara kareli filini ve vezirini h1’deki şaha karşı kullandı.' },
  ],
};
