// Botvinnik – Keres, 20. SSCB Şampiyonası, Moskova 1952. Kaynak: PgnMentor (Keres.pgn).
export default {
  id: 'botvinnik-keres-1952',
  theme: 'Merkez kırılması: f3 ve e4',
  white: 'Mihail Botvinnik', black: 'Paul Keres',
  whiteShort: 'Botvinnik', blackShort: 'Keres',
  event: 'SSCB Şampiyonası', site: 'Moskova', year: 1952, eco: 'D36',
  variation: 'Vezir Gambiti Reddi, Değişim Varyantı', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5 Be7 6. e3 O-O 7. Bd3 Nbd7 8. Qc2 Re8 9. Nge2 Nf8 10. O-O c6 11. Rab1 Bd6 12. Kh1 Ng6 13. f3 Be7 14. Rbe1 Nd7 15. Bxe7 Rxe7 16. Ng3 Nf6 17. Qf2 Be6 18. Nf5 Bxf5 19. Bxf5 Qb6 20. e4 dxe4 21. fxe4 Rd8 22. e5 Nd5 23. Ne4 Nf8 24. Nd6 Qc7 25. Be4 Ne6 26. Qh4 g6 27. Bxd5 cxd5 28. Rc1 Qd7 29. Rc3 Rf8 30. Nf5 Rfe8 31. Nh6+ Kf8 32. Qf6 Ng7 33. Rcf3 Rc8 34. Nxf7 Re6 35. Qg5 Nf5 36. Nh6 Qg7 37. g4 1-0`,

  summary: 'Karlsbad yapısının (Beyaz: d4-e3, Siyah: d5-c6, açık c- ve e-hatları) en öğretici oyunlarından biri. Beyazın bu yapıda iki büyük planı vardır: vezir kanadında b4-b5 ile **azınlık saldırısı** ve merkezde **f3 ile e4 kırılması**. Botvinnik ikincisini seçti. Atını f3 yerine **e2**’ye geliştirerek f-piyonunun yolunu açtı; şahını h1’e çekti, f3 ile e4 karesini kontrol altına aldı, veziri f2’ye getirip b2 ile d4’ü korudu ve ancak her şey hazır olunca **20.e4!** ile merkezi açtı. Keres 14...Nd7 ile filini değişip rahatlamayı denedi ama motorun gösterdiği 14...h6! fırsatını kaçırdı; sonra 17...Be6 ve 19...Qb6 ile pasif kaldı. Açılan merkezde Beyaz **e5** ile alan kazandı, atını **d6** ileri karakoluna yerleştirdi, Siyahın tek iyi savunucusu d5 atını değişti ve kaleleri üçüncü yataydan şah kanadına taşıdı. 29...Rf8? hatasından sonra 30.Nf5! ve 31.Nh6+ ile koyu kareler çöktü; Botvinnik 37. hamlede bağlı f5 atını kazanarak oyunu bitirdi. Botvinnik bu turnuvayı Taymanov’la birlikte ilk sırada bitirdi ve baraj maçını kazandı.',
  intro: 'Değişim Varyantı’nda Beyaz genellikle Nf3, Rb1 ve b4 ile vezir kanadında oynar. Botvinnik ise burada bambaşka bir şey yapıyor: Ng1-e2, f2-f3, Kh1, kaleler e1 ve f1’de, ardından e3-e4. Amaç merkezdeki 2’ye 1 piyon üstünlüğünü (d4+e3+f3’e karşı d5) harekete geçirip e5 ile alan kazanmak ve Siyah şahına saldırmak. Bu kurulum daha sonra Kasparov gibi oyuncuların elinde de standart bir silah oldu. Oyunu izlerken şu soruları sorun: Beyaz e4’ü neden hemen oynamıyor? Siyah ne zaman ve nasıl karşı koyabilirdi? Merkez açıldıktan sonra Beyazın hangi kareleri kazandığına dikkat edin.',
  plans: {
    white: { title: 'Beyazın planı: f3 ve e4', points: [
      'Atı **e2**’ye geliştirip f-piyonunu serbest bırakmak; at e2’den g3 üzerinden f5’e de gidebilir.',
      '**Kh1** ile şahı g1-a7 çaprazından çekmek: e4 sonrası açılacak bu çaprazda ...Qb6 ile d4’e bağlama olmasın.',
      '**f3** ile e4 karesini kontrol etmek, Siyahın ...Ne4 ile rahatlamasını engellemek ve e4’ü hazırlamak.',
      'Kaleleri **e1 ve f1**’e, veziri **f2**’ye koymak; vezir hem b2 ve d4’ü yatayda korur hem f-hattına destek verir.',
      'Hazırlık tamamlanınca **e4** ile merkezi açmak; fxe4 ile f-hattı açılır, merkezde iki piyon kalır.',
      '**e5** ile alan kazanıp atı **d6**’ya yerleştirmek; Siyahın fili kalmadığı için bu at değişilemez.',
      'Siyah atını d5’ten Bxd5 ile değişip kaleleri c3-f3 yoluyla şah kanadına götürmek; zayıflayan koyu karelerde (f6, h6) mat ağı kurmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Klasik Karlsbad manevrası ...Nbd7-f8-g6 ile şah kanadını güçlendirmek ve f4/e5 karelerine bakmak.',
      'Taş değişimleriyle (...Be7xg5, ...Be6xf5) Beyazın saldırı gücünü azaltmak; ama değişirken zaman kaybetmemek.',
      'g5 filine ...h6 ile soru sormak: fil h4’e çekilemezse (g6 atı h4’ü tutuyor) Bxf6’ya zorlanır ve Siyah fil çiftini korur.',
      'e4 kırılmasını ...Nh5 ya da ...Ne8 gibi esnek savunmalarla karşılamak, e4 sonrası d5 karesini atla tutmak.',
      'Aktif fikirler aramak (...c5 kırılması, ...a5-a4) ama b2 ve d4’ün aslında korunduğunu unutmamak: ...Qb6 kendi başına tehdit değildir.',
      'Şahın önünü sağlam tutmak; ...g6 gibi koyu kareleri zayıflatan hamlelerden ve kalelerin pasif yerlere gitmesinden kaçınmak.',
    ] },
  },
  critical: [
    { move: '9w', title: 'Nge2: f-piyonu serbest', text: 'At f3’e değil e2’ye gelişir. Böylece f2-f3 oynanabilir ve e4 kırılması hazırlanır. ChessBase’te Robert Ris’in bu oyunu ele alan yazısına göre Değişim Varyantı’nda Nge2, f3 ve kısa rok kurulumunu ilk uygulayan Botvinnik’tir; klasik Nf3-Rb1-b4 planından ayrılan merkezi bir yaklaşımdır. Atın e2’den g3 ve f4 kareleri de şah kanadına açıktır.' },
    { move: '12w', title: 'Kh1: önleyici şah hamlesi', text: 'Görünüşte sessiz bir hamle ama planın parçası. e3-e4 ve d5xe4 değişimlerinden sonra g1-a7 çaprazı açılacak; şah g1’de kalsaydı ...Qb6 ile d4 piyonu şaha bağlanırdı. Nitekim 19...Qb6 tam bu çaprazda oynandı ve şah h1’de olduğu için 20.e4 sorunsuz geldi.' },
    { move: '14b', title: '14...Nd7? Kaçan fırsat: 14...h6!', text: 'Keres filleri değişip rahatlamak istedi ama bu iki tempo harcar (Nf6-d7-f6). Motor 14...h6! hamlesini öneriyor: fil h4’e çekilemez çünkü 15.Bh4?? Nxh4 bir taş kazandırır (Motor: −4.2). Beyaz 15.Bxf6 Bxf6 oynamak zorunda kalır, Siyah da fil çiftiyle neredeyse eşit bir oyun alır (Motor: +0.1 / +0.3). Oyundaki hamleden sonra değerlendirme +1.0’a çıktı: bu, oyunun açılış bölümündeki en pahalı karardı.' },
    { move: '17w', title: 'Qf2: görünmez koruma', text: 'Vezir f2’de hem f-hattını destekler hem de ikinci yatay boyunca b2’yi ve dolaylı olarak d4’ü korur. Bu yüzden Siyahın 19...Qb6 hamlesi gerçek bir tehdit değildi: 20...Qxb2?? 21.Qxb2 ile vezir kaybedilir (Motor: +6.4).' },
    { move: '20w', title: 'e4! merkez açılıyor', text: 'Beyaz bütün taşlarını hazırladıktan sonra merkezi açar. dxe4 fxe4 ile f-hattı açılır ve Beyazın merkezdeki piyonları ilerlemeye hazırdır. Motor 20.e4’ü +1.3 ile açık farkla en iyi hamle olarak gösteriyor; sonraki en iyi seçenekler (20.g4, 20.Bb1) +0.6/+0.7 civarında kalıyor.' },
    { move: '24w', title: 'Nd6: ileri karakol', text: 'e5 piyonunun desteklediği d6 karesine yerleşen at f7, b7, e8 ve c8’e bakar, Siyah kalelerinin hareketini kısıtlar. Siyahın hiç fili kalmadığı için bu at fille değişilemez; kaleyle değişmek de (…Rxd6) kalite kaybı demektir. Motor: +2.2.' },
    { move: '29b', title: '29...Rf8? belirleyici hata', text: 'Siyah f7’yi korumak için kalesini f8’e getirdi ama bu, e7 kalesini koruyan bir taşı kaldırdı ve 30.Nf5! fikrine izin verdi (Motor: +4.9). 29...Rde8 ile d6 atını kale karşılığında değişmek (30.Nxe8 Rxe8) daha dayanıklıydı (Motor: +3.5); Siyah kalite eksiğiyle de olsa direnirdi.' },
    { move: '30w', title: 'Nf5! at fedası tehdidi', text: 'At e7 kalesine saldırır ve h6 karesine gitmeyi hedefler. Atı almak matla biter: 30...gxf5 31.Rg3+ Ng7 32.Qf6 ve 33.Qxg7# (motor üç hamlede mat buluyor). Siyah kaleyi kurtarmak zorunda kalır, Beyaz da Nh6+ ve Qf6 ile koyu karelere yerleşir.' },
  ],
  lessons: [
    'Karlsbad yapısında Beyazın iki ana planı vardır: vezir kanadında **b4-b5** azınlık saldırısı, merkezde **f3 ve e4**. Merkezi plan için atın **e2**’ye gelişmesi şarttır; f3’teki at f-piyonunu kilitler.',
    'Kırılmadan önce hazırlık: **Nge2, f3, Kh1, kaleler e1 ve f1’de, vezir f2’de**. Botvinnik e4’ü 13. hamlede oynayabilirdi ama 20. hamleye kadar bekledi; kırılma ancak bütün taşlar yerindeyken güçlüdür.',
    'Rakibin “saldırgan” görünen hamlesini somut kontrol edin: 19...Qb6 b2’ye ve d4’e bakıyor gibiydi ama f2’deki vezir ikisini de koruyordu.',
    'Merkez açıldığında **e5** ile alan kazanmak ileri karelere (d6, f6, f5) taş yerleştirmenin yolunu açar. Rakibin fili yoksa d6’daki at yerinden çıkarılamaz.',
    'Savunmada iyi taşı değişmek hesaplanmalı: 27.Bxd5 ile Beyaz fili verip Siyahın en iyi savunucusunu aldı; ardından c-hattı ve üçüncü yatay kalelere açıldı.',
    'Savunan tarafın şah önündeki piyonlarını oynatması (burada **26...g6**) koyu kareleri saldırana bırakır; f6 ve h6 Beyaz taşlarının üssü oldu.',
    'Rahatlamak için yapılan değişimler tempoya mal olabilir: 14...Nd7 yerine 14...h6 ile fili “sormak” aynı rahatlamayı tempo kaybetmeden sağlıyordu.',
  ],
  notes: {
    '1w': {
      text: 'Botvinnik vezir piyonuyla başlar ve d4 ile merkezin bir karesini işgal eder.',
      amac: 'Kapalı açılışlara yönelmek; Botvinnik’in kariyerinde 1.d4 ve 1.c4 ana silahlarıydı.',
      neden: 'Keres hem 1.e4’e karşı (Fransız, İspanyol) hem 1.d4’e karşı sağlam bir repertuvara sahipti; Botvinnik yapısal, uzun vadeli planlara dayanan oyunları tercih ettiği için d4’le başlaması doğaldı.',
      diger: [
        { move: '1.e4', text: 'Motorun hafifçe tercih ettiği hamle (Motor: +0.4). Açık oyunlara ve İspanyol’a yol açar; Botvinnik’in planlı oyun anlayışına d4 daha uygundu.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); genellikle aynı yapılara geçer ama Siyaha daha fazla seçenek bırakır.' },
      ],
    },
    '1b': {
      text: 'Keres 1...Nf6 ile başlar; d5’i hemen oynamadan merkeze at getirir.',
      amac: 'Seçenekleri açık tutmak: Nimzo-Hint, Vezir Gambiti Reddi ya da Hint savunmalarına geçebilmek.',
      neden: '1...d5 Siyahı hemen klasik Vezir Gambiti’ne bağlar; 1...Nf6 ile Siyah Beyazın 2. ve 3. hamlelerini görüp karar verebilir.',
      diger: [
        { move: '1...d5', text: 'Doğrudan klasik yol (Motor: +0.35). Beyaz 2.c4 ile Vezir Gambiti’ne girer; oyunda da aynı yapı oluştu.' },
        { move: '1...c6', text: 'Slav yapısına yönelen alternatif (Motor: +0.4); Karlsbad yapısının oluşmasını zorlaştırır.' },
      ],
    },
    '2w': {
      text: '2.c4 ile Beyaz d5 karesine ikinci kez baskı kurar ve merkezde alan ister.',
      amac: 'Siyah ...d5 oynarsa c4xd5 ile merkezi şekillendirme hakkını elde etmek.',
      neden: 'c4 piyonu Vezir Gambiti’nin temelidir; Botvinnik’in daha sonra yapacağı cxd5 değişimi de bu piyon sayesinde mümkündür.',
      diger: [
        { move: '2.Nf3', text: 'Daha sakin bir hamle sırası (Motor: +0.4); Siyaha ...Bb4+ ya da ...b6 gibi farklı yapılar için fırsat verir.' },
        { move: '2.Bg5', text: 'Trompowski tarzı bir fikir; merkezi c4 ile değil taş baskısıyla kontrol etmeye çalışır, Karlsbad yapısına götürmez.' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah f8 filinin yolunu açar ve ...d5 ya da ...Bb4 için hazırlanır.',
      amac: 'Sağlam bir piyon zinciri (e6-d5) kurmaya hazırlanmak, gerekirse Nimzo-Hint’e geçmek.',
      neden: 'Keres’in repertuvarında hem Nimzo-Hint hem Vezir Gambiti Reddi vardı; 2...e6 her ikisini de açık tutar.',
      diger: [
        { move: '2...g6', text: 'Kral Hint ya da Grünfeld’e yönelir (Motor: +0.35); bambaşka, daha dinamik bir oyun.' },
        { move: '2...c6', text: 'Slav’a geçiş (Motor: +0.4); c8 filini piyon zincirinin dışına çıkarma fikri.' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile at d5 ve e4 karelerine baskı yapar.',
      amac: 'd5’e üçüncü kez saldırıp ileride cxd5 değişimini etkili kılmak; e4 karesini de kontrol etmek.',
      neden: '3.Nc3, 3...Bb4 ile Nimzo-Hint’e izin verir; Botvinnik bunu göze aldı. Atın c3’te olması, Değişim Varyantı’nda d5’e baskının ve e4 kırılmasının temel taşıdır.',
      diger: [
        { move: '3.Nf3', text: 'Nimzo-Hint’ten kaçınan hamle (Motor: +0.4); 3...d5 sonrası benzer yapılar oluşabilir ama atın e2’ye gitme seçeneği kalmaz.' },
        { move: '3.g3', text: 'Katalan (Motor: +0.4); uzun çaprazdan d5’e baskı, bambaşka bir yapı.' },
      ],
    },
    '3b': {
      text: 'Siyah 3...d5 ile merkezde piyon karşılığı verir; oyun Vezir Gambiti Reddi’ne geçer.',
      amac: 'Merkezi sağlam tutmak ve klasik yapı içinde oynamak.',
      neden: 'Keres burada Nimzo-Hint’i (3...Bb4) seçmedi; Vezir Gambiti Reddi’nin sağlam yapısını tercih etti. Bunun bedeli Beyazın Değişim Varyantı’nı seçebilmesidir.',
      diger: [
        { move: '3...Bb4', text: 'Nimzo-Hint (Motor: +0.2): c3 atını bağlar ve e4’ü engeller; motor bunu hafifçe tercih ediyor.' },
        { move: '3...c5', text: 'Benoni tipi oyun (Motor: +0.5); 4.d5 ile Beyaz alan kazanır.' },
      ],
    },
    '4w': {
      text: '4.cxd5 ile Botvinnik **Değişim Varyantı**’nı seçer.',
      amac: 'Merkezdeki gerginliği erken çözüp yapıyı sabitlemek: Karlsbad yapısı oluşur ve Beyaz planını (azınlık saldırısı ya da e4) kendisi seçer.',
      neden: 'Değişim, Siyahın c8 filini serbest bırakır gibi görünse de yapı Beyaza uzun vadeli, net planlar verir. Botvinnik bu yapıyı çok iyi bilirdi; sürpriz değil derin bilgiye dayanan bir seçimdi.',
      diger: [
        { move: '4.Bg5', text: 'Ortodoks Savunma’ya gider (Motor: +0.3); Siyah ...dxc4 ya da ...h6 gibi seçeneklerle daha fazla esneklik kazanır.' },
        { move: '4.Nf3', text: 'Klasik ana hat (Motor: +0.3); Değişim Varyantı’na sonra da geçilebilir ama at f3’e bağlanmış olur, Nge2 planı kaybolur.' },
      ],
    },
    '4b': {
      text: 'Siyah piyonla alır: 4...exd5. Karlsbad yapısı kuruldu.',
      amac: 'Merkezde d5 piyonunu korumak ve c8 filinin çaprazını açmak.',
      neden: '4...Nxd5 de oynanır ama Beyaz 5.e4 ile büyük merkez kurar. Piyonla almak Siyaha sağlam bir merkez verir; karşılığında açık e-hattı ve Beyazın yarı açık c-hattı oluşur.',
      diger: [
        { move: '4...Nxd5', text: '5.e4 Nxc3 6.bxc3 ile Beyaz güçlü bir merkez alır (Motor: +0.4); farklı bir yapı.' },
        { move: '4...c5?!', text: 'Piyon fedası fikri; 5.dxc6 Nxc6 sonrası Siyahın yeterli karşılığı yok (Motor: +1.2).' },
      ],
    },
    '5w': {
      text: '5.Bg5 ile fil f6 atını bağlar ve d5’e dolaylı baskı yapar.',
      amac: 'd5’in savunucusu olan f6 atını sabitlemek, Siyahın gelişimini zorlaştırmak.',
      neden: 'Değişim Varyantı’nın ana hattı budur. Atın henüz f3’e gitmemesi önemlidir: bugün de ana hat 5.Bg5’tir çünkü Nge2 seçeneğini saklı tutar (Beauchess blogundaki Değişim Varyantı tarihçesi de bunu vurgular).',
      diger: [
        { move: '5.Nf3', text: 'Daha klasik gelişim (Motor: +0.25); ama at f3’e bağlanır ve merkezi f3-e4 planı ortadan kalkar.' },
        { move: '5.Bf4', text: 'Filin f4’ten c7 ve d6’ya baktığı sistem (Motor: +0.2); 5...c5 gibi aktif cevaplara daha açık.' },
      ],
    },
    '5b': {
      text: '5...Be7 ile bağ kaldırılır; fil g5 filine karşı durur.',
      amac: 'f6 atının bağını çözmek ve rok yapmaya hazırlanmak.',
      neden: 'Bu doğal gelişim hamlesi Bxf6 sonrası Bxf6 ile alıp fil çiftini korumayı da sağlar.',
      diger: [
        { move: '5...c6', text: 'Önce d5’i sağlamlaştırır, Bf5 için seçenek bırakır (Motor: +0.3); aynı yapılara gider.' },
        { move: '5...Nbd7', text: 'Bilinen bir tuzak hamle sırası (Motor: +0.4): 6.Nxd5?? Nxd5! 7.Bxd8 Bb4+ ile Siyah taş kazanır.' },
      ],
    },
    '6w': {
      text: '6.e3 ile Beyaz d4’ü destekler ve f1 filinin yolunu açar.',
      amac: 'Gelişimi tamamlamak; Bd3 ve ardından Nge2/Qc2 kurulumu.',
      neden: 'e3 piyonu ileride e4’e ilerleyecek kırılma piyonudur. Önce e3’te durması d4’ü sağlam tutar.',
      diger: [
        { move: '6.Qc2', text: 'Önce vezir (Motor: +0.2); Siyahın ...Bf5 ile filini aktif etmesini engeller, aynı planlara gidebilir.' },
        { move: '6.Nf3', text: 'Klasik gelişim (Motor: +0.1); merkezi plandan vazgeçmek demektir.' },
      ],
    },
    '6b': {
      text: 'Siyah 6...O-O ile şahını güvenliğe alır.',
      amac: 'Şahı korumak ve kaleyi e8’e getirmeye hazırlanmak.',
      neden: 'Beyazın uzun rok yapıp şah kanadına piyon saldırısı yapma seçeneği de var; Siyah bunu görmeden rok yapmayı tercih etti.',
      diger: [
        { move: '6...h6', text: 'Önce file soru sorar (Motor: +0.3); 7.Bh4 ile bağ sürer, ama g5 karesi zayıflar.' },
        { move: '6...c6', text: 'd5’i sağlamlaştırır (Motor: +0.4); ...Bf5 seçeneğini korur.' },
      ],
    },
    '7w': {
      text: '7.Bd3 ile fil b1-h7 çaprazına yerleşir.',
      amac: 'h7’ye baskı yapmak ve Siyahın ...Bf5 ile filini değişmesini zorlaştırmak.',
      neden: 'Bd3 hem şah kanadı saldırısına hem merkezi plana uyar; f5 karesini kontrol etmesi Siyahın en iyi gelişim yolunu kapatır.',
      diger: [
        { move: '7.Qc2', text: '(Motor: +0.25) Aynı fikir, farklı hamle sırası; ...Bf5’i önler.' },
        { move: '7.Nf3', text: '(Motor: +0.25) Klasik yol; Beyaz azınlık saldırısını seçmiş olur.' },
      ],
    },
    '7b': {
      text: '7...Nbd7 ile at d7’ye gelişir; ...Re8, ...Nf8 ve ...Ng6 manevrası planlanıyor.',
      amac: 'Karlsbad yapısının klasik savunma düzenini kurmak: at f8’den g6’ya gidip şah kanadını tutacak.',
      neden: 'Bu manevra Siyahın şahını korur ama zaman alır. Motor önce 7...Re8’i (Motor: +0.3) biraz daha esnek buluyor; fark küçük.',
      diger: [
        { move: '7...Re8', text: 'Önce kale (Motor: +0.3); atın d7’ye mi c6’ya mı gideceği sonraya kalır.' },
        { move: '7...h6', text: 'File soru (Motor: +0.3); 8.Bh4 c6 9.Nge2 ile benzer oyun.' },
      ],
    },
    '8w': {
      text: '8.Qc2 ile vezir c2’ye gelir; h7’ye ve f5’e bakar.',
      amac: 'Bd3 ile birlikte b1-h7 çaprazında batarya kurmak, ...Bf5 değişimini engellemek ve uzun rok seçeneğini açık tutmak.',
      neden: 'Botvinnik at kararını (f3 mü e2 mi) ertelemek istedi. Motor 8.Nf3’ü (+0.5) biraz daha iyi buluyor, ama o zaman e2 planı yok olurdu; Botvinnik’in seçimi plan tercihidir.',
      diger: [
        { move: '8.Nf3', text: 'Motorun ilk tercihi (Motor: +0.5); azınlık saldırısına uygun klasik kurulum.' },
        { move: '8.h3', text: '(Motor: +0.45) ...Ng4 gibi fikirleri önler ve file h2’de yer açar.' },
      ],
    },
    '8b': {
      text: '8...Re8 ile kale açık e-hattına geçer ve at için f8 karesi boşalır.',
      amac: '...Nf8-g6 manevrasını hazırlamak ve e-hattında baskı kurmak; e4 kırılmasını da dolaylı olarak engellemek.',
      neden: 'e-hattındaki kale, Beyaz e4 oynadığında e4 piyonuna baskı yapacaktır; f8’in boşalması da savunma manevrası için gereklidir.',
      diger: [
        { move: '8...h6', text: '(Motor: +0.4) File soru sorar; g5 karesini kontrol eder ama g6’yı zayıflatabilir.' },
        { move: '8...c6', text: '(Motor: +0.4) d5’i destekler; ...Re8 sonraya kalır.' },
      ],
    },
    '9w': {
      text: '**9.Nge2!** At f3’e değil e2’ye gelişir.',
      amac: 'f-piyonunun yolunu açmak: f2-f3 ve ardından e3-e4 ile merkezi kırmak. At e2’den g3’e ya da f4’e giderek şah kanadına da katılabilir.',
      neden: 'ChessBase’teki yazısında Robert Ris bu oyunu Vezir Gambiti özelinin ana oyunu olarak seçer ve Nge2, f3 ve kısa rok kurulumunu ilk kullananın Botvinnik olduğunu, bunun klasik Nf3-Rb1-b4 planından ayrılan merkezi bir yaklaşım olduğunu yazar. Motor 9.Nf3’ü (+0.3) çok az önde görüyor; fark önemsiz, plan ise çok daha keskin.',
      diger: [
        { move: '9.Nf3', text: 'Klasik gelişim (Motor: +0.3); azınlık saldırısına gider, f-piyonu kilitlenir.' },
        { move: '9.h3', text: '(Motor: +0.3) Bekleyen hamle; at kararını yine erteler.' },
        { move: '9.O-O-O', text: 'Uzun rok ve g4-h4 ile şah kanadı saldırısı; Ris’in de andığı agresif alternatif plan, ama şahı açık c-hattına götürür.' },
      ],
    },
    '9b': {
      text: '9...Nf8 ile at klasik g6 yolculuğuna başlar.',
      amac: 'Atı g6’ya (ya da e6’ya) getirip şah kanadını savunmak; f4 ve e5 karelerini kontrol etmek.',
      neden: 'At e2’de olduğu için Beyazın e4 planı gelecektir; Siyah önce şahını sağlamlaştırmak istedi. Motor 9...a5 ya da 9...c6’yı (+0.2) aynı düzeyde görüyor.',
      diger: [
        { move: '9...c6', text: '(Motor: +0.2) Önce d5’i destekler, fil için d6 karesini açar.' },
        { move: '9...a5', text: '(Motor: +0.2) Vezir kanadında alan; b4’ü önler, Beyazın Rb1-b4 planına karşı önlem.' },
      ],
    },
    '10w': {
      text: 'Beyaz 10.O-O ile kısa rok yapar.',
      amac: 'Şahı güvenliğe almak; artık f3-e4 planı için kaleler f1 ve e1’e gelebilir.',
      neden: 'Kısa rok, merkezi kırılma planının doğal parçasıdır: uzun rok c-hattına açık kalırdı. Motor da 10.O-O’yu en iyi buluyor (+0.4).',
      diger: [
        { move: '10.Rd1', text: '(Motor: +0.3) Kaleyi merkeze getirir ama roku geciktirir.' },
        { move: '10.f3', text: 'Planı hemen başlatmak mümkün; ancak şah merkezde kalırken e-hattı açılırsa risk doğar.' },
      ],
    },
    '10b': {
      text: '10...c6 ile d5 desteklenir ve file d6 karesi açılır.',
      amac: 'Merkezi sağlamlaştırmak ve vezire c7/b6, file d6 karelerini açmak.',
      neden: '10...c5? hemen kötüdür: 11.dxc5 Bxc5 12.Bxf6 Qxf6 13.Nxd5 ile d5 piyonu düşer (Motor: +2.2). Bu yüzden Siyah önce ...c6 ile sağlam kalır.',
      diger: [
        { move: '10...g6', text: '(Motor: +0.3) ...Ne6 için hazırlık; koyu kareleri biraz zayıflatır.' },
        { move: '10...c5?', text: '11.dxc5 Bxc5 12.Bxf6 Qxf6 13.Nxd5 ile Beyaz piyon kazanır (Motor: +2.2).' },
      ],
    },
    '11w': {
      text: '11.Rab1: kale b1’e gelir; b2-b4 ile azınlık saldırısı seçeneği masada kalır.',
      amac: 'Siyahı iki plan arasında tahmin yürütmeye zorlamak: b4-b5 mi, f3-e4 mü?',
      neden: 'Psikolojik ve esnek bir hamle; Siyah vezir kanadına önlem alırsa (…a5) Beyaz merkeze döner. Motor 11.Rae1’i (+0.4) daha tutarlı buluyor; nitekim kale 14. hamlede e1’e gitti, yani Rab1 bir tempoya mal oldu (Motor: +0.2).',
      diger: [
        { move: '11.Rae1', text: 'Motorun tercihi (Motor: +0.4): doğrudan e4 planı, kale tek hamlede doğru kareye gider.' },
        { move: '11.Rad1', text: '(Motor: +0.3) d4’ü destekler, e4 sonrası d-hattında oyun.' },
        { move: '11.h3', text: '(Motor: +0.3) ...Nh5 ve ...Ng4 fikirlerine karşı bekleyiş.' },
      ],
    },
    '11b': {
      text: '11...Bd6 ile fil d6’ya geçer; h2’ye ve f4 karesine bakar.',
      amac: 'Fili aktif bir çapraza koymak ve b8-h2 çaprazından Beyaz şahına baskı yapmak.',
      neden: 'Fil e7’de pasifti. Ancak iki hamle sonra 13...Be7 ile geri döndüğü için bu da zaman kaybına dönüştü. Motor 11...a5’i (+0.2) daha iyi buluyor: azınlık saldırısını önler ve yerinde bir hamledir.',
      diger: [
        { move: '11...a5', text: 'Motorun tercihi (Motor: +0.2); b4’ü engeller, Rab1’in anlamını azaltır.' },
        { move: '11...a6', text: '(Motor: +0.3) ...b5 ile vezir kanadında alan kazanma fikri.' },
      ],
    },
    '12w': {
      text: '12.Kh1: şah g1’den h1’e çekilir.',
      amac: 'Şahı g1-a7 çaprazından uzaklaştırmak. e4 sonrası d5xe4 ile bu çapraz açılacak ve ...Qb6 ile d4 piyonu şaha bağlanabilirdi.',
      neden: 'Önleyici hamlelerin tipik örneği. Beyaz e4’ü oynamadan önce bütün taktik sorunları çözüyor. Motor 12.Kh1 ve 12.f3’ü eşit buluyor (+0.55).',
      diger: [
        { move: '12.f3', text: '(Motor: +0.6) Planı hemen sürdürür; Kh1 sonraya kalır.' },
        { move: '12.h3', text: '(Motor: +0.5) Şaha hava açar ama g3 karesini zayıflatır.' },
      ],
    },
    '12b': {
      text: '12...Ng6 ile at hedefine varır; f4, e5 ve h4 karelerine bakar.',
      amac: 'Şah kanadını güçlendirmek ve Beyazın Ng3-f5 manevrasını zorlaştırmak.',
      neden: 'At g6’da h4 karesini tutar; bu ileride 14...h6 fikrinde çok önemli olacak (Bh4 mümkün olmayacak). Motor 12...h6 ve 12...Bb8’i benzer görüyor.',
      diger: [
        { move: '12...h6', text: '(Motor: +0.5) File hemen soru sorar; 13.Bh4 ile bağ sürer.' },
        { move: '12...Bb8', text: '(Motor: +0.5) Fil b8’den h2’ye baskı, vezir d6’ya gelebilir.' },
      ],
    },
    '13w': {
      text: '**13.f3!** e4 kırılmasının hazırlığı.',
      amac: 'e4 karesini kontrol etmek, Siyahın ...Ne4 ile değişip rahatlamasını önlemek ve e3-e4 için destek kurmak.',
      neden: 'Hemen 13.e4 erkendi (Motor: +0.3): 13...dxe4 14.Nxe4 Be7 sonrası taşlar değişir ve Beyazın merkezi piyon çoğunluğu oluşmaz. f3 ile hazırlanan e4, fxe4 ile geri alınabilecek ve merkezde iki piyon kalacak. Motor 13.f3’ü en iyi buluyor (+0.6).',
      diger: [
        { move: '13.e4', text: 'Erken (Motor: +0.3); 13...dxe4 14.Nxe4 ile değişimler Siyahı rahatlatır.' },
        { move: '13.f4', text: '(Motor: +0.3) f5 ile şah kanadında alan; ama e4 karesini Siyaha bırakır ve e3 geri kalır.' },
      ],
    },
    '13b': {
      text: '13...Be7 ile fil e7’ye geri döner.',
      amac: 'g5 filini değişip Beyazın saldıran taşlarını azaltmak.',
      neden: 'Keres e4 kırılmasının geleceğini gördü ve önce taş değişmek istedi. Motor bu hamleyi en iyi buluyor (+0.6): 13...Be6 ya da 13...a6 gibi hamlelere 14.e4! ile cevap gelir (Motor: +1.0/+1.1).',
      diger: [
        { move: '13...Be6', text: '14.e4 dxe4 15.fxe4 ile Beyaz kırılmayı hemen yapar (Motor: +1.0).' },
        { move: '13...a5', text: '(Motor: +1.1) Vezir kanadında oyun, yine 14.e4 ile merkezde geç kalır.' },
      ],
    },
    '14w': {
      text: '14.Rbe1: kale b1’den e1’e geçer; Beyaz artık planını açıkça seçti.',
      amac: 'e-hattında e4 kırılmasını desteklemek; e-piyonu ilerlediğinde kale arkasında olacak.',
      neden: 'Bu hamle 11.Rab1’in bir tempo kaybı olduğunu gösteriyor. Motor 14.e4 (+0.5) ya da 14.Rbd1’i (+0.5) biraz daha iyi buluyor; Rbe1 sonrası Siyahın 14...h6! ile eşitlik bulma şansı vardı.',
      diger: [
        { move: '14.e4', text: '(Motor: +0.5) Hemen kırılma: 14...dxe4 15.fxe4 Ng4 16.Bd2 c5 ile keskin oyun.' },
        { move: '14.Rbd1', text: '(Motor: +0.5) d4’ü önceden destekler; e4 sonrası d-hattı.' },
      ],
    },
    '14b': {
      text: '14...Nd7?! Siyah atını geri çekerek fil değişimini zorlar.',
      amac: 'Be7xg5 değişimini sağlamak; Beyazın saldırı potansiyelini azaltmak.',
      neden: 'Fikir mantıklı ama yöntem yavaş: at f6’dan d7’ye gidip iki hamle sonra f6’ya dönüyor. Motor 14...h6!’ı açık farkla öneriyor (+0.1): 15.Bh4?? Nxh4 (g6 atı h4’ü tutuyor) taş kaybettirir, Beyaz 15.Bxf6 Bxf6 oynamak zorundadır ve Siyah fil çiftini korur. Oyundaki hamleden sonra değerlendirme +1.0.',
      diger: [
        { move: '14...h6!', text: 'Motorun en iyisi (Motor: +0.1): 15.Bxf6 Bxf6 16.Ng3 Nf8 17.Qf2 Bh4 ile Siyah iyi durumda; 15.Bh4?? Nxh4 −4.2.' },
        { move: '14...Bd7', text: '(Motor: +0.6) 15.e4 dxe4 16.fxe4 Ng4 ile Beyaz merkezde biraz daha iyi.' },
        { move: '14...Be6', text: '(Motor: +0.6) Fili gelişir; 15.Ng1 ve e4 planı sürer.' },
      ],
    },
    '15w': {
      text: '15.Bxe7: Beyaz filini değişir.',
      amac: 'Koyu kareli filleri değişmek; böylece ileride d6 ve f6 karelerini Siyahın koyu filinden kurtarmış olur.',
      neden: 'Fil geri çekilirse (15.Bf4 Bh4) Siyah rahatlar. Değişim Beyazın planına uyar: koyu filler gidince e5-d6 kareleri Beyaz atına kalır. Motor: +0.9.',
      diger: [
        { move: '15.Bf4', text: '(Motor: +0.3) 15...Bh4 16.g3 Be7 ile Siyah zaman kazanır.' },
        { move: '15.Bxg6', text: '(Motor: +0.3) 15...hxg6 ile Siyahın g6 atı gider ama Beyaz iyi filini verir.' },
      ],
    },
    '15b': {
      text: '15...Rxe7: kale alır ve e-hattında kalır.',
      amac: 'e-hattında baskıyı korumak; vezir d8’de esnek kalır.',
      neden: '15...Nxe7?? 16.Bxh7+ ile piyon kaybettirir (Motor: +2.3). 15...Qxe7 de mümkündü (+1.2) ama kale alımı biraz daha iyi (+1.0).',
      diger: [
        { move: '15...Qxe7', text: '(Motor: +1.2) Vezir e-hattına gelir ama e4 sonrası hedef olabilir.' },
        { move: '15...Nxe7?', text: '16.Bxh7+ Kf8 17.Bd3 ile Beyaz piyon kazanır (Motor: +2.3).' },
      ],
    },
    '16w': {
      text: '16.Ng3: at e2’den g3’e geçer; f5 ve e4 karelerine bakar.',
      amac: 'Atı şah kanadına getirmek, Nf5 ile baskı kurmak ve e4’ü desteklemek.',
      neden: 'e2’deki at görevini (f-piyonunu serbest bırakmak) tamamladı; artık aktif bir kare arıyor. Motor 16.Ng3 ve 16.e4’ü eşit buluyor (+0.9).',
      diger: [
        { move: '16.e4', text: '(Motor: +0.9) 16...dxe4 17.fxe4 Nb6 18.e5 ile hemen kırılma.' },
        { move: '16.Qd2', text: '(Motor: +0.8) Vezir d2’den f-hattına geçmeye hazırlanır.' },
      ],
    },
    '16b': {
      text: '16...Nf6: at f6’ya geri döner; e4 ve d5’i kontrol eder.',
      amac: 'e4 kırılmasını zorlaştırmak; at e4’e bakıyor.',
      neden: 'At yeniden f6’da ama iki tempo harcandı. Motor 16...Re8 ile kaleyi geri götürmeyi ya da 16...Nf6’yı aynı düzeyde görüyor (+1.0).',
      diger: [
        { move: '16...Re8', text: '(Motor: +1.0) Kale e8’e döner; e7 karesi atlar için boşalır.' },
        { move: '16...a5', text: '(Motor: +1.1) Vezir kanadında karşı oyun arar; 17.f4 ile Beyaz şah kanadında ilerler.' },
      ],
    },
    '17w': {
      text: '17.Qf2: vezir c2’den f2’ye geçer.',
      amac: 'f-hattını desteklemek, h4 karesine bakmak ve ikinci yatay boyunca b2’yi korumak.',
      neden: 'Bu hamle e4 öncesi son hazırlıktır. Vezir f2’de b2’yi yatayda, d4’ü de dolaylı olarak korur; bu yüzden 19...Qb6 boş bir tehdit olacak. Motor da 17.Qf2’yi en iyi buluyor (+1.0).',
      diger: [
        { move: '17.Qd2', text: '(Motor: +0.7) Vezir d4’ü doğrudan korur ama f-hattına uzak kalır.' },
        { move: '17.b3', text: '(Motor: +0.7) b2’yi önceden korur ama c3 atını zayıflatır.' },
      ],
    },
    '17b': {
      text: '17...Be6 ile Siyah filini gelişir ve d5’i korur.',
      amac: 'd5’e destek vermek ve Nf5 gelirse değişmek.',
      neden: 'Fil e6’da Nf5’e karşı sert bir cevap değil; Beyaz atı f5’e gelince Siyah değişmek zorunda kalacak ve Beyazın fili f5’e yerleşecek. Motor 17...b6’yı (+0.85) öneriyor: fil b7 ya da a6’dan oynar, ...c5 kırılması hazırlanır.',
      diger: [
        { move: '17...b6', text: 'Motorun tercihi (Motor: +0.85): ...c5 ile merkezde karşı oyun hazırlar.' },
        { move: '17...Qd6', text: '(Motor: +0.85) Vezir d6’dan f4 ve g3’e bakar; ...c5 fikri.' },
        { move: '17...Qc7', text: '(Motor: +0.85) Vezir b8-h2 çaprazına geçer.' },
      ],
    },
    '18w': {
      text: '18.Nf5: at f5’e gelir ve değişimi teklif eder.',
      amac: 'Siyahın fili ile değişip f5’e fil yerleştirmek; Siyahın açık kareli filini oyundan çıkarmak.',
      neden: 'Botvinnik net bir yolu seçti: değişimden sonra Siyahta hiç fil kalmayacak, Beyazın fili ise b1-h7 çaprazında güçlü olacak. Motor 18.f4!’ı daha keskin buluyor (+1.5): 18...Nf8 19.f5 ile Siyah fili kovulur ve e4 daha güçlü gelir.',
      diger: [
        { move: '18.f4', text: 'Motorun tercihi (Motor: +1.5): 18...Nf8 19.f5 Bd7 20.e4 dxe4 21.Ncxe4 ile şah kanadında daha güçlü baskı.' },
        { move: '18.h3', text: '(Motor: +1.0) Bekleyen hamle; ...Ng4 fikrini önler.' },
      ],
    },
    '18b': {
      text: '18...Bxf5: Siyah atı alır.',
      amac: 'f5’teki güçlü atı oyundan çıkarmak.',
      neden: 'Atı bırakmak (18...Rc7 ya da 18...Rd7) Beyaza 19.g4 ile şah kanadı saldırısı verirdi (Motor: +1.1). Değişim en sağlam yol (Motor: +0.8).',
      diger: [
        { move: '18...Rd7', text: '(Motor: +1.1) 19.g4 ile Beyaz şah kanadında ilerler.' },
        { move: '18...Rc7', text: '(Motor: +1.1) 19.g4 c5 20.dxc5 Rxc5 ile karşı oyun, ama şah kanadı zayıf.' },
      ],
    },
    '19w': {
      text: '19.Bxf5: Beyaz filiyle geri alır; fil f5’te b1-h7 çaprazında.',
      amac: 'Filini aktif tutmak; fil c8 ve h7’ye bakıyor, ileride e4 karesini de kontrol edecek.',
      neden: 'Zorunlu geri alım: 19.e4?? dxe4 20.fxe4 Be6 ile Beyaz bir taş eksik kalır (Motor: −4.5).',
    },
    '19b': {
      text: '19...Qb6: vezir b6’ya geçer; b2 ve d4’e bakar.',
      amac: 'Beyazı vezir kanadını korumaya zorlamak ve karşı oyun aramak.',
      neden: 'Bu tehdit görüntüdedir: b2 ve d4 f2’deki vezir tarafından korunuyor (…Qxb2?? Qxb2). Vezir b6’da merkezden uzaklaşır ve e4 kırılmasına karşı hiçbir şey yapmaz. Motor 19...Ne8’i (+0.7) öneriyor: at d6 ya da g7 üzerinden savunmaya katılır ve e5-d6 karelerini önceden kontrol eder.',
      diger: [
        { move: '19...Ne8', text: 'Motorun tercihi (Motor: +0.7): 20.e4 Nf8 21.Bh3 g6 ile Siyah sağlam kalır.' },
        { move: '19...Nf8', text: '(Motor: +0.7) At e6’ya gitmeye hazırlanır.' },
        { move: '19...h5', text: '(Motor: +0.75) h4 ile g3’e baskı ve şah kanadında alan.' },
      ],
    },
    '20w': {
      text: '**20.e4!** Merkez açılıyor.',
      amac: 'Hazırlıkların sonucunu almak: fxe4 sonrası f-hattı açılır, merkezde e4 ve d4 piyonları kalır, e5 ile alan kazanılır.',
      neden: 'Her şey hazır: şah h1’de (g1-a7 çaprazı tehlikesiz), vezir f2’de (b2 ve d4 korunuyor), kaleler e1 ve f1’de. Siyah 20...Qxb2?? oynarsa 21.Qxb2 ile vezir kaybedilir (Motor: +6.4). Motor 20.e4’ü +1.3 ile açık farkla en iyi buluyor.',
      diger: [
        { move: '20.g4', text: '(Motor: +0.7) Şah kanadında piyon saldırısı; merkezi açmadan oynanır, Siyaha ...Ne8 ile zaman verir.' },
        { move: '20.Bb1', text: '(Motor: +0.6) Fili korumaya alır; 20...h5 ile Siyah karşı oyun bulur.' },
      ],
    },
    '20b': {
      text: '20...dxe4: Siyah alır.',
      amac: 'Merkezdeki gerginliği çözmek; e4’e kale ve atla baskı yapmak.',
      neden: '20...Qxb2?? 21.Qxb2 vezir kaybettirir. Diğer hamleler de yardımcı olmuyor: 20...Nh5 21.Rd1 (Motor: +1.2) ya da 20...Rae8 21.e5 Nd7 22.f4 (Motor: +1.5). Değişim ile alım arasındaki fark küçük.',
      diger: [
        { move: '20...Nh5', text: '(Motor: +1.2) 21.Rd1 Rd8 22.e5 ile Beyaz yine e5’e ilerler.' },
        { move: '20...Qxb2??', text: '21.Qxb2 ile vezir gider (Motor: +6.4): b2 f2’deki vezir tarafından korunuyordu.' },
      ],
    },
    '21w': {
      text: '21.fxe4: f-hattı açıldı; merkezde e4 ve d4 piyonları.',
      amac: 'Piyonla geri almak: f-hattı açılır, merkezde iki piyon ilerlemeye hazır olur.',
      neden: '21.Nxe4? Nd5! ile taşlar değişir ve merkezi piyonlar kaybolur (Motor: −0.4). 21.Bxg6? hxg6 22.fxe4 de iyi filini verir (Motor: −0.2). Piyonla alım planın tamamlanmasıdır (Motor: +1.5).',
      diger: [
        { move: '21.Nxe4?', text: '21...Nd5 ile Siyah rahatlar (Motor: −0.4).' },
        { move: '21.Bxg6?', text: '21...hxg6 22.fxe4 ile Beyazın iyi fili gider (Motor: −0.2).' },
      ],
    },
    '21b': {
      text: '21...Rd8: kale d-hattına geçer ve d4’e baskı yapar.',
      amac: 'd4’ü hedef almak; e5 gelirse d5 karesi atlar için hazır olur.',
      neden: 'd4’e vezir ve kaleyle baskı Beyazı korumaya zorlar. Motor 21...Rf8’i (+1.5) aynı düzeyde görüyor: f7’yi önceden korur.',
      diger: [
        { move: '21...Rf8', text: '(Motor: +1.5) 22.h4 c5 23.e5 ile Beyaz ilerler ama f7 korunur.' },
        { move: '21...Ne8', text: '(Motor: +1.6) 22.e5 Rd8 23.Rd1 ile benzer oyun.' },
      ],
    },
    '22w': {
      text: '22.e5: piyon ilerler; f6 atı kovulur.',
      amac: 'Alan kazanmak, d6 ve f6 karelerini Beyaz taşlarına açmak, Siyah atlarını şah kanadından uzaklaştırmak.',
      neden: 'e5 piyonu d6’yı destekleyecek ve Siyahın şah kanadını sıkıştıracak. d4 piyonu bu sırada vezir f2 ile korunuyor. Motor 22.e5’i en iyi buluyor (+1.45).',
      diger: [
        { move: '22.Rd1', text: '(Motor: +1.3) d4’ü korur; 22...Rf8 23.e5 ile e5 yine gelir.' },
        { move: '22.Bxg6?', text: '(Motor: +0.2) İyi fili vermek Beyazın avantajını yok eder.' },
      ],
    },
    '22b': {
      text: '22...Nd5: at merkezin güzel karesine yerleşir.',
      amac: 'd5’te sağlam bir at; c3 atını ve e3’ü kontrol eder, e7 kalesini korur.',
      neden: 'd5 karesi Siyah için en iyi yerdir çünkü Beyazın piyonu d5’i kovamaz. 22...Nd7? 23.h4 ile h5 saldırısı daha güçlü olurdu (Motor: +2.3). 22...Ne8 (Motor: +1.7) de aynı düzeyde.',
      diger: [
        { move: '22...Ne8', text: '(Motor: +1.7) 23.Rd1 Nc7 24.Ne4 Nd5 ile benzer yerlere gelir.' },
        { move: '22...Nd7?', text: '(Motor: +2.3) 23.h4 ile h5 ve h6 tehdidi.' },
      ],
    },
    '23w': {
      text: '23.Ne4: at e4 üzerinden d6’ya gidiyor.',
      amac: 'Atı d6 ileri karakoluna götürmek; yol üzerinde g5 ve f6 karelerine de bakar.',
      neden: 'c3’teki at d5 atı tarafından değişime açıktı; e4’e çekilip daha iyi bir kareye gidiyor. Motor bu hamleyi en iyi buluyor (+1.6).',
      diger: [
        { move: '23.h4', text: '(Motor: +1.3) h5 ile g6 atını kovma fikri.' },
        { move: '23.Re4', text: '(Motor: +1.1) Kale dördüncü yatayda; 23...Nxc3 24.bxc3 c5 ile Siyah rahatlar.' },
      ],
    },
    '23b': {
      text: '23...Nf8: g6 atı f8’e geri çekilir.',
      amac: 'Şahı savunmak ve atı e6’ya getirmek; e6’dan d4 ve g5’e baskı.',
      neden: 'Keres g6 atının Bxg6 değişimine açık olduğunu ve e6’nın daha iyi bir kare olduğunu düşündü. Ama Nd6’ya izin verdi: motor 23...Qa5 ya da 23...Qc7’yi (+1.9/+2.0) biraz daha dayanıklı buluyor; oyundaki hamle +2.2.',
      diger: [
        { move: '23...Qa5', text: '(Motor: +1.9) Vezir a2 ve e1’e bakar; 24.Ng5 Ndf4 ile karşı oyun.' },
        { move: '23...Qc7', text: '(Motor: +2.0) e5’e baskı; 24.Qg3 ile Beyaz yine ilerler.' },
      ],
    },
    '24w': {
      text: '**24.Nd6!** At ileri karakola yerleşir.',
      amac: 'e5 piyonunun desteğinde d6’dan f7, b7, e8 ve c8’i kontrol etmek; Siyah taşlarının koordinasyonunu bozmak.',
      neden: 'Siyahın fili olmadığı için bu at değişilemez; kale ile değişmek kalite kaybıdır. Motor 24.Nd6’yı en iyi buluyor (+2.2).',
      diger: [
        { move: '24.Bg4', text: '(Motor: +1.8) Fil h3-c8 çaprazında; 24...Qc7 25.Nd6 ile aynı fikir.' },
        { move: '24.Ng5', text: '(Motor: +1.8) h7 ve f7’ye saldırı; ama d6 kadar güçlü değil.' },
      ],
    },
    '24b': {
      text: '24...Qc7: vezir c7’den e5’e ve d6’ya baskı yapar.',
      amac: 'd6 atına ve e5 piyonuna baskı; vezir merkeze döner.',
      neden: 'b6’daki vezir oyunun dışındaydı. Motor 24...Qc7’yi en iyi buluyor (+2.1); 24...g6 ya da 24...Nc7 25.Nc8! gibi atlamalarla daha kötü (+2.6/+2.7).',
      diger: [
        { move: '24...g6', text: '(Motor: +2.7) 25.Nc8! Rxc8 26.Bxc8 ile Beyaz kalite kazanır.' },
        { move: '24...Nc7', text: '(Motor: +2.6) 25.Nc8 benzer tema.' },
      ],
    },
    '25w': {
      text: '25.Be4: fil e4’e gelir; d5 atına ve h7’ye bakar.',
      amac: 'd5 atını değişmeye hazırlanmak ve h7’ye çapraz baskı kurmak.',
      neden: 'Fil f5’te Siyahın ...Ne7/…g6 hamleleriyle kovulabilirdi; e4’te hem merkezde hem saldırıda. Motor da 25.Be4’ü en iyi buluyor (+2.3).',
      diger: [
        { move: '25.Qg3', text: '(Motor: +2.1) Vezir g-hattına; 25...a6 26.a3 ile yavaş oyun.' },
        { move: '25.Bd3', text: '(Motor: +2.0) Fil geri çekilir; e4 kadar aktif değil.' },
      ],
    },
    '25b': {
      text: '25...Ne6: at e6’ya; d4’e ve g5’e bakar.',
      amac: 'd4’e baskı ve şah kanadını savunma; f4 ve g5 karelerini kontrol etmek.',
      neden: 'Motor 25...Ne6’yı en iyi buluyor (+2.1). Ama e6’daki at kendi kalesinin e-hattını kapatıyor.',
      diger: [
        { move: '25...Rdd7', text: '(Motor: +2.5) 26.Bxd5 cxd5 27.Rc1 ile c-hattı Beyazın.' },
        { move: '25...g6', text: '(Motor: +2.5) Koyu karelerin zayıflaması erken gelir.' },
      ],
    },
    '26w': {
      text: '26.Qh4: vezir h4’e geçer; h7 ve e7’ye bakar.',
      amac: 'Be4 ile birlikte h7’ye baskı (Qxh7+), aynı zamanda h4-e7 çaprazında e7 kalesine baskı.',
      neden: 'Vezir f2’deki görevini bitirdi; şimdi şah saldırısına katılıyor. Motor 26.Qh4’ü en iyi buluyor (+2.5).',
      diger: [
        { move: '26.Nf5', text: '(Motor: +2.4) Hemen e7 kalesine saldırı; 26...Ree8 27.Qh4 ile benzer.' },
        { move: '26.Bxd5', text: '(Motor: +1.8) Erken değişim; vezir henüz hazır değil.' },
      ],
    },
    '26b': {
      text: '26...g6: h7 korunur ama koyu kareler zayıflar.',
      amac: 'Be4 çaprazını g6 piyonuyla kapatmak ve h7 tehdidini durdurmak.',
      neden: 'g6 piyonu f6 ve h6 karelerini zayıflatıyor; Beyazın Nf5-h6 ve Qf6 fikirleri bu yüzden mümkün oluyor. Motor 26...h6’yı (+2.9) biraz daha iyi buluyor (g6: +3.5 derinlikte).',
      diger: [
        { move: '26...h6', text: '(Motor: +2.9) 27.Nf5 Ng5 28.Qg4 Kh8 ile Siyah koyu kareleri korur.' },
        { move: '26...Nf8', text: '(Motor: +3.1) h7’yi korur; 27.Qg4 g6 ile benzer zayıflık.' },
      ],
    },
    '27w': {
      text: '27.Bxd5: Beyaz d5 atını alır; Siyahın en iyi savunucusu gider.',
      amac: 'd5 atını oyundan çıkarmak; e7 kalesinin bir koruyucusu gider ve c-hattı açılır.',
      neden: 'Fil, d5 atının korumasından önemliydi; şimdi Siyahta tek kalmış d5 piyonu var ve c-hattı Beyaz kalesine açık. Motor 27.Bxd5’i en iyi buluyor (+3.1).',
      diger: [
        { move: '27.Rc1', text: '(Motor: +2.3) 27...Rxd6 28.exd6 Qxd6 ile Siyah kalite verip rahatlar.' },
        { move: '27.Bd3', text: '(Motor: +1.4) 27...Rxd6 28.exd6 Qxd6 ile Siyah aynı yöntemle rahatlar.' },
      ],
    },
    '27b': {
      text: '27...cxd5: zorunlu alım.',
      amac: 'Taşı geri almak.',
      neden: '27...Rxd6? 28.exd6 Qxd6 29.Bb3 ile Beyaz kalite kazanır (Motor: +6.1). 27...g5? 28.Qh6 ile daha da kötü (+5.2).',
      diger: [
        { move: '27...Rxd6?', text: '(Motor: +6.1) 28.exd6 Qxd6 29.Bb3 ile Beyaz kalite kazanır.' },
      ],
    },
    '28w': {
      text: '28.Rc1: kale c-hattını alır ve vezire saldırır.',
      amac: 'Tempo kazanmak, ardından c3 üzerinden kaleyi şah kanadına (f3, h3) götürmek.',
      neden: 'c-hattı açıldı; kale tempo kazanarak vezire saldırıyor. Motor 28.Rc1’i en iyi buluyor (+3.3).',
      diger: [
        { move: '28.Re3', text: '(Motor: +2.0) 28...Rxd6 29.exd6 Qxd6 ile Siyah kalite verir.' },
        { move: '28.Rf3', text: '(Motor: +1.7) Aynı fikir ama tempo yok.' },
      ],
    },
    '28b': {
      text: '28...Qd7: vezir d7’de; e6 atını ve d5’i korur.',
      amac: 'Vezirin c-hattından çekilmesi ve merkezi savunması.',
      neden: '28...b6? 29.Rxc7 ile vezir kaybedilir (Motor: +5.5). 28...Rf8? 29.Rxc7 benzer. Qd7 tek iyi kare (Motor: +3.6).',
      diger: [
        { move: '28...b6?', text: '29.Rxc7 Rxc7 30.Qf2 ile Beyaz vezir karşılığı kale ve fazla kazanır (Motor: +5.5).' },
      ],
    },
    '29w': {
      text: '29.Rc3: kale üçüncü yataydan şah kanadına geçecek.',
      amac: 'Kaleyi f3 ya da h3’e götürüp f7 ve h7’ye baskıyı artırmak.',
      neden: 'Kale üçüncü yatay boyunca şah kanadına hızla gelir; Siyahın taşları ise vezir kanadında. Motor 29.Rc3’ü en iyi buluyor (+3.4).',
      diger: [
        { move: '29.Rf3', text: '(Motor: +2.5) f-hattındaki kaleyi üçüncü yataya çıkarır; c1 kalesi geri kalır.' },
        { move: '29.Kg1', text: '(Motor: +1.9) Bekleyen hamle; saldırıyı yavaşlatır.' },
      ],
    },
    '29b': {
      text: '29...Rf8? Kale f8’e; f7’yi korur.',
      amac: 'f7’ye gelecek baskıya önceden hazırlanmak.',
      neden: 'Bu hamle e7 kalesini koruyan bir taşı kaldırır ve Nf5 fikrine izin verir (Motor: +4.9). 29...Rde8 ile d6 atını kale karşılığı değişmek daha dayanıklıydı (30.Nxe8 Rxe8, Motor: +3.5).',
      diger: [
        { move: '29...Rde8', text: '(Motor: +3.5) 30.Nxe8 Rxe8 31.Rh3 Nf8 ile kalite eksiği ama sağlam bir savunma.' },
        { move: '29...h5', text: '(Motor: +3.8) 30.g4 Rf8 31.gxh5 g5 ile Siyah şah kanadını açık tutar.' },
      ],
    },
    '30w': {
      text: '**30.Nf5!** At f5’e sıçrar.',
      amac: 'e7 kalesine saldırmak ve h6 karesine geçmeye hazırlanmak.',
      neden: '30...gxf5 31.Rg3+ Ng7 32.Qf6 ve 33.Qxg7# ile mat (motor üç hamlede mat buluyor). Siyah kaleyi kurtarmak zorunda. Motor: +5.0; sonraki en iyi hamle 30.Nc8 +2.4.',
      diger: [
        { move: '30.Nc8', text: '(Motor: +2.4) 30...Ree8 31.Nd6 ile tekrar; avantaj azalır.' },
        { move: '30.Kg1', text: '(Motor: +2.1) Sessiz hamle; Siyaha ...Ng7 ile toparlanma fırsatı verir.' },
      ],
    },
    '30b': {
      text: '30...Rfe8: kale e8’e döner; e7’yi korur.',
      amac: 'e7 kalesini kurtarmak.',
      neden: '30...gxf5? 31.Rg3+ ile mat. 30...Ree8 31.Nh6+ Kh8 32.Qf6+ Ng7 33.Nxf7+ daha kötü (Motor: +5.4). Oyundaki hamle en dayanıklı (+5.0).',
      diger: [
        { move: '30...gxf5?', text: '31.Rg3+ Ng7 32.Qf6 ve 33.Qxg7# — mat.' },
        { move: '30...Ree8', text: '(Motor: +5.4) 31.Nh6+ Kh8 32.Qf6+ Ng7 33.Nxf7+ ile Beyaz kazanır.' },
      ],
    },
    '31w': {
      text: '31.Nh6+: şah çeker; at h6’dan f7’ye ve g8’e bakar.',
      amac: 'Şahı g8’den uzaklaştırmak ve Qf6 ile mat ağı kurmak.',
      neden: 'Şah çekişiyle Siyah şahı f8’e kaçar ve Qf6 hamlesiyle h8 karesi tehdit altına girer. Motor 31.Nh6+’yı en iyi buluyor (+5.3).',
      diger: [
        { move: '31.Rcf3', text: '(Motor: +4.0) f7’ye baskı; 31...h5 32.Nh6+ ile benzer.' },
        { move: '31.Rg3', text: '(Motor: +3.3) 31...Ng7 32.Nxe7+ Qxe7 ile Siyah toparlanır.' },
      ],
    },
    '31b': {
      text: '31...Kf8: şah f8’e kaçar.',
      amac: 'Şahtan çıkmak.',
      neden: '31...Kg7?? 32.Qf6+ Kf8 33.Qh8# mat. 31...Kh8 32.Qf6+ Ng7 33.Nxf7+ daha kötü (+5.4). Kf8 tek makul kare.',
      diger: [
        { move: '31...Kh8', text: '(Motor: +5.4) 32.Qf6+ Ng7 33.Nxf7+ Rxf7 34.Qxf7 ile Beyaz f7’yi şah çekerek alır.' },
        { move: '31...Kg7??', text: '32.Qf6+ Kf8 33.Qh8# — iki hamlede mat.' },
      ],
    },
    '32w': {
      text: '32.Qf6: vezir koyu karelerde hâkim; Qh8# tehdidi.',
      amac: 'h8’de mat tehdidi kurmak ve f7’ye baskı yapmak.',
      neden: 'g6 piyonu f6’yı korumuyor; vezir oraya rahatça yerleşiyor. 32...g5?? Qh8# mat. Motor: +5.0.',
      diger: [
        { move: '32.Rcf3', text: '(Motor: +5.0) Önce kale; 32...Rc8 33.Qf6 ile aynı.' },
      ],
    },
    '32b': {
      text: '32...Ng7: tek savunma; at g7’ye geri gelip h8’i korur.',
      amac: 'Qh8# tehdidini durdurmak.',
      neden: 'Diğer hamleler (32...g5, 32...Nc5) Qh8# ile mat. Ng7 tek hamle.',
    },
    '33w': {
      text: '33.Rcf3: ikinci kale de f-hattına; f7’ye üçlü baskı.',
      amac: 'Nxf7 için hazırlık: f7 piyonu düşecek.',
      neden: 'f7’ye vezir, at ve iki kale baskısı. Motor 33.Rcf3’ü en iyi buluyor (+5.0).',
      diger: [
        { move: '33.g4', text: '(Motor: +4.8) 33...Qe6 34.Rcf3 ile aynı fikir.' },
        { move: '33.h3', text: '(Motor: +3.6) Şaha hava; saldırıyı yavaşlatır.' },
      ],
    },
    '33b': {
      text: '33...Rc8: Siyah c-hattından karşı oyun arar.',
      amac: 'Rc1+ ile karşı şah tehdidi yaratmak.',
      neden: 'Siyahın pasif savunması işe yaramıyor; karşı oyun aramaktan başka çare yok. Motor: +5.0.',
      diger: [
        { move: '33...Rd8', text: '(Motor: +5.6) 34.g4 Rc8 35.Nxf7 ile benzer.' },
        { move: '33...Rb8', text: '(Motor: +5.6) 34.Qxf7+ ile hemen kazanır.' },
      ],
    },
    '34w': {
      text: '34.Nxf7: f7 düştü; Siyah şahı çıplak.',
      amac: 'f7 piyonunu almak ve Siyah şahının son kalkanını yıkmak.',
      neden: 'f7 artık korunamaz. 34...Rxf7 35.Qxf7+ Qxf7 36.Rxf7+ ile Beyaz kazanılmış oyunsonuna geçer. Motor: +5.0.',
      diger: [
        { move: '34.Qh4', text: '(Motor: +4.6) 34...a6 35.Nxf7 ile aynı.' },
        { move: '34.Qg5', text: '(Motor: +4.5) Yavaş; Siyah ...Qe6 ile savunma kurar.' },
      ],
    },
    '34b': {
      text: '34...Re6: kale vezire saldırır.',
      amac: 'Tempo kazanmak ve f-hattını kapatmaya çalışmak.',
      neden: '34...Rxf7 35.Qxf7+ Qxf7 36.Rxf7+ Kg8 37.Rxb7 ile Beyaz kazanılmış bir oyunsonuna geçer (Motor: +5.3). Keres karmaşık bir yol seçti ama durumu kötüleştirdi (+6.1).',
      diger: [
        { move: '34...Rxf7', text: '(Motor: +5.3) 35.Qxf7+ Qxf7 36.Rxf7+ Kg8 37.Rxb7 ile Beyaz kazanır.' },
      ],
    },
    '35w': {
      text: '35.Qg5: vezir g5’e çekilir; h6 ve d8’e bakar.',
      amac: 'Veziri korumak ve f7 atını h6’ya dönmeye hazırlamak.',
      neden: 'Vezir saldırı altındaydı; g5’te hem h6’yı korur hem d8’e bakar. Motor 35.Qg5’i en iyi buluyor (+6.1).',
      diger: [
        { move: '35.Qh4', text: '(Motor: +5.3) 35...Nf5 36.Ng5 ile benzer.' },
        { move: '35.Qf4', text: '(Motor: +5.2) 35...Nf5 36.Nh6 ile benzer.' },
      ],
    },
    '35b': {
      text: '35...Nf5: at f5’e; f-hattını kapatmaya çalışır.',
      amac: 'f-hattını bloke etmek ve şahın önünü kapatmak.',
      neden: 'Şimdilik f7’deki Beyaz at f-hattını kapatıyor; ama at h6’ya döndüğü anda f5 atı f3 kalesiyle f8’deki şah arasında bağlı kalacak. Motor: +6.3.',
      diger: [
        { move: '35...Nh5', text: '(Motor: +6.8) 36.g4 Kg7 37.Qh6+ ile Beyaz kazanır.' },
      ],
    },
    '36w': {
      text: '36.Nh6: at h6’ya döner ve f5 atına ikinci kez saldırır.',
      amac: 'Bağlı f5 atına baskıyı artırmak; g4 ile at düşecek.',
      neden: 'At f5’e iki kez saldırıyor (Nh6, Rf3) ve atın kaçacak yeri yok. Motor: +6.4.',
      diger: [
        { move: '36.Nd6', text: '(Motor: +6.3) 36...Rxd6 37.Rxf5+ ile benzer.' },
        { move: '36.Rxf5+', text: '(Motor: +5.9) 36...gxf5 37.Qxf5+ ile saldırı sürer.' },
      ],
    },
    '36b': {
      text: '36...Qg7: vezir g7’den h6 atına bakar.',
      amac: 'h6 atına baskı ve f5 atını korumaya çalışmak.',
      neden: 'Siyahın iyi bir hamlesi yok; motor 36...Qe7 ya da 36...Ke8’i benzer görüyor (+6.5).',
      diger: [
        { move: '36...Qe7', text: '(Motor: +6.5) 37.Rxf5+ Ke8 38.Rf6 ile Beyaz kazanır.' },
      ],
    },
    '37w': {
      text: '37.g4: bağlı f5 atı düşüyor; Siyah terk etti.',
      amac: 'f5 atını kazanmak.',
      neden: 'g4 piyonu atı alacak; Siyah atı koruyamaz. Motor 37.Nxf5’i (+7.1) ve 37.g4’ü (+6.9) eşit görüyor.',
      diger: [
        { move: '37.Nxf5', text: '(Motor: +7.1) 37...gxf5 38.Qxf5+ ile saldırı sürer.' },
      ],
    },
  },
  qa: [
    { q: 'Botvinnik neden atını f3 yerine e2’ye geliştirdi?', a: 'At f3’te olsaydı f-piyonunu kilitlerdi ve f3-e4 planı imkânsız olurdu. e2’deki at f-piyonunu serbest bırakır, ayrıca g3 ve f5 karelerine de gidebilir. Robert Ris’in ChessBase yazısında belirttiği gibi bu kurulum klasik Nf3-Rb1-b4 planından ayrılan merkezi bir yaklaşımdır.' },
    { q: 'Beyaz e4’ü neden 13. hamlede değil 20. hamlede oynadı?', a: '13.e4 erken olurdu (Motor: +0.3): 13...dxe4 14.Nxe4 Be7 ile taşlar değişir ve merkezi piyon çoğunluğu oluşmaz. Botvinnik önce Kh1, Rbe1, Qf2 ve Nf5 ile tüm taşları hazırladı. 20. hamlede e4 +1.3’lük bir avantaj getirdi.' },
    { q: 'Siyah 19...Qb6 ile ne kazanmayı umuyordu, neden işe yaramadı?', a: 'Vezir b2 ve d4’e bakıyor gibiydi. Ama f2’deki Beyaz vezir ikinci yatay boyunca b2’yi koruyordu: 20...Qxb2?? 21.Qxb2 vezir kaybettirir. Vezir b6’da merkezden uzaklaştı ve e4 kırılmasına karşı hiçbir şey yapamadı.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En önemli an 14. hamleydi: 14...h6! ile fil h4’e çekilemezdi (15.Bh4?? Nxh4) ve Beyaz 15.Bxf6 Bxf6 oynamak zorunda kalırdı. Siyah fil çiftiyle neredeyse eşit bir oyun alırdı (Motor: +0.1). Daha sonra 17...b6 ve 19...Ne8 de daha dayanıklı hamlelerdi.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Merkezdeki 2’ye 1 piyon çoğunluğundan (d4+e3+f3 karşı d5). e4 ve e5 ile bu çoğunluk ilerledi, e5 piyonu d6 ve f6 karelerini Beyaza verdi. Siyahın fili kalmadığı için d6’daki at değişilemedi.' },
    { q: 'Keres neden 26...g6 oynadı ve bu neden kötüydü?', a: '26...g6 Be4 çaprazını kapatıp h7’yi korudu. Ama f6 ve h6 kareleri zayıfladı; Beyaz bu karelere Nf5-h6 ve Qf6 ile yerleşti. Motor 26...h6’yı biraz daha iyi buluyor (+2.9 karşı +3.5).' },
    { q: '29...Rf8 neden belirleyici hataydı?', a: 'Kale f8’e giderek e7 kalesini koruyan taşı kaldırdı ve 30.Nf5! fikrine izin verdi: 30...gxf5 31.Rg3+ ile mat. 29...Rde8 ile d6 atını kale karşılığı değişmek (30.Nxe8 Rxe8) daha dayanıklıydı (Motor: +3.5 karşı +4.9).' },
    { q: '34...Rxf7 oynansaydı ne olurdu?', a: '35.Qxf7+ Qxf7 36.Rxf7+ Kg8 37.Rxb7 ile Beyaz kazanılmış bir oyunsonuna geçer (Motor: +5.3). Keres 34...Re6 ile karmaşıklık aradı ama 35.Qg5 Nf5 36.Nh6 Qg7 37.g4 ile bağlı at düştü.' },
  ],
  sources: [
    { title: 'ChessBase: Robert Ris’ Fast and Furious – The Queen’s Gambit: Botvinnik shows the way', url: 'https://en.chessbase.com/post/robert-ris-fast-and-furious-the-queen-s-gambit-botvinnik-shows-the-way' },
    { title: 'Wikipedia: 1952 USSR Chess Championship', url: 'https://en.wikipedia.org/wiki/1952_USSR_Chess_Championship' },
    { title: 'Beauchess: Chess evolution – QGD Exchange, part four (Botvinnik – Larsen, aynı Nge2-f3-e4 planı)', url: 'https://beauchess.blogspot.com/2020/10/chess-evolution-qgd-exchange-part-four.html' },
  ],
  exercises: [
    { id: 'bk-1', kind: 'tekrar', plan: false, title: 'Hazırlık bitti, şimdi ne?',
      source: 'Botvinnik – Keres, 1952 (20. hamle)',
      fen: 'r5k1/pp2rppp/1qp2nn1/3p1B2/3P4/2N1PP2/PP3QPP/4RR1K w - - 1 20',
      prompt: 'Nge2, f3, Rbe1, Qf2: bütün hazırlıklar yapıldı. Siyah ...Qb6 ile b2 ve d4’e saldırıyor. Planınızı uygulayın.',
      hint: 'Merkezdeki piyonlardan biri bir kare ilerleyebilir.',
      line: ['e4'],
      explanation: '**20.e4!** Merkez açılır. 20...dxe4 21.fxe4 ile f-hattı açılır, ardından e5 ile alan kazanılır. Siyah 20...Qxb2?? oynarsa 21.Qxb2 ile vezirini kaybeder, çünkü f2’deki Beyaz veziri b2’yi korur (Motor: +6.7). Motor: e4 +1.3, sonraki en iyi hamle +0.6.',
      link: 'Maçın bütün planı bu kırılmaya yönelikti: Nge2 ile f-piyonu serbest kaldı, f3 ile e4 hazırlandı.' },
    { id: 'bk-2', kind: 'tekrar', plan: false, title: 'Atı şah kanadına sok',
      source: 'Botvinnik – Keres, 1952 (30. hamle)',
      fen: '5rk1/pp1qrp1p/3Nn1p1/3pP3/3P3Q/2R5/PP4PP/5R1K w - - 4 30',
      prompt: 'Merkez kırılması alan kazandırdı, Siyah ...g6 ile koyu kareleri zayıflattı. Saldırıyı tamamlayan at hamlesini bulun.',
      hint: 'At alınırsa c3 kalesi g-hattına gelebilir.',
      line: ['Nf5'],
      explanation: '**30.Nf5!** At e7 kalesine ve h6’ya saldırır. 30...gxf5 31.Rg3+ Ng7 32.Qf6 ile mat gelir. Siyah kaleyi kurtarmak zorunda, Beyaz da Nh6+ ve Qf6 ile koyu karelere yerleşir. Motor: Nf5 +5.5, sonraki en iyi hamle +2.4.',
      link: 'e5 piyonu d6 ve f6 karelerini Beyaza verdi. Merkezde kazanılan alan şimdi şah saldırısına dönüştü.' },
    { id: 'bk-3', kind: 'transfer', plan: true, title: 'Kasparov’un kırılması',
      source: 'Kasparov – Andersson, Dünya Kupası, Belfort 1988 (17. hamle)',
      fen: '3q1nk1/ppr1rppp/2p1bn2/3p4/3P1N2/2NBPP2/PP3QPP/4RR1K w - - 4 17',
      prompt: 'Aynı kurulum otuz altı yıl sonra: Nge2, f3, Rae1, Kh1, Qf2. Planın hamlesini oynayın.',
      hint: 'Botvinnik’in 20. hamlesini hatırlayın.',
      line: ['e4'],
      explanation: '**17.e4!** dxe4 18.fxe4 ile f-hattı açılır ve merkez piyonları ilerlemeye hazır olur. Kasparov 19.d5! ile kırılmayı sürdürdü. Motor e4’ü bu pozisyonda en iyi hamle olarak gösteriyor.',
      link: 'Botvinnik – Keres’teki planın neredeyse aynısı. Fark: Kasparov e4’ten sonra e5 yerine d5 ile ikinci kırılmayı yaptı ve geçer d-piyonu kazandı.' },
    { id: 'bk-4', kind: 'transfer', plan: false, title: 'Geçer piyonu ileri sür',
      source: 'Kasparov – Andersson, Dünya Kupası, Belfort 1988 (25. hamle)',
      fen: '2rq1nk1/3brppp/Qp6/3P4/4nN2/2N5/PP2B1PP/4RR1K w - - 2 25',
      prompt: 'Merkez kırılmasının sonucu: Beyazın d5’te geçer piyonu var. Siyah ...Ne4 ile c3 atına saldırdı. En güçlü devamı bulun.',
      hint: 'Piyon ilerlerken bir taşa da saldırabilir.',
      line: ['d6'],
      explanation: '**25.d6!** Piyon e7 kalesine saldırır ve c3 atını savunmak yerine oyunu ilerletir. 25...Nxd6 26.Nfd5 ile Beyaz atları merkezde hâkim olur, b6 piyonu da düşer. Motor: d6 +1.6, sonraki en iyi hamle +0.9.',
      link: 'Botvinnik e4’ten sonra e5 ile alan kazandı; Kasparov’da merkez kırılması geçer d-piyonuna dönüştü. Her iki maçta da açılan merkez, Beyaz taşlarına ileri kareler verdi.' },
  ],
};
