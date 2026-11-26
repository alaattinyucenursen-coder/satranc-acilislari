// Kasparov – Karpov, Dünya Şampiyonası maçı, Moskova 1985 (11. oyun). Kaynak: PgnMentor (Kasparov.pgn).
export default {
  id: 'kasparov-karpov-1985',
  theme: 'Tek kalmış piyon: d5 kırılması',
  white: 'Garri Kasparov', black: 'Anatoli Karpov',
  whiteShort: 'Kasparov', blackShort: 'Karpov',
  event: 'Dünya Şampiyonası maçı, 11. oyun', site: 'Moskova', year: 1985, eco: 'E21',
  variation: 'Nimzo-Hint Savunması, 4.Nf3 ve 5.Bg5', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 O-O 5. Bg5 c5 6. e3 cxd4 7. exd4 h6 8. Bh4 d5 9. Rc1 dxc4 10. Bxc4 Nc6 11. O-O Be7 12. Re1 b6 13. a3 Bb7 14. Bg3 Rc8 15. Ba2 Bd6 16. d5 Nxd5 17. Nxd5 Bxg3 18. hxg3 exd5 19. Bxd5 Qf6 20. Qa4 Rfd8 21. Rcd1 Rd7 22. Qg4 Rcd8 23. Qxd7 Rxd7 24. Re8+ Kh7 25. Be4+ 1-0`,

  summary: '1985 Dünya Şampiyonası maçının 11. oyunu. Karpov 4. ve 5. oyunları kazanıp bir puan öne geçmişti; Kasparov bu galibiyetle skoru 5½–5½’e getirdi ve maçı sonunda 13–11 kazanarak şampiyon oldu. Açılışta Siyah ...c5 ve ...cxd4 ile Beyaza d4’te **tek kalmış piyon** (izole vezir piyonu) bıraktı. Kasparov taşlarını bu piyonun arkasına dizdi (Ba2, Re1, Rc1) ve 16.d5! ile **d5 kırılmasını** yaptı. Değişimler oyunu eşitledi (Motor: 0.00 civarı), ama Beyazın d5’teki güçlü fili, açık d- ve e-hatlarındaki kaleleri ve Siyahın sekizinci yatayının boşalması bir kombinasyon için zemin hazırladı. Karpov 22...Rcd8?? ile d7 kalesini korumayı seçti; 23.Qxd7! Rxd7 24.Re8+ Kh7 25.Be4+ ile fil şah çekerken d1 kalesi d7 kalesini aldı ve Karpov terk etti (Motor: +5.5). Raymond Keene, Kasparov’un oyundan sonra ona Karpov’un bu hatayı yapacağından emin olduğunu söylediğini aktarır.',
  intro: 'Kasparov 1985 maçında Nimzo-Hint’e karşı sık sık 4.Nf3’ü (bugün “Kasparov varyantı” da denir) seçti. Bu hamle Beyazın piyon yapısını henüz belirlemez; 5.Bg5 ile f6 atı bağlanır. Siyah ...c5 ve ...cxd4 ile merkezi çözer ve Beyaza d4’te tek kalmış bir piyon bırakır. Bu yapının kuralları bellidir: tek kalmış piyona sahip taraf aktif taşlar, açık hatlar ve **d5 kırılması** ile oynar; diğer taraf d5 karesini tutup taş değişimleriyle oyun sonuna gitmek ister. Oyun bu iki planın çarpışmasıdır ve küçük bir dikkatsizliğin tek hamlede nasıl cezalandırılabileceğini gösterir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Tek kalmış d4 piyonunun verdiği alanı kullanmak: e5 ve c5 karelerini kontrol etmek, taşları aktif yerleştirmek (Nf3, Nc3, Rc1, Re1).',
      'Kareli fili önce c4’e, sonra 15.Ba2 ile a2’ye çekerek a2-g8 çaprazında tutmak; böylece fil hem ...Na5/...Nb4 saldırılarından uzak kalır hem de d5 kırılmasını destekler.',
      'Kara kareli fili Bg5-h4-g3 ile b8-h2 çaprazına getirmek; bağı korumak, ...Bd6 ile değişim gelirse hxg3 ile şahı sağlam tutmak.',
      'Doğru anda **16.d5** ile piyonu değiştirmek: değişimlerden sonra fil d5’e yerleşir, d- ve e-hatları açılır, tek kalmış piyon zayıflığı ortadan kalkar.',
      'Kaleleri açık d- ve e-hatlarına koymak (Re1, Rcd1); veziri Qa4-g4 ile hem c6 atına hem de şah kanadına ve d7’ye yöneltmek.',
      'Siyahın sekizinci yatayı boşaldığında e8 karesini ve açarak saldırı (Be4+) fikirlerini kollamak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**d5 karesini** taşlarla (Nf6, Bb7, Nc6) tutup tek kalmış piyonu sabitlemek; piyon ilerleyemezse zayıf bir hedef olur.',
      'Taş değişimleriyle oyunu sadeleştirmek: her değişim Beyazın aktiflik avantajını azaltır, oyun sonunda tek kalmış piyon zayıflık olarak kalır.',
      '...h6 ve ...Be7 ile Bg5 bağını etkisizleştirmek; ...Bd6 ile Beyazın kara kareli filini değişmek.',
      'Fili ...b6 ve ...Bb7 ile uzun çapraza, kaleyi c-hattına getirip c-hattında ve d5 üzerinde baskı kurmak.',
      'd5 kırılmasından sonra açık d-hattını kalelerle tutmak ve d5 filine karşı çıkmak.',
      'Kaleleri ikilerken sekizinci yatayın ve şahın güvenliğini unutmamak: Rd7’nin korunması e8 karesini savunmasız bırakmamalı.',
    ] },
  },
  critical: [
    { move: '7w', title: 'exd4: tek kalmış piyon kabul edildi', text: 'Beyaz e-piyonuyla alır ve d4’te tek kalmış bir piyonla kalır. Bu piyon oyun sonunda zayıflık olabilir, ama orta oyunda e5 ve c5 karelerini kontrol eder, e-hattını açar ve taşlara alan verir. 7.Nxd4 Qa5 sonrası c3 atındaki bağ can sıkıcı olurdu (Motor: −0.16); 7.Qxd4 de mümkündü. Kasparov dinamik yapıyı seçti.' },
    { move: '11b', title: '...Be7: sağlam ama zaman kaybeden plan', text: 'Fil b4’ten e7’ye döner ve Bh4 bağını kaldırır. Raymond Keene Spectator’daki notlarında Karpov’un açılışının “gösterişsiz” olduğunu ve bir tempo kaybettiğini, buna rağmen Siyahın konumunun sağlam olduğunu yazar. Motor da 11...Be7’yi en iyi hamle görüyor (+0.50); 11...Re8? ise 12.d5! ile cezalandırılırdı (+0.82).' },
    { move: '15w', title: 'Ba2: kırılmanın son hazırlığı', text: 'Fil a2’ye çekilerek ...Na5 ve ...Nb4 gibi saldırılardan uzaklaşır ve a2-g8 çaprazında d5’e bakmayı sürdürür. Arkada a3 piyonu b4’ü, e1 kalesi e-hattını tutuyor; artık d5 kırılması her an tehdit. 15...Re8? olsaydı 16.Rxe6! fxe6 17.Bxe6+ fedası çalışırdı (Motor: +0.5).' },
    { move: '16w', title: 'd5! kırılma', text: 'Tek kalmış piyon ilerler. Keene bu hamleyi “ya hep ya hiç, tam Kasparov tarzı” diye niteler ve daha sakin seçeneğin 16.Bh4 ile yavaş baskı olduğunu söyler. Motor iki hamleyi neredeyse eşit görür (+0.2/+0.3). 16...Bxg3? 17.dxc6! Bxf2+ 18.Kxf2 Rxc6 19.Qxd8 sonrası Beyaz taş farkıyla kalırdı (+2.1). Değişimlerden sonra Beyazın fili d5’e yerleşti.' },
    { move: '20w', title: 'Qa4: vezir oyuna giriyor', text: 'Vezir a4’ten c6 atına ve a7 piyonuna bakar; ileride g4 üzerinden şah kanadına geçebilir. Motor 20.Rc2’yi biraz daha iyi buluyor (+0.13, Qa4 0.00). Konum eşit, ama Beyazın taşları Siyahınkilerden daha uyumlu ve Siyah her hamlede küçük taktiklere dikkat etmek zorunda.' },
    { move: '22w', title: 'Qg4: tuzak kuruluyor', text: 'Vezir d7 kalesine saldırır. Kale korunmasız olduğu için Siyah ya onu korumalı ya da çekmeli. Keene, Kasparov’un oyundan sonra Karpov’un 22...Rcd8 hatasını yapacağından emin olduğunu söylediğini aktarır. Objektif olarak hamle eşit (Motor: +0.15), ama doğal görünen cevap kaybediyor.' },
    { move: '22b', title: '...Rcd8?? sekizinci yatay boşaldı', text: 'Karpov d7 kalesini diğer kaleyle korur, ama böylece c8 boşalır ve d7 kalesi yalnızca d8 kalesine bağlı kalır. Doğrusu 22...Rd6, 22...Rdd8 (Keene’in önerisi) ya da 22...Rdc7 idi; üçünde de Motor yaklaşık +0.1–0.2 veriyor. Maç hamlesinden sonra değerlendirme +5.5’e fırlar.' },
    { move: '23w', title: 'Qxd7! vezir fedası', text: 'Vezir d7 kalesini alır. 23...Rxd7 24.Re8+ Kh7 (tek hamle: f8’e araya girecek taş yok) 25.Be4+ sonrası fil şah çekerken d1 kalesi d7 kalesine saldırır. 25...g6 26.Rxd7 ile Beyaz iki kale, fil ve atla Siyahın vezir, fil ve atına karşı kalır; f7 ve b7 düşmek üzere. Keene’in verdiği gibi 26...Ba6 27.Bxc6 Qxc6?? 28.Rxf7# ile mat bile var. Karpov terk etti.' },
  ],
  lessons: [
    'Tek kalmış d-piyonuna sahip taraf için ana fikir çoğu zaman **d5 kırılmasıdır**: piyon değişince arkadaki taşlar (a2 fili, e1 kalesi) bir anda canlanır.',
    'Kırılma için hazırlık şarttır: fil a2-g8 çaprazında (Ba2), kale e-hattında (Re1), a3 ile ...Nb4 engellenmiş. Kasparov d5’i ancak her taş yerini aldıktan sonra oynadı.',
    'Tek kalmış piyonun karşısındaki taraf için değişim iyidir, ama değişim sonrası kalan taşların aktifliği de önemlidir: d5 fili oyun eşit görünürken bile Siyahı rahatsız etti.',
    'Bir taşı korumak için başka bir taşı “bağlamak” tehlikelidir: 22...Rcd8 sonrası d7 kalesi yalnızca d8 kalesine bağlıydı ve d8 kalesi de sekizinci yatayın tek savunucusuydu (aşırı yüklenmiş taş).',
    'Şahın önündeki h6 ve g7 piyonları kaçış karesi yaratır ama sıra yatayı zayıflarsa Re8+ gibi şahlar yine tehlikelidir; her kale hamlesinde arka yatayı kontrol edin.',
    'Açarak saldırı: şah çeken bir fil (Be4+) arkasındaki kalenin hattını açabilir. Kombinasyonlar genellikle böyle iki tehdidi aynı anda yaratan hamlelerle biter.',
    'Doğal görünen hamle her zaman güvenli değildir: rakibin son hamlesinin (22.Qg4) neyi hedeflediğini sorun ve tüm zorlayıcı hamleleri (Qxd7, Re8+) kontrol edin.',
  ],
  qa: [
    { q: 'Beyaz neden 7.exd4 ile tek kalmış bir piyonu kabul etti?', a: 'Tek kalmış piyon oyun sonunda zayıf olabilir, ama orta oyunda Beyaza e5 ve c5 karelerini, açık e-hattını ve rahat bir gelişimi verir. 7.Nxd4 Qa5 sonrası c3 atı bağlanıp rahatsız edilirdi (Motor: −0.16); 7.exd4 ise Beyazın taşlarını hızla oyuna sokar (+0.12). Kasparov’un dinamik tarzına uyan yapı buydu.' },
    { q: 'Siyah neden 9...dxc4 oynadı ve bu ona neye mal oldu?', a: '9...dxc4 merkezde gerginliği çözer ve d5 karesini taşlar için boşaltır; tek kalmış piyona karşı oynamanın klasik yoludur. Bedeli, Beyazın fili tek hamlede Bxc4 ile gelişip a2-g8 çaprazına yerleşmesidir. Motor 9...Nc6’yı biraz daha iyi görüyor (+0.02 karşı +0.33); Keene de Karpov’un açılışta bir tempo kaybettiğini yazar (fil b4’ten e7’ye iki hamlede gitti).' },
    { q: 'Beyaz neden 16.d5’i tam 16. hamlede oynadı?', a: 'O ana kadar tüm hazırlık tamamlanmıştı: fil a2’de güvende ve d5’e bakıyor, kale e1’de e6’nın arkasında, a3 piyonu ...Nb4’ü engelliyor. Siyah 15...Bd6 ile kara kareli fil değişimini istedi; değişimden sonra d5 karesini daha iyi tutacaktı. 16.d5 bunu beklemeden hatları açtı. Motor 16.Bh4’ü de aynı seviyede görüyor (+0.2/+0.3); Keene’in deyişiyle d5 “ya hep ya hiç” hamlesidir.' },
    { q: '18.hxg3 mü, 18.fxg3 mü? Neden h-piyonuyla alındı?', a: '18.hxg3 şahın önündeki f2-g2 piyonlarını yerinde bırakır ve e3 karesini zayıflatmaz; şah h2 kaçış karesine de kavuşur. 18.fxg3 f-hattını açardı ama şahın çaprazlarını zayıflatır ve e3 karesini açıkta bırakırdı (Motor: 0.00, hxg3 ise +0.20). Uzun vadede sağlam şah, ileride Siyahın Qf6 ile b2 ve f2’ye baskısını da daha az etkili kıldı.' },
    { q: '22.Qg4’ün tehdidi neydi, Siyah nasıl savunmalıydı?', a: 'Vezir korumasız d7 kalesine saldırdı; d-hattında Bd5 olduğu için d1 kalesi henüz yardım edemiyordu. Siyah 22...Rd6 (Motor: +0.12), 22...Rdd8 (+0.13) veya 22...Rdc7 (+0.13) ile kaleyi güvenli bir kareye çekebilirdi. 22...Rcd8 ise kaleyi diğer kaleye bağladı ve sekizinci yatayı boşalttı.' },
    { q: '23.Qxd7 kombinasyonu tam olarak nasıl çalışıyor?', a: '23.Qxd7 Rxd7 sonrası 24.Re8+ gelir; f8’e araya girecek taş olmadığı için (f7 piyonu veziri engelliyor) 24...Kh7 zorunlu. 25.Be4+ ile fil şah çekerken d-hattı açılır ve d1 kalesi d7 kalesine saldırır. Siyah şahını korumak zorunda olduğu için 26.Rxd7 gelir; Beyaz vezir karşılığında iki kale almış olur ve e8 ile d7 kaleleri f7 ile b7’yi tehdit eder (Motor: +5.4).' },
    { q: 'Karpov 25.Be4+ sonrası neden devam etmedi?', a: '25...g6 26.Rxd7 sonrası Beyaz iki kale, fil ve at ile Siyahın vezir, fil ve atına karşı kalır; kaleler yedinci ve sekizinci yatayda çok aktif. 25...Qg6 26.Bxg6+ (+7.2) veya 25...Qf5 26.Bxf5+ (+11.8) daha kötü. Keene’in verdiği 25...g6 26.Rxd7 Ba6 27.Bxc6 Qxc6?? 28.Rxf7# gibi mat tuzakları da var. Sonuç kesin olduğu için terk etmek mantıklıydı.' },
    { q: 'Beyazın avantajı 22. hamleye kadar gerçek miydi?', a: 'Motora göre hayır: 19. hamleden 22. hamleye kadar değerlendirme 0.00 ile +0.2 arasında. Ama Beyazın taşları uyumluydu (d5 fili, açık hatlardaki kaleler, hareketli vezir) ve Siyah hep savunmadaydı. Bu tür konumlarda savunan taraf tek bir yanlışla kaybedebilir; Karpov’un hatası da tam olarak böyle oldu.' },
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkezi vezir piyonuyla tutar; d4 piyonu e5 ve c5 karelerine bakar ve c1 filinin yolunu açar.',
      amac: 'Merkezde yer kazanmak, ardından c4 ile vezir kanadında baskı kurup kapalı, uzun soluklu bir oyuna yönelmek.',
      neden: 'Kasparov 1985 maçında beyazla neredeyse her zaman 1.d4 oynadı. Karpov’un en rahat olduğu açık İspanyol tipi oyunlardan kaçınıp Nimzo-Hint ve Vezir Gambiti yapılarında inisiyatif arıyordu.',
      diger: [
        { move: '1.e4', text: 'Daha açık oyunlara yol açar; Karpov 1...c5 veya 1...e5 ile iyi hazırlanmıştı. Motor iki hamleyi aynı görüyor (Motor: +0.29 karşı +0.25).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; çoğu zaman aynı d4/c4 yapılarına geçer, ama Nimzo-Hint’i seçme hakkını Beyaza bırakır (Motor: +0.22).' },
      ],
    },
    '1b': {
      text: '1...Nf6 ile Siyah e4 karesini kontrol eder ve piyon yapısını henüz belirlemez.',
      amac: 'Beyazın e4 ile tam merkez kurmasını engellemek ve Hint savunmalarına (Nimzo-Hint, Vezir-Hint) kapı açık tutmak.',
      neden: '1...Nf6 Beyazın ikinci hamlesine göre karar vermeyi sağlar: 2.c4 sonrası ...e6 ve ...Bb4 ile Nimzo-Hint, 2.Nf3 sonrası Vezir-Hint ya da Vezir Gambiti mümkündür.',
      diger: [
        { move: '1...d5', text: 'Klasik Vezir Gambiti yolu; Karpov bu maçta da sık kullandı (Motor: +0.32).' },
        { move: '1...c6', text: 'Slav tipi yapılara hazırlık; daha az esnek (Motor: +0.43).' },
      ],
    },
    '2w': {
      text: '2.c4 ile Beyaz d5 karesine baskı yapar ve vezir kanadında yer kazanır.',
      amac: 'Nc3 ile birlikte e4 ilerleyişini tehdit edip Siyahın merkezde rahat kurulmasını zorlaştırmak.',
      neden: 'c-piyonu d5’e ikinci kez baskı kurar; Siyah ...d5 oynarsa cxd5 ile merkezde değişim ya da Vezir Gambiti yapıları ortaya çıkar. Vezir piyonu açılışlarının en iddialı ikinci hamlesidir.',
      diger: [
        { move: '2.Nf3', text: 'Nimzo-Hint’e izin vermemek için önce at; motorun ufak tercihi (Motor: +0.30).' },
        { move: '2.e3', text: 'Colle tipi sakin bir yapı; c1 filini kapatır ve daha az iddialıdır (Motor: +0.10).' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah f8 filinin yolunu açar ve d5 karesini destekler.',
      amac: '3.Nc3 gelirse ...Bb4 ile Nimzo-Hint’e, 3.Nf3 gelirse ...b6 ile Vezir-Hint’e geçmek.',
      neden: '...e6 sağlam ve esnek bir merkez kurar; Karpov’un pozisyonel, risksiz tarzına uygundur. Kral-Hint ise Kasparov’un kendi silahıydı ve Karpov rakibinin bildiği yapılara girmek istemedi.',
      diger: [
        { move: '2...g6', text: 'Kral-Hint veya Grünfeld yolu (Motor: +0.41); bu yapılarda Kasparov çok deneyimliydi.' },
        { move: '2...c6', text: 'Slav’a geçiş için ...d5 hazırlığı (Motor: +0.42).' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile at gelişir ve e4 karesine baskı yapar.',
      amac: 'e4 ile tam merkez kurmayı tehdit etmek ve d5’i bir kez daha kontrol etmek.',
      neden: 'Bu hamle Nimzo-Hint’e izin verir: Siyah ...Bb4 ile atı bağlayabilir. Kasparov bilerek bu savunmanın içine girdi; 3.Nf3 ile Nimzo-Hint’ten kaçmak mümkündü ama Siyaha Vezir-Hint’i bırakırdı.',
      diger: [
        { move: '3.Nf3', text: 'Nimzo-Hint’i engeller, Vezir-Hint’e (3...b6) izin verir (Motor: +0.39).' },
        { move: '3.g3', text: 'Katalan yapısı: fil g2’den uzun çaprazı tutar (Motor: +0.44).' },
      ],
    },
    '3b': {
      text: '3...Bb4 ile Nimzo-Hint Savunması: fil c3 atını bağlar.',
      amac: 'e4 karesini dolaylı yoldan kontrol etmek; gerekirse ...Bxc3 ile Beyaza çift c-piyonu vermek.',
      neden: 'Bağlı at e4’ü koruyamaz, bu yüzden Beyazın e4 planı ertelenir. Siyah hızla rok yapar ve ...c5, ...d5 ya da ...b6 ile merkezde kendi planını seçer. Nimzo-Hint dünya şampiyonluğu maçlarının en sık görülen savunmalarından biridir.',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Reddi’ne geçiş; sağlam ama daha pasif (Motor: +0.33).' },
        { move: '3...c5', text: 'Benoni tipi yapılar: 4.d5 ile Beyaz merkezde yer kazanır, oyun keskinleşir.' },
      ],
    },
    '4w': {
      text: '4.Nf3: “Kasparov varyantı” ya da “Üç At varyantı”. Beyaz doğal gelişir ve piyon yapısını henüz belirlemez.',
      amac: 'Siyahın kurulumunu görüp ona göre g3 (fil uzun çaprazda), e3 (Rubinstein) veya Bg5 (aktif bağ) seçmek.',
      neden: 'Wikipedia’ya göre Kasparov 1985 maçında 4.Nf3’ü altı kez oynadı: üç galibiyet, üç beraberlik. Hamle 4.e3’ün c1 filini kapatan sakinliğinden ve 4.Qc2’nin vezir zaman kaybından kaçınır; at f3’te d4’ü korur ve e5’e bakar.',
      diger: [
        { move: '4.e3', text: 'Rubinstein sistemi; en yaygın yol, sağlam ama c1 filini kapatır (Motor: +0.21).' },
        { move: '4.Qc2', text: 'Klasik (Capablanca) varyantı: ...Bxc3 sonrası çift piyondan kaçar, ama vezir erken oynar ve şah kanadı gelişimi gecikir (Motor: +0.30).' },
        { move: '4.a3', text: 'Sämisch: 4...Bxc3+ 5.bxc3 ile fil çiftini alır, karşılığında çift c-piyonu kabul eder.' },
      ],
    },
    '4b': {
      text: '4...O-O ile Siyah önce şahını güvenceye alır.',
      amac: 'Merkez kararlarını (...c5, ...d5, ...b6) ertelemek ve Beyazın beşinci hamlesini beklemek.',
      neden: 'Rok her yapıda faydalı bir hamledir ve kimseye taahhüt vermez. Beyaz 5.g3 oynarsa ...c5 ile, 5.Bg5 oynarsa ...c5 ve ...h6 ile karşılık verilebilir. Motor 4...b6’yı bir tık daha iyi görür, fark küçük.',
      diger: [
        { move: '4...c5', text: 'En yaygın seçeneklerden; 5.g3 cxd4 6.Nxd4 ana yoldur (Motor: +0.32).' },
        { move: '4...b6', text: 'Vezir-Hint melezi: fil b7’den e4’ü kontrol eder (Motor: +0.21).' },
        { move: '4...d5', text: 'Ragozin Savunması’na geçiş; Vezir Gambiti yapısı.' },
      ],
    },
    '5w': {
      text: '5.Bg5 ile fil f6 atını bağlar.',
      amac: 'Siyahın e4 ve d5 üzerindeki kontrolünü zayıflatmak, gerektiğinde Bxf6 ile Siyahın şah kanadı piyonlarını bozmak.',
      neden: 'Teorinin ana hamlesi 5.g3’tür; 5.Bg5 daha az yaygın ama aktif bir seçim. Bağ Siyahı ...h6 ile karar vermeye zorlar ve Beyazın c1 filini e3’ün arkasında kapatmadan dışarı çıkarır.',
      diger: [
        { move: '5.g3', text: 'Teorinin ana hamlesi: 5...c5 6.Nxd4 sonrası fil g2’den uzun çaprazda baskı kurar.' },
        { move: '5.Qc2', text: 'Motorun ilk tercihi; Bxc3’te çift piyondan kaçar (Motor: +0.22).' },
        { move: '5.e3', text: 'Rubinstein sistemine geçer; c1 fili kapanır.' },
      ],
    },
    '5b': {
      text: '5...c5 ile Siyah d4 piyonuna saldırır.',
      amac: 'Beyazın merkezini sorgulamak ve ...cxd4 ile Beyazı ya tek kalmış piyona ya da merkezsiz bir yapıya zorlamak.',
      neden: 'Bağlı at yüzünden Siyah merkezde hızlı karşı oyun arar; ...c5 Nimzo-Hint’in tipik kırılmasıdır. Motor bu hamleyi konumun en iyisi görüyor (+0.11).',
      diger: [
        { move: '5...h6', text: 'Önce fili sorgular; 6.Bh4 c5 ile benzer yapılara gider (Motor: +0.20).' },
        { move: '5...d5', text: 'Ragozin tipi yapı; cxd5 exd5 ile simetrik merkez (Motor: +0.32).' },
      ],
    },
    '6w': {
      text: '6.e3 ile d4 desteklenir ve f1 filinin yolu açılır.',
      amac: 'Merkezi korumak, hızla gelişip rok yapmak; ...cxd4 gelirse exd4 ile açık e-hattına sahip olmak.',
      neden: 'Beyaz d4’ü korumazsa ...cxd4 sonrası atla geri almak zorunda kalır ve ...Qa5 ile c3 bağı can sıkıcı olur. e3 sayesinde Beyaz geri alma şeklini seçebilir.',
      diger: [
        { move: '6.Rc1', text: 'c-hattını erken tutar; ...cxd4 Nxd4 ile daha açık bir oyun (Motor: +0.03).' },
        { move: '6.Qb3', text: 'b4 filine saldırır ama vezir erken çıkar ve ...h6, ...Nc6 ile tempo kazanılır (Motor: −0.03).' },
      ],
    },
    '6b': {
      text: '6...cxd4 ile Siyah merkezde değişir.',
      amac: 'Beyazı d4’te tek kalmış piyona zorlamak ve yapıyı netleştirmek.',
      neden: 'Gerginliği korumak Beyaza dxc5 veya d5 seçeneği verirdi. Değişim, Siyahın tanıdığı ve sevdiği bir hedefi (tek kalmış piyon) yaratır.',
      diger: [
        { move: '6...h6', text: 'Önce bağı sorgular; 7.Bh4 cxd4 ile benzer (Motor: +0.22).' },
        { move: '6...d5', text: 'Merkezde gerginlik; Beyaz cxd5 ile kendi seçimini yapar (Motor: +0.38).' },
      ],
    },
    '7w': {
      text: '7.exd4 ile e-piyonuyla alınır; d4’te tek kalmış bir piyon oluşur.',
      amac: 'Açık e-hattı, e5 ve c5 karelerinin kontrolü ve rahat gelişimle aktif taş oyunu kurmak.',
      neden: '7.Nxd4 Qa5! sonrası c3 atı bağlanır ve Bxf6 Bxc3+ bxc3 gibi sorunlar çıkar (Motor: −0.16). exd4 Kasparov’un dinamik tarzına uyar: uzun vadeli bir zayıflık karşılığında orta oyunda aktiflik.',
      diger: [
        { move: '7.Qxd4', text: 'Yapıyı sağlam tutar, motorun ufak tercihi; ama vezir ...Nc6 ile tempo kaybeder (Motor: +0.15).' },
        { move: '7.Nxd4', text: '7...Qa5 ile c3 bağı ve Bxf6 Bxc3+ sorunları (Motor: −0.16).' },
      ],
    },
    '7b': {
      text: '7...h6 ile Siyah g5 filini sorgular.',
      amac: 'Beyazı ya fili f6’da değişmeye ya da h4’e çekilmeye zorlamak.',
      neden: 'Bxf6 gelirse Siyah fil çiftini alır; Bh4 gelirse bağ kalır ama ileride ...g5 tehdidi olur. ...h6 ayrıca şaha h7 kaçış karesi verir; bu karenin oyunun sonunda ne kadar önemli olacağını göreceğiz.',
      diger: [
        { move: '7...d5', text: 'Doğrudan merkez; motorun ufak tercihi (Motor: +0.10).' },
        { move: '7...Nc6', text: 'Gelişim önce; d4’e baskı (Motor: +0.31).' },
      ],
    },
    '8w': {
      text: '8.Bh4 ile fil bağı korur.',
      amac: 'f6 atını bağlı tutmak, sonra fili g3’e getirip b8-h2 çaprazını kullanmak.',
      neden: '8.Bxf6 Bxc3+ 9.bxc3 Qxf6 Beyaza çift piyon verir ve kara kareli fili gider (Motor: +0.01). 8.Bf4 ise bağı bırakır ve fili ...Nh5 ile hedef yapar (−0.19).',
      diger: [
        { move: '8.Bxf6', text: 'Yapıyı bozar ve fil çiftini Siyaha bırakır (Motor: +0.01).' },
        { move: '8.Bf4', text: 'Bağı bırakır, fil rahatsız edilir (Motor: −0.19).' },
      ],
    },
    '8b': {
      text: '8...d5 ile Siyah merkezde c4’e saldırır.',
      amac: 'c4 piyonunu alıp d5 karesini kendi taşlarıyla tutmak; tek kalmış piyonun önündeki kareyi abluka karesi yapmak.',
      neden: 'Tek kalmış piyona karşı klasik kurulum: d5 karesine piyon değil taş (at, fil) yerleştirmek. Motor 8...Qa5’i biraz daha iyi görüyor (−0.04); fark küçük.',
      diger: [
        { move: '8...Qa5', text: 'c3 bağına baskı; ...Ne4 ile c3’e saldırı fikri (Motor: −0.04).' },
        { move: '8...Nc6', text: 'Gelişim önce; Bd3 sonrası d5 (Motor: +0.18).' },
      ],
    },
    '9w': {
      text: '9.Rc1 ile kale c-hattına gelir.',
      amac: 'c3 atını korumak, c-hattında baskı kurmak ve ...dxc4 sonrası Bxc4 ile fili tek hamlede geliştirmek.',
      neden: 'Rc1 sonrası ...Bxc3 bxc3 sorun olmaz, kale c3’ü korur. Ayrıca Beyaz, f1 filini oynamadan Siyahın ...dxc4 kararını bekler: alırsa fil doğrudan c4’e gelir ve tempo kazanılır.',
      diger: [
        { move: '9.Be2', text: 'Sakin gelişim; motorun ufak tercihi (Motor: +0.14).' },
        { move: '9.Bd3', text: 'Fili şaha yöneltir ama ...dxc4 Bxc4 ile tempo kaybeder (Motor: +0.08).' },
      ],
    },
    '9b': {
      text: '9...dxc4 ile Siyah c4’ü alır.',
      amac: 'd5 karesini boşaltıp taşlarla tutmak ve Beyazın merkezini tek kalmış d4 piyonuna indirgemek.',
      neden: 'Bedel: Beyazın fili tek hamlede Bxc4 ile gelişir ve a2-g8 çaprazına yerleşir. Motor 9...Nc6’yı tercih ediyor (+0.02 karşı +0.33). Keene’in Spectator notlarına göre Karpov’un açılışı “gösterişsiz” idi ve bir tempo kaybetmişti.',
      diger: [
        { move: '9...Nc6', text: 'Önce gelişim; Beyaz f1 filini oynarsa ancak o zaman dxc4 (Motor: +0.02).' },
        { move: '9...Be7', text: 'Bağı hemen kaldırır; Beyaz c5 ile vezir kanadında yer alabilir (Motor: +0.16).' },
      ],
    },
    '10w': {
      text: '10.Bxc4 ile fil c4’e gelir ve a2-g8 çaprazına yerleşir.',
      amac: 'd5 ve e6 karelerine baskı yapmak; ileride d5 kırılmasını desteklemek.',
      neden: 'Geri almak pratikte zorunlu; 10.a4 veya 10.Qa4 Bxc3+ ile kötü olur (Motor: −0.21, −0.36). Fil c4’te en aktif karesindedir.',
      diger: [
        { move: '10.Qa4', text: '10...Bxc3+ 11.bxc3 Nbd7 ile Beyaz yapıyı bozar (Motor: −0.36).' },
        { move: '10.a4', text: 'Piyonu sonra almayı umar ama zaman kaybeder (Motor: −0.21).' },
      ],
    },
    '10b': {
      text: '10...Nc6 ile at d4 piyonuna baskı yapar.',
      amac: 'd4’ü hedef almak ve d5 karesini kontrol etmek.',
      neden: 'Tek kalmış piyona karşı c6 atın en doğal karesidir: hem d4’e saldırır hem de ...Na5 ile c4 filini rahatsız etme fikri taşır.',
      diger: [
        { move: '10...Be7', text: 'Önce bağı kaldırmak; benzer konuma geçer (Motor: +0.36).' },
        { move: '10...Bd7', text: 'Fil pasif bir kareye gider (Motor: +0.44).' },
      ],
    },
    '11w': {
      text: '11.O-O ile Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini e1’e getirmeye hazırlanmak.',
      neden: 'Tüm küçük taşlar gelişti; rok doğal ve motorun ilk tercihi (+0.41). Şimdi kaleler merkeze, c- ve e-hatlarına gelecek.',
      diger: [
        { move: '11.Bb3', text: 'Fili önceden ...Na5’ten kaçırır ama 11...g5 ile kanat saldırısı gelebilir (Motor: +0.31).' },
        { move: '11.a3', text: '...Bb4 baskısını önce kaldırır (Motor: +0.23).' },
      ],
    },
    '11b': {
      text: '11...Be7 ile fil e7’ye çekilir ve h4 filinin bağını kaldırır.',
      amac: 'f6 atını serbest bırakmak ve d5 karesini savunmak.',
      neden: 'Keene: fil b4’ten e7’ye iki hamlede geldiği için Siyah bir tempo kaybetti, ama konum sağlam. Motor da bunu en iyi hamle görüyor (+0.50). 11...Re8? ise 12.d5! exd5 13.Nxd5 ile kötü (+0.82): e6 savunması zayıflar.',
      diger: [
        { move: '11...a6', text: 'Vezir kanadında yer ve ...b5 fikri (Motor: +0.59).' },
        { move: '11...Re8', text: '12.d5! ile hemen kırılma (Motor: +0.82).' },
      ],
    },
    '12w': {
      text: '12.Re1 ile kale e-hattına gelir.',
      amac: 'e6 piyonunun arkasına baskı yapmak ve d5 kırılmasından sonra açılacak e-hattına hazır olmak.',
      neden: 'Tek kalmış piyon yapısının tipik kurulumu: kale e1’de, fil c4/a2’de. d5 kırılması geldiğinde e6 değişirse e1 kalesi doğrudan e7 ve e8’e bakar; oyunun sonunda bu hattın önemi ortaya çıkacak.',
      diger: [
        { move: '12.Bb3', text: 'Fili güvenli yere çeker; motorun ufak tercihi (Motor: +0.46).' },
        { move: '12.Bg3', text: 'Fili önceden ...Nh5’ten kaçırır (Motor: +0.43).' },
      ],
    },
    '12b': {
      text: '12...b6 ile Siyah fili b7’ye getirmeye hazırlanır.',
      amac: 'Fili uzun çapraza yerleştirip d5 karesini ve Beyazın şah kanadını hedeflemek.',
      neden: 'Tek kalmış piyona karşı klasik kurulum: Bb7, Nc6, Nf6 ile d5 üç taşla tutulur. ...b6’nın küçük bir bedeli var: c6 atı ve a8-h1 çaprazı daha sonra taktiklere açık kalabilir.',
      diger: [
        { move: '12...Nh5', text: 'Kara kareli fili değişmeyi hedefler: 13.Bg3 Nxg3 14.hxg3 (Motor: +0.42).' },
        { move: '12...Bd7', text: 'Pasif ama sağlam; Ba2 ve ...Nd5 ile devam (Motor: +0.45).' },
      ],
    },
    '13w': {
      text: '13.a3 ile Beyaz ...Nb4 ve ...Bb4 fikirlerini önler.',
      amac: 'Siyahın b4 karesinden d5’e ulaşan abluka atını engellemek ve fili a2’ye çekmeye hazırlanmak.',
      neden: 'a3 olmadan ...Nb4-d5 Siyaha ideal bir abluka karesi verirdi. Motor bu hamleyi açık ara en iyi görüyor (+0.42); 13.Bg3 ...Na5 ile c4 filini rahatsız eder (+0.16).',
      diger: [
        { move: '13.Bxf6', text: 'Fil çiftini bırakır ve d5 kontrolünü azaltır (Motor: +0.22).' },
        { move: '13.Bg3', text: '13...Na5 ile c4 fili saldırı altına girer (Motor: +0.16).' },
      ],
    },
    '13b': {
      text: '13...Bb7 ile fil uzun çapraza yerleşir.',
      amac: 'd5 karesini üçüncü taşla kontrol etmek ve ileride a8-h1 çaprazında Beyazın şahını hedeflemek.',
      neden: 'Planın doğal devamı ve motorun ilk tercihi (+0.42). 13...a6 yavaştır ve Beyazın d5 kırılmasına zaman tanır (+0.83).',
      diger: [
        { move: '13...Nd5', text: 'Değişim fikri; 14.Nxd5 Bxh4 15.Bb5 ile Beyaz biraz üstün (Motor: +0.60).' },
        { move: '13...a6', text: 'Yavaş; Beyaz Ba2 ve Qd3 ile hazırlanır (Motor: +0.83).' },
      ],
    },
    '14w': {
      text: '14.Bg3 ile fil b8-h2 çaprazına çekilir.',
      amac: 'Fili ...Nh5 ve ...g5 saldırılarından uzak tutmak, b8-h2 çaprazında c7 ve d6 karelerini kontrol etmek.',
      neden: 'Bh4 bağı artık anlamsız: e7 fili bağı zaten kaldırdı. Fil g3’te hem güvende hem de ...Bd6 ile değişime hazır. Motor 14.Qd3 ve 14.Ba2’yi çok az daha iyi görüyor.',
      diger: [
        { move: '14.Qd3', text: 'Merkezde vezir, b1-h7 çaprazı (Motor: +0.41).' },
        { move: '14.Ba2', text: 'Önce fil güvenli yere (Motor: +0.37).' },
      ],
    },
    '14b': {
      text: '14...Rc8 ile kale c-hattına gelir.',
      amac: 'c-hattında Beyazın c1 kalesine karşı çıkmak ve c3 atına baskı.',
      neden: 'Açık c-hattı Siyahın en doğal karşı oyun alanı. 14...Re8 15.Nb5 ile Beyaza merkezde güçlü at karesi verirdi (+0.67).',
      diger: [
        { move: '14...Bd6', text: 'Fil değişimi önce; motor eşit görüyor (Motor: +0.39).' },
        { move: '14...Re8', text: '15.Nb5 ile at d6’ya göz diker (Motor: +0.67).' },
      ],
    },
    '15w': {
      text: '15.Ba2 ile fil a2’ye çekilir.',
      amac: 'Fili ...Na5 saldırısından uzak tutmak ve a2-g8 çaprazında d5 ile e6’ya bakmayı sürdürmek.',
      neden: 'a3 sayesinde b4 kontrol altında, kale e1’de, fil a2’de: d5 kırılması için her şey hazır. 15.Bb3 ...Na5 ile hedef olurdu (+0.25).',
      diger: [
        { move: '15.Qd3', text: 'Merkezde vezir; motor eşit görüyor (Motor: +0.33).' },
        { move: '15.Bb3', text: '15...Na5 ile fil rahatsız edilir (Motor: +0.25).' },
      ],
    },
    '15b': {
      text: '15...Bd6 ile fil g3 filini değişmek ister.',
      amac: 'Beyazın kara kareli filini değişip d4’ü ve d5 karesini daha iyi kontrol etmek.',
      neden: 'Her değişim tek kalmış piyona karşı oynayan tarafın lehinedir. 15...Re8? ise 16.Rxe6! fxe6 17.Bxe6+ Kh8 18.d5 fedası ile cezalandırılırdı (Motor: +0.54).',
      diger: [
        { move: '15...Re8', text: '16.Rxe6! fxe6 17.Bxe6+ fedası (Motor: +0.54).' },
        { move: '15...Qd7', text: '16.Rc2 ile Beyaz rahat (Motor: +0.55).' },
      ],
    },
    '16w': {
      text: '16.d5! ile tek kalmış piyon ilerler ve hatlar açılır.',
      amac: 'Tek kalmış piyon zayıflığından kurtulmak, fili d5’e yerleştirmek ve d- ile e-hatlarını açmak.',
      neden: 'Keene bu hamleyi “ya hep ya hiç, tam Kasparov tarzı” diye niteler; alternatif 16.Bh4 ile yavaş baskıdır (Motor: +0.30). Siyah 15...Bd6 ile filleri değişmeden önce Kasparov hatları açtı. 16...Bxg3? 17.dxc6! ile Beyaz kazanır (+2.1).',
      diger: [
        { move: '16.Bh4', text: '16...g5 17.Bg3 ile yavaş baskı; Keene’in daha sakin seçeneği (Motor: +0.30).' },
        { move: '16.Ne5', text: 'Merkezde at; 16...Bxe5 17.dxe5 ile yapı değişir (Motor: +0.19).' },
      ],
    },
    '16b': {
      text: '16...Nxd5 ile at d5 piyonunu alır.',
      amac: 'Değişimlerle merkezi sadeleştirmek ve tek kalmış piyonun yok olmasından sonra eşitliği korumak.',
      neden: '16...Bxg3? 17.dxc6! Bxf2+ 18.Kxf2 Rxc6 19.Qxd8 ile Siyah taş kaybeder (Motor: +2.1). 16...exd5 de eşit (+0.15) ama e-hattını hemen açar.',
      diger: [
        { move: '16...exd5', text: 'Eşit değerde; e-hattı açılır (Motor: +0.15).' },
        { move: '16...Bxg3', text: '17.dxc6! ile taş kaybı (Motor: +2.1).' },
      ],
    },
    '17w': {
      text: '17.Nxd5 ile Beyaz atla alır.',
      amac: 'Atı değişip fili d5’e getirmeye hazırlanmak.',
      neden: '17.Bxd5 de mümkün ama fil d5’te değişime açık kalır (Motor: +0.08). Atla almak, fili a2’de tutup sonra d5’e getirmeyi sağlar.',
      diger: [
        { move: '17.Bxd5', text: 'Biraz daha zayıf (Motor: +0.08).' },
        { move: '17.Bxd6', text: 'Önce fil değişimi; 17...Qxd6 ile Siyah rahat (Motor: +0.01).' },
      ],
    },
    '17b': {
      text: '17...Bxg3 ile Siyah g3 filini alır.',
      amac: 'Beyazın kara kareli filini değişmek ve d5 atını sonra almak.',
      neden: 'Ara hamle: önce fil değişimi, sonra d5. 17...exd5 de eşit (+0.14). 17...Bb8?? ise d5 atını geri almadığı için taş kaybeder (+4.0).',
      diger: [
        { move: '17...exd5', text: 'Eşit değerde (Motor: +0.14).' },
        { move: '17...Bb8', text: 'Atı geri almaz, taş kaybı (Motor: +4.0).' },
      ],
    },
    '18w': {
      text: '18.hxg3 ile h-piyonuyla alınır.',
      amac: 'Şahı sağlam tutmak ve f2-g2 piyonlarını yerinde bırakmak.',
      neden: '18.fxg3 f-hattını açardı ama şah çaprazlarını ve e3 karesini zayıflatırdı (Motor: 0.00, hxg3 +0.17). hxg3 ayrıca şaha h2 kaçış karesi verir.',
      diger: [
        { move: '18.fxg3', text: 'f-hattı açılır ama şah zayıflar (Motor: 0.00).' },
        { move: '18.Bb1', text: '18...Bxh2+ ile piyon ve konum kaybı (Motor: −2.0).' },
      ],
    },
    '18b': {
      text: '18...exd5 ile Siyah d5 atını alır.',
      amac: 'Değişim serisini tamamlamak ve materyal eşitliğini korumak.',
      neden: 'Zorunlu: almazsa bir at eksik kalır (Motor: +3.9 ve üstü). Sonuçta d5’te Siyahın tek kalmış piyonu oluşur, ama hemen alınacak.',
    },
    '19w': {
      text: '19.Bxd5 ile fil d5’e yerleşir.',
      amac: 'Fili merkezde güçlü bir kareye koymak; f7, b7 ve c6’ya baskı yapmak.',
      neden: 'Fil d5’te Siyahın hiçbir piyonuyla kovalanamaz ve hem b7 filini hem c6 atını rahatsız eder. Beyazın fili Siyahın fil ve atından daha aktif; konum eşit (Motor: +0.15) ama Beyaz oyunun yönünü belirler.',
      diger: [
        { move: '19.Rc2', text: 'Önce kale; Na5 ile Siyah rahat (Motor: +0.04).' },
        { move: '19.Qa4', text: 'Vezir önce; d5 sonra alınır (Motor: 0.00).' },
      ],
    },
    '19b': {
      text: '19...Qf6 ile vezir b2 ve f2’ye bakar.',
      amac: 'Veziri aktif bir kareye getirip Beyazın b2 piyonuna ve şah kanadına baskı yapmak.',
      neden: 'Vezir f6’da hem şah kanadını korur hem de b2’yi tehdit eder. Motor 19...Rc7’yi biraz daha iyi görüyor (+0.10, maç hamlesi +0.16).',
      diger: [
        { move: '19...Rc7', text: 'Kaleyi d7’ye hazırlar (Motor: +0.10).' },
        { move: '19...Re8', text: 'e-hattında değişim; sadeleşir (Motor: +0.27).' },
      ],
    },
    '20w': {
      text: '20.Qa4 ile vezir c6 atına ve a7 piyonuna bakar.',
      amac: 'Veziri aktifleştirip ileride a4-g4 yatayından şah kanadına geçirmek.',
      neden: 'c6 atı artık iki kez saldırı altında (Bd5, Qa4). 20...Rfd8 21.Bxc6 Rxc6 22.Qxa7 gibi taktikler var. Motor 20.Rc2’yi biraz daha iyi görüyor (+0.13 karşı 0.00).',
      diger: [
        { move: '20.Rc2', text: 'Motorun tercihi; d-hattına hazırlık (Motor: +0.13).' },
        { move: '20.Bxc6', text: 'Sadeleştirir, eşitlik (Motor: 0.00).' },
      ],
    },
    '20b': {
      text: '20...Rfd8 ile kale d-hattına gelir ve d5 filine karşı çıkar.',
      amac: 'd-hattını kontrol etmek ve d5 filine baskı yapmak.',
      neden: 'Doğal ve motorun en iyi hamlesi (0.00). 20...Rc7 21.Rc4 ile Beyaz biraz üstün (+0.43).',
      diger: [
        { move: '20...Rc7', text: '21.Rc4 ile Beyaz aktif (Motor: +0.43).' },
        { move: '20...Nd8', text: '21.Rxc8 ile c-hattı kaybedilir (Motor: +0.77).' },
      ],
    },
    '21w': {
      text: '21.Rcd1 ile c1 kalesi d-hattına geçer ve d5 filini ikinci kez korur.',
      amac: 'd5 filini sağlamlaştırmak, d-hattında Siyahın d8 kalesine karşı çıkmak ve e1 kalesini e-hattında serbest bırakmak.',
      neden: 'Siyah d8 kalesiyle d5 filine baskı kurdu; fil d5’te tutunursa Beyaz merkezde hâkim kalır. c-hattını Siyaha bırakmak önemli değil, çünkü c-hattında giriş karesi yok. Motor 21.Be4 ve 21.Qe4’ü de eşit görüyor (hepsi 0.00).',
      diger: [
        { move: '21.Be4', text: 'Fili güvenli kareye çeker; 21...a6 22.Rc3 ile denge (Motor: 0.00).' },
        { move: '21.Qe4', text: 'Merkezde vezir, e-hattında ikileme; 21...Rc7 ile denge (Motor: 0.00).' },
      ],
    },
    '21b': {
      text: '21...Rd7 ile d8 kalesi d7’ye çıkar.',
      amac: 'Arkadan c8 kalesini d8’e getirip d-hattında kaleleri ikilemek ve d5 filine baskıyı artırmak; ayrıca yedinci yatayı (b7, f7) korumak.',
      neden: 'Mantıklı bir plan, ama d7 kalesi korumasız bir kareye gider ve bir vezir hamlesiyle hedef olur. Motor 21...Rc7’yi biraz daha iyi görüyor (+0.11 karşı +0.21): orada kale c-hattında kalır ve d-hattındaki değişimler sonrası sekizinci yatay sağlam kalır.',
      diger: [
        { move: '21...Rc7', text: '22.Ba2 Rxd1 23.Qxd1 ile denge; kale korunaklı (Motor: +0.11).' },
        { move: '21...Qxb2', text: 'Piyon alır ama 22.Nh4! ile at f5/g6’ya gider, Siyahın şahı rahatsız edilir (Motor: +0.14).' },
      ],
    },
    '22w': {
      text: '22.Qg4 ile vezir dördüncü yatay boyunca kayıp korumasız d7 kalesine saldırır.',
      amac: 'Siyahı d7 kalesini korumak ya da çekmek zorunda bırakmak; bu sırada g7 ve şah kanadına da bakmak.',
      neden: 'd-hattında Bd5 olduğu için d1 kalesi d7’ye henüz dokunamıyor, ama fil oynayınca açarak saldırı mümkün olacak. Keene, Kasparov’un oyundan sonra ona Karpov’un bir sonraki hamlede hata yapacağından emin olduğunu söylediğini aktarır. Objektif olarak hamle eşit (Motor: +0.15) ama doğal görünen savunma kaybediyor.',
      diger: [
        { move: '22.Ba2', text: 'd-hattında değişimlere hazır; 22...Rxd1 23.Rxd1 ile denge (Motor: +0.15).' },
        { move: '22.Qe4', text: 'Merkezde vezir; 22...g6 23.Nh2 ile hafif baskı (Motor: +0.07).' },
      ],
    },
    '22b': {
      text: '22...Rcd8?? Ağır hata. Karpov d7 kalesini c8 kalesiyle korur, ama böylece c8 boşalır ve sekizinci yatayın tek savunucusu d8 kalesi olur.',
      amac: 'Karpov d7’yi korumak ve planladığı gibi kaleleri d-hattında ikilemek istedi; ikili kaleler d5 filine baskı kuracaktı.',
      neden: 'd8 kalesi artık iki görev üstlenir: d7’yi korumak ve e8 karesini savunmak. Aşırı yüklenmiş bu taş tek bir vezir fedasıyla çöker. Keene: “22...Rdd8 doğru cevaptır”. ChessBase India da 22...Rd6’nın oyunu eşitleyeceğini yazar. Motor: 22...Rd6 +0.12, 22...Rdd8 +0.13, 22...Rdc7 +0.13; maç hamlesi +5.6.',
      diger: [
        { move: '22...Rd6', text: 'Kale d6’da korunur (vezir f6’dan); 23.Bc4 Rxd1 24.Rxd1 Rc7 ile denge (Motor: +0.12).' },
        { move: '22...Rdd8', text: 'Keene’in önerisi; 23.Bc4 Rxd1 24.Rxd1 Rd8 ile sadeleşir (Motor: +0.13).' },
        { move: '22...Rdc7', text: 'Kale c-hattına döner, sekizinci yatayda c8 boş ama e8 korunur; 23.b4 Rd8 ile denge (Motor: +0.13).' },
      ],
    },
    '23w': {
      text: '23.Qxd7! ile vezir d7 kalesini alır.',
      amac: 'd8 kalesini d7’ye çekip sekizinci yatayı tamamen savunmasız bırakmak, ardından Re8+ ve Be4+ ile açarak saldırı kombinasyonunu tamamlamak.',
      neden: 'Keene: “neredeyse hiç yoktan çıkan öldürücü bir vezir fedası”. Fedadan sonra Siyahın şahı f8’e araya taş koyamaz (f7 piyonu veziri engelliyor) ve h7’ye kaçmak zorunda kalır; orada b1-h7 çaprazındaki şah çeken fil d-hattını açar. Başka hamleler eşitlik (23.Bb3 −0.05).',
      diger: [
        { move: '23.Bb3', text: 'Fırsat kaçar; 23...Rxd1 24.Rxd1 Rxd1+ 25.Bxd1 ile eşit oyun sonu (Motor: −0.05).' },
        { move: '23.Nh4', text: 'Saldırı denemesi ama 23...Rd6 ile Siyah toparlanır (Motor: −0.17).' },
      ],
    },
    '23b': {
      text: '23...Rxd7 ile Siyah veziri alır.',
      amac: 'Materyali geri almak; başka yol yok.',
      neden: 'Almazsa Beyaz bir kale fazla kalır ve c6 atı da düşer: 23...Bc8 24.Qxc6 (Motor: +7.8) ya da 23...Ba6 24.Qxc6 (+8.2). Rxd7 en az kötü seçenektir (+5.8), ama kombinasyon devam ediyor.',
      diger: [
        { move: '23...Bc8', text: '24.Qxc6 ile Beyaz bir kale ve at fazla (Motor: +7.8).' },
      ],
    },
    '24w': {
      text: '24.Re8+ ile kale e-hattından sekizinci yataya girip şah çeker.',
      amac: 'Şahı h7’ye zorlamak; orada şah b1-h7 çaprazına girer ve fil açarak şah çekebilir.',
      neden: 'Tek hamle: başka hamleler bir vezir eksik kalır (24.Kh2 −4.5). 12.Re1 ile e-hattına konan kale burada görevini yapar; ...h6 ile yaratılan h7 kaçış karesi ise şahı tam fili beklediği kareye götürür.',
      diger: [
        { move: '24.Kh2', text: 'Vezir eksik bir oyun (Motor: −4.5).' },
      ],
    },
    '24b': {
      text: '24...Kh7 zorunlu: f8’e araya girecek taş yok (f7 piyonu Qf6’yı engelliyor) ve h8 de sekizinci yatayda.',
      amac: 'Şahı şahtan kurtarmak; başka yasal hamle yok.',
      neden: 'Siyahın tek yasal hamlesi; şah h7’ye gitmek zorunda ve bu kare b1-h7 çaprazında, Beyazın filine açık.',
    },
    '25w': {
      text: '25.Be4+! ile fil şah çekerken d-hattı açılır ve d1 kalesi d7 kalesine saldırır.',
      amac: 'Açarak saldırı (çifte tehdit) ile d7 kalesini kazanmak; vezir karşılığında iki kale almak.',
      neden: 'Siyah önce şahını kurtarmak zorunda: 25...g6 26.Rxd7 sonrası Beyaz iki kale, fil ve atla Siyahın vezir, fil ve atına karşı kalır ve kaleler f7 ile b7’yi tehdit eder (Motor: +5.4). Keene’in verdiği gibi 26...Ba6 27.Bxc6 Qxc6?? 28.Rxf7# ile mat var; 25...Qg6 26.Bxg6+ (+7.2) ve 25...Qf5 26.Bxf5+ (+11.8) daha kötü. Karpov terk etti.',
      diger: [
        { move: '25.Ree1', text: 'Kombinasyonu bırakır; vezir eksik (Motor: −4.8).' },
        { move: '25.g4', text: 'Gereksiz; Siyah 25...g6 ile toparlanır (Motor: −3.5).' },
      ],
    },
  },
  exercises: [
    { id: 'kk85-1', kind: 'tekrar', plan: true, title: 'd5 kırılması',
      source: 'Kasparov – Karpov, 1985, 11. oyun (16. hamle)',
      fen: '2rq1rk1/pb3pp1/1pnbpn1p/8/3P4/P1N2NB1/BP3PPP/2RQR1K1 w - - 5 16',
      prompt: 'Beyazın d4’te tek kalmış piyonu var; fili a2’de, kalesi e1’de. Tek kalmış piyonun ana planı hangi hamle?',
      hint: 'Piyon ilerleyip değişirse a2 fili ve e1 kalesi açılır.',
      line: ['d5'],
      explanation: '**16.d5!** Tek kalmış piyon ilerler; değişimlerden sonra a2 fili d5’e gelir ve hatlar açılır. Motor 16.d5 ile 16.Bh4’ü neredeyse eşit görüyor (ikisi de yaklaşık +0.3); d5 tek kalmış piyonun planını uygulayan hamle.',
      link: 'Tek kalmış d-piyonunun en güçlü fikri d5 kırılmasıdır.' },
    { id: 'kk85-2', kind: 'tekrar', plan: false, title: 'Qxd7! kombinasyonu',
      source: 'Kasparov – Karpov, 1985, 11. oyun (23. hamle)',
      fen: '3r2k1/pb1r1pp1/1pn2q1p/3B4/6Q1/P4NP1/1P3PP1/3RR1K1 w - - 7 23',
      prompt: 'Karpov 22...Rcd8 ile kalelerini ikiledi. Beyazın kombinasyonunu sonuna kadar oynayın.',
      hint: 'd7 kalesini vezirle alın, sonra e-hattından şah çekin; fil açarak saldırıyı tamamlar.',
      line: ['Qxd7', 'Rxd7', 'Re8+', 'Kh7', 'Be4+'],
      explanation: '**23.Qxd7! Rxd7 24.Re8+ Kh7 25.Be4+** ve fil şah çekerken d1 kalesi d7 kalesine saldırır. Motor: Qxd7 +6.1, başka hamleler eşitlik.',
      link: 'Arka yatayı zayıf şaha karşı vezir fedası ve açarak saldırı.' },
    { id: 'kk85-3', kind: 'transfer', plan: false, title: 'd5 sonrası: dxe6',
      source: 'Polugayevski – Petrosyan, SSCB Şampiyonası, Leningrad 1960 (12. hamle)',
      fen: 'r2q1rk1/pb1n1ppp/1p2pn2/2pP4/2B5/2b1PN2/PP2QPPP/R1BR2K1 w - - 0 12',
      prompt: 'Beyaz d5 kırılmasını yaptı; Siyah ...Bxc3 ile atı aldı. Şimdi c3 fili mi alınmalı, yoksa merkezde değişim mi?',
      hint: 'Önce e6’da alın; f7 ve e6 açılırsa c4 fili güçlenir.',
      line: ['dxe6'],
      explanation: '**12.dxe6!** Piyon e6’yı alır; Siyah ...Bxf3 gxf3 fxe6 sonrası Bxe6+ ile şahın önü açılır. Motor: dxe6 +0.6, 12.bxc3 −1.6.',
      link: 'Kasparov’un 16.d5 hamlesi gibi, d-piyonunun ilerleyişi c4 filinin a2-g8 çaprazını açar.' },
    { id: 'kk85-4', kind: 'transfer', plan: true, title: 'Spasski’nin d5 kırılması',
      source: 'Spasski – Petrosyan, SSCB Takımlar Şampiyonası 1975 (24. hamle)',
      fen: 'r2r2k1/1pRnqppp/4p3/pB3n2/Pb1P1BQ1/5N2/1P3PPP/R5K1 w - - 2 24',
      prompt: 'Tek kalmış d4 piyonu; Beyazın kalesi c7’de, vezir g4’te, fil b5’te. Tek kalmış piyonun fikrini uygulayın.',
      hint: 'Piyon ilerleyip e6’ya saldırabilir.',
      line: ['d5'],
      explanation: '**24.d5!** Piyon e6’ya saldırır ve Beyazın taşları için hatlar açılır. Motor: d5 +1.7, 24.Rac1 +1.3.',
      link: 'Kasparov ve Spasski aynı kırılmayı farklı konumlarda yaptı: d5 ile tek kalmış piyon zayıflık olmaktan çıkar.' },
  ],
  sources: [
    { title: 'Wikipedia: World Chess Championship 1985', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1985' },
    { title: 'Wikipedia: Nimzo-Indian Defence (4.Nf3, Kasparov varyantı)', url: 'https://en.wikipedia.org/wiki/Nimzo-Indian_Defence' },
    { title: 'The Spectator (Raymond Keene), 23 Kasım 1996: oyunun notları', url: 'https://archive.spectator.co.uk/article/23rd-november-1996/74/simpsons' },
    { title: 'ChessBase India: 1985 Dünya Şampiyonası, Kasparov', url: 'https://chessbase.in/news/1985-wc-garry-kasparov' },
    { title: 'Chess.com (batgirl): A Fine Combination III', url: 'https://www.chess.com/blog/batgirl/a-fine-combination-iii' },
  ],
};
