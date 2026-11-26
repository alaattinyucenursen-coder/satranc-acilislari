// Grischuk – Svidler, Dünya Kupası finali, Hantı-Mansiysk 2011 (1. oyun). Kaynak: PgnMentor (Svidler.pgn).
export default {
  id: 'grischuk-svidler-2011',
  theme: 'Taş fazlası: atlarla vezir kanadına baskın',
  white: 'Aleksandr Grischuk', black: 'Peter Svidler',
  whiteShort: 'Grischuk', blackShort: 'Svidler',
  event: 'Dünya Kupası finali, 1. oyun', site: 'Hantı-Mansiysk', year: 2011, eco: 'B43',
  variation: 'Sicilya Savunması, Kan (Paulsen) varyantı, 5.Nc3 b5',
  result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 b5 6. Bd3 Qb6 7. Nf3 Nc6 8. O-O Qb8 9. Re1 Bd6 10. e5 Bc7 11. Bf4 Nge7 12. Qe2 Ng6 13. Bg3 Bb7 14. Rad1 Nce7 15. Be4 Bxe4 16. Nxe4 O-O 17. Rxd7 Nd5 18. Nd6 Nb6 19. Rxf7 Rxf7 20. Nxf7 Kxf7 21. Ng5+ Kg8 22. Nxe6 Qc8 23. Qg4 Ra7 24. Rd1 Na4 25. h3 Nxb2 26. Rd5 Bb6 27. Rd6 Nc4 28. Qf5 Rf7 29. Qe4 Nxd6 30. exd6 Nf8 0-1`,

  summary: 'Dört oyunluk Dünya Kupası finalinin ilk oyunu. Svidler Kan varyantında az bilinen **...Qb6-b8 ve ...Bd6** kuruluşunu seçti; Grischuk 20 dakikadan fazla düşünüp yeni hamle **10.e5**’i buldu ve iyi bir pozisyon aldı. Svidler 16...O-O ile d7 piyonunu vermek zorunda kaldı; Beyazın kalesi d7’ye girdi. Ama Grischuk zaman sıkıntısına girdi ve **18.Nd6?** ile kendi kalesinin dönüş yolunu kapattı (kendi deyişiyle “kitaplardaki gibi klasik bir hata”). Kaleyi kurtarmak için **19.Rxf7** ile bir taş karşılığında üç piyon aldı; pozisyon yine dengeliydi. Bundan sonra Svidler’in oyunu dersliktir: tek hamleleri buldu (20...Kxf7, 21...Kg8), 23...Ra7 ile taşlarını korudu ve saniyelerle oynayan rakibine karşı fazla atını **...Na4xb2** ile vezir kanadına soktu. **26...Bb6** ve **27...Nc4** ile Beyazın kalesi tuzağa düştü; **30...Nf8** son direnişi de söndürdü.',
  intro: 'Kan (Paulsen) varyantında Siyah 4...a6 ile b5 karesini hem Beyaz atlarından korur hem de kendi ...b5 ilerleyişine hazırlar. Atlar ve d-piyonu geç gelişir; Siyah önce vezirini (c7, b6 ya da b8) ve fillerini yerleştirip Beyazın planına göre kuruluşunu seçer. 5...b5 ile Siyah vezir kanadında hemen yer alır: fil b7’den e4’e bakacak, ...b4 ile c3 atı kovalanabilecek. Bu oyunda Svidler veziri b6 ve b8’e götürüp fili d6’ya koydu; amaç h2 ve e5 karelerine baskıydı. Grischuk 10.e5 ile merkezde alan aldı ve Siyahın gecikmiş gelişimini cezalandırmaya çalıştı. Oyunun ikinci yarısı, bir taş karşılığında üç piyonun nasıl değerlendirildiğini ve zaman sıkıntısının nasıl belirleyici olabileceğini gösterir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Bd3, O-O ve Re1 ile hızlı gelişip **10.e5** ile alan almak: Siyahın fili kovalanır, f6 ve d6 kareleri Siyah taşlarına kapanır.',
      'e5 piyonunu Bf4-g3, Qe2 ve Nf3 ile sağlam tutmak; Siyahın e5’e baskısını (…Ng6, …Bc7, …Qb8) karşılamak.',
      '**Rad1** ile d-hattına baskı: Siyah rok yaparsa d7 piyonu düşer, yapmazsa şah merkezde kalır.',
      'd7’ye giren kale ve e4-d6/c5 karelerine gelen atla Siyahın gelişimini engellemek; bunun yerine 18.Nd6? kalenin dönüş yolunu kapattı.',
      'Bir taş karşılığında üç piyon aldıktan sonra e6’daki güçlü at ve e5 piyonu ile inisiyatifi korumak, ama önce vezir kanadını (b2, a2) güvenceye almak; 24.Rd1?! ve 25.h3? ile bu ihmal edildi.',
      'Zaman yönetimi: 10.e5 için 20 dakikadan fazla harcadıktan sonra 23. hamleden itibaren saniyelerle oynamak zorunda kaldı; oyunun sonucunu bu belirledi.',
    ] },
    black: { title: 'Siyahın planı (kazanan taraf)', points: [
      'Kan kuruluşu: **…b5, …Qb6-b8, …Bd6/Bc7, …Bb7** ile e5 karesine ve b8-h2 çaprazına baskı; atlar e7 üzerinden g6 ve d5’e.',
      '10.e5’ten sonra e5 piyonunu hedef seçmek: …Bc7, …Nge7-g6 ve …Qb8 üç taşla e5’e bakar; Beyaz onu taşlarıyla tutmak zorunda kalır.',
      'Gelişimi tamamlamak için **16...O-O** ile d7 piyonunu vermek ve süre kazanmak: …Nd5-b6 ile d7’deki kaleyi kovalamak.',
      'Beyazın saldırısında tek hamleleri bulmak: **20...Kxf7**, **21...Kg8**, **22...Qc8**, **23...Ra7** (c7 filini koru, kale yedinci yatayda f7’ye geçebilsin).',
      'Fazla atı işe katmak: **24...Na4!** ve **25...Nxb2** ile korumasız vezir kanadı piyonlarını almak ve d1 kalesini kovalamak.',
      '**26...Bb6** ile fili aktif a7-g1 çaprazına koymak, **…Re7** ile e6 atını tehdit etmek; **27...Nc4!** ile atı hem b6 filini korumaya hem d6 kalesini almaya getirmek.',
      'Kalite kazandıktan sonra **30...Nf8** ile e6 atını kovalayıp sonu kontrol altına almak.',
    ] },
  },
  critical: [
    { move: '10w', title: '10.e5: yeni ve güçlü hamle', text: 'Grischuk burada 20 dakikadan fazla düşündü ve teoride yer almayan 10.e5’i oynadı (The Week in Chess’e göre ana hat 10.Qe2). ChessBase analizi hamleyi “yeni ve güçlü” diye niteliyor. Beyaz alan alır, d6 filini kovalar ve Siyahın …Nf6 ile gelişmesini önler. Svidler hızlı oynadı; bu hamleyi beklediği anlaşılıyor. Motor 10.e5’i en iyi buluyor (+0.8); 10...Nxe5 ile piyon almak (Motor: +0.8) vezirin uzun süre kovalandığı tehlikeli bir oyuna gider, Svidler sağlam 10...Bc7’yi seçti.' },
    { move: '16b', title: '16...O-O: piyon karşılığında gelişim', text: 'Şah e8’de dururken d7 piyonu korunuyordu; rok yapınca piyon düşer. ChessBase hamleyi “cesur, Grischuk’u almaya davet ediyor” diye niteliyor; FIDE raporunda Svidler’in 15. hamleden sonra pozisyonunu çok tehlikeli bulduğu ve oyunda kalmak için piyon vermek zorunda kaldığı yazıyor. Motor: 16...O-O +0.6; 16...h6 ya da 16...Nf5 de benzer (+0.7). Siyah piyon karşılığında …Nd5-b6 ile d7 kalesine saldırma imkânı kazanır.' },
    { move: '18w', title: '18.Nd6?: kalenin yolunu kendi atıyla kapatmak', text: 'At d6’ya gelir ama d-hattını tıkar; 18...Nb6 sonrası d7’deki kalenin dönüş karesi kalmaz. Grischuk maçtan sonra bunu “birçok satranç kitabında anlatıldığı gibi klasik bir hata” diye tanımladı. The Week in Chess’e göre Grischuk 17. ve 18. hamlelere yaklaşık 17 dakika harcadı ve saatinde 7 dakika kaldı. Daha iyisi 18.Qd2 (Motor: +0.6; 18...Qc8 19.Rxd5 exd5 20.Nd6 ile kalite fedası) ya da 18.Qd3 (+0.45). Motor 18.Nd6’nın kendisini felaket görmüyor (+0.4), çünkü 19.Rxc7 Qxc7 ile kaliteyi verip d6 atıyla oynanabilir.' },
    { move: '19w', title: '19.Rxf7: kale yerine üç piyon', text: 'Grischuk kaleyi c7 filine değil f7’ye verdi ve 20.Nxf7 Kxf7 21.Ng5+ Kg8 22.Nxe6 ile sonuçta bir taş karşılığında üç piyon (d7, f7, e6) aldı. Motor 19.Rxc7 Qxc7’yi biraz daha iyi buluyor (+0.3); maç hamlesiyle pozisyon yaklaşık eşit (0.0/−0.1). Grischuk’un sözleriyle: “Kaleyi kaptırdıktan sonra bir şekilde fena olmayan bir pozisyon buldum, ama yine kaybettim.” Sorun pozisyon değil saatti: 22.Nxe6’dan sonra Beyazın 2 dakika 44 saniyesi, Siyahın 24 dakikası vardı.' },
    { move: '21b', title: '21...Kg8: tek doğru kare', text: 'Şah g8’e döner. 21...Kf8? 22.Qf3+ Kg8 23.Qf7+ Kh8 24.Nxe6 ile kaybeder (Motor: +4.6); 21...Ke7 22.Nxh7 de Beyazı öne geçirir (+0.8). Svidler bu tek hamleyi bulduğu için taş fazlası ve dengeli bir pozisyonla kaldı (Motor: −0.3).' },
    { move: '24b', title: '24...Na4!: at vezir kanadına gidiyor', text: 'Grischuk 24.Rd1’i saatinde 3 saniye kala oynamıştı; The Week in Chess bu hamleye ?! veriyor ve 24.b3’ü öneriyor (motor 24.h3’ü en iyi buluyor, −0.5). Svidler iki dakika düşünüp 24...Na4’ü buldu: TWIC hamleyi “mükemmel” diye niteliyor. At b2’ye bakar ve Beyaz arka yatay sorunlarından dolayı b2’yi rahat koruyamaz. Motor: 24...Na4 −1.4, ikinci en iyi 24...Nc4 0.0.' },
    { move: '26w', title: '26.Rd5??: çöküş', text: '25.h3? 25...Nxb2’ye izin verdi (TWIC: 25.b3 nesnel olarak çok daha iyiydi). Şimdi 26.Nxc7 Rxc7 27.Rd6 ile atı c7 filine verip zarar sınırlanabilirdi (Motor: −2.1). ChessBase 26.Rd5’e ?? veriyor: “Grischuk çöküyor ve oyun bitiyor.” Kale d5’te e6 atını korumaz; 26...Bb6! sonrası …Re7 ile e6 atı düşer ve f2 de hedeftir (Motor: −3.1).' },
    { move: '27b', title: '27...Nc4!: atın dönüşü', text: 'b2’deki at c4’e döner: b6 filini korur, d6 kalesine ve e5 piyonuna saldırır. Kale d6’dan kaçarsa e5 düşer, kalırsa alınır; Beyaz kalite kaybından kurtulamaz. Motor: 27...Nc4 −3.9; 27...Re7 −2.2 (28.Rxb6 ile Beyaz kurtulur). 27.Rd6 ve 28.Qf5 TWIC’e göre saatte iki saniye kala oynandı.' },
  ],
  lessons: [
    'Kan varyantında Siyahın esnek kuruluşu (…a6, …b5, …Qb8, …Bd6) gelişim gecikmesiyle ödenir; Beyaz 10.e5 gibi bir alan hamlesiyle bu gecikmeyi cezalandırabilir. Siyah bu yüzden e5 piyonunu hemen hedef almalıdır.',
    'Gelişimi tamamlamak için piyon vermek (16...O-O) bazen en iyi savunmadır: rakibin kalesi açgözlülükle girdiği karede tuzağa düşebilir.',
    'Bir taşın dönüş yolunu kendi taşınla kapatma: 18.Nd6? d-hattını tıkadı ve d7 kalesi …Nb6 ile kapana kısıldı. İleri giden taşın geri dönüş yolunu her zaman kontrol edin.',
    'Bir taş karşılığında üç piyonun değeri taşların ne kadar aktif olduğuna bağlıdır; taş fazlası olan taraf saldırıyı tek hamlelerle (…Kxf7, …Kg8, …Ra7) karşıladıktan sonra fazla taşını mutlaka işe katmalıdır.',
    'Korumasız piyonlar (b2, a2) fazla taşın ilk hedefidir: Svidler’in atı a4 üzerinden b2’ye girip sonra c4’e döndü ve oyunun en güçlü taşı oldu.',
    'İyi bir hamle birden fazla iş görür: 27...Nc4 hem b6 filini korudu hem d6 kalesine ve e5 piyonuna saldırdı.',
    'Saat de bir taştır: Grischuk 10.e5 için 20 dakikadan fazla harcadı, 23. hamleden itibaren artı süreyle oynadı ve iyi pozisyonu kısa sürede dağıldı.',
  ],
  notes: {
    '1w': {
      text: '1.e4: şah piyonu iki kare ilerler, d5 ve f5 karelerini kontrol eder, f1 filine ve vezire yol açar.',
      amac: 'Merkezde yer kaplamak, hızlı gelişip rok yapmak ve açık bir oyun aramak.',
      neden: 'Dört oyunluk finalin ilk oyununda Beyaz taşlarla oynayan Grischuk inisiyatif için en doğrudan hamleyi seçti. Motor ilk hamleler arasında küçük farklar görür (1.e4 +0.4).',
      diger: [
        { move: '1.d4', text: 'Daha kapalı, manevralı oyunlara gider (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek başlangıç; hamle sırasına göre 1.d4 ya da İngiliz yapılarına geçebilir (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini kanat piyonuyla kontrol eder.',
      amac: 'Dengesiz bir yapı kurmak: Beyaz d4 oynarsa c-piyonunu merkez piyonuyla değişip yarı açık c-hattını ve merkezde fazla piyonu almak.',
      neden: '1...e5’in simetrik yapılarına göre daha çok kazanma şansı verir. Motor 1...e5 ile neredeyse eşit görür (+0.3).',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar (İspanyol, İtalyan); daha simetrik ve sağlam (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması; merkez erken kapanır (Motor: +0.35).' },
      ],
    },
    '2w': {
      text: '2.Nf3: at gelişir, d4 ilerleyişini hazırlar ve e5 karesine bakar.',
      amac: 'd4 ile merkezi açmak ve açık Sicilya’ya girmek.',
      neden: 'Açık Sicilya Beyazın en iddialı yoludur; at f3’ten d4’e geri alım için hazırdır. Motor en iyi hamle olarak bunu görür (+0.5).',
      diger: [
        { move: '2.c3', text: 'Alapin: d4’ü piyonla destekler, teorik tartışmadan kaçar (Motor: +0.3).' },
        { move: '2.Nc3', text: 'Kapalı Sicilya ya da hamle sırası oyunu (Motor: +0.3).' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini kontrol eder ve f8 filinin önünü açar.',
      amac: 'Kan, Taimanov ve Paulsen sistemlerine yol açmak: esnek, d-piyonunu geç oynayan bir kuruluş.',
      neden: '2...d6 (Najdorf, Dragon) ya da 2...Nc6’nın (Sveşnikov) yerine Svidler daha az teorik, kuruluşu sonradan seçilen bir sistemi tercih etti. ...e6 sonrası Siyah ...d5 ile merkezi açmaya da hazırdır.',
      diger: [
        { move: '2...d6', text: 'Najdorf ve Dragon’a giden en popüler hamle (Motor: +0.5).' },
        { move: '2...Nc6', text: 'Sveşnikov ve klasik sistemlere gider (Motor: +0.3).' },
      ],
    },
    '3w': {
      text: '3.d4: Beyaz merkezi açar ve c5 piyonuna değiş teklif eder.',
      amac: 'Açık Sicilya: d-hattını açıp gelişim avantajını kullanmak.',
      neden: 'Beyazın taşları hızlı gelişecek, Siyahın ise merkezde fazla piyonu olacak; açık Sicilya’nın temel takası budur.',
      diger: [
        { move: '3.c3', text: 'Alapin yapısına geçer; daha sakin (Motor: +0.3).' },
        { move: '3.Nc3', text: 'd4’ü bir hamle geciktirir; çoğu kez aynı yapılara döner (Motor: +0.3).' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah merkezde değişir.',
      amac: 'c-hattını yarı açmak ve merkez piyonlarını (d ve e) korumak.',
      neden: 'Değişmezse 4.d5 ile Beyaz büyük alan kazanır (3...a6 4.d5 Motor: +0.8). Bu değiş Sicilya’nın özüdür.',
      diger: [
        { move: '3...d5', text: 'Merkezi hemen açar ama Siyah gelişimde geri kalır (Motor: +1.0).' },
      ],
    },
    '4w': {
      text: '4.Nxd4: at piyonu geri alır ve merkeze yerleşir.',
      amac: 'Merkezdeki atla b5, c6, e6 ve f5 karelerine baskı yapmak.',
      neden: 'Doğal geri alım; at d4’te güçlüdür ama ileride ...Qb6 gibi hamlelerle hedef olabilir.',
    },
    '4b': {
      text: '4...a6: Kan varyantı. Siyah b5 karesini kontrol eder ve henüz atlarını geliştirmez.',
      amac: 'Beyaz atların b5’e gelmesini önlemek, ...b5 ilerleyişini hazırlamak ve vezire c7/b6 kareleri açmak.',
      neden: 'Atlar sonra gelişince Siyah kuruluşunu Beyazın planına göre seçer. 4...Nf6 bir hamle sonra 5.e5 ile kovalanabilir, 4...Nc6 ise Taimanov’a gider. Motor üç hamleyi yakın görür (4...Nf6 +0.5, 4...a6 +0.55).',
      diger: [
        { move: '4...Nc6', text: 'Taimanov varyantı (Motor: +0.5).' },
        { move: '4...Nf6', text: '5.Nc3 ile Dört At ya da 5...d6 ile Scheveningen’e geçer (Motor: +0.5).' },
      ],
    },
    '5w': {
      text: '5.Nc3: at gelişir, e4’ü ve d5’i destekler.',
      amac: 'Hızlı gelişip rok yapmak; sonra Bd3, O-O ve Re1 ile merkezde e5 ilerleyişini hazırlamak.',
      neden: 'Kan’a karşı en çok oynanan hamledir. Motor 5.c4 ile Maroczy kuruluşunu (+0.6) ve 5.Bd3’ü (+0.6) biraz daha iyi bulur; 5.Nc3 ise c-piyonunu kapatıp ...b5-b4 hedefi verir.',
      diger: [
        { move: '5.c4', text: 'Maroczy kuruluşu: d5’i sıkıca tutar, ...b5’i önler (Motor: +0.6).' },
        { move: '5.Bd3', text: 'Fil e4’ü korur, c-piyonu serbest kalır; Kan’a karşı modern ana yol (Motor: +0.6).' },
      ],
    },
    '5b': {
      text: '5...b5: Siyah vezir kanadında hemen alan alır.',
      amac: 'Fili b7’ye getirip e4’e baskı yapmak; ...b4 ile c3 atını kovalayıp e4’ün koruyucusunu kaçırmak.',
      neden: 'c3 atı ...b4 için hedef olduğu için bu hamle 5.Nc3’e karşı mantıklıdır. Motor 5...b5’i en iyi görür (+0.3); ana hat 5...Qc7 (+0.5) daha klasik ve sağlamdır.',
      diger: [
        { move: '5...Qc7', text: 'Kan’ın ana hattı: vezir e5’i kontrol eder (Motor: +0.5).' },
        { move: '5...Nc6', text: 'Taimanov’a geçiş (Motor: +0.6).' },
      ],
    },
    '6w': {
      text: '6.Bd3: fil e4’ü korur ve şah kanadına bakar.',
      amac: 'e4’ü sağlamlaştırıp rok yapmak; ileride e5 ile filin h7’ye bakan çaprazını açmak.',
      neden: '...b4 sonrası Nc3 kaçarsa e4 korumasız kalabilir; fil d3 bunu önler. Alternatif 6.g3 fili uzun çapraza koyar (Motor: +0.4), 6.Bd3 ise daha doğrudan (+0.45).',
      diger: [
        { move: '6.g3', text: 'Fil g2’de e4’ü ve uzun çaprazı tutar; daha konumsal (Motor: +0.4).' },
        { move: '6.Be3', text: 'f3, Qd2 ve O-O-O planı; ...b4 sonrası e4 zayıflar (Motor: +0.1).' },
      ],
    },
    '6b': {
      text: '6...Qb6: vezir d4 atına saldırır.',
      amac: 'Beyazın merkez atını geri çekilmeye zorlamak ve veziri g1-a7 çaprazına koymak.',
      neden: 'At d4’ten çekilirse Siyahın …Nc6, …d6 ve …Bc5 gibi hamleleri rahatlar. chess.com raporu bu …Qd8-b6-b8 manevrasını “az bilinen ve hantal görünen” bir kuruluş diye niteliyor. Motor 6...Bb7’yi (+0.4) bir parça daha iyi görür.',
      diger: [
        { move: '6...Bb7', text: 'Doğal gelişim; fil e4’e baskı yapar (Motor: +0.4).' },
        { move: '6...Qc7', text: 'Klasik Kan kuruluşu (Motor: +0.6).' },
      ],
    },
    '7w': {
      text: '7.Nf3: at f3’e çekilir.',
      amac: 'Atı e5 karesine baktırmak ve şah kanadında rok için hazır tutmak.',
      neden: 'Nb3 atı kenara iter; Nf3 ise e5 ilerleyişini destekler ve şahı korur. Motor en iyi geri çekilme olarak bunu görür (+0.5).',
      diger: [
        { move: '7.Nb3', text: 'Daha sık görülen geri çekilme; at a5 ve c5’e bakar ama oyundan biraz uzaklaşır (Motor: +0.4).' },
        { move: '7.Be3', text: 'Piyon fedası gibidir: 7...Bc5 sonrası Beyaz karmaşık oyuna girer (Motor: 0.0).' },
      ],
    },
    '7b': {
      text: '7...Nc6: at gelişir ve e5 ile d4 karelerine bakar.',
      amac: 'e5 karesini tutmak ve gerekirse …Nb4 ile d3 filine saldırmak.',
      neden: 'Siyah henüz …Nf6 oynamaz, çünkü e5 ile kovalanabilir. Motor 7...Qc7’yi (+0.4) ve 7...Bb7’yi (+0.55) biraz daha iyi görür; at c6 ileride e5 ilerleyişinin hedefi de olabilir.',
      diger: [
        { move: '7...Qc7', text: 'Vezir e5’e bakan klasik kareye döner (Motor: +0.4).' },
        { move: '7...Bb7', text: 'Fil önce gelişir, vezir b6’da kalır (Motor: +0.55).' },
      ],
    },
    '8w': {
      text: '8.O-O: Beyaz rok yapar ve şahını güvene alır.',
      amac: 'Gelişimi tamamlayıp kaleyi e1’e getirmek; e5 ilerleyişine hazırlanmak.',
      neden: 'Siyah henüz şah kanadını geliştirmediği için Beyaz hızlı rok ve merkez açılışıyla öne geçmek ister. Motor en iyi hamle olarak rok yapmayı görür (+0.7).',
      diger: [
        { move: '8.Bf4', text: 'e5’i hemen kontrol eder ama şah merkezde kalır (Motor: +0.4).' },
        { move: '8.Qe2', text: 'e5’i destekler (Motor: +0.4).' },
      ],
    },
    '8b': {
      text: '8...Qb8: vezir b8’e çekilir ve b8-h2 çaprazına girer.',
      amac: '…Bd6 ile birlikte h2’ye ve e5 karesine baskı yapmak; d4 kalmadığı için b6’daki vezirin işi bitti.',
      neden: 'Vezir c7’ye de gidebilirdi, ama b8’de c-hattında rakip kaleyle karşılaşmaz ve b7 filine yer bırakır. Hamle yavaş: Siyah vezirle üçüncü hamlesini yapıyor. Motor 8...Bb7’yi (+0.5) daha iyi görür, 8...Qb8 +0.8.',
      diger: [
        { move: '8...Bb7', text: 'Önce gelişim; vezir sonra c7’ye gidebilir (Motor: +0.5).' },
        { move: '8...Qc7', text: 'Vezir e5’e bakar, ama Re1 ve Bf4 ile tehdit edilebilir (Motor: +0.9).' },
      ],
    },
    '9w': {
      text: '9.Re1: kale e-hattına gelir, e4’ü destekler ve e5 ilerleyişini hazırlar.',
      amac: 'Merkezi e5 ile açmak; açılırsa kale e-hattından Siyahın merkezdeki şahına bakar.',
      neden: 'Siyahın şahı hâlâ e8’de; e-hattı açılırsa Re1 çok güçlü olur. Motor 9.Re1 ile 9.Qe2’yi eşit görür (+0.75).',
      diger: [
        { move: '9.Qe2', text: 'Vezir e5 ilerleyişini destekler; teoriye göre de iyi (Motor: +0.7).' },
        { move: '9.e5', text: 'Hemen; 9...Nxe5 10.Nxe5 Qxe5 sonrası Beyaz piyon karşılığı gelişim alır (Motor: +0.6).' },
      ],
    },
    '9b': {
      text: '9...Bd6: fil d6’ya gelir, h2’ye ve e5 karesine bakar.',
      amac: 'Vezirle birlikte b8-h2 çaprazında batarya kurmak ve e5 ilerleyişini önlemek.',
      neden: 'Fil d6’da e5’i ikinci kez kontrol eder ve d-piyonunun önünü kapatır; ama e5 ile kovalanabilir. Motor bu hamleyi en iyi görür (+0.7); 9...d6 (+1.1) Beyaza Bf4 ile baskı imkânı verir.',
      diger: [
        { move: '9...Bb7', text: 'Gelişime devam eder; 10.e5 ile Beyaz yine alan alır (Motor: +0.8).' },
        { move: '9...d6', text: 'Sağlam görünür ama d6 piyonu Bf4 ile baskıya uğrar (Motor: +1.1).' },
      ],
    },
    '10w': {
      text: '10.e5!: Beyaz piyonu e5’e sürer ve d6 filine saldırır. Teoride yeni bir hamle.',
      amac: 'Merkezde alan almak, Siyahın …Nf6 ile gelişmesini önlemek ve fili kovalayıp b8-h2 çaprazını kapatmak.',
      neden: 'Grischuk bu hamleye 20 dakikadan fazla harcadı (The Week in Chess). TWIC’e göre burada ana hat 10.Qe2; ChessBase 10.e5’i “yeni ve güçlü” buluyor. Piyon f3 atı, Re1 ve ardından Bf4 ile tutulacak. Motor da 10.e5’i en iyi bulur (+0.8).',
      diger: [
        { move: '10.Qe2', text: 'Teorinin ana hattı; Beyaz e5’i bir hamle daha hazırlar (Motor: +0.7).' },
        { move: '10.a4', text: '…b5 piyonunu sorgular; 10...b4 11.Nb1 ile at kenara gider (Motor: +0.5).' },
      ],
    },
    '10b': {
      text: '10...Bc7: fil c7’ye çekilir ve b8-h2 çaprazında kalır.',
      amac: 'e5 piyonuna baskıyı sürdürmek; …Nge7-g6 ile e5’i üçüncü kez hedeflemek.',
      neden: 'Svidler hızlı oynadı; ChessBase bunu hamlenin hazırlıklı olduğuna işaret diye yorumluyor. 10...Nxe5 11.Nxe5 Bxe5 12.Rxe5 Qxe5 13.Qf3 ile piyon alınabilirdi; ChessBase bu hattın vezir için “neredeyse ölümcül” bir kovalamaca getirebileceğini yazıyor. Motor 13...d5! ile Siyahın dayanabileceğini görür (+0.8), ama pratikte çok tehlikelidir.',
      diger: [
        { move: '10...Nxe5', text: '11.Nxe5 Bxe5 12.Rxe5 Qxe5 13.Qf3 d5 14.Bf4 Qd4: Siyah kalite ve piyon kazanır ama gelişimi geride kalır ve vezir kovalanır (Motor: +0.8).' },
        { move: '10...Bf8', text: 'Fil geriye döner ama Siyah çok geride kalır; 11.Ne4 güçlü (Motor: +1.7).' },
      ],
    },
    '11w': {
      text: '11.Bf4: fil e5 piyonunu korur.',
      amac: 'e5’i taşlarla sağlamlaştırmak ve fili b8-h2 çaprazına koyup Siyahın bataryasını nötrleştirmek.',
      neden: 'e5’e Bc7, Qb8 ve Nc6 bakıyor; Beyazın ikinci koruyucusu şarttır. Motor en iyi hamle olarak bunu görür (+1.0).',
      diger: [
        { move: '11.Be4', text: 'Fil b7’ye bakan çaprazı tutar; e5 bir an zayıf kalır (Motor: +0.8).' },
        { move: '11.Qe2', text: 'Vezir e5’i destekler; 11...f5 ile Siyah merkezi kırar (Motor: +0.7).' },
      ],
    },
    '11b': {
      text: '11...Nge7: at e7’ye gelir; g6 ya da d5’e gidecek.',
      amac: '…Ng6 ile f4 filine ve e5 piyonuna saldırmak; şah kanadını geliştirip rok hazırlamak.',
      neden: 'f6 karesi e5 piyonuyla kapalı olduğu için at e7 üzerinden gelişmek zorundadır. Motor 11...Bb7’yi (+0.85) biraz daha iyi görür.',
      diger: [
        { move: '11...Bb7', text: 'Önce fil; uzun çaprazdan f3’e baskı (Motor: +0.85).' },
        { move: '11...b4', text: '12.Ne4 Nxe5 sonrası at merkeze sıçrar (Motor: +1.05).' },
      ],
    },
    '12w': {
      text: '12.Qe2: vezir e5’i korur ve e-hattında kaleyle birleşir.',
      amac: 'e5 piyonunu üçüncü kez korumak; vezir kanadındaki kaleyi d1’e getirmeye yer açmak.',
      neden: 'Beyaz e5’i bırakırsa Siyahın taşları rahatlar. Motor 12.Qe2’yi en iyi görür (+0.9).',
      diger: [
        { move: '12.Be4', text: 'Filleri değişmeye hazırlanır (Motor: +0.8).' },
        { move: '12.Bg3', text: '…Ng6’dan önce fili güvenli kareye çeker (Motor: +0.75).' },
      ],
    },
    '12b': {
      text: '12...Ng6: at f4 filine ve e5 piyonuna saldırır.',
      amac: 'e5’e üçüncü saldırıyı eklemek ve f4 filini kovalamak.',
      neden: 'At g6’da e5 ve f4’e bakar ama şah kanadında Bxg6 ile değişilebilir. Motor 12...h6, 12...Bb7 ve 12...Nb4’ü (+0.8) biraz daha iyi görür; Svidler’in maç sonrası “pozisyonum ciddi şekilde kötüydü” sözü bu dönemin sorunlarını anlatır.',
      diger: [
        { move: '12...Bb7', text: 'Önce gelişim, …Nb4 ile d3 filini değişme fikri (Motor: +0.8).' },
        { move: '12...Nb4', text: 'd3 filini değişmeye gider; 13.Be4 ile Beyaz fili korur (Motor: +0.8).' },
      ],
    },
    '13w': {
      text: '13.Bg3: fil g3’e çekilir ve e5’i korumaya devam eder.',
      amac: 'Filin e5’i desteklemesini sürdürmek ve Siyahın ...Nxf4 ile filleri değişmesini önlemek.',
      neden: '13.Bxg6 fxg6 Siyaha f-hattını açar ve yapıyı düzeltir (Motor: +0.8); Bg3 en iyisi (+1.2).',
      diger: [
        { move: '13.Bxg6', text: '13...fxg6 sonrası Siyahın f-hattı açılır, e5 zayıflar (Motor: +0.8).' },
        { move: '13.g3?', text: 'Şah kanadını zayıflatır; 13...O-O ile eşitlik (Motor: −0.2).' },
      ],
    },
    '13b': {
      text: '13...Bb7: fil uzun çapraza çıkar ve f3 atına bakar.',
      amac: 'Son küçük taşı geliştirmek, e4 karesini kontrol etmek ve f3’teki e5 koruyucusuna baskı yapmak.',
      neden: 'Siyah rok yapmadan önce gelişimini tamamlamak ister. Motor 13...O-O’yu (+1.0) biraz daha iyi görür; 13...Bb7 +1.2.',
      diger: [
        { move: '13...O-O', text: 'Önce rok; 14.Rad1 ile d7 baskı altına girer (Motor: +1.0).' },
        { move: '13...Ra7', text: 'Kaleyi yedinci yataya getirip d7’yi korur (Motor: +1.1).' },
      ],
    },
    '14w': {
      text: '14.Rad1: kale d-hattına gelir ve d7 piyonuna bakar.',
      amac: 'Siyahın rokunu zorlaştırmak: rok yaparsa d7 korumasız kalır, yapmazsa şah merkezde kalır.',
      neden: 'd7 şu an yalnızca e8’deki şahla korunuyor; d-hattı açık olduğu için kale burada çok güçlü. Motor 14.h4’ü (+1.2) ve 14.Rad1’i (+1.1) neredeyse eşit görür; The Week in Chess de 14.h4 b4 15.Na4 fikrini anıyor.',
      diger: [
        { move: '14.h4', text: 'h-piyonunu g6 atına karşı sürer; 14...b4 15.Na4 (Motor: +1.2).' },
        { move: '14.Be4', text: 'Hemen fil değişimi; 14...b4 ile Siyah süre kazanır (Motor: +0.7).' },
      ],
    },
    '14b': {
      text: '14...Nce7: at c6’dan e7’ye geçer; d5 ya da f5’e gidecek.',
      amac: 'Atı d5 karesine getirip merkezi tutmak ve c3 atını değişmek; b7 filinin çaprazını açmak.',
      neden: 'c6’daki at b7 filinin çaprazını kapatıyordu. 14...O-O? 15.Bxg6 fxg6 16.Rxd7 ile piyon düşer (Motor: +1.4). Motor 14...Nb4’ü (+1.1) biraz daha iyi görür.',
      diger: [
        { move: '14...Nb4', text: 'd3 filini değişmeye gider (Motor: +1.1).' },
        { move: '14...O-O', text: '15.Bxg6 fxg6 16.Rxd7 ile Beyaz piyon kazanır (Motor: +1.4).' },
      ],
    },
    '15w': {
      text: '15.Be4: fil e4’e gelir ve b7 filine değiş teklif eder.',
      amac: 'Siyahın en iyi savunma taşı olan b7 filini değişmek; e4 karesine atı getirmek.',
      neden: 'Değişimden sonra at e4’ten d6, c5 ve f6 karelerine bakar. Motor 15.h4 ve 15.Ne4’ü (+1.1) daha iyi görür; 15.Be4 +0.8 ile Beyazın avantajının bir kısmını verir.',
      diger: [
        { move: '15.h4', text: 'g6 atını kovalamaya hazırlanır; 15...Bxf3 16.Qxf3 (Motor: +1.1).' },
        { move: '15.Ne4', text: 'At hemen d6’ya bakar; 15...Nd5 16.h4 (Motor: +1.0).' },
      ],
    },
    '15b': {
      text: '15...Bxe4: Siyah filleri değişir.',
      amac: 'Beyazın aktif filini oyundan çıkarmak ve şah kanadındaki baskıyı azaltmak.',
      neden: 'Değişmezse Beyaz Bxb7 ile kuvvetli vezir kanadı yapısı kurar. Motor 15...Bxe4 ve 15...O-O’yu eşit görür (+0.6).',
      diger: [
        { move: '15...O-O', text: '16.Rxd7 ile Beyaz piyonu hemen alır; Siyah filleri sonra değişir (Motor: +0.6).' },
        { move: '15...b4', text: '16.Bxb7 Qxb7 17.Ne4 (Motor: +0.7).' },
      ],
    },
    '16w': {
      text: '16.Nxe4: at geri alır ve e4’e yerleşir.',
      amac: 'Atı d6, c5 ve f6 karelerine yönlendirmek; d-hattında d7’ye baskıyı sürdürmek.',
      neden: '16.Qxe4 de mümkündü ama at e4’te çok daha aktif. Motor 16.Nxe4’ü en iyi görür (+0.6).',
      diger: [
        { move: '16.Qxe4', text: 'Vezir merkezde; 16...Nf5 ile Siyah rahatlar (Motor: +0.4).' },
      ],
    },
    '16b': {
      text: '16...O-O: Siyah rok yapar ve d7 piyonunu bırakır.',
      amac: 'Gelişimi tamamlamak ve şahı güvene almak; d7’ye giren kaleyi …Nd5-b6 ile kovalayıp süre kazanmak.',
      neden: 'Şah e8’deyken d7’yi koruyordu; rok yapınca piyon düşer. ChessBase hamleyi “cesur, Grischuk’u almaya davet ediyor” diye niteliyor; FIDE raporuna göre Svidler pozisyonunu çok tehlikeli bulmuştu. Motor: 16...O-O +0.6, 16...h6 ve 16...Nf5 +0.7; yani Siyah zaten zor durumda.',
      diger: [
        { move: '16...h6', text: 'Şah merkezde kalır; 17.h4 ile Beyaz şah kanadında da ilerler (Motor: +0.7).' },
        { move: '16...Nf5', text: '17.c3 h6 18.h4 ile Beyaz baskısını korur (Motor: +0.75).' },
      ],
    },
    '17w': {
      text: '17.Rxd7: kale d7 piyonunu alır ve yedinci yataya girer.',
      amac: 'Bir piyon kazanmak ve kaleyi c7 filine, f7’ye bakan yedinci yatayda aktif tutmak.',
      neden: 'ChessBase’e göre Beyazın gerçek bir alternatifi yoktu; TWIC “Beyaz daha iyi ama Siyahın karşı oyunu var” diyor. Motor 17.Rxd7’yi en iyi görür (+0.6); 17.Nc5 (+0.5) daha yavaş.',
      diger: [
        { move: '17.Nc5', text: 'Atla d7’ye ve a6’ya baskı; 17...Rd8 ile Siyah d-hattını kapatır (Motor: +0.5).' },
        { move: '17.h4', text: 'g6 atına karşı; d7 kaçmaz (Motor: +0.5).' },
      ],
    },
    '17b': {
      text: '17...Nd5: at merkeze gelir.',
      amac: '…Nb6 ile d7 kalesine saldırmak ve f4/c3 karelerine bakmak.',
      neden: 'Kale d7’de güçlü; Siyahın en hızlı karşı oyunu atla onu kovalamaktır. 17...Nf5 ya da 17...h6 Beyaza 18.Nf6+ gibi tehlikeli imkânlar verir (Motor: +1.1/+1.3). Nd5 en iyisi (+0.6).',
      diger: [
        { move: '17...Nf5', text: '18.h4 ile Beyaz şah kanadında baskı kurar (Motor: +1.1).' },
        { move: '17...h6', text: '18.Nf6+! gxf6 19.exf6 ile şah açılır (Motor: +1.3).' },
      ],
    },
    '18w': {
      text: '18.Nd6?: at d6’ya gelir; f7’ye ve b5’e bakar ama d-hattını kapatır.',
      amac: 'Atı en güçlü karesine koyup c7 filini ve f7’yi baskı altına almak.',
      neden: 'Grischuk 18...Nb6’yı gözden kaçırdı: at d-hattını tıkadığı için d7’deki kalenin dönüş yolu kalmaz. TWIC’e göre 17. ve 18. hamlelere yaklaşık 17 dakika harcadı ve saatinde 7 dakika kaldı; maç sonrası hamleyi “birçok kitapta anlatılan klasik bir hata” diye tanımladı. ChessBase: “Avantajı koruma şansını atan bir hata.” Motor kaybı küçük görür (+0.6’dan +0.4’e), çünkü 19.Rxc7 ile oyun dengede kalır.',
      diger: [
        { move: '18.Qd2', text: 'TWIC’in önerisi: 18...Qc8 19.Rxd5 exd5 20.Nd6 Bxd6 21.exd6 ile kalite fedası; Beyaz baskıyı korur (Motor: +0.6).' },
        { move: '18.Qd3', text: 'ChessBase: 18...Qb7 19.Nc3 Rfd8 20.Rxd8+ Rxd8 21.Nxd5 Rxd5 22.Qe4 ile Beyaz piyon fazlasını korur (Motor: +0.45).' },
        { move: '18.Nc3', text: 'TWIC’e göre hesaplaması en kolay yol: 18...Nxc3 19.bxc3 ile kale d-hattından geri döner (Motor: 0.0).' },
      ],
    },
    '18b': {
      text: '18...Nb6!: at d7 kalesine saldırır.',
      amac: 'Kaleyi kapana kıstırmak: d-hattı d6 atıyla kapalı, d8 ise vezir ve kaleyle kontrol ediliyor.',
      neden: 'Kalenin tek çıkışı bir taşa karşılık verilmesidir (Rxc7 ya da Rxf7). 18...Bxd6 ya da 18...Qb6 Beyazı rahatlatır (Motor: +0.9). 18...Nb6 en iyi (+0.3).',
      diger: [
        { move: '18...Bxd6', text: '19.Rxd6 ile kale kurtulur, e5-d6 baskısı sürer (Motor: +0.9).' },
        { move: '18...Qb6', text: '19.h4 ile Beyaz hem kaleyi hem şah kanadı baskısını korur (Motor: +0.9).' },
      ],
    },
    '19w': {
      text: '19.Rxf7: Beyaz kaleyi f7 piyonuna verir.',
      amac: 'Kaleyi “boşa” vermek yerine Siyahın şah kalesini açmak; 20.Nxf7 Kxf7 21.Ng5+ ile e6 piyonunu da toplamak.',
      neden: 'Sonuçta Beyaz bir taş karşılığında üç piyon (d7, f7, e6) ve açık Siyah şahı alacak. 19.Rxc7 Qxc7 ise kalite (kale-fil) karşılığında bir piyon ve d6’daki güçlü at bırakır; motor bunu biraz daha iyi görür (+0.3’e karşı 0.0). Grischuk dinamik yolu seçti ama saatte zaman kalmamıştı.',
      diger: [
        { move: '19.Rxc7', text: '19...Qxc7 20.h4 h6 21.Nd4: Beyaz kalite eksiğine karşı piyon ve d6 atıyla dengede (Motor: +0.3).' },
        { move: '19.Nxf7?', text: '19...Nxd7 ile kale düşer ve Beyaz telafisiz kalır (Motor: −3.0).' },
      ],
    },
    '19b': {
      text: '19...Rxf7: Siyah kaleyi alır.',
      amac: 'Fazla malzemeyi almak ve f-hattında kaleyi geçici olarak f7’ye koymak.',
      neden: 'Alınmazsa Beyaz Rxf8+ ile kaleyi değişir ve piyon fazlasıyla kalır (19...Qa7? 20.Rxf8+ Motor: +4.1). 19...Bxd6 20.Rxg7+ Kxg7 21.exd6 de eşit (−0.1); Svidler en net yolu seçti.',
      diger: [
        { move: '19...Bxd6', text: '20.Rxg7+ Kxg7 21.exd6 Qb7: Siyahın şahı açık ama taş fazlası var (Motor: −0.1).' },
      ],
    },
    '20w': {
      text: '20.Nxf7: at f7 kalesini alır.',
      amac: 'Malzemeyi geri almak; at f7’de alınacak, ama Siyah şahı f7’ye çekilip Ng5+ ile şah çekilmeye açık kalır.',
      neden: 'Zorunlu: başka hamlede Beyaz bir kale eksik kalır (20.Ng5? Motor: −2.7).',
    },
    '20b': {
      text: '20...Kxf7: şah atı alır.',
      amac: 'Taş fazlasını kesinleştirmek: Siyahın bir taşı (at) fazla, Beyazın iki piyonu (d7, f7) var.',
      neden: 'Zorunlu: 20...Qe8 ya da 20...Qf8 gibi hamleler atın d6’ya dönmesine izin verir ve Siyah kaliteyle birlikte piyonları da kaybeder (Motor: +3.9).',
    },
    '21w': {
      text: '21.Ng5+: at şah çekerek e6 piyonuna saldırır.',
      amac: 'e6 piyonunu alıp üçüncü piyonu kazanmak ve atı e6’da güçlü bir merkez karesine koymak.',
      neden: 'Bu şahla Beyaz tempo kazanır; şahın kaçtığı kareye göre Qf3+ ya da Nxh7 ihtimalleri doğar. Motor tek iyi hamle olarak bunu görür (−0.3); 21.a4 ya da 21.c4 çok yavaş (−1.6).',
      diger: [
        { move: '21.a4', text: 'Vezir kanadında oyun; Siyah 21...Qe8 ile sağlamlaşır (Motor: −1.6).' },
      ],
    },
    '21b': {
      text: '21...Kg8!: şah g8’e döner. Tek hamle.',
      amac: 'Şahı f-hattından ve Qf3+ şahından uzaklaştırmak; h7 piyonunu korumak.',
      neden: '21...Kf8? 22.Qf3+ Kg8 23.Qf7+ Kh8 24.Nxe6 ile Beyaz kazanır (Motor: +4.6). 21...Ke7 22.Nxh7 de kötü (ChessBase bu hattı veriyor; Motor: +0.8). Kg8’de şah f7 ve h7’yi korur.',
      diger: [
        { move: '21...Kf8?', text: '22.Qf3+ Kg8 23.Qf7+ Kh8 24.Nxe6 Qg8 25.Qxg8+ Kxg8 26.Nxc7 ile Beyaz kazanır (Motor: +4.6).' },
        { move: '21...Ke7', text: '22.Nxh7 ile Beyaz dördüncü piyonu alır, şah merkezde kalır (Motor: +0.8).' },
      ],
    },
    '22w': {
      text: '22.Nxe6: at e6 piyonunu alır; c7 filine, g7’ye ve f8’e bakar.',
      amac: 'Üçüncü piyonu kazanmak ve atı Siyahın kampının ortasına yerleştirmek.',
      neden: 'Artık bir taş karşılığında üç piyon var ve at e6’da çok güçlü. Motor 22.Nxe6 ile 22.Qg4’ü eşit görür (−0.25). TWIC’e göre bu noktada Beyazın 2 dakika 44 saniyesi, Siyahın 24 dakikası vardı; pozisyon değil saat sorundu.',
      diger: [
        { move: '22.Qg4', text: 'Önce vezir; 22...Qc8 23.Nxe6 ile aynı pozisyon (Motor: −0.25).' },
        { move: '22.Qh5', text: '22...Nf8 23.Qf7+ Kh8 24.Nxe6 ile at değişilir (Motor: −0.8).' },
      ],
    },
    '22b': {
      text: '22...Qc8: vezir e6 atına saldırır.',
      amac: 'Atı vezir kanadından çekilmeye ya da Beyazın vezirini korumaya zorlamak; veziri c-hattına getirmek.',
      neden: 'At e6’da hem c7 filine hem g7’ye saldırıyor; Siyah tempo kazanarak saldırmalı. Motor 22...Qc8’i en iyi görür (−0.4); 22...Qb7 ve 22...Qa7 eşitliğe izin verir (0.0).',
      diger: [
        { move: '22...Qb7', text: '23.f4 ile Beyaz e5’i destekleyip baskıyı korur (Motor: 0.0).' },
        { move: '22...Qa7', text: '23.Qh5 ile vezir şah kanadına geçer (Motor: 0.0).' },
      ],
    },
    '23w': {
      text: '23.Qg4: vezir e6 atını korur ve g6 atına, g7’ye bakar.',
      amac: 'Atı merkezde tutmak ve Siyahın şah kanadına baskıyı sürdürmek.',
      neden: 'Atı geri çekmek (23.Nd4) ya da 23.Nxc7 değişmek Beyazın en aktif taşını verir (Motor: −0.7). TWIC’e göre Grischuk bu hamleye iki dakikadan fazla harcadı ve 27 saniyeyle kaldı. Motor en iyi hamle olarak bunu görür (−0.5).',
      diger: [
        { move: '23.Nxc7', text: '23...Qxc7 24.e6 ile piyon ilerler ama Siyahın taşı daha fazla (Motor: −0.7).' },
        { move: '23.Nd4', text: 'At geri çekilir; 23...Ne7 ile Siyah toparlanır (Motor: −0.7).' },
      ],
    },
    '23b': {
      text: '23...Ra7!: kale c7 filini korur.',
      amac: 'c7’deki fili sağlamlaştırıp Beyazın Nxc7 değişimini anlamsız kılmak; kaleyi yedinci yatayda f7/e7’ye geçmeye hazır tutmak.',
      neden: 'Svidler TWIC’e göre bu hamle için 7-8 dakika düşündü. 23...Qd7 24.Rd1 ile Beyaz d-hattını alır (Motor: −0.1); 23...Ra7 en iyi (−0.4). Siyah önce taşlarını koruyup sonra karşı saldırıya geçecek.',
      diger: [
        { move: '23...Qd7', text: '24.Rd1 Qe7 25.f4 ile Beyaz d-hattını ve merkezi alır (Motor: −0.1).' },
        { move: '23...Nc4', text: '24.b3 Ba5 25.Rd1 ile at kovalanır (Motor: 0.0).' },
      ],
    },
    '24w': {
      text: '24.Rd1?!: kale d-hattına geçer.',
      amac: 'Kaleyi açık d-hattından d6-d7’ye sokmak ve Siyahın birinci yatayına baskı yapmak.',
      neden: 'Saatte 3 saniye kala oynandı (TWIC). Kale e1’den ayrılınca Beyazın vezir kanadı ve arka yatayı zayıflar; ...Na4 sonrası b2 rahat korunamaz. TWIC 24.b3’ü önerir; ChessBase 24.h3!? fikrini verir: piyon g4 vezirini korur, böylece e6 atı gerektiğinde yerinden ayrılabilir. Motor: 24.h3 −0.5, 24.Rd1 −1.2.',
      diger: [
        { move: '24.h3', text: 'ChessBase: 24...Na4 25.Nxc7 Qxg4 26.hxg4 Rxc7 27.e6 ile Beyaz dengede (Motor: −0.5).' },
        { move: '24.b3', text: 'TWIC’in önerisi: b2’yi önceden korur; 24...Bb8 25.Rd1 (Motor: −1.2).' },
        { move: '24.f4', text: 'ChessBase: 24...Bxe5 ile Siyah e5’i alır (Motor: −1.1).' },
      ],
    },
    '24b': {
      text: '24...Na4!: at b2 piyonuna yönelir.',
      amac: 'Fazla atı Beyazın korumasız vezir kanadına sokmak: …Nxb2 ile d1 kalesine saldırmak.',
      neden: 'TWIC bu hamleyi “mükemmel” buluyor; Svidler iki dakika düşündü. Beyaz 25.b3 oynarsa at c5’e gelip e6 atına saldırır. Motor: 24...Na4 −1.4, 24...Nc4 0.0.',
      diger: [
        { move: '24...Nc4', text: '25.b3 Ba5 26.bxc4 ile at değişilir ve Beyaz rahatlar (Motor: 0.0).' },
        { move: '24...Nd7', text: 'At savunmaya döner ama 25.Ng5 ile Beyaz baskısını sürdürür (Motor: +0.4).' },
      ],
    },
    '25w': {
      text: '25.h3?: şaha kaçış karesi açılır.',
      amac: 'Arka yatay matı tehlikesini ortadan kaldırmak ve veziri şah korumasından serbest bırakmak.',
      neden: 'ChessBase “çirkin olsa da” 25.b3’ü öneriyor (25...Nc5 26.Qd4 Qxe6 27.Qxc5); TWIC de 25.b3’ün “nesnel olarak çok daha iyi” olduğunu yazıyor. h3 b2 piyonunu ve d1 kalesini …Nxb2’ye açık bırakır. Motor: 25.Qd4 −1.3, 25.b3 −1.5, 25.h3 −1.7.',
      diger: [
        { move: '25.b3', text: '25...Nc5 26.Qd4 Qxe6 27.Qxc5 Bb6: Siyahın taşı fazla ama Beyaz piyonlarını korur (Motor: −1.5).' },
        { move: '25.Qd4', text: 'Vezir merkezde b2’yi ve d-hattını tutar; 25...Bb6 26.Qd6 (Motor: −1.3).' },
      ],
    },
    '25b': {
      text: '25...Nxb2!: at b2 piyonunu alır ve d1 kalesine saldırır.',
      amac: 'Malzeme farkını büyütmek (bir taşa karşı iki piyon) ve Beyazın kalesini tempo kaybettirerek kovalamak.',
      neden: 'b2 piyonunu kimse korumuyor; at d1’e de saldırdığı için Beyaz geri alamaz. Motor bu hamleyi çok güçlü buluyor (−1.9); 25...Bb6 ya da 25...Ba5 eşitlik getirir (0.0).',
      diger: [
        { move: '25...Bb6', text: '26.Rd6 Re7 27.Qf5 ile Beyaz denge kurar (Motor: −0.1).' },
        { move: '25...Ba5', text: '26.Rd6 Re7 27.Qf5 Bc7 (Motor: 0.0).' },
      ],
    },
    '26w': {
      text: '26.Rd5??: kale d5’e çekilir.',
      amac: 'Kaleyi aktif tutmak ve d-hattında kalmak.',
      neden: 'ChessBase bu hamleye ?? veriyor: “Grischuk çöküyor ve oyun bitiyor.” Kale d5’te e6 atını korumaz ve 26...Bb6 sonrası …Re7 ile e6 düşer. TWIC’in önerisi 26.Nxc7 Rxc7 27.Rd6: at fili alır, kale aktif kalır (Motor: −2.1, 26.Rd5 −3.1).',
      diger: [
        { move: '26.Nxc7', text: '26...Rxc7 27.Rd6 Nc4 28.Qxc8+: at fil için verilir, kale aktif kalır (Motor: −2.1).' },
        { move: '26.Rb1', text: 'Kale b-hattında atı kovalar; 26...Bxe5 ile Siyah piyon alır (Motor: −2.6).' },
      ],
    },
    '26b': {
      text: '26...Bb6!: fil a7-g1 çaprazına geçer ve f2’ye bakar.',
      amac: 'Fili Nxc7 değişiminden kurtarmak, f2’yi hedef almak ve …Re7 ile e6 atına saldırmak.',
      neden: 'c7’de fil Beyazın atıyla değişilebilirdi; b6’da hem güvende hem aktif. Motor: 26...Bb6 −3.1, 26...Ba5 −1.6; 26...Nc4? 27.Rc5 ile fırsat kaçar (+0.1).',
      diger: [
        { move: '26...Ba5', text: '27.Qd4 Re7 28.Nxg7 ile Beyaz karşı oyun kurar (Motor: −1.6).' },
        { move: '26...Nc4?', text: '27.Rc5 Nb6 ile at geri döner, üstünlük kaybolur (Motor: +0.1).' },
      ],
    },
    '27w': {
      text: '27.Rd6: kale b6 filine saldırır.',
      amac: 'Fili b6’dan uzaklaştırmak ve kaleyi aktif tutup e6 atını desteklemek.',
      neden: 'TWIC’e göre 2 saniye kala oynandı. Kale d6’da kendi başına korunmuyor; …Nc4 ile at hem fili korur hem kaleye saldırır. Motor: 27.a4 −3.0, 27.Kh2 −3.3, 27.Rd6 −3.8.',
      diger: [
        { move: '27.a4', text: '27...Re7 28.Qb4 Rxe6 29.Qxb2 ile Beyaz atı geri alır ama bir taş eksik (Motor: −3.0).' },
        { move: '27.Kh2', text: '27...Nc4 28.Nd8 Qxg4 29.hxg4 ile vezirler değişir, Siyah fazla taşla (Motor: −3.3).' },
      ],
    },
    '27b': {
      text: '27...Nc4!: at c4’e döner; b6 filini korur, d6 kalesine ve e5 piyonuna saldırır.',
      amac: 'b2’de kenarda kalan atı merkeze getirip iki hedefe birden saldırmak.',
      neden: 'Kale d6’dan çekilirse e5 düşer; Rxb6 ise kaleyi atla değişir. 27...Re7 28.Rxb6 Nc4 29.Nxg7 ile Beyaz karşı oyun bulur (Motor: −2.2). Motor: 27...Nc4 −3.9.',
      diger: [
        { move: '27...Re7', text: '28.Rxb6! Nc4 29.Nxg7 Qxg4 ile Beyaz kurtulur (Motor: −2.2).' },
        { move: '27...Nf8', text: '28.Nxf8 Qxg4 29.hxg4 Nc4 ile Siyah üstün ama daha az (Motor: −1.3).' },
      ],
    },
    '28w': {
      text: '28.Qf5: vezir f5’e gelir; f-hattına ve c8 veziriyle değişime bakar.',
      amac: 'Vezir değişimiyle ya da f7’ye baskıyla karşı oyun bulmak.',
      neden: 'TWIC’e göre 2 saniye kala oynandı. Motor 28.Rxb6 Nxb6 ya da 28.Qe4’ü (−4.3) daha iyi görür; Qf5 sonrası 28...Re7! e6 atına saldırırdı (−5.1).',
      diger: [
        { move: '28.Rxb6', text: '28...Nxb6 29.f4 Nf8: Beyaz kaleyi file verir; Siyahın kalesi ve iki atı Beyazın fil, at ve altı piyonuna karşı (Motor: −4.3).' },
        { move: '28.Qe4', text: '28...Nxd6 29.exd6 Qc4: oyundaki konuma bir hamle önce ulaşılır (Motor: −4.3).' },
      ],
    },
    '28b': {
      text: '28...Rf7: kale f5 vezirine saldırır.',
      amac: 'Veziri tempo kazanarak kovalamak ve sonra d6 kalesini almak.',
      neden: 'Güvenli ve net: vezir e4’e çekilince 29...Nxd6 ile kalite kazanılır. Motor 28...Re7 ve 28...Nxd6’yı (−5.1/−5.2) daha güçlü görür; Re7 aynı anda e6 atına saldırır. Ama 28...Rf7 de kazanır (−4.2).',
      diger: [
        { move: '28...Re7', text: '29.Qxc4 Qxc4 30.Rxb6 Rxe6 ile Siyah fazla taşla kalır (Motor: −5.2).' },
        { move: '28...Nxd6', text: '29.exd6 Nf8 ile at e6’ya saldırır (Motor: −5.1).' },
      ],
    },
    '29w': {
      text: '29.Qe4: vezir e4’e çekilir ve e6 atını korur.',
      amac: 'e6 atını tutmak ve büyük çaprazdan a8’e bakmak.',
      neden: 'Vezir başka kareye giderse e6 atı ya da e5 piyonu düşer: 29.Qg4 Nxd6 30.exd6 Nf8 (Motor: −5.2), 29.Qd3 Nxd6 (−4.6). Motor en iyi olarak Qe4’ü görür (−3.9).',
      diger: [
        { move: '29.Qd3', text: '29...Nxd6 30.Qxd6 Re7 ile e6 atı düşer (Motor: −4.6).' },
        { move: '29.Qg4', text: '29...Nxd6 30.exd6 Nf8 (Motor: −5.2).' },
      ],
    },
    '29b': {
      text: '29...Nxd6: at kaleyi alır.',
      amac: 'Kalite kazanmak: artık Siyahın kalesi, fili ve atı Beyazın fil, at ve piyonlarına karşı.',
      neden: 'En net yol; 29...Qe8 ya da 29...Ne7 kalenin kaçmasına izin verir (Motor: −3.3/−3.0). Motor 29...Nxd6’yı en iyi görür (−4.2).',
      diger: [
        { move: '29...Qe8', text: '30.Qd5 Nxd6 31.exd6 ile Beyaz biraz daha aktif (Motor: −3.3).' },
      ],
    },
    '30w': {
      text: '30.exd6: piyonla geri alır.',
      amac: 'Malzemeyi kısmen geri almak; d6 piyonu ileride d7’ye gitmeyi tehdit eder.',
      neden: 'Zorunlu sayılır: 30.Qd5 ya da 30.Qg4 at sıçramasıyla daha fazla malzeme kaybeder (Motor: −6.4/−6.7).',
    },
    '30b': {
      text: '30...Nf8!: at f8’e çekilir ve vezirle birlikte e6 atına saldırır.',
      amac: 'Beyazın son aktif taşını kovalamak ve d7 karesini kontrol ederek d6 piyonunu durdurmak.',
      neden: 'TWIC bu hamleyi “son umudu söndüren isabetli bir hamle” diye niteliyor. e6 atı c7’ye kaçabilir, ama orada kenarda kalır; Siyahın iki piyona karşı bir kale fazlası ve aktif taşları var. Motor 30...Qc4’ü (−4.5) bir parça daha iyi görür; 30...Nf8 −4.2. Saniyelerle oynayan Grischuk burada terk etti.',
      diger: [
        { move: '30...Qc4', text: '31.Qe1 Nf8 32.Nc7: vezir önce aktifleşir, sonra at gelir (Motor: −4.5).' },
        { move: '30...Qb7', text: 'Veziri değiştirmeyi önerir; 31.Qd3 Qc8 ile benzer (Motor: −3.8).' },
      ],
    },
  },
  qa: [
    { q: 'Siyah neden 6...Qb6 ve 8...Qb8 ile veziriyle üç hamle oynadı?', a: '6...Qb6 d4 atını kovaladı; at f3’e çekilince vezir b8’e geçip …Bd6 ile b8-h2 çaprazında batarya kurdu. Amaç e5 ilerleyişini önlemek ve h2’ye baskıydı. Bedeli gelişim gecikmesiydi: chess.com raporu bu kuruluşu “hantal” bulur, motor da 8...Bb7’yi (+0.5) 8...Qb8’den (+0.8) biraz iyi görür. Grischuk 10.e5 ile tam bu gecikmeyi cezalandırdı.' },
    { q: '10.e5 neden güçlüydü?', a: 'e5 piyonu f6 karesini kapattı (…Nf6 artık mümkün değil), d6 filini kovaladı ve b8-h2 çaprazını kesti. Beyazın taşları (Nf3, Re1, Bf4, Qe2) piyonu rahatça korudu. 10...Nxe5 ile piyon almak 11.Nxe5 Bxe5 12.Rxe5 Qxe5 13.Qf3 sonrası Siyahın vezirini kovalanmaya açardı. ChessBase hamleyi “yeni ve güçlü” buluyor, motor da en iyi görür (+0.8).' },
    { q: 'Svidler neden 16...O-O ile d7 piyonunu verdi?', a: 'Şah e8’de kalırsa Beyaz h4-h5 ve d-hattı baskısıyla saldırmaya devam edecekti. Rok yapınca piyon gitti ama …Nd5-b6 ile d7’deki kaleyi kovalama imkânı doğdu. Motor alternatifleri de benzer görüyor (16...h6, 16...Nf5 +0.7), yani Siyah zaten zor durumdaydı ve en pratik yolu seçti.' },
    { q: '18.Nd6 neden “klasik hata” sayılıyor?', a: 'At d6’ya geldiğinde d-hattını kapattı ve d7’deki kalenin geri dönüş yolunu kendi taşıyla tıkadı. 18...Nb6 kaleye saldırınca kale kaçamadı: d8 kontrol altındaydı, d-hattı kapalıydı. Grischuk bunu kitaplardaki klasik hatalara benzetti. 18.Qd2 ya da 18.Qd3 ile Beyaz küçük avantajını korurdu (Motor: +0.6/+0.45).' },
    { q: 'Bir taş karşılığında üç piyon Beyaza yeterli miydi?', a: '22.Nxe6’dan sonra motor pozisyonu yaklaşık eşit görüyor (−0.25): e6’daki güçlü at, e5 piyonu ve açık Siyah şahı telafi sağlıyordu. Sorun saatti: TWIC’e göre Beyazın 2 dakika 44 saniyesi, Siyahın 24 dakikası vardı. Grischuk da “Kaleyi kaptırdıktan sonra fena olmayan bir pozisyon buldum, ama yine kaybettim” dedi.' },
    { q: 'Svidler fazla taşını nasıl işe kattı?', a: 'Önce 23...Ra7 ile c7 filini koruyup Beyazın Nxc7 değişimini anlamsız kıldı. Sonra 24...Na4! ve 25...Nxb2 ile atı korumasız vezir kanadına soktu ve d1 kalesini kovaladı. 26...Bb6 ile fili aktif çapraza koydu ve 27...Nc4 ile at hem fili korudu hem d6 kalesine saldırdı.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: '24. hamlede 24.h3 (Motor: −0.5) ya da 25. hamlede 25.b3 / 25.Qd4 (−1.5/−1.3) ile vezir kanadını koruyarak. Hatta 26.Nxc7 Rxc7 27.Rd6 ile (−2.1) direniş sürerdi. 26.Rd5?? sonrası 26...Bb6 ve …Re7 ile e6 atı korunamaz hale geldi ve oyun bitti.' },
    { q: 'Siyah nerede daha iyi oynayabilirdi?', a: 'Açılışta 8...Bb7 ya da 12...Bb7 daha doğal ve motorun tercihiydi; Svidler’in kendisi de pozisyonunun bir ara “ciddi şekilde kötü” olduğunu söyledi. Oyunun sonunda 28...Re7 ya da 28...Nxd6 (−5.1/−5.2) 28...Rf7’den daha güçlüydü, ama bu sonucu değiştirmedi.' },
  ],
  sources: [
    { title: 'ChessBase: World Cup Finals G1 – Svidler beats Grischuk, Ivanchuk draws Ponomariov', url: 'https://en.chessbase.com/post/world-cup-finals-g1-svidler-beats-grischuk-ivanchuk-draws-ponomariov' },
    { title: 'The Week in Chess: Svidler exploits Grischuk clock handling to win first game of World Cup final', url: 'https://theweekinchess.com/chessnews/events/fide-world-cup-khanty-mansiysk-2011/svidler-exploits-grischuk-clock-handling-to-win-first-game-of-world-cup-final' },
    { title: 'FIDE: Svidler wins the 1st game as black', url: 'https://old.fide.com/component/content/article/1-fide-news/5556-svidler-wins-the-1st-game-as-black.html' },
    { title: 'Chess.com: Svidler wins first game World Cup final', url: 'https://www.chess.com/news/view/svidler-wins-first-game-world-cup-final' },
    { title: 'Chess.com: Svidler strikes first in World Cup final', url: 'https://www.chess.com/news/view/svidler-strikes-first-in-world-cup-final-7310' },
    { title: 'Chessdom: Peter Svidler grabs the lead in the World Cup final', url: 'https://www.chessdom.com/peter-svidler-grabs-the-lead-in-the-world-cup-final/' },
  ],
  exercises: [
    { id: 'gsv-1', kind: 'tekrar', plan: false, title: 'b2’ye baskın',
      source: 'Grischuk – Svidler, Hantı-Mansiysk 2011 (25. hamle)',
      fen: '2q3k1/r1b3pp/p3N1n1/1p2P3/n5Q1/6BP/PPP2PP1/3R2K1 b - - 0 25',
      prompt: 'Siyahın bir taşı fazla, Beyazın üç piyonu var. Siyahın atı a4’te. Beyazın vezir kanadına bakın: fazla taşı nasıl işe katarsınız?',
      hint: 'b2 piyonunu kim koruyor? At alırsa hangi taşa saldırır?',
      line: ['Nxb2', 'Rd5', 'Bb6'],
      explanation: '**25...Nxb2!** At piyonu alır ve d1 kalesine saldırır; **26.Rd5 Bb6!** sonrası fil de aktifleşir ve f2’ye bakar. Motor: ...Nxb2 −2.1, sonraki en iyi 25...Bb6 −0.2. 26. hamlede ...Bb6 −2.9, 26...Ba5 −1.6.',
      link: 'Taş fazlası olan taraf atını rakibin korumasız vezir kanadı piyonlarına yöneltir.' },
    { id: 'gsv-2', kind: 'tekrar', plan: false, title: 'Nc4: iki iş birden',
      source: 'Grischuk – Svidler, Hantı-Mansiysk 2011 (27. hamle)',
      fen: '2q3k1/r5pp/pb1RN1n1/1p2P3/6Q1/6BP/PnP2PP1/6K1 b - - 3 27',
      prompt: 'Beyazın kalesi d6’da b6 filine saldırıyor. Siyahın b2’deki atı oyuna dönebilir. En güçlü hamle hangisi?',
      hint: 'At hem b6 filini korusun hem de bir Beyaz taşına saldırsın.',
      line: ['Nc4'],
      explanation: '**27...Nc4!** At b6 filini korur ve d6 kalesine saldırır; kale kaçamaz, 28.Qe4 Nxd6 29.exd6 sonrası Siyah kalite kazanır. Motor: ...Nc4 −4.3, sonraki en iyi 27...Re7 −2.1 (28.Rxb6 ile Beyaz kurtulur).',
      link: 'b2’deki at boşta değildi: c4’e dönüp oyunun en güçlü taşı oldu.' },
    { id: 'gsv-3', kind: 'transfer', plan: false, title: 'Tal’ın b2 baskını',
      source: 'Mariotti – Tal, Milano 1975 (17. hamle)',
      fen: '3r1rk1/1bq1bppp/p1npp3/1p4P1/n3PP1P/PNN1BB2/1PP2Q2/2R1K2R b K - 8 17',
      prompt: 'Taimanov yapısı: Beyaz şah kanadında piyonlarını ilerletti, şahı hâlâ merkezde. Siyahın atı a4’te. Hamle sizde.',
      hint: 'b2 piyonunu kim koruyor?',
      line: ['Nxb2'],
      explanation: '**17...Nxb2!** At b2 piyonunu alır; 18.O-O Nc4 sonrası at e3 filine saldırır ve Beyazın vezir kanadı dağılır. Motor: ...Nxb2 −2.4, sonraki en iyi 17...Nxc3 −1.1.',
      link: 'Svidler gibi Tal da atını a4’ten b2’ye sokup vezir kanadı piyonlarını aldı ve at sonra c4’e döndü.' },
    { id: 'gsv-4', kind: 'transfer', plan: false, title: 'Kasparov’un b2 fedası',
      source: 'Movsesian – Kasparov, Saraybosna 2000 (30. hamle)',
      fen: '1r3k2/2q2Ppp/p3p3/7P/nb6/3P4/PB2N1Q1/K2R4 b - - 4 30',
      prompt: 'Beyazın şahı a1’de, önünde yalnızca a2 piyonu ve b2 fili var. Siyahın atı a4’te, fili b4’te, kalesi b-hattında. Hamle sizde.',
      hint: 'b2 filini at alırsa şahın etrafında ne açılır?',
      line: ['Nxb2', 'Nd4', 'Nxd1'],
      explanation: '**30...Nxb2!** At b2 filini alır; 31.Kxb2? Ba3+ 32.Ka1 Bb2+ 33.Kb1 Bd4+ ile mat gelir. Oyunda **31.Nd4 Nxd1** ile Siyah kaleyi de aldı. Motor: ...Nxb2 −5.3, sonraki en iyi 30...Bc3 +3.8.',
      link: 'Grischuk – Svidler’de olduğu gibi a4’teki at b2’ye girdi; burada şahın önü açıldığı için baskın mat tehdidine dönüştü.' },
  ],
};
