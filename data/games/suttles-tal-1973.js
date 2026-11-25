// Suttles – Tal, Hastings turnuvası 1973/74 (9. tur), Hastings 1973. Kaynak: PgnMentor (Tal.pgn).
export default {
  id: 'suttles-tal-1973',
  theme: '...d4 ile alan kazanmak ve fil çiftiyle oyun sonu',
  white: 'Duncan Suttles', black: 'Mihail Tal',
  whiteShort: 'Suttles', blackShort: 'Tal',
  event: 'Hastings turnuvası 1973/74, 9. tur', site: 'Hastings', year: 1973, eco: 'B23',
  variation: 'Sicilya Savunması, Kapalı sistem, 2.Nc3 e6 3.g3 d5 4.exd5',
  result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. exd5 exd5 5. Bg2 Nf6 6. d4 cxd4 7. Qxd4 Nc6 8. Qd1 d4 9. Nce2 Bc5 10. Nf3 Bf5 11. O-O O-O 12. Nf4 Re8 13. Nd3 Bb6 14. Bg5 h6 15. Bxf6 Qxf6 16. Nd2 Qg6 17. Nc4 Bc7 18. a4 Bg4 19. Bf3 Bh3 20. Re1 Qf5 21. Bh1 Re6 22. Qf3 Rae8 23. Qxf5 Bxf5 24. Bxc6 bxc6 25. Rxe6 Bxe6 26. Re1 Kf8 27. Nc5 Bf5 28. Rxe8+ Kxe8 29. Nd3 Kd7 30. Kf1 Ke6 31. Ke2 Kd5 32. b3 c5 33. f3 Bc8 34. Nd2 f5 35. f4 Ba6 36. Nf3 Bd6 37. Nh4 Bc8 38. Nf3 c4 39. Nb2 cxb3 40. cxb3 Ba6+ 41. Nd3 Ke4 42. Nd2+ Kd5 43. Nf3 Be7 44. h4 g6 45. Ne5 g5 46. hxg5 hxg5 47. fxg5 Bxg5 48. b4 Bxd3+ 49. Nxd3 Be7 50. b5 Bd6 51. a5 Bxg3 52. Nb4+ Kc5 53. Nc6 a6 54. Kd3 Bf2 55. Na7 axb5 56. a6 b4 57. Nb5 Kb6 58. a7 Kb7 59. Nd6+ Kxa7 60. Nxf5 b3 61. Nd6 Kb6 62. Nc4+ Kb5 0-1`,

  summary: 'Hastings 1973/74’te Tal, Kanada’nın hipermodern ustası Duncan Suttles’a karşı Kapalı Sicilya’nın 2...e6 3.g3 d5 kuruluşunu seçti. Beyaz 4.exd5 exd5 5.Bg2 ile d5 piyonunu hedef aldı, sonra 6.d4 ile merkezi açtı; ama Tal 7...Nc6 ile vezire tempo kazanıp **8...d4!** ile c3 atını e2’ye geri gönderdi ve d-piyonunu zayıflık olmaktan çıkarıp Beyazı sıkıştıran bir mevzi piyonuna çevirdi. Fillerini c5 ve f5’e koydu, 19...Bh3 ile g2 filini h1 köşesine itti. Vezirler ve kaleler değişince Siyahın **fil çifti, merkezde güçlü şahı (Kd5) ve d4 piyonu** kaldı. Tal 48...Bxd3+ ile fil çiftini doğru anda ata verdi; fil–at oyun sonunda Suttles uzun süre doğru savundu, ama 57.Nb5? (doğrusu 57.Nc8, Motor: −0.1) ile a-piyonunu kaybetti. Tal 58...Kb7! ve 59...Kxa7 ile piyonu yakaladı, 60...b3! ile b-piyonunu koşturdu; 62. hamlede Suttles terk etti.',
  intro: 'Turnuva: 49. Hastings Premier (27 Aralık 1973 – 13 Ocak 1974), 16 oyunculu, 15 turluk bir lig. Tal turnuvayı Kuzmin, Szabo ve Timman ile birlikte 10/15 ile **paylaşılan birincilikle** ve hiç yenilmeden (5 galibiyet, 10 beraberlik) bitirdi; bu oyun o beş galibiyetten biridir. Suttles 6½ puanla 11. oldu. Suttles, Nimzowitsch’ten etkilenen, filleri kanatlara koyan, Robert Byrne’ün deyişiyle “tuhaf (outlandish) bir hipermodernizm” diye anılan bir üslubun sahibiydi; Beyazla sık sık 1.e4 ve Kapalı Sicilya oynardı. Açılış: 1.e4 c5 2.Nc3 e6 3.g3 d5, kaynaklarda **Korçnoy varyantı** (B23) diye geçer. Bu modülün ana hattı 4.Bg2’dir, ama veritabanlarında en çok oynanan devam 4.exd5’tir (365chess’te yaklaşık 1100 oyun, 4.Bg2’de 430). Bu oyunda hamle sırası **4.exd5 exd5 5.Bg2** oldu: Beyaz önce merkezde değişti, sonra fili g2’ye getirdi. Böylece 4.Bg2 hattındaki gerginlik yerine Siyahın d5’te tek bir piyonu olan açık bir yapı çıktı. Fikirler yine aynıdır: Beyazın g2 fili d5’e bakar, Siyah ise **...d4** ile c3 atını kovar ve fillerini c5 ile f5’e getirir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'g3-Bg2 ile uzun çaprazdan d5 piyonuna baskı kurmak; 4.exd5 ile Siyahı d5’te tek kalan bir piyonla bırakmak.',
      'd4 ile merkezi açıp d5’i tecrit etmek (6.d4 cxd4 7.Qxd4). Motor burada daha sakin 6.d3’ü tercih ediyor; 6.d4 Siyahın gelişmesini hızlandırdı.',
      '...d4 itilince atları abluka karelerine getirmek: Nf4–d3 ve Nd2–c4. d3’teki at hem d4 piyonunu durdurur hem de c5 ve f4 karelerine bakar.',
      'Siyahın aktif fillerini kovalamak ve değişmek: 15.Bxf6 ile d4’ün bir savunucusunu almak, 24.Bxc6 ile pasif h1 filini c6 atına vermek.',
      'Oyun sonunda atlarla d4 piyonunu ablukada tutmak, şahı e2–d3 üzerinden merkeze getirmek ve vezir kanadındaki çoğunluğu (a- ve b-piyonları) koşturup karşı oyun yaratmak.',
      'Fil–at oyun sonunda geçer a-piyonunu, Siyahın b-piyonunu yok etmek için bir “yem” olarak kullanmak (57.Nc8! fikri); maçta bunu kaçırınca oyun kaybedildi.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '3...d5 ile merkeze hemen vurmak; 6.d4 cxd4 7.Qxd4 sonrası **7...Nc6** ile vezire tempo kazanarak gelişmek.',
      '**8...d4!** ile c3 atını kovalamak: at e2’ye geri gider, Beyazın gelişmesi gecikir, Siyahın d-piyonu zayıf bir tecrit piyonu olmaktan çıkıp alan kazandıran bir öncü olur.',
      'Filleri en aktif çaprazlara koymak: ...Bc5 (sonra ...Bb6–c7) d4’ü destekler ve f2’ye bakar; ...Bf5 d3 ve c2 karelerini tutar.',
      '...Bg4 ve ...Bh3 ile Beyazın g2 filini rahatsız etmek; Beyaz filini değişmek istemeyince 21.Bh1 ile köşeye çekilmek zorunda kaldı.',
      'Ağır taşları e-hattında ikileyip (21...Re6, 22...Rae8) hattı ele geçirmek; değişimlerden sonra fil çiftiyle bir oyun sonuna geçmek.',
      'Oyun sonunda şahı merkeze getirmek (Kd7–e6–d5), ...c5–c4 ile vezir kanadında hat açmak, ...f5 ve ...g5 ile şah kanadında piyon değişip geçer piyon yaratmak.',
      'Doğru anda fil çiftinden vazgeçmek (48...Bxd3+): kalan kara kareli fil d4 piyonunu korur, şah ve geçer piyonlar Beyazın atına karşı ağır basar.',
    ] },
  },
  critical: [
    { move: '8b', title: '8...d4! Alan kazanmak ve atı kovmak', text: 'Tal 8...d4 ile c3 atına saldırır. Bu hamleyle yapının anlamı değişir: d5’teki tecrit piyonu artık g2 filinin hedefi değildir, d4’te Beyazın c3, e3 ve atlarının doğal karelerini kapatan bir mevzi piyonudur. At e2’ye geri dönmek zorundadır; 9.Nce2 tek iyi hamledir, 9.Ne4? Nxe4 10.Bxe4 Bb4+ ya da 9.Nb1? sonrası Siyahın üstünlüğü −1.4 civarına çıkar. Motor bu noktada Siyahı hafif önde görür (−0.4).' },
    { move: '19b', title: '19...Bh3: g2 filini köşeye itmek', text: 'Fil h3’e gelir ve f1 kalesine saldırır. Beyazın üç yolu vardı: kaleyi çekmek, filini g2’ye geri getirip değişime razı olmak ya da başka bir kare bulmak. Suttles 20.Re1 ve 21.Bh1 ile fili korudu, ama fil h1’de kendi d4 ablukasına hiç katkı vermeyen pasif bir taş oldu. Motor 19...Bf5’i biraz daha doğru bulsa da (−0.04’e karşı +0.07) hamle Tal’ın psikolojik baskısını gösterir: Beyaz ya fil değişimine razı olacak ya da filini gömecekti.' },
    { move: '24w', title: '24.Bxc6: fil çiftini rakibe vermek', text: 'Suttles h1’deki pasif fili c6 atıyla değişti. Siyahın c-piyonları ikilendi, ama Siyah **fil çiftini** aldı ve c6–c5 piyonları ileride d4’ü destekleyecekti. Motor 24.Rxe6 Rxe6 25.Kf1 ile sakin devamı tam eşit buluyor (0.00); maç hamlesi −0.4 civarındadır. Asıl önemli nokta şu: bu değişimden sonra oyunun karakteri “iki at mı iki fil mi” sorusuna döndü ve açık oyun sonlarında bu soru genellikle fillerin lehine cevaplanır.' },
    { move: '38b', title: '38...c4: vezir kanadında ikinci cephe', text: 'Beyaz atlarını d3 ve f3’te tutarak d4’ü ablukaya almıştı. Tal 38...c4 ile ikinci bir cephe açtı: 39.bxc4+? Kxc4 şaha c3 ve b3 karelerini açardı (−1.4). 39.Nb2 cxb3 40.cxb3 Ba6+ sonrası Beyazın b3 piyonu tecrit kaldı, Siyahın fili a6–f1 çaprazında Beyaz şahını rahatsız etmeye başladı. Motor: 38...c4 −1.2, oyunun en iyi Siyah hamlelerinden biri.' },
    { move: '48b', title: '48...Bxd3+: fil çiftini doğru anda vermek', text: 'Tal fil çiftinden vazgeçip d3 atını aldı. Bu at d4’ün abluka taşıydı ve aynı zamanda b4 ve f4 karelerini kontrol ediyordu. 49.Nxd3 zorunludur (49.Kxd3?? Kxe5 ile Siyah bir taş kazanır, −6.7). Kalan oyun sonunda Siyahın kara kareli fili d4’ü korur ve g3’e saldırır; şah d5’te merkezdedir. Motor bu hamleyi açık farkla en iyi buluyor (−1.2; 48...Bf6 sonrası yalnızca −0.25).' },
    { move: '49b', title: '49...Be7?! Üstünlük azalıyor', text: 'Motor 49...Bd8! hamlesini öneriyordu (−1.0): fil d8’den a5 ve b6 karelerini kontrol eder, Beyazın b5 ve a5 ilerleyişlerini yavaşlatır, sonra ...Bc7xg3 gelir. 49...Be7 50.b5 Bd6 51.a5 sonrası Beyazın vezir kanadı piyonları hızla ilerledi ve değerlendirme −0.1/−0.2’ye düştü. Oyun yeniden kazanma–beraberlik sınırına geldi.' },
    { move: '57w', title: '57.Nb5? Belirleyici hata', text: 'Bu konumda Beyazın kurtuluş yolu **57.Nc8!** idi: 57...Kc6 58.Ne7+ Kb6 59.Nd5+ Kxa6 60.Nxb4+ ile at b4 piyonunu yer; Siyahın elinde d4 ve f5 kalır ama at ve şah bunlara karşı direnebilir (Motor: −0.1). Maçta 57.Nb5? a-piyonunu korudu, ama 57...Kb6 58.a7 Kb7! ile Siyah şahı vezirleme karesini tuttu ve piyonu toplayacaktı; b4 piyonu ise yaşamaya devam etti (Motor: −3.9).' },
    { move: '60b', title: '60...b3! Piyonlar birbirini koruyor', text: 'Beyazın atı f5 piyonunu aldı, ama Tal’ın b-piyonu koşmaya başladı. d4 piyonu c3’ü, b3 piyonu c2’yi tutar; Beyaz şahı piyonun önüne geçemez. At da yetişemez: 61.Nd6 Kb6! 62.Nc4+ Kb5 sonrası at kovulur. Motor: 60...b3 kesin kazanç (−11.9), 60...Kb6 ise yalnızca −4.8.' },
  ],
  lessons: [
    '3.g3 d5 4.exd5 exd5 yapısında Siyahın ana fikri çoğu zaman **...d4** ile c3 atını kovmak ve tecrit piyonunu bir alan avantajına çevirmektir; d4’teki piyon Beyaz taşlarının doğal karelerini (c3, e3) elinden alır.',
    'Beyaz merkezi erken açarsa (6.d4 cxd4 7.Qxd4) Siyah ...Nc6 ile vezire tempo kazanarak gelişir; açık konumlarda gelişme farkı, vezirin erken çıkışından daha önemlidir.',
    'İlerlemiş bir merkez piyonunun en iyi bekçisi attır: Suttles atlarını d3 ve c4/f3’e yerleştirerek d4’ü uzun süre durdurdu. Ablukayı kuran taşı değişmek (48...Bxd3+) çoğu zaman piyonu yeniden canlandırır.',
    'Fianchetto filini ...Bh3 ile rahatsız etmek, rakibi ya fil değişimine ya da pasif bir geri çekilişe (21.Bh1) zorlar; köşeye gömülen fil sonradan genellikle bir ata değişilmek zorunda kalır.',
    'Fil çifti açık oyun sonlarında avantajdır, ama amaç fil çiftini sonsuza dek korumak değil, doğru anda bir fili verip geçer piyonları ve şahı öne çıkarmaktır.',
    'Geçer piyon karşı geçer piyon yarışında saymak gerekir: 57.Nc8! ile kendi a-piyonunu feda edip rakibin b-piyonunu yok etmek beraberlik getirirdi; a-piyonunu korumaya çalışmak (57.Nb5?) kaybettirdi.',
    'Birbirini koruyan geçer piyonlar (d4 ve b3) rakip şahın girmesi gereken kareleri (c3, c2) keser; böyle bir ikili tek bir atla durdurulamaz.',
  ],
  qa: [
    { q: 'Kazanan kimdi ve oyunu nasıl kazandı?', a: 'Sonuç 0-1: Mihail Tal kazandı. Tal açılışta 8...d4! ile alan aldı, orta oyunda fillerini aktif tuttu ve e-hattında ağır taşları değiştirerek fil çiftiyle bir oyun sonuna geçti. Oyun sonunda şahını d5’e getirdi, ...c4 ve ...g5 ile iki kanatta hat açtı, 48...Bxd3+ ile abluka atını aldı. Suttles 57.Nb5? ile hata yapınca Tal 58...Kb7! ile a-piyonunu yakaladı ve 60...b3! ile b-piyonunu durdurulamaz hale getirdi.' },
    { q: 'Beyaz neden 4.Bg2 değil de 4.exd5 oynadı?', a: '4.Bg2’den sonra Siyah 4...d4! ile atı hemen kovalayabilir (4.Bg2 d4 5.Nce2), ya da 4...dxe4 ile merkezi değişebilir. 4.exd5 exd5 ise Siyaha tecrit d-piyonu verir ve Beyazın g2 fili hedefe doğrudan bakar. Motor 4.exd5’i en iyi hamle olarak görüyor (+0.2), 4.Bg2 biraz daha pasif (−0.1). 365chess veritabanında da 4.exd5 açık farkla en sık oynanan devamdır.' },
    { q: '6.d4 iyi bir hamle miydi?', a: 'Tam bir hata değil, ama Beyazın avantajını eritti. 6.d4 cxd4 7.Qxd4 Nc6 sonrası vezir tempo kaybeder, 8.Qd1 d4 9.Nce2 ile at da geri gider; Beyaz gelişmede geride kalır (Motor: −0.4/−0.5). Motorun tercihi 6.d3’tür (−0.2): Beyaz d4 karesini kendi piyonuyla açmaz, Siyahın tecrit piyonu uzun vadeli hedef olarak kalır.' },
    { q: 'Tal neden 7...Nc6 ile veziri kovaladı, 7...Be6 değil?', a: '7...Nc6 hem gelişir hem tempo kazanır hem de 8...d4 itişini hazırlar; motor bunu açık farkla en iyi buluyor (−0.3). 7...Be6 (+0.6) ya da 7...Qa5 (+0.5) sonrası Beyazın vezir d4’te merkezde rahat kalır ve d5 piyonuna baskı sürer. Açık konumda tempo kazanarak gelişmek Siyahın tüm kuruluşunun temelidir.' },
    { q: 'Beyaz neden 24.Bxc6 ile fil çiftini verdi?', a: 'h1’deki fil 21.Bh1’den beri pasifti ve c6 atı d4’ü destekliyordu. Suttles bu atı alarak Siyahın c-piyonlarını ikiledi ve pasif taşından kurtuldu. Fakat Siyah fil çiftini aldı ve ikili c-piyonu sonradan ...c5–c4 ile değerli bir koç piyonu oldu. Motor 24.Rxe6 ile filini tutmayı biraz daha iyi buluyor (0.00’a karşı −0.4).' },
    { q: 'Oyun sonunda Siyahın üstünlüğü nereden geliyordu?', a: 'Üç kaynaktan: merkezde Kd5’teki aktif şah, d4’teki ilerlemiş piyon ve iki fil. Beyazın atları d4’ü durdurmak için sürekli d3, f3 ve d2 karelerine bağlıydı, bu yüzden aktif plan yapamıyordu. Motor 30. hamleden sonra Siyahı sürekli −0.7 ile −1.2 arasında önde görüyor; bu kazanç değil, ama Beyazın uzun süre dikkatli savunma yapmasını gerektiren kalıcı bir baskıdır.' },
    { q: 'Tal 48...Bxd3+ ile neden fil çiftinden vazgeçti?', a: 'd3’teki at d4’ü ablukaya alan ve b4, f4, e5 karelerine bakan en iyi Beyaz taşıydı. Onu almakla Tal ablukayı kırdı ve kara kareli filiyle Beyazın g3 piyonuna saldırma imkânı buldu. Motor bu kararı doğruluyor: 48...Bxd3+ −1.2, fil çiftini koruyan 48...Bf6 ise yalnızca −0.25.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'En açık an 57. hamledir: **57.Nc8!** Kc6 58.Ne7+ Kb6 59.Nd5+ Kxa6 60.Nxb4+ ile at Siyahın b-piyonunu yer ve oyun beraberliğe yakındır (Motor: −0.1). Daha önce de 47.Kd2 (−0.1) gibi daha sağlam hamleler vardı. Maçta 57.Nb5? oynanınca a-piyonu a7’de yakalandı, b-piyonu ise yaşamaya devam etti (−3.9).' },
    { q: '58...Kxb5 neden olmazdı?', a: '58...Kxb5?? 59.a8=Q ile Beyaz vezir çıkarır ve kazanır (Motor: +4.5 civarı). Siyah şahı a8 karesini kontrol etmelidir; bu yüzden **58...Kb7!** tek hamledir. Ardından 59.Nd6+ Kxa7 ile piyon düşer, b4 piyonu ise hâlâ yaşar.' },
    { q: 'Siyah nerede daha hızlı kazanabilirdi?', a: '49. hamlede 49...Bd8! (−1.0) vezir kanadındaki Beyaz piyonlarını yavaşlatırdı; maçtaki 49...Be7 50.b5 Bd6 51.a5 sonrası Beyaz karşı oyun buldu ve değerlendirme −0.1’e indi. Ayrıca 44. hamlede 44...Ke4 (−0.9) şahı daha da aktifleştirirdi. Yine de Tal’ın planı doğruydu ve Beyazın tek hatası oyunu bitirmeye yetti.' },
  ],
  sources: [
    { title: 'BritBase: 49th Hastings Premier 1973/74 (oyunlar ve puan tablosu)', url: 'https://www.saund.co.uk/britbase/pgn/197312hast-viewer.html' },
    { title: 'OlimpBase: Hastings 1973/74 sonuçları', url: 'https://www.olimpbase.org/ind-it/hastings-1973.html' },
    { title: 'Wikipedia: Duncan Suttles', url: 'https://en.wikipedia.org/wiki/Duncan_Suttles' },
    { title: '365chess: B23 Sicilian, closed, Korchnoi variation (1.e4 c5 2.Nc3 e6 3.g3 d5)', url: 'https://www.365chess.com/eco/B23_Sicilian_closed_Korchnoi_variation' },
    { title: 'Chess.com blog: Mastering the Korchnoi Defense against the Closed Sicilian', url: 'https://www.chess.com/blog/Mr_Perry/mr-perry-s-theorytalk-mastering-the-korchnoi-defense-against-the-closed-sicilian' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Beyaz şah piyonuyla açar, merkezde e4 ve d5 karelerini tutar, fil ve veziri için yol açar.',
      amac: 'Suttles Beyazla genellikle 1.e4 oynar ve Sicilya’ya karşı ana hat yerine Kapalı Sicilya’ya yönelirdi.',
      neden: 'En doğal ve en sık oynanan ilk hamledir. Motor da onu en iyi buluyor (+0.4).',
      diger: [
        { move: '1.g3', text: 'Suttles 1970’lerin başında 1.g3 ile ters bir Modern Savunma da oynuyordu; daha yavaş, hipermodern bir yol (Motor: yaklaşık +0.2).' },
        { move: '1.d4', text: 'Vezir piyonu açılışı; Tal’ın Sicilya’sını tamamen önler (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini yandan kontrol eder.',
      amac: 'Asimetrik bir yapı yaratmak ve kazanmak için oynamak; Tal’ın en sevdiği silahlardan biriydi.',
      neden: '1...e5 daha simetrik ve sakin oyunlara gider; turnuvada kazanmak isteyen Tal karşı şans arıyordu.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; motor eşit görüyor (+0.2), ama Beyaza simetrik ve güvenli bir oyun verir.' },
        { move: '1...e6', text: 'Fransız Savunması; Siyah ...d5’i hemen hazırlar (+0.35).' },
      ],
    },
    '2w': {
      text: '2.Nc3: Kapalı Sicilya’nın ilk adımı. Beyaz Nf3 ve d4 ile Açık Sicilya’ya girmeyecek.',
      amac: 'Ana hatların derin teorisinden kaçmak ve g3–Bg2 ile yavaş, manevralı bir oyun kurmak.',
      neden: 'Suttles’ın repertuvarında Kapalı Sicilya vardı. 2.Nc3 ayrıca d5 karesini kontrol eder, bu da Siyahın ...d5 itişini zorlaştırır.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya hazırlık; motorun ilk tercihi (+0.5). Tal’ın derin hazırlığıyla karşılaşma riski taşır.' },
        { move: '2.c3', text: 'Alapin; Beyaz d4 ile tam merkez kurmak ister (+0.3).' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah ...d5’i hazırlar ve f8 filine e7–c5 çaprazını açar.',
      amac: 'Beyaz g3 ile yavaş bir kuruluş yapmadan önce merkeze ...d5 ile vurmak.',
      neden: 'Kapalı Sicilya’da Beyazın g2 fili kurulmadan ...d5 oynamak Siyaha rahat bir oyun verir. 2...Nc6 ya da 2...d6 daha klasik yollardır, ama ...e6–d5 fikri Beyazın planını doğrudan sorgular.',
      diger: [
        { move: '2...Nc6', text: 'Klasik Kapalı Sicilya: 3.g3 g6 4.Bg2 Bg7 5.d3 (Motor: +0.4).' },
        { move: '2...d6', text: 'Esnek bir hamle; ...e5 ya da ...Nf6 ile devam edebilir (+0.35).' },
      ],
    },
    '3w': {
      text: '3.g3: Beyaz şah filini g2’ye getirmeye hazırlanır.',
      amac: 'Uzun çaprazdan d5 ve b7 karelerine baskı kurmak; Kapalı Sicilya’nın klasik kuruluşu.',
      neden: 'Suttles’ın fianchetto sevgisine uygun bir hamledir. Ancak 2...e6’dan sonra g3 biraz yavaştır, çünkü Siyah ...d5 ile hemen merkezi açabilir; motor 3.Nf3 ile Açık Sicilya’ya dönmeyi tercih ediyor.',
      diger: [
        { move: '3.Nf3', text: 'Motorun ilk tercihi (+0.5): 3...a6 4.d4 cxd4 5.Nxd4 ile Açık Sicilya’nın Paulsen/Taimanov yapılarına girer.' },
        { move: '3.Nge2', text: 'Bukalemun (Chameleon) fikri: Beyaz d4 ya da g3 arasında seçimi sonraya bırakır (+0.3).' },
      ],
    },
    '3b': {
      text: '3...d5: Korçnoy varyantı. Siyah merkezi hemen açar ve e4’e saldırır.',
      amac: 'Beyazın fili g2’ye gelmeden önce merkezde eşitliği sağlamak ve Beyazı bir karar vermeye zorlamak.',
      neden: 'Fil g2’ye yerleştikten sonra ...d5 çok daha zor olur; bu an Siyah için en uygun andır. Motor 3...d5’i 3...Nc6 ile birlikte en iyi hamleler arasında görüyor (yaklaşık +0.1).',
      diger: [
        { move: '3...Nc6', text: '4.Bg2 sonrası ...d5 artık zordur ve oyun genellikle ...d6 ile klasik yapıya döner (+0.05).' },
        { move: '3...Nf6', text: '4.e5 Nd5 ile at merkeze gelir, ama Beyaz alan kazanır (+0.2).' },
      ],
    },
    '4w': {
      text: '4.exd5: Beyaz merkezde değişir ve fili bir hamle sonra g2’ye getirmeyi planlar.',
      amac: 'Siyaha d5’te tek kalacak bir piyon bırakmak ve bu piyonu g2 fili ile hedef almak.',
      neden: 'Bu hamle sırası 4.Bg2 d4! 5.Nce2 gibi Siyahın erken alan kazandığı hatları önler. Motor 4.exd5’i en iyi buluyor (+0.2); 365chess veritabanında da bu konumda açık farkla en çok oynanan hamledir. Chess.com’daki bir Korçnoy varyantı teori yazısı da 4.exd5’i Beyazın en doğru hamlesi sayıyor.',
      diger: [
        { move: '4.Bg2', text: 'Modülün ana hattı: 4...d4 5.Nce2 ile Siyah alan kazanır ya da 4...dxe4 5.Nxe4 ile merkez açılır (Motor: −0.1).' },
        { move: '4.d3', text: 'Merkezi koruyan sakin bir hamle; 4...d4 5.Nce2 e5 ile Siyah Kral Hint tersine benzeyen bir yapı kurar (−0.1).' },
      ],
    },
    '4b': {
      text: '4...exd5: Siyah piyonla geri alır; d5’te tek bir piyon kalır.',
      amac: 'Malzemeyi geri almak ve e-hattını açarak taşlarına aktiflik kazandırmak.',
      neden: 'Bu neredeyse zorunludur: 4...Nf6? 5.Bb5+ Bd7 6.dxe6 fxe6 ile Siyahın yapısı bozulur (+1.25), 4...Be7? de bir piyon kaybettirir (+1.3).',
      diger: [
        { move: '4...Nf6', text: '5.Bb5+ Bd7 6.dxe6 fxe6 sonrası Siyahın e6 piyonu zayıf kalır (Motor: +1.25).' },
      ],
    },
    '5w': {
      text: '5.Bg2: Fil uzun çapraza gelir ve d5 piyonuna baskı yapar.',
      amac: 'd5’i baskı altına almak, sonra kısa rok ile şahı güvenceye almak.',
      neden: 'Planın mantıklı devamı; ama motor 5.d4 ya da 5.Nf3 ile önce merkezi düzenlemeyi biraz daha iyi buluyor (0.00’a karşı −0.2). Fil g2’de güçlüdür, ancak Siyah ...d4 ile çaprazı kapatabilir.',
      diger: [
        { move: '5.d4', text: '5...cxd4 6.Qxd4 Nf6 7.Bg5 ile Beyaz hızla gelişir (Motor: 0.00); Fransız Tarrasch’a benzeyen tecrit piyonlu yapılar.' },
        { move: '5.Nf3', text: '5...Nc6 6.Bg2 ile esnek kuruluş; 5...d4 6.Qe2+ fikriyle (0.00).' },
      ],
    },
    '5b': {
      text: '5...Nf6: At gelişir, d5’i korur ve e4 karesine bakar.',
      amac: 'Hızla gelişip rok yapmak; d5’i taşlarla desteklemek.',
      neden: 'd5’in en doğal savunucusudur. 5...d4 da mümkündü (6.Qe2+ Be7 7.Nd5), ama Tal önce gelişmeyi tercih etti; motor 5...Nf6’yı en iyi buluyor (−0.2).',
      diger: [
        { move: '5...d4', text: '6.Qe2+ Be7 7.Nd5 Nc6 ile karmaşık bir oyun (Motor: 0.00).' },
        { move: '5...Ne7', text: 'At f5’e gidip d4’e baskı yapabilir, ama d5’i f6’dan korumak daha doğaldır (+0.4).' },
      ],
    },
    '6w': {
      text: '6.d4: Beyaz merkezi açar ve c5 piyonuna saldırır.',
      amac: 'Siyahın c-piyonunu değiştirip d5’i tamamen tecrit etmek; d4 karesini taşları için kullanmak.',
      neden: 'Fikir açık, ama zamanlama sorunlu: 6...cxd4 7.Qxd4 Nc6 ile vezir tempo kaybeder. Motor sakin 6.d3’ü tercih ediyor (−0.2’ye karşı −0.45); 6.d3 d4 7.Ne4 ile at merkezde kalırdı.',
      diger: [
        { move: '6.d3', text: '6...d4 7.Ne4 Nxe4 8.Bxe4 ile Beyaz sağlam ve dengeli bir oyun alır (Motor: −0.2).' },
        { move: '6.Nf3', text: '6...d4 7.Nb1 ya da 7.Nb5 ile at kenara gider (−0.25).' },
        { move: '6.Nge2', text: '6...d4 7.Ne4 Nxe4 8.Bxe4 (−0.3).' },
      ],
    },
    '6b': {
      text: '6...cxd4: Siyah değişir; Beyaz vezirle geri alacak.',
      amac: 'Beyaz veziri merkeze çekip ...Nc6 ile ona saldırarak tempo kazanmak.',
      neden: 'Diğer hamleler Siyahı zor duruma sokardı: 6...Nc6 7.Be3 Qb6 8.dxc5 (+0.1) ya da 6...Bg4 (+0.5). Değişim hem d4 karesini açar hem de Siyahın gelişme avantajını büyütür (Motor: −0.5).',
      diger: [
        { move: '6...Nc6', text: '7.Be3 Qb6 8.dxc5 Bxc5 ile Siyah tecrit piyonlu bir yapıda kalır (Motor: +0.1).' },
      ],
    },
    '7w': {
      text: '7.Qxd4: Vezir piyonu geri alır ve merkeze yerleşir.',
      amac: 'Malzemeyi geri almak ve vezirle d5 piyonuna baskı yapmak.',
      neden: 'Mantıklı tek geri alış. 7.Nce2 Bb4+ fikriyle de oynanabilirdi, ama 7.Qe2+? Be7 8.Nb5 O-O Siyaha belirgin üstünlük verir (−1.2).',
      diger: [
        { move: '7.Nce2', text: '7...Bb4+ 8.Bd2 Bc5 ile Siyah piyonu bir süre tutar, Beyaz geri alacak (Motor: −0.5).' },
        { move: '7.Qe2+', text: '7...Be7 8.Nb5 O-O 9.Nxd4 ile Siyah gelişmede çok önde (−1.2).' },
      ],
    },
    '7b': {
      text: '7...Nc6!: At gelişir ve d4’teki vezire saldırır.',
      amac: 'Tempo kazanarak gelişmek ve 8...d4 itişini hazırlamak.',
      neden: 'Merkezdeki vezir, hafif taşların hedefidir. Motor 7...Nc6’yı açık farkla en iyi buluyor (−0.3); 7...Be6 (+0.65) ve 7...Qa5 (+0.5) Beyazın vezirini merkezde bırakır.',
      diger: [
        { move: '7...Be6', text: '8.Nge2 Nc6 9.Qa4 ile Beyaz vezirini rahatça yerleştirir (Motor: +0.65).' },
        { move: '7...Qa5', text: '8.Ne2 Nc6 9.Qd3 ile vezir değişebilir, Beyaz rahat (+0.5).' },
      ],
    },
    '8w': {
      text: '8.Qd1: Vezir başlangıç karesine döner.',
      amac: 'Veziri güvenli bir yere çekmek ve d-hattında d5’e baskıyı sürdürmek.',
      neden: 'Motor bu hamleyi en iyi buluyor (−0.3). 8.Qa4 de oynanır, ama 8...d4 9.Nce2 d3! gibi fikirlerle Siyah inisiyatif alır (−0.7). 8.Qe3+ Be7 sonrası vezir e-hattında Siyah kalesinin hedefi olur (−0.8).',
      diger: [
        { move: '8.Qa4', text: '8...d4 9.Nce2 d3 10.Nc3 ile Siyahın d3 piyonu Beyazı sıkıştırır (Motor: −0.7).' },
        { move: '8.Qe3+', text: '8...Be7 9.Nge2 O-O 10.Qd2 ile vezir iki tempo daha kaybeder (−0.8).' },
      ],
    },
    '8b': {
      text: '8...d4!: Piyon c3 atına saldırır ve merkezde alan kazandırır.',
      amac: 'c3 atını kenara itmek, g2 filinin çaprazını kapatmak ve tecrit piyonunu güçlü bir mevzi piyonuna çevirmek.',
      neden: 'd5’te duran piyon Beyazın fili ve veziri için hedefti; d4’te ise c3 ve e3 karelerini tutar ve Beyazın gelişmesini zorlaştırır. Motor 8...d4’ü en iyi buluyor (−0.4/−0.5); 8...Bb4 ya da 8...Qb6 de iyi, ama daha az iddialıdır.',
      diger: [
        { move: '8...Bb4', text: '9.Ne2 O-O 10.O-O Bxc3 ile Siyah fil çiftini verir, yapı daha sakindir (Motor: −0.35).' },
        { move: '8...Qb6', text: '9.Nge2 d4 10.Ne4 Nxe4 11.Bxe4 ile at e4’e gelir ve d4 baskı altında kalır (−0.3).' },
      ],
    },
    '9w': {
      text: '9.Nce2: At e2’ye geri çekilir; tek iyi kare.',
      amac: 'd4 piyonuna baskı yapmak ve atı sonradan f4 ya da c3’e göndermek.',
      neden: '9.Ne4? Nxe4 10.Bxe4 Bb4+ 11.Kf1 ile Beyaz rok hakkını kaybeder (−1.4); 9.Nb1? de ...Bf5 ya da ...Bb4+ ile Siyaha büyük gelişme farkı verir (−1.5).',
      diger: [
        { move: '9.Ne4', text: '9...Nxe4 10.Bxe4 Bb4+ 11.Kf1 O-O ile Beyaz şahı merkezde kalır (Motor: −1.4).' },
        { move: '9.Nb1', text: '9...Bf5 10.Ne2 Nb4 ile Siyah c2’ye saldırır (−1.5).' },
      ],
    },
    '9b': {
      text: '9...Bc5: Fil c5’e gelir; d4’ü destekler ve f2’ye bakar.',
      amac: 'd4 piyonunu sağlamlaştırmak ve gelişmeyi tamamlayıp rok yapmak.',
      neden: 'd4 piyonunu korumanın en aktif yolu. 9...Bb4+ 10.c3 dxc3 11.Qxd8+ vezirleri değiştirir ve Siyahın avantajını azaltır; 9...h6 de oynanabilirdi. Motor üç hamleyi de yaklaşık eşit görüyor (−0.35/−0.4).',
      diger: [
        { move: '9...Bb4+', text: '10.c3 dxc3 11.Qxd8+ Kxd8 12.bxc3 ile vezirler gider, Siyahın baskısı azalır (Motor: −0.35).' },
        { move: '9...h6', text: 'Bg5’i önleyen hazırlayıcı bir hamle; 10.Nf3 Bc5 11.O-O O-O (−0.4).' },
      ],
    },
    '10w': {
      text: '10.Nf3: At gelişir ve d4’e baskı yapar.',
      amac: 'Kısa rokunu hazırlamak ve d4 piyonuna ikinci bir saldırgan eklemek.',
      neden: 'Doğal gelişme hamlesi; motorun da ilk tercihi (−0.4). 10.a3 (−0.6) ya da 10.Nh3 (−1.0) gelişmeyi daha da geciktirir.',
      diger: [
        { move: '10.a3', text: '...Bb4+ fikirlerini önler ama gelişmeye katkı vermez (Motor: −0.6).' },
        { move: '10.Nh3', text: 'At f4’e gitmek ister, ama h3’te kenarda kalır (−1.0).' },
      ],
    },
    '10b': {
      text: '10...Bf5: Fil f5’e gelir; c2 ve d3 karelerini tutar.',
      amac: 'Gelişmeyi tamamlamak ve Beyazın Nd3 gibi abluka manevralarını zorlaştırmak.',
      neden: 'Fil f5’te Beyazın vezir kanadına baskı yapar. Motor 10...Qb6 ve 10...O-O’yu da aynı seviyede görüyor (−0.3/−0.4); Tal en aktif kareyi seçti.',
      diger: [
        { move: '10...Qb6', text: '11.O-O O-O 12.a3 a5 ile vezir b2 ve f2’ye bakar (Motor: −0.4).' },
        { move: '10...O-O', text: '11.O-O Re8 12.Bg5 h6 ile esnek gelişme (−0.3).' },
      ],
    },
    '11w': {
      text: '11.O-O: Beyaz kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini oyuna sokmak.',
      neden: 'Merkez yarı açık olduğu için rok gecikmemeli. Motor 11.O-O’yu en iyi buluyor (−0.1); 11.Bg5 ya da 11.Nh4 Be4 sonrası da benzer konumlar çıkar.',
      diger: [
        { move: '11.Nh4', text: '11...Be4 12.O-O Bxg2 13.Nxg2 ile fil değişimi; Beyaz g2 filini kaybeder (Motor: −0.3).' },
        { move: '11.Bg5', text: '11...h6 12.Bxf6 Qxf6 13.O-O ile maçtakine benzer bir yapı (−0.3).' },
      ],
    },
    '11b': {
      text: '11...O-O: Siyah da rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleyi e8’e getirerek e-hattını kullanmak.',
      neden: '11...Be4 de ilginçti (g2 filini değişmeye zorlamak), ama Tal önce şahını güvenceye aldı. Motor 11...O-O’yu en iyi buluyor (−0.3).',
      diger: [
        { move: '11...Be4', text: '12.Re1 O-O 13.Bg5 Re8 ile Beyaz eşitliğe yaklaşır (Motor: 0.00).' },
        { move: '11...Bb6', text: '12.c3 dxc3 13.Qxd8+ Rxd8 ile vezirler gider (0.00).' },
      ],
    },
    '12w': {
      text: '12.Nf4: At f4’e gelir; d3 karesine geçmeye hazırlanır.',
      amac: 'Atı d3’e getirip c5 filine saldırmak ve d4 piyonunun önünde bir abluka kurmak.',
      neden: 'Plan doğru: ilerlemiş piyonun önüne at koymak klasik bir fikirdir. Motor önce 12.Bg5 ile f6 atını sormayı biraz daha iyi buluyor (−0.25’e karşı −0.5).',
      diger: [
        { move: '12.Bg5', text: '12...h6 13.Bxf6 Qxf6 14.Nf4 ile aynı fikir, ama Beyaz önce f6 atını değişmiş olur (Motor: −0.25).' },
        { move: '12.Nh4', text: '12...Bd7 13.Bg5 h6 ile f5 filini kovalamak (−0.3).' },
      ],
    },
    '12b': {
      text: '12...Re8: Kale açık e-hattına gelir.',
      amac: 'e-hattını ele geçirmek ve e2, e3 karelerine baskı yapmak.',
      neden: 'Açık hatta kale koymak doğaldır. Motor 12...Qb6 ya da 12...h6’yı biraz daha iyi buluyor (−0.45’e karşı −0.3), fark küçük.',
      diger: [
        { move: '12...Qb6', text: '13.a3 Rfe8 14.b4 Bf8 ile vezir b2’ye ve f2’ye bakar (Motor: −0.45).' },
        { move: '12...h6', text: 'Bg5’i önler; 13.Nd3 Qb6 14.Nd2 Bg4 (−0.45).' },
      ],
    },
    '13w': {
      text: '13.Nd3: At d3’e gelir; c5 filine saldırır ve d4’ü ablukaya alır.',
      amac: 'd4 piyonunu d3’teki at ile durdurmak ve Siyahın aktif filini kovalamak.',
      neden: 'Motor bu hamleyi açık farkla en iyi buluyor (−0.2). 13.Re1? Rxe1+ 14.Nxe1 sonrası Beyazın taşları dağınık kalır (−0.7).',
      diger: [
        { move: '13.Re1', text: '13...Rxe1+ 14.Nxe1 Qd7 ile Siyah aktif kalır (Motor: −0.7).' },
        { move: '13.a3', text: '13...Bb6 14.Nd3 h6 ile benzer, ama bir tempo kayıp (−0.8).' },
      ],
    },
    '13b': {
      text: '13...Bb6: Fil b6’ya çekilir ve d4’ü desteklemeye devam eder.',
      amac: 'd4 piyonunun savunmasını korumak ve a7–g1 çaprazında kalmak.',
      neden: 'Fil hem d4’ü korur hem de f2’ye bakmayı sürdürür. 13...Qb6 (−0.3) ve 13...Bd6 (−0.25) de iyiydi; farklar küçük.',
      diger: [
        { move: '13...Qb6', text: '14.Bg5 Ne4 15.Nh4 Bd7 ile Siyah aktif (Motor: −0.3).' },
        { move: '13...Bd6', text: 'Fil d6’dan g3’e bakar; 14.Bg5 h6 15.Bxf6 Qxf6 (−0.25).' },
      ],
    },
    '14w': {
      text: '14.Bg5: Fil f6 atını bağlar.',
      amac: 'f6 atını değişip d4’ün bir savunucusunu ortadan kaldırmak; e4 ve d5 karelerini zayıflatmak.',
      neden: 'Motor 14.Bg5’i açık farkla en iyi buluyor (−0.1). 14.Re1 (−0.5) ya da 14.a4 (−0.6) daha pasiftir; Beyazın kara kareli fili zaten b6 filine karşı pek iş yapamıyordu.',
      diger: [
        { move: '14.Re1', text: '14...Rxe1+ 15.Qxe1 h6 ile e-hattı Siyahta kalır (Motor: −0.5).' },
        { move: '14.a4', text: '14...h6 15.Re1 Rxe1+ (−0.6).' },
      ],
    },
    '14b': {
      text: '14...h6: Fil sorulur.',
      amac: 'Beyazı bir karara zorlamak: ya fili geri çekecek ya da f6’da değişecek.',
      neden: 'Motor 14...h6’yı en iyi buluyor (−0.1). 14...Qd6 da oynanabilirdi; 14...Be4 g2 filini değişmeye çalışır ama biraz pasiftir (+0.1).',
      diger: [
        { move: '14...Qd6', text: '15.Bxf6 Qxf6 16.a3 g6 ile benzer yapı (Motor: 0.00).' },
        { move: '14...Be4', text: '15.Re1 h6 16.Bxf6 Qxf6 (+0.1).' },
      ],
    },
    '15w': {
      text: '15.Bxf6: Beyaz f6 atını alır.',
      amac: 'd4’ü koruyan bir taşı yok etmek ve Siyahın e4 karesine gelme imkânını azaltmak.',
      neden: 'Fil geri çekilirse ...g5 ile Siyah alan kazanır. 15.Nh4? hxg5 16.Nxf5 Qd7 sonrası filler değişir ama Siyah rahattır (−0.4), 15.Bd2? Ne4 ise Siyaha merkezde güçlü bir at verir (−1.0).',
      diger: [
        { move: '15.Nh4', text: '15...hxg5 16.Nxf5 Qd7 ile filler karşılıklı gider, ama Siyahın g5 piyonu ve açılan h-hattı Siyaha rahat bir oyun verir (Motor: −0.4).' },
        { move: '15.Bd2', text: '15...Ne4 16.Re1 Qf6 ile at e4’te çok güçlü (−1.0).' },
      ],
    },
    '15b': {
      text: '15...Qxf6: Vezirle alınır.',
      amac: 'Şahın önündeki piyon yapısını bozmadan malzemeyi geri almak; veziri aktif bir kareye getirmek.',
      neden: '15...gxf6? şahı açar ve f-piyonlarını ikiler (+1.7); 15...Qd7?? ise bir taş kaybettirir. Vezirle almak tek iyi hamledir.',
      diger: [
        { move: '15...gxf6', text: '16.Nh4 Bg6 17.Re1 ile Siyah şahı açılır (Motor: +1.7).' },
      ],
    },
    '16w': {
      text: '16.Nd2: At d2’ye gelir; c4’e geçmeye hazırlanır.',
      amac: 'b6 filine Nc4 ile saldırmak ve d4’e ikinci bir baskı daha kurmak.',
      neden: 'Fikir mantıklı, ama f3 atı şah kanadını savunuyordu ve d4’e baskıyı azaltır. Motor 16.a3 (−0.1) ya da 16.Re1 ile sakin bir düzenlemeyi tercih ediyor; maç hamlesi −0.45.',
      diger: [
        { move: '16.a3', text: '16...Kf8 17.Nh4 Bh7 18.Nf3 ile Beyaz bekler ve b4 hazırlar (Motor: −0.1).' },
        { move: '16.Re1', text: '16...Ba5 17.Re2 ile e-hattına itiraz (−0.1).' },
      ],
    },
    '16b': {
      text: '16...Qg6: Vezir g6’ya gelir; d3 atına ve g2–b7 çaprazına bakar.',
      amac: 'f5 fili ile birlikte d3 atına baskı kurmak ve Beyazın şah kanadını izlemek.',
      neden: 'Aktif bir kare, ama motor 16...Ne5 (−0.45) ile atı c4’e göndermeyi daha güçlü buluyor; maç hamlesi −0.1. 16...Ne5 17.Nf3 Nc4 ile Siyahın atı Beyazın vezir kanadına girerdi.',
      diger: [
        { move: '16...Ne5', text: '17.Nf3 Nc4 18.Nh4 Be6 ile at c4’te çok aktif (Motor: −0.45).' },
        { move: '16...g6', text: '17.Re1 Ne5 18.Bxb7 Rad8 ile piyon karşılığında aktiflik (−0.35).' },
      ],
    },
    '17w': {
      text: '17.Nc4: At c4’te b6 filine saldırır.',
      amac: 'Siyahın kara kareli filini a7–g1 çaprazından uzaklaştırmak ve d6 karesine bakmak.',
      neden: '16.Nd2’nin mantıklı devamı. Motor 17.Nf3 ile geri dönmeyi biraz daha iyi buluyor (−0.1’e karşı −0.15), fark önemsiz.',
      diger: [
        { move: '17.Nf3', text: '17...Qf6 18.a3 Bc7 19.Nh4 ile Beyaz yeniden düzenlenir (Motor: −0.1).' },
        { move: '17.Rc1', text: '17...Bxd3 18.cxd3 Qxd3 ile Siyah bir piyon kazanır, ama Nc4 ile Beyaz karşılık bulur (−0.2).' },
      ],
    },
    '17b': {
      text: '17...Bc7: Fil c7’ye çekilir; şimdi g3 ve d6 yönüne bakar.',
      amac: 'Fili b1–h7 çaprazına getirip g3 piyonuna ve Beyazın şah kanadına baskı yapmak.',
      neden: 'Fil b6’dan ...Bxc4 ihtimali yoktur, değişime razı olmak yerine c7’ye geçer. Motor 17...Bc7’yi en iyi buluyor (−0.1); 17...Rad8 de iyiydi.',
      diger: [
        { move: '17...Rad8', text: '18.a4 Bc7 19.Qd2 Qg5 ile benzer (Motor: −0.05).' },
        { move: '17...Bg4', text: '18.Qd2 Re2 19.Qf4 ile Beyaz karşı oyun bulur (+0.1).' },
      ],
    },
    '18w': {
      text: '18.a4: Piyon a4’e gelir; c4 atını ...b5’e karşı korur.',
      amac: 'c4’teki atı sağlamlaştırmak ve vezir kanadında alan almak.',
      neden: 'Motor 18.a4’ü en iyi buluyor (−0.1). Bu hamle, oyun sonuna kadar Beyazın vezir kanadı çoğunluğunun bir parçası olacak.',
      diger: [
        { move: '18.Rc1', text: '18...Rad8 19.Re1 h5 ile Siyah aktif kalır (Motor: −0.25).' },
        { move: '18.Qf3', text: '18...h5 19.Rfe1 a6 (−0.35).' },
      ],
    },
    '18b': {
      text: '18...Bg4: Fil g4’e gelir ve d1 vezirine saldırır.',
      amac: 'Beyazı rahatsız etmek ve fili h3 karesine götürerek g2 filini değişmeye zorlamak.',
      neden: 'Tal tempo kazanarak Beyazın şah kanadına baskı kurmak istedi. Motor 18...Rac8 ya da 18...Rad8’i biraz daha iyi buluyor (−0.1), fark küçük; maç hamlesi 0.00.',
      diger: [
        { move: '18...Rac8', text: '19.Qd2 Qe6 20.b3 Qe2 ile vezir aktif (Motor: −0.15).' },
        { move: '18...Rad8', text: '19.Qd2 Qf6 20.Rae1 ile kaleler değişir (−0.1).' },
      ],
    },
    '19w': {
      text: '19.Bf3: Fil f3’e gelir ve g4 filini karşılar.',
      amac: 'Fil değişimi önermek ve veziri g4’ün baskısından kurtarmak.',
      neden: 'Motor 19.Bf3’ü açık farkla en iyi buluyor (−0.1). 19.Qb1? (−0.6) ve 19.Qc1? Be2! (−0.75) vezirleri pasif bir kareye gönderirdi.',
      diger: [
        { move: '19.Qc1', text: '19...Be2 20.Re1 Bxd3 21.cxd3 ile d3 zayıf kalır (Motor: −0.75).' },
        { move: '19.Qb1', text: '19...h5 20.h4 Qf5 ile Siyah baskı kurar (−0.6).' },
      ],
    },
    '19b': {
      text: '19...Bh3: Fil h3’e gelir; f1 kalesine saldırır.',
      amac: 'Fil değişiminden kaçınıp g2 karesini kontrol altına almak ve Beyazın şah kanadını zayıflatmak.',
      neden: 'Tal fil değişimini istemedi, çünkü f3 filinin pasif kalmasını istiyordu. Motor 19...Bf5’i (−0.05) biraz daha iyi buluyor, maç hamlesi +0.07; fark önemsiz. Hamlenin asıl değeri psikolojik: Beyaz filini koruyabilmek için 21.Bh1 gibi tuhaf bir kareye çekilmek zorunda kalacak.',
      diger: [
        { move: '19...Bf5', text: '20.Qd2 Qf6 21.Bg2 a6 ile fil d3 atına baskısını sürdürür (Motor: −0.05).' },
        { move: '19...Be6', text: '20.b3 Qf6 21.Bg2 Bf5 ile fil c4 atına bakar (0.00).' },
      ],
    },
    '20w': {
      text: '20.Re1: Kale e1’e çekilir ve e-hattına itiraz eder.',
      amac: 'Kaleyi saldırıdan kurtarmak ve e-hattındaki Siyah kalesine karşı çıkmak.',
      neden: 'Motor bu hamleyi en iyi buluyor (+0.1). 20.Bd5? Bxf1 21.Kxf1 bir kalite kaybettirir (−1.3); 20.Bg2 Be6 ise tekrar ihtimali verir.',
      diger: [
        { move: '20.Bd5', text: '20...Bxf1 21.Kxf1 h5 ile Beyaz bir kalite kaybeder (Motor: −1.3).' },
        { move: '20.Bg2', text: '20...Be6 21.b3 Bg4 22.Bf3 ile hamle tekrarı ihtimali (−0.1).' },
      ],
    },
    '20b': {
      text: '20...Qf5: Vezir f5’e gelir; f3 filine ve d3 atına baskı yapar.',
      amac: 'Beyazın f3 filini ve d3 atını aynı anda baskı altına alıp taşlarını bağlamak.',
      neden: 'Aktif bir vezir hamlesi. Motor 20...Bf5, 20...Rad8 ya da 20...Rac8’i de aynı seviyede görüyor (+0.1), yani oyun dengede.',
      diger: [
        { move: '20...Rad8', text: '21.Rxe8+ Rxe8 22.Qd2 Qf6 ile kaleler değişir (Motor: +0.1).' },
        { move: '20...Bf5', text: '21.Qd2 Qf6 22.Bg2 Rxe1+ ile fil d3’e bakar (+0.05).' },
      ],
    },
    '21w': {
      text: '21.Bh1: Fil köşeye çekilir.',
      amac: 'Fili değişimden korumak ve uzun çaprazda tutmak.',
      neden: 'Motor 21.Bh1’i en iyi buluyor (+0.1). Fil f3’te f5 vezirinin baskısı altındaydı; g2’ye dönmek ...Bxg2 ile değişime razı olmak demekti ve Suttles filini korumak istedi. Ama fil h1’de pasiftir; bu taş daha sonra 24.Bxc6 ile ata değişilecek.',
      diger: [
        { move: '21.Nd2', text: '21...Rxe1+ 22.Qxe1 Ba5 23.Bxc6 ile fil yine ata değişilir (Motor: −0.05).' },
        { move: '21.Re2', text: '21...Kf8 22.Nd2 g5 ile Siyah şah kanadında ilerler (−0.2).' },
      ],
    },
    '21b': {
      text: '21...Re6: Kale e6’ya gelir; kaleler e-hattında ikilenecek.',
      amac: 'e-hattını ele geçirmek ve e1 kalesine iki kale ile baskı yapmak.',
      neden: 'Motor 21...Rxe1+ ile hemen değişimi biraz daha iyi buluyor (0.00’a karşı +0.15). Tal ise kaleleri ikileyip hattı tutmayı tercih etti; bu, oyunu daha uzun ve karmaşık tutar.',
      diger: [
        { move: '21...Rxe1+', text: '22.Qxe1 Rd8 23.b4 Qe6 ile Siyah d-hattını alır (Motor: 0.00).' },
        { move: '21...Rad8', text: '22.Rxe8+ Rxe8 23.Qd2 Qf6 (0.00).' },
      ],
    },
    '22w': {
      text: '22.Qf3: Beyaz vezir değişimi önerir.',
      amac: 'Vezirleri değişip Siyahın şah kanadındaki baskısını azaltmak.',
      neden: 'Vezirler gidince h3 fili ve e-hattındaki kaleler daha az tehlikeli olur. Motor 22.Qd2 ya da 22.b4’ü biraz daha iyi buluyor (+0.1’e karşı 0.00), ama fark çok küçük.',
      diger: [
        { move: '22.Qd2', text: '22...Rd8 23.Rxe6 Qxe6 24.b3 ile Beyaz vezirleri tutar (Motor: +0.1).' },
        { move: '22.b4', text: '22...Rae8 23.Qd2 Qg5 ile vezir kanadında alan (+0.05).' },
      ],
    },
    '22b': {
      text: '22...Rae8: Kaleler e-hattında ikilenir.',
      amac: 'e-hattının tam kontrolünü almak; vezir değişiminden sonra kalelerin aktif kalmasını sağlamak.',
      neden: 'Motor 22...Rae8’i en iyi buluyor (0.00). 22...Qxf3 23.Bxf3 sonrası Beyazın fili yeniden aktifleşirdi.',
      diger: [
        { move: '22...Qxf3', text: '23.Bxf3 Rc8 24.Bd5 Rxe1+ ile Beyaz filini kurtarır (Motor: 0.00).' },
        { move: '22...Kf8', text: '23.Qxf5 Rxe1+ 24.Rxe1 Bxf5 (0.00).' },
      ],
    },
    '23w': {
      text: '23.Qxf5: Vezirler değişir.',
      amac: 'Ağır taşları azaltıp güvenli bir oyun sonuna geçmek.',
      neden: 'Motor 23.Qxf5’i en iyi buluyor (0.00). 23.Qd5 Rxe1+ ile de oynanabilirdi, ama sonuç benzerdir.',
      diger: [
        { move: '23.Qd5', text: '23...Rxe1+ 24.Rxe1 Rxe1+ 25.Nxe1 ile tüm ağır taşlar değişir (Motor: 0.00).' },
        { move: '23.Bg2', text: '23...Qxf3 24.Bxf3 Kf8 25.Rxe6 (−0.05).' },
      ],
    },
    '23b': {
      text: '23...Bxf5: Fil geri alır ve d3 atına bakmaya devam eder.',
      amac: 'Malzemeyi geri almak ve fili d3 atını rahatsız eden aktif kareye getirmek.',
      neden: 'Zorunlu bir geri alış: 23...Ne5?? 24.Qxh3 ile Siyah bir taş kaybeder (+8.1). Siyah 23...Rxe1+ ile önce kaleleri de değişebilirdi; sonuç aynıdır.',
      diger: [
        { move: '23...Rxe1+', text: '24.Rxe1 Rxe1+ 25.Nxe1 Bxf5 ile tüm ağır taşlar gider (Motor: 0.00).' },
      ],
    },
    '24w': {
      text: '24.Bxc6: Beyaz fili c6 atıyla değişir.',
      amac: 'Pasif h1 filinden kurtulmak ve Siyahın c-piyonlarını ikilemek.',
      neden: 'Suttles c6 atının d4’ü desteklemesini ve e5 karesine gelme ihtimalini ortadan kaldırmak istedi. Ancak Siyah fil çiftini aldı. Motor 24.Rxe6 Rxe6 25.Kf1 ile filini tutmayı tam eşit buluyor (0.00), maç hamlesi −0.45. Dikkat: 24...Bxd3?? 25.Bxe8 Bxc4 sonrası Siyah bir kalite kaybederdi.',
      diger: [
        { move: '24.Rxe6', text: '24...Rxe6 25.Kf1 g5 26.b3 ile Beyaz filini korur ve oyun dengededir (Motor: 0.00).' },
        { move: '24.Kf1', text: '24...Kf8 25.Rxe6 Bxe6 26.b3 (0.00).' },
      ],
    },
    '24b': {
      text: '24...bxc6: Piyonla alınır.',
      amac: 'Malzemeyi geri almak ve b-hattını açmak; ikili c-piyonu ileride ...c5–c4 ile koç piyonu olacak.',
      neden: '24...Bxd3?? 25.Bxe8 Bxc4 kalite kaybettirir (+3.8). Motor 24...Rxe1+ 25.Rxe1 Rxe1+ 26.Nxe1 bxc6 ile önce kaleleri değişmeyi biraz daha iyi buluyor (−0.4’e karşı −0.1).',
      diger: [
        { move: '24...Rxe1+', text: '25.Rxe1 Rxe1+ 26.Nxe1 bxc6 ile tüm kaleler gider, Siyahın fil çifti kalır (Motor: −0.4).' },
        { move: '24...Bxd3', text: '25.Bxe8 Bxc4 26.Bd7 ile Beyaz bir kalite önde (+3.8).' },
      ],
    },
    '25w': {
      text: '25.Rxe6: Kaleler değişir.',
      amac: 'e-hattındaki baskıyı azaltmak ve Siyahın kalelerini dağıtmak.',
      neden: 'Motor 25.Rxe6’yı en iyi buluyor (−0.1). 25.Rad1 ya da 25.Rac1 sonrası 25...Rxe1+ ile Siyah e-hattını alırdı (−0.5).',
      diger: [
        { move: '25.Rad1', text: '25...Rxe1+ 26.Rxe1 Rxe1+ 27.Nxe1 ile Siyah aktif (Motor: −0.5).' },
        { move: '25.Kf1', text: '25...Rxe1+ 26.Rxe1 Bh3+ 27.Kg1 (−0.45).' },
      ],
    },
    '25b': {
      text: '25...Bxe6: Fil alır.',
      amac: 'Fili e6’dan c4 atına baskı yaparken merkezde tutmak; piyon yapısını bozmamak.',
      neden: 'Motor 25...Bxe6 ile 25...Rxe6’yı neredeyse eşit görüyor (−0.15). 25...fxe6 yapıyı bozar (0.00).',
      diger: [
        { move: '25...Rxe6', text: '26.Rd1 g5 27.f3 Re2 ile kale ikinci yataya girer (Motor: −0.1).' },
        { move: '25...fxe6', text: '26.Re1 e5 27.f3 e4 ile merkez piyonları ilerler, ama yapı bozulur (0.00).' },
      ],
    },
    '26w': {
      text: '26.Re1: Kale e-hattını alır.',
      amac: 'Açık e-hattını ele geçirmek ve e6 filine baskı yapmak.',
      neden: 'Motor 26.Nd2 (−0.05) ya da 26.b3’ü biraz daha iyi buluyor; maç hamlesi −0.25. Hat açık, ama Siyah 26...Kf8 ile e7 ve e8 karelerini koruyacak.',
      diger: [
        { move: '26.Nd2', text: '26...Bd6 27.Re1 Kf8 28.Ne4 ile at merkeze gelir (Motor: −0.05).' },
        { move: '26.b3', text: '26...Kf8 27.Nb4 c5 28.Nd3 ile c4 atı desteklenir (−0.2).' },
      ],
    },
    '26b': {
      text: '26...Kf8: Şah f8’e gelir; e7 ve e8 karelerini korur.',
      amac: 'Şahı oyun sonu için merkeze yaklaştırmak ve e-hattından girişi engellemek.',
      neden: 'Motor 26...Kf8’i en iyi buluyor (−0.25). 26...Rc8 ya da 26...Rb8 kaleyi daha pasif bir yere koyar.',
      diger: [
        { move: '26...Rc8', text: '27.Nd2 c5 28.Nxc5 Bf5 ile karmaşık (Motor: −0.05).' },
        { move: '26...Rb8', text: '27.b3 Bf5 28.Re7 Rc8 ile Beyaz kalesi yedinci yataya girer (+0.05).' },
      ],
    },
    '27w': {
      text: '27.Nc5: At c5’ten e6 filine saldırır.',
      amac: 'Siyahın fil çiftini bozmak ve fili geri çekilmeye zorlamak.',
      neden: 'At c5’te aktiftir, ama Siyah 27...Bf5 ile kolayca kaçar ve at sonra d3’e dönmek zorunda kalır. Motor 27.b3 ya da 27.Nd2’yi biraz daha iyi buluyor (−0.3’e karşı −0.5).',
      diger: [
        { move: '27.b3', text: '27...Bf5 28.Rxe8+ Kxe8 29.Kf1 ile benzer, ama bir tempo kazanılmış olur (Motor: −0.3).' },
        { move: '27.Nd2', text: '27...Bd5 28.Rc1 Rb8 ile at merkeze gelir (−0.3).' },
      ],
    },
    '27b': {
      text: '27...Bf5: Fil f5’e geri döner.',
      amac: 'Fil çiftini korumak ve d3 karesine bakmaya devam etmek.',
      neden: 'Motor 27...Bf5’i en iyi buluyor (−0.5). 27...Bg4 ya da 27...Bh3 de mümkündü, ama f5’teki fil d3 ve c2 karelerini daha iyi kontrol eder.',
      diger: [
        { move: '27...Bg4', text: '28.Rc1 g5 29.Kg2 h5 ile Siyah şah kanadında ilerler (Motor: −0.3).' },
        { move: '27...Bh3', text: '28.Rxe8+ Kxe8 29.Nb3 Be6 (−0.2).' },
      ],
    },
    '28w': {
      text: '28.Rxe8+: Son kaleler değişir.',
      amac: 'Siyahın kalesini e-hattından kaldırıp taşları azaltmak; iki at ile iki fil karşı karşıya kalır.',
      neden: 'Motor 28.Rxe8+’yi en iyi buluyor (−0.45). 28.Nd3 Rxe1+ 29.Nxe1 ya da 28.Rc1 Re2 Siyaha aktif kale verir (−0.7).',
      diger: [
        { move: '28.Nd3', text: '28...Rxe1+ 29.Nxe1 Ke7 ile Siyah şahı merkeze gelir (Motor: −0.7).' },
        { move: '28.Rc1', text: '28...Re2 29.Nd3 Ke7 ile kale ikinci yatayda (−0.75).' },
      ],
    },
    '28b': {
      text: '28...Kxe8: Şah alır; fil çiftine karşı iki at kalmıştır.',
      amac: 'Malzemeyi geri almak ve şahı merkeze yaklaştırmak.',
      neden: 'Zorunlu geri alış; başka bir hamle bir kale kaybettirir. Oyun sonunda şah aktif bir taştır ve e8’den d7–e6–d5 yolunu izleyecektir.',
    },
    '29w': {
      text: '29.Nd3: At d3’e döner ve d4’ü ablukaya alır.',
      amac: 'd4 piyonunu durdurmak ve b4, f4 karelerini kontrol etmek.',
      neden: 'Motor 29.Nd3’ü açık farkla en iyi buluyor (−0.5). 29.Na6 (−0.9) ya da 29.Na3 (−1.2) atı kenara gönderir.',
      diger: [
        { move: '29.Na6', text: '29...Kd7 30.Nc5+ Ke7 31.Nd3 ile at aynı yere iki tempo kayıpla gelir (Motor: −0.9).' },
        { move: '29.Na3', text: '29...Ke7 30.Nd3 Bg4 31.Kg2 (−1.2).' },
      ],
    },
    '29b': {
      text: '29...Kd7: Şah merkeze yürür.',
      amac: 'Şahı d5’e kadar getirip d4 piyonunu desteklemek ve Beyazın atlarını sıkıştırmak.',
      neden: 'Oyun sonunda şahın aktifliği çok önemlidir. Motor 29...Ke7 ile 29...Kd7’yi neredeyse eşit görüyor (−0.5).',
      diger: [
        { move: '29...Ke7', text: '30.f3 Ke6 31.b3 h5 ile şah e6 üzerinden merkeze gelir (Motor: −0.55).' },
        { move: '29...h5', text: '30.Kf1 Ke7 31.f3 Ke6 ile h-piyonu ilerler (−0.45).' },
      ],
    },
    '30w': {
      text: '30.Kf1: Beyaz şahı da merkeze gelir.',
      amac: 'Şahı e2’ye getirip d3 atını korumak ve d4’ü ablukaya almak.',
      neden: 'Motor 30.Kg2 (−0.55) ya da 30.b3 (−0.55) hamlelerini biraz daha iyi buluyor; maç hamlesi −0.8. Fark küçük, ama Siyahın üstünlüğü yavaş yavaş artmaya başlar.',
      diger: [
        { move: '30.Kg2', text: '30...Bd6 31.Kf1 c5 32.Ke2 ile aynı plan (Motor: −0.55).' },
        { move: '30.b3', text: '30...c5 31.g4 Bg6 32.f3 ile vezir kanadı ve şah kanadı piyonları düzenlenir (−0.55).' },
      ],
    },
    '30b': {
      text: '30...Ke6: Şah e6’ya gelir.',
      amac: 'Şahı d5’e getirmek ve merkezde güçlü bir yer almak.',
      neden: 'Motor 30...Ke6’yı en iyi buluyor (−0.75). 30...h5 ya da 30...Ke7 daha yavaştır.',
      diger: [
        { move: '30...h5', text: '31.Ke2 Ke6 32.b3 f6 ile şah kanadında piyon ilerletmek (Motor: −0.5).' },
        { move: '30...Ke7', text: '31.Ke1 Ke6 32.b3 Bd6 (−0.45).' },
      ],
    },
    '31w': {
      text: '31.Ke2: Şah e2’de d3 atını korur.',
      amac: 'd3 atını desteklemek ve şahı d4 piyonuna yaklaştırmak.',
      neden: 'Motor 31.Nd2’yi biraz daha iyi buluyor (−0.7’ye karşı −0.75), fark önemsiz.',
      diger: [
        { move: '31.Nd2', text: '31...Kd5 32.Ke2 c5 33.f3 ile benzer (Motor: −0.7).' },
        { move: '31.b3', text: '31...c5 32.f3 Kd5 33.Nd2 (−0.75).' },
      ],
    },
    '31b': {
      text: '31...Kd5: Şah d5’te merkezde güçlü bir yer alır.',
      amac: 'd4 piyonunu desteklemek, c4 ve e4 karelerini kontrol etmek ve Beyazın atlarını sıkıştırmak.',
      neden: 'Motor 31...Kd5’i en iyi buluyor (−0.75). Şah d5’te hem merkezde hem de iki kanada da yakındır.',
      diger: [
        { move: '31...c5', text: '32.f3 Kd5 33.Nd2 Bd6 ile aynı konum (Motor: −0.75).' },
        { move: '31...g5', text: '32.b3 Bd6 33.f3 c5 ile şah kanadında ilerleme (−0.5).' },
      ],
    },
    '32w': {
      text: '32.b3: Piyon b3’e gelir; c4 karesini kontrol eder.',
      amac: 'Siyah şahının c4 karesine gelmesini engellemek ve vezir kanadı piyonlarını sağlamlaştırmak.',
      neden: 'Motor 32.Nd2 ile 32.b3’ü neredeyse eşit görüyor (−0.8). 32.Na3?? Bd6 33.Nf4+ Bxf4 34.gxf4 ise şah kanadı yapısını bozar (−2.1).',
      diger: [
        { move: '32.Nd2', text: '32...c5 33.b3 h5 34.f3 ile aynı plan (Motor: −0.75).' },
        { move: '32.Na3', text: '32...Bd6 33.Nf4+ Bxf4 34.gxf4 ile Beyazın şah kanadı piyonları zayıflar (−2.1).' },
      ],
    },
    '32b': {
      text: '32...c5: İkili c-piyonu ileri gider ve d4’ü destekler.',
      amac: 'd4 piyonunu c5 ile desteklemek ve ...c4 ile vezir kanadında hat açmaya hazırlanmak.',
      neden: 'Motor 32...c5’i en iyi buluyor (−0.9). 32...a5 ya da 32...Bd6 daha yavaştır; 32...Bd6 33.Nxd6 ise fil çiftini verir.',
      diger: [
        { move: '32...a5', text: '33.f3 h5 34.Nd2 g5 ile vezir kanadını sabitlemek (Motor: −0.65).' },
        { move: '32...Bd6', text: '33.Nxd6 Kxd6 34.Kd2 c5 ile fil çifti kaybolur (−0.4).' },
      ],
    },
    '33w': {
      text: '33.f3: Piyon f3’e gelir; e4 ve g4 karelerini tutar.',
      amac: 'Siyah şahının e4 karesine girmesini engellemek ve f5 filinin g4 karesine gelmesini önlemek.',
      neden: 'Motor 33.f3’ü en iyi buluyor (−0.8). Bu hamle, Beyazın şah kanadı piyonlarını kara karelere koyar; bu da Siyahın kara kareli filinin hedefi olabilir.',
      diger: [
        { move: '33.Na3', text: '33...h5 34.Nb5 Bb8 35.Kd2 ile at vezir kanadına gelir (Motor: −0.9).' },
        { move: '33.Nd2', text: '33...Bc8 34.f3 Bd6 35.Ne4 (−0.9).' },
      ],
    },
    '33b': {
      text: '33...Bc8: Fil c8’e çekilir; başka çapraza geçecek.',
      amac: 'Fili a6–f1 çaprazına getirip Beyazın şahını ve d3 atını rahatsız etmek.',
      neden: 'f5’teki fil artık pek iş yapmıyordu. Motor 33...Bd7 ile 33...Bc8’i aynı seviyede görüyor (−0.75).',
      diger: [
        { move: '33...Bd7', text: '34.Nd2 f5 35.f4 Bc8 ile benzer plan (Motor: −0.75).' },
        { move: '33...Kc6', text: '34.Nd2 Be6 35.Kf1 g5 (−0.7).' },
      ],
    },
    '34w': {
      text: '34.Nd2: At d2’ye gelir.',
      amac: 'Atı c4 ya da e4 karesine getirmek ve d4’e baskı yapmak.',
      neden: 'Motor 34.Na3 ile atı b5’e göndermeyi biraz daha iyi buluyor (−0.75’e karşı −0.8), fark önemsiz.',
      diger: [
        { move: '34.Na3', text: '34...Be6 35.Nb5 Bb8 36.Nf4+ ile at aktif (Motor: −0.75).' },
        { move: '34.Kd2', text: '34...Bb7 35.Na3 Ba6 36.Nb2 (−0.8).' },
      ],
    },
    '34b': {
      text: '34...f5: Piyon f5’e gelir; e4 karesini tutar.',
      amac: 'Beyaz atının e4’e gelmesini engellemek ve şah kanadında alan kazanmak.',
      neden: 'Motor 34...Ba6+ ya da 34...Bd6’yı biraz daha iyi buluyor (−0.85’e karşı −0.7); ...f5 piyonu açık renk karede kalır ve ileride bir hedef olabilir.',
      diger: [
        { move: '34...Ba6', text: '35.Kf2 Bd6 36.Nb2 Bc8 ile fil aktif (Motor: −0.85).' },
        { move: '34...Bd6', text: '35.Nb2 Ba6+ 36.Kf2 h5 (−0.85).' },
      ],
    },
    '35w': {
      text: '35.f4: Piyon f4’e gelir; kara karelerde yer alır.',
      amac: 'e5 karesini kontrol etmek ve Siyahın ...g5 itişini zorlaştırmak.',
      neden: 'Motor 35.f4’ü en iyi buluyor (−0.75). Bu hamleyle Beyaz e5 karesini atları için hazırlar.',
      diger: [
        { move: '35.Nb1', text: '35...Ba6 36.Na3 Bd6 37.f4 ile at vezir kanadına gider (Motor: −0.75).' },
        { move: '35.Nc4', text: '35...Ba6 36.Na3 Bd6 (−0.8).' },
      ],
    },
    '35b': {
      text: '35...Ba6: Fil a6’dan e2 şahına bakar.',
      amac: 'Beyaz şahını ve d3 atını a6–f1 çaprazında bağlamak.',
      neden: 'Motor 35...Ba6’yı en iyi buluyor (−0.7). Fil a6’da d3 atına doğrudan baskı yapar.',
      diger: [
        { move: '35...Bd8', text: '36.Nc4 g5 37.Na3 Ba6 ile şah kanadında ilerleme (Motor: −0.65).' },
        { move: '35...Bb7', text: '36.Kd1 Ba6 37.Nf3 Bd6 (−0.6).' },
      ],
    },
    '36w': {
      text: '36.Nf3: At f3’e döner ve d4’e baskı yapar.',
      amac: 'd4 piyonuna baskı yapmak ve e5 karesine gelmeye hazırlanmak.',
      neden: 'Motor 36.Kd1 ya da 36.Ke1 ile şahı d3 atından uzaklaştırmayı biraz daha iyi buluyor (−0.7’ye karşı −0.85). Fark küçük.',
      diger: [
        { move: '36.Kd1', text: '36...g5 37.fxg5 hxg5 38.Nf3 ile şah a6 filinin çaprazından çıkar (Motor: −0.7).' },
        { move: '36.Kf2', text: '36...Bd8 37.Nf3 Be7 38.Nde5 (−0.75).' },
      ],
    },
    '36b': {
      text: '36...Bd6: Fil d6’ya gelir; f4 ve g3 piyonlarına bakar.',
      amac: 'Beyazın e5 karesine gelmesini engellemek ve kara karelerdeki piyonlara baskı yapmak.',
      neden: 'Motor 36...Bd6’yı en iyi buluyor (−0.8). 36...Ke4 37.Nd2+ ile şah geri döner.',
      diger: [
        { move: '36...Ke4', text: '37.Nd2+ Kd5 38.Ke1 g5 ile şah tekrar d5’e döner (Motor: −0.7).' },
        { move: '36...Bc8', text: '37.Nfe5 g5 38.Nc4 Bd8 (−0.65).' },
      ],
    },
    '37w': {
      text: '37.Nh4: At h4’ten f5 piyonuna bakar.',
      amac: 'f5 piyonuna saldırmak ve Siyahın filini savunmaya bağlamak.',
      neden: 'Plan çok etkili değildir: Siyah 37...Bc8 ile f5’i korur ve at f3’e geri dönmek zorunda kalır. Motor 37.Nd2’yi daha sağlam buluyor (−0.75’e karşı −1.05).',
      diger: [
        { move: '37.Nd2', text: '37...Be7 38.Ke1 g5 39.Nf3 ile Beyaz sağlam (Motor: −0.75).' },
        { move: '37.Kd2', text: '37...c4 38.bxc4+ Kxc4 39.Nfe5+ ile Siyah şahı vezir kanadına girer (−1.2).' },
      ],
    },
    '37b': {
      text: '37...Bc8: Fil c8’e döner ve f5’i savunur.',
      amac: 'f5 piyonunu korumak ve fili gerektiğinde tekrar a6 ya da b7 çaprazına getirmek.',
      neden: 'Motor 37...Bc8’i en iyi buluyor (−0.8). f5 düşerse Siyahın şah kanadı piyonları zayıflar.',
      diger: [
        { move: '37...Ke6', text: '38.Kd1 g5 39.Nf3 Bxd3 ile şah f5’i korur (Motor: −0.7).' },
        { move: '37...Ke4', text: '38.Kd2 Bc8 39.Ng6 Kf3 ile şah Beyazın şah kanadına girer (−0.65).' },
      ],
    },
    '38w': {
      text: '38.Nf3: At f3’e geri döner.',
      amac: 'd4 piyonuna baskıyı yeniden kurmak ve e5 karesine gelmeye hazırlanmak.',
      neden: 'Motor 38.Nf3’ü en iyi buluyor (−0.9). 38.Ng6 (−1.2) ya da 38.Kd2 (−1.25) Siyahın ...c4 itişine karşı daha zayıftır.',
      diger: [
        { move: '38.Ng6', text: '38...c4 39.bxc4+ Kxc4 40.Kd2 ile Siyah şahı vezir kanadına girer (Motor: −1.2).' },
        { move: '38.Kd2', text: '38...c4 39.bxc4+ Kxc4 40.Ng6 (−1.25).' },
      ],
    },
    '38b': {
      text: '38...c4: Siyah vezir kanadında hatları açar.',
      amac: 'Beyazın b3 piyonunu sorgulamak, c-hattını açmak ve fil a6–f1 çaprazından Beyaz şahını rahatsız etmek.',
      neden: 'Motor 38...c4’ü açık farkla en iyi buluyor (−1.2). 38...Ba6 ya da 38...Bb7 (−0.75) daha yavaştır; c4 ile Siyah ikinci bir cephe açar.',
      diger: [
        { move: '38...Ba6', text: '39.Nd2 Be7 40.Ke1 g5 ile beklemek (Motor: −0.75).' },
        { move: '38...Bb7', text: '39.Nfe5 Ba6 40.Kd1 Bxd3 (−0.7).' },
      ],
    },
    '39w': {
      text: '39.Nb2: At b2’den c4’e baskı yapar.',
      amac: 'c4 piyonuna saldırmak ve Siyah şahının c4 karesine girmesini engellemek.',
      neden: 'Motor 39.Nde5’i biraz daha iyi buluyor (−0.75’e karşı −0.8). 39.bxc4+? Kxc4 ise Siyah şahına c3 ve b3 karelerini açar (−1.35).',
      diger: [
        { move: '39.Nde5', text: '39...cxb3 40.cxb3 Ba6+ 41.Nd3 ile benzer (Motor: −0.75).' },
        { move: '39.bxc4+', text: '39...Kxc4 40.Kd2 Kd5 41.Nfe5 ile Siyahın şahı aktif (−1.35).' },
      ],
    },
    '39b': {
      text: '39...cxb3: Siyah b3’te değişir.',
      amac: 'Beyazın vezir kanadı piyonlarını tecrit etmek ve a6–f1 çaprazını açmak.',
      neden: 'Motor 39...d3+ ile 39...cxb3’ü neredeyse eşit görüyor (−0.8’e karşı −0.7). 39...d3+ 40.cxd3 cxb3 41.Nd2 de mümkündü.',
      diger: [
        { move: '39...d3+', text: '40.cxd3 cxb3 41.Nd2 Kd4 ile Siyah şahı d4’e girer (Motor: −0.8).' },
        { move: '39...c3', text: '40.Nc4 Bc5 41.h4 Ke4 ile c3 piyonu ilerler (−0.65).' },
      ],
    },
    '40w': {
      text: '40.cxb3: c-piyonuyla almak tek iyi hamle.',
      amac: 'Malzemeyi geri almak ve vezir kanadı piyonlarını korumak.',
      neden: '40.Kd3? Ba3! 41.c4+ Kc5 ile Siyah b2 atını yakalar (−3.4); 40.Kd1? bxc2+ de bir piyon kaybettirir (−3.55). Tek doğru hamle budur.',
      diger: [
        { move: '40.Kd3', text: '40...Ba3 41.c4+ Kc5 42.Nd1 ile Beyazın taşları çok pasif kalır (Motor: −3.4).' },
      ],
    },
    '40b': {
      text: '40...Ba6+: Fil şah çeker.',
      amac: 'Beyaz şahını e2’den kovalamak ya da d3 atını bağlamak.',
      neden: 'Motor 40...Ba6+’yı en iyi buluyor (−0.95). Şah çekme, Beyazı Nd3 ile ata kapanmaya zorlar.',
      diger: [
        { move: '40...Bb4', text: '41.Nd3 Bd6 42.Nfe5 a5 ile fil b4’te (Motor: −0.6).' },
        { move: '40...Ke4', text: '41.Nd2+ Kd5 42.Nf3 Ba6+ (−0.55).' },
      ],
    },
    '41w': {
      text: '41.Nd3: At d3’e kapanır; tek iyi hamle.',
      amac: 'Şahı korumak ve d4 piyonunu yeniden ablukaya almak.',
      neden: '41.Nc4? Bxc4+ 42.bxc4+ Kxc4 sonrası Siyah şahı vezir kanadına girer (−1.6); 41.Kd2? Ke4 42.Ne5 Bxe5 de kötüdür (−1.65).',
      diger: [
        { move: '41.Nc4', text: '41...Bxc4+ 42.bxc4+ Kxc4 43.Nh4 ile Siyah şahı aktif (Motor: −1.6).' },
        { move: '41.Kd2', text: '41...Ke4 42.Ne5 Bxe5 43.fxe5 (−1.65).' },
      ],
    },
    '41b': {
      text: '41...Ke4: Şah e4’e girer.',
      amac: 'Beyazın şah kanadına girmek ve f3 ile g3 piyonlarına saldırmak.',
      neden: 'Motor 41...Bb4, 41...Bc8 ve 41...Ke4’ü aynı seviyede görüyor (−0.6). Tal şahını en aktif kareye getirdi.',
      diger: [
        { move: '41...Bb4', text: '42.h4 Ke4 43.Ne5 h5 ile fil b4’te (Motor: −0.65).' },
        { move: '41...Bc8', text: '42.Nfe5 a5 43.Nc4 Bc7 (−0.6).' },
      ],
    },
    '42w': {
      text: '42.Nd2+: Şah çekerek şahı geri gönderir; tek iyi hamle.',
      amac: 'Siyah şahını e4’ten kovmak ve Beyazın şah kanadını korumak.',
      neden: '42.Ne5?? Bxe5 43.fxe5 Bxd3+ (−4.7) ya da 42.Kd2?? Bxd3 (−5.35) sonrası Siyah bir taş kazanır. Tek doğru hamle budur.',
      diger: [
        { move: '42.Ne5', text: '42...Bxe5 43.fxe5 Bxd3+ 44.Kd2 ile Siyah bir taş önde (Motor: −4.7).' },
      ],
    },
    '42b': {
      text: '42...Kd5: Şah d5’e döner.',
      amac: 'Şahı merkezde tutmak ve d4 piyonunu desteklemek.',
      neden: 'Şahın başka iyi karesi yoktur; geri gitmek zorunludur ve d5 en aktif karedir.',
    },
    '43w': {
      text: '43.Nf3: At f3’e gelir.',
      amac: 'd4 piyonuna baskı yapmak ve e5 karesine hazırlanmak.',
      neden: 'Motor 43.h4’ü biraz daha iyi buluyor (−0.45’e karşı −0.6). 43.h3? g5 ise şah kanadını açar (−1.5).',
      diger: [
        { move: '43.h4', text: '43...Bb8 44.h5 Bd6 45.Nf3 ile h-piyonu ilerler (Motor: −0.45).' },
        { move: '43.h3', text: '43...g5 44.fxg5 hxg5 45.g4 ile Siyahın piyonları güçlenir (−1.5).' },
      ],
    },
    '43b': {
      text: '43...Be7: Fil e7’ye döner; h4 ve g5 karelerine bakar.',
      amac: 'Fili ...g5 itişini desteklemek için hazırlamak.',
      neden: 'Motor 43...Bb7 ya da 43...Bc8’i biraz daha iyi buluyor (−0.5’e karşı −0.6), fark önemsiz.',
      diger: [
        { move: '43...Bb7', text: '44.Nfe5 a5 45.Nc4 Bc7 ile fil uzun çaprazda (Motor: −0.5).' },
        { move: '43...Bb4', text: '44.h4 Be7 45.Ne5 g5 (−0.45).' },
      ],
    },
    '44w': {
      text: '44.h4: Piyon h4’e gelir; şah kanadında yer kazanır.',
      amac: 'Siyahın ...g5 itişini engellemek ve h-piyonunu ilerletmek.',
      neden: 'Motor 44.h4’ü en iyi buluyor (−0.45). 44.Ne5 g5 ise Siyahın şah kanadında hızla ilerlemesine izin verir (−0.6).',
      diger: [
        { move: '44.Kd2', text: '44...g5 45.Nfe5 gxf4 46.Ng6 ile karmaşık (Motor: −0.5).' },
        { move: '44.Ne5', text: '44...g5 45.Kd2 Bf8 46.b4 (−0.6).' },
      ],
    },
    '44b': {
      text: '44...g6: Piyon g6’ya gelir; ...g5 hazırlanır.',
      amac: 'f5 piyonunu korumak ve ...g5 itişini hazırlamak.',
      neden: 'Motor 44...Ke4! hamlesini daha güçlü buluyor (−0.9’a karşı −0.45): 45.Nd2+ Kd5 46.Nf3 h5 ile şah aktif kalır ve Beyazın h4 piyonu sabitlenir.',
      diger: [
        { move: '44...Ke4', text: '45.Nd2+ Kd5 46.Nf3 h5 ile Beyazın h4 piyonu sabitlenir (Motor: −0.9).' },
        { move: '44...h5', text: '45.Ne5 Ke4 46.Nc4 Ba3 ile h-piyonu sabitlenir (−0.75).' },
      ],
    },
    '45w': {
      text: '45.Ne5: At e5’e yerleşir.',
      amac: 'Atı merkeze getirmek ve g6 ile c6 karelerine bakmak.',
      neden: 'Motor 45.Ne5’i en iyi buluyor (−0.3). At e5’te çok güçlüdür ve Siyahın ...g5 itişine hazırdır.',
      diger: [
        { move: '45.Nd2', text: '45...Bb4 46.Nf3 Bd6 ile hamle tekrarı ihtimali (Motor: −0.3).' },
        { move: '45.Kd2', text: '45...Ke4 46.Nfe5 Bxd3 47.Nxd3 ile Siyah şahı aktif (−0.75).' },
      ],
    },
    '45b': {
      text: '45...g5: Piyon g5’e gelir; şah kanadı açılır.',
      amac: 'Beyazın şah kanadı piyonlarını değiştirip geçer piyon yaratmak ve fili aktifleştirmek.',
      neden: 'Motor 45...g5’i en iyi buluyor (−0.4). 45...Bd6 ise Beyazın e5 atını değişmek zorunda kalır (−0.05).',
      diger: [
        { move: '45...Ke4', text: '46.Nc4 Kd5 47.Nd2 g5 ile hamle tekrarı (Motor: −0.3).' },
        { move: '45...Bd6', text: '46.Kd2 g5 47.hxg5 hxg5 ile benzer (−0.05).' },
      ],
    },
    '46w': {
      text: '46.hxg5: Beyaz değişir.',
      amac: 'h-hattını açmak ve Siyahın piyon zincirini bozmak.',
      neden: 'Motor 46.hxg5’i en iyi buluyor (−0.35). 46.h5? Bd6 sonrası h5 piyonu zayıf kalır (−1.1).',
      diger: [
        { move: '46.fxg5', text: '46...hxg5 47.h5 Bf6 48.Nf3 ile h-piyonu geçer olur (Motor: −0.65).' },
        { move: '46.Ng6', text: '46...gxh4 47.Nxe7+ Ke4 48.gxh4 ile at fili alır (−0.5).' },
      ],
    },
    '46b': {
      text: '46...hxg5: Siyah piyonla alır.',
      amac: 'Malzemeyi geri almak ve g5 piyonuyla f4’e baskı yapmak.',
      neden: 'Motor 46...hxg5’i en iyi buluyor (−0.15). 46...Bf8?? 47.g6 ile Beyazın g-piyonu tehlikeli olur (+3.0).',
      diger: [
        { move: '46...Bxd3+', text: '47.Kxd3 hxg5 48.Ng6 Bf6 ile fil çiftinden erken vazgeçmek (Motor: +0.1).' },
        { move: '46...Bf8', text: '47.g6 Bb7 48.b4 ile g-piyonu çok tehlikeli (+3.0).' },
      ],
    },
    '47w': {
      text: '47.fxg5: Beyaz bir değişim daha yapar.',
      amac: 'f-hattını açmak ve Siyahın şah kanadı piyonlarını azaltmak.',
      neden: 'Motor 47.Kd2’yi daha güçlü buluyor (−0.1’e karşı −0.55): şah c2–d3 bölgesine gelir ve Siyahın fil değişimine hazır olur. 47.b4 de daha iyiydi (−0.45).',
      diger: [
        { move: '47.Kd2', text: '47...gxf4 48.gxf4 Bc8 49.b4 ile Beyaz sağlam (Motor: −0.1).' },
        { move: '47.b4', text: '47...Bxb4 48.fxg5 Ke4 49.g6 ile g-piyonu tehlikeli (−0.45).' },
      ],
    },
    '47b': {
      text: '47...Bxg5: Fil g5’i alır; tek iyi hamle.',
      amac: 'Malzemeyi geri almak ve fili aktif tutmak.',
      neden: '47...Bxd3+ 48.Nxd3 Bxg5 (0.00) daha zayıftır; 47...Ke6?? 48.Nf3 ile Beyaz d4’ü kazanır (+1.2).',
      diger: [
        { move: '47...Bxd3+', text: '48.Nxd3 Bxg5 49.Kf3 a5 ile fil çifti kaybolur ve oyun eşitlenir (Motor: 0.00).' },
        { move: '47...Ke6', text: '48.Nf3 Kf7 49.Nxd4 ile Beyaz piyon kazanır (+1.2).' },
      ],
    },
    '48w': {
      text: '48.b4: Beyaz vezir kanadında piyonlarını yürütür.',
      amac: 'Vezir kanadında geçer piyon yaratmak ve Siyahın fillerini savunmaya bağlamak.',
      neden: 'Motor 48.b4’ü en iyi buluyor (−0.55). 48.Ng6 de benzer (−0.7); 48.Nd7 Be7 ise atı kenara gönderir (−1.0).',
      diger: [
        { move: '48.Ng6', text: '48...Bh6 49.b4 Bc4 50.b5 ile at g6’da (Motor: −0.7).' },
        { move: '48.Nd7', text: '48...Be7 49.Nb8 Bc8 50.Nf4+ ile at kenarda (−1.0).' },
      ],
    },
    '48b': {
      text: '48...Bxd3+!: Tal fil çiftinden vazgeçer ve d3 atını alır.',
      amac: 'd4’ü ablukaya alan atı ortadan kaldırmak ve kalan fil–at oyun sonunda aktif şah ve geçer piyonlarla kazanmak.',
      neden: 'Motor 48...Bxd3+’ü açık farkla en iyi buluyor (−1.2); 48...Bf6 (−0.25) ya da 48...Bc4 (−0.1) fil çiftini korur ama Beyazın atları d4’ü durdurmaya devam eder.',
      diger: [
        { move: '48...Bf6', text: '49.Nf3 Kc4 50.b5 Bb7 ile fil çifti kalır, ama Beyaz rahat (Motor: −0.25).' },
        { move: '48...Bc4', text: '49.Nxc4 Kxc4 50.b5 Bd8 ile at fili alır (−0.1).' },
      ],
    },
    '49w': {
      text: '49.Nxd3: At geri alır; tek iyi hamle.',
      amac: 'Malzemeyi geri almak ve d4’ü yeniden ablukaya almak.',
      neden: '49.Kxd3?? Kxe5 sonrası Siyah bir taş kazanır (−6.7); 49.Kd1?? ise daha da kötüdür.',
    },
    '49b': {
      text: '49...Be7: Fil e7’ye gelir.',
      amac: 'b4 piyonuna saldırmak ve fili d6 üzerinden g3’e getirmek.',
      neden: 'Motor 49...Bd8! hamlesini açık farkla daha iyi buluyor (−1.05’e karşı −0.1): fil d8’den a5 ve b6 karelerini kontrol eder, sonra ...Bc7xg3 gelir. Maçta 49...Be7 50.b5 Bd6 51.a5 sonrası Beyazın vezir kanadı piyonları hızla ilerledi.',
      diger: [
        { move: '49...Bd8', text: '50.b5 Bc7 51.Nb2 Bxg3 ile fil hem vezir kanadını hem g3’ü kontrol eder (Motor: −1.05).' },
        { move: '49...Kc4', text: '50.b5 Bd8 51.Ne5+ Kc3 ile şah vezir kanadına girer (−0.1).' },
      ],
    },
    '50w': {
      text: '50.b5: Piyonlar ilerler.',
      amac: 'Vezir kanadında geçer piyon yaratmak ve Siyahın a7 piyonunu sabitlemek.',
      neden: 'Motor 50.b5’i en iyi buluyor (−0.1). 50.Nf2?? Bxb4 sonrası Beyaz bir piyon kaybeder (−2.3).',
      diger: [
        { move: '50.a5', text: '50...Bd6 51.b5 Kc4 52.b6 ile aynı fikir (Motor: −0.1).' },
        { move: '50.Nf2', text: '50...Bxb4 51.g4 fxg4 52.Nxg4 ile Beyaz bir piyon kaybeder (−2.3).' },
      ],
    },
    '50b': {
      text: '50...Bd6: Fil d6’dan g3’e bakar.',
      amac: 'g3 piyonunu almak ve fili aktif tutmak.',
      neden: 'Motor 50...Bd6’yı en iyi buluyor (−0.2). 50...Kc4 51.Ne5+ ya da 50...Bd8 51.Nb4+ de mümkündü.',
      diger: [
        { move: '50...Kc4', text: '51.Ne5+ Kc3 52.a5 Bd6 ile şah vezir kanadında (Motor: −0.1).' },
        { move: '50...Bd8', text: '51.Nb4+ Kc4 52.Nc6 Bc7 (0.00).' },
      ],
    },
    '51w': {
      text: '51.a5: Vezir kanadında karşı oyun; tek iyi hamle.',
      amac: 'b6 itişini hazırlamak ve geçer piyon yaratmak.',
      neden: '51.Nb2? Bxg3 52.Kd3 Kc5 ile Siyah bir piyon kazanır (−1.0); 51.Kd1? Kc4 ise daha da kötüdür (−3.3).',
      diger: [
        { move: '51.Nb2', text: '51...Bxg3 52.Kd3 Kc5 53.Nc4 ile Beyaz bir piyon geride (Motor: −1.0).' },
      ],
    },
    '51b': {
      text: '51...Bxg3: Fil g3 piyonunu alır.',
      amac: 'Malzeme kazanmak ve f-piyonunu geçer piyon yapmak.',
      neden: 'Motor 51...Bxg3’ü en iyi hamlelerden biri olarak görüyor (−0.15). Ama bu sırada Beyazın vezir kanadı piyonları ilerler.',
      diger: [
        { move: '51...Kc4', text: '52.b6 a6 53.Nf4 d3+ ile karmaşık (Motor: −0.1).' },
        { move: '51...Bb8', text: '52.b6 axb6 53.axb6 Bxg3 (−0.05).' },
      ],
    },
    '52w': {
      text: '52.Nb4+: Şah çeker.',
      amac: 'Siyah şahını kovmak ve atı c6 karesine getirmek.',
      neden: 'Motor 52.b6’yı biraz daha iyi buluyor (−0.1’e karşı −0.35): 52...a6 53.Nb4+ Kc4 54.Nxa6 ile at a6 piyonunu alır.',
      diger: [
        { move: '52.b6', text: '52...a6 53.Nb4+ Kc4 54.Nxa6 ile Beyaz a-piyonunu alır (Motor: −0.1).' },
        { move: '52.Kd2', text: '52...Kc4 53.b6 a6 54.Ne1 ile Siyah şahı aktif (−1.8).' },
      ],
    },
    '52b': {
      text: '52...Kc5!: Şah b5 ve a5 piyonlarına yaklaşır.',
      amac: 'Beyazın vezir kanadı piyonlarına saldırmak ve onları durdurmak.',
      neden: 'Motor 52...Kc4 ile 52...Kc5’i aynı seviyede görüyor (−0.15). Şah vezir kanadında Beyazın piyonlarını durdurur.',
      diger: [
        { move: '52...Kc4', text: '53.b6 axb6 54.a6 d3+ ile karmaşık (Motor: −0.15).' },
        { move: '52...Kd6', text: '53.Nc6 d3+ 54.Kxd3 Bf2 (0.00).' },
      ],
    },
    '53w': {
      text: '53.Nc6: At c6’dan a7’ye saldırır.',
      amac: 'a7 piyonunu almak ve b-piyonunu desteklemek.',
      neden: 'Motor 53.Nc6’yı açık farkla en iyi buluyor (−0.2). 53.b6? axb6 54.Nd3+ Kc6 (−2.9) ya da 53.Nc2 (−3.5) piyon kaybettirir.',
      diger: [
        { move: '53.b6', text: '53...axb6 54.Nd3+ Kc6 55.axb6 ile Beyaz piyon kaybeder (Motor: −2.9).' },
        { move: '53.Nc2', text: '53...Kc4 54.Kd1 Bc7 ile Siyah piyon kazanır (−3.5).' },
      ],
    },
    '53b': {
      text: '53...a6: Siyah a7 piyonunu korur.',
      amac: 'a7 piyonunu kurtarmak ve Beyazın b5 piyonunu değişmeye zorlamak.',
      neden: 'Motor 53...a6’yı en iyi buluyor (−0.15). 53...Kc4 54.b6 axb6 55.a6 ile Beyazın a-piyonu tehlikeli olur.',
      diger: [
        { move: '53...Kc4', text: '54.b6 a6 55.b7 Bd6 ile karmaşık (Motor: −0.15).' },
        { move: '53...Bc7', text: '54.Nxa7 Bxa5 55.Kd3 Bd8 (0.00).' },
      ],
    },
    '54w': {
      text: '54.Kd3: Şah d3’e gelir ve d4’ü ablukaya alır; tek iyi hamle.',
      amac: 'd4 piyonunu durdurmak ve Siyah şahının vezir kanadından dönmesini engellemek.',
      neden: '54.Kd2? Bf2 55.Na7 axb5 ile Siyah piyon kazanır (−2.9); 54.Ne7? Kxb5 ise daha da kötüdür (−4.1).',
      diger: [
        { move: '54.Kd2', text: '54...Bf2 55.Na7 axb5 56.a6 ile Beyaz piyon geride (Motor: −2.9).' },
        { move: '54.Ne7', text: '54...Kxb5 55.Nxf5 Be5 56.Kd3 (−4.1).' },
      ],
    },
    '54b': {
      text: '54...Bf2: Fil f2’de d4’ü korur.',
      amac: 'd4 piyonunu desteklemek ve şahı vezir kanadında serbest bırakmak.',
      neden: 'Motor 54...Bf2’yi en iyi buluyor (−0.15). 54...Kxb5 55.Nxd4+ Kxa5 ile oyun eşitlenir.',
      diger: [
        { move: '54...Kxb5', text: '55.Nxd4+ Kxa5 56.Nxf5 Kb4 ile oyun eşitlenir (Motor: −0.05).' },
        { move: '54...Be5', text: '55.Nxe5 Kxb5 56.Nc4 Kc5 (−0.1).' },
      ],
    },
    '55w': {
      text: '55.Na7: At a7’ye gelir ve b5’i korur.',
      amac: 'b5 piyonunu korumak ve a-piyonunu desteklemek.',
      neden: 'Motor 55.Na7’yi en iyi buluyor (−0.1). 55.Ke2?? Kxb5 56.Na7+ Kxa5 sonrası Beyaz iki piyon kaybeder (−4.0).',
      diger: [
        { move: '55.Ne7', text: '55...Kxb5 56.Nxf5 Kxa5 57.Kc4 ile Siyah bir piyon önde (Motor: −0.55).' },
        { move: '55.Ke2', text: '55...Kxb5 56.Na7+ Kxa5 57.Kxf2 (−4.0).' },
      ],
    },
    '55b': {
      text: '55...axb5: Siyah b5’i alır.',
      amac: 'Malzeme kazanmak ve b-piyonunu geçer piyon yapmak.',
      neden: 'Motor 55...axb5’i en iyi buluyor (−0.05). Bu hamleyle Beyazın a-piyonu geçer piyon olur ve yarış başlar.',
      diger: [
        { move: '55...Bg3', text: '56.bxa6 Bb8 57.Nc8 f4 ile karmaşık (Motor: 0.00).' },
        { move: '55...Be1', text: '56.bxa6 Bxa5 57.Nb5 Bb6 (0.00).' },
      ],
    },
    '56w': {
      text: '56.a6: Beyazın a-piyonu geçer piyon olur.',
      amac: 'a-piyonunu vezire koşturmak ve Siyahın şahını savunmaya bağlamak.',
      neden: 'Motor 56.a6’yı en iyi buluyor (−0.1). 56.Nc8 Bg3 57.a6 Bb8 ile Siyah piyonu durdurur (−0.65); 56.Kc2?? b4 ise kaybettirir (−5.4).',
      diger: [
        { move: '56.Nc8', text: '56...Bg3 57.a6 Bb8 58.a7 ile fil piyonu durdurur (Motor: −0.65).' },
        { move: '56.Kc2', text: '56...b4 57.Nc8 Kb5 58.Nd6+ (−5.4).' },
      ],
    },
    '56b': {
      text: '56...b4: b-piyonu ilerler.',
      amac: 'b-piyonunu vezire koşturmak ve Beyazın atını savunmaya bağlamak.',
      neden: 'Motor 56...b4’ü en iyi buluyor (−0.1). 56...Kb6 57.Nxb5 Kxa6 ile oyun eşitlenir.',
      diger: [
        { move: '56...Kb6', text: '57.Nxb5 Kxa6 58.Nxd4 Bxd4 59.Kxd4 ile piyon oyun sonu eşit (Motor: 0.00).' },
        { move: '56...Be3', text: '57.Nxb5 Kb6 58.a7 Kb7 (0.00).' },
      ],
    },
    '57w': {
      text: '57.Nb5?: Belirleyici hata. At a-piyonunu korumaya çalışır.',
      amac: 'a6 piyonunu korumak ve a7 ile vezire koşturmak.',
      neden: 'Beyaz a-piyonunu korumak istedi, ama Siyah şahı a7 ve a8 karelerini kontrol ederek piyonu yakalayabilir. Doğrusu **57.Nc8!** idi: 57...Kc6 58.Ne7+ Kb6 59.Nd5+ Kxa6 60.Nxb4+ ile at b4 piyonunu yer ve oyun beraberliğe yakındır (Motor: −0.1). Maç hamlesinden sonra değerlendirme −3.9’a düşer.',
      diger: [
        { move: '57.Nc8', text: '57...Kc6 58.Ne7+ Kb6 59.Nd5+ Kxa6 60.Nxb4+ ile at b4’ü alır ve oyun dengeye yakındır (Motor: −0.1).' },
        { move: '57.Ke2', text: '57...Kb6 58.Nb5 Kxa6 59.Nd6 ile Siyah iki piyon önde (−6.5).' },
      ],
    },
    '57b': {
      text: '57...Kb6: Şah b6’dan a-piyonuna yaklaşır.',
      amac: 'a6 piyonunu yakalamak ve a7–a8 karelerini kontrol etmek.',
      neden: 'Motor 57...Kb6’yı en iyi buluyor (−4.0). 57...Kxb5?? 58.a7 ile piyon vezire çıkar (+4.45).',
      diger: [
        { move: '57...Kxb5', text: '58.a7 Be3 59.a8=Q ile Beyaz vezir çıkarır (Motor: +4.45).' },
        { move: '57...Kc6', text: '58.Nd6 Kb6 59.Nxf5 Kxa6 ile Siyah yine önde (−3.6).' },
      ],
    },
    '58w': {
      text: '58.a7: Piyon vezire bir kare uzakta.',
      amac: 'a-piyonunu vezire çıkarmak ya da Siyah şahını a8’de tutmak.',
      neden: 'Motor 58.a7 ile 58.Kc4’ü aynı seviyede görüyor (−4.3). 58.Nd6? Kxa6 sonrası Siyah şahı da serbest kalır (−6.6).',
      diger: [
        { move: '58.Kc4', text: '58...Kxa6 59.Kxb4 f4 60.Nd6 ile Siyahın f-piyonu koşar (Motor: −4.3).' },
        { move: '58.Nd6', text: '58...Kxa6 59.Kc4 Ka5 60.Kb3 (−6.6).' },
      ],
    },
    '58b': {
      text: '58...Kb7!: Şah a8 karesini tutar; tek hamle.',
      amac: 'a-piyonunu durdurmak ve sonra toplamak.',
      neden: '58...Kxb5?? 59.a8=Q ile Beyaz vezir çıkarır ve kazanır (+5.5). 58...b3?? 59.a8=Q de aynı sonuca götürür (+5.9). Tek doğru hamle budur.',
      diger: [
        { move: '58...Kxb5', text: '59.a8=Q Be3 60.Qe8+ ile Beyaz vezir önde (Motor: +5.5).' },
        { move: '58...b3', text: '59.a8=Q Bg3 60.Kc4 ile Beyaz kazanır (+5.9).' },
      ],
    },
    '59w': {
      text: '59.Nd6+: At şah çeker.',
      amac: 'Siyah şahını a7’den kovmak ya da f5 piyonuna saldırmak.',
      neden: 'Motor 59.Nd6+ ile 59.Kc4’ü aynı seviyede görüyor (−4.7). Beyaz artık kaybetmektedir; amaç en dirençli savunmayı bulmaktır.',
      diger: [
        { move: '59.Kc4', text: '59...f4 60.Kxb4 Be3 61.Nd6+ ile Siyahın f-piyonu koşar (Motor: −4.7).' },
        { move: '59.Nc7', text: '59...Kxa7 60.Kc4 f4 61.Ne6 (−5.1).' },
      ],
    },
    '59b': {
      text: '59...Kxa7: Şah a7 piyonunu alır; tek iyi hamle.',
      amac: 'Beyazın son geçer piyonunu ortadan kaldırmak.',
      neden: '59...Ka8 60.Nxf5 b3 sonrası Beyaz şahı b-piyonunu durdurabilir (−0.35); 59...Kc7?? 60.a8=Q kaybettirir (+5.8).',
      diger: [
        { move: '59...Ka8', text: '60.Nxf5 b3 61.Nd6 Be1 ile oyun beraberliğe yakın (Motor: −0.35).' },
        { move: '59...Kc7', text: '60.a8=Q Bg3 61.Nc4 ile Beyaz vezir önde (+5.8).' },
      ],
    },
    '60w': {
      text: '60.Nxf5: At f5 piyonunu alır.',
      amac: 'Siyahın f-piyonunu ortadan kaldırmak.',
      neden: 'Motor 60.Kc4’ü daha dirençli buluyor (−4.5’e karşı −8.9): 60...f4 61.Kxb4 f3 62.Kc4 ile şah b-piyonunu alır, ama Siyahın f-piyonu koşar. Maçtaki 60.Nxf5 b3! ile b-piyonunu durdurulamaz hale getirir.',
      diger: [
        { move: '60.Kc4', text: '60...f4 61.Kxb4 f3 62.Kc4 ile Siyahın f-piyonu tehlikeli, ama Beyaz direnir (Motor: −4.5).' },
        { move: '60.Kc2', text: '60...f4 61.Ne4 Be1 62.Ng5 (−6.3).' },
      ],
    },
    '60b': {
      text: '60...b3!: b-piyonu koşar; d4 ve b3 piyonları c3 ve c2 karelerini keser.',
      amac: 'b-piyonunu vezire çıkarmak; d4 piyonu c3’ü tuttuğu için Beyaz şahı yaklaşamaz.',
      neden: 'Motor 60...b3’ü en iyi buluyor (−11.9); 60...Kb6 ya da 60...Ka6 (−4.7) daha yavaştır. Piyonlar birbirini koruyor ve at yetişemiyor.',
      diger: [
        { move: '60...Kb6', text: '61.Kc4 Ka5 62.Kb3 d3 ile Siyah yine kazanır, ama daha yavaş (Motor: −4.8).' },
        { move: '60...Ka6', text: '61.Nd6 Ka5 62.Ne4 Be3 (−4.6).' },
      ],
    },
    '61w': {
      text: '61.Nd6: At geri döner, ama piyona yetişemez.',
      amac: 'Atı c4 karesine getirip b2’yi kontrol etmek.',
      neden: 'Beyazın başka çaresi yoktur: 61.Ke2 ya da 61.Kd2 de kaybettirir. Motor tüm hamleleri −34 civarında görüyor (kesin kayıp).',
      diger: [
        { move: '61.Ke2', text: '61...Be3 62.Nd6 Kb6 63.Nc4+ ile aynı sonuç (Motor: −34.7).' },
      ],
    },
    '61b': {
      text: '61...Kb6: Şah b5 ve c5 karelerini tutar; tek iyi hamle.',
      amac: 'Atın c4 ya da b5 karelerine gelmesini engellemek ve b-piyonunu desteklemek.',
      neden: '61...Be3? 62.Kc4 b2 63.Nb5+ sonrası at a3’e gelip piyonu durdurur (−0.4); 61...Ka6 62.Ne4 Kb5 63.Nxf2 b2 (−0.5) de kazancı kaçırır.',
      diger: [
        { move: '61...Be3', text: '62.Kc4 b2 63.Nb5+ Ka6 64.Na3 ile at piyonu durdurur (Motor: −0.4).' },
        { move: '61...Ka6', text: '62.Ne4 Kb5 63.Nxf2 b2 ile at f2 filini alır ve Beyaz kurtulur (−0.5).' },
      ],
    },
    '62w': {
      text: '62.Nc4+: At şah çeker.',
      amac: 'Siyah şahını kovmak ve b2 karesine bakmak.',
      neden: 'Beyazın kurtuluş yolu yoktur; motor tüm hamleleri −35 civarında görüyor. 62.Ke2 Be3 63.Nc4+ Kc5 64.Nb2 de kaybettirir.',
      diger: [
        { move: '62.Ke2', text: '62...Be3 63.Nc4+ Kc5 64.Nb2 ile aynı sonuç (Motor: −35.2).' },
      ],
    },
    '62b': {
      text: '62...Kb5: Şah b5’te atı vurur; b-piyonu b2’ye ilerleyecek. Suttles terk etti.',
      amac: 'c4 atını kovmak ve b-piyonunu desteklemek.',
      neden: 'Motor 62...Kb5 ile 62...Kc5’i aynı seviyede görüyor (−35.7). 63.Nb2 Be3 64.Ke4 Kb4 ile Siyah şahı atı alır ve piyon vezire çıkar; Beyazın direnecek hiçbir şeyi kalmamıştır.',
      diger: [
        { move: '62...Kc5', text: '63.Na5 Kb4 64.Nc4 Be3 ile aynı sonuç (Motor: −35.75).' },
      ],
    },
  },
  exercises: [
    { id: 'stl-1', kind: 'tekrar', plan: false, title: 'Piyonu yakalamak',
      source: 'Suttles – Tal, Hastings 1973 (58. hamle)',
      fen: '8/P7/1k6/1N3p2/1p1p4/3K4/5b2/8 b - - 0 58',
      prompt: 'Beyazın a7 piyonu vezire bir kare uzakta. Siyah şahı b6’da, beyaz at b5’te. Tal ne oynadı?',
      hint: 'At yemek cazip görünür, ama piyon vezir olursa ne olur? Şah a8 karesini tutmalı.',
      line: ['Kb7', 'Nd6+', 'Kxa7'],
      explanation: '**58...Kb7! 59.Nd6+ Kxa7.** Şah vezirleme karesini tutar ve piyonu alır. 58...Kxb5?? 59.a8=Q kaybeder. Motor: ...Kb7 −3.5, ...Kxb5 +5.5.',
      link: 'Tal’ın oyun sonu planı vezir kanadında piyonları toplamak ve geçer piyonlarını yürütmekti.' },
    { id: 'stl-2', kind: 'tekrar', plan: false, title: 'Piyon koşuyor',
      source: 'Suttles – Tal, Hastings 1973 (60. hamle)',
      fen: '8/k7/8/5N2/1p1p4/3K4/5b2/8 b - - 0 60',
      prompt: 'Siyah a7 piyonunu aldı ama Beyazın atı f5 piyonunu aldı. Siyahın b4 ve d4 piyonları var. En hızlı kazanç yolu hangisi?',
      hint: 'Beyaz şahının b-piyonunun önüne geçmesi için hangi karelere ihtiyacı var?',
      line: ['b3', 'Nd6', 'Kb6'],
      explanation: '**60...b3!** d4 piyonu c3’ü, b3 piyonu c2’yi tutar; Beyaz şahı piyonun önüne geçemez. **61.Nd6 Kb6!** ile şah b5 ve c5 karelerini atın elinden alır; 61...Be3? 62.Kc4 b2 63.Nb5+ sonrası at a3’e gelirdi. Motor: ...b3 −7.1, sonraki en iyi ...Kb6 −4.4; 61...Kb6 −7.2, sonraki en iyi −0.6.',
      link: 'Tal’ın geçer piyonları birbirini destekledi: d4 piyonu b-piyonunun yolunu açık tuttu.' },
    { id: 'stl-3', kind: 'transfer', plan: false, title: 'Geçer piyonu durdurmak',
      source: 'Mieses – Rubinstein, Lahey turnuvası 1921 (52. hamle)',
      fen: '8/4Rp2/2P2k2/2K3pp/B6P/1P1r4/8/8 b - - 2 52',
      prompt: 'Aynı açılıştan (4.exd5 exd5) çıkan bir oyun sonu. Beyazın c6 piyonu ilerlemek istiyor, kalesi e7’de. Siyahın en güçlü devamı nedir?',
      hint: 'Önce e7’deki taşa bakın, sonra c-piyonunu arkasından durdurun.',
      line: ['Kxe7', 'c7', 'Rc3+'],
      explanation: '**52...Kxe7! 53.c7 Rc3+!** Şah kaleyi alır, kale de şah çekip c7 piyonunu arkasından alır (54.Kd4 Rxc7). Motor: ...Kxe7 −5.0, ...Rc3+ +5.4; 53...Rc3+ −5.1, sonraki en iyi +4.6.',
      link: 'Tal 58...Kb7 ve 59...Kxa7 ile yedinci yataydaki a-piyonunu durdurdu; Rubinstein de yedinci yataydaki c-piyonunu aynı açılış yapısından çıkan oyun sonunda durdurdu.' },
    { id: 'stl-4', kind: 'transfer', plan: false, title: 'd5’in savunucusunu almak',
      source: 'Riemann – Paulsen, DSB Kongresi, Leipzig 1879 (12. hamle)',
      fen: 'r2q1rk1/pp3ppp/2n1bb2/3B4/Q7/2N3P1/PPP2P1P/2KR2NR b - - 0 12',
      prompt: 'Aynı yapı: 4.exd5 exd5 5.d4 cxd4 6.Qxd4. Beyazın g2 fili d5 piyonunu aldı. Fil d5’te c3 atıyla ve d1 kalesiyle korunuyor. Siyah ne yapmalı?',
      hint: 'd5’i koruyan taşlardan birini ortadan kaldırın.',
      line: ['Bxc3', 'bxc3', 'Bxd5'],
      explanation: '**12...Bxc3! 13.bxc3 Bxd5** ve 14.Rxd5?? Qxd5 olmaz; Siyah bir taş kazanır. Motor: ...Bxc3 −4.9, sonraki en iyi ...Qb6 +0.6; 13...Bxd5 −4.6, sonraki en iyi −0.5.',
      link: 'Tal 8...d4 ile c3 atını d5’in kontrolünden uzaklaştırdı; Paulsen aynı atı alarak d5’in savunmasını kırdı.' },
  ],
};
