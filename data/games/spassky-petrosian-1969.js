// Spasski – Petrosyan, Dünya Şampiyonası maçı, Moskova 1969 (1. oyun). Kaynak: PgnMentor (Petrosian.pgn).
export default {
  id: 'spassky-petrosian-1969',
  theme: 'Açık a-hattı ve merkezden doğan geçer piyonlar',
  white: 'Boris Spasski', black: 'Tigran Petrosyan',
  whiteShort: 'Spasski', blackShort: 'Petrosyan',
  event: 'Dünya Şampiyonası maçı, 1. oyun', site: 'Moskova', year: 1969, eco: 'B42',
  variation: 'Sicilya Kan (Paulsen), 5.Bd3 Nc6 6.Nxc6', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Nc6 6. Nxc6 bxc6 7. O-O d5 8. Nd2 Nf6 9. Qe2 Be7 10. b3 O-O 11. Bb2 a5 12. f4 g6 13. Rad1 Nd7 14. c4 a4 15. f5 exf5 16. exf5 Bf6 17. Bxf6 Nxf6 18. Qf2 axb3 19. axb3 Ra2 20. fxg6 fxg6 21. h3 Qe7 22. Qd4 c5 23. Qf4 Bb7 24. Rde1 Qg7 25. Qe3 d4 26. Qe6+ Qf7 27. Qe2 Re8 28. Qf2 Rxe1 29. Qxe1 Qe8 30. Qxe8+ Nxe8 31. Be4 Rxd2 32. Bxb7 Nd6 33. Bd5+ Kg7 34. b4 cxb4 35. c5 Nf5 36. c6 Rc2 37. g4 Nd6 38. Rf4 d3 39. Rd4 d2 40. Bb3 Rxc6 41. Rxd2 Ne4 42. Rd7+ Kf6 43. Rxh7 Rc1+ 44. Kg2 Nc5 45. Bf7 b3 46. g5+ Kxg5 47. h4+ Kf6 48. h5 Rc2+ 49. Kf3 b2 50. Ba2 gxh5 51. Rxh5 Rc1 52. Rh6+ Ke5 53. Rb6 Na4 54. Re6+ Kd4 55. Re4+ Kc5 56. Rxa4 Ra1 0-1`,

  summary: 'Moskova 1969 Dünya Şampiyonası maçının ilk oyunu. Unvanı elinde tutan Petrosyan, Siyah taşlarla Spasski’yi Sicilya ile şaşırttı ve Kan (Paulsen) varyantını seçti. Spasski 6.Nxc6 ile Siyaha c6-d5-e6 piyon merkezini verdi, ardından Bd3, Qe2, b3, Bb2 ve **12.f4-15.f5** ile şah kanadında saldırı aradı. Petrosyan ise saldırıyı karşılarken vezir kanadında kendi oyununu kurdu: **...a5-a4** ile a-hattını açtı, **19...Ra2** ile kalesini Beyazın ikinci yatayına soktu, **22...c5 ve 25...d4!** ile korunan bir geçer piyon yarattı ve b7 filinin uzun çaprazını açtı. Orta oyunda iki taraf da fırsat kaçırdı (Motor 24.Rde1’i hata, 24...Nh5’i ise Siyahın kaçırdığı güçlü devam olarak gösteriyor). Vezirler değişildikten sonra kale+at’a karşı kale+fil oyun sonunda Siyahın b- ve d-piyonları Beyazı sürekli savunmada tuttu. Erteleme sonrasında Siyah iki kez kazanca yaklaştı, 50...gxh5 ile avantajı bıraktı; ama **52.Rh6+?** hatasından sonra **53...Na4!** ile atını feda edip **56...Ra1!** ile b-piyonunun terfisini zorladı.',
  intro: 'Bu oyun, 1966’daki maçın rövanşı olan 1969 Petrosyan – Spasski Dünya Şampiyonası maçının açılış oyunudur; maç Moskova’da 24 oyun üzerinden oynandı ve sonunda Spasski 12½–10½ kazanarak onuncu dünya şampiyonu oldu. Chesspedia’nın derlediğine göre Petrosyan ilk oyunda Sicilya’ya girerek rakibini şaşırttı; Spasski şah kanadı saldırısını verimli yürütemedi ve oyunu bir piyon eksik bir pozisyonda erteledi; ertesi gün yardımcısı Bondarevski’nin analiziyle oynadığı oyun sonu berabere bitecekken bir hata Petrosyan’ın atını feda edip piyonunu terfi ettirmesine izin verdi. Açılışın kendisi de öğreticidir: 4...a6 (Kan) Siyaha esneklik verir, 5.Bd3 e4’ü filin arkasına alır, 6.Nxc6 bxc6 ise Siyaha sağlam bir merkez ve açık b-hattı, karşılığında yalnız bir a-piyonu bırakır. Petrosyan bu yalnız a-piyonunu bir zaaf olarak değil, a-hattını açacak bir koçbaşı olarak kullandı.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**6.Nxc6 bxc6** ile Siyahın piyon yapısını değiştirmek: Siyahın c-piyonu ikiye katlanır, a-piyonu yalnız kalır. Beyaz bu küçük yapısal zaafların uzun vadede değer kazanmasını umar.',
      'e4’ü taşlarla tutmak (Bd3, Nd2, Qe2) ve **b3-Bb2** ile kara kareli fili uzun çapraza yerleştirmek; Siyahın kara kareleri (f6, g7) bu çaprazdan hedef olur.',
      '**12.f4 ve 15.f5** ile f-hattını açıp şah kanadında saldırı kurmak. Plan, vezir kanadında Siyahın ...a4-a3 karşı oyunu gelmeden önce sonuç almalıydı; motor bu saldırının ancak denge getirdiğini, 15.f5’in de 15.Kh1’den zayıf olduğunu gösteriyor.',
      '**14.c4** ile d5’e baskı yapmak ve Siyahın merkezini hareketsiz bırakmak. Ama bu hamle d4 karesini ve a-hattını Siyaha terk etti; 25...d4 ile Siyahın merkezi tam tersine canlandı.',
      'Orta oyunda f-hattı ve e-hattında ağır taşlarla Siyahın şahını sıkıştırmak (Qf4, Qg5 baskısı). Motor **24.Qg5** ve **25.Qg5** ile Beyazın hâlâ hafif üstün olabileceğini gösteriyor; 24.Rde1 ve 25.Qe3 bu baskıyı dağıttı.',
      'Oyun sonunda **34.b4 ve 35.c5** ile kendi geçer piyonunu yaratıp Siyahın b- ve d-piyonlarına karşı oyun bulmak; fili b1 ve d1 karelerinin bekçisi yapmak.',
      'Son aşamada şahı vezir kanadına, b-piyonunun önüne götürmek (motorun 52.Ke3’ü). Bunun yerine 52.Rh6+ ile zaman kaybedildi ve şah f3’te uzak kaldı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...d5** ile c6-d5-e6 piyon zincirini kurmak, e4’e baskı yapmak ve Beyazın f4-f5 saldırısına karşı merkezde sağlam durmak.',
      '**...a5-a4-axb3** ile yalnız a-piyonunu koçbaşı yapıp a-hattını açmak; ardından **...Ra2** ile kaleyi Beyazın ikinci yatayına sokmak. Kale önce d2 atını, sonra bütün ikinci yatayı baskı altında tuttu.',
      '...g6, ...Nd7-Bf6 ve ...Bf6xb2 değişimiyle kara kareleri savunmak; Beyazın en tehlikeli saldırı taşı olan b2 filini oyundan çıkarmak.',
      '**...c5 ve ...d4** ile c5 piyonuyla korunan bir geçer piyon yaratmak, aynı anda b7 filinin a8-h1 çaprazını açmak. Bu iki piyon, oyun sonunun bütün planını belirledi.',
      'Vezirleri değişip (29...Qe8) geçer piyonların ve aktif kalenin ağır bastığı bir oyun sonuna geçmek; Beyazın şah saldırısı ihtimalini tamamen ortadan kaldırmak.',
      'Oyun sonunda d-piyonunu bir yem gibi kullanıp Beyazın taşlarını bağlamak, asıl kazanma şansını uzak b-piyonunda aramak; atı (...Nc5, ...Na4) b-piyonunun destekçisi yapmak.',
      'Son aşamada terfi karesinin tek savunucusunu ortadan kaldırmak: **53...Na4!** atı feda eder, **56...Ra1!** a2 filini b1 karesini korurken bağlar.',
    ] },
  },
  critical: [
    { move: '15w', title: 'f5?!: saldırı erken başlıyor', text: 'Spasski 12.f4 ile başladığı saldırıyı 15.f5 ile somutlaştırdı. Motor burada 15.Kh1’i öneriyor (+0.34): şah g1-a7 çaprazından çekilir, böylece ...Bc5+ ve ...Qb6+ gibi tempolu şahlar ortadan kalkar. Maç hamlesinden sonra 15...exf5 16.exf5 Bf6 ile Siyah kara kareli filleri değişir ve denge kurulur (+0.06). Chesspedia’nın aktardığı yorumda da Spasski’nin şah kanadı saldırısını verimli yürütemediği belirtilir.' },
    { move: '19b', title: '...Ra2: kale ikinci yatayda', text: 'a-hattı açılır açılmaz kale a2’ye girdi. Motor 19...Ng4’ü biraz daha kesin buluyor (+0.10, maç hamlesi +0.47), ama Ra2 oyunun bütün karakterini belirleyen hamledir: kale d2 atını bağlar, sonraki 30 hamle boyunca Beyazın ikinci yatayında kalır, 31...Rxd2 ile at kazanır ve oyun sonunda c2’den Beyazın c-piyonunu durdurur.' },
    { move: '24w', title: 'Rde1? ve karşılıklı kaçan fırsatlar', text: '24.Rde1 Beyazın f4 vezirini savunmasız bıraktı: motor 24...Nh5! ile Siyahın üstün olacağını gösteriyor (25.Qxf8+ Qxf8 26.Rxf8+ Kxf8 27.Re2 d4, −0.96). Doğrusu 24.Qg5’ti (+0.35). Petrosyan 24...Qg7 ile bu fırsatı kaçırdı (+0.69); bu kez Spasski 25.Qg5! ile bağlı f6 atını sıkıştırabilirdi (+0.77), ama 25.Qe3 oynadı (−0.42).' },
    { move: '25b', title: '...d4! geçer piyon ve uzun çapraz', text: 'Siyah d-piyonunu vezire tempoyla ilerletir. c5 piyonuyla korunan bir geçer piyon doğar, b7 filinin g2’ye uzanan çaprazı açılır ve Beyazın veziri e3’ten kovulur. Motor ...d4’ü açık farkla en iyi buluyor (−0.21; sonraki en iyi 25...Qd7 +0.52). Bu piyon oyun sonuna kadar Beyazın taşlarını bağladı.' },
    { move: '39b', title: '...d2?: kazanç yolu kaçıyor', text: 'Siyah iki geçer piyonla açık üstündeydi. Motor 39...Rc3! ile fili b3’e çekmeye zorlayıp 40.Bb3 Rxb3 41.Rxd6 Rc3 ile fil kazanmayı gösteriyor (−2.27). 39...d2 40.Bb3 Rxc6 41.Rxd2 sonrası Beyaz d-piyonunu aldı ve oyun bir piyonluk ama kazanılması zor bir oyun sonuna döndü (−0.45). Oyun bu civarda ertelendi.' },
    { move: '50b', title: '...gxh5?!: avantaj geri veriliyor', text: 'b-piyonu b2’ye ulaşmış, Siyah kazanmaya çok yakındı. Motor 50...Rc3+! ile önce şahı kovup g-piyonunu tutmayı öneriyor (−2.95). 50...gxh5 51.Rxh5 sonrası Siyahın şah kanadında piyonu kalmadı ve Beyaz kale+fil ile beraberliği tutabilecek konuma geldi (−0.21). Chesspedia’nın aktardığına göre Spasski de erteleme sonrasında elinde beraberlik olduğunu söylemişti.' },
    { move: '52w', title: 'Rh6+??: belirleyici hata', text: 'Motor 52.Ke3’ü öneriyor (−0.08): şah d4 ve c3 üzerinden b-piyonuna yaklaşır, kale de at ve b-piyonu üzerinde baskı kurar. 52.Rh6+ ise yalnızca Siyahın şahını merkeze yaklaştırdı; 52...Ke5 53.Rb6 Na4! sonrası b-piyonunun terfisi durdurulamaz (−2.97). Chesspedia’nın aktardığına göre Spasski, beraberliği varken daha basit görünen bir yolu seçip kaybettiğini anlatmıştır.' },
    { move: '53b', title: '...Na4!: savunucuyu saptırmak', text: 'At a4’e gelir: hem b6 kalesine yolu kapatır hem de b2’yi korur. Kale atı alırsa ...Ra1 a2 filine saldırır; fil b1 karesini bırakamaz, kale de a2’yi alıp b-piyonuna yol açar. Oyunda 54.Re6+ Kd4 55.Re4+ Kc5 56.Rxa4 Ra1 geldi ve Spasski terk etti. Motor: 53...Na4 −3.01, sonraki en iyi 53...Rc3+ −0.20.' },
  ],
  lessons: [
    'Kan’da 6.Nxc6 bxc6 7.O-O d5 sonrası Siyahın c6-d5-e6 merkezi sağlamdır. Beyaz bu merkeze karşı f4-f5 ile saldırırsa, önce şahını g1-a7 çaprazından çekmek (Kh1) gibi küçük hazırlık hamleleri büyük fark yaratır.',
    'Yalnız kalan kanat piyonu her zaman zaaf değildir: ...a5-a4-axb3 ile ilerletilen a-piyonu bir hat açtı ve **açık hattaki kale ikinci yatayda** (…Ra2) 30 hamle boyunca rakibi bağladı.',
    'Merkez piyonunu ilerletmek (...c5 ve ...d4) hem korunan bir geçer piyon yaratır hem de arkasındaki filin çaprazını açar; aynı hamle rakip vezire tempo kazandırırsa daha da güçlüdür.',
    'Rakip saldırı ararken vezir değişimi önermek (29...Qe8) savunanın en iyi silahlarından biridir: saldırı biter, geriye geçer piyonların ve aktif taşların konuştuğu bir oyun sonu kalır.',
    'Oyun sonunda iki geçer piyonun biri çoğu zaman yemdir: Siyahın d-piyonu Beyazın kalesini ve filini bağladı, asıl iş uzak b-piyonuna kaldı. Uzak geçer piyonu durdurmanın en iyi yolu şahı onun önüne getirmektir (52.Ke3), anlamsız şahlar değil (52.Rh6+).',
    'Avantajı geri vermek (39...d2, 50...gxh5) rakibe kurtuluş şansı verir; ama sabırlı oyuncu baskıyı sürdürür ve rakibin hatasını bekler. Petrosyan’ın bu oyunu, savunmadan karşı saldırıya geçişin klasik örneğidir.',
    'Terfi karesini savunan taşı saptırmak için kendi taşını vermek (53...Na4 ve 56...Ra1) oyun sonlarının temel kombinasyon fikirlerinden biridir: fil hem b1’i korumak hem de kaçmak zorunda kalır.',
  ],
  qa: [
    { q: 'Petrosyan neden ilk oyunda Sicilya ve Kan’ı seçti?', a: 'Chesspedia’nın aktardığına göre Petrosyan ilk oyunda Sicilya’yı oynayarak Spasski’yi şaşırttı. Kan (4...a6) Siyaha esnek bir yapı verir: ...Nf6 ve ...d6’yı geciktirir, piyonlarını sonra konuşlandırır. Bu, sağlam yapıya ve karşı saldırıya dayanan Petrosyan’ın tarzına uygundu: Beyazın erken saldırısını karşılayıp sonra kendi oyununu kurdu.' },
    { q: 'Beyaz neden 6.Nxc6 oynadı ve bu hamle neye yol açtı?', a: '6.Nxc6 bxc6 Siyaha ikiye katlanmış c-piyonları ve yalnız bir a-piyonu verir; Beyaz bunları uzun vadeli hedefler olarak görür. Karşılığında Siyahın b-piyonu merkeze yaklaşır ve 7...d5 ile güçlü bir c6-d5-e6 merkezi kurulur. Motor hamleyi en iyi seçenek sayıyor (+0.56); ama bu oyunda Siyahın “zaaf” sayılan piyonları (a-piyonu ve c-piyonu) a-hattını açtı ve ...c5-d4 ile geçer piyon yarattı.' },
    { q: 'Beyazın f4-f5 saldırısı neden işe yaramadı?', a: 'Saldırı hazırlıksız başladı: Beyazın şahı g1’de, g1-a7 çaprazında kaldı ve Siyahın ...Bc5+ ya da ...Qb6+ gibi tempolu şahları hep havada asılı durdu; motor 15.Kh1’i bu yüzden öneriyor. 15.f5 exf5 16.exf5 Bf6 17.Bxf6 Nxf6 sonrası Beyazın en iyi saldırı taşı olan b2 fili değişildi, f6 atı şahı savundu ve Siyah aynı anda ...axb3 ve ...Ra2 ile vezir kanadında karşı oyun açtı.' },
    { q: 'Petrosyan a-piyonuyla neyi amaçladı?', a: '6...bxc6 sonrası a6 piyonu yalnız kalmıştı ve uzun vadede bir zaaf olabilirdi. Petrosyan onu 11...a5 ve 14...a4 ile b3 piyonuna dayadı; 18...axb3 19.axb3 ile a-hattı açıldı ve 19...Ra2 ile kale Beyazın ikinci yatayına girdi. Yani zaaf, rakibin kampına giden bir yola dönüştü: kale önce d2 atını bağladı, 31...Rxd2 ile atı aldı, sonra c2’den Beyazın c-piyonunu durdurdu.' },
    { q: '25...d4 neden bu kadar önemli bir hamleydi?', a: 'Tek hamlede üç şey yaptı: e3 vezirine tempoyla saldırdı, c5 piyonuyla korunan bir geçer piyon yarattı ve b7 filinin a8-h1 çaprazını açtı. Motor 25...d4’ü −0.21 değerlendiriyor; doğal görünen 25...Qd7 ise +0.52, 25...Nd7 +0.81. Bu piyon daha sonra 38...d3 ve 39...d2 ile Beyazın kalesini ve filini savunmaya bağladı.' },
    { q: 'Spasski orta oyunda nerede üstünlük kurabilirdi?', a: 'Motor 24. ve 25. hamlelerde iki fırsat gösteriyor. 24.Qg5 (+0.35) yerine 24.Rde1 oynandı; bu hamle 24...Nh5! ile cezalandırılabilirdi (−0.96), ama Petrosyan 24...Qg7 oynadı. Ardından 25.Qg5! (+0.77) bağlı f6 atına ve d5 piyonuna baskıyla Beyaza hafif üstünlük verirdi; Spasski 25.Qe3 oynadı ve 25...d4! ile girişimi kaybetti. Spasski’nin maçtan sonra söylediği “önce mükemmel bir pozisyonum vardı, sonra avantajım azaldı” sözü (Chesspedia’nın aktarımıyla) büyük olasılıkla bu döneme işaret eder.' },
    { q: 'Siyah oyun sonunda nerede kazancı kaçırdı?', a: 'İki yerde. 39...d2 yerine 39...Rc3! 40.Bb3 Rxb3 41.Rxd6 Rc3 fil kazanırdı (−2.27); oyunda Beyaz d-piyonunu alıp savundu (−0.45). Ardından 50...gxh5 yerine 50...Rc3+ (−2.95) kazanmaya devam ederdi; 50...gxh5 51.Rxh5 sonrası pozisyon beraberliğe döndü (−0.21).' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'En açık kurtuluş 52. hamledeydi: 52.Ke3! ile şah d4 ve c3 üzerinden b-piyonuna yürür, kale de atı ve b2’yi takip eder (Motor: −0.08). Oyundaki 52.Rh6+ Ke5 53.Rb6 Na4! sonrası Beyazın şahı f3’te çok uzakta kaldı. Daha önce de 45.Rf7+ Ke5 46.Rf3 (−0.76), 45.Bf7’den çok daha dayanıklıydı.' },
    { q: 'Son kombinasyon (53...Na4 ve 56...Ra1) nasıl çalışıyor?', a: 'b2 piyonunun terfi edeceği b1 karesini yalnızca a2 fili koruyor. 53...Na4 at ile b2’yi destekler ve b6 kalesinin b-hattını kapatır; kale atı alsa bile 56...Ra1 filin arkasına geçer. Fil a2’den ayrılırsa b1=Q gelir; yerinde kalırsa ...Rxa2 ve kale geri alsa bile b1=Q. Sonuçta Siyahın veziri Beyazın kalesine karşı kolay kazanır.' },
  ],
  sources: [
    { title: 'Wikipedia: World Chess Championship 1969', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1969' },
    { title: 'The Chesspedia: The final, April – June 1969 (Spasski – Petrosyan maçı)', url: 'https://thechesspedia.net/?p=29093' },
    { title: 'The Spectator, 14 Haziran 1969 (satranç köşesi)', url: 'https://archive.spectator.co.uk/article/14th-june-1969/28/chess-443' },
    { title: 'Chessgames.com: Petrosian – Spassky World Championship Match 1969', url: 'https://www.chessgames.com/perl/chess.pl?tid=54396' },
    { title: 'Chess.com blog: B43 Sicilian, Kan Variation', url: 'https://www.chess.com/blog/kleelof/b43-sicilian-kan-variation' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Spasski, maçın ilk oyununda şah piyonuyla açar ve e4 ile d5 karelerine hükmeder.',
      amac: 'Merkezi tutmak, fil ve vezire yol açmak; Spasski’nin sevdiği açık ve hareketli oyunlara kapı aralamak.',
      neden: 'Spasski kariyeri boyunca 1.e4 ile saldırgan oyunlar oynadı; Petrosyan’ın sağlam savunmalarına karşı da aktif bir oyun arıyordu. Motor da 1.e4’ü en iyi buluyor (+0.39).',
      diger: [
        { move: '1.d4', text: 'Kapalı oyunlara götürür; maçta Spasski bazı oyunlarda vezir piyonuyla da açtı. Motor: +0.17.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç, çoğu zaman vezir piyonu açılışlarına döner. Motor: +0.16.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini yandan kontrol eder ve simetrik olmayan bir oyun seçer.',
      amac: 'Beyazın d4 ile merkezi tamamen ele geçirmesini zorlaştırmak; c-hattını açıp vezir kanadında karşı oyun kurmak.',
      neden: 'Chesspedia’nın aktardığına göre Petrosyan bu oyunda Sicilya’yı seçerek Spasski’yi şaşırttı. Sicilya, Beyazın merkez piyonu fazlasına karşılık Siyaha yarı açık c-hattı ve dengesiz bir yapı verir. Motor: +0.27, 1...e5 ile hemen hemen aynı.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; Spasski’nin bu alandaki deneyimine karşı daha az sürprizli. Motor: +0.23.' },
        { move: '1...e6', text: 'Fransız Savunması; Siyah daha kapalı bir merkez seçer. Motor: +0.35.' },
      ],
    },
    '2w': {
      text: '2.Nf3: At gelişir, d4 ilerleyişini hazırlar ve e5 karesine bakar.',
      amac: 'Açık Sicilya’ya geçmek için d2-d4’ü desteklemek.',
      neden: 'En yaygın ve en iyi devam (Motor: +0.46). Beyaz, merkezde açılacak piyonlar sonrası gelişim üstünlüğünü kullanmak ister.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya ya da daha sonra Nf3 ile aynı yapılara dönüş. Motor: +0.34.' },
        { move: '2.c3', text: 'Alapin: d4’ü piyonla desteklemeyi seçer. Motor: +0.33.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini kontrol eder ve kara kareli file f8’den yol açar.',
      amac: 'Kan, Taimanov ya da Scheveningen gibi ...e6’lı sistemlere esnek bir yol açmak; ilerde ...d5 kırılmasını hazırlamak.',
      neden: '2...e6 Siyahın at ve d-piyonu hakkında karar vermesini geciktirir; bu oyunda ...d5 ile c6-d5-e6 merkezine giden yolu açacak. Motor: +0.46, 2...d6 ile aynı.',
      diger: [
        { move: '2...d6', text: 'Najdorf ve Dragon gibi sistemlere gider. Motor: +0.47.' },
        { move: '2...Nc6', text: 'Klasik ve Sveshnikov yapıları. Motor: +0.33.' },
      ],
    },
    '3w': {
      text: '3.d4: Merkez açılır; Beyaz Açık Sicilya’ya girer.',
      amac: 'c5 piyonunu değişip d-hattını açmak ve atı d4’te merkeze yerleştirmek.',
      neden: 'Beyazın Sicilya’ya karşı en keskin ve en çok oynanan yolu (Motor: +0.34). Gelişim üstünlüğü ve merkezde alan kazanır.',
      diger: [
        { move: '3.Nc3', text: 'd4’ü geciktirir; çoğu zaman aynı yapılara döner. Motor: +0.34.' },
        { move: '3.c3', text: 'Alapin’e benzer, daha sakin bir yol. Motor: +0.28.' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah merkezi değişir; c-hattı Siyah için yarı açık hale gelir.',
      amac: 'Beyazın d4-d5 ile alan kazanmasını önlemek ve c-hattını açmak.',
      neden: 'Sicilya’nın temel fikri budur: kanat piyonunu merkez piyonuyla değişmek. Değişmezse 3...a6 4.d5 (Motor: +0.83) ya da 3...d5 (+0.97) gibi hamlelerle Siyah merkezde geride kalır.',
      diger: [
        { move: '3...a6', text: 'Değişimi geciktirir ama Beyaz 4.d5 ile alan kazanır. Motor: +0.83.' },
        { move: '3...d5', text: 'Merkezi erken açar; Beyaz gelişim üstünlüğüyle rahat oynar. Motor: +0.97.' },
      ],
    },
    '4w': {
      text: '4.Nxd4: Beyaz atla geri alır ve atı merkezde güçlü d4 karesine yerleştirir.',
      amac: 'Merkezi tutmak, c6, e6 ve b5 karelerine baskı yapmak ve gelişimi sürdürmek.',
      neden: 'Doğal ve tek ciddi geri alış (Motor: +0.38). Vezirle almak (4.Qxd4) ...Nc6 ile tempo kaybettirirdi.',
      diger: [
        { move: '4.a3', text: 'Nadir bir ara hamle; piyonu hemen almamak Beyaza bir şey kazandırmaz. Motor: +0.32.' },
      ],
    },
    '4b': {
      text: '4...a6: Kan (Paulsen) varyantı. Siyah b5 karesini kontrol eder ve Beyaz atının Nb5 ile sıçramasını önler.',
      amac: 'Esnek kalmak: ...Nf6 ve ...d6’yı geciktirmek, ...b5 ile vezir kanadında alan kazanma ve ...Qc7 ile e5 karesini tutma seçeneklerini saklamak.',
      neden: 'Kan’ın fikri, Siyahın taşlarını Beyazın kuruluşuna göre yerleştirmesidir. Petrosyan’ın sağlam, bekleyen tarzına uygundu. Motor: +0.55; 4...Nf6 (+0.47) ve 4...Nc6 (Taimanov, +0.50) çok yakın.',
      diger: [
        { move: '4...Nf6', text: 'Klasik gelişim; 5.Nc3 ile Scheveningen ya da 5...Bb4 ile Pin varyantına gider. Motor: +0.47.' },
        { move: '4...Nc6', text: 'Taimanov: at önce c6’ya, a6 sonra gelir. Motor: +0.50.' },
      ],
    },
    '5w': {
      text: '5.Bd3: Fil e4 piyonunu korur ve şah kanadına bakar.',
      amac: 'e4’ü Nc3 olmadan tutmak, böylece c2-c4 ile Maroczy yapısı kurma seçeneğini açık bırakmak; fil aynı zamanda h7’ye bakan bir saldırı taşıdır.',
      neden: 'Kan’a karşı 5.Bd3, 5.Nc3 ve 5.c4 ana yollardır. Bd3 sağlam bir seçimdir ve Spasski bu oyunda c4’ü sonra (14.c4) oynayacak. Motor: +0.58, 5.c4 (+0.60) ile aynı.',
      diger: [
        { move: '5.c4', text: 'Hemen Maroczy yapısı: Siyahın ...b5 ve ...d5 kırılmalarını önler. Motor: +0.60.' },
        { move: '5.Nc3', text: 'En çok oynanan; Siyah 5...Qc7 ya da 5...b5 ile devam eder. Motor: +0.43 (5...b5 sonrası).' },
        { move: '5.Qf3', text: 'Daha az bilinen bir kuruluş. Motor: +0.46.' },
      ],
    },
    '5b': {
      text: '5...Nc6: At gelişir ve d4 atına baskı yapar.',
      amac: 'Beyazı d4 atı hakkında karar vermeye zorlamak: Nb3, Nf3, Nxc6 ya da Be3 ile korumak.',
      neden: '5...Nc6 bir zamanlar 5.Bd3’e karşı en popüler cevaptı; bugün 5...Nf6, 5...Bc5 ve 5...Qc7 daha sık oynanıyor. Motor üçünü de yakın görüyor (5...Nc6 +0.58, 5...Bc5 +0.48, 5...Nf6 +0.53). Petrosyan atı hemen merkeze getirip Beyazın planını erkenden şekillendirmesini istedi.',
      diger: [
        { move: '5...Bc5', text: 'Fil d4 atına baskı yapar; 6.Nb3 Ba7 ile devam edilir. Motor: +0.48.' },
        { move: '5...Nf6', text: 'Önce e4’e baskı; 6.O-O d6 7.c4 ile Maroczy benzeri yapılar. Motor: +0.53.' },
        { move: '5...Qc7', text: 'Kan’ın en karakteristik vezir hamlesi, e5 ve c-hattını tutar. Motor: +0.6 civarı.' },
      ],
    },
    '6w': {
      text: '6.Nxc6: Beyaz atları değişir ve Siyahın b-piyonunu c6’ya çeker.',
      amac: 'Siyahın piyon yapısını değiştirmek: ikiye katlanmış c-piyonları ve yalnız bir a6 piyonu yaratmak; d4 atını kovalanmadan önce değişmek.',
      neden: 'At d4’te kalırsa ...Bc5 ya da ...Qb6 ile baskı görür; geri çekilmek (6.Nb3, Motor: +0.12; 6.Nf3, +0.16) daha pasiftir. Nxc6 motorun ilk tercihi (+0.56) ve Beyaz bu yapıda e4’ü daha rahat tutacağını umar.',
      diger: [
        { move: '6.Nb3', text: 'At c5 ve d4’e bakar ama kenara çekilir; 6...Nf6 7.O-O Qc7 ile Siyah rahattır. Motor: +0.12.' },
        { move: '6.Be3', text: 'Atı korur; 6...Nf6 7.Nxc6 dxc6 benzeri yapılar. Motor: +0.41.' },
      ],
    },
    '6b': {
      text: '6...bxc6: Siyah merkeze doğru alır; b-piyonu c6’ya gelir ve b-hattı açılır.',
      amac: '...d5 ile c6-d5-e6 piyon merkezini kurmak; açık b-hattını kale ya da vezir için kullanmak.',
      neden: 'Merkeze doğru almak genel kuraldır: c6 piyonu d5’i destekler. 6...dxc6 (Motor: +0.65) vezirlerin değişebileceği daha kuru bir yapı verir; Petrosyan dinamik merkezi tercih etti. Bedeli, yalnız kalan a6 piyonudur; ama bu oyunda o piyon a-hattını açacak.',
      diger: [
        { move: '6...dxc6', text: 'd-hattı açılır, Siyah 7.f4 b5 gibi devamlarla vezir kanadında alan arar; daha sakin. Motor: +0.65.' },
        { move: '6...Qb6', text: 'Ara hamle; ama 7.Nd4 sonrası Siyah zaman kaybeder. Motor: +0.94.' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz şahını güvenceye alır ve kaleyi f-hattına getirir.',
      amac: 'Gelişimi tamamlamak ve ilerde f4-f5 ile f-hattında oyun kurmak.',
      neden: 'Doğal ve en iyi hamle (Motor: +0.68). 7.c4 ile hemen Siyahın merkezine baskı yapmak da mümkündü, ama Spasski önce şahını kaçırdı.',
      diger: [
        { move: '7.Qe2', text: 'Önce e4’ü korur, rok sonra. Motor: +0.64.' },
        { move: '7.Nd2', text: 'Oyunda bir hamle sonra gelen kuruluş, sıralaması farklı. Motor: +0.59.' },
      ],
    },
    '7b': {
      text: '7...d5: Siyah c6-d5-e6 piyon zincirini kurar ve e4’e saldırır.',
      amac: 'Merkezde payını almak, Beyazı e4 piyonu hakkında karar vermeye zorlamak (exd5 ya da korumak).',
      neden: '6...bxc6’nın mantıklı devamı. Beyaz exd5 cxd5 oynarsa Siyaha iki merkez piyonu kalır; e4’ü korursa Siyah ...Nf6 ile baskıyı artırır. Motor: +0.59, 7...Qc7 ile aynı.',
      diger: [
        { move: '7...Qc7', text: 'Önce vezir; ...d5’i bir hamle geciktirir. Motor: +0.59.' },
        { move: '7...Ne7', text: 'At e7 üzerinden g6 ya da d5’e; daha nadir. Motor: +0.62.' },
      ],
    },
    '8w': {
      text: '8.Nd2: At e4’ü destekler; c-piyonunun önü açık kalır.',
      amac: 'e4’ü exd5 yapmadan tutmak ve gerekirse Nf3 ya da Nb3 ile atı yeniden konumlandırmak.',
      neden: 'Beyaz merkezde gerilimi korumak istiyor. Motor 8.c4’ü daha iddialı buluyor (+0.81): d5’e hemen baskı kurar ve Qa4 ile c6’ya bakar. Spasski önce taşlarını geliştirmeyi seçti.',
      diger: [
        { move: '8.c4', text: 'Merkeze anında baskı: 8...Nf6 9.Qa4 ile c6 ve a6 hedef olur. Motor: +0.81.' },
        { move: '8.Re1', text: 'e4’ü kaleyle korur. Motor: +0.66.' },
      ],
    },
    '8b': {
      text: '8...Nf6: At f6’ya gelişir ve e4’e baskıyı artırır.',
      amac: 'e4’e ikinci saldıran taşı getirmek ve şah kanadını rok için hazırlamak.',
      neden: 'Gelişimin doğal devamı (Motor: +0.65). Siyah önce şahını güvenceye almak istiyor; at f6’dan aynı zamanda şahı savunur.',
      diger: [
        { move: '8...Qc7', text: 'Vezir e5’i tutar, Beyazın e5 ilerleyişini zorlaştırır. Motor: +0.59.' },
        { move: '8...Be7', text: 'At gelmeden fil; 9.Qg4 ile g7’ye baskı gelir. Motor: +0.81.' },
      ],
    },
    '9w': {
      text: '9.Qe2: Vezir e4’ü destekler ve e-hattına bağlanır.',
      amac: 'e4’ü sağlam tutmak, b3-Bb2 için yer açmak ve ilerde vezir kanadı ile şah kanadı arasında hareket etmek.',
      neden: 'Motor 9.Re1’i (+0.66) ve 9.e5’i (+0.64) çok az farkla öne koyuyor. Qe2 ile vezir hem e4’ü korur hem de a6’ya bakar; Spasski kuruluşunu b3 ve Bb2 ile tamamlayacak.',
      diger: [
        { move: '9.Re1', text: 'Kaleyle e4’ü korur, vezir esnek kalır. Motor: +0.66.' },
        { move: '9.e5', text: 'Atı kovar ve merkezi kapatır; Fransız benzeri bir yapı. Motor: +0.64.' },
      ],
    },
    '9b': {
      text: '9...Be7: Fil gelişir ve rok hazırlanır.',
      amac: 'Şahı güvenceye almak ve f6 atını korumak.',
      neden: 'Motorun ilk tercihi (+0.55). Fil e7’de pasif görünse de sonra 16...Bf6 ile b2 filine karşı çıkacak.',
      diger: [
        { move: '9...a5', text: 'Oyundaki a-piyonu planına hemen başlar. Motor: +0.56.' },
        { move: '9...Qc7', text: 'Vezir önce; rok gecikir. Motor: +0.71.' },
      ],
    },
    '10w': {
      text: '10.b3: Kara kareli fil b2’ye gelecek.',
      amac: 'Fili a1-h8 uzun çaprazına yerleştirmek ve c2-c4 için hazırlanmak.',
      neden: 'Motor 10.c3 (+0.56) ya da 10.e5’i biraz daha iyi buluyor (+0.39 maç hamlesi). b3 bir bedel taşır: Siyahın a-piyonu için hedef bir piyon yaratır. Petrosyan bunu ...a5-a4 ile hemen kullanacak.',
      diger: [
        { move: '10.c3', text: 'Fil e3 ya da g5’e gelir, vezir kanadında hedef yaratılmaz. Motor: +0.56.' },
        { move: '10.e5', text: 'Atı d7’ye kovar ve alan kazanır. Motor: +0.54.' },
      ],
    },
    '10b': {
      text: '10...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleleri birbirine bağlamak.',
      neden: 'Motorun ilk tercihi (+0.38). Merkez henüz kapalı, Siyah bir hamle kaybetmeden gelişimini bitirir.',
      diger: [
        { move: '10...a5', text: 'Hemen vezir kanadı planı; rok bir hamle gecikir. Motor: +0.43.' },
        { move: '10...Nd7', text: 'At c5’e yönelir. Motor: +0.39.' },
      ],
    },
    '11w': {
      text: '11.Bb2: Fil uzun çapraza yerleşir.',
      amac: 'e5 ve f6 karelerini kontrol etmek, ilerde f4-f5 ile açılacak şah kanadında Siyahın kara karelerini hedeflemek.',
      neden: 'Motorun ilk tercihi (+0.45). b3’ün mantıklı devamıdır.',
      diger: [
        { move: '11.c4', text: 'Önce merkeze baskı; fil sonra. Motor: +0.31.' },
        { move: '11.Re1', text: 'Kale e-hattına. Motor: +0.22.' },
      ],
    },
    '11b': {
      text: '11...a5: Yalnız a-piyonu ilerlemeye başlar.',
      amac: '...a4 ile b3 piyonuna dayanmak ve ...axb3 ile a-hattını açmak; a8 kalesini oyuna sokmak.',
      neden: '6...bxc6 sonrası a6 piyonu yalnızdır ve yerinde kalırsa uzun vadede zaaf olabilir. Petrosyan onu hareketsiz bırakmak yerine b3 piyonuna karşı bir koçbaşı yaptı. Motor: +0.47, 11...Re8 (+0.45) ile aynı.',
      diger: [
        { move: '11...Re8', text: 'Merkezi güçlendirir, ...e5 fikrini hazırlar. Motor: +0.45.' },
        { move: '11...Bb7', text: 'Fil gelişir ama c6 piyonunun arkasında pasif kalır. Motor: +0.52.' },
      ],
    },
    '12w': {
      text: '12.f4: Beyaz f-piyonunu ilerletir ve f5 ile şah kanadında saldırı hazırlar.',
      amac: 'f5 ile e6’ya saldırıp f-hattını açmak; e5 ile f6 atını kovma seçeneğini de saklamak.',
      neden: 'Spasski’nin agresif tarzına uygun bir plan, ama motor değerlendirmeyi +0.40’tan 0.00’a düşürüyor: f4 ile g1-a7 çaprazı zayıflar (...Qb6+ ya da ...Bc5+ şahları) ve e4 desteksiz kalır. Motorun tercihi 12.Rfe1 ya da 12.c4’tür.',
      diger: [
        { move: '12.Rfe1', text: 'Merkezi güçlendiren sakin bir hamle; Beyaz hafif üstün kalır. Motor: +0.40.' },
        { move: '12.c4', text: 'd5’e baskı; 12...a4 13.Rab1 axb3 14.axb3 ile a-hattı yine açılır. Motor: +0.32.' },
      ],
    },
    '12b': {
      text: '12...g6: Siyah f5 karesini kontrol eder ve h7 üzerindeki Bd3 çaprazını kapatır.',
      amac: 'Beyazın f5 ve e5 ilerleyişlerine karşı önlem almak; h7’ye karşı olası saldırıları önlemek.',
      neden: 'Petrosyan önce savunmayı sağlamlaştırdı. Motor ise burada hemen karşı oyuna geçmeyi öneriyor: 12...a4 (−0.03) ya da 12...Qb6+ (−0.10, 15. derinlik). 12...g6 sonrası Beyaz yeniden biraz üstün (+0.55); ama g6 karşılığında koyu kareler zayıflar ve bu, b2 filini daha da değerli kılar.',
      diger: [
        { move: '12...a4', text: 'Vezir kanadı planına zaman kaybetmeden devam: 13.Kh1 a3 sonrası b2 fili kovulur. Motor: −0.03.' },
        { move: '12...Qb6+', text: 'Zayıflayan g1-a7 çaprazını kullanan şah; Beyaz 13.Kh1 ile yanıt verir. Motor: −0.10 (15. derinlik).' },
        { move: '12...Nd7', text: 'Atı yeniden konumlandırır ama 13.Qg4 ile Beyaz şah kanadına gelir. Motor: +0.17.' },
      ],
    },
    '13w': {
      text: '13.Rad1: Kale d-hattına gelir ve d5’e karşı durur.',
      amac: 'Merkezde gerilimi artırmak: exd5 cxd5 sonrası d5’e baskı ya da c4 ile d-hattının açılması.',
      neden: 'Motor 13.a4’ü öneriyor (+0.46): Siyahın a-piyonunu a5’te durdurur ve a-hattı açılmaz. Rad1 ise a1 kalesini vezir kanadından uzaklaştırır; a-hattı açıldığında Siyahın kalesine karşı duracak bir kale kalmayacak.',
      diger: [
        { move: '13.a4', text: 'Siyahın a-piyonunu bloke eder, a-hattı planını baştan önler. Motor: +0.46.' },
        { move: '13.Kh1', text: 'Şahı tehlikeli çaprazdan çeker. Motor: +0.25.' },
      ],
    },
    '13b': {
      text: '13...Nd7: At d7’ye çekilir; fil için f6 karesini boşaltır.',
      amac: '...Bf6 ile kara kareli fili b2 filine karşı çıkarmak, atı c5 ya da f6’ya yeniden getirmek.',
      neden: 'Siyah, b2 filinin uzun çapraz baskısına karşı önlem alıyor. Motor yine 13...a4’ü öneriyor (+0.20): Beyaz 13.a4 oynamadığı için a-piyonu planı hemen yürüyebilirdi. 13...Nd7 +0.55.',
      diger: [
        { move: '13...a4', text: 'a-hattını hemen açmak: 14.exd5 exd5 15.f5 axb3 ile karşı oyun. Motor: +0.20.' },
        { move: '13...Re8', text: 'Merkezi güçlendirir; 14.a4 ile Beyaz a-piyonunu durdurur. Motor: +0.51.' },
      ],
    },
    '14w': {
      text: '14.c4: Beyaz d5’e baskı yapar.',
      amac: 'cxd5 ile Siyahın merkezini parçalamak ya da Siyahı d5’i korumak için pasif kalmaya zorlamak.',
      neden: 'Merkeze baskı mantıklıdır, ama c4 iki şey kaybettirir: d4 karesi kalıcı olarak Siyaha kalır (25...d4 burada doğacak) ve b3 piyonu ...a4’e karşı yalnız kalır. Motor 14.Nf3’ü (+0.55) biraz daha iyi buluyor; 14.c4 +0.41.',
      diger: [
        { move: '14.Nf3', text: 'At e5 ve g5’e bakar, d4 karesini kontrol eder. Motor: +0.55.' },
        { move: '14.Kh1', text: 'Şahı g1-a7 çaprazından çeker; sonraki f5 için hazırlık. Motor: +0.40.' },
      ],
    },
    '14b': {
      text: '14...a4: a-piyonu b3’e dayanır; a-hattı açılmak üzere.',
      amac: '...axb3 ile a-hattını açmak ve a8 kalesini a2’ye kadar sokmak.',
      neden: 'Planın kilit hamlesi. 14...Bf6 (Motor: +0.40) de aynı değerde, ama Petrosyan önce vezir kanadında kalıcı bir karşı oyun yarattı; böylece Beyazın şah saldırısına karşı bir karşı tehdit oluştu. Motor: +0.42.',
      diger: [
        { move: '14...Bf6', text: 'Filleri hemen değişmeyi önerir; 15.Bxf6 Qxf6 16.Kh1 sonrası vezir b2’ye gidebilir. Motor: +0.40.' },
        { move: '14...Qb6+', text: 'Şah çekip 15...d4 fikrini hazırlar, ama 16.c5 ile Beyaz tempo kazanır. Motor: +0.60.' },
      ],
    },
    '15w': {
      text: '15.f5?!: Beyaz saldırıyı başlatır ve e6 piyonuna saldırır.',
      amac: 'f-hattını açmak, e6’yı kırmak ve şah kanadında Siyahın zayıflamış koyu karelerine taşlarını getirmek.',
      neden: 'Spasski vezir kanadındaki ...axb3’ten önce şah kanadında sonuç almak istedi. Motor 15.Kh1’i öneriyor (+0.34): şah g1-a7 çaprazından çekilir, ...Bc5+ ve ...Qb6+ ihtimalleri ortadan kalkar. 15.f5 sonrası değerlendirme +0.08’e düşer. Chesspedia’nın aktardığı yorumda Spasski’nin şah kanadı saldırısını verimli yürütmediği söyleniyor; Korçnoy da 64 dergisinde Spasski’nin orta oyunda yeterince güçlü oynamadığını yazmıştı.',
      diger: [
        { move: '15.Kh1', text: 'Sessiz hazırlık: 15...axb3 16.axb3 Bf6 17.e5 sonrası Beyaz hafif üstün. Motor: +0.34.' },
        { move: '15.Nf3', text: 'Atı oyuna sokar; 15...axb3 16.axb3 Qb6+ 17.Kh1. Motor: +0.18.' },
        { move: '15.cxd5', text: 'Merkezi açar; 15...exd5 sonrası b4 ve f5 fikirleri. Motor: +0.15 (15. derinlik).' },
      ],
    },
    '15b': {
      text: '15...exf5: Siyah piyonu alır; e6 piyonu f5’e gider.',
      amac: 'Beyazın fxe6 ile f-hattını tamamen açmasını önlemek ve merkezi değişimle hafifletmek.',
      neden: 'Motor 15...axb3’ü de eşdeğer buluyor (+0.07): 16.fxe6 bxa2 17.Ba1 fxe6 ile karmaşık bir oyun. Petrosyan daha kontrollü olanı seçti: exf5 sonrası e-hattı açılır ama Siyahın merkezi sağlam kalır (+0.13).',
      diger: [
        { move: '15...axb3', text: 'Karşılıklı saldırı: 16.fxe6 bxa2 17.Ba1 fxe6, karmaşık. Motor: +0.07.' },
        { move: '15...a3', text: 'Fili kovar ama 16.Ba1 exf5 17.exf5 Bc5+ sonrası Beyaz rahattır. Motor: +0.72.' },
      ],
    },
    '16w': {
      text: '16.exf5: Beyaz e-piyonuyla geri alır; e-hattı açılır ve f5 piyonu g6’ya baskı yapar.',
      amac: 'f5 piyonunu bir saldırı mızrağı olarak kullanmak: fxg6 ile Siyahın şahını açmak; e-hattını vezir ve kale için açmak.',
      neden: 'Mantıklı ve en iyi geri alış (Motor: +0.06). 16.e5? ise Siyaha d4 ve c5 karelerini verir: 16...Nc5 sonrası Beyazın f5 piyonu zayıflar (Motor: −2.5).',
      diger: [
        { move: '16.cxd5', text: 'Önce merkezi açar; karmaşık bir oyun. Motor: 0.00.' },
        { move: '16.e5', text: 'Merkezi kapatmaya çalışır ama 16...Nc5 ile Siyah d3 ve b3’e baskı yapar. Motor: −2.5.' },
      ],
    },
    '16b': {
      text: '16...Bf6: Fil f6’ya gelir ve b2 filine karşı durur.',
      amac: 'Beyazın en tehlikeli saldırı taşı olan b2 filini değişmek ve koyu kareleri savunmak.',
      neden: 'g6 sonrası zayıflayan f6, g7 ve h6 karelerini korumanın en iyi yolu, onları hedef alan fili değişmektir. Motor: −0.01. 16...Bc5+ (Motor: +0.26) şah çeker ama 17.Kh1 sonrası fil koyu kareleri savunmaz.',
      diger: [
        { move: '16...Bc5+', text: 'Şahı h1’e gönderir, ama b2 filinin çaprazı açık kalır. Motor: +0.26.' },
        { move: '16...a3', text: 'Fili kovar; 17.Ba1 Bc5+ sonrası a1 fili yine güçlü. Motor: +0.79.' },
      ],
    },
    '17w': {
      text: '17.Bxf6: Kara kareli filler değişir.',
      amac: 'Siyahın f6 karesindeki savunucusunu ortadan kaldırmak ve d7 atını f6’ya çekmek.',
      neden: 'Motor 17.Bxf6’yı ilk sırada görüyor (+0.03). 17.Ba1 ile fili saklamak (−0.10) zaman kaybettirir ve 17...Bxa1 ile değişim yine olur.',
      diger: [
        { move: '17.Nf3', text: 'Fil değişimini Siyaha bırakır; 17...axb3 ile vezir kanadı açılır. Motor: −0.04.' },
        { move: '17.Ba1', text: 'Fili korur ama 17...Bxa1 18.Rxa1 sonrası kale d-hattından ayrılır. Motor: −0.10.' },
      ],
    },
    '17b': {
      text: '17...Nxf6: At f6’dan alır ve şahı savunur.',
      amac: 'Şah kanadında atla savunma kurmak, e4 ve g4 karelerine bakmak.',
      neden: 'At f6’da hem h7’yi hem de d5’i korur. 17...Qxf6 (Motor: +0.50) veziri f-hattında açık bırakırdı: 18.fxg6 Qd4+ 19.Kh1 sonrası Beyaz baskıyı sürdürür. Motor: +0.05.',
      diger: [
        { move: '17...Qxf6', text: 'Vezir aktif olur ama f-hattında Beyazın kalesine karşı kalır. Motor: +0.50.' },
        { move: '17...Qb6+', text: 'Ara şah; 18.Qf2 Qxf2+ 19.Rxf2 sonrası Siyahın piyon yapısı daha zayıf. Motor: +0.42.' },
      ],
    },
    '18w': {
      text: '18.Qf2: Vezir f-hattına geçer ve g1-a7 çaprazını kapatır.',
      amac: 'f6 atına f-hattında baskı yapmak ve Siyahın ...Qb6+ ya da ...Bc5+ şahlarını önlemek.',
      neden: 'Vezir hem saldırıya (f6) hem savunmaya (g1-a7 çaprazı) hizmet eder. Motor 18.fxg6 (+0.05), 18.Qf2 (+0.04) ve 18.Qe3’ü (+0.04) aynı görüyor.',
      diger: [
        { move: '18.fxg6', text: 'Hemen değişim; 18...hxg6 19.h3 Qb6+ 20.Qf2. Motor: +0.05.' },
        { move: '18.Qe3', text: 'Vezir e-hattında; 18...Ng4 19.Qg3 ile benzer oyun. Motor: +0.04.' },
      ],
    },
    '18b': {
      text: '18...axb3: Siyah b3’te değişir; a-hattı açılır.',
      amac: 'a-hattını açıp kaleyi a2’ye sokmak; Beyazın vezir kanadı piyonlarını dağıtmak.',
      neden: '11...a5 ile başlayan planın sonucu. Motor 18...Ng4’ü biraz daha kesin buluyor (+0.01): at vezire saldırıp f5’i alır. Petrosyan önce vezir kanadındaki kazancını somutlaştırdı (+0.12).',
      diger: [
        { move: '18...Ng4', text: 'Vezire saldırır: 19.Qg3 Qb6+ 20.Kh1 Bxf5 ile Siyah piyonu alır. Motor: +0.01.' },
        { move: '18...Qe7', text: 'Önce vezir; a-hattı sonra açılır. Motor: +0.39.' },
      ],
    },
    '19w': {
      text: '19.axb3: Beyaz geri alır; a-hattı tamamen açılır.',
      amac: 'Piyon yapısını korumak ve c4’ü desteklemek.',
      neden: '19.fxg6? bxa2 20.gxh7+ Kh8 sonrası Siyahın a2 piyonu çok güçlü (Motor: −0.34). 19.Nxb3 (−0.03) atı d2’den çıkarır ama c4 desteksiz kalır. Motor: +0.06.',
      diger: [
        { move: '19.Nxb3', text: 'At aktifleşir ama c4 zayıflar ve a-hattında b2 karesi açık kalır. Motor: −0.03.' },
        { move: '19.fxg6', text: 'Ara hamle denemesi; 19...bxa2 sonrası a-piyonu terfiye çok yakın. Motor: −0.34.' },
      ],
    },
    '19b': {
      text: '19...Ra2: Kale ikinci yataya girer ve d2 atını bağlar.',
      amac: 'Beyazın ikinci yatayını ele geçirmek; d2 atını ve ilerde g2 ile h2’yi hedef almak.',
      neden: 'Kale açık hattın sonuna, rakibin kampına yerleşir; Beyazın a1’de karşı koyacak kalesi yok (13.Rad1’in uzun vadeli bedeli). Motor 19...Ng4’ü az farkla tercih ediyor (+0.10, maç hamlesi +0.47), ama Ra2 oyunun sonuna kadar etkili kaldı: 31...Rxd2 ile atı aldı, sonra c2’den c-piyonunu durdurdu.',
      diger: [
        { move: '19...Ng4', text: 'Vezire saldırır: 20.Qg3 Qb6+ 21.Kh1 Bxf5. Motor: +0.10.' },
        { move: '19...Nh5', text: 'At g3 ve f4’e gider; 20.b4 Ra2. Motor: +0.33.' },
      ],
    },
    '20w': {
      text: '20.fxg6: Beyaz g6’da değişir ve h7’yi tehdit eder.',
      amac: 'Siyahın şah kanadını açmak; gxh7+ ya da gxf7+ ile Siyahı zorlamak.',
      neden: 'Motor 20.Bb1’i (+0.46) biraz daha iyi buluyor: fil a2 kalesini kovar. 20.fxg6 da sağlam (+0.37): Siyah f-piyonuyla almak zorunda kalır ve f-hattı açılır.',
      diger: [
        { move: '20.Bb1', text: 'a2 kalesini kovar: 20...Ra8 21.Nf3 Rb8 22.Ne5. Motor: +0.46.' },
        { move: '20.Qf4', text: 'Vezir merkeze; 20...Qe7 21.Bb1 Ra7. Motor: +0.26.' },
      ],
    },
    '20b': {
      text: '20...fxg6: Tek iyi hamle: f-piyonuyla alınır.',
      amac: 'f-hattını kapatmak ve f8 kalesiyle f6 atını korumak.',
      neden: '20...hxg6? sonrası f7 piyonu Rf8’in önünü kapatır ve 21.Qxf6 atı kazanır (Motor: +3.75). 20...Bg4? de kötü: 21.Bb1 Bxd1 22.Bxa2 ile Beyaz değişim kazanır (+3.16). fxg6 ile f8 kalesi f6 atını korur (+0.19).',
      diger: [
        { move: '20...hxg6', text: 'f7 piyonu kaleyi kapatır, f6 atı yalnız kalır: 21.Qxf6 Bg4 22.Qxd8. Motor: +3.75.' },
        { move: '20...Bg4', text: 'Kaleye saldırır ama 21.Bb1 Bxd1 22.Bxa2 sonrası Beyaz üstün. Motor: +3.16.' },
      ],
    },
    '21w': {
      text: '21.h3: g4 karesini kontrol eder ve şaha kaçış karesi açar.',
      amac: 'Siyahın ...Ng4 ve ...Bg4 hamlelerini önlemek; birinci yatayda mat tehlikelerini azaltmak.',
      neden: 'Siyahın kalesi ikinci yatayda, at ve fil g4’e gelmek istiyor. Motor 21.h3 ve 21.Qd4’ü aynı görüyor (+0.21).',
      diger: [
        { move: '21.Qd4', text: 'Vezir merkeze; 21...Be6 22.Bb1 Ra8. Motor: +0.21.' },
        { move: '21.Bb1', text: 'Kaleyi kovar; 21...Ra8 22.Qd4. Motor: +0.17.' },
      ],
    },
    '21b': {
      text: '21...Qe7: Vezir e-hattına gelir ve c5 karesine bakar.',
      amac: 'e-hattını kontrol etmek ve ...c5 ilerleyişini desteklemek.',
      neden: 'Motor 21...Nh5 (+0.21) ve 21...Qe7’yi (+0.24) eşdeğer buluyor. Vezir e7’den hem e3 hem de a7-g1 çaprazına bakabilir.',
      diger: [
        { move: '21...Nh5', text: 'At f4’e gelmek ister; 22.Qd4 Be6 23.Rxf8+. Motor: +0.21.' },
        { move: '21...Nd7', text: 'At yeniden konumlanır ama f-hattı zayıflar. Motor: +0.45.' },
      ],
    },
    '22w': {
      text: '22.Qd4: Vezir merkeze yerleşir ve f6 atına baskı yapar.',
      amac: 'f6 atını ve a7-g1 çaprazını kontrol etmek; Siyahın ...c5 hazırlığını zorlaştırmak.',
      neden: 'Merkezdeki vezir güçlü görünür ama ...c5 ile tempoyla kovalanabilir. Motor 22.Bb1’i (+0.17) az farkla tercih ediyor; Qd4 +0.10.',
      diger: [
        { move: '22.Bb1', text: 'a2 kalesini kovar; 22...Ra8 23.Nf3 Nh5. Motor: +0.17.' },
        { move: '22.Qb6', text: 'c6 piyonuna saldırır; 22...Qa7 23.Qxa7 Rxa7. Motor: +0.12.' },
      ],
    },
    '22b': {
      text: '22...c5: Vezir kovalanır ve ...d4 ilerleyişi hazırlanır.',
      amac: 'İkiye katlanmış c-piyonunu canlandırıp d4 karesini kontrol etmek; c8 filine b7 için yol açmak.',
      neden: 'Motorun açık ara ilk tercihi (+0.13; 22...Qa7 +0.50, 22...Qg7 +0.60). Statik zaaf sayılan c6 piyonu, c5 ile d-piyonunun destekçisine dönüşür.',
      diger: [
        { move: '22...Qa7', text: 'Vezir değişimini önerir; 23.c5 ile Beyaz d6 karesini alır. Motor: +0.50.' },
        { move: '22...Qg7', text: 'Vezirleri değişmeyi önerir ama 23.Qe5 sonrası Beyaz daha aktif. Motor: +0.60.' },
      ],
    },
    '23w': {
      text: '23.Qf4: Vezir f4’e döner ve f-hattında baskıyı sürdürür.',
      amac: 'f6 atını hedef almak; Qg5 ve Qh6 ile şah kanadına gelmek.',
      neden: 'Motor 23.Qf2 (+0.03) ve 23.Qf4’ü (0.00) eşdeğer görüyor. 23.Qh4?! ise 23...Qe3+ 24.Kh1 g5 ile Siyah vezirleri değişir (−0.24).',
      diger: [
        { move: '23.Qf2', text: 'Vezir f2’ye; 23...Bb7 24.Rde1 Qd6. Motor: +0.03.' },
        { move: '23.Qh4', text: 'h7’ye bakar ama 23...Qe3+ ile Siyah vezir değişimine zorlar. Motor: −0.24.' },
      ],
    },
    '23b': {
      text: '23...Bb7: Fil b7’ye gelir; d5 ilerlediğinde uzun çapraz açılacak.',
      amac: 'Son gelişmemiş taşı oyuna sokmak ve ...d4 sonrası a8-h1 çaprazında g2’ye baskı kurmak.',
      neden: 'Motor 23...d4!’ü hemen önermekte (0.00): 24.Qg5 Qe3+ 25.Qxe3 dxe3 sonrası Siyahın e3 piyonu çok güçlü. 23...Bb7 bir tempo verir ve Beyaza 24.Qg5 ile baskı şansı tanır (+0.50).',
      diger: [
        { move: '23...d4', text: 'Hemen geçer piyon: 24.Qg5 Qe3+ 25.Qxe3 dxe3 ve e3 piyonu Beyazı bağlar. Motor: 0.00.' },
        { move: '23...Nd7', text: 'Atı merkeze getirir; 24.Qg3 Qe5 25.Qxe5 Nxe5. Motor: +0.23.' },
      ],
    },
    '24w': {
      text: '24.Rde1?: Kale e-hattına geçer ve Siyahın e7 vezirine karşı durur.',
      amac: 'e-hattını ele geçirip Siyahın vezirini kovmak ve Re6 gibi girişler hazırlamak.',
      neden: 'Doğal görünen hamle d2 atının tek koruyucusunu (d1 kalesini) uzaklaştırır. Siyah 24...Nh5! ile vezire saldırabilir; vezir f8’de değişime girmek zorunda kalır ve 25.Qxf8+ Qxf8 26.Rxf8+ Kxf8 sonrası a2 kalesi korumasız d2 atına saldırır (27.Re2 d4, Motor: −0.96). Doğrusu 24.Qg5’ti (+0.35): f6 atına baskı yapar ve Siyahın ...Nh5 kaynaklarını sınırlar.',
      diger: [
        { move: '24.Qg5', text: 'f6 atına baskı: 24...Kg7 25.Nf3 dxc4 26.Bxc4. Motor: +0.35.' },
        { move: '24.Rfe1', text: 'Öteki kale e-hattına, f1 kalesi bağlı kalmaz. Motor: +0.10.' },
        { move: '24.cxd5', text: 'Merkezi açar: 24...Nxd5 25.Qe4 Re8. Motor: 0.00.' },
      ],
    },
    '24b': {
      text: '24...Qg7: Vezir g7’ye çekilir, uzun çaprazı ve şahı korur.',
      amac: 'Şah kanadını sağlamlaştırmak ve vezirleri değişmeye hazır olmak.',
      neden: 'Sağlam bir hamle, ama motor 24...Nh5!’i gösteriyor (−0.96): vezir kaçamaz, 25.Qxf8+ Qxf8 26.Rxf8+ Kxf8 sonrası a2 kalesi d2 atına saldırır ve Siyahın piyonları daha iyidir. Qg7 sonrası Beyaz yeniden üstün (+0.69).',
      diger: [
        { move: '24...Nh5', text: 'Vezire saldırır: 25.Qxf8+ Qxf8 26.Rxf8+ Kxf8 27.Re2 d4, Siyah daha iyi. Motor: −0.96.' },
        { move: '24...Qd8', text: 'Vezir geri çekilir; 25.Qh6 Nh5 26.cxd5. Motor: +0.20.' },
        { move: '24...Ne4', text: 'Atı merkeze getirir ama 25.Qxf8+ Qxf8 26.Rxf8+ Kxf8 27.Nxe4 sonrası Beyaz rahat. Motor: +0.30.' },
      ],
    },
    '25w': {
      text: '25.Qe3: Vezir e3’e çekilir ve e-hattında kalır.',
      amac: 'Vezir değişimini önlemek ve e-hattında baskıyı korumak.',
      neden: 'Bu, Beyazın kaçırdığı fırsattı: 25.Qg5! (Motor: +0.77) f6 atını h6-g5 baskısıyla bağlar ve cxd5 tehdidi yaratır. 25.Qe3 ise ...d4’e tempo verir (−0.42). Chesspedia’nın aktardığına göre Spasski maçtan sonra “önce mükemmel bir pozisyonum vardı, sonra avantajım azaldı ve ardından tamamen kayboldu” demişti; bu söz büyük olasılıkla bu döneme işaret eder.',
      diger: [
        { move: '25.Qg5', text: 'Bağlı f6 atına baskı: 25...h6 26.Qe3 Re8 27.Qf4 ile Beyaz hafif üstün. Motor: +0.77.' },
        { move: '25.cxd5', text: 'Merkezi açar: 25...Nxd5 26.Qd6. Motor: +0.03.' },
      ],
    },
    '25b': {
      text: '25...d4!: d-piyonu vezire tempoyla ilerler; c5 ile korunan bir geçer piyon doğar.',
      amac: 'Geçer piyon yaratmak, b7 filinin a8-h1 çaprazını açmak ve Beyazın vezirini kovmak.',
      neden: 'Motor ...d4’ü açık farkla en iyi buluyor (−0.21; 25...Qd7 +0.52, 25...Nd7 +0.81). Artık e4 ve d3 kareleri Siyahın kontrolünde, b7 fili g2’ye bakıyor ve Beyazın c4 piyonu d5’e baskı yapamaz hale geldi.',
      diger: [
        { move: '25...Qd7', text: 'Merkezi korur ama 26.Qg5 sonrası Beyaz baskıyı sürdürür. Motor: +0.52.' },
        { move: '25...Nd7', text: 'Atı geri çeker; 26.Rxf8+ Nxf8 27.cxd5 Bxd5 sonrası Beyaz üstün. Motor: +0.81.' },
      ],
    },
    '26w': {
      text: '26.Qe6+: Vezir şah çeker ve e6’ya yerleşir.',
      amac: 'Siyahı vezir değişimine ya da şahını h8’e çekmeye zorlamak; e6’dan f6 atına ve c8’e bakmak.',
      neden: 'Motor 26.Qf4’ü az farkla tercih ediyor (−0.06). Qe6+ de makul (−0.24): şah tek bir iyi cevaba zorlanır.',
      diger: [
        { move: '26.Qf4', text: 'Vezir yeniden f4’e; 26...Ba8 27.Re2 Nh5 28.Qg4. Motor: −0.06.' },
        { move: '26.Qg5', text: 'f6’ya baskı: 26...h6 27.Qf4 Nd7. Motor: −0.39.' },
      ],
    },
    '26b': {
      text: '26...Qf7: Tek iyi hamle: vezir araya girer ve vezir değişimini önerir.',
      amac: 'Şahı korumak ve vezir değişimiyle Beyazın saldırı umutlarını bitirmek.',
      neden: '26...Kh8? 27.Re2 sonrası f6 atı bağlı kalır ve Beyaz üstündür (Motor: +1.85). 26...Rf7? de 27.Ne4 ile bağlı kaleyi sıkıştırır (+1.07). Qf7 −0.21.',
      diger: [
        { move: '26...Kh8', text: 'Şah köşeye; 27.Re2 ile f6 atı ve birinci yatay zorda. Motor: +1.85.' },
        { move: '26...Rf7', text: 'Kale araya girer ama 27.Ne4 Bxe4 28.Bxe4 sonrası f6 atı bağlıdır. Motor: +1.07.' },
      ],
    },
    '27w': {
      text: '27.Qe2: Beyaz vezir değişiminden kaçar ve vezirini e-hattında tutar.',
      amac: 'Ağır taşları tahtada tutarak şah saldırısı ihtimalini korumak.',
      neden: 'Vezir değişimi Siyahın geçer piyonuna ve aktif kalesine yarar; Spasski bunu istemedi. Motor yine de değişimleri biraz daha iyi buluyor: 27.Rxf6 Qxe6 28.Rxf8+ Kxf8 29.Rxe6 (−0.20) ya da 27.Qxf7+ (−0.25). 27.Qe2 −0.41.',
      diger: [
        { move: '27.Rxf6', text: 'Değişim zinciri: 27...Qxe6 28.Rxf8+ Kxf8 29.Rxe6 ile kale oyun sonu. Motor: −0.20.' },
        { move: '27.Qxf7+', text: 'Vezirler değişir: 27...Rxf7 28.Ne4 Nh5. Motor: −0.25.' },
      ],
    },
    '27b': {
      text: '27...Re8: Kale e-hattına gelir ve e1 kalesine karşı durur.',
      amac: 'e-hattında kaleleri değişmek ve Beyazın ağır taşlarını azaltmak.',
      neden: 'Motor 27...Qc7’yi biraz daha iyi buluyor (−0.75): vezir c7’den g3 ve h2’ye bakar. Re8 de mantıklı (−0.59): her değişim Siyahın geçer piyonunu daha değerli kılar.',
      diger: [
        { move: '27...Qc7', text: 'Vezir b1-h7 çaprazına; 28.Bb1 Rb2. Motor: −0.75.' },
        { move: '27...Qd7', text: 'Vezir merkezde ama 28.b4 cxb4 29.c5 ile Beyaz karşı oyun bulur. Motor: −0.26.' },
      ],
    },
    '28w': {
      text: '28.Qf2: Vezir f2’ye döner ve f-hattına bağlanır.',
      amac: 'f6 atına ve f-hattına baskıyı sürdürmek; Siyahın ...Rxe2 ile vezir değişmesini önlemek.',
      neden: 'Motor bunu en iyi buluyor (−0.28). 28.Qxe8+ Nxe8 29.Rxf7 Kxf7 (−0.31) de mümkündü.',
      diger: [
        { move: '28.Qxe8+', text: 'Ağır taşlar değişir: 28...Nxe8 29.Rxf7 Kxf7 30.Re2. Motor: −0.31.' },
        { move: '28.Qd1', text: 'Vezir d1’e; 28...Rxe1 29.Qxe1 Qe8. Motor: −0.36.' },
      ],
    },
    '28b': {
      text: '28...Rxe1: Kaleler değişir.',
      amac: 'Ağır taşları azaltıp oyun sonuna yaklaşmak.',
      neden: 'Motor 28...Rxe1’i ilk sırada görüyor (−0.21). Değişim, Beyazın e-hattındaki tek aktif kalesini ortadan kaldırır.',
      diger: [
        { move: '28...Rf8', text: 'Kale f-hattına döner; 29.Re2 Nh5. Motor: −0.11.' },
        { move: '28...Re6', text: 'e-hattında kalır; 29.Rxe6 Qxe6. Motor: −0.04.' },
      ],
    },
    '29w': {
      text: '29.Qxe1: Beyaz vezirle geri alır.',
      amac: 'f1 kalesini f-hattında bırakmak ve f6 atına baskıyı korumak.',
      neden: '29.Rxe1? 29...Ng4 ile vezire saldırır: 30.Qxf7+ Kxf7 sonrası Siyahın atı e3’e girer (Motor: −1.25). 29.Bxg6?? ise 29...Rxf1+ ile taş kaybeder (−4.96). Qxe1 tek iyi hamle (−0.15).',
      diger: [
        { move: '29.Rxe1', text: '29...Ng4 30.Qxf7+ Kxf7 31.Re2 Ne3 ve Siyahın atı güçlü. Motor: −1.25.' },
      ],
    },
    '29b': {
      text: '29...Qe8: Siyah vezir değişimi önerir.',
      amac: 'Vezirleri değişip geçer piyonun ve aktif kalenin belirleyici olduğu bir oyun sonuna geçmek.',
      neden: 'Motor bunu en iyi buluyor (−0.14). Vezirsiz oyunda Beyazın şah saldırısı biter; Siyahın a2 kalesi, b7 fili ve d4 geçer piyonu ise etkisini korur. Spectator köşesinin ifadesiyle Petrosyan “Spasski’nin saldırısını geri püskürtüp oyun sonunu kazandı”.',
      diger: [
        { move: '29...Kg7', text: 'Şahı korur, vezirler tahtada kalır; 30.Rf2 Qc7. Motor: 0.00.' },
        { move: '29...Ra6', text: 'Kale geri döner; 30.b4 Ra3 ile oyun karmaşık. Motor: +0.21.' },
      ],
    },
    '30w': {
      text: '30.Qxe8+: Vezirler değişir.',
      amac: 'Beyaz, kötüye gidecek alternatiflerden kaçınarak vezir değişimini kabul eder.',
      neden: 'Diğer hamleler daha kötü: 30.Nf3 Qxe1 31.Nxe1 sonrası at pasif kalır (Motor: −1.01), 30.Qf2 ise 30...Qe3 ile Siyahın vezirini e3’e sokar (−2.08). Qxe8+ −0.09.',
      diger: [
        { move: '30.Nf3', text: 'Vezirleri Siyahın almasına izin verir: 30...Qxe1 31.Nxe1 ve at e1’de pasif. Motor: −1.01.' },
        { move: '30.Qf2', text: 'Değişimden kaçar ama 30...Qe3 ile Siyahın veziri merkeze girer. Motor: −2.08.' },
      ],
    },
    '30b': {
      text: '30...Nxe8: Tek hamle: at geri alır.',
      amac: 'Materyali geri almak; at e8’den d6 ve c7 üzerinden merkeze dönecek.',
      neden: 'Zorunlu: 30...Kg7?? 31.Qe7+ sonrası Beyaz mat eder (Motor: mat). At e8’de pasif görünse de 32...Nd6 ile hızla aktifleşecek.',
    },
    '31w': {
      text: '31.Be4: Fil b7 filini değişmeye gider, ama d2 atı korumasız kalır.',
      amac: 'Siyahın uzun çaprazdaki güçlü filini değişmek.',
      neden: 'Be4 sonrası 31...Rxd2 32.Bxb7 ile taşlar geri kazanılır; materyal eşit kalır ama Siyahın kalesi aktiftir. Motor 31.Rf2’yi daha iyi buluyor (−0.13): önce d2 atını korur ve ikinci yatayı savunur. 31.Be4 −0.60.',
      diger: [
        { move: '31.Rf2', text: 'İkinci yatayı korur: 31...Nc7 32.Bb1 Rb2 33.Kf1. Motor: −0.13.' },
        { move: '31.Ne4', text: 'At merkeze; 31...Bxe4 32.Bxe4 Nd6 33.Bd5+. Motor: −0.30.' },
      ],
    },
    '31b': {
      text: '31...Rxd2: Kale d2 atını alır.',
      amac: 'Materyal dengesini korurken kaleyi ikinci yatayda aktif tutmak.',
      neden: 'Motorun ilk tercihi (−0.56). 31...Kg7 (−0.30) ya da 31...Nd6 (−0.28) önce başka hamle yapar; Rxd2 hemen atı alıp fil değişimini Beyaza bırakır.',
      diger: [
        { move: '31...Nd6', text: 'Önce at; 32.Bxb7 Rxd2 33.Bd5+ Kg7. Motor: −0.28.' },
        { move: '31...Kg7', text: 'Şah önce; 32.Bxb7 Rxd2 33.Bf3. Motor: −0.30.' },
      ],
    },
    '32w': {
      text: '32.Bxb7: Tek hamle: fil b7 filini geri alır.',
      amac: 'Materyali eşitlemek.',
      neden: 'Zorunlu: 32.Bd5+? Bxd5 33.cxd5 sonrası Beyaz bir taş eksik kalır (Motor: −4.80). Bxb7 sonrası Beyazın kale+fil’ine karşı Siyahın kale+at’ı var, piyonlar 4’e 4 (−0.58).',
    },
    '32b': {
      text: '32...Nd6: At d6’ya gelir; c4, b5, e4 ve f5 karelerine bakar.',
      amac: 'Atı merkeze getirip c4 piyonuna baskı yapmak ve d4 piyonunu desteklemek.',
      neden: 'Motor 32...Rb2’yi az farkla tercih ediyor (−0.39): kale b3’e saldırır. Nd6 de doğal bir hamle (−0.21): at e8’deki pasif yerinden en iyi kareye geçer.',
      diger: [
        { move: '32...Rb2', text: 'b3 piyonuna saldırır: 33.Bd5+ Kg7 34.Rf7+ Kh6. Motor: −0.39.' },
        { move: '32...Kg7', text: 'Şah önce: 33.Bf3 Nc7 34.Rb1 Kf6. Motor: −0.18.' },
      ],
    },
    '33w': {
      text: '33.Bd5+: Fil şah çeker ve d5’e yerleşir.',
      amac: 'Fili merkezde, d4 piyonunun önündeki güçlü kareye yerleştirmek ve Siyahın şahını geriletmek.',
      neden: 'Motorun ilk tercihi (−0.23). d5’teki fil hem c4’ü korur hem de d-piyonunu bloke eder.',
      diger: [
        { move: '33.Ba8', text: 'Fil köşeye; 33...Kg7 34.b4 cxb4 35.c5. Motor: −0.77.' },
        { move: '33.Bf3', text: 'Fil d1’e bakar ama 33...Rb2 ile b3 zayıflar. Motor: −0.90.' },
      ],
    },
    '33b': {
      text: '33...Kg7: Şah g7’ye çekilir.',
      amac: 'Şahı birinci yataydan çıkarıp oyun sonu için merkeze yaklaştırmak.',
      neden: '33...Nf7?? 34.Rxf7 ile Beyaz taş kazanır (Motor: +4.78). 33...Kh8 (0.00) şahı köşeye gömer. Kg7 −0.26.',
      diger: [
        { move: '33...Kh8', text: 'Şah köşede kalır, oyun sonunda pasif. Motor: 0.00.' },
        { move: '33...Nf7', text: 'Araya girer ama 34.Rxf7 taşı alır. Motor: +4.78.' },
      ],
    },
    '34w': {
      text: '34.b4: Beyaz c5 piyonunu değiştirip kendine geçer piyon yaratmaya çalışır.',
      amac: 'cxb4 sonrası c5 ile c-piyonunu geçer piyon yapmak ve atı kovmak.',
      neden: 'Pasif savunma yerine karşı oyun aramak. Motor 34.g4’ü biraz daha iyi buluyor (−0.19), ama 34.b4 de makul (−0.34): Beyazın c-piyonu c6’ya kadar yürüyecek.',
      diger: [
        { move: '34.g4', text: 'Şah kanadında alan; 34...Re2 35.Rf3 h5. Motor: −0.19.' },
        { move: '34.Rb1', text: 'Kale b-hattına; 34...Kf6 35.b4. Motor: −0.75.' },
      ],
    },
    '34b': {
      text: '34...cxb4: Siyah b4’te alır; artık iki geçer piyonu var.',
      amac: 'b4 ve d4’te iki geçer piyona sahip olmak.',
      neden: 'Motor 34...cxb4’ü ilk sırada görüyor (−0.38). 34...Nxc4? 35.Bxc4 sonrası Siyah taş kaybeder (+2.76).',
      diger: [
        { move: '34...Rc2', text: 'c-piyonunu hedef alır: 35.bxc5 Nxc4. Motor: 0.00.' },
        { move: '34...Nxc4', text: 'Piyonu alır ama 35.Bxc4 ile Beyaz taş kazanır. Motor: +2.76.' },
      ],
    },
    '35w': {
      text: '35.c5: Beyazın c-piyonu ilerler ve d6 atına saldırır.',
      amac: 'Geçer piyonu c6’ya kadar sürmek ve atı merkezden uzaklaştırmak.',
      neden: 'Motorun açık ara ilk tercihi (−0.50). 35.Rb1 (−1.03) b4’ü almaya çalışır ama Siyahın d-piyonu ilerler.',
      diger: [
        { move: '35.Rb1', text: 'b4’e saldırır: 35...Rc2 36.Rxb4 d3. Motor: −1.03.' },
        { move: '35.Re1', text: 'Kale e-hattına; 35...Rc2 sonrası c-piyonu düşer. Motor: −2.20.' },
      ],
    },
    '35b': {
      text: '35...Nf5: At f5’e geçer; d4 piyonunu destekler ve e3, g3 karelerine bakar.',
      amac: 'Atı aktif tutmak ve d-piyonunun ilerleyişini desteklemek.',
      neden: 'Motorun ilk tercihi (−0.43). 35...Ne8 ve 35...Nb5 savunmacı kalır (0.00).',
      diger: [
        { move: '35...Ne8', text: 'At geri; 36.Rf7+ Kh6 37.Rb7 Rc2. Motor: −0.01.' },
        { move: '35...Nb5', text: 'At c-piyonunu durdurur; 36.Rf7+ Kh6 37.Rb7 Nc3. Motor: 0.00.' },
      ],
    },
    '36w': {
      text: '36.c6: Piyon c6’ya ilerler ve c7 ile terfiyi tehdit eder.',
      amac: 'Siyahın taşlarını c-piyonunu durdurmaya bağlamak.',
      neden: 'Motorun ilk tercihi (−0.65). Piyon ilerledikçe Siyahın kalesi ve atı savunmaya döner.',
      diger: [
        { move: '36.Rb1', text: 'b4’ü hedefler: 36...Kf6 37.Rxb4 Ke5. Motor: −0.88.' },
        { move: '36.Rc1', text: 'c-piyonunu destekler ama 36...d3 ile d-piyonu hızlanır. Motor: −1.99.' },
      ],
    },
    '36b': {
      text: '36...Rc2: Kale c2’ye gelir ve c-piyonunu arkadan durdurur.',
      amac: 'Kaleyi geçer piyonun arkasına koymak; ikinci yatayda kalmak.',
      neden: 'Kural: kale geçer piyonun arkasında en güçlüdür. Motor 36...Rc2’yi ilk sırada görüyor (−0.61; 36...d3 −0.55).',
      diger: [
        { move: '36...d3', text: 'd-piyonu ilerler: 37.Rb1 Rc2 38.Be4. Motor: −0.55.' },
        { move: '36...Rb2', text: 'b-piyonunu destekler ama 37.Rc1 d3 38.c7 ile c-piyonu tehlikeli. Motor: −0.21.' },
      ],
    },
    '37w': {
      text: '37.g4: At kovalanır.',
      amac: 'f5 atını merkezden uzaklaştırmak ve şah kanadında alan kazanmak.',
      neden: 'Motor 37.Be4’ü öneriyor (−0.28): fil f5 atına saldırır ve d3’ü kontrol eder. g4 ile şah kanadında piyonlar zayıflar ve h3, g4 sonra hedef olur (−0.97).',
      diger: [
        { move: '37.Be4', text: 'Fil ata saldırır: 37...Rc5 38.Rb1 Kf6 39.Rxb4. Motor: −0.28.' },
        { move: '37.Rb1', text: 'b4’ü hedefler: 37...d3 38.Be4 Rc3. Motor: −0.52.' },
      ],
    },
    '37b': {
      text: '37...Nd6: At d6’ya döner ve c-piyonunun önündeki c8 ve b7 karelerini tutar.',
      amac: 'c-piyonunu durdurmak ve b5, c4, e4 karelerini kontrol etmek.',
      neden: 'Motorun ilk tercihi (−1.43). 37...Nh6? ise 38.Rd1 b3 39.Bxb3 ile b-piyonu düşer (−0.02).',
      diger: [
        { move: '37...Ne3', text: 'At aktif: 38.Rf7+ Kh6 39.Be4 b3. Motor: −1.02.' },
        { move: '37...Nh6', text: 'At kenara; 38.Rd1 b3 39.Bxb3 Rxc6. Motor: −0.02.' },
      ],
    },
    '38w': {
      text: '38.Rf4: Kale d4 piyonuna saldırır.',
      amac: 'd-piyonunu durdurmak ya da almak.',
      neden: 'Motor 38.Rd1’i öneriyor (−1.02): kale d-piyonunun önüne geçer. Rf4 sonrası 38...d3 ile piyon ilerler ve Beyaz zorlanır (−1.42).',
      diger: [
        { move: '38.Rd1', text: 'Kale piyonun önüne: 38...Nb5 39.Rf1 d3 40.g5. Motor: −1.02.' },
        { move: '38.Rb1', text: 'b4’e saldırır ama 38...Kf6 39.Rxb4 Ke5 sonrası d-piyonu tehlikeli. Motor: −2.43.' },
      ],
    },
    '38b': {
      text: '38...d3: d-piyonu ilerler ve d2’yi tehdit eder.',
      amac: 'Beyazın kalesini ve filini d-piyonunu durdurmaya bağlamak.',
      neden: 'Motorun ilk tercihi (−2.07). 38...Rc5 ya da 38...Rc1+ sonrası Beyaz rahatlar (−0.1).',
      diger: [
        { move: '38...Rc5', text: 'd5 filine saldırır ama 39.Rxd4 Nb5 40.Rd2 sonrası Beyaz dengeler. Motor: −0.09.' },
        { move: '38...Rc1+', text: 'Şah çeker: 39.Kf2 Rc2+ 40.Kf3. Motor: −0.11.' },
      ],
    },
    '39w': {
      text: '39.Rd4: Kale d-hattına gelir ve d3 piyonunu durdurur.',
      amac: 'd-piyonunu engellemek ve d6 atına baskı yapmak.',
      neden: 'Motor 39.Rd4 ve 39.Bb3’ü aynı görüyor (−2.48). 39.Rxb4? d2 40.Bf3 Rc1+ ile d-piyonu terfiye yaklaşır (−2.81).',
      diger: [
        { move: '39.Bb3', text: 'Fil d1’e bakar: 39...Rc3 40.Rd4 Rxb3. Motor: −2.49.' },
        { move: '39.Rxb4', text: 'b-piyonunu alır ama 39...d2 40.Bf3 Rc1+ ile d-piyonu terfi eder. Motor: −2.81.' },
      ],
    },
    '39b': {
      text: '39...d2?: Piyon d2’ye ilerler.',
      amac: 'd1’de terfiyi tehdit edip Beyazın fili ve kalesini bağlamak.',
      neden: 'Motor burada 39...Rc3! ile kazanç yolunu gösteriyor (−2.27): 40.Bb3 Rxb3 41.Rxd6 Rc3 ile Siyah fil kazanır. 39...d2 sonrası 40.Bb3 Rxc6 41.Rxd2 ile Beyaz d-piyonunu alır ve fark azalır (−0.45).',
      diger: [
        { move: '39...Rc3', text: 'Fili b3’e çekip almak: 40.Bb3 Rxb3 41.Rxd6 Rc3 42.Kf2 b3 ve b-piyonu kazanır. Motor: −2.27.' },
        { move: '39...Kf6', text: 'Şah önce: 40.Rxd3 Ke5 41.Bg8 Rxc6. Motor: −0.18.' },
      ],
    },
    '40w': {
      text: '40.Bb3: Tek iyi hamle: fil b3’e çekilir ve d1 karesini kontrol eder.',
      amac: 'd-piyonunun terfisini önlemek ve c2 kalesine saldırmak.',
      neden: 'Zorunlu: 40.Bf3? b3 41.Bd1 Rc1 sonrası Siyahın piyonları kazanır (Motor: −4.16), 40.Kf1? Nb5 41.Rd3 Rc1+ de kayıp (−5.74). Bb3 −0.36.',
      diger: [
        { move: '40.Bf3', text: 'd1’e bakar ama 40...b3 41.Bd1 Rc1 ile b-piyonu ilerler. Motor: −4.16.' },
      ],
    },
    '40b': {
      text: '40...Rxc6: Kale c6 piyonunu alır.',
      amac: 'Beyazın tek geçer piyonunu ortadan kaldırmak.',
      neden: 'Motor 40...Rxc6 (−0.35) ve 40...Rc1+’yı (−0.31) eşit görüyor. d-piyonu düşecek ama Siyahın b-piyonu ve bir piyon fazlası kalacak.',
      diger: [
        { move: '40...Rc1+', text: 'Önce şah: 41.Kf2 Rxc6 42.Rxb4. Motor: −0.31.' },
        { move: '40...d1=Q+', text: 'Piyonu vezire çevirip verir: 41.Rxd1 Rxc6 42.Rd4. Motor: −0.15.' },
      ],
    },
    '41w': {
      text: '41.Rxd2: Beyaz d2 piyonunu alır.',
      amac: 'Siyahın en tehlikeli geçer piyonunu yok etmek.',
      neden: 'Tek iyi hamle (Motor: −0.42): 41.Kg2? Nc4 ile at d2’yi korur (−2.71). Chesspedia’ya göre oyun Siyahın bir piyon fazlasıyla ertelendi (zaman kontrolü 40. hamledeydi) ve Spasski devamı yardımcısı Bondarevski’nin analiziyle oynadı.',
      diger: [
        { move: '41.Kg2', text: 'Şah yaklaşır ama 41...Nc4 d2’yi korur. Motor: −2.71.' },
      ],
    },
    '41b': {
      text: '41...Ne4: At e4’e gelir ve d2 kalesine saldırır.',
      amac: 'Atı merkeze getirip tempo kazanmak ve c3, c5 üzerinden b-piyonunu desteklemek.',
      neden: 'Motorun ilk tercihi (−0.31). At e4’ten hem kaleye saldırır hem de c5 ve c3 karelerine gidebilir.',
      diger: [
        { move: '41...Rc1+', text: 'Önce şah: 42.Kg2 Ne4 43.Rd7+ Kf6. Motor: −0.28.' },
        { move: '41...Kf6', text: 'Şah merkeze: 42.Rd4 Rb6 43.Kf2. Motor: −0.18.' },
      ],
    },
    '42w': {
      text: '42.Rd7+: Kale yedinci yataya girer ve şah çeker.',
      amac: 'Kaleyi aktif tutmak ve h7 piyonuna saldırmak.',
      neden: 'Motorun ilk tercihi (−0.28). 42.Rd8 (−1.69) ya da 42.Ra2 (−2.35) pasif kalır.',
      diger: [
        { move: '42.Rd8', text: 'Kale arkaya; 42...Rc1+ 43.Kg2 Rc3. Motor: −1.69.' },
        { move: '42.Ra2', text: 'İkinci yatayı korur ama 42...Rc1+ 43.Kg2 Nc5 ile Siyah aktif. Motor: −2.35.' },
      ],
    },
    '42b': {
      text: '42...Kf6: Şah f6’ya çıkar ve merkeze yaklaşır.',
      amac: 'Şahı oyun sonunda aktif etmek, e5 ve d4 üzerinden b-piyonuna destek vermek.',
      neden: 'Motor 42...Kh6’yı (−0.25) ve 42...Kf6’yı (−0.14) yakın görüyor. Kf6 h7’yi bırakır ama şahı merkeze getirir.',
      diger: [
        { move: '42...Kh6', text: 'h7’yi korur: 43.Rd4 Ng5 44.Rxb4 Nxh3+. Motor: −0.25.' },
        { move: '42...Kh8', text: 'Şah köşede pasif kalır. Motor: −0.04.' },
      ],
    },
    '43w': {
      text: '43.Rxh7?!: Kale h7 piyonunu alır.',
      amac: 'Materyali eşitlemek ve şah kanadında piyon fazlası elde etmek.',
      neden: 'Motor 43.Rb7’yi öneriyor (−0.16): kale b-piyonunu durdurur. Rxh7 bir piyon kazanır ama kale b-piyonundan uzaklaşır (−0.66).',
      diger: [
        { move: '43.Rb7', text: 'b-piyonunu durdurur: 43...Rc3 44.Rxb4 Rxh3 45.Bd5. Motor: −0.16.' },
        { move: '43.Rd4', text: 'Ata saldırır: 43...Rc1+ 44.Kg2 Rb1. Motor: −0.74.' },
      ],
    },
    '43b': {
      text: '43...Rc1+: Kale şah çeker.',
      amac: 'Beyazın şahını kenarda tutmak ve kaleyi birinci yataya geçirmek.',
      neden: 'Motorun ilk tercihi (−0.71). Kale c1’den b1 ve f1 karelerine bakar.',
      diger: [
        { move: '43...Rc3', text: 'Fili hedefler: 44.Bg8 Rc8. Motor: −0.63.' },
        { move: '43...Nd2', text: 'Fil’e saldırır: 44.Ba4 Ra6. Motor: −0.51.' },
      ],
    },
    '44w': {
      text: '44.Kg2: Şah g2’ye gelir ve şahlardan kurtulur.',
      amac: 'Şahı birinci yataydan çıkarıp f3 üzerinden merkeze, Siyahın b-piyonuna doğru yaklaştırmak.',
      neden: 'Oyun sonunda şah savaşan bir taştır; h1-g1 köşesinde kalırsa Siyahın kalesi onu kesip b-piyonunu rahatça sürer. Motor 44.Kg2’yi ilk sırada görüyor (−0.73). 44.Bd1?? ise 44...Rxd1+ ile fili verir (−4.96).',
      diger: [
        { move: '44.Kh2', text: 'Şah köşede kalır ve merkezden uzaklaşır: 44...Rc3 45.Bd5 Rc2+ 46.Kg1. Motor: −0.99.' },
        { move: '44.Bd1', text: 'Fili kaleyle korumayı unutur: 44...Rxd1+ ve Siyah bir taş öndedir. Motor: −4.96.' },
      ],
    },
    '44b': {
      text: '44...Nc5: At c5’e geçer, b3 filine saldırır ve b3 karesini kontrol eder.',
      amac: 'Atı b-piyonunun yol arkadaşı yapmak: ...b3 ilerleyişini desteklemek, gerekirse fili değişip piyonun önünü açmak.',
      neden: 'Atın e4’teki işi bitti; asıl kazanma şansı uzak b-piyonunda. c5’ten at hem b3 hem de a4 karelerine bakar, yani son kombinasyonun (53...Na4) tohumu burada atılır. Motorun ilk tercihi (−0.92).',
      diger: [
        { move: '44...Rc3', text: 'Fili kovar: 45.Rf7+ Ke5 46.Re7+ Kd4 ile şah ilerler ama Beyazın kalesi de aktif. Motor: −0.45.' },
        { move: '44...Nd2', text: 'Fili kovar: 45.Ba4 b3 46.Rb7 ve Beyazın kalesi b-piyonunun arkasına geçer. Motor: −0.12.' },
      ],
    },
    '45w': {
      text: '45.Bf7?: Fil f7’ye gider ve g6 piyonuna saldırır.',
      amac: 'g6 piyonunu alıp şah kanadında iki bağlantılı geçer piyon (g ve h) elde etmek.',
      neden: 'Karşı saldırı fikri anlaşılır, ama fil b-piyonunun önünden (b3 karesinden) çekilir ve 45...b3 ile piyon serbest kalır. Motor 45.Rf7+’yi öneriyor (−0.76): 45...Ke5 46.Rf3 ile kale b3’ü korur, 46...Nxb3 47.Rxb3 sonrası kale oyun sonu kurtulmaya yakındır. 45.Bf7 −1.86.',
      diger: [
        { move: '45.Rf7+', text: 'Şahı kovar ve kaleyi üçüncü yataya getirir: 45...Ke5 46.Rf3 Nxb3 47.Rxb3 ile kale oyun sonu. Motor: −0.76.' },
        { move: '45.g5+', text: 'Hemen karşı oyun: 45...Kxg5 46.h4+ Kf6 47.Bd5, ama b-piyonu yine ilerler. Motor: −1.49.' },
      ],
    },
    '45b': {
      text: '45...b3: b-piyonu fili b3’ten kovduğu boşluğa ilerler.',
      amac: 'Terfiye iki kare kalan piyonla Beyazın kalesini ve filini savunmaya bağlamak.',
      neden: 'Uzak geçer piyon ilerledikçe değerlenir; Beyazın şahı g2’de, fil f7’de, kale h7’de ve hiçbiri b1’e yakın değil. Motor 45...Rc2+’yi (−2.21) az farkla tercih ediyor: önce şahı f3’e kovup sonra ...b3. Maç hamlesi de güçlü (−1.86).',
      diger: [
        { move: '45...Rc2+', text: 'Önce şah: 46.Kf3 b3 47.g5+ Kxg5 ve Beyazın şahı ikinci yataydan kesilir. Motor: −2.21.' },
        { move: '45...Rc3', text: 'Kaleyi aktif tutar ama 46.h4 b3 47.g5+ Kf5 ile Beyazın piyonları hızlanır. Motor: −0.22.' },
      ],
    },
    '46w': {
      text: '46.g5+: Beyaz g-piyonunu şahla ilerletip karşı oyun arar.',
      amac: 'Siyahın şahını kovup h-piyonunu geçer piyon yapmak; Siyahı b-piyonundan başka bir şeyle uğraşmaya zorlamak.',
      neden: 'Beyaz için sorun, b-piyonunu durduracak zamanın olmamasıdır. Motor 46.Bxb3’ü öneriyor (−2.02): fil piyona verilir ve kale oyun sonu kalır; zor ama mücadeleli. 46.g5+ bir piyon verir ve Siyahın şahı g5’ten hızla geri döner (−2.82).',
      diger: [
        { move: '46.Bxb3', text: 'Fili piyona verip kale+piyonlar oyun sonuna geçer: 46...Nxb3 47.h4 Nd4 48.Ra7. Motor: −2.02.' },
        { move: '46.Kf3', text: 'Şah b-piyonuna gider ama 46...b2 ile piyon hemen b2’ye ulaşır. Motor: −5.09.' },
      ],
    },
    '46b': {
      text: '46...Kxg5: Şah g5 piyonunu alır.',
      amac: 'Beyazın şah kanadı piyonlarını azaltmak, böylece Beyazın kendi geçer piyon şansını küçültmek.',
      neden: 'Bedava piyon ve şah g5’ten f6 üzerinden merkeze dönebilir. Motorun ilk tercihi (−3.25). 46...Kf5 ya da 46...Ke5 (yaklaşık 0.00) Beyaza Bxg6 ile karşı oyun verir.',
      diger: [
        { move: '46...Kf5', text: 'Şah piyonu almaz: 47.Rg7 b2 48.Bxg6+ Kf4 ve Beyazın h-piyonu tehlikeli olur. Motor: −0.07.' },
        { move: '46...Ke5', text: 'Şah merkeze: 47.Bxg6 Ne6 48.Re7 Kd6, Beyaz piyon farkını kapatır. Motor: 0.00.' },
      ],
    },
    '47w': {
      text: '47.h4+: h-piyonuyla şah çekilir.',
      amac: 'Şahı g5’ten kovup h-piyonunu h5’e sürmek, ardından hxg6 ile geçer piyon kazanmak.',
      neden: 'Beyazın tek karşı şansı h-piyonudur. Motorun ilk tercihi (−3.04). 47.Bxb3 Nxb3 (−4.09) şah kanadı piyonu da gittikten sonra daha umutsuzdur.',
      diger: [
        { move: '47.Bxb3', text: 'Fil piyona verilir: 47...Nxb3 48.h4+ Kg4 49.h5, ama Siyahın şahı h-piyonunu yakalar. Motor: −4.09.' },
        { move: '47.Rh8', text: 'Kale arkaya; 47...b2 48.h4+ Kf6 49.Ba2 ve piyon b2’de. Motor: −5.22.' },
      ],
    },
    '47b': {
      text: '47...Kf6: Şah f6’ya döner.',
      amac: 'Şahı merkeze getirip hem g6’yı korumak hem de e5-d4 üzerinden b-piyonuna yaklaşmak.',
      neden: 'Şah f6’da f7 filine de saldırır ve h-piyonunun önünü tutmaya hazırdır. Motorun ilk tercihi (−3.00). 47...Kf5 ya da 47...Kg4 Beyaza h5 ve Bxg6 ile karşı oyun verir.',
      diger: [
        { move: '47...Kf5', text: 'Şah önde kalır: 48.h5 g5 49.Bg6+ Kg4 ve Beyazın h-piyonu ilerler. Motor: −0.14.' },
        { move: '47...Kg4', text: 'Şah h-piyonuna gider: 48.Bxg6 Rc2+ 49.Kf1, Beyaz dengeyi bulur. Motor: −0.08.' },
      ],
    },
    '48w': {
      text: '48.h5: Beyaz h-piyonunu ilerletir ve g6’ya saldırır.',
      amac: 'hxg6 ile g-piyonunu almak ve geçer bir h-piyonu yaratmak.',
      neden: 'Beyaz zaman yarışında; b-piyonuna karşı kendi geçer piyonunu yaratmalı. Motorun ilk tercihi (−3.03). 48.Bd5?? b2 49.Rf7+ Ke5 50.Ba2 ise fil yine geri dönmek zorunda kalır (−5.67).',
      diger: [
        { move: '48.Bxb3', text: 'Fil verilir: 48...Nxb3 49.Rh8 Kg7 50.Rb8 ve Siyahın atı ile şahı kolay kazanır. Motor: −3.75.' },
        { move: '48.Bd5', text: 'Fil b-piyonuna döner ama 48...b2 49.Rf7+ Ke5 ile kaybeder. Motor: −5.67.' },
      ],
    },
    '48b': {
      text: '48...Rc2+: Kale şah çeker.',
      amac: 'Beyazın şahını kovarak tempo kazanmak ve b2 ilerleyişini hazırlamak.',
      neden: 'Şah yanıt verirken b-piyonu bir kare daha yürür. Motorun ilk tercihi (−2.97). 48...gxh5? 49.Bxb3 Nxb3 50.Rxh5 sonrası Siyahın piyonu kalmaz ve oyun berabere (−0.24).',
      diger: [
        { move: '48...g5', text: 'g-piyonunu korur: 49.Bg6 b2 50.Rf7+ Ke6, yine kazanmaya yakın. Motor: −2.60.' },
        { move: '48...gxh5', text: 'Piyonu alır ama 49.Bxb3 Nxb3 50.Rxh5 sonrası Siyahın piyonu kalmaz. Motor: −0.24.' },
      ],
    },
    '49w': {
      text: '49.Kf3: Şah f3’e gelir.',
      amac: 'Şahı merkeze, e2-d2 üzerinden b-piyonuna yaklaştırmak.',
      neden: 'Motorun ilk tercihi (−3.04). Şahı h-piyonunun yanında tutmak (49.Kh3 −3.07) h-piyonunu korur ama b-piyonuna karşı uzak kalır; 49.Kg3 (−3.87) daha da kötü.',
      diger: [
        { move: '49.Kh3', text: 'Şah h-piyonunu destekler: 49...b2 50.Ba2 gxh5, b-piyonu yine b2’de. Motor: −3.07.' },
        { move: '49.Kg3', text: 'Şah ortada kalır: 49...b2 50.Ba2 gxh5 51.Rf7+. Motor: −3.87.' },
      ],
    },
    '49b': {
      text: '49...b2: Piyon terfiye bir kare uzakta.',
      amac: 'b1’de terfiyi tehdit edip Beyazın filini a2’ye ve b1’e bağlamak.',
      neden: 'Artık Beyazın fili tek iş görebilir: b1 karesini korumak. Motorun ilk tercihi (−3.01). 49...Rc3+ (−0.65) ya da 49...gxh5 (−0.17) kazanç yolunu kaybeder.',
      diger: [
        { move: '49...Rc3+', text: 'Önce şah: 50.Ke2 g5 51.Bg6 Ne6, Beyaz şahını b-piyonuna yaklaştırır. Motor: −0.65.' },
        { move: '49...gxh5', text: 'Piyonu alır: 50.Bxb3 Rc3+ 51.Ke2 Rxb3, kale oyun sonu berabere. Motor: −0.17.' },
      ],
    },
    '50w': {
      text: '50.Ba2: Tek iyi hamle: fil a2’den b1 karesini korur.',
      amac: 'b-piyonunun terfisini engellemek.',
      neden: 'Zorunlu: 50.Bb3? Nxb3 sonrası b1=Q ve mat gelir (Motor: mat), 50.Bxg6? b1=Q 51.Bxc2 Qxc2 ile Siyah vezir öne geçer (−35). Ba2 tek yol (−2.98).',
      diger: [
        { move: '50.Bxg6', text: 'Piyonu alır ama 50...b1=Q 51.Bxc2 Qxc2 ile Siyahın veziri kalır. Motor: −35.' },
        { move: '50.Bb3', text: 'b-piyonunu durdurmaya çalışır ama 50...Nxb3 ile terfi engellenemez. Motor: mat.' },
      ],
    },
    '50b': {
      text: '50...gxh5?!: Siyah h5 piyonunu alır.',
      amac: 'Beyazın tek geçer piyon umudunu ortadan kaldırmak.',
      neden: 'Doğal görünen bir sadeleştirme, ama motor 50...Rc3+’yi öneriyor (−2.95): 51.Kf4 g5+ 52.Kg4 Rc4+ 53.Kh3 Rc1 ile şah kenara kovulur ve g-piyonu korunur. 50...gxh5 51.Rxh5 sonrası Siyahın şah kanadında piyonu kalmaz; Beyaz şahını b-piyonuna götürebilirse beraberlik mümkündür (−0.25).',
      diger: [
        { move: '50...Rc3+', text: 'Önce şah: 51.Kf4 g5+ 52.Kg4 Rc4+ 53.Kh3 Rc1 ile Beyazın şahı kenarda kalır. Motor: −2.95.' },
        { move: '50...Rc1', text: 'Kale arkaya; 51.hxg6 Kxg6 52.Rh2 ve Beyaz kale ile b2’yi takip eder. Motor: −0.20.' },
      ],
    },
    '51w': {
      text: '51.Rxh5: Kale h5 piyonunu alır.',
      amac: 'Materyali dengelemek: artık Beyazda piyon yok, Siyahta yalnızca b2 piyonu var.',
      neden: 'Motorun ilk tercihi (−0.21). Tahtada kalan tek piyon b2’de ve Beyaz onu durdurabilirse oyun berabere biter. 51.Rf7+ (−3.92) ya da 51.Ke3 (−4.07) Siyahın h5 piyonunu tahtada bırakır.',
      diger: [
        { move: '51.Rf7+', text: 'Şah çeker ama 51...Kg5 52.Rg7+ Kh6 sonrası Siyah kazanır. Motor: −3.92.' },
        { move: '51.Ke3', text: 'Şah b-piyonuna gider ama 51...Kg5 ile Siyahın h5 piyonu kalır ve Siyah kazanır. Motor: −4.07.' },
      ],
    },
    '51b': {
      text: '51...Rc1: Kale c1’e döner ve b1 karesine ikinci destek verir.',
      amac: 'b1 karesini kale ve piyonla kontrol etmek; ileride ...Ra1 ya da ...Rc2 ile a2 filine baskı hazırlamak.',
      neden: 'Motor 51...Nb3, 51...Rc3+ ve 51...Rc1’i aynı görüyor (yaklaşık −0.1). Pozisyon teorik olarak beraberliğe yakın; Siyah hamle sırasını kendi lehine kullanmak için Beyazdan bir hata bekliyor.',
      diger: [
        { move: '51...Nb3', text: 'At b1’e ve d2’ye bakar: 52.Ke3 Rc3+ 53.Kf2. Motor: −0.16.' },
        { move: '51...Rc3+', text: 'Önce şah: 52.Ke2 Nb3 53.Kf2. Motor: −0.15.' },
      ],
    },
    '52w': {
      text: '52.Rh6+??: Kale şah çeker ve b-hattına geçmeye hazırlanır.',
      amac: 'Siyahın şahını kovmak, sonra kaleyi b6’ya getirip b-piyonunu arkadan durdurmak.',
      neden: 'Belirleyici hata. Uzak geçer piyona karşı en iyi savunucu şahtır: motorun önerdiği 52.Ke3! (−0.08) şahı d4 ve c3 üzerinden b-piyonuna götürür. 52.Rh6+ ise Siyahın şahını merkeze yaklaştırır, Beyazın şahı f3’te uzak kalır; 52...Ke5 53.Rb6 Na4! sonrası terfi durdurulamaz (−2.97). Chesspedia’ya göre Spasski maçtan sonra, erteleme sonrası berabere bir pozisyonu olduğunu ama daha basit görünen bir yolu seçip kaybettiğini söyledi.',
      diger: [
        { move: '52.Ke3', text: 'Şah b-piyonuna yürür: 52...Rc3+ 53.Kd4 Na4 54.Rb5 ve Beyaz tutar. Motor: −0.08.' },
        { move: '52.Rd5', text: 'Kale d-hattından ata ve b-piyonuna bakar: 52...Na4 53.Rd4 Nc3. Motor: −0.36.' },
      ],
    },
    '52b': {
      text: '52...Ke5: Şah e5’e çıkar.',
      amac: 'Şahı merkeze ve b-piyonuna yaklaştırmak; Beyaz şahının d4 ve e3 karelerine gelmesini engellemek.',
      neden: 'Siyahın şahı Beyaz şahını vezir kanadından keser. Motor 52...Ke5 (−3.01) ve 52...Ke7’yi (−3.00) aynı görüyor. 52...Kg5? (−0.24) şahı yanlış tarafa götürür.',
      diger: [
        { move: '52...Ke7', text: 'Şah merkeze: 53.Rb6 Na4 54.Rb4 Kd6 ve aynı kombinasyon. Motor: −3.00.' },
        { move: '52...Kg5', text: 'Şah kaleye yaklaşır ama b-piyonundan uzaklaşır: 53.Rb6 Rc3+ 54.Ke2. Motor: −0.24.' },
      ],
    },
    '53w': {
      text: '53.Rb6: Kale b-piyonunu arkadan durdurmak için b6’ya gelir.',
      amac: 'b2 piyonunu kale ile hedef alıp fil ile birlikte b1’i tutmak.',
      neden: 'Motorun ilk tercihi (−3.02), ama artık geç: 53...Na4! ile kale b-hattından kesilir. Alternatifler de yetmez: 53.Rh2 Na4 54.Rh4 Nc3 (−3.03).',
      diger: [
        { move: '53.Rh2', text: 'İkinci yatayı savunur: 53...Na4 54.Rh4 Nc3 ve at b1’e gelir. Motor: −3.03.' },
        { move: '53.Rh5+', text: 'Şah çeker: 53...Kd4 54.Rh4+ Kd3 55.Rb4 ama Siyahın şahı c2’ye yaklaşır. Motor: −3.25.' },
      ],
    },
    '53b': {
      text: '53...Na4!: At a4’e gelir; b6 kalesinin b-hattını kapatır ve b2’yi korur.',
      amac: 'Atı feda etmeye hazırlanarak a-hattında ...Ra1 kombinasyonunu kurmak.',
      neden: 'Motorun açık ara ilk tercihi (−3.01; 53...Rc3+ −0.20). Kale atı alırsa ...Ra1 a2 filine saldırır: fil b1 karesini bırakamaz, kale de a2’yi alıp terfiye yol açar. Chesspedia’nın aktarımına göre oyun, Spasski’nin Petrosyan’ın atını feda edip piyonunu terfi ettirmesine izin vermesiyle bitti.',
      diger: [
        { move: '53...Rc3+', text: 'Şah çeker ama 54.Ke2 sonrası Beyaz şahı b-piyonuna yaklaşır. Motor: −0.20.' },
        { move: '53...Rc2', text: 'Kale fili hedefler: 54.Bb1 Rc3+ 55.Ke2, Beyaz tutar. Motor: −0.20.' },
      ],
    },
    '54w': {
      text: '54.Re6+: Kale şah çeker.',
      amac: 'Şahı uzaklaştırıp atı almaya zaman kazanmak.',
      neden: 'Pozisyon kaybedilmiştir; Beyaz şahlarla Siyahın şahını atından ve a-hattından uzaklaştırmaya çalışıyor. Motor 54.Re6+ ve 54.Rb4’ü aynı görüyor (−3.06).',
      diger: [
        { move: '54.Rb4', text: 'Atı hemen alır: 54...Ra1 55.Rxa4 ve aynı kombinasyon. Motor: −3.06.' },
        { move: '54.Rb5+', text: 'Şah çeker: 54...Kd4 55.Rb4+ Kc5 56.Rxa4 Ra1. Motor: −3.07.' },
      ],
    },
    '54b': {
      text: '54...Kd4: Şah d4’e ilerler.',
      amac: 'Şahı vezir kanadına, c5 ve b4 üzerinden atına ve b-piyonuna yaklaştırmak.',
      neden: 'Siyahın şahı şahlardan kaçarken bile b-piyonuna yürür. Motorun ilk tercihi (−3.01). 54...Kf5 (−1.70) şahı uzaklaştırır.',
      diger: [
        { move: '54...Kf5', text: 'Şah geri döner: 55.Re2 Rf1+ 56.Kg2 Ra1, Beyaz rahatlar. Motor: −1.70.' },
      ],
    },
    '55w': {
      text: '55.Re4+: Kale yine şah çeker ve a4 atına saldırır.',
      amac: 'Şahı kovup atı almak.',
      neden: 'Motorun ilk tercihi (−3.03). Beyaz için tek pratik şans, Siyahın şahını a4’ten uzaklaştırıp atı kazanmaktır.',
      diger: [
        { move: '55.Ra6', text: 'Kale a-hattına: 55...Nc5 56.Rb6 Kc3 ve şah b-piyonuna ulaşır. Motor: −3.42.' },
        { move: '55.Re2', text: 'b2’ye saldırır ama 55...Ra1 56.Rxb2 Nxb2 ile Siyah kale fazlasıyla kazanır. Motor: −3.97.' },
      ],
    },
    '55b': {
      text: '55...Kc5: Şah c5’e gider ve şahlardan kurtulur.',
      amac: 'Atın alınmasına izin verip ...Ra1 kombinasyonunu hazırlamak.',
      neden: 'Petrosyan atı korumaya uğraşmıyor; önemli olan ...Ra1 için zamanın kalmasıdır. Motorun ilk tercihi (−3.03). 55...Kd3 (−0.72) ya da 55...Kc3 (−0.67) şahı Beyaz kalesinin şah çekmelerine açık bırakır.',
      diger: [
        { move: '55...Kd3', text: 'Şah ileri: 56.Rb4 Rf1+ 57.Kg2 Rd1, Beyaz tutar. Motor: −0.72.' },
        { move: '55...Kc3', text: 'Şah ileri: 56.Rc4+ Kd3 57.Rb4, kale b-piyonuna geçer. Motor: −0.67.' },
      ],
    },
    '56w': {
      text: '56.Rxa4: Kale atı alır.',
      amac: 'Materyali kazanıp b2 piyonunu durdurmayı ummak.',
      neden: 'Motorun ilk tercihi (−3.01), ama 56...Ra1! ile kazanç gelir. Başka bir hamle de kurtarmaz: 56.Re5+ Kb4 57.Re2 Rf1+ (−3.30).',
      diger: [
        { move: '56.Re5+', text: 'Şah çeker: 56...Kb4 57.Re2 Rf1+ ve Siyahın şahı b3’e gelir. Motor: −3.30.' },
        { move: '56.Re2', text: 'b2’ye saldırır ama 56...Ra1 57.Rxb2 Nxb2 ile Siyah kale fazlasıyla kazanır. Motor: −3.80.' },
      ],
    },
    '56b': {
      text: '56...Ra1!: Kale a2 filine saldırır; fil b1 karesini bırakamaz.',
      amac: 'Fili bağlamak ve b1’de terfiyi zorlamak.',
      neden: 'Motorun ilk tercihi (−2.90; motor değerlendirmesi küçük görünse de vezir kale karşısında kolay kazanır). Fil kaçarsa b1=Q gelir; 57.Bb1 Rxb1 58.Ra2 Rf1+ ile Siyah yine terfi eder; 57.Ke3 Rxa2 58.Rxa2 b1=Q ile Siyahın veziri Beyazın kalesine karşı kalır. Spasski terk etti; Petrosyan maça 1–0 önde başladı.',
      diger: [
        { move: '56...Rf1+', text: 'Şah çeker ama kombinasyon kaçar: 57.Ke2 Rg1 58.Ra8 ve Beyaz tutar. Motor: −0.20.' },
        { move: '56...Rc3+', text: 'Şah çeker: 57.Ke2 Rc1 58.Kd3, Beyazın şahı b-piyonuna gelir. Motor: −0.07.' },
      ],
    },
  },
  exercises: [
    { id: 'spe-1', kind: 'tekrar', plan: false, title: 'Merkez piyonu ilerliyor',
      source: 'Spasski – Petrosyan, Moskova 1969 (25. hamle)',
      fen: '5rk1/1b4qp/5np1/2pp4/2P5/1P1BQ2P/r2N2P1/4RRK1 b - - 5 25',
      prompt: 'Siyahın c5 ve d5 piyonları yan yana duruyor. Kale a2’de, fil b7’de. Petrosyan merkezde nasıl ilerledi?',
      hint: 'Bir piyon hamlesi hem geçer piyon yaratır hem de b7 filinin önünü açar.',
      line: ['d4', 'Qe6+', 'Qf7'],
      explanation: '**25...d4!** Vezire saldırır, c5 piyonuyla korunan bir geçer piyon yaratır ve b7 filinin uzun çaprazını açar. 26.Qe6+ sonrası **26...Qf7** tek hamledir. Motor: ...d4 −0.37, sonraki en iyi ...Qd7 +0.64; 26...Qf7 −0.38, 26...Rf7 +0.80.',
      link: 'Siyahın merkez piyonları hareketsiz durmadı: ...c5 hazırladı, ...d4 geçer piyonu yarattı.' },
    { id: 'spe-2', kind: 'tekrar', plan: false, title: 'Terfi karesinin savunucusu',
      source: 'Spasski – Petrosyan, Moskova 1969 (53. hamle)',
      fen: '8/8/1R6/2n1k3/8/5K2/Bp6/2r5 b - - 4 53',
      prompt: 'Siyahın b2 piyonu terfiye bir kare uzakta. Beyazın a2 fili b1 karesini, b6 kalesi b-piyonunu tutuyor. Siyah nasıl ilerler?',
      hint: 'At hem kaleye saldırabilir hem de b2’yi koruyabilir. Kale atı alırsa a-hattında ne olur?',
      line: ['Na4'],
      explanation: '**53...Na4!** At kaleye saldırır ve b2’yi korur. Oyunda 54.Re6+ Kd4 55.Re4+ Kc5 56.Rxa4 Ra1! geldi: fil a2’den ayrılırsa b1=Q, 57...Rxa2 58.Rxa2 b1=Q de kazanır. Motor: ...Na4 −2.82, sonraki en iyi ...Rc3+ −0.27.',
      link: 'a-hattını açan Petrosyan, oyunun sonunda yine a-hattıyla b1 karesinin savunucusunu ortadan kaldırdı.' },
    { id: 'spe-3', kind: 'transfer', plan: false, title: 'd4 ile çapraz açılıyor',
      source: 'Morozevich – Sargissian, Karen Asrian Anma Turnuvası, Erivan 2008 (26. hamle)',
      fen: 'rq4k1/1b2b1p1/pn2p3/2pp1rP1/2P3BP/N3B3/PP4Q1/1R3RK1 b - - 2 26',
      prompt: 'Siyahın c5 ve d5 piyonları yan yana; fil b7’de, Beyazın veziri g2’de. Beyazın e3 fili ve g4 fili aktif. Hamle Siyahta.',
      hint: 'd5 piyonu ilerlerse hangi taşa saldırır, arkasında hangi çapraz açılır?',
      line: ['d4'],
      explanation: '**26...d4!** Piyon e3 filine saldırır ve aynı anda b7 filinin g2 vezirine giden çaprazını açar. 27.Qh3 dxe3 28.Bxf5 exf5 sonrası Siyah taş kazanmıştır. Motor: ...d4 −2.41, sonraki en iyi ...dxc4 +0.36.',
      link: 'Petrosyan 25...d4 ile geçer piyon yarattı ve b7 filinin çaprazını açtı; Sargissian aynı ilerleyişle çaprazı açıp doğrudan taş kazandı.' },
    { id: 'spe-4', kind: 'transfer', plan: false, title: 'Savunan şahı kovmak',
      source: 'Lombard – Tal, Biel Bölgelerarası turnuvası 1976 (52. hamle)',
      fen: '8/7p/6p1/4p3/3b4/1k5P/2pK2P1/2R5 b - - 3 52',
      prompt: 'Siyahın c2 piyonu terfiye bir kare uzakta. Beyazın d2 şahı c1 kalesini koruyor. Hamle Siyahta.',
      hint: 'Fil şah çekerek Beyaz şahını kaleden uzaklaştırabilir mi?',
      line: ['Bc3+'],
      explanation: '**52...Bc3+!** Fil b3 şahıyla korunur; Beyaz şahı c1 kalesinden uzaklaşmak zorundadır. 53.Kd3 e4+ 54.Kxe4 Kb2 sonrası kale c1’i bırakır ve piyon terfi eder. Motor: ...Bc3+ −4.68, sonraki en iyi ...Kc4 +2.87.',
      link: 'Petrosyan b1 karesini savunan fili ...Na4 ve ...Ra1 ile etkisiz bıraktı; Tal da c1 karesini savunan şahı bir şahla uzaklaştırdı.' },
  ],
};
