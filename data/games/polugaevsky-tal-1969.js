// Polugayevski – Tal, 37. SSCB Şampiyonası, Moskova 1969. Kaynak: PgnMentor (Tal.pgn).
export default {
  id: 'polugaevsky-tal-1969',
  theme: 'Piyon merkezi ve h7 fedası',
  white: 'Lev Polugayevski', black: 'Mihail Tal',
  whiteShort: 'Polugayevski', blackShort: 'Tal',
  event: 'SSCB Şampiyonası', site: 'Moskova', year: 1969, eco: 'D41',
  variation: 'Vezir Gambiti Reddi, Yarı Tarrasch Savunması', result: '1-0',
  pgn: `1. c4 Nf6 2. Nc3 e6 3. Nf3 d5 4. d4 c5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 cxd4 8. cxd4 Bb4+ 9. Bd2 Bxd2+ 10. Qxd2 O-O 11. Bc4 Nc6 12. O-O b6 13. Rad1 Bb7 14. Rfe1 Na5 15. Bd3 Rc8 16. d5 exd5 17. e5 Nc4 18. Qf4 Nb2 19. Bxh7+ Kxh7 20. Ng5+ Kg6 21. h4 Rc4 22. h5+ Kh6 23. Nxf7+ Kh7 24. Qf5+ Kg8 25. e6 Qf6 26. Qxf6 gxf6 27. Rd2 Rc6 28. Rxb2 Re8 29. Nh6+ Kh7 30. Nf5 Rexe6 31. Rxe6 Rxe6 32. Rc2 Rc6 33. Re2 Bc8 34. Re7+ Kh8 35. Nh4 f5 36. Ng6+ Kg8 37. Rxa7 1-0`,

  summary: 'Moskova’daki 37. SSCB Şampiyonası’nda (Eylül–Ekim 1969) oynanan bu oyun, “ev hazırlığı” kavramının en ünlü örneklerinden biridir. Polugayevski, 1969 başında Spasski ile birlikte yaptığı ortak çalışmada Yarı Tarrasch Savunmasının 6.e4 hattını derinlemesine incelemişti; Tal bu hazırlığın içine 25 hamle boyunca girdi. Beyaz önce c3-d4-e4 piyon merkezini kurdu, kalelerini d1 ve e1’e, yani piyonların arkasına yerleştirdi. 16.d5! ile piyon feda edip uzun çaprazı kapattı, 17.e5! ile de b1-h7 çaprazını açarak f6 karesini Siyahtan aldı. Tal aktif savunmayı seçti (18...Nb2, fili ve kaleyi aynı anda vurmak), ama bu, klasik 19.Bxh7+! fedasına ve şahın g6’ya kadar sürüklenmesine yol açtı. Sessiz 21.h4!! hazırlığın kalbiydi. Motor 22.h5+ yerine 22.Rd4’ün çok daha güçlü olduğunu gösteriyor; Tal 22...Kh6! ve 25...Qf6! ile kurtulmaya yaklaştı. Ancak ortaya çıkan oyunsonunda Beyazın aktif kalesi ve atı, Siyahın kötü filine ve dağınık piyonlarına üstün geldi; 34...Kh8 hatasından sonra mat ağı ve a7 piyonunun düşmesi oyunu bitirdi.',
  intro: 'Bu oyunu iki gözle izleyin. Birincisi açılış: Yarı Tarrasch’ta (4...c5, 5...Nxd5) Beyaz 6.e4 ile merkezde iki piyon kurar, Siyah ise atları ve filleri değişerek “sadeleşme yoluyla rahatlama” arar. Polugayevski, bu sadeleşmiş pozisyonun bile Beyaza uzun süreli bir inisiyatif bıraktığını göstermek istiyordu. İkincisi saldırının mantığı: d5 piyon fedası, e5 ile çaprazı açmak, Bxh7+ ve h4-h5 ile şahı kovalamak. Tal, savunmada bile karşı saldırıyı seven bir oyuncuydu; 18...Nb2 ve 21...Rc4 ile Beyazın taşlarını ilk vurmaya çalıştı. Oyunun sonunda kazanan şey saldırı değil, saldırının bıraktığı daha iyi oyunsonu oldu.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**c3-d4-e4 merkezini** kurmak ve korumak; 7.bxc3 ile b-piyonunu merkeze doğru almak, 8.cxd4 ile iki merkez piyonunu yan yana getirmek.',
      'Kaleleri **d1 ve e1’e**, piyonların arkasına koymak (Botvinnik’in 1930’lardaki fikri): böylece hem d5 hem e5 ilerleyişi desteklenir.',
      'Doğru anda **16.d5!** ile merkezi açmak: Siyahın b7 filinin uzun çaprazını kapatmak ve e5 için yol hazırlamak.',
      '**17.e5!** ile d3 filinin h7’ye bakışını açmak ve f6 karesini Siyahın taşlarından almak; şah kanadında savunucu bırakmamak.',
      'Vezir f4 ve at g5 ile **h7 fedası** (Bxh7+, Ng5+) yapıp, h4-h5 ile kenar piyonunu da saldırıya katmak.',
      'Saldırı yalnızca eşitliğe ya da hafif üstünlüğe dönüşse bile **aktif kale ve at** ile yedinci yataya girip oyunsonunu kazanmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Taşları değişerek (6...Nxc3, 8...Bb4+, 9...Bxd2+) Beyazın merkez saldırısını **sadeleştirmek**.',
      '...b6, ...Bb7, ...Rc8 ile **e4 ve c-hattına** baskı yapmak; at ...Na5-c4 ile Beyazın fil ve vezirini rahatsız etmek.',
      'Vezir kanadındaki **a ve b piyon çoğunluğunu** oyunsonuna saklamak; uzun vadede bu, Siyahın asıl kozudur.',
      'd5 ilerleyişine karşı fedayı kabul etmeden (16...Rc5 ya da 16...Qe7) **merkezi kapalı tutmak**.',
      'Saldırı gelirse aktif savunmak: ...Nb2 ile fil-kale çatalı, ...Rc4 ile dördüncü yatayda vezire saldırmak.',
      'Şah kanadında ...f6, ...Qf6 gibi kaynaklarla **vezir değişimine** ulaşıp oyunsonunda materyal dengesini korumak.',
    ] },
  },
  critical: [
    { move: '6w', title: '6.e4: piyon merkezi', text: 'Beyaz merkezi iki piyonla tutar ve tempo ile d5 atına saldırır. Siyah atları değişir (6...Nxc3), ardından c ve d piyonlarını da değişir. Sonuçta Beyazın d4-e4 merkezi kalır; Siyahın ise vezir kanadında 2’ye 1 piyon çoğunluğu (a ve b piyonları) olur. Bütün oyunun dengesi buna dayanır: Beyaz merkezi ve ortaoyunu, Siyah oyunsonunu ister.' },
    { move: '16w', title: '16.d5! merkez açılıyor', text: 'Beyaz d-piyonunu feda eder. Amacı iki yönlü: b7 filinin uzun çaprazını kendi piyonuyla kapatmak (16...exd5 sonrası d5’te Siyahın kendi piyonu durur) ve e-piyonuna e5 yolunu açmak. Motor, Siyahın fedayı kabul etmek yerine 16...Rc5 (+0.4) ya da 16...Qe7 (+0.55) oynamasını öneriyor. Dana Mackenzie bu ikiliyi (16.d5 ve 17.e5) bir “süpürücü-mühürleyici” örneği olarak anlatıyor.' },
    { move: '17w', title: '17.e5! çaprazı aç', text: 'Piyon e5’e geçince d3 filinin h7’ye bakışı serbest kalır ve f6 karesi Siyah atından/vezirinden alınır. 17.exd5 Qxd5 ile Beyazın avantajı tamamen kaybolurdu (Motor: 0.0). The Spectator’ın 1970’teki köşesi de Polugayevski’nin notlarına dayanarak “başka hamleler daha iyi değil” diyor. Motor: e5 +0.9.' },
    { move: '18b', title: '18...Nb2?! Tal’in aktif savunması', text: 'Tal atı b2’ye getirerek d1 kalesine ve d3 filine aynı anda saldırır: fil zaten kaybedilecek gibi görünür. Ama bu, Beyazı en iyi hamleyi oynamaya zorlar: fil kaybolacaksa h7’de kendini feda eder. Motor 18...Qe7 (+0.9) ya da 18...Rc6 (+0.9) ile Siyahın çok daha az sıkıntı çekeceğini, 18...Nb2’den sonra Beyazın +1.5’e çıktığını gösteriyor. Spectator köşesi “muhtemelen daha iyisi yok” derken, modern motorlu incelemeler bu hamleyi ciddi bir hata sayıyor.' },
    { move: '19w', title: '19.Bxh7+! klasik fil fedası', text: 'Fil h7’ye kendini feda eder, 20.Ng5+ ile at şahı açığa çıkarır. Fedanın işlemesi için gereken her şey hazır: e5 piyonu f6’yı kontrol ediyor (Siyah ...Nf6 ya da ...Qf6 ile savunamıyor), vezir f4’ten h-hattına geçebiliyor, at g5’e tek hamlede geliyor. 20...Kg8 21.Qh4 sonrası Siyah h7 matını önlemek için vezirini g5 atına vermek zorunda kalırdı (Motor: +2.9). Motor: Bxh7+ +2.2; 19.Rd2 ile Beyaz yalnızca eşitliği tutar.' },
    { move: '21w', title: '21.h4!! sessiz hamle', text: 'Şah g6’da açıkta, ama Beyazın doğrudan şahı yoktur. 21.h4, h5+ tehdidiyle şahı daha da öne itmeye hazırlanır ve g5 atını destekler (ileride vezir ya da at hareket ettiğinde g5 askıda kalmaz). Polugayevski’nin notlarına göre bu pozisyon oyundan önceki hazırlıkta “Siyah için zor” bulunmuştu. Motor: h4 +2.0; 21.Ne4 ya da 21.Nf3 ile avantaj kaybolur.' },
    { move: '22w', title: '22.h5+: göründüğü kadar güçlü değil', text: 'Oyunda 22.h5+ oynandı ve Siyahın şahı h6’ya kaçtı. Motor burada 22.Rd4! (+2.2) ile kalelerin değişmesini ve b2 atının alınmasını çok daha güçlü buluyor; 22.h5+ sonrası değerlendirme +1.0’e iner. tartajubow blogu bu noktayı “eski yorumcuların hiçbiri fark etmedi” diye vurguluyor. Yine de 22...Kxh5? 23.g4+ ile dört hamlede mat olurdu.' },
    { move: '25b', title: '25...Qf6! Tal’in kurtarıcı kaynağı', text: '25.e6 sonrası e7 tehdidi (f8 kalesine saldırıp vezire çıkmak) ve h6 fikirleri vardı. Tal 25...Qf6! ile vezirleri değiştirerek saldırıyı söndürdü; 25...Nxd1? 26.e7 ise hemen kaybederdi (Motor: +4.9). Bu andan sonra oyun bir oyunsonu savaşıdır: Beyazın geçer e-piyonu ve aktif atı Siyahın fazla taşına karşı.' },
    { move: '34b', title: '34...Kh8? son hata', text: 'Kale yedinci yatayda, at f5’te. 34...Kg8 ile Siyah hâlâ direnebilirdi (Motor: +1.7). 34...Kh8 sonrası 35.Nh4! ve 36.Ng6+ ile at şahın etrafını örer; Rg7/h6 tehditleriyle mat ağı kurulur ve a7 piyonu da düşer (Motor: +4.3).' },
  ],
  lessons: [
    'Piyon merkezi ilerlemek için vardır: **d5** ile rakibin uzun çaprazı kapanır ve hat açılır, **e5** ile kendi filin çaprazı açılır ve rakibin f6 karesi alınır.',
    'Kaleleri **piyonların arkasına** koymak (Rad1, Rfe1) merkezi ilerleyişin ön koşuludur; piyon ilerlediğinde kaleler hatlara kendiliğinden hâkim olur.',
    'Bxh7+ fedası için kontrol listesi: b1-h7 çaprazında fil, g5’e gelebilen at, h-hattına geçebilen vezir ve **f6’yı kontrol eden e5 piyonu**. Biri eksikse feda çoğu zaman çürüktür.',
    'Rakibin taşı “zaten kaybolacak” bir taşa saldırıyorsa, o taşı en pahalı şekilde harcayın: Polugayevski d3 filini b2 atına bırakmak yerine h7’de feda etti.',
    'Saldırıda sessiz hamleler (21.h4) en zor bulunanlardır; ama çoğu zaman şahın kaçış karelerini daraltan kenar piyonu, yeni bir taş kadar değerlidir.',
    'Saldırı kesin sonuç vermezse bile **daha iyi oyunsonu** bırakabilir: aktif kale yedinci yatayda, at şahın yanında, rakibin fili kötü ise materyal eşit olsa da üstünlük sürer.',
    'Ev hazırlığı ne kadar derin olursa olsun, tahtada yeniden kontrol edilmelidir: hazırlıklı 22.h5+ hamlesi motorun 22.Rd4’üne göre avantajın yarısını bıraktı.',
  ],
  notes: {
    '1w': {
      text: '1.c4 ile İngiliz Açılışı. Beyaz d5 karesini yandan kontrol eder ve henüz merkez piyonlarını göstermez.',
      amac: 'Esnek bir başlangıçla rakibin açılış tercihini görmek ve uygun anda d4 ile Vezir Gambiti yapılarına geçmek.',
      neden: 'Polugayevski 1.d4 ve 1.c4’ü birlikte kullanırdı; hamle sırası, Siyahın bazı savunmalarını (örneğin Nimzo-Hint’i) atlatmaya yarar. Bu oyunda hamleler sonunda Yarı Tarrasch’a döner.',
      diger: [
        { move: '1.d4', text: 'Doğrudan Vezir Piyonu; 1...Nf6 2.c4 e6 3.Nc3 sonrası Siyah 3...Bb4 ile Nimzo-Hint’e girebilirdi. Motor: +0.25.' },
        { move: '1.e4', text: 'Tamamen farklı açılışlar; Tal Sicilya ile çok iyi hazırlanmıştı. Motor: +0.3.' },
      ],
    },
    '1b': {
      text: '1...Nf6: Siyah merkeze at ile bakar ve piyon yapısını henüz belirlemez.',
      amac: 'Hem ...e6/...d5 (Vezir Gambiti tarzı) hem ...g6 (Kral-Hint/Grünfeld) hem de ...c5 yollarını açık tutmak.',
      neden: 'Tal’in geniş repertuvarı vardı; esnek hamle, Beyazın hamle sırası hilelerine karşı en güvenli cevaptır.',
      diger: [
        { move: '1...e5', text: 'Ters Sicilya; açık ve taktiksel oyun. Motor: +0.24.' },
        { move: '1...c5', text: 'Simetrik İngiliz; motor en hafif avantajı bunda görüyor (+0.23).' },
      ],
    },
    '2w': {
      text: '2.Nc3: at d5 ve e4 karelerini kontrol eder.',
      amac: 'e4 ilerleyişini desteklemek ve ileride d4 ile merkezi kurmak.',
      neden: 'Nc3, Siyahın ...d5’ini zorlaştırır; ama 2...e6 3...Bb4 gibi Nimzo tipi bağlamalara da kapı aralar. Polugayevski bundan çekinmedi.',
      diger: [
        { move: '2.Nf3', text: 'Daha esnek; ...Bb4 bağlamasını önler. Motor bunu biraz daha iyi buluyor (+0.42).' },
        { move: '2.d4', text: 'Doğrudan Vezir Gambiti yapıları; 2...e6 3.Nc3 Bb4 Nimzo-Hint olur.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah ...d5 ve ...Bb4 için hazırlanır.',
      amac: 'Merkezde sağlam bir piyon zinciri (e6-d5) kurmak ve şah kanadı filini açmak.',
      neden: '2...e5’e göre daha klasik bir yapı seçer; Tal Vezir Gambiti’nin aktif kollarını (Tarrasch, Yarı Tarrasch) bilerek tercih ediyordu.',
      diger: [
        { move: '2...e5', text: 'Bronstein bunu d5 karesini Beyaz ata verdiği için zayıf saymıştı (tartajubow blogunda aktarıldığı gibi). Motor yine de oynanabilir buluyor (+0.21).' },
        { move: '2...c5', text: 'Simetrik yapı; ...d5 ile benzer Yarı Tarrasch’a dönebilir.' },
      ],
    },
    '3w': {
      text: '3.Nf3: ikinci at gelişir.',
      amac: 'Rok için hazırlanmak, d4 ve e5 karelerini kontrol etmek.',
      neden: 'Polugayevski 3.e4 gibi keskin kolları seçmedi; hedefi bilinen bir Vezir Gambiti pozisyonuna, yani hazırlığına ulaşmaktı.',
      diger: [
        { move: '3.e4', text: 'Flohr–Mikenas Saldırısı: 3...d5 4.e5 ile keskin oyun. Motor bunu en iyi görüyor (+0.58).' },
        { move: '3.d4', text: '3...Bb4 ile Nimzo-Hint.' },
      ],
    },
    '3b': {
      text: '3...d5: Siyah merkezde yer alır.',
      amac: 'Klasik e6-d5 yapısı; Vezir Gambiti Reddi’ne geçiş.',
      neden: 'Bu hamle sırasıyla Siyah, d4’ten sonra ...c5 ile Yarı Tarrasch’a ya da ...Be7 ile ortodoks yapıya girebilir.',
      diger: [
        { move: '3...Bb4', text: 'İngiliz-Nimzo yapısı; motor yaklaşık eşit (+0.22).' },
        { move: '3...c5', text: 'Simetrik; daha sonra ...d5 ile Yarı Tarrasch’a dönülebilir.' },
      ],
    },
    '4w': {
      text: '4.d4: Vezir Gambiti Reddi yapısına geçildi.',
      amac: 'Merkezi d4 ile kurmak; ardından e4 için zemin hazırlamak.',
      neden: 'tartajubow blogu bu pozisyonda 4.d4’ün Beyaz için “neredeyse tek ciddi seçenek” olduğunu söylüyor. 4.cxd5 de oynanır ama Siyah ...exd5 ile rahat bir yapı alır.',
      diger: [
        { move: '4.cxd5', text: '4...exd5 ile Siyah sağlam bir merkez kurar; motor +0.24.' },
        { move: '4.e3', text: 'Daha sakin; Siyah ...Be7 ve ...O-O ile rahat gelişir (+0.13).' },
      ],
    },
    '4b': {
      text: '4...c5: Yarı Tarrasch’a doğru. Siyah merkeze c-piyonuyla hemen karşı vuruş yapar.',
      amac: 'd4 piyonunu sorgulamak, c-hattını açmak ve taşlara serbest oyun sağlamak.',
      neden: 'Ortodoks savunmanın (4...Be7) pasifliğinden kaçınır. Tal gibi aktif oyunculara uyan bir yapıdır; karşılığında Beyaz, merkezi e4 ile genişletme şansı alır.',
      diger: [
        { move: '4...Be7', text: 'Ortodoks Vezir Gambiti Reddi; sağlam ama pasif. Motor +0.4 civarı.' },
        { move: '4...Bb4', text: 'Ragozin Savunması; 5.Bg5 ile keskin oyun (+0.33).' },
      ],
    },
    '5w': {
      text: '5.cxd5: Beyaz merkezde değişim yapar.',
      amac: 'Siyahı d5’i bir taşla almaya zorlamak; ardından e4 ile tempo kazanmak.',
      neden: '5.cxd5 sonrası 5...Nxd5 6.e4 en keskin koldur; Polugayevski’nin hazırlığı tam da bu yapıyı hedefliyordu.',
      diger: [
        { move: '5.Bg5', text: '5...cxd4 6.Nxd4 dxc4 ile farklı bir yapı; motor +0.16.' },
        { move: '5.e3', text: 'Sakin kol; 5...Nc6 sonrası simetrik bir Yarı Tarrasch.' },
      ],
    },
    '5b': {
      text: '5...Nxd5: Siyah atla alır; bu Yarı Tarrasch Savunmasıdır.',
      amac: 'Yalnız d-piyonu (izole piyon) almadan taşlarla oynamak.',
      neden: '5...exd5 klasik Tarrasch yapısına benzer ve Siyaha yalnız piyon bırakabilir; 5...cxd4 ise Tarrasch’ın asıl koluna yakındır. Yarı Tarrasch, Siyahın piyon yapısını sağlam tutar ama Beyaza merkez kurma izni verir.',
      diger: [
        { move: '5...exd5', text: '6.Bg5 ile Siyah yalnız piyonla oynar; motor +0.43.' },
        { move: '5...cxd4', text: '6.Qxd4 exd5 7.e4 gibi keskin kollar (+0.35).' },
      ],
    },
    '6w': {
      text: '6.e4!: Beyaz merkezi iki piyonla kurar ve tempo ile d5 atına saldırır.',
      amac: 'Geniş bir piyon merkezi (d4-e4) kurmak; taşlara alan sağlamak ve ileride d5/e5 kırılmalarına hazırlanmak.',
      neden: 'tartajubow blogunun aktardığına göre bu hamle uzun süre “fazla sadeleştiriyor” diye pek oynanmamıştı ve 1960’larda yeniden canlandı. Motor bunu en iyi hamle olarak gösteriyor (+0.4); 6.e3 daha sakin ama daha az iddialı.',
      diger: [
        { move: '6.e3', text: 'Sakin kol; 6...Nc6 7.Bd3 ile simetrik yapı. Motor +0.21.' },
        { move: '6.g3', text: 'Fili uzun çapraza koyar; merkez kavgasından kaçar.' },
      ],
    },
    '6b': {
      text: '6...Nxc3: Siyah atları değişir.',
      amac: 'Beyazın merkezde en iyi korunan taşını değişmek ve d4’e baskı için c-piyonunu kullanmak.',
      neden: 'At d5’te kalamaz; 6...Nf6 7.e5 ya da 6...Nb6 pasiftir. Değişim Beyazın piyonunu c3’e getirir; bu da Siyahın ...cxd4 ile merkezi zayıflatmasına imkân verir. Motor: 6...Nxc3 +0.33, 6...Nf6 +0.9.',
      diger: [
        { move: '6...Nf6', text: '7.Bf4 ya da 7.e5 sonrası Beyaz rahatça üstünlük alır (+0.9).' },
        { move: '6...cxd4', text: '7.Qxd4 sonrası Beyaz vezirle merkeze yerleşir (+0.75).' },
      ],
    },
    '7w': {
      text: '7.bxc3: Beyaz b-piyonuyla alır; c3 piyonu d4’ü destekler.',
      amac: 'Merkeze doğru almak: c3-d4-e4 zinciri oluşur.',
      neden: 'Başka alma yolu yoktur: vezirle almak (7.Qc2 ya da 7.Qd3) taş kaybettirir. Bu alış Beyaza bir a-piyonu zayıflığı bırakır, ama merkezi güçlendirir.',
    },
    '7b': {
      text: '7...cxd4: Siyah merkezde değişim yapar.',
      amac: 'c3 piyonunu d4’e çekip c-hattını açmak ve Bb4+ ile fil değişimi hazırlamak.',
      neden: 'tartajubow blogunun deyişiyle Siyah, tehlikeli bir şah kanadı saldırısı riskini azaltmak için sadeleşmeye gider. Değişim, Siyahın vezir kanadında 2’ye 1 piyon çoğunluğunu da doğurur.',
      diger: [
        { move: '7...Nd7', text: 'Gerginliği korur; Beyaz Bd3 ve O-O ile rahat gelişir (+0.43).' },
        { move: '7...Be7', text: '8.Bc4 ile Beyaz serbest gelişir (+0.54).' },
      ],
    },
    '8w': {
      text: '8.cxd4: Beyaz geri alır. Merkezde yan yana d4 ve e4.',
      amac: 'İki merkez piyonu ve açık c-hattı; Beyazın fil ve kaleleri için geniş alan.',
      neden: '8.Qxd4 vezir değişimine izin verir ve merkez piyon çiftini bozar. Piyonla almak yapının asıl fikridir.',
      diger: [
        { move: '8.Qxd4', text: '8...Qxd4 9.cxd4 ya da 8...Nd7 ile Siyah rahatlar (−0.1).' },
      ],
    },
    '8b': {
      text: '8...Bb4+: fil şah çeker.',
      amac: 'Kara kareli filleri değişmek; Beyazın e1-a5 çaprazını ve d4’ün savunucularını azaltmak.',
      neden: 'Siyahın kara kareli fili d4-e4 merkezinin arkasında pasif kalırdı; değişmek mantıklıdır. Ayrıca Beyazın şahını rokta geciktirmeyi umar.',
      diger: [
        { move: '8...Nc6', text: 'Merkeze baskı; 9.a3 ya da 9.Bc4 ile Beyaz devam eder (+0.3).' },
        { move: '8...Be7', text: 'Daha sakin; fil değişimini Beyaza bırakır.' },
      ],
    },
    '9w': {
      text: '9.Bd2: fil araya girer.',
      amac: 'Şahı yerinde tutmak ve rok hakkını korumak.',
      neden: '9.Ke2 rok hakkını kaybettirir, 9.Nd2 ise 9...Qxd4 ile piyon verir. Bd2 tek doğal hamledir.',
    },
    '9b': {
      text: '9...Bxd2+: fil değişimi.',
      amac: 'Kara kareli filleri değiştirip yapıyı sadeleştirmek.',
      neden: 'Polugayevski’nin notlarına dayanan Spectator köşesine göre 9...Qa5 ve devamındaki değişimlerden sonra Siyah daha kötü bir oyunsonuna düşer; “açılış analizi oyunsonuna kadar uzanabilir” notu buradan gelir. Motor 9...Qa5 10.Rb1’i +0.9 buluyor.',
      diger: [
        { move: '9...Qa5', text: '10.Rb1 Bxd2+ 11.Qxd2 ile vezirler değişirse Beyazın merkezi oyunsonunda güçlü (Motor: +0.9).' },
        { move: '9...Be7', text: 'Fili korur ama tempo kaybeder (+0.46).' },
      ],
    },
    '10w': {
      text: '10.Qxd2: vezir alır; d4 korunur.',
      amac: 'd4’ü korumak ve vezirle şah kanadına geçiş yolunu açık tutmak.',
      neden: '10.Kxd2 rok hakkını kaybettirir, 10.Nxd2 ise d4’ü düşürür (10...Qxd4). Vezirle almak zorunludur.',
    },
    '10b': {
      text: '10...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleleri birleştirmek.',
      neden: 'Merkez yarı açık; Siyah şahını ortada bırakmak istemez. Motor da en iyi hamle olarak gösteriyor (+0.19).',
      diger: [
        { move: '10...Nc6', text: 'Rok öncesi merkeze baskı; benzer pozisyonlara döner.' },
        { move: '10...a6', text: 'Bb5+ fikrini önler ama gelişimi geciktirir (+0.46).' },
      ],
    },
    '11w': {
      text: '11.Bc4: fil c4’te f7’ye ve d5’e bakar.',
      amac: 'd5 ilerleyişini uygun anda desteklemek ve a2-g8 çaprazını kontrol etmek.',
      neden: 'tartajubow blogu Bc4’ü “filin en aktif yeri” sayıyor, çünkü uygun anda d5 tehdidi yaratır. 11.Bd3 e4’ü korur ama d5 ilerleyişine destek vermez. Motor üç hamleyi (Bb5, Rd1, Bc4) eşit görüyor (+0.15).',
      diger: [
        { move: '11.Bd3', text: 'e4’ü korur, b1-h7 çaprazına bakar; daha sakin.' },
        { move: '11.Bb5', text: '11...a6 12.Bd3 ile benzer yapı (+0.16).' },
      ],
    },
    '11b': {
      text: '11...Nc6: at d4’e baskı yapar.',
      amac: 'd4 piyonuna baskı ve ileride ...Na5 ile c4 filini sorgulamak.',
      neden: '11...Nd7 daha esnek (+0.32) ve ...Nf6 ile şah kanadını savunabilir; Tal ise atı merkeze ve vezir kanadına yönlendirmeyi tercih etti. Sonradan bu at şah kanadından uzak kalacaktı.',
      diger: [
        { move: '11...Nd7', text: 'At f6’ya gidip şahı koruyabilir; motor en iyi bu hamleyi görüyor (+0.32).' },
        { move: '11...b6', text: '12.d5 hemen gelebilir: 12...Na6 13.dxe6 fxe6 (+0.42).' },
      ],
    },
    '12w': {
      text: '12.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleleri d ve e hatlarına hazırlamak.',
      neden: 'Merkez piyonlarını ilerletmeden önce şahın güvende olması gerekir; d5 sonrası hatlar açılacaktır.',
      diger: [
        { move: '12.Rd1', text: 'Kaleyi önce d1’e koymak; benzer planlar (+0.39).' },
        { move: '12.h4', text: 'Şah kanadında erken saldırı fikri (+0.39).' },
      ],
    },
    '12b': {
      text: '12...b6: Siyah filini b7’ye çıkaracak.',
      amac: 'Fili uzun çapraza koyup e4’e baskı yapmak; c-hattında kaleyle oynamak.',
      neden: 'tartajubow blogu aynı yapının 1937 Aljekhin–Euwe rövanş maçında ve Reshevsky–Fine, Hastings 1937/38’de görüldüğünü belirtiyor. Fil b7’de e4’e baskı yapar ama d5 ilerleyişiyle kapanma riski taşır.',
      diger: [
        { move: '12...Na5', text: 'Hemen fili sorgulamak; 13.Bd3 b6 ile aynı yapıya dönebilir (+0.54).' },
        { move: '12...Qf6', text: 'e5’i önleyip d4’e baskı; 13.Rfd1 sonrası Beyaz yine rahat (+0.48).' },
      ],
    },
    '13w': {
      text: '13.Rad1: kale d1’de, d-piyonunun arkasında.',
      amac: 'd4’ü desteklemek ve d5 ilerleyişini hazırlamak.',
      neden: 'Kaleleri merkez piyonlarının arkasına koymak, tartajubow’un aktardığı gibi Botvinnik’in 1937’deki fikridir: piyonlar ilerlediğinde açılan hatlar doğrudan kalelere kalır. a-kalesini d1’e getirmek, f-kalesini e1 için saklar.',
      diger: [
        { move: '13.Rfe1', text: 'Önce e-hattı; motor çok az daha iyi buluyor (+0.47).' },
        { move: '13.d5', text: 'Hemen kırılma; 13...Na5 ile Siyah filin üzerine gelir.' },
      ],
    },
    '13b': {
      text: '13...Bb7: fil uzun çaprazda.',
      amac: 'e4’e baskı ve d5 karesini kontrol etmek.',
      neden: 'Gelişimin doğal devamı. Fil d5’i kontrol ederek Beyazın kırılmasını zorlaştırmak ister; ama d5 gelirse bu çapraz Siyahın kendi piyonuyla kapanacaktır.',
      diger: [
        { move: '13...Na5', text: 'Önce fili sorgulamak; aynı pozisyona dönebilir (+0.43).' },
        { move: '13...h6', text: 'Şaha kaçış karesi açar ve Ng5 fikirlerini önler (+0.5).' },
      ],
    },
    '14w': {
      text: '14.Rfe1: kale e1’de, e-piyonunun arkasında.',
      amac: 'e4’ü korumak ve e5 ilerleyişine destek vermek.',
      neden: 'Artık iki kale de piyonların arkasında; d5 ve e5 birbirini takip edebilir. Motor bunu en iyi hamle olarak gösteriyor (+0.5).',
      diger: [
        { move: '14.d5', text: '14...Na5 15.Bd3 exd5 16.e5 ile benzer fikirler (+0.44).' },
        { move: '14.h4', text: 'Şah kanadında alan; daha az uyumlu (+0.34).' },
      ],
    },
    '14b': {
      text: '14...Na5: at c4 filini sorgular.',
      amac: 'Fili aktif c4 karesinden uzaklaştırmak ve atı c4’e yerleştirmek.',
      neden: 'Fil c4’te d5’i destekliyordu; onu kovmak d5 kırılmasını zayıflatır. Bedeli, atın şah kanadından tamamen uzaklaşmasıdır. Motor 14...Rc8’i çok az daha iyi buluyor.',
      diger: [
        { move: '14...Rc8', text: 'Önce kale; 15.d5 Na5 16.Bf1 ile benzer (+0.47).' },
        { move: '14...h6', text: 'Şah kanadını önlemsel güçlendirme (+0.56).' },
      ],
    },
    '15w': {
      text: '15.Bd3: fil d3’e çekilir ve b1-h7 çaprazında h7’ye bakar.',
      amac: 'e4’ü korumak ve ileride e5 ile açılacak çaprazda h7’yi hedeflemek.',
      neden: 'tartajubow blogu Polugayevski’nin bu noktada çok iyi hazırlandığını ve Tal’in bu hattı Beyaz olarak Korçnoy’a karşı hazırladığını aktarıyor. Bf1 (+0.47) daha güvenli, ama Bd3 saldırı fikirleri için şarttır.',
      diger: [
        { move: '15.Bf1', text: 'Fil güvende, d5 hazırlanır; motor çok az daha iyi buluyor (+0.47).' },
        { move: '15.Bb5', text: 'Fili aktif tutar; 15...Rc8 16.Qd3 (+0.33).' },
      ],
    },
    '15b': {
      text: '15...Rc8: kale açık c-hattına.',
      amac: 'c-hattını ele geçirmek ve ...Rc4/...Rc2 ile Beyazın taşlarına saldırmak.',
      neden: 'Doğal ve motorun ilk tercihi (+0.44). Siyah, d5 gelirse ...Rc5 ile d5’e baskı kurmayı planlar.',
      diger: [
        { move: '15...h6', text: 'Önlem; 16.d5 exd5 17.e5 ile benzer saldırı (+0.56).' },
        { move: '15...Qc7', text: 'c-hattında vezir; 16.d5 ile Beyaz yine inisiyatifli (+0.67).' },
      ],
    },
    '16w': {
      text: '16.d5!: piyon fedası. Merkez açılır ve e5 için yol açılır.',
      amac: 'b7 filinin uzun çaprazını kapatmak (16...exd5 sonrası d5’te Siyah piyonu durur) ve e-piyonuyla e5’e ilerlemek.',
      neden: 'Dana Mackenzie bu ikiliyi (16.d5 ve 17.e5) bir “süpürücü-mühürleyici” ders kitabı örneği olarak anlatıyor: d5 uzun çaprazı mühürler, e5 b1-h7 çaprazını süpürür. Motor d5’i en iyi hamle görüyor (+0.47).',
      diger: [
        { move: '16.h4', text: 'Önce şah kanadında alan; 16...h6 sonrası d5 yine gelir (+0.34).' },
        { move: '16.Qf4', text: 'Vezir şah kanadına; 16...Nc4 ile Siyah aktifleşir (+0.31).' },
      ],
    },
    '16b': {
      text: '16...exd5?!: Siyah fedayı kabul eder.',
      amac: 'Piyonu almak ve merkezde fazladan piyonla savunmak.',
      neden: 'Tal, taktikleri hesapladığını ve yeterli savunması olduğunu düşünmüş olmalı (Mackenzie’nin yorumu). Ama alarak d5’te kendi filinin önünü kapatır ve e5’e izin verir. Motor 16...Rc5’i (+0.4) öneriyor; Mackenzie 16...Qe7’yi de “ilginç ve oynanabilir” buluyor.',
      diger: [
        { move: '16...Rc5', text: 'd5’e baskı; 17.Qf4 h6 18.dxe6 fxe6 ile yapı sağlam kalır. Motor: +0.4.' },
        { move: '16...Qe7', text: 'e5’i önler; 17.Qf4 Rc5 ile Siyah dayanır (+0.55).' },
      ],
    },
    '17w': {
      text: '17.e5!: d3 filinin çaprazı açıldı, f6 karesi Siyahtan alındı.',
      amac: 'h7’ye fil-vezir baskısı kurmak; Siyahın ...Nf6 ya da ...Qf6 savunmalarını önlemek.',
      neden: 'Mackenzie bunu “anahtar fikir” olarak anıyor; 17.exd5 Qxd5 ile Beyazın avantajı tamamen kaybolurdu (Motor: 0.0). e5 piyonu ayrıca d6 ve f6’yı kontrol ederek Siyahın şah kanadını boşaltır. Motor: +0.9.',
      diger: [
        { move: '17.exd5', text: '17...Qxd5 ile Siyah piyonunu ve rahatlığını korur (Motor: +0.06).' },
        { move: '17.Qf4', text: '17...dxe4 18.Bxe4 Qf6 ile Siyah sadeleşir (0.0).' },
      ],
    },
    '17b': {
      text: '17...Nc4: at c4’e gelir ve d2 vezirine saldırır.',
      amac: 'Tempo kazanmak, atı merkeze getirmek ve ileride ...Nb2 ile Beyazın taşlarını vurmak.',
      neden: 'Atın a5’te kalması işe yaramazdı. 17...h6 (+0.78) şaha hava açar ama 18.Bb1 ile Beyaz çaprazı korur. Motor iki hamleyi neredeyse eşit görüyor.',
      diger: [
        { move: '17...h6', text: '18.Bb1 Nc4 19.Qd3 g6 ile Siyah dayanmaya çalışır (+0.8 – +1.0).' },
        { move: '17...Qe7', text: '18.Qf4 Nc4 19.Re2 ile Beyaz baskıyı sürdürür (+0.87).' },
      ],
    },
    '18w': {
      text: '18.Qf4: vezir f4’te, şah kanadına geçmeye hazır.',
      amac: 'h-hattına (Qh4) ve g-hattına (Qg3/Qg4) geçiş; Bxh7+ fedasını mümkün kılmak.',
      neden: 'Vezirin başka iyi yeri yoktur: 18.Qe2 ya da 18.Qc3 ile avantaj neredeyse sıfırlanır (Motor: 0.0 civarı). f4’te vezir hem e5’i korur hem şah kanadına yakındır.',
      diger: [
        { move: '18.Qe2', text: 'Pasif; 18...g6 ile Siyah sağlamlaşır (0.0).' },
        { move: '18.Qc3', text: '18...Rc5 ile Siyah aktifleşir (−0.14).' },
      ],
    },
    '18b': {
      text: '18...Nb2?!: at b2’de d1 kalesine ve d3 filine saldırır.',
      amac: 'Beyazın saldırı filini ya da kalesini kazanmak; saldırıyı başlamadan durdurmak.',
      neden: 'Mackenzie bunun “Beyazı olduğu yerde durduruyor gibi göründüğünü” yazıyor: fil değişirse Beyazın piyonu karşılıksız kalır. Ama fil zaten kaybolacaksa Beyaz onu h7’de feda eder. Spectator köşesi “muhtemelen daha iyisi yok” dese de motor 18...Qe7 ve 18...Rc6’yı (+0.9) açıkça daha iyi buluyor; tartajubow da 18...Nb2’yi ciddi hata sayıyor.',
      diger: [
        { move: '18...Qe7', text: 'f-piyonunu ve şah kanadını korur; 19.Bf5 Rc5 ile Siyah dayanır (Motor: +0.9).' },
        { move: '18...Rc6', text: 'Kale altıncı yatayda savunmaya katılır; 19.Be4 Qc7 (+0.9).' },
      ],
    },
    '19w': {
      text: '19.Bxh7+!: fil h7’de kendini feda eder.',
      amac: 'Şahı açığa çıkarıp Ng5+ ve vezirle saldırmak.',
      neden: 'Fil zaten b2 atının saldırısı altındaydı; onu en değerli şekilde harcamak gerekir. tartajubow bu hamlenin muhtemelen ev hazırlığında düşünüldüğünü söylüyor. 19.Rd2 ile Beyaz yalnızca eşitliği tutar (Motor: 0.0), feda ise +2.2.',
      diger: [
        { move: '19.Rd2', text: '19...Nxd3 20.Rxd3 Rc4 ile Siyah piyon fazlasını korur (0.0).' },
        { move: '19.Bf5', text: '19...Nxd1 20.Bxc8 Qxc8 ile Siyah materyal kazanır (−0.96).' },
      ],
    },
    '19b': {
      text: '19...Kxh7: Siyah fili alır.',
      amac: 'Fazladan taşı kabul etmek.',
      neden: 'Reddetmek daha kötü: 19...Kh8 20.Rd4 ile Beyaz hem piyon hem saldırı kazanır (Motor: +3.75). Almak tek mantıklı yol.',
      diger: [
        { move: '19...Kh8', text: '20.Rd4 ve Rh4 ile h-hattında yıkıcı saldırı (+3.75).' },
      ],
    },
    '20w': {
      text: '20.Ng5+: at şah çekerek g5’e girer.',
      amac: 'Şahı ya geri g8’e (Qh4 matı tehdidiyle) ya da öne g6’ya çekmek.',
      neden: 'Fedanın zorunlu devamı; 20.Rd2 ya da 20.Rd4 gibi yavaş hamlelerle Beyaz bir taş eksik kalırdı (Motor: −0.6 / −1.2).',
    },
    '20b': {
      text: '20...Kg6: şah g6’ya çıkar.',
      amac: 'h7 matından kaçmak ve vezirini korumak.',
      neden: 'tartajubow’un deyişiyle Tal “boşuna umudunu bu cevaba bağlar”. Ama alternatifler daha kötü: 20...Kg8 21.Qh4 ile h7 matı tehdit edilir ve Siyah vezirini g5 atına vermek zorunda kalır (21...Qxg5 22.Qxg5 Nxd1, Motor: +2.9). Spectator köşesi de 20...Kg8’i Qh4 ve e6 ile kaybeden bir hamle olarak gösteriyor.',
      diger: [
        { move: '20...Kg8', text: '21.Qh4 Qxg5 22.Qxg5 Nxd1 23.Rxd1 ile Beyaz vezir karşılığı az materyal verir (+2.9).' },
        { move: '20...Qxg5', text: '21.Qxg5 Nxd1 22.Rxd1 ile Beyazın veziri baskın (+3.4).' },
      ],
    },
    '21w': {
      text: '21.h4!!: sessiz ama öldürücü hazırlık. h5+ tehdit edilir.',
      amac: 'h5+ ile şahı daha da öne itmek ve g5 atını sağlamlaştırmak.',
      neden: 'Polugayevski’nin notlarına göre bu pozisyon oyun öncesi analizde “Siyah için zor” bulunmuştu. tartajubow 21.h4’ü “kazanan tek hamle” sayıyor; lichess’teki inceleme de bu hamlenin olağanüstü hayal gücü ve hesap gerektirdiğini vurguluyor. Motor: +2.0; 21.Ne4 (−0.2) ya da 21.Nf3 (−2.2) ile avantaj kaybolur.',
      diger: [
        { move: '21.Ne4', text: '21...dxe4 22.Rxd8 Rcxd8 ile Siyah materyal üstünlüğüyle rahatlar (−0.2).' },
        { move: '21.Nf3', text: '21...Nxd1 22.Qg4+ Kh7 sonrası saldırı yetersiz (−2.2).' },
      ],
    },
    '21b': {
      text: '21...Rc4: kale c4’ten vezire saldırır ve dördüncü yatayı kontrol eder.',
      amac: 'Beyaz veziri tempo ile uzaklaştırmak ve h4 piyonunu da hedeflemek.',
      neden: 'Mackenzie bunu “Tal’in muhtemelen güvendiği savunma” olarak niteliyor: aktif taşlarla saldırıyı önceden kırmak. Motor bunu en iyi savunma görüyor (+2.0). Spectator köşesi 21...f5’i “belki en iyisi” diye anar, ama motor 21...f5’i daha kötü buluyor (+4.4, 22.Rd4 sonrası).',
      diger: [
        { move: '21...f5', text: '22.Rd4! Qe7 23.h5+ Kh6 24.Nf7+ ile saldırı sürer; motor +2 ile +4 arası (derinliğe göre).' },
        { move: '21...Qe7', text: '22.Rb1 ya da 22.Rd4 ile Beyaz baskıyı korur (+1 – +3, değerlendirme kararsız).' },
      ],
    },
    '22w': {
      text: '22.h5+: Beyaz şahı kovalar. Motor ise 22.Rd4’ü çok daha güçlü buluyor.',
      amac: 'Şahı h6’ya itip Nxf7+ ve Qf5+ ile kovalamak.',
      neden: 'Hazırlıktaki devam buydu ve görünüşte çok tehlikeli: 22...Kxh5? 23.g4+ Kg6 24.Qf5+ Kh6 25.Nxf7+ Rxf7 26.Qh5# ile mat. Ama 22...Kh6! sonrası Beyazın avantajı +1.0’e iner. tartajubow bu hamlenin göründüğü kadar iyi olmadığını ve eski yorumcuların bunu fark etmediğini yazıyor. Mackenzie de motorun ilk tercihinin 22.Rd4 olduğunu, çünkü hem kaleyi hem veziri tehlikeden çıkardığını belirtiyor.',
      diger: [
        { move: '22.Rd4', text: '22...Rxd4 23.Qxd4 Bc8 24.Qxb2 ile Beyaz atı geri kazanır ve saldırı sürer (Motor: +2.2).' },
        { move: '22.Qg3', text: '22...Kh6 23.e6 Qf6 ile Beyaz baskıyı korur (+1.9 – +2.1).' },
      ],
    },
    '22b': {
      text: '22...Kh6!: şah h6’ya.',
      amac: 'h-hattını kapalı tutmak ve h5 piyonunu bir kalkan olarak kullanmak.',
      neden: '22...Kxh5? 23.g4+ ile dört hamlede mat. 22...Kf5 ya da diğer kaçışlar şahı merkezde daha da açığa çıkarır. Mackenzie bunu “hatları kapalı tutan” iyi bir savunma olarak anıyor.',
      diger: [
        { move: '22...Kxh5', text: '23.g4+ Kg6 24.Qf5+ Kh6 25.Nxf7+ Rxf7 26.Qh5# mat.' },
      ],
    },
    '23w': {
      text: '23.Nxf7+: at ikinci piyonu alır ve şahı geri iter.',
      amac: 'Materyali dengelemek (fil karşılığı iki piyon) ve f7’deki atla d8 vezirine ve f8’e baskı.',
      neden: 'Motorun ilk tercihi (+1.1). 23.Qxf7? ise 23...Qxg5 ile taş kaybettirir (−2.9). 23.Ne4+ benzer kalır.',
      diger: [
        { move: '23.Ne4+', text: '23...Kh7 24.Ng5+ Kh6 ile tekrar; Beyaz Nxf7+’ye dönebilir (+1.0).' },
        { move: '23.Qxf7', text: '23...Qxg5 ile Siyah atı alır (−2.9).' },
      ],
    },
    '23b': {
      text: '23...Kh7: şah h7’ye döner.',
      amac: 'Mat ağından kaçmak.',
      neden: 'Zorunlu: 23...Kxh5 24.g4+ Kg6 25.Qf5# ile mat (f5’i g4 piyonu korur).',
    },
    '24w': {
      text: '24.Qf5+: vezir şah kanadında, şah çekerek.',
      amac: 'Şahı g8’e itip e-piyonunu ilerletmek; g6 karesini kontrol etmek.',
      neden: 'Motorun ilk tercihi (+1.0). 24.Qxc4 Nxc4 25.Nxd8 Rxd8 ile Beyazın saldırısı biter (+0.45); 24.Rd4? ise 24...Rxd4 ile kaybeder.',
      diger: [
        { move: '24.Qxc4', text: '24...Nxc4 25.Nxd8 Rxd8 ile materyal yaklaşık eşit, saldırı biter (+0.45).' },
      ],
    },
    '24b': {
      text: '24...Kg8: şah g8’e.',
      amac: 'Tek yasal ve güvenli kaçış.',
      neden: '24...g6 25.Qxg6# mattır; şahın başka karesi yoktur.',
    },
    '25w': {
      text: '25.e6: piyon ilerler; e7 ile f8 kalesine saldırıp vezire çıkmayı tehdit eder.',
      amac: 'Siyahı ya vezir değişimine ya da materyal kaybına zorlamak.',
      neden: 'tartajubow bunu h6 tehdidi de taşıyan “güzel bir son dokunuş” sayıyor. 25.Nh6+? 25...Kh8! ile işe yaramaz (Motor: −0.6), 25.Nxd8 Rxf5 ise saldırıyı bitirir (0.0). Motor: e6 +1.0.',
      diger: [
        { move: '25.Nh6+', text: '25...Kh8! 26.Nf7+ Rxf7 27.Qxf7 Nxd1 ile Siyah iyi (−0.6).' },
        { move: '25.h6', text: '25...Rxf7 26.h7+ Kh8 27.Qxf7 Nxd1 ile Siyah iyi (−1.5).' },
      ],
    },
    '25b': {
      text: '25...Qf6!: Siyah vezir değişimini teklif eder.',
      amac: 'Saldırının en tehlikeli taşı olan veziri değişmek.',
      neden: 'tartajubow bu hamleyi “mükemmel” diye niteliyor: eski yorumcular oyunun sonucuna bakarak yorum yaptı, motorlar ise bu savunmanın değerini görüyor. 25...Nxd1? 26.e7 ile kaybederdi (Motor: +4.9).',
      diger: [
        { move: '25...Nxd1', text: '26.e7 Qe8 27.exf8=Q+ Qxf8 28.Nh6+ ile Beyaz kazanır (+4.9).' },
        { move: '25...Qh4', text: '26.e7 ile piyon vezire çıkar (+4.8).' },
      ],
    },
    '26w': {
      text: '26.Qxf6: Beyaz vezirleri değişir.',
      amac: 'Oyunsonuna geçmek: e6’daki geçer piyon ve f7’deki at.',
      neden: 'Zorunluya yakın: 26.Qg6? Qxg6 27.hxg6 Nxd1 ile Beyaz kaybeder (−4.3). Değişimden sonra Beyaz hâlâ +1.0 civarında.',
    },
    '26b': {
      text: '26...gxf6: Siyah piyonla alır.',
      amac: 'Veziri geri almak.',
      neden: 'Tek yol: 26...Bc6 ya da 26...Rg4 mat ağına girer (Nh6+ ve Qg6+). Bedeli, Siyahın şah kanadı piyonlarının dağılmasıdır.',
    },
    '27w': {
      text: '27.Rd2: kale b2 atına saldırır.',
      amac: 'Fazla taşı (b2 atını) geri kazanmak.',
      neden: 'Polugayevski kendi notlarında bu hamleye “?” koyup 27.Nd6!’nın kesin kazandığını belirtmiş (Spectator köşesinde aktarıldığı gibi). Ancak motor bu görüşe katılmıyor: 27.Nd6 Nxd1 28.e7 Rc1 sonrası değerlendirme yalnızca +0.2, 27.Rd2 ise +1.0.',
      diger: [
        { move: '27.Nd6', text: 'Polugayevski’nin önerisi; 27...Nxd1 28.e7 Rc1 sonrası Siyah dayanıyor (Motor: +0.2).' },
        { move: '27.e7', text: '27...Kxf7 28.exf8=Q+ Kxf8 ile eşitlik (0.0).' },
      ],
    },
    '27b': {
      text: '27...Rc6: kale c6’dan e6 piyonuna bakar.',
      amac: 'Tehlikeli e-piyonunu durdurmak ya da almak.',
      neden: 'Motorun ilk tercihi (+1.0–1.2). 27...Na4 ya da 27...Rb4 e-piyonunun ilerlemesine izin verir (+1.8 / +2.8).',
      diger: [
        { move: '27...Na4', text: '28.Nd6 Bc6 29.e7 ile piyon güçlenir (+1.8).' },
        { move: '27...Rb4', text: '28.e7 ile Beyaz kazanmaya yakın (+2.8).' },
      ],
    },
    '28w': {
      text: '28.Rxb2: Beyaz atı alır.',
      amac: 'Materyali dengelemek: Beyazın atı ve e6 piyonu, Siyahın filine ve piyonlarına karşı.',
      neden: 'Doğal; motor 28.Nh6+’yı biraz daha iyi buluyor (+1.1 / +0.8) ama fark küçük.',
      diger: [
        { move: '28.Nh6+', text: '28...Kh7 29.Nf5 ile önce at aktifleşir, b2 sonra alınır (+1.1).' },
      ],
    },
    '28b': {
      text: '28...Re8: kale e-hattına; e6’ya ikinci baskı.',
      amac: 'e6 piyonunu iki kaleyle almak.',
      neden: 'Spectator köşesine göre 28...Bc8 daha iyi bir şanstı ve 30.Nd8’den sonra Beyaz oyunsonunu kazanmalıydı. Motor iki hamleyi eşit görüyor (+1.0).',
      diger: [
        { move: '28...Bc8', text: 'Fil e6 piyonuna saldırır; 29.Nh6+ Kh8 30.e7 Re8 (Motor: +0.9).' },
        { move: '28...Kh7', text: '29.f4 ile Beyazın e-piyonu güçlenir (+3.5).' },
      ],
    },
    '29w': {
      text: '29.Nh6+: at şah çekerek h6’ya sıçrar; asıl hedefi bir sonraki hamlede f5 karesidir.',
      amac: 'Atı f5’e götürmek: oradan e7, g7, d6 ve h6’yı kontrol eder, e6 piyonunu dolaylı korur ve Siyah şahının etrafını daraltır.',
      neden: 'Oyunsonunda atın gücü merkezi ve ileri karelerde ortaya çıkar; f7’de at saldırı altındaydı ve iş görmüyordu. Şahla gitmek tempo kazandırır, Siyah önce şahını oynamak zorunda kalır. Motorun ilk tercihi (+0.9).',
      diger: [
        { move: '29.f3', text: 'Önce şaha hava açmak; 29...Bc8 30.Nh6+ Kh7 31.Ng4 ile at daha pasif bir yere gider (Motor: +0.7).' },
        { move: '29.Kh2', text: 'Şahı birinci yataydan çıkarır ama at f7’de beklerken Siyah ...Bc8 ile e6’ya baskı kurar (+0.5).' },
      ],
    },
    '29b': {
      text: '29...Kh7: şah h7’ye geçer ve h6 atına saldırır.',
      amac: 'Atı h6’dan çıkmaya zorlamak ve şahı h5 piyonuna yaklaştırmak.',
      neden: 'Şah oyunsonunda aktif bir taştır; h7’de h5 piyonunu ileride almayı umar. Motor üç şah hamlesini (Kh8, Kh7, Kf8) neredeyse eşit görüyor, yani burada Siyah hata yapmadı.',
      diger: [
        { move: '29...Kh8', text: '30.f3 Rcxe6 31.Rxe6 Rxe6 ile benzer oyunsonu (Motor: +1.1).' },
        { move: '29...Kf8', text: 'Şahı merkeze yaklaştırır; 30.Nf5 Rexe6 31.Rxe6 Rxe6 (+1.2).' },
      ],
    },
    '30w': {
      text: '30.Nf5: at f5’te, oyunsonundaki en iyi karesinde.',
      amac: 'e7 ve g7’yi kontrol edip kale ile birlikte yedinci yataya baskı hazırlamak; d4 ilerleyişini de gözetlemek.',
      neden: 'e6 piyonu artık korunamaz; Beyaz onu tutmaya çalışmak yerine taşlarını en iyi karelere koyar. f5’teki at, Siyahın beyaz kareli filinin de dokunamayacağı bir yerde değil ama Bc8 ile kovalanması zaman alır. Motor: +1.2; 30.Ng4 (+0.4) ve 30.Nf7 (+0.2) atı pasif bırakır.',
      diger: [
        { move: '30.Ng4', text: '30...Rcxe6 31.Rd1 f5 32.Ne3 ile at savunmaya çekilir (+0.4).' },
        { move: '30.Nf7', text: '30...Rcxe6 31.Rxe6 Rxe6 32.Rd2 ile at kenarda kalır (+0.2).' },
      ],
    },
    '30b': {
      text: '30...Rexe6: Siyah e6 piyonunu alır ve materyali eşitler.',
      amac: 'Beyazın en tehlikeli kozunu, e-hattındaki geçer piyonu ortadan kaldırmak.',
      neden: 'tartajubow’un belirttiği gibi Siyah materyali eşitler, ama Beyazın kalesi yedinci yataya girmeye hazırdır. Piyonu almamak e7 tehlikesini sürdürürdü. Hangi kaleyle alındığı fark etmez.',
      diger: [
        { move: '30...Rcxe6', text: 'Diğer kaleyle almak; aynı değerlendirme (Motor: +1.4).' },
        { move: '30...Bc8', text: 'Önce atı kovalamak; 31.Nd4 Rc4 32.Rd2 ile e6 piyonu yaşar (+2.5).' },
      ],
    },
    '31w': {
      text: '31.Rxe6: Beyaz e-hattındaki kaleleri değişir.',
      amac: 'Kale + at ile kale + fil oyunsonuna geçmek; kalan kaleyi c-hattı ya da e-hattı üzerinden yedinci yataya sokmak.',
      neden: 'Kaleler değişince Siyahın e-hattındaki baskısı biter ve Beyazın tek kalesi daha hızlı aktifleşir. Ayrıca Siyahın dağınık piyonları (d5, f6, b6, a7) tek kaleyle savunulmak zorunda kalır. Motorun ilk tercihi (+1.2).',
      diger: [
        { move: '31.Rbe2', text: 'Kaleleri e-hattında tutar; 31...Rxe2 32.Rxe2 Rc7 33.Re6 ile benzer (+1.0).' },
        { move: '31.Rbb1', text: 'Pasif; 31...Ba6 ile Siyahın fili canlanır (+0.6).' },
      ],
    },
    '31b': {
      text: '31...Rxe6: Siyah kaleyi geri alır.',
      amac: 'Materyal dengesini korumak.',
      neden: 'Zorunlu: geri almazsa bir kale eksik kalır. Ara hamle 31...Rc1+ 32.Kh2 de kaleyi geri getirmez ve kaybeder.',
      diger: [
        { move: '31...Rc1+', text: '32.Kh2 Bc8 33.Re7+ ile Beyaz bir kale fazlasıyla kalır (+6.2).' },
      ],
    },
    '32w': {
      text: '32.Rc2: kale c-hattına geçer ve Rc7+ tehdit eder.',
      amac: 'Yedinci yataya girmek: c7’den hem b7 filine hem a7 piyonuna saldırmak.',
      neden: 'tartajubow buna “!” verip Rc7+’nın güçlü bir tehdit olduğunu yazıyor. Kale yedinci yataydaysa Siyahın şahı arka yataya kilitlenir ve piyonlar tek tek düşer. Motor 32.f3’ü biraz daha iyi buluyor: önce şaha hava açar ve d4 ilerleyişini durdurur.',
      diger: [
        { move: '32.f3', text: '32...d4 33.Nxd4 Rd6 34.Rb4 ile Beyaz piyon kazanma şansı yaratır (Motor: +1.3).' },
        { move: '32.Rd2', text: 'd5 piyonuna saldırır; 32...Re1+ 33.Kh2 Re5 ile Siyah dayanır (+0.9).' },
      ],
    },
    '32b': {
      text: '32...Rc6: kale c-hattını kapatır.',
      amac: 'Rc7+ ile kalenin yedinci yataya girmesini önlemek.',
      neden: 'Tek iyi savunma; kale kale karşısında kalırsa Beyaz değişimi kabul etmeden hattı bırakmak zorunda. 32...Ba6 ya da 32...Kh8 ise 33.Rc7 ile a7 ve yedinci yatayı teslim eder (Motor: +2.1 / +2.2).',
      diger: [
        { move: '32...Ba6', text: '33.Rc7+ Kh8 34.f3 Bd3 ile Beyazın kalesi yedinci yatayda hâkim (+2.1).' },
        { move: '32...Kh8', text: '33.Rc7 Ba6 34.f3 ile a7 düşmeye hazır (+2.2).' },
      ],
    },
    '33w': {
      text: '33.Re2: kale c-hattından çekilir ve e-hattından yedinci yataya yönelir.',
      amac: 'Kale değişiminden kaçınıp Re7+ ile yedinci yataya başka bir kapıdan girmek.',
      neden: 'Kale değişimi (33.Rxc6 Bxc6) Siyahın kötü filini iyileştirirdi; Beyaz kalesini tutmak ister. e-hattı açık ve e7 karesi at tarafından korunuyor. Motorun ilk tercihi (+1.0).',
      diger: [
        { move: '33.Rd2', text: 'd5’e baskı; 33...Ba6 34.g4 Bc8 ile Siyah toparlanır (+0.8).' },
        { move: '33.Rb2', text: 'b6’ya baskı; 33...Bc8 34.Ne7 Rc1+ ile Siyah aktifleşir (+0.3).' },
      ],
    },
    '33b': {
      text: '33...Bc8: fil c8’e gelir ve f5 atına saldırır.',
      amac: 'Atı güçlü f5 karesinden kovmak ve filini canlandırmak.',
      neden: 'Mantıklı görünür ama e7 karesini savunmaz; Beyaz kaleyle şah çekip yedinci yataya girer. Motor 33...Rc7’yi öneriyor: kale yedinci yatayı korur ve Re7+’yı engeller.',
      diger: [
        { move: '33...Rc7', text: 'Yedinci yatayı kapatır; 34.Re6 d4 35.Nxd4 Kh6 ile Siyah dayanır (Motor: +1.0).' },
        { move: '33...Rc1+', text: '34.Kh2 Rc7 35.Re6 Bc8 ile benzer, biraz daha kötü (+1.7).' },
      ],
    },
    '34w': {
      text: '34.Re7+: kale şah çekerek yedinci yataya girer.',
      amac: 'Şahı arka yataya itmek ve a7 piyonunu hedef almak; at ile birlikte mat ağı fikirleri hazırlamak.',
      neden: 'Atı korumak için geri çekmek tempo kaybı olurdu; Re7+ ile kale ve at birlikte çalışır: at f5’te kalırsa Siyah filini değişmek için zaman bulamaz. 34.Ne7 ya da 34.Ng3 ile avantaj neredeyse sıfırlanır.',
      diger: [
        { move: '34.Ne7', text: 'Kaleye saldırır ama 34...Re6 35.Rc2 Re1+ ile Siyah aktifleşir (Motor: +0.1).' },
        { move: '34.Ng3', text: 'Atı geri çeker; 34...Be6 35.f3 ile eşitlik (0.0).' },
      ],
    },
    '34b': {
      text: '34...Kh8?: şah köşeye kaçar. Son hata.',
      amac: 'Şahı Beyaz atın şah çekmelerinden uzak tutmak.',
      neden: 'tartajubow buna “son hata” diyor. Köşede şahın hiç hareket alanı kalmaz: Ng6+ ve Rh7/Rg7 ile mat ağı kurulur. 34...Kg8 şahı f8’e yakın tutar ve Siyah hâlâ direnebilirdi.',
      diger: [
        { move: '34...Kg8', text: '35.Nh4 f5 36.Nf3 f4 37.h6 ile Beyaz daha iyi ama oyun sürer (Motor: +1.7).' },
      ],
    },
    '35w': {
      text: '35.Nh4!: at h4’e çekilir; hedefi g6 karesidir.',
      amac: 'Ng6+ ile şahı g8’e kilitlemek ve Rg7+/h6 ile mat ağı kurmak; ayrıca f5’te Bxf5 değişimini önlemek.',
      neden: 'Spectator köşesi bunu “son saldırının” başlangıcı olarak anıyor. Geri çekiliş gibi görünse de at g6’ya giderek kale ve h5 piyonuyla birlikte şahı tamamen kuşatır. Motor: +4.5; 35.Re8+ (+1.6) ve 35.Ng3 (+0.3) bu fırsatı kaçırır.',
      diger: [
        { move: '35.Re8+', text: '35...Kh7 36.Re7+ Kg8 37.Nh4 ile tekrar aynı fikre dönülür ama tempo kaybedilir (+1.6).' },
        { move: '35.Ng3', text: '35...a5 36.Re8+ Kg7 ile şah kurtulur (+0.3).' },
      ],
    },
    '35b': {
      text: '35...f5: Siyah g6’yı kontrol etmeye ve f-piyonuyla şaha alan açmaya çalışır.',
      amac: 'f5 karesini piyonla tutup filine c8-h3 çaprazını açmak ve ...f4 ile şah kanadında karşı oyun aramak.',
      neden: 'Siyahın hiçbir iyi seçeneği yok; motor tüm hamleleri kaybeden görüyor. f5 en azından şah kanadı piyonunu canlandırır, ama g6 karesini korumaz.',
      diger: [
        { move: '35...Kg8', text: '36.h6 f5 37.Rg7+ Kh8 ile mat ağı daralır (Motor: +4.7).' },
        { move: '35...Re6', text: '36.Rc7 Re1+ 37.Kh2 Bf5 ile kale kaybedilir gibi bir oyun (+5.1).' },
      ],
    },
    '36w': {
      text: '36.Ng6+: at şah çekerek g6’ya yerleşir.',
      amac: 'Şahı g8’e kilitlemek; h5 piyonuyla korunan at, f8 ve e7’yi kontrol eder.',
      neden: 'At g6’da h5 piyonuyla korunur ve alınamaz (36...Rxg6 37.hxg6 kale kaybettirir). Şah artık f8’e de gidemez. Motorun ilk tercihi (+5.0).',
      diger: [
        { move: '36.Rxa7', text: 'Önce piyonu almak; 36...Kg8 37.Ng6 ile aynı pozisyona döner (+4.9).' },
        { move: '36.f4', text: 'Yavaş; 36...d4 37.Ng6+ Kg8 38.Ne5 ile Siyah biraz nefes alır (+3.3).' },
      ],
    },
    '36b': {
      text: '36...Kg8: şah g8’e.',
      amac: 'Şahın tek güvenli kaçışı.',
      neden: 'Şah h7’ye gidemez (kale yedinci yatayda) ve g7’ye de gidemez. Tek alternatif 36...Rxg6 37.hxg6 ile kaleyi ata vermektir.',
      diger: [
        { move: '36...Rxg6', text: '37.hxg6 a5 38.Re8+ Kg7 ile Beyaz kale fazlasıyla kazanır (Motor: +5.1).' },
      ],
    },
    '37w': {
      text: '37.Rxa7: a7 piyonu düşer; 38.Ne7+ ile şah ve c6 kalesine çatal tehdit edilir. Tal terk etti.',
      amac: 'Materyal kazanmak, a-piyonunu geçer piyon yapmak ve Ne7+ çatalı ya da h6-h7 ile mat ağı kurmak.',
      neden: 'Spectator köşesine göre 38.Ne7+ tehdidi vardı. Siyah kaleyi kurtarırsa h6-h7 ve Ra8 fikirleri gelir; a-piyonu da ayrıca yürür. Motor: +5.0.',
      diger: [
        { move: '37.f4', text: '37...d4 38.Ne5 Re6 39.Rxa7 ile aynı fikre geç ulaşılır (+3.2).' },
        { move: '37.g4', text: '37...d4 38.g5 d3 ile Siyahın d-piyonu tehlikeli olur (+2.3).' },
      ],
    },
  },
  qa: [
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Açılıştan çıkan c3-d4-e4 merkezinden ve kalelerin bu piyonların arkasına (Rad1, Rfe1) yerleşmesinden. 16.d5 ile Siyahın b7 fili kendi d5 piyonunun arkasında kaldı, 17.e5 ile d3 filinin h7’ye bakışı açıldı ve f6 karesi Siyahtan alındı. Siyahın atı ise a5-c4-b2 yolculuğuyla şah kanadından tamamen uzaktı. Bu üç etken birleşince 19.Bxh7+ fedası çalıştı.' },
    { q: 'Siyah neden 16...exd5 yerine başka bir hamle oynamalıydı?', a: 'Piyonu almak e-piyonunun önünü açtı ve b7 filini kapattı. 16...Rc5 (Motor: +0.4) d5 piyonuna baskı yapıp yapıyı kapalı tutar; Mackenzie 16...Qe7’yi de “ilginç ve oynanabilir” buluyor (+0.55). Her iki durumda da e5 ilerleyişi ya engellenir ya da tempo kaybettirir.' },
    { q: 'Tal neden 18...Nb2 oynadı ve neden kötüydü?', a: 'Tal aktif savunmayla Beyazın d3 filini ya da d1 kalesini kazanmayı, böylece Beyazın feda ettiği piyonu karşılıksız bırakmayı umdu. Sorun şu ki fil zaten kaybedilecekse Beyaz onu h7’de feda ederek değerlendirebildi. 18...Qe7 ya da 18...Rc6 ile şah kanadı korunurdu (Motor: +0.9, oyundaki +1.5’e karşı).' },
    { q: '20...Kg8 neden olmadı?', a: '21.Qh4 ile h7’de mat tehdidi gelir ve f6 karesi e5 piyonuyla kontrol edildiği için Siyah ...Nf6 ya da ...Qf6 ile savunamaz. Tek çare 21...Qxg5 22.Qxg5 Nxd1’dir; Beyaz vezir karşılığı az materyal verir (Motor: +2.9). Bu yüzden Tal şahını g6’ya çıkarmak zorunda kaldı.' },
    { q: '21.h4 neden bu kadar övülüyor?', a: 'Şah g6’dayken Beyazın doğrudan şahı yoktur ve taşların çoğu saldırı altındadır. 21.h4 sakin görünür ama h5+ ile şahı daha da öne itmeyi ve g5 atını sağlamlaştırmayı amaçlar. Polugayevski’nin notlarına göre bu pozisyon oyundan önce “Siyah için zor” bulunmuştu; başka hamlelerle (21.Ne4, 21.Nf3) Beyazın avantajı kaybolurdu.' },
    { q: 'Polugayevski 22.h5+ yerine ne oynamalıydı?', a: 'Motor 22.Rd4! öneriyor: 22...Rxd4 23.Qxd4 sonrası Beyaz b2 atını alır ve saldırı devam eder (+2.2). 22.h5+ Kh6! sonrası avantaj +1.0’e indi. tartajubow bu noktayı eski yorumcuların kaçırdığını vurguluyor; Mackenzie de motorun 22.Rd4’ü tercih ettiğini yazıyor.' },
    { q: 'Polugayevski 27.Nd6’nın kazandığını söylemiş; doğru mu?', a: 'Spectator köşesinde aktarılan notlara göre Polugayevski 27.Rd2’ye “?” koyup 27.Nd6!’yı kesin kazanç saymış. Motor ise buna katılmıyor: 27.Nd6 Nxd1 28.e7 Rc1 sonrası değerlendirme yalnızca +0.2, oyundaki 27.Rd2 ise +1.0. Yani oyunda oynanan hamle aslında daha iyiydi.' },
    { q: 'Materyal eşitken Beyaz oyunsonunu neden kazandı?', a: 'Beyazın kalesi yedinci yataya girdi (34.Re7+), atı f5-h4-g6 yoluyla şahın etrafını ördü; Siyahın fili c8’de pasif, piyonları dağınıktı. 34...Kh8 hatasından sonra 35.Nh4! ve 36.Ng6+ ile mat ağı kuruldu; 37.Rxa7 sonrası 38.Ne7+ çatalı tehdit edildi ve Tal terk etti.' },
  ],
  sources: [
    { title: 'The Spectator, 17 Ocak 1970 – Chess 474 (Polugayevski’nin notlarına dayanan inceleme)', url: 'https://archive.spectator.co.uk/article/17th-january-1970/28/chess-474' },
    { title: 'tartajubow blogu: The Old Becomes New (Polugayevski – Tal 1969 motorlu inceleme)', url: 'https://tartajubow.blogspot.com/2025/02/the-old-becomes-new.html?m=1' },
    { title: 'Dana Mackenzie: In the Company of Legends, Part 1', url: 'https://www.danamackenzie.com/blog/?p=5132' },
    { title: 'Dana Mackenzie: In the Company of Legends, Part 2', url: 'https://www.danamackenzie.com/blog/?p=5140' },
    { title: 'lichess blog: The time Mikhail Tal got destroyed', url: 'https://lichess.org/@/Lizard1/blog/the-time-mikhail-tal-got-destroyed/hnfTEzqm' },
    { title: 'ChessBase Modern Classics: Polugaevsky – Tal 1969 (bölüm tanıtımı)', url: 'https://books.chessbase.com/de/modern-classics/polugaevsky-tal-1969' },
    { title: 'chess.com blog: Semi-Tarrasch Defence – Polugaevsky–Tal', url: 'https://www.chess.com/blog/bangalos/semi-tarrasch-defence---the-variation-covered-in-charles-galofres-video' },
    { title: 'Wikipedia: 1969 USSR Chess Championship', url: 'https://en.wikipedia.org/wiki/1969_USSR_Chess_Championship' },
  ],
  exercises: [
    { id: 'pg-1', kind: 'tekrar', plan: false, title: 'Çaprazı açan piyon',
      source: 'Polugayevski – Tal, 1969 (17. hamle)',
      fen: '2rq1rk1/pb3ppp/1p6/n2p4/4P3/3B1N2/P2Q1PPP/3RR1K1 w - - 0 17',
      prompt: 'Beyaz d5 ile piyon feda etti ve Siyah aldı. Fedanın devamı nedir?',
      hint: 'd3 filinin önünde kendi piyonu var.',
      line: ['e5'],
      explanation: '**17.e5!** Piyon e5’e geçer: d3 filinin h7’ye çaprazı açılır ve f6 karesi Siyah atından alınır. 17.exd5 ile Beyazın avantajı tamamen kaybolurdu (motor: e5 +1.0, exd5 0.0).',
      link: 'Merkez piyonlarının görevi ilerlemek: biri feda edildi, diğeri saldırı hattını açtı.' },
    { id: 'pg-2', kind: 'tekrar', plan: false, title: 'Klasik fil fedası',
      source: 'Polugayevski – Tal, 1969 (19. hamle)',
      fen: '2rq1rk1/pb3ppp/1p6/3pP3/5Q2/3B1N2/Pn3PPP/3RR1K1 w - - 3 19',
      prompt: 'Siyah atı b2’de hem d1 kalesine hem d3 filine saldırıyor. Fil zaten kaybedilecekse en iyi kullanımı ne?',
      hint: 'h7 piyonu yalnızca şah tarafından korunuyor.',
      line: ['Bxh7+', 'Kxh7', 'Ng5+', 'Kg6', 'h4'],
      explanation: '**19.Bxh7+!** Kxh7 **20.Ng5+** Kg6 **21.h4!** Şah g6’da açıkta kalır ve h5+ tehdidi var. 20...Kg8 olsaydı 21.Qh4 sonrası Siyah h7 matını önlemek için vezirini vermek zorunda kalırdı. Motor: Bxh7+ +2.2, sonraki en iyi hamle −0.1.',
      link: 'e5 piyonu f6’yı kontrol ettiği için Siyah ...Nf6 ile savunamıyor; fedanın işlemesini sağlayan şey 17.e5 oldu.' },
    { id: 'pg-3', kind: 'transfer', plan: true, title: 'Aynı açılış, aynı kırılma',
      source: 'Spasski – Petrosyan, Dünya Şampiyonası maçı, Moskova 1969, 5. oyun (15. hamle)',
      fen: '2rq1rk1/pb3ppp/1pn1p3/8/2BPP3/5N2/P2Q1PPP/3RR1K1 w - - 4 15',
      prompt: 'Polugayevski – Tal ile neredeyse aynı pozisyon; bu kez fil hâlâ c4’te ve Siyah ...Na5 oynamadı. Spasski merkezi nasıl harekete geçirdi?',
      hint: 'Kale d1’de piyonu destekliyor.',
      line: ['d5'],
      explanation: '**15.d5!** exd5 16.Bxd5 sonrası fil merkezde hâkim, d-hattı açık. Spasski bu kez saldırı yerine geçer d-piyonu yarattı ve piyonu d7’ye kadar ilerletti. Motor d5’i bu pozisyonun en iyi hamlesi olarak gösteriyor.',
      link: 'Polugayevski d5’ten sonra e5 ile şah kanadına saldırdı; Spasski aynı kırılmayla geçer piyon kazandı. Piyon merkezi her iki planı da mümkün kılar.' },
    { id: 'pg-4', kind: 'transfer', plan: false, title: 'd7 piyonuyla bitiriş',
      source: 'Spasski – Petrosyan, Dünya Şampiyonası maçı, Moskova 1969, 5. oyun (28. hamle)',
      fen: '2Rr1rk1/pn1P1pp1/1q5p/1p3Q2/3N4/8/5PPP/4R1K1 w - - 4 28',
      prompt: 'Geçer piyon d7’ye kadar geldi. Siyah d8 karesini zor tutuyor. Bitirici at hamlesini bulun.',
      hint: 'd8 kalesine ikinci kez saldırın.',
      line: ['Nc6'],
      explanation: '**28.Nc6!** At d8 kalesine saldırır ve e7 karesini kontrol eder. 28...Nd6 29.Nxd8 sonrası d8 düşer ve piyon vezire çıkmayı tehdit eder. Motor: Nc6 +5.0, sonraki en iyi hamle +3.2.',
      link: 'Polugayevski’nin e-piyonu e6’ya, Spasski’nin d-piyonu d7’ye ulaştı: iki maçta da merkez piyonu oyunsonunda belirleyici oldu.' },
  ],
};
