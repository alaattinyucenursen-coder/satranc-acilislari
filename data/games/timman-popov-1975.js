// Timman – Popov, Hoogovens turnuvası, Wijk aan Zee 1975 (7. tur). Kaynak: PgnMentor (Timman.pgn).
export default {
  id: 'timman-popov-1975',
  theme: 'Taktik fırsatı beklemek: ...Nc2 çatalı ve ...Rxe3 fedası',
  white: 'Jan Timman', black: 'Luben Popov',
  whiteShort: 'Timman', blackShort: 'Popov',
  event: 'Hoogovens turnuvası', site: 'Wijk aan Zee', year: 1975, eco: 'B40',
  variation: 'Sicilya Savunması, 2.Nf3 e6 3.Nc3 a6 4.g3 (g3-Bg2 kuruluşu)', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. Nc3 a6 4. g3 d6 5. Bg2 Nf6 6. O-O Be7 7. e5 dxe5 8. Nxe5 Nbd7 9. Nc4 Nb6 10. b3 Nbd5 11. a4 b6 12. Nxd5 Nxd5 13. Bb2 f6 14. Qh5+ g6 15. Qe2 O-O 16. a5 b5 17. Nb6 Ra7 18. Nxc8 Qxc8 19. Rfe1 Kf7 20. c4 bxc4 21. bxc4 Nb4 22. d4 Nc6 23. d5 exd5 24. Bxd5+ Kg7 25. Qe4 Nb4 26. Ra3 Bd6 27. Rae3 Qd8 28. Qf3 Nc2 29. Rd1 Nxe3 30. Qxe3 Re7 31. Qd2 Be5 32. Bc1 Bd4 33. Qh6+ Kh8 34. Bf3 Rfe8 35. Bd2 Qc8 36. Kg2 Qf5 37. h4 Qc2 38. h5 g5 39. Be3 Rxe3 40. Rxd4 Rxf3 41. Kxf3 Qf5+ 0-1`,

  summary: 'Siyah kazandı: turnuvayı son sırada bitiren Bulgar usta Luben Popov, yeni grandmaster olmuş Jan Timman’ı yendi. Bu oyun, kötü bir pozisyonda sabırla savunup doğru anda taktik vurmanın örneğidir. Açılışta 6...Be7 biraz pasifti; Timman 7.e5! ile merkezi açtı. 12...Nxd5? (12...exd5 daha iyiydi) iki uzun çaprazı Beyaza bıraktı ve Siyah 13...f6 ile şah kanadını zayıflatmak zorunda kaldı. Nb6xc8 ile fil çiftini alan, c4 ve d4-d5 ile merkezi kıran Beyaz uzun süre +1.5 ile +2.4 arasında üstündü. Popov ise atını b4’te tuttu: oradan hem d5 filine hem de **c2 karesine** bakıyordu. Timman 28.Qf3? ile 29.Re8 tehdidi kurarken vezirin c2’yi koruma görevini unuttu ve **28...Nc2!** iki kaleye çatal attı. Siyah kalite kazandı, kara kareli filini sökülemez d4 karesine yerleştirdi ve veziriyle c2’ye sızdı. Timman şah saldırısı umuduyla 38.h5? oynadı; **38...g5!** h6’daki veziri oyun dışında bıraktı, 39.Be3?? ise **39...Rxe3! 40.Rxd4 Rxf3!** ile bir kale kaybettirdi (f2 piyonu c2’deki vezir yüzünden açmazdaydı).',
  intro: 'Oyun 1.e4 c5 2.Nf3 e6 3.Nc3 a6 4.g3 sırasıyla başladı; modülün 2.Nc3 e6 3.g3 a6 sırası değil, ama 5.Bg2’den sonra aynı yapıya varıldı: Beyazda Nc3, g3, Bg2; Siyahta ...e6 ve ...a6. Bu yapıda Siyahın klasik planı ...b5, ...Bb7 ile e4’e baskı yapmak ve uygun anda ...d5 kırılmasını hazırlamaktır; Beyaz ise d3 ile kapalı oynayabilir ya da d4 ile Açık Sicilya’ya dönebilir. Popov ...d6, ...Nf6, ...Be7 ile Scheveningen tipi bir kuruluş seçti; bu, ...Nc6 olmadan biraz yavaş kaldı ve Timman 7.e5! ile merkezi açıp g2 filinin uzun çaprazını devreye soktu. Turnuva bağlamı: Hoogovens 1975’i Portisch 10.5/15 ile kazandı; Timman 8 puanla ortalarda, Popov 3.5 puanla son sırada bitirdi — bu galibiyet Popov’un turnuvadaki en değerli sonucuydu. Oyunun asıl dersi orta oyundadır: kötü pozisyonda olan taraf, taşlarını rakibin zayıf karelerine (burada c2) bakan yerlerde tutarsa, tek bir gevşek hamle tüm dengeyi değiştirebilir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '7.e5 ile merkezi erken açmak: Siyah ...Nc6 oynamadığı için e5 piyonu rahatça değişilir ve g2 filinin a8’e uzanan çaprazı açılır.',
      'Atı Nxe5-c4-b6 yoluyla Siyahın vezir kanadına sokmak; 18.Nxc8 ile Siyahın gelişmemiş beyaz kareli filini alıp fil çiftini kazanmak.',
      'b3, Bb2 ile ikinci uzun çaprazı kurmak; iki fil b2-g7 ve h1-a8 çaprazlarından Siyah şahı ve a8 kalesini hedefler, Siyahı 13...f6 ile zayıflamaya zorlar.',
      'a4-a5 ile Siyahın vezir kanadı piyonlarını sabitlemek, ardından c4 ve d4-d5 ile merkezi kırıp fili d5’e yerleştirmek (24.Bxd5+).',
      'Ra3-e3 manevrasıyla kaleleri e-hattında ikileyip Re8 tehdidi kurmak — ama bunu yaparken vezirin c2 karesini koruma görevini bırakmamak gerekirdi (28.Qf3? hatası).',
      'Kalite eksikken bile pozisyonu sağlam tutmak (Bc1-d2, Kg2) ve aceleci h4-h5 saldırısından kaçınmak; 38.h5? veziri h6’da hapsetti.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Açılışta ...a6, ...d6, ...Nf6, ...Be7 ile sağlam ama esnek bir Scheveningen yapısı kurmak; 7.e5’ten sonra merkezdeki piyonu değişip taşlarla dengeyi korumak.',
      '...b6, ...f6 ve ...g6 ile uzun çaprazları kapatmak; şahı önce f7’ye, sonra g7’ye getirip e6 piyonunu ve kara kareleri savunmak.',
      'Atı b4’e yerleştirmek: buradan d5 filine, a2, d3 ve özellikle **c2** karesine bakar; Beyazın her gevşek vezir hamlesini cezalandırmaya hazırdır.',
      '28...Nc2! çatalıyla kalite kazanmak, sonra kara kareli fili d4’e kurmak: Beyazın burayı bir piyonla kovalayacak c- veya e-piyonu yoktur, fil f2’ye baskı yapar.',
      'Kaleleri e-hattında ikileyip veziri ...Qc8-f5-c2 yoluyla Beyazın ikinci yatayına sokmak; c2’deki vezir f2’yi g2 şahına karşı açmaza alır.',
      'Beyazın şah saldırısına ...g5 ile set çekmek ve **...Rxe3** gibi kalite fedalarıyla savunan taşları ortadan kaldırmak.',
    ] },
  },
  critical: [
    { move: '7w', title: '7.e5! merkezi açmak', text: 'Siyah 6...Be7 ile ...Nc6’yı geciktirdiği için Beyaz merkezde hemen hareket eder. 7...dxe5 8.Nxe5 sonrasında g2 fili a8’e kadar uzanır, Siyahın c8 fili ...b6/...b5 oynamadan gelişemez. Motor: 7.e5 +0.56, 7.Re1 ise sadece +0.14. Siyahın kaçınacağı yol 6...Nc6’ydı (7.d4 ile +0.20).' },
    { move: '12b', title: '12...Nxd5? uzun çaprazları bırakmak', text: 'Motor 12...exd5’i öneriyor (+0.66): Siyah d5’te sağlam bir piyon tutar, h1-a8 çaprazı kapanır ve fil e6’ya gelişir. Maç hamlesinde ise 13.Bb2 ile iki fil birden Siyah şaha bakar; 13...O-O 14.Ne5! Bd6 15.c4 Nc7 16.Bxa8 kalite kaybettirir, bu yüzden Siyah 13...f6 ile şah kanadını zayıflatmak zorunda kalır (+1.60).' },
    { move: '21b', title: '21...Nb4: atın üssü', text: 'At b4’e gelir ve oyunun sonuna kadar Siyahın en önemli taşı olur. Buradan d5’e (daha sonra fil gelince ona), d3’e ve c2’ye bakar. Beyaz bu atı bir piyonla kovalayamaz: a- ve c-piyonları ileri geçmiştir. Motor: 21...Nb4 +1.90, 21...Nc7 ise +3.11. 28. hamlede c2 çatalı tam da bu kareden doğdu.' },
    { move: '23w', title: '23.d5: merkez kırılması', text: 'Timman d5 ile Siyahın e6 piyonunu söker; 23...exd5 24.Bxd5+ sonrasında fil d5’te Siyah şahı g8 ve f7 karelerinden keser, e-hattı açılır. Motor: 23.d5 +2.41, 23.Bh3 +1.89. Bu noktadan sonra Beyaz rahatça +2 civarında üstündür; Siyahın tek umudu b4 atının taktik imkânlarıdır.' },
    { move: '28w', title: '28.Qf3? c2 karesi korumasız kaldı', text: 'Timman’ın fikri anlaşılır: 28.Qf3 ile 29.Re8! tehdidi kurulur (Siyah boş geçse Motor: +5.45). Ama vezir e4’ten ayrılınca c2’yi korumayı bırakır ve b4 atı oraya atlar. Motor 28.h4’ü öneriyordu (+1.91; 28...Nc2? 29.Qxc2 artık mümkündür) ya da 28.Bc3 (+1.44). Maç hamlesinden sonra değerlendirme −0.64’e düşer: tek hamlede iki buçuk piyonluk fark.' },
    { move: '28b', title: '28...Nc2! hem savunma hem çatal', text: 'At c2’den e1 ve e3 kalelerine birlikte saldırır; aynı zamanda Re8 tehdidi de ortadan kalkar çünkü kalelerden biri mutlaka düşecektir. 29.Rd1 Nxe3 30.Qxe3 ile Siyah kalite kazanır. Motor: 28...Nc2 −0.71, ikinci en iyi 28...Nxd5 ise +2.13. Siyahın sabırla b4’te bekleyen atı burada ödülünü aldı.' },
    { move: '38b', title: '38...g5! vezir oyun dışında', text: '38.h5? hxg6 ile g-hattını açmayı amaçladı. Popov ...g5 ile piyonu ileri sürdü: artık h6’daki vezir c1-h6 çaprazından savunmaya dönemez, g5 piyonu onu f4 ve g5 karelerinden keser. Motor: 38...g5 −4.61, 38...gxh5 sadece −1.12. Beyaz vezir pratikte bir taş eksik oynuyor gibidir.' },
    { move: '39b', title: '39...Rxe3! ve 40...Rxf3! kombinezonu', text: '39.Be3?? fili korumasız bir kareye getirdi. Kritik ayrıntı: c2’deki Siyah vezir f2 piyonunu g2 şahına karşı açmaza almıştır, bu yüzden 40.fxe3 oynanamaz. 40.Rxd4 Rxf3! 41.Kxf3 sonrasında 41...Qc3+ ya da maçtaki 41...Qf5+ (42.Rf4 gxf4) d4 kalesini kazanır. Motor: 39...Rxe3 −9.6, 39...g4 ise yalnızca −1.15.' },
  ],
  lessons: [
    'Rakip ...Nc6’yı geciktirip ...d6, ...Be7 ile pasif kurulduğunda, g3-Bg2 sisteminde erken e4-e5 merkezi açar ve uzun çaprazı güçlendirir (7.e5!).',
    'Değişimlerde hangi taşla aldığınız yapıyı belirler: 12...exd5 çaprazı kapatırdı, 12...Nxd5? ise iki uzun çaprazı rakibe bıraktı.',
    'Kötü pozisyonda olan taraf taşlarını rakibin zayıf karelerine bakan üslerde tutmalıdır: b4 atı yedi hamle boyunca c2 çatalı için bekledi.',
    'Tehdit kurmadan önce taşın mevcut görevlerini sayın: 28.Qf3 Re8 tehdidi kurdu ama c2’yi korumayı bıraktı.',
    'Piyonla kovalanamayan merkez karesindeki fil (d4) kaliteden bile değerli olabilir; f2 gibi zayıf noktalara sürekli baskı yapar.',
    'Rakibin veziri uzak bir köşedeyse, tek bir piyon hamlesi (...g5) onu oyundan çıkarabilir; aceleci kanat saldırıları (38.h5?) bu tuzağa düşürür.',
    'Kombinezon hesaplarken açmazları kontrol edin: c2’deki vezir f2’yi açmaza aldığı için 39...Rxe3’e 40.fxe3 cevabı yoktu.',
  ],
  qa: [
    { q: 'Beyazın açılıştaki avantajı tam olarak nereden geldi?', a: 'İki kaynaktan: 6...Be7 ...Nc6 olmadan biraz yavaştı ve 7.e5! ile merkez açıldı (Motor: +0.56); asıl fark ise 12...Nxd5? ile oluştu. Bu alış iki uzun çaprazı (b2-g7 ve h1-a8) Beyaza bıraktı, Siyah 13...f6 ve 14...g6 ile şah kanadını zayıflatmak zorunda kaldı (Motor: +1.60). Ardından 17.Nb6 ve 18.Nxc8 ile Beyaz fil çiftini aldı.' },
    { q: 'Siyah neden 13...f6 oynamak zorunda kaldı, rok yapamaz mıydı?', a: '13...O-O’ya 14.Ne5! gelir: at c6 karesine ve uzun çaprazdaki a8 kalesine baskı yapar. Motor 14...Bd6 15.c4 Nc7 16.Bxa8 Nxa8 ile Beyazın kalite kazandığını gösteriyor (+2.27). 13...f6 e5 karesini ve b2-g7 çaprazını kapatır ama e6 piyonu ve şahın önü zayıflar.' },
    { q: 'Popov’un atı neden b4’te bu kadar uzun kaldı?', a: 'b4 karesi Beyaz piyonlarla saldırılamayan bir üstür: a-piyonu a5’e, c-piyonu c4’e gitmiştir. At buradan d5’teki güçlü file, d3’e ve c2’ye bakar. Beyaz veziri e4’te c2’yi koruduğu sürece at sadece bekler; 28.Qf3? ile koruma kalkınca 28...Nc2! tek hamlede kalite kazandırdı.' },
    { q: 'Timman 28.Qf3 ile ne istiyordu, yerine ne oynamalıydı?', a: 'Qf3, f6 piyonuna baskıyı artırır ve 29.Re8! tehdidi kurar: Siyah hiçbir şey yapmasa Motor +5.45 gösteriyor. Ama vezir c2’yi korumayı bıraktı. 28.h4! (Motor: +1.91) hem şah kanadında yer kazanır hem de veziri e4’te tutar; 28...Nc2? artık 29.Qxc2 ile taş kaybettirir. 28.Bc3 (+1.44) ile b4 atına doğrudan karşı çıkmak da iyiydi.' },
    { q: 'Kalite kaybından sonra Beyaz kurtulabilir miydi?', a: 'Evet, oyun hâlâ savunulabilirdi. 29.Bc3 Nxe3 30.Rxe3 (Motor: −0.66) e-hattını tutardı; maçtaki 29.Rd1 −1.18 idi. Sonra 32.Bxe5 fxe5 ile güçlü Siyah fili değişmek (−1.01) 32.Bc1’den iyiydi, çünkü fil d4’e yerleşince Siyah çok aktifleşti. Asıl kaybettiren hamleler 38.h5? (38.Qf4 ile −2.00) ve 39.Be3?? oldu.' },
    { q: 'Siyah neden 32...Bd4 ile file bu kadar önem verdi?', a: 'd4 karesi Beyazın hiçbir piyonu tarafından kovalanamaz (d- ve e-piyonları yok, c-piyonu c4’te). Fil buradan f2’ye baskı yapar, e3 ve c3 karelerini kontrol eder ve şahın etrafında kalelerin hareketini kısıtlar. Beyaz bu fili ancak bir taşla değişebilir; 39.Be3?? da bu denemeydi ama taktik olarak çöktü.' },
    { q: '38.h5 neden hataydı?', a: 'Timman 39.hxg6 ile g-hattını açıp h6’daki veziriyle mat saldırısı umuyordu. Ama 38...g5! piyonu kilitledi: vezir artık c1-h6 çaprazında geri dönemez ve tek başına bir şey yapamaz. Motor: 38.h5 −4.25, 38.Qf4! −2.00 (veziri merkeze geri getirir, 38...g5 39.hxg5 fxg5 40.Qxg5 ile piyon da alır).' },
    { q: '39...Rxe3’ten sonra Beyaz neden 40.fxe3 oynayamadı?', a: 'Çünkü 37...Qc2 ile Siyah vezir ikinci yataya yerleşmişti: f2 piyonu bu vezir ile g2 şahı arasında açmazdadır, f2xe3 kural dışı bir hamledir. Beyaz 40.Rxd4 oynadı ve 40...Rxf3! 41.Kxf3 sonrasında 41...Qf5+ 42.Rf4 gxf4 (ya da 41...Qc3+ ile Qxd4) d4 kalesi düşer.' },
    { q: 'Siyah açılışta nasıl daha rahat oynayabilirdi?', a: 'Motor 6...Nc6’yı öneriyor (+0.12): at e5 karesini kontrol eder ve 7.e5 fikrini önler; 7.d4 cxd4 8.Nxd4 ile normal bir Açık Sicilya yapısı oluşur. Ayrıca 8...Ra7!? (+0.25) a8 kalesini g2 filinin çaprazından çekip ...b6/...b5 hazırlıyordu; 8...Nbd7 (+0.75) Beyazın atına c4 ve b6 yolunu açtı.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Beyaz şah piyonunu iki kare ilerletir; d5 ve f5 karelerini kontrol eder, fil ve vezire yol açar.',
      amac: 'Merkezde hemen yer almak ve hızlı gelişmek.',
      neden: 'Timman geniş bir repertuvarla oynardı ama 1.e4 en doğrudan başlangıçtır; Sicilya’ya karşı hem Açık hem Kapalı sistemleri seçme imkânı verir.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; daha konumsal oyun. Motor: +0.17.' },
        { move: '1.Nf3', text: 'Esnek başlangıç, sonradan c4 veya e4’e dönülebilir. Motor: +0.16.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine kanattan baskı yapar.',
      amac: 'Simetrik olmayan, iki tarafın da kazanmak için oynadığı bir oyun kurmak.',
      neden: 'Popov Siyahla dengesiz pozisyonları severdi; ...c5, Beyazın d4 ile merkezi kurmasını zorlaştırır ve d-hattı açılırsa Siyaha merkezde fazla bir piyon kalır.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; daha simetrik. Motor: +0.23.' },
        { move: '1...e6', text: 'Fransız Savunması; Siyah d5 ile merkezi zorlar. Motor: +0.35.' },
      ],
    },
    '2w': {
      text: '2.Nf3: At gelişir, d4 ve e5 karelerini kontrol eder.',
      amac: 'd4 kırılmasına hazırlanırken seçenekleri açık tutmak.',
      neden: 'En yaygın ve esnek hamle: Siyahın ikinci hamlesine göre d4 ile Açık Sicilya’ya ya da bu oyundaki gibi Nc3-g3 ile kapalı kuruluşa geçilebilir. Modülün 2.Nc3 sırası ise f-piyonunu serbest bırakır.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya (modülün sırası); Beyaz g3, Bg2, d3 ve f4 planını düşünür. Motor: +0.34.' },
        { move: '2.c3', text: 'Alapin: Beyaz d4’ü piyonla destekler. Motor: +0.33.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini kontrol eder ve f8 filine yol açar.',
      amac: 'Kan/Paulsen ya da Scheveningen tipi esnek bir yapı hazırlamak.',
      neden: '...e6, ...d5 kırılmasını mümkün kılar ve Beyazın Bb5 gibi sinir bozucu sistemlerini daha az etkili yapar. Siyah henüz atlarının yerini belli etmez.',
      diger: [
        { move: '2...Nc6', text: 'Klasik gelişme; 3.Bb5 Rossolimo’ya izin verir. Motor: +0.33.' },
        { move: '2...d6', text: 'Najdorf/Dragon yolu. Motor: +0.47.' },
      ],
    },
    '3w': {
      text: '3.Nc3: İkinci at gelişir, e4 ve d5 karelerini destekler.',
      amac: 'd4’ü hemen oynamadan kapalı bir kuruluşu da elde tutmak.',
      neden: 'Açık Sicilya’nın Kan ve Taimanov teorisinden kaçınmak isteyen Beyaz, Nc3 sonrası g3 ile yavaş ama sağlam bir sistem kurabilir. Bu sıra, modüldeki 2.Nc3 e6 3.g3 a6 kuruluşuna aktarılabilir.',
      diger: [
        { move: '3.d4', text: 'Açık Sicilya: 3...cxd4 4.Nxd4 ile Kan veya Taimanov. Motor: +0.34.' },
        { move: '3.c3', text: 'Alapin’e dönüş; 3...d5 ile Siyah merkezi açar. Motor: +0.28.' },
      ],
    },
    '3b': {
      text: '3...a6: Siyah b5 karesini hazırlar ve Beyazın Nb5 ya da Bb5 hamlelerini önler.',
      amac: '...b5 ve ...Bb7 ile vezir kanadında genişleyip e4’e baskı yapmak.',
      neden: 'g3-Bg2 kuruluşuna karşı ...a6-...b5 doğal bir cevaptır: Siyah fili b7’ye getirip g2 filine karşı uzun çaprazda durur, ...b4 ile c3 atını kovalayabilir. Motorun bu konumdaki ana devamı da 4.g3 b5 5.Bg2 Bb7’dir.',
      diger: [
        { move: '3...Nc6', text: 'Taimanov tipi gelişme. Motor: +0.37.' },
        { move: '3...d6', text: 'Scheveningen; 4.d4 cxd4 5.Nxd4 ile Açık Sicilya. Motor: +0.66.' },
      ],
    },
    '4w': {
      text: '4.g3: Beyaz şah filini g2’ye fianketolamaya hazırlanır.',
      amac: 'Modülün yapısını kurmak: Nc3, g3, Bg2 ve rok; fil uzun çaprazdan e4’ü destekler, merkezi uzaktan etkiler.',
      neden: '4.d4 cxd4 5.Nxd4 Kan Varyantı’nın derin teorisine girer. Timman daha az bilinen bir yolu tercih etti: g3 sistemi teorik değil ama Siyah yanlış kurulursa e4-e5 ya da d4 ile merkezde hızlı vurma imkânı verir.',
      diger: [
        { move: '4.d4', text: 'Açık Kan Varyantı; 4...cxd4 5.Nxd4 b5. Motor: +0.46.' },
        { move: '4.a3', text: 'Siyahın ...b5-b4 planını önceden engeller. Motor: +0.19.' },
      ],
    },
    '4b': {
      text: '4...d6: Siyah e5 karesini kontrol eder ve Scheveningen tipi küçük merkez kurar.',
      amac: 'Sağlam bir piyon zinciri (d6-e6) arkasında taşlarını geliştirmek.',
      neden: 'Popov ...b5 yerine merkezi sağlamlaştırmayı seçti. d6 piyonu ileride Beyazın e4-e5 hamlesinin hedefi olacak; bu yüzden ...Nc6 ile e5’i ikinci kez korumak önemliydi.',
      diger: [
        { move: '4...Qc7', text: 'Kan stili: vezir e5’e bakar, ...Nc6 ve ...Nf6 ile esnek gelişme. Motor: +0.26.' },
        { move: '4...Nc6', text: 'At e5 ve d4’ü kontrol eder. Motor: +0.42.' },
        { move: '4...b5', text: 'Kuruluşun klasik fikri: 5.Bg2 Bb7 ile g2 filine karşı durmak (motorun 3...a6’daki ana devamı).' },
      ],
    },
    '5w': {
      text: '5.Bg2: Fil uzun çaprazda yerini alır; e4’ü destekler ve b7-a8 yönüne bakar.',
      amac: 'Rok yapıp merkezde e5 ya da d4 kırılmasına hazırlanmak.',
      neden: 'g3’ün tutarlı devamı. Motor hâlâ 5.d4’ü biraz daha aktif buluyor; ama Timman sistemini kurmayı sürdürdü, merkez kararını bir hamle sonraya bıraktı.',
      diger: [
        { move: '5.d4', text: 'Şimdi Açık Sicilya’ya geçiş: 5...cxd4 6.Nxd4 Nf6 7.Be3. Motor: +0.23.' },
        { move: '5.a3', text: 'Yine ...b5-b4’e karşı önlem. Motor: +0.07.' },
      ],
    },
    '5b': {
      text: '5...Nf6: At e4 piyonuna baskı yapar ve kısa roka hazırlanır.',
      amac: 'Gelişimi tamamlayıp rok yapmak.',
      neden: 'Doğal görünür ama atı f6’ya erkenden getirmek, Beyazın e4-e5 ile tempolu saldırısına hedef verir. Motor burada 5...Nc6’yı tercih ediyor: e5 karesi ek olarak korunur.',
      diger: [
        { move: '5...Nc6', text: 'e5 karesini sağlamlaştırır. Motor: +0.06 (en iyi).' },
        { move: '5...Qc7', text: 'Vezir e5’i tutar; 6.d4 cxd4 7.Nxd4 Nf6. Motor: +0.24.' },
      ],
    },
    '6w': {
      text: '6.O-O: Beyaz kısa rok yapar; şah güvende, f1 kalesi oyuna girer.',
      amac: 'Merkezde vurmadan önce şahı güvenceye almak.',
      neden: 'Motor 6.e5’i hemen oynamayı biraz daha güçlü buluyor (+0.42), ama rok da sağlam bir hamle. Timman e5 fikrini bir hamle sonra Siyahın ...Be7’sinin ardından uyguladı.',
      diger: [
        { move: '6.e5', text: 'Hemen merkezi açmak: 6...dxe5 7.Nxe5. Motor: +0.42.' },
        { move: '6.d4', text: 'Açık Sicilya’ya geçiş: 6...cxd4 7.Nxd4. Motor: +0.28.' },
      ],
    },
    '6b': {
      text: '6...Be7: Fil e7’ye gelişir ve Siyah kısa roka hazırlanır.',
      amac: 'Gelişimi tamamlayıp şahı güvenceye almak.',
      neden: 'Sağlam görünür ama e5 karesini koruyan bir taş eklemez. Bu küçük gecikme Beyaza 7.e5’i verir. Motor 6...Nc6’yı açıkça tercih ediyor: at e5’i korur ve d4 karesine bakar.',
      diger: [
        { move: '6...Nc6', text: 'e5’i korur; 7.d4 cxd4 8.Nxd4 Bd7 ile normal Sicilya. Motor: +0.12.' },
        { move: '6...Qc7', text: 'Vezir e5’e bakar; 7.Re1 Nc6. Motor: +0.14.' },
      ],
    },
    '7w': {
      text: '7.e5!: Beyaz piyonu ileri sürer, f6 atına saldırır ve d6 piyonunu sorgular.',
      amac: 'Merkezi açmak ve g2 filinin a8’e kadar uzanan çaprazını serbest bırakmak.',
      neden: 'Siyahın e5’i yeterince koruyamadığı an tam şimdi: ...Nc6 olmadığı için 7...dxe5 8.Nxe5 sonrasında Beyaz atı merkezde güçlü durur, Siyahın c8 fili ve b7 piyonu uzun çapraz yüzünden rahatsız olur. Motor: 7.e5 +0.56, diğer hamleler yalnızca +0.14.',
      diger: [
        { move: '7.Re1', text: 'Sakin; 7...Nc6 8.d4 cxd4 9.Nxd4. Motor: +0.14.' },
        { move: '7.Qe2', text: 'e5’i hazırlar ama Siyah 7...Nc6 ile yetişir. Motor: +0.14.' },
      ],
    },
    '7b': {
      text: '7...dxe5: Siyah merkez piyonunu değişir.',
      amac: 'Beyazın e5 piyonunu ortadan kaldırıp atına tutunacak bir kare bırakmamak.',
      neden: 'Atın çekilmesi daha kötüdür: 7...Nd5 8.Nxd5 exd5 9.exd6 Qxd6 10.d4 Siyaha yalnız d5 piyonu bırakır (Motor: +1.06). Değişim tek iyi yoldur.',
      diger: [
        { move: '7...Nd5', text: '8.Nxd5 exd5 9.exd6 ile Siyahın piyon yapısı bozulur. Motor: +1.09.' },
        { move: '7...Ng4', text: '8.exd6 Qxd6 9.d4 ile Beyaz merkezde hızla gelişir. Motor: +1.28.' },
      ],
    },
    '8w': {
      text: '8.Nxe5: At e5’te piyonu geri alır ve merkezde güçlü bir yer edinir.',
      amac: 'g2 filiyle birlikte Siyahın vezir kanadına ve özellikle b7, c6 ve f7 karelerine baskı yapmak.',
      neden: 'Piyonu geri almanın en aktif yolu. At e5’ten c4, c6, d7 ve f7’ye bakar; Siyah gelişimini tamamlamakta zorlanır.',
      diger: [
        { move: '8.Qe2', text: 'Önce vezir, sonra Nxe5: 8...Nc6 9.Nxe5 Nd4 ile Siyah aktifleşir. Motor: +0.11.' },
        { move: '8.Qe1', text: 'Aynı fikir, daha pasif. Motor: −0.06.' },
      ],
    },
    '8b': {
      text: '8...Nbd7: Siyah e5 atına karşı çıkar ve değişim teklif eder.',
      amac: 'Merkezdeki güçlü Beyaz atı ortadan kaldırmak ya da geri çekilmeye zorlamak.',
      neden: 'Mantıklı ama at c4 ve b6 yolunu açar. Motor 8...Ra7!?’yi öneriyor: kale g2 filinin çaprazından çıkar, ...b6 ve ...Bb7 artık taktik sorun yaratmaz. Bu ince fikir Kan yapılarında sık görülür.',
      diger: [
        { move: '8...Ra7', text: 'a8’i çaprazdan çeker; 9.d4 cxd4 10.Ne2 b6. Motor: +0.25 (en iyi).' },
        { move: '8...O-O', text: 'Önce rok; 9.a4 Qc7 10.Re1. Motor: +0.45.' },
      ],
    },
    '9w': {
      text: '9.Nc4: At değişimden kaçar ve c4’e çekilir; b6 ve d6 karelerine bakar.',
      amac: 'Taşları tahtada tutup Siyahın gelişim sorunlarını sürdürmek.',
      neden: 'Atların değişimi Siyahı rahatlatırdı. c4’ten at, ileride a4-a5 ile desteklenip b6’ya girebilir. Motor 9.d4’ü biraz daha iyi buluyor ama fark küçük.',
      diger: [
        { move: '9.d4', text: 'Merkezi pekiştirir; 9...O-O 10.Nc4 cxd4 11.Qxd4. Motor: +0.75.' },
        { move: '9.Nxd7', text: 'Değişim; 9...Qxd7 10.a4 O-O. Motor: +0.63.' },
      ],
    },
    '9b': {
      text: '9...Nb6: Siyah atıyla c4 atına saldırır.',
      amac: 'c4 atını değişmek ya da kovalamak; d5 karesine yol bulmak.',
      neden: 'Aktif görünür ama at b6’dan d5’e gidecek ve orada değişilecektir; bu Siyaha zaman kaybettirir. Motor 9...Ra7’yi (+0.57) yine daha uyumlu buluyor.',
      diger: [
        { move: '9...Ra7', text: 'Aynı kale manevrası; 10.a4 b6 11.d3 O-O. Motor: +0.57.' },
        { move: '9...Rb8', text: '...b5’i hazırlar; 10.a4 b6 11.d4. Motor: +0.68.' },
      ],
    },
    '10w': {
      text: '10.b3: Beyaz c4 atını piyonla destekler ve filini b2’ye getirmeye hazırlanır.',
      amac: 'İkinci uzun çaprazı (b2-g7) kurmak; böylece iki fil birden Siyah şahına bakacak.',
      neden: '10...Nxc4 11.bxc4 Beyazın piyonlarını bozabilir; Timman bunu kabul edip fil için b2’yi seçti. Motor 10.d3’ü daha güvenli buluyor (+0.91).',
      diger: [
        { move: '10.d3', text: 'c4 atını değil, e4 ve c4’ü kontrol eder; 10...Nbd5 11.a4. Motor: +0.91.' },
        { move: '10.Ne5', text: 'Atı geri getirir; 10...Nbd7 11.d4. Motor: +0.63.' },
      ],
    },
    '10b': {
      text: '10...Nbd5: At d5’e gelir; c3 atıyla değişim teklif eder.',
      amac: 'Merkezde güçlü bir at kurmak ve Beyazın bir atını ortadan kaldırmak.',
      neden: 'Popov taşları değişip baskıyı azaltmak istedi. Motor 10...Nxc4 11.bxc4 Ra7’yi öneriyor (+0.49): Beyazın c-piyonları katlanır ve Siyah c4’e hedef bulur.',
      diger: [
        { move: '10...Nxc4', text: 'Beyazın piyon yapısını bozar; 11.bxc4 Ra7 12.a4 b6. Motor: +0.49 (en iyi).' },
        { move: '10...O-O', text: 'Önce rok; 11.a4 Nxc4 12.bxc4 Rb8. Motor: +0.62.' },
      ],
    },
    '11w': {
      text: '11.a4: Beyaz b5 karesini kontrol eder; Siyahın ...b5 ilerleyişini zorlaştırır.',
      amac: 'c4 atına üs sağlamak ve ileride a5 ile b6 karesini zayıflatmak.',
      neden: 'a4 piyonu hem c4 atını ...b5 ile kovalanmaktan korur hem de ileride a5-Nb6 planını hazırlar. 17.Nb6 ve 18.Nxc8 bu hamleden doğacak.',
      diger: [
        { move: '11.Re1', text: 'Önce e-hattına kale; 11...O-O 12.a4 Rb8. Motor: +0.75.' },
        { move: '11.Ne5', text: 'At merkeze döner; 11...O-O 12.Bb2. Motor: +0.69.' },
      ],
    },
    '11b': {
      text: '11...b6: Siyah c5 piyonunu destekler ve fili b7’ye getirmeye hazırlanır.',
      amac: 'g2 filinin çaprazına b7’de bir fil ile karşı koymak.',
      neden: 'Motorun ilk tercihi. ...b6 ile Siyah vezir kanadı piyonlarını sağlamlaştırır; ama a8 kalesi hâlâ g2 filinin çaprazındadır, bu yüzden ...Bb7 için bir hamle daha gerekir.',
      diger: [
        { move: '11...Bd7', text: 'Fil c6’ya yönelir; 12.a5 Bc6 13.Ne5. Motor: +0.75.' },
        { move: '11...O-O', text: 'Önce rok; 12.Bb2 Bd7 13.Ne5. Motor: +0.79.' },
      ],
    },
    '12w': {
      text: '12.Nxd5: Beyaz d5’teki atı değişir.',
      amac: 'Siyahı bir alış kararı vermeye zorlamak; d5’ten alan taşa göre yapı değişecek.',
      neden: 'Motor 12.Bb2’yi aynı değerde buluyor. Değişim, Siyahın ...Nxc3 ile Beyazın piyonlarını bozmasını önler ve Siyaha 12...exd5 ya da 12...Nxd5 arasında seçim bırakır.',
      diger: [
        { move: '12.Bb2', text: 'Önce fil; 12...O-O 13.Nxd5 exd5 14.Ne3. Motor: +0.76.' },
        { move: '12.a5', text: '12...b5 13.Nxd5 Nxd5 ile Siyah alan kazanır. Motor: +0.42.' },
      ],
    },
    '12b': {
      text: '12...Nxd5?: Siyah atla geri alır. Bu, oyunun ilk ciddi hatası.',
      amac: 'Piyon yapısını bozmadan merkezde bir at tutmak.',
      neden: 'At d5’te güzel görünür ama h1-a8 çaprazını kapatmaz: g2 fili d5 atına, b2’ye gelecek fil de g7’ye bakacak. 12...exd5 ise d5’te sağlam bir piyon tutar, çaprazı kapatır ve fil e6’ya rahat gelişir. Siyah ...Bb7 de oynayamaz: 12...Bb7?? 13.Nxf6+ Bxf6 14.Bxb7 Bxa1 15.Bxa8 kale kaybettirir.',
      diger: [
        { move: '12...exd5', text: '13.Ne3 Be6 14.d4 O-O; Siyahın merkezi sağlam. Motor: +0.66 (en iyi).' },
        { move: '12...Bb7??', text: '13.Nxf6+ Bxf6 14.Bxb7 Bxa1 15.Bxa8 ile Beyaz kazanır. Motor: +6.17.' },
      ],
    },
    '13w': {
      text: '13.Bb2: Fil b2’de ikinci uzun çaprazı kurar; g7’ye ve h8’e bakar.',
      amac: 'İki uzun çaprazla birlikte Siyahın rokunu ve a8 kalesini aynı anda tehdit etmek.',
      neden: 'Şimdi Siyah rok yaparsa 14.Ne5! ile c6 karesine ve a8’e baskı gelir. Beyaz taşları en aktif çaprazlara yerleştirdi; motorun da birinci seçimi (+1.58).',
      diger: [
        { move: '13.Ne5', text: 'Hemen f7’ye vurmak: 13...Qc7 14.Nxf7 Kxf7 15.c4. Motor: +0.80.' },
        { move: '13.d4', text: 'Merkezi kapatır, b2 çaprazını da kapatır. Motor: +0.66.' },
      ],
    },
    '13b': {
      text: '13...f6: Siyah e5 karesini kapatır ve b2-g7 çaprazını keser.',
      amac: 'Beyazın Ne5 ve Bxg7 fikirlerine set çekip roka hazırlanmak.',
      neden: 'Zorunlu bir zayıflatma: 13...O-O 14.Ne5! Bd6 15.c4 Nc7 16.Bxa8 Nxa8 ile Beyaz kalite kazanır (Motor: +2.27). Ama ...f6 e6 piyonunu ve şahın çevresini zayıflatır; Beyaz bunu hemen Qh5+ ile kullanacak.',
      diger: [
        { move: '13...O-O', text: '14.Ne5! Bd6 15.c4 Nc7 16.Bxa8 kalite kaybı. Motor: +2.19.' },
        { move: '13...Bf6', text: '14.Bxf6 gxf6 15.d4; Siyahın şahı çıplak. Motor: +2.07.' },
      ],
    },
    '14w': {
      text: '14.Qh5+: Vezir şah çeker ve Siyahı ...g6 oynamaya zorlar.',
      amac: 'Siyahın kara karelerini (f6, g6, h6) daha da zayıflatmak.',
      neden: 'Şah çekmek bedavadır: 14...g6’dan sonra h6 karesi ve uzun çapraz zayıflar, Siyahın şahı f7’ye gitmek zorunda kalabilir. Motorun birinci seçimi.',
      diger: [
        { move: '14.Qe2', text: 'Doğrudan e6’ya baskı; 14...Rb8 15.d4 O-O. Motor: +1.26.' },
        { move: '14.Ne3', text: 'd5 atına karşı çıkar; 14...Bb7 15.Qe2. Motor: +1.21.' },
      ],
    },
    '14b': {
      text: '14...g6: Siyah şahı piyonla kapatır.',
      amac: 'Şahın yerinde kalmasını ve rok hakkını korumak.',
      neden: 'Tek makul hamle. 14...Kf8 rok hakkını kaybettirir (+2.21), 14...Kd7 ise 15.Bxd5 ile felaket olur (+6.51).',
      diger: [
        { move: '14...Kf8', text: 'Rok hakkı gider; 15.d4 Ra7 16.Rfd1. Motor: +2.21.' },
        { move: '14...Kd7', text: '15.Bxd5 exd5 ile şah merkezde kalır. Motor: +6.51.' },
      ],
    },
    '15w': {
      text: '15.Qe2: Vezir e2’ye çekilir ve e6 piyonuna baskı yapar.',
      amac: 'e-hattında kaleyle birlikte e6’yı hedef almak.',
      neden: 'Vezir h5’te g6 piyonu yüzünden fazla iş yapamaz. e2’de e6’ya bakar ve ileride Rfe1 ile ikilenir. Motor 15.Qh6’yı da (+1.66) önerir ama 15...Bf8 16.Qh4 Be7 tekrarla sonuçlanabilir.',
      diger: [
        { move: '15.Qh6', text: 'Siyahın rokunu engeller; 15...Bf8 16.Qh4 Be7. Motor: +1.66.' },
        { move: '15.Qf3', text: 'd5 atına baskı; 15...Rb8 16.d4 O-O. Motor: +1.04.' },
      ],
    },
    '15b': {
      text: '15...O-O: Siyah rok yapar.',
      amac: 'Şahı merkezden çıkarıp kaleleri bağlamak.',
      neden: 'Şah e8’de e-hattındaki baskıya açıktı. Rok, f-hattındaki kaleyi f6’nın savunmasına sokar. Motor 15...Rb8’i eşit görüyor.',
      diger: [
        { move: '15...Rb8', text: '...b5’i hazırlar; 16.d4 O-O 17.Rfd1. Motor: +1.43.' },
        { move: '15...Ra7', text: 'Kale yine çapraz dışına; 16.Bh3 e5. Motor: +1.66.' },
      ],
    },
    '16w': {
      text: '16.a5: Beyaz b6 piyonunu sorgular.',
      amac: 'Siyahın vezir kanadı piyonlarını sabitlemek ve atı b6 karesine sokmak.',
      neden: '16...bxa5 Siyaha yalıtılmış a-piyonları bırakır; 16...b5 ise b6 karesini ata verir. Her iki durumda Beyazın atı oyuna girer. Motor 16.d4 ve 16.Rfd1’i biraz daha iyi buluyor ama planın tutarlılığı açık.',
      diger: [
        { move: '16.d4', text: 'Merkez kırılması; 16...Rb8 17.Rfd1 Qc7. Motor: +1.53.' },
        { move: '16.Rfd1', text: 'd-hattına kale; 16...Rb8 17.d4 cxd4. Motor: +1.52.' },
      ],
    },
    '16b': {
      text: '16...b5: Siyah piyonu ilerletir ve c4 atına saldırır.',
      amac: 'Alan kazanmak ve atı çekilmeye zorlamak.',
      neden: 'Motorun ilk seçimi. 16...Ra7 17.axb6 Nxb6 Siyahın piyonlarını zayıflatır (+1.85). Popov b6 karesini ata bıraksa da 18...Qxc8’den sonra fil çifti kaybı karşılığında kalelerini aktifleştirmeyi umdu.',
      diger: [
        { move: '16...Ra7', text: '17.axb6 Nxb6 18.Bh3 f5. Motor: +1.85.' },
        { move: '16...Rf7', text: '17.axb6 Rb8 ile Siyah geride kalır. Motor: +2.45.' },
      ],
    },
    '17w': {
      text: '17.Nb6: At b6’ya girer; a8 kalesine ve c8 filine aynı anda saldırır.',
      amac: 'Siyahın gelişmemiş beyaz kareli filini almak ve fil çiftini kazanmak.',
      neden: 'At c4’ten tek doğru kare. 17.Bxd5 exd5 ise Beyazın güçlü g2 filini verir (+0.68). Nb6 ile Beyaz Siyahın en kötü taşını değil, onun tek savunucu filini alacak.',
      diger: [
        { move: '17.Ne3', text: 'd5 atına baskı; 17...Ra7 18.d4. Motor: +0.97.' },
        { move: '17.Bxd5', text: '17...exd5 18.Nb6 Ra7; Beyaz g2 filini erken verdi. Motor: +0.68.' },
      ],
    },
    '17b': {
      text: '17...Ra7: Kale saldırıdan çıkar ve yedinci yatayı tutar.',
      amac: 'Kaleyi kurtarıp e7 filine ve ikinci yataya destek vermek.',
      neden: '17...Rb8? 18.Nxc8 Qxc8 19.Bxd5 ile taş kaybettirir (+3.99). 17...Nxb6 18.axb6 Rb8 19.b7 Bxb7 de mümkündü (+1.57), ama Popov d5 atını tutmayı tercih etti.',
      diger: [
        { move: '17...Nxb6', text: '18.axb6 Rb8 19.b7 Bxb7; Siyah atını verir ama fili kurtarır. Motor: +1.57.' },
        { move: '17...Rb8?', text: '18.Nxc8 Qxc8 19.Bxd5 exd5 taş kaybı. Motor: +3.99.' },
      ],
    },
    '18w': {
      text: '18.Nxc8: At c8 filini alır. Beyaz fil çiftini kazanır.',
      amac: 'Siyahın beyaz karelerdeki savunucusunu ortadan kaldırmak; d5 ve e6 kareleri artık zayıf.',
      neden: 'Siyahın beyaz kareli fili, g2 filinin çaprazına karşı tek koruyucusuydu. Değişimden sonra Siyahın e6 ve d5 kareleri beyaz fil için açıktır. Motor: +1.69, alternatifler +0.8 civarında.',
      diger: [
        { move: '18.Bxd5', text: '18...exd5 ile Beyaz kendi güçlü filini verir. Motor: +0.81.' },
        { move: '18.Bh3', text: 'e6’ya baskı; 18...Nxb6 19.Bxe6+ Kg7. Motor: +0.77.' },
      ],
    },
    '18b': {
      text: '18...Qxc8: Vezirle geri alınır.',
      amac: 'Taşı geri almak; vezir c8’den e6’yı ve c-hattını korur.',
      neden: 'Tek iyi hamle: 18...Rd7 ya da 18...Rc7 19.Qxe6+ ile e6 piyonu ve pozisyon çöker (+6.4).',
      diger: [
        { move: '18...Rd7?', text: '19.Qxe6+ Kg7 20.Bxd5 ile Beyaz kazanır. Motor: +6.40.' },
      ],
    },
    '19w': {
      text: '19.Rfe1: Kale e1’e gelir ve e6 piyonuna baskıyı artırır.',
      amac: 'Vezir ve kaleyi e-hattında ikileyip e6’yı hedef almak.',
      neden: 'e6, ...f6’dan sonra Siyahın en zayıf piyonu. Kale e1’de ayrıca e7 filine dolaylı olarak bakar. Motorun ilk seçimi.',
      diger: [
        { move: '19.Rfc1', text: 'c4 kırılmasını destekler; 19...Nb4 20.c3. Motor: +1.39.' },
        { move: '19.c4', text: 'Hemen merkez kırılması; 19...bxc4 20.bxc4 Nb4. Motor: +1.39.' },
      ],
    },
    '19b': {
      text: '19...Kf7: Şah f7’ye gelip e6 piyonunu korur.',
      amac: 'e6’yı korumak ve kaleleri serbest bırakmak.',
      neden: 'Şah aktif bir savunucu olarak kullanılır ama d5 fili açılınca çapraza girebilir. Motor 19...Rd8’i biraz daha iyi buluyor: kale d-hattında Beyazın d4-d5 planına karşı hazırlanır.',
      diger: [
        { move: '19...Rd8', text: 'd-hattını tutar; 20.Bh3 f5 21.c4. Motor: +1.57.' },
        { move: '19...Nb4', text: 'At hemen üssüne; 20.d4 cxd4 21.Bxd4. Motor: +1.87.' },
      ],
    },
    '20w': {
      text: '20.c4: Beyaz d5 atını kovalamak için c-piyonunu ilerletir.',
      amac: 'Merkezdeki Siyah atı uzaklaştırıp d4-d5 kırılmasını hazırlamak.',
      neden: 'Motorun ilk seçimi. 20...bxc4 21.bxc4 ile b-hattı açılır ve d5 atı gitmek zorundadır; Beyazın fil çifti açık pozisyonda daha güçlü olur.',
      diger: [
        { move: '20.Rad1', text: 'Önce d-hattına kale; 20...Rd8 21.c4. Motor: +1.67.' },
        { move: '20.Rac1', text: 'c-hattını hazırlar; 20...Nb4 21.Bh3. Motor: +1.57.' },
      ],
    },
    '20b': {
      text: '20...bxc4: Siyah c4’te değişir.',
      amac: 'Beyazın b3 piyonunu geri çekip vezir kanadında piyon çoğunluğunu azaltmak.',
      neden: 'Motor 20...Nb4’ü biraz daha iyi buluyor (+1.83): at hemen üssüne gider ve b-hattı kapalı kalır. Değişim b-hattını açar, Beyazın kalesine yeni bir yol verir.',
      diger: [
        { move: '20...Nb4', text: '21.d4 Rd8 22.Bh3 f5. Motor: +1.83.' },
        { move: '20...Nc7', text: 'At pasifleşir; 21.d4 bxc4 22.bxc4. Motor: +3.10.' },
      ],
    },
    '21w': {
      text: '21.bxc4: Beyaz piyonla geri alır; b-hattı açılır.',
      amac: 'Merkezde c4 ve d-piyonuyla güçlü bir merkez kurmak.',
      neden: '21.Qxc4 veziri açığa çıkarır (+1.59). Piyonla almak d5 atına saldırır ve d4-d5 hamlesini hazırlar.',
      diger: [
        { move: '21.Qxc4', text: '21...Rd8 22.Re2; vezir açıkta. Motor: +1.59.' },
        { move: '21.Bh3', text: '21...f5 22.bxc4 Nb4. Motor: +1.21.' },
      ],
    },
    '21b': {
      text: '21...Nb4: At b4’e gelir — oyunun geri kalanında Siyahın kilit taşı.',
      amac: 'Piyonla kovalanamayacak bir üste yerleşip d3, d5 ve c2 karelerine baskı yapmak.',
      neden: 'b4’e Beyazın hiçbir piyonu saldıramaz (a-piyonu a5’te, c-piyonu c4’te). 21...Nc7 at için pasif bir kare (+3.11), 21...Rb7 22.Ba3 ile kale sıkışır (+4.49).',
      diger: [
        { move: '21...Nc7', text: '22.Rad1 Rd8 23.d4; at pasif. Motor: +3.11.' },
        { move: '21...Rb7?', text: '22.Ba3 Nc7 23.Bxb7 Qxb7 ile kalite kaybı. Motor: +4.49.' },
      ],
    },
    '22w': {
      text: '22.d4: Beyaz merkezi kırmaya hazırlanır; c5 piyonuna saldırır.',
      amac: 'd5 kırılmasıyla e6’yı sökmek ve b2 filinin çaprazını açmak.',
      neden: 'Motorun ilk seçimi (+1.81). d4 ile b2 fili de dolaylı olarak f6’ya bakar; Siyah c5’te alırsa 23.Bxd4 ile fil merkeze gelir.',
      diger: [
        { move: '22.Bh3', text: 'e6’ya baskı; 22...f5 23.d4 Bf6 24.d5. Motor: +1.06.' },
        { move: '22.Rab1', text: 'b-hattına kale; 22...e5 ile Siyah merkezi kapatır. Motor: +0.81.' },
      ],
    },
    '22b': {
      text: '22...Nc6: At c6’ya döner ve d4 piyonuna baskı yapar.',
      amac: 'd4 karesini ve d-hattını kontrol etmek.',
      neden: 'Popov d4 kırılmasını engellemek istedi ama at b4 üssünü terk etti ve d5 itilişine karşı korumasız kaldı. Motor 22...Re8’i öneriyor (+1.72): e6’yı kaleyle koruyup atı b4’te tutmak.',
      diger: [
        { move: '22...Re8', text: 'e6’yı korur; 23.Rab1 cxd4 24.Bxd4 Bc5. Motor: +1.72 (en iyi).' },
        { move: '22...Rd8', text: '23.d5 e5 24.Qd2; Siyah merkezi kapatır. Motor: +2.06.' },
      ],
    },
    '23w': {
      text: '23.d5!: Beyaz piyonu ilerletip c6 atına ve e6 piyonuna saldırır.',
      amac: 'e6’yı sökmek, fili d5’e getirmek ve Siyah şahını çapraza almak.',
      neden: 'Tam zamanında: c6 atı d4’e gidemez (23...Nd4 24.dxe6+ ile Beyaz kazanır, +3.15). 23...exd5 sonrası Beyaz fili şah çekerek d5’e gelir. Motor: +2.41.',
      diger: [
        { move: '23.Bh3', text: 'e6’ya baskı; 23...f5 24.d5. Motor: +1.89.' },
        { move: '23.dxc5', text: '23...Bxc5 24.Qe4 Rc7; Siyah rahatlar. Motor: +1.19.' },
      ],
    },
    '23b': {
      text: '23...exd5: Siyah d5’te alır.',
      amac: 'Merkezdeki piyonu ortadan kaldırıp atı kurtarmak.',
      neden: 'Zorunlu sayılır: 23...Nd4 24.dxe6+ Kg7 25.Qd1 (+3.15) ve 23...Nd8 24.dxe6+ (+3.93) daha kötüdür.',
      diger: [
        { move: '23...Nd4', text: '24.dxe6+ Kg7 25.Qd1 Nxe6; Beyaz rahatça üstün. Motor: +3.15.' },
        { move: '23...Nd8', text: '24.dxe6+ Kg8 25.h4; e6 piyonu çok güçlü. Motor: +3.93.' },
      ],
    },
    '24w': {
      text: '24.Bxd5+: Fil şah çekerek d5’e yerleşir.',
      amac: 'Fili merkezin en güçlü karesine getirmek; şahı f7 ve g8’den uzaklaştırmak.',
      neden: 'Doğal ve güçlü. Motor 24.cxd5’i biraz daha iyi buluyor (+2.55): 24...Nd4 25.Bxd4 cxd4 ile Beyaz güçlü bir geçer d-piyonu kazanır. Timman ise taş aktivitesini seçti.',
      diger: [
        { move: '24.cxd5', text: '24...Nd4 25.Bxd4 cxd4 26.Rac1; d5 geçer piyonu. Motor: +2.55.' },
        { move: '24.Qd2', text: '24...Kg7 25.cxd5 Ne5. Motor: +2.02.' },
      ],
    },
    '24b': {
      text: '24...Kg7: Şah g7’ye kaçar.',
      amac: 'Şahı çaprazdan çıkarmak ve h6, f6’yı korumak.',
      neden: 'Pratikte tek kare: 24...Ke8 25.Rad1 (+5.17), 24...Qe6?? 25.Qxe6+ (+9.92) kaybeder. g7’de şah f6 piyonunu da korur.',
      diger: [
        { move: '24...Ke8', text: '25.Rad1 Rf7 26.Bxf7+; şah merkezde. Motor: +5.17.' },
      ],
    },
    '25w': {
      text: '25.Qe4: Vezir merkeze gelir, e-hattını tutar ve c6 atına bakar.',
      amac: 'e7 filine ve c6 atına baskı yapmak; aynı zamanda c2 karesini korumak.',
      neden: 'Vezir e4’te hem saldırır hem savunur — c2 karesini kontrol etmesi daha sonra çok önemli olacak. Motor 25.Rab1’i biraz daha iyi buluyor (+2.17): b-hattını almak.',
      diger: [
        { move: '25.Rab1', text: 'b-hattına kale; 25...Nb4 26.Rbd1 Nxd5. Motor: +2.17.' },
        { move: '25.Qd2', text: '25...Rd8 26.Re4 Nd4. Motor: +2.16.' },
      ],
    },
    '25b': {
      text: '25...Nb4: At üssüne geri döner ve d5 filine saldırır.',
      amac: 'Güçlü d5 filine karşı çıkmak ve c2’ye bakmak.',
      neden: 'At yeniden en iyi karesindedir. 25...Nd4 26.Bc3 ile kovalanır (+2.19); b4’te ise piyonla kovalanamaz. Motorun ilk seçimi.',
      diger: [
        { move: '25...Nd4', text: '26.Bc3 Bd6 27.Rab1 Be5. Motor: +2.19.' },
        { move: '25...Qb8', text: '26.Rab1 Nb4 27.Qf3. Motor: +2.33.' },
      ],
    },
    '26w': {
      text: '26.Ra3: Kale a3 üzerinden e3’e gelmeye hazırlanır.',
      amac: 'İki kaleyi e-hattında ikileyip e7 filine ve sekizinci yataya baskı yapmak.',
      neden: 'Yaratıcı bir kale manevrası ama yavaş; Siyaha nefes alacak zaman verir. Motor 26.Be6 (+1.75) ya da 26.Rad1 (+1.73) ile hemen baskıyı sürdürmeyi öneriyor; maç hamlesi +1.16.',
      diger: [
        { move: '26.Be6', text: 'Vezire saldırır; 26...Qc6 27.Bd5 Qc8. Motor: +1.75.' },
        { move: '26.Rad1', text: '26...Nxd5 27.Rxd5 Bd8; d-hattı Beyazda. Motor: +1.73.' },
      ],
    },
    '26b': {
      text: '26...Bd6: Fil d6’ya gelir; e-hattından çıkar ve e5, g3 karelerine bakar.',
      amac: 'Filin e-hattında kaleye hedef olmasını önlemek ve kara karelerde aktifleşmek.',
      neden: 'Fil e7’de Re3-Qxe7+ fikirlerine açıktı. Motor 26...Bd8 (+1.07) ya da 26...Nxd5 (+1.11) ile d5 filini değişmeyi daha iyi buluyor; Popov atını tutmayı tercih etti.',
      diger: [
        { move: '26...Nxd5', text: '27.cxd5 Qf5 28.Qc4 Rb8; güçlü fil gider. Motor: +1.11.' },
        { move: '26...Bd8', text: '27.Raa1 Qf5 28.Qxf5 gxf5. Motor: +1.07.' },
      ],
    },
    '27w': {
      text: '27.Rae3: Kaleler e-hattında ikilenir.',
      amac: 'Re7 ve Re8 tehditleriyle Siyahın arka yatayına baskı yapmak.',
      neden: 'Manevranın tutarlı devamı. Motor 27.h4’ü çok az daha iyi buluyor; ama ikilenmiş kaleler Siyahı pasif savunmaya zorlar.',
      diger: [
        { move: '27.h4', text: '27...Qf5 28.Qxf5 gxf5 29.Re6. Motor: +1.77.' },
        { move: '27.Qf3', text: '27...Qf5 28.Qxf5 gxf5 29.Rf3. Motor: +1.47.' },
      ],
    },
    '27b': {
      text: '27...Qd8: Vezir d8’e çekilir ve arka yatayı korur.',
      amac: 'e8 karesini korumak ve d-hattına bakmak.',
      neden: 'Pasif bir hamle: motor 27...Qf5! ile vezir değişimi teklif etmeyi öneriyor (+1.71). Maç hamlesinden sonra Beyazın 28.h4 hamlesiyle avantajı +2.41’e çıkabilirdi. Yine de vezir d8’de d5 filine dolaylı baskı yapar.',
      diger: [
        { move: '27...Qf5', text: 'Vezir değişimi; 28.Qxf5 gxf5 29.Re6 Rd7. Motor: +1.71 (en iyi).' },
        { move: '27...Qb8', text: '28.R1e2 Rd7 29.h4. Motor: +1.90.' },
      ],
    },
    '28w': {
      text: '28.Qf3?: Vezir f3’e geçer, f6 piyonuna baskı yapar ve 29.Re8 tehdidini kurar.',
      amac: 'Re8 ile kale değişimini zorlayıp Qxf6+ fikirleriyle Siyah şahına saldırmak.',
      neden: 'Tehdit gerçek: Siyah boş geçse 29.Re8 ile Beyaz kazanır (Motor: +5.45). Ama vezir e4’ten ayrılınca c2 karesini koruyan taş kalmaz ve b4 atı 28...Nc2! ile iki kaleye çatal atar. Motor: 28.Qf3 −0.64; 28.h4 ise +1.91 — o zaman 28...Nc2? 29.Qxc2 ile at kaybedilir.',
      diger: [
        { move: '28.h4', text: '28...h5 29.Qb1 Nxd5 30.cxd5; vezir c2’yi korumaya devam eder. Motor: +1.91 (en iyi).' },
        { move: '28.Bc3', text: 'b4 atına karşı çıkar; 28...Rd7 29.Qb1 Bc7. Motor: +1.44.' },
        { move: '28.R1e2', text: 'c2’yi kaleyle korur; 28...Re7 29.Qh4. Motor: +1.23.' },
      ],
    },
    '28b': {
      text: '28...Nc2!: At c2’ye atlayıp e1 ve e3 kalelerine birlikte saldırır.',
      amac: 'Kalite kazanmak ve Re8 tehdidini aynı anda ortadan kaldırmak.',
      neden: 'Yedi hamledir b4’te bekleyen atın ödülü. Beyaz iki kaleyi birden kurtaramaz; 29.Re8 artık işe yaramaz çünkü at diğer kaleyi alır. Motor: 28...Nc2 −0.71; ikinci en iyi 28...Nxd5 +2.13 — tek hamle değerlendirmeyi üç piyon değiştiriyor.',
      diger: [
        { move: '28...Nxd5', text: '29.Qxd5 Raf7 30.Bc3; Beyaz hâlâ üstün. Motor: +2.13.' },
        { move: '28...h5', text: '29.Re6 Nc2 30.Rd1; Beyaz zaman kazanmış. Motor: +2.41.' },
      ],
    },
    '29w': {
      text: '29.Rd1: Kale e1’den d1’e kaçar ve d-hattını tutar.',
      amac: 'Bir kaleyi kurtarıp d5 filini desteklemek.',
      neden: 'Kalite kaybı kaçınılmaz; soru hangi düzenin daha dayanıklı olduğu. Motor 29.Bc3 Nxe3 30.Rxe3’ü öneriyor (−0.66): kale e-hattında kalır ve fil b4-a5 çaprazına geçer. 29.Rd1 −1.18.',
      diger: [
        { move: '29.Bc3', text: '29...Nxe3 30.Rxe3 Re7 31.Rd3; e-hattı Beyazda. Motor: −0.66.' },
        { move: '29.R1e2', text: '29...Nxe3 30.Rxe3 Re7 31.Ra3. Motor: −1.01.' },
      ],
    },
    '29b': {
      text: '29...Nxe3: At e3 kalesini alır; Siyah kalite kazanır.',
      amac: 'Materyal avantajını almak.',
      neden: 'Tereddüt edilecek bir şey yok: 29...Re7 30.Rxe7+ ya da 29...Nd4 Beyaza avantajı geri verir (+0.9 / +1.1).',
      diger: [
        { move: '29...Re7', text: '30.Rxe7+ Qxe7 31.Kf1; at c2’de sıkışır. Motor: +0.92.' },
        { move: '29...Nd4', text: '30.Bxd4 cxd4 31.Re6. Motor: +1.08.' },
      ],
    },
    '30w': {
      text: '30.Qxe3: Vezirle geri alınır; e-hattı Beyazda kalır.',
      amac: 'Taşı geri alıp veziri merkezde aktif tutmak.',
      neden: '30.fxe3 şahın önünü açar ve e3 piyonu zayıf kalır (−3.02). 30.Rd3?? ise atı almaz ve daha da kaybeder.',
      diger: [
        { move: '30.fxe3', text: '30...Qxa5 31.Rf1 Qd8; Beyazın şahı açık. Motor: −3.02.' },
      ],
    },
    '30b': {
      text: '30...Re7: Kale e7’ye gelip e-hattına karşı çıkar.',
      amac: 'Beyazın veziriyle e-hattını almasını engellemek ve yedinci yatayı savunmak.',
      neden: 'Sağlam bir hamle ama motor 30...Qxa5! ile önce piyonu almayı tercih ediyor (−1.21): 31.Bc1 Qd8 ve Siyah bir piyon daha kazanmıştır. Popov önce güvenliği seçti.',
      diger: [
        { move: '30...Qxa5', text: '31.Bc1 Qd8 32.h4 Qe7; Siyah piyon da kazanır. Motor: −1.21 (en iyi).' },
        { move: '30...Re8', text: '31.Qa3 Be5 32.Qxc5; Beyaz piyonu geri alır. Motor: −0.40.' },
      ],
    },
    '31w': {
      text: '31.Qd2: Vezir d2’ye çekilir; d6 filine ve h6 karesine bakar.',
      amac: 'd6 filini baskı altında tutmak ve ileride Qh6+ ile şaha yaklaşmak.',
      neden: 'Motor 31.Qa3’ü biraz daha iyi buluyor (−0.99): c5 ve a6 piyonlarına baskı. Qd2 ise d-hattında kaleyle uyum sağlar.',
      diger: [
        { move: '31.Qa3', text: 'c5 ve a6’ya baskı; 31...h5 32.Kg2 h4. Motor: −0.99.' },
        { move: '31.Be4', text: 'Fil geri çekilir; 31...Qc7 32.Bc1. Motor: −1.65.' },
      ],
    },
    '31b': {
      text: '31...Be5: Fil e5’e gelir ve b2 filine karşı çıkar.',
      amac: 'Beyazın güçlü b2 filini değişmek ya da geri püskürtmek; fili d4 yönüne hazırlamak.',
      neden: 'Motor 31...Qc7’yi daha güçlü buluyor (−1.21): vezir aktifleşir, fil d6’da kalır. Maç hamlesi Beyaza 32.Bxe5 fxe5 ile rahatlama imkânı verirdi.',
      diger: [
        { move: '31...Qc7', text: '32.h4 Rfe8 33.Kf1 Be5. Motor: −1.21 (en iyi).' },
        { move: '31...Bc7', text: '32.Bc3 Qd7 33.Qc2. Motor: −1.01.' },
      ],
    },
    '32w': {
      text: '32.Bc1: Fil değişimden kaçar ve c1-h6 çaprazına geçer.',
      amac: 'Fil çiftini korumak ve Qh6+ ile şah saldırısını desteklemek.',
      neden: 'Saldırgan bir karar ama Siyah filine d4 karesini bırakır. Motor 32.Bxe5 fxe5’i öneriyor (−1.01): Siyahın en iyi taşı gider ve e5 piyonu hedef olur.',
      diger: [
        { move: '32.Bxe5', text: '32...fxe5 33.Re1 Qb8 34.Re2. Motor: −1.01 (en iyi).' },
        { move: '32.Rb1', text: '32...Rb7 33.h4 Bxb2 34.Rxb2. Motor: −1.66.' },
      ],
    },
    '32b': {
      text: '32...Bd4: Fil d4’e yerleşir; buradan f2’ye bakar ve hiçbir piyonla kovalanamaz.',
      amac: 'Merkezin en güçlü karesini almak ve Beyazın şah kanadına baskı yapmak.',
      neden: 'Beyazın d- ve e-piyonları yok, c-piyonu c4’te: fil d4’te kalıcıdır. Motor 32...Rfe8’i eşit görüyor; iki hamle de aynı kuruluşa varır.',
      diger: [
        { move: '32...Rfe8', text: '33.Kg2 Bd4 34.Bf3 Qc8. Motor: −1.35.' },
        { move: '32...Kh8', text: '33.h4 Bd4 34.Kg2. Motor: −1.20.' },
      ],
    },
    '33w': {
      text: '33.Qh6+: Vezir h6’dan şah çeker.',
      amac: 'Şahı köşeye itmek ve saldırı şansları yaratmak.',
      neden: 'Şah çekmek cazip ama vezir h6’da uzak bir köşeye gider; ileride bu kare tuzak olacak. Motor 33.Kg2 ile önce f2’yi sağlamlaştırmayı öneriyor (−1.37).',
      diger: [
        { move: '33.Kg2', text: '33...Rfe8 34.Bf3 Qb8 35.Qc2. Motor: −1.37.' },
        { move: '33.Bf3', text: '33...Rfe8 34.Kg2 Re5. Motor: −1.40.' },
      ],
    },
    '33b': {
      text: '33...Kh8: Şah h8’e gider.',
      amac: 'Şahtan kurtulmak.',
      neden: 'Zorunlu: g8 ve f7 kareleri d5 filinin kontrolündedir, h8 tek boş karedir.',
    },
    '34w': {
      text: '34.Bf3: Fil f3’e çekilir; h5 ve e2 karelerini kontrol eder.',
      amac: 'Fili güvenli bir yere almak ve şahın çevresini savunmak.',
      neden: 'd5’te fil artık bir hedef değildi ama şah kanadının savunması için f3’e geçti. Motor 34.Kg2’yi (−1.93) eşit buluyor; maç hamlesi −1.76.',
      diger: [
        { move: '34.Kg2', text: '34...Re2 35.Rd2 Rfe8. Motor: −1.93.' },
        { move: '34.Kf1', text: '34...Re5 35.Bf3 Rfe8. Motor: −2.05.' },
      ],
    },
    '34b': {
      text: '34...Rfe8: Kaleler e-hattında ikilenir.',
      amac: 'e-hattını ve e1, e2, e3 karelerini kontrol etmek.',
      neden: 'e-hattı açık tek hat; kalelerin ikilenmesi Beyazın taşlarını savunmaya bağlar. Motor 34...Qc8’i eşit görüyor.',
      diger: [
        { move: '34...Qc8', text: '35.Kg2 Rfe8 36.h4 Qf5. Motor: −1.81.' },
        { move: '34...Rg8', text: 'g-hattına; 35.Qd2 Qd7. Motor: −1.64.' },
      ],
    },
    '35w': {
      text: '35.Bd2: Fil d2’ye gelir ve e1, e3 karelerini kontrol eder.',
      amac: 'Siyah kalelerinin birinci ve ikinci yataya girmesini engellemek.',
      neden: 'Motorun ilk seçimi. 35.Bf4?! ise 35...Qxa5 ile piyon kaybettirir (−2.51).',
      diger: [
        { move: '35.Qd2', text: 'Vezir geri döner; 35...Qb8 36.Kg2. Motor: −2.16.' },
        { move: '35.Bf4', text: '35...Qxa5 36.Kg2 Qa4; piyon kaybı. Motor: −2.51.' },
      ],
    },
    '35b': {
      text: '35...Qc8: Vezir c8’den f5 ve c4’e bakar.',
      amac: 'Veziri aktif bir kareye (f5) götürmek.',
      neden: 'Motor 35...Qb8 ve 35...Qd7’yi eşit görüyor: hepsi vezirin Beyaz şah kanadına ve c4’e yönelmesi fikrini taşır.',
      diger: [
        { move: '35...Qb8', text: '36.Kg2 Qb3 37.h4 Qxc4. Motor: −2.13.' },
        { move: '35...Qd7', text: '36.Kg2 Qa4 37.h4 Qxc4. Motor: −2.13.' },
      ],
    },
    '36w': {
      text: '36.Kg2: Şah g2’ye gelir ve f2, f3 ve h3 karelerini korur.',
      amac: 'Şahın etrafını sağlamlaştırmak.',
      neden: 'Motorun ilk seçimi. 36.Rf1 ve 36.Kf1 daha pasif kalır (−2.6 / −2.8).',
      diger: [
        { move: '36.Rf1', text: '36...Qe6 37.Bd5 Qe2. Motor: −2.64.' },
        { move: '36.Kf1', text: '36...Qe6 37.Kg2 Qxc4. Motor: −2.77.' },
      ],
    },
    '36b': {
      text: '36...Qf5: Vezir f5’te aktifleşir; c2 ve f2’ye yönelir.',
      amac: 'Veziri Beyazın ikinci yatayına sokmak.',
      neden: 'Motor 36...Qe6’yı (−2.13) biraz daha iyi buluyor ama Qf5 de güçlü: bir sonraki hamlede c2 ve d3 kareleri hedeftedir.',
      diger: [
        { move: '36...Qe6', text: '37.Re1 Qd7 38.Rd1 Qa4. Motor: −2.13.' },
        { move: '36...Kg8', text: '37.h4 Qf5 38.Bd5+ Kh8. Motor: −1.82.' },
      ],
    },
    '37w': {
      text: '37.h4: Beyaz h-piyonunu ilerletir.',
      amac: 'h5 ile Siyahın g6 piyonunu sorgulamak ve g-hattını açmak.',
      neden: 'Motorun ilk seçimi (−1.83): şah kanadında alan kazanır ve vezire destek verir. Ama planın bir sonraki adımı (h5) zamanlaması kritik olacak.',
      diger: [
        { move: '37.h3', text: '37...Qc2 38.Qf4 Qxc4. Motor: −2.52.' },
        { move: '37.g4', text: '37...Qc2 38.Rc1 Qa2. Motor: −2.59.' },
      ],
    },
    '37b': {
      text: '37...Qc2: Vezir c2’de d2 filine ve c4 piyonuna saldırır.',
      amac: 'İkinci yataya sızıp Beyaz taşlarını savunmaya bağlamak.',
      neden: 'Vezir c2’den aynı zamanda f2 piyonunu g2 şahına karşı açmaza alır — bu, 39...Rxe3 kombinezonunda belirleyici olacak. Motorun üç seçimi (Rg7, Kg8, Qc2) yaklaşık eşit.',
      diger: [
        { move: '37...Rg7', text: '38.g4 Qc2 39.Qf4 Rd7. Motor: −2.24.' },
        { move: '37...Kg8', text: '38.Qf4 Qxf4 39.Bxf4; vezir değişimi. Motor: −2.15.' },
      ],
    },
    '38w': {
      text: '38.h5?: Beyaz h-piyonunu ileri sürer.',
      amac: 'hxg6 ile g-hattını açıp h6’daki veziriyle mat saldırısı yapmak.',
      neden: 'Plan yanlış zamanlandı: 38...g5! ile piyon kilitlenir ve h6 veziri c1-h6 çaprazında geri dönemez. Motor 38.Qf4’ü öneriyordu (−2.00): 38...g5 39.hxg5 fxg5 40.Qxg5 ile vezir oyuna döner.',
      diger: [
        { move: '38.Qf4', text: '38...g5 39.hxg5 fxg5 40.Qxg5; vezir merkezde. Motor: −2.00 (en iyi).' },
        { move: '38.Rc1', text: '38...Qa2 39.Qf4 g5. Motor: −2.10.' },
      ],
    },
    '38b': {
      text: '38...g5!: Siyah g-piyonunu ileri sürer.',
      amac: 'Beyaz vezirini h6’da hapsetmek ve g-hattını kapalı tutmak.',
      neden: 'g5 piyonu vezirin g5 ve f4 karelerinden dönüşünü keser, f6 tarafından korunur. 38...gxh5 39.Bxh5 ise Beyaza saldırı şansı verir (−1.12). Artık Beyaz vezir pratikte oyun dışı.',
      diger: [
        { move: '38...gxh5', text: '39.Bxh5 Rb8 40.Bf3 Qxc4. Motor: −1.12.' },
        { move: '38...Rg7', text: '39.hxg6 Rxg6 40.Qh4. Motor: −1.11.' },
      ],
    },
    '39w': {
      text: '39.Be3??: Fil e3’e gelir ve d4 filine karşı çıkar.',
      amac: 'Güçlü d4 filini değişmek.',
      neden: 'Taktik bir hata: f2 piyonu c2’deki vezir yüzünden açmazdadır, bu yüzden e3 fili yalnızca görünüşte korunmaktadır. Motor 39.Be1 (−4.91) ya da 39.g4 ile direnmeyi öneriyordu; maç hamlesi −7.3.',
      diger: [
        { move: '39.Be1', text: '39...Qxc4 40.Bd2; Beyaz hâlâ kötü ama oynuyor. Motor: −4.91.' },
        { move: '39.Re1', text: '39...Rxe1 40.Bxe1 Qxc4. Motor: −5.04.' },
        { move: '39.g4', text: '39...Rf7 40.Kg1 Qxc4. Motor (derinlik 18): −4.12.' },
      ],
    },
    '39b': {
      text: '39...Rxe3!: Kale e3 filini alır.',
      amac: 'Savunan fili yok edip Beyazın taşlarını birbirinden koparmak.',
      neden: '40.fxe3 mümkün değil (f2 piyonu Qc2 nedeniyle açmazda). 40.Rxd4 Rxf3! 41.Kxf3 ise d4 kalesini vezir şahlarına açık bırakır. Motor: 39...Rxe3 −9.6; 39...g4 sadece −1.15.',
      diger: [
        { move: '39...g4', text: '40.Rxd4 gxf3+ 41.Kh2; Siyah üstün ama fark az. Motor: −1.15.' },
        { move: '39...Rf7', text: '40.Bxd4 cxd4 41.Rxd4; denge. Motor: 0.00.' },
      ],
    },
    '40w': {
      text: '40.Rxd4: Kale d4 filini alır.',
      amac: 'Materyali dengelemek.',
      neden: 'Tüm hamleler kaybeder: 40.fxe3 kural dışıdır, 40.Rc1 Qxc1 ise vezir kaybettirir. Rxd4 en azından materyali geri alır gibi görünür.',
      diger: [
        { move: '40.Rc1', text: '40...Qxc1 41.fxe3 Qxe3; Siyah bir kale fazla. Motor: −8.97.' },
      ],
    },
    '40b': {
      text: '40...Rxf3!: Kale f3 filini alır.',
      amac: 'Beyaz şahını f3’e çekip vezir şahlarıyla d4 kalesini kazanmak.',
      neden: '41.Kxf3 sonrasında şah ve d4 kalesi vezir çatalına açıktır (Qc3+ ya da Qf5+). 40...cxd4?? ise 41.Qxf6+ ile Beyaza mat saldırısı verir (+4.91), 40...Qf5 de 41.Bg4 ile işleri karıştırır.',
      diger: [
        { move: '40...cxd4??', text: '41.Qxf6+ Kg8 42.Bd5+ ile Beyaz kazanır. Motor: +4.91.' },
        { move: '40...Qf5', text: '41.Bg4 Rxg3+ 42.fxg3; Beyaz direnir. Motor: +1.76.' },
      ],
    },
    '41w': {
      text: '41.Kxf3: Şah kaleyi alır.',
      amac: 'Materyali geri almak.',
      neden: 'Her şey kaybediyor: 41.Rd2 Qxd2 ve 41.Qf8+ Rxf8 de çaresiz. Şahla almak en doğal ama d4 kalesi vezir şahlarına açık kalır.',
      diger: [
        { move: '41.Rd2', text: '41...Qxd2 42.Kxf3; Siyah bir kale fazla. Motor: mat görüyor.' },
      ],
    },
    '41b': {
      text: '41...Qf5+: Vezir şah çeker. Timman terk etti.',
      amac: 'Şahla birlikte d4 kalesini kazanmak.',
      neden: '42.Rf4 gxf4 43.Qxf4 sonrasında Siyah bir kale fazladır; 42.Kg2 cxd4 de aynıdır. Motor 41...Qc3+ 42.Kg2 Qxd4 ile matı daha hızlı buluyor, ama maç hamlesi de kesin kazanır (−5.4).',
      diger: [
        { move: '41...Qc3+', text: '42.Kg2 Qxd4; Motor mat görüyor.' },
      ],
    },
  },
  sources: [
    { title: 'Chessgames.com: Hoogovens 1975 (sıralama ve çapraz tablo)', url: 'https://chessgames.com/perl/chess.pl?tid=79430' },
    { title: 'Wikipedia: Luben Popov', url: 'https://en.wikipedia.org/wiki/Luben_Popov' },
    { title: 'Wikipedia: Jan Timman', url: 'https://en.wikipedia.org/wiki/Jan_Timman' },
  ],
  exercises: [
    { id: 'tpo-1', kind: 'tekrar', plan: false, title: 'c2 çatalı',
      source: 'Timman – Popov, Wijk aan Zee 1975 (28. hamle)',
      fen: '3q1r2/r5kp/p2b1pp1/P1pB4/1nP5/4RQP1/1B3P1P/4R1K1 b - - 8 28',
      prompt: 'Beyaz kalelerini e-hattında ikiledi, ama veziri e4’ten f3’e çekti. Siyahın atı b4’te bekliyor. Siyah ne kazanır?',
      hint: 'Vezir e4’teyken hangi kareyi koruyordu?',
      line: ['Nc2', 'Rd1', 'Nxe3'],
      explanation: '**28...Nc2!** At e1 ve e3 kalelerine birlikte saldırır; **29.Rd1 Nxe3 30.Qxe3** sonrası Siyah kalite kazanmıştır. Motor: ...Nc2 −0.6, sonraki en iyi 28...Nxd5 +2.1.',
      link: 'Atın b4’te sabırla beklemesi, 28.Qf3? hatasından sonra c2 çatalını mümkün kıldı.' },
    { id: 'tpo-2', kind: 'tekrar', plan: false, title: 'Rxe3 ve Rxf3',
      source: 'Timman – Popov, Wijk aan Zee 1975 (39. hamle)',
      fen: '4r2k/4r2p/p4p1Q/P1p3pP/2Pb4/4BBP1/2q2PK1/3R4 b - - 1 39',
      prompt: 'Beyazın veziri h6’da oyundan çıktı. Timman filini e3’e getirip d4 filine karşı çıktı. Siyah nasıl kazanır?',
      hint: 'e3 filini alın; 40.Rxd4 olursa f3 filini de alıp vezirin şah çeken çatal karesini düşünün.',
      line: ['Rxe3', 'Rxd4', 'Rxf3'],
      explanation: '**39...Rxe3! 40.Rxd4 Rxf3!** 41.Kxf3 Qc3+ şah ve d4 kalesine çatal. 40.fxe3 oynanamaz: f2 piyonu c2’deki vezir yüzünden g2 şahına karşı açmazdadır. Motor: ...Rxe3 −9.2, sonraki en iyi 39...g4 −1.2; 40...Rxf3 mat görüyor, 40...Qf5 +4.1.',
      link: 'Kalite fedası savunan fili yok eder ve vezir için çatal karesini açar.' },
    { id: 'tpo-3', kind: 'transfer', plan: false, title: 'At c2’de',
      source: 'Leko – Rotstein, Werfen açık turnuvası 1989 (16. hamle)',
      fen: '1rbqnrk1/4ppbp/3p2p1/2p5/3nP3/1pPPB1PP/1P1Q1PBK/R1NN1R2 b - - 0 16',
      prompt: 'Kapalı Sicilya: Beyaz g3-Bg2 kuruluşunda. Siyahın atı d4’te, piyonu b3’te. Beyaz c3 ile atı kovaladı. At nereye gider?',
      hint: 'a1 kalesi ve e3 fili aynı kareden saldırıya açık.',
      line: ['Nc2'],
      explanation: '**16...Nc2!** At a1 kalesine ve e3 filine saldırır; b3 piyonu da atı destekler. Motor: ...Nc2 −0.5, sonraki en iyi 16...Nc6 +0.7.',
      link: 'Popov’un 28...Nc2 hamlesi gibi: c2 karesine gelen at iki taşa birden saldırır.' },
    { id: 'tpo-4', kind: 'transfer', plan: false, title: 'e3 filine kalite fedası',
      source: 'Bastian – Karpov, Hannover turnuvası 1983 (23. hamle)',
      fen: '5r1k/pb4bp/1pqp1PB1/2p5/4rp2/1QPPB3/PP5P/4RRK1 b - - 0 23',
      prompt: 'Kapalı Sicilya, g3-Bg2 kuruluşu. Beyaz f6 piyonuyla g7 filine saldırıyor; Siyahın e4 kalesi ise e3 filine bakıyor. Hamle Siyahta.',
      hint: 'Önce e3 filini ortadan kaldırın; f4 piyonu e3’e ilerleyebilir.',
      line: ['Rxe3', 'fxg7+', 'Kxg7'],
      explanation: '**23...Rxe3! 24.fxg7+ Kxg7** ve Siyahın f4 piyonu e3’e gelir, b7 fili ve c6 veziri uzun çaprazda g2’ye bakar. Motor: ...Rxe3 −3.8, sonraki en iyi 23...Re5 −2.8, 23...Re6 −0.5.',
      link: 'Popov gibi Karpov da e3’teki savunan fili kaleyle aldı; kalite fedası şahın etrafını açtı.' },
  ],
};
