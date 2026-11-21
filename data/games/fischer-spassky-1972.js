// Fischer – Spasski, Dünya Şampiyonası maçı, Reykjavik 1972 (6. oyun). Kaynak: PgnMentor (Fischer.pgn).
export default {
  id: 'fischer-spassky-1972',
  theme: 'Asılı piyonlar ve f-hattı',
  white: 'Robert James Fischer', black: 'Boris Spasski',
  whiteShort: 'Fischer', blackShort: 'Spasski',
  event: 'Dünya Şampiyonası maçı, 6. oyun', site: 'Reykjavik', year: 1972, eco: 'D59',
  variation: 'Vezir Gambiti Reddi, Tartakower Savunması', result: '1-0',
  pgn: `1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6 12. Qa4 c5 13. Qa3 Rc8 14. Bb5 a6 15. dxc5 bxc5 16. O-O Ra7 17. Be2 Nd7 18. Nd4 Qf8 19. Nxe6 fxe6 20. e4 d4 21. f4 Qe7 22. e5 Rb8 23. Bc4 Kh8 24. Qh3 Nf8 25. b3 a5 26. f5 exf5 27. Rxf5 Nh7 28. Rcf1 Qd8 29. Qg3 Re7 30. h4 Rbb7 31. e6 Rbc7 32. Qe5 Qe8 33. a4 Qd8 34. R1f2 Qe8 35. R2f3 Qd8 36. Bd3 Qe8 37. Qe4 Nf6 38. Rxf6 gxf6 39. Rxf6 Kg8 40. Bc4 Kh8 41. Qf4 1-0`,

  summary: 'Fischer’in ciddi oyunlarda çok nadir oynadığı 1.c4 ile açtığı ve hamle sırası değişince ciddi bir oyunda ilk kez Vezir Gambiti Reddi’ne geçtiği ünlü oyun. Spasski o güne kadar hiç kaybetmediği Tartakower Savunmasını seçti; Fischer ise Sovyet ustası Furman’ın 1970’te Geller’e karşı denediği 14.Bb5 fikrini izledi. Taş değişimlerinden sonra Siyah c5 ve d5’te **asılı piyonlar** aldı: yan yana duran, yanlarında dost piyon olmayan iki merkez piyonu. Fischer önce bu piyonların en iyi savunucusu olan e6 filini değişti (18.Nd4, 19.Nxe6), sonra **20.e4!** ile piyonları ilerlemeye zorladı. Spasski’nin 20...d4’ü (motor: +0.5’ten +1.2’ye) c4 karesini ve a2–g8 çaprazını Beyaz file açtı, e5 karesini de verdi. Fischer f4–e5 ile Siyahın şah kanadını kilitledi, f5 kırılmasıyla f-hattını açtı, e6’ya ilerleyen piyonla Siyahın taşlarını ikinci yataya hapsetti ve 38.Rxf6! kalite fedasıyla bitirdi. Skor 3½–2½ oldu; Fischer maçta ilk kez öne geçti. Oyun sonunda Spasski de seyircilerle birlikte Fischer’i alkışladı.',
  intro: 'Maç 2½–2½ berabereydi. Fischer neredeyse her zaman 1.e4 oynardı; ChessBase’in aktardığına göre Geller, Spasski’yi 1.c4 ya da 1.d4 ihtimaline karşı uyarmıştı ama Sovyet ekibi bu olasılığı hafife aldı. 1.c4 e6 2.Nf3 d5 3.d4 ile oyun Vezir Gambiti Reddi’ne döndü ve Spasski ...h6, ...b6 ile Tartakower (Tartakower–Makogonov–Bondarevski) Savunmasını kurdu. Bu oyunu izlerken şu soruları sorun: Asılı piyonlar ne zaman güçtür, ne zaman zayıftır? Beyaz onları nasıl ilerlemeye zorlar? Piyonlar ilerleyince arkalarında hangi kareler boş kalır ve Beyazın taşları oralara nasıl yerleşir?',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Taş değişimleriyle (9.Bxe7, 10.Nxd5) Siyahı merkezde piyonlarla yalnız bırakmak, ...c5 sonrası dxc5 ile c5 ve d5’te **asılı piyonlar** oluşturmak.',
      'Vezir (12.Qa4, 13.Qa3) ve c1 kalesiyle c5’e baskı yapmak; a3–f8 çaprazındaki bağ sayesinde ...c4 ilerleyişini de zorlaştırmak.',
      '14.Bb5 ile Siyahın b8 atının doğal gelişimini engellemek ve ...a6 gibi zaman kaybettiren, garip kurulumlara (...Ra7) zorlamak.',
      'Asılı piyonların en iyi savunucusu olan e6 filini **18.Nd4 ve 19.Nxe6** ile değişmek; fxe6 sonrası e6’da yeni bir hedef yaratmak.',
      '**20.e4!** ile d5’e piyonla vurmak: Siyah ya piyon değişip zayıf c5 ile kalacak ya da ...d4 ile e5 ve c4 karelerini bırakacak.',
      'f4 ve e5 ile şah kanadında alan kazanmak, fili c4’e (e6’ya baskı) getirmek, vezir ve kalelerle f-hattında yığılıp **f5** kırılmasını yapmak.',
      'e6’ya ilerleyen piyonla Siyahın taşlarını yedinci yataya hapsetmek, sonra fil (Bd3) ve vezirle (Qe4) h7’ye yüklenip kalite fedasıyla şahın önünü açmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Tartakower kurgusunda ...b6 ve ...c5 ile merkezde alan kazanıp taşları aktif tutmak; asılı piyonların verdiği d- ve c-hattı kontrolünü kullanmak.',
      'Doğru anda ...c4 ya da ...d4 ile piyonları ilerletmek: ...c4 b-hattını ve d4 karesini, ...d4 ise e-hattını açar; ama her ilerleyiş bir kare bırakır.',
      'Vezir kanadında ...Qb7 (Geller’in fikri) ya da ...Rc6, ...Rac8 gibi hamlelerle c-hattında ağırlık kurup b2’ye baskı yapmak.',
      'Atı d7–f6 ya da b6–d5 yoluyla merkeze getirmek; özellikle 22...Nb6–d5 ile e3 ve f4’e bakan güçlü bir at karesi bulmak.',
      'e5 karesini piyonla ya da taşla kontrol etmek; e5’e gelen beyaz piyon Siyahın şah kanadını kilitler.',
      'd4’teki korunan geçer piyonu ...d3 ile ilerletip Beyazın taşlarını savunmaya çekmek, ...a5–a4 ile vezir kanadında karşı oyun aramak.',
    ] },
  },
  critical: [
    { move: '14w', title: '14.Bb5: Furman’ın yeniliği', text: 'Normal hamle 14.Be2’dir. 14.Bb5 Sovyet ustası Furman’ın 1970’te Geller’e karşı kazandığı oyunda denediği fikirdir; ChessBase’in analizine göre Fischer bu hazırlığı izledi. Fil Siyahın b8 atının d7’ye gelişini rahatsız eder ve ...a6 ile zaman harcamaya zorlar. Doğru cevap Geller’in sonradan bulduğu 14...Qb7!’dir (fil b5’e saldırır, 15.dxc5 Rxc5 16.Rxc5 bxc5 17.Qxc5 Na6, motor: −0.2); Geller bunu 1973’te Timman’a karşı kullanıp kazandı. Spasski’nin 14...a6’sı hemen kaybettirmez (motor: −0.1) ama sonraki garip ...Ra7 kurgusuna yol açar.' },
    { move: '15b', title: 'Asılı piyonlar ortaya çıkıyor', text: '15.dxc5 bxc5 sonrası Siyahın c5 ve d5 piyonları yan yana duruyor; b ve e piyonları yok. Böyle piyonlar merkezde alan verir, c- ve d-hatlarını kapatır, taşlara karakol sağlar. Ama yanlarında piyon olmadığı için taşlarla korunmaları gerekir ve biri ilerlerse diğeri geride zayıf kalır, önlerindeki kare (c4 ya da d4/e4) de rakibe geçer. 15...axb5?? ise 16.Qxa8 ile kale kaybettirir (motor: +1.5); fil bu yüzden b5’te durabiliyor.' },
    { move: '18b', title: '18...Qf8: zaman kaybı', text: '18.Nd4 e6 filine saldırınca Siyahın en iyi cevabı 18...Nf6 ya da 18...Rac7 idi (motor: +0.3). Spasski veziri f8’e çekti: vezir değişimini önledi ve 19.Nxe6 fxe6 sonrası f-hattına baktı. Robert Byrne bu hamleyi "belki de ölümcül hata" olarak niteliyor, Euwe 18...Nf8’i önermişti. Motora göre fark küçük (+0.5) ama Siyahın veziri pasif bir kareye gitti ve e6 piyonu artık filin değil bir piyonun korumasında.' },
    { move: '20w', title: '20.e4! ve 20...d4?', text: 'Fischer d5’e piyonla vurur; Havanur bunu Siyahın piyon merkezini en zayıf noktasından yoklamak diye tanımlıyor. Siyahın üç yolu vardı: 20...c4 (Tal’ın fikri, motor: +0.4), 20...dxe4 (Euwe’nin çizgisi 21.Bc4, motor: +0.2) ve oyundaki 20...d4. Spasski’nin seçimi korunan bir geçer piyon verir ama a2–g8 çaprazını ve c4 karesini Beyazın filine, e5 karesini de Beyaz piyonlarına bırakır; motorun değerlendirmesi +0.5’ten +1.2’ye çıkar. chess.com’un incelemesi bunu oyunun en açık konumsal hatası sayıyor.' },
    { move: '22w', title: '22.e5: kama piyonu', text: '21.f4’ün desteğiyle gelen e5 piyonu f6 ve d6 karelerini Siyahın atından alır, e6 piyonunu sabitler ve Siyahın taşlarını iki kanada böler. Siyahın d4 piyonu korunan geçer piyon olsa da kimse onu ileri itemiyor; Beyazın e5 piyonu ise hem kilit hem ileride e6’ya yürüyecek bir koçbaşı. Burada Siyahın tek ciddi kaynağı 22...Nb6–d5’ti (motor: +1.0); 22...Rb8 ile değerlendirme +1.7’ye çıktı.' },
    { move: '26w', title: '26.f5! f-hattı açılıyor', text: '25...a5 ile Siyah vezir kanadında ...a4 karşı oyununa hazırlanırken Fischer şah kanadında kırılmayı yapar. 26...exf5 27.Rxf5 sonrası Beyazın kaleleri f-hattında ikilenir, vezir h3’ten f5 ve h7’ye bakar, e5 piyonu e6’ya ilerlemeye hazırdır. Motor 26.a4’ü az farkla daha iyi buluyor (+2.2 / +2.0) ama f5’in getirdiği açık hat ve inisiyatif oyunun geri kalanını belirledi.' },
    { move: '31w', title: '31.e6! Siyah ikinci yataya hapsoluyor', text: 'e-piyonu e6’ya gelince d7 ve f7 karelerini kontrol eder; Siyahın kaleleri yedinci yatayı terk edemez, vezir de d8–e8 arasında gidip gelmek zorunda kalır. Byrne’e göre Siyah artık çaresiz, ikinci yatayda büzülmek zorunda. 31...Qc7? ise 32.Rf8+! Nxf8 33.Rxf8+ Kh7 34.Bd3+ g6 35.Qxg6# ile mat olurdu.' },
    { move: '38w', title: '38.Rxf6! kalite fedası', text: '37.Qe4 Rf8+ Nxf8 Rxf8+ Qxf8 Qh7# tehdidiyle (motor: üç hamlede mat) atı f6’ya çağırdı. Fischer bu savunucuyu kaleyle alır: 38...gxf6 39.Rxf6 sonrası Siyah şahının önünde piyon kalmaz, Beyaz Rxh6+ ve Qf4/Qe5 ile girer. 39...Kg8 40.Bc4 Kh8 41.Qf4 ile Qxh6+ ve Rf8+ tehditleri durdurulamaz; örneğin 41...Kg7 42.Qxh6+ Kg8 43.Rg6+ (motor: +7.7). Spasski terk etti.' },
  ],
  lessons: [
    'Asılı piyonlara karşı klasik yöntem: önce **baskı yap**, sonra onları ilerlemeye zorla, ilerledikleri anda arkalarında boşalan karelere (burada c4, e5 ve a2–g8 çaprazı) taşlarını yerleştir.',
    'Asılı piyonların savunucusu olan taşları değişmek baskıyı artırır. 18.Nd4 ve 19.Nxe6 ile e6 fili gitti, yerine zayıf bir e6 piyonu geldi.',
    'Rakibin piyon merkezine piyonla vurmak (20.e4!) çoğu zaman taşla baskı yapmaktan daha etkilidir; rakibi bir karar vermeye zorlar.',
    'Korunan bir geçer piyon (d4) ancak ilerleyebiliyorsa değerlidir. Önü kapalı bir geçer piyonun karşılığında e5 ve c4 karelerini vermek Siyaha pahalıya patladı.',
    'Merkez piyonuyla (e5) rakibin şah kanadını kilitleyip f-piyonuyla hat açmak güçlü bir saldırı şemasıdır; ileri giden e-piyonu (e6) rakibin taşlarını felç eder.',
    'Kazanılmış konumda acele gerekmez: Fischer 33.a4 ile karşı oyunu söndürdü, kalelerini yeniden dizdi (34.R1f2, 35.R2f3) ve ancak her şey hazır olunca 38.Rxf6 ile vurdu.',
    'Hazırlık önemlidir ama tek başına yetmez: Spasski, Geller’in 14...Qb7 fikrini biliyordu ama tahtada hatırlamadı; Fischer ise rakibin hiç kaybetmediği bir açılışa onun kendi okulunun analizleriyle girdi.',
  ],
  qa: [
    { q: 'Fischer neden 1.e4 yerine 1.c4 oynadı?', a: 'Fischer neredeyse bütün kariyerinde 1.e4 oynamıştı ve Spasski’nin ekibi hazırlığını buna göre yapmıştı. ChessBase’in aktardığına göre Geller 1.c4 ya da 1.d4 ihtimaline karşı uyarmıştı ama Spasski yalnızca Tartakower (Makogonov–Bondarevski) sistemine güveniyordu. 1.c4 e6 2.Nf3 d5 3.d4 ile oyun Vezir Gambiti Reddi’ne döndü; Fischer böylece Spasski’nin en güvendiği savunmaya, onun beklemediği bir hamle sırasıyla girdi.' },
    { q: 'Asılı piyonlar neden zayıf sayılır? Siyah neden bu yapıya razı oldu?', a: 'Asılı piyonlar (c5–d5) yanlarında dost piyon olmadığı için yalnızca taşlarla korunabilir. Yan yana durdukları sürece merkezde alan verir ve c4, d4, e4, b4 karelerini kontrol ederler; Siyah bu yüzden Tartakower’de bu yapıya bilerek girer. Ama biri ilerlediğinde diğeri geride zayıf kalır ve önündeki kare rakibe geçer: 20...d4 sonrası c5 piyonu b- ve c-hatlarında yalnız kaldı, e5 ve c4 kareleri de Beyazın oldu.' },
    { q: 'Spasski 14...a6 yerine ne oynamalıydı?', a: 'Geller’in sonradan bulduğu 14...Qb7! en iyi cevap sayılır: vezir b5 filine saldırır ve 15.dxc5 Rxc5 16.Rxc5 bxc5 17.Qxc5 Na6 ile Siyah piyonu geri alır, taşları da hızla gelişir (motor: −0.2). ChessBase’in analizine göre Geller bu fikri Spasski ile çalışmıştı ve 1973’te Timman’a karşı kazandı. 14...a6’nın sorunu, 15.dxc5 bxc5 sonrası ...axb5’in 16.Qxa8 nedeniyle oynanamaması ve Siyahın bunu düzeltmek için 16...Ra7 gibi garip bir hamleye muhtaç kalmasıydı.' },
    { q: '18.Nd4 ve 19.Nxe6 neden bu kadar önemliydi? İyi bir atı neden fille değişti?', a: 'e6 fili Siyahın en değerli savunucusuydu: d5’i koruyor, c4 ve d5 karelerine hâkim oluyordu. 19.Nxe6 fxe6 sonrası d5 artık yalnızca piyonla ve vezirle korunabiliyordu, e6’da da Beyaz filinin ileride yükleneceği yeni bir hedef doğdu. Ayrıca Beyazın kalan fili (e2) açık oyunda Siyahın atından daha güçlüydü; 23.Bc4 bu farkı gösterdi.' },
    { q: '20.e4’e karşı Siyahın daha iyi bir yolu var mıydı?', a: 'Evet. 20...c4 (Tal’ın önerisi; Kasparov 21.Qh3 Rc6 22.b3 Nb6 23.Rfd1 ile incelemiş) sonrasında motor yalnızca +0.4 veriyor; Siyah b-hattını ve d3 karesini alır. Euwe’nin önerdiği 20...dxe4 21.Bc4 de motora göre neredeyse eşit (+0.2): e4 piyonu zayıf olsa da Siyahın taşları aktif kalır. Oyundaki 20...d4 ise +1.2 ve sorun tam da piyonların ilerleyince arkalarında bıraktığı karelerdir.' },
    { q: '21.f4 neden bu kadar güçlüydü?', a: 'f4 iki işi birden yapar: e5 ilerleyişini destekler ve f-hattının ileride f5 ile açılmasını hazırlar. Siyah 21...e5 ile karşı çıksa 22.fxe5 Qe7 23.Bc4+ (motor: +1.9) gelir: Beyazın fili hem şaha hem d5 karesine bakar. Motor 21.f4’ü +1.3 ile açık farkla en iyi görüyor; bir sonraki seçenek 21.h3 yalnızca +0.5.' },
    { q: 'Siyahın 22...Rb8’den sonra kurtulma şansı kaldı mı?', a: '22...Nb6! ile at d5’e gidip güçlü bir merkez karesi bulabilirdi (motor: +1.0). Kasparov’un incelemesinde 23.Qd3 Nd5 24.Qe4 Qf7 25.f5 ile Beyaz yine üstün; yani Siyah zaten zor durumdaydı. 22...Rb8 ile b2’ye saldırı aradı ama at d7’de pasif kaldı ve değerlendirme +1.7’ye çıktı. 23...Nb6? de 24.Qb3 ile bir piyon kaybettirirdi (Timman’ın notu; motor: +1.9).' },
    { q: 'Fischer neden 28.Rf7 oynamadı? Kale yedinci yataya girebiliyordu.', a: '28.Rf7? sonrası 28...Ng5! gelir: at h3 vezirine ve f7 kalesine aynı anda saldırır; 29.Rxe7 Nxh3+ 30.gxh3 Rxe7 ile Siyah kalite kazanır (motor: −3.2, Siyah lehine). Fischer önce 28.Rcf1 ile kaleleri ikiledi, 29.Qg3 ile veziri at çatalından uzaklaştırdı ve 30.h4 ile g5 karesini tamamen kapattı. Saldırıdan önce rakibin tek aktif fikrini söndürmek Fischer’in tarzının tipik bir örneği.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Avantaj tek bir taktikten değil, birikmiş konumsal artılardan doğdu: Siyahın c5 ve e6’da iki zayıf piyonu, d4’te ilerleyemeyen bir geçer piyonu ve h7–f8 arasında sıkışmış bir atı vardı. Beyazın e5 (sonra e6) piyonu Siyahı ikiye böldü, c4 fili a2–g8 çaprazına hâkim oldu, kaleler açık f-hattını aldı. Bu artılar biriktikçe motorun değerlendirmesi +0.5’ten (20. hamle) +4’e (33. hamle) yavaş yavaş yükseldi.' },
    { q: '38.Rxf6 neden en güçlü hamleydi, başka hamle de kazanır mıydı?', a: 'f6’daki at Siyah şahının son savunucusuydu; onu alınca g7 piyonu f6’ya çekilir ve şahın önü tamamen açılır. 38...gxf6 39.Rxf6 sonrası Rxh6+ ve vezirin f4/e5 üzerinden gelişi durdurulamaz (motor: +5.7). Motor 38.Qf4’ü de kazanan bir hamle görüyor (+5.0) ama Rxf6 en doğrudanı. Bir hamle önce, 37.Rf7! de güçlüydü (+5.5); oyunda Fischer 37.Qe4 ile üç hamlede mat tehdidini tercih etti.' },
  ],
  sources: [
    { title: 'ChessBase: 50 years ago today: Fischer-Spassky, game six (Byrne ve Havanur notları)', url: 'https://en.chessbase.com/post/50-years-ago-today-fischer-spassky-game-six' },
    { title: 'ChessBase: Bobby Fischer in Iceland – 45 years ago (6)', url: 'https://en.chessbase.com/newsroom/post/bobby-fischer-in-iceland-45-years-ago-6' },
    { title: 'Chess.com: Bobby Fischer Wins Positional Masterpiece (Fischer–Spassky, 6. oyun)', url: 'https://www.chess.com/article/view/50-year-anniversary-fischer-spassky-game-6' },
    { title: 'Wikipedia: World Chess Championship 1972', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1972' },
    { title: 'Wikipedia: Queen’s Gambit Declined (Tartakower ve Lasker varyantları)', url: 'https://en.wikipedia.org/wiki/Queen%27s_Gambit_Declined' },
    { title: 'Chess.com blog (SamCopeland): Fischer vs. Spassky, 1972 G6', url: 'https://www.chess.com/blog/SamCopeland/bobby-fischer-breaks-boris-spasskys-ego-best-of-the-70s-fischer-vs-spassky-1972-g6' },
  ],
  notes: {
    '1w': {
      text: 'Fischer İngiliz Açılışı ile başlar. Bütün kariyeri boyunca neredeyse hep 1.e4 oynamıştı; ChessBase’te aktarılan Byrne notuna göre bu hamleyi daha önce yalnızca 1970 Palma Interzonal’de Polugayevski’ye karşı denemişti.',
      amac: 'Spasski’nin 1.e4’e karşı yaptığı hazırlığı (Sicilya, Sozin vb.) boşa çıkarmak ve oyunu hamle sırası ile Vezir Gambiti yapısına taşımak.',
      neden: 'Maç 2½–2½ berabereydi ve Fischer sürpriz istiyordu. 1.c4 esnektir: Beyaz d4’ü sonra oynayarak Siyahın bazı savunmalarını (örneğin Nimzo-Hint’i) atlatabilir. Chess.com’un yazısı bunun maçın en büyük sürprizlerinden biri olduğunu vurgular.',
      diger: [
        { move: '1.e4', text: 'Fischer’in her zamanki hamlesi; motor da bunu biraz daha iyi buluyor (Motor: +0.4). Ama Spasski’nin ekibi tam buna hazırlanmıştı.' },
        { move: '1.d4', text: 'Doğrudan Vezir Gambiti yolu (Motor: +0.2). Siyaha Nimzo-Hint ya da Grünfeld seçeneği verir; 1.c4 ve 3.d4 sırası bunu daralttı.' },
      ],
    },
    '1b': {
      text: 'Spasski e-piyonunu bir kare oynar ve ...d5 ile klasik Vezir Gambiti Reddi yapısına geçmeye hazırlanır.',
      amac: 'İngiliz Açılışının keskin yapılarına girmek yerine bildiği sağlam Vezir Gambiti zeminine dönmek.',
      neden: '1...e6, Beyaz d4 oynarsa doğrudan QGD’ye, oynamazsa da sağlam bir merkeze götürür. Spasski Tartakower Savunmasıyla hiç kaybetmemişti, bu yüzden oyunu oraya çekmesi doğaldı.',
      diger: [
        { move: '1...e5', text: 'Ters Sicilya yapısı; Beyaz g3–Bg2 ile oynar (Motor: +0.2). Daha dinamik ama Spasski’nin rahat olduğu yapılar değil.' },
        { move: '1...c5', text: 'Simetrik İngiliz; motor en iyi cevaplardan biri sayıyor (Motor: +0.2), ama uzun manevra savaşlarına yol açar.' },
        { move: '1...Nf6', text: 'En esnek hamle; Beyaz d4 oynarsa Nimzo-Hint ya da Vezir-Hint gibi seçenekler kalır (Motor: +0.3).' },
      ],
    },
    '2w': {
      text: 'At f3’e gelişir; d4 ve e5 karelerini kontrol eder.',
      amac: 'Gelişmek ve d4’ü hazırlamak, ama Siyaha ...Bb4 ile Nimzo-Hint fırsatı verecek Nc3’ü henüz oynamamak.',
      neden: 'Nf3 her yapıya uyan hamledir: Beyaz Reti, Katalan ya da klasik Vezir Gambiti’ne geçebilir. Motor da bu hamleyi en iyisi görüyor.',
      diger: [
        { move: '2.Nc3', text: '2...d5 3.d4 ile benzer yapılar, ama 2...Bb4 gibi seçenekler de doğar (Motor: +0.3).' },
        { move: '2.d4', text: 'Doğrudan Vezir Gambiti; 2...Nf6 3.Nc3 Bb4 ile Nimzo-Hint mümkün olur (Motor: +0.3).' },
      ],
    },
    '2b': {
      text: 'Siyah d5 ile merkezde yer alır ve c4 piyonuna dokunur.',
      amac: 'Klasik bir merkez kurmak ve Beyazı d4’e davet ederek QGD’ye geçmek.',
      neden: 'Bu sırayla Siyah Tartakower’e ulaşma yolunu açık tutar; 2...Nf6 de mümkündü ama 2...d5 doğrudan istediği yapıyı hedefler.',
      diger: [
        { move: '2...Nf6', text: 'Esnek; 3.g3 ile Beyaz Katalan/Reti tarzına geçebilir (Motor: +0.4).' },
        { move: '2...c5', text: 'Daha dinamik, Tarrasch benzeri yapılara gider (Motor: +0.4).' },
      ],
    },
    '3w': {
      text: 'Fischer d4 oynar ve oyun hamle sırası değişmiş bir Vezir Gambiti Reddi olur.',
      amac: 'Merkezde iki piyon kurmak ve klasik QGD yapısında Siyahın en güvendiği sisteme meydan okumak.',
      neden: 'Wikipedia’ya göre Fischer ciddi bir oyunda ilk kez Vezir Gambiti oynuyordu. 3.d4 Siyaha Nimzo-Hint fırsatı bırakmaz, çünkü Beyazın atı henüz c3’te değil ve ...Bb4+ zararsızdır.',
      diger: [
        { move: '3.g3', text: 'Reti/Katalan yapısı; daha sakin bir manevra oyunu (Motor: +0.3).' },
        { move: '3.cxd5', text: '3...exd5 ile erken değişim yapısı; Siyahın c8 fili rahatlar (Motor: +0.3).' },
      ],
    },
    '3b': {
      text: 'At f6’ya gelişir, d5’i destekler ve e4 karesini kontrol eder.',
      amac: 'Normal gelişim ve ...Be7, ...O-O ile klasik QGD kurgusuna ilerlemek.',
      neden: 'Spasski’nin hedefi Tartakower’dir; 3...dxc4 (Vezir Gambiti Kabulü) ya da 3...c6 (Slav) farklı açılışlara götürürdü.',
      diger: [
        { move: '3...dxc4', text: 'Vezir Gambiti Kabulü yapısı; Siyah merkezi verip hızlı gelişir (Motor: +0.3).' },
        { move: '3...c6', text: 'Slav/Yarı-Slav yapısı; c8 fili için başka bir yol.' },
      ],
    },
    '4w': {
      text: 'At c3’e gelir ve d5’e ikinci kez baskı yapar.',
      amac: 'Merkezdeki gerginliği artırmak ve Bg5 ile f6 atını bağlamaya hazırlanmak.',
      neden: 'Klasik Vezir Gambiti’nin ana hamlesi. 4.g3 Katalan’a giderdi; Fischer ise Bg5 ile en klasik yolları seçti.',
      diger: [
        { move: '4.g3', text: 'Katalan; motor az farkla bunu tercih ediyor (Motor: +0.4).' },
        { move: '4.Bg5', text: 'Önce fil; 4...dxc4 ya da 4...Bb4+ gibi cevaplara izin verir (Motor: +0.3).' },
      ],
    },
    '4b': {
      text: 'Fil e7’ye gelişir; rok için yol açar ve f6 atını ileride bağdan kurtarmaya hazırlanır.',
      amac: 'Ortodoks/Tartakower kurgusunun klasik gelişimi.',
      neden: 'Spasski en güvendiği sisteme, Tartakower’e yönelir. 4...Be7 sağlamdır ama Siyaha az dinamizm verir.',
      diger: [
        { move: '4...c5', text: 'Yarı-Tarrasch; 5.cxd5 cxd4 ile açık oyun (Motor: +0.2).' },
        { move: '4...Bb4', text: 'Ragozin; filin aktif konumu ama daha az sağlam yapılar.' },
        { move: '4...c6', text: 'Yarı-Slav; çok keskin Botvinnik ve Meran sistemlerine götürür.' },
      ],
    },
    '5w': {
      text: 'Fil g5’e gelir ve f6 atını vezire bağlar.',
      amac: 'f6 atının d5’i savunmasını zayıflatmak ve ileride Bxf6/Bxe7 değişimleriyle Siyahın merkezine baskı yapmak.',
      neden: 'Klasik Vezir Gambiti sistemi. Fischer bu maçın 14. oyununda 5.Bf4’ü de denedi (Wikipedia); burada Tartakower ana hattını tartışmayı seçti.',
      diger: [
        { move: '5.Bf4', text: 'Harrwitz/Bf4 sistemi; motor az farkla bunu da iyi buluyor (Motor: +0.3).' },
        { move: '5.cxd5', text: 'Değişim varyantı; Beyaz minority attack (b4–b5) planına yönelir.' },
      ],
    },
    '5b': {
      text: 'Siyah rok yapar ve şahını güvenceye alır.',
      amac: 'Önce şah güvenliği, sonra ...h6 ve ...b6 ile Tartakower kurgusu.',
      neden: '5...h6 hemen de oynanabilirdi; rok önce gelince Siyah 6...h6 ve 7...b6 sırasını korur, Beyazın bazı agresif seçeneklerini (uzun rok fikirleri gibi) azaltır.',
      diger: [
        { move: '5...h6', text: 'Fili hemen sorgulamak (Motor: +0.3); 6.Bxf6 Bxf6 ile benzer yapılar.' },
        { move: '5...Nbd7', text: 'Ortodoks Savunma; daha pasif ama sağlam bir kurgu.' },
      ],
    },
    '6w': {
      text: 'e3 ile d4 desteklenir ve f1 filinin önü açılır.',
      amac: 'Merkezi sağlamlaştırıp gelişimi tamamlamak, kısa roka hazırlanmak.',
      neden: 'QGD’nin en klasik hamlesi; motor da bunu en iyisi görüyor. 6.Rc1 ya da 6.Qc2 daha erken c-hattı planlarıdır.',
      diger: [
        { move: '6.Rc1', text: 'c-hattına erken kale; Beyaz ...c5 ve ...dxc4 gibi fikirleri önceden caydırır (Motor: +0.1).' },
        { move: '6.Qc2', text: 'Vezir c2’de e4’e ve h7’ye bakar; uzun rok fikirlerine de izin verir (Motor: +0.1).' },
      ],
    },
    '6b': {
      text: 'Siyah g5 filini sorgular; h7 de ileride şah için bir kaçış karesi olur.',
      amac: 'Beyazın filini kararını vermeye zorlamak: ya f6’yı alıp fil çiftini verecek ya da h4’e çekilip ileride ...Ne4/...Nd5 ile değişime açık kalacak.',
      neden: 'Byrne’e göre Spasski bu Tartakower varyantını canlandırmıştı ve onunla hiç kaybetmemişti. Havanur notlarında bu sistemin Makogonov ve Bondarevski adlarıyla da anıldığını belirtiyor (TMB sistemi).',
      diger: [
        { move: '6...Nbd7', text: 'Klasik Ortodoks Savunma; daha pasif (Motor: +0.2).' },
        { move: '6...b6', text: 'Hemen ...b6; 7.cxd5 ile Beyaz fil çiftini korur (Motor: +0.3).' },
      ],
    },
    '7w': {
      text: 'Fil h4’e çekilir ve bağı korur.',
      amac: 'Fil çiftini vermeden f6 atı üzerindeki baskıyı sürdürmek.',
      neden: 'Motor 7.Bxf6’yı (Anti-TMB) biraz daha iyi buluyor; Wikipedia’ya göre bu yol Kasparov–Karpov maçlarında da denendi. Fischer ise Tartakower’in ana hattını tartışmayı seçti.',
      diger: [
        { move: '7.Bxf6', text: 'Anti-TMB: 7...Bxf6 8.Rc1 ile Beyaz Siyahın ...b6 kurgusunu engeller (Motor: +0.3).' },
        { move: '7.Bf4', text: 'Nadir; 7...c5 ile Siyah rahatlar (Motor: +0.1).' },
      ],
    },
    '7b': {
      text: 'Tartakower Savunması: Siyah b6 ile c8 filini ya b7’ye ya da e6’ya getirmeye hazırlanır.',
      amac: 'QGD’nin en büyük sorunu olan c8 filini çözmek ve ...c5 ile merkezde karşı oyun kurmak.',
      neden: 'Wikipedia bunu Siyah için en sağlam seçeneklerden biri olarak tanımlıyor. 7...Ne4 (Lasker) daha çok taş değişimine gider; Spasski daha zengin oyun veren ...b6’yı tercih etti.',
      diger: [
        { move: '7...Ne4', text: 'Lasker Savunması; 8.Bxe7 Qxe7 ile taş değişimi. Anand 2010’da Topalov’a karşı bununla kazandı (Motor: +0.3).' },
        { move: '7...Nbd7', text: 'Klasik Ortodoks; c8 fili daha uzun süre kapalı kalır (Motor: +0.3).' },
      ],
    },
    '8w': {
      text: 'Beyaz merkezde değişir ve Siyahı d5’i hangi taşla alacağına karar vermeye zorlar.',
      amac: 'Taş değişimleriyle Siyahın ileride asılı ya da yalnız piyonlarla kalmasını sağlamak.',
      neden: 'cxd5 merkezdeki gerginliği çözer ve Siyahın b7 filinin uzun çaprazını önceden kapatma fikrine dayanır: Nxd5 sonrası değişimler Siyahı exd5 almaya zorlar ve fil b7’de d5 piyonuna bakar.',
      diger: [
        { move: '8.Be2', text: 'Ana hatlardan biri; 8...Bb7 9.Bxf6 Bxf6 10.cxd5 exd5 ile b4–b5 planları.' },
        { move: '8.Bd3', text: 'Motorun hafif tercihi (Motor: +0.2); 8...dxc4 9.Bxc4 Bb7 ile açık oyun.' },
      ],
    },
    '8b': {
      text: 'Siyah atla alır ve taş değişimlerine yönelir.',
      amac: 'Merkezdeki taş sayısını azaltıp sıkışık olmayan bir konum almak.',
      neden: '8...exd5 de oynanabilirdi ama o zaman b7’ye gelecek fil d5 piyonuna çarpar. Atla almak taş değişimini zorlar ve Siyaha daha serbest bir oyun verir.',
      diger: [
        { move: '8...exd5', text: 'Daha kapalı yapı; 9.Bd3 Bb7 ile Siyahın fili piyonunun arkasında kalır (Motor: +0.2).' },
        { move: '8...c5?', text: 'Hata: 9.dxe6 Bxe6 10.dxc5 ile Siyah piyon kaybeder (Motor: +1.6).' },
      ],
    },
    '9w': {
      text: 'Beyaz fili e7 filiyle değişir.',
      amac: 'Siyahın kara kareli filini değiştirmek ve atla yapılacak değişime zemin hazırlamak.',
      neden: '9.Bg3 gibi bir geri çekiliş zaman kaybıdır (Motor: −0.2); değişim Beyazın planına uyar, çünkü taş azaldıkça Siyahın piyon yapısındaki zayıflıklar öne çıkar.',
      diger: [
        { move: '9.Nxd5', text: 'Önce at değişimi; 9...exd5 10.Bxe7 Qxe7 ile aynı konuma döner (Motor: +0.1).' },
        { move: '9.Bg3', text: 'Fili korumak; 9...c5 ile Siyah iyi oyun alır (Motor: −0.2).' },
      ],
    },
    '9b': {
      text: 'Siyah veziriyle geri alır.',
      amac: 'Değişimi tamamlamak ve vezirle e-hattında aktif bir kare bulmak.',
      neden: 'Zorunluya yakın: 9...Nxc3?? 10.Bxd8 vezir kaybettirir (Motor: +3.1). 9...Nxe7 mümkün ama atı geri çeker ve d5 kontrolünü bırakır.',
    },
    '10w': {
      text: 'Beyaz atları değişir; Siyah d5’i piyonla almak zorunda kalır.',
      amac: 'Siyahın merkezini piyonlarla sabitlemek ve d5 piyonunu ileride hedef yapmak.',
      neden: 'Motor 10.Rc1’i de eşit görüyor, ama 10.Nxd5 yapıyı netleştirir: artık Siyahın d5’te bir piyonu var ve ...c5 gelince asılı piyonlar ihtimali doğuyor.',
      diger: [
        { move: '10.Rc1', text: 'Değişimi geciktirmek; 10...Bb7 11.Be2 ile benzer oyun (Motor: +0.1).' },
        { move: '10.Be2', text: 'Gelişim; Siyaha 10...Nxc3 11.bxc3 ile Beyazın yapısını değiştirme fırsatı verir.' },
      ],
    },
    '10b': {
      text: 'Zorunlu geri alış: piyon d5’e gelir.',
      amac: 'Taşı geri almak; d5 piyonu merkezde Siyahın filine e6’da destek bulacak.',
      neden: 'Başka geri alış yok; 10...Qd6 ya da 10...Qd8 bir atı kaybettirir (Motor: +5.4).',
    },
    '11w': {
      text: 'Kale c-hattına gelir; ...c5 oynandığında c5’e ve c-hattına baskı yapacak.',
      amac: 'Siyahın beklenen ...c5 ilerleyişine karşı c-hattını önceden almak.',
      neden: 'Motor 11.b3’ü de eşit görüyor. Rc1, Siyahın ...c5 ile asılı piyon almasını zorlaştırmaz, ama oluştuktan sonra onlara baskı yapacak ağır taşı hazırlar.',
      diger: [
        { move: '11.b3', text: 'c4 karesini kontrol etmek; 11...Be6 12.Bd3 Nd7 ile sakin oyun (Motor: 0.0).' },
        { move: '11.Be2', text: 'Gelişim ve rok; Siyahın ...c5 planına karşı daha az hazırlıklı.' },
      ],
    },
    '11b': {
      text: 'Fil e6’ya gelir ve d5 piyonunu korur.',
      amac: 'c8 filini aktif bir kareye çıkarmak ve ...c5’i hazırlamak.',
      neden: 'Tartakower’de fil çoğu zaman b7’ye gider, ama d5’te piyon varken b7 fili kapalı kalır. e6’da fil d5’i korur ve c4 karesine bakar; motor da bu hamleyi en iyisi görüyor.',
      diger: [
        { move: '11...Bb7', text: 'Fil d5 piyonunun arkasında kapalı kalır (Motor: +0.1).' },
        { move: '11...Rd8', text: 'd5’i kaleyle desteklemek; fil gelişimi gecikir (Motor: +0.2).' },
      ],
    },
    '12w': {
      text: 'Vezir a4’e çıkar; a7 piyonuna ve c6 karesine bakar.',
      amac: '...c5 geldiğinde veziri a3’e getirip c5 piyonunu a3–f8 çaprazında e7 vezirine bağlamak.',
      neden: 'Byrne bu anda Fischer’in Capablanca döneminden bilinen fikri tekrar edip etmeyeceğini soruyor. Qa4 ilk bakışta garip, ama 13.Qa3 ile gelecek bağ Siyahın ...c4 ilerleyişini zorlaştıracak. Motor bunu eşite yakın görüyor.',
      diger: [
        { move: '12.Bd3', text: 'Gelişim; 12...c5 13.b3 ile sakin oyun (Motor: 0.0).' },
        { move: '12.Be2', text: 'Normal gelişim; 12...c5 13.b3 a5 ile Siyah rahat (Motor: 0.0).' },
      ],
    },
    '12b': {
      text: 'Siyah c5 ile merkezini genişletir ve vezir kanadında alan alır.',
      amac: 'c- ve d-piyonlarıyla merkezde yer tutmak, taşlarını aktif tutmak.',
      neden: 'Byrne’e göre bu Capablanca’nın adıyla anılan savunma; Siyah alan kazanır ama piyon zayıflıkları ihtimalini kabul eder. Motor 12...a5’i hafifçe tercih ediyor, ama ...c5 Tartakower’in ruhuna uygun.',
      diger: [
        { move: '12...a5', text: 'Vezir kanadını sağlamlaştırmak; 13.Bb5 Qb4+ ile vezir değişimi (Motor: −0.1).' },
        { move: '12...Rc8', text: 'Önce kale, sonra ...c5 (Motor: +0.1).' },
      ],
    },
    '13w': {
      text: 'Vezir a3’e gelir ve c5 piyonunu e7’deki Siyah vezire bağlar.',
      amac: 'c5’e baskı yapmak ve ...c4 ilerleyişini cezalandırmak: c5 piyonu ilerlerse e7 veziri açıkta kalır.',
      neden: 'chess.com’un yazısı 13.Qa3’ün a3–f8 çaprazında bağ kurup asılı piyonlara baskı yaptığını vurguluyor. Motor 13.b3’ü de eşit görüyor, ama Qa3 Fischer’in planının temel taşı.',
      diger: [
        { move: '13.b3', text: 'c4 karesini kontrol etmek; 13...Rc8 14.Be2 c4 ile Siyah aktif (Motor: +0.1).' },
        { move: '13.dxc5', text: 'Hemen değişmek; 13...bxc5 14.Qa3 Rc8 ile oyundakine benzer (Motor: −0.1).' },
      ],
    },
    '13b': {
      text: 'Kale f8’den c8’e gelir ve c5 piyonunu destekler.',
      amac: 'c-hattında savunma ve karşı baskı kurmak; Beyaz dxc5 oynarsa piyonu geri almaya hazır olmak.',
      neden: 'Motor bu hamleyi en iyisi görüyor. Siyah c5’i destekler ve bağdan kurtulmak için ileride vezirini oynatmaya hazırlanır.',
      diger: [
        { move: '13...a5', text: 'Vezir kanadında alan; 14.dxc5 Rc8 ile benzer oyun (Motor: 0.0).' },
        { move: '13...Nd7', text: 'Atı gelişmek; 14.Bb5 ile fil d7’ye baskı yapar (Motor: 0.0).' },
      ],
    },
    '14w': {
      text: 'Fil b5’e çıkar; Siyahın atının d7’ye ve c6’ya gelişini zorlaştırır.',
      amac: 'Siyahın b8 atını sıkıştırmak, ...a6 gibi zaman kaybettiren hamlelere zorlamak ve gelişimi geciktirmek.',
      neden: 'ChessBase’te Havanur bunu Furman’ın yeniliği olarak tanımlıyor; Furman bu hamleyle 1970’te Geller’i yenmişti. Standart hamle 14.Be2’dir. Motor iki hamleyi eşit görüyor; Bb5’in değeri pratik: doğru cevabı bulmak Siyah için zor.',
      diger: [
        { move: '14.Be2', text: 'Standart hamle; 14...a5 15.dxc5 bxc5 ile normal asılı piyon oyunu (Motor: 0.0).' },
        { move: '14.dxc5', text: 'Hemen değişim; 14...bxc5 15.Nd4 a5 (Motor: 0.0).' },
      ],
    },
    '14b': {
      text: 'Siyah a6 ile fili sorgular.',
      amac: 'b5 filini geri çekilmeye zorlamak ve atı d7’ye getirmek.',
      neden: 'Havanur bu hamleyi ağır bir hata olarak işaretliyor; motora göre ise fark küçük (−0.1). Asıl sorun hamlenin sonucunda: 15.dxc5 bxc5 sonrası ...axb5 16.Qxa8 nedeniyle oynanamıyor ve Siyah 16...Ra7 gibi garip bir hamleye muhtaç kalıyor. Geller sonradan 14...Qb7’yi buldu ve Spasski ile bu fikri çalışmıştı.',
      diger: [
        { move: '14...Qb7', text: 'Geller’in fikri: vezir fili hedefler. 15.dxc5 Rxc5 16.Rxc5 bxc5 17.Qxc5 Na6 ile Siyah aktif (Motor: −0.2). Geller 1973’te Timman’a karşı bununla kazandı.' },
        { move: '14...Qc7', text: 'Bağdan çıkmak; 15.dxc5 bxc5 16.Nd4 Qb6 (Motor: −0.2).' },
        { move: '14...Nd7', text: '15.Bxd7 Bxd7 16.dxc5 bxc5 ile Siyah asılı piyonlarla ama iyi bir savunucu fil olmadan kalır (Havanur’un çizgisi).' },
      ],
    },
    '15w': {
      text: 'Beyaz c5’i alır ve asılı piyonları ortaya çıkarır.',
      amac: 'Siyahı c5 ve d5’te asılı piyonlarla bırakmak ve onlara baskıya başlamak.',
      neden: 'Fil b5’te asılı gibi görünür ama 15...axb5?? 16.Qxa8 kale kaybettirir (Motor: +1.5). Beyaz bu taktikle filini kurtarmadan önce yapıyı istediği gibi değiştirir.',
      diger: [
        { move: '15.Be2', text: 'Fil önce çekilir; 15...Qa7 16.dxc5 bxc5 ile benzer yapı (Motor: 0.0).' },
        { move: '15.Bd3', text: 'Daha zayıf; 15...Kf8 ile Siyah bağdan çıkar (Motor: −0.3).' },
      ],
    },
    '15b': {
      text: 'Siyah b-piyonuyla alır; c5 ve d5 artık asılı piyonlar.',
      amac: 'Merkezde iki piyonla alan tutmak ve b-hattını kalelere açmak.',
      neden: '15...Rxc5 16.O-O ile Siyah yalnız d5 piyonuyla kalır (Motor: 0.0). bxc5 daha doğaldır: asılı piyonlar Tartakower’in planlı sonucudur. 15...axb5?? ise 16.Qxa8 ile kale kaybettirir.',
      diger: [
        { move: '15...Rxc5', text: 'Yalnız d5 piyonu yapısı; 16.O-O ile Beyaz d4 karesini kullanır (Motor: 0.0).' },
        { move: '15...axb5?', text: '16.Qxa8 bxc5 17.O-O ile Beyaz kaleyi kazanır (Motor: +1.5).' },
      ],
    },
    '16w': {
      text: 'Beyaz rok yapar ve şahını güvenceye alır.',
      amac: 'Gelişimi tamamlamak ve f1 kalesini oyuna sokmak.',
      neden: 'Fil hâlâ b5’te durabiliyor, çünkü a-hattındaki taktik (...axb5 Qxa8) geçerli. Önce rok, sonra fil çekilişi doğru sıra.',
      diger: [
        { move: '16.Be2', text: 'Önce fili çekmek; motor eşit görüyor (Motor: −0.2).' },
      ],
    },
    '16b': {
      text: 'Kale a7’ye gelir: a8’deki taktik kalkar ve kale yedinci yatayda e7 vezirini korur.',
      amac: '...axb5 tehdidini gerçek yapmak ve c5 piyonunu bağdan kurtarmak (vezir artık kale tarafından korunuyor).',
      neden: 'Havanur bunu yetersiz buluyor, motora göre de küçük bir hata (+0.2, yerine −0.1). Kale a7’de garip durur ve ileride pasif kalır. Daha iyisi veziri oynatmaktı: 16...Qb7 ya da 16...Qa7 hem bağdan çıkar hem fili sorgular.',
      diger: [
        { move: '16...Qb7', text: 'Fil sorgulanır; 17.Ba4 Qb6 ile Siyah aktif (Motor: −0.1). Byrne de bu yolu ve sonra ...Rc6 ile kale ikilemesini önerir.' },
        { move: '16...Qa7', text: 'Bağdan çıkmak; 17.Be2 a5 ile Siyah rahat (Motor: −0.2; Larsen’in önerdiği yol).' },
      ],
    },
    '17w': {
      text: 'Fil e2’ye çekilir; ...axb5 tehdidinden kaçar.',
      amac: 'Fili korumak ve ileride f3 ya da c4 karelerinden merkeze baskı yapmak.',
      neden: 'Motor bunu açık farkla en iyi hamle görüyor; 17.Bd3 ya da 17.Ba4 Siyaha ...a5 ile karşı oyun verir. Havanur’a göre burada oyun Furman–Geller oyununun izinden gidiyor.',
      diger: [
        { move: '17.Ba4', text: '17...a5 ile Siyah vezir kanadında aktif olur (Motor: −0.1).' },
        { move: '17.Bd3', text: '17...a5 18.b3 a4 ile Siyah karşı oyun alır (Motor: −0.1).' },
      ],
    },
    '17b': {
      text: 'At nihayet d7’ye gelişir; c5’i destekler ve f6’ya gidebilir.',
      amac: 'Son taşını oyuna sokmak ve asılı piyonları korumak.',
      neden: 'Motor 17...Kf8 ve 17...a5’i de benzer görüyor. ...Nd7 doğaldır ama atın f6’ya dönmesi gerekecek; b6 karesi de bir seçenek.',
      diger: [
        { move: '17...a5', text: '18.Rc3 Nd7 19.Rfc1 ile Furman–Geller’de görülen yapı (Motor: +0.1).' },
        { move: '17...Kf8', text: 'Şahı bağdan uzaklaştırmak; 18.Rfd1 a5 (Motor: +0.1).' },
      ],
    },
    '18w': {
      text: 'At d4’e gelir ve e6 filine saldırır.',
      amac: 'Asılı piyonların en iyi savunucusu olan e6 filini değişmek.',
      neden: 'Byrne bu hamleyi oldukça güçlü buluyor, çünkü Siyahın c- ve d-piyonları sıkışık ve savunmasız kalıyor. Motor da bunu en iyisi görüyor. d4’teki at hem merkezi bloke eder hem de e6’yı hedefler.',
      diger: [
        { move: '18.Rfd1', text: 'd5’e baskıyı artırmak; 18...Nf6 19.b3 ile yavaş oyun (Motor: +0.2).' },
        { move: '18.b3', text: 'c4 karesini kontrol etmek (Motor: +0.1).' },
      ],
    },
    '18b': {
      text: 'Vezir f8’e çekilir; vezir değişiminden kaçar ve f-hattına bakar.',
      amac: '19.Nxe6 fxe6 sonrası veziri f-hattında tutup f2’ye baskı yapmak.',
      neden: 'Byrne bunun zaman kaybı ve "belki de ölümcül hata" olduğunu söylüyor; Euwe 18...Nf8’i önermişti. Motora göre fark küçük (+0.5, en iyisi 18...Nf6 +0.3). Sorun konumsal: vezir pasif bir kareye gitti ve e6 fili savaşmadan değişildi.',
      diger: [
        { move: '18...Nf6', text: '19.Nb3 c4 20.Qxe7 Rxe7 21.Nd4 ile vezirler gider, Siyah dayanır (Motor: +0.2; Kasparov ve Seirawan’ın incelediği yol).' },
        { move: '18...Nf8', text: 'Euwe’nin önerisi; 19.Nxe6 Nxe6 ile at e6’yı korur (Motor: +0.5).' },
        { move: '18...Rac7', text: 'Kaleyi aktifleştirmek; 19.Rc2 Ne5 (Motor: +0.3).' },
      ],
    },
    '19w': {
      text: 'Beyaz at ile e6 filini alır.',
      amac: 'Asılı piyonların savunucusunu ortadan kaldırmak ve e6’da yeni bir zayıflık yaratmak.',
      neden: 'At f8’deki vezire de saldırıyor, bu yüzden geri alış zorunlu. Motor da Nxe6’yı en iyisi görüyor; Beyazın kalan fili artık Siyahın atından daha iyi bir taş.',
      diger: [
        { move: '19.Qc3', text: '19...Nf6 20.Nxe6 fxe6 ile benzer, ama zaman kaybı (Motor: +0.2).' },
        { move: '19.Nb3', text: 'c5’e baskı, ama Siyah filini korur (Motor: 0.0).' },
      ],
    },
    '19b': {
      text: 'Siyah piyonla alır; e6 zayıf ama f-hattı yarı açık.',
      amac: 'Taşı geri almak ve f-hattında vezirle aktiflik aramak.',
      neden: 'Zorunlu: at f8 vezirine saldırıyordu, 19...Qe7 ya da 19...Qe8 bir taş kaybettirir (Motor: +5.6).',
    },
    '20w': {
      text: 'e4! d5’e piyonla saldırır; Siyah ya değişecek ya da ilerleyecek.',
      amac: 'Asılı piyonları karar vermeye zorlamak: her seçenek Siyaha bir zayıflık bırakacak.',
      neden: 'Byrne bunun önceki değişimlerin asıl amacı olduğunu, Havanur ise Siyahın piyon merkezini en zayıf noktasından yokladığını söylüyor. Wikipedia’da "oyunun anahtar hamlesi" olarak anılıyor. Motor da +0.5 ile en iyisi görüyor.',
      diger: [
        { move: '20.h3', text: 'Bekleme; 20...Nf6 21.Qa5 c4 ile Siyah toparlanır (Motor: +0.3).' },
        { move: '20.b3', text: 'c4 karesini kontrol etmek; 20...Qd6 (Motor: +0.3).' },
      ],
    },
    '20b': {
      text: 'Siyah d4 ile korunan bir geçer piyon alır.',
      amac: 'Merkezi kapatıp d-piyonunu ileride geçer piyon olarak kullanmak.',
      neden: 'Havanur ve chess.com bunu hata sayıyor: a2–g8 çaprazı ve c4 karesi Beyaz file, e5 karesi de Beyaz piyonlara geçti. Motora göre değerlendirme +0.5’ten +1.2’ye çıkıyor. Spasski piyon değişip c5’i yalnız bırakmak istemedi, ama kapalı geçer piyon e5 ve c4 kadar değerli değildi.',
      diger: [
        { move: '20...c4', text: 'Tal’ın önerisi; 21.Qh3 Rc6 22.b3 ile Beyaz biraz üstün (Motor: +0.4; Kasparov’un incelediği çizgi).' },
        { move: '20...dxe4', text: 'Euwe’nin önerisi; 21.Bc4 Qf5 ile Siyahın taşları aktif (Motor: +0.2).' },
        { move: '20...Kh8', text: 'Esnek bekleme; 21.Bg4 Rc6 (Motor: +0.5).' },
      ],
    },
    '21w': {
      text: 'f4! e5 ilerleyişini destekler.',
      amac: 'e5 karesini piyonla işgal etmek ve f-hattını f5 ile açmaya hazırlanmak.',
      neden: 'Motor bu hamleyi açık farkla en iyisi görüyor (+1.3, sonraki 21.h3 +0.5). Siyah 21...e5 ile karşı çıkarsa 22.fxe5 Qe7 23.Bc4+ ile Beyazın fili şahı hedefler (Motor: +1.9).',
      diger: [
        { move: '21.h3', text: 'Bekleme; 21...e5 ile Siyah e5’i alır (Motor: +0.5).' },
        { move: '21.g3', text: '21...Kh8 22.f4 e5 ile Siyah toparlanır (Motor: +0.2).' },
      ],
    },
    '21b': {
      text: 'Vezir e7’ye gelir; e5 karesini kontrol etmeye çalışır.',
      amac: 'Beyazın e5 ilerleyişini geciktirmek ve veziri merkeze yakın tutmak.',
      neden: 'Motor 21...Nb6’yı biraz daha iyi buluyor (+1.0). Kasparov 21...Rc6’yı bir kaynak olarak önermişti (motora göre +1.4). Oyundaki hamle doğal ama e5’i durdurmaz.',
      diger: [
        { move: '21...Nb6', text: 'At d5’e yönelir; 22.Qh3 Rc6 ile Siyah biraz daha iyi direnir (Motor: +1.0).' },
        { move: '21...e5', text: '22.fxe5 Qe7 23.Bc4+ ile Beyazın fili şaha yönelir (Motor: +1.9).' },
      ],
    },
    '22w': {
      text: 'e5: kama piyonu. f6 ve d6 kareleri Siyahın atından alınır.',
      amac: 'Siyahın şah kanadını kilitlemek ve e6 piyonunu sabitlemek.',
      neden: 'Motor 22.Qh3’ü az farkla tercih ediyor (+1.2 / +1.1), ama e5 yapıyı kalıcı olarak Beyaz lehine çevirir. Byrne ve Havanur’un notlarında bu hamle oyunun doğal devamı olarak geçiyor.',
      diger: [
        { move: '22.Qh3', text: 'Önce e6’ya baskı; 22...Kh8 23.e5 ile aynı yapı (Motor: +1.2).' },
        { move: '22.Qg3', text: '22...e5 ile Siyah karşı çıkar (Motor: +0.8).' },
      ],
    },
    '22b': {
      text: 'Kale b-hattına gelir ve b2’ye baskı yapar.',
      amac: 'Vezir kanadında karşı oyun aramak.',
      neden: 'Havanur bunu şüpheli buluyor; Kasparov 22...Nb6’yı önermişti. Motora göre değerlendirme +1.0’den +1.7’ye çıkıyor. Sorun, atın d7’de pasif kalması ve Beyazın b2’yi kolayca savunabilmesi.',
      diger: [
        { move: '22...Nb6', text: 'At d5’e gider; 23.Qd3 Nd5 24.Qe4 ile Beyaz üstün ama Siyah direnir (Motor: +1.0; Kasparov).' },
        { move: '22...Rb7', text: '23.Bxa6 ile Beyaz piyon kazanır (Motor: +1.5).' },
      ],
    },
    '23w': {
      text: 'Fil c4’e gelir; e6 zayıflığına yüklenir ve a2–g8 çaprazına hâkim olur.',
      amac: 'Filin gücünü kullanmak; Siyahın şahını ve e6 piyonunu hedeflemek.',
      neden: 'Motor bunu en iyisi görüyor (+1.5). Byrne’e göre 23...Nb6? 24.Qb3 ile piyon kaybettirirdi (Timman). Fil artık 20...d4’ün açtığı çaprazda.',
      diger: [
        { move: '23.Qh3', text: '23...Rxb2 24.Bc4 ile benzer (Motor: +1.4).' },
        { move: '23.Bd3', text: '23...a5 24.Bc4 ile zaman kaybı (Motor: +1.3).' },
      ],
    },
    '23b': {
      text: 'Şah h8’e çekilir; c4 filinin çaprazından uzaklaşır.',
      amac: 'Şahı a2–g8 çaprazından çıkarmak.',
      neden: 'Motor 23...Re8’i biraz daha iyi buluyor (+1.7). Şah çekilişi ihtiyatlıdır ama zaman kaybettirir.',
      diger: [
        { move: '23...Re8', text: '24.f5 Nxe5 25.Bxe6+ Kh8 ile Siyah karşı oyun arar (Motor: +1.7).' },
        { move: '23...Nb6?', text: '24.Qb3 ile Beyaz e6’yı kazanır (Motor: +1.9; Timman).' },
      ],
    },
    '24w': {
      text: 'Vezir a3’ten h3’e geçer; e6 piyonuna ikinci kez saldırır ve h6’ya bakar.',
      amac: 'c4 fili ile birlikte e6’ya yüklenmek ve veziri şah kanadına, ileride f5 kırılmasını destekleyeceği bölgeye taşımak.',
      neden: 'a3’teki vezirin işi bitmişti: c5 artık ilerleyemiyor, oyun şah kanadına kaydı. Motor bunu en iyisi görüyor (+1.7). 24.Qg3 ise 24...Rxb2 ile bir piyon verirdi (Motor: +1.3); Qh3 e6’ya baskı yaptığı için Siyahın ...Rxb2’sine vakit bırakmaz.',
      diger: [
        { move: '24.Rf2', text: 'Önce b2’yi yatay korumak; 24...Rc7 25.Qh3 ile benzer ama daha yavaş (Motor: +1.4).' },
        { move: '24.Qg3', text: '24...Rxb2 25.f5 Qg5 ile Siyah piyonu alır ve vezir değişimi arar (Motor: +1.3).' },
      ],
    },
    '24b': {
      text: 'At d7’den f8’e çekilir ve e6 piyonunu korur.',
      amac: 'e6’yı tutmak; at f8’den ileride h7–g5 yoluyla da oyuna dönebilir.',
      neden: 'e6 iki kez saldırı altındaydı ve d7’deki at başka iyi bir kare bulamıyordu. Kasparov’un incelediği 24...Rxb2 25.Bxe6 sonrasında Beyazın fili d5’te çok güçlü (Motor: +1.8). Motor 24...Re8’i biraz daha iyi buluyor (+1.7); Nf8 ise atı tamamen pasif bir karede bırakır (+2.0).',
      diger: [
        { move: '24...Re8', text: 'e6’yı kaleyle korumak, atı esnek tutmak; 25.Bd3 a5 26.Rce1 Nf8 (Motor: +1.7).' },
        { move: '24...Rxb2', text: '25.Bxe6 Rc7 26.Bd5 ile e6 düşer, Beyazın fili merkeze yerleşir (Motor: +1.8; Kasparov’un çizgisine yakın).' },
      ],
    },
    '25w': {
      text: 'b3 ile b2 piyonu ileri gelir, c4 filini destekler ve b-hattındaki baskıyı keser.',
      amac: 'Vezir kanadını kalıcı olarak güvenceye almak; bundan sonra bütün taşlar şah kanadına dönebilir.',
      neden: 'Fischer önce rakibin tek karşı oyununu (b2’ye baskı) söndürür. Motor 25.Rf2 ya da 25.Rc2’yi biraz daha iyi buluyor (+2.3 / +2.0), çünkü b3 Siyaha ...a5–a4 ile yeni bir hedef verir; ama fark pratikte küçük.',
      diger: [
        { move: '25.Rf2', text: 'b2’yi yatay korur ve kaleyi f-hattına hazırlar (Motor: +2.3).' },
        { move: '25.Rc2', text: 'b2’yi korur, ardından Rcf2 ile kaleler ikilenir (Motor: +2.2).' },
      ],
    },
    '25b': {
      text: 'Siyah a5 ile vezir kanadında piyon ilerletir.',
      amac: '...a4 ile b3’e saldırmak, c4 filinin desteğini sarsmak ve b-hattını yeniden açmak.',
      neden: 'Siyahın şah kanadında yapacak bir şeyi yok, tek umudu vezir kanadı. Motor 25...Re8 ve 25...Rd8’i benzer görüyor (+2.1 / +2.2); hepsi kötü konumda küçük farklar.',
      diger: [
        { move: '25...Re8', text: '26.Rf3 a5 27.a4 ile Beyaz ...a4’ü önceden durdurur (Motor: +2.1).' },
      ],
    },
    '26w': {
      text: 'f5! Beyaz şah kanadında kırılmayı yapar ve f-hattını açar.',
      amac: 'e6 piyonunu ortadan kaldırıp f-hattını kalelere açmak, e5 piyonuna e6 yolunu hazırlamak.',
      neden: 'Siyah ...a4 ile vezir kanadında oyun kurmadan önce Fischer merkezde ve şah kanadında harekete geçer. Motor 26.a4’ü az farkla daha iyi buluyor (+2.2 / +2.0), ama f5 planın doğal sonucu: e6 değişince c4 fili g8’e, kaleler f7’ye bakar.',
      diger: [
        { move: '26.a4', text: 'Önce ...a4’ü engellemek, f5’i sonraya bırakmak (Motor: +2.2).' },
        { move: '26.Rce1', text: '26...a4 27.f5 Qg5 28.f6 ile benzer saldırı (Motor: +2.1).' },
      ],
    },
    '26b': {
      text: 'Siyah f5 piyonunu alır.',
      amac: 'Piyon kazanmak ve f-hattını f5’teki piyonla kapalı tutmaya çalışmak.',
      neden: 'f5 piyonu Rxf5 ile geri alınacağı için bu piyon kazancı geçicidir; hat yine açılır. Motor 26...Qg5 ile vezir değişimi aramayı öneriyor (+2.1, oyundaki +2.5): vezirler giderse Beyazın saldırısı söner.',
      diger: [
        { move: '26...Qg5', text: '27.Rce1 a4 28.fxe6 axb3 29.axb3 ile Beyaz piyonu geri kazanır ama saldırı daha yavaş (Motor: +2.1).' },
        { move: '26...Qc7', text: '27.fxe6 Qxe5 28.Rce1 ile e6 piyonu çok güçlü (Motor: +3.1).' },
      ],
    },
    '27w': {
      text: 'Kale f5’i alır; f-hattında öne çıkar.',
      amac: 'Kaleyi aktif bir kareye getirmek ve arkasına c1 kalesini dizmek.',
      neden: 'Kale ile almak f-hattında ikilemeyi hızlandırır; vezir h3’te kalır ve h7’ye bakmaya devam eder. Motor 27.Qxf5’i eşit görüyor (+2.6 / +2.5).',
      diger: [
        { move: '27.Qxf5', text: 'Vezirle almak; 27...a4 28.Rce1 ile benzer üstünlük (Motor: +2.6).' },
      ],
    },
    '27b': {
      text: 'At f8’den h7’ye gelir.',
      amac: '...Ng5 ile h3 vezirine saldırmak; at aynı zamanda f8’i korur.',
      neden: 'Havanur’un notlarına göre öteki at hamleleri daha kötüdür: 27...Ng6? 28.Qg3 (Motor: +3.8) ve 27...Ne6? 28.Bxe6 Qxe6 29.Rf8+ Rxf8 30.Qxe6 (Motor: +5.0). Nh7 Siyahın en aktif fikrini, ...Ng5’i hazırlar.',
      diger: [
        { move: '27...Ng6?', text: '28.Qg3 ve ardından Rcf1 ile f-hattı baskısı (Motor: +3.8).' },
        { move: '27...Ne6?', text: '28.Bxe6 Qxe6 29.Rf8+ Rxf8 30.Qxe6 ile Beyaz kaleye karşılık veziri kazanır (Motor: +5.0).' },
      ],
    },
    '28w': {
      text: 'İkinci kale c1’den f1’e gelir; kaleler f-hattında ikilenir.',
      amac: 'f-hattındaki baskıyı artırmak ve Rf7 tehdidini gerçekçi hâle getirmek.',
      neden: 'Byrne’ün belirttiği tuzak: 28.Rf7? Ng5! at hem h3 vezirine hem f7 kalesine saldırır; 29.Rxe7 Nxh3+ 30.gxh3 Rxe7 ile Siyah kalite kazanır (Motor: −3.2). Fischer önce kaleleri ikiler (Motor: +2.9).',
      diger: [
        { move: '28.Rf7?', text: '28...Ng5 29.Rxe7 Nxh3+ 30.gxh3 Rxe7 ile Siyah kalite önde (Motor: −3.2).' },
        { move: '28.Qg3', text: '28...Rf8 ile Siyah kale değişip baskıyı azaltır (Motor: +2.6).' },
      ],
    },
    '28b': {
      text: 'Vezir e7’den d8’e çekilir.',
      amac: 'd4 piyonunu korumak ve vezirle g5 karesini desteklemek.',
      neden: 'Vezir f-hattındaki kalelerin önünden çekilir. Motor 28...a4 ile karşı oyunu hemen başlatmayı daha iyi buluyor (+2.6 / +3.2): ...axb3 ile b-hattı açılırdı.',
      diger: [
        { move: '28...a4', text: '29.Qg4 Qe8 30.h4 d3 ile Siyah biraz karşı oyun bulur (Motor: +2.6).' },
        { move: '28...Qd7', text: '29.e6 Qd6 30.Rd5 ile e-piyonu ilerler (Motor: +3.2).' },
      ],
    },
    '29w': {
      text: 'Vezir h3’ten g3’e geçer; g7’ye bakar ve e5 piyonunu destekler.',
      amac: 'Veziri ...Ng5’in saldırısından uzaklaştırmak ve şahın önündeki g7’ye baskı kurmak.',
      neden: 'h3’teki vezir ...Ng5 ile tempo kaybına açıktı; g3’te at g5’e gelse bile vezire saldırmaz. Motor 29.e6’yı eşit görüyor (+3.1 / +3.0). Fischer önce rakibin aktif fikrini söndürmeyi seçer.',
      diger: [
        { move: '29.e6', text: '29...Qd6 30.Rd5 Qb6 31.Qg3 ile benzer (Motor: +3.1).' },
        { move: '29.Qg4', text: '29...a4 30.h4 ile (Motor: +2.6).' },
      ],
    },
    '29b': {
      text: 'a7 kalesi e7’ye gelir.',
      amac: 'e-piyonunun önünü kesmek ve yedinci yatayı savunmak.',
      neden: 'Siyah e5–e6 ilerleyişinden korkar ve kalesini savunmaya çeker. Motor aktif hamleleri daha iyi buluyor: 29...a4 (+2.9) ya da 29...d3 piyon fedası (+2.9); oyundaki pasif Re7 +3.8.',
      diger: [
        { move: '29...a4', text: '30.e6 Rba8 31.Qe5 d3 ile Siyah karşı oyun arar (Motor: +2.9).' },
        { move: '29...d3', text: '30.Bxd3 a4 31.Bc4 axb3 ile b-hattı açılır (Motor: +2.9).' },
      ],
    },
    '30w': {
      text: 'h4 ile g5 karesi tamamen kapatılır.',
      amac: 'Siyahın atını h7’de hapsetmek; at artık g5’e çıkamaz.',
      neden: 'Saldırıdan önce rakibin son aktif taşını felç eder. Motor 30.e6’yı biraz daha iyi buluyor (+3.4 / +3.2), çünkü e6 sonrası ...Ng5’in de bir yararı olmaz; ama h4 riski sıfırlar ve şaha da bir hava karesi verir.',
      diger: [
        { move: '30.e6', text: '30...Ng5 31.Rd5 Qe8 32.Re5 ile e-piyonu desteklenir (Motor: +3.4).' },
        { move: '30.Qg6', text: '30...a4 31.bxa4 Rb4 ile Siyah karşı oyun alır (Motor: +2.7).' },
      ],
    },
    '30b': {
      text: 'b8 kalesi b7’ye gelir; kaleler yedinci yatayda yan yana durur.',
      amac: 'Yedinci yatayı iki kaleyle savunmak.',
      neden: 'Siyah tamamen savunmaya geçmiştir. Motor 30...d3’ü az farkla tercih ediyor (+3.1 / +3.3): 31.Bxd3 Qd4+ 32.Kh2 ile Siyah veziri aktifleşir.',
      diger: [
        { move: '30...d3', text: '31.Bxd3 Qd4+ 32.Kh2 Rd8 ile vezir merkeze gelir (Motor: +3.1).' },
        { move: '30...g5?', text: '31.Rf7 ile şahın önü daha da zayıflar (Motor: +4.0).' },
      ],
    },
    '31w': {
      text: 'e6! Piyon d7 ve f7 karelerini kontrol eder.',
      amac: 'Siyahın kalelerini yedinci yataya hapsetmek ve f7 karesini kalelere hazırlamak.',
      neden: 'e5 piyonunun görevi kilitlemekti; şimdi koçbaşı olur. Byrne’e göre Siyah artık çaresizdir ve ikinci yatayda büzülmek zorundadır. Motor bunu en iyisi görüyor (+3.8).',
      diger: [
        { move: '31.Qg6', text: '31...Qe8 32.Qxe8+ Rxe8 ile vezirler gider, saldırı söner (Motor: +3.3).' },
        { move: '31.Kh1', text: 'Sakin; 31...Qb8 ile Siyah biraz nefes alır (Motor: +3.0).' },
      ],
    },
    '31b': {
      text: 'b7 kalesi c7’ye gelir ve c5 piyonunu korur.',
      amac: 'Rxc5 tehdidini önlemek.',
      neden: 'Byrne’e göre 31...Qc7? 32.Rf8+! Nxf8 33.Rxf8+ Kh7 34.Bd3+ g6 35.Qxg6# ile mat olurdu; motor da bunu doğruluyor. Motor 31...a4’ü daha iyi buluyor (+3.2 / +4.3).',
      diger: [
        { move: '31...Qc7?', text: '32.Rf8+ Nxf8 33.Rxf8+ Kh7 34.Bd3+ g6 35.Qxg6# (Motor: mat).' },
        { move: '31...a4', text: '32.Qg6 Qe8 33.Qxe8+ ile vezirleri değiştirmek (Motor: +3.2).' },
      ],
    },
    '32w': {
      text: 'Vezir g3’ten e5’e gelir; merkezde güçlü bir konum alır.',
      amac: 'e6 piyonunu desteklemek, d4 ve c5’e baskı yapmak.',
      neden: 'Motor 32.Qg6’yı daha iyi buluyor (+4.3 / +3.5), ama Qe5 de açık farkla kazanır. Vezir merkezde hem saldırıda hem savunmada etkili.',
      diger: [
        { move: '32.Qg6', text: '32...Qe8 33.Qg3 Qd8 34.a4 ile (Motor: +4.3).' },
        { move: '32.a4', text: '...a4’ü önceden durdurmak (Motor: +4.1).' },
      ],
    },
    '32b': {
      text: 'Vezir d8’den e8’e gelir; e6 piyonuna bakar.',
      amac: 'e6 piyonuna baskı yapmak.',
      neden: 'e6 piyonu f5 kalesi ve c4 filiyle korunuyor, baskı bir şey getirmez. Motor 32...a4’ü daha iyi buluyor (+3.6 / +4.1).',
      diger: [
        { move: '32...a4', text: '33.R5f3 axb3 34.axb3 Ra7 ile karşı oyun (Motor: +3.6).' },
        { move: '32...d3', text: '33.Rd1 Rcd7 34.Qxc5 ile (Motor: +3.8).' },
      ],
    },
    '33w': {
      text: 'a4 ile Siyahın vezir kanadındaki tek karşı oyunu söndürülür.',
      amac: '...a4 fikrini kalıcı olarak engellemek.',
      neden: 'Motor en iyisi görüyor (+4.4). Fischer saldırıdan önce rakibin her karşı oyununu kapatır; ...a4 olmayınca b3 ve c4 sağlam kalır.',
      diger: [
        { move: '33.Qg3', text: '33...Rb7 34.Rxc5 a4 ile Siyah karşı oyun alır (Motor: +4.1).' },
        { move: '33.R1f3', text: '33...Qd8 34.Rh5 ile (Motor: +4.1).' },
      ],
    },
    '33b': {
      text: 'Siyah vezirini d8’e geri getirir.',
      amac: 'Beklemek ve d4’ü korumak.',
      neden: 'Siyahın iyi bir hamlesi yok, taşlarının çoğu yedinci yatayda bağlı. Motor da Qd8’i en iyisi görüyor (+4.0).',
      diger: [
        { move: '33...d3', text: '34.Bxd3 Qd8 35.R1f3 ile piyon gider (Motor: +4.1).' },
        { move: '33...Qa8', text: '34.Rf7 Rxf7 35.exf7 Rc8 ile (Motor: +4.3).' },
      ],
    },
    '34w': {
      text: 'f1 kalesi f2’ye gelir; f3 üzerinden şaha yönelecek.',
      amac: 'Kaleleri yeniden düzenleyip Rf3–h3/g3 gibi saldırı yolları açmak.',
      neden: 'Motor 34.Qg3’ü daha iyi buluyor (+4.3 / +3.4), ama Fischer acele etmeden taşlarını en iyi karelere getirir. Siyahın karşı oyunu olmadığı için zaman Beyazın lehine.',
      diger: [
        { move: '34.Qg3', text: '34...Qa8 35.Rf7 Rxf7 36.exf7 ile (Motor: +4.3).' },
        { move: '34.Bd3', text: 'Fili b1–h7 çaprazına getirmek (Motor: +4.3).' },
      ],
    },
    '34b': {
      text: 'Vezir e8’e döner.',
      amac: 'Beklemek ve e6’ya bakmak.',
      neden: 'Havanur’a göre 34...d3 35.Rd2 ile Beyaz piyonu alır. Motor 34...d3’ü yine de biraz daha iyi buluyor (+3.8 / +4.3).',
      diger: [
        { move: '34...d3', text: '35.Rd2 Rcd7 36.Rf3 Nf6 ile (Motor: +3.8).' },
        { move: '34...Rcd7', text: '35.Qxc5 Rd6 ile (Motor: +4.0).' },
      ],
    },
    '35w': {
      text: 'f2 kalesi f3’e gelir.',
      amac: 'Rh3 ya da Rg3 ile şaha saldırıya hazırlanmak.',
      neden: 'Kale f3’te hem f-hattında kalır hem de üçüncü yataydan şah kanadına geçebilir. Motor en iyisi görüyor (+4.5).',
      diger: [
        { move: '35.Bd3', text: '35...Qg8 36.Bc4 ile zaman kaybı (Motor: +4.1).' },
      ],
    },
    '35b': {
      text: 'Vezir d8’e döner; Siyahın iyi bir hamlesi yok.',
      amac: 'Beklemek.',
      neden: 'Siyah zugzwang’a yakın bir konumda vezirini gidip getirir. Motor 35...d3’ü eşit görüyor (+4.6).',
      diger: [
        { move: '35...d3', text: '36.Rxd3 Rc6 37.Re3 ile (Motor: +4.6).' },
      ],
    },
    '36w': {
      text: 'Fil c4’ten d3’e gelir; b1–h7 çaprazına geçer ve h7 atını hedefler.',
      amac: 'Qe4 ile h7’ye fil–vezir bataryası kurmak.',
      neden: 'f5 kalesi çekilince d3–h7 çaprazı açılacak. Motor 36.Rh5’i daha iyi buluyor (+5.3 / +4.6), ama Bd3 de açık farkla kazanır ve doğrudan şaha yönelir.',
      diger: [
        { move: '36.Rh5', text: '36...Kg8 37.Rg3 Qe8 38.Rxh6 ile (Motor: +5.3).' },
        { move: '36.g4', text: '36...Rcd7 37.Bd3 ile (Motor: +4.1).' },
      ],
    },
    '36b': {
      text: 'Vezir e8’e döner.',
      amac: 'e6’ya bakmak ve beklemek.',
      neden: 'Motor 36...c4’ü daha iyi buluyor (+4.3 / +5.6). Havanur 36...Qg8 37.Rf7 ile de Beyazın kazandığını gösteriyor.',
      diger: [
        { move: '36...c4', text: '37.Bxc4 Qe8 38.Qxd4 ile (Motor: +4.3).' },
        { move: '36...Qg8', text: '37.Qd6 Ra7 38.Bc4 ile (Motor: +4.6).' },
      ],
    },
    '37w': {
      text: 'Vezir e5’ten e4’e gelir; d3 filiyle h7’ye batarya kurar.',
      amac: 'Rf8+ Nxf8 Rxf8+ Qxf8 Qh7# tehdidi.',
      neden: 'Motor bu tehdidi üç hamlede mat olarak gösteriyor. Byrne’e göre bu karşı konulmaz bir saldırı. Motor 37.Rf7’yi biraz daha iyi buluyor (+5.5 / +5.0).',
      diger: [
        { move: '37.Rf7', text: '37...Qg8 38.Bxh7 Kxh7 39.Qf5+ ile (Motor: +5.5).' },
        { move: '37.Bc4', text: '37...d3 38.Rxd3 ile (Motor: +4.7).' },
      ],
    },
    '37b': {
      text: 'At h7’den f6’ya gelir; vezire saldırır ve f8 karesini savunmayı bırakır.',
      amac: 'Mat tehdidini engellemek.',
      neden: 'Byrne’e göre 37...Rxe6? 38.Rf8+ Nxf8 39.Rxf8+ Qxf8 40.Qh7# ile mat olurdu. Motor Nf6’yı en iyisi görüyor (+5.1); diğer hamleler daha hızlı kaybeder.',
      diger: [
        { move: '37...Rxe6?', text: '38.Rf8+ Nxf8 39.Rxf8+ Qxf8 40.Qh7# (Motor: mat).' },
        { move: '37...g6', text: '38.Qe5+ Kg8 39.Rf7 ile (Motor: +6.7).' },
      ],
    },
    '38w': {
      text: 'Rxf6! Kalite fedası; şahın önü açılıyor.',
      amac: 'Şahın son savunucusunu kaldırmak.',
      neden: 'Byrne’e göre bu hamle zaferi mühürler. Motor en iyisi görüyor (+5.7). gxf6 sonrası ikinci kale f6’ya gelir ve h6 düşer.',
      diger: [
        { move: '38.Qf4', text: '38...h5 39.Rg3 ile de kazanır (Motor: +5.0).' },
        { move: '38.Qe5', text: '38...c4 39.bxc4 ile (Motor: +4.5).' },
      ],
    },
    '38b': {
      text: 'Siyah g-piyonuyla kaleyi alır.',
      amac: 'Taşı geri almak.',
      neden: 'Diğer hamleler matla biter: 38...g6 39.Rf8+ (motor: 5 hamlede mat), 38...Qg8 39.Rf8 (4 hamlede mat). Almak zorunlu.',
    },
    '39w': {
      text: 'İkinci kale f6’yı alır; h6 ve f8 hedefte.',
      amac: 'Rxh6+ ve vezirle f4/e5 üzerinden saldırıyı sürdürmek.',
      neden: 'Motor en iyisi görüyor (+5.5). 39.Qf4 ya da 39.Bc4 çok daha zayıf (+3.5 / +2.0), çünkü Siyah ...Qf8 ile toparlanır.',
      diger: [
        { move: '39.Qf4', text: '39...Qf8 40.Rg3 ile (Motor: +3.5).' },
      ],
    },
    '39b': {
      text: 'Şah g8’e kaçar.',
      amac: 'Şahı h6 hattından uzaklaştırmak.',
      neden: 'Motor 39...c4’ü biraz daha iyi buluyor (+5.5 / +6.6).',
      diger: [
        { move: '39...c4', text: '40.Rxh6+ Kg8 41.Bxc4 ile (Motor: +5.5).' },
      ],
    },
    '40w': {
      text: 'Fil c4’e döner; e6 piyonunu destekler ve a2–g8 çaprazını kontrol eder.',
      amac: 'g8 şahına yönelmek ve e6’yı korumak.',
      neden: 'Motor 40.Bb5’i biraz daha iyi buluyor (+6.9 / +6.6), ama ikisi de kazanır. Bc4 ile şah g8’de kalamaz.',
      diger: [
        { move: '40.Bb5', text: '40...Rcd7 41.exd7 ile (Motor: +6.9).' },
      ],
    },
    '40b': {
      text: 'Şah h8’e döner. Artık savunma yok.',
      amac: 'Beklemek.',
      neden: 'Şah c4 filinin çaprazından çıkmak zorundaydı. Motor 40...Kg7’yi biraz daha iyi buluyor (+6.3 / +7.3).',
      diger: [
        { move: '40...Kg7', text: '41.Qe5 Kh7 42.Bb5 ile (Motor: +6.3).' },
      ],
    },
    '41w': {
      text: 'Qf4: Qxh6+ ve Rf8+ tehditleri. Spasski terk etti.',
      amac: 'Vezirle h6’ya girip saldırıyı bitirmek.',
      neden: 'Byrne’e göre 41...Rc8 42.Rxh6+ Kg8 43.Qg4+ Rg7 44.e7+ Qf7 45.Qxc8# gelir. 41...Kg7 de 42.Qxh6+ Kg8 43.Rg6+ ile kaybeder. Motor +7.5.',
    },
  },
  exercises: [
    { id: 'fs-1', kind: 'tekrar', plan: false, title: 'e5 için destek',
      source: 'Fischer – Spasski, 1972, 6. oyun (21. hamle)',
      fen: '2r2qk1/r2n2p1/p3p2p/2p5/3pP3/Q7/PP2BPPP/2R2RK1 w - - 0 21',
      prompt: 'Siyah ...d4 ile korunan geçer piyon aldı. Bunun karşılığında e5 karesi zayıfladı. Beyazın şah kanadı planını başlatan hamle hangisi?',
      hint: 'e-piyonunun ilerleyişini destekleyecek piyon hangisi?',
      line: ['f4'],
      explanation: '**21.f4!** e5 ilerleyişi hazırlanır ve f-hattı ileride f5 ile açılacak. Motor: f4 +1.0, sonraki en iyi hamle +0.4.',
      link: 'Asılı piyonlar ilerleyince arkalarında zayıf kareler kalır. Beyaz şimdi e5 karesini piyonla işgal edecek.' },
    { id: 'fs-2', kind: 'tekrar', plan: true, title: 'Kalite fedası',
      source: 'Fischer – Spasski, 1972, 6. oyun (38. hamle)',
      fen: '4q2k/2r1r1p1/4Pn1p/p1p2R2/P2pQ2P/1P1B1R2/6P1/6K1 w - - 9 38',
      prompt: 'Siyah ...Nf6 ile vezire saldırdı. Fischer’in bitirici hamlesini bulun.',
      hint: 'f6’daki at şahın son savunucusu.',
      line: ['Rxf6'],
      explanation: '**38.Rxf6!** gxf6 39.Rxf6 sonrası Siyah şahının önü açılır; Rxh6+ ve Qh7 tehditleri durdurulamaz. Motor 38.Qf4 ve 38.Qe5’i de kazanan hamleler olarak görüyor, ama en güçlüsü Rxf6 (+6.9).',
      link: 'Maç boyunca hazırlanan f-hattı baskısının sonucu: iki kale ve vezir f6 karesine toplandı.' },
    { id: 'fs-3', kind: 'transfer', plan: false, title: 'Karpov da d5’e vuruyor',
      source: 'Karpov – Spasski, Adaylar yarı finali, Leningrad 1974 (21. hamle)',
      fen: 'r1b2rk1/2b2pp1/p1pq3p/PpNp4/1PnP4/2N1P1P1/4BP1P/2RQ1RK1 w - - 1 21',
      prompt: 'Aynı Tartakower Savunması, aynı rakip. Siyahın d5 piyonu c6 ile destekleniyor ve atı c4’te güçlü. Merkezi nasıl açarsınız?',
      hint: 'd5 piyonuna bir piyonla saldırın.',
      line: ['e4'],
      explanation: '**21.e4!** d5’e saldırılır; 21...dxe4 sonrası Beyazın atları e4 ve c5 karelerini kullanır, c4 atının desteği zayıflar. Motor: e4 +0.8, sonraki en iyi hamle −0.2.',
      link: 'Fischer de 20.e4 ile d5’e vurdu. Karpov’un maçında Siyahın merkezi asılı piyonlar değil c6-d5 zinciri, ama yöntem aynı: piyonla merkeze saldırmak.' },
    { id: 'fs-4', kind: 'transfer', plan: false, title: 'Veziri uzaklaştır',
      source: 'Karpov – Spasski, Adaylar yarı finali, Leningrad 1974 (24. hamle)',
      fen: 'r4rk1/2b2pp1/p1p3qp/PpN5/1PnPN3/6Pb/4BP1P/2RQR1K1 w - - 1 24',
      prompt: 'Merkez açıldı. Siyah veziri g6’da hem saldırıyor hem c6’yı uzaktan koruyor. Ne oynarsınız?',
      hint: 'Fil, vezire tempo ile saldırabilir.',
      line: ['Bh5'],
      explanation: '**24.Bh5!** Fil vezire saldırır ve onu c6 ile e6 karelerinden uzaklaştırır. Ardından Qf3 ve Qxc6 ile Beyaz zayıf c6 piyonunu alır. Motor: Bh5 +1.6, sonraki en iyi hamle +0.8.',
      link: 'Fischer e6 zayıflığına yüklendi, Karpov c6 zayıflığına. İki maçta da Beyaz, merkez açıldıktan sonra Siyahın zayıf piyonunu hedef aldı.' },
  ],
};
