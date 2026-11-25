// Carlsen – Kamsky, Dünya Kupası, Hantı-Mansiysk 2005. Kaynak: PgnMentor (Carlsen.pgn).
export default {
  id: 'carlsen-kamsky-2005',
  theme: 'Geçer f-piyonu ve at: şahlı hamlelerle karşı oyun',
  white: 'Magnus Carlsen', black: 'Gata Kamsky',
  whiteShort: 'Carlsen', blackShort: 'Kamsky',
  event: 'Dünya Kupası', site: 'Hantı-Mansiysk', year: 2005, eco: 'B48',
  variation: 'Sicilya Kan (Paulsen), 5.Nc3 Qc7 6.Bd3',
  result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 Qc7 6. Bd3 Nf6 7. O-O Nc6 8. Be3 b5 9. Nxc6 Qxc6 10. f3 Bc5 11. Qe1 d6 12. Kh1 Bxe3 13. Qxe3 O-O 14. Rfd1 Bb7 15. Qd4 Qc5 16. Qxc5 dxc5 17. a4 b4 18. Nb1 Nd7 19. Nd2 Ne5 20. Be2 a5 21. Kg1 g5 22. Kf2 Ba6 23. g3 Rfd8 24. f4 gxf4 25. gxf4 Ng6 26. Bxa6 Rxa6 27. Nc4 Rxd1 28. Rxd1 Nxf4 29. Rd8+ Kg7 30. Rc8 f5 31. Kf3 Nh3 32. exf5 exf5 33. Rxc5 Ng5+ 34. Ke3 f4+ 35. Ke2 Re6+ 36. Re5 Rc6 37. b3 Kf6 38. Rxa5 Re6+ 39. Kf2 f3 40. Ne3 Re4 41. Ra6+ Ke5 42. Rh6 Rd4 43. Nc4+ Kf5 44. h4 Nf7 45. Rb6 Rxh4 46. Rxb4 Rh3 47. a5 Ng5 48. a6 Ne4+ 49. Ke3 f2+ 50. Ke2 Rc3 51. Nd2 Rxc2 52. Rd4 Nxd2 53. Rd5+ Ke6 0-1`,

  summary: 'Hantı-Mansiysk 2005 Dünya Kupası’nda 9.–10. sıra maçının **ikinci hızlı oyunu**. 15 yaşındaki Carlsen ile on yıla yakın aradan sonra satranca dönen Kamsky karşı karşıya. Kamsky Kan varyantında sağlam bir yol seçti: önce ...Bc5 ile kara kareli filleri, sonra ...Ba6 ile beyaz kareli filleri değişti ve oyunu at-kale oyun sonuna indirdi. ...g5 hamlesi f4 karesini atına üs yaptı. Ancak 23...Rfd8 ve 25...Ng6 küçük hatalarıyla Beyaz a5 ve c5 zayıflıklarını topladı; 30. hamleden sonra Carlsen piyon üstünlüğü ve geçer a-piyonuyla açıkça kazanan konumdaydı (Motor: +3 ile +5 arası). Kamsky’nin kazanmasının sırrı, kaybetmekte olduğu konumda bile **tek bir karşı plana — geçer f-piyonu + at + kale ile Beyaz şahına şah çekmeye — sadık kalmasıydı**. Piyonu ...f5-f4-f3 ile ilerletti, atı g5’e getirdi, kaleyi h3’e yerleştirdi ve bekledi. Carlsen 48.a6?? ile acele edince 48...Ne4+! ve 49...f2+ ile oyun bir anda döndü. Kamsky 50...Rc3? ile kesin kazancı (50...Rf3!) kaçırdı, ama Carlsen de 51.Nd2? ile hata yaptı ve 51...Rxc2! bağlı atı söküp maçı bitirdi.',
  intro: 'Bu oyun bir Dünya Kupası “sıralama” maçında oynandı: Carlsen 4. turda Bareev’e elenmişti ve sonraki turlarda Lautier ile Malakhov’u yenerek 9.–10. sıra maçına çıktı; Kamsky de Sakayev ve Vallejo’yu yenerek aynı maça geldi. İki klasik oyun 1–1 bitti; tie-break’te iki hızlı oyun (25 dakika + 10 saniye) oynandı. Kamsky ilk hızlı oyunu kazandığı için Carlsen bu ikinci oyunu kazanmak zorundaydı; Kamsky bunu da kazandı ve maçı 3–1 aldı. ChessBase raporu, ilk hızlı oyunda tecrübeli büyükustanın “uzun arasına rağmen” genç rakibini oyun dışı bıraktığını, bu ikinci oyunu ise uzun bir turnuvanın sonundaki hızlı oyunlara özgü “yürek burkan bir dram” olarak anlatıyor. İlk on, 2007 Adaylar Turnuvası’na katılma hakkı kazandığı için iki oyuncu da zaten Adaylar’a gidiyordu; maç sıralamayı belirledi.\n\nAçılış, Sicilya’nın Kan (Paulsen) kuruluşuyla başladı: Siyah 4...a6 ile Nb5’i önler ve ...b5’i hazırlar, 5...Qc7 ile e5 karesini kontrol eder. 7...Nc6’dan sonra oyun aslında Taimanov’un 6.Be3 a6 7.Bd3 Nf6 8.O-O kuruluşuna geçti (bu yüzden ECO kodu B48). Siyah ...b5, ...Bc5 ve ...d6 ile esnek bir yapı kurdu; vezirler erkenden değişti ve oyunun asıl dersi oyun sonunda verildi: **geçer bir piyon, at ve kale birlikteyken savunan şah ne kadar rahatsız olur ve önde olan taraf karşı oyunu durdurmadan neden kendi piyonunu koşturmamalıdır.**',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'f3 ve Qe1-e3 ile e4’ü sağlam tutmak; kara kareli filler değişince vezirleri de değişip daha iyi piyon yapısıyla oyun sonuna geçmek.',
      '17.a4 ile ...b5 piyonunu sorgulamak: Siyah ...b4 oynayınca b4 ve sonra a5 piyonları ilerlemiş ama desteksiz hedeflere dönüşür.',
      'Atı Nb1-d2-c4 yolundan geçirip a5, c5 ve d6 karelerine baskı yapmak; fili e2’ye getirip c4’ü desteklemek.',
      'Şahı f2-e3’e getirmek ve f4 ile Siyah atını e5’ten kovalamak; d-hattını kalelerle almak.',
      'Kaleyi sekizinci ve yedinci yataya sokup c5, a5 ve b4 piyonlarını toplamak; ardından geçer a-piyonunu ilerletmek.',
      'Geçer piyon koşusundan önce Siyahın karşı oyununu kesmek: atı e3/g4’e getirip f-piyonunu ve şah çeken atı durdurmak (48.Ne3+ planı).',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...b5 ve ...Bc5 ile vezir kanadında alan almak, kara kareli fillerin değişimini zorlamak; Beyazın İngiliz Atağı tipi piyon fırtınasına fırsat vermemek.',
      '...Qc5 ile vezirleri değişip tehlikesiz bir oyun sonuna geçmek; ...dxc5 ile d4 karesini kontrol etmek.',
      'Atı d7-e5’e getirip c4 ve d3’e bakmak; ...g5 ile f4 karesini atın gelecekteki üssü yapmak.',
      '...Ba6 ile Beyazın iyi filini değişip oyunu at oyun sonuna indirmek.',
      'Piyon kaybettikten sonra pasif savunma yerine ...f5-f4-f3 ile **geçer f-piyonu** yaratmak ve onu kale (h3) ve at (g5/e4) ile desteklemek.',
      'At şahları (...Ng5+, ...Ne4+) ve piyon şahlarıyla (...f4+, ...f2+) tempo kazanıp Beyaz şahını f1 karesinden uzaklaştırmak; rakip hata yaptığında hemen cezalandırmak.',
    ] },
  },
  critical: [
    { move: '21b', title: '21...g5: f4 karesi için piyon', text: 'Siyah g-piyonunu iki kare ilerleterek f4 karesini kontrol eder. Bu hamlenin iki amacı var: Beyazın f3-f4 ilerleyişini zorlaştırmak ve f4 olursa ...gxf4 ile g-hattını açıp atı e5-g6-f4 yolundan merkeze yakın bir üsse getirmek. Bedeli de var: f5 ve h5 kareleri zayıflar, şah biraz açılır. Motor konumu dengeli görüyor (Motor: +0.3); Kamsky’nin sonraki bütün atlı oyunu bu hamlenin üzerine kurulu.' },
    { move: '23b', title: '23...Rfd8?: küçük ama önemli yanlış', text: 'Doğal görünen bu kale hamlesi Beyaza 24.f4 ile atı kovalama fırsatı verir. Motor 23...f5! (Motor: 0.0) ya da 23...Bxe2 24.Kxe2 f5 ile denge görüyor; maç hamlesinden sonra Beyaz +0.9. Sebep: 24.f4 gxf4 25.gxf4 sonrasında at g6’ya gitmek zorunda kalır, Beyaz filleri değişir ve 27.Nc4 ile a5 ve c5 piyonlarına aynı anda saldırır.' },
    { move: '28b', title: '28...Nxf4: at f4’te ama piyonlar zayıf', text: 'Kamsky’nin planı sonunda gerçekleşti: at f4’te. Fakat bunun için Beyaza zaman verdi; Beyazın kalesi 29.Rd8+ ve 30.Rc8 ile c5’e, atı c4’ten a5’e baskı yapıyor. Motor +1.5 diyor: Siyah piyon kaybetmeye mahkûm. Burada Kamsky’nin doğru kararı, piyonları kurtarmaya çalışmak yerine 30...f5 ile e4’ü sorgulayıp kendine geçer bir f-piyonu yaratmak oldu.' },
    { move: '39b', title: '39...f3: geçer piyon üçüncü yatayda', text: 'Beyaz a5’i alıp bir piyon öne geçti (Motor: +2.7 ile +3.5 arası), ama Siyahın f-piyonu f3’e kadar ilerledi. Bundan sonra Beyaz şahı f2-e3-f1 karelerine bağlı kalır; Siyahın kalesi h3’ten, atı g5’ten bu piyonu destekler ve her an bir şahla tempo kazanabilir. Kâğıt üzerinde Beyaz kazanıyor; pratikte ise hızlı oyunda tek bir yanlış hamle oyunu döndürebilir.' },
    { move: '45w', title: '45.Rb6: kaçan sade kazanç', text: 'Motor 45.Ne3+! (Motor: +4.2) ile önce atı merkeze getirip f-piyonunu ve Siyah şahını kontrol etmeyi öneriyor: 45...Ke5 46.Rxh7 Nd6 47.Kg3 ve f3 piyonu düşer. 45.Rb6 de kazanıyor (Motor: +3.2), ama Siyahın kalesine h4’ü alıp h3’e yerleşme şansı verir. Karşı oyunu söndürmek, piyon koşturmaktan önemlidir.' },
    { move: '48w', title: '48.a6??: sabırsızlık', text: 'ChessBase’in analizinde bu hamle “??” ile işaretlenmiş ve basit kazanç yolu verilmiş: **48.Ne3+! Ke5 49.Ng4+** (at h6 ve e3’ü kontrol eder) **Kf5 50.a6**; ya da 48...Ke6 49.a6. Motor 48.Ne3+ için +5.4 diyor. 48.a6?? ise atı c4’te bırakır; e4 karesi Siyah atına açılır ve 48...Ne4+! sonrasında Siyah kazanır (Motor: −6.0).' },
    { move: '48b', title: '48...Ne4+! ve 49...f2+', text: 'Kamsky fırsatı hemen gördü. At şah çekerek Beyaz şahını f2’den uzaklaştırır: 49.Kf1?? ve 49.Ke1?? Rh1# ile, 49.Kg1? ise 49...f2+ ve birkaç hamlede mat ile biter; şah e3’e gitmek zorunda. Ardından 49...f2+! piyon yine şahla ilerler ve Beyaz şahı f1 karesine dönemez. Piyon artık terfiye bir kare uzakta ve Beyazın a-piyonu hâlâ a7’ye bile ulaşmadı.' },
    { move: '50b', title: '50...Rc3?: kesin kazancı kaçıran hamle', text: 'ChessBase ve motor aynı fikirde: **50...Rf3!** kazanıyordu. 51.Kxf3 f1=Q+ 52.Ke3 Qe1+ 53.Kd3 Qxb4 ve Siyah kaleyi alır; 51.Ne3+ Rxe3+ 52.Kxe3 f1=Q de aynı sonuç (Motor: −6.8). 50...Rc3? ise Beyaza 51.Kf1! ile f-piyonunu durdurup yeniden kazanma şansı verirdi (Motor: +4.6). Ama hızlı oyunda iki taraf da hata yapmaya devam etti.' },
    { move: '51b', title: '51...Rxc2!: bağlı at', text: 'Carlsen 51.Nd2? ile e4 atına saldırıp f1’i korumak istedi. Kamsky kaleyi c2’ye sokar: d2 atı artık e2 şahına bağlıdır, çünkü at oynarsa kale d2’den şah çeker. 52.Rxe4 Rxd2+ 53.Kxd2 f1=Q geldiğinde Siyahın veziri olur. Motor: 51...Rxc2 −3.1, 51...Nxd2 ise sadece eşitlik (0.0).' },
  ],
  lessons: [
    'Kan/Taimanov kuruluşlarında Siyah, ...b5 ve ...Bc5 ile kara kareli filleri değişip vezirleri erken indirerek riskli bir oyunu sakin bir oyun sonuna çevirebilir; ama piyonlar ilerledikçe (b4, a5, c5) her biri yeni bir hedef olur.',
    '...g5 gibi bir piyon hamlesi bir karenin (burada f4) atın üssü olmasını hazırlar; fakat bu kareyi kullanmak zaman ister ve rakip bu sırada başka bir yerde kazanç arar.',
    'Kaybeden konumda en iyi pratik şans tek ve net bir karşı plandır. Kamsky piyon kaybedince geçer f-piyonu + at + kale üçlüsünü Beyaz şahına yöneltti ve sabırla rakibin hata yapmasını bekledi.',
    'Geçer piyon şahlı hamlelerle ilerlerse (…f4+, …f2+) savunan taraf karşı hamle için zaman bulamaz. At şahları rakip şahı piyonun önünden uzaklaştırmanın en etkili yoludur.',
    'Önde olan taraf kendi piyonunu koşturmadan önce rakibin karşı oyununu durdurmalıdır: 48.Ne3+! ve 49.Ng4+ ile önce at merkezlenir, sonra a-piyonu yürür. 48.a6?? bu sırayı tersine çevirdi.',
    'Bir taşı bağlamak (51...Rxc2! ile d2 atını şaha bağlamak), geçer piyonun önündeki son savunucuyu etkisiz hale getirmenin en hızlı yoludur.',
    'Hızlı oyunda kazanılmış konumlar da kaybedilebilir: “kesin kazanç” yerine önce “güvenli kazanç” aranmalı, rakibin tüm şahları tek tek kontrol edilmelidir.',
  ],
  qa: [
    { q: 'Bu oyun neden bu kadar önemliydi?', a: 'Oyun Dünya Kupası’nda 9.–10. sırayı belirleyen maçın ikinci hızlı oyunuydu. İlk on zaten 2007 Adaylar Turnuvası’na katılma hakkı kazandığı için iki oyuncu da Adaylar’a gidiyordu, ama Kamsky bu oyunu kazanarak maçı 3–1 aldı ve 9. oldu. 15 yaşındaki Carlsen için bu turnuva Adaylar’a ilk kez katılma başarısıydı.' },
    { q: 'Siyah neden 5...Qc7 oynadı, 5...Nf6 değil?', a: 'Kan’da 5...Nf6’dan sonra Beyaz bazen e5 ile ilerleyip atı kovalar ve d6 karesini zayıflatır. 5...Qc7 önce e5 karesini kontrol eder, ...Nf6’yı güvenli hale getirir ve Siyaha ...Bb4, ...Bc5 ya da ...b5 gibi esnek seçenekler bırakır. Motor iki hamleyi de normal sayıyor (Motor: +0.5 civarı).' },
    { q: 'Siyah neden 10...Bc5 ile kara kareli filleri değişti?', a: 'Beyaz 10.f3 ile e4’ü sağlamlaştırdı ve Qe1-f2/e3 ile g1-a7 çaprazına yerleşmeye hazırlanıyordu. Siyahın kara kareli fili e7’de pasif kalabilirdi; 10...Bc5 ile Beyazın aktif e3 filiyle değişti. Bu değişim Beyazın kara karelerdeki baskısını azalttı ve oyunu sakinleştirdi (Motor: +0.2).' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: '17...b4 ve 20...a5 ile Siyahın vezir kanadı piyonları ilerledi ama birbirini korumaz hale geldi: a5, b4 ve c5 üç ayrı hedefti. 23...Rfd8? sonrası 24.f4 ile Siyah atı e5’ten kovuldu, 26.Bxa6 ve 27.Nc4 ile Beyaz atı a5’e, kale de c5’e saldırdı. Siyah f4 piyonunu alarak bir piyonu geri kazandı ama c5 ve a5 düştü.' },
    { q: 'Siyah nerede daha iyi savunabilirdi?', a: 'Motor 23...f5! (ya da 23...Bxe2 24.Kxe2 f5) ile eşitlik görüyor (Motor: 0.0); 23...Rfd8 sonrası değer +0.9’a çıktı. 25...Ng6 yerine 25...Bxe2 26.Kxe2 Nc6 de daha sağlamdı (Motor: +0.8, oyunda +1.6). Ayrıca 30...e5! (Motor: +0.7) 30...f5’ten daha az piyon kaybettiriyordu.' },
    { q: 'Kamsky kaybedilmiş görünen konumda neden direndi?', a: 'Kamsky piyonları kaybedeceğini görünce bütün taşlarını tek bir hedefe yöneltti: f-piyonunu f3’e kadar ilerletti, kalesini h3’e (f3’ü korur, h1’den mat tehdidi) ve atını g5’e (e4 ve h3’ten şah) getirdi. Bu üçlü, Beyaz şahını f2’ye bağladı. Carlsen’in her hamlesinde bir şah ya da mat tuzağını hesaplaması gerekiyordu; hızlı oyunun son dakikalarında bu ağır bir yüktür.' },
    { q: '48.a6 yerine Beyaz nasıl kazanırdı?', a: 'ChessBase’in verdiği yol: 48.Ne3+! Ke5 49.Ng4+ (at h6 ve e3’ü kapatır) Kf5 50.a6 ve piyon durdurulamaz; 48...Ke6 49.a6 da aynı. Motor 48.Ne3+ için +5.4 diyor ve 49.Ng4+ sonrası şah c5’e kadar koşsa bile a-piyonu vezir olur. Önemli olan, atın e4 ve g4 karelerini kontrol edip Siyahın şah çekme olanaklarını yok etmesiydi.' },
    { q: 'Neden 50...Rf3 kazanıyordu da 50...Rc3 kazanmıyordu?', a: '50...Rf3! Beyazın f1’i kontrol etmesini imkânsız kılar: 51.Kxf3 f1=Q+ 52.Ke3 Qe1+ ve vezir b4 kalesini alır. 50...Rc3? ise piyonun terfi karesini desteklemez; 51.Kf1! ile Beyaz şahı piyonun önüne geçer ve Beyaz yeniden kazanır (Motor: +4.6). Oyunda 51.Nd2? oynandı ve 51...Rxc2! ile Kamsky ikinci şansı kaçırmadı.' },
    { q: 'Son konumda Carlsen neden terk etti?', a: '53...Ke6’dan sonra Beyazın d5 kalesi ve şahı, f2 piyonunu ve d2 atını aynı anda durduramaz. 54.Rxd2 f1=Q+ 55.Kxf1 Rxd2 sonrasında Siyah bir kale fazlasıyla kalır (Motor: yaklaşık −9.9). Beyazın a6 piyonu da Siyah kalesi tarafından kolayca durdurulur.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Carlsen merkez piyonunu iki kare ilerletir.',
      amac: 'd5 ve f5 karelerini kontrol etmek, vezir ve fil için yol açmak.',
      neden: 'Maçı eşitlemek için kazanması gereken Carlsen, en çok açık ve dinamik oyun veren hamleyle başladı.',
      diger: [
        { move: '1.d4', text: 'Daha kapalı oyunlara götürür; motor ikisini de aynı düzeyde görür (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; açılış seçimini rakibe bırakır (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması.',
      amac: 'd4 karesini kenardan kontrol edip dengesiz bir yapı yaratmak.',
      neden: 'İlk hızlı oyunu kazanan Kamsky’ye beraberlik yetiyordu, ama Sicilya’yı seçerek pasif bir savunmaya razı olmadı. Sicilya, Beyaz d4 oynadığında Siyaha yarı açık c-hattı ve merkezde fazladan bir piyon verir.',
      diger: [
        { move: '1...e5', text: 'Daha simetrik ve sakin oyun (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması; merkez kapalı kalır (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: '2.Nf3: At gelişir.',
      amac: 'd4’ü hazırlamak ve şah kanadını rok için açmak.',
      neden: 'Açık Sicilya’nın standart hamlesi; 3.d4 için atın d4’ü desteklemesi gerekir.',
      diger: [
        { move: '2.c3', text: 'Alapin: d4’ü piyonla destekler, teorik olarak daha sakin (Motor: +0.3).' },
        { move: '2.Nc3', text: 'Kapalı Sicilya’ya götürebilir (Motor: +0.3).' },
      ],
    },
    '2b': {
      text: '2...e6: Kan ve Taimanov gibi esnek kuruluşların hamlesi.',
      amac: 'd5 karesini kontrol etmek ve f8 filine yol açmak.',
      neden: '...e6 Siyaha seçenek bırakır: ...a6 ile Kan, ...Nc6 ile Taimanov. d6 piyonu henüz oynanmadığı için kara kareli fil b4 ya da c5’e çıkabilir.',
      diger: [
        { move: '2...d6', text: 'Najdorf ve Dragon’a götüren klasik hamle (Motor: +0.5).' },
        { move: '2...Nc6', text: 'Klasik ya da Sveşnikov yapıları (Motor: +0.3).' },
      ],
    },
    '3w': {
      text: '3.d4: Beyaz merkezi açar.',
      amac: 'Merkezde piyon değiştirip gelişmede öne geçmek.',
      neden: 'Açık Sicilya Beyaza aktif taşlar verir; karşılığında Siyah yarı açık c-hattı ve merkezde fazla bir piyon alır.',
      diger: [
        { move: '3.Nc3', text: 'Bir hamle sonra d4 oynamak; genelde aynı yapıya geçer (Motor: +0.3).' },
        { move: '3.c3', text: 'Alapin’e benzer yapılar (Motor: +0.3).' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah d4’te değişir.',
      amac: 'Kenar piyonunu merkez piyonuyla değiştirmek; c-hattını açmak.',
      neden: 'Sicilya’nın temel fikri budur. 3...a6 ya da 3...d5 gibi hamleler Beyaza merkezde rahat üstünlük verir (Motor: +0.8 ile +1.0).',
      diger: [
        { move: '3...d5', text: '4.exd5 exd5 5.Bb5+ ile Siyah izole piyon ve gelişme sorunları yaşar (Motor: +1.0).' },
      ],
    },
    '4w': {
      text: '4.Nxd4: At merkeze gelir.',
      amac: 'Piyonu geri almak ve atı güçlü d4 karesine yerleştirmek.',
      neden: 'Bu doğal geri alıştır; başka hamleler piyonu geri almayı geciktirir.',
    },
    '4b': {
      text: '4...a6: Kan (Paulsen) varyantı.',
      amac: 'b5 karesini kontrol edip Nb5 ve Bb5’i önlemek, ...b5 ve ...Qc7 için hazırlık yapmak.',
      neden: 'Kan varyantı Siyahın taşlarını esnek tutar: at b8’de, at g8’de bekler; Siyah önce Beyazın kuruluşunu görür. Varyant adını Ilya Kan’dan alır.',
      diger: [
        { move: '4...Nf6', text: '5.Nc3 ile Klasik Sicilya’ya ya da 5...Nc6 ile Dört At’a geçer (Motor: +0.5).' },
        { move: '4...Nc6', text: 'Taimanov varyantı (Motor: +0.5).' },
      ],
    },
    '5w': {
      text: '5.Nc3: At c3’te gelişir ve e4’ü korur.',
      amac: 'Merkezi sağlamlaştırmak ve hızlı gelişmek.',
      neden: 'Kan’a karşı en yaygın hamle. 5.c4 ile Maróczy kıskacı ya da 5.Bd3 ile esnek kuruluş da sık oynanır.',
      diger: [
        { move: '5.c4', text: 'Maróczy kıskacı: d5 karesini kalıcı olarak kontrol eder; motorun ilk tercihi (Motor: +0.6).' },
        { move: '5.Bd3', text: 'Fili önce d3’e getirip c-piyonunu serbest bırakır; ileride c4 de oynanabilir (Motor: +0.6).' },
      ],
    },
    '5b': {
      text: '5...Qc7: Kan’ın ana hamlesi.',
      amac: 'e5 karesini kontrol etmek, vezir c-hattından c3 atına ve h2’ye bakar.',
      neden: '5...Nf6 erken oynanırsa Beyaz bazı kuruluşlarda e5 ile atı kovalayabilir; vezir önce e5’i kontrol eder. Ayrıca ...Bb4 ile c3 atına baskı yapma imkânı doğar.',
      diger: [
        { move: '5...b5', text: 'Hemen vezir kanadında alan almak ve ...Bb7 ile e4’e baskı; motorun ilk seçimi (Motor: +0.3).' },
        { move: '5...Nc6', text: 'Doğrudan Taimanov yapısına geçer (Motor: +0.6).' },
      ],
    },
    '6w': {
      text: '6.Bd3: Fil e4’ü korur ve rok hazırlanır.',
      amac: 'e4 piyonunu sağlamlaştırıp kısa rok yapmak, ardından f4 ya da Qe2 ile şah kanadında oynamak.',
      neden: 'Fil d3’te hem e4’ü korur hem de Siyah şahına yönelik çaprazda durur. 6.Be2 ve 6.g3 daha sakin seçeneklerdir.',
      diger: [
        { move: '6.Be2', text: 'Klasik sakin kuruluş; f4 ve Be3 ile devam edilir.' },
        { move: '6.Qf3', text: 'Vezirle f-hattını ve şah kanadını hedefler (Motor: +0.4).' },
      ],
    },
    '6b': {
      text: '6...Nf6: At gelişir ve e4’e baskı yapar.',
      amac: 'Kısa roka hazırlanmak ve e4 piyonunu hedef almak.',
      neden: 'Vezir e5’i kontrol ettiği için Beyazın e5 hamlesi artık mümkün değil; at güvenle f6’ya çıkar.',
      diger: [
        { move: '6...Nc6', text: 'Önce atları değişme fikri; 7.Nxc6 bxc6 ile farklı yapı (Motor: +0.5).' },
        { move: '6...d6', text: 'Scheveningen tipi yapı (Motor: +0.5).' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini f-hattına getirmek.',
      neden: 'Doğal ve sağlam hamle. Motor 7.Qe2’yi çok az daha iyi buluyor (Motor: +0.4 yerine +0.3); Qe2 bazı hatlarda Beyaza uzun rok seçeneği bırakır.',
      diger: [
        { move: '7.Qe2', text: 'Vezir e4’ü korur ve f4-e5 planını hazırlar; 7...Bb4 8.Bd2 sonrası denge (Motor: +0.4).' },
        { move: '7.f4', text: 'Hemen şah kanadında alan almak (Motor: +0.3).' },
      ],
    },
    '7b': {
      text: '7...Nc6: At c6’dan d4 atına baskı yapar.',
      amac: 'd4 atını değiştirmeye zorlamak ya da e5 karesine at göndermek.',
      neden: 'Bu hamleyle oyun Taimanov’un 6.Be3 a6 7.Bd3 Nf6 8.O-O kuruluşuna yaklaşır. Motor 7...d6’yı biraz daha sağlam buluyor (Motor: +0.4 yerine +0.6) çünkü ...Nc6 Beyaza Nxc6 değişimi fırsatı verir.',
      diger: [
        { move: '7...d6', text: 'Scheveningen tipi yapı; 8.Qe2 e5 9.Nb3 Be7 ile denge (Motor: +0.4).' },
        { move: '7...Bc5', text: 'Fili hemen aktif kareye getirmek; 8.Nb3 Ba7 ile (Motor: +0.5).' },
      ],
    },
    '8w': {
      text: '8.Be3: Fil d4 atını korur.',
      amac: 'd4 atını desteklemek ve kara kareli fili g1-a7 çaprazına yerleştirmek.',
      neden: 'Bu, Taimanov’un ana kuruluşudur. Motor 8.Nxc6 bxc6 9.Qe2’yi biraz daha iyi buluyor (Motor: +0.5 yerine +0.2), çünkü Siyahın piyon yapısını bozar.',
      diger: [
        { move: '8.Nxc6', text: '8...bxc6 9.Qe2 d5 ile Siyahın c6-d5 piyonları hedef olur (Motor: +0.5).' },
        { move: '8.Nce2', text: 'At c3’ten çekilip c3 piyonuyla d4’ü destekleme fikri (Motor: +0.2).' },
      ],
    },
    '8b': {
      text: '8...b5: Siyah vezir kanadında alan alır.',
      amac: '...b4 ile c3 atını kovalamak ve fili b7’ye getirip e4’e baskı yapmak.',
      neden: 'Motorun ilk seçimi (Motor: +0.1). 8...Ne5 ya da 8...Nxd4 de oynanır ama ...b5 Siyahın en aktif planıdır; c3 atı e4’ün tek savunucusudur ve ...b4 onu tehdit eder.',
      diger: [
        { move: '8...Ne5', text: 'Ana teori hamlelerinden biri; 9.h3 Bc5 ile at e5’te güçlü durur (Motor: +0.3).' },
        { move: '8...Nxd4', text: '9.Bxd4 Bc5 10.Bxc5 Qxc5 ile sade bir değişim yolu (Motor: +0.2).' },
      ],
    },
    '9w': {
      text: '9.Nxc6: Beyaz atları değişir.',
      amac: 'c6 atını ortadan kaldırıp Siyah vezirini c6’ya çekmek.',
      neden: 'At d4’te ...b4 ve ...Nxd4 gibi değişimlere karşı açıktı. Değişim, Siyahın ...Ne5 planını da önler.',
      diger: [
        { move: '9.Nb3', text: 'Atı korumak; 9...d6 10.Kh1 Ne5 ile denge (Motor: +0.2).' },
        { move: '9.Qe2', text: '9...Bb7 10.Nxc6 Bxc6 ile benzer yapı (Motor: 0.0).' },
      ],
    },
    '9b': {
      text: '9...Qxc6: Vezirle alınır.',
      amac: 'Veziri c6’dan e4’e ve uzun çapraza baskı yapacak şekilde yerleştirmek.',
      neden: '9...dxc6 piyon yapısını bozmaz ama veziri pasif bırakır ve Beyaza a4 ile vezir kanadında oyun verir (Motor: +0.8). Vezirle almak e4 baskısını korur.',
      diger: [
        { move: '9...dxc6', text: '10.a4 b4 11.Nb1 c5 ile Beyaz daha rahat (Motor: +0.8).' },
        { move: '9...b4?', text: 'Ara hamle işe yaramaz: 10.Nxb4 Bxb4 11.f4 ile Beyaz bir taş fazlasıyla kalır (Motor: +1.3).' },
      ],
    },
    '10w': {
      text: '10.f3: f-piyonu e4’ü destekler.',
      amac: 'e4 piyonunu sağlamlaştırıp ...b4 ile c3 atı kovalandığında e4’ün düşmemesini sağlamak.',
      neden: 'Bu yapı İngiliz Atağı’ndaki f3’ü hatırlatır. 10.a3 de ...b4’ü önlemenin bir yoludur (Motor: +0.1), ama f3 daha sağlam bir merkez kurar.',
      diger: [
        { move: '10.a3', text: '...b4’ü önler; 10...Bb7 11.Qe2 ile denge (Motor: +0.1).' },
        { move: '10.Qf3', text: 'Vezirle e4’ü korur; 10...Bb7 11.a3 (Motor: +0.1).' },
      ],
    },
    '10b': {
      text: '10...Bc5: Fil kara kareli fil değişimine gelir.',
      amac: 'Beyazın aktif e3 filini değiştirmek ve g1-a7 çaprazını kontrol etmek.',
      neden: 'f3’ten sonra Beyaz şahı g1’de bu çapraza karşı biraz zayıf. Fil değişimi oyunu sakinleştirir; Kamsky açıkça sağlam bir oyun sonu hedefliyor.',
      diger: [
        { move: '10...b4', text: 'Önce atı kovalamak: 11.Ne2 Bc5 12.Qd2 a5 ile benzer yapı; motorun ilk seçimi (Motor: +0.1).' },
        { move: '10...Qc7', text: 'Veziri geri çekip ...Bc5’i hazırlamak (Motor: +0.2).' },
      ],
    },
    '11w': {
      text: '11.Qe1: Vezir e1’e çekilir.',
      amac: 'Vezirle f2 ve e3 karelerini kontrol etmek; filler değişirse vezirle geri almak.',
      neden: 'Vezir e1’den hem e3 filini korur hem de f2’ye geçerek g1-a7 çaprazına karşı koyabilir. 11.Qe2 ve 11.Qd2 de aynı değerde (Motor: +0.2).',
      diger: [
        { move: '11.Qe2', text: '11...b4 12.Nd1 d5 13.exd5 ile benzer denge (Motor: +0.2).' },
        { move: '11.Qd2', text: 'Vezir d-hattında; ...b4 sonrası at d1’e gider (Motor: +0.2).' },
      ],
    },
    '11b': {
      text: '11...d6: d6 piyonu e5 karesini kontrol eder.',
      amac: 'Piyon yapısını sağlamlaştırmak, c8 filine yol açmak ve e5’i kontrol etmek.',
      neden: 'Siyah f6 atını e4 baskısına karşı rahatlatır; Beyazın e5 hamlesini önler. Motor 11...b4’ü biraz daha aktif buluyor (Motor: +0.2 yerine +0.3).',
      diger: [
        { move: '11...b4', text: '12.Nd1 d5 13.e5 Nd7 ile merkez açılır (Motor: +0.2).' },
        { move: '11...Qc7', text: '12.Bxc5 Qxc5+ 13.Qf2 Qxf2+ ile erken vezir değişimi (Motor: +0.3).' },
      ],
    },
    '12w': {
      text: '12.Kh1: Şah h1’e gider.',
      amac: 'g1-a7 çaprazından çıkmak; Bxe3 sonrası şah çeken kombinezonları önlemek.',
      neden: 'Şah g1’de iken c5 filinin çaprazında. Motor 12.a4 ile önce vezir kanadında oynamayı biraz daha iyi buluyor (Motor: +0.3 yerine +0.2).',
      diger: [
        { move: '12.a4', text: '12...b4 13.Nd1 O-O 14.Qf2 ile ...b5’i sorgular (Motor: +0.3).' },
        { move: '12.Qf2', text: 'Kara kareli filler değişirse vezir c5’e karşı koyar (Motor: +0.2).' },
      ],
    },
    '12b': {
      text: '12...Bxe3: Kara kareli filler değişir.',
      amac: 'Beyazın iyi filini değişmek ve Beyaz vezirini e3’e çekmek.',
      neden: 'Siyahın fili d6 piyonunun önünde zaten sınırlıydı; e3 fili ise Beyazın en iyi taşlarından biriydi. Değişim Siyahın kara karelerdeki zayıflığını ortadan kaldırır.',
      diger: [
        { move: '12...Nd7', text: '13.a4 bxa4 14.Nxa4 Bxe3 ile Siyahın piyonu a6’da zayıf (Motor: +0.3).' },
        { move: '12...Bb7', text: '13.Bg5 ile Beyaz f6 atına baskı yapar (Motor: +0.5).' },
      ],
    },
    '13w': {
      text: '13.Qxe3: Vezir geri alır.',
      amac: 'Taşı geri almak; vezir e3’ten d4 ve b6’ya bakar.',
      neden: 'Doğal geri alış. 13.e5? ara hamlesi işe yaramaz (Motor: −0.5); 13.a4?? ise 13...b4 14.e5 bxc3 ile bir taş kaybettirir (Motor: −3.4).',
      diger: [
        { move: '13.e5?', text: '13...dxe5 14.Qxe3 Qc7 ile Siyah bir piyon önde kalır (Motor: −0.5).' },
      ],
    },
    '13b': {
      text: '13...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleleri birleştirmek.',
      neden: 'Gelişmenin son adımı. 13...Qc5 ile hemen vezir değişimi teklif etmek de mümkündü (Motor: +0.2) ama önce rok sağlamdır.',
      diger: [
        { move: '13...Qc5', text: '14.Qxc5 dxc5 15.e5 Nd5 16.Nxd5 ile Beyaz biraz daha rahat (Motor: +0.2).' },
        { move: '13...Qc7', text: '14.a4 b4 15.Na2 ile vezir kanadında mücadele (Motor: +0.2).' },
      ],
    },
    '14w': {
      text: '14.Rfd1: Kale d-hattına gelir.',
      amac: 'd6 piyonuna baskı yapmak ve d-hattını kontrol etmek.',
      neden: 'd6, Siyahın yapısındaki tek geri piyondur. Motor 14.Rfc1 ya da 14.a4’ü biraz daha iyi buluyor, ama fark küçük (Motor: +0.1 civarı).',
      diger: [
        { move: '14.a4', text: 'Hemen b5’i sorgulamak: 14...b4 15.Nd1 Qc7 (Motor: +0.1).' },
        { move: '14.Rfc1', text: 'c-hattını kontrol edip c4 hazırlamak (Motor: +0.1).' },
      ],
    },
    '14b': {
      text: '14...Bb7: Fil uzun çapraza gelir.',
      amac: 'e4 piyonuna baskı yapmak ve kaleleri birleştirmek.',
      neden: 'Fil gelişir ama motor 14...b4!’ü biraz daha iyi buluyor (Motor: +0.1 yerine +0.2), çünkü fil b7’de iken a4’ten sonra ...b4 zorunlu hale gelir.',
      diger: [
        { move: '14...b4', text: '15.Ne2 a5 16.a3 Ba6 ile fil a6’da daha aktif (Motor: +0.1).' },
        { move: '14...Qc7', text: '15.a4 b4 16.Ne2 h6 ile sağlam yapı (Motor: +0.1).' },
      ],
    },
    '15w': {
      text: '15.Qd4: Vezir d4’e gelir.',
      amac: 'd6 piyonuna baskı yapmak ve Siyahı vezir değişimine davet etmek.',
      neden: 'Vezir d4’te merkezi ve aktif; Siyah vezir değişmezse d6 zayıflığı hissedilir. Motorun ilk seçimi (Motor: +0.3).',
      diger: [
        { move: '15.a4', text: '15...b4 16.Ne2 Rfc8 17.a5 ile vezir kanadı kilitlenir (Motor: +0.2).' },
      ],
    },
    '15b': {
      text: '15...Qc5: Siyah vezir değişimini önerir.',
      amac: 'Vezirleri değişip d6 baskısını azaltmak ve oyunu sakin bir oyun sonuna indirmek.',
      neden: 'Kamsky dengeli bir oyun sonu kabul ediyor. Motor 15...Rfd8’i biraz daha iyi buluyor (Motor: +0.3 yerine +0.4), çünkü vezirler değişince c5 piyonu ileride bir hedef olacak.',
      diger: [
        { move: '15...Rfd8', text: '16.a4 bxa4 17.Rxa4 Qc7 ile vezirler tahtada kalır (Motor: +0.3).' },
        { move: '15...Qc7', text: '16.a4 bxa4 17.Nxa4 Rab8 (Motor: +0.4).' },
      ],
    },
    '16w': {
      text: '16.Qxc5: Vezirler değişir.',
      amac: 'Siyahın piyon yapısını değiştirmek (d6 piyonu c5’e geçer) ve oyun sonunda küçük avantaj aramak.',
      neden: 'Değişmezse Siyah vezir d4’ü alıp Beyazı pasif bir konuma iter. 16.Be2 Qxd4 17.Rxd4 d5 ise Siyaha rahat bir merkez verir (Motor: +0.1).',
      diger: [
        { move: '16.Be2', text: '16...Qxd4 17.Rxd4 d5 ile Siyah merkezini serbest bırakır (Motor: +0.1).' },
      ],
    },
    '16b': {
      text: '16...dxc5: Piyonla alınır.',
      amac: 'Vezir değişimini tamamlamak; c5 piyonu d4 karesini kontrol eder.',
      neden: 'Zorunlu geri alış: vezir geri alınmazsa Siyah bir vezir eksik kalır. 16...Nxe4?? ya da 16...Bxe4?? gibi “ara alışlar” bu yüzden kaybeder (Motor: +6.0 üzeri).',
    },
    '17w': {
      text: '17.a4: a-piyonu b5’i sorgular.',
      amac: 'b5 piyonunu ilerlemeye zorlamak; b4 ve a6/a5 piyonlarını hedefe dönüştürmek.',
      neden: 'Motorun ilk seçimi (Motor: +0.4). Siyah ...bxa4 oynarsa a6 piyonu izole kalır; ...b4 oynarsa piyon ileride desteksiz kalır. Bu, Beyazın oyun sonu planının ilk adımı.',
      diger: [
        { move: '17.Be2', text: '17...Rfd8 18.Kg1 Nd7 ile sakin manevra (Motor: +0.4).' },
        { move: '17.Kg1', text: 'Önce şahı merkeze getirmek (Motor: +0.4).' },
      ],
    },
    '17b': {
      text: '17...b4: Piyon ilerler ve c3 atını kovalar.',
      amac: 'Atı c3’ten kovalamak ve b-piyonunu kurtarmak.',
      neden: '17...bxa4 18.Rxa4 a6 piyonunu çok zayıflatırdı (Motor: +1.4). 17...c4 ise 18.Bf1 ile c4 piyonunu hedef yapar (Motor: +0.9). ...b4 en iyisi, ama bu piyon artık b4’te sabit bir hedef.',
      diger: [
        { move: '17...bxa4', text: '18.Rxa4 Rfc8 19.b3 ile a6 ve c5 piyonları zayıf (Motor: +1.4).' },
        { move: '17...c4', text: '18.Bf1 Bc6 19.Rd6 ile Beyaz d-hattını alır (Motor: +0.9).' },
      ],
    },
    '18w': {
      text: '18.Nb1: At b1’e çekilir.',
      amac: 'Atı b1-d2-c4 yolundan c4 karesine getirmek.',
      neden: 'Motorun ilk seçimi (Motor: +0.5). At c4’te a5, b6 ve d6 karelerine bakar. 18.Na2 ya da 18.Ne2 atı daha pasif bırakır (Motor: 0.0).',
      diger: [
        { move: '18.Na2', text: 'At a2’de b4’e baskı yapar ama c4’e ulaşması zor (Motor: 0.0).' },
        { move: '18.Ne2', text: '18...Rfc8 19.Bc4 ile benzer ama daha az aktif (Motor: 0.0).' },
      ],
    },
    '18b': {
      text: '18...Nd7: At d7’ye çekilir.',
      amac: 'Atı e5’e getirip c4 ve d3 karelerini kontrol etmek.',
      neden: 'f6’da at e4’e baktığı halde e4 sağlam korunuyordu; e5’te at merkezde ve Beyaz atının c4’e gelmesini zorlaştırır. Motorun ilk seçimi (Motor: +0.4).',
      diger: [
        { move: '18...Rfc8', text: '19.Nd2 Kf8 20.Bf1 ile Beyaz atı c4’e rahatça gelir (Motor: +0.7).' },
        { move: '18...Rfd8', text: '19.Nd2 Nd7 20.Nb3 ile c5 baskısı (Motor: +0.7).' },
      ],
    },
    '19w': {
      text: '19.Nd2: At d2’ye gelir.',
      amac: 'c4 karesine geçmek.',
      neden: 'Plan doğal, ama motor 19.Be2’yi biraz daha iyi buluyor (Motor: +0.3 yerine +0.2): önce fil c4’ü destekler, sonra at gelir.',
      diger: [
        { move: '19.Be2', text: '19...Ne5 20.Nd2 a5 21.f4 ile at e5’ten kovalanır (Motor: +0.3).' },
        { move: '19.a5', text: 'a-piyonunu sabitleyip b6 karesini ele geçirmek (Motor: +0.2).' },
      ],
    },
    '19b': {
      text: '19...Ne5: At merkezde.',
      amac: 'c4 ve d3 karelerini kontrol edip Beyaz atının c4’e gelmesini zorlaştırmak.',
      neden: 'At e5’te güzel görünür, ama f3-f4 ile kovalanabilir. Motor 19...a5’i biraz daha iyi buluyor (Motor: +0.1 yerine +0.5).',
      diger: [
        { move: '19...a5', text: '20.Kg1 Nb6 21.Kf2 Rfc8 ile at b6’dan c4’ü kontrol eder (Motor: +0.1).' },
      ],
    },
    '20w': {
      text: '20.Be2: Fil e2’ye çekilir.',
      amac: 'c4 karesini desteklemek ve d3’ü atın saldırısından korumak.',
      neden: 'Motorun ilk seçimi (Motor: +0.6). Fil d3’te Ne5’in saldırısına açıktı; e2’de hem c4’ü destekler hem de ileride Bxa6 değişimi yapabilir.',
      diger: [
        { move: '20.Nc4', text: '20...Nxc4 21.Bxc4 Rfd8 ile atlar değişir, avantaj azalır (Motor: +0.3).' },
        { move: '20.Kg1', text: 'Şahı merkeze getirmeye başlamak (Motor: +0.3).' },
      ],
    },
    '20b': {
      text: '20...a5: a-piyonu b4’ü korur.',
      amac: 'b4 piyonunu desteklemek ve Beyazın a5 hamlesini önlemek.',
      neden: 'Motorun ilk seçimi (Motor: +0.4). Ama artık a5, b4 ve c5 piyonları kara karelerde ve atın saldırısına açık; bu yapı ileride Beyazın hedefi olacak.',
      diger: [
        { move: '20...Rfc8', text: '21.a5 c4 22.b3 ile vezir kanadı açılır (Motor: +0.4).' },
        { move: '20...g5', text: 'Hemen f4 karesini kontrol etmek: 21.Nb3 Rfc8 22.Na5 ile at a5’e yerleşir (Motor: +0.5).' },
      ],
    },
    '21w': {
      text: '21.Kg1: Şah merkeze yönelir.',
      amac: 'Oyun sonunda şahı f2-e3’e getirmek.',
      neden: 'Oyun sonunda şah aktif olmalıdır. Ama motor 21.f4!’ü öneriyor (Motor: +0.3 yerine +0.1): at e5’ten kovalanır ve 21...Ng6 22.g3 e5 23.f5 ile Beyaz alan kazanır. Kamsky bu fırsatı ...g5 ile hemen engeller.',
      diger: [
        { move: '21.f4', text: '21...Ng6 22.g3 e5 23.f5 ile Beyaz şah kanadında alan alır (Motor: +0.3).' },
        { move: '21.h4', text: '...g5’i önleme fikri; 21...Ba6 22.Bxa6 Rxa6 (Motor: +0.1).' },
      ],
    },
    '21b': {
      text: '21...g5!: f4 karesini kontrol eder.',
      amac: 'Beyazın f4 hamlesini önlemek; f4 olursa ...gxf4 ile atı f4’e getirmek.',
      neden: 'Motorun ilk seçimi (Motor: +0.3). Kamsky atının e5’te kalmasını istiyor ve f4 karesini kendi taşları için ayırıyor. Bu hamle sonraki bütün oyunun anahtarı olacak.',
      diger: [
        { move: '21...h5', text: '22.Kf2 g5 23.Nc4 Nxc4 ile benzer (Motor: +0.3).' },
        { move: '21...Rfd8', text: '22.Kf2 Kf8 23.Ke3 g5 ile daha yavaş (Motor: +0.5).' },
      ],
    },
    '22w': {
      text: '22.Kf2: Şah f2’ye gelir.',
      amac: 'e3’e ilerlemek ve d-hattındaki oyunu desteklemek.',
      neden: 'Motorun ilk seçimi (Motor: +0.3). Şah merkeze ne kadar yakın olursa oyun sonunda o kadar güçlü olur.',
      diger: [
        { move: '22.Nc4', text: '22...Nxc4 23.Bxc4 Rfd8 ile atlar değişir (Motor: +0.2).' },
        { move: '22.g3', text: 'Hemen f4’ü hazırlamak; 22...Kg7 23.Rac1 (Motor: 0.0).' },
      ],
    },
    '22b': {
      text: '22...Ba6: Fil e2 filiyle değişmeye gelir.',
      amac: 'Beyazın iyi filini değişip oyunu at oyun sonuna indirmek.',
      neden: 'Siyahın fili b7’de e4 piyonuna çarpıyordu; e2 fili ise c4’ü destekliyordu. Değişim Siyahın e5 atını güçlendirir. Motor bunu ve 22...f5’i eşit görüyor (Motor: +0.2).',
      diger: [
        { move: '22...f5', text: '23.Nc4 Nxc4 24.Bxc4 fxe4 ile merkez açılır (Motor: +0.1).' },
        { move: '22...Kg7', text: '23.Nc4 Nxc4 24.Bxc4 Rfd8 (Motor: +0.4).' },
      ],
    },
    '23w': {
      text: '23.g3: g-piyonu f4’ü hazırlar.',
      amac: 'f4 oynandığında g-piyonuyla geri alabilmek.',
      neden: 'Beyaz Siyah atını e5’ten kovmak istiyor. Motor 23.h4 ile önce g5’i sorgulamayı (Motor: +0.1) ya da 23.Bxa6’yı eşit görüyor; g3 de dengeyi korur.',
      diger: [
        { move: '23.h4', text: '23...Bxe2 24.Kxe2 gxh4 25.f4 ile şah kanadı açılır (Motor: +0.1).' },
        { move: '23.Bxa6', text: '23...Rxa6 24.h4 h6 25.hxg5 (Motor: 0.0).' },
      ],
    },
    '23b': {
      text: '23...Rfd8?: Kale d-hattına gelir.',
      amac: 'd-hattını kontrol etmek ve Beyaz kalesiyle karşılaşmak.',
      neden: 'Doğal ama küçük bir hata: Beyaza 24.f4 ile atı kovalama fırsatı verir. Motor 23...f5! ya da 23...Bxe2 24.Kxe2 f5 öneriyor (Motor: 0.0); maç hamlesinden sonra +0.9. ...f5 ile e4 sorgulanır ve f4 hamlesi gücünü kaybeder.',
      diger: [
        { move: '23...f5', text: '24.Bxa6 Rxa6 25.exf5 Rxf5 ile Siyahın taşları aktif (Motor: 0.0).' },
        { move: '23...Bxe2', text: '24.Kxe2 f5 25.exf5 Rxf5 ile denge (Motor: 0.0).' },
      ],
    },
    '24w': {
      text: '24.f4!: Beyaz atı e5’ten kovalar.',
      amac: 'Siyah atını merkezden uzaklaştırmak ve şah kanadını açmak.',
      neden: 'Motorun ilk seçimi (Motor: +0.8). Siyah ...gxf4 gxf4 ile almaya mecbur kalır ve at g6 ya da c6’ya gider; bu sırada Beyaz Bxa6 ve Nc4 ile vezir kanadındaki zayıflıklara saldırabilir.',
      diger: [
        { move: '24.Ke3', text: '24...Bxe2 25.Kxe2 f5 26.f4 ile Siyah dengeyi bulur (Motor: +0.3).' },
        { move: '24.Bb5', text: '24...Bxb5 25.axb5 ile a5 piyonu zayıflar ama Siyah aktif (Motor: +0.2).' },
      ],
    },
    '24b': {
      text: '24...gxf4: Siyah f4’te alır.',
      amac: 'g-hattını açmak ve f4 karesini at için ayırmak.',
      neden: 'Motor 24...Bxe2 25.Kxe2 Nc6’yı da aynı düzeyde görüyor (Motor: +0.7). Kamsky planına sadık: f4 karesi atın üssü olacak.',
      diger: [
        { move: '24...Bxe2', text: '25.Kxe2 Nc6 26.c3 gxf4 27.gxf4 ile Beyaz biraz daha iyi (Motor: +0.7).' },
      ],
    },
    '25w': {
      text: '25.gxf4: g-piyonuyla alınır.',
      amac: 'Merkezde e4-f4 piyonlarını kurmak ve atı e5’ten kovalamak.',
      neden: 'Zorunlu sayılır: 25.Bxa6? fxg3+ 26.Kxg3 Rxa6 ile Siyah bir piyon önde kalır (Motor: −0.3).',
      diger: [
        { move: '25.Bxa6?', text: '25...fxg3+ 26.Kxg3 Rxa6 27.Nf3 ile Siyah bir piyon fazla (Motor: −0.3).' },
      ],
    },
    '25b': {
      text: '25...Ng6?: At g6’ya çekilir ve f4’e saldırır.',
      amac: 'f4 piyonuna baskı yapıp onu ele geçirmek ve atı f4’e yerleştirmek.',
      neden: 'At f4’e yönelir, ama motor 25...Bxe2 26.Kxe2 Nc6’yı öneriyor (Motor: +0.8 yerine +1.6). Oyunda Beyaz 26.Bxa6 ile filleri değişip 27.Nc4 ile a5 ve c5’e saldırır; f4 piyonu düşse de Siyahın vezir kanadı çöker.',
      diger: [
        { move: '25...Bxe2', text: '26.Kxe2 Nc6 27.Ke3 Kf8 ile Siyah piyonlarını korur (Motor: +0.8).' },
        { move: '25...Nc6', text: '26.Bxa6 Rxa6 27.Nc4 Raa8 ile benzer sorunlar (Motor: +1.6).' },
      ],
    },
    '26w': {
      text: '26.Bxa6: Beyaz filleri değişir.',
      amac: 'Siyah kalesini a6’ya çekmek ve c4 karesini atı için boşaltmak.',
      neden: 'Motorun ilk seçimi (Motor: +1.4). Fil değişince 27.Nc4 ile at a5’e saldırır ve d-hattındaki kaleler değişir. 26.Nb3 ise 26...Rxd1 27.Bxd1 Nxf4 ile Siyaha karşı oyun verir (Motor: +0.4).',
      diger: [
        { move: '26.Nb3', text: '26...Rxd1 27.Bxd1 Nxf4 28.Nxc5 ile denge (Motor: +0.4).' },
        { move: '26.Bb5', text: '26...Nxf4 27.Bxa6 Rxa6 28.Nc4 (Motor: +0.3).' },
      ],
    },
    '26b': {
      text: '26...Rxa6: Kale alır.',
      amac: 'Fili geri almak; kale altıncı yatayda aktif olabilir.',
      neden: 'Zorunlu: 26...b3? 27.Bd3 ile Siyah sadece bir taş kaybeder (Motor: +4.1).',
    },
    '27w': {
      text: '27.Nc4: At c4’e gelir.',
      amac: 'a5 piyonuna saldırmak ve d6, b6 karelerini kontrol etmek.',
      neden: 'Motorun ilk seçimi (Motor: +1.3). At c4’te Siyahın vezir kanadı piyonlarının hepsine bakar; Siyah artık bir piyon kaybetmeden konumu tutamaz.',
      diger: [
        { move: '27.Nb3', text: '27...Rc8 28.Ke3 e5 ile Siyah dengeye yaklaşır (Motor: +0.5).' },
        { move: '27.Nf3', text: '27...Rad6 28.Rxd6 Rxd6 29.Ke3 (Motor: +0.5).' },
      ],
    },
    '27b': {
      text: '27...Rxd1: Kaleler değişir.',
      amac: 'd-hattındaki baskıyı azaltmak ve f4’ü almaya zaman kazanmak.',
      neden: 'Motor 27...Rd4!’ü biraz daha iyi buluyor (Motor: +1.1 yerine +1.5): 28.Rxd4 cxd4 ile Siyah piyonu d4’e getirir ve 29...Nxf4 için zaman kazanır.',
      diger: [
        { move: '27...Rd4', text: '28.Rxd4 cxd4 29.Rd1 Nxf4 30.Rxd4 ile Beyaz biraz önde (Motor: +1.1).' },
        { move: '27...Raa8', text: '28.Ke3 f5 29.Nb6 ile Beyaz kalıcı baskı kurar (Motor: +2.2).' },
      ],
    },
    '28w': {
      text: '28.Rxd1: Kale geri alır.',
      amac: 'd-hattını kontrol etmek.',
      neden: 'Zorunlu: 28.Ra2?? ya da 28.Nxa5?? Siyaha bir kale fazlası verir (Motor: −6 ile −7).',
    },
    '28b': {
      text: '28...Nxf4: At f4 piyonunu alır.',
      amac: 'Bir piyonu geri almak ve atı f4’e yerleştirmek.',
      neden: 'Motorun ilk seçimi (Motor: +1.5). Kamsky’nin planı sonunda gerçekleşti: at f4’te h3, e2, d3 ve g2’ye bakıyor. Ama Beyazın kalesi sekizinci yataya girecek ve c5, a5 piyonları korunmasız.',
      diger: [
        { move: '28...b3', text: '29.cxb3 Nxf4 30.Kf3 e5 ile c5 hâlâ zayıf (Motor: +2.0).' },
        { move: '28...Kf8', text: '29.Rd8+ Ke7 30.Rc8 Nxf4 ile benzer (Motor: +2.0).' },
      ],
    },
    '29w': {
      text: '29.Rd8+: Kale şah çeker.',
      amac: 'Kaleyi sekizinci yataya sokup c8’den c5’e saldırmak.',
      neden: 'Aktif hamle, ama motor 29.Rd6! ya da 29.Ke3’ü öneriyor (Motor: +1.7 yerine +1.1). 29.Rd6 Rxd6 30.Nxd6 ile at b7’den c5’e saldırır ve kale değişimi Siyahın karşı oyununu azaltır.',
      diger: [
        { move: '29.Rd6', text: '29...Rxd6 30.Nxd6 Ng6 31.Nb7 ile c5 ve a5 düşer (Motor: +1.7).' },
        { move: '29.Ke3', text: '29...Ng2+ 30.Kf2 Nf4 31.Rd6 ile aynı fikir (Motor: +1.7).' },
      ],
    },
    '29b': {
      text: '29...Kg7: Şah g7’ye gider.',
      amac: 'Şahtan çıkmak ve şahı oyuna yaklaştırmak.',
      neden: 'Tek yasal hamle; f8 karesi kale tarafından kontrol ediliyor.',
    },
    '30w': {
      text: '30.Rc8: Kale c5 piyonuna saldırır.',
      amac: 'c5 piyonunu almak.',
      neden: 'Doğrudan hamle, ama motor 30.Ke3 ya da 30.Kf3’ü öneriyor (Motor: +1.3 yerine +0.6): önce şah merkeze gelip Siyahın f5 ve at şahlarını durdurmalı. Bu, oyunun tekrarlayan teması olacak: Carlsen piyon toplarken Kamsky karşı oyun kuruyor.',
      diger: [
        { move: '30.Ke3', text: '30...Ng2+ 31.Kf2 Nf4 32.Rd6 ile Beyaz sağlam (Motor: +1.3).' },
        { move: '30.Kf3', text: '30...Ng6 31.Rc8 Ne7 32.Rc7 ile şah f4’ü kontrol eder (Motor: +1.2).' },
      ],
    },
    '30b': {
      text: '30...f5: Siyah e4’ü sorgular.',
      amac: 'e4 piyonunu değiştirip kendine geçer bir f-piyonu yaratmak.',
      neden: 'Kamsky c5’i kurtaramayacağını görüyor ve karşı oyun arıyor. Motor 30...e5!’i daha iyi buluyor (Motor: +0.7 yerine +1.6): 31.Nxe5 Rh6 ile Siyah h2’yi alır. Ama ...f5 ile yaratılan f-piyonu oyunun kahramanı olacak.',
      diger: [
        { move: '30...e5', text: '31.Nxe5 Rh6 32.Rc7 Rf6 ile Siyah aktif (Motor: +0.7).' },
        { move: '30...b3', text: '31.cxb3 e5 32.Nxe5 Re6 (Motor: +1.5).' },
      ],
    },
    '31w': {
      text: '31.Kf3: Şah f3’e gelir.',
      amac: 'f4 atına saldırmak ve e4 piyonunu korumak.',
      neden: 'Motor 31.b3, 31.Ke3 ve 31.Kf3’ü yakın görüyor (Motor: +1.5 civarı). Şah f3’te atı kovalar.',
      diger: [
        { move: '31.Ke3', text: '31...Ng2+ 32.Kf2 Nf4 33.b3 (Motor: +1.5).' },
        { move: '31.b3', text: '31...fxe4 32.Ke3 Ng2+ 33.Kxe4 ile şah merkezde (Motor: +1.6).' },
      ],
    },
    '31b': {
      text: '31...Nh3: At h3’e gider.',
      amac: 'Şahtan uzaklaşıp g5 karesinden şah çekmek.',
      neden: 'Motorun ilk seçimi (Motor: +1.5). At h3’te g5 ve g1’e bakar; 32...Ng5+ ile şah tehdidi var.',
      diger: [
        { move: '31...Ng6', text: '32.Rxc5 Ra8 33.Rxa5 ile Beyaz iki piyon toplar (Motor: +3.0).' },
        { move: '31...b3', text: '32.cxb3 Nd3 33.Ke3 Nc1 (Motor: +2.2).' },
      ],
    },
    '32w': {
      text: '32.exf5: Beyaz f5’te değişir.',
      amac: 'e4 piyonunu değiştirip Siyahın merkezini parçalamak.',
      neden: 'Motor 32.Rc7+! ile önce şah çekmeyi tercih ediyor (Motor: +1.7 yerine +1.2): 32...Kf6 33.e5+ Kg6 34.Rxc5 ile e-piyonu korunur. 32.exf5 Siyaha geçer f-piyonu verir.',
      diger: [
        { move: '32.Rc7+', text: '32...Kf6 33.e5+ Kg6 34.Rxc5 ile Beyaz e-piyonunu korur (Motor: +1.7).' },
        { move: '32.Kg3', text: '32...Ng5 33.exf5 exf5 34.Kf4 (Motor: +1.5).' },
      ],
    },
    '32b': {
      text: '32...exf5: Piyonla alınır.',
      amac: 'Geçer bir f-piyonu yaratmak.',
      neden: 'Motorun ilk seçimi (Motor: +1.3). Siyahın şimdi geçer bir f-piyonu var; c5 düşse de karşı oyun için bir hedef doğdu.',
      diger: [
        { move: '32...Ng5+', text: '33.Kf4 Nf7 34.Rxc5 exf5 ile Beyaz şahı aktif (Motor: +2.7).' },
      ],
    },
    '33w': {
      text: '33.Rxc5: Kale c5 piyonunu alır.',
      amac: 'Bir piyon kazanmak ve a5’e saldırmak.',
      neden: 'Motor 33.Kg3 ve 33.Rxc5’i eşit görüyor (Motor: +1.4). Kale c5’ten hem a5’e hem de f5’e bakar.',
      diger: [
        { move: '33.Kg3', text: '33...Ng1 34.Kf4 Kf6 35.Rf8+ ile Beyaz önce f5’i hedefler (Motor: +1.4).' },
      ],
    },
    '33b': {
      text: '33...Ng5+: At şah çeker.',
      amac: 'Tempo kazanarak Beyaz şahını f3’ten uzaklaştırmak.',
      neden: 'Motorun ilk seçimi (Motor: +1.7). Şah e3’e gitmek zorunda; böylece f4 ve ...f3 ilerleyişi için yer açılır.',
      diger: [
        { move: '33...Ng1+', text: '34.Kf2 Nh3+ 35.Kg3 Ng1 ile at oyun dışı kalır (Motor: +2.3).' },
      ],
    },
    '34w': {
      text: '34.Ke3: Şah e3’e gider.',
      amac: 'Şahı merkezde tutup f-piyonunu durdurmak.',
      neden: 'Motorun ilk seçimi (Motor: +1.7). Şah e3’te f4 ve f2’yi kontrol eder; 34.Kg2 ise şahı oyundan uzaklaştırır.',
      diger: [
        { move: '34.Ke2', text: '34...Rh6 35.Rxf5 Rxh2+ ile Siyah aktif (Motor: +1.3).' },
        { move: '34.Kg2', text: '34...Rg6 35.Rxa5 Ne6+ (Motor: +1.3).' },
      ],
    },
    '34b': {
      text: '34...f4+: Piyon şah çekerek ilerler.',
      amac: 'f-piyonunu ilerletip Beyaz şahını geriletmek.',
      neden: 'Kamsky planına sadık: piyon her ilerlediğinde tempo kazanıyor. Motor 34...Kf6’yı biraz daha iyi buluyor (Motor: +1.4 yerine +1.7).',
      diger: [
        { move: '34...Kf6', text: '35.Rxa5 Re6+ 36.Kd3 Nf3 ile Siyah aktif (Motor: +1.4).' },
        { move: '34...Re6+', text: '35.Re5 Rc6 36.b3 Rh6 (Motor: +1.8).' },
      ],
    },
    '35w': {
      text: '35.Ke2: Şah e2’ye çekilir.',
      amac: 'f-piyonunun önünde kalmak.',
      neden: 'Motor 35.Kd3’ü öneriyor (Motor: +1.7 yerine +1.1): şah merkezde kalır ve ...Re6+ hamlesine karşı daha esnektir. 35.Kd4?? Ne6+ ile kaleyi kaybettirir (Motor: −5.0).',
      diger: [
        { move: '35.Kd3', text: '35...Ne6 36.Rd5 Rc6 37.b3 ile Beyaz sağlam (Motor: +1.7).' },
        { move: '35.Kd4??', text: '35...Ne6+ 36.Kd5 Nxc5 37.Kxc5 ile Siyah bir kale önde (Motor: −5.0).' },
      ],
    },
    '35b': {
      text: '35...Re6+: Kale şah çeker.',
      amac: 'Kaleyi e-hattına getirip Beyaz şahını kesmek.',
      neden: 'Kale a6’dan merkeze döner. Motor 35...f3+’ü biraz daha iyi buluyor (Motor: +1.2 yerine +1.4): 36.Kf1 Rg6 ile piyon hemen f3’e yerleşir.',
      diger: [
        { move: '35...f3+', text: '36.Kf1 Rg6 37.Rf5 Ne6 ile piyon f3’te güçlü (Motor: +1.2).' },
        { move: '35...h6', text: '36.Rxa5 Rf6 37.Rb5 f3+ (Motor: +1.8).' },
      ],
    },
    '36w': {
      text: '36.Re5: Kale araya girer.',
      amac: 'Şahı korumak ve kale değişimi teklif etmek.',
      neden: 'Motorun ilk seçimi (Motor: +1.5). 36.Kf1 ya da 36.Kd3 Siyah atına f3 karesini verir (Motor: +0.4 ile +0.1).',
      diger: [
        { move: '36.Kd3', text: '36...Nf3 37.Rf5 Ne1+ ile Siyah karşı oyun bulur (Motor: +0.1).' },
        { move: '36.Kf1', text: '36...Nf3 37.h4 Nxh4 ile Siyah piyonu geri alır (Motor: +0.4).' },
      ],
    },
    '36b': {
      text: '36...Rc6: Kale c6’ya gider.',
      amac: 'Kaleleri tahtada tutup c2’ye baskı yapmak.',
      neden: 'Kamsky kaleleri değişmek istemiyor, çünkü kale olmadan f-piyonu tek başına durdurulur. Motor 36...Rxe5+’ı biraz daha iyi buluyor (Motor: +1.3 yerine +2.0), ama Kamsky karşı oyun şansını koruyor.',
      diger: [
        { move: '36...Rxe5+', text: '37.Nxe5 Ne6 38.Nc6 Nc5 ile at oyun sonu (Motor: +1.3).' },
        { move: '36...Rg6', text: '37.Rxa5 Kf6 38.Nd2 Ne6 (Motor: +2.0).' },
      ],
    },
    '37w': {
      text: '37.b3: b-piyonu c4 atını destekler.',
      amac: 'Atı c4’te sağlamlaştırıp kaleyi serbest bırakmak.',
      neden: 'Motorun ilk seçimi (Motor: +2.1). 37.Rxa5 de iyi; b3 önce c4’ü korur ve ...Rc6’nın c2 baskısını azaltır.',
      diger: [
        { move: '37.Rxa5', text: '37...f3+ 38.Kd3 Nf7 39.b3 (Motor: +2.1).' },
      ],
    },
    '37b': {
      text: '37...Kf6: Şah e5 kalesine saldırır.',
      amac: 'Şahı aktif hale getirip e5 kalesini kovalamak.',
      neden: 'Şah oyun sonunda aktif olmalı. Motor 37...Rg6’yı biraz daha iyi buluyor (Motor: +2.0 yerine +2.7). Kale a5’i alınca Beyaz bir piyon öne geçecek.',
      diger: [
        { move: '37...Rg6', text: '38.Rxa5 Ne6 39.Re5 Kf6 (Motor: +2.0).' },
        { move: '37...Nf7', text: '38.Rxa5 Rh6 39.Rf5 Rxh2+ (Motor: +2.1).' },
      ],
    },
    '38w': {
      text: '38.Rxa5: Kale a5 piyonunu alır.',
      amac: 'Bir piyon öne geçmek ve geçer a-piyonu yaratmak.',
      neden: 'Motorun ilk seçimi (Motor: +2.7). Beyazın artık a-piyonu geçer ve b4 de hedef.',
      diger: [
        { move: '38.Rb5', text: '38...Ne6 39.Rd5 Nc5 40.Nxa5 (Motor: +1.2).' },
      ],
    },
    '38b': {
      text: '38...Re6+: Kale şah çeker.',
      amac: 'Beyaz şahını f-piyonunun önünden uzaklaştırmak ya da f2’ye bağlamak.',
      neden: 'Motorun en iyi üç hamlesinden biri (Motor: +2.9). Kamsky her şahla Beyaz şahının yerini daraltıyor.',
      diger: [
        { move: '38...Rc7', text: '39.Rd5 Rf7 40.a5 f3+ ile benzer (Motor: +2.6).' },
        { move: '38...Ne6', text: '39.Rd5 Nc7 40.Rh5 (Motor: +2.9).' },
      ],
    },
    '39w': {
      text: '39.Kf2: Şah f2’ye gider ve f-piyonunu durdurur.',
      amac: 'f-piyonunun önünde kalmak.',
      neden: 'Motorun ilk seçimi (Motor: +2.7). 39.Kd3?? Nf3 ile Siyaha karşı oyun verir.',
      diger: [
        { move: '39.Kf1', text: '39...Nf3 40.Rb5 Nd4 ile Siyah b3’e baskı yapar (Motor: +1.8).' },
        { move: '39.Kd3', text: '39...Re1 40.h4 Nf3 ile Siyah aktif (Motor: +1.2).' },
      ],
    },
    '39b': {
      text: '39...f3!: Piyon üçüncü yataya gelir.',
      amac: 'Beyaz şahını f2’ye bağlamak ve f2 karesini tehdit etmek.',
      neden: 'Motor bunu, 39...Re7 ve 39...Ne4+’yı yakın görüyor (Motor: +3.0 civarı). Piyon f3’te h3 kalesiyle korunacak; Beyaz şahı artık g1, f1 ve e3 karelerine bağlı.',
      diger: [
        { move: '39...Re7', text: '40.Rd5 Ne6 41.Kf3 Rg7 (Motor: +3.0).' },
        { move: '39...Ne4+', text: '40.Kf3 Ng5+ 41.Kxf4 Re4+ (Motor: +3.0).' },
      ],
    },
    '40w': {
      text: '40.Ne3: At e3’e gelir.',
      amac: 'f1 ve g4 karelerini kontrol etmek, f-piyonunu durdurmak.',
      neden: 'Motorun ilk seçimi (Motor: +3.5). 40.h4 ya da 40.Kg3 Siyaha ...Re2 ile karşı oyun verir (Motor: +0.7).',
      diger: [
        { move: '40.h4', text: '40...Re2+ 41.Kg3 Ne6 42.Kxf3 ile Beyaz piyonu alır ama Siyah aktif (Motor: +0.8).' },
      ],
    },
    '40b': {
      text: '40...Re4: Kale e4’e gelir.',
      amac: 'h4 ve b4 piyonlarına bakmak; ...Rh4 ile h-piyonuna saldırmak.',
      neden: 'Motorun ilk seçimi (Motor: +3.2). Kale e4’ten hem b4’ü korur hem de h4’e gidebilir.',
      diger: [
        { move: '40...Nf7', text: '41.Rf5+ Kg6 42.Rb5 Rf6 (Motor: +4.1).' },
        { move: '40...Ne4+', text: '41.Kxf3 Ng5+ 42.Ke2 Re4 (Motor: +4.3).' },
      ],
    },
    '41w': {
      text: '41.Ra6+: Kale şah çeker.',
      amac: 'Siyah şahını geriletmek ve kaleyi altıncı yataya getirmek.',
      neden: 'Motor 41.Rb5’i biraz daha iyi buluyor (Motor: +3.8 yerine +3.6). Fark küçük; Beyaz hâlâ açıkça önde.',
      diger: [
        { move: '41.Rb5', text: '41...Rh4 42.Rb6+ Kf7 43.Kg3 ile kale b4’ü hedefler (Motor: +3.8).' },
        { move: '41.Rf5+', text: '41...Kg6 42.Rb5 Rd4 (Motor: +3.6).' },
      ],
    },
    '41b': {
      text: '41...Ke5: Şah merkeze gelir.',
      amac: 'Şahı aktif hale getirmek ve e3 atına saldırmak.',
      neden: 'Motor 41...Kf7’yi biraz daha iyi buluyor (Motor: +3.6 yerine +3.7). Ke5 ile Siyah şahı oyuna katılır.',
      diger: [
        { move: '41...Kf7', text: '42.Rb6 h5 43.Rb7+ Kg6 (Motor: +3.6).' },
      ],
    },
    '42w': {
      text: '42.Rh6: Kale h6’ya gider.',
      amac: 'h7 piyonuna saldırmak.',
      neden: 'Motor 42.Ra5+’ı öneriyor (Motor: +3.6 yerine +2.4): 42...Kf6 43.Rb5 ile b4 düşer. 42.Rh6 ise Siyah şahına merkezde hareket alanı verir.',
      diger: [
        { move: '42.Ra5+', text: '42...Kf6 43.Rb5 Rh4 44.Rb6+ ile b4 düşer (Motor: +3.6).' },
        { move: '42.Rb6', text: '42...Rd4 43.Kg3 h5 44.h4 (Motor: +2.8).' },
      ],
    },
    '42b': {
      text: '42...Rd4: Kale d-hattına gelir.',
      amac: 'Kaleyi aktif tutup d2’ye inmek.',
      neden: 'Motor 42...Kd4!’ü öneriyor (Motor: +2.4 yerine +3.6): şah c3’e koşup Beyazın vezir kanadı piyonlarına saldırır. Kamsky kaleyle oynamayı seçti.',
      diger: [
        { move: '42...Kd4', text: '43.Rd6+ Kc3 44.a5 Rh4 ile Siyah şahı aktif (Motor: +2.4).' },
        { move: '42...Ne6', text: '43.Rxh7 Kd4 44.Rd7+ Kc3 (Motor: +3.1).' },
      ],
    },
    '43w': {
      text: '43.Nc4+: At şah çeker.',
      amac: 'Siyah şahını merkezden geriletmek.',
      neden: 'Motorun ilk seçimi (Motor: +3.6). 43.Ke1 ise Siyaha 43...Kf4 ile aktif bir şah verir (Motor: +0.5).',
      diger: [
        { move: '43.Kg3', text: '43...Ke4 44.Nc4 Kf5 45.Kf2 (Motor: +2.4).' },
      ],
    },
    '43b': {
      text: '43...Kf5: Şah f5’e gider.',
      amac: 'f-piyonunu desteklemek ve şahı merkeze yakın tutmak.',
      neden: 'Motorun ilk seçimi (Motor: +3.6). 43...Rxc4? 44.bxc4 bir kale kaybettirir (Motor: +5.2).',
      diger: [
        { move: '43...Kd5', text: '44.Rh5+ ile şah geriye döner (Motor: +5.6).' },
      ],
    },
    '44w': {
      text: '44.h4: h-piyonu g5 karesini kontrol eder.',
      amac: 'g5 atını kovalamak ya da ilerlemesini engellemek.',
      neden: 'Motorun ilk seçimi (Motor: +3.7). Piyon g5’e baskı yapar; ama h4 ileride Siyah kalesinin hedefi olacak.',
      diger: [
        { move: '44.Ne3+', text: '44...Ke5 45.Nc4+ Kf5 46.h4 ile hamle tekrarı (Motor: +3.6).' },
        { move: '44.a5', text: '44...Rd7 45.Rh5 Kf4 (Motor: +3.4).' },
      ],
    },
    '44b': {
      text: '44...Nf7: At f7’ye çekilir.',
      amac: 'h6 kalesine saldırmak.',
      neden: 'Motorun ilk seçimi (Motor: +3.9). At h6’ya ve d6’ya bakar.',
      diger: [
        { move: '44...Ne6', text: '45.Kxf3 Rd8 46.Ke3 Rd7 (Motor: +4.0).' },
        { move: '44...Ne4+', text: '45.Kxf3 Nf6 46.a5 Rf4+ (Motor: +4.4).' },
      ],
    },
    '45w': {
      text: '45.Rb6: Kale b6’ya çekilir.',
      amac: 'b4 piyonunu almak.',
      neden: 'Motor 45.Ne3+!’ü öneriyor (Motor: +4.2 yerine +3.2): 45...Ke5 46.Rxh7 Nd6 47.Kg3 ile Beyaz f3’ü alır. Rb6 h4’ü korumasız bırakır.',
      diger: [
        { move: '45.Ne3+', text: '45...Ke5 46.Rxh7 Nd6 47.Kg3 ile f3 piyonu düşer (Motor: +4.2).' },
        { move: '45.Rc6', text: '45...Rxh4 46.Kxf3 h5 47.a5 (Motor: +2.4).' },
      ],
    },
    '45b': {
      text: '45...Rxh4: Kale h4 piyonunu alır.',
      amac: 'Bir piyon geri almak ve kaleyi h-hattına getirmek.',
      neden: 'Motorun ilk seçimi (Motor: +3.5). Kale h4’ten h3’e geçip f3 piyonunu koruyacak.',
      diger: [
        { move: '45...Ke4', text: '46.Rxb4 Kf4 47.Rb6 (Motor: +4.5).' },
      ],
    },
    '46w': {
      text: '46.Rxb4: Kale b4 piyonunu alır.',
      amac: 'Bir piyon kazanmak ve a-piyonunu korumak.',
      neden: 'Motor 46.Kxf3 ve 46.Rxb4’ü yakın görüyor (Motor: +3.5). Beyazın şimdi iki geçer piyonu var: a ve b.',
      diger: [
        { move: '46.Kxf3', text: '46...Ng5+ 47.Ke2 Ne6 48.Rxb4 ile f-piyonu ortadan kalkar (Motor: +3.5).' },
        { move: '46.Ne3+', text: '46...Ke5 47.Rb5+ Kf6 48.Kg3 (Motor: +2.9).' },
      ],
    },
    '46b': {
      text: '46...Rh3: Kale f3 piyonunu korur.',
      amac: 'f-piyonunu desteklemek ve h1’den mat tehdidi yaratmak.',
      neden: 'Motor 46...Rh1 ya da 46...Rh2+’yi biraz daha iyi buluyor (Motor: +3.6 yerine +4.7). Kale h3’te f3’ü korur ve Beyaz şahının f1, e1 karelerine gitmesini tehlikeli kılar.',
      diger: [
        { move: '46...Rh1', text: '47.Kxf3 h5 48.a5 Ng5+ (Motor: +3.6).' },
        { move: '46...Rh2+', text: '47.Kg3 Rh1 48.Kxf3 h5 (Motor: +3.7).' },
      ],
    },
    '47w': {
      text: '47.a5: a-piyonu ilerler.',
      amac: 'Piyonu vezir yapmaya hazırlamak.',
      neden: 'Motorun ilk seçimi (Motor: +4.9). Beyaz kesin kazançta.',
      diger: [
        { move: '47.Ne3+', text: '47...Ke6 48.a5 Rh2+ 49.Kxf3 (Motor: +4.1).' },
        { move: '47.Rb8', text: '47...Ng5 48.Rf8+ Ke4 ile Siyah aktif (Motor: +2.7).' },
      ],
    },
    '47b': {
      text: '47...Ng5: At g5’e gelir.',
      amac: 'e4 ve h3 karelerinden şah çekmeye hazırlanmak.',
      neden: 'Motorun en iyi üç hamlesinden biri (Motor: +5.1). Kamsky bütün taşlarını Beyaz şahına yöneltti: piyon f3, kale h3, at g5. Bir sonraki hamlede ...Ne4+ tehdidi var.',
      diger: [
        { move: '47...Nd8', text: '48.Ne3+ Kg5 49.a6 Nc6 (Motor: +4.8).' },
        { move: '47...Rh2+', text: '48.Kxf3 Ng5+ 49.Kg3 Rh1 (Motor: +5.1).' },
      ],
    },
    '48w': {
      text: '48.a6??: a-piyonu koşar.',
      amac: 'Piyonu a7 ve a8’e ulaştırmak.',
      neden: 'Ağır hata. ChessBase’in analizinde “??” ile işaretlenmiş ve 48.Ne3+! Ke5 49.Ng4+ Kf5 50.a6 yolu verilmiş (Motor: +5.4). At c4’te kaldığı için e4 karesi Siyah atına açıktır ve 48...Ne4+ ile oyun döner (Motor: −6.0).',
      diger: [
        { move: '48.Ne3+', text: '48...Ke5 49.Ng4+ Kd6 50.a6 Kc5 51.a7 Kxb4 52.a8=Q ile Beyaz kazanır (Motor: +5.4).' },
        { move: '48.Ke3', text: '48...Rh6 49.Kd3 Ra6 50.Rb6 ile Beyaz hâlâ önde (Motor: +2.3).' },
      ],
    },
    '48b': {
      text: '48...Ne4+!: At şah çeker.',
      amac: 'Beyaz şahını f2’den uzaklaştırmak.',
      neden: 'Motorun açık ara ilk seçimi (Motor: −6.0; sonraki en iyi 48...Rh2+ +3.6). 49.Kf1?? ve 49.Ke1?? Rh1#, 49.Kg1? f2+ ile birkaç hamlede mat. Şah e3’e gitmek zorunda.',
      diger: [
        { move: '48...Rh2+', text: '49.Ke3 Re2+ 50.Kd3 ile Beyaz kazanır (Motor: +3.6).' },
      ],
    },
    '49w': {
      text: '49.Ke3: Şah e3’e gider.',
      amac: 'Mattan kaçmak.',
      neden: 'Tek hamle: 49.Kf1?? ve 49.Ke1?? Rh1# ile, 49.Kg1? f2+ ile mat olur.',
    },
    '49b': {
      text: '49...f2+!: Piyon şah çekerek ilerler.',
      amac: 'Piyonu f2’ye getirmek; Beyaz şahı f1’e dönemez.',
      neden: 'Motorun açık ara ilk seçimi (Motor: −6.5; sonraki en iyi +5.7). Piyon terfiye bir kare uzakta.',
      diger: [
        { move: '49...Nc3', text: '50.a7 Nd5+ 51.Kf2 ile Beyaz kazanır (Motor: +5.7).' },
      ],
    },
    '50w': {
      text: '50.Ke2: Şah e2’den f1 karesini kontrol eder.',
      amac: 'Piyonun terfisini önlemek.',
      neden: 'Tek hamle: 50.Kd4?? f1=Q ile Siyah hemen vezir çıkarır (Motor: −36).',
    },
    '50b': {
      text: '50...Rc3?: Kale c2’ye bakar.',
      amac: 'c2 piyonuna saldırmak.',
      neden: 'Hata. ChessBase ve motor 50...Rf3!’ü öneriyor (Motor: −6.8): 51.Kxf3 f1=Q+ 52.Ke3 Qe1+ ve vezir b4’ü alır. Maç hamlesinden sonra 51.Kf1! ile Beyaz yeniden kazanır (Motor: +4.6).',
      diger: [
        { move: '50...Rf3', text: '51.Kxf3 f1=Q+ 52.Ke3 Qe1+ 53.Kd3 Qxb4 ile Siyah kazanır (Motor: −6.8).' },
        { move: '50...Kf4', text: '51.Rb7 Rh1 52.Rf7+ ile Beyaz önde (Motor: +1.2).' },
      ],
    },
    '51w': {
      text: '51.Nd2?: At e4’e saldırır.',
      amac: 'e4 atına saldırıp f1 karesini korumak.',
      neden: 'Hata. ChessBase’e göre 51.Kf1! ile Beyaz kazanırdı (Motor: +4.6). 51.Nd2? ise d2’deki atı şaha bağlı bırakır ve 51...Rxc2! kazanır (Motor: −3.4).',
      diger: [
        { move: '51.Kf1', text: '51...Kg5 52.Nb6 Nd2+ 53.Kxf2 ile Beyaz kazanır (Motor: +4.6).' },
        { move: '51.Nd6+', text: '51...Nxd6 52.a7 Rc8 53.Rb8 ile denge (Motor: +0.1).' },
      ],
    },
    '51b': {
      text: '51...Rxc2!: Kale c2’yi alır.',
      amac: 'd2 atını şaha bağlamak ve f1 terfisini kesinleştirmek.',
      neden: 'Motorun açık ara ilk seçimi (Motor: −3.1). 52.Rxe4 Rxd2+ 53.Kxd2 f1=Q ile Siyah vezir çıkarır; 51...Nxd2 ise sadece eşitlik verirdi (Motor: 0.0).',
      diger: [
        { move: '51...Nxd2', text: '52.Kxf2 Rxc2 53.Ke3 ile denge (Motor: 0.0).' },
      ],
    },
    '52w': {
      text: '52.Rd4: Kale d4’e gelir.',
      amac: 'e4 atına saldırmak ve d2’yi desteklemek.',
      neden: 'Motor 52.Rxe4’ü öneriyor (Motor: −3.2; maç hamlesi −9.4). Rxe4 Rxd2+ Kxd2 f1=Q sonrasında Siyahın veziri olur ama Beyazın a-piyonu ve kalesi direnebilir.',
      diger: [
        { move: '52.Rxe4', text: '52...Rxd2+ 53.Kxd2 f1=Q 54.Ra4 ile Siyah kazanır ama Beyaz direnir (Motor: −3.2).' },
      ],
    },
    '52b': {
      text: '52...Nxd2: At d2’yi alır.',
      amac: 'Bir taş kazanmak ve f1’i korumak.',
      neden: 'Motor 52...f1=Q+ ve 52...Nxd2’yi neredeyse eşit görüyor (her ikisi de mat yolunda).',
      diger: [
        { move: '52...f1=Q+', text: '53.Kxf1 Nxd2+ 54.Ke1 Nf3+ ile Siyah kazanır (Motor: mat yolunda).' },
      ],
    },
    '53w': {
      text: '53.Rd5+: Kale şah çeker.',
      amac: 'Son bir şans aramak.',
      neden: 'Beyazın hiçbir hamlesi kurtarmaz; motor tüm alternatiflerde Siyahın mat yolunda olduğunu görüyor.',
    },
    '53b': {
      text: '53...Ke6: Şah e6’ya gider.',
      amac: 'Kaleye saldırmak ve f2 piyonunu terfiye götürmek.',
      neden: 'Motor 53...Kf4 ya da 53...Ke4’ü daha hızlı buluyor, ama 53...Ke6 de kesin kazanır (Motor: −9.9). Carlsen terk etti.',
      diger: [
        { move: '53...Kf4', text: '54.Rxd2 f1=Q+ 55.Kxf1 Rxd2 ile Siyah mat yolunda (Motor: mat yolunda).' },
      ],
    },
  },
  exercises: [
    { id: 'cka-1', kind: 'tekrar', plan: false, title: 'At şahı, sonra piyon şahı',
      source: 'Carlsen – Kamsky, Hantı-Mansiysk 2005 (48. hamle)',
      fen: '8/7p/P7/5kn1/1RN5/1P3p1r/2P2K2/8 b - - 0 48',
      prompt: 'Beyaz 48.a6 ile piyonunu koşturdu. Siyahın f3’te geçer piyonu, g5’te atı, h3’te kalesi var. Hamle Siyahta.',
      hint: 'Beyaz şahını şahlı hamlelerle f-piyonunun önünden uzaklaştırın.',
      line: ['Ne4+', 'Ke3', 'f2+'],
      explanation: '**48...Ne4+! 49.Ke3 f2+** At şahla Beyaz şahını e3’e iter, sonra piyon yine şahla f2’ye gelir; Beyaz şahı f1’e dönemez. 49.Kg1? f2+ mat ile, 49.Kf1?? ve 49.Ke1?? Rh1# ile biter. Motor: 48...Ne4+ −6.3, sonraki en iyi 48...Rh2+ +4.7; 49...f2+ −6.6, sonraki en iyi +5.9.',
      link: 'Kamsky’nin bütün oyun sonu planı buydu: at ve geçer f-piyonu birlikte, şahlı hamlelerle.' },
    { id: 'cka-2', kind: 'tekrar', plan: false, title: 'Bağlı at',
      source: 'Carlsen – Kamsky, Hantı-Mansiysk 2005 (51. hamle)',
      fen: '8/7p/P7/5k2/1R2n3/1Pr5/2PNKp2/8 b - - 3 51',
      prompt: 'Beyaz 51.Nd2 ile e4 atına saldırdı ve f1 karesini korumak istiyor. Siyahın f2’de piyonu var. En güçlü devam hangisi?',
      hint: 'd2 atı ile e2 şahı aynı yatayda.',
      line: ['Rxc2', 'Rd4', 'Nxd2'],
      accept: { 2: ['f1=Q+'] },
      explanation: '**51...Rxc2!** Kale ikinci yataya girer; d2 atı şaha bağlıdır. 52.Rxe4 Rxd2+ 53.Kxd2 f1=Q ile Siyah vezir çıkarır. Oyunda 52.Rd4 Nxd2 geldi. Motor: Rxc2 −3.5, 51...Nxd2 0.0; 52.Rd4 sonrası Nxd2 −9.0 ve f1=Q+ −8.9 neredeyse eşit.',
      link: 'Geçer piyon f2’ye gelince onu durduran tek taşı (d2 atını) bağlamak yeterli oldu.' },
    { id: 'cka-3', kind: 'transfer', plan: false, title: 'Piyon şahla ilerler',
      source: 'Rauzer – Botvinnik, SSCB Şampiyonası, Leningrad 1933 (21. hamle)',
      fen: 'r2r2k1/pp3pbp/6p1/q1PP4/3B1Pn1/2N2p2/P1PQ2PP/2RR2K1 b - - 4 21',
      prompt: 'Siyahın f3’te ileri bir piyonu ve g4’te atı var; Beyaz şahı g1’de. Hamle Siyahta.',
      hint: 'Piyon şah çekerek ilerleyebilir mi?',
      line: ['f2+'],
      explanation: '**21...f2+!** Piyon şah çekerek ilerler; Beyaz şahı f1’e gitmek zorunda kalır ve 22.Kf1 Qa6+ 23.Qe2 Bxd4 ile Siyah üstünlüğü ele alır. Motor: f2+ −2.1, sonraki en iyi 21...Bxd4+ +0.1.',
      link: 'Kamsky gibi Botvinnik de f-piyonunu atın desteğiyle şahlı bir hamleyle ikinci yataya getirdi.' },
    { id: 'cka-4', kind: 'transfer', plan: false, title: 'Geçer piyon ve kale',
      source: 'Leonhardt – Marshall, Ostende 1905 (29. hamle)',
      fen: '3k1r2/1R6/p7/2p2r2/8/5p2/PPP3PP/4R1K1 b - - 0 29',
      prompt: 'Siyahın f3’te geçer piyonu var, iki kalesi f-hattında. Beyazın kalesi yedinci yatayda. Hamle Siyahta.',
      hint: 'Piyon şah çekerse e1 kalesi ne olur?',
      line: ['f2+'],
      explanation: '**29...f2+!** Piyon şah çeker; 30.Kf1 fxe1=Q+ 31.Kxe1 Re5+ sonrası Siyah piyon karşılığında bir kale kazanmış olur. Motor: f2+ −4.6, sonraki en iyi 29...Kc8 +1.4.',
      link: 'Kamsky’nin 49...f2+ hamlesindeki gibi, geçer piyonun şahlı ilerleyişi savunanın karşı hamlesine zaman bırakmaz.' },
  ],
  sources: [
    { title: 'ChessBase: Levon Aronian wins FIDE World Cup (9. sıra maçı, Carlsen–Kamsky analizi)', url: 'https://en.chessbase.com/post/levon-aronian-wins-fide-world-cup' },
    { title: 'Wikipedia: Chess World Cup 2005', url: 'https://en.wikipedia.org/wiki/Chess_World_Cup_2005' },
    { title: 'Chess.com: B43 Sicilian, Kan Variation', url: 'https://www.chess.com/blog/kleelof/b43-sicilian-kan-variation' },
  ],
};
