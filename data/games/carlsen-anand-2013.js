// Carlsen – Anand, Tal Memorial, Moskova 2013 (5. tur). Kaynak: PgnMentor (Carlsen.pgn).
export default {
  id: 'carlsen-anand-2013',
  theme: 'e4 ve d5 kırılmalarıyla merkezi açmak',
  white: 'Magnus Carlsen', black: 'Viswanathan Anand',
  whiteShort: 'Carlsen', blackShort: 'Anand',
  event: 'Tal Memorial', site: 'Moskova', year: 2013, eco: 'E46',
  variation: 'Nimzo-Hint Savunması, Rubinstein sistemi, 5.Ne2', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Ne2 d5 6. a3 Be7 7. cxd5 Nxd5 8. Bd2 Nd7 9. g3 b6 10. Nxd5 exd5 11. Bg2 Bb7 12. Bb4 Nf6 13. O-O Re8 14. Rc1 c6 15. Bxe7 Rxe7 16. Re1 Qd6 17. Nf4 Bc8 18. Qa4 Rc7 19. f3 Be6 20. e4 dxe4 21. fxe4 Qd7 22. d5 cxd5 23. Qxd7 Rxd7 24. Nxe6 fxe6 25. Bh3 Kh8 26. e5 Ng8 27. Bxe6 Rdd8 28. Rc7 d4 29. Bd7 1-0`,

  summary: 'Haziran 2013’te Moskova’daki Tal Memorial’in 5. turunda, kasımda Chennai’de dünya şampiyonluğu için karşılaşacak iki oyuncu tahtaya oturdu. Carlsen, basın toplantısında söylediği gibi “Anand’ın uzun zamandır karşılaşmadığı” bir hat seçti: Nimzo-Hint’in Rubinstein sisteminde **5.Ne2**. Anand atları değişip d5’te piyonla duran sağlam ama pasif bir yapı kurdu. Carlsen önce **12.Bb4** ile kara kareli filleri değişti (kendi piyonları kara karelerde olduğu için iyi filini değil, “kötü” filini verdi), sonra Siyahın kararsız taş manevralarını (17...Bc8 ile filin geri dönmesi) **19.f3 ve 20.e4** ile cezalandırdı. Anand’ın **20...dxe4?** hamlesinden sonra (motor: +0.6’dan +1.0’a) gelen **22.d5!** kırılması bir zincirleme değişimi başlattı: 22...cxd5 23.Qxd7 Rxd7 24.Nxe6 fxe6 ve ardından **25.Bh3!** ile e6 ve d5 piyonları aynı anda düştü ya da çözülmez biçimde zayıfladı. Vezirsiz oyunda Beyazın e5 piyonu, aktif fili ve **28.Rc7** ile yedinci yataya giren kalesi Siyahın taşlarını arka yataya kilitledi; 29.Bd7’den sonra Anand, malzeme henüz eşitken terk etti.',
  intro: 'Rubinstein sisteminde (4.e3) Beyazın klasik seçenekleri 5.Bd3 ve 5.Nf3’tür; **5.Ne2** (Reshevsky varyantı, bazı kaynaklarda Simagin adıyla) ise bambaşka bir felsefedir: Siyah fil c3’ü alırsa Beyaz atla geri alır ve **katmerli piyondan kaçınır**. Bedeli, f1 filinin bir süre kapalı kalmasıdır; bu yüzden Beyaz sonra g3 ve Bg2 ile fili uzun çapraza çıkarır. Siyah 6...Be7 ile fil çiftini vermeyi reddetti ve oyun bir Vezir Gambiti Reddi yapısına döndü. Anand 7...Nxd5 ve 10...exd5 ile Beyaza d5’te sabit bir hedef verdi; Carlsen bu hedefe g2 filiyle baskı yaptı, kara kareli filleri değiştirdi ve sonra merkezi **e4 ve d5 kırılmalarıyla** açtı. Bu oyunda izlenecek ana fikir şudur: sağlam ama pasif bir yapıyı çökertmek için önce rakibin iyi taşlarını değiş, sonra merkezde kırılmaları doğru sırayla hazırla, en sonunda değişimlerin bittiği yerde hangi zayıflıkların kaldığını hesapla.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '5.Ne2 ile ...Bxc3 gelirse **Nxc3** ile geri almak ve katmerli piyon almadan sağlam bir yapı kurmak; 6.a3 ile de fili hemen kararını vermeye zorlamak.',
      'g3–Bg2 ile f1 filini uzun çapraza çıkarıp d5 piyonuna kalıcı baskı kurmak; Siyahın b7 filini pasif bir savunucuya çevirmek.',
      '**12.Bb4** ile kara kareli filleri değişmek: Beyazın piyonları (a3, d4, e3, g3) kara karelerde olduğu için d2 fili onun “kötü” filiydi; Siyahın e7 fili ise c5 ve e5 kırılmalarını destekleyen iyi bir savunucuydu.',
      'Kaleleri c1 ve e1’e koyup hem c-hattındaki c6 piyonuna baskı yapmak hem de ileride gelecek **e4** ilerleyişini desteklemek.',
      '18.Qa4 ile c6’ya ve a7’ye bakmak, ardından **19.f3 ve 20.e4** ile merkezi açmak; fxe4 sonrası f-hattını da kaleler için açmak.',
      '22.d5! ile ikinci kırılmayı yapıp değişimler sonunda e6 ve d5’te zayıf piyonlar bırakmak, **25.Bh3** ile bu zayıflıklara h3–c8 çaprazından saldırmak.',
      'Vezirsiz oyunda e5 piyonuyla Siyah atını g8’e itmek, kaleyi **c7’ye** sokmak ve fil d7’ye gelince e6–e7 ilerleyişiyle Siyahı felç etmek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '6...Be7 ile fil çiftini korumak ve 7...Nxd5 ile taş değişip baskıyı hafifletmek; bu, ana hat 7...exd5’ten daha az bilinen ama son yıllarda denenen bir yoldu.',
      '9...b6 ve 11...Bb7 ile vezir kanadını geliştirmek ve d5 piyonunu fille savunmak (Carlsen 11...Bb7’yi “biraz pasif” buldu).',
      'Fırsat bulunca **...c5** ile asılı piyonlar (c5–d5) kurup aktif oyun aramak; 12...c5 ve 13...c5 bu fikrin en uygun anlarıydı.',
      '14...c6 ile d5’i kalıcı olarak desteklemek, sonra atı ...Ne4–d6 ile vezir kanadında ideal bir abluka karesine getirmek (Carlsen’in beklediği plan).',
      'Fili beyaz karelerde aktifleştirmek: 17...Bc8 fikri filin ...Bf5 ile d3 ve e4 karelerini kontrol etmesiydi; ancak bu zaman kaybı taktik olarak işe yaramadı.',
      '20. hamlede gerginliği koruyup (20...Qd7) e4–d5 piyon ikilisinin oluşmasına izin vermemek; değişimlerden sonra arka yatayı ve e6 zayıflığını savunabilecek taş düzenini korumak.',
    ] },
  },
  critical: [
    { move: '12w', title: '12.Bb4!? kötü fili iyi fille değişmek', text: 'Carlsen basın toplantısında kara kareli filleri önce değiştiğini çünkü kendi piyonlarını kara karelere koyduğunu söyledi. ChessBase’in analizinde hamle “provokatif” bulunuyor ve 12...c5’in ilginç olduğu yazıyor; Washington Times köşesi de 12...c5’in “daha aktif bir savunma vaat ettiğini” belirtiyor (Motor: 12...c5 +0.15, oyunda 12...Nf6 +0.30). Değişimden sonra Siyahın c5 kırılması desteksiz kalır ve d5 piyonu kalıcı bir hedef olur.' },
    { move: '17b', title: '17...Bc8?! filin uzun yolculuğu', text: 'Anand fili b7’den c8’e döndürüp f5 ya da e6’ya getirmek istedi. Carlsen’e göre bu “yeterince makul bir pozisyonel hamle”ydi ama “işe yaramıyor”; ChessBase hamleyi “biraz fazla pasif” buluyor, The Week in Chess ise kaybettiren hamle sayıyor. Motor 17...Rc7 ya da 17...h6’yı (+0.4) tercih ediyor; oyundaki hamleyle değerlendirme +0.67’ye çıkıyor. Beyaz bu zamanı 18.Qa4 ve 19.f3 için kullandı.' },
    { move: '19w', title: '19.f3! e4 kırılmasına hazırlık', text: 'Carlsen “Siyah için iyi bir plan bulamadığım için fikre bağlandım” diyerek f3 ve e4 planını seçti. ChessBase hamleyi Siyahın kötü yerleşmiş taşlarını cezalandırmanın “basit ve etkili” yolu olarak niteliyor. Motor da f3’ü en iyi buluyor (+0.6); 19.Qb4 (+0.4) daha yavaştır. e4 geldiğinde Siyahın d5 piyonu ya değişecek ya da e5 ile at f6’dan kovalanacak.' },
    { move: '20b', title: '20...dxe4? merkezi teslim etmek', text: 'ChessBase’e göre asıl hata bu; Anand muhtemelen Beyazın 22. hamlesini kaçırdı. Önerilen 20...Qd7 21.Nxe6 Qxe6 22.e5 Ne8 Siyah için “çok rahatsız ama henüz kayıp değil” (Motor: +0.75). 20...dxe4 21.fxe4 sonrası Beyazın e4–d4 ikilisi merkezde yan yana durur, f-hattı açılır ve d5 kırılması hazır hale gelir (Motor: +1.0).' },
    { move: '22w', title: '22.d5! zincirleme değişimin başlangıcı', text: 'ChessBase bu hamleye “!!” veriyor ve Anand’ın 22.d5’in sonuçlarını yanlış değerlendirdiğini yazıyor. Piyon e6 filine ve c6’ya saldırır; 22...cxd5 23.Qxd7 Rxd7 24.Nxe6 fxe6 sonrası Siyahın d5 ve e6’da iki zayıf piyonu kalır. 22...Bxd5? 23.exd5 cxd5 24.Qxd7 bir taş kaybettirir (Motor: +4.0). Motor 22.Nxe6’yı da güçlü buluyor (+1.3) ama d5 daha zorlayıcıdır (+1.5).' },
    { move: '25w', title: '25.Bh3! çifte saldırının anahtarı', text: 'Carlsen 24.Nxe6’yı “Bh3 ile birlikte öldürücü hamle” olarak niteledi, 25.Bh3’ten sonra ise “artık neredeyse bitti” dedi; Anand’ın bu fil hamlesini kaçırdığını düşünüyordu. Fil e6’ya, e4 piyonu d5’e saldırır ve d7 kalesi bağlantısız kalır. Motor: +2.0; 25.exd5? exd5 ise Siyahın yapısını düzeltir (−0.3). 25...Rd6? 26.e5 (+5.4) ve 25...Kf7? 26.exd5 (+3.0) daha da kötüdür.' },
    { move: '27b', title: '27...Rdd8? yedinci yatay terk ediliyor', text: 'Motor 27...Re7 28.Bxd5 Rd8 29.Bb3 ile (+1.5) hâlâ direnen bir savunma gösteriyor; ChessBase bu çizgiyi de Siyah için “berbat” buluyor ama en azından kale yedinci yatayı tutar. 27...Rdd8 sonrası 28.Rc7! ile kale içeri girer ve değerlendirme +2.7’ye çıkar. 27...Rad8?? ise 28.Bxd7 ile kale kaybettirirdi (+5.2).' },
    { move: '29w', title: '29.Bd7! Siyahın taşları felç', text: 'Fil d-hattını keser, e6 karesini destekler ve Siyahın d4 piyonunu yalnız bırakır. Carlsen’in notuna göre Beyaz d-piyonunu kazanacak ve ezici bir konum elde edecekti; Washington Times da 29...Ne7 30.e6 Nd5 31.Rb7 Nf6 gibi çizgileri veriyor (Motor: +3.1). Malzeme eşit olmasına rağmen Siyahın kaleleri ve atı arka yataya hapsolduğu için Anand terk etti.' },
  ],
  lessons: [
    'Rubinstein sisteminde 5.Ne2, fil çiftinden çok **sağlam piyon yapısını** öne alan bir kuruluştur: ...Bxc3 gelirse at geri alır ve Beyaz katmerli piyonla uğraşmaz.',
    'Piyonlarınız kara karelerdeyse kara kareli filiniz “kötü” fildir; onu rakibin iyi kara kareli filiyle değişmek (12.Bb4) hem kendi sorununuzu çözer hem de rakibin kırılmalarını (…c5) desteksiz bırakır.',
    'Sağlam ama pasif bir yapıda geçen her tempo önemlidir: 17...Bc8 gibi uzun bir fil yolculuğu, rakibe merkez kırılmasını hazırlamak için tam ihtiyacı olan zamanı verir.',
    'Merkezde gerginlik varken değişim yapmak (20...dxe4) rakibin piyonlarını ileri çeker; çoğu zaman gerginliği korumak (20...Qd7) daha iyidir.',
    'Bir piyon kırılması (e4) ikinciyi (d5) hazırlar; kırılmadan önce değişimlerin sonunda **hangi zayıf piyonun kalacağını** hesaplamak gerekir (oyunda e6 ve d5).',
    'Zincirleme değişimlerde son hamleyi görmek kritiktir: Anand’ın kaçırdığı düşünülen 25.Bh3, bütün serinin asıl noktasıydı.',
    'Vezirsiz oyunda yedinci yataya giren kale ve rakip taşlarını kesen fil (28.Rc7, 29.Bd7), malzeme eşitken bile oyunu bitirebilir; pasif taşlar fazladan bir piyon kadar ağır bir yüktür.',
  ],
  qa: [
    { q: 'Carlsen neden 5.Ne2 gibi nadir bir hat seçti?', a: 'Carlsen basın toplantısında Anand’ın uzun zamandır karşılaşmadığı bir hat oynamak istediğini söyledi; The Week in Chess’e göre Anand bu hattı yaklaşık on yıldır oynamamıştı. 5.Ne2 ile Beyaz ...Bxc3 gelirse Nxc3 ile geri alır ve katmerli piyondan kaçınır. Fikir keskin bir hazırlık savaşı değil, Anand’ı rahat bilmediği sağlam ve uzun bir pozisyonel oyuna çekmekti.' },
    { q: 'Siyah neden 7...exd5 değil 7...Nxd5 oynadı?', a: 'ChessBase’e göre 7...exd5 8.g3 sayısız kez oynanmış ana hattır; 7...Nxd5 ana hat değildir ama o dönemde denenmeye başlamıştı. Siyah taş değişerek d5 üzerindeki baskıyı hafifletmek istedi. Bedeli, 10.Nxd5 exd5 sonrası d5’te g2 filinin hedef aldığı sabit bir piyon kalmasıydı (Motor: 7...exd5 −0.05, 7...Nxd5 +0.23).' },
    { q: 'Beyaz neden kara kareli fillerin değişimine bu kadar önem verdi?', a: 'Carlsen kendi piyonlarını kara karelere (a3, d4, e3, g3) koyduğu için kara kareli filinin pasif kalacağını gördü. Siyahın e7 fili ise ...c5 kırılmasını destekleyen ve kara kareleri tutan iyi bir taştı. 12.Bb4 ve 15.Bxe7 sonrası Siyah ...c5 ile asılı piyon kurarsa bu piyonlar desteksiz kalır; Carlsen’in deyişiyle asılı piyonlar “dinamik olmaktan çok zayıf” olurdu.' },
    { q: 'Siyah neden 13...c5 ile aktif oyun aramadı?', a: 'Carlsen, 13...c5 sonrası da Beyazın hafif üstün olduğunu, çünkü Siyahın merkez piyonlarının zayıf olma ihtimalinin daha yüksek olduğunu söyledi (Motor: 13...c5 14.dxc5 bxc5 15.Bc3 +0.43). Anand 14...c6 ile “yavaş oynamayı” seçti. Yine de ChessBase ve Washington Times’a göre en iyi an bir hamle önceydi: 12...c5 (Motor +0.15) değişim olmadan aktif bir savunma sağlardı.' },
    { q: '17...Bc8 neden eleştirildi?', a: 'Fil b7’den c8’e dönüp f5’e gitmek istiyordu; Carlsen’e göre fil f5’e ulaşsaydı Siyahın sorunları çok azalırdı. Ama bu iki-üç tempo sürer ve Beyaz 18.Qa4 ile c6’ya baskı yapıp 19.f3 ile e4’ü hazırladı; fil f5’e hiç ulaşamadı ve e6’ya gitmek zorunda kaldı. Motor 17...Rc7 ya da 17...h6’yı (+0.4) daha iyi buluyor; oyunda değerlendirme +0.67’ye çıktı.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En net an 20. hamleydi: 20...Qd7 21.Nxe6 Qxe6 22.e5 Ne8 ile Siyah zor ama savunulabilir bir konumda kalırdı (Motor: +0.75; ChessBase “çok rahatsız ama henüz kayıp değil” diyor). 21. hamlede de 21...b5!? 22.Qb4 Qxb4 23.axb4 (Motor: +1.0 ile +1.6 arası) oyundaki 21...Qd7’den (+1.4) daha dirençliydi. 22.d5’ten sonra ise artık Siyahın sadece zarar azaltma şansı vardı.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Üç kaynaktan: d5’teki sabit piyon ve g2 filinin bu piyona baskısı; kara kareli fillerin değişimiyle Siyahın ...c5 kırılmasının zayıflaması; ve Siyahın fil manevralarıyla kaybettiği zaman. Carlsen bu zamanı f3–e4 ile merkezi açmak için kullandı. Değişimlerin sonunda Siyahın d5 ve e6’da iki zayıf piyonu, Beyazın ise h3–c8 çaprazında aktif bir fili kaldı.' },
    { q: '24.Nxe6 yerine 24.exd5 de oynanabilir miydi?', a: 'Carlsen’in notlarına göre 24.exd5 ile de Beyaz “çok üstün” olurdu ve Siyahın arka yatay sorunları olurdu. Motor ise burada aynı fikirde değil: 24.exd5 Bf5 sonrası değerlendirme sadece +0.2. 24.Nxe6 fxe6 25.Bh3 ise e6’yı ve d5’i aynı anda vurduğu için +1.8 kazandırır; Carlsen’in seçimi motorun da birinci tercihi.' },
    { q: 'Anand neden malzeme eşitken terk etti?', a: '29.Bd7’den sonra Siyahın kaleleri arka yatayda, atı g8’de ve hiçbir aktif hamlesi yok. Beyaz Rd1 ile d4 piyonunu alacak, e6 ve gerekirse e7 ile piyonunu ilerletecek ve şahını oyuna getirecek; Carlsen’in değerlendirmesi de buydu. Motor +3.1 gösteriyor; iki piyon kaybı ve geçer piyonun ilerleyişi kaçınılmaz.' },
  ],
  sources: [
    { title: 'ChessBase: Tal 05 – Carlsen beats Anand, Gelfand catches Nakamura (Alejandro Ramirez’in analiziyle)', url: 'https://en.chessbase.com/post/tal-05-carlsen-beats-anand-gelfand-catches-nakamura-190613' },
    { title: 'The Week in Chess: 8th Tal Memorial 2013 (5) – Carlsen crushes Anand (Carlsen’in basın toplantısı notlarıyla)', url: 'https://theweekinchess.com/chessnews/events/8th-tal-memorial-2013/carlsen-crushes-anand-in-tal-memorial-round-5' },
    { title: 'Chess.com: Carlsen Crushes Anand at Tal, Gelfand & Nakamura Lead', url: 'https://www.chess.com/news/view/carlsen-crushes-anand-at-tal-gelfand--nakamura-lead-3973' },
    { title: 'The Washington Times: Moscow battle hints at championship fight (David R. Sands)', url: 'https://m.washingtontimes.com/news/2013/jun/25/sands-moscow-battle-hints-at-championship-fight/' },
    { title: 'Chess Daily News: Magnus Carlsen crushes Viswanathan Anand', url: 'https://chessdailynews.com/devastating-defeat' },
    { title: 'Grantham Chess World: 8th Tal Memorial round 5', url: 'https://grantham-chess-world.blogspot.com/2013/06/8th-tal-memorial-round-5.html' },
    { title: 'Rossiyskaya Gazeta: Карлсен победил Ананда на Мемориале Таля', url: 'https://rg.ru/2013/06/20/shahmaty.html' },
    { title: '365Chess: E46 Nimzo-Indian, Reshevsky / Simagin varyantı', url: 'https://www.365chess.com/eco/E46_Nimzo-Indian_Simagin_variation' },
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkezde d4 piyonunu kurar ve c4 ile Vezir Gambiti tarzı oyunlara kapı açar.',
      amac: 'Merkezi bir piyonla tutmak, c1 filinin yolunu açmak ve kapalı, pozisyonel oyunlara yönelmek.',
      neden: 'Carlsen her iki ilk hamleyi de oynar; Anand’a karşı uzun bir manevra oyunu istediği için d4’ü seçti. d4 piyonu vezirle korunur, bu yüzden e4’ten farklı olarak erken taktik saldırılara daha az açıktır.',
      diger: [
        { move: '1.e4', text: 'Daha açık oyunlara yol açar; motor neredeyse eşit görüyor (Motor: +0.29). Anand 1.e4’e karşı Sicilya ve Ruy Lopez’de son derece hazırlıklıydı.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; çoğu zaman d4’lü yapılara geçer (Motor: +0.22).' },
      ],
    },
    '1b': {
      text: '1...Nf6 ile Siyah e4 karesini kontrol eder ve hangi Hint yapısını kuracağını sonraya bırakır.',
      amac: 'Beyazın e4 ile merkezi tamamlamasını engellemek ve Nimzo-Hint, Damahint ya da Kral Hint’e geçme esnekliğini korumak.',
      neden: 'Anand’ın d4’e karşı ana silahlarından biri Nimzo-Hint’tir; 1...Nf6 bu yola giden doğal başlangıçtır. 1...d5’ten farkı, merkezi piyonla hemen bağlamamasıdır.',
      diger: [
        { move: '1...d5', text: 'Klasik Vezir Gambiti yolları; Anand bunu da sık oynar (Motor: +0.32).' },
        { move: '1...c6', text: 'Slav’a hazırlık; ama 2.e4 ile Caro-Kann’a geçilebilir (Motor: +0.43).' },
      ],
    },
    '2w': {
      text: '2.c4 vezir kanadında alan kazanır ve d5 karesine baskı yapar.',
      amac: 'Siyahın ...d5 ile merkezi rahatça kurmasını zorlaştırmak ve b1 atına c3 karesini hazırlamak.',
      neden: 'Kapalı açılışlarda c4, Beyazın asıl merkez baskısıdır. 2.Nf3 ile Nimzo-Hint’ten kaçınılabilirdi, ama Carlsen Nimzo-Hint’e girmeyi göze aldı çünkü 4.e3 sonrası hazırladığı nadir bir hat vardı.',
      diger: [
        { move: '2.Nf3', text: 'Nimzo-Hint’e izin vermeden oynamak isteyenlerin seçimi (Motor: +0.30).' },
        { move: '2.Bg5', text: 'Trompowsky; daha az teorik ama Siyaha rahat oyun verir.' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah f8 filine yol açar ve ...Bb4 ya da ...d5 seçeneklerini hazırlar.',
      amac: 'Fili b4’e çıkararak Nimzo-Hint’e girmek ya da 3.Nf3’e karşı Damahint/Vezir Gambiti Reddine geçmek.',
      neden: 'e6 hem sağlam hem esnektir: d5 karesini destekler ve f8 filine çapraz açar. 2...g6 gibi Kral Hint yapıları daha keskindir, ama Anand bu dönemde daha çok sağlam yapıları tercih ediyordu.',
      diger: [
        { move: '2...g6', text: 'Kral Hint ya da Grünfeld; daha dinamik ve riskli (Motor: +0.41).' },
        { move: '2...c5', text: 'Benoni yapılarına gider; Beyaza 3.d5 ile alan verir.' },
      ],
    },
    '3w': {
      text: '3.Nc3 atı geliştirir ve e4 ilerleyişini destekler; aynı zamanda Nimzo-Hint’e izin verir.',
      amac: 'e4 ile tam merkez kurmayı tehdit etmek; Siyah ...Bb4 ile bu tehdidi engellemeye çalışacak.',
      neden: '3.Nf3 ya da 3.g3 Nimzo-Hint’ten kaçınmanın yollarıdır. Carlsen 3.Nc3 ile ana yolu kabul etti, çünkü 4.e3 ve 5.Ne2 ile Anand’ın son yıllarda karşılaşmadığı bir sisteme girmeyi planlıyordu.',
      diger: [
        { move: '3.Nf3', text: 'Damahint’e ya da Vezir Gambiti’ne yönelir (Motor: +0.39).' },
        { move: '3.g3', text: 'Katalan; uzun vadeli beyaz kare baskısı (Motor: +0.44).' },
      ],
    },
    '3b': {
      text: '3...Bb4 Nimzo-Hint Savunmasıdır: fil c3 atını bağlar ve e4’ü dolaylı yoldan engeller.',
      amac: 'Gerekirse fili c3 atına verip Beyaza katmerli piyon yaptırmak ve e4 karesini kontrol altında tutmak.',
      neden: 'Bu, Nimzowitsch’in profilaktik fikrinin özüdür: Siyah merkezi piyonlarla değil taşlarla kontrol eder. 3...d5 ile Vezir Gambiti Reddine geçmek de mümkündü.',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Reddi (Motor: +0.33).' },
        { move: '3...b6', text: 'Damahint fikri; 4.e4 ile Beyaz merkezi rahatça alır.' },
      ],
    },
    '4w': {
      text: '4.e3 Rubinstein sistemidir: Beyaz önce gelişir, f1 filine yol açar ve d4’ü sağlamlaştırır.',
      amac: 'Merkezi sağlam tutmak, hızla gelişip rok yapmak ve ...Bxc3 değişimine karşı esnek kalmak.',
      neden: '4.Qc2 (Klasik) ve 4.Nf3 de ana seçeneklerdir; 4.e3 ise en eski ve en sağlam yoldur. Carlsen burada 5.Ne2 gibi az oynanan bir alt sisteme girebilmek için Rubinstein’ı seçti.',
      diger: [
        { move: '4.Qc2', text: 'Klasik sistem; ...Bxc3 gelirse vezir alır ve piyon yapısı bozulmaz (Motor: +0.30).' },
        { move: '4.Nf3', text: 'Esnek; 4...b6 ya da 4...c5 ile cevaplanır (Motor: +0.25).' },
        { move: '4.a3', text: 'Sämisch; fil çiftini hemen zorlar ama katmerli piyon kabul eder.' },
      ],
    },
    '4b': {
      text: '4...O-O ile Siyah şahını güvenceye alır ve merkezdeki kararı (…d5, ...c5 ya da ...b6) Beyazın kuruluşunu gördükten sonra verir.',
      amac: 'Beyazın 5.Bd3, 5.Nf3 ya da 5.Ne2 seçimine göre en uygun yapıyı kurabilmek.',
      neden: 'Rubinstein’da 4...O-O en esnek hamledir; 4...c5 ve 4...d5 de eşit değerdedir (Motor: hepsi +0.20). Rok önce gelince Beyazın 5.Ne2 sistemine karşı ...d5 ve ...Be7 düzeni doğallaşır.',
      diger: [
        { move: '4...c5', text: 'Merkezde hemen gerginlik; 5.Ne2 ile Beyaz yine katmerli piyondan kaçınabilir (Motor: +0.20).' },
        { move: '4...b6', text: 'Damahint–Nimzo karışımı; fil b7’den e4’e bakar.' },
      ],
    },
    '5w': {
      text: '5.Ne2 (Reshevsky varyantı): at f3 yerine e2’ye gelir; ...Bxc3 olursa Nxc3 ile geri alınır.',
      amac: 'Katmerli piyon almadan fil çiftini kazanmayı tehdit etmek; a3 ile fili kararını vermeye zorlamak.',
      neden: 'Carlsen “Anand’ın uzun zamandır karşılaşmadığı bir hat oynamak istedim” dedi; The Week in Chess’e göre Anand bu hattı yaklaşık on yıldır görmemişti. Bedeli f1 filinin geçici olarak kapanmasıdır; bu yüzden Beyaz ileride g3 ve Bg2 oynayacak.',
      diger: [
        { move: '5.Bd3', text: 'Ana hat; 5...d5 6.Nf3 c5 7.O-O ile klasik Rubinstein yapıları (Motor: +0.12).' },
        { move: '5.Nf3', text: 'Esnek gelişim; ...Bxc3+ bxc3 ile katmerli piyon kabul edilir (Motor: +0.11).' },
      ],
    },
    '5b': {
      text: '5...d5 merkezi piyonla tutar ve c4 piyonuna baskı yapar.',
      amac: 'Beyazın a3 ve Nxc3 ile fil çiftini kazanmasına karşı merkezde sağlam bir yer edinmek; cxd5 gelirse Vezir Gambiti tipi bir yapıya geçmek.',
      neden: 'Bu sistemde ...d5 en doğal cevaplardandır. 5...c5 ya da 5...b6 6.a3 Bxc3+ 7.Nxc3 ile Beyaza temiz fil çifti verir (Motor: ikisi de +0.4 civarı); 5...d5 ise fili e7 ya da d6’ya çekmeye hazırlanır.',
      diger: [
        { move: '5...c5', text: '6.a3 Bxc3+ 7.Nxc3 cxd4 8.exd4 d5 9.c5 sonrası Beyaz fil çiftiyle rahattır (Motor: +0.47).' },
        { move: '5...Re8', text: 'Bekleme hamlesi; motor eşit değerde görüyor (Motor: +0.07).' },
        { move: '5...b6', text: '6.a3 Bxc3+ 7.Nxc3 ile Beyaz fil çiftini alır (Motor: +0.43).' },
      ],
    },
    '6w': {
      text: '6.a3 fili hemen sorgular: Siyah ya c3’te değişecek ya da geri çekilecek.',
      amac: 'Fil çiftini kazanmak ya da fili e7’ye çekerek Siyahı zaman kaybetmeye zorlamak.',
      neden: '5.Ne2 sisteminin mantığı budur: ...Bxc3+ Nxc3 ile katmerli piyon olmadan fil çifti. Motor da a3’ü en iyi hamle buluyor; 6.cxd5 exd5 7.Ng3 c5 ise Siyaha rahat oyun verir (Motor: −0.08).',
      diger: [
        { move: '6.cxd5', text: '6...exd5 7.Ng3 c5 ile Siyah aktif olur (Motor: −0.08).' },
        { move: '6.Bd2', text: 'Yavaş; 6...Re8 ile Siyah rahat gelişir (Motor: −0.19).' },
      ],
    },
    '6b': {
      text: '6...Be7 ile Siyah fili geri çeker ve fil çiftini korur.',
      amac: 'Bir tempo kaybı pahasına fil çiftini elde tutmak ve oyunu klasik Vezir Gambiti Reddi yapısına taşımak.',
      neden: '6...Bxc3+ 7.Nxc3 Beyaza temiz fil çifti verir (Motor: +0.35). 6...Bd6 (Simagin hattı) ise 7.c5 ile tempo kaybettirir (Motor: +0.18). Be7 en sağlam seçenektir ve motorun birinci tercihi (+0.05).',
      diger: [
        { move: '6...Bxc3+', text: '7.Nxc3 ile Beyaz fil çiftini katmerli piyonsuz alır (Motor: +0.35).' },
        { move: '6...Bd6', text: '365Chess’te Simagin varyantı olarak geçen hat; 7.c5 ve 7.Ng3 en sık cevaplardır (Motor: +0.18).' },
      ],
    },
    '7w': {
      text: '7.cxd5 merkezde gerginliği çözer ve Siyahı d5’i nasıl geri alacağına karar vermeye zorlar.',
      amac: 'Siyah piyonla alırsa d5’te sabit bir hedef, atla alırsa taş değişimleriyle hafif bir gelişim üstünlüğü elde etmek.',
      neden: 'Beyaz bu yapıda yapıyı netleştirmeyi tercih eder. 7.Ng3 ve 7.Nf4 de oynanır ve eşit değerdedir (Motor: +0.04 ve 0.00); cxd5 Beyaza g3–Bg2 ile d5’e baskı planını açar.',
      diger: [
        { move: '7.Ng3', text: 'Atı oyuna sokar; 7...b6 8.cxd5 exd5 ile benzer yapılar (Motor: +0.04).' },
        { move: '7.Nf4', text: 'd5’e hemen baskı; 7...c6 ile Siyah sağlamdır (Motor: 0.00).' },
      ],
    },
    '7b': {
      text: '7...Nxd5 ile Siyah atla alır ve c3 atıyla değişim fırsatı yaratır.',
      amac: 'Taş değişerek Beyazın baskısını azaltmak ve sıkışık konumdan rahatlamak.',
      neden: 'ChessBase’e göre bu ana hat değil ama yakın zamanda denenmişti; ana hat 7...exd5 8.g3 sayısız kez oynanmıştır. Motor 7...exd5’i biraz daha iyi buluyor (−0.05’e karşı +0.23), çünkü atla alış sonunda d5’te yine piyonla kalınacak ve Beyaz zaman kazanacaktır.',
      diger: [
        { move: '7...exd5', text: 'Ana hat: 8.g3 Re8 9.Bg2 ile klasik yapı; Siyahın c8 fili serbesttir (Motor: −0.05).' },
      ],
    },
    '8w': {
      text: '8.Bd2 fili geliştirir ve ileride b4 karesine yönelmeye hazırlar.',
      amac: 'c3 atını korumak, c1 filini d2–b4 yoluyla Siyahın e7 filiyle değişime hazırlamak.',
      neden: 'Carlsen burada Anand’ın uzun süredir karşılaşmadığı hatta girdiğini, onun çok hazırlıklı olmamasını umduğunu söyledi. 8.g3 8...Nxc3 9.Nxc3 c5 ile Siyaha kolay ...c5 verir (Motor: +0.16); 8.Bd2 motorun birinci tercihi (+0.18).',
      diger: [
        { move: '8.g3', text: '8...Nxc3 9.Nxc3 c5 ile Siyah merkezde rahatlar (Motor: +0.16).' },
        { move: '8.Qc2', text: 'Vezir c-hattında; 8...b6 ile Siyah sağlam kalır (Motor: +0.08).' },
      ],
    },
    '8b': {
      text: '8...Nd7 ikinci atı geliştirir; at f6’ya ya da c5’e bakabilir.',
      amac: 'd5 atı değişirse f6’dan merkezi yeniden desteklemek ve ...c5 kırılmasını hazırlamak.',
      neden: 'The Week in Chess’e göre Anand burada 2002’deki Aronian oyunundan ayrıldı. 8...b6 ve 8...Nf6 eşit değerdedir (Motor: +0.15 ve +0.20); Nd7 esnekliği korur.',
      diger: [
        { move: '8...b6', text: '9.Nxd5 exd5 10.Nf4 Bb7 ile benzer yapı (Motor: +0.15).' },
        { move: '8...Nf6', text: 'At geri çekilir ama c3 atı serbest kalır (Motor: +0.20).' },
      ],
    },
    '9w': {
      text: '9.g3 ile Beyaz f1 filini g2’ye çıkarmaya hazırlanır.',
      amac: 'Fili uzun çapraza yerleştirip d5 karesine ve Siyahın vezir kanadına baskı kurmak.',
      neden: 'e2 atı f1 filinin yolunu kapattığı için fianketto doğal çözümdür. 9.Qc2 (Motor: +0.15) da iyidir; 9.Ng3 ise 9...N5f6 ile Siyaha rahat ...c5 verir (Motor: 0.00).',
      diger: [
        { move: '9.Qc2', text: '9...c5 10.Nxd5 exd5 11.Nf4 ile asılı piyon yapıları (Motor: +0.15).' },
        { move: '9.Ng3', text: 'At aktifleşir ama ...c5 çok kolaylaşır (Motor: 0.00).' },
      ],
    },
    '9b': {
      text: '9...b6 c8 filini b7’ye çıkarmaya hazırlar.',
      amac: 'Fili uzun çapraza koyup d5’i ve e4 karesini savunmak, ...c5 için zemin hazırlamak.',
      neden: 'ChessBase bunu Siyaha sağlam bir konum veren yeni bir fikir olarak niteliyor. Alternatif 9...N5f6 10.Bg2 e5 2005’teki Aronian–Gelfand oyununda berabere bitmişti; motor o çizgide Beyazı biraz üstün görüyor (+0.7). 9...b6 motorun birinci tercihi (+0.17).',
      diger: [
        { move: '9...N5f6', text: '10.Bg2 e5 11.O-O exd4 12.Nxd4 ile açık oyun; Aronian–Gelfand 2005 berabere (Motor: +0.71).' },
        { move: '9...Nxc3', text: '10.Bxc3 ile Beyazın fili uzun çaprazda güçlenir (Motor: +0.31).' },
      ],
    },
    '10w': {
      text: '10.Nxd5 atları değişir ve Siyahı d5’e piyonla almaya zorlar.',
      amac: 'd5’te sabit bir Siyah piyonu oluşturmak; bu piyon g2 filinin ve ileride Nf4’ün hedefi olacak.',
      neden: '10.Bg2 Bb7 11.Nxd5 Bxd5 sonrası Siyah filini d5’te değişebilirdi (Motor: +0.18); Nxd5 hemen alınınca Siyahın d5’e fille alma şansı yoktur, çünkü 10...Bb7? 11.Nxe7+ taş kaybettirir. 10.e4 Nxc3 11.Bxc3 c5 ise Siyaha erken aktiflik verir (Motor: −0.08).',
      diger: [
        { move: '10.Bg2', text: '10...Bb7 11.Nxd5 Bxd5 ile Siyah iyi fili değişir (Motor: +0.18).' },
        { move: '10.e4', text: '10...Nxc3 11.Bxc3 c5 12.d5 ile keskin ama eşit (Motor: −0.08).' },
      ],
    },
    '10b': {
      text: '10...exd5 zorunludur; Siyahın d5’te piyonu kalır ve e-hattı yarı açılır.',
      amac: 'Taşı geri almak ve merkezi piyonla tutmak.',
      neden: 'Başka yol yoktur: 10...Bb7? 11.Nxe7+ Qxe7 bir taş kaybettirir (Motor: +3.4). Bu yapı Vezir Gambiti Reddi’nin değişim varyantına benzer: Siyah e-hattında aktif olabilir ama d5 kalıcı bir hedeftir.',
    },
    '11w': {
      text: '11.Bg2 fili uzun çapraza yerleştirir ve d5’e doğrudan baskı yapar.',
      amac: 'd5 piyonunu kalıcı bir baskı altında tutmak; Siyahın taşlarını savunmaya bağlamak.',
      neden: 'Bu yapıda g2 fili Beyazın en önemli taşıdır. 11.Rc1 ya da 11.Nf4 de oynanabilirdi (Motor: ikisi de 0.00), ama önce filin çıkması rokun yolunu da açar.',
      diger: [
        { move: '11.Nf4', text: 'd5’e ikinci baskı; 11...Nf6 12.Bg2 ile benzer (Motor: 0.00).' },
        { move: '11.Rc1', text: 'c-hattını önceden almak; ama rok gecikir (Motor: +0.01).' },
      ],
    },
    '11b': {
      text: '11...Bb7 fili b7’ye getirir ve d5’i destekler.',
      amac: 'd5’i fille korumak ve ileride ...c5 ile beyaz kareli çapraza açılmak.',
      neden: 'Carlsen bu hamleyi “biraz pasif” buldu ve aklına on yıl önceki Ponomariov–Kramnik oyununu getirdiğini söyledi. Motor 11...Nf6 (+0.21) ya da 11...Ba6’yı (+0.26) tercih ediyor: a6’daki fil e2 karesine ve Beyazın rokuna bakar, b7’deki fil ise d5 piyonuna çarpar.',
      diger: [
        { move: '11...Nf6', text: '12.Bb4 Re8 ile at önce gelir, fil kararını sonra verir (Motor: +0.21).' },
        { move: '11...Ba6', text: 'Fil aktif bir çapraza çıkar ve Beyazın rokunu zorlaştırır (Motor: +0.26).' },
      ],
    },
    '12w': {
      text: '12.Bb4!? kara kareli fili Siyahın e7 filiyle değişmeye sunar.',
      amac: 'Beyazın “kötü” filini Siyahın iyi savunucusuyla değişmek ve ...c5 kırılmasını desteksiz bırakmak.',
      neden: 'Carlsen, piyonlarını kara karelere koyduğu için önce kara kareli filleri değiştiğini söyledi. ChessBase hamleyi “provokatif” sayıyor. Motor da Bb4’ü açık ara en iyi buluyor (+0.42); 12.O-O a5 13.b4 ile Siyah vezir kanadında karşı oyun alır (+0.17).',
      diger: [
        { move: '12.O-O', text: '12...a5 ile Siyah b4 karesini kapatır (Motor: +0.17).' },
        { move: '12.Qc2', text: '12...a5 13.O-O Nf6 ile Siyah rahattır (Motor: +0.13).' },
      ],
    },
    '12b': {
      text: '12...Nf6 atı f6’ya getirir; at d5’i ve e4 karesini destekler.',
      amac: 'Merkezi korumak ve ileride ...Ne4 ile aktif bir kare aramak.',
      neden: 'ChessBase ve Washington Times’a göre 12...c5 burada daha ilginçti: Bb4 fili saldırı altında kalırken asılı piyonlar desteksiz değildir (Motor: 12...c5 +0.15). Nf6 değişime izin verir ve Siyahın ...c5 şansını zayıflatır (Motor: +0.30).',
      diger: [
        { move: '12...c5', text: '13.dxc5 bxc5 14.Bc3 Nf6 ile aktif savunma; Washington Times “daha aktif bir savunma vaat ediyordu” diyor (Motor: +0.15).' },
        { move: '12...c6', text: '13.O-O Re8 14.Bxe7 Rxe7 ile oyundakine benzer pasif yapı (Motor: +0.41).' },
      ],
    },
    '13w': {
      text: '13.O-O ile Beyaz şahını güvenceye alır.',
      amac: 'Şahı korumaya almak ve kaleleri c- ve e-hatlarına bağlamak.',
      neden: 'Beyazın acelesi yoktur: b4 fili Siyahın e7 filine baskı yapmaktadır ve Siyah değiştirse bile a3 piyonu b4’ü geri alır. 13.Bxe7 Qxe7 14.O-O c5 Siyaha kolay ...c5 verirdi (Motor: +0.18).',
      diger: [
        { move: '13.Bxe7', text: '13...Qxe7 14.O-O c5 ile Siyah vezirle geri alıp ...c5 oynar (Motor: +0.18).' },
        { move: '13.Rc1', text: '13...Bxb4+ 14.axb4 ile a-hattı açılır ama şah merkezde kalır (Motor: +0.29).' },
      ],
    },
    '13b': {
      text: '13...Re8 kaleyi yarı açık e-hattına getirir ve e7 filini destekler.',
      amac: 'Fil değişirse kaleyle geri almak ve e-hattında Beyazın e3 piyonuna baskı kurmak.',
      neden: 'Carlsen 13...c5 sonrası da Beyazı hafif üstün gördü, çünkü asılı piyonların zayıf kalma ihtimali yüksekti (Motor: 13...c5 14.dxc5 bxc5 15.Bc3 +0.43). Motor 13...c5 ve 13...a5’i Re8’e göre biraz daha iyi buluyor.',
      diger: [
        { move: '13...c5', text: '14.dxc5 bxc5 15.Bc3 ile asılı piyonlar; Carlsen’e göre Beyaz hafif üstün (Motor: +0.33/+0.43).' },
        { move: '13...a5', text: '14.Bxe7 Qxe7 15.Re1 c5 ile Siyah biraz daha aktif (Motor: +0.35).' },
      ],
    },
    '14w': {
      text: '14.Rc1 kaleyi yarı açık c-hattına getirir.',
      amac: 'c7 ve c6 karelerine baskı yapmak; ...c5 kırılmasını daha da zorlaştırmak.',
      neden: 'c-hattı Beyazın vezir kanadındaki doğal oyun alanıdır. 14.Qc2 de benzer fikirdedir (Motor: +0.32); Rc1 vezire esneklik bırakır ve motorun birinci tercihidir (+0.37).',
      diger: [
        { move: '14.Qc2', text: '14...c6 15.Rfc1 Ba6 ile benzer (Motor: +0.32).' },
        { move: '14.Nf4', text: '14...Ba6 ile Siyah f1 karesine bakar (Motor: +0.28).' },
      ],
    },
    '14b': {
      text: '14...c6 d5’i piyonla destekler ve c-hattını kapatır.',
      amac: 'Merkezi kalıcı olarak sağlamlaştırmak ve c7 karesindeki baskıyı azaltmak.',
      neden: 'Carlsen’in deyişiyle Anand “yavaş oynamaya karar verdi”. c6 ile d5 artık güvendedir ama Siyah ...c5 dinamizminden vazgeçmiştir ve b7 fili iyice pasifleşir. 14...h6 eşit değerdedir (Motor: +0.32).',
      diger: [
        { move: '14...h6', text: '15.Bxe7 Qxe7 16.Re1 ile benzer (Motor: +0.32).' },
        { move: '14...Rc8', text: '15.Qa4 a5 16.Bxe7 ile kale c8’de pasif (Motor: +0.43).' },
      ],
    },
    '15w': {
      text: '15.Bxe7 filleri değişir; Siyahın kara kareli savunucusu tahtadan çıkar.',
      amac: '12.Bb4 planını tamamlamak: Siyahın kara karelerini zayıflatmak ve Beyazın piyonlarının kara karelerde rahat olmasını sağlamak.',
      neden: 'Değişim artık en uygun anda gelir: Siyah c6 oynadığı için ...c5 kırılması bir tempo daha ister. 15.Re1 de mümkündü ama Siyah ...Bxb4 axb4 ile kendi zamanında değiştirirdi (Motor: +0.35).',
      diger: [
        { move: '15.Re1', text: '15...Bxb4 16.axb4 Qd6 ile değişim Siyahın elinde (Motor: +0.35).' },
        { move: '15.Qc2', text: '15...Ba6 ile Siyah fili aktifleştirir (Motor: +0.19).' },
      ],
    },
    '15b': {
      text: '15...Rxe7 kaleyle geri alır ve e-hattını korur.',
      amac: 'Veziri esnek tutmak ve kaleyi ikinci yatayda c7’ye geçmeye hazır bekletmek.',
      neden: 'Motor 15...Qxe7’yi biraz daha iyi buluyor (+0.36’ya karşı +0.45), çünkü vezir e7’den e-hattını ve kara kareleri tutar. 15...Qd7?? ise 16.Bxf6 ile taş kaybettirir (Motor: +6.5).',
      diger: [
        { move: '15...Qxe7', text: '16.Nf4 Ba6 17.Re1 Rac8 ile vezir aktif (Motor: +0.36).' },
      ],
    },
    '16w': {
      text: '16.Re1 kaleyi e-hattına getirir.',
      amac: 'İleride gelecek e3–e4 ilerleyişini desteklemek ve e-hattındaki Siyah kalesine karşı koymak.',
      neden: 'Carlsen’in planı merkezi açmaktır; e1 kalesi e4’ü önceden destekler. Motor 16.Nf4 ya da 16.Rc3’ü (+0.40) çok az daha iyi buluyor; Re1 daha az zorlayıcı ama planla uyumlu (+0.31).',
      diger: [
        { move: '16.Nf4', text: '16...Qd6 17.Qa4 ile oyundakine yakın konum (Motor: +0.40).' },
        { move: '16.Rc3', text: '16...Ne4 17.Bxe4 Rxe4 18.Qc2 ile c6 baskı altında (Motor: +0.39).' },
      ],
    },
    '16b': {
      text: '16...Qd6 veziri d6’ya getirir; vezir e-hattını ve kara kareleri tutar.',
      amac: 'Kara karelerdeki boşluğu vezirle doldurmak ve kaleleri birbirine bağlamak.',
      neden: 'Carlsen bu hamleye şaşırdı; 16...Ne4 ve ...Nd6 bekliyordu, çünkü d6’daki at vezir kanadı piyonlarını ablukaya alırdı. Ancak 17.Nd3 sonrası Beyazın “zaten iki sonuç için oynadığını” söyledi. Motor ise Qd6’yı en iyi buluyor (+0.23); 16...Ne4 17.Nf4 a5 18.Re2 de Beyaza biraz avantaj verir (+0.56).',
      diger: [
        { move: '16...Ne4', text: 'Carlsen’in beklediği hamle: at d6’ya gidip abluka kurar (Motor: +0.56).' },
        { move: '16...Rc8', text: '17.Nf4 h6 18.Qa4 a5 ile pasif (Motor: +0.38).' },
      ],
    },
    '17w': {
      text: '17.Nf4 at d5’e ve e6 karesine bakar.',
      amac: 'd5’e üçüncü bir baskı eklemek ve Siyah filinin e6’ya gelmesini kontrol altında tutmak.',
      neden: 'Atın e2’de hiçbir işi yoktu; f4’te merkezin kalbindedir ve ileride Nxe6 ile Siyahın iyi beyaz kareli taşını değişebilir. Motor 17.Rc3 (+0.29) ve 17.Qc2’yi çok az daha iyi buluyor; farklar küçüktür.',
      diger: [
        { move: '17.Rc3', text: '17...Ne4 18.Bxe4 Rxe4 19.b4 ile vezir kanadında baskı (Motor: +0.29).' },
        { move: '17.Qc2', text: '17...g6 18.Nf4 Rc7 ile benzer (Motor: +0.25).' },
      ],
    },
    '17b': {
      text: '17...Bc8?! fil b7’den geri döner; hedefi f5 ya da e6 karesidir.',
      amac: 'Pasif b7 filini beyaz karelerde aktif bir taşa çevirmek: f5’te d3 ve e4 karelerini tutmak.',
      neden: 'Carlsen “artık fili f5’e geçirmeye çalışıyor, ondan sonra sorunları çok azalırdı” dedi ama ekledi: “makul bir pozisyonel hamle, sadece işe yaramıyor.” ChessBase hamleyi “biraz fazla pasif” buluyor; Siyah konumun açılmayacağına güveniyor. Motor 17...Rc7 ya da 17...h6’yı tercih ediyor (+0.4); Bc8 ile +0.67.',
      diger: [
        { move: '17...Rc7', text: '18.Qa4 h6 19.Rc3 c5 ile Siyah ...c5’i hazırlar (Motor: +0.39).' },
        { move: '17...h6', text: 'Şaha luft açar ve g5 karesini kontrol eder (Motor: +0.40).' },
        { move: '17...Ba6', text: 'Fil a6–f1 çaprazına; 18.Rc3 h6 19.Qa4 Bb5 (Motor: +0.46).' },
      ],
    },
    '18w': {
      text: '18.Qa4 vezirle c6 piyonuna ve a7’ye baskı yapar.',
      amac: 'Siyahın taşlarını c6’yı savunmaya bağlamak ve vezir değişimi tehdidiyle Siyahı zorlamak.',
      neden: 'c8 filinin gitmesiyle c6 bir savunucusunu kaybetti; Qa4 bunu hemen hedef alır. Carlsen bundan sonra planını değiştirip f3’e geçtiğini söyledi. Motor Qa4’ü en iyi buluyor (+0.68); 18.Qd2 ve 18.Qb3 daha zayıftır.',
      diger: [
        { move: '18.Qb3', text: '18...Bf5 19.Qb4 Rd7 ile Siyah filini istediği yere getirir (Motor: +0.43).' },
        { move: '18.Qd2', text: '18...a5 19.f3 Bf5 ile Siyah rahatlar (Motor: +0.47).' },
      ],
    },
    '18b': {
      text: '18...Rc7 kaleyle c6’yı savunur.',
      amac: 'c6’yı korurken filin c8’den e6 ya da f5’e çıkmasına izin vermek.',
      neden: 'Carlsen’e göre 18...Bd7 sonrası vezir değişimi Beyazın lehineydi ve Siyah bazı çizgilerde “oldukça çabuk kaybedebilirdi” (Motor: 18...Bd7 19.Qb4 Qxb4 20.axb4 +0.79). Rc7 motorun birinci tercihi (+0.60).',
      diger: [
        { move: '18...Bd7', text: '19.Qb4 Qxb4 20.axb4 ile vezirsiz oyunda b5 kırılması tehdidi; Carlsen bunu Beyaz lehine buldu (Motor: +0.79).' },
        { move: '18...Bb7', text: 'Fil geri döner; 19.Rc2 g5 20.Nd3 ile zaman kaybı belgelenir (Motor: +0.73).' },
      ],
    },
    '19w': {
      text: '19.f3! e4 ilerleyişini hazırlar.',
      amac: 'e4 ile d5 piyonuna saldırmak; değişim olursa fxe4 ile geri alıp f-hattını açmak.',
      neden: 'Carlsen “Siyah için iyi bir plan bulamadım, bu yüzden fikre bağlandım” dedi ve hedefini e4–e5 olarak açıkladı. ChessBase hamleyi “basit ve etkili” buluyor, The Week in Chess Carlsen’in f3’ten sonra Anand için iyi fikir bulamadığını yazıyor. Motor: +0.61; 19.Qb4 Qd8 daha yavaştır (+0.39).',
      diger: [
        { move: '19.Qb4', text: '19...Qd8 20.f3 Bb7 21.e4 ile aynı plan bir tempo geç (Motor: +0.39).' },
        { move: '19.h4', text: 'Şah kanadında alan; 19...h6 20.Qb4 ile yavaş (Motor: +0.33).' },
      ],
    },
    '19b': {
      text: '19...Be6 fili e6’ya getirir ve d5’i bir kez daha destekler.',
      amac: 'e4 kırılmasına karşı d5’i en güçlü şekilde savunmak ve fili nihayet aktif bir kareye koymak.',
      neden: 'e4 geldikten sonra f5’e gitmek anlamsız olduğundan fil e6’da durur. Bedeli, f4 atının Nxe6 ile bu fili her an alabilmesidir. Carlsen 19...Qd8’e karşı acele etmeye gerek olmadığını ve Qb3 ile e5’in çok güçlü olacağını söyledi (Motor: 19...Qd8 +1.0).',
      diger: [
        { move: '19...Qd8', text: '20.e4 dxe4 21.fxe4 Bb7 ile Siyah sıkışık; Carlsen’e göre Qb3 ve e5 çok güçlü (Motor: +1.0).' },
        { move: '19...g5', text: '20.Nd3 Be6 21.e4 ile şah kanadı zayıflar (Motor: +0.83).' },
      ],
    },
    '20w': {
      text: '20.e4! merkezi açar; d5 piyonu saldırı altındadır.',
      amac: 'Siyahı ya merkezde değişime ya da e5 ile atın kovalanmasına razı etmek.',
      neden: 'Bütün hazırlık bunun içindi: f3 desteği, e1 kalesi ve f4 atı. ChessBase’e göre Anand’ın sorunları, Carlsen’in e4’e fazla direnç görmeden ulaşmasıyla büyüdü. Motor e4’ü en iyi buluyor (+0.62); 20.Rcd1 ya da 20.Kh1 gibi hazırlık hamleleri Siyaha zaman verir.',
      diger: [
        { move: '20.Rcd1', text: '20...g6 21.e4 Ne8 ile Siyah hazırlanır (Motor: +0.40).' },
        { move: '20.Kh1', text: 'Şahı çaprazdan çeker ama 20...g5 ile Siyah aktifleşir (Motor: +0.37).' },
      ],
    },
    '20b': {
      text: '20...dxe4? Siyah merkezde değişir ve Beyaza güçlü bir piyon merkezi verir.',
      amac: 'd5 piyonunun baskısından kurtulmak ve e4’ü bir hedef olarak görmek.',
      neden: 'ChessBase’e göre bu asıl hata; Anand büyük olasılıkla Beyazın 22. hamlesini kaçırdı. 21.fxe4 sonrası Beyazın e4–d4 ikilisi oluşur, f-hattı açılır ve d5 kırılması hazırdır. Önerilen 20...Qd7 21.Nxe6 Qxe6 22.e5 Ne8 “çok rahatsız ama henüz kayıp değil” (Motor: +0.75; dxe4 ile +1.0).',
      diger: [
        { move: '20...Qd7', text: '21.Nxe6 Qxe6 22.e5 Ne8 23.Rc3 ile Siyah sıkışık ama ayakta (Motor: +0.75).' },
        { move: '20...c5', text: '21.dxc5 Rxc5 22.Rcd1 Qc7 ile d5 izole kalır (Motor: +0.82).' },
      ],
    },
    '21w': {
      text: '21.fxe4 f-piyonuyla alır; e4 ve d4 piyonları merkezde yan yana durur.',
      amac: 'f-hattını açmak, merkez piyonlarını e5 ve d5 ilerleyişlerine hazırlamak.',
      neden: '21.Nxe6 Qxe6 22.fxe4 Siyahı rahatlatırdı (Motor: +0.21), çünkü e6 fili kendi isteğiyle değişmeden Siyahın tek iyi taşı gider ve zayıflık yaratılmaz. 21.Rcd1?? exf3 ise piyon kaybettirir (Motor: −0.50). fxe4 açık ara en iyisi (+1.05).',
      diger: [
        { move: '21.Nxe6', text: '21...Qxe6 22.fxe4 Rd8 ile Siyah rahatlar (Motor: +0.21).' },
        { move: '21.Rcd1', text: '21...exf3 22.Nxe6 fxe6 23.Bxf3 ile Beyaz piyonu kaybeder (Motor: −0.50).' },
      ],
    },
    '21b': {
      text: '21...Qd7 vezirle d-hattını ve e6 filini destekler, a4 vezirine karşı durur.',
      amac: 'd5 ilerleyişini durdurmak ve vezir değişimiyle baskıyı azaltmak.',
      neden: 'Carlsen bunun beklediği ana hat olduğunu söyledi ve Anand’ın 25.Bh3’ü kaçırdığını düşündü; burada Beyazı kazanmış gördü. Motor 21...b5!? 22.Qb4 Qxb4 23.axb4 ile (+1.0 ile +1.6 arası) daha dirençli bir yol gösteriyor; Washington Times da 21...b5 sonrası Beyazın avantajının sürdüğünü yazıyor. 21...Qe7? 22.e5 Nd5 23.Rxc6 ise daha kötü (+2.5).',
      diger: [
        { move: '21...b5', text: '22.Qb4 Qxb4 23.axb4 ile vezirler gider ama Beyaz c5 ve d5 karelerinde baskı sürdürür (Motor: +1.0 ile +1.6 arası).' },
        { move: '21...Qe7', text: '22.e5 Nd5 23.Rxc6 ile piyon kaybı (Motor: +2.5).' },
      ],
    },
    '22w': {
      text: '22.d5! ikinci kırılma: piyon c6’ya ve e6 filine saldırır.',
      amac: 'Zincirleme değişimler yoluyla Siyahın d5 ve e6’da zayıf piyonlarla kalmasını sağlamak; h3–c8 çaprazını açmak.',
      neden: 'ChessBase hamleyi “öldürücü” sayıp “!!” veriyor ve Carlsen’in asıl hesabının bu olduğunu yazıyor. 22.Nxe6 Qxe6 23.d5 de güçlüdür (Motor: +1.3) ama Siyahın veziri e6’da aktif kalır. 22.d5 ile değişimlerin sırası Beyazın kontrolündedir (Motor: +1.5).',
      diger: [
        { move: '22.Nxe6', text: '22...Qxe6 23.d5 Qe5 24.dxc6 ile de Beyaz üstün ama Siyah veziri aktif (Motor: +1.3).' },
        { move: '22.h3', text: 'Bekleme; 22...Rd8 ile Siyah d-hattını tutar (Motor: +0.75).' },
      ],
    },
    '22b': {
      text: '22...cxd5 piyonla alır; Siyahın başka iyi yolu yoktur.',
      amac: 'Taş kaybetmeden d5 piyonunu ortadan kaldırmak.',
      neden: '22...Bxd5? 23.exd5 cxd5 24.Qxd7 Rxd7 bir taş kaybettirir (Motor: +4.0), çünkü fil d5’te değişince Siyah taşını geri alamaz. 22...c5? 23.Qxd7 Bxd7 24.d6 ile geçer piyon doğar (+4.7). cxd5 tek makul hamledir (+1.46).',
      diger: [
        { move: '22...Bxd5', text: '23.exd5 cxd5 24.Qxd7 Rxd7 ile Beyaz bir taş fazla (Motor: +4.0).' },
        { move: '22...c5', text: '23.Qxd7 Bxd7 24.d6 ile Beyazın güçlü geçer piyonu (Motor: +4.7).' },
      ],
    },
    '23w': {
      text: '23.Qxd7 vezirleri değişir.',
      amac: 'Siyah kalesini d7’ye çekip bağlantısız bırakmak ve ardından Nxe6 ile serinin devamını getirmek.',
      neden: 'Bu zorunlu bir ara hamledir: 23.Nxe6?? Rxc1 24.Rxc1 Qxa4 ile vezir kaybedilir (Motor: −5.8). 23.Qb3? Rxc1 24.Rxc1 dxe4 de Beyazın aleyhine (−2.5). Qxd7 tek doğru yoldur (+1.69).',
      diger: [
        { move: '23.Nxe6', text: '23...Rxc1 24.Rxc1 Qxa4 ile Beyaz vezir kaybeder (Motor: −5.8).' },
        { move: '23.Qb3', text: '23...Rxc1 24.Rxc1 dxe4 ile Siyah piyonu kazanır (Motor: −2.5).' },
      ],
    },
    '23b': {
      text: '23...Rxd7 kaleyle geri alır.',
      amac: 'Vezirin karşılığını almak ve c-hattındaki kale değişimine izin vermemek.',
      neden: '23...Bxd7? 24.Rxc7 c7 kalesini kaybettirir (Motor: +5.5); 23...Rxc1? ise 24.Qb7 ile daha kötü olur (+4.5). Rxd7 zorunludur ama kale artık d7’de, c-hattından uzak ve e6 filini korumuyor.',
    },
    '24w': {
      text: '24.Nxe6! atı e6 filine verir.',
      amac: 'Siyahı fxe6 ile almaya zorlayıp e6’da zayıf bir piyon yaratmak ve h3–c8 çaprazına hazırlık yapmak.',
      neden: 'Carlsen bunu “Bh3 ile birlikte öldürücü hamle” olarak niteledi. Kendi notunda 24.exd5 ile de “çok üstün” olacağını ve Siyahın arka yatay sorunlarını vurguladı; motor ise 24.exd5 Bf5 sonrası sadece +0.2 görüyor. Nxe6 motorun açık ara birinci tercihi (+1.77).',
      diger: [
        { move: '24.exd5', text: '24...Bf5 25.h3 h6 ile Siyah toparlanır; Carlsen bunu da Beyaz lehine gördü ama motor sadece +0.2 diyor.' },
        { move: '24.e5', text: '24...Ne4 25.Nxe6 fxe6 ile at e4’te güçlü (Motor: 0.00).' },
      ],
    },
    '24b': {
      text: '24...fxe6 piyonla alır; e6’da zayıf bir piyon oluşur.',
      amac: 'Taşı geri almak ve d5 piyonunu e6 ile desteklemek.',
      neden: 'Diğer yollar taş kaybettirir: 24...dxe4 25.Ng5 (Motor: +4.25) ya da 24...Nxe4 25.Nc7 (+4.3) işe yaramaz. fxe6 ile d5 piyonu desteklenir ama hem e6 hem d5 g2 filinin hedefi haline gelir ve f-hattı Beyazın kalelerine açılır.',
      diger: [
        { move: '24...dxe4', text: '25.Ng5 Rd2 26.Nxe4 ile Beyaz bir taş fazla kalır (Motor: +4.25).' },
      ],
    },
    '25w': {
      text: '25.Bh3! fil e6’ya saldırır; e4 piyonu da d5’e saldırmaktadır.',
      amac: 'Siyahın merkez piyonlarından en az birini kazanmak ve kalan zayıflıkları kalıcı hale getirmek.',
      neden: 'Carlsen “artık neredeyse bitti” dedi ve Anand’ın bu hamleyi kaçırdığını düşündü. Washington Times hamleyi 25.exd5’ten “çok daha zorlayıcı” ve Siyahın kaçırmış ya da hafife almış olabileceği bir hamle olarak niteliyor. ChessBase’e göre “işin özü” buydu. Motor: +1.96; 25.exd5? exd5 Siyahın yapısını düzeltir (−0.31).',
      diger: [
        { move: '25.exd5', text: '25...exd5 ile Siyahın d5 piyonu desteklenir ve zayıflık kalmaz (Motor: −0.31).' },
        { move: '25.Rc6', text: '25...dxe4 26.Bxe4 Nxe4 27.Rxe4 ile Beyaz avantajını kaybeder (Motor: −0.29).' },
      ],
    },
    '25b': {
      text: '25...Kh8 şahı köşeye çeker; Bxe6 artık şah çekmeyecek.',
      amac: 'Fil e6’yı aldığında şah tehditlerinden ve f7 üzerindeki sıkıntılardan kaçmak; c8 ve g8 karelerini atla kullanabilmek.',
      neden: 'ChessBase bu hamlenin Siyahı oyunda tuttuğunu söylüyor; 25...Rd6? 26.e5 Beyaza kazandırır (Motor: +5.4) ve Washington Times’a göre 25...Kf7? 26.exd5 Nxd5 27.Bxe6+ ölümcüldür (Motor: +3.0). Motor 25...Re8’i çok az daha iyi buluyor (+1.9’a karşı +2.2).',
      diger: [
        { move: '25...Re8', text: '26.exd5 Rdd8 27.Bxe6+ Kh8 ile Beyaz bir piyon fazla (Motor: +1.9).' },
        { move: '25...Rd6', text: '26.e5 Rdd8 27.exf6 ile Beyaz kazanır (Motor: +5.4).' },
        { move: '25...Kf7', text: '26.exd5 Rd6 27.Rc7+ ile d5 ve e6 çöker (Motor: +3.0).' },
      ],
    },
    '26w': {
      text: '26.e5! atı f6’dan kovalar ve e-piyonunu ileri taşır.',
      amac: 'Siyah atını pasif g8 karesine itmek, ardından Bxe6 ile e6 piyonunu kazanmak ve e5’i ilerleyen bir geçer piyon olarak kullanmak.',
      neden: 'ChessBase hamleye “!” verip “pozisyonel olarak isabetli” diyor; 26.Bxe6 daha açgözlü bir seçenekti. Motor burada 26.Bxe6’yı biraz daha güçlü buluyor (+2.1’e karşı +1.6), ama e5 Siyahın atını oyundan çıkardığı ve kendi piyonunu güvenceye aldığı için pratik açıdan daha kolay bir yoldur. 26.exd5? Nxd5 ise avantajı büyük ölçüde azaltır (+0.5).',
      diger: [
        { move: '26.Bxe6', text: '26...Re7 27.exd5 Rd8 28.Rc6 ile Beyaz bir piyon fazla (Motor: +2.1).' },
        { move: '26.exd5', text: '26...Nxd5 27.Bxe6 Rdd8 ile at d5’te aktifleşir (Motor: +0.5).' },
      ],
    },
    '26b': {
      text: '26...Ng8 at geri çekilir.',
      amac: 'Atı kurtarmak ve gerektiğinde e7’den d5 ya da c6 karelerine geri getirmek.',
      neden: 'At için iyi bir kare yoktur: 26...Ne4 27.Bxe6 Rdd8 28.Rcd1 ile e4 atı ve d5 piyonu düşer (Motor: +2.5); 26...Nh5 ya da 26...Ne8 de benzer değerdedir (+1.9 civarı). Ng8 en az kötüsüdür (+1.78).',
      diger: [
        { move: '26...Ne4', text: '27.Bxe6 Rdd8 28.Rcd1 ile Beyaz d5’i de toplar (Motor: +2.5).' },
        { move: '26...Nh5', text: '27.Bxe6 Re7 28.Bxd5 ile at kenarda kalır (Motor: +1.9).' },
      ],
    },
    '27w': {
      text: '27.Bxe6 e6 piyonunu alır; fil d7 kalesine saldırır.',
      amac: 'Malzeme kazanmak ve kaleyi tempo kazanarak kovalamak.',
      neden: 'Bu, 25.Bh3’ün doğal meyvesidir. 27.Rc6 da güçlüdür (Motor: +1.29) ama hemen almak hem bir piyon kazandırır hem de d5’e sıradaki hedef olarak bakar (+1.78). 27.Rc3 gibi yavaş hamleler Siyaha ...Re7 ile toparlanma şansı verir.',
      diger: [
        { move: '27.Rc6', text: '27...Re8 28.Bxe6 Rdd8 ile benzer ama daha az zorlayıcı (Motor: +1.29).' },
      ],
    },
    '27b': {
      text: '27...Rdd8? kale d8’e çekilir ve yedinci yatayı terk eder.',
      amac: 'Kaleyi saldırıdan kurtarmak ve d5 piyonunu arkadan desteklemek.',
      neden: 'Bu, c7 karesini Beyaz kalesine bırakır. Motor 27...Re7 28.Bxd5 Rd8 29.Bb3 ile kalenin yedinci yatayı tutmasını öneriyor (+1.46); ChessBase bu çizgiyi Siyah için “berbat” buluyor, ama oyundaki hamle daha da kötü (+2.74). 27...Rad8?? 28.Bxd7 ise kale kaybettirir (+5.2).',
      diger: [
        { move: '27...Re7', text: '28.Bxd5 Rd8 29.Bb3 g6 ile Siyah piyon eksik ama yedinci yatay korunur (Motor: +1.46).' },
        { move: '27...Rad8', text: '28.Bxd7 Rxd7 ile bir kale kaybedilir (Motor: +5.2).' },
      ],
    },
    '28w': {
      text: '28.Rc7! kale yedinci yataya girer.',
      amac: 'a7 piyonuna saldırmak, Siyahın taşlarını arka yataya hapsetmek ve Bd7 ile birlikte e6–e7 ilerleyişini hazırlamak.',
      neden: 'Yedinci yataydaki kale vezirsiz oyunda bir piyondan daha değerlidir. 28.Bxd5?? Rxd5 bir taş kaybettirir (Motor: −3.55) çünkü fil d5’te korunmasızdır. 28.Red1 de iyidir (+2.13) ama Rc7 hem saldırır hem de Siyahın ...Re8 savunmasını zorlaştırır (+2.70).',
      diger: [
        { move: '28.Red1', text: '28...Ne7 29.Rc7 Ng6 30.Rxd5 ile de Beyaz üstün (Motor: +2.13).' },
        { move: '28.Bxd5', text: '28...Rxd5 ile fil kaybedilir; d5 henüz korunuyor (Motor: −3.55).' },
      ],
    },
    '28b': {
      text: '28...d4 d-piyonunu ilerletir.',
      amac: 'Piyonu Bxd5 tehdidinden uzaklaştırmak ve d3–d2 ile karşı şans aramak.',
      neden: 'Piyon ilerler ama Beyazın fili d7’ye gelince d-hattı kapanır ve piyon yalnız kalır. Motor 28...a6 (+2.95) ya da 28...b5’i (+3.1) çok az daha iyi buluyor; hiçbiri Siyahı kurtarmaz çünkü taşların pasifliği temel sorun.',
      diger: [
        { move: '28...a6', text: '29.Rec1 d4 30.Bd7 Ne7 ile a-piyonu korunur ama baskı sürer (Motor: +2.95).' },
        { move: '28...g6', text: 'Şaha nefes alanı; 29.Bd7 Rdb8 30.Rd1 ile d4 düşer (Motor: +3.16).' },
      ],
    },
    '29w': {
      text: '29.Bd7! fil d7’ye gelir ve d-hattını keser; Anand terk etti.',
      amac: 'd4 piyonunu Siyah kalelerinden ayırmak, e6–e7 ilerleyişini desteklemek ve Siyahın taşlarını tamamen felç etmek.',
      neden: 'Carlsen’e göre Beyaz bundan sonra d-piyonunu kazanacak ve ezici bir konuma ulaşacaktı. Washington Times’a göre felç olmuş Siyah, 29...Ne7 30.e6 Nd5 31.Rb7 Nf6 gibi çizgilerle karşılaştı (Motor: +3.1). 29.Re4 ya da 29.Rec1 de kazanç için yeterliydi (+2.4) ama Bd7 hepsinden açık.',
      diger: [
        { move: '29.Re4', text: '29...Re8 30.Bf7 ile d4 düşer ama daha yavaş (Motor: +2.47).' },
        { move: '29.Rec1', text: '29...d3 30.Bd7 ile aynı fikir bir hamle sonra (Motor: +2.43).' },
      ],
    },
  },
  exercises: [
    { id: 'ca-1', kind: 'tekrar', plan: true, title: 'İkinci kırılma: d5',
      source: 'Carlsen – Anand, Moskova 2013 (22. hamle)',
      fen: 'r5k1/p1rq1ppp/1pp1bn2/8/Q2PPN2/P5P1/1P4BP/2R1R1K1 w - - 1 22',
      prompt: 'Beyaz e4 ile merkezi açtı ve fxe4 ile geri aldı. Şimdi e4 ve d4 piyonları yan yana. Carlsen’in planı neydi?',
      hint: 'd-piyonu e6 filine ve c6 piyonuna saldırabilir.',
      line: ['d5'],
      accept: { 0: ['Nxe6'] },
      explanation: '**22.d5!** Piyon e6 filine saldırır; değişimlerden sonra vezirler gider ve h3-c8 çaprazı açılır. Motor 22.Nxe6’yı da güçlü görüyor (d5 +1.8, Nxe6 +1.4).',
      link: 'Bir piyon kırılması ikincisini hazırladı: e4’ten sonra d5.' },
    { id: 'ca-2', kind: 'tekrar', plan: false, title: 'Fil h3’e',
      source: 'Carlsen – Anand, Moskova 2013 (25. hamle)',
      fen: 'r5k1/p2r2pp/1p2pn2/3p4/4P3/P5P1/1P4BP/2R1R1K1 w - - 0 25',
      prompt: 'Vezirler değişti. Siyahın e6’da zayıf bir piyonu var. Beyazın fili g2’de. Fil nereye gider?',
      hint: 'Fil e6 piyonuna saldırabileceği çapraza gitsin.',
      line: ['Bh3'],
      explanation: '**25.Bh3!** Fil e6 piyonuna saldırır; Siyah onu korumakta zorlanır. 25.exd5? exd5 sonrası Siyahın piyonları düzelir. Motor: Bh3 +2.2, 25.Rc6 −0.2.',
      link: 'd5 kırılmasının amacı e6 zayıflığını yaratmaktı; fil şimdi onu hedef alıyor.' },
    { id: 'ca-3', kind: 'transfer', plan: false, title: 'Kale yedinci yatayda',
      source: 'Spasski – Petrosyan, SSCB Takımlar Şampiyonası 1975 (26. hamle)',
      fen: 'r2r2k1/1pR1qppp/3bpn2/pB1P1nB1/P5Q1/5N2/1P3PPP/R5K1 w - - 3 26',
      prompt: 'Beyazın kalesi c7’de. Siyahın veziri e7’de ve Beyazın g4 vezirine at saldırıyor. Hamle sizde.',
      hint: 'Kale yedinci yatayda neye saldırıyor?',
      line: ['Rxe7'],
      explanation: '**26.Rxe7!** Kale Siyah vezirini alır; 26...Nxg4 27.Rxb7 sonrası Beyazın kalesi yedinci yatayda piyonları toplar. Motor: Rxe7 +2.4, 26.Bxf6 0.0, 26.Rxb7?? −2.4.',
      link: 'Carlsen kalesini c7’ye getirip yedinci yatayı kullandı; Spasski de aynı karede aynı fikri uyguladı.' },
    { id: 'ca-4', kind: 'transfer', plan: false, title: 'Savunucuyu almak',
      source: 'Aronian – Karpov, Hoogeveen 2003 (28. hamle)',
      fen: 'rn2r1k1/2q1Bpp1/p3pn1p/2p1N3/2P5/8/PPQR1PPP/3R2K1 w - - 10 28',
      prompt: 'Beyazın fili e7’de, atı e5’te. Siyahın f6 atı şahın tek savunucusu. Beyazın en güçlü hamlesi hangisi?',
      hint: 'Fil atı alırsa ...gxf6 sonrası vezir nereye gelir?',
      line: ['Bxf6'],
      explanation: '**28.Bxf6! gxf6 29.Qe4** ve vezir a8 kalesine ve g6 karesine saldırır. Motor: Bxf6 +4.5, sonraki en iyi hamle +1.9.',
      link: 'Carlsen merkezi açıp e6 zayıflığını hedef aldı; Aronian merkezdeki atıyla şahın savunucusunu hedef aldı.' },
  ],
};
