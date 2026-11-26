// Alekhine – Euwe, Dünya Şampiyonası maçı, Hollanda 1935 (21. oyun). Kaynak: PgnMentor (Alekhine.pgn).
export default {
  id: 'alekhine-euwe-1935',
  theme: 'Kara kareli filin istilası: ...Bb4-d2 ve ikinci yatay',
  white: 'Aleksandr Alekhine', black: 'Max Euwe',
  whiteShort: 'Alekhine', blackShort: 'Euwe',
  event: 'Dünya Şampiyonası maçı, 21. oyun', site: 'Hollanda', year: 1935, eco: 'D17',
  variation: 'Slav Savunması, Çek varyantı, 6.Ne5 (Krause saldırısı)', result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Nbd7 7. Nxc4 Qc7 8. g3 e5 9. dxe5 Nxe5 10. Bf4 Nfd7 11. Bg2 Rd8 12. Qc1 f6 13. O-O Be6 14. Nxe5 Nxe5 15. a5 a6 16. Ne4 Bb4 17. Nc5 Bc8 18. Bxe5 fxe5 19. f4 Bd2 20. Qc4 Rd4 21. Qb3 exf4 22. gxf4 Qe7 23. Nd3 Be6 24. Qa3 Bc4 25. Kh1 Qxa3 26. Rxa3 O-O 27. Ra4 Rfd8 28. Ra3 Bxd3 29. exd3 Rb4 30. Rf2 Rxb2 31. Bf1 Rd4 32. f5 Rf4 33. Rxf4 Bxf4 34. h3 Bd6 35. Ra1 Kf7 36. d4 Kf6 37. Re1 Bb4 38. Ra1 Rd2 39. Bc4 Rxd4 40. Be6 Rd3 0-1`,

  summary: 'Oyunu **Siyah (Max Euwe) kazandı** ve maçta skoru 10½–10½’e eşitledi; bir oyun önce, 20. oyunda aynı açılışı Beyazla oynayıp yine kazanmıştı. 21. oyunda Euwe, Alekhine’in 20. oyunda zaman kaybettiren 13...Qb8 hamlesi yerine **13...Be6** ile doğrudan geliştirdi ve açılışta eşitliği sağladı. Asıl dönüm noktası **19.f4?** oldu: Alekhine e5 piyonuna saldırırken e3 karesini ve g1-a7 çaprazını kendi eliyle zayıflattı. Euwe hemen **19...Bd2!** ile fili vezire karşı tempo kazanarak içeri soktu (d8 kalesi fili koruduğu için vezir onu alamaz), ardından ...Rd4, ...exf4 ve ...Qe7 ile bütün taşlarını merkeze ve kara karelere yerleştirdi. Beyazın veziri b3-a3 kenarına itildi, at d3’e zincirlendi. Euwe vezirleri değişti, d3 atını aldı, kaleyi **ikinci yataya** sokup b2’yi, sonra d4’ü topladı. Sonuçta iki piyon fazlası ve aktif fil-kale ikilisiyle Alekhine 40. hamlede terk etti. Oyun, kara kareli filin nasıl “istilacı” olabileceğinin ve küçük bir yapısal hatanın sabırlı bir teknikle nasıl kazanca çevrildiğinin klasik örneğidir.',
  intro: 'Bu oyun 1935 maçının en kritik anlarından birinde oynandı: Alekhine bir zamanlar üç puan öndeydi, 20. oyundan sonra fark yarım puana inmişti. Chess.com’un “Euwe ve Slav Savunması” makalesine göre iki oyuncu maçta 5.a4 Bf5 6.Ne5 Nbd7 7.Nxc4 Qc7 kuruluşunu en iyi yol olarak kabul etmişti; 20. ve 21. oyunlarda **aynı konumu iki tarafla da oynayıp kazanan Euwe** oldu. 6.Ne5 (Krause saldırısı) ile Beyaz c4 piyonunu atla geri almak, ...Bg4 fikrini önlemek ve gerekirse f3-e4 ile merkezi almak ister. Siyah ...Nbd7 ve ...Qc7 ile **...e5 kırılmasını** hazırlar: merkez açılır, e5’e bir at gelir, kara kareli fil ise b4 karesini kullanabilir. Bf4’ün e5 atını c7 vezirine bağlaması bu kuruluşun ana teması; Siyah bu bağı ...Nfd7, ...f6 ve ...Rd8 ile zararsızlaştırır. Alekhine’in 19.f4 ile merkezi zorlaması bu dengeyi bozdu ve Euwe’nin fili açılan kara karelere girdi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '6.Ne5 ve 7.Nxc4 ile gambit piyonunu atla geri almak; böylece f1 fili c4’e gitmek zorunda kalmaz ve g2’den uzun çaprazı kullanabilir.',
      '8.g3 ve 11.Bg2 ile c6-b7 hattına baskı kurmak; fil g2’de hem kalenin önünü korur hem de Siyahın vezir kanadını hedef alır.',
      '10.Bf4 ile e5 atını c7 vezirine bağlamak ve bu bağı Qc1, Rd1 gibi hamlelerle kuvvetlendirmek; Siyahın merkezi taşlarını pasif tutmak.',
      'a4-a5 ile vezir kanadında alan kazanmak, ...b6’yı zorlaştırmak ve atı c5 karesine (Ne4-c5) yerleştirmek.',
      'Bxe5 sonrası e5 piyonuna baskı yapmak; doğru yol vezirle (19.Qe3 veya 19.Qc4) baskıydı, 19.f4 ise e3 karesini ve g1-a7 çaprazını zayıflattı.',
      'Kötü konumda en sağlam savunmayı bulmak: vezirleri Qc2 ile merkeze yakın tutmak, fili e4 gibi aktif karelere getirmek; maçta Qb3-a3 ve Bf1 gibi pasif hamleler işi zorlaştırdı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...Nbd7, ...Qc7 ve ...e5** ile Slav’ın sağlam yapısını koruyup merkezi aktif biçimde açmak; f5 filini ...e6’dan önce dışarı çıkarmak.',
      'Bf4’ün e5 atına yaptığı bağı ...Nfd7, ...Rd8 ve ...f6 ile etkisizleştirmek; zaman kaybettiren ...Qb8 yerine (20. oyun) ...Be6 ile gelişime devam etmek.',
      'Kaleyi erkenden **açık d-hattına** koymak; bu kale sonra d4’e, d2’deki filin arkasına ve ikinci yataya kadar ilerleyecek.',
      'Kara kareli fili **b4’e**, f4 sonrası da **d2’ye** sokmak; ...Be3+ ve ...exf4 ile g1-a7 çaprazında ve e3 karesinde hâkimiyet kurmak.',
      'Beyazın vezirini kenara iterek vezir değişimini zorlamak; d3 atını ...Bc4 ve ...Rd4 ile bağlayıp sonra ...Bxd3 ile almak.',
      'Vezirler gidince kaleyi **ikinci yataya** (…Rb4-b2, …Rd4) sokup zayıf piyonları (b2, d4, h3) tek tek toplamak.',
      'Oyun sonunda şahı f7-f6’ya getirip f5 piyonunu baskı altında tutmak, fil ve kale ile a5 ve d4 piyonlarını hedef almak.',
    ] },
  },
  critical: [
    { move: '13b', title: '13...Be6: 20. oyundaki hatanın düzeltilmesi', text: 'Bu konum 20. oyunda renkler değişik olarak tahtaya gelmişti (orada hamle sırası 11...f6 12.O-O Rd8 13.Qc1 idi). Alekhine Siyahla 13...Qb8 oynayıp veziri e5’teki bağdan kaçırmaya çalışmış, zaman kaybetmiş ve kaybetmişti. Euwe burada **13...Be6** ile c4 atına tempo kazanarak gelişti. Chess.com makalesi bu hazırlığı Euwe’nin “hazırladığı iyileştirme” olarak anar ve kazanılan zamanın belirleyici olduğunu söyler. Motor da 13...Be6’yı en iyi hamle olarak gösteriyor (Motor: +0.85, Beyaz için küçük bir alan avantajı ama Siyah rahat).' },
    { move: '16b', title: '16...Bb4: fil aktif kareye', text: 'Fil b4’te üç işe birden bakar: a5 piyonuna saldırır (a5 yalnızca a1 kalesiyle korunur, c7 veziri de a5’i görür), d2 karesini kontrol eder ve c3 üzerinden uzun çaprazı hedefler. Motor 16...Rd5’i (Motor: 0.00) biraz daha iyi buluyor, ama Bb4 (Motor: +0.22) fikir olarak oyunun geri kalanını belirler: bu fil üç hamle sonra d2’ye girecek.' },
    { move: '19w', title: '19.f4? kara kareleri zayıflatmak', text: 'Beyaz e5 piyonuna saldırır ve f-hattını açmak ister, ama piyon artık e3 karesini korumaz ve g1-a7 çaprazı Siyahın filine açılır. Doğrusu **19.Qe3!** idi: 19...Bxa5 20.Rxa5 Qxa5 21.Qxe5+ ile vezir hem şaha şah çeker hem h8 kalesine saldırır (Motor: +0.35). Maç hamlesinden sonra değer bir anda Siyah lehine döner (Motor: −0.85). Bu tek hamle oyunun kaderini belirledi.' },
    { move: '19b', title: '19...Bd2! filin istilası', text: 'Fil c1 vezirine saldırır. 20.Qxd2?? Rxd2 olmaz, çünkü d8 kalesi fili korur. Fil d2’de hem tempo kazanır hem de ...Be3+ ve ...exf4 fikirleriyle Beyazın kara karelerine yerleşir. Alternatif 19...Bxa5 ile değer eşite yakın kalırdı (Motor: +0.07); Euwe malzeme yerine inisiyatifi seçti ve haklı çıktı.' },
    { move: '21w', title: '21.Qb3? vezir kenara gidiyor', text: 'Vezir d4 kalesinden kaçar ama b3’te merkezden kopar. Motor 21.Qc2’yi öneriyor: 21...Be3+ 22.Kh1 exf4 sonrası Beyaz hâlâ direnir (Motor: −1.11). Maçta 21...exf4 22.gxf4 ile f4 piyonu tek kalır, şahın önü açılır ve değer −1.7’ye iner. Vezir bir daha merkeze dönemeyecek; 24.Qa3 ile tamamen kenara gidecek.' },
    { move: '23w', title: '23.Nd3: tek savunma', text: 'Siyahın veziri e7’den c5 atına ve e2’ye saldırıyor. 23.Nd3 hem atı kurtarır hem f4 piyonunu korur (Motor: −1.42). Doğal görünen 23.e3? ise 23...Rb4! 24.Qd3 Qxe3+ 25.Rf2 Qxc5 ile bir taş kaybettirir (Motor: −2.85). Ama d3’teki at bundan sonra ...Bc4 ve ...Rd4 ile oyunun sonuna kadar bağlı kalacak.' },
    { move: '27b', title: '27...Rfd8: kaleleri ikilemek', text: 'Siyah kalelerini d-hattında ikiler: d4 kalesi ve c4 fili korunur, d3 atı ise ikinci kez hedef olur. Beyaz 28.Ra3 ile atı korumak zorunda kalır; 28...Bxd3 29.exd3 Rb4 ile kale b2’ye gider. Motor: 27...Rfd8 −2.16, oysa aceleci 27...Rxd3? 28.exd3 Bxd3 ile değişimden sonra avantaj tamamen kaybolurdu (Motor: 0.00).' },
    { move: '30b', title: '30...Rxb2: kale ikinci yatayda', text: 'Kale b2 piyonunu alır ve ikinci yataya yerleşir; d2 fili onu korur. Siyah artık bir piyon fazladır, Beyazın kalan piyonları (a5, d3, f4, h2) tek tek zayıftır. Euwe bundan sonra hiç acele etmeden 31...Rd4 ile f4 ve d3’e, 33...Bxf4 ile h2’ye, 39...Rxd4 ile d-piyonuna yöneldi.' },
  ],
  lessons: [
    'Slav’ın 6.Ne5 kuruluşunda **...e5 kırılması** Siyahın taşlarını serbest bırakır; Bf4’ün e5 atına yaptığı bağ ...Nfd7, ...f6 ve ...Rd8 ile zararsızlaştırılır.',
    'Aynı konumu bir kez kaybettiysen iyileştirmeyi bul: Alekhine’in 20. oyundaki 13...Qb8’i yerine Euwe’nin 13...Be6’sı, bir tempo farkının maçta nasıl belirleyici olduğunu gösterir.',
    'f4 gibi bir piyon ilerleyişi, arkasında bıraktığı kareleri (e3, g1-a7 çaprazı) rakibin fili için açabilir. Piyonla saldırmadan önce “bu piyon neyi korumayı bırakıyor?” diye sor.',
    'İstila eden bir taş başka bir taşla korunuyorsa vezire saldırmak tempo kazandırır: **19...Bd2!** fili, d8 kalesi sayesinde vezirin alamayacağı bir kareye soktu.',
    'Kötü konumda veziri kenara (b3, a3) itmek yerine merkeze yakın tutmak gerekir; kenardaki vezir kolayca değiştirilir ve savunmaya katılamaz.',
    'Vezirler değiştikten sonra aktif kale **ikinci yataya** girerse piyonları tek tek toplar. Euwe’nin kale-fil ikilisi b2, d4 ve h3’ü hedef aldı.',
    'Kazanılmış konumda acele etme: aceleci 27...Rxd3? avantajı yok ederdi; Euwe önce kalelerini ikiledi, sonra değiştirdi, sonra topladı.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve maç açısından önemi neydi?', a: 'Oyunu Siyahla **Max Euwe** kazandı; Alekhine 40...Rd3 sonrası terk etti. Wikipedia’daki maç tablosuna göre bu galibiyetle skor 10½–10½’e eşitlendi; Euwe bir önceki oyunu da kazanmıştı. Euwe maçı sonunda 15½–14½ kazanarak dünya şampiyonu oldu.' },
    { q: 'Bu oyunun 20. oyunla ilişkisi ne?', a: '20. oyunda Euwe Beyazla aynı açılışı oynamış, konum 11...f6 12.O-O Rd8 13.Qc1 ile aynen bu oyundaki 13.O-O sonrası konuma gelmişti. Orada Alekhine 13...Qb8 ile veziri bağdan kaçırmaya çalıştı ve zaman kaybetti. Bu oyunda Euwe aynı konumda 13...Be6 ile gelişti. Chess.com makalesine göre Euwe “aynı konumu iki tarafla da kazandı” ve kazanılan zaman belirleyici oldu.' },
    { q: 'Alekhine’in asıl hatası neydi?', a: '**19.f4?** idi. Bu hamle e5 piyonuna saldırır ama e3 karesini ve g1-a7 çaprazını korumasız bırakır; Siyahın b4 fili hemen 19...Bd2! ile içeri girer. Doğrusu 19.Qe3 idi: 19...Bxa5 20.Rxa5 Qxa5 21.Qxe5+ ile Beyaz hem şah çeker hem h8 kalesine saldırır ve malzemeyi geri kazanır (Motor: +0.35). 19.f4 sonrası değer −0.85’e düştü.' },
    { q: 'Neden 20.Qxd2 oynanamadı?', a: 'Çünkü d8 kalesi d-hattı boyunca d2 filini korur: 20.Qxd2?? Rxd2 ile Beyaz veziri bir fil karşılığında kaybeder. Bu yüzden 19...Bd2 tempo kazanarak gelen bir istiladır: vezir kaçmak zorundadır, fil ise d2’de kalır ve ...Be3+ ile şaha da baskı yapar.' },
    { q: 'Siyah neden 19...Bxa5 ile piyon almadı?', a: '19...Bxa5 de oynanabilirdi, ama 20.fxe5 ile Beyaz merkez piyonunu geri alır ve konum eşite yakın kalır (Motor: +0.07). 19...Bd2 ise vezire saldırarak tempo kazanır ve f4’ün yarattığı zayıflıklardan yararlanır (Motor: −0.85). Euwe bir piyon yerine kalıcı bir pozisyon üstünlüğünü seçti; a5 piyonu nasılsa zayıf kalacaktı.' },
    { q: 'Beyaz 21. hamlede nereye oynamalıydı?', a: 'Motor 21.Qc2’yi gösteriyor (Motor: −1.11): vezir merkeze yakın kalır, f4’ü ve e-hattını gözetler. Maçtaki 21.Qb3 veziri kenara götürdü, 21...exf4 22.gxf4 sonrası f4 piyonu yalnız kaldı ve Siyah ...Qe7, ...Be6 ile tempo kazandı (Motor: −1.7).' },
    { q: 'Euwe neden vezirleri değişti, avantajı saldırıyla değerlendirmedi?', a: 'Beyazın şahı açık olsa da Siyahın en büyük kozu yapısaldı: d3’e bağlı at, zayıf b2, d3/d4 ve a5 piyonları ve d2’deki fil. Vezirler gidince Beyazın karşı oyun şansı (f-hattı, şahın kanadına saldırı) da kayboldu. 25...Qxa3 sonrası Siyahın kale ve fili Beyazın taşlarından çok daha aktifti ve motor oyun sonunu yaklaşık −2.0 olarak değerlendiriyor.' },
    { q: 'Beyaz oyun sonunda nerede direnebilirdi?', a: 'En önemli an 31. hamleydi: 31.Bf1 fili pasifleştirdi (Motor: −2.95). 31.Be4! ile fil merkezde aktif kalır, ...Rb1+ Kg2 sonrası Beyaz karşı şansını korurdu (Motor: −1.9). Ayrıca 28.Rfa1 (−2.23) maçtaki 28.Ra3’ten (−2.55), 38.Re8 (−3.55) de 38.Ra1’den (−4.19) daha dirençliydi.' },
    { q: 'Siyahın kara kareli fili neden bu kadar güçlüydü?', a: 'Beyazın kara kareli fili 18.Bxe5 ile değiştirilmişti; böylece kara karelerde Siyahın filine rakip kalmadı. 19.f4 ile e3 ve d2 kareleri piyon korumasını kaybetti. Fil b4’ten d2’ye girdi, sonra f4’ü aldı (33...Bxf4), d6’dan a3 kalesine, b4’ten a5 ve e1’e saldırdı. Bir oyun boyunca hiç kovulamayan bu fil, Siyahın kazancının ana aracıydı.' },
  ],
  notes: {
    '1w': {
      text: '1.d4: vezir piyonu iki kare ilerler, e5 ve c5 karelerini kontrol eder ve c1 filine yol açar.',
      amac: 'Merkezde güçlü bir piyon kurup c4 ile vezir gambitine geçmek. Alekhine bu maçta Beyazla çoğunlukla 1.d4 oynadı.',
      neden: '1.d4 sonrası açılan oyunlar 1.e4’e göre daha konumsal ve yavaş gelişir; Alekhine Euwe’nin sevdiği Slav’a karşı hazırlıklıydı. Motor ilk hamleleri birbirine çok yakın görür.',
      diger: [
        { move: '1.e4', text: 'Motorun hafif tercihi (Motor: +0.39); maçta Alekhine bazen 1.e4 de denedi, ama Slav tartışması maçın teorik merkezi oldu.' },
        { move: '1.Nf3', text: 'Esnek başlangıç (Motor: +0.16); çoğunlukla aynı vezir gambiti yapılarına döner.' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah da merkezde bir piyonla karşılık verir ve e4 karesini kontrol eder.',
      amac: 'Merkezde eşit pay almak ve klasik vezir gambiti yapısına girmek.',
      neden: 'Euwe 1935 maçında 1.d4’e karşı ağırlıkla 1...d5 ve Slav ile karşılık verdi; bu açılışı derinden biliyordu.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına kapı açar (Motor: +0.32); Euwe’nin bu maçtaki ana silahı değildi.' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. c-piyonu d5’e saldırır ve Siyahın merkez piyonunu yerinden etmeye çalışır.',
      amac: 'Siyah d5’i bırakırsa (…dxc4) e4 ile tam merkez kurmak, bırakmazsa vezir kanadında baskı yapmak.',
      neden: 'c4 ile Beyaz d5’e c-piyonuyla da baskı yapar; bu, 1.d4 açılışlarının en temel ve en güçlü devamıdır (Motor: +0.32).',
      diger: [
        { move: '2.Nf3', text: 'Önce gelişip c4’ü sonraya bırakır (Motor: +0.20).' },
      ],
    },
    '2b': {
      text: '2...c6: **Slav Savunması**. d5 piyonu c-piyonuyla desteklenir.',
      amac: 'Merkezi sağlam tutmak ve aynı zamanda c8 filini e6 piyonunun arkasında hapsetmemek.',
      neden: 'Vezir gambiti reddinde (2...e6) c8 fili kapanır; Slav’da ise fil önce f5 ya da g4’e çıkıp sonra ...e6 oynanabilir. Euwe’nin “ev açılışıydı”; maçta Slav, Wikipedia ve chess.com yazılarına göre teorik tartışmanın merkezindeydi.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi (Motor: +0.34); sağlam ama c8 fili pasif kalır.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü (Motor: +0.27); Siyah merkezi hemen bırakır.' },
      ],
    },
    '3w': {
      text: '3.Nf3: at gelişir, d4’ü destekler ve e5 karesine bakar.',
      amac: 'Gelişimi tamamlamak ve ileride Ne5 gibi bir sıçrayışa hazır olmak.',
      neden: '3.Nf3 ile Beyaz Slav’ın ana yollarına girer; at e5’e bakarak 6.Ne5 fikrini de mümkün kılar.',
      diger: [
        { move: '3.Nc3', text: 'Motorun hafif tercihi (Motor: +0.44); 3...e5 (Winawer karşı gambiti) gibi keskin cevaplara izin verir.' },
        { move: '3.cxd5', text: 'Değişim Slav’ı (Motor: +0.36); simetrik ve sakin bir yapı.' },
      ],
    },
    '3b': {
      text: '3...Nf6: Siyah da atını geliştirir ve d5’i bir kez daha destekler.',
      amac: 'e4 karesini kontrol etmek ve şahın kanadını rok için hazırlamak.',
      neden: 'En doğal ve en iyi hamle (Motor: +0.29). ...e6 erken oynanırsa Slav’ın asıl fikri olan f5 fili kaybolur.',
      diger: [
        { move: '3...e6', text: 'Yarı Slav’a doğru gider (Motor: +0.44).' },
        { move: '3...dxc4', text: 'Erken piyon alma (Motor: +0.48); 4.e3 b5 5.a4 ile Beyaz rahat oynar.' },
      ],
    },
    '4w': {
      text: '4.Nc3: ikinci at da gelişir ve d5’e baskıyı artırır; e4 karesine de bakar.',
      amac: 'd5’e üçüncü kez baskı yapmak ve e4 ile merkezi genişletmeye hazırlanmak.',
      neden: 'Ana hat. 4.e3 c8 filini kapatır ve Siyaha rahat ...Bf5 imkânı verir; 4.Nc3 daha iddialıdır (Motor: +0.31).',
      diger: [
        { move: '4.e3', text: 'Sakin kuruluş (Motor: +0.29); 4...Bf5 ile Siyah hiç sorunsuz gelişir.' },
        { move: '4.cxd5', text: 'Değişim (Motor: +0.29); simetrik yapı ve küçük bir avantaj.' },
      ],
    },
    '4b': {
      text: '4...dxc4: Siyah c4 piyonunu alır. Bu **Çek varyantı** ya da modern Slav ana hattıdır.',
      amac: 'Beyazı piyonu geri almak için zaman harcamaya zorlamak ve bu sürede c8 filini f5’e geliştirmek.',
      neden: 'Siyah piyonu kalıcı olarak tutmayı amaçlamaz; asıl hedef 5...Bf5 ile hızlı ve rahat gelişimdir. Motor bu hamleyi en iyi görür (Motor: +0.25).',
      diger: [
        { move: '4...e6', text: 'Yarı Slav (Motor: +0.41); Botvinnik ve Meran sistemlerinin başlangıcı.' },
        { move: '4...g6', text: 'Schlechter varyantı (Motor: +0.46); fil g7’ye gider ama d5 biraz zayıflar.' },
      ],
    },
    '5w': {
      text: '5.a4: Beyaz Siyahın ...b5 ile c4 piyonunu tutmasını önler.',
      amac: 'c4’ü geri alabilmek için ...b5’i engellemek; a-piyonu ileride a5’e de giderek alan kazanacak.',
      neden: 'Hemen 5.e3 oynanırsa 5...b5 ile Siyah piyonu korur. a4’ün bedeli b4 karesinin zayıflamasıdır; bu oyunda Siyahın fili tam da bu b4 karesini kullanacak. Motor 5.a4’ü en iyi görür (Motor: +0.44, derin analizde).',
      diger: [
        { move: '5.e3', text: '5...b5 ile Siyah piyonu tutar; Beyaz için en iddialı yol değildir.' },
        { move: '5.Ne5', text: 'Hemen at sıçrar (Motor: 0.00); 5...Nbd7 6.Nxc4 b5 ile Siyah vezir kanadında alan alır.' },
        { move: '5.g3', text: 'Katalan tarzı kuruluş (Motor: +0.13); piyon sonra geri alınır.' },
      ],
    },
    '5b': {
      text: '5...Bf5: c8 fili ...e6’dan önce f5’e gelişir. Slav’ın temel fikri budur.',
      amac: 'Fili piyon zincirinin dışına çıkarmak ve b1-h7 çaprazında e4 karesini kontrol etmek.',
      neden: 'Beyaz e4 oynamak istiyor; f5 fili buna doğrudan karşı koyar. Motor en iyi hamle olarak görür (Motor: +0.30).',
      diger: [
        { move: '5...Bg4', text: 'Fil g4’te f3 atını bağlar; 6.Ne5 ile tempo kaybedebilir.' },
        { move: '5...Na6', text: 'Smislov varyantı: at b4’e gidip d3 ve c2 karelerini hedefler; daha az oynanan bir yan yol.' },
        { move: '5...e6', text: 'Fil kapanır (Motor: +0.58); Slav’ın anlamı kaybolur.' },
      ],
    },
    '6w': {
      text: '6.Ne5: Krause saldırısı. At e5’e sıçrar ve c4 piyonunu geri almaya hazırlanır.',
      amac: 'c4’ü atla almak (filin g2’ye gidebilmesi için) ve f3-e4 ile merkezi ele geçirmek; ayrıca ...Bg4 fikrini önlemek.',
      neden: 'Ana alternatif 6.e3 sakin bir oyun verir; 6.Ne5 daha keskindir. Sydney Satranç Akademisi’nin 1. oyun yorumunda bu kuruluşu Alekhine’in bu maçta ne kadar sık oynadığı için “Alekhine Saldırısı” diye anmak gerektiği söylenir. Motor 6.e3 ile aynı değeri verir (Motor: +0.26).',
      diger: [
        { move: '6.e3', text: 'Klasik Holland varyantı: 6...e6 7.Bxc4 Bb4 8.O-O ile ana hat (Motor: +0.26).' },
        { move: '6.Nh4', text: 'f5 filine saldırır (Motor: +0.24); 6...e6 7.Nxf5 exf5 ile Siyah sağlam kalır.' },
      ],
    },
    '6b': {
      text: '6...Nbd7: at e5 atına karşı koyar ve ...Qc7 ile ...e5 hazırlığına başlar.',
      amac: 'e5 atını değiştirmeye zorlamak ya da geri çekmek; ardından ...Qc7 ve ...e5 ile merkezi kırmak.',
      neden: 'Bu oyunun hamle sırası maçta iki oyuncunun da kabul ettiği yoldu (chess.com: “ikisi de 5.a4 Bf5 6.Ne5 Nbd7 7.Nxc4 Qc7’de karar kıldı”). Motor 6...e6’yı çok az daha iyi buluyor (Motor: +0.22’ye karşı +0.30); aynı makaleye göre Euwe 1937 rövanşında 6...e6’ya geçti.',
      diger: [
        { move: '6...e6', text: '7.f3 Bb4 8.e4 ile keskin ana hat; ya da 7.e3 Nbd7 8.Nxd7 Nxd7 (Motor: +0.22).' },
        { move: '6...Na6', text: 'At c5 ya da b4 üzerinden oynar (Motor: +0.42).' },
      ],
    },
    '7w': {
      text: '7.Nxc4: at c4 piyonunu geri alır; malzeme eşitlenir.',
      amac: 'Gambit piyonunu geri almak; at c4’ten e5, d6 ve b6 karelerine bakar.',
      neden: 'Tek mantıklı devam (Motor: +0.33). 7.Nxd7 Qxd7 sonrası Beyazın c4’ü geri alması zorlaşır (Motor: −0.63).',
      diger: [
        { move: '7.Nxd7', text: '7...Qxd7 ile Siyah c4 piyonunu tutmaya devam eder (Motor: −0.63).' },
        { move: '7.Bd2', text: '7...Nxe5 8.dxe5 Nd7 ile Siyah iyi oynar (Motor: −0.42).' },
      ],
    },
    '7b': {
      text: '7...Qc7: vezir c7’ye gelir ve e5 karesini kontrol eder.',
      amac: '...e5 ilerleyişini hazırlamak; vezir c7’den b6-a5 ve e5 karelerine bakar.',
      neden: 'Siyah Slav yapısında ...e6 yerine daha aktif ...e5 kırılmasını seçer. Motor bu hamleyi en iyilerden biri sayar (Motor: +0.57); 7...Nb6 (Motor: +0.42) daha sakin bir alternatiftir.',
      diger: [
        { move: '7...Nb6', text: 'c4 atına saldırır; 8.e3 e6 9.f3 ile Beyaz e4’e hazırlanır (Motor: +0.42).' },
        { move: '7...Nd5', text: 'c3 atına karşı koyar (Motor: +0.49).' },
      ],
    },
    '8w': {
      text: '8.g3: Beyaz şah filini g2’ye geliştirmeye hazırlanır.',
      amac: 'Fil g2’den uzun çaprazda c6 ve b7’ye baskı yapacak, f5 filinin e4 kontrolünü de dengeleyecek.',
      neden: 'Siyahın planı ...e5 olduğu için Beyaz merkez yerine çapraz baskısını seçer. Motor 8.g3’ü açık ara en iyi buluyor (Motor: +0.42); 8.Bg5 ve 8.Qd2 daha az iddialı.',
      diger: [
        { move: '8.Bg5', text: '8...e5 9.e3 Bb4 ile Siyah aktif (Motor: 0.00).' },
        { move: '8.Qd2', text: 'Vezir f4’e gitmeyi düşünür (Motor: +0.10).' },
      ],
    },
    '8b': {
      text: '8...e5!: hazırlanan merkez kırılması.',
      amac: 'd4 piyonunu değiştirip merkezi açmak, atlara ve f8 filine serbestlik kazandırmak.',
      neden: 'Bu varyantın ruhu bu hamledir: ...Nbd7 ve ...Qc7 tam bunun için oynandı. 8...Rd8 de olur ama genellikle aynı yapıya döner (Motor: +0.54’e karşı +0.63).',
      diger: [
        { move: '8...Rd8', text: 'Önce kaleyi d-hattına getirir; 9.Bf4 e5 ile benzer konumlar (Motor: +0.63).' },
        { move: '8...e6', text: 'Daha sakin, ama f8 fili ve vezir pasif kalır.' },
      ],
    },
    '9w': {
      text: '9.dxe5: Beyaz e5 piyonunu alır.',
      amac: 'Merkezi açarak taş üstünlüğü (daha iyi gelişim) avantajını değerlendirmek.',
      neden: 'Doğal ve en iyi hamle (Motor: +0.63). Beyaz piyonu almazsa Siyah ...exd4 ile merkezde rahatlar.',
      diger: [
        { move: '9.Bg2', text: '9...Rd8 ile Siyah gerginliği korur (Motor: 0.00).' },
        { move: '9.a5', text: 'Vezir kanadında alan (Motor: +0.07); merkez gerginliği Siyahın yararına.' },
      ],
    },
    '9b': {
      text: '9...Nxe5: at merkeze, e5’e gelir.',
      amac: 'Piyonu geri almak ve c4 atına karşı güçlü bir merkez atı yerleştirmek.',
      neden: 'Diğer geri alma şekilleri yoktur; 9...Nd5 (Motor: +1.15) ya da 9...Ng4 (Motor: +1.17) piyonu bırakır.',
      diger: [
        { move: '9...Nd5', text: '10.Nxd5 cxd5 11.Ne3 ile Beyaz bir piyon önde (Motor: +1.15).' },
      ],
    },
    '10w': {
      text: '10.Bf4: fil e5 atını c7 vezirine bağlar.',
      amac: 'e5 atını oynayamaz hale getirmek ve Qc1, Rd1 gibi hamlelerle bu bağı sömürmek.',
      neden: 'Bu kuruluşun ana teması budur: chess.com’daki “A Century of Chess” yazısı da 21. oyunu Siyahın “bağlı e5 atı” sorununu çözdüğü oyun olarak anlatır. 10.Nxe5 Qxe5 merkezi Siyaha bırakır (Motor: −0.34).',
      diger: [
        { move: '10.Nxe5', text: '10...Qxe5 ile vezir merkeze gelir, Beyazın baskısı kalmaz (Motor: −0.34).' },
        { move: '10.Qd4', text: '10...Nxc4 11.Qxc4 Be6 ile Siyah tempo kazanır (Motor: −0.88).' },
      ],
    },
    '10b': {
      text: '10...Nfd7: f6 atı e5’e ikinci destek verir.',
      amac: 'Bağlı e5 atını sağlamlaştırmak; at d7’den c5 karesine de gidebilir.',
      neden: 'Bağ altındaki at iki kez korunduğunda Beyazın Nxe5 değişimi zararsız olur. Motor en iyi hamle olarak gösterir (Motor: +0.45).',
      diger: [
        { move: '10...Rd8', text: '11.Qc1 Bd6 ile benzer konum (Motor: +0.64).' },
        { move: '10...Nfg4', text: '11.Bh3 ile Beyaz fili rahat oynar (Motor: +0.68).' },
      ],
    },
    '11w': {
      text: '11.Bg2: fil uzun çaprazda gelişir.',
      amac: 'c6 ve b7’ye baskı yapmak ve rok için şahın kanadını hazırlamak.',
      neden: '8.g3’ün mantıklı devamı (Motor: +0.66). Fil g2’de hem savunma hem saldırı görevi görür.',
      diger: [
        { move: '11.Ne3', text: 'f5 filine saldırır (Motor: +0.32).' },
        { move: '11.Nxe5', text: 'Erken değişim (Motor: +0.24); bağın baskısı kaybolur.' },
      ],
    },
    '11b': {
      text: '11...Rd8: kale açık d-hattına gelir ve d1 vezirine bakar.',
      amac: 'd-hattını ele geçirmek; Beyazın vezirini d-hattından uzaklaştırmak.',
      neden: '20. oyunda Alekhine Siyahla önce 11...f6 oynamış, Rd8’i sonra yapmıştı; iki hamle sırası aynı konuma döner. Motor 11...g5, 11...f6 ve 11...Rd8’i eşit görüyor (Motor: +0.67).',
      diger: [
        { move: '11...f6', text: '20. oyundaki sıra: 12.O-O Rd8 13.Qc1 ile aynı konuma gelir (Motor: +0.67).' },
        { move: '11...g5', text: 'Bf4’e saldırır: 12.Ne3 gxf4 13.Nxf5 ile keskin bir oyun (Motor: +0.67).' },
      ],
    },
    '12w': {
      text: '12.Qc1: vezir d-hattından çekilir ve f4 filini destekler.',
      amac: 'Kalenin x-ışınından kaçmak ve bağı korumak; vezir c1’den e3 ve f4’e destek verir.',
      neden: 'Motor 12.O-O’yu biraz daha iyi buluyor (Motor: +0.82’ye karşı +0.49), ama Alekhine 20. oyunda Euwe’nin kurduğu kuruluşu (Qc1 ile) tekrar ediyordu.',
      diger: [
        { move: '12.O-O', text: '12...Be6 13.Nxe5 Nxe5 14.Qc2 ile Beyaz biraz daha rahat (Motor: +0.82).' },
        { move: '12.a5', text: 'Vezir kanadında alan (Motor: +0.41).' },
      ],
    },
    '12b': {
      text: '12...f6: e5 atı f-piyonuyla da sağlamlaşır.',
      amac: 'e5 atını kalıcı olarak desteklemek, böylece Bf4 bağının tehlikesini sıfırlamak.',
      neden: 'Bedeli e6 karesi ve şahın çevresinin biraz zayıflamasıdır. Motor 12...Be6’yı öneriyor (Motor: +0.48’e karşı +0.86). Euwe büyük ihtimalle 20. oyundaki konuma bilerek dönmek istedi, çünkü orada hazırladığı iyileştirme vardı.',
      diger: [
        { move: '12...Be6', text: '13.Nxe5 Nxe5 14.a5 a6 ile Siyah f6’ya gerek duymadan dengeyi korur (Motor: +0.48).' },
        { move: '12...Bd6', text: '13.Nxd6+ Qxd6 ile fil çifti gider (Motor: +0.96).' },
      ],
    },
    '13w': {
      text: '13.O-O: Beyaz rok yapar. Tahtadaki konum 20. oyunda 13.Qc1 sonrası konumla aynıdır.',
      amac: 'Şahı güvenceye almak ve f1 kalesini oyuna sokmak.',
      neden: 'Doğal hamle (Motor: +0.85). Alekhine 20. oyunda bu konumda Siyahla 13...Qb8 oynamıştı; şimdi Euwe’nin ne hazırladığını görecekti.',
      diger: [
        { move: '13.a5', text: 'Önce alan almak (Motor: +0.81).' },
        { move: '13.Nxe5', text: 'Erken değişim (Motor: +0.45).' },
      ],
    },
    '13b': {
      text: '13...Be6!: fil e6’ya gelir ve c4 atına saldırır. Euwe’nin hazırlıklı iyileştirmesi.',
      amac: 'Tempo kazanarak gelişmek, f8 filini ve şahın rokunu hazırlamak; atı c4’ten uzaklaştırmak.',
      neden: '20. oyunda Alekhine 13...Qb8 ile veziri bağdan kaçırmaya çalışmış ve chess.com makalesine göre “zaman kaybedip Euwe’ye inisiyatifi vermişti”. 13...Be6 ise bağı umursamadan gelişime devam eder. Motor da bunu en iyi hamle olarak gösteriyor (Motor: +0.85).',
      diger: [
        { move: '13...Qb8', text: '20. oyundaki hamle: 14.Ne4 Be7 15.Qc3 ile Beyaz inisiyatifi aldı; vezir pasif.' },
        { move: '13...g5', text: '14.Nxe5 Nxe5 15.Be3 ile keskin ama şahın kanadı zayıflar (Motor: +0.85).' },
        { move: '13...Bb4', text: '14.a5 ile Beyaz tempo kazanır (Motor: +1.02).' },
      ],
    },
    '14w': {
      text: '14.Nxe5: Beyaz atları değişir.',
      amac: 'Saldırı altındaki c4 atını değerli bir taşla değiştirmek; e5’e gelecek atı Bf4 ile yeniden bağlamak.',
      neden: 'Motor 14.Ne4’ü öneriyor: at merkezde kalır ve c5/d6 karelerine bakar (Motor: +0.86’ya karşı +0.57). Değişim Siyahın sıkışık konumunu rahatlattı.',
      diger: [
        { move: '14.Ne4', text: '14...Be7 15.Rd1 O-O 16.Qc3 ile Beyaz baskısını korur (Motor: +0.86).' },
        { move: '14.b3', text: 'Atı korur (Motor: +0.39); a3-f8 çaprazı da zayıflar.' },
      ],
    },
    '14b': {
      text: '14...Nxe5: at e5’e döner ve merkezde güçlü durur.',
      amac: 'Merkezi atı korumak; e5’teki at d3, c4 ve f3 karelerine bakar.',
      neden: '14...fxe5 piyon yapısını erken bozar (Motor: +0.95). 14...Qa5?? ise 15.Nxd7 ile bir taş kaybettirir (Motor: +5.77).',
      diger: [
        { move: '14...fxe5', text: '15.Bg5 Rc8 16.Qc2 ile Beyaz daha iyi (Motor: +0.95).' },
      ],
    },
    '15w': {
      text: '15.a5: a-piyonu ilerler ve vezir kanadında alan kazanır.',
      amac: '...b6’yı zorlaştırmak, b6 karesini zayıflatmak ve ileride Ne4-c5 için zemin hazırlamak.',
      neden: 'Bu piyon sonra Siyahın b4 filinin hedefi olacak. Motor 15.Ne4’ü biraz daha iyi buluyor (Motor: +0.53’e karşı +0.38).',
      diger: [
        { move: '15.Ne4', text: '15...Qa5 16.Bd2 Bb4 ile karşılıklı oyun (Motor: +0.53).' },
        { move: '15.Qe3', text: 'Vezir değişimi önerir (Motor: +0.19).' },
      ],
    },
    '15b': {
      text: '15...a6: b5 karesi kontrol edilir ve a5 piyonu sabitlenir.',
      amac: 'Beyazın atına b5’i vermemek ve a5 piyonunu ileride hedef olarak sabit tutmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.35). 15...Bd6 ya da 15...Bc5 (Motor: +0.83 / +1.03) Beyaza Be3 ile tempo verir.',
      diger: [
        { move: '15...Bd6', text: '16.Be3 Nc4 17.Bxa7 ile Beyaz piyon kazanır (Motor: +0.83).' },
      ],
    },
    '16w': {
      text: '16.Ne4: at e4’e gelir; c5 ve d6 karelerine gitmek ister.',
      amac: 'Atı c5’e yerleştirip e6 filine ve b7’ye baskı yapmak.',
      neden: 'Ama at c3’ten ayrılınca d2 ve b4 kareleri Siyahın filine açılır. Motor 16.Ra4’ü (Motor: +0.56) ya da 16.Be3’ü (Motor: +0.46) daha iyi buluyor; 16.Ne4 +0.27.',
      diger: [
        { move: '16.Ra4', text: 'Kale dördüncü yatayda b4’ü kontrol eder (Motor: +0.56).' },
        { move: '16.Be3', text: '16...Nc4 17.Bf4 ile tekrar (Motor: +0.46).' },
      ],
    },
    '16b': {
      text: '16...Bb4!: fil aktif kareye gelir; a5 piyonuna ve d2 karesine bakar.',
      amac: 'a5 piyonunu tehdit etmek (Bxa5 Rxa5 Qxa5 ile kale kazanma) ve d2 karesine yol açmak.',
      neden: 'Bu fil oyunun kahramanı olacak. Motor 16...Rd5’i hafifçe tercih ediyor (Motor: 0.00’a karşı +0.22), ama Bb4 fili en aktif karesine koyar.',
      diger: [
        { move: '16...Rd5', text: 'a5 piyonuna saldırır: 17.Be3 Rxa5 18.Rxa5 Qxa5 ile eşitlik (Motor: 0.00).' },
        { move: '16...Be7', text: 'Daha pasif (Motor: +0.50).' },
      ],
    },
    '17w': {
      text: '17.Nc5: at c5’e girer ve e6 filine ve b7’ye saldırır.',
      amac: 'Siyahın fil çiftini bozmak ya da b7’de baskı yapmak; c5’ten a6’ya kadar baskı.',
      neden: 'Motor 17.Be3 ile bu hamleyi eşit görüyor (Motor: +0.42). Ama at c5’te d3’e çok uzak; 23. hamlede bu ata saldırılacak.',
      diger: [
        { move: '17.Be3', text: '17...Bxa5 18.Bc5 ile kara karelerde baskı (Motor: +0.42).' },
        { move: '17.Bd2', text: '17...Bxd2 18.Nxd2 ile değişim; Beyazın avantajı küçülür (Motor: +0.20).' },
      ],
    },
    '17b': {
      text: '17...Bc8: fil c8’e çekilir; Siyah fil çiftini korur.',
      amac: 'b7’yi korumak ve fil çiftini tahtada tutmak.',
      neden: 'Motor en iyi hamle olarak gösteriyor (Motor: +0.32). 17...Bxc5 18.Qxc5 ile kara kareli fil gider (Motor: +0.44).',
      diger: [
        { move: '17...Bd5', text: 'Fil değişimi önerir (Motor: +0.42).' },
        { move: '17...Bxc5', text: 'Kara kareli fil değiştirilir (Motor: +0.44); oyunun kahramanı tahtadan çıkar.' },
      ],
    },
    '18w': {
      text: '18.Bxe5: Beyaz güçlü e5 atını alır.',
      amac: 'Siyahın merkez atından kurtulmak ve e5’te Siyahın piyonunu hedef haline getirmek.',
      neden: 'Bedeli büyük: Beyazın kara kareli fili gider ve Siyahın b4 filine kara karelerde rakip kalmaz. Motor 18.Ne4 ya da 18.Nb3’ü biraz daha iyi buluyor (Motor: +0.37’ye karşı +0.27).',
      diger: [
        { move: '18.Ne4', text: '18...Be6 19.Be3 ile Beyaz kara kareli filini korur (Motor: +0.37).' },
        { move: '18.Nb3', text: 'Atı geri getirir (Motor: +0.37).' },
      ],
    },
    '18b': {
      text: '18...fxe5: f-piyonuyla alınır; e5 piyonu d4 ve f4 karelerini tutar.',
      amac: 'Merkezi piyonla tutmak; f-hattını h8 kalesi için yarı açık hale getirmek.',
      neden: '18...Qxe5? 19.Nxb7! Bxb7 20.Bxc6+ ile karışık oyun (Motor: +0.34). 18...Qe7?? ise 19.Nxb7 ile piyon ve konum kaybettirir (Motor: +3.25).',
      diger: [
        { move: '18...Qxe5', text: '19.Nxb7 Bxb7 20.Bxc6+ Bxc6 ile karışık oyun (Motor: +0.34).' },
      ],
    },
    '19w': {
      text: '19.f4?: Beyaz e5 piyonuna saldırır ve f-hattını açmak ister.',
      amac: 'e5 piyonunu değiştirip f-hattında f1 kalesiyle baskı kurmak; Siyahın şahını merkezde yakalamak.',
      neden: 'Ciddi hata: f-piyonu artık e3 karesini korumaz ve g1-a7 çaprazı açılır; kara kareli fil de yok. Doğrusu **19.Qe3!**: 19...Bxa5 20.Rxa5 Qxa5 21.Qxe5+ ile çatal (şah ve h8 kalesi). Maç hamlesinden sonra değer +0.3’ten −0.85’e iner.',
      diger: [
        { move: '19.Qe3', text: 'e5’e baskı ve 19...Bxa5 20.Rxa5 Qxa5 21.Qxe5+ çatalı; 19...Qe7 20.Nd3 Bd6 ile Beyaz biraz önde (Motor: +0.35).' },
        { move: '19.Qc4', text: 'Vezir merkeze: 19...Rd4 20.Qc2 Qe7 21.Nd3 (Motor: +0.13).' },
        { move: '19.Qc2', text: '19...Bxa5 20.Qc4 Bd2 ile karşılıklı oyun (Motor: +0.05).' },
      ],
    },
    '19b': {
      text: '19...Bd2!: fil c1 vezirine saldırır; d8 kalesi fili korur.',
      amac: 'Tempo kazanarak kara karelere girmek ve ...exf4 ile ...Be3+ fikirlerini hazırlamak.',
      neden: '20.Qxd2?? Rxd2 ile vezir kaybedilir. Fil d2’de e3 ve g1-a7 çaprazına yerleşir; Beyazın kara kareli fili olmadığı için onu kovacak taş yok. 19...Bxa5 20.fxe5 ile dengeli kalırdı.',
      diger: [
        { move: '19...Bxa5', text: '20.fxe5 Bb6+ 21.Kh1 Bxc5 22.Qxc5 ile eşitlik (Motor: +0.07).' },
        { move: '19...g6', text: 'Daha yavaş (Motor: +0.12).' },
      ],
    },
    '20w': {
      text: '20.Qc4: vezir c4’e kaçar ve g8 ile a6’ya bakar.',
      amac: 'Veziri aktif tutmak; g8-a2 çaprazında Siyahın şahını ve a6 piyonunu hedeflemek.',
      neden: 'Motor 20.Qc4 ile 20.Qc2’yi yakın görüyor (Motor: −0.81 / −0.87). 20.Nxa6? bxa6 21.Bxc6+ ile fedası işe yaramaz (Motor: −2.88).',
      diger: [
        { move: '20.Qc2', text: '20...exf4 21.gxf4 O-O 22.f5 ile benzer bir konum (Motor: −0.87).' },
        { move: '20.Nxa6', text: '20...bxa6 21.Bxc6+ Bd7 22.Qxd2 Qxc6 ile Siyah bir taş önde (Motor: −2.88).' },
      ],
    },
    '20b': {
      text: '20...Rd4: kale d4’te vezire saldırır ve f4’e baskı yapar.',
      amac: 'Veziri daha da kötü bir kareye itmek; kale d4’ten f4’e ve b4’e kayabilir.',
      neden: 'Motor en iyi hamle olarak gösteriyor (Motor: −1.10); 20...exf4 21.Ra4 (Motor: −0.57) ya da 20...Be3+ 21.Kh1 (Motor: −0.34) daha zayıf. Kale d4’te d2 filini de dolaylı olarak destekler.',
      diger: [
        { move: '20...exf4', text: '21.Ra4 Qf7 22.Qe4+ Qe7 ile Beyaz toparlanır (Motor: −0.57).' },
        { move: '20...Be3+', text: '21.Kh1 exf4 22.Rad1 ile Beyaz d-hattını alır (Motor: −0.34).' },
      ],
    },
    '21w': {
      text: '21.Qb3?: vezir b3’e çekilir.',
      amac: 'g8-a2 çaprazında kalmak ve b7’ye baskı yapmak.',
      neden: 'Vezir merkezden kopar ve e-hattındaki savunmaya katılamaz. Motor 21.Qc2’yi gösteriyor (Motor: −1.11); maçta değer −1.7’ye iner.',
      diger: [
        { move: '21.Qc2', text: '21...Be3+ 22.Kh1 exf4 23.Ra3 ile Beyaz direnir (Motor: −1.11).' },
        { move: '21.Qa2', text: '21...Qe7 22.Nd3 exf4 (Motor: −1.43).' },
      ],
    },
    '21b': {
      text: '21...exf4: Siyah f4’ü alır.',
      amac: 'Beyazın piyon yapısını bozmak ve g-piyonunu alışa zorlamak; şahın önünü açmak.',
      neden: 'Motorun ilk tercihi (Motor: −1.66). 21...Rb4 22.Qc2 Be3+ ile de iyi oynanır ama daha zayıf (Motor: −0.78).',
      diger: [
        { move: '21...Rb4', text: '22.Qc2 Be3+ 23.Kh1 exf4 (Motor: −0.78).' },
        { move: '21...Qf7', text: 'Vezir değişimi önerir (Motor: −0.28); Siyah inisiyatifi kaybeder.' },
      ],
    },
    '22w': {
      text: '22.gxf4: g-piyonuyla alınır.',
      amac: 'Malzemeyi geri almak ve f-piyonunu merkezde tutmak.',
      neden: 'Neredeyse zorunlu (Motor: −1.72); 22.Ne6 Bxe6 23.Qxe6+ Kd8 ile de durum aynı (Motor: −1.80). Ama Beyazın şahının önü açıldı ve f4 piyonu tek kaldı.',
      diger: [
        { move: '22.Ne6', text: '22...Bxe6 23.Qxe6+ Kd8 24.Bh3 (Motor: −1.80).' },
        { move: '22.Rad1', text: '22...Qe7 23.Ne4 Be6 (Motor: −1.95).' },
      ],
    },
    '22b': {
      text: '22...Qe7: vezir e7’den c5 atına ve e2 piyonuna saldırır.',
      amac: 'c5 atını geri çekilmeye zorlamak ve e2’ye baskı yapmak.',
      neden: 'Motor 22...Rb4’ü eşit görüyor (Motor: −1.50’ye karşı −1.47). Vezir e-hattına gelerek Beyazın zayıf e2 piyonunu hedefler.',
      diger: [
        { move: '22...Rb4', text: '23.Qa3 Qe7 24.Nd3 ile benzer (Motor: −1.50).' },
        { move: '22...Qf7', text: 'Vezir değişimi (Motor: −0.81); avantaj küçülür.' },
      ],
    },
    '23w': {
      text: '23.Nd3: at d3’e çekilir ve f4’ü korur.',
      amac: 'Atı kurtarmak ve f4 piyonunu savunmak.',
      neden: 'Tek iyi hamle. 23.e3? Rb4! 24.Qd3 Qxe3+ 25.Rf2 Qxc5 ile bir taş kaybedilir (Motor: −2.85). Ama at d3’te bağlı kalacak.',
      diger: [
        { move: '23.e3', text: '23...Rb4 24.Qd3 Qxe3+ 25.Rf2 Qxc5 (Motor: −2.85).' },
        { move: '23.Na4', text: '23...Bxf4 24.Qc3 O-O ile Siyah piyon kazanır (Motor: −3.29).' },
      ],
    },
    '23b': {
      text: '23...Be6: fil e6’ya gelir ve g8-a2 çaprazında vezire saldırır.',
      amac: 'Veziri tekrar kovmak; fili c4’e getirip d3 atına baskı yapmak.',
      neden: 'Motor 23...Bf5’i biraz daha iyi buluyor (Motor: −1.61’e karşı −1.45). Be6-c4 yolu d3 atını hedef alır.',
      diger: [
        { move: '23...Bf5', text: '24.Rf3 Rf8 25.Kh1 Qxe2 ile Siyah piyon kazanır (Motor: −1.61).' },
        { move: '23...Rf8', text: 'f4’e baskı (Motor: −1.11).' },
      ],
    },
    '24w': {
      text: '24.Qa3: vezir a3’e kayar ve e7 vezirine karşı durarak değişim önerir.',
      amac: 'Baskı altındaki konumda vezirleri değişip Siyahın saldırı gücünü azaltmak; a3’ten e7’ye uzanan çaprazda Siyahın vezirini bağlamak.',
      neden: 'Psikolojik olarak anlaşılır, ama vezir değişimi Siyahın işine yarar: Beyazın zayıflıkları (d3 atı, b2, e2, f4) vezirsiz oyun sonunda daha da belirginleşir ve vezir a3’te tamamen kenara gider. Motor veziri merkeze yakın tutan 24.Qc2’yi öneriyor (Motor: −1.24’e karşı −1.88).',
      diger: [
        { move: '24.Qc2', text: '24...Be3+ 25.Kh1 O-O 26.Ra4 ile vezir e2 ve f4’ü gözetir, Beyaz direnir (Motor: −1.24).' },
        { move: '24.Qd1', text: '24...Be3+ 25.Kh1 Kd8 26.Qc2 ile benzer savunma, biraz daha pasif (Motor: −1.49).' },
      ],
    },
    '24b': {
      text: '24...Bc4: fil c4’e gelir ve d3 atına ikinci baskıyı kurar; e2 piyonu da dolaylı olarak hedefte.',
      amac: 'd3 atını hem d4 kalesi hem c4 filiyle bağlamak; at ya kaybedilecek ya da Beyazın taşları onu korumaya mahkûm olacak.',
      neden: 'Vezir değişimini Euwe’nin kendisi teklif etmiyor; önce taşlarını en iyi karelere koyuyor. 24...Bc4 sonrası 25.Qxe7+ Kxe7 ile değişim olsa bile d3 atı bağlı kalır. Motorun ilk tercihi (Motor: −2.01).',
      diger: [
        { move: '24...Bf5', text: '25.Qb3 Bxd3 26.exd3 Bb4 ile benzer bir yapı, ama vezirler kalır (Motor: −1.90).' },
        { move: '24...Rf8', text: '25.Rf3 Bg4 26.Qxe7+ Kxe7 ile f4’e baskı (Motor: −1.84).' },
      ],
    },
    '25w': {
      text: '25.Kh1: şah h1’e kaçar ve g1-a7 çaprazından çıkar.',
      amac: 'Siyahın ...Be3+ ya da ...Rd4-d1+ gibi şahlarını önlemek; d4 kalesinin ve d2 filinin olası çapraz şahlarından kurtulmak.',
      neden: 'Mantıklı bir güvenlik hamlesi ama yavaş: Siyah bu tempoyu vezirleri kendi şartlarıyla değiştirmek için kullanır. Motor 25.Qxe7+ ya da 25.Rf3’ü biraz daha iyi buluyor (Motor: −1.85 / −1.87’ye karşı −2.02).',
      diger: [
        { move: '25.Qxe7+', text: '25...Kxe7 26.Rf3 Kf6 27.Ra4 ile Siyahın şahı rok yerine merkeze gelir (Motor: −1.85).' },
        { move: '25.Rf3', text: '25...Qxe2 26.Qc5 Bd5 27.Qxd4 ile karışık oyun; Beyaz e2’yi verir ama karşı oyun arar (Motor: −1.87).' },
      ],
    },
    '25b': {
      text: '25...Qxa3: Siyah vezirleri değişir ve oyun sonuna geçer.',
      amac: 'Beyazın tek karşı oyun şansı olan vezirli saldırıyı ortadan kaldırmak; aktif kale, aktif fil ve hedef piyonlarla kazanılabilir bir oyun sonuna girmek.',
      neden: 'Vezirler gidince d3 atının bağı ve b2/e2/f4 zayıflıkları daha önemli hale gelir; Beyazın açık şahı ise artık sorun değildir, ama Siyahın kendi şahının merkezde kalması da tehlike olmaktan çıkar. Motor 25...Bxd3’ü çok az daha iyi buluyor (Motor: −2.23’e karşı −2.07); ikisi de benzer oyun sonlarına gider.',
      diger: [
        { move: '25...Bxd3', text: '26.exd3 Qxa3 27.Rxa3 Kd8 ile önce at alınır, sonra vezirler değişir (Motor: −2.23).' },
        { move: '25...Rf8', text: 'Vezirleri tutup f4’e baskı: 26.Qa4 Be3 27.Qc2 Bd5 (Motor: −1.75).' },
      ],
    },
    '26w': {
      text: '26.Rxa3: kale a3’te veziri geri alır.',
      amac: 'Malzemeyi eşitlemek ve a-kalesini üçüncü yatayda aktif tutmak.',
      neden: 'Zorunlu geri alma. 26.bxa3 piyon yapısını parçalar (Motor: −2.13); 26.Bxc6+?? bxc6 ise Beyazı bir vezir eksik bırakır (Motor: −5.55). Kale a3’ten d3 atını da yatay olarak koruyabilir.',
    },
    '26b': {
      text: '26...O-O: Siyah geç de olsa rok yapar; şah güvenceye girer, h8 kalesi f8’e gelir.',
      amac: 'f8 kalesini yarı açık f-hattına yerleştirip f4 piyonuna baskı yapmak ve ikinci kaleyi oyuna sokmak.',
      neden: 'Vezirler gittiği için şahı merkeze getirmek de mümkündü, ama rok kaleyi tek hamlede oyuna sokar ve f4’e hemen baskı kurar. Motorun ilk tercihi (Motor: −1.98); 26...Ke7 (Motor: −1.66) şahı merkezileştirir ama h8 kalesi geç oyuna girer.',
      diger: [
        { move: '26...Ke7', text: '27.Rd1 Be3 28.Rf1 Bxd3 ile şah merkezde, kale h8’de bekler (Motor: −1.66).' },
        { move: '26...Bxd3', text: '27.Rxd3 Rxd3 28.exd3 Ke7 ile erken değişim; avantaj biraz küçülür (Motor: −1.55).' },
      ],
    },
    '27w': {
      text: '27.Ra4: kale dördüncü yatayda c4 filine ve d4 kalesine saldırır.',
      amac: 'Siyahın d3 atına yönelen taşlarını kovmak ya da değiştirmek; kaleyi aktif hale getirmek.',
      neden: 'Beyaz pasif savunma yerine Siyahın en aktif taşlarına saldırmayı seçer. Motorun ilk tercihi (Motor: −1.96); 27.Rfa1 de aynı değerde.',
      diger: [
        { move: '27.Rfa1', text: '27...Re8 28.Bf3 Bd5 ile iki kale a-hattında; a5’i destekler (Motor: −2.00).' },
        { move: '27.h3', text: 'Bekleme hamlesi: 27...g6 28.Ra4 Rfd8 (Motor: −2.17).' },
      ],
    },
    '27b': {
      text: '27...Rfd8!: kaleler d-hattında ikilenir; d4 kalesi ve dolaylı olarak c4 fili korunur.',
      amac: 'd3 atına baskıyı ikiye katlamak ve 28.Rxc4?? Rxc4 gibi değişimlerin hep Siyahın lehine olmasını sağlamak.',
      neden: 'Aceleci 27...Rxd3? 28.exd3 Bxd3 ile kale atla değişir ama Beyazın kalesi f1 serbest kalır ve avantaj yok olur (Motor: 0.00). Euwe önce taşlarını ikiledi; motor da bunu en iyi hamle olarak gösteriyor (Motor: −2.16).',
      diger: [
        { move: '27...Be3', text: '28.b3 Bxd3 29.Rxd4 Bxd4 30.exd3 ile malzeme sadeleşir, avantaj küçülür (Motor: −1.04).' },
        { move: '27...Rxd3', text: '28.exd3 Bxd3 29.Rf2 Be1 ile Beyaz kalesini geri alır, eşitlik (Motor: 0.00).' },
      ],
    },
    '28w': {
      text: '28.Ra3: kale üçüncü yataya döner ve d3 atını korur.',
      amac: 'd3 atını yatay olarak desteklemek, böylece ...Bxd3 sonrası kale ile geri alma seçeneğini tutmak.',
      neden: 'Beyaz atı bırakmak istemiyor ama kale bir tempo geri gider. Motor 28.Rfa1’i öneriyor: değişimlerle d-hattındaki baskıyı azaltır (Motor: −2.23’e karşı −2.55).',
      diger: [
        { move: '28.Rfa1', text: '28...Bxd3 29.Rxd4 Rxd4 30.exd3 Rxd3 ile kaleler değişir; Beyazın kalesi a1’de aktif (Motor: −2.23).' },
        { move: '28.b3', text: '28...Bxd3 29.exd3 Rxd3 ile piyon verir ama b-piyonu güvene alınır (Motor: −2.30).' },
      ],
    },
    '28b': {
      text: '28...Bxd3: fil d3 atını alır; Beyaz e-piyonuyla almak zorundadır.',
      amac: 'Beyazın en iyi savunma taşını yok etmek ve d3’te yeni, zayıf bir piyon yaratmak; d4 kalesine b4 ile b2’ye giden yolu açmak.',
      neden: 'Fil-at değişimiyle Siyahın kalan fili kara karelerde rakipsiz kalır; d3 piyonu ise beyaz karede, Beyazın kendi filinin de hareketini kısıtlar. Motorun ilk tercihi (Motor: −2.35).',
      diger: [
        { move: '28...Kf8', text: '29.h4 Bxd3 30.Rxd3 Rxd3 ile önce şah merkeze (Motor: −2.24).' },
        { move: '28...Re8', text: '29.Rf2 Bb5 ile e2’ye baskı (Motor: −2.17).' },
      ],
    },
    '29w': {
      text: '29.exd3: e-piyonuyla alınır; d3’te izole bir piyon oluşur.',
      amac: 'Malzemeyi eşitlemek ve d4 kalesine karşı d3 piyonuyla bir set kurmak.',
      neden: 'Pratikte zorunlu: 29.Rxd3 Rxd3 30.exd3 Bxa5 bir piyon kaybettirir (Motor: −2.71); 29.Rf2?? ise fil c4’e kaçar ve Beyaz taş eksik kalır (Motor: −5.64).',
      diger: [
        { move: '29.Rxd3', text: '29...Rxd3 30.exd3 Bxa5 ile Siyah a5’i alır (Motor: −2.71).' },
      ],
    },
    '29b': {
      text: '29...Rb4: kale b4’e kayar ve b2 piyonuna yönelir.',
      amac: 'b2’yi almak ve kaleyi ikinci yataya sokmak; d2 fili b2’yi alan kaleyi destekleyecek.',
      neden: 'b2 piyonunu hiçbir Beyaz taşı rahatça koruyamaz: a3 kalesi b3’e giderse a5 düşer. Motorun ilk tercihi (Motor: −2.29); 29...Bxf4 (Motor: −1.90) piyon kazanır ama Beyazın filine h3-e6 yolunu açar.',
      diger: [
        { move: '29...Bxf4', text: '30.Bh3 Re8 31.Rb3 ile Beyazın taşları aktifleşir (Motor: −1.90).' },
        { move: '29...R8d7', text: '30.Bh3 Re7 ile yatay savunma; daha yavaş (Motor: −1.77).' },
      ],
    },
    '30w': {
      text: '30.Rf2: kale f2’ye gelir; d2 filine saldırır ve ikinci yatayı korur.',
      amac: 'd2 filini kovup ikinci yatayı savunmak; f4 piyonunu da yatay olarak desteklemek.',
      neden: 'b2 zaten kurtarılamaz; Beyaz en azından ikinci yatayda bir kale tutarak Siyahın kalesini sınırlamak ister. Motorun ilk tercihi (Motor: −2.33).',
      diger: [
        { move: '30.b3', text: '30...Rb5 31.Rd1 Bxa5 ile a5 düşer (Motor: −2.40).' },
        { move: '30.Bh3', text: '30...Rxb2 31.Rf2 Kf8 32.Bf5 ile aynı oyun, ama daha zayıf (Motor: −2.66).' },
      ],
    },
    '30b': {
      text: '30...Rxb2: kale b2’yi alır ve ikinci yataya yerleşir; Siyah bir piyon fazla.',
      amac: 'Malzeme kazanmak ve ikinci yatayda Beyazın h2 piyonunu, f2 kalesini ve birinci yatayı hedef almak.',
      neden: 'd2 fili b2 kalesini korur, Beyazın f2 kalesi d2’yi alamaz çünkü Rxb2 sonrası kale b2’de fili destekler. Motor 30...Bxf4’ü biraz daha iyi buluyor (Motor: −2.38’e karşı −2.10), ama b2 kesin ve kalıcı bir kazanç.',
      diger: [
        { move: '30...Bxf4', text: '31.Bh3 Re8 32.d4 Bd6 ile f-piyonu alınır, b2 bekler (Motor: −2.38).' },
        { move: '30...Bc1', text: '31.Ra1 Bxf4 32.Raf1 g5 ile fil kaleden kaçar ve f4’ü alır (Motor: −2.31).' },
      ],
    },
    '31w': {
      text: '31.Bf1?: fil f1’e çekilir; birinci yatayı ve ...Rb1 fikrini kapatır.',
      amac: 'Kalenin ...Rb1 ile birinci yataya girmesini önlemek ve d3 piyonunu korumak.',
      neden: 'Fil f1’de tamamen pasifleşir ve bir kalenin tutsağı olur. Motor fili merkeze getiren **31.Be4**’ü öneriyor: 31...Rb1+ 32.Kg2 ile fil c6 ve h7’ye bakar (Motor: −1.98’e karşı −2.95). Bu, oyun sonundaki en büyük kayıptı.',
      diger: [
        { move: '31.Be4', text: '31...Rb1+ 32.Kg2 Bb4 33.Ra4 Bc3 34.Rc2 ile Beyazın taşları aktif (Motor: −1.98).' },
        { move: '31.h4', text: '31...Rd4 32.Be4 Rdb4 ile benzer, biraz daha zayıf (Motor: −2.48).' },
      ],
    },
    '31b': {
      text: '31...Rd4: d8 kalesi d4’e gelir ve f4 ile d3 piyonlarına saldırır.',
      amac: 'İkinci kaleyi aktifleştirip Beyazın zayıf piyonlarına ikinci cepheden saldırmak; d2 filini de dolaylı olarak desteklemek.',
      neden: 'f4 hem d4 kalesi hem d2 fili tarafından hedef alınır. Motor 31...Rb1’i biraz daha iyi buluyor (Motor: −3.19’a karşı −3.00); her iki yol da Beyazı tam savunmaya iter.',
      diger: [
        { move: '31...Rb1', text: '32.Kg2 Be3 33.Re2 Bxf4 ile f4 düşer ve f1 fili bağlı kalır (Motor: −3.19).' },
        { move: '31...Kf7', text: '32.Ra4 Rb1 ile şah önce merkeze (Motor: −2.60).' },
      ],
    },
    '32w': {
      text: '32.f5: f-piyonu f5’e ilerler ve f4’teki saldırıdan kaçar.',
      amac: 'Piyonu kurtarmak ve f5-f6 ile Siyahın şahını rahatsız etmeyi umut etmek.',
      neden: 'Piyon f5’te fil ile korunmaz ve ileride Siyahın şahının hedefi olacak. Motor fili aktif eden 32.Bh3’ü biraz daha iyi buluyor (Motor: −2.89’a karşı −3.29).',
      diger: [
        { move: '32.Bh3', text: '32...Kf8 33.Bc8 Rdb4 34.d4 ile fil b7’ye baskı yapar (Motor: −2.89).' },
        { move: '32.h4', text: '32...Rb1 33.Ra2 Rxf4 34.Rxf4 ile f4 düşer (Motor: −3.43).' },
      ],
    },
    '32b': {
      text: '32...Rf4: kale f4’e gelir ve f2 kalesine değişim önerir.',
      amac: 'Beyazın tek aktif savunma taşı olan f2 kalesini değiştirmek; ardından ikinci yataydaki b2 kalesiyle h2’ye ulaşmak.',
      neden: 'Rxf4 Bxf4 sonrası fil h2’yi de hedef alır ve Beyazın ikinci yatayı tamamen çöker. Motor 32...Rb1’i biraz daha iyi buluyor (Motor: −3.48’e karşı −3.27); Euwe’nin seçimi daha basit ve zorlayıcı.',
      diger: [
        { move: '32...Rb1', text: '33.Ra2 Bg5 34.Rab2 Rb4 ile birinci yataya baskı (Motor: −3.48).' },
        { move: '32...Kf7', text: '33.f6 gxf6 34.Bh3 Rd5 (Motor: −3.33).' },
      ],
    },
    '33w': {
      text: '33.Rxf4: Beyaz kaleleri değişir.',
      amac: 'Saldırı altındaki f1 filini kurtarmak.',
      neden: 'Zorunlu: f4 kalesi f1 filine saldırıyor ve 33.Rxd2? Rxd2 değil, Rxf1+ ile fil düşer (Motor: −5.46). 33.Re2 de 33...Rxf1+ ile taş kaybettirir (Motor: −5.90).',
    },
    '33b': {
      text: '33...Bxf4: fil geri alır; şimdi h2 piyonu ...Rxh2+ tehdidi altında.',
      amac: 'Malzemeyi geri almak ve fili f4’ten h2’ye ve a3 kalesine baskı yapabilecek bir kareye koymak.',
      neden: 'Zorunlu geri alma; başka hamle Siyahı kale eksik bırakır (33...Bb4? 34.Ra1 ile Motor: +4.45). Fil f4’te b8-h2 çaprazında h2’yi kale ile birlikte hedefler.',
    },
    '34w': {
      text: '34.h3: h-piyonu bir kare ilerler ve ...Rxh2+ tehdidinden kurtulur.',
      amac: 'h-piyonunu kurtarmak ve şaha g2 karesine çıkış yolu açmak.',
      neden: 'Ama h3’te piyon da kalıcı bir hedef olur (oyun 40...Rd3 ile tam bu piyona saldırarak bitti). Motor kaleyi aktif eden 34.Ra4’ü öneriyor (Motor: −3.19’a karşı −3.73); 34.d4 Rxh2+ 35.Kg1 de piyonu verip karşı oyun arar (Motor: −3.29).',
      diger: [
        { move: '34.Ra4', text: '34...Bc7 35.h4 Kf8 36.d4 ile kale dördüncü yatayda aktif (Motor: −3.19).' },
        { move: '34.d4', text: '34...Rxh2+ 35.Kg1 Rb2 36.Rf3 ile h2 verilir ama kale ve fil aktifleşir (Motor: −3.29).' },
      ],
    },
    '34b': {
      text: '34...Bd6: fil d6’ya çekilir ve a3 kalesine saldırır.',
      amac: 'Beyazın kalesini daha da pasif bir kareye itmek; fil d6’dan a3-f8 çaprazını ve b4 karesini kontrol eder.',
      neden: 'Euwe teknik açıdan sade bir yol seçer: her hamle bir Beyaz taşını geriletiyor. Motor şahı merkeze getiren 34...Kf8’i biraz daha iyi buluyor (Motor: −3.70’e karşı −3.34).',
      diger: [
        { move: '34...Kf8', text: '35.d4 Ke7 36.Bc4 Kd6 ile şah merkezde, d4 hedefte (Motor: −3.70).' },
        { move: '34...Be5', text: '35.Ra4 Kf8 36.d4 Bf6 ile fil uzun çaprazda (Motor: −3.62).' },
      ],
    },
    '35w': {
      text: '35.Ra1: kale birinci yataya geri döner.',
      amac: 'Kaleyi fil saldırısından kurtarmak ve birinci yatayı korumak.',
      neden: 'Pasif bir kare. Motor kalenin dördüncü yatayda aktif kaldığı 35.Ra4’ü biraz daha iyi buluyor (Motor: −3.61’e karşı −3.83).',
      diger: [
        { move: '35.Ra4', text: '35...Rb4 36.Ra2 Kf7 37.Kg2 ile kaleler karşılıklı (Motor: −3.61).' },
        { move: '35.Rc3', text: '35...Bb4 36.Rc1 Bxa5 ile a5 düşer (Motor: −4.00).' },
      ],
    },
    '35b': {
      text: '35...Kf7: şah merkeze doğru yola çıkar.',
      amac: 'Oyun sonunun temel kuralı: şahı aktifleştirmek; f6’dan f5 piyonuna ve e5-d4 karelerine yönelmek.',
      neden: 'Vezirler gittiği için şah artık güçlü bir taştır. Motor 35...Be5’i biraz daha iyi buluyor (Motor: −3.77’ye karşı −3.06): fil d4 karesini ve a1 kalesini hedefler. Euwe’nin hamlesi daha uzun vadeli bir plandır.',
      diger: [
        { move: '35...Be5', text: '36.Ra4 Bc3 37.d4 Kf7 ile fil a5’e ve d4’e baskı yapar (Motor: −3.77).' },
        { move: '35...Rb4', text: '36.Rd1 Kf8 37.d4 Ke8 ile benzer (Motor: −3.09).' },
      ],
    },
    '36w': {
      text: '36.d4: d-piyonu ilerler; fil için d3 karesi açılır.',
      amac: 'd-piyonunu ilerletip karşı oyun yaratmak ve f1 filine c4 ve d3 karelerini açmak.',
      neden: 'Piyon d4’te de zayıf kalır, ama fili oyuna sokmanın tek yolu budur. Motorun ilk tercihi (Motor: −3.10); 36.Rd1 daha pasif (Motor: −3.64).',
      diger: [
        { move: '36.Rd1', text: '36...Bc7 37.d4 Bxa5 ile a5 düşer (Motor: −3.64).' },
        { move: '36.Ra4', text: '36...Rb4 37.Ra2 Be5 ile kale dördüncü yataydan kovulur (Motor: −3.82).' },
      ],
    },
    '36b': {
      text: '36...Kf6: şah f6’ya gelir ve f5 piyonunu doğrudan hedef alır.',
      amac: 'f5 piyonunu almayı tehdit etmek ve şahı e5-d5 yönünde ilerletmeye hazırlanmak.',
      neden: 'Şah f6’da g5 ve e5 karelerini de kontrol eder. Motor 36...Ke7 ve 36...Ke8’i aynı değerde görüyor (Motor: −3.05/−3.07); hepsi şahı merkezileştirir.',
      diger: [
        { move: '36...Ke7', text: '37.Bc4 Kd8 38.Be6 Kc7 ile şah vezir kanadına gider (Motor: −3.06).' },
        { move: '36...Ke8', text: '37.Bc4 Kd8 38.Be6 Kc7 ile benzer (Motor: −3.07).' },
      ],
    },
    '37w': {
      text: '37.Re1: kale açık e-hattını alır.',
      amac: 'Kaleyi e6-e8 karelerine sokup Siyahın piyonlarını arkadan rahatsız etmek.',
      neden: 'Fikir doğru ama fil hâlâ f1’de. Motor önce fili oyuna sokan 37.Bc4’ü öneriyor (Motor: −3.05’e karşı −3.25): 37...Kxf5 38.Bd3+ Ke6 39.Bxh7 ile Beyaz piyonu geri alır.',
      diger: [
        { move: '37.Bc4', text: '37...Kxf5 38.Bd3+ Ke6 39.Bxh7 ile h7 alınır, fil aktifleşir (Motor: −3.05).' },
        { move: '37.Rd1', text: '37...Ke7 38.Bc4 Kd8 39.Be6 (Motor: −3.06).' },
      ],
    },
    '37b': {
      text: '37...Bb4: fil b4’e gelir; e1 kalesine ve a5 piyonuna aynı anda saldırır.',
      amac: 'Kaleyi e-hattından kovmak ve a5 piyonunu kazanmak.',
      neden: 'Çift saldırı: kale e1’de fil tarafından tehdit edilir, a5 de korumasız. Motorun ilk tercihi (Motor: −3.59).',
      diger: [
        { move: '37...Bg3', text: '38.Re6+ Kxf5 39.Re7 ile kale yedinci yataya girer (Motor: −2.89).' },
        { move: '37...Ba3', text: '38.Bc4 Bb4 39.Re6+ Kxf5 (Motor: −2.87).' },
      ],
    },
    '38w': {
      text: '38.Ra1: kale a-hattına geri döner ve a5’i korur.',
      amac: 'a5 piyonunu kurtarmak.',
      neden: 'Pasif savunma; kale yine birinci yataya bağlanır. Motor aktif **38.Re8**’i öneriyor: a5’i verir ama 39.Rf8+ ile kale Siyahın piyonlarının arkasına girer (Motor: −3.55’e karşı −4.19).',
      diger: [
        { move: '38.Re8', text: '38...Bxa5 39.Rf8+ Kg5 40.Rf7 ile kale yedinci yatayda (Motor: −3.55).' },
        { move: '38.Re3', text: '38...Rd2 39.Be2 Bxa5 40.Re6+ (Motor: −3.67).' },
      ],
    },
    '38b': {
      text: '38...Rd2: kale d2’ye gelir ve d4 piyonuna saldırıya hazırlanır.',
      amac: 'd4 piyonunu ikinci yataydan kazanmak; kale d2’den d-hattı boyunca d4’e bakar.',
      neden: 'Motor 38...Bc3’ü daha güçlü buluyor: fil a1 kalesine ve d4’e aynı anda saldırır (Motor: −4.17’ye karşı −3.46). Euwe’nin hamlesi de kazanç için yeterli.',
      diger: [
        { move: '38...Bc3', text: '39.Rd1 Bxa5 40.d5 cxd5 ile iki piyon fazla (Motor: −4.17).' },
        { move: '38...Ke7', text: '39.d5 c5 40.Bd3 Kd6 ile şah d5’i durdurur (Motor: −3.67).' },
      ],
    },
    '39w': {
      text: '39.Bc4: fil sonunda c4’e çıkar; g8 ve e6 karelerine bakar.',
      amac: 'Fili aktifleştirip h7 ya da b7 piyonuna karşı oyun aramak.',
      neden: 'd4 artık kurtarılamaz; Beyaz en azından filini oyuna sokar. Motorun ilk tercihi (Motor: −3.73).',
      diger: [
        { move: '39.d5', text: '39...Rxd5 40.Rb1 Rd4 ile d-piyonu yine düşer (Motor: −4.21).' },
        { move: '39.Rb1', text: '39...Rxd4 40.Be2 Ke7 (Motor: −4.23).' },
      ],
    },
    '39b': {
      text: '39...Rxd4: kale d4’ü alır ve c4 filine saldırır. Siyah iki piyon fazla.',
      amac: 'İkinci piyonu kazanmak ve tempo ile fili kovmak.',
      neden: 'Motorun ilk tercihi (Motor: −3.74). 39...Rb2 (Motor: −2.76) d4’ü bırakır ve Beyazın filine fırsat verir.',
      diger: [
        { move: '39...Rb2', text: '40.Bg8 Bc3 41.Rd1 Bxa5 (Motor: −2.76).' },
        { move: '39...Bc3', text: '40.Rb1 Rxd4 41.Be6 Bb4 (Motor: −2.34).' },
      ],
    },
    '40w': {
      text: '40.Be6: fil e6’ya çekilir ve f5 piyonunu destekler.',
      amac: 'Fili kurtarmak ve f5 piyonunu şahın saldırısına karşı korumak.',
      neden: 'Motor 40.Bg8 ile aynı değeri veriyor (Motor: −3.91 / −3.95); her iki durumda da Beyaz iki piyon eksik ve pasif.',
      diger: [
        { move: '40.Bg8', text: '40...c5 41.Rb1 Rd7 ile c-piyonu ilerler (Motor: −3.91).' },
        { move: '40.Bb3', text: '40...c5 41.Rc1 Rd7 (Motor: −4.26).' },
      ],
    },
    '40b': {
      text: '40...Rd3: kale d3’e gelir ve h3 piyonuna saldırır. Beyaz terk etti.',
      amac: 'h3 piyonunu kazanmak; Beyazın şahını kesmek ve fazla piyonları (b, c) ilerletmeye hazırlanmak.',
      neden: 'Beyazın a5 ve h3 piyonları korumasız, Siyah iki piyon fazla ve şah aktif: Alekhine burada terk etti. Motor 40...Rd8 ya da 40...c5’i biraz daha iyi buluyor (Motor: −3.93 / −3.89’a karşı −3.10), ama konum her durumda kazanılmış.',
      diger: [
        { move: '40...Rd8', text: '41.Bc4 Rd7 42.Be6 Rc7 ile kale c-piyonunu destekler (Motor: −3.93).' },
        { move: '40...c5', text: '41.Kg2 c4 42.Rc1 c3 ile c-piyonu hızla ilerler (Motor: −3.89).' },
      ],
    },
  },
  exercises: [
    { id: 'aeu-1', kind: 'tekrar', plan: false, title: 'f4’ün bıraktığı kare',
      source: 'Alekhine – Euwe, Dünya Şampiyonası maçı 1935 (19. hamle)',
      fen: '2brk2r/1pq3pp/p1p5/P1N1p3/1b3P2/6P1/1P2P1BP/R1Q2RK1 b k - 0 19',
      prompt: 'Alekhine 19.f4 ile e5 piyonuna saldırdı. Siyahın fili b4’te, kalesi d8’de. Beyazın vezirini rahatsız eden bir hamle var mı?',
      hint: 'Fil d-hattındaki kalenin koruduğu bir kareye gidebilir.',
      line: ['Bd2'],
      explanation: '**19...Bd2!** Fil c1 vezirine saldırır; 20.Qxd2?? Rxd2 olmaz çünkü d8 kalesi fili korur. Vezir kaçınca ...exf4 ve ...Be3+ gibi fikirlerle kara kareler Siyahın olur. Motor: ...Bd2 −1.0, sonraki en iyi hamle 19...Bxa5 +0.1.',
      link: 'Siyahın kara kareli fili b4’te bekliyordu; f4 hamlesi d2 ve e3 karelerini zayıflatınca istila başladı.' },
    { id: 'aeu-2', kind: 'tekrar', plan: false, title: 'Kaleleri d-hattında ikilemek',
      source: 'Alekhine – Euwe, Dünya Şampiyonası maçı 1935 (27. hamle)',
      fen: '5rk1/1p4pp/p1p5/P7/R1br1P2/3N4/1P1bP1BP/5R1K b - - 2 27',
      prompt: 'Vezirler değişti. Beyazın a4 kalesi c4 filine saldırıyor, d3 atı ise Siyahın fili ve kalesi tarafından hedef alınıyor. Siyahın en güçlü hamlesi hangisi?',
      hint: 'f8 kalesi henüz oyunda değil. Nereye giderse d3 atına baskı artar?',
      line: ['Rfd8'],
      explanation: '**27...Rfd8!** Kaleler d-hattında ikilenir; d4 kalesi ve c4 fili korunur, d3 atı ise çifte baskı altında kalır. Beyaz 28.Ra3 ile atı korumak zorunda kaldı; 28...Bxd3 29.exd3 Rb4 ile kale b2’ye gitti. Motor: ...Rfd8 −2.0, sonraki en iyi hamle 27...Be3 −0.9.',
      link: 'd-hattını erkenden alan Siyah, vezirler gidince bu hattı d3 atına karşı kullandı.' },
    { id: 'aeu-3', kind: 'transfer', plan: false, title: 'Aynı açılış, aynı fil',
      source: 'Vidmar – Euwe, Nottingham turnuvası 1936 (18. hamle)',
      fen: '2brk2r/1pq3pp/p1p2p2/P1N1n3/Rb3B2/6P1/1P2PPBP/2Q2RK1 b k - 5 18',
      prompt: 'Bir yıl sonra Euwe aynı açılışta aynı konuma geldi; bu kez Beyaz 18.Ra4 ile b4 filine saldırdı. Fil nereye gitmeli?',
      hint: 'a5 piyonu yalnızca a4 kalesiyle korunuyor; c7 veziri de a5’e bakıyor.',
      line: ['Bxa5'],
      explanation: '**18...Bxa5!** Fil a5 piyonunu alır; 19.Rxa5 Qxa5 ile Siyah kaleyi geri alır. Motor: ...Bxa5 0.0, sonraki en iyi hamle 18...Rd4 +1.2, 18...Bxc5 +1.5.',
      link: 'Alekhine maçında b4 fili d2’ye girmişti; burada aynı fil a5 piyonunu alarak aktifliğini gösteriyor.' },
    { id: 'aeu-4', kind: 'transfer', plan: false, title: 'f4 sonrası e3 karesi',
      source: 'Beliavsky – Bareev, SSCB Şampiyonası, Kiev 1986 (24. hamle)',
      fen: '6k1/pp3p2/4p2p/2bn1p2/5P2/1bN1PKP1/1P1rB2P/R1R5 b - - 4 24',
      prompt: 'Aynı Slav varyantından bir oyun sonu. Beyaz f4 oynadı; Siyahın kalesi d2’de, fili c5’te g1-a7 çaprazında. Siyah bunu nasıl değerlendirir?',
      hint: 'e3 piyonunu artık hiçbir piyon korumuyor ve c5 fili e3’e bakıyor.',
      line: ['Nxe3', 'Ra5', 'Bd4'],
      explanation: '**24...Nxe3!** At e3 piyonunu alır; c5 fili atı koruduğu için 25.Kxe3 yasal değildir. 25.Ra5 sonrası **25...Bd4!** ile fil atı korumaya devam eder ve kale b2 piyonuna gider. Motor: ...Nxe3 −3.6, sonraki en iyi hamle 24...Nf6 −0.6; 25...Bd4 −4.1, 25...Bb6 −2.6.',
      link: 'Alekhine’in 19.f4 hamlesi gibi Beliavsky’nin f4 hamlesi de e3 karesini zayıflattı; Siyahın kara kareli fili ve ikinci yataydaki kalesi bunu değerlendirdi.' },
  ],
  sources: [
    { title: 'Wikipedia: World Chess Championship 1935', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1935' },
    { title: 'Chess.com: The Openings of World Champions – Max Euwe and the Slav Defense', url: 'https://www.chess.com/article/view/the-openings-of-world-champions-max-euwe-and-the-slav-defense' },
    { title: 'Chess.com blog: A Century of Chess – Euwe-Alekhine 1935 (Part 2)', url: 'https://www.chess.com/blog/kahns/a-century-of-chess-euwe-alekhine-1935-part-2' },
    { title: 'Sydney Academy of Chess: Alekhine-Euwe match', url: 'https://sydneyacademyofchess.com.au/node/13344' },
    { title: 'Euwe – Alekhine 1935 maç PGN’i (20. oyun, aynı açılış)', url: 'https://rust-digger.code-maven.com/src/chess_pgn_parser-0.1.2/tests/samples/euwe_alekhine.pgn' },
  ],
};
