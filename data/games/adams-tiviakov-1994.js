// Adams – Tiviakov, PCA Adaylar maçı, New York 1994 (6. oyun). Kaynak: PgnMentor (Adams.pgn).
export default {
  id: 'adams-tiviakov-1994',
  theme: 'Simetrik d-piyonları: d6’da at ve e-piyonunun koşusu',
  white: 'Michael Adams', black: 'Sergei Tiviakov',
  whiteShort: 'Adams', blackShort: 'Tiviakov',
  event: 'PCA Adaylar maçı, 6. oyun', site: 'New York', year: 1994, eco: 'B22',
  variation: 'Sicilya Savunması, Alapin varyantı, 2...d5 3.exd5 Qxd5 4.d4 Nf6 5.Nf3 Nc6 6.Be3', result: '1-0',
  pgn: `1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Nc6 6. Be3 cxd4 7. cxd4 e6 8. Nc3 Qd6 9. a3 Be7 10. Bd3 O-O 11. O-O b6 12. Qe2 Bb7 13. Rad1 Rad8 14. Bg5 g6 15. Bc4 Rfe8 16. Rfe1 Nd5 17. Bxd5 exd5 18. Qd2 f6 19. Bf4 Qd7 20. b4 g5 21. Bg3 Bf8 22. h4 h6 23. hxg5 hxg5 24. Rxe8 Rxe8 25. Qa2 Ne7 26. Ne4 Bg7 27. Nd6 Rd8 28. Rc1 Bc6 29. Qe2 Ba8 30. Qd3 Bf8 31. b5 Bh6 32. Re1 Rf8 33. Nh2 Bg7 34. Nf1 f5 35. Be5 Ng6 36. Ng3 Bxe5 37. dxe5 Nh4 38. Ndxf5 Nxf5 39. e6 Qh7 40. Nxf5 Bb7 41. e7 Re8 42. Re6 Bc8 43. Qxd5 1-0`,

  summary: 'Adams, Tiviakov’un kendi silahı olan Alapin’e (2.c3) Beyaz taşlarla girdi; 2...d5 kolunda d4’te **tek kalmış piyon** (izole vezir piyonu) aldı, karşılığında rahat gelişim kazandı. Açılış dengede geçti. 16...Nd5 17.Bxd5 exd5 sonrası yapı simetrik hale geldi: iki tarafın da tek kalmış d-piyonu vardı. Oyunu belirleyen şey yapı değil, Siyahın şah kanadında attığı adımlar oldu: ...g6, ...f6 ve ...g5 ile e6, d6 kareleri ve a2-g8 çaprazı zayıfladı. Adams 25.Qa2 ile d5 piyonunu g8 şahına bağladı, 26.Ne4! ve 27.Nd6 ile atını hiçbir piyonun kovalayamayacağı d6 karesine gömdü (Motor: +0.7). Siyahın pasif 25...Ne7 ve özellikle 29...Ba8 hamleleri avantajı büyüttü (+1.5), b4-b5 ile Siyahın vezir kanadı donduruldu. Sonunda **35.Be5!** ile kara kareli filler değişildi, **37.dxe5** ile d-piyonu d6 atını koruyan bir e-piyonuna dönüştü; 37...Nh4? hatasından sonra **38.Ndxf5!** ve **39.e6!** ile piyon tempo kazanarak e7’ye koştu. 43.Qxd5 sonrası Tiviakov terk etti. Bu galibiyetle Adams maçta yeniden öne geçti; maç sonunda hızlı oyunlarla 7.5–6.5 kazandı.',
  intro: 'Bu oyun 1994 PCA Adaylar turnuvasının çeyrek finalinden, New York’ta Trump Tower’da oynanan Adams – Tiviakov maçının 6. oyunudur. Adams’ın ChessBase için yazdığı “En unutulmaz oyunum” yazısına göre maça 2–0 başlamış, Tiviakov skoru eşitlemiş, Adams 6. oyunda (bu oyun) yeniden öne geçmiş, ardından bir oyun kaybetmişti; klasik oyunlar ve ilk beş tiebreak oyunu da berabere bitince maç ancak altıncı tiebreak oyununda Adams’ın lehine sonuçlandı (toplam 7.5–6.5). Tiviakov, Alapin’i (2.c3) Beyazla en sık ve en derin oynayan ustalardan biriydi; Adams bu oyunda onun açılışını ona karşı kullandı.\n\nAlapin’de 2.c3 hamlesi d2-d4’ü piyonla desteklemeye hazırlanır: Siyah ...cxd4 oynarsa Beyaz cxd4 ile geri alıp tam merkez kurmak ister. 2...d5 bunun en dolaysız cevabıdır: Siyah e4’e hemen saldırır, 3.exd5 Qxd5 sonrası veziri d5’te rahat durur, çünkü c3 piyonu Nc3 ile tempo kazanılmasını geciktirir. Wikipedia’nın da belirttiği gibi 2...d5 uzun süre Siyaha kolay eşitlik veren bir hamle sayıldı. Tipik sonuç, ...cxd4 cxd4 değişiminden sonra Beyazın d4’te tek kalmış bir piyonla, Siyahın ise ...e6 ile Fransız Savunmasını andıran sağlam bir yapıyla kalmasıdır. Beyaz hızlı gelişim, merkezde alan ve şah kanadında saldırı şansı alır; Siyah ise taş değişerek d4 piyonunun bir zaaf olarak kalacağı oyun sonlarına yönelir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Tek kalmış d4 piyonunun verdiği alanla taşları hızlı ve uyumlu geliştirmek: Be3, Nc3 (vezire tempo), a3 (...Nb4 ve ...Qb4 yok), Bd3, O-O, Qe2, Rad1, Rfe1. Amaç, Siyah tam yerleşmeden e- ve d-hatlarında baskı kurmaktır.',
      'Taş değişimlerini seçici yapmak: tek kalmış piyonlu tarafta her değişim genelde Siyahın işine yarar. 17.Bxd5 exd5 ise yapıyı simetrikleştirdiği için özel bir değişimdir: Siyahın da d5’te bir zaafı olur.',
      'Siyahın şah kanadı piyonlarının (...g6, ...f6, ...g5, ...h6) bıraktığı zayıflıkları kullanmak: h2-h4 ile h-hattını açıp kaleleri değişmek, a2-g8 çaprazını ve e6, d6 karelerini hedef almak.',
      '**Qa2** ile d5 piyonunu a2-g8 çaprazında g8 şahına bağlamak; böylece ...dxe4 yasaklanır ve Beyazın atı **Ne4-d6** yoluyla Siyahın c- ve e-piyonu olmadığı için hiç kovalanamayacak d6 karesine yerleşir.',
      '**b4-b5** ve **Rc1** ile vezir kanadında alan kazanmak: c6 karesini kontrol edip b7 filini a8 gibi ölü bir kareye itmek, Siyahın her taşını pasif savunmaya bağlamak.',
      'Atın tek rakibi olabilecek kara kareli fili **35.Be5!** ile değişmek; **37.dxe5** ile d-piyonunu, d6 atını koruyan ve aynı zamanda geçer piyon olan bir e-piyonuna çevirmek.',
      'Son aşamada geçer piyonu tempo kazanarak ilerletmek: **38.Ndxf5!** ile f5’i açıp **39.e6!** ve **41.e7** ile Siyahın vezir ve kalesini aşırı yüklemek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'd4’ü ablukaya almak ve baskı altında tutmak: ...e6, ...Qd6, ...b6-Bb7 ve ...Rad8 ile d4 ve d5 karelerine bakmak, tek kalmış piyonun ilerlemesini (d4-d5) engellemek.',
      '...Nd5 ile taş değişmek; tek kalmış piyona karşı her değişim Beyazın saldırı potansiyelini azaltır ve oyun sonunda d4’ü bir zaafa çevirir. Ancak 17.Bxd5 sonrası ...exd5 ile Siyah da tek kalmış bir piyona razı olmak zorunda kaldı.',
      '...f6 ve ...g5 ile Beyazın kara kareli filini kısıtlamak. Motor bu planı kısa vadede cezalandırmıyor, ama şahın önü açıldı ve e6, d6 kareleri kalıcı olarak zayıfladı; oyunun geri kalanı bu kareler üzerinde döndü.',
      'Fili g7’ye getirip uzun çaprazda d4’e baskı yapmak ve kara kareleri savunmak. Bu doğru fikirdi, ama ...Ne7 (d5’i koruyan ama hareketsiz bir at) ve ...Ba8 gibi pasif hamleler Beyaza zaman kazandırdı.',
      'Daha iyi savunma yolları: 25...Nd8!? (at f7 üzerinden d6’yı kontrol eder, Motor: −0.1), 29...Ba4! (fili aktif tutar, +0.7) ve 37...Nf4 (at merkezde kalır, +2.5). Bunların her biri d6 atının gücünü sınırlamaya yönelikti.',
      'Son aşamada ...f5 ve ...Ng6-h4 ile karşı saldırı aramak: Siyah e4 ve g4 karelerini almak istedi, ama bu, f5 piyonunu bir hedef haline getirdi ve atı kenara gönderdi.',
    ] },
  },
  critical: [
    { move: '14b', title: '...g6: ilk küçük gevşeme', text: '14.Bg5 sonrası Siyah f6 atının bağını ...g6 ile hafifletmek istedi. Motor 14...h6 (0.0) ya da 14...Rfe8’i (+0.2) tercih ediyor; ...g6 sonrası Beyaz +0.7 civarında. Hamle h6 ve f6 karelerini zayıflattı ve daha sonra ...f6 ve ...g5 ile birleşince şahın önündeki bütün piyon yapısını kırılgan hale getirdi.' },
    { move: '17w', title: 'Bxd5: simetrik yapıya geçiş', text: 'Adams d5 atını aldı; ...exd5 sonrası iki tarafın da tek kalmış d-piyonu oldu. Motor burada 17.Ne4’ü çok daha güçlü görüyor (17...Qc7 18.Qd2 Kg7 19.Bh6+ ile kara kareler üzerinden baskı, Motor: +1.2; oyunda +0.3). Adams’ın seçimi belki daha az keskin ama pratik açıdan anlaşılır: tek kalmış piyon artık sadece Beyazın sorunu değildir, Siyahın d5 piyonu da bağlanabilecek ve abluka altına alınabilecek bir hedeftir.' },
    { move: '25b', title: '...Ne7: atın pasifleşmesi', text: '25.Qa2 d5’i g8 şahına bağladı. Siyah d5’i atla korumayı seçti, ama e7’deki at hem hareketsiz kaldı hem de d6 karesini kontrol edemedi. Motor 25...Nd8’i (atı f7’ye getirip d6 ve e5’i tutmak, −0.1) ya da 25...Bg7’yi (0.0) öneriyor; oyundaki hamle sonrası Beyaz +0.7. Beyazın bütün planı bu andan sonra mümkün oldu.' },
    { move: '26w', title: 'Ne4! bağlı piyonun yanından geçmek', text: 'd5 piyonu g8 şahına bağlı olduğu için 26...dxe4 kurallara aykırıdır. At e4 üzerinden d6 karesine yürür. Motor: 26.Ne4 +0.7; sonraki en iyi 26.Re1 −0.1, 26.Qd2 ise −0.6. Yani avantajı yaratan hamle tam olarak bu: başka her hamlede pozisyon eşit.' },
    { move: '29b', title: '...Ba8? filin hapsi', text: 'Siyah c6’daki fili a8’e çekti; fil orada yalnızca d5’i koruyan pasif bir piyon gibi kaldı. Motor 29...Ba4’ü öneriyor (fil d1 ve b5 karelerine bakar, gerekirse ...Bb5 ile aktifleşir, +0.7); oyunda +1.5. 31.b5 ile c6 karesi de kapandıktan sonra a8 fili oyun sonuna kadar neredeyse hiç oynayamadı.' },
    { move: '35w', title: 'Be5! kara kareli fillerin değişimi', text: 'Beyaz filini e5’e koydu. 35...Bxe5 ya da daha sonra 36...Bxe5 sonrası dxe5 ile e5 piyonu d6 atını korur ve geçer piyon olur; Siyah değişmezse e5 fili g7 filine ve h8-a1 çaprazına baskı yapar. Motor: +2.0, 35.Qe3 +1.6. Bu hamle d6’daki atın tek potansiyel rakibini ortadan kaldırdı.' },
    { move: '37b', title: '...Nh4? atı kenara göndermek', text: 'Motor 37...Nf4’ü öneriyor (38.Qd4 Bb7, +2.5): at merkezde kalır ve d3, e6 karelerine bakar. 37...Nh4 sonrası f5 piyonu yalnızca d7 veziriyle korunur ve 38.Ndxf5! mümkün olur; 38...Nxf5 39.e6! sonrası Beyaz +4.8 civarında kazanıyor.' },
    { move: '39w', title: 'e6! tempo kazanan piyon', text: 'e-piyonu vezire saldırır. Vezir f5 atını korumaya devam etmek zorundadır: 39...Qh7 40.Nxf5 sonrası 40...Qxf5?? 41.Qxf5 Rxf5 42.e7 ile piyon vezir olur. Motor: 39.e6 +4.8; doğal görünen 39.Nh5 ise 39...Qe6 sonrası −1.2. Yani doğru hamle yalnızca buydu.' },
  ],
  lessons: [
    'Alapin’in 2...d5 kolunda Beyaz tek kalmış d4 piyonu karşılığında hızlı gelişim ve aktif taşlar alır. Plan, Siyah tam yerleşmeden önce bu aktiviteyi somut bir avantaja çevirmektir; aksi halde taş değişimleriyle d4 bir zaafa dönüşür.',
    'Simetrik tek kalmış d-piyonlarında (d4’e karşı d5) önemli olan yapı değil, taşların aktivitesi ve şahların güvenliğidir. Rakibin piyonunu bağlayan (Qa2) ve önündeki kareleri işgal eden (Ne4-d6) taraf üstünlüğü ele geçirir.',
    'Şahın önündeki her piyon hamlesi (...g6, ...f6, ...g5) geri alınamaz zayıflıklar bırakır. Motor bu hamleleri tek tek cezalandırmasa bile, birikince e6 ve d6 gibi kareler rakibin taşları için kalıcı üslere dönüşür.',
    'Hiçbir piyonun kovalayamayacağı merkezdeki bir at (Siyahın c- ve e-piyonu yokken d6), rakibin bütün savunmasını felç edebilir: b7, f7, e8 ve f5 karelerini aynı anda kontrol eder.',
    'Atın tek rakibi olabilecek fili değişmek (35.Be5) hem atı sağlamlaştırır hem de alış yönüne göre yeni bir geçer piyon yaratabilir. Burada dxe5 doğruydu; 37.Rxe5? Qxd6 ile at düşerdi.',
    'Pasif savunma taşları (a8 fili, e7 atı) oyunun gidişini belirler: savunmada bile taşlar en aktif karelerde durmalıdır (29...Ba4, 37...Nf4 gibi).',
    'Geçer piyon tempo kazanarak ilerlerse (39.e6 vezire, 41.e7 kaleye saldırı) rakibin savunma taşları aşırı yüklenir ve taktikler kendiliğinden ortaya çıkar.',
  ],
  notes: {
    '1w': {
      text: 'Beyaz şah piyonunu iki kare ilerletir; merkezde d5 ve f5 karelerini kontrol eder, fil ve vezire yol açar.',
      amac: 'Merkezi piyonla tutmak ve hızlı gelişim. Adams kariyeri boyunca 1.e4’ün sadık oyuncularından biriydi.',
      neden: 'Maçta Beyaz olduğu oyunlarda Adams normal repertuvarına sadık kaldı; asıl sürpriz ikinci hamlede geldi.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; daha pozisyonel oyun getirir. Motor: +0.2.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç, geçişlere açık. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: 'Sicilya Savunması: Siyah c-piyonuyla d4 karesini kontrol eder ve simetrik olmayan bir mücadele seçer.',
      amac: 'Beyazın d4 ile tam merkez kurmasını zorlaştırmak; ...cxd4 ile bir kanat piyonunu merkez piyonuyla değişme şansı yaratmak.',
      neden: 'Tiviakov hem Beyazla hem Siyahla Sicilya pozisyonlarını iyi tanıyan bir oyuncuydu; Sicilya ona kazanma şansı veren dengesiz yapılar sunar.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; Motor: +0.4, Sicilya ile aynı değer.' },
        { move: '1...c6', text: 'Caro-Kann; daha sağlam ama daha pasif. Motor: +0.6.' },
      ],
    },
    '2w': {
      text: 'Alapin varyantı: c3 ile Beyaz d2-d4’e hazırlanır; Siyah ...cxd4 oynarsa piyonla geri alıp e4-d4 merkezini korumak ister.',
      amac: 'Açık Sicilya’nın (2.Nf3 ve 3.d4) uzun teorisinden kaçınmak ve sağlam, anlaşılır bir merkez kurmak.',
      neden: 'Psikolojik açıdan ilginç bir seçim: Tiviakov Alapin’in en tanınmış savunucularından biriydi (Wikipedia, Sveshnikov ve Rozentalis ile birlikte onu sayar). Burada Adams rakibini kendi açılışının Siyah tarafında oynamaya zorladı.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya giden ana yol; Motor: +0.4. Daha keskin ama rakibin hazırlığına daha açık.' },
        { move: '2.Nc3', text: 'Kapalı Sicilya; daha yavaş, şah kanadında saldırı planları. Motor: +0.3.' },
      ],
    },
    '2b': {
      text: '...d5 ile Siyah e4’e hemen saldırır ve Beyazın d4 ile tam merkez kurmasına izin vermez.',
      amac: 'Merkezi hemen açmak; vezir d5’e gelince c3 piyonu yüzünden Beyaz Nc3 ile tempo kazanamaz.',
      neden: '2...Nf6 ile birlikte Alapin’e karşı en popüler iki cevaptan biridir. Siyah, Fransız tipi bir yapıya razı olur ama taşlarını rahat geliştirir.',
      diger: [
        { move: '2...Nf6', text: '3.e5 Nd5 ile Alekhine benzeri yapılar; en sık oynanan ana hat. Motor: +0.3.' },
        { move: '2...e6', text: 'Fransız’a benzer, ...d5’i hazırlar. Motor yaklaşık +0.4.' },
        { move: '2...e5', text: 'd4’ü doğrudan kontrol eder; Motor +0.2 ile en sağlam görünen seçenek, ama d5 karesi zayıflar.' },
      ],
    },
    '3w': {
      text: 'Beyaz d5’te değişir ve Siyahın vezirini merkeze çeker.',
      amac: 'Merkezdeki gerginliği çözüp sonra d4 ile tam piyon merkezi kurmak.',
      neden: '3.e5 Fransız İleri Varyantına benzer bir yapı verir, ama Siyah c8 filini önce dışarı çıkarabildiği için o yapı Siyah için daha rahattır (Wikipedia). Bu yüzden 3.exd5 ana hattır.',
      diger: [
        { move: '3.e5', text: '3...Bf5 ya da 3...Nc6 ile Siyah rahat bir Fransız yapısı alır. Motor: −0.1.' },
        { move: '3.Bb5+', text: '3...Bd7 sonrası fil değişimi; Beyaz merkez avantajını kaybeder. Motor: −0.1.' },
      ],
    },
    '3b': {
      text: 'Vezir d5’ten geri alır ve merkezde güçlü bir konum alır.',
      amac: 'Vezirle d4 ve e4 karelerini kontrol etmek; Beyazın Nc3 ile tempo kazanamaması bu planı mümkün kılar.',
      neden: 'Wikipedia’nın “Barmen Savunması” diye andığı ana hat budur. 3...Nf6 piyon feda eder, karşılığının yeterli olup olmadığı tartışmalıdır (Motor: +0.6).',
      diger: [
        { move: '3...Nf6', text: '4.Bb5+ Bd7 5.Bxd7+ Qxd7 ile piyonu geri almaya çalışır; Motor: +0.6, Siyah için riskli.' },
      ],
    },
    '4w': {
      text: 'd4 ile Beyaz merkeze bir piyon koyar ve c1 filinin yolunu açar.',
      amac: 'Merkezi piyonla doldurmak ve d5’teki vezire karşı Nf3, Be3 ve sonra Nc3 ile tempo kazanmak.',
      neden: 'Bu, 2.c3’ün asıl amacıdır. 4.Nf3 de aynı yapıya gider ama Siyaha ...Bg4 gibi esneklikler bırakır.',
      diger: [
        { move: '4.Nf3', text: 'Motor: +0.3, aynı değer; genelde aynı tek kalmış piyonlu yapılara geçer.' },
        { move: '4.Na3', text: 'At c4 ya da b5 üzerinden oyuna girer; daha az yaygın. Motor: +0.2.' },
      ],
    },
    '4b': {
      text: 'At f6’ya gelişir ve e4 karesini kontrol eder.',
      amac: 'Gelişimi tamamlamak ve şah kanadını rok için hazırlamak.',
      neden: '4...Nc6 ve 4...e6 ile birlikte ana hamlelerdendir. At f6’dan d5 karesine de destek verir.',
      diger: [
        { move: '4...Nc6', text: 'd4’e hemen baskı; 5.Nf3 ile genelde aynı yapılara gider. Motor: +0.3.' },
        { move: '4...e6', text: 'Fransız tipi yapı; Motor: yaklaşık +0.3.' },
      ],
    },
    '5w': {
      text: 'At f3’e gelişir ve d4 piyonunu korur.',
      amac: 'Merkezi sağlamlaştırmak ve rok yapmaya hazırlanmak.',
      neden: 'Motorun da ilk tercihi. Wikipedia’ya göre bu pozisyonda Siyah 5...e6 ya da 5...Bg4 ile devam ettiğinde Beyazın birçok seçeneği vardır.',
      diger: [
        { move: '5.Be3', text: 'Önce fili getirir; 5...cxd4 6.cxd4 e5 gibi cevaplar mümkün. Motor: +0.2.' },
        { move: '5.Na3', text: 'At b5 ya da c4 üzerinden; Motor: +0.1.' },
      ],
    },
    '5b': {
      text: 'At c6’ya gelişir ve d4 piyonuna baskıyı artırır.',
      amac: 'd4’e üç taşla (c5 piyonu, d5 veziri, c6 atı) saldırmak ve Beyazı ya değişmeye ya da savunmaya zorlamak.',
      neden: 'En aktif gelişim. 5...e6 daha sağlam, 5...Bg4 ise f3 atını bağlayarak d4’ü dolaylı olarak zayıflatır.',
      diger: [
        { move: '5...Bg4', text: '6.Be2 e6 7.h3 Bh5 ile fili dışarı çıkarır; Motor: +0.3.' },
        { move: '5...e6', text: '6.Bd3 cxd4 7.cxd4 Nc6 ile benzer yapılar. Motor: +0.4.' },
      ],
    },
    '6w': {
      text: 'Be3 d4’ü bir kez daha korur ve c1 filini geliştirir.',
      amac: 'd4’ü sağlamlaştırıp sonra Nc3 ile d5’teki vezire tempo kazanmak.',
      neden: 'Motorun da ilk tercihi (+0.3). 6.Be2 daha sakin, 6.dxc5 ise vezir değişimine gider ve Beyazın merkez avantajını yok eder.',
      diger: [
        { move: '6.Be2', text: '6...cxd4 7.cxd4 Qd8 8.Nc3 ile sakin bir tek kalmış piyon pozisyonu. Motor: +0.2.' },
        { move: '6.dxc5', text: '6...Qxd1+ 7.Kxd1 ile vezirsiz oyun; Siyah rahat eşitler. Motor: +0.2.' },
      ],
    },
    '6b': {
      text: 'Siyah merkezde değişir.',
      amac: 'Beyazı d4’te tek kalmış bir piyonla bırakmak; bu piyon uzun vadede Siyahın hedefi olacaktır.',
      neden: 'Gerginliği çözmek Siyaha net bir yapı verir. 6...Bg4 (Motor: +0.1) önce fili dışarı çıkarır ve daha esnektir.',
      diger: [
        { move: '6...Bg4', text: 'Fil e6 piyonunun arkasında hapsolmadan önce dışarı çıkar; Motor: +0.1, en iyi seçenek.' },
        { move: '6...e6', text: 'Değişimi erteler; 7.Bd3 Be7 8.O-O O-O. Motor: +0.2.' },
      ],
    },
    '7w': {
      text: 'Piyonla geri alınır: Beyazın d4’te tek kalmış bir piyonu olur.',
      amac: 'Merkezde piyon tutmak; tek kalmış piyon e5 ve c5 karelerini kontrol eder ve taşlara alan verir.',
      neden: 'Alapin’in mantığı budur. 7.Nxd4 ya da 7.Bxd4 merkezde piyon bırakmaz ve Siyaha kolay eşitlik verir (Motor: −0.2 / −0.4).',
      diger: [
        { move: '7.Nxd4', text: '7...Bd7 ile Siyah rahat gelişir; Motor: −0.2.' },
      ],
    },
    '7b': {
      text: '...e6 ile f8 filine yol açılır; Siyahın yapısı Fransız Savunmasına benzer.',
      amac: 'Hızla rok yapmak ve d5 karesini sağlam şekilde kontrol etmek.',
      neden: 'Sağlam ve klasik bir yaklaşım. Bedeli, c8 filinin e6 piyonunun arkasında kalmasıdır; Siyah bu fili sonra ...b6 ve ...Bb7 ile çözecek.',
      diger: [
        { move: '7...Bg4', text: 'Fil önce dışarı çıkar; 8.Nc3 Qa5 9.h3 Bxf3 ile Motor: +0.3.' },
        { move: '7...Qa5+', text: 'Şah çekerek veziri a5’e götürür; Motor: +0.3.' },
      ],
    },
    '8w': {
      text: 'At c3’e gelir ve d5 vezirine saldırarak tempo kazanır.',
      amac: 'Gelişime devam ederken vezirin merkezdeki konumunu sorgulamak.',
      neden: 'c3 piyonu oyundan çıktığı için Nc3 artık mümkündür; bu da 2...d5 kolunda Beyazın beklediği tempo kazancıdır. Motor: +0.4, ilk tercih.',
      diger: [
        { move: '8.a3', text: 'Önce ...Nb4 ve ...Bb4’ü engeller; Motor: +0.3.' },
        { move: '8.Bd3', text: '8...Nb4 9.Be2 ile tempo kaybı; Motor: +0.3.' },
      ],
    },
    '8b': {
      text: 'Vezir d6’ya çekilir; d-hattında d4’e bakmaya devam eder.',
      amac: 'Veziri d4 piyonunun önünde tutmak (abluka) ve b8-h2 çaprazında h2’ye bakmak.',
      neden: 'Üç geri çekilme de motor için yaklaşık eşit (+0.3). d6’daki vezir aktif ama ileride Bf4 gibi hamlelerle tempo kaybedebilir; bu oyunda 19.Bf4 tam olarak bunu yaptı.',
      diger: [
        { move: '8...Qa5', text: '9.a3 Bd6 10.Bd3 O-O ile vezir yan kanattan c3 atını bağlar. Motor: +0.3.' },
        { move: '8...Qd8', text: 'En sağlam kare; vezir tempo kaybetmez. Motor: +0.3.' },
      ],
    },
    '9w': {
      text: 'a3, Siyahın ...Nb4 ve ...Qb4 hamlelerini engeller.',
      amac: 'Taşlar için b4 karesini kapatmak ve ileride b2-b4 ile vezir kanadında alan kazanmayı hazırlamak.',
      neden: 'Tek kalmış piyonlu pozisyonlarda tipik bir koruyucu hamledir. Motor 9.Rc1’i biraz daha aktif buluyor (+0.6), ama a3 da sağlam (+0.3). Bu hamle 20.b4 ve 31.b5 planının ilk adımıdır.',
      diger: [
        { move: '9.Rc1', text: '9...Be7 10.a3 ile c-hattında hemen baskı; Motor: +0.6.' },
        { move: '9.Bc4', text: 'Fil a2-g8 çaprazına; Motor: +0.3.' },
      ],
    },
    '9b': {
      text: 'Fil e7’ye gelişir; Siyah rok yapmaya hazırlanır.',
      amac: 'Gelişimi tamamlamak ve şahı güvenli bir yere koymak.',
      neden: 'En doğal hamle. 9...g6 ile fili g7’ye getirmek de mümkündü (Motor: +0.2) ve uzun çaprazda d4’e daha çok baskı yapardı.',
      diger: [
        { move: '9...g6', text: '10.Bb5 Bg7 ile fil d4’e bakar; Motor: +0.2.' },
        { move: '9...Bd7', text: 'Daha pasif; Motor: +0.5.' },
      ],
    },
    '10w': {
      text: 'Fil d3’e gelişir ve b1-h7 çaprazında Siyahın şahına bakar.',
      amac: 'Şah kanadında saldırı potansiyeli yaratmak; tek kalmış piyonlu Beyazın klasik saldırı düzeni (Bd3, Qe2/Qc2).',
      neden: 'Motor 10.g3 ve 10.Bc4’ü biraz daha iyi buluyor (+0.35), ama fark küçük. d3 fili ileride c4’e geçip a2-g8 çaprazında e6’ya baskı yapacak.',
      diger: [
        { move: '10.Bc4', text: '10...O-O 11.O-O a6 12.Ba2 ile fil a2-g8 çaprazına; Motor: +0.3.' },
        { move: '10.g3', text: 'Fil g2’den uzun çaprazda; Motor: +0.35.' },
      ],
    },
    '10b': {
      text: 'Siyah rok yapar.',
      amac: 'Şahı güvenliğe almak ve kaleleri birleştirmek.',
      neden: 'En doğal ve en iyi hamle (Motor: +0.3). Ertelemek Beyazın d4-d5 kırılmasına karşı riskli olurdu.',
      diger: [
        { move: '10...b6', text: 'Önce fili hazırlar; Motor: +0.4.' },
      ],
    },
    '11w': {
      text: 'Beyaz rok yapar.',
      amac: 'Şahı güvenliğe almak ve f1 kalesini oyuna sokmak.',
      neden: 'Motor 11.Qc2’yi (h7’ye baskı) biraz daha iyi buluyor (+0.4), ama fark çok küçük. Rok her durumda yapılacaktı.',
      diger: [
        { move: '11.Qc2', text: 'Hemen h7’ye baskı; 11...e5 gibi karşı darbelere izin verir. Motor: +0.4.' },
      ],
    },
    '11b': {
      text: '...b6 ile fil b7’ye hazırlanır.',
      amac: 'c8 filini uzun çapraza getirip d5 karesine ve e4’e bakmak; tek kalmış piyona karşı abluka için tipik düzen.',
      neden: 'Motorun da ilk tercihi (+0.3). Siyahın tek sorunlu taşı c8 fili olduğu için onu çözmek önceliklidir.',
      diger: [
        { move: '11...Rd8', text: 'Önce kale d-hattına; Motor: +0.4.' },
        { move: '11...Bd7', text: 'Fil pasif kalır; Motor: +0.4.' },
      ],
    },
    '12w': {
      text: 'Vezir e2’ye gelir ve e-hattına bağlanır.',
      amac: 'Kaleleri d1 ve e1’e bağlamak; e-hattında e6’ya baskı hazırlamak.',
      neden: 'Motor 12.Qd2 ve 12.Re1’i çok az farkla tercih ediyor (+0.3), ama Qe2 de mantıklı: vezir hem e6’ya hem de a6 karesi üzerinden vezir kanadına bakar.',
      diger: [
        { move: '12.Qd2', text: 'Vezir d4’ü korur ve Bh6 fikirlerini hazırlar; Motor: +0.3.' },
        { move: '12.Re1', text: 'Kale önce e-hattına; Motor: +0.3.' },
      ],
    },
    '12b': {
      text: 'Fil b7’ye gelir ve uzun çaprazda d5 ve e4 karelerini kontrol eder.',
      amac: 'd4’ün önündeki d5 karesine bir taş daha bakmak ve f3 atı üzerinde baskı kurmak.',
      neden: 'Gelişimin doğal devamı (Motor: +0.2). Artık Siyahın bütün taşları oyunda.',
      diger: [
        { move: '12...Rd8', text: 'Önce kale; Motor: +0.2.' },
        { move: '12...h6', text: 'Bg5’i önler; Motor: +0.3.' },
      ],
    },
    '13w': {
      text: 'Kale d1’e gelip d4 piyonunu destekler.',
      amac: 'd4 piyonunu sağlamlaştırmak ve uygun anda d4-d5 kırılmasını hazırlamak.',
      neden: 'Tek kalmış piyonlu tarafın asıl dinamik silahı d4-d5’tir; kale d1’de bunu destekler. Motor: +0.3, ilk tercih.',
      diger: [
        { move: '13.Rfe1', text: 'Önce e-hattı; Motor: +0.2.' },
      ],
    },
    '13b': {
      text: 'Siyah a8 kalesini d-hattına getirir ve d4’e baskıyı artırır.',
      amac: 'd4’ü ablukaya almak ve d4-d5 kırılmasını önlemek.',
      neden: 'Motor 13...Rfd8’i biraz daha iyi buluyor (+0.2): f8 kalesi d8’e gelir, a8 kalesi c-hattına kalır. Tiviakov ise f8 kalesini e8 için tuttu.',
      diger: [
        { move: '13...Rfd8', text: '14.Rfe1 h6 15.Qd2 Bf8 ile klasik abluka düzeni; Motor: +0.2.' },
        { move: '13...h6', text: 'Bg5’i önler; Motor: +0.4.' },
      ],
    },
    '14w': {
      text: 'Bg5 f6 atını bağlar.',
      amac: 'f6 atı üzerinden d5 karesinin kontrolünü zayıflatmak ve Siyahı şah kanadında bir piyon hamlesine zorlamak.',
      neden: 'Motor bu hamleyi pek sevmiyor (0.0); 14.h3 ya da 14.Rfe1 (+0.3) daha esnek. Ancak hamlenin pratik bir amacı var: Siyahı ...g6 ya da ...h6 ile şah kanadını zayıflatmaya davet eder.',
      diger: [
        { move: '14.h3', text: 'Sakin bir bekleme hamlesi, ...Ng4 ve ...Bg4 yok; Motor: +0.3.' },
        { move: '14.Rfe1', text: '14...Rd7 15.Qc2 ile e- ve d-hatlarında baskı; Motor: +0.3.' },
      ],
    },
    '14b': {
      text: '...g6 h7’ye karşı korunur ama h6 ve f6 karelerini zayıflatır.',
      amac: 'Bd3 filinin b1-h7 çaprazını kapatmak ve bağı ileride ...Nd5 ile çözmek.',
      neden: 'Bu, Siyahın şah kanadındaki ilk gevşemesidir. Motor 14...h6’yı (15.Bh4 Nh5, 0.0) ya da 14...Rfe8’i (+0.2) tercih ediyor; ...g6 sonrası Beyaz +0.7. Asıl sorun hemen değil, sonra ...f6 ve ...g5 ile birleşince ortaya çıkar.',
      diger: [
        { move: '14...h6', text: '15.Bh4 Nh5 16.Bg3 Nxg3 17.hxg3 Bf6 ile fil çifti; Motor: 0.0.' },
        { move: '14...Rfe8', text: '15.Bb1 Nd5 ile değişim ararken şah kanadını sağlam tutar; Motor: +0.2.' },
      ],
    },
    '15w': {
      text: 'Fil c4’e geçer ve a2-g8 çaprazından e6’ya bakar.',
      amac: 'e6 piyonuna baskı kurmak; g6 sonrası b1-h7 çaprazının önemi azaldığı için fili başka bir çapraza taşımak.',
      neden: 'Motorun ilk tercihi (+0.8). ...g6 sonrası fil d3’te etkisizdi; c4’te ise d5 karesine ve ileride a2-g8 çaprazına bakar.',
      diger: [
        { move: '15.Bb5', text: '15...Nd5 16.Bh6 ile c6 atını bağlar; Motor: +0.7.' },
        { move: '15.h3', text: 'Bekleme hamlesi; Motor: +0.5.' },
      ],
    },
    '15b': {
      text: 'Kale e8’e gelir ve e6 piyonunu korur.',
      amac: 'e6’yı korumak ve e-hattında Beyazın kalesine karşı denge kurmak.',
      neden: 'Motor 15...Qb8’i benzer buluyor (+0.6). 15...Qc7? ise 16.Bxe6! fxe6 17.Qxe6+ ile taktiklere izin verir.',
      diger: [
        { move: '15...Qb8', text: 'Vezir d-hattındaki bağlardan çekilir; Motor: +0.6.' },
        { move: '15...Qc7', text: '16.Bxe6 fxe6 17.Qxe6+ ile e6 düşer; Motor: +0.8.' },
      ],
    },
    '16w': {
      text: 'Beyazın f1 kalesi de e-hattına gelir; e6 üzerinde baskı artar.',
      amac: 'Bütün taşları merkeze yönlendirmek ve d4-d5 kırılmasını hazırlamak.',
      neden: 'Motorun ilk tercihi (+0.75). Beyazın bütün taşları ideal karelerde; Siyah ise ...Nd5 ile değişimle rahatlamak zorunda.',
      diger: [
        { move: '16.Bb5', text: 'c6 atını bağlar; Motor: +0.7.' },
        { move: '16.Ba2', text: 'Fili önceden güvenli kareye alır; Motor: +0.6.' },
      ],
    },
    '16b': {
      text: '...Nd5 ile Siyah f6 atını merkeze getirir ve taş değişimi arar.',
      amac: 'g5 filinin bağından kurtulmak ve c3 atı ile değişerek baskıyı azaltmak.',
      neden: 'Tek kalmış piyona karşı her değişim Siyahın lehinedir. Ancak motor 16...Qb8’i tercih ediyor (+0.7): ...Nd5 sonrası 17.Ne4! çok güçlü olurdu (+1.0 / +1.2).',
      diger: [
        { move: '16...Qb8', text: '17.Bb5 Qc8 18.h4 ile bekleme; Motor: +0.7.' },
        { move: '16...Kg7', text: 'Şahı h6 karesinden uzaklaştırır; Motor: +1.1.' },
      ],
    },
    '17w': {
      text: 'Adams d5 atını alır.',
      amac: 'Yapıyı simetrikleştirmek: ...exd5 sonrası Siyahın da d5’te tek kalmış bir piyonu olur ve Beyazın d4 zaafı tek başına bir sorun olmaktan çıkar.',
      neden: 'Motor burada 17.Ne4’ü açık ara tercih ediyor: at d6 vezirine saldırır, 17...Qc7 18.Qd2 Kg7 19.Bh6+ ile kara kareler çöker (+1.2). Oyundaki hamle sonrası +0.3. Adams’ın seçimi daha az keskin ama tutarlı: c4 fili d5 atıyla değişince Siyahın kendi tek kalmış piyonu da a2-g8 çaprazında bir hedef olur ve bu fikir 25.Qa2 ile meyve verdi.',
      diger: [
        { move: '17.Ne4', text: '17...Qc7 18.Qd2 Kg7 19.Bh6+ Kg8 20.Rc1 ile güçlü baskı; Motor: +1.2.' },
        { move: '17.Bh6', text: '17...Nxc3 18.bxc3 Na5 ile Siyah c4 filine saldırır; Motor: +0.4.' },
      ],
    },
    '17b': {
      text: 'Piyonla alınır: artık Siyahın da d5’te tek kalmış bir piyonu var.',
      amac: 'Taşı geri almak; ...exd5 aynı zamanda e-hattını açar ve e8 kalesini aktifleştirir.',
      neden: 'Diğer alışlar kötü: 17...Bxg5 18.Nxg5 exd5 19.Qxe8+ kalite kaybettirir (+1.3), 17...Nxd4? ise taş kaybeder (+5.4).',
      diger: [
        { move: '17...Bxg5', text: '18.Nxg5 exd5 19.Qxe8+ Rxe8 20.Rxe8+ ile malzeme kaybı; Motor: +1.3.' },
      ],
    },
    '18w': {
      text: 'Vezir d2’ye çekilir; g5 filini korur ve e-hattındaki bağdan kurtulur.',
      amac: 'e2’deki vezire karşı e7 filinin ve e8 kalesinin oluşturduğu baskıyı kaldırmak; Bh6 fikirlerini hazırlamak.',
      neden: 'Motor 18.h3, 18.Bh6 ya da 18.Bxe7’yi biraz daha iyi buluyor (+0.2 / +0.25); 18.Qd2 sonrası yaklaşık 0.0. Fark küçük; Adams kara kareli filini değişmek istemedi, çünkü Siyahın kara kareleri zayıftı.',
      diger: [
        { move: '18.Bxe7', text: '18...Rxe7 19.Qd2 Rde8 20.Rxe7 ile sade bir pozisyon; Motor: +0.2.' },
        { move: '18.Bh6', text: '18...Qd7 19.Qd3 f6 ile fil Siyah şahının yakınında; Motor: +0.2.' },
      ],
    },
    '18b': {
      text: '...f6 g5 filini kovalar ama a2-g8 çaprazını ve e6 karesini zayıflatır.',
      amac: 'Beyazın filini g5’ten itmek ve f6 karesini kontrol etmek; Bh6 fikirlerine karşı da g7’yi tutar.',
      neden: 'Motor bu hamleyi en iyi buluyor (−0.2): kısa vadede Siyah için sorun yok. Ama uzun vadede e6 karesi ve a2-g8 çaprazı zayıfladı; 25.Qa2 bu zayıflık üzerine kuruldu.',
      diger: [
        { move: '18...Bxg5', text: '19.Qxg5 Kg7 20.Rxe8 ile kara kareli filler değişir; Motor: +0.3.' },
        { move: '18...Ba6', text: 'Fili aktif bir çapraza getirir; Motor: +0.4.' },
      ],
    },
    '19w': {
      text: 'Fil f4’e gelir ve d6 vezirine saldırır.',
      amac: 'Tempo kazanarak fili b8-h2 çaprazına yerleştirmek; Siyahın vezirini d6’dan uzaklaştırmak.',
      neden: 'Üç fil hamlesi (Bh6, Bh4, Bf4) motor için yaklaşık eşit (0.0 civarı). Bf4’ün avantajı, d6 karesini kontrol eden çapraza yerleşmesidir; bu kare sonra Beyazın atı için üs olacak.',
      diger: [
        { move: '19.Bh6', text: 'Fil g7 karesine bakar; Motor: 0.0.' },
        { move: '19.Bh4', text: 'Fil g3’e gitmeye hazırlanır; Motor: 0.0.' },
      ],
    },
    '19b': {
      text: 'Vezir d7’ye çekilir.',
      amac: 'Veziri güvenli bir yere çekip d5’i ve e-hattını desteklemeye devam etmek.',
      neden: 'Bu tek iyi hamledir: 19...Na5? ya da 19...Ne5? 20.Bxd6 ile vezir kaybettirir (+5.6). Vezir d7’de hem d5’i korur hem de e8 kalesini destekler.',
      diger: [
        { move: '19...Na5', text: '20.Bxd6 Bxd6 ile vezir karşılığında yalnızca bir fil; Motor: +5.65.' },
      ],
    },
    '20w': {
      text: 'b4 ile vezir kanadında alan kazanılır; c5 karesi kontrol edilir.',
      amac: 'Siyahın ...Na5-c4 manevrasını sınırlamak ve ileride b4-b5 ile c6 atını kovalamak.',
      neden: 'Motor 20.Qd3 ya da 20.h3’ü (yaklaşık −0.1) çok az farkla tercih ediyor. b4 bu oyunun planının parçasıdır: 31.b5 ile c6 karesini kontrol etmek ve Siyahın filini a8’e hapsetmek.',
      diger: [
        { move: '20.Qd3', text: '20...Bf8 21.h4 Na5 ile Siyah c4 karesine yerleşir; Motor: −0.1.' },
        { move: '20.h4', text: 'h-hattını açmayı hazırlar; Motor: −0.1.' },
      ],
    },
    '20b': {
      text: '...g5 fili geri iter ama şahın önü daha da açılır.',
      amac: 'f4 filini kovalamak ve şah kanadında alan kazanmak.',
      neden: 'Motor 20...Rc8 ya da 20...Bf8’i (−0.2 / −0.1) biraz daha iyi buluyor; derinlemesine analizde ...g5 de oynanabilir (0.0 civarı). Ama bu hamle h5 ve f5 karelerini zayıflatır ve h2-h4 ile h-hattını açma şansı verir. Beyazın fili b8-h2 çaprazında kalmaya devam ettiği için ...g5 tempoyu da tam kazandırmadı.',
      diger: [
        { move: '20...Rc8', text: '21.Re3 Bf8 22.Rxe8 Rxe8 ile sağlam bir pozisyon; Motor: −0.2.' },
        { move: '20...Bf8', text: '21.Bh6 Bxh6 ile kara kareli filleri değişir; Motor: −0.1.' },
      ],
    },
    '21w': {
      text: 'Fil g3’e çekilir; h2-b8 çaprazında kalır.',
      amac: 'Fili c7 ve d6 karelerini kontrol eden çaprazda tutmak.',
      neden: 'Motorun ilk tercihi (+0.2). 21.Be3 fili pasifleştirir (−0.2), 21.b5? ise 21...Na5 22.Bg3 Bxa3 ile piyon kaybettirir (−0.8).',
      diger: [
        { move: '21.Be3', text: 'Fil d4’ü korur ama pasif kalır; Motor: −0.2.' },
        { move: '21.b5', text: '21...Na5 22.Bg3 Bxa3 ile a3 düşer; Motor: −0.8.' },
      ],
    },
    '21b': {
      text: 'Fil f8’e döner ve kara kareleri savunur.',
      amac: 'Fili ileride g7’ye getirip uzun çaprazda d4’e ve kara karelere bakmak.',
      neden: 'Motorun ilk tercihi (0.0). e7 fili b4 piyonuna ve a3’e bakıyordu ama orada pek iş yapmıyordu; g7’de ise şahı da savunur.',
      diger: [
        { move: '21...h6', text: '22.Qa2 Kg7 ile şahı kapatır; Motor: +0.4.' },
        { move: '21...Kg7', text: '22.h4 h6 ile Motor: +0.7.' },
      ],
    },
    '22w': {
      text: 'h4 ile g5 piyonuna saldırılır.',
      amac: 'h-hattını açmak ve Siyahın şah kanadındaki piyonlarını değişime zorlamak.',
      neden: 'Motorun ilk tercihi (+0.1). ...g5 sonrası g5 piyonu Siyahın şah kanadının dayanağıdır; h4 onu sorgular.',
      diger: [
        { move: '22.Nb5', text: '22...h6 23.h4 ile benzer; Motor: +0.1.' },
        { move: '22.h3', text: 'Daha yavaş; Motor: +0.1.' },
      ],
    },
    '22b': {
      text: '...h6 g5’i korur.',
      amac: 'g5 piyonunu piyonla korumak ve şah kanadındaki yapıyı tutmak.',
      neden: 'Motorun ilk tercihi (+0.1). 22...g4? 23.Nh2 h5 sonrası g4 piyonu zayıf kalır (+0.6).',
      diger: [
        { move: '22...Rxe1+', text: 'Önce kaleleri değişir; Motor: +0.3.' },
        { move: '22...g4', text: '23.Nh2 h5 24.Nb5 ile g4 zayıf; Motor: +0.6.' },
      ],
    },
    '23w': {
      text: 'Beyaz h-piyonlarını değişir.',
      amac: 'h-hattını açmak; Siyahın şah kanadında artık sadece f6 ve g5 piyonları kalacak.',
      neden: 'Motor 23.Rc1’i çok az farkla tercih ediyor (+0.1); 23.hxg5 de eşit (0.0). Adams yapıyı netleştirdi: Siyahın şahının önündeki piyonlar azaldıkça a2-g8 çaprazı daha da önemli hale gelir.',
      diger: [
        { move: '23.Rc1', text: '23...Rc8 24.Nh2 ile c-hattı; Motor: +0.1.' },
        { move: '23.Rxe8', text: 'Önce kaleleri değişir; Motor: 0.0.' },
      ],
    },
    '23b': {
      text: 'Piyonla geri alınır; Siyahın şahının önü açık.',
      amac: 'Piyon yapısını korumak; ...hxg5 sonrası g5 ve f6 piyonları birbirini destekler.',
      neden: 'Motorun ilk tercihi (−0.1). 23...fxg5? 24.Rxe8 Rxe8 25.Qa2 sonrası e6 ve a2-g8 çaprazı açılır (+1.1).',
      diger: [
        { move: '23...fxg5', text: '24.Rxe8 Rxe8 25.Qa2 Qf7 ile d5 ve e6 zayıflar; Motor: +1.1.' },
        { move: '23...Rxe1+', text: 'Önce kale değişimi; Motor: +0.1.' },
      ],
    },
    '24w': {
      text: 'Kaleler e8’de değişir.',
      amac: 'e-hattını Siyahın kalesinden temizlemek ve kalan kale ile ileride e-hattını almak.',
      neden: 'Motor için üç hamle eşit (−0.1 / 0.0). Kale değişimi Beyaza Qa2 ve Ne4 için yer açar.',
      diger: [
        { move: '24.Rc1', text: '24...Re7 25.Qd3 ile c-hattı; Motor: 0.0.' },
        { move: '24.Qd3', text: '24...Ne7 25.Nh2 ile Motor: −0.1.' },
      ],
    },
    '24b': {
      text: 'Kale e8’de geri alır.',
      amac: 'e-hattını Siyah kalesiyle tutmak.',
      neden: 'Doğal geri alış (−0.1). 24...Qxe8 de mümkün (+0.1). 24...Ba6?? ise 25.Rxd8 ile kale kaybettirir.',
      diger: [
        { move: '24...Qxe8', text: 'Vezir e-hattına; Motor: +0.1.' },
      ],
    },
    '25w': {
      text: 'Qa2: vezir a2-g8 çaprazına geçer ve d5 piyonunu g8 şahına bağlar.',
      amac: 'd5’i bağlamak; böylece ...dxe4 yasaklanır ve Beyazın atı e4 karesini kullanabilir.',
      neden: 'Motor 25.Rc1 ya da 25.Qd3’ü çok az farkla tercih ediyor (+0.1 / 0.0); Qa2 sonrası da yaklaşık 0.0. Ama Qa2’nin uzun vadeli bir fikri var: ...f6 ve ...g5 ile açılan a2-g8 çaprazı artık Beyazın en güçlü silahı.',
      diger: [
        { move: '25.Rc1', text: '25...Rc8 26.Re1 Ne7 ile c-hattı; Motor: +0.1.' },
        { move: '25.Qd3', text: '25...Ne7 26.Re1 Rc8 ile b1-h7 çaprazı; Motor: 0.0.' },
      ],
    },
    '25b': {
      text: 'At e7’ye gelip d5’i korur.',
      amac: 'd5 piyonunu bir taşla daha savunmak ve ...Nf5 ile d4’e baskı yapmak.',
      neden: 'Bu oyunun ilk ciddi hatasıdır. e7’deki at d5’i korur ama d6 karesini kontrol edemez ve hareketsiz kalır. Motor 25...Nd8’i (26.Qc2 Kg7 ile at f7’ye gelir, −0.1) ya da 25...Bg7’yi (0.0) öneriyor; ...Ne7 sonrası Beyaz +0.7.',
      diger: [
        { move: '25...Nd8', text: '26.Qc2 Kg7 27.Nd2 Ba6 ile at f7’den d6 ve e5’i tutar; Motor: −0.1.' },
        { move: '25...Bg7', text: '26.Qxd5+ Qxd5 27.Nxd5 Rd8 ile piyon geri kazanılır; Motor: 0.0.' },
      ],
    },
    '26w': {
      text: 'Ne4! d5 piyonu bağlı olduğu için at alınamaz; at d6 karesine yöneliyor.',
      amac: 'Atı d6’ya getirmek: Siyahın c- ve e-piyonu olmadığı için orada hiçbir piyon onu kovalayamaz.',
      neden: 'Bu, Beyazın avantajını yaratan hamledir. Motor: Ne4 +0.7; sonraki en iyi 26.Re1 −0.1, 26.Qd2 ise −0.6. Bağlı d5 piyonu e4’ü kontrol edemez, d6 ise artık Beyazın kalıcı karesi.',
      diger: [
        { move: '26.Re1', text: '26...Kg7 27.Qb1 Ng6 ile Siyah toparlanır; Motor: −0.1.' },
        { move: '26.Qd2', text: '26...Nf5 27.Qd3 Rc8 ile Siyahın at d4’e baskı yapar; Motor: −0.6.' },
      ],
    },
    '26b': {
      text: 'Fil g7’ye gelir ve uzun çaprazda d4’e bakar.',
      amac: 'd4 piyonuna baskı yapmak ve şahın çevresindeki kara kareleri savunmak.',
      neden: 'Motor 26...Kg7’yi biraz daha iyi buluyor (+0.3), ama ...Bg7 de makul (+0.6). 26...Qe6? ise 27.Nd6 Nf5 28.Nxe8 ile kalite kaybettirir (+2.5).',
      diger: [
        { move: '26...Kg7', text: '27.Nd6 Rd8 28.Rc1 Bc8 ile şah a2-g8 çaprazından çıkar; Motor: +0.3.' },
        { move: '26...Qe6', text: '27.Nd6 Nf5 28.Nxe8 Qxe8 ile kalite kaybı; Motor: +2.5.' },
      ],
    },
    '27w': {
      text: 'Nd6: at merkezdeki karesine yerleşir; b7 filine, f7, e8 ve f5 karelerine bakar.',
      amac: 'Atı kalıcı bir üsse yerleştirip Siyahın bütün taşlarını onun etrafında savunmaya bağlamak.',
      neden: 'Motorun açık ara ilk tercihi (+0.7). 27.Rc1 (−0.2) ya da 27.Bh2 (−0.8) bu fırsatı kaçırır; at e4’te uzun süre kalırsa ...Nf5 gibi hamlelerle Siyah rahatlar.',
      diger: [
        { move: '27.Rc1', text: '27...Rc8 28.Rxc8+ Nxc8 ile Siyah kaleleri değişir; Motor: −0.2.' },
      ],
    },
    '27b': {
      text: 'Kale d8’e gelir ve d5’i destekler.',
      amac: 'd5’i ikinci kez korumak ve kaleyi e8’deki atın saldırısından çekmek.',
      neden: 'Motorun ilk tercihi (+0.6). Kale e8’de d6 atının saldırısı altındaydı.',
      diger: [
        { move: '27...Rf8', text: '28.Qc2 Nc8 29.Nxb7 Qxb7 ile at değişilir; Motor: +0.7.' },
      ],
    },
    '28w': {
      text: 'Kale açık c-hattını alır.',
      amac: 'c-hattında c7 karesine girmek ve Siyahın taşlarını daha da bağlamak.',
      neden: 'Motorun ilk tercihi (+0.7). Açık hattı almak, d6 atı ile birlikte c7 ve c8 karelerine baskı demektir.',
      diger: [
        { move: '28.Qb1', text: '28...Bc8 29.Rc1 ile benzer; Motor: +0.5.' },
        { move: '28.Qc2', text: '28...Qc6 ile vezirler değişebilir; Motor: +0.4.' },
      ],
    },
    '28b': {
      text: 'Fil c6’ya gelir ve c-hattını kapatır.',
      amac: 'c-hattında Beyazın kalesine karşı bir engel koymak; fili b7’deki d6 atı saldırısından çekmek.',
      neden: 'Motorun ilk tercihi (+0.7). 28...Ba6 de eşit derecede iyi.',
      diger: [
        { move: '28...Ba6', text: '29.Rc3 Bc4 ile fil aktif; Motor: +0.7.' },
        { move: '28...Bc8', text: '29.Qc2 Bf8 ile; Motor: +0.7.' },
      ],
    },
    '29w': {
      text: 'Vezir e2’ye gelir ve e7 atına baskı yapar.',
      amac: 'Veziri e-hattına getirmek ve e7 atı üzerinden Siyahın savunmasını zorlamak.',
      neden: 'Motor 29.Qb1, 29.Qc2 ve 29.Qb3’ü yaklaşık eşit buluyor (+0.5). Qe2 vezirin a2’deki pasif konumunu düzeltir.',
      diger: [
        { move: '29.Qb1', text: '29...a6 30.Nh2 Ba4 31.Qd3 ile; Motor: +0.6.' },
        { move: '29.Qc2', text: '29...Ba4 30.Qb1 ile; Motor: +0.5.' },
      ],
    },
    '29b': {
      text: 'Fil pasif a8 karesine çekilir.',
      amac: 'Fili b5 karesindeki tehditlerden ve Qa6 saldırılarından uzaklaştırmak; uzun çaprazda d5’i korumak.',
      neden: 'Bu ikinci ciddi hatadır. Fil a8’de yalnızca d5’i koruyan bir piyon gibi kalır. Motor 29...Ba4’ü öneriyor (30.Qd3 Qe6 31.Re1 Qd7, +0.7): fil b5 üzerinden aktifleşebilir. Oyunda +1.5.',
      diger: [
        { move: '29...Ba4', text: '30.Qd3 Qe6 31.Re1 Qd7 ile fil aktif; Motor: +0.7.' },
        { move: '29...Nc8', text: '30.b5 Ba8 31.Nxc8 Rxc8 ile at değişimi; Motor: +1.3.' },
      ],
    },
    '30w': {
      text: 'Vezir d3’e gelir ve b1-h7 çaprazında şaha bakar.',
      amac: 'Veziri hem şah kanadına hem merkeze bakan bir kareye yerleştirmek; Re1 için e2’yi boşaltmak.',
      neden: 'Motorun ilk tercihi (+1.7). Vezir d3’ten h7’ye bakar; açık şah kanadı göz önüne alınınca bu tehlikeli bir çaprazdır.',
      diger: [
        { move: '30.Re1', text: '30...Nc8 31.Ne8 Qf7 ile Motor: +1.6.' },
        { move: '30.b5', text: '30...Nc8 31.Nxc8 Rxc8 ile at değişilir; Motor: +1.5.' },
      ],
    },
    '30b': {
      text: 'Fil f8’e çekilir; h6 üzerinden c1-h6 çaprazına çıkacak.',
      amac: 'Fili c1-h6 çaprazına getirip c1 kalesine baskı yapmak.',
      neden: 'Motor 30...Bh6’yı biraz daha iyi buluyor (+1.6): fil doğrudan h6’ya gider. ...Bf8 bir tempo kaybeder (+1.8).',
      diger: [
        { move: '30...Bh6', text: '31.Qe2 Nc8 32.Rxc8 Rxc8 ile Motor: +1.6.' },
        { move: '30...Qe6', text: '31.Re1 Qd7 32.Qc2 ile Motor: +1.75.' },
      ],
    },
    '31w': {
      text: 'b5 ile c6 karesi kontrol edilir ve b6 piyonu sabitlenir.',
      amac: 'a8 filinin ve e7 atının c6 karesine gelmesini önlemek; Siyahın vezir kanadını dondurmak.',
      neden: 'Motorun ilk tercihi (+2.2). Bu hamleyle a8 fili tamamen hapsedildi; Siyahın artık neredeyse hiç aktif hamlesi yok.',
      diger: [
        { move: '31.a4', text: '31...Bh6 32.Qe2 g4 ile Motor: +1.7.' },
        { move: '31.Re1', text: '31...Bg7 32.Qe2 ile Motor: +1.5.' },
      ],
    },
    '31b': {
      text: 'Fil h6’dan c1-h6 çaprazına çıkar.',
      amac: 'c1 kalesine baskı yapmak ve kara kareli filin aktif bir yer bulması.',
      neden: 'Motorun ilk tercihi (+2.2). Siyahın pozisyonu zor; aktif bir hamle bulmak önemli.',
      diger: [
        { move: '31...Bg7', text: '32.a4 Bh6 ile tempo kaybı; Motor: +2.25.' },
        { move: '31...a5', text: '32.bxa6 Bc6 33.Qb3 b5 ile vezir kanadını açmaya çalışır; Motor: +2.3.' },
      ],
    },
    '32w': {
      text: 'Kale e-hattına döner ve e7 atına baskı yapar.',
      amac: 'e7 atını hedef almak; e-hattı Beyazın bir sonraki aşamadaki saldırı hattı olacak.',
      neden: 'Motor 32.Rc2 ya da 32.Qe2’yi (+2.1 / +2.4) biraz daha iyi buluyor; Re1 sonrası yaklaşık +1.9. Kale c1’de h6 filinin çaprazındaydı, bu yüzden Adams onu oradan çekti.',
      diger: [
        { move: '32.Qe2', text: '32...Bg7 33.Re1 Nc8 34.Ne8 ile e7 atını hedef alır; Motor: +2.4.' },
        { move: '32.Rc2', text: '32...Bf8 33.a4 Qe6 34.Rc7 ile c7 karesine girer; Motor: +2.1.' },
      ],
    },
    '32b': {
      text: 'Kale f8’e gelir.',
      amac: 'Kaleyi f-hattına getirip ...f5 ile şah kanadında karşı oyun hazırlamak.',
      neden: 'Motor 32...Bb7’yi daha iyi buluyor (+1.9): fil a8’den kurtulur. ...Rf8 d5’in savunmasını zayıflatır (+2.6).',
      diger: [
        { move: '32...Bb7', text: '33.Nh2 Bg7 34.Qc2 Nc8 ile fil aktifleşir; Motor: +1.9.' },
        { move: '32...Bg7', text: '33.Qe3 Bf8 34.Nxg5 ile Motor: +2.4.' },
      ],
    },
    '33w': {
      text: 'At h2’ye çekilir; g4 ya da f1-g3 yoluyla şah kanadına yönelecek.',
      amac: 'f3 atını daha aktif bir kareye taşımak: g4 karesinden f6 ve h6’ya, ya da g3’ten f5’e.',
      neden: 'Motorun ilk tercihi (+2.8). f3 atı pek iş yapmıyordu; h2-g4 ya da f1-g3 ile şah kanadına katılacak.',
      diger: [
        { move: '33.Qe2', text: '33...Nf5 34.Nxf5 Qxf5 ile Motor: +2.4.' },
        { move: '33.a4', text: '33...Bb7 34.Nh2 ile Motor: +2.1.' },
      ],
    },
    '33b': {
      text: 'Fil g7’ye döner ve d4’e bakar.',
      amac: 'Fili uzun çapraza geri getirip d4’e baskı yapmak ve şahı savunmak.',
      neden: 'Motorun ilk tercihi (+2.6). 33...f5? 34.Qe2 Bg7 35.Qxe7 ile at düşer (+3.3).',
      diger: [
        { move: '33...Bb7', text: '34.Nxb7 Qxb7 35.Bd6 Rf7 ile at değişir; Motor: +2.7.' },
        { move: '33...f5', text: '34.Qe2 Bg7 35.Qxe7 ile at düşer; Motor: +3.3.' },
      ],
    },
    '34w': {
      text: 'At f1’e gider; g3 üzerinden şah kanadına gelecek.',
      amac: 'Atı g3’e getirip f5 ve h5 karelerine baskı yapmak.',
      neden: 'Motor 34.Qe2’yi açık ara daha güçlü buluyor (34...Nc8 35.Ne8 Qf5 36.Qh5, +3.1); oyunda +1.9. Adams daha yavaş ama güvenli bir yol seçti.',
      diger: [
        { move: '34.Qe2', text: '34...Nc8 35.Ne8 Qf5 36.Qh5 ile e7 ve e8’e baskı; Motor: +3.1.' },
        { move: '34.Ng4', text: '34...f5 35.Ne5 Bxe5 36.Bxe5 ile Motor: +2.8.' },
      ],
    },
    '34b': {
      text: '...f5 ile Siyah g4 ve e4 karelerini kontrol eder ve ...f4 ilerleyişini düşünür.',
      amac: 'Beyazın atının g3 ve e4 karelerine gelişini zorlaştırmak; ...f4 ile g3 filini kovalamak.',
      neden: 'Motorun ilk tercihi (+1.9). Ancak f5 piyonu artık bir hedef: d6 atı ve ileride g3 atı ona bakacak.',
      diger: [
        { move: '34...Bh8', text: '35.Qe2 Nc8 36.Ne8 ile Motor: +2.3.' },
        { move: '34...Bb7', text: '35.Nxb7 Qxb7 36.Bd6 Rf7 ile Motor: +2.3.' },
      ],
    },
    '35w': {
      text: 'Be5! Beyaz filini e5’e koyar ve kara kareli filleri değişmeye yönelir.',
      amac: 'd6 atının tek potansiyel rakibini ortadan kaldırmak; ...Bxe5 dxe5 sonrası e5 piyonu d6 atını korur ve geçer piyon olur.',
      neden: 'Motorun ilk tercihi (+2.0). 35.Qe3 (+1.6) ve 35.Qe2 (+1.5) daha zayıf. Siyah değişmezse e5 fili g7 filine baskı yapar ve h8-a1 çaprazını kontrol eder.',
      diger: [
        { move: '35.Qe3', text: '35...Bf6 36.Be5 f4 37.Qf3 ile Motor: +1.6.' },
        { move: '35.Qe2', text: '35...Bxd4 36.Qxe7 Qxe7 37.Rxe7 ile Motor: +1.5.' },
      ],
    },
    '35b': {
      text: 'At g6’ya gelir ve e5 filine saldırır.',
      amac: 'Atı aktifleştirmek ve e5 filini sorgulamak; ...Nh4 ile şah kanadında saldırı hazırlamak.',
      neden: 'Motor 35...Bxe5’i biraz daha iyi buluyor (+1.8): önce değişim yapılır. ...Ng6 sonrası +2.0.',
      diger: [
        { move: '35...Bxe5', text: '36.dxe5 Qe6 37.Qd2 f4 ile Motor: +1.8.' },
        { move: '35...Bf6', text: '36.Ng3 Bxe5 37.dxe5 Qe6 ile Motor: +2.4.' },
      ],
    },
    '36w': {
      text: 'At g3’e gelir ve f5 piyonuna saldırır.',
      amac: 'f5’e iki taşla (d6 atı ve g3 atı) saldırmak.',
      neden: 'Motorun ilk iki tercihinden biri (+2.2). 36.Bxg7 Kxg7 37.Ng3 ile aynı değer.',
      diger: [
        { move: '36.Bxg7', text: '36...Kxg7 37.Ng3 Nh4 38.Ndxf5+ ile Motor: +2.25.' },
        { move: '36.Qh3', text: '36...Bxe5 37.dxe5 d4 ile Motor: +1.6.' },
      ],
    },
    '36b': {
      text: 'Siyah fillerini değişir.',
      amac: 'e5 filini ortadan kaldırmak ve Beyazı dxe5 ile almaya zorlamak.',
      neden: 'Motorun ilk tercihi (+2.1). 36...Nh4 (+3.1) ya da 36...Nxe5 (+3.1) daha kötü.',
      diger: [
        { move: '36...Nh4', text: '37.Nh5 Bxe5 38.dxe5 Qe6 ile Motor: +3.1.' },
        { move: '36...Nxe5', text: '37.dxe5 Bxe5 38.Ndxf5 Re8 ile Motor: +3.1.' },
      ],
    },
    '37w': {
      text: 'dxe5! Piyonla alınır; e5 piyonu d6 atını korur ve geçer piyon olur.',
      amac: 'd6 atını sağlamlaştırmak ve geçer bir e-piyonu yaratmak.',
      neden: 'Bu tek iyi hamledir: 37.Rxe5? 37...Qxd6 ile at düşer (−1.3), 37.Ndxf5? 37...Bxg3 ile taş kaybı (−2.2). Motor: dxe5 +2.2.',
      diger: [
        { move: '37.Rxe5', text: '37...Qxd6 38.Rxf5 Qe7 ile at düşer; Motor: −1.3.' },
        { move: '37.Ndxf5', text: '37...Bxg3 38.Nxg3 Qf7 ile Siyah bir taş kazanır; Motor: −2.2.' },
      ],
    },
    '37b': {
      text: 'At h4’e gider.',
      amac: 'Atı g2 ve f3 karelerine yaklaştırmak; şah kanadında karşı saldırı aramak.',
      neden: 'Bu oyunun belirleyici hatasıdır. At kenara gider ve f5 piyonu yalnızca d7 veziriyle korunur. Motor 37...Nf4’ü öneriyor (38.Qd4 Bb7 39.Ne2 Ne6, +2.5); oyunda +3.9.',
      diger: [
        { move: '37...Nf4', text: '38.Qd4 Bb7 39.Ne2 Ne6 ile at merkezde kalır; Motor: +2.5.' },
        { move: '37...d4', text: '38.Qxd4 Nf4 39.f3 ile piyon feda; Motor: +2.6.' },
      ],
    },
    '38w': {
      text: 'Ndxf5! At f5 piyonunu alır.',
      amac: 'f5’i açmak; Siyah atla geri alırsa e-piyonu tempo kazanarak ilerleyecek.',
      neden: 'Motorun ilk tercihi (+3.9). 38.Nh5 (+3.4) de güçlü ama daha yavaş. Ndxf5 sonrası d6 atı gitse bile e5 piyonu artık serbest.',
      diger: [
        { move: '38.Nh5', text: '38...d4 39.Qg3 Qe7 40.Nf6+ ile Motor: +3.4.' },
        { move: '38.f3', text: 'h4 atını hapsetmeye çalışır; Motor: +1.9.' },
      ],
    },
    '38b': {
      text: 'Siyah atla alır.',
      amac: 'Malzemeyi geri almak.',
      neden: 'Doğal geri alış, ama Beyazın e6 hamlesine tempo kazandırır: at f5’te vezir tarafından korunur ve vezir aynı anda e6 piyonundan kaçmak zorunda kalır. Motor 38...Qe6’yı öneriyor (39.Nd4 Qg4 40.e6, +4.6): vezir e6 karesini bloke eder. Oyunda +5.5.',
      diger: [
        { move: '38...Qe6', text: '39.Nd4 Qg4 40.e6 Qf4 ile Motor: +4.6.' },
        { move: '38...Qh7', text: '39.e6 Re8 40.e7 Qg6 ile Motor: +5.0.' },
      ],
    },
    '39w': {
      text: 'e6! Piyon vezire saldırır.',
      amac: 'Tempo kazanarak piyonu ilerletmek; vezir f5 atını korumaya devam etmek zorundadır.',
      neden: 'Bu tek kazanan hamledir: Motor: e6 +4.8; 39.Nh5 −1.2, 39.a4 −1.6. Vezir hem e6 piyonunu hem f5 atını aynı anda karşılayamaz.',
      diger: [
        { move: '39.Nh5', text: '39...Qe6 40.Qd1 Kf7 ile Siyah toparlanır; Motor: −1.2.' },
      ],
    },
    '39b': {
      text: 'Vezir h7’ye çekilir ve f5’i korumaya devam eder.',
      amac: 'f5 atını korumak ve h-hattından Beyazın şahına baskı yapmak.',
      neden: 'Vezir hem e6 saldırısından kaçmalı hem de f5 atını korumalıdır; h7 bu iki görevi birden yapan en iyi karedir. Motorun ilk tercihi (+5.1). 39...Qe8 ya da 39...Qg7 daha kötü (+5.7 / +5.8), çünkü f5 atının savunması zayıflar ve e7 tehdidi daha güçlü olur.',
      diger: [
        { move: '39...Qe8', text: '40.Nxf5 d4 41.e7 ile Motor: +5.7.' },
      ],
    },
    '40w': {
      text: 'At f5’i alır.',
      amac: 'Malzemeyi geri almak ve e-piyonunu f5 atı ile desteklemek.',
      neden: 'Malzeme dengesi yeniden kurulur ve Beyazın e6 piyonu artık f5 atıyla desteklenir; at ayrıca e7 ve h6 karelerine bakar. 40.Qxf5 de aynı kuvvette (+5.4). 40...Qxf5?? 41.Qxf5 Rxf5 42.e7 ile piyon vezir olur. Aceleci 40.e7? ise 40...Nxe7 ile avantajın çoğunu verir (+1.1).',
      diger: [
        { move: '40.Qxf5', text: '40...Rxf5 41.Nxf5 Qxf5 42.e7 ile Motor: +5.4.' },
        { move: '40.e7', text: '40...Nxe7! 41.Qxh7+ Kxh7 ile vezirler değişir ve avantajın büyük kısmı gider; Motor: +1.1.' },
      ],
    },
    '40b': {
      text: 'Fil b7’ye gelir ve d5’i korur.',
      amac: 'd5 piyonunu desteklemek ve a8 filini aktifleştirmek.',
      neden: 'Siyah d5’i korumak ve a8 filini nihayet oyuna sokmak ister, ama e-piyonu daha hızlı. Motor 40...Re8’i biraz daha iyi buluyor (+5.3): kale piyonun önüne hemen gelir. Oyundaki hamle sonrası +5.9; Beyaz her durumda kazanıyor.',
      diger: [
        { move: '40...Re8', text: '41.Re5 Bb7 42.f3 ile Motor: +5.3.' },
        { move: '40...Qxf5', text: '41.Qxf5 Rxf5 42.e7 Rf8 43.e8=Q ile Motor: +5.7.' },
      ],
    },
    '41w': {
      text: 'e7: piyon vezir olmaya bir kare uzakta; f8 kalesine saldırır.',
      amac: 'Piyonu vezir olmaya yaklaştırmak ve Siyahın kalesini e8’e zorlamak.',
      neden: 'Motorun ilk tercihi (+6.0). Piyon kaleye saldırarak bir tempo daha kazanır; Siyah kalesini e8’e koymak zorunda kalır ve 8. yatay bağlanır. Vezir h7’de f5’i tutmaya devam ederken e8 kalesi de piyonun önünde kilitlenir: Siyahın bütün taşları tek bir piyonu durdurmakla meşgul.',
      diger: [
        { move: '41.Re5', text: '41...g4 42.Qd4 ile Motor: +5.8.' },
      ],
    },
    '41b': {
      text: 'Kale e8’de piyonu durdurur.',
      amac: 'Piyonun vezir olmasını engellemek.',
      neden: 'Zorunlu: kale saldırı altında ve f-hattında kalırsa 42.exf8=Q+ gelir. 41...a5 ya da 41...a6 gibi hamleler 42.e8=Q ile kesin kaybettirir (Motor: +8.4). Kale e8’de piyonu durdurur ama tamamen pasif hale gelir.',
      diger: [],
    },
    '42w': {
      text: 'Re6: kale e-hattında e7 piyonunu destekler.',
      amac: 'e7 piyonunu korumak ve Rf6 ile f-hattına geçmek.',
      neden: 'Kale e7 piyonunu ikinci kez korur ve Rf6 ile f-hattına geçip f8 karesine bakmaya hazırlanır. Motor 42.g4’ü çok az farkla tercih ediyor (+6.2); Re6 (+6.1) aynı derecede kazanır. 42.Re5? ise 42...Qg6 ile Siyaha nefes aldırır (+5.0).',
      diger: [
        { move: '42.g4', text: '42...d4 43.Qc4+ Kh8 44.Qxd4+ ile Motor: +6.2.' },
      ],
    },
    '42b': {
      text: 'Fil c8’den e6 kalesine saldırır.',
      amac: 'e6 kalesini almak ve e7 piyonunun desteğini kaldırmak.',
      neden: 'Siyah e6 kalesine saldırarak e7 piyonunun desteklerinden birini koparmak ister. Motorun ilk tercihi (+6.1), ama bu da kurtarmaz: 43.Qxd5 ile e6 kalesi dolaylı olarak korunur, çünkü ...Bxe6 sonrası vezir e6’dan şah çeker.',
      diger: [
        { move: '42...g4', text: '43.Rf6 Rxe7 ile Motor: +6.5.' },
      ],
    },
    '43w': {
      text: 'Vezir d5 piyonunu alır ve g8’e bakar.',
      amac: 'Siyahın şahına a2-g8 çaprazında saldırmak.',
      neden: 'Motorun ilk tercihi (+6.4). Vezir hem d5 piyonunu alır hem a2-g8 çaprazında g8’e bakar; 25.Qa2 ile başlayan çapraz oyunu böylece tamamlanır. 43...Bxe6 44.Qxe6+ Kh8 45.Qf6+ Kg8 46.Nh6+ ile Beyaz kazanır. 43...Qxf5 ise 9 hamlede, 43...Kh8 6 hamlede mat. Tiviakov terk etti.',
      diger: [
        { move: '43.Rf6', text: '43...Qxf5 44.Rxf5 Bxf5 45.Qxd5+ ile Motor: +6.4.' },
      ],
    },
  },
  qa: [
    { q: 'Adams neden Tiviakov’a karşı Alapin oynadı?', a: 'Tiviakov Alapin’in en tanınmış savunucularından biriydi. Adams onu kendi açılışının Siyah tarafında oynamaya zorladı. 2...d5 kolunda Siyah sağlam bir yapı alır ama Beyaz hızlı gelişim ve aktif taşlarla oyunu yönlendirebilir.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Siyahın şah kanadındaki piyon hamlelerinden (...g6, ...f6, ...g5) ve pasif taşlarından (...Ne7, ...Ba8). Bu hamleler d6 karesini ve a2-g8 çaprazını zayıflattı. Adams 25.Qa2 ile d5’i bağladı, 26.Ne4! ve 27.Nd6 ile atını kalıcı bir üsse yerleştirdi.' },
    { q: 'Neden 17.Bxd5, 17.Ne4 değil?', a: 'Motor 17.Ne4’ü daha güçlü buluyor (+1.2 / +0.3). Ancak Bxd5 sonrası yapı simetrikleşti ve Siyahın d5 piyonu da bir hedef haline geldi. Adams bu yapıda uzun vadeli bir plan gördü ve bu plan 25.Qa2 ile meyve verdi.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: '25...Nd8 (−0.1), 29...Ba4 (+0.7) ve 37...Nf4 (+2.5) en önemli fırsatlardı. Bu hamlelerin hepsi d6 atının gücünü sınırlamaya ya da Siyahın taşlarını aktif tutmaya yönelikti.' },
    { q: '35.Be5’in amacı neydi?', a: 'd6 atının tek potansiyel rakibini ortadan kaldırmak ve dxe5 ile d6 atını koruyan geçer bir e-piyonu yaratmak. Siyah değişmezse e5 fili g7 filine ve h8-a1 çaprazına baskı yapar.' },
    { q: '37...Nh4 neden hataydı?', a: 'At kenara gitti ve f5 piyonu yalnızca d7 veziriyle korundu. 38.Ndxf5! sonrası e-piyonu tempo kazanarak ilerledi. 37...Nf4 atı merkezde tutardı (+2.5).' },
    { q: '39.e6 neden tek kazanan hamleydi?', a: 'Piyon vezire saldırdı; vezir f5 atını korumaya devam etmek zorundaydı. 39.Nh5 ise 39...Qe6 ile Siyahın toparlanmasına izin verirdi (−1.2).' },
  ],
  sources: [
    { title: 'ChessBase: Michael Adams – My most memorable game', url: 'https://en.chessbase.com/post/my-most-memorable-game-adams' },
    { title: 'Mark Weeks: PCA 1994–96 cycle index', url: 'https://mark-weeks.com/chess/9496pcix.htm' },
    { title: 'Wikipedia: Sicilian Defence, Alapin Variation', url: 'https://en.wikipedia.org/wiki/Sicilian_Defence,_Alapin_Variation' },
    { title: 'The Spectator, 18 June 1994 (chess column)', url: 'https://archive.spectator.co.uk/article/18th-june-1994/52/di_o-caimiel' },
    { title: 'The Spectator, 25 June 1994 (chess column)', url: 'https://archive.spectator.co.uk/article/25th-june-1994/44/chess' },
  ],
  exercises: [
    { id: 'ati-1', kind: 'tekrar', plan: false, title: 'Hangi taşla almalı?',
      source: 'Adams – Tiviakov, New York 1994 (37. hamle)',
      fen: 'b4rk1/p2q4/1p1N2n1/1P1pbpp1/3P4/P2Q2N1/5PP1/4R1K1 w - - 0 37',
      prompt: 'Siyah 36...Bxe5 ile filini e5’teki fille değişti. Beyaz e5’i kaleyle ya da piyonla alabilir. Hangisi doğru?',
      hint: 'd6’daki atı şu anda kim koruyor? d7 vezirini unutmayın.',
      line: ['dxe5'],
      explanation: '**37.dxe5!** e5 piyonu d6 atını korur ve geçer bir e-piyonu olur. 37.Rxe5? sonrası 37...Qxd6 ile at düşer; d4 piyonu d3 vezirinin d6’yı korumasını engeller. Motor: dxe5 +2.4, 37.Rxe5 −1.5.',
      link: '35.Be5 hamlesinin amacı buydu: fil değişimi d-piyonunu e5’e getirdi.' },
    { id: 'ati-2', kind: 'tekrar', plan: false, title: 'e-piyonunun koşusu',
      source: 'Adams – Tiviakov, New York 1994 (39. hamle)',
      fen: 'b4rk1/p2q4/1p6/1P1pPnp1/8/P2Q2N1/5PP1/4R1K1 w - - 0 39',
      prompt: 'Beyaz f5’te bir at verdi ve Siyah atla geri aldı. f5 atı g3 atı ve d3 veziriyle saldırı altında; d7 veziri onu koruyor. Beyazın devamı nedir?',
      hint: 'Savunan vezire tempo kazanarak saldıran bir piyon var.',
      line: ['e6', 'Qh7', 'Nxf5'],
      accept: { 2: ['Qxf5'] },
      explanation: '**39.e6! Qh7 40.Nxf5** Piyon vezire saldırır; vezir f5’i korumaya devam etmek zorundadır. 40...Qxf5 41.Qxf5 Rxf5 42.e7 ile piyon vezir olur. Motor: e6 +5.8, sonraki en iyi 39.Nh5 −0.5. 40.Qxf5 de aynı kuvvette (+5.9).',
      link: 'Be5-dxe5 ile yaratılan geçer piyon, d6 atının desteğiyle tempo kazanarak ilerledi.' },
    { id: 'ati-3', kind: 'transfer', plan: false, title: 'At d6’ya',
      source: 'Deep Blue – Kasparov, Philadelphia 1996, 1. oyun (33. hamle)',
      fen: '4r2k/1NR2p1p/5q2/3Q4/3p4/PP1n1pPP/5P2/6K1 w - - 3 33',
      prompt: 'Aynı Alapin açılışından bir oyun. Beyazın kalesi c7’de, veziri d5’te. Siyah e8 kalesi, d3 atı ve f3 piyonuyla Beyaz şahına karşı saldırı arıyor. b7’deki atınızla ne yaparsınız?',
      hint: 'At hem e8 kalesine hem f7 piyonuna saldırabileceği bir kareye gitsin.',
      line: ['Nd6', 'Re1+', 'Kh2'],
      explanation: '**33.Nd6!** At e8 kalesine ve f7’ye saldırır; c7 kalesi ve d5 veziriyle birlikte f7 çöker. Oyunda 33...Re1+ 34.Kh2 Nxf2 35.Nxf7+ Kg7 36.Ng5+ Kh6 37.Rxh7+ sonrası Kasparov terk etti. Motor: Nd6 +4.0, sonraki en iyi 33.Kh2 0.0.',
      link: 'Adams’ın 27.Nd6 hamlesi gibi, d6’daki at e8 ve f7 karelerine baskı yaparak Siyahın savunmasını çözdü.' },
    { id: 'ati-4', kind: 'transfer', plan: false, title: 'Kara kareli savunucuyu değişmek',
      source: 'Polgar – Tiviakov, Madrid 1994 (33. hamle)',
      fen: '2r3k1/1bq2p1p/6pb/pp1p4/2nP2N1/P4P2/BP2rBP1/3QR1K1 w - - 0 33',
      prompt: 'Yine Alapin ve yine iki tarafın da tek kalmış d-piyonu var. Siyah 32...Rxe2 ile e2’de aldı. Kaleyi hemen geri almak doğal görünüyor; ama h6’daki Siyah fili hem c1-h6 çaprazını hem şahın kara karelerini tutuyor. Daha iyisi var mı?',
      hint: 'g4’teki at, kaleyi geri almadan önce şah çekerek değerli bir taşı alabilir.',
      line: ['Nxh6+', 'Kg7', 'Rxe2'],
      explanation: '**33.Nxh6+! Kg7 34.Rxe2** At şah çekerek h6 filini alır, sonra kale e2’de geri alınır. 34...Kxh6 sonrası malzeme eşittir, ama kara kareli savunucu gitmiştir: 35.Qe1 ve Re7 ile Beyazın ağır taşları e-hattından içeri girer, Siyah şahı açıkta kalır. Motor: Nxh6+ +3.4, sonraki en iyi 33.Qxe2 −1.0.',
      link: 'Adams 35.Be5 ile Siyahın g7’deki kara kareli filini değişti; Polgar da aynı yapıda h6’daki kara kareli fili atıyla, şah çekerek değişti. İki oyunda da şahın kara kareleri savunmasız kaldı.' },
  ],
};
