// Çigorin – Tarrasch, Ostende turnuvası, Ostende 1907 (1. tur). Kaynak: PgnMentor (Chigorin.pgn).
export default {
  id: 'chigorin-tarrasch-1907',
  theme: '...d4 ile alan, g-hattı ve uzun çaprazda bağ',
  white: 'Mihail Çigorin', black: 'Siegbert Tarrasch',
  whiteShort: 'Çigorin', blackShort: 'Tarrasch',
  event: 'Ostende turnuvası', site: 'Ostende', year: 1907, eco: 'B23',
  variation: 'Kapalı Sicilya, 2.Nc3 e6 3.g3 d5 4.exd5 exd5 5.Bg2', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. exd5 exd5 5. Bg2 Nf6 6. d3 Be7 7. Nge2 d4 8. Ne4 O-O 9. O-O Nc6 10. Nf4 Ne5 11. Nxf6+ Bxf6 12. Nd5 Bg4 13. f3 Be6 14. Nxf6+ Qxf6 15. f4 Nc6 16. Qh5 Bf5 17. g4 g6 18. Qh3 Bd7 19. f5 gxf5 20. Be4 Ne7 21. Bh6 Rfe8 22. gxf5 Kh8 23. Kh1 Rg8 24. Rae1 Rae8 25. Bd2 Bc6 26. Rf4 Rg7 27. Rf3 Reg8 28. Bxc6 Qxc6 29. Rf1 Rg4 30. Be1 Nxf5 0-1`,

  summary: 'Ostende 1907’nin “Şampiyonlar turnuvası”nda oynanan bu oyunu **Siyah (Tarrasch) kazandı**; Çigorin 30. hamleden sonra terk etti. Wikipedia’ya göre bu altı kişilik, dört devreli turnuvayı Tarrasch 12½ puanla kazandı, Çigorin ise 4½ puanla son oldu. Oyunun hikâyesi iki parçadır. **Birinci parça:** Tarrasch açılışta 7...d4 ile merkezde alan aldı ve c3 atını yerinden etti; ama 13...Be6?! küçük bir yanlıştı. Fil e6’da f-piyonunun hedefi oldu ve Çigorin 15.f4, 17.g4, 19.f5 ile şah kanadında piyonlarını yürüttü (Motor 13...Be6’dan sonra +1.4). **İkinci parça:** Bu piyon yürüyüşü Beyazın kendi şahının önündeki g-hattını da açtı. Tarrasch soğukkanlı savundu: 22...Kh8! ile şahını hattan çekti, 23...Rg8 ve 26...Rg7, 27...Reg8 ile kalelerini **g-hattında ikiledi**, 25...Bc6 ile filini uzun çapraza koydu. Çigorin 28.Bxc6? ile filleri değişince Siyah veziri c6’ya geldi ve **c6-h1 çaprazında f3 kalesini h1 şahına bağladı**. 29.Rf1?? (doğrusu 29.f6 ya da 29.Bh6; ikisinden sonra da Siyah yalnızca biraz daha iyi) e3 karesini savunan kaleyi oradan çekti; **29...Rg4!** vezirin h3-f5 çaprazını kesip f5 piyonunu savunmasız bıraktı ve 30...Nxf5 ile at e3’e yönelince Beyazın savunması çöktü (Motor: −5.7).',
  intro: 'Kapalı Sicilya’da Beyaz 2.Nc3 ve g3-Bg2 ile merkezi açmadan oynar; Siyahın en doğrudan cevaplarından biri 2...e6 ve 3...d5 ile merkezde hemen hak iddia etmektir. Exeter Satranç Kulübü’nün Kapalı Sicilya yazısındaki bir notun dediği gibi ...d5, kanat oyununa karşı “klasik merkezî cevap”tır. Motor da bu fikre hak veriyor: 3.g3 d5 sonrası konum tam eşittir (0.00); bu yüzden günümüzde Beyaz 2...e6’ya karşı çoğunlukla 3.Nf3 ya da 3.Nge2 oynar. Modülün ana sırası 4.Bg2’dir; Çigorin ise önce **4.exd5 exd5** ile merkezde değişti ve fili ancak **5.Bg2** ile getirdi. 4.Bg2 Nf6 5.exd5 exd5 sırası da aynı konuma çıkar. Bu değişimle Beyaz ...dxe4 ve ...d4 seçeneklerinden birini Siyahın elinden alır, d5 piyonunu uzun çaprazdan hedef yapar; buna karşılık Siyaha açık e-hattı ve rahat gelişim verir. Siyahın ana fikri doğru anda **...d4** oynayıp c3 atını kovmak, böylece merkezde alan ve c3/e3 karelerinde kontrol kazanmaktır. Bu oyun, Tarrasch’ın “alan” anlayışını ve açık hatları sabırla kullanmasını; Çigorin’in ise saldırgan ama sonunda fazla iddialı şah kanadı oyununu gösterir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**g3-Bg2 ve d3** ile sağlam bir kuruluş kurmak; uzun çaprazdaki fil önce d5 piyonuna, ...d4’ten sonra da b7’ye ve dolaylı olarak a8 kalesine bakar.',
      '...d4’ten sonra atı **e4**’e getirip f6 atını değişmek; ikinci atla (Nge2-f4-d5) Siyahın kara karelı filini de alıp fil çiftini ortadan kaldırmak.',
      '**f3-f4-f5 ve g4** ile şah kanadında piyon çoğunluğunu harekete geçirmek; e6 filine ve e5 atına tempo kazanmak.',
      'Vezir h5/h3 ve fil h6 ile g7 ve h7 karelerine baskı kurmak; f5-f6 fikriyle Siyah şahını boğmak.',
      'Piyonlar ilerledikten sonra kendi şahını korumak: g-hattı açılınca şahı h1’e çekip kaleyle üçüncü yatayı (Rf3) savunmak.',
      'Oyunda yapılan hata: 28.Bxc6 ile beyaz kareli fili değişip uzun çaprazı açmak ve 29.Rf1 ile e3 karesini savunan kaleyi oradan çekmek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...d4** ile alan kazanmak ve c3 atını kovmak; d4 piyonu Beyazın c3 ve e3 karelerini sürekli kontrol eder ve sonunda atın e3’e girmesini destekler.',
      'Hızlı gelişim: ...Nf6, ...Be7, ...O-O, ...Nc6 ve at **e5** üzerinden d3, f3, c4 ve g4 karelerine baskı.',
      'Beyazın piyon yürüyüşüne karşı soğukkanlı savunma: 17...g6, 18...Bd7 ve 20...Ne7 ile f5 karesini tutmak, gereksiz zayıflık yaratmamak.',
      'g-hattı açılınca **şahı h8’e çekip (22...Kh8!)** kaleleri g-hattında ikilemek; Beyaz piyonlarının açtığı hattı kendi lehine kullanmak.',
      'Fili **uzun çapraza (...Bc6)** koyup e4 filini değişmeye zorlamak; değişimden sonra veziri c6’da tutup f3 kalesini h1 şahına bağlamak.',
      '**...Rg4 ve ...Nxf5** ile vezirin f5 piyonunu savunmasını kesmek, ardından atı e3’e getirip bağlı kaleyi ve şahı hedef almak.',
    ] },
  },
  critical: [
    { move: '7b', title: '...d4: alan ve tempo', text: 'Siyah, d5 piyonu uzun çaprazdan baskı altındayken onu savunmak yerine ileri sürer. Piyon c3 atını kovar; d4’te Beyazın c3 ve e3 karelerini kontrol eder ve Beyazın c2-c3 ya da f2-f4-e4 gibi merkez hamlelerini zorlaştırır. Motor bu hamleyi, 7...Nc6 ve 7...O-O ile birlikte en iyi seçenekler arasında görüyor (0.00). Oyunun sonunda atın e3’e girmesini destekleyecek olan da bu piyondur.' },
    { move: '13b', title: '...Be6?! f4-f5’e tempo veriyor', text: 'Motor 13...Bd7’yi öneriyor (+0.2): fil sonra ...Bc6 ile uzun çapraza geçer ve f-piyonunun saldırısından uzak durur. 13...Be6 ise fili Beyaz piyonlarının önüne koyar: 14.Nxf6+ Qxf6 15.f4 e5 atını kovar, 16.f5 tehdidi fili de kovacaktır. Beyaz bu şekilde şah kanadında birkaç tempo kazanır. Değerlendirme +0.2’den +1.4’e çıkar; oyunun ilk yarısında Beyazın elde ettiği tek gerçek avantaj buradan gelir.' },
    { move: '16w', title: '16.Qh5: f5’i ertelemek', text: 'Motor hemen 16.f5’i öneriyor (+0.9): fil d7’ye çekilmek zorundadır ve Beyaz Qh5, Bg5 ile tempolu saldırısını sürdürür. 16.Qh5 ise Siyaha 16...Qf5! ile vezir değişimini teklif etme imkânı verirdi (+0.2); vezirler giderse Beyazın saldırısı da gider. Tarrasch bu fırsatı görmeden 16...Bf5 oynadı ve Beyaz 17.g4 ile avantajını geri aldı (+1.3).' },
    { move: '22b', title: '...Kh8! g-hattından çekilmek', text: 'g-hattı açıldı; Beyaz Qg3+ ve Bg5 ile vezire saldırmayı tehdit ediyor. 22...Bc6? 23.Qg3+ Kh8 24.Bg5 Qxg5 25.Qxg5 sonrası Siyah vezirini fil karşılığında verir (Motor: +3.0). 22...Kh8! ile şah hattan çekilir, g8 karesini kaleye bırakır ve 24.Bg5’in vezire şahla birlikte saldırması tehdidi ortadan kalkar. Bu, Tarrasch’ın savunmasının dönüm noktasıdır: aynı g-hattı birkaç hamle sonra Siyahın saldırı yolu olacaktır.' },
    { move: '23w', title: '23.Kh1: şah uzun çaprazın ucuna', text: 'Beyaz da şahını g-hattından çeker; ama h1, a8-h1 çaprazının son karesidir. Motor 23.Rf3’ü öneriyor (+0.8/+1.0): kale üçüncü yatayı ve g3 karesini tutar, şah g1’de kalır. 23.Kh1 tek başına kötü değildir (+0.5), ama Siyahın filini ...Bc6 ile o çapraza koymasından sonra şah ve f3 kalesi aynı çapraz üzerinde dizilecektir.' },
    { move: '28w', title: '28.Bxc6? uzun çaprazı açmak', text: 'Motor 28.Qh6’yı öneriyor (+0.4): vezir g7 kalesine ve h7’ye bakar, 28...Bxe4 29.dxe4 sonrası Beyaz rahattır. 28.Bxc6 ise e4’teki iyi fili değişir; 28...Qxc6 ile Siyah veziri c6-h1 çaprazına gelir ve **f3 kalesi h1 şahına bağlanır**. Artık ...Rg3! gibi saptırma fikirleri (hxg3 Qxf3+) havada asılıdır. Değerlendirme +0.4’ten −0.3’e döner; konum hâlâ savunulabilir, ama Beyaz artık dikkatli olmak zorundadır.' },
    { move: '29w', title: '29.Rf1?? e3 karesini bırakmak', text: 'Beyaz bağlı f3 kalesini ikinci kez savunmak ister, ama e1 kalesi e3 karesini tutuyordu. Motor 29.f6’yı (−0.1) ya da 29.Bh6’yı (−0.6) öneriyor: örneğin 29.f6 Rg3 30.hxg3 Qxf3+ 31.Qg2 Qxf6 sonrası Siyah yalnızca biraz daha iyidir. 29.Rf1’den sonra ise 29...Rg4! ve ...Nxf5 ile at e3’e gelir; değerlendirme −4.9’a düşer.' },
    { move: '29b', title: '...Rg4! h3-f5 çaprazını kesmek', text: 'Hamlenin asıl inceliği şu: hemen 29...Nxf5? 30.Qxf5 ile atı kaybettirir (+4.3), çünkü h3 veziri g4 üzerinden f5’e bakar. 29...Rg4! bu çaprazı keser; kale g7 kalesiyle korunur (Qxg4 Rxg4). Sırada ...Nxf5 ve ...Ne3 var; d4 piyonunun desteklediği e3 karesi artık savunmasızdır. Motor: −5.5; sonraki en iyi 29...f6 bile −3.5.' },
  ],
  lessons: [
    'Kapalı Sicilya’da 2...e6 ve 3...d5 ile Siyah merkezde hemen hak iddia eder; 3.g3’e karşı bu cevap eşitliği kolayca sağlar. ...d4 ile c3 atını kovmak Siyaha merkezde kalıcı alan verir.',
    'Hamle sırasıyla aynı konuma ulaşılabilir: 4.exd5 exd5 5.Bg2 Nf6 ile 4.Bg2 Nf6 5.exd5 exd5 aynı konumu verir.',
    'Bir taşı, rakibin ilerlemek istediği piyonun önüne koymak (13...Be6) ona tempo kazandırır; fil d7’de, sonra c6’da çok daha güvenliydi.',
    'Kendi şahının önündeki piyonları ilerletmek, açılan hatları rakibe de verir: Çigorin’in g4-f5 ilerleyişi sonunda Siyahın kalelerine g-hattını açtı.',
    'Şah açık bir hattaysa önce şahı kurtarın, sonra hattı kaleyle doldurun: 22...Kh8! ve 23...Rg8 bunun örneğidir.',
    'Şah h1’deyken uzun çapraz (a8-h1) tehlikelidir. O çaprazı kapatan ya da savunan fili değişmek (28.Bxc6) f3’teki bir taşın bağlanmasına yol açabilir.',
    'Bir taş bir kareyi savunuyorsa (burada e1 kalesi e3’ü), onu oynatmadan önce o karenin rakip için ne anlama geldiğini düşünün. Ayrıca bir saldırının önündeki savunmayı “kesen” ara hamleleri (29...Rg4!) arayın.',
  ],
  qa: [
    { q: 'Bu oyunu kim kazandı ve kazanmayı sağlayan temel fikir neydi?', a: 'Oyunu Siyah, yani Tarrasch kazandı (0-1). Kazanmayı sağlayan fikir, Beyazın şah kanadı piyon yürüyüşünün açtığı g-hattını ve a8-h1 uzun çaprazını birlikte kullanmaktı. Tarrasch önce 22...Kh8 ile şahını kurtardı, sonra kalelerini g-hattında ikiledi ve 28...Qxc6 ile f3 kalesini h1 şahına bağladı. 29...Rg4! ve 30...Nxf5 ile at e3’e yönelince bağlı kale ve şah aynı anda savunulamadı.' },
    { q: 'Siyah neden 7...d4 oynadı, d5 piyonunu savunmak yerine?', a: 'd5 piyonu g2 filinin ve c3 atının baskısı altındaydı. 7...d4 piyonu bu baskıdan kurtarır, c3 atını kovarak tempo kazanır ve Beyazın merkezde c3/e3 karelerini kullanmasını zorlaştırır. Motor 7...d4’ü 7...Nc6 ve 7...O-O ile eşit derecede iyi buluyor (0.00), ama ...d4 Siyaha en net planı verir. Oyunun sonunda da e3 karesini destekleyen bu piyon oldu.' },
    { q: '13...Be6 neden kötüydü, fil nereye gitmeliydi?', a: 'Fil e6’da Beyazın f-piyonunun ilerleyeceği yolda duruyordu. 14.Nxf6+ Qxf6 15.f4 Nc6 sonrası f5 tehdidi fili kovacak, Beyaz her piyon hamlesini tempoyla yapacaktı (Motor: +1.4). 13...Bd7! (+0.2) fili güvenli bir kareye koyar ve ...Bc6 ile uzun çapraza geçmeyi hazırlar; 14.f4 Ng4 sonrası at da rahat bir kareye çıkar.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi ve neden kayboldu?', a: 'Avantaj 13...Be6’dan sonra kazanılan tempolardan ve Siyahın fil çiftini kaybetmesinden geldi: 15.f4, 17.g4, 19.f5 ile Beyaz şah kanadında alan aldı (yaklaşık +1.0/+1.3). Ancak bu piyonlar ilerledikçe Beyaz şahının önü de açıldı. 16.Qh5 (16.f5 yerine), 19.f5 (19.Be4 yerine), 23.Kh1 (23.Rf3 yerine) ve 24.Rae1 (24.Rf4 yerine) gibi küçük gevşeklikler avantajı yavaş yavaş eritti; 26.Rf4 sonrası motor konumu eşit görüyor.' },
    { q: '22...Kh8 neden zorunluydu?', a: 'g-hattı açılmıştı ve Beyaz 23.Qg3+ ile şah çekip ardından 24.Bg5 ile f6 vezirine saldırmayı tehdit ediyordu. Örneğin 22...Bc6? 23.Qg3+ Kh8 24.Bg5 Qxg5 25.Qxg5 ile Siyah vezirini fil karşılığında kaybeder (Motor: +3.0). 22...Kh8 ile şah önceden hattan çekilir; artık Qg3 şah olmaz ve 23...Rg8 ile hat Siyahın kalesine geçer.' },
    { q: 'Beyaz neden 28.Bxc6 oynadı ve doğrusu neydi?', a: 'Çigorin büyük olasılıkla Siyahın uzun çapraza baskısını azaltmak için filleri değişti. Ama 28...Qxc6 ile vezir aynı çapraza geldi ve f3 kalesini h1 şahına bağladı; e4 fili o çaprazı kapatan en önemli savunucuydu. 28.Qh6! (+0.4) daha iyiydi: vezir g7 kalesine baskı yapar, 28...Bxe4 29.dxe4 sonrası çapraz kapanır ve Beyazın f5-f6 fikirleri yaşar.' },
    { q: 'Beyaz 29. hamlede nerede kurtulabilirdi?', a: '29.Rf1 yerine 29.f6! (Motor: −0.1) oynanmalıydı: 29...Rg3 30.hxg3 Qxf3+ 31.Qg2 Qxf6 sonrası Siyah yalnızca biraz daha iyidir. 29.Bh6 (−0.6) da benzer bir fikirdir. Her iki hamlede de e1 kalesi e3 karesini tutmaya devam eder. 29.Rf1 ise e3’ü bırakır ve 29...Rg4! sonrası konum kaybedilir (−4.9).' },
    { q: '29...Rg4’ün inceliği nedir, neden hemen 29...Nxf5 olmaz?', a: 'h3 veziri g4 karesi üzerinden f5 piyonunu savunuyor. Hemen 29...Nxf5? 30.Qxf5 ile at kaybedilir (Motor: +4.3). 29...Rg4! bu çaprazı keser; kale g7 kalesiyle korunduğu için alınamaz (30.Qxg4 Rxg4). Ardından 30...Nxf5 ve ...Ne3 gelir: at hem f1 kalesine hem de bağlı f3 kalesinin savunmasına saldırır.' },
    { q: 'Son konumda Çigorin neden terk etti?', a: '30...Nxf5’ten sonra Siyah ...Ne3 ile f1 kalesine saldırmayı ve bağlı f3 kalesine baskıyı artırmayı tehdit ediyor. 31.Bg3 Nxg3+ 32.Qxg3 Rxg3 33.hxg3 Rxg3 Beyazı tamamen kaybettirir (−7.0); 31.Bf2 Rf4 32.Be1 Ne3 de malzeme kaybıyla biter (−5.4). Beyazın taşları pasif, şahı ise hem g-hattından hem uzun çaprazdan baskı altında.' },
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkezi tutar, vezire ve f1 filine yol açar.',
      amac: 'Merkezde hızlı yer kaplayıp taşlarını çabuk geliştirmek.',
      neden: 'Çigorin bütün kariyeri boyunca açık ve hareketli oyunları seven bir oyuncuydu; 1.e4 onun doğal tercihiydi.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışı daha kapalı oyunlara götürür; motor 1.e4 ile neredeyse aynı buluyor (Motor: +0.25).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; açılış seçimini sonraya bırakır (Motor: +0.22).' },
      ],
    },
    '1b': {
      text: '1...c5 Sicilya Savunması: Siyah d4 karesine kanattan baskı yapar.',
      amac: 'Simetrik olmayan bir yapı kurup Beyazın kolay merkez kurmasını engellemek.',
      neden: 'Sicilya o dönemde bugünkü kadar popüler değildi; Tarrasch genellikle 1...e5 ya da Fransız oynardı. Burada Sicilya ama ardından ...e6 ve ...d5 ile Fransız’a benzeyen bir merkez kurmayı seçiyor.',
      diger: [
        { move: '1...e5', text: 'Klasik açık oyun; Tarrasch’ın en çok sevdiği cevaplardan biri (Motor: +0.24).' },
        { move: '1...e6', text: 'Fransız Savunması; oyunda kurulan yapı da buna benzer olacak (Motor: +0.35).' },
      ],
    },
    '2w': {
      text: '2.Nc3 ile Beyaz Kapalı Sicilya’yı seçer: hemen d4 oynamaz.',
      amac: 'Sonra g3-Bg2, d3 ve f4 ile yavaş bir kuruluş kurup şah kanadında oynamak.',
      neden: 'Açık Sicilya’nın (2.Nf3 ve 3.d4) keskin teorisi yerine Çigorin taşlarını gelişip merkezi kapalı tutmayı tercih ediyor. Kapalı Sicilya daha sonra Spasski ve Smislov’un da ünlü silahı oldu.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya hazırlık; 3.d4 ile merkez açılır (Motor: +0.38).' },
        { move: '2.d4', text: 'Hemen merkez açmak: 2...cxd4 3.c3 ile Smith-Morra kambiti gibi oyunlara gider (Motor: +0.25).' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah ...d5’i hazırlar ve f8 filine yol açar.',
      amac: 'Beyaz d4 oynamadığı için merkezde ...d5 ile hemen hak iddia etmek.',
      neden: 'Kapalı Sicilya’da Beyaz merkezi kapalı tutmak ister; ...e6 ve ...d5 bu planı doğrudan sorgular. Exeter Satranç Kulübü’nün yazısı ...d5’i kanat oyununa karşı “klasik merkezî cevap” olarak niteler.',
      diger: [
        { move: '2...Nc6', text: 'Kapalı Sicilya’nın ana yolu: 3.g3 g6 4.Bg2 Bg7 ile simetrik bir kuruluş (Motor: +0.35).' },
        { move: '2...d6', text: 'Esnek bir hamle; ...Nf6 ve ...g6 ile Dragon benzeri bir kuruluş (Motor: +0.36).' },
      ],
    },
    '3w': {
      text: '3.g3 ile Beyaz fili g2’ye getirmeye hazırlanır; fil uzun çaprazdan d5 ve b7 karelerine bakacak.',
      amac: 'Kapalı Sicilya’nın tipik kuruluşu: Bg2, d3, Nge2, O-O ve sonra f4.',
      neden: 'Beyaz kuruluşunu sürdürür; ama motor bu anda 3.g3’ü en iyiler arasında görmüyor, çünkü 3...d5 hemen eşitlik getirir. Bugün 2...e6’ya karşı daha çok 3.Nf3 ya da 3.Nge2 oynanır.',
      diger: [
        { move: '3.Nf3', text: 'Açık Sicilya’ya dönme seçeneği; 3...a6 4.g3 ya da 4.d4 gibi (Motor: +0.44).' },
        { move: '3.Nge2', text: '3...d5 4.exd5 exd5 5.d4 ile Siyaha yalnız piyon (izole d-piyonu) yapısı verilir; New in Chess’in Kapalı Sicilya kitabından alıntılanan bölümde bu yol ana sıra olarak inceleniyor (Motor: +0.41).' },
      ],
    },
    '3b': {
      text: '3...d5! Siyah merkezde hemen hak iddia eder ve e4 piyonuna saldırır.',
      amac: 'g2 fili oraya varmadan merkezi açmak ve Beyazın kapalı kuruluşunu bozmak.',
      neden: 'Beyaz henüz Bg2 oynamadığı için e4 yalnızca c3 atıyla korunuyor; Siyah tam bu anı kullanır. Motor bu hamleyle konumu tam eşit görüyor (0.00).',
      diger: [
        { move: '3...Nc6', text: 'Önce gelişmek; ...d5 bir hamle sonra gelebilir (Motor: +0.07).' },
        { move: '3...Nf6', text: '4.e5 ile atı d5’e kovalar; Beyaz alan kazanır (Motor: +0.28).' },
      ],
    },
    '4w': {
      text: '4.exd5 ile Beyaz merkezde değişir; modülün ana sırasında bunun yerine 4.Bg2 oynanır.',
      amac: 'Siyahın ...dxe4 ya da ...d4 seçeneklerinden birini almak ve d5’e gelecek piyonu uzun çaprazdan hedef yapmak.',
      neden: '4.Bg2 sonrası Siyah 4...d4 ile c3 atını kovup alan kazanabilir ya da 4...dxe4 ile merkezi açabilir. Çigorin bu seçenekleri baştan ortadan kaldırıp konumu basitleştirir. Bedeli, Siyaha açık e-hattı ve rahat gelişim vermektir.',
      diger: [
        { move: '4.Bg2', text: 'Modülün ana sırası: 4...d4 5.Nce2 Nc6 6.d3 ile tipik bir Kapalı Sicilya yapısı çıkar (Motor: −0.02).' },
        { move: '4.d3', text: 'Merkezi korumak: 4...Nc6 5.f4 d4 6.Nce2 sonrası Siyah alan kazanır (Motor: −0.06).' },
      ],
    },
    '4b': {
      text: '4...exd5 ile Siyah piyonla geri alır; d5’te bir piyonu ve açık e-hattı vardır.',
      amac: 'Merkezde piyonu tutmak ve c8 filinin yolunu açmak.',
      neden: 'Piyonla almak neredeyse zorunludur: 4...Nf6? 5.Bb5+ Bd7 sonrası Beyaz rahatça bir piyon fazlasını korur (Motor: +1.1). Piyon d5’te Siyaha merkezde iyi bir duruş verir.',
      diger: [
        { move: '4...Nf6', text: '5.Bb5+ ile Beyaz d5 piyonunu tutar ve geliştirme avantajı kazanır (Motor: +1.09).' },
        { move: '4...Be7', text: '5.Bg2 exd5 6.Nxd5 ile Siyah piyonu geri alamaz (Motor: +1.36).' },
      ],
    },
    '5w': {
      text: '5.Bg2 ile fil uzun çapraza yerleşir ve d5 piyonuna baskı yapar.',
      amac: 'c3 atı ile birlikte d5’e iki kez saldırmak ve Siyahı ya savunmaya ya da ...d4’e zorlamak.',
      neden: 'Bu, 3.g3’ün doğal devamıdır. Motor 5.d4’ü (izole piyon yapısı) biraz daha iyi buluyor, ama Çigorin Kapalı Sicilya ruhuna uyarak merkezi kapalı tutmayı seçiyor.',
      diger: [
        { move: '5.d4', text: '5...cxd4 6.Qxd4 Nf6 7.Bg5 ile Siyahın d5’te yalnız bir piyonu kalır (Motor: +0.02).' },
        { move: '5.d3', text: 'Önce d3: 5...Nf6 6.Bg5 Be7 7.Bg2 ile aynı yapıya benzer (Motor: −0.04).' },
      ],
    },
    '5b': {
      text: '5...Nf6 ile at f6’dan d5 piyonunu destekler ve kısa roku hazırlar.',
      amac: 'Gelişmeyi tamamlamak ve d5’e karşı baskıyı dengelemek.',
      neden: 'At f6, d5’i savunmanın en doğal yoludur. 4.Bg2 Nf6 5.exd5 exd5 sırası da tam bu konuma çıkar. Motor bu hamleyi en iyi buluyor (−0.15).',
      diger: [
        { move: '5...d4', text: 'Hemen alan almak: 6.Qe2+ Be7 7.Nd5 Nc6 ile oyun dengede (Motor: 0.00).' },
        { move: '5...Ne7', text: '6.d4 cxd4 7.Nce2 Nf5 ile at e7’den daha az etkilidir (Motor: +0.34).' },
      ],
    },
    '6w': {
      text: '6.d3 ile Beyaz e4 karesini tutar ve c1 filinin yolunu açar.',
      amac: '...d4 gelirse atın e4’e sıçrayabileceği güvenli bir kare hazırlamak.',
      neden: 'd3 piyonu e4 karesini destekler; bu, ...d4’ten sonra Ne4 manevrasının temelidir. Motor 6.d3, 6.Nge2 ve 6.Nf3’ü yaklaşık eşit görüyor.',
      diger: [
        { move: '6.Nge2', text: '6...d4 7.Ne4 Nxe4 8.Bxe4 ile benzer oyun (Motor: −0.26).' },
        { move: '6.Nf3', text: 'Atı f3’e koymak; ama 6...d4 7.Nb5 sonrası at kenarda kalabilir (Motor: −0.28).' },
      ],
    },
    '6b': {
      text: '6...Be7 ile fil gelişir; Siyah kısa rok yapmaya hazırlanır.',
      amac: 'Şahı güvenliğe almak ve önce gelişmeyi tamamlamak.',
      neden: 'Tarrasch’ın klasik ilkesi: önce geliş, sonra merkezde harekete geç. Motor hemen 6...d4’ü biraz daha iyi buluyor (−0.23), ama fark küçük; Be7 sağlam ve esnektir.',
      diger: [
        { move: '6...d4', text: '7.Ne4 Nxe4 8.Bxe4 Nc6 ile Siyah hemen alan alır (Motor: −0.23).' },
        { move: '6...h6', text: 'Bg5’i önleyen bir bekleme hamlesi (Motor: −0.02).' },
      ],
    },
    '7w': {
      text: '7.Nge2 ile at e2’ye gelişir; f-piyonu serbest kalır.',
      amac: 'f2-f4 ilerleyişine yol açmak ve atı f4 üzerinden d5 ya da h5’e götürmek.',
      neden: 'Kapalı Sicilya’da at f3 yerine e2’ye gelir ki f-piyonu ilerleyebilsin. Motor bu hamleyi en iyi buluyor (0.00).',
      diger: [
        { move: '7.Bg5', text: '7...O-O 8.Bxf6 Bxf6 9.Nxd5 ile bir piyon alınır ama Siyah fil çiftiyle telafi bulur (Motor: −0.04).' },
        { move: '7.Nf3', text: '7...d4 8.Nb1 ile at geri gitmek zorunda kalır (Motor: −0.24).' },
      ],
    },
    '7b': {
      text: '7...d4! Siyah d-piyonunu ilerletir, alan kazanır ve c3 atını kovar.',
      amac: 'Merkezde kalıcı bir alan avantajı kurmak; d4 piyonuyla c3 ve e3 karelerini kontrol etmek.',
      neden: 'd5 piyonu g2 filinin baskısı altındaydı; ilerleyince baskıdan kurtulur ve tempo kazanır. Bu piyon Beyazın c2-c3 ya da f4 ve sonra e-hattı fikirlerini de zorlaştırır. Oyunun sonunda atın e3’e girmesini destekleyen de bu piyon olacak.',
      diger: [
        { move: '7...Nc6', text: 'Önce gelişmek: 8.O-O d4 9.Ne4 Nxe4 ile aynı fikre benzer (Motor: 0.00).' },
        { move: '7...O-O', text: '8.O-O Nc6 9.Bg5 d4 sonrası oyun dengede (Motor: +0.01).' },
      ],
    },
    '8w': {
      text: '8.Ne4 ile at merkeze sıçrar ve f6 atına değişim teklif eder.',
      amac: 'Atı e4’teki güçlü kareye koymak ve Siyahın d4 piyonunu destekleyen taşlarını azaltmak.',
      neden: 'd3 piyonu e4 karesini korur; at burada kovalanamaz. Diğer kareler kötüdür: 8.Na4 atı kenarda bırakır (−0.84), 8.Nb1 ise geri çekilmedir.',
      diger: [
        { move: '8.Nb1', text: 'At d2 üzerinden yeniden oyuna girmeye çalışır; tempo kaybıdır (Motor: −0.26).' },
        { move: '8.Na4', text: 'At kenarda kalır; 8...Bd7 ile Siyah ona saldırır (Motor: −0.84).' },
      ],
    },
    '8b': {
      text: '8...O-O ile Siyah şahını güvenliğe alır.',
      amac: 'Gelişmeyi tamamlamak ve f8 kalesini oyuna sokmaya hazırlanmak.',
      neden: 'Rok sağlam bir hamledir, ama Beyaza Nxf6+ ile fil çiftini alma fırsatı bırakır. Motor 8...Nxe4’ü biraz daha iyi buluyor: 9.dxe4 ya da 9.Bxe4 ile e4’teki taş değişilir ve Siyahın kara kareli fili hayatta kalır.',
      diger: [
        { move: '8...Nxe4', text: '9.Bxe4 O-O 10.O-O Nd7 ile oyun tam dengede (Motor: 0.00).' },
        { move: '8...Nbd7', text: 'At d7’den f6’yı destekler; Nxf6+ gelirse atla alınır (Motor: +0.12).' },
      ],
    },
    '9w': {
      text: '9.O-O ile Beyaz da rok yapar.',
      amac: 'Şahı güvenli hale getirip f-piyonunu ve f1 kalesini harekete geçirmeye hazırlanmak.',
      neden: 'Kapalı Sicilya planı f4 ilerleyişine dayanır; bunun için önce şahın g1’de olması gerekir. Motor 9.Nxf6+’yı küçük bir farkla tercih ediyor.',
      diger: [
        { move: '9.Nxf6+', text: '9...Bxf6 10.O-O Nc6 ile Beyaz fil çiftini hemen alır (Motor: +0.17).' },
        { move: '9.Nf4', text: '9...Nxe4 10.Bxe4 Re8 ile oyun dengede (Motor: +0.03).' },
      ],
    },
    '9b': {
      text: '9...Nc6 ile at gelişir, d4 piyonunu destekler ve e5 karesine yönelir.',
      amac: 'At e5 üzerinden d3, f3 ve c4 karelerine baskı yapacak.',
      neden: 'Doğal bir gelişme hamlesi; ama motor yine 9...Nxe4’ü öneriyor, çünkü Beyaz Nxf6+ ile Siyahın iyi filini almak üzeredir.',
      diger: [
        { move: '9...Nxe4', text: '10.Bxe4 Nd7 11.Nf4 Nf6 ile dengeli bir oyun (Motor: −0.04).' },
        { move: '9...Re8', text: 'Kaleyi açık hatta koymak; 10.Nxf6+ Bxf6 11.Nf4 Nc6 (Motor: +0.15).' },
      ],
    },
    '10w': {
      text: '10.Nf4 ile ikinci at f4’e gelir; d5 ve h5 karelerine bakar.',
      amac: 'Atı d5’e getirip Siyahın e7 filine ya da f6’ya saldırmak; şah kanadında taş toplamak.',
      neden: 'At f4’te güçlüdür ve f-piyonunun önünü kapatsa da d5 karesine kolayca gider. Motor 10.Nxf6+’yı biraz daha net buluyor.',
      diger: [
        { move: '10.Nxf6+', text: '10...Bxf6 11.Nf4 Re8 12.Re1 ile Beyaz fil çiftini alır (Motor: +0.14).' },
        { move: '10.Re1', text: '10...Nxe4 11.Bxe4 Bg4 ile Siyah rahat gelişir (Motor: 0.00).' },
      ],
    },
    '10b': {
      text: '10...Ne5 ile at e5’e gelir; d3, f3, c4 ve g4 karelerine bakar.',
      amac: 'Atı merkezde aktif bir kareye koymak ve Beyazın d3 piyonuna baskı yapmak.',
      neden: 'At e5’te güzel görünür, ama Beyazın f6 atını almasına engel olmaz. Motor 10...Nxe4’ü öneriyor (+0.03): e4 atını değişmek Siyahın fil çiftini korur.',
      diger: [
        { move: '10...Nxe4', text: '11.Bxe4 Bd6 12.Qh5 g6 ile Siyah fillerini tutar (Motor: +0.03).' },
        { move: '10...Re8', text: '11.Nxf6+ Bxf6 12.Re1 Rxe1+ ile kaleler değişir (Motor: +0.09).' },
      ],
    },
    '11w': {
      text: '11.Nxf6+ ile Beyaz f6 atını alır ve şah çeker.',
      amac: 'Siyahın kara kareli filini f6’ya çekip sonra Nd5 ile onu da değişmek.',
      neden: 'At değişimi Siyahın e4 karesine baskısını azaltır ve f6’ya gelen filin hedef olmasını sağlar. Motor bu hamleyi en iyi buluyor (+0.27).',
      diger: [
        { move: '11.h3', text: 'g4 karesini önlemek; 11...Nxe4 12.dxe4 ile Siyah rahattır (Motor: +0.15).' },
        { move: '11.c4', text: 'd4 piyonunu sabitlemek; 11...Nxe4 12.Bxe4 Bd6 (Motor: −0.11).' },
      ],
    },
    '11b': {
      text: '11...Bxf6 ile fil geri alır.',
      amac: 'Taşı geri almak ve şah kanadı piyon yapısını bozmamak.',
      neden: 'Neredeyse zorunlu: 11...gxf6? şahın önünü açar (Motor: +1.66), 11...Kh8?? ise 12.Nxh7! Kxh7 13.Qh5+ ile yıkıcı bir saldırıya izin verir (Motor: +5.5). Fil f6’da d4 piyonunu da destekler.',
      diger: [
        { move: '11...gxf6', text: '12.Nd5 Bg4 13.f3 ile Siyahın şahı açılır (Motor: +1.66).' },
      ],
    },
    '12w': {
      text: '12.Nd5 ile at d5’e gelir ve f6 filine saldırır.',
      amac: 'Siyahın iyi kara kareli filini almak ve fil çifti avantajını tamamen ortadan kaldırmak.',
      neden: 'd5’teki at merkezde güçlüdür ve kovalanamaz (c6 ya da e6 piyonu yok). Motor 12.h3’ü biraz daha iyi buluyor (g4 karesini önler), ama 12.Nd5 de iyidir (+0.22).',
      diger: [
        { move: '12.h3', text: 'Önce ...Bg4’ü önlemek: 12...g6 13.c4 ile Beyaz biraz daha rahattır (Motor: +0.33).' },
        { move: '12.Nh5', text: 'f6 filine saldırmanın başka yolu: 12...Bg4 13.Nxf6+ Qxf6 14.f3 (Motor: +0.14).' },
      ],
    },
    '12b': {
      text: '12...Bg4 ile fil d1 vezirine saldırır.',
      amac: 'Tempo kazanıp Beyazı f3 oynamaya zorlamak; bu da g3 ve e3 karelerini zayıflatır.',
      neden: 'Motor bu hamleyi en iyi buluyor (+0.20). 13.Qe1? ise 13...Nf3+! ile çatal sonrası Siyah kazanır (Motor: −2.3), bu yüzden Beyazın f3 oynaması neredeyse zorunludur.',
      diger: [
        { move: '12...Re8', text: '13.Bf4 Bg4 14.Nxf6+ gxf6 sonrası Siyahın yapısı bozulur (Motor: +0.38).' },
        { move: '12...Bf5', text: '13.h3 Bd7 14.Bf4 ile Beyaz biraz daha iyi (Motor: +0.54).' },
      ],
    },
    '13w': {
      text: '13.f3 ile fil kovulur; e5 atının f3 karesi de kapanır.',
      amac: 'Fili geri çekilmeye zorlamak ve sonra f3-f4 ile e5 atını da kovalamak.',
      neden: 'Motor bu hamleyi en iyi buluyor (+0.25). 13.Qe1? 13...Nf3+ ile kaybeder (−2.3), 13.Nxf6+ ise biraz daha zayıftır. f3 piyonu ileride f4 ve f5 olarak saldırının başlangıcı olacak.',
      diger: [
        { move: '13.Nxf6+', text: '13...Qxf6 14.f3 Bd7 15.f4 ile benzer oyun, ama Siyah fili d7’ye koyma fırsatı bulur (Motor: −0.02).' },
        { move: '13.Qe1', text: '13...Nf3+! 14.Bxf3 Bxf3 15.Nxf6+ ile Siyah malzeme kazanır (Motor: −2.34).' },
      ],
    },
    '13b': {
      text: '13...Be6?! Fil e6’ya çekilir ve d5 atına saldırır; ama burada f-piyonunun hedefi olur.',
      amac: 'd5 atını değişmeye zorlamak ve fili merkezde aktif tutmak.',
      neden: 'Fikir anlaşılır, ama zamanlaması kötü: 14.Nxf6+ Qxf6 15.f4 sonrası e5 atı kovulur ve 16.f5 fili de kovacaktır; Beyaz her piyon hamlesini tempoyla yapar. Motor 13...Bd7’yi öneriyor (+0.2); maç hamlesinden sonra +1.4.',
      diger: [
        { move: '13...Bd7', text: '14.f4 Ng4 15.f5 Bc6 16.Nxf6+ Nxf6 ile fil uzun çapraza geçer ve Siyah rahattır (Motor: +0.17).' },
        { move: '13...Bf5', text: '14.f4 Ng4 15.Re1 Bd7 ile fil yine d7’ye dönmek zorunda kalır (Motor: +0.38).' },
        { move: '13...Bc8', text: 'Geri çekilip fili güvende tutmak: 14.f4 Ng4 15.Re1 (Motor: +0.39).' },
      ],
    },
    '14w': {
      text: '14.Nxf6+ ile at f6 filini alır; Siyahın fil çifti kalmaz.',
      amac: 'Siyahın en iyi savunucusunu ortadan kaldırmak ve f4 için yolu açmak.',
      neden: 'Tek iyi hamle: 14.f4? Bxd5 15.fxe5 Bxe5 sonrası Siyah bir piyon kazanır (Motor: −1.4). Şimdi önce değişim, sonra f4 gelir.',
      diger: [
        { move: '14.f4', text: '14...Bxd5 15.fxe5 Bxe5 ile Siyah bir piyon fazlasıyla kalır (Motor: −1.37).' },
        { move: '14.Nf4', text: 'Atı geri çekmek; 14...Bd7 15.Nh3 ile avantaj kaybolur (Motor: −0.30).' },
      ],
    },
    '14b': {
      text: '14...Qxf6 ile vezirle geri alınır.',
      amac: 'Taşı geri almak ve şahın önündeki piyonları korumak.',
      neden: 'Zorunlu sayılır: 14...gxf6 şahın önünü açar (Motor: +2.7), 14...Kh8? ise f6’daki at alınmadan kalır ve Siyah bir taş eksik düşer (Motor: +5.0). Vezir f6’da şimdilik iyi durur, ama f-piyonunun ilerleyişiyle hedef olabilir.',
      diger: [
        { move: '14...gxf6', text: '15.f4 Bg4 16.Qd2 ile Siyahın şahı çok zayıflar (Motor: +2.51).' },
      ],
    },
    '15w': {
      text: '15.f4! ile e5 atı kovulur ve f5 ile e6 filine saldırı hazırlanır.',
      amac: 'Şah kanadında piyon çoğunluğunu tempoyla ilerletmek.',
      neden: '13...Be6’nın cezası bu hamledir: hem at hem fil f-piyonunun önündedir. Motor bu hamleyi açık ara en iyi buluyor (+1.0); 15.Bd2 ya da 15.b3 sonrası Siyah ...Bd5 ile filleri değişip eşitler.',
      diger: [
        { move: '15.Bd2', text: '15...Bd5 16.f4 Bxg2 17.Kxg2 ile beyaz kareli filler değişir ve oyun eşitlenir (Motor: 0.00).' },
        { move: '15.Qd2', text: '15...Nc6 16.f4 Bf5 ile Siyahın fili güvenli kareye ulaşır (Motor: −0.19).' },
      ],
    },
    '15b': {
      text: '15...Nc6 ile at tek iyi kareye çekilir.',
      amac: 'Atı kurtarmak ve d4 piyonunu desteklemeye devam etmek.',
      neden: 'Diğer kareler felaket: 15...Ng4? 16.f5 Bxf5 17.Be4 ile fil ve at birlikte zor duruma düşer (Motor: +3.2); 15...Ng6? 16.f5 Bxf5 17.Be4 Nh4 de kötüdür (+3.7).',
      diger: [
        { move: '15...Ng4', text: '16.f5 Bxf5 17.Be4 Ne3 ile Beyaz bir taş kazanır (Motor: +3.17).' },
        { move: '15...Ng6', text: '16.f5 Bxf5 17.g4 Nh4 ile at kenarda kaybolur (Motor: +3.49).' },
      ],
    },
    '16w': {
      text: '16.Qh5 ile vezir şah kanadına gelir ve c5 piyonuna da bakar.',
      amac: 'Saldırıya veziri de katmak; h7 ve c5 piyonlarını hedef almak.',
      neden: 'Saldırgan bir hamle ama en doğrusu değil: motor hemen 16.f5’i öneriyor (+0.9). Qh5, Siyaha 16...Qf5! ile vezir değişimini teklif etme imkânı verir; vezirler giderse saldırı da biter.',
      diger: [
        { move: '16.f5', text: '16...Bd7 17.Qh5 Rfe8 18.Bg5 ile Beyaz tempolu saldırısını sürdürür (Motor: +0.90).' },
        { move: '16.Bxc6', text: '16...bxc6 17.f5 Bd5 ile Siyahın piyonları bozulur ama beyaz kareli filler gider (Motor: +0.39).' },
      ],
    },
    '16b': {
      text: '16...Bf5 ile fil f5’e gelir; ama g4 ile kovalanacak.',
      amac: 'Fili f-piyonunun önünde tutup f5 ilerleyişini durdurmak.',
      neden: 'Fil f5’te Beyazın g4’üne açıktır. Motor 16...Qf5!’i öneriyor (+0.2): vezir değişimi teklif edilir, Beyaz değişirse saldırı tamamen biter, kaçınırsa Siyah rahat bir oyun kurar.',
      diger: [
        { move: '16...Qf5', text: '17.Qxf5 Bxf5 18.Bd2 g6 ile vezirler gider ve oyun eşit (Motor: +0.17).' },
        { move: '16...Rfe8', text: '17.f5 Bd7 18.Bg5 Qd6 ile Beyazın saldırısı devam eder (Motor: +0.96).' },
      ],
    },
    '17w': {
      text: '17.g4 ile fil kovulur; Beyazın piyonları şah kanadında ilerliyor.',
      amac: 'f5 karesini kontrol altına almak ve f4-f5 ilerleyişini mümkün kılmak.',
      neden: 'Motor bu hamleyi açık ara en iyi buluyor (+1.3). Kendi şahının önünü açması uzun vadede risklidir; ama şu anda Beyazın taşları daha aktif ve Siyah savunmada.',
      diger: [
        { move: '17.a3', text: 'Sakin bir hamle; 17...Qg6 ile vezirler değişebilir (Motor: +0.48).' },
        { move: '17.Bd2', text: '17...g6 18.Qf3 Qe6 ile Siyah konumunu toparlar (Motor: +0.36).' },
      ],
    },
    '17b': {
      text: '17...g6 ile f5 fili piyonla desteklenir.',
      amac: 'Fili korumak ve Beyaz vezirini h5’ten kovmak.',
      neden: 'Motor en iyi buluyor (+1.1). 17...Bc8? 18.f5 ile Siyah çok pasif kalır (+2.1); g6 ise şahın önünü biraz zayıflatsa da taşlara hava verir.',
      diger: [
        { move: '17...Bd7', text: '18.f5 Rfe8 19.Bf4 g6 ile benzer konumlar (Motor: +1.18).' },
        { move: '17...Bc8', text: '18.f5 Re8 19.Bg5 ile Beyazın saldırısı çok güçlenir (Motor: +2.24).' },
      ],
    },
    '18w': {
      text: '18.Qh3 ile vezir h3’e çekilir; g4 piyonunu korur ve h-hattından h7’ye bakar.',
      amac: 'Saldırıyı korurken f5 tehdidini canlı tutmak.',
      neden: 'Tek güçlü kare: 18.Qh6? Bxg4 19.f5 Bxf5 ile Siyah iki piyon alır (+0.3), 18.Qg5? Qxg5 ise vezirleri değiştirip saldırıyı bitirir (0.00). Motor 18.Qh3’ü en iyi buluyor.',
      diger: [
        { move: '18.Qh6', text: '18...Bxg4 19.f5 Bxf5 20.Bg5 ile Beyazın saldırısı iki piyona değmez (Motor: +0.50).' },
        { move: '18.Qg5', text: '18...Qxg5 19.fxg5 Bxg4 ile Siyah bir piyon kazanır (Motor: 0.00).' },
      ],
    },
    '18b': {
      text: '18...Bd7 ile fil d7’ye çekilir.',
      amac: 'f5 piyonunun ilerleyişine karşı hazırlık; fil c6 üzerinden uzun çapraza geçebilir.',
      neden: 'Fil artık f5’te tutunamaz (g4 ve f4 ona saldırıyor). Motor 18...Bd7’yi en iyi buluyor (+1.1); 18...Be6 ise 19.f5 ile yine tempo kaybettirir (+2.3).',
      diger: [
        { move: '18...Bc8', text: '19.f5 gxf5 20.Be4 ile Siyah çok pasif (Motor: +1.69).' },
        { move: '18...Be6', text: '19.f5 Bd7 20.Qh6 ile Beyaz tempo kazanır (Motor: +2.26).' },
      ],
    },
    '19w': {
      text: '19.f5 ile piyon f5’e ilerler; şah kanadında hatlar açılmaya başlar.',
      amac: 'g6 piyonunu değişmeye zorlamak, Siyah şahının önünü açmak.',
      neden: 'Çigorin’in saldırgan doğasına uygun, ama motor 19.Be4’ü tercih ediyor (+1.0/+1.2): önce fili e4’e koymak, Siyahın ...h5 gibi karşı hamlelerini engeller. f5 hemen oynanınca g-hattı Siyahın da işine yarayacak şekilde açılır.',
      diger: [
        { move: '19.Be4', text: '19...Rfe8 20.Bd2 Qg7 21.f5 ile Beyaz piyonunu daha iyi hazırlanmış olarak ilerletir (Motor: +1.15).' },
        { move: '19.Bd2', text: '19...h5 20.f5 hxg4 21.Qxg4 ile oyun karışır (Motor: +0.39).' },
      ],
    },
    '19b': {
      text: '19...gxf5 ile Siyah alır; g-hattı yarı açılır.',
      amac: 'Piyonu kazanmak ve f5 piyonunun f6’ya kadar gelmesini önlemek.',
      neden: 'Doğal ve en iyi hamle (+0.8). 19...h5? 20.fxg6 Qxg6 21.Qxh5 ile Siyahın şahı tamamen açılır (+1.4).',
      diger: [
        { move: '19...Rfe8', text: '20.Be4 gxf5 21.Bd2 ile aynı yapıya döner (Motor: +0.87).' },
        { move: '19...h5', text: '20.fxg6 Qxg6 21.Qxh5 ile Beyaz piyonu geri alır ve şahı açar (Motor: +1.35).' },
      ],
    },
    '20w': {
      text: '20.Be4 ile fil f5 piyonuna ve c6 atına bakar.',
      amac: 'Piyonu geri kazanmak için baskı kurmak; fil uzun çaprazdan b7’yi de hedef alır.',
      neden: 'Motor bu hamleyi en iyi buluyor (+0.9). 20.gxf5 hemen oynanabilirdi, ama önce fili merkezde aktif kareye koymak Siyaha seçenek bırakmaz.',
      diger: [
        { move: '20.Bf4', text: '20...Rfe8 21.gxf5 Bxf5 22.Qf3 ile fil e5 ve d6’ya bakar (Motor: +0.75).' },
        { move: '20.Bh6', text: '20...Rfe8 21.Be4 fxg4 22.Rxf6 ile benzer oyun (Motor: +0.64).' },
      ],
    },
    '20b': {
      text: '20...Ne7 ile at e7’den f5 piyonunu savunur ve g6 karesine bakar.',
      amac: 'f5’teki fazladan piyonu tutmak ve şahın yanına bir savunucu getirmek.',
      neden: 'Mantıklı bir savunma; ama motor 20...Rfe8!’i öneriyor (+0.8): 21.Bd2 Rxe4 22.dxe4 fxg4 ile Siyah kaleyi fil ve bir piyon karşılığında verip Beyazın tehlikeli filini ortadan kaldırır.',
      diger: [
        { move: '20...Rfe8', text: '21.Bd2 Rxe4 22.dxe4 fxg4 ile kalite fedası; Siyah piyon fazlasını korur ve Beyazın en iyi filini ortadan kaldırır (Motor: +0.78).' },
        { move: '20...Qe7', text: '21.Bxf5 Bxf5 22.Rxf5 Qe1+ ile Beyaz piyonu geri alır (Motor: +1.36).' },
      ],
    },
    '21w': {
      text: '21.Bh6 ile fil f8 kalesine saldırır ve g7 karesine baskı yapar.',
      amac: 'Siyah kaleyi f-hattından çekmeye zorlamak; fil h6’dan g7 ve f8 karelerini kontrol eder.',
      neden: 'Motor bu hamleyi en iyi buluyor (+1.2). Kale çekilmezse Bxf8 ile kalite kazanılır; 21...Qg6 22.Bxf8 Rxf8 23.Bxb7 sonrası Beyaz malzeme önündedir.',
      diger: [
        { move: '21.Qg3', text: '21...h6 22.Bd2 Rae8 ile Siyah savunmasını kurar (Motor: +0.82).' },
        { move: '21.gxf5', text: '21...Kh8 22.Rf3 Rg8+ ile g-hattı hemen Siyaha geçer (Motor: +0.61).' },
      ],
    },
    '21b': {
      text: '21...Rfe8 ile kale e-hattına çekilir ve e4 filine baskı yapar.',
      amac: 'Kaleyi kurtarmak ve açık e-hattını tutmak.',
      neden: 'Motor en iyi buluyor (+0.8). 21...Qg6? 22.Bxf8 Rxf8 23.Bxb7 sonrası Siyah kalite verir ve b7 piyonunu da kaybeder (+1.2).',
      diger: [
        { move: '21...Qg6', text: '22.Bxf8 Rxf8 23.Bxb7 ile Beyaz kalite ve piyon kazanır (Motor: +1.17).' },
        { move: '21...Rfb8', text: '22.gxf5 Kh8 23.Kh1 Rg8 ile benzer bir plan, ama kale b8’de daha pasif (Motor: +1.24).' },
      ],
    },
    '22w': {
      text: '22.gxf5 ile Beyaz piyonu geri alır ve g-hattını açar.',
      amac: 'Qg3+ ile şah çekip Bg5 ile vezire saldırmayı tehdit etmek.',
      neden: 'Motor en iyi buluyor (+0.6), 22.Kh1 de aynı değerde. Ama g-hattı açılınca bu hat yalnızca Beyazın değil Siyahın da olur; Beyaz şahı g1’de bu hattın üzerindedir.',
      diger: [
        { move: '22.Kh1', text: 'Önce şahı güvene almak: 22...Kh8 23.gxf5 Bc6 24.Rae1 (Motor: +0.59).' },
        { move: '22.Bxf5', text: '22...Nxf5 23.gxf5 Kh8 ile Beyazın iyi fili gider (Motor: −0.36).' },
      ],
    },
    '22b': {
      text: '22...Kh8! Şah g-hattından çekilir ve g8 karesini kaleye bırakır.',
      amac: 'Qg3+ ve Bg5 kombinasyonunu önlemek; hattı Siyahın kalesine açmak.',
      neden: 'Diğer hamlelerde 23.Qg3+ ve 24.Bg5 Siyahın vezirini kaybettirir: 22...Bc6? 23.Qg3+ Kh8 24.Bg5 Qxg5 25.Qxg5 (Motor: +3.0). Tek hamlede savunma sorunu çözülür ve Siyahın saldırı planı başlar.',
      diger: [
        { move: '22...Bc6', text: '23.Qg3+ Kh8 24.Bg5 Qxg5 25.Qxg5 ile Siyah vezirini fil karşılığında kaybeder (Motor: +2.99).' },
        { move: '22...c4', text: '23.Qg3+ Kh8 24.Bg5 ile aynı tema (Motor: +3.14).' },
      ],
    },
    '23w': {
      text: '23.Kh1 ile Beyaz da şahını g-hattından çeker.',
      amac: 'Siyahın ...Rg8+ ile şah çekerek tempo kazanmasını önlemek.',
      neden: 'Mantıklı görünür, ama şahı a8-h1 çaprazının ucuna koyar. Motor 23.Rf3’ü öneriyor (+0.8/+1.0): kale üçüncü yatayı tutar ve Rg3 ile g-hattına geçebilir.',
      diger: [
        { move: '23.Rf3', text: '23...Bc6 24.Rg3 Rg8 25.Re1 ile Beyaz g-hattını kendisi alır (Motor: +1.05).' },
        { move: '23.Rf4', text: '23...Ng6 24.Rg4 ile kale g-hattına geçer (Motor: +0.81).' },
      ],
    },
    '23b': {
      text: '23...Rg8 ile kale açık g-hattına gelir.',
      amac: 'g-hattını kontrol etmek ve Beyaz şahına baskı kurmak.',
      neden: 'Doğru plan, ama sıra biraz erken: motor 23...Bc6’yı öneriyor (+0.4); fil önce uzun çapraza geçip e4 filini değişmeye zorlar. Rg8 sonrası Beyaz 24.Rf4! ile daha iyi olabilirdi (+1.3).',
      diger: [
        { move: '23...Bc6', text: '24.Rae1 Nd5 25.Rg1 Rg8 ile Siyah taşlarını uyumlu hale getirir (Motor: +0.38).' },
        { move: '23...Ng8', text: 'Fili kovalamak: 24.Bd2 Bc6 25.Rae1 (Motor: +1.17).' },
      ],
    },
    '24w': {
      text: '24.Rae1 ile kale e-hattına gelir ve e3 karesini tutar.',
      amac: 'e-hattında Siyah kalesiyle yüzleşmek ve e4 filini desteklemek.',
      neden: 'Bu kale e3’ü savunarak oyunun sonunda kritik bir rol oynayacak. Ama motor 24.Rf4!’ü tercih ediyor (+1.3): kale f4’ten g4’e ya da h4’e geçebilir, f7’ye baskı artar.',
      diger: [
        { move: '24.Rf4', text: '24...Qe5 25.Raf1 Rae8 26.Qh5 ile f7’ye baskı (Motor: +1.32).' },
        { move: '24.Bd2', text: '24...Bc6 25.Rae1 Nd5 ile oyunda olduğu gibi (Motor: +0.54).' },
      ],
    },
    '24b': {
      text: '24...Rae8 ile ikinci kale e-hattına gelir.',
      amac: 'e4 filine baskıyı artırmak ve e-hattını Beyaza bırakmamak.',
      neden: 'Siyah taşları tam gelişmiş durumda. Motor 24...Bc6’yı yaklaşık eşit görüyor; Rae8 de sağlamdır (+0.4/+0.6).',
      diger: [
        { move: '24...Bc6', text: '25.Bd2 Nd5 26.Qf3 ile fil uzun çapraza geçer (Motor: +0.51).' },
        { move: '24...c4', text: '25.Bf4 cxd3 26.cxd3 Bc6 ile merkez açılır (Motor: +0.80).' },
      ],
    },
    '25w': {
      text: '25.Bd2 ile fil d2’ye çekilir.',
      amac: 'Fili güvenli kareye çekmek ve e1 kalesini desteklemek.',
      neden: 'h6’daki fil artık bir işe yaramıyordu ve ...Nf5 ya da ...Ng6 ile saldırıya açıktı. Motor 25.Bd2’yi en iyi buluyor (+0.5).',
      diger: [
        { move: '25.Bxb7', text: '25...Nxf5 26.Rxe8 Rxe8 27.Bf4 ile malzeme dengelenir (Motor: 0.00).' },
        { move: '25.c3', text: 'Merkezi açmaya çalışmak: 25...Nxf5 26.Bd2 Re5 (Motor: +0.13).' },
      ],
    },
    '25b': {
      text: '25...Bc6 ile fil uzun çapraza geçer ve e4 filini değişmeyi teklif eder.',
      amac: 'Beyazın en iyi taşını değişmek ve a8-h1 çaprazını kontrol etmek.',
      neden: 'Motor 25...Nc6’yı küçük bir farkla tercih ediyor, ama Bc6 Tarrasch’ın asıl fikridir: fil h1 şahına bakar, değişim olursa vezir aynı çapraza gelecektir.',
      diger: [
        { move: '25...Nc6', text: '26.Qh6 Qxh6 27.Bxh6 Nb4 ile vezirler gider (Motor: +0.38).' },
        { move: '25...Nc8', text: '26.Qh6 Qxh6 27.Bxh6 Nd6 ile at merkeze gelir (Motor: +0.65).' },
      ],
    },
    '26w': {
      text: '26.Rf4 ile kale f4’e gelir; g4 üzerinden g-hattına geçebilir.',
      amac: 'f5 piyonunu desteklemek ve kaleyi şah kanadına getirmek.',
      neden: 'Motor 26.Qf3’ü öneriyor (+0.25/+0.7): vezir uzun çaprazı tutar, filler değişirse vezirle alınır ve çapraz kapalı kalır. Rf4 sonrası konum eşitlenir.',
      diger: [
        { move: '26.Qf3', text: '26...Bxe4 27.Qxe4 Qc6 28.Qxc6 ile çapraz tehlikesi ortadan kalkar (Motor: +0.25).' },
        { move: '26.c4', text: '26...Nc8 27.Qf3 Bxe4 28.Rxe4 ile benzer fikir (Motor: +0.20).' },
      ],
    },
    '26b': {
      text: '26...Rg7 ile kale g7’ye gelir; ikinci kale g8’e geçince g-hattında ikilenecekler.',
      amac: 'g-hattında ikilenmek ve aynı zamanda f7 ile h7 piyonlarını korumak.',
      neden: 'Motor 26...Nd5’i biraz daha iyi buluyor (0.00), ama Rg7 hem savunur hem saldırıya hazırlar (+0.2).',
      diger: [
        { move: '26...Nd5', text: '27.Rh4 Qg7 28.Bh6 Qe5 ile at merkezde güçlü (Motor: 0.00).' },
        { move: '26...Bxe4+', text: '27.Rexe4 a6 28.c4 Qg7 ile filler değişir (Motor: +0.39).' },
      ],
    },
    '27w': {
      text: '27.Rf3 ile kale üçüncü yataya çekilir ve g3 karesini savunur.',
      amac: 'Siyahın g-hattındaki baskısına karşı üçüncü yatayı tutmak.',
      neden: 'Mantıklı görünür, ama kale artık f3’te, yani h1 şahıyla aynı çaprazda duruyor. Motor 27.Rff1’i biraz daha iyi buluyor (+0.3).',
      diger: [
        { move: '27.Rff1', text: '27...Nd5 28.Qf3 Re5 29.c4 ile Beyaz çaprazı vezirle kapatır (Motor: +0.24).' },
        { move: '27.Bxc6', text: '27...Qxc6+ 28.Qf3 ile vezirler değişebilir (Motor: +0.27).' },
      ],
    },
    '27b': {
      text: '27...Reg8 ile kaleler g-hattında ikilenir.',
      amac: 'g-hattında maksimum baskı; ...Rg4 ya da ...Rg1+ fikirleri.',
      neden: 'Motor 27...Bxe4’ü ya da 27...Nd5’i biraz daha iyi buluyor, ama Reg8 Tarrasch’ın planını tamamlar: g-hattı ve uzun çapraz birlikte çalışacak.',
      diger: [
        { move: '27...Bxe4', text: '28.dxe4 Nc6 29.Rg3 Rxg3 ile kaleler değişir (Motor: +0.14).' },
        { move: '27...Nd5', text: '28.Rg1 Rxg1+ 29.Kxg1 c4 ile oyun dengede (Motor: +0.25).' },
      ],
    },
    '28w': {
      text: '28.Bxc6? Filler değişir; ama Siyah veziri uzun çapraza gelir.',
      amac: 'Siyahın uzun çaprazdaki baskısını azaltmak.',
      neden: 'Tam tersi olur: e4 fili çaprazın en iyi savunucusuydu. 28...Qxc6 ile vezir c6’dan f3 kalesini h1 şahına bağlar. Motor 28.Qh6’yı öneriyor (+0.4); maç hamlesinden sonra −0.3.',
      diger: [
        { move: '28.Qh6', text: '28...Bxe4 29.dxe4 Rg6 30.Qh5 ile Beyazın vezir ve kaleleri aktif (Motor: +0.47).' },
        { move: '28.b4', text: '28...Bxe4 29.dxe4 Nc6 ile Beyaz kanatta karşı oyun arar (Motor: −0.18).' },
      ],
    },
    '28b': {
      text: '28...Qxc6 ile vezir geri alır ve f3 kalesini h1 şahına bağlar.',
      amac: 'Uzun çaprazı kontrol etmek ve f3 kalesini hareketsiz bırakmak.',
      neden: 'Motor 28...Nxc6’yı biraz daha iyi buluyor (−0.35), ama Qxc6 bağı kurar ve ...Rg3 fikrini tehdit eder (hxg3 Qxf3+). 28...bxc6? ise kötüdür (+1.6).',
      diger: [
        { move: '28...Nxc6', text: '29.Rg3 Ne7 30.Rf1 Rxg3 ile at aktif kareye gelir (Motor: −0.35).' },
        { move: '28...bxc6', text: '29.c4 Rg4 30.Bf4 ile Siyahın piyonları zayıflar (Motor: +1.63).' },
      ],
    },
    '29w': {
      text: '29.Rf1?? Beyaz bağlı f3 kalesini ikinci kez savunur, ama e3 karesini bırakır.',
      amac: 'Bağlı kaleyi desteklemek ve ...Rg3 tehdidini durdurmak.',
      neden: 'Ağır hata: e1 kalesi e3 karesini savunuyordu ve Siyahın atı oraya gelecek. Motor 29.f6’yı öneriyor (−0.1): 29...Rg3 30.hxg3 Qxf3+ 31.Qg2 Qxf6 sonrası Siyah yalnızca biraz daha iyi. 29.Bh6 da benzer (−0.6). Maç hamlesinden sonra −4.9.',
      diger: [
        { move: '29.f6', text: '29...Rg3 30.hxg3 Qxf3+ 31.Qg2 Qxf6 32.Qxb7 ile Beyaz piyonu geri alır (Motor: −0.10).' },
        { move: '29.Bh6', text: '29...Rg3 30.hxg3 Qxf3+ 31.Qg2 Qh5+ ile Siyah biraz daha iyi (Motor: −0.63).' },
        { move: '29.b4', text: '29...f6 30.b5 Qxb5 ile Siyah piyonu alır (Motor: −1.82).' },
      ],
    },
    '29b': {
      text: '29...Rg4! Kale h3-f5 çaprazını keser; g7 kalesiyle korunur.',
      amac: 'f5 piyonunun savunmasını kesmek ve ardından ...Nxf5, ...Ne3 ile f3 kalesine son darbeyi vurmak.',
      neden: 'Hemen 29...Nxf5? 30.Qxf5 atı kaybettirir (+4.3), çünkü h3 veziri g4 karesi üzerinden f5’e bakar. Rg4 bu çaprazı keser; 30.Qxg4 Rxg4 ile alınamaz. Motor: −5.5.',
      diger: [
        { move: '29...f6', text: '30.a3 Rg4 31.b4 ile Siyah yine üstün ama daha yavaş (Motor: −3.50).' },
        { move: '29...Nd5', text: '30.f6 Nxf6 31.Qf5 ile Beyaz karşı oyun bulur (Motor: −2.29).' },
      ],
    },
    '30w': {
      text: '30.Be1 ile fil g3 karesine gelmek ister.',
      amac: 'Fili g3’e getirip g-hattını kapatmak ve f2 karesini korumak.',
      neden: 'Beyazın elinde iyi hamle kalmadı: motor 30.c3’ü (−5.6), 30.Be1’i (−5.7) ve 30.Ba5’i (−5.9) aynı derecede kötü buluyor. Konum zaten kaybedilmiş durumda.',
      diger: [
        { move: '30.c3', text: '30...Nxf5 31.Be1 Ne3 32.Bg3 ile benzer kayıp (Motor: −5.58).' },
        { move: '30.Ba5', text: '30...Nd5 31.Be1 Nf4 32.Qg3 ile Siyah yine kazanır (Motor: −5.86).' },
      ],
    },
    '30b': {
      text: '30...Nxf5 ile at f5 piyonunu alır ve e3 karesine yönelir.',
      amac: 'Atı e3’e getirip f1 kalesine ve bağlı f3 kalesinin savunmasına saldırmak.',
      neden: 'Rg4 sayesinde f5 artık korunmuyor. 31.Bg3 Nxg3+ 32.Qxg3 Rxg3 33.hxg3 Rxg3 (−7.0) ya da 31.Bf2 Rf4 32.Be1 Ne3 (−5.4) ile Beyaz malzeme kaybeder. Çigorin terk etti.',
      diger: [
        { move: '30...Nd5', text: '31.Bg3 Ne3 32.Kg1 Nxf1 ile de kazanır, ama daha yavaş (Motor: −3.63).' },
        { move: '30...f6', text: '31.Bg3 Nd5 32.c4 ile Beyaz biraz direnebilir (Motor: −3.09).' },
      ],
    },
  },
  sources: [
    { title: 'Wikipedia: Ostend 1907 chess tournament', url: 'https://en.wikipedia.org/wiki/Ostend_1907_chess_tournament' },
    { title: 'Chess.com (kahns): A Century of Chess – Ostend Championship 1907', url: 'https://chess.com/blog/kahns/a-century-of-chess-ostend-championship-1907' },
    { title: 'Exeter Chess Club: The Closed Sicilian', url: 'https://exeterchessclub.org.uk/node/623' },
    { title: 'New in Chess: Kapalı Sicilya kitabından örnek bölüm (2...e6 3.Nge2 d5)', url: 'https://www.newinchess.com/media/wysiwyg/product_pdf/3725.pdf' },
  ],
  exercises: [
    { id: 'ctr-1', kind: 'tekrar', plan: false, title: 'Şah g-hattından çekiliyor',
      source: 'Çigorin – Tarrasch, Ostende 1907 (22. hamle)',
      fen: 'r3r1k1/pp1bnp1p/5q1B/2p2P2/3pB3/3P3Q/PPP4P/R4RK1 b - - 0 22',
      prompt: 'Beyaz gxf5 ile g-hattını açtı. Siyah şahı g8’de, Beyazın veziri h3’te ve fili h6’da. Siyah ne yapmalı?',
      hint: 'Açık g-hattında kim duruyor? Orada kim durmalı?',
      line: ['Kh8'],
      explanation: '**22...Kh8!** Şah g-hattından çekilir ve g8 karesini kaleye bırakır. Diğer hamlelerde Beyaz 23.Qg3+ ve 24.Bg5 ile vezire saldırıp malzeme kazanır: 22...Bc6 23.Qg3+ Kh8 24.Bg5 Qxg5 25.Qxg5. Motor: ...Kh8 +0.9, sonraki en iyi 22...Bc6 +2.8.',
      link: 'Beyazın şah kanadı ilerleyişi g-hattını açtı; Tarrasch önce şahını kurtardı, sonra bu hattı kendi kaleleri için kullandı.' },
    { id: 'ctr-2', kind: 'tekrar', plan: false, title: 'Bağlı kale ve e3 karesi',
      source: 'Çigorin – Tarrasch, Ostende 1907 (29. hamle)',
      fen: '6rk/pp2nprp/2q5/2p2P2/3p4/3P1R1Q/PPPB3P/5R1K b - - 1 29',
      prompt: 'Siyah veziri c6’dan f3 kalesini h1 şahına bağlıyor. Beyaz son hamlede kalesini e1’den f1’e çekti. Siyahın kaleleri g-hattında ikilenmiş durumda.',
      hint: 'Önde duran kale g7 kalesiyle korunarak bir kare ilerleyebilir; ardından at f5’e ve e3’e gidecek.',
      line: ['Rg4', 'Be1', 'Nxf5'],
      explanation: '**29...Rg4!** Kale g7 kalesiyle korunur (Qxg4 Rxg4). Sırada ...Nxf5 ve ...Ne3 var; e1 kalesi gittiği için e3 karesi savunmasız. **30.Be1 Nxf5** ve f3 kalesi düşer. Motor: ...Rg4 −5.4 (Beyazın her savunmasına mat buluyor), sonraki en iyi 29...f6 −4.0; 30...Nxf5 −5.3, sonraki en iyi 30...Nd5 −3.6.',
      link: 'Oyunun başındaki ...d4 burada işe yarıyor: d4 piyonu e3 karesini destekliyor, uzun çapraz ve g-hattı birlikte şahı sıkıştırıyor.' },
    { id: 'ctr-3', kind: 'transfer', plan: false, title: 'Kale g4’e',
      source: 'Rabinovich – Alekhine, Rusya Şampiyonası, Vilnius 1912 (28. hamle)',
      fen: '6r1/5p1p/p4k2/4qb2/4pb1N/1P6/P1P2QP1/5RK1 b - - 5 28',
      prompt: 'Siyahın kalesi açık g-hattında, filleri f4 ve f5’te, veziri e5’te. Beyazın atı h4’te, şahı g1’de. Siyah için en güçlü devam hangisi?',
      hint: 'Tarrasch gibi kaleyi g-hattında öne getirin: hem bir taşa saldırsın hem g2’ye baksın.',
      line: ['Rg4'],
      explanation: '**28...Rg4!** Kale h4 atına saldırır ve g2’ye baskı yapar. Atın kaçacak güvenli karesi yok (f3’ü e4 piyonu, g6’yı piyonlar tutuyor); 29.Nxf5 Qxf5 de Beyazı kurtarmaz. Motor: ...Rg4 −5.5, sonraki en iyi 28...Kg5 −4.1, 28...Be6 −2.9.',
      link: 'Tarrasch 29...Rg4 ile g-hattındaki kaleyi şahın önüne getirdi; Alekhine de aynı kareye gelerek kaleyi atın ve g2’nin üzerine sürdü.' },
    { id: 'ctr-4', kind: 'transfer', plan: false, title: 'Uzun çapraz ve h1 şahı',
      source: 'Mikalsen – Carlsen, Barents Bölgesi Şampiyonası, Alta 2003 (24. hamle)',
      fen: '5rk1/1b5p/p3p1p1/1p1q1p2/3Q1P2/PP4N1/2r3PP/B3RBK1 b - - 0 24',
      prompt: 'Siyahın veziri ve b7 fili uzun çaprazda (a8-h1) diziliyor. Vezirler d4 ve d5’te karşı karşıya, Siyah kalesi ikinci yatayda.',
      hint: 'g2 piyonu uzun çaprazı kapatıyor. Onu kaleyle alırsanız Beyaz nasıl geri alabilir?',
      line: ['Rxg2+', 'Kh1', 'Rxg3+'],
      explanation: '**24...Rxg2+!** 25.Kxg2 olmaz (d5 veziri şah çeker), 25.Bxg2 Qxd4+ veziri kaybeder. **25.Kh1 Rxg3+** açarak şah: d5 veziri h1 şahına uzun çaprazdan bakar ve Siyah bir taş daha alır. Motor: ...Rxg2+ −10.0, sonraki en iyi 24...Qxd4+ +0.1; 25...Rxg3+ −12.1, sonraki en iyi −7.5.',
      link: 'Tarrasch’ın veziri c6’dan h1 şahına uzun çaprazda bağ kurdu; Carlsen de aynı çaprazı açıp h1’deki şaha karşı kullandı.' },
  ],
};
