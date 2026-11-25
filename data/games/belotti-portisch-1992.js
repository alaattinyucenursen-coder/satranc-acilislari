// Bruno Belotti – Lajos Portisch, Reggio Emilia turnuvası, Reggio Emilia 1992 (4. tur). Kaynak: PgnMentor (Portisch.pgn).
export default {
  id: 'belotti-portisch-1992',
  theme: '...d4 ile alan, ...c4 kırılmasıyla geçer d-piyonu',
  white: 'Bruno Belotti', black: 'Lajos Portisch',
  whiteShort: 'Belotti', blackShort: 'Portisch',
  event: 'Reggio Emilia turnuvası', site: 'Reggio Emilia', year: 1992, eco: 'B23',
  variation: 'Kapalı Sicilya, 2.Nc3 e6 3.g3 d5 4.exd5 exd5 5.Bg2', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. exd5 exd5 5. Bg2 Nf6 6. d3 d4 7. Ne4 Nxe4 8. Bxe4 Nd7 9. Ne2 Bd6 10. Bg2 O-O 11. O-O Re8 12. Nf4 Ne5 13. h3 Rb8 14. Bd2 b6 15. Nd5 Bb7 16. f4 Bf8 17. Nxb6 Bxg2 18. Kxg2 Rxb6 19. fxe5 Qd5+ 20. Qf3 Qxf3+ 21. Kxf3 Rxb2 22. Bf4 Rxc2 23. Rfc1 Rb2 24. Rcb1 Reb8 25. Rxb2 Rxb2 26. a4 h6 27. h4 Be7 28. h5 Kf8 29. Ke4 Ke8 30. Bc1 Rb3 31. Ra2 Kd7 32. Rb2 Rxb2 33. Bxb2 Kc6 34. g4 a6 35. Bc1 Bg5 36. Bb2 f6 37. e6 Kd6 38. Ba3 Kc6 39. Bb2 Bd2 40. Kf5 Kd6 41. Ba3 Bb4 42. Bc1 c4 43. dxc4 d3 44. c5+ Bxc5 45. Bd2 Ke7 46. a5 Ba3 47. Kg6 Kxe6 48. Kxg7 f5 49. gxf5+ Kxf5 50. Kxh6 Bb2 51. Kh7 Kg4 0-1`,

  summary: 'Oyun, Reggio Emilia’nın 1992/93 yılbaşı turnuvasında oynandı ve 51 hamlede **Siyahın (Portisch) galibiyetiyle** bitti (0-1). chessgames.com’daki çapraz tabloya göre turnuvayı Vaganian 11’de 9 puanla kazandı, Portisch 7 puanla ikinci, Belotti 5,5 puanla yedinci oldu. Açılışta Beyaz Kapalı Sicilya’nın 3.g3 d5 kolunda (veri tabanlarında “Korçnoy varyantı” adıyla geçer) önce 4.exd5 exd5 ile değişti; Portisch 6...d4 ile alan aldı ve 7...Nxe4 ile merkeze gelen atı değişti. Belotti 8.Bxe4 ve 10.Bg2 ile bir tempo harcadı ama oyun dengede kaldı. 17.Nxb6? ile Beyaz bir piyon kazandı, fakat Siyahın kaleleri açık b-hattından ikinci yataya girdi; Portisch 19...Qd5+ ile vezirleri değiştirip daha güçlü 19...Rxb2’yi kaçırdı (Motor: −1.5’ten −0.4’e). Kale ve ardından aynı renkli fil oyun sonunda iki taraf da fırsat kaçırdı: 38...Kc6? 39.Kf5! ile Beyaz kazanabilirdi (Motor: +5.0), Belotti 39.Bb2 oynadı. Oyunu belirleyen fikir **42...c4! 43.dxc4 d3** kırılması oldu: Siyah d-piyonunu Beyaz şahından uzakta geçer piyon yaptı. Belotti 46.a5? ve 47.Kg6? ile şahını şah kanadına götürünce Portisch 47...Kxe6 48.Kxg7 f5! ile ikinci bir geçer piyon yarattı ve Beyaz şahı h7 köşesinde oyun dışında kalınca Belotti terk etti.',
  intro: 'Modülün ana hattı 1.e4 c5 2.Nc3 e6 3.g3 d5 4.Bg2’dir. 365chess veri tabanında 3...d5’ten sonra en sık oynanan hamle ise açık ara **4.exd5**’tir (yaklaşık 1100 oyun; 4.Bg2 ve 4.d3 dört yüzer oyunla izliyor). Belotti de bu yolu seçti: önce merkezde değişti, fili bir hamle sonra 5.Bg2 ile getirdi. Chess.com’da “Mr. Perry” imzalı teori yazısı 4.exd5’i Beyazın en doğru cevabı sayar ama oluşan yapıyı Siyah için rahat bulur: Siyahın daha fazla alanı vardır, kaleleri merkeze kolayca gelir ve tipik planları **bir kaleyi c2’ye sokmak** ve uygun anda ...f5 oynamaktır. Bu oyun o planın ders kitabı gibi bir örneği: 5...Nf6 6.d3 d4 sonrası 4.Bg2 hattındaki temel ...d4 fikri ortaya çıkar, Siyah alan alır ve c3 atını kovar; 22...Rxc2 ile de kale gerçekten c2’ye girer. Fark şu: e-piyonları değiştiği için e-hattı açıktır ve Siyahın d4 piyonu c5 tarafından desteklenen tek ileri piyondur. Bu piyon oyun boyunca Beyazın c3 ve e3 karelerini tuttu, oyun sonunda da ...c4 kırılmasıyla geçer piyona dönüşüp maçı kazandırdı. Macar büyükusta Lajos Portisch konumsal oyunu ve oyun sonu tekniğiyle tanınır; bu oyunda bir piyon eksiğe düştükten sonra bile aktif kalelerle dengeyi kurdu ve uzun oyun sonunda sabırla rakibinin hatasını bekledi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Uzun çapraz:** fili g2’de tutup a8-h1 çaprazından b7 ve a8’e baskı yapmak; Siyah ...b6-Bb7 ile buna karşı çıkınca filleri değiştirmek ya da çaprazı açık tutmak.',
      '**d5 karesi:** ...d4 hamlesinden sonra d5 karesi artık hiçbir Siyah piyonla korunamaz. Atı e2-f4-d5 yolundan bu kareye getirmek (12.Nf4, 15.Nd5) Beyazın en doğal planıydı.',
      '**f4 ile genişlemek:** e5’e yerleşen Siyah atını 16.f4 ile kovalamak ve şah kanadında alan almak. Burada önce 16.Re1 ile e-hattını tartışmak daha sağlamdı (Motor: −0.1).',
      '**Taktik fırsatları doğru tartmak:** 17.Nxb6 bir piyon kazandırdı ama b-hattını Siyah kalelerine açtı; 17.fxe5 ya da 17.Nf6+ ile malzemeyi geri almak dengeyi koruyordu.',
      '**Oyun sonunda e-piyonu:** e5-e6 piyonunu ilerletip Siyah şahını bağlamak ve şahı f5’ten f6/g7 piyonlarına göndermek (39.Kf5! ile kazanç vardı).',
      '**Şahı merkezde tutmak:** aynı renkli fil oyun sonunda Siyahın d-piyonu geçer piyon olunca Beyaz şahının görevi onu durdurmaktı; 46.Ke4/Kf4 ile beraberlik yakındı, 47.Kg6? ise oyunu kaybettirdi.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...d4 ile alan:** d-piyonunu ilerletip c3 atını kovalamak; e4’e gelen atı **...Nxe4** ile değişmek. d4 piyonu c5 ile korunur ve Beyazın c3, e3 karelerini kontrol eder.',
      '**Uyumlu gelişim:** ...Nd7-e5, ...Bd6, ...O-O ve ...Re8 ile taşları açık e-hattına ve merkezdeki e5 karesine yerleştirmek; e5’teki at d3 piyonuna ve f3 karesine bakar.',
      '**Uzun çaprazda karşı oyun:** ...Rb8, ...b6 ve ...Bb7 ile g2 filine karşı çıkmak; filler değişirse Beyazın şahı açılır ve h1-a8 çaprazı Siyaha kalır.',
      '**Açık b-hattı ve ikinci yatay:** b-hattı açılınca kaleyle b2’ye, oradan c2’ye girmek; teori yazılarında da önerilen “kale c2’ye” planı 21...Rxb2 ve 22...Rxc2 ile malzemeyi geri getirdi.',
      '**Aktif şah:** kaleler değişince şahı d7-c6’ya getirip c5 ve d4 piyonlarını desteklemek; fili d2-b4 hattında tutarak Beyaz filini ve e-piyonunu kontrol etmek.',
      '**...c4 kırılması:** d3 piyonu d4’ü durduruyorsa ...c4 ile onu kırıp d-piyonunu serbest bırakmak; piyon d3’e ilerleyince Beyaz şahından uzakta güçlü bir geçer piyon olur.',
      '**İkinci cephe:** Beyaz şahı uzaklaşınca ...Kxe6 ve ...f5! ile şah kanadında ikinci bir geçer piyon yaratıp tek filin iki piyonu durduramamasından yararlanmak.',
    ] },
  },
  critical: [
    { move: '6b', title: '6...d4: alan ve tempo', text: 'Siyah d-piyonunu ilerletir ve c3 atını kovar. At e4’e gelir ama orada 7...Nxe4 ile değişilir. d4 piyonu c5 tarafından korunur, Beyazın c3 ve e3 karelerini tutar ve c1 filinin e3’e gelişini zorlaştırır. Bedeli d5 karesinin boşalmasıdır; Beyaz atını oraya getirmeye çalışacak (15.Nd5). Motor: 6...d4 −0.3, sakin 6...Be7 ise ≈0.0. Bu, 4.Bg2 ana hattındaki 4...d4 fikriyle aynı yapıdır.' },
    { move: '17w', title: '17.Nxb6? piyon kazanan ama hatları açan hamle', text: 'Beyaz b6 piyonunu alır; 17...Bxg2 18.Kxg2 Rxb6 19.fxe5 sonrası gerçekten bir piyon öndedir. Ama b-hattı açılmış, b2 ve c2 piyonları Siyah kalelerine hedef olmuş, şah g2’de korumasız kalmıştır. Motor: 17.fxe5 Bxd5 18.Bf4 (−0.35) ya da 17.Nf6+ Qxf6 18.fxe5 (−0.4) dengeyi tutuyordu; maç hamlesinden sonra −1.6. Belotti malzemeyi saydı ama taş aktivitesini hesaba katmadı.' },
    { move: '19b', title: '19...Qd5+? fazla erken vezir değişimi', text: 'Motor 19...Rxb2! 20.Bf4 Rxa2 21.Rxa2 Qd5+ ile devamı öneriyor (−1.5): kale önce ikinci yataya girer, vezirler tahtada kaldığı için Beyaz şahı da tehlikede kalır. Maç hamlesi vezirleri değiştirdi; 21...Rxb2 ve 22...Rxc2 ile malzeme yine eşitlendi ama Siyahın avantajı küçük bir üstünlüğe indi (Motor: −0.4). Bu oyun boyunca Siyahın kazanmaya en yakın olduğu andı.' },
    { move: '38b', title: '38...Kc6? ve kaçan fırsat', text: 'Motor 38...Kxe6! 39.Bxc5 Be3 ile kesin beraberliği öneriyor (≈0.0). 38...Kc6 sonrası e6 piyonu yaşar ve 39.Kf5! ile Beyaz kazanırdı (Motor: +5.0): 39...c4 40.dxc4 d3 41.Bb4 d2 42.Bxd2 Bxd2 43.Kg6 ile şah g7 ve f6’yı toplayıp e-piyonunu vezire çıkarır. Belotti 39.Bb2 oynadı ve oyun dengeye döndü (−0.4).' },
    { move: '42b', title: '42...c4! 43.dxc4 d3 kırılması', text: 'Siyah c-piyonunu verir ve d-piyonunu d3’e ilerletir. Piyon artık f5’teki Beyaz şahından çok uzaktadır, b4 fili de onu destekler; 43...d3 dışındaki her hamle kaybeder (43...Ke7? 44.Ke4 Kxe6 45.Kxd4, +2.3). Objektif olarak 42...Ke7 biraz daha güçlüydü (Motor: −1.2’ye karşı −0.3), ama ...c4 Beyaza tek doğru yol bırakan, pratikte çok zor bir pozisyon yarattı: 44.c5+! Bxc5 ve 45.Bd2 bulunmak zorundaydı.' },
    { move: '46w', title: '46.a5? sessiz ama zararlı', text: 'Beyazın doğru planı şahı d3 piyonuna götürmekti: 46.Kf4 ya da 46.Ke4 (Motor: −0.4/−0.5) ile şah e6’yı kaybetse bile d3’ü alır ve beraberlik yakındır. 46.a5 piyonu Siyah filin renginde bir kareye (kara kare a5) koyar ve bir tempo kaybettirir; 46...Ba3 sonrası eval −1.3’e iner.' },
    { move: '47w', title: '47.Kg6? şah yanlış yöne gidiyor', text: 'Motor 47.Ke4’ü öneriyor (−1.9): 47...Kxe6 48.Bc3 ile şah d3’e döner ve Siyah zorlanır ama kesin kazanç yoktur. Maç hamlesinden sonra 47...Kxe6 48.Kxg7 f5! ile Siyahın iki geçer piyonu birbirinden uzakta olur ve Beyaz şahı h-hattında oyun dışında kalır (Motor: −5.4).' },
    { move: '48b', title: '48...f5! ikinci geçer piyon', text: 'Siyah g4 piyonunu saptırır. 49.gxf5+ Kxf5 sonrası Siyah şahı merkezde, d3 piyonu Beyaz filini d2’ye bağlıyor, Beyaz şahı ise h6’da piyon toplarken iki kanattan da uzak. Daha yavaş 48...Be7 ya da 48...Bd6 Beyaza şahı geri getirme zamanı verirdi (Motor: −3.1/−2.4’e karşı −5.9).' },
  ],
  lessons: [
    '2.Nc3 e6 3.g3 d5 yapısında **...d4** Siyaha alan ve tempo kazandırır; e4’e gelen at ...Nxe4 ile değişilir. Bedeli boşalan d5 karesidir, bu yüzden Siyah oraya gelecek bir atı her zaman hesaba katmalıdır.',
    'Açılışta gereksiz tempo kaybı (8.Bxe4 sonra 10.Bg2) tek başına kaybettirmez ama inisiyatifi rakibe bırakır; Siyah bu tempoyla ...Re8, ...Ne5 ve ...Rb8’i rahatça getirdi.',
    'Bir piyon kazanan kombinasyonu oynamadan önce rakibin taşlarının ne kadar aktifleşeceğine bakın: 17.Nxb6 b-hattını açtı, Siyahın kaleleri b2 ve c2’yi geri aldı.',
    'Avantajlı tarafın vezir değişiminde acele etmemesi gerekir: 19...Rxb2! vezirler tahtadayken Beyaz şahını da tehlikede tutuyordu; 19...Qd5+ ile değişim avantajın çoğunu sildi.',
    'Aynı renkli fil oyun sonunda **bir piyon kırılması** (42...c4! 43.dxc4 d3) durdurulmuş bir piyonu geçer piyona çevirir; en değerli geçer piyon rakip şahtan uzak olandır.',
    'Oyun sonunda şah, rakibin geçer piyonunu durduran ana taştır; uzak piyon toplamak için ondan uzaklaşmak (47.Kg6?) çoğu zaman kaybettirir.',
    'Piyonlarınızı kendi filinizin rengine değil, rakip filin alamayacağı karelere koyun: 34.g4 ve 34...a6 doğru, 46.a5? ise piyonu Siyah filin vurabileceği kara kareye taşıdı.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 0-1: Lajos Portisch (Siyah) kazandı. 51...Kg4 sonrası Siyahın d3 piyonu Beyaz filini d2’ye bağlıyor, b2 fili h8 karesini tutarak h-piyonunu durduruyor, Siyah şahı da e2’ye yürüyüp d-piyonunu vezire çıkarmaya hazırlanıyordu (Motor: −4.7, en iyi devam 51...Bf6 ile −7.1). Beyaz şahı h7 köşesinde oyun dışında kaldığı için Belotti terk etti.' },
    { q: 'Siyah neden 6...d4 oynadı, sakin bir gelişim hamlesi değil?', a: '6...d4 tempoyla c3 atını kovaladı ve merkezde alan aldı; at e4’e gelince 7...Nxe4 ile Beyazın en aktif taşı değişildi. d4 piyonu c5 ile korunur ve c3, e3 karelerini tuttuğu için Beyazın c1 filini ve c3/e3 piyon hamlelerini kısıtlar. 6...Be7 ya da 6...h6 de oynanabilirdi (Motor: ≈0.0/−0.1), ama 6...d4 motorun ilk tercihi (−0.3) ve Siyaha net bir plan veriyor.' },
    { q: '17.Nxb6 neden hataydı, sonuçta bir piyon kazandırdı?', a: 'Piyon kazanıldı ama karşılığında b-hattı açıldı, g2’deki fil değişildi ve Beyaz şahı korumasız kaldı. 18...Rxb6 19.fxe5 sonrası Siyahın kalesi b2’ye, veziri d5’e gelerek hem piyonları hem şahı vurabiliyordu (Motor: −1.6). 17.fxe5 Bxd5 18.Bf4 ya da 17.Nf6+ Qxf6 18.fxe5 ile malzeme eşit kalıyor ve oyun dengede kalıyordu (Motor: −0.35/−0.4).' },
    { q: 'Portisch 19. hamlede ne kaçırdı?', a: '19...Rxb2! 20.Bf4 Rxa2 21.Rxa2 Qd5+ ile Siyah piyonu geri alıp vezirleri tahtada tutuyordu; Beyaz şahı g2’de açık kaldığı için motor Siyahı net üstün görüyor (−1.5). 19...Qd5+ 20.Qf3 Qxf3+ ile vezirler değişti, malzeme 22...Rxc2 ile yine dengelendi ama Siyahın üstünlüğü küçük bir avantaja indi (−0.4).' },
    { q: '38...Kc6’dan sonra Beyaz nasıl kazanabilirdi?', a: '39.Kf5! ile şah f6 piyonuna saldırır ve e-piyonunun arkasına geçer. 39...c4 40.dxc4 d3 41.Bb4 d2 42.Bxd2 Bxd2 43.Kg6 sonrası şah g7 ve f6’yı alır, e-piyonu da vezire yürür (Motor: +5.0 ile +5.6 arası). Belotti 39.Bb2 oynayınca Siyah 39...Bd2 ile e7 karesini tuttu ve oyun dengeye döndü.' },
    { q: '42...c4 kırılmasının amacı neydi?', a: 'd4 piyonu d3 piyonuyla durdurulmuştu ve Beyaz şahı bir gün ona ulaşabilirdi. 42...c4 43.dxc4 d3 ile piyon bir kare ilerledi, Beyaz şahından (f5) uzaklaştı ve b4 filinin desteğinde d2’ye yöneldi. Beyaz 44.c5+! ile fili saptırmak ve 45.Bd2 ile piyonu durdurmak zorunda kaldı. Objektif olarak 42...Ke7 daha güçlüydü (Motor: −1.2), ama ...c4 Beyaz şahını tamamen yanlış kanatta bıraktı.' },
    { q: 'Beyaz son bölümde nerede kurtulabilirdi?', a: 'Kırılmadan sonra beraberlik hâlâ mümkündü: 46.Kf4 ya da 46.Ke4 (Motor: −0.4/−0.5) ile şah e6’yı verse bile d3’ü toplar. 46.a5? sonrası bile 47.Ke4 Kxe6 48.Bc3 ile direnç sürerdi (−1.9). 47.Kg6? ise Siyaha 47...Kxe6 48.Kxg7 f5! fırsatını verdi ve oyun −5’in altına düştü.' },
    { q: 'Siyahın kalesi neden c2’ye bu kadar önemliydi?', a: 'Kapalı Sicilya’nın 4.exd5 exd5 yapısında Siyahın tipik karşı oyunu açık hatlardan ikinci yataya girmektir; chess.com’daki teori yazısı da “kaleyi c2’ye getirmeyi” Siyahın ana planlarından biri olarak anar. Bu oyunda 21...Rxb2 ve 22...Rxc2 ile Siyah hem 17.Nxb6’da verdiği piyonu geri aldı hem de bir piyon öne geçti; Beyaz kaleleri 23.Rfc1 ve 24.Rcb1 ile sadece savunmaya geçebildi.' },
    { q: '48...f5 neden bu kadar güçlüydü?', a: 'f-piyonu g4 piyonunu saptırdı: 49.gxf5+ Kxf5 sonrası Siyah şahı merkeze girdi, Beyazın şah kanadındaki piyonları dağıldı. Beyaz filinin d2’de d3 piyonunu tutmak zorunda olması ve şahının h6/h7’de uzak kalması, Siyah şahının serbestçe e2’ye yürüyüp d-piyonunu desteklemesine izin verdi. Yavaş 48...Be7 ile Beyaz şahını geri getirme zamanı bulurdu (Motor: −3.1’e karşı −5.9).' },
  ],
  notes: {
    '1w': {
      text: '1.e4: şah piyonu iki kare ilerler, d5 ve f5 karelerini kontrol eder, f1 filine ve vezire yol açar.',
      amac: 'Merkezde yer tutmak ve hızlı gelişmek. Beyaz bu oyunda ileride d4 yerine g3-Bg2 kuruluşuyla, yani kapalı bir sistemle devam edecek.',
      neden: 'Motor ana ilk hamleleri birbirine çok yakın görür; 1.e4 Sicilya’ya ve Kapalı Sicilya sistemlerine giden yoldur.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; daha kapalı ve konumsal oyunlar (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek başlangıç; hamle sırasına göre birçok açılışa dönebilir (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine yandan baskı yapar.',
      amac: 'Dengesiz bir yapıyla kazanma şansı aramak: c-piyonu ileride d-piyonuyla değiştirilirse Siyahın merkezde fazla piyonu kalır.',
      neden: 'Portisch geniş bir repertuvara sahipti; Sicilya ona daha zayıf bir rakibe karşı oyunu karışık tutma imkânı verir. Motor 1...e5 ile hemen hemen aynı değerlendirir (+0.3).',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; daha simetrik yapılar (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması; Siyah ...d5 ile merkezi ister (Motor: +0.35).' },
      ],
    },
    '2w': {
      text: '2.Nc3: Kapalı Sicilya’ya hazırlık. At d5 ve e4 karelerini kontrol eder; Beyaz d4’ü hemen oynamaz.',
      amac: 'Açık Sicilya’nın derin teorisinden kaçıp g3-Bg2, d3 ve f4 ile kendi kuruluşunu kurmak.',
      neden: '2.Nc3 hamle sırası Beyaza esneklik verir: Siyahın cevabına göre ya 3.Nf3 ve d4 ile Açık Sicilya’ya ya da 3.g3 ile Kapalı Sicilya’ya geçebilir.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya giden ana yol (Motor: +0.46).' },
        { move: '2.c3', text: 'Alapin; d4 ile tam merkez kurma fikri (Motor: +0.33).' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah ...d5 hamlesini hazırlar ve f8 filine yol açar.',
      amac: 'Merkezi hemen ...d5 ile tartışmak; Kapalı Sicilya’nın yavaş kuruluşuna karşı aktif bir yol.',
      neden: '2...e6, 2...Nc6 ve 2...d6 gibi yavaş hamlelerin aksine Beyazın e4 piyonunu hemen sorgulamaya hazırlanır. Beyaz 3.Nf3 oynarsa oyun Taimanov/Kan gibi Açık Sicilya yapılarına dönebilir.',
      diger: [
        { move: '2...Nc6', text: 'Klasik Kapalı Sicilya; 3.g3 g6 4.Bg2 Bg7 ile simetrik kuruluş (Motor: +0.44).' },
        { move: '2...d6', text: 'Esnek; ...e5 ya da ...g6 kuruluşlarına gidebilir (Motor: +0.35).' },
      ],
    },
    '3w': {
      text: '3.g3: fil g2’ye gelip uzun çaprazı kullanacak; Beyaz Kapalı Sicilya kuruluşunu seçer.',
      amac: 'g2 filiyle d5 ve b7 karelerine baskı yapmak, ardından d3, Nge2 ve f4 ile şah kanadında oynamak.',
      neden: '3.g3 Siyahın ...d5’ine izin verdiği için motor 3.Nge2 ya da 3.Nf3’ü biraz daha iddialı görür (+0.35/+0.33’e karşı 0.0). Belotti yine de bildiği sakin kuruluşu tercih etti.',
      diger: [
        { move: '3.Nge2', text: '“Bukalemun” sırası; d4 ya da g3 seçeneğini açık tutar (Motor: +0.37).' },
        { move: '3.Nf3', text: 'Açık Sicilya’ya geçiş; 3...a6 4.d4 cxd4 5.Nxd4 (Motor: +0.33).' },
      ],
    },
    '3b': {
      text: '3...d5! Siyah, Beyazın fili henüz g2’ye gelmeden merkezde gerginlik yaratır.',
      amac: 'e4 piyonunu hemen sorgulamak; Beyaz değişirse açık bir merkez, beklerse ...d4 ile alan kazanmak.',
      neden: 'Fil g2’ye gelmeden önce ...d5 en etkili anıdır: 4.Bg2 ile e4 savunulsa bile 4...d4 alan kazandırır. Motorun ilk tercihi (0.0). 3...Nc6 4.Bg2 sonrası ise ...d5 hemen mümkün değildir ve Siyah ...d6’ya razı olur.',
      diger: [
        { move: '3...Nc6', text: 'Sağlam ama Korçnoy fikrinin ruhuna uymaz: 4.Bg2 Nf6 5.d3 d5 ile benzer yapılara gidebilir (Motor: +0.12).' },
        { move: '3...Nf6', text: '4.e5 Nd5 5.Nxd5 exd5 ile başka bir yapı (Motor: +0.27).' },
      ],
    },
    '4w': {
      text: '4.exd5: Beyaz merkezde hemen değişir; fili bir hamle sonra 5.Bg2 ile getirecek.',
      amac: 'Merkezi açıp Siyahın d5 piyonunu hedef yapmak; g2 filiyle bu piyona baskı kurmak.',
      neden: '365chess’e göre bu konumda en çok oynanan hamle (yaklaşık 1100 oyun), chess.com teori yazısı da onu en doğru hamle sayar. 4.Bg2 d4 5.Nce2 sonrası Siyah alanı alır (Motor: −0.2); 4.exd5 en azından d-piyonunu yalnızlaştırma şansı verir.',
      diger: [
        { move: '4.Bg2', text: 'Modülün ana hattı: 4...d4 5.Nce2 ile Siyah alan kazanır (Motor: −0.19).' },
        { move: '4.f4', text: 'Daha keskin; 4...dxe4 5.Nxe4 ile açık oyun (Motor: −0.09).' },
        { move: '4.d3', text: 'e4’ü piyonla korur; Bg2 sonra gelir (veri tabanında sık).' },
      ],
    },
    '4b': {
      text: '4...exd5: piyonla geri alınır; e-hattı açılır ve Siyahın d5 piyonu merkezde kalır.',
      amac: 'Merkezde piyon tutmak ve c8 filine yol açmak; açık e-hattını ileride kaleyle kullanmak.',
      neden: 'Tek iyi geri alış: 4...Nf6? 5.Bb5+ Bd7 6.dxe6 fxe6 sonrası Siyahın yapısı bozulur (Motor: +1.15). 4...exd5 sonrası Siyahın d-piyonu c5 ile birlikte merkezde alan tutar.',
      diger: [
        { move: '4...Nf6', text: '5.Bb5+! Bd7 6.dxe6 fxe6 ve Siyahın e6 piyonu zayıflar (Motor: +1.15).' },
        { move: '4...Be7', text: '5.Bg2 exd5 6.Nxd5 ile Beyaz d5’i ele geçirir (Motor: +1.4).' },
      ],
    },
    '5w': {
      text: '5.Bg2: fil uzun çapraza gelir ve d5 piyonuna baskı yapar.',
      amac: 'd5’e baskıyı artırmak; Siyahı ya d5’i savunmaya ya da ...d4 ile ilerlemeye zorlamak.',
      neden: '5.d4 ile merkezde hemen yüzleşmek (5...cxd4 6.Qxd4) ya da 5.Nf3 eşit derecede iyiydi (Motor: 0.0). Belotti kuruluşuna sadık kaldı; 5.Bg2 (−0.17) küçük ama anlamsız bir fark.',
      diger: [
        { move: '5.d4', text: '5...cxd4 6.Qxd4 Nf6 7.Bg5 ile açık bir oyun; yalnız d5 piyonu hedef olur (Motor: 0.0).' },
        { move: '5.Nf3', text: '5...d4 6.Qe2+ Be7 7.Ne4 ile benzer yapılar (Motor: 0.0).' },
      ],
    },
    '5b': {
      text: '5...Nf6: at f6’dan d5’i korur ve şah kanadını geliştirir.',
      amac: 'd5 piyonunu desteklemek, rok hazırlamak ve gerekirse ...d4 ile devam etmek.',
      neden: 'Motorun ilk tercihi (−0.18). Hemen 5...d4 de oynanabilirdi ama 6.Qe2+! Be7 7.Nd5 ile at d5’e yerleşir (0.0); önce ...Nf6 bu kareyi kontrol eder.',
      diger: [
        { move: '5...d4', text: '6.Qe2+ Be7 7.Nd5 ile Beyazın atı d5’te güçlü durur (Motor: 0.0).' },
        { move: '5...Ne7', text: 'At d5’i e7’den destekler ama c8 filini kapatır (Motor: +0.22).' },
      ],
    },
    '6w': {
      text: '6.d3: d-piyonu c4 ve e4 karelerini kontrol eder, c1 filinin yolunu açar.',
      amac: 'Kapalı Sicilya kuruluşunu tamamlamak: d3, Nge2 ve rok. d3 piyonu Siyahın ...d4 ile kurduğu piyon zincirine karşı bir dayanaktır.',
      neden: 'Motorun ilk tercihi (−0.17). 6.Nge2 d4 7.Ne4 Nxe4 8.Bxe4 sonrası benzer bir oyun gelir ama atın gidecek karesi azalır (−0.44).',
      diger: [
        { move: '6.Nf3', text: '6...d4 7.Nb5 Nc6 8.O-O ile at b5’e gider (Motor: −0.27).' },
        { move: '6.Nge2', text: '6...d4 7.Ne4 Nxe4 8.Bxe4 ile oyundaki yapıya benzer (Motor: −0.44).' },
      ],
    },
    '6b': {
      text: '6...d4! piyon ilerler ve c3 atını kovar.',
      amac: 'Merkezde alan almak ve tempo kazanmak; d4 piyonu c3 ve e3 karelerini tutarak Beyazın taşlarını kısıtlar.',
      neden: 'Motorun ilk tercihi (−0.28). 4.Bg2 ana hattındaki ...d4 fikri burada da ortaya çıkar. Bedeli d5 karesinin boşalmasıdır, ama Siyah c3 atını kovalayarak bu kareye gelmesini şimdilik engelliyor.',
      diger: [
        { move: '6...Be7', text: 'Sakin gelişim; 7.Bg5 O-O 8.Bxf6 Bxf6 ile d5 zayıflayabilir (Motor: 0.0).' },
        { move: '6...h6', text: 'Bg5’i önler; 7.Nge2 Nc6 ile esnek (Motor: −0.14).' },
      ],
    },
    '7w': {
      text: '7.Ne4: at merkezde aktif bir kareye gelir ve f6 atına saldırır.',
      amac: 'Atı tempo kaybetmeden merkeze getirmek; Nxf6+ ile Siyahın yapısını bozmayı tehdit etmek.',
      neden: 'Motorun ilk tercihi (−0.21). 7.Nce2 pasiftir (−0.46). 7.Qe2+ Be7 8.Ne4 ile önce vezirle şah çekmek de mümkündü ama veziri erken çıkarır.',
      diger: [
        { move: '7.Nce2', text: 'Güvenli ama pasif; 7...Nc6 8.Nf3 Bd6 ile Siyah rahat gelişir (Motor: −0.46).' },
        { move: '7.Qe2+', text: '7...Be7 8.Ne4 O-O ile benzer oyun (Motor: −0.33).' },
      ],
    },
    '7b': {
      text: '7...Nxe4: Siyah merkezdeki atı hemen değişir.',
      amac: 'Beyazın en aktif taşını tahtadan almak ve Nxf6+ ile yapının bozulmasını önlemek.',
      neden: 'Motorun açık ara tercihi (−0.28). 7...Nc6 8.Bg5 ile Beyaz f6 atını bağlar (+0.09); 7...h6 8.Nxf6+ Qxf6 9.Qe2+ ile Siyah rok hakkını zorlaştırır (+0.14).',
      diger: [
        { move: '7...Nc6', text: '8.Bg5 Be7 9.Bxf6 Bxf6 ile Beyaz d5 karesine yaklaşır (Motor: +0.09).' },
        { move: '7...Be7', text: 'Atı değiştirmeye izin verir; 8.Nxf6+ Bxf6 9.Qe2+ Qe7 10.Nf3 ile Beyaz rahat (Motor: +0.24).' },
      ],
    },
    '8w': {
      text: '8.Bxe4: fil alır ve e4’e gelir.',
      amac: 'Fili merkezde tutmak ve b7, h7 piyonlarına bakmak; d3 piyonunun yapısını bozmamak.',
      neden: 'Motorun ilk tercihi (−0.12); 8.dxe4 d-hattını açar ama e4 piyonu zayıf kalır (−0.26). Ancak fil e4’te ...Nd7-f6 ya da ...Re8 ile tempo kaybedecek, Belotti de 10.Bg2 ile geri dönecek.',
      diger: [
        { move: '8.dxe4', text: 'd-hattı açılır, e4 piyonu d5’i kontrol eder; 8...Nc6 9.Ne2 Bd6 (Motor: −0.26).' },
        { move: '8.Qe2', text: '8...Nc6 9.Qxe4+ Be7 ile vezir erken merkeze gelir (Motor: −0.39).' },
      ],
    },
    '8b': {
      text: '8...Nd7: at d7’den e5 ve f6 karelerine yönelir.',
      amac: 'Atı e5’e getirip merkeze yerleştirmek; e5’ten d3 ve f3 karelerine baskı yapmak. Gerekirse ...Nf6 ile e4 filine tempo kazanmak.',
      neden: 'Motor 8...Nc6’yı biraz daha iyi görüyor (−0.12’ye karşı +0.22): at c6’dan e5’e de gidebilir ve d4’ü destekler. Portisch ...Nd7 ile c-piyonunun önünü açık tuttu ve atı Ne5 planına hazırladı.',
      diger: [
        { move: '8...Nc6', text: '9.Qh5 Be6 10.Ne2 Qd7 ile doğal gelişim (Motor: −0.12).' },
        { move: '8...Bd6', text: '9.Nf3 O-O 10.O-O h6 ile esnek (Motor: 0.0).' },
      ],
    },
    '9w': {
      text: '9.Ne2: at e2’den f4’e gidecek.',
      amac: 'Atı f4 üzerinden d5 karesine getirmek; Siyahın ...d4 sonrası boşalttığı kareyi kullanmak.',
      neden: 'At f3’e gidemez çünkü e4’teki fil yolu kapatır; e2-f4-d5 rotası en mantıklısıdır. Motor 9.Bg2 ile fili hemen geri çekmeyi biraz daha iyi görüyor (+0.14’e karşı −0.04).',
      diger: [
        { move: '9.Bg2', text: '9...Be7 10.Nf3 O-O 11.O-O ile normal gelişim (Motor: +0.14).' },
        { move: '9.Qe2', text: '9...Be7 10.Bg5 h6 ile e-hattında baskı (Motor: +0.04).' },
      ],
    },
    '9b': {
      text: '9...Bd6: fil d6’ya gelişir ve f4 karesine bakar.',
      amac: 'Beyazın Nf4 planını zorlaştırmak, h2’ye bakmak ve rok yapmak.',
      neden: 'd6’daki fil hem şah kanadına baskı kurar hem de e5’e gelecek atı arkadan destekler. Motor 9...Nf6 ile fil e4’e tempo kazanmayı eşdeğer görür (−0.10’a karşı −0.06).',
      diger: [
        { move: '9...Nf6', text: '10.Bg2 Bd6 11.O-O O-O ile tempo kazanılır (Motor: −0.10).' },
        { move: '9...g6', text: 'Fili g7’ye getirmek; uzun çaprazda d4’ü destekler ama şah kanadını zayıflatır (Motor: −0.03).' },
      ],
    },
    '10w': {
      text: '10.Bg2: fil uzun çapraza döner.',
      amac: 'Fili ...Nf6 ya da ...Re8 saldırılarından önce güvenli kareye almak ve uzun çaprazı tutmak.',
      neden: 'Fil 8.Bxe4 ile gelip iki hamle sonra geri döndü; bu bir tempo kaybıdır. Motor 10.c3 ya da 10.O-O’yu öneriyor (−0.05): 10.c3 ile d4 piyonu hemen sorgulanır.',
      diger: [
        { move: '10.c3', text: 'd4’e saldırır; 10...O-O 11.O-O Nf6 12.cxd4 ile merkez açılır (Motor: −0.05).' },
        { move: '10.O-O', text: '10...O-O 11.c3 Nf6 ile benzer (Motor: −0.06).' },
      ],
    },
    '10b': {
      text: '10...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenliğe almak ve f8 kalesini e8’e getirmeye hazırlamak.',
      neden: 'Motorun ilk tercihi (−0.27). 10...Ne5 hemen 11.f4 ile kovalanabilir (0.0); önce rok, sonra ...Re8 ve ...Ne5 daha sağlam.',
      diger: [
        { move: '10...Ne5', text: '11.O-O O-O 12.f4 Ng4 ile at kovalanır (Motor: 0.0).' },
        { move: '10...Nf6', text: '11.O-O O-O 12.Re1 Re8 ile simetrik gelişim (Motor: −0.10).' },
      ],
    },
    '11w': {
      text: '11.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenliğe almak ve f1 kalesini f-hattına koymak; ileride f4 planını desteklemek.',
      neden: 'Motorun ilk tercihi (−0.24). 11.c3 Ne5 sonrası merkez açılmadan Siyahın taşları aktifleşir (−0.50).',
      diger: [
        { move: '11.h3', text: '...Ne5-g4 ve ...Bg4 fikirlerini önceden önler (Motor: −0.39).' },
        { move: '11.c3', text: '11...Ne5 12.O-O Re8 13.cxd4 cxd4 ile Siyah rahat (Motor: −0.50).' },
      ],
    },
    '11b': {
      text: '11...Re8: kale açık e-hattına gelir.',
      amac: 'e2 atına ve e-hattına baskı yapmak; e5’e gelecek atı arkadan desteklemek.',
      neden: 'Motor 11...Ne5 ile aynı değerde görür (−0.31). Önce kalenin gelmesi, Ne5 sonrası f4 ile atın kovalanmasını zorlaştırır: at kaçarsa e-hattı açılır ve e2 atı hedef olur.',
      diger: [
        { move: '11...Ne5', text: '12.f4 Nc6 13.f5 Re8 ile Beyaz şah kanadında alan alır (Motor: −0.31).' },
        { move: '11...h6', text: 'Bg5’i önler; 12.c3 Ne5 13.Bf4 (Motor: −0.18).' },
      ],
    },
    '12w': {
      text: '12.Nf4: at f4’e gelir; d5 ve e6 karelerine göz koyar.',
      amac: 'Atı d5 karesine getirmek ve e-hattından çekilerek Re8’in baskısından kurtarmak.',
      neden: 'Motorun ilk tercihi (−0.26). At e2’de kalırsa e-hattında bağlı gibidir; f4’ten hem d5’e hem h5’e gidebilir.',
      diger: [
        { move: '12.h3', text: 'Önce ...Ne5-g4’ü önler; 12...h6 13.Re1 (Motor: −0.30).' },
        { move: '12.Bf4', text: 'Fil değişimini teklif eder; 12...Nf6 13.Re1 h6 14.Bxd6 (Motor: −0.35).' },
      ],
    },
    '12b': {
      text: '12...Ne5: at e5’te merkeze yerleşir; d3, f3, g4 ve c4 karelerine bakar.',
      amac: 'Atı merkezin en iyi karesine koymak ve ...Ng4 ya da ...Bg4 ile şah kanadında oyun aramak.',
      neden: 'Motorun ilk tercihi (−0.30). e5’teki at d6 filiyle korunur ve f4 piyonu gelene kadar kovalanamaz. 12...Rb8 de eşdeğerdi.',
      diger: [
        { move: '12...Rb8', text: 'Vezir kanadı planını önce başlatır; 13.Re1 Ne5 14.h3 b5 (Motor: −0.30).' },
        { move: '12...h6', text: 'Şaha luft açar; 13.Bd2 Ne5 14.h3 (Motor: −0.23).' },
      ],
    },
    '13w': {
      text: '13.h3: ...Bg4 ve ...Ng4 önlenir.',
      amac: 'Siyahın taşlarının g4 karesini kullanmasını engellemek ve ileride g4 ile alan kazanmaya hazırlanmak.',
      neden: 'Motorun ilk tercihi (−0.25). 13.Bd2? Bg4! 14.f3 Bd7 sonrası Beyazın şah kanadı zayıflar (−0.73); h3 bunu önceden önler.',
      diger: [
        { move: '13.Bd2', text: '13...Bg4 14.f3 Bd7 ile e3 karesi zayıflar (Motor: −0.73).' },
        { move: '13.b3', text: '13...Bg4 14.f3 Bd7 15.Nh3 (Motor: −0.55).' },
      ],
    },
    '13b': {
      text: '13...Rb8: kale b-hattına gelir; ...b6 ve ...Bb7 hazırlanır.',
      amac: 'Fili b7’ye getirmek için ...b6 oynamak ve b-hattı açılırsa kaleyi hazır tutmak; g2 filinin b7’ye baskısını önceden kaldırmak.',
      neden: 'Fil c8’den yalnızca d7’ye gelişebiliyordu; 13...Bd7 ise b7 piyonunu g2 filine bırakır (14.Bxb7 g5 15.Nh5 Bxh3 ile keskin, Motor: −0.32). Rb8 sakin ve sağlam: kale ileride açılan b-hattında çok işe yarayacak.',
      diger: [
        { move: '13...Bd7', text: '14.Bxb7 g5 15.Nh5 Bxh3 ile keskin bir oyun (Motor: −0.32).' },
        { move: '13...h6', text: '14.Nh5 Nc6 15.Re1 (Motor: −0.26).' },
      ],
    },
    '14w': {
      text: '14.Bd2: fil d2’ye gelişir.',
      amac: 'Vezir kanadındaki kaleyi bağlamak; fil d2’den b4 ve a5’e, f4 açılırsa g5’e bakabilir.',
      neden: 'd4 piyonu e3 karesini tuttuğu için fil için doğal kare yok; d2 mütevazi ama güvenli. Motor 14.Nd5’i biraz daha iyi görüyor (−0.26’ya karşı −0.34).',
      diger: [
        { move: '14.Nd5', text: 'At hemen d5’e; 14...Be6 15.Bd2 Bf8 16.Nf4 (Motor: −0.26).' },
        { move: '14.Re1', text: 'e-hattını tartışmak; 14...Bf8 15.g4 b5 (Motor: −0.33).' },
      ],
    },
    '14b': {
      text: '14...b6: fil b7’ye gelecek ve g2 filine karşı çıkacak.',
      amac: 'c8 filini uzun çapraza getirip Beyazın g2 filini etkisizleştirmek ya da değişmek.',
      neden: 'Motorun ilk tercihi (−0.25). 14...b5 daha fazla alan alır ama c5 piyonunu desteksiz bırakır. Ancak b6 piyonu daha sonra d5’e gelecek ata hedef olacak (17.Nxb6).',
      diger: [
        { move: '14...b5', text: '15.Re1 Bb7 16.Bxb7 Rxb7 ile vezir kanadında alan (Motor: −0.22).' },
        { move: '14...Bf8', text: 'Fili önce güvenli kareye alır; 15.a4 b6 16.a5 (Motor: −0.23).' },
      ],
    },
    '15w': {
      text: '15.Nd5: at d5’e yerleşir; ...d4 hamlesinden sonra bu kare Siyah piyonlarıyla korunamaz.',
      amac: 'Atı merkezde ileri bir karede tutmak, b6 ve f6’ya baskı yapmak ve g2 filinin çaprazını desteklemek.',
      neden: 'Motorun ilk tercihi (−0.28). d5 Beyazın açılıştan beri hedeflediği karedir. At orada c7, e7, b6 ve f6 karelerini vurur.',
      diger: [
        { move: '15.Re1', text: '15...Bf8 16.Nd5 Bxh3 ile Siyah h3’ü alabilir (Motor: −0.40).' },
        { move: '15.b3', text: '15...Bf8 16.Qe2 Qd7 (Motor: −0.41).' },
      ],
    },
    '15b': {
      text: '15...Bb7: fil b7’de d5 atına ve uzun çapraza baskı yapar.',
      amac: 'd5 atını değişmeye zorlamak ve Bxg2 ile Beyaz şahını açmak.',
      neden: 'Plan hamlesi. Motor 15...Bf8’i biraz daha iyi görüyor (−0.39’a karşı −0.20): fil hemen güvenli kareye çekilir, 16.Re1 Bxh3! 17.Bxh3 Qxd5 ile Siyah piyon kazanır. 15...Bb7 sonrası d6 fili hâlâ ata açıktır.',
      diger: [
        { move: '15...Bf8', text: '16.Re1 Bxh3 17.Bxh3 Qxd5 ile piyon kazanılır (Motor: −0.39).' },
        { move: '15...Be6', text: '16.Re1 Ng6 17.Qh5 f6 ile d5 atına karşı çıkılır (Motor: −0.22).' },
      ],
    },
    '16w': {
      text: '16.f4: f-piyonu e5 atına saldırır.',
      amac: 'Atı merkezden kovalamak ve şah kanadında alan kazanmak; fxe5 ile e-hattını kapatmak.',
      neden: 'Mantıklı görünse de e3 ve g3 karelerini zayıflatır ve g2 filinin arkasını boşaltır. Motor 16.Re1’i öneriyor (−0.06): e-hattında Siyah kalesiyle yüzleşmek, f4’ü daha uygun bir ana saklamak.',
      diger: [
        { move: '16.Re1', text: '16...Qd7 17.Qh5 f6 18.f4 ile daha iyi hazırlanmış f4 (Motor: −0.06).' },
        { move: '16.Qh5', text: '16...Bf8 17.Rae1 f6 18.f4 (Motor: −0.45).' },
      ],
    },
    '16b': {
      text: '16...Bf8: fil f8’e çekilir; Siyah atı kurtarmaz.',
      amac: 'Fili d5 atının saldırısından kurtarmak ve 17.fxe5 Bxd5 ile malzemeyi geri almak.',
      neden: 'Siyah atı feda etmez; d5 atı korunmasız kalır: 17.fxe5 Bxd5 sonrası malzeme denktir. 16...Ng6 (−0.35) de iyiydi ama 16...Bf8 Beyazı kararsızlığa itti ve 17.Nxb6 hatasını kışkırttı.',
      diger: [
        { move: '16...Ng6', text: 'At güvenli kareye çekilir; 17.Qh5 Bf8 18.Rae1 Qd7 (Motor: −0.35).' },
        { move: '16...Nc6', text: '17.a3 Ne7 18.Nxe7+ Qxe7 ile daha pasif (Motor: −0.11).' },
      ],
    },
    '17w': {
      text: '17.Nxb6? Beyaz b6 piyonunu alır; maddi açıdan bir piyon kazanacak.',
      amac: 'Piyon kazanmak ve aynı anda d5’teki atı Bxd5 değişiminden kurtarmak.',
      neden: 'Hesap doğruydu: 17...Bxg2 18.Kxg2 Rxb6 19.fxe5 ile Beyaz bir piyon öne geçer. Ama b-hattı açılır, g2 fili gider ve b2/c2 piyonları Siyah kalelerine açık kalır; değerlendirme −1.6’ya iner. Daha sağlam olan malzemeyi hemen eşitlemekti.',
      diger: [
        { move: '17.fxe5', text: '17...Bxd5 18.Bf4 Rc8 19.b3 ile malzeme eşit ve oyun dengede (Motor: −0.35).' },
        { move: '17.Nf6+', text: '17...Qxf6 18.fxe5 Qe6 19.Bf4 ile at desperado olarak verilir, malzeme eşit (Motor: −0.4).' },
        { move: '17.Re1', text: '17...Bxd5 18.Rxe5 Rxe5 19.fxe5 b5 (Motor: −0.6).' },
      ],
    },
    '17b': {
      text: '17...Bxg2: Siyah önce g2 filini değişir.',
      amac: 'Uzun çaprazdaki Beyaz filini almak ve şahı açmak; ardından b6 atını kaleyle almak.',
      neden: 'Doğru sıra: önce 17...Bxg2 18.Kxg2, sonra 18...Rxb6 ile at alınır ve b-hattı açılır (Motor: −1.6). 17...Qxb6? 18.Bxb7 Rxb7 19.fxe5 ile Beyaz daha iyi kurtulur (−0.6).',
      diger: [
        { move: '17...Qxb6', text: '18.Bxb7 Rxb7 19.fxe5 Qg6 ile Siyahın avantajı küçük (Motor: −0.6).' },
        { move: '17...Nxd3', text: '18.cxd3 Bxg2 19.Kxg2 axb6 ile karışık (Motor: −1.2).' },
      ],
    },
    '18w': {
      text: '18.Kxg2: şahla geri alınır; tek iyi hamle.',
      amac: 'Taşı geri almak; başka her hamle büyük malzeme kaybeder.',
      neden: 'Zorunlu: 18.fxe5? Bxf1 19.Qxf1 Qxb6 (Motor: −5.5) ya da 18.Rf2? Bxh3 (−5.3) bir kale ya da taş kaybettirir.',
      diger: [
        { move: '18.fxe5', text: '18...Bxf1 19.Qxf1 Qxb6 ile Siyah bir kale fazlası (Motor: −5.5).' },
      ],
    },
    '18b': {
      text: '18...Rxb6: kale b6 atını alır ve b-hattına yerleşir.',
      amac: 'Taşı geri almak ve b-hattından b2 piyonuna baskı kurmak.',
      neden: 'Motorun ilk tercihi (−1.66). 18...Qxb6? 19.fxe5 Qc6+ 20.Qf3 ile vezirler değişir (−0.3); kale b6’da hem b-hattını tutar hem de veziri d-hattında serbest bırakır.',
      diger: [
        { move: '18...Qxb6', text: '19.fxe5 Qc6+ 20.Qf3 Qxf3+ ile avantaj azalır (Motor: −0.3).' },
        { move: '18...Nxd3', text: '19.cxd3 axb6 20.Re1 b5 (Motor: −1.3).' },
      ],
    },
    '19w': {
      text: '19.fxe5: Beyaz e5 atını alır; tek iyi hamle.',
      amac: 'Taşı almak ve bir piyon fazlasıyla kalmak.',
      neden: 'Zorunlu: 19.b3? Nc6 ya da 19.Re1? Qa8+ ile Beyaz taş geri alamaz (Motor: −4.3/−4.4). Ama artık b2 ve c2 piyonları zayıf, şah g2’de açık.',
      diger: [
        { move: '19.Re1', text: '19...Qa8+ 20.Kf2 Nc6 ile Siyah taş fazlası (Motor: −4.3).' },
      ],
    },
    '19b': {
      text: '19...Qd5+? Siyah şah çeker ve vezir değişimine gider.',
      amac: 'Şahı tehdit edip vezirleri değiştirmek; ardından b2 ve c2 piyonlarını kalelerle toplamak.',
      neden: 'Güvenli ama fazla erken bir sadeleştirme. Motor 19...Rxb2! 20.Bf4 Rxa2 21.Rxa2 Qd5+ ile devamı öneriyor (−1.5): kale önce ikinci yataya girer, vezirler tahtada kalınca Beyaz şahı da tehdit altında kalır. Maç hamlesiyle eval −0.4’e iner.',
      diger: [
        { move: '19...Rxb2', text: '20.Bf4 Rxa2 21.Rxa2 Qd5+ ile Siyah piyonu geri alır, vezirler tahtada (Motor: −1.5).' },
        { move: '19...Rxe5', text: '20.b3 Rbe6 21.Bf4 Re2+ ile aktif kaleler (Motor: −0.8).' },
        { move: '19...Qa8+', text: '20.Qf3 Rxb2 21.Qxa8 Rxa8 ile benzer bir oyun sonu (Motor: −0.6).' },
      ],
    },
    '20w': {
      text: '20.Qf3: vezir f3’te şahı keser ve değişim teklif eder.',
      amac: 'Vezirleri değiştirip şah güvenliği sorununu ortadan kaldırmak.',
      neden: 'Tek iyi hamle: 20.Kg1? Rxb2 21.Bf4 Rxa2 (−1.2) ve 20.Kh2? Rxb2 (−1.8) sonrası vezirler tahtada kalır ve Beyaz şahı tehlikede kalır.',
      diger: [
        { move: '20.Kg1', text: '20...Rxb2 21.Bf4 Rxa2 22.Qd2 ile Siyah piyon kazanır ve saldırır (Motor: −1.2).' },
        { move: '20.Kh2', text: '20...Rxb2 21.Bf4 Rxa2 (Motor: −1.8).' },
      ],
    },
    '20b': {
      text: '20...Qxf3+: vezirler değişir.',
      amac: 'Değişimi tamamlamak ve kalelerle b2 ve c2’ye girmek.',
      neden: 'Motorun ilk tercihi (−0.26). 20...Rxe5? 21.Qxd5 Rxd5 sonrası Siyahın kaleleri ikinci yataya giremez (+0.09). Vezir değişimi 19...Qd5+’ın mantıklı devamı.',
      diger: [
        { move: '20...Rxe5', text: '21.Qxd5 Rxd5 22.b3 f6 ile eşit (Motor: +0.09).' },
        { move: '20...Qd7', text: '21.b3 g6 22.Rae1 ile Beyaz piyon fazlasını korur (Motor: +0.21).' },
      ],
    },
    '21w': {
      text: '21.Kxf3: şahla alınır; şah merkeze yaklaşır.',
      amac: 'Vezir gittikten sonra şahı oyun sonunda aktif bir taş olarak kullanmak.',
      neden: 'Motorun ilk tercihi (−0.59). 21.Rxf3 Rxb2 22.Rf2 Rxc2 de mümkündü ama kale pasif kalır (−1.4); 21.Kh2?? Qe2+ ise kaybeder.',
      diger: [
        { move: '21.Rxf3', text: '21...Rxb2 22.Rf2 Rxc2 23.Bf4 (Motor: −1.4).' },
      ],
    },
    '21b': {
      text: '21...Rxb2: kale b2 piyonunu alır ve ikinci yataya girer.',
      amac: 'Kaybedilen piyonu geri almak ve c2 piyonunu tehdit etmek.',
      neden: 'Motorun ilk tercihi (−0.40); 21...Rxe5 de yakın (−0.29). Kale ikinci yatayda hem c2’yi hem d2 filini tehdit eder; teori yazılarında önerilen “kale c2’ye” planı burada uygulanır.',
      diger: [
        { move: '21...Rxe5', text: '22.Bf4 Rf6 23.h4 h6 ile e5 piyonu alınır ama b2 kalır (Motor: −0.29).' },
        { move: '21...h5', text: '22.b3 Rxe5 23.Rfe1 Rf5+ (Motor: +0.08).' },
      ],
    },
    '22w': {
      text: '22.Bf4: fil f4’te e5 piyonunu korur.',
      amac: 'e5 piyonunu tutmak ve fili d2’deki saldırıdan çıkarmak.',
      neden: 'Motorun ilk tercihi (−0.36). 22.Rfc1? Rxe5 sonrası Beyaz iki piyon eksik kalabilir (−0.78); c2’yi korumak yerine e5’i korumak daha önemli.',
      diger: [
        { move: '22.Rfc1', text: '22...Rxe5 23.Rab1 Rxa2 ile Siyah piyonları toplar (Motor: −0.78).' },
        { move: '22.Rab1', text: '22...Rxc2 23.Bf4 c4 24.dxc4 (Motor: −0.90).' },
      ],
    },
    '22b': {
      text: '22...Rxc2: kale c2 piyonunu da alır; Siyah bir piyon önde.',
      amac: 'Malzemeyi öne geçirmek ve kaleyi ikinci yatayda aktif tutmak.',
      neden: 'Motorun ilk tercihi (−0.36). Siyahın bir piyonu fazla, ama c ve d piyonları Beyazın d3 piyonuyla durdurulmuş; Beyazın e5 piyonu da ileri ve korunuyor. Bu yüzden avantaj küçük.',
      diger: [
        { move: '22...h6', text: 'Önce luft; 23.h4 Rxc2 24.Rfc1 Rb2 (Motor: −0.14).' },
        { move: '22...a5', text: '23.Rfc1 h6 24.h4 a4 (Motor: −0.09).' },
      ],
    },
    '23w': {
      text: '23.Rfc1: kale c-hattına gelip c2 kalesine saldırır.',
      amac: 'Siyah kaleyi ikinci yataydan kovmak ya da değişmek.',
      neden: 'Motorun ilk tercihi (−0.24). 23.Rac1 Rxa2 sonrası a-piyonu da gider (−0.58). f1 kalesi c1’e gelince a1 kalesi a2’yi korumaya devam eder.',
      diger: [
        { move: '23.Rac1', text: '23...Rxa2 24.Ra1 Rb2 25.Rxa7 (Motor: −0.58).' },
        { move: '23.Rab1', text: '23...c4 24.dxc4 Rxc4 25.Rfc1 (Motor: −0.62).' },
      ],
    },
    '23b': {
      text: '23...Rb2: kale b2’ye döner.',
      amac: 'Kaleyi değiştirmeden ikinci yatayda tutmak.',
      neden: 'Kale değişimi (23...Rxc1) Beyaza kolaylık sağlar (−0.12). Motor 23...Rh2 ile h3’e saldırmayı biraz daha iyi bulur (−0.30), ama 23...Rb2 aynı fikri korur.',
      diger: [
        { move: '23...Rh2', text: '24.Rh1 Rb2 25.Rhb1 Rb4 ile h3’e baskı (Motor: −0.30).' },
        { move: '23...Rxc1', text: '24.Rxc1 h6 25.h4 g5 ile Beyazın kalesi aktifleşir (Motor: −0.12).' },
      ],
    },
    '24w': {
      text: '24.Rcb1: kale b1 ile b2 kalesine karşı çıkar.',
      amac: 'Siyahın aktif kalesini değişmek ve a2 piyonunu güvenceye almak.',
      neden: 'Motorun ilk tercihi (−0.23). 24.h4 Reb8 25.Rc4 sonrası Siyahın kaleleri iyice aktifleşir (−0.47).',
      diger: [
        { move: '24.h4', text: '24...Reb8 25.Rc4 R8b5 (Motor: −0.47).' },
        { move: '24.g4', text: '24...g5 25.Bxg5 Rxe5 (Motor: −0.55).' },
      ],
    },
    '24b': {
      text: '24...Reb8: Siyah kalelerini b-hattında ikiler.',
      amac: 'b-hattında üstünlüğü korumak; değişim olursa ikinci kaleyle b2’yi geri almak.',
      neden: 'e8 kalesi artık e-hattında işe yaramıyordu (e5 piyonu kapalı). 24...Rb4 ile değişim önerilebilirdi (−0.25); Reb8 benzer değerde ve daha esnek.',
      diger: [
        { move: '24...Rb4', text: '25.Rxb4 cxb4 26.Rc1 a5 ile b-piyonu geçer olur (Motor: −0.25).' },
        { move: '24...Rc2', text: '25.Rc1 Rb2 ile hamle tekrarı (Motor: −0.29).' },
      ],
    },
    '25w': {
      text: '25.Rxb2: kaleler değişir.',
      amac: 'Siyahın ikinci yataydaki kalesini ortadan kaldırmak.',
      neden: 'Motorun ilk tercihi (−0.29). 25.Re1 Be7 sonrası Siyah kale ikinci yatayda kalır (−0.88).',
      diger: [
        { move: '25.Re1', text: '25...Be7 26.h4 Kf8 ile Siyahın kalesi aktif kalır (Motor: −0.88).' },
      ],
    },
    '25b': {
      text: '25...Rxb2: kale geri alır; zorunlu.',
      amac: 'Değişimi tamamlamak; başka hamle bir kale eksik bırakır.',
      neden: 'Tek hamle: 25...Rb6?? 26.Rxb6 ile Siyah bir kale eksik kalır (+5.3). Kale ikinci yatayda yine aktif.',
    },
    '26w': {
      text: '26.a4: Beyaz a-piyonunu kalenin saldırısından uzaklaştırır.',
      amac: 'a-piyonunu b2’deki kalenin menzilinden çıkarmak ve a1 kalesini serbest bırakmak.',
      neden: 'a4 beyaz karededir, bu yüzden Siyahın kara kareli fili onu alamaz. Motor 26.Ke4 ile şahı hemen merkeze getirmeyi az farkla daha iyi görüyor (−0.13’e karşı −0.25).',
      diger: [
        { move: '26.Ke4', text: '26...h5 27.Kd5 Be7 28.h4 ile şah c5’e baskı yapar (Motor: −0.13).' },
        { move: '26.Bc1', text: '26...Rb4 27.Ke4 f6 (Motor: −0.27).' },
      ],
    },
    '26b': {
      text: '26...h6: şaha bir kaçış karesi açılır.',
      amac: 'Arka yatay matı ihtimalini ortadan kaldırmak ve g5 karesini kontrol etmek.',
      neden: 'Sakin bir hamle. Motor 26...Be7 ile fili hemen aktifleştirmeyi biraz daha iyi görür (−0.36). 26...f6 ile e5 piyonunu hemen sorgulamak da mümkündü (−0.24).',
      diger: [
        { move: '26...Be7', text: '27.h4 f5 28.exf6 gxf6 (Motor: −0.36).' },
        { move: '26...f6', text: '27.exf6 gxf6 28.Ke4 Rb3 ile e5 piyonu ortadan kalkar (Motor: −0.24).' },
      ],
    },
    '27w': {
      text: '27.h4: Beyaz şah kanadında alan alır.',
      amac: 'h5 ile g6’yı kontrol etmek ve Siyahın ...g5 genişlemesini önlemek.',
      neden: 'Motorun ilk tercihi (−0.10). 27.Bc1 Rh2 sonrası h3 piyonu düşer (−0.54).',
      diger: [
        { move: '27.Bc1', text: '27...Rh2 28.Ba3 Rd2 ile Siyah piyonlara saldırır (Motor: −0.54).' },
        { move: '27.a5', text: '27...g5 28.Bc1 Rb3 (Motor: −0.60).' },
      ],
    },
    '27b': {
      text: '27...Be7: fil e7’den g5 ve d8 karelerine yönelir.',
      amac: 'Fili aktif hale getirmek; ...Bg5 ile fil değişimi ya da h4 piyonuna baskı.',
      neden: 'Motorun ilk tercihi (−0.35). f8’de pasif duran fil artık d8-h4 çaprazından şah kanadındaki piyonlara bakar.',
      diger: [
        { move: '27...a6', text: '28.Ke4 Be7 29.h5 Rb3 (Motor: −0.09).' },
        { move: '27...f6', text: '28.exf6 gxf6 29.g4 Kf7 (Motor: −0.06).' },
      ],
    },
    '28w': {
      text: '28.h5: g6 karesi kontrol edilir.',
      amac: 'Siyahın g-piyonunu g7’de sabitlemek ve kara kareli file h6 hedefini vermek.',
      neden: 'Motorun ilk tercihi (−0.18). Ancak h5 piyonu ileride Siyah fil tarafından değil ama şahı tarafından hedef olabilir; şimdilik alan kazandırır.',
      diger: [
        { move: '28.a5', text: '28...a6 29.h5 Kf8 (Motor: −0.25).' },
        { move: '28.Bc1', text: '28...Rb3 29.Ke4 h5 ile Siyah h5’i bloke eder (Motor: −0.35).' },
      ],
    },
    '28b': {
      text: '28...Kf8: şah merkeze yaklaşır.',
      amac: 'Kaleler tahtadayken bile şahı oyun sonunda merkeze getirmek; e7 ve d7 karelerine yönelmek.',
      neden: '28...g5 ile Beyazın h5 piyonunu en passant’a zorlamak (29.hxg6 fxg6) daha aktifti (−0.33). Kf8 sakin ama doğru fikirle.',
      diger: [
        { move: '28...g5', text: '29.hxg6 fxg6 30.e6 Rb6 ile e6 piyonu zayıflar (Motor: −0.33).' },
        { move: '28...g6', text: '29.Bxh6 gxh5 30.Rh1 (Motor: 0.0).' },
      ],
    },
    '29w': {
      text: '29.Ke4: şah e4’e gelir ve d5 karesine bakar.',
      amac: 'Şahı d5’e getirip c5 piyonuna saldırmak.',
      neden: 'Motorun ilk tercihi (0.0). Şah d4 piyonunun önünde durarak onu bloke eder ve d5-c5 yolunu açar.',
      diger: [
        { move: '29.Re1', text: '29...Rb3 30.Ke4 Ke8 (Motor: −0.04).' },
        { move: '29.Rd1', text: '29...Ke8 30.Ke4 Rb4 (Motor: −0.05).' },
      ],
    },
    '29b': {
      text: '29...Ke8: şah e8’e gelir; d7 karesine gidecek.',
      amac: 'Şahı vezir kanadına götürüp c5 ve d4 piyonlarını desteklemek; Beyaz şahının d5’e girişini zorlaştırmak.',
      neden: 'Motorun ilk tercihi (−0.04). e7’deki fil yüzünden şah doğrudan e7’ye gidemez; e8-d7 rotası gerekli.',
      diger: [
        { move: '29...Rb4', text: '30.Kd5 Ke8 31.Bd2 Rb3 (Motor: 0.0).' },
        { move: '29...Rb6', text: '30.Rf1 Ke8 31.Kd5 (Motor: 0.0).' },
      ],
    },
    '30w': {
      text: '30.Bc1: fil c1’e çekilir ve a3’ten c5’e saldırmaya hazırlanır.',
      amac: 'Fili ...Rb3 ya da ...Rb4 saldırılarından uzaklaştırıp a3-c5 çaprazına geçirmek.',
      neden: 'Hata: fil c1’e çekilince e5 piyonu korumasız kalır ve ikinci yatay Siyah kalesine açılır. Motor 30.Kd5’i öneriyor (0.0): 30...Kd7 31.Re1 Rb4 32.Bd2 ile şah c5’e baskı yapar. Maç hamlesinden sonra 30...Re2+! ile Siyah üstünlük kazanabilirdi (−0.9).',
      diger: [
        { move: '30.Kd5', text: '30...Kd7 31.Re1 Rb4 32.Bd2 ile şah aktif, oyun eşit (Motor: 0.0).' },
        { move: '30.Rd1', text: '30...Rb4 31.Kd5 Rxa4 32.Rb1 (Motor: −0.05).' },
      ],
    },
    '30b': {
      text: '30...Rb3: kale d3 piyonuna saldırır.',
      amac: 'd3 piyonunu baskı altına almak ve Beyaz şahını d5’ten uzak tutmak.',
      neden: 'Fırsat kaçtı: motor 30...Re2+! 31.Kd5 c4! 32.Kxc4 Rxe5 ile Siyah e5’i kazanır ve h5 piyonuna da yönelir (−0.9). 30...Rb3 sonrası eval −0.1.',
      diger: [
        { move: '30...Re2+', text: '31.Kd5 c4 32.Kxc4 Rxe5 33.Bd2 Rxh5 ile Siyah iki piyon önde (Motor: −0.9).' },
        { move: '30...Rh2', text: '31.Rb1 Rxh5 32.Rb7 ile karşılıklı fırsatlar (Motor: −0.12).' },
      ],
    },
    '31w': {
      text: '31.Ra2: kale ikinci yatayı korur.',
      amac: 'Siyahın kalesinin ikinci yataya girmesini önlemek ve Rb2 ile değişim teklif etmeye hazırlanmak.',
      neden: 'Pasif bir hamle. Motor 31.Bf4’ü öneriyor (−0.2): fil e5’i korur ve 31...Kd7 32.Kd5 ile şah c5’e gider. 31.Ra2 sonrası eval −0.66.',
      diger: [
        { move: '31.Bf4', text: '31...Kd7 32.Kd5 Bd8 33.Kxc5 ile Beyaz aktif (Motor: −0.2).' },
        { move: '31.Ra3', text: '31...Rb1 32.Bf4 Re1+ (Motor: −0.60).' },
      ],
    },
    '31b': {
      text: '31...Kd7: şah d7’ye gelir; d6 ve c6 karelerine yönelir.',
      amac: 'Şahı c6-c5 bölgesine getirip piyonları desteklemek ve Beyaz şahının d5’e girişini engellemek.',
      neden: 'Motorun ilk tercihi (−0.66). Şah artık d5 karesini de kontrol ediyor; 32.Kd5? Rxd3 ile d3 piyonu düşer.',
      diger: [
        { move: '31...Rb1', text: '32.Bf4 Rb3 33.Ra1 (Motor: −0.21).' },
        { move: '31...f5+', text: '32.Kxf5 Rxd3 33.Rb2 c4 (Motor: −0.08).' },
      ],
    },
    '32w': {
      text: '32.Rb2: Beyaz kale değişimini teklif eder.',
      amac: 'Kaleleri değişip aynı renkli fil oyun sonuna geçmek; burada beraberlik şansı yüksektir.',
      neden: '32.Kd5? Rxd3 33.Rb2 c4 (−0.69) ya da 32.a5? Rb1 (−1.68) daha kötüydü. Değişim teklifi Beyazın en güvenli yolu (−0.77).',
      diger: [
        { move: '32.Kd5', text: '32...Rxd3 33.Rb2 c4 34.Rb7+ ile karışık (Motor: −0.69).' },
        { move: '32.a5', text: '32...Rb1 33.Bd2 Kc6 34.a6 ile a-piyonu düşer (Motor: −1.68).' },
      ],
    },
    '32b': {
      text: '32...Rxb2: Siyah kaleleri değişir; aynı renkli fillerle bir oyun sonu kalır.',
      amac: 'Kale değişimiyle şahı serbestçe merkeze getirmek ve piyon fazlasını fil oyun sonunda kullanmaya çalışmak.',
      neden: 'Motor kaleli devamları da eşdeğer görüyor (32...Rb4 0.0, 32...c4 +0.05). Portisch daha sade bir oyun sonunu tercih etti; aynı renkli fil oyun sonunda piyon fazlası genellikle yetmez ama oyun uzun sürer.',
      diger: [
        { move: '32...Rb4', text: '33.Kd5 Bg5 34.Rc2 ile kaleler tahtada (Motor: 0.0).' },
        { move: '32...c4', text: '33.dxc4 Rxg3 34.Rb7+ Ke6 ile kaleli oyun (Motor: +0.05).' },
      ],
    },
    '33w': {
      text: '33.Bxb2: fil alır; zorunlu.',
      amac: 'Değişimi tamamlamak.',
      neden: 'Tek hamle: 33.e6+? Kxe6 34.Bxb2 sonrası e-piyonu kaybedilir (−4.3); 33.Kf3?? Ra2 ise kale eksik bırakır.',
      diger: [
        { move: '33.e6+', text: '33...Kxe6 34.Bxb2 g6 35.g4 ile Siyah iki piyon önde (Motor: −4.3).' },
      ],
    },
    '33b': {
      text: '33...Kc6: şah c6’ya gelir; c5 piyonunu destekler ve b5 karesine bakar.',
      amac: 'Şahı vezir kanadında aktif tutmak ve Beyaz şahının d5’e gelişini önlemek.',
      neden: 'Motor 33...Ke6 ve 33...g6’yı biraz daha iyi görüyor (0.0’a karşı −0.50): şah e6’da e5 piyonuna baskı yapar. Kc6 ise d4-c5 piyonlarını güvenceye alır ama e-piyonuna ilerleme fırsatı verir.',
      diger: [
        { move: '33...Ke6', text: '34.Bc1 Bf8 35.g4 Be7 ile e5 piyonu sabitlenir (Motor: 0.0).' },
        { move: '33...g6', text: '34.g4 Ke6 35.Bc1 Bf8 (Motor: 0.0).' },
      ],
    },
    '34w': {
      text: '34.g4: şah kanadındaki piyonlar beyaz karelere geçer.',
      amac: 'Piyonları Siyahın kara kareli filinin vuramayacağı karelere (g4, h5) koymak ve f5’i kontrol etmek.',
      neden: 'Aynı renkli fil oyun sonunun temel kuralı: piyonlarınızı rakip filin rengine değil karşı renge koyun. Motor 34.Bc1 ve 34.Ba3’ü eşdeğer görüyor (−0.18).',
      diger: [
        { move: '34.Bc1', text: '34...Bg5 35.Bb2 Bd2 36.g4 (Motor: −0.18).' },
        { move: '34.Ba3', text: '34...Bg5 35.g4 Bd2 36.Bb2 (Motor: −0.18).' },
      ],
    },
    '34b': {
      text: '34...a6: a-piyonu da beyaz kareye geçer.',
      amac: 'a-piyonunu Beyazın kara kareli filinin saldırısından korumak (a7 kara kare, a6 beyaz).',
      neden: 'Aynı kural Siyah için de geçerli. Motor 34...Bg5 ile fili hemen aktifleştirmeyi biraz daha iyi görür (−0.30’a karşı −0.16).',
      diger: [
        { move: '34...Bg5', text: '35.Ba3 Bd2 36.Bb2 a6 (Motor: −0.30).' },
        { move: '34...Bd8', text: '35.Bc1 Bg5 36.Bb2 Be3 (Motor: −0.30).' },
      ],
    },
    '35w': {
      text: '35.Bc1: fil c1’e gelir; f4 ve g5 karelerine bakar.',
      amac: 'Siyah filin g5’e gelmesini kontrol etmek ve e5 piyonunu f4 üzerinden korumaya hazırlanmak.',
      neden: 'Motor 35.Ba3 ile eşdeğer görür (−0.17). 35.Ba1? Kb6 sonrası Siyah şahı vezir kanadına girer (−1.43).',
      diger: [
        { move: '35.Ba3', text: '35...Bg5 36.Bb2 f6 37.e6 (Motor: −0.17).' },
        { move: '35.Ba1', text: '35...Kb6 36.Kd5 Ka5 37.Kc4 ile Siyah şahı a4’e gelir (Motor: −1.43).' },
      ],
    },
    '35b': {
      text: '35...Bg5: Siyah fili g5’e getirir ve fil değişimini teklif eder.',
      amac: 'Fil değişimi olursa piyon oyun sonu Siyah için kazanılır; Beyaz değişimden kaçmak zorunda.',
      neden: 'Motorun ilk tercihi (−0.17). 36.Bxg5? hxg5 sonrası piyon oyun sonu 37.Kf5 c4! 38.dxc4 d3 ile Siyahın kazancıdır (−4.5).',
      diger: [
        { move: '35...Bh4', text: '36.Bd2 Bg5 37.Ba5 ile tekrar (Motor: 0.0).' },
        { move: '35...Bd8', text: '36.Bd2 Bh4 37.Ba5 (Motor: 0.0).' },
      ],
    },
    '36w': {
      text: '36.Bb2: Beyaz değişimden kaçar; fil uzun çapraza döner.',
      amac: 'Fil değişimini önlemek ve d4 piyonunu baskı altında tutmak.',
      neden: '36.Bxg5? hxg5 sonrası piyon oyun sonu kaybedilir (Motor: −4.5): 37.Kf5 c4! 38.dxc4 d3 ile Siyahın d-piyonu Beyaz şahından uzakta vezire koşar. Aynı ...c4 kırılması oyunun sonunda fillerle de karar verecek.',
      diger: [
        { move: '36.Bxg5', text: '36...hxg5 37.Kf5 c4 38.dxc4 d3 ile d-piyonu durdurulamaz (Motor: −4.5).' },
        { move: '36.Ba3', text: '36...Be3 37.Bb2 Bd2 ile benzer (Motor: −0.17).' },
      ],
    },
    '36b': {
      text: '36...f6: e5 piyonuna saldırılır.',
      amac: 'e5 piyonunu değiştirmek ya da ilerlemeye zorlamak; ilerlerse onu e6’da kara karelerle durdurmak.',
      neden: 'Motor 36...Bd2’yi biraz daha iyi görüyor (−0.38’e karşı −0.14). ...f6 Beyaza e6 ile geçer piyon yaratma imkânı verir; oyunun bundan sonraki gerilimi bu piyondan doğacak.',
      diger: [
        { move: '36...Bd2', text: '37.Ba3 Bg5 38.Bb2 f6 ile daha iyi hazırlanmış ...f6 (Motor: −0.38).' },
        { move: '36...Be3', text: '37.Ba3 Bg5 38.Bb2 f6 (Motor: −0.14).' },
      ],
    },
    '37w': {
      text: '37.e6: piyon ilerler ve geçer piyon olur.',
      amac: 'Siyah şahını e-piyonunu durdurmak için bağlamak; e7 karesini tehdit etmek.',
      neden: 'Motor 37.Ba3 ya da 37.exf6’yı biraz daha iyi görüyor (−0.04’e karşı −0.25), ama e6 pratikte Siyahı zorlar: piyon beyaz karede, Siyahın fili onu alamaz, şah gelmek zorunda.',
      diger: [
        { move: '37.Ba3', text: '37...fxe5 38.Kxe5 Bf6+ 39.Ke4 ile eşit (Motor: −0.04).' },
        { move: '37.exf6', text: '37...Bxf6 38.Ba3 Bg5 39.Ke5 ile şah aktif (Motor: −0.04).' },
      ],
    },
    '37b': {
      text: '37...Kd6: şah e-piyonuna yaklaşır.',
      amac: 'e6 piyonunu almak ya da durdurmak; ama c5 piyonunu korumasız bırakır.',
      neden: 'Motor 37...Bd2’yi öneriyor (−0.4): fil e7 karesini tutar ve 38.e7 Kd7 ile piyon durdurulur. 37...Kd6 sonrası 38.Ba3 c5’e saldırır (+0.1). 37...Kc7? ya da 37...a5? ise 38.Kf5 fikrine izin verir (+1.7/+2.6).',
      diger: [
        { move: '37...Bd2', text: '38.e7 Kd7 39.Kd5 Bc3 ile piyon durur (Motor: −0.4).' },
        { move: '37...a5', text: '38.Kf5 c4 39.dxc4 d3 ile karışık ama Beyaz daha iyi (Motor: +1.7).' },
      ],
    },
    '38w': {
      text: '38.Ba3: fil a3’ten c5 piyonuna saldırır.',
      amac: 'c5 piyonunu kazanmak ya da Siyah şahını e6’dan uzak tutmak.',
      neden: 'Motorun ilk tercihi (+0.06). 38.e7 f5+ 39.gxf5 Bxe7 ise piyonu verir (−0.6).',
      diger: [
        { move: '38.e7', text: '38...f5+ 39.gxf5 Bxe7 40.Bc1 ile piyon gider (Motor: −0.6).' },
        { move: '38.Kf5', text: '38...Bd2 39.Ba3 Bb4 ile Siyah her şeyi tutar (Motor: −0.84).' },
      ],
    },
    '38b': {
      text: '38...Kc6? şah c5 piyonunu korumak için geri döner.',
      amac: 'c5 piyonunu tutmak ve d4-c5 zincirini korumak.',
      neden: 'Hata: e6 piyonu yaşar ve Beyaz şahının f5’e girmesine izin verilir. Motor 38...Kxe6! 39.Bxc5 Be3 ile kesin beraberliği öneriyor (+0.06); Siyah c5’i verir ama e-piyonunu ortadan kaldırır. Maç hamlesinden sonra 39.Kf5! ile Beyaz kazanırdı (+4.2).',
      diger: [
        { move: '38...Kxe6', text: '39.Bxc5 Be3 40.Ba7 Bg1 ile beraberlik (Motor: +0.06).' },
        { move: '38...Bd2', text: '39.Bxc5+ Kxe6 40.Bxd4 ile Beyaz piyon kazanır (Motor: +2.9).' },
      ],
    },
    '39w': {
      text: '39.Bb2? fil d4 piyonuna saldırır.',
      amac: 'd4 piyonunu baskı altına almak ve Siyah filini bağlamak.',
      neden: 'Kaçan fırsat. 39.Kf5! ile şah f6’ya saldırır: 39...c4 40.dxc4 d3 41.Bb4 d2 42.Bxd2 Bxd2 43.Kg6 ile şah g7 ve f6’yı alır, e-piyonu vezire yürür (Motor: +5.0). Belotti’nin hamlesinden sonra 39...Bd2 ile Siyah e7’yi tutar ve oyun dengeye döner (−0.46).',
      diger: [
        { move: '39.Kf5', text: '39...c4 40.dxc4 d3 41.Bb4 d2 42.Bxd2 Bxd2 43.Kg6 ile Beyaz kazanır (Motor: +5.0).' },
        { move: '39.a5', text: '39...f5+ 40.Kxf5 Kd6 41.Kg6 Kxe6 ile Beyaz yine çok iyi (Motor: +3.6).' },
      ],
    },
    '39b': {
      text: '39...Bd2: fil d2’ye gelir; a5-e1 ve c1-h6 çaprazlarını tutar.',
      amac: 'e7 karesini kontrol ederek e-piyonunu durdurmak ve aynı zamanda a5 karesini gözetlemek.',
      neden: 'Motorun ilk tercihi (−0.38). 39...c4? 40.dxc4 Kd6 41.Bxd4 sonrası Beyaz piyonu alır (+2.7). Fil artık e-piyonunun geçiş karesini tuttuğu için şah serbest kalır.',
      diger: [
        { move: '39...Kd6', text: '40.Ba3 Kxe6 41.Bxc5 Be3 ile eşit (Motor: +0.06).' },
        { move: '39...c4', text: '40.dxc4 Kd6 41.Bxd4 Kxe6 ile Beyaz bir piyon kazanır (Motor: +2.7).' },
      ],
    },
    '40w': {
      text: '40.Kf5: şah f5’e gelir; f6 piyonunu hedef alır.',
      amac: 'Şahı f6 ve g7 piyonlarına göndermek; e-piyonunu desteklemek.',
      neden: 'Yanlış zaman: d2 fili artık e7’yi tutuyor, bu yüzden şahın f6’ya saldırısı yeterince güçlü değil ve şah d-piyonundan uzaklaşıyor. Motor 40.e7 ya da 40.Ba3’ü öneriyor (−0.26). Maç hamlesinden sonra −0.83.',
      diger: [
        { move: '40.e7', text: '40...Kd7 41.Ba3 Bb4 42.Bc1 ile eşit (Motor: −0.26).' },
        { move: '40.Ba3', text: '40...Bb4 41.e7 Kd7 42.Bc1 (Motor: −0.26).' },
      ],
    },
    '40b': {
      text: '40...Kd6: şah e7 karesini korumak için d6’ya döner; tek iyi hamle.',
      amac: 'e-piyonunun e7’ye ilerlemesini durdurmak ve e6’yı almaya hazırlanmak.',
      neden: 'Zorunlu: 40...Bg5? 41.Ba3 c4 42.dxc4 d3 sonrası Beyaz kazanır (+4.7); 40...Ba5? 41.Kg6 ile şah g7’ye girer (+4.9).',
      diger: [
        { move: '40...Ba5', text: '41.Kg6 Kd6 42.Kf7 Bd8 ile Beyaz şahı g7’yi alır (Motor: +4.9).' },
        { move: '40...Bg5', text: '41.Ba3 c4 42.dxc4 d3 ile Beyaz kazanır (Motor: +4.7).' },
      ],
    },
    '41w': {
      text: '41.Ba3: fil c5’e saldırır; tek iyi hamle.',
      amac: 'Siyahın ...Kxe6 planını zorlaştırmak için c5 piyonunu tehdit etmek.',
      neden: 'Zorunlu: 41.Ke4? Kxe6 (−3.2) ya da 41.e7? Kxe7 (−3.4) ile e-piyonu kaybedilir ve Siyahın iki fazla piyonu kalır.',
      diger: [
        { move: '41.Ke4', text: '41...Kxe6 42.Ba3 Kd6 43.Bb2 ile Siyah iki piyon önde (Motor: −3.2).' },
      ],
    },
    '41b': {
      text: '41...Bb4: fil b4’te c5 piyonunu korur; tek iyi hamle.',
      amac: 'c5’i tutmak ve Beyaz filini değişmeye zorlamak.',
      neden: 'Zorunlu: 41...Ke7? 42.Bxc5+ (+5.4) ya da 41...a5? 42.Bxc5+ Kxc5 43.e7 (+6.0) ile e-piyonu vezir olur.',
      diger: [
        { move: '41...a5', text: '42.Bxc5+ Kxc5 43.e7 ile piyon vezir olur (Motor: +6.0).' },
      ],
    },
    '42w': {
      text: '42.Bc1: fil c1’e çekilir.',
      amac: 'Fil değişiminden kaçmak ve c1-h6 çaprazında kalmak.',
      neden: 'Motorun ilk tercihi (−1.15). 42.Bb2? c4 43.Ke4 c3 ile Siyahın piyonları ilerler (−3.5). Fil değişimi piyon oyun sonunu Siyaha kazandırırdı.',
      diger: [
        { move: '42.e7', text: '42...Kxe7 43.Bc1 Kd6 44.Ke4 ile e-piyonu gider ama şah merkeze döner (Motor: −1.2).' },
        { move: '42.Bb2', text: '42...c4 43.Ke4 c3 44.Bc1 ile Siyahın piyonları çok güçlü (Motor: −3.5).' },
      ],
    },
    '42b': {
      text: '42...c4! Siyah d3 piyonunu kırar.',
      amac: 'dxc4 sonrası d-piyonunu serbest bırakmak ve Beyaz şahından uzakta bir geçer piyon yaratmak.',
      neden: 'Plan hamlesi. Motor 42...Ke7 43.Ke4 Kxe6 44.Bf4 Ba5’i biraz daha güçlü görüyor (−1.2’ye karşı −0.34), ama c4 Beyazı çok dar bir yola zorlar: 43.dxc4 d3 44.c5+! Bxc5 45.Bd2 bulunmalı. Pratikte doğru bir karardı.',
      diger: [
        { move: '42...Ke7', text: '43.Ke4 Kxe6 44.Bf4 Ba5 ile Siyah piyon önde ve daha iyi (Motor: −1.2).' },
        { move: '42...Be1', text: '43.Kg6 Kxe6 44.Kxg7 c4 (Motor: −0.92).' },
      ],
    },
    '43w': {
      text: '43.dxc4: Beyaz alır.',
      amac: 'Piyonu alıp c-piyonunu geçer piyon yapmak.',
      neden: 'Motorun ilk tercihi (−0.57). 43.Ke4 cxd3 44.Kxd3 de mümkündü ama Siyahın iki piyon fazlası olur (−1.25).',
      diger: [
        { move: '43.Ke4', text: '43...cxd3 44.Kxd3 Bc3 ile Siyah piyon önde (Motor: −1.25).' },
        { move: '43.Bf4+', text: '43...Ke7 44.Ke4 cxd3 45.Kxd3 (Motor: −1.23).' },
      ],
    },
    '43b': {
      text: '43...d3! piyon ilerler ve Beyaz şahından uzaklaşır; b4 fili onu destekler.',
      amac: 'Piyonu d2’ye yürütmek; Beyaz filini c1-d2 bölgesine bağlamak.',
      neden: 'Tek iyi hamle: 43...Ke7? 44.Ke4 Kxe6 45.Kxd4 sonrası Beyaz kazanır (+2.3). d3’teki piyon Beyaz şahından üç hamle uzakta ve fille korunuyor.',
      diger: [
        { move: '43...Ke7', text: '44.Ke4 Kxe6 45.Kxd4 f5 ile Beyazın c-piyonu kazanır (Motor: +2.3).' },
      ],
    },
    '44w': {
      text: '44.c5+! piyon fedasıyla fil saptırılır; tek iyi hamle.',
      amac: 'b4 filini c5’e çekerek d2 karesinin desteğini kaldırmak.',
      neden: 'Zorunlu: 44.Bf4+? Ke7 45.Ke4 d2 (−4.4) ya da 44.Be3? d2 (−4.6) ile piyon vezir olur ya da fil feda edilir.',
      diger: [
        { move: '44.Bf4+', text: '44...Ke7 45.Ke4 d2 46.Bxd2 Bxd2 ile Siyah kazanır (Motor: −4.4).' },
      ],
    },
    '44b': {
      text: '44...Bxc5: fil alır; tek iyi hamle.',
      amac: 'c-piyonunu ortadan kaldırmak ve şahı e6’ya getirmeye hazırlanmak.',
      neden: 'Zorunlu: 44...Ke7? 45.c6 Kd6 46.c7 ile c-piyonu tehlikeli olur (+3.1).',
      diger: [
        { move: '44...Ke7', text: '45.c6 Kd6 46.c7 Kxc7 ile Beyaz üstün (Motor: +3.1).' },
      ],
    },
    '45w': {
      text: '45.Bd2: fil d2’de d-piyonunu durdurur.',
      amac: 'd-piyonunu bloke etmek; şahı d3’e getirmeye hazırlanmak.',
      neden: 'Motor 45.Ke4 ile aynı değeri verir (−0.41): şah hemen d3’e yönelir. Fil d2’de piyonun önünde durur, ama bundan sonra hiçbir yere gidemez.',
      diger: [
        { move: '45.Ke4', text: '45...Kxe6 46.Bd2 Ba3 47.Kxd3 ile beraberlik yakın (Motor: −0.41).' },
        { move: '45.Bf4+', text: '45...Ke7 46.Bd2 Ba3 (Motor: −0.45).' },
      ],
    },
    '45b': {
      text: '45...Ke7: şah e7’ye gelir ve e6 piyonunu hedef alır.',
      amac: 'e6 piyonunu almak ve şahı merkeze getirmek.',
      neden: 'Motorun ilk tercihi (−0.42). Şah e-piyonunu alacak, fil de d-piyonunu destekleyecek.',
      diger: [
        { move: '45...Ba3', text: '46.Bc3 Ke7 47.Bd2 Bc5 ile benzer (Motor: −0.42).' },
        { move: '45...Kd5', text: '46.Be3 Bb4 47.Bd2 ile eşit (Motor: 0.0).' },
      ],
    },
    '46w': {
      text: '46.a5? a-piyonu ilerler.',
      amac: 'a-piyonunu Siyahın a6 piyonuna karşı sabitlemek.',
      neden: 'Hata: piyon kara kareye (a5) geçer ve Siyah filine hedef olur, bir tempo da kaybedilir. Motor 46.Kf4 ya da 46.Ke4’ü öneriyor (−0.43/−0.49): şah d3’e yönelir ve e6 gitse bile d3 alınır. Maç hamlesinden sonra eval −1.3.',
      diger: [
        { move: '46.Kf4', text: '46...Kxe6 47.Ke4 Ba3 48.Kxd3 ile beraberlik yakın (Motor: −0.43).' },
        { move: '46.Ke4', text: '46...Kxe6 47.Bc3 Bd6 48.Kxd3 (Motor: −0.49).' },
      ],
    },
    '46b': {
      text: '46...Ba3: fil a3’e gelir ve c1 karesine bakar.',
      amac: '...Bc1 ile fil değişimini tehdit etmek; d-piyonuna yeni bir destek yolu açmak.',
      neden: 'Motor 46...Bd6 ve 46...Kd6 ile eşdeğer görür (−0.89). Fil a3’ten hem c1’i hem b2-c1 çaprazını kontrol eder.',
      diger: [
        { move: '46...Bd6', text: '47.Bc3 Ba3 48.Ke4 Kxe6 (Motor: −0.89).' },
        { move: '46...Kd6', text: '47.Bc3 Ba3 48.Ke4 Kxe6 (Motor: −0.89).' },
      ],
    },
    '47w': {
      text: '47.Kg6? belirleyici hata; şah g7 piyonuna gider.',
      amac: 'g7 piyonunu almak ve h-piyonunu geçer piyon yapmak.',
      neden: 'Şah d-piyonundan uzaklaşır ve Siyahın ...Kxe6 ve ...f5 fikrine kapı açar. Motor 47.Ke4’ü öneriyor (−1.9): 47...Kxe6 48.Bc3 ile şah d3’e döner. Maç hamlesinden sonra −5.4.',
      diger: [
        { move: '47.Ke4', text: '47...Kxe6 48.Bc3 Bb2 49.Bd2 ile direnç sürer (Motor: −1.9).' },
        { move: '47.Kf4', text: '47...Kxe6 48.Ke4 Bb2 49.Kxd3 f5 (Motor: −2.0).' },
      ],
    },
    '47b': {
      text: '47...Kxe6: şah e6 piyonunu alır; tek iyi hamle.',
      amac: 'Beyazın geçer piyonunu yok etmek ve şahı merkeze getirmek.',
      neden: 'Zorunlu: 47...Kf8? 48.e7+ Bxe7 49.Kf5 (−1.8) ya da 47...Bb2? 48.Kf5 (−1.8) ile Beyaz dengeyi yakalar.',
      diger: [
        { move: '47...Kf8', text: '48.e7+ Bxe7 49.Kf5 Kf7 ile Beyaz şahı geri döner (Motor: −1.8).' },
      ],
    },
    '48w': {
      text: '48.Kxg7: şah g7 piyonunu alır.',
      amac: 'Planı sürdürmek: h-piyonunu serbest bırakmak.',
      neden: 'Artık en iyi hamle de bu (−5.87). 48.Kh7 f5 49.gxf5+ (−6.7) ya da 48.Be3 Bb4 49.Kxg7 d2 (−7.1) daha kötü.',
      diger: [
        { move: '48.Kh7', text: '48...f5 49.gxf5+ Kf6 50.Kg8 (Motor: −6.7).' },
      ],
    },
    '48b': {
      text: '48...f5! g4 piyonunu saptırır ve ikinci bir geçer piyon yaratır; tek iyi hamle.',
      amac: 'Beyazın şah kanadı piyonlarını dağıtmak ve şahı f5’e getirmek.',
      neden: '48...Be7 (−3.1) ya da 48...Bd6 (−2.4) Beyaza şahı geri getirme zamanı verirdi. f5 sonrası g4 piyonu gider ve Siyah şahı merkeze girer.',
      diger: [
        { move: '48...Be7', text: '49.Kg6 Bd6 50.Bxh6 Bb4 ile Beyaz biraz toparlanır (Motor: −3.1).' },
        { move: '48...Bd6', text: '49.Kg6 Ba3 50.Bxh6 (Motor: −2.4).' },
      ],
    },
    '49w': {
      text: '49.gxf5+: Beyaz alır.',
      amac: 'Piyonu almak ve h5 piyonunun yolunu açık tutmak.',
      neden: 'Motorun ilk tercihi (−5.24). 49.Kxh6 fxg4 50.Kg5 g3 ile Siyahın g-piyonu da geçer olur (−5.27).',
      diger: [
        { move: '49.Kxh6', text: '49...fxg4 50.Kg5 g3 51.Kf4 (Motor: −5.27).' },
      ],
    },
    '49b': {
      text: '49...Kxf5: şah f5 piyonunu alır; tek iyi hamle.',
      amac: 'Şahı merkeze getirmek ve d-piyonuna destek olmaya hazırlanmak.',
      neden: 'Zorunlu: 49...Kd5?? 50.f6 ve f-piyonu vezir olur (+5.4).',
      diger: [
        { move: '49...Kd5', text: '50.f6 Bb2 51.Kg6 ile f-piyonu vezir olur (Motor: +5.4).' },
      ],
    },
    '50w': {
      text: '50.Kxh6: şah h6 piyonunu alır.',
      amac: 'h-piyonunu serbest bırakmak.',
      neden: 'Motor 50.Bxh6 ile fili kullanmayı biraz daha iyi görür (−5.39), ama hiçbir hamle kurtarmaz.',
      diger: [
        { move: '50.Bxh6', text: '50...Bb4 51.Kf7 Bxa5 52.Bg7 (Motor: −5.39).' },
        { move: '50.Kf7', text: '50...Bb2 51.Ke8 Bf6 52.Bxh6 (Motor: −5.65).' },
      ],
    },
    '50b': {
      text: '50...Bb2: fil b2’ye gelir ve uzun çaprazı tutar.',
      amac: 'h8 karesini kontrol ederek h-piyonunu durdurmak ve ...Bc1 ile fil değişimini tehdit etmek.',
      neden: 'Motorun ilk tercihi (−5.78). b2-h8 çaprazı hem h-piyonunu durdurur hem de c1 karesine bakar.',
      diger: [
        { move: '50...Bf8+', text: '51.Kh7 Be7 52.Kh6 Bh4 (Motor: −5.79).' },
        { move: '50...Be7', text: '51.Bc3 Bg5+ 52.Kg7 d2 (Motor: −5.79).' },
      ],
    },
    '51w': {
      text: '51.Kh7: şah h-piyonuna destek olmak için h7’ye gider.',
      amac: 'h-piyonunu ilerletmek; ama Siyah filin uzun çaprazı tuttuğu için hiçbir şey değişmez.',
      neden: 'Motorun ilk tercihi (−5.48). 51.Bb4 ya da 51.Be1 Bc1+ ile aynı sonuca götürür (−5.59).',
      diger: [
        { move: '51.Be1', text: '51...Bc1+ 52.Kg7 d2 53.Bxd2 Bxd2 (Motor: −5.59).' },
      ],
    },
    '51b': {
      text: '51...Kg4: şah h5 piyonuna yönelir ve gerektiğinde e2’ye gidecek.',
      amac: 'h-piyonunu almak ya da şahı d-piyonuna destek olarak e2’ye götürmek.',
      neden: 'Motor 51...Bf6’yı daha güçlü görüyor (−7.1), ama 51...Kg4 da kazanır (−4.7): 52.h6 Kf3 53.Kg6 Ke2 54.Bg5 d2 55.Bxd2 Kxd2 ile fil h8’i tutar, şah a5’i alır. Belotti terk etti.',
      diger: [
        { move: '51...Bf6', text: '52.Kh6 Bh4 53.Be3 Be1 ile h-piyonu durur, a5 düşer (Motor: −7.1).' },
        { move: '51...Ke4', text: '52.Bh6 Bc3 53.Bg7 d2 ile kazanır (Motor: −4.4).' },
      ],
    },
  },
  sources: [
    { title: 'chessgames.com: Reggio Emilia 1992/93 (çapraz tablo ve oyun listesi)', url: 'https://chessgames.com/perl/chess.pl?tid=94609' },
    { title: '365chess: B23 Sicilian closed, Korchnoi variation', url: 'https://www.365chess.com/eco/B23_Sicilian_closed_Korchnoi_variation' },
    { title: 'Chess.com: Mr. Perry’s Theorytalk – Mastering the Korchnoi Defense against the Closed Sicilian', url: 'https://www.chess.com/blog/Mr_Perry/mr-perry-s-theorytalk-mastering-the-korchnoi-defense-against-the-closed-sicilian' },
  ],
  exercises: [
    { id: 'bpo-1', kind: 'tekrar', plan: false, title: 'd-piyonu şahtan kaçıyor',
      source: 'Belotti – Portisch, Reggio Emilia 1992 (43. hamle)',
      fen: '8/6p1/p2kPp1p/5K1P/PbPp2P1/8/8/2B5 b - - 0 43',
      prompt: 'Siyah 42...c4 oynadı ve Beyaz 43.dxc4 ile aldı. Beyazın şahı f5’te, Siyahın d4 piyonu b4 filiyle destekleniyor. Siyah nasıl devam etmeli?',
      hint: 'd4 piyonu yerinde kalırsa Beyaz şahı ona ulaşabilir. Piyonu fil desteğiyle uzaklaştırın.',
      line: ['d3', 'c5+', 'Bxc5'],
      explanation: '**43...d3! 44.c5+ Bxc5** Piyon Beyaz şahından uzaklaşır ve b4 filiyle d2 karesine yönelir. Beyaz 44.c5+ ile fili saptırıp ancak durdurabilir; fil c5 piyonunu alır. Motor: 43...d3 −0.6, 43...Ke7? +2.7 (44.Ke4 Kxe6 45.Kxd4). 44...Bxc5 de tek iyi hamle (sonraki en iyi yaklaşık +2.3).',
      link: '...c4 kırılmasının amacı buydu: dxc4 sonrası d-piyonu serbest kalır ve şahtan uzakta geçer piyon olur.' },
    { id: 'bpo-2', kind: 'tekrar', plan: false, title: 'İkinci geçer piyon',
      source: 'Belotti – Portisch, Reggio Emilia 1992 (47. hamle)',
      fen: '8/4k1p1/p3PpKp/P6P/6P1/b2p4/3B4/8 b - - 2 47',
      prompt: 'Beyaz 47.Kg6 ile şahını g7 piyonuna gönderdi. Siyahın d3 piyonu Beyaz filini d2’de tutuyor. Siyah fırsatı nasıl değerlendirir?',
      hint: 'Önce e6 piyonunu alın. Beyaz g7’yi alınca f-piyonu g4 piyonunu saptırabilir.',
      line: ['Kxe6', 'Kxg7', 'f5'],
      explanation: '**47...Kxe6! 48.Kxg7 f5!** Şah e6’yı alır, sonra f-piyonu g4 piyonunu saptırır. Siyahın d-piyonuna ek olarak bir geçer piyonu daha olur ve Beyaz şahı köşede kalır. Motor: 47...Kxe6 −4.9, 47...Bb2 −1.9; 48...f5 −5.7, 48...Be7 −3.1.',
      link: 'Bir geçer piyon filini bağlarken ikinci bir geçer piyon yaratmak oyun sonunu kazandırır.' },
    { id: 'bpo-3', kind: 'transfer', plan: false, title: '...d3 ile çatal',
      source: 'Rossetto – Najdorf, Arjantin Şampiyonası, Buenos Aires 1955 (25. hamle)',
      fen: '3r1rk1/p4pp1/2n1pn2/1p2q3/2PpPR2/2P4P/PPB1NQP1/2R3K1 b - - 0 25',
      prompt: 'Siyah 24...c4 oynadı, Beyaz 25.dxc4 ile aldı. Siyahın d4 piyonu c3 piyonuna karşı duruyor; Beyazın fili c2’de, atı e2’de. Hamle Siyahta.',
      hint: 'Portisch’in 43...d3 hamlesi gibi d-piyonunu ilerletin. d3’teki piyon neye saldırır?',
      line: ['d3'],
      explanation: '**25...d3!** Piyon c2 filine ve e2 atına aynı anda saldırır, d-hattı da d8 kalesine açılır. 26.cxb5 dxc2 27.bxc6 Rd1+ sonrası Siyah kazanıyor. Oyunda 26.Nd4 dxc2 27.Nxc6 Rd1+ geldi; motor 26...Nxd4’ü daha güçlü buluyor. Motor: 25...d3 −3.9, sonraki en iyi 25...bxc4 −1.6.',
      link: 'Portisch’te olduğu gibi ...c4 ile d3 piyonu kırıldı ve d4 piyonu ilerledi. Orada piyon şahtan kaçarak geçer piyon oldu; burada ise çatal yaparak taş kazandı.' },
    { id: 'bpo-4', kind: 'transfer', plan: true, title: '...c4 kırılması',
      source: 'Wantola – Tiviakov, Leiden açık turnuvası 2011 (34. hamle)',
      fen: '5r1k/4b1p1/4p2p/2p1Pr1P/3pNB2/q2P2P1/P3Q1K1/1R6 b - - 3 34',
      prompt: 'Siyahın d4 piyonu Beyazın d3 piyonuyla sabitlenmiş. Siyahın veziri a3’te, kaleleri f-hattında. d-piyonunu nasıl harekete geçirirsiniz?',
      hint: 'c-piyonu d3 piyonuna saldırabilir. dxc4 olursa d-piyonu tempoyla ilerler.',
      line: ['c4', 'dxc4', 'd3'],
      explanation: '**34...c4! 35.dxc4 d3** d-piyonu e2 vezirine saldırarak geçer piyon olur. Oyunda 36.Qb2 Qa8 geldi; vezir a8-h1 çaprazında e4 atını g2 şahına bağladı. Motor: 34...c4 −3.9, 34...Qa8 −3.3; bu yüzden ilk hamle bir plan hamlesi. 35...d3 −4.3, sonraki en iyi −3.4.',
      link: 'Portisch’in 42...c4 43.dxc4 d3 kırılmasının aynısı; burada vezirler tahtada olduğu için geçer piyon tempoyla vezire saldırarak ilerliyor.' },
  ],
};
