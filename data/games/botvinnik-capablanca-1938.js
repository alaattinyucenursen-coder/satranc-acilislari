// Botvinnik – Capablanca, AVRO turnuvası, Hollanda 1938. Kaynak: PgnMentor (Capablanca.pgn).
export default {
  id: 'botvinnik-capablanca-1938',
  theme: 'İkiye katlanmış piyonlar ve e4 ilerleyişi',
  white: 'Mihail Botvinnik', black: 'José Raúl Capablanca',
  whiteShort: 'Botvinnik', blackShort: 'Capablanca',
  event: 'AVRO turnuvası', site: 'Rotterdam', year: 1938, eco: 'E49',
  variation: 'Nimzo-Hint Savunması, Rubinstein (4.e3) sistemi, Botvinnik kuruluşu', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 exd5 8. Bd3 O-O 9. Ne2 b6 10. O-O Ba6 11. Bxa6 Nxa6 12. Bb2 Qd7 13. a4 Rfe8 14. Qd3 c4 15. Qc2 Nb8 16. Rae1 Nc6 17. Ng3 Na5 18. f3 Nb3 19. e4 Qxa4 20. e5 Nd7 21. Qf2 g6 22. f4 f5 23. exf6 Nxf6 24. f5 Rxe1 25. Rxe1 Re8 26. Re6 Rxe6 27. fxe6 Kg7 28. Qf4 Qe8 29. Qe5 Qe7 30. Ba3 Qxa3 31. Nh5+ gxh5 32. Qg5+ Kf8 33. Qxf6+ Kg8 34. e7 Qc1+ 35. Kf2 Qc2+ 36. Kg3 Qd3+ 37. Kh4 Qe4+ 38. Kxh5 Qe2+ 39. Kh4 Qe4+ 40. g4 Qe1+ 41. Kh5 1-0`,

  summary: 'AVRO turnuvasının 11. turunda (22 Kasım 1938, Rotterdam) 27 yaşındaki Botvinnik, eski dünya şampiyonu Capablanca’yı satranç tarihinin en ünlü kombinasyonlarından biriyle yendi. Kasparov bu oyunu Botvinnik’in “hayatının oyunu” diye anar. Nimzo-Hint’in 4.e3 sisteminde Beyaz 5.a3 ile c3’te **ikiye katlanmış piyonları** kabul etti, karşılığında fil çifti ve sağlam bir merkez aldı. Capablanca 11...Nxa6 ile Beyazın iyi filini değişti, 14...c4 ile vezir kanadını kapattı ve atını **a6-b8-c6-a5-b3** yolundan geçirerek a4 piyonunu kazandı. Motor 14...c4’ü o anda kabul edilebilir buluyor; asıl kayıp 17...Na5 ile geldi: at merkezden uzaklaşınca Botvinnik **f3, e4, e5, f4, f5** ile bütün merkez ve şah kanadı piyonlarını yürüttü. Kale değişimleriyle f-piyonu e6’ya ulaştı ve geçer piyon oldu. 29...Qe7? hatasından sonra **30.Ba3!! Qxa3 31.Nh5+! gxh5 32.Qg5+ Kf8 33.Qxf6+** ile iki taş feda edildi; e-piyonu e7’ye geldi, Beyaz şahı h5’e kadar yürüyerek sürekli şahtan kurtuldu ve Capablanca 41.Kh5’ten sonra terk etti.',
  intro: 'Nimzo-Hint Savunması (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4) Siyahın e4 karesini taşlarla kontrol ettiği, gerekirse c3 atını alıp Beyaza ikiye katlanmış piyon bıraktığı bir açılıştır. 4.e3 ile oynanan Rubinstein sistemi en sağlam cevaptır: Beyaz önce gelişir, planını sonra seçer. 4...d5 5.a3 ile Beyaz, Siyahı hemen karar vermeye zorlar: 5...Bxc3+ 6.bxc3 sonrası Sämisch’e benzer bir yapı doğar. Beyazın planı açıktır: cxd5 ile c-piyonlarından birini değiştirip ikiye katlanmışlığı hafifletmek, Bd3, **Ne2** (Nf3 değil, f-piyonu serbest kalsın diye), f3 ve **e4** ile merkezi açıp fil çiftini oyuna sokmak. Siyahın planı ise tersidir: Beyazın beyaz kareli filini ...b6/...Ba6 ile değişmek, e4 karesini tutmak ve c3/a4 gibi vezir kanadı zayıflıklarına yüklenmek. Bu oyun, iki planın çarpışmasının ders kitabı örneğidir: Capablanca vezir kanadında piyon kazandı, Botvinnik ise merkezde ve şah kanadında zaman kazandı, ve zaman daha değerli çıktı.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'İkiye katlanmış c-piyonlarının karşılığını **merkezde** almak: 7.cxd5 ile bir c-piyonunu değiştirmek ve d4’ü c3 ile sağlamlaştırmak.',
      'Atı **Ne2-g3** yolundan geliştirmek; at f3’e gitmediği için f-piyonu serbest kalır ve f3-e4 ilerleyişi mümkün olur (Sadler bu ayrıntının önemini özellikle vurgular).',
      'e4 kırılmasını adım adım hazırlamak: Rae1, Ng3, f3. Siyah ...c4 ile vezir kanadını kapatınca d4’e baskı kalmaz ve Beyaz bütün dikkatini merkeze verebilir.',
      'Vezir kanadındaki zayıflıkları (a4, c3) gerekirse **feda etmek**: 19.e4! ile a4 piyonu bırakıldı, kazanılan tempolar e5 ve f4-f5’e harcandı.',
      'e5 ile f6 atını kovup Siyahın şah kanadından en iyi savunucuyu uzaklaştırmak, sonra **f4-f5** ile hatları açmak.',
      'e-hattında kaleleri değişip f-piyonunu e6’ya taşımak: e6’daki **geçer piyon** Siyahın taşlarını sürekli savunmaya bağlar.',
      'Taşları geçer piyonun etrafında toplamak (Qe5, Ng3, Bb2-a3) ve onu durduran taşları saptıracak taktik anı beklemek: 30.Ba3!! ve 31.Nh5+!.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...c5 ile d4’e baskı yapmak ve ...b6/...Ba6 ile Beyazın **iyi beyaz kareli filini** değişmek; böylece Beyazın şaha saldırı potansiyeli azalır.',
      '...c4 ile c3 piyonunu sabitlemek, b2 filini kapatmak ve vezir kanadında alan kazanmak (Sadler’e göre bu hamle tek başına felaket değildi).',
      'Atı **a6-b8-c6-a5-b3** yolundan b3 karesine yerleştirmek ve a4 piyonunu kazanmak; b3’teki at c1, d2 ve a1 karelerini de kontrol eder.',
      'e4 karesini taşlarla tutmak: en iyi yol 17...Ne4 idi (Motor: +0.2); maç hamlesi 17...Na5 merkezi Beyaza bıraktı.',
      'Beyaz e5’e gelince ...g6 ve ...f5 ile şah kanadını kapatmaya çalışmak, f-hattının açılmasını geciktirmek.',
      'Geçer piyon doğduktan sonra **e7 ve e8 karelerini** vezirle tıkamak; vezirleri tahtada tutup karşı oyun (sürekli şah) şansını korumak.',
      'Kritik anda şaha nefes alanı açmak: 29...h5 veya 29...h6 ile Nh5+ fikrini önlemek (Motor: yaklaşık +1.6 / +2.0), 29...Qe7? gibi taktiğe izin veren hamlelerden kaçınmak.',
    ] },
  },
  critical: [
    { move: '9w', title: '9.Ne2: f-piyonunu serbest bırakan gelişim', text: 'Botvinnik atını f3 yerine e2’ye geliştirdi. Böylece f-piyonunun önü açık kaldı: f3 ile e4 karesi desteklenecek, sonra e4 ile merkez açılacaktı. Matthew Sadler bu ayrıntıyı oyunun planının temeli sayar. Motor da farkı gösteriyor: 9.Ne2 +0.3, 9.Nf3 ise 9...c4 10.Bc2 Ne4 ile Siyaha rahat bir oyun veriyor (Motor: −0.7). At g3’e giderek e4 karesine bir kez daha bakacaktı.' },
    { move: '14b', title: '14...c4: vezir kanadını kapatmak', text: '14.Qd3 a6 atını tehdit ediyordu (Qxa6). Capablanca tempo kazanarak 14...c4 ile cevap verdi; c3 piyonu sabitlendi, b2 filinin çaprazı kapandı. Kasparov bu hamleyi ciddi bir konumsal hata sayar: d4’e baskı kalmaz ve Beyaz f3-e4’ü rahatça hazırlar. Botvinnik daha sonra 14...Qb7’yi önerdi. İlginç olan, motorun 14...c4’ü o an en iyi hamle göstermesi (Motor: −0.3; 14...Qb7 0.0). Yani hamle tek başına kaybettirmez; kaybettiren, bundan sonra merkezi ihmal eden plan oldu.' },
    { move: '17b', title: '17...Na5?: at merkezden uzaklaşıyor', text: 'Motor oyunun gerçek dönüm noktasını burada görüyor. 17...Ne4! ile at e4 karesini taşla tıkıyor, Beyazın f3-e4 planını kesiyordu (Motor: +0.2). Capablanca ise b3 karesine ve a4 piyonuna yöneldi. 18.f3 sonrası değerlendirme bir anda +1.7’ye çıkıyor: Siyahın atları vezir kanadında, Beyazın piyonları ise merkezde yürümeye hazır.' },
    { move: '19w', title: '19.e4!: piyonu umursamamak', text: 'Botvinnik a4 piyonunu korumadı. 19...Qxa4 20.e5 Nd7 ile f6 atı şah kanadından kovuldu, Beyazın f-piyonu ilerlemeye hazır hale geldi. Siyahın veziri a4’te, savunması gereken şahtan çok uzakta. Motor 19.e4’ü en iyi hamle görüyor (+1.7); 19.Re2 ile piyonu tutmak avantajı +1.0’a düşürürdü. Merkezi açmak bir piyondan daha değerliydi.' },
    { move: '24w', title: '24.f5!: piyon e6’ya yürüyor', text: '23.exf6 Nxf6 ile f-hattı açıldı, ardından 24.f5! geldi. Piyon g6’ya saldırır; 24...Rxe1 25.Rxe1 Re8 26.Re6! Rxe6 27.fxe6 ile e6’ya ulaşır ve Siyahın kampını ikiye bölen korunaklı bir geçer piyon olur. Motor: 24.f5 +1.9; en yakın alternatif 24.h3 yalnızca +0.3. Sadler, Capablanca’nın 25...Re8 ile kurnaz bir savunma bulduğunu yazar, ama e6 piyonu artık kalıcıdır.' },
    { move: '29b', title: '29...Qe7?: kombinasyona izin veren hata', text: 'Önce Beyaz da tam doğru oynamadı: 29.Qe5 yerine 29.Qc7+! Kg8 30.Qe5 ile şahı g8’e itip bir tempo kazanmak daha güçlüydü (Motor: +3.0, Qe5 ise +1.6; Kavalek bu düzeltmeyi Richard Cantwell’e, onaylamayı Kasparov’a bağlar). Ama Capablanca 29...Qe7? ile vezirini hem e-piyonunu durduran hem de f6 atını koruyan tek taş yaptı. Doğrusu şaha kaçış karesi açan 29...h5 (Motor: +1.6) veya 29...h6 (+2.0) idi. Maç hamlesinden sonra değerlendirme +4.4.' },
    { move: '30w', title: '30.Ba3!!: vezirin saptırılması', text: 'Fil vezirin önüne kendini atar. 30...Qxa3 ile vezir e7’den ayrılır ve 31.Nh5+! gxh5 32.Qg5+ Kf8 33.Qxf6+ ile f6 atı şahla alınır; e-piyonu e7’ye yürür. Fili almamak da kurtarmaz: 30...Qe8 31.Qc7+ Kh8 32.Be7 (Motor: +4.7), 30...Nc5 31.dxc5 bxc5 (+5.3). Botvinnik, Edward Winter’ın aktardığı kendi notlarında kombinasyonu sonuna kadar hesaplayamadığını, birkaç hamle sonrasını değerlendirip en azından sürekli şahın garanti olduğunu görerek oynadığını yazar.' },
    { move: '37w', title: '37.Kh4: şah saldırıya katılıyor', text: 'Kombinasyonun ikinci zor kısmı şah çekmelerden kaçmaktı. Beyaz şahı f2-g3-h4-h5 yolunu izleyerek h5 piyonunu yedi ve sonunda 40.g4 ile 41.Kh5’te şah çekmelere son verdi. Yanlış kareler hemen beraberlik verirdi: 37.Kf4? Qe4+ 38.Kg5 Qxg2+ ya da 38.Kg5? Qxg2+ ile Siyah sürekli şah bulur (Motor: 0.00). Doğru yolda motor mat gösteriyor.' },
  ],
  lessons: [
    'İkiye katlanmış piyonlara sahip taraf **merkezde hızlı oynamalıdır**. Botvinnik’in bütün oyunu e4 ilerleyişi üzerine kuruluydu; vezir kanadındaki a4 piyonunu gönül rahatlığıyla bıraktı.',
    'Gelişim düzeni plana göre seçilir: 9.Ne2 (Nf3 değil) f-piyonunu serbest bıraktı ve f3-e4 planını mümkün kıldı. Bir atın karesi bütün piyon yapısının geleceğini belirleyebilir.',
    'Rakip vezir kanadını kapattığında (...c4) merkezdeki baskısı da kaybolur. Bu durumda merkez kırılmasını (e4) **taşla tıkamak** zorunludur; 17...Ne4 yerine 17...Na5 bunu ihmal etti.',
    'Kenarda piyon kazanmak için atlarını ve vezirini vezir kanadına gönderen taraf, merkezi ve şahını savunmasız bırakır. a4 piyonu Capablanca’ya oyunu kaybettirdi.',
    'Geçer piyon, değişimlerle yaratılabilir: e-hattında kaleler değişince f-piyonu e6’ya geldi. Korunaklı, ileri bir geçer piyon rakip taşları kalıcı olarak bağlar.',
    'Geçer piyonun önünü tutan taşı **saptırmak** (30.Ba3!!) ve o taşın koruduğu başka bir taşı yok etmek (31.Nh5+!) klasik bir kombinasyon desenidir: “bir taş, iki görev” durumu aranır.',
    'Sürekli şahtan kaçarken şahın gideceği yolu önceden hesaplayın; piyonlarınız (40.g4) şaha siper olabilir. Bir kare yanlışlık (37.Kf4?) bütün kombinasyonu beraberliğe çevirebilirdi.',
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkezi alır ve vezir piyonu açılışlarını seçer.',
      amac: 'd4 piyonuyla e5 ve c5 karelerini kontrol etmek, ardından c4 ile merkeze ikinci bir piyonla baskı yapmak.',
      neden: 'Botvinnik kariyeri boyunca d4 açılışlarının, özellikle Nimzo-Hint’e karşı 4.e3 ve a3 kuruluşlarının uzmanıydı. Bu yapılarda merkezi plan ve uzun vadeli strateji onun tarzına çok uygundu.',
      diger: [
        { move: '1.e4', text: 'Motorun hafif tercihi (Motor: +0.4), ama Capablanca açık oyunlarda son derece tecrübeliydi ve Botvinnik kendi bildiği kapalı yapıları seçti.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); genellikle d4 ve c4 ile aynı yapılara döner.' },
      ],
    },
    '1b': {
      text: '1...Nf6 ile Siyah Hint savunmalarının kapısını açar.',
      amac: 'e4 karesini kontrol etmek ve piyonla merkeze erken bağlanmadan Beyazın kuruluşunu görmek.',
      neden: '1...d5 klasik Vezir Gambiti’ne götürür; 1...Nf6 ise Nimzo-Hint, Vezir-Hint ve Kral-Hint gibi daha esnek seçenekleri açık tutar. 1930’larda Nimzo-Hint, en güçlü oyuncuların gözde savunmalarından biri olmuştu.',
      diger: [
        { move: '1...d5', text: 'Klasik cevap (Motor: +0.35); Capablanca Vezir Gambiti’nin Ortodoks savunmasını da çok iyi bilirdi.' },
        { move: '1...c6', text: 'Slav yapısına hazırlık (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: '2.c4 ile Beyaz d5 karesine ikinci kez baskı yapar.',
      amac: 'Merkezde alan kazanmak ve Nc3 ile e4 ilerleyişini hazırlamak.',
      neden: 'c4, vezir piyonu açılışlarının ana hamlesidir. Siyah ...d5 oynarsa Vezir Gambiti, ...e6 ve ...Bb4 oynarsa Nimzo-Hint gelir; Botvinnik her ikisine de hazırdı.',
      diger: [
        { move: '2.Nf3', text: 'Daha sakin bir sıra (Motor: +0.4); Nimzo-Hint’i önlemek için 3.Nf3’le birlikte kullanılır.' },
        { move: '2.e3', text: 'Pasif ama sağlam (Motor: +0.2); c-piyonunu c4’e getirmemek Beyazın merkez şansını azaltır.' },
      ],
    },
    '2b': {
      text: '2...e6 ile f8 filinin yolu açılır.',
      amac: 'Fili b4’e getirip Nc3’ü bağlamak (Nimzo-Hint) ya da ...d5 ile Vezir Gambiti yapısına geçmek.',
      neden: 'e6 hem ...Bb4 hem ...d5 hem de ...b6 seçeneklerini açık tutar. 2...g6 (Kral-Hint) daha dinamik ama merkezi Beyaza bırakır; Capablanca klasik, sağlam yapıları severdi.',
      diger: [
        { move: '2...g6', text: 'Kral-Hint ya da Grünfeld’e yol açar (Motor: +0.35); 1938’de henüz çok az oynanıyordu.' },
        { move: '2...c6', text: 'Slav’a geçiş (Motor: +0.4).' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile at gelişir ve e4 ilerleyişini destekler.',
      amac: 'Merkezi taşla desteklemek ve e2-e4 ile büyük merkez kurmak.',
      neden: '3.Nc3 Nimzo-Hint’e (3...Bb4) izin verir. Botvinnik bu savunmanın ikiye katlanmış piyon yapılarını anlamakta herkesten ileriydi ve bunu çekinmeden kabul etti.',
      diger: [
        { move: '3.Nf3', text: 'Nimzo-Hint’ten kaçınır (Motor: +0.4); 3...b6 ile Vezir-Hint gelebilir.' },
        { move: '3.g3', text: 'Katalan kuruluşu (Motor: +0.4); fil g2’de uzun çaprazı tutar.' },
      ],
    },
    '3b': {
      text: '3...Bb4: Nimzo-Hint Savunması. Fil c3 atını bağlar.',
      amac: 'e4 karesine taşla baskı yapmak; gerekirse ...Bxc3 ile Beyaza ikiye katlanmış c-piyonları bırakmak.',
      neden: 'Nimzowitsch’in fikri: Siyah merkezi piyonla değil taşla kontrol eder. Fil çiftini vermeye hazırdır, çünkü karşılığında Beyazın piyon yapısı bozulur. Bu takas oyunun bütün temasını belirleyecek.',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Reddi (Motor: +0.3); daha klasik bir yapı.' },
        { move: '3...c5', text: 'Benoni yapısına davet (Motor: +0.5); 4.d5 ile Beyaz alan kazanır.' },
      ],
    },
    '4w': {
      text: '4.e3: Rubinstein sistemi. Beyaz sakin gelişimi seçer, f1 fili d3’e çıkacak.',
      amac: 'Önce gelişip rok yapmak, sonra a3 veya Ne2 ile c3 atının durumunu netleştirmek ve merkezde e4’ü hazırlamak.',
      neden: '4.e3 en sağlam sistemdir: c3’teki atı korumak için hiçbir şey vermez ve Beyaz planını Siyahın kurulumuna göre seçer. Ne2 ile at c3’e geri alma yapabilir, a3 ile de fil sorgulanabilir. Botvinnik bu oyunda ikinci yolu seçecek.',
      diger: [
        { move: '4.Qc2', text: 'Klasik (Capablanca) varyant (Motor: +0.35): vezir c3’ü korur, ikiye katlanmış piyonlardan kaçınılır ama gelişim gecikir.' },
        { move: '4.a3', text: 'Sämisch varyantı: fil hemen sorgulanır, Beyaz ikiye katlanmış piyonu baştan kabul eder ve f3-e4 planına gider.' },
        { move: '4.Nf3', text: 'Esnek gelişim (Motor: +0.25); genelde Vezir-Hint yapılarına döner.' },
      ],
    },
    '4b': {
      text: '4...d5 ile Siyah merkezi piyonla tutar.',
      amac: 'e4 ilerleyişini engellemek ve Vezir Gambiti’ne benzeyen sağlam bir merkez kurmak.',
      neden: 'Bu hamle Beyaza 5.a3 imkânı verir: fil ya c3’ü alır ya geri çekilir. R.J. Macdonald’ın notlarında 4...b6 5.Bd3 Bb7 yolu da hafif Beyaz avantajıyla anılır. Capablanca sağlam merkezi tercih etti.',
      diger: [
        { move: '4...O-O', text: 'En esnek hamle (Motor: +0.25); Siyah merkezi yapıya karar vermeyi erteler.' },
        { move: '4...c5', text: 'Hübner/Rubinstein ana yolları (Motor: +0.3); d4’e hemen baskı.' },
        { move: '4...b6', text: 'Vezir-Hint usulü fianketto; Macdonald’a göre 5.Bd3 Bb7 sonrası Beyaz biraz daha iyi.' },
      ],
    },
    '5w': {
      text: '5.a3 ile fil hemen sorgulanır: Botvinnik kuruluşu.',
      amac: 'Siyahı fil çiftini vermeye zorlamak; ...Bxc3 bxc3 sonrası b-hattı açılır ve d4 piyonu c3 ile desteklenir.',
      neden: 'Wikipedia’nın Nimzo-Hint maddesinde anlatıldığı gibi, 4...d5 5.a3 ile Sämisch’e benzer bir yapı doğar; Beyaz cxd5 ile ikiye katlanmış piyonları hafifletir, sonra fil çiftiyle e4’e hazırlanır. Bu yapı uzun süre Beyaz için iyi sayıldı.',
      diger: [
        { move: '5.Qa4+', text: 'Motorun ilk tercihi (Motor: +0.3) ama vezir erken oyuna girer; 5...Nc6 sonrası Siyah rahat gelişir.' },
        { move: '5.Bd2', text: 'Sakin bir yol (Motor: +0.2); Macdonald hafif Beyaz avantajı verir.' },
        { move: '5.Nf3', text: 'Klasik gelişim (Motor: +0.2); f-piyonu kapanır ve e4 planı yavaşlar.' },
      ],
    },
    '5b': {
      text: '5...Bxc3+ ile fil atı şahla alır.',
      amac: 'Beyazın piyon yapısını bozmak; c3 ve c4’te ikiye katlanmış piyonlar uzun vadeli hedef olacak.',
      neden: 'Fil geri çekilirse (5...Be7) Siyah bir tempo kaybetmiş olur ve Beyaz a3’ten fayda sağlar. Nimzo-Hint’in mantığı zaten bu takasa dayanır: fil çifti karşılığında yapısal üstünlük.',
      diger: [
        { move: '5...Be7', text: 'Vezir Gambiti yapısına dönüş (Motor: +0.3); Beyaz fazladan a3 hamlesi kazanmış olur.' },
        { move: '5...Bd6', text: 'Garip görünür (Motor: +0.65); 6.c5 ile fil yeniden kovulur.' },
      ],
    },
    '6w': {
      text: '6.bxc3: piyonla geri alma zorunlu. Beyazın c-piyonları ikiye katlandı.',
      amac: 'Taşı geri almak; b-hattı açılır ve c3 piyonu d4’ü destekler.',
      neden: 'Fil şah çektiği için başka iyi seçenek yok: 6.Ke2 (Motor: −2.5) veya 6.Bd2 Bxd2+ gibi yollar sadece kayıp getirir. Bu yapı Beyaza fil çifti ve merkezde e4 şansı verir.',
      diger: [
        { move: '6.Ke2', text: 'Şah merkezde kalır ve fil kurtulur: 6...Ba5 sonrası Siyah bir taş önde (Motor: −2.5).' },
      ],
    },
    '6b': {
      text: '6...c5 ile d4 piyonuna baskı yapılır.',
      amac: 'c3-d4 zincirini sorgulamak ve ileride ...c4 ile c3’ü sabitleme seçeneğini hazırlamak.',
      neden: 'İkiye katlanmış piyonlara karşı oynanan klasik plan: d4’e baskı yapıp Beyazı merkezde karar vermeye zorlamak. Siyah aynı zamanda c-hattında oynayabilir.',
      diger: [
        { move: '6...O-O', text: 'Önce rok (Motor: +0.2); planı ertelemek.' },
        { move: '6...b6', text: 'Önce ...Ba6 planı (Motor: +0.2); 7.cxd5 exd5 sonrası benzer yapılar.' },
      ],
    },
    '7w': {
      text: '7.cxd5 ile Beyaz d5’te değişim yapar ve merkezin şeklini belirler.',
      amac: 'c4 piyonunu değiştirerek ikiye katlanmış c-piyonlarından birinden kurtulmak; c3 piyonu d4’ü korumaya devam eder.',
      neden: 'Lichess’teki analizde de söylendiği gibi, Botvinnik bu değişimle ikiye katlanmışlığı pratik olarak giderir: c4’teki zayıf piyon yerine sağlam bir c3-d4 zinciri kalır. Siyahın d5 piyonu ise ileride e4 ile hedef olacak.',
      diger: [
        { move: '7.dxc5', text: 'Merkezi açar (Motor: +0.1); c-piyonları yine dağınık kalır.' },
        { move: '7.Nf3', text: 'Gelişim (Motor: 0.0); ama f-piyonu kapanır ve e4 planı zorlaşır.' },
      ],
    },
    '7b': {
      text: '7...exd5: piyonla alınır; e-hattı yarı açık kalır.',
      amac: 'Merkezde d5 piyonunu tutmak ve c8 filinin çaprazını açmak.',
      neden: 'Taşla almak (7...Nxd5 veya 7...Qxd5) Beyaza merkezde serbest e4 ilerleyişi verir. exd5 ile Siyah e4 karesini sağlam tutar; Beyaz ancak f3 ile hazırlık yaptıktan sonra e4 oynayabilecek.',
      diger: [
        { move: '7...Nxd5', text: 'Beyaz Qc2 ve e4 ile hızla merkezi alır (Motor: +0.6).' },
        { move: '7...Qxd5', text: 'Vezir erken çıkar (Motor: +0.45); Nf3, c4 ile tempo kazanılır.' },
      ],
    },
    '8w': {
      text: '8.Bd3: fil en aktif çapraza gelişir.',
      amac: 'h7 karesine bakmak ve e4 karesini desteklemek.',
      neden: 'd3 fili Beyazın şah kanadı saldırısının temel taşıdır; bu yüzden Siyah birkaç hamle sonra ...Ba6 ile onu değişmek isteyecek. Önce fil, sonra at: Beyaz atı e2’ye koyacağı için fili önce çıkarmalıdır.',
      diger: [
        { move: '8.Bb5+', text: 'Motorun hafif tercihi (Motor: +0.25): 8...Nc6 sonrası fil Siyahın atını bağlar, ama Beyazın şah kanadı planı zayıflar.' },
        { move: '8.dxc5', text: 'Merkezi bırakır (Motor: 0.0); Siyahın taşları rahatlar.' },
      ],
    },
    '8b': {
      text: '8...O-O ile Siyah rok yapar.',
      amac: 'Şahı güvene almak ve kaleyi e-hattına getirmek.',
      neden: 'Gelişim ve şah güvenliği önce gelir. Hemen 8...b6 da mümkündü ve çoğu zaman aynı pozisyona döner.',
      diger: [
        { move: '8...b6', text: 'Önce ...Ba6 planı (Motor: +0.1); genellikle aynı yapıya döner.' },
        { move: '8...Nc6', text: 'Atı merkeze getirir (Motor: +0.45) ama ...Ba6 planı yavaşlar.' },
      ],
    },
    '9w': {
      text: '9.Ne2!: at e2 üzerinden g3’e gidecek; f-piyonunun önü açık kalır.',
      amac: 'f3 ve e4 ile merkezi açmak; at g3’ten e4 karesine bir kez daha bakacak.',
      neden: 'Matthew Sadler’in vurguladığı ayrıntı: Nf3 yerine Ne2 sayesinde Beyaz f3 ve e4’ü çok daha hızlı oynayabilir. Motor da farkı net gösteriyor: 9.Ne2 +0.3, 9.Nf3 ise 9...c4 10.Bc2 Ne4 ile Siyaha e4 karesini verir (Motor: −0.7).',
      diger: [
        { move: '9.Nf3', text: '9...c4 10.Bc2 Ne4 ve at e4’e yerleşir; f-piyonu ilerleyemez (Motor: −0.7).' },
        { move: '9.f3', text: 'Planı hemen başlatır (Motor: +0.25); genelde 9...b6 10.Ne2 ile aynı fikre döner.' },
      ],
    },
    '9b': {
      text: '9...b6: fil a6’ya gelip Beyazın d3 filini değişecek.',
      amac: 'Beyazın şah kanadına yönelen en tehlikeli taşını (Bd3) ortadan kaldırmak.',
      neden: 'Siyahın c8 fili d5 piyonunun arkasında kötü bir fildir; onu Beyazın iyi filiyle değişmek klasik bir stratejidir. Lichess analizinde de belirtildiği gibi, Bd3 Siyah şahına saldırabilecek taştı.',
      diger: [
        { move: '9...Re8', text: 'Önce e-hattı (Motor: +0.35); Beyaz f3 ve e4’e hazırlanır.' },
        { move: '9...Bg4', text: 'Fili aktif kareye getirir (Motor: +0.4); f3 ile kovulur.' },
      ],
    },
    '10w': {
      text: '10.O-O ile Beyaz rok yapar.',
      amac: 'Şahı güvene almak ve f1 kalesini f-piyonunun arkasına koymak.',
      neden: 'f-piyonu ilerleyeceği için kale f1’de yerinde durur. Fil değişimini önlemenin iyi bir yolu yok; Beyaz bunu kabul eder ve merkez planına devam eder.',
      diger: [
        { move: '10.c4', text: 'Merkezi açmaya çalışır (Motor: +0.1); 10...cxd4 sonrası d4 zayıflar.' },
        { move: '10.f3', text: 'Rok öncesi f3 (Motor: +0.1); şah merkezde kalır.' },
      ],
    },
    '10b': {
      text: '10...Ba6: Siyah, Beyazın iyi beyaz kareli filini değişmek ister.',
      amac: 'Kötü filini Beyazın iyi filiyle değişmek ve beyaz karelerde (a4, c4, b3) Beyazı zayıflatmak.',
      neden: 'Fil değişiminden sonra Beyazın şah kanadı saldırısının en önemli taşı gider. Siyah aynı zamanda c4 ve b3 karelerinde kalıcı yuvalar kazanır; Capablanca’nın sonraki bütün planı bu beyaz karelere dayanacak.',
      diger: [
        { move: '10...Re8', text: 'Önce kale (Motor: +0.5); Beyaz fil değişiminden kaçınabilir.' },
        { move: '10...cxd4', text: 'Merkezi netleştirir (Motor: +0.5); c3 piyonu d4’e gelir ve ikiye katlanmışlık tamamen kalkar.' },
      ],
    },
    '11w': {
      text: '11.Bxa6 ile filler değişir.',
      amac: 'Siyahın fili almasına izin verip atını a6 gibi kenar bir kareye çekmek.',
      neden: 'Beyaz fili kaçırmaya uğraşmaz; at a6’da kenarda kalacak ve oyuna dönmesi için birkaç hamle gerekecek. Bu tempolar Beyazın e4 planına harcanacak.',
      diger: [
        { move: '11.dxc5', text: 'Motorun hafif tercihi (Motor: +0.3): 11...bxc5 sonrası Siyahın c5-d5 piyonları hedef olur.' },
        { move: '11.f3', text: 'Fil değişimini Siyaha bırakır (Motor: +0.15).' },
      ],
    },
    '11b': {
      text: '11...Nxa6: at fili geri alır; zorunlu.',
      amac: 'Taşı geri almak; at c7 veya b8 üzerinden oyuna dönecek.',
      neden: 'Almamak bir taş kaybı demektir (11...Qc7? 12.Bd3 ile Motor: +5.6). At a6’da kenarda ama Capablanca onu ileride a6-b8-c6-a5-b3 yolundan çok aktif bir kareye götürecek.',
    },
    '12w': {
      text: '12.Bb2: fil b2’ye gelişir ve c3 ile d4’ü destekler.',
      amac: 'Fili gelişmek ve ileride c4 veya a3 ile çaprazını açmak.',
      neden: 'Fil b2’de şimdilik pasif ama d4’ü korur. ChessBase’in yayımladığı Andy Soltis notlarında bu hamle “?” ile işaretlenir ve modern tercihin 12.Qd3 olduğu söylenir. Motor da 12.Qd3’ü daha iyi buluyor: vezir a6 atına saldırır ve dxc5/c4 fikirleri gelir.',
      diger: [
        { move: '12.Qd3', text: 'Vezir a6 atını vurur: 12...Nc7 13.dxc5 bxc5 14.c4 ile Beyaz merkezde açılır (Motor: +0.4).' },
        { move: '12.f3', text: 'e4 planına hemen başlar (Motor: +0.1).' },
        { move: '12.Ng3', text: 'At e4 karesine bakar (Motor: +0.1); Macdonald bu hamleyi de bir seçenek olarak anar.' },
      ],
    },
    '12b': {
      text: '12...Qd7: vezir d7’de a4 ve b5 karelerine bakar.',
      amac: 'Beyaz karelerde oynamak: ...Qa4 veya ...Qb5 ile Beyazın zayıf piyonlarına ve beyaz karelerine baskı yapmak.',
      neden: 'Fil değişimi sonrası beyaz kareler Siyahın hedefidir. Vezir hem a6 atını dolaylı destekler hem de Beyaz vezirle değişmeye hazırdır; vezir değişimi Siyahın yapısal avantajını öne çıkarırdı.',
      diger: [
        { move: '12...c4', text: 'Hemen vezir kanadını kapatmak (Motor: 0.0); 13.f3 ile Beyaz e4’e hazırlanır.' },
        { move: '12...Re8', text: 'Önce e-hattı (Motor: +0.05).' },
      ],
    },
    '13w': {
      text: '13.a4 ile ...Qa4 ve ...Qb5 önlenir.',
      amac: 'Siyah vezirin beyaz karelerden Beyaz piyonlara saldırmasını engellemek ve Qd3’ü hazırlamak.',
      neden: 'Lichess analizinde de belirtildiği gibi a4, Qd3’ten sonra ...Qa4 fikrini önler. Bedeli: a4 piyonu ileride ...c4 ve ...Nb3 ile hedef olacak; Capablanca’nın bütün vezir kanadı planı bu piyona yönelecek.',
      diger: [
        { move: '13.Ng3', text: 'Motorun hafif tercihi (Motor: 0.0): önce at, vezir kanadı sonra.' },
        { move: '13.Nf4', text: 'Macdonald’a göre eşit şanslar; at d5’e baskı yapar.' },
      ],
    },
    '13b': {
      text: '13...Rfe8: kale e-hattına gelir ve e4 ilerleyişine karşı durur.',
      amac: 'e4 karesini kale ile kontrol etmek ve e-hattında Beyazın merkez kırılmasını pahalı hale getirmek.',
      neden: 'Soltis bu hamleye “?!” verir ve 13...cxd4 14.cxd4 Rfc8 ile c-hattında oyunu önerir. Motor ise 13...Rfe8’i en iyi hamlelerden sayıyor (Motor: 0.0); 13...cxd4 sonrası Beyaz 15.Qb3 ile hafif üstün (+0.3). Burada kaynakla motor ayrışıyor.',
      diger: [
        { move: '13...cxd4', text: '14.cxd4 Rfc8 ile c-hattı (Soltis); motor 15.Qb3 sonrası +0.3 veriyor.' },
        { move: '13...Rfc8', text: 'Kale c-hattına (Motor: 0.0); 14.Qd3 c4 15.Qc2 Re8 ile benzer yapı.' },
      ],
    },
    '14w': {
      text: '14.Qd3: vezir a6 atını tehdit eder ve e4 karesini destekler.',
      amac: 'Qxa6 tehdidiyle Siyahı karar vermeye zorlamak; aynı zamanda vezirle e4 ilerleyişini hazırlamak.',
      neden: 'Macdonald notlarında hamlenin tehdidi açıkça yazar: Qxa6. Siyah ya atı korumalı ya da ...c4 ile tempo kazanarak vezire saldırmalı. Motor ise 14.c4! ile merkezi hemen açmayı biraz daha iyi buluyor (+0.1 / maç hamlesi −0.4).',
      diger: [
        { move: '14.c4', text: '14...dxc4 15.Qc1 Nb4 16.Qxc4 ile Beyaz merkezi açar ve b2 filini canlandırır (Motor: +0.1).' },
        { move: '14.Ng3', text: 'Önce at (Motor: −0.1); 14...c4 15.Bc1 ile yine benzer yapı.' },
      ],
    },
    '14b': {
      text: '14...c4: vezire tempo ile saldırır, vezir kanadını kapatır ve c3 piyonunu sabitler.',
      amac: 'Qxa6 tehdidini savuşturmak, b2 filinin çaprazını kapatmak, vezir kanadında alan kazanıp a4 ve c3’ü kalıcı hedef yapmak.',
      neden: 'Kasparov, “Benim Büyük Öncüllerim”de ve ChessBase’te bu hamleyi ciddi bir konumsal hata sayar: d4’e baskı kalmaz ve Beyaz bütün gücünü f3-e4’e verir; Sadler’in aktardığına göre Kasparov bunu Capablanca’nın “gizli dinamik etkenleri” küçümsemesine bağlar. Botvinnik 14...Qb7’yi önerdi. Sadler ise hamlenin “tam bir felaket olmadığını” yazar. Motor da 14...c4’ü en iyi hamle gösteriyor (Motor: −0.3); asıl hata sonradan merkezin ihmal edilmesiydi.',
      diger: [
        { move: '14...Qb7', text: 'Botvinnik’in önerisi: vezir a6 atını korur ve d5’e destek verir. 15.c4 Nb4 16.Qb3 sonrası denge (Motor: 0.0).' },
        { move: '14...Qc8', text: 'Benzer bir savunma (Motor: +0.1); vezir c-hattında kalır.' },
      ],
    },
    '15w': {
      text: '15.Qc2: vezir c2’ye çekilir ve a4 piyonunu korur.',
      amac: 'Veziri güvenli bir kareye çekmek, c2-a4 çaprazından a4’ü savunmak ve e4 karesine bakmaya devam etmek.',
      neden: 'Vezir d3’te kalamaz. c2’de hem a4’ü korur hem de e4 ilerleyişini destekler. Siyahın atının b3’e gelmesi bu çaprazı kesecek; Capablanca’nın planı tam olarak buna dayanıyor.',
      diger: [
        { move: '15.Qd2', text: 'Motorun hafif tercihi (Motor: −0.2): 15...h5 16.f3 Nc7 17.Ra2 ile a4 kaleyle de korunur.' },
        { move: '15.Qd1', text: 'Pasif (Motor: −0.45).' },
      ],
    },
    '15b': {
      text: '15...Nb8: at uzun bir yolculuğa başlar: b8-c6-a5-b3.',
      amac: 'Atı b3 karesine getirip c2-a4 çaprazını kesmek ve a4 piyonunu kazanmak.',
      neden: 'Kasparov’a göre Capablanca bu at manevrasıyla Beyazın beyaz karelerini sömürmeyi planladı ve Beyazın saldırı potansiyelini küçümsedi. Sadler ise Capablanca’nın başta ...a6 ve ...b5 planını düşünmüş olabileceğini yazar. Motor 15...Nc7’yi tercih ediyor (Motor: −0.3, maç hamlesi +0.3): at c7’den hem e6’ya hem b5’e gidebilir ve merkezden kopmaz.',
      diger: [
        { move: '15...Nc7', text: 'At merkeze yakın kalır: 16.Bc1 a5 17.f3 b5 ile Siyah vezir kanadında oynar (Motor: −0.3).' },
        { move: '15...h5', text: 'Şah kanadında alan; Macdonald 16.Bc1 ile eşit der (Motor: −0.2).' },
      ],
    },
    '16w': {
      text: '16.Rae1: kale e1’e gelir ve e4 ilerleyişini destekler.',
      amac: 'e-hattını kale ile güçlendirmek: e4 oynandığında e-hattı açılırsa kale hazır olacak.',
      neden: 'Beyaz vezir kanadındaki a-kalesini merkeze getirir; bu, vezir kanadında savaşmayacağını, oyunun merkezde ve şah kanadında geçeceğini gösteren bir karardır. Motor bu hamleyi en iyi buluyor (Motor: +0.35).',
      diger: [
        { move: '16.Ng3', text: 'Önce at (Motor: +0.2); genelde aynı yere döner.' },
        { move: '16.Nf4', text: 'At d5’e baskı yapar (Motor: 0.0) ama g3’teki kadar e4’ü desteklemez.' },
      ],
    },
    '16b': {
      text: '16...Nc6: at c6’ya gelir; a5 ve b3’e yönelecek.',
      amac: 'Manevraya devam etmek: c6’dan a5’e, oradan b3’e.',
      neden: 'At c6’da hem d4’e hem e5’e bakar, ama Capablanca onu orada tutmayacak. Motor 16...Na6’yı küçük farkla tercih ediyor (Motor: +0.15); Macdonald 16...Nh5 17.Bc1 ile de eşitlik verir.',
      diger: [
        { move: '16...Na6', text: 'At c7’ye dönmeye hazır (Motor: +0.15).' },
        { move: '16...b5', text: 'Vezir kanadında hemen oyun (Motor: +0.45); 17.Ng3 bxa4 18.f3 ile Beyaz merkezde ilerler.' },
      ],
    },
    '17w': {
      text: '17.Ng3: at g3’te e4 karesini destekler.',
      amac: 'e4’e üçüncü bir destek vermek ve ileride h5 veya f5 karelerinden şah kanadına sıçramak.',
      neden: 'Ne2 ile başlayan plan tamamlanır: at artık e4’e bakar, f-piyonu serbesttir. Şimdi f3 ve e4 gelecek. Motor bu hamleyi en iyi buluyor (Motor: +0.2).',
      diger: [
        { move: '17.Nf4', text: 'At d5’e baskı yapar (Motor: +0.1); 17...a6 18.f3 b5 19.e4 ile benzer fikir.' },
        { move: '17.Bc1', text: 'Fili yeniden konumlamak (Motor: −0.2); zaman kaybı.' },
      ],
    },
    '17b': {
      text: '17...Na5?: at a5’e gider ve b3’e yönelir. Motor bunu oyunun asıl hatası görüyor.',
      amac: '...Nb3 ile c2-a4 çaprazını kesip a4 piyonunu kazanmak.',
      neden: 'At merkezden uzaklaşınca e4 karesine taşla müdahale edecek hiçbir Siyah taş kalmaz. 17...Ne4! ise e4’ü tıkıyordu: 18.Nh5 Qf5 veya 18.Nh1 Nd6 ile Siyah sağlam (Motor: +0.2). Lichess analizi de 17...Ne4’ü önerir. Maç hamlesinden sonra 18.f3 ile değerlendirme +1.7’ye fırlıyor.',
      diger: [
        { move: '17...Ne4', text: 'e4 karesi taşla kapanır; 18.Nxe4 dxe4 19.f3 Qd5 ile Beyazın e4 kırılması ortadan kalkar (Motor: 0.0).' },
        { move: '17...Reb8', text: 'Vezir kanadında ...b5 hazırlığı (Motor: +0.25).' },
        { move: '17...h5', text: 'h4 ile g3 atını kovmak (Motor: +0.4); Macdonald 18.f3 ile eşit der.' },
      ],
    },
    '18w': {
      text: '18.f3: e4 ilerleyişi son kez hazırlanır.',
      amac: 'e4 karesine piyon desteği vermek; e4 oynandığında fxe4 ile geri alma imkânı yaratmak.',
      neden: 'Wikipedia’daki notlarda belirtildiği gibi, Beyaz merkezdeki piyon çoğunluğuyla alan kazanır ve ileride Siyah şahına saldırır; b3’e gelecek Siyah atı bu ilerleyişi durduramaz. Motor: 18.f3 +1.7; 18.Re2 yalnızca +0.25.',
      diger: [
        { move: '18.Re2', text: 'a4’ü korumaya hazırlık (Motor: +0.25); 18...Ne4 ile Siyah merkezi tıkar.' },
        { move: '18.h3', text: 'Yavaş (Motor: 0.0); Siyaha ...Ne4 fırsatı verir.' },
      ],
    },
    '18b': {
      text: '18...Nb3: at b3’e yerleşir; c2-a4 çaprazı kesildi ve a4 korumasız kaldı.',
      amac: 'a4 piyonunu kazanmak ve atı a1, c1, d2 karelerini kontrol eden bir yuvaya koymak.',
      neden: 'Planın mantıklı devamı ama artık merkez açılıyor. 18...Re6 (Motor: +1.5) ile e-hattını kaleyle güçlendirmek biraz daha dirençliydi. 18...Qc6 için Macdonald 19.e4 ile Beyaz avantajı verir.',
      diger: [
        { move: '18...Re6', text: 'e-hattına destek: 19.e4 dxe4 20.fxe4 Rae8 ile Siyah e-hattında karşılık verir (Motor: +1.5).' },
        { move: '18...Kh8', text: 'Şahı köşeye alır (Motor: +1.7); 19.e4 Ng8 20.e5 ile Beyaz alan kazanır.' },
      ],
    },
    '19w': {
      text: '19.e4!: Beyaz a4 piyonunu umursamaz ve merkezi açar.',
      amac: 'd5 piyonuna saldırmak, e5 ile f6 atını kovmak ve f-piyonunun yürüyüşünü başlatmak.',
      neden: 'Oyunun temel stratejik kararı. a4’ü korumaya çalışmak (19.Re2, Motor: +1.0) zaman kaybıdır; Botvinnik piyonu verip merkezi açar ve Siyah vezirini şah kanadından uzağa, a4’e çeker. Motor: 19.e4 +1.7.',
      diger: [
        { move: '19.Re2', text: 'a4’ü dolaylı korur (Motor: +1.0); 19...Qxa4 20.e4 sonrası yine benzer ama bir tempo eksik.' },
        { move: '19.Qf2', text: 'Önce vezir (Motor: +0.9); 19...Kh8 20.e4 Ng8 ile Siyah hazırlanır.' },
      ],
    },
    '19b': {
      text: '19...Qxa4: Siyah a4 piyonunu alır.',
      amac: 'Planın ödülünü almak: bir piyon fazla ve vezir kanadında iki bağlantılı geçer piyon şansı.',
      neden: 'Maddi kazanç gerçek ama vezir şah kanadından iyice uzaklaştı. Sadler’in yorumu: piyonu alınca d7 karesi ata boşalır ve ...Nc5 fikri doğar; Capablanca belki de f3-e4-e5’in kaçınılmaz geldiğini görünce pratik bir seçim yaptı. Motor 19...Kh8 (+1.6) ile önce şahı hazırlamayı biraz daha iyi buluyor.',
      diger: [
        { move: '19...Kh8', text: 'Şahı köşeye alıp e5’e ...Ng8 ile cevap vermek (Motor: +1.6).' },
        { move: '19...h5', text: 'g3 atını rahatsız etmek (Motor: +1.7).' },
      ],
    },
    '20w': {
      text: '20.e5: f6 atı kovalanır.',
      amac: 'Siyahın şah kanadındaki tek savunucu taşını uzaklaştırmak ve f4-f5 için zemin hazırlamak.',
      neden: 'Piyon e5’te alan kazandırır ve exf6 tehdidiyle atı geri çekilmeye zorlar (Macdonald: tehdit exf6). Beyazın piyon zinciri c3-d4-e5 artık Siyahın şah kanadına doğru bir kama gibi ilerliyor. Motor: 20.e5 +1.9.',
      diger: [
        { move: '20.Qf2', text: 'Önce vezir (Motor: +1.5); Siyah 20...Kh8 ile hazırlanır.' },
        { move: '20.exd5', text: '20...Nxd5 ile at d5’e yerleşir ve Beyazın merkezi dağılır (Motor: −2.3).' },
      ],
    },
    '20b': {
      text: '20...Nd7: at d7’ye çekilir.',
      amac: 'Atı kurtarmak ve ...Nc5 veya ...f6 fikirleriyle e5 piyonuna baskı yapmak.',
      neden: 'Başka iyi kare yok: 20...Nc5? 21.Qd2 Nd3 22.exf6 (Motor: +2.5), 20...g6 21.exf6 (+2.9) at kaybettirir. At d7’de hem c5’e hem f6’ya geri dönebilir.',
      diger: [
        { move: '20...Ne4', text: '21.fxe4 ile at bedavaya gider (Motor: +5.2).' },
        { move: '20...Qc6', text: '21.exf6 ile at kaybedilir (Motor: +2.9).' },
      ],
    },
    '21w': {
      text: '21.Qf2: vezir f2’de f-piyonunun ilerleyişini destekler.',
      amac: 'f4-f5 yürüyüşünü vezirle desteklemek; vezir aynı zamanda c5 ve d4’e bakar.',
      neden: 'Vezir c2’de vezir kanadında işe yaramıyordu; şimdi şah kanadına geçer. Motor 21.Re3 (+2.0) ile kaleyi üçüncü yataydan şah kanadına getirmeyi biraz daha iyi buluyor; 21.f4 ve 21.Nf5 de yakın (Macdonald: 21.Nf5 g6 22.Ne3 hafif Beyaz avantajı).',
      diger: [
        { move: '21.Re3', text: 'Kale h3’e gidebilir (Motor: +2.0); 21...a5 22.f4 b5 23.f5 ile saldırı.' },
        { move: '21.f4', text: 'Hemen f4 (Motor: +1.65); 21...Nbc5 22.Qf5 ile benzer.' },
        { move: '21.Nf5', text: 'At f5’e sıçrar (Motor: +1.7); Macdonald 21...g6 22.Ne3 ile hafif Beyaz avantajı der.' },
      ],
    },
    '21b': {
      text: '21...g6: f5 ve h5 kareleri kontrol edilir.',
      amac: 'Ng3’ün f5 ve h5 karelerine sıçramasını önlemek ve ...f5 ile şah kanadını kapatmayı hazırlamak.',
      neden: 'Macdonald’ın notunda da yazdığı gibi g6, f5 ve h5’i örter. Bedeli: f6 ve h6 kareleri zayıflar, g7’deki şah ileride Nh5+ fikirlerine açık olacak. 21...Qc6 (Motor: +1.6) da benzer değerde; Macdonald 21...Qc6 22.Nf5 Qg6 23.Nd6 ile Beyaz avantajı verir.',
      diger: [
        { move: '21...Qc6', text: 'Vezir merkeze döner (Motor: +1.6); 22.f4 a5 23.Re3 ile Beyaz saldırır.' },
        { move: '21...a5', text: 'Vezir kanadı piyonlarını yürütmek (Motor: +1.8).' },
      ],
    },
    '22w': {
      text: '22.f4: f5 ilerleyişi hazırlanır.',
      amac: 'f5 ile g6’ya saldırıp şah kanadını açmak; e5 piyonunu da f4 ile desteklemek.',
      neden: 'Planın doğal devamı. Motor 22.h4! (+1.8) ile önce h-piyonunu yürütüp h5 ile g6’yı sorgulamayı biraz daha güçlü buluyor; 22.f4 sonrası Siyah 22...f5 ile geçici olarak şah kanadını kapatabildi (Motor: +1.4).',
      diger: [
        { move: '22.h4', text: '22...Qc6 23.Ba3 b5 24.h5 ile h-hattı açılır (Motor: +1.8).' },
        { move: '22.Qe3', text: 'Vezir h6’ya gitmeye hazırlanır (Motor: +1.3).' },
      ],
    },
    '22b': {
      text: '22...f5: Siyah şah kanadını kapatmaya çalışır.',
      amac: 'f5 ilerleyişini durdurmak ve şah kanadındaki piyon yapısını kilitlemek.',
      neden: 'Başka bir yol yoktu: 22...Nbc5 23.dxc5 Nxc5 gibi taş fedaları yetersiz (Motor: +3.0). Ama ...f5 geçerken almaya (exf6) izin verir; lichess analizinde de söylendiği gibi Beyazın oyunu açık tutmak için geçerken alması gerekiyordu.',
      diger: [
        { move: '22...Nbc5', text: '23.dxc5 Nxc5 ile taş verilir (Motor: +3.0).' },
        { move: '22...Qc6', text: '23.f5 ile Beyaz hemen hat açar (Motor: +2.5).' },
      ],
    },
    '23w': {
      text: '23.exf6: geçerken alma; f-hattı açılır.',
      amac: 'Kilitlenmek üzere olan şah kanadını açmak ve f-piyonunu f5’e yürütme imkânı yaratmak.',
      neden: 'Kapalı bir şah kanadında Beyazın saldırısı durabilirdi; exf6 ile hatlar açık kalır. e5 piyonu gider ama f4 piyonu f5’e yürüyecek. Motor derinlikte bunu en iyi hamle buluyor (+1.8); 23.Nh1 ile yeniden toplanmak +1.4.',
      diger: [
        { move: '23.Nh1', text: 'At yeniden toplanıp g4 kırılmasını hazırlar (Motor: +1.4).' },
        { move: '23.Nxf5', text: 'Taş fedası: 23...gxf5 24.g4 (Motor: +1.1); daha az kesin.' },
      ],
    },
    '23b': {
      text: '23...Nxf6: at f6’ya döner.',
      amac: 'f6 piyonunu geri almak ve atı şahın yanında savunmaya koymak.',
      neden: 'f6 piyonunu bırakmak çok tehlikeli: 23...Qc6 24.f7+ (Motor: +2.4), 23...Rxe1 24.Qxe1 (+2.9). At f6’da hem d5’i hem e4’ü tutar ama f5 ile rahatsız edilecek.',
      diger: [
        { move: '23...Qc6', text: '24.f7+ Kxf7 25.f5 ile Beyaz hatları açar (Motor: +2.4).' },
        { move: '23...Rxe1', text: '24.Qxe1 sonrası f6 piyonu kalır (Motor: +2.9).' },
      ],
    },
    '24w': {
      text: '24.f5!: f-piyonu ilerler ve g6’ya saldırır.',
      amac: 'fxg6 tehdidiyle Siyah şahını açmak; e-hattında kaleler değişince piyonu e6’ya geçirmek.',
      neden: 'Bu hamle oyunu Beyaza kesin avantajla kazandırır (Motor: +1.9). Alternatifler hiçbir şey vermez: 24.h3 +0.3, 24.Re5 −0.5. Kurgu çok ince: kaleler değişince f5 piyonu e6’ya almaya hazırdır.',
      diger: [
        { move: '24.h3', text: 'Yavaş (Motor: +0.3); Siyah e-hattını alır.' },
        { move: '24.Re5', text: '24...Ng4 ile kale ve vezir rahatsız edilir (Motor: −0.5).' },
      ],
    },
    '24b': {
      text: '24...Rxe1: kaleler değişir.',
      amac: 'Beyazın e-hattındaki baskısını azaltmak ve aktif taşları değişmek.',
      neden: 'fxg6 tehdidine karşı başka iyi savunma yok: 24...Qc6 25.Rxe8+ Rxe8 26.fxg6 hxg6 ile Siyahın şahı açılır (Motor: +2.6). Değişim gerekli ama Beyaz e1’e kaleyle geri alıp e-hattını tutacak.',
      diger: [
        { move: '24...Qc6', text: '25.fxg6 hxg6 26.Qxf6 ile Beyaz piyon alır (Motor: +2.3–2.6).' },
        { move: '24...Qd7', text: '25.Rxe8+ Rxe8 26.fxg6 (Motor: +2.7).' },
      ],
    },
    '25w': {
      text: '25.Rxe1: Beyaz kaleyle geri alır ve e-hattını tutar.',
      amac: 'e-hattının kontrolünü korumak ve Re6 fikrini hazırlamak.',
      neden: 'Vezirle almak (25.Qxe1? Qe8, Motor: −0.7) f-piyonunun desteğini bırakır; 25.fxg6? Rxf1+ ise bir kale kaybettirir (Motor: −4.5). Kale e1’de hem e-hattını hem e6 karesini tutar.',
      diger: [
        { move: '25.Qxe1', text: '25...Qe8 ile Siyah e-hattına karşı çıkar (Motor: −0.7).' },
        { move: '25.fxg6', text: '25...Rxf1+ ile kale kaybedilir (Motor: −4.5).' },
      ],
    },
    '25b': {
      text: '25...Re8: Siyah e-hattına karşı çıkar.',
      amac: 'e-hattında kaleleri değişip Beyazın baskısını azaltmak ve Re6’ya karşılık vermek.',
      neden: 'Sadler bu hamleyi kurnaz bir savunma kaynağı sayar: kaleler değişince Siyah oyunu basitleştirmeye çalışır. Ama 26.Re6! ile Beyaz f-piyonunu e6’ya getirecek. Motor 25...Rf8 (Motor: +1.2–1.7) ile f-hattını kapatmayı biraz daha iyi buluyor; Macdonald da 25...Rf8!?’e dikkat çeker.',
      diger: [
        { move: '25...Rf8', text: '26.Qf4 Qd7 27.Ba3 Re8 ile Siyah f-hattını tutar (Motor: +1.2).' },
        { move: '25...Qd7', text: '26.fxg6 Re8 27.Rf1 (Motor: +2.65).' },
      ],
    },
    '26w': {
      text: '26.Re6!: kale e6’ya gelir; değişim sonrası f-piyonu e6’ya alacak.',
      amac: 'Kaleleri e6’da değişip f-piyonunu ileri ve korunaklı bir geçer piyona çevirmek.',
      neden: 'Bu hamle, piyonu f5’ten e6’ya “taşır”. Kale değişimden kaçarsa e6’daki kale f6 atına da saldırır. Alternatifler zayıf: 26.fxg6 +0.5, 26.Rd1 0.0. Motor: 26.Re6 +2.3.',
      diger: [
        { move: '26.fxg6', text: '26...Rxe1+ 27.Qxe1 hxg6 sonrası Beyazın baskısı dağılır (Motor: +0.5).' },
        { move: '26.Rd1', text: 'Kale e-hattını bırakır; 26...g5 ile Siyah rahatlar (Motor: 0.00).' },
      ],
    },
    '26b': {
      text: '26...Rxe6: kaleler değişir.',
      amac: 'e6’daki kaleyi almak; aksi halde kale f6’yı alır.',
      neden: 'Kaleyi almamak daha kötü: 26...Kg7 27.Rxf6 Kxf6 28.fxg6+ (Motor: +2.9), 26...Kf7 27.Rxf6+ (+3.1). Değişim zorunlu ama sonucunda e6’da korunaklı bir geçer piyon doğuyor.',
      diger: [
        { move: '26...Kg7', text: '27.Rxf6 Kxf6 28.fxg6+ ile şah açılır (Motor: +2.9).' },
        { move: '26...Kf7', text: '27.Rxf6+ Kxf6 28.fxg6+ (Motor: +3.1).' },
      ],
    },
    '27w': {
      text: '27.fxe6: geçer piyon e6’da.',
      amac: 'e7 ve e8 karelerini hedefleyen ileri bir geçer piyon yaratmak.',
      neden: 'Bu piyon Siyahın taşlarını sürekli savunmaya bağlar: vezir e8/e7’de, şah f7’ye gelemez, at f6’da sabit kalır. Motor: +2.6. Başka hamleler piyonu kaybettirir (27.h3 gxf5, Motor: −4.9).',
      diger: [
        { move: '27.h3', text: '27...gxf5 ile piyon ve hücum kaybedilir (Motor: −4.9).' },
      ],
    },
    '27b': {
      text: '27...Kg7: şah g7’ye gelir ve f6 atını destekler.',
      amac: 'f6 atını korumak ve f7 karesine yakın olmak.',
      neden: 'Şah f6’yı korumazsa Qxf6 gelir: 27...Nd2 28.Qxf6 (Motor: +5.5), 27...Qe8 28.Qxf6 (+6.0). Ama şah g7’de, ileride Nh5+ ile şah çekilebilecek bir karede duruyor; kombinasyonun temeli burada atılıyor.',
      diger: [
        { move: '27...Nd2', text: '28.Qxf6 ile at kaybedilir (Motor: +5.5).' },
        { move: '27...Qe8', text: '28.Qxf6 Na5 29.Ba3 (Motor: +6.0).' },
      ],
    },
    '28w': {
      text: '28.Qf4: vezir f4’ten c7 ve e5 karelerine yönelir.',
      amac: 'Qc7+ ile Siyah vezire ve yedinci yataya baskı yapmak; Qe5 ile f6 atını bağlamak.',
      neden: 'Lichess analizinde de söylendiği gibi vezir f4’te çok aktiftir ve c7’ye gitmek ister. Alternatifler planı yavaşlatır: 28.h4 0.0–0.7, 28.Qe3 +0.4. Motor: 28.Qf4 +2.9.',
      diger: [
        { move: '28.h4', text: '28...Qc6 29.Qe3 Ng4 ile Siyah karşı oyun bulur (Motor: yaklaşık +0.1–0.7).' },
        { move: '28.Qe3', text: '28...Qa2 ile Siyah vezir aktifleşir (Motor: +0.4).' },
      ],
    },
    '28b': {
      text: '28...Qe8: vezir e8’e döner ve e-piyonunu durdurur.',
      amac: 'e7 ve e8 karelerini kontrol etmek, geçer piyonu tıkamak.',
      neden: 'Vezir piyonun önünde en iyi tıkayıcıdır. Diğer hamleler daha kötü: 28...Nd2 29.Qxd2 (Motor: +3.8), 28...h5 29.Nf5+ (+4.7). Motor: 28...Qe8 +3.0.',
      diger: [
        { move: '28...Nd2', text: 'At d2’den fırsat arar ama 29.Qxd2 (Motor: +3.8).' },
        { move: '28...h5', text: '29.Nf5+! gxf5 30.Qg5+ ile saldırı (Motor: +4.7).' },
      ],
    },
    '29w': {
      text: '29.Qe5: vezir e5’te f6 atını bağlar ve e-piyonunu destekler.',
      amac: 'f6 atını sabitlemek; Ba3 ve Nh5+ gibi taktiklerin zeminini hazırlamak.',
      neden: 'Tam isabetli değildi. Kavalek, Richard Cantwell’in 29.Qc7+! Kg8 30.Qe5 önerisini aktarır: şah g8’e gidince f6 atı korumasız kalır ve Kasparov’a göre 30...Qe7 31.Ba3 Qxa3 32.Qxf6 ile Beyaz kazanır. Motor: 29.Qc7+ +3.0, 29.Qd6 +2.3, maç hamlesi +1.6. Jim Loy ve Wikipedia notları da 29.Qe5’i “?” ile işaretler.',
      diger: [
        { move: '29.Qc7+', text: '29...Kg8 30.Qe5 Qe7 31.Ba3 Qxa3 32.Qxf6 ve Beyaz çok üstün (Motor: +3.0; bu çizgi sonunda +2.4).' },
        { move: '29.Qd6', text: 'Macdonald’a göre çok güçlü (Motor: +2.3): 29...Na5 30.Qc7+ Kg8 31.Qe5.' },
      ],
    },
    '29b': {
      text: '29...Qe7?: vezir hem e-piyonunu durdurur hem f6 atını korur. Bu, kombinasyona izin veren hata.',
      amac: 'f6 atını ikinci kez korumak ve e-piyonunu e7’de tıkamak.',
      neden: 'Vezir iki iş yapıyor: e7 karesini tıkamak ve f6’yı korumak. Bir taşın iki görevi olduğunda saptırma kombinasyonu doğar. Motor: 29...Qe7 +4.4; doğrusu şaha kaçış alanı açmaktı: 29...h5 (+1.6) veya Goldin’in önerdiği 29...h6 (+2.0). Macdonald 29...h6 30.Qd6 b5 ile orta bir Beyaz avantajı verir; Burgess ise 29...h6 30.h4! Na5! 31.Bc1! Qe7 32.Bg5! çizgisini önerir.',
      diger: [
        { move: '29...h5', text: 'Şaha h7 karesi açılır ve Nh5+ fikri ortadan kalkar: 30.Qd6 h4 31.Nf1 (Motor: +1.6–1.8).' },
        { move: '29...h6', text: 'Goldin’in önerisi: 30.Ba3 Qd8! ile vezir istilası durdurulur (Motor: +1.6); Cantwell’in 30.Qd6! ile Beyaz üstün (+1.9).' },
        { move: '29...b5', text: '30.Ba3 b4 31.Bxb4 ile Beyazın fili oyuna girer (Motor: +3.1).' },
      ],
    },
    '30w': {
      text: '30.Ba3!!: fil vezire feda edilir.',
      amac: 'Siyah veziri e7’den saptırmak; vezir gidince e-piyonu ilerler ya da f6 atı düşer.',
      neden: 'Fil vezirin iki görevinden birini koparır: fili almazsa 31.Bxe7 veya e-piyonunun ilerlemesi gelir, alırsa 31.Nh5+! ile f6’nın koruyucusu (g6 piyonu) saptırılır. Motor: 30.Ba3 +4.7; ikinci en iyi 30.h4 yalnızca +2.5. Kavalek’in aktardığına göre Botvinnik, 1979’da “Pioneer” programının önce 30.Nf5’i önerdiğini, sonra 30.Ba3’ü bulduğunu anlatır.',
      diger: [
        { move: '30.h4', text: '30...h5 31.Ne2 Na5 ile Siyah savunmayı toparlar (Motor: +2.5).' },
        { move: '30.h3', text: 'Şaha luft açar (Motor: +0.7); kombinasyon fırsatı kaçar.' },
      ],
    },
    '30b': {
      text: '30...Qxa3: Siyah fili alır.',
      amac: 'Taşı kabul edip kombinasyonu çürütmeyi denemek.',
      neden: 'Fili almamak da kaybediyor: 30...Qe8 31.Qc7+ Kh8 32.Be7 (Motor: +4.7), 30...Nc5 31.dxc5 bxc5 (Macdonald: Beyaz için kesin; Motor: +5.3). Wikipedia notunda da söylendiği gibi aksi halde 31.e7 gelir. Kabul etmek en azından Beyazı doğru yolu bulmaya zorlar.',
      diger: [
        { move: '30...Qe8', text: '31.Qc7+ Kh8 32.Be7 ile fil f6’yı vurur (Motor: +4.7).' },
        { move: '30...Nc5', text: '31.dxc5 bxc5 32.Nf1 ve e-piyonu yürür (Motor: +5.3).' },
      ],
    },
    '31w': {
      text: '31.Nh5+!: at şah çekerek feda edilir.',
      amac: 'g6 piyonunu h5’e saptırıp f6 atının son koruyucusunu yok etmek.',
      neden: 'Kavalek’in anlattığına göre Rotterdam’daki bir seyirci bu hamleyi Botvinnik oynamadan önce yüksek sesle söyledi. At alınmazsa 31...Kh6 32.Nxf6 (Motor: +5.4), 31...Kg8 32.Nxf6+ (mat). Hamlenin alternatifi yok: 31.Qc7+ yalnızca sürekli şah (0.00), 31.Nf1? Qe7 ise kaybettirir (−1.9).',
      diger: [
        { move: '31.Qc7+', text: '31...Kh6 32.Qf4+ Kg7 ile sürekli şah (Motor: 0.00).' },
        { move: '31.Nf1', text: '31...Qe7 ile vezir e7’ye döner ve kombinasyon biter (Motor: −1.9).' },
      ],
    },
    '31b': {
      text: '31...gxh5: Siyah atı alır.',
      amac: 'Taşı almak; başka kaçış yok.',
      neden: 'At alınmazsa da Beyaz kazanır: 31...Kh6 32.Nxf6 Qc1+ 33.Kf2 (Motor: +5.4–6.4), 31...Kg8?? 32.Nxf6+ ve mat. Ama g6 piyonu h5’e gidince f6 atı artık yalnızca şah tarafından korunuyor; vezir şah çekerek onu alacak.',
      diger: [
        { move: '31...Kh6', text: '32.Nxf6 Qc1+ 33.Kf2 Qd2+ 34.Kf3 ve şah kaçar (Motor: +5.4).' },
        { move: '31...Kg8', text: '32.Nxf6+ Kf8 33.Nxh7+ ile mat ağı (Motor: mat).' },
      ],
    },
    '32w': {
      text: '32.Qg5+: vezir g5’ten şah çeker.',
      amac: 'Şahı f6’dan uzaklaştırıp atı şahla almak.',
      neden: 'Şah çekme zorunlu: sessiz bir hamle (32.h3? Qe7) Siyaha veziri e7’ye geri getirme zamanı verir ve Beyaz iki taş eksik kalır (Motor: −6.0). Şah ya f8’e ya h8’e gitmek zorunda; her iki durumda da f6 düşer.',
      diger: [
        { move: '32.h3', text: '32...Qe7 ile Siyah savunmayı kurar ve iki taş fazlası kalır (Motor: −6.0).' },
      ],
    },
    '32b': {
      text: '32...Kf8: şah f8’e gider.',
      amac: 'Şahı e-piyonuna yaklaştırıp e7/e8 karelerine yardım etmek.',
      neden: 'Diğer kare h8 de aynı sonuca götürür (32...Kh8 33.Qxf6+ Kg8, Motor: +5.7). Şah f8’de e7’ye yakın ama Beyaz vezir f6’dan şah çekerek onu g8’e geri gönderecek.',
      diger: [
        { move: '32...Kh8', text: '33.Qxf6+ Kg8 34.Qf7+ Kh8 ile aynı pozisyona döner (Motor: +5.7).' },
      ],
    },
    '33w': {
      text: '33.Qxf6+: vezir f6 atını şahla alır.',
      amac: 'Feda edilen taşlardan birini geri almak ve e-piyonunun önünü açmak.',
      neden: 'Kombinasyonun meyvesi: Beyaz iki taş verdi, birini geri aldı; e-piyonu artık e7’ye yürüyebilir. 33.e7+? Kxe7 ise her şeyi kaybettirir (Motor: −8.4).',
      diger: [
        { move: '33.e7+', text: '33...Kxe7 ile piyon kaybedilir (Motor: −8.4).' },
      ],
    },
    '33b': {
      text: '33...Kg8: şah g8’e döner; tek kare.',
      amac: 'Mattan kaçmak.',
      neden: '33...Ke8 34.Qf7+ Kd8 35.Qd7# ile iki hamlede mat olur. Şah g8’de en azından Siyah vezir şah çekmeye başlayabilir.',
      diger: [
        { move: '33...Ke8', text: '34.Qf7+ Kd8 35.Qd7# (Motor: 2 hamlede mat).' },
      ],
    },
    '34w': {
      text: '34.e7: piyon e8’e vezir olmak üzere.',
      amac: 'e8=Q tehdidiyle Siyahı sürekli şaha mahkûm etmek.',
      neden: 'Winter’ın aktardığına göre Botvinnik burada kombinasyonu sonuna kadar hesaplayamadı; en azından sürekli şahın garanti olduğunu görerek oynadı. Kasparov ve sonraki analizler 34.Qf7+ Kh8 35.g3! ile şahın h3’te saklanacağı daha hızlı bir yolu gösterir (Motor: +5.6, maç hamlesi +5.3). Spectator köşesinde de Sovyet kaynaklarına dayanarak aynı daha hızlı yol anılır.',
      diger: [
        { move: '34.Qf7+', text: '34...Kh8 35.g3! ve Beyaz şahı h3’e saklanır, ardından e7 (Motor: +5.6).' },
        { move: '34.Qg5+', text: '34...Kh8 35.Qf6+ Kg8 36.e7 ile aynı fikre zaman kazanarak döner (Motor: +5.6).' },
      ],
    },
    '34b': {
      text: '34...Qc1+: Siyah şah çekmeye başlar.',
      amac: 'Sürekli şah aramak; tek kurtuluş şansı bu.',
      neden: 'Piyonu durdurmanın başka yolu yok: 34...Qxe7 35.Qxe7 ile vezir gider (Motor: +6.0). 34...Qa1+ da benzer (Motor: +5.9). Şah çekmeler Beyaz şahını açığa çıkarmaya çalışacak.',
      diger: [
        { move: '34...Qxe7', text: '35.Qxe7 ve Beyaz vezirle kazanır (Motor: +6.0).' },
        { move: '34...Qa1+', text: '35.Kf2 Qb2+ 36.Kg3 ile aynı yapı (Motor: +5.9).' },
      ],
    },
    '35w': {
      text: '35.Kf2: şah f2’ye çıkar.',
      amac: 'Şah çekmelerden kaçmak için şahı g3-h4 yönüne yollamak.',
      neden: 'Tek mantıklı kare: 35.Qf1? Qxf1+ 36.Kxf1 Kf7 ile e-piyonu düşer (Motor: −5.3). Beyaz şahı Siyah vezirden uzaklaştırmak için şah kanadına yürüyecek.',
      diger: [
        { move: '35.Qf1', text: '35...Qxf1+ 36.Kxf1 Kf7 ile piyon düşer (Motor: −5.3).' },
      ],
    },
    '35b': {
      text: '35...Qc2+: şah çekmeye devam.',
      amac: 'Beyaz şahını açıkta tutmak ve olası çatallar aramak.',
      neden: '35...Qd2+ (Motor: +6.0) ve 35...Qb2+ (+6.0) da aynı sonuca götürür. Siyah veziri merkezi karelere getirmek ve Nd2+ gibi taktiklere zemin hazırlamak ister.',
      diger: [
        { move: '35...Qd2+', text: '36.Kg3 Qe1+ 37.Kh3 ile şah saklanır (Motor: +6.0).' },
        { move: '35...Qb2+', text: '36.Kg3 Qxc3+ 37.Kh4 (Motor: +6.0).' },
      ],
    },
    '36w': {
      text: '36.Kg3: şah g3’e gider.',
      amac: 'Şahı h4 ve h5’e yaklaştırmak; h5 piyonu ileride şaha siper olacak.',
      neden: 'Doğru yol. 36.Kf1? Nd2+ ile at çatalı tehlikesi doğar (Motor: +2.5), 36.Kg1 ise şah çekmeleri tekrarlar (+5.7). Kg3 şahı Siyah atın erişemeyeceği karelere götürür.',
      diger: [
        { move: '36.Kf1', text: '36...Nd2+ 37.Ke1 Qb1+ ile Siyah karşı oyun kazanır (Motor: +2.5).' },
        { move: '36.Kg1', text: 'Şah çekmeleri tekrarlar (Motor: +5.7).' },
      ],
    },
    '36b': {
      text: '36...Qd3+: şah çeker.',
      amac: 'Veziri merkezde tutup e-hattına (e4) yaklaşmak.',
      neden: 'Motor 36...Qxc3+ (Motor: +5.1–5.9) ile piyon almayı biraz daha dirençli buluyor; o zaman 37.Kh4 Qe1+ 38.Kh3 ile şah yine kaçar. 36...Qg6+ 37.Qxg6+ hxg6 38.e8=Q+ ise vezir değişimiyle kaybeder.',
      diger: [
        { move: '36...Qxc3+', text: '37.Kh4 Qe1+ 38.Kh3 Qe3+ 39.g3 ile şah saklanır (Motor: +5.1).' },
        { move: '36...Qg6+', text: '37.Qxg6+ hxg6 38.e8=Q+ (Motor: +5.9).' },
      ],
    },
    '37w': {
      text: '37.Kh4: şah h4’e yaklaşır.',
      amac: 'h5 piyonunu alıp şahı h5’e, Siyah vezirin şah çekemeyeceği bir yuvaya götürmek.',
      neden: 'Hassas bir an: 37.Kf4? Qe4+ 38.Kg5 Qxg2+ ile Siyah sürekli şah bulur (Motor: 0.00). 37.Kf2 tekrara gider (+5.9). Kh4 tek kazandıran yol (Motor: +7.2).',
      diger: [
        { move: '37.Kf4', text: '37...Qe4+ 38.Kg5 Qxg2+ ile sürekli şah (Motor: 0.00).' },
        { move: '37.Kf2', text: 'Geri dönüş; şah çekmeler tekrarlanır (Motor: +5.9).' },
      ],
    },
    '37b': {
      text: '37...Qe4+: şah çeker ve e-piyonuna bakar.',
      amac: 'Veziri e-hattına getirip e7 piyonunu durdurmaya hazır olmak.',
      neden: 'Diğer şahlar hemen kaybettirir: 37...Qxd4+? 38.cxd4 ve 3 hamlede mat, 37...Qg3+? 38.hxg3 (mat). Vezir e4’te hem şah çeker hem e7’yi gözetler.',
      diger: [
        { move: '37...Qxd4+', text: '38.cxd4 h6 39.e8=Q+ ve mat (Motor: 3 hamlede mat).' },
        { move: '37...Qg3+', text: '38.hxg3 h6 39.Qg6+ ve mat (Motor: 3 hamlede mat).' },
      ],
    },
    '38w': {
      text: '38.Kxh5: şah h5 piyonunu alır.',
      amac: 'Şah çekmelere karşı yeni bir yuva bulmak ve Siyahın piyon siperini azaltmak.',
      neden: 'Yanlış kareler beraberlik verirdi: 38.Kg5? Qxg2+ ve 38.Kg3? Qg4+ (Motor: 0.00). h5’teki şah ileride g4 piyonu ile korunacak. Motor: 38.Kxh5 +7.9.',
      diger: [
        { move: '38.Kg5', text: '38...Qxg2+ 39.Kh6 Qd2+ ile sürekli şah (Motor: 0.00).' },
        { move: '38.Kg3', text: '38...Qg4+ 39.Kf2 Qc8 ile Siyah piyonu durdurur (Motor: 0.00).' },
      ],
    },
    '38b': {
      text: '38...Qe2+: şah çeker.',
      amac: 'Şah çekmeleri sürdürmek ve tekrar umudu yaratmak.',
      neden: 'Motor burada mat görüyor. 38...h6 39.Qg6+ Kh8 40.e8=Q+ ve 6 hamlede mat; 38...Qxe7 39.Qxe7 ile vezir değişimi de kaybettirir (Motor: +6.3). Şah çekmek en uzun direniş.',
      diger: [
        { move: '38...h6', text: '39.Qg6+ Kh8 40.e8=Q+ ve mat (Motor: 6 hamlede mat).' },
        { move: '38...Qxe7', text: '39.Qxe7 Nxd4 ile at ve piyonlar vezire karşı yetersiz (Motor: +6.3).' },
      ],
    },
    '39w': {
      text: '39.Kh4: şah h4’e döner.',
      amac: 'Şah çekmelerden kaçmak ve g4 ile siper kurmaya hazırlanmak.',
      neden: '39.g4? Qxh2+ 40.Kg5 Qd2+ ile Siyah şah çekmeye devam eder (Motor: +5.4); 39.Kh6 da kazanır ama daha uzun. Kh4 ile Beyaz g4 hamlesine hazırlanır.',
      diger: [
        { move: '39.g4', text: '39...Qxh2+ 40.Kg5 Qd2+ ile şahlar sürer (Motor: +5.4).' },
        { move: '39.Kh6', text: '39...Qd2+ 40.Kh5 Qe2+ ile şah çekmeler biraz uzar (Motor: mat, daha uzun).' },
      ],
    },
    '39b': {
      text: '39...Qe4+: şah çeker.',
      amac: 'Şah çekmeleri sürdürmek.',
      neden: '39...Qe1+ (Motor: mat) ve 39...h6 40.Qg6+ (Macdonald’ın notlarında da mat çizgisi) da kaybeder. Siyahın elinde başka kaynak yok.',
      diger: [
        { move: '39...h6', text: '40.Qg6+ Kh8 41.e8=Q+ ve mat (Motor: mat).' },
        { move: '39...Qe1+', text: '40.g3 Qe4+ 41.g4 ile aynı sonuç (Motor: mat).' },
      ],
    },
    '40w': {
      text: '40.g4: g-piyonu şah çekmeyi keser.',
      amac: 'Piyonu siper olarak kullanıp şahı h5’e yerleştirmek.',
      neden: 'g4 piyonu e4-h4 çaprazını kapatır ve h5’teki şahı korur. 40.Kg3 ise şah çekmeleri uzatır (Motor: +5.7). Bu hamleyle Beyaz şahı güvenli yuvasına kavuşuyor.',
      diger: [
        { move: '40.Kg3', text: '40...h5 41.Qf8+ Kh7 ile Siyah biraz daha direnir (Motor: +5.7).' },
        { move: '40.Kh5', text: '40...Qe2+ 41.Kh4 ile tekrar (Motor: mat, daha uzun).' },
      ],
    },
    '40b': {
      text: '40...Qe1+: son şah.',
      amac: 'Son bir şahla Beyaz şahını h5’e gitmeye zorlamak ve bir hile aramak.',
      neden: '40...h5 41.Kxh5 (veya Macdonald’ın gösterdiği 41.Kg5) ve mat; 40...h6 41.Kh5 ile aynı sonuç. Capablanca son bir şah çekti.',
      diger: [
        { move: '40...h5', text: '41.Qf8+ Kh7 42.Qf7+ Kh6 43.Qxh5+ (Motor: +6.6).' },
        { move: '40...h6', text: '41.Kh5 Nc5 42.Qf8+ Kh7 ve mat (Motor: mat).' },
      ],
    },
    '41w': {
      text: '41.Kh5: şah h5’e saklanır. Capablanca terk etti.',
      amac: 'Şah çekmeleri sona erdirmek; Qf8 matı ve e8=Q tehditleri bir arada.',
      neden: 'Siyahın artık şahı yok. 41...Qxe7 42.Qxe7 ve 41...h6 42.Qg6+ Kh8 43.e8=Q+ ikisi de mat (Motor: 6 hamlede mat). 41.Kg5 Qd2+ ile şahlar sürerdi (Motor: +6.0). Spectator köşesine göre Capablanca’nın eşi daha sonra onun üzgün olmadığını, bunun gerçek bir zihin savaşı olduğunu söylemiş.',
      diger: [
        { move: '41.Kg5', text: '41...Qd2+ 42.Kh5 Qxh2+ ile şahlar sürer (Motor: +6.0).' },
        { move: '41.Kh3', text: '41...Qxe7 42.Qxe7 Nxd4 (Motor: +6.0).' },
      ],
    },
  },
  qa: [
    { q: 'Beyaz neden 5.a3 ile ikiye katlanmış piyonları kendi isteğiyle kabul etti?', a: 'Karşılığında fil çifti ve sağlam bir merkez aldı. 7.cxd5 ile c4 piyonu değişti, c3 ise d4’ü korumaya devam etti; böylece ikiye katlanmışlık pratikte zararsız hale geldi. Asıl kazanç, b-hattının açılması ve f3-e4 ile merkezde piyon çoğunluğunu yürütme imkânıydı (Motor: açılış sonrası yaklaşık +0.2).' },
    { q: 'Botvinnik atını neden f3 yerine e2’ye geliştirdi?', a: 'f-piyonunu serbest bırakmak için. Planı f3 ve e4 idi; at f3’te olsaydı bu imkânsız olurdu. Sadler bu ayrıntıyı oyunun anahtarlarından biri sayar. Motor da 9.Nf3’ü 9...c4 10.Bc2 Ne4 yüzünden Siyah lehine görüyor (Motor: −0.7), 9.Ne2 ise +0.3.' },
    { q: '14...c4 gerçekten hata mıydı?', a: 'Kaynaklar ayrışıyor. Kasparov bunu ciddi bir konumsal hata sayar: d4’e baskı kalmaz ve Beyazın e4 planı serbestleşir; Botvinnik 14...Qb7’yi önerdi. Sadler ise hamlenin alan kazandığını ve b2 filini kapattığını, tek başına felaket olmadığını yazar. Motor 14...c4’ü o an en iyi hamle gösteriyor (Motor: −0.3, 14...Qb7 0.0). Asıl sorun sonrasındaki planın merkezi ihmal etmesiydi.' },
    { q: 'Siyah nerede yanlış yola girdi?', a: 'Motor dönüm noktası olarak 17...Na5’i görüyor. 17...Ne4! ile e4 karesini taşla kapatsaydı Beyazın f3-e4 planı işlemezdi (Motor: +0.2). At a5-b3’e gidince merkez savunmasız kaldı ve 18.f3 sonrası değerlendirme +1.7’ye çıktı. 15...Nb8 (yerine 15...Nc7) de küçük bir zaman kaybıydı.' },
    { q: 'Botvinnik a4 piyonunu neden korumadı?', a: 'Korumak tempo kaybıydı ve Siyaha merkezi tıkama zamanı verirdi (19.Re2, Motor: +1.0). 19.e4! ile merkezi açınca Siyah vezir a4’e gitti, yani şahından en uzak noktaya. 20.e5 ile f6 atı kovuldu ve Beyaz şah kanadında taş üstünlüğü kurdu (Motor: 19.e4 +1.7).' },
    { q: 'Geçer e-piyonu nasıl doğdu?', a: 'Değişimlerle. 23.exf6 Nxf6 24.f5 ile f-piyonu g6’ya saldırdı; 24...Rxe1 25.Rxe1 Re8 26.Re6! Rxe6 27.fxe6 ile f-piyonu e6’ya geçti. e6’daki piyon e7 ve e8 karelerini hedefler, Siyahın vezir, şah ve atını savunmaya bağlar.' },
    { q: '30.Ba3 neden çalışıyor?', a: 'Siyah vezir e7’de iki iş yapıyordu: e-piyonunu tıkamak ve f6 atını korumak. 30.Ba3 veziri saptırır; 30...Qxa3 sonrası 31.Nh5+! gxh5 ile g6 piyonu da saptırılır ve f6 atının son koruyucusu gider. 32.Qg5+ Kf8 33.Qxf6+ Kg8 34.e7 ile piyon vezire çıkmak üzeredir (Motor: 30.Ba3 +4.7).' },
    { q: 'Siyah 29. hamlede nasıl savunabilirdi?', a: 'Şaha kaçış karesi açarak: 29...h5 (Motor: +1.6) veya Goldin’in önerdiği 29...h6 (+2.0). O zaman Nh5+ fikri ortadan kalkar ve 30.Ba3’e 30...Qd8! ile cevap verilebilir (Motor: +1.6). Beyaz yine üstün ama kesin bir kombinasyon yok.' },
    { q: 'Botvinnik kombinasyonu baştan sona hesapladı mı?', a: 'Hayır. Edward Winter’ın aktardığına göre Botvinnik kendi kitabında kombinasyonu sonuna kadar hesaplayamadığını, birkaç hamle sonrasını değerlendirip en azından sürekli şahın garanti olduğunu görünce oynadığını yazar; geri kalanını sonradan hesapladı. Bazı yazarların “her şeyi önceden gördü” iddiasını Winter bu notlarla çürütür.' },
    { q: 'Şah çekmelerden kaçarken nerede tehlike vardı?', a: 'Beyaz şahı f2-g3-h4-h5 yolunu tam isabetle izlemek zorundaydı. 37.Kf4? Qe4+ 38.Kg5 Qxg2+ veya 38.Kg5? Qxg2+ sürekli şaha giderdi (Motor: 0.00). 40.g4 ile piyon siper oldu ve 41.Kh5 ile şahlar bitti. Kasparov’un 34.Qf7+ Kh8 35.g3! önerisi şahı h3’te saklayarak işi daha kısa çözüyordu.' },
  ],
  sources: [
    { title: 'Wikipedia: Botvinnik versus Capablanca, AVRO 1938', url: 'https://en.wikipedia.org/wiki/Botvinnik_versus_Capablanca,_AVRO_1938' },
    { title: 'Matthew Sadler: Hidden dynamic factors', url: 'https://matthewsadler.me.uk/chess-for-life/hidden-dynamic-factors/' },
    { title: 'Lubomir Kavalek (HuffPost): The adventures of Soviet chess', url: 'https://www.huffingtonpost.com/lubomir-kavalek/the-adventures-of-soviet_b_4847707.html' },
    { title: 'Edward Winter: AVRO, 1938', url: 'https://chesshistory.com/winter/extra/avro.html' },
    { title: 'Blind-Chess listesi: Annotated Game #140 (R.J. Macdonald notları)', url: 'https://www.freelists.org/post/blind-chess/Annotated-Game-140-Mikhail-Botvinnik-Jose-Raul-Capablanca-Amsterdam-1938' },
    { title: 'ChessBase: AVRO 1938, Round 11 – Botvinnik’s masterpiece', url: 'https://en.chessbase.com/newsroom/post/avro-1938-round-11-botvinnik-masterpiece?page=0' },
    { title: 'ChessBase: 79 years ago – Capablanca beats Botvinnik (Soltis notları)', url: 'https://en.chessbase.com/post/79-years-ago-capablanca-beats-botvinnik' },
    { title: 'Lichess blog: Botvinnik versus Capablanca, AVRO 1938', url: 'https://lichess.org/@/NaidichArkasha/blog/botvinnik-versus-capablanca-avro-1938-the-immortal-game/oqHaAg2w' },
    { title: 'The Spectator (1985): Chess – David Spanier', url: 'https://archive.spectator.co.uk/article/24th-august-1985/36/chess' },
    { title: 'Wikipedia: Nimzo-Indian Defence', url: 'https://en.wikipedia.org/wiki/Nimzo-Indian_Defence' },
  ],
  exercises: [
    { id: 'bc-1', kind: 'tekrar', plan: false, title: 'f5 ile hat açmak',
      source: 'Botvinnik – Capablanca, AVRO 1938 (24. hamle)',
      fen: 'r3r1k1/p6p/1p3np1/3p4/q1pP1P2/1nP3N1/1B3QPP/4RRK1 w - - 0 24',
      prompt: 'Beyazın piyonları merkezde ilerledi, Siyah ise a4’ü aldı. Şimdi şah kanadında hat açacak hamle hangisi?',
      hint: 'f-piyonu ilerleyebilir; e-hattındaki kale değişiminden sonra piyon e6’ya geçecek.',
      line: ['f5'],
      explanation: '**24.f5!** Piyon g6’ya saldırır; kaleler değiştikten sonra f-piyonu e6’ya geçip geçer piyon olur. Motor: f5 +1.7, sonraki en iyi hamle 0.0.',
      link: 'İkiye katlanmış piyonlu taraf vezir kanadında piyon verdi ama merkez ve şah kanadında zaman kazandı.' },
    { id: 'bc-2', kind: 'tekrar', plan: false, title: 'Ba3!! kombinasyonu',
      source: 'Botvinnik – Capablanca, AVRO 1938 (30. hamle)',
      fen: '8/p3q1kp/1p2Pnp1/3pQ3/2pP4/1nP3N1/1B4PP/6K1 w - - 5 30',
      prompt: 'Ünlü an. Beyazın e6’da geçer piyonu var, Siyahın veziri e7’de onu durduruyor. Kombinasyonu baştan sona oynayın.',
      hint: 'Veziri e7’den uzaklaştırın, sonra f6 atının koruyucusunu yok edin.',
      line: ['Ba3', 'Qxa3', 'Nh5+', 'gxh5', 'Qg5+', 'Kf8', 'Qxf6+'],
      explanation: '**30.Ba3!! Qxa3 31.Nh5+! gxh5 32.Qg5+ Kf8 33.Qxf6+** ve e-piyonu vezire çıkar. Motor 30.Ba3’ü +4.6 ile en iyi hamle görüyor; ikinci en iyi 30.h4 +2.6.',
      link: 'Geçer piyonun önündeki kareyi tutan taşı uzaklaştırmak kombinasyonun özüdür.' },
    { id: 'bc-3', kind: 'transfer', plan: false, title: 'Sämisch’te e5 kırılması',
      source: 'Lilienthal – Smislov, Pärnu 1947 (23. hamle)',
      fen: 'r4r1k/p4qpp/1p3p2/n1pN4/2P1P1Q1/2P5/6PP/R4RK1 w - - 0 23',
      prompt: 'Sämisch yapısı: Beyazın c-piyonları ikiye katlanmış, atı d5’te güçlü. Siyah f6 piyonuyla merkezi tutuyor. Beyaz hatları nasıl açar?',
      hint: 'e-piyonu f6’ya saldırabilir.',
      line: ['e5'],
      explanation: '**23.e5!** Piyon f6’ya saldırır; exf6 ile f-hattı Beyaz kaleleri için açılır. Motor: e5 +0.4, sonraki en iyi hamle −1.7.',
      link: 'Botvinnik de e4-e5 ile f6 atını kovalayıp f-piyonunu ilerletti. İki maçta da ikiye katlanmış c-piyonlarının telafisi merkezdeki piyon ilerleyişi.' },
    { id: 'bc-4', kind: 'transfer', plan: false, title: 'e6’nın savunucusunu almak',
      source: 'Lilienthal – Smislov, Pärnu 1947 (27. hamle)',
      fen: '4r2k/p4qpp/1p2r3/n1p1Pp2/2P2N2/2P5/4Q1PP/4RRK1 w - - 6 27',
      prompt: 'Beyazın e5 piyonu ve f4 atı Siyahın e6 kalesine baskı yapıyor. Beyazın en güçlü hamlesi hangisi?',
      hint: 'e6’daki kale atla alınabilir.',
      line: ['Nxe6'],
      explanation: '**27.Nxe6!** At kaleyi alır; Beyaz kalite kazanır ve e5 piyonu güçlü bir geçer piyona dönüşür. Motor: Nxe6 +2.3, sonraki en iyi hamle +0.9.',
      link: 'Botvinnik’in maçında e6’ya ulaşan piyon kombinasyonu getirdi; Lilienthal’ın maçında e6 karesindeki taş alındı. Her ikisinde de e6 karesi kilit nokta.' },
  ],
};
