// Romero Holmes – Lautier, İspanya Takımlar Şampiyonası, Salamanca 1998 (9. tur). Kaynak: PgnMentor (Lautier.pgn).
export default {
  id: 'romero-lautier-1998',
  theme: '...d5 ve ...c4 kırılmalarıyla vezir kanadından karşı oyun',
  white: 'Alfonso Romero Holmes', black: 'Joël Lautier',
  whiteShort: 'Romero Holmes', blackShort: 'Lautier',
  event: 'İspanya Takımlar Şampiyonası', site: 'Salamanca', year: 1998, eco: 'B23',
  variation: 'Kapalı Sicilya, 2...a6 ve 3.Nge2 (g3–Bg2 kuruluşu)', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 a6 3. Nge2 d6 4. g3 Nc6 5. Bg2 e6 6. O-O Nf6 7. d3 Be7 8. Kh1 Qc7 9. f4 b5 10. a3 Bb7 11. Be3 O-O 12. Bg1 Rfd8 13. h3 d5 14. e5 Nd7 15. g4 d4 16. Ne4 c4 17. N2g3 Nc5 18. g5 Na5 19. Nxc5 Bxg2+ 20. Kxg2 Qxc5 21. Ne4 Qd5 22. Qf3 Rac8 23. h4 cxd3 24. cxd3 Rc2+ 25. Rf2 Qb3 26. Rxc2 Qxc2+ 27. Bf2 Nb3 28. Rh1 Qxb2 29. g6 hxg6 30. h5 Nd2 31. Nxd2 Qxd2 32. hxg6 fxg6 33. Rd1 Qc2 34. Kh3 Kf7 35. Kg4 Rh8 36. Bg3 a5 37. Qf1 Rc8 38. Qh1 Qe2+ 39. Qf3 Qxf3+ 40. Kxf3 Bxa3 0-1`,

  summary: 'Romero Holmes Kapalı Sicilya’nın bilinen planını uyguladı: g3–Bg2, Nge2, d3, Kh1, ardından f4, Be3–g1, h3 ve g4–g5 ile şah kanadında piyon saldırısı. Lautier bu saldırıya şah kanadında karşılık vermedi. Önce **13...d5** ile merkezde kırılma yaptı. 14.e5’ten sonra merkez kapanınca **15...d4** ve **16...c4** ile vezir kanadında ilerledi. **19...Bxg2+** ile Beyazın şahını koruyan fili değişti, **21...Qd5** ile e4 atını uzun çaprazda şaha karşı bağladı. **23...cxd3** ile c-hattını açtı ve **24...Rc2+** ile kalesini ikinci yataya soktu. Bu ana kadar oyun dengedeydi (Motor: 0.0 civarı). Kırılma 26.Rxc2 ve özellikle **28.Rh1?** ile geldi: Beyaz h-hattından saldırmak için kalesini vezir kanadından çekti, Siyah **28...Qxb2!** ile piyonu aldı. Beyaz 29.g6 ve 30.h5 ile şahın önünü açmaya çalıştı ama **30...Nd2!** en tehlikeli saldırı taşı olan e4 atını değiştirdi. Beyazın saldırısı söndü, Siyah iki piyon fazlasıyla kaldı, **38...Qe2+** ile vezirleri değiştirdi ve 40...Bxa3 ile üç piyon fazlasına ulaşınca Beyaz terk etti.',
  intro: 'Bu oyun modülün ana hamle sırasıyla (1.e4 c5 2.Nc3 e6 3.g3 a6 4.Bg2) başlamadı: oynanan sıra **1.e4 c5 2.Nc3 a6 3.Nge2 d6 4.g3 Nc6 5.Bg2 e6** idi. 5. hamleden sonra modülün yapısı yine de oluştu: Beyazda Nc3, g3, Bg2, Nge2 ve d3; Siyahta ...e6 ile ...a6, ardından ...b5 ve ...Bb7. Kapalı Sicilya’da Beyaz merkezi açmaz, onun yerine f4 (bazen f5) ve g4–g5 ile şah kanadında alan alıp saldırır. Siyahın klasik cevabı vezir kanadında ...b5–b4 ilerlemesi ve uygun anda merkezde **...d5** kırılmasıdır. Bu oyun ...d5’in nasıl çalıştığını çok net gösteriyor: Beyaz 14.e5 ile merkezi kapattıktan sonra Siyah ...d4 ve ...c4 ile c-hattını açtı, beyaz kareli filleri değişip Beyazın ilerlemiş piyonlarının arkasında kalan şahı açıkta bıraktı. Oyun 1998 İspanya Takımlar Şampiyonası’nın (Salamanca) 9. ve son turunda oynandı. OlimpBase kayıtlarına göre Lautier bu şampiyonada 1. masada 9 oyundan 5½ puan topladı ve son turda galip geldi. Hamlelerin değerlendirmeleri Stockfish 16 ile (derinlik 15–20) kontrol edildi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Esnek gelişim:** 3.Nge2 ile hem d4 (Açık Sicilya’ya geçiş) hem g3–Bg2 (Kapalı Sicilya) seçeneğini açık tutmak; 4.g3 ve 7.d3 ile Kapalı Sicilya’yı seçmek. At e2’de olduğu için f-piyonu serbesttir.',
      '**Şahı güvenceye almak:** 8.Kh1 ile şahı g1–a7 çaprazından çekmek; f4’ten sonra bu çapraz açılacağı için ...Qc7–...c5 gibi baskılara karşı önlem.',
      '**Şah kanadında piyon saldırısı:** 9.f4, 11.Be3–12.Bg1, 13.h3 ve 15.g4–18.g5 ile Siyahın f6 atını kovup şah kanadında alan almak; sonra h4–h5 ve g6 ile şahın önünü açmak.',
      '**Merkezi kapatmak:** 14.e5 ile merkezi kilitleyip f6 atını geri itmek, e4 karesini atlara üs yapmak (16.Ne4, 21.Ne4).',
      '**Atları e4’te tutmak:** e4’teki at hem f6’ya hem d6’ya sıçrama tehdidi taşır ve saldırının ana taşıdır. Bu yüzden Siyah 21...Qd5 ile atı bağladı, 30...Nd2 ile değiştirdi.',
      '**Neyi kaçırdı:** Beyazın saldırısı yavaş kaldı; vezir kanadındaki b2 ve a3 piyonları korumasız kaldı. 23.h4 yerine 23.Rac1 ile c-hattına karşı çıkmak, 28.Rh1 yerine 28.Re1 veya 28.Rg1 ile kaleyi merkezde tutmak gerekiyordu (Motor: 28.Re1 0.0, oyunda −1.1).',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**Vezir kanadında alan:** 2...a6, 9...b5 ve 10...Bb7 ile b5 piyonunu ileri itip fili uzun çapraza yerleştirmek; fil hem e4’e hem de Beyazın şahına uzanan a8–h1 çaprazına bakar.',
      '**Merkezde kırılma 13...d5:** Beyaz şah kanadına yüklenirken merkezi açmak. 12...Rfd8 bu kırılmayı destekledi. Kural: kanattan saldırıya merkezden karşılık ver.',
      '**...d4 ve ...c4:** Merkez kapanınca 15...d4 ile c3 atını kovmak ve 16...c4 ile d3 piyonunun üstüne gitmek; c-hattını açmanın hazırlığı.',
      '**Beyaz kareli fillerin değişimi:** 19...Bxg2+ ile Beyazın şahını koruyan fili değişmek. g-, h- ve f-piyonları ilerlemiş olduğu için Beyazın şahı ondan sonra açıkta kaldı.',
      '**Bağlama ve hat açma:** 21...Qd5 ile e4 atını g2 şahına karşı bağlamak, 23...cxd3 ile c-hattını açıp 24...Rc2+ ve 25...Qb3 ile ikinci yataya ve vezir kanadına girmek.',
      '**Piyon toplamak ve savunucuyu değiştirmek:** 28...Qxb2 ile piyonu almak, 30...Nd2 ile Beyazın en iyi saldırı taşı olan e4 atını değiştirmek; şahı f-piyonuyla (32...fxg6) kapatmak.',
      '**Oyun sonuna geçmek:** Piyon fazlası alındıktan sonra 38...Qe2+ ile vezirleri zorla değiştirmek ve 40...Bxa3 ile bağlantılı a–b piyonlarını serbest bırakmak.',
    ] },
  },
  critical: [
    { move: '13b', title: '13...d5: kanat saldırısına merkezden cevap', text: 'Beyaz h3 ile g4’ü hazırlamışken Siyah merkezde kırılma yapar. 14.exd5 exd5 merkezi Siyaha açardı ve f4–g4 piyonları zayıf kalırdı (Motor: −0.8), bu yüzden Beyaz 14.e5 ile merkezi kapatmak zorunda kalır. Böylece Siyahın atı f6’dan geri itilir ama karşılığında Siyah ...d4 ve ...c4 ile vezir kanadında ilerleme hakkı kazanır. Motor 13...Rac8’i biraz daha iyi buluyor (−0.25), ama 13...d5 de denge hamlesidir (−0.1) ve oyunun bütün planını belirler.' },
    { move: '16b', title: '16...c4: d3’e baskı ve c-hattı', text: 'Merkez kilitli olduğu için Siyahın oyunu vezir kanadındadır. c4 piyonu d3’e dayanır; Beyaz dxc4 oynarsa d4 piyonu serbest kalır ve uzun çapraz açılır, oynamazsa Siyah uygun anda ...cxd3 ile c-hattını açar. Oyunda tam bu oldu: 23...cxd3 24.cxd3 Rc2+. Motor 16...Rac8 ile 16...c4’ü eşit görüyor (0.0 / +0.1).' },
    { move: '19b', title: '19...Bxg2+: şahın bekçisini değişmek', text: '19.Nxc5 Siyahın atını aldı ama e4 karesi boşaldığı için b7 filinin uzun çaprazı açıldı. Siyah önce şah çekerek g2 filini alır (20.Kxg2 zorunlu; 20.Kh2? Bxf1 kalite kaybettirir, Motor: −4.3), sonra 20...Qxc5 ile atı geri alır. Sonuç: Beyazın şahı g2’de ama önündeki f4, g5 ve h3 piyonları ilerlemiş, beyaz kareler (f3, e4, d5) zayıf. 19...Bxc5? yerine bu sıra önemliydi (Motor: −0.2 karşı +0.2).' },
    { move: '24b', title: '24...Rc2+: kale ikinci yatayda', text: '23...cxd3 24.cxd3 ile c-hattı açıldı ve Siyahın kalesi hiç zaman kaybetmeden ikinci yataya girdi. Şah çekerek gelmesi önemli: Beyaz 25.Rf2 ile araya girmek zorunda (25.Kg3? Rxb2 ve 25.Bf2? Rxb2 piyon kaybettirir, Motor: −0.7/−0.8). Ardından 25...Qb3 ile vezir de vezir kanadına girer ve b2 ile d3 hedef olur. Motor 24...Rc2+ ve 24...Qb3’ü eşit görüyor (−0.1).' },
    { move: '28w', title: '28.Rh1? Saldırı için savunmayı bırakmak', text: 'Oyunun gerçek hatası. Beyaz kalesini h-hattına getirip h5–g6 ile saldırmak istedi ama bu b2 piyonunu ve merkezi savunmasız bıraktı. 28.Re1 (Motor: 0.0) veya 28.Rg1! (Motor: 0.0; 28...Qxb2 29.Nf6+! Kh8 30.Qh5 ile g-hattında karşı oyun) dengeyi koruyordu. Oyunda 28...Qxb2 sonrası Siyah bir piyon fazla ve inisiyatif ondaydı (Motor: −1.1).' },
    { move: '28b', title: '28...Qxb2!: zamanında piyon almak', text: 'Siyah piyon alırken şahının tehlikede olup olmadığını hesapladı: 29.g6 hxg6 30.h5 saldırısının 30...Nd2! ile karşılanabildiğini gördü. Motor 28...Qxb2’yi açık farkla en iyi hamle görüyor (−1.25); 28...Rc8 veya 28...b4 ise yalnızca 0.0 verir. Kural: rakibin saldırısı tek bir taşa dayanıyorsa önce piyonu al, sonra o taşı değiştir.' },
    { move: '30b', title: '30...Nd2!: en iyi saldırı taşını değiştirmek', text: 'Beyaz 29.g6 hxg6 30.h5 ile h-hattını açmak üzere. Siyahın atı b3’ten d2’ye gelir ve e4 atına saldırır; e4 atı hem f6+ hem de d6’ya sıçrama fikirleriyle saldırının kalbiydi. 31.Nxd2 Qxd2 sonrası vezir f2 filine ve d3’e baskı yapar. Pasif savunma kaybederdi: 30...Qa2 31.hxg6 ile 0.0, 30...Qc2? 31.hxg6 ile Beyaz üstün (Motor: +0.9). Oyunda Motor: −1.2. Not: 31.Qe2 gibi atı korumak daha da kötüydü (Motor: −3.0), yani 31.Nxd2 zorunluya yakındı.' },
    { move: '38b', title: '38...Qe2+: vezirleri değiştirip kazanmak', text: 'Beyaz 38.Qh1 ile h-hattından şaha karşı son bir umut aradı ama bu e2 karesini savunmasız bıraktı. 38...Qe2+ sonrası 39.Qf3 zorunludur (39.Kh3? Qh5+ ile mat gelir, Motor: 7 hamlede mat). 39...Qxf3+ 40.Kxf3 Bxa3 ile Siyah üç piyon fazlasıyla kale-fil oyun sonuna geçer, a–b piyonları birlikte ilerleyecektir (Motor: −4.9). 38.Qf3 daha dirençliydi (Motor: −3.9).' },
  ],
  lessons: [
    'Kapalı Sicilya’da Beyaz şah kanadında piyonlarla saldırdığında Siyahın en güçlü cevabı genellikle merkezdeki **...d5** kırılmasıdır. Beyaz exd5 oynarsa merkez Siyaha açılır; e5 oynarsa merkez kilitlenir ve Siyah vezir kanadında (...d4, ...c4, ...b5–b4) serbest kalır.',
    'Merkez kilitlendikten sonra c4 piyonuyla d3’e dayanmak ve uygun anda **...cxd3** oynamak c-hattını açar; kale bu hattan ikinci yataya (…Rc2+) girer ve b2 gibi korumasız piyonlar hedef olur.',
    'Beyaz g-, h- ve f-piyonlarını ilerlettiyse, g2’deki fil şahın son bekçisidir. **...Bxg2+** ile bu fili değişmek, saldıran tarafın kendi şahını açıkta bırakır.',
    'Bağlama savunmanın da silahıdır: 21...Qd5 ile e4 atı g2 şahına karşı bağlandı ve Beyaz 22.Qf3 ile vezirini pasif bir savunma görevine bağlamak zorunda kaldı.',
    'Saldırı yaparken savunmayı unutma: 28.Rh1 ile kale vezir kanadından ayrıldı ve b2 düştü. Kanat saldırısı, vezir kanadındaki zayıflıklardan daha hızlı değilse ters teper.',
    'Rakibin saldırısı tek bir güçlü taşa dayanıyorsa (burada e4 atı), o taşı değiştirmek (30...Nd2) saldırıyı bütünüyle söndürür.',
    'Piyon fazlası alındıktan sonra en sade yol vezirleri değiştirmektir: 38...Qe2+ ile vezirsiz oyun sonunda Beyazın şah saldırısı ortadan kalktı ve bağlantılı a–b piyonları kararı verdi.',
  ],
  qa: [
    { q: 'Siyah neden şah kanadında savunma yapmak yerine 13...d5 oynadı?', a: 'Kanattan gelen piyon saldırısına en iyi cevap merkezden verilir. 13...d5’ten sonra 14.exd5 exd5 Siyahın taşlarına merkezi açardı ve Beyazın f4–g4 piyonları geride zayıf kalırdı (Motor: −0.8). Beyaz bu yüzden 14.e5 ile merkezi kapattı; bunun karşılığında Siyah ...d4 ve ...c4 ile vezir kanadında rahat oyun aldı. Motor 13...Rac8’i hafif daha iyi buluyor (−0.25), ama 13...d5 de dengeyi korur (−0.1).' },
    { q: '15...d4 iyi bir hamle miydi?', a: 'Plan açısından mantıklıydı: c3 atını kovar ve ...c4’e yol açar. Ama e4 karesini Beyazın atlarına verdi; 16.Ne4 sonrası at merkezde güçlü durdu. Motor 15...Nf8!’i (fikir ...Ng6 ile f4’e baskı, d5 piyonu e4 karesini kontrol etmeye devam eder) daha iyi buluyor: −0.5’e karşı oyunda +0.1. Yani 15...d4 küçük bir doğruluk kaybıydı, kaybettiren bir hata değil.' },
    { q: '21...Qd5 neden bu kadar etkiliydi?', a: 'Vezir d5’ten e4 atına saldırır ve aynı çaprazda g2’deki şaha bakar: at şaha karşı bağlıdır, kaçamaz. Beyaz 22.Qf3 ile hem atı korudu hem bağlamayı kırmak istedi, ama vezir artık bu savunma görevine bağlıydı. Siyah bu arada 22...Rac8 ve 23...cxd3 ile c-hattını açtı. Motor 21...Qd5’i tek iyi hamle görüyor (0.0; 21...Qc7 ise +0.45).' },
    { q: 'Beyazın avantajı neden hiç gelmedi; saldırısı neden yetmedi?', a: 'Beyazın piyon saldırısı (g4–g5, h4–h5) yavaştı ve şahını da açıkta bırakıyordu. 19...Bxg2+ ile şahın bekçi fili gitti, 21...Qd5 ile e4 atı bağlandı ve Siyahın c-hattındaki oyunu çok daha hızlı geldi. Beyaz piyonları ilerletirken arkasında b2, a3 ve d3 korumasız kaldı.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'En net an 28. hamleydi: 28.Re1 veya 28.Rg1 (Motor: 0.0 ikisi de) yerine oynanan 28.Rh1? b2’yi düşürdü (−1.1). 28.Rg1 Qxb2 29.Nf6+! Kh8 30.Qh5 ile g-hattında karşı oyun vardı. Daha önce 26.Rxc2 yerine 26.Re1 (Motor: 0.0) ve 23.h4 yerine 23.Rac1 (0.0) de dengeyi koruyordu. Sonradan 33.Rd1 yerine 33.Qg4 (−2.0, oyunda −3.0) direnci uzatırdı.' },
    { q: 'Siyah 29.g6’ya neden hxg6 ile karşılık verdi, fxg6 değil?', a: 'Motor 29...hxg6’yı tek iyi hamle görüyor (−1.2), 29...fxg6 ve 29...Rf8 ise yalnızca 0.0. hxg6 ile f7 piyonu yerinde kalır, e6 ve g6’yı korur ve h-hattı açılsa bile Siyahın 30...Nd2 ile atları değiştirme zamanı olur. 32.hxg6’dan sonra Siyah ikinci g-piyonunu f-piyonuyla aldı ve şahın önü g7–g6 piyonlarıyla kapandı.' },
    { q: '30...Nd2 yerine 30...Qc2 ile f2’ye baskı neden olmazdı?', a: '30...Qc2? 31.hxg6 fxg6 32.Rh3 ile Beyaz h-hattından girer ve e4 atı da saldırıya katılır (Motor: +0.9). 30...Nd2! ise saldırının ana taşına doğrudan saldırır; 31.Nxd2 Qxd2 sonrası Beyazın h-hattı saldırısı tek başına kalır (Motor: −1.2). Atı korumaya çalışmak, örneğin 31.Qe2 Nc4, daha da kötü olurdu (Motor: −3.0).' },
    { q: 'Neden 40...Bxa3’ten sonra Beyaz terk etti?', a: 'Taşlar eşit (kale ve fil karşı kale ve fil) ama Siyah üç piyon fazladır: Siyahta a5, b5, d4, e6, g6, g7; Beyazda yalnızca d3, e5, f4. Bağlantılı a–b piyonlarını Beyazın kalesi ve fili tek başına durduramaz, Beyazın şah saldırısı da vezirlerle birlikte bitti. Motor: −4.9.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: şah piyonu iki kare ilerleyerek d5 ve f5 karelerini kontrol eder, f1 filine ve vezire yol açar.',
      amac: 'Merkezde yer kaplamak ve hızlı gelişmek. Romero Holmes bu oyunda Sicilya’ya karşı Kapalı Sicilya kuruluşunu seçecek.',
      neden: 'Kapalı Sicilya için 1.e4 şarttır; Beyaz e4 piyonunu merkezde tutup sonra f4 ile destekleyecek. Motor ana ilk hamleleri birbirine çok yakın görür.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları, daha konumsal oyun (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek başlangıç, çoğu zaman d4 sistemlerine geçer (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine yandan baskı yapar ve simetrik olmayan bir mücadele seçer.',
      amac: 'Merkezi yandan kontrol etmek ve c-hattını ileride kendi kalesine açmak. Bu oyunda tam da c-hattı Siyahın kazanma yolu olacak.',
      neden: 'Lautier 1.e4’e karşı Sicilya da oynayan bir oyuncuydu. 1...c5 dengesiz yapılar yaratır ve Siyaha kazanma şansı verir.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; daha simetrik ve sağlam (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.35).' },
      ],
    },
    '2w': {
      text: '2.Nc3: Beyaz hemen Nf3 ve d4 oynamaz; at c3’ten e4 ve d5’i destekler.',
      amac: 'Kapalı Sicilya’ya (g3–Bg2, d3, f4) ya da Nge2 ile d4’e, yani Açık Sicilya’ya geçme seçeneğini açık tutmak.',
      neden: 'Nc3 hem Kapalı Sicilya’nın hem Grand Prix saldırısının (f4) başlangıcıdır. f-piyonunun önünü kapatmaz, f4 için yol açık kalır.',
      diger: [
        { move: '2.Nf3', text: 'Ana yol; 3.d4 ile Açık Sicilya (Motor: +0.45).' },
        { move: '2.c3', text: 'Alapin Varyantı; c3–d4 ile piyon merkezi (Motor: +0.3).' },
      ],
    },
    '2b': {
      text: '2...a6: Siyah b5 karesini hazırlar; ...b5 ve ...Bb7 ile vezir kanadında alan alma fikri.',
      amac: 'Kapalı Sicilya’da Siyahın asıl karşı oyunu vezir kanadındadır; ...a6 bunun ilk adımıdır. Modülün yapısındaki ...a6 burada çok erken, ikinci hamlede geldi.',
      neden: '2...a6 esnektir: Siyah henüz ...e6 mı ...d6 mı ...g6 mı olacağını göstermez. Beyaz d4 oynarsa Siyah Najdorf/Kan benzeri yapılara geçebilir. Motor 2...d6 ve 2...Nc6’yı aynı düzeyde görür.',
      diger: [
        { move: '2...Nc6', text: 'En yaygın cevap; 3.g3 g6 ile klasik Kapalı Sicilya (Motor: +0.45).' },
        { move: '2...d6', text: '3.Nge2 e5 veya 3.f4 ile oyun (Motor: +0.35).' },
        { move: '2...e6', text: 'Modülün sırası: 3.g3 a6 4.Bg2 b5 ile aynı yapıya gelinir (Motor: +0.3 civarı).' },
      ],
    },
    '3w': {
      text: '3.Nge2: at e2’ye gelişir; f-piyonunun önünü kapatmaz.',
      amac: 'Hem d4 ile Açık Sicilya’ya geçmek hem de g3–Bg2 ile kapalı kuruluş yapmak için esnek kalmak.',
      neden: 'At f3’e gitseydi f4 planı kapanırdı. e2’deki at ileride g3’e (17.N2g3) veya d4’e gidebilir. Motor 3.Nf3, 3.Nge2 ve 3.g3’ü eşit görüyor.',
      diger: [
        { move: '3.Nf3', text: 'Açık Sicilya’ya hazırlık, 3...b5 4.d4 (Motor: +0.4).' },
        { move: '3.g3', text: 'Doğrudan Kapalı Sicilya; 3...d6 4.Nge2 (Motor: +0.35).' },
      ],
    },
    '3b': {
      text: '3...d6: Siyah e5 karesini kontrol eder ve c8 filine yol açar.',
      amac: 'Merkezde sağlam bir piyon yapısı (d6–e6) kurmak; Beyaz d4 oynarsa Scheveningen ya da Najdorf yapılarına geçmek.',
      neden: 'Beyaz hâlâ d4 oynayabilir; 3...d6 bu durumda bilinen Açık Sicilya yapılarını sağlar. Motor 3...Nf6’yı biraz daha iyi buluyor (+0.33), 3...b5 de oynanabilir.',
      diger: [
        { move: '3...Nf6', text: 'e4’e baskı; 4.d4 cxd4 5.Nxd4 e5 (Motor: +0.3).' },
        { move: '3...b5', text: 'Doğrudan vezir kanadı planı; 4.g3 Bb7 5.Bg2 e6 (Motor: +0.4).' },
      ],
    },
    '4w': {
      text: '4.g3: Beyaz kararını verir; fil g2’ye gelecek ve Kapalı Sicilya kurulacak.',
      amac: 'Uzun çaprazda fil ile e4’ü desteklemek ve şahı sağlam bir kalenin arkasına almak, sonra f4 ile şah kanadında oynamak.',
      neden: 'Motor 4.d4’ü (Açık Sicilya, +0.45) daha iddialı buluyor; 4.g3 (+0.25) daha az teori gerektiren, konumsal bir seçimdir.',
      diger: [
        { move: '4.d4', text: '4...cxd4 5.Nxd4 Nf6 ile Açık Sicilya’ya geçiş; Beyaz gelişim önünde (Motor: +0.45).' },
        { move: '4.a3', text: 'Önce ...b5–b4’ü engellemek (Motor: +0.25).' },
      ],
    },
    '4b': {
      text: '4...Nc6: at c6’dan d4 ve e5 karelerine bakar.',
      amac: 'Taşları geliştirmek; ileride at d4’e sıçrayabilir veya oyundaki gibi a5–b3 yoluyla vezir kanadına gidebilir.',
      neden: 'Motor 4...g6’yı (+0.2) biraz daha iyi buluyor, ama Lautier ...e6 yapısını seçiyor; bu yapıda c6 atı doğal yerdedir.',
      diger: [
        { move: '4...g6', text: 'Klasik çift fiyanketo kuruluşu, ...Bg7 (Motor: +0.2).' },
        { move: '4...Nf6', text: '5.Nd5 ile Beyaz d5’i kullanabilir (Motor: +0.25).' },
      ],
    },
    '5w': {
      text: '5.Bg2: fil uzun çapraza gelir; e4’ü destekler ve d5 karesine bakar.',
      amac: 'Kapalı Sicilya kuruluşunu tamamlamak ve rok yapmak.',
      neden: 'Motor en iyi hamle olarak bunu görüyor (+0.3). 5.d3 (0.0) Siyaha ...d5 kırılmasını çok kolaylaştırırdı.',
      diger: [
        { move: '5.d4', text: 'Hâlâ Açık Sicilya mümkün (Motor: +0.3).' },
        { move: '5.d3', text: 'Erken kesinleşme; Siyah rahat dengeler (Motor: 0.0).' },
      ],
    },
    '5b': {
      text: '5...e6: modülün yapısı oluştu. Siyahta ...a6, ...d6, ...e6; Beyazda Nc3, g3, Bg2, Nge2.',
      amac: 'g2 filinin uzun çaprazını d5 piyonu ileride kapatacak şekilde hazırlamak; ...d5 kırılmasına zemin hazırlamak ve f8 filine yol açmak.',
      neden: 'Motor 5...e6’yı en iyi hamle görüyor (+0.2). ...e6 yapısı Beyazın Nd5 sıçramasını da engeller; ...g6 yapısında d5 karesi zayıf olurdu.',
      diger: [
        { move: '5...g6', text: 'Fiyanketo; ama d5 karesi Nd5 için zayıflar (Motor: +0.3).' },
        { move: '5...Bd7', text: 'Gelişim; 6.Nd5 g6 ile oyun (Motor: +0.3).' },
      ],
    },
    '6w': {
      text: '6.O-O: Beyaz rok yapar ve şahını güvenceye alır.',
      amac: 'Şahı emniyete alıp f-hattındaki kaleyi f4 ilerlemesine hazırlamak.',
      neden: 'Motor 6.d4 ve 6.O-O’yu eşit görür (+0.15). Beyaz Açık Sicilya’ya girmeyip kapalı planına sadık kalıyor.',
      diger: [
        { move: '6.d4', text: '6...cxd4 7.Nxd4 ile Scheveningen benzeri yapı (Motor: +0.15).' },
        { move: '6.a4', text: '...b5’i önceden engellemek (Motor: +0.1).' },
      ],
    },
    '6b': {
      text: '6...Nf6: at f6’dan e4’e baskı yapar.',
      amac: 'Gelişimi tamamlamak ve rok yapmaya hazırlanmak; e4 piyonunu ...d5 kırılması için hedef almak.',
      neden: 'Motor 6...Be7, 6...Bd7 ve 6...Nf6’yı eşit görür (0.0 civarı). Atın f6’da olması ileride Beyazın e5 ile tempo kazanmasına yol açacak, ama ...d5 için gereklidir.',
      diger: [
        { move: '6...Be7', text: 'Önce fil; atı esnek bırakır (Motor: 0.0).' },
        { move: '6...Nge7', text: 'At e7’de e5 ilerlemesiyle kovulmaz ama e4’e baskı yapmaz ve f8 filinin önünü kapatır; 7.a4 ile Beyaz biraz daha rahat (Motor: +0.4).' },
      ],
    },
    '7w': {
      text: '7.d3: Beyaz e4’ü sağlamlaştırır ve c1 filine yol açar.',
      amac: 'Kapalı Sicilya’nın tipik piyon yapısını (d3–e4) kurmak, sonra f4 ve Be3 ile şah kanadında oynamak.',
      neden: 'Motor 7.d4’ü (+0.25) daha iyi buluyor; 7.d3 ile oyun dengeye gelir (0.0). d3 sağlam ama pasiftir ve ileride Siyahın ...c4 baskısının hedefi olacak.',
      diger: [
        { move: '7.d4', text: '7...cxd4 8.Nxd4 Bd7 ile açık oyun; Beyaz biraz daha aktif (Motor: +0.25).' },
        { move: '7.Re1', text: 'e4’ü kale ile korumak (Motor: +0.1).' },
      ],
    },
    '7b': {
      text: '7...Be7: fil e7’ye gelişir; Siyah rok yapmaya hazırlanır.',
      amac: 'Şahı güvenceye almak ve şah kanadını sağlam tutmak; e7 fili ileride g5 karesine bakabilir.',
      neden: 'Beyazın kapalı kuruluşunda f8 filinin g7’de yeri yoktur (...e6–d6 yapısı); e7 en doğal karedir. Motor 7...Qc7 ve 7...Be7’yi eşit görür.',
      diger: [
        { move: '7...Qc7', text: 'Önce vezir; 8.a4 Be7 (Motor: −0.05).' },
        { move: '7...h6', text: 'g4–g5’e karşı önlem (Motor: 0.0).' },
      ],
    },
    '8w': {
      text: '8.Kh1: şah g1–a7 çaprazından çekilir.',
      amac: 'f4’ten sonra bu çapraz açılır; ...Qb6 veya ...c5 baskısında şahın tempo kaybetmesini önlemek. Fil de daha sonra g1’e gelebilecek.',
      neden: 'Kapalı Sicilya’da f4 öncesi Kh1 sık görülen bir hazırlıktır. Motor 8.a4 (0.0) ve 8.h3’ü biraz daha iyi buluyor; 8.Kh1 sonrası Motor: −0.2.',
      diger: [
        { move: '8.a4', text: '...b5’i engeller ve vezir kanadını sabitler (Motor: 0.0).' },
        { move: '8.h3', text: 'g4 hazırlığına doğrudan başlamak (Motor: −0.05).' },
      ],
    },
    '8b': {
      text: '8...Qc7: vezir c7’den e5 karesine bakar ve kalelere yer açar.',
      amac: 'Vezir e5’i kontrol ederek f4–e5 ilerlemesini zorlaştırır ve d8’i kaleye bırakır.',
      neden: 'Motor bunu en iyi hamle görüyor (−0.3). Vezir c7’de c-hattında da durur; c-hattı açıldığında hazır olacak.',
      diger: [
        { move: '8...O-O', text: 'Önce rok; 9.f4 Qc7 ile aynı yere gelinir (Motor: −0.2).' },
        { move: '8...Rb8', text: '...b5–b4’ü doğrudan hazırlamak (Motor: −0.15).' },
      ],
    },
    '9w': {
      text: '9.f4: Beyazın şah kanadı planı başlar; e5’i kontrol eder ve f5 veya e5 ilerlemesini hazırlar.',
      amac: 'Şah kanadında alan almak; f5 ile f-hattını açmak ya da e5 ile Siyahın atını f6’dan kovmak.',
      neden: 'Bu Kapalı Sicilya’nın ana planıdır. Motor 9.a4’ü hafif tercih ediyor (−0.15), 9.f4 −0.2. Beyaz vezir kanadını ihmal ettiği için ...b5 serbestçe gelecek.',
      diger: [
        { move: '9.a4', text: 'Önce ...b5’i durdurmak (Motor: −0.15).' },
        { move: '9.a3', text: '...b4’e karşı hazırlık (Motor: −0.2).' },
      ],
    },
    '9b': {
      text: '9...b5: Siyah vezir kanadında ilerler; ...b4 ile c3 atını kovma tehdidi var.',
      amac: 'c3 atı e4’ü ve d5’i destekliyor; onu ...b4 ile kovmak merkezi zayıflatır ve ...d5 kırılmasını kolaylaştırır.',
      neden: 'Motor bunu en iyi hamle görüyor (−0.2). Beyaz şah kanadında saldırırken Siyah zaman kaybetmeden karşı oyununu başlatmalı.',
      diger: [
        { move: '9...O-O', text: 'Önce rok; 10.a3 b5 (Motor: −0.15).' },
        { move: '9...Rb8', text: 'b5’i kale ile desteklemek (Motor: −0.05).' },
      ],
    },
    '10w': {
      text: '10.a3: ...b4 ilerlemesi engellenir.',
      amac: 'c3 atını yerinde tutmak; ...b4 gelirse axb4 ile a-hattını açmamak için önceden önlem.',
      neden: 'Motor 10.a3’ü en iyi hamle görür (−0.2). Ancak a3 ve b2 piyonları ileride Siyahın vezirinin hedefi olacak: oyunun sonunda 28...Qxb2 ve 40...Bxa3 bu piyonları aldı.',
      diger: [
        { move: '10.Ng1', text: 'At f3’e yönelir (Motor: −0.25).' },
        { move: '10.Be3', text: '10...b4 ile Siyah vezir kanadında hızlanır (Motor: −0.4).' },
      ],
    },
    '10b': {
      text: '10...Bb7: fil uzun çapraza gelir ve e4 piyonuna baskı yapar.',
      amac: 'a8–h1 çaprazı ileride e4 karesi boşaldığında doğrudan g2 filine ve Beyazın şahına uzanacak (19...Bxg2+).',
      neden: 'Motor 10...O-O’yu (−0.2) biraz daha iyi buluyor, 10...Bb7 sonrası 0.0. Fark küçük; fil zaten oraya gidecekti.',
      diger: [
        { move: '10...O-O', text: 'Önce rok (Motor: −0.2).' },
        { move: '10...Rb8', text: '...a5 ve ...b4 hazırlığı (Motor: −0.05).' },
      ],
    },
    '11w': {
      text: '11.Be3: fil e3’e gelişir; c5’e ve d4’e bakar.',
      amac: 'Gelişimi tamamlamak, sonra fili g1’e çekip g4 ilerlemesine yer açmak.',
      neden: 'Motor 11.f5!’i (0.0) daha iyi buluyor: 11...exf5 12.Rxf5 ile f-hattı açılır. 11.Be3 ile Beyaz daha yavaş bir planı seçer (Motor: −0.4).',
      diger: [
        { move: '11.f5', text: '11...exf5 12.Rxf5 Ne5 ile f-hattında aktif oyun (Motor: −0.05).' },
        { move: '11.Bd2', text: 'Fil d2’de, sonra f5 (Motor: −0.25).' },
      ],
    },
    '11b': {
      text: '11...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini merkeze getirmek.',
      neden: 'Beyazın piyonları şah kanadında ilerlemeye hazırlanırken şahı oraya götürmek riskli görünür, ama merkez açılabileceği için şahın e8’de kalması daha tehlikeli. Motor 11...h5’i hafif tercih ediyor (−0.45), 11...O-O −0.3.',
      diger: [
        { move: '11...h5', text: 'g4’ü engeller ve şahı merkezde bırakır (Motor: −0.45).' },
        { move: '11...Qd7', text: '...d5 hazırlığı (Motor: −0.2).' },
      ],
    },
    '12w': {
      text: '12.Bg1: fil g1’e çekilir; d4 ve c5’i korur, e3 karesini boşaltır.',
      amac: 'g4–g5 sırasında filin ...Nd5 veya ...Ng4 ile tempo kazanılarak saldırıya uğramasını önlemek ve fili güvenli bir yere almak.',
      neden: 'Kh1 sonrası Bg1 manevrası bu tür kapalı yapılarda tipiktir. Motor bunu en iyi hamle görür (−0.4).',
      diger: [
        { move: '12.Qd2', text: 'Vezirle bağlantı, sonra Bg1 (Motor: −0.45).' },
        { move: '12.Rb1', text: 'b4’e karşı hazırlık (Motor: −0.45).' },
      ],
    },
    '12b': {
      text: '12...Rfd8: kale d-hattına gelir ve ...d5 kırılmasını destekler.',
      amac: 'd5 kırılmasından sonra açılacak d-hattında kaleyi hazır bulundurmak; d6 piyonunun arkasında baskı.',
      neden: 'Motor 12...d5’i hemen oynamayı (−0.3) biraz daha iyi buluyor; 12...Rfd8 sonrası −0.15. Lautier önce hazırlık yapar.',
      diger: [
        { move: '12...d5', text: 'Hemen kırılma; 13.e5 Nd7 14.d4 (Motor: −0.3).' },
        { move: '12...Rab8', text: '...b4’ü hazırlamak (Motor: −0.25).' },
      ],
    },
    '13w': {
      text: '13.h3: g4 ilerlemesi hazırlanır.',
      amac: 'g4–g5 ile f6 atını kovmak ve şah kanadında alan almak.',
      neden: 'Motor derinlik 20’de 13.g4!’ü (+0.1) daha iyi buluyor: 13...Nxg4 14.f5 ile taktik fikirler. 13.h3 yavaş kalır ve Siyaha ...d5 için zaman verir (Motor: −0.2).',
      diger: [
        { move: '13.g4', text: '13...Nxg4 14.f5 Nce5 15.fxe6 ile karışık oyun (Motor: +0.1).' },
        { move: '13.f5', text: '13...exf5 14.Rxf5 Ne5 ile f-hattında oyun (Motor: −0.05).' },
        { move: '13.Nb1', text: 'At d2’ye yönelir (Motor: −0.2).' },
      ],
    },
    '13b': {
      text: '13...d5! Siyah merkezde kırılma yapar; e4 piyonuna saldırır.',
      amac: 'Beyaz şah kanadında piyonlarla ilerlerken merkezi açmak; Beyazın piyon saldırısının arkasında zayıflıklar yaratmak.',
      neden: '14.exd5 exd5 sonrası merkez Siyaha açılır (Motor: −0.8); bu yüzden Beyaz 14.e5 ile merkezi kapatmak zorunda kalır. Motor 13...Rac8’i biraz daha iyi buluyor (−0.25), ama 13...d5 de dengeyi korur (−0.1) ve oyunun bütün planını belirler.',
      diger: [
        { move: '13...Rac8', text: 'Önce c-hattı; 14.Qe1 b4 15.axb4 Nxb4 (Motor: −0.25).' },
        { move: '13...h6', text: 'g4–g5’e karşı önlem (Motor: −0.2).' },
      ],
    },
    '14w': {
      text: '14.e5: merkez kapanır, f6 atı kovulur.',
      amac: 'Merkezi kilitleyip şah kanadında oynamaya devam etmek; e4 karesini atlara üs yapmak.',
      neden: 'Tek iyi hamle: 14.exd5 exd5 Siyaha açık merkez ve aktif taşlar verir (Motor: −0.8), 14.Qe1 dxe4 de kötü (−0.9). 14.e5 ile Motor: 0.0.',
      diger: [
        { move: '14.exd5', text: '14...exd5 15.g4 b4 ile Siyahın taşları merkezde aktif (Motor: −0.8).' },
        { move: '14.Qe1', text: '14...dxe4 15.dxe4 Nd4 ile d4 atı güçlü (Motor: −0.9).' },
      ],
    },
    '14b': {
      text: '14...Nd7: at d7’ye çekilir; c5 karesine yönelecek.',
      amac: 'At c5’ten d3’e ve e4’e baskı yapacak; ayrıca f6 karesini f-piyonu ...f6 ile e5’e saldırmak için boşaltır.',
      neden: 'Tek doğru kare: 14...Ne8 (+0.5) pasif, 14...Nxe5? 15.fxe5 Nd7 ise bir taş için yetersiz telafi (+1.6). Motor 14...Nd7’yi en iyi görür (−0.1).',
      diger: [
        { move: '14...Ne8', text: 'Pasif; at oyundan çıkar (Motor: +0.5).' },
        { move: '14...Nxe5', text: '15.fxe5 Nd7 ile taş fedası yetersiz (Motor: +1.6).' },
      ],
    },
    '15w': {
      text: '15.g4: şah kanadındaki piyon saldırısı devam eder; g5 ve f5 hazırlanır.',
      amac: 'g5 ile Siyahın şah kanadını sıkıştırmak ve f5 kırılmasını hazırlamak.',
      neden: 'Motor 15.d4!’ü (−0.1) daha iyi buluyor: merkezi destekleyip ...d4’ü engeller ve c5 karesini de kontrol eder. 15.g4 sonrası Siyah 15...d4 veya 15...Nf8 ile serbest oyun alır (Motor: −0.5).',
      diger: [
        { move: '15.d4', text: '15...Rac8 16.Kh2 ile merkez sağlam kalır; ...d4 ve ...c4 fikirleri ortadan kalkar (Motor: −0.1).' },
        { move: '15.Qd2', text: 'Gelişim; 15...Rac8 16.d4 (Motor: −0.2).' },
      ],
    },
    '15b': {
      text: '15...d4: c3 atı kovulur; Siyah vezir kanadında yer kazanır.',
      amac: 'c3 atını merkezden uzaklaştırmak, ...c4 için yol açmak ve uzun çaprazda b7 filini güçlendirmek.',
      neden: 'Plan mantıklıdır ama e4 karesini Beyazın atına verir (16.Ne4). Motor 15...Nf8!’i (−0.5) daha iyi buluyor: at g6’dan f4’e baskı yapar ve d5 piyonu e4’ü kontrol etmeye devam eder. 15...d4 sonrası Motor: +0.1.',
      diger: [
        { move: '15...Nf8', text: '16.Bf2 Ng6 17.Qe1 b4 ile Siyah iki kanatta da oyun alır (Motor: −0.4/−0.5).' },
        { move: '15...Rac8', text: 'c-hattına hazırlık; 16.d4 cxd4 (Motor: −0.3).' },
      ],
    },
    '16w': {
      text: '16.Ne4: at merkezde güçlü bir kareye gelir; d6 ve f6’ya sıçrama fikri taşır.',
      amac: 'Atı Siyahın piyonlarının dokunamayacağı bir merkez karesine yerleştirmek; ileride f6+ veya d6 ile saldırı.',
      neden: 'Motor bunu tek iyi hamle görür (+0.1). 16.Nb1? (−0.8) ve 16.Na2? (−1.5) atı oyundan çıkarır, 16...f6 ile Siyah e5’e saldırır.',
      diger: [
        { move: '16.Nb1', text: '16...f6 17.exf6 Nxf6 ile Siyah merkezde serbest (Motor: −0.8).' },
        { move: '16.Na2', text: 'At kenarda pasif; 16...f6 (Motor: −1.5).' },
      ],
    },
    '16b': {
      text: '16...c4! Siyah d3 piyonuna baskı yapar ve c-hattını açmaya hazırlanır.',
      amac: 'Beyazın piyon zincirinin tabanı d3’e saldırmak. dxc4 olursa d4 piyonu serbest kalır; değişim olmazsa uygun anda ...cxd3 ile c-hattı açılır.',
      neden: 'Merkez kilitlendiği için Siyahın oyunu vezir kanadındadır. Motor 16...Rac8 ile 16...c4’ü eşit görür (0.0 / +0.1); 16...c4 doğrudan hedefe yönelir.',
      diger: [
        { move: '16...Rac8', text: 'Önce kale; 17.N2g3 c4 ile aynı yapı (Motor: 0.0).' },
        { move: '16...Rab8', text: '...b4 hazırlığı (Motor: +0.15).' },
      ],
    },
    '17w': {
      text: '17.N2g3: diğer at g3’e gelir; e4’ü destekler ve h5–f5 karelerine bakar.',
      amac: 'e4 atını güçlendirmek ve şah kanadı saldırısına ikinci atı katmak.',
      neden: '17.dxc4? b5 piyonunu açar ve d4 piyonunu serbest bırakır. Motor 17.Qe1 ve 17.N2g3’ü eşit görür (+0.1); 17.Nxd4 Nxd4 18.Bxd4 Nc5 de denktir.',
      diger: [
        { move: '17.Qe1', text: 'Vezir g3–h4 yoluna (Motor: +0.1).' },
        { move: '17.Nxd4', text: '17...Nxd4 18.Bxd4 Nc5 ile piyon geri gelir (Motor: 0.0).' },
      ],
    },
    '17b': {
      text: '17...Nc5: at c5’e gelir; e4 atına ve d3’e baskı yapar.',
      amac: 'Beyazın güçlü e4 atını değiştirmeye zorlamak ve d3’e baskıyı artırmak.',
      neden: 'Motor 17...b4 ve 17...Rac8’i (0.0) hafif tercih ediyor; 17...Nc5 sonrası +0.35. Ama 18.Nxc5 olursa b7 filinin uzun çaprazı açılacak, Siyahın planı bu.',
      diger: [
        { move: '17...b4', text: '18.Bh2 a5 19.g5 b3 ile vezir kanadında hızlı oyun (Motor: 0.0).' },
        { move: '17...Rac8', text: '18.Qe2 b4 (Motor: 0.0).' },
      ],
    },
    '18w': {
      text: '18.g5: piyon saldırısı ilerler; Siyahın şah kanadında alan kazanılır.',
      amac: 'f6’yı ve h6’yı kontrol edip f5 veya h4–h5 ile saldırıyı sürdürmek.',
      neden: 'Motor 18.Nxc5! Bxc5 19.h4’ü (+0.4) daha iyi buluyor: atı hemen değişmek b7 filinin çaprazını açmadan önce e4’ü g3 atıyla doldurur. 18.g5 sonrası Siyah 18...Na5 ile oyunu dengeler (Motor: −0.2).',
      diger: [
        { move: '18.Nxc5', text: '18...Bxc5 19.h4 Rac8 20.h5 (Motor: +0.4).' },
        { move: '18.Bh2', text: 'Fil e5’i destekler (Motor: +0.25).' },
      ],
    },
    '18b': {
      text: '18...Na5: at b3 karesine yönelir; c4 piyonunu destekler.',
      amac: 'At b3’ten d2 ve c1’e sıçrayabilir; ayrıca c6 karesini boşaltıp b7 filinin çaprazını açar.',
      neden: 'Motor 18...b4 ve 18...Bf8’i hafif tercih ediyor (−0.1); 18...Na5 sonrası 0.0. Fark küçük; Lautier’nin atı oyunun sonunda b3–d2 ile kazandıran rolü oynayacak.',
      diger: [
        { move: '18...b4', text: '19.h4 Bf8 20.Nxc5 Bxc5 (Motor: −0.1).' },
        { move: '18...Bf8', text: '19.Nxc5 Bxc5 20.h4 (Motor: −0.1).' },
      ],
    },
    '19w': {
      text: '19.Nxc5: Beyaz c5 atını alır.',
      amac: 'Siyahın d3’e baskı yapan atını değişmek ve materyal kazanmaya çalışmak (Siyah önce şah çekecek).',
      neden: 'Ama bu e4 karesini boşaltır ve b7 filinin g2’ye uzanan çaprazını açar. Motor 19.Rf2 ve 19.Rc1’i (−0.1) biraz daha iyi buluyor; 19.Nxc5 −0.2. Fark küçük.',
      diger: [
        { move: '19.Rf2', text: '19...cxd3 20.Nxc5 Bxg2+ 21.Rxg2 ile kale g2’de şahı korur (Motor: −0.1).' },
        { move: '19.Rc1', text: 'c-hattına önceden karşı çıkmak (Motor: −0.1).' },
      ],
    },
    '19b': {
      text: '19...Bxg2+! Siyah önce şah çekerek g2 filini alır.',
      amac: 'Beyazın şahını koruyan fili değişmek; g-, h- ve f-piyonları ilerlemiş olduğu için şah açıkta kalacak.',
      neden: 'Ara hamle sırası önemli: 19...Bxc5? 20.Ne4 sonrası Beyazın atı yine e4’e gelir (+0.2), 19...Qxc5 20.Ne4 de benzer (+0.35). 19...Bxg2+ ile Motor: −0.2.',
      diger: [
        { move: '19...Bxc5', text: '20.Ne4 Be7 21.f5 ile Beyaz saldırır (Motor: +0.2).' },
        { move: '19...Qxc5', text: '20.Ne4 ile fil uzun çaprazda bloke olur (Motor: +0.35).' },
      ],
    },
    '20w': {
      text: '20.Kxg2: şahla almak zorunlu.',
      amac: 'Materyali geri almak; şah g2’de f3 ve h3’ü korur.',
      neden: '20.Kh2? Bxf1 ile kale kaybedilir (Motor: −4.3). Tek mantıklı hamle.',
      diger: [
        { move: '20.Kh2', text: '20...Bxf1 ile Siyah kalite kazanır (Motor: −4.3).' },
      ],
    },
    '20b': {
      text: '20...Qxc5: vezir atı geri alır; c-hattında ve c5–g1 çaprazında durur.',
      amac: 'Materyali eşitlemek ve veziri aktif bir kareye getirmek; vezir ileride d5’e geçip e4 karesine baskı yapacak.',
      neden: 'Motor bunu en iyi hamle görür (−0.15). 20...Bxc5 de mümkündü (+0.05), ama vezirin c5’e gelmesi d5’e ve c-hattına geçişi kolaylaştırır.',
      diger: [
        { move: '20...Bxc5', text: '21.h4 Nc6 22.h5 ile Beyaz saldırır (Motor: +0.05).' },
      ],
    },
    '21w': {
      text: '21.Ne4: at yeniden e4’e gelir ve vezire saldırır.',
      amac: 'Merkezdeki en iyi kareyi tekrar almak; d6 ve f6 sıçramaları ile Siyahın şahına yaklaşmak.',
      neden: 'Motor 21.Qf3, 21.h4 ve 21.Ne4’ü eşit görür (−0.1). Ama at e4’te g2 şahıyla aynı çaprazda durduğu için bağlanmaya açık.',
      diger: [
        { move: '21.Qf3', text: 'Önce vezir; uzun çaprazı korur (Motor: −0.1).' },
        { move: '21.h4', text: '21...cxd3 22.cxd3 Qd5+ ile aynı fikir (Motor: −0.1).' },
      ],
    },
    '21b': {
      text: '21...Qd5! Vezir e4 atına saldırır ve onu g2 şahına karşı bağlar.',
      amac: 'Beyazın en iyi taşını hareketsiz bırakmak ve Beyazın vezirini savunmaya bağlamak.',
      neden: 'Motor bunu tek iyi hamle görür (0.0); 21...Qc6 (+0.25) ve 21...Qc7 (+0.45, 22.f5!) pasiftir. Bağlanan at artık d6 veya f6’ya sıçrayamaz.',
      diger: [
        { move: '21...Qc6', text: '22.h4 cxd3 23.cxd3 (Motor: +0.25).' },
        { move: '21...Qc7', text: '22.f5! exf5 23.Rxf5 ile Beyaz saldırır (Motor: +0.45).' },
      ],
    },
    '22w': {
      text: '22.Qf3: vezir e4 atını destekler ve bağlamayı kırar.',
      amac: 'Atı korumak ve uzun çaprazı kapatmak; vezir f3’ten d3’ü de korur.',
      neden: 'Motor en iyi hamle olarak görür (−0.05). Ama vezir artık pasif bir savunma görevine bağlı; Siyah c-hattında rahatça oynayacak.',
      diger: [
        { move: '22.h4', text: '22...cxd3 23.cxd3 Nb3 ile at içeri girer (Motor: −0.25).' },
        { move: '22.Kg3', text: 'Şahı çaprazdan çekmek; 22...cxd3 23.cxd3 Nb3 (Motor: −0.25).' },
      ],
    },
    '22b': {
      text: '22...Rac8: kale c-hattına gelir; c4 piyonunun arkasında durur.',
      amac: 'c-hattı açıldığında kalenin hemen ikinci yataya girmesini sağlamak.',
      neden: 'Motor bunu ve 22...cxd3’ü eşit görür (−0.05). Önce kale getirmek, değişimin zamanlamasını Siyaha bırakır.',
      diger: [
        { move: '22...cxd3', text: '23.cxd3 Rac8 ile aynı yapı (Motor: 0.0).' },
        { move: '22...Rab8', text: '...b4 fikri; 23.Rf2 (Motor: +0.05).' },
      ],
    },
    '23w': {
      text: '23.h4: Beyaz şah kanadında saldırıyı sürdürür; h5–h6 veya g6 hazırlanır.',
      amac: 'h5 ve g6 ile Siyahın şahının önünü açmak.',
      neden: 'Motor 23.Rac1!’i (0.0) daha iyi buluyor: c-hattına karşı çıkıp ...Rc2+’yi önler. 23.h4 sonrası Siyah c-hattını açar ve 24...Rc2+ ile girer (Motor: −0.4).',
      diger: [
        { move: '23.Rac1', text: '23...cxd3 24.cxd3 Nb3 25.Rxc8 ile kaleler değişir ve c-hattı nötrleşir (Motor: 0.0).' },
        { move: '23.Rf2', text: 'İkinci yatayı önceden korumak (Motor: −0.15).' },
      ],
    },
    '23b': {
      text: '23...cxd3: Siyah d3’te değişir; c-hattı açılır.',
      amac: 'c-hattını açıp kaleyi c2’ye sokmak.',
      neden: 'Motor bunu açık farkla en iyi hamle görür (−0.5); 23...Nb7 ve 23...Rc7 +0.2. Zamanlama tam doğru: Beyazın kalesi c-hattına gelmeden açmak.',
      diger: [
        { move: '23...Nb7', text: 'At yeniden c5’e gider ama yavaş (Motor: +0.2).' },
        { move: '23...Rc7', text: 'Kaleleri katlamak; 24.Rad1 (Motor: +0.25).' },
      ],
    },
    '24w': {
      text: '24.cxd3: c-piyonuyla almak gerekir.',
      amac: 'Merkezi korumak; d3 piyonu e4 atını destekler.',
      neden: '24.Qxd3? Nc4 ile at b2’ye saldırır (Motor: −2.5), 24.c3? dxc3 25.bxc3 Nb3 de kötü (−2.6). Tek iyi hamle (Motor: 0.0).',
      diger: [
        { move: '24.Qxd3', text: '24...Nc4 25.Rfc1 Nxb2 ile Siyah piyon kazanır (Motor: −2.5).' },
        { move: '24.c3', text: '24...dxc3 25.bxc3 Nb3 (Motor: −2.6).' },
      ],
    },
    '24b': {
      text: '24...Rc2+! Kale şah çekerek ikinci yataya girer.',
      amac: 'b2’ye ve ikinci yataya baskı; Beyazı savunmaya zorlamak.',
      neden: 'Motor 24...Rc2+ ve 24...Qb3’ü eşit görür (−0.15). Şahla gelmek Beyaza seçim bırakmaz: 25.Rf2 zorunluya yakın.',
      diger: [
        { move: '24...Qb3', text: '25.Rf2 Rc2 26.Re1 Qxb2 ile aynı fikir (Motor: −0.15).' },
        { move: '24...Nb3', text: '25.Rad1 a5 (Motor: −0.1).' },
      ],
    },
    '25w': {
      text: '25.Rf2: kale f2’de araya girer.',
      amac: 'İkinci yatayı korumak ve c2 kalesine karşı çıkmak.',
      neden: '25.Kg3? Rxb2 (−0.75) ve 25.Bf2? Rxb2 (−0.8) piyon kaybettirir. Motor 25.Rf2’yi tek iyi hamle görür (+0.1).',
      diger: [
        { move: '25.Kg3', text: '25...Rxb2 26.Rac1 Bxa3 ile Siyah piyon kazanır (Motor: −0.75).' },
        { move: '25.Bf2', text: '25...Rxb2 26.Rac1 (Motor: −0.8).' },
      ],
    },
    '25b': {
      text: '25...Qb3: vezir b2 ve d3’e saldırır.',
      amac: 'Vezir kanadındaki korumasız piyonları hedef almak; b2 düşerse a3 de zayıf kalır.',
      neden: 'Motor bunu en iyi hamle görür (+0.1); 25...Rdc8 (+0.35) ve 25...Rxf2+ (+0.4) daha pasif.',
      diger: [
        { move: '25...Rdc8', text: '26.Rf1 Rxf2+ 27.Rxf2 Nc6 (Motor: +0.35).' },
        { move: '25...Rxf2+', text: '26.Bxf2 Nb3 27.Rd1 (Motor: +0.4).' },
      ],
    },
    '26w': {
      text: '26.Rxc2: Beyaz kaleleri değişir.',
      amac: 'c2 kalesini ortadan kaldırıp baskıyı azaltmak.',
      neden: 'Motor 26.Re1!’i (0.0) daha iyi buluyor: 26...b4 27.Rxc2 Qxc2+ 28.Re2 ile kale e2’de ikinci yatayı korur. 26.Rxc2 Qxc2+ sonrası Siyahın veziri c2’de çok aktif (Motor: −0.55).',
      diger: [
        { move: '26.Re1', text: '26...b4 27.Rxc2 Qxc2+ 28.Re2 Qb3 29.Ng3 ile Beyaz tutunur (Motor: 0.0).' },
        { move: '26.h5', text: '26...Qxb2 27.f5 ile karşı saldırı (Motor: −0.45).' },
      ],
    },
    '26b': {
      text: '26...Qxc2+: vezir geri alır ve şah çeker.',
      amac: 'Materyali eşitlemek ve veziri ikinci yatayda tutmak.',
      neden: 'Zorunlu: 26...f5? 27.gxf6 (+4.6) ve 26...Nc4? (+5.4) taş kaybettirir. Motor: −0.5.',
      diger: [
        { move: '26...f5', text: '27.gxf6 ile Beyaz saldırıya geçer (Motor: +4.6).' },
      ],
    },
    '27w': {
      text: '27.Bf2: fil f2’ye gelerek şahı keser.',
      amac: 'İkinci yatayı kapatmak ve f2’yi korumak.',
      neden: 'Motor bunu en iyi hamle görür (−0.55). 27.Kg3? Qxb2 (−1.05) ve 27.Kh3? (−1.4) şahı daha açık bırakır.',
      diger: [
        { move: '27.Kg3', text: '27...Qxb2 28.Qd1 Qb3 (Motor: −1.05).' },
        { move: '27.Kh3', text: '27...Qxb2 28.Qd1 (Motor: −1.4).' },
      ],
    },
    '27b': {
      text: '27...Nb3: at b3’e gelir; d2 ve c1 karelerine yönelir.',
      amac: 'Atı oyuna sokmak ve a1 kalesine saldırmak; at ileride d2’den e4 atına saldıracak.',
      neden: 'Motor 27...Qxb2!’yi (−0.55) daha iyi buluyor; 27...Nb3 sonrası 0.0. Beyaz şimdi 28.Re1 ile dengeyi koruyabilirdi.',
      diger: [
        { move: '27...Qxb2', text: '28.Rg1 Qc2 29.Nf6+ Kh8 ile Siyah piyon fazla (Motor: −0.55).' },
        { move: '27...b4', text: '28.Rg1 Nb3 (Motor: 0.0).' },
      ],
    },
    '28w': {
      text: '28.Rh1? Kale h-hattına gelir; h5 hazırlanır.',
      amac: 'h5 ve g6 ile Siyahın şahının önünü açmak.',
      neden: 'Hata: b2 korumasız kalır ve kale merkezden ayrılır. Motor 28.Re1 ve 28.Rg1’i (0.0) çok daha iyi buluyor: 28.Rg1 Qxb2 29.Nf6+! Kh8 30.Qh5 ile g-hattında karşı oyun. 28.Rh1 sonrası Motor: −1.1.',
      diger: [
        { move: '28.Re1', text: '28...Nc1 29.Rd1 b4 ile Beyaz tutunur (Motor: 0.0).' },
        { move: '28.Rg1', text: '28...Qxb2 29.Nf6+ Kh8 30.Qh5 Bxf6 31.gxf6 g6 ile karşı oyun (Motor: −0.05/−0.4).' },
      ],
    },
    '28b': {
      text: '28...Qxb2! Siyah korumasız piyonu alır.',
      amac: 'Materyal kazanmak; vezir b2’den f2 filine ve a3’e de bakar.',
      neden: 'Motor bunu açık farkla en iyi hamle görür (−1.25); 28...Rc8 ve 28...b4 ise 0.0. Siyah, 29.g6 hxg6 30.h5 saldırısının 30...Nd2 ile karşılanabileceğini hesapladı.',
      diger: [
        { move: '28...Nc5', text: '29.Nxc5 Qxc5 30.f5 ile Beyaz karşı oyun alır (Motor: −0.1).' },
        { move: '28...b4', text: '29.axb4 Nc1 (Motor: 0.0).' },
      ],
    },
    '29w': {
      text: '29.g6: Beyaz şahın önünü açmaya çalışır.',
      amac: 'g6 ile f7 ve h7’ye baskı; h5 ile h-hattını açmak.',
      neden: 'Motor 29.f5 ve 29.h5’i biraz daha iyi buluyor (−1.15 / −1.25); 29.g6 −1.4. Beyaz zaten bir piyon eksik, saldırmaktan başka şansı yok.',
      diger: [
        { move: '29.f5', text: '29...Nd2 30.Nxd2 Qxd2 31.f6 (Motor: −1.15).' },
        { move: '29.h5', text: '29...Nd2 30.Nxd2 Qxd2 31.g6 (Motor: −1.25).' },
      ],
    },
    '29b': {
      text: '29...hxg6: Siyah h-piyonuyla alır.',
      amac: 'f7 piyonunu yerinde tutmak; e6’yı ve g6’yı korumak.',
      neden: 'Motor bunu tek iyi hamle görür (−1.2); 29...fxg6 ve 29...Rf8 yalnızca 0.0. hxg6 sonrası Beyazın h-hattı açılır ama Siyahın 30...Nd2 için zamanı vardır.',
      diger: [
        { move: '29...fxg6', text: '30.Qg4 Kf7 31.h5 ile Beyaz karşı oyun (Motor: 0.0).' },
        { move: '29...Rf8', text: '30.f5 fxg6 31.f6 (Motor: 0.0).' },
      ],
    },
    '30w': {
      text: '30.h5: Beyaz h-hattını açmaya çalışır.',
      amac: 'hxg6 ile h-hattını açıp kaleyle Siyahın şahına saldırmak.',
      neden: 'Motor bunu tek iyi hamle görür (−1.35); 30.Rd1 (−2.45) ve 30.Qd1 (−2.7) çok yavaş.',
      diger: [
        { move: '30.Rd1', text: '30...Qxa3 31.h5 Nc5 (Motor: −2.45).' },
        { move: '30.Qd1', text: '30...Rc8 ile Siyahın kalesi c-hattına girer (Motor: −2.7).' },
      ],
    },
    '30b': {
      text: '30...Nd2! At e4 atına saldırır.',
      amac: 'Beyazın saldırısının ana taşını değiştirmek; değişimden sonra vezir d2’ye gelecek.',
      neden: 'Motor bunu açık farkla en iyi hamle görür (−1.2); 30...Qa2 (0.0) ve 30...Qc2? (+0.9) pasif. Beyazın saldırısı e4 atına dayanıyordu.',
      diger: [
        { move: '30...Qa2', text: '31.hxg6 fxg6 32.Qg4 Nc5 (Motor: 0.0).' },
        { move: '30...Qc2', text: '31.hxg6 fxg6 32.Rh3 Kf7 ile Beyaz saldırır (Motor: +0.9).' },
      ],
    },
    '31w': {
      text: '31.Nxd2: Beyaz atları değişir.',
      amac: 'Materyali korumak; başka yol yok.',
      neden: 'Motor bunu en iyi hamle görür (−1.35). 31.Qe2? Nc4 (−3.0) ve 31.Qd1? (−3.75) daha kötü.',
      diger: [
        { move: '31.Qe2', text: '31...Nc4 32.Qe1 Ne3+ (Motor: −3.0).' },
        { move: '31.Qd1', text: '31...Nxe4 32.dxe4 (Motor: −3.75).' },
      ],
    },
    '31b': {
      text: '31...Qxd2: vezirle almak zorunlu.',
      amac: 'Materyali geri almak; vezir d2’den f2 filine ve d3’e baskı yapar.',
      neden: 'Tek hamle: 31...Qxa3? 32.Ne4 (+3.9) ve 31...Rc8? (+4.1) taş kaybettirir.',
      diger: [
        { move: '31...Qxa3', text: '32.Ne4 ile at geri gelir (Motor: +3.9).' },
      ],
    },
    '32w': {
      text: '32.hxg6: Beyaz g6’da alır.',
      amac: 'h-hattını açmak ve g6 piyonuyla f7’ye baskı yapmak.',
      neden: 'Motor 32.Qb7’yi (−1.4) hafif tercih ediyor; 32.hxg6 −1.8. Fark küçük.',
      diger: [
        { move: '32.Qb7', text: '32...Bxa3 33.hxg6 Rf8 (Motor: −1.4).' },
        { move: '32.Rd1', text: '32...Qc2 (Motor: −2.7).' },
      ],
    },
    '32b': {
      text: '32...fxg6: f-piyonuyla almak zorunlu; şahın önü kapanır.',
      amac: 'Materyali geri almak ve şahı korumak.',
      neden: 'Zorunlu: 32...Bxa3? 33.Qh5 (+5.1) ve 32...Bg5? (+5.1) mat tehdidine yol açar. Siyah iki piyon fazla (Motor: −1.85).',
      diger: [
        { move: '32...Bxa3', text: '33.Qh5 fxg6 34.Qh8+ Kf7 ile Beyaz saldırır (Motor: +5.1).' },
      ],
    },
    '33w': {
      text: '33.Rd1: kale vezire saldırır.',
      amac: 'Siyahın vezirini d2’den kovmak ve d3’ü korumak.',
      neden: 'Motor 33.Qg4!’ü (−2.0) daha iyi buluyor: 33...Rf8 34.Qxe6+ Rf7 35.Qxg6 ile Beyaz bir piyonu geri alır. 33.Rd1 sonrası −3.0.',
      diger: [
        { move: '33.Qg4', text: '33...Rf8 34.Qxe6+ Rf7 35.Qxg6 ile piyon geri gelir (Motor: −2.0).' },
        { move: '33.Qb7', text: '33...Kf7 34.Rh7 Re8 (Motor: −2.55).' },
      ],
    },
    '33b': {
      text: '33...Qc2: vezir c2’den d3 ve f2’ye bakar.',
      amac: 'Veziri aktif tutmak ve Beyazın piyonlarına baskı yapmak.',
      neden: 'Motor bunu en iyi hamle görür (−3.2). 33...Qa2 (−2.9) da iyi.',
      diger: [
        { move: '33...Qa2', text: '34.Kh3 Rf8 (Motor: −2.9).' },
        { move: '33...Qc3', text: '34.Qb7 Bxa3 (Motor: −2.6).' },
      ],
    },
    '34w': {
      text: '34.Kh3: şah h3’e gider.',
      amac: 'Şahı ikinci yataydan çıkarıp vezir şahlarından kurtarmak; g4 karesine ilerleme.',
      neden: 'Motor 34.Rg1 ve 34.Rh1’i (−3.4) eşit görüyor; 34.Kh3 sonrası −3.5. Beyaz zaten zor durumda.',
      diger: [
        { move: '34.Rg1', text: '34...Rf8 35.Qg4 Qa2 (Motor: −3.4).' },
        { move: '34.Rh1', text: '34...Rc8 35.Qh3 Qc6+ (Motor: −3.4).' },
      ],
    },
    '34b': {
      text: '34...Kf7: şah f7’de g6 ve e6’yı korur.',
      amac: 'Şahı güvenceye almak ve kaleyi h-hattına hazırlamak.',
      neden: 'Motor 34...g5’i (−3.3) hafif tercih ediyor; 34...Kf7 −2.9. Fark küçük.',
      diger: [
        { move: '34...g5', text: '35.Bg3 Rf8 36.Rf1 Bxa3 (Motor: −3.3).' },
        { move: '34...Rf8', text: '35.Rf1 g5 (Motor: −3.1).' },
      ],
    },
    '35w': {
      text: '35.Kg4: şah g4’e ilerler.',
      amac: 'Şahı aktif tutmak ve f5 kırılmasını hazırlamak.',
      neden: 'Motor 35.Kg3’ü (−3.0) hafif tercih ediyor; 35.Kg4 −3.2. Şahın g4’te olması ileride ...Qe2+ ile şah çekmelerine açık.',
      diger: [
        { move: '35.Kg3', text: '35...Rh8 36.Kg2 (Motor: −3.0).' },
        { move: '35.Rf1', text: '35...Qc3 36.Kg4 (Motor: −3.1).' },
      ],
    },
    '35b': {
      text: '35...Rh8: kale h-hattına gelir.',
      amac: 'h-hattını ele geçirmek ve Beyazın şahına baskı yapmak.',
      neden: 'Motor bunu en iyi hamle görür (−3.5).',
      diger: [
        { move: '35...Rc8', text: '36.Bxd4 Rh8 (Motor: −3.0).' },
        { move: '35...Rd5', text: '36.Rh1 a5 (Motor: −2.45).' },
      ],
    },
    '36w': {
      text: '36.Bg3: fil g3’e gelir.',
      amac: 'h-hattını korumak ve şahın çevresini güçlendirmek.',
      neden: 'Motor bunu en iyi hamle görür (−3.3).',
      diger: [
        { move: '36.Rf1', text: '36...Qb2 37.Kg3 (Motor: −3.35).' },
        { move: '36.Bg1', text: '36...a5 37.Qf1 Bxa3 (Motor: −3.5).' },
      ],
    },
    '36b': {
      text: '36...a5: Siyahın vezir kanadı piyonları ilerlemeye hazır.',
      amac: 'a- ve b-piyonlarını ilerletmek; bağlantılı geçer piyonlar oluşturmak.',
      neden: 'Motor 36...Qc3, 36...Rc8 ve 36...a5’i eşit görür (−3.3).',
      diger: [
        { move: '36...Qc3', text: '37.Qf1 Bxa3 (Motor: −3.4).' },
        { move: '36...Rc8', text: '37.a4 bxa4 (Motor: −3.35).' },
      ],
    },
    '37w': {
      text: '37.Qf1: vezir f1’e gelir.',
      amac: 'Veziri savunmaya getirmek ve a3’ü korumak.',
      neden: 'Motor 37.Re1’i (−3.4) hafif tercih ediyor; 37.Qf1 −3.65.',
      diger: [
        { move: '37.Re1', text: '37...Bxa3 38.Bh4 Qc8 (Motor: −3.4).' },
        { move: '37.Rg1', text: '37...Bxa3 38.Rg2 (Motor: −3.4).' },
      ],
    },
    '37b': {
      text: '37...Rc8: kale c-hattına döner.',
      amac: 'c-hattını ele geçirmek ve ikinci yataya girmek.',
      neden: 'Motor bunu en iyi hamle görür (−3.7).',
      diger: [
        { move: '37...Bxa3', text: '38.Ra1 b4 (Motor: −3.55).' },
        { move: '37...Qc8', text: '38.Rb1 b4 (Motor: −2.8).' },
      ],
    },
    '38w': {
      text: '38.Qh1? Vezir h1’e gider.',
      amac: 'h-hattından Siyahın şahına saldırmak.',
      neden: 'Ama e2 karesi savunmasız kalır: 38...Qe2+ vezir değişimini zorlar. Motor 38.Qf3’ü (−3.9) daha iyi buluyor; 38.Qh1 sonrası −4.3.',
      diger: [
        { move: '38.Qf3', text: '38...Bxa3 39.Ra1 Bb4 (Motor: −3.9).' },
        { move: '38.Ra1', text: '38...Rc3 39.Rd1 (Motor: −4.3).' },
      ],
    },
    '38b': {
      text: '38...Qe2+! Siyah vezir değişimini zorlar.',
      amac: 'Vezirleri değiştirip piyon fazlasıyla oyun sonuna geçmek.',
      neden: 'Motor bunu en iyi hamle görür (−4.7). Vezirsiz oyun sonunda Beyazın saldırı şansı kalmaz.',
      diger: [
        { move: '38...Bxa3', text: '39.Bh4 Qe2+ (Motor: −4.45).' },
        { move: '38...a4', text: '39.Qf3 Bxa3 (Motor: −4.25).' },
      ],
    },
    '39w': {
      text: '39.Qf3: zorunlu.',
      amac: 'Şahı korumak.',
      neden: 'Diğer tek yasal hamle 39.Kh3, Qh5+ ile mata gider (Motor: 7 hamlede mat).',
      diger: [
        { move: '39.Kh3', text: '39...Qh5+ 40.Kg2 Rc2+ ile mat (Motor: #-7).' },
      ],
    },
    '39b': {
      text: '39...Qxf3+: vezirler değişir.',
      amac: 'Vezirsiz oyun sonuna geçmek.',
      neden: 'Motor bunu en iyi hamle görür (−5.0). 39...Qc2 (−3.4) daha az net.',
      diger: [
        { move: '39...Qc2', text: '40.Bf2 Bxa3 (Motor: −3.4).' },
      ],
    },
    '40w': {
      text: '40.Kxf3: şahla almak zorunlu.',
      amac: 'Materyali geri almak.',
      neden: '40.Kh3? Rh8# ile mat (Motor: #-1).',
      diger: [
        { move: '40.Kh3', text: '40...Rh8# (Motor: mat).' },
      ],
    },
    '40b': {
      text: '40...Bxa3: fil a3 piyonunu alır. Siyah üç piyon fazla; a- ve b-piyonları ilerlemeye hazır. Beyaz terk etti.',
      amac: 'Bağlantılı geçer piyonlar oluşturmak ve oyunu bitirmek.',
      neden: 'Motor bunu en iyi hamle görür (−4.9). Beyazın kalesi ve fili a–b piyonlarını durduramaz.',
      diger: [
        { move: '40...Rc3', text: '41.a4 bxa4 (Motor: −3.6).' },
        { move: '40...a4', text: '41.Rb1 Rc3 (Motor: −2.8).' },
      ],
    },
  },
  exercises: [
    { id: 'rla-1', kind: 'tekrar', plan: false, title: 'Vezir kanadındaki piyon',
      source: 'Romero Holmes – Lautier, Salamanca 1998 (28. hamle)',
      fen: '3r2k1/4bppp/p3p3/1p2P1P1/3pNP1P/Pn1P1Q2/1Pq2BK1/7R b - - 3 28',
      prompt: 'Siyahın veziri c2’de, atı b3’te. Beyaz kalesini h1’e getirdi ve h5–g6 ile şah kanadında saldırmaya hazırlanıyor. Siyah ne yapmalı?',
      hint: 'Beyazın vezir kanadında korunmayan bir piyon var.',
      line: ['Qxb2'],
      explanation: '**28...Qxb2!** Vezir korumasız b2 piyonunu alır ve f2 filine baskıyı sürdürür. Beyazın saldırısı Siyahın şahına ulaşmadan Siyah bir piyon fazla olur. Motor: ...Qxb2 −1.1, sonraki en iyi 28...Nc1 0.0.',
      link: 'Lautier c-hattını açıp veziri ikinci yataya getirmişti; şimdi bu yatayda piyon topluyor.' },
    { id: 'rla-2', kind: 'tekrar', plan: false, title: 'At d2’ye',
      source: 'Romero Holmes – Lautier, Salamanca 1998 (30. hamle)',
      fen: '3r2k1/4bpp1/p3p1p1/1p2P2P/3pNP2/Pn1P1Q2/1q3BK1/7R b - - 0 30',
      prompt: 'Beyaz g6 ve h5 ile Siyahın şahının önünü açmaya çalışıyor. Siyahın b3 atı oyunun dışında kalmış görünüyor. Siyah nasıl devam etmeli?',
      hint: 'At, Beyazın en iyi savunma taşına saldırabilir.',
      line: ['Nd2', 'Nxd2', 'Qxd2'],
      explanation: '**30...Nd2! 31.Nxd2 Qxd2** At e4 atına saldırır ve değişimden sonra Siyahın veziri d2’den d3 ve f2’ye baskı yapar. Motor: ...Nd2 −1.3, sonraki en iyi 30...Qa2 0.0; 30...Qc2? 31.hxg6 sonrası +1.0.',
      link: 'Siyah, Beyazın saldırısına şah kanadında cevap vermek yerine taşları değişip vezir kanadındaki üstünlüğünü kullandı.' },
    { id: 'rla-3', kind: 'transfer', plan: false, title: 'c4 piyonu d3’ü kırıyor',
      source: 'Seirawan – Andersson, Amerika – Avrupa maçı, Mar del Plata 1981 (18. hamle)',
      fen: '2r2rk1/pb1qnp1p/1p2p1p1/1N6/2p1PP2/P2P2P1/2P2QBP/1R3RK1 b - - 0 18',
      prompt: 'Kapalı Sicilya: Beyazda g3, Bg2, f4, e4 ve d3; Siyahın piyonu c4’e kadar ilerlemiş ve d3’e dayanıyor. Siyahın kalesi c8’de, fili b7’de. Siyah nasıl devam etmeli?',
      hint: 'c4 piyonu d3’ü alırsa hangi hat açılır ve Beyazın hangi piyonu zayıf kalır?',
      line: ['cxd3'],
      explanation: '**18...cxd3!** Siyah d3 piyonunu kırar. 19.cxd3 sonrası c-hattı Siyahın kalelerine açılır ve d3 piyonu tek başına kalıp hem d-hattından hem ...Rc5–...Qxd3 ile saldırı hedefi olur. Beyaz geri almazsa d3 piyonu çok güçlenir (19.c3 −3.4; 19.Rfc1 d2 −3.5). Oyunda 19.cxd3 Ba6 20.a4 Rc5 ile Siyah baskı kurdu. Motor (derinlik 24): ...cxd3 −1.4, sonraki en iyi 18...a6 −0.5.',
      link: 'Lautier ...c4 ve 23...cxd3 ile d3 piyonunu kırıp c-hattını açtı ve 24...Rc2+ ile içeri girdi; Andersson da aynı Kapalı Sicilya yapısında c4 piyonuyla d3’ü alıp c-hattını açtı ve d3’ü zayıf bıraktı.' },
    { id: 'rla-4', kind: 'transfer', plan: false, title: 'd3 piyonunu almak',
      source: 'Woloch – Wojtaszek, Dziedzic Anma Turnuvası, Trzcianka 2015 (21. hamle)',
      fen: '2rq2k1/3nb1pp/b2pp3/p3n1P1/1p2PB2/3P1N1P/PP4B1/3RQR1K b - - 0 21',
      prompt: 'Aynı yapıdan bir oyun: Beyaz f4–f5 ve g5 ile şah kanadında saldırdı. Siyahın fili a6’da, atı e5’te. Beyazın f4 fili e5 atına saldırıyor.',
      hint: 'd3 piyonuna kaç Siyah taşı saldırıyor? Alırsanız at nereye bakar?',
      line: ['Nxd3'],
      explanation: '**21...Nxd3!** At piyonu alır ve e1 vezirine ve f4 filine saldırır; 22.Rxd3 Bxd3 Siyaha kale kazandırır. Motor: ...Nxd3 −1.4, sonraki en iyi 21...b3 +0.9.',
      link: 'Lautier de Beyaz şah kanadında saldırırken vezir kanadındaki zayıf piyonları (d3, b2) hedef aldı; Wojtaszek aynı d3 zayıflığını at ve filin birlikte baskısıyla cezalandırdı.' },
  ],
  sources: [
    { title: 'OlimpBase: 42. İspanya Takımlar Şampiyonası, Salamanca 1998 – CA La Caja de Canarias (Lautier’nin sonuçları)', url: 'https://olimpbase.org/1998es/1998canr.html' },
    { title: 'OlimpBase: 42nd Spanish Team Chess Championship, Salamanca 1998', url: 'https://www.olimpbase.org/1998es/1998in.html' },
    { title: 'Exeter Chess Club: The Closed Sicilian', url: 'https://exeterchessclub.org.uk/content/closed-sicilian' },
    { title: 'ChessBio: Closed Sicilian – Concept, Plans, and Tactics', url: 'https://chessbio.com/term/closed_sicilian' },
  ],
};
