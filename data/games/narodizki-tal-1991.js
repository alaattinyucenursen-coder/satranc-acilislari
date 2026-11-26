// Narodizki – Tal, Moskova turnuvası, Moskova 1991. Kaynak: PgnMentor (Tal.pgn).
export default {
  id: 'narodizki-tal-1991',
  theme: 'g2 fili gidince uzun çapraz ve ...f5-f4 yürüyüşü',
  white: 'E. Narodizki', black: 'Mihail Tal',
  whiteShort: 'Narodizki', blackShort: 'Tal',
  event: 'Moskova turnuvası', site: 'Moskova', year: 1991, eco: 'B23',
  variation: 'Sicilya Savunması, Kapalı sistem: 2.Nc3 e6 3.g3 d5 4.Bg2', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. Bg2 Nf6 5. Nge2 Be7 6. O-O O-O 7. Nf4 dxe4 8. Nxe4 Qc7 9. d3 Nc6 10. Be3 b6 11. Nh5 Nxe4 12. Bxe4 f5 13. Bxc6 Qxc6 14. Nf4 e5 15. Ng2 f4 16. gxf4 Bh3 17. f3 exf4 18. Bd2 Qg6 19. Rf2 Bd6 20. Kh1 Qh5 21. Bc3 Rae8 22. Qg1 g5 23. Re1 Kf7 24. Re4 Rg8 25. Rxe8 Rxe8 26. Qf1 Be6 27. Bd2 Bd5 28. Kg1 Re6 29. Ne1 g4 30. fxg4 Qxg4+ 31. Ng2 Ke8 32. Bxf4 Bxg2 33. Rxg2 Qxf4 34. Qd1 0-1`,

  summary: 'Tal’ın son yıllarından öğretici bir pozisyonel galibiyet. Kapalı Sicilya’ya 3...d5 ile merkezden karşılık veren Tal, Beyazın Nge2-f4 kuruluşuna karşı sakin gelişti ve 7...dxe4 ile merkezi açtı. Oyun 12. hamleye kadar dengedeydi; Beyazın 11.Nh5 ile erken şah kanadı girişimi bile ciddi bir şey kaybettirmedi. Asıl dönüm noktası **13.Bxc6?** oldu: Beyaz, şahının tek beyaz kareli savunucusu olan fiyanketto filini c6 atıyla değişti. Bundan sonra Tal’ın veziri uzun çaprazda (c6-h1) g2’ye baktı, c8 fili h3’e geçti ve Siyahın şah kanadındaki piyon çoğunluğu **...e5, ...f4** ile g3’e yürüdü. 16.gxf4? ile Beyaz şahının önünü kendi eliyle açtı. Ardından Tal acele etmedi: taşlarını en iyi karelere yerleştirdi (Qg6-h5, Bd6, Rae8, ...g5), Beyazın savunmacılarını g2 ve f3’e bağladı ve 29...g4! ile g-hattını açtı. Beyaz son anda 32.Bxf4? ile bir piyon toplamak isteyince 32...Bxg2! 33.Rxg2 Qxf4 ile f2 kalesinin aşırı yüklendiği ortaya çıktı ve Siyah bir taş kazandı.',
  intro: 'Kapalı Sicilya (1.e4 c5 2.Nc3 ve g3-Bg2), Smislov ve Spasski gibi oyuncuların sevdiği, Açık Sicilya’nın uzun teorisinden kaçan yavaş bir sistemdir. 2...e6 hamlesi Siyaha 3.g3’e karşı hemen **3...d5** imkânını verir: Beyazın fili g2’ye gelmeden e4 sorgulanır. 4.Bg2 sonrası Siyahın üç makul yolu vardır: **4...d4** ile alan kazanıp c3 atını kovmak (ardından ...e5 ile ters bir Kral Hint yapısı), **4...dxe4** ile merkezi hemen açmak ya da Tal’ın seçtiği **4...Nf6** ile e4’e baskıyı artırıp kararı ertelemek. Motor üçünü de yaklaşık eşit görüyor. Bu oyunda Beyaz merkezi gerginliği hiç çözmedi (exd5 oynamadı), Siyah da ...d4 fırsatlarını kullanmadı; merkez 7...dxe4 ile açıldı ve oyun taşların ve beyaz karelerin mücadelesine dönüştü. Oyunun dersi açık: fiyanketto filiyle birlikte g3-f2-h2 piyon yapısı bir bütündür; fil gidince g3 piyonu bir hedefe, uzun çapraz da bir otoyola dönüşür.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'g3-Bg2 ve Nge2 ile Kapalı Sicilya kuruluşu yapmak; e4’ü g2 filiyle desteklemek ve d4’ü erken oynamamak.',
      'e2 atını f4’e getirip d5 ve e6 karelerine baskı yapmak; merkez açılınca Nh5 ve Be4 ile h7’ye ve Siyahın şahına yönelmek.',
      'Merkez açıldıktan sonra fiyanketto filini uzun çaprazda (Bg2) tutmak: bu fil hem b7/a8 yönüne baskı yapar hem de kendi şahının çevresindeki beyaz kareleri (f3, g2, h3) korur.',
      'Siyah ...f5-...e5 ile şah kanadında piyon çoğunluğunu yürüttüğünde f2-f4 ile karşı darbe vurmak; 13.Bg2 e5 14.f4 bunun tipik örneğiydi.',
      '13.Bxc6? sonrası ise savunmaya geçmek: Ng2 ile uzun çaprazı kapatmak, f3 ile f-hattını ve çaprazı tıkamak, Rf2 ve Qg1 ile ikinci yatayı ve g2 karesini tutmak.',
      'Pasif savunma yerine merkezde d3-d4 ile karşı oyun aramak; motor 22.d4, 26.d4 ve 27.d4’ü oyun hamlelerinden biraz daha iyi buluyor.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '3...d5 ile merkezi hemen talep etmek; 4.Bg2’ye ...d4, ...dxe4 veya ...Nf6 ile karşılık vermek ve Beyazın rahat bir Kapalı Sicilya kurmasına izin vermemek.',
      '...Nf6, ...Be7, ...O-O ile sağlam gelişmek; doğru anda ...dxe4 ile merkezi açıp atları değişerek Beyazın saldırı potansiyelini azaltmak.',
      '...b6 ile c5’i desteklemek ve c8 filine b7’yi hazırlamak; fil uzun çapraza gelince g2’ye baskı başlar.',
      '**...f5 ve ...e5** ile şah kanadındaki piyon çoğunluğunu yürütmek; ...f4 ile g3 piyonuna saldırıp hatları Beyazın şahına doğru açmak.',
      'g2 fili gidince veziri uzun çapraza (c6), sonra g-hattına (Qg6) ve h-hattına (Qh5) getirmek; c8 filini h3’e, daha sonra d5’e koyup g2 ve f3’e sürekli baskı yapmak.',
      'f4 piyonunu ...Bd6 ve ...g5 ile bir kama gibi tutmak; bu piyon Beyazın taşlarını (Bd2, Rf2, Ng2) sıkıştırır.',
      '...g5-g4 ile son kırılmayı yapmak, g-hattını açmak ve Beyazın aşırı yüklenmiş savunucularından birini (32...Bxg2!) kazanmak.',
    ] },
  },
  critical: [
    { move: '7b', title: '7...dxe4: merkezi açmak', text: 'Siyah 6...d4 ve 7...d4 gibi alan kazandıran seçenekler yerine merkezde değişir. Motor 7...d4 8.Nb1 Nc6 9.d3 e5’i biraz daha iyi buluyor (−0.3), ama 7...dxe4 de eşitlik verir (−0.1). Bu karar oyunun karakterini belirler: atlar e4’te değişilecek ve Beyazın g2 fili e4’e çıkacak. Bu fil hem en iyi saldırı taşıdır hem de Beyazın şahını koruyan tek beyaz kareli taştır; onun kaderi oyunun kaderini belirleyecek.' },
    { move: '12b', title: '12...f5: fili tempo ile kovalamak', text: 'Siyah e4 filini tempo ile kovalar, h7’ye baskıyı keser ve ...e5-f4 yürüyüşünün ilk adımını atar. Motor 12...f5’i en iyi buluyor (yaklaşık −0.9/−1.1). Burada Beyaz için doğru yol fili 13.Bg2 veya 13.Bf4 ile korumaktı; o zaman Beyaz ...e5’e f2-f4 ile cevap verip dayanabilirdi. Siyahın e6 piyonu biraz zayıflasa da f5 piyonu Siyaha şah kanadında alan kazandırır.' },
    { move: '13w', title: '13.Bxc6? g2 filinin değişimi', text: 'Oyunun stratejik hatası. Beyaz uzun çaprazdaki filini c6 atıyla değişir. Siyah vezirle geri alır; vezir artık c6’dan doğrudan g2’ye bakar ve ...Bb7 gelirse g2’de mat tehdidi doğar. Üstelik h5 atı havada kalır ve geri dönmek zorundadır. Motor 13.Bf4 (−0.85) veya 13.Bg2 e5 14.c3/f4 (−1.0 civarı) öneriyor; 13.Bxc6 sonrası değerlendirme −2.7/−3.0’a düşüyor. Beyaz bir fil kaybetmedi ama şahının çevresindeki beyaz kareleri kaybetti.' },
    { move: '15b', title: '15...f4! g3’e yürüyüş', text: 'f-piyonu g3’e saldırır ve aynı anda e3 filini tehdit eder. Piyonlar değişirse f-hattı Siyahın f8 kalesine açılır, c8 fili h3’e gelir ve g2 atı hem vezir hem fil tarafından hedef alınır. Motor 15...f4’ü en iyi buluyor (−3.2/−3.4); 15...Bb7 de iyi (−2.6) ama daha yavaştır. Bu, piyon çoğunluğunun fiyanketto zayıflığına karşı nasıl kullanılacağını gösteren klasik bir plan hamlesidir.' },
    { move: '16w', title: '16.gxf4? şahın önü açılıyor', text: 'Beyaz piyonu alarak g-hattını ve şahının önünü açar. Motor 16.Bd2’yi öneriyor (−3.2): fil kaçar, g3 piyonu yerinde kalır ve ...fxg3 olursa hxg3 ile yapı korunur. 16.gxf4 sonrası −4.3/−5.0. Ancak Tal da kesin yolu seçmedi: 16...Bh3 (−2.6) yerine 16...exf4! 17.Nxf4 Bg5! ile f4 atına f8 kalesi ve g5 fili birlikte baskı yapar, Beyazın şahı tamamen açılırdı (−5.1).' },
    { move: '17w', title: '17.f3: tek savunma', text: 'Fil h3’ten ve vezir c6’dan g2 atına iki kez saldırıyor. 17.f3 uzun çaprazı kapatır ve tek hamledir: 17.Ne1? Qg6+ 18.Kh1 Bxf1 kalite kaybettirir (−5.8). Bundan sonra oyun bir “kale içinde savunma” pozisyonuna döner; Beyazın taşları g2 ve f3’ü korumaya kilitlenir.' },
    { move: '29b', title: '29...g4! g-hattını açmak', text: 'Siyah, uzun bir yerleştirme döneminin ardından son kırılmayı yapar. 30.fxg4 Qxg4+ ile vezir şah çekerek g-hattına gelir, g2 atı d5 filinin baskısı altında kalır ve f4 piyonu Beyaz taşlarını sıkıştırmaya devam eder. Motor 29...g4’ü en iyi buluyor (−2.8/−3.6). Bu kırılmanın zamanlaması önemliydi: Beyaz 29.Ne1 ile atını g2’den çekmiş, g2’yi zayıflatmıştı.' },
    { move: '32b', title: '32...Bxg2! doğru sıralama', text: 'Beyaz 32.Bxf4? ile piyonu aldı, ama f2 kalesi hem g2 atını hem f4 filini koruyordu: aşırı yüklenmişti. Tal önce at alır: 33.Rxg2 kale g2’ye gidince f4 fili savunmasız kalır ve 33...Qxf4 ile Siyah bir taş kazanır (Motor: −4.5). Ters sıra 32...Bxf4? 33.Rxf4 ise vezire saldırır ve oyunu dengeye getirir (−0.5). Beyaz için daha iyisi 32.c4 (−2.9) idi.' },
  ],
  lessons: [
    '2.Nc3 e6 3.g3 d5 hattında Siyah merkezi hemen talep eder; 4.Bg2 sonrası ...d4, ...dxe4 ve ...Nf6 yaklaşık eşit değerde seçeneklerdir. Beyaz exd5 ile gerginliği çözmezse ...d4 c3 atını kovar ve Siyaha alan kazandırır.',
    'Fiyanketto fili ile g3-f2-h2 piyonları bir bütündür. Fili değişmek (13.Bxc6?) şahın çevresindeki beyaz kareleri ve uzun çaprazı rakibin veziriyle filine bırakır; g3 piyonu da korumasız bir hedefe dönüşür.',
    'Şah kanadındaki piyon çoğunluğu (...f5, ...e5, ...f4, ...g5-g4) zayıflamış bir g3 yapısına karşı yürütülünce hatlar açılır. Savunan taraf piyonu almak (16.gxf4?) yerine yapıyı korumayı (16.Bd2) tercih etmelidir.',
    'Avantajlı tarafın acele etmesine gerek yoktur: Tal 17. ile 29. hamleler arasında taşlarını en iyi karelere koydu, rakibin karşı oyununu engelledi ve kırılmayı (29...g4) ancak her şey hazır olduğunda yaptı.',
    'Önde ilerlemiş bir piyon (f4) bir kama gibidir: rakibin taşlarını (Bd2, Rf2, Ng2) bağlar ve hatların açılmasını kolaylaştırır. Onu ...Bd6 ve ...g5 ile desteklemek, onu almaktan daha değerliydi.',
    'Aşırı yüklenmiş taşı arayın: f2 kalesi hem g2’yi hem f4’ü koruyordu. Bağlı veya aşırı yüklenmiş bir taşı almadan önce doğru sırayı hesaplayın: önce savunucuyu çekin (32...Bxg2!), sonra korumasız kalan taşı alın.',
    'Savunmada bile aktif karşı oyun aranmalıdır: Beyazın merkez kırılması d3-d4, pasif yerleştirme hamlelerinden (26.Qf1, 27.Bd2) daha dirençliydi.',
  ],
  notes: {
    '1w': {
      text: 'Beyaz şah piyonunu iki kare ilerletir; d5 ve f5 karelerini kontrol eder, f1 filine ve vezire yol açar.',
      amac: 'Merkezi piyonla tutmak ve hızlı gelişmek. Kapalı Sicilya planında bu piyon g2 filiyle desteklenecek.',
      neden: 'Narodizki’nin seçtiği kuruluş, 1.e4’ten sonra Siyah ne oynarsa oynasın uzun teorik tartışmaya girmeden kendi bildiği yapıyı kurmayı hedefler.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; daha yavaş, pozisyonel bir mücadele. Motor: +0.2.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; sonra c4 veya e4’e geçilebilir. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: 'Sicilya Savunması: Siyah c-piyonuyla d4 karesini kontrol eder ve simetrik olmayan bir mücadele seçer.',
      amac: 'Beyazın d4 ile tam merkez kurmasını zorlaştırmak; dengesiz, kazanma şansı yüksek bir oyun almak.',
      neden: 'Sicilya, Tal’ın kariyeri boyunca sevdiği keskin açılışlardan biriydi; hem Açık Sicilya’nın taktik oyununu hem de Kapalı sistemlerin manevra oyununu iyi biliyordu.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; daha klasik ve sakin. Motor: +0.2, Sicilya ile aynı seviyede.' },
        { move: '1...e6', text: 'Fransız Savunması; merkezde kapalı yapılar. Motor: +0.35.' },
      ],
    },
    '2w': {
      text: '2.Nc3: Beyaz Kapalı Sicilya’ya yönelir; Nf3 ve d4 ile merkezi açmak yerine g3-Bg2 kuruluşunu hedefler.',
      amac: 'Açık Sicilya’nın (2.Nf3 ve 3.d4) geniş teorisinden kaçınmak ve şah kanadında yavaş bir saldırı kurmak.',
      neden: '2.Nc3 hem Kapalı Sicilya’ya hem de Grand Prix saldırısına (f4) kapı açık bırakır. Ayrıca bazı Siyah kuruluşlarına (örneğin 2...d6’dan sonra Nge2) esnek geçişlere izin verir.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya giden ana yol; Motor: +0.46, biraz daha iddialı ama rakibin hazırlığına açık.' },
        { move: '2.c3', text: 'Alapin varyantı; d4 ile tam merkez hedeflenir. Motor: +0.33.' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah d5 karesini destekler ve ...d5 kırılmasını hazırlar; f8 filine de yol açılır.',
      amac: 'Beyaz g3-Bg2 ile e4’ü desteklemeden önce merkezi ...d5 ile hemen sorgulamak.',
      neden: '2...Nc6 3.g3 e6 4.Bg2 sırasında Beyazın fili g2’ye yerleşir ve ...d5 daha az etkilidir; 2...e6 ise 3.g3’e hemen 3...d5 ile cevap verme imkânı tanır. Bu yüzden ...e6 kuruluşu Kapalı Sicilya’ya karşı popüler bir cevaptır.',
      diger: [
        { move: '2...Nc6', text: 'Kapalı Sicilya’nın ana yolu: 3.g3 g6 4.Bg2 Bg7 5.d3 d6 ile klasik simetrik yapılar. Motor: +0.44.' },
        { move: '2...d6', text: 'Esnek; Beyaz 3.d4 ile Açık Sicilya’ya da geçebilir. Motor: +0.35.' },
        { move: '2...a6', text: 'Hem ...b5 hem ...d5 için hazırlık; modern bir seçenek. Motor: +0.40.' },
      ],
    },
    '3w': {
      text: '3.g3: Beyaz fili g2’ye fiyanketto yapmaya hazırlanır; fil uzun çaprazdan e4’ü destekleyecek.',
      amac: 'Kapalı Sicilya kuruluşunu tamamlamak: Bg2, Nge2 veya d3, O-O ve gerektiğinde f2-f4.',
      neden: 'Beyaz planından sapmaz, ama bu sıra ...e6 kuruluşuna karşı 3...d5’i davet eder. Motor bu yüzden 3.Nge2 veya 3.Nf3’ü biraz daha iyi buluyor: 3.g3 sonrası Siyah hemen eşitlik alır.',
      diger: [
        { move: '3.Nf3', text: 'Daha esnek; 3...d5 4.exd5 exd5 5.Bb5+ gibi açık yapılara geçilebilir. Motor: +0.33.' },
        { move: '3.Nge2', text: 'd4’ü hazırlar; 3...d5 4.exd5 exd5 5.d4 ile Siyahın izole/asılı merkezine baskı yapılır. Motor: +0.37.' },
        { move: '3.d4', text: '3...cxd4 4.Qxd4 ile vezir erken merkeze çıkar. Motor: +0.20.' },
      ],
    },
    '3b': {
      text: '3...d5! Siyah fil g2’ye gelmeden merkezi hemen talep eder ve e4 piyonuna saldırır.',
      amac: 'Beyazın Kapalı Sicilya kuruluşunu rahatça tamamlamasını engellemek; merkezde eşit pay almak.',
      neden: 'Bu an kritik: Beyazın fili henüz g2’de değil, e4 yalnızca c3 atıyla korunuyor. Bir hamle sonra Bg2 gelince ...d5’in etkisi azalırdı. Motor 3...d5’i en iyi hamle olarak görüyor (0.00).',
      diger: [
        { move: '3...Nc6', text: 'Daha sakin; 4.Bg2 Nf6 5.d3 d5 ile merkez sonra kurulur. Motor: +0.12.' },
        { move: '3...Nf6', text: '4.e5 Nd5 5.Nxd5 exd5 ile Siyah biraz pasif bir yapı alır. Motor: +0.27.' },
      ],
    },
    '4w': {
      text: '4.Bg2: Fil uzun çapraza gelir ve e4’ü destekler; şimdi e4 iki kez korunuyor.',
      amac: 'Kapalı Sicilya planına sadık kalmak: merkezi kendisi açmak yerine Siyaha karar verdirmek.',
      neden: 'Motor 4.exd5 exd5 5.d4’ü biraz daha iyi buluyor (−0.04 / −0.19): Beyaz merkezi açınca daha rahat gelişir. Ama exd5 Kapalı Sicilya ruhuna aykırıdır ve Siyaha serbest bir oyun verir; Narodizki gerginliği korumayı tercih etti.',
      diger: [
        { move: '4.exd5', text: '4...exd5 5.d4 ile Siyahın merkez piyonlarına baskı; açık ve eşit bir oyun. Motor: −0.04.' },
        { move: '4.f4', text: 'Grand Prix tarzı; 4...dxe4 5.Nxe4 Be7 6.Nf3 ile dinamik bir oyun. Motor: −0.09.' },
      ],
    },
    '4b': {
      text: '4...Nf6 ile Siyah gelişir ve e4’e üçüncü kez baskı yapar.',
      amac: 'Merkezdeki kararı (d4 mü, dxe4 mü?) ertelemek ve önce taşları geliştirmek.',
      neden: 'Bu hamle Beyaza 5.e5 Nfd7 ile Fransız tipi bir yapıya geçme imkânı tanır; Tal buna razıydı. Motor 4...d4’ü biraz daha iyi buluyor (−0.18): 5.Nce2 sonrası Siyah alan kazanır ve ...h5-h4 gibi aktif planlar mümkün olur.',
      diger: [
        { move: '4...d4', text: '5.Nce2 (veya 5.Nb1) ile at geri döner; Siyah ...Nc6, ...e5 ile ters bir Kral Hint yapısı kurar. Motor: −0.18.' },
        { move: '4...dxe4', text: '5.Nxe4 Nc6 6.d3 ile merkez hemen açılır; Beyazın g2 fili güçlüdür. Motor: +0.27.' },
      ],
    },
    '5w': {
      text: '5.Nge2: At e2’ye gelişir; f4’e geçip d5 ve e6’ya baskı yapmaya hazırlanır.',
      amac: 'f-piyonunu serbest bırakmak ve atı f4 üzerinden aktif bir kareye götürmek.',
      neden: 'Bu hamlenin bir kusuru var: e2’yi doldurunca c3 atının geri çekilecek iyi karesi kalmaz ve ...d4 daha güçlü olur (5...d4 6.Nb1, Motor: −0.69). Motor 5.e5 Nfd7 6.f4’ü öneriyor (+0.02); bu Fransız’ın ters bir versiyonudur ve Beyaza şah kanadında alan verir.',
      diger: [
        { move: '5.e5', text: '5...Nfd7 6.f4 Be7 7.Nf3 ile Beyaz şah kanadında alan alır. Motor: +0.02.' },
        { move: '5.d3', text: '5...d4 6.Nce2 Nc6 7.f4 ile klasik Kapalı Sicilya yapısı. Motor: −0.07.' },
        { move: '5.exd5', text: '5...exd5 6.d4 ile merkez açılır; motor eşit görüyor.' },
      ],
    },
    '5b': {
      text: '5...Be7: Siyah sakin gelişir ve rok yapmaya hazırlanır.',
      amac: 'Önce şahı güvenceye almak; merkezdeki gerginliği sonra çözmek.',
      neden: 'Tal burada risk almadı. Oysa motor 5...d4! 6.Nb1 ile alan kazanmayı öneriyor (−0.69): c3 atı e2 dolu olduğu için b1’e geri dönmek zorunda kalır. 5...Be7 sonrası Beyaz exd5 ile eşitliği alabilirdi.',
      diger: [
        { move: '5...d4', text: '6.Nb1 (Nce2 kare yok) d3 veya ...e5 ile Siyah alan ve rahat bir oyun alır. Motor: −0.69.' },
        { move: '5...dxe4', text: '6.Nxe4 Nxe4 7.Bxe4 Nc6 ile sade bir eşitlik. Motor: +0.09.' },
        { move: '5...Nc6', text: '6.exd5 exd5 7.d4 ile açık yapı. Motor: +0.07.' },
      ],
    },
    '6w': {
      text: '6.O-O: Beyaz şahını güvenceye alır ve f1 kalesini oyuna sokar.',
      amac: 'Gelişimi tamamlamak; Nf4 ve gerekirse f2-f4 planlarına hazırlanmak.',
      neden: 'Rok doğal görünür ama merkezdeki soruyu çözmez. Motor 6.exd5 exd5 7.d4’ü öneriyor (+0.25): Beyaz bu yolla Siyahın ...d4 ilerleyişini engeller ve merkezde inisiyatif alır. 6.O-O sonrası ...d4 yine güçlüdür (−0.47).',
      diger: [
        { move: '6.exd5', text: '6...exd5 7.d4 cxd4 8.Nxd4 ile Siyah izole d-piyonuyla kalır. Motor: +0.25.' },
        { move: '6.d4', text: '6...cxd4 7.Nxd4 O-O 8.O-O ile merkezi açan bir oyun. Motor: +0.24.' },
      ],
    },
    '6b': {
      text: '6...O-O: Siyah da rok yapar; iki taraf da şahlarını güvenceye aldı.',
      amac: 'Gelişimi tamamlayıp merkezdeki gerginliği en uygun anda çözmek.',
      neden: 'Motor yine 6...d4 7.Nb1 Nc6 8.d3 e5 ile ters bir Kral Hint yapısını öneriyor (−0.44). Tal ise önce şahını emniyete aldı; ...dxe4 ve ...Nxe4 seçenekleri de eşitlik verir.',
      diger: [
        { move: '6...d4', text: '7.Nb1 h5 8.h3 Nc6 ile Siyah alan kazanır; Beyazın b1 atı yavaşça oyuna girer. Motor: −0.44.' },
        { move: '6...dxe4', text: '7.Nxe4 Nxe4 8.Bxe4 Nc6 ile sade bir eşitlik. Motor: +0.05.' },
      ],
    },
    '7w': {
      text: '7.Nf4: At f4’e gelir; d5 ve e6’ya baskı yapar ve gerekirse h5’e geçmeye hazırdır.',
      amac: 'd5’e baskıyı artırarak Siyahı merkezde karar vermeye zorlamak ve şah kanadına bir saldırı taşı yaklaştırmak.',
      neden: 'Beyaz exd5’i hâlâ oynamıyor. Motor 7.exd5 exd5 8.d4’ü öneriyor (+0.37); 7.Nf4 sonrası −0.6. f4’teki at aktif görünse de ...e5 ile tempo kazanarak kovalanabilir; bu motif 14...e5’te tekrar ortaya çıkacak.',
      diger: [
        { move: '7.exd5', text: '7...exd5 8.d4 Nc6 9.dxc5 ile Siyahın merkezi zayıflar. Motor: +0.37.' },
        { move: '7.d3', text: '7...d4 8.Nb1 Nc6 9.a4 ile kapalı bir oyun. Motor: +0.04.' },
      ],
    },
    '7b': {
      text: '7...dxe4: Siyah merkezde değişir; e4’e gelecek at değişilecek ve g2 fili merkeze çıkacak.',
      amac: 'Gerginliği çözmek, taşları değiştirerek Beyazın şah kanadı planlarını zayıflatmak ve c5-e6 yapısıyla sağlam bir oyun almak.',
      neden: 'f4 atı d5’e baskı yaptığı için Siyah kararını vermek zorundaydı. Motor 7...d4 8.Nb1 Nc6 9.d3 e5’i biraz daha iyi buluyor (−0.32): bu hamle f4 atını da ...e5 ile kovalardı. 7...dxe4 daha sade bir eşitlik verir (−0.10).',
      diger: [
        { move: '7...d4', text: '8.Nb1 Nc6 9.d3 e5 10.Nd5 ile ters bir Kral Hint yapısı; Siyah alan kazanır. Motor: −0.32.' },
        { move: '7...Nxe4', text: '8.Nxe4 dxe4 9.Bxe4 f5 ile benzer yapılar. Motor: −0.10.' },
      ],
    },
    '8w': {
      text: '8.Nxe4: Beyaz piyonu atla geri alır ve f6 atına saldırır.',
      amac: 'Merkezi atla işgal etmek ve g2 filinin çaprazını açmak.',
      neden: 'Doğal ve en iyi geri alış (−0.08). 8.Nh5 veya 8.d3 gibi gambit denemeleri piyonsuz kalır ve motor onları −0.55 civarında değerlendiriyor.',
      diger: [
        { move: '8.Nh5', text: '8...Nxh5 9.Qxh5 g6 ile Beyaz piyon eksik kalır. Motor: −0.55.' },
        { move: '8.d3', text: '8...exd3 9.Nxd3 Nc6 ile yine piyon eksiği. Motor: −0.56.' },
      ],
    },
    '8b': {
      text: '8...Qc7: Vezir c7’ye gelir; b8-h2 çaprazından f4 atına ve h2’ye bakar.',
      amac: 'f4 atına baskı yapmak ve d-hattını kaleye bırakmak; Siyahın taşları için zaman kazanmak.',
      neden: 'Motor 8...Nxe4 9.Bxe4 f5’i biraz daha iyi buluyor (−0.15): Siyah fili hemen tempo ile kovalar. Tal önce vezirini aktifleştirmeyi seçti; fark küçük (+0.09).',
      diger: [
        { move: '8...Nxe4', text: '9.Bxe4 f5 10.Bg2 e5 ile Siyah şah kanadında alan alır. Motor: −0.15.' },
        { move: '8...Nc6', text: '9.Nxf6+ Bxf6 10.d3 ile sakin bir eşitlik. Motor: −0.06.' },
      ],
    },
    '9w': {
      text: '9.d3: Beyaz e4 atını destekler ve c1 filine yol açar.',
      amac: 'Merkezdeki atı sağlamlaştırmak ve gelişimi tamamlamak (Be3).',
      neden: 'Sağlam bir hamle (−0.07). Motor 9.Re1’i de öneriyor (+0.08): kale e-hattında e6’ya baskı yapar. Beyazın oyunu henüz dengede.',
      diger: [
        { move: '9.Re1', text: '9...Nxe4 10.Bxe4 Rd8 11.d3 ile e-hattı Beyazın kontrolünde. Motor: +0.08.' },
        { move: '9.Nxf6+', text: '9...Bxf6 10.d3 Nc6 ile taş değişimi; eşit. Motor: 0.00.' },
      ],
    },
    '9b': {
      text: '9...Nc6: At c6’ya gelişir; d4 ve e5 karelerine bakar.',
      amac: 'Gelişimi sürdürmek ve ...Nd4 ya da ...e5 imkânlarını hazırlamak.',
      neden: 'Doğal bir gelişim hamlesi. Motor 9...Nxe4 10.Bxe4 Bd7’yi biraz daha iyi buluyor (−0.27), ama Nc6 de eşit bir oyun verir (+0.02).',
      diger: [
        { move: '9...Nxe4', text: '10.Bxe4 Bd7 11.Qh5 h6 ile Siyah sağlam durur. Motor: −0.27.' },
        { move: '9...Bd7', text: '10.Nxf6+ Bxf6 11.Nh5 ile Beyaz şah kanadında oyun arar. Motor: −0.14.' },
      ],
    },
    '10w': {
      text: '10.Be3: Fil e3’e gelişir ve c5 piyonuna baskı yapar.',
      amac: 'Son küçük taşı geliştirmek ve kaleleri birleştirmek.',
      neden: 'e3 karesi ileride ...f5-f4 ile tempo kaybına yol açacak bir karedir; bu, oyunun devamında önem kazanacak. Motor 10.c3’ü öneriyor (+0.07): d4 karesini kontrol eder ve d3-d4’ü hazırlar.',
      diger: [
        { move: '10.c3', text: '10...Nxe4 11.Bxe4 b6 12.d4 ile merkezde alan. Motor: +0.07.' },
        { move: '10.Re1', text: '10...Nxe4 11.Bxe4 b6 12.Nh5 ile benzer saldırı fikirleri. Motor: 0.00.' },
      ],
    },
    '10b': {
      text: '10...b6: Siyah c5’i destekler ve c8 filine b7 karesini hazırlar.',
      amac: 'Fili uzun çapraza (b7) getirip g2 filine ve Beyazın şahına karşı baskı kurmak.',
      neden: 'Motor 10...b6’yı en iyi hamle olarak görüyor (−0.33). Uzun çapraz bu oyunun ana savaş alanı olacak: Siyah oraya fil veya vezir koyarsa Beyazın g2 fili hem saldırı hem savunma için kritik hale gelir.',
      diger: [
        { move: '10...Nxe4', text: '11.Bxe4 b6 12.c3 Bb7 ile benzer yapı. Motor: −0.20.' },
        { move: '10...Nd4', text: '11.Re1 Nf5 12.Bd2 ile at aktifleşir. Motor: −0.14.' },
      ],
    },
    '11w': {
      text: '11.Nh5: At h5’e gelir; f6 atına saldırır ve Siyahın şahına yönelir.',
      amac: 'Be4 ve Qg4/Qh5 gibi hamlelerle h7 ve g7’ye baskı yapmak; şah kanadında saldırı başlatmak.',
      neden: 'Saldırgan görünür ama erkendir: at kenarda kalır ve ...f5 ile tempo kazanan Siyah ilerleyişlerine hedef olur. Motor 11.Nxf6+ Bxf6 12.c3 ile sade bir eşitliği öneriyor (0.00 / −0.20); Nh5 sonrası −0.74.',
      diger: [
        { move: '11.Nxf6+', text: '11...Bxf6 12.c3 Bb7 13.Nh5 ile Beyaz eşitliği korur. Motor: 0.00.' },
        { move: '11.c3', text: '11...Nxe4 12.Bxe4 Bb7 13.d4 ile merkezde oyun. Motor: −0.3/−0.5.' },
        { move: '11.Re1', text: '11...Nxe4 12.Bxe4 Bb7 13.Qe2 ile sağlam bir pozisyon. Motor: −0.45.' },
      ],
    },
    '11b': {
      text: '11...Nxe4: Siyah e4 atını alır; Beyaz filiyle geri alacak.',
      amac: 'Beyazın saldırı taşlarından birini değiştirmek ve g2 filini e4’e çekerek ...f5 ile tempo kazanmayı hazırlamak.',
      neden: 'Motor 11...Nxe4’ü en iyi buluyor (−0.78). 11...Nxh5 12.Qxh5 Beyaza şah kanadında aktif bir vezir verirdi. Değişimden sonra Beyazın h5 atı tek başına kalır.',
      diger: [
        { move: '11...Nxh5', text: '12.Qxh5 Bb7 13.Nd2 ile Beyazın veziri aktifleşir. Motor: −0.52.' },
        { move: '11...Ne8', text: 'Pasif ama sağlam; 12.c3 Bb7 13.Qe2 e5. Motor: −0.55.' },
      ],
    },
    '12w': {
      text: '12.Bxe4: Fil e4’e gelir ve h7’ye bakar; h5 atıyla birlikte Siyahın şahını hedef alır.',
      amac: 'Qg4 veya Qh5 ile h7 ve g7’ye baskı yapmak.',
      neden: 'En doğal geri alış ve motorun da birinci tercihi (−0.69). Ancak fil artık ...f5 ile tempo kazanılarak kovalanabilecek bir karede. 12.Qg4 veya 12.Qf3 daha kötüdür.',
      diger: [
        { move: '12.Qg4', text: '12...g6 13.Qxe4 Bd7 14.Nf4 ile benzer ama vezir erken açıkta. Motor: −0.86.' },
        { move: '12.Qf3', text: '12...Nxg3 13.fxg3 Bb7 ile Siyah piyon kazanır. Motor: −1.19.' },
      ],
    },
    '12b': {
      text: '12...f5! Siyah e4 filini tempo ile kovalar ve h7’ye baskıyı keser.',
      amac: 'Şah kanadındaki piyon çoğunluğunu (e6, f5, sonra ...e5 ve ...f4) harekete geçirmek ve h5 atını yalnız bırakmak.',
      neden: 'Motor 12...f5’i en iyi hamle olarak görüyor (yaklaşık −0.9/−1.1). Hamle e6’yı biraz zayıflatır ama Beyazın fili b7-a8 yönüne bakmak için c6 atını alma tuzağına düşerse g2 karesi korumasız kalacaktır. 12...g6 veya 12...Bb7 daha yavaştır (−0.6/−0.7).',
      diger: [
        { move: '12...Bb7', text: '13.Qg4 g6 14.Qf4 Qxf4 15.Nxf4 ile vezirler değişir; Siyah biraz iyi. Motor: −0.7.' },
        { move: '12...g6', text: '13.Qf3 Bb7 14.Qf4 ile yine vezir değişimi. Motor: −0.6/−0.7.' },
      ],
    },
    '13w': {
      text: '13.Bxc6? Ciddi stratejik hata: Beyaz uzun çaprazdaki filini c6 atıyla değişir.',
      amac: 'Beyaz muhtemelen Siyahın piyon yapısını bozmayı veya filin saldırı altında kalmasından kurtulmayı umdu.',
      neden: 'Siyah vezirle geri alır ve vezir c6’dan doğrudan g2’ye bakar; ...Bb7 gelince g2’de mat tehdidi doğacak. h5 atı da havada kalır ve geri dönmek zorunda. Motor 13.Bf4 Bd6 14.Bxd6 Qxd6 (−0.85) veya 13.Bg2 e5 14.c3/f4 (yaklaşık −1.0/−1.3) öneriyor; 13.Bxc6 sonrası −2.7/−3.0.',
      diger: [
        { move: '13.Bf4', text: 'Fil tempo ile vezire saldırır: 13...Bd6 14.Bxd6 Qxd6 ile kara kareli filler değişir ve Siyahın saldırı potansiyeli azalır. Motor: −0.85.' },
        { move: '13.Bg2', text: 'Fil uzun çaprazda kalır: 13...e5 14.f4 ile Beyaz karşı darbe vurur. Motor: −1.0/−1.3.' },
        { move: '13.Bh1', text: '13...e5 14.f4 g6 ile benzer fikir, fil biraz daha güvende. Motor: −1.2/−1.4.' },
      ],
    },
    '13b': {
      text: '13...Qxc6: Vezirle geri alınır; tek doğru hamle.',
      amac: 'Veziri uzun çapraza (c6-h1) yerleştirmek ve g2 karesini hedef almak.',
      neden: 'Diğer hamleler bir taş kaybettirir: 13...Bb7?? 14.Bxb7 Qxb7 sonrası Beyaz at fazlasıyla kalır (Motor: +4.2). Vezir c6’da hem g2’ye bakar hem de ...Bb7 ile bu baskı ikiye katlanacaktır.',
    },
    '14w': {
      text: '14.Nf4: At h5’ten f4’e döner ve g2 karesini savunmaya hazırlanır.',
      amac: 'Kenardaki atı kurtarmak ve Ng2 ya da Nf4-e2 ile şahın çevresini tutmak.',
      neden: 'Tek iyi hamle (−2.84): h5 atı ...g6 ile tehdit altına girebilir ve uzun çapraz Siyahın elinde. 14.Qe1 veya 14.Qd2 ile Qc3 fikri ...e5 ve ...Bb7 sonrası çok yavaş kalır (−3.3/−3.5).',
      diger: [
        { move: '14.Qe1', text: '14...e5 15.Qc3 Bb7 16.f3 ile Beyaz çaprazı kapatmaya çalışır ama atı h5’te kalır. Motor: −3.35.' },
        { move: '14.Qd2', text: '14...e5 15.Qc3 Bd6 16.f3 ile benzer sorunlar. Motor: −3.46.' },
      ],
    },
    '14b': {
      text: '14...e5: Siyah atı tempo ile kovalar ve ...f4 ilerleyişini hazırlar.',
      amac: 'Piyon çoğunluğunu ilerletmek; e5 ve f5 ile merkezde ve şah kanadında alan kazanmak.',
      neden: 'Motor 14...e5’i en iyi buluyor (−3.15). At f4’ten geri çekilmek zorunda; ardından ...f4 hem e3 filine hem g3’e baskı yapacak. 14...Bb7 15.f3 Beyazın çaprazı kapatmasına zaman verirdi.',
      diger: [
        { move: '14...Bb7', text: '15.f3 e5 16.Ng2 g5 ile Siyah yine iyi, ama Beyaz f3 ile çaprazı erken kapattı. Motor: −2.5/−3.0.' },
        { move: '14...g5', text: '15.Ng2 Bb7 16.f3 e5 ile benzer, ama şahın önü erken açılır. Motor: −2.7.' },
      ],
    },
    '15w': {
      text: '15.Ng2: At g2’ye gelir ve uzun çaprazı kapatır.',
      amac: 'g2 karesini bir taşla doldurup ...Bb7 ile mat tehditlerini önlemek; f4 karesini de kontrol etmek.',
      neden: 'Tek iyi kare (−3.22). 15.Ne2 sonrası ...f4 ve ...Bh3 çok güçlü olur (−4.6); 15.Nh5? Bb7 16.f3 g6 ile at h5’te hapsolur (−5.4).',
      diger: [
        { move: '15.Ne2', text: '15...f4 16.Bd2 Bh3 17.f3 ile Siyahın fili f1 kalesine ve g2’ye baskı yapar. Motor: −4.6.' },
        { move: '15.Nh5', text: '15...Bb7 16.f3 g6 17.Bh6 ve at h5’ten çıkamaz. Motor: −5.4.' },
      ],
    },
    '15b': {
      text: '15...f4! Piyon g3’e ve e3 filine saldırır.',
      amac: 'f-hattını açmak, g3 piyonunu kırmak ve c8 filine h3 karesini hazırlamak.',
      neden: 'Motor 15...f4’ü en iyi buluyor (−3.39). g2 fili gittiği için g3 artık zayıf bir hedeftir; ...f4 ile hem tempo kazanılır (fil kaçmalı) hem de hatlar Beyazın şahına doğru açılır. 15...Bb7 daha yavaştır (−2.6) çünkü Beyaz 16.f3 ile çaprazı kapatır.',
      diger: [
        { move: '15...Bb7', text: '16.f3 Bd6 17.Bd2 f4 ile benzer, ama Beyaz f3’ü önceden oynayabildi. Motor: −2.60.' },
        { move: '15...Ba6', text: '16.a4 Bb7 17.f3 ile zaman kaybı. Motor: −2.10.' },
      ],
    },
    '16w': {
      text: '16.gxf4? Beyaz piyonu alarak g-hattını ve şahının önünü açar.',
      amac: 'Bir piyon kazanmak ve e3 filini tehditten kurtarmak.',
      neden: 'Hata: g3 piyonu şahın önündeki son kalkandı. Motor 16.Bd2’yi öneriyor (−3.24): fil kaçar ve ...fxg3 olursa hxg3 ile piyon yapısı bütün kalır. 16.gxf4 sonrası değerlendirme −4.3/−5.0’a düşer çünkü g-hattı ve h3 karesi Siyaha açılır.',
      diger: [
        { move: '16.Bd2', text: '16...Bb7 17.f3 fxg3 18.hxg3 ile Beyaz kötü ama sağlam bir yapıyla savunur. Motor: −3.24.' },
        { move: '16.Bc1', text: '16...Bb7 17.f3 fxg3 18.hxg3 Qg6 ile benzer, fil pasif. Motor: −3.8/−4.0.' },
      ],
    },
    '16b': {
      text: '16...Bh3: Fil h3’e gelir; g2 atına saldırır ve f1 kalesini hedef alır.',
      amac: 'g2 atına iki kez saldırmak (fil h3’ten, vezir c6’dan); Beyazı f3 ile çaprazı kapatmaya zorlamak.',
      neden: 'Güçlü görünür ama en kesin hamle değil (−2.56/−2.74). Motor 16...exf4! 17.Nxf4 Bg5! hamlesini öneriyor (−5.1): f4 atına f8 kalesi ve g5 fili birlikte baskı yapar, Beyaz atı geri çekmek zorunda kalır ve şahının önü tamamen açılır. Tal’ın hamlesi ise pozisyonel baskıyı sürdürür.',
      diger: [
        { move: '16...exf4', text: '17.Nxf4 Bg5! 18.Ng2 Bh3 19.f3 Bxe3+ 20.Nxe3 ile Siyahın taşları ezici. Motor: −5.1.' },
        { move: '16...Bb7', text: '17.f3 Bd6 18.Bd2 exf4 ile benzer yapı. Motor: −2.76.' },
      ],
    },
    '17w': {
      text: '17.f3: Beyaz piyonla uzun çaprazı kapatır ve vezirin g2’ye baskısını keser.',
      amac: 'g2 atına gelen ikinci saldırıyı (Qc6) kesmek; atın bağını hafifletmek.',
      neden: 'Tek hamle (−2.64). 17.Ne1? Qg6+ 18.Kh1 Bxf1 kalite kaybettirir (−5.8); 17.Qg4?? Bxg4 ise veziri kaybettirir. f3 aynı zamanda e4 karesini kontrol eder ama e3 filini korumasız bırakır.',
      diger: [
        { move: '17.Ne1', text: '17...Qg6+ 18.Kh1 Bxf1 19.Qf3 ile Siyah kalite fazlası. Motor: −5.78.' },
      ],
    },
    '17b': {
      text: '17...exf4: Siyah piyonu geri alır ve e3 filine saldırır.',
      amac: 'Malzemeyi eşitlemek, f4’te ileri bir piyon kurmak ve Beyazın filini geri çekilmeye zorlamak.',
      neden: 'Motor en iyi hamle olarak görüyor (−2.59). f4 piyonu artık Beyazın taşlarını sıkıştıran bir kama olacak; Ng2 ile Bd2 bu piyona karşı pasif savunucular haline gelecek.',
      diger: [
        { move: '17...Bd6', text: '18.Re1 exf4 19.Bd2 c4 ile benzer, sıra farkı. Motor: −2.41.' },
        { move: '17...Qg6', text: '18.Rf2 Bh4 19.Re2 exf4 ile g2’ye baskı. Motor: −2.20.' },
      ],
    },
    '18w': {
      text: '18.Bd2: Fil d2’ye çekilir; tek iyi kare.',
      amac: 'Filini kurtarmak ve uzun vadede c3’e geçerek uzun çaprazda Siyahın şahına bakmak.',
      neden: 'Diğer hamleler kötü: 18.Nxf4? Bxf1 kaleyi kaybettirir çünkü at g2’den ayrılınca h3 fili f1’i alır (−5.3). 18.Bc1 de fili pasif bırakır (−3.6).',
      diger: [
        { move: '18.Nxf4', text: '18...Bxf1 19.Qd2 Bh3 ile Siyah kalite fazlası. Motor: −5.26.' },
        { move: '18.Bc1', text: '18...Bf6 19.Kh1 g5 ile fil pasif kalır. Motor: −3.56.' },
      ],
    },
    '18b': {
      text: '18...Qg6: Vezir g-hattına gelir; g2 atına ikinci kez saldırır.',
      amac: 'g2’ye baskıyı ikiye çıkarmak ve g-hattını kontrol etmek; Beyazın şahını g1’de sıkıştırmak.',
      neden: 'Doğal ve tehditkâr bir hamle (−2.15). Motor 18...Rae8’i biraz daha iyi buluyor (−2.60): önce son kale de oyuna girer, vezir manevrası sonra gelir. Fark küçük.',
      diger: [
        { move: '18...Rae8', text: '19.Rf2 g5 20.Bc3 b5 ile tüm taşlar oyunda. Motor: −2.60.' },
        { move: '18...Bd6', text: '19.Qe1 g5 20.Qe4 ile Beyaz vezir değişimi arar. Motor: −2.48.' },
      ],
    },
    '19w': {
      text: '19.Rf2: Kale f2’ye gelir; ikinci yatayı ve g2 atını savunur.',
      amac: 'g2 atına ikinci savunucuyu eklemek ve f-hattındaki f3 piyonunu desteklemek.',
      neden: 'Tek iyi hamle (−2.25). 19.Kf2?? Qxg2+ 20.Ke1 Qxf1# ile mat olur. 19.Qe2 ise g2’yi yeterince savunmaz (−2.96).',
      diger: [
        { move: '19.Kf2', text: '19...Qxg2+ 20.Ke1 Qxf1# mat.' },
        { move: '19.Qe2', text: '19...Rae8 20.Bc3 b5 ile Siyahın baskısı artar. Motor: −2.96.' },
      ],
    },
    '19b': {
      text: '19...Bd6: Fil d6’ya gelir ve f4 piyonunu destekler.',
      amac: 'f4 kamasını sağlamlaştırmak; fili b8-h2 çaprazına koyarak h2’ye de baskı yapmak.',
      neden: 'f4 piyonu Siyahın pozisyonunun kilit taşıdır: Beyazın Bd2 ve Ng2’si onu almak ister. Motor 19...Rae8 ve 19...Bh4’ü de aynı seviyede görüyor (yaklaşık −2.1/−2.2).',
      diger: [
        { move: '19...Rae8', text: '20.Kh1 Qd6 21.Re2 g5 ile e-hattı Siyahta. Motor: −2.22.' },
        { move: '19...Bh4', text: '20.Re2 Bf6 21.Bc3 ile fil uzun çaprazda Beyazın filiyle karşılaşır. Motor: −2.18.' },
      ],
    },
    '20w': {
      text: '20.Kh1: Şah g-hattından ve g1-a7 çaprazından uzaklaşır.',
      amac: 'g-hattındaki vezirle aynı hatta durmamak ve Rg1 ya da Qg1 ile g-hattını savunmaya hazırlanmak.',
      neden: 'Makul bir savunma hamlesi (−2.21). Motor 20.Qf1 veya 20.a3’ü benzer seviyede görüyor (−2.13/−2.14); Beyazın pozisyonu zor, ama hemen kaybedecek bir şey de yok.',
      diger: [
        { move: '20.Qf1', text: '20...b5 21.Kh1 Qf7 22.Re2 ile benzer savunma. Motor: −2.13.' },
        { move: '20.a3', text: '20...Rf5 21.Kh1 Qf7 ile Siyah kalesini aktifleştirir. Motor: −2.14.' },
      ],
    },
    '20b': {
      text: '20...Qh5: Vezir h5’e gelir; f3 piyonuna ve h-hattına bakar.',
      amac: 'Vezir g-hattından çekilerek h3 filini destekler ve f3’e ikinci saldırıyı hazırlar (sonra ...Bd5 ile).',
      neden: 'Şah h1’e gidince g-hattındaki vezir artık şaha bakmıyordu; h5’te ise h-hattından h2’ye ve çaprazdan f3’e bakar. Motor 20...Rad8 ve 20...Qh5’i eşit görüyor (−2.22).',
      diger: [
        { move: '20...Rad8', text: '21.Bc3 Qh5 22.Qd2 Bd7 ile benzer. Motor: −2.22.' },
        { move: '20...Bd7', text: '21.Qf1 Qh5 22.Re1 ile aynı fikirler. Motor: −2.18.' },
      ],
    },
    '21w': {
      text: '21.Bc3: Fil c3’e gelir; uzun çaprazda e5, f6 ve g7’ye bakar.',
      amac: 'Beyazın tek aktif taşı olarak fili Siyahın şahına doğrultmak ve Siyahın uzun çaprazı yeniden ele geçirmesini zorlaştırmak.',
      neden: 'Motor 21.Bc3’ü en iyi buluyor (−2.32). Fil artık pasif değil; Siyah g7’yi ...g5 ile boşaltınca bu fil daha az etkili olacak ama f6 ve e5 karelerini kontrol eder.',
      diger: [
        { move: '21.Qe1', text: '21...Rae8 22.Qf1 Be5 23.Bc3 ile benzer yerleşim. Motor: −2.37.' },
        { move: '21.Qf1', text: '21...Rf6 22.Re1 Bd7 ile Siyah kalesini g-hattına götürür. Motor: −2.42.' },
      ],
    },
    '21b': {
      text: '21...Rae8: Kale e-hattına gelir; son taş da oyuna girer.',
      amac: 'Açık e-hattını ele geçirmek ve Re1 ile Beyazın e-hattında karşı oyununu önlemek.',
      neden: 'Motor 21...Be6 ve 21...Rae8’i eşit görüyor (−2.33/−2.32). Tal taşlarını tek tek en iyi karelere koyuyor; acele etmesine gerek yok çünkü Beyazın karşı oyunu yok.',
      diger: [
        { move: '21...Be6', text: '22.Qf1 Bd5 23.b3 b5 ile fil uzun çapraza geçer. Motor: −2.33.' },
        { move: '21...b5', text: '22.a3 Be6 23.Qg1 g5 ile vezir kanadında alan. Motor: −2.27.' },
      ],
    },
    '22w': {
      text: '22.Qg1: Vezir g1’e gelir; g2 atını ve g-hattını destekler.',
      amac: 'g2 karesini üçüncü kez korumak ve gerekirse Rg2-Qg-hattı ile karşı saldırıya hazırlanmak.',
      neden: 'Pasif bir savunma (−2.41). Motor 22.d4’ü öneriyor (−2.16): merkezde karşı oyun Beyazın tek umududur, d4-d5 ile Siyahın fillerini rahatsız edebilir. Qg1 ise vezirin oyunu sadece savunmaya kilitler.',
      diger: [
        { move: '22.d4', text: '22...Bc8 23.Qd3 Bb7 24.Re1 ile Beyaz merkezde aktifleşir. Motor: −2.16.' },
        { move: '22.Qf1', text: '22...Re3 23.d4 Qf7 24.Qb5 ile vezir aktifleşir. Motor: −2.21.' },
      ],
    },
    '22b': {
      text: '22...g5: Siyah f4 piyonunu ikinci kez destekler ve ...g4 kırılmasını hazırlar.',
      amac: 'f4 kamasını kalıcı hale getirmek ve şah kanadında g-hattını açacak ...g4’ü hazırlamak.',
      neden: 'Motor 22...g5’i en iyi buluyor (−2.36). Hamle Siyahın şahını biraz açar ama Beyazın saldıracak taşları yoktur; ayrıca c3 filinin baktığı g7’yi de boşaltır.',
      diger: [
        { move: '22...Re7', text: '23.Re1 Rff7 24.a3 g5 ile kaleler ikiye katlanır. Motor: −2.19.' },
        { move: '22...Rf7', text: '23.Re1 Ree7 24.Rxe7 ile sade. Motor: −2.17.' },
      ],
    },
    '23w': {
      text: '23.Re1: Kale e-hattına gelir; değişim arar.',
      amac: 'Siyahın e-hattındaki kalesini değiştirerek baskıyı azaltmak.',
      neden: 'Motor 23.Re1’i en iyi buluyor (−2.38). Kaleler değişirse Siyahın saldırı potansiyeli azalır; savunan taraf için taş değişimi genellikle faydalıdır.',
      diger: [
        { move: '23.Qf1', text: '23...b5 24.Re1 b4 25.Bd2 ile benzer. Motor: −2.48.' },
        { move: '23.a4', text: '23...Bd7 24.Re1 Bc6 ile Siyahın fili uzun çapraza gelir. Motor: −2.66.' },
      ],
    },
    '23b': {
      text: '23...Kf7: Şah f7’ye gelir; e-hattını destekler ve g-hattını kale için boşaltır.',
      amac: 'Şahı e-hattındaki değişimlerden sonra merkezde aktif tutmak ve ...Rg8 ile g-hattını hazırlamak.',
      neden: 'Tal tarzı cesur bir şah hamlesi; ancak motor 23...Bd7’yi biraz daha iyi buluyor (−2.33 / −2.11). Şah f7’de uzun vadede f-hattında açık kalabilir; bu sorun 31...Ke8 ile çözülecek.',
      diger: [
        { move: '23...Bd7', text: '24.d4 g4 25.Rxe8 Rxe8 ile Siyah kırılmayı hemen yapar. Motor: −2.33.' },
        { move: '23...b5', text: '24.a3 b4 25.axb4 cxb4 ile vezir kanadında oyun. Motor: −2.28.' },
      ],
    },
    '24w': {
      text: '24.Re4: Kale e4’te aktifleşir; f4 piyonuna saldırır.',
      amac: 'f4 kamasına baskı yapmak ve kaleyi yatay olarak savunmaya da kullanmak.',
      neden: 'Motor 24.Re4’ü en iyi buluyor (−1.89). Beyazın tek aktif fikri f4’ü almaktır; ancak f4 hem d6 fili hem g5 piyonu tarafından korunur.',
      diger: [
        { move: '24.Rxe8', text: '24...Rxe8 25.d4 Qh6 26.Qd1 ile benzer. Motor: −1.96.' },
        { move: '24.Qf1', text: '24...b5 25.Rfe2 g4 ile Siyah kırılmayı yapar. Motor: −2.11.' },
      ],
    },
    '24b': {
      text: '24...Rg8: Kale g8’e gelir ve ...g4 kırılmasını destekler.',
      amac: 'g-hattına bir kale daha koymak; e-hattını Beyaza bırakmak pahasına şah kanadında güç toplamak.',
      neden: 'Plan doğru ama sıra biraz yavaş (−1.79). Motor 24...Bd7’yi öneriyor (−2.15): e8 kalesini korur ve fil c6 ile uzun çapraza geçer.',
      diger: [
        { move: '24...Bd7', text: '25.Rxe8 Rxe8 26.Qd1 Bc6 ile fil uzun çaprazda. Motor: −2.15.' },
        { move: '24...Bf5', text: '25.Qd1 b5 26.Rxe8 Rxe8 ile e4 kalesi kovalanır. Motor: −1.93.' },
      ],
    },
    '25w': {
      text: '25.Rxe8: Kaleler değişir.',
      amac: 'Siyahın saldırı taşlarından birini azaltmak.',
      neden: 'Savunan taraf için mantıklı bir değişim (−1.93); motor 25.Qf1 ve 25.Qd1’i yaklaşık eşit görüyor (−1.82/−1.83). Değişim Beyazın e4 kalesini de oyundan çıkarır.',
      diger: [
        { move: '25.Qf1', text: '25...b5 26.a3 Bc7 27.Rxe8 ile benzer. Motor: −1.82.' },
        { move: '25.Qd1', text: '25...b5 26.a3 a6 27.Ne1 ile savunma. Motor: −1.83.' },
      ],
    },
    '25b': {
      text: '25...Rxe8: Siyah kaleyle geri alır; e-hattı yine Siyahın.',
      amac: 'e-hattını tutmak ve şahı f7’de güvende bırakmak.',
      neden: 'Doğru geri alış (−2.07). 25...Kxe8? 26.Qe1+ Kd7 27.Qe4 ile Beyazın veziri aktifleşir (−1.35). 25...Bxg2+?? 26.Qxg2 ise Siyahın en iyi filini verir ve baskı kaybolur (−0.16).',
      diger: [
        { move: '25...Kxe8', text: '26.Qe1+ Kd7 27.Qe4 Kc7 28.Be5 ile Beyazın taşları aktifleşir. Motor: −1.35.' },
        { move: '25...Bxg2+', text: '26.Qxg2 Rxe8 27.Re2 ile Siyahın baskısı kaybolur. Motor: −0.16.' },
      ],
    },
    '26w': {
      text: '26.Qf1: Vezir f1’e gelir; a6-f1 çaprazından c4 ve b5’e bakar.',
      amac: 'Vezir g1’den çıkıp aktif bir kare arar; Qb5 veya Qc4+ gibi karşı fikirler hazırlar.',
      neden: 'Motor 26.d4’ü öneriyor (−1.98): merkezde karşı oyun ve d4xc5 fikri. Qf1 sonrası −2.22. Beyaz yine pasif kalır ve Siyaha fil manevrası için zaman verir.',
      diger: [
        { move: '26.d4', text: '26...h6 27.Qf1 Re7 28.Qb5 ile Beyaz merkezde karşı oyun alır. Motor: −1.98.' },
        { move: '26.Qd1', text: '26...h6 27.d4 c4 28.d5 ile benzer fikir. Motor: −2.02.' },
      ],
    },
    '26b': {
      text: '26...Be6: Fil h3’ten e6’ya çekilir; d5’e geçmeye hazırlanır.',
      amac: 'h3’te artık işi kalmayan fili uzun çapraza (d5) getirip f3 piyonuna ve a2’ye baskı yapmak.',
      neden: 'f3 piyonu uzun çaprazı kapattığı için h3 fili g2’ye tek başına baskı yapıyordu; d5’te ise f3’ü hedef alır ve vezirle birlikte (Qh5) f3’e iki kez saldırır. Motor 26...Be6’yı en iyi seçeneklerden biri olarak görüyor (−2.04).',
      diger: [
        { move: '26...Rd8', text: '27.Qe1 Re8 28.Qf1 Be6 ile zaman kazanma. Motor: −2.0.' },
        { move: '26...b5', text: '27.d4 a6 28.a4 c4 ile vezir kanadında alan. Motor: −1.90.' },
      ],
    },
    '27w': {
      text: '27.Bd2: Fil d2’ye döner ve f4 piyonuna saldırır.',
      amac: 'f4 kamasına baskı yapmak ve uzun vadede almak.',
      neden: 'f4 hem d6 fili hem g5 tarafından korunduğu için bu baskı yetersiz kalır (−2.58). Motor 27.d4 Bd5 28.dxc5’i öneriyor (−1.96): merkezde karşı oyun Beyazın en iyi şansıdır.',
      diger: [
        { move: '27.d4', text: '27...Qg6 28.Rd2 c4 29.d5 ile Beyaz merkezde aktifleşir. Motor: −1.96.' },
        { move: '27.Kg1', text: '27...Bd5 28.Bd2 Be5 29.Bc3 ile benzer. Motor: −2.57.' },
      ],
    },
    '27b': {
      text: '27...Bd5: Fil d5’te uzun çapraza yerleşir ve f3 piyonuna baskı yapar.',
      amac: 'f3’e ikinci saldırıyı kurmak (vezir h5’ten, fil d5’ten) ve ileride ...g4 ile f3’ü kırmak.',
      neden: 'Motor 27...Bd5’i en iyiler arasında görüyor (−2.48). Fil d5’te çok güçlüdür: f3’e bakar, a2’ye bakar ve Beyazın d3-d4 ile merkezi açmasını zorlaştırır.',
      diger: [
        { move: '27...a6', text: '28.Kg1 Bd5 29.h4 h6 ile hazırlık. Motor: −2.50.' },
        { move: '27...Qh3', text: '28.Kg1 Bd5 29.d4 c4 ile vezir aktif. Motor: −2.42.' },
      ],
    },
    '28w': {
      text: '28.Kg1: Şah g1’e döner; g2 atını ve f2 kalesini destekler.',
      amac: 'Şahı savunmaya katmak ve f3’e baskı gelince Rf2-Kg1 ile ikinci yatayı tutmak.',
      neden: 'Motor 28.d4’ü biraz daha iyi buluyor (−2.39 / −2.48). Beyaz yine pasif kalır ama hemen kaybetmez.',
      diger: [
        { move: '28.d4', text: '28...c4 29.b3 b5 30.a4 ile merkezde karşı oyun. Motor: −2.39.' },
        { move: '28.a4', text: '28...Re6 29.Kg1 Rh6 30.h4 ile Siyahın kalesi h-hattına geçer. Motor: −2.72.' },
      ],
    },
    '28b': {
      text: '28...Re6: Kale e6’ya gelir; g- veya h-hattına geçmeye hazırlanır.',
      amac: 'Kaleyi şah kanadındaki saldırıya katmak (Rh6 veya Rg6) ve ...g4 kırılmasını desteklemek.',
      neden: 'Motor 28...Re6’yı en iyi buluyor (−2.67). Kale e-hattını tutarken yatay olarak da hareket edebilir; e6’dan h6’ya ve g6’ya geçmek mümkündür.',
      diger: [
        { move: '28...a6', text: '29.a4 h6 30.d4 c4 ile bekleme. Motor: −2.56.' },
        { move: '28...h6', text: '29.d4 c4 30.b3 b5 ile hazırlık. Motor: −2.53.' },
      ],
    },
    '29w': {
      text: '29.Ne1: At e1’e çekilir ve f3’ü destekler.',
      amac: 'f3 piyonuna gelen ikinci saldırıyı karşılamak (Bd5 ve Qh5).',
      neden: 'f3’ü korumak gerekiyordu ama at g2’den ayrılınca g2 karesi ve f4 piyonuna karşı savunma zayıflar. Motor 29.d4’ü biraz daha iyi buluyor (−2.52 / −2.62).',
      diger: [
        { move: '29.d4', text: '29...Qh3 30.c4 Rh6 31.Nxf4 ile karşı oyun. Motor: −2.52.' },
        { move: '29.a4', text: '29...Rh6 30.Ne1 c4 31.d4 ile benzer. Motor: −2.75.' },
      ],
    },
    '29b': {
      text: '29...g4! Siyah son kırılmayı yapar: g-hattı açılır ve f3 piyonu kırılır.',
      amac: 'f3 piyonunu değiştirmek, vezirle şah çekmek ve g2 karesini Bd5’in baskısına açık bırakmak.',
      neden: 'Motor 29...g4’ü en iyi buluyor (−2.84/−3.57). At g2’den ayrıldığı için zamanlama doğru: 30.fxg4 Qxg4+ ile vezir şah çeker ve Beyazın taşları dağınık kalır. 30.Bxf4 ise 30...Rxe1 31.Qxe1 Bxf4 32.fxg4 ile sonuçlanır.',
      diger: [
        { move: '29...Be5', text: '30.c3 Bf6 31.Re2 Rd6 ile bekleme. Motor: −2.84.' },
        { move: '29...Rg6', text: '30.c4 Bc6 31.d4 cxd4 ile Beyaz karşı oyun bulur. Motor: −2.59.' },
      ],
    },
    '30w': {
      text: '30.fxg4: Beyaz alır.',
      amac: 'Bir piyon kazanmak ve f-hattını açmak.',
      neden: 'Doğal, ama g-hattını açar ve vezirin şah çekmesine izin verir (−3.55). Motor 30.Bxf4 Rxe1 31.Qxe1 Bxf4 32.fxg4’ü biraz daha iyi buluyor (−3.03); Beyaz her durumda kaybetmekte.',
      diger: [
        { move: '30.Bxf4', text: '30...Rxe1 31.Qxe1 Bxf4 32.fxg4 ile Beyaz biraz daha uzun direnir. Motor: −3.03.' },
        { move: '30.c4', text: '30...Bc6 31.Bxf4 Rxe1 32.Qxe1 ile benzer. Motor: −3.29.' },
      ],
    },
    '30b': {
      text: '30...Qxg4+: Vezir şah çekerek alır; tek iyi hamle.',
      amac: 'g-hattını ele geçirmek ve Beyazı Ng2 ile kapanmaya zorlamak.',
      neden: '30...Qh4? 31.Bxf4 ile Beyaz f4’ü alır ve oyun dengeye gelir (−0.17). Vezir şah çekerek tempo kazanır; g2’ye gelen at d5 filinin hedefi olacaktır.',
      diger: [
        { move: '30...Qh4', text: '31.Bxf4 Qxg4+ 32.Ng2 ile Beyaz f4’ü alır. Motor: −0.17.' },
        { move: '30...Rg6', text: '31.Bxf4 Qxg4+ 32.Ng2 Bxg2 ile denge. Motor: 0.00.' },
      ],
    },
    '31w': {
      text: '31.Ng2: At g2’ye gelir ve şahı kapatır; tek hamle.',
      amac: 'Şahı korumak ve g-hattını kapatmak.',
      neden: '31.Rg2? Bxg2 32.Qxg2 Qxg2+ 33.Nxg2 ile kalite kaybı (−4.8); 31.Qg2?? Bxg2 vezir kaybı (−6.5). At g2’de ama d5 filinin baskısı altında.',
      diger: [
        { move: '31.Rg2', text: '31...Bxg2 32.Qxg2 Qxg2+ 33.Nxg2 ile Siyah kalite fazlası. Motor: −4.82.' },
      ],
    },
    '31b': {
      text: '31...Ke8: Şah e8’e çekilir; f-hattından uzaklaşır.',
      amac: 'Şahı f-hattındaki olası Rxf4+ şahlarından ve g2’deki taşların açabileceği hatlardan uzaklaştırmak.',
      neden: 'Güvenli bir hamle (−3.42), ama motor 31...Rf6 (−4.42) veya 31...f3 (−4.37) ile baskıyı artırmayı öneriyor. Ke8 sonrası Beyazın 32.h3 veya 32.c4 ile direnme şansı vardı.',
      diger: [
        { move: '31...Rf6', text: '32.c4 Bb7 33.d4 Be4 34.Bxf4 ile Siyah taşları aktif. Motor: −4.42.' },
        { move: '31...f3', text: '32.Kh1 Bc6 33.c4 Rf6 34.Ne3 ile f3 piyonu Beyazı sıkıştırır. Motor: −4.37.' },
      ],
    },
    '32w': {
      text: '32.Bxf4? Fil f4 piyonunu alır, ama Beyazın savunması çöker.',
      amac: 'f4 kamasını almak ve Siyahın baskısını azaltmak.',
      neden: 'Hata: f2 kalesi hem g2 atını hem f4 filini koruyor ve aşırı yükleniyor. Motor 32.c4 Bc6 33.h3’ü öneriyor (−2.93); 32.h3 Qxh3 33.Bxf4 de daha iyi (−3.25). Bxf4 sonrası −4.35.',
      diger: [
        { move: '32.c4', text: '32...Bc6 33.h3 Qxh3 34.Bxf4 ile Beyaz direnir. Motor: −2.93.' },
        { move: '32.h3', text: '32...Qxh3 33.Bxf4 Be7 34.c3 ile Beyaz bir piyon eksiğiyle direnir. Motor: −3.25.' },
      ],
    },
    '32b': {
      text: '32...Bxg2! Siyah önce g2 atını alır.',
      amac: 'f2 kalesini g2’ye çekmek ve f4 filini savunmasız bırakmak.',
      neden: 'Doğru sıralama: 33.Rxg2 Qxf4 ile Siyah bir taş kazanır (−4.57). 32...Bxf4? 33.Rxf4 sonrası vezir saldırı altındadır ve oyun dengeye gelir (−0.44).',
      diger: [
        { move: '32...Bxf4', text: '33.Rxf4 Qg7 34.h3 ile Siyahın baskısı kaybolur. Motor: −0.44.' },
        { move: '32...Kd7', text: '33.Bxd6 Kxd6 34.c3 ile denge. Motor: −0.35.' },
      ],
    },
    '33w': {
      text: '33.Rxg2: Kale geri alır; zorunlu.',
      amac: 'Taşı geri almak; ancak f4 fili korumasız kalır.',
      neden: '33.Qxg2 Re1+ 34.Rf1 Rxf1+ 35.Kxf1 ile Siyah yine taş kazanır (−4.83); 33.Bg3?? Bxf1 daha da kötüdür (−9.2).',
      diger: [
        { move: '33.Qxg2', text: '33...Re1+ 34.Rf1 Rxf1+ 35.Kxf1 ile Siyah taş fazlası. Motor: −4.83.' },
      ],
    },
    '33b': {
      text: '33...Qxf4: Vezir f4 filini alır; Siyah bir taş fazladır.',
      amac: 'Malzeme kazanmak ve f-hattından f1 vezirine saldırmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−4.51). 33...Qh5? 34.Bxd6 ile Beyaz taşı geri alır (+0.6). Vezir f4’ten f1 vezirine de saldırır.',
      diger: [
        { move: '33...Qh5', text: '34.Bxd6 Rxd6 35.Qe2+ ile Beyaz dengeyi bulur. Motor: +0.64.' },
      ],
    },
    '34w': {
      text: '34.Qd1: Vezir d1’e çekilir. Siyah bir fil fazladır ve oyun burada 0-1 sona erdi.',
      amac: 'Veziri kurtarmak ve vezir değişiminden kaçınmak.',
      neden: '34.Qxf4 Bxf4 ile Siyah bir fil fazlasıyla oyun sonuna geçer (−4.62); 34.Qd1 sonrası Siyah ...Kd8 veya ...Kd7 ile şahını güvenceye alıp kazanır (−5.2). Beyaz teslim oldu.',
      diger: [
        { move: '34.Qxf4', text: '34...Bxf4 35.Kf1 Re7 ile Siyah bir fil fazlasıyla kolayca kazanır. Motor: −4.62.' },
        { move: '34.c3', text: '34...Qxf1+ 35.Kxf1 Rh6 ile benzer oyun sonu. Motor: −4.67.' },
      ],
    },
  },
  qa: [
    { q: 'Beyazın kaybının asıl nedeni neydi?', a: '13.Bxc6? ile Beyaz, şahının çevresindeki beyaz kareleri koruyan tek taşı (g2 filini) verdi. Siyahın veziri c6’ya gelince uzun çapraz ve g2 karesi doğrudan hedef oldu; ardından ...e5, ...f4 ve ...Bh3 ile Siyahın baskısı katlandı. Motor 13.Bf4 (−0.85) veya 13.Bg2 (yaklaşık −1.0) ile Beyazın dayanabileceğini gösteriyor.' },
    { q: 'Tal neden 3...d5 oynadı?', a: 'Beyaz 3.g3 ile fiyanketto yapmaya hazırlanıyordu ama fil henüz g2’de değildi. 3...d5 bu anı kullanarak e4’ü hemen sorgular ve Beyazın Kapalı Sicilya kuruluşunu rahatça tamamlamasını engeller. Motor 3...d5’i en iyi buluyor (0.00).' },
    { q: 'Siyah açılışta ...d4’ü neden oynamadı?', a: 'Motor 4...d4, 5...d4 ve 6...d4’ü hep biraz daha iyi buluyor (−0.2 ile −0.7 arası). Tal ise sakin gelişmeyi ve merkezi 7...dxe4 ile açmayı seçti. Bu seçim oyunun karakterini değiştirdi: merkez açıldı ve oyun beyaz karelerin mücadelesine dönüştü.' },
    { q: '15...f4 neden bu kadar güçlüydü?', a: 'g2 fili gittiği için g3 piyonu Beyazın şahının önündeki son kalkandı. 15...f4 hem e3 filine saldırdı (tempo) hem de g3’ü kırmayı tehdit etti. Piyonlar değişirse f-hattı açılacak ve c8 fili h3’e gelecekti.' },
    { q: 'Beyaz 16. hamlede ne yapmalıydı?', a: 'Motor 16.Bd2’yi öneriyor (−3.24): fil kaçar ve ...fxg3 olursa hxg3 ile piyon yapısı bütün kalır. 16.gxf4? ile Beyaz kendi şahının önünü açtı (−4.3/−5.0).' },
    { q: 'Tal 16...Bh3 yerine ne oynayabilirdi?', a: 'Motor 16...exf4! 17.Nxf4 Bg5! hamlesini öneriyor (−5.1): f4 atına f8 kalesi ve g5 fili birlikte baskı yapar ve Beyazın şahı tamamen açılır. Tal’ın hamlesi ise pozisyonel baskıyı sürdürdü (−2.6) ve sonunda yine kazandı.' },
    { q: 'Siyah 17. ile 29. hamleler arasında ne yaptı?', a: 'Tal taşlarını en iyi karelere yerleştirdi: Qg6-h5, Bd6, Rae8, ...g5, Kf7, Rg8, Be6-d5 ve Re6. Beyaz pasif bir savunmaya kilitlendi (Rf2, Qg1, Kh1-g1, Ne1). Kırılma (29...g4) her şey hazır olduğunda geldi.' },
    { q: '32...Bxg2 neden 32...Bxf4’ten iyiydi?', a: 'f2 kalesi hem g2 atını hem f4 filini koruyordu. 32...Bxg2 33.Rxg2 kale g2’ye gidince f4 fili korumasız kaldı ve 33...Qxf4 ile Siyah bir taş kazandı (−4.57). 32...Bxf4? 33.Rxf4 ise vezire saldırır ve oyun dengeye gelir (−0.44).' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'En önemli an 13. hamleydi (13.Bf4 veya 13.Bg2). Daha sonra 16.Bd2 (−3.2) ve merkezde karşı oyun (22.d4, 26.d4, 27.d4) Beyazın direncini artırırdı. Son olarak 32.c4 (−2.9) ile Beyaz 32.Bxf4? hatasından kaçınabilirdi.' },
  ],
  sources: [
    { title: 'Chess.com: Sicilian-phobia Part Two – Closed Sicilian', url: 'https://www.chess.com/article/view/sicilian-phobia-part-two---closed-sicilian' },
  ],
  exercises: [
    { id: 'ntl-1', kind: 'tekrar', plan: true, title: 'g3’e yürüyüş: ...f4',
      source: 'Narodizki – Tal, Moskova 1991 (15. hamle)',
      fen: 'r1b2rk1/p3b1pp/1pq5/2p1pp2/8/3PB1P1/PPP2PNP/R2Q1RK1 b - - 1 15',
      prompt: 'Beyaz g2 filini c6 atı ile değişti; Siyahın veziri uzun çaprazda. Siyahın e5 ve f5 piyonları şah kanadında hazır duruyor. Tal’ın planı neydi?',
      hint: 'f-piyonu g3 piyonuna saldırabilir; f-hattı açılırsa c8 fili de h3’e gelir.',
      line: ['f4'],
      explanation: '**15...f4!** Piyon g3’e saldırır; değişim olursa f-hattı açılır ve fil h3’ten g2’ye baskı yapar. Motor: ...f4 −3.2, sonraki en iyi 15...Bb7 −2.7. Fark küçük olduğu için bu bir plan hamlesidir.',
      link: 'g2 fili gidince Siyahın piyon çoğunluğu (...f5, ...e5, ...f4) g3 piyonuna karşı yürür ve şahın önündeki hatları açar.' },
    { id: 'ntl-2', kind: 'tekrar', plan: false, title: 'Doğru sıralama: önce g2',
      source: 'Narodizki – Tal, Moskova 1991 (32. hamle)',
      fen: '4k3/p6p/1p1br3/2pb4/5Bq1/3P4/PPP2RNP/5QK1 b - - 0 32',
      prompt: 'Beyaz 32.Bxf4 ile piyonu aldı. Siyahın d5 fili g2 atına, d6 fili f4 filine bakıyor. Hangi taşı önce almalısınız?',
      hint: 'f4 filini alırsanız Rxf4 vezire saldırır. g2 atını savunan kim?',
      line: ['Bxg2', 'Rxg2', 'Qxf4'],
      explanation: '**32...Bxg2! 33.Rxg2 Qxf4** ve Siyah bir taş kazanır: kale g2’ye gidince f4 fili savunmasız kalır. 32...Bxf4? 33.Rxf4 sonrası vezir saldırı altındadır. Motor: Bxg2 −4.5, 32...Bxf4 −0.5.',
      link: 'Tal’ın uzun çaprazdaki fili oyun boyunca g2 karesine baskı yaptı; sonunda g2 atını alarak f4 filini savunmasız bıraktı.' },
    { id: 'ntl-3', kind: 'transfer', plan: false, title: '...f4 ile g3’ü kırmak',
      source: 'Carlsen – Lie, Gausdal 2002 (25. hamle)',
      fen: '2r1k3/5p1p/p7/3p1p1R/2p1b1r1/2B3P1/PPP2K2/4R3 b - - 0 25',
      prompt: 'Siyahın kalesi g4’te, fili e4’te. Beyaz g3 ile kaleyi g-hattında durdurmaya çalışıyor; şahı f2’de. Hamle Siyahta.',
      hint: 'f-piyonu g3’e saldırırsa kale hangi hattı kazanır?',
      line: ['f4'],
      explanation: '**25...f4!** Piyon g3’e saldırır; 26.gxf4 Rxf4+ sonrası kale şah çekerek aktifleşir ve Beyazın şahı açıkta kalır. Motor: ...f4 −1.8, sonraki en iyi 25...Kd7 −0.8.',
      link: 'Tal 15...f4 ile g3 piyonuna yürüdü; burada da ...f4 kırılması g3’ü dağıtır ve Siyahın taşlarına f-hattını açar.' },
    { id: 'ntl-4', kind: 'transfer', plan: false, title: 'Uzun çapraz fili g2’yi alır',
      source: 'Short – Nepomniachtchi, Capablanca Anıt turnuvası, Havana 2010 (28. hamle)',
      fen: '4r1k1/5pBp/2bp2p1/8/5P2/1NP5/q5RP/Q4B1K b - - 1 28',
      prompt: 'Siyahın fili c6’dan uzun çaprazda g2 kalesine bakıyor. Siyahın veziri a2’de, Beyazınki a1’de. Hamle Siyahta.',
      hint: 'g2 kalesini şah çekerek alın; f1 fili geri alırsa vezirler nasıl değişir?',
      line: ['Bxg2+'],
      explanation: '**28...Bxg2+!** 29.Bxg2 Qxa1+ 30.Nxa1 Re1+ 31.Bf1 Kxg7 ve vezirler değiştikten sonra Siyah malzeme fazlasıyla kalır. 28...Qxa1? 29.Nxa1 sonrası oyun eşittir. Motor: Bxg2+ −5.5, sonraki en iyi 28...Qf2 −1.9.',
      link: 'Tal’ın 32...Bxg2! hamlesi gibi: uzun çapraz fili önce g2’yi alır, sonra vezir diğer taşı toplar.' },
  ],
};
