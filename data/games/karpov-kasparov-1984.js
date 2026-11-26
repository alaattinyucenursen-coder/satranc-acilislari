// Karpov – Kasparov, Dünya Şampiyonası maçı, Moskova 1984 (7. oyun). Kaynak: PgnMentor (Kasparov.pgn).
export default {
  id: 'karpov-kasparov-1984',
  theme: 'Tek kalmış piyona baskı',
  white: 'Anatoli Karpov', black: 'Garri Kasparov',
  whiteShort: 'Karpov', blackShort: 'Kasparov',
  event: 'Dünya Şampiyonası maçı, 7. oyun', site: 'Moskova', year: 1984, eco: 'D34',
  variation: 'Tarrasch Savunması, Rubinstein sistemi', result: '1-0',
  pgn: `1. d4 d5 2. c4 e6 3. Nf3 c5 4. cxd5 exd5 5. g3 Nf6 6. Bg2 Be7 7. O-O O-O 8. Nc3 Nc6 9. Bg5 cxd4 10. Nxd4 h6 11. Be3 Re8 12. Qb3 Na5 13. Qc2 Bg4 14. Nf5 Rc8 15. Nxe7+ Rxe7 16. Rad1 Qe8 17. h3 Bh5 18. Bxd5 Bg6 19. Qc1 Nxd5 20. Rxd5 Nc4 21. Bd4 Rec7 22. b3 Nb6 23. Re5 Qd7 24. Qe3 f6 25. Rc5 Rxc5 26. Bxc5 Qxh3 27. Rd1 h5 28. Rd4 Nd7 29. Bd6 Bf7 30. Nd5 Bxd5 31. Rxd5 a6 32. Bf4 Nf8 33. Qd3 Qg4 34. f3 Qg6 35. Kf2 Rc2 36. Qe3 Rc8 37. Qe7 b5 38. Rd8 Rxd8 39. Qxd8 Qf7 40. Bd6 g5 41. Qa8 Kg7 42. Qxa6 1-0`,


  summary: 'Moskova’daki 1984 Dünya Şampiyonası maçının 7. oyunu (28 Eylül 1984). Kurala göre altı galibiyete ulaşan maçı kazanıyordu ve bu oyunla Karpov skoru 3–0’a getirdi. İlk tek sayılı oyunlarda 1.e4 ile istediğini alamayan Karpov, bu kez 1.d4 oynadı; Kasparov, Adaylar finalinde Smislov’a karşı başarıyla kullandığı Tarrasch Savunmasıyla cevap verdi. Siyah, d5’te tek kalmış (izole) bir piyon karşılığında hızlı gelişim ve açık hatlar aldı. Karpov klasik yöntemi uyguladı: g3–Bg2 ile d5’e baskı, d4 karesine at, sonra 14.Nf5 ile Siyahın koyu kareli filini değişmek. Kasparov 15. ve 16. hamlelerinde yarım saatten fazla düşündükten sonra d5 piyonunu bilerek bıraktı ve taş aktifliğiyle materyali 26...Qxh3 ile geri aldı; motor bu aşamada oyunu eşit görüyor. Ama sonraki hamlelerde küçük gevşeklikler (27...h5, 33...Qg4, 35...Rc2) Beyazın taşlarını merkezde ve Siyah şahına karşı daha iyi yerleştirdi. Zaman sıkıntısındaki Kasparov 37...b5? ile vezir kanadını zayıflattı; 38.Rd8! sonrası Karpov’un veziri a6 ve b5 piyonlarını topladı ve Siyah ertelemeden sonra oyuna devam etmeden terk etti.',
  intro: 'Bu oyun, tek kalmış piyona karşı nasıl oynanacağını gösteren klasik bir örnektir: önce piyonun önündeki kare (d4) bloke edilir, sonra piyonu savunan ve aktif olan taşlar değişilir, en sonunda piyona saldırılır. İlginç olan şu: Karpov piyonu kazanıyor, Kasparov materyali geri alıyor, ama Beyazın taşları pozisyonda kalıcı olarak daha iyi kalıyor. Oyun aynı zamanda “eşit” bir pozisyonun zaman sıkıntısında nasıl kaybedilebileceğini de gösterir: kesin hata 37...b5 idi, ondan önce Siyah 35...Qxd3 veya 37...Qf7 ile vezirleri değişip beraberliğe çok yaklaşabilirdi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**g3 ve Bg2 ile d5’e baskı** (Rubinstein–Schlechter kurulumu). Uzun çaprazdaki fil, Tarrasch’ta Siyahın en büyük derdidir; Siyah 3...c5 oynadığı için d5’i bir daha ...c6 ile koruyamaz.',
      '**d4 karesini at ile bloke etmek.** 9...cxd4 10.Nxd4 sonrası at, d5 piyonunun önündeki kareye oturur; buradan hiçbir Siyah piyon onu kovamaz.',
      '**Siyahın aktif taşlarını değişmek.** 14.Nf5 ve 15.Nxe7+ ile Siyahın koyu kareli fili gitti; her değişim, Siyahın tek piyon karşılığında aldığı aktifliği azaltır.',
      '**Ağır taşları d-hattına toplamak** (12.Qb3, 16.Rad1) ve d5’i ikinci, üçüncü kez saldırı altına almak.',
      'Piyon geri alındıktan sonra da **merkezi kareleri (d4, d5, e5) taşlarla tutmak**: 21.Bd4, 30.Nd5, 31.Rxd5 ile Beyazın kale ve fili merkezde kaldı.',
      '**Siyahın zayıf piyonlarına vezirle girmek.** 37.Qe7 yedinci yataya, 41.Qa8 ve 42.Qxa6 ise ...b5 ile zayıflayan vezir kanadına girdi.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Tek piyonun verdiği alanla **taşları hızlı ve aktif geliştirmek**: Nc6–a5–c4, ...Bg4, ...Re8, ...Rc8.',
      '**e2 ve c-hattına baskı**: 13...Bg4 ve 17...Bh5 e2’yi bağladı, ...Rc8 ve ...Rec7 c3 atına ve c-hattına yüklendi.',
      '**Gereksiz taş değişiminden kaçınmak**: tek piyonlu taraf için her değişim oyunsonunu, yani piyonun en zayıf olduğu aşamayı yaklaştırır.',
      'Piyon kaybedilirse **Bg2’nin gitmesiyle zayıflayan beyaz kareleri ve h3 piyonunu hedef almak**: 18...Bg6, 23...Qd7 ve 26...Qxh3 bu planın ürünüdür.',
      'Materyal eşitlendikten sonra **sağlam durup vezir değişimiyle beraberliğe gitmek** (35...Qxd3 ya da 37...Qf7). Kasparov bunun yerine kazanmaya oynadı ve zaman sıkıntısında hata yaptı.',
      'Şah kanadı piyonlarını gereksiz yere oynamamak: 27...h5 ve 40...g5 Siyah şahının çevresinde yeni zayıflıklar yarattı.',
    ] },
  },
  critical: [
    { move: '3b', title: 'Tarrasch Savunması', text: '3...c5 ile Siyah merkezde hemen karşı vuruş yapar. cxd5 exd5 sonrası d5 piyonu tek kalabilir; karşılığında Siyahın c8 fili ve atları serbestçe gelişir. Kasparov bu savunmayı 1984 Adaylar finalinde Smislov’a karşı beş kez kullanmış ve Smislov ona karşı bir şey bulamamıştı. Karpov’un cevabı, Rubinstein ve Schlechter’den beri bilinen g3–Bg2 kurulumuydu.' },
    { move: '12w', title: '12.Qb3: Smislov’un 12.a3’ünden farklı bir yol', text: 'Adaylar finalinde Smislov 12.a3 oynamıştı. Karpov’un 12.Qb3’ü (ilk kez Korçnoy’un Ivkov’a karşı 1970’te oynadığı aktarılıyor) d5’e ve b7’ye saldırır ve d1 karesini kaleye bırakır. Raymond Keene The Spectator’da bu hamleye “!” verdi ve Karpov’un planının Smislov’unkinden “çok daha amaca yönelik” olduğunu yazdı. Motor ise 12.Rc1’i biraz daha iyi buluyor (Motor: +0.55, 12.Qb3 için +0.21–0.45).' },
    { move: '14w', title: '14.Nf5: iyi fil gidiyor', text: 'At, Siyahın e7 filine saldırır. Christian Science Monitor’daki maç yorumuna göre bu hamle Kasparov’u şaşırttı. Fikir, d5 piyonunu dolaylı olarak savunan ve koyu kareleri tutan fili değişip fil çiftini almaktır. 14...Bxf5? 15.Qxf5 ise Beyaz veziri aktifleştirirdi. Kasparov 15. ve 16. hamlelerinde yarım saatten fazla düşündü; Siyahın en doğru kurulumu bulmak kolay değildi.' },
    { move: '18w', title: '18.Bxd5: piyon düşüyor, ama bir bedeli var', text: 'Beyaz d5’i aldı ve bir piyon önde. Ama bu, g2 filini d5’te Siyahın atıyla değişmek anlamına gelir; Beyaz şahının çevresindeki beyaz kareler (h3, f3, e4) korumasız kalır. Tim Spanton analizinde bu hamle için “fazla açgözlü olabilir” diyor ve 18.Bd4’ü öneriyor. Motor 18.Rc1 (+0.37) ve 18.Bd4 (+0.30) hamlelerini biraz daha iyi görüyor; oyundaki hamleden sonra denge neredeyse kuruludur.' },
    { move: '26b', title: '26...Qxh3: materyal eşit', text: 'Kasparov’un 18...Bg6 ile başlattığı karşı oyun hedefine ulaştı: h3 düştü, materyal eşit (her iki tarafta vezir, kale, fil, at ve beş piyon). Motor bu anda oyunu eşit görüyor (Motor: +0.24; 26...Qc6 ise +0.06). Ama Beyazın fili ve atı merkezde, Siyahın vezir kanadı piyonları ise Beyaz vezirinin ileride hedefi olacak.' },
    { move: '27b', title: '27...h5: gereksiz bir zayıflama', text: 'Keene bu hamleyi Kasparov’un zaman sıkıntısındayken yaptığı gereksiz bir zayıflama olarak niteledi. Motor da aynı görüşte: 27...Be8! (fil c6’ya gelip uzun çaprazı ve d7’yi kontrol edecek) tam eşitlik veriyordu (Motor: 0.00), oyundaki hamleden sonra Beyaz küçük bir avantaja geçti (+0.46). h5 piyonu daha sonra Beyaz kalesinin hedefi oldu.' },
    { move: '35b', title: '35...Rc2?!: vezir değişimini reddetmek', text: 'Siyah 35...Qxd3 36.Rxd3 Kf7 ile vezirleri değiştirip neredeyse eşit bir oyunsonuna geçebilirdi (Motor: 0.00). Christian Science Monitor’daki yorumcu ve Keene, 35...Qxd3’ü önerdi; Mark Weeks ve CSM 35...Rc2’yi zaman sıkıntısı hatası olarak gösteriyor. Motora göre kayıp küçük (+0.50), ama kale 36.Qe3! sonrası hemen geri dönmek zorunda kaldı; yani Siyah boşa tempo harcadı.' },
    { move: '37b', title: '37...b5?: oyunu kaybettiren hata', text: 'b7 piyonu Qe7 tarafından saldırı altındaydı. Doğru savunma 37...Qf7! idi: vezir d5 kalesine karşı saldırır ve 38.Qxf7+ Kxf7 39.Rxh5 g5 sonrası Siyahın beraberlik şansı yüksektir (Motor: +0.45). 37...b5 ise b7’yi kurtarır ama a6 piyonunu savunmasız bırakır. 38.Rd8! Rxd8 39.Qxd8 sonrası f8 atı bağlanır ve Beyaz veziri a6’ya gider (Motor: +2.0 ile +2.4 arası). Spanton ve CSM yorumcusu da 37...Qf7’yi gösteriyor.' },
  ],
  lessons: [
    'Tek kalmış piyona karşı üç adım: **önündeki kareyi bloke et** (10.Nxd4), **aktif savunucuları değiş** (14.Nf5, 15.Nxe7+), **sonra piyona yüklen** (16.Rad1, 18.Bxd5).',
    'Tek piyonlu taraf için koyu kareli fil çok değerlidir: d4 karesine ve Beyazın blokaj atına karşı tek savaşan taştır. Nf5xe7 değişimi Siyahın bu kozunu aldı.',
    'Piyon kazanmanın bir bedeli olabilir: 18.Bxd5 ile Beyazın uzun çapraz fili gitti, beyaz kareler zayıfladı ve Siyah piyonu 26...Qxh3 ile geri aldı. Materyali kazandıktan sonra kendi şahının güvenliğini unutmamak gerekir.',
    'Materyal eşitlendikten sonra da **taş kalitesi** önemlidir. Beyazın fili d6/f4’te ve kalesi d5’te merkezi tutarken, Siyahın atı f8’de pasifti. Küçük avantajlar birikir.',
    'Savunmada **vezir değişimi** çoğu zaman en güvenli yoldur. 35...Qxd3 veya 37...Qf7 ile beraberlik çok yakındı; Kasparov vezirleri tahtada tutunca Karpov’un veziri giriş kareleri buldu.',
    'Piyon hamleleri geri alınamaz. 27...h5, 37...b5 ve 40...g5’in her biri yeni bir zayıf kare veya hedef piyon yarattı; zaman sıkıntısında “bir şey yapma” isteği yerine sağlam bir bekleme hamlesi aramak gerekir.',
    'Bir piyonu korumak için başka bir piyonu ilerletmeden önce, arkada kalan piyonun (burada a6) kimin tarafından korunacağını sorun.',
  ],
  notes: {
    '1w': {
      text: '1.d4: Karpov, maçın ilk tek sayılı oyunlarında (1, 3, 5) 1.e4 oynamıştı. Christian Science Monitor’a göre Sicilya oyunlarından memnun kalmayınca 7. oyunda Vezir Gambitine geçti.',
      amac: 'Merkezi d4 ile tutmak ve c4 ile Vezir Gambitine geçip Kasparov’u daha sakin, pozisyonel bir oyuna çekmek.',
      neden: '1.d4 açılışları Karpov’un pozisyonel tarzına uyar: küçük ama kalıcı avantajlar, yapısal zayıflıklar üzerinde baskı. Siyahın Tarrasch seçmesi de Karpov’un istediği türden bir yapı (tek kalmış piyon) doğurdu.',
      diger: [
        { move: '1.e4', text: 'İlk oyunlarda oynanan hamle; Siyah Sicilya ile karşılık vermişti. Motor 1.e4’ü bir miktar daha iyi gösterse de (+0.39 / +0.17) bu farkın pratikte anlamı yok; seçim tamamen maç stratejisiyle ilgiliydi.' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah merkezde kendi payını alır.',
      amac: 'd5 ile merkezi tutmak ve ardından ...e6 ile Vezir Gambiti Reddi yapısına geçmek; plan, ileride ...c5 ile Tarrasch.',
      neden: 'Kasparov Hint savunmaları da oynuyordu, ama bu maçta Tarrasch’a güveniyordu; Tarrasch için önce ...d5 gerekir.',
      diger: [
        { move: '1...Nf6', text: 'Kasparov’un repertuvarında Nimzo-Hint ve Grünfeld de vardı (Motor: +0.32). Bu oyunda Tarrasch’ı seçti, çünkü Smislov’a karşı iyi sonuç vermişti.' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. Beyaz, d5 piyonunu c-piyonuyla sorgular.',
      amac: 'd5’i merkezden uzaklaştırmak veya değiştirmek, c-hattını açmak.',
      neden: 'd4–c4 ikilisi Beyaza merkezde alan sağlar. Siyah d5’i tutmak isterse ...e6 ya da ...c6 oynamak zorundadır.',
      diger: [
        { move: '2.Nf3', text: 'Esnek bir sıra (Motor: +0.20). Kasparov–Smislov Adaylar maçında Tarrasch 1.d4 d5 2.Nf3 c5 3.c4 sırasıyla da ortaya çıkmıştı.' },
      ],
    },
    '2b': {
      text: '2...e6: Vezir Gambiti Reddi. Siyah d5’i e-piyonuyla destekler.',
      amac: 'd5’i sağlamlaştırmak ve f8 filinin önünü açmak; ardından ...c5 ile Tarrasch.',
      neden: '...e6 c8 filini kapatır ama Tarrasch’ta bu fil cxd5 exd5 sonrası serbest kalır. Böylece Siyah hem sağlam hem aktif bir kurulum hedefler.',
      diger: [
        { move: '2...c6', text: 'Slav Savunması (Motor: +0.32): d5’i c-piyonuyla korur ve c8 filini açık tutar, ama tek kalmış piyon yapısı oluşmaz.' },
        { move: '2...dxc4', text: 'Kabul Edilmiş Vezir Gambiti (Motor: +0.27): merkezi bırakıp piyonu geri verir; Kasparov’un o dönemdeki tarzına uymayan sakin bir yol.' },
      ],
    },
    '3w': {
      text: '3.Nf3: At gelişir. Tim Spanton’ın notuna göre Karpov kariyerinde bu konumda 3.Nc3’ü çok daha sık oynamıştır.',
      amac: 'Merkezi (d4 ve e5) desteklemek ve kısa roka hazırlanmak.',
      neden: '3.Nf3 sonrası 3...c5 Tarrasch’a geçmek de mümkündür; Karpov Tarrasch’a karşı hazırlıklı olduğu için buna izin verdi. 3.Nc3 sonrası da 3...c5 aynı yapıya gidebilirdi.',
      diger: [
        { move: '3.Nc3', text: 'Ana sıra (Motor: +0.34). 3...c5 4.cxd5 exd5 5.Nf3 Nc6 6.g3 ile çoğunlukla aynı ana varyanta gelinir.' },
        { move: '3.cxd5', text: 'Hemen değişim (Motor: +0.12); Siyah 3...exd5 ile rahat gelişir ve Beyaz şimdiden bir seçenek harcamış olur.' },
      ],
    },
    '3b': {
      text: '3...c5: Tarrasch Savunması. Siyah merkezde hemen karşı vuruş yapar ve d4’e saldırır.',
      amac: 'Hızlı gelişim ve açık hatlar karşılığında d5’te tek kalmış piyonu kabul etmek. Tarrasch’ın görüşüne göre taş aktifliği bu zayıflığı telafi eder.',
      neden: 'Arthur Bisguier’nin Christian Science Monitor’daki yazısına göre Tarrasch, Rubinstein ve Nimzoviç’in g3–Bg2 yöntemiyle gözden düşmüş, Spasski onu yeniden canlandırmıştı. Kasparov, Adaylar finalinde Smislov’a karşı bu savunmayla hiç kaybetmemişti; bu yüzden Karpov’a karşı da güvendi.',
      diger: [
        { move: '3...Nf6', text: 'Klasik Vezir Gambiti Reddi (Motor: +0.41); daha pasif ama yapısal olarak sağlam. Kasparov dinamik bir oyun istediği için ...c5’i seçti.' },
        { move: '3...dxc4', text: 'Kabul Edilmiş Vezir Gambiti yapısı (Motor: +0.41); merkezde gerilim yok, Siyah piyonu geri vermeye hazırlanır.' },
      ],
    },
    '4w': {
      text: '4.cxd5: Beyaz merkezde değişim yapar.',
      amac: 'Siyahı 4...exd5 ile almaya zorlamak; böylece d5 piyonu, c-piyonu da değişildiğinde tek kalacak.',
      neden: 'Tarrasch’a karşı tek mantıklı plan, Siyaha tek kalmış piyonu vermektir. Beklerse Siyah ...cxd4 veya ...dxc4 ile merkezi daha rahat çözebilir.',
      diger: [
        { move: '4.e3', text: 'Sakin bir kurulum (Motor: +0.18); Siyah ...Nf6 ve ...Nc6 ile rahat gelişir, tek piyon zorunlu olmaz.' },
      ],
    },
    '4b': {
      text: '4...exd5: Siyah e-piyonuyla alır. c8 filinin önü açıldı.',
      amac: 'Merkezi d5 piyonuyla tutmak ve c8 filini serbest bırakmak.',
      neden: 'Tarrasch’ın bütün fikri budur. 4...Qxd5 ise vezir erken merkeze gelir ve Nc3 ile tempo kaybeder (Motor: +1.07).',
      diger: [
        { move: '4...Qxd5', text: 'Vezir Nc3 ile kovalanır (Motor: +1.07); Siyah gelişimde geri kalır.' },
        { move: '4...Nf6', text: 'Piyon geri almayı ertelemek (Motor: +0.84); 5.dxe6 Bxe6 sonrası Siyah bir piyon eksik kalabilir.' },
      ],
    },
    '5w': {
      text: '5.g3: Rubinstein (Schlechter–Rubinstein) sistemi. Fil g2’den uzun çaprazda d5’e baskı yapacak.',
      amac: 'g2 filini d5 piyonuna yöneltmek; Siyah d5’i bir daha ...c6 ile koruyamayacağı için piyon taşlarla korunmak zorunda kalacak.',
      neden: 'Tarrasch Savunmasına karşı en güçlü ve en çok oynanan kurulum budur; Bisguier’nin yazısında da Tarrasch’ın bu fianketto yüzünden gözden düştüğü anlatılır. Uzun çaprazdaki fil, oyunsonunda bile tek piyona baskı yapmaya devam eder.',
      diger: [
        { move: '5.Bg5', text: 'Daha keskin bir yol (Motor: +0.44): Siyahın vezir atına baskı. Ama d5’e uzun vadeli baskı kurmaz.' },
        { move: '5.Nc3', text: 'Önce at (Motor: +0.43); genellikle sonra yine g3 gelir ve aynı ana varyanta dönülür.' },
      ],
    },
    '5b': {
      text: '5...Nf6: Siyah şah atını geliştirir; at d5’i korur.',
      amac: 'd5’in ilk savunucusunu getirmek ve kısa roka hazırlanmak.',
      neden: 'd5’i korumanın en doğal yolu. Sırayla ...Be7 ve ...O-O gelecek; ...Nc6 de d4’e baskı yapacak.',
      diger: [
        { move: '5...Nc6', text: 'Önce vezir atı (Motor: +0.40); genellikle aynı pozisyona çıkar.' },
      ],
    },
    '6w': {
      text: '6.Bg2: Fil uzun çaprazda; d5’e doğrudan bakıyor.',
      amac: 'd5’e ilk baskıyı kurmak ve rokayı hazırlamak.',
      neden: 'Bu fil Beyazın Tarrasch’a karşı en önemli taşıdır. Oyunun ilerleyen kısmında Karpov onu d5 piyonu için verecek (18.Bxd5).',
      diger: [
        { move: '6.Nc3', text: 'Sıra değişikliği (Motor: +0.36), aynı yapıya gider.' },
      ],
    },
    '6b': {
      text: '6...Be7: Siyah filini sakin bir kareye geliştirir ve rokayı hazırlar.',
      amac: 'Kısa roka; fil e7’den gerekirse f6 veya b4 ile aktifleşebilir.',
      neden: 'Ana sıra. 6...c4 (İsveç varyantı) vezir kanadında çoğunluk kurar ama merkezi gevşetir ve şüpheli sayılır.',
      diger: [
        { move: '6...c4', text: 'İsveç varyantı (Motor: +0.48): Siyah gerilimi kapatır, ama Beyaz Ne5 ve e4 ile merkezi kırar.' },
        { move: '6...Nc6', text: 'Aynı yapıya çıkan sıra (Motor: +0.44).' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz şahını güvene alır.',
      amac: 'Şahı güvene almak ve f1 kalesini oyuna sokmak.',
      neden: 'Merkez henüz kapalı değil; önce roka, sonra Nc3 ve Bg5 doğal bir sıradır.',
      diger: [
        { move: '7.Nc3', text: 'Önce at (Motor: +0.50); büyük olasılıkla aynı pozisyona çıkar.' },
        { move: '7.dxc5', text: 'Hemen değişim (Motor: +0.43); Siyah ...Bxc5 ile tempo kazanır, ama tek piyon kesinleşir.' },
      ],
    },
    '7b': {
      text: '7...O-O: Siyah da rok yapar.',
      amac: 'Şahı güvene almak ve f8 kalesini e8’e getirmeye hazırlanmak.',
      neden: 'Gelişim önceliktir. ...Re8 ile e-hattı ve e2 baskısı Siyahın tipik planıdır.',
      diger: [
        { move: '7...Nc6', text: 'Önce at (Motor: +0.42); aynı yapı.' },
      ],
    },
    '8w': {
      text: '8.Nc3: At d5’e ikinci kez saldırır.',
      amac: 'd5’e baskıyı artırmak ve gerektiğinde dxc5 ile tek piyonu kesinleştirmek.',
      neden: 'Ana sıra. At, d5 ve e4 karelerini kontrol eder ve d-hattında ileride kalelerle birlikte çalışır.',
      diger: [
        { move: '8.dxc5', text: 'Hemen değişim (Motor: +0.50); Siyah ...Bxc5 ile aktif bir fil alır.' },
        { move: '8.b3', text: 'Sakin bir alternatif (Motor: +0.28); Siyah ...Ne4 ile rahat oynar.' },
      ],
    },
    '8b': {
      text: '8...Nc6: Siyah son küçük taşını geliştirir ve d4’e baskı yapar.',
      amac: 'd4’e üçüncü kez bakmak ve d5’i dolaylı korumak; at ileride a5–c4 yolunu kullanacak.',
      neden: 'Tarrasch’ın ana pozisyonu bu hamleyle oluşur. 8...c4 ise gerilimi kapatır ve Beyaza Ne5 ile e4 kırılmasını verir.',
      diger: [
        { move: '8...c4', text: 'Gerilimi kapatır (Motor: +0.34); Siyah vezir kanadında çoğunluk alır ama merkezde inisiyatif Beyaza geçer.' },
      ],
    },
    '9w': {
      text: '9.Bg5: Fil, d5’in savunucusu f6 atını bağlar.',
      amac: 'f6 atına baskı yaparak d5’in savunmasını zayıflatmak; Siyahı ...cxd4 ile gerilimi çözmeye zorlamak.',
      neden: 'Ana sıra. Bxf6 tehdidi d5’i bir savunucusundan mahrum bırakır. Siyah ...c4 veya ...cxd4 arasında seçim yapmak zorunda kalır.',
      diger: [
        { move: '9.dxc5', text: 'Hemen değişim (Motor: +0.42); Siyah ...Bxc5 ile aktif bir oyun kurar, sonra ...d4 kırılması mümkün olabilir.' },
        { move: '9.Bf4', text: 'Daha sakin (Motor: +0.22); f6 atı bağlanmaz.' },
      ],
    },
    '9b': {
      text: '9...cxd4: Siyah gerilimi çözer; d5 artık tek kalmış bir piyon.',
      amac: 'Merkezi açmak ve taşlara serbest hatlar vermek; tek piyon artık kesin.',
      neden: '9...c4 merkezi kapatıp vezir kanadı çoğunluğu alır ama Ne5 ile Beyaz merkezde baskın hale gelir. Kasparov dinamik oyunu tercih ederek tek piyonu kabul etti.',
      diger: [
        { move: '9...c4', text: 'Kapalı bir yapı (Motor: +0.31): 10.Ne5 Be6 sonrası Siyah sağlam kalır ama inisiyatifi bırakır.' },
        { move: '9...Be6', text: 'd5’i fille korumak (Motor: +0.68): 10.Bxf6 Bxf6 11.dxc5 ile Beyaz bir piyon kazanabilir.' },
      ],
    },
    '10w': {
      text: '10.Nxd4: At d4’e yerleşir. Burası tek kalmış piyonun önündeki ideal blokaj karesidir.',
      amac: 'd4’ü kalıcı bir karakol yapmak: bu at hiçbir Siyah piyon tarafından kovulamaz ve d5’in ilerlemesini durdurur.',
      neden: 'Tek piyona karşı ilk kural: önündeki kareyi bloke et. Atın d4’ten f5, b5 ve e6 karelerine sıçrama imkânı da var; 14.Nf5 buradan gelecek.',
      diger: [
        { move: '10.Nb5', text: 'Zorlama bir girişim (Motor: −0.10); Siyah ...Qb6 ile karşılık verir ve d4 piyonu tutulur.' },
      ],
    },
    '10b': {
      text: '10...h6: Siyah fili sorgular ve şahına kaçış karesi açar.',
      amac: 'g5 filinin f6 atını bağlamasını kırmak ve fili kararını vermeye zorlamak.',
      neden: 'Ana hamle. Fil geri çekilirse Siyahın atı serbest kalır; Bxf6 olursa Siyah fil çiftini alır. Ayrıca h7 karesi şaha birinci yatay mat tehlikelerine karşı nefes verir.',
      diger: [
        { move: '10...Re8', text: 'Hemen kale (Motor: +0.63); çoğu zaman aynı pozisyona çıkar.' },
        { move: '10...Qb6', text: 'b2 ve d4’e baskı (Motor: +0.67); 11.Nb3 ile Beyaz rahat kalır.' },
      ],
    },
    '11w': {
      text: '11.Be3: Fil e3’e çekilir; d4 atını destekler.',
      amac: 'Blokaj atını sağlamlaştırmak ve fili Bxf6 ile değişmemek.',
      neden: 'Bxf6 değişimi Siyaha fil çifti verirdi (Motor: +0.23). e3’teki fil d4’ü korur ve ileride c5 ile d4 karelerine gidebilir.',
      diger: [
        { move: '11.Bf4', text: 'Fil f4’e (Motor: +0.49); fil aktif kalır ama d4 atını desteklemez.' },
        { move: '11.Bxf6', text: 'Fil çiftini vermek (Motor: +0.23); d5’in bir savunucusu gider ama Siyahın fil çifti açık oyunda güçlüdür.' },
      ],
    },
    '11b': {
      text: '11...Re8: Kale e-hattına; e2 ve e3’e baskı.',
      amac: 'e-hattını kontrol etmek ve e3 filine dolaylı baskı kurmak; ileride ...Bf8 veya ...Bb4 ile fil yer değiştirebilir.',
      neden: 'Tarrasch’ın ana hamlesi. Kale e3’e bakarken Beyazın Nxc6 bxc6 değişimlerinden sonra da e-hattı Siyahın elinde kalır.',
      diger: [
        { move: '11...Bg4', text: 'Fil hemen g4’e (Motor: +0.56); h3 ile sorgulanır.' },
        { move: '11...Be6', text: 'd5’i fille korumak (Motor: +0.62); Nxe6 fxe6 ile Siyahın yapısı değişir.' },
      ],
    },
    '12w': {
      text: '12.Qb3!?: Vezir b3’ten d5 ve b7’ye saldırır.',
      amac: 'd5’e baskıyı artırmak, b7’yi tehdit etmek ve d1 karesini kaleye bırakmak (Rad1).',
      neden: 'Spanton’a göre bu hamle ilk kez Korçnoy’un Ivkov’a karşı 1970’te oynandı. Adaylar finalinde Smislov 12.a3 oynamış ve bir şey elde edememişti; Keene The Spectator’da 12.Qb3’e “!” verip Karpov’un planının çok daha amaca yönelik olduğunu yazdı.',
      diger: [
        { move: '12.Rc1', text: 'Motorun ilk tercihi (Motor: +0.55): c-hattını kontrol eder, ...Bf8 sonrası Beyaz rahat bir baskı kurar.' },
        { move: '12.a3', text: 'Smislov’un Kasparov’a karşı oynadığı hamle (Motor: +0.47): ...Bb4 ve ...Nb4’ü önler ama yavaştır.' },
        { move: '12.Qd3', text: 'Vezir d-hattında (Motor: +0.55); ...Ne5 ile Siyah aktif kalır.' },
      ],
    },
    '12b': {
      text: '12...Na5: At vezire saldırır ve c4 karesine gitmeye hazırlanır.',
      amac: 'Tempo ile veziri kovmak ve atı c4’e getirip e3 filine ve b2’ye baskı yapmak.',
      neden: 'Spanton’ın belirttiği gibi atın a5’te durması iki türlü sonuç verebilir: c4’e ulaşırsa Siyah için iyi, c6’ya geri dönmek zorunda kalırsa kaybedilmiş bir tempo. Diğer hamleler d5’i hemen düşürebilirdi.',
      diger: [
        { move: '12...a5', text: 'Zayıf (Motor: +1.17): 13.Rad1 ile d5’e baskı artar ve piyon tehlikede kalır.' },
        { move: '12...Kh8', text: 'Pasif (Motor: +1.19): 13.Nxd5 ile Beyaz piyonu alır.' },
      ],
    },
    '13w': {
      text: '13.Qc2: Vezir c2’ye çekilir.',
      amac: 'Veziri güvenli ama aktif bir kareye koymak: c-hattında ve b1–h7 çaprazında.',
      neden: 'Qc2 hem c4 karesine hem de ileride Nf5 ile birlikte h7’ye bakar. 13.Qd1 veya 13.Qb5 daha pasif kalırdı (Motor: +0.57’ye karşı +0.25 civarı).',
      diger: [
        { move: '13.Qd1', text: 'Geri çekilmek (Motor: +0.25); vezir pasif kalır.' },
        { move: '13.Qb5', text: 'Vezir b5’te (Motor: +0.24); ...Bd7 ile tempo kaybeder.' },
      ],
    },
    '13b': {
      text: '13...Bg4: Fil g4’e; e2’ye baskı ve aktif gelişim.',
      amac: 'e2 piyonunu bağlamak (Re8 ile birlikte), c8 filini en aktif kareye getirmek.',
      neden: 'Spanton’a göre hemen 13...Nc4 14.Bf4 ile karşılanır; motor da bu durumda Beyazı biraz daha iyi görüyor (+0.65). Bg4 ile Siyah önce gelişimini tamamlar.',
      diger: [
        { move: '13...Nc4', text: '14.Bf4! ile at sorgulanır ve Beyazın avantajı artar (Motor: +0.65).' },
        { move: '13...Bb4', text: 'c3 atına baskı (Motor: +0.41), motora göre aynı değerde; Siyah ...Bxc3 ile tek piyonu biraz rahatlatabilir.' },
        { move: '13...Bf8', text: 'Fil savunmaya (Motor: +0.57); sağlam ama pasif.' },
      ],
    },
    '14w': {
      text: '14.Nf5!: At e7 filine ve h6’ya saldırır.',
      amac: 'Siyahın koyu kareli filini değişmek ve fil çiftini almak; böylece d4 karesinin Siyah tarafındaki en iyi savunucusu oyundan çıkar.',
      neden: 'Spanton’a göre Portisch bu hamleyi 1984’te daha önce oynamıştı ve artık ana hamle sayılıyor. Christian Science Monitor’daki yoruma göre Kasparov’u şaşırttı ve Beyaza belirgin bir avantaj verdi; motor avantajı küçük görüyor (+0.49). 14...Bxf5 15.Qxf5 ise Beyaz veziri aktifleştirir.',
      diger: [
        { move: '14.h3', text: 'Önce fili sorgulamak (Motor: +0.32); ...Bh5 sonrası Siyah aynı baskıyı sürdürür.' },
        { move: '14.Rad1', text: 'Kale d-hattına (Motor: +0.22); Siyah ...Rc8 ve ...Nc4 ile aktif kalır.' },
      ],
    },
    '14b': {
      text: '14...Rc8!?: Kale c-hattından vezire saldırır. Spanton’a göre bu bir yenilikti.',
      amac: 'Tempo kazanıp c-hattını kontrol etmek ve c3 atına baskı kurmak.',
      neden: 'Kasparov fil değişimini kabullendi ve gelişime odaklandı. CSM yorumcusu bunu “rutin” bulup 14...Bf8 veya 14...Bb4’ün daha zorlayıcı olacağını yazdı; Spanton, Wilder ve Chandler’in 14...Bb4’ü tercih ettiğini aktarıyor. Motor 14...Bb4 ile 14...Rc8’i eşit görüyor (+0.53 / +0.50), 14...Bf8’i ise daha zayıf (+0.86).',
      diger: [
        { move: '14...Bb4', text: '15.Bd4 Bxc3 16.Bxc3 Rxe2 sonrası Siyah piyonu e2’den alır ama Beyazın fil çifti güçlüdür (Motor: +0.53).' },
        { move: '14...Bf8', text: 'Fili korur ama 15.Bd4 ile Beyaz f6’ya baskı yapar (Motor: +0.86).' },
      ],
    },
    '15w': {
      text: '15.Nxe7+: Beyaz fil çiftini alır; Siyahın koyu kareleri koruyan fili gider.',
      amac: 'Tek piyonlu tarafın en iyi küçük taşını oyundan çıkarmak ve fil çiftiyle uzun vadeli avantaj almak.',
      neden: 'Plan bu değişime dayanıyordu. Motor 15.h3 (+0.67) ve 15.Bd4’ü (+0.56) biraz daha iyi buluyor. İlginç bir ayrıntı: 9. oyunda aynı pozisyona gelindiğinde The Spectator’a göre Karpov 15.Bd4 oynadı; belki Siyahın ...b5 gibi hazırlanmış bir yeniliğinden çekindi.',
      diger: [
        { move: '15.h3', text: 'Önce fili sorgulamak (Motor: +0.67): 15...Bh5 16.Nxe7+ Rxe7 sonrası Beyaz şah kanadında daha fazla alan kazanmış olur.' },
        { move: '15.Bd4', text: '9. oyunda Karpov’un tercihi (Motor: +0.56): 15...Bc5 16.Bxc5 Rxc5 17.Ne3 ile d5’e yüklenir.' },
      ],
    },
    '15b': {
      text: '15...Rxe7: Kale geri alır. Mark Weeks’in maç özetine göre Kasparov bu hamle için yarım saat düşündü.',
      amac: 'Veziri d8’de tutup kaleyi e-hattında aktif bırakmak; kale ileride e2’ye baskı yapacak.',
      neden: '15...Qxe7 de mümkündü (Motor: +0.32), ama 16.Bxa7 ile a7 piyonu düşebilirdi; Kasparov kalesini aktif tuttu. 15...Kf8?? ise 16.Nxc8 ile kaleyi kaybeder.',
      diger: [
        { move: '15...Qxe7', text: '16.Bxa7 Qb4 sonrası Siyah aktif ama piyon eksik (Motor: +0.32).' },
      ],
    },
    '16w': {
      text: '16.Rad1: Kale d-hattına; d5’e ikinci baskı.',
      amac: 'd5’e taşlarla yüklenmek: kale, g2 fili ve c3 atı aynı piyona bakıyor.',
      neden: 'd5 artık Siyahın tek kalmış zayıflığı; Beyaz onu hedefler. Motor 16.Rfd1’i biraz daha iyi buluyor (Motor: +0.34’e karşı +0.10), çünkü a1 kalesi c-hattına da gidebilirdi.',
      diger: [
        { move: '16.Rfd1', text: 'Diğer kale (Motor: +0.34); a1 kalesi c1’e gelip c-hattına itiraz edebilir.' },
        { move: '16.h3', text: 'Önce fili sorgulamak (Motor: 0.00); 16...Be6 ile Siyah d5’i sağlamlaştırır.' },
      ],
    },
    '16b': {
      text: '16...Qe8: Vezir d-hattından çekilir ve e-hattını güçlendirir. Kasparov bu hamle için de yarım saat düşündü.',
      amac: 'Kalelerin arkasına geçip e2’ye baskıyı artırmak ve d8’deki veziri d-hattının açılmasından kurtarmak.',
      neden: 'Mark Weeks’e göre Kasparov burada d5 piyonunu bilerek bırakmayı seçti: karşılığında Beyaz şahının çevresinde karşı oyun alacaktı. 16...Be6 ise savunma amaçlı pasif bir geri çekilmedir; Spanton, Siyahın bundan kaçınmak istediğini yazıyor. CSM yorumcusu da 16...Rd7 seçeneğini inceledi. Motor derinde 16...Rd7 ile 16...Qe8’i eşit görüyor (+0.48 / +0.50).',
      diger: [
        { move: '16...Rd7', text: 'd5’i kaleyle korumak (Motor: +0.48): 17.Bd4 Ne8 sonrası Siyah sağlam ama pasif.' },
        { move: '16...Be6', text: 'd5’i fille korumak; Siyah aktiflikten vazgeçer ve Beyaz rahatça baskıyı artırır.' },
      ],
    },
    '17w': {
      text: '17.h3: Fil sorgulanır.',
      amac: 'Bg4 filini kararını vermeye zorlamak: e6’ya gidip pasifleşmek ya da h5’te kalıp e2 baskısını sürdürmek.',
      neden: 'Beyaz Bxd5’ten önce e2 bağını rahatlatmak istedi. Motor 17.Bd4’ü biraz daha iyi buluyor (Motor: +0.63’e karşı +0.40). h3 ileride Siyahın hedefi olacak (26...Qxh3).',
      diger: [
        { move: '17.Bd4', text: 'Merkeze fil (Motor: +0.63): 17...Ne4 18.Rfe1 ile e2 korunur ve d5 baskısı sürer.' },
        { move: '17.Qb1', text: 'Vezir geri (Motor: +0.28); ...Rxc3 bxc3 Bxe2 gibi taktikler mümkün olur.' },
      ],
    },
    '17b': {
      text: '17...Bh5: Fil h5’te kalır; e2’ye baskı sürer.',
      amac: 'e2 bağını koruyup fili g6’ya getirme imkânını saklamak; oradan c2–h7 ve b1–h7 çaprazlarına bakacak.',
      neden: 'CSM yorumcusu 17...Ne4’ün de oynanabileceğini düşündü. 17...Be6? ise 18.Bxa7 ile bir piyon verir (Motor: +0.95). 17...Rxe3?! 18.fxe3 kalite fedası yeterli karşılık vermez (Motor: +1.17).',
      diger: [
        { move: '17...Be6', text: '18.Bxa7 b5 19.Bb6 sonrası Beyaz bir piyon önde (Motor: +0.95).' },
        { move: '17...Rxe3', text: 'Kalite fedası: 18.fxe3 Be6 sonrası Siyahın karşılığı yetersiz (Motor: +1.17).' },
      ],
    },
    '18w': {
      text: '18.Bxd5: Piyon alındı; Beyaz bir piyon önde.',
      amac: 'Tek kalmış piyonu kazanmak; oyunun başından beri hedef buydu.',
      neden: 'Bedeli: g2 fili d5’te atla değişilecek ve Beyaz şahının etrafındaki beyaz kareler zayıflayacak. Spanton bu hamle için “fazla açgözlü olabilir” diyor ve 18.Bd4’ü öneriyor. Motor 18.Rc1’i (+0.37) ve 18.Bd4’ü (+0.30) biraz daha iyi görüyor; oyunda denge neredeyse kuruldu.',
      diger: [
        { move: '18.Rc1', text: 'Önce c-hattına itiraz (Motor: +0.37): 18...b6 19.b3 ile Beyaz baskıyı korur ve d5 kaçmaz.' },
        { move: '18.Bd4', text: 'Spanton’ın önerisi (Motor: +0.30): 18...Ne4 19.Rfe1 ile Beyaz sağlam bir baskı kurar.' },
      ],
    },
    '18b': {
      text: '18...Bg6!: Siyah vezire saldırır ve d5’i almayı bir hamle erteler.',
      amac: 'Tempo ile veziri kovalamak ve fili b1–h7 çaprazına getirmek; böylece Beyazın beyaz karelerine karşı oyun başlar.',
      neden: '18...Nxd5 19.Rxd5 Bg6 sırası da benzer olurdu ama motor 18...Bg6’yı biraz daha iyi buluyor (Motor: +0.15’e karşı +0.35). Önce vezir kovulduğu için Beyazın Qc1’den başka iyi karesi kalmaz.',
      diger: [
        { move: '18...Nxd5', text: '19.Rxd5 Bg6 20.Qc1 sonrası Beyaz rahat bir piyon artısıyla oynar (Motor: +0.35).' },
        { move: '18...b5', text: 'İlginç bir alternatif (Motor: 0.00): 19.a3 Nxd5 20.Rxd5 Bg6 ile Siyah aktiflik alır.' },
      ],
    },
    '19w': {
      text: '19.Qc1: Vezir c1’e; c-hattından çekilir ve h6’ya bakar.',
      amac: 'Veziri güvenli bir yere koymak ve aynı zamanda Bxh6 ihtimalini canlı tutmak.',
      neden: 'CSM yorumcusu 19.Qxg6?’i ...Nxd5 yüzünden Siyah lehine buldu; motor ise bunu 19.Qc1 ile aynı değerde görüyor (Motor: +0.31 / +0.22). Karpov sade ve güvenli hamleyi seçti.',
      diger: [
        { move: '19.Qxg6', text: '19...Nxd5 20.Qg4 Nxc3 21.bxc3 sonrası Beyazın yapısı bozulur (Motor: +0.31); CSM yorumcusu bu hamleyi hatalı buldu, motor eşite yakın görüyor.' },
        { move: '19.Qd2', text: 'Bxh6 tehdidiyle (Motor: +0.03–0.34 arası); Siyah ...Rd7 ile karşılık verir.' },
      ],
    },
    '19b': {
      text: '19...Nxd5: Siyah fili alır.',
      amac: 'Beyazın uzun çapraz filini oyundan çıkarmak; Beyaz şahının çevresi bu filden yoksun kalır.',
      neden: 'Motor 19...Nc4’ü biraz daha iyi buluyor (Motor: +0.13’e karşı +0.38): önce e3 filine saldırmak. Ama Nxd5 en doğal hamle ve Beyazın en tehlikeli taşını yok ediyor.',
      diger: [
        { move: '19...Nc4', text: '20.Bxc4 Rxc4 21.Rd4 sonrası Siyah aktif ve Beyazın artısı çok az (Motor: +0.13).' },
      ],
    },
    '20w': {
      text: '20.Rxd5: Kale d5’te; Beyaz bir piyon önde.',
      amac: 'Materyali korumak ve kaleyi merkezde aktif tutmak.',
      neden: 'Zorunlu bir geri alış: 20.Nxd5?? 20...Rxc1 ile vezir kaybedilir (Motor: −4.13), çünkü c-hattında Siyahın kalesi c1’deki veziri hedef alıyordu.',
      diger: [
        { move: '20.Nxd5', text: '20...Rxc1 ile vezir gider (Motor: −4.13).' },
      ],
    },
    '20b': {
      text: '20...Nc4: At aktif bir kareye gelir; e3 filine ve b2’ye saldırır.',
      amac: 'Atı merkezi bir karakola koymak, filin gücünü azaltmak ve c-hattında baskıyı artırmak.',
      neden: 'Siyahın piyon karşılığı taş aktifliğidir. Nc4, Spanton’ın bahsettiği “a5’teki atın c4’e ulaşması” planının gerçekleşmesidir.',
      diger: [
        { move: '20...b6', text: 'Sakin bir hamle (Motor: +0.64); at a5’te pasif kalır.' },
        { move: '20...b5', text: 'Alan kazanmak (Motor: +0.73); 21.Rc5 ile Beyaz c-hattına itiraz eder.' },
      ],
    },
    '21w': {
      text: '21.Bd4: Fil d4’te merkezi kontrol eder ve g7’ye bakar.',
      amac: 'Fili atın saldırısından kurtarıp en iyi merkezi kareye koymak; d4 aynı zamanda c3 atını da korur.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (+0.50). Spanton 21.Bxa7?!’yi daha zayıf buluyor: fil kenara gider ve Siyahın c-hattı baskısı artar.',
      diger: [
        { move: '21.Bc5', text: 'Fil c5’te (Motor: +0.15); ...Rec7 ile Siyah c-hattında tempo kazanır.' },
        { move: '21.Bxa7', text: 'Piyonu almak; fil kenarda kalır ve Siyahın c-hattı baskısı artar.' },
      ],
    },
    '21b': {
      text: '21...Rec7: Siyah kalelerini c-hattında toplar.',
      amac: 'c3 atına ve c-hattına baskıyı ikiye katlamak; Beyaz atı c-hattında bağlı kalır (arkasında Qc1).',
      neden: 'Keene bu hamleyi “amaçsız” buldu ve 21...b5’i önerdi; 9. oyundan sonra The Spectator, Karpov’un 9. oyunda değişiklik yapmasının sebebi olarak 21...b5!? gibi hazırlıkları gösterdi. Motor ise 21...Rec7’yi 21...Rd7 ile eşit görüyor (+0.34 / +0.36) ve 21...b5’i biraz daha zayıf buluyor (+0.55).',
      diger: [
        { move: '21...b5', text: 'Keene’nin önerisi (Motor: +0.55): 22.b4 Nb6 23.Rc5 ile Beyaz c5’e yerleşir.' },
        { move: '21...Rd7', text: 'd-hattına itiraz (Motor: +0.36): 22.Rd1 Rxd5 23.Nxd5 ile Beyazın aktif kalesi değişilir.' },
      ],
    },
    '22w': {
      text: '22.b3: Beyaz atı kovar.',
      amac: 'c4’teki güçlü atı geri çekilmeye zorlamak ve b2’yi saldırıdan kurtarmak.',
      neden: 'Mantıklı ve sağlam. CSM’ye göre Bronstein burada 22.Qf4’ü (yazıda tanımlayıcı notasyonla “Q-B4”) daha güçlü buldu. Motor üç hamleyi de yakın görüyor (b3 +0.17, Qf4 0.00). 22.Nb5 ilginç bir taktik ama sonunda beraberliğe gider.',
      diger: [
        { move: '22.Qf4', text: 'Bronstein’ın önerisi: vezir merkeze; 22...f6 23.h4 sonrası Motor: 0.00.' },
        { move: '22.Nb5', text: 'c7 kalesine saldırı: 22...Rd7 23.Rxd7 Qxd7 24.Nxa7 Qxh3 sonrası Siyah Beyaz şahına karşı oyun bulur ve sonuç eşittir (Motor: 0.00).' },
      ],
    },
    '22b': {
      text: '22...Nb6: At b6’ya çekilip d5 kalesine saldırır.',
      amac: 'Tempo ile kaleyi d5’ten kovalamak ve atı d5 karesine yaklaştırmak.',
      neden: 'Tek iyi hamle: 22...Qe6? 23.bxc4 Rxc4 sonrası Siyah bir taş eksik kalır (Motor: +2.51). Nb6 ise tempo kazanır.',
      diger: [
        { move: '22...Qe6', text: '23.bxc4 ile at kaybedilir (Motor: +2.51).' },
      ],
    },
    '23w': {
      text: '23.Re5: Kale e5’e gelir ve e8 vezirine saldırır.',
      amac: 'Kaleyi aktif tutmak ve Siyah veziri tempo ile kovalamak.',
      neden: 'e-hattında Beyaz kalesi Siyah vezire bakar. Motor 23.Ra5’i de eşit görüyor (+0.23); 23.Rd6? ise 23...Qe7 ile kaleyi sıkıştırır (Motor: −1.38).',
      diger: [
        { move: '23.Ra5', text: 'a7’ye baskı (Motor: +0.23): 23...f6 24.Qd2 ile benzer bir pozisyon.' },
        { move: '23.Rd6', text: 'Kale tuzağa girer: 23...Qe7 ve Siyah c3’e yüklenir (Motor: −1.38).' },
      ],
    },
    '23b': {
      text: '23...Qd7: Vezir d7’ye çekilir ve h3’e bakar.',
      amac: 'Veziri saldırıdan kurtarmak ve c8–h3 çaprazından h3 piyonunu hedef almak.',
      neden: 'En iyi hamle. Bg2’nin gitmesiyle h3 korumasız kaldı; Siyahın karşı oyunu bu piyona yöneliyor. 23...Qf8 daha pasifti (Motor: +0.75).',
      diger: [
        { move: '23...Qd8', text: 'Vezir d8’de (Motor: +0.33); h3’e baskı kurmaz.' },
        { move: '23...Qf8', text: 'Pasif (Motor: +0.75); 24.Qa1 ile Beyaz uzun çaprazı alır.' },
      ],
    },
    '24w': {
      text: '24.Qe3: Vezir e3’e; merkezi ve h6’yı kontrol eder.',
      amac: 'Veziri aktifleştirmek ve Re8+ fikrini canlı tutmak: 24...Qxh3? 25.Re8+ Kh7 26.Rxc8 ile kale değişimi.',
      neden: 'Motorun ilk tercihi (+0.14). 24.Qd2 ve 24.Rd1 daha zayıf (Motor: −0.27 ve −0.60): ilkinde ...Rd8, ikincisinde ...Nd5 ile Siyah aktifleşir.',
      diger: [
        { move: '24.Qd2', text: '24...Rd8 25.Rd1 Qc8 sonrası Siyah aktif (Motor: −0.27).' },
        { move: '24.Rd1', text: '24...Nd5 ile at c3’e saldırır (Motor: −0.60).' },
      ],
    },
    '24b': {
      text: '24...f6: Siyah e5 kalesini kovar.',
      amac: 'Aktif Beyaz kalesini e-hattından uzaklaştırmak ve e5 karesini kapatmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.03). 24...Qxh3 de oynanabilirdi (+0.18), ama Re8+ fikri yüzünden Kasparov önce kaleyi kovdu. f6 şahın çevresinde bir zayıflık yaratır ama g6 fili bunu kapatır.',
      diger: [
        { move: '24...Qxh3', text: '25.Rd1 Kh7 26.Re7 ile Beyaz kalesi yedinci yataya girer (Motor: +0.18).' },
        { move: '24...Kh7', text: 'Yavaş (Motor: +0.51); Beyaz Kh2 ile h3’ü korur.' },
      ],
    },
    '25w': {
      text: '25.Rc5: Kale c5’te değişim teklif eder.',
      amac: 'Siyahın c-hattındaki ikili kalesinden birini değişmek; Siyahın aktifliği azalır.',
      neden: 'Motorun ilk tercihi (Motor: +0.03). 25.Re6? ise 25...Bf5 ile kale tuzağa düşer (Motor: −2.07).',
      diger: [
        { move: '25.Ra5', text: '25...Qxh3 26.Rd1 sonrası Siyah piyonu geri alır (Motor: −0.14).' },
        { move: '25.Re6', text: '25...Bf5 ile kale kaçamaz (Motor: −2.07).' },
      ],
    },
    '25b': {
      text: '25...Rxc5: Değişim.',
      amac: 'Kale değişimini kabul etmek ve d4 filini c5’e çekmek.',
      neden: 'Diğer yollar daha kötü: 25...Rc6 26.Rxc6 Qxc6 (Motor: +0.32) ve 25...Bf7? 26.Rxc7 (Motor: +0.88).',
      diger: [
        { move: '25...Rc6', text: '26.Rxc6 Qxc6 27.Qd2 sonrası Beyaz rahat (Motor: +0.32).' },
      ],
    },
    '26w': {
      text: '26.Bxc5: Fil c5’e döner ve b6 atına saldırır.',
      amac: 'Materyali geri almak ve fili aktif bir kareye koymak.',
      neden: 'Zorunlu: 26.Rc1?? 26...Rxc3 ile taş kaybı (Motor: −5.09).',
    },
    '26b': {
      text: '26...Qxh3: Siyah piyonu geri aldı; materyal eşit.',
      amac: 'Kaybedilen d5 piyonunu h3 ile telafi etmek ve Beyaz şahının etrafını açmak.',
      neden: 'Kasparov’un 18...Bg6 ile başlattığı planın sonucu. Motor 26...Qc6’yı biraz daha iyi buluyor (Motor: +0.06’ya karşı +0.24): 27.Bxb6 Qxc3 28.Qxc3 Rxc3 ile hemen eşit bir oyunsonu.',
      diger: [
        { move: '26...Qc6', text: '27.Bxb6 Qxc3 28.Qxc3 Rxc3 29.Bxa7 Rc2 sonrası tam eşitlik (Motor: +0.06).' },
      ],
    },
    '27w': {
      text: '27.Rd1: Kale d-hattına döner.',
      amac: 'Ağır taşı açık hatta getirmek; d6 ve d7 karelerine girmeye hazırlanmak.',
      neden: 'Motor 27.Bxb6’yı biraz daha iyi görüyor (Motor: +0.41’e karşı 0.00): 27...axb6 sonrası Siyahın b-piyonları ikiye katlanır. Karpov fili tuttu, çünkü filin atla değişimi şah kanadında Beyazı yalnız bırakabilirdi.',
      diger: [
        { move: '27.Bxb6', text: '27...axb6 28.Rd1 sonrası Siyahın b-piyonları ikiye katlanır (Motor: +0.41).' },
        { move: '27.Bd6', text: 'Fil d6’da (Motor: 0.00); 27...Re8 ile Siyah aktif kalır.' },
      ],
    },
    '27b': {
      text: '27...h5?!: h-piyonu ilerler.',
      amac: 'Şah kanadında alan kazanmak ve ...h4 ile Beyaz şahını açmayı denemek.',
      neden: 'Keene bu hamleyi zaman sıkıntısındaki Kasparov’un gereksiz bir zayıflaması olarak niteledi; Spanton’a göre de motorlar 27...Be8’i tercih ediyor. Bizim motorumuz da 27...Be8! ile tam eşitlik görüyor (Motor: 0.00); oyunda Beyaz küçük bir avantaja geçti (+0.46).',
      diger: [
        { move: '27...Be8', text: '28.Bd6 Bc6 29.f3 sonrası fil uzun çaprazı tutar ve Siyah tamamen eşit (Motor: 0.00).' },
        { move: '27...Re8', text: '28.Qf4 Qc8 ile benzer bir denge (Motor: +0.30).' },
      ],
    },
    '28w': {
      text: '28.Rd4: Kale d4’te; dördüncü yatayı ve h4’ü kontrol eder.',
      amac: 'Kaleyi Rh4 fikriyle h5 piyonuna ve Siyah veziri sıkıştırmaya hazırlamak.',
      neden: 'Motorun ilk tercihi (+0.44). Kale merkezde de etkili: d6–d7 karelerine girebilir ve h4 ile ...h4 ilerlemesini durdurur.',
      diger: [
        { move: '28.Bxb6', text: '28...axb6 29.Rd4 ile benzer bir yapı (Motor: +0.36).' },
        { move: '28.Qd4', text: 'Vezir merkeze (Motor: +0.16); 28...h4 ile Siyah karşı oyun alır.' },
      ],
    },
    '28b': {
      text: '28...Nd7: At c5 filine saldırır.',
      amac: 'Filin baskısını kırmak ve atı e5 karesine getirmek.',
      neden: 'Motorun ilk tercihi (+0.16). 28...Bf7 29.Bxb6 axb6 ile b-piyonları ikiye katlanırdı (Motor: +0.60).',
      diger: [
        { move: '28...Re8', text: '29.Qf3 Qc8 sonrası denge (Motor: +0.29).' },
        { move: '28...Bf7', text: '29.Bxb6 axb6 ile yapı zayıflar (Motor: +0.60).' },
      ],
    },
    '29w': {
      text: '29.Bd6: Fil d6’ya; f8 ve b8’i kontrol eder.',
      amac: 'Fili saldırıdan kurtarıp Siyah atın kareleri (e5, f8) üzerinde baskı kurmak.',
      neden: 'Spanton’a göre 29.Bxa7 de oynanabilir ama risklidir; motor ikisini eşit görüyor (+0.26). Bd6 ile Beyaz piyon almak yerine Siyahın taşlarını kısıtlamayı seçti.',
      diger: [
        { move: '29.Bxa7', text: '29...Ne5 30.Rh4 Qd7 sonrası Siyahın taşları aktifleşir (Motor: +0.26).' },
        { move: '29.Bb4', text: '29...Ne5 30.Rh4 ile benzer (Motor: +0.13).' },
      ],
    },
    '29b': {
      text: '29...Bf7: Fil f7’ye; d5 karesini korur.',
      amac: 'Beyaz atın d5’e gelmesini önlemek ve şahın yakınını korumak.',
      neden: 'Motor 29...Kh7’yi biraz daha iyi buluyor (Motor: +0.11’e karşı +0.38). Bf7 sonrası Beyaz 30.Nd5 ile değişimi zorlar ve d5’te bir kale merkezde kalır.',
      diger: [
        { move: '29...Kh7', text: '30.Nd5 Re8 31.Qf3 sonrası Siyah aktif kalır (Motor: +0.11).' },
        { move: '29...Nb6', text: '30.f3 Rd8 31.Bc7 sonrası Beyaz biraz daha iyi (Motor: +0.23).' },
      ],
    },
    '30w': {
      text: '30.Nd5: At d5’e gelir ve fil değişimini zorlar.',
      amac: 'Merkezdeki en iyi kareyi işgal etmek; Siyah filini değişirse d5’te bir kale kalacak.',
      neden: 'Motorun ilk tercihi (+0.36). At e7’de çatal tehditleri de taşır: 30...Re8? 31.Ne7+ ile kale kaybedilir (Motor: +4.03).',
      diger: [
        { move: '30.Qd3', text: 'Sakin (Motor: +0.17); 30...a6 ile Siyah b5 hazırlar.' },
      ],
    },
    '30b': {
      text: '30...Bxd5: Siyah değişir.',
      amac: 'Merkezdeki güçlü atı yok etmek.',
      neden: 'Neredeyse zorunlu: 30...Re8? 31.Ne7+ ve 30...Nb6? 31.Ne7+ çatallarla taş kaybettirir (Motor: +4.0 civarı).',
      diger: [
        { move: '30...Re8', text: '31.Ne7+ Rxe7 32.Qxe7 ile kale kaybedilir (Motor: +4.03).' },
      ],
    },
    '31w': {
      text: '31.Rxd5: Kale d5’te aktif.',
      amac: 'Materyali geri almak ve kaleyi merkezde tutmak; kale buradan d7 ve h5’e bakar.',
      neden: 'Zorunlu geri alış; başka bir hamle taşı kaybettirir (örneğin 31.f3?? Motor: −4.90).',
    },
    '31b': {
      text: '31...a6: Siyah ...b5 için hazırlık yapar.',
      amac: 'Vezir kanadında alan kazanmak ve b7’yi ileride a6 ile desteklemek.',
      neden: 'Motor 31...b6’yı biraz daha iyi buluyor (Motor: +0.35’e karşı +0.51) çünkü a7 piyonu yerinde kalır. ...a6 sonrası b7 ileride Beyaz vezirinin hedefi olacak; bu, 37. hamledeki krizi hazırlar.',
      diger: [
        { move: '31...b6', text: '32.a4 Nf8 sonrası Siyah sağlam (Motor: +0.35).' },
        { move: '31...Nf8', text: '32.Bxf8 Kxf8 ile at fille değişilir (Motor: +0.41).' },
      ],
    },
    '32w': {
      text: '32.Bf4: Fil f4’e; b8 ve h6’ya bakar.',
      amac: 'Fili şah kanadına ve b8–h2 çaprazına getirmek; Siyah şahına karşı vezir–fil işbirliği.',
      neden: 'Motor 32.Qd2’yi daha iyi buluyor (Motor: +0.50’ye karşı +0.26). Bf4 sonrası 32...Kh8? 33.Rd6 gibi taktikler oyunda kalır (Motor: +1.13).',
      diger: [
        { move: '32.Qd2', text: '32...b5 33.a4 sonrası vezir kanadında Beyaz baskısı artar (Motor: +0.50).' },
        { move: '32.a4', text: '32...Nf8 33.Bxf8 Kxf8 34.b4 ile vezir kanadında alan (Motor: +0.46).' },
      ],
    },
    '32b': {
      text: '32...Nf8: At f8’e; şahı savunur ve e6’ya gidebilir.',
      amac: 'Şahın yakınına bir savunucu getirmek ve atı e6 üzerinden aktifleştirmek.',
      neden: 'Motorun ilk tercihi (+0.18). 32...Kh8? 33.Rd6 ve 32...Qg4? 33.f3 ise Beyaza belirgin avantaj verirdi (Motor: +1.1 civarı).',
      diger: [
        { move: '32...Kh8', text: '33.Rd6 h4 34.gxh4 sonrası Beyaz baskı kurar (Motor: +1.13).' },
      ],
    },
    '33w': {
      text: '33.Qd3: Vezir d3’te; g6 ve d-hattına bakar.',
      amac: 'Veziri merkezileştirmek ve g6 karesi üzerinden Siyah şahına baskı yapmak.',
      neden: 'Motor 33.Qe4 ve 33.Qf3’ü biraz daha iyi buluyor (Motor: +0.34’e karşı +0.08); Qf3 h5 piyonuna saldırır. Qd3 sonrası Siyah ...Qg4 ile aktifleşebildi.',
      diger: [
        { move: '33.Qf3', text: 'h5’e saldırı: 33...Qg4 34.Rxh5 Qxf3 35.exf3 ile Beyaz bir piyon önde (Motor: +0.34).' },
        { move: '33.Qe4', text: '33...Qe6 34.Qf3 ile benzer (Motor: +0.34).' },
      ],
    },
    '33b': {
      text: '33...Qg4?!: Vezir g4’te aktif ama f3 ile kovalanacak.',
      amac: 'Veziri e2 ve d1 karelerine yöneltmek ve Beyaz şahına baskı yapmak.',
      neden: 'Spanton’a göre motorlar 33...h4 veya 33...Ne6’yı öneriyor; bizim motorumuz da aynı (Motor: +0.13 / +0.23’e karşı +0.36). f3 ile kovulunca Siyah vezir zaman kaybeder.',
      diger: [
        { move: '33...h4', text: '34.gxh4 Qxh4 sonrası Siyah h-piyonunu değişir ve şahını rahatlatır (Motor: +0.13).' },
        { move: '33...Ne6', text: '34.Be3 Qg4 ile at aktifleşir (Motor: +0.23).' },
      ],
    },
    '34w': {
      text: '34.f3: Vezir kovulur.',
      amac: 'Siyah veziri g4’ten uzaklaştırmak ve e4 karesini kontrol etmek.',
      neden: 'Spanton’a göre motorlar 34.Rd6!’yı daha güçlü buluyor. Bizim motorumuz iki hamleyi eşit görüyor (f3 +0.28, Rd6 +0.25). f3 şahın önünü biraz açsa da e2 ve g3’ü korumaya devam eder.',
      diger: [
        { move: '34.Rd6', text: '34...Ng6 35.Rd4 Nxf4 36.Rxf4 sonrası Beyaz biraz daha iyi (Motor: +0.25).' },
      ],
    },
    '34b': {
      text: '34...Qg6: Vezir g6’dan d3 vezirine bakar.',
      amac: 'Vezir değişimini teklif etmek veya Beyaz veziri pasifleştirmek.',
      neden: 'Motorun ilk tercihi (+0.02). 34...Qe6? 35.Rxh5 ile bir piyon kaybettirir (Motor: +1.50).',
      diger: [
        { move: '34...Qe6', text: '35.Rxh5 g5 36.Be3 sonrası Beyaz bir piyon önde (Motor: +1.50).' },
      ],
    },
    '35w': {
      text: '35.Kf2: Şah f2’ye; e2 ve g3’ü korur.',
      amac: 'Şahı merkeze yaklaştırmak ve vezir değişiminden sonra oyunsonu için hazırlanmak.',
      neden: 'Motor 35.Qd2 ve 35.Kf2’yi eşit görüyor (+0.07 / +0.06). Şah f2’de e2 piyonunu korur; bu, Siyahın ...Rc2 fikrine karşı önemlidir.',
      diger: [
        { move: '35.Qd2', text: '35...Qc2 36.Kf2 Qxd2 37.Rxd2 sonrası eşit bir oyunsonu (Motor: +0.07).' },
      ],
    },
    '35b': {
      text: '35...Rc2?!: Kale ikinci yatayda aktif.',
      amac: 'e2 ve a2 piyonlarına baskı yapmak ve vezir değişiminden kaçmak.',
      neden: 'Keene bunu “çırpınma” olarak niteledi ve 35...Qxd3’ü önerdi; Mark Weeks ve CSM’ye göre bu, zaman sıkıntısında yapılan bir hataydı. Motor da 35...Qxd3 36.Rxd3 Kf7 ile tam eşitlik görüyor (0.00), oyunda +0.50. Kale 36.Qe3! sonrası hemen geri dönmek zorunda kaldı.',
      diger: [
        { move: '35...Qxd3', text: '36.Rxd3 Kf7 37.Be3 g5 sonrası eşit bir oyunsonu (Motor: 0.00). CSM yorumcusu da 35...Qxd3 ve ...Kf7 ile Siyahın beraberlik şansı olduğunu yazdı.' },
        { move: '35...Qf7', text: '36.a3 Re8 sonrası Beyaz biraz daha iyi (Motor: +0.40).' },
      ],
    },
    '36w': {
      text: '36.Qe3!: Vezir e3’e; e2’yi korur ve e7’ye girmeye hazırlanır.',
      amac: 'Kale c2’ye gittiği için birinci yatay boş: Beyaz 37.Rd8 ile bağlı f8 atına yüklenmek istiyor.',
      neden: 'CSM yorumcusu bu hamleyi güçlü buldu: Kasparov’u bir önceki hamlesini geri almaya zorladı. Spanton da 36.Qe3’e “!” veriyor ve Siyahın tek savunması olduğunu yazıyor. Motor 36.Qd4’ü biraz daha iyi görüyor (+0.52’ye karşı +0.44).',
      diger: [
        { move: '36.Qd4', text: '36...Ne6 37.Qe3 Nxf4 38.Rd8+ sonrası benzer (Motor: +0.52).' },
        { move: '36.a4', text: '36...Qxd3 37.Rxd3 Kf7 ile Siyah vezirleri değişir (Motor: +0.01).' },
      ],
    },
    '36b': {
      text: '36...Rc8: Kale birinci yatayı korumak için geri döner.',
      amac: 'f8 atını korumak ve Rd8 tehdidine karşı durmak.',
      neden: 'Tek savunma: 36...f5? 37.Rd8 Qf6 38.Bg5 ile Siyah taş kaybeder (Motor: +2.56); 36...h4? 37.Rd8 de aynı (Motor: +3.10).',
      diger: [
        { move: '36...f5', text: '37.Rd8 Qf6 38.Bg5 ile at düşer (Motor: +2.56).' },
      ],
    },
    '37w': {
      text: '37.Qe7: Vezir yedinci yatayda b7 ve f7’ye bakar.',
      amac: 'b7 piyonuna saldırmak ve Siyah şahına yakın bir kareden baskı kurmak.',
      neden: 'Motorun ilk tercihi (+0.73). Qe7 sonrası Siyah ya vezirleri değişmek ya da b7’yi savunmak zorunda; ikisi de Siyahı zor kararlara iter.',
      diger: [
        { move: '37.a4', text: '37...Qf7 38.Qd3 ile yavaş bir baskı (Motor: +0.57).' },
      ],
    },
    '37b': {
      text: '37...b5?: Kritik zayıflama.',
      amac: 'b7 piyonunu Qe7’nin saldırısından kurtarmak.',
      neden: 'Spanton ve CSM yorumcusu 37...Qf7’yi gösteriyor: vezir d5 kalesine saldırır ve 38.Qxf7+ Kxf7 39.Rxh5 g5 ile Siyahın beraberlik şansı yüksek (Motor: +0.45). 37...b5 sonrası a6 piyonu korumasız kalır; 38.Rd8 ile kaleler değişilir ve Beyaz veziri a6’ya gelir (Motor: +2.0 ile +2.4).',
      diger: [
        { move: '37...Qf7', text: '38.Qxf7+ Kxf7 39.Rxh5 g5 40.Bd6 Ne6 sonrası Siyahın beraberlik şansı yüksek (Motor: +0.45).' },
        { move: '37...Qe8', text: '38.Qxb7 Qe6 39.Rd6 ile Beyaz bir piyon önde (Motor: +1.57).' },
      ],
    },
    '38w': {
      text: '38.Rd8!: Kaleler değişilir ve Siyahın c8 kalesi birinci yatayı terk eder.',
      amac: 'Siyahın tek ağır savunucusunu değişmek; ardından vezir f8 atını bağlayacak ve vezir kanadına girecek.',
      neden: 'Motor 38.Qb7 ve 38.Qd6’yı da neredeyse aynı güçte görüyor (+2.2 / +2.1 / +2.06). Rd8 en temiz yol: değişimden sonra Siyahın kalesi kalmaz ve a6 düşer.',
      diger: [
        { move: '38.Qb7', text: '38...Qf7 39.Qxa6 Qxd5 40.Qxc8 sonrası Beyaz kazanır (Motor: +2.23).' },
        { move: '38.Qd6', text: '38...Qf7 39.Qxa6 sonrası aynı fikir (Motor: +2.10).' },
      ],
    },
    '38b': {
      text: '38...Rxd8: Değişim zorunlu.',
      amac: 'Kaleyi kurtarmak; başka bir hamle taş kaybettirir.',
      neden: '38...Qf7? 39.Qxf7+ Kxf7 40.Rxc8 ile kale gider (Motor: +5.63).',
    },
    '39w': {
      text: '39.Qxd8: Vezir d8’de; f8 atını bağlar.',
      amac: 'Atı bağlamak ve vezir kanadına girme imkânı aramak.',
      neden: 'Zorunlu geri alış. Vezir d8’de hem f8’e hem de a5–d8 çaprazına bakar.',
    },
    '39b': {
      text: '39...Qf7: Vezir f7’den f8’i korur.',
      amac: 'Atın savunmasını güçlendirmek; aksi halde Bd6 ile at düşer.',
      neden: 'Motorun ilk tercihi (+2.35). 39...a5? 40.Qd5+ ile b5 düşer (Motor: +3.09).',
      diger: [
        { move: '39...a5', text: '40.Qd5+ Qf7 41.Qxb5 ile bir piyon gider (Motor: +3.09).' },
      ],
    },
    '40w': {
      text: '40.Bd6: f8 atı bağlandı; fil ona saldırır.',
      amac: 'Atı bağlı tutmak ve Siyah veziri pasif bir kareye mahkûm etmek; vezir sonra a8’e gidecek.',
      neden: 'Motorun ilk tercihi (+2.35). Zaman kontrolü 40. hamlede doluyordu; Karpov güvenli ve güçlü bir hamleyle kontrolü geçti.',
      diger: [
        { move: '40.Qb8', text: '40...Kh7 41.Qa8 Ng6 ile at kurtulur (Motor: +0.86).' },
      ],
    },
    '40b': {
      text: '40...g5: Siyah şahına alan açar.',
      amac: 'Şaha g7 karesini vermek ve atı savunacak bir taş daha getirmek.',
      neden: 'Motor 40...Qa7+ ile vezirin önce aktif olmasını biraz daha iyi buluyor (+2.16’ya karşı +2.44). g5 yeni bir zayıflık yaratır ama Siyahın zaten iyi bir seçeneği yoktu.',
      diger: [
        { move: '40...Qa7+', text: '41.Kf1 Qf7 42.Qa8 g5 ile benzer bir pozisyon (Motor: +2.16).' },
      ],
    },
    '41w': {
      text: '41.Qa8: Vezir a8’den a6’ya saldırır.',
      amac: 'Vezir kanadındaki zayıf piyonları (a6, b5) toplamak.',
      neden: 'Motorun ilk tercihi (+2.33). 37...b5’in sonucu burada görülüyor: a6 artık korunamaz.',
      diger: [
        { move: '41.Qc8', text: '41...a5 42.Qb8 sonrası Beyaz yine kazanır ama daha yavaş (Motor: +2.11).' },
      ],
    },
    '41b': {
      text: '41...Kg7: Şah g7’ye; f8’i korur.',
      amac: 'Atı şahla korumak; vezir f7’den serbest kalabilsin.',
      neden: 'Motor 41...h4 ve 41...f5’i biraz daha iyi buluyor (+2.59 / +2.63), ama hepsinde a6 düşer.',
      diger: [
        { move: '41...h4', text: '42.gxh4 gxh4 43.Bxf8 Qxf8 sonrası Beyaz yine kazanır (Motor: +2.59).' },
      ],
    },
    '42w': {
      text: '42.Qxa6: a6 düşer; b5 de düşecek. Oyun bu noktada ertelendi ve Kasparov oyuna devam etmeden terk etti.',
      amac: 'Vezir kanadındaki piyonları toplayıp a ve b-piyonlarını birbirine bağlı geçer piyon yapmak.',
      neden: 'Motorun ilk tercihi (+2.82). Keene bunu belirleyici buldu; CSM yorumcusu da b5’in de düşeceğini ve pozisyonun umutsuz olduğunu yazdı. Beyazın iki bağlı geçer piyonu karşısında Siyahın karşı oyunu yoktu.',
      diger: [
        { move: '42.Bb4', text: '42...Ne6 43.Qxa6 sonrası aynı sonuç (Motor: +1.80).' },
      ],
    },
  },
  qa: [
    { q: 'Kasparov neden Tarrasch Savunmasını seçti?', a: 'Kasparov 1984 Adaylar finalinde Smislov’a karşı bu savunmayı beş kez kullanmış ve kaybetmemişti; Bisguier’nin CSM yazısına göre Smislov’un Tarrasch’ı çürütememesi, onun maçta hiç oyun kazanamamasının ana sebebiydi. Tarrasch, Siyaha tek piyon karşılığında aktif taşlar ve dinamik oyun verir; bu da Kasparov’un tarzına uyuyordu. Ama Karpov’un 12.Qb3 ve 14.Nf5 fikirleri bu güveni sarstı.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'İlk avantaj yapısaldı: d5’teki tek piyon ve onun önündeki d4 karesi. Karpov 14.Nf5 ve 15.Nxe7+ ile Siyahın koyu kareli filini değişti, 18.Bxd5 ile piyonu kazandı. Siyah materyali geri aldıktan sonra avantaj taş kalitesine kaydı: Beyazın kalesi d5’te, fili d6/f4’te aktifti, Siyahın atı f8’de pasifti. Ama motor 26...Qxh3 sonrası oyunu eşite yakın görüyor; kesin avantajı 37...b5 hatası verdi.' },
    { q: 'Karpov neden 18.Bxd5 ile piyonu aldı, bedeli neydi?', a: 'Bütün plan d5’i kazanmaya yönelikti, bu yüzden 18.Bxd5 mantıklı bir sonuçtu. Bedeli g2 filiydi: d5’te Siyah atıyla değişildi ve Beyaz şahının çevresindeki beyaz kareler zayıfladı. Kasparov 18...Bg6 ve 23...Qd7 ile h3’ü hedef aldı ve 26...Qxh3 ile piyonu geri aldı. Spanton bu hamleyi “fazla açgözlü olabilir” diye niteledi; motor 18.Rc1 (+0.37) ve 18.Bd4’ü (+0.30) biraz daha iyi buluyor.' },
    { q: 'Siyah nerede kolayca kurtulabilirdi?', a: 'Motor üç an gösteriyor. Birincisi 27...Be8! (0.00): fil c6’ya gelip uzun çaprazı tutardı. İkincisi 35...Qxd3 36.Rxd3 Kf7 (0.00): vezirler gidince Beyazın vezir kanadına girme imkânı kalmazdı. Üçüncüsü 37...Qf7! (+0.45): vezir d5 kalesine saldırır ve vezir değişimi zorlanırdı. Kasparov bunların hepsinde aktif kalmayı tercih etti.' },
    { q: '37...b5 neden kaybettiren hataydı?', a: 'b7 piyonu Qe7 tarafından saldırı altındaydı ve Kasparov onu ileri sürerek kurtarmak istedi. Ama b5 sonrası a6 piyonunu koruyacak bir piyon kalmadı. 38.Rd8! Rxd8 39.Qxd8 sonrası vezir f8 atını bağladı, 40.Bd6 ile bağ sertleşti ve 41.Qa8 ile vezir a6’ya ulaştı. Motor değerlendirmesi +0.45’ten +2.0’nin üzerine çıktı.' },
    { q: 'Siyah neden 14...Rc8 oynadı, 14...Bb4 değil?', a: 'Kasparov fil değişimini kabullenip gelişimi tamamlamayı seçti; Spanton’a göre 14...Rc8 bir yenilikti. CSM yorumcusu bunu “rutin” bulup 14...Bb4 veya 14...Bf8’i önerdi; Wilder ve Chandler de 14...Bb4’ü tercih ediyormuş. Motor 14...Bb4 ile 14...Rc8’i eşit görüyor (+0.53 / +0.50); 14...Bf8 ise daha zayıf (+0.86).' },
    { q: 'Karpov 9. oyunda neyi değiştirdi?', a: 'The Spectator’a göre 9. oyunda (yine Tarrasch) hamleler 15. hamleye kadar aynıydı. Karpov 15.Nxe7+ yerine 15.Bd4 oynadı; yorumcu bunun Kasparov’un ekibinin 21...b5!? gibi hazırlıklarından çekinmesinden kaynaklanmış olabileceğini yazdı. Karpov o oyunu da uzun bir oyunsonunda kazandı ve skoru 4–0’a getirdi.' },
    { q: 'Bu oyunda zaman sıkıntısının rolü neydi?', a: 'Mark Weeks’e göre Kasparov 15. ve 16. hamlelerinde yarım saat düşündü. Keene 27...h5’i zaman sıkıntısındaki Kasparov’un hamlesi olarak, Mark Weeks ve CSM de 35...Rc2’yi zaman sıkıntısı hatası olarak niteliyor. Zaman kontrolü 40. hamlede doluyordu; kesin hata 37...b5 da bu aralıkta geldi.' },
  ],
  sources: [
    { title: 'Christian Science Monitor: The game that brought Karpov halfway toward retaining his title (1984)', url: 'https://www.csmonitor.com/1984/1017/101708.html' },
    { title: 'The Spectator, 6 Ekim 1984: Chess (Raymond Keene, 6. ve 7. oyun)', url: 'https://archive.spectator.co.uk/article/6th-october-1984/40/chess' },
    { title: 'The Spectator, 13 Ekim 1984: Chess (9. oyun, 7. oyunla karşılaştırma)', url: 'https://archive.spectator.co.uk/article/13th-october-1984/44/chess' },
    { title: 'beauchess (Tim Spanton): Garry Kasparov’s forgotten weapon', url: 'https://beauchess.blogspot.com/2021/01/garry-kasparovs-forgotten-weapon_11.html' },
    { title: 'Mark Weeks: 1984–85 Karpov – Kasparov Dünya Şampiyonası maçı', url: 'https://www.mark-weeks.com/chess/84kk%24%24.htm' },
    { title: 'Christian Science Monitor: Vassily Smyslov couldn’t beat Dr. Tarrasch in Kasparov match', url: 'https://www.csmonitor.com/1984/0423/042311.html' },
    { title: 'Wikipedia: Tarrasch Defense', url: 'https://en.wikipedia.org/wiki/Tarrasch_Defense' },
  ],
  exercises: [
    { id: 'kk-1', kind: 'tekrar', plan: true, title: 'İyi fili hedefleyin',
      source: 'Karpov – Kasparov, 1984, 7. oyun (14. hamle)',
      fen: 'r2qr1k1/pp2bpp1/5n1p/n2p4/3N2b1/2N1B1P1/PPQ1PPBP/R4RK1 w - - 6 14',
      prompt: 'Siyahın taşları aktif. Tek kalmış piyona karşı oynayan taraf olarak hangi taşla değişime gidersiniz?',
      hint: 'd4 atı Siyahın koyu kareli filine ulaşabilir.',
      line: ['Nf5'],
      explanation: '**14.Nf5!** At e7 filine ve h6’ya saldırır. Ardından **Nxe7+** ile Beyaz fil çiftini alır ve Siyahın koyu karelerdeki en iyi savunucusu gider. Motor: Nf5 +0.4, sonraki en iyi hamle +0.3.',
      link: 'Tek kalmış piyona karşı her taş değişimi Beyazın işine yarar; özellikle tek piyonu ve koyu kareleri savunan fil.' },
    { id: 'kk-2', kind: 'tekrar', plan: true, title: 'Birinci yatayı boşaltın',
      source: 'Karpov – Kasparov, 1984, 7. oyun (38. hamle)',
      fen: '2r2nk1/4Q1p1/p4pq1/1p1R3p/5B2/1P3PP1/P3PK2/8 w - - 0 38',
      prompt: 'Kasparov ...b5 ile vezir kanadını zayıflattı. Karpov hangi hamleyle Siyahın tek savunma kalesini oyundan çıkardı?',
      hint: 'Kale d-hattından birinci yatayın sonuna kadar gidebilir.',
      line: ['Rd8'],
      accept: { 0: ['Qb7', 'Qa7', 'Qa3'] },
      explanation: '**38.Rd8!** Kaleler değişilir, 38...Rxd8 39.Qxd8 sonrası vezir f8 atını bağlar ve vezir kanadındaki a6 ile b5 savunmasız kalır. Motor 38.Qa3, 38.Qa7 ve 38.Qb7’yi de neredeyse aynı güçte görüyor; hepsinde fikir aynı: Beyaz veziri zayıflayan vezir kanadına girer.',
      link: 'Tek kalmış piyon oyunu bittikten sonra da ders aynı: zayıflıkları sabitle, taşları değiş ve vezirle zayıf piyonlara gir.' },
    { id: 'kk-3', kind: 'transfer', plan: true, title: 'Zayıf karede at',
      source: 'Karpov – Illescas, Leon 1993 (23. hamle)',
      fen: 'r2qr1k1/p2b1pp1/2pb2np/3p4/NP6/P1Q1B1PP/4PPB1/2RR2K1 w - - 5 23',
      prompt: 'Aynı Tarrasch yapısı, ama Karpov Nxc6 ile tek piyonu c6-d5 piyonlarına dönüştürdü. c6 piyonu geri kaldı. Atınız için en iyi kare hangisi?',
      hint: 'c6’nın önündeki kare piyonla korunamaz.',
      line: ['Nc5'],
      explanation: '**23.Nc5!** At c6 piyonunun önündeki zayıf kareye yerleşir ve d7 filine saldırır. 23...Bxc5 24.Bxc5 sonrası Beyaz fil çiftini ve koyu kareleri alır. Motor 23.Qd2’yi de aynı güçte görüyor (+1.0); Nc5 ise pozisyonun fikrini en açık gösteren hamle.',
      link: 'Karpov – Kasparov’da at d4’te tek piyonun önünü kapattı; burada c5’te geri kalmış c6 piyonunun önünü kapatıyor. Fikir aynı: zayıf piyonun önündeki kare en iyi karakoldur.' },
    { id: 'kk-4', kind: 'transfer', plan: false, title: 'Zinciri tabanından kır',
      source: 'Karpov – Illescas, Leon 1993 (32. hamle)',
      fen: '6k1/p3rpp1/2p1b2p/2Rpn3/1P2P3/P5PP/5K2/3R1B2 w - - 1 32',
      prompt: 'Oyunsonu. Siyahın c6 ve d5 piyonları birbirini destekliyor. Bu zinciri nasıl kırarsınız?',
      hint: 'd5’i koruyan piyona saldırın.',
      line: ['b5'],
      explanation: '**32.b5!** c6 piyonuna saldırılır. 32...cxb5 33.exd5 sonrası Beyazın d-hattında geçer piyonu oluşur ve 34.d6 ile ilerler. Motor: b5 +4.4, sonraki en iyi hamle +3.5.',
      link: 'Karpov – Kasparov’da Beyaz d5’e taşlarla yüklendi; burada önce destekleyen c6 piyonunu ortadan kaldırıyor. İki maçta da hedef d5 piyonu.' },
  ],
};
