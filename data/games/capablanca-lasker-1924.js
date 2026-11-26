// Capablanca – Lasker, New York 1924. Kaynak: PgnMentor (Capablanca.pgn).
export default {
  id: 'capablanca-lasker-1924',
  theme: 'Slav değişim yapısı: at fedası ve geçer piyonlar',
  white: 'José Raúl Capablanca', black: 'Emanuel Lasker',
  whiteShort: 'Capablanca', blackShort: 'Lasker',
  event: 'New York turnuvası', site: 'New York', year: 1924, eco: 'D13',
  variation: 'Slav Savunması, Değişim Varyantı', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 c6 3. Nc3 d5 4. cxd5 cxd5 5. Nf3 Nc6 6. Bf4 e6 7. e3 Be7 8. Bd3 O-O 9. O-O Nh5 10. Be5 f5 11. Rc1 Nf6 12. Bxf6 gxf6 13. Nh4 Kh8 14. f4 Rg8 15. Rf3 Bd7 16. Rh3 Be8 17. a3 Rg7 18. Rg3 Rxg3 19. hxg3 Rc8 20. Kf2 Na5 21. Qf3 Nc4 22. Qe2 Nd6 23. Rh1 Ne4+ 24. Bxe4 fxe4 25. Qg4 f5 26. Nxf5 exf5 27. Qxf5 h5 28. g4 Rc6 29. g5 Kg8 30. Nxd5 Bf7 31. Nxe7+ Qxe7 32. g4 hxg4 33. Qh7+ Kf8 34. Rh6 Bg8 35. Qf5+ Kg7 36. Rxc6 bxc6 37. Kg3 Qe6 38. Kxg4 Qxf5+ 39. Kxf5 Bd5 40. b4 a6 41. Kg4 Bc4 42. f5 Bb3 43. Kf4 Bc2 44. Ke5 Kf7 45. a4 Kg7 46. d5 Bxa4 47. d6 c5 48. bxc5 Bc6 49. Ke6 a5 50. f6+ 1-0`,

  summary: 'New York 1924 turnuvasının 14. turunda (5 Nisan 1924) dünya şampiyonu Capablanca, eski şampiyon ve turnuva lideri Lasker’i yendi. Oyun, “çekilişçi” sayılan Slav Değişim Varyantında başladı. Lasker simetriyi kırmak için 9...Nh5 ve 10...f5 ile riskli bir yol seçti; 12.Bxf6 gxf6 sonrası Siyahın şah kanadı piyonları dağıldı, ama Siyah g-hattını ve e4 karesini kazandı. Orta oyunda her iki taraf da hata yaptı: Capablanca 21.Qf3 ile avantajını bıraktı, Lasker 23...Ne4+ ile karşılığını verdi. 26.Nxf5! ile Capablanca atını iki piyona feda edip Siyah şahını açtı. 30.Nxd5 ile oyunu yeniden dengeye bıraktı; ama Lasker 32...hxg4 ve özellikle 37...Qe6 ile vezirleri değiştirmeye izin verince, Beyazın şahı ve altı piyonu tek fili ezdi. Bu yenilgi Lasker’in turnuvayı kazanmasını engellemedi (16 puanla birinci, Capablanca 14½ ile ikinci), ama oyun, iki büyük ustanın en gergin karşılaşmalarından biri olarak hatırlanır.',
  intro: 'Slav Savunması (2...c6), d5 piyonunu c6 ile destekler ve c8 filini kapatmadan Vezir Gambiti’ne cevap verir. 4.cxd5 cxd5 ile oynanan Değişim Varyantında yapı tamamen simetriktir: c-hattı açılır, Beyazın tek artısı fazladan bir tempodur. Bu yüzden bu varyant uzun süre beraberlik silahı sayıldı. Ama simetri iki taraf için de bir sınavdır: dengeyi bozmak isteyen taraf yeni zayıflıklar yaratır. Bu oyunda Lasker, simetriyi ...Nh5, ...f5 ve ...gxf6 ile kırdı; Capablanca bu zayıflıkları önce sabitledi (f4), sonra bir at fedasıyla açtı (Nxf5) ve sonunda oyunsonu tekniğiyle kazandı. Oyunun bir de turnuva arka planı var: Lasker, saatinin hatalı çalıştığını ve bu yüzden zaman kaybettiğini iddia etti; turnuva direktörü Lederer ise Lasker’in saatini düzgün durdurmadığını ve zaman sıkıntısında olanın Capablanca olduğunu yazdı. Bu tartışma hiçbir zaman kesin olarak çözülmedi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Simetrik yapıda **c-hattını** almak (Rc1) ve Siyahın c6 atını rahatsız etmek; Değişim Slav’ın klasik başlangıç planı budur.',
      '...Nh5’e karşı fili **e5’e** koymak (10.Be5) ve ardından 12.Bxf6 ile Siyahı ya piyon yapısını bozmaya ya da e5 karesini bırakmaya zorlamak.',
      'Siyahın f5 piyonunu **f4 ile sabitlemek**: böylece ...e5 kırılması kapanır, f5 kalıcı bir hedef olur ve Nh4 atı ona sürekli baskı yapar.',
      'Kaleyi üçüncü yataydan (Rf3-h3-g3) getirip **g-hattında değişmek**; hxg3 ile açılan h-hattı Beyaz kalesine yeni bir yol verir (Kf2, Rh1).',
      'Doğru anda **Nxf5** at fedası: iki piyon, açık bir Siyah şahı ve f5’e yerleşen vezir karşılığında.',
      'Fedadan kazanılan piyonları hareketsiz bırakmamak: **g4-g5** ile ilerletip Siyah şahını daha da açmak.',
      'Oyunsonunda şahı merkeze getirmek (Kxg4-f5-e5) ve **d5 kırılmasıyla** üçüncü bir geçer piyon yaratıp tek fili aşırı yüklemek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '9...Nh5 ile Beyazın en iyi filine (f4) saldırıp **fil çiftini** kazanmaya çalışmak veya filin rahatsız olmasını sağlamak.',
      '10...f5 ile simetriyi kırmak ve **e4 karesini** kontrol etmek: Stonewall’a benzer bir yapıyla bir atı e4’e yerleştirmek.',
      '12...gxf6 ile **e5 karesini** piyonla tutmak ve açılan **g-hattını** kale için kullanmak (...Kh8, ...Rg8-g7).',
      'Kapalı kalan fili **d7-e8** üzerinden h5 veya g6’ya getirip etkinleştirmek.',
      'Atı vezir kanadından **a5-c4-d6-e4** yoluyla merkeze getirmek ve b2/a3 zayıflıklarına baskı yapmak.',
      'Beyaz saldırırsa **c-hattında karşı oyun** aramak: ...Rc2+ ile Beyaz şahını rahatsız etmek (32...Rc2+ kurtarıcıydı).',
      'Oyunsonunda vezirleri tahtada tutmak: Siyahın tek şansı Beyaz şahına karşı vezirle şah çekmekti; vezir değişimi kaybetti.',
    ] },
  },
  critical: [
    { move: '10b', title: '...f5: simetriyi bozan karar', text: 'Lasker, 10...f6 ile fili kovmak yerine 10...f5 ile e4 karesini aldı. Bu Stonewall’a benzer bir kurulum ama e6 piyonu geride kalır ve e5 karesi Beyaz filine bırakılır. Motor ...f5’i küçük bir yanlış sayıyor (Motor: +0.7; 10...f6 11.Bg3 ile +0.3). Matthew Sadler’in değerlendirmesine göre Lasker, aynı turnuvada Marshall’a karşı da benzer bir yapıda e5 karesi yüzünden rahatsızlık yaşamıştı; 12...gxf6 kararının arkasında bu kareyi piyonla tutma isteği vardı.' },
    { move: '14w', title: 'f4: zayıflığı sabitlemek', text: '14.f4 ile Capablanca f5 piyonunu yerinde dondurdu, ...e5 kırılmasını tamamen kapattı ve e5 karesini kalıcı olarak aldı. Bedeli: e3 piyonu geride kalır ve e4 karesi Siyah atına kalıcı bir yuva olur. Motor bu anda 14.a3 veya 14.g3’ü (+0.5) biraz daha iyi buluyor, 14.f4 sonrası denge yakın (+0.2). Ama oyunun ilerleyen kısmında Nxf5 fedasını mümkün kılan şey tam olarak bu sabitlemedir.' },
    { move: '21w', title: '21.Qf3?: kaçan fırsat', text: 'Capablanca’nın bu oyundaki en büyük orta oyun yanlışı. 21.g4! fxg4 22.Qxg4 f5 23.Nxf5 ile Beyaz hattı hemen açıp avantajı büyütebilirdi (Motor: +1.0). 21.Qe2 de iyiydi (+0.6). Vezir f3’te c4’e gelecek atı engellemiyor ve bir hamle sonra e2’ye dönmek zorunda kalıyor; değerlendirme 0.00’a düştü. Washington Times’ın yüzüncü yıl yazısı da 21.Qf3’ü “?!” ile işaretliyor ve vezirin bir hamle önce e2’ye gitmesi gerektiğini söylüyor.' },
    { move: '23b', title: '...Ne4+?: Lasker tehlikeye giriyor', text: 'At e4’e şahla geldi ama 24.Bxe4 fxe4 sonrası Siyahın f-piyonu e4’e gidince f5 karesi ve e6 piyonu zayıfladı; Beyazın veziri g4’e gelebildi. Doğrusu önce 23...Bf7 (Motor: 0.00) idi: fil h7 ve e6’yı korur, ...Ne4+ daha sonraya saklanırdı. Oyundan sonra Beyaz yeniden +0.6 civarında.' },
    { move: '26w', title: '26.Nxf5!: at fedası', text: 'Capablanca, sabitlediği f5 piyonunu sonunda atla aldı. 26...exf5 27.Qxf5 sonrası Beyaz at karşılığında iki piyon aldı; Siyah şahının önündeki bütün piyonlar gitti, vezir f5’te h7, e4 ve d5’e bakıyor. Motor fedayı en iyi hamle olarak gösteriyor (Motor: +0.6); alternatif 26.Ng6+ Kg7 27.Rxh7+ Kxh7 28.Qh5+ yalnızca sürekli şahla beraberlik (0.00), vezirin geri çekilmesi 26.Qh3 ise Siyahı üstün kılar (−0.9).' },
    { move: '30w', title: '30.Nxd5?: avantaj yine kaçıyor', text: 'Üçüncü piyonu almak doğal görünüyordu ama 30...Bf7! 31.Nxe7+ Qxe7 sonrası Siyahın kalan taşları (vezir, kale, fil) aktifleşti ve ...Rc2+ karşı oyunu doğdu (Motor: 0.00). Önce 30.g4! ile h5’e saldırmak, örneğin 30...Rd6 31.gxh5 Qd7 32.Qxd7 Bxd7 ile Beyaza üç piyon artısı olan sağlam bir oyunsonu veriyordu (Motor: +0.9).' },
    { move: '32b', title: '32...hxg4?: h-hattını açmak', text: 'Lasker piyonu aldı ama bununla h-hattını Beyaz kale ve vezirine açtı: 33.Qh7+! Kf8 ve Siyah şahı köşede sıkıştı (Motor: +1.6). Doğrusu 32...Rc2+! 33.Kg3 Re2 idi: Siyah kale e3’e saldırır, Beyaz şahı da açıkta kalır ve oyun dengede (Motor: 0.00). Washington Times yazısı da bu hamleyi Lasker’in “fazla ileri gittiği” an olarak görüyor.' },
    { move: '37b', title: '37...Qe6?: belirleyici hata', text: 'Kale değişiminden sonra 37...Bd5, 37...Bf7 veya 37...Qd6 ile Siyah vezirleri tutup dengede kalıyordu (Motor: yaklaşık +0.1). 37...Qe6? ise 38.Kxg4 ile vezir değişimini zorladı: oyunsonunda Beyazın şahı ve altı piyonu fili açıkça yener (Motor: +3.2). Turnuva direktörü Lederer’in aktardığına göre Lasker oyundan sonra yalnızca “Qe6 kaybettiren hamleydi, Bd5 muhtemelen beraberlik verirdi” demiş.' },
  ],
  lessons: [
    'Simetrik yapılarda dengeyi bozan taraf (burada 10...f5 ve 12...gxf6) dinamik şanslar kazanır ama kalıcı zayıflıklar da yaratır. Rakip bu zayıflıkları hemen hedef almalı.',
    'Bir zayıflığı önce **sabitleyin**, sonra saldırın: 14.f4 olmasaydı f5 piyonu ileri gidebilir, 26.Nxf5 fedası da olmazdı.',
    'Taş fedasından kazanılan piyonlar ancak ilerlerse değer kazanır. Capablanca 28.g4 ve 29.g5 ile hemen yürüttü; 30.Nxd5 ile piyon toplamaya geçince avantajı kaçtı.',
    'Açık şaha karşı savunmada en iyi silah çoğu zaman karşı saldırıdır: 32...Rc2+ ile Beyaz şahını rahatsız etmek, 32...hxg4 ile piyon toplamaktan çok daha iyiydi.',
    'Piyonlara karşı tek taşla savunan tarafın **vezirleri değişmemesi** gerekir. 37...Qe6? ile gelen vezir değişimi, dengeli bir pozisyonu kazanılmış bir oyunsonuna çevirdi.',
    'Fil, piyonlara karşı oyunsonunda iki uzak geçer piyonu aynı anda durduramaz. Kazanan taraf **şahını merkeze** getirir ve yeni bir kırılmayla (46.d5) fili aşırı yükler.',
    'Çok güçlü oyuncular da gergin oyunlarda art arda hata yapar; önemli olan, rakip hata yaptığında pozisyonun bunu cezalandıracak durumda olmasıdır.',
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkezi alır ve vezir piyonu açılışlarını seçer.',
      amac: 'Merkezde alan kazanmak ve c4 ile Vezir Gambiti yapısına geçmek.',
      neden: 'Capablanca kariyeri boyunca hem 1.e4 hem 1.d4 oynadı; 1920’lerde d4 açılışları onun sakin, konumsal tarzına çok uygundu.',
      diger: [
        { move: '1.e4', text: 'Motorun hafif tercihi (Motor: +0.4), ama Lasker’in açık oyunlardaki tecrübesini düşününce d4 daha az tartışmalı bir seçim.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); genelde aynı yapılara döner.' },
      ],
    },
    '1b': {
      text: '1...Nf6: Siyah hemen d5’e bağlanmaz, önce at gelişir.',
      amac: 'e4 karesini kontrol etmek ve savunma seçimini (Slav, Vezir Gambiti Reddi, Hint savunmaları) sonraya bırakmak.',
      neden: 'Esnek hamle Beyazın bazı sistemlerini, örneğin erken Bf4 kurulumlarını ya da Değişim varyantının bazı biçimlerini zorlaştırır.',
      diger: [
        { move: '1...d5', text: 'Klasik cevap (Motor: +0.35); doğrudan Vezir Gambiti’ne gider.' },
      ],
    },
    '2w': {
      text: '2.c4 ile Beyaz vezir kanadında alan alır ve d5 karesine baskı yapar.',
      amac: 'Siyahın ...d5 oynamasını zorlaştırmak, oynarsa c4xd5 ile merkezi değiştirmek.',
      neden: 'Ana hat; d4 ve c4 piyonları birlikte merkezi en iyi şekilde kontrol eder.',
      diger: [
        { move: '2.Nf3', text: 'Esnek ama c4’ün baskısından vazgeçer (Motor: +0.4).' },
      ],
    },
    '2b': {
      text: '2...c6: Slav hazırlığı. Siyah d5’i c6 piyonuyla destekleyecek.',
      amac: 'd5’i e6 kullanmadan korumak; böylece c8 fili kapanmaz ve f5 veya g4’e çıkabilir.',
      neden: 'Vezir Gambiti Reddi’nde (...e6) c8 fili kapalı kalır; Slav bu sorunu çözer. 1920’lerde yeni yeni popülerleşen bir savunmaydı; sonraki on yıllarda Alekhine–Euwe maçlarında çok oynandı.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi veya Nimzo-Hint’e gider (Motor: +0.4).' },
        { move: '2...g6', text: 'Kral Hint/Grünfeld yolu; 1924’te henüz çok yeniydi (Motor: +0.35).' },
      ],
    },
    '3w': {
      text: '3.Nc3: at d5 ve e4 karelerine bakar.',
      amac: 'Merkez baskısını artırmak ve e4 ilerleyişini hazırlamak.',
      neden: 'Doğal gelişim. 3.Nf3 daha esnek olsa da Nc3, Siyah ...d5 oynarsa cxd5 ile Değişim yapısına geçmeye uygundur.',
      diger: [
        { move: '3.Nf3', text: 'Daha esnek sıra (Motor: +0.4); Değişim Slav’a da gidebilir.' },
      ],
    },
    '3b': {
      text: '3...d5: Slav Savunması pozisyonu oluştu.',
      amac: 'Merkezde d5’i kurup c6 ile desteklemek.',
      neden: 'Plan buydu; 3...d6 veya 3...g6 ile Beyaz 4.e4 oynayıp merkezi tamamen alırdı (Motor: +0.8).',
      diger: [
        { move: '3...g6', text: 'Beyaz 4.e4 ile geniş merkez kurar (Motor: +0.8).' },
      ],
    },
    '4w': {
      text: '4.cxd5: Değişim Varyantı. Beyaz merkezde gerginliği çözer ve yapıyı simetrik yapar.',
      amac: 'c-hattını açmak ve Siyahın Slav’daki ...dxc4 ile piyon kazanma fikirlerini baştan engellemek.',
      neden: 'Capablanca açık, sade pozisyonları severdi; simetrik yapıda bile küçük artıları büyütebileceğine güveniyordu. Değişim Slav’da Beyazın tek artısı fazladan tempodur, ama c-hattına önce kim gelirse küçük bir inisiyatif alır.',
      diger: [
        { move: '4.Nf3', text: 'Ana Slav hatları; Siyah ...dxc4 ile piyon alıp ...b5 veya ...Bf5 planlarına gidebilir (Motor: +0.4).' },
        { move: '4.e3', text: 'Sakin kurulum, c4’ü korur (Motor: +0.4).' },
      ],
    },
    '4b': {
      text: '4...cxd5: Siyah c-piyonuyla alır; tamamen simetrik yapı.',
      amac: 'Merkezde d5 piyonunu tutmak.',
      neden: '4...Nxd5? 5.e4 ile Beyaza büyük merkez verir (Motor: +0.7); piyonla almak zorunlu sayılır.',
      diger: [
        { move: '4...Nxd5', text: '5.e4 Nxc3 6.bxc3 ile Beyaz güçlü merkez kurar (Motor: +0.7).' },
      ],
    },
    '5w': {
      text: '5.Nf3: Beyaz şah kanadını geliştirir.',
      amac: 'e5 karesini kontrol etmek ve rok hazırlamak.',
      neden: 'Değişim Slav’da genelde Nf3, Bf4, e3 kurulumu yapılır. Motor 5.Bf4’ü ufak bir farkla öne koyuyor (+0.3), ama sıra pek değiştirmiyor.',
      diger: [
        { move: '5.Bf4', text: 'Fil önce çıkar, Siyahın ...Nh5 fikri daha az etkili olur (Motor: +0.3).' },
      ],
    },
    '5b': {
      text: '5...Nc6: Siyahın atı d4’e baskı yapar ve c-hattını kapatır.',
      amac: 'Simetrik gelişim; c6’daki at, açık c-hattında Beyazın kale baskısını durdurur.',
      neden: 'Değişim Slav’ın ana hamlesi. 5...e6 da oynanır (Motor: +0.25) ama c8 filini kapatır.',
      diger: [
        { move: '5...e6', text: 'Sağlam ama fili kapatır (Motor: +0.25).' },
      ],
    },
    '6w': {
      text: '6.Bf4: Fil kapanmadan önce b8-h2 çaprazına çıkar.',
      amac: 'e3’ten önce fili dışarı almak ve e5 / c7 karelerini kontrol etmek.',
      neden: 'e3’ten sonra fil içeride kalırdı. Bf4 Değişim Slav’ın en çok oynanan kurulumudur; motor da en iyi hamle olarak gösteriyor (+0.3).',
      diger: [
        { move: '6.e3', text: 'Fili kapatır, daha pasif (Motor: +0.1).' },
        { move: '6.Qb3', text: 'b7’ye baskı ama erken (Motor: +0.05).' },
      ],
    },
    '6b': {
      text: '6...e6: Siyah fili f5’e çıkarmaz, sağlam bir Vezir Gambiti yapısına geçer.',
      amac: 'f8 filini e7’ye geliştirip hızla rok yapmak.',
      neden: 'Günümüzde ana hat 6...Bf5’tir: fil kapanmadan dışarı çıkar. 6...e6 eski ve sağlam bir alternatif; Lasker burada c8 filini içeride bırakmayı kabul etti. Bu fil oyun boyunca d7-e8-f7 yoluyla zorla etkinleşebildi.',
      diger: [
        { move: '6...Bf5', text: 'Modern ana hat (Motor: +0.2): 7.e3 e6 ile tamamen simetrik, iki tarafın filleri de dışarıda.' },
        { move: '6...Nh5', text: 'Hemen fil avı (Motor: +0.3): 7.Bd2 Nf6 ile at geri döner, zaman kaybı karşılıklı olur.' },
      ],
    },
    '7w': {
      text: '7.e3: d4 desteklenir, f1 filine yol açılır.',
      amac: 'Gelişimi tamamlamak (Bd3, O-O).',
      neden: 'En doğal ve motorun ilk sıradaki hamlesi (+0.4).',
      diger: [
        { move: '7.h3', text: 'Fil için h2 kaçış karesi hazırlar (Motor: +0.3), ama bir tempo harcar.' },
      ],
    },
    '7b': {
      text: '7...Be7: Fil sakin bir kareye.',
      amac: 'Hızla rok yapmak.',
      neden: '7...Bd6 Beyazın f4 filine meydan okur, ama Bxd6 Qxd6 ile Siyahın iyi filini değişir. Lasker taşları tahtada tutmayı tercih etti.',
      diger: [
        { move: '7...Bd6', text: 'Fil değişimi önerir (Motor: +0.35); daha sade, beraberliğe yakın.' },
        { move: '7...Nh5', text: 'Hemen 8.Bg5 ile cevap alır (Motor: +0.35).' },
      ],
    },
    '8w': {
      text: '8.Bd3: Fil b1-h7 çaprazına, h7’ye bakıyor.',
      amac: 'Rok yapmak ve şah kanadına potansiyel baskı.',
      neden: 'Doğal kare. 8.h3 ile fili ...Nh5’e karşı korumak da mümkündü (Motor: +0.4), ama Capablanca gelişimi önceledi.',
      diger: [
        { move: '8.h3', text: 'Fil için h2 karesi, ...Nh5 fikrini zayıflatır (Motor: +0.4).' },
      ],
    },
    '8b': {
      text: '8...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak.',
      neden: 'Doğal. 8...Nh5 hemen oynanabilirdi (Motor: +0.35), ama Lasker önce şahını güvene aldı.',
    },
    '9w': {
      text: '9.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak, kaleleri birleştirmek.',
      neden: 'Motor 9.Rc1’i (+0.3) bir tık öne koyuyor, ama rok en doğal hamle; fark çok küçük.',
      diger: [
        { move: '9.Rc1', text: 'Önce c-hattına kale (Motor: +0.3); rok sonra yapılır.' },
        { move: '9.h3', text: 'Fili ...Nh5’e karşı korur (Motor: +0.3).' },
      ],
    },
    '9b': {
      text: '9...Nh5!?: Siyahın atı f4 filine saldırır.',
      amac: 'Ya fil çiftini almak (Nxf4) ya da fili kötü bir kareye kovmak; aynı zamanda ...f5 ile e4’ü kontrol eden bir yapıya hazırlık.',
      neden: 'Simetrik yapıda kazanmak isteyen Lasker dengesizlik arıyordu. Washington Times’ın yüzüncü yıl yazısı bu hamleyi oyunu dengesizleştiren erken bir at çıkışı olarak niteliyor. Motor da kabul ediyor: en iyi hamle bu (+0.3).',
      diger: [
        { move: '9...Bd7', text: 'Sakin gelişim (Motor: +0.45); Beyaz Rc1 ve Ne5 ile küçük baskı kurar.' },
        { move: '9...Nb4', text: 'Fil çiftini d3 filine karşı aramak (Motor: +0.45); 10.Bb1 ile fil kaçar.' },
      ],
    },
    '10w': {
      text: '10.Be5!: Fil e5’e kaçar; c6 atı ile değişmeye razı olmayan, merkezde güçlü bir kare.',
      amac: 'Fili korumak ve e5’i işgal ederek Siyahın ...f6 ile tempo kazanmasını zorlaştırmak.',
      neden: 'Washington Times yazısı 10.Be5’i Siyahın alışılmadık fikrine en sivri cevap olarak görüyor; motor da en iyi hamle diyor (+0.2). Matthew Sadler’e göre bu fikir, turnuvanın başında Marshall’ın Lasker’e karşı kullandığı fikrin tekrarıydı.',
      diger: [
        { move: '10.Bg5', text: 'Fil değişimi önerir; 10...Bxg5 11.Nxg5 ile Siyah rahatlar.' },
        { move: '10.Re1', text: 'Fili feda eder gibi bırakır: 10...Nxf4 11.exf4 (Motor: +0.2); Siyah fil çiftini alır.' },
      ],
    },
    '10b': {
      text: '10...f5: Lasker f-piyonunu iki kare ilerletip e4 karesini alır.',
      amac: 'Stonewall benzeri bir yapı kurmak: f5 ve d5 piyonlarıyla e4’ü tutmak, bir atı oraya yerleştirmek ve şah kanadında ...g5 gibi fikirlerle saldırmak.',
      neden: 'Daha doğal olan 10...f6 fili hemen kovardı (11.Bg3, Motor: +0.3). Lasker ise f6’yı açık tutup atı oraya döndürmeyi planladı. Bedeli: e6 piyonu geride kalır, e5 karesi Beyaza bırakılır ve şah kanadı zayıflar. Motor ...f5’i küçük bir yanlış sayıyor (+0.7).',
      diger: [
        { move: '10...f6', text: 'Fili kovar: 11.Bg3 Bd7 12.Rc1 Rc8 (Motor: +0.3); Siyah sağlam ve dengede.' },
        { move: '10...Nb4', text: '11.Bb1 Nc6 tekrar (Motor: +0.35); ilginç bir bekleme hamlesi.' },
      ],
    },
    '11w': {
      text: '11.Rc1: Kale açık c-hattına.',
      amac: 'c6 atına baskı ve c-hattının kontrolü; Değişim Slav’ın klasik planı.',
      neden: 'Doğal ve güçlü (Motor: +0.55). 11.Nb5 (Motor: +0.6) ile atı c7 karesine yöneltmek de mümkündü.',
      diger: [
        { move: '11.Nb5', text: 'At c7’ye bakar: 11...Bd7 12.Bc7 Qc8 13.Ne5 (Motor: +0.6).' },
        { move: '11.Qb3', text: 'b7 ve e6’ya baskı (Motor: +0.55).' },
      ],
    },
    '11b': {
      text: '11...Nf6: At f6’ya geri döner.',
      amac: 'e4 karesini kontrol etmek ve e5 filine meydan okumak.',
      neden: 'At h5’te tehlikede ve etkisizdi. Sadler, Marshall–Lasker oyunu için de atın f6-h5-f6 yolunun Siyaha zaman kaybettirdiğini not ediyor. Burada da öyle, ama alternatifler daha kötü (Motor: 11...a6 +0.85).',
      diger: [
        { move: '11...Bd7', text: '12.Na4 Nf6 13.Bxf6 gxf6 (Motor: +0.9).' },
        { move: '11...a6', text: '12.Na4 ile at c5’e gelir (Motor: +0.85).' },
      ],
    },
    '12w': {
      text: '12.Bxf6: Beyaz e5 filini f6 atına verir.',
      amac: 'Siyahın e4’ü kontrol eden en iyi taşını kaldırmak ve Siyahı f6’da karar vermeye zorlamak.',
      neden: 'Fil e5’te güzel ama ...Ne4 ve ...Bd6 ile değişim baskısı gelecekti. Capablanca karar anını kendi seçti. Motor 12.Bb5 ve 12.Nb5’i de (+0.5) eşit görüyor; yani hamle, bir yapı tercihi.',
      diger: [
        { move: '12.Bb5', text: 'c6 atıyla değişmek (Motor: +0.5): 12...Bd7 13.Bxc6 Bxc6 14.Qe2.' },
        { move: '12.Nb5', text: 'At c7/d6’ya bakar (Motor: +0.5): 12...Ne8 13.h3.' },
      ],
    },
    '12b': {
      text: '12...gxf6: Lasker g-piyonuyla alır; şah kanadı piyonları dağılır ama g-hattı açılır.',
      amac: 'e5 karesini piyonla kontrol etmek ve açık g-hattında kaleyle Beyaz şahına baskı yapmak.',
      neden: 'Sadler’e göre Lasker e5’i elinde tutmak için piyonla aldı. 12...Bxf6 (Motor: +0.47) daha sağlamdı ama e5 karesini Beyaz atına bırakırdı (Ne5). Lasker dinamik şanslar için yapı zayıflığını kabul etti.',
      diger: [
        { move: '12...Bxf6', text: '13.Bb5 Na5 14.Na4 (Motor: +0.47); sağlam, ama e5 Beyaz atına yuva.' },
        { move: '12...Rxf6', text: '13.Bb5 Na5 14.Na4 (Motor: +0.6); kale aktif ama açıkta.' },
      ],
    },
    '13w': {
      text: '13.Nh4: At f5 piyonuna saldırır ve g6’ya bakar.',
      amac: 'Zayıflamış f5 piyonunu hedef almak; ...e5 olursa at f5’e girebilir.',
      neden: 'Capablanca, Siyahın en hassas noktasına hemen baskı kurdu. Motor 13.Ne1 veya 13.g3’ü aynı düzeyde görüyor (+0.5); hepsi f-piyonunu ve e4 karesini hedefleyen kurulumlar.',
      diger: [
        { move: '13.g3', text: 'Önce yapıyı sağlamlaştırır (Motor: +0.5): 13...Bd6 14.Ne1 Kh8.' },
        { move: '13.Ne1', text: 'At f3 veya d3 üzerinden e5 / f4’e (Motor: +0.55).' },
      ],
    },
    '13b': {
      text: '13...Kh8: Şah köşeye çekilir.',
      amac: 'g-hattını kaleye bırakmak (...Rg8) ve g8-a2 çaprazından şahı uzaklaştırmak.',
      neden: 'Açık g-hattında şah g8’de rahatsız olurdu. Motor da 13...Kh8’i ilk sırada gösteriyor (+0.46).',
      diger: [
        { move: '13...Bd7', text: '14.g3 Kh8 ile aynı yapıya döner (Motor: +0.5).' },
        { move: '13...Rf7', text: 'Kale g7’ye geçer (Motor: +0.65), ama şah g8’de kalır.' },
      ],
    },
    '14w': {
      text: '14.f4: Beyaz f-piyonunu f4’e sürer ve f5 piyonunu sabitler.',
      amac: '...e5 kırılmasını tamamen engellemek ve f5 piyonunu yerinde dondurup kalıcı hedef yapmak; ayrıca f-piyonu e5’i tutar.',
      neden: 'Bu oyunun stratejik çekirdeği: f5 piyonu artık ilerleyemez ve Nh4 her an ona saldırabilir. Bedeli e3’ün geri kalması ve e4’ün Siyah atına kalıcı yuva olması. Motor 14.a3 veya 14.g3’ü (+0.5) biraz daha iyi buluyor; Macdonald’ın (motor destekli) notlarında da 14.a3 önerilir.',
      diger: [
        { move: '14.g3', text: 'Esnek: 14...Rg8 15.a3 Bd6 16.Ng2 (Motor: +0.5); f4 sonraya kalır.' },
        { move: '14.a3', text: '14...Rg8 15.g3 Bd6 16.Ng2 (Motor: +0.5); ...Nb4’ü önler.' },
      ],
    },
    '14b': {
      text: '14...Rg8: Kale açık g-hattına.',
      amac: 'g2’ye baskı ve Beyaz şahına karşı hattı kullanmak.',
      neden: 'Planın doğal devamı; motor ilk sırada (+0.1).',
      diger: [
        { move: '14...Bd7', text: '15.Rf3 Rg8 ile aynı yere gider (Motor: +0.1).' },
        { move: '14...Nb4', text: '15.Be2 ile fil kaçar (Motor: +0.2).' },
      ],
    },
    '15w': {
      text: '15.Rf3: Kale üçüncü yataydan oyuna girer.',
      amac: 'g3’te g-hattına karşı koymak ya da h3’ten h7’ye baskı yapmak.',
      neden: 'f4’ten sonra f1 kalesinin başka işi yoktu; üçüncü yatay doğal yol. Motor 15.a3 ile eşit görüyor (her ikisi +0.1).',
      diger: [
        { move: '15.a3', text: '...Nb4’ü önceden kapatır (Motor: +0.1).' },
        { move: '15.Kh1', text: 'g-hattından şahı çeker (Motor: +0.05).' },
      ],
    },
    '15b': {
      text: '15...Bd7: Fil nihayet gelişir.',
      amac: 'c8 filini d7-e8 yoluyla h5 ya da g6’ya getirip etkinleştirmek; aynı zamanda c8 karesini kaleye açmak.',
      neden: 'Motor ilk sıraya koyuyor (0.00). Kapalı fil Siyahın en büyük sorunuydu.',
      diger: [
        { move: '15...Qe8', text: 'Vezir h5’e yönelir (Motor: 0.00).' },
      ],
    },
    '16w': {
      text: '16.Rh3: Kale h-hattına geçer, h7’ye baskı.',
      amac: 'h7’yi hedef almak ve Siyahı savunmaya zorlamak.',
      neden: 'Washington Times yazısı bunu “Capablanca’ya yakışmayan bir özensizlik” olarak işaretliyor: kale g3’e aitti. Motor da 16.Rg3’ü azıcık önde görüyor, ama fark çok küçük (ikisi de yaklaşık +0.1); Capablanca iki hamle sonra zaten g3’e gitti.',
      diger: [
        { move: '16.Rg3', text: 'Hemen değişim önerir: 16...Rxg3 17.hxg3 Qg8 18.Kf2 (Motor: +0.1).' },
        { move: '16.Kf2', text: 'Bekleme (Motor: 0.00).' },
      ],
    },
    '16b': {
      text: '16...Be8: Fil e8’e, oradan h5 veya g6’ya.',
      amac: 'h-hattını filin arkasından kapatmak ve fili d1-h5 çaprazına çıkarmak.',
      neden: 'Motor 16...Bd6 veya 16...Rg7’yi (0.00) biraz daha iyi buluyor; fil e8’de hem h5’i hem f7’yi kontrol edebilir ama d7’de c-hattını destekliyordu.',
      diger: [
        { move: '16...Bd6', text: 'Fil aktif çaprazda, f4’e baskı (Motor: 0.00).' },
        { move: '16...Rg7', text: 'h7’yi kaleyle korur: 17.Rg3 Rxg3 18.hxg3 (Motor: 0.00).' },
      ],
    },
    '17w': {
      text: '17.a3: ...Nb4 atlayışı engellenir.',
      amac: 'Vezir kanadını güvenceye alıp şah kanadındaki manevralara rahatça devam etmek.',
      neden: 'Macdonald’ın notlarına göre a3 b4’ü sağlamlaştırır. Motor 17.Rg3 ve 17.Qe2 ile eşit görüyor (+0.1).',
      diger: [
        { move: '17.Rg3', text: 'Kaleyi hemen değişmek (Motor: +0.15).' },
        { move: '17.Qe2', text: 'Vezir f2-h5 yoluna (Motor: +0.1).' },
      ],
    },
    '17b': {
      text: '17...Rg7: Kale g7’ye, h7’yi korur.',
      amac: 'h-hattındaki baskıya karşı h7’yi kalıcı korumak ve g8’i vezir için boşaltmak.',
      neden: 'Motor 17...Rc8’i (+0.1) tercih ediyor; ...Rg7 sonrası 18.Rg3 ile değişim Beyaza küçük artı veriyor (+0.4).',
      diger: [
        { move: '17...Rc8', text: 'Kaleyi c-hattına getirir: 18.Kf2 Bf8 (Motor: +0.1).' },
        { move: '17...Bf8', text: 'Fil g7’ye gidebilir (Motor: +0.2).' },
      ],
    },
    '18w': {
      text: '18.Rg3: Kaleler g-hattında karşı karşıya.',
      amac: 'Siyahın tek aktif taşını değişmek; hxg3 ile h-hattını açmak.',
      neden: 'Siyah kalesi g-hattında Beyaz şahına tek tehditti. Motor da en iyi hamle diyor (+0.4); Macdonald 18.Na4’ü ilginç bulur ama motor onu daha zayıf görüyor (+0.1).',
      diger: [
        { move: '18.Na4', text: 'At c5’e gider (Motor: +0.1); kale değişimi olmadan baskı azalır.' },
        { move: '18.Qe2', text: 'Bekleme (Motor: 0.00).' },
      ],
    },
    '18b': {
      text: '18...Rxg3: Siyah kaleyi değişir.',
      amac: 'g-hattındaki gerginliği çözmek.',
      neden: 'Değişmemek de mümkündü (18...Bf7), ama 19.Rxg7 Kxg7 ile benzer sonuç çıkar. Değişim Beyaza h-piyonuyla almayı ve h-hattını vermeyi gerektirir.',
      diger: [
        { move: '18...Bf7', text: '19.Rxg7 Kxg7 20.h3 (Motor: +0.2).' },
      ],
    },
    '19w': {
      text: '19.hxg3: Beyaz h-piyonuyla alır; h-hattı açıldı.',
      amac: 'h-hattını kale için açmak ve f4’ü g3 ile desteklemek.',
      neden: 'Zorunlu geri alış (başka alışı yok); ama sonucu Beyaz için iyi: h-hattı Rh1 için açılır ve g3 piyonu daha sonra g4-g5 yürüyüşünde kullanılır.',
    },
    '19b': {
      text: '19...Rc8: Kale c-hattına.',
      amac: 'c-hattını tutmak ve c3 atına baskı.',
      neden: 'Motor 19...Bd7 veya 19...Bf7’yi (+0.2) azıcık önde görüyor; kale c8’de iyi ama fil kapalı kaldı.',
      diger: [
        { move: '19...Bd7', text: 'Fil daha esnek kareye döner (Motor: +0.2).' },
        { move: '19...Bf7', text: '20.Kf2 Qg8 (Motor: +0.25); fil h5’e bakar.' },
      ],
    },
    '20w': {
      text: '20.Kf2: Şah g1’den çıkar.',
      amac: 'Rh1 için g1-h1’i boşaltmak ve şahı e2/g2 etrafında merkeze yaklaştırmak.',
      neden: 'Motor en iyi hamle olarak gösteriyor (+0.6). Kale vezir kanadından h1’e gidecek; şah da oyunsonunda merkeze yakın durur.',
      diger: [
        { move: '20.Qe2', text: 'Önce vezir (Motor: +0.5).' },
        { move: '20.g4', text: 'Hemen kırılma: 20...fxg4 21.Qxg4 f5 22.Nxf5 (Motor: +0.3).' },
      ],
    },
    '20b': {
      text: '20...Na5: At vezir kanadına yönelir.',
      amac: 'c4 karesine yerleşip b2’ye baskı yapmak.',
      neden: 'Atın c6’dan ayrılması e5 ve d4 baskısını bırakır. Motor 20...Rc7’yi tercih ediyor (Motor: +0.5; oyundaki hamle +1.1): kale ikinci yatayı korur ve şah kanadında savunmaya katılır.',
      diger: [
        { move: '20...Rc7', text: '21.Qe2 Bf8 22.g4 fxg4 (Motor: +0.5); Siyah sağlam.' },
        { move: '20...Qb6', text: '21.Na4 Qd8 22.Nc5 (Motor: +0.7).' },
      ],
    },
    '21w': {
      text: '21.Qf3?: Vezir f3’e; h5 ve f5’e bakıyor.',
      amac: 'Veziri şah kanadına getirmek.',
      neden: 'Ama vezir f3’te c4’e gelecek atı durdurmuyor ve b2 korumasız kalıyor. Doğrusu 21.g4! fxg4 22.Qxg4 f5 23.Nxf5 ile hattı hemen açmaktı (Motor: +1.0). Washington Times yazısı da 21.Qf3’ü “?!” ile işaretliyor. Oyundaki hamleden sonra denge (Motor: 0.00).',
      diger: [
        { move: '21.g4', text: '21...fxg4 22.Qxg4 f5 23.Nxf5! exf5 24.Bxf5 ile güçlü saldırı (Motor: +1.0).' },
        { move: '21.Qe2', text: '21...Nc4 22.Rh1 Nd6 23.g4 (Motor: +0.6); oyunda bir hamle geç oynandı.' },
      ],
    },
    '21b': {
      text: '21...Nc4: At c4’te; b2’ye saldırıyor.',
      amac: 'b2 piyonunu kazanmakla tehdit etmek ve d3 filini değişmeye zorlamak.',
      neden: 'Macdonald’ın notuna göre ...Nxb2 tehdidi var. Motor 21...Bxa3!? 22.bxa3 Nb3 23.Rc2 Na1 ile karışık bir eşitliği de gösteriyor (0.00).',
      diger: [
        { move: '21...Bxa3', text: '22.bxa3 Nb3 23.Rc2 Na1 ile karmaşık denge (Motor: 0.00).' },
        { move: '21...Qb6', text: '22.Qe2 Nc4 (Motor: +0.5).' },
      ],
    },
    '22w': {
      text: '22.Qe2: Vezir b2’yi korur ve c4 atına saldırır.',
      amac: 'b2’yi savunmak ve atı geri çekilmeye zorlamak.',
      neden: '21.Qf3’ün hatası düzeltiliyor; motor da en iyi hamle olarak gösteriyor (0.00). 22.b4? Nxa3 ile piyon kaybettirirdi (−1.2).',
      diger: [
        { move: '22.Bxc4', text: '22...Rxc4 23.Qd1 Qc8 (Motor: −0.05); Siyah c-hattında aktif.' },
        { move: '22.b4', text: '22...a5 veya 22...Nxa3 ile Siyah üstün (Motor: −1.2).' },
      ],
    },
    '22b': {
      text: '22...Nd6: At d6’dan e4’e gitmeye hazırlanır.',
      amac: 'Atı e4 yuvasına getirmek.',
      neden: 'At c4’te kovulmak üzereydi; d6 hem f5’i korur hem e4’e bakar. Motor ilk sırada (0.00).',
      diger: [
        { move: '22...Bf7', text: '23.Rh1 Nd6 aynı plan (Motor: 0.00).' },
      ],
    },
    '23w': {
      text: '23.Rh1: Kale h-hattına, h7 hedefte.',
      amac: 'Kaleyi açık h-hattında etkinleştirmek; h7’ye ve Siyah şahına baskı.',
      neden: 'Kale c1’de c-hattında Siyah kalesiyle karşı karşıyaydı ama h-hattı daha önemliydi. Motor ilk sırada (0.00).',
      diger: [
        { move: '23.Rb1', text: 'b2’yi korur, pasif (Motor: −0.4).' },
      ],
    },
    '23b': {
      text: '23...Ne4+?: At e4’e şahla gelir.',
      amac: 'Atı merkezde güçlü yuvaya oturtmak ve Beyazı d3 filini değişmeye zorlamak.',
      neden: 'Ama 24.Bxe4 fxe4 sonrası f5 karesi ve e6 piyonu zayıflar, Beyazın veziri g4’e gelir. Washington Times’a göre bu hamleyle Lasker “yeniden tehlikeye girdi”; doğrusu 23...Bf7 idi (Motor: 0.00): önce h7 ve e6 korunur, at hamlesi sonraya kalır.',
      diger: [
        { move: '23...Bf7', text: '24.g4 Ne4+ 25.Bxe4 fxe4 ile fil h7’yi korurken denge (Motor: 0.00).' },
        { move: '23...Qd7', text: '24.g4 Ne4+ (Motor: +0.1).' },
      ],
    },
    '24w': {
      text: '24.Bxe4: Beyaz atı alır.',
      amac: 'Güçlü e4 atını kaldırmak ve Siyahın f-piyonunu e4’e çekmek.',
      neden: 'Diğer yollar kötü: 24.Nxe4 fxe4 ile filler kalır (−0.6), 24.Kg1? Nxg3 çatalı (−3.6). Motor en iyi hamle (+0.3).',
      diger: [
        { move: '24.Kg1', text: '24...Nxg3 vezire ve kaleye çatal (Motor: −3.6).' },
        { move: '24.Nxe4', text: '24...fxe4 25.Bb5 (Motor: −0.6).' },
      ],
    },
    '24b': {
      text: '24...fxe4: Siyah f-piyonuyla alır.',
      amac: 'e4’te piyonla d3 ve f3 karelerini kontrol etmek ve d5’i korumak.',
      neden: '24...dxe4 (Motor: +0.3) de oynanabilirdi; 24...fxe4 sonrası f-hattı açılır ve e6 piyonu yalnız kalır. Macdonald’ın notunda bu hamleyle e-piyonlarının çiftlendiği vurgulanır.',
      diger: [
        { move: '24...dxe4', text: '25.d5 Rxc3 26.bxc3 Qxd5 (Motor: +0.3); karışık.' },
      ],
    },
    '25w': {
      text: '25.Qg4: Vezir e6’ya ve g-hattına bakar.',
      amac: 'e6’ya saldırmak, Siyahı ...f5 ile yeni bir zayıflığa zorlamak.',
      neden: 'Motor en iyi hamle (+0.6). Vezir e6’ya ve g7/g8’e bakarken f5 karesi de tehdit altında.',
      diger: [
        { move: '25.f5', text: '25...exf5 26.Nxf5 Bxa3 (Motor: +0.1).' },
        { move: '25.g4', text: 'Yavaş (Motor: −0.3).' },
      ],
    },
    '25b': {
      text: '25...f5: Vezir kovulur ve e6 korunur.',
      amac: 'Vezire tempo kazanmak ve e6 piyonunu dolaylı korumak.',
      neden: 'Ama f5 piyonu tekrar Nh4’ün hedefi olur. Macdonald 25...Bxa3!? (Motor: +0.5) ile Siyahın karşı oyun aramasını öneriyor: 26.Qxe6 Rc6 27.Qf5 Bxb2. Motor iki hamleyi de yakın görüyor.',
      diger: [
        { move: '25...Bxa3', text: '26.Qxe6 Rc6 27.Qf5 Bxb2 ile karşılıklı şans (Motor: +0.5).' },
        { move: '25...Rc6', text: '26.f5 exf5 27.Qxf5 (Motor: +1.1).' },
      ],
    },
    '26w': {
      text: '26.Nxf5!: At fedası.',
      amac: 'İki piyon karşılığında Siyah şahının önünü açmak ve veziri f5’e yerleştirmek.',
      neden: 'f4 ile sabitlenen f5 artık atın hedefi. Motor en iyi hamle olarak gösteriyor (+0.6). Vezir geri çekilirse Siyah inisiyatifi alır; 26.Ng6+ ise yalnız sürekli şaha gider. Macdonald da bu hamleyle Beyazın sağlam avantaj elde ettiğini yazıyor.',
      diger: [
        { move: '26.Ng6+', text: '26...Kg7 27.Rxh7+ Kxh7 28.Qh5+ Kg7 29.Qh8+ ile sürekli şah (Motor: 0.00).' },
        { move: '26.Qh3', text: '26...h5 ve Siyah üstün (Motor: −0.9).' },
      ],
    },
    '26b': {
      text: '26...exf5: Siyah atı alır.',
      amac: 'Fazladan taşı kabul etmek.',
      neden: 'Almamak daha kötü: 26...Bf8? 27.Nh6 (+3.0), 26...Bf6? 27.Nh6 (+4.5). Fedayı kabul etmek zorunlu.',
      diger: [
        { move: '26...Bf8', text: '27.Nh6 ile at h6’dan saldırır (Motor: +3.0).' },
      ],
    },
    '27w': {
      text: '27.Qxf5: Vezir f5’te; at karşılığı iki piyon.',
      amac: 'h7’ye ve e4 / d5 piyonlarına baskı yapmak; Siyah şahını açık tutmak.',
      neden: 'Zorunlu geri alış; vezir şimdi Siyah şahına çok yakın. Siyahın e4 ve d5 piyonları savunmasız, Beyazın g ve f piyonları ilerlemeye hazır.',
    },
    '27b': {
      text: '27...h5: h-piyonu ilerler.',
      amac: 'h7’yi vezirden kurtarmak ve g4 karesini kontrol etmek.',
      neden: 'Tek iyi hamle: 27...Bg6? 28.Qxg6 (+5.6), 27...Kg8? 28.Qxh7+ ile mat ağı. Motor 27...h5’i en iyi gösteriyor (+0.6).',
      diger: [
        { move: '27...Bg6', text: '28.Qxg6 ile Beyaz figürü geri alır (Motor: +5.6).' },
      ],
    },
    '28w': {
      text: '28.g4!: g-piyonu h5’e saldırır.',
      amac: 'Fedadan kazanılan piyonları yürütmek ve h-hattını açmak.',
      neden: 'Motor en iyi hamle (+0.7). 28.Nxd5? Rc2+ 29.Kg1 Qd6 ile Siyahın karşı oyunu beraberlik getirir (Motor: 0.00); Macdonald da bunu belirtir.',
      diger: [
        { move: '28.Nxd5', text: '28...Rc2+ 29.Kg1 Qd6 30.Qxe4 (Motor: 0.00).' },
        { move: '28.Rxh5+', text: '28...Bxh5 29.Qxh5+ Kg7 ile sürekli şah (Motor: 0.00).' },
      ],
    },
    '28b': {
      text: '28...Rc6: Kale altıncı yataydan şah kanadına geçmeye hazırlanır.',
      amac: 'Kaleyi savunmaya getirmek (Rg6/Rh6) ve d6’dan d5’i korumak.',
      neden: 'Motor 28...Kg7’yi tercih ediyor (+0.7’ye karşı +1.0): 29.gxh5 Rc6 30.h6+ Rxh6. Macdonald 28...Kg8’i önerir.',
      diger: [
        { move: '28...Kg7', text: '29.gxh5 Rc6 30.h6+ Rxh6 (Motor: +0.7).' },
        { move: '28...Kg8', text: '29.gxh5 Kh8 30.Nxd5 (Motor: +0.95).' },
      ],
    },
    '29w': {
      text: '29.g5: Piyon ilerler; h6 ve f6 kontrol edilir.',
      amac: 'Korunan bir geçer piyon yaratmak ve Siyah şahını hapsetmek.',
      neden: 'Motor en iyi hamle olarak gösteriyor (+0.9). Washington Times yazısı bu hamleye “?!” koyuyor, ama Stockfish 16 buna katılmıyor; asıl hata bir hamle sonra geldi.',
      diger: [
        { move: '29.Nxd5', text: '29...Kg8 30.Qxe4 (Motor: +0.9).' },
        { move: '29.gxh5', text: '29...Qd7 30.Qxd5 Qxd5 31.Nxd5 (Motor: 0.00).' },
      ],
    },
    '29b': {
      text: '29...Kg8: Şah g8’e.',
      amac: 'h7’yi şahla korumak ve f7 karesine fil için yer açmak.',
      neden: 'Motor ilk sırada (+0.9). 29...Bg6? 30.Qe5+ (+1.5).',
      diger: [
        { move: '29...Rd6', text: '30.g4 Kg8 (Motor: +0.95).' },
      ],
    },
    '30w': {
      text: '30.Nxd5?: Beyaz üçüncü piyonu alır.',
      amac: 'Merkez piyonunu kazanmak ve e7 filini değişmek.',
      neden: 'Ama 30...Bf7! ile Siyahın filleri ve kalesi canlanır. Doğrusu 30.g4! idi: 30...Rd6 31.gxh5 Qd7 32.Qxd7 Bxd7 ile Beyaz piyonlarla rahat oyunsonu kazanır (Motor: +0.9). Macdonald’ın eski motor analizinde bu hat eşit gösterilir; Stockfish 16 Beyazı açıkça üstün görüyor.',
      diger: [
        { move: '30.g4', text: '30...Rd6 31.gxh5 Qd7 32.Qxd7 Bxd7 33.Kg3 (Motor: +0.9).' },
        { move: '30.Qe5', text: '30...Qd7 31.Nxd5 Bd8 (Motor: −0.2).' },
      ],
    },
    '30b': {
      text: '30...Bf7!: Fil d5 atına saldırır.',
      amac: 'Atı değişmeye zorlayıp kendi taşlarını etkinleştirmek.',
      neden: 'Tek iyi hamle (Motor: 0.00). 30...Bg6? 31.Qe5 (+1.4).',
      diger: [
        { move: '30...Bg6', text: '31.Qe5 Bd6 32.Nf6+ (Motor: +1.4).' },
      ],
    },
    '31w': {
      text: '31.Nxe7+: At filini alır.',
      amac: 'Atı kaybetmeden değiştirmek.',
      neden: 'At d5’te saldırı altındaydı; geri çekilmek daha kötüydü (31.Nb4 −0.3). Değişim zorunlu sayılır.',
      diger: [
        { move: '31.Nc3', text: '31...Bg6 32.Qe5 (Motor: 0.00).' },
      ],
    },
    '31b': {
      text: '31...Qxe7: Vezir alır.',
      amac: 'Taşı geri almak.',
      neden: 'Zorunlu: 31...Kg7? 32.Qe5+ ile kale gider (+6.8). Şimdi Beyazın vezir, kale ve yedi piyonuna karşı Siyahın vezir, kale, fil ve dört piyonu var.',
    },
    '32w': {
      text: '32.g4: İkinci g-piyonu h5’e saldırır.',
      amac: 'h-hattını açmak ve şah kanadı piyon çoğunluğunu harekete geçirmek.',
      neden: 'Motor 32.g4, 32.Kg3 ve 32.Qe5’i eşit görüyor (0.00). Beyaz ilerleme arar ama Siyahın ...Rc2+ karşı oyunu var.',
      diger: [
        { move: '32.Qe5', text: '32...Rc2+ 33.Kg3 Qxe5 34.dxe5 (Motor: 0.00).' },
      ],
    },
    '32b': {
      text: '32...hxg4?: Siyah piyonu alır.',
      amac: 'Bir piyon kazanmak ve g-piyonlarını dağıtmak.',
      neden: 'Ama h-hattı Beyaza açılıyor: 33.Qh7+ ile vezir şahın yanına girer. Doğrusu 32...Rc2+ 33.Kg3 Re2 idi: e3’e saldırı ve Beyaz şahı açıkta (Motor: 0.00). Washington Times’a göre Lasker burada “fazla ileri gitti”.',
      diger: [
        { move: '32...Rc2+', text: '33.Kg3 Re2 34.g6 h4+ ile karşı oyun ve denge (Motor: 0.00).' },
        { move: '32...Bg6', text: '33.Qd5+ Bf7 34.Qe5 (Motor: +0.6); Macdonald bunu eşit sayar.' },
      ],
    },
    '33w': {
      text: '33.Qh7+!: Vezir şahın yanına girer.',
      amac: 'Siyah şahını f8’e itmek ve h-hattında kaleyle saldırı kurmak.',
      neden: 'Motor en iyi hamle (+1.8). 33.Qxg4 (+0.5) çok daha yavaştı.',
      diger: [
        { move: '33.Qxg4', text: '33...Bg6 34.Kg3 (Motor: +0.5).' },
      ],
    },
    '33b': {
      text: '33...Kf8: Tek kare.',
      amac: 'Şahtan kaçmak.',
      neden: 'Zorunlu, başka yasal hamle yok.',
    },
    '34w': {
      text: '34.Rh6: Kale c6’ya saldırır.',
      amac: 'Siyah kalesini değiştirmek ve f6 / g6 karelerini almak.',
      neden: 'Doğal görünse de motor daha güçlüsünü buluyor: 34.Kg3! (+2.0) veya 34.Qh8+ Bg8 35.Kg3 (+2.0) ile önce g4 alınır. Oyundan sonra Beyaz yalnızca +0.3. Macdonald da 34.Kg3’ü önerir.',
      diger: [
        { move: '34.Kg3', text: '34...Bg8 35.Qh8 Qc7 36.Kxg4 (Motor: +2.0).' },
        { move: '34.Qh8+', text: '34...Bg8 35.Kg3 a5 36.d5 (Motor: +2.0).' },
      ],
    },
    '34b': {
      text: '34...Bg8: Fil vezire saldırır.',
      amac: 'Veziri h7’den kovmak.',
      neden: 'Motor ilk sırada (+0.3). 34...Rxh6 35.Qxh6+ Kg8 36.g6 (+0.9).',
      diger: [
        { move: '34...Rxh6', text: '35.Qxh6+ Kg8 36.g6 (Motor: +0.9).' },
      ],
    },
    '35w': {
      text: '35.Qf5+: Vezir şah çeker.',
      amac: 'Tempoyla vezirini merkeze getirmek.',
      neden: 'Motor ilk sırada (+0.1). Macdonald’ın notu: vezir g4 ve f8’e çatal.',
      diger: [
        { move: '35.Qxe7+', text: '35...Kxe7 36.Rxc6 bxc6 ile eşit oyunsonu (Motor: 0.00).' },
      ],
    },
    '35b': {
      text: '35...Kg7: Şah g7’ye.',
      amac: 'Kaleyi korumak.',
      neden: 'Motor ilk sırada (+0.1). 35...Ke8? 36.Kg3 (+2.1).',
      diger: [
        { move: '35...Qf7', text: '36.Qxg4 Bh7 (Motor: +0.65).' },
      ],
    },
    '36w': {
      text: '36.Rxc6: Kaleler değişir.',
      amac: 'Siyahın karşı oyununu ortadan kaldırmak.',
      neden: 'Motor 36.Qxg4’ü eşit görüyor (+0.2). Kale değişimi Beyazın işine yarar çünkü Siyahın ...Rc2+ fikri ortadan kalkar.',
      diger: [
        { move: '36.Qxg4', text: '36...Rxh6 37.gxh6+ Kh7 38.f5 (Motor: +0.2).' },
      ],
    },
    '36b': {
      text: '36...bxc6: Siyah geri alır.',
      amac: 'Taşı geri almak.',
      neden: 'Zorunlu sayılır: 36...Bh7? 37.Qf6+ (+6.4).',
    },
    '37w': {
      text: '37.Kg3: Şah g4’e yönelir.',
      amac: 'g4 piyonunu almak.',
      neden: 'Motor ilk sırada (+0.1). Macdonald 37.Qxg4’ü önerir (+0.1).',
      diger: [
        { move: '37.Qxg4', text: '37...Be6 38.f5 (Motor: +0.1).' },
      ],
    },
    '37b': {
      text: '37...Qe6?: Vezir değişimi öneriyor.',
      amac: 'g4’ü korumak.',
      neden: 'Ama 38.Kxg4 ile vezir değişimi zorlanır. Lederer’e göre Lasker: “Qe6 kaybettiren hamleydi, Bd5 muhtemelen beraberlik verirdi.” 37...Bd5, Bf7 veya Qd6 dengede kalıyordu (Motor: +0.1).',
      diger: [
        { move: '37...Bd5', text: '38.Qxg4 Qd6 39.Kg2 c5 (Motor: +0.1).' },
        { move: '37...Qd6', text: '38.Qa5 Bf7 39.Kxg4 Qg6 (Motor: +0.1).' },
      ],
    },
    '38w': {
      text: '38.Kxg4: Şah g4 piyonunu alır ve vezirleri değişmeye zorlar.',
      amac: 'f5’teki Beyaz veziri artık şahla korunuyor; Siyah ya vezirleri değişecek ya da veziri e6’dan çekip f-piyonunun ilerlemesine izin verecek.',
      neden: 'Motor en iyi hamle olarak gösteriyor (+3.2). 38.Qa5 veya 38.Qc5 (+0.1) gibi vezir hamleleri, 37...Qe6’nın verdiği fırsatı kaçırırdı. Vezir değişimi Beyazın en büyük kozu: piyonlara karşı tek fil, vezir şahları olmadan çaresiz.',
      diger: [
        { move: '38.Qc5', text: '38...Qg6 39.Qe5+ Kh7 ile Siyahın veziri aktif kalır (Motor: +0.1).' },
      ],
    },
    '38b': {
      text: '38...Qxf5+: Siyah vezirleri değişir.',
      amac: 'Kaybedilmiş vezirli oyunda direnmek yerine oyunsonunda fille bir kale (fortress) aramak.',
      neden: 'Artık iyi bir hamle yok: 38...Bf7 39.Qxe6 Bxe6+ 40.f5 (Motor: +4.7) veya 38...c5 39.dxc5 Qe7 40.Qe5+ (+4.5) de kaybeder. Macdonald 38...Bf7’yi gösterir, ama sonuç aynıdır.',
      diger: [
        { move: '38...Bf7', text: '39.Qxe6 Bxe6+ 40.f5 Bb3 ile benzer oyunsonu (Motor: +4.7).' },
        { move: '38...c5', text: '39.dxc5 Qe7 40.Qe5+ Qxe5 (Motor: +4.5).' },
      ],
    },
    '39w': {
      text: '39.Kxf5: Şah veziri geri alır ve hemen merkeze yakın bir kareye yerleşir.',
      amac: 'Taşı geri almak; şah f5’ten e5, e4 ve d6’ya ulaşarak piyonları desteklemeye hazır.',
      neden: 'Zorunlu geri alış (39.Kg3?? Be6 ve 39.Kh4?? Siyah veziriyle mat). Şimdi Beyazın a3, b2, d4, e3, f4, g5 piyonlarına karşı Siyahın fili ve a7, c6, e4 piyonları var: üç fazla piyon, bir eksik taş (Motor: +3.5).',
    },
    '39b': {
      text: '39...Bd5: Fil d5’e yerleşir.',
      amac: 'e4 piyonunu korumak ve uzun çaprazdan hem vezir kanadına (b3, a2) hem şah kanadına (f7, g8) bakmak.',
      neden: 'Motor ilk sırada (+3.9). e4 piyonu, Beyaz şahının d3 ve f3’e geçmesini engelleyen son engel; onu korumak gerek. 39...Bb3 (+4.4) 40.Kxe4 ile piyonu bırakır.',
      diger: [
        { move: '39...Bb3', text: '40.Kxe4 a5 41.Ke5 ile şah merkezi alır (Motor: +4.4).' },
      ],
    },
    '40w': {
      text: '40.b4: Vezir kanadındaki piyonlar ilerlemeye başlar.',
      amac: 'b-piyonunu siyah karelerden ilerletip ileride a4-a5 / b5 ile ikinci bir cephe açmak.',
      neden: 'Fil beyaz karelerde; b4 siyah bir kare, fil buraya asla saldıramaz. Motor 40.Ke5 ile eşit görüyor (her ikisi +4.0); Capablanca önce piyonları güvenli karelere koydu.',
      diger: [
        { move: '40.Ke5', text: '40...a6 41.b4 Kf7 42.f5 (Motor: +4.05).' },
      ],
    },
    '40b': {
      text: '40...a6: a-piyonu bir kare ilerler.',
      amac: 'b5 karesini kontrol etmek ve a-piyonunu Beyaz şahının ulaşamayacağı bir kareye almak.',
      neden: 'Motor ilk sırada (+3.4). 40...Kf7 41.Ke5 a6 42.f5 (+4.1) daha da kötü. Siyah, b4-b5 ile c6 piyonuna yapılacak saldırıyı geciktirmek istiyor.',
      diger: [
        { move: '40...Kf7', text: '41.Ke5 a6 42.f5 Ke7 (Motor: +4.1).' },
      ],
    },
    '41w': {
      text: '41.Kg4: Şah g4’e geri döner.',
      amac: 'f4-f5 ilerleyişini desteklemek; f-piyonunu şahın koruması altında yürütmek.',
      neden: 'Planlı ama en kesin yol değil: motor 41.a4! 41...Kf8 42.Ke5 Bb3 43.Kxe4 (+4.8) ile e4 piyonunu hemen almayı öneriyor. Capablanca önce f-piyonunu sürmeyi seçti; avantaj yine de kazanmaya yetiyor (+3.0).',
      diger: [
        { move: '41.a4', text: '41...Kf8 42.Ke5 Bb3 43.Kxe4 Bc2+ 44.Ke5 Bxa4 45.f5 (Motor: +4.8).' },
        { move: '41.Ke5', text: '41...Kg6 42.Kd6 Kf5 43.a4 (Motor: +4.2).' },
      ],
    },
    '41b': {
      text: '41...Bc4: Fil c4’e çekilir.',
      amac: 'Beklemek ve a2 / b3 / d3 karelerinden vezir kanadını kontrol etmek.',
      neden: 'Siyahın planı yok; yalnızca bekleme hamleleri yapabilir. 41...Bb3 ve 41...Be6+ de motorda benzer (+3.2 / +3.4). Siyah şahı g7’de f ve g piyonlarını durdurmaya bağlı.',
    },
    '42w': {
      text: '42.f5: f-piyonu ilerler; f6+ tehdidi doğar.',
      amac: 'f ve g piyonlarını birleşik bir ikili yapıp Siyah şahını geriye itmek.',
      neden: 'Motor ilk sırada (+3.7). Piyonlar f5-g5’te birbirini destekler; f6+ geldiğinde Siyah şahı f7 veya g6 karelerinden kovulur.',
      diger: [
        { move: '42.a4', text: '42...Bb3 43.a5 Bd1+ (Motor: +2.7); şah g4’te fil şahlarına açık.' },
      ],
    },
    '42b': {
      text: '42...Bb3: Fil b3’e geçer.',
      amac: 'a4’e ve d1-h5 çaprazına bakmak; Beyaz şahını şahlarla rahatsız etmeye hazırlanmak.',
      neden: 'Motor 42...Bd3 ve 42...Kf7 ile eşit görüyor (+3.4–3.6). Bekleme sürüyor.',
    },
    '43w': {
      text: '43.Kf4: Şah f4’ten e5’e yürür.',
      amac: 'Şahı merkeze, d6 ve e5 karelerine getirip c6 piyonuna ve e4’e saldırmak.',
      neden: 'Motor ilk sırada (+4.1). f-piyonu f5’te artık kendi kendini korumaz, ama Siyah şahı onu alamaz: g5 piyonu ile birlikte birbirini korurlar. Şahın görevi artık vezir kanadında.',
    },
    '43b': {
      text: '43...Bc2: Fil c2’ye çekilir.',
      amac: 'b1-h7 çaprazından f5’e bakmak ve e4’ü dolaylı korumak.',
      neden: 'Motor ilk sırada (+4.0). 43...Bd5 44.Ke5 (+4.8) veya 43...Kg8 44.Kxe4 (+5.4) daha hızlı kaybeder. Macdonald’a göre hiçbir fil hamlesi sonucu değiştirmez.',
    },
    '44w': {
      text: '44.Ke5: Şah e5’te merkezi alır.',
      amac: 'd6’ya geçip c6 piyonunu almak ya da d5 kırılmasını desteklemek.',
      neden: 'Motor 44.Kg3 / Kg4 / Ke5’i eşit görüyor (+4.1). Şah e5’te hem d ve f piyonlarını destekler hem e4’ü bloke eder.',
    },
    '44b': {
      text: '44...Kf7: Şah f7’ye gelir.',
      amac: 'f6 ve g6 karelerini kontrol edip f ve g piyonlarını durdurmak.',
      neden: '44...Kf8 (+3.6) daha dayanıklı görünüyor ama sonuç aynı. Siyah şahı şah kanadına bağlandıkça vezir kanadı tamamen fille savunulmak zorunda.',
    },
    '45w': {
      text: '45.a4!: a-piyonu fili saptırmak için öne gelir.',
      amac: 'Fili a4’e çekmek ve d5 kırılması için c6’yı zayıflatmak.',
      neden: 'Macdonald bunu bir saptırma olarak işaretliyor: 45...Bxa4? 46.g6+! ile şah uzaklaşır ve e4 düşer (Motor: +5.8). Motor 45.Kd6 46...Ba4 47.d5 (+4.6) ile daha kesin bir yolu da gösteriyor.',
      diger: [
        { move: '45.Kd6', text: '45...Ba4 46.d5 cxd5 47.Kxd5 (Motor: +4.6).' },
      ],
    },
    '45b': {
      text: '45...Kg7: Şah g7’ye döner.',
      amac: 'g6 karesini tutup g6+ fikrini engellemek.',
      neden: '45...Bxa4? 46.g6+ Kg7 47.Kxe4 ile Beyaz e4’ü alır ve şahı rahat ilerler (Motor: +5.8). Lasker piyonu almadan önce şahını güvene koydu.',
      diger: [
        { move: '45...Bxa4', text: '46.g6+ Kg7 47.Kxe4 Bd1 48.Kf4 (Motor: +5.8).' },
      ],
    },
    '46w': {
      text: '46.d5!: Merkezde üçüncü geçer piyonu yaratan kırılma.',
      amac: 'c6 ile değişip d-piyonunu (veya b-piyonunu) geçer yapmak; fili iki uzak piyona karşı aşırı yüklemek.',
      neden: 'Motor en iyi hamle olarak gösteriyor (+5.6). Fil beyaz karelerde; d6 ve d8 siyah kareler, fil d-piyonunu ancak d7’de durdurabilir. Macdonald, 46...cxd5 47.b5! ile b-piyonunun da vezire koşacağını gösterir.',
      diger: [
        { move: '46.Kf4', text: '46...Bxa4 47.Kxe4 Bb5 (Motor: +4.8); yavaş.' },
      ],
    },
    '46b': {
      text: '46...Bxa4: Fil a4 piyonunu alır.',
      amac: 'Bir piyon kazanmak ve d1-a4 çaprazından d7’yi kontrol etmek.',
      neden: '46...cxd5 47.b5! axb5 48.axb5 ile b-piyonu durdurulamaz (Motor: +6.1). Siyah, fili d7’ye bakan çapraza getirmeyi tercih etti.',
      diger: [
        { move: '46...cxd5', text: '47.b5 axb5 48.axb5 ile b-piyonu koşar (Motor: +6.1).' },
      ],
    },
    '47w': {
      text: '47.d6: d-piyonu altıncı yatayda.',
      amac: 'Piyonu d7’ye ilerletmek; fil d7’yi tutsa bile f ve g piyonları serbest kalacak.',
      neden: 'Motor ilk sırada (+5.4). 47.f6+ (+5.3) de kazanır. Şah e5’te d6’yı korur.',
    },
    '47b': {
      text: '47...c5: Siyah c-piyonunu değiştirmeye çalışır.',
      amac: 'Kendi geçer piyonunu yaratmak veya Beyazın vezir kanadı piyonlarını azaltmak.',
      neden: 'Motor 47...Kf7 / Kf8’i (+5.8) daha dayanıklı buluyor; 47...c5 48.bxc5 ile Beyaza bir geçer piyon daha verir (+6.9).',
      diger: [
        { move: '47...Kf7', text: '48.g6+ Ke8 49.f6 (Motor: +5.8).' },
      ],
    },
    '48w': {
      text: '48.bxc5: Beyaz alır; c-piyonu da geçer.',
      amac: 'c6-c7 ile yeni bir koşu hazırlamak.',
      neden: 'Motor ilk sırada (+6.9). Artık Beyazın c, d, f, g piyonları fili tamamen boğuyor.',
    },
    '48b': {
      text: '48...Bc6: Fil c6’ya, d7 ve e8’i kontrol eder.',
      amac: 'c-piyonunu bloke etmek ve d7’yi tutmak.',
      neden: 'Motor 48...Bd7 ile eşit görüyor (+7.0). Ne yapsa d7, f7 ve c7 kareleri aynı anda korunamaz.',
    },
    '49w': {
      text: '49.Ke6: Şah e6’ya; d7 ve f7 karelerini destekler.',
      amac: 'f6-f7 veya d7 ile piyonlardan birini vezire çıkarmak.',
      neden: 'Motor ilk sırada (+7.5). Şah e6’da hem d7’yi hem f7’yi koruyor; fil ikisine aynı anda bakamaz.',
    },
    '49b': {
      text: '49...a5: Son umut a-piyonu.',
      amac: 'Kendi piyonunu vezire koşturup karşı tehdit yaratmak.',
      neden: 'Çok geç: a-piyonu a1’e ulaşmadan Beyaz piyonu vezir olur. 49...Kf8 50.f6 (+7.6) da kaybeder.',
    },
    '50w': {
      text: '50.f6+: f-piyonu şah çeker. Lasker terk etti.',
      amac: 'f7 ve d7 tehditleriyle bir piyonu vezire çıkarmak.',
      neden: '50...Kg6 51.f7 Bd5+ 52.Ke7 Bxf7 53.d7 ve d-piyonu vezir olur (Motor: +7.4). Fil iki piyonu aynı anda durduramaz: oyunsonunun dersi tam olarak bu.',
    },
  },
  qa: [
    { q: 'Lasker neden 10...f6 yerine 10...f5 oynadı?', a: '10...f6 fili 11.Bg3 ile hemen kovar ve Siyaha sağlam bir oyun verirdi (Motor: +0.3). Lasker simetrik yapıda kazanma şansı istiyordu: ...f5 ile e4 karesini aldı ve f6’yı atına geri dönüş için boş bıraktı. Bedeli e6 piyonunun geri kalması ve şah kanadının zayıflamasıydı (Motor: +0.7).' },
    { q: 'Siyah neden 12...gxf6 ile aldı, 12...Bxf6 değil?', a: '12...Bxf6 daha sağlamdı (Motor: +0.5) ama e5 karesini Beyaz atına (Ne5) bırakırdı. Sadler’e göre Lasker, Marshall’a karşı oynadığı oyunda e5 yüzünden rahatsızlık yaşamıştı; g-piyonuyla alarak e5’i piyonla tuttu ve g-hattını kaleye açtı. Karşılığında şahının önündeki piyonlar dağıldı.' },
    { q: '14.f4 neden önemliydi?', a: 'f4, Siyahın f5 piyonunu yerinde dondurdu ve ...e5 kırılmasını tamamen kapattı. Böylece f5 kalıcı bir hedef oldu ve Nh4 atı ona sürekli baktı. Oyunun en önemli anı olan 26.Nxf5 fedası, bu sabitleme olmasaydı mümkün olmazdı.' },
    { q: 'Capablanca 21. hamlede ne kaçırdı?', a: '21.g4! fxg4 22.Qxg4 f5 23.Nxf5 ile hattı hemen açabilirdi (Motor: +1.0). 21.Qf3 ile vezir c4’e gelen atı durdurmadı ve bir hamle sonra 22.Qe2 ile geri dönmek zorunda kaldı; değerlendirme 0.00’a indi.' },
    { q: '26.Nxf5 fedası gerçekten doğru muydu?', a: 'Evet. Motor bu pozisyonda en iyi hamle olarak 26.Nxf5’i gösteriyor (+0.6). Alternatifler daha kötü: 26.Ng6+ yalnızca sürekli şaha gider (0.00), veziri geri çekmek 26.Qh3 ise Siyahı üstün yapar (−0.9). Fedadan sonra Beyazın iki piyonu, açık bir Siyah şahı ve ilerlemeye hazır g-piyonları var.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'İki yerde: 32...Rc2+! 33.Kg3 Re2 ile Siyah kalesi e3’e saldırıp Beyaz şahını rahatsız ederek dengeyi koruyordu (Motor: 0.00). Daha sonra 37...Bd5, 37...Bf7 veya 37...Qd6 ile vezirleri tutarak hâlâ dengedeydi (Motor: +0.1). Lederer’in aktardığına göre Lasker de oyundan sonra Bd5’in muhtemelen beraberlik vereceğini söylemiş.' },
    { q: 'Neden vezir değişimi Siyahı kaybettirdi?', a: 'Vezirler tahtadayken Siyahın veziri Beyaz şahına sürekli şah çekebilir ve piyonların ilerlemesini taktiklerle engelleyebilirdi. Vezirler gidince Beyazın şahı rahatça merkeze geldi (Kxf5-e5) ve altı piyon tek fil ile üç piyona karşı kazandı. Fil beyaz karelerde olduğu için b4, d6 gibi siyah karelerdeki piyonlara hiç saldıramadı.' },
    { q: 'Oyunsonunda Beyaz nasıl kazandı?', a: 'Capablanca önce piyonlarını güvenli karelere koydu (40.b4, 42.f5), sonra şahını merkeze getirdi (43.Kf4, 44.Ke5). 45.a4 ile fili saptırdı ve 46.d5! ile üçüncü bir geçer piyon yarattı. Fil d-piyonunu durdururken f ve g piyonları ilerledi; 50.f6+ sonrası d7 ve f7 tehditleri aynı anda durdurulamazdı.' },
    { q: 'Saat tartışması neydi?', a: 'Lasker, saatinin bozuk çalıştığını ve bu yüzden zaman kaybettiğini iddia etti. Turnuva direktörü Lederer ise Lasker’in saatini düzgün durdurmadığını, farkın yaklaşık sekiz dakika olduğunu ve zaman sıkıntısında olanın Capablanca olduğunu yazdı. Capablanca da Lasker’in kendisine her kaybedişinde bir mazeret aradığını söyledi. Olayın kesin gerçeği bilinmiyor.' },
  ],
  sources: [
    { title: 'ChessBase: New York 1924, Round 14 – Capablanca wins against Dr. Lasker', url: 'https://en.chessbase.com/post/new-york-1924-round-14-capablanca-wins-against-dr-lasker' },
    { title: 'ChessBase (Almanca): New York 1924, Runde 14', url: 'https://de.chessbase.com/post/new-york-1924-runde-14-capablanca-gewinnt-gegen-dr-lasker' },
    { title: 'Washington Times: Clash of giants at 100 – New York 1924', url: 'https://www.washingtontimes.com/news/2024/may/7/clash-of-giants-at-100-new-york-1924-still-casts-s/' },
    { title: 'Blind-Chess listesi: Annotated Game #086 (R.J. Macdonald notları)', url: 'https://www.freelists.org/post/blind-chess/Annotated-Game-086-Jose-Raul-Capablanca-Emanuel-Lasker-New-York-1924' },
    { title: 'Matthew Sadler: Lasker’s struggle against the Exchange Slav', url: 'https://matthewsadler.me.uk/?p=17124' },
    { title: 'Edward Winter: New York, 1924 (saat tartışması)', url: 'https://chesshistory.com/winter/extra/newyork1924.html' },
    { title: 'Exchange Slav Strategy and Tactics (masterinchess.com)', url: 'https://masterinchess.com/Media/2024/07/Exchange%20Slav%20Strategy%20and%20Tactics.pdf' },
    { title: 'Wikipedia: New York 1924 chess tournament', url: 'https://en.wikipedia.org/wiki/New_York_1924_chess_tournament' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  exercises: [
    { id: 'cl-1', kind: 'tekrar', plan: false, title: 'At fedası',
      source: 'Capablanca – Lasker, New York 1924 (26. hamle)',
      fen: '2rqb2k/pp2b2p/4p3/3p1p2/3PpPQN/P1N1P1P1/1P3KP1/7R w - - 0 26',
      prompt: 'Siyah ...f5 ile vezire saldırdı. Capablanca’nın cesur cevabını bulun.',
      hint: 'h4 atı f5 piyonuna saldırıyor ve f5 yalnızca e6 ile korunuyor.',
      line: ['Nxf5'],
      explanation: '**26.Nxf5!** exf5 27.Qxf5 sonrası Beyaz at karşılığında iki piyon alır, Siyah şahının önü açılır ve e4 ile d5 piyonları savunmasız kalır. Motor: Nxf5 +1.1, Ng6+ 0.0, vezir çekilişleri Siyahı daha iyi yapar.',
      link: 'Capablanca önce f4 ile f5 piyonunu sabitledi, sonra atla ona saldırdı. Sabitlenen zayıflık fedanın hedefi oldu.' },
    { id: 'cl-2', kind: 'tekrar', plan: true, title: 'Piyonları yürütün',
      source: 'Capablanca – Lasker, New York 1924 (28. hamle)',
      fen: '2rqb2k/pp2b3/8/3p1Q1p/3PpP2/P1N1P1P1/1P3KP1/7R w - - 0 28',
      prompt: 'At fedasının karşılığı piyonlar. Siyah ...h5 ile h-hattını kapattı. Beyazın planı ne?',
      hint: 'Şah kanadındaki iki piyondan biri h5’e saldırabilir.',
      line: ['g4'],
      explanation: '**28.g4!** h5 piyonuna saldırılır ve şah kanadı piyonları yürümeye başlar. Ardından g5 ile Siyahın şahı daha da açılır. Motor g4’ü bu pozisyonun en iyi hamlesi olarak gösteriyor.',
      link: 'Fedadan kazanılan piyonlar hareketsiz kalırsa değeri azalır; Capablanca onları hemen ilerletti.' },
    { id: 'cl-3', kind: 'transfer', plan: false, title: 'Botvinnik’in at baskını',
      source: 'Botvinnik – Tal, Dünya Şampiyonası maçı, Moskova 1961, 11. oyun (21. hamle)',
      fen: '4r1k1/r4pp1/1n2p2p/2Bp4/P2P4/3bPP2/6PP/R1R3K1 w - - 0 21',
      prompt: 'Aynı Slav Değişim yapısı. Botvinnik bir önceki hamlede Nxa7 ile piyon aldı ve Siyah kaleyle geri aldı. Şimdi ne oynarsınız?',
      hint: 'b6 atı Siyahın en iyi savunucusu.',
      line: ['Bxb6'],
      explanation: '**21.Bxb6!** Fil atı alır ve a-piyonu geçer piyon olur. Beyaz bir piyon önde ve a4-a5-a6 ile ilerleyecek. Motor: Bxb6 +1.5, sonraki en iyi hamle 0.0.',
      link: 'Capablanca şah kanadında piyonlar kazandı, Botvinnik vezir kanadında. İki maçta da simetrik yapı bozulunca geçer piyon belirleyici oldu.' },
    { id: 'cl-4', kind: 'transfer', plan: false, title: 'Geçer piyonu yedinci yataya',
      source: 'Botvinnik – Tal, Dünya Şampiyonası maçı, Moskova 1961, 11. oyun (38. hamle)',
      fen: '2r4r/8/PB2p1kp/3pP3/2b3P1/5P2/3K3R/2R5 w - - 1 38',
      prompt: 'a-piyonu a6’ya kadar geldi. En güçlü devam nedir?',
      hint: 'Fil a7 karesini destekliyor.',
      line: ['a7'],
      explanation: '**38.a7!** Piyon yedinci yatayda ve fil tarafından destekleniyor. Siyah kalelerinden birini a8’de tutmak zorunda kalır ve şah kanadındaki zayıflıklar Beyaza kalır. Motor: a7 +4.4, sonraki en iyi hamle +3.1.',
      link: 'Capablanca’nın oyunsonunda olduğu gibi: geçer piyon rakip taşları pasif savunmaya bağlar, Beyaz diğer kanatta kazanır.' },
  ],
};
