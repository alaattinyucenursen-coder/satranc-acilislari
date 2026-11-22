// Petrosyan – Spasski, Dünya Şampiyonası maçı, Moskova 1966 (20. oyun). Kaynak: PgnMentor (Petrosian.pgn).
export default {
  id: 'petrosian-spassky-1966',
  theme: 'Rubinstein ana hattı: b-hattı ve fil çifti',
  white: 'Tigran Petrosyan', black: 'Boris Spasski',
  whiteShort: 'Petrosyan', blackShort: 'Spasski',
  event: 'Dünya Şampiyonası maçı, 20. oyun', site: 'Moskova', year: 1966, eco: 'E59',
  variation: 'Nimzo-Hint Savunması, Rubinstein (4.e3) ana hattı', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 c5 6. Nf3 d5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qc7 11. Bd3 e5 12. Qc2 Bg4 13. Nxe5 Nxe5 14. dxe5 Qxe5 15. f3 Bd7 16. a4 Rfe8 17. e4 c4 18. Be2 Be6 19. Be3 Qc7 20. Rab1 Nd7 21. Rb5 b6 22. Rfb1 Qc6 23. Bd4 f6 24. Qa2 Kh8 25. Bf1 h6 26. h3 Rab8 27. a5 Rb7 28. axb6 axb6 29. Qf2 Ra8 30. Qb2 Rba7 31. Bxb6 Ra2 32. Qb4 Rc2 33. Bf2 Qc7 34. Qe7 Bxh3 35. gxh3 Rxf2 36. Kxf2 Qh2+ 37. Bg2 Ne5 38. Rb8+ Rxb8 39. Rxb8+ Kh7 40. Rd8 Ng6 41. Qe6 1-0`,

  summary: 'Maçın en kritik anlarından biri. Spasski 19. oyunu kazanarak skoru 9½–9½’e eşitlemişti; Petrosyan bu oyunla hemen karşılık verdi, skoru 10½–9½ yaptı ve iki oyun sonra unvanını garantiledi (maç 12½–11½ bitti). Oyun, Nimzo-Hint Rubinstein sisteminin ana hattında başladı. Siyah önce fil çiftini verdi (8...Bxc3), sonra ...dxc4 ve ...e5 ile merkezi açtı. Petrosyan 13.Nxe5 ile taşları değişip Siyahın merkezini dağıttı, **f3 ve e4** ile kara kareleri ve merkezi kapattı, fillerini güvenli karelere (e2/f1, d4) yerleştirdi ve kalelerini **açık b-hattına** taşıdı. Siyahın ...c4 ile c3’ü sabitlemesi d4 karesini Beyaz file bıraktı. Uzun bir manevra döneminde Beyaz a4-a5 ile vezir kanadını açıp 31.Bxb6 ile piyon kazandı. Gerçek hata 32...Rc2? oldu (Motor: 32...R2a4 ile 0.00 civarı, oyundaki hamle +1.9); 33...Qc7’den sonra 34.Qe7! ile Beyazın veziri Siyah taşlarının arkasına girdi. Spasski’nin h3’teki fil fedası bir şah saldırısı yaratamadı; Beyaz kale ve veziriyle g8’de mat ağı ördü ve 41.Qe6’dan sonra Siyah terk etti.',
  intro: 'Rubinstein sistemi (4.e3) Beyazın Nimzo-Hint’e karşı en yaygın silahıdır: Beyaz önce sessizce gelişir, planını sonraya bırakır. 7...Nc6 8.a3 Bxc3 9.bxc3 dxc4 10.Bxc4 Qc7 dizilişi bu sistemin “ana hattı” olarak bilinir. Siyah fil çiftini verir; karşılığında Beyazın c-hattında ikiye katlanmış piyonları olur (c4 değişince geriye zayıf bir c3 kalır), ama b-hattı da açılır. Siyahın tipik fikri hızlı bir ...e5 ile d4’e baskı yapıp merkezi açmaktır. Bu oyunda o fikrin bedeli görülüyor: merkez açıldıktan sonra Beyazın filleri ve b-hattı, Siyahın piyon yapısındaki küçük kusurlardan (c4, b6) daha ağır bastı. Petrosyan’ın tarzının tipik bir örneği: önce hiçbir karşı oyun bırakmamak, sonra yavaşça baskıyı artırmak.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Fil çiftini** korumak ve filleri Siyah taşlarının saldıramayacağı karelere koymak: 18.Be2 (ve sonra 25.Bf1), 19.Be3 ve 23.Bd4.',
      '13.Nxe5 ile merkezdeki gerginliği çözmek; ardından **15.f3 ve 17.e4** ile g4 filini kovmak, d5 ve f5 karelerini almak, Siyah atına merkez kareleri kapatmak.',
      'Siyah ...c4 oynayınca boşalan **d4 karesini** kara kareli file vermek; fil d4’ten hem b6’ya hem g7’ye bakar.',
      'Kaleleri **açık b-hattında** ikilemek (20.Rab1, 21.Rb5, 22.Rfb1); b5’teki kale beşinci yatayda c5 ve e5’i de kontrol eder.',
      'a4-a5 piyon hamlesiyle b6’yı sorgulamak, a-hattını açmak ve sonunda b6 piyonunu kazanmak (31.Bxb6).',
      'Şahını sağlam tutmak: 26.h3 ile kaçış karesi, 33.Bf2 ile g1-a7 köşegeninde savunma; Siyahın karşı saldırısına zemin bırakmamak.',
      'Fırsat çıkınca vezirle Siyah taşlarının arkasına geçmek (34.Qe7!) ve kale + vezirle g8’e karşı mat ağı kurmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Gelişimde öne geçmek: 8...Bxc3 ve 9...dxc4 ile Beyazın d3 filine tempo kazanmak, ardından ...e5 ile merkezi açmak.',
      '12...Bg4 ile f3 atını rahatsız etmek; merkez açılınca veziri e5’e yerleştirip h2’ye ve c3’e baskı yapmak.',
      '17...c4 ile Beyazın c3 piyonunu geri ve zayıf bırakmak, d3 karesini Siyah taşlarına açmak (ama bunun bedeli d4’ün Beyaza kalmasıdır).',
      'Atı d7’den c5, e5 ve d3 gibi forpost karelere getirmek; 23...f6 ile e5 karesini sağlamlaştırmak.',
      'a-hattı açılınca kaleleri ikileyip Beyazın ikinci yatayına sızmak (30...Rba7, 31...Ra2).',
      'Malzeme kaybından sonra Beyaz şahına karşı oyun aramak: ...Qc7 ile h2’yi hedeflemek ve h3’te fil fedası (34...Bxh3).',
    ] },
  },
  critical: [
    { move: '8b', title: '8...Bxc3: fil çifti karşılığında yapı', text: '8.a3 ile sorgulanan fil c3’te ata değişildi. Rubinstein ana hattının özü budur: Beyaz fil çiftini ve b-hattını alır, Siyah ise c3’teki ikiye katlanmış piyonu hedef olarak ve hızlı gelişimi kazanır. 8...Ba5 veya 8...cxd4 gibi alternatifler Motor’a göre Siyah için biraz daha zayıf (+0.3/+0.4). Bu değişimden sonra bütün oyun “filler mi, yapı mı?” sorusu etrafında döner.' },
    { move: '13w', title: '13.Nxe5: merkezin çözülmesi', text: 'Siyahın 12...Bg4’ü e5 piyonunu bir an zayıf bıraktı. Beyaz önce atla aldı: 13...Nxe5 14.dxe5 Qxe5 neredeyse zorunlu, çünkü 13...Rac8 veya 13...Be6 gibi hamleler Siyahı bir piyon eksik ve h7 zayıf bırakır (Motor: +2.0). Değişimlerden sonra Siyahın g4 fili açıkta kaldı ve 15.f3 tempo kazanarak geldi. Merkezde artık piyon kalmadı; bu da Beyazın fillerini güçlendirdi.' },
    { move: '17w', title: '17.e4 ve 17...c4: yapının donması', text: 'Beyaz e4 ile merkezi aldı, Siyah 17...c4 ile d3 filine saldırarak cevap verdi. Bu iki hamle oyunun yapısını belirledi: Siyah d3 karesini kazandı ama **d4 karesini** sonsuza dek Beyaza bıraktı ve c4 piyonu kalıcı bir hedef haline geldi. 18.Bxc4?? Qc5+ ile fili kaybettirirdi (Motor: −4.2), bu yüzden 18.Be2 doğru çekilmeydi.' },
    { move: '21w', title: '21.Rb5: b-hattından beşinci yataya', text: 'Kale b5’e çıkarak hem b-hattına baskı yaptı hem de c5 ve e5 karelerini Siyah atına kapattı. 22.Rfb1 ile ikinci kale arkasına geldi. Siyah ...b6 ile b7’yi kapatmak zorunda kaldı; bu da ileride a4-a5 hamlesine bir hedef verdi. Motor’a göre bu, pozisyonun en iyi hamlesi (+0.7) ve Beyaz avantajını sonraki 10 hamlede yavaşça artırdı.' },
    { move: '31w', title: '31.Bxb6: sabırla kazanılan piyon', text: '27.a5 ve 28.axb6 ile a-hattı açıldı, b6 piyonu tecrit oldu. Petrosyan önce vezirini manevra ettirdi (29.Qf2, 30.Qb2), sonra piyonu fil ile aldı. 31...Nxb6? 32.Rxb6 sonrası Beyazın kalesi tempo kazanarak c6 vezirine çarpar ve Beyaz piyon fazlasını korur (Motor: +1.1). Siyah malzeme yerine aktiflik seçti ve kalesini a2’ye soktu; oyun bir anda keskinleşti.' },
    { move: '32b', title: '32...Rc2? asıl hata', text: 'Burası oyunun kırılma noktası. 32...R2a4! veziri kovar ve 33.Qe7 Rb8 ile Siyah b6’daki fili rahatsız ederek dengeye yakın bir oyun kurar (Motor: 0.00/+0.2). Spasski bunun yerine kalesini c2’ye getirip f2 ve h2 karelerine karşı saldırı hazırladı; ama 33.Bf2 sonrası Siyahın kaleleri Beyaz şahına gerçek bir tehdit oluşturamadı (Motor: +1.9).' },
    { move: '34w', title: '34.Qe7! vezir arkadan', text: '33...Qc7 (daha iyisi 33...Raa2 veya 33...Ne5, Motor: +1.2/+1.6) h2’ye bakıyordu, ama 34.Qe7! iki taşa birden saldırdı: d7 atı ve e6 fili. Siyah bunları aynı anda koruyamaz. Motor bu hamleyi +2.8 değerlendiriyor; en yakın alternatif (34.Rd1 veya 34.Rb7) yalnızca +1.6. Bu andan sonra Siyahın en iyi hamleleri bile kaybediyor.' },
    { move: '34b', title: '34...Bxh3: umutsuz bir feda', text: 'Spasski fili h3’te feda edip kale ile f2’yi aldı ve vezirle h2’den şah çekti. Derin analizde Motor bu fedayı 34...Qc6 ile aynı değerde buluyor (ikisi de yaklaşık +2.9): pozisyon zaten kaybedilmişti ve Spasski en azından pratik şans arıyordu. 37.Bg2 araya girişi ile Beyaz şahı güvenceye alındı ve oyun Beyazın kale + vezir saldırısına döndü.' },
    { move: '41w', title: '41.Qe6: Qg8 mat tehdidi', text: 'Vezir e6’dan g8’e bakar; d8’deki kale g8’i destekler, h7 şahının kaçacak karesi yoktur. Siyahın tek savunma girişimi 41...Qxg2+ 42.Kxg2 Nf4+ ve 43...Nxe6’dır, ama o zaman Beyaz kale ile at karşısında kazanılmış bir oyunda kalır (Motor: +4.9). 41...Nf4 ise 42.Qf5+ ile çöker. Spasski terk etti.' },
  ],
  lessons: [
    'Rubinstein ana hattında Siyah ...e5 ile merkezi açarsa, Beyaz değişimlerle (13.Nxe5) gerginliği çözüp **f3-e4** ile merkezi sağlamlaştırır; merkez piyonsuz kalınca fil çifti değerlenir.',
    'Açık b-hattı, ikiye katlanmış c-piyonlarının en önemli telafisidir: kaleler b-hattında ikilenir, bir kale beşinci yataya (Rb5) çıkarak hem hattı hem de c5/e5 karelerini tutar.',
    'Bir piyonu ileri sürmek (17...c4) her zaman bir kare verir: c4 hamlesi d3’ü Siyaha verdi ama d4’ü sonsuza dek Beyaz file bıraktı. Piyon hamlesinden önce “hangi kare benden gidiyor?” diye sorun.',
    'Fil çiftine sahip taraf, fillerini rakibin tempo kazanamayacağı karelere koyar (18.Be2, 25.Bf1, 23.Bd4); acele etmeden pozisyonu iyileştirmek ve rakibin karşı oyununu önlemek, Petrosyan tarzının özüdür.',
    'Zayıf bir piyonu kazanmak için önce onu sabitleyip tecrit etmek gerekir: a4-a5 ve axb6 ile b6 tek başına kaldı, sonra düştü.',
    'Pozisyon kötüleşince aktif ama yanlış bir hamle (32...Rc2?) her şeyi hızlandırabilir; veziri kovalayan sakin 32...R2a4 dengeyi koruyordu.',
    'Rakip fedalarla saldırırken önce şahın kaçış karelerini ve araya giriş imkanlarını (37.Bg2) hesaplayın; saldırı söndüğünde fazla taş genellikle hızla kazanır.',
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz vezir piyonunu iki kare ilerletir; e5 ve c5 karelerini kontrol eder, c1 filine yol açar.',
      amac: 'Merkezi piyonla tutmak ve kapalı/yarı kapalı bir oyun kurmak. Petrosyan’ın pozisyonel tarzına uygun bir seçim.',
      neden: 'Petrosyan maçta hem 1.d4 hem 1.c4/1.Nf3 gibi kapalı başlangıçlar kullandı. 1.d4 ile Spasski’yi Nimzo-Hint veya Vezir Gambiti gibi derin teorik hatlara davet etti.',
      diger: [
        { move: '1.e4', text: 'Daha açık oyunlara yol açar (Motor: +0.4). Petrosyan maçta bunu tercih etmedi; Spasski açık pozisyonlarda daha tehlikeliydi.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; çoğunlukla aynı yapılara transpoze olur (Motor: +0.2). Petrosyan maçın başka oyunlarında bunu da denedi.' },
      ],
    },
    '1b': {
      text: '1...Nf6 ile Siyah at geliştirir ve e4 karesini kontrol eder.',
      amac: 'Hint savunmalarına (Nimzo-Hint, Vezir-Hint, Kral-Hint) kapı açık tutmak; merkezi piyonla değil taşlarla kontrol etmek.',
      neden: '1...d5 hemen merkezde yer alır ama Beyaza Vezir Gambiti yapılarını seçme imkanı verir. 1...Nf6 Beyazın ikinci hamlesine göre karar vermeyi sağlar.',
      diger: [
        { move: '1...d5', text: 'Klasik yol; Vezir Gambiti Kabul/Ret yapılarına gider (Motor: +0.35).' },
        { move: '1...c6', text: 'Slav’a ya da 2.e4 ile Caro-Kann’a dönebilir (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: '2.c4 ile Beyaz d5 karesine ikinci piyonuyla baskı yapar.',
      amac: 'Merkezde geniş bir alan kazanmak ve Nc3 ile e4 ilerleyişini hazırlamak.',
      neden: 'Bu, 1.d4 hatlarının en ana yoludur; Siyaha merkezde rahat bir ...d5 bırakmamak için c-piyonu hemen devreye girer.',
      diger: [
        { move: '2.Nf3', text: 'Nimzo-Hint’e izin vermeyen bir sıra; Siyah ...g6 veya ...b6 ile cevap verir (Motor: +0.4).' },
        { move: '2.e3', text: 'Çok sakin; Colle tarzı yapılara gider (Motor: +0.2).' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah f8 filine yol açar ve d5 karesini destekler.',
      amac: '...Bb4 (Nimzo-Hint) veya ...b6 (Vezir-Hint) ile esnek bir kurulum hazırlamak.',
      neden: 'Spasski klasik yapıları seven bir oyuncuydu; 2...e6 hem Vezir Gambiti Ret’e hem de Nimzo-Hint’e geçme şansı verir.',
      diger: [
        { move: '2...g6', text: 'Kral-Hint/Grünfeld yolu; daha dinamik ve riskli (Motor: +0.35).' },
        { move: '2...c6', text: 'Slav yapısına hazırlık (Motor: +0.4).' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile Beyaz atını geliştirir ve e4 ilerleyişini destekler.',
      amac: 'e4’ü oynayıp merkezi tamamen ele geçirmek.',
      neden: '3.Nc3, Siyahın 3...Bb4 ile Nimzo-Hint’e girmesine izin verir. Petrosyan bu kapıyı açtı; Nimzo-Hint’in Rubinstein sistemine güveniyordu.',
      diger: [
        { move: '3.Nf3', text: 'Nimzo-Hint’ten kaçınır; Siyah çoğunlukla 3...b6 (Vezir-Hint) oynar (Motor: +0.4).' },
        { move: '3.g3', text: 'Katalan sistemi; Petrosyan maçta Katalan da kullandı (Motor: +0.4).' },
      ],
    },
    '3b': {
      text: '3...Bb4 Nimzo-Hint Savunmasıdır: fil c3 atını bağlar.',
      amac: 'Beyazın e4 ilerleyişini dolaylı olarak engellemek; gerekirse c3’te değişim yapıp Beyaza ikiye katlanmış piyon vermek.',
      neden: 'Nimzowitsch’in fikri: merkezi piyonlarla değil, bağlama ve baskıyla kontrol etmek. Siyah, gerektiğinde fil çiftini vermeye hazırdır.',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Ret’e geçer (Motor: +0.3).' },
        { move: '3...c5', text: 'Benoni yapılarına gider; 4.d5 ile Beyaz alan kazanır (Motor: +0.5).' },
      ],
    },
    '4w': {
      text: '4.e3 Rubinstein sistemidir: Beyaz f1 filine yol açar ve d4’ü sağlamlaştırır.',
      amac: 'Önce gelişimi tamamlamak (Bd3, Nf3 veya Ne2, O-O), sonra merkezde e4 veya vezir kanadında a3 ile planı seçmek.',
      neden: 'Rubinstein sistemi Nimzo-Hint’e karşı Beyazın en yaygın yöntemidir. 4.Qc2 veya 4.a3 kadar hırslı değildir ama sağlamdır; Petrosyan’ın riski azaltan tarzına uyar.',
      diger: [
        { move: '4.Qc2', text: 'Klasik sistem: Beyaz c3’te piyon ikilenmesini önler (Motor: +0.35).' },
        { move: '4.a3', text: 'Sämisch: Siyahı hemen değişime zorlar ama Beyaz tempo harcar (Motor: +0.2).' },
        { move: '4.Nf3', text: 'Esnek; 4...c5 veya 4...b6 ile farklı hatlara gider (Motor: +0.25).' },
      ],
    },
    '4b': {
      text: '4...O-O ile Siyah rok yapar.',
      amac: 'Şahı güvenceye alıp merkezdeki piyon yapısını (…d5 mi, …c5 mi, …b6 mı) Beyazın kurulumuna göre seçmek.',
      neden: 'Rok, Siyahın en esnek beklemesidir; Beyazın 5.Bd3 mü 5.Ne2 mi oynayacağını gördükten sonra karar verir.',
      diger: [
        { move: '4...c5', text: 'Hübner sistemi ve ana hatlara giden diğer yol (Motor: +0.3).' },
        { move: '4...b6', text: 'Fil b7’ye gelişir, e4 karesine baskı yapılır (Motor: +0.3).' },
        { move: '4...d5', text: 'Merkezi hemen tutar; çoğunlukla aynı hatlara transpoze olur (Motor: +0.3).' },
      ],
    },
    '5w': {
      text: '5.Bd3 ile fil gelişir ve h7’ye bakar.',
      amac: 'e4 karesini desteklemek ve rok için yer açmak.',
      neden: 'Ana hattın klasik sırası. 5.Ne2 ile c3’teki ikilenmeyi önlemek mümkündü ama Petrosyan normal gelişimi seçti.',
      diger: [
        { move: '5.Ne2', text: 'Rubinstein’ın asıl fikri: at c3’ü destekler, ikilenme olmaz ama gelişim yavaşlar (Motor: +0.1).' },
        { move: '5.Bd2', text: 'Sakin; Motor’a göre yaklaşık aynı değerde (+0.14).' },
      ],
    },
    '5b': {
      text: '5...c5 ile Siyah d4 piyonuna saldırır.',
      amac: 'Merkezde Beyazın d4 piyonunu sorgulamak; c-hattını açmaya hazırlanmak.',
      neden: 'Nimzo-Hint’te ...c5 ve ...d5 birlikte Siyahın merkezini oluşturur. Önce c5’i oynamak, Beyazın Ne2 gibi yolları düşünmesini zorlaştırır.',
      diger: [
        { move: '5...d5', text: 'Aynı yapılara gider; Motor biraz daha sağlam buluyor (+0.06).' },
        { move: '5...Re8', text: 'Bekleme hamlesi (Motor: +0.3).' },
      ],
    },
    '6w': {
      text: '6.Nf3 ile ikinci at gelişir.',
      amac: 'Rok yapmak ve d4/e5 karelerini kontrol etmek.',
      neden: 'Ana hattın doğal sırası; at f3’te merkezi korur ve gerektiğinde e5’e çıkabilir.',
      diger: [
        { move: '6.a3', text: 'Fili hemen sorgular (Motor: +0.15).' },
        { move: '6.Ne2', text: 'c3’ü korumaya yönelik plan (Motor: +0.13).' },
      ],
    },
    '6b': {
      text: '6...d5 ile Siyah merkezde ikinci piyonunu kurar.',
      amac: 'c4’e baskı yapmak ve gerekirse ...dxc4 ile Beyazın d3 filine tempo kazanmak.',
      neden: '...d5, Siyahın merkezde yer almasını sağlar. Beyazın c4 piyonu artık iki kez saldırı altındadır.',
      diger: [
        { move: '6...cxd4', text: 'Merkez gerginliğini erken çözer (Motor: +0.25).' },
        { move: '6...b6', text: 'Fil b7’ye; daha yavaş (Motor: +0.3).' },
      ],
    },
    '7w': {
      text: '7.O-O ile Beyaz rok yapar.',
      amac: 'Gelişimi tamamlayıp merkezde planı seçmek.',
      neden: 'Beyaz bütün kanat taşlarını geliştirdi; şimdi a3 ile fili sorgulamak ya da cxd5 ile yapıyı netleştirmek gibi seçenekler var.',
      diger: [
        { move: '7.cxd5', text: 'Yapıyı erken netleştirir (Motor: +0.05).' },
        { move: '7.Ne5', text: 'Agresif ama erken (Motor: −0.04).' },
      ],
    },
    '7b': {
      text: '7...Nc6 ile Siyah atını geliştirir ve d4’e baskıyı artırır.',
      amac: 'd4’e üçüncü kez saldırmak ve Beyazı merkezde bir karar vermeye zorlamak.',
      neden: 'Bu, ana hattın tanımlayıcı hamlesidir. 7...dxc4 veya 7...Nbd7 gibi yollar farklı yapılara götürür; Spasski en klasik yolu seçti.',
      diger: [
        { move: '7...dxc4', text: 'Önce c4’te değişim; 8.Bxc4 ile benzer pozisyonlar (Motor: +0.14).' },
        { move: '7...b6', text: 'Daha sakin; Motor biraz daha iyi buluyor (+0.1).' },
        { move: '7...cxd4', text: 'Merkezi açar; Beyaz izole piyon yapısına girer (Motor: +0.2).' },
      ],
    },
    '8w': {
      text: '8.a3 ile Beyaz b4 filini sorgular.',
      amac: 'Siyahı fil çiftini vermeye ya da fili geri çekmeye zorlamak.',
      neden: 'Ana hattın en önemli hamlesi. Fil c3’te değişirse Beyaz fil çiftini ve açık b-hattını alır; geri çekilirse Siyah tempo kaybeder.',
      diger: [
        { move: '8.cxd5', text: 'Merkezi netleştirir; Motor biraz daha iyi buluyor (+0.3).' },
        { move: '8.dxc5', text: 'Merkezi açar (Motor: +0.05).' },
      ],
    },
    '8b': {
      text: '8...Bxc3 ile Siyah atı alır ve fil çiftini verir.',
      amac: 'Beyaza c3’te ikiye katlanmış piyon vermek ve merkezi açınca bunu hedef almak.',
      neden: 'Nimzo-Hint’in temel fikridir. 8...Ba5 veya 8...cxd4 9.axb4 dxc3 gibi yollar Siyah için daha zayıf. Siyah, fil çiftine karşı yapı avantajını tercih eder.',
      diger: [
        { move: '8...Ba5', text: 'Fili korur ama Beyaz cxd5 ile merkezi açar (Motor: +0.3).' },
        { move: '8...cxd4', text: '9.axb4 dxc3 10.bxc3 ile Beyazın a-hattı ve fil çifti olur (Motor: +0.4).' },
      ],
    },
    '9w': {
      text: '9.bxc3 ile Beyaz piyonla alır.',
      amac: 'Merkezi güçlendirmek ve b-hattını açmak.',
      neden: 'Tek mantıklı alım. 9.cxd5? hemen Nxd4 ile kaybettirir (Motor: −0.3). b-hattının açılması, ikiye katlanmış piyonun telafisidir.',
      diger: [
        { move: '9.cxd5', text: '9...Nxd4 ile Siyah merkezde avantaj kazanır (Motor: −0.3).' },
      ],
    },
    '9b': {
      text: '9...dxc4 ile Siyah c4’te alır ve Beyazın d3 filini tekrar hamle yapmaya zorlar.',
      amac: 'Tempo kazanmak ve ...e5 ile merkezi açmaya hazırlanmak.',
      neden: 'Bu, ana hattın en yaygın yoludur. 9...Qc7 aynı yapıya transpoze olabilir. 9...Na5 c4’e baskı yapar ve Motor’a göre biraz daha iyi (+0.07).',
      diger: [
        { move: '9...Na5', text: 'c4’e atla baskı; Beyaz Ne5 ile cevap verir (Motor: +0.07).' },
        { move: '9...Qc7', text: 'Önce vezir; aynı hatlara gider (Motor: +0.15).' },
      ],
    },
    '10w': {
      text: '10.Bxc4 ile Beyaz piyonu geri alır.',
      amac: 'Malzemeyi eşitlemek ve fil çiftini aktif tutmak.',
      neden: 'Diğer alımlar (10.Bc2, 10.Bb1) Motor’a göre kayıp (−0.4/−0.5); fil c4’te Siyahın ...e5 planı için hedef olsa bile tek mantıklı hamle.',
      diger: [
        { move: '10.Bc2', text: 'Piyonu geri almaz; Siyah ...e5 ile rahat oynar (Motor: −0.4).' },
      ],
    },
    '10b': {
      text: '10...Qc7 ile vezir c7’ye gelir; e5 karesini destekler ve c3’e bakar.',
      amac: '...e5 ilerleyişini hazırlamak ve c4 filine baskıyı artırmak.',
      neden: 'Bu ana hattın tanımlayıcı hamlesidir. Siyah, ...e5 ile merkezi açmadan önce veziri e5’i destekleyecek bir yere koyar. Motor da en iyi hamle olarak görüyor (+0.12).',
      diger: [
        { move: '10...b6', text: 'Fil b7’ye; daha yavaş (Motor: +0.35).' },
        { move: '10...Qe7', text: 'Vezir e7’de; Beyaz Bb5 ile rahatsız eder (Motor: +0.4).' },
      ],
    },
    '11w': {
      text: '11.Bd3 ile fil d3’e döner ve e4 karesini destekler.',
      amac: 'e4 ilerleyişini hazırlamak ve fili ...e5 sonrası olası ...e4 saldırısından korumak.',
      neden: 'Teoride bu noktada Beyazın birçok seçeneği var; Siyah hepsini bilmek zorunda. 11.Bd3 ana yollardan biridir. 11.Re1 ve 11.Bb5 de denenmiştir.',
      diger: [
        { move: '11.Re1', text: 'e4’ü kale ile hazırlar (Motor: +0.19).' },
        { move: '11.Bb5', text: 'c6 atını bağlar (Motor: +0.18).' },
      ],
    },
    '11b': {
      text: '11...e5 ile Siyah merkezi açar ve d4 piyonuna saldırır.',
      amac: 'Merkezi açarak Siyah taşlarını aktifleştirmek; Beyazın merkez piyonlarını değişime zorlamak.',
      neden: 'Bu yapıda Siyahın standart planıdır: hızlı bir ...e5 ile d4’e baskı. 11...Rd8 de oynanır ve Motor’a göre aynı değerde (+0.21).',
      diger: [
        { move: '11...Rd8', text: 'Önce kale d-hattına (Motor: +0.21).' },
        { move: '11...h6', text: 'Beyaza e4-e5 imkanı verir (Motor: +0.76).' },
      ],
    },
    '12w': {
      text: '12.Qc2 ile vezir e4 karesini kontrol eder ve h7’ye bakar.',
      amac: 'e4 ilerleyişini hazırlamak ve d3 filiyle h7’ye baskı kurmak.',
      neden: 'Motor’a göre en iyi hamle (+0.3). Hemen 12.Nxe5 veya 12.dxe5 değişimleri dengeyi bozmaz (0.0) ama Beyazın şansını azaltır.',
      diger: [
        { move: '12.Nxe5', text: 'Hemen değişim; pozisyon dengeye gider (Motor: 0.00).' },
        { move: '12.dxe5', text: 'Benzer; Siyah rahat oynar (Motor: −0.04).' },
      ],
    },
    '12b': {
      text: '12...Bg4 ile Siyah fili geliştirir ve f3 atını rahatsız eder.',
      amac: 'f3 atını değişime zorlamak ve e5 baskısını azaltmak.',
      neden: 'Siyah taşlarını geliştirmek istedi; ama fil g4’te açıkta kalır ve 13.Nxe5 ile Beyaz merkezde değişim yapar. 12...Re8 Motor’a göre biraz daha iyi (+0.32).',
      diger: [
        { move: '12...Re8', text: 'Kale e-hattına; e5’i destekler (Motor: +0.32).' },
        { move: '12...h6', text: 'Bg5 ve Ng5 ihtimallerini önler (Motor: +0.35).' },
      ],
    },
    '13w': {
      text: '13.Nxe5! ile Beyaz e5 piyonunu alır ve değişimlere zorlar.',
      amac: 'Merkezdeki gerginliği kendi lehine çözmek; g4 filini açıkta bırakmak.',
      neden: 'At e5’ten g4 filine ve c6 atına saldırır. Siyah geri almazsa bir piyon eksik kalır. Değişimden sonra 15.f3 tempo kazanarak gelir. 13.dxe5 de aynı değerde (+0.38).',
      diger: [
        { move: '13.dxe5', text: 'Benzer sonuç; önce piyonla alır (Motor: +0.38).' },
        { move: '13.Ng5', text: 'h7’ye saldırı; ama 13...h6 ile püskürtülür (Motor: −0.05).' },
      ],
    },
    '13b': {
      text: '13...Nxe5 ile Siyah atı alır.',
      amac: 'Malzemeyi eşit tutmak.',
      neden: 'Zorunlu. 13...Rac8 14.Nxg4 Nxg4 sonrası Siyah bir piyon eksik kalır ve h7 zayıflar (Motor: +2.0); 13...Be6 14.Nxc6 de benzer (+2.0).',
      diger: [
        { move: '13...Rac8', text: '14.Nxg4 Nxg4 ile Beyaz bir piyon fazla (Motor: +2.0).' },
      ],
    },
    '14w': {
      text: '14.dxe5 ile Beyaz piyonla alır.',
      amac: 'Malzemeyi geri almak ve d-hattını açmak.',
      neden: 'Zorunlu. 14.f3? Nxd3 15.Qxd3 cxd4 sonrası Siyah bir taş kazanır (Motor: −3.2), çünkü e5 atı d3 filine ve g4 fili de hâlâ tehdittedir.',
      diger: [
        { move: '14.f3', text: '14...Nxd3 ile Siyah taş kazanır (Motor: −3.2).' },
      ],
    },
    '14b': {
      text: '14...Qxe5 ile vezir e5 piyonunu alır ve merkezde aktif hale gelir.',
      amac: 'Malzemeyi eşitlemek; vezirle c3 ve h2’ye baskı yapmak.',
      neden: '14...c4? 15.exf6 cxd3 16.Qxd3 ile Beyaz taş kazanır (Motor: +1.5). Vezir e5’te güzel görünür ama f3-e4 ve Bf4 gibi hamlelerle kovalanmaya açıktır.',
      diger: [
        { move: '14...c4', text: '15.exf6 ile ara hamle; Beyaz kazanır (Motor: +1.5).' },
        { move: '14...Nd7', text: 'e5’i geri almaz; Beyaz f4 ile piyonu tutar (Motor: +2.3).' },
      ],
    },
    '15w': {
      text: '15.f3 ile Beyaz g4 filini kovalar ve e4 ilerleyişini hazırlar.',
      amac: 'Fili tempo kazanarak kovmak, e4 ilerleyişini hazırlamak ve Siyahın vezir + fil ile Beyaz şahına (h2, g2) yönelik baskısını azaltmak.',
      neden: 'g4 fili Beyazın e4 hamlesini (Bxe4 sonrası ...Bf3 gibi ihtimaller) ve d1-h5 köşegenini rahatsız ediyordu; f3 hem fili kovar hem e4’ü piyonla destekler. Bedeli e3 karesinin ve g1-a7 köşegeninin hafif zayıflamasıdır. Motor 15.Re1 ve 15.a4’ü yaklaşık aynı değerde görüyor (+0.2/+0.4).',
      diger: [
        { move: '15.a4', text: 'Önce a-hattına hazırlık (Motor: +0.4).' },
        { move: '15.e4', text: '15...c4 16.Bxc4 Rac8 ile Siyah aktif oyun kurar (Motor: −0.1).' },
        { move: '15.Rb1', text: 'b-hattına baskı; ama 15...Rfd8 ile Siyah rahat (Motor: +0.1).' },
      ],
    },
    '15b': {
      text: '15...Bd7 ile fil d7’ye çekilir.',
      amac: 'Fili güvenli bir kareye koymak; c6’dan e4’e bakan bir köşegen aramak.',
      neden: 'Motor 15...Be6’yı biraz daha aktif buluyor (+0.18): fil e6’dan c4’e ve a2-g8 köşegenine bakar. 15...c4 de mümkündü (+0.3).',
      diger: [
        { move: '15...Be6', text: 'Fil e6’da daha aktif (Motor: +0.18).' },
        { move: '15...c4', text: '16.Bxc4 Rac8 ile Siyah piyon karşılığı aktiflik alır (Motor: +0.3).' },
      ],
    },
    '16w': {
      text: '16.a4 ile Beyaz a-piyonunu ilerletir.',
      amac: 'b5 karesini kontrol etmek; kaleyi a3’ten oyuna sokmak ya da fili a3’e getirmek; ileride a5 ile Siyah vezir kanadını açmak.',
      neden: 'Beyazın vezir kanadında piyon fazlası yok ama hatlar ona ait. 16.a4, Siyahın ...Bb5 gibi hamlelerini önler ve a5 planını hazırlar. 16.e4 aynı değerde.',
      diger: [
        { move: '16.e4', text: 'Merkez hemen kapatılır (Motor: +0.36).' },
        { move: '16.Rb1', text: 'b7’ye baskı (Motor: +0.26).' },
      ],
    },
    '16b': {
      text: '16...Rfe8 ile kale e-hattına gelir.',
      amac: 'e4 ilerleyişini zorlaştırmak ve e-hattındaki gerginliği artırmak.',
      neden: 'Siyah e4 karesine baskı yapmak istiyor. 16...Bc6 fili e4’e bakan köşegene koyar ve Motor’a göre aynı değerde (+0.37).',
      diger: [
        { move: '16...Bc6', text: 'Fil e4’e bakar (Motor: +0.37).' },
        { move: '16...Rad8', text: 'd-hattına kale (Motor: +0.47).' },
      ],
    },
    '17w': {
      text: '17.e4 ile Beyaz merkezi kapatır.',
      amac: 'd5 ve f5 karelerini kontrol etmek; Siyah atına merkez yollarını kapatmak; d3 filine yol açmak.',
      neden: 'e4 ile Beyazın piyonları artık merkezin sahibidir. Bunun bedeli d4 ve f4 karelerinin zayıflamasıdır; ama Beyaz bu kareleri kara kareli filiyle kontrol edecek. 17.Re1 aynı değerde (+0.38).',
      diger: [
        { move: '17.Re1', text: 'Önce kale e-hattına (Motor: +0.38).' },
        { move: '17.Ra3', text: 'Kale üçüncü yatayda (Motor: +0.36).' },
      ],
    },
    '17b': {
      text: '17...c4 ile Siyah d3 filine saldırır ve c3 piyonunu sabitler.',
      amac: 'd3 karesini Siyah taşlarına açmak; c3’ü kalıcı bir zayıflık yapmak.',
      neden: 'Aktif bir hamle ama bedeli büyük: d4 karesi artık Beyaz filine kalıcı bir yuva olur ve c4 piyonu ileride hedef haline gelir. 17...a6 veya 17...Bc6 aynı değerde ama yapıyı bozmaz.',
      diger: [
        { move: '17...a6', text: 'Bekleme; c5’i tutar (Motor: +0.38).' },
        { move: '17...Bc6', text: 'Fil e4’e baskı (Motor: +0.48).' },
      ],
    },
    '18w': {
      text: '18.Be2 ile fil e2’ye çekilir.',
      amac: 'Fili güvenli tutmak ve c4 piyonunu ileride almaya hazırlanmak.',
      neden: '18.Bxc4?? Qc5+ ile şah çekerek c4 filine saldırır ve fil düşer (Motor: −4.2). 18.Rd1 de cxd3 ile kaybettirir. Be2 tek doğru çekilme.',
      diger: [
        { move: '18.Bxc4', text: '18...Qc5+ ile fil düşer (Motor: −4.2).' },
      ],
    },
    '18b': {
      text: '18...Be6 ile fil e6’ya gelir; c4 piyonunu destekler.',
      amac: 'c4’ü korumak ve a2-g8 köşegenini kontrol etmek.',
      neden: 'Motor 18...Nd5’i biraz daha iyi buluyor (+0.48): at d5’e çıkar, 19.exd5? Qxe2 ile Siyah iyi oynar, 19.Bd2 Nf4 ile at aktifleşir. Oyundaki Be6 daha pasif (+0.73).',
      diger: [
        { move: '18...Nd5', text: 'At merkeze; 19.Bd2 Nf4 ile aktif (Motor: +0.48).' },
        { move: '18...Qc5+', text: '19.Kh1 sonrası benzer (Motor: +0.5).' },
      ],
    },
    '19w': {
      text: '19.Be3 ile fil e3’e gelişir; d4 karesine bakar.',
      amac: 'Fili d4’e götürmek ve a7 piyonuna baskı yapmak.',
      neden: 'Motor’a göre en iyi hamle (+0.85). Fil e3’te vezir saldırılarını önler ve d4’e hazırlık yapar.',
      diger: [
        { move: '19.Rd1', text: 'd-hattına kale (Motor: +0.58).' },
        { move: '19.Bd1', text: 'Fil b3’e dönüş hazırlığı (Motor: +0.56).' },
      ],
    },
    '19b': {
      text: '19...Qc7 ile vezir c7’ye çekilir.',
      amac: 'Veziri Bf4 ve Bd4 saldırılarından kaçırmak; h2’ye bakan köşegeni tutmak.',
      neden: 'Vezir e5’te fil tarafından kovalanacaktı. 19...Nd7 da aynı değerde (+0.97).',
      diger: [
        { move: '19...Nd7', text: 'At oyuna; e5’i destekler (Motor: +0.97).' },
        { move: '19...b6', text: 'Vezir kanadını korur (Motor: +1.0).' },
      ],
    },
    '20w': {
      text: '20.Rab1 ile kale açık b-hattına gelir.',
      amac: 'b7 piyonuna baskı yapmak ve b-hattını almak.',
      neden: 'b-hattı Beyazın ikiye katlanmış piyonunun telafisidir. Motor 20.Rfd1’i biraz daha iyi buluyor (+0.96): d-hattını almak da mümkündü. Petrosyan vezir kanadına yoğunlaştı.',
      diger: [
        { move: '20.Rfd1', text: 'd-hattına kale (Motor: +0.96).' },
        { move: '20.Qb2', text: 'Vezir b-hattına (Motor: +0.91).' },
      ],
    },
    '20b': {
      text: '20...Nd7 ile at c5 ve e5 karelerine yönelir.',
      amac: 'Atı c5’e veya e5’e, oradan d3’e getirmek.',
      neden: 'Motor’a göre en iyi hamle (+0.6). At d7’den b6’yı da korur.',
      diger: [
        { move: '20...b6', text: 'Önce b6 (Motor: +0.66).' },
        { move: '20...h6', text: 'Kaçış karesi (Motor: +0.92).' },
      ],
    },
    '21w': {
      text: '21.Rb5! ile kale beşinci yataya çıkar.',
      amac: 'c5 ve e5 karelerini kontrol etmek; b7 piyonuna baskı yapmak.',
      neden: 'Kale b5’te Siyah atının en iyi karelerini kapatır ve b-hattını tutar. Motor’a göre en iyi hamle (+0.67).',
      diger: [
        { move: '21.Bd1', text: 'Fil manevrası (Motor: +0.58).' },
        { move: '21.Qb2', text: 'Vezir b-hattına (Motor: +0.57).' },
      ],
    },
    '21b': {
      text: '21...b6 ile Siyah b7’yi korur.',
      amac: 'b-hattını kapatmak ve c5 karesini destekleme imkanı aramak.',
      neden: 'Zorunluya yakın; b7 iki kez saldırı altındaydı. Ama b6 ileride a5 ile hedef olacak.',
      diger: [
        { move: '21...h6', text: 'Kaçış karesi; ama b7 hâlâ zayıf (Motor: +0.75).' },
        { move: '21...a6', text: 'Kaleyi kovar; 22.Rb4 ile kale kalır (Motor: +0.86).' },
      ],
    },
    '22w': {
      text: '22.Rfb1 ile ikinci kale b-hattına gelir.',
      amac: 'Kaleleri ikilemek ve b6’ya baskıyı artırmak.',
      neden: 'Motor’a göre en iyi hamlelerden biri (+0.54). b-hattında iki kale Siyahı pasif savunmaya zorlar.',
      diger: [
        { move: '22.Bd4', text: 'Fil d4’e (Motor: +0.55).' },
        { move: '22.f4', text: 'Şah kanadında alan; ama e4 zayıflar (Motor: +0.42).' },
      ],
    },
    '22b': {
      text: '22...Qc6 ile vezir b5 kalesine ve e4’e bakar.',
      amac: 'Kaleyi b5’ten kovmak ve e4 piyonuna baskı yapmak.',
      neden: 'Motor 22...Rab8’i daha iyi buluyor (+0.56); vezir c6’da a4 ve b5 yapılarına karşı kırılgan. Oyundaki hamle +1.0.',
      diger: [
        { move: '22...Rab8', text: 'b-hattını savunur (Motor: +0.56).' },
        { move: '22...Nc5', text: '23.Bxc5 bxc5 ile yapı bozulur (Motor: +0.6).' },
      ],
    },
    '23w': {
      text: '23.Bd4 ile fil merkezin kilit karesine yerleşir.',
      amac: 'g7 ve b6’ya bakmak; d4 karesini Siyahın atına kapatmak.',
      neden: 'Fil d4’te 17...c4’ün verdiği kareyi kullanır. Motor 23.Qd2’yi biraz daha iyi buluyor (+0.89) ama fark küçük.',
      diger: [
        { move: '23.Qd2', text: 'Vezir d-hattına (Motor: +0.89).' },
        { move: '23.Bd1', text: 'Fil manevrası (Motor: +0.84).' },
      ],
    },
    '23b': {
      text: '23...f6 ile Siyah e5 karesini tutar.',
      amac: 'g7’yi d4 filinden korumak; atı e5’e getirmeye hazırlanmak.',
      neden: 'f6 g7’yi korur ama e6 filinin önünü kapatır. 23...Nc5 24.Bxc5 bxc5 fil çiftini kırar ve Motor’a göre daha iyi (+0.59).',
      diger: [
        { move: '23...Nc5', text: 'Fil çiftini kırar (Motor: +0.59).' },
        { move: '23...h6', text: 'Kaçış karesi (Motor: +0.67).' },
      ],
    },
    '24w': {
      text: '24.Qa2 ile vezir a2’ye gelir; c4 piyonuna saldırır ve arkasında a2-g8 köşegenine (e6 fili ve g8 şahı) x-ışını kurar.',
      amac: 'c4’e baskıyı artırmak (Be2 ile birlikte iki saldırı) ve c4 düşerse köşegeni açarak e6 filini g8 şahına bağlamak; ayrıca a4-a5 ilerleyişini arkadan desteklemek.',
      neden: '23...f6 Siyah şahının a2-g8 köşegenini zayıflattı; Petrosyan bunu hemen kullandı. c4 piyonu açılırsa vezirin baskısı g8’e kadar uzanır ve e6 fili hareket edemez hale gelir. Motor 24.f4 (+0.9) ve 24.Bd1’i (+0.86) çok az farkla önde görüyor; ama Qa2 planla en uyumlu hamle.',
      diger: [
        { move: '24.f4', text: 'Şah kanadında alan kazanır ve e5 karesini Siyah atına kapatır, ama e4 piyonu geride yalnız kalır (Motor: +0.9).' },
        { move: '24.Bd1', text: 'Fil b3’e dönüp c4’e baskı yapmak için yola çıkar (Motor: +0.86).' },
      ],
    },
    '24b': {
      text: '24...Kh8 ile şah köşeye gider ve a2-g8 köşegeninden çıkar.',
      amac: 'Önleyici hamle: c4 bir gün düşer veya açılırsa e6 filinin şaha bağlanmasını baştan engellemek.',
      neden: 'Şah g8’de kaldıkça e6 fili c4 ile g8 arasında sıkışık bir savunucu olurdu. Şah h8’de güvende görünür, ama arka yatay zayıflığı yaratır; Siyah sonraki hamlede ...h6 ile buna karşı önlem alacak.',
      diger: [
        { move: '24...Bf7', text: 'Fil kendini köşegenden çeker; aynı değerde (Motor: +0.75).' },
        { move: '24...h6', text: 'Önce kaçış karesi; şah köşegende kalır ama Motor’a göre o da oynanabilir (+0.8).' },
      ],
    },
    '25w': {
      text: '25.Bf1 ile e2 fili f1’e çekilir; buradan c4 piyonuna baskı yapar ve şahın yakınında kalır.',
      amac: 'c4’ü ikinci kez hedef almak (vezir a2 ve fil f1) ve fili Siyahın ...Nc5-d3 gibi manevralarından korumak.',
      neden: 'Petrosyan’ın tipik “önce güvenlik” hamlesi: fil f1’de hem savunur hem saldırır. Motor 25.h3 ve 25.a5’i biraz daha keskin buluyor (+0.81 karşı +0.56), çünkü onlar vezir kanadındaki baskıyı hemen artırır.',
      diger: [
        { move: '25.a5', text: 'b6’ya hemen saldırır; 25...a6 26.Rxb6 Nxb6 27.axb6 karmaşası çıkar (Motor: +0.81).' },
        { move: '25.h3', text: 'Önce kaçış karesi açar, planı sonraya bırakır (Motor: +0.81).' },
      ],
    },
    '25b': {
      text: '25...h6 ile Siyah şahına h7 kaçış karesini açar.',
      amac: 'Arka yatay matı ihtimallerini ortadan kaldırmak; ileride ...Kh7 ile şahı g8 karesinden uzak tutmak.',
      neden: 'Şah h8’de iken arka yatay zayıftır ve b-hattındaki Beyaz kaleler b8’e gelebilir. Motor 25...Reb8’i biraz daha iyi buluyor (+0.58): kale b-hattına önce gelir, h6 sonra da oynanabilir.',
      diger: [
        { move: '25...Reb8', text: 'b-hattına hemen karşı çıkar (Motor: +0.58).' },
        { move: '25...Bg8', text: 'Fil g8’de şahı ve a2-g8 köşegenini korur (Motor: +0.62).' },
      ],
    },
    '26w': {
      text: '26.h3 ile Beyaz da şahına kaçış karesi açar.',
      amac: 'Arka yatayı güvenceye almak; b-hattındaki kaleleri g1 şahını düşünmeden kullanabilmek.',
      neden: 'Beyazın kaleleri b-hattında meşgul; arka yatayda bir ...Qc5+ ve ...Re1 kombinasyonu riskli olabilirdi. h3 bunu önler. Ama ileride görüleceği gibi bu piyon, Spasski’nin 34...Bxh3 fedasına da hedef olacak. 26.h4 (+0.64) aynı değerde.',
      diger: [
        { move: '26.h4', text: 'Kaçış karesi ve şah kanadında alan; g4-g5 fikri (Motor: +0.64).' },
        { move: '26.Be2', text: 'Fil e2’ye geri; daha pasif (Motor: +0.51).' },
      ],
    },
    '26b': {
      text: '26...Rab8 ile a8 kalesi b-hattına gelir ve b6’yı destekler.',
      amac: 'b-hattında Beyazın kalelerine karşı çıkmak ve b6’yı korumak.',
      neden: 'Beyazın a5 planı b6’yı hedef alıyor; Siyah önceden destek koydu. Ama kale a8’den ayrılınca a-hattı açıldığında Beyaz bu hattı alabilir. Motor 26...Qc7’yi biraz daha iyi buluyor (+0.61).',
      diger: [
        { move: '26...Qc7', text: 'Vezir h2-b8 köşegenine döner ve b6’yı korur (Motor: +0.61).' },
        { move: '26...Reb8', text: 'Diğer kale ile; a8 kalesi a-hattında kalır (Motor: +0.66).' },
      ],
    },
    '27w': {
      text: '27.a5 ile Beyaz piyonunu ilerletir ve b6’ya saldırır.',
      amac: 'a-hattını açmak ve b6’yı tecrit edip kazanmak.',
      neden: 'Planın kilit hamlesi: b6 ancak a5 ile sorgulanabilir. Motor’a göre en iyi hamle (+0.66); 27.h4 veya 27.R5b2 gibi bekleme hamleleri yalnızca +0.47.',
      diger: [
        { move: '27.h4', text: 'Bekleme; Siyah ...a6 ile vezir kanadını kapatır (Motor: +0.47).' },
        { move: '27.R5b2', text: 'Kale geri çekilir; baskı azalır (Motor: +0.46).' },
      ],
    },
    '27b': {
      text: '27...Rb7 ile kale b7’de b6’yı destekler.',
      amac: 'b6’yı üç kez korumak; a-hattı açılınca kaleyi a7’ye getirebilmek.',
      neden: 'Kale b7’de pasif bir savunucu olur. Motor 27...Qc7’yi daha iyi buluyor (+0.66 karşı +1.07): vezir hem b6’yı korur hem de h2 köşegenini tutar.',
      diger: [
        { move: '27...Qc7', text: 'Vezir b6’yı korur, kale b8’de aktif kalır (Motor: +0.66).' },
        { move: '27...bxa5', text: 'a-piyonunu alır ama c-hattındaki piyonlar zayıflar ve Beyaz kaleleri b7’ye girer.' },
      ],
    },
    '28w': {
      text: '28.axb6 ile Beyaz a5 piyonunu b6’da değişir.',
      amac: 'a-hattını açmak ve b6’yı tek başına bırakmak.',
      neden: 'Değişimden sonra Siyahın vezir kanadında tek bir piyon (b6) kalır ve iki kale ile vezir ona bakar. 28.h4 aynı değerde (+1.09); Petrosyan yapıyı hemen netleştirdi.',
      diger: [
        { move: '28.h4', text: 'Gerginliği korur (Motor: +1.09).' },
        { move: '28.R5b4', text: 'Kale b4’e geri; c4’e baskı (Motor: +0.95).' },
      ],
    },
    '28b': {
      text: '28...axb6 ile Siyah piyonla geri alır.',
      amac: 'Malzemeyi eşit tutmak.',
      neden: 'Zorunlu: 28...Kh7 veya 28...Bg8 gibi hamlelerle Siyah 29.R5b4 ve Nxb6’dan sonra bir piyon eksik kalır (Motor: +1.6). Artık b6 yalnız bir piyon.',
    },
    '29w': {
      text: '29.Qf2 ile vezir a2’den f2’ye geçer; d4 filinin arkasından g1-a7 köşegeni üzerinden b6’ya bakar.',
      amac: 'b6’ya bir saldırı daha eklemek ve şahı korumak.',
      neden: 'b6 artık d4 fili ve b-hattındaki kaleler tarafından saldırı altında; vezir de katılır. Motor 29.g4’ü daha iyi buluyor (+1.17): şah kanadında alan kazanmak Siyahın taşlarını iyice sıkıştırırdı.',
      diger: [
        { move: '29.g4', text: 'Şah kanadında alan; Siyahın h-piyonunu sabitler (Motor: +1.17).' },
        { move: '29.h4', text: 'Benzer fikir (Motor: +0.99).' },
      ],
    },
    '29b': {
      text: '29...Ra8 ile e8 kalesi açık a-hattına geçer.',
      amac: 'a-hattını ele geçirip Beyazın ikinci yatayına sızmak.',
      neden: 'Siyah pasif savunma yerine karşı oyun arar. Motor’a göre en iyi hamle (+0.69); 29...Rbb8 veya 29...Bf7 biraz daha zayıf.',
      diger: [
        { move: '29...Rbb8', text: 'b-hattını tutar (Motor: +0.88).' },
        { move: '29...Bf7', text: 'Fil savunmada (Motor: +0.91).' },
      ],
    },
    '30w': {
      text: '30.Qb2 ile vezir b-hattına gelir ve b6’ya üçüncü kez saldırır.',
      amac: 'b6’yı kazanmak için baskıyı son noktaya çıkarmak.',
      neden: 'Motor 30.Qe3’ü daha iyi buluyor (+0.82 karşı +0.46): vezir e3’ten hem b6’ya hem de a-hattı girişlerine bakar. Qb2’den sonra Siyah ...Ra2 ile vezire saldırma imkanı bulur.',
      diger: [
        { move: '30.Qe3', text: 'b6 ve h6’ya bakar; ...Ra3 girişini karşılar (Motor: +0.82).' },
        { move: '30.Be2', text: 'Fil d1’e yolda (Motor: +0.48).' },
      ],
    },
    '30b': {
      text: '30...Rba7 ile kaleler a-hattında ikilenir.',
      amac: 'b6’yı bırakıp a2’ye girmek; Beyazın vezirini ve ikinci yatayını tehdit etmek.',
      neden: 'Siyah b6’nın düşeceğini kabul etti ve aktiflik peşine düştü. 30...Bg8 veya 30...Bf7 Motor’a göre aynı değerde (+0.33).',
      diger: [
        { move: '30...Bg8', text: 'Fil g8’de şahı korur (Motor: +0.33).' },
        { move: '30...Kh7', text: 'Şah h7’ye (Motor: +0.38).' },
      ],
    },
    '31w': {
      text: '31.Bxb6 ile Beyaz b6 piyonunu fil ile alır.',
      amac: 'Bir piyon kazanmak ve vezir kanadında geçer piyon yaratma şansı elde etmek.',
      neden: 'Uzun manevraların ödülü. 31...Nxb6? 32.Rxb6 Qc5+ 33.Qf2 ile Beyaz kazanır (Motor: +1.1). Motor’a göre en iyi hamle (+0.47); 31.Qc1 sadece +0.25.',
      diger: [
        { move: '31.Qc1', text: 'Piyonu almadan bekler (Motor: +0.25).' },
      ],
    },
    '31b': {
      text: '31...Ra2 ile kale ikinci yataya girer ve b2’deki vezire saldırır.',
      amac: 'Tempo kazanarak Beyazın ikinci yatayına yerleşmek.',
      neden: 'Motor’a göre en iyi hamle (+0.42). 31...Nxb6? 32.Rxb6 kaybettirir; 31...Ra3 de mümkündü (+0.62).',
      diger: [
        { move: '31...Ra3', text: 'Kale c3’e saldırır (Motor: +0.62).' },
        { move: '31...Nxb6', text: '32.Rxb6 Qc5+ 33.Qf2 ile Beyaz kazanır (Motor: +1.1).' },
      ],
    },
    '32w': {
      text: '32.Qb4 ile vezir b4’e kaçar; e7 karesine ve c4 piyonuna bakar.',
      amac: 'Veziri kurtarırken ...Qe7 ile Siyah taşlarının arkasına geçme hazırlığı yapmak.',
      neden: 'Tek iyi hamle (+0.44). 32.Bf2?? Rxb2 veziri kaybettirir (Motor: −4.0); 32.Qc1? Rb8 ile b6 fili düşer (−3.2).',
      diger: [
        { move: '32.Bf2', text: '32...Rxb2 ile vezir gider (Motor: −4.0).' },
        { move: '32.Qc1', text: '32...Rb8 ile b6 fili düşer (Motor: −3.2).' },
      ],
    },
    '32b': {
      text: '32...Rc2? ile kale c2’ye gelir; c3 ve f2 karelerine bakar.',
      amac: 'f2 ve h2’ye saldırı hazırlamak; vezir ve fil ile Beyaz şahına karşı oyun kurmak.',
      neden: 'Oyunun asıl hatası. Motor 32...R2a4!’ü öneriyor: vezir kovalanır, 33.Qe7 Rb8 34.R5b2 Raa8 ile Siyah b6 filini rahatsız eder ve denge korunur (Motor: 0.00/+0.18). Oyundaki hamle +1.9; Beyaz şimdi 33.Bf2 ile şahını sağlamlaştırır.',
      diger: [
        { move: '32...R2a4', text: 'Veziri kovar; 33.Qe7 Rb8 ile Siyah b6’yı hedef alır (Motor: 0.00).' },
        { move: '32...R8a3', text: 'Kale c3’e saldırır; 33.Bd4 Rb3 ile değişim (Motor: +0.25).' },
      ],
    },
    '33w': {
      text: '33.Bf2 ile fil f2’ye çekilir; şahı korur ve g3’e bakar.',
      amac: 'c2 kalesinin f2’ye saldırısını önlemek ve fili g3’e getirip Siyahın veziri c7’ye geldiğinde h2-b8 köşegenini kapatmak.',
      neden: 'c2 kalesi f2 ve g2’ye bakıyor, vezir de ...Qc7 ile h2’ye gelmeye hazırlanıyordu; fil f2’de şahın önünü kapatır ve gerekirse g3’e geçer. Motor 33.Bd4’ü daha iyi buluyor (+2.13 karşı +1.42), çünkü fil d4’te f6’ya da bakar; ama Bf2 de sağlam bir avantaj korur.',
      diger: [
        { move: '33.Bd4', text: 'Fil merkezde; 33...Bxh3 34.Rb7 ile Beyaz kazanır (Motor: +2.13).' },
        { move: '33.Be3', text: 'h6’ya bakar (Motor: +1.18).' },
      ],
    },
    '33b': {
      text: '33...Qc7 ile vezir c7’ye gelir; h2-b8 köşegenini alır.',
      amac: '...Qh2+ ve ...Bxh3 ile Beyaz şahına saldırı hazırlamak.',
      neden: 'Bu hamle Beyazın 34.Qe7!’sine izin verir. Motor 33...Raa2’yi (+1.17) veya 33...Ne5’i (+1.59) öneriyor: kaleler ikinci yatayda ikilenir veya at d3’e doğru ilerler.',
      diger: [
        { move: '33...Raa2', text: 'Kaleler ikinci yatayda; 34.Bg3 Kh7 ile Siyah direnir (Motor: +1.17).' },
        { move: '33...Ne5', text: 'At d3’e yönelir; 34.Bd4 Qc7 sonrası (Motor: +1.59).' },
      ],
    },
    '34w': {
      text: '34.Qe7! ile vezir yedinci yataya girer; d7 atına ve e6 filine aynı anda saldırır.',
      amac: 'Siyah taşlarının arkasına geçmek ve malzeme kazanmak ya da şaha saldırmak.',
      neden: 'Motor’a göre en iyi hamle (+2.78); 34.Rd1 veya 34.Rb7 yalnızca +1.6. Siyah iki taşı birden koruyamaz, ...Qc6 ile d7’yi korusa bile 35.Bd4 ile baskı sürer.',
      diger: [
        { move: '34.Rd1', text: 'd7 atına saldırır; 34...Ne5 ile Siyah direnir (Motor: +1.59).' },
        { move: '34.Rb7', text: 'Vezire saldırır; 34...Qe5 ile Siyah karşılık verir (Motor: +1.56).' },
      ],
    },
    '34b': {
      text: '34...Bxh3 ile Spasski fili h3’te feda eder.',
      amac: 'Beyaz şahını açmak; ...Rxf2 ve ...Qh2+ ile karşı saldırı aramak.',
      neden: 'Pozisyon zaten kaybedilmiş; derin analizde Motor bu fedayı 34...Qc6 ile aynı değerde buluyor (ikisi de yaklaşık +2.9). Spasski pratik şans aradı: Beyaz şahına bir saldırı her zaman hata yapma ihtimali yaratır.',
      diger: [
        { move: '34...Qc6', text: 'd7’yi korur; 35.Bd4 Rca2 36.Rb7 ile Beyaz baskıyı sürdürür (Motor: +2.87).' },
        { move: '34...Ra6', text: 'e6 filini korur; 35.Rb7 ile vezir değişimi zorlanır (Motor: +3.07).' },
      ],
    },
    '35w': {
      text: '35.gxh3 ile Beyaz fili alır.',
      amac: 'Fazla taşı almak.',
      neden: 'En iyi hamle (+2.99). 35.e5 veya 35.Rh5 gibi ara hamleler de kazanır ama fazla taş almak daha net.',
      diger: [
        { move: '35.e5', text: 'f6’yı açar ama Siyah fili geri alır (Motor: +2.74).' },
      ],
    },
    '35b': {
      text: '35...Rxf2 ile kale f2 filini alır.',
      amac: 'Beyaz şahının etrafını açmak ve ...Qh2+ ile şah çekmek.',
      neden: 'Saldırının devamı. 35...Rd2 Motor’a göre aynı değerde (+4.26); ama Siyah en az bir taşı geri almak istedi.',
      diger: [
        { move: '35...Rd2', text: 'd7’yi korur, ama Beyaz 36.Rb7 ile baskıyı artırır (Motor: +4.26).' },
      ],
    },
    '36w': {
      text: '36.Kxf2 ile Beyaz şahla kaleyi geri alır; Beyaz artık kabaca bir kale fazlasıyla oynuyor (Beyaz: vezir, iki kale, fil; Siyah: vezir, kale, at; piyonlar 4’e 4).',
      amac: 'Malzeme üstünlüğünü kesinleştirmek ve şahı, ...Qh2+ şahından sonra g2’de araya girecek bir fil ile korumak.',
      neden: 'Tek iyi hamle (+4.39). Önce 36.Rb8+? Rxb8 37.Rxb8+ Qxb8 38.Kxf2 sonrası Siyah vezirle Beyazın b-hattındaki gücünü yok eder ve oyun tersine döner (Motor: −3.1); 36.e5? de −4.5. Şahla almak riskli görünür ama Beyazın Bg2 savunması hazırdır.',
      diger: [
        { move: '36.Rb8+', text: '36...Rxb8 37.Rxb8+ Qxb8 ve Siyah vezir ile kazanan taraf olur (Motor: −3.1).' },
        { move: '36.e5', text: 'f6’yı açmaya çalışır ama 36...Raa2 ile Siyah kaleleri ikilenir (Motor: −4.5).' },
      ],
    },
    '36b': {
      text: '36...Qh2+ ile vezir h2’den şah çeker.',
      amac: 'Beyaz şahını açık alana çekmek; at da ...Ne5 ile katılınca d3 ve f3’te çatallar aramak.',
      neden: 'Saldırının mantıklı devamı; vezir h2’de g2 ve g1 karelerini kontrol eder. 36...Ra2+ 37.R1b2 Qh2+ benzer (+4.37); 36...Kh7 ise 37.e5 ile Beyaza zaman verir (+5.05).',
      diger: [
        { move: '36...Ra2+', text: 'Önce kale ile şah; 37.R1b2 Rxb2+ 38.Rxb2 ile kaleler değişir (Motor: +4.37).' },
        { move: '36...Kh7', text: 'Şahı güvenceye alır ama tempo kaybeder (Motor: +5.05).' },
      ],
    },
    '37w': {
      text: '37.Bg2 ile f1 fili g2’de araya girer ve şahı korur.',
      amac: 'Şahı f2’de güvende tutmak; g2 filiyle h3 ve f3 karelerini de korumak.',
      neden: 'En iyi hamle (+4.37). 37.Ke1? Ne5 38.Be2 Qg1+ 39.Kd2 Ra2+ ile Siyah şah çekmeye devam eder ve denge kurar (Motor: −0.3); 37.Ke3 Qg1+ 38.Kd2 de Siyaha şans verir (+3.5). Fil g2’de olduğu sürece Beyaz şahı rahattır.',
      diger: [
        { move: '37.Ke1', text: '37...Ne5 38.Be2 Qg1+ ile Siyah karşı saldırı kurar (Motor: −0.3).' },
        { move: '37.Ke3', text: '37...Qg1+ 38.Kd2 ile şah merkeze kaçar ama açıkta kalır (Motor: +3.5).' },
      ],
    },
    '37b': {
      text: '37...Ne5 ile at e5’e gelir; d3 ve f3 karelerine bakar.',
      amac: '...Nd3+ veya ...Nxf3 ile Beyaz şahına ve kalelerine çatal kurmak.',
      neden: 'Motor’a göre en iyi hamle (+4.48). Siyahın tek şansı atı saldırıya katmak; at e5’ten aynı zamanda Beyazın b5 kalesine de yol bulur. 37...Ra2+ de aynı değerde.',
      diger: [
        { move: '37...Ra2+', text: '38.R5b2 Rxb2+ 39.Rxb2 ile kaleler değişir (Motor: +4.48).' },
        { move: '37...Nf8', text: 'At savunmaya; 38.Qb7 ile Beyaz baskı yapar (Motor: +4.57).' },
      ],
    },
    '38w': {
      text: '38.Rb8+ ile Beyaz kale ile şah çeker ve kale değişimine zorlar.',
      amac: 'Siyahın a8 kalesini değişmek; Siyahın arka yatayını açmak ve vezir + kale ile mat ağı kurmak.',
      neden: 'En iyi hamle (+4.55). Değişimden sonra Siyah şahı yalnız kalır, kalan Beyaz kalesi d8’e gelir. 38.Kf1 Nd3 ile Siyah saldırıyı sürdürür (+3.32).',
      diger: [
        { move: '38.Kf1', text: '38...Nd3 39.Qb7 Re8 ile Siyah aktif (Motor: +3.32).' },
        { move: '38.Ra5', text: '38...Nd3+ ile Siyah şah çeker (Motor: +3.19).' },
      ],
    },
    '38b': {
      text: '38...Rxb8 ile Siyah kaleyi alır.',
      amac: 'Malzemeyi eşit tutmak.',
      neden: 'Zorunlu; 38...Kh7? 39.Rxa8 ile Beyaz bir kale fazla kalır (Motor: +8.0).',
    },
    '39w': {
      text: '39.Rxb8+ ile Beyaz kaleyi geri alır ve şah çeker.',
      amac: 'Malzemeyi geri almak ve şahı h7’ye zorlamak.',
      neden: 'Zorunlu; 39.Qxe5? Qxe5 Siyaha geçer (Motor: −5.8).',
    },
    '39b': {
      text: '39...Kh7 ile şah h7’ye kaçar.',
      amac: 'Şahtan çıkmak.',
      neden: 'Tek yasal hamle; şah h7’de g6 ve g8’e bakar.',
    },
    '40w': {
      text: '40.Rd8 ile kale d8’e gelir; g8 karesini destekler.',
      amac: 'Vezirin g8’e (veya f8’e) gelip mat etmesini hazırlamak.',
      neden: 'En iyi hamle (+4.51). Kale d8’den g8’e kadar arka yatayı kontrol eder. 40.Rb1 Nd3+ 41.Kf1 Nf4 ile Siyah şans bulur (+3.14).',
      diger: [
        { move: '40.Rb1', text: '40...Nd3+ ile at aktifleşir (Motor: +3.14).' },
        { move: '40.Kf1', text: '40...Qf4 ile Siyah şah çekmeye devam eder (Motor: +1.78).' },
      ],
    },
    '40b': {
      text: '40...Ng6 ile at g6’ya döner ve e7 vezirine saldırır.',
      amac: 'Veziri kovalamak ve ...Nf4 ile g2 filine saldırmak.',
      neden: 'Motor 40...Nd3+’ü biraz daha iyi buluyor (+4.63): 41.Rxd3 cxd3 ile kale atı alır. Ng6 sonrası 41.Qe6 kesin kazanır.',
      diger: [
        { move: '40...Nd3+', text: '41.Rxd3 cxd3 ile kale atı alır (Motor: +4.63).' },
        { move: '40...h5', text: 'Kaçış karesi; 41.Qe6 Nd3+ 42.Rxd3 (Motor: +4.67).' },
      ],
    },
    '41w': {
      text: '41.Qe6! ile vezir e6’ya gelir ve Qg8 mat tehdidi kurar.',
      amac: 'g8’de mat: vezir g8’e gelir, d8 kalesi onu destekler, h7 şahının kaçacak karesi yoktur.',
      neden: 'Siyahın tek savunması 41...Qxg2+ 42.Kxg2 Nf4+ 43.Kg3 Nxe6, ama o zaman Beyaz kale ile at karşısında kazanılmış bir oyunda kalır (Motor: +4.9). 41...Nf4 42.Qf5+ ile de çöker. Spasski terk etti.',
      diger: [
        { move: '41.Qd7', text: 'Aynı fikir; Motor’a göre biraz daha iyi (+5.1).' },
        { move: '41.Qd6', text: '41...Nf4 ile Siyah karşı saldırı kurar (Motor: +1.73).' },
      ],
    },
  },
  qa: [
    { q: 'Bu oyun maçın gidişatında neden önemliydi?', a: 'Spasski 19. oyunu kazanarak skoru 9½–9½’e eşitlemişti. Petrosyan bu 20. oyunu kazanıp skoru 10½–9½ yaptı, 21. oyun berabere bitti ve 22. oyunu da kazanarak 12 puana ulaştı; bu, unvanını korumasına yetti. Maç 12½–11½ sona erdi.' },
    { q: 'Siyah neden 8...Bxc3 ile fil çiftini verdi?', a: 'Nimzo-Hint’in temel fikri budur: Siyah fil çiftini vererek Beyaza c3’te ikiye katlanmış bir piyon verir ve merkezi açınca bunu hedef alır. 8...Ba5 veya 8...cxd4 Motor’a göre biraz daha zayıf (+0.3/+0.4). Sorun, Siyahın ...e5 sonrası yapının Beyazın fillerine yaramasıydı.' },
    { q: '13.Nxe5 neden güçlüydü?', a: 'At e5 piyonunu alırken hem g4 filine hem c6 atına saldırır. Siyah geri almazsa bir piyon eksik kalır (Motor: +2.0). 13...Nxe5 14.dxe5 Qxe5 sonrası merkez piyonsuz kalır ve 15.f3 g4 filini tempo kazanarak kovar; fil çifti açık pozisyonda değerlenir.' },
    { q: 'Siyah neden 17...c4 oynadı ve bunun bedeli neydi?', a: '17...c4 d3 filine saldırdı ve c3 piyonunu sabitledi. Ama bu hamle d4 karesini kalıcı olarak Beyaza bıraktı (23.Bd4) ve c4 piyonu bir hedef oldu (25.Bf1). 17...a6 veya 17...Bc6 Motor’a göre aynı değerde ama yapıyı bozmuyor.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Üç kaynaktan: fil çifti (d4 ve f1’de güvenli ve uzun menzilli), açık b-hattı (21.Rb5 ve 22.Rfb1 ile kaleler ikilendi) ve Siyahın b6’daki zayıf piyonu. a4-a5 ile b6 tecrit edildi ve 31.Bxb6 ile düştü.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En net an 32. hamle: 32...R2a4! 33.Qe7 Rb8 ile Siyah b6 filini rahatsız edip dengeye yakın kalırdı (Motor: 0.00). Oyundaki 32...Rc2? +1.9 verdi. 33...Raa2 de (+1.17) 33...Qc7’den (+2.25) daha dirençliydi.' },
    { q: '34...Bxh3 fedası bir hata mıydı?', a: 'Derin analizde Motor fedayı 34...Qc6 ile aynı değerde buluyor (ikisi de yaklaşık +2.9). Pozisyon 34.Qe7!’den sonra zaten kaybedilmişti; Spasski pratik şans aradı. 37.Bg2 ile Beyaz şahı güvenceye alındı ve saldırı söndü.' },
    { q: 'Neden 36.Rb8+ değil de 36.Kxf2?', a: '36.Rb8+? Rxb8 37.Rxb8+ Qxb8 38.Kxf2 sonrası Siyah vezir ile b-hattını alır ve oyun tersine döner (Motor: −3.1). 36.Kxf2 ile Beyaz önce malzemeyi aldı, sonra 37.Bg2 ile şahını korudu ve kale değişimini doğru anda yaptı (38.Rb8+).' },
    { q: '41.Qe6’dan sonra Siyah neden terk etti?', a: 'Beyaz Qg8 mat tehdidi kuruyor: vezir g8’e gelir, d8 kalesi destekler, h7 şahının kaçacak yeri yok. 41...Qxg2+ 42.Kxg2 Nf4+ 43.Kg3 Nxe6 ile Beyaz kale ile at karşısında kazanır (Motor: +4.9); 41...Nf4 42.Qf5+ ile çöker.' },
  ],
  sources: [
    { title: 'Wikipedia: World Chess Championship 1966', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1966' },
    { title: 'Chessgames.com: Petrosian – Spassky World Championship Match 1966', url: 'https://chessgames.com/perl/chess.pl?tid=54395' },
    { title: 'Wikipedia: Nimzo-Indian Defence', url: 'https://en.wikipedia.org/wiki/Nimzo-Indian_Defence' },
    { title: 'Chessentials: Petrosian – Spassky World Championship Match 1966', url: 'https://chessentials.com/?p=2982' },
    { title: 'Chess.com: Clash of Champions – Spassky vs. Petrosian', url: 'https://www.chess.com/article/clash-of-champions-spassky-vs-petrosian' },
  ],
  exercises: [
    { id: 'ps66-1', kind: 'tekrar', plan: false, title: 'Tuzağa düşmemek',
      source: 'Petrosyan – Spasski, 1966, 20. oyun (18. hamle)',
      fen: 'r3r1k1/pp1b1ppp/5n2/4q3/P1p1P3/2PB1P2/2Q3PP/R1B2RK1 w - - 0 18',
      prompt: 'Siyah 17...c4 ile d3 filine saldırdı. c4 piyonunu almak cazip görünüyor. Fil nereye gitmeli?',
      hint: 'Fil c4’ü alırsa ...Qc5+ ne yapar?',
      line: ['Be2'],
      explanation: '**18.Be2!** 18.Bxc4? Qc5+ ile şahı ve fili aynı anda tehdit eder ve fil düşer. Motor: Be2 +0.4, Bxc4 −4.2.',
      link: 'Fil çiftini korumak için önce filleri güvenli karelere koymak gerekir.' },
    { id: 'ps66-2', kind: 'tekrar', plan: false, title: 'Vezir yedinci yatayda',
      source: 'Petrosyan – Spasski, 1966, 20. oyun (34. hamle)',
      fen: 'r6k/2qn2p1/4bp1p/1R6/1Qp1P3/2P2P1P/2r2BP1/1R3BK1 w - - 5 34',
      prompt: 'Siyahın kalesi c2’de ikinci yataya girdi. Beyazın veziri b4’te. Petrosyan’ın en aktif hamlesi hangisi?',
      hint: 'Vezir yedinci yataya girip d7 atına saldırabilir.',
      line: ['Qe7'],
      explanation: '**34.Qe7!** Vezir d7 atına ve e6 filine saldırır. Motor: Qe7 +3.1, sonraki en iyi hamle +1.8.',
      link: 'b-hattındaki kalelerle birlikte vezir de Siyah taşlarının arkasına geçti.' },
    { id: 'ps66-3', kind: 'transfer', plan: false, title: 'Kale dördüncü yatayda',
      source: 'Bondarevski – Botvinnik, SSCB Şampiyonası, Moskova 1940 (16. hamle)',
      fen: 'r1bq1rk1/5ppp/3p1n2/n2Pp3/p1p1P3/2P3N1/2B2PPP/R1BQ1RK1 w - - 0 16',
      prompt: 'Sämisch yapısı: Beyazın c3 piyonu ikiye katlanmış, Siyah ...a4 piyonuyla vezir kanadını tutuyor. Beyaz a4 piyonunu nasıl alır?',
      hint: 'Kale mi, fil mi alır? Hangi taş daha aktif olur?',
      line: ['Rxa4'],
      explanation: '**16.Rxa4!** Kale dördüncü yatayda aktifleşir ve c4 piyonuna baskı yapar. 16.Bxa4 olsaydı ...Nb3 ile a1 kalesi ve c1 fili tehdit edilirdi. Motor: Rxa4 +1.5, sonraki en iyi hamle 0.0.',
      link: 'Petrosyan kalesini b5’e çıkardı, Bondarevski a4’e. İkisinde de kale yatay boyunca vezir kanadının zayıf piyonlarına baskı yapıyor.' },
    { id: 'ps66-4', kind: 'transfer', plan: false, title: 'Petrosyan’ın b7 kombinasyonu',
      source: 'Petrosyan – Spasski, 1969, 10. oyun (30. hamle)',
      fen: 'r1n3k1/1b4pp/6n1/1pN1rp2/2R5/5P2/1P1B2PP/R4BK1 w - - 0 30',
      prompt: 'Üç yıl sonra aynı rakipler. Beyazın atı c5’te, kalesi c4’te. Siyahın c8 atı ve b7 fili zayıf. Kazandıran devamı bulun.',
      hint: 'b7 filini atla alın; Siyah a1 kalesini alırsa c8’de şah çekebilirsiniz.',
      line: ['Nxb7', 'Rxa1', 'Rxc8+'],
      explanation: '**30.Nxb7! Rxa1 31.Rxc8+** ve Beyaz malzeme üstünlüğü kazanır. Motor: Nxb7 +4.5, sonraki en iyi hamle +2.3.',
      link: 'Petrosyan iki maçta da vezir kanadındaki zayıf noktalara (b6, b7) yüklenerek kazandı.' },
  ],
};
