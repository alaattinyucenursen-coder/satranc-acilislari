// Tiviakov – Carlsen, Gausdal turnuvası, Gausdal 2005 (1. tur). Kaynak: PgnMentor (Carlsen.pgn).
export default {
  id: 'tiviakov-carlsen-2005',
  theme: 'Erken vezir değişimi ve vezir kanadı çoğunluğu',
  white: 'Sergei Tiviakov', black: 'Magnus Carlsen',
  whiteShort: 'Tiviakov', blackShort: 'Carlsen',
  event: 'Gausdal turnuvası', site: 'Gausdal', year: 2005, eco: 'B22',
  variation: 'Sicilya Savunması, Alapin varyantı: 2...Nf6 3.e5 Nd5', result: '1-0',
  pgn: `1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. Bc4 Nb6 6. Bb3 d5 7. exd6 Qxd6 8. Na3 e6 9. d4 Be7 10. Nb5 Qd8 11. dxc5 Bxc5 12. Qxd8+ Kxd8 13. Bf4 a6 14. Rd1+ Bd7 15. Nc7 Rc8 16. Ng5 e5 17. Nd5 Nxd5 18. Nxf7+ Ke7 19. Rxd5 exf4 20. Rxc5 Rhf8 21. Ng5 Rf5 22. Rxf5 Bxf5 23. O-O Kf6 24. Nf3 Re8 25. Rd1 Re2 26. Rd6+ Ke7 27. Rd2 Rxd2 28. Nxd2 Ne5 29. g3 g5 30. gxf4 gxf4 31. Bd5 b6 32. Kg2 Bg4 33. b4 Kd6 34. Be4 h6 35. Nf3 Nxf3 36. Bxf3 Be6 37. a3 Ke5 38. Bb7 a5 39. Kf3 Bd7 40. Be4 Ba4 41. Bd3 Bd7 42. Bf1 Be6 43. Bb5 Bf5 44. Ke2 Be4 45. Kd2 Bf5 46. Bd3 Be6 47. Kc2 Bf7 48. Bf1 Be6 49. Kd3 Bf7 50. c4 axb4 51. axb4 Bg6+ 52. Kc3 Be4 53. c5 bxc5 54. bxc5 Bc6 55. Kb4 Bd5 56. Kb5 Ke4 57. Be2 f3 58. Bc4 Ba8 59. c6 Kd4 60. c7 Bb7 61. Be6 1-0`,

  summary: 'Sonuç 1-0: **Sergei Tiviakov kazandı.** Alapin’in (2.c3) en tanınmış savunucularından biri olan Tiviakov, genç Carlsen’e karşı 2...Nf6 3.e5 Nd5 hattında açılıştan küçük ama somut bir üstünlük çıkardı. Siyahın 8...e6 ve 9...Be7 ile b5 karesini boş bırakmasını **10.Nb5!** ile cezalandırdı; 10...Qd8?’den sonra **11.dxc5 ve 12.Qxd8+** ile vezirleri değişip Siyahın şahını rok hakkı olmadan d8’de bıraktı (Motor: +1.9). Ardından iki atını c7 ve f7’ye sıçratarak (15.Nc7, 16.Ng5!, 17.Nd5!) taktik yoldan bir piyon kazandı. Ortaoyunun geri kalanında hiç acele etmedi: kaleleri ve atları değişti, aynı renk (beyaz kare) filli oyun sonuna geçti, şahını yavaşça vezir kanadına taşıdı ve **3’e 2 vezir kanadı çoğunluğunu** 50.c4 ve 53.c5 kırılmalarıyla geçer piyona çevirdi. Son darbe 61.Be6 oldu: fil c8’i tuttu, şah b7 filini kovalayacaktı ve c-piyonu vezir olmak üzereydi.',
  intro: '2.c3 Alapin varyantında Beyaz d4’ü piyonla desteklemek ve merkezi iki piyonla kurmak ister. Siyahın iki ana cevabı 2...d5 ve 2...Nf6’dır; Wikipedia’nın Alapin maddesine göre günümüz pratiğinde ana hat 2...Nf6 3.e5 Nd5’tir. Siyah, Alekhine Savunmasına benzer biçimde atıyla e4 piyonunu ileri çeker ve sonra bu ileri e5 piyonunu sorgular. Bu oyunda Tiviakov 4.Nf3 Nc6 5.Bc4 Nb6 6.Bb3 düzenini seçti; Carlsen 6...d5 ile e5’e vurdu, Beyaz 7.exd6 ile merkezi açtı. Ortaya çıkan açık konumda iki şey belirleyici oldu: Beyazın gelişim hızı (özellikle Na3-b5 manevrası) ve açık d-hattı. Siyah, vezirini ve şahını bu hat üzerinde bırakınca vezir değişimi Beyaz için bir saldırı aracına dönüştü.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Na3-b5 manevrası:** at a3 üzerinden b5’e gelip d6’daki vezire saldırmak ve c7 ile d6 karelerine göz dikmek. Siyah ...a6 oynamadığı sürece bu sıçrama hep tehdit olarak durur.',
      '**d-hattını açıp vezirleri değişmek:** 11.dxc5 ile d-hattını açmak, 12.Qxd8+ ile vezirleri değişmek; Siyah şahla almak zorunda kalınca rok hakkı kaybolur ve şah d8’de Rd1+, Nc7 ve Bf4–c7 tehditlerine açık kalır.',
      '**İki at, iki çatal karesi:** Nb5–c7 ile a8 kalesini ve e6’yı, Nf3–g5 ile f7’yi hedeflemek. Merkezdeki şah ile köşedeki h8 kalesi aynı anda Nxf7+ çatalına düşer.',
      '**Taktikle piyon kazandıktan sonra sadeleştirmek:** 17.Nd5! ve 18.Nxf7+ ile kazanılan piyonu korumak için 22.Rxf5 ve 27.Rd2 ile kaleleri, 35.Nf3 ile atları değişmek. Taş azaldıkça bir piyon fazlası daha ağır basar.',
      '**Şah kanadında rakip piyonu bağlamak:** 29.g3 ve 30.gxf4 ile Siyahın ileri f4 piyonunu tek ve yalnız bırakmak; fil ve şahla Siyahın şahının f3–f2’ye sızmasını önlemek.',
      '**Şahı vezir kanadına taşımak:** 44.Ke2, 45.Kd2, 47.Kc2, 49.Kd3 ve 52.Kc3 ile şahı c4-c5 kırılmasını destekleyecek kareye getirmek; bu sırada fil a6–b5–d3–f1 arasında dolaşıp Siyahın filini oyalar.',
      '**3’e 2 çoğunluktan geçer piyon:** 50.c4, 53.c5 ve 54.bxc5 ile c-piyonunu geçer yapmak; 58.Bc4 ile fil değişimi teklif etmek ve 61.Be6 ile c8 karesini kontrol ederek piyonu vezire çıkarmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...Nb6 ve ...d5 ile e5 piyonunu ortadan kaldırmak, Beyazın merkezdeki alan üstünlüğünü bozmak ve rahat bir gelişim elde etmek.',
      '...e6, ...Be7 ve ...O-O ile hızla rok yapmak. Plan mantıklıydı ama sıralama hatalıydı: ...a6 oynanmadığı için Na3-b5 sıçraması d6’daki veziri ve c7’yi tehdit etti.',
      'Vezirler gittikten sonra şahı e7/f6 gibi merkez karelerde aktif bir oyun sonu taşı olarak kullanmak; şah merkezde kalmanın kötü yanını iyi yana çevirmeye çalışmak.',
      '...e5 ve ...exf4 ile karşı oyun aramak: Beyazın kara kareli filini alıp piyon eksiğini aktif kale, fil çifti benzeri taş hareketliliğiyle telafi etmek.',
      '...Re2 ile kaleyi ikinci yataya sokup b2 ve f2’ye baskı yapmak; Beyazı pasif savunmaya zorlamak.',
      'Oyun sonunda f4 piyonunu ve şahı kullanarak şah kanadında karşı oyun yaratmak (...f3) ve fil ile b6–a5 piyonları sayesinde Beyazın vezir kanadı ilerleyişini durdurmak.',
    ] },
  },
  critical: [
    { move: '9b', title: '9...Be7: b5 karesi boş kalıyor', text: 'Siyah doğal görünen bir gelişim hamlesi yaptı, ama Na3’ün nereye gitmek istediğini hesaba katmadı. 9...a6! b5’i kontrol eder ve konum dengelidir (Motor: +0.4); oyundaki 9...Be7 ise 10.Nb5’e izin verir (Motor: +1.0). Bu, Alapin’in 8.Na3 sistemindeki temel tuzaktır: at a3’te kötü görünür, ama hedefi b5 üzerinden c7 ve d6’dır.' },
    { move: '10b', title: '10...Qd8? vezir d-hattında kalıyor', text: 'Vezir kaçmak zorundaydı; doğru kare b8’di. 10...Qb8 ile vezir d-hattından çıkar ve 11.dxc5 Bxc5 12.O-O O-O ile Siyah normal gelişimini tamamlar (Motor: +0.9). 10...Qd8 ise vezirleri d-hattında karşı karşıya bırakır: 11.dxc5! Bxc5 12.Qxd8+ ile Siyah şahla almak zorunda kalır (Motor: +1.8). 10...Qd7 de aynı nedenle kötüdür (+1.8).' },
    { move: '12w', title: '12.Qxd8+: vezirsiz saldırı', text: 'Gelişimde önde olan taraf için vezir değişimi genellikle saldırıyı bitirir; burada ise tam tersine saldırıyı başlatır. 12...Kxd8 zorunludur, çünkü 12...Nxd8? 13.Nc7+ Ke7 14.Nxa8 ile kalite kaybettirir (Motor: +3.6). Şah d8’de kalınca Bf4, Rd1+ ve Nc7 hep tempoyla gelir. Motor 12.Qxd8+’i +1.9 buluyor; vezirleri tutan 12.Qe2 yalnızca +0.7.' },
    { move: '14w', title: '14.Rd1+ mi, 14.Nc7 mi?', text: 'Beyaz doğal olanı yaptı ve kaleyi şahla d-hattına getirdi; ama bu, Siyaha 14...Bd7 ile fili tempoyla geliştirme fırsatı verdi. Motor 14.Nc7! Ra7 15.O-O-O+ yolunu (Motor: +2.5) ya da hemen 14.O-O-O+ (+2.4) tercih ediyor: uzun rok hem şahı güvenceye alır hem kaleyi d-hattına getirir. 14.Rd1+ sonrası avantaj +1.6’ya düştü. Yine de Beyaz baskıyı korudu.' },
    { move: '16w', title: '16.Ng5! f7’ye ikinci at', text: 'c7’deki at c8 kalesinin saldırısı altındaydı ve Beyaz onu kurtarmak yerine diğer atını oyuna soktu. Nxf7+ şahı ve h8 kalesini çatallayacak; ayrıca Ncxe6+ fikirleri de var. Motor 16.Ng5’i +1.1 buluyor; 16.Bxe6? Rxc7 ise −0.8, 16.O-O? Rxc7 −1.4. Siyahın tek savunması 16...e5 idi: 16...Ke7 17.Ne4 (+2.3) ve 16...Rf8 17.Ngxe6+ (+3.1) daha kötüdür.' },
    { move: '17w', title: '17.Nd5! taktikle piyon kazanmak', text: '16...e5 filin üzerine yürüdü. Beyaz fili kaçırmak yerine atı d5’e soktu: 17...Nxd5 18.Nxf7+ Ke7 19.Rxd5 exf4 20.Rxc5 sonrasında Beyaz taşını geri alır ve bir piyon önde kalır (Motor: +1.0). Daha güvenli görünen 17.Nge6+ fxe6 18.Nxe6+ yalnızca sürekli şaha benzer bir eşitlik getirir (Motor: 0.00). 17...exf4? ise 18.Nxf7+ Ke8 19.Nxh8 ile kalite kaybettirir (+3.1).' },
    { move: '20w', title: '20.Rxc5: güvenli yol, ama en güçlüsü değil', text: 'Beyaz filini aldı ve bir piyon önde temiz bir konum kurdu (Motor: +1.2). Motor ise 20.Nxh8! Na5 21.Bc2 yolunu çok daha güçlü buluyor (+2.6): at h8’de kapana kısılmış görünse de Siyah onu hemen kazanamaz ve Beyaz bir kalite fazlasıyla oynar. Tiviakov hesaplanması zor bir konum yerine, tekniğine güvendiği sade bir piyon fazlasını tercih etti.' },
    { move: '39b', title: '39...Bd7? ve kaçan fırsat 40.bxa5', text: 'Oyun sonunda Siyahın en ciddi hatası: 39...axb4! 40.axb4 ile a-piyonları hemen değişseydi Beyazın çoğunluğu 2’ye 1’e inerdi (Motor: +1.4). 39...Bd7 sonrası Motor 40.bxa5! bxa5 41.c4 ile hemen geçer bir c-piyonu yaratmayı öneriyor (+2.8). Tiviakov 40.Be4 oynadı (+1.2) ve fırsatı on hamle kadar erteledi; ama plan değişmedi ve sonunda aynı kırılma geldi.' },
  ],
  lessons: [
    'Alapin’in 2...Nf6 3.e5 Nd5 hattında Beyazın Na3 manevrası hep b5 karesini hedefler: oradan d6’daki vezire, c7’ye ve d6’ya saldırır. Siyah ...a6 oynamadan ...e6 ve ...Be7 ile acele ederse bu sıçrama ağır bir tempo kaybına yol açar.',
    'Vezir bir hattan kovalanırken hangi kareye gittiği önemlidir: 10...Qb8 vezirleri ayırırdı, 10...Qd8? ise d-hattında karşı karşıya bıraktı ve vezir değişimini Beyaz için bir silaha çevirdi.',
    'Gelişimde önde olan taraf için vezir değişimi bazen en güçlü saldırıdır: rakibin şahı merkezde, rok hakkı olmadan kalır; kale şahları ve at çatalları vezir olmadan da öldürücüdür.',
    'İki at aynı anda iki zayıf kareye (c7 ve f7) baskı yaparsa merkezdeki şah ile köşedeki kale çatallanır. Bir taşı kurtarmak yerine karşı tehdit yaratmak (17.Nd5!) çoğu zaman en iyi savunmadır.',
    'Piyon önde olan taraf taşları değiştirir: Tiviakov 22.Rxf5, 27.Rd2 ve 35.Nf3 ile her fırsatta değişime gitti ve oyunu tek fil + piyonlara indirdi.',
    'Aynı renk filli oyun sonlarında şahın yeri belirleyicidir. Beyaz şahını sabırla vezir kanadına taşıdı (Ke2–d2–c2–d3–c3), Siyahın şahı ise e5–e4’te kaldı ve geçer piyondan çok uzaktı.',
    'Vezir kanadındaki 3’e 2 çoğunluk, şah desteğiyle c4-c5 kırılmasıyla geçer piyona dönüştürülür. Savunan taraf için de ders var: çoğunluğu 2’ye 1’e indiren piyon değişimini (39...axb4) erken yapmak savunmayı kolaylaştırır.',
  ],
  qa: [
    { q: 'Kazanan kimdi ve oyunu nasıl kazandı?', a: 'Sonuç 1-0: Sergei Tiviakov kazandı. Önce açılışta Siyahın 9...Be7 ve 10...Qd8 hatalarını 10.Nb5, 11.dxc5 ve 12.Qxd8+ ile cezalandırıp şahı merkezde bıraktı; sonra 16.Ng5! ve 17.Nd5! ile taktik yoldan bir piyon kazandı. Ardından taşları değişip aynı renk filli oyun sonuna geçti, şahını vezir kanadına taşıdı ve 50.c4, 53.c5 kırılmalarıyla geçer bir c-piyonu yarattı. 61.Be6 sonrası c-piyonunun vezir olması durdurulamıyordu ve Carlsen terk etti.' },
    { q: 'Siyahın açılışta asıl hatası neydi?', a: 'Sorun tek bir hamle değil, sıralamaydı. 8...e6 (Motor: +0.5) ve 9...Be7 (+1.0) ile Siyah rok yapmaya acele etti ve b5 karesini kontrolsüz bıraktı; 8...a6 ya da 9...a6 dengeyi korurdu (+0.1 / +0.4). Asıl bedel 10...Qd8? ile ödendi: 10...Qb8 vezirleri d-hattından ayırırdı (+0.9), oyundaki hamle ise 11.dxc5 ve 12.Qxd8+’e izin verdi (+1.8).' },
    { q: 'Tiviakov neden 12.Qxd8+ ile vezirleri değişti? Gelişimde önde olan taraf vezirleri tutmaz mı?', a: 'Genel kural öyledir, ama burada vezir değişimi Siyahın rok hakkını yok etti. 12...Kxd8 zorunluydu (12...Nxd8? 13.Nc7+ kalite kaybettirir) ve şah d8’de Bf4, Rd1+, Nc7 gibi tempolu hamlelere açık kaldı. Motor 12.Qxd8+’i +1.9, vezirleri tutan 12.Qe2’yi +0.7 buluyor: değişim avantajı iki katından fazla büyütüyor.' },
    { q: '16.Ng5 neden bu kadar güçlüydü? c7’deki at zaten tehdit altındaydı.', a: 'Çünkü Beyaz atını kurtarmak yerine daha büyük bir tehdit yarattı: Nxf7+ şahı ve h8 kalesini çatallar. Siyah 16...Rxc7 oynarsa 17.Nxf7+ Ke7 18.Nxh8 ile Beyaz kaleyi geri alır. Siyahın tek savunması fili kovan 16...e5 idi, ama 17.Nd5! ile Beyaz yine taktikle bir piyon kazandı. Motor: 16.Ng5 +1.1; 16.Bxe6 −0.8.' },
    { q: 'Siyah 18...Ke7 yerine ne oynamalıydı?', a: 'Motor 18...Kc7’yi tercih ediyor (Motor: +1.0, oyundaki 18...Ke7 +1.6). 18...Kc7 19.Rxd5 exf4 20.Nxh8 Re8+ ile şah kendi filini (c5) ve vezir kanadını korur, Siyahın kalesi tempoyla aktifleşir. 18...Ke7 sonrası Beyaz hem atı hem kaleyi daha rahat kullandı; yine de iki hamle arasındaki fark oyunun sonucunu tek başına belirlemedi.' },
    { q: 'Neden 20.Nxh8 değil de 20.Rxc5?', a: 'Motor 20.Nxh8’i açıkça daha güçlü buluyor (+2.6’ya karşı +1.2): Beyaz bir kale alır, at h8’de sıkışık görünse de Siyah onu kolayca kazanamaz. Ama bu konum karışık ve hesap isteyen bir konumdur; 20.Rxc5 ise net bir piyon fazlası ve sade bir oyun verir. Tiviakov’un seçimi, uzun oyun sonu tekniğine güvenen pratik bir karardır; oyunun gidişatı bu kararı haklı çıkardı.' },
    { q: 'Aynı renk filli oyun sonunda bir piyon fazlası neden yetti?', a: 'Çünkü fazla piyon vezir kanadındaydı ve 3’e 2 bir çoğunluk oluşturuyordu; Siyahın şahı ise merkezde/şah kanadında f4 piyonunu korumakla meşguldü. Beyaz şahını c3’e getirip c4-c5 ile geçer piyon yaratınca Siyahın şahı piyondan çok uzakta kaldı. Fil tek başına, şahla desteklenen ve kendi filiyle ilerleyen bir geçer piyonu durduramaz. Ayrıca Beyazın fili 58.Bc4 ile değişim teklif edebildi; fil değişimi olsaydı piyon oyun sonu tamamen kazançtı.' },
    { q: 'Siyah oyun sonunda nerede kurtulabilirdi?', a: 'En iyi şans 39. hamledeydi: 39...axb4! 40.axb4 ile Beyazın çoğunluğu 2’ye 1’e iner ve motor Beyaz avantajını +1.4 civarında tutar; oyundaki 39...Bd7 ise +2.7 verdi. Benzer biçimde 48...axb4 (+1.0) ve 49...axb4 (+2.4) oyundaki fil hamlelerinden daha dayanıklıydı. Siyah a-piyonunu bekletince Beyaz c4’ü kendi zamanında oynayıp b4 ve c4 ile güçlü bir zincir kurdu.' },
    { q: '52.Kc3 neden tek hamleydi?', a: '51...Bg6+ şahı çekti ve Beyaz şahın nereye gideceğine karar vermek zorundaydı. 52.Kc3 c4 ve b4 piyonlarını korur ve c5 kırılmasını destekler (Motor: +3.9). 52.Ke2? Be4 ve ...Kd4 ile Siyahın şahı c4 piyonuna saldırır (Motor: +0.05); 52.Kd2? Kd4! de benzer biçimde eşitlik verir. Bu, şahın piyonlara yakın olmasının oyun sonunda ne kadar önemli olduğunu gösterir.' },
  ],
  sources: [
    { title: 'Wikipedia: Sicilian Defence, Alapin Variation (2...Nf6 3.e5 Nd5 ana hat, Tiviakov Alapin’in savunucuları arasında)', url: 'https://en.wikipedia.org/wiki/Sicilian_Defence,_Alapin_Variation' },
    { title: 'Thomas Ollo: B22p — Sicilian: Alapin, 2…Nf6 3.e5 Nd5 4.Nf3 Nc6 (5.Bc4 Nb6 6.Bb3 hattı ve istatistikler)', url: 'https://thomasollo.net/categorie-produit/serie-b/b20-b99-1-e4-c5-sicilian-defense/b22-1-e4-c5-2-c3-sicilian-defense-alapin-varia/b22p-2-nf6-3-e5-nd5-4-nf3-nc6-alapin/' },
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkezde e4 piyonunu kurar, vezirin ve f1 filinin yolunu açar.',
      amac: 'Açık, taşların hızla geliştiği bir oyuna yönelmek ve merkezde alan almak.',
      neden: 'Tiviakov 1.e4 oyuncusudur ve Sicilya’ya karşı Açık Sicilya’nın uzun teorisi yerine 2.c3 Alapin’i silah olarak kullanır. 1.e4 bu planın ön koşuludur.',
      diger: [
        { move: '1.d4', text: 'Kapalı açılışlara gider (Motor: +0.2). Tiviakov’un Alapin hazırlığını devre dışı bırakırdı.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); ama 1...c5 sonrası 2.c3 fikri artık aynı etkiyi taşımaz.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini yandan kontrol eder ve asimetrik bir oyuna yönelir.',
      amac: 'Beyazın 2.d4 ile ideal merkez kurmasını zorlaştırmak; ilerleyen aşamada c-hattını ve vezir kanadını kullanmak.',
      neden: 'Carlsen gençliğinde 1.e4’e karşı Sicilya’yı sıkça seçiyordu. 1...c5, kazanma şansı yüksek, dengesiz konumlar arayan bir savunmadır.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar (Motor: +0.2); daha simetrik ve sakin konumlar doğar.' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.4); kapalı merkez ve yavaş manevralar.' },
      ],
    },
    '2w': {
      text: '2.c3: Alapin varyantı. Beyaz bir sonraki hamlede d4 oynamaya ve cxd4’ten sonra piyonla geri almaya hazırlanır.',
      amac: 'Merkezi c3 desteğiyle d4–e4 piyonlarıyla kurmak; Siyahın Açık Sicilya’daki aktif karşı oyununa (Najdorf, Dragon vb.) girmemek.',
      neden: 'Wikipedia’nın Alapin maddesine göre bu varyant artık en sağlam ve saygın anti-Sicilya sistemlerinden biri sayılır; Tiviakov, Sveşnikov, Rozentalis ve Pavasović bu açılışın bilinen savunucularıdır. Tiviakov, genç ve çok iyi hazırlanmış bir rakibe karşı kendi uzmanlık alanında oynamayı seçti.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya hazırlık (Motor: +0.5); motorun biraz daha yüksek bulduğu, ama ağır teori isteyen yol.' },
        { move: '2.Nc3', text: 'Kapalı Sicilya ya da Grand Prix Atağı (Motor: +0.3); merkezde daha yavaş bir oyun.' },
      ],
    },
    '2b': {
      text: '2...Nf6 ile Siyah e4 piyonuna saldırır. c3 piyonu yüzünden Beyaz bu piyonu Nc3 ile koruyamaz.',
      amac: 'Beyazı 3.e5’e zorlamak; Alekhine Savunmasına benzer biçimde ileri e5 piyonunu sonradan hedef yapmak.',
      neden: '2.c3’ün bir yan etkisi, b1 atının doğal karesi c3’ü almasıdır. 2...Nf6 bunu kullanır: e4 piyonu ya ilerler ya da d3 gibi pasif bir hamleyle korunur. Wikipedia’ya göre günümüzde ana hat budur.',
      diger: [
        { move: '2...d5', text: '3.exd5 Qxd5 4.d4 ile vezir merkezde aktifleşir (Motor: +0.3). Alapin’e karşı diğer ana yol.' },
        { move: '2...e6', text: 'Fransız benzeri yapılara geçiş (Motor: +0.3); 3.d4 d5 ile merkez kilitlenebilir.' },
      ],
    },
    '3w': {
      text: '3.e5 ile piyon ilerler ve f6 atını kovalar.',
      amac: 'Tempo kazanmak, merkezde alan almak ve Siyahın atını kenara itmek.',
      neden: 'Bu hamle neredeyse zorunludur: 3.d3 (Motor: −0.04) pasiftir ve 2.c3’ün amacını boşa çıkarır; 3.Qc2 (−0.2) veziri erken oyuna sokar. e5 piyonu ileride bir hedef olacak, ama Beyaz bu bedeli alan için öder.',
      diger: [
        { move: '3.d3', text: 'e4’ü korur ama Beyazın merkez planı biter (Motor: −0.04).' },
        { move: '3.Qc2', text: 'e4’ü vezirle korur (Motor: −0.2); gelişim açısından hantal.' },
      ],
    },
    '3b': {
      text: '3...Nd5 ile at merkeze, d5’e gider.',
      amac: 'Atı aktif ve güvenli bir karede tutmak; c3 piyonu yüzünden Beyazın Nc3 ile atı kovalayamamasından yararlanmak.',
      neden: 'Alekhine’den farkı burada görülür: Beyazın c3 piyonu b1 atının c3’e gelmesini engeller, bu yüzden d5’teki at rahat durur. 3...Ng8 geri çekilmesi çok pasiftir (Motor: +1.0), 3...Ne4? ise 4.d3 ile at kapana yaklaşır (+2.8).',
      diger: [
        { move: '3...Ng8', text: 'At geri döner; Siyah iki tempo kaybeder (Motor: +1.0).' },
        { move: '3...Ne4', text: '4.d3 ile at kovalanır; 4...Nxf2? 5.Kxf2 taş kaybettirir (Motor: +2.8).' },
      ],
    },
    '4w': {
      text: '4.Nf3: at gelişir, e5 piyonunu destekler ve d4’ü hazırlar.',
      amac: 'Gelişimi tamamlarken merkezi esnek tutmak; d4’ü hemen oynamadan önce taşları yerleştirmek.',
      neden: 'Beyazın dördüncü hamlede başlıca seçenekleri 4.d4, 4.Nf3, 4.g3 ve 4.Bc4’tür. 4.Nf3, 4.d4 cxd4 sonrası açılan çizgilerden kaçınır ve Beyaza d4’ü ne zaman oynayacağına kendisinin karar verme özgürlüğünü bırakır.',
      diger: [
        { move: '4.d4', text: '4...cxd4 5.Nf3 ya da 5.cxd4 ile ana hatlara gider (Motor: +0.2).' },
        { move: '4.Be2', text: 'Sakin bir gelişim (Motor: +0.1); Beyazın merkez baskısı azalır.' },
      ],
    },
    '4b': {
      text: '4...Nc6: at gelişir ve e5 piyonuna baskı yapar.',
      amac: 'e5 piyonuna saldıran taş sayısını artırmak ve d4’e baskı kurmak.',
      neden: 'Thomas Ollo’nun açılış sayfasına göre 4.Nf3 Nc6 sonrası Beyaz genellikle 5.d4 ya da 5.Bc4 oynar. Siyah ...d6 ile e5’i hemen sorgulamak yerine önce bir taş geliştirmeyi seçer.',
      diger: [
        { move: '4...d6', text: 'e5’i hemen sorgular (Motor: +0.15); motorun hafif tercihi. 5.d4 cxd4 6.Bc4 ile keskin oyun doğar.' },
        { move: '4...e6', text: 'Sağlam ama pasif (Motor: +0.4); f8 filine yol açar.' },
      ],
    },
    '5w': {
      text: '5.Bc4: fil gelişir ve d5’teki ata saldırır.',
      amac: 'Atı tempoyla kovalamak ve fili a2–g8 çaprazına, f7’ye bakan bir kareye yerleştirmek.',
      neden: 'Ollo’nun istatistiklerinde 5.Bc4 son yıllarda 5.d4’ün önüne geçmiştir ve yüksek seviyede daha sık oynanır. Beyaz d4’ü bekletir; böylece ...cxd4 sonrası açılan hatlardan kaçınır ve önce taşlarını geliştirir.',
      diger: [
        { move: '5.d4', text: '5...cxd4 6.cxd4 d6 ile merkezde gerginlik (Motor: +0.2). Klasik ana hat.' },
        { move: '5.Na3', text: 'At hemen b5–c4 karelerine yönelir (Motor: yaklaşık 0.0); nadir bir yan yol.' },
      ],
    },
    '5b': {
      text: '5...Nb6: at fille saldırıya uğradığı için b6’ya çekilir ve aynı zamanda c4 filini sorgular.',
      amac: 'Fili kovalamak ve ...d5 ya da ...c4 ile tempo kazanmaya hazırlanmak.',
      neden: '5...e6 da mümkündür, ama at d5’te fil tarafından sürekli tehdit altında kalır. 5...Nb6 tempoyla gelişen bir hamledir; motor da en iyi buluyor (0.00).',
      diger: [
        { move: '5...e6', text: 'Atı d5’te tutar (Motor: +0.4); f8 filine yol açar ama Beyaz d4 ile rahatça merkezi kurar.' },
        { move: '5...Nc7', text: 'At daha pasif bir kareye gider (Motor: +0.5).' },
      ],
    },
    '6w': {
      text: '6.Bb3: fil b3’e çekilir; a2–g8 çaprazında kalarak f7’ye bakmaya devam eder.',
      amac: 'Fili aktif tutmak ve ...c4 tehdidine karşı Bc2 kaçış karesini hazır tutmak.',
      neden: 'Ollo’nun sayfası bu düzeni “Stoltz Atağı” olarak adlandırır. 6.Be2 (Motor: −0.07) fili pasifleştirir; 6.Bb5 (−0.2) ...a6 ile tekrar kovalanır. Bb3’teki fil, oyunun ilerleyen bölümünde f7’ye yapılan saldırılarda önemli rol oynayacak.',
      diger: [
        { move: '6.Be2', text: 'Fil sakin bir kareye çekilir (Motor: −0.07); f7’ye baskı kalmaz.' },
        { move: '6.Bb5', text: '6...a6 ile fil yeniden kovalanır (Motor: −0.2).' },
      ],
    },
    '6b': {
      text: '6...d5 ile Siyah e5 piyonuna geçerken alma imkânı verir ve merkezde yer açar.',
      amac: 'e5 piyonunu ortadan kaldırmak, c8 filini serbest bırakmak ve vezire d6 üzerinden açık bir hat sağlamak.',
      neden: 'Ana alternatif 6...c4 7.Bc2 ile vezir kanadında alan almaktır (Motor: +0.2); 6...d6 de benzer değerlendirmededir. 6...d5, Beyazın 7.exd6 ile merkezi açmasına izin verir ama Siyahın gelişimini hızlandırır.',
      diger: [
        { move: '6...c4', text: '7.Bc2 d5 8.exd6 Qxd6 ile benzer, ama b3 filinin yeri farklı bir yapı (Motor: +0.2).' },
        { move: '6...d6', text: '7.d4 cxd4 8.exd6 Qxd6 ile merkez açılır (Motor: +0.2).' },
      ],
    },
    '7w': {
      text: '7.exd6: geçerken alma. Beyaz e5 piyonunu değişir ve merkezi açar.',
      amac: 'Siyaha d5’te sağlam bir merkez piyonu bırakmamak ve açık konumda gelişim hızını kullanmak.',
      neden: 'Piyon e5’te kalırsa ...dxe5 ile Beyazın merkezi dağılır. 7.d4? cxd4 8.cxd4 Bg4 Siyaha d4’e baskı verir (Motor: −0.45); 7.h3 de pasiftir (−0.4). Motorun ilk tercihi exd6’dır (+0.2).',
      diger: [
        { move: '7.d4', text: '7...cxd4 8.cxd4 Bg4 ile Siyah merkeze baskı kurar (Motor: −0.45).' },
        { move: '7.h3', text: '7...c4 8.Bc2 g6 ile Siyah alan kazanır (Motor: −0.4).' },
      ],
    },
    '7b': {
      text: '7...Qxd6: vezir alır ve d-hattında aktif bir kareye yerleşir.',
      amac: 'Hızlı gelişim; vezirle d-hattını kontrol etmek ve ...Bg4/...Be6 için hazırlık yapmak.',
      neden: '7...exd6 da eşdeğerdir (Motor: +0.25) ve daha sağlam bir piyon yapısı verir, ama f8 fili pasif kalır. 7...Qxd6 daha aktiftir; bedeli, vezirin Na3–b5 gibi tempolu saldırılara açık olmasıdır.',
      diger: [
        { move: '7...exd6', text: '8.d4 Bg4 9.O-O Be7 ile sağlam bir yapı (Motor: +0.25).' },
        { move: '7...c4', text: '8.Bc2 Qxd6 ile önce fil kovalanır (Motor: +0.3).' },
      ],
    },
    '8w': {
      text: '8.Na3: at kenara gelişir, ama hedefi b5 karesidir.',
      amac: 'Nb5 ile d6’daki vezire saldırmak ve c7 ile d6 karelerini tehdit etmek; ayrıca c4 karesi de atın elinde.',
      neden: 'c3 piyonu b1 atının doğal karesini kapattığı için Alapin’de a3 üzerinden gelişim tipik bir manevradır. 8.O-O de iyidir (Motor: +0.3), ama 8.Na3 Siyahı hemen bir soruyla karşı karşıya bırakır: ...a6 ile b5’i korumak mı, yoksa gelişime devam etmek mi?',
      diger: [
        { move: '8.O-O', text: '8...c4 9.Bc2 Bg4 ile sakin bir gelişim (Motor: +0.3).' },
        { move: '8.d4', text: '8...cxd4 9.O-O Be6 ile merkez açılır (Motor: +0.2).' },
      ],
    },
    '8b': {
      text: '8...e6: f8 filine yol açar ve d5 karesini korur.',
      amac: 'Fili e7’ye geliştirip hızla rok yapmak.',
      neden: 'Doğal görünen ama hassas bir an: 8...a6! b5’i kontrol eder ve Na3’ün anlamını yok eder (Motor: +0.1). 8...e6 sonrası Beyazın Nb5 tehdidi gerçekleşir (Motor: +0.5). Siyah gelişimi öne aldı, ama Beyazın planına izin verdi.',
      diger: [
        { move: '8...a6', text: 'Nb5’i önler; 9.O-O Bf5 10.d4 ile denge (Motor: +0.1). Motorun açık tercihi.' },
        { move: '8...Be6', text: '9.d4 Bxb3 10.axb3 cxd4 ile fil değişimi (Motor: +0.3).' },
        { move: '8...Qd3', text: 'Vezir Beyazın gelişimini engeller (Motor: +0.25); riskli ama ilginç.' },
      ],
    },
    '9w': {
      text: '9.d4: Beyaz merkezde piyonunu ilerletir ve c5’e baskı yapar.',
      amac: 'd-hattını açmaya hazırlanmak, c1 filine yol vermek ve Nb5 sonrası dxc5 tehdidi oluşturmak.',
      neden: '9.d4, Nb5 ile birlikte düşünülmüş bir hamledir: at vezirlere saldırdığında d-hattı açılacak ve vezirlerin karşı karşıya gelmesi Beyazın lehine olacak. 9.O-O ve 9.Qe2 de iyidir (Motor: +0.3), ama 9.d4 en enerjik olanıdır (+0.4).',
      diger: [
        { move: '9.O-O', text: '9...a6 10.Qe2 Bd7 ile sakin bir oyun (Motor: +0.3).' },
        { move: '9.Qe2', text: '9...a6 10.O-O Bd7 11.d4 ile benzer yapı (Motor: +0.3).' },
      ],
    },
    '9b': {
      text: '9...Be7: fil gelişir ve rok hazırlanır, ama b5 karesi kontrolsüz kalır.',
      amac: 'Bir sonraki hamlede rok yapıp şahı güvenceye almak.',
      neden: 'Siyah ...O-O için bir tempo istiyordu, ama zamanlama yanlış. 9...a6! ile b5 kontrol edilir ve ancak ondan sonra gelişime devam edilir (Motor: +0.35). 9...Be7 sonrası 10.Nb5 veziri kovalar ve konum +1.0’e çıkar.',
      diger: [
        { move: '9...a6', text: '10.Be3 cxd4 11.Nxd4 Na5 ile Siyah b3 filini değişmeye gider (Motor: +0.35).' },
        { move: '9...Qd8', text: 'Vezir önceden kaçar: 10.O-O cxd4 11.Nb5 Be7 (Motor: +0.6).' },
      ],
    },
    '10w': {
      text: '10.Nb5! At d6’daki vezire saldırır ve c7 ile d6 karelerine göz diker.',
      amac: 'Veziri tempoyla kovalamak ve dxc5 ile d-hattını açarak Siyahın şah ve vezirini aynı hatta yakalamak.',
      neden: 'Na3’ün hazırladığı sıçrama tam zamanında geldi. 10.Qe2 (Motor: +0.65) ya da 10.O-O (+0.6) de iyidir, ama tempo kaybettirmez. 10.Nb5 ile Siyahın veziri doğru kareyi bulmak zorunda kalır (Motor: +0.9).',
      diger: [
        { move: '10.Qe2', text: '10...cxd4 11.Nb5 Qd8 12.Nbxd4 ile benzer ama daha sakin (Motor: +0.65).' },
        { move: '10.O-O', text: '10...cxd4 11.Nb5 Qd8 ile Siyah biraz rahatlar (Motor: +0.6).' },
      ],
    },
    '10b': {
      text: '10...Qd8? Vezir d8’e döner ve d-hattında kalır.',
      amac: 'Veziri güvenli bir kareye çekmek ve d4–c5 gerginliğini korumak.',
      neden: 'Ciddi bir hata: vezir d8’de kaldığı için 11.dxc5 Bxc5 12.Qxd8+ ile Siyah şahla almak zorunda kalacak. 10...Qb8! vezirleri ayırır ve 11.dxc5 Bxc5 12.O-O O-O ile Siyah gelişimini tamamlar (Motor: +0.9). Oyundaki hamle sonrası +1.8; 10...Qd7 de aynı nedenle kötüdür.',
      diger: [
        { move: '10...Qb8', text: '11.dxc5 Bxc5 12.O-O O-O; vezir d-hattından çıkar, Siyah rok yapar (Motor: +0.9).' },
        { move: '10...Qd7', text: '11.dxc5 Bxc5 12.Qxd7+ Kxd7 ile yine şah merkezde kalır (Motor: +1.8).' },
      ],
    },
    '11w': {
      text: '11.dxc5! d-hattı açılır; d1 veziri ile d8 veziri karşı karşıya gelir.',
      amac: 'Siyahı c5’te geri almaya zorlamak ve ardından Qxd8+ ile vezirleri değiştirip rok hakkını yok etmek.',
      neden: 'Bu anı kaçırmamak gerekiyordu: 11.Bf4 O-O 12.dxc5 Qxd1+ sonrası Siyah rok yapmış olur (Motor: +0.65). 11.dxc5 ise Siyaha rok için zaman bırakmaz (Motor: +2.0). Konum alıştırma 1’de soruluyor.',
      diger: [
        { move: '11.Bf4', text: '11...O-O 12.dxc5 Qxd1+ 13.Rxd1 ile Siyah şahını kurtarır (Motor: +0.65).' },
        { move: '11.Qe2', text: '11...c4 12.Bc2 a6 13.Na3 ile at geri döner (Motor: +0.5).' },
      ],
    },
    '11b': {
      text: '11...Bxc5: fil piyonu geri alır.',
      amac: 'Materyali eşitlemek ve fili aktif c5 karesine getirmek.',
      neden: 'Başka iyi seçenek yok: 11...Nd7 12.Nd6+ Bxd6 13.cxd6 (Motor: +2.7) ve 11...a6 12.Qxd8+ Kxd8 13.Nc7 (+2.8) daha kötüdür. Bxc5 en az kayıplı yoldur (Motor: +2.1).',
      diger: [
        { move: '11...Nd7', text: '12.Nd6+ Bxd6 13.cxd6 ile d6’da güçlü bir piyon kalır (Motor: +2.7).' },
        { move: '11...a6', text: '12.Qxd8+ Kxd8 13.Nc7 ile at a8 kalesine saldırır (Motor: +2.8).' },
      ],
    },
    '12w': {
      text: '12.Qxd8+! Vezirler değişir; Siyah şahla almak zorundadır.',
      amac: 'Siyahın rok hakkını yok etmek ve şahı d8’de, Nc7 ve Rd1+ gibi tempolu hamlelere açık bırakmak.',
      neden: 'Gelişimde önde olan tarafın vezir değişimi genellikle saldırıyı sona erdirir; burada ise vezirsiz konumda Siyahın şahı saldırıya açık kalır. Motor 12.Qxd8+’i +1.9, 12.Qe2’yi +0.7, 12.Bf4’ü +0.6 buluyor.',
      diger: [
        { move: '12.Qe2', text: '12...O-O 13.Bg5 ile vezirler kalır, ama Siyah rok yapar (Motor: +0.7).' },
        { move: '12.Bf4', text: '12...Qxd1+ 13.Rxd1 O-O; Siyah rok hakkını kurtarır (Motor: +0.6).' },
      ],
    },
    '12b': {
      text: '12...Kxd8: şah vezir alır.',
      amac: 'Kalite kaybını önlemek.',
      neden: 'Zorunlu: 12...Nxd8? 13.Nc7+ Ke7 14.Nxa8 Nxa8 ile Siyah kalite kaybeder (Motor: +3.6). Şahla alınca rok hakkı gider, ama materyal korunur (Motor: +2.1).',
      diger: [
        { move: '12...Nxd8', text: '13.Nc7+ Ke7 14.Nxa8 ile kalite kaybı (Motor: +3.6).' },
      ],
    },
    '13w': {
      text: '13.Bf4: fil c7 karesini kontrol eder.',
      amac: 'Nc7 sıçramasını desteklemek; at c7’ye geldiğinde a8 kalesine ve e6’ya saldırır, fil de onu korur.',
      neden: 'Kara kareli fil bu konumda en iyi c7–d6 karelerini kontrol eder. 13.Ng5 (Motor: +1.0) ve 13.O-O (+0.7) daha yavaştır. 13.Bf4 ile Beyaz bir sonraki hamlede Nc7, Rd1+ ya da O-O-O+ seçeneklerini açık tutar (Motor: +1.8).',
      diger: [
        { move: '13.Ng5', text: '13...Ne5 14.O-O Bd7 ile Siyah toparlanır (Motor: +1.0).' },
        { move: '13.O-O', text: '13...a6 14.Rd1+ Ke7 ile şah kaçar (Motor: +0.7).' },
      ],
    },
    '13b': {
      text: '13...a6: b5 atına saldırır.',
      amac: 'Atı b5’ten kovalamak ve Nc7 sıçramasını engellemeye çalışmak.',
      neden: 'Ama at zaten c7’ye gitmek istiyor; ...a6 bu sıçramayı engellemez, sadece Nc7 sonrası a8 kalesinin a7’ye kaçma karesini değiştirir. Motor 13...h6’yı (+1.8; ...g5 ile filin yolunu kapatma fikri) ve 13...Ke7’yi (+2.1) tercih ediyor; 13...a6 +2.3/+2.7.',
      diger: [
        { move: '13...h6', text: '14.Nc7 Rb8 15.O-O-O+ Ke7 ile şah e7’ye kaçar (Motor: +1.8).' },
        { move: '13...Ke7', text: 'Şah önceden merkezden uzaklaşır: 14.Ng5 e5 15.Bg3 (Motor: +2.1).' },
      ],
    },
    '14w': {
      text: '14.Rd1+: kale tempoyla şah çeker ve d-hattını alır.',
      amac: 'Siyahı fil ya da atla araya girmeye zorlamak ve d-hattında baskı kurmak.',
      neden: 'Doğal bir hamle, ama Siyaha 14...Bd7 ile fili tempoyla geliştirme imkânı verir. Motor 14.Nc7! Ra7 15.O-O-O+ (+2.5) ya da 14.O-O-O+ (+2.4) yolunu tercih ediyor: uzun rok hem şahı güvenceye alır hem kaleyi d-hattına getirir. 14.Rd1+ sonrası +1.6.',
      diger: [
        { move: '14.Nc7', text: '14...Ra7 15.O-O-O+ Ke7 16.Ng5 ile at ve kale birlikte saldırır (Motor: +2.5).' },
        { move: '14.O-O-O+', text: '14...Bd7 15.Nd6 Bxd6 16.Rxd6 ile d-hattı Beyazın (Motor: +2.4).' },
      ],
    },
    '14b': {
      text: '14...Bd7: fil araya girer ve gelişir.',
      amac: 'Şahı korurken fili geliştirmek; c8 karesini kaleye bırakmak.',
      neden: 'Motor bu konumda 14...Bd7’yi en iyi buluyor (Motor: +1.5); 14...Nd7 (+1.8) ve 14...Ke7 (+1.8) biraz daha kötü. Fil d7’de b5 atını da sorgular.',
      diger: [
        { move: '14...Ke7', text: '15.Nc7 Ra7 16.Ng5 ile at f7’ye yönelir (Motor: +1.8).' },
        { move: '14...Nd7', text: '15.Nc7 Rb8 16.Ng5 e5 ile benzer sıkıntı (Motor: +1.8).' },
      ],
    },
    '15w': {
      text: '15.Nc7: at a8 kalesine ve e6 piyonuna saldırır.',
      amac: 'Kaleyi kovalamak ve Ng5 ile f7’ye ikinci bir saldırı hazırlamak.',
      neden: 'Motor daha sakin 15.Nd6 Bxd6 16.Bxd6 yolunu biraz daha iyi buluyor (+1.6): Beyaz fil çiftini alır. 15.Nc7 daha keskin bir yoldur (Motor: +0.9) ve 16.Ng5 ile somut taktik fikirlere dayanır. Tiviakov taktik baskıyı tercih etti.',
      diger: [
        { move: '15.Nd6', text: '15...Bxd6 16.Bxd6 f6 17.O-O ile Beyaz fil çifti ve d6’da güçlü bir fille kalır (Motor: +1.6).' },
        { move: '15.Bc7+', text: '15...Ke7 16.Nd6 Na5 17.Ne5 ile şah merkezde (Motor: +1.3).' },
      ],
    },
    '15b': {
      text: '15...Rc8: kale c8’e gelir ve c7 atına saldırır.',
      amac: 'Atı c7’de tehdit ederek Beyazı savunmaya zorlamak.',
      neden: 'Tek iyi hamle: 15...Ra7? 16.Bxe6 (Motor: +2.6) ve 15...Rb8? 16.Bxe6 (+2.7) e6 piyonunu kaybettirir. 15...Rc8 sonrası Beyaz atı kurtarmak zorunda gibi görünür (Motor: +0.9).',
      diger: [
        { move: '15...Ra7', text: '16.Bxe6 Kc8 17.Bb3 ile Beyaz piyon kazanır (Motor: +2.6).' },
        { move: '15...Rb8', text: '16.Bxe6 Rc8 17.Ng5 ile e6 düşer (Motor: +2.7).' },
      ],
    },
    '16w': {
      text: '16.Ng5! İkinci at f7’ye yönelir: Nxf7+ şahı ve h8 kalesini çatallayacak.',
      amac: 'c7’deki atı kurtarmak yerine daha büyük bir tehdit yaratmak.',
      neden: '16...Rxc7 olursa 17.Nxf7+ Ke7 18.Nxh8 ile Beyaz kaleyi geri alır ve Siyahın konumu dağılır. Motor 16.Ng5’i +1.1 buluyor; 16.Bxe6? Rxc7 17.Bxf7 (−0.8) ya da 16.O-O? Rxc7 (−1.4) ise Siyaha bir taş kaybettirmeden kurtulma imkânı verir.',
      diger: [
        { move: '16.Bxe6', text: '16...Rxc7 17.Bxc7+ Kxc7 18.Bxd7 sonrası Siyah bir taş önde (Motor: −0.8).' },
        { move: '16.O-O', text: '16...Rxc7 17.Ng5 Kc8 ile Siyah taşı korur (Motor: −1.4).' },
      ],
    },
    '16b': {
      text: '16...e5: f4 filine saldırır ve karşı oyun arar.',
      amac: 'Fili tempoyla kovalamak; Beyaz fili kurtarırsa Siyah ...Rxc7 ile atı alacak.',
      neden: 'Tek savunma: 16...Ke7? 17.Ne4 e5 18.Nxc5 (Motor: +2.3) ve 16...Rf8? 17.Ngxe6+ fxe6 18.Nxe6+ (+3.1) daha kötüdür. 16...e5 Beyazı hesaplamaya zorlar (Motor: +0.9).',
      diger: [
        { move: '16...Ke7', text: '17.Ne4 e5 18.Nxc5 Rxc7 19.Be3 ile Beyaz fili alır (Motor: +2.3).' },
        { move: '16...Rf8', text: '17.Ngxe6+ fxe6 18.Nxe6+ Ke8 19.Nxg7+ ile Beyaz piyonları toplar (Motor: +3.1).' },
      ],
    },
    '17w': {
      text: '17.Nd5! Beyaz fili kurtarmaz; atı d5’e sokar.',
      amac: '17...Nxd5 sonrası 18.Nxf7+ ile şahı ve h8 kalesini çatallamak, ardından Rxd5 ile taşı geri almak.',
      neden: 'Beyazın atları ve kalesi uyum içinde çalışıyor. 17.Nge6+ fxe6 18.Nxe6+ Ke8 19.Nxg7+ yalnızca eşitlik getirir (Motor: 0.00). 17.Nd5 ise bir piyon fazlasıyla sonuçlanır (Motor: +1.0). Alıştırma 2 bu konumu soruyor.',
      diger: [
        { move: '17.Nge6+', text: '17...fxe6 18.Nxe6+ Ke8 19.Nxg7+ Ke7 20.Bg5+ Kf8 ile şahlar sürer, sonuç eşitlik (Motor: 0.00).' },
        { move: '17.Nce6+', text: 'Aynı fikir, aynı sonuç (Motor: 0.00).' },
      ],
    },
    '17b': {
      text: '17...Nxd5: Siyah atı alır.',
      amac: 'Materyali kazanmak ve Beyazın taktik fikrini en az kayıpla karşılamak.',
      neden: 'Başka seçenek yok: 17...Rf8? 18.Nxb6 Bxb6 19.Bg3 (Motor: +3.0) ve 17...exf4? 18.Nxf7+ Ke8 19.Nxh8 (+3.1) kalite kaybettirir. Nxd5 en iyisi (Motor: +0.9).',
      diger: [
        { move: '17...exf4', text: '18.Nxf7+ Ke8 19.Nxh8 Nxd5 ile Beyaz kalite kazanır (Motor: +3.1).' },
        { move: '17...Rf8', text: '18.Nxb6 Bxb6 19.Bg3 ile Beyaz piyon önde (Motor: +3.0).' },
      ],
    },
    '18w': {
      text: '18.Nxf7+: at f7’yi alır ve şahı ile h8 kalesini çatallar.',
      amac: 'Tempoyla bir piyon kazanmak ve şah kaçtıktan sonra kaleyi tehdit altında tutmak.',
      neden: '18.Rxd5 exf4 19.Nxf7+ de aynı sonuca götürür (Motor: +1.0). Önce şah çekmek Siyahın seçeneklerini kısıtlar.',
      diger: [
        { move: '18.Rxd5', text: '18...exf4 19.Nxf7+ Kc7 20.Nxh8 ile benzer konum (Motor: +1.0).' },
      ],
    },
    '18b': {
      text: '18...Ke7: şah e7’ye gider ve f7 atına bakar.',
      amac: 'Atı yakalamaya çalışmak ve merkezdeki taşlara yakın kalmak.',
      neden: 'Motor 18...Kc7’yi biraz daha iyi buluyor (Motor: +1.0): 19.Rxd5 exf4 20.Nxh8 Re8+ ile Siyahın kalesi tempoyla aktifleşir ve şah c5 filine destek verir. 18...Ke7 sonrası +1.6. 18...Ke8? 19.Bxd5 (+2.8) daha kötüdür.',
      diger: [
        { move: '18...Kc7', text: '19.Rxd5 exf4 20.Nxh8 Re8+ 21.Kf1 b6 ile Siyahın kalesi aktif (Motor: +1.0).' },
        { move: '18...Ke8', text: '19.Bxd5 exf4 20.Nxh8 ile Beyaz kalite kazanır (Motor: +2.8).' },
      ],
    },
    '19w': {
      text: '19.Rxd5: kale d5 atını geri alır ve c5 filine saldırır.',
      amac: 'Taşı geri alırken yeni bir tehdit yaratmak.',
      neden: '19.Bxd5? exf4 20.Nxh8 Rxh8 (Motor: −1.05) ve 19.Bg3? Nf6 (−1.2) Beyazı geride bırakır. 19.Rxd5 ile Beyaz hem atı alır hem fili tehdit eder (Motor: +1.6).',
      diger: [
        { move: '19.Bxd5', text: '19...exf4 20.Nxh8 Rxh8 ile Siyah bir taş önde (Motor: −1.05).' },
        { move: '19.Bg3', text: '19...Nf6 20.Nxh8 Rxh8 ile Beyaz taş kaybeder (Motor: −1.2).' },
      ],
    },
    '19b': {
      text: '19...exf4: Siyah f4 filini alır.',
      amac: 'Materyali dengelemek; Beyaz fili alsa da Siyah bir piyon eksiğiyle kalacak.',
      neden: 'Motor 19...Be6’yı tercih ediyor (Motor: +1.6): 20.Rxc5 Kxf7 ile Siyah atı alır ve Beyazın kara kareli fili kalır, ama Siyahın taşları aktifleşir. 19...exf4 sonrası 20.Nxh8 güçlü olacağı için +2.3. 19...Rhf8? 20.Bg5+ ise daha kötüdür (+3.3).',
      diger: [
        { move: '19...Be6', text: '20.Rxc5 Kxf7 21.Bd2 ile Beyaz piyon önde, ama Siyah aktif (Motor: +1.6).' },
        { move: '19...Rhf8', text: '20.Bg5+ Kxf7 21.Rxd7+ ile Beyaz materyal kazanır (Motor: +3.3).' },
      ],
    },
    '20w': {
      text: '20.Rxc5: kale c5 filini alır. Beyaz bir piyon önde.',
      amac: 'Temiz, hesaplanması kolay bir piyon fazlası elde etmek.',
      neden: 'Motor 20.Nxh8! Na5 21.Bc2 yolunu çok daha güçlü buluyor (+2.6): at h8’de kapana kısılmış görünse de Siyah onu hemen kazanamaz ve Beyaz bir kalite fazlasıyla oynar. 20.Rxc5 sonrası +1.2. 20.O-O?? Kxf7 ise taş kaybettirir (−2.2). Tiviakov sade ve güvenli bir yolu seçti.',
      diger: [
        { move: '20.Nxh8', text: '20...Na5 21.Bc2 Be6 22.Rh5 ile Beyaz kalite önde; at kurtarılabilir (Motor: +2.6).' },
        { move: '20.O-O', text: '20...Kxf7 21.Rxd7+ Kf6 ile Siyah bir taş önde (Motor: −2.2).' },
      ],
    },
    '20b': {
      text: '20...Rhf8: kale f8’e gelir ve f7 atına baskı yapar.',
      amac: 'Atı kovalamak ya da kazanmak; kaleyi f-hattında aktifleştirmek.',
      neden: 'At f7’de bir kale ve şahın saldırısı altında. 20...Rhe8 (Motor: +1.6) ve 20...Nb8 (+2.4) daha kötüdür. 20...Rhf8 Beyazı atı çekmeye zorlar (Motor: +1.2).',
      diger: [
        { move: '20...Rhe8', text: '21.O-O Be6 22.Bxe6 Kxe6 ile fil değişir (Motor: +1.6).' },
        { move: '20...Nb8', text: '21.Rxc8 Rxc8 22.O-O ile Beyaz rahat (Motor: +2.4).' },
      ],
    },
    '21w': {
      text: '21.Ng5: at f7’den g5’e kaçar.',
      amac: 'Atı güvenli bir kareye çekmek ve e6, f3 karelerini kontrol etmek.',
      neden: 'At f7’de kalamazdı. 21.Ne5 Nxe5 22.Rxe5+ (Motor: +0.9) bir çift taş değiştirir ama Siyahın şahını aktifleştirir; 21.Rc4? Rxf7 (+0.2) ise kötüdür. 21.Ng5 en esnek yoldur (Motor: +1.2).',
      diger: [
        { move: '21.Ne5', text: '21...Nxe5 22.Rxe5+ Kf6 23.Rd5 ile atlar değişir (Motor: +0.9).' },
        { move: '21.Rc4', text: '21...Rxf7 22.Re4+ Kf8 ile Siyahın taşları aktif (Motor: +0.2).' },
      ],
    },
    '21b': {
      text: '21...Rf5: kale değişimi önerir ve g5 atına saldırır.',
      amac: 'Kaleleri değiştirip Beyazın aktif kalesini oyundan çıkarmak.',
      neden: 'Siyah için sakin hamleler de mümkün: 21...h6 22.Nf3 Bg4 (Motor: +1.2) ve 21...Bf5 (+1.4). 21...Rf5 bir çift kaleyi değiştirmeyi hedefler (Motor: +1.2); ama piyon eksiği olan tarafın taş değiştirmesi genelde onun lehine değildir.',
      diger: [
        { move: '21...h6', text: '22.Nf3 Bg4 23.O-O ile Siyah atı kovalar (Motor: +1.2).' },
        { move: '21...Bf5', text: '22.O-O Kf6 23.h4 ile benzer konum (Motor: +1.4).' },
      ],
    },
    '22w': {
      text: '22.Rxf5: Beyaz kaleleri değişir.',
      amac: 'Taşları azaltmak; piyon fazlası daha az taşla daha değerli olur.',
      neden: '22.Ne4 (Motor: +1.1) kaleleri tutmanın bir yoludur, ama Beyaz piyon önde olduğu için değişimi kabul etmek mantıklıdır (Motor: +1.05). 22.Rd5 Rxd5 23.Bxd5 (+0.95) daha az kesindir.',
      diger: [
        { move: '22.Ne4', text: '22...b6 23.Rxf5 Bxf5 24.O-O ile benzer konum (Motor: +1.1).' },
        { move: '22.Rd5', text: '22...Rxd5 23.Bxd5 Kd6 ile Siyahın şahı aktif (Motor: +0.95).' },
      ],
    },
    '22b': {
      text: '22...Bxf5: fil kaleyi geri alır.',
      amac: 'Materyali dengelemek.',
      neden: 'Zorunlu: 22...h6? 23.Rf7+ (Motor: +6.7) ve 22...Kd8? 23.Rxf4 (+6.8) taş kaybettirir. Fil f5’te aktif bir kareye gelir.',
    },
    '23w': {
      text: '23.O-O: Beyaz rok yapar ve şahını güvenceye alır.',
      amac: 'Kaleyi oyuna sokmak (Rd1/Re1) ve şahı Siyahın kalesinin ikinci yataya girme tehditlerinden korumak.',
      neden: 'Vezirler olmadan şah merkezde de kalabilirdi (23.Kd2, Motor: +0.8), ama rok h1 kalesini tek hamlede aktifleştirir. 23.Nf3 (+0.87) de benzer değerdedir. Rok en esnek seçenek (Motor: +0.9).',
      diger: [
        { move: '23.Kd2', text: 'Şah merkezde aktif kalır (Motor: +0.8); h1 kalesi geç gelişir.' },
        { move: '23.Nf3', text: '23...Rd8 24.O-O Kf6 ile benzer konum (Motor: +0.87).' },
      ],
    },
    '23b': {
      text: '23...Kf6: şah f6’ya gelir ve g5 atına baskı yapar.',
      amac: 'Şahı aktifleştirmek ve atı geri çekilmeye zorlamak.',
      neden: '23...Rd8 24.Re1+ (Motor: +1.15) ve 23...Na5 24.Re1+ (+1.5) Beyaza tempo kazandırır. 23...Kf6 en iyisi (Motor: +0.96).',
      diger: [
        { move: '23...Rd8', text: '24.Re1+ Kf6 25.Ne4+ ile Beyaz tempo kazanır (Motor: +1.15).' },
        { move: '23...Na5', text: '24.Re1+ Kf6 25.Ne4+ ile benzer sıkıntı (Motor: +1.5).' },
      ],
    },
    '24w': {
      text: '24.Nf3: at f3’e döner ve f4 piyonuna bakar.',
      amac: 'Atı merkezi bir kareye getirmek; f4 piyonunu hedef almak ve d4, e5 karelerini kontrol etmek.',
      neden: '24.h4 (Motor: +0.6) atı g5’te tutar ama zayıflık yaratır; 24.Nh3 Bxh3 (+0.2) iyi bir fili değiştirir. 24.Nf3 en doğal hamle (Motor: +1.0).',
      diger: [
        { move: '24.h4', text: '24...Re8 25.Nf3 Re2 ile Siyahın kalesi aktifleşir (Motor: +0.6).' },
        { move: '24.Nh3', text: '24...Bxh3 25.gxh3 ile Beyazın piyon yapısı bozulur (Motor: +0.2).' },
      ],
    },
    '24b': {
      text: '24...Re8: kale e-hattını alır.',
      amac: '...Re2 ile ikinci yataya girmek ve b2, f2 piyonlarına baskı yapmak.',
      neden: '24...g5 (Motor: +1.0) ve 24...Rd8 (+1.1) de benzer değerdedir. Açık e-hattı Siyahın kalesi için en iyi yoldur.',
      diger: [
        { move: '24...g5', text: '25.Rd1 Re8 26.Rd6+ ile benzer konum (Motor: +1.0).' },
        { move: '24...Rd8', text: '25.Rd1 Rxd1+ 26.Bxd1 ile kaleler değişir (Motor: +1.1).' },
      ],
    },
    '25w': {
      text: '25.Rd1: kale d-hattına gelir.',
      amac: 'Açık d-hattını almak ve Rd6+ ya da Rd2 ile Siyahın kalesine karşı çıkmak.',
      neden: '25.Re1 Rxe1+ 26.Nxe1 (Motor: +0.84) kaleleri değiştirir ama atı pasifleştirir. 25.h4 (+0.88) de mümkün. 25.Rd1 en aktif hamle (Motor: +0.9).',
      diger: [
        { move: '25.Re1', text: '25...Rxe1+ 26.Nxe1 Ne5 ile at pasif bir kareye gider (Motor: +0.84).' },
        { move: '25.h4', text: '25...Rd8 26.Rd1 Rxd1+ ile kaleler değişir (Motor: +0.88).' },
      ],
    },
    '25b': {
      text: '25...Re2: kale ikinci yataya girer ve b2 ile f2’ye saldırır.',
      amac: 'Beyazı pasif savunmaya zorlamak; piyon kazanma şansı aramak.',
      neden: '25...Ne5 (Motor: +1.1) ve 25...g5 (+1.2) daha az aktiftir. 25...Re2 ilk bakışta tehlikeli görünür (Motor: +0.96), ama Beyaz Rd6+ ve Rd2 ile kaleyi değişmeye zorlayabilir.',
      diger: [
        { move: '25...Ne5', text: '26.Bd5 b5 27.Nxe5 ile atlar değişir (Motor: +1.1).' },
        { move: '25...g5', text: '26.Rd6+ Ke7 27.Rd2 ile benzer konum (Motor: +1.2).' },
      ],
    },
    '26w': {
      text: '26.Rd6+: kale tempoyla şah çeker.',
      amac: 'Şahı geri çekilmeye zorlamak ve ardından Rd2 ile kaleleri değişmek.',
      neden: '26.Rd2 hemen de aynı sonucu verir (Motor: +0.78). Önce şah çekmek şahı e7’ye geri gönderir. 26.Nh4? Bc8 (−0.01) avantajı yok eder.',
      diger: [
        { move: '26.Rd2', text: '26...Rxd2 27.Nxd2 Ne5 ile aynı yapı (Motor: +0.78).' },
        { move: '26.Nh4', text: '26...Bc8 27.Rb1 Ne5 ile Siyah toparlanır (Motor: −0.01).' },
      ],
    },
    '26b': {
      text: '26...Ke7: şah e7’ye geri döner.',
      amac: 'Şahı güvenli bir kareye çekmek ve d6 kalesine saldırmak.',
      neden: 'Tek iyi hamle: 26...Be6? 27.Kf1 (Motor: +4.1) ve 26...Re6? 27.Bxe6 (+5.4) materyal kaybettirir.',
      diger: [
        { move: '26...Be6', text: '27.Kf1 Re4 28.Bc2 ile Siyahın kalesi tuzağa düşer (Motor: +4.1).' },
      ],
    },
    '27w': {
      text: '27.Rd2: kale ikinci yataya döner ve kale değişimi önerir.',
      amac: 'Siyahın aktif kalesini oyundan çıkarmak; taşları azaltmak.',
      neden: '27.Kf1? Rxb2 (Motor: −0.3) ve 27.Rd1? Rxb2 (−0.6) piyon kaybettirir. 27.Rd2 en temiz yol (Motor: +1.0).',
      diger: [
        { move: '27.Kf1', text: '27...Rxb2 28.Rd2 Rxd2 ile Siyah piyonu geri alır (Motor: −0.3).' },
        { move: '27.Rd1', text: '27...Rxb2 28.Re1+ Kd6 ile Siyah piyon kazanır (Motor: −0.6).' },
      ],
    },
    '27b': {
      text: '27...Rxd2: Siyah kaleleri değişir.',
      amac: 'Kaleyi kaybetmemek.',
      neden: 'Zorunlu: 27...Re4? 28.Bc2 (Motor: +5.2) ve 27...Bd3? 28.Rxd3 (+5.2) taş kaybettirir. Kale değişimi tek çıkış yoludur.',
      diger: [
        { move: '27...Re4', text: '28.Bc2 Kf6 29.Bxe4 Bxe4 ile Siyah kalite kaybeder (Motor: +5.2).' },
      ],
    },
    '28w': {
      text: '28.Nxd2: at kaleyi geri alır.',
      amac: 'Materyali dengelemek.',
      neden: 'Zorunlu: 28.g4? Rxb2 (Motor: −4.8) ve 28.Nd4? Nxd4 (−5.5) taş kaybettirir.',
    },
    '28b': {
      text: '28...Ne5: at merkeze, e5’e gelir.',
      amac: 'Atı aktif bir kareye getirmek ve d3, f3, c4 karelerini kontrol etmek.',
      neden: 'At e5’te Beyazın atını ve filini sınırlar. 28...b6 (Motor: +1.2) ve 28...b5 (+1.2) daha pasiftir. 28...Ne5 en iyisi (Motor: +0.9).',
      diger: [
        { move: '28...b6', text: '29.g3 g5 30.Nf3 Kf6 ile benzer konum (Motor: +1.2).' },
        { move: '28...b5', text: '29.Nf3 Be4 30.Bd1 Kd6 ile benzer konum (Motor: +1.2).' },
      ],
    },
    '29w': {
      text: '29.g3: Beyaz f4 piyonunu sorgular.',
      amac: 'Siyahın ileri f4 piyonunu değiştirmek ya da yalnız bırakmak; şah kanadında Beyazın piyonlarını aktifleştirmek.',
      neden: '29.Kf1 (Motor: +0.94) ve 29.Bd5 (+0.89) daha sakin hamlelerdir. 29.g3, Siyahı bir karar vermeye zorlar (Motor: +0.9).',
      diger: [
        { move: '29.Kf1', text: '29...b5 30.Bd1 Kf6 31.Be2 ile sakin bir manevra (Motor: +0.94).' },
        { move: '29.Bd5', text: '29...b6 30.Kf1 Kd6 ile benzer konum (Motor: +0.89).' },
      ],
    },
    '29b': {
      text: '29...g5: Siyah f4 piyonunu g-piyonuyla destekler.',
      amac: 'f4 piyonunu korumak ve şah kanadında alan almak.',
      neden: 'Motor 29...Nd3 30.Bc2 Kf6 31.Bxd3 Bxd3 (Motor: +0.64) ya da 29...fxg3 30.hxg3 (+0.75) yolunu biraz daha iyi buluyor. 29...g5 sonrası Siyahın piyonları kara karelerde sabitlenecek (+0.95).',
      diger: [
        { move: '29...Nd3', text: '30.Bc2 Kf6 31.Bxd3 Bxd3 ile taşlar değişir (Motor: +0.64).' },
        { move: '29...fxg3', text: '30.hxg3 Nd3 31.Bc2 Kf6 ile şah kanadı açılır (Motor: +0.75).' },
      ],
    },
    '30w': {
      text: '30.gxf4: Beyaz piyonları değişir.',
      amac: 'Şah kanadında piyon sayısını azaltmak ve Siyahın f4 piyonunu yalnız bırakmak.',
      neden: '30.Bd5 (Motor: +0.93) ve 30.a3 (+0.8) değişimi ertelerdi. 30.gxf4 sonrası şah kanadında Beyazın f2–h2’sine karşı Siyahın f4–h7’si kalır; vezir kanadında Beyazın a–b–c piyonları Siyahın a–b piyonlarına karşı 3’e 2 çoğunluk oluşturur (Motor: +0.8).',
      diger: [
        { move: '30.Bd5', text: '30...b6 31.Kg2 Nd3 ile Siyahın atı aktifleşir (Motor: +0.93).' },
        { move: '30.a3', text: '30...a5 31.Bd5 b5 ile vezir kanadında gerginlik (Motor: +0.8).' },
      ],
    },
    '30b': {
      text: '30...gxf4: piyonla geri alınır.',
      amac: 'Materyali korumak.',
      neden: 'Zorunlu: 30...Nd3? 31.fxg5 (Motor: +3.5) ve 30...Nf7? 31.Bxf7 (+4.3) materyal kaybettirir.',
    },
    '31w': {
      text: '31.Bd5: fil merkezde güçlü bir kareye yerleşir.',
      amac: 'b7 piyonuna baskı yapmak ve a8–h1 çaprazında Siyahın filini sınırlamak.',
      neden: '31.Kg2 (Motor: +0.81) ve 31.Bg8 (+0.7) benzer değerdedir. 31.Bd5 en aktif hamle (Motor: +0.82); fil hem b7’ye hem f3’e bakar.',
      diger: [
        { move: '31.Kg2', text: '31...a5 32.Bc4 b6 33.a3 ile benzer konum (Motor: +0.81).' },
        { move: '31.Bg8', text: '31...h6 32.Kg2 a5 ile fil h7’ye baskı yapar (Motor: +0.7).' },
      ],
    },
    '31b': {
      text: '31...b6: Siyah b7 piyonunu b6’ya ilerletir ve c5 karesini kontrol eder.',
      amac: 'b7 piyonunu fil saldırısından kurtarmak ve vezir kanadında piyonları sağlam bir şekilde yerleştirmek.',
      neden: '31...b5 32.b4 (Motor: +1.16) ve 31...Bc8 32.Nc4 (+1.17) daha kötüdür. 31...b6 en iyisi (Motor: +0.83).',
      diger: [
        { move: '31...b5', text: '32.b4 Be6 33.Bb7 Kd6 ile c5 karesi zayıflar (Motor: +1.16).' },
        { move: '31...Bc8', text: '32.Nc4 Nxc4 33.Bxc4 Kf6 ile atlar değişir (Motor: +1.17).' },
      ],
    },
    '32w': {
      text: '32.Kg2: şah merkeze yaklaşmaya hazırlanır.',
      amac: 'Şahı f3 karesine getirmek ve f4 piyonuna baskı yapmak.',
      neden: '32.b3 (Motor: +0.93) vezir kanadını önce sabitlerdi; 32.Kf1 (+0.69) şahı vezir kanadına götürür. 32.Kg2 şahı f3’e hazırlar (Motor: +0.82).',
      diger: [
        { move: '32.b3', text: '32...b5 33.b4 Be6 34.Bb7 ile vezir kanadı sabitlenir (Motor: +0.93).' },
        { move: '32.Kf1', text: '32...a5 33.b3 Bd3+ ile Siyahın fili aktifleşir (Motor: +0.69).' },
      ],
    },
    '32b': {
      text: '32...Bg4: fil g4’e gelir ve f3 karesini kontrol eder.',
      amac: 'Beyazın şahının f3’e gelmesini engellemek.',
      neden: '32...Be6 33.Bxe6 Kxe6 (Motor: +0.78) filleri değiştirip şahı aktifleştirirdi; 32...Kd6 (+0.84) da iyidir. 32...Bg4 Beyazın şahını sınırlar (Motor: +1.0).',
      diger: [
        { move: '32...Be6', text: '33.Bxe6 Kxe6 34.b3 Kf5 ile at oyun sonuna geçiş; Siyahın şahı aktif (Motor: +0.78).' },
        { move: '32...Kd6', text: '33.Be4 Ke6 34.b3 a5 ile benzer konum (Motor: +0.84).' },
      ],
    },
    '33w': {
      text: '33.b4: vezir kanadındaki piyonlar ilerlemeye başlar.',
      amac: 'Vezir kanadında alan almak ve c4-c5 kırılmasının ilk adımını atmak.',
      neden: '33.Nc4 Nxc4 34.Bxc4 (Motor: +1.15) atları hemen değiştirirdi; 33.b3 (+0.94) daha yavaştır. 33.b4 planlıdır ama Siyahın atına c4 karesini verir (Motor: +0.9).',
      diger: [
        { move: '33.Nc4', text: '33...Nxc4 34.Bxc4 a5 35.a3 ile fil oyun sonu (Motor: +1.15).' },
        { move: '33.b3', text: '33...a5 34.Nc4 Nxc4 35.Bxc4 ile benzer konum (Motor: +0.94).' },
      ],
    },
    '33b': {
      text: '33...Kd6: şah d6’ya gelir ve vezir kanadına yaklaşır.',
      amac: 'Beyazın c4-c5 kırılmasına karşı şahı hazır tutmak.',
      neden: '33...Kf6 34.Nc4 (Motor: +1.14) ve 33...a5 34.Nc4 (+1.17) biraz daha kötüdür. 33...Kd6 en iyisi (Motor: +0.91).',
      diger: [
        { move: '33...Kf6', text: '34.Nc4 Nxc4 35.Bxc4 a5 ile Siyahın şahı vezir kanadından uzak (Motor: +1.14).' },
        { move: '33...a5', text: '34.Nc4 Nxc4 35.Bxc4 Kf6 ile benzer konum (Motor: +1.17).' },
      ],
    },
    '34w': {
      text: '34.Be4: fil e4’e çekilir.',
      amac: 'h7 piyonuna baskı yapmak ve fili güvenli bir kareye çekmek.',
      neden: 'Küçük bir doğruluk kaybı: 34.Bg8! h6 35.Nc4+ Nxc4 36.Bxc4 atları tempoyla değiştirirdi (Motor: +1.08). 34.Be4 sonrası +0.53. Avantaj yine de Beyazda.',
      diger: [
        { move: '34.Bg8', text: '34...h6 35.Nc4+ Nxc4 36.Bxc4 ile atlar tempoyla değişir (Motor: +1.08).' },
        { move: '34.Bb7', text: '34...a5 35.Ne4+ Ke7 36.Ng5 ile at aktifleşir (Motor: +0.56).' },
      ],
    },
    '34b': {
      text: '34...h6: h7 piyonunu fil saldırısından kurtarır ve g5 karesini kontrol eder.',
      amac: 'h-piyonunu güvenli bir kareye getirmek.',
      neden: '34...Be6 35.Bxh7 Bxa2 (Motor: +0.66) piyonları değiştirir; 34...h5 (+0.84) daha kötüdür. 34...h6 en sağlam hamle (Motor: +0.66).',
      diger: [
        { move: '34...Be6', text: '35.Bxh7 Bxa2 36.Kh3 ile piyonlar değişir (Motor: +0.66).' },
        { move: '34...h5', text: '35.Nf3 a5 36.Nxe5 Kxe5 ile h5 piyonu zayıflar (Motor: +0.84).' },
      ],
    },
    '35w': {
      text: '35.Nf3: at değişimi önerir.',
      amac: 'Atları değiştirip saf fil oyun sonuna geçmek; piyon önde olan taraf taş değiştirir.',
      neden: '35.Bc2 (Motor: +0.49) ve 35.a3 (+0.48) benzer değerdedir. 35.Nf3 Siyaha bir seçim sunar (Motor: +0.45).',
      diger: [
        { move: '35.Bc2', text: '35...a5 36.Bb3 Be2 ile sakin bir manevra (Motor: +0.49).' },
        { move: '35.a3', text: '35...a5 36.Bb7 Be6 37.Ba6 ile benzer konum (Motor: +0.48).' },
      ],
    },
    '35b': {
      text: '35...Nxf3: atlar değişir.',
      amac: 'Materyali sadeleştirmek.',
      neden: 'Hata: 35...Nc4! atları tutar ve Beyazın planını zorlaştırır (Motor: +0.52). 35...Nxf3 sonrası saf fil oyun sonunda Beyazın 3’e 2 çoğunluğu daha belirgin hale gelir (+1.2). Piyon eksiği olan tarafın taş değiştirmesi genelde onun aleyhinedir.',
      diger: [
        { move: '35...Nc4', text: '36.Nd4 a5 37.Nf5+ Ke5 ile atlar kalır; Siyahın şansı daha fazla (Motor: +0.52).' },
        { move: '35...Nf7', text: '36.Bd3 a5 37.Nd2 Ne5 ile at aktif kalır (Motor: +0.92).' },
      ],
    },
    '36w': {
      text: '36.Bxf3: fil atı geri alır. Aynı renk (beyaz kare) filli bir oyun sonu.',
      amac: 'Materyali dengelemek.',
      neden: 'Zorunlu: 36.Bb7?? Nh4+ ya da 36.h3?? Nh4+ ile at kaçar ve Beyaz bir taş kaybeder (Motor: −4.9). Bu oyun sonunda Beyazın bir piyon fazlası ve vezir kanadında 3’e 2 çoğunluğu var.',
    },
    '36b': {
      text: '36...Be6: fil e6’ya gelir.',
      amac: 'Fili merkezde tutmak ve hem vezir kanadını hem şah kanadını kontrol etmek.',
      neden: '36...Bc8 (Motor: +1.34) ve 36...Bd7 (+1.41) benzer değerdedir. 36...Be6 en esnek hamle (Motor: +1.34).',
      diger: [
        { move: '36...Bc8', text: '37.Bh5 Ke5 38.Kf3 Bd7 ile benzer konum (Motor: +1.34).' },
        { move: '36...Bd7', text: '37.Bh5 a5 38.Kf3 Ke5 ile benzer konum (Motor: +1.41).' },
      ],
    },
    '37w': {
      text: '37.a3: Beyaz b4 piyonunu destekler.',
      amac: 'Vezir kanadı piyonlarını sağlam bir zincir haline getirmek (a3–b4–c3) ve ...a5 ile b4’e saldırıya hazırlıklı olmak.',
      neden: '37.Be2 (Motor: +1.42) ve 37.Bb7 (+1.24) biraz daha zayıftır. 37.a3 en iyisi (Motor: +1.52).',
      diger: [
        { move: '37.Be2', text: '37...a5 38.a3 Ke5 39.Kf3 ile benzer konum (Motor: +1.42).' },
        { move: '37.Bb7', text: '37...a5 38.a3 axb4 39.cxb4 ile a-piyonları değişir (Motor: +1.24).' },
      ],
    },
    '37b': {
      text: '37...Ke5: şah merkezi tutar.',
      amac: 'Şahı aktif bir kareye getirmek ve f4 piyonunu korumak.',
      neden: '37...a5 (Motor: +1.54) ve 37...Ke5 (+1.61) benzer değerdedir. 37...Bc8? 38.c4 (+2.15) ise Beyazın planını hızlandırır.',
      diger: [
        { move: '37...a5', text: '38.Bh5 Kd5 39.Kf3 Ke5 ile benzer konum (Motor: +1.54).' },
        { move: '37...Bc8', text: '38.c4 a5 39.bxa5 bxa5 ile Beyaz geçer piyon yaratır (Motor: +2.15).' },
      ],
    },
    '38w': {
      text: '38.Bb7: fil b7’den a6 piyonuna saldırır.',
      amac: 'Siyahı ...a5 ile piyonu ilerletmeye zorlamak; vezir kanadında piyon yapısını değiştirmek.',
      neden: '38.Be2 (Motor: +1.53) ve 38.Bh5 (+1.41) benzer değerdedir. 38.Bb7 Siyahı bir karar vermeye zorlar (Motor: +1.53).',
      diger: [
        { move: '38.Be2', text: '38...a5 39.Kf3 Bc8 40.Bd3 ile sakin bir manevra (Motor: +1.53).' },
        { move: '38.Bh5', text: '38...Ke4 39.Bg6+ Kd5 40.Kf3 ile şah aktifleşir (Motor: +1.41).' },
      ],
    },
    '38b': {
      text: '38...a5: piyon kurtarılır ve b4 sorgulanır.',
      amac: 'a6 piyonunu kurtarmak ve vezir kanadında Beyazın piyonlarına saldırmak.',
      neden: 'Tek iyi hamle: 38...Bc4? 39.Kh3 (Motor: +3.0) ve 38...Bd7? 39.Bxa6 (+3.9) piyon kaybettirir.',
      diger: [
        { move: '38...Bd7', text: '39.Bxa6 Ke4 40.Kf1 ile Beyaz iki piyon önde (Motor: +3.9).' },
      ],
    },
    '39w': {
      text: '39.Kf3: şah f3’e gelir ve f4 piyonuna yaklaşır.',
      amac: 'Şahı aktifleştirmek; f4 piyonuna baskı yapmak ve Siyahın şahını sınırlamak.',
      neden: '39.Bc6 (Motor: +1.82) ve 39.bxa5 (+1.78) benzer değerdedir. 39.Kf3 şahı oyuna sokar (Motor: +1.78).',
      diger: [
        { move: '39.Bc6', text: '39...Bg4 40.Bb7 Kd6 ile sakin bir manevra (Motor: +1.82).' },
        { move: '39.bxa5', text: '39...bxa5 40.Kf3 Kf5 41.Be4+ ile benzer konum (Motor: +1.78).' },
      ],
    },
    '39b': {
      text: '39...Bd7? Fil d7’ye çekilir.',
      amac: 'Fili b5 ve a4 karelerine götürmek; vezir kanadını savunmak.',
      neden: 'Oyun sonunun en ciddi hatası. 39...axb4! 40.axb4 ile a-piyonları değişir ve Beyazın çoğunluğu 2’ye 1’e iner (Motor: +1.4). 39...Kf5 (+2.0) de daha iyidir. Oyundaki hamle sonrası Beyaz 40.bxa5 ile hemen geçer piyon yaratabilir (Motor: +2.7).',
      diger: [
        { move: '39...axb4', text: '40.axb4 Bf5 41.Ba6 Be6 ile Beyazın çoğunluğu azalır (Motor: +1.4).' },
        { move: '39...Kf5', text: '40.bxa5 bxa5 41.Be4+ Ke5 ile şah aktif kalır (Motor: +2.0).' },
      ],
    },
    '40w': {
      text: '40.Be4: fil e4’e çekilir.',
      amac: 'Fili merkezde tutmak ve Siyahın şahını sınırlamak.',
      neden: 'Kaçan fırsat: 40.bxa5! bxa5 41.c4 h5 42.c5 ile Beyaz hemen geçer bir c-piyonu yaratırdı (Motor: +2.8). 40.c4 (+2.1) da güçlüydü. 40.Be4 sonrası avantaj +1.2’ye düştü; Tiviakov planı sonraya bıraktı.',
      diger: [
        { move: '40.bxa5', text: '40...bxa5 41.c4 h5 42.c5 ile c-piyonu geçer piyon olur (Motor: +2.8).' },
        { move: '40.c4', text: '40...axb4 41.axb4 h5 42.c5 bxc5 43.bxc5 ile geçer piyon (Motor: +2.1).' },
      ],
    },
    '40b': {
      text: '40...Ba4: fil a4’e gelir ve d1–c2 karelerini, yani Beyaz şahın vezir kanadına geçiş yolunu kontrol eder.',
      amac: 'Beyazın şahını şah kanadında tutmak; şah vezir kanadına gelmezse c4-c5 kırılması desteksiz kalır.',
      neden: 'Bu oyun sonunun ana sorusu Beyaz şahın vezir kanadına ulaşıp ulaşamayacağıdır; Siyahın fili bu yüzden d1, c2 ve d3 karelerini gözetler. 40...h5 (Motor: +1.06) ve 40...Be8 (+1.10) de aynı mantıkla oynanabilirdi; 40...Ba4 (+1.16) aynı derecede iyi.',
      diger: [
        { move: '40...h5', text: '41.Ba8 Bg4+ 42.Kg2 h4: Siyah h-piyonuyla alan alır (Motor: +1.06).' },
        { move: '40...Be8', text: '41.Bb7 Bh5+ 42.Kg2 Bg4 ile fil şah kanadından Beyaz şahı rahatsız eder (Motor: +1.10).' },
      ],
    },
    '41w': {
      text: '41.Bd3: fil d3’e çekilir ve b5–a6 karelerine hazırlanır.',
      amac: 'Fili esnek bir kareye almak ve Siyahın filini a4’ten kovalayacak Bb5 fikrini hazırlamak.',
      neden: 'Burada önemli bir yapı gerçeği var: Siyahın bütün piyonları (a5, b6, f4, h6) kara karelerde; Beyazın beyaz kareli fili bunlara hiçbir zaman saldıramaz. Bu yüzden oyun fillerle değil, şahların yeri ve c4-c5 kırılmasıyla kazanılacak. 41.Bb7 (Motor: +1.15) de aynı değerdedir.',
      diger: [
        { move: '41.Bb7', text: '41...Bd1+ 42.Kg2 Bg4 ile Siyahın fili şahı rahatsız eder (Motor: +1.15).' },
      ],
    },
    '41b': {
      text: '41...Bd7: fil d7’ye döner ve b5 karesini kontrol eder.',
      amac: 'Beyaz filin b5’e gelmesini önlemek ve gerekirse ...Bh3 ya da ...Bf5 ile şah kanadına dönmek.',
      neden: '41...Bb3 (Motor: +1.25) de makuldür. 41...axb4? ise yanlış anda yapılan bir değişim: 42.cxb4 ile Beyaz c-piyonuyla geri alır, a3–b4 ikilisi bağlantılı kalır ve şah h5 karesinden sonra rahatça oyuna girer (Motor: +1.87).',
      diger: [
        { move: '41...Bb3', text: '42.Bb5 Bc2 43.Ba6 ile filler dolaşır (Motor: +1.25).' },
        { move: '41...axb4', text: '42.cxb4 h5 43.Kg2 ile Beyazın a3–b4 piyonları ve şahı rahat (Motor: +1.87).' },
      ],
    },
    '42w': {
      text: '42.Bf1: fil f1’e çekilir; Beyaz şahını e2–d2 üzerinden vezir kanadına götürmeye hazırlanır.',
      amac: 'Fil e2 ve b5’e kolayca ulaşabilsin, şah da e2’ye geçebilsin diye taşları yeniden düzenlemek.',
      neden: '42.Bc4 (Motor: +1.38) ve 42.Bc2 (+1.35) biraz daha kesindir. 42.Bf1 (+1.06) yavaş bir manevra; Tiviakov acele etmiyor, çünkü Siyahın kendi aktif planı yok ve bekleyen taraf zaman kaybetmez.',
      diger: [
        { move: '42.Bc4', text: '42...Bh3 43.Bb5 h5 44.Ke2 ile şah hemen yola çıkar (Motor: +1.38).' },
        { move: '42.Bc2', text: '42...Bc8 43.Ba4 Be6 44.Bc6 ile fil b7–c6 karelerinden baskı yapar (Motor: +1.35).' },
      ],
    },
    '42b': {
      text: '42...Be6: fil e6’ya gelir ve c4 ile b3 karelerini gözetler.',
      amac: 'c4 karesini kontrol ederek Beyazın c3-c4 ilerleyişini zorlaştırmak.',
      neden: 'Motor 42...axb4! 43.axb4 Bf5 yolunu tercih ediyor (Motor: +1.06): a-piyonları değişince Beyazın çoğunluğu 2’ye 1’e iner. Siyah bu değişimi defalarca erteledi (39., 42., 48., 49. hamleler) ve sonunda Beyaz c4’ü kendi zamanında oynadı. 42...Be6 (+1.30).',
      diger: [
        { move: '42...axb4', text: '43.axb4 Bf5 44.Bb5 Be6: Beyazın çoğunluğu azalır (Motor: +1.06).' },
        { move: '42...Bf5', text: '43.Ba6 Be6 44.Bd3 Bc8 ile bekleme (Motor: +1.32).' },
      ],
    },
    '43w': {
      text: '43.Bb5: fil b5’e gider; a4 ve e8 karelerini kontrol eder.',
      amac: 'Fili aktif bir kareye koymak ve şah e2’ye geçtiğinde Siyahın filinin a4/d1 üzerinden şaha karışmasını önlemek.',
      neden: '43.Ba6 (Motor: +1.26) ve 43.Bd3 (+1.26) benzer değerdedir. b5’teki fil ayrıca ...Bd7 ve ...Ba4 manevralarını önler; bir sonraki hamlede şah rahatça e2’ye gidecek (Motor: +1.33).',
      diger: [
        { move: '43.Ba6', text: '43...Bf5 44.Bb7 axb4 45.cxb4 ile Siyah değişimi yapar (Motor: +1.26).' },
        { move: '43.Bd3', text: '43...Bb3 44.Bb5 Bc2 ile Siyahın fili c2’ye yerleşir (Motor: +1.26).' },
      ],
    },
    '43b': {
      text: '43...Bf5: fil f5’e gelir ve b1–h7 çaprazından c2 ile d3 karelerini tutar.',
      amac: 'Beyaz şahın d3 ve c2 üzerinden vezir kanadına ulaşmasını yavaşlatmak.',
      neden: 'Siyah pasif bir bekleme stratejisi izliyor: şah e5’te f4’ü ve merkezi tutuyor, fil de şahın geçiş karelerini kapatıyor. 43...Bh3 ve 43...Bc8 aynı değerdedir (Motor: +1.26); asıl soru Siyahın ...axb4 değişimini ne zaman yapacağıdır.',
      diger: [
        { move: '43...Bh3', text: '44.Bc6 Be6 45.Be8 Kf5 ile şah aktifleşir (Motor: +1.26).' },
        { move: '43...Bc8', text: '44.Be8 Be6 45.Bc6 ile bekleme (Motor: +1.26).' },
      ],
    },
    '44w': {
      text: '44.Ke2: şah vezir kanadına yola çıkar.',
      amac: 'Şahı d2–c2–d3–c3 yoluyla vezir kanadına götürmek ve c4-c5 kırılmasını desteklemek.',
      neden: 'Şah f3’te f4’ü baskı altında tutuyordu, ama asıl iş vezir kanadında. Şah kanadında Siyahın tek piyonu f4 ileri gelse de (...f3) f2 tarafından durdurulur, bu yüzden Beyaz şahını oradan çekebilir. 44.Ba4 (Motor: +1.26) ve 44.h4 (+1.25) bekleme hamleleridir; 44.Ke2 planın ilk adımı (+1.15).',
      diger: [
        { move: '44.Ba4', text: '44...Be6 45.Bc6 Kf5 46.Bb5 ile şah f5’e geçer (Motor: +1.26).' },
        { move: '44.h4', text: '44...Bh3 45.bxa5 bxa5 46.Ba4: h-piyonu ilerler, ama g4 karesi zayıflar (Motor: +1.25).' },
      ],
    },
    '44b': {
      text: '44...Be4: fil e4’e gelir; b1–h7 ve a8–h1 çaprazlarını aynı anda kontrol eder.',
      amac: 'c2, d3 ve f3 karelerini tutarak Beyaz şahın yolunu kapatmak.',
      neden: '44...Bh3 (Motor: +1.15) ve 44...Bg4+ (+1.25) benzer değerdedir. e4’teki fil merkezi bir karede, şahın da desteğiyle konumu sağlam (Motor: +1.23).',
      diger: [
        { move: '44...Bh3', text: '45.Bc6 Bf5 46.bxa5 bxa5 ile a-piyonları değişir ama b-piyonu Beyazda kalır (Motor: +1.15).' },
        { move: '44...Bg4+', text: '45.Kd3 Bf5+ 46.Kd2 Be4: tekrar eden şahlar Beyazı durdurmaz (Motor: +1.25).' },
      ],
    },
    '45w': {
      text: '45.Kd2: şah d2’ye gelir.',
      amac: 'c2 üzerinden b3 ya da d3’e ulaşmak.',
      neden: '45.Kd1 (Motor: +1.10) aynı amaca hizmet eder. Şah d2’de hem c2’ye hem d3’e gidebilir; Siyahın fili ikisini birden uzun süre tutamaz (Motor: +1.12).',
      diger: [
        { move: '45.Kd1', text: '45...Bb7 46.Ke2 Ke4 47.Bd3+ ile benzer konum (Motor: +1.10).' },
      ],
    },
    '45b': {
      text: '45...Bf5: fil f5’e döner ve c2 karesini kontrol eder.',
      amac: 'Beyaz şahın c2’ye gelmesini önlemek.',
      neden: '45...Ba8 (Motor: +1.19) ve 45...Bb7 (+1.25) uzun çaprazda beklemektir. 45...Bf5 doğrudan c2’yi keser (Motor: +1.28).',
      diger: [
        { move: '45...Ba8', text: '46.Bf1 Be4 47.Be2 Bg6 ile bekleme (Motor: +1.19).' },
      ],
    },
    '46w': {
      text: '46.Bd3: fil d3’te fil değişimi önerir.',
      amac: 'Siyahın filini b1–h7 çaprazından uzaklaştırmak; değişim olursa piyon oyun sonu Beyaz için kazançtır.',
      neden: 'Piyon oyun sonu Beyaz için açıkça kazanılmış: 46...Bxd3 47.Kxd3 f3 48.c4 (Motor: +5.5); vezir kanadındaki çoğunluk uzak bir geçer piyon yaratır. Bu yüzden Siyahın fili değişimden kaçmak zorunda ve her teklif ona bir kare kaybettirir. 46.Bc6 ve 46.Ke2 biraz daha iyidir (Motor: +1.25; oyundaki +0.91).',
      diger: [
        { move: '46.Bc6', text: '46...Bh7 47.Bb7 Bg6 48.Ke2 ile bekleme (Motor: +1.25).' },
        { move: '46.Ke2', text: '46...Be4 47.Kd2 Bb7 48.Bf1 ile konum tekrarlanır (Motor: +1.25).' },
      ],
    },
    '46b': {
      text: '46...Be6: Siyah değişimden kaçar ve c4 karesine bakar.',
      amac: 'Filleri tutmak; piyon oyun sonu Siyah için kayıptır.',
      neden: 'Motor 46...Bd7! 47.Bf1 axb4 48.axb4 Kd5 yolunu daha iyi buluyor (Motor: +0.81): şah d5’e gelir ve c4 karesini kontrol eder. 46...Be6 (+1.25) Beyaz şahın c2’ye gelmesine izin verir.',
      diger: [
        { move: '46...Bd7', text: '47.Bf1 axb4 48.axb4 Kd5: Siyahın şahı c4’ü tutar (Motor: +0.81).' },
        { move: '46...Bc8', text: '47.Bf1 Bf5 48.Bb5 Be4 ile bekleme (Motor: +1.25).' },
      ],
    },
    '47w': {
      text: '47.Kc2: şah c2’ye ulaşır.',
      amac: 'Şahı b3 ya da d3 karesine getirmek ve c4-c5 kırılmasını desteklemek.',
      neden: 'Siyahın fili e6’ya gidince c2 karesi serbest kaldı ve Beyaz şah hemen girdi. 47.Bb5 (Motor: +1.25) ve 47.Bf1 (+1.25) aynı değerde; 47.Kc2 (+1.17) planı somutlaştırır.',
      diger: [
        { move: '47.Bb5', text: '47...Bf5 48.Bc6 Bg6 49.Ke2 ile şah yeniden dolaşır (Motor: +1.25).' },
      ],
    },
    '47b': {
      text: '47...Bf7: fil f7’ye gider ve a2–g8 çaprazında kalır.',
      amac: 'c4 ve b3 karelerini kontrol etmek; ...Bg6+ ile şah çekme imkânını korumak.',
      neden: '47...Bd7 48.Kb3 Kd5 (Motor: +1.17) şahı aktifleştirirdi; 47...Ba2? (+1.78) ise fili kenara atar. 47...Bf7 (+1.35) kabul edilebilir.',
      diger: [
        { move: '47...Bd7', text: '48.Kb3 Kd5 49.Be2 a4+ ile Siyahın şahı c4’e yaklaşır (Motor: +1.17).' },
        { move: '47...Ba2', text: '48.Ba6 Bf7 49.Kd3 Bd5 ile fil zaman kaybeder (Motor: +1.78).' },
      ],
    },
    '48w': {
      text: '48.Bf1: fil f1’e döner.',
      amac: 'Fili g2 ve b5 karelerine hazır tutmak; şahın d3’e gelmesini kolaylaştırmak.',
      neden: '48.Ba6 (Motor: +1.56) ve 48.Bb5 (+1.51) benzer değerdedir. 48.Bf1 (+1.83) bir bekleme hamlesi gibi görünür ama Siyaha hamle sırası vererek onu kararsızlığa iter.',
      diger: [
        { move: '48.Ba6', text: '48...axb4 49.cxb4 Be8 50.Kc3 ile c-piyonu b4’ü alır (Motor: +1.56).' },
        { move: '48.Bb5', text: '48...Bh5 49.bxa5 bxa5 50.Kb3 ile a5 hedef olur (Motor: +1.51).' },
      ],
    },
    '48b': {
      text: '48...Be6: fil e6’ya gelir.',
      amac: 'c4 karesini kontrol etmek.',
      neden: 'Son büyük fırsat: 48...axb4! 49.cxb4 Be8 50.Kc3 b5 ile Siyah b5’e bir piyon koyar ve Beyazın c-piyonu ilerleyemez (Motor: +1.01). 48...Be6 sonrası +1.93; Beyaz şah d3’e gelince c4 ilerleyişi durdurulamaz hale gelir.',
      diger: [
        { move: '48...axb4', text: '49.cxb4 Be8 50.Kc3 b5 ile Siyah vezir kanadını kilitler (Motor: +1.01).' },
        { move: '48...Bg6+', text: '49.Kb3 Bf7+ 50.Ka4 axb4 51.axb4 ile şah a4’e kaçar (Motor: +1.52).' },
      ],
    },
    '49w': {
      text: '49.Kd3: şah d3’e gelir ve c4 ilerleyişini destekler.',
      amac: 'c4’ü güvenle oynamak; şah c4 ve c3 karelerine yakın olmalı.',
      neden: 'Şah d3’te hem c4’ü hem e4’ü kontrol eder ve Siyah şahın d5’e gelmesini zorlaştırır. 49.Bb5 (Motor: +1.85) ve 49.bxa5 (+1.65) daha zayıftır; 49.Kd3 en iyisi (+2.03).',
      diger: [
        { move: '49.Bb5', text: '49...Bf7 50.bxa5 bxa5 51.Kd3 ile aynı plana döner (Motor: +1.85).' },
        { move: '49.bxa5', text: '49...bxa5 50.Kd3 Kd5 51.c4+: Siyahın şahı d5’e gelir (Motor: +1.65).' },
      ],
    },
    '49b': {
      text: '49...Bf7: fil f7’ye çekilir.',
      amac: 'c4 karesini çaprazdan kontrol etmek ve ...Bg6+ hazırlamak.',
      neden: 'Motor 49...axb4 50.axb4 Bf5+ 51.Kc4 yolunu biraz daha iyi buluyor (Motor: +2.42); 49...Bf7 (+2.90). Artık Siyahın tüm seçenekleri kötü; Beyazın şahı c4-c5 için yerinde.',
      diger: [
        { move: '49...axb4', text: '50.axb4 Bf5+ 51.Kc4 Bd7 ile şah c4’e gelir (Motor: +2.42).' },
        { move: '49...h5', text: '50.h4 Bf5+ 51.Kd2 Bg4: h-piyonları sabitlenir (Motor: +2.52).' },
      ],
    },
    '50w': {
      text: '50.c4! Çoğunluk harekete geçer.',
      amac: 'c5 kırılmasını hazırlamak; b4–c4 ikilisiyle bir geçer piyon yaratmak.',
      neden: 'Şah d3’te c4’ü korur ve Siyahın fili c4’ü tek başına durduramaz. 50.Bg2 (Motor: +2.98) biraz daha iyidir; 50.bxa5 (+2.35) ise b-piyonunu değiştirip çoğunluğu zayıflatır. 50.c4 (+2.90) planın kalbidir.',
      diger: [
        { move: '50.Bg2', text: '50...Bh5 51.Bb7 Bg4 52.c4 ile aynı plan bir hamle sonra (Motor: +2.98).' },
        { move: '50.bxa5', text: '50...bxa5 51.Bg2 Bh5 52.Bb7: Beyazın piyonu a3’te tek kalır (Motor: +2.35).' },
      ],
    },
    '50b': {
      text: '50...axb4: Siyah a-piyonlarını değişir.',
      amac: 'Beyazın çoğunluğunu azaltmak ve c-piyonunu yalnız bırakmak.',
      neden: 'Artık çok geç: b4 piyonu a3 ile geri alınacak ve b4–c4 ikilisi bozulmayacak. 50...Be6 (Motor: +3.43) ve 50...Bg6+ (+3.71) da kurtarmaz. 50...axb4 (+3.72).',
      diger: [
        { move: '50...Be6', text: '51.Bg2 Bf5+ 52.Kc3 Bg4: Beyaz c5’i hazırlar (Motor: +3.43).' },
      ],
    },
    '51w': {
      text: '51.axb4: a-piyonuyla geri alınır; b4–c4 ikilisi korunur.',
      amac: 'Piyon zincirini bozmadan materyali geri almak.',
      neden: 'Zorunlu: 51.c5? bxa3 52.cxb6 Kd6 (Motor: −3.2) Siyaha a-hattında durdurulamaz bir geçer piyon verir; 51.Kc2? bxa3 (−5.2) ise daha da kötüdür.',
    },
    '51b': {
      text: '51...Bg6+: fil tempoyla şah çeker.',
      amac: 'Beyazın şahını kötü bir kareye göndermek.',
      neden: '51...Be8 ve 51...Bh5 benzer değerdedir (Motor: +3.87). 51...Bg6+ (+3.76) Beyazı tek doğru hamleyi bulmaya zorlar: şah piyonlarına yakın kalmalı.',
      diger: [
        { move: '51...Be8', text: '52.Bg2 Bg6+ 53.Kc3 Bh5 ile aynı sonuç (Motor: +3.87).' },
      ],
    },
    '52w': {
      text: '52.Kc3: şah c3’e gider ve c4–b4 piyonlarını korur.',
      amac: 'c5 kırılmasını desteklemek; Siyah şahın d4 üzerinden c4’e saldırmasını önlemek.',
      neden: 'Tek iyi hamle: 52.Ke2? Be4 53.Bh3 Kd4 ve ...Bxc4 (Motor: +0.05) ve 52.Kd2? Kd4 53.c5 bxc5 54.bxc5 Kxc5 (0.03) bütün avantajı kaybettirir. Oyun sonlarında şahın piyonlara yakın olması, birkaç kare farkla sonucu değiştirir.',
      diger: [
        { move: '52.Ke2', text: '52...Be4 53.Bh3 Kd4 54.Be6 Bd3+ ile Siyahın şahı c4’ü alır (Motor: +0.05).' },
        { move: '52.Kd2', text: '52...Kd4 53.c5 bxc5 54.bxc5 Kxc5 ile c-piyonu düşer (Motor: +0.03).' },
      ],
    },
    '52b': {
      text: '52...Be4: fil e4’e gelir ve uzun çaprazda c6 ile b7 karelerini kontrol eder.',
      amac: 'c-piyonunun ilerleyeceği karelerden birini (c6) önceden tutmak.',
      neden: '52...Bf5 (Motor: +3.90) ve 52...Bh5 (+4.08) benzer değerdedir. Siyah c-piyonunun önüne geçmeye hazırlanıyor (+3.87).',
      diger: [
        { move: '52...Bf5', text: '53.Bg2 h5 54.h4 Bg4: Siyah beklemeye devam eder (Motor: +3.90).' },
      ],
    },
    '53w': {
      text: '53.c5! Kırılma: c-piyonu geçer piyon olacak.',
      amac: 'bxc5 bxc5 sonrası c5’te geçer bir piyon yaratmak.',
      neden: '53.Be2 (Motor: +3.99) ve 53.Bd3 (+3.96) hazırlık hamleleridir, ama sonuç değişmez. 53.c5 (+3.91) hemen hedefe gider: Siyahın şahı e5’te, c-hattından üç sütun uzakta.',
      diger: [
        { move: '53.Be2', text: '53...Bb7 54.c5 bxc5 55.bxc5 ile aynı plan (Motor: +3.99).' },
        { move: '53.Bd3', text: '53...Bc6 54.c5 bxc5 55.bxc5 ile aynı plan (Motor: +3.96).' },
      ],
    },
    '53b': {
      text: '53...bxc5: Siyah alır.',
      amac: 'Beyazın piyonlarından birini değiştirmek.',
      neden: '53...Kd5 54.cxb6 Kc6 (Motor: +4.70) ve 53...Bb7 54.cxb6 (+5.29) Beyaza b6’da daha ileri bir geçer piyon verir. 53...bxc5 en dayanıklı (+4.00).',
      diger: [
        { move: '53...Kd5', text: '54.cxb6 Kc6 55.Kd4: b6 piyonu Siyahın şahını bağlar (Motor: +4.70).' },
      ],
    },
    '54w': {
      text: '54.bxc5: b-piyonuyla alınır; c5’te geçer bir piyon doğar.',
      amac: 'Siyahın şahından uzak bir geçer piyon yaratmak.',
      neden: 'Tek iyi hamle: 54.b5? Kd6 55.Kb3 Kc7 (Motor: 0.00) ve 54.Bb5? cxb4+ (0.00) avantajı kaybettirir. Geçer piyon c5’te, kara bir karede; Siyahın beyaz kareli fili onu doğrudan alamaz, yalnızca önündeki beyaz kareleri (c6, c8) tutabilir.',
      diger: [
        { move: '54.b5', text: '54...Kd6 55.Kb3 Kc7 56.Kc4: Siyahın şahı b-piyonunu durdurur (Motor: 0.00).' },
        { move: '54.Bb5', text: '54...cxb4+ 55.Kxb4 Kd4 ile Beyazın piyonu kalmaz (Motor: 0.00).' },
      ],
    },
    '54b': {
      text: '54...Bc6: fil c6’dan c-piyonunun önünü tutar.',
      amac: 'c6 karesini bloke etmek; fil önde, şah arkadan yardıma gelecek.',
      neden: '54...Kd5 (Motor: +4.05) şahı piyona yaklaştırırdı; 54...Bb7 (+4.19) de mümkün. 54...Bc6 (+4.36) blokaj kurar, ama fil c6’da Beyaz şahın Kb5 ile kovalamasına açıktır.',
      diger: [
        { move: '54...Kd5', text: '55.Kb4 Bf3 56.Bb5 Bg4: şah c5’e baskı yapar (Motor: +4.05).' },
      ],
    },
    '55w': {
      text: '55.Kb4: şah b4 üzerinden piyona destek verir.',
      amac: 'Şahı b5 ve b6’ya getirerek c6 karesindeki blokajı kırmak.',
      neden: '55.Be2 ve 55.Bd3 aynı değerdedir (Motor: +4.64). Şah, filin c6’daki blokajını Kb5 ile kovalayacak; fil b5 karesini kontrol etmeye çalışsa da şah ilerler.',
      diger: [
        { move: '55.Be2', text: '55...Bd5 56.Kb4 Kd4 57.Bb5 ile aynı fikir (Motor: +4.64).' },
      ],
    },
    '55b': {
      text: '55...Bd5: fil d5’e gider ve hem c6’yı hem şah kanadını kontrol eder.',
      amac: 'Fili Kb5 saldırısından önce güvenli bir kareye almak.',
      neden: '55...Ke4 56.Bg2+ (Motor: +4.95) ve 55...Bd7 (+4.96) daha kötüdür. 55...Bd5 en dayanıklı (+4.67).',
      diger: [
        { move: '55...Ke4', text: '56.Bg2+ f3 57.Bf1 Bb7: f-piyonu sabitlenir (Motor: +4.95).' },
      ],
    },
    '56w': {
      text: '56.Kb5: şah b5’e gelir; Kb6 ve c6 hazırlanır.',
      amac: 'c6 ilerleyişini şahla desteklemek.',
      neden: '56.Bh3 (Motor: +5.02) ve 56.Bb5 (+4.76) benzer değerdedir. 56.Kb5 (+4.79) planın en doğrudan devamı.',
      diger: [
        { move: '56.Bh3', text: '56...Ke4 57.Bg2+ f3 58.Bf1: Siyahın f-piyonu bloke edilir (Motor: +5.02).' },
      ],
    },
    '56b': {
      text: '56...Ke4: şah e4’e gider ve f-piyonunu desteklemeye hazırlanır.',
      amac: 'Şah kanadında ...f3 ile karşı oyun yaratmak; Beyazın filini savunmaya çekmek.',
      neden: 'Siyah piyonu durduramayacağını gördüğü için karşı şans arıyor. Motor 56...h5 57.Kb6 Kf5 yolunu biraz daha dayanıklı buluyor (Motor: +3.88); 56...Ke4 (+4.88). Her iki durumda da Beyaz kazanıyor.',
      diger: [
        { move: '56...h5', text: '57.Kb6 Kf5 58.c6 Kg4: h-piyonu ilerler ama çok yavaş (Motor: +3.88).' },
        { move: '56...Kd4', text: '57.c6 Be6 58.Be2 Bh3 59.c7 ile piyon ilerler (Motor: +4.77).' },
      ],
    },
    '57w': {
      text: '57.Be2: fil e2’ye gelir; f3 karesini kontrol eder ve c4’e gitmeye hazırlanır.',
      amac: 'Siyahın ...Kf3 ya da ...Kd3 ile sızmasını önlemek ve Bc4 ile fil değişimi önermek.',
      neden: '57.Bc4 hemen (Motor: +3.76) ...Bb7 sonrası filin yerini zayıflatır; 57.Bg2+ (+3.75) de daha yavaştır. 57.Be2 (+4.86) önce şah kanadını sabitler.',
      diger: [
        { move: '57.Bc4', text: '57...Bb7 58.Kb6 Bc8 59.Be2 f3: Siyah zaman kazanır (Motor: +3.76).' },
        { move: '57.Bg2+', text: '57...f3 58.Bf1 Kd4 59.c6 Be6 ile benzer konum (Motor: +3.75).' },
      ],
    },
    '57b': {
      text: '57...f3: f-piyonu ilerler ve fili sorgular.',
      amac: 'Fili e2’den kovalamak ve şah kanadında bir hedef yaratmak.',
      neden: 'Ama f3 piyonu f2 tarafından bloke edilir ve geçer piyon olamaz. 57...Be6 (Motor: +4.69) ve 57...Bb3 (+4.87) de kurtarmaz. 57...f3 (+5.04).',
      diger: [
        { move: '57...Be6', text: '58.c6 f3 59.Bc4 Bf5 ile aynı sonuç (Motor: +4.69).' },
      ],
    },
    '58w': {
      text: '58.Bc4! Fil değişimi önerir; değişim olursa piyon oyun sonunda c-piyonu durdurulamaz.',
      amac: 'Siyahın filini d5’ten kovalamak ve c6 ilerleyişini desteklemek.',
      neden: '58.Bf1 (Motor: +3.69) ve 58.Bd1 (+2.79) daha zayıftır. 58.Bc4 (+5.11) hem fili kovalar hem de değişimi kabul edilemez kılar: 58...Bxc4+ 59.Kxc4 Ke5 60.Kd3! sonrası Siyahın şahı c-piyonunu durdurabilir, ama Beyaz şahı f3 piyonunu toplar ve şah kanadında kazanır; Siyahın şahı iki cepheyi birden tutamaz (Motor: +7.0).',
      diger: [
        { move: '58.Bf1', text: '58...Kd4 59.Kb4 Be4 60.Bb5: Beyaz yeniden toparlanır (Motor: +3.69).' },
        { move: '58.Bd1', text: '58...Kd3 59.c6 Bxc6+ 60.Kxc6: Siyah piyonu verip şahla d1’e saldırır (Motor: +2.79).' },
      ],
    },
    '58b': {
      text: '58...Ba8: fil a8’e çekilir ve uzun çaprazdan c6’yı tutmaya çalışır.',
      amac: 'Fil değişiminden kaçmak ve c6 karesini kontrol etmek.',
      neden: '58...Bb7 (Motor: +5.24) aynı değerdedir; 58...Bxc4+? 59.Kxc4 (+5.40) kayıp bir piyon oyun sonu verir: Beyaz şahı f3’ü toplar.',
      diger: [
        { move: '58...Bb7', text: '59.c6 Bc8 60.Kc5 Ke5: fil c8’i tutar ama şah c7’yi destekler (Motor: +5.24).' },
        { move: '58...Bxc4+', text: '59.Kxc4 Ke5 60.Kd3 ve Kxf3 ile kayıp piyon oyun sonu (Motor: +7.0).' },
      ],
    },
    '59w': {
      text: '59.c6: piyon c6’ya ilerler.',
      amac: 'Piyonu vezire yaklaştırmak; fil c6’yı tutuyordu ama şah b5’ten piyonu destekliyor.',
      neden: '59.Bf1 (Motor: +4.46) ve 59.Kb6 (+3.48) daha zayıftır. 59.c6 (+5.19) en doğrudan yol.',
      diger: [
        { move: '59.Bf1', text: '59...Bb7 60.c6 Bc8 61.c7: aynı plan bir hamle sonra (Motor: +4.46).' },
        { move: '59.Kb6', text: '59...Kd4 60.Ba6 Kc3 61.Bb7: Siyahın şahı c-piyonuna yaklaşır (Motor: +3.48).' },
      ],
    },
    '59b': {
      text: '59...Kd4: şah d4’e gelir ve c4 filine saldırır.',
      amac: 'Fili almak ya da şahı piyona yaklaştırmak.',
      neden: '59...Kf5 (Motor: +5.54) ve 59...Ke5 (+5.54) daha kötüdür. 59...Kd4 (+5.24) en dayanıklı, ama geç kalmıştır.',
      diger: [
        { move: '59...Ke5', text: '60.Kb6 Bxc6 61.Kxc6 Kd4: Siyah piyonu alır ama Beyaz fil önde kalır (Motor: +5.54).' },
      ],
    },
    '60w': {
      text: '60.c7: piyon son kareye bir adım uzakta.',
      amac: 'Piyonu vezire çıkarmak.',
      neden: 'Fil c4’te tehdit altında ama önemli değil: 60...Kxc4 61.c8=Q+ ile Beyaz vezir yapar. 60.Bb3 (Motor: +5.01) ve 60.Bf1 (+4.91) daha zayıftır; 60.c7 (+5.39) en iyisi.',
      diger: [
        { move: '60.Bb3', text: '60...Kd3 61.c7 Bb7 62.Be6 ile aynı sonuç (Motor: +5.01).' },
      ],
    },
    '60b': {
      text: '60...Bb7: fil b7’de c8’i tutar.',
      amac: 'Piyonun vezir olmasını engellemek.',
      neden: '60...Bd5 (Motor: +6.45) ve 60...Ke5 61.c8=Q (+7.03) hemen kaybeder. 60...Bb7 (+5.57) tek dayanıklı savunma.',
      diger: [
        { move: '60...Ke5', text: '61.c8=Q Be4 62.Qe6+ ile Beyaz vezir yapar (Motor: +7.03).' },
      ],
    },
    '61w': {
      text: '61.Be6! Fil c8’i kontrol eder; Kb6 ile b7 fili kovalanınca c8=Q gelecek. Carlsen terk etti.',
      amac: 'c8 karesini ikinci kez kontrol etmek ve Kb6 ile filin c8 kontrolünü kırmak.',
      neden: 'Fil b7’den kovalandığında (Kb6) c8’i tutamaz; Beyazın fili c8’i kontrol ettiği için piyon güvenle vezir olur. 61...Ke5 62.Kb6 Be4 63.c8=Q (Motor: +5.74). 61.Kb6 (+4.83) ve 61.Bf7 (+4.77) daha zayıftır.',
      diger: [
        { move: '61.Kb6', text: '61...Bc8 62.Ba6 Bh3 63.Bb7: Beyaz fil manevrasıyla aynı sonuca ulaşır (Motor: +4.83).' },
        { move: '61.Bf7', text: '61...Bc8 62.Bh5 Ke4 63.Kc6 ile daha yavaş kazanç (Motor: +4.77).' },
      ],
    },
  },
  exercises: [
    { id: 'tca-1', kind: 'tekrar', plan: false, title: 'Vezir değişimiyle şahı merkezde tutmak',
      source: 'Tiviakov – Carlsen, Gausdal 2005 (11. hamle)',
      fen: 'r1bqk2r/pp2bppp/1nn1p3/1Np5/3P4/1BP2N2/PP3PPP/R1BQK2R w KQkq - 3 11',
      prompt: 'Beyazın b5 atı c7 ve d6 karelerine bakıyor. Siyahın veziri d8’de, henüz rok yapmadı. Beyaz bu anı nasıl değerlendirir?',
      hint: 'd-hattı açılırsa vezirler karşı karşıya gelir; Siyah hangi taşla geri almak zorunda kalır?',
      line: ['dxc5', 'Bxc5', 'Qxd8+'],
      explanation: '**11.dxc5! Bxc5 12.Qxd8+** Kxd8 sonrası Siyah rok hakkını kaybeder; şah d8’de Nc7 ve Rd1+ tehditlerine açıktır. Motor: 11.dxc5 +1.6, sonraki en iyi 11.Bf4 +0.7; 12.Qxd8+ +1.8, sonraki en iyi 12.Qe2 +0.9.',
      link: 'Oyunun ana fikri: gelişim üstünlüğünü vezir değişimiyle merkezdeki şaha karşı kalıcı baskıya çevirmek.' },
    { id: 'tca-2', kind: 'tekrar', plan: false, title: 'İki at, iki hedef',
      source: 'Tiviakov – Carlsen, Gausdal 2005 (16. hamle)',
      fen: '2rk3r/1pNb1ppp/pnn1p3/2b5/5B2/1BP2N2/PP3PPP/3RK2R w K - 4 16',
      prompt: 'Beyazın atı c7’de, ama c8 kalesi ona saldırıyor. Siyahın şahı d8’de, kalesi h8’de. Beyaz baskıyı nasıl artırır?',
      hint: 'Diğer at f7’ye ulaşırsa neyi çatallar?',
      line: ['Ng5', 'e5', 'Nd5'],
      explanation: '**16.Ng5!** f7’ye ikinci bir saldırı: Nxf7+ şahı ve h8 kalesini çatallar. 16...e5 fili tehdit edince **17.Nd5!** Nxd5 18.Nxf7+ ve 19.Rxd5 ile Beyaz taşını geri alır ve piyon kazanır. Motor: 16.Ng5 +1.0, sonraki en iyi 16.Bxe6 −0.7; 17.Nd5 +1.1, sonraki en iyi 17.Nge6+ 0.0.',
      link: 'Vezir değişiminden sonra şah merkezde kaldı; atlar c7 ve f7 üzerinden çatal kareleri buldu.' },
    { id: 'tca-3', kind: 'transfer', plan: false, title: 'Atın b5’ten c7’ye sıçraması',
      source: 'Adams – Batchuluun, Dünya Kupası, Tiflis 2017 (31. hamle)',
      fen: '1r6/3R4/1p3p2/pNp1kn2/P1P3p1/6P1/1P3PK1/8 w - - 0 31',
      prompt: 'Vezirsiz bir oyun. Beyazın kalesi d7’de, atı b5’te. Siyahın şahı e5’te, atı f5’te. Hamle sizde.',
      hint: 'Önce şahı tempoyla altıncı yataya itin; sonra at şah çekerek kalenin önünü açabilir.',
      line: ['Rd5+', 'Ke6', 'Nc7+'],
      explanation: '**31.Rd5+! Ke6 32.Nc7+** At şah çeker; şah kaçınca Rxf5 ile at kazanılır. Motor: 31.Rd5+ +5.6, sonraki en iyi 31.Kf1 +0.6.',
      link: 'Tiviakov’un atı b5’ten c7’ye sıçrayıp merkezdeki şaha baskı kurdu; Adams da vezirsiz oyunda aynı sıçramayla şah çekip taş kazandı.' },
    { id: 'tca-4', kind: 'transfer', plan: true, title: 'Çoğunluktan geçer piyon',
      source: 'Kramnik – Goganov, Rusya Şampiyonası 2013 (57. hamle)',
      fen: '1b6/8/1p3k1p/5p1P/1PPN1P2/4K3/8/8 w - - 3 57',
      prompt: 'At-fil oyun sonu. Beyazın vezir kanadında b- ve c-piyonları, Siyahın tek b-piyonu var. Siyahın şahı f6’da, vezir kanadından uzak. Beyazın planı ne?',
      hint: 'Çoğunluktaki piyonlardan biri ilerleyip değişirse geriye ne kalır?',
      line: ['c5'],
      accept: { 0: ['Nb5'] },
      explanation: '**57.c5!** bxc5 58.bxc5 ile c5’te geçer bir piyon doğar; Siyahın şahı çok uzaktadır ve fil tek başına piyonu durdurmakta zorlanır. Bu bir plan hamlesidir: motor 57.Nb5’i hazırlık olarak biraz daha iyi buluyor, ama onun da planı c5 kırılmasıdır (Nb5 +3.3, c5 +3.0).',
      link: 'Tiviakov 50.c4 ve 53.c5 ile aynı şeyi yaptı: vezir kanadındaki çoğunluğu, rakip şah uzaktayken geçer piyona çevirdi.' },
  ],
};
