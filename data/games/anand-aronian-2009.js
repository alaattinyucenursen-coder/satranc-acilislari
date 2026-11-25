// Anand – Aronian, Tal Memorial, Moskova 2009 (9. tur). Kaynak: PgnMentor (Anand.pgn).
export default {
  id: 'anand-aronian-2009',
  theme: '...e5 kırılması ve merkezde kalan şaha beyaz karelerden saldırı',
  white: 'Viswanathan Anand', black: 'Levon Aronian',
  whiteShort: 'Anand', blackShort: 'Aronian',
  event: 'Tal Memorial', site: 'Moskova', year: 2009, eco: 'D15',
  variation: 'Slav Savunması, Chebanenko varyantı (4...a6), 5.e3 b5 6.c5',
  result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. e3 b5 6. c5 Nbd7 7. Bd3 e5 8. Nxe5 Nxe5 9. dxe5 Nd7 10. e6 Nxc5 11. exf7+ Kxf7 12. b3 Nxd3+ 13. Qxd3 Qg5 14. g3 Qf6 15. Bb2 Qf3 16. Rg1 Bg4 17. a3 Re8 18. Rc1 b4 19. axb4 Bxb4 20. h3 Bxh3 21. g4 Bxg4 22. Rg3 Qf5 23. Qd4 Re4 24. Qa7+ Qd7 25. Qb6 c5 0-1`,

  summary: 'Oyun, Moskova’daki Tal Memorial’in son turunda (9. tur, 14 Kasım 2009) oynandı ve yalnızca 25 hamlede **Siyahın (Aronian) galibiyetiyle** bitti. Chess.com’un raporuna göre Anand birincilik şansını korumak için kazanmak zorundaydı; bu yenilgi ise Kramnik’in tek başına birinciliğini kesinleştirdi. Chebanenko Slav’ında Anand 6.c5 ile vezir kanadını kilitledi, ama 7.Bd3 sonrası Aronian zincirin tabanına **7...e5!** ile vurdu. 8.Nxe5 Nxe5 9.dxe5 Nd7 10.e6 Nxc5 11.exf7+ Kxf7 dizisinden sonra materyal eşitti: Siyahın şahı f7’de rok hakkını kaybetmişti, ama Beyazın şahı da henüz e1’deydi. Belirleyici an **12.b3?** oldu (The Week in Chess bunu “yeni hamle” olarak niteliyor). Bu hamle d3 filini korumadı: 12...Nxd3+ 13.Qxd3 Qg5! sonrası Beyaz rok yapamadı, çünkü 14.O-O? Bh3! kalite kaybettiriyordu. 14.g3 ile g2’yi koruyan Beyaz f3 ve h3 karelerini zayıflattı; Aronian veziri **15...Qf3!** ile bu deliğe yerleştirdi, 16...Bg4 ile destekledi ve 18...b4! 19.axb4 Bxb4 ile c3 atını e1’deki şaha bağladı. Beyazın 20.h3 ve 21.g4 ile fili tuzağa düşürme denemesi iki piyon kaybettirdi. Son hata **25.Qb6?** idi: 25...c5! sonrası ...Re6 ile Beyazın b6’daki veziri hapsoluyordu ve Anand terk etti. Siyahın oyunu, merkezde kalan bir şaha karşı beyaz karelerin nasıl kullanılacağına dair kısa ama eksiksiz bir dersti.',
  intro: '**Chebanenko varyantı (4...a6)**, Slav’da Siyahın c8 filini kapatmadan ve merkezi bırakmadan vezir kanadında gelişmeyi amaçladığı sistemdir. Wikipedia’nın Slav maddesine göre 1990’larda ortaya çıkan bu hamlenin fikri, ...dxc4’ten önce ya da sonra hızla ...b5 oynamaktır. Beyazın başlıca cevapları 5.c5 (alan kazanan ana yol), 5.a4, 5.Qc2 ve bu oyundaki sağlam **5.e3**’tür. 5.e3 b5 sonrası Beyaz ya 6.b3 ile c4’ü korur ya da **6.c5** ile gerginliği kaldırıp vezir kanadında alan alır (Chess.com’daki Bologan kitabı incelemesi 6.c5’i bu yapıdaki en popüler fikirlerden biri olarak anar). 6.c5’in bedeli şudur: c5-d4 zincirinin tabanı olan d4 hedef olur ve Siyah merkezde ...e5 ile bunu sorgular. Bu oyunda Beyaz 7.Bd3 ile e5 karesinin kontrolünü azaltınca Aronian bu kırılmayı hemen yaptı ve c5 piyonu desteksiz kaldı. Ortaya çıkan konumda iki şah da merkezdeydi; hangi tarafın taşlarını daha hızlı devreye soktuğu ve hangi tarafın piyon hamleleriyle kendi karelerini zayıflattığı sonucu belirledi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Vezir kanadında alan:** 6.c5 ile Siyahın ...dxc4 seçeneğini ortadan kaldırmak; ardından b4, a4 ve Bd2 ile vezir kanadında baskı kurmak (motor burada 7.a3, 7.Qc2 ya da 7.Bd2 gibi e5’i daha az bırakan hamleleri önerir).',
      '**...e5’e karşı hazırlık:** 7.Bd3 ile hızlı kısa rok planlamak; ama bu fil e5’i korumaz ve ...e5 hemen gelir. ...e5 sonrası en iyi yol, 10.e6 ve 11.exf7+ ile piyonu geri verip Siyahın rok hakkını almaktı.',
      '**Fili korumak, sonra rok:** 11...Kxf7 sonrası 12.Bc2 (Motor: +0.2) ya da 12.O-O ile beyaz kareli fili saklamak ve şahı hemen güvenliğe almak. ChessBase’in analizinde de bu iki hamle önerilir.',
      '**Piyon değil taşla savunmak:** g2 tehdidine karşı 14.g3 yerine 14.Bb2, 14.Ne2 ya da 14.Kf1 gibi taş hamleleri; b3, g3, h3 gibi piyon hamleleri beyaz kareleri kalıcı olarak zayıflattı.',
      '**f3’teki veziri kovmak:** 18.Nb1 ve Nd2 ya da 18.b4 ile Siyahın vezir kanadı oyununu durdurup ...b4 açılımını engellemek; oyunda bu hiç olmadı.',
      '**Vezir değişimiyle hasar sınırlamak:** 23.Qxf5+ ya da 25.Qxd7+ ile vezirleri değişip bir oyunsonunda savunmak (iki piyon eksik ama ayakta, Motor: yaklaşık −1.6 / −2.3).',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**Zincirin tabanına vurmak:** 7...e5! ile d4’ü değiştirip c5 piyonunu desteksiz bırakmak; 9...Nd7 ile at hem e5’e hem c5’e saldırır.',
      '**Beyaz kareli fili değiştirmek:** 12...Nxd3+ ile Beyazın beyaz karelerini koruyacak tek taşı ortadan kaldırmak; bundan sonra f3, h3, g4 ve e4 kareleri Siyahın olur.',
      '**Roku engellemek:** 13...Qg5 ile g2’ye baskı; 14.O-O? Bh3! ve daha sonra 16.O-O? Bh3! (motor mat görüyor) ile Beyazın şahını e1’de tutmak.',
      '**Vezir f3’e, fil g4’e:** 15...Qf3 ve 16...Bg4 ile beyaz karelerde kendi kendini koruyan bir vezir-fil çifti kurmak; vezir h1 ve f2’ye, fil d1 ve e2’ye bakar.',
      '**Hatları açmak ve bağlamak:** 17...Re8 ile e-hattını almak (e3 piyonunu e1’deki şaha bağlar), 18...b4 ve 19...Bxb4 ile c3 atını şaha bağlamak.',
      '**Piyon toplamak:** Beyazın h3 ve g4 piyonlarını f3 vezirinin koruması altında almak ve iki piyon öne geçmek.',
      '**Vezir avı:** Beyazın veziri tek başına a7-b6’ya gidince 25...c5! ile d4 ve c5 dönüş yollarını kesip ...Re6 ile hapsetmek.',
    ] },
  },
  critical: [
    { move: '7b', title: '7...e5! zincirin tabanına darbe', text: 'c5 piyonunu tutan tek şey d4 piyonu. Aronian bunu ...e5 ile hemen sorgular: 8.Nxe5 Nxe5 9.dxe5 Nd7 sonrası at hem e5’e hem c5’e saldırır, Beyaz ikisini birden tutamaz. Motor ...e5’i tek dengeleyen hamle olarak görür (Motor: +0.04); 7...g6 gibi yavaş bir hamle Beyaza b4 ve e4 için zaman verirdi (+0.6). 7.Bd3 bu kırılmaya izin verdi: fil d3’te e5’i korumaz, üstelik ileride ...Nxc5 ile at tarafından saldırılabilir hale gelir.' },
    { move: '12w', title: '12.b3? oyunun kırılma noktası', text: 'The Week in Chess bu hamleyi “yeni bir hamle, Anand belki bir şey unuttu, çünkü kaybediyor gibi görünüyor” diye yorumlar; ChessBase de Beyazın sorunlarının bu hamleden kaynaklandığını ve 12.Bc2 ya da 12.O-O’nun tercih edilmesi gerektiğini yazar. Motor da aynı fikirde: 12.Bc2 +0.2, 12.O-O 0.00, 12.b3 −0.8. b3, c5 atının d3 filini almasını engellemez; 12...Nxd3+ 13.Qxd3 Qg5! sonrası g2 saldırı altındadır ve 14.O-O? Bh3! 15.g3 Qf6 16.e4 Bxf1 kalite kaybettirir (−2.8). Beyazın şahı e1’de mahsur kalır.' },
    { move: '14w', title: '14.g3?! delikler açılıyor', text: 'g2’yi korumanın en kolay yolu gibi görünür ama f3 ve h3 karelerini hiçbir piyonun koruyamayacağı hale getirir; beyaz kareli fil de değiştiği için bu kareler kalıcı deliktir. Motor 14.Bb2’yi (−0.6; 14...Bf5 15.h4 gibi canlı bir oyunla) ya da 14.Ne2 / 14.Kf1’i (yaklaşık −1.0) önerir; 14.g3 sonrası −1.3.' },
    { move: '15b', title: '15...Qf3! vezir deliğe yerleşiyor', text: 'Vezir h1 kalesine saldırır ve Beyazın kısa rokunu tamamen öldürür: 16.O-O?? Bh3! sonrası g2’de mat tehdidi karşılanamaz (motor 7 hamlede mat görür). Beyaz 16.Rg1 ile rok hakkından vazgeçer. 16...Bg4 ile fil veziri destekleyince f3’teki vezir artık kolay kovalanamaz.' },
    { move: '18b', title: '18...b4! bağlama ve hat açma', text: '18.Rc1 (motor 18.b4 ya da 18.Nb1’i tercih eder, yaklaşık −1.0 / −1.2) sonrası Siyah b-piyonunu sürer. 19.axb4 Bxb4 ile fil c3 atını e1 şahına bağlar; Re8 de e3 piyonunu aynı şaha bağlamıştır. Beyazın iki taşı birden hareket edemez hale gelir (Motor: −1.6).' },
    { move: '21w', title: '20.h3 ve 21.g4: iki piyon gidiyor', text: 'Beyaz g4 filini kovalayıp f3 vezirini desteksiz bırakmak ister. Motor, ilginç bir şekilde, 20.h3 ve 21.g4’ü konumdaki en iyi hamleler olarak görür (diğer hamleler −2.7 ile −4.0 arası); ChessBase ise 21.g4’ü “online blitz oyunlarında görülen türden bir çaresizlik” olarak yorumlar. İki görüş çelişmez: Beyazın konumu zaten o kadar kötüydü ki en iyi deneme bile iki piyon kaybettirdi.' },
    { move: '23b', title: '23...Re4! dördüncü yatayı kapatmak', text: '23.Qd4, dördüncü yatay boyunca hem korumasız b4 filine hem de g4 filine bakar, ayrıca g7’yi hedefler. 23...Re4! veziri kovarken yatayı kapatır ve iki fili birden korur (Motor: −2.4). 23...c5? 24.Qxg4 Qxg4 25.Rxg4 eşitliğe götürürdü (+0.1), 23...h5?? ise 24.Qxb4 ile taş kaybettirirdi (+2.2).' },
    { move: '25b', title: '25...c5! vezir hapsi', text: '25.Qxd7+ ile vezir değişimi bir oyunsonuna giderdi (−2.3). Anand 25.Qb6? ile kaçınca 25...c5! geldi: b6’daki vezirin d4 ve c5 üzerinden dönüşü kapandı, ...Re6 tehdidi doğdu. Vezirin kaçacağı a7 ve b7 kareleri d7 vezirinin yatayında, b5 ise c6 üzerinden d7 vezirinin çaprazındadır. c3 atı bağlı olduğu için 26.Nxd5 de oynanamaz. 26.Qxa6 d4 27.Kf1 dxc3 (−4.4) ya da 26.Kf1 Re6 27.Nxd5 Rxb6 28.Nxb6 Qe6 (−4.9) çaresizdir; Anand terk etti.' },
  ],
  lessons: [
    'Piyon zincirine karşı en doğal plan zincirin tabanına vurmaktır: c5-d4 zincirine karşı **...e5**. Zincirin ucunu korumayı ihmal eden her hamle (burada 7.Bd3) bu kırılmayı hızlandırır.',
    'İki şah da merkezde kaldığında önemli olan, kimin şahını önce güvenliğe aldığıdır. 12.Bc2 ya da 12.O-O yerine oynanan bir piyon hamlesi (12.b3) tek bir tempoyu kaybettirdi ve Beyaz bir daha rok yapamadı.',
    'Beyaz kareli fil değiştikten sonra o renkteki karelerin piyonlarla da korunması gerekir; g3 gibi bir hamle f3 ve h3’ü kalıcı deliğe çevirir ve rakip vezir oraya yerleşir.',
    'Bağlamalar (c3 atı ve e3 piyonu e1’deki şaha) merkezde kalan şaha karşı en etkili silahlardır: bağlı taşlar savunma yapamaz, karşı saldırıya da katılamaz.',
    'Kötü bir konumda vezir değişimi genellikle en iyi kurtarma şansıdır. Anand iki kez (23.Qxf5+, 25.Qxd7+) değişimi reddetti ve ikincisinde veziri tek başına rakip kampta kaldı.',
    'Vezir rakip kampa yalnız girerse, bir piyon hamlesi (...c5) ve bir kale manevrası (...Re6) onu hapsedebilir: önce geri dönüş yolları kapatılır, sonra saldırılır.',
  ],
  qa: [
    { q: 'Beyaz neden 6.c5 oynadı ve bunun bedeli neydi?', a: '6.c5 ile Beyaz, Siyahın ...dxc4 ve ...bxc4 seçeneklerini ortadan kaldırıp vezir kanadında alan kazanır; Siyahın b5 ve a6 piyonları b4 ve a4 ile hedef olabilir. Bedeli, c5 piyonunun tek destekçisinin d4 olmasıdır. Siyah ...e5 ile d4’ü değiştirirse c5 havada kalır. Bu yüzden 6.c5 sonrası Beyazın e5 karesini sıkı tutması gerekir (Nf3, Bf4, Qc2 gibi); 7.Bd3 bunu yapmadı.' },
    { q: 'Siyah neden 7...e5 ile bir piyon verir gibi oynadı?', a: 'Aslında piyon vermiyor: 8.Nxe5 Nxe5 9.dxe5 Nd7 sonrası at hem e5’e hem c5’e saldırır ve Siyah piyonu geri alır. 10.e6 Nxc5 11.exf7+ Kxf7 sonrası materyal eşittir. Motor 7...e5’i konumdaki en iyi hamle olarak görür (+0.04); 7...g6 gibi yavaş bir hamle Beyaza b4 ve e4 için zaman verirdi (+0.6).' },
    { q: 'Beyaz neden 10.e6 ile piyonu geri verdi, e5’i tutmak mümkün değil miydi?', a: '10.b4 ile c5’i tutmak 10...Nxe5 ile e5 piyonunu kaybettirir (Motor: −0.1); 10.f4 ile e5’i tutmak da 10...Nxc5 ile c5’i bırakır (−0.2). ChessBase 10.f4’ün merkezde varlığı koruduğu için daha iyi olabileceğini yazar, ama motor 10.e6’yı açık ara en iyi bulur (+0.5): Siyahın f7 piyonu bozulur ve şahı rok hakkını kaybeder.' },
    { q: '12.b3 neden bu kadar kötüydü? Sadece bir piyon hamlesi değil mi?', a: 'Sorun hamlenin kendisinden çok yaptığı şeyi yapmamasıdır. c5 atı d3 filine saldırıyordu; 12.Bc2 fili korur, 12.O-O şahı hemen güvenliğe alırdı. 12.b3 sonrası 12...Nxd3+ 13.Qxd3 Qg5! geldi ve Beyaz rok yapamaz oldu: 14.O-O? Bh3! 15.g3 Qf6 16.e4 Bxf1 (Motor: −2.8). Üstelik b3, ileride ...b4 ve ...Bb4 bağlamasıyla c3 atını zayıf bıraktı. The Week in Chess ve ChessBase de oyunun burada koptuğunu yazar.' },
    { q: 'Beyaz 16.O-O ile neden rok yapamadı?', a: 'f3’teki vezir g2’ye bakıyor. 16.O-O?? Bh3! sonrası ...Qg2# tehdidi var ve Beyaz bunu durduramaz; motor 7 hamlede mat görür. Bu yüzden Anand 16.Rg1 ile kaleyi g2’nin koruyucusu yaptı ve şahı kalıcı olarak e1’de kaldı.' },
    { q: 'Siyah 22...Qf5’ten sonra neden vezir değişimine izin verdi?', a: '22.Rg3 vezire saldırınca vezirin g4 filini korumaya devam etmesi gerekiyordu. 22...Qf5 bunu yapar ve 23.Qxf5+ Bxf5 sonrası Siyah iki piyon fazlasıyla açıkça üstün bir oyunsonuna geçer (Motor: −1.6). 22...Qe4 ise 23.Qxe4 Rxe4 ile avantajın çoğunu verirdi (−0.3), 22...Qf4? ise 23.Kf1 ile tamamen eşitlerdi (0.00). e3 piyonu Re8 tarafından bağlı olduğu için 22...Qf4’ü exf4 ile almak da yasaktı.' },
    { q: 'Beyazın avantajı ya da kurtuluş şansı nerede kayboldu?', a: 'Açılış sonrası 12. hamleye kadar oyun dengedeydi (12.Bc2 +0.2). 12.b3 sonrası Siyah hafif üstün, 14.g3 sonrası açık üstün, 18.Rc1 sonrası ise kazanmaya yakın oldu (−2.1). Son kurtarma denemesi 25.Qxd7+ Bxd7 26.Kf1 idi (−2.3): iki piyon eksik ama vezirsiz bir oyunsonu. 25.Qb6? veziri doğrudan kaybetti.' },
    { q: 'Son konumda Beyaz neden terk etti?', a: '25...c5 sonrası ...Re6 vezire saldıracak ve vezirin hiç güvenli karesi kalmayacak: a7 ve b7 d7 vezirinin yatayında, b5 onun çaprazında, c5 ve d4 ise kapalı. c3 atı Bb4 tarafından bağlı olduğu için d5’i alamaz. 26.Qxa6 d4! sonrası da c3 atı düşer (Motor: −4.4). Beyaz en iyi ihtimalle kale karşılığında vezir kaybederdi.' },
  ],
  notes: {
    '1w': {
      text: '1.d4: vezir piyonu iki kare ilerleyerek e5 ve c5 karelerini kontrol eder ve c1 filine yol açar.',
      amac: 'Merkezde yer kaplamak ve c4 ile Vezir Gambiti’ne hazırlanmak. Anand her iki şah ve vezir piyonu açılışında da yüksek düzeyde hazırlıklı bir oyuncudur.',
      neden: 'Son turda kazanması gereken Anand için 1.d4, uzun ve gergin konumsal oyunlara giden güvenilir bir seçimdir. Motor ana ilk hamleleri birbirine çok yakın görür.',
      diger: [
        { move: '1.e4', text: 'Açık oyunlara ve Sicilya’ya gider; motor en ufak farkla en iyi ilk hamle olarak görür (Motor: +0.3).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; çoğunlukla d4 ve c4 yapılarına döner (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah merkezde simetrik karşılık verir ve e4 karesini kontrol eder.',
      amac: 'Merkezde kendi payını almak ve klasik vezir piyonu yapılarına (QGD, Slav) yönelmek.',
      neden: '1...d5 en doğrudan cevaptır; Hint savunmalarına (1...Nf6) göre daha az teori dallanması ve daha sağlam bir merkez sunar.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmaları (Nimzo, Grünfeld, Kral Hint); motor eşdeğer görür (+0.3).' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. Beyaz c-piyonuyla d5’e saldırır.',
      amac: 'd5 piyonunu merkezden uzaklaştırmaya çalışmak; Siyah ...dxc4 alırsa e4 ile tam merkez kurmak.',
      neden: 'Gerçek bir gambit değildir: Siyah c4’ü alırsa Beyaz e3 ve Bxc4 ile piyonu kolayca geri alır. Bu, 1.d4 sonrası en ana yoldur.',
      diger: [
        { move: '2.Nf3', text: 'Önce at; c4’ü sonraya bırakır ve bazı Siyah sistemlerini (QGA, Albin) kısıtlar (Motor: +0.4).' },
        { move: '2.Bf4', text: 'Londra Sistemi; daha az iddialı ama sağlam.' },
      ],
    },
    '2b': {
      text: '2...c6: Slav Savunması. d5 c-piyonuyla desteklenir.',
      amac: 'Merkezi sağlam tutarken c8 filinin önünü kapatmamak; QGD’nin (2...e6) “kötü fil” sorununu yaşamamak.',
      neden: 'Slav, Siyahın fili f5 ya da g4’e çıkarabildiği esnek bir savunmadır. Wikipedia’nın Slav maddesi Anand, Ivanchuk, Kramnik ve Short gibi isimleri bu açılışı kullananlar arasında sayar; yani Anand burada rakibinin silahını kendisi de iyi tanıyan biridir.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi; daha klasik ama c8 fili kapanır (Motor: +0.3).' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü; merkezi bırakıp hızlı gelişim arar (Motor: +0.3).' },
      ],
    },
    '3w': {
      text: '3.Nf3: at gelişir, e5 karesini kontrol eder ve d4’ü destekler.',
      amac: 'Doğal gelişim ve kısa roka hazırlık. At e5’e de sıçrayabilir.',
      neden: '3.Nc3 bazı keskin yollara (3...dxc4 4.e4 ya da Noteboom/Marshall) izin verir; 3.Nf3 daha esnek ve ana yoldur.',
      diger: [
        { move: '3.Nc3', text: 'd5’e ikinci baskı; motor biraz daha iyi görüyor (+0.4) ama 3...e6 ve 3...dxc4 ile keskin yollara gidebilir.' },
        { move: '3.cxd5', text: 'Değişme Slav’ı; simetrik ve sakin, kazanmak isteyen bir oyuncu için daha az iddialı (+0.35).' },
      ],
    },
    '3b': {
      text: '3...Nf6: at gelişir ve d5’i destekler, e4’e de bakar.',
      amac: 'Gelişmeye devam etmek ve ana Slav konumlarına girmek.',
      neden: 'Siyah henüz fil hamlesi ya da ...e6 ile karar vermez; ...Nf6 her Slav sisteminde oynanan hamledir.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav’a giden bir hamle sırası; c8 filini kapatır (Motor: +0.5).' },
        { move: '3...g6', text: 'Schlechter Slav’ı; fil g7’ye gider ama d5 biraz zayıflar (+0.55).' },
      ],
    },
    '4w': {
      text: '4.Nc3: ikinci at da d5’e baskı yapar.',
      amac: 'd5 üzerindeki baskıyı artırmak ve e4 ile merkezi genişletmeye hazırlanmak.',
      neden: 'Ana yol. Siyah artık ...dxc4 (ana Slav), ...e6 (Yarı-Slav) ya da ...a6 (Chebanenko) arasında seçim yapar.',
      diger: [
        { move: '4.e3', text: 'Sakin bir kuruluş; ...Bf5 ile Siyah fili rahatça dışarı çıkarır (Motor: +0.3).' },
        { move: '4.cxd5', text: 'Değişme Slav’ı yapısı (+0.3).' },
      ],
    },
    '4b': {
      text: '4...a6: Chebanenko varyantı. Siyah ...b5 hamlesine hazırlanır.',
      amac: 'c8 filini kapatmadan ve merkezi bırakmadan vezir kanadında yer kazanmak; ...b5 ile c4’e baskı yapmak ya da ...dxc4 sonrası piyonu b5 ile tutmak.',
      neden: 'Wikipedia’ya göre bu hamle 1990’larda ortaya çıktı ve Siyahın ...b5’i ...dxc4’ten önce ya da sonra oynamasını sağlar. Ana Slav’da (4...dxc4 5.a4) Beyazın a4 ile b5’i durdurmasına izin verilir; 4...a6 bu planı esnek tutar. Motor üç hamleyi neredeyse eşit görür.',
      diger: [
        { move: '4...dxc4', text: 'Ana Slav: 5.a4 Bf5 ile klasik yapı (Motor: +0.25).' },
        { move: '4...e6', text: 'Yarı-Slav; 5.Bg5 ya da 5.e3 ile çok teorik yollara gider (+0.35).' },
      ],
    },
    '5w': {
      text: '5.e3: Beyaz sağlam bir kuruluş seçer; f1 filine yol açar ve d4’ü güçlendirir.',
      amac: 'c4 piyonunu Bd3 ya da Be2 ile korumaya hazırlanmak, kısa rok yapıp merkezde sağlam kalmak.',
      neden: '5.c5 alan kazanır ama Siyah ...Bf5 ve ...Nh5 ile kolayca kurulur; 5.e3 daha yavaş ama daha az taahhüt eder. Dezavantajı c1 filinin kapanmasıdır.',
      diger: [
        { move: '5.c5', text: 'Wikipedia’nın andığı alan kazanan ana yol; 5...Bf5 6.Bf4 Nbd7 7.e3 Nh5 klasik fikirdir (Motor: +0.5).' },
        { move: '5.a4', text: '...b5’i doğrudan engeller ama b4 karesini zayıflatır.' },
        { move: '5.cxd5', text: 'cxd5 sonrası simetrik yapı; Siyah rahat eşitler (+0.25).' },
      ],
    },
    '5b': {
      text: '5...b5: Siyah c4 piyonuna saldırır ve ...bxc4 ya da ...dxc4 tehdidi yaratır.',
      amac: 'Beyazı vezir kanadında bir karar vermeye zorlamak: ya c4’ü korumak (b3), ya değiştirmek (cxd5) ya da ilerletmek (c5).',
      neden: '4...a6’nın mantıklı devamıdır. 5...e6 daha sakin bir Yarı-Slav yapısına döner; 5...b5 ise Chebanenko’nun ruhuna uygun olarak vezir kanadında inisiyatif arar.',
      diger: [
        { move: '5...e6', text: 'Yarı-Slav yapısına geçiş; c8 fili kapanır (Motor: +0.3).' },
        { move: '5...g6', text: 'Fil g7’ye; Schlechter tarzı bir kuruluş.' },
      ],
    },
    '6w': {
      text: '6.c5: Beyaz gerginliği kaldırır ve vezir kanadında alan kazanır.',
      amac: 'Siyahın ...dxc4 seçeneğini ortadan kaldırmak, b5-a6 piyonlarını ileride b4 ve a4 ile hedef almak, Siyahı sıkışık bir konumda tutmak.',
      neden: 'Motor 6.c5’i en iyi hamle olarak görür (+0.5). Ama bu hamleyle c5-d4 zincirinin tabanı olan d4 bir hedef olur; Siyah ...e5 ile bunu sorgulayacaktır. Beyaz bundan sonra e5’i sıkı tutmalıdır.',
      diger: [
        { move: '6.b3', text: 'c4’ü korur; Siyah 6...Bg4 ile f3 atını bağlar ve ...e6 ile kurulur (Motor: +0.4). Bologan’ın kitabının incelemesinde bu kol da tartışılır.' },
        { move: '6.cxd5', text: '6...cxd5 sonrası simetrik yapı; Beyaz 7.Ne5 ile biraz baskı arar (+0.1).' },
      ],
    },
    '6b': {
      text: '6...Nbd7: at d7’ye gelişir; ...e5’i destekler ve ileride c5 piyonuna bakar.',
      amac: '...e5 kırılmasını hazırlamak. At d7’den hem e5’i destekler hem de d4 düştükten sonra c5’e saldırabilir.',
      neden: 'c5 zincirine karşı en doğrudan plan ...e5’tir; bunun için d7 atı şarttır. 6...g6 ve 6...Bg4 alternatif kuruluşlardır, motor üçünü de eşit görür (+0.4 – +0.5).',
      diger: [
        { move: '6...g6', text: 'Fil g7’ye gider, sonra ...Bf5 ya da ...Ne4 (Motor: +0.45).' },
        { move: '6...Bg4', text: 'f3 atını bağlar; ...Bxf3 ile Beyazın e5 kontrolünü azaltıp sonra ...e5 oynamak (+0.5).' },
      ],
    },
    '7w': {
      text: '7.Bd3: fil d3’e gelişir ve kısa roka hazırlanır.',
      amac: 'Gelişimi tamamlayıp rok yapmak, fili b1-h7 çaprazına yerleştirmek.',
      neden: 'Doğal görünür ama e5 karesini korumaz ve fil, ...e5-...Nd7-...Nxc5 sonrası atın hedefi olur. Motor bu hamleyi Beyazın avantajını sıfırlayan hamle olarak görür (+0.1); 7.a3, 7.Qc2 ya da 7.Bd2 önce vezir kanadını güçlendirip e5’i daha iyi tutardı.',
      diger: [
        { move: '7.Qc2', text: 'e4’ü ve e5’i dolaylı kontrol eder; 7...g6 8.Bd3 Bg7 9.O-O ile Beyaz hafif üstün (Motor: +0.5).' },
        { move: '7.a3', text: 'b4’ü hazırlar ve ...b4’ü engeller (Motor: +0.5).' },
        { move: '7.Bd2', text: 'Vezir kanadı planı: a3, b4 (Motor: +0.45).' },
      ],
    },
    '7b': {
      text: '7...e5!: Siyah zincirin tabanı olan d4’e vurur.',
      amac: 'd4’ü değiştirip c5 piyonunu desteksiz bırakmak ve onu kazanmak; aynı zamanda c8 filine ve f8 filine yol açmak.',
      neden: 'Motor bu hamleyi tek dengeleyen hamle olarak görür (+0.04); 7...g6 (+0.6) ya da 7...Qc7 (+0.7) Beyaza vezir kanadında zaman verirdi. 7.Bd3 e5’i korumadığı için şimdi tam zamanıdır: 8.Nxe5 Nxe5 9.dxe5 Nd7 ile c5 piyonu düşecek.',
      diger: [
        { move: '7...g6', text: 'Yavaş; 8.O-O Bg7 9.e4 ile Beyaz merkezde açılır (Motor: +0.6).' },
        { move: '7...Qc7', text: 'e5’i hazırlar ama bir tempo kaybeder (+0.7).' },
      ],
    },
    '8w': {
      text: '8.Nxe5: Beyaz e5 piyonunu alır ve değişimleri başlatır.',
      amac: 'Bir piyon kazanmak ya da en azından merkezdeki değişimleri kendi lehine yönlendirmek.',
      neden: 'Motor en iyi hamle olarak görür (+0.4). 8.dxe5 ...Ng4 ile e5’i geri kazanırken Siyaha tempo verir; 8.Bc2 e4 ise merkezi kapatır ve Siyaha rahat bir konum bırakır.',
      diger: [
        { move: '8.Bc2', text: '8...e4 9.Nd2 g6 ile Siyah alan kazanır (Motor: +0.2).' },
        { move: '8.Bb1', text: '8...Qc7 9.O-O e4 benzer yapı (+0.1).' },
      ],
    },
    '8b': {
      text: '8...Nxe5: Siyah atla geri alır.',
      amac: 'Materyali geri kazanmak; d4 piyonunu d4’ten uzaklaştırmak.',
      neden: 'Tek hamle: başka bir hamle Siyahı piyon eksik ve kötü bir konumda bırakır (8...Qc7 9.f4 +2.4).',
      diger: [
        { move: '8...Qc7', text: '9.f4 g6 10.O-O ile Beyaz piyon fazlasını sağlamlaştırır (Motor: +2.4).' },
      ],
    },
    '9w': {
      text: '9.dxe5: d-piyonuyla geri alınır; artık c5 piyonunu koruyan d4 piyonu yok.',
      amac: 'Taşı geri almak (aksi halde Beyaz bir at eksik kalır).',
      neden: 'Zorunlu: 9.Bc2? Ng6 sonrası Beyaz piyon karşılığında at kaybetmiş olur (−2.9).',
    },
    '9b': {
      text: '9...Nd7: at d7’ye dönüp hem e5 hem c5 piyonuna saldırır.',
      amac: 'İki zayıf piyondan birini kazanmak: Beyaz e5’i ya da c5’i tutabilir, ikisini birden tutamaz.',
      neden: 'Çatal fikri: d7’deki at iki piyona aynı anda saldırır. 9...Ng4 de mümkündü (Motor: +0.2, 10.f4 Bxc5 11.Qf3 Nh6), ama 9...Nd7 daha doğal ve sağlamdır.',
      diger: [
        { move: '9...Ng4', text: '10.f4 Bxc5 11.Qf3 Nh6 ile Siyah c5’i alır ama at kenara düşer (Motor: +0.2).' },
        { move: '9...b4', text: '10.Na4 sonrası c5 piyonu b6’ya karşı korunur (+1.4).' },
      ],
    },
    '10w': {
      text: '10.e6!: Beyaz e5 piyonunu ileri sürüp feda eder.',
      amac: 'Kaybedilecek piyonu en etkili şekilde vermek: Siyahın f7 piyonunu bozmak ve exf7+ ile Siyahın rok hakkını almak.',
      neden: 'Motor bunu açık ara en iyi hamle olarak görür (+0.5). ChessBase’in analizinde 10.f4 ile merkezde kalmanın daha iyi olabileceği söylenir, ama motor 10.f4’ü 10...Nxc5 sonrası Siyah için hafif üstün görür (−0.2). 10.b4 ise 10...Nxe5 ile e5’i kaybettirir.',
      diger: [
        { move: '10.f4', text: 'ChessBase’in önerisi; 10...Nxc5 11.O-O Nxd3 12.Qxd3 b4 ile Siyah rahat (Motor: −0.2).' },
        { move: '10.b4', text: 'c5’i tutar ama 10...Nxe5 11.Bb2 a5 sonrası Siyahın taşları merkezde iyi (−0.1).' },
      ],
    },
    '10b': {
      text: '10...Nxc5: Siyah c5 piyonunu alır ve at d3 filine saldırır.',
      amac: 'Materyali geri almak, atı aktif c5 karesine getirip Beyazın beyaz kareli filini tehdit etmek.',
      neden: '10...fxe6 11.Qh5+ Ke7 şahı daha da açar (+0.85); 10...Ne5 de atı merkeze getirir ama c5’i almaz (+0.8). 10...Nxc5 hem materyali eşitler hem de d3’e saldırır.',
      diger: [
        { move: '10...fxe6', text: '11.Qh5+ Ke7 12.O-O sonrası Siyahın şahı tehlikede (Motor: +0.85).' },
        { move: '10...Ne5', text: '11.exf7+ Nxf7 12.b4 a5 ile Beyaz c5’i tutar (+0.8).' },
      ],
    },
    '11w': {
      text: '11.exf7+: Beyaz f7’yi alarak şah çeker.',
      amac: 'Siyahın şahını f7’ye çekip rok hakkını yok etmek; e6 piyonu zaten kaybolacaktı.',
      neden: 'Tek mantıklı hamle: 11.O-O? Bxe6 ile Siyah piyonu bedavaya alır (−1.3). Bu değişimden sonra materyal eşittir ama iki şah da merkezde kalır.',
      diger: [
        { move: '11.O-O', text: '11...Bxe6 12.Bc2 Bd6 sonrası Siyah sağlam ve gelişimde ileri (Motor: −1.3).' },
      ],
    },
    '11b': {
      text: '11...Kxf7: şahla alınır.',
      amac: 'Materyali geri almak. Şah f7’de rok hakkını kaybeder ama Siyah ileride ...Kg8 ile “elle rok” yapabilir.',
      neden: '11...Ke7 (+1.4) ve 11...Kd7 (+2.1) şahı daha merkezde bırakır ve f7 piyonunu almaz. f7’deki şah açık görünür, ama Beyazın şahı da e1’de ve Siyahın filleri hızla gelişecek.',
      diger: [
        { move: '11...Ke7', text: '12.Bc2 Kxf7 13.O-O ile Beyaz bir tempo kazanmış olur (Motor: +1.4).' },
      ],
    },
    '12w': {
      text: '12.b3?: Beyaz c1 filine b2’ye yol açar ama d3 filini korumaz.',
      amac: 'Fili b2’ye ya da a3’e geliştirip vezir kanadını tamamlamak; c4 karesini kontrol etmek.',
      neden: 'Oyunun kırılma noktası. The Week in Chess bunu “yeni bir hamle, Anand belki bir şey unuttu, çünkü kaybediyor gibi görünüyor” diye yorumlar; ChessBase de 12.Bc2 ya da 12.O-O’nun tercih edilmesi gerektiğini yazar. Motor: 12.Bc2 +0.2, 12.O-O 0.00, 12.b3 −0.8. 12...Nxd3+ sonrası beyaz kareler savunmasız kalır ve Qg5-Bh3 fikirleri yüzünden rok imkânsızlaşır.',
      diger: [
        { move: '12.Bc2', text: 'Fili korur; 12...g6 13.Qf3+ Kg7 14.b4 Bd6 ile Beyaz hafif üstün (Motor: +0.2 – +0.6).' },
        { move: '12.O-O', text: 'Hemen rok; 12...Nxd3 13.Qxd3 Bd6 14.e4 Re8 dengede (Motor: 0.00).' },
        { move: '12.Qh5+', text: '12...g6 13.Bxg6+ hxg6 14.Qxh8 Nd3+ 15.Kf1 b4 ile karmaşık bir denge (Motor: 0.00).' },
      ],
    },
    '12b': {
      text: '12...Nxd3+: Siyah filin üstüne şah çekerek d3 filini alır.',
      amac: 'Beyazın beyaz kareli filini değiştirmek; böylece f3, h3, g4, e4 gibi karelerin bekçisi ortadan kalkar.',
      neden: 'Şahla alındığı için Beyazın tempo kazanma şansı yoktur. 12...b4 13.Na4 Nxd3+ de benzer (−0.8); 12...Nxd3+ en doğrudan yoldur.',
      diger: [
        { move: '12...b4', text: '13.Na4 Nxd3+ 14.Qxd3 Qg5 ile benzer bir konum (Motor: −0.8).' },
        { move: '12...Bd6', text: 'Önce gelişim; 13.O-O Nxd3 14.Qxd3 Re8 (−0.5), ama Beyaz rok yapma fırsatı bulur.' },
      ],
    },
    '13w': {
      text: '13.Qxd3: vezirle geri alınır.',
      neden: 'Zorunlu: 13.Ke2 ya da 13.Kf1 at c1’i alırken Beyaz taş kaybeder (−5.5).',
    },
    '13b': {
      text: '13...Qg5!: vezir g5’e çıkar ve g2 piyonuna saldırır.',
      amac: 'Beyazın kısa rokunu engellemek: 14.O-O? Bh3! sonrası g2 iki kez saldırı altında olur ve Beyaz kalite kaybeder.',
      neden: 'Beyazın en büyük sorunu şahının e1’de olması. Qg5 hem g2’ye hem e3’e (f4 üzerinden) bakar ve Beyazı piyon hamlesiyle savunmaya zorlar. 13...b4 da aynı değerde (−0.7), 13...h5 daha yavaş (−0.4).',
      diger: [
        { move: '13...b4', text: '14.Ne2 Qf6 15.Qb1 Bf5 ile Siyah iyi (Motor: −0.7).' },
        { move: '13...h5', text: '14.O-O h4 sonrası Beyaz rok yapmış olur (−0.4).' },
      ],
    },
    '14w': {
      text: '14.g3?!: g2’yi korur ama f3 ve h3 karelerini kalıcı olarak zayıflatır.',
      amac: 'g2 piyonunu korumak ve ileride Bg2’ye ya da Rg1’e gerek kalmadan şahı korumak.',
      neden: '14.O-O? Bh3! 15.g3 Qf6 16.e4 Bxf1 kalite kaybettirir (−2.8). Ama 14.g3 de beyaz kareli fili olmayan Beyaz için kötüdür: f3 ve h3 hiçbir piyonla korunamaz. Motor 14.Bb2’yi (−0.6) önerir: 14...Bf5 15.h4 Qg4 16.Qe2 Qxg2 17.O-O-O ile Beyaz piyon karşılığında uzun rok yapar.',
      diger: [
        { move: '14.Bb2', text: 'Gelişimi tamamlar; 14...Bf5 15.h4 Qg4 16.Qe2 Qxg2 17.O-O-O ile karşı oyun (Motor: −0.6).' },
        { move: '14.Kf1', text: 'Elle rok fikri; 14...Bd6 15.Bb2 Re8 16.h4 (−1.0).' },
        { move: '14.O-O', text: '14...Bh3! 15.g3 Qf6 16.e4 Bxf1 17.Kxf1 ile Beyaz kalite eksik (Motor: −2.8).' },
      ],
    },
    '14b': {
      text: '14...Qf6: vezir f6’dan c3 atına (ve arkasındaki a1 kalesine) ve f3 karesine bakar.',
      amac: 'Uzun çaprazda c3 atına baskı kurmak ve veziri bir sonraki hamlede f3 deliğine sokmak.',
      neden: 'g3 sonrası f3 karesi zayıfladı; vezir oraya f6 üzerinden gider. 14...Bd6 (−1.6) ve 14...Bc5 (−1.5) eşdeğer gelişim hamleleridir; 14...Qf6 Beyazı c3’ü korumaya zorlar.',
      diger: [
        { move: '14...Bd6', text: '15.e4 Qh5 16.O-O Re8 ile Siyah üstün (Motor: −1.6).' },
        { move: '14...Bh3', text: 'Fil g2 ve f3 üzerinden uzun çaprazı hedefler (−1.2).' },
      ],
    },
    '15w': {
      text: '15.Bb2: fil b2’de c3 atını korur ve uzun çaprazı tutar.',
      amac: 'c3’e ve a1 kalesine yönelik baskıyı karşılamak, gelişimi tamamlamak.',
      neden: 'Motor en iyi hamle olarak görür (−1.1). 15.Qd4 vezir değişimine gider ama 15...Qxd4 16.exd4 Bb4 sonrası Beyazın piyon yapısı kötü (−1.5); 15.a3 ise yavaştır (−1.7).',
      diger: [
        { move: '15.Qd4', text: '15...Qxd4 16.exd4 Bb4 17.Bd2 ile kötü bir oyunsonu (Motor: −1.5).' },
        { move: '15.a3', text: '15...Bf5 16.Qd4 Be7 (−1.7).' },
      ],
    },
    '15b': {
      text: '15...Qf3!: vezir zayıf f3 karesine girer ve h1 kalesine saldırır.',
      amac: 'Beyazın kısa rokunu kesin olarak engellemek ve veziri Beyazın kampının kalbine yerleştirmek.',
      neden: '16.O-O?? Bh3! sonrası g2’de mat tehdidi karşılanamaz (motor 7 hamlede mat görür). Motor 15...Qf3’ü en iyi hamle olarak görür (−1.2). 15...Kg8 (−0.9) ya da 15...Be7 (−0.8) Beyaza 16.O-O-O ile uzun rok imkânı verir.',
      diger: [
        { move: '15...Kg8', text: '16.O-O-O Qf7 17.h3 b4 ile Beyaz şahını kurtarır (Motor: −0.9).' },
        { move: '15...Be7', text: '16.f3 Re8 17.O-O-O ile benzer (−0.8).' },
      ],
    },
    '16w': {
      text: '16.Rg1: kale g1’e gidip g2’yi korur; Beyaz kısa rok hakkını kaybeder.',
      amac: 'h1 kalesini kurtarmak ve Bh3-Qg2 fikirlerine karşı g2’yi korumak.',
      neden: '16.O-O?? Bh3 matla biter. 16.Rf1 (−1.3) da mümkündür ve f2’yi korur; 16.Kd2 şahı vezir kanadına götürmeye çalışır (−1.6). Motor üçünü yakın görür; asıl sorun Beyazın şahının artık hiçbir yere kaçamamasıdır.',
      diger: [
        { move: '16.Rf1', text: 'f2’yi korur; 16...a5 17.Ne2 Bf5 (Motor: −1.3).' },
        { move: '16.O-O', text: '16...Bh3! ve ...Qg2# tehdidi; motor matı görür.' },
        { move: '16.Kd2', text: 'Şah vezir kanadına; 16...Bg4 17.h3 Qxf2+ (−1.6).' },
      ],
    },
    '16b': {
      text: '16...Bg4: fil g4’e gelip f3 vezirini destekler.',
      amac: 'Vezirin f3’ten kovalanmasını önlemek; fil aynı zamanda d1 ve e2 karelerini kontrol edip Beyazın şahını kısıtlar.',
      neden: 'Motor en iyi hamle olarak görür (−1.35). Vezir ve fil birbirini korur; Beyaz Qe2 ile vezir değişimi önerse bile 17.Qe2 d4! sonrası Siyah üstün kalır. 16...h5 ...h4 ile g3’e vurmayı hedefler (−1.1).',
      diger: [
        { move: '16...h5', text: '17.Ne2 Rh6 18.Nd4 Qe4 ile h-piyonu oyunu (Motor: −1.1).' },
        { move: '16...a5', text: 'Vezir kanadında yer; 17.Rc1 h5 (−0.8).' },
      ],
    },
    '17w': {
      text: '17.a3: Beyaz ...Bb4 bağlamasını önler ve b4’ü hazırlar.',
      amac: 'c3 atının f8 fili tarafından şaha bağlanmasını engellemek; ileride b4 ile vezir kanadında oyun kurmak.',
      neden: 'Motor en iyi hamle olarak görür (−1.3). 17.Qe2 vezir değişimi önerir ama 17...d4! 18.Qxf3+ Bxf3 sonrası Siyah oyunsonunda üstün (−1.4). 17.Rc1 de aynı değerde (−1.4).',
      diger: [
        { move: '17.Qe2', text: '17...d4 18.Qxf3+ Bxf3 19.exd4 sonrası Siyahın fili güçlü (Motor: −1.4).' },
        { move: '17.Rc1', text: '17...Re8 18.h3 Bxh3 (−1.4).' },
      ],
    },
    '17b': {
      text: '17...Re8: kale e-hattına gelir.',
      amac: 'e-hattını almak ve e3 piyonunu e1’deki şaha bağlamak; ...Rxe3+ fikirlerini hazırlamak.',
      neden: 'Kalenin en doğal karesidir (Motor: −1.35). 17...c5? 18.Qxd5+ ile d5 piyonunu kaybettirir; 17...h5 de iyi (−1.3).',
      diger: [
        { move: '17...h5', text: '18.Ne2 Rh6 19.Nd4 Qe4 (Motor: −1.3).' },
        { move: '17...c5', text: '18.Qxd5+ Qxd5 19.Nxd5 ile Beyaz piyonu geri alır (−1.0).' },
      ],
    },
    '18w': {
      text: '18.Rc1?: kale c-hattına gelir ve c3 atını korur.',
      amac: 'c-hattını almak ve c6 piyonuna baskı kurmak; aynı zamanda c3 atını korumak.',
      neden: 'Motor bu hamleyi hata olarak görür (−2.1); The Week in Chess de 18.Rc1’i soru işaretiyle gösterir. 18.b4! ile Siyahın b5 piyonunu sabitleyip ...b4’ü önlemek (−1.0), ya da 18.Nb1 ve Nd2 ile f3 vezirini kovalamak (−1.2) daha iyiydi.',
      diger: [
        { move: '18.b4', text: '18...a5 19.h3 Bxh3 20.g4 ile vezir kanadı kapalı kalır (Motor: −1.0).' },
        { move: '18.Nb1', text: '18...Bf5 19.Qd4 h5 20.Nd2 Qg4 ile at f3 vezirini kovar (−1.2).' },
      ],
    },
    '18b': {
      text: '18...b4!: Siyah vezir kanadında hatları açar ve c3 atını sorgular.',
      amac: 'axb4 sonrası Bxb4 ile c3 atını e1’deki şaha bağlamak; b-hattını açmak.',
      neden: 'Motor en iyi hamle olarak görür (−1.65). 18...Bd6 (−1.6) de iyi ama ...b4 daha zorlayıcıdır: 19.Nb1 bxa3 ya da 19.Ne2 bxa3 Beyazın vezir kanadını parçalar.',
      diger: [
        { move: '18...Bd6', text: '19.Nb1 c5 20.Nd2 Qf5 (Motor: −1.6).' },
        { move: '18...Kg8', text: '19.b4 a5 sonrası Beyaz vezir kanadını kapatır (−1.0).' },
      ],
    },
    '19w': {
      text: '19.axb4: Beyaz b4’te alır.',
      amac: 'Materyali korumak ve a-hattını açmak.',
      neden: 'Diğer hamleler daha kötü: 19.Nb1 bxa3 (−2.2), 19.Ne2 bxa3 (−2.4). axb4 bağlamaya izin verir ama en az zararlı seçenektir.',
      diger: [
        { move: '19.Nb1', text: '19...bxa3 20.Bc3 Kg8 ile Siyahın a-piyonu güçlü (Motor: −2.2).' },
      ],
    },
    '19b': {
      text: '19...Bxb4: fil b4’e gelir ve c3 atını e1 şahına bağlar.',
      amac: 'Bağlama: c3 atı artık hareket edemez, d5 ve e4 karelerini savunamaz. Re8 de e3 piyonunu aynı şaha bağlıyor.',
      neden: 'Motor en iyi hamle olarak görür (−1.5). 19...Re6 (−0.6) ya da 19...h5 (−0.5) Beyaza nefes aldırırdı.',
      diger: [
        { move: '19...Re6', text: '20.h3 Bxh3 21.g4 sonrası Beyaz karşı oyun bulur (Motor: −0.6).' },
      ],
    },
    '20w': {
      text: '20.h3: Beyaz g4 filine saldırır.',
      amac: 'Fili g4’ten kovup f3 vezirini desteksiz bırakmak; ardından g4 ile fili hapsetmek.',
      neden: 'Motor bunu tek iyi hamle olarak görür (−1.6). Pasif hamleler daha kötü: 20.Rc2 Rhf8 21.h3 (−3.6), 20.Rd1 (−4.0) Siyaha f2’ye karşı saldırı imkânı verir. Beyaz kendi şahının önündeki piyonları hareket ettirmek zorunda kalır.',
      diger: [
        { move: '20.Rc2', text: '20...Rhf8 ile f2 baskı altında (Motor: −3.6).' },
        { move: '20.Rd1', text: '20...Rhf8 21.Rd2 Kg8 (−4.0).' },
      ],
    },
    '20b': {
      text: '20...Bxh3: fil h3 piyonunu alır.',
      amac: 'Bir piyon kazanmak ve filin g4’e geri dönmesi için yol açmak.',
      neden: 'Motor üç fil hamlesini eşit görür (−1.6). 20...Bd7 ve 20...Be6 fili güvenli kareye çeker; 20...Bxh3 ise piyonu alır ve 21.g4 sonrası g4’ü de alma imkânı yaratır.',
      diger: [
        { move: '20...Bd7', text: '21.Qe2 Qf6 22.Kd1 ile Beyaz vezirleri değiştirmeye yaklaşır (Motor: −1.65).' },
        { move: '20...Be6', text: '21.g4 Qxh3 (−1.6).' },
      ],
    },
    '21w': {
      text: '21.g4: Beyaz h3 filinin önünü kesmeye çalışır.',
      amac: 'h3 filini oyun dışına itmek ya da tuzağa düşürmek; vezir ve fil arasındaki bağı koparmak.',
      neden: 'ChessBase bunu “online blitz oyunlarında görülen türden bir çaresizlik” olarak yorumlar. Motor ise 21.g4’ü en iyi hamle olarak görür (−1.6): 21.Qe2 Bg4 22.Qxf3+ Bxf3 (−2.7) ve 21.Ba1 (−3.6) daha kötüdür. Yani Beyaz zaten kötü durumdaydı ve en iyi deneme bile bir piyon daha veriyor.',
      diger: [
        { move: '21.Qe2', text: '21...Bg4 22.Qxf3+ Bxf3 ile kötü bir oyunsonu (Motor: −2.7 – −3.0).' },
        { move: '21.Ba1', text: '21...Bg4 22.Kf1 Re7 (−3.6).' },
      ],
    },
    '21b': {
      text: '21...Bxg4: fil g4 piyonunu da alır; f3 veziri g4’ü koruduğu için fil kaybolmaz.',
      amac: 'İkinci piyonu almak ve vezir-fil bağını yeniden kurmak.',
      neden: '21...Bg2 de güçlüdür (−1.8): 22.Qf5+ Kg8 23.Qxf3 Bxf3 ile Siyah üstün bir oyunsonuna geçer. 21...Bxg4 daha basit; Siyah iki piyon öne geçer (−1.3). 21...Qf6 ise fili tehlikede bırakır (−0.5).',
      diger: [
        { move: '21...Bg2', text: '22.Qf5+ Kg8 23.Qxf3 Bxf3 ile oyunsonu (Motor: −1.8).' },
        { move: '21...Qf6', text: '22.Rg3 h5 23.Rxh3 ile fil kaybolur gibi olur (−0.5).' },
      ],
    },
    '22w': {
      text: '22.Rg3: kale g3’e gelip f3 vezirine saldırır.',
      amac: 'Veziri f3’ten kovmak ve g4 filini desteksiz bırakmak.',
      neden: 'Motor tek iyi hamle olarak görür (−1.3). 22.Ra1 (−2.8) ve 22.Kf1 Qh3+ (−3.4) daha kötüdür. Beyaz vezir değişimine yol açabilecek tek aktif hamleyi oynar.',
      diger: [
        { move: '22.Kf1', text: '22...Qh3+ 23.Ke1 Rhf8 ile şah açık kalır (Motor: −3.4).' },
      ],
    },
    '22b': {
      text: '22...Qf5: vezir f5’e çekilir ve g4 filini korumaya devam eder.',
      amac: 'g4 filini korumak; vezir değişimi olursa iki piyon fazlasıyla üstün bir oyunsonuna geçmek.',
      neden: 'Motor en iyi hamle olarak görür (−1.6). 22...Qe4? 23.Qxe4 Rxe4 sonrası avantajın çoğu gider (−0.3); 22...Qf4? 23.Kf1 ise tamamen eşittir (0.00). e3 piyonu Re8 tarafından bağlı olduğu için 22...Qf4’ü exf4 ile almak kuraldışıdır, ama Beyaz Kf1 ile bağlamadan kurtulur.',
      diger: [
        { move: '22...Qe4', text: '23.Qxe4 Rxe4 24.Kf1 Bxc3 25.Bxc3 (Motor: −0.3).' },
        { move: '22...Qf4', text: '23.Kf1 Qg5 24.Qd4 ile Beyaz kurtulur (0.00).' },
      ],
    },
    '23w': {
      text: '23.Qd4: vezir d4’ten dördüncü yatay boyunca b4 ve g4 fillerine, ayrıca g7’ye bakar.',
      amac: 'Korumasız b4 filini almak ve g4 filine baskı yapmak; vezir değişiminden kaçmak.',
      neden: 'Motor 23.Qxf5+ Bxf5 24.Kf1 ile vezir değişimini önerir (−1.6); 23.Qd4 sonrası −2.15. Anand değişimi reddederek kazanma şansı arıyor, ama vezir yalnız kalıyor. 23.e4? de mümkündür (piyon e-hattında kalır), ama 23...Re6 sonrası −3.5.',
      diger: [
        { move: '23.Qxf5+', text: '23...Bxf5 24.Kf1 Bd6 25.Rf3 ile iki piyon eksik ama savunulabilir (Motor: −1.6).' },
        { move: '23.e4', text: '23...Re6 24.f3 dxe4 (−3.5).' },
      ],
    },
    '23b': {
      text: '23...Re4!: kale vezire saldırır ve dördüncü yatayı kapatır.',
      amac: 'İki fili birden korumak: kale e4’te hem b4’ü hem g4’ü yatay boyunca destekler ve vezire saldırır.',
      neden: 'Motor en iyi hamle olarak görür (−2.35). 23...c5? 24.Qxg4 Qxg4 25.Rxg4 d4 ile eşitliğe gider (+0.1); 23...h5?? 24.Qxb4 ile taş kaybettirir (+2.2).',
      diger: [
        { move: '23...c5', text: '24.Qxg4 Qxg4 25.Rxg4 d4 ile eşitlik (Motor: +0.1).' },
        { move: '23...h5', text: '24.Qxb4 Rhf8 25.Ne2 ile Beyaz taş kazanır (+2.2).' },
      ],
    },
    '24w': {
      text: '24.Qa7+: vezir a7’ye şah çekerek kaçar.',
      amac: 'Vezirin saldırıdan tempo kazanarak kaçması ve Siyahın kampına girmesi.',
      neden: 'Motor 24.Qd3 Qh5’i (−2.2) ve 24.Qa7+’yı (−2.3) eşit görür. 24.Qb6 (−3.2) daha kötüdür. Şah çekmek en doğal seçimdir ama vezir Siyahın kampında daha da yalnızlaşır.',
      diger: [
        { move: '24.Qd3', text: '24...Qh5 25.f3 Bxf3 26.Kf2 (Motor: −2.2).' },
        { move: '24.Qb6', text: '24...Rf8 25.Kf1 Bxc3 (−3.2).' },
      ],
    },
    '24b': {
      text: '24...Qd7: Siyah veziri d7’ye koyar ve değişim önerir.',
      amac: 'Şahı korumak ve vezir değişimi önermek: değişim olursa iki piyon fazlasıyla kolayca kazanılan bir oyunsonu.',
      neden: 'Motor en iyi hamle olarak görür (−2.2). 24...Re7 (−2.0) de mümkün, ama 24...Ke8? (−0.6) 25.Kf1 Bxc3 26.Bxc3 sonrası Beyazın taşları serbest kalır.',
      diger: [
        { move: '24...Re7', text: '25.Qd4 Re4 26.Qd3 Rf8 (Motor: −2.0).' },
        { move: '24...Ke8', text: '25.Kf1 Bxc3 26.Bxc3 Rf8 (−0.6).' },
      ],
    },
    '25w': {
      text: '25.Qb6?: vezir değişiminden kaçar ve b4 filine bakar.',
      amac: 'Vezirleri tahtada tutup karşı oyun aramak; b4 filine ve c6 piyonuna baskı yapmak.',
      neden: 'The Week in Chess ve motor bu hamleyi hata olarak görür. Motor 25.Qxd7+ Bxd7 26.Kf1 ile oyunsonunu önerir (−2.3); 25.Qb6 sonrası −3.8. Vezir Siyahın kampında tek başına kalır ve ...c5 ile dönüş yolları kapanır.',
      diger: [
        { move: '25.Qxd7+', text: '25...Bxd7 26.Kf1 Rh4 27.Ne2 ile iki piyon eksik ama vezirsiz (Motor: −2.3).' },
        { move: '25.Rf3+', text: '25...Ke7 26.Qxd7+ Bxd7 27.Kf1 (−2.65 – −3.0).' },
        { move: '25.Qxa6', text: '25...h5 26.Kf1 Re7 (−3.1 – −3.5).' },
      ],
    },
    '25b': {
      text: '25...c5!: Beyazın b6’daki vezirinin dönüş yolu kesilir; ...Re6 ile vezir hapsi tehdidi doğar.',
      amac: 'Veziri tuzağa düşürmek: c5 piyonu d4 ve c5 karelerini kapatır, ...Re6 ile vezire saldırılır ve vezirin güvenli karesi kalmaz.',
      neden: 'Motor en iyi hamle olarak görür (−4.4). c3 atı Bb4 tarafından bağlı olduğu için d5’i alamaz. 26.Qxa6 d4 27.Kf1 dxc3 (−4.4) ya da 26.Kf1 Re6 27.Nxd5 Rxb6 28.Nxb6 Qe6 (−4.9) Beyaz için çaresizdir. Anand terk etti.',
      diger: [
        { move: '25...Rhe8', text: '26.Kf1 Bh3+ 27.Ke2 Rh4 ile Siyah üstün ama daha yavaş (Motor: −2.9).' },
        { move: '25...h5', text: '26.Kf1 Bxc3 27.Bxc3 h4 (−2.9).' },
      ],
    },
  },
  sources: [
    { title: 'ChessBase: Kramnik wins Tal Memorial 2009, Carlsen number one (9. tur raporu, M. Humphreys’in notları)', url: 'https://en.chessbase.com/post/kramnik-wins-tal-memorial-2009-carlsen-number-one' },
    { title: 'The Week in Chess: Tal Memorial 2009 (9) – Kramnik deserved winner in day of slapdash chess', url: 'https://theweekinchess.com/chessnews/events/tal-memorial-2009/kramnik-deserved-winner-in-day-of-slapdash-chess' },
    { title: 'Chess.com: Kramnik wins Tal Memorial', url: 'https://www.chess.com/news/view/kramnik-wins-tal-memorial' },
    { title: 'Business Standard: satranç köşesi (Anand – Aronian, Tal 2009 diyagramı)', url: 'https://www.business-standard.com/article/beyond-business/chess-614-109112100015_1.html' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
    { title: 'Chess.com: Review – The Chebanenko Slav according to Bologan', url: 'https://www.chess.com/news/view/review-the-chebanenko-slav-according-to-bologan' },
  ],
  exercises: [
    { id: 'aar-1', kind: 'tekrar', plan: false, title: 'Vezir kaçarken fili korumak',
      source: 'Anand – Aronian, Moskova 2009 (22. hamle)',
      fen: '4r2r/5kpp/p1p5/3p4/1b4b1/1PNQPqR1/1B3P2/2R1K3 b - - 1 22',
      prompt: 'Siyah iki piyon fazla. Beyazın kalesi g3’ten f3 vezirine saldırıyor ve g4 fili yalnızca vezirle korunuyor. Vezir nereye gitmeli?',
      hint: 'Vezir hem g4 filini korumalı hem de vezir değişimine zorlanmamalı.',
      line: ['Qf5', 'Qd4', 'Re4'],
      explanation: '**22...Qf5!** Vezir g4 filini korumayı sürdürür ve vezirler tahtada kalır. 23.Qd4 sonrası **23...Re4!** vezire saldırır ve dördüncü yatayı kapatır. Motor: ...Qf5 −1.6, sonraki en iyi ...Qe4 −0.4; 23.Qd4 sonrası ...Re4 −2.2, 23...c5? +0.0 (24.Qxg4).',
      link: 'Siyahın vezir ve fili beyaz karelerde birbirini koruyor; bu bağ bozulmadıkça Beyazın şahı merkezde rahat edemez.' },
    { id: 'aar-2', kind: 'tekrar', plan: false, title: 'Vezir tuzağı',
      source: 'Anand – Aronian, Moskova 2009 (25. hamle)',
      fen: '7r/3q1kpp/pQp5/3p4/1b2r1b1/1PN1P1R1/1B3P2/2R1K3 b - - 7 25',
      prompt: 'Beyaz vezir değişiminden kaçıp veziri b6’ya getirdi. Beyazın veziri Siyahın kampında yalnız. Siyah bunu nasıl cezalandırır?',
      hint: 'Bir piyon hamlesi vezirin geri dönüş yolunu kapatabilir ve altıncı yatayı kaleye açabilir.',
      line: ['c5'],
      explanation: '**25...c5!** b6 vezirinin d4 ve c5’e dönüşü kapanır, altıncı yatay açılır. 26.Kf1 Re6 27.Nxd5 Rxb6 sonrası Siyah kale karşılığında vezir kazanır (−4.9); ...d4 ile merkez de açılacak. Motor: ...c5 −4.5, sonraki en iyi ...Rhe8 −2.9. Anand terk etti.',
      link: 'Merkezdeki şaha karşı yürüyen saldırı bitişte de aynı fikirle sonuçlandı: Siyahın piyonu ve kalesi Beyazın tek başına kalan taşını avladı.' },
    { id: 'aar-3', kind: 'transfer', plan: false, title: 'Vezir f3’e',
      source: 'Ivanchuk – Bacrot, Avrupa Takımlar Şampiyonası, Girit 2007 (25. hamle)',
      fen: 'r7/6Bp/pQpk2p1/5q2/8/3n2P1/PP3n1P/R5KR b - - 2 25',
      prompt: 'Yine bir Chebanenko oyunu: ...e5 ve ...Nxc5 sonrası Beyazın şahı rok yapamadı ve elle g1’e gitti. Siyahın şahı d6’da açık ama iki atı f2 ve d3’te. Hamle sizde.',
      hint: 'Vezir, Aronian’ın oyunundaki gibi zayıf beyaz bir kareye girip h1 kalesine bakabilir.',
      line: ['Qf3', 'Qd4+', 'Kc7'],
      explanation: '**25...Qf3!** ...Qxh1# ve ...Nh3# tehditleri karşılanamaz. Oyunda 26.Qd4+ sonrası **26...Kc7!** doğru kaçıştır (26...Ke7? −0.5). Motor: ...Qf3 mat buluyor, sonraki en iyi ...Re8 −2.4.',
      link: 'Aronian da 15...Qf3 ile veziri g3 piyonunun önündeki zayıf kareye yerleştirip h1 kalesine saldırmış ve Beyazın rokunu engellemişti.' },
    { id: 'aar-4', kind: 'transfer', plan: false, title: 'c5 zincirini çözmek',
      source: 'Ljubojevic – Hodgson, Hollanda Takımlar Ligi 1995/96 (17. hamle)',
      fen: '1n1qr1k1/rp1nbbpp/p1p5/2PpN3/6B1/2N1P1B1/PP3PPP/R2QK2R b KQ - 0 17',
      prompt: 'Chebanenko’da Beyaz yine c5 ile zinciri kilitledi; Siyah ...e5 ile d4’ü değişti. Şimdi e5’te bir beyaz at var ve c5 piyonu desteksiz. Siyah hangi taşla başlamalı?',
      hint: 'c5’i hemen almak f7’de bir kombinasyona izin verir. Önce e5’teki atı değişin.',
      line: ['Nxe5', 'Bxe5', 'Bxc5'],
      explanation: '**17...Nxe5! 18.Bxe5 Bxc5** ve zincirin ucu düşer. 17...Nxc5? 18.Nxf7! Kxf7 sonrası Beyaz üstün (+1.4). Motor: ...Nxe5 −0.2, sonraki en iyi ...Nxc5 +1.4; 18.Bxe5 sonrası ...Bxc5 −0.3, ...Ra8 +1.0.',
      link: 'Aronian’ın oyununda da ...e5 kırılmasından sonra at e5’te değişildi ve c5 piyonu desteksiz kalıp düştü.' },
  ],
};
