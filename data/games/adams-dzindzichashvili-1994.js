// Adams – Dzindzichashvili, PCA Açık turnuvası, New York 1994 (6. tur). Kaynak: PgnMentor (Adams.pgn).
export default {
  id: 'adams-dzindzichashvili-1994',
  theme: 'Şah çekerek piyon toplamak: Qd4+ ve kale şahları',
  white: 'Michael Adams', black: 'Roman Dzindzichashvili',
  whiteShort: 'Adams', blackShort: 'Dzindzichashvili',
  event: 'PCA Açık turnuvası', site: 'New York', year: 1994, eco: 'B22',
  variation: 'Sicilya Alapin, 2...g6 3.d4 cxd4 4.cxd4 d5 5.e5', result: '1-0',
  pgn: `1. e4 c5 2. c3 g6 3. d4 cxd4 4. cxd4 d5 5. e5 Nc6 6. Nc3 Bg7 7. h3 f6 8. exf6 exf6 9. Nf3 Nge7 10. Be2 O-O 11. O-O g5 12. Re1 Bf5 13. Be3 Bg6 14. Rc1 Qd7 15. h4 h6 16. hxg5 fxg5 17. Nh2 Kh8 18. Bf3 Rad8 19. Nf1 Nf5 20. Bg4 Qf7 21. Bxf5 Bxf5 22. Ng3 Bg6 23. Qd2 Qf6 24. Nce2 Rd7 25. f4 g4 26. Rf1 Bf5 27. Nxf5 Qxf5 28. Ng3 Qe6 29. Rce1 Qd6 30. Qd1 Re7 31. Kh1 h5 32. Bg1 Rxe1 33. Qxe1 Nxd4 34. Bxd4 Bxd4 35. Nxh5 Qh6 36. Qh4 Rg8 37. Rd1 Bf2 38. Qxf2 Qxh5+ 39. Kg1 g3 40. Qd4+ Kh7 41. Qxd5 Qxd5 42. Rxd5 Rc8 43. Rh5+ Kg6 44. Rg5+ Kf6 45. Rxg3 Kf5 46. Rg7 b6 47. Rxa7 Kxf4 48. Ra4+ Kg3 49. Ra3+ 1-0`,

  summary: 'Alapin’e karşı Dzindzichashvili’nin sevdiği **2...g6** kurulumu, 3.d4 cxd4 4.cxd4 d5 5.e5 ile Fransız savunmasını andıran bir yapıya döndü. Siyah 7...f6 ile e5 piyonunu söktü; Adams 8.exf6 exf6 ile gerginliği çözünce iki tarafın da **d-hattında tek kalmış (izole) piyonu** oluştu: Beyazın d4’ü, Siyahın d5’i. Dzindzichashvili 11...g5 ile şah kanadında alan aldı, atını f5’e getirip d4’e baskı kurdu; Adams’ın 15.h4 ve özellikle pasif **17.Nh2** hamlelerinden sonra motor Siyahı hafifçe üstün görüyor (Motor: −0.5). Orta oyunda Siyahın 25...g4?! hamlesi f5 karesini Beyaza verdi, ama Adams 26.f5! fırsatını kullanmadı. Kritik an 32. hamlede geldi: **32.Bg1?** e-hattını açıp veziri d-hattından uzaklaştırdı ve 32...Rxe1 33.Qxe1 Nxd4 ile Siyah piyon kazandı (Motor: −1.3). Adams bundan sonra karmaşık bir taktik savunma yaptı: **35.Nxh5!** ve **36.Qh4!** tek hamlelerdi. Siyah 36...Rg8 ve 37...Bf2 ile zorlamaya çalışınca dengeyi kaybetti; 39...g3 sonrası **40.Qd4+!** şah çekerek d5’i aldı. Kale oyun sonunda **42...Rc8?** hatası (42...Kh6 ile Siyah direnebilirdi) **43.Rh5+ Kg6 44.Rg5+ Kf6 45.Rxg3** ile cezalandırıldı: kale iki şahla g3 piyonuna ulaştı, ardından a7 de düştü ve Beyaz iki piyon önde kazandı. Kazananın oyunu, kötü bir anda bile soğukkanlı kalan ve taktik kaynakları bulan bir oyuncunun oyunuydu.',
  intro: 'Alapin (2.c3) Beyazın d4 ile tam piyon merkezi kurmak istediği, Sveshnikov’un uzun yıllar savunduğu sağlam bir anti-Sicilya’dır. Siyahın ana cevapları 2...d5 ve 2...Nf6’dır; **2...g6** ise daha nadir, ama Dzindzichashvili’nin adıyla anılan bir kurulumdur. Chess.com’daki “Sicilian-phobia” yazısı, bu yaklaşımı Alburt, Dzindzichashvili ve Perelshteyn’in yıllar sonra (2005) yayımladıkları *Chess Openings for Black, Explained* kitabına bağlar: Siyah Beyazın 3.d4 ile merkezi kurmasına izin verir, sonra ...d5 ile vurur. Lichess’in açılış sayfası da 2...g6’nın objektif olarak kötü olmadığını, ama Siyahın merkezi sorgulamak için **hemen enerjik oynaması** gerektiğini, aksi halde pasif kalacağını yazar. Bu oyunda Siyah tam bunu yaptı: 4...d5 ve 7...f6 ile merkezi kırdı. 8.exf6 exf6 sonrası yapı simetrik değildir ama dengelidir: iki tarafın da izole d-piyonu vardır, Siyahın ayrıca f6 ve g-piyonları şah kanadında alan sağlar. Oyunun ana dersleri: izole piyon yapısında taşların kalitesi, şah kanadında piyon ilerletmenin artı ve eksileri, karmaşık konumda tek savunma hamlelerini bulmak ve kale oyun sonunda **şah çekerek tempo kazanmak**.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Açılışta 5.e5 ile alan almak, h3 ile ...Bg4’ü önlemek; Siyah ...f6 ile e5’i sökünce 8.exf6 ile yapıyı netleştirip hızla gelişmek (Nf3, Be2, O-O, Re1).',
      'd4 piyonunu taşlarla korumak (Be3, Nf3, vezir d-hattında) ve e-hattını kaleyle tutmak; Siyahın tek kalmış d5 piyonunu da uzun vadeli hedef olarak görmek.',
      'Siyahın ...g5 ilerleyişine 15.h4 ile karşı çıkmak; h-hattını açıp Siyah şahının önündeki piyonları sorgulamak (motor burada 15.Bb5 ya da 15.Qb3’ü tercih ediyor).',
      'Atları g3 ve e2 üzerinden yeniden düzenleyip f5 ve h5 karelerine bakmak; 25.f4 ile g5 piyonuna saldırıp Siyahın şah kanadı zincirini sorgulamak.',
      'd4 düştükten sonra paniğe kapılmadan taktik kaynak aramak: 35.Nxh5! ile piyonu geri almak, 36.Qh4! ile hem atı korumak hem de veziri h-hattında karşılamak.',
      'Siyahın şahı açıkken vezirle **şah çekip** aynı anda d5’e saldırmak (40.Qd4+!) ve vezirler değişince bir piyon fazlasıyla kale oyun sonuna geçmek.',
      'Kale oyun sonunda kaleyi aktif tutmak: 43.Rh5+ ve 44.Rg5+ ile tempo kazanarak g3’e ulaşmak, sonra 46.Rg7 ile yedinci yataya girip vezir kanadı piyonlarını toplamak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '2...g6 ve 4...d5 ile Beyaz merkezine erken vurmak; 5.e5 sonrası ...Nc6, ...Bg7 ve ...f6 ile e5 piyonunu sökmek.',
      '8...exf6 ile e-hattını açmak ve f6–g-piyonlarıyla şah kanadında alan tutmak; atı e7 üzerinden f5’e getirip d4 ile e3’e baskı kurmak.',
      '11...g5 ile Beyazın filini f4’ten uzak tutmak ve şah kanadında inisiyatif almak; bunun bedeli olan şah önündeki zayıflıkları (f5, h5 kareleri) taşlarla örtmek.',
      'Kalelerini d- ve e-hatlarında, vezirini f-hattında toplayıp d4 piyonuna baskıyı artırmak; uygun anda ...Nxd4 ile piyon kazanmak (32.Bg1?’den sonra bu gerçekleşti).',
      'Piyon kazandıktan sonra g- ve h-piyonları ile Beyaz şahına saldırmak; ...Qh6, ...g3 ve ...Bf2 fikirleriyle h-hattını ve kara kareleri kullanmak.',
      'Kale oyun sonunda şahı g3 piyonuna yakın tutmak ve kaleyi Beyaz şahını sıkıştırmak için kullanmak (42...Kh6 doğru yoldu; 42...Rc8 piyonu savunmasız bıraktı).',
    ] },
  },
  critical: [
    { move: '8w', title: '8.exf6: iki tarafta izole piyon', text: 'Beyaz 8.f4 ile e5’i koruyup Fransız tipi kapalı bir yapıda kalabilirdi (Motor: +0.7); Adams 8.exf6 ile yapıyı açmayı seçti (+0.4–0.5). 8...exf6 sonrası Beyazın d4, Siyahın d5 piyonu izole kalır. Siyahın 8...Nxf6’sı daha doğal bir gelişme hamlesiydi (+0.4); 8...exf6 ise e-hattını açar ve f6 piyonu sayesinde e5 ve g5 karelerini kontrol eder. Bu andan sonra oyunun soruları şunlardır: kim izole piyonunu daha iyi korur, kim rakibin piyonuna daha çok taşla baskı kurar?' },
    { move: '17w', title: '17.Nh2?! pasif at, Siyah inisiyatifi alıyor', text: '16...fxg5 sonrası Siyah ...g4 ile f3 atını kovmakla tehdit ediyordu. Adams atı h2’ye çekti; motor bunu oyunun ilk ciddi hatası sayıyor (+0.5’ten −0.5’e). Doğrusu **17.Ne5!** idi: 17...Bxe5 18.dxe5 d4 19.Bc4+ Kh7 20.Nb5 ile Beyaz izole piyonundan kurtulur, Siyahın güçlü g7 filini değiştirir ve kara kareleri ele geçirir (Motor: +0.5). Nh2 sonrası Beyazın atı uzun bir yolculukla (Nf1–g3) ancak oyuna döner; bu sırada Siyah ...Nf5 ve ...Qf7 ile baskıyı kurar.' },
    { move: '25b', title: '25...g4?! f5 karesi Beyaza kalıyor', text: 'Beyaz 25.f4 ile g5’e saldırdı. Siyahın doğru cevabı **25...gxf4 26.Nxf4** idi (Motor: +0.1); şah kanadı açılır ama Siyahın taşları aktif kalır. 25...g4 hattı kapatır, ama f4 piyonu yerinde kalır, g4 piyonu sabit bir hedef olur ve en önemlisi **f5 karesi** Beyaza açılır. Motor bu noktada Beyazı +0.9 görüyor. Ardından 26.f5! 26...Bxf5 27.Rf1 ile f-hattı açılıp Nf4 geliyordu (+0.6/+0.7); Adams bunun yerine 26.Rf1 oynadı ve fırsat kaçtı (0.0).' },
    { move: '32w', title: '32.Bg1? d4 düşüyor', text: 'e3 fili hem d4’ü hem f4’ü koruyor, bir de e-hattında Re7 ile Re1 arasında duruyordu. 32.Bg1 bu üç görevin ikisini bıraktı: e-hattı açıldı ve 32...Rxe1 sonrası vezir d1’den alınca d-hattını terk etti. 33.Qxe1 Nxd4 ile d4’e iki Siyah taş (Nc6, Bg7) saldırırken tek savunucu g1 filiydi; 33.Rxe1 ise 33...Qxf4 ile f4’ü kaybettirirdi. Motor 32.Nxh5! 32...Qg6 33.Nxg7 Rxg7 öneriyor (Motor: −0.4); maç hamlesinden sonra −1.3.' },
    { move: '35w', title: '35.Nxh5! tek hamle', text: 'd4’ü kaybeden Beyaz, h5 piyonunu alarak malzemeyi geri istedi. Bu, konumdaki tek iyi hamleydi: 35.Ne2 (−2.4) ya da 35.Kh2 (−3.3) Siyaha kalıcı bir piyon fazlası ve saldırı bırakırdı. At h5’te g7 ve f6 karelerine bakar; ama h-hattında Siyah veziri ve Beyaz şahı (h1) aynı hatta olduğu için at bağlantı riskleri taşır. Bu yüzden bir sonraki hamle kritikti.' },
    { move: '36w', title: '36.Qh4! atı koruyan tek savunma', text: 'Siyah 35...Qh6 ile h5 atına saldırdı; at düşerse Qxh5 şah olur. **36.Qh4!** atı korur ve vezirleri h-hattında karşı karşıya getirir: 36...Qxh5?? 37.Qxh5+ ile vezir kaybedilir. Motor: Qh4 −0.2; 36.Kh2? Qxh5+ 37.Kg3 (−4.2), 36.Rf3?? ise tamamen kaybettirir. Siyahın en iyisi 36...g3! idi (Motor: −0.1): piyon f2 ve h2 karelerini kontrol eder, veziri g3’ten mahrum bırakır. 36...Rg8 ise Beyaza nefes aldırdı (+0.5).' },
    { move: '40w', title: '40.Qd4+! şah ve d5', text: 'Siyah 39...g3 ile f2’deki veziri kovaladı. Vezirin tek iyi karesi d4’tü: buradan d4–h8 çaprazından şah çeker ve aynı anda d1 kalesiyle birlikte d5’e saldırır. 40...Kh7 41.Qxd5 ile piyon düşer. Motor: Qd4+ +0.5; 40.Qf3? Qh2+ 41.Kf1 Re8 (−2.3), 40.Qc2? Qh2+ 41.Kf1 Qh1+ (−5.6). Şah çekmenin gücü burada açıkça görülüyor: Siyah piyonu savunacak bir tempo bulamadı.' },
    { move: '42b', title: '42...Rc8? g3 korumasız kalıyor', text: 'Vezirler değişince Beyaz bir piyon önde ama Siyahın g3 piyonu Beyaz şahını sıkıştırıyor. Siyahın doğru planı **42...Kh6!** idi (Motor: +1.0): şah g-piyonuna yaklaşır, h5 ve g5 karelerini kontrol eder, Beyaz kalesinin şah çekerek g-hattına geçmesini engeller. 42...Rc8 ile kale aktifleşmek istedi ama şah h7’de kaldı; **43.Rh5+ Kg6 44.Rg5+ Kf6 45.Rxg3** ile kale iki tempo kazanarak piyonu aldı (Motor: +3.5).' },
  ],
  lessons: [
    'Alapin’e karşı 2...g6 kurulumunda Siyah merkezi hemen sorgulamalıdır (4...d5, ...f6); 8.exf6 exf6 sonrası iki tarafta da izole d-piyonu oluşur ve oyun taşların kalitesine bağlı hale gelir.',
    'İzole piyon yapısında her taşın bir görevi vardır: 32.Bg1 hamlesi e3 filinin e-hattını kapatma, d4 ve f4’ü koruma görevlerini aynı anda bıraktı ve d4 düştü. Bir taşı çekmeden önce “bu taş neyi koruyordu?” diye sorun.',
    'Şah kanadında piyon ilerletmek (...g5, ...g4) alan kazandırır, ama geriye dönüşü yoktur: 25...g4 f5 karesini Beyaza verdi, sonra g- ve h-piyonları hedef oldu.',
    'Pasif çekilmeler (17.Nh2) inisiyatifi rakibe verir; at kovalandığında önce ileri, aktif kareye (17.Ne5!) gitmeyi düşünün.',
    'Kötü konumda bile tek savunma hamlelerini aramak oyunu kurtarır: 35.Nxh5! ve 36.Qh4! olmasaydı Beyaz kaybedecekti.',
    'Şah çekerek gelen vezir ya da kale aynı anda bir piyona da saldırıyorsa piyon çoğu zaman düşer (40.Qd4+, 43.Rh5+–44.Rg5+): şah çekmek tempo kazandırır.',
    'Kale oyun sonunda şahı ilerideki piyonun yanında tutun (42...Kh6); şahın geride kalması kalenin şahlarına kapı açar.',
  ],
  qa: [
    { q: 'Kazanan kimdi ve oyunu nasıl kazandı?', a: 'Sonuç 1-0: Michael Adams kazandı. Adams aslında 32.Bg1? sonrası bir piyon geride ve sıkıntılıydı (Motor: −1.3), ama 35.Nxh5! ve 36.Qh4! ile tek savunmaları buldu, Siyahın 36...Rg8 ve 37...Bf2 hamlelerindeki aşırı hırsını 40.Qd4+! ile cezalandırdı ve bir piyon fazlasıyla kale oyun sonuna geçti. 42...Rc8? sonrası 43.Rh5+ ve 44.Rg5+ ile g3’ü, 47.Rxa7 ile de a7’yi alarak iki piyon önde kazandı.' },
    { q: 'Siyah neden 2...d5 ya da 2...Nf6 değil de 2...g6 oynadı?', a: '2...d5 ve 2...Nf6 Alapin’e karşı ana yollar; 2...g6 daha az teori isteyen, fil g7’den d4’e baskı yapan bir kurulumdur. Chess.com’daki yazıya göre bu yaklaşım Dzindzichashvili’nin de yazarları arasında olduğu *Chess Openings for Black, Explained* kitabında önerilir: Beyaz 3.d4 ile merkezi kurar, Siyah ...d5 ile vurur. Motor 2...g6’yı biraz daha az kesin buluyor (+0.5, 2...e6/2...d5 +0.3), ama fark küçüktür.' },
    { q: 'Adams neden 8.f4 ile e5’i korumadı da 8.exf6 oynadı?', a: '8.f4 ile Beyaz alanı korurdu (Motor: +0.7), ama g1 atı geç gelişir, e3 ve g3 karelerinde zayıflıklar oluşur ve Siyah ...Nh6–f7 ya da ...Bf5 ile e5’e baskıyı sürdürür. 8.exf6 daha basit bir yoldur: Beyaz hızla Nf3, Be2, O-O yapar ve Siyahın da izole piyonu olduğu için kendi d4 piyonu tek zayıflık değildir. Motorun farkı (+0.4’e karşı +0.7) büyük değil; Adams tanıdık, sağlam bir konumu tercih etti.' },
    { q: 'Siyahın 11...g5 hamlesi iyi miydi?', a: 'Motor 11...g5’i 11...Be6 ya da 11...Nf5’ten biraz zayıf görüyor (+0.7’ye karşı +0.5), yani ciddi bir hata değil. Hamle Bf4’ü önler ve ...g4 ile f3 atını kovma fikri taşır. Bedeli, şahın önündeki f5 ve h5 karelerinin zayıflamasıdır; bu kareler oyunun ilerleyen bölümünde Beyaz atları için hedef oldu (27.Nxf5, 35.Nxh5).' },
    { q: 'Siyah orta oyunda neden üstündü?', a: 'Beyazın 15.h4 ve 17.Nh2 hamleleri inisiyatifi Siyaha verdi: f3 atı h2’ye çekilince d4 bir koruyucusunu kaybetti, Siyah ise ...Nf5 ile d4 ve e3’e baskı kurdu ve ...Qf7 ile f-hattını kullandı (Motor: 17.Nh2 sonrası −0.5, 19.Nf1 sonrası −0.8). Beyaz 21.Bxf5 ile güçlü f5 atını değişmek zorunda kaldı; bu da kendi beyaz kareli filinden vazgeçmek demekti.' },
    { q: 'Beyaz 26. hamlede neyi kaçırdı?', a: '25...g4?! sonrası **26.f5!** güçlüydü: 26...Bxf5 27.Rf1 ile f-hattı açılır, f5 fili ve f6 veziri aynı hatta kalır, ardından Nf4 gelir (Motor: +0.6/+0.7). Adams 26.Rf1 oynadı (0.0), Siyah 26...Bf5 ile kareyi kapattı ve fırsat kayboldu.' },
    { q: '32.Bg1 neden hataydı?', a: 'e3 fili e-hattını kapatıyor, d4 ve f4 piyonlarını koruyordu. Bg1 ile e-hattı açıldı: 32...Rxe1 33.Qxe1 sonrası vezir d-hattından ayrıldı ve d4’ü yalnızca g1 fili korudu; Nc6 ve Bg7 iki saldırganla 33...Nxd4 geldi. 33.Rxe1 alınsaydı bu kez 33...Qxf4 ile f4 düşerdi. Doğrusu 32.Nxh5! 32...Qg6 33.Nxg7 Rxg7 idi (Motor: −0.4).' },
    { q: 'Siyah nerede kazanma şansını kaçırdı?', a: 'Önce 33. hamlede: 33...Nxd4 yerine **33...Qh6!** 34.f5 h4 ile g3 atını kovalamak daha güçlüydü (Motor: −1.9; maçta −0.75). Sonra 36. hamlede **36...g3!** ile (−0.1) Beyaz şahını sıkıştırmak gerekirdi; 36...Rg8 ve özellikle 37...Bf2? (37...Bxb2 +0.2 yerine +0.6) dengeyi Beyaza çevirdi. Son olarak 42...Kh6! ile kale oyun sonu savunulabilirdi (+1.0); 42...Rc8? kaybettirdi.' },
    { q: '41...Qxd5 yerine Siyah vezirleri tutsa ne olurdu?', a: 'Motor 41...Kh6! hamlesini öneriyor (+0.4): vezirler tahtada kalırsa Siyahın g3 piyonu ve h-hattındaki vezir Beyaz şahını sürekli rahatsız eder, Beyaz da piyon fazlasını değerlendiremez; motorun ana çizgisi 42.Qd6+ Kh7 43.Qd7+ Kh6 ile hamle tekrarına gidiyor. 41...Qxd5 42.Rxd5 sonrası ise Siyahın karşı oyunu kaybolur ve g3 piyonu zayıf kalır (+1.1).' },
    { q: 'Siyah neden 49.Ra3+ sonrası terk etti?', a: 'Beyazın a2, b2 ve g2 piyonlarına karşı Siyahın yalnız b6 piyonu kalmıştı: iki piyon fark. 49.Ra3+ sonrası kale üçüncü yatayı keser, Siyah şahı vezir kanadından uzak kalır ve Beyaz Rb3 ile b6’yı da hedef alırken a- ve b-piyonlarını ilerletir (Motor: +4.9). 49.Kf1? ise 49...Rc1+ 50.Ke2 Rc2+ ile şahları ve g2’yi kaybettirebilirdi (0.0); Adams yine şah çekerek doğru yolu buldu.' },
  ],
  sources: [
    { title: 'Chess.com: Sicilian-phobia Part Four – Alapin Variation (2...g6 ve Alburt–Dzindzichashvili–Perelshteyn kitabı)', url: 'https://www.chess.com/article/view/sicilian-phobia-part-four---alapin-variation' },
    { title: 'Lichess: Sicilian Defense, Alapin Variation – 2...g6 açılış sayfası', url: 'https://lichess.org/opening/Sicilian_Defense_Alapin_Variation/e4_c5_c3_g6' },
    { title: 'Wikipedia: Sicilian Defence, Alapin Variation', url: 'https://en.wikipedia.org/wiki/Sicilian_Defence,_Alapin_Variation' },
    { title: 'Wikipedia: Roman Dzindzichashvili', url: 'https://en.wikipedia.org/wiki/Roman_Dzindzichashvili' },
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkezde e4 piyonunu kurar, vezire ve f1 filine yol açar.',
      amac: 'Açık, taşların hızlı geliştiği oyunlara yönelmek ve merkezde alan almak.',
      neden: 'Adams kariyeri boyunca ağırlıkla 1.e4 oynayan bir oyuncudur; Sicilya’ya karşı da hazırladığı anti-Sicilya sistemleri vardı. Bu oyunda Alapin’i seçmesi, uzun teorik Açık Sicilya tartışmalarına girmeden sağlam bir yapı istediğini gösterir.',
      diger: [
        { move: '1.d4', text: 'Daha kapalı oyunlara yol açar (Motor: +0.2). Adams’ın tarzına daha az uygundu.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; çoğu zaman d4’lü yapılara döner (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya savunması. Siyah d4 karesine kanattan, c-piyonuyla bakar.',
      amac: 'Simetriyi bozmak ve dengesiz, iki tarafa da kazanma şansı veren bir oyun kurmak.',
      neden: 'Dzindzichashvili tanınmış bir teorisyendi ve Sicilya’nın farklı kollarını iyi bilirdi. Daha güçlü rakibine karşı 1...e5 ile simetrik bir oyun yerine kavgacı bir açılışı tercih etti.',
      diger: [
        { move: '1...e5', text: 'Simetrik açık oyunlara gider (Motor: +0.2); Beyaza Ruy Lopez gibi sağlam silahlar verir.' },
        { move: '1...e6', text: 'Fransız savunması (Motor: +0.35); oyunun ileride vardığı yapı ilginç biçimde Fransız’a benzeyecekti.' },
      ],
    },
    '2w': {
      text: '2.c3: Alapin varyantı. Beyaz d4’ü hazırlar; d4’te değişim olursa c-piyonuyla geri alıp tam merkez kuracaktır.',
      amac: 'Açık Sicilya’nın derin teorisinden kaçınıp e4–d4 piyon merkezini kurmak.',
      neden: 'Wikipedia’ya göre Alapin bir zamanlar 2...d5 yüzünden kolay eşitlik veren bir hat sayılıyordu, ama zamanla Sveshnikov, Rozentalis, Tiviakov gibi oyuncuların elinde en sağlam anti-Sicilyalardan biri haline geldi. 2.c3 aynı zamanda Siyahın ...g6 gibi Ejderha kurulumlarını da daha az etkili kılar, çünkü d4’ü piyonla destekler.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya gider (Motor: +0.5); Siyahın en iyi bildiği alana girmek demektir.' },
        { move: '2.Nc3', text: 'Kapalı Sicilya ya da Grand Prix tipi oyunlar (Motor: +0.3).' },
      ],
    },
    '2b': {
      text: '2...g6: Siyah filini g7’ye getirmeye hazırlanır; Ejderha tipi bir kurulumdur.',
      amac: 'Fil g7’den d4 ve uzun çapraza baskı yapacak; Siyah Beyazın merkezini kurmasına izin verip ...d5 ile sonra vuracak.',
      neden: 'Chess.com’daki “Sicilian-phobia” yazısı, bu yaklaşımı Alburt, Dzindzichashvili ve Perelshteyn’in *Chess Openings for Black, Explained* kitabına bağlıyor. Lichess’in açılış sayfası 2...g6’nın objektif olarak kötü olmadığını, ama Siyahın merkezi hemen ve enerjik biçimde sorgulaması gerektiğini yazıyor. Motor ana hatlardan biraz zayıf buluyor (+0.5).',
      diger: [
        { move: '2...d5', text: 'Ana hat: 3.exd5 Qxd5 4.d4 ile vezir merkezde aktif olur (Motor: +0.3).' },
        { move: '2...Nf6', text: 'Diğer ana hat: 3.e5 Nd5 ile at merkeze gelir ve e5 piyonuna baskı yapılır (Motor: +0.4).' },
        { move: '2...e6', text: 'Fransız benzeri bir yapıya hazırlanır (Motor: +0.25); motorun en çok beğendiği hamle.' },
      ],
    },
    '3w': {
      text: '3.d4 ile Beyaz planladığı tam merkezi kurar; d4 piyonu c3 ile desteklenir.',
      amac: 'Merkezde iki piyonla alan almak ve Siyahın g7 filinin çaprazını kapatmak.',
      neden: '2...g6 sonrası d4 hamlesi Alapin’in mantıklı devamıdır: Siyah ...cxd4 yaparsa cxd4 ile tam merkez oluşur. Motor da 3.d4’ü en iyi buluyor (+0.5).',
      diger: [
        { move: '3.Nf3', text: 'Daha esnek; Siyah 3...d5 ile hemen merkeze vurabilir (Motor: +0.4).' },
        { move: '3.Bc4', text: 'f7’ye bakar ama 3...e6 ile kolayca karşılanır (Motor: +0.3).' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah merkezde değişir.',
      amac: 'Beyazın c3 piyonunu c-hattından uzaklaştırıp sonra ...d5 ile merkezi piyonla sorgulamak.',
      neden: 'Bu değişim kitaptaki yaklaşımın parçasıdır: önce cxd4, sonra ...d5. Motor 3...d5’i biraz daha iyi buluyor (+0.5’e karşı +0.7), çünkü 3...d5 4.e5 sonrası Siyah ...Nc6 ve ...Qb6 ile d4’e baskıyı c-piyonu yerindeyken kurabilir.',
      diger: [
        { move: '3...d5', text: 'Hemen merkeze vurur: 4.e5 Nc6 5.Bb5 Qa5 gibi hatlar (Motor: +0.5).' },
        { move: '3...d6', text: '4.dxc5 dxc5 5.Qxd8+ ile vezirsiz, Beyaz için biraz daha rahat bir konum (Motor: +0.8).' },
      ],
    },
    '4w': {
      text: '4.cxd4: c-piyonuyla geri alınır; e4 ve d4 piyonları yan yana durur.',
      amac: 'Tam piyon merkezini kurmak ve b1 atına c3 karesini açmak.',
      neden: 'Alapin’in amacı tam bu yapıdır. 4.Qxd4 vezirle erken çıkmak olurdu ve Siyah ...Nc6 ya da ...Nf6 ile tempo kazanırdı; motor 4.cxd4’ü açık ara en iyi buluyor (+0.7).',
      diger: [
        { move: '4.Nf3', text: 'Piyon gambiti tarzı: 4...dxc3 5.Nxc3 ile Beyaz gelişme üstünlüğü için piyon verir (Motor: +0.25).' },
        { move: '4.Bc4', text: 'f7’ye bakar, ama piyonu geri almak zorlaşır (Motor: +0.1).' },
      ],
    },
    '4b': {
      text: '4...d5: Siyah hemen e4 piyonuna saldırır.',
      amac: 'Beyazın tam merkezini kurup rahatça gelişmesine izin vermemek.',
      neden: 'Lichess’in uyarısı burada önemlidir: 2...g6 kurulumunda Siyah enerjik oynamazsa pasif kalır. 4...d5 bu enerjiyi gösterir; e4 ya ilerlemek, ya değişmek ya da korunmak zorundadır (Motor: +0.7).',
      diger: [
        { move: '4...d6', text: 'Pirc/Modern tipi bir yapıya döner; Beyaz 5.Nc3 ve h3 ile rahat bir merkez üstünlüğü kurar (Motor: +0.8).' },
        { move: '4...Bg7', text: '5.Nc3 ile Beyaz merkezi korur; Siyah daha pasif kalır (Motor: +0.95).' },
      ],
    },
    '5w': {
      text: '5.e5: Beyaz piyonu ilerletir; f6 karesini Siyahın atından alır ve g7 filinin çaprazını kapatır.',
      amac: 'Alan kazanmak ve Fransız savunmasının ilerleme varyantına benzer bir yapı kurmak; Siyahın g7 fili e5 piyonuna çarpacak.',
      neden: 'Motor 5.e5’i en iyi buluyor (+0.8). 5.exd5 ise Siyaha 5...Nf6 ile piyonu geri alıp rahat gelişme fırsatı verirdi. Chess.com yazısının önerdiği 5.Bb5+ de ilginç bir yoldur (+0.55), ama Adams en doğrudan hamleyi seçti.',
      diger: [
        { move: '5.Bb5+', text: '5...Bd7 6.Bxd7+ Nxd7 7.e5 ile beyaz kareli filler değişir (Motor: +0.55); chess.com yazısının önerisi.' },
        { move: '5.exd5', text: '5...Nf6 6.Nc3 Bg7 ile Siyah d5’i geri alır ve rahat gelişir (Motor: +0.35).' },
      ],
    },
    '5b': {
      text: '5...Nc6: At c6’dan d4’e baskı yapar.',
      amac: 'd4 piyonunu hedef almak ve ...f6 ile e5’i sökmeye hazırlanmak.',
      neden: 'Bu yapıda Siyahın stratejisi Fransız’daki gibidir: d4’e baskı ve e5’i ...f6 ile kırmak. Motor 5...Bg7’yi az farkla tercih ediyor (+0.7’ye karşı +0.75), çünkü at hamlesi Bb5 bağlantısına izin verir.',
      diger: [
        { move: '5...Bg7', text: '6.Nc3 Nc6 7.Bb5 ile benzer konumlara döner (Motor: +0.7).' },
        { move: '5...Nh6', text: 'At f5’e yönelir ve d4’e baskı yapar (Motor: +0.8); ...Bf5 ya da ...f6 ile birleştirilebilir.' },
      ],
    },
    '6w': {
      text: '6.Nc3: At c3’e gelişir ve d5’e baskı yapar.',
      amac: 'Gelişmeyi tamamlamak ve d5 piyonunu ileride hedef almak.',
      neden: 'Beyaz önce vezir kanadı atını getirir, Nf3’ü bekletir; böylece ...Bg4 bağlantısına karşı önce h3 yapabilir. Motor 6.Bb5 ve 6.h3’ü eşit görüyor (+0.7/+0.8).',
      diger: [
        { move: '6.Bb5', text: 'c6 atını bağlar ve d4 üzerindeki baskıyı azaltır (Motor: +0.8).' },
        { move: '6.Nf3', text: 'Doğal ama 6...Bg4 ile at bağlanır ve d4 zayıflar (Motor: +0.6).' },
      ],
    },
    '6b': {
      text: '6...Bg7: Fil g7’ye gelir; d4 ve e5 piyonlarına bakar.',
      amac: 'Kara kareli fili aktif bir çapraza yerleştirmek ve ...f6 sonrası e5’e baskıyı artırmak.',
      neden: '2...g6’nın doğal devamıdır. Motor 6...Nh6 ve 6...f6’yı da eşit görüyor (+0.75–0.8); sıra farkı küçüktür.',
      diger: [
        { move: '6...Nh6', text: 'At f5 karesine yönelir (Motor: +0.75).' },
        { move: '6...f6', text: 'e5’e hemen vurur; 7.Nf3 Bg7 ile oyundaki konumlara benzer (Motor: +0.75).' },
      ],
    },
    '7w': {
      text: '7.h3: Beyaz ...Bg4’ü önler ve g4 karesini kontrol eder.',
      amac: 'Nf3’ün ...Bg4 ile bağlanmasını engellemek; böylece at d4’ü güvenle koruyabilecek.',
      neden: 'Siyahın ...Bg4 hamlesi d4’ün koruyucusu olan f3 atını bağlardı. Ayrıca h3, ...Nh6–g4 gibi at yolculuklarını da önler. Motor 7.h3’ü en iyi buluyor (+0.7).',
      diger: [
        { move: '7.Bb5', text: '7...Nh6 8.h3 f6 ile benzer konumlar (Motor: +0.6).' },
        { move: '7.Nf3', text: '7...Bg4 ile at bağlanır ve d4 üzerinde baskı artar.' },
      ],
    },
    '7b': {
      text: '7...f6: Siyah e5 piyonuna saldırır.',
      amac: 'e5 piyonunu söküp g7 filinin çaprazını açmak ve merkezde piyon kalesini yıkmak.',
      neden: 'Fransız savunmasının tipik fikri: ilerlemiş merkez piyonu yandan vurulur. Siyah ...fxe5 tehdidi yapar; Beyaz ya değişmeli, ya f4 ile korumalı. Motor 7...a6 ve 7...Nh6’yı da benzer görüyor (+0.7–0.8).',
      diger: [
        { move: '7...Nh6', text: '8.g4 Ng8 9.Bg2 h5 gibi keskin hatlar (Motor: +0.75).' },
        { move: '7...a6', text: 'Bb5’i önleyen bekleme hamlesi; 8.Nf3 f6 9.exf6 ile benzer yapı (Motor: +0.8).' },
      ],
    },
    '8w': {
      text: '8.exf6: Beyaz f6’da değişir ve e5’teki gerginliği çözer.',
      amac: 'Hızla gelişip açık hatları kullanmak; Siyahın da merkezde zayıflık edinmesini sağlamak.',
      neden: 'Motor 8.f4’ü az farkla tercih ediyor (+0.7–0.8): e5 korunur, ama Beyazın şah kanadı gevşer ve g1 atı geç gelişir. 8.exf6 ile Beyaz daha sade bir oyuna geçer (+0.4–0.5); 8...exf6 sonrası Siyahın da izole d-piyonu olacağı için Beyazın d4 piyonu tek zayıflık değildir.',
      diger: [
        { move: '8.f4', text: '8...Bf5 9.Be3 fxe5 10.fxe5 ya da 8...Nh6 9.g4 Nf7 ile keskin bir oyun (Motor: +0.7–0.8).' },
        { move: '8.Nf3', text: '8...fxe5 9.dxe5 Nxe5 10.Nxe5 Bxe5 11.Bb5+ ile Beyaz piyon karşılığı inisiyatif alır (Motor: +0.7).' },
      ],
    },
    '8b': {
      text: '8...exf6: Siyah e-piyonuyla alır; artık Beyazın d4, Siyahın d5 piyonu izole kalır.',
      amac: 'e-hattını açmak, f6 piyonuyla e5 ve g5 karelerini tutmak ve g7 filini korumak.',
      neden: '8...Nxf6 en doğal gelişme hamlesiydi (Motor: +0.4) ve at e4’e sıçrayabilirdi. Siyah e-hattını açmayı ve şah kanadında f6–g6 piyon çiftiyle sağlam bir yapı kurmayı seçti (+0.6). 8...Bxf6? ise e7 piyonunu açık hatta geri bırakırdı ve 9.Bb5 ile baskı artardı (Motor: +1.2).',
      diger: [
        { move: '8...Nxf6', text: '9.Nf3 Ne4 10.Bd3 ile at merkezde aktif; tek izole piyon Siyahın değil, ama e7 geri kalmış piyon olur (Motor: +0.4).' },
        { move: '8...Bxf6', text: '9.Bb5 ile c6 atı bağlanır, e7 ve e6 zayıflar (Motor: +1.2).' },
      ],
    },
    '9w': {
      text: '9.Nf3: At f3’te d4’ü korur ve e5 karesine bakar.',
      amac: 'd4’ü sağlamlaştırmak ve rok için hazırlanmak.',
      neden: '7.h3 sayesinde at artık ...Bg4 ile bağlanamaz. Motor 9.Nf3, 9.Be2 ve 9.Bb5’i eşit görüyor (+0.5–0.6); Adams en doğal gelişme hamlesini seçti.',
      diger: [
        { move: '9.Bb5', text: 'c6 atını bağlar; 9...Ne7 10.Nf3 a6 ile benzer konumlar (Motor: +0.5).' },
        { move: '9.Bd3', text: '9...Nxd4 10.Nge2 Nxe2 11.Qxe2+ ile Beyaz piyon karşılığı e-hattında şah çeker ve gelişme üstünlüğü alır (Motor: +0.45).' },
      ],
    },
    '9b': {
      text: '9...Nge7: At e7 üzerinden f5’e gidecek.',
      amac: 'Atı f5’e getirip d4 ve e3’e baskı yapmak; aynı zamanda rok için yolu açmak.',
      neden: 'e-hattı açık olduğu için at e7’de şahı da korur. f5’e gelince d4’e üçüncü kez saldırır. Motor 9...Nge7’yi en iyi buluyor (+0.6).',
      diger: [
        { move: '9...Bf5', text: 'Önce fil gelişir; 10.Be2 g5 11.O-O Nge7 ile benzer yapılar (Motor: +0.6).' },
        { move: '9...Nh6', text: 'At f5’e h6 üzerinden gider (Motor: +0.75), ama h6’da kenarda geçici olarak pasif durur.' },
      ],
    },
    '10w': {
      text: '10.Be2: Fil e2’ye gelişir; rok hazırlanır.',
      amac: 'Gelişmeyi tamamlamak ve şahı güvene almak.',
      neden: 'Fil e2’de sade ama sağlamdır; d3’te olsaydı ...Nb4 ya da ...Bf5 ile hedef olabilirdi. Motor 10.Bb5 ile 10.Be2’yi eşit görüyor (+0.5).',
      diger: [
        { move: '10.Bb5', text: '10...a6 11.Bxc6+ Nxc6 ile fil atla değişir; Siyahın d5 piyonu zayıflar ama Siyah fil çiftini alır (Motor: +0.5).' },
        { move: '10.Bd3', text: '10...Bf5 ile beyaz kareli filler değişir ve Siyah rahatlar (Motor: +0.4).' },
      ],
    },
    '10b': {
      text: '10...O-O: Siyah rok yapar.',
      amac: 'Şahı e-hattından kaçırmak ve f8 kalesini f-hattında oyuna sokmak.',
      neden: 'e-hattı açık olduğu için şahın e8’de kalması tehlikeliydi (Re1 ile bağlantı riski). Motor 10...Be6’yı da eşit görüyor (+0.4).',
      diger: [
        { move: '10...Be6', text: 'Önce d5 korunur; 11.O-O O-O ile aynı konuma döner (Motor: +0.4).' },
        { move: '10...g5', text: 'Şah kanadında hemen alan alır (Motor: +0.6), ama şah hâlâ merkezdeyken bu riskli.' },
      ],
    },
    '11w': {
      text: '11.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvene almak ve f1 kalesini e1’e getirmeye hazırlanmak.',
      neden: 'İki tarafın da izole piyonu olan açık konumlarda şah güvenliği önce gelir. 11.Bf4 ise 11...g5 ile kovalanırdı (Motor: +0.2).',
      diger: [
        { move: '11.Bf4', text: '11...g5 12.Bh2 ile fil kovalanır, ama Siyahın şah kanadı da zayıflar (Motor: +0.2).' },
        { move: '11.Na4', text: 'c5 karesine yönelir (Motor: +0.1); şah merkezdeyken yavaş.' },
      ],
    },
    '11b': {
      text: '11...g5: Siyah şah kanadında alan kazanır; f4 karesini Beyazın filinden alır.',
      amac: 'Bf4’ü önlemek, ...g4 ile f3 atını kovma fikrini hazırlamak ve şah kanadında inisiyatif almak.',
      neden: 'Siyahın f6–g5 piyonları kara kareleri kontrol eder ve e3 filinin f4’e çıkmasını engeller. Bedeli f5 ve h5 karelerinin zayıflamasıdır. Motor 11...Be6 ve 11...Nf5’i biraz daha iyi buluyor (+0.5’e karşı +0.7); fark büyük değil.',
      diger: [
        { move: '11...Be6', text: '12.Re1 Bf7 ile d5 korunur ve sağlam bir konum oluşur (Motor: +0.5).' },
        { move: '11...Nf5', text: 'At hemen d4’e baskı yapar; 12.Re1 Be6 (Motor: +0.5).' },
      ],
    },
    '12w': {
      text: '12.Re1: Kale açık e-hattına gelir.',
      amac: 'e-hattını kontrol etmek ve ileride Be3 ile birlikte e-hattında baskı kurmak.',
      neden: 'Açık hat kaleye aittir; e-hattında ayrıca Siyahın e7 atı da durmaktadır. Motor 12.Re1’i en iyi buluyor (+0.5–0.7).',
      diger: [
        { move: '12.Bd2', text: 'Fil d2’de esnek kalır; 12...Nf5 13.Re1 Be6 (Motor: +0.6).' },
        { move: '12.Na4', text: 'c5 karesine yönelir; 12...Kh8 13.Bd2 (Motor: +0.5).' },
      ],
    },
    '12b': {
      text: '12...Bf5: Fil f5’te gelişir.',
      amac: 'Beyaz kareli fili aktif bir yere koymak ve kalelerin birleşmesini sağlamak.',
      neden: 'Fil f5’ten b1–h7 çaprazına bakar ve d3 karesini kontrol eder. Motor 12...Bf5’i en iyi buluyor (+0.5).',
      diger: [
        { move: '12...Be6', text: 'd5’i korur; 13.Ba6 Bc8 gibi hatlar (Motor: +0.6).' },
        { move: '12...Re8', text: 'e-hattında karşı çıkar; 13.Bd2 Nf5 (Motor: +0.6).' },
      ],
    },
    '13w': {
      text: '13.Be3: Fil e3’te d4 piyonunu korur ve e-hattını kapatır.',
      amac: 'd4’ü sağlamlaştırmak ve fili Siyahın g5–f6 piyonlarına karşı savunmada kullanmak.',
      neden: 'Fil e3’te sağlam ama ileride ...Nf5 ile hedef olacaktır. Motor 13.Bd2’yi tercih ediyor (+0.6’ya karşı +0.4): d2’de fil ...Nf5 ile saldırıya uğramaz ve e-hattı kalenin kontrolünde kalır.',
      diger: [
        { move: '13.Bd2', text: '13...Bg6 14.Rc1 Re8 ile Beyaz sağlam ve esnek kalır (Motor: +0.6).' },
        { move: '13.Qb3', text: 'd5 ve b7’ye baskı yapar; 13...Bg6 14.Bd2 Rb8 (Motor: +0.5).' },
      ],
    },
    '13b': {
      text: '13...Bg6: Fil g6’ya çekilir.',
      amac: 'Fili ...g4 ilerleyişi ve olası Nh4 saldırılarından korumak, h7 ve h5 karelerini kontrol etmek.',
      neden: 'Fil f5’te Bd3 ile değişime ya da ...g4 sonrası Nh4 ile saldırıya açık kalabilirdi. g6’da şahın önünü de sağlamlaştırır. Motor 13...Bg6’yı en iyi buluyor (+0.3).',
      diger: [
        { move: '13...Re8', text: 'e-hattında karşı çıkar; 14.h4 h6 15.hxg5 fxg5 (Motor: +0.5).' },
        { move: '13...Rf7', text: 'Kale f7’de ikinci yatayı korur (Motor: +0.45).' },
      ],
    },
    '14w': {
      text: '14.Rc1: Kale c-hattına gelir.',
      amac: 'Açık c-hattını kontrol etmek ve c6 atına baskı yapmak.',
      neden: 'c-hattı tamamen açıktır ve c6 atı Siyahın d5 ve d4 üzerindeki baskısının anahtarıdır. Motor 14.a3 ve 14.Rc1’i eşit görüyor (+0.3–0.4).',
      diger: [
        { move: '14.a3', text: '...Nb4’ü önler; 14...Qd7 15.Rc1 (Motor: +0.4).' },
        { move: '14.Bd3', text: 'Beyaz kareli filleri değiştirmeyi önerir; 14...Qd7 15.Rc1 Bxd3 16.Qxd3 (Motor: +0.3).' },
      ],
    },
    '14b': {
      text: '14...Qd7: Vezir d7’ye gelir; kaleler birleşir.',
      amac: 'Kaleleri bağlamak ve d5’i korumak; ileride ...Rad8 ile d-hattını güçlendirmek.',
      neden: 'Vezir d7’de d5’i, g4’ü ve h3’ü izler. Motor 14...Re8’i biraz daha iyi buluyor (+0.35’e karşı +0.45).',
      diger: [
        { move: '14...Re8', text: 'e-hattında karşı koyar; 15.Bd3 Qd7 (Motor: +0.35).' },
        { move: '14...Rc8', text: 'c-hattında karşı çıkar; 15.Bd2 Re8 16.Qb3 (Motor: +0.4).' },
      ],
    },
    '15w': {
      text: '15.h4: Beyaz g5 piyonuna saldırır.',
      amac: 'Siyahın şah kanadı piyonlarını sorgulamak ve h-hattını açmak.',
      neden: 'Adams Siyahın ...g5 ile aldığı alanı kabul etmek istemedi. Ama motor bu hamleyi beğenmiyor (+0.5’ten +0.2–0.0’a): h4 kendi şahının önünü de açar ve 15...h6 sonrası değişimler Siyahın f-hattını açar. Daha iyisi c6 atına baskı yapan 15.Bb5 ya da 15.Qb3’tü.',
      diger: [
        { move: '15.Bb5', text: '15...Rac8 16.Nd2 h6 17.Qa4 ile c6 atı bağlanır ve d5 zayıflar (Motor: +0.6).' },
        { move: '15.Qb3', text: 'd5 ve b7’ye baskı; 15...Rfd8 16.Na4 (Motor: +0.4–0.5).' },
      ],
    },
    '15b': {
      text: '15...h6: Siyah g5’i h-piyonuyla destekler.',
      amac: 'g5 piyonunu korumak ve h4xg5 sonrası piyonla geri alma imkânı sağlamak.',
      neden: 'Doğal savunma hamlesi. Motor 15...Nf5’i de eşit görüyor (+0.3): 16.Nxd5 Kh8 ile Siyah piyon karşılığı oyun alırdı. 15...g4 ise 16.Nh2 h5 ile kapalı bir yapı yaratırdı (+0.6).',
      diger: [
        { move: '15...Nf5', text: '16.Nxd5 Kh8 17.Nc3 Nxe3 ile Siyah e3 filini alır, piyon karşılığı oyun kurar (Motor: +0.3).' },
        { move: '15...g4', text: '16.Nh2 h5 ile hat kapanır, ama g4 piyonu hedef olur (Motor: +0.6).' },
      ],
    },
    '16w': {
      text: '16.hxg5: Beyaz g5’te değişir ve h-hattını açar.',
      amac: 'Gerginliği çözmek ve Siyahın şah kanadı piyonlarını dağıtmak.',
      neden: 'h4 yapıldıktan sonra bu değişim mantıklıdır; aksi halde Siyah ...g4 ile hattı kapatırdı. Motor 16.Na4’ü de eşit görüyor (+0.3).',
      diger: [
        { move: '16.Na4', text: '16...Qd6 17.hxg5 hxg5 18.Qb3 ile c5 karesi ve d5’e baskı (Motor: +0.3).' },
        { move: '16.Bb5', text: '16...Rac8 17.hxg5 hxg5 (Motor: +0.2).' },
      ],
    },
    '16b': {
      text: '16...fxg5: Siyah f-piyonuyla alır; f-hattı kaleye açılır.',
      amac: 'f8 kalesini f-hattında aktifleştirmek ve f2’ye baskı kurmak.',
      neden: 'Motor 16...hxg5’i daha sağlam buluyor (+0.25’e karşı +0.5): f6 piyonu yerinde kalır ve e5 karesi kontrol altında olur. 16...fxg5 sonrası e5 karesi Beyaz atına açılır (17.Ne5!), ama Siyah f-hattını kazanır. 16...Nf5? ise 17.gxh6 ile bir piyon kaybettirirdi (+1.9).',
      diger: [
        { move: '16...hxg5', text: '17.Bb5 a6 18.Bf1 Rae8 ile sağlam yapı korunur (Motor: +0.25).' },
        { move: '16...Nf5', text: '17.gxh6 Nxe3 18.fxe3 Bxh6 ile Siyah bir piyon eksik kalır (Motor: +1.9).' },
      ],
    },
    '17w': {
      text: '17.Nh2?!: At h2’ye çekilir; ...g4 tehdidinden kaçar ve Bg4 ya da Nf1–g3 yolunu açar.',
      amac: 'Atı ...g4 ile kovalanmadan önce çekmek ve g4 karesini kontrol etmek; ardından at f1 üzerinden g3’e gidecek.',
      neden: 'Adams ...g4 ile tempo kaybetmek istemedi, ama at h2’de pasif kalır ve d4 bir koruyucusunu kaybeder. Motor bunu oyunun ilk ciddi hatası sayıyor (+0.5’ten −0.5’e). Doğrusu **17.Ne5!** idi: e5 karesi 16...fxg5 ile Beyaz atına açılmıştı.',
      diger: [
        { move: '17.Ne5', text: '17...Bxe5 18.dxe5 d4 19.Bc4+ Kh7 20.Nb5 ile Beyaz izole piyondan kurtulur, Siyahın g7 filini değişir ve kara karelere hâkim olur (Motor: +0.5).' },
        { move: '17.b4', text: 'Vezir kanadında alan alır; 17...Nf5 18.b5 (Motor: +0.2–0.3).' },
      ],
    },
    '17b': {
      text: '17...Kh8: Şah köşeye çekilir.',
      amac: 'Şahı g8–a2 çaprazından (Bc4 ve Qb3 fikirleri) ve g-hattından uzaklaştırmak; g8’i kaleye açmak.',
      neden: 'd5 piyonu ileride değişirse g8–a2 çaprazı açılabilir; şah h8’de daha güvendedir. Motor 17...Rad8’i biraz daha iyi buluyor (−0.45’e karşı −0.2), çünkü hemen kaleyi d-hattına getirmek daha aktiftir.',
      diger: [
        { move: '17...Rad8', text: '18.Qd2 Nf5 19.Bg4 Qd6 ile Siyahın taşları aktif (Motor: −0.45).' },
        { move: '17...Nf5', text: 'At hemen f5’e gelir; 18.Bf3 Bf7 (Motor: −0.4).' },
      ],
    },
    '18w': {
      text: '18.Bf3: Fil f3’ten d5 piyonuna baskı yapar.',
      amac: 'd5’e baskıyı artırmak ve fili ileride g4’e getirip f5 atını değişmeye hazırlamak.',
      neden: 'Beyaz Siyahın izole piyonunu hedef alarak karşı oyun arıyor. Motor 18.Qd2 ya da 18.Bg4’ü biraz daha iyi buluyor (−0.25’e karşı −0.4–0.55).',
      diger: [
        { move: '18.Bg4', text: 'Doğrudan g4’e; 18...Nf5 19.Nf3 Rad8 20.Qd2 (Motor: −0.25).' },
        { move: '18.Qd2', text: '18...Nf5 19.Bg4 Qf7 20.Nf3 ile at aktif kareye döner (Motor: −0.25).' },
      ],
    },
    '18b': {
      text: '18...Rad8: Kale d-hattına gelir ve d5’i korur.',
      amac: 'd5 piyonunu sağlamlaştırmak ve d-hattında d4’e baskıyı hazırlamak.',
      neden: 'Bf3 d5’e saldırdığı için kalenin d-hattına gelmesi doğaldır. Motor 18...Rad8’i en iyi buluyor (−0.45).',
      diger: [
        { move: '18...Rae8', text: 'e-hattında karşı çıkar; 19.Qd2 Qd8 20.Bg4 (Motor: −0.4).' },
        { move: '18...Nb4', text: 'At d3’e yönelir; 19.Be2 Rad8 20.a3 Nbc6 ile geri döner (Motor: −0.3).' },
      ],
    },
    '19w': {
      text: '19.Nf1: At f1 üzerinden g3’e yönelir.',
      amac: 'h2’deki atı oyuna geri getirmek; g3’ten f5 ve h5 karelerine bakacak.',
      neden: 'h2 atı oyundan kopuk durduğu için yeniden yerleştirilmeliydi. Ama bu yavaş manevra Siyaha ...Nf5 ile d4 ve e3’e baskı kurma zamanı verir; motor 19.Qd2 ya da 19.Bg4’ü tercih ediyor (−0.45’e karşı −0.8).',
      diger: [
        { move: '19.Bg4', text: '19...Nf5 20.Qd2 Qf7 21.Bxf5 ile f5 atı hemen değişilir (Motor: −0.45).' },
        { move: '19.Qd2', text: '19...Qe8 20.Bg4 Qf7 21.Nf3 ile at f3’e döner (Motor: −0.45).' },
      ],
    },
    '19b': {
      text: '19...Nf5: At f5’e gelir; d4 ve e3’e baskı yapar.',
      amac: 'd4 piyonuna üçüncü kez saldırmak ve e3 filini ...Nxe3 ile değişmekle tehdit etmek.',
      neden: 'f5 atı Siyahın en güçlü taşıdır: d4’e, e3’e, g3’e ve h4’e bakar. Motor 19...Nf5’i en iyi buluyor (−0.8).',
      diger: [
        { move: '19...Nb4', text: 'At d3’e yönelir; 20.Be2 Nf5 21.a3 Nc6 (Motor: −0.45–0.5).' },
        { move: '19...Na5', text: 'c4’e yönelir (Motor: −0.2), ama d4 üzerindeki baskıyı azaltır.' },
      ],
    },
    '20w': {
      text: '20.Bg4: Fil g4’ten f5 atını sorgular.',
      amac: 'Siyahın en aktif taşını değişmek ve f5 karesini zayıflatmak.',
      neden: 'f5 atı d4’ü ve e3’ü sıkıştırıyordu; onu kendi beyaz kareli filiyle değişmek mantıklıdır. Motor 20.Bh5 ile 20.Bg4’ü yakın görüyor (ikisi de −0.6 ile −1.0 arası); 20.Bxd5? ise 20...Ncxd4 ile Siyahın taşlarını aktifleştirir (−1.0).',
      diger: [
        { move: '20.Bh5', text: '20...Qf7 21.Bxg6 Qxg6 ile beyaz kareli filler değişir (Motor: −0.9).' },
        { move: '20.Bxd5', text: '20...Ncxd4 21.Ng3 Nxe3 22.Rxe3 ile Siyah taşlarını açar (Motor: −1.0).' },
      ],
    },
    '20b': {
      text: '20...Qf7: Vezir f7’ye gelir ve f-hattında kaleyle birleşir.',
      amac: 'f2’ye baskı yapmak ve f5 atını ikinci kez korumak.',
      neden: 'Vezir f7’de f-hattında batarya kurar; Bxf5 olursa vezirle ya da filleriyle geri alabilir. Motor 20...Nxe3’ü de iyi buluyor (−0.7/−1.0): 21.fxe3 sonrası Beyazın e3 ve d4 piyonları zayıf kalır.',
      diger: [
        { move: '20...Nxe3', text: '21.fxe3 Qf7 22.Qf3 h5 ile Siyah fil çiftini alır ve e3’ü hedef yapar (Motor: −0.7/−1.0).' },
        { move: '20...Qd6', text: '21.Bxf5 Rxf5 22.a3 ile benzer konumlar (Motor: −0.55/−0.7).' },
      ],
    },
    '21w': {
      text: '21.Bxf5: Fil f5 atını alır.',
      amac: 'Siyahın en tehlikeli taşını ortadan kaldırmak ve d4 üzerindeki baskıyı azaltmak.',
      neden: 'Bu hamle hemen hemen zorunluydu: 21.Ng3? 21...Nxe3 22.fxe3 Qf2+ ile şaha saldırı gelir (Motor: −1.75), 21.Qf3? ise 21...Nfxd4 ile d4 düşer (−1.7). Motor 21.Bxf5’i açık ara en iyi buluyor (−0.6).',
      diger: [
        { move: '21.Ng3', text: '21...Nxe3 22.fxe3 Qf2+ 23.Kh2 ile Siyahın veziri Beyaz şahının dibine girer (Motor: −1.75).' },
        { move: '21.Qf3', text: '21...Nfxd4 22.Qxf7 Rxf7 ile d4 düşer (Motor: −1.7).' },
      ],
    },
    '21b': {
      text: '21...Bxf5: Fil geri alır.',
      amac: 'Malzemeyi eşitlemek ve beyaz kareli fili f5’te aktif tutmak.',
      neden: '21...Qxf5 de eşit ölçüde iyiydi (Motor: −0.6/−0.7). Fille almak veziri f-hattında tutar ve fil f5’ten b1–h7 çaprazını kontrol eder. 21...Bh5?? ise bir taş kaybettirirdi (+4.6).',
      diger: [
        { move: '21...Qxf5', text: '22.Ng3 Qf7 23.Nce2 ile benzer konum (Motor: −0.6).' },
        { move: '21...Bh5', text: '22.Be6 Qg6 23.Bg4 ile Siyah bir taş eksik kalır (Motor: +4.6).' },
      ],
    },
    '22w': {
      text: '22.Ng3: At g3’ten f5 filine saldırır.',
      amac: 'Atı nihayet aktif bir kareye getirmek ve f5 filini kovalamak.',
      neden: 'f1 atının planı buydu: g3’ten f5 ve h5 karelerine bakar. Motor 22.Ne2 ile 22.Ng3’ü eşit görüyor (−0.6).',
      diger: [
        { move: '22.Ne2', text: 'c3 atı d4’ü korumak için e2’ye gelir; 22...Nb4 23.Rc3 Nxa2 gibi keskin hatlar (Motor: −0.6).' },
        { move: '22.a3', text: '...Nb4’ü önler; 22...Na5 23.Nd2 (Motor: −0.7/−0.8).' },
      ],
    },
    '22b': {
      text: '22...Bg6: Fil g6’ya çekilir.',
      amac: 'Fili korumak ve şahın önündeki beyaz kareleri (h7, f7, h5) kontrol etmek.',
      neden: 'Nxf5 ile fil değişirse Siyahın beyaz kareleri zayıflardı. Motor 22...Bg6’yı en iyi buluyor (−0.6/−0.7). 22...Kg8 ise 23.Nxf5 Qxf5 ile değişime izin verir ve Siyahın avantajı azalır (−0.2).',
      diger: [
        { move: '22...Bh7', text: 'Fil h7’de; 23.Na4 Bg6 ile geri döner (Motor: −0.45/−0.55).' },
        { move: '22...Kg8', text: '23.Nxf5 Qxf5 24.Ne2 Rf7 ile Siyahın üstünlüğü azalır (Motor: −0.2).' },
      ],
    },
    '23w': {
      text: '23.Qd2: Vezir d2’de d4’ü korur ve g5 piyonunu izler.',
      amac: 'Veziri merkeze yakın tutmak, d4’ü korumak ve Be3 ile g5’e baskı kurmak.',
      neden: 'Vezir d2’de hem savunma (d4) hem de saldırı (g5) görevi yapar. Motor 23.Qd2 ile 23.Nce2’yi eşit görüyor (−0.55).',
      diger: [
        { move: '23.Nce2', text: '23...Rfe8 24.Qd2 Bf8 ile at d4’ü korur (Motor: −0.6).' },
        { move: '23.Na4', text: 'c5 karesine yönelir; 23...h5 24.Nc5 (Motor: −0.75).' },
      ],
    },
    '23b': {
      text: '23...Qf6: Vezir f6’dan d4’e baskı yapar.',
      amac: 'Vezir, g7 fili ve c6 atıyla d4’e üçlü baskı kurmak.',
      neden: 'Siyah d4’e baskıyı artırmak istedi. Motor 23...Nb4’ü daha güçlü buluyor (−0.9’a karşı −0.3): at d3’e girip c1, e1 ve f2’ye saldırırdı. 23...Qf6 sonrası Beyaz 24.Nce2 ile d4’ü sağlamlaştırır.',
      diger: [
        { move: '23...Nb4', text: '24.Rf1 Nd3 25.Rc2 Nf4 ile at Beyaz kampına girer (Motor: −0.9).' },
        { move: '23...Kg8', text: '24.Na4 Qf6 25.Ne2 ile Siyah biraz üstün kalır (Motor: −0.55).' },
      ],
    },
    '24w': {
      text: '24.Nce2: At e2’den d4’ü korur.',
      amac: 'd4’ü ikinci bir taşla korumak ve atı f4 karesine bağlamak.',
      neden: 'd4’e üç Siyah taş saldırıyordu; at e2’de bu baskıyı karşılar. Motor 24.Nce2’yi en iyi buluyor (−0.3/−0.45).',
      diger: [
        { move: '24.Rf1', text: '24...Nxd4 25.f4 g4 ile Siyah piyon kazanır (Motor: −0.5).' },
        { move: '24.Red1', text: '24...Rf7 25.Qe2 Bf8 (Motor: −0.6).' },
      ],
    },
    '24b': {
      text: '24...Rd7: Kale d7’ye gelir; ikinci yatayı ve f-hattını hazırlar.',
      amac: 'Kaleyi esnek tutmak: ...Rdf7 ile f-hattına ya da ...Re7 ile e-hattına geçebilir.',
      neden: 'Kale d7’de çok yönlüdür, ama motor bu hamleyi gereksiz yavaş buluyor (−0.3’ten 0.0’a). Daha iyisi 24...Qe7 ya da 24...Rde8 idi: e-hattında karşı koymak ve vezir kanadında ...a6–b5 hazırlamak.',
      diger: [
        { move: '24...Qe7', text: '25.a3 Kh7 26.b4 a6 ile Siyah üstünlüğü korur (Motor: −0.35).' },
        { move: '24...Rde8', text: '25.Rc5 Qf7 26.b4 h5 (Motor: −0.25/−0.35).' },
      ],
    },
    '25w': {
      text: '25.f4: Beyaz f-piyonuyla g5’e saldırır.',
      amac: 'Siyahın şah kanadı piyon zincirini sorgulamak ve f5 karesini almak.',
      neden: 'Adams, Siyahın g5 piyonunun f4 karesini kontrol etmesine son vermek istedi. Motor 25.f4 ve 25.Rf1’i eşit görüyor (0.0): f4 e3 filinin önünü kısmen kapatır, ama f5 karesine yol açar.',
      diger: [
        { move: '25.Rf1', text: 'Önce f-hattını hazırlar; 25...Re7 26.f4 (Motor: 0.0).' },
        { move: '25.b4', text: 'Vezir kanadında alan alır (Motor: −0.25).' },
      ],
    },
    '25b': {
      text: '25...g4?!: Siyah piyonu ilerletir ve hattı kapatır.',
      amac: 'g-hattını kapatmak, f3 karesini kontrol etmek ve Beyazın f4–f5 planına engel olmaya çalışmak.',
      neden: 'Siyah açılan bir şah kanadından kaçındı. Ama 25...g4 f5 karesini Beyaza verir ve g4 piyonu sabit bir hedef olur. Motor 25...gxf4’ü öneriyor (0.0’a karşı +0.75/+0.9): 26.Nxf4 Rdf7 ile Siyahın taşları aktif kalır.',
      diger: [
        { move: '25...gxf4', text: '26.Nxf4 Qg5 ya da 26...Rdf7 ile Siyahın taşları açılan hatlarda aktif (Motor: 0.0/+0.1).' },
        { move: '25...Rdf7', text: '26.fxg5 hxg5 27.Rf1 ile f-hattında kaleler karşılaşır (Motor: +0.2/+0.4).' },
      ],
    },
    '26w': {
      text: '26.Rf1: Kale f1’e gelir ve f-piyonunu destekler.',
      amac: 'f-hattında kaleyi hazırlamak ve f5 ilerleyişini desteklemek.',
      neden: 'Adams önce f5’i hazırlamak istedi, ama bu bir tempo kaybıydı: Siyah 26...Bf5 ile kareyi kapattı. Motor **26.f5!** hamlesini öneriyor (+0.6/+0.7): 26...Bxf5 27.Rf1 ile f-hattı açılır ve Nf4 gelir.',
      diger: [
        { move: '26.f5', text: '26...Bxf5 27.Rf1 Qe6 28.Nf4 ile f-hattında f5 fili, f6 veziri ve f8 kalesi Beyazın baskısı altında kalır (Motor: +0.6/+0.7).' },
        { move: '26.Kf2', text: 'Şahı merkeze yaklaştırır (Motor: −0.8); riskli ve pasif.' },
      ],
    },
    '26b': {
      text: '26...Bf5: Fil f5’e gelir ve beyaz kareyi kapatır.',
      amac: 'f5 karesini Beyazın piyonuna ve atına karşı korumak.',
      neden: 'Beyazın f5 ilerleyişi tehdidi vardı; fil kareyi doğrudan işgal eder. Motor 26...Bf5 ile 26...Ne7’yi eşit görüyor (−0.1/0.0). 26...Qe6? ise 27.f5! ile f5 ilerlemesine izin verirdi (+0.4/+0.7).',
      diger: [
        { move: '26...Ne7', text: 'At f5’e gelecek; 27.f5 Nxf5 28.Nxf5 Bxf5 (Motor: 0.0).' },
        { move: '26...Qe6', text: '27.f5 Bxf5 28.Nf4 Qe8 ile Beyaz inisiyatif alır (Motor: +0.4/+0.7).' },
      ],
    },
    '27w': {
      text: '27.Nxf5: At fili alır.',
      amac: 'Siyahın beyaz kareli filini değişmek ve f5 karesindeki kontrolü azaltmak.',
      neden: 'Bu değişimle Beyazın atları Siyahın filine karşı kazanır ama Siyahın veziri f5’e gelir. Motor 27.Nh5 ve 27.Rce1’i de eşit görüyor (−0.2): at h5’ten g7 filine saldırırdı.',
      diger: [
        { move: '27.Nh5', text: '27...Qg6 28.Neg3 Ne7 ile at h5’te aktif ama Siyah da rahat (Motor: −0.2).' },
        { move: '27.Rce1', text: '27...Ne7 28.Nh5 Qg6 (Motor: −0.25).' },
      ],
    },
    '27b': {
      text: '27...Qxf5: Vezirle geri alınır.',
      amac: 'Malzemeyi eşitlemek; vezir f5’te aktif bir kareye gelir.',
      neden: 'Bu zorunluydu: başka bir hamle bir taş kaybettirirdi. Örneğin 27...Re8?? 28.Nxg7 ile Beyaz bir taş fazlası kalır (Motor: +5.2).',
      diger: [
        { move: '27...Re8', text: '28.Nxg7 Rxg7 29.Ng3 ile Siyah bir taş eksik (Motor: +5.2).' },
      ],
    },
    '28w': {
      text: '28.Ng3: At yeniden g3’e gelir ve f5 vezirine saldırır.',
      amac: 'Tempo kazanarak atı aktif bir kareye getirmek; g3’ten h5 ve f5’e bakacak.',
      neden: 'At e2’den g3’e gelerek vezire saldırır ve f5 karesini hedef alır. Motor 28.Ng3’ü en iyi buluyor (−0.15/−0.35); 28.Bf2 ya da 28.Kf2 daha pasif (−0.6/−0.8).',
      diger: [
        { move: '28.Bf2', text: '28...Rdf7 29.Rc3 h5 ile Siyah f-hattında aktif (Motor: −0.6/−0.7).' },
        { move: '28.b4', text: 'Vezir kanadında alan; 28...h5 29.Ng3 Qh7 (Motor: −0.6).' },
      ],
    },
    '28b': {
      text: '28...Qe6: Vezir e6’ya çekilir ve e-hattını tutar.',
      amac: 'e3 filine baskı yapmak ve e-hattında kaleyle birleşmek.',
      neden: 'Vezir e6’da e3’e ve d5’i korumaya bakar. Motor 28...Qh7’yi biraz daha iyi buluyor (−0.2’ye karşı 0.0): vezir h7’den h-hattında Beyaz şahına baskı yapardı.',
      diger: [
        { move: '28...Qh7', text: '29.f5 Rdf7 30.Rc5 Ne7 ile f5 piyonuna baskı (Motor: −0.2).' },
        { move: '28...Qf6', text: '29.f5 Qh4 30.Bf2 Qg5 (Motor: 0.0/+0.2).' },
      ],
    },
    '29w': {
      text: '29.Rce1: Kale e-hattına gelir; Beyaz e-hattında kaleleri ikiler.',
      amac: 'e-hattını kontrol etmek ve e3 filini korumak.',
      neden: 'Siyahın veziri e-hattında olduğu için Beyaz kaleyi oraya getirdi. Motor 29.Rce1’i en iyi buluyor (+0.2).',
      diger: [
        { move: '29.f5', text: '29...Qxe3+ 30.Qxe3 Bxd4 31.Qxd4+ ile değişimler eşitliğe gider (Motor: 0.0/+0.15).' },
        { move: '29.Rf2', text: 'İkinci yatayı korur (Motor: 0.0).' },
      ],
    },
    '29b': {
      text: '29...Qd6: Vezir d6’dan f4 piyonuna baskı yapar.',
      amac: 'f4’ü hedef almak ve e-hattından çıkıp vezirin kalelerle karşı karşıya kalmasından kaçınmak.',
      neden: 'Vezir e6’da Re1’in karşısındaydı; d6’da hem f4’e bakar hem de d5’i korur. Motor 29...Qd6 ile 29...Ne7’yi eşit görüyor (+0.2).',
      diger: [
        { move: '29...Ne7', text: '30.f5 Nxf5 31.Nxf5 Rxf5 ile at aktifleşir (Motor: +0.1/+0.2).' },
        { move: '29...Qf6', text: '30.f5 Qh4 31.Bf2 Qg5 (Motor: +0.4).' },
      ],
    },
    '30w': {
      text: '30.Qd1: Vezir d1’e çekilir; g4 piyonuna bakar.',
      amac: 'g4 piyonunu hedef almak ve d4’ü d-hattından korumak.',
      neden: 'Vezir d1’den hem g4’e (d1–h5 çaprazı) hem de d4’e bakar; böylece Qxg4 tehdidi doğar. Motor 30.Qd1’i en iyi buluyor (+0.2–0.3).',
      diger: [
        { move: '30.Qe2', text: 'Vezir e-hattında; 30...Re7 31.Kh2 h5 (Motor: +0.15).' },
        { move: '30.Kh2', text: 'Şah g3 atını korur (Motor: 0.0).' },
      ],
    },
    '30b': {
      text: '30...Re7: Kale e7’de e-hattına karşı çıkar.',
      amac: 'e-hattında Beyazın kalelerine karşı koymak ve e3 filine baskı yapmak.',
      neden: 'Bu hemen hemen tek iyi hamleydi: 30...Rdf7? 31.Qxg4 ile g4 düşer (Motor: +0.6), 30...Re8? ise 31.Nf5 ile at güçlü kareye girer (+0.9).',
      diger: [
        { move: '30...Rdf7', text: '31.Qxg4 Nxd4 32.Bc1 ile Beyaz piyon kazanır (Motor: +0.6).' },
        { move: '30...Re8', text: '31.Qxg4 ya da 31.Nf5 ile Beyaz üstün (Motor: +0.9).' },
      ],
    },
    '31w': {
      text: '31.Kh1: Şah h1’e gider.',
      amac: 'Şahı g1–a7 çaprazından uzaklaştırmak (d4 açılırsa Siyahın fili ve veziri bu çaprazdan şah çekebilir) ve g1 karesini e3 filine açmak.',
      neden: 'Adams önleyici bir şah hamlesi yaptı, ama şah h1’de g3 atını korumaz ve h-hattında kalır; bu, ileride 38...Qxh5’in şah olmasının da sebebiydi. Motor 31.Kh2’yi açıkça tercih ediyor (+0.15’e karşı −0.7): şah h2’de g3 atını korur.',
      diger: [
        { move: '31.Kh2', text: '31...h5 32.Nxh5 Qg6 33.Rh1 ile şah g3’ü korur ve h-hattında kale de oyuna girer (Motor: +0.15/+0.3).' },
        { move: '31.Qxg4', text: '31...Rxe3 32.Rxe3 Bxd4 33.Rf3 ile karmaşık bir oyun (Motor: −0.1/−0.15).' },
      ],
    },
    '31b': {
      text: '31...h5: Siyah g4 piyonunu h-piyonuyla destekler.',
      amac: 'Qxg4 tehdidini durdurmak ve ...h4 ile g3 atını kovalamaya hazırlanmak.',
      neden: 'Bu tek iyi hamleydi: g4 piyonu düşmek üzereydi. 31...Nb4 ya da 31...Rg8 Beyaza üstünlük verirdi (+0.2/+0.6). h5 piyonu ayrıca ...h4 ile g3 atını h5 ya da e2’ye kovalamayı tehdit eder.',
      diger: [
        { move: '31...Nb4', text: '32.Bd2 Rxe1 33.Qxe1 Nc2 ya da 32.a3 ile at kovalanır (Motor: +0.2/+0.5).' },
        { move: '31...Rg8', text: '32.Kh2 Qd7 33.f5 ile Beyaz inisiyatif alır (Motor: +0.6).' },
      ],
    },
    '32w': {
      text: '32.Bg1?: Fil g1’e çekilir; ama e-hattı açılır ve d4 ile f4 korumasız kalır.',
      amac: 'Fili e-hattından ve ...Nxd4/...Rxe3 kombinasyonlarından uzaklaştırmak; d4’ü fil ile çapraz üzerinden korumayı sürdürmek.',
      neden: 'e3 fili üç iş yapıyordu: e-hattını kapatıyor, d4’ü ve f4’ü koruyordu. Bg1 sonrası 32...Rxe1 gelir; 33.Qxe1 olursa vezir d-hattını terk eder ve d4’ü yalnızca g1 fili korur (33...Nxd4), 33.Rxe1 olursa 33...Qxf4 ile f4 düşer. Siyah ayrıca ...h4 ile g3 atını kovalamaya hazırdı. Motor **32.Nxh5!** öneriyor (−0.4/0.0): piyon alınır, 32...Qg6 33.Nxg7 Rxg7 ile g7 fili değişir. Maç hamlesinden sonra −1.3.',
      diger: [
        { move: '32.Nxh5', text: '32...Qg6 33.Nxg7 Rxg7 34.f5 ile Beyaz h5’i alır, Siyahın kara kareli filini değişir ve dengeyi korur (Motor: −0.4/0.0).' },
        { move: '32.b4', text: '32...h4 33.Nh5 Qg6 34.Nxg7 Rxg7 ile at kovalanır ve Siyah biraz üstün kalır (Motor: −0.8/−1.1).' },
        { move: '32.Qb3', text: '32...h4 33.Nh5 Qd7 (Motor: −1.1).' },
      ],
    },
    '32b': {
      text: '32...Rxe1: Siyah e-hattında kaleleri değişir.',
      amac: 'e1 kalesini ortadan kaldırıp Beyazın taşlarını d4 ve f4’ün savunmasından uzaklaştırmak.',
      neden: 'Bg1 e-hattını açınca bu değişim Siyaha bir piyon kazandırır: vezirle alınırsa d4, kaleyle alınırsa f4 düşer. Motor 32...Rxe1, 32...Qh6 ve 32...Qf6’yı eşit görüyor (−1.3/−1.4).',
      diger: [
        { move: '32...Qh6', text: '33.f5 Ref7 34.Re6 Qg5 ile Siyah g3 atına ve f5’e baskı yapar (Motor: −1.3/−1.4).' },
        { move: '32...Qf6', text: '33.Rxe7 Nxe7 34.Qe1 Ng8 ile d4’e baskı sürer (Motor: −1.25).' },
      ],
    },
    '33w': {
      text: '33.Qxe1: Vezir alır.',
      amac: 'f4 piyonunu korumak ve e-hattını vezirle tutmak.',
      neden: 'İki kötü seçenek arasında bir tercihti. 33.Rxe1 33...Qxf4 34.Nxh5 Qg5 ile f4’ü kaybettirirdi (Motor: −1.4); 33.Qxe1 f4’ü korur ama d4’ü bırakır (−1.6). Adams d4’ü vermeyi ve sonra h5’i geri almayı hesapladı. 33.Qd2/Qd3?? ise 33...Rxf1 ile bir kale kaybettirirdi (−6.5).',
      diger: [
        { move: '33.Rxe1', text: '33...Qxf4 34.Nxh5 Qg5 35.Ng3 ile f4 düşer, Siyah bir piyon önde kalır (Motor: −1.25/−1.4).' },
        { move: '33.Qd3', text: '33...Rxf1 34.Qxf1 Qh6 ile f1 kalesi düşer (Motor: −6.5).' },
      ],
    },
    '33b': {
      text: '33...Nxd4: Siyah d4 piyonunu alır.',
      amac: 'Piyon kazanmak ve atı merkezde güçlü bir kareye getirmek.',
      neden: 'Siyah malzemeyi hemen almayı seçti. Motor **33...Qh6!** hamlesini daha güçlü buluyor (−1.9’a karşı −0.75): 34.f5 h4 35.Ne2 ile g3 atı kovalanır, d4 piyonu ise kaçmaz. 33...Nxd4 sonrası değişimler Beyazın atını serbest bırakır ve 35.Nxh5 mümkün olur.',
      diger: [
        { move: '33...Qh6', text: '34.f5 h4 35.Ne2 Ne7 ile at kovalanır, f5 ve d4 piyonları sonra düşer (Motor: −1.7/−1.9).' },
        { move: '33...h4', text: '34.Nh5 Rf5 35.Qe2 Qg6 ile at h5’te sıkışır (Motor: −1.2).' },
        { move: '33...Ne7', text: '34.Qe2 Qf6 35.f5 (Motor: −1.1).' },
      ],
    },
    '34w': {
      text: '34.Bxd4: Fil atı alır.',
      amac: 'Merkezdeki güçlü atı ortadan kaldırmak.',
      neden: 'At d4’te e2, f3, f5 ve b3 karelerine bakıyordu; ondan kurtulmak doğaldı. Motor 34.Bxd4’ü en iyi buluyor (−0.5/−0.8). 34.f5 ya da 34.Qd1 benzer ama daha pasif (−0.7/−0.75).',
      diger: [
        { move: '34.f5', text: '34...Qf6 35.Qb4 Qh4+ 36.Bh2 ile Siyahın veziri aktifleşir (Motor: −0.7/−0.8).' },
        { move: '34.Qd1', text: '34...Nf5 35.Nxf5 Rxf5 36.Qd3 (Motor: −0.75/−0.85).' },
      ],
    },
    '34b': {
      text: '34...Bxd4: Fil geri alır; Siyah bir piyon önde.',
      amac: 'Malzemeyi geri almak ve fili d4’te merkezde tutmak.',
      neden: 'Bu zorunluydu: geri almazsa 35.Bxg7+ ile Beyaz taş kazanır. Örneğin 34...Qh6?? 35.Bxg7+ Qxg7 36.Nxh5 (Motor: +5.25).',
      diger: [
        { move: '34...Qh6', text: '35.Bxg7+ Qxg7 36.Nxh5 ile Beyaz bir taş fazlası kalır (Motor: +5.25).' },
      ],
    },
    '35w': {
      text: '35.Nxh5!: At h5 piyonunu alır; tek iyi hamle.',
      amac: 'Kaybedilen piyonu geri almak ve atı Siyah şahına yakın, aktif bir kareye getirmek.',
      neden: 'Beyaz hemen harekete geçmezse Siyah ...h4 ile atı kovalar ve bir piyon önde kalırdı. 35.Ne2 (−2.4) ya da 35.Kh2 (−3.25) Siyaha kalıcı bir üstünlük verir. Nxh5 ile malzeme eşitlenir, ama at h5’te h-hattında ve bir sonraki hamlede savunulması gerekir.',
      diger: [
        { move: '35.Ne2', text: '35...Re8 36.Qd2 Bb6 37.f5 ile Siyah bir piyon önde ve aktif (Motor: −2.3/−2.4).' },
        { move: '35.Kh2', text: '35...Qd8 36.Nxh5 Rf5 37.Kg3 ile şah açıkta kalır (Motor: −3.25/−3.5).' },
      ],
    },
    '35b': {
      text: '35...Qh6: Vezir h6’dan h5 atına saldırır; Qxh5+ tehdidi.',
      amac: 'h5 atını almak ve h-hattında Beyaz şahına (h1) şahla saldırmak.',
      neden: 'At h5’te tek korumasız taştır; üstelik h-hattında şahın önündedir. Motor 35...Qh6, 35...Qd8 ve 35...Rf5’i eşit görüyor (−0.2/0.0); Siyah en doğrudan saldırıyı seçti.',
      diger: [
        { move: '35...Rf5', text: '36.Qh4 Qh6 37.Qd8+ Kh7 ile vezirler karşılıklı şah çeker (Motor: 0.0).' },
        { move: '35...Qd8', text: '36.Qg3 Qg5 37.Qh2 Qh6 ile atın üzerindeki baskı sürer (Motor: −0.15).' },
      ],
    },
    '36w': {
      text: '36.Qh4!: Vezir h4’e gelir ve h5 atını korur.',
      amac: 'Atı korumak ve h-hattında vezirleri karşı karşıya getirerek ...Qxh5’i imkânsız kılmak.',
      neden: 'Tek savunma budur: 36...Qxh5?? 37.Qxh5+ ile vezir kaybedilir. Şah kaçarsa 36.Kh2? Qxh5+ 37.Kg3 Qf5 ile Beyaz bir taş eksik kalır (Motor: −4.2), 36.Rf3?? ise 36...Qxh5+ 37.Rh3 gxh3 ile kaybeder (−11). Adams’ın soğukkanlılığı burada oyunu kurtardı.',
      diger: [
        { move: '36.Kh2', text: '36...Qxh5+ 37.Kg3 Qf5 ile Siyah bir taş önde (Motor: −3.9/−4.2).' },
        { move: '36.Qg3', text: '36...Qxh5+ 37.Qh2 Rf5 ile Siyah bir taş önde (Motor: −4.8).' },
      ],
    },
    '36b': {
      text: '36...Rg8?!: Kale g8’e gelir ve g-hattında g4 piyonunu destekler.',
      amac: '...g3 ilerleyişini desteklemek ve g2’ye baskı yapmak.',
      neden: 'Siyah saldırıyı güçlendirmek istedi, ama motor **36...g3!** hamlesini öneriyor (−0.1/−0.15’e karşı +0.5): piyon hemen f2 ve h2 karelerini kontrol eder, Beyaz veziri g3 karesini kaybeder ve 37.Qh3 Bf2 ile Siyahın fili güçlü kalır. 36...Rg8 Beyaza 37.g3! ya da 37.Kh2 ile piyonu durdurma zamanı verir.',
      diger: [
        { move: '36...g3', text: '37.Qh3 Bf2 38.Rc1 Qh7 39.Qh4 ile Siyahın piyonu ve fili Beyaz şahını sıkıştırır (Motor: −0.1/−0.4).' },
        { move: '36...Rf5', text: '37.Qd8+ Kh7 38.Qd7+ Kg6 39.Qe6+ ile vezir şahları ve denge (Motor: 0.0).' },
      ],
    },
    '37w': {
      text: '37.Rd1: Kale d1’e gelir ve d4 filine saldırır.',
      amac: 'Kaleyi oyuna sokmak ve d4 fili ile d5 piyonunu hedef almak.',
      neden: 'Kale f1’de pasifti; d-hattında Siyahın fili ve piyonuna baskı yapar. Motor 37.Kh2 ve 37.g3’ü biraz daha iyi buluyor (+0.4’e karşı +0.2): g-piyonunu durdurmak önce gelir. Yine de Rd1 Siyahı fili hareket ettirmeye zorladı ve Siyah yanlış kareyi seçti.',
      diger: [
        { move: '37.Kh2', text: '37...g3+ 38.Kh3 Bxb2 39.Rf3 ile şah g3 piyonunu kontrol eder (Motor: +0.4).' },
        { move: '37.g3', text: '37...Bb6 38.Qf6+ Qxf6 39.Nxf6 ile g-piyonu durdurulur (Motor: +0.4).' },
      ],
    },
    '37b': {
      text: '37...Bf2?: Fil f2’ye gelir ve h4’teki vezire saldırır.',
      amac: 'Beyaz veziri h4’ten uzaklaştırıp h5 atının korumasını kaldırmak; Qxf2 olursa Qxh5+ ile şah çekip atı almak.',
      neden: 'Fikir taktik olarak doğrudur: 38.Qxf2 Qxh5+ ile Siyah taşı geri alır. Ama sonuçta Siyah fili ata değişir ve Beyazın veziri f2’den sonra d4’e gelerek şah ve d5 saldırısını yapabilecek konuma girer. Motor 37...Bxb2’yi tercih ediyor (+0.15’e karşı +0.6): Siyah piyon alır ve fil aktif kalır.',
      diger: [
        { move: '37...Bxb2', text: '38.Rd2 Ba3 39.Rxd5 g3 ile Siyah b2’yi alır, Beyaz d5’i (Motor: +0.15).' },
        { move: '37...Be3', text: '38.Rxd5 Bxf4 39.Qf2 Be3 ile fil aktif ama d5 düşer (Motor: +0.7/+0.9).' },
      ],
    },
    '38w': {
      text: '38.Qxf2: Vezir fili alır.',
      amac: 'Malzemeyi almak; Siyahın Qxh5+ ile atı geri alacağını hesaplamış olarak.',
      neden: 'Diğer seçenekler daha kötüydü: 38.g3 38...Bxg3 39.Qxg3 Qxh5+ ile eşitlik (Motor: 0.0), 38.Qh2? ise 38...g3 ile vezir tempo kaybederek kovalanır ve Siyah h5 atını almaya devam eder (−1.1). Qxf2 ile vezir f2’de merkeze ve d4 karesine yakın kalır.',
      diger: [
        { move: '38.g3', text: '38...Bxg3 39.Qxg3 Qxh5+ 40.Kg2 ile eşit bir konum (Motor: 0.0).' },
        { move: '38.Qh2', text: '38...g3 39.Qh3 d4 40.f5 ile Siyahın piyonları ilerler (Motor: −1.1).' },
      ],
    },
    '38b': {
      text: '38...Qxh5+: Vezir h5 atını şahla alır.',
      amac: 'Malzemeyi eşitlemek ve Beyaz şahına şahla tempo kazanmak.',
      neden: 'Bu zorunluydu: 38...g3? 39.Qd4+ Kh7 40.Qxd5 ile Beyaz hem atı hem piyonu tutar (Motor: +5.7). Ancak 38...Qxh5+ sonrası da Beyazın veziri merkezde, Siyahın şahı ise açıktır.',
      diger: [
        { move: '38...g3', text: '39.Qd4+ Kh7 40.Qxd5 ile Beyaz bir taş önde (Motor: +5.4/+5.7).' },
      ],
    },
    '39w': {
      text: '39.Kg1: Şah g1’e gider; tek hamle.',
      amac: 'Şahı h-hattından çıkarmak ve şah çekmeden kurtulmak.',
      neden: 'Başka yasal hamle olarak 39.Qh4?? vezirle araya girer, ama 39...Qxh4+ 40.Kg1 g3 ile Siyah mat eder (Motor: Siyah 6–8 hamlede mat). Şah g1’de vezir f2’nin yanındadır ve vezire d4’e gitme özgürlüğü verir.',
      diger: [
        { move: '39.Qh4', text: '39...Qxh4+ 40.Kg1 g3 41.Rxd5 Qxf4 ile Siyah kazanır (Motor: mat).' },
      ],
    },
    '39b': {
      text: '39...g3: Siyah piyonla f2 veziri saldırır.',
      amac: 'Veziri f2’den kovmak ve g3 piyonuyla Beyaz şahını sıkıştırmak; h2 ve f2 karelerini kontrol etmek.',
      neden: 'Siyah saldırıyı sürdürmek istedi; ...Qh2+ tehdidi doğar. Ama piyon Beyaz veziri d4’e, yani hem şaha hem d5’e saldıracağı kareye gönderir. Motor 39...g3, 39...Re8 ve 39...Kh7’yi yakın görüyor (+0.4–0.8); d5 piyonu zaten zayıftı.',
      diger: [
        { move: '39...Re8', text: '40.Qd4+ Kh7 41.Qxd5 Qxd5 42.Rxd5 ile yine d5 düşer (Motor: +0.5/+0.65).' },
        { move: '39...Kh7', text: 'Şahı önceden çaprazdan çıkarır; 40.Rd3 Qf5 41.Re3 Rf8 (Motor: +0.8).' },
      ],
    },
    '40w': {
      text: '40.Qd4+!: Vezir şah çeker ve aynı anda d5 piyonuna saldırır.',
      amac: 'Tempo kazanarak veziri merkeze getirmek ve d5’i kazanmak.',
      neden: 'Vezirin başka iyi kareleri yoktu: 40.Qf3? Qh2+ 41.Kf1 Re8 ile Siyahın saldırısı çok güçlü olur (Motor: −2.3), 40.Qc2? Qh2+ 41.Kf1 Qh1+ ise daha da kötü (−5.6). Qd4+ şah olduğu için Siyah ...Qh2+ için zaman bulamaz; d5’e hem vezir hem d1 kalesi saldırır. Motor: +0.5/+0.8.',
      diger: [
        { move: '40.Qf3', text: '40...Qh2+ 41.Kf1 Re8 42.Qc3+ ile şah açıkta kalır (Motor: −2.1/−2.3).' },
        { move: '40.Qc2', text: '40...Qh2+ 41.Kf1 Qh1+ 42.Ke2 ile Siyah kazanır (Motor: −5.2/−5.6).' },
      ],
    },
    '40b': {
      text: '40...Kh7: Şah h7’ye kaçar.',
      amac: 'Şahtan kurtulmak ve vezir ile kaleyi yerinde tutmak.',
      neden: 'En iyi savunma. 40...Rg7 41.Qxd5 Qxd5 42.Rxd5 ile kale pasif kalır (Motor: +1.4), 40...Qe5?? ise 41.Qxe5+ ile vezir kaybedilir ve mat gelir.',
      diger: [
        { move: '40...Rg7', text: '41.Qxd5 Qxd5 42.Rxd5 Rf7 ile kale g-hattını bırakır (Motor: +1.0/+1.4).' },
        { move: '40...Qe5', text: '41.Qxe5+ Kh7 42.Rxd5 ile Beyaz bir vezir önde ve mat yakın (Motor: mat).' },
      ],
    },
    '41w': {
      text: '41.Qxd5: Vezir d5 piyonunu alır ve vezir değişimi önerir.',
      amac: 'Piyon kazanmak ve vezirleri değişerek Siyahın karşı saldırısını söndürmek.',
      neden: 'Motor 41.Qxd5’i en iyi buluyor (+0.45/+0.9). 41.Qd3+ Kh6 42.Qxd5 ile de piyon alınır ama Siyahın kalesi e8’e gelir ve şah çekme şansları artar (0.0).',
      diger: [
        { move: '41.Qd3+', text: '41...Kh6 42.Qxd5 Re8 43.Qxh5+ ile denge (Motor: 0.0).' },
        { move: '41.Re1', text: '41...Qh2+ 42.Kf1 Qh1+ 43.Qg1 ile Siyahın vezir şahları sürer (Motor: −0.1/−0.2).' },
      ],
    },
    '41b': {
      text: '41...Qxd5: Siyah vezirleri değişir.',
      amac: 'Beyazın merkezdeki vezirini değiştirmek ve kale oyun sonuna geçmek.',
      neden: 'Bu hamle Siyahın son karşı oyun şansını da sildi. Motor 41...Kh6’yı öneriyor (+0.4’e karşı +1.1): vezirler kalınca Siyahın g3 piyonu ve veziri Beyaz şahını rahatsız eder, motorun ana çizgisi 42.Qd6+ Kh7 43.Qd7+ Kh6 ile tekrar gösteriyor. 41...Qg6? ise 42.Qxb7+ ile ikinci piyonu kaybettirir (+2.4).',
      diger: [
        { move: '41...Kh6', text: '42.Qd6+ Kh7 43.Qd7+ Kh6 ile vezirler tahtada kalır ve oyun berabere bitebilir (Motor: +0.4/+0.7).' },
        { move: '41...Qg6', text: '42.Qxb7+ Rg7 43.Qf3 ile Beyaz iki piyon önde (Motor: +2.1/+2.4).' },
      ],
    },
    '42w': {
      text: '42.Rxd5: Kale geri alır; Beyaz bir piyon önde.',
      amac: 'Malzemeyi geri almak ve kaleyi beşinci yatayda aktif tutmak.',
      neden: 'Zorunlu geri alma; başka bir kale hamlesi vezir kaybettirir ve 42.Rc1?? Qd4+ 43.Kh1 Rh8 ile mat gelir. Kale d5’te h5 ve g5 karelerine bakar: bu, sonraki şahlar için önemlidir.',
      diger: [
        { move: '42.Rc1', text: '42...Qd4+ 43.Kh1 Rh8 ile Siyah mat eder (Motor: mat).' },
      ],
    },
    '42b': {
      text: '42...Rc8?: Kale c-hattına geçer; ama g3 piyonu ve şah korumasız kalır.',
      amac: 'Kaleyi aktifleştirmek ve ...Rc2 ile Beyazın ikinci yatayına girmek; b2’yi ve g2’yi hedef almak.',
      neden: 'Aktif kale fikri doğruydu, ama sıra yanlıştı: şah h7’de kaldığı için 43.Rh5+ ve 44.Rg5+ ile kale tempo kazanarak g3’e ulaşır. Motor **42...Kh6!** öneriyor (+1.0’a karşı +3.5): şah g5 ve h5 karelerini kontrol eder, 43.Rd3 Rg4 44.Rf3 Kg6 ile g3 savunulur.',
      diger: [
        { move: '42...Kh6', text: '43.Rd3 Rg4 44.Rf3 Kg6 45.Kf1 Kf5 ile şah piyonun yanına gelir; Siyah direnebilir (Motor: +0.8/+1.0).' },
        { move: '42...Rf8', text: '43.Rh5+ Kg6 44.Rg5+ Kh6 45.Rxg3 Rxf4 ile Siyah f4’ü geri alır (Motor: +1.4).' },
        { move: '42...Rg6', text: '43.Kf1 Rb6 44.b3 ile g3 korunur ama kale pasif kalır (Motor: +1.8/+2.0).' },
      ],
    },
    '43w': {
      text: '43.Rh5+!: Kale şah çekerek g3’e doğru yola çıkar.',
      amac: 'Tempo kazanarak kaleyi g-hattına getirmek ve g3 piyonunu almak.',
      neden: 'Kale şah çektiği için Siyah ...Rc2 için zaman bulamaz. Şah g-hattına giderse 44.Rg5+ ile kale tekrar şah çeker ve g3’e geçer. Motor: +3.1/+3.3; 43.Kf1? Rc2 44.Rh5+ Kg6 45.Rg5+ Kf6 46.Rxg3 Rxb2 ile Siyah b2’yi geri alır (+0.1).',
      diger: [
        { move: '43.Kf1', text: '43...Rc2 ile kale ikinci yataya girer; Beyaz g3’ü alsa da b2 düşer (Motor: +0.1).' },
        { move: '43.Rd7+', text: '43...Kg6 44.Kf1 Rc2 45.Rxb7 Rf2+ ile Siyahın kalesi aktif (Motor: 0.0).' },
      ],
    },
    '43b': {
      text: '43...Kg6: Şah g6’ya gider.',
      amac: 'Şahı merkeze ve f4 piyonuna yaklaştırmak.',
      neden: 'Siyahın iyi bir seçeneği yoktu: 43...Kg7 de 44.Rg5+ Kf6 45.Rxg3 ile aynı sonuca varır (Motor: +3.4), 43...Kg8 ise 44.Rg5+ Kh7 45.Rxg3 ile daha kötü (+4.0/+4.25). Şah g6’da en azından f4’e yaklaşır.',
      diger: [
        { move: '43...Kg7', text: '44.Rg5+ Kf6 45.Rxg3 Kf5 ile aynı konum (Motor: +3.3/+3.4).' },
        { move: '43...Kg8', text: '44.Rg5+ Kh7 45.Rxg3 Rc4 ile şah daha uzakta (Motor: +4.0/+4.25).' },
      ],
    },
    '44w': {
      text: '44.Rg5+!: Kale ikinci kez şah çeker ve g-hattına geçer.',
      amac: 'g3 piyonuna g-hattından saldırmak; şah çektiği için Siyah savunma için tempo bulamaz.',
      neden: 'Bu tek hamleydi: 44.Kf1?? Kxh5 ile kale kaybedilir (Motor: −7.0/−7.8), 44.Rc5?? Rxc5 ise kaleyi doğrudan kaybettirir (−7.3). Motor: +3.2/+3.5.',
      diger: [
        { move: '44.Kf1', text: '44...Kxh5 ile kale düşer (Motor: −7.0/−7.8).' },
        { move: '44.Rc5', text: '44...Rxc5 ile Beyaz kalesi karşılıksız düşer (Motor: −7.3).' },
      ],
    },
    '44b': {
      text: '44...Kf6: Şah f6’ya çekilir.',
      amac: 'Şahı f4 piyonuna doğru getirmek; ...Kf5 ve ...Kxf4 planı.',
      neden: 'Motor 44...Kf6’yı en iyi buluyor (+3.1/+3.4). 44...Kh6 ya da 44...Kh7 şahı oyundan uzaklaştırır (+3.5/+4.4). Siyahın tek umudu şahı aktif tutup f4’ü geri almaktı.',
      diger: [
        { move: '44...Kh6', text: '45.Rxg3 Rc2 46.Rb3 Kh5 ile şah kenarda kalır (Motor: +3.5/+4.15).' },
        { move: '44...Kh7', text: '45.Rxg3 Rc4 46.Rb3 b6 (Motor: +4.35).' },
      ],
    },
    '45w': {
      text: '45.Rxg3: Kale g3 piyonunu alır. Beyaz iki piyon önde.',
      amac: 'Malzeme üstünlüğünü ikiye çıkarmak ve Beyaz şahını serbest bırakmak.',
      neden: 'g3 piyonu Beyaz şahını g1’de kilitliyordu; şimdi şah serbest. 45.Kf1? Rc2 46.Rxg3 Rxb2 ile b2 düşerdi (Motor: +0.1). 45.Rg6+?? ise 45...Kxg6 ile kaleyi verirdi. Motor: +3.3/+3.5.',
      diger: [
        { move: '45.Kf1', text: '45...Rc2 46.Rxg3 Rxb2 ile Siyah piyonu geri alır (Motor: +0.1/+0.2).' },
      ],
    },
    '45b': {
      text: '45...Kf5: Şah f4 piyonuna saldırır.',
      amac: 'f4 piyonunu geri almak ve şahı merkezde aktif tutmak.',
      neden: 'Siyahın tek pratik şansı f4’ü almaktır. Motor 45...Kf5’i en iyi buluyor (+3.1/+3.5). 45...Rc2 46.Rb3 ise b2’yi korur ve Siyahın kalesi pasifleşir (+3.7/+4.1).',
      diger: [
        { move: '45...Rc2', text: '46.Rb3 Kf5 47.Kh2 Kxf4 ile benzer, ama Beyaz şahı aktif (Motor: +3.7/+4.1).' },
        { move: '45...a6', text: '46.Rc3 Rd8 47.Kh2 Kf5 (Motor: +4.0).' },
      ],
    },
    '46w': {
      text: '46.Rg7: Kale yedinci yataya girer ve vezir kanadı piyonlarına saldırır.',
      amac: 'f4’ü savunmak yerine Siyahın a7 ve b7 piyonlarını toplamak.',
      neden: 'Beyaz f4’ü savunmaya çalışmak yerine kaleyi aktifleştirdi: f4 piyonu düşse bile a7 ve b7 piyonları da tehlikede. Kale oyun sonunun temel kuralı: aktif kale pasif kaleden değerlidir. Motor 46.Rg7’yi en iyi buluyor (+3.2/+3.5).',
      diger: [
        { move: '46.Rc3', text: '46...Rd8 47.Rc7 Kxf4 48.Rxb7 ile benzer (Motor: +3.0/+3.4).' },
        { move: '46.Rf3', text: 'f4’ü korur ama kale pasif; 46...a6 47.Kh2 b5 (Motor: +3.3).' },
      ],
    },
    '46b': {
      text: '46...b6: Siyah b-piyonunu ilerletir.',
      amac: 'b7 piyonunu yedinci yataydaki kalenin saldırısından kurtarmak.',
      neden: 'Ama a7 korumasız kalır. Motor 46...Kxf4’ü tercih ediyor (+3.4/+3.6’ya karşı +3.7/+4.1): önce f4 alınır, sonra 47.Rxb7 a5 ile a-piyonu ilerler. Fark küçüktür; konum zaten kayıptır.',
      diger: [
        { move: '46...Kxf4', text: '47.Rxb7 a5 48.Rb3 a4 ile Siyahın a-piyonu ilerler (Motor: +3.4/+3.6).' },
        { move: '46...Rb8', text: 'b7’yi korur; 47.Rf7+ Ke4 48.Kf2 (Motor: +3.2/+3.9).' },
      ],
    },
    '47w': {
      text: '47.Rxa7: Kale a7 piyonunu alır.',
      amac: 'Bir piyon daha kazanmak ve vezir kanadında iki bağlantılı piyon (a2, b2) oluşturmak.',
      neden: 'Beyaz f4’ü verir ama a7’yi alır; vezir kanadındaki a- ve b-piyonları, Siyah şahından uzakta oldukları için çok güçlüdür. Motor 47.Rxa7’yi en iyi buluyor (+3.8/+4.2).',
      diger: [
        { move: '47.Kh2', text: '47...Kxf4 48.Rxa7 b5 49.Ra3 ile benzer (Motor: +3.7).' },
        { move: '47.Rf7+', text: '47...Kg4 48.Rg7+ Kxf4 49.Rxa7 ile aynı konuma döner (Motor: +3.1/+3.55).' },
      ],
    },
    '47b': {
      text: '47...Kxf4: Şah f4 piyonunu alır.',
      amac: 'Malzeme farkını azaltmak ve şahı g3 karesine, Beyaz şahının yakınına getirmek.',
      neden: 'Siyah g2’ye ve Beyaz şahına karşı saldırı şansı aradı. Motor 47...Rc2’yi az farkla tercih ediyor (+4.2’ye karşı +4.45): kale önce ikinci yataya girer. Her iki durumda da Beyaz iki piyon önde.',
      diger: [
        { move: '47...Rc2', text: '48.Kh2 Kg4 49.b3 Rc5 ile kale aktif ama Beyazın piyonları ilerler (Motor: +3.9/+4.2).' },
        { move: '47...Rc1+', text: '48.Kh2 Kg4 49.Ra4 b5 (Motor: +4.3/+4.7).' },
      ],
    },
    '48w': {
      text: '48.Ra4+: Kale şah çekerek dördüncü yatayı keser.',
      amac: 'Siyah şahını vezir kanadından ve merkezden uzak tutmak.',
      neden: 'Şah çekmek yine tempo kazandırır: Siyah şahı ya e3’e (vezir kanadına doğru) ya da g3’e gitmek zorundadır. Motor 48.Ra4+’ü en iyi buluyor (+4.5/+4.7).',
      diger: [
        { move: '48.Ra3', text: '48...Rc1+ 49.Kh2 Rc5 50.Rb3 (Motor: +4.3/+4.4).' },
        { move: '48.Kh2', text: '48...b5 49.Ra3 Rc4 ile Siyahın kalesi aktif (Motor: +4.0).' },
      ],
    },
    '48b': {
      text: '48...Kg3: Şah g3’e gider ve g2’ye saldırır.',
      amac: 'g2 piyonunu almak ve Beyaz şahını köşede sıkıştırmak.',
      neden: 'Siyah son pratik şansını, Beyaz şahını mat ağına almakta aradı. Motor 48...Ke3’ü de aynı değerde görüyor (+4.7): şah vezir kanadına yönelir ama Beyazın piyonlarını durduramaz.',
      diger: [
        { move: '48...Ke3', text: '49.Rb4 Rc6 50.g3 Kf3 ile şah merkezde ama Beyazın piyonları ilerler (Motor: +4.7).' },
        { move: '48...Kg5', text: '49.Rb4 Rc6 50.Kf2 Rf6+ (Motor: +5.0).' },
      ],
    },
    '49w': {
      text: '49.Ra3+: Şah yeniden kovalanır; Siyah terk etti.',
      amac: 'Siyah şahını g2’den uzaklaştırmak ve üçüncü yatayı keserek a- ve b-piyonlarının ilerleyişini hazırlamak.',
      neden: 'Şah çekmek Siyahın ...Rc1+ ve ...Rc2 tehditlerine zaman bırakmaz. 49.Kf1? Rc1+ 50.Ke2 Rc2+ 51.Kd3 Rxb2 52.a3 Rxg2 ile Siyah iki piyonu da geri alırdı (Motor: 0.0), 49.Rf4?? ise 49...Kxf4 ile kaleyi verirdi. 49.Ra3+ sonrası Beyazın iki piyon fazlası (a2, b2, g2’ye karşı b6) ve aktif kalesi kazanmak için yeterliydi (Motor: +4.4/+4.85).',
      diger: [
        { move: '49.Kf1', text: '49...Rc1+ 50.Ke2 Rc2+ 51.Kd3 Rxb2 52.a3 Rxg2 ile Siyah piyonları geri alır ve oyun eşitlenir (Motor: 0.0).' },
        { move: '49.Rf4', text: '49...Kxf4 ile kale düşer (Motor: −6.8/−7.2).' },
      ],
    },
  },
  exercises: [
    { id: 'adz-1', kind: 'tekrar', plan: false, title: 'Qd4+: şah ve d5',
      source: 'Adams – Dzindzichashvili, New York 1994 (40. hamle)',
      fen: '6rk/pp6/8/3p3q/5P2/6p1/PP3QP1/3R2K1 w - - 0 40',
      prompt: 'Siyah 39...g3 ile Beyazın vezirine saldırdı. Siyahın şahı h8’de, d5 piyonu yalnız duruyor. Hamle sizde.',
      hint: 'Vezir şah çekerken başka neye saldırabilir?',
      line: ['Qd4+', 'Kh7', 'Qxd5'],
      explanation: '**40.Qd4+! Kh7 41.Qxd5** Vezir şah çekerek d4’e gelir ve aynı anda d5 piyonuna saldırır; şah kaçınca piyon düşer. Motor: Qd4+ +1.1, sonraki en iyi 40.Qf3 −2.2. 41.Qxd5 +0.9, 41.Qd3+ 0.0.',
      link: 'Şah çekerek gelen vezir aynı anda tek kalmış d5 piyonuna saldırdı.' },
    { id: 'adz-2', kind: 'tekrar', plan: false, title: 'Kale şahlarla g3’e',
      source: 'Adams – Dzindzichashvili, New York 1994 (43. hamle)',
      fen: '2r5/pp5k/8/3R4/5P2/6p1/PP4P1/6K1 w - - 1 43',
      prompt: 'Kale oyun sonu. Siyah 42...Rc8 ile kalesini c-hattına götürdü. Siyahın g3 piyonu Beyaz şahının yanında duruyor. Beyazın en güçlü devamı nedir?',
      hint: 'Kale şah çekerek g-hattına geçebilir mi?',
      line: ['Rh5+', 'Kg6', 'Rg5+', 'Kf6', 'Rxg3'],
      explanation: '**43.Rh5+! Kg6 44.Rg5+ Kf6 45.Rxg3** Kale iki şahla g-hattına geçer ve g3 piyonunu alır; Beyaz iki piyon önde kalır. Motor: Rh5+ +3.2, 43.Kf1 +0.1; 44.Rg5+ ve 45.Rxg3 de açık ara en iyi hamleler.',
      link: 'Şah çeken kale tempo kaybetmeden zayıf piyona ulaştı.' },
    { id: 'adz-3', kind: 'transfer', plan: false, title: 'Vezir şahı: f7 ve d5',
      source: 'Parma – Stein, SSCB – Yugoslavya maçı 1965 (29. hamle)',
      fen: '6k1/pq1b2bp/1p4p1/3pp3/4n1P1/1N2BQ1P/PPr5/3R1RK1 w - - 1 29',
      prompt: 'Beyazın veziri f3’te, kalesi f-hattında. Siyahın d5 piyonu ve d7 fili vezirin ulaşabileceği yerde. Hamle sizde.',
      hint: 'Vezir şah çekerek yedinci yataya girebilir.',
      line: ['Qf7+'],
      explanation: '**29.Qf7+!** Vezir şah çekerek f7’ye girer; buradan d5 piyonuna ve d7 filine saldırır. Maçta 29...Kh8 30.Qxd5 ile piyon düştü; Motor 30.Qe7’yi daha da güçlü buluyor (+5.0). Motor: Qf7+ +4.2, sonraki en iyi 29.Na1 +1.5.',
      link: 'Adams 40.Qd4+ ile şah çekip d5’i aldı; Parma da şah çekerek d5 piyonuna ulaştı.' },
    { id: 'adz-4', kind: 'transfer', plan: false, title: 'Kale şahlarla a7’ye',
      source: 'Smislov – Jimenez, Alekhine Anma turnuvası, Moskova 1963 (41. hamle)',
      fen: '5k2/p7/1p4p1/1P1K4/P1R5/4P3/r7/8 w - - 2 41',
      prompt: 'Kale oyun sonu. Beyazın şahı d5’te aktif; Siyahın a7 piyonu korumasız ama kale hemen alamıyor. Kazandıran plan nedir?',
      hint: 'Kale önce sekizinci, sonra yedinci yataydan şah çekebilir.',
      line: ['Rc8+', 'Kf7', 'Rc7+', 'Kf6', 'Rxa7'],
      explanation: '**41.Rc8+! Kf7 42.Rc7+ Kf6 43.Rxa7** Kale şahlarla tempo kazanarak yedinci yataya girer ve a7 piyonunu alır. Motor: Rc8+ +3.5, 41.e4 +2.6; 42.Rc7+ +3.6, 42.Rc4 +0.1.',
      link: 'Adams Rh5+ ve Rg5+ ile g3’e ulaştı; Smislov da iki kale şahıyla a7 piyonunu topladı.' },
  ],
};
