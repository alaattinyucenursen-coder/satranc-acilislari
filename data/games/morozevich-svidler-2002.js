// Aleksandr Morozevich – Peter Svidler, St. Petersburg – Moskova maçı, Moskova 2002. Kaynak: PgnMentor (Morozevich.pgn).
export default {
  id: 'morozevich-svidler-2002',
  theme: '...Nxe4 ve vezir çatalı; ara şahla karşı saldırı',
  white: 'Aleksandr Morozevich', black: 'Peter Svidler',
  whiteShort: 'Morozevich', blackShort: 'Svidler',
  event: 'St. Petersburg – Moskova maçı', site: 'Moskova', year: 2002, eco: 'B41',
  variation: 'Sicilya Kan, Maroczy kuruluşu (5.c4), 7...Nxe4 hamlesi',
  result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 Nf6 6. Nc3 Qc7 7. a3 Nxe4 8. Nxe4 Qe5 9. Bd3 Qxd4 10. O-O f5 11. Be3 Qe5 12. f4 Qc7 13. Ng5 Bc5 14. Qh5+ g6 15. Qh3 h6 16. Rae1 Qb6 17. Bxf5 gxf5 18. Qh5+ Kd8 19. Nf7+ Kc7 20. Nxh8 Bxe3+ 21. Kh1 Qxb2 22. Rxe3 Qxh8 23. Qf7 Qd4 24. Rxe6 Qxc4 25. Rfe1 Qxf4 26. R6e5 Nc6 27. Rxf5 Qd2 28. Rff1 b5 29. Rd1 Qe3 30. Rf3 Qe4 31. h3 h5 32. Qxh5 Bb7 33. Qg5 Re8 34. Rfd3 Ne5 35. Re3 Qc2 36. Ree1 Bc6 37. Rd2 Qc3 38. Rde2 d6 39. Re3 Qc4 40. Rg3 Kb6 41. Qd2 Qc5 42. Kh2 Nc4 43. Qc3 Rxe1 44. Qxe1 Nxa3 45. h4 b4 46. Rg5 Qd4 47. Qg3 Nc2 48. Rg4 Be4 49. Rf4 Ne3 50. Qg8 Qe5 51. Qg3 Nxg2 52. Rxe4 Qxe4 53. Qxd6+ Kb5 0-1`,

  summary: 'Svidler (Siyah) kazandı. Kan Varyantının Maroczy kuruluşunda Beyaz 7.a3 ile ...Bb4’ü önledi, ama bunun için bir gelişim temposu harcadı ve f1 filini yerinden oynatmadığı için e-hattını açık bıraktı. Svidler bunu hemen cezalandırdı: **7...Nxe4 8.Nxe4 Qe5!** Vezir e4 atını e1’deki şaha karşı bağladı ve aynı anda d4 atına saldırdı; 9.Bd3 bağlı atı korudu ama d-hattını kapatıp d4’ü savunmasız bıraktı, 9...Qxd4 ile taş geri geldi. Bedeli, Siyahın merkezde kalan şahı ve gecikmiş gelişimiydi. Morozevich 12.f4, 13.Ng5 ve 14.Qh5+ ile şaha yüklendi, 17.Bxf5 ile fil feda etti. Motor fedayı yerinde buluyor (0.00); asıl hata **18.Qh5+?** oldu: Beyaz e3 filini g1–a7 çaprazındaki bağdan kurtarmadan şahı kovaladı ve h8 kalesini aldı. Svidler soğukkanlılıkla şahını c7’ye yürüttü ve **20...Bxe3+!** ara şahıyla önce e3 filini, sonra b2 piyonunu ve en sonunda h8’de kapana kısılmış atı topladı. Ortaya çıkan konumda Siyahın bir kaleye karşı fil ve atı vardı; Beyazın kaleleri aktifti ama açık şahı ve zayıf piyonları vardı. Svidler uzun bir manevra döneminde taşlarını birbirine bağlı tuttu (35...Qc2!, 38...d6!), kaleleri değişti, a3’ü alıp geçer b-piyonu yarattı ve sonunda 50...Qe5 bağı ile 51...Nxg2 hamlesi Beyazı malzeme vermeye zorladı. Motor oyunun son kısmında Siyahı −3 ile −6 arasında açıkça önde görüyor.',
  intro: 'Kan Varyantında (1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6) Siyah taşlarını erken bağlamaz: ...a6 b5 karesini korur, vezir sık sık c7’ye gelir, at ve fillerin yeri sonradan belirlenir. Beyazın en sert cevaplarından biri **5.c4**, yani Maroczy kuruluşudur: c4 ve e4 piyonları d5 karesini tutar ve Siyahın rahatlatıcı ...d5 kırılmasını zorlaştırır. Siyah genelde kirpi (hedgehog) yapısına (…b6, …d6, …Be7) razı olur ya da ...Bb4 ile c3 atını bağlayarak e4’e baskı kurar. Bu oyunda Beyaz 7.a3 ile ...Bb4’ü önceden kesti. Ama a3 bir gelişim hamlesi değildi: f1 fili hâlâ yerindeydi, e1 şahının önündeki e-hattı açıktı ve e4 piyonunu yalnızca c3 atı koruyordu. Siyahın veziri c7’den e5’e tek hamlede ulaşabiliyordu; işte 7...Nxe4 fikrinin temeli bu üç ayrıntıdır. Oyunun geri kalanı, merkezde kalmış bir şaha karşı yapılan saldırının ne zaman doğru, ne zaman fazla iddialı olduğunu ve iki hafif taşın bir kaleye karşı nasıl kazanıldığını gösteriyor.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'c4 ve e4 piyonlarıyla (Maroczy kuruluşu) d5 karesini tutup Siyahı dar alanda bırakmak; 7.a3 ile ...Bb4 bağını baştan önlemek.',
      '7...Nxe4 sonrası taş eşitlendiğinde gelişim üstünlüğünü kullanmak: Bd3, O-O, Be3 ile Siyah vezirini tempo kaybettirerek kovalamak.',
      '12.f4 ve 13.Ng5 ile e6 ve f7 zayıflıklarına, 14.Qh5+ ile merkezde kalan şaha baskı kurmak; Siyahın kaleyi oyuna sokmasını geciktirmek.',
      'Kale e-hattına (16.Rae1) gelince 17.Bxf5 ile şahın önünü açmak. Doğru devam e3 filini önce güvene almaktı (18.Bf2 ya da 18.Rf3, Motor: 0.00).',
      'Malzeme kaybından sonra kaleleri aktif tutmak (Rxe6, R6e5, Rxf5), Siyah piyonlarını toplamak ve açık Siyah şahına karşı vezirle şah serisi aramak.',
      'Oyunun sonunda h-piyonunu ilerletip (45.h4) ve vezirle g8/d6 karelerine girerek kalan son karşı şansı kullanmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'e4 piyonunun yalnızca c3 atıyla korunduğunu ve e-hattının açık olduğunu görüp **7...Nxe4 8.Nxe4 Qe5!** ile e4 atını şaha karşı bağlamak ve d4 atına saldırmak.',
      'Taş geri geldikten sonra 10...f5 ile e4 atını kovalamak ve e4 karesini kontrol etmek; vezirin tempo kaybını en aza indirmek (…Qe5, …Qc7).',
      '...Bc5 ve ...Qb6 ile g1–a7 çaprazında e3 filini g1 şahına karşı bağlamak; Beyazın saldırısının bu çaprazdaki zaafa çarpmasını sağlamak.',
      'Fedadan sonra şahı d8–c7 yoluyla vezir kanadına götürmek ve h8 kalesini “borç” olarak bırakmak: at h8’den çıkamaz, sonra alınır.',
      '**20...Bxe3+!** ara şahıyla tempo kazanmak: e3 filini al, 21...Qxb2 ile piyonu topla, 22...Qxh8 ile atı geri al.',
      'Kaleye karşı fil ve atla taşları birbirine bağlı tutmak (Ne5 + Bc6 + d6), vezirle Beyazın zayıf piyonlarını (c4, f4, a3) toplamak.',
      'Kaleleri değişip (43...Rxe1) a3’ü almak, geçer b-piyonu ile Beyazı savunmaya zorlamak ve son anda bağ (50...Qe5) ile g2’yi kırmak.',
    ] },
  },
  critical: [
    { move: '7b', title: '...Nxe4!? e-hattındaki bağa dayanan piyon alma', text: 'At e4 piyonunu alır. 8.Nxe4 Qe5 sonrası e4 atı e1 şahına karşı bağlıdır ve hareket edemez; vezir aynı anda d4 atına da saldırır. Bu numara 7.a3 yüzünden mümkün oldu: 7.Be2 oynansaydı fil e-hattını kapatırdı ve 7...Nxe4? 8.Nxe4 sonrası Siyah düpedüz bir taş geride kalırdı (Motor: +4.2). Motor sakin 7...b6 (+0.7) ya da 7...Bd6’yı biraz daha sağlam buluyor; maç hamlesinden sonra Beyazın gelişim üstünlüğü var (+0.8 ile +1.2 arası) ama Siyah taşı kesin geri kazanır.' },
    { move: '9w', title: '9.Bd3: bağlı atı korumanın bedeli', text: 'e4 atı bağlı olduğu için 9.Nc3, 9.Ng3 gibi hamleler kuraldışıdır. Beyaz e4’ü korumak zorundadır: 9.Bd3 bunu yapar ama d1 vezirinin d4 atına giden yolunu kapatır, 9...Qxd4 ile taş geri gelir. 9.f3 d-hattını açık tutar, ama 9...d5! bağlı atı yine düşürür (Motor: +0.3). 9.Bd3 en iyisidir (+1.0): Beyaz en azından gelişmiş bir fil ve hızlı rok kazanır.' },
    { move: '12w', title: '12.f4: saldırgan ama g1–a7 çaprazını zayıflatan seçim', text: 'f4 veziri kovalar ve e4 atını korur, ama g1 şahının önündeki çaprazı açar. Siyahın bütün karşı oyunu (…Bc5, …Qb6, …Bxe3+) bu çapraza dayanacak. Motor sakin 12.Ng3’ü (+1.6) ya da 12.Nc3’ü (+1.2) daha iyi buluyor; maç hamlesinden sonra fark +0.5’e iner.' },
    { move: '18w', title: '18.Qh5+? fedanın devamında asıl hata', text: '17.Bxf5 gxf5 sonrası konum dengedeydi (Motor: 0.00). Doğrusu 18.Bf2! idi: fil bağdan kurtulur, 18...Bxf2+ 19.Rxf2 Rf8 20.Qxh6 ile Beyaz açık şaha karşı oyun alır; 18.Rf3 de e3 filini korur (0.00). Maç hamlesi şahı kovalar ve h8 kalesini kazanır, ama e3 fili bağlı kalır ve Siyah oradan tempo ile malzemeyi geri toplar (Motor: −2.0).' },
    { move: '19b', title: '...Kc7! şah kendi kendini güvene alır', text: 'Svidler kalesini kurtarmaya çalışmaz; şahı c7’ye götürür ve h8 kalesini Beyaza bırakır. 19...Ke7? 20.Nxh8 Bxe3+ 21.Kh1 Kd8 Beyazı öne geçirir (+1.7), çünkü şah f-hattında ve Beyaz vezirinin menzilinde kalır. c7’de şah b6 veziri ve d7 piyonu ile çevrilidir ve h8’deki at zaten kapana girmektedir.' },
    { move: '20b', title: '...Bxe3+! ara şah', text: 'Siyah h8’deki atı hemen almaz. Önce e3 filini şahla alır: 21.Rxe3? Qxe3+ bir kale kaybettirir (−4.2) ve 21.Rf2 Bxf2+ daha da kötüdür, bu yüzden 21.Kh1 zorunludur. Ardından vezir b2’yi alır, Beyaz e3 filini geri alırken Siyah da 22...Qxh8 ile atı toplar. Motor: 20...Bxe3+ −2.7; atı hemen kurtarmaya yönelik 20...Bd4 ya da 20...a5 ise Beyazı +3.2 / +3.4 öne geçirir.' },
    { move: '35b', title: '...Qc2! bağı çözen tek hamle', text: '35.Re3 e4 vezirine saldırdı; vezir çekilirse e5 atı açıkta kalır. 35...Qc2 vezir d1 kalesine saldırarak tempo kazanır ve atı korumak için zaman yaratır (36...Bc6, 38...d6). 35...Qc6? 36.Rxe5 Qxg2+ 37.Qxg2 Bxg2+ değişimleri Siyahın avantajını eritir (−0.6). Motor: 35...Qc2 −2.6.' },
    { move: '50b', title: '...Qe5! bağ ve 51...Nxg2 ile son darbe', text: 'Vezir e5’e gelerek f4 kalesine saldırır; kale e5–h2 çaprazında h2 şahına karşı bağlıdır. 51.Qg3 kaleyi korur ama 51...Nxg2! gelir: at g2’de e4 filiyle korunduğu için şah alamaz (Kxg2 kuraldışı), at hem f4 kalesine hem h4 piyonuna saldırır. Beyaz 52.Rxe4 ile kaleyi vermek zorunda kaldı ve bir at eksik terk etti (Motor: −5.6).' },
  ],
  lessons: [
    'Bir taşın “bağlı” olup olmadığını her zaman kontrol edin: 8...Qe5 tek başına iki ata saldıran bir çatal değildi; e4 atının e1 şahına karşı bağlı olması numarayı çalıştırdı. Bu yüzden 7.Be2 bu fikri tamamen önlerdi.',
    'Gelişim yerine piyon hamlesi (7.a3) oynandığında şahın önündeki açık hat ve korumasız merkez piyonları taktik hedef olur.',
    'Bir taş fedası tek tek hamlelerle değil, rakibin en güçlü cevabıyla hesaplanmalıdır: 17.Bxf5 doğruydu, ama 18.Qh5+ g1–a7 çaprazındaki bağı ve ara şah …Bxe3+ fikrini gözden kaçırdı.',
    'Malzemeyi hemen geri almak yerine önce şahla tempo kazanmak (20...Bxe3+, 21...Qxb2) çoğu zaman daha fazlasını getirir; kapana kısılmış taş (h8’deki at) kaçmaz.',
    'Kaleye karşı iki hafif taş, taşlar birbirini koruyorsa (Ne5 – Bc6 – d6 zinciri) ve rakibin piyonları zayıfsa çok güçlüdür; kaleler açık hatta oynasa bile hedef bulamaz.',
    'Üstün taraf bir yandan açık şahını korurken öte yandan geçer piyon yaratmalıdır (43...Rxe1, 44...Nxa3, 45...b4); geçer piyon rakip taşları bağlar.',
    'Oyunun sonunda bile taktik dikkat gerekir: 50...Qe5 ile çapraz bağ ve 51...Nxg2 ile korunan kareye at yerleştirmek galibiyeti hızlandırdı; 52...Qxg3+?? gibi bir değişim ise her şeyi geri verebilirdi.',
  ],
  notes: {
    '1w': {
      text: '1.e4 merkezi piyonu iki kare ilerletir; d1 vezirine ve f1 filine yol açar.',
      amac: 'Merkezde d5 ve f5 karelerini kontrol etmek, hızlı gelişim ve rok hazırlamak.',
      neden: 'Morozevich keskin ve az bilinen konumları seven, hem 1.e4 hem 1.d4 oynayan bir oyuncudur; burada açık oyun ve Sicilya mücadelesine davetiye çıkarıyor. Motor 1.e4’ü en iyi ilk hamle olarak görüyor (+0.4).',
      diger: [
        { move: '1.d4', text: 'Kapalı oyunlara götürür; Svidler’in Grünfeld’ine karşı keskin teori demek (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; açılış seçimini siyaha bırakmadan sonra karar verir (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5 Sicilya Savunması: Siyah d4 karesine yandan bakar ve simetrik olmayan bir mücadele seçer.',
      amac: 'Beyazın d4 ile merkezi kurmasını engellemek; ...cxd4 sonrası yarı açık c-hattı ve merkezde piyon çoğunluğu kazanmak.',
      neden: 'Sicilya, kazanma şansı aranan oyunlarda en sık seçilen savunmadır: konum dengesizdir ve iki taraf da aktif oyun bulur. Motor 1...e5 ile hemen hemen aynı değerde görüyor (+0.3).',
      diger: [
        { move: '1...e5', text: 'Açık oyun; daha simetrik ve daha az riskli konumlar (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması; sağlam ama Siyahın c8 fili uzun süre pasif kalır (Motor: +0.35).' },
      ],
    },
    '2w': {
      text: '2.Nf3 atı gelişir, d4 hamlesini hazırlar ve e5 karesine bakar.',
      amac: 'd2-d4 ile merkezi açıp açık Sicilya’ya girmek.',
      neden: 'Açık Sicilya, Beyazın gelişim önceliğini en iyi kullandığı yoldur. 2.Nc3 (kapalı Sicilya) ya da 2.c3 (Alapin) daha az teori ister ama daha sakin konumlar verir.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya ya da Grand Prix saldırısı (f4) yolları; Motor: +0.3.' },
        { move: '2.c3', text: 'Alapin: Beyaz d4’ü piyonla destekler, Siyah ...d5 ya da ...Nf6 ile eşitliğe yakındır (Motor: +0.3).' },
      ],
    },
    '2b': {
      text: '2...e6 d5 karesini kontrol eder ve f8 filine e7–d6–c5–b4 yollarını açar.',
      amac: 'Kan ve Taimanov sistemlerinin esnek yapısını kurmak: ...a6, ...Qc7, ...Nf6 ve gerektiğinde ...d5 kırılması.',
      neden: '2...d6 (Najdorf/Ejderha) ya da 2...Nc6 yoğun teori ister. 2...e6 ile Siyah taşlarının yerine sonra karar verir; özellikle f8 filinin b4 ya da c5’e çıkabilmesi bu oyunda önemli olacak (…Bc5 ile g1–a7 çaprazı).',
      diger: [
        { move: '2...d6', text: 'Najdorf, Ejderha ve Klasik varyantlara götürür (Motor: +0.5).' },
        { move: '2...Nc6', text: 'Açık oyunda Sveşnikov veya Klasik sistemlere yol açar (Motor: +0.3).' },
      ],
    },
    '3w': {
      text: '3.d4 merkezde piyon değişimini zorlar.',
      amac: 'Merkezi açmak ve d4’e at yerleştirerek gelişim üstünlüğünü kullanmak.',
      neden: 'Açık Sicilya’nın ana fikri budur: Beyaz bir merkez piyonunu c-piyonuyla değişir, karşılığında hızlı gelişim ve alan kazanır.',
      diger: [
        { move: '3.Nc3', text: 'd4’ü bir hamle geciktirir; aynı yapılara geçebilir (Motor: +0.3).' },
        { move: '3.c3', text: 'Alapin tipi yapıya döner; Siyah ...d5 ile rahat oyun alır (Motor: +0.3).' },
      ],
    },
    '3b': {
      text: '3...cxd4 merkezde değişir ve c-hattını yarı açık bırakır.',
      amac: 'Merkezde piyon çoğunluğu (d ve e piyonları) elde etmek ve c-hattında karşı oyun kurmak.',
      neden: 'Neredeyse zorunlu: 3...a6? 4.d5 ya da 3...d5 4.exd5 exd5 5.Bb5+ Siyaha merkezde sıkıntı yaratır (Motor: +0.8 / +1.0).',
      diger: [
        { move: '3...d5', text: '4.exd5 exd5 5.Bb5+ ile Siyah izole piyon ve gelişim sorunlarıyla kalır (Motor: +1.0).' },
      ],
    },
    '4w': {
      text: '4.Nxd4 piyonu geri alır ve atı merkeze yerleştirir.',
      amac: 'Merkezde güçlü bir at, c4 ve e4 için destek ve Nc3 ile hızlı gelişim.',
      neden: 'Açık Sicilya’nın doğal devamı. At d4’te hem b5 hem e6/f5 karelerine sıçramaya hazırdır; bu yüzden Siyah bir sonraki hamlede b5 karesini korur.',
      diger: [
        { move: '4.c3', text: 'Gambit tarzı oyun; Siyah piyonu alıp ...d5 ile rahat eder.' },
      ],
    },
    '4b': {
      text: '4...a6 Kan (Paulsen) Varyantı: b5 karesini korur.',
      amac: 'Beyaz atlarının b5’e gelmesini önlemek, ...b5 ve ...Bb7 ile vezir kanadında alan kazanmak; ...Qc7 için zemin hazırlamak.',
      neden: '4...Nc6 (Taimanov) atı hemen bağlar, 4...Nf6 5.Nc3 ise Beyaza e5 ve Ndb5 fikirleri verir. Kan’da Siyah taşlarının yerini Beyazın kuruluşuna göre seçer; motor üçünü de yakın değerlendiriyor (+0.5 civarı).',
      diger: [
        { move: '4...Nc6', text: 'Taimanov Varyantı; 5.Nc3 Qc7 ya da 5.Nb5 d6 6.c4 yapıları (Motor: +0.5).' },
        { move: '4...Nf6', text: '5.Nc3 ile Dört At Sicilyası; 5...Bb4 ya da 5...Nc6 (Motor: +0.5).' },
      ],
    },
    '5w': {
      text: '5.c4 Maroczy kuruluşu: c4 ve e4 piyonları d5 karesini tutar.',
      amac: 'Siyahın ...d5 kırılmasını kalıcı olarak zorlaştırmak ve Siyahı dar bir kirpi yapısına mahkûm etmek.',
      neden: 'Kan’da Siyahın vezir kanadındaki erken baskısı az olduğu için Beyaz hemen bu “sıkıştırmayı” kurabilir. Ana alternatif 5.Bd3’tür (fil e4’ü korur, c-piyonu esnek kalır). Motor 5.c4’ü en iyi hamlelerden biri sayıyor (+0.6).',
      diger: [
        { move: '5.Bd3', text: 'Kan’ın ana hattı: Beyaz önce gelişir, c4’ü sonra oynar (Motor: +0.6).' },
        { move: '5.Nc3', text: 'Siyaha ...b5 ve ...Bb4 fikirleri verir; daha açık bir oyun (Motor: +0.5).' },
      ],
    },
    '5b': {
      text: '5...Nf6 atı geliştirir ve hemen e4 piyonuna baskı kurar.',
      amac: 'Beyazı e4’ü korumaya zorlamak; ...Bb4 ya da ...Qc7 ile bu baskıyı artırmak.',
      neden: 'Maroczy kuruluşunda e4 piyonu yapının temelidir; ona erken baskı Beyazın gelişim düzenini kısıtlar. Motor 5...Nf6’yı en iyi buluyor (+0.4); 5...Bb4+ ve 5...Qc7 de oynanır.',
      diger: [
        { move: '5...Qc7', text: 'Önce vezir; Beyaz 6.Nc3 Nf6 ile benzer konumlara döner (Motor: +0.6).' },
        { move: '5...Bb4+', text: '6.Nc3 Nf6 7.Bd2 ile fil bağı; e4’e baskı (Motor: +0.5).' },
      ],
    },
    '6w': {
      text: '6.Nc3 atı geliştirir ve e4 piyonunu korur.',
      amac: 'Maroczy yapısını tamamlamak: Nc3, Be2, O-O, Be3 ve gerekirse f3 ile e4’ü sağlamlaştırmak.',
      neden: 'e4’ü korumanın en doğal yolu. 6.Bd3 de mümkündü ama c4 ile birlikte fil d3’te biraz sıkışır ve Siyah ...Nc6, ...d5 ile karşı oyun alır (Motor: +0.1). 6.Nc3 ile Beyaz +0.5 civarında kalır.',
      diger: [
        { move: '6.Bd3', text: 'e4 filin koruması altında, ama 6...Nc6 ve ...d5 ile Siyah rahatlar (Motor: +0.1).' },
        { move: '6.Qd3', text: 'Vezirle koruma; 6...d5 7.cxd5 exd5 ile merkez açılır (Motor: +0.2).' },
      ],
    },
    '6b': {
      text: '6...Qc7 vezir c7’ye gelir; c4, e5 ve h2 karelerine bakar.',
      amac: 'Kan’ın tipik vezir yerleşimi; ileride ...Bb4 ile e4’e baskıyı artırmak, gerektiğinde c7’den e5’e geçip merkezde taktik oyun kurmak.',
      neden: '6...Bb4 bu konumda daha sık görülen ana hamledir (Motor: +0.4) ve c3 atını hemen bağlar. 6...Qc7 aynı fikri bir hamle geciktirir ama vezirin e5’e ulaşabilmesi bu oyunda belirleyici olacak: 7...Nxe4 numarası ancak vezir c7’de iken çalışır (vezir d8’de iken 6...Nxe4? 7.Nxe4 Siyahı düpedüz taş geride bırakır, +4.3).',
      diger: [
        { move: '6...Bb4', text: 'Ana hat: 7.Bd3 ya da 7.Qd3 ile Beyaz e4’ü korur; Siyah gerekirse ...Bxc3+ ile Beyazın piyon yapısını bozar (Motor: +0.4).' },
        { move: '6...d5', text: 'Hemen merkez kırılması; 7.cxd5 exd5 8.exd5 Nxd5 sonrası Beyazın gelişimi daha iyi (Motor: +0.7).' },
      ],
    },
    '7w': {
      text: '7.a3 ...Bb4 hamlesini önler.',
      amac: 'c3 atını bağdan korumak ve ileride b4 ile vezir kanadında alan kazanmak.',
      neden: 'Mantıklı bir önlem, ama bir gelişim temposu harcar. Daha önemlisi f1 fili hâlâ yerinde olduğu için e-hattı e1 şahına kadar açıktır ve e4 piyonu yalnızca c3 atıyla korunur. Doğal 7.Be2 hem rok hazırlar hem e-hattını kapatır: o zaman 7...Nxe4? 8.Nxe4 Qe5 bağ yaratmaz ve Siyah bir taş kaybeder (Motor: +4.2). Motor yine de 7.a3’ü en iyi hamle sayıyor (+0.7), çünkü numaradan sonra da Beyaz gelişimde önde kalır.',
      diger: [
        { move: '7.Be2', text: '7...Bb4 8.Qd3 O-O 9.Bd2 ile normal gelişim; e-hattı kapandığı için ...Nxe4 numarası çalışmaz (Motor: +0.5).' },
        { move: '7.Bd3', text: 'e4’ü filin de korumasına alır; ama 7...Bb4 bağı yine gelir.' },
      ],
    },
    '7b': {
      text: '7...Nxe4!? at e4 piyonunu alır.',
      amac: '8.Nxe4 Qe5! ile e4 atını e1 şahına karşı bağlamak ve d4 atına aynı anda saldırmak; böylece taşı geri kazanıp merkezi açmak.',
      neden: 'Svidler, Beyazın gelişim temposunu (7.a3) hemen cezalandırmak istiyor ve kirpi yapısının pasifliğinden kaçıyor. Taktik sağlamdır: e4 atı bağlanacak, Beyaz iki taşı birden koruyamayacak. Bedeli, Siyahın vezirinin erken oyuna girmesi ve şahının merkezde kalmasıdır. Motor sakin 7...b6’yı (+0.7) biraz daha sağlam buluyor; maç hamlesinden sonra Beyaz gelişim üstünlüğüyle +0.8 ile +1.2 arasında.',
      diger: [
        { move: '7...b6', text: 'Kirpi yapısı: 8.Be3 Bb7 9.f3 Be7 ile Beyaz alan üstünlüğünü korur, Siyah sağlam ama pasif (Motor: +0.7).' },
        { move: '7...Bd6', text: 'Fil h2’ye ve e5’e bakar; 8.Be3 Nc6 9.g3 ile normal gelişim (Motor: +0.7).' },
        { move: '7...Nc6', text: 'Önce gelişim; 8.Be3 Bd6 9.g3 (Motor: +0.7).' },
      ],
    },
    '8w': {
      text: '8.Nxe4 atı geri alır.',
      amac: 'Bir taş önde kalmak; Siyahın taktiğe dayanan telafisini karşılamak.',
      neden: 'Başka hamleler Beyazı karşılıksız piyon eksik bırakır: 8.Nxe6? dxe6 9.Nxe4 Be7 Siyahı öne geçirir (−0.4), 8.Na4 Nc6 de iyi değildir (−0.8). Beyaz taşı alır ve Siyahın bunu nasıl geri alacağını görmek ister.',
      diger: [
        { move: '8.Nxe6', text: '8...dxe6 9.Nxe4 Be7: Beyazın merkez atı gitmiş, Siyah rahat gelişir (Motor: −0.4).' },
        { move: '8.Na4', text: '8...Nc6 9.Nxc6 dxc6 10.Be3: Siyah bir piyon önde ve iyi konumda (Motor: −0.8).' },
      ],
    },
    '8b': {
      text: '8...Qe5! vezir e5’e gelir: e4 atı e1 şahına karşı bağlıdır ve d4 atı saldırı altındadır.',
      amac: 'Beyazı ya e4’ü ya da d4’ü korumaya zorlamak; ikisini birden korumak imkânsız.',
      neden: 'Bu bir çatal gibi görünür ama asıl güç bağdadır: e4 atı kaçamaz (9.Nc3, 9.Ng3, 9.Nd2 kuraldışı). d4 atı şimdilik d1 veziriyle korunur, ama e4’ü koruyan her hamle (Bd3 d-hattını kapatır, Qe2 ya da Qc2 vezir hattını terk eder) d4’ü açıkta bırakır. Başka hamleler Siyahı bir taş geride bırakır: 8...b5 +3.6, 8...b6 +3.9.',
      diger: [
        { move: '8...b5', text: '9.Nd2 Bb7 10.N4f3: Beyaz taşı korur, Siyah sadece biraz gelişim kazanır (Motor: +3.6).' },
        { move: '8...b6', text: '9.Nc3 Bb7 10.Nf3: Siyah bir taş eksik (Motor: +3.9).' },
      ],
    },
    '9w': {
      text: '9.Bd3 fil bağlı e4 atını korur ve gelişir; ama d1 vezirinin d4’e giden yolunu kapatır.',
      amac: 'Taşı geri verirken en azından gelişmiş bir fil ve hızlı rok elde etmek.',
      neden: 'Bağlı atı korumanın yolları sınırlıdır. 9.Qc2 f5! ile e4 atına ikinci kez saldırılır (Motor: +0.7). 9.f3 d-hattını açık tutar ama 9...d5! bağlı atı yine kazanır (+0.3). 9.Nf3 ise 9...Qxe4+ ile şah çekerek atı alır. 9.Bd3 en iyisidir (+1.0): taş geri gider ama Beyazın gelişim farkı belirginleşir.',
      diger: [
        { move: '9.Qc2', text: '9...f5 10.Be3 fxe4 11.g3: Beyaz piyonu ve tempoyu kaybeder (Motor: +0.7).' },
        { move: '9.f3', text: '9...d5 10.cxd5 exd5: e4 atı yine düşer ve Beyazın şah kanadı zayıflar (Motor: +0.3).' },
        { move: '9.Nf3', text: '9...Qxe4+ 10.Be3: Siyah tempo ile taşı geri alır, Beyaz bir şey kazanmaz.' },
      ],
    },
    '9b': {
      text: '9...Qxd4 vezir d4 atını alır; malzeme eşitlenir.',
      amac: 'Taşı geri almak ve vezirle merkezde aktif kalmak.',
      neden: 'Zorunlu: başka her hamle Siyahı bir taş geride bırakır (9...Nc6 +5.0, 9...Be7 +5.1). Vezir d4’te merkezde ama Beyazın Be3 ve Nc3/Ng5 hamleleriyle tempo kazanacağı bir hedef olacak.',
      diger: [
        { move: '9...Be7', text: '10.Nf3 Qc7 11.O-O: Siyah bir taş eksik (Motor: +5.1).' },
      ],
    },
    '10w': {
      text: '10.O-O Beyaz rok yapar.',
      amac: 'Şahı güvene almak ve f1 kalesini oyuna sokmak; ardından Be3 ve Re1 ile Siyah vezirini kovalamak.',
      neden: 'Siyahın şahı merkezde, taşlarının yarısı gelişmemiş: Beyaz açık hatlarla hızla oynamak ister. Motor 10.Be3’ü biraz daha iyi buluyor (+1.2): 10...Qxb2 11.Rb1 Qe5 12.O-O ile Beyaz bir piyon vererek daha da fazla tempo kazanır. Maç hamlesi daha sade (+1.1).',
      diger: [
        { move: '10.Be3', text: '10...Qxb2 11.Rb1 Qe5 12.O-O: piyon karşılığı büyük gelişim üstünlüğü (Motor: +1.2).' },
        { move: '10.Qe2', text: '10...Nc6 11.Be3 Qe5 12.O-O: benzer fikir, e-hattında baskı (Motor: +0.9).' },
      ],
    },
    '10b': {
      text: '10...f5 e4 atına saldırır ve e4 karesini kontrol eder.',
      amac: 'Atı merkezden uzaklaştırmak, vezire e5 karesini tekrar açmak ve Beyaz taşlarının e4’e yerleşmesini önlemek.',
      neden: 'Motor bunu en iyi buluyor (+0.9), ama bedeli büyüktür: e6 piyonu geri kalır, e8–h5 çaprazı zayıflar ve şah merkezde savunmasız olur; Beyazın ileride Qh5+ ve Ng5 hamleleri buna dayanacak. 10...Nc6 11.Be3 Qxb2 12.Rb1 Qxa3 Siyaha iki piyon verir ama Beyazın gelişimi çok güçlü olur (+1.3).',
      diger: [
        { move: '10...Nc6', text: '11.Be3 Qxb2 12.Rb1 Qxa3: iki piyon önde ama vezir oyundan uzak ve şah merkezde (Motor: +1.3).' },
        { move: '10...Qe5', text: '11.Bd2 Be7 12.Bc3 Qf4: vezir sürekli kovalanıyor (Motor: +1.8).' },
      ],
    },
    '11w': {
      text: '11.Be3 fil gelişir ve tempo ile d4 vezirini kovalar.',
      amac: 'Gelişimi tamamlamak ve Siyah vezirini kovalayarak her hamlede tempo kazanmak.',
      neden: 'Motor en iyi hamle olarak görüyor (+1.0). b2 piyonunu korumasız bırakır, ama 11...Qxb2 12.Rb1 vezirini daha da oyun dışına iter. 11.Nc3 atı kurtarır ama daha az tempo kazanır (+0.9).',
      diger: [
        { move: '11.Nc3', text: '11...Nc6 12.Be3 Qf6 13.Re1: sakin ama Beyaz daha az tempo kazanır (Motor: +0.9).' },
        { move: '11.Ng5', text: '11...Be7 12.Nf3 Qd6: at dolaşır, Siyah toparlanır (Motor: +0.6).' },
      ],
    },
    '11b': {
      text: '11...Qe5 vezir e5’e döner ve e4 atına baskıyı sürdürür.',
      amac: 'Atı bağlı tutmak ya da geri çekilmeye zorlamak; vezir merkezde, hem şah kanadına hem b2’ye bakar.',
      neden: '11...Qxb2 motorca hemen hemen aynı değerdedir (+1.0) ama vezir oyun dışına çıkar. 11...Qxd3?? ise 12.Qxd3 fxe4 13.Qc3 ile veziri iki hafif taşa vermek demektir (+5.0).',
      diger: [
        { move: '11...Qxb2', text: '12.Rb1 Qe5 13.f4 Qc7: oyundakine benzer ama Siyah fazladan piyon alır, Beyaz b-hattını kazanır (Motor: +1.0).' },
        { move: '11...Qxd3', text: '12.Qxd3 fxe4 13.Qc3: vezir iki hafif taşa gitti (Motor: +5.0).' },
      ],
    },
    '12w': {
      text: '12.f4 veziri tekrar kovalar ve e4 atını korur.',
      amac: 'f-piyonunu saldırıya katmak, Ng5 ve Qh5+ için yol açmak; f1 kalesini f-hattında aktif hale getirmek.',
      neden: 'Saldırgan Morozevich tarzı, ama g1–a7 çaprazını açar: Siyahın …Bc5 ve …Qb6 ile kuracağı bütün baskı bu zaafa dayanacak. Motor sakin 12.Ng3’ü (+1.6: 12...Nc6 13.Re1 Be7 14.Bxf5) ya da 12.Nc3’ü (+1.2) çok daha iyi buluyor; maç hamlesiyle avantaj +0.5’e iner.',
      diger: [
        { move: '12.Ng3', text: 'At f5’e baskı yapar, 12...Nc6 13.Re1 Be7 14.Bxf5 ile Beyaz piyonu kazanır (Motor: +1.6).' },
        { move: '12.Nc3', text: '12...Be7 13.Re1 Nc6 14.Bf1: e-hattında baskı, şah hâlâ merkezde (Motor: +1.2).' },
      ],
    },
    '12b': {
      text: '12...Qc7 vezir c7’ye döner.',
      amac: 'Veziri güvenli bir kareye çekmek; c7’den c5’e ve g1–a7 çaprazına bakmak.',
      neden: 'Tek iyi kare: 12...Qa5? 13.b4 Qd8 14.Nc3 Siyahı çok geride bırakır (+2.1), 12...Qxb2?? 13.Rf2 Qxa1 14.Qxa1 fxe4 ise veziri kaybettirir (+4.6).',
      diger: [
        { move: '12...Qa5', text: '13.b4 Qd8 14.Nc3: vezir tempo kaybederek geri döner (Motor: +2.1).' },
        { move: '12...Qxb2', text: '13.Rf2 Qxa1 14.Qxa1 fxe4: vezir kapana girer (Motor: +4.6).' },
      ],
    },
    '13w': {
      text: '13.Ng5 at g5’e sıçrar; e6, f7 ve h7 karelerine bakar.',
      amac: 'Qh5+ ile birlikte f7’ye ve e6’ya baskı kurmak, Siyah şahının rok yapmasını engellemek.',
      neden: 'At e4’te f5 piyonuna hedef oluyordu; g5’te hem kurtulur hem saldırıya katılır. Motor 13.Ng5 ve 13.Nc3’ü eşit görüyor (+0.6); 13.Nd2 ise avantajı tamamen bırakır (0.0).',
      diger: [
        { move: '13.Nc3', text: '13...Bc5 14.Qh5+ g6 15.Qe2: daha sakin, aynı avantaj (Motor: +0.6).' },
        { move: '13.Nd2', text: '13...Be7 14.Qh5+ g6: at pasif, Siyah eşitliğe yakın (Motor: 0.0).' },
      ],
    },
    '13b': {
      text: '13...Bc5 fil c5’e gelişir ve e3 filini g1 şahına karşı bağlar.',
      amac: 'g1–a7 çaprazındaki zaafı kullanmak, Beyazın e3 filini hareketsiz bırakmak ve şaha karşı karşı oyun yaratmak.',
      neden: 'Motor en iyi hamle olarak görüyor (+0.6). 13...Be7? 14.Qh5+ g6 15.Qh6 fili pasif bırakır (+2.1); 13...g6? 14.Bxf5! ise hemen fedayı çalıştırır (+2.0). Bc5 hem gelişir hem 12.f4’ün açtığı çaprazı cezalandırır.',
      diger: [
        { move: '13...Be7', text: '14.Qh5+ g6 15.Qh6 Bf8: Siyah geri çekilmek zorunda kalır (Motor: +2.1).' },
        { move: '13...g6', text: '14.Bxf5 Bc5 15.Bf2: e6 düşer, Beyaz çok önde (Motor: +2.0).' },
      ],
    },
    '14w': {
      text: '14.Qh5+ vezir şah çeker.',
      amac: 'Siyahı ...g6 ile şah kanadını zayıflatmaya zorlamak ve h8 kalesine, f7’ye bakan çaprazları açmak.',
      neden: 'Motor en iyi hamle olarak görüyor (+0.5). 14.Bxc5 Qxc5+ 15.Rf2 ile bağ kalkar ama saldırı yumuşar (+0.3).',
      diger: [
        { move: '14.Bxc5', text: '14...Qxc5+ 15.Rf2 O-O: Siyah rok yapar ve rahatlar (Motor: +0.3).' },
        { move: '14.Qd2', text: '14...O-O 15.b4 Bxe3+ 16.Qxe3: daha sade (Motor: +0.15).' },
      ],
    },
    '14b': {
      text: '14...g6 şahı piyonla korur.',
      amac: 'Şahı merkezde tutup Beyaz vezirini kovalamak.',
      neden: 'Zorunlu: 14...Kd8? 15.Nf7+ Ke7 16.Nxh8 kaleyi kaybettirir (+3.8), 14...Ke7? 15.Qf7+ Kd6 ise şahı merkezde öldürücü bir saldırıya açar (+4.1).',
      diger: [
        { move: '14...Kd8', text: '15.Nf7+ Ke7 16.Nxh8: Siyah bir kale kaybeder (Motor: +3.8).' },
      ],
    },
    '15w': {
      text: '15.Qh3 vezir h3’e çekilir; f5 ve e6’ya baskı yapar.',
      amac: 'Bxf5 fedasını ve Nxe6 fikirlerini hazırlamak; h-piyonuna ve e6’ya üstten bakmak.',
      neden: 'Motor 15.Qh3 ile 15.Qe2’yi eşit görüyor (+0.5). Qh3 daha saldırgandır: vezir hem f5 hem e6 piyonunu hedef alır. 15.Qf3? h6 16.Nh3 atı kötü kareye iter (−0.1).',
      diger: [
        { move: '15.Qe2', text: '15...Bxe3+ 16.Qxe3 b6 17.b4: sağlam, e6’ya baskı (Motor: +0.5).' },
        { move: '15.Qf3', text: '15...h6 16.Nh3 Bxe3+ 17.Qxe3: at kenarda kalır (Motor: −0.1).' },
      ],
    },
    '15b': {
      text: '15...h6 g5 atına saldırır.',
      amac: 'Atı merkezden kovalamak ve h6 piyonu ile g5 karesini kontrol altına almak.',
      neden: 'Doğal ama küçük bir yanlışlık: g6 ve h6 birlikte şah kanadını zayıflatır ve 17.Bxf5 fedası güçlenir. Motor önce 15...Bxe3+ 16.Qxe3 h6 ile Beyazın en tehlikeli filini değişmeyi öneriyor (+0.5 / maç hamlesi +1.0).',
      diger: [
        { move: '15...Bxe3+', text: '16.Qxe3 h6 17.Nf3 b6: e3 filinin gitmesiyle Beyazın saldırısı söner (Motor: +0.5).' },
        { move: '15...b6', text: '16.Rae1 Bxe3+ 17.Rxe3 Qc5: gelişim önce, ama e6 baskı altında (Motor: +0.9).' },
      ],
    },
    '16w': {
      text: '16.Rae1 kale e-hattına gelir ve e6 piyonuna baskı yapar.',
      amac: 'Son taşı da saldırıya katmak; e3 filini kale ile korumak ve Bxf5 fedasından sonra e-hattının açılmasına hazırlanmak.',
      neden: 'Motor 16.Bf2’yi açıkça daha iyi buluyor (+0.9): 16...Bxf2+ 17.Rxf2 Qc5 18.Nf3 ile bağ çözülür ve Beyaz rahat bir avantaj korur. Maç hamlesi e3 filini bağlı bırakır, konum dengeye iner (0.00).',
      diger: [
        { move: '16.Bf2', text: '16...Bxf2+ 17.Rxf2 Qc5 18.Nf3: bağ yok, Siyah şahı hâlâ merkezde (Motor: +0.9).' },
        { move: '16.Kh1', text: 'Şah bağdan çıkar; 16...Bxe3 17.Bxf5 ile benzer feda konumları (Motor: 0.0).' },
      ],
    },
    '16b': {
      text: '16...Qb6 vezir b6’ya gelir; fil ve vezir g1–a7 çaprazında e3 filine ve g1 şahına baskı yapar.',
      amac: 'Bağı yoğunlaştırmak; ...Bxe3+ ve ...Qxb2 tehditlerini hazırlamak.',
      neden: 'Motor 16...Bxe3+ 17.Rxe3 Qb6 18.Re1 Qxb2’yi biraz daha iyi buluyor (derin analizde +0.15 / maç hamlesi +0.5). Svidler bağı korumayı tercih etti; bu, Beyazın bir sonraki hamlede yapacağı fedayı da davet etti. 16...Kf8? ise şahı f-hattında bırakır (+1.3).',
      diger: [
        { move: '16...Bxe3+', text: '17.Rxe3 Qb6 18.Re1 Qxb2: Siyah piyonu alır, bağ artık yok ama tehlike de az (Motor: +0.15).' },
        { move: '16...Kf8', text: '17.b4 Bxe3+ 18.Rxe3 Kg7: şah f-hattında ve e6 zayıf (Motor: +1.3).' },
      ],
    },
    '17w': {
      text: '17.Bxf5!? Morozevich fil feda eder.',
      amac: 'gxf5 sonrası Qh5+ ile şahı açmak, Nf7+ ile çatal aramak ve e6’yı düşürmek.',
      neden: 'Motor fedayı doğru buluyor (derin analizde 0.00), ama en iyi hamle 17.Bxc5 Qxc5+ 18.Kh1 Nc6 19.Nf3’tür (+0.5): bağ çözülür ve f5 sonra düşer. 17.Bf2 ya da 17.Rf3 de e3 filinin sorununu çözer (+0.1). Feda, devamında 18.Bf2 bulunursa sağlamdı.',
      diger: [
        { move: '17.Bxc5', text: '17...Qxc5+ 18.Kh1 Nc6 19.Nf3: Beyaz bağdan kurtulur, küçük avantaj (Motor: +0.5).' },
        { move: '17.Rf3', text: '17...Bxe3+ 18.Rfxe3 Qxb2 19.Nf3: b2 gider ama e-hattında baskı (Motor: +0.1).' },
      ],
    },
    '17b': {
      text: '17...gxf5 Siyah fili alır.',
      amac: 'Malzemeyi kabul edip Beyazın saldırısının yeterli olup olmadığını sınamak.',
      neden: 'Motor 17...Bxe3+ 18.Rxe3 gxf5’i aynı değerde görüyor (0.00). 17...Kd8? 18.Nf7+ Kc7 19.Nxh8 ise kaleyi bedavaya verir (+4.2).',
      diger: [
        { move: '17...Bxe3+', text: '18.Rxe3 gxf5 19.Re1 Qxb2: bağdan sonra fili almak; denge (Motor: 0.00).' },
        { move: '17...Kd8', text: '18.Nf7+ Kc7 19.Nxh8: Siyah hem kale hem piyon kaybeder (Motor: +4.2).' },
      ],
    },
    '18w': {
      text: '18.Qh5+? şahı kovalar ve Nf7+ çatalını hazırlar, ama e3 fili bağlı kalır.',
      amac: 'Şahı d8’e zorlayıp 19.Nf7+ ile h8 kalesini kazanmak.',
      neden: 'Doğrusu **18.Bf2!** idi (0.00): fil bağdan çıkar, 18...Bxf2+ 19.Rxf2 Rf8 20.Qxh6 ile Beyaz açık şaha karşı oyunu sürdürür. 18.Rf3 de e3’ü korur (0.00). Maç hamlesi kaleyi kazanır ama Siyahın 20...Bxe3+ ara şahını unutur; Motor: −2.0.',
      diger: [
        { move: '18.Bf2', text: '18...Bxf2+ 19.Rxf2 Rf8 20.Qxh6 Qd4 21.Nh7: Beyaz feda edilen taşın karşılığını alır (Motor: 0.00).' },
        { move: '18.Rf3', text: '18...Bxe3+ 19.Rfxe3 Qxb2 20.Qh5+ Ke7: dengeli bir saldırı konumu (Motor: 0.00).' },
        { move: '18.Kh1', text: '18...Bxe3 19.Rxe3 Ke7: fil kaybolur, saldırı yetersiz (Motor: −1.4).' },
      ],
    },
    '18b': {
      text: '18...Kd8 şah d8’e gider.',
      amac: 'Şahı vezir kanadına, b6 vezirinin yanına götürmek; h8 kalesini gerekirse bırakmak.',
      neden: 'Tek iyi hamle: 18...Ke7? 19.Bxc5+! bağı çözer, 19...Qxc5+ 20.Kh1 Rf8 ile Beyaz öne geçer (+0.7); 18...Kf8?? ise 19.Qf7# mattır.',
      diger: [
        { move: '18...Ke7', text: '19.Bxc5+ Qxc5+ 20.Kh1 Rf8: fil şahla çıktı, Beyaz öne geçti (Motor: +0.7).' },
        { move: '18...Kf8', text: '19.Qf7# mat.' },
      ],
    },
    '19w': {
      text: '19.Nf7+ at çatalı: şah ve h8 kalesi.',
      amac: 'h8 kalesini kazanarak feda edilen fili geri almak.',
      neden: 'Planın devamı ama konum zaten bozuktur. Motor 19.Bf2 (−1.9) ve 19.Bxc5 Qxc5+ 20.Rf2 (−2.0) ile aynı değeri veriyor: e3 bağı yüzünden Beyaz her durumda geride kalıyor.',
      diger: [
        { move: '19.Bf2', text: '19...Kc7 20.b4 Bxf2+ 21.Rxf2: bağ çözülür ama Siyah bir taş önde (Motor: −1.9).' },
        { move: '19.Bxc5', text: '19...Qxc5+ 20.Rf2 Kc7 21.Nf7 Rf8: Siyah kalesini kurtarır (Motor: −2.0).' },
      ],
    },
    '19b': {
      text: '19...Kc7 şah c7’ye kaçar ve h8 kalesini bırakır.',
      amac: 'Şahı güvene almak; h8’deki atın kapana gireceğini ve sonra alınacağını hesaplamak.',
      neden: 'Tek doğru hamle: 19...Ke7? 20.Nxh8 Bxe3+ 21.Kh1 Kd8 sonrası şah açıkta kalır ve Beyaz öne geçer (+1.7); 19...Ke8? 20.Nxh8+ ise daha da kötüdür (+4.6). c7’de şah b6 veziri ve d7 piyonuyla korunur.',
      diger: [
        { move: '19...Ke7', text: '20.Nxh8 Bxe3+ 21.Kh1 Kd8: şah hâlâ Beyaz vezirinin menzilinde (Motor: +1.7).' },
        { move: '19...Ke8', text: '20.Nxh8+ Kd8 21.Nf7+ Kc7: tempo kaybı, Beyaz çok önde (Motor: +4.6).' },
      ],
    },
    '20w': {
      text: '20.Nxh8 at h8 kalesini alır; ama h8’den çıkış yolu yoktur.',
      amac: 'Fedayı malzeme olarak geri almak.',
      neden: 'Motor 20.Bf2’yi biraz daha iyi buluyor (−2.0: 20...Rg8 21.b4 Bxf2+ 22.Rxf2): Beyaz kaleyi almaz ama bağı çözer. Maç hamlesi −2.8; at h8’de esir kalacak ve Siyah onu istediği zaman alacak.',
      diger: [
        { move: '20.Bf2', text: '20...Rg8 21.b4 Bxf2+ 22.Rxf2: Siyah kalesini kurtarır, bir taş önde (Motor: −2.0).' },
        { move: '20.Bxc5', text: '20...Qxc5+ 21.Rf2 Rg8 22.b4: benzer (Motor: −2.5).' },
      ],
    },
    '20b': {
      text: '20...Bxe3+! ara şah: fil e3’ü şahla alır.',
      amac: 'Önce tempo kazanmak: e3 filini al, Beyazı şah hamlesine zorla, sonra b2’yi ve h8’deki atı topla.',
      neden: 'Bu oyunun kilit hamlesi. 21.Rxe3? Qxe3+ bir kale kaybettirir, bu yüzden 21.Kh1 zorunlu. Atı hemen almak mümkün değildi (vezir h8’e uzaktı); onu “kurtaracak” bir hamle kaybetmek ise felakettir: 20...Bd4? 21.Qf3 (+3.2), 20...a5? 21.Bxc5 (+3.4). Motor: 20...Bxe3+ −2.7.',
      diger: [
        { move: '20...Bd4', text: '21.Qf3 Qxb2 22.Nf7: at h8’den kurtulur, Beyaz önde (Motor: +3.2).' },
        { move: '20...a5', text: '21.Bxc5 Qxc5+ 22.Rf2: bağ çözülür, Beyaz kale önde (Motor: +3.4).' },
      ],
    },
    '21w': {
      text: '21.Kh1 şah köşeye kaçar.',
      amac: 'Kale kaybetmeden şahtan kurtulmak.',
      neden: 'Zorunlu: 21.Rxe3? Qxe3+ 22.Kh1 ile bir kale gider (−4.2), 21.Rf2? Bxf2+ ise daha da kötüdür (−9.3).',
    },
    '21b': {
      text: '21...Qxb2 vezir b2 piyonunu alır; e3 fili hâlâ yerinde ve saldırı altında.',
      amac: 'Bir piyon daha toplamak, a3 ve birinci yatay üzerinde baskı kurmak; e3 filini geri alınmaya bırakıp h8 atını sonra toplamak.',
      neden: 'Motor 21...Bd4’ü biraz daha iyi buluyor (−2.3: 22.Qe8 a5 23.Rd1 Nc6), çünkü fil merkezde kalır ve h8 atı yine kaçamaz. 21...a5 (−1.9) ve maç hamlesi (−2.0) birbirine yakın. Svidler sade yolu seçti: fil gider ama Siyah b2’yi ve atı alır.',
      diger: [
        { move: '21...Bd4', text: '22.Qe8 a5 23.Rd1 Nc6: fil merkezde güçlü, at yine kapanda (Motor: −2.3).' },
        { move: '21...a5', text: '22.Qxh6 Bc5 23.Qg7 Bd4: kale a6’dan oyuna girer (Motor: −1.9).' },
      ],
    },
    '22w': {
      text: '22.Rxe3 kale fili alır.',
      amac: 'Malzemeyi geri almak; kaleyi e-hattında aktif tutmak.',
      neden: 'En iyi hamle (−1.9). 22.Nf7 Bc5 ya da 22.Qxh6 Bd4 fili korumak yerine başka şey aramak Siyaha hem fili hem fazladan tempo bırakır (−3.1 / −3.2).',
      diger: [
        { move: '22.Nf7', text: '22...Bc5 23.Qxh6 Nc6: Siyah filini kurtarır (Motor: −3.1).' },
        { move: '22.Qxh6', text: '22...Bd4 23.Nf7 Qxa3: Siyah hem fili hem piyonları tutar (Motor: −3.2).' },
      ],
    },
    '22b': {
      text: '22...Qxh8 vezir h8’deki atı alır.',
      amac: 'Malzemeyi netleştirmek: Siyah artık bir kaleye karşı fil ve ata sahip.',
      neden: 'Şimdi zamanıdır: 22...Qd4? 23.Re5 Nc6 24.Rd1 atın kaçmasına izin verir ve konum dengeye döner (+0.1); 22...b5? 23.Nf7 ise Beyazı öne geçirir (+1.4). Motor: 22...Qxh8 −1.9.',
      diger: [
        { move: '22...Qd4', text: '23.Re5 Nc6 24.Rd1 Qc3: at h8’den çıkar, denge (Motor: +0.1).' },
        { move: '22...b5', text: '23.Nf7 bxc4 24.Ne5: at kurtulur (Motor: +1.4).' },
      ],
    },
    '23w': {
      text: '23.Qf7 vezir f7’ye girer; e6 ve d7 piyonlarına baskı yapar.',
      amac: 'Siyahın gelişmemiş vezir kanadını (b8 atı, c8 fili, a8 kalesi) bağlı tutmak ve e6’yı almak.',
      neden: 'Beyaz malzeme eksiği karşılığında aktiflik arar. Motor 23.Rd1 (−1.6) ve 23.c5 (−1.7) hamlelerini biraz daha iyi buluyor; maç hamlesi −1.8. Qf7, Siyahın 23...Qd4 ile c4 ve f4 piyonlarına çatal atmasına izin verir.',
      diger: [
        { move: '23.Rd1', text: '23...Nc6 24.Qf7 Kb8 25.h3: d-hattında baskı, piyonlar korunur (Motor: −1.6).' },
        { move: '23.c5', text: '23...Nc6 24.Rd1 Qf8: c-piyonu güvene alınır, Siyahın b6 karesi zayıflar (Motor: −1.7).' },
      ],
    },
    '23b': {
      text: '23...Qd4 vezir merkeze gelir; c4 ve f4 piyonlarına saldırır.',
      amac: 'Beyazın zayıf piyonlarını toplamak; vezirle merkezden hem saldırı hem savunma yapmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−2.1). e6’yı vermek pahasına iki piyonu birden hedef alır. 23...b6 e6’yı korumaz ve 24.Rxe6 Qc3 25.Rxh6 ile Beyaz piyonları kazanır (−1.3).',
      diger: [
        { move: '23...b6', text: '24.Rxe6 Qc3 25.Rxh6 Qd3: Beyaz kaleleri aktif (Motor: −1.3).' },
        { move: '23...Kb6', text: '24.Rg3 Qd4 25.c5+: şah daha uzak ama tempo kaybı (Motor: −1.8).' },
      ],
    },
    '24w': {
      text: '24.Rxe6 kale e6 piyonunu alır.',
      amac: 'Malzeme farkını azaltmak, kaleyi altıncı yataya yerleştirmek.',
      neden: 'En iyi hamle (−2.4). 24.Rfe1 Nc6 25.c5 piyonu korur ama Siyah rahat gelişir (−2.6). Beyaz c4’ü kaybedecek, karşılığında e6’yı alır.',
      diger: [
        { move: '24.Rfe1', text: '24...Nc6 25.c5 Kb8: piyon korunur, Siyah gelişir (Motor: −2.6).' },
        { move: '24.Ree1', text: '24...Nc6 25.Rd1 Qc5: pasif (Motor: −3.0).' },
      ],
    },
    '24b': {
      text: '24...Qxc4 vezir c4 piyonunu alır.',
      amac: 'Piyon toplamak ve vezirle birinci yatayı (f1) hedef almak.',
      neden: 'Motor açıkça en iyi buluyor (−2.4). 24...Nc6? 25.Rxh6 (−0.7) ya da 24...b6? 25.Rxh6 (−1.1) Beyazın kalesini h-piyonuna ve şah kanadına bırakır.',
      diger: [
        { move: '24...Nc6', text: '25.Rxh6 Qd3 26.Rg1 b5: Beyaz piyonları geri kazanır (Motor: −0.7).' },
        { move: '24...b6', text: '25.Rxh6 Qd3 26.Rg1 Bb7 (Motor: −1.1).' },
      ],
    },
    '25w': {
      text: '25.Rfe1 kaleler e-hattında ikilenir.',
      amac: 'f1 kalesini c4 vezirinin saldırısından kurtarmak ve birinci yatayı korumak.',
      neden: 'Tek iyi hamle (−2.0): 25.Rc6+? Qxc6 bir kale kaybettirir (−6.3), 25.Ra1? Qxe6 de öyle (−6.7). f1 kalesi vezire açıktı, e1’de ise e6 kalesini destekler.',
      diger: [
        { move: '25.Rc6+', text: '25...Qxc6: kale gitti, karşılık yok (Motor: −6.3).' },
      ],
    },
    '25b': {
      text: '25...Qxf4 vezir f4 piyonunu da alır.',
      amac: 'Piyon farkını artırmak; f4’ten e5, h2 ve c1 karelerine bakmak.',
      neden: 'Motor 25...Nc6, 25...b5 ve maç hamlesini eşit görüyor (yaklaşık −1.9). Svidler malzemeyi topladı; Beyaz bir piyon daha kaybetti ama Siyah vezir kanadı hâlâ gelişmedi.',
      diger: [
        { move: '25...Nc6', text: '26.Qg7 Qxf4 27.Rd1 Qa4: önce gelişim, sonra piyon (Motor: −2.0).' },
        { move: '25...b5', text: '26.Qg7 Nc6 27.Rxh6 a5: fil b7’ye hazırlanır (Motor: −1.9).' },
      ],
    },
    '26w': {
      text: '26.R6e5 kale f5 piyonuna saldırır.',
      amac: 'Piyonları geri kazanmak ve kaleleri merkezde aktif tutmak.',
      neden: 'Motor 26.Qh7 ya da 26.Qg7 ile h6’yı hedef almayı (−1.8) biraz daha iyi buluyor; maç hamlesi yüzeysel analizde en iyi görünüyor, derinde −2.3. Fark küçüktür; Beyazın asıl sorunu malzeme.',
      diger: [
        { move: '26.Qh7', text: '26...b5 27.Qxh6 Qxh6 28.Rxh6: vezirler değişir, Beyaz piyon kazanır (Motor: −1.8).' },
        { move: '26.Rd1', text: '26...Nc6 27.Rf6 Qa4 28.Qd5: d-hattında baskı (Motor: −1.8).' },
      ],
    },
    '26b': {
      text: '26...Nc6 at sonunda gelişir.',
      amac: 'e5 kalesini kovalamak, vezir kanadındaki taşları oyuna sokmak.',
      neden: 'Motor 26...b6’yı (−2.1) ve 26...b5’i (−2.0) biraz daha iyi buluyor: c8 filine yol açarlar ve Rc5+ şahını önlerler. Maç hamlesiyle −1.8; fark küçük.',
      diger: [
        { move: '26...b6', text: '27.Rxf5 Qd2 28.Rff1 Bb7: fil uzun çapraza (Motor: −2.1).' },
        { move: '26...b5', text: '27.Rc5+ Nc6 28.Rxf5 Qd2 (Motor: −2.0).' },
      ],
    },
    '27w': {
      text: '27.Rxf5 kale f5 piyonunu alır.',
      amac: 'Piyonlardan birini geri almak ve f-hattını kontrol etmek.',
      neden: 'En iyi hamle (−1.7). 27.Rd5 ya da 27.Rc5 piyonu bırakır ve Siyaha b5 ile tempo verir (−2.4 / −2.5).',
      diger: [
        { move: '27.Rd5', text: '27...b5 28.Rxf5 Qd2: Beyaz tempo kaybeder (Motor: −2.4).' },
      ],
    },
    '27b': {
      text: '27...Qd2 vezir d2’den e1 kalesine ve birinci yataya bakar.',
      amac: 'Beyazın birinci yatayını hedef almak, Beyaz kalelerini savunmaya bağlamak.',
      neden: 'Motor en iyi hamle olarak görüyor (−1.7). 27...Qh4 (−1.5) ya da 27...Qd4 (−1.2) daha az baskı yapar. Vezir e1 kalesine saldırdığı için Beyaz bir hamle savunmaya harcamak zorunda.',
      diger: [
        { move: '27...Qh4', text: '28.Rc1 Qe4 29.Qf8: vezir merkezde ama tempo kaybı (Motor: −1.5).' },
        { move: '27...Qd4', text: '28.Rd5 Qh4 29.Re3: Beyaz kaleleri aktifleşir (Motor: −1.2).' },
      ],
    },
    '28w': {
      text: '28.Rff1 kale f1’e döner ve birinci yatayı korur.',
      amac: 'e1 kalesini korumak ve şahın arkasını sağlamlaştırmak.',
      neden: 'Motor 28.Ref1 ile eşit görüyor (−1.8). Beyaz bir hamle geri çekilerek Siyahın gelişimine zaman verir ama başka bir yol yoktur.',
      diger: [
        { move: '28.Ref1', text: '28...Rb8 29.Rd5 Qe3: f-hattında ikili kaleler (Motor: −1.8).' },
        { move: '28.Rg1', text: '28...Rb8 29.Rd5 Qe3: pasif (Motor: −2.0).' },
      ],
    },
    '28b': {
      text: '28...b5 vezir kanadında piyon ilerler; c8 fili b7’ye çıkacak.',
      amac: 'Fili uzun çapraza getirip g2’ye bakmak; ileride b-piyonunu geçer piyon yapmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−1.8). b7–g2 çaprazı Beyaz şahına karşı Siyahın en önemli saldırı hattı olacak.',
      diger: [
        { move: '28...Qg5', text: '29.Re8 b5 30.Rd1: Beyaz kalesi sekizinci yataya girer (Motor: −1.75).' },
        { move: '28...Qd6', text: '29.a4 b5 30.Rc1 Bb7: benzer (Motor: −1.6).' },
      ],
    },
    '29w': {
      text: '29.Rd1 kale d-hattına gelir ve d7 piyonuna bakar.',
      amac: 'Veziri kovalamak ve d7 piyonunu baskı altına almak; Siyah şahının önündeki d-hattını açmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−1.8). 29.h3 (−2.0) şaha hava açar ama tempo kaybıdır.',
      diger: [
        { move: '29.h3', text: '29...Qd6 30.Rd1 Qxa3: Siyah piyon toplar (Motor: −2.0).' },
      ],
    },
    '29b': {
      text: '29...Qe3 vezir e3’e gelir.',
      amac: 'Birinci yatay ile merkez arasında esnek kalmak; h6’yı korumaya ve g1’e bakmaya devam etmek.',
      neden: 'Motor 29...Qg5’i (−1.8) eşit görüyor. 29...Qe2? 30.Qf4+ Qe5 31.Qxh6 ise h-piyonunu kaybettirir (−1.2).',
      diger: [
        { move: '29...Qg5', text: '30.Rf6 Rb8 31.Qf8 Bb7: h6 korunur (Motor: −1.8).' },
        { move: '29...Qe2', text: '30.Qf4+ Qe5 31.Qxh6: piyon gider (Motor: −1.2).' },
      ],
    },
    '30w': {
      text: '30.Rf3 kale veziri kovalar.',
      amac: 'Tempo kazanmak ve kaleyi üçüncü yatayda savunma ile saldırı arasında esnek kullanmak.',
      neden: 'En iyi hamle (−1.8). 30.h4 (−1.9) ya da 30.Rf6 (−1.9) da benzer değerdedir.',
      diger: [
        { move: '30.Rf6', text: '30...Rb8 31.Qf8 Kb7 32.Rxh6: Beyaz piyon alır ama Siyah gelişir (Motor: −1.9).' },
      ],
    },
    '30b': {
      text: '30...Qe4 vezir e4’te merkezde kalır.',
      amac: 'Merkezden b1, g2 ve d4 karelerine bakmak; Beyaz kalelerini bağlamak.',
      neden: 'Küçük bir yanlışlık: motor 30...Qe7’yi (−1.7) ya da 30...Qe6’yı (−1.6) tercih ediyor, çünkü vezir hem h-piyonunu hem f7 karesini korur. Maç hamlesi −1.4.',
      diger: [
        { move: '30...Qe7', text: '31.Qf4+ Qe5 32.Qd2 Rb8: vezir değişimine davet, Siyah sağlam (Motor: −1.7).' },
        { move: '30...Qe6', text: '31.Qf4+ Qe5 32.Qd2: benzer (Motor: −1.6).' },
      ],
    },
    '31w': {
      text: '31.h3 Beyaz şahına hava kaçışı açar.',
      amac: 'Birinci yatayda mat tehlikelerini kaldırmak; kalelerin serbestçe oynamasını sağlamak.',
      neden: 'Motor 31.Rf6 ile eşit görüyor (−1.6 / −1.7). Beyaz, Siyahın vezir ve kale ile birinci yataya girmesine karşı önlem alıyor.',
      diger: [
        { move: '31.Rf6', text: '31...h5 32.Qxh5 Bb7 33.Qc5: piyon kazanılır (Motor: −1.6).' },
        { move: '31.Rh3', text: '31...Qg4 32.Rhd3 Ne5: kale h6’ya bakar (Motor: −1.8).' },
      ],
    },
    '31b': {
      text: '31...h5 Siyah h-piyonunu verir.',
      amac: 'Beyaz vezirini h5’e çekip tempo kazanmak ve c8 filini b7’ye geliştirmek.',
      neden: 'Motor 31...Rb8’i (−1.7) ve 31...a5’i (−1.7) biraz daha iyi buluyor; maç hamlesi −1.4. Svidler piyonu vererek gelişimi hızlandırdı; Beyaz vezirini merkezden uzaklaştırması da bir kazanç.',
      diger: [
        { move: '31...Rb8', text: '32.Rf6 h5 33.Qxh5 Bb7: aynı fikir, önce kale (Motor: −1.7).' },
        { move: '31...a5', text: '32.Qg7 Ra6 33.Rf8 Qe6: kale a6’dan oyuna (Motor: −1.7).' },
      ],
    },
    '32w': {
      text: '32.Qxh5 vezir h5 piyonunu alır.',
      amac: 'Malzeme farkını azaltmak ve Beyazın h-piyonunu geçer piyon yapma şansını korumak.',
      neden: 'Motor 32.Rfd3’ü (−1.7) eşit görüyor. Piyonu almak doğaldır; Beyazın tek uzun vadeli şansı şah kanadındaki g ve h piyonlarıdır.',
      diger: [
        { move: '32.Rfd3', text: '32...h4 33.Qf2 Rb8: d7 baskı altında (Motor: −1.7).' },
      ],
    },
    '32b': {
      text: '32...Bb7 fil b7’ye gelişir ve uzun çaprazdan g2’ye bakar.',
      amac: 'Vezir ile birlikte g2 karesine baskı kurmak; Beyaz şahını kalıcı tehlike altında tutmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−1.8). 32...Ne5? 33.Rc1+ Nc4 34.a4 (−1.0) şah serisine yol açar.',
      diger: [
        { move: '32...Ne5', text: '33.Rc1+ Nc4 34.a4: c-hattı açılır (Motor: −1.0).' },
        { move: '32...Qe7', text: '33.Qg6 Rb8 34.Qg3+: Beyaz vezir aktif (Motor: −0.8).' },
      ],
    },
    '33w': {
      text: '33.Qg5 vezir g5’e döner.',
      amac: 'Veziri merkeze yakın tutmak; g7 ve d8 karelerine bakmak.',
      neden: 'Motor 33.Qh6’yı (−1.8) ve 33.Qc5’i (−1.8) biraz daha iyi buluyor; maç hamlesi −1.9. Fark küçük.',
      diger: [
        { move: '33.Qh6', text: '33...Qe7 34.Qd2 Ne5 35.Qa5+: c7 şahına baskı (Motor: −1.8).' },
        { move: '33.Qc5', text: '33...Qe7 34.Qc1 Rg8: vezirler değişime yakın (Motor: −1.8).' },
      ],
    },
    '33b': {
      text: '33...Re8 kale e-hattına gelir.',
      amac: 'Son taşı da oyuna sokmak, e-hattında Beyaz kalelerine karşı durmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−2.0). Kale e8’den e4 vezirini destekler ve ileride değişim fırsatı arar.',
      diger: [
        { move: '33...Qe7', text: '34.Qc1 Re8 35.Rfd3: benzer (Motor: −1.8).' },
        { move: '33...Rd8', text: '34.Rc3 d6 35.Kh2 Rd7: d-piyonu desteklenir (Motor: −1.7).' },
      ],
    },
    '34w': {
      text: '34.Rfd3 kale d3’e gelir; d7 piyonuna ikinci kez baskı yapar.',
      amac: 'd7’yi almak ve d-hattında Siyah şahına yaklaşmak.',
      neden: 'Bir hata: kale d3’te Ne5 ile tempo kaybetmeye açıktır. Motor 34.Rc1’i öneriyor (−1.9: 34...Qd4 35.Qg3+ Kb6 36.Rd3): c-hattından şah serisi tehdidi. Maç hamlesinden sonra −2.6.',
      diger: [
        { move: '34.Rc1', text: '34...Qd4 35.Qg3+ Kb6 36.Rd3: Siyah şahı rahatsız edilir (Motor: −1.9).' },
        { move: '34.Qc1', text: '34...Qg6 35.Rfd3 Re2: vezir c-hattında (Motor: −1.9).' },
      ],
    },
    '34b': {
      text: '34...Ne5 at e5’e gelir ve d3 kalesine saldırır.',
      amac: 'Tempo kazanmak, atı merkeze yerleştirmek ve d7’yi dolaylı korumak.',
      neden: 'Motor en iyi hamle olarak görüyor (−2.5). At e5’te f3, g4, d3 ve c4 karelerine hükmeder. 34...Nb8 ya da 34...Re7 daha pasiftir (−1.9 / −1.7).',
      diger: [
        { move: '34...Nb8', text: '35.Qg3+ Kc8 36.Rd4: pasif savunma (Motor: −1.9).' },
        { move: '34...Re7', text: '35.Qd2 Qe6 36.Rd6: Beyaz kaleleri aktif (Motor: −1.7).' },
      ],
    },
    '35w': {
      text: '35.Re3 kale e3’ten veziri kovalar; vezirin arkasında e5 atı vardır.',
      amac: 'Vezir çekilince e5 atını almak ya da Siyahı pasif bir savunmaya zorlamak.',
      neden: 'Motor en iyi hamle olarak görüyor (−2.6). 35.Rg3 (−2.8) ve 35.Qg3 (−2.9) daha az tehdit içerir.',
      diger: [
        { move: '35.Rg3', text: '35...Qe2 36.Qc1+ Nc4: Siyah rahat (Motor: −2.8).' },
        { move: '35.Qg3', text: '35...Bc6 36.Re3 Qf5: Siyah toparlanır (Motor: −2.9).' },
      ],
    },
    '35b': {
      text: '35...Qc2! vezir c2’ye çekilir ve d1 kalesine saldırır.',
      amac: 'Tempo kazanarak e5 atını korumak için zaman yaratmak; e-hattındaki baskıyı kırmak.',
      neden: 'Tek iyi hamle: 35...Qc6? 36.Rxe5 Qxg2+ 37.Qxg2 Bxg2+ 38.Kxg2 değişimleri Siyahın avantajını neredeyse tamamen eritir (−0.6); 35...Qh7? 36.Rxe5 ise daha da kötüdür (−0.1). Motor: 35...Qc2 −2.6.',
      diger: [
        { move: '35...Qc6', text: '36.Rxe5 Qxg2+ 37.Qxg2 Bxg2+ 38.Kxg2: at gider, avantaj azalır (Motor: −0.6).' },
        { move: '35...Qh7', text: '36.Rxe5 Bxg2+ 37.Kg1 Rg8: Siyah taş kaybeder (Motor: −0.1).' },
      ],
    },
    '36w': {
      text: '36.Ree1 kaleler birinci yatayda ikilenir.',
      amac: 'd1 kalesini korumak ve e5 atına e-hattından baskıyı sürdürmek.',
      neden: 'Motor 36.Rf1 ya da 36.Rde1’i (−2.6) biraz daha iyi buluyor; maç hamlesi −3.0. Beyaz kalesini e3’ten geri çekerek aktifliğin bir kısmını kaybetti.',
      diger: [
        { move: '36.Rf1', text: '36...d6 37.Rg3 Bc6 38.Kh2: kale f-hattında aktif (Motor: −2.6).' },
        { move: '36.Rde1', text: '36...d6 37.h4 Bc6 38.h5: h-piyonu koşar (Motor: −2.6).' },
      ],
    },
    '36b': {
      text: '36...Bc6 fil c6’ya gelir; e5 atı artık fil tarafından da korunur ve taşlar birbirine bağlanır.',
      amac: 'Taşları birbirine bağlamak: fil e4/d5/f3 karelerine bakar, e8 kalesi ve fil birlikte e-hattını ve uzun çaprazı tutar.',
      neden: 'Motor 36...Qb3’ü (−3.0) biraz daha iyi buluyor; maç hamlesi −2.8. 36...Kb8 (−2.2) şahı uzaklaştırır ama taşların uyumu zayıflar.',
      diger: [
        { move: '36...Qb3', text: '37.h4 Bc6 38.Rc1 Qh3+: g2 baskı altında (Motor: −3.0).' },
        { move: '36...Kb8', text: '37.Rd4 Qc7 38.h4: Beyaz kaleleri aktifleşir (Motor: −2.2).' },
      ],
    },
    '37w': {
      text: '37.Rd2 kale veziri kovalar.',
      amac: 'Veziri e-hattından uzaklaştırmak ve kaleyi ikinci yataya yerleştirip g2’yi korumak.',
      neden: 'Motor 37.Rc1’i (−2.7) biraz daha iyi buluyor: 37...Qb2 38.Qg3 Kb7 39.Rc5. Maç hamlesi −3.0.',
      diger: [
        { move: '37.Rc1', text: '37...Qb2 38.Qg3 Kb7 39.Rc5: c-hattında aktif kale (Motor: −2.7).' },
        { move: '37.Qg3', text: '37...Kb7 38.Rd6 Qc5: Beyaz vezir g3’te ama d-hattı yetersiz (Motor: −3.2).' },
      ],
    },
    '37b': {
      text: '37...Qc3 vezir c3’e gelir; a3 piyonuna ve e1 kalesine bakar.',
      amac: 'a3’ü hedef almak ve e1 kalesini e8 kalesiyle birlikte baskı altında tutmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−3.1). 37...Nf3? 38.Qg3+ Kb7 39.gxf3 Rxe1+ ise avantajı neredeyse sıfırlar (−0.3).',
      diger: [
        { move: '37...Qc5', text: '38.a4 Qa3 39.Rde2 d6: a-piyonuna yönelir (Motor: −2.8).' },
        { move: '37...Nf3', text: '38.Qg3+ Kb7 39.gxf3 Rxe1+: aceleci, at gider (Motor: −0.3).' },
      ],
    },
    '38w': {
      text: '38.Rde2 kale e2’ye gelir; e5 atına ikinci kez baskı yapar.',
      amac: 'e5 atını e-hattında almak; e-hattındaki ikili kalelerle Siyahı geri itmek.',
      neden: 'Motor 38.Qe3’ü (−3.2) biraz daha iyi buluyor: vezir değişimi Beyazın şahını güvene alır. 38.h4? ise 38...Qh3+ 39.Kg1 Nf3+ ile felakete yol açar (−5.0).',
      diger: [
        { move: '38.Qe3', text: '38...Qxe3 39.Rxe3 d5: vezirsiz oyun, Siyah yine önde (Motor: −3.2).' },
        { move: '38.h4', text: '38...Qh3+ 39.Kg1 Nf3+: şaha saldırı (Motor: −5.0).' },
      ],
    },
    '38b': {
      text: '38...d6! piyon e5 atını korur.',
      amac: 'Atı sağlam bir piyonla desteklemek; e-hattındaki baskıyı kalıcı olarak etkisiz kılmak.',
      neden: 'Tek iyi hamle: 38...Kb7? 39.Rxe5 Rxe5 40.Rxe5 Qxh3+ ya da 38...Qxh3+ 39.Kg1 Qxa3 40.Rxe5 avantajı yarıya indirir (−1.8 / −1.75). d6 ile Ne5 – Bc6 – d6 zinciri tamamlanır.',
      diger: [
        { move: '38...Qxh3+', text: '39.Kg1 Qxa3 40.Rxe5 Rxe5 41.Rxe5: piyon alınır ama at gider (Motor: −1.75).' },
        { move: '38...Kb7', text: '39.Rxe5 Rxe5 40.Rxe5 Qxh3+: değişimler avantajı azaltır (Motor: −1.8).' },
      ],
    },
    '39w': {
      text: '39.Re3 kale e3’ten veziri kovalar.',
      amac: 'Tempo kazanıp kaleyi g3’e götürmek; g7 karesine yönelmek.',
      neden: 'Motor en iyi hamle olarak görüyor (−3.4). 39.Qg7+ (−3.6) ya da 39.Qh5 (−3.8) daha az etkili.',
      diger: [
        { move: '39.Qg7+', text: '39...Kb6 40.Re3 Qd2: şah b6’ya gider (Motor: −3.6).' },
      ],
    },
    '39b': {
      text: '39...Qc4 vezir c4’e çekilir.',
      amac: 'a3 ve f1 karelerine bakmak, merkezde kalmak.',
      neden: 'Motor 39...Qd2’yi (−3.3) ve 39...Qd4’ü (−3.1) biraz daha iyi buluyor; maç hamlesi −2.9. Fark küçük.',
      diger: [
        { move: '39...Qd2', text: '40.Qg3 Rf8 41.R1e2 Qd5: Siyah f-hattını alır (Motor: −3.3).' },
        { move: '39...Qd4', text: '40.Qf6 a5 41.Rg3 Qd2 (Motor: −3.1).' },
      ],
    },
    '40w': {
      text: '40.Rg3 kale g3’e gelir; g7 karesine bakar.',
      amac: 'Kaleyi vezirle birleştirip g7 ve Siyahın yedinci yatayına girmek.',
      neden: 'Motor en iyi hamle olarak görüyor (−2.8). 40.Qg7+ (−3.5) ve 40.R3e2 (−3.5) daha zayıf.',
      diger: [
        { move: '40.Qg7+', text: '40...Kb6 41.Qf6 Qc5 42.Rg3: aynı yapı, tempo kaybı (Motor: −3.5).' },
      ],
    },
    '40b': {
      text: '40...Kb6 şah b6’ya gider.',
      amac: 'Şahı yedinci yataydan ve olası Qg7+ şahlarından uzaklaştırmak.',
      neden: 'Motor 40...Qd4’ü (−2.9) ve 40...Qc5’i (−2.9) eşit görüyor; maç hamlesi −2.8. Profilaktik bir hamle: Siyah önce şahını güvene alır, sonra ilerler.',
      diger: [
        { move: '40...Qd4', text: '41.Qg7+ Kb6 42.Rf1 Qh4: vezir şah kanadına (Motor: −2.9).' },
        { move: '40...Qc5', text: '41.a4 b4 42.Rc1 Qf2: piyon ilerler (Motor: −2.9).' },
      ],
    },
    '41w': {
      text: '41.Qd2 vezir d2’ye döner.',
      amac: 'd6 piyonuna ve vezir kanadına bakmak, birinci yatayı korumak.',
      neden: 'Motor 41.Rc1’i (−2.8) ya da 41.Rd1’i (−2.9) biraz daha iyi buluyor; maç hamlesi −3.1.',
      diger: [
        { move: '41.Rc1', text: '41...Qd4 42.Qf6 Qd2 43.Qf1: c-hattı aktif (Motor: −2.8).' },
        { move: '41.Rd1', text: '41...Qc5 42.Qf6 Nd7 43.Qg5: d6’ya baskı (Motor: −2.9).' },
      ],
    },
    '41b': {
      text: '41...Qc5 vezir c5’e gelir; g1–a7 çaprazına bakar.',
      amac: 'Beyaz şahına karşı çaprazdan baskı kurmak ve a3’ü hedef almak.',
      neden: 'Motor en iyi hamle olarak görüyor (−2.9). Vezir c5’te f2 ve g1 karelerini kontrol eder.',
      diger: [
        { move: '41...Qd5', text: '42.Qf2+ Qc5 43.Qf1 Bd5: benzer (Motor: −2.7).' },
        { move: '41...Rg8', text: '42.Qf2+ Kb7 43.Rxg8 Qxg8: kaleleri değişir (Motor: −2.5).' },
      ],
    },
    '42w': {
      text: '42.Kh2 şah h2’ye kaçar.',
      amac: 'Şahı g1–a7 çaprazından çıkarmak.',
      neden: 'Bir yanlışlık: motor 42.Rc1’i (−2.9: 42...Nc4 43.Qf4 Re7) ya da 42.a4’ü (−3.0) öneriyor. Maç hamlesi −3.6; şah h2’de ileride e5–h2 çaprazında bağlanacak (50...Qe5).',
      diger: [
        { move: '42.Rc1', text: '42...Nc4 43.Qf4 Re7 44.Qf6: kale c-hattında aktif (Motor: −2.9).' },
        { move: '42.a4', text: '42...Nc4 43.a5+ Nxa5 44.Rxe8: kaleler değişir (Motor: −3.0).' },
      ],
    },
    '42b': {
      text: '42...Nc4 at c4’e gelir ve d2 vezirine ve a3 piyonuna saldırır.',
      amac: 'Tempo kazanmak ve a3’ü almak; vezir kanadında geçer piyon yaratmak.',
      neden: 'Motor 42...a5’i (−3.5) ve 42...d5’i (−3.4) biraz daha iyi buluyor; maç hamlesi −3.2. Fark küçük; at hamlesi en direkt planı izler.',
      diger: [
        { move: '42...a5', text: '43.Rd1 Nc4 44.Qf4 Re4: önce piyon ilerler (Motor: −3.5).' },
        { move: '42...d5', text: '43.Rd1 Nc4 44.Qf4 Nxa3: merkez piyonu ilerler (Motor: −3.4).' },
      ],
    },
    '43w': {
      text: '43.Qc3 vezir c3’e gelir ve kalelerin değişimine izin verir.',
      amac: 'c-hattında vezirleri karşılaştırmak; Siyah vezirini c5’ten uzaklaştırmak.',
      neden: 'Motor 43.Qd1’i (−3.2) eşit görüyor. Kaleler değişince Beyazın aktif taşı azalır, ama başka iyi seçenek yoktur.',
      diger: [
        { move: '43.Qd1', text: '43...Ne5 44.Qa1 a5 45.Rc1: vezir uzun çaprazda (Motor: −3.2).' },
        { move: '43.Qc1', text: '43...Rxe1 44.Qxe1 Nxa3: oyundaki gibi (Motor: −3.3).' },
      ],
    },
    '43b': {
      text: '43...Rxe1 Siyah kaleleri değişir.',
      amac: 'Beyazın tek aktif kalesini ortadan kaldırmak ve atı a3’ü almaya serbest bırakmak.',
      neden: 'Motor 43...Rf8 (−3.2) ile eşit görüyor. Kaleler değişince Siyahın şahı güvene kavuşur ve hafif taşlar daha da güçlenir. 43...Ne5? 44.Qxc5+ Kxc5 45.Rc3+ vezir değişimi Siyahın avantajını azaltır (−2.9).',
      diger: [
        { move: '43...Rf8', text: '44.Qa1 a5 45.Qg7 Qf2: f-hattında baskı (Motor: −3.2).' },
        { move: '43...Ne5', text: '44.Qxc5+ Kxc5 45.Rc3+: vezirler değişir (Motor: −2.9).' },
      ],
    },
    '44w': {
      text: '44.Qxe1 vezir alır.',
      amac: 'Malzemeyi eşitlemek; birinci yatayı korumak.',
      neden: 'Zorunlu: 44.Rg4? Qg1+ 45.Kg3 Qxg2+ (−7.9) ya da 44.Rf3? Qg1+ (−8.8) şahı mat ağına sokar.',
      diger: [
        { move: '44.Rg4', text: '44...Qg1+ 45.Kg3 Qxg2+ 46.Kh4: Beyaz şahı tehlikede (Motor: −7.9).' },
      ],
    },
    '44b': {
      text: '44...Nxa3 at a3 piyonunu alır.',
      amac: 'Vezir kanadında geçer piyon yaratmak: b-piyonu artık önünde engel olmadan ilerleyebilir.',
      neden: 'Motor en iyi hamle olarak görüyor (−3.1). 44...a5 (−2.8) ya da 44...d5 (−2.5) daha yavaştır.',
      diger: [
        { move: '44...a5', text: '45.h4 Nxa3 46.Qe7 Ka6: aynı fikir, gecikmeli (Motor: −2.8).' },
        { move: '44...d5', text: '45.h4 d4 46.Qf2: merkez piyonu ilerler (Motor: −2.5).' },
      ],
    },
    '45w': {
      text: '45.h4 Beyaz h-piyonunu ilerletir.',
      amac: 'Kendi geçer piyonunu yaratmak ve Siyahı savunmaya zorlamak.',
      neden: 'Motor 45.Qe7’yi (−3.4) eşit görüyor. Beyazın tek karşı şansı h-piyonu ve şah kanadındaki vezir-kale oyunudur.',
      diger: [
        { move: '45.Qe7', text: '45...b4 46.h4 Nc4 47.Qf7: önce vezir aktif (Motor: −3.4).' },
        { move: '45.Qe2', text: '45...Nc4 46.h4 Qd4: pasif (Motor: −3.7).' },
      ],
    },
    '45b': {
      text: '45...b4 geçer piyon ilerler.',
      amac: 'b-piyonunu b1’e doğru yürütmek ve Beyaz taşlarını savunmaya bağlamak.',
      neden: 'Motor 45...Nc4’ü (−3.6) biraz daha iyi buluyor: at merkeze döner ve e3/e5 karelerini kontrol eder. Maç hamlesi −3.1.',
      diger: [
        { move: '45...Nc4', text: '46.Rg5 Qd4 47.h5 Ne3: at merkezde güçlü (Motor: −3.6).' },
        { move: '45...a5', text: '46.Qe2 Nc4 47.h5 Qf5: a-piyonu destek (Motor: −3.2).' },
      ],
    },
    '46w': {
      text: '46.Rg5 kale g5’e gelir ve vezire saldırır.',
      amac: 'Tempo kazanmak, kaleyi beşinci yatayda aktif tutmak.',
      neden: 'Motor 46.Qe2’yi (−3.1) eşit görüyor. 46.Qd1 (−3.6) daha pasif.',
      diger: [
        { move: '46.Qe2', text: '46...Nb5 47.Qe7 Ka5 48.Qd8+: şah serisi denemesi (Motor: −3.1).' },
      ],
    },
    '46b': {
      text: '46...Qd4 vezir d4’e gelir ve merkezden her yöne bakar.',
      amac: 'Merkezi kontrol etmek, h4 piyonuna ve b2 karesine bakmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−3.25). 46...Nc2 (−2.4) ve 46...d5 (−2.0) daha zayıf.',
      diger: [
        { move: '46...Nc2', text: '47.Qe7 d5 48.Qe5: Beyaz vezir aktif (Motor: −2.4).' },
        { move: '46...d5', text: '47.Qg3 Ka5 48.Qc7+: şah açıkta (Motor: −2.0).' },
      ],
    },
    '47w': {
      text: '47.Qg3 vezir g3’e gelir ve d6 piyonuna bakar.',
      amac: 'd6’yı baskı altına almak ve g2’yi korumak.',
      neden: 'Motor 47.Rf5’i (−3.5) biraz daha iyi buluyor; maç hamlesi −3.7.',
      diger: [
        { move: '47.Rf5', text: '47...Nb5 48.h5 b3 49.h6: h-piyonu ilerler (Motor: −3.5).' },
        { move: '47.h5', text: '47...b3 48.Rg3 Bd5: b-piyonu daha hızlı (Motor: −3.9).' },
      ],
    },
    '47b': {
      text: '47...Nc2 at c2’den e3 ve d4 karelerine yönelir.',
      amac: 'Atı merkeze, Beyaz şahının yakınına getirmek.',
      neden: 'Motor 47...Nc4’ü (−3.7) biraz daha iyi buluyor; maç hamlesi −3.5. Fark küçük; at e3’e ulaşacak.',
      diger: [
        { move: '47...Nc4', text: '48.Rg4 Qc5 49.Qf4 Kb5: benzer (Motor: −3.7).' },
        { move: '47...Nb5', text: '48.Rg4 Be4 49.h5 b3: b-piyonu destekli (Motor: −3.5).' },
      ],
    },
    '48w': {
      text: '48.Rg4 kale g4’e gelir ve d4 vezirine saldırır.',
      amac: 'Veziri kovalamak ve dördüncü yatayda aktif olmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−3.5). 48.Rf5 (−4.2) ve 48.Rg6 (−4.2) daha kötü.',
      diger: [
        { move: '48.Rf5', text: '48...Ne3 49.Rf4 Qc5 50.Rxb4+: Siyah yine önde (Motor: −4.2).' },
      ],
    },
    '48b': {
      text: '48...Be4 fil e4’e girer ve kalenin d4 vezirine saldırısını keser; g2’ye bakar.',
      amac: 'Vezire saldırıyı engellemek ve fil ile g2’ye baskı kurmak.',
      neden: 'Motor 48...Qc5’i (−4.0) biraz daha iyi buluyor; maç hamlesi −3.65. 48...Qd2 (−3.2) daha az etkili.',
      diger: [
        { move: '48...Qc5', text: '49.Rg5 Qd4 50.Rg4 Be4: tekrar arayışı ama aynı fikir (Motor: −4.0).' },
        { move: '48...Qd2', text: '49.h5 Ne3 50.Rxb4+: b-piyonu düşer (Motor: −3.2).' },
      ],
    },
    '49w': {
      text: '49.Rf4 kale f4’e gelir ve e4 filine saldırır.',
      amac: 'Fili kovalamak ve f-hattına geçmek.',
      neden: 'Motor 49.Qf4’ü (−3.8) daha iyi buluyor; maç hamlesi −4.5. Kale f4’te e5–h2 çaprazında olacak; bu, 50...Qe5 bağını mümkün kılar.',
      diger: [
        { move: '49.Qf4', text: '49...Ne3 50.Rg3 Nc4 51.h5: vezir aktif (Motor: −3.8).' },
        { move: '49.h5', text: '49...Ne3 50.Rf4 b3 51.h6: piyonlar yarışıyor (Motor: −4.2).' },
      ],
    },
    '49b': {
      text: '49...Ne3 at e3’e gelir.',
      amac: 'Atı merkezde güçlendirmek ve g2/f1 karelerine bakmak.',
      neden: 'Motor 49...Qe5’i (−4.5) daha iyi buluyor: 50.Qg5 Bd5 51.Qxe5 dxe5. Maç hamlesi −3.6.',
      diger: [
        { move: '49...Qe5', text: '50.Qg5 Bd5 51.Qxe5 dxe5: vezirler değişir (Motor: −4.5).' },
        { move: '49...Ka5', text: '50.h5 Qe5 51.h6 b3: şah daha güvenli (Motor: −3.8).' },
      ],
    },
    '50w': {
      text: '50.Qg8 vezir g8’e girer ve şaha karşı oyun arar.',
      amac: 'Vezirle b8, d8 ve g1 karelerine ulaşıp şah serisi kurmak.',
      neden: 'Bir hata: motor 50.Qg5’i (−3.85) öneriyor; maç hamlesi −4.8. Vezir g8’e gidince f4 kalesi korumasız kalır ve 50...Qe5 bağı güçlü olur.',
      diger: [
        { move: '50.Qg5', text: '50...d5 51.h5 Qd2 52.h6: h-piyonu ilerler (Motor: −3.85).' },
        { move: '50.h5', text: '50...b3 51.Qg8 b2 52.Qb3+: piyon yarışı (Motor: −4.3).' },
      ],
    },
    '50b': {
      text: '50...Qe5 vezir e5’ten f4 kalesine saldırır; kale h2 şahına karşı bağlıdır.',
      amac: 'Bağı kullanarak kaleyi kazanmak ya da Beyazı daha kötü bir savunmaya zorlamak.',
      neden: 'Motor 50...d5’i (−4.8) biraz daha iyi buluyor; maç hamlesi −4.1. 50...Qd3? (−2.6) ise Beyaza Qd8+ ile şah serisi verir.',
      diger: [
        { move: '50...d5', text: '51.Kh3 Qe5 52.Qg5: önce piyon, sonra bağ (Motor: −4.8).' },
        { move: '50...Qd3', text: '51.Qd8+ Kc5 52.Qe7: Beyaz vezir aktif (Motor: −2.6).' },
      ],
    },
    '51w': {
      text: '51.Qg3 vezir g3’e döner ve kaleyi korur.',
      amac: 'Bağlı kaleyi korumak ve g2’yi savunmak.',
      neden: 'Motor 51.Qg5’i (−4.2) öneriyor; maç hamlesi −5.1. Qg3 sonrası 51...Nxg2 gelir.',
      diger: [
        { move: '51.Qg5', text: '51...Qxg5 52.hxg5 d5 53.g6: vezirsiz son oyun, Siyah önde (Motor: −4.2).' },
        { move: '51.Qd8+', text: '51...Kb5 52.Qg5 Qxg5: aynı fikir, kötü sıra (Motor: −5.45).' },
      ],
    },
    '51b': {
      text: '51...Nxg2! at g2 piyonunu alır.',
      amac: 'g2’de korunan bir kareye at yerleştirip f4 kalesine ve h4 piyonuna saldırmak.',
      neden: 'At g2’de e4 filiyle korunur, bu yüzden Beyaz şahı alamaz. Kale hem bağlı hem saldırı altında. Motor en iyi hamle olarak görüyor (−5.6).',
      diger: [
        { move: '51...Nc4', text: '52.Rxe4 Qxe4 53.h5 Ne3: benzer (Motor: −5.3).' },
        { move: '51...Nd5', text: '52.Rxe4 Qxe4 53.h5: benzer (Motor: −5.3).' },
      ],
    },
    '52w': {
      text: '52.Rxe4 Beyaz kaleyi e4 filine verir.',
      amac: 'En azından fili alarak malzeme kaybını sınırlamak.',
      neden: 'Motor en iyi hamle olarak görüyor (−5.6). 52.Rg4 (−6.1) ya da 52.Rf8 (−6.1) daha da kötüdür.',
      diger: [
        { move: '52.Rg4', text: '52...Ne3 53.Rf4 Nf5: Beyaz yine kaybeder (Motor: −6.1).' },
      ],
    },
    '52b': {
      text: '52...Qxe4 vezir geri alır.',
      amac: 'Bir at önde ve geçer b-piyonuyla kazanılmış bir konum.',
      neden: 'Zorunlu: 52...Qc5?? 53.Kxg2 (+4.1) ya da 52...Qf6?? 53.Kxg2 (+4.6) kazanılmış konumu kaybettirir.',
      diger: [
        { move: '52...Qc5', text: '53.Kxg2: Siyah bir kale eksik (Motor: +4.1).' },
      ],
    },
    '53w': {
      text: '53.Qxd6+ vezir d6 piyonunu şahla alır.',
      amac: 'Son karşı şansı aramak: şah serisi ve h-piyonu.',
      neden: 'Motor 53.h5’i (−5.6) eşit görüyor. 53.Qxg2? Qxh4+ (−5.9) daha da kötü.',
      diger: [
        { move: '53.h5', text: '53...Nf4 54.Qg1+ Kb5 55.h6: piyon koşar ama Siyah önde (Motor: −5.6).' },
      ],
    },
    '53b': {
      text: '53...Kb5 şah b5’e çıkar. Siyah bir at ve geçer b-piyonuyla öndedir; Morozevich terk etti.',
      amac: 'Şahı şahlardan kurtarmak ve b-piyonunu desteklemek.',
      neden: 'Motor 53...Ka5’i (−6.2) biraz daha iyi buluyor; maç hamlesi −5.6. Her iki durumda da Beyazın kurtuluş şansı yok.',
      diger: [
        { move: '53...Ka5', text: '54.h5 Ne3 55.Qd8+ Ka4: şah daha güvenli (Motor: −6.2).' },
      ],
    },
  },
  qa: [
    { q: '7...Nxe4 neden işe yaradı?', a: 'Çünkü 8.Nxe4 Qe5 sonrası e4 atı e1 şahına karşı bağlıydı ve Siyah vezir aynı anda d4 atına saldırıyordu. 9.Bd3 e4’ü korudu ama d-hattını kapattı ve d4 atı korumasız kaldı. Eğer Beyaz 7.Be2 oynasaydı, fil e-hattını kapatırdı ve numara çalışmazdı (Motor: +4.2).' },
    { q: 'Beyazın avantajı nereden geldi ve nerede kayboldu?', a: 'Beyaz 7...Nxe4 sonrası gelişim üstünlüğü aldı (Motor: +1.0). 12.f4 g1–a7 çaprazını açarak avantajın bir kısmını verdi. 17.Bxf5 fedası doğruydu (0.00), ama 18.Qh5+? e3 filini bağlı bıraktı ve 20...Bxe3+ ara şahıyla malzeme Siyaha geçti (−2.0).' },
    { q: 'Beyaz 18. hamlede ne oynamalıydı?', a: '18.Bf2! fil bağdan kurtulur; 18...Bxf2+ 19.Rxf2 Rf8 20.Qxh6 ile Beyaz açık Siyah şahına karşı oyun alır (Motor: 0.00). 18.Rf3 de e3’ü korur (0.00).' },
    { q: 'Svidler neden h8’deki atı hemen almadı?', a: 'Çünkü vezir h8’e uzaktı ve at kaçamıyordu. Önce 20...Bxe3+ ile tempo kazandı, 21...Qxb2 ile piyon aldı, 22...Qxh8 ile atı topladı. Atı “kurtarmaya” çalışmak (20...Bd4) Beyaza zaman verirdi (+3.2).' },
    { q: 'Kaleye karşı iki hafif taş neden bu kadar güçlüydü?', a: 'Siyahın at, fil ve d6 piyonu birbirini koruyan bir zincir oluşturdu (Ne5 – Bc6 – d6). Beyazın kaleleri hedef bulamadı, Siyah ise c4, f4 ve a3 piyonlarını topladı.' },
    { q: 'Siyah nerede avantajını kaybedebilirdi?', a: '35...Qc6? 36.Rxe5 değişimleri avantajı eritirdi (−0.6). 38...Qxh3+? ya da 38...Kb7? de avantajı yarıya indirirdi (−1.8). Svidler her iki noktada da doğru hamleyi buldu.' },
    { q: 'Son darbe nasıl geldi?', a: '50...Qe5 f4 kalesini h2 şahına karşı bağladı. 51.Qg3 kaleyi korudu ama 51...Nxg2! geldi: at e4 filiyle korunduğu için alınamıyordu ve hem kaleye hem h4’e saldırıyordu. Beyaz kaleyi vermek zorunda kaldı (−5.6).' },
  ],
  sources: [
    { title: 'Hercules Chess: The Sicilian Kan (Kan varyantı ve 5.c4 Maroczy kuruluşu üzerine)', url: 'https://herculeschess.com/?p=886' },
  ],
  exercises: [
    { id: 'msv-1', kind: 'tekrar', plan: false, title: 'Merkezde vezir çatalı',
      source: 'Morozevich – Svidler, Moskova 2002 (8. hamle)',
      fen: 'rnb1kb1r/1pqp1ppp/p3p3/8/2PNN3/P7/1P3PPP/R1BQKB1R b KQkq - 0 8',
      prompt: 'Siyah 7...Nxe4 ile e4 piyonunu aldı ve Beyaz 8.Nxe4 ile atı geri aldı. Siyah şu an bir taş geride. Taşı nasıl geri kazanırsınız?',
      hint: 'Beyazın iki atı d4 ve e4’te. İkisine birden saldıran bir vezir hamlesi var mı?',
      line: ['Qe5', 'Bd3', 'Qxd4'],
      explanation: '**8...Qe5!** Vezir d4 ve e4 atlarına aynı anda saldırır. **9.Bd3 Qxd4** ile taş geri gelir ve malzeme eşitlenir. Motor: 8...Qe5 +0.9, sonraki en iyi 8...b5 +3.5; 9...Qxd4 +1.0, 9...Be7 +4.9.',
      link: '7...Nxe4 hamlesinin bütün fikri bu çatala dayanıyordu.' },
    { id: 'msv-2', kind: 'tekrar', plan: false, title: 'Ara şah',
      source: 'Morozevich – Svidler, Moskova 2002 (20. hamle)',
      fen: 'rnb4N/1pkp4/pq2p2p/2b2p1Q/2P2P2/P3B3/1P4PP/4RRK1 b - - 0 20',
      prompt: 'Beyaz fil feda etti, şahınızı kovaladı ve h8’deki kalenizi aldı. h8’deki at oradan çıkamaz. Atı almadan önce oynanacak daha güçlü bir hamle var.',
      hint: 'c5 fili ve b6 veziri aynı çaprazda. e3 fili neyi koruyor?',
      line: ['Bxe3+'],
      explanation: '**20...Bxe3+!** Fil şahla alır; 21.Rxe3?? Qxe3+ kaleyi kaybettirir, bu yüzden 21.Kh1 zorunlu. Ardından 21...Qxb2 22.Rxe3 Qxh8 ile Siyah h8’deki atı da geri alır ve kaleye karşı iki hafif taşla kalır. Motor: Bxe3+ −2.5, sonraki en iyi 20...Nc6 +3.2.',
      link: 'Svidler malzemeyi hemen geri almadı; önce şahla tempo kazandı.' },
    { id: 'msv-3', kind: 'transfer', plan: false, title: 'Merkezde vezir çatalı',
      source: 'Kuczynski – Rubinstein, Lodz 1907 (6. hamle)',
      fen: 'r1bqkb1r/1pp2ppp/p1p2n2/4N3/4P3/2N5/PPPP1PPP/R1BQK2R b KQkq - 0 6',
      prompt: 'Dört At oyununda Beyaz 6.Nxe5 ile bir piyon aldı. Beyazın e4 piyonu yalnızca c3 atıyla korunuyor. Siyah piyonu nasıl geri alır?',
      hint: 'Atı e4’te alın; Beyaz geri alırsa iki atı merkezde yan yana kalır.',
      line: ['Nxe4', 'Nxe4', 'Qd4', 'O-O', 'Qxe5'],
      accept: { 2: ['Qd5'] },
      explanation: '**6...Nxe4! 7.Nxe4 Qd4!** Vezir e5 ve e4 atlarına aynı anda saldırır; **8.O-O Qxe5** ile taş geri gelir. 7...Qd5 de aynı çatalı kurar. Motor: 6...Nxe4 +0.4, sonraki en iyi 6...Bd6 +1.3; 8...Qxe5 +0.3, 8...Be6 +1.4.',
      link: 'Svidler’in 7...Nxe4 ve 8...Qe5 fikrinin aynısı: e4’ü atla al, sonra merkezde vezirle iki ata birden saldır.' },
    { id: 'msv-4', kind: 'transfer', plan: false, title: 'Al ve şahla çatal',
      source: 'Stahlberg – Petrosyan, Adaylar turnuvası, Zürih 1953 (18. hamle)',
      fen: 'r4rk1/1pp2pb1/3p1qp1/2nPp2p/p1P1P2P/P1N3PK/1P3P2/1R1QNR2 b - - 0 18',
      prompt: 'Beyaz şahı h3’te açıkta duruyor. e4 piyonu yalnızca c3 atıyla korunuyor. Siyahın veziri f6’da.',
      hint: 'e4’ü atla alın; Beyaz geri alırsa vezir şahla hem şaha hem e4’e saldırabilir.',
      line: ['Nxe4', 'Nxe4', 'Qf5+', 'Kh2', 'Qxe4'],
      explanation: '**18...Nxe4! 19.Nxe4 Qf5+!** Vezir şah çeker ve e4 atına saldırır; **20.Kh2 Qxe4** ile Siyah piyonu kazanmış olur. Motor: 18...Nxe4 −2.0, sonraki en iyi 18...Bh6 −0.9; 19...Qf5+ −2.3, 19...Qe7 +2.9.',
      link: 'Morozevich – Svidler’deki gibi e4 yalnızca c3 atıyla korunuyordu; at alır, vezir çatalla taşı geri kazanır. Burada çatal şahla geliyor.' },
  ],
};
