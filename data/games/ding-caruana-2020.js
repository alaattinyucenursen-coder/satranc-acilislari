// Ding Liren – Caruana, Adaylar turnuvası, Yekaterinburg 2020 (3. tur). Kaynak: PgnMentor (Ding.pgn).
export default {
  id: 'ding-caruana-2020',
  theme: 'Ne5 ve f3 ile c4’ü geri almak, sonra e4 merkezi',
  white: 'Ding Liren', black: 'Fabiano Caruana',
  whiteShort: 'Ding', blackShort: 'Caruana',
  event: 'Adaylar turnuvası, 3. tur', site: 'Yekaterinburg', year: 2020, eco: 'D17',
  variation: 'Slav Savunması, Çek varyantı, 6.Ne5 e6 7.f3', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6 7. f3 Bb4 8. Nxc4 O-O 9. Kf2 e5 10. Nxe5 Bc2 11. Qd2 c5 12. d5 Bb3 13. e4 Re8 14. Qf4 c4 15. Nxc4 Nbd7 16. Be3 Nf8 17. Bd4 Ng6 18. Qf5 Bxc4 19. Bxc4 Qc7 20. Be2 Bc5 21. Bxc5 Qxc5+ 22. Kf1 h6 23. Rd1 Qb6 24. Rd2 Qe3 25. Rc2 a6 26. Qh3 b5 27. Qg3 b4 28. Nd1 Qb3 29. Rd2 Qxa4 30. Qf2 Qd7 31. g3 Qh3+ 32. Kg1 a5 33. Qd4 Nh5 34. Nf2 Qd7 35. f4 Nhxf4 36. gxf4 Nxf4 37. Kf1 Qd6 38. Rg1 f6 39. Bb5 Re7 40. b3 Rf8 41. Rc2 Ne6 42. Qe3 Ng5 43. h4 Nf7 44. Rc6 Qb8 45. Qc5 Qd8 46. Rxf6 Kh8 47. Rf5 Rc7 48. Bc6 a4 49. bxa4 b3 50. Rg3 b2 51. Rb3 Nd6 52. Rxf8+ Qxf8 53. Rxb2 Qf4 54. Rb8+ Kh7 55. Qc2 Re7 56. e5+ Nf5 57. Qe4 Qc1+ 58. Kg2 g6 59. Rb3 1-0`,

  summary: 'Bu oyun 2020 Adaylar turnuvasının en çok konuşulan oyunlarından biri oldu. İlk iki turu kaybeden Ding, Caruana’nın sürpriz Slav’ına karşı en iddialı yolu seçti: **6.Ne5 ve 7.f3** ile c4 piyonunu geri aldı, ...Bb4 bağına karşı şahını rok yerine **9.Kf2** ile f2’ye götürdü. Caruana evde hazırladığı **9...e5!?** yeniliğini çok hızlı oynayıp bir piyon, 14...c4 ile ikinci bir piyon verdi; amacı iki fil ve açık hatlarla merkezdeki Beyaz şahını avlamaktı. Ding saatte bir saatten fazla geride kalmasına rağmen doğru sırayla savundu: **12.d5** ile hatları kapadı, **13.e4** ile merkezi kurdu, **22.Kf1!** ile bağdan kaçtı. Siyah 17...Ng6 ve özellikle **22...h6?** ile zaman kaybedince Beyaz veziri h3-g3-f2 yolundan kurtardı, **28.Nd1!** ile bir piyonu geri verip tam bir konum üstünlüğü kurdu. Caruana 35...Nhxf4 ile at fedasına girişti, ama fazla taş ve **d-e piyonları** konuştu: 46.Rxf6 savunmayı kırdı, 56.e5+ açarak şah çekme oyunu bitirdi.',
  intro: '1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 ile Siyah c4 piyonunu alır; buna Slav’ın ana kolu denir. Beyaz **5.a4** ile ...b5’i önler, böylece piyon uzun süre tutulamaz. Siyah **5...Bf5** ile fili, e6 piyonu yolunu kapatmadan dışarı çıkarır: bu Çek varyantıdır. Burada Beyazın iki ana yolu var: sakin **6.e3** (Hollanda varyantı, 6...e6 7.Bxc4 Bb4 8.O-O) ya da enerjik **6.Ne5** (Krause hücumu). Ding ikincisini seçti. 6...e6 7.f3 sonrası Beyazın fikri açıktır: Nxc4 ile piyonu geri almak, sonra **e4** ile merkezi ele geçirip f5 filini kovalamak. Siyah 7...Bb4 ile c3 atını bağlayıp e4’ü zorlaştırır; 8.e4 Bxe4 9.fxe4 Nxe4 gibi taş fedalı keskin yollar teoride iyi bilinir. Ding 8.Nxc4 ve **9.Kf2** ile bağı şahını f2’ye götürerek çözdü. Caruana bu konumda **9...e5!?** yeniliğini oynadı; birçok kaynak oyunun hızından bunun ev hazırlığı olduğunu çıkardı.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Ne5 ve Nxc4** ile Siyahın aldığı c4 piyonunu geri almak; a4 ile ...b5’e izin vermeyip Siyahın piyonu tutmasını engellemek.',
      'f3 ve **e4** ile büyük bir merkez kurmak; ...Bb4 bağını rokla değil **Kf2** ile çözmek (şah c3 atının arkasından çekilince bağ anlamsızlaşır).',
      'Siyah piyon feda ettiğinde hatları kapatmak: **12.d5** ile c- ve d-hatlarını açmamak, **13.e4** ile d5 piyonunu desteklemek ve f1 filine yol açmak.',
      'Şahı tehlikeli çaprazlardan uzak tutmak: 22.Kf1 ile c5 vezirinin bağlarından kaçmak, sonra g3 ve Kg1 ile şah kanadını sağlamlaştırmak.',
      'Vezirin kurtarılması: Ding’in kendi sözüyle önce Rd1, sonra vezir **h3-g3-f2** yoluyla geri gelir; 28.Nd1 ile bir piyon geri verilir ama taşlar mükemmel yerleşir.',
      'Fazla taşla kazanmak: Siyahın at fedasından sonra kaleleri açık hatlara (Rg1, Rc6) getirip **46.Rxf6** ile şahın önünü açmak.',
      'Merkez piyonlarını oyun sonunda silah yapmak: d5 ve e4 piyonları alan kazanır, sonunda **56.e5+** vezirin çaprazını açarak şah çeker.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...Bf5 ve ...Bb4 ile hızlı gelişip e4 ilerleyişini zorlaştırmak; ...O-O ile şahı Beyazdan önce güvenceye almak.',
      '**9...e5!?** ve **14...c4** piyon fedalarıyla hatları açmak; karşılığında iki fil, gelişme üstünlüğü ve f2’deki şaha karşı saldırı şansı.',
      'Fili ...Bc2 ve ...Bb3 ile Beyazın vezir kanadına sokup Qd1’i rahatsız etmek, Beyazın a1 kalesini ve f1 filini bağlamak.',
      'Kaleyi e-hattına (...Re8) getirip e4 ve e5’e baskı; ...Bc5 ile kara kareli filleri değişip vezirle şaha şah çekmek.',
      'Atları ...Nf8-g6 ve ...Nh5 ile şah kanadına toplamak; f4 karesine fedalar (35...Nhxf4) aramak.',
      'Oyun sonunda a- ve b-piyonlarıyla vezir kanadında geçer piyon yaratıp Beyazı savunmaya zorlamak (48...a4, 49...b3).',
    ] },
  },
  critical: [
    { move: '9w', title: 'Kf2: rok yerine şah yürüyüşü', text: 'Beyaz rok yapmaz; şahı f2’ye götürür. Böylece c3 atı artık şaha bağlı değildir ve e4 ilerleyişi tehlikesiz hale gelir; f3 piyonu da şahın önünde kalkan olur. Bedeli, şahın bir süre merkezde kalması ve h1 kalesinin uzun süre oyuna girememesidir. Motor bu hamleyi açık ara en iyisi sayıyor: 9.Kf2 +0.3, 9.e4 ya da 9.h4 ise eşitliğin altında.' },
    { move: '9b', title: '9...e5!? Caruana’nın yeniliği', text: 'Caruana bu piyon fedasını çok hızlı oynadı; FIDE’nin raporuna göre hamleyi yapıp masadan kalktı, bu da ev hazırlığına işaret ediyordu. chess24’e göre Ding burada 17 dakika düşündü. ChessBase hamleyi “oldukça taviz veren bir karar” olarak niteledi. Motor 9...Nd5 (+0.4) ya da 9...Bg6’yı (+0.5) tercih ediyor; 9...e5 sonrası Beyaz +0.75. Fikir, 10.Nxe5 Bc2! ile vezire saldırmak ve 11.Qxc2? Qxd4+ tuzağını kurmaktır.' },
    { move: '12w', title: '12.d5: hatları kapatmak', text: 'Ding 12.dxc5 ile kolay bir yol (Motor: +0.2) yerine 12.d5 ile en iddialı devamı seçti (+0.6). chess24’e göre bu karar ona 17 dakika daha kaybettirdi. Piyon merkezde kalarak d-hattını kapatır, Siyahın taşlarına d5’i vermez ve c5 piyonunu hareketsiz bırakır. Siyah 12...Be4 ile d5’e saldırsaydı daha iyiydi (+0.5); 12...Bb3 sonrası 13.e4 geldi.' },
    { move: '13w', title: '13.e4! merkez ve fil', text: 'e4 hem d5 piyonunu destekler hem de f1 filinin önünü açar; e5 atı ...Nxd5 gibi fikirlerden korunur. Bu, 7.f3’ün aslında hazırladığı ilerleyiştir. Motor: 13.e4 +0.9; 13.Nd3 ya da 13.Qg5 gibi hamleler −0.5. Siyah e-hattına 13...Re8 ile gelir ve oyun keskinleşir.' },
    { move: '18w', title: '18.Qf5: kaçan fırsat', text: 'chess24 17...Ng6’yı “cezasız kalmış bir hata” olabilir diye yorumladı, The Week in Chess’in analizinde de motorun bu konumdaki ilk tercihinin 18.Qc1 olduğu belirtiliyor. Motor bunu doğruluyor: 18.Qc1! Rc8 19.Nd2 sonrası Beyaz +1.9, çünkü vezir c-hattında atı ve c3’ü korur, at da kaçar. Ding’in 18.Qf5’i sonrası 18...Bxc4 19.Bxc4 zorunlu oldu ve avantaj +0.5’e indi. Saatte geride olan Ding’in zor bir konumda en keskin devamı görmemesi anlaşılır.' },
    { move: '22b', title: '22...h6? oyunun dönüm noktası', text: 'The Week in Chess’te Mark Crowther, Caruana’nın “22...h6?’ya kadar iyi” olduğunu, bu hamleyi yaklaşık bir dakikada oynadığını ve 22...Re5’in Siyaha tam karşılık verdiğini yazdı. chess24 de 22...Re5! 23.Qh3 Qb4! ile Siyahın karşılığı olduğunu belirtti. Motor: 22...Re5 +0.2, 22...h6 +1.0. Ding basın toplantısında “h6 yerine belki başka bir şey” dedi; h6’dan sonra Rd1 ve vezirin h3-g3-f2 yoluyla dönüşünü planladı.' },
    { move: '28w', title: '28.Nd1! piyonu geri verip konumu kazanmak', text: 'At e3 vezirine saldırır. 28.Qf2? Qxf2+ 29.Kxf2 bxc3 sonrası Beyaz taş kaybetmez ama avantaj neredeyse tamamen gider (Motor: +0.1). 28.Nd1 ile Beyaz a4 piyonunu geri verir, ama chess24’ün deyişiyle karşılığında “tam bir konum üstünlüğü” alır (+1.7). Ding de ancak vezir g3’e geldikten ve Siyahın karşı oyunu kalmadıktan sonra konumunun çok iyi olduğunu düşündüğünü söyledi.' },
    { move: '35w', title: '35.f4 ve Siyahın at fedası', text: '35.f4 iki şey yapar: e2 filinin h5’e giden çaprazını açarak h5 atına saldırır ve f5 ile g6 atını kovalamayı tehdit eder. Caruana 35...Nhxf4 36.gxf4 Nxf4 ile atı iki piyona verip şahın önünü açmaya çalıştı. Motor fedayı Siyahın en dirençli yolu sayıyor (+2.6); 35...Nf6 gibi sakin hamleler +3.4–3.6. Beyaz 37.Kf1 ve 38.Rg1 ile savundu ve fazla taşını korudu.' },
    { move: '56w', title: '56.e5+! açarak şah', text: 'e-piyonu ilerleyince c2 vezirinin h7’deki şaha giden çaprazı açılır, piyon da d6 atına saldırır. Siyah 56...Nf5 ile kapatmak zorunda kalır ve d-piyonu d6-d7’ye yürümeye hazırlanır. Motor: 56.e5+ +6.7, 56.Rd8 +5.2. Oyun boyunca alan kazandıran merkez piyonları burada tek hamlede hem hat açar hem taş kovalar.' },
  ],
  lessons: [
    'Çek varyantında 6.Ne5 ve 7.f3 ile Beyaz c4’ü geri alıp e4 ile merkezi kurmayı hedefler; ...Bb4 bağına karşı şahın f2’ye gitmesi, rok kadar iyi bir çözüm olabilir. Şahın önündeki f3 ve g2 piyonları ona kalkan olur.',
    'Hazırlıklı bir rakibin hızlı oynadığı yenilik karşısında panik yapmayın: Ding saatte bir saatten fazla geride kaldı ama tek tek doğru hamleleri buldu (10.Nxe5, 11.Qd2, 12.d5, 13.e4). Gambit kabul edildiğinde önce hatları kapatıp gelişmeyi tamamlamak gerekir.',
    'Piyon feda eden taraf zaman kaybedemez: 22...h6 ve 25...a6–26...b5 gibi yavaş piyon hamleleri Beyazın vezirini kurtarmasına izin verdi. Ding bunu “çok piyon hamlesi yaptı, ben de vezirimi daha iyi kareye getirdim” diye özetledi.',
    'Şah merkezdeyken her hamlede rakip vezirin çaprazlarını hesaplayın: 22.Kf1 doğru, 22.Ke1? ise c3 atını şaha bağlatıp kaybettiriyordu.',
    'Fazla malzemeye sahipken bir kısmını geri vermek çoğu zaman en temiz yoldur: 28.Nd1 ile a4 piyonu gitti ama Beyazın bütün taşları uyum içinde yerleşti.',
    'Bağlı piyonu unutmayın: 46.Rxf6 mümkündü çünkü g7 piyonu g1 kalesi yüzünden şaha bağlıydı ve f6’yı geri alamıyordu.',
    'Merkez piyonu ilerlerken arkasındaki taşın hattını açabilir: açarak şah çekme (56.e5+) en güçlü piyon hamlelerinden biridir.',
  ],
  qa: [
    { q: 'Beyaz neden rok yapmadı da şahını 9.Kf2 ile yürüttü?', a: 'Siyahın b4 fili c3 atını bağlıyordu; rok için hem f1 filinin çıkması hem de e-piyonunun oynaması gerekiyordu ve bu zaman alıyordu. 9.Kf2 ile şah atın arkasından çekildi, bağ anlamını yitirdi ve e4 oynanabilir hale geldi. Motor da 9.Kf2’yi (+0.3) açık ara en iyi sayıyor; 9.e4 Nxe4! gibi yollar Siyaha iyi oyun veriyor.' },
    { q: '9...e5 ile Caruana neyi amaçladı?', a: 'Bir piyon karşılığında hatları açmak ve gelişme üstünlüğünü merkezdeki Beyaz şahına karşı kullanmak. 10.Nxe5 Bc2! ile fil d1 vezirine saldırır; 11.Qxc2? Qxd4+ ile Siyah taşı geri kazanır ve şaha saldırır. chess24 bu tuzağın 2018 Bangkok açık turnuvasında Jan Gustafsson’un bir oyununu hatırlattığını yazdı. Motor fedayı yeterli bulmuyor (+0.75), ama pratikte hazırlıksız bir rakibi çok zorlar; nitekim Ding çok zaman harcadı.' },
    { q: 'Ding neden 12.dxc5 değil de 12.d5 oynadı?', a: '12.dxc5 hatları açar, Siyahın fillerini canlandırır ve oyunu sadeleştirir (Motor: +0.2). 12.d5 ise merkezi kapalı tutar, c5 piyonunu hareketsiz bırakır ve Beyaza fazla piyonu korurken taşlarını geliştirme fırsatı verir (+0.6). chess24, Ding’in bir an kolay bir yol düşündüğünü ama “bu benim tarzım değil, en kritik devamı oynamalıyım” diyerek vazgeçtiğini aktardı. Bu sözün hangi ana ait olduğu kaynaklarda farklı veriliyor: chess.com ve The Week in Chess bunu 3. hamledeki değişim Slav’ı fikriyle ilişkilendiriyor.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'İki fazla piyondan çok, Siyahın yavaşlamasından. 17...Ng6 ve 22...h6 gibi hamleler Siyahın saldırısına hız katmadı; Beyaz bu arada Rd1, Qh3-g3-f2 ve 28.Nd1 ile taşlarını uyumlu kareye getirdi. d5-e4 merkezi Siyahın atlarına iyi kare bırakmadı; Siyahın b3’e giren fili de değişilince vezir kanadındaki baskı kayboldu. 28.Nd1 sonrası Motor +1.7, 35. hamlede +2.7 gösteriyor.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En açık an 22. hamleydi: 22...Re5! 23.Qh3 Qb4! ile Siyah b2’ye ve e4’e baskı yapıp Beyaz vezirini h3’te hapis tutabilirdi (Motor: +0.2). Daha önce 16...Bxc4 17.Bxc4 Ne5 (Motor: 0.0) ya da 17...Rc8 (+0.3) de 17...Ng6’dan (+1.6) çok daha iyiydi. Son olarak 27...Rec8 (+0.8) 27...b4’ten (+1.4) daha dirençliydi; chess24 de bu hamlenin “son bir umut” verebileceğini yazdı.' },
    { q: 'Ding saat sıkıntısındayken nasıl hata yapmadı?', a: 'Basit ve sağlam hamleleri seçerek. chess24’e göre 17. hamlede Caruana’nın saatinde 1 saat 40 dakikadan fazla, Ding’in saatinde yaklaşık 25 dakika vardı. Ding ilk anda en keskin 18.Qc1’i kaçırdı, ama sonraki hamlelerde tek doğru olanları buldu: 19.Bxc4 (başka hamleler taş kaybettiriyordu), 22.Kf1, 28.Nd1, 29.Rd2. chess24’e göre zaman kontrolüne yaklaşık 4 dakikayla ulaştı.' },
    { q: '35...Nhxf4 fedası mantıklı mıydı?', a: 'Konum zaten kötüydü; 35.f4 e2 filinin h5 atına giden yolunu açmış, f5 tehdidi de g6 atını kovalıyordu. Sakin 35...Nf6 sonrası Beyaz 36.Kg2 ve d6 ile rahat kazanır (+3.4–3.6). At fedası (+2.6) en azından şahın önünü açıp pratik şans yarattı. Ama Beyaz 37.Kf1, 38.Rg1 ve 40.b3 ile taşlarını korudu; Siyahın eşlik edecek yeterli taşı yoktu.' },
    { q: '46.Rxf6 neden işe yaradı, Siyah neden gxf6 ile alamadı?', a: 'g7 piyonu g1’deki Beyaz kalesi yüzünden g8’deki şaha bağlıydı; f6’yı alması kuralen mümkün değildi. Böylece kale f6’yı bedavaya aldı ve Siyahın şahının önü açıldı. Motor 46.Bc4’ü biraz daha güçlü buluyor (+4.1), ama 46.Rxf6 de açık kazançtır (+3.4).' },
    { q: '52.Rxf8+ neden 52.Rxb2’den çok daha iyiydi?', a: '51...Nd6 f5 kalesine saldırıyordu. 52.Rxb2? Nxf5 53.exf5 sonrası Siyah bir taşı geri alır ve Beyazın avantajı +1.7’ye düşer. 52.Rxf8+ Qxf8 53.Rxb2 ile önce kale değişilir, sonra b2 piyonu alınır; Beyaz bir taş fazla kalır (+4.0).' },
  ],
  sources: [
    { title: 'chess.com: FIDE Candidates Tournament – Ding Beats Caruana In Sensational Comeback', url: 'https://www.chess.com/news/view/2020-fide-candidates-chess-tournament-round-3' },
    { title: 'ChessBase: Candidates Round 3 – Ding bounces back, beats Caruana', url: 'https://en.chessbase.com/post/candidates-2020-r3' },
    { title: 'The Week in Chess: Ding Liren shows his mettle in defeating Caruana in Round 3', url: 'https://theweekinchess.com/chessnews/events/fide-candidates-chess-tournament-2020/ding-liren-shows-his-mettle-in-defeating-caruana-in-round-3-of-the-fide-candidates' },
    { title: 'chess24: Candidates 2020, 3 – Ding Liren beats Caruana', url: 'https://chess24.com/en/read/news/candidates-2020-3-ding-liren-beats-caruana' },
    { title: 'ChessBase India: Candidates 2020 Round 3', url: 'https://www.chessbase.in/news/Candidates-2020-Round-3' },
    { title: 'FIDE: Candidates 2020 – Ding Liren beats Caruana to make a comeback', url: 'https://www.fide.com/?p=18110' },
    { title: 'Rus Satranç Federasyonu: Ding Liren’s First Success at FIDE Candidates Tournament', url: 'https://ruchess.ru/en/news/all/ding_liren_s_first_success_at_fide_candidates_tournament_' },
    { title: 'lichess: Covidates – Round 3 Recap', url: 'https://lichess.org/blog/XnUSyRMAACEA-F2A/covidates---round-3-recap-video-highlights-from-gm-jon-speelman' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  notes: {
    '1w': {
      text: 'Ding vezir piyonuyla açar ve merkezde d4 karesini alır.',
      amac: 'Merkezi tutmak ve c4 ile Vezir Gambiti yapılarına geçmek.',
      neden: 'Ding’in ana silahı 1.d4’tür; kapalı açılışlarda konumsal baskıyı sever. Caruana’ya karşı Vezir Gambiti yapıları onun en iyi tanıdığı alandır.',
      diger: [
        { move: '1.e4', text: 'Motorun hafifçe tercih ettiği hamle (Motor: +0.4); Caruana’nın Petrov ve Sicilya hazırlığı çok derindir, Ding bu turnuvada 1.d4’e güvendi.' },
        { move: '1.Nf3', text: 'Aynı yapılara esnek bir hamle sırasıyla gider (+0.2); Ding kimi zaman kullanır.' },
      ],
    },
    '1b': {
      text: 'Siyah d5 ile merkeze simetrik karşılık verir.',
      amac: 'd4 piyonunun e5’e ilerlemesini durdurup klasik Vezir Gambiti yapılarına girmek.',
      neden: 'Caruana genelde 1...Nf6 ile Nimzo-Hint ya da Vezir-Hint yapılarına gider; 1...d5 bu oyunda sürprizin ilk işaretiydi.',
      diger: [
        { move: '1...Nf6', text: 'Caruana’nın daha sık oynadığı hamle (+0.3); Nimzo-Hint ve Grünfeld kapılarını açık tutar.' },
      ],
    },
    '2w': {
      text: 'Vezir Gambiti: c4 ile d5 piyonuna kanattan baskı.',
      amac: 'Siyahın merkez piyonunu söküp e4 ilerleyişini kolaylaştırmak.',
      neden: 'c4 piyonu d5’i “satın almayı” teklif eder; Siyah alırsa Beyaz merkezi e4 ile genişletir, almazsa d5 sürekli baskı altında kalır.',
      diger: [
        { move: '2.Nf3', text: 'Daha esnek bir hamle sırası (+0.2); Siyaha Slav’ı geciktirme fırsatı verir.' },
        { move: '2.Bf4', text: 'Londra sistemi; daha sakin ve teorisi az bir yol.' },
      ],
    },
    '2b': {
      text: 'Slav Savunması: d5 c-piyonuyla desteklenir.',
      amac: 'd5’i sağlamlaştırırken c8 filinin yolunu kapatmamak; bu fil sonra f5’e çıkacak.',
      neden: 'Vezir Gambiti Reddi’nde (2...e6) c8 fili uzun süre içeride kalır; Slav bu sorunu çözer. chess.com’a göre Caruana Slav’ı en son 2017 Cebelitarık’ta oynamıştı; Carlsen de bu seçimi “küçük bir sürprizden fazlası” olarak nitelendirdi (chess24).',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi; daha sağlam ama c8 fili kapalı (+0.3).' },
        { move: '2...dxc4', text: 'Kabul edilmiş Vezir Gambiti; motorun hafifçe tercih ettiği hamle (+0.3).' },
      ],
    },
    '3w': {
      text: 'At gelişir, e5 karesini kontrol eder ve d4’ü destekler.',
      amac: 'Ana kol Slav’a girmek; ileride Ne5 ile c4 piyonuna yönelmek.',
      neden: 'chess.com ve The Week in Chess’e göre Ding burada 3.cxd5 ile değişim Slav’ını oynayıp hızlı bir beraberlik yapmayı düşündü, ama “bu benim tarzım değil, en kritik devamı oynamalıyım” diyerek vazgeçti. İki yenilgiden sonra bu, kazanmak için oynama kararıdır.',
      diger: [
        { move: '3.cxd5', text: 'Değişim Slav’ı: 3...cxd5 sonrası simetrik ve kuru bir yapı, beraberlik ihtimali yüksek (+0.4).' },
        { move: '3.Nc3', text: 'Motorun hafifçe tercih ettiği sıra (+0.4); 3...e6 ile Yarı-Slav’a ve 3...dxc4 ile farklı yollara izin verir.' },
      ],
    },
    '3b': {
      text: 'Siyah atını f6’ya geliştirir ve d5’i, e4’ü kontrol eder.',
      amac: 'Gelişmeyi sürdürmek; ...dxc4 ve ...Bf5 fikirlerini hazırlamak.',
      neden: 'En doğal ve en esnek hamle; Beyazın e4 ilerleyişini peşinen zorlaştırır.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav’a geçiş seçeneği (+0.4); c8 fili yine içeride kalır.' },
        { move: '3...dxc4', text: 'Erken alış; 4.e3 b5 5.a4 e6 gibi yapılara gider (+0.5).' },
      ],
    },
    '4w': {
      text: 'İkinci at c3’e gelir ve d5’e baskıyı artırır.',
      amac: 'Merkezi tam kontrol altına alıp e4 ilerleyişini hazırlamak.',
      neden: '4.e3 de oynanır ama c1 filinin yolunu kapatır; 4.Nc3 en keskin ana koldur ve Siyahı ...dxc4 kararına zorlar.',
      diger: [
        { move: '4.e3', text: 'Sağlam ama sakin (+0.3); 4...Bf5 ile Siyah filini rahatça çıkarır.' },
        { move: '4.cxd5', text: 'Gecikmiş değişim Slav’ı (+0.3).' },
      ],
    },
    '4b': {
      text: 'Siyah c4 piyonunu alır; Slav’ın ana kolu.',
      amac: 'Beyazı a4 ile piyonu geri almaya zorlamak ve bu arada filini f5’e çıkarmak.',
      neden: 'Slav’da ...dxc4, piyonu kalıcı olarak tutmak için değil, Beyazın zaman kaybetmesini sağlamak için oynanır. 4...e6 Yarı-Slav’a geçerdi; Caruana keskin ana kolu seçti.',
      diger: [
        { move: '4...e6', text: 'Yarı-Slav (+0.4); Moskova ve Meran gibi çok teorik yollar.' },
        { move: '4...a6', text: 'Chebanenko Slav’ı; daha yavaş ama esnek bir sistem.' },
      ],
    },
    '5w': {
      text: '5.a4 ile ...b5 engellenir.',
      amac: 'Siyahın c4 piyonunu b5 ile desteklemesine izin vermemek; piyonu sonra geri almak.',
      neden: '5.e4 b5 gibi yollar Beyaza piyonu geri almakta zorluk çıkarır. a4’ün bedeli b4 karesinin zayıflamasıdır: ...Bb4 ve ...Na6-b4 fikirleri bu yüzden ortaya çıkar.',
      diger: [
        { move: '5.e4', text: 'Gambit yolu: 5...b5 6.e5 Nd5 ile çok keskin bir oyun; Siyah piyonu tutabilir.' },
        { move: '5.e3', text: '5...b5 6.a4 b4 ile Siyah vezir kanadında alan kazanır.' },
      ],
    },
    '5b': {
      text: 'Çek varyantı: fil e6 piyonundan önce f5’e çıkar.',
      amac: 'c8 filini piyon zincirinin dışına çıkarıp Beyazın e4 ilerleyişini kontrol etmek.',
      neden: 'Wikipedia’nın da belirttiği gibi 5...Bf5 Siyahın ana yanıtıdır ve 6.e4’ü engeller. 5...Bg4 ve 5...Na6 de oynanır, ama Bf5 en sağlam ve en çok denenmiş hamledir.',
      diger: [
        { move: '5...Bg4', text: 'Fil f3 atına bakar; Beyaz 6.Ne5 ile kazanç arar.' },
        { move: '5...Na6', text: 'Smislov’un fikri: at b4’e gidecek (+0.5 civarı).' },
      ],
    },
    '6w': {
      text: '6.Ne5: Krause hücumu. At c4 piyonuna yönelir.',
      amac: 'Nxc4 ile piyonu hemen geri almak; f3 ve e4 ile büyük merkez kurmak.',
      neden: 'Wikipedia bu hamleyi “daha enerjik yol” olarak tanımlar: Beyaz f3, e4 ve Nxc4 planlar. 6.e3 (Hollanda varyantı) daha sakin bir oyun verir; Ding kritik devamı istedi.',
      diger: [
        { move: '6.e3', text: 'Hollanda varyantı: 6...e6 7.Bxc4 Bb4 8.O-O O-O ile sakin bir oyun (Motor: +0.3).' },
        { move: '6.Nh4', text: 'Bled hücumu: f5 filini almaya çalışır (+0.2).' },
      ],
    },
    '6b': {
      text: 'Siyah e6 ile f8 filinin yolunu açar.',
      amac: 'Gelişmeyi tamamlamak; ...Bb4 ile c3 atını bağlamaya hazırlanmak.',
      neden: '6...Nbd7 7.Nxc4 Qc7 de ana yoldur, ama 6...e6 en hızlı gelişmeyi sağlar ve ...Bb4 fikrini doğrudan getirir.',
      diger: [
        { move: '6...Nbd7', text: '7.Nxc4 Qc7 8.g3 e5 gibi klasik ana kol (+0.3).' },
        { move: '6...Na6', text: 'At b4’e gider; daha az oynanan bir yol (+0.4).' },
      ],
    },
    '7w': {
      text: '7.f3: e4 ilerleyişini hazırlar.',
      amac: 'f5 filini e4 ile kovalayıp merkezi ele geçirmek.',
      neden: 'Beyaz önce c4’ü almak yerine merkezi hazırlar; 7.e3 sakin bir oyuna dönerdi. f3’ün bedeli e3 karesinin zayıflaması ve şah kanadının biraz açılmasıdır.',
      diger: [
        { move: '7.e3', text: '7...Nbd7 8.Nxd7 Qxd7 9.Bxc4 ile sakin bir oyun (+0.2).' },
        { move: '7.g3', text: 'Fil g2’ye gider; 7...Bb4 8.Bg2 Be4 ile Siyah rahat (+0.1).' },
      ],
    },
    '7b': {
      text: 'Fil b4’e çıkar ve c3 atını bağlar.',
      amac: 'e4 ilerleyişini zorlaştırmak: c3 atı bağlı olduğu için e4’ü savunamaz.',
      neden: 'Wikipedia’nın aktardığı ana teori 8.e4 Bxe4 9.fxe4 Nxe4 taş fedasıdır; bu kol çok iyi incelenmiştir. 7...c5 ya da 7...Bg6 Motor’a göre Beyaza daha rahat bir oyun verir.',
      diger: [
        { move: '7...c5', text: 'Merkeze hemen saldırı; 8.e4 cxd4 9.exf5 sonrası Beyaz biraz üstün (+0.4).' },
        { move: '7...Bg6', text: 'Fil geri çekilir, ama 8.e4 Bb4 9.Bxc4 ile Beyaz merkezi rahatça kurar (+0.7).' },
      ],
    },
    '8w': {
      text: 'Beyaz c4 piyonunu geri alır.',
      amac: 'Malzemeyi eşitleyip e4 için hazırlığı sürdürmek.',
      neden: '8.e4 Bxe4! 9.fxe4 Nxe4 taş fedası Siyaha güçlü bir saldırı verir; teoride 10.Qf3 ile beraberliğe giden yollar vardır. Ding önce piyonu almayı seçti (Motor: +0.4, 8.e4 ise −0.1).',
      diger: [
        { move: '8.e4', text: '8...Bxe4 9.fxe4 Nxe4 ile ünlü taş fedası; Siyah iki piyon ve saldırı alır (Motor: −0.1).' },
        { move: '8.e3', text: '8...c5 ile Siyah merkezi açar (−0.1); f3 piyonu anlamsızlaşır.' },
      ],
    },
    '8b': {
      text: 'Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleyi merkeze bağlamak; Beyazın şahı ise henüz merkezde.',
      neden: 'Gelişme yarışında rok Siyaha bir tempo kazandırır. 8...Nbd7 ya da 8...Bg6 da oynanır, ama Motor 8...O-O’yu en iyi buluyor (+0.2).',
      diger: [
        { move: '8...Nbd7', text: '9.h4 Bg6 10.e4 h6 gibi yapılar; Beyaz hafif üstün (+0.5).' },
        { move: '8...Bg6', text: '9.e4 O-O 10.Kf2 ile oyuna dönüş (+0.4).' },
      ],
    },
    '9w': {
      text: 'Kf2: şah f2’ye geçer.',
      amac: 'c3 atının bağını kaldırıp e4’ü oynanabilir hale getirmek.',
      neden: 'Rok için hem f1 fili hem de e-piyonu yerinden çıkmalıydı; bu üç tempo demekti. Şah f2’de f3 ve g2 piyonlarıyla korunur ve e4 artık ...Bxc3 ya da ...Nxe4 kombinasyonlarına açık değildir. Motor 9.Kf2’yi tek iyi hamle sayıyor (+0.3).',
      diger: [
        { move: '9.e4', text: '9...Nxe4! 10.fxe4 Qh4+ ile Siyah güçlü saldırı alır (Motor: −0.2).' },
        { move: '9.h4', text: '9...c5 10.dxc5 Qxd1+ 11.Kxd1 Rd8+ ile vezirler değişir, Siyah rahat (−0.1).' },
      ],
    },
    '9b': {
      text: '9...e5!? Caruana’nın yeniliği: bir piyon feda edilir.',
      amac: 'Merkezi açıp gelişme üstünlüğünü f2’deki şaha karşı kullanmak; 10.Nxe5 Bc2 ile vezire saldırmak.',
      neden: 'FIDE’nin raporuna göre Caruana hamleyi çok hızlı oynayıp masadan kalktı; lichess’in özetine göre bu hız hazırlık işaretiydi ve hattın Lc0 motoruyla hazırlanmış olabileceği yorumu yapıldı. ChessBase bunu “oldukça taviz veren bir karar” saydı. Motor sakin hamleleri tercih ediyor (9...Nd5 +0.4); 9...e5 sonrası +0.75.',
      diger: [
        { move: '9...Nd5', text: '10.Na2 b5 11.Ne5 f6 ile Siyah aktif bir oyun alır (Motor: +0.4).' },
        { move: '9...c5', text: '10.e4 Bg6 11.Na2 Nc6 ile normal bir oyun (+0.3–0.5).' },
        { move: '9...Bg6', text: '10.e4 c5 ile benzer yapılar (+0.5).' },
      ],
    },
    '10w': {
      text: 'Beyaz e5 piyonunu atla alır.',
      amac: 'Feda edilen piyonu kabul etmek ve atı merkezde güçlü bir kareye getirmek.',
      neden: 'chess24’e göre Ding burada 17 dakika düşündü. ChessBase India’nın notunda da belirtildiği gibi iki şekilde alınabilirdi. 10.dxe5 d-hattını açar ve Siyahın vezirine oyun verir; 10.Nxe5 d4 piyonunu yerinde tutar (Motor: +0.6).',
      diger: [
        { move: '10.dxe5', text: '10...Nfd7 11.Bf4 ile Beyaz piyonu tutar ama d-hattı açılır (Motor: +0.6).' },
        { move: '10.e4', text: '10...exd4 11.Na2 sonrası oyun karışık (+0.6, düşük derinlikte −0.2).' },
      ],
    },
    '10b': {
      text: '10...Bc2: fil d1 vezirine saldırır.',
      amac: 'Beyaz vezirini rahatsız edip zaman kazanmak; 11.Qxc2? Qxd4+ tuzağını kurmak.',
      neden: 'chess24’e göre bu tuzak (11.Qxc2 Qxd4+) Jan Gustafsson’un 2018 Bangkok açık turnuvasında oynadığı bir oyunu hatırlatıyordu. Diğer hamleler Siyahın feda ettiği piyonun karşılığını vermez: 10...Nbd7 sonrası +1.3.',
      diger: [
        { move: '10...Nbd7', text: '11.e4 Bxc3 12.Nxd7 Bxd4+ ile karmaşa, ama Beyaz açık üstün (Motor: +1.3).' },
        { move: '10...Nfd7', text: '11.Nc4 Be6 12.e4 ile Beyaz merkezi kurar (+1.3).' },
      ],
    },
    '11w': {
      text: 'Vezir d2’ye çekilir ve c3 atını korur.',
      amac: 'Vezir saldırısından kurtulurken bağlı atı ve d4’ü savunmak.',
      neden: '11.Qxc2? Qxd4+ ile Siyah e5 atını ve d-hattını kazanır, eşitlik ortaya çıkar (Motor: +0.2). 11.Nxf7 ilginç bir ara hamle ama Motor’a göre daha zayıf. Qd2 tek temiz yoldur (+0.7).',
      diger: [
        { move: '11.Qxc2', text: '11...Qxd4+ 12.e3 Qxe5 ile Siyah piyonu geri alır, oyun eşit (Motor: +0.2).' },
        { move: '11.Nxf7', text: '11...Ng4+! 12.Ke1 Rxf7 13.Qxc2 ile karışık bir oyun (+0.3).' },
      ],
    },
    '11b': {
      text: '11...c5 ile d4’e saldırılır.',
      amac: 'Beyazın merkezini sökmek ve hatları açmak; b4 filine ek destek sağlamak.',
      neden: 'Siyah piyon geride olduğu için yavaş oynayamaz; hatları açmalı. 11...Bb3 ya da 11...h6 daha yavaş ve Beyaza e3 ile gelişme fırsatı verir (Motor: +0.8).',
      diger: [
        { move: '11...Bb3', text: '12.e3 c5 13.Nd3 ile Beyaz konsolide olur (Motor: +0.8).' },
        { move: '11...h6', text: 'Şaha luft açar ama zaman kaybıdır (+0.8).' },
      ],
    },
    '12w': {
      text: '12.d5: piyon merkezde ilerler ve hatları kapatır.',
      amac: 'd-hattını kapalı tutmak, Siyahın taşlarına d5’i vermemek ve c5 piyonunu hareketsiz bırakmak.',
      neden: 'chess24’e göre bu karar 17 dakika daha sürdü ve Ding 12.dxc5 ile kolay yolu düşündüğünü, ama en kritik devamı seçtiğini söyledi. 12.dxc5 Qc7 13.Qxc2 Qxe5 sonrası Siyah piyonu geri alır (Motor: +0.2). 12.d5 ve 12.e3 eşit güçte (+0.6).',
      diger: [
        { move: '12.dxc5', text: '12...Qc7 13.Qxc2 Qxe5 ile Siyah piyonu geri alır, oyun eşite yakın (Motor: +0.2).' },
        { move: '12.e3', text: '12...Bg6 13.d5 Nbd7 14.Nc4 ile benzer bir oyun (+0.6).' },
      ],
    },
    '12b': {
      text: 'Fil b3’e yerleşir ve Beyazın vezir kanadını kısıtlar.',
      amac: 'Filin a4 ve d5’e baskı yapabileceği güvenli bir kare bulmak; Beyazın a1 kalesini sıkıştırmak.',
      neden: 'Motor 12...Be4!’ü öneriyor: 13.Qd1 Bxc3 14.bxc3 ile Siyah d5’e saldırır ve Beyazın piyon yapısını bozar (+0.5). 12...Bb3 sonrası Beyaz 13.e4 ile merkezi kurar (+1.0).',
      diger: [
        { move: '12...Be4', text: '13.Qd1 Bxc3 14.bxc3 Qe7 ile Siyah d5’e ve e5’e baskı yapar (Motor: +0.5).' },
        { move: '12...Bg6', text: '13.h4 ile Beyaz fili kovalar (+1.4).' },
      ],
    },
    '13w': {
      text: '13.e4! d5’i destekler ve f1 filinin önünü açar.',
      amac: 'Merkezi sağlamlaştırmak ve f1 filini Bc4 ya da Be2 ile oyuna sokmak.',
      neden: 'Bu, 7.f3’ün baştan beri hazırladığı ilerleyiştir. Şimdi c3 atı bağlı olsa da şah f2’de olduğundan ...Nxe4+ kombinasyonları işe yaramaz. 13.Nd3 ya da 13.Qg5 gibi alternatifler Siyaha d5’i geri alma fırsatı verir (Motor: −0.5).',
      diger: [
        { move: '13.Nd3', text: '13...Re8 14.Nxb4 cxb4 15.Nb5 ile Siyah aktif (Motor: −0.5).' },
        { move: '13.Qg5', text: '13...Re8 14.e4 Nxe4+! ile Siyah kazanç sağlar (−0.5).' },
      ],
    },
    '13b': {
      text: 'Kale e-hattına gelir ve e5 atına saldırır.',
      amac: 'e-hattında baskı kurmak ve Beyazın e4 merkezine karşı oyun aramak.',
      neden: 'e5 atı korumasız durur; Siyah bu atı kovalayarak tempo kazanmak ister. 13...Nbd7 de oynanır, ama Motor 13...Re8’i en iyi buluyor (+0.75).',
      diger: [
        { move: '13...Nbd7', text: '14.Nc4 Re8 15.Kg1 ile Beyaz şahını güvenceye alır (+1.0).' },
        { move: '13...Nfd7', text: '14.Nc4 f5 15.Qg5 ile keskin bir oyun (+1.0).' },
      ],
    },
    '14w': {
      text: 'Vezir f4’e gelir ve e5 atını savunur.',
      amac: 'Atı merkezde tutmak, f7’ye baskı yapmak ve vezire aktif bir kare bulmak.',
      neden: '14.Bc4 Bxc4 15.Nxc4 Rxe4 Siyaha piyonu geri verir (Motor: −0.4). 14.Qg5 Nxe4+ ile Siyah kazanç sağlar (−0.5). Qf4 tek iyi hamledir (+0.9).',
      diger: [
        { move: '14.Bc4', text: '14...Bxc4 15.Nxc4 Rxe4 ile Siyah piyonu geri alır (Motor: −0.4).' },
        { move: '14.Qg5', text: '14...Nxe4+ 15.Nxe4 Qxg5 16.Bxg5 ile malzeme eşitlenir (−0.5).' },
      ],
    },
    '14b': {
      text: '14...c4: ikinci piyon fedası.',
      amac: 'c5 karesini b4 filine açmak (...Bc5+) ve c-hattını Siyahın kaleleri için kullanmak.',
      neden: 'FIDE’nin raporuna göre Caruana inisiyatifi korumak ve Beyazın şahını açmak için ikinci piyonu verdi. Sakin 14...Nbd7 sonrası 15.Nxd7 Nxd7 16.Bb5 ile Beyaz rahat (Motor: +1.2). 14...c4 en iyi pratik şans (+0.6).',
      diger: [
        { move: '14...Nbd7', text: '15.Nxd7 Nxd7 16.Bb5 Ne5 ile Beyaz fazla piyonu tutar (Motor: +1.2).' },
        { move: '14...a6', text: '15.Nc4 Nbd7 16.Nd6 ile at d6’ya girer (+1.3).' },
      ],
    },
    '15w': {
      text: 'At c4 piyonunu alır; Beyaz iki piyon önde.',
      amac: 'Fazla piyonu artırırken atı e5’ten kurtarmak.',
      neden: '15.Bxc4 Bxc4 16.Nxc4 de mümkündü (Motor: +0.5), ama b3 fili değişilince Siyahın hafif taşları rahatlar. 15.Nxc4 b3 filinin atı alıp almayacağı sorusunu Siyaha bırakır (+0.7).',
      diger: [
        { move: '15.Bxc4', text: '15...Bd6 16.Qe3 Nbd7 17.Bxb3 ile benzer bir oyun (Motor: +0.5).' },
        { move: '15.Ng4', text: '15...Nxg4+ 16.Qxg4 Bc5+ ile Siyah güçlü saldırı alır (−0.9).' },
      ],
    },
    '15b': {
      text: '15...Nbd7: at d7’ye gelir; f8 ve g6’ya gidecek.',
      amac: 'Atı şah kanadına yönlendirip Beyaz vezirine tempo kazanmak (...Nf8-g6).',
      neden: 'ChessBase bu hamleyi “beklenmedik” buldu; Caruana bu noktada da hızla oynuyordu. Motor 15...h6 ya da 15...Nh5’i biraz daha iyi buluyor (+0.5–0.6); 15...Nbd7 sonrası +0.7. Fark küçüktür.',
      diger: [
        { move: '15...h6', text: '16.h4 Nh5 17.Qg4 Nf6 ile şaha luft ve aktif at (Motor: +0.5).' },
        { move: '15...Na6', text: 'At c5’e gider; 16.g3 Rc8 ile Siyah c-hattını alır (+0.6).' },
      ],
    },
    '16w': {
      text: 'Fil e3’e gelişir ve d4’e yönelir.',
      amac: 'c1 filini oyuna sokmak, d4’te merkeze yerleştirmek ve a1 kalesini serbest bırakmak.',
      neden: 'Beyazın gelişme eksiği onun en büyük sorunudur. 16.Ne3 ve 16.g3 daha savunmacı olur ve Siyaha oyun verir (Motor: 0.0). 16.Be3 en iyi hamle (+0.4).',
      diger: [
        { move: '16.Ne3', text: '16...Ne5 17.g3 Rc8 ile Siyah aktif (Motor: 0.0).' },
        { move: '16.g3', text: '16...Rc8 17.Ne3 Ne5 ile benzer (0.0).' },
      ],
    },
    '16b': {
      text: '16...Nf8: at g6’ya gitmek için f8’e geçer.',
      amac: 'Atı g6’ya getirip f4 vezirine tempo kazanmak.',
      neden: 'chess.com’a göre Anand bu hamleden sonra “Beyazın iyi olduğundan şüpheleniyorum, ama zor olan burada iyi hazırlanmış bir rakibe karşı oynamak” dedi. Motor 16...Bxc4! 17.Bxc4 Ne5’i öneriyor: b3 fili güçlü c4 atıyla değişilir, Siyah at e5’e kurulur (Motor: 0.0). 16...Nf8 sonrası +0.7.',
      diger: [
        { move: '16...Bxc4', text: '17.Bxc4 Ne5 18.Be2 Ng6 ile Siyah tam karşılık alır (Motor: 0.0).' },
        { move: '16...Nh5', text: '17.Qg5 Nhf6 18.Kg1 h6 ile at aktif (+0.4).' },
      ],
    },
    '17w': {
      text: 'Fil d4’e gelir ve merkezde güçlü bir yer alır.',
      amac: 'f6 atına baskı yapmak, g7’ye çapraz kurmak ve d4 karesini Siyahın taşlarından korumak.',
      neden: 'chess.com’a göre Ding 16. hamleden sonra saatinde sadece 16 dakika kalmıştı. 17.Nd2 ya da 17.Kg1 daha pasif olurdu (Motor: 0.0 civarı); 17.Bd4 en aktif ve en iyisi (+0.2).',
      diger: [
        { move: '17.Nd2', text: '17...Ng6 18.Qg3 Bxd5 ile Siyah d5’i geri alır (Motor: 0.0).' },
        { move: '17.Kg1', text: 'Şahı güvenceye alır ama 17...Rc8 18.Nd2 Bxd5 ile d5 düşer (−0.2).' },
      ],
    },
    '17b': {
      text: '17...Ng6: at f4 vezirine saldırır.',
      amac: 'Vezire tempo kazanıp at e5 ya da f4’e yerleşmek.',
      neden: 'chess24 bu hamleyi “cezasız kalmış bir hata olabilir” diye yorumladı. Motor 17...Rc8’i öneriyor (+0.3): kale c-hattına gelir ve c4 atına baskı yapar. 17...Ng6 sonrası Beyaz 18.Qc1! ile +1.6’ya ulaşabilirdi.',
      diger: [
        { move: '17...Rc8', text: '18.Ne3 Ng6 19.Qg3 Bxc3 ile Siyah karşılık bulur (Motor: +0.3).' },
        { move: '17...Bxc4', text: '18.Bxc4 Ne6 19.Qd2 Nxd4 ile filler değişir (+0.8).' },
      ],
    },
    '18w': {
      text: 'Vezir f5’e çekilir ve f7 ile c8’e bakar.',
      amac: 'Veziri saldırıdan kurtarıp aktif bir kareye getirmek.',
      neden: 'The Week in Chess’in analizine göre motorun ilk tercihi 18.Qc1’di. Motor bunu doğruluyor: 18.Qc1! Rc8 19.Nd2 Bxd5 20.exd5 ile Beyaz +1.9, çünkü vezir c-hattında atı korur. 18.Qf5 sonrası Siyah 18...Bxc4 ile c4 atını alıp Beyaz filini e2’ye çekmeye zorlar (+0.5).',
      diger: [
        { move: '18.Qc1', text: '18...Rc8 19.Nd2 Bxd5 20.exd5 ile Beyaz bir taş için iki piyon değil, net bir üstünlük alır (Motor: +1.9).' },
        { move: '18.Qg3', text: '18...Rc8 19.Ne3 Bxc3 20.bxc3 ile Beyaz hafif üstün (+0.5).' },
      ],
    },
    '18b': {
      text: 'Siyah c4 atını alır.',
      amac: 'Beyazın en aktif hafif taşını değişip f1 filini geri almaya zorlamak.',
      neden: '18...Rc8 de aynı değerdeydi (Motor: +0.4): 19.Ne3 Bc5 20.Bxc5 Rxc5. 18...Bxc4 sonrası Beyaz fil çiftini kaybeder ama Siyahın da baskı yapan b3 fili gider (+0.5).',
      diger: [
        { move: '18...Rc8', text: '19.Ne3 Bc5 20.Bxc5 Rxc5 ile Siyah c-hattını alır (Motor: +0.4).' },
        { move: '18...a6', text: '19.g3 Rc8 20.Ne3 ile Beyaz konsolide olur (+0.9).' },
      ],
    },
    '19w': {
      text: 'Fil geri alır; tek doğru hamle.',
      amac: 'Malzemeyi korumak.',
      neden: 'Zorunlu bir alış: 19.g3? Bxf1 20.Kxf1 Rc8 sonrası Siyah bir taş fazla kalır (Motor: −2.6). Fil c4’ten d5 piyonunu da destekler.',
    },
    '19b': {
      text: 'Vezir c7’ye gelir, c4 filine ve c7-h2 çaprazına bakar.',
      amac: 'c4 filine saldırarak tempo kazanmak ve h2 piyonunu hedef almak.',
      neden: '19...Bc5 de oynanabilirdi ama Motor 19...Qc7’yi en iyi buluyor (+0.1). Vezir hem c-hattını hem de şah kanadını kontrol eder.',
      diger: [
        { move: '19...Bc5', text: '20.Bxc5 Re5 21.Qh3 Nf4 ile Siyah aktif ama Beyaz +1.3.' },
        { move: '19...a6', text: '20.Rhd1 Qc7 21.b3 ile Beyaz konsolide (+1.6).' },
      ],
    },
    '20w': {
      text: 'Fil e2’ye çekilir ve f3-e4 zincirini destekler.',
      amac: 'Fili güvenli bir yere çekip şah kanadını sağlamlaştırmak.',
      neden: '20.Bb5 de eşit güçte (Motor: +0.2). 20.Be2 daha savunmacıdır; Ding saatte geride olduğundan sağlam yolu seçti.',
      diger: [
        { move: '20.Bb5', text: '20...Bc5 21.Bxc5 Qxc5+ 22.Kf1 ile benzer (Motor: +0.2).' },
        { move: '20.b3', text: '20...Bc5 21.Rad1 Re5 ile Siyah aktif (0.0).' },
      ],
    },
    '20b': {
      text: '20...Bc5: Siyah kara kareli filleri değiştirmeyi teklif eder.',
      amac: 'd4’teki güçlü Beyaz filini ortadan kaldırıp vezirle şaha şah çekmek.',
      neden: 'Motor bu hamleyi tek iyi devam olarak görüyor (+0.1); 20...a6 ya da 20...Rad8 gibi yavaş hamleler Beyaza konsolide olma fırsatı verir (+2.1).',
      diger: [
        { move: '20...a6', text: '21.Kf1 Bd6 22.g3 ile Beyaz rahatlar (Motor: +2.1).' },
        { move: '20...Rad8', text: '21.Nb5 Qe7 22.d6 ile Beyaz üstün (+2.2).' },
      ],
    },
    '21w': {
      text: 'Filler değişir.',
      amac: 'Siyahın aktif filini ortadan kaldırmak.',
      neden: '21.Rad1 ya da 21.Rhd1 ile filin kalmasına izin vermek, 21...Re5 ile Siyaha güçlü saldırı verir (Motor: −0.6 / −1.0). 21.Bxc5 tek iyi hamle (+0.2).',
      diger: [
        { move: '21.Rad1', text: '21...Re5 22.Qh3 Nf4 ile Siyah aktif (Motor: −0.6).' },
      ],
    },
    '21b': {
      text: 'Vezir şah çekerek geri alır.',
      amac: 'Malzemeyi eşitlemek ve şaha baskı kurmak.',
      neden: '21...Re5 ara hamlesi de aynı değerde (Motor: +0.1). 21...Ng4+? ise 22.Kf1 Nxh2+ 23.Rxh2 Qxh2 sonrası Siyah bir taş kaybeder (+4.8).',
      diger: [
        { move: '21...Re5', text: '22.Qh3 Qxc5+ 23.Kf1 Qb4 ile benzer (Motor: +0.1).' },
        { move: '21...Ng4+', text: '22.Kf1 Nxh2+ 23.Rxh2 Qxh2 ile Siyah taş kaybeder (+4.8).' },
      ],
    },
    '22w': {
      text: '22.Kf1! Şah c5 vezirinin çaprazından çıkar.',
      amac: 'Şahı güvenli bir kareye çekmek ve bağlardan kaçmak.',
      neden: '22.Ke1? Re5 23.Qh3 Qb4 sonrası c3 atı şaha bağlanır ve Beyaz kaybeder (Motor: −2.7). 22.Kg3? Re5 23.Qxe5 Nxe5 ile Beyaz vezir kaybeder (−5.4). 22.Kf1 tek iyi kare (+0.2).',
      diger: [
        { move: '22.Ke1', text: '22...Re5 23.Qh3 Qb4 ile c3 atı bağlanır (Motor: −2.7).' },
        { move: '22.Kg3', text: '22...Re5 23.Qxe5 Nxe5 ile Beyaz vezir kaybeder (−5.4).' },
      ],
    },
    '22b': {
      text: '22...h6? Şaha kaçış karesi açılır.',
      amac: 'Arka yatay matını önlemek ve g5 karesini kontrol etmek.',
      neden: 'Oyunun dönüm noktası. The Week in Chess’te Crowther, Caruana’nın bu hamleye kadar iyi olduğunu ve 22...Re5’in tam karşılık verdiğini yazdı. chess24 de 22...Re5! 23.Qh3 Qb4! önerdi. Ding “h6 yerine belki başka bir şey” dedi. Motor: 22...Re5 +0.2, 22...h6 +1.0.',
      diger: [
        { move: '22...Re5', text: '23.Qh3 Qb4 24.Rb1 Nf4 ile Siyah aktif ve Beyaz vezirini h3’te kısıtlar (Motor: +0.2).' },
        { move: '22...Qb4', text: '23.Qg5 Qxb2 24.Qc1 ile vezirler değişir (+1.4).' },
      ],
    },
    '23w': {
      text: 'Kale d-hattına gelir ve d5 piyonunu destekler.',
      amac: 'Ding’in planı: önce Rd1, sonra vezir h3-g3-f2 yoluyla geri gelecek (ChessBase India).',
      neden: 'Motor 23.g3’ü öneriyor (+1.2): şah kanadını sağlamlaştırır. 23.Rd1 d5’i korur ve a1 kalesini oyuna sokar (+0.6). Ding’in seçimi pratik bir karardır.',
      diger: [
        { move: '23.g3', text: '23...a6 24.Qh3 Ne5 25.Kg2 ile Beyaz sağlam (Motor: +1.2).' },
        { move: '23.Rb1', text: 'b2’yi korur; 23...Rab8 24.g3 ile benzer (+1.0).' },
      ],
    },
    '23b': {
      text: 'Vezir b6’ya gelir ve b2 piyonuna saldırır.',
      amac: 'Beyazın vezir kanadına baskı yapmak.',
      neden: 'Motor 23...a6’yı öneriyor (+0.5). 23...Qb6 b2’yi tehdit eder ama Beyaz 24.Rd2 ile kolayca savunur (+1.2).',
      diger: [
        { move: '23...a6', text: '24.Qh3 Qb4 25.Rd2 b5 ile Siyah vezir kanadında oyun arar (Motor: +0.5).' },
        { move: '23...Qb4', text: '24.Rd2 a6 25.g3 ile benzer (+1.0).' },
      ],
    },
    '24w': {
      text: 'Kale d2’den b2’yi korur.',
      amac: 'Vezir kanadını savunmak ve d-hattında kalmak.',
      neden: '24.Rd2 tek iyi hamle (Motor: +1.3). 24.Rb1 kaleyi pasifleştirir (+0.5); 24.Nb5 Rad8 ile Siyah aktif (−0.1).',
      diger: [
        { move: '24.Rb1', text: '24...a6 25.g3 Rac8 ile Siyah aktif (Motor: +0.5).' },
        { move: '24.Nb5', text: '24...Rad8 25.g3 Ne7 ile Siyah karşılık bulur (−0.1).' },
      ],
    },
    '24b': {
      text: 'Vezir e3’e girer ve d2 kalesine saldırır.',
      amac: 'Beyazın taşlarını kısıtlamak ve şaha yakın bir kareye yerleşmek.',
      neden: 'Motor 24...Rac8’i öneriyor (+0.8). 24...Qe3 aktif görünür ama vezir orada Beyazın taşlarıyla kovalanabilir (+1.0).',
      diger: [
        { move: '24...Rac8', text: '25.d6 Rc5 26.Qh3 Re6 ile Siyah aktif (Motor: +0.8).' },
        { move: '24...a6', text: '25.Qh3 Qe3 26.Rc2 b5 ile benzer (+1.0).' },
      ],
    },
    '25w': {
      text: 'Kale c-hattına geçer.',
      amac: 'Kaleyi saldırıdan kurtarıp c-hattını kontrol etmek.',
      neden: 'Kale d2’de vezirin saldırısı altındaydı ve hiçbir taş onu korumuyordu. c2’de hem güvende kalır hem de açık c-hattını alır; c3 atını yandan destekler. 25.Rc2 en iyi hamle (Motor: +1.0). 25.Rd1 kaleyi pasif bırakır (+0.7); 25.Ke1 ise şahı yeniden bağlara açar (+0.2).',
      diger: [
        { move: '25.Rd1', text: '25...a6 26.g3 b5 ile Siyah vezir kanadında oyun arar (Motor: +0.7).' },
        { move: '25.Ke1', text: '25...Rac8 26.d6 Ne5 ile Siyah aktif (+0.2).' },
      ],
    },
    '25b': {
      text: '25...a6: Siyah ...b5 için hazırlanır.',
      amac: 'Vezir kanadında piyonlarla karşı oyun kurmak.',
      neden: 'Ding’in sözleriyle “Siyah çok piyon hamlesi yaptı, ben de vezirimi daha iyi kareye getirdim.” Motor 25...a6’yı en iyi buluyor (+1.0), ama Siyahın konumu artık zorlaşmıştır.',
      diger: [
        { move: '25...Qd4', text: '26.Qh3 Ne5 27.Qg3 ile Beyaz konsolide (Motor: +1.6).' },
        { move: '25...h5', text: '26.g3 h4 27.Rg1 ile Beyaz sağlam (+1.8).' },
      ],
    },
    '26w': {
      text: 'Vezir h3’e çekilir; h6 ve c8’e bakar.',
      amac: 'Veziri g3-f2 yoluna sokmak (Ding’in planı).',
      neden: 'f5’teki vezir Siyahın atlarına (…Ne7, …Nh4) hedef olabilir ve şahı korumaz. h3’ten g3’e, oradan f2’ye giden yol vezirin hem şahı savunacağı hem de değişim teklif edeceği bir rotadır. 26.Qh3 en iyi hamle (Motor: +1.1); 26.g3 de benzer güçte (+0.9).',
      diger: [
        { move: '26.g3', text: '26...b5 27.Qh3 Ne5 28.Kg2 ile benzer (Motor: +0.9).' },
        { move: '26.a5', text: '26...Qc5 27.Qh3 Qxa5 ile Siyah piyonu alır (+0.7).' },
      ],
    },
    '26b': {
      text: 'Siyah vezir kanadında piyonları ilerletir.',
      amac: 'a4 piyonunu hedef alıp b-piyonuyla c3 atına saldırmak.',
      neden: 'Motor 26...b5’i en iyi buluyor (+1.0). 26...h5 ya da 26...Qb6 daha zayıf (+1.7 / +2.4).',
      diger: [
        { move: '26...h5', text: '27.Qg3 b5 28.Qe1 ile Beyaz sağlam (Motor: +1.7).' },
        { move: '26...Qb6', text: '27.Qg3 Qb3 28.Rd2 b5 ile benzer (+2.4).' },
      ],
    },
    '27w': {
      text: 'Vezir g3’e döner.',
      amac: 'Qf2 ile vezir değişimi teklif etmek ve şahı korumak.',
      neden: 'Ding, ancak vezir g3’e geldikten sonra Siyahın fazla karşı oyunu olmadığını ve konumunun çok daha iyi olduğunu düşündüğünü söyledi (chess.com, TWIC). Motor 27.g3’ü biraz daha iyi buluyor (+1.0), ama 27.Qg3 de iyi (+0.9).',
      diger: [
        { move: '27.g3', text: '27...Ne5 28.Kg2 b4 29.Nd1 ile Beyaz sağlam (Motor: +1.0).' },
        { move: '27.Nd1', text: '27...Qb3 28.Rc3 Qxa4 ile Siyah piyonu alır (0.0).' },
      ],
    },
    '27b': {
      text: '27...b4 c3 atına saldırır.',
      amac: 'Atı kovalayıp Beyazın vezir kanadını açmak.',
      neden: 'chess24’e göre 27...Rec8! “son bir umut” verebilirdi. Motor: 27...Rec8 +0.8, 27...b4 +1.4. Rec8, Qf2 Qxf2+ Kxf2 b4 ile oyun sonuna gider ve Siyah daha dirençli olur.',
      diger: [
        { move: '27...Rec8', text: '28.Qf2 Qxf2+ 29.Kxf2 b4 ile Siyah oyun sonunda karşılık bulur (Motor: +0.8).' },
        { move: '27...h5', text: '28.Qf2 Qh6 29.g3 ile Beyaz konsolide (+1.9).' },
      ],
    },
    '28w': {
      text: '28.Nd1! At d1’e çekilerek e3 vezirine saldırır.',
      amac: 'Veziri kovalamak ve a4 piyonunu geri vererek taşlarını uyumlu kareye getirmek.',
      neden: 'chess24’e göre Beyaz bir piyonu geri verip “tam bir konum üstünlüğü” aldı. 28.Qf2? Qxf2+ 29.Kxf2 bxc3 sonrası avantaj kaybolur (Motor: +0.1). 28.Qe1? bxc3 ile Beyaz taş kaybeder (−1.6). 28.Nd1 tek iyi hamle (+1.7).',
      diger: [
        { move: '28.Qf2', text: '28...Qxf2+ 29.Kxf2 bxc3 30.Rxc3 ile avantaj kaybolur (Motor: +0.1).' },
        { move: '28.Qe1', text: '28...bxc3 29.Qxc3 ile Beyaz taş kaybeder (−1.6).' },
      ],
    },
    '28b': {
      text: 'Vezir b3’e geçer ve c2 kalesine, a4 piyonuna saldırır.',
      amac: 'a4 piyonunu almak ve Beyazın vezir kanadına baskı yapmak.',
      neden: 'Vezir e3’ten çekilmek zorundaydı; b3’ten aynı anda c2 kalesine, a4 piyonuna ve b2’ye bakar. Böylece Siyah en azından bir piyonu geri alır. 28...Qb3 en iyi hamle (Motor: +1.6); 28...Qa7 ya da 28...Qd4 Beyaza Qc7-c5 ile aktif oyun verir (+2.8 / +2.9).',
      diger: [
        { move: '28...Qa7', text: '29.Qc7 Qd4 30.Qc5 ile Beyaz aktif (Motor: +2.8).' },
        { move: '28...Qd4', text: '29.Rc4 Qd2 30.Qe1 ile Beyaz üstün (+2.9).' },
      ],
    },
    '29w': {
      text: 'Kale d2’ye döner; d-piyonunu ve ikinci yatayı korur.',
      amac: 'b2 piyonunu ve d5’i savunmak; a4 piyonunu feda etmek.',
      neden: '29.Rd2 tek iyi hamle (Motor: +1.7). 29.Qc7 Rac8 ile Siyah aktif (+0.9); 29.Rc5 ise Qxa4 ile Siyah piyonu alır ve oyun eşitlenir (+0.1).',
      diger: [
        { move: '29.Qc7', text: '29...Nf4 30.Qc4 Qxa4 ile Siyah aktif (Motor: +0.9).' },
        { move: '29.Rc5', text: '29...Qxa4 30.Qe1 Rac8 ile oyun eşitlenir (+0.1).' },
      ],
    },
    '29b': {
      text: 'Siyah a4 piyonunu alır; Beyaz artık bir piyon önde.',
      amac: 'Malzemeyi geri kazanmak ve b-piyonunu geçer piyon yapmak.',
      neden: 'Motor 29...Rac8’i biraz daha iyi buluyor (+1.7). 29...Qxa4 doğal görünür ama vezir oyun dışına çıkar (+2.0).',
      diger: [
        { move: '29...Rac8', text: '30.Qf2 Rc1 31.Qd4 ile Beyaz aktif (Motor: +1.7).' },
        { move: '29...Nh5', text: '30.Qf2 Nhf4 31.Qe3 Qxa4 ile benzer (+1.9).' },
      ],
    },
    '30w': {
      text: 'Vezir f2’ye gelir; şahı korur ve d4’e gitmeye hazırlanır.',
      amac: 'Ding’in planını tamamlamak: vezir h3-g3-f2 yoluyla geri döndü.',
      neden: 'Vezir f2’de şahı ve e3, g3 karelerini korur; d4’e çıkıp b4 ve g7’ye bakmaya da hazırdır. Ayrıca h1 kalesine g1 üzerinden yol açılır. 30.Qf2 en iyi hamle (Motor: +1.9); 30.Qe1 ya da 30.Rg1 daha az uyumlu (+1.5 / +1.4).',
      diger: [
        { move: '30.Qe1', text: '30...Rac8 31.g3 Rc1 32.Qf2 ile benzer (Motor: +1.5).' },
        { move: '30.Rg1', text: '30...Rac8 31.Qf2 Nf4 32.Qd4 ile benzer (+1.4).' },
      ],
    },
    '30b': {
      text: 'Vezir d7’ye döner ve şah kanadına yönelir.',
      amac: 'Veziri merkeze ve şah kanadına getirip h3’e şah çekme fikirleri aramak.',
      neden: 'Motor 30...Nf4’ü biraz daha iyi buluyor (+2.0): 31.Bc4 Nxe4 32.fxe4 Rxe4. 30...Qd7 sonrası +2.2.',
      diger: [
        { move: '30...Nf4', text: '31.Bc4 Nxe4 32.fxe4 Rxe4 ile Siyah piyon kazanır ama Beyaz +2.0.' },
        { move: '30...Rec8', text: '31.g3 b3 32.Kg2 Rc2 ile Siyah aktif (+2.3).' },
      ],
    },
    '31w': {
      text: '31.g3 ile f4 ve h4 kareleri kontrol edilir.',
      amac: 'Siyahın atlarının f4’e gelmesini önlemek ve şaha kaçış karesi açmak.',
      neden: 'Motor 31.Qd4’ü biraz daha iyi buluyor (+2.2). 31.g3 de iyi (+2.1); g3 piyonu h3 karesini zayıflatır ama f4’ü kontrol eder.',
      diger: [
        { move: '31.Qd4', text: '31...a5 32.g3 Qh3+ 33.Kg1 ile benzer (Motor: +2.2).' },
        { move: '31.Qb6', text: '31...Reb8 32.Qd4 a5 ile Siyah aktif (+1.8).' },
      ],
    },
    '31b': {
      text: 'Vezir şah çekerek h3’e girer.',
      amac: 'Beyazın şahını rahatsız etmek ve h2’ye baskı yapmak.',
      neden: '31...a5 de aynı değerde (Motor: +2.3). 31...Qh3+ aktif görünür ama vezir orada Nf2 ile kovalanabilir.',
      diger: [
        { move: '31...a5', text: '32.Kg2 a4 33.Qd4 a3 ile Siyah geçer piyon arar (Motor: +2.3).' },
        { move: '31...Nh5', text: '32.Ne3 a5 33.Kg2 Ngf4+ ile Siyah aktif (+2.4).' },
      ],
    },
    '32w': {
      text: 'Şah g1’e çekilir.',
      amac: 'Şahı güvenli bir kareye çekmek.',
      neden: 'Şah g1’de g3-f2-g2 piyon ve taşlarının arkasında saklanır; h3’teki vezir yalnız kalır ve Nf2 ile kovalanabilir. 32.Kg1 en iyi kare (Motor: +2.2). 32.Ke1 şahı merkezde ve c3 üzerinden gelecek şahlara açık bırakır (+1.1); 32.Qg2 vezir değişimi teklif eder ama Siyah …Qd7 ile kaçar (+2.1).',
      diger: [
        { move: '32.Ke1', text: '32...a5 33.Bb5 Red8 ile Siyah aktif (Motor: +1.1).' },
        { move: '32.Qg2', text: '32...Qd7 33.Qf2 Qh3+ 34.Kg1 ile tekrar (+2.1).' },
      ],
    },
    '32b': {
      text: 'Siyah a-piyonunu ilerletir.',
      amac: 'Vezir kanadında geçer piyon yaratmak.',
      neden: 'Siyahın tek gerçek varlığı birleşik a- ve b-piyonlarıdır; …a4-a3 ile bunlar Beyazın taşlarını savunmaya bağlayabilir. Şah kanadında tek başına vezirle bir şey yapamayacağını gören Caruana karşı oyunu buradan arar. 32...a5 en iyi hamle (Motor: +2.2); 32...Rec8 de benzer (+2.3).',
      diger: [
        { move: '32...Rec8', text: '33.Bf1 Qd7 34.Kg2 a5 ile benzer (Motor: +2.3).' },
        { move: '32...Rac8', text: '33.Qf1 Qd7 34.Kg2 h5 ile Siyah aktif (+2.4).' },
      ],
    },
    '33w': {
      text: 'Vezir d4’te merkeze yerleşir; b4 piyonuna ve g7’ye bakar.',
      amac: 'Veziri merkezde aktifleştirmek ve Siyahın piyonlarını hedef almak.',
      neden: 'd4 Beyaz vezir için ideal bir karedir: d5 geçer piyonunu destekler, b4’e saldırır ve g7’ye çapraz kurar; Siyahın hiçbir hafif taşı onu oradan kovalayamaz. 33.Qd4 en iyi hamle (Motor: +2.2); 33.Qe3 ya da 33.Qf1 daha pasif (+1.8 / +1.7).',
      diger: [
        { move: '33.Qe3', text: '33...a4 34.Nf2 Qd7 35.Qd4 ile benzer (Motor: +1.8).' },
        { move: '33.Qf1', text: '33...Qc8 34.Qf2 a4 ile Siyah aktif (+1.7).' },
      ],
    },
    '33b': {
      text: 'At h5’e gelir; f4 karesine fedalar hazırlanıyor.',
      amac: 'Atı f4’e getirip g3 piyonuna ve Beyazın şahına baskı yapmak.',
      neden: 'Siyahın h3’teki veziri tek başına bir şey yapamaz; atların yardımı gerekir. …Nh5 ile hem g3’e baskı yapılır hem de …Nhf4 ya da …Ngf4 fedaları için hazırlık yapılır. Motor 33...Rac8’i biraz daha iyi buluyor (+2.3); 33...Nh5 aktif ama Beyaz 34.Nf2 ile vezire tempo kazanır (+2.5).',
      diger: [
        { move: '33...Rac8', text: '34.Nf2 Qh5 35.Kg2 Qg5 ile benzer (Motor: +2.3).' },
        { move: '33...b3', text: '34.Nf2 Qd7 35.Kg2 a4 ile Siyah geçer piyon arar (+2.5).' },
      ],
    },
    '34w': {
      text: 'At f2’ye gelir; h3 vezirine saldırır.',
      amac: 'Veziri kovalamak ve h3, g4 karelerini kontrol etmek.',
      neden: 'd1’deki at oyun dışıydı; f2’de hem h3 vezirine saldırır hem de g4, h3, e4 ve d3 karelerini kontrol eder, yani şahın en iyi savunucusu olur. 34.Nf2 en iyi hamle (Motor: +2.7); 34.Bf1 ya da 34.Ne3 daha az etkili (+2.4).',
      diger: [
        { move: '34.Bf1', text: '34...Qd7 35.Ne3 a4 36.Qxb4 ile benzer (Motor: +2.4).' },
        { move: '34.Ne3', text: '34...a4 35.Bf1 Qd7 36.Qxb4 ile benzer (+2.4).' },
      ],
    },
    '34b': {
      text: 'Vezir d7’ye çekilir.',
      amac: 'Veziri güvenli bir kareye çekip d-hattını kontrol etmek.',
      neden: '34...Qd7 en iyi hamle (Motor: +2.7). 34...Nxg3? 35.Nxh3 Nxh1 sonrası Beyaz kalitede önde ve at yakalanır (+5.5).',
      diger: [
        { move: '34...Qc8', text: '35.Kg2 a4 36.d6 ile Beyaz üstün (Motor: +3.0).' },
        { move: '34...Nxg3', text: '35.Nxh3 Nxh1 36.d6 ile Beyaz kazanır (+5.5).' },
      ],
    },
    '35w': {
      text: '35.f4: e2 filinin h5’e giden çaprazı açılır ve f5 tehdidi gelir.',
      amac: 'h5 atına saldırmak ve f5 ile g6 atını kovalamak.',
      neden: 'Fil e2’den h5’e bakar; f3 piyonu kalkınca h5 atı korumasız kalır. 35.Kg2 de iyi (+2.7), ama 35.f4 Siyahı hemen karara zorlar. Motor: 35.f4 +2.75.',
      diger: [
        { move: '35.Kg2', text: '35...a4 36.Qxb4 Reb8 ile Siyah aktif ama Beyaz +2.7.' },
        { move: '35.d6', text: '35...a4 36.Kg2 Nhf4+ ile Siyah aktif (+2.5).' },
      ],
    },
    '35b': {
      text: '35...Nhxf4: Siyah atı iki piyona verir.',
      amac: 'Beyazın şahını açmak ve pratik şans yaratmak.',
      neden: 'Sakin 35...Nf6 sonrası 36.Kg2 Ne7 37.d6 ile Beyaz rahat kazanır (Motor: +3.4–3.6). At fedası en dirençli yol (+2.6). FIDE’nin raporuna göre Caruana zaman kontrolüne yakın bu fedayla saldırı şansı aradı.',
      diger: [
        { move: '35...Nf6', text: '36.Kg2 Ne7 37.d6 Nc6 ile Beyaz rahat (Motor: +3.6).' },
        { move: '35...Ngxf4', text: '36.gxf4 Nxf4 37.Kf1 a4 ile benzer (+2.7).' },
      ],
    },
    '36w': {
      text: 'Beyaz atı alır; tek doğru hamle.',
      amac: 'Fazla taşı kabul etmek.',
      neden: '36.Bg4? f5 37.Bd1 fxe4 sonrası Siyah karşılık bulur (Motor: −0.6). 36.gxf4 zorunlu (+2.7).',
      diger: [
        { move: '36.Bg4', text: '36...f5 37.Bd1 fxe4 ile Siyah aktif (Motor: −0.6).' },
      ],
    },
    '36b': {
      text: 'İkinci at f4’e gelir; e2 filine ve h3’e bakar.',
      amac: 'Fili ve şahı hedef alıp ikinci piyonu geri kazanmak.',
      neden: 'Motor 36...a4’ü biraz daha iyi buluyor (+2.4). 36...Nxf4 doğal olanıdır (+2.5).',
      diger: [
        { move: '36...a4', text: '37.Qxb4 Nxf4 38.Kf1 a3 ile Siyah geçer piyon arar (Motor: +2.4).' },
        { move: '36...Rac8', text: '37.Bg4 f5 38.Bxf5 ile Beyaz üstün (+3.4).' },
      ],
    },
    '37w': {
      text: 'Şah f1’e gider ve e2 filini korur.',
      amac: 'Fili korumak ve Nh3+ fikirlerini önlemek.',
      neden: 'f4 atı e2 filine saldırıyor ve …Nh3+ ile şaha şah çekmeyi tehdit ediyordu. Şah f1’de hem fili korur hem h3 karesinden uzaklaşır; ayrıca g1 karesini kaleye bırakır. 37.Kf1 en iyi hamle (Motor: +2.65). 37.Bc4 ya da 37.Nd3 Siyaha …a4 ile karşı oyun verir (+2.2 / +2.1).',
      diger: [
        { move: '37.Bc4', text: '37...Rac8 38.d6 a4 ile Siyah aktif (Motor: +2.2).' },
        { move: '37.Nd3', text: '37...Nxe2+ 38.Rxe2 a4 ile Siyah aktif (+2.1).' },
      ],
    },
    '37b': {
      text: 'Vezir d6’ya gelir; çaprazlara ve h2’ye bakar.',
      amac: 'Veziri aktifleştirmek ve h2 piyonunu hedef almak.',
      neden: 'Vezir d6’dan h2’ye ve b4 üzerinden vezir kanadına bakar, at fedasının ardından saldırıyı sürdürmek ister. Ama somut tehdit yoktur ve Beyaz Rg1 ile g-hattını alır. Motor 37...a4’ü öneriyor (+2.75): piyonlar Siyahın tek gerçek şansıdır. 37...Qd6 sonrası +3.0.',
      diger: [
        { move: '37...a4', text: '38.Rg1 f5 39.e5 Nxe2 ile Siyah aktif (Motor: +2.75).' },
        { move: '37...Nxe2', text: '38.Rxe2 a4 39.Qxb4 f5 ile benzer (+2.8).' },
      ],
    },
    '38w': {
      text: 'Kale açık g-hattına gelir ve g7’ye baskı yapar.',
      amac: 'Kaleyi aktifleştirip şah saldırısına başlamak.',
      neden: 'h1 kalesi nihayet oyuna girer. 38.Rg1 en iyi hamle (Motor: +2.8).',
      diger: [
        { move: '38.Bb5', text: '38...Rac8 39.Bc6 Re7 40.Rg1 ile benzer (Motor: +2.7).' },
        { move: '38.b3', text: '38...f6 39.Rg1 Nxe2 ile Siyah aktif (+2.6).' },
      ],
    },
    '38b': {
      text: 'f6 ile e5 ve g5 kareleri korunur.',
      amac: 'Şahın önünü sağlamlaştırmak ve e5 ilerleyişini önlemek.',
      neden: 'g-hattı açıldı ve Beyazın veziri d4’ten g7’ye bakıyor; e5 ilerleyişi de d6 vezirine tempoyla saldırıp d-piyonunun yolunu açabilirdi. …f6 hem e5’i hem g5’i kontrol eder, ama f6 piyonu ve g7 zayıflar; bu ileride 46.Rxf6 ile bedelini ödetecek. 38...f6 en iyi hamle (Motor: +2.8); 38...Ng6 ya da 38...Re5 daha zayıf (+3.1 / +3.3).',
      diger: [
        { move: '38...Ng6', text: '39.Bb5 Re7 40.Nd3 ile Beyaz üstün (Motor: +3.1).' },
        { move: '38...Re5', text: '39.Rg4 Ng6 40.Nd3 ile Beyaz üstün (+3.3).' },
      ],
    },
    '39w': {
      text: 'Fil b5’ten e8 kalesine saldırır.',
      amac: 'Kaleyi kovalayıp fili aktif bir kareye getirmek.',
      neden: 'e2 fili pasifti; b5’ten tempo kazanarak e8 kalesine saldırır, sonra c6’ya gelip d5’i destekler ve Siyahın kalelerinin c-hattını kullanmasını engeller. Aynı zamanda f4 atının e2’ye vurma hedefi de ortadan kalkar. 39.Bb5 en iyi hamle (Motor: +2.9).',
      diger: [
        { move: '39.b3', text: '39...Nxe2 40.Rxe2 a4 ile Siyah aktif (Motor: +2.7).' },
        { move: '39.Nd3', text: '39...Ne6 40.Qe3 Ng5 ile benzer (+2.5).' },
      ],
    },
    '39b': {
      text: 'Kale e7’ye çekilir.',
      amac: 'Kaleyi güvenli bir kareye çekip ikinci yatayı korumak.',
      neden: 'Kale saldırı altındaydı; e7’de ikinci yatayı ve g7’yi korur, gerekirse c7’ye geçebilir. Seçenekler arasında büyük fark yok: 39...Re7, 39...Rec8 ve 39...Reb8 aynı değerde (Motor: +2.9). Siyahın konumu zaten stratejik olarak kaybedilmiştir; oyun malzeme farkına göre ilerler.',
      diger: [
        { move: '39...Rec8', text: '40.Bc6 a4 41.Ng4 Kh8 ile benzer (Motor: +2.9).' },
        { move: '39...Reb8', text: '40.Bc6 a4 41.Ng4 Kh8 ile benzer (+2.9).' },
      ],
    },
    '40w': {
      text: 'b3 ile b-piyonu güvenceye alınır ve c4 karesi kontrol edilir.',
      amac: 'Siyahın a- ve b-piyonlarını durdurmak.',
      neden: 'chess24’e göre Ding zaman kontrolüne yaklaşık 4 dakikayla ulaştı. Motor 40.Rc2’yi öneriyor (+3.05). 40.b3 de iyi (+2.5).',
      diger: [
        { move: '40.Rc2', text: '40...Rc7 41.Rxc7 Qxc7 42.d6 ile Beyaz üstün (Motor: +3.05).' },
        { move: '40.Rg4', text: '40...h5 41.Rxf4 Qxf4 42.d6 ile Beyaz üstün (+3.0).' },
      ],
    },
    '40b': {
      text: 'Kale f8’e gelir.',
      amac: 'f-hattında baskı kurmak.',
      neden: 'Kale f-hattına gelerek f4 atını destekler ve f2 atına baskı kurar; fikir …Nh3 ya da …Nd3 ile f2’yi değiştirmektir. Ama c-hattı Beyaza kalır. Motor 40...Rc7’yi öneriyor (+2.5): c-hattını kapatmak daha önemliydi. 40...Rf8 sonrası +2.9.',
      diger: [
        { move: '40...Rc7', text: '41.Bc6 Rd8 42.Qc4 Kh8 ile Siyah aktif (Motor: +2.5).' },
        { move: '40...a4', text: '41.bxa4 Rc7 42.Rg3 ile Beyaz üstün (+2.7).' },
      ],
    },
    '41w': {
      text: 'Kale c-hattına geçer.',
      amac: 'c-hattını kontrol edip Rc6 ile f6’ya baskı yapmak.',
      neden: 'Siyah c-hattını boş bırakınca Beyazın kalesi d2’den c2’ye geçip c6’ya girmeye hazırlanır; oradan f6 ve a6 piyonlarına baskı yapacaktır. Aynı zamanda ikinci yatay korunmaya devam eder. 41.Rc2 en iyi hamle (Motor: +3.3).',
      diger: [
        { move: '41.Rg3', text: '41...Rc7 42.Nd3 Ne6 ile benzer (Motor: +3.05).' },
        { move: '41.Nd1', text: '41...Nh3 42.Rg3 Ng5 ile benzer (+2.9).' },
      ],
    },
    '41b': {
      text: 'At e6’ya döner.',
      amac: 'Atı merkeze getirip c5 ve g5 karelerini kontrol etmek.',
      neden: 'f4 atı Beyazın d4 vezirinin ve g1 kalesinin baskısı altındaydı; e6’dan d4 vezirine saldırır ve c5, g5 karelerine yönelir. Ama bu, at fedasından sonra kazanılan aktif kareyi geri vermek demektir. Motor 41...a4’ü öneriyor (+3.4); 41...Ne6 sonrası +3.8.',
      diger: [
        { move: '41...a4', text: '42.Rc6 Qe5 43.Qxe5 Rxe5 ile oyun sonu (Motor: +3.4).' },
        { move: '41...Qb8', text: '42.Bc6 Rd8 43.Rg3 Kh8 ile benzer (+3.5).' },
      ],
    },
    '42w': {
      text: 'Vezir e3’e gelir; c5 ve h6 karelerine bakar.',
      amac: 'Veziri aktifleştirip Qc5 ile e7 kalesine saldırmak.',
      neden: 'e6 atı veziri kovaladı; e3’te vezir hem h6’ya hem c5’e bakar, ve Qc5 ile e7 kalesine, a5 piyonuna saldırmaya hazırlanır. Ayrıca f2 atını ve şahı korumaya devam eder. 42.Qe3 en iyi hamle (Motor: +3.8).',
      diger: [
        { move: '42.Qd3', text: '42...Nf4 43.Qd4 Qb8 ile benzer (Motor: +3.2).' },
        { move: '42.Qd2', text: '42...Ng5 43.Kg2 Kh8 ile benzer (+3.2).' },
      ],
    },
    '42b': {
      text: 'At g5’e gider.',
      amac: 'Atı şah kanadına getirip h3 ve f3 karelerini kontrol etmek.',
      neden: 'At g5’ten f3 ve h3 karelerine bakar ve Beyazın şahının çevresinde gezinir; ama Beyaz h4 ile onu hemen kovalayabilir. 42...Nf4 ve 42...Ng5 aynı değerde (Motor: +3.8–3.9); Siyahın gerçek bir planı yoktur.',
      diger: [
        { move: '42...Nf4', text: '43.Qc5 Qxc5 44.Rxc5 Re5 ile oyun sonu (Motor: +3.8).' },
        { move: '42...Nd8', text: '43.Qg3 Qb6 44.Be2 Kh8 ile benzer (+4.1).' },
      ],
    },
    '43w': {
      text: 'h4 ile at kovalanır.',
      amac: 'Atı g5’ten çıkarmak ve şah kanadında alan kazanmak.',
      neden: 'h4 atı tempoyla kovalar ve şah kanadında alan kazanır, ama g4 karesini zayıflatır. Motor 43.Qg3’ü öneriyor (+4.2): vezir g-hattında kaleyle birleşir ve g7’ye baskı yapar, at ise yerinde kalır. 43.h4 sonrası +3.35; Beyaz yine açık üstündür.',
      diger: [
        { move: '43.Qg3', text: '43...Qe5 44.Kg2 Rd8 45.Bc4 ile Beyaz üstün (Motor: +4.2).' },
        { move: '43.Rc6', text: '43...Qb8 44.Bc4 Kh8 45.d6 ile Beyaz üstün (+3.6).' },
      ],
    },
    '43b': {
      text: 'At f7’ye çekilir.',
      amac: 'Atı savunma için f7’ye getirmek; f6 ve h6’yı korumak.',
      neden: '43...Nf7 tek iyi hamle (Motor: +3.25). 43...a4 ya da 43...Ref7 daha zayıf (+4.1 / +4.3).',
      diger: [
        { move: '43...a4', text: '44.Rc6 Qd7 45.Bxa4 f5 ile Beyaz üstün (Motor: +4.1).' },
        { move: '43...Ref7', text: '44.Rc6 Qd7 45.Bc4 Kh8 ile Beyaz üstün (+4.3).' },
      ],
    },
    '44w': {
      text: 'Kale c6’ya girer ve f6 piyonuna baskı yapar.',
      amac: 'Kaleyi aktifleştirip f6’yı hedef almak.',
      neden: 'Kale c6’ya girerek f6 piyonuna üçüncü yataydan saldırır ve d5-c6 noktalarıyla Siyahın vezir kanadını keser. Siyah f6’yı savunmak için taşlarını pasifleştirmek zorunda kalacak. 44.Rc6 en iyi hamle (Motor: +3.2).',
      diger: [
        { move: '44.Be2', text: '44...f5 45.Rc6 Qe5 ile Siyah aktif (Motor: +3.0).' },
        { move: '44.Qd4', text: '44...Qb8 45.Ba4 Kh8 ile benzer (+2.9).' },
      ],
    },
    '44b': {
      text: 'Vezir b8’e geçer ve b4 piyonunu destekler.',
      amac: 'Veziri güvenli bir kareye çekip vezir kanadındaki piyonları korumak.',
      neden: 'Vezir d6’da Rc6’nın saldırısı altındaydı; b8’den b4 piyonunu korur ve h2-b8 çaprazını izler. Ama vezir şah kanadından uzaklaşır ve f6 piyonu zayıf kalır. 44...Qb8 en iyi hamle (Motor: +3.45); 44...Qe5 ya da 44...Qd7 daha zayıf (+3.7 / +3.9).',
      diger: [
        { move: '44...Qe5', text: '45.Nd3 Qxe4 46.Qxe4 Rxe4 ile oyun sonu (Motor: +3.7).' },
        { move: '44...Qd7', text: '45.Qc5 Re5 46.Bc4 ile Beyaz üstün (+3.9).' },
      ],
    },
    '45w': {
      text: 'Vezir c5’ten e7 kalesine saldırır.',
      amac: 'Kaleyi kovalayıp f8 kalesine de baskı yapmak.',
      neden: 'Vezir c5’ten e7 kalesine saldırır ve a5, b4 piyonlarına bakar. Kale bu yüzden savunmaya bağlanır ve f6 piyonu daha da korumasız kalır. 45.Qc5 en iyi hamle (Motor: +3.3).',
      diger: [
        { move: '45.Bc4', text: '45...Kh8 46.Qc5 Rd7 ile benzer (Motor: +3.15).' },
        { move: '45.Be2', text: '45...a4 46.bxa4 b3 ile Siyah geçer piyon alır (+3.05).' },
      ],
    },
    '45b': {
      text: 'Vezir d8’e döner.',
      amac: 'e7 kalesini savunmak.',
      neden: 'Motor 45...Rd7’yi öneriyor (+3.65). 45...Qd8 g7 piyonunun bağını unutur ve 46.Rxf6’ya izin verir (+4.6).',
      diger: [
        { move: '45...Rd7', text: '46.d6 Nxd6 47.Rb6 Nb7 ile Siyah dayanır (Motor: +3.65).' },
        { move: '45...a4', text: '46.Bxa4 Rd7 47.Rb6 ile benzer (+3.8).' },
      ],
    },
    '46w': {
      text: '46.Rxf6: kale f6 piyonunu alır.',
      amac: 'Siyahın şahının önünü açmak.',
      neden: 'g7 piyonu g1 kalesi yüzünden şaha bağlı olduğu için f6’yı geri alamaz. Motor 46.Bc4’ü biraz daha iyi buluyor (+4.1), ama 46.Rxf6 de açık kazanç (+3.35).',
      diger: [
        { move: '46.Bc4', text: '46...Re5 47.Qb6 Qe8 48.Re6 ile Beyaz üstün (Motor: +4.1).' },
        { move: '46.Rg3', text: '46...Re5 47.Rf3 Rfe8 ile benzer (+4.0).' },
      ],
    },
    '46b': {
      text: 'Şah köşeye çekilir.',
      amac: 'g7 piyonunun bağını kaldırmak.',
      neden: 'g7 piyonu bağlı olduğu sürece Siyah f6’daki kaleyi kovalayamaz; şah köşeye giderek bu bağı kaldırır ve …gxf6 tehdidi doğar. Bu yüzden Beyaz kaleyi geri çekmek zorunda kalacak. 46...Kh8, 46...Rb7 ve 46...a4 benzer değerde (Motor: +3.5).',
      diger: [
        { move: '46...Rb7', text: '47.Rf5 Nd6 48.Rxf8+ Qxf8 ile benzer (Motor: +3.5).' },
        { move: '46...a4', text: '47.d6 Rb7 48.Rfg6 ile Beyaz üstün (+3.6).' },
      ],
    },
    '47w': {
      text: 'Kale f5’e çekilir; f-hattında baskı sürer.',
      amac: 'Kaleyi güvenli bir kareye çekip f8 kalesine baskı yapmak.',
      neden: 'Şah h8’e gidince …gxf6 tehdidi doğdu; kale f-hattında kalarak f8 kalesine baskıyı sürdürür ve f7 atını bağlı tutar. 47.Re6, 47.Rf3 ve 47.Rf5 benzer değerde (Motor: +3.7–3.8).',
      diger: [
        { move: '47.Re6', text: '47...Rxe6 48.dxe6 Nd6 49.Qd4 ile Beyaz üstün (Motor: +3.8).' },
        { move: '47.Rf3', text: '47...Rc7 48.Bc6 a4 ile benzer (+3.75).' },
      ],
    },
    '47b': {
      text: 'Kale c7’de c-hattını alır.',
      amac: 'Kaleyi aktifleştirip c-hattında baskı kurmak.',
      neden: 'e7 kalesi Qc5’in saldırısından çıkar ve c-hattını alır; c5 vezirine de saldırır. Böylece Siyah en azından bir taşını aktifleştirir. 47...Rc7 en iyi hamle (Motor: +3.85); 47...Kg8 ya da 47...a4 d6-d7 ilerleyişine izin verir (+4.5 / +4.7).',
      diger: [
        { move: '47...Kg8', text: '48.Bc6 a4 49.Bxa4 Rc7 ile Beyaz üstün (Motor: +4.5).' },
        { move: '47...a4', text: '48.d6 Rb7 49.d7 ile Beyaz kazanır (+4.7).' },
      ],
    },
    '48w': {
      text: 'Fil c6’ya gelir ve c-hattını kapatır; d5’i de destekler.',
      amac: 'Kalenin c-hattındaki baskısını durdurmak.',
      neden: 'c-hattındaki kale vezire saldırıyordu; fil c6’ya gelerek bu hattı tıkar, d5 geçer piyonunu destekler ve e8 ile d7 karelerine bakar. Fil artık Beyazın en iyi taşıdır. 48.Bc6 en iyi hamle (Motor: +3.8).',
      diger: [
        { move: '48.Qe3', text: '48...Nd6 49.Rxf8+ Qxf8 50.Bd3 ile benzer (Motor: +3.7).' },
        { move: '48.Qd4', text: '48...Nd6 49.Rxf8+ Qxf8 ile Siyah aktif (+2.6).' },
      ],
    },
    '48b': {
      text: 'Siyah b-piyonuna yol açmak için ...a4 oynar.',
      amac: 'b-piyonunu geçer piyon yapmak.',
      neden: 'Siyahın tek şansı vezir kanadındaki piyonlardır: …a4 ile b3 piyonuna saldırılır, bxa4 sonrası b-piyonu geçer piyon olur ve b3-b2 ile Beyazı meşgul eder. 48...a4 en iyi hamle (Motor: +4.0).',
      diger: [
        { move: '48...Rg8', text: '49.Rg3 a4 50.Qxb4 Nd6 ile benzer (Motor: +4.1).' },
        { move: '48...Kh7', text: '49.e5 Rc8 50.Qe3 a4 ile Beyaz üstün (+4.4).' },
      ],
    },
    '49w': {
      text: 'Beyaz alır.',
      amac: 'Malzeme kazanmak.',
      neden: 'Piyonu almak hem malzeme kazandırır hem de c4 ve b5 karelerini Beyaza bırakır. Siyahın b-piyonu ilerleyecek ama Beyazın taşları onu durdurmaya yeterli. 49.bxa4 en iyi hamle (Motor: +4.1); 49.e5 ya da 49.Qxb4 daha az kesin (+3.5).',
      diger: [
        { move: '49.e5', text: '49...axb3 50.Qxb4 Qb8 ile benzer (Motor: +3.55).' },
        { move: '49.Qxb4', text: '49...axb3 50.e5 Qb8 ile benzer (+3.5).' },
      ],
    },
    '49b': {
      text: 'b-piyonu ilerler.',
      amac: 'Geçer piyonu vezire yaklaştırmak.',
      neden: 'Geçer piyon ne kadar ileri giderse Beyazın taşlarını o kadar bağlar; b3-b2 ile Beyaz bir kalesini b-hattına ayırmak zorunda kalacak. 49...b3 en iyi hamle (Motor: +4.2).',
      diger: [
        { move: '49...Kh7', text: '50.Qxb4 Nd6 51.Rxf8 Qxf8 ile benzer (Motor: +4.7).' },
        { move: '49...Rg8', text: '50.Qxb4 Nd6 51.Rf3 ile benzer (+4.8).' },
      ],
    },
    '50w': {
      text: 'Kale g3’ten b3’e geçmeye hazırlanır.',
      amac: 'b-piyonunu durdurmak.',
      neden: 'Kale g-hattından üçüncü yataya gelerek b3’e geçmeye hazırlanır; b-piyonunu durdurmanın en kolay yolu budur. Motor 50.Ke2’yi öneriyor (+4.3): şah d3 üzerinden piyonu durdurmaya gider. 50.Rg3 de iyi (+3.8).',
      diger: [
        { move: '50.Ke2', text: '50...Re8 51.Qb4 Ree7 52.Rb1 ile Beyaz üstün (Motor: +4.3).' },
        { move: '50.Kg2', text: '50...b2 51.Rb1 Nd6 ile benzer (+4.1).' },
      ],
    },
    '50b': {
      text: 'Piyon b2’ye gelir.',
      amac: 'Piyonu vezire bir adım uzaklıkta getirmek.',
      neden: 'Piyon b2’de b1’e çıkmakla tehdit eder; Beyaz kalesini b3’e getirmek zorunda kalır. 50...b2 en iyi hamle (Motor: +3.9).',
      diger: [
        { move: '50...Nd6', text: '51.Rxf8+ Qxf8 52.Rxb3 Qf4 ile benzer (Motor: +4.7).' },
        { move: '50...Re8', text: '51.Qb4 Re5 52.Rf4 ile benzer (+5.0).' },
      ],
    },
    '51w': {
      text: 'Kale b3’te b-piyonunu durdurur.',
      amac: 'Piyonu durdurup sonra almak.',
      neden: 'Kale b3’te piyonu durdurur ve gerektiğinde alır. Motor 51.Qb4’ü biraz daha iyi buluyor (+4.2): vezir piyonu doğrudan hedef alır. 51.Rb3 de iyi (+4.0).',
      diger: [
        { move: '51.Qb4', text: '51...Nd6 52.Rxf8+ Qxf8 53.Qxb2 ile benzer (Motor: +4.2).' },
        { move: '51.Qc2', text: '51...Qd6 52.Rb3 Ne5 53.Qxb2 ile benzer (+3.8).' },
      ],
    },
    '51b': {
      text: 'At d6’ya gelir ve f5 kalesine saldırır.',
      amac: 'Kaleyi kovalamak ve kale değişimine zorlamak.',
      neden: 'At d6’dan f5 kalesine saldırır; Beyaz kaleyi geri çekerse b2 piyonuna zaman kalmaz, değişirse Siyah biraz rahatlar. 51...Nd6 en iyi hamle (Motor: +3.85).',
      diger: [
        { move: '51...Rg8', text: '52.Rxb2 Nd6 53.Rf3 Rf7 ile benzer (Motor: +4.35).' },
        { move: '51...Rc8', text: '52.Rxb2 Qxh4 53.Kg2 g6 ile benzer (+4.9).' },
      ],
    },
    '52w': {
      text: '52.Rxf8+! Saldırı altındaki kale şahla değişilir.',
      amac: 'Kale değişimiyle d6 atının saldırısından kurtulup b2 piyonunu almak.',
      neden: '52.Rxb2? Nxf5 53.exf5 sonrası Siyah bir taş geri alır ve avantaj +1.7’ye düşer. 52.Rxf8+ Qxf8 53.Rxb2 ile Beyaz bir taş fazla kalır (Motor: +4.1).',
      diger: [
        { move: '52.Rxb2', text: '52...Nxf5 53.exf5 Rcf7 54.Nd1 ile Siyah karşılık bulur (Motor: +1.7).' },
        { move: '52.Qb6', text: '52...Nxf5 53.exf5 Rxf5 ile Siyah karşılık bulur (+0.9).' },
      ],
    },
    '52b': {
      text: 'Vezir geri alır; tek hamle.',
      amac: 'Malzemeyi korumak.',
      neden: '52...Kh7? 53.Rxd8 Nb7 54.Bxb7 Rxc5 sonrası Beyaz kazanır (Motor: +10.0). 52...Qxf8 zorunlu (+3.9).',
      diger: [
        { move: '52...Kh7', text: '53.Rxd8 Nb7 54.Bxb7 Rxc5 ile Beyaz kazanır (Motor: +10.0).' },
      ],
    },
    '53w': {
      text: 'Beyaz b2 piyonunu alır.',
      amac: 'Siyahın son karşı oyununu ortadan kaldırmak.',
      neden: 'Siyahın son karşı oyunu b2 piyonuydu; alındığında Beyaz bir taş fazla ve iki geçer merkez piyonuyla kalır. 53.e5 ve 53.Rxb2 aynı değerde (Motor: +4.0).',
      diger: [
        { move: '53.e5', text: '53...Qf5 54.Rxb2 Ne4 55.Qd4 ile benzer (Motor: +4.0).' },
        { move: '53.Qc2', text: '53...Rf7 54.Rxb2 Rf4 55.Kg2 ile benzer (+3.5).' },
      ],
    },
    '53b': {
      text: 'Vezir f4’ten f2 atına ve h4’e bakar.',
      amac: 'Veziri aktifleştirip Beyazın şahına baskı yapmak.',
      neden: 'Vezir f4’ten f2 atına ve h4 piyonuna bakar; Beyazın şahını rahatsız etmek ister. Motor 53...Qf6’yı biraz daha iyi buluyor (+4.1): e5 ilerleyişini önler. 53...Qf4 sonrası +4.25.',
      diger: [
        { move: '53...Qf6', text: '54.e5 Qxe5 55.Rb8+ Kh7 ile benzer (Motor: +4.1).' },
        { move: '53...Qe7', text: '54.Rb3 Qf6 55.Qc2 Qf8 ile benzer (+4.8).' },
      ],
    },
    '54w': {
      text: 'Kale şah çekerek sekizinci yataya girer.',
      amac: 'Şahı kovalamak ve sekizinci yatayı kontrol etmek.',
      neden: 'Kale şah çekerek sekizinci yataya girer ve şahı h7’ye zorlar; bu, sonra c2 vezirinin b1-h7 çaprazında açarak şah çekme fikrini doğurur. Motor 54.e5’i biraz daha iyi buluyor (+4.4). 54.Rb8+ de iyi (+4.1).',
      diger: [
        { move: '54.e5', text: '54...Qxe5 55.Rb8+ Kh7 56.Qc2+ ile Beyaz üstün (Motor: +4.4).' },
        { move: '54.Qc2', text: '54...Rc8 55.Kg2 Rf8 56.Rb3 ile benzer (+4.2).' },
      ],
    },
    '54b': {
      text: 'Şah h7’ye gider.',
      amac: 'Şahı güvenli bir kareye çekmek.',
      neden: '54...Kh7 tek iyi hamle (Motor: +4.1). 54...Rc8 ya da 54...Nc8 malzeme kaybettirir (+6.2 / +7.7).',
      diger: [
        { move: '54...Rc8', text: '55.Rxc8+ Nxc8 56.Bd7 Nd6 ile Beyaz kazanır (Motor: +6.2).' },
        { move: '54...Nc8', text: '55.d6 Kh7 56.dxc7 Qxc7 ile Beyaz kazanır (+7.7).' },
      ],
    },
    '55w': {
      text: 'Vezir c2’ye gelir; b1-h7 çaprazı e4 piyonu ilerleyince açılacak.',
      amac: 'Açarak şah çekme fikrini hazırlamak.',
      neden: 'Vezir c2’de h7 şahıyla aynı çapraza girer; arada sadece e4 piyonu vardır. Piyon ilerlediği anda açarak şah çekilecek. 55.Qc2 en iyi hamle (Motor: +4.5). 55.e5 ya da 55.Ke2 daha zayıf (+4.1 / +3.55).',
      diger: [
        { move: '55.e5', text: '55...Nc4 56.Rb3 Nxe5 57.Qc2+ ile benzer (Motor: +4.1).' },
        { move: '55.Ke2', text: '55...Qh2 56.Qe3 Qe5 ile Siyah aktif (+3.55).' },
      ],
    },
    '55b': {
      text: '55...Re7? Kale e7’den e4 piyonuna bakar.',
      amac: 'e4 piyonuna saldırmak.',
      neden: 'Hata: kale e-hattına gelince e5+ açarak şah çekme tehdidi daha güçlü olur. Motor 55...Qe5’i öneriyor (+4.5); maç hamlesinden sonra +6.6.',
      diger: [
        { move: '55...Qe5', text: '56.Kg2 Rf7 57.Rb3 Rf6 ile Siyah dayanır (Motor: +4.5).' },
        { move: '55...Rf7', text: '56.e5+ Nf5 57.e6 Rc7 ile benzer (+4.7).' },
      ],
    },
    '56w': {
      text: '56.e5+! Piyon ilerleyince c2 veziri h7’ye şah çeker.',
      amac: 'Açarak şah çekme ile d6 atına saldırmak.',
      neden: 'Piyon hem şah çeker hem de d6 atına saldırır. Motor: 56.e5+ +6.7, 56.Rd8 +5.2.',
      diger: [
        { move: '56.Rd8', text: '56...g6 57.Rd7 Qxh4 58.Bb5 ile Beyaz üstün (Motor: +5.2).' },
        { move: '56.Rb3', text: '56...Kg8 57.Kg2 Rf7 58.Rg3 ile benzer (+4.4).' },
      ],
    },
    '56b': {
      text: 'At f5’e gelerek şahı kapatır.',
      amac: 'Şahı korumak.',
      neden: 'Şahı korumak için tek iyi kapama: at f5’e gelerek şahı kapatır ve e5 piyonunun d6’yı almasından kaçar. 56...Nf5 en iyi hamle (Motor: +5.6). 56...g6 57.exd6 ile Beyaz bir taş daha kazanır (+7.0).',
      diger: [
        { move: '56...g6', text: '57.exd6 Qxd6 58.Rb3 Rf7 ile Beyaz kazanır (Motor: +7.0).' },
        { move: '56...Qf5', text: '57.Qxf5+ Nxf5 58.d6 Rxe5 ile Beyaz kazanır (+7.4).' },
      ],
    },
    '57w': {
      text: 'Vezir e4’te f5 atını bağlar ve merkezde durur.',
      amac: 'Atı bağlayıp e5 piyonunu korumak.',
      neden: 'Motor 57.d6’yı öneriyor (+6.1): 57...Rxe5 58.d7 g6 59.d8=Q ile geçer piyon vezir olur. 57.Qe4 de kazanır (+5.1).',
      diger: [
        { move: '57.d6', text: '57...Rxe5 58.d7 g6 59.d8=Q ile Beyaz kazanır (Motor: +6.1).' },
        { move: '57.Rb3', text: '57...g6 58.d6 Rf7 59.e6 ile Beyaz kazanır (+4.4).' },
      ],
    },
    '57b': {
      text: 'Vezir şah çeker.',
      amac: 'Beyazın şahını rahatsız etmek.',
      neden: 'Siyah vezirle şah çekerek zaman kazanmak ister; şah g2’ye gidince …g6 ile kendi şahını sağlamlaştırabilir. 57...Qxe5 ve 57...Qc1+ benzer değerde (Motor: +5.4–5.5).',
      diger: [
        { move: '57...Qxe5', text: '58.Qxe5 Rxe5 59.Re8 Re7 ile oyun sonu (Motor: +5.35).' },
        { move: '57...Qxe4', text: '58.Nxe4 Nd4 59.e6 Rc7 ile benzer (+5.65).' },
      ],
    },
    '58w': {
      text: 'Şah g2’ye gider; tek doğru kare.',
      amac: 'Şahı güvenli bir kareye çekmek.',
      neden: '58.Ke2 daha zayıf (+3.15); 58.Nd1? Qxd1+ ile Beyaz atı kaybeder (0.0). 58.Kg2 tek iyi hamle (+5.3).',
      diger: [
        { move: '58.Ke2', text: '58...g6 59.Kd3 Ng3 60.Qb4 ile benzer (Motor: +3.15).' },
        { move: '58.Nd1', text: '58...Qxd1+ 59.Kg2 Qd2+ ile Siyah beraberliğe ulaşır (0.0).' },
      ],
    },
    '58b': {
      text: 'g6 ile şahın çaprazı kapatılır; tek iyi hamle.',
      amac: 'Şahı korumak.',
      neden: 'f5 atı e4 vezirine bağlıydı; g6 ile at korunur ve şahın çaprazı kapanır. 58...g6 tek iyi hamle (Motor: +5.4). 58...Rxe5? 59.Qxe5 Nxh4+ 60.Kg3 ile Beyaz kazanır (+6.7).',
      diger: [
        { move: '58...Rxe5', text: '59.Qxe5 Nxh4+ 60.Kg3 Qg1+ ile Beyaz kazanır (Motor: +6.7).' },
        { move: '58...Rf7', text: '59.Be8 Qc7 60.h5 g6 ile Beyaz kazanır (+8.2).' },
      ],
    },
    '59w': {
      text: 'Kale b3’ten üçüncü yatayda f3’e ve h3’e geçmeye hazır.',
      amac: 'Kaleyi aktifleştirip şah saldırısına katmak.',
      neden: 'Motor 59.d6’yı biraz daha iyi buluyor (+5.8). 59.Rb3 de kazanır (+5.6). Beyazın fazla taşı ve d-e piyonları belirleyici; Caruana terk etti.',
      diger: [
        { move: '59.d6', text: '59...Rg7 60.d7 Ne3+ 61.Qxe3 ile Beyaz kazanır (Motor: +5.8).' },
        { move: '59.Bb5', text: '59...Ne3+ 60.Kh3 Nf5 61.Bd3 ile benzer (+5.0).' },
      ],
    },
  },
  exercises: [
    { id: 'dca-1', kind: 'tekrar', plan: true, title: 'Merkez ve filin yolu',
      source: 'Ding Liren – Caruana, Yekaterinburg 2020 (13. hamle)',
      fen: 'rn1q1rk1/pp3ppp/5n2/2pPN3/Pb6/1bN2P2/1P1QPKPP/R1B2B1R w - - 1 13',
      prompt: 'Beyaz bir piyon önde ama f1 fili henüz çıkmadı ve Siyahın fili b3’te. Şah f2’de. Beyaz merkezi nasıl sağlamlaştırır?',
      hint: 'Bir merkez piyonu hem d5’i destekleyebilir hem de f1 filine yol açabilir.',
      line: ['e4'],
      explanation: '**13.e4!** d5 piyonunu destekler ve f1 filinin c4’e yolunu açar; Bc4 ile b3’teki fil değişilebilir. Motor: e4 +0.9, sonraki en iyi hamle 13.Qd3 −0.1 (13...c4 ile Siyah hatları açar).',
      link: '7.f3 ile hazırlanan e4 ilerleyişi oyunun ana fikridir.' },
    { id: 'dca-2', kind: 'tekrar', plan: false, title: 'Açarak şah',
      source: 'Ding Liren – Caruana, Yekaterinburg 2020 (56. hamle)',
      fen: '1R6/4r1pk/2Bn3p/3P4/P3Pq1P/8/2Q2N2/5K2 w - - 5 56',
      prompt: 'Beyazın veziri c2’de, Siyahın şahı h7’de. Aradaki çaprazda Beyazın e4 piyonu duruyor. Siyahın atı d6’da.',
      hint: 'Piyon ilerlerse hem bir hat açılır hem de bir taşa saldırılır.',
      line: ['e5+'],
      explanation: '**56.e5+!** c2 vezirinin çaprazı açılır ve h7’ye şah çekilir; piyon aynı anda d6 atına saldırır. 56...Nf5 zorunlu, sonra d-piyonu ilerler. Motor: e5+ +6.8, sonraki en iyi hamle 56.Rd8 +5.3.',
      link: 'Ding’in merkez piyonları oyun boyunca alan kazandırdı; burada e-piyonu bir hamleyle hem hat açıyor hem saldırıyor.' },
    { id: 'dca-3', kind: 'transfer', plan: false, title: 'e4 ile merkez ve c4',
      source: 'Taimanov – Simic, Vrnjacka Banja 1974 (15. hamle)',
      fen: 'r3k2r/pp3p2/n6p/2PpNbp1/Pbp5/5P2/1P2PBPP/2KR1B1R w kq - 2 15',
      prompt: 'Aynı Slav kolundan bir oyun sonu: Beyazın atı e5’te, f3 piyonu yerinde, c4 piyonu hâlâ Siyahta. Beyaz merkezi nasıl açar?',
      hint: 'f3’ün hazırladığı ilerleyiş hem d5’e saldırır hem f1 filini çıkarır.',
      line: ['e4'],
      explanation: '**15.e4!** d5 piyonuna saldırır ve f1 filinin yolunu açar; 15...dxe4 16.Nxc4 sonrası at d6’ya girer ve c4 geri alınır. Motor: e4 +1.7, sonraki en iyi hamle 15.c6 +0.2. Taimanov 16.Bxc4 ile aldı; motor 16.Nxc4’ü daha güçlü buluyor.',
      link: 'Ding de f3’ün hazırladığı e4 ilerleyişiyle merkezi ele aldı ve f1 filine yol açtı.' },
    { id: 'dca-4', kind: 'transfer', plan: false, title: 'Merkez piyonu tempoyla',
      source: 'Giri – P.H. Nielsen, Remco Heite turnuvası 2010 (55. hamle)',
      fen: '8/3R2pk/3B4/3pP1K1/1r6/1p4P1/5P2/8 w - - 1 55',
      prompt: 'Siyahın b-piyonu vezire yaklaşıyor. Beyazın kalesi yedinci yatayda, fili d6’da ve e5’te bir piyonu var.',
      hint: 'Kendi piyonunuz Siyahınkinden daha hızlı olabilir; fil e7 karesini destekliyor.',
      line: ['e6', 'b2', 'e7'],
      accept: { 2: ['Be5'] },
      explanation: '**55.e6! b2 56.e7** ve piyon e8’e çıkmakla tehdit eder; Siyahın kalesi onu durdurmaya koşmak zorunda. Motor: e6 +5.9, sonraki en iyi hamle 55.Bxb4 +1.5. 56.Be5 de kazanır (+7.7, e7 +7.4).',
      link: 'Ding 56.e5+ ile merkez piyonunu tempoyla ilerletti; Giri de e-piyonunu rakibin karşı oyunundan hızlı koşturdu.' },
  ],
};
