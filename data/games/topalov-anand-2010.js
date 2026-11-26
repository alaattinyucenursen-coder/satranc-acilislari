// Veselin Topalov – Viswanathan Anand, Dünya Şampiyonası maçı, Sofya 2010 (8. oyun). Kaynak: PgnMentor (Topalov.pgn).
export default {
  id: 'topalov-anand-2010',
  theme: 'e5 piyonu, d6’ya giren at ve zıt renkli fillerle kazanılan oyun sonu',
  white: 'Veselin Topalov', black: 'Viswanathan Anand',
  whiteShort: 'Topalov', blackShort: 'Anand',
  event: 'Dünya Şampiyonası maçı, 8. oyun', site: 'Sofya', year: 2010, eco: 'D17',
  variation: 'Slav Savunması, 5.a4 Bf5 6.Ne5 (Krause hamlesi), 7.f3', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6 7. f3 c5 8. e4 Bg6 9. Be3 cxd4 10. Qxd4 Qxd4 11. Bxd4 Nfd7 12. Nxd7 Nxd7 13. Bxc4 Rc8 14. Bb5 a6 15. Bxd7+ Kxd7 16. Ke2 f6 17. Rhd1 Ke8 18. a5 Be7 19. Bb6 Rf8 20. Rac1 f5 21. e5 Bg5 22. Be3 f4 23. Ne4 Rxc1 24. Nd6+ Kd7 25. Bxc1 Kc6 26. Bd2 Be7 27. Rc1+ Kd7 28. Bc3 Bxd6 29. Rd1 Bf5 30. h4 g6 31. Rxd6+ Kc8 32. Bd2 Rd8 33. Bxf4 Rxd6 34. exd6 Kd7 35. Ke3 Bc2 36. Kd4 Ke8 37. Ke5 Kf7 38. Be3 Ba4 39. Kf4 Bb5 40. Bc5 Kf6 41. Bd4+ Kf7 42. Kg5 Bc6 43. Kh6 Kg8 44. h5 Be8 45. Kg5 Kf7 46. Kh6 Kg8 47. Bc5 gxh5 48. Kg5 Kg7 49. Bd4+ Kf7 50. Be5 h4 51. Kxh4 Kg6 52. Kg4 Bb5 53. Kf4 Kf7 54. Kg5 Bc6 55. Kh6 Kg8 56. g4 1-0`,

  summary: 'Maçın 8. oyununda skor Anand lehine 4–3 iken Topalov, maçta üçüncü kez Slavın 6.Ne5 e6 7.f3 c5 hattına girdi. Bu, Kramnik’in 2006 Elista maçında Topalov’a karşı kullandığı sağlam bir kuruluştu: vezirler 10. hamlede değişir, Siyah c4 piyonunu geri verir ve hafif ama kalıcı bir Beyaz baskısına dayanmaya çalışır. 3. ve 5. oyunlarda 13...a6 oynayan Anand bu kez **13...Rc8** ile sapma yaptı; Topalov da hazırlıklı yenilik **18.a5** ile karşılık verdi. Orta oyunun kırılma anı **22...f4** oldu: Siyah, Beyazın filini kovalayayım derken **23.Ne4! Rxc1 24.Nd6+** ara hamlesini mümkün kıldı ve at d6’ya şahla yerleşti. Topalov maçtan sonra atın d6’ya geldiği anda pozisyonu kazanılmış saydığını söyledi; motor ise farkı o kadar büyük görmüyor (yaklaşık +0.8). Taşlar değişince **zıt renkli filli** bir oyun sonu kaldı: Beyazın bir fazla piyonu, d6’da filiyle korunan bir geçer piyonu ve çok aktif bir şahı vardı. Yorumcuların çoğu bu oyun sonunun beraberlikle bitmesini bekliyordu; Anand da 50...h4! ile doğru savunmayı buldu. Ama **54...Bc6??** ile fil h7 piyonunu korumayı bıraktı, 55.Kh6 Siyah şahını g8’e bağladı ve 56.g4 sonrası g5-g6 ile ikinci bir geçer piyon tehdidi durdurulamaz hale geldi. Anand terk etti ve skor 4–4 oldu.',
  intro: 'Slav Savunmasında (1.d4 d5 2.c4 c6) Siyah d5’i piyonla destekler ve Vezir Gambitinin klasik derdinden, c8 filinin kapanmasından kurtulur. 4...dxc4 ile girilen **Çek varyantı** Slavın ana hattı sayılır: Siyah c4 piyonunu alır, Beyaz 5.a4 ile ...b5’i engeller, Siyah da 5...Bf5 ile filini piyon zincirinin dışına çıkarır ve 6.e4’ü önler. Beyaz burada iki yol arasında seçim yapar: sakin 6.e3 (Hollanda varyantı) ya da daha keskin **6.Ne5** (Krause hamlesi). İkincisinde Beyazın fikri f3 ve e4 ile merkezi tamamen ele geçirmek, c4 piyonunu da daha sonra almaktır. 6...e6 7.f3 sonrası Siyahın en ünlü cevabı 7...Bb4 8.e4 Bxe4 taş fedasıdır; Anand ise Kramnik’in tercih ettiği **7...c5** ile merkeze hemen vurmayı ve vezirleri değiştirmeyi seçti. Bu hatta Siyah çok az risk alır ama pasif kalır: Beyazın merkezdeki şahı, açık hatları ve f3-e4 piyonları ona hafif ama kalıcı bir oyun sonu üstünlüğü verir. Oyunun hikâyesi tam olarak bu küçük üstünlüğün adım adım büyütülmesidir: e5 ilerleyişi d6 karesini açar, at oraya yerleşir, taşlar değişir ve sonunda zıt renkli filli, kazanması çok zor ama kaybetmesi de kolay bir oyun sonu kalır.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Ne5 ve f3** ile e4 ilerleyişini hazırlamak; c4 piyonunu acele etmeden, merkez kurulduktan sonra geri almak.',
      'Vezirler erken değiştiği için şahı **e2’de merkezde** tutmak; şah hem d-hattındaki kalelere yol açar hem de oyun sonunda ilk savaşan taş olur.',
      'Vezir kanadında **a5 ve Bb6** ile alan kazanmak; Siyahın b7 piyonunu ve c7-d8 karelerini sabitleyip taşlarını bağlamak.',
      '**e5** ilerleyişiyle e6 piyonunu sabitlemek ve **d6 karesini** Beyaza vermek; atı Ne4-d6 yoluyla oraya yerleştirmek.',
      'Ara hamlelere dikkat etmek: tehdit altındaki at, kaleyi hemen geri almak yerine **Nd6+** ile şah çekerek tempo kazanır.',
      'Zıt renkli filli oyun sonunda d6 geçer piyonuyla Siyah filini d7-e8 karelerine bağlamak, şahı **h6’ya** sokmak ve h5, g4-g5 kırılmalarıyla **ikinci bir geçer piyon** yaratmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**7...c5 ve ...cxd4** ile Beyazın merkezini kurulmadan sınamak, vezirleri değişip saldırı riskini ortadan kaldırmak.',
      '**...Nfd7** ile güçlü e5 atını değiştirmek; c4 piyonunu tutmaya çalışmadan sade bir pozisyona geçmek.',
      '**13...Rc8** ile c-hattını almak ve Beyazın önceki oyunlardaki hazırlığından (14.Rc1 fikri) kaçmak.',
      'Fil çiftine güvenmek; **...f6-f5** ile e4 piyonuna baskı yapıp Beyazı ya değişime ya da e5’e zorlamak.',
      'e5 geldikten sonra kara kareli fili **...Bg5** ile aktifleştirmek; 22...Bxe3 23.Kxe3 f4+ gibi sade değişimlerle beraberlik şansını korumak.',
      'Zıt renkli filli oyun sonunda **beyaz kareli kale** kurmak: fil hem d7’yi (geçer piyonun önünü) hem de h7 piyonunu b1-h7 köşegeninden korumalı, şah da f7-g8 arasında beyaz şahı uzak tutmalı.',
    ] },
  },
  critical: [
    { move: '13b', title: '13...Rc8: Anand’ın sapması', text: '3. ve 5. oyunlarda Anand 13...a6 oynamış, iki oyunda da sıkışık bir pozisyonda uzun süre savunmak zorunda kalmıştı. Malcolm Pein’in ChessBase ve The Week in Chess’teki notlarına göre 13...Rc8, Topalov’un hazırlıklarını devreye sokmasını engellemek içindi. Motor iki hamleyi neredeyse eşit görüyor (13...a6 +0.6, 13...Rc8 +0.6). Ama oyunun ikinci evresinde Topalov yine hazırlıklıydı: 18.a5 yeni bir hamleydi ve Pein’e göre iki taraf da bu hamleyi evde incelemişti.' },
    { move: '21w', title: '21.e5: d6 karesi Beyazın', text: 'Siyah 20...f5 ile e4’ü vurdu. Beyaz 21.exf5 ile alsaydı e6 piyonu ve Siyahın filleri serbest kalırdı (motor: +0.1). **21.e5** ise e6’yı geri bırakılmış bir piyon olarak sabitler, d6 karesini Siyahın piyonlarının erişemeyeceği bir **delik** haline getirir ve g6 filinin önünü f5 piyonuyla kapatır. Motor 21.e5’i açık ara en iyi buluyor (+0.7). Bundan sonra Beyazın bütün planı atı d6’ya getirmek üzerine kuruludur.' },
    { move: '22b', title: '22...f4?: değişim yerine kovalama', text: 'Siyah e3 filini kovalamak için 22...f4 oynadı; Pein’e göre hamle hızlı oynandı. Pein onu “atı d6’ya sokan korkunç bir hamle” diye niteledi, maçın resmi yorumcusu Azmaiparaşvili de Sport-Express’te “zevok” (gözden kaçırma) dedi. Önerilen yol 22...Bxe3 23.Kxe3 f4+ idi; ChessBase’in aktardığı Dorfman analizinde 24.Kd4! Ke7 25.Ne4! Bxe4 26.Kxe4 ile Beyaz yine hoş durur ama bu “daha küçük kötülük” sayılır. Anand basın toplantısında f4 ile oyunu “tamamen yanlış oynadığını”, belki fil değişiminin daha iyi olduğunu söyledi. İlginç olan şu: motor derinlik 20’de iki hamleyi neredeyse aynı değerlendiriyor (22...f4 +0.8, 22...Bxe3 +0.8). Yani hatanın bedeli hesaplanabilir bir piyon değil, d6’ya yerleşen atın getirdiği uzun süreli pasiflikti.' },
    { move: '24w', title: '24.Nd6+!: şahla kaçış', text: 'Siyah 23...Rxc1 ile kaleyi aldı; e4 atına da g6 fili saldırıyor. Doğal görünen 24.Bxc1? Bxe4 25.fxe4 sonrası Beyaz güçlü atını kaybeder ve d6 karesi boşa gider (motor: −0.5); 24.Rxc1? Bxe4 ise daha da kötü (−0.9). **24.Nd6+!** önce şah çeker, atı tehditten kurtarır ve hedef kareye yerleştirir; kale bir hamle sonra 25.Bxc1 ile geri alınır (motor: +0.7). Topalov maç sonrası atın d6’ya geldiği anı pozisyonu kazanılmış saydığı an olarak gösterdi.' },
    { move: '28w', title: '28.Bc3: yorumcuları şaşırtan seçim', text: 'ChessBase raporuna göre yorumcular 28.Bb4!’ü bekliyordu ve Seirawan ilk başta 28.Bc3’e inanmak istemedi. Motor da 28.Nc4 (+1.0) ve 28.Bb4’ü (+0.7) maç hamlesinden (+0.4) iyi buluyor. 28.Bc3 sonrası Siyah atı fille değişebildi (28...Bxd6), ama 29.Rd1! bağlamasıyla Beyaz taşı geri aldı ve f4 piyonunu kazanacağı bir pozisyon elde etti. Beyazın avantajı biraz azaldı ama kaybolmadı.' },
    { move: '30b', title: '30...g6?!: sonradan ölümcül zayıflık', text: 'Pein bu hamle için “her piyon hamlesi zayıflatır, bu da sonradan ölümcül olacak” dedi, ChessBase raporu da 30...g6’yı “bir muamma” olarak niteledi. Motor 30...Kc8 (+0.3) ya da 30...Rd8’i (+0.5) daha iyi buluyor. g6 piyonu h7 piyonunu tek başına bıraktı ve f6-g5-h6 karelerini beyaz şaha açtı: oyun sonunda beyaz şahın h6’ya girip h7’ye saldırması ve Siyah şahını g8’e bağlaması tam olarak bu zayıflıktan doğdu.' },
    { move: '50b', title: '50...h4!: doğru savunma', text: 'ChessBase raporu bu hamleyi “ustaca” ve beraberlik için yeterli buldu. Siyah h-piyonunu feda ederek beyaz şahı h4’e çeker ve g-piyonunun g4-g5 ile ilerleyişini zamansız hale getirir. 51.Kh6 h3 52.gxh3 Kg8 sonrası da Beyazın kırılma imkânı yoktur. Motor bu evrede bütün makul hamleleri yaklaşık +0.8 ile +1.0 arasında görüyor; bu tür bir oyun sonunda bu sayı “Beyaz bastırıyor ama kazanç yok” demektir.' },
    { move: '54b', title: '54...Bc6??: oyunu kaybettiren hamle', text: 'Pein “gerçekten korkunç bir hamle” dedi ve 54...Bd3 ya da 54...Ke8’in beraberliği tutacağını yazdı; Sport-Express’teki yorumda da aynı iki hamle önerilir. Neden? Fil b5’ten c6’ya geçince h7 piyonunu b1-h7 köşegeninden koruma şansını kaybeder. 55.Kh6 gelince Siyah şahı h7 için g8’e mecbur kalır (55...Ke8? 56.Kxh7, motor: +4.2) ve 56.g4 ile g5-g6 kırılması gelir. Motor 54. hamlede farkı göremiyor (derinlik 22’de 54...Bc6 +0.9, 54...Bd3 +1.0), ama 56.g4 sonrası değerlendirme +4.2’ye fırlıyor; 54...Bd3 55.Kh6 Bf5 56.g4 Bc2 57.f4 sonrası ise yalnızca +0.9.' },
  ],
  lessons: [
    'Slavın 6.Ne5 hattında Beyazın fikri f3 ve e4 ile merkezi kurmaktır; c4 piyonu çoğu zaman sonra kendiliğinden geri alınır. 7...c5 ile vezirleri değişen Siyah güvenliği seçer ama küçük ve kalıcı bir dezavantajı kabul eder.',
    'Vezirsiz orta oyunda şah merkezde (e2, e3, d4) en iyi yerindedir: hem kalelerin bağlantısını sağlar hem de oyun sonuna ilk hazır olan taştır.',
    'Bir piyon ilerleyişi (e5) rakibin piyonlarının artık kontrol edemeyeceği bir kare (d6) yaratıyorsa, o kare bir at için **ileri karakol** olur. Savunan taraf böyle bir kareye giden yolu (Ne4) kapatmak için gerekirse fil değişimini kabul etmelidir.',
    'Tehdit altındaki bir taş, rakibin cevabını zorlayan bir hamleyle (şah, taş alma, büyük tehdit) kurtarılabiliyorsa önce o hamle oynanır: 24.Nd6+! ve ancak sonra 25.Bxc1.',
    'Zıt renkli filli oyun sonlarında tek fazla piyon çoğu zaman yetmez. Kazanmak için **iki kanatta geçer piyon** ve içeri giren bir şah gerekir; savunan tarafın fili ise iki işi aynı köşegenden görebilmelidir.',
    'Gereksiz piyon hamleleri (30...g6) yıllarca değil, yirmi hamle sonra cezalandırılabilir: her piyon hamlesi geri alınamayan bir zayıf kare bırakır.',
    'Uzun savunmalarda dikkat en çok, rakip “hiçbir şey yapmıyor” gibi göründüğünde dağılır. Topalov 39-54. hamleler arasında şahını ve filini dolaştırıp sordu; Anand doğru savunmayı defalarca buldu ama tek bir yanlış fil karesi oyunu bitirdi.',
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkezi vezir piyonuyla tutar.',
      amac: 'd4 piyonu e5 ve c5 karelerini kontrol eder, c1 filine yol açar ve c4 ile Vezir Gambitine zemin hazırlar.',
      neden: 'Anand 1. oyunda Grünfeld’de kaybetmiş, sonra Slava geçmişti. Topalov aynı hatta derin hazırlık yaptığı için 1.d4 ile Slav tartışmasını sürdürdü.',
      diger: [
        { move: '1.e4', text: 'Motor bu hamleyi biraz daha iyi buluyor (+0.4), ama bu maçta Topalov’un hazırlığı 1.d4 üzerineydi; Anand da 1.e4’e karşı çok geniş bir repertuvara sahipti.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (+0.2); genelde aynı Vezir Gambiti pozisyonlarına döner ama Siyaha daha fazla seçenek bırakır.' },
      ],
    },
    '1b': {
      text: '1...d5 ile Siyah merkezde aynı simetrik karşılığı verir.',
      amac: 'e4 karesini kontrol etmek ve merkezde Beyaza eşit pay almak.',
      neden: 'Slav Savunmasına girmek için gerekli ilk adım. Anand bu maçta siyah taşlarla Slavın sağlamlığına güveniyordu.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına (Grünfeld, Nimzo-Hint) götürür; Anand 1. oyunda Grünfeld’le kaybetmişti (motor: +0.3).' },
      ],
    },
    '2w': {
      text: '2.c4 Vezir Gambiti: Beyaz kenar piyonuyla d5’e baskı yapar.',
      amac: 'd5 piyonunu söküp merkezi tamamen ele geçirmek ya da Siyahı c4’ü almaya zorlayıp e4 ile büyük merkez kurmak.',
      neden: 'c-piyonu merkez piyonu değildir; onu vermek Beyaz için ucuz, d5’i ise Siyahın asıl dayanağıdır. Motor da 2.c4’ü en iyi buluyor (+0.3).',
      diger: [
        { move: '2.Nf3', text: 'Daha sakin bir sıra (+0.2); Siyahın ...Bf5 ya da ...Bg4 gibi kuruluşlarına izin verir.' },
        { move: '2.Bf4', text: 'Londra Sistemi; teorik tartışmadan kaçar ama bir Dünya Şampiyonası maçında Beyaz için iddialı değildir.' },
      ],
    },
    '2b': {
      text: '2...c6 Slav Savunması: d5 piyonla desteklenir.',
      amac: 'Vezir Gambitinin Reddi’nden (2...e6) farklı olarak c8 filini kapatmadan d5’i tutmak; fil daha sonra f5 ya da g4’e çıkabilir.',
      neden: 'Slavın en büyük artısı beyaz kareli filin sorunsuz gelişmesidir. Kramnik 2006 Elista maçında Topalov’a karşı bu açılışla başarılı olmuştu.',
      diger: [
        { move: '2...e6', text: 'Klasik Vezir Gambitinin Reddi: çok sağlam ama c8 fili uzun süre pasif kalır (+0.3).' },
        { move: '2...dxc4', text: 'Kabul Edilmiş Vezir Gambiti; motor bunu da iyi buluyor (+0.3), ama Beyaz e4 ile merkezi kolayca alabilir.' },
      ],
    },
    '3w': {
      text: '3.Nf3 ile şah atı gelişir; e5 karesini kontrol eder.',
      amac: 'Gelişmeyi tamamlarken Siyaha erken ...e5 serbest bırakmamak.',
      neden: '3.Nc3’ten önce Nf3 oynamak bazı Yarı Slav ve ...dxc4 sıralarını farklı kılar; Topalov hazırlığını bu sıra üzerine kurmuştu.',
      diger: [
        { move: '3.Nc3', text: 'Motor biraz daha iyi buluyor (+0.4); ama 3...dxc4 ya da 3...e5 (Winawer karşı gambiti) gibi ek seçenekler verir.' },
        { move: '3.cxd5', text: 'Değişme Slavı (+0.4): simetrik ve sade, Beyazın kazanma şansı düşüktür.' },
      ],
    },
    '3b': {
      text: '3...Nf6 ile Siyah atını gelişirir ve e4’e baskı yapar.',
      amac: 'Gelişmeyi tamamlamak ve Beyazın e4 ilerleyişini zorlaştırmak.',
      neden: 'En esnek hamle; ...dxc4, ...e6 (Yarı Slav) ya da ...a6 (Çebanenko) seçeneklerini sonraya bırakır. Motor da ilk sırada gösteriyor (+0.3).',
      diger: [
        { move: '3...e6', text: 'Yarı Slava yönelir; 4.e3 ile Beyaz sakin bir kuruluş seçebilir (+0.4).' },
        { move: '3...dxc4', text: 'Erken alma; 4.e3 b5 5.a4 ile Beyaz piyonu rahatça geri alır (+0.5).' },
      ],
    },
    '4w': {
      text: '4.Nc3 ile ikinci at da d5’e baskı yapar.',
      amac: 'd5 üzerindeki baskıyı artırmak ve e4 ilerleyişini desteklemek.',
      neden: 'Ana hat. 4.e3 c8 filini kapatır; 4.Nc3 ise e4’e hazırlanan en aktif kuruluştur (motor: +0.3).',
      diger: [
        { move: '4.e3', text: 'Sakin Slav (+0.3): Siyah 4...Bf5 ile filini rahatça gelişir.' },
        { move: '4.cxd5', text: 'Değişme Slavına geçiş (+0.3); simetrik yapı.' },
      ],
    },
    '4b': {
      text: '4...dxc4 Çek varyantı: Siyah c4 piyonunu alır.',
      amac: 'Beyazı piyonu geri almak için zaman harcamaya zorlamak ve bu sırada c8 filini f5’e çıkarmak.',
      neden: 'Bu Slavın ana hattı sayılır. Siyah piyonu sonsuza kadar tutamaz ama Beyazın onu geri alma sürecinde kazandığı zamanla filini gelişir. Motor: +0.3, en iyi hamle.',
      diger: [
        { move: '4...e6', text: 'Yarı Slav: çok keskin Meran ve Moskova hatlarına götürür (+0.4).' },
        { move: '4...a6', text: 'Çebanenko varyantı: ...b5 ile vezir kanadında alan almayı hedefler.' },
        { move: '4...g6', text: 'Schlechter varyantı: Slav ile Grünfeld arası bir kuruluş (+0.5).' },
      ],
    },
    '5w': {
      text: '5.a4 ile ...b5 engellenir.',
      amac: 'Siyahın c4 piyonunu ...b5 ile tutmasını önlemek; piyon daha sonra fil ya da atla geri alınacak.',
      neden: 'Bedeli b4 karesinin zayıflamasıdır (Siyah fili ve atı ileride bu kareyi kullanabilir). Ama piyonu güvenle geri almanın en temiz yolu budur (motor: +0.2).',
      diger: [
        { move: '5.e4', text: '5...b5 ile Siyah piyonu tutar ve keskin, gambit tarzı bir oyun başlar.' },
        { move: '5.e3', text: '5...b5 sonrası Siyah piyonu korur; Beyaz 6.a4 ile yine aynı fikre döner.' },
        { move: '5.Ne5', text: 'Hemen c4’e yönelmek; 5...Nbd7 6.Nxc4 b5 ile Siyah rahat gelişir (motor: 0.0).' },
      ],
    },
    '5b': {
      text: '5...Bf5 ile fil e6’dan önce piyon zincirinin dışına çıkar.',
      amac: 'Filin ...e6 ile kapanmasını önlemek ve e4 karesini kontrol ederek Beyazın e4 ilerleyişini geciktirmek.',
      neden: 'Wikipedia’nın da belirttiği gibi 5...Bf5, 6.e4’ü önler ve Çek varyantının ana hamlesidir. Motor en iyi buluyor (+0.3).',
      diger: [
        { move: '5...Bg4', text: 'Fil f3 atını bağlar; 6.Ne5 ile Beyaz tempo kazanır, daha az oynanan bir hat.' },
        { move: '5...e6', text: 'Filini kapatır; 6.e4 ile Beyaz merkezi rahatça kurar (+0.6).' },
        { move: '5...Na6', text: 'Smislov sistemi: at b4’e hedeflenir; daha nadir bir yol.' },
      ],
    },
    '6w': {
      text: '6.Ne5 Krause hamlesi: at c4 piyonuna saldırır.',
      amac: 'c4’ü geri almaya hazırlanırken f-piyonunun önünü açmak; f3 ve e4 ile merkezi kurmak.',
      neden: '6.e3 (Hollanda varyantı) daha sakin ve teorik olarak eşit bir yoldur. Topalov ise f3-e4 ile Siyahın f5 filini tempo ile kovalayan, daha iddialı bir planı seçti. Motor iki hamleyi eşit görüyor (+0.3).',
      diger: [
        { move: '6.e3', text: 'Ana alternatif (+0.3): 6...e6 7.Bxc4 Bb4 8.O-O ile çok iyi bilinen, dengeli pozisyonlar.' },
        { move: '6.Nh4', text: 'f5 filine saldırır (+0.2); 6...e6 7.Nxf5 exf5 ile fil çifti alınır ama Siyahın yapısı sağlamdır.' },
      ],
    },
    '6b': {
      text: '6...e6 ile f8 filinin yolu açılır.',
      amac: 'Gelişmeyi hızlandırmak ve ...Bb4 ile c3 atını bağlama imkânı yaratmak.',
      neden: 'Ana hat. 6...Nbd7 (Carlsbad) e5 atını hemen sorgular ama 7.Nxc4 ile Beyaz piyonu rahatça geri alır. Motor 6...e6’yı en iyi buluyor (+0.2).',
      diger: [
        { move: '6...Nbd7', text: '7.Nxc4 Qc7 8.g3 e5 ile Carlsbad yapısı; ayrı ve geniş bir teori (+0.3).' },
        { move: '6...Na6', text: 'At b4 ve c5’e yönelir; daha nadir (+0.4).' },
      ],
    },
    '7w': {
      text: '7.f3 ile e4 ilerleyişi hazırlanır.',
      amac: 'Merkezi f3-e4-d4 piyonlarıyla kurmak ve f5 filini tempo ile geri püskürtmek.',
      neden: 'Beyaz c4’ü hemen almak yerine önce merkezi kuruyor: piyon kaçmaz, çünkü Ne5 ve Bxc4 ile her an geri alınabilir. Motor en iyi hamle olarak gösteriyor (+0.2).',
      diger: [
        { move: '7.e3', text: 'Sakin gelişme (+0.2): 7...Nbd7 8.Nxd7 Qxd7 9.Bxc4 ile simetrik ve eşit bir pozisyon.' },
        { move: '7.g3', text: 'Fili uzun köşegene getirir (+0.1); e4 karesi daha yavaş kontrol edilir.' },
      ],
    },
    '7b': {
      text: '7...c5 ile Siyah d4’e vurur.',
      amac: 'Beyazın merkezi tamamlanmadan d4’ü sorgulamak; ...cxd4 ve vezir değişimiyle oyunu sadeleştirmek.',
      neden: 'Bu kuruluşu Kramnik 2006 Elista maçında Topalov’a karşı kullanmıştı; Giri’nin ChessBase analizi Anand’ın 3. oyunda onu bilerek seçtiğini belirtir. Hamle güvenli ama Siyaha az kazanma şansı verir: Giri hattı “kaya gibi sağlam ama pasif” diye niteledi. Motor 7...Bb4’ü daha iyi buluyor (0.0, 7...c5 +0.4), ama 7...Bb4 çok keskin bir taş fedasına götürür.',
      diger: [
        { move: '7...Bb4', text: 'Ana hat (motor: 0.0): 8.e4 Bxe4! 9.fxe4 Nxe4 ile Siyah taş karşılığında iki piyon ve güçlü bir saldırı alır; Wikipedia’nın da belirttiği gibi Beyaz bazı kollarda 10.Qf3 ile beraberliği zorlayabilir.' },
        { move: '7...Bg6', text: 'Fili önceden geri çeker (+0.7); 8.e4 Bb4 9.Bxc4 ile Beyaz rahat bir merkez kurar.' },
      ],
    },
    '8w': {
      text: '8.e4 ile Beyaz f5 filini kovalar ve büyük merkezini kurar.',
      amac: 'Merkezde tempo ile alan almak ve Siyahın filini pasif g6 karesine göndermek.',
      neden: 'Ne5 ve f3 hamlelerinin asıl hedefi bu ilerleyiştir. 8.dxc5 merkezi değiştirip Siyaha rahat bir oyun verirdi (+0.2), 8.e3 ise d4’ü zayıflatır (−0.3). Motor 8.e4’ü açık ara en iyi buluyor (+0.6).',
      diger: [
        { move: '8.dxc5', text: '8...Nfd7 9.Nxd7 Nxd7 ile Siyah c5’i kolayca geri alır ve rahat gelişir (+0.2).' },
        { move: '8.e3', text: '8...cxd4 9.exd4 sonrası d4 tek başına kalır, Siyah rahat (−0.3).' },
      ],
    },
    '8b': {
      text: '8...Bg6 ile fil geri çekilir ve e4 piyonuna bakmaya devam eder.',
      amac: 'Fili korumak ve ileride ...f6-f5 ile e4’e karşı oynamak.',
      neden: '8...cxd4 9.exf5 ile karmaşık bir oyun başlar; Kramnik hattının fikri sakin bir geri çekilme ve ardından vezir değişimidir. Motor iki hamleyi yakın görüyor (8...cxd4 +0.4, 8...Bg6 +0.7).',
      diger: [
        { move: '8...cxd4', text: '9.exf5 Bb4 10.Bxc4 dxc3 ile karmaşık bir taş-piyon savaşı (+0.4); Siyah için riskli ama aktif.' },
        { move: '8...Nc6', text: '9.exf5 cxd4 10.Nxc6 bxc6 sonrası Siyahın yapısı bozulur (+0.8).' },
      ],
    },
    '9w': {
      text: '9.Be3 ile fil gelişir ve d4’ü destekler.',
      amac: 'd4 piyonunu korumak ve ...cxd4 sonrası vezirle almak için hazırlık yapmak.',
      neden: 'Topalov bu maçtaki üç Slav oyununda da aynı sırayı oynadı. 9.d5 daha keskin (+0.6) ama merkezi kilitleyerek Siyaha ...exd5 ve ...Bd6 ile rahat bir oyun verir. 9.Be3 ile Beyaz, küçük ama risksiz oyun sonu üstünlüğünü hedefler (+0.5).',
      diger: [
        { move: '9.d5', text: '9...exd5 10.exd5 Bd6 11.Nxc4 O-O ile Siyah gelişmede öne geçer (+0.6).' },
        { move: '9.dxc5', text: '9...Qxd1+ 10.Kxd1 ile vezirler değişir ama Beyaz şahı rok hakkını kaybeder (+0.6).' },
      ],
    },
    '9b': {
      text: '9...cxd4 ile Siyah merkezde değişir.',
      amac: 'Beyazı vezirle almaya zorlamak ve vezir değişimine kapı açmak.',
      neden: 'c5 piyonu tehdit altında; Siyahın hattı vezir değişimine dayanır. Motor en iyi hamle olarak gösteriyor (+0.5).',
      diger: [
        { move: '9...Nc6', text: '10.Bxc4 cxd4 11.Nxc6 bxc6 ile Siyahın yapısı zayıflar (+0.5).' },
        { move: '9...a6', text: 'Yavaş (+0.9): 10.dxc5 sonrası Beyaz c4’ü de kolayca alır.' },
      ],
    },
    '10w': {
      text: '10.Qxd4 ile vezir merkeze gelir; vezir değişimi kabul edilir.',
      amac: 'Merkezi korumak ve vezirsiz bir oyunda e5 atı ile e4 piyonunun baskısını sürdürmek.',
      neden: '10.Bxd4 da mümkün (+0.3) ama Siyah 10...Be7 ve ...O-O ile rahatça gelişir. 10.Nxg6? hxg6 11.Qxd4 Qxd4 ise önemli zaman kaybettirir (−0.7). Motor 10.Qxd4’ü en iyi buluyor (+0.5).',
      diger: [
        { move: '10.Bxd4', text: '10...Be7 11.Bxc4 O-O ile vezirler tahtada kalır ve Siyah rahat (+0.3).' },
        { move: '10.Nxg6', text: '10...hxg6 sonrası h-hattı Siyaha açılır ve d4 piyonu kaybedilmiştir (−0.7).' },
      ],
    },
    '10b': {
      text: '10...Qxd4 ile vezirler değişir.',
      amac: 'Saldırı tehlikesini ortadan kaldırmak ve oyunu Beyazın küçük üstünlüğüne rağmen sade bir oyun sonuna götürmek.',
      neden: 'Bu hattın bütün fikri budur. Vezirden kaçmak çok kötü olurdu: 10...Be7? 11.Qxd8+ ya da 10...Qc7? 11.Qxc4 ile Beyaz hem piyonu geri alır hem de baskıyı sürdürür (motor: +1.3).',
      diger: [
        { move: '10...Be7', text: '11.Qxd8+ Bxd8 12.Nxc4 ile Beyaz piyonu geri alır ve Siyah pasif kalır (+1.3).' },
        { move: '10...Qc7', text: '11.Qxc4 Qxc4 12.Nxc4 ile benzer bir oyun sonu, ama Siyah zaman kaybetmiştir (+1.3).' },
      ],
    },
    '11w': {
      text: '11.Bxd4 ile fil vezirle geri alır.',
      amac: 'Kaybedilen vezirin karşılığını almak; fil d4’ten g7 piyonuna ve uzun köşegene bakar.',
      neden: 'Zorunlu geri alma: başka bir hamle vezir kaybettirir (11.Nxc4? motor: −6.5).',
    },
    '11b': {
      text: '11...Nfd7 ile e5 atına saldırılır.',
      amac: 'Beyazın en güçlü taşını değiştirmek; böylece c4 piyonuna yapılan baskı da azalır.',
      neden: 'e5 atı hem c4’e hem f7’ye hem de d7 karesine bakar. Onu değiştirmek Siyahın gelişmesini kolaylaştırır. 11...a6 (+0.9) ya da 11...Nbd7 (+1.0) daha yavaş: Beyaz h4-h5 ile g6 filini de rahatsız eder.',
      diger: [
        { move: '11...a6', text: '12.h4 h5 13.Bxc4 sonrası g6 fili pasif kalır (+0.9).' },
        { move: '11...Nbd7', text: '12.Nxc4 Bb4 13.h4 h5 ile Beyaz hem piyonu geri alır hem de alan kazanır (+1.0).' },
      ],
    },
    '12w': {
      text: '12.Nxd7 ile atlar değişir.',
      amac: 'Siyahın d7’ye gelişecek atını ortadan kaldırmak ve c4 piyonunu fille almak.',
      neden: '12.Nxc4 atı tutar ama 12...Nc6 sonrası Siyah tempo ile gelişir (+0.2). Değişim, Siyahın tek iyi gelişen atını ortadan kaldırır (+0.5).',
      diger: [
        { move: '12.Nxc4', text: '12...Nc6 13.Bf2 Bc5 ile Siyah rahatça gelişir (+0.2).' },
        { move: '12.Bxc4', text: '12...Nxe5 13.Bxe5 a6 ile değişim yine olur ama Beyaz filini e5’e götürmüş olur (+0.1).' },
      ],
    },
    '12b': {
      text: '12...Nxd7 ile Siyah b8 atıyla geri alır.',
      amac: 'Atı d7’de merkeze yakın tutmak ve gelişmeyi sürdürmek.',
      neden: '12...Kxd7 şahı erken yürütür (+1.2), 12...Nc6? ise 13.Nxf8 ile taş kaybettirir (+4.4). Bu yüzden at ile almak doğaldır.',
      diger: [
        { move: '12...Kxd7', text: '13.Rd1 Kc8 14.h4 h5 sonrası Siyah şahı açıkta kalır (+1.2).' },
      ],
    },
    '13w': {
      text: '13.Bxc4 ile Beyaz c4 piyonunu geri alır.',
      amac: 'Materyali eşitlemek ve fili aktif bir çaprazda konuşlandırmak.',
      neden: 'Planın son adımı: Ne5-f3-e4 ve vezir değişiminden sonra piyon kendiliğinden düştü. Motor en iyi hamle olarak gösteriyor (+0.6).',
      diger: [
        { move: '13.h4', text: 'Önce g6 filini rahatsız etmek (+0.3); 13...h5 sonrası Beyaz c4’ü yine alır ama zaman harcamıştır.' },
        { move: '13.a5', text: 'Alan kazanır (+0.2), ama 13...Bc5 ile Siyah kara karelerdeki filini değiştirir.' },
      ],
    },
    '13b': {
      text: '13...Rc8 ile kale açık c-hattına gelir ve c4 filine bakar. Anand bu hamleyle önceki oyunlardan saptı.',
      amac: 'c-hattını Beyazdan önce almak; böylece 14.Rc1 gibi bir hamleyle Beyazın c-hattını ele geçirme fikrini önlemek.',
      neden: '3. ve 5. oyunlarda 13...a6 oynanmıştı. Giri’nin 3. oyun analizinde 13...Rc8 “dikkate değer” bulunur çünkü 14.Rc1 fikrinden kaçar. Pein’e göre Anand, Topalov’un hazırlıklarını devreye sokmasını engellemek istiyordu. Motor iki hamleyi eşit görüyor (+0.6).',
      diger: [
        { move: '13...a6', text: '3. ve 5. oyunlardaki hamle (+0.6): 14.Rc1 ile Beyaz c-hattını alır ve Siyah uzun süre pasif kalır.' },
        { move: '13...h5', text: 'h4-h5 fikrini önler (+0.6); 14.Ne2 e5 15.Be3 Rc8 ile benzer bir pozisyon.' },
      ],
    },
    '14w': {
      text: '14.Bb5 ile fil d7 atını bağlar.',
      amac: 'd7 atını kalıcı olarak hedef almak ve Siyahı ...a6 ile filini değişmeye ya da pasif kalmaya zorlamak.',
      neden: 'Beyaz, fili d7 atıyla değişerek Siyahın şahını d7’ye çekmek ve ...Rc8 hamlesinden sonra d-hattında oynamak istiyor. Motor 14.Bb3’ü biraz daha iyi buluyor (+0.7, maç hamlesi +0.5); Bb5 ise oyunu daha net bir oyun sonuna götürür.',
      diger: [
        { move: '14.Bb3', text: '14...a6 15.Ke2 Rg8 16.a5 ile fil korunur ve Beyaz alan kazanır (+0.7).' },
        { move: '14.Ba2', text: 'Benzer fikir (+0.5); fil a2-g8 köşegeninde e6’ya bakar.' },
      ],
    },
    '14b': {
      text: '14...a6 tek iyi hamle: fili soru altına alır.',
      amac: 'Beyazı fili d7 atıyla değişmeye zorlamak ya da geri çekilmeye mecbur bırakmak.',
      neden: 'Bağlama sürerse Siyah kolayca gelişemez. 14...Bd6? 15.Bxg7 ile piyon düşer (+2.4), 14...Ke7? 15.Bxa7 ile vezir kanadında piyon kaybedilir (+2.9).',
      diger: [
        { move: '14...Bd6', text: '15.Bxg7 Rg8 16.Rd1 ile Beyaz temiz bir piyon kazanır (+2.4).' },
        { move: '14...Ke7', text: '15.Bxa7 Ne5 16.Rc1 ile a7 piyonu düşer (+2.9).' },
      ],
    },
    '15w': {
      text: '15.Bxd7+ ile Beyaz fili atla değişir.',
      amac: 'Siyahın şahını merkeze çekmek ve fil çiftini vermek pahasına Siyahın yapısını ve gelişmesini bozmak.',
      neden: 'Fil geri çekilirse Siyah ...f6, ...Bc5 ile rahatça gelişir (15.Be2 −0.1, 15.Bd3 −0.2). Beyazın atı ve kara kareli fili, Siyahın iki filine karşı merkezde daha iyi çalışır.',
      diger: [
        { move: '15.Be2', text: '15...f6 16.Kf2 Bb4 ile Siyah rahatça gelişir; Beyazın üstünlüğü kalmaz (−0.1).' },
        { move: '15.Bd3', text: '15...f6 16.Kf2 Bc5 ile benzer şekilde eşit (−0.2).' },
      ],
    },
    '15b': {
      text: '15...Kxd7 ile Siyah şahla geri alır.',
      amac: 'Materyali korumak; vezirsiz oyunda şah merkeze yakın durur.',
      neden: 'Zorunlu: şah d8 ya da e7’ye giderse 16.Bxc8 ile kale kaybedilir (+6.6).',
    },
    '16w': {
      text: '16.Ke2 ile şah merkezde güvenli bir kareye gelir.',
      amac: 'Kaleleri birleştirmek (h1 kalesi d1’e gelebilir) ve şahı oyun sonu için hazır tutmak.',
      neden: 'Vezirler yokken rok yapmak şahı oyundan uzaklaştırır. 16.Rd1 hemen kale getirir ama 16...Ke8 sonrası e2’de şah yine gerekir (+0.3); 16.Kf2 ise e3’ten uzaklaşır (+0.1). Motor 16.Ke2’yi en iyi buluyor (+0.6).',
      diger: [
        { move: '16.Rd1', text: '16...Ke8 17.Ke2 f6 ile benzer, ama Beyaz bir tempo daha yavaş (+0.3).' },
        { move: '16.Kf2', text: '16...Bc5 ile Siyah kara kareli filleri değiştirir (+0.1).' },
      ],
    },
    '16b': {
      text: '16...f6 ile e5 karesi kontrol edilir ve e4 piyonu sabitlenir.',
      amac: 'd4 filinin uzun köşegendeki baskısını (g7) azaltmak, ileride ...f5 ile e4’e karşı oynamak.',
      neden: 'f6 piyonu e5’i kapatır ve g7’yi dolaylı olarak korur. Motor 16...Ke8 ya da 16...Rc6’yı biraz daha iyi buluyor (+0.6, maç hamlesi +0.7); fark küçük.',
      diger: [
        { move: '16...Ke8', text: 'Şah önce d-hattından çıkar (+0.6); 17.Rac1 f6 18.Rhd1 ile aynı pozisyonlar.' },
        { move: '16...Rc6', text: 'Kaleyi altıncı yataya getirir (+0.6); c-hattında katlanma hazırlar.' },
      ],
    },
    '17w': {
      text: '17.Rhd1 ile h1 kalesi açık d-hattına gelir.',
      amac: 'd7’deki şaha baskı yapmak ve fil ile birlikte açık şah tehditleri hazırlamak.',
      neden: 'Şah d7’de d-hattında duruyor; d4 fili her hareket ettiğinde açık şah çekilebilir. Rhd1, a1 kalesini c-hattı için bırakır (17.Rad1 +0.1). Motor 17.Rhd1’i en iyi buluyor (+0.6).',
      diger: [
        { move: '17.Rad1', text: '17...Ke8 18.Bb6 Ke7 ile Beyazın c-hattında kalesi yoktur (+0.1).' },
        { move: '17.e5', text: '17...Bc5 18.Rhd1 Bxd4 19.Rxd4+ ile filler değişir ve Siyah dengeler (−0.1).' },
      ],
    },
    '17b': {
      text: '17...Ke8 ile şah d-hattından çıkar.',
      amac: 'Açık şah tehditlerinden kaçmak ve f8 filinin gelişmesini hazırlamak.',
      neden: 'Pein’e göre şahın vezir kanadına gitmesi çok tehlikeliydi. Gerçekten de 17...Kc7 18.Ba7 Ra8?? 19.Nb5+! axb5 20.Rac1+ Bc5 21.Rxc5 mat ile biter. Motor 17...Ke8’i en iyi buluyor (+0.6).',
      diger: [
        { move: '17...Kc7', text: '18.Ba7! sonrası şah b8’i kullanamaz; 18...Ra8?? 19.Nb5+ üç hamlede mat (motor: mat). 18...Be8 ile tutulabilir ama pasif (+0.8).' },
        { move: '17...Ke7', text: '18.Rac1 Rc6 19.b4 ile Beyaz vezir kanadında ilerler (+0.9).' },
      ],
    },
    '18w': {
      text: '18.a5 yenilik: Beyaz vezir kanadında alan alır.',
      amac: 'b6 karesini fil için kazanmak, b7 piyonunu sabitlemek ve Siyahın ...b5 ile oyunu açmasını önlemek.',
      neden: 'ChessBase raporuna göre bu yeni bir hamleydi (rapor, GM Amonatov’un bu hatta daha önce iki kez Siyahla oynadığını not eder). Pein iki tarafın da hamleyi hazırladığını düşündü, ama Anand burada düşünmeye başladı. Motor 18.Rac1’i biraz daha iyi buluyor (+0.6, maç hamlesi +0.3).',
      diger: [
        { move: '18.Rac1', text: '18...Rc6 19.a5 Bd6 20.Na4 ile aynı fikir, ama önce c-hattı alınır (+0.6).' },
        { move: '18.Bb6', text: 'Fil hemen b6’ya girer (+0.4); 18...Bc5 19.Bxc5 Rxc5 ile filler değişir.' },
      ],
    },
    '18b': {
      text: '18...Be7 ile f8 fili gelişir. Pein’e göre hamle 15 dakika düşünülerek oynandı.',
      amac: 'Şahı ve kaleyi birleştirmek; ...Rf8 ve ...f5 için hazırlık yapmak.',
      neden: 'Siyah sağlam bir kuruluş seçti, ama motor daha aktif 18...Bb4’ü (0.0) belirgin şekilde daha iyi buluyor: fil c3 atını bağlar ve Beyazı Na4 gibi kenar hamlelerine zorlar. Pein de 18...Bb4!? ve 18...Rc6’yı öneriyor.',
      diger: [
        { move: '18...Bb4', text: '19.Na4 Ke7 20.Rdc1 Be8 ile Siyah tamamen eşitler (motor: 0.0).' },
        { move: '18...Rc6', text: '19.Rac1 Bd6 20.Na4 Rxc1 ile kaleler değişir (+0.3).' },
      ],
    },
    '19w': {
      text: '19.Bb6 ile fil b6’ya girer. Pein’e göre Topalov hemen cevap verdi.',
      amac: 'c7 ve d8 karelerini kontrol etmek, Siyahın kalesini c-hattından çıkarmak zorlaştırmak.',
      neden: 'a5 hamlesinin mantıklı devamı: b6 karesine Siyahın hiçbir piyonu saldıramaz. 19.Bf2 de aynı değerde (+0.4).',
      diger: [
        { move: '19.Bf2', text: '19...Rf8 20.Rac1 f5 21.e5 ile benzer yapı; fil şah kanadında kalır (+0.4).' },
        { move: '19.Rac1', text: '19...Kf8 20.Nb1 ile at yeniden konuşlanır (+0.3).' },
      ],
    },
    '19b': {
      text: '19...Rf8 ile kale f-hattına gelir.',
      amac: '...f5 ilerleyişini desteklemek ve f-hattını açmaya hazırlanmak.',
      neden: 'h8 kalesi başka türlü oyuna giremiyor. 19...Bb4? 20.Na2 ile fil kovalanır (+1.0). Motor 19...Rf8 ve 19...f5’i eşit görüyor (+0.5).',
      diger: [
        { move: '19...f5', text: 'Hemen ilerleme (+0.6); 20.e5 Rf8 ile aynı pozisyona döner.' },
        { move: '19...Bb4', text: '20.Na2 Be7 21.Rac1 sonrası Siyah iki tempo kaybetmiştir (+1.0).' },
      ],
    },
    '20w': {
      text: '20.Rac1 ile a1 kalesi c-hattına gelir.',
      amac: 'c-hattında Siyahın kalesine karşı çıkmak ve bütün taşları oyuna sokmak.',
      neden: 'Beyaz gelişmeyi tamamlıyor; c-hattı kontrolü Siyahın tek aktif kalesini nötralize eder. Motor en iyi hamle olarak gösteriyor (+0.6).',
      diger: [
        { move: '20.Kf2', text: '20...f5 21.e5 f4 ile Siyah alan kazanır (+0.3).' },
        { move: '20.Kf1', text: '20...Rc6 21.Ne2 e5 ile Siyah merkezde dengeler (+0.2).' },
      ],
    },
    '20b': {
      text: '20...f5 ile Siyah e4’e saldırır.',
      amac: 'f-hattını açmak ve fil ile kaleyi aktifleştirmek. Pein’e göre Siyah, Beyazın gelişme üstünlüğü kullanılmadan taşlarını harekete geçirmek istiyordu.',
      neden: 'Bu hamle Beyazı bir karar vermeye zorlar: ya exf5 ile Siyahın fillerini serbest bırakacak ya da e5 ile d6’yı alacak. Motor 20...Rf7’yi biraz daha iyi buluyor (+0.4, maç hamlesi +0.6).',
      diger: [
        { move: '20...Rf7', text: '21.g3 f5 22.e5 f4 ile Siyah önce kalesini savunmaya getirir (+0.4).' },
        { move: '20...Bb4', text: '21.Na2 Rxc1 22.Nxc1 e5 ile kaleler değişir (+0.6).' },
      ],
    },
    '21w': {
      text: '21.e5! ile piyon ilerler ve d6 karesini Beyaza verir.',
      amac: 'e6 piyonunu sabitlemek, f5 piyonunu g6 filinin önünde bırakmak ve d6 karesini ata ileri karakol yapmak.',
      neden: '21.exf5 Siyahın fillerini canlandırırdı (motor: +0.1). e5 sonrası d6’ya hiçbir Siyah piyonu saldıramaz, g6 fili de kendi f5 piyonunun arkasında kalır. Motor 21.e5’i açık ara en iyi buluyor (+0.7).',
      diger: [
        { move: '21.exf5', text: '21...Rxf5 22.Ne4 ile at merkeze gelir ama Siyahın filleri serbest kalır (+0.1).' },
        { move: '21.Ke3', text: '21...Rc6 22.exf5 Rxf5 ile benzer şekilde eşit (+0.1).' },
      ],
    },
    '21b': {
      text: '21...Bg5 ile fil c1 kalesine saldırır. Pein’e göre hamle hızlı oynandı.',
      amac: 'Kara kareli fili aktifleştirmek ve ...Bf4 ile e5 piyonuna baskı yapmak.',
      neden: 'e7 fili e5 piyonunun arkasında pasif kalıyordu. 21...Rc4 (+1.0) ya da 21...Rc6 (+1.2) daha kötü. Motor 21...Bg5’i en iyi buluyor (+0.8).',
      diger: [
        { move: '21...Rc4', text: '22.b3 Rc6 23.Na4 ile at b6 filini destekler ve Siyah pasif kalır (+1.0).' },
        { move: '21...Rc6', text: '22.Na4 f4 23.Rxc6 bxc6 ile Siyahın vezir kanadı bozulur (+1.2).' },
      ],
    },
    '22w': {
      text: '22.Be3 ile fil c1-g5 köşegenini kapatır ve değişim önerir.',
      amac: 'c1 kalesini tehditten kurtarmak ve Siyahın aktif filini değiştirmek.',
      neden: 'Sport-Express’teki yorumda Azmaiparaşvili, Beyazın fil değişimini kabul etmek zorunda olduğunu, aksi halde c1 kalesinin kaçması gerekeceğini ve kazanma şansının kaybolacağını söyledi. Motor da aynı fikirde: 22.Be3 +0.8, 22.Rc2 0.0.',
      diger: [
        { move: '22.Rc2', text: '22...Rf7 23.Rd6 Rd7 24.Rxd7 ile kaleler değişir ve Beyazın avantajı kalmaz (0.0).' },
        { move: '22.Rb1', text: '22...Bf4 23.Rd6 Ke7 ile Siyahın fili e5’e baskı yapar (−0.3).' },
      ],
    },
    '22b': {
      text: '22...f4? ile Siyah e3 filini kovalar. Pein’e göre bu hamle de hızlı oynandı.',
      amac: 'Fili geri itmek, şah kanadında alan kazanmak ve g6 filinin önünü açmak.',
      neden: 'Siyah, 23.Ne4 ara hamlesini görmemiş ya da hafife almış olabilir: f4 ile c3 atının e4’e giden yolu açılıyor ve at oradan şah çekerek d6’ya sıçrıyor. Pein bu hamleyi “korkunç”, Azmaiparaşvili “zevok” diye niteledi. Anand da maç sonrası f4’ün yanlış olduğunu kabul etti. Motor ise iki hamleyi neredeyse eşit görüyor (derinlik 20’de 22...f4 +0.8, 22...Bxe3 +0.8).',
      diger: [
        { move: '22...Bxe3', text: 'ChessBase’in aktardığı Dorfman analizi: 23.Kxe3 f4+ 24.Kd4! Ke7 25.Ne4! Bxe4 26.Kxe4; Beyaz yine hoş durur ama “daha küçük kötülük” (motor: +0.8).' },
        { move: '22...Bd8', text: '23.Ne4 Rxc1 24.Nd6+ Kd7 25.Bxc1 ile aynı d6 sorununa gelir (+0.9).' },
      ],
    },
    '23w': {
      text: '23.Ne4! ile at e4’e sıçrar ve g5 filine saldırır.',
      amac: 'Atı d6 karesine yöneltmek; c1 kalesi alınırsa Nd6+ ile şah çekip kaleyi geri almak.',
      neden: 'Bu oyunun kilit fikri: at e4’te hem g5’e saldırır hem de d6’ya şah çekerek gidebilir. Pein, Anand’ın bu ara hamleyi kaçırdığına inanmanın güç olduğunu yazdı. Motor 23.Nb5’i de eşit buluyor (+0.8); o da aynı Nd6+ fikrine dayanır.',
      diger: [
        { move: '23.Nb5', text: '23...Rxc1 24.Nd6+ Kd7 25.Bxc1 ile at b5’ten d6’ya gelir; aynı sonuç (+0.8).' },
        { move: '23.Bb6', text: '23...Rf5 24.Ne4 Rxc1 ile fil geri çekilir ama Siyah aktif kalır (+0.3).' },
      ],
    },
    '23b': {
      text: '23...Rxc1 tek iyi hamle: kale değişir.',
      amac: 'c-hattındaki kaleyi değiştirmek ve e4 atını g6 filinin tehdidi altında bırakmak.',
      neden: 'g5 fili saldırı altında; 23...Rc6? 24.Nxg5 ile taş düşer (+4.0), 23...Rd8? 24.Nxg5 ile de aynı (+4.4).',
      diger: [
        { move: '23...Rc6', text: '24.Nxg5 Rxc1 25.Bxc1 ile Beyaz bir taş kazanır (+4.0).' },
      ],
    },
    '24w': {
      text: '24.Nd6+! ile at şah çekerek tehditten kurtulur.',
      amac: 'Atı d6’ya yerleştirmek ve kaleyi bir hamle sonra geri almak.',
      neden: '24.Bxc1? Bxe4 25.fxe4 sonrası Beyaz güçlü atını kaybeder ve d6 karesi boşa gider (motor: −0.5); 24.Rxc1? Bxe4 ise daha da kötü (−0.9). Topalov maç sonrası atın d6’ya geldiği anı pozisyonu kazanılmış saydığı an olarak gösterdi. Motor: +0.7.',
      diger: [
        { move: '24.Bxc1', text: '24...Bxe4 25.fxe4 Rf7 sonrası e4 piyonu zayıf ve d6’ya giden at yok (−0.5).' },
        { move: '24.Rxc1', text: '24...Bxe4 25.Rc8+ Kf7 26.Rxf8+ Kxf8 ile Siyah iyi durur (−0.9).' },
      ],
    },
    '24b': {
      text: '24...Kd7 ile şah d7’ye gider.',
      amac: 'd6 atına yaklaşmak ve ...Kc6 ile ona baskı yapmak.',
      neden: '24...Ke7? 25.Bxc1 sonrası şah ata saldıramaz (+1.8), 24...Kd8? 25.Bb6+ ile kale bağlanır (+3.6).',
      diger: [
        { move: '24...Ke7', text: '25.Bxc1 Rb8 26.Rd4 ile Beyaz f4 piyonunu da toplar (+1.8).' },
        { move: '24...Kd8', text: '25.Bb6+ Ke7 26.Rxc1 ile Beyazın kalesi c-hattında çok aktif olur (+3.6).' },
      ],
    },
    '25w': {
      text: '25.Bxc1 ile Beyaz c1’deki kaleyi geri alır.',
      amac: 'Materyali eşitlemek ve f4 piyonuna bakan fili korumak.',
      neden: 'Zorunlu: 25.Rxc1? fxe3 ile Siyah taş kazanır (−3.5).',
    },
    '25b': {
      text: '25...Kc6 ile şah d6 atına yaklaşır.',
      amac: 'Atı şah ve fille birlikte hedef almak; ...Be7 ile onu değiştirmeye hazırlanmak.',
      neden: 'At d6’da çok güçlü; Siyahın tek umudu onu değiştirmek. Motor 25...Be7’yi biraz daha iyi buluyor (+0.7, maç hamlesi +0.8).',
      diger: [
        { move: '25...Be7', text: '26.Rd4 Bxd6 27.Rxd6+ Ke7 ile at hemen değişir (+0.7).' },
        { move: '25...Kc7', text: '26.Rd4 Kc6 27.Bd2 ile şah bir tempo kaybeder (+1.3).' },
      ],
    },
    '26w': {
      text: '26.Bd2 ile fil d2’ye çekilir.',
      amac: 'b4 karesine ve f4 piyonuna bakmak; Bb4 ile d6 atını desteklemek.',
      neden: 'Fil hem atı korumaya hazırlanır hem de f4 piyonunu hedef alır. Pein 26.Rd4’ün de iyi olduğunu yazdı; motor üç hamleyi eşit görüyor (Bd2 +0.9, g3 +0.8, Rd4 +0.8).',
      diger: [
        { move: '26.Rd4', text: '26...Bd8 27.Rc4+ Kd5 28.Bxf4 ile f4 piyonu hemen düşer (+0.8).' },
        { move: '26.g3', text: '26...Bd8 27.Bxf4 Bxa5 28.Rc1+ ile piyonlar değişir (+0.8).' },
      ],
    },
    '26b': {
      text: '26...Be7 ile fil d6 atına saldırır.',
      amac: 'Atı değiştirmek; böylece Beyazın d6 karesindeki üstünlüğü ortadan kalkar.',
      neden: 'Siyahın tek planı bu. Motor en iyi hamle olarak gösteriyor (+0.8).',
      diger: [
        { move: '26...Bd8', text: '27.Bb4 Be7 28.Rc1+ Kd7 ile aynı pozisyona döner (+1.0).' },
        { move: '26...Rb8', text: '27.Rc1+ Kd7 28.Nc4 ile at korunur (+1.2).' },
      ],
    },
    '27w': {
      text: '27.Rc1+ ile kale tempo kazanır.',
      amac: 'Şahı d7’ye geri itmek ve c-hattını ele geçirmek.',
      neden: 'Motor 27.Bb4’ü daha iyi buluyor (+1.1, maç hamlesi +0.8): fil atı korur ve Rd4-Rxf4 planı gelir.',
      diger: [
        { move: '27.Bb4', text: '27...Rd8 28.Rd4 Rd7 29.Rxf4 ile Beyaz piyonu kazanır ve atı korur (+1.1).' },
        { move: '27.Be1', text: 'Daha pasif (+0.4); f4 piyonuna bakmaz.' },
      ],
    },
    '27b': {
      text: '27...Kd7 ile şah d7’ye döner. Pein bu hamleyi “zorunlu” diye niteledi.',
      amac: 'c-hattından çıkmak ve d6 atına bakmayı sürdürmek.',
      neden: '27...Kd5? 28.Rc7 ile kale yedinci yataya girer (+1.6), 27...Bc2? 28.Rxc2+ ile fil düşer (+5.5).',
      diger: [
        { move: '27...Kd5', text: '28.Rc7 Bxd6 29.exd6 Kxd6 30.Rxb7 ile kale yedinci yatayda çok güçlü (+1.6).' },
      ],
    },
    '28w': {
      text: '28.Bc3 ile fil c3’e gelir; yorumcuları şaşırtan hamle.',
      amac: 'Uzun köşegeni kontrol etmek ve Rd1 ile d6 filini bağlamaya hazırlanmak.',
      neden: 'ChessBase raporuna göre yorumcular 28.Bb4! bekliyordu; Seirawan ilk başta hamleye inanmak istemedi. Motor da 28.Nc4 (+1.0) ve 28.Bb4’ü (+0.7) daha iyi buluyor; maç hamlesi +0.4.',
      diger: [
        { move: '28.Bb4', text: '28...Bxd6 29.Bxd6 Rc8 30.Rxc8 Kxc8 31.Bf8 ile g7 piyonuna baskı (+0.7).' },
        { move: '28.Nc4', text: '28...Bc5 29.b4 Ba7 30.Nd6 Bd4 31.Nxb7 ile b7 piyonu düşer (+1.0).' },
      ],
    },
    '28b': {
      text: '28...Bxd6 ile Siyah d6 atını alır.',
      amac: 'Beyazın en güçlü taşını değiştirmek.',
      neden: 'Bu Siyahın beklediği an. Motor en iyi hamle olarak gösteriyor (+0.4). 28...Bf5? 29.Nxb7 ile piyon düşer (+0.7).',
      diger: [
        { move: '28...Bf5', text: '29.Nxb7 g5 30.Rd1+ Kc6 ile b7 piyonu kaybedilir (+0.7).' },
      ],
    },
    '29w': {
      text: '29.Rd1! ile kale d6 filini d7 şahına bağlar.',
      amac: 'Fili kaçamaz hale getirmek ve e5 piyonuyla geri almak.',
      neden: '29.exd6 da mümkün (+0.2) ama Rd1 ile Beyaz hem fili hem de d-hattını kontrol eder. Motor en iyi buluyor (+0.4).',
      diger: [
        { move: '29.exd6', text: '29...Rc8 30.Rd1 Bc2 ile Siyah aktif kalır (+0.2).' },
        { move: '29.Ra1', text: '29...Be7 ile fil kaçar ve Beyaz taş kaybetmiş olur (−4.6).' },
      ],
    },
    '29b': {
      text: '29...Bf5 ile fil f5’e çıkar.',
      amac: 'e6 piyonunu korumak ve ...Kc8 ile d6 filini serbest bırakmak.',
      neden: 'd6 fili bağlı; Siyah onu korumak için önce başka bir taşı devreye sokar. Motor 29...Rd8’i biraz daha iyi buluyor (+0.4, maç hamlesi +0.6).',
      diger: [
        { move: '29...Rd8', text: '30.exd6 e5 31.Rd5 e4 ile Siyah merkezde karşı oyun alır (+0.4).' },
        { move: '29...Ke7', text: '30.exd6+ Kd7 31.Bxg7 Rf5 ile g7 piyonu düşer (+0.5).' },
      ],
    },
    '30w': {
      text: '30.h4 ile Siyahın ...g5 ilerleyişi önlenir.',
      amac: 'f4 piyonunu desteksiz bırakmak ve şah kanadında alan almak.',
      neden: '...g5 gelseydi f4 piyonu korunurdu. Motor 30.Rxd6+ ile hemen almayı biraz daha iyi buluyor (+0.7, maç hamlesi +0.6).',
      diger: [
        { move: '30.Rxd6+', text: '30...Kc8 31.h4 Rd8 32.Bd2 ile aynı fikir, bir sıra farkıyla (+0.7).' },
        { move: '30.Rd4', text: '30...Rd8 31.exd6 g5 ile Siyah f4’ü korur (+0.2).' },
      ],
    },
    '30b': {
      text: '30...g6?! ile f5 fili desteklenir, ama şah kanadı zayıflar.',
      amac: 'Fili sağlamlaştırmak ve f4 piyonunu korumaya yardım etmek.',
      neden: 'Pein: “Her piyon hamlesi zayıflatır, bu da sonradan ölümcül olacak.” ChessBase raporu hamleyi “bir muamma” olarak niteledi. h7 piyonu yalnız kaldı ve f6-g5-h6 kareleri beyaz şaha açıldı. Motor 30...Kc8’i (+0.3) daha iyi buluyor; Pein de 30...Kc7’yi önerdi.',
      diger: [
        { move: '30...Kc8', text: '31.Rxd6 Rd8 32.Bd2 Rxd6 33.exd6 e5 ile şah kanadı sağlam kalır (+0.3).' },
        { move: '30...Rd8', text: '31.Rxd6+ Kc8 32.Bd2 Rxd6 33.exd6 e5 ile benzer şekilde (+0.5).' },
      ],
    },
    '31w': {
      text: '31.Rxd6+ ile kale fili alır ve şah çeker.',
      amac: 'Materyali geri kazanmak ve d6 karesine kaleyi yerleştirmek.',
      neden: 'Bağlanmış fil artık toplanabilir. Motor en iyi hamle olarak gösteriyor (+0.7).',
      diger: [
        { move: '31.Rd4', text: '31...Rd8 32.Bb4 Rc8 ile Siyah aktif kalır (+0.4).' },
      ],
    },
    '31b': {
      text: '31...Kc8 ile şah c8’e çekilir.',
      amac: 'b7 piyonunu korumak ve d-hattına kale getirmeye hazırlanmak.',
      neden: '31...Kc7? 32.Bd4 ile şah tempo kaybeder (+1.6). Motor 31...Kc8’i en iyi buluyor (+0.7).',
      diger: [
        { move: '31...Ke8', text: '32.Bd2 Rf7 33.Bxf4 Rd7 ile benzer (+0.9).' },
        { move: '31...Kc7', text: '32.Bd4 Rg8 33.Bb6+ Kb8 ile şah köşeye sıkışır (+1.6).' },
      ],
    },
    '32w': {
      text: '32.Bd2 ile fil f4 piyonuna saldırır.',
      amac: 'Piyonu kazanmak ve materyali bir piyon artırmak.',
      neden: 'f4 piyonu artık savunmasız. Motor en iyi hamle olarak gösteriyor (+0.7).',
      diger: [
        { move: '32.Rd4', text: '32...Bb1 33.Rc4+ Kd8 34.Bd4 ile benzer (+0.6).' },
        { move: '32.Rb6', text: 'b7’ye baskı (+0.6); f4 sonra alınır.' },
      ],
    },
    '32b': {
      text: '32...Rd8 ile kale d6 kalesine karşı çıkar.',
      amac: 'Kaleleri değiştirmek ve zıt renkli filli oyun sonuna geçmek.',
      neden: 'f4 piyonu kurtarılamaz; Siyah kale değişimiyle beraberlik şansını en yüksek seviyeye çıkarır. Motor en iyi buluyor (+0.7).',
      diger: [
        { move: '32...h5', text: '33.Rd4 Bb1 34.Rc4+ ile Beyaz yine f4’ü alır (+0.9).' },
        { move: '32...Rf7', text: '33.Bxf4 Rd7 34.Rb6 ile Beyazın kalesi aktif kalır (+0.9).' },
      ],
    },
    '33w': {
      text: '33.Bxf4 ile Beyaz f4 piyonunu alır ve bir piyon öne geçer.',
      amac: 'Materyal üstünlüğü kazanmak; kaleler değişse de d6’da korunan bir geçer piyonla oyun sonuna girmek.',
      neden: 'Azmaiparaşvili, zıt renkli filli oyun sonuna girmenin aceleci olduğunu düşündü. Ama motor alternatifleri daha kötü buluyor: 33.Rxd8+ +0.2, 33.Rb6 +0.1, 33.Bxf4 +0.6. Pein: “Beyaz açıkça üstte ve piyon kazanıyor, ama oyunu değil.”',
      diger: [
        { move: '33.Rxd8+', text: '33...Kxd8 34.Bxf4 Bc2 35.Bg5+ ile geçer piyon olmadan oyun sonu (+0.2).' },
        { move: '33.Rb6', text: '33...Rd4 34.Bc3 Ra4 ile Siyah aktif kalır (+0.1).' },
      ],
    },
    '33b': {
      text: '33...Rxd6 ile Siyah kaleleri değişir.',
      amac: 'Zıt renkli filli bir oyun sonuna geçmek; bu tür oyun sonlarında fazla piyon çoğu zaman yetmez.',
      neden: 'Kaleler kalsa Beyazın kalesi çok aktif olurdu. Motor 33...h5’i biraz daha iyi buluyor (+0.6, maç hamlesi +0.8), ama kale değişimi Siyahın en net beraberlik planıdır.',
      diger: [
        { move: '33...h5', text: '34.Bh2 Rd7 35.Ke3 Kc7 ile kaleler tahtada kalır (+0.6).' },
        { move: '33...Rd7', text: '34.Rb6 Bd3+ 35.Kf2 Bc4 ile Beyazın kalesi b7’ye baskı yapar (+1.0).' },
      ],
    },
    '34w': {
      text: '34.exd6 ile piyonla alınır; d6’da fille korunan bir geçer piyon oluşur.',
      amac: 'Geçer piyonu Siyah şahını ve filini bağlayan bir silaha dönüştürmek.',
      neden: 'Zorunlu geri alma: başka bir hamle kaleyi kaybettirir (34.g4? −5.0).',
    },
    '34b': {
      text: '34...Kd7 ile şah d7’de geçer piyonu durdurur.',
      amac: 'Geçer piyonun önünü kesmek ve şahı merkeze getirmek.',
      neden: 'Doğal görünse de motor 34...Bc2’yi daha iyi buluyor (+0.6, maç hamlesi +1.1): fil hemen beyaz karelerden piyonları korur ve şah e8-d7 arasında esnek kalır.',
      diger: [
        { move: '34...Bc2', text: '35.Ke3 Kd8 36.Be5 Ke8 37.Kf4 Kf7 ile Siyah sağlam bir savunma kurar (+0.6).' },
        { move: '34...Kd8', text: '35.Kd2 Kd7 36.Kc3 Ke8 37.b3 ile Beyaz şahı vezir kanadına gider (+1.5).' },
      ],
    },
    '35w': {
      text: '35.Ke3 ile şah merkeze gelir.',
      amac: 'Şahı merkezde aktifleştirip şah kanadına (f4-g5-h6) yönelmek.',
      neden: 'Motor 35.Kd2 ve Kc3 ile vezir kanadına gitmeyi öneriyor (+1.2, maç hamlesi +0.6); orada b4-b5 ile ikinci bir geçer piyon yaratılabilirdi. Topalov şah kanadını seçti.',
      diger: [
        { move: '35.Kd2', text: '35...e5 36.Bxe5 Kc6 37.Ke3 ile e5 piyonu düşer (+1.2).' },
        { move: '35.Be5', text: 'Fil d6’yı önceden korur (+0.6); 35...Bc2 36.Ke3 ile aynı yapı.' },
      ],
    },
    '35b': {
      text: '35...Bc2 ile fil c2’ye gelir.',
      amac: 'Beyaz karelerden piyonları korumak ve b1-h7 köşegenini kontrol etmek.',
      neden: 'Fil hem h7’yi hem de beyaz şahın geçeceği kareleri kontrol eder. Motor en iyi buluyor (+0.6); 35...Ke8? 36.Kd2 ile şah vezir kanadına girer (+1.3).',
      diger: [
        { move: '35...Ke8', text: '36.Kd2 Kd7 37.Kc3 Ke8 ile beyaz şah vezir kanadına gider (+1.3).' },
        { move: '35...h6', text: '36.Kd2 g5 37.hxg5 hxg5 ile Siyahın piyonları zayıflar (+1.5).' },
      ],
    },
    '36w': {
      text: '36.Kd4 ile şah d4’e ilerler.',
      amac: 'e5 karesine girip e6 piyonuna saldırmak.',
      neden: 'Şah merkezde en aktif kareyi arıyor. Motor 36.Be5’i biraz daha iyi buluyor (+0.7, maç hamlesi +0.6).',
      diger: [
        { move: '36.Be5', text: '36...Ke8 37.Kf4 Ba4 38.Kg5 ile şah daha hızlı şah kanadına gider (+0.7).' },
      ],
    },
    '36b': {
      text: '36...Ke8 ile şah e8’e geçer.',
      amac: 'f7 karesine giderek e6 ve g6 piyonlarını korumak.',
      neden: '36...g5? 37.hxg5 ile g5’te Beyazın geçer piyonu doğar (+2.1). Motor 36...Ke8’i en iyi buluyor (+0.7).',
      diger: [
        { move: '36...g5', text: '37.hxg5 Ba4 38.Ke5 Bb5 39.Kf6 ile şah kanadında ikinci geçer piyon (+2.1).' },
        { move: '36...Bf5', text: '37.Ke5 Bd3 38.Kf6 ile şah içeri girer (+2.6).' },
      ],
    },
    '37w': {
      text: '37.Ke5 ile şah e5’e girer ve e6 piyonuna saldırır.',
      amac: 'Siyahın şahını f7’ye bağlamak ve f6 karesine girmeye hazırlanmak.',
      neden: 'e6 piyonu Siyahın en zayıf noktası. Motor üç hamleyi eşit görüyor (+0.6).',
      diger: [
        { move: '37.Kc5', text: '37...Kd7 38.Kd4 Ke8 ile vezir kanadını yoklamak (+0.6).' },
        { move: '37.Be3', text: '37...Ba4 38.Ke5 Kf7 ile aynı pozisyona döner (+0.6).' },
      ],
    },
    '37b': {
      text: '37...Kf7 ile şah e6 ve g6’yı korur.',
      amac: 'Beyaz şahın f6’ya girmesini önlemek.',
      neden: '37...Kd7? 38.Kf6 ile şah içeri girer ve g6 düşer (+3.7). Motor 37...Kf7’yi en iyi buluyor (+0.6).',
      diger: [
        { move: '37...Kd7', text: '38.Kf6 Bd3 39.Be5 Bb1 ile g6 piyonu düşer (+3.7).' },
        { move: '37...g5', text: '38.Bxg5 Kd7 39.Be7 ile Beyaz iki piyon önde (+3.8).' },
      ],
    },
    '38w': {
      text: '38.Be3 ile fil e3’e gelir; c5-d4 köşegenine dönecek.',
      amac: 'Fili d4’e getirip uzun köşegenden şah çekmek ve d6 piyonunu korumak.',
      neden: 'Beyaz yavaşça kuruluşunu iyileştiriyor. Motor bütün makul hamleleri eşit görüyor (+0.7).',
      diger: [
        { move: '38.Kd4', text: '38...Ke8 39.Be3 Ba4 ile aynı pozisyona döner (+0.7).' },
      ],
    },
    '38b': {
      text: '38...Ba4 ile fil a4’e gelir.',
      amac: 'd7 ve e8 karelerini kontrol etmek ve geçer piyonun önünü tutmak.',
      neden: 'Fil a4-e8 köşegeninde d7’yi tutar. Motor üç hamleyi eşit görüyor (+0.6).',
      diger: [
        { move: '38...Bd3', text: '39.Bc5 Bb5 40.Kf4 ile benzer (+0.6).' },
        { move: '38...Bb3', text: '39.Bc5 Ba4 40.Kf4 Bb5 ile aynı (+0.6).' },
      ],
    },
    '39w': {
      text: '39.Kf4 ile şah f4’e döner.',
      amac: 'g5 üzerinden şah kanadına girmek; h6 karesine yönelmek.',
      neden: 'e5’ten içeri giriş yok; Beyaz şahını şah kanadına götürüyor. Pein, Harikrishna’nın şahın h6’ya yürüyüşü ve h4-h5 planını önerdiğini aktardı. Motor eşit görüyor (+0.6).',
      diger: [
        { move: '39.Bc5', text: '39...Bc6 40.Kf4 Bb5 41.Kg5 ile aynı plan (+0.6).' },
      ],
    },
    '39b': {
      text: '39...Bb5 ile fil d7 karesini uzaktan tutar.',
      amac: 'Geçer piyonun önünü kesmek ve bekleme hamleleri yapmak.',
      neden: 'Siyah pasif ama sağlam bir savunma kuruyor. Motor bütün fil hamlelerini eşit görüyor (+0.6).',
      diger: [
        { move: '39...Bc6', text: '40.Kg5 Ba4 41.Bc5 Bb5 ile aynı (+0.6).' },
        { move: '39...Kg8', text: '40.Bd4 Kf7 41.Kg5 ile aynı (+0.6).' },
      ],
    },
    '40w': {
      text: '40.Bc5 ile fil c5’e gelir.',
      amac: 'd6 piyonunu korumak ve fili d4’e getirmeye hazırlanmak.',
      neden: 'Beyaz bekleme hamleleriyle Siyahı bir karar vermeye zorluyor. Motor eşit görüyor (+0.5).',
      diger: [
        { move: '40.Kg5', text: '40...Bd7 41.Kh6 Kg8 42.Bd4 ile şah hemen h6’ya girer (+0.6).' },
      ],
    },
    '40b': {
      text: '40...Kf6 ile şah f6’ya çıkar.',
      amac: 'Beyaz şahın g5’e gelmesini zorlaştırmak.',
      neden: 'Aktif savunma. Motor eşit görüyor (+0.5).',
      diger: [
        { move: '40...Kg7', text: '41.Ke5 Kf7 42.Be3 ile aynı (+0.5).' },
      ],
    },
    '41w': {
      text: '41.Bd4+ ile fil şah çeker.',
      amac: 'Siyah şahını f6’dan geri itmek ve g5 karesini açmak.',
      neden: 'Şah f6’da kaldıkça beyaz şah g5’e gelemez. 41.h5? e5+ ile Siyah merkezde karşı oyun alır (+0.2). Motor 41.Bd4+’ı en iyi buluyor (+0.6).',
      diger: [
        { move: '41.h5', text: '41...e5+ 42.Kg4 Bd7+ 43.Kh4 ile Siyah merkezde aktifleşir (+0.2).' },
      ],
    },
    '41b': {
      text: '41...Kf7 ile şah f7’ye geri döner.',
      amac: 'e6 ve g6 piyonlarını korumak.',
      neden: 'Pein, 41...e5+ seçeneğini “değerlendirmesi çok zor” buldu. Motor ise 41...e5+’ı daha kötü buluyor (+1.2, maç hamlesi +0.6).',
      diger: [
        { move: '41...e5+', text: '42.Bxe5+ Ke6 43.Ke4 Bc6+ 44.Kd4 ile e5 piyonu düşer ama Siyahın şahı aktif (+1.2).' },
      ],
    },
    '42w': {
      text: '42.Kg5 ile şah h6’ya doğru ilerler.',
      amac: 'h6’ya girip h7 piyonuna saldırmak ve Siyahın şahını g8’e bağlamak.',
      neden: '30...g6’nın yarattığı zayıflıktan yararlanma. Motor eşit görüyor (+0.5).',
      diger: [
        { move: '42.Bc5', text: '42...Bd7 43.Kg5 Ba4 ile aynı (+0.5).' },
      ],
    },
    '42b': {
      text: '42...Bc6 ile fil d7’yi korumaya devam eder.',
      amac: 'Geçer piyonun önünü tutmak.',
      neden: 'Fil a4-e8 köşegeninde kalmak zorunda. Motor eşit görüyor (+0.5).',
      diger: [
        { move: '42...Be8', text: '43.Kh6 Kg8 44.Be3 Bb5 ile aynı (+0.5).' },
      ],
    },
    '43w': {
      text: '43.Kh6 ile şah h7 piyonuna saldırır.',
      amac: 'Siyahın şahını g8’e bağlamak.',
      neden: 'Şah artık Siyahın piyonlarının arkasında. Motor bütün makul hamleleri eşit görüyor (+0.5).',
      diger: [
        { move: '43.h5', text: '43...gxh5 44.Kxh5 Bb5 45.Kh6 ile aynı (+0.5).' },
      ],
    },
    '43b': {
      text: '43...Kg8 ile şah h7 piyonunu korur.',
      amac: 'h7 piyonunu kaybetmemek.',
      neden: 'Zorunlu: 43...Bb5? 44.Kxh7 ile piyon düşer (+4.9).',
      diger: [
        { move: '43...Bb5', text: '44.Kxh7 Bf1 45.d7 Ke7 ile Beyaz iki piyon önde (+4.9).' },
      ],
    },
    '44w': {
      text: '44.h5 ile şah kanadında ikinci cephe açılır.',
      amac: 'g6 piyonunu değişmeye zorlamak ve şah kanadında bir geçer piyon yaratmak.',
      neden: 'Harikrishna’nın Pein’in aktardığı planının parçası. Motor eşit görüyor (+0.5).',
      diger: [
        { move: '44.Kg5', text: '44...Kf7 45.h5 gxh5 46.Kxh5 ile aynı (+0.5).' },
      ],
    },
    '44b': {
      text: '44...Be8 ile fil e8’e gelir.',
      amac: 'g6 piyonunu korumak ve d7’yi tutmak.',
      neden: '44...Kf7? 45.Kxh7 ile piyon düşer (+2.9). Motor 44...gxh5 ile 44...Be8’i eşit görüyor (+0.5).',
      diger: [
        { move: '44...gxh5', text: '45.Kxh5 Bd7 46.Bb6 Kg7 ile Siyah sağlam (+0.5).' },
        { move: '44...Kf7', text: '45.Kxh7 gxh5 46.Kh6 h4 ile Beyaz bir piyon daha kazanır (+2.9).' },
      ],
    },
    '45w': {
      text: '45.Kg5 ile şah g5’e çıkar.',
      amac: 'Bekleme hamleleriyle Siyahı bir karar vermeye zorlamak.',
      neden: 'Pein bu aşamada Anand’ın tutunduğunu ve Topalov’un pozisyonu yoklayarak “en azından iyi pratik satranç” oynadığını yazdı. Motor eşit görüyor (+0.5).',
      diger: [
        { move: '45.Bc3', text: '45...gxh5 46.Kg5 Kf7 47.Kxh5 ile aynı (+0.5).' },
      ],
    },
    '45b': {
      text: '45...Kf7 ile şah f7’ye gelir.',
      amac: 'e6 ve g6 piyonlarını korumak.',
      neden: 'Pein: “Şimdi beraberlik favori görünmeye başlıyor.” 45...e5? 46.Bxe5 ile piyon düşer (+2.6).',
      diger: [
        { move: '45...e5', text: '46.Bxe5 Kf7 47.f4 Ke6 ile Beyaz iki piyon önde (+2.6).' },
      ],
    },
    '46w': {
      text: '46.Kh6 ile şah yeniden h6’ya girer.',
      amac: 'Siyahın şahını tekrar g8’e bağlamak.',
      neden: 'Beyaz zaman kazanmaya çalışıyor. Motor 46.h6’yı biraz daha iyi buluyor (+0.9, maç hamlesi +0.8).',
      diger: [
        { move: '46.h6', text: '46...Ba4 47.Kf4 Bd7 48.Bb6 ile h7 piyonu sabitlenir (+0.9).' },
      ],
    },
    '46b': {
      text: '46...Kg8 ile şah g8’e döner.',
      amac: 'h7 piyonunu korumak.',
      neden: 'Zorunlu: 46...gxh5? 47.Kxh7 ile piyon düşer (+2.2).',
      diger: [
        { move: '46...gxh5', text: '47.Kxh7 e5 48.Bxe5 h4 ile Beyaz bir piyon daha kazanır (+2.2).' },
      ],
    },
    '47w': {
      text: '47.Bc5 ile fil c5’e gelir.',
      amac: 'Bekleme hamlesi yapmak ve Siyahı gxh5 ile değişmeye zorlamak.',
      neden: 'Motor 47.Kg5’i daha iyi buluyor (+0.8, maç hamlesi +0.6), ama Beyazın üstünlüğü sürüyor.',
      diger: [
        { move: '47.Kg5', text: '47...Kf7 48.h6 Bb5 49.Kf4 ile h7 piyonu sabitlenir (+0.8).' },
      ],
    },
    '47b': {
      text: '47...gxh5 ile Siyah h5’te alır.',
      amac: 'Şah kanadında piyonları değiştirmek ve beyaz şahı uzaklaştırmak.',
      neden: '47...Kf7? 48.Kxh7 ile piyon düşer (+2.7). Motor 47...gxh5’i en iyi buluyor (+0.6).',
      diger: [
        { move: '47...Kh8', text: '48.Kg5 Kg7 49.h6+ Kf7 ile aynı (+0.9).' },
      ],
    },
    '48w': {
      text: '48.Kg5 ile şah h5 piyonunu hedef alır.',
      amac: 'h5 piyonunu kazanmak.',
      neden: 'Motor 48.Bf2’yi biraz daha iyi buluyor (+0.7, maç hamlesi +0.6).',
      diger: [
        { move: '48.Bf2', text: '48...Kh8 49.Bh4 Kg8 50.Be1 ile benzer (+0.7).' },
      ],
    },
    '48b': {
      text: '48...Kg7 ile şah g7’ye çıkar.',
      amac: 'Beyaz şahın h6’ya dönüşünü engellemek.',
      neden: 'Aktif savunma. Motor en iyi buluyor (+0.6).',
      diger: [
        { move: '48...Kf7', text: '49.Kxh5 Bc6 50.Kg5 ile h5 düşer (+0.8).' },
      ],
    },
    '49w': {
      text: '49.Bd4+ ile fil şah çeker.',
      amac: 'Siyah şahını g7’den geri itmek.',
      neden: 'Motor en iyi buluyor (+0.7).',
      diger: [
        { move: '49.Bf2', text: '49...Kf7 50.Bd4 h4 ile benzer (+0.5).' },
      ],
    },
    '49b': {
      text: '49...Kf7 ile şah f7’ye gelir.',
      amac: 'e6 piyonunu korumak.',
      neden: '49...e5? 50.Bxe5+ ile piyon düşer (+2.3). Motor 49...Kf7’yi en iyi buluyor (+0.6).',
      diger: [
        { move: '49...e5', text: '50.Bxe5+ Kf7 51.Bc3 Ke6 ile Beyaz iki piyon önde (+2.3).' },
      ],
    },
    '50w': {
      text: '50.Be5 ile fil d6 piyonunu korur ve h8-b2 köşegenini tutar.',
      amac: 'Geçer piyonu sağlamlaştırmak ve h5 piyonuna yönelmek.',
      neden: 'Motor eşit görüyor (+0.6).',
      diger: [
        { move: '50.Bc3', text: '50...Bb5 51.Kxh5 Bf1 52.g3 ile h5 düşer (+0.7).' },
      ],
    },
    '50b': {
      text: '50...h4! ile Siyah piyonunu ilerletir.',
      amac: 'h-piyonunu feda ederek beyaz şahı h4’e çekmek ve g-piyonunun ilerleyişini zamansız hale getirmek.',
      neden: 'ChessBase raporu bu hamleyi “ustaca” ve beraberlik için yeterli buldu. Pein: “Bu noktada Anand’ın beraberliği tutması daha olası görünüyordu.” Motor eşit görüyor (+0.8).',
      diger: [
        { move: '50...Ba4', text: '51.Kxh5 Kf8 52.f4 Bb5 ile benzer (+1.0).' },
      ],
    },
    '51w': {
      text: '51.Kxh4 ile şah h4 piyonunu alır.',
      amac: 'Materyali artırmak; Beyaz artık iki piyon önde.',
      neden: '51.Kh6 h3 52.gxh3 Kg8 sonrası ChessBase’e göre Beyaz kırılamaz. Motor 51.Kxh4’ü en iyi buluyor (+0.8).',
      diger: [
        { move: '51.Kh6', text: '51...h3 52.gxh3 Kg8 ile Beyazın kırılma imkânı yok (+0.5).' },
      ],
    },
    '51b': {
      text: '51...Kg6 ile şah g6’ya gelir.',
      amac: 'Beyaz şahı uzak tutmak.',
      neden: 'Aktif savunma. Motor eşit görüyor (+0.8).',
      diger: [
        { move: '51...Bb5', text: '52.Kh5 Bf1 53.g3 ile benzer (+0.8).' },
      ],
    },
    '52w': {
      text: '52.Kg4 ile şah g4’e gelir.',
      amac: 'Şahı merkeze getirip f4-g5 yoluyla yeniden içeri girmek.',
      neden: 'Motor eşit görüyor (+0.8).',
      diger: [
        { move: '52.g4', text: '52...Ba4 53.Kg3 Kf7 ile benzer (+0.8).' },
      ],
    },
    '52b': {
      text: '52...Bb5 ile fil b5’e gelir.',
      amac: 'd7’yi tutmak ve f1-a6 köşegeninde beklemek.',
      neden: 'Fil b5’ten hem d7’yi hem de f1’i kontrol eder. Motor eşit görüyor (+0.8).',
      diger: [
        { move: '52...Kf7', text: '53.Kg5 Bd7 54.Kh6 Kg8 ile aynı (+0.8).' },
      ],
    },
    '53w': {
      text: '53.Kf4 ile şah f4’e gelir.',
      amac: 'Bekleme hamlesi yapmak ve Siyahı bir karar vermeye zorlamak.',
      neden: 'Motor eşit görüyor (+0.8).',
      diger: [
        { move: '53.Bc3', text: '53...Kf7 54.Kf4 Ke8 ile aynı (+0.8).' },
      ],
    },
    '53b': {
      text: '53...Kf7 ile şah f7’ye çekilir.',
      amac: 'e6 piyonunu korumak ve beyaz şahın g5-h6’ya girmesine hazırlanmak.',
      neden: 'Pein’e göre Anand bu hamleyle ilk beraberlik fikrine yöneldi. Motor eşit görüyor (+0.8).',
      diger: [
        { move: '53...Ba4', text: '54.Bd4 Kf7 55.Ke5 Bb3 ile aynı (+0.8).' },
      ],
    },
    '54w': {
      text: '54.Kg5 ile şah g5’e ilerler.',
      amac: 'h6’ya girip h7’ye saldırmak.',
      neden: 'Pein: “Topalov şimdi sadece dolaşıyor ama ödüllendirilmek üzere.” Motor eşit görüyor (+0.9).',
      diger: [
        { move: '54.Bc3', text: '54...Ke8 55.Kg5 Kf7 56.Kh6 ile aynı (+0.9).' },
      ],
    },
    '54b': {
      text: '54...Bc6?? ile fil c6’ya gelir; oyunu kaybettiren hamle.',
      amac: 'd7’yi korumaya devam etmek.',
      neden: 'Pein: “Gerçekten korkunç bir hamle.” Fil c6’dan h7’yi koruma şansını kaybeder; 55.Kh6 Siyah şahını g8’e bağlar ve 56.g4 ile g5-g6 kırılması gelir. 54...Bd3 ya da 54...Ke8 beraberliği tutardı. Motor derinlik 22’de farkı göremiyor (Bc6 +0.9, Bd3 +1.0), ama 56.g4 sonrası +4.2’ye fırlıyor.',
      diger: [
        { move: '54...Bd3', text: '55.Kh6 Bf5 56.g4 Bc2 57.f4 ile fil b1-h7 köşegeninde h7’yi korur (+0.9).' },
        { move: '54...Ke8', text: '55.Kf6 Kd7 56.Kg7 Bd3 ile şah d7’de geçer piyonu tutar (+0.9).' },
      ],
    },
    '55w': {
      text: '55.Kh6 ile şah yeniden h6’ya girer.',
      amac: 'Siyah şahını g8’e bağlamak.',
      neden: 'Motor eşit görüyor (+0.9).',
      diger: [
        { move: '55.Bc3', text: '55...Bb5 56.Kh6 Kg8 57.g4 ile aynı (+0.9).' },
      ],
    },
    '55b': {
      text: '55...Kg8 ile şah g8’e döner.',
      amac: 'h7 piyonunu korumak.',
      neden: 'Zorunlu: 55...Ke8? ya da 55...Kf8? 56.Kxh7 ile piyon düşer (+4.2).',
    },
    '56w': {
      text: '56.g4! ile Beyaz g5, Bg7 ve f4-f5 ile şah kanadında ikinci bir geçer piyon yaratır.',
      amac: 'Siyahın savunmasını çökertmek.',
      neden: 'ChessBase’in kazanç hattı: 56...Bd7 57.g5 Be8 58.Bg7 Bd7 59.g6 hxg6 60.Kxg6 Be8+ 61.Kf6 Bd7 62.Ke7 Bc6 63.d7 Bxd7 64.Kxd7 Kxg7 65.Kxe6. Motor derinlik 22’de +4.2 gösteriyor. Anand terk etti.',
      diger: [
        { move: '56.Bc3', text: '56...Bb5 57.g4 Ba4 58.f4 ile aynı fikre döner; kısa aramada motor bütün bu hamleleri +1.0 civarında görüyor, çünkü kırılmanın sonucunu ancak derin aramada fark ediyor.' },
      ],
    },
  },
  qa: [
    { q: 'Anand neden 13...Rc8 oynadı, 13...a6 değil?', a: '3. ve 5. oyunlarda 13...a6 oynamış ve iki oyunda da sıkışık bir pozisyonda uzun süre savunmak zorunda kalmıştı. Pein’e göre Anand, Topalov’un hazırlıklarını devreye sokmasını engellemek istiyordu. Giri de 3. oyun analizinde 13...Rc8’i 14.Rc1 fikrinden kaçtığı için “dikkate değer” bulmuştu. Motor iki hamleyi eşit görüyor (+0.6).' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Beyazın avantajı 21.e5 ile d6 karesini ele geçirmesinden geldi. Bu kareye hiçbir Siyah piyonu saldıramazdı ve Beyazın atı 23.Ne4 ve 24.Nd6+ ile oraya yerleşti. Taşlar değişince Beyaz bir piyon önde ve d6’da korunan bir geçer piyonla oyun sonuna girdi.' },
    { q: '22...f4 neden hata sayılıyor?', a: 'f4 ile c3 atının e4’e giden yolu açıldı ve at oradan şah çekerek d6’ya sıçradı. Pein bu hamleyi “korkunç”, Azmaiparaşvili “zevok” diye niteledi. Motor ise 22...Bxe3 ile farkı küçük buluyor (her ikisi +0.8); hatanın asıl bedeli uzun süreli pasiflikti.' },
    { q: 'Beyaz neden 24.Bxc1 ile kaleyi hemen geri almadı?', a: '24.Bxc1? Bxe4 25.fxe4 sonrası Beyaz güçlü atını kaybederdi ve d6 karesi boşa giderdi (motor: −0.5). 24.Nd6+! ile at önce şah çekerek tehditten kurtuldu, sonra kale geri alındı (+0.7).' },
    { q: 'Zıt renkli filli oyun sonu neden kazanılabildi?', a: 'Normalde bu tür oyun sonlarında tek fazla piyon yetmez. Ama Beyazın şahı çok aktifti, d6 geçer piyonu Siyah filini d7-e8 köşegenine bağlıyordu ve 30...g6 h7 piyonunu yalnız bırakmıştı. Beyaz şahı h6’ya girince Siyah şahı g8’e bağlandı ve ikinci bir geçer piyon tehdidi doğdu.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'Pein’e göre 54...Bd3 ya da 54...Ke8 beraberliği tutardı. 54...Bd3 ile fil b1-h7 köşegeninde h7’yi korur ve Siyah şahı g8’e bağlı kalmazdı. Daha önce 22...Bxe3 ya da 30...Kc8 de Siyaha daha iyi şans verirdi.' },
    { q: '28.Bc3 neden yorumcuları şaşırttı?', a: 'Yorumcular 28.Bb4! bekliyordu; Seirawan ilk başta 28.Bc3’e inanmak istemedi. Motor da 28.Nc4 (+1.0) ve 28.Bb4’ü (+0.7) maç hamlesinden (+0.4) iyi buluyor. Ama 29.Rd1! bağlamasıyla Beyaz yine taşı geri aldı ve f4 piyonunu kazandı.' },
    { q: 'Anand ve Topalov oyun hakkında ne dedi?', a: 'Topalov, atın d6’ya geldiği anda pozisyonu kazanılmış saydığını söyledi. Anand ise f4 ile oyunu “tamamen yanlış oynadığını” ve belki fil değişiminin daha iyi olduğunu söyledi; hata olmasa da oyun sonunu tutabileceğinden emin olmadığını ekledi.' },
  ],
  sources: [
    { title: 'ChessBase: Sofia R8 – Topalov wins, equalises the match', url: 'https://en.chessbase.com/post/sofia-r8-topalov-wins-equalises-the-match' },
    { title: 'ChessBase: Sofia World Championship – another look at game eight (Malcolm Pein)', url: 'https://en.chessbase.com/post/sofia-world-championship-another-look-at-game-eight' },
    { title: 'ChessBase: Topalov – Anand, 8. oyun (Pein notları)', url: 'https://en.chessbase.com/portals/4/files/news/2010/sofia/games/pein08g0.htm' },
    { title: 'The Week in Chess: Anand – Topalov World Championship game 8', url: 'https://theweekinchess.com/chessnews/events/world-chess-championship-2010/anand-topalov-world-championship-game-8' },
    { title: 'Chess.com: WCh G8 – Topalov beats Anand, levels score', url: 'https://www.chess.com/news/view/wch-g8-topalov-beats-anand-levels-score' },
    { title: 'Sport-Express: Topalov – Anand 8. oyun yorumu (Azmaiparaşvili)', url: 'https://www.sport-express.net/chess/reviews/787804/' },
    { title: 'ChessBase: Sofia – game three drawn (Giri analizi)', url: 'https://en.chessbase.com/post/sofia-game-three-drawn' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  exercises: [
    { id: 'tan-1', kind: 'tekrar', plan: false, title: 'Köşegeni kapat, sonra atla gir',
      source: 'Topalov – Anand, Sofya 2010 (22. hamle)',
      fen: '2r1kr2/1p4pp/pB2p1b1/P3Ppb1/8/2N2P2/1P2K1PP/2RR4 w - - 1 22',
      prompt: 'Siyahın g5 fili c1 kalesine bakıyor; e5 piyonu ise d6 karesini Beyaza verdi. Beyaz nasıl devam eder?',
      hint: 'Fil, g5-c1 köşegenini kapatabilir ve değişim önerebilir.',
      line: ['Be3', 'f4', 'Ne4'],
      accept: { 2: ['Nb5', 'Bb6'] },
      explanation: '**22.Be3!** Fil köşegeni kapatır ve değişim önerir. 22...f4 gelirse **23.Ne4!** ile at g5 filine saldırır ve d6 karesine yönelir (23.Nb5 ve 23.Bb6 de motorca hemen hemen eşit, kabul edilir). Motor: Be3 +0.8, sonraki en iyi 22.Rc2 0.0.',
      link: 'e5 piyonunun açtığı d6 karesine at Ne4-d6 yoluyla gelecek.' },
    { id: 'tan-2', kind: 'tekrar', plan: false, title: 'Önce şah çek',
      source: 'Topalov – Anand, Sofya 2010 (24. hamle)',
      fen: '4kr2/1p4pp/p3p1b1/P3P1b1/4Np2/4BP2/1P2K1PP/2rR4 w - - 0 24',
      prompt: 'Siyah c1’de kaleyi aldı. Ama e4’teki atınıza g6 fili saldırıyor. Hemen geri almak doğru mu?',
      hint: 'Tehdit altındaki at, tempo kazanarak kaçabilir mi?',
      line: ['Nd6+', 'Kd7', 'Bxc1'],
      explanation: '**24.Nd6+!** At şah çekerek tehditten kurtulur ve d6’ya yerleşir; **25.Bxc1** ile kale sonra geri alınır. 24.Bxc1? Bxe4 25.fxe4 sonrası Siyah güçlü atı değişir ve d6 karesi boşa gider. Motor: Nd6+ +0.7, sonraki en iyi 24.Bxc1 −0.5.',
      link: 'Tehdit altındaki taş, rakibin hamlesini zorlayan bir şahla kurtarılır.' },
    { id: 'tan-3', kind: 'transfer', plan: false, title: 'Filini bırak, kaleye saldır',
      source: 'Kasparov – Shirov, Dos Hermanas 1996 (18. hamle)',
      fen: 'r4rk1/1p2nppp/p3pn2/1B3P2/PNNp4/5P2/1P4PP/R3K2R w KQ - 0 18',
      prompt: 'Aynı Slav hattından (5.a4 Bf5 6.Ne5 e6 7.f3) bir oyun. Siyah ...a6 ile b5 filinize saldırdı. Fili kaçırmak zorunda mısınız?',
      hint: 'c4’teki atın gidebileceği karelerden biri a8 kalesine saldırıyor.',
      line: ['Nb6', 'axb5', 'Nxa8'],
      explanation: '**18.Nb6!** At a8 kalesine saldırır. 18...axb5 **19.Nxa8** sonrası Beyaz kalite kazanır. Motor: Nb6 +2.3, sonraki en iyi 18.fxe6 +0.7.',
      link: 'Topalov tehdit altındaki atını Nd6+ ile tempo kazanarak kurtardı; Kasparov da filini kurtarmak yerine daha büyük bir tehdit (Nb6) yarattı.' },
    { id: 'tan-4', kind: 'transfer', plan: false, title: 'Zıt renkli fillerde ikinci geçer piyon',
      source: 'Smislov – Botvinnik, Dünya Şampiyonası maçı 1954, 11. oyun (39. hamle)',
      fen: '8/2B5/8/pK3pp1/2P1b1k1/6P1/P1P5/8 w - - 1 39',
      prompt: 'Zıt renkli filli bir oyun sonu. Beyazın şahı vezir kanadında, Siyahın şahı şah kanadında. Beyaz nasıl kazanmaya oynar?',
      hint: 'Siyah şahından uzakta bir geçer piyon yaratın.',
      line: ['c5', 'f4', 'gxf4'],
      explanation: '**39.c5!** c-piyonu ilerler ve vezir kanadında geçer piyonlar hazırlanır. 39...f4 sonrası **40.gxf4!** (40.Bxf4? gxf4 41.gxf4 sonrası Siyah dengeler) ve Beyaz 41.Bxa5 ile kazandı. Motor: c5 +3.6, sonraki en iyi 39.Be5 +0.4; 40.gxf4 +4.8, 40.Bxf4 +0.4.',
      link: 'Topalov d6 geçer piyonuna ek olarak şah kanadında ikinci bir cephe açtı; Smislov da zıt renkli fillerde Siyah şahından uzakta geçer piyonlar yarattı.' },
  ],
};
