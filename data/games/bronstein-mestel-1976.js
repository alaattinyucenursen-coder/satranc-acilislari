// Bronstein – Mestel, İngiltere–SSCB maçı, Londra 1976. Kaynak: PgnMentor (Bronstein.pgn).
export default {
  id: 'bronstein-mestel-1976',
  theme: 'Kapalı vezir kanadı, f-hattından saldırı',
  white: 'David Bronstein', black: 'Jonathan Mestel',
  whiteShort: 'Bronstein', blackShort: 'Mestel',
  event: 'İngiltere–SSCB maçı', site: 'Londra', year: 1976, eco: 'C02',
  variation: 'Sicilya Alapin, 2...e6 3.d4 d5 4.e5 (Fransız İlerleme yapısı)', result: '1-0',
  pgn: `1. e4 c5 2. c3 e6 3. d4 d5 4. e5 Nc6 5. Nf3 Qb6 6. a3 c4 7. Nbd2 Na5 8. h4 Bd7 9. h5 h6 10. g3 Ne7 11. Bh3 Nb3 12. Nxb3 Ba4 13. Nfd2 Nc6 14. O-O Na5 15. f4 Nxb3 16. Nxb3 Bxb3 17. Qe2 O-O-O 18. f5 Re8 19. Be3 Ba4 20. fxe6 fxe6 21. Rf7 Re7 22. Rf2 Re8 23. Raf1 Be7 24. Qg4 Bd8 25. Qg6 Re7 26. Rf7 Be8 27. Rxe7 1-0`,

  summary: 'Sonuç 1-0: kazanan **Bronstein**. 2.c3 Alapin’e 2...e6 ile cevap veren Mestel, oyunu Fransız Savunmasının İlerleme Varyantına (5...Qb6 6.a3 c4 ana hattı) taşıdı. 6...c4 ile vezir kanadı kilitlenince Bronstein bütün oyunu şah kanadına çekti: **h4-h5** ile g6 karesini ele geçirdi, **g3 ve Bh3** ile filini Siyahın en zayıf noktası olan e6’ya dikti, sonra **f4-f5** kırılmasıyla f-hattını açtı. Siyah ise dört hamlesini (...Na5-b3, ...Ba4, ...Nc6-a5) b3 karesindeki atı değişmeye harcadı; motor bu süreçte birkaç kez 14...cxb3 / 15...cxb3 ile b-hattını açmayı öneriyor. 17...O-O-O ile şah, h3 filinin çaprazına (c8) gidince e6 piyonu fiilen bağlandı. 20.fxe6 fxe6 sonrası Beyaz kaleleri f-hattında ikiledi, veziri g6’ya soktu ve 26.Rf7! ile Siyahın tek savunucu kalesini değişmeye zorladı. 26...Be8?? hatası 27.Rxe7! ile cezalandırıldı: 27...Bxg6 28.Rxe6 ile vezir de düşüyor (Motor: +5.8). Mestel terk etti.',
  intro: 'Bu oyun, Britbase arşivine göre 24 Ocak 1976’da Londra’da Batsford ofisinde oynanan “Genç İngiltere – SSCB” hızlı satranç (rapidplay) karşılaşmasından. Sovyet tarafında Korçnoy, Bronstein ve Taimanov; İngiliz tarafında Stean, Mestel ve Goodman vardı ve herkes rakip takımın her oyuncusuyla beyaz ve siyahla birer kez oynadı. 365chess’teki tabloya göre Korçnoy 5, Taimanov 4, Bronstein 3,5 puan aldı; genç Mestel 0,5 puanda kaldı ve o yarım puan da Bronstein’e karşı siyahla değil, beyazla oynadığı berabere oyundan geldi. Oyun hızlı olduğu için hamlelerin hepsinden kusursuzluk beklemek doğru değil; ama Bronstein’in planı ders kitabı gibi. 2.c3’ten sonra 2...e6 3.d4 d5 4.e5 ile Fransız İlerleme yapısı çıkar. Siyahın kozu d4 baskısı (...c5, ...Nc6, ...Qb6), Beyazınki ise e5 piyonunun şah kanadında verdiği alandır. 6...c4 ile Siyah gerginliği kendi isteğiyle kaldırır: b3 karesini alır ama d4’e baskıdan vazgeçer. Kapanan bir merkezde kaybeden taraf genellikle kendi kanadında daha yavaş olan taraftır; bu oyunda Bronstein’in f4-f5 kırılması, Siyahın b3 karesindeki uğraşlarından çok daha hızlı ve tehlikeli çıktı.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Merkezi kapalı tutmak:** d4-e5 zincirini korumak (5.Nf3, 7.Nbd2) ve 6.a3 ile ...Bb4 / ...Nb4 sıçramalarını önleyip b4’ü hazırlamak. 6...c4 sonrası vezir kanadında yapacak bir şey kalmayınca bütün gücü şah kanadına çevirmek.',
      '**h4-h5 ile alan almak:** h5 piyonu ...g6’yı zorlaştırır (9...g5 olursa 10.hxg6 geçerken alır, Motor: +1.1), g6 karesini Beyazın taşlarına bırakır ve sonradan 25.Qg6 manevrasını mümkün kılar.',
      '**Fili h3’e koymak (10.g3, 11.Bh3):** Kotronias’ın 6.a3 c4 yapıları için yazdığı gibi Siyahın asıl zayıflığı e6 piyonudur. h3-c8 çaprazındaki fil e6’ya ve uzun rok sonrası c8’deki şaha aynı anda bakar.',
      '**Siyahın b3 baskısını taşlarla karşılamak:** 12.Nxb3 ve 13.Nfd2 / 16.Nxb3 ile b3’e gelen taşları değişmek; Siyah her değişimde zaman kaybederken Beyaz rok yapıp f-piyonunu yürütür.',
      '**f4-f5 kırılması:** 15.f4 ve 18.f5 ile e6’ya saldırmak; fxe6 fxe6 sonrası f-hattını açmak. Bu kırılma Fransız İlerleme yapısında Beyazın klasik silahıdır.',
      '**f-hattını ve yedinci yatayı ele geçirmek:** 21.Rf7, 23.Raf1 ile kaleleri ikilemek, 24.Qg4-25.Qg6 ile veziri g7 ve e6’ya karşı getirmek; sonunda 26.Rf7! ile savunucu kaleyi değişmeye zorlamak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**d4’e baskı:** ...c5, ...Nc6, ...Qb6 ile d4’ü sıkıştırmak; Beyaz a3 oynayınca 6...c4 ile oyunu kapatıp b3 karesini kendine almak (Wikipedia’nın da yazdığı gibi bu hamle b4 olursa geçerken almaya dayanır).',
      '**b3 karesini kullanmak:** ...Na5-b3 ile atı ileri karakola sokmak, Beyazın d2 atını ya da c1 filini değişmek; ...Ba4 ile b3’teki taşı vezire karşı bağlamak.',
      '**Şahı vezir kanadına götürmek:** kapalı merkezde ...O-O-O mantıklı görünür, ama Bh3 oynandıktan sonra c8 tam olarak h3 filinin çaprazındadır. Motor 17...g6’yı (+1.7) uzun roka (+2.3) tercih ediyor.',
      '**...f6 ile merkezi sorgulamak:** Fransız yapısında Siyahın ana kırılması ...f6’dır (motor 7...f6’yı en iyi hamle sayıyor). Mestel bunu hiç oynamadı; böylece e5 piyonu oyunun sonuna kadar f6 ve d6 karelerini elinde tuttu.',
      '**b-hattını açmak:** 14...cxb3 veya 15...cxb3 ile b-hattını açıp a7-b6 bölgesinde karşı oyun aramak; motor bu yolu atların değişiminden daha iyi buluyor (15...cxb3 +1.1, 15...Nxb3 +1.9).',
      '**f-hattına karşı koymak:** ...Re8-e7 ve ...Be7-d8 ile yedinci yatayı ve g7’yi tutmak. Ama a4 fili savunmaya katılamadığı için Siyah bu savaşta hep bir taş eksik oynadı.',
    ] },
  },
  critical: [
    { move: '6b', title: '6...c4: merkezi kapatma kararı', text: 'Bu hamle 5...Qb6 6.a3 sisteminin ana hattıdır; Werle’nin Fransız İlerleme kursu da bölümünü “5...Qb6 6.a3 c4 – ana hat” diye adlandırır. Siyah b4’ü önler ve b3 karesini alır, ama d4’e baskıyı bırakır. ChessBase’in Moskalenko DVD’si tanıtımında hattın kapalı karakteri yüzünden popülerliğini yitirdiği belirtilir. Kapalı merkezde artık iki kanat yarışı başlar: Siyah b3’te, Beyaz şah kanadında. Motor: +0.3, yani teorik olarak sağlam.' },
    { move: '11w', title: '11.Bh3: e6’ya bakan fil', text: 'Motor bu hamleyi pek sevmiyor (−0.05; 11.Rb1 +0.2), çünkü henüz bir şey kazanmaz ve Siyaha 11...O-O-O ile rahat bir oyun verir. Ama plan olarak çok anlamlı: Kotronias’ın 6.a3 c4 yapıları için belirttiği gibi Siyahın ana zayıflığı e6’dır ve g3+Bh3 tam o noktayı hedefler. Bu fil, oyunun sonuna kadar e6’yı c8’deki şaha karşı bağlı tutacak.' },
    { move: '11b', title: '11...Nb3?! zaman kaybının başlangıcı', text: 'Siyah atı ileri karakola sokar, ama 12.Nxb3 sonrası at hemen değişir ve oyun Beyaz lehine döner (Motor: +0.8). 11...O-O-O (−0.03) veya 11...Nec6 doğaldı. Bu andan itibaren Siyah b3 karesinde ...Ba4, ...Nc6, ...Na5, ...Nxb3, ...Bxb3 ile tam beş hamle harcayacak; Beyaz ise bu sürede rok yapıp f4-f5’e hazırlanacak.' },
    { move: '15b', title: '15...Nxb3?: b-hattı yerine taş değişimi', text: 'Beyaz 15.f4 ile kırılmayı ilan etti. Siyahın en iyi cevabı 15...cxb3! idi (Motor: +1.1): b-hattı açılır, b3 piyonu c2 ve a2 karelerine baskı yapar. Maçta 15...Nxb3 16.Nxb3 Bxb3 ile at değişti ama Siyahın fili b3’te şah kanadındaki savaştan kopuk kaldı (Motor: +1.9). Burada 16.f5! daha da güçlüydü (+1.9).' },
    { move: '17b', title: '17...O-O-O?! şah fil çaprazında', text: 'Siyah şahını c8’e götürür; ama bu kare h3 filinin çaprazındadır. Artık e6 piyonu ilerlerse ya da alınırsa Bxe6+ şahla gelir. Motor 17...g6’yı öneriyor (+1.7): 18.hxg6 fxg6 19.f5 gxf5 20.Qh5+ Kd8 sonrası Siyahın şahı rahat değil ama f-hattı ve e6 sorunu hafifler. Maçta 17...O-O-O sonrası +2.3. Bu oyunun psikolojik dönüm noktası: şah artık Beyazın saldırısının tam hedefinde.' },
    { move: '18w', title: '18.f5! kırılma', text: 'Fransız yapısındaki klasik kırılma. Tehdit fxe6’dır; 18...exf5 sonrası 19.Bxf5+ şah çeker ve fil merkeze gelir (Motor: +4.0 civarı, 19.Rxf5 ile). Siyah 18...Re8 ile e6’yı korumak zorunda kaldı. Motor: f5 +2.3, ikinci en iyi 18.Rf2 +2.0.' },
    { move: '20b', title: '20...fxe6 zorunlu', text: 'Siyah e6’ya üç şekilde dönebilirdi ve ikisi felaket: 20...Rxe6? 21.Rxf7 Kb8 22.Bxe6 Qxe6 ile Beyaz kalite kazanır (+5.0); 20...f5? 21.exf6 gxf6 22.Rxf6 ile Siyahın şah kanadı çöker (+5.2). 20...fxe6 (+2.6) tek hamledir, ama f-hattını Beyaza bırakır ve e6’yı kalıcı, bağlı bir zayıflığa çevirir.' },
    { move: '26w', title: '26.Rf7! ve 26...Be8?? 27.Rxe7', text: 'Kale yeniden f7’ye girer ve e7 kalesine saldırır; motor bu hamleyi açık ara en iyi buluyor (+3.5, sonraki 26.Bg4 +1.8). Siyah 26...Rhe8 (+3.6) veya 26...Rxf7 27.Rxf7 Re8 ile oynamalıydı. Maçta 26...Be8?? vezire saldırdı ama 27.Rxe7! sonrası 27...Bxg6 28.Rxe6 hem vezire hem file saldırır: 28...Kb8 29.Rxb6 axb6 ile Beyaz bir kale ve bir piyon fazlası kalır. 27...Bxe7 28.Qxg7 de kale düşürür (+6.0). Mestel terk etti.' },
  ],
  lessons: [
    'Alapin’de 2...e6 3.d4 d5 4.e5 ile Fransız İlerleme yapısı çıkar. Bu dönüşü bilmek önemlidir: Alapin oynayan Beyazın Fransız İlerleme planlarını, 2...e6 oynayan Siyahın da Fransız savunma fikirlerini bilmesi gerekir.',
    '...c4 merkezi kapatır ve oyunu iki kanat yarışına çevirir. Böyle bir yarışta **zaman** her şeydir: Siyah b3 karesi için beş hamle harcarken Beyaz rok, f4 ve f5’i oynadı. Karakol karesi için uğraşırken rakibin kırılmasının hızını unutmamak gerekir.',
    'Kapalı Fransız yapısında Beyazın ana kırılması **f4-f5**’tir; hedef e6 piyonudur. fxe6 fxe6 sonrası açılan f-hattı, kaleleri önce davranan tarafa kalır.',
    '**Bağ, zayıflığı ikiye katlar.** h3 fili, e6 piyonunu c8’deki şaha karşı bağladı. Bu yüzden Siyah ne ...e5 ile kurtulabildi ne de ...exf5 ile değişebildi. Şahını bir filin çaprazına götürmeden önce o çaprazın açılıp açılamayacağını düşünün.',
    '**Kötü fil, eksik savunucu demektir.** Siyahın beyaz kare fili b3 ve a4 arasında gidip geldi ve şah kanadındaki savaşa hiç katılamadı. Beyaz f-hattında fiilen bir taş fazlasıyla oynadı.',
    'Yedinci yataya giren kale savunucu kaleyi değişmeye zorlar (26.Rf7!). Savunan taraf o anda “aktif” görünen bir hamle (26...Be8, vezire saldırı) yerine tehdidi karşılayan hamleyi (26...Rhe8 / 26...Rxf7) seçmelidir.',
    'Bir taşa saldırmadan önce rakibin ara hamlesini kontrol edin: 27.Rxe7! veziri feda eder gibi görünür ama 27...Bxg6 28.Rxe6 ile vezir ve fil aynı anda saldırı altına girer.',
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkeze piyon koyar, d5 ve f5 karelerini kontrol eder, fil ve vezire yol açar.',
      amac: 'Merkezi ele geçirip hızlı gelişmek; Bronstein bu oyunda daha sonra e-piyonunu e5’e kadar ilerletip şah kanadında alan kazanacak.',
      neden: 'Bronstein hem 1.e4 hem 1.d4 oynayan çok yönlü bir oyuncuydu. 1.e4 rakibe Sicilya, Fransız gibi keskin seçenekler bırakır; bu oyunda iki savunma birbirine karışacak.',
      diger: [
        { move: '1.d4', text: 'Kapalı oyunlara götürür; Vezir Gambiti ya da Hint savunmaları çıkar. Motor: +0.2.' },
        { move: '1.Nf3', text: 'Esnek başlangıç; hamle sırasıyla oynamak isteyenlerin tercihi. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine yandan bakar ve merkezde asimetrik bir oyun ister.',
      amac: 'Beyazın d4 ile ideal merkez kurmasını zorlaştırmak; d4 açılırsa c-hattını kullanmak.',
      neden: 'Genç ve iddialı bir oyuncu olan Mestel, kazanma şansı yüksek bir savunma seçer. Bu turnuvada Korçnoy ve Taimanov’a karşı da Sicilya oynadı (365chess tablosu: Mestel – Korçnoy B56, Mestel – Taimanov B30).',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; daha simetrik ve sakin. Motor: +0.2.' },
        { move: '1...e6', text: 'Doğrudan Fransız Savunması. Oyun daha sonra zaten Fransız yapısına dönecek. Motor: +0.35.' },
      ],
    },
    '2w': {
      text: '2.c3: Alapin varyantı. Beyaz d4 oynayıp ...cxd4 olursa c3 piyonuyla geri almak, yani merkezde iki piyon tutmak ister.',
      amac: 'Açık Sicilya’nın uzun teorisinden kaçıp sağlam bir piyon merkezi (c3-d4-e4) kurmak.',
      neden: '2.Nf3 ve 3.d4 ile açık Sicilya’da Siyah merkez piyonu için kanat piyonu verip dinamik oyun alır. 2.c3 bu takası reddeder. Dezavantajı: c3 piyonu b1 atının doğal karesini alır, bu yüzden at oyunda d2’ye gelişecek.',
      diger: [
        { move: '2.Nf3', text: 'Ana yol; 2...d6 3.d4 cxd4 4.Nxd4 ile açık Sicilya. Motor: +0.45.' },
        { move: '2.Nc3', text: 'Kapalı Sicilya veya Grand Prix saldırısına geçiş. Motor: +0.35.' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah ...d5’i hazırlar; d5 piyonunu e6 piyonuyla destekleyecek.',
      amac: '...d5 ile merkezde Beyazın e4 piyonuna doğrudan karşı çıkmak; e5 olursa Fransız yapısına razı olmak.',
      neden: 'Alapin’e karşı iki ana cevap 2...d5 ve 2...Nf6’dır. 2...e6 daha az keskin ama sağlam bir yoldur: 3.d4 d5 4.e5 olursa oyun Fransız İlerleme Varyantına geçer. Wikipedia da bu dönüşün (1.e4 e6 2.d4 c5 3.c3 d5 4.e5) iki yönde de mümkün olduğunu belirtir.',
      diger: [
        { move: '2...d5', text: '3.exd5 Qxd5 4.d4 ile vezir erken merkeze çıkar; Alapin’in en popüler hatlarından. Motor: +0.3.' },
        { move: '2...Nf6', text: '3.e5 Nd5 ile Alekhin Savunmasına benzeyen yapı. Motor: +0.3 civarı.' },
        { move: '2...Nc6', text: '3.d4 d5 ile esnek bir yol. Motor: +0.35.' },
      ],
    },
    '3w': {
      text: '3.d4 ile Beyaz planladığı merkezi kurar.',
      amac: 'c3’ün asıl amacı bu: ...cxd4 olursa cxd4 ile iki merkez piyonu tutmak.',
      neden: 'Bu hamle olmadan 2.c3 anlamsız kalır. 3.Nf3 de oynanabilir ama 3...d5 4.exd5 exd5 ile Siyah rahat gelişir.',
      diger: [
        { move: '3.Nf3', text: '3...d5 4.exd5 exd5 5.Bb5+ gibi daha sakin bir oyun. Motor: +0.15.' },
        { move: '3.d3', text: 'Kapalı, Kral Hint Atağı tarzı bir yapı; iddiasız. Motor: 0.0.' },
      ],
    },
    '3b': {
      text: '3...d5 ile e4 piyonuna saldırılır. Konum Fransız Savunmasının 3.e5 c5 4.c3 hattıyla aynı yapıya gelir.',
      amac: 'Beyazı karar vermeye zorlamak: e4 ya değişecek (exd5) ya ilerleyecek (e5) ya da korunacak.',
      neden: '3...cxd4 4.cxd4 d5 de mümkündü ama Siyah c-piyonunu c5’te tutup d4’e baskıyı sürdürmeyi tercih eder.',
      diger: [
        { move: '3...cxd4', text: '4.cxd4 d5 5.e5 ile yine Fransız yapısı, ama Beyazın c3 piyonu yok ve b1 atı c3’e gelebilir. Motor: +0.2.' },
        { move: '3...Nf6', text: '4.e5 Nd5 ile Alapin’in 2...Nf6 hatlarına benzer bir yapı.' },
      ],
    },
    '4w': {
      text: '4.e5: İlerleme. Beyazın piyonu e5’te sabitlenir; f6 ve d6 karelerini kontrol eder.',
      amac: 'Şah kanadında alan kazanmak ve Siyahın atını f6’dan uzak tutmak. Bu e5 piyonu oyunun sonuna kadar Beyazın şah kanadı saldırısının temeli olacak.',
      neden: '4.exd5 exd5 simetrik ve sakin bir yapı verir; Siyahın c8 fili özgürleşir. 4.e5 ise Siyahın c8 filini e6 piyonunun arkasında hapseder (Fransız’ın klasik “kötü fili”).',
      diger: [
        { move: '4.exd5', text: '4...exd5 ile Siyah rahat gelişir; 5.Nf3 Nf6 6.Bb5+ gibi. Motor: +0.1.' },
        { move: '4.Nd2', text: 'Tarrasch benzeri bir kurulum; 4...cxd4 5.cxd4 ile. Motor: 0.0.' },
      ],
    },
    '4b': {
      text: '4...Nc6 ile at d4 piyonuna baskı yapar.',
      amac: 'Fransız İlerleme planı: c5, Nc6, Qb6 ile d4’ü üç taşla sıkıştırmak.',
      neden: 'Beyazın piyon zinciri d4-e5’in temeli d4’tür; zincirin tabanına saldırmak Fransız’ın temel fikridir. 4...Qb6 da aynı yere çıkar.',
      diger: [
        { move: '4...Qb6', text: 'Vezir önce gelir; 5.Nf3 Nc6 ile aynı konuma döner. Motor: +0.4.' },
        { move: '4...Ne7', text: 'At f5’e gidip d4’e oradan baskı yapar. Motor: +0.4.' },
      ],
    },
    '5w': {
      text: '5.Nf3 ile at d4’ü korur ve gelişir.',
      amac: 'd4’ün savunmasını sağlamlaştırmak ve rok hazırlamak.',
      neden: 'd4 iki kez saldırı altında olacak; at f3’ten hem d4’ü hem e5’i destekler. Diğer hamleler (Be2, h3) d4’ü yeterince korumaz.',
      diger: [
        { move: '5.Be2', text: 'Atı geciktirir; 5...Nge7 ile Siyah rahattır. Motor: 0.0.' },
        { move: '5.Bd3', text: 'Fil aktif ama 5...cxd4 6.cxd4 Qb6 ile d4 sıkışır.' },
      ],
    },
    '5b': {
      text: '5...Qb6: vezir b6’dan d4’e ve b2’ye bakar.',
      amac: 'd4’e üçüncü taşla baskı yapmak; ayrıca b2 piyonu korumasız kaldığı için Beyazın c1 filinin gelişimini zorlaştırmak.',
      neden: 'Wikipedia’ya göre 5...Qb6 Fransız İlerlemede en sık oynanan beşinci hamledir. 5...Bd7 (Euwe) ve 5...Nge7 eşit değerde alternatiflerdir; motor üçünü de +0.3 civarında görüyor.',
      diger: [
        { move: '5...Bd7', text: 'Euwe sistemi; Siyah önce fili gelişir, vezir sonra karar verir. Motor: +0.3.' },
        { move: '5...Nge7', text: 'At f5 üzerinden d4’e baskı yapar. Motor: +0.3.' },
      ],
    },
    '6w': {
      text: '6.a3 ile Beyaz b4’ü hazırlar; ayrıca ...Bb4+ ve ...Nb4 sıçramalarını önler.',
      amac: 'b4 ile vezir kanadında alan kazanmak ve c5 piyonunu sorgulamak; b4 sonrası Bb2 ile d4’ü korumak.',
      neden: 'Chess.com’daki 6.a3 makalesinin özetlediği gibi Beyaz 7.b4 ile b2’ye olan baskıyı ortadan kaldırmak ister. Bu klasik ana hattır (Werle’nin kursu da 6.a3’ü önerir). 6.Bd3 ise piyon kurban eden daha keskin bir yoldur.',
      diger: [
        { move: '6.Bd3', text: '6...cxd4 7.cxd4 Bd7 8.O-O ile d4 piyonu kurban edilebilir. Motor: +0.3.' },
        { move: '6.Be2', text: 'Sakin; 6...cxd4 7.cxd4 Nh6 ile Siyah d4’e baskıyı sürdürür. Motor: +0.1.' },
      ],
    },
    '6b': {
      text: '6...c4: Siyah merkezdeki gerginliği kaldırır ve vezir kanadını kilitler.',
      amac: 'b4’ü önlemek (b4 olursa ...cxb3 geçerken alır) ve b3 karesini kalıcı olarak ele geçirmek. Siyahın atları a5-b3 yolunu kullanacak.',
      neden: 'Bu, 5...Qb6 6.a3 sisteminin ana hattıdır. Bedeli: d4’e baskı biter ve merkez tamamen kapanır, bu da Beyazın şah kanadı planlarını kolaylaştırır. ChessBase’in Moskalenko DVD’si tanıtımında hattın kapalı karakteri yüzünden popülerliğini yitirdiği, ama Moskalenko’nun 6...c4’ü alternatifleri kadar iyi bulduğu yazılır.',
      diger: [
        { move: '6...Nh6', text: 'At f5’e gelip d4’e baskı yapar; 7.b4 cxd4 8.cxd4 ile keskin oyun. Motor: +0.4.' },
        { move: '6...a5', text: 'b4’ü piyonla engeller ve merkezi açık tutar. Motor: +0.45.' },
        { move: '6...Bd7', text: 'Gelişmeye devam eder; 7.b4 cxd4 8.cxd4 Rc8.' },
      ],
    },
    '7w': {
      text: '7.Nbd2 ile b1 atı gelişir; c3 piyonu yüzünden onun için başka iyi kare yoktur.',
      amac: 'b3 karesini korumak (Nd2 b3’e bakar) ve gerekirse f1 üzerinden şah kanadına geçmek.',
      neden: 'Kotronias da benzer yapıda Nbd2 için “başka kare olmadığı için tamamen mantıklı” der. 7.Be2 de aynı değerde; 7.a4 ...Na5’e karşı b3’ü korumaz.',
      diger: [
        { move: '7.Be2', text: 'Önce fil gelişir; 7...f6 8.Nbd2 ile aynı yapı. Motor: +0.5.' },
        { move: '7.g3', text: 'Fili doğrudan h3’e çıkarma planı (Kotronias’ın 7.g3 hattı). Bronstein aynı fikri birkaç hamle sonra uygulayacak.' },
      ],
    },
    '7b': {
      text: '7...Na5 ile at b3 karesine yönelir.',
      amac: 'Atı b3’e sokup Beyazın d2 atını veya c1 filini değişmek; vezir kanadını tamamen kilitlemek.',
      neden: 'Bu, ...c4 yapısının doğal devamıdır. Ama at d4’ten uzaklaşır ve merkezde baskı tamamen biter. Motor Fransız yapısının klasik kırılması 7...f6’yı biraz daha iyi buluyor: e5 zincirine hemen saldırmak.',
      diger: [
        { move: '7...f6', text: 'Fransız’ın ana kırılması: 8.Be2 fxe5 9.Nxe5 Nxe5 10.dxe5 ile açık oyun. Motor: +0.4.' },
        { move: '7...Bd7', text: 'Gelişme; 8.b3 ile Beyaz vezir kanadını sorgular. Motor: +0.6.' },
      ],
    },
    '8w': {
      text: '8.h4: vezir kanadı kapandığı için Beyaz şah kanadında alan alır.',
      amac: 'h5 ile g6’yı sabitlemek, Siyahın g8 atının f5 veya h6 karelerini kullanmasını zorlaştırmak ve şah kanadında piyon çoğunluğunu harekete geçirmek.',
      neden: 'Kapalı merkezde karşı kanatlarda oynanır: Siyah vezir kanadında, Beyaz şah kanadında. h4 ayrıca Siyahın şahını kısa roktan caydırır. Motor 8.Be2 ve 8.Rb1’i eşdeğer görüyor (+0.35).',
      diger: [
        { move: '8.Be2', text: 'Önce gelişme; 8...Bd7 9.h4 ile benzer yapı. Motor: +0.35.' },
        { move: '8.Rb1', text: 'b2-b4 hazırlığı; ...Nb3’e karşı vezir kanadını güçlendirir. Motor: +0.35.' },
      ],
    },
    '8b': {
      text: '8...Bd7 ile fil gelişir.',
      amac: '...Ba4 veya ...Bb5 ile b3 karesine destek vermek ve uzun roku hazırlamak.',
      neden: 'Fransız’ın “kötü” c8 fili ancak vezir kanadına çıkarak işe yarayabilir. 8...h6 ve 8...Ne7 de oynanabilirdi; motor üçünü eşit görüyor.',
      diger: [
        { move: '8...h6', text: 'h5’ten önce şah kanadını hazırlar; 9.Be2 Bd7. Motor: +0.3.' },
        { move: '8...Ne7', text: 'At gelişir ve f5’e yönelir. Motor: +0.3.' },
      ],
    },
    '9w': {
      text: '9.h5 ile piyon h5’e ilerler ve g6 karesini kontrol eder.',
      amac: '...g6’yı zorlaştırmak; Siyahın şah kanadında piyon hamlesi yapmasını engelleyip g6’yı ileride Beyaz taşlarına (25.Qg6) açmak.',
      neden: 'Motor 9.Rb1’i biraz daha iyi buluyor (+0.15’e karşı +0.35 civarı). h5 piyonu ilerde zayıf olabilir, ama Bronstein uzun vadeli planını seçiyor. 9...g5? olursa 10.hxg6 geçerken alır ve Siyahın şah kanadı dağılır (Motor: +1.1).',
      diger: [
        { move: '9.Rb1', text: 'Vezir kanadını sağlamlaştırır; 9...h6 10.Be2 O-O-O 11.g3 ile benzer yapı. Motor: +0.35.' },
        { move: '9.g3', text: 'Fili önce h3’e çıkarır; 9...Nh6 10.Rb1 O-O-O 11.Bh3. Motor: +0.3.' },
      ],
    },
    '9b': {
      text: '9...h6 ile Siyah Beyazın h5 piyonunu durdurur ve g5 karesini kontrol eder.',
      amac: 'h6’ya ilerlemeyi önlemek ve Beyazın Bg5 / Ng5 gibi hamlelerini engellemek.',
      neden: 'h5 piyonu h6’ya ilerleyip g7’yi zayıflatabilirdi. Ama ...h6’nın bedeli g6 karesinin kalıcı zayıflığıdır. Motor 9...Nh6 (+0.1) ve 9...O-O-O’yu (+0.15) biraz daha iyi buluyor.',
      diger: [
        { move: '9...Nh6', text: 'At f5’e gelir; 10.Rb1 f6 11.b3 cxb3. Motor: +0.1.' },
        { move: '9...O-O-O', text: 'Hemen rok; 10.Rb1 Kb8 11.Be2 Ka8. Motor: +0.15.' },
      ],
    },
    '10w': {
      text: '10.g3 ile Beyaz fili h3’e çıkarmaya hazırlanır.',
      amac: 'Fili h3-c8 çaprazına koyup e6’ya baskı yapmak; ayrıca g3 piyonu f4’ü destekleyecek.',
      neden: 'Kotronias 6.a3 c4 yapılarında “f1 fili h3’e yönelir” der ve e6’yı Siyahın ana zayıflığı sayar. Normal Be2 filin bu çapraza bakmasını sağlamaz. Motor 10.Rb1 ve 10.Be2’yi biraz öne koyuyor, ama fark küçük.',
      diger: [
        { move: '10.Rb1', text: 'Vezir kanadı hazırlığı; 10...O-O-O 11.Be2. Motor: +0.35.' },
        { move: '10.Be2', text: 'Klasik gelişim; 10...Ne7 11.Rb1 O-O-O. Motor: +0.3.' },
      ],
    },
    '10b': {
      text: '10...Ne7 ile at gelişir; f5’e ya da c6’ya gidebilir.',
      amac: 'Şah kanadını geliştirmek ve uzun rok için yer açmak; ...Nf5 ile d4’e baskı yapmak da bir seçenek.',
      neden: 'At h6’ya giderse h5’teki Beyaz piyonu engellemez; e7 en esnek karedir. 10...Qc7 ve 10...O-O-O da aynı değerde (Motor: +0.2).',
      diger: [
        { move: '10...O-O-O', text: 'Hemen rok; 11.Be2 Ne7 12.Rb1 Kb8. Motor: +0.2.' },
        { move: '10...Qc7', text: 'Vezir e5’e bakar; 11.Be2 Ne7 12.Kf1. Motor: +0.2.' },
      ],
    },
    '11w': {
      text: '11.Bh3: fil h3-c8 çaprazına yerleşir ve e6’ya bakar.',
      amac: 'e6 piyonunu hedef almak; Siyah ...Nf5 oynarsa fili onu alabilir. Uzun rok sonrası bu çapraz doğrudan c8’deki şaha bakacak.',
      neden: 'Motor bu hamleyi beğenmiyor (−0.05; en iyisi 11.Rb1 +0.2), çünkü e2 boş kalır ve Siyah 11...O-O-O ile rahat oynar. Ama Kotronias’ın vurguladığı gibi Siyahın ana zayıflığı e6’dır ve g3-Bh3 bu noktayı hedefleyen en doğal kurulum. Bronstein somut bir şeyden çok uzun vadeli planı seçiyor.',
      diger: [
        { move: '11.Rb1', text: '11...O-O-O 12.Qc2 Kb8 13.Be2 ile sağlam ve hafif üstün. Motor: +0.2.' },
        { move: '11.Be2', text: 'Klasik yer; 11...O-O-O 12.Rb1 Kb8. Motor: +0.15.' },
      ],
    },
    '11b': {
      text: '11...Nb3?! ile at b3’e girer ve a1 kalesine, c1 filine bakar.',
      amac: 'd2 atını veya c1 filini değişmek; Beyazın vezir kanadını felç etmek.',
      neden: 'Bu at hemen 12.Nxb3 ile değişir ve Siyahın b3 karesi için yaptığı hazırlık boşa gider (Motor: +0.8). Doğal olan 11...O-O-O idi (−0.03): şah güvenliğe girer, at e7’de f5’i tutar. Bu hamleyle Siyah, b3 karesi için uzun bir zaman kaybına başlıyor.',
      diger: [
        { move: '11...O-O-O', text: '12.Rb1 Kb8 13.Nf1 Ka8 ile eşit, kapalı bir oyun. Motor: −0.03.' },
        { move: '11...Nec6', text: 'At c6’dan d4’e ve e5’e bakar; 12.O-O O-O-O 13.Nh4. Motor: +0.1.' },
        { move: '11...g6', text: 'h5’i sorgular; 12.Kf1 Nf5. Motor: +0.15.' },
      ],
    },
    '12w': {
      text: '12.Nxb3 ile Beyaz b3’teki atı alır.',
      amac: 'Ana karakoldaki atı hemen yok etmek; aksi halde ...Nxc1 ile Siyah iyi filini değişirdi.',
      neden: 'Neredeyse zorunlu: 12.Rb1 Nxc1 13.Qxc1 ile Beyaz iyi filini kaybeder (+0.35), 12.Ra2? ise kaleyi oyun dışına iter (0.0).',
      diger: [
        { move: '12.Rb1', text: '12...Nxc1 13.Qxc1 Nc6 ile Siyah çift fil kazanır. Motor: +0.35.' },
      ],
    },
    '12b': {
      text: '12...Ba4: fil b3 atını d1’deki vezire karşı bağlar.',
      amac: 'b3 atını hemen almak yerine baskıyı sürdürmek; ...Bxb3 veya ...cxb3 ile Beyazı rahatsız etmek.',
      neden: '12...cxb3 piyonla alırdı ama b3 piyonu sonra zayıf olabilir (+1.1). 12...Qxb3 13.Qxb3 cxb3 ise vezirleri değişir ve Siyahın b3 piyonu düşer (+1.0). Motor 12...Ba4’ü en iyi buluyor (+0.9).',
      diger: [
        { move: '12...cxb3', text: '13.O-O O-O-O 14.Be3 Nf5 ile b3 piyonu ileride zayıf. Motor: +1.1.' },
        { move: '12...Qxb3', text: '13.Qxb3 cxb3 14.a4 ile Beyaz b3’ü kazanmaya gider. Motor: +1.0.' },
      ],
    },
    '13w': {
      text: '13.Nfd2 ile f3 atı d2’ye geri döner ve b3’ü korur.',
      amac: 'b3 atını korumak ve f-piyonunun önünü açmak; f4-f5 için yol hazırlanıyor.',
      neden: 'Bu geri çekiliş bilinçli: f3’teki at f-piyonunu engelliyordu. Motor ise 13.Be3 (+1.0) veya 13.O-O (+0.85) ile b3’ü Bxb3’e bırakıp gelişmeyi tercih ediyor; maç hamlesi +0.5.',
      diger: [
        { move: '13.Be3', text: '13...Bxb3 14.Qe2 O-O-O 15.O-O ile Beyaz hızla gelişir. Motor: +1.0.' },
        { move: '13.O-O', text: '13...Qxb3 14.Qe1 Qb6 15.Qe2 ile Beyaz piyonu değil gelişmeyi önemser. Motor: +0.85.' },
      ],
    },
    '13b': {
      text: '13...Nc6 ile e7 atı c6’ya gelir ve yeniden a5’e yönelecek.',
      amac: 'b3 atına bir saldırgan daha getirmek: ...Na5 ile b3’e üçüncü kez saldırmak.',
      neden: 'Siyah b3’ü kazanmaya çalışır, ama bu at birkaç hamle önce e7’ye yeni gelmişti. Motor 13...cxb3’ü öneriyor (+0.5): b3’ü hemen alıp b-hattına bakmak. Maçta +0.85.',
      diger: [
        { move: '13...cxb3', text: '14.Qf3 Nc6 15.O-O Na5 ile b-piyonu ileri karakolda. Motor: +0.5.' },
        { move: '13...a6', text: 'Bekleme hamlesi; 14.Qf3 cxb3 15.Nf1. Motor: +0.7.' },
      ],
    },
    '14w': {
      text: '14.O-O ile Beyaz rok yapar; şah güvenliğe girer ve f1 kalesi f-hattına bağlanır.',
      amac: 'Şahı korumak ve kaleyi f-piyonunun arkasına koymak; f4-f5 açıldığında kale hazır olacak.',
      neden: 'Motor 14.f4’ü daha iyi buluyor (+1.0): rok bekleyebilir, önce f-piyonu yürür. Ama kapalı merkezde şahı güvenliğe almak Bronstein için doğal bir öncelik.',
      diger: [
        { move: '14.f4', text: '14...Ne7 15.Nf1 cxb3 16.Ne3 ile Beyaz hızla şah kanadına geçer. Motor: +1.0.' },
        { move: '14.Qf3', text: 'Vezir f-hattına; 14...cxb3 15.O-O Qc7. Motor: +0.7.' },
      ],
    },
    '14b': {
      text: '14...Na5 ile at b3’e üçüncü kez saldırır.',
      amac: 'b3’teki atı değişmek ya da kazanmak; vezir kanadındaki karesine nihayet sahip olmak.',
      neden: 'Bu hamle Siyahın zaman kaybını sürdürür (+1.1). Motor 14...cxb3’ü öneriyor (+0.5): b-hattı açılır ve Siyah b3 piyonuyla karşı oyun bulur. Beyaz bu sırada f4’ü oynayıp kırılmaya hazırlanacak.',
      diger: [
        { move: '14...cxb3', text: '15.f4 O-O-O 16.Qf3 Ne7 ile denge yakın. Motor: +0.5.' },
        { move: '14...a6', text: 'Bekler; 15.f4 Ne7 16.Nf3 Qxb3. Motor: +1.0.' },
      ],
    },
    '15w': {
      text: '15.f4 ile Beyaz f5 kırılmasını hazırlar.',
      amac: 'f5 ile e6’ya saldırmak ve f-hattını açmak; e5 piyonunu da f4 ile sağlamlaştırmak.',
      neden: 'Wikipedia’nın Fransız İlerlemesi bölümünde yazdığı gibi Beyaz e5’i f4 ile destekleyip f4-f5’i hedefler; f5 piyonu e6’yı almakla veya f6’ya ilerlemekle tehdit eder. Siyah ...c4 oynadığı için g1-a7 çaprazındaki b6 vezirinin d4’e baskısı artık önemsiz; bu yüzden f4 burada güvenli. Motor: +1.1, en iyi hamle.',
      diger: [
        { move: '15.Kh2', text: 'Önce şahı güvenli kareye alır; 15...cxb3 16.f4. Motor: +0.75.' },
        { move: '15.Rb1', text: 'Vezir kanadını korur; 15...cxb3 16.f4. Motor: +0.7.' },
      ],
    },
    '15b': {
      text: '15...Nxb3? ile atlar değişir.',
      amac: 'Beyazın b3 atını ortadan kaldırmak ve ...Bxb3 ile filini b3’e yerleştirmek.',
      neden: 'Bu oyunun ilk büyük kaybı (+1.1 → +1.9). Siyah 15...cxb3! ile piyonla almalıydı: 16.f5 Bd7 17.Nf3 Be7 ile b-hattı açılır ve fil d7’de şah kanadını savunabilir. Maçta fil b3’e gidecek ve oradan şah kanadına katkısı olmayacak.',
      diger: [
        { move: '15...cxb3', text: '16.f5 Bd7 17.Nf3 Be7 ile Siyahın fili savunmada kalır. Motor: +1.1.' },
        { move: '15...O-O-O', text: '16.f5 cxb3 17.fxe6 fxe6 18.Qg4 Bd7 19.Rf7. Motor: +1.5.' },
      ],
    },
    '16w': {
      text: '16.Nxb3 ile Beyaz atla geri alır.',
      amac: 'Taş dengesini korumak; b3’teki at ...Bxb3 ile değişince Beyaz Siyahın aktif filini oyun dışına itmiş olacak.',
      neden: 'Motor ara hamle 16.f5!’i daha iyi buluyor (+1.9): 16...Bd7 17.Nxb3 cxb3 18.f6 ile Beyaz önce saldırıyı başlatır. 16.Nxb3 doğal ama +1.4.',
      diger: [
        { move: '16.f5', text: '16...Bd7 17.Nxb3 cxb3 18.f6 ile Siyahın şah kanadı açılır. Motor: +1.9.' },
        { move: '16.Kh2', text: '16...Nxa1 17.Qxa4+ ile karmaşık. Motor: +1.2.' },
      ],
    },
    '16b': {
      text: '16...Bxb3 ile fil b3 atını alır.',
      amac: 'Taşı geri almak ve fili b3’e yerleştirip c2, d1 karelerine bakmak.',
      neden: 'Fil b3’te aktif görünür ama şah kanadındaki savaşa katılamaz. Motor 16...Qxb3’ü biraz daha iyi buluyor (+1.4): vezir b3’e gelir, fil d7’de savunmada kalır.',
      diger: [
        { move: '16...Qxb3', text: '17.Qf3 Bd7 18.f5 Be7 ile fil d7’de e6’yı destekler. Motor: +1.4.' },
        { move: '16...cxb3', text: '17.f5 Bd7 18.f6 ile Beyaz hızla saldırır. Motor: +1.85.' },
      ],
    },
    '17w': {
      text: '17.Qe2 ile vezir ikinci yatayı korur ve şah kanadına geçmeye hazırlanır.',
      amac: 'c2 karesini (...Bc2 tehdidi) korumak, ikinci yatayı tutmak ve vezirin sonra g4’e geçmesini sağlamak.',
      neden: 'Motor bu hamleyi en iyi buluyor (+1.9). 17.Qf3? 17...Bc2 ile Siyahın fili aktifleşir (+0.8). 17.Qd2 ise vezirin şah kanadına yolunu kapar.',
      diger: [
        { move: '17.Qd2', text: '17...g6 18.g4 O-O-O 19.hxg6 ile benzer ama vezir daha pasif. Motor: +1.4.' },
        { move: '17.Qf3', text: '17...Bc2 18.f5 Be4 ile fil büyük çapraza gelir. Motor: +0.8.' },
      ],
    },
    '17b': {
      text: '17...O-O-O?! ile Siyah uzun rok yapar.',
      amac: 'Şahı merkezden çıkarmak ve kaleleri bağlamak; kapalı vezir kanadında şahın güvende olacağını umuyor.',
      neden: 'Sorun şu: c8 karesi h3 filinin çaprazında. f5 sonrası e6 piyonu alınır ya da ilerlerse fil şaha şah çeker; yani e6 artık bağlıdır. Motor 17...g6’yı öneriyor (+1.7): 18.hxg6 fxg6 19.f5 gxf5 20.Qh5+ Kd8 ile Siyahın şahı rahat değil, ama f-hattı açılmadan e6 sorunu biraz hafifler. Maçta +2.3.',
      diger: [
        { move: '17...g6', text: '18.hxg6 fxg6 19.f5 gxf5 20.Qh5+ Kd8 21.g4 ile karmaşık oyun. Motor: +1.7 / +2.0.' },
        { move: '17...Ba4', text: 'Fili savunmaya hazırlar; 18.f5 Bd7 19.f6 gxf6 20.Rxf6. Motor: +2.2.' },
      ],
    },
    '18w': {
      text: '18.f5! kırılması: piyon e6’ya saldırır.',
      amac: 'fxe6 ile f-hattını açmak; ya da ...exf5 olursa Bxf5+ ile şah çekip fili merkeze getirmek.',
      neden: 'Bu, Fransız yapısında Beyazın ana kırılmasıdır. 18...exf5 19.Rxf5 Qe6 sonrası Siyahın f7 piyonu düşer (Motor: +4.0). Siyah 18...Re8 ile e6’yı korumak zorunda kalır. Motor: f5 +2.3, ikinci en iyi 18.Rf2 +2.0.',
      diger: [
        { move: '18.Rf2', text: 'Önce kaleyi hazırlar; 18...Ba4 19.f5 exf5 20.Bxf5+. Motor: +2.0.' },
        { move: '18.Kh2', text: 'Şahı güvene alır; 18...Be7 19.f5. Motor: +1.75.' },
      ],
    },
    '18b': {
      text: '18...Re8 ile kale e8’den e6 piyonunu destekler.',
      amac: 'e6’yı korumak: f5xe6 fxe6 sonrası Bxe6+ şah olmasın diye kale e-hattını tutar.',
      neden: '18...exf5? 19.Rxf5 ile Beyaz kaleyi aktif kareye getirir ve f7’ye saldırır (Motor: +4.0). 18...Ba4 de eşit (+2.5): fil savunmaya döner. 18...Kb8 şahı çaprazdan çıkarır ama Beyaz 19.fxe6 fxe6 20.Qg4 ile e6’ya baskıyı artırır (+2.6).',
      diger: [
        { move: '18...Ba4', text: '19.fxe6 fxe6 20.Rf2 Re8 ile maçtaki konuma döner. Motor: +2.5.' },
        { move: '18...exf5', text: '19.Rxf5 Qe6 20.Qf1 ile f7 düşer. Motor: +4.0.' },
        { move: '18...Kb8', text: '19.fxe6 fxe6 20.Qg4 Re8 ile şah çaprazdan çıkar ama e6 hâlâ zayıf. Motor: +2.6.' },
      ],
    },
    '19w': {
      text: '19.Be3 ile fil gelişir; a1 kalesi f-hattına gelebilecek.',
      amac: 'Son gelişmemiş taşı oyuna sokmak ve iki kalenin bağlantısını kurmak; Raf1 hazırlanıyor.',
      neden: 'Beyazın acelesi yok: Siyahın f-hattına karşı koyacak taşı yok. 19.fxe6 ve 19.Rf2 de aynı değerde (Motor: +2.6). Önce gelişmek, Siyahın ...exf5 ile değişme seçeneğini de açık bırakır; o durumda Bxf5+ gelir.',
      diger: [
        { move: '19.fxe6', text: '19...fxe6 20.Be3 Ba4 21.Rf7 ile aynı konuma dönülür. Motor: +2.6.' },
        { move: '19.Rf2', text: 'Kale önce ikilenmeye hazırlanır; 19...Ba4 20.fxe6 fxe6 21.Qg4. Motor: +2.45.' },
      ],
    },
    '19b': {
      text: '19...Ba4 ile fil a4’e döner ve c2, d1 karelerine bakar.',
      amac: 'Fili b3’ten kurtarmak ve Beyazın ikinci yatayına (c2) baskı yapmak; ...Qb3-c2 fikirleri.',
      neden: 'Fil b3’te vezir tarafından saldırıya uğrayabilirdi; a4’te daha güvenli. Ama hâlâ şah kanadından uzak. Motor 19...Kb8’i aynı değerde görüyor (+2.5): şahı c8-h3 çaprazından çıkarmak e6’nın bağını kaldırır.',
      diger: [
        { move: '19...Kb8', text: '20.fxe6 fxe6 21.Rf7 a5 ile şah bağdan kurtulur. Motor: +2.5.' },
        { move: '19...Be7', text: 'Şah kanadını savunur; 20.fxe6 fxe6 21.Rf7 Rhg8. Motor: +2.6.' },
      ],
    },
    '20w': {
      text: '20.fxe6 ile Beyaz e6’da değişir ve f-hattı açılır.',
      amac: 'f-hattını kalelere açmak ve Siyahı e6’yı f7 piyonuyla almaya zorlamak; böylece f7 karesi boşalır.',
      neden: 'Artık bütün taşlar hazır: Be3 gelişti, kale f1’de. Beklemenin anlamı yok; Siyah ...Kb8 ile bağdan kurtulabilirdi. Motor fxe6’yı en iyi buluyor (+2.5), 20.Rf2 ise 20...exf5 ile Siyaha nefes aldırır (+2.0).',
      diger: [
        { move: '20.Rf2', text: '20...exf5 21.Qf3 Rd8 22.Bxf5+ ile hâlâ iyi ama daha yavaş. Motor: +2.0.' },
        { move: '20.Kh2', text: '20...Be7 21.fxe6 fxe6 22.Rf7. Motor: +2.0.' },
      ],
    },
    '20b': {
      text: '20...fxe6: Siyahın tek makul hamlesi.',
      amac: 'Piyonu geri almak; başka yolla alınırsa Siyahın şah kanadı hemen çöker.',
      neden: '20...Rxe6? 21.Rxf7 Kb8 22.Bxe6 Qxe6 ile Beyaz kalite kazanır (+5.0). 20...f5? 21.exf6 gxf6 22.Rxf6 ile Siyahın şah kanadı açılır (+5.2). fxe6 tek hamle, ama f-hattını Beyaza bırakır ve e6’yı kalıcı zayıflık yapar.',
      diger: [
        { move: '20...Rxe6', text: '21.Rxf7 Kb8 22.Bxe6 Qxe6 23.Raf1 ile Beyaz kalite fazlasıyla kazanır. Motor: +5.0.' },
        { move: '20...f5', text: '21.exf6 gxf6 22.Rxf6 Kb8 ile Siyahın piyonları dağılır. Motor: +5.2.' },
      ],
    },
    '21w': {
      text: '21.Rf7 ile kale yedinci yataya girer ve g7’ye saldırır.',
      amac: 'Siyahın yedinci yatayını işgal etmek, g7’ye baskı yapmak ve Siyahın taşlarını pasif savunmaya zorlamak.',
      neden: 'Açık hattı hemen kullanmak gerekir: Siyah ...Rf8 ile hattı çekişmeye girebilirdi. Motor Rf7’yi en iyi buluyor (+2.6); 21.Rf2 de neredeyse aynı (+2.55).',
      diger: [
        { move: '21.Rf2', text: '21...Be7 22.Raf1 Kb8 23.Qg4 ile kaleler önce ikilenir. Motor: +2.55.' },
        { move: '21.Rab1', text: 'Vezir kanadını korur ama yavaş; 21...Kb8 22.Rf7. Motor: +2.0.' },
      ],
    },
    '21b': {
      text: '21...Re7 ile kale f7 kalesine karşı çıkar.',
      amac: 'f7’deki kaleyi değişmeye zorlamak ve yedinci yatayı korumak.',
      neden: 'Rf7 kalesi g7’yi ve yedinci yatayı tehdit ediyordu. Motor 21...Qb3’ü aynı değerde görüyor (+2.5): 22.Raf1 Qc2 ile vezir aktifleşir. 21...Rg8 ise pasif ama sağlam (+2.4).',
      diger: [
        { move: '21...Qb3', text: '22.Raf1 Qc2 23.Bxe6+ Rxe6 ile Siyah aktif karşı oyun arar. Motor: +2.5.' },
        { move: '21...Rg8', text: '22.Raf1 Be7 23.Qg4 Bd7 ile pasif savunma. Motor: +2.4.' },
      ],
    },
    '22w': {
      text: '22.Rf2 ile kale f2’ye çekilir; Beyaz kaleleri f-hattında ikileyecek.',
      amac: 'Kaleleri değişmek yerine f-hattını ikilenmiş kalelerle tutmak; sonra Rf7 ile yeniden girmek.',
      neden: 'Motor 22.Qf3’ü daha iyi buluyor (+2.9): 22...Rxf7 23.Qxf7 ile vezir f7’ye girer ve Bd7 sonrası Rf1 ile baskı sürer. Bronstein kale değişimine izin vermek istemedi; hızlı oyunda doğal bir karar (+2.4).',
      diger: [
        { move: '22.Qf3', text: '22...Rxf7 23.Qxf7 Bd7 24.Rf1 Qc6 ile vezir yedinci yatayda. Motor: +2.9.' },
        { move: '22.Raf1', text: '22...Rxf7 23.Rxf7 Bd7 24.Qf2 ile kale yedinci yatayda kalır. Motor: +2.6.' },
      ],
    },
    '22b': {
      text: '22...Re8 ile kale e8’e döner.',
      amac: 'e6’yı korumaya devam etmek ve f8 karesini kontrol etmek.',
      neden: 'Kale e7’de kalabilirdi ama Siyah e-hattını tutmayı tercih eder. Motor 22...Kb8’i biraz daha iyi buluyor (+2.7): şah c8-h3 çaprazından çıkar ve e6’nın bağı kalkar.',
      diger: [
        { move: '22...Kb8', text: '23.Raf1 Qd8 24.Kh2 Qe8 ile şah bağdan kurtulur. Motor: +2.7.' },
        { move: '22...Qd8', text: 'Vezir savunmaya döner; 23.Raf1 Kb8 24.Rf3 Qc8. Motor: +2.3 / +2.8.' },
      ],
    },
    '23w': {
      text: '23.Raf1 ile kaleler f-hattında ikilenir.',
      amac: 'f-hattını tamamen ele geçirmek ve Rf7 / Rf8 girişlerini hazırlamak.',
      neden: 'Siyahın f-hattına karşı koyacak taşı yok; ikilenen kaleler f7 ve f8 karelerini tehdit eder. Motor 23.Rf7’yi aynı değerde görüyor (+2.6), ama önce ikilenmek daha sağlam.',
      diger: [
        { move: '23.Rf7', text: '23...Qb3 24.Raf1 Qc2 25.Bxe6+ ile aktif oyun. Motor: +2.6.' },
        { move: '23.Qg4', text: 'Vezir önce gelir; 23...Bd7 24.Qg6 Be7 25.Raf1. Motor: +2.5.' },
      ],
    },
    '23b': {
      text: '23...Be7 ile fil gelişir ve f8 karesini korur.',
      amac: 'Son gelişmemiş taşı oyuna sokmak; Rf8 girişini önlemek ve g5 karesini kontrol etmek.',
      neden: 'f8 fili hiç oynamamıştı; Beyazın kaleleri f8’e girebilirdi. Motor bu hamleyi en iyi buluyor (+2.65).',
      diger: [
        { move: '23...Bd7', text: 'Fil savunmaya döner; 24.Rf7 Qd8 25.Kh2 Re7. Motor: +2.9.' },
        { move: '23...Qd8', text: '24.Rf7 Bd7 25.Kh2 Re7 ile pasif savunma. Motor: +2.9.' },
      ],
    },
    '24w': {
      text: '24.Qg4 ile vezir g4’ten e6’ya baskı yapar ve g6 karesine yönelir.',
      amac: 'Veziri saldırıya katmak: Qg6 ile g7’ye ve e6’ya baskı yapmak. h5 piyonu g6 karesini korur.',
      neden: 'Beyazın kaleleri f-hattında hazır; şimdi vezir de katılmalı. Motor Qg4’ü en iyi buluyor (+2.6). 24.Bc1 de iyidir (+2.5): fil b2’yi korur ve h6’ya bakabilir.',
      diger: [
        { move: '24.Bc1', text: '24...Bd7 25.Qg4 Qd8 26.Rf7 ile sağlam devam. Motor: +2.5.' },
        { move: '24.Rf7', text: '24...Rhg8 25.Qg4 Bd7 26.Bc1. Motor: +2.4.' },
      ],
    },
    '24b': {
      text: '24...Bd8 ile fil d8’e çekilir; e7 karesini kaleye boşaltır.',
      amac: 'Kaleyi e7’ye getirip yedinci yatayı ve g7’yi korumak; ayrıca b6 vezirinin a5-d8 çaprazından savunmaya katılması.',
      neden: '24...Bd7 (+2.8) filini savunmaya getirirdi; 24...Bf8 (+2.9) g7’yi korurdu. Motor üçünü yakın değerlendiriyor (+2.9). Siyah e7 karesinde kale ile savunma kurmayı seçiyor.',
      diger: [
        { move: '24...Bd7', text: '25.Bc1 Rhg8 26.Qg6 Rgf8 ile pasif ama sağlam. Motor: +2.8.' },
        { move: '24...Bf8', text: '25.Qg6 Bd7 26.Kh2 Kd8 ile g7 korunur. Motor: +2.9.' },
      ],
    },
    '25w': {
      text: '25.Qg6 ile vezir g6’ya girer, g7’ye ve e6’ya saldırır. h5 piyonu g6’yı destekler.',
      amac: 'g7 piyonuna ikinci kez baskı yapmak ve Siyahın e6’yı koruyan taşlarını aşırı yüklemek.',
      neden: '9.h5 hamlesinin meyvesi burada: g6 karesi Beyazın kalıcı karesi oldu. Motor 25.Bc1’i biraz daha iyi buluyor (+3.0): önce fil b2’yi korur. Qg6 da güçlü (+2.7 / +3.2).',
      diger: [
        { move: '25.Bc1', text: '25...a5 26.Qg6 Re7 27.Rf7 ile aynı fikir, b2 korunarak. Motor: +3.0.' },
        { move: '25.Kg2', text: '25...Re7 26.Rf7 Rxf7 27.Rxf7 Re8. Motor: +2.3.' },
      ],
    },
    '25b': {
      text: '25...Re7 ile kale e7’de g7’yi ve yedinci yatayı korur.',
      amac: 'g7 piyonunu korumak ve Rf7 girişini önlemek.',
      neden: 'g7 saldırı altındaydı. Ama bu hamle 26.Rf7! ile kalenin değişmesine izin verir ve değerlendirme +2.6’dan +3.5’e çıkar. Motor 25...Bd7’yi öneriyor (+2.6): fil savunmaya döner ve e8 karesi korunur.',
      diger: [
        { move: '25...Bd7', text: '26.Bc1 Be7 27.Kg2 Bf8 ile pasif ama dayanıklı. Motor: +2.6.' },
        { move: '25...Kb8', text: '26.Bc1 a5 27.Rf7 Rhg8. Motor: +3.35.' },
      ],
    },
    '26w': {
      text: '26.Rf7! ile kale yeniden f7’ye girer ve e7 kalesine saldırır.',
      amac: 'Siyahın tek savunucu kalesini değişmeye zorlamak; değişimden sonra g7 ve e6 savunmasız kalacak.',
      neden: 'Motor bu hamleyi açık ara en iyi buluyor (+3.5); ikinci en iyi 26.Bg4 sadece +1.8. Tehdit 27.Rxe7 Bxe7 28.Qxg7 ile h8 kalesi ve e7 fili aynı anda saldırı altında.',
      diger: [
        { move: '26.Bg4', text: '26...Be8 27.Qb1 Kb8 28.Rf8 ile daha yavaş. Motor: +1.8.' },
        { move: '26.Qb1', text: '26...Kb8 27.Bg4 Be8 ile Siyah savunur. Motor: +1.7.' },
      ],
    },
    '26b': {
      text: '26...Be8?? ile fil g6 vezirine saldırır.',
      amac: 'Veziri kovmak ve karşı saldırı yapmak; ama Beyaz bunu umursamaz.',
      neden: 'Ağır hata: 27.Rxe7! sonrası 27...Bxg6 28.Rxe6 hem vezire hem file saldırır (+5.8). Motor 26...Rhe8 (+3.6) veya 26...Rxf7 27.Rxf7 Re8 28.Rxg7 Qxb2 29.Bxe6+ (+3.9) ile direnmeyi öneriyordu.',
      diger: [
        { move: '26...Rhe8', text: '27.Bc1 Rxf7 28.Rxf7 a6 29.Qxg7 ile Beyaz üstün ama oyun devam eder. Motor: +3.6.' },
        { move: '26...Rxf7', text: '27.Rxf7 Re8 28.Rxg7 Qxb2 29.Bxe6+ Kb8 30.Bxd5. Motor: +3.9.' },
      ],
    },
    '27w': {
      text: '27.Rxe7! ile kale e7 kalesini alır; vezir saldırı altında kalsa da.',
      amac: 'Kale almak ve Siyahın hangi taşla geri alsa kaybettiğini göstermek.',
      neden: '27...Bxg6 28.Rxe6 hem b6 vezirine hem g6 filine saldırır: 28...Kb8 29.Rxb6 axb6 ile Beyaz bir kale ve bir piyon fazlası kalır (+5.6). 27...Bxe7 28.Qxg7 ise h8 kalesini ve e7 filini aynı anda vurur (+6.0). 27.Qxg7? Rxf7 ise sadece +3.0. Mestel terk etti.',
      diger: [
        { move: '27.Qxg7', text: '27...Rxf7 28.Qxh8 Rxf1+ 29.Kxf1 ile kazanç küçülür. Motor: +3.0.' },
      ],
    },
  },
  qa: [
    { q: 'Siyah neden 6...c4 oynadı, bu hamlenin bedeli neydi?', a: '6...c4 ile Siyah b4’ü önler ve b3 karesini kazanır; 5...Qb6 6.a3 sisteminin ana hattıdır (Motor: +0.3). Bedeli, d4’e baskının bitmesi ve merkezin tamamen kapanmasıdır. Kapalı merkezde Beyaz bütün taşlarını şah kanadına çekebilir; Bronstein’in h4-h5, g3-Bh3 ve f4-f5 planı tam bunu yaptı.' },
    { q: 'Bronstein neden 10.g3 ve 11.Bh3 oynadı, fil e2’ye neden gitmedi?', a: 'Kotronias’ın 6.a3 c4 yapıları için belirttiği gibi Siyahın en zayıf noktası e6’dır; h3-c8 çaprazındaki fil tam o noktayı hedefler. Motor 11.Rb1’i biraz daha iyi bulsa da (+0.2’ye karşı −0.05), Bh3 uzun vadede kazandıran fikir oldu: uzun rok sonrası fil e6’yı c8’deki şaha karşı bağladı ve Siyah ...exf5 ile değişemedi.' },
    { q: 'Siyah b3 karesi için neden bu kadar zaman harcadı ve bu ne kadar pahalıya mal oldu?', a: '...Nb3, ...Ba4, ...Nc6, ...Na5, ...Nxb3, ...Bxb3 serisiyle Siyah b3’teki taşı değişmeye uğraştı. Motor bu süreçte değerlendirmeyi 0.0’dan +1.9’a çıkarıyor. 14...cxb3 (+0.5) veya 15...cxb3 (+1.1) ile b-hattını açmak çok daha iyiydi; Beyaz ise aynı sürede rok yapıp f4’ü oynadı.' },
    { q: '17...O-O-O neden şüpheliydi?', a: 'c8 karesi h3 filinin çaprazındadır. f5 sonrası e6 piyonu alınır veya ilerlerse Bxe6+ şahla gelir; yani e6 fiilen bağlanır. Motor 17...g6’yı öneriyor (+1.7): 18.hxg6 fxg6 19.f5 gxf5 20.Qh5+ Kd8 ile Siyahın şahı rahat değil ama f-hattı açılmadan e6 sorunu hafifler. Maçta +2.3.' },
    { q: '18.f5’ten sonra Siyah neden 18...exf5 oynamadı?', a: '18...exf5 19.Rxf5 Qe6 20.Qf1 ile f7 düşer (Motor: +4.0). Ayrıca 19.Bxf5+ şahla fil merkeze gelir. Bu yüzden Siyah 18...Re8 ile e6’yı korumak zorunda kaldı.' },
    { q: '20...fxe6 tek hamle miydi?', a: 'Evet. 20...Rxe6? 21.Rxf7 Kb8 22.Bxe6 Qxe6 ile Beyaz kalite kazanır (+5.0); 20...f5? 21.exf6 gxf6 22.Rxf6 ile Siyahın şah kanadı çöker (+5.2). 20...fxe6 (+2.6) tek hamledir, ama f-hattını Beyaza bırakır.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Üç kaynaktan: (1) kapalı merkezde kendi kanadında daha hızlı oynaması (f4-f5, Siyahın b3 uğraşlarından hızlıydı); (2) h3 filinin e6’yı c8’deki şaha karşı bağlaması; (3) Siyahın a4 filinin şah kanadındaki savaşa hiç katılamaması. Sonunda f-hattında Beyaz fiilen bir taş fazlasıyla oynadı.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En iyi şans 11...O-O-O (−0.03) idi; Siyah b3 karesi için zaman harcamadan şahını güvene alabilirdi. Sonra 15...cxb3 (+1.1) ve 17...g6 (+1.7) ile oyun hâlâ direnilebilir durumdaydı. Son anda bile 26...Rhe8 (+3.6) oyunu sürdürürdü; 26...Be8?? ise hemen kaybettirdi.' },
    { q: '27.Rxe7 sonrası Siyah neden terk etti?', a: '27...Bxg6 28.Rxe6 kale hem b6 vezirine hem g6 filine saldırır: 28...Kb8 29.Rxb6 axb6 ile Beyaz bir kale ve bir piyon fazlası kalır (+5.6). 27...Bxe7 28.Qxg7 ise h8 kalesini ve e7 filini aynı anda vurur (+6.0). Her iki yolda da Siyah ağır materyal kaybeder.' },
  ],
  sources: [
    { title: 'Britbase: Young England vs USSR, London 1976 (rapidplay)', url: 'https://saund.org.uk/britbase/pgn/197601youngengvsussr-viewer.html' },
    { title: '365chess: ENG-URS m 1976 turnuva tablosu', url: 'https://www.365chess.com/tournaments/ENG-URS_m_1976/24021' },
    { title: 'Kotronias, Win with the French! (New in Chess / Quality Chess örnek bölüm)', url: 'https://www.newinchess.com/media/wysiwyg/product_pdf/82154.pdf' },
    { title: 'Wikipedia: French Defence', url: 'https://en.wikipedia.org/wiki/French_Defence' },
    { title: 'ChessBase: Review – Mastering the French Advance Main Line (Werle)', url: 'https://en.chessbase.com/post/review-jan-werle-french-advance' },
    { title: 'ChessBase Shop: 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 c4 (Moskalenko)', url: 'https://shop.chessbase.com/fr/products/cbm147_c02_french_advance' },
    { title: 'Chess.com: The advance variation of the French defence, part two: White plays 6.a3', url: 'https://www.chess.com/article/view/the-advance-variation-of-the-french-defencepart-two-white-plays-6a3' },
  ],
  exercises: [
    { id: 'bme-1', kind: 'tekrar', plan: true, title: 'f5 kırılması',
      source: 'Bronstein – Mestel, Londra 1976 (18. hamle)',
      fen: '2kr1b1r/pp3pp1/1q2p2p/3pP2P/2pP1P2/PbP3PB/1P2Q3/R1B2RK1 w - - 2 18',
      prompt: 'Vezir kanadı kapalı; Siyah uzun rok yaptı ve fili b3’te. Beyazın fili h3’te e6’ya bakıyor, f-piyonu f4’te. Beyazın planı ne?',
      hint: 'f-hattını açmak için hangi piyon ilerlemeli?',
      line: ['f5'],
      explanation: '**18.f5!** Piyon e6’ya saldırır; fxe6 sonrası f-hattı açılır ve h3 fili e6 piyonunu c8’deki şaha karşı bağlar. Motor: f5 +2.3, sonraki en iyi 18.Kh2 +2.1; fark küçük, ama f5 bu yapının asıl plan hamlesidir.',
      link: 'Kapalı Fransız yapısında Beyazın ana kırılması f4-f5’tir.' },
    { id: 'bme-2', kind: 'tekrar', plan: false, title: 'Kale f7’de',
      source: 'Bronstein – Mestel, Londra 1976 (26. hamle)',
      fen: '2kb3r/pp2r1p1/1q2p1Qp/3pP2P/b1pP4/P1P1B1PB/1P3R2/5RK1 w - - 10 26',
      prompt: 'Beyazın kaleleri f-hattında ikilenmiş, veziri g6’da. Siyahın kalesi e7’de yedinci yatayı tutuyor. Hamle sizde.',
      hint: 'Kale yedinci yataya girerek e7 kalesine saldırabilir.',
      line: ['Rf7', 'Be8', 'Rxe7'],
      explanation: '**26.Rf7!** Kale e7 kalesine saldırır. Oyunda 26...Be8 27.Rxe7! geldi: 27...Bxg6 28.Rxe6 kale veziri kovalar ve Beyaz bir kale fazla kalır. Motor: Rf7 +3.3, sonraki en iyi 26.Bg4 +1.9; 27.Rxe7 +5.6, 27.Qxg7 +3.2.',
      link: 'f-hattı açıldıktan sonra kale yedinci yataya girer ve savunucu kaleyi değişmeye zorlar.' },
    { id: 'bme-3', kind: 'transfer', plan: false, title: 'Aynı yapıda f5',
      source: 'Nakamura – Radomskyj, Parsippany 2005 (28. hamle)',
      fen: '4r1k1/pp3rp1/1q2p2p/1b1pP3/2pP1PP1/P3R3/1P1Q1RBP/7K w - - 3 28',
      prompt: 'Fransız İlerleme yapısı: Siyah ...c4 ile vezir kanadını kapattı, Beyazın piyonları f4 ve g4’te. Siyahın kaleleri f-hattında. Beyazın en güçlü hamlesi hangisi?',
      hint: 'e6 piyonunu ve f-hattını hedef alan kırılma.',
      line: ['f5'],
      explanation: '**28.f5!** Piyon e6’ya saldırır ve f6’ya ilerlemeyi tehdit eder; 28...Ref8 29.f6 sonrası Siyahın şahının önü açılır. Motor: f5 +2.9, sonraki en iyi 28.a4 +1.6.',
      link: 'Bronstein’in 18.f5 kırılmasının aynısı: vezir kanadı kapanınca Beyaz f-piyonuyla e6’ya saldırır.' },
    { id: 'bme-4', kind: 'transfer', plan: true, title: 'f-hattında kırılma',
      source: 'Panarin – Nepomniachtchi, Rusya Gençler Şampiyonası, Vladimir 2002 (53. hamle)',
      fen: '4q3/4rp2/p1k1p2Q/b2pPPN1/n1pP4/PrP3P1/1P2RR2/2B3K1 w - - 3 53',
      prompt: 'Yine Fransız İlerleme yapısı, ...c4 ile kapanmış vezir kanadı. Beyazın piyonu f5’te, atı g5’te, veziri h6’da. Hamle sizde.',
      hint: 'e6 piyonunu alıp f-hattını açın.',
      line: ['fxe6', 'fxe6', 'Rf6'],
      accept: { 2: ['Rf8'] },
      explanation: '**53.fxe6! fxe6 54.Rf6** ve kale f-hattından e6 piyonuna saldırır. Motor: fxe6 +4.6, sonraki en iyi 53.Rf3 +4.1.',
      link: 'Bronstein gibi Beyaz önce fxe6 ile f-hattını açtı, sonra kaleyle e6 zayıflığına saldırdı.' },
  ],
};
