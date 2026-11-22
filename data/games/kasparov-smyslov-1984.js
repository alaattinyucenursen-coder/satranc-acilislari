// Kasparov – Smislov, Adaylar finali, Vilnius 1984 (3. oyun). Kaynak: PgnMentor (Kasparov.pgn).
export default {
  id: 'kasparov-smyslov-1984',
  theme: 'Cambridge Springs: asılı piyonlarla ilerleme',
  white: 'Garri Kasparov', black: 'Vasili Smislov',
  whiteShort: 'Kasparov', blackShort: 'Smislov',
  event: 'Adaylar finali, 3. oyun', site: 'Vilnius', year: 1984, eco: 'D52',
  variation: 'Vezir Gambiti Reddi, Cambridge Springs Savunması', result: '1-0',
  pgn: `1. d4 d5 2. Nf3 Nf6 3. c4 c6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. cxd5 Nxd5 8. Qd2 Bb4 9. Rc1 O-O 10. Bd3 e5 11. O-O exd4 12. exd4 f6 13. Bh4 Rd8 14. a3 Bxc3 15. bxc3 Nf8 16. Bg3 Be6 17. Rfe1 Bf7 18. c4 Qxd2 19. Nxd2 Nb6 20. Nb3 Na4 21. Bf1 Rd7 22. Na5 Ne6 23. d5 Nd4 24. dxc6 Nxc6 25. Nxc6 bxc6 26. c5 Re8 27. Rxe8+ Bxe8 28. Bd6 Bf7 29. Rb1 Bd5 30. Rb8+ Kf7 31. Rf8+ Ke6 32. g3 g6 33. Ba6 Rxd6 34. cxd6 Kxd6 35. Rxf6+ Ke5 36. Rf8 c5 37. Re8+ Kd4 38. Rd8 Ke5 39. f4+ Ke4 40. Bf1 Bb3 41. Kf2 Nb2 1-0`,

  summary: '1984 Adaylar finalinin 3. oyununda 63 yaşındaki eski dünya şampiyonu Smislov, 20 yaşındaki Kasparov’a karşı Yarı Slav sırasından eski Cambridge Springs Savunmasına (6...Qa5) geçti. Kasparov 7.cxd5 ve Alekhine’in 8.Qd2 kurulumunu seçti; Smislov 10...e5 ile merkezi açınca Beyaz önce c3–d4, sonra 18.c4 ile c4–d4 **asılı piyonlarıyla** kaldı. Vezirler değişildi ve oyun piyon yapısı ile fil çifti üzerine dönen bir oyunsonuna dönüştü. Kasparov piyonlarını pasif savunmak yerine ilerletti: 23.d5! ile c6’yı kırdı, 26.c5! ile d6 karesini ve Siyahın a4 atının dönüş yolunu (c5) kapattı, 28.Bd6 ile filini bu karakola oturttu. Smislov 29...Bd5 ve 32...g6 ile kesin hatalar yaptı; Kasparov da 32.g3 ile bir tempo kaybetti ama 33.Ba6! ile c8 üzerinden kale bağlama tehdidiyle kaliteyi aldı. Kale ve fil, at ve file karşı şahı açıkta kalan Siyahı 41. hamlede terk ettirdi. Bu galibiyetle Kasparov maçta öne geçti ve sonunda Karpov’a rakip oldu.',
  intro: 'Siyah 6...Qa5 ile Cambridge Springs Savunmasını seçiyor. Adı 1904’teki Cambridge Springs (ABD) turnuvasından gelir; 1927’de Alekhine, Capablanca’ya karşı dünya şampiyonası maçında bu savunmayı defalarca kullanmıştı. Vezir a5’te iki iş görür: c3 atını Beyaz şaha bağlar ve g5 filinin f6 atı üzerindeki bağlamasının etkisini azaltır, çünkü ...Ne4 ya da ...dxc4 gibi hamlelerle g5 filine de dolaylı baskı yapılabilir. Kasparov bu taktik oyunu 7.cxd5 ve 8.Qd2 ile söndürdü; asıl mücadele merkezde açılan piyon yapısında, asılı piyonların ilerleyip ilerleyemeyeceğinde geçti.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Açılış:** 7.cxd5 ve 8.Qd2 ile c3’teki bağlamayı ve g5 filine yönelik ...Ne4/...dxc4 taktiklerini etkisiz kılmak; 9.Rc1 ile c3’ü ikinci kez korumak ve rok için zaman kazanmak.',
      '**Merkez açılınca:** ...e5 ve ...exd4’ten sonra d4’te tek kalan piyonu taşlarla desteklemek; a3 ile b4 filini c3 atına değiştirmeye zorlayıp **fil çiftini** elde etmek.',
      '**Yapıyı dönüştürmek:** 18.c4 ile c3–d4 ikilisini c4–d4 asılı piyonlarına çevirmek; vezirler değişse bile fil çiftinin ve merkez alanının oyunsonunda değer taşıdığına güvenmek.',
      '**İlerleme:** Siyahın atları d4’e baskı kurunca piyonu savunmak yerine **23.d5!** ile kırmak; dxc6 sonrası **26.c5!** ile c6 zayıflığını sabitlemek ve d6 karesini fil için karakol yapmak.',
      '**Hatları ele geçirmek:** e-hattında kale değişip b-hattını almak; Rb8+ ve Rf8+ ile kaleyi Siyahın birinci yatayına sokup şahı açığa çıkarmak.',
      '**Taktik bitiriş:** a6–c8 çaprazını kullanarak (33.Ba6!) d7 kalesini şaha bağlamakla tehdit etmek ve kaliteyi kazanmak.',
      '**Oyunsonu:** Kale ve fille Siyahın açıktaki şahını kovalamak (Re8+, Rd8, f4+), Siyah taşlarını kenara (a4, b3, b2) itmek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...Qa5 ve ...Bb4** ile c3 atına üçlü baskı; Beyazı savunmaya zorlayıp gelişimini yavaşlatmak.',
      '**...e5** ile Yarı Slav yapısının ana derdi olan c8 filini serbest bırakmak ve merkezi açmak.',
      '...f6 ile g5 filini kovup ...Nf8, ...Be6–f7 manevralarıyla taşları yeniden düzenlemek; e6 ve d5 karelerini tutmak.',
      'Beyazın tek d4 piyonuna, sonra c4–d4 asılı piyonlarına **...Rd8, ...Nb6, ...Ne6** ile baskı yapmak.',
      'Vezirleri değişip piyon yapısının zayıflıklarına dayalı, Smislov’un ustası olduğu sakin bir oyunsonu oynamak.',
      'Atları ileri karelere (a4, d4) yerleştirmek; ama bunu yaparken atların merkezden kopmamasına dikkat etmek (oyunda a4 atı c5’ten dönemeyince sorun çıktı).',
      'Kale ve fili birinci yatayın savunmasına bağlı tutmak; oyunda 29...Bd5 ile bu denge bozuldu.',
    ] },
  },
  critical: [
    { move: '6b', title: 'Cambridge Springs: 6...Qa5', text: 'Vezir a5’te c3 atını şaha bağlar ve g5 filinin f6 atına yaptığı bağlamayı da sorgular: ...Ne4 ya da ...dxc4 sonrası g5 filine ...Qxg5 ile dolaylı saldırı imkânı doğar. Christian Science Monitor’ün maç notlarına göre Smislov, Kasparov’un çok iyi bildiği 5...dxc4 hatlarından kaçınıp bu “eski” savunmayı seçti. Motor: +0.33, yani tamamen oynanabilir bir savunma.' },
    { move: '9b', title: '9...O-O ve 9. oyundaki düzeltme', text: 'Smislov rok yaptı; motor 9...h6 ya da 9...Nxc3’ü (Motor: +0.24) hafifçe daha iyi buluyor, 9...O-O ise +0.58. Aynı açılış 9. oyunda da tekrarlandı; Kasparov’un o oyuna ait notlarında Smislov’un 9...e5 ile bu oyundaki 9...O-O’yu düzeltmeye çalıştığı, ana hattın ise 9...h6 olduğu yazıyor. Yani 3. oyunda Smislov açılıştan tam eşitlikle çıkamamıştı.' },
    { move: '15w', title: 'bxc3: asılı piyonlara doğru', text: 'Fil değişiminden sonra Beyazın c3 ve d4 piyonları kaldı ve fil çifti Beyazın eline geçti. Siyah 15...Qxa3 ile piyon alabilirdi ama 16.c4! ve c5 tehditleriyle vezir tuzağa yaklaşır (Motor: +1.14); CSM notu da bu alımı “riskli” buluyor. Smislov bunun yerine 15...Nf8 ile atını yeniden düzenledi.' },
    { move: '18w', title: '18.c4: bilinçli dönüşüm', text: 'Kasparov c-piyonunu c4’e sürerek d5 atını kovdu ama vezir değişimine izin verdi. Motor bu anı Beyazın en zayıf hamlesi sayıyor: 18.Qb2 +0.75 iken 18.c4 +0.08. Asılı piyonlar vezirsiz oyunsonunda genellikle yük olur; Kasparov ise fil çiftine ve piyonları ilerletme şansına güvendi. Sonraki hamlelerde Siyahın küçük yanlışları (20...Na4, 22...Ne6) bu kararı haklı çıkardı.' },
    { move: '23w', title: '23.d5! piyonlar ilerliyor', text: 'Siyahın iki atı (a4 ve e6) ve d7 kalesi d4’e baskı kurmuşken Kasparov piyonu savunmak yerine ilerletti. 23.d5 hem c6’yı hem e6 atını vurur; dxc6 sonrası c-piyonu c5’e çıkıp c6’daki yeni zayıflığı sabitleyecek. Motor: d5 +1.06; en yakın alternatif 23.Rb1 +0.34, pasif 23.Nb3 ise −0.39. Bu, “asılı piyonların sahibi için en iyi savunma ilerlemektir” kuralının ders kitabı örneği.' },
    { move: '26w', title: '26.c5!: d6 karesi ve hapsedilen at', text: 'c5 piyonu c6’yı geri kalmış piyon olarak dondurur, d6 karesini fil için karakol yapar ve a4 atının c5 üzerinden oyuna dönmesini engeller. CSM notu tam da bu iki noktayı vurguluyor. Motor: c5 +1.13, 26.f3 ise yalnızca +0.29.' },
    { move: '29b', title: '29...Bd5? birinci yatay boşaldı', text: 'Smislov filini d5’e getirdi ama b8 karesini ve birinci yatayı savunmasız bıraktı: 30.Rb8+ ve 31.Rf8+ ile Beyaz kalesi Siyah şahının arkasına girdi. Doğrusu 29...Rd8’di (Motor: +1.26); oyundaki hamle +2.07. The Spectator’ın satranç köşesine göre uzmanlar bu anda zaten Beyazı fil çifti, b-hattı, alan ve saat avantajı nedeniyle üstün görüyordu.' },
    { move: '33w', title: '33.Ba6! kalite kazancı', text: 'Fil c8’e gelip d7 kalesini e6’daki şaha bağlamakla tehdit eder; kale d6 filini de tutmak zorunda. 33...Rf7 34.Bc8+ Rd7 35.Re8+ ile kale düşer (Motor: +5.9), bu yüzden Smislov 33...Rxd6 ile kaliteyi verdi. Kasparov bu darbeyi bir hamle önce de vurabilirdi: 32.Ba6 +2.97 iken 32.g3 +1.41. CSM, Smislov’un 31. ve 32. hamledeki hatalarını kısmen zaman sıkıntısına bağlıyor.' },
  ],
  lessons: [
    'Asılı piyonların sahibi için en iyi savunma çoğu zaman **ilerlemektir**: 23.d5 rakibin taş baskısını boşa çıkardı ve onun piyon yapısını (c6) bozdu.',
    'Piyon ilerledikten sonra arkasında kalan kareler (burada d6) bir fil için ideal karakol olur; c5 piyonu hem d6’yı destekledi hem de a4 atının dönüş yolunu kesti.',
    '**Fil çifti** vezirsiz, açılmış oyunda iki kanadı birden kontrol eder; Kasparov 18.c4 ile vezirlerin değişmesine bu yüzden razı oldu.',
    'Kenara giden at (…Na4) uzun süre oyundan kopabilir: c5 karesi kapanınca a4 atı 30 hamle boyunca neredeyse hiçbir şey yapamadı.',
    '**Birinci yatay** oyunsonunda da önemlidir: 29...Bd5 ile b8 karesi boşalınca Beyaz kalesi Rb8+ ve Rf8+ ile şahın arkasına girdi.',
    'Bağlama tehdidi (Ba6–c8) kalite kazanmanın en kısa yoludur; açık çaprazlar ve açıkta kalmış şah bu tür tehditleri doğurur.',
    'Avantajlı tarafın da kusursuz oynaması gerekmez: Kasparov 32.g3 ile bir tempo kaybetti ama doğru yapı kararları (d5, c5, Bd6) rakibi sürekli zor sorularla karşı karşıya bıraktı.',
  ],
  notes: {
    '1w': {
      text: 'Kasparov vezir piyonuyla başlar; maçta Beyazla genellikle 1.d4 oynuyordu.',
      amac: 'Merkezde e5 ve c5 karelerini kontrol etmek, c4 ile Vezir Gambiti yapısına geçmek.',
      neden: '1.d4, Smislov’un sağlam Slav ve Vezir Gambiti savunmalarına karşı uzun, konumsal bir mücadele vaat eder; genç Kasparov’un bu maçta keskin taktikler yerine konumsal baskıya ağırlık verdiği yazılmıştır.',
      diger: [
        { move: '1.e4', text: 'Motor bunu çok az farkla daha iyi buluyor (Motor: +0.39), ama Smislov’un açık oyunlardaki deneyimi düşünülünce Kasparov bildiği yapıları tercih etti.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.16); oyunda olduğu gibi çoğu zaman aynı yapılara döner.' },
      ],
    },
    '1b': {
      text: 'Smislov simetrik cevap verir ve d5 piyonuyla merkezde yer tutar.',
      amac: 'e4 karesini kontrol etmek ve klasik Vezir Gambiti/Slav yapısına girmek.',
      neden: 'Smislov hayatı boyunca 1...d5 savunmalarıyla oynamış, klasik yapıları seven bir oyuncuydu; keskin Hint savunmaları yerine sağlam merkez tercih eder.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına kapı açar (Motor: +0.32); oyunda da 2...Nf6 ile benzer yapılara dönülecek.' },
      ],
    },
    '2w': {
      text: 'At f3’e çıkar; c4 bir hamle sonraya kalır.',
      amac: 'Gelişirken e5 karesini kontrol etmek ve Siyahın bazı keskin cevaplarını (ör. Albin Karşı Gambiti 2.c4 e5) baştan engellemek.',
      neden: 'Önce Nf3 oynamak hamle sırasını esnek tutar; Siyahın ...e5 gibi kırılmaları zorlaşır ve Beyaz c4’ü istediği an ekler.',
      diger: [
        { move: '2.c4', text: 'Doğrudan Vezir Gambiti (Motor: +0.32); 2...e5 Albin Karşı Gambiti gibi seçenekleri de Siyaha bırakır.' },
        { move: '2.Bf4', text: 'Londra Sistemi tarzı sakin bir kurulum; c4 baskısı olmadığı için Siyah rahat eşitler.' },
      ],
    },
    '2b': {
      text: 'Siyah da atını f6’ya çıkarır.',
      amac: 'e4’ü kontrol etmek ve gelişmek; hangi savunmaya (Slav, Vezir Gambiti Reddi) gireceğini henüz göstermemek.',
      neden: 'Esnek bir hamle: ...c6 ve ...e6 kararlarını Beyazın c4 ve Nc3 kararlarından sonraya bırakır.',
      diger: [
        { move: '2...e6', text: 'Klasik Vezir Gambiti Reddi yönü (Motor: +0.36); c8 filini kapatır.' },
        { move: '2...c6', text: 'Doğrudan Slav sırası (Motor: +0.41); oyunda iki hamle sonra aynı yapı oluşacak.' },
      ],
    },
    '3w': {
      text: 'Vezir Gambiti: c4 ile d5 piyonuna baskı yapılır.',
      amac: 'Siyahın merkezdeki d5 piyonunu sorgulamak; c-hattını açmaya hazırlanmak.',
      neden: '1.d4 açılışlarında merkezde üstünlük için c4 temel kırılmadır; Nf3 zaten oynandığı için Siyahın ...e5 kontra hamleleri yok.',
      diger: [
        { move: '3.g3', text: 'Katalan tarzı bir kurulum (Motor: +0.16); daha yavaş ve Siyaha ...c5 ile rahatlama şansı verir.' },
        { move: '3.Bf4', text: 'Londra kurulumu (Motor: +0.09); Siyah sorunsuz eşitler.' },
      ],
    },
    '3b': {
      text: '...c6: Slav Savunması yapısı.',
      amac: 'd5 piyonunu c6 ile desteklemek; c8 filini kapatmadan merkezi sağlam tutmak.',
      neden: 'Slav, d5’i piyonla destekleyip ...e6’yı geciktirerek filin çıkış şansını korur; Smislov ise bir hamle sonra ...e6 ile Yarı Slav’a geçecek.',
      diger: [
        { move: '3...e6', text: 'Vezir Gambiti Reddi (Motor: +0.31); 4.g3 Katalan ya da 4.Nc3 klasik yapılar.' },
        { move: '3...dxc4', text: 'Vezir Gambiti Kabulü (Motor: +0.33); Siyah merkezi bırakıp hızlı gelişime oynar.' },
      ],
    },
    '4w': {
      text: 'At c3’e çıkar ve d5’e baskıyı artırır.',
      amac: 'Merkezi kontrol etmek ve e4 kırılmasını hazırlamak.',
      neden: 'Ana hat. Nc3 aynı zamanda Siyahın ...dxc4 sonrası a4 ve e4 planlarını mümkün kılar.',
      diger: [
        { move: '4.e3', text: 'Daha sakin (Motor: +0.27); 4...Bf5 ile Siyahın fili rahatça dışarı çıkar.' },
        { move: '4.cxd5', text: 'Değişim Slav’ı (Motor: +0.32); simetrik ve beraberliğe yakın bir yapı.' },
      ],
    },
    '4b': {
      text: '...e6 ile Yarı Slav kurulumu: d5 iki piyonla desteklenir.',
      amac: 'Merkezi çok sağlam tutmak; c8 filini sonra ...dxc4 ve ...b5 ya da ...e5 ile serbest bırakmak.',
      neden: 'Smislov ana Slav’ın (4...dxc4) keskin hatları yerine sağlam ve esnek bir yapıyı tercih etti; bunun bedeli c8 filinin bir süre kapalı kalmasıdır.',
      diger: [
        { move: '4...dxc4', text: 'Ana Slav (Motor: +0.29); 5.a4 Bf5 ile piyonu geri almaya çalışan Beyaza karşı keskin bir oyun.' },
        { move: '4...g6', text: 'Schlechter Varyantı (Motor: +0.47); daha nadir ve pasif.' },
      ],
    },
    '5w': {
      text: '5.Bg5: fil f6 atını bağlar.',
      amac: 'f6 atının d5’e verdiği desteği zayıflatmak ve Siyahı hemen bir karar vermeye zorlamak.',
      neden: '5.e3 (Meran) daha sakin bir yoldur; 5.Bg5 ise Siyahı ya 5...dxc4 ile keskin Botvinnik Sistemine ya 5...h6 ile Moskova Varyantına ya da 5...Nbd7 ile Vezir Gambiti Reddi yapılarına yöneltir.',
      diger: [
        { move: '5.e3', text: 'Meran sistemlerine götürür (Motor: +0.31); 5...Nbd7 6.Bd3 dxc4 7.Bxc4 b5.' },
        { move: '5.cxd5', text: 'Değişim yapısı (Motor: +0.19); Beyazın avantajı küçük kalır.' },
      ],
    },
    '5b': {
      text: '...Nbd7: at d7’ye çıkar, f6 atını destekler.',
      amac: 'Bağlamayı yumuşatmak ve ...Qa5 ile Cambridge Springs’e ya da ...Be7 ile Ortodoks savunmaya geçmek.',
      neden: 'Christian Science Monitor’ün notuna göre Smislov burada Kasparov’un iyi bildiği 5...dxc4 ile başlayan keskin sistemden bilerek kaçındı; tecrübeli Smislov hazırlanmış bir rakibe karşı teoriye girmek istemedi.',
      diger: [
        { move: '5...dxc4', text: 'Botvinnik Sistemi: 6.e4 b5 7.e5 h6 8.Bh4 g5 ile çok keskin, ezber gerektiren hatlar.' },
        { move: '5...h6', text: 'Moskova Varyantı (Motor: +0.40); 6.Bxf6 Qxf6 ile Siyah fil çiftini alır ama geride kalır.' },
      ],
    },
    '6w': {
      text: '6.e3 ile d4 desteklenir ve f1 filine yol açılır.',
      amac: 'Gelişimi sürdürmek; Bd3 ve rok ile oyunu tamamlamak.',
      neden: 'Doğal hamle, ama g5 filinin geri dönüşünü (c1–h6 çaprazı) kapatır; bu yüzden Siyah ...Qa5 ile c3’teki bağlamayı ve g5 filini aynı anda hedef alabilir.',
      diger: [
        { move: '6.cxd5', text: 'Cambridge Springs’ten kaçınmanın yolu (Motor: +0.32); 6...exd5 Değişim Varyantı yapısına götürür.' },
        { move: '6.e4', text: 'Merkezi hemen açar (Motor: +0.19); 6...dxe4 7.Nxe4 sonrası Beyazın avantajı küçüktür.' },
      ],
    },
    '6b': {
      text: '6...Qa5: Cambridge Springs Savunması.',
      amac: 'c3 atını e1’deki şaha bağlamak ve ...Bb4, ...Ne4 ile c3’e yüklenmek; ayrıca ...dxc4 veya ...Ne4 sonrası g5 filini vezirle hedef almak.',
      neden: 'Siyah, Beyazın g5 filinin vezir kanadından uzakta olmasını ve e3 ile geri dönüş yolunun kapanmasını kullanıyor. CSM bu seçimi “eski” bir savunmaya dönüş olarak niteliyor; Lasker, Alekhine gibi isimlerin oynadığı, sağlamlığı kanıtlanmış bir yol.',
      diger: [
        { move: '6...Be7', text: 'Ortodoks Savunmaya geçer (Motor: +0.34); daha pasif ama çok sağlam.' },
        { move: '6...h6', text: 'Önce fili sorgular (Motor: +0.39); 7.Bh4 sonrası Siyahın planları benzer.' },
      ],
    },
    '7w': {
      text: '7.cxd5: Beyaz merkezde gerginliği çözer.',
      amac: 'Siyahın ...dxc4 ile g5 filine yönelik taktiklerini ortadan kaldırmak ve oyunu sadeleştirmek.',
      neden: 'CSM notunda 7.Nd2’nin daha yaygın olduğu belirtiliyor; Kasparov ise ...Nxd5 sonrası Qd2 ile c3’ü koruyan Alekhine kurulumunu seçti. Motor iki hamleyi neredeyse eşit görüyor (7.Nd2 +0.29, 7.cxd5 +0.23).',
      diger: [
        { move: '7.Nd2', text: 'Ana hat (Motor: +0.29): a5–e1 çaprazındaki baskıya karşı c4’ü ve e4’ü tutar. Dikkat: 7...Bb4 8.Qc2 O-O 9.Bd3?? dxc4! 10.Bxf6 cxd3! gibi tuzaklar bu hatta bilinir.' },
        { move: '7.Bxf6', text: 'Fili hemen değişip taktikleri baştan önler; ama Beyaz fil çiftinden vazgeçer.' },
      ],
    },
    '7b': {
      text: 'Siyah atla alır; at d5’te c3’e ikinci baskıyı yapar.',
      amac: 'c3 atına ...Bb4 ile üçüncü baskıyı eklemek ve g5 filinin f6 bağlamasından kurtulmak.',
      neden: '7...exd5 (Motor: +0.63) Değişim yapısına götürür ve Qa5’in anlamı azalır; 7...Nxd5 ise Cambridge Springs’in ruhuna uygun olarak baskıyı c3’e taşır.',
      diger: [
        { move: '7...exd5', text: 'Motor: +0.63. Klasik Karlsbad benzeri yapı; vezir a5’te pek işe yaramaz.' },
        { move: '7...cxd5', text: 'Motor: +0.63. c-hattı açılır ve Beyazın Bd3, O-O ile rahat bir avantajı olur.' },
      ],
    },
    '8w': {
      text: '8.Qd2: c3 atı korunur ve g5 fili desteklenir.',
      amac: 'c3’teki bağlamayı vezirle güvenceye almak; ...Nxc3 sonrası bxc3 ile merkez piyonu kazanmak.',
      neden: 'The Spectator’ın 9. oyun notlarında 8.Qd2’nin Cambridge Springs’e karşı Alekhine’in sistemi olduğu belirtiliyor. Vezir hem c3’ü hem g5 filini tutar; Qc2’nin aksine ...Nb4 gibi tempo kazanan saldırılara açık değildir.',
      diger: [
        { move: '8.Rc1', text: 'Benzer fikir (Motor: +0.32); genellikle aynı yapılara döner.' },
        { move: '8.Qb3', text: 'Motor: +0.06. Vezir b3’te ...Bb4 ve ...Nxc3 ile rahatsız edilebilir.' },
      ],
    },
    '8b': {
      text: '8...Bb4: c3 atına üçüncü baskı.',
      amac: 'c3’e at, fil ve vezirle yüklenip Beyazı savunmaya zorlamak.',
      neden: 'Cambridge Springs’in mantıklı devamı; ama Beyaz Rc1 ile c3’ü ikinci kez koruyunca baskı tek başına sonuç vermez. CSM notunda bu konumun 1935 Alekhine–Euwe oyunuyla bilindiği ve belirsiz bir pozisyona götürdüğü hatırlatılıyor.',
      diger: [
        { move: '8...Nxc3', text: 'Motor: +0.21. 9.bxc3 Ba3 ile Siyah c1 ve b2 karelerine bakar; en sade eşitleme yolu.' },
        { move: '8...h6', text: 'Motor: +0.23. Önce g5 filine soru sorar; 9.Bh4 Bb4 10.Rc1 ile oyuna benzer yapılar.' },
      ],
    },
    '9w': {
      text: '9.Rc1: kale c3’ü ikinci kez korur.',
      amac: 'c3’ü taşla güvenceye almak ve c-hattında, ileride açılacak c-piyonunun arkasında yer almak.',
      neden: 'Bağlama altında olan c3 için en sağlam savunma. 9.a3 Bxc3 bxc3 piyon yapısını erken bozar (Motor: −0.17), uzun rok ise Siyahın vezir kanadı baskısına doğrudan yürür.',
      diger: [
        { move: '9.a3', text: 'Motor: −0.17. 9...h6 10.Bh4 Nxc3 ile Siyah rahat eder.' },
        { move: '9.O-O-O', text: 'Motor: −2.09. Şah, Siyahın tüm taşlarının hedef aldığı kanada gider; 9...f6 sonrası ağır sonuçlar.' },
      ],
    },
    '9b': {
      text: 'Siyah kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleyi oyuna sokmak; ardından ...e5 kırılmasını hazırlamak.',
      neden: 'Doğal görünse de motor 9...h6 ve 9...Nxc3’ü (Motor: +0.24) daha iyi buluyor; 9...O-O +0.58. Kasparov’un 9. oyun notlarına göre Smislov bu oyundaki 9...O-O’yu düzeltmek için 9. oyunda 9...e5 denedi; ana hat ise 9...h6.',
      diger: [
        { move: '9...h6', text: 'Motor: +0.24. Kasparov’a göre ana hat; filin nereye gideceğini önce sorgular.' },
        { move: '9...Nxc3', text: 'Motor: +0.24. 10.bxc3 Ba3 11.Rc2 ile Siyah c1 karesini kapatıp ...e5’e geçer.' },
      ],
    },
    '10w': {
      text: '10.Bd3: son küçük taş gelişir, rok hazırlanır.',
      amac: 'Kısa rok yapmak; fil d3’ten h7’ye ve merkeze bakar.',
      neden: 'The Spectator’a göre iki oyuncu da 10. hamlelerinde 22’şer dakika düşündü: pozisyon ilk kritik karar anıydı. Motor 10.a3’ü daha iyi buluyor (+0.59): b4 filini hemen değişmeye zorlayıp fil çiftini alır.',
      diger: [
        { move: '10.a3', text: 'Motor: +0.59. 10...Bxc3 11.bxc3 ile Beyaz fil çiftini hemen alır; Kasparov 9. oyunda (9...e5’ten sonra) bu fikri kullandı.' },
        { move: '10.Be2', text: 'Motor: +0.17. Daha pasif; f1 filinin h7’ye baskısı kaybolur.' },
      ],
    },
    '10b': {
      text: '10...e5: Siyah merkezi açar.',
      amac: 'Yarı Slav yapısının en büyük sorunu olan c8 filini serbest bırakmak ve d4 piyonunu zayıflatmak.',
      neden: 'Rok yapıldı, taşlar hazır; Siyah artık pasif kalmak yerine merkezde kırılma yapıyor. ...exd4 sonrası Beyazın d4’te tek bir piyonu kalacak, Siyahın taşları da bu piyona yüklenecek.',
      diger: [
        { move: '10...Nxc3', text: 'Motor: +0.33. 11.bxc3 Ba3 12.Rc2 e5 ile aynı kırılma daha iyi koşullarda.' },
        { move: '10...h6', text: 'Motor: +0.44. Önce fili kovmak; ama zaman kaybı riski var.' },
      ],
    },
    '11w': {
      text: 'Beyaz kısa rok yapar.',
      amac: 'Şahı e1’deki bağlamalardan kurtarmak ve kaleyi e-hattına hazırlamak.',
      neden: 'Merkez açılırken şahın e1’de kalması tehlikeli; ayrıca rok ile c3 atı üzerindeki bağlama ortadan kalkar. 11.dxe5 ise Siyaha ...Nxc3 ve ...Ba3 ile oyun verir (Motor: −0.14).',
      diger: [
        { move: '11.dxe5', text: 'Motor: −0.14. 11...Nxc3 12.bxc3 Ba3 ile Siyahın taşları aktifleşir.' },
        { move: '11.a3', text: 'Motor: +0.10. 11...Bxc3 12.bxc3 Re8 ile e-hattı Siyaha kalır.' },
      ],
    },
    '11b': {
      text: 'Siyah d4’te değişir.',
      amac: 'Merkezi açmak ve Beyazı d4’te tek bir piyonla bırakmak.',
      neden: 'Değişimle gerginlik çözülür; ama motor 11...h6’yı (+0.30) daha iyi buluyor, çünkü 11...exd4 12.exd4 sonrası Beyazın taşları serbest kalır ve e-hattı açılır (+0.66).',
      diger: [
        { move: '11...h6', text: 'Motor: +0.30. 12.Bh4 Re8 13.e4 Nxc3 gibi devamlarla gerginlik korunur.' },
        { move: '11...Re8', text: 'Motor: +0.55. e-hattını önceden tutar; 12.e4 ile Beyaz merkezi genişletir.' },
      ],
    },
    '12w': {
      text: 'Beyaz piyonla geri alır; d4 artık tek (izole olmayan ama yalnız) bir merkez piyonu.',
      amac: 'Merkezde d4 piyonunu tutmak ve e-hattını kalelere açmak.',
      neden: 'Neredeyse zorunlu: 12.Nxd4? Nxc3 13.bxc3 Ba3 ile Siyah c1 kalesine ve c3 piyonuna yüklenir (Motor: −1.55); 12.Qc2? dxc3 ise taş kaybettirir.',
      diger: [
        { move: '12.Nxd4', text: 'Motor: −1.55. 12...Nxc3 13.bxc3 Ba3 sonrası Beyazın vezir kanadı dağılır.' },
      ],
    },
    '12b': {
      text: '12...f6: g5 fili kovulur.',
      amac: 'Fili sorgulamak, e5 karesini kontrol etmek ve d7 atı için f8 üzerinden e6/g6 yolunu açmak.',
      neden: 'Smislov taşlarını yeniden düzenlemek istiyor; ama ...f6 e6 karesini ve a2–g8 çaprazını zayıflatır, Beyaz şah kanadında da fil hedefleri bulur. Motor 12...Bd6 ya da 12...N7b6’yı çok az farkla tercih ediyor (+0.64’e karşı +0.71).',
      diger: [
        { move: '12...Bd6', text: 'Motor: +0.64. Fil şah kanadına döner; 13.Bb1 N7b6 14.Ne5 Be6 ile dengeli bir oyun.' },
        { move: '12...N7b6', text: 'Motor: +0.65. c4 karesine bakar; 13.a3 Bd6 14.Rfe1 ile benzer.' },
      ],
    },
    '13w': {
      text: 'Fil h4’e çekilir ve h4–d8 çaprazında kalır.',
      amac: 'Fili korumak ve sonra g3 üzerinden b8–h2 çaprazına geçirmek.',
      neden: '13.Be3 Nxe3 ya da 13.Bf4 Nxf4 fil çiftinden vazgeçmek demektir (Motor: +0.48/+0.46); Bh4 hem fili korur hem d8’deki kaleye ileride baskı imkânı verir.',
      diger: [
        { move: '13.Be3', text: 'Motor: +0.48. 13...Nxe3 14.fxe3 sonrası piyon yapısı bozulur.' },
        { move: '13.Bf4', text: 'Motor: +0.46. 13...Nxf4 14.Qxf4 ile fil çifti gider.' },
      ],
    },
    '13b': {
      text: 'Kale d8’e gelir ve d4 piyonuna bakar.',
      amac: 'd-hattında d4’e baskı kurmak; atların (b6, e6) desteğiyle bu piyonu hedef almak.',
      neden: 'Merkez açıldı; d4 Beyazın tek merkez piyonu ve Siyahın doğal hedefi. Kale aynı zamanda d5 atını destekler.',
      diger: [
        { move: '13...Bxc3', text: 'Motor: +0.78, eşit seviyede. Önce fili değişmek; oyunda bir hamle sonra zaten olacak.' },
        { move: '13...Rf7', text: 'Motor: +0.86. Kale ikinci yatayı savunur ama d-hattından uzak kalır.' },
      ],
    },
    '14w': {
      text: '14.a3: b4 fili sorgulanır.',
      amac: 'Fili karar vermeye zorlamak; ...Bxc3 sonrası bxc3 ile fil çiftini kesinleştirmek.',
      neden: 'Bağlama c3’ün üzerinde asılı durdukça Beyaz rahat oynayamaz. a3 sonrası ...Bd6 geri çekilişi 15.b4 ile vezir kanadında alan kazandırır.',
      diger: [
        { move: '14.Bg3', text: 'Motor: +0.70. Önce fili çaprazına getirmek; genelde aynı yere varır.' },
        { move: '14.Qc2', text: 'Motor: +0.67. 14...Nf8 15.Nxd5 cxd5 ile yapı değişir.' },
      ],
    },
    '14b': {
      text: 'Siyah fili c3 atına değişir.',
      amac: 'Bağlamanın son meyvesini almak: Beyazın piyon yapısını (c3–d4) zayıflatmak.',
      neden: '14...Bd6 15.b4 sonrası Siyahın vezir kanadı sıkışır (Motor: +0.97); 14...Bf8? ise 15.Qc2 Nf4 16.Bxh7+ gibi şah kanadı darbelerine izin verir (Motor: +1.97).',
      diger: [
        { move: '14...Bd6', text: 'Motor: +0.97. 15.b4 ile vezir tuzağa yaklaşır; 15...Qxa3 16.Nxd5 cxd5 gibi zorunlu hatlar.' },
        { move: '14...Bf8', text: 'Motor: +1.97. Fil geri çekilir ama h7 savunmasız kalır.' },
      ],
    },
    '15w': {
      text: 'bxc3: Beyazın c3 ve d4 piyonları ve fil çifti.',
      amac: 'Merkez piyonlarını ve b-hattını almak; c4 ile ileride asılı piyonlar kurmak.',
      neden: 'Zorunluya yakın: 15.Qc2? Bxb2 piyon kaybettirir (Motor: −0.23), 15.Qe2? Nf4 ise ağır (Motor: −1.86). bxc3 ayrıca b-hattını kaleye açar; bu hat oyunun sonunda belirleyici olacak.',
      diger: [
        { move: '15.Qc2', text: 'Motor: −0.23. 15...Bxb2 16.Qxb2 ile Beyaz bir piyon eksik.' },
      ],
    },
    '15b': {
      text: '15...Nf8: at f8’e döner, e6 ve g6’ya yönelir.',
      amac: 'Atı d4’e ve şah kanadının savunmasına yönlendirmek; e6 karesini ve h7’yi korumak.',
      neden: '15...Qxa3 piyonu alır ama 16.c4! sonrası vezir ...Nf4/Nb6 ile kaçmak zorunda kalır ve c5 ile tuzak tehdidi doğar (Motor: +1.14); CSM notu da bu alımı “riskli” buluyor. 15...Nxc3?? ise 16.Rxc3 ile basitçe taş kaybettirir (Motor: +4.88).',
      diger: [
        { move: '15...Qxa3', text: 'Motor: +1.14. 16.c4 Nf4 17.Bc2 Ne6 18.Rfe1 ile Beyazın taşları çok aktif.' },
        { move: '15...Re8', text: 'Motor: +0.57. e-hattını önce almak; motorun en sevdiği.' },
        { move: '15...b5', text: 'Motor: +0.71. c4’ü engellemeye çalışır ama c6 zayıflar.' },
      ],
    },
    '16w': {
      text: 'Fil g3’e gelir ve b8–h2 çaprazına yerleşir.',
      amac: 'Fili aktif çaprazına getirmek; ileride d6 ve b8 karelerine bakmak.',
      neden: 'h4’te fil ...g5 ile tehdit edilebilirdi ve d8 kalesi korunduğu için çaprazda iş yapmıyordu. g3’te ise c7–b8 karelerine ve d6’ya bakar: 28.Bd6 bu çaprazın meyvesi olacak.',
      diger: [
        { move: '16.Rfe1', text: 'Motor: +0.69. Önce kale; 16...Bg4 17.Be4 ile benzer.' },
        { move: '16.h3', text: 'Motor: +0.48. ...Bg4’ü engeller ama yavaş.' },
      ],
    },
    '16b': {
      text: 'Fil e6’ya çıkar; c8 fili sonunda gelişti.',
      amac: 'd5 atını desteklemek ve vezir kanadı ile merkez arasında bağlantı kurmak.',
      neden: 'Fil e6’da d5 atını sağlamlaştırır; Beyazın Rfe1 ile e-hattına gelmesi ise fili rahatsız edecek, bu yüzden bir sonraki hamlede f7’ye dönecek.',
      diger: [
        { move: '16...Bg4', text: 'Motor: +0.68. f3 atını bağlar; 17.Be4 Be6 ile benzer yerlere döner.' },
        { move: '16...b5', text: 'Motor: +0.69. c4’ü önlemeye çalışır; c6 geri kalmış hale gelir.' },
      ],
    },
    '17w': {
      text: 'Kale e-hattına gelir.',
      amac: 'Açık e-hattını almak ve e6 filine baskı yapmak.',
      neden: 'Beyazın tek açık hattı e-hattı; kale buradan e6/e7’ye bakar. Bu arada a3 piyonu korumasız kalır, ama Kasparov ...Qxa3 sonrası c4 ile inisiyatif alacağını hesaplıyor.',
      diger: [
        { move: '17.Qb2', text: 'Motor: +0.65. a3’ü dolaylı korur; 17...b5 18.c4 bxc4 ile c-hattı açılır.' },
        { move: '17.h4', text: 'Motor: +0.51. Şah kanadında alan; 17...Qxa3 18.c4 Nb6.' },
      ],
    },
    '17b': {
      text: 'Fil f7’ye çekilir; h5’e ve d5’e bakar.',
      amac: 'Fili e-hattındaki kaleden kurtarmak ve d5 atını arkadan desteklemek.',
      neden: 'Motor burada 17...Qxa3’ü en iyi buluyor (Motor: +0.50; 18.c4 Nb6 19.h3 Qe7). Smislov piyon almak yerine güvenli bir düzenleme seçti; bunun sonucu Beyaz c4 ile istediği yapıyı kurabildi.',
      diger: [
        { move: '17...Qxa3', text: 'Motor: +0.50. Bir piyon kazanılır; 18.c4 Nb6 sonrası Beyazın inisiyatifi var ama tazminat tartışmalı.' },
        { move: '17...b5', text: 'Motor: +0.61. c4’ü engeller; 18.Qb2 Nb6 19.Nd2.' },
      ],
    },
    '18w': {
      text: '18.c4: d5 atı kovulur, Beyazın c4–d4 asılı piyonları doğar.',
      amac: 'Merkezde alan kazanmak ve d5’teki güçlü atı uzaklaştırmak; vezir değişse bile fil çifti ve ilerleyebilecek piyonlarla oynamak.',
      neden: 'Motor bu hamleyi beğenmiyor: 18.Qb2 +0.75 iken 18.c4 Qxd2 sonrası +0.08. Asılı piyonlar vezirli oyunda dinamik güç, oyunsonunda ise çoğu zaman zayıflıktır. Kasparov yine de bu yapıyı seçti; Siyahın sonraki yanlışları kararı pratikte haklı çıkardı.',
      diger: [
        { move: '18.Qb2', text: 'Motor: +0.75. Vezirleri tutar ve b7’ye bakar; 18...b5 19.c4 bxc4 20.Rxc4.' },
        { move: '18.h4', text: 'Motor: +0.59. Şah kanadında alan, c4’ü daha uygun ana saklar.' },
      ],
    },
    '18b': {
      text: 'Siyah vezir değişir.',
      amac: 'Saldırı imkânlarını azaltıp asılı piyonlara karşı oyunsonu oynamak.',
      neden: 'Neredeyse zorunlu: vezir hem saldırı altında hem d2 vezirine bakıyor. 18...Qxa3? 19.cxd5 taş kaybettirir (Motor: +4.68), 18...Nc3? 19.Rxc3 de öyle.',
      diger: [
        { move: '18...Qxa3', text: 'Motor: +4.68. 19.cxd5 ile d5 atı düşer; vezir b-hattında da rahatsız edilir.' },
      ],
    },
    '19w': {
      text: 'At d2’den geri alır.',
      amac: 'Materyali eşitlemek; at d2’den b3’e ya da f3’e gidebilir.',
      neden: 'Tek mantıklı alış: 19.Bxh7+? Kxh7 20.Nxd2 ara hamlesi çalışmaz ve taş kaybeder (Motor: −4.14).',
    },
    '19b': {
      text: 'At b6’ya; c4 piyonuna baskı yapar.',
      amac: 'Asılı piyonlardan c4’ü hedef almak; at a4 ve c4 karelerine yönelir.',
      neden: 'Doğal ve en iyi hamle (Motor: +0.18). 19...Nf4? 20.Bxf4 Rxd4 gibi hatlar çalışmaz (Motor: +2.80).',
      diger: [
        { move: '19...Nf4', text: 'Motor: +2.80. 20.Bxf4 Rxd4 21.Be4 sonrası Siyahın kalesi tehlikede.' },
      ],
    },
    '20w': {
      text: 'At b3’e çıkar; c5 ve a5 karelerine bakar.',
      amac: 'd4’ü korumak ve atı a5 üzerinden b7/c6’ya yönlendirmek.',
      neden: 'The Spectator’a göre Kasparov bu hamle için 22 dakika düşündü. At b3’te d4’ü korurken c5 ve a5’e sıçramaya hazır; 20.Bf1 ya da 20.Nf3 de oynanabilirdi ama Siyaha ...Ne6 ile d4’e baskıyı artırma zamanı verirdi.',
      diger: [
        { move: '20.Bf1', text: 'Motor: +0.03. c4 hemen korunur ama 20...Ne6 21.Nb3 Nxd4 ile piyon düşer.' },
        { move: '20.Nf3', text: 'Motor: 0.00. At şah kanadına döner, d4 desteği zayıflar.' },
      ],
    },
    '20b': {
      text: 'At a4’e gider; c3 ve b2 karelerine bakar.',
      amac: 'Atı ileri bir kareye yerleştirip Beyazın vezir kanadını rahatsız etmek.',
      neden: 'Motor burada 20...Ne6’yı tercih ediyor (Motor: +0.21; 21.c5 Nd5 22.Na5 Ndf4). a4 atı göründüğünden daha az etkili: oradan geri dönüş karesi c5, ve Beyaz ileride c5 ile bu kareyi kapatacak. Oyundaki hamle +0.60.',
      diger: [
        { move: '20...Ne6', text: 'Motor: +0.21. At merkezde kalır, d4’e hemen baskı yapar; Siyah neredeyse eşit.' },
        { move: '20...h6', text: 'Motor: +0.59. Şaha hava açar; oyundaki hamle kadar iyi.' },
      ],
    },
    '21w': {
      text: 'Fil f1’e çekilir ve c4 piyonunu korur.',
      amac: 'Asılı piyonlardan c4’ü güvenceye almak ve fili g2 ya da a6 çaprazlarına hazırlamak.',
      neden: 'c4 artık ...Nb6’dan değil a4 ve d-hattından baskı altında; fil f1’den hem c4’ü korur hem a6–c8 çaprazına ulaşabilir (33.Ba6 bu çaprazdan gelecek).',
      diger: [
        { move: '21.Re7', text: 'Motor: +0.57. Kale yedinci yataya girer; 21...Nb2 22.Bf1 b6.' },
        { move: '21.Re3', text: 'Motor: +0.39. Kaleyi yatay olarak savunmaya hazırlar.' },
      ],
    },
    '21b': {
      text: 'Kale d7’ye; ikinci yatayı korur ve d-hattında ikilemeye hazırlanır.',
      amac: 'Re7’yi önlemek ve d4’e baskıyı ...Rad8 ile artırmak.',
      neden: 'Beyazın Re7 ile yedinci yataya girmesini engeller. Motor 21...Ne6’yı biraz daha iyi buluyor (Motor: +0.37); fark küçük.',
      diger: [
        { move: '21...Ne6', text: 'Motor: +0.37. 22.d5 cxd5 23.cxd5 Nf8 ile Siyah piyonu çözer.' },
        { move: '21...b6', text: 'Motor: +0.43. c5’i kontrol eder; 22.Re7 Rd7 ile kale değişimi.' },
      ],
    },
    '22w': {
      text: 'At a5’e sıçrar ve b7’ye saldırır.',
      amac: 'Siyahın vezir kanadı piyonlarını hedef almak; at a5’ten c6 ve b7’ye baskı yapar.',
      neden: 'd4 piyonu artık korumasız ama Kasparov ...Rxd4 sonrası Re7 ve Nxc6 ile tazminat görüyor. Bu hamle aynı zamanda d5 ilerleyişine hazırlık: at c6’ya da bakıyor.',
      diger: [
        { move: '22.Re3', text: 'Motor: +0.48. Önce d4’ü yatay korumak; 22...Ng6 23.Be2.' },
        { move: '22.h4', text: 'Motor: +0.47. Şah kanadında alan; 22...Rc8 23.f4 Ne6.' },
      ],
    },
    '22b': {
      text: 'At e6’ya gelir ve d4’e üçüncü baskıyı yapar.',
      amac: 'd4 piyonunu kazanmak için baskıyı en üst seviyeye çıkarmak.',
      neden: 'Mantıklı görünür ama zamanlaması kötü: Beyaz d5 ile hem e6 atını hem c6’yı vuracak. Motor piyonu hemen almayı öneriyor: 22...Rxd4 23.Re7 b6 24.Nxc6 Rd7 (Motor: +0.53). Oyundaki hamle +0.87.',
      diger: [
        { move: '22...Rxd4', text: 'Motor: +0.53. 23.Re7 b6 24.Nxc6 Rd7 25.Rce1 Nc5 ile Siyah dengeyi korur; 23.Nxb7 ise 23...Rd7 ile (Motor: +0.35).' },
        { move: '22...Rc8', text: 'Motor: +0.74. c6’yı güçlendirir; 23.c5 Bd5 24.f3 Ne6.' },
      ],
    },
    '23w': {
      text: '23.d5! Asılı piyon ilerler ve hem c6’yı hem e6 atını vurur.',
      amac: 'Baskı altındaki piyonu savunmak yerine ilerleterek değiştirmek; Siyahın c6–b7 yapısını kırıp c6’da zayıflık yaratmak.',
      neden: 'Piyon d4’te üç taşın hedefiydi ve pasif savunma (23.Rb1, 23.Re3) Siyaha zaman kazandırırdı. d5 ile hamle Beyaza geçer: dxc6 sonrası c-piyonu c5’e ilerleyip d6’yı ve c6’yı kontrol edecek. Motor: d5 +1.06, 23.Rb1 +0.34, 23.Nb3 −0.39.',
      diger: [
        { move: '23.Rb1', text: 'Motor: +0.34. b7’ye baskı; ama 23...Nd8 24.f3 b6 ile Siyah toparlanır.' },
        { move: '23.Nb3', text: 'Motor: −0.39. 23...Nxd4 24.Nxd4 Rxd4 ile piyon düşer.' },
      ],
    },
    '23b': {
      text: 'At d4’e girer; merkezde güçlü görünen bir kare.',
      amac: 'Atı merkeze yerleştirmek ve dxc6 sonrası c6’yı atla geri almak.',
      neden: 'CSM notuna göre 23...cxd5 24.cxd5 Rxd5 25.Nxb7 Beyaz için kazançlıydı, bu yüzden Smislov at hamlesini seçti. Motor bu konuda daha iyimser: 25...Nec5 ile Siyah +0.72’de tutunuyor; yani üç hamle (Nd4, Nd8, cxd5) da yaklaşık eşit derecede kötü/iyi.',
      diger: [
        { move: '23...cxd5', text: 'Motor: +0.85. 24.cxd5 Rxd5 25.Nxb7 Nec5 26.Re7 ile Beyaz aktif ama Siyah tutunabilir.' },
        { move: '23...Nd8', text: 'Motor: +0.87. At c6’yı korumak için geri çekilir; pasif ama sağlam.' },
      ],
    },
    '24w': {
      text: 'Beyaz c6’yı alır.',
      amac: 'Siyahın piyon zincirini kırmak; ...Nxc6 ya da ...bxc6 sonrası c6’yı tek başına bırakmak.',
      neden: 'Planın devamı: 24.Red1 (Motor: +0.34) ya da 24.f3 gibi bekleyiş hamleleri Siyaha ...c5 ile yapıyı kapatma şansı verirdi.',
      diger: [
        { move: '24.Red1', text: 'Motor: +0.34. 24...c5 25.f3 Re8 ile Siyah merkezi kapatır.' },
        { move: '24.f3', text: 'Motor: +0.28. 24...cxd5 25.cxd5 Bxd5 ile piyon düşer.' },
      ],
    },
    '24b': {
      text: 'At c6’dan geri alır.',
      amac: 'Materyali eşitlemek ve atı a5’teki ata değiştirmeye hazırlamak.',
      neden: 'Motor en iyi alışı bu sayıyor (Motor: +0.72). 24...bxc6 25.c5 ile c6 hemen kronik zayıflık olur (Motor: +1.17); 24...Nf3+?? 25.gxf3 ise taş verir.',
      diger: [
        { move: '24...bxc6', text: 'Motor: +1.17. 25.c5 Nb3 26.Nxb3 Bxb3 ile c6 zayıf kalır.' },
      ],
    },
    '25w': {
      text: 'At değişimi.',
      amac: 'Siyahı c6’yı b-piyonuyla almaya zorlamak; c6’yı geri kalmış bir piyon yapmak.',
      neden: '25.Nb3 (Motor: −0.28) planı bozar; 25.Nxb7? ise 25...Rxb7 ile taş kaybettirir (Motor: −2.27).',
      diger: [
        { move: '25.Nb3', text: 'Motor: −0.28. At geri çekilir, Siyahın c6 atı merkeze hâkim olur.' },
      ],
    },
    '25b': {
      text: 'Siyah b-piyonuyla alır; c6 yalnız ve zayıf.',
      amac: 'Materyali korumak.',
      neden: 'Zorunlu: 25...Nc5? 26.Ne7+ ile şah çekip taş kazanılır (Motor: +4.90).',
    },
    '26w': {
      text: '26.c5!: c6 sabitlenir, d6 karesi fil için hazırlanır.',
      amac: 'c6’yı geri kalmış piyon olarak dondurmak, d6’yı karakol yapmak ve a4 atının c5’e dönüşünü kesmek.',
      neden: 'CSM notunun vurguladığı iki fikir: Q6 (d6) karakolu ve atın QB4’e (c5) dönüşünün engellenmesi. 26.f3 ya da 26.h4 Siyaha ...Nc5 ile atını kurtarma fırsatı verirdi (Motor: +0.29 / +0.17). Oyundaki hamle +1.13.',
      diger: [
        { move: '26.f3', text: 'Motor: +0.29. 26...c5 ile Siyah c-piyonunu c5’e sürüp yapıyı düzeltir.' },
        { move: '26.h4', text: 'Motor: +0.17. 26...Nc5 ile at oyuna döner.' },
      ],
    },
    '26b': {
      text: 'Kale e8’e gelir ve kale değişimi önerir.',
      amac: 'Beyazın aktif e1 kalesini değiştirerek baskıyı azaltmak.',
      neden: 'Smislov’un oyunsonu felsefesi: ağır taşları değiştir, zayıflıkları savun. Motor 26...Rb7 ile b-hattını almayı biraz daha iyi buluyor (Motor: +0.89); oyundaki hamle +1.11.',
      diger: [
        { move: '26...Rb7', text: 'Motor: +0.89. b-hattını önce almak; 27.Re4 Nb2 28.Rb4.' },
        { move: '26...a5', text: 'Motor: +0.92. a-piyonunu ilerletip a4 atına b2 için destek hazırlar.' },
      ],
    },
    '27w': {
      text: 'Beyaz kaleleri değişir.',
      amac: 'e-hattını açık tutmamak ve ardından c1 kalesini b-hattına geçirmek.',
      neden: '27.Bd6? Rxe1 28.Rxe1 sonrası fil karakola gelir ama Siyah b-hattını alır (Motor: +0.27); değişim ve Bd6 sırası çok daha güçlü (+1.29).',
      diger: [
        { move: '27.Bd6', text: 'Motor: +0.27. 27...Rxe1 28.Rxe1 Rb7 ile Siyah aktifleşir.' },
      ],
    },
    '27b': {
      text: 'Fil geri alır.',
      amac: 'Materyali eşitlemek.',
      neden: 'Tek alış; d7 kalesi d-hattını terk edemez.',
    },
    '28w': {
      text: '28.Bd6: fil karakola yerleşir.',
      amac: 'd6’dan b8, c7, f8 karelerine ve Siyahın birinci yatayına hâkim olmak; c5 piyonunu korumak.',
      neden: 'c5 piyonu filin desteği, fil de piyonun desteği: Siyah artık ne ...Nc5 yapabilir ne de b-hattında rahatça oynayabilir. 28.Re1 ya da 28.Bf4 bu karakolu kullanmaz (Motor: +0.65 / +0.62).',
      diger: [
        { move: '28.Re1', text: 'Motor: +0.65. 28...Bf7 29.Rb1 Re7 ile Siyah toparlanır.' },
      ],
    },
    '28b': {
      text: 'Fil f7’ye döner.',
      amac: 'Fili d5 ve a2–g8 çaprazına yeniden bağlamak.',
      neden: 'En iyi hamle (Motor: +1.11). 28...a5 ya da 28...Rb7 Beyaza g4–Bg2 ile c6’ya yeni baskı fırsatı verir (Motor: +1.39 / +1.43).',
      diger: [
        { move: '28...a5', text: 'Motor: +1.39. 29.g4 Rd8 30.Bg2 Nb2 ile c6 zayıf kalır.' },
      ],
    },
    '29w': {
      text: 'Kale b-hattına gelir; b8’e girmeye hazırlanır.',
      amac: 'Açık b-hattını almak ve kaleyi Siyahın birinci yatayına sokmak.',
      neden: 'The Spectator’a göre uzmanlar bu anda Beyazı fil çifti, b-hattı, daha fazla alan ve saat avantajı nedeniyle üstün görüyordu. 29.Ba6 de iyiydi (Motor: +1.11) ama önce kaleyi aktifleştirmek daha esnek (+1.21).',
      diger: [
        { move: '29.Ba6', text: 'Motor: +1.11. 29...Rd8 30.h4 ile benzer baskı.' },
        { move: '29.Be2', text: 'Motor: +0.81. Fil f3’e giderek c6’ya bakar ama yavaş.' },
      ],
    },
    '29b': {
      text: '29...Bd5? Fil merkeze çıkar ama birinci yatay savunmasız kalır.',
      amac: 'Filin d5’ten a2 ve g2’ye bakmasını ve atla birlikte vezir kanadına karşı oyun bulmayı amaçladı.',
      neden: 'Kritik hata: 30.Rb8+ ile Beyaz kalesi birinci yataya girer ve şah f7–e6’ya sürülür. Doğrusu 29...Rd8 idi (Motor: +1.26; 30.Rb7 Nc3 31.Rxa7 Nb5). Oyundaki hamle +2.07.',
      diger: [
        { move: '29...Rd8', text: 'Motor: +1.26. Birinci yatayı tutar; 30.Rb7 Nc3 31.Rxa7 Nb5 ile Siyah aktif karşı oyun bulur.' },
        { move: '29...h6', text: 'Motor: +1.41. Şaha h7 karesini açar, Rb8+ sonrası Kh7 mümkün olur.' },
      ],
    },
    '30w': {
      text: 'Rb8+: kale birinci yataya girer.',
      amac: 'Şahı kovalamak ve kaleyi f8 üzerinden Siyahın piyonlarının arkasına yerleştirmek.',
      neden: 'Siyahın hatasının cezası; 30.f3 (Motor: +1.21) bu fırsatı kaçırırdı. Oyundaki hamle +2.03.',
      diger: [
        { move: '30.f3', text: 'Motor: +1.21. Sakin; Siyah 30...Rd8 ile birinci yatayı kapatır.' },
      ],
    },
    '30b': {
      text: 'Şah f7’ye gider.',
      amac: 'Şahtan kurtulmak.',
      neden: 'Zorunlu sayılır: 30...Rd8?? 31.Rxd8+ ile kale düşer (Motor: +6.37).',
    },
    '31w': {
      text: 'Rf8+: kale şahı kovalamaya devam eder.',
      amac: 'Şahı ya h-kanadına ya da merkeze sürmek; kaleyi f8’de, Siyahın şahının ve f6 piyonunun arkasında tutmak.',
      neden: 'Motorun en sevdiği hamle (+2.34). 31.Ba6 (+1.32) ve 31.f3 (+1.63) daha yavaş: Siyah şahını rahatça yerleştirirdi.',
      diger: [
        { move: '31.Ba6', text: 'Motor: +1.32. 31...Nc3 32.f3 g5 ile Siyah biraz nefes alır.' },
        { move: '31.f3', text: 'Motor: +1.63. Şah kanadını sağlamlaştırır ama tempo kaybıdır.' },
      ],
    },
    '31b': {
      text: 'Şah e6’ya gelir; d7 kalesinin yanına.',
      amac: 'Şahı merkeze getirip d7 kalesini ve d5 filini korumak.',
      neden: 'Merkezdeki şah aktif görünür ama a6–c8 çaprazında d7 kalesiyle aynı hatta durur: Ba6–c8 bağlama tehdidi doğar. CSM notu 31...Kg6’yı “biraz daha iyi” buluyor; motor da aynı görüşte (31...Kg6 +2.36, 31...Ke6 +2.95). CSM bu hataları kısmen zaman sıkıntısına bağlıyor.',
      diger: [
        { move: '31...Kg6', text: 'Motor: +2.36. 32.Bd3+ Kh6 33.Bf4+ g5 34.Rxf6+ ile Beyaz piyon alır, ama Siyah kaliteyi tutar.' },
      ],
    },
    '32w': {
      text: '32.g3: şaha kaçış karesi açılır.',
      amac: 'Birinci yataydaki mat tehlikelerini önlemek ve f4 ile ilerlemeye hazırlanmak.',
      neden: 'Gereksiz bir önlem: 32.Ba6! hemen kaliteyi kazanıyordu (Motor: +2.97). CSM notu da “33.Ba6 kaliteyi hemen kazanırdı” diyerek bunu işaret ediyor. Oyundaki hamle +1.41; Siyah bir tempo kazandı ama kullanamadı.',
      diger: [
        { move: '32.Ba6', text: 'Motor: +2.97. 32...Rxd6 33.cxd6 Kxd6 34.Ra8 c5 35.Rxa7 ile Beyaz kalite önde.' },
        { move: '32.Re8+', text: 'Motor: +2.48. 32...Kf7 33.Rf8+ Kg6 34.Bd3+ ile şahı kovalamak.' },
      ],
    },
    '32b': {
      text: '32...g6? Siyah bekler ve şaha f7 karesini hazırlamaya çalışır.',
      amac: 'Şah kanadını sağlamlaştırmak ve f7’yi şah için boşaltmak.',
      neden: 'Kesin hata. Bağlama tehdidine karşı kaleyi d7’den kaldırmak gerekiyordu: 32...Rf7 33.Re8+ Kd7 34.Rb8 (Motor: +1.70) ya da CSM’nin önerdiği 32...f5 33.f4 Rf7 (Motor: +1.72–2.00). Oyundaki hamle +3.22.',
      diger: [
        { move: '32...Rf7', text: 'Motor: +1.70. Kale bağlama hattından çıkar; 33.Re8+ Kd7 34.Rb8 Ke6 35.Ba6.' },
        { move: '32...f5', text: 'Motor: +1.72. CSM’ye göre Siyahın direnme yolu; 33.f4 Rf7 34.Re8+ Kd7.' },
      ],
    },
    '33w': {
      text: '33.Ba6! Bc8 ile d7 kalesini şaha bağlama tehdidi.',
      amac: 'Kaleyi iki görevle (d6 filine baskı ve d7’de durma) aşırı yüklemek ve kaliteyi kazanmak.',
      neden: 'Bc8 sonrası d7 kalesi e6’daki şaha bağlanır ve düşer. Kaleyi kaçırmak da çare değil: 33...Rf7 34.Bc8+ Rd7 35.Re8+ Kf7 36.Bxd7 (Motor: +5.9). Oyundaki hamle +3.10; 33.f3 ise yalnızca +1.11.',
      diger: [
        { move: '33.f3', text: 'Motor: +1.11. 33...Rb7 ile Siyah b-hattına geçer.' },
        { move: '33.f4', text: 'Motor: +0.89. 33...Rb7 34.Ba6 Rb1+ ile Siyahın kalesi aktifleşir.' },
      ],
    },
    '33b': {
      text: 'Siyah kaleyi d6 filine verir.',
      amac: 'Bağlamadan kaçıp en az kayıpla oyunsonuna geçmek: kaliteye karşı Beyazın güçlü d6 filini almak.',
      neden: 'The Spectator bu hamleyi “çaresizlik” olarak niteliyor. CSM notuna göre 33...Rf7 34.Bc8+ şahı saklanacak yer bırakmıyor (Motor: +5.9). 33...Nb6 34.cxb6 axb6 de kötü (Motor: +3.70).',
      diger: [
        { move: '33...Rf7', text: 'Motor: +5.9. 34.Bc8+ Rd7 35.Re8+ Kf7 36.Bxd7 ile kale bedavaya gider.' },
        { move: '33...Nb6', text: 'Motor: +3.70. 34.cxb6 axb6 35.Bb4 ile Beyaz fil çiftini korur.' },
      ],
    },
    '34w': {
      text: 'Beyaz piyonla alır.',
      amac: 'Kaleyi geri almak; d6 piyonu bir süre Siyah şahını meşgul eder.',
      neden: 'Zorunlu: 34.Bc8+?? Ke7 sonrası Beyazın kendi taşları askıda kalır (Motor: −5.04).',
    },
    '34b': {
      text: 'Şah d6 piyonunu alır.',
      amac: 'Materyali eşitlemeye yaklaşmak ve şahı aktif tutmak.',
      neden: 'Motor 34...Nc5’i aynı seviyede görüyor (+3.00 / +3.04): at oyuna dönüp sonra d6’yı alır. Smislov şahla hemen alıp f6’yı Rxf6+ ile vermeyi kabul etti.',
      diger: [
        { move: '34...Nc5', text: 'Motor: +3.00. 35.Bf1 Kxd6 36.Bg2 Ne6 ile at merkeze döner, f6 korunur.' },
      ],
    },
    '35w': {
      text: 'Kale f6 piyonunu alır: Beyaz kalite önde.',
      amac: 'Materyali kazanmak ve kaleyi Siyah şahının arkasına yerleştirmek.',
      neden: 'Bedava piyon şahla birlikte gelir. 35.f4 ya da 35.f3 (Motor: +2.64) piyonu hemen almadığı için daha zayıf.',
      diger: [
        { move: '35.f4', text: 'Motor: +2.64. 35...Kc5 36.Rxf6 Kd4 ile Siyah şahı aktifleşir.' },
      ],
    },
    '35b': {
      text: 'Şah e5’e çıkar.',
      amac: 'Şahı merkezde aktif tutmak ve Beyazın f/g piyonlarına yaklaşmak.',
      neden: 'Bu oyunsonunda şah Siyahın en iyi taşı; motor 35...Ke5 ve 35...Kc5’i eşit görüyor (+3.35 / +3.37).',
      diger: [
        { move: '35...Kc5', text: 'Motor: +3.37. Şah vezir kanadında c-piyonunu destekler.' },
      ],
    },
    '36w': {
      text: 'Kale f8’e çekilir.',
      amac: 'Kaleyi saldırıdan çıkarmak ve sekizinci yataydan şah ya da a7/h7 piyonlarına baskı yapmak.',
      neden: 'f6’daki kale şahın saldırısı altındaydı. 36.Rf4 de iyi (Motor: +3.09); 36.Bb5?? ise 36...Kxf6 ile kaleyi verir (Motor: −1.99).',
      diger: [
        { move: '36.Rf4', text: 'Motor: +3.09. Kale e4 ve c4’ü kontrol eder; 36...Nb6 37.Be2.' },
      ],
    },
    '36b': {
      text: 'Siyah c-piyonunu c5’e ilerletir.',
      amac: 'c-piyonunu geçer piyona dönüştürmeye çalışmak ve d4 karesini şah için hazırlamak.',
      neden: 'Siyahın tek karşı oyun kaynağı geçer c-piyonu. Motor 36...Nc5’i biraz daha iyi buluyor (Motor: +3.08): at oyuna döner.',
      diger: [
        { move: '36...Nc5', text: 'Motor: +3.08. 37.Be2 Kd4 38.Ra8 Ne6 ile at merkezde.' },
        { move: '36...Nb6', text: 'Motor: +3.22. At c4’e yönelir; 37.Rh8 c5.' },
      ],
    },
    '37w': {
      text: 'Re8+: şah çekilir.',
      amac: 'Şahı istenmeyen karelere sürmek ve kaleyi e- ve d-hatlarına geçirmek.',
      neden: 'Motor 37.f4+ ile şahı hemen geri itmeyi biraz daha güçlü buluyor (Motor: +3.39), oyundaki hamle +3.21; fark önemsiz.',
      diger: [
        { move: '37.f4+', text: 'Motor: +3.39. 37...Kd4 38.Rd8 c4 39.Bb7 ile d5 filine baskı.' },
      ],
    },
    '37b': {
      text: 'Şah d4’e ilerler.',
      amac: 'c-piyonunu desteklemek ve c3–c4 karelerine yaklaşmak.',
      neden: 'Aktif ama riskli: şah d-hattında Beyaz kalesinin önüne gelir. 37...Kd6 ya da 37...Kf6 eşit derecede iyi (Motor: +3.52 / +3.61).',
      diger: [
        { move: '37...Kd6', text: 'Motor: +3.52. 38.Rd8+ Ke6 39.f4 ile benzer.' },
      ],
    },
    '38w': {
      text: 'Kale d8’e gelir ve d5 filine baskı yapar.',
      amac: 'd5 filini bağlamak ve Bb7 ile ona ikinci kez saldırmak.',
      neden: 'd5 fili şaha bağlı değil ama korunması gerekiyor; Rd8 ile Beyaz Bb7 tehdidi kurar. 38.Re7 ya da 38.Bb5 bu bağlantıyı kullanmaz (Motor: +2.48 / +1.75). Oyundaki hamle +3.73.',
      diger: [
        { move: '38.Re7', text: 'Motor: +2.48. 38...c4 39.Bxc4 Kxc4 40.Rxa7 ile değişimler Siyahın işine gelir.' },
      ],
    },
    '38b': {
      text: 'Şah e5’e geri döner ve d5 filini korur.',
      amac: 'Fili korumak.',
      neden: '38...Nc3 (Motor: +3.75) atı oyuna sokardı; şahın geri dönüşü pasif (+4.07) ve f4+ ile tempo kazanılmasına izin verir.',
      diger: [
        { move: '38...Nc3', text: 'Motor: +3.75. 39.Bb7 Kc4 40.Bxd5+ Nxd5 ile at merkeze gelir.' },
      ],
    },
    '39w': {
      text: 'f4+: şah tempoyla geri itilir.',
      amac: 'Şahı e-hattına sürmek ve f-piyonunu ilerletip şah kanadında alan kazanmak.',
      neden: 'En iyi hamle (Motor: +3.81). Şah artık e4 ya da d4’e gitmek zorunda; her iki kare de Bf1–g2 şahlarına açık.',
      diger: [
        { move: '39.Re8+', text: 'Motor: +3.60. 39...Kf6 40.f4 c4 ile Siyahın c-piyonu ilerler.' },
      ],
    },
    '39b': {
      text: 'Şah e4’e gider.',
      amac: 'Şahı aktif tutmak ve d5 filini korumaya devam etmek.',
      neden: '39...Ke6?? 40.Bc8+ Ke7 41.Rxd5 fil kaybettirir (Motor: +5.61); 39...Kd4 eşdeğer (+3.85).',
      diger: [
        { move: '39...Kd4', text: 'Motor: +3.85. 40.Bb7 Nb6 41.Kf2 c4 ile Siyah biraz karşı oyun arar.' },
      ],
    },
    '40w': {
      text: 'Fil f1’e döner; g2 ve d3 karelerini kontrol eder.',
      amac: 'Bg2+ ile d5 filini değişmeye zorlamak; fil değişimi sonrası saf kale–at oyunsonu Beyaz için kolay kazanç.',
      neden: 'Motorun en iyi hamlesi (+3.78). Fil a6’da hiçbir şey yapmıyordu; f1’den g2’ye gelince şahı ve d5 filini aynı çaprazda bulur.',
      diger: [
        { move: '40.Rc8', text: 'Motor: +3.28. c5 piyonuna baskı; 40...Ke3 ile şah aktifleşir.' },
      ],
    },
    '40b': {
      text: 'Fil b3’e kaçar ve Bg2+ değişimini önler.',
      amac: 'Fili değişimden korumak ve c-piyonunu desteklemek.',
      neden: 'Fil değişimden kaçar ama d-hattı ve uzun çapraz Beyaza kalır. 40...Nb6 ya da 40...Kd4 daha dayanıklı (Motor: +3.86); oyundaki hamle +4.32.',
      diger: [
        { move: '40...Nb6', text: 'Motor: +3.86. 41.Kf2 c4 42.Ke2 Kd4 ile at ve şah c-piyonunu destekler.' },
      ],
    },
    '41w': {
      text: 'Şah f2’ye; f3 ve e3 karelerini kontrol eder.',
      amac: 'Kendi şahını oyuna sokmak ve Siyah şahının e3–f3 karelerine geçişini engellemek.',
      neden: 'Oyunsonu tekniği: şah aktifleşir ve Siyah şahının hareket alanı daralır; artık Bg2+ ya da Re8+ ile şah ağa çekilir. 41.Kg2 daha yavaş (Motor: +3.71); oyundaki hamle +4.38.',
      diger: [
        { move: '41.Kg2', text: 'Motor: +3.71. 41...c4 42.Kf2 Nc3 ile Siyah biraz zaman kazanır.' },
      ],
    },
    '41b': {
      text: 'At b2’ye gider; ardından Smislov terk etti.',
      amac: 'Atı c4 ya da d1+ üzerinden oyuna sokmak.',
      neden: 'CSM’ye göre Smislov zaman kontrolünden sonra terk etti. Pozisyon gerçekten umutsuz (Motor: +4.45): Beyaz kalite önde, Siyahın at ve fili kenarda, şahı açıkta; 42.Rb8 Nd1+ 43.Ke1 ya da 42.Be2 g5 43.Bf3+ gibi devamlarda Siyahın taşları birer birer hedef olur.',
      diger: [
        { move: '41...c4', text: 'Motor: +4.85. 42.Bg2+ Kf5 43.Bd5 ile c-piyonu da düşer.' },
      ],
    },
  },
  qa: [
    { q: 'Smislov neden Cambridge Springs Savunmasını seçti?', a: 'CSM’nin maç notlarına göre Smislov, Kasparov’un çok iyi bildiği 5...dxc4 ile başlayan keskin sistemlerden kaçınmak istedi ve eski ama sağlam 6...Qa5’i seçti. Bu savunmada vezir c3 atını bağlar ve ...Bb4, ...Ne4 ile somut baskı kurar; ezber yerine anlayış gerektirir, bu da tecrübeli Smislov’a uygundu. Motor 6...Qa5’i +0.33 ile tamamen oynanabilir buluyor.' },
    { q: 'Kasparov neden 7.Nd2 değil 7.cxd5 ve 8.Qd2 oynadı?', a: '7.Nd2 ana hattır ama ...Bb4, ...Ne4 ve ...dxc4 gibi taktik fikirlerle dolu bir oyuna götürür. 7.cxd5 Nxd5 8.Qd2 ile (The Spectator’a göre Alekhine’in sistemi) Beyaz c3’ü vezirle korur, g5 filine yönelik taktikleri baştan söndürür ve merkez yapısının belirleyici olacağı sakin bir oyuna yönelir. Motor iki yolu neredeyse eşit görüyor (+0.29 / +0.23).' },
    { q: 'Siyah açılıştan nerede tam eşitlikle çıkamadı?', a: 'Motor 9...O-O yerine 9...h6 ya da 9...Nxc3’ü (Motor: +0.24) daha iyi buluyor; 9...O-O +0.58. Kasparov’un 9. oyun notlarında da Smislov’un 9...e5 ile bu oyundaki 9...O-O’yu düzeltmeye çalıştığı, ana hattın 9...h6 olduğu yazıyor. Ardından 11...exd4 (yerine 11...h6) ile Beyazın taşları biraz daha serbest kaldı.' },
    { q: 'Asılı piyonlar nedir, 18.c4 neden tartışmalı?', a: 'Asılı piyonlar, yanlarındaki b- ve e-hatları açık olan yan yana iki merkez piyonudur (burada c4–d4). Vezirli oyunda merkezde alan ve d5 gibi kırılma imkânı verirler; oyunsonunda ise piyonla korunamadıkları için hedef olurlar. Motor 18.c4’ü (vezir değişimine izin verdiği için) +0.08 ile değerlendiriyor, 18.Qb2 ise +0.75. Kasparov fil çifti ve piyonları ilerletme şansıyla bu riski göze aldı.' },
    { q: '23.d5 neden bu kadar güçlüydü?', a: 'd4 piyonu iki at ve d7 kalesinin hedefiydi; savunmaya çekilmek Beyazı pasifleştirirdi (23.Nb3? Nxd4 ile piyon düşer, Motor: −0.39). 23.d5 hem e6 atını hem c6’yı vurdu, dxc6 sonrası Siyahın piyon yapısını dağıttı ve c-piyonuna c5’e ilerleme yolu açtı. Motor: +1.06, en yakın alternatif 23.Rb1 +0.34.' },
    { q: 'Siyah 22. hamlede d4 piyonunu neden almadı?', a: 'Smislov 22...Ne6 ile baskıyı artırmayı tercih etti, ama Beyaz hemen d5 ile cevap verdi. Motor 22...Rxd4’ü en iyi buluyor (Motor: +0.53): 23.Re7 b6 24.Nxc6 Rd7 sonrası Beyazın aktifliği piyonu ancak telafi eder. Belki Smislov Re7 ve Nxc6 ile gelen aktifliği abarttı; sonuçta zaman kaybı Beyaza d5’i oynatma fırsatı verdi.' },
    { q: 'a4’teki at neden oyun dışı kaldı?', a: 'At 20...Na4 ile ileri bir kareye gitti ama oradan merkeze dönüş yolu c5 karesiydi. 26.c5! ile bu kare kapandı, 28.Bd6 da b-hattını ve c5’i kontrol etti. CSM notu da 26.c5’in atın geri dönüşünü engellediğini vurguluyor. Motor 20...Ne6’yı (+0.21) tercih ediyordu; Na4 ise +0.60.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En önemli an 29. hamle: 29...Rd8 (Motor: +1.26) birinci yatayı tutardı, oyundaki 29...Bd5 ise Rb8+ ve Rf8+ ile kaleyi içeri aldı (+2.07). Sonra 31...Kg6 (Motor: +2.36) ve özellikle 32...Rf7 ya da 32...f5 (Motor: +1.70–2.00) ile Siyah kaliteyi kaybetmeden direnebilirdi; 32...g6? ise 33.Ba6! ile kaliteyi verdi (+3.22).' },
    { q: 'Kasparov da hata yaptı mı?', a: 'Evet: 32.g3 bir tempo kaybıydı, çünkü 32.Ba6! hemen kaliteyi kazanıyordu (Motor: +2.97, oyundaki hamle +1.41). CSM notu da 33.Ba6’nın kaliteyi hemen kazanacağını belirtiyor. Smislov bu fırsatı 32...g6? ile kullanamadı; CSM her iki tarafın 31–32. hamlelerdeki kararlarını kısmen zaman sıkıntısı ortamına bağlıyor.' },
  ],
  sources: [
    { title: 'Christian Science Monitor: Kasparov takes a commanding lead in Candidates’ match (1984, oyun notlarıyla)', url: 'https://proof.csmonitor.com/1984/0402/040213.html' },
    { title: 'The Spectator arşivi, 24 Mart 1984 satranç köşesi (3. oyun)', url: 'https://archive.spectator.co.uk/article/24th-march-1984/37/chess' },
    { title: 'The Spectator arşivi, 7 Nisan 1984 satranç köşesi (9. oyun, 8.Qd2 Alekhine sistemi)', url: 'https://archive.spectator.co.uk/article/7th-april-1984/38/chess' },
    { title: 'ABC Color: Kasparov vs. Smyslov, 1984 (9. oyun, Kasparov’un notları)', url: 'https://www.abc.com.py/edicion-impresa/deportes/kasparov-vs-smyslov-1984-461386.html' },
    { title: 'Christian Science Monitor: Kasparov’s complexity and Smyslov’s simplicity meet in final Candidates’ match', url: 'https://csmonitor.com/1984/0326/032613.html' },
    { title: 'Wikipedia: Queen’s Gambit Declined, Cambridge Springs Defense', url: 'https://en.wikipedia.org/wiki/Queen%27s_Gambit_Declined,_Cambridge_Springs_Defense' },
  ],
  exercises: [
    { id: 'ks-1', kind: 'tekrar', plan: false, title: 'Asılı piyonları ilerletin',
      source: 'Kasparov – Smislov, 1984 (23. hamle)',
      fen: 'r5k1/pp1r1bpp/2p1np2/N7/n1PP4/P5B1/5PPP/2R1RBK1 w - - 7 23',
      prompt: 'Siyahın atları a4 ve e6’da, d4 piyonuna baskı var. Asılı piyonlarla ne yaparsınız?',
      hint: 'Savunmak yerine ilerletin.',
      line: ['d5'],
      explanation: '**23.d5!** Piyon e6 atına saldırır; dxc6 sonrası c-piyonu c5’e ilerleyip c6 zayıflığını sabitleyecek. Motor: d5 +0.8, sonraki en iyi hamle +0.3.',
      link: 'Asılı piyonlar ilerleyince merkezde zayıf kareler rakibe kalır ama doğru zamanda ilerletilirse rakip piyonları zayıflar.' },
    { id: 'ks-2', kind: 'tekrar', plan: false, title: 'Kaleyi bağlayın',
      source: 'Kasparov – Smislov, 1984 (33. hamle)',
      fen: '5R2/p2r3p/2pBkpp1/2Pb4/n7/P5P1/5P1P/5BK1 w - - 0 33',
      prompt: 'Siyahın şahı e6’da, kalesi d7’de. Filler bu pozisyonda nasıl kullanılır?',
      hint: 'c8 karesinden d7 kalesine bakılabilir.',
      line: ['Ba6'],
      explanation: '**33.Ba6!** Bc8 ile d7 kalesini şaha bağlama tehdidi var. Siyah ...Rxd6 ile kaleyi vermek zorunda kalır ve Beyaz kalite önde oyunsonuna geçer. Motor: Ba6 +3.3, sonraki en iyi hamle +1.1.',
      link: 'Asılı piyonların ilerleyişiyle açılan çaprazlar fil çiftine geniş alan verdi.' },
    { id: 'ks-3', kind: 'transfer', plan: false, title: 'Capablanca’nın h7 alımı',
      source: 'Capablanca – Alekhine, Dünya Şampiyonası maçı, Buenos Aires 1927, 7. oyun (20. hamle)',
      fen: 'r1b1r1k1/pp3ppp/8/8/3R4/1PPBP3/2Q2PqP/4K2R w K - 0 20',
      prompt: 'Aynı Cambridge Springs; Alekhine ...Qxg2 ile piyon aldı ve h1 kalesine saldırıyor. Beyaz nasıl devam eder?',
      hint: 'd3 filinin çaprazı h7’ye açık.',
      line: ['Bxh7+'],
      explanation: '**20.Bxh7+!** Kf8 21.Be4 ile fil tempo ile vezire saldırır, h-hattı açılır ve Beyaz kaleleri h-hattına geçer. Motor: Bxh7+ +1.6, sonraki en iyi hamle 0.0.',
      link: 'Kasparov fil çiftini merkezde kullandı, Capablanca fil çaprazıyla şah kanadını açtı. Cambridge Springs’te Siyahın vezir çıkışı vezir kanadına gidince şah kanadı zayıf kalabilir.' },
    { id: 'ks-4', kind: 'transfer', plan: false, title: 'Kale yedinci yatayda',
      source: 'Capablanca – Alekhine, Dünya Şampiyonası maçı, Buenos Aires 1927, 7. oyun (29. hamle)',
      fen: '4rk2/1p3pp1/3rb3/p1qB4/2P1R3/1P2P3/1Q3P2/4K2R w K - 8 29',
      prompt: 'h-hattı açık. Saldırıyı nasıl sürdürürsünüz?',
      hint: 'Kale h-hattından yedinci yataya girebilir.',
      line: ['Rh7'],
      explanation: '**29.Rh7!** Kale g7’ye baskı yapar; vezir b2 de uzun çaprazdan g7’ye bakıyor. 29...Ke7 30.Qxg7 ile şah kanadı çöker. Motor: Rh7 +4.7, sonraki en iyi hamle +2.7.',
      link: 'Kasparov’un kalesi b8 ve f8 ile birinci yataya girdi; Capablanca’nınki h7 ile yedinci yataya. İki maçta da açılan hatta giren kale belirleyici oldu.' },
  ],
};
