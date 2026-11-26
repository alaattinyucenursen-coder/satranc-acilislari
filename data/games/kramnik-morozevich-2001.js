// Kramnik – Morozevich, Dortmund turnuvası, Dortmund 2001 (4. tur). Kaynak: PgnMentor (Kramnik.pgn).
export default {
  id: 'kramnik-morozevich-2001',
  theme: 'c5 kilidi ve kara karelerde fil hakimiyeti',
  white: 'Vladimir Kramnik', black: 'Alexander Morozevich',
  whiteShort: 'Kramnik', blackShort: 'Morozevich',
  event: 'Dortmund turnuvası', site: 'Dortmund', year: 2001, eco: 'D12',
  variation: 'Slav Savunması, 4.e3 Bf5 5.Nc3 a6', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. Nc3 a6 6. Bd3 Bxd3 7. Qxd3 e6 8. O-O Be7 9. e4 O-O 10. Rd1 b5 11. c5 dxe4 12. Nxe4 Nxe4 13. Qxe4 Qd5 14. Qxd5 cxd5 15. Bf4 Nc6 16. Ne5 Nb8 17. Rd3 Rc8 18. Re1 Bf6 19. Ng4 Nc6 20. Nxf6+ gxf6 21. Bg3 Kg7 22. Bh4 Ne7 23. g4 Ng6 24. Bg3 a5 25. Bd6 h5 26. gxh5 Nh4 27. Rg3+ Kh6 28. Be7 Nf5 29. Bxf6 Nxg3 30. fxg3 Rg8 31. Kg2 Kxh5 32. h3 Kg6 33. Rf1 Kh7 34. g4 b4 35. Kg3 b3 36. a3 Rac8 37. h4 Rg6 38. h5 1-0`,

  summary: 'Oyun Dortmund 2001 turnuvasının 4. turunda (15 Temmuz 2001) oynandı ve 38 hamlede **Beyazın (Kramnik) galibiyetiyle** bitti; ChessBase’in İspanyolca haberine göre o günün tek galibiyetle biten partisiydi. Morozevich Yavaş Slav’da (4.e3 Bf5) 5...a6 ile vezir kanadında ...b5 genişlemesini hazırladı ve 6.Bd3 Bxd3 7.Qxd3 ile beyaz kareli filini değişti. Bunun bedeli, piyonlarının (a6, b5, d5, e6) beyaz karelerde, zayıflıklarının ise kara karelerde kalmasıydı. Kramnik 9.e4 ile merkezi açtı ve 10...b5’e **11.c5!** ile cevap verdi: vezir kanadı kilitlendi, d6 karesi delik oldu. 13...Qd5 ile vezirler değişince c5 piyonu d4 tarafından korunan **geçer piyon** haline geldi. Asıl dönüm noktası 18...Bf6 ve 19...Nc6 ile Siyahın kara kareli filini koruyamamasıydı: **20.Nxf6+ gxf6** ile o fil gitti, şahın önü dağıldı ve Beyazın f4 fili kara karelerde rakipsiz kaldı. Orta oyunda iki taraf da kesin olmayan hamleler yaptı (21.Bg3 ve 23.g4 motorun ilk tercihi değildi, 21...Kg7 ve 23...Ng6 da Siyahın en iyisi değildi), ama Kramnik’in fili d6’ya, sonra e7 ve f6’ya ulaştı. **29.Bxf6!** ile kalesini verdi ve karşılığında f6’da şahı kapatan, d4’ü koruyan dev bir fil ile bir piyon aldı. Morozevich 33...Kh7? ile şahını köşeye kapatınca (motor 33...e5 ile karşı oyun öneriyor) Beyazın g- ve h-piyonları yürüdü; 37...Rg6? sonrası 38.h5 kaleyi tuzağa düşürdü (38...Rh6 39.Bg5) ve Siyah terk etti.',
  intro: 'Bu oyun, Kramnik’in Kasparov’u 2000’de yendikten sonraki ilk Dortmund’undan. Turnuva altı oyunculu çift devreli bir lig olarak 12–22 Temmuz 2001’de oynandı; Kramnik ve Topalov 6½ puanla bitirdi ve ChessBase’e göre Kramnik eşitlik bozma maçında Topalov’u yenerek Dortmund’u üst üste kazandı. Bu galibiyetten sonra The Week in Chess’e göre Kramnik beşinci tur sonunda 3½ puanla tek başına liderdi. **Açılış:** 4.e3 ile Beyaz, Slav’ın keskin 4.Nc3 dxc4 kollarından kaçınır ve c4’ü sağlam tutar (Wikipedia bunu “Yavaş Slav” diye anar). Siyahın en doğal cevabı 4...Bf5’tir: Slav’ın bütün fikri, c8 filini ...e6 ile kapatmadan önce dışarı çıkarmaktır. 4...Bf5’e karşı Beyazın en zorlayıcı denemesi uzun süre 5.cxd5 cxd5 6.Qb3 (b7’ye saldırı) sayıldı; Siyah 6...Qc7 ya da 6...Nc6 7.Qxb7 Bd7 ile dengede kalır. Bu oyundaki 5.Nc3 a6 kolunda Siyah, Chebanenko Slav’ından tanıdık ...a6/...b5 fikrini Bf5 kuruluşuyla birleştirir. Kramnik ise 6.Bd3 ile fili hemen değişmeyi önerdi: değişimden sonra Siyahın piyonları beyaz karelere dizilir ve elinde kara kareli bir fil kalır. Oyunun bütün hikâyesi, Beyazın bu kara kareli fili ortadan kaldırıp kendi kara kareli filini rakipsiz bırakmasıdır.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Fil değişimi ve e4 kırılması:** 6.Bd3 ile Siyahın “iyi” f5 filini değişmek, ardından Qd3 ve Rd1 desteğiyle 9.e4 oynayıp merkezi açmak.',
      '**c5 kilidi:** ...b5’e 11.c5 ile cevap vermek. Böylece ...dxc4 ve ...c5 kırılmaları ortadan kalkar, d6 karesi delik olur ve vezir değişiminden sonra c5, d4 tarafından korunan geçer piyon olur.',
      '**Vezirleri değişip oyunsonuna geçmek:** 14.Qxd5 ile Kramnik orta oyunun belirsizliğini bıraktı; c5/d4 zinciri, d6 deliği ve kara karelerde iyi fil uzun vadeli avantajlardı.',
      '**Kara kareli filleri ayırmak:** Ne5-g4 manevrasıyla Siyahın f6 filini almak (20.Nxf6+). Siyahın kara kareleri koruyacak taşı kalmayınca f4 fili d6, e7, f6 karelerine yerleşebildi.',
      '**Kaleleri üçüncü yataydan şah kanadına getirmek:** Rd3 ve Re1/Re3 ile g3 ve h3 karelerine geçmek, dağılmış Siyah piyonlarına (f6, h7) ve şaha baskı kurmak.',
      '**Rakipsiz fil için kalite vermek:** 29.Bxf6 ile filin f6’ya yerleşmesi; fil hem d4’ü hem g5/g7 karelerini tutup Siyah şahını h-hattına hapsetti.',
      '**Piyon çoğunluğunu yürütmek:** g3-g4, h3-h4-h5 ve şahı g3’e getirerek piyonları kale ve şahla desteklemek; kapalı şaha karşı piyonlar taşlardan daha etkiliydi.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**Slav’ın fil sorununu çözmek:** 4...Bf5 ile c8 filini ...e6’dan önce çıkarmak; 6...Bxd3 ile de onu Beyazın iyi filiyle değişmek.',
      '**Vezir kanadında yer kazanmak:** 5...a6 ve 10...b5 ile c4’e baskı yapmak; Beyaz c5 oynarsa ...a5 ve ...b4 ile vezir kanadında piyonları ilerletmek.',
      '**Vezir değişimiyle rahatlamak:** 13...Qd5 ile en aktif Beyaz taşını değişip c-hattı açılmış bir oyunsonuna geçmek; ama bu c5’i geçer piyon yaptı.',
      '**Kara kareli fili korumak:** 18...Bd8 ve ...Bc7 ile kendi kötü görünen ama kara kareleri koruyan filini Beyazın f4 filiyle değişmek doğru plandı; 18...Bf6 ve 19...Nc6 bu fili kaybettirdi.',
      '**Şah kanadında at ve h-piyonu ile oyun:** ...Ne7-g6-h4-f5 ve ...h5 ile g4 piyonunu sorgulamak, Beyaz kalesine ve g3’e saldırmak.',
      '**Merkez piyonlarıyla karşı oyun:** Kalite fedasından sonra ...e5 ile d4’ü sorgulamak ve kaleleri açık hatlara getirmek (33...e5!). Şahı köşeye kapatmak (33...Kh7?) yerine aktif kalmak gerekiyordu.',
    ] },
  },
  critical: [
    { move: '11w', title: '11.c5: vezir kanadı kilitleniyor', text: 'Morozevich 10...b5 ile c4’e baskı yaptı. Kramnik piyonu c5’e sürdü: ...dxc4 artık mümkün değil, ...c5 kırılması da yok; d6 karesi kalıcı bir delik oldu. Motor 11.cxd5 cxd5 12.e5 Nfd7’yi biraz daha iyi buluyor (Motor: +0.56, 11.c5 +0.36), ama c5 Kramnik’e açık ve uzun vadeli bir plan verdi: c5/d4 zinciri ve kara karelerde fil oyunu. Vezirler değişince c5 korunan geçer piyon oldu.' },
    { move: '13b', title: '13...Qd5: vezir değişimi kararı', text: 'Siyah e4’teki merkez vezirini değişmeyi önerdi. Motor bunu en iyi hamle sayıyor (Motor: +0.42), yani hata değil; ama oyunun karakterini değiştirdi. 14.Qxd5 cxd5 sonrası Siyahın e-piyonu fazlası şah kanadında, Beyazın korunan c5 geçer piyonu vezir kanadındadır. Bu yapıda iyi kara kareli fil Beyaza aittir; Siyahın e7 fili e6/d5 piyonlarının arkasında pasiftir.' },
    { move: '19b', title: '19...Nc6? kara kareli fil terk ediliyor', text: '19.Ng4 f6 filine saldırdı. 19...Bd8! 20.Bxb8 Raxb8 21.f4 ile Siyah filini korurdu (Motor: +0.47); fil ileride c7 üzerinden Beyazın f4 filiyle değişilebilirdi. 19...Nc6 ise atı oyuna sokmak isterken fili bıraktı: 20.Nxf6+ gxf6 ve Siyahın kara kareleri koruyan taşı kalmadı. Motor farkı küçük gösteriyor (+0.52), ama yapısal olarak oyunun gidişini belirleyen hamle bu oldu.' },
    { move: '20w', title: '20.Nxf6+: rakipsiz fil', text: 'At, kara kareleri savunan son Siyah filini aldı; 20...gxf6 zorunluydu (20...Kh8 21.Nd7 ya da 20...Kf8 21.Bd6+ taş kaybeder, Motor: +5’in üstü). Siyahın şah kanadı dağıldı: f6 ve f7 ikiz piyonlar, h7 yalnız. Beyazın f4 fili artık d6, e7, f6 ve h6 karelerine rakipsiz gidebilir. Alternatif 20.Be5 filleri değiştirir ve bütün avantajı bırakır (Motor: 0.00).' },
    { move: '23w', title: '21–23. hamleler: iki tarafın da kaçırdığı yollar', text: 'Motor bu üç hamlede tutarlı olarak kaleyi üçüncü yatayda ikiye katlamayı (Ree3, sonra Rh3 ya da Rg3+) öneriyor. 21.Bg3 (Motor: 0.00; 21.Ree3 +0.48) ve 23.g4 (Motor: +0.24; 23.Ree3 +0.43) avantajın bir kısmını bıraktı. Ama Morozevich de 21...Kg7 (21...h6 ile denge) ve 23...Ng6 (23...h5! 24.Rf3 hxg4 25.Rf4 Nf5 +0.36) ile bunu geri verdi. 23.g4 yine de f5’i atın elinden alan ve ileride g-hattını açan stratejik bir hamleydi.' },
    { move: '29w', title: '29.Bxf6! kalite fedası', text: '28...Nf5 hem g3 kalesine hem e7 filine saldırdı. Kramnik kaleyi bıraktı ve fili f6’ya, Siyah şahının dibine yerleştirdi. Fil f6’da d4’ü korur, g5 ve g7’yi tutar; h5 piyonu da g6’yı kontrol ettiği için h6’daki şah hapsolur. 29.Bd6? Nxd4 sonrası Siyah bir piyon alır ve Beyaz kötüdür (Motor: −1.28). Maç hamlesiyle Motor: +0.77. 30.fxg3 ile de f-hattı Beyaz kalesine açıldı.' },
    { move: '33b', title: '33...Kh7? şah köşeye kapanıyor', text: 'Materyalde Siyah bir kalite önde, Beyaz bir piyon önde. 32...Kg6 f6 filine saldırmıştı, 33.Rf1 onu korudu. Burada 33...e5! 34.g4 e4 35.Rf5 ile Siyah merkez piyonlarını harekete geçirip kalelerine hat açabilirdi (Motor: +0.78). 33...Kh7 ise şahı h-hattına kapattı ve 34.g4! ile Beyaz g5, h4-h5 ve Kg3 planını rahatça uyguladı (Motor: +2.17’den sonra +3’ün üstü).' },
    { move: '37b', title: '37...Rg6? ve 38.h5: kale tuzakta', text: 'Siyah kalesini g6’ya getirip f6 filine baskı yapmak istedi. 38.h5! kaleye saldırdı: 38...Rh6 39.Bg5 kaleyi fil karşılığında kazanır, 38...Rxf6 39.Rxf6 ise Beyaza aktif kale ve iki bağlı geçer piyonlu kazanılmış bir kale oyunsonu verir. 37...Ra8 ya da 37...Rge8 de kaybediyordu ama daha uzun direnirdi (Motor: +4.3). Morozevich terk etti.' },
  ],
  lessons: [
    'Slav’da beyaz kareli fil değişildikten sonra Siyahın piyonları beyaz karelerde kalır; o zaman kara kareler ve onları koruyan kara kareli fil çok önemli hale gelir.',
    '...b5 genişlemesine c5 ile cevap vermek vezir kanadını kilitler, rakibin ...c5 ve ...dxc4 kırılmalarını ortadan kaldırır ve d6 gibi bir delik yaratır. Vezirler değişince c5 piyonu korunan geçer piyona dönüşebilir.',
    'Bir yapıda “iyi fil”e sahip olan taraf, rakibin aynı renkteki filini değiştirmeye çalışır (Kramnik 20.Nxf6+); savunan taraf da kendi filini korumalı ya da rakip filiyle değiştirmelidir (19...Bd8!).',
    'Rakipsiz bir fil, özellikle şahın dibinde (f6) kaleden daha değerli olabilir: 29.Bxf6 ile Kramnik kaliteyi verdi ama Siyah şahını hapsetti, d4’ü korudu ve piyonları için yol açtı.',
    'Kalite eksiğiyle oynarken piyon çoğunluğunu (g- ve h-piyonları) şahla ve kaleyle destekleyerek yürütmek, rakibin kalelerine açık hat vermeden ilerlemenin yoludur.',
    'Kalite önde olan taraf aktif olmalıdır: 33...e5 gibi bir merkez kırılması kalelere hat açar; şahı köşeye çekmek (33...Kh7?) ise rakibin planını hızlandırır.',
    'Oyunsonunda kalelerin hareket alanına dikkat: 37...Rg6? sonrası 38.h5 ile kale tuzağa düştü. Kendi piyonlarının ve rakip filin kontrol ettiği karelere kale sokmak tehlikelidir.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 1-0: Vladimir Kramnik (Beyaz) kazandı. 38.h5 sonrası g6’daki Siyah kalesinin güvenli karesi kalmadı: 38...Rh6 39.Bg5 kaleyi kazanır (Motor: +4’ün üstü). Morozevich bu durumda terk etti; Beyaz kale oyunsonunda bir piyon fazlası ve iki bağlı şah kanadı piyonu ile kalacaktı.' },
    { q: 'Siyah neden 6...Bxd3 ile fili değişti, 6...Bg6 değil?', a: 'İki hamle de oynanabilir (Motor: 6...Bxd3 +0.25, 6...Bg6 +0.29). 6...Bg6 fili korur ama Beyaz e4 ya da Ne5 ile ona tempo kazanabilir. 6...Bxd3 7.Qxd3 ile Siyah gelişimi kolaylaştırır; ama bedeli, piyonlarının beyaz karelerde kalması ve oyunun kara kareler etrafında dönmesidir. 6...e6? ise 7.Bxf5 exf5 ile Siyaha ikiz f-piyonları verirdi (Motor: +0.56).' },
    { q: 'Kramnik neden 11.cxd5 yerine 11.c5 oynadı?', a: 'Motor 11.cxd5 cxd5 12.e5 Nfd7’yi biraz daha iyi buluyor (Motor: +0.56, 11.c5 +0.36). Ama 11.c5 bir yapı kararıdır: vezir kanadı kilitlenir, Siyahın ...c5 kırılması ortadan kalkar ve d6 karesi Beyaz taşlarına açılır. Bu hamle, vezir değişiminden sonra korunan c5 geçer piyonunu ve oyunun bütün kara kare planını doğurdu.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Üç kaynaktan: (1) c5/d4 zinciri ve d6 deliği, (2) Beyazın kara kareli filinin aktif, Siyahınkinin pasif olması, (3) 20.Nxf6+ gxf6 sonrası Siyah şahının önündeki piyonların dağılması. Bunların birleşimiyle f4 fili önce d6’ya, sonra e7 ve f6’ya yerleşti ve Siyahın oyununu felç etti.' },
    { q: 'Siyah neden 19...Nc6 oynadı ve nerede kurtulabilirdi?', a: '19...Nc6 ile Morozevich b8’de pasif duran atını oyuna sokmak istedi. Ama f6 filini 20.Nxf6+’ya bıraktı. 19...Bd8! 20.Bxb8 Raxb8 21.f4 ile fil korunurdu (Motor: +0.47) ve ileride ...Bc7 ile filler değişilebilirdi. Daha erken, 18...Bd8 ya da 18...h6 (Motor: +0.34–0.37) da 18...Bf6’dan daha güvenliydi.' },
    { q: 'Kramnik 29. hamlede neden kaleyi kurtarmadı?', a: 'Kurtaramazdı: 28...Nf5 hem g3 kalesine hem e7 filine saldırıyordu. Fili kurtarıp d4’ü korumak için tek iyi kare f6’ydı: 29.Bxf6 Nxg3 30.fxg3 (Motor: +0.77–0.96). Filin d6’ya çekilmesi 29.Bd6? Nxd4 sonrası d4 piyonunu ve oyunu kaybettirirdi (Motor: −1.28). Yani kalite fedası hem zorunlu hem de güçlüydü.' },
    { q: 'Siyah bir kalite önde olduğu halde neden kaybetti?', a: '31...Kxh5 sonrası Siyahın iki kalesine karşı Beyazın kale ve fili vardı, ama Beyaz bir piyon öndeydi ve motor Beyazı +1.1 görüyordu. Siyah kalelerinin açık hattı yoktu (c-hattı c5/d4 ile kapalı), f6 fili şahı sınırlıyordu ve Beyazın g- ve h-piyonları Siyahın tek f-piyonuna karşı çoğunluktaydı. 33...Kh7? ile aktiflik de kaybolunca piyonlar kazandı.' },
    { q: '30.fxg3 neden 30.hxg3’ten iyiydi?', a: '30.fxg3 f-hattını açar: Beyaz kalesi Rf1 ile f7’ye ve f6 filinin arkasına gelir. h-piyonu da g4-h4-h5 yürüyüşü için yerinde kalır. Motor: fxg3 +0.96, hxg3 +0.54. 30.Bg7+?? Kxg7 31.hxg3 ise fili hediye eder (Motor: −3.92).' },
    { q: 'Morozevich’in 34...b4 ve 35...b3 hamleleri ne amaçlıyordu?', a: 'Siyah, vezir kanadında piyonları ilerletip b-hattını açmak ve kalelerine oyun bulmak istedi; 36.axb3? Rgb8 olsaydı kale b-hattından b3’e ve b2’ye saldırırdı (Motor: +2.18). Kramnik 36.a3! ile b3 piyonunu sabitledi ve vezir kanadını tamamen kapattı (Motor: +3.47). Motor 34...Ra6 ile f6 filine baskıyı daha dirençli buluyor (+2.46).' },
  ],
  notes: {
    '1w': {
      text: '1.d4: vezir piyonu iki kare ilerler; e5 ve c5 karelerini kontrol eder, c1 filine yol açar.',
      amac: 'Merkezde sağlam bir piyon kurmak ve c4 ile Vezir Gambiti’ne hazırlanmak.',
      neden: 'Kramnik kariyerinde hem 1.d4 hem 1.Nf3 ile çok oyun oynamıştır; d4 kuruluşları onun konumsal ve uzun vadeli avantajlara dayalı stiline uygundur. Bu oyunda d4 piyonu sonuna kadar c5 zincirinin temeli olarak kalacak.',
      diger: [
        { move: '1.e4', text: 'Açık oyunlara gider; motor neredeyse aynı değerlendiriyor (Motor: +0.29).' },
        { move: '1.Nf3', text: 'Esnek başlangıç; çoğu zaman d4 kuruluşlarına geçer (Motor: +0.22).' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah da merkez piyonunu iki kare ilerletir ve e4 karesini kontrol eder.',
      amac: 'Beyazın e4 ile tam merkez kurmasını engellemek ve klasik Vezir Gambiti yapılarına girmek.',
      neden: 'Morozevich alışılmadık açılışlarıyla bilinir, ama Slav onun bu dönemde sık kullandığı sağlam bir silahtı. 1...d5 ile Siyah merkezde hemen yer tutar.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına esnek giriş (Motor: +0.30).' },
        { move: '1...e6', text: 'Vezir Gambiti Reddi ya da Fransız yapılarına geçiş.' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. Beyaz c-piyonunu d5’e karşı sunar.',
      amac: 'd5 piyonunu merkezden uzaklaştırmak; ...dxc4 gelirse e4 ile tam merkez kurmak.',
      neden: 'c4, d5’e kenardan saldırarak Siyahın merkezini sorgular. Bu oyunda c-piyonu daha sonra c5’e kadar gidip vezir kanadını kilitleyecek.',
      diger: [
        { move: '2.Nf3', text: 'Hamle sırasını esnek tutar; motor çok az farkla öne koyuyor (Motor: +0.38).' },
        { move: '2.Bf4', text: 'Londra Sistemi; daha sakin bir kuruluş.' },
      ],
    },
    '2b': {
      text: '2...c6: Slav Savunması. d5 piyonu ikinci bir piyonla desteklenir.',
      amac: 'Merkezi korurken c8 filinin önünü kapatmamak: Vezir Gambiti Reddi’ndeki (2...e6) “kötü fil” sorunundan kaçınmak.',
      neden: 'Slav’ın temel fikri budur: c8 fili ileride ...Bf5 ya da ...Bg4 ile dışarı çıkabilir. Morozevich bu oyunda tam olarak bunu yapacak.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi; sağlam ama c8 fili e6 piyonunun arkasında kalır (Motor: +0.34).' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü; Siyah merkezi bırakıp hızlı gelişime oynar (Motor: +0.33).' },
      ],
    },
    '3w': {
      text: '3.Nf3: at gelişir, e5 karesini kontrol eder ve şah kanadı rokunu hazırlar.',
      amac: 'Gelişimi sürdürmek ve hamle sırasını esnek tutmak.',
      neden: '3.Nf3, Slav’ın bazı keskin kollarını (3.Nc3 e5 gibi) önler ve Beyaz e3 mi Nc3 mü oynayacağına sonra karar verebilir.',
      diger: [
        { move: '3.Nc3', text: 'En sık oynanan alternatif; 3...dxc4 ya da 3...e6 (Yarı Slav) gelebilir (Motor: +0.40).' },
        { move: '3.cxd5', text: 'Değişim Slav’ı: simetrik ve sakin bir yapı (Motor: +0.35).' },
      ],
    },
    '3b': {
      text: '3...Nf6: at gelişir, d5’i destekler ve e4’ü kontrol eder.',
      amac: 'Gelişimi tamamlamak ve ...dxc4 ya da ...Bf5 seçeneklerini açık tutmak.',
      neden: 'Ana hamle budur. 3...e6 ile Yarı Slav’a geçmek c8 filini kapatırdı; 3...Bf5?! ise 4.cxd5 cxd5 5.Qb3 ile b7’ye baskıya açıktır.',
      diger: [
        { move: '3...e6', text: 'Yarı Slav yapısına gider (Motor: +0.49).' },
        { move: '3...dxc4', text: 'Slav’da piyonu hemen almak; Beyaz e3 ya da a4 ile geri almaya çalışır.' },
      ],
    },
    '4w': {
      text: '4.e3: sağlam kuruluş. c4 piyonu korunur, f1 filine yol açılır.',
      amac: 'Slav’ın keskin 4.Nc3 dxc4 kollarına girmeden sağlam bir merkezle gelişmek: “Yavaş Slav”.',
      neden: '4.Nc3 dxc4 sonrası Beyaz piyonu geri almak için a4 oynamak zorunda kalır; 4.e3 ile c4 piyonu her zaman korunur. Bedeli, c1 filinin bir süre kapalı kalmasıdır. Kramnik bu filini sonra e4 kırılmasıyla açacak.',
      diger: [
        { move: '4.Nc3', text: 'Ana yol; 4...dxc4 5.a4 Bf5 ile keskin ana kol (Motor: +0.30).' },
        { move: '4.cxd5', text: 'Değişim Slav’ı; 4...cxd5 5.Nc3 Nc6 6.Bf4 (Motor: +0.29).' },
      ],
    },
    '4b': {
      text: '4...Bf5: Slav’ın ana fikri. Fil, ...e6 oynanmadan önce dışarı çıkar.',
      amac: 'c8 filini aktif bir çapraza (b1-h7) koymak, sonra ...e6 ile sağlam bir merkez kurmak.',
      neden: '4.e3 sonrası Beyazın c1 fili kapandığından Siyahın fili serbestçe çıkabilir. Wikipedia’nın Slav maddesine göre bu hamlenin 5.cxd5 cxd5 6.Qb3 ile çürütüldüğü bir dönem düşünülmüştü; ama 6...Nc6 7.Qxb7 Bd7 piyon fedası ve 6...Qc7 Siyahı ayakta tutar.',
      diger: [
        { move: '4...e6', text: 'Yarı Slav yapısı; c8 fili içeride kalır (Motor: +0.32).' },
        { move: '4...a6', text: 'Chebanenko Slav’ı; önce ...b5 hazırlanır (Motor: +0.43).' },
        { move: '4...Bg4', text: 'Fil f3 atını bağlar; Bf5’in daha esnek kardeşi.' },
      ],
    },
    '5w': {
      text: '5.Nc3: at gelişir; d5 ve e4 karelerine bakar.',
      amac: 'e4 kırılmasını hazırlamak ve gelişimi doğal sürdürmek.',
      neden: 'Kramnik zorlayıcı 5.cxd5 cxd5 6.Qb3 yerine gelişimi seçti. Motor 5.cxd5 cxd5 6.Qb3 Qc7’yi neredeyse eşit görüyor (Motor: +0.08); 5.Nc3 oyunu taşlarla dolu ve daha karmaşık tutar.',
      diger: [
        { move: '5.cxd5', text: '5...cxd5 6.Qb3 ile b7’ye baskı; 6...Qc7 7.Bd2 sonrası Siyah dengededir (Motor: +0.08).' },
        { move: '5.Qb3', text: '5...Qb6 ile vezir değişimi önerilir; eşit (Motor: +0.06).' },
        { move: '5.Bd3', text: 'Fili hemen değişmeyi önerir (Motor: +0.18).' },
      ],
    },
    '5b': {
      text: '5...a6: Siyah ...b5 ile vezir kanadında genişlemeye hazırlanır.',
      amac: 'Chebanenko Slav’ının fikrini Bf5 ile birleştirmek: ...b5 ile c4’e baskı yapmak ve Qb3 türünden saldırılara karşı b5 karesini kontrol etmek.',
      neden: 'Morozevich ana yol 5...e6 6.Nh4’ten (Beyaz filleri alıp fil çifti kazanır) kaçınmak istedi. 5...a6, 6.Nh4’e 6...Bc8 ya da ...Be6 ile cevap vermeyi mümkün kılar ama bir tempo harcar. Motor 5...e6’yı biraz daha iyi buluyor.',
      diger: [
        { move: '5...e6', text: 'Ana yol; 6.Nh4 Bg6 7.Nxg6 hxg6 ile Beyaz fil çiftini, Siyah sağlam bir yapıyı alır (Motor: +0.26).' },
        { move: '5...Nbd7', text: 'Gelişim; 6.Nh4 ile fil yine sorgulanır (Motor: +0.52).' },
      ],
    },
    '6w': {
      text: '6.Bd3: Beyaz f5 filini değişmeyi önerir.',
      amac: 'Siyahın en iyi taşını, Slav’ın “gururu” olan f5 filini oyundan çıkarmak; değişimden sonra vezir d3’te e4’ü destekler.',
      neden: 'Bu değişim Siyahın piyonlarını beyaz karelere, zayıflıklarını kara karelere bırakır. Motor 6.Qb3 b5 7.cxd5 cxd5 8.a4 ile daha keskin bir yolu az farkla öne koyuyor (Motor: +0.64), ama 6.Bd3 Kramnik’in açık ve yapısal planına uyar.',
      diger: [
        { move: '6.Qb3', text: 'b7’ye baskı; 6...b5 7.cxd5 cxd5 8.a4 ile vezir kanadı açılır (Motor: +0.64).' },
        { move: '6.Nh4', text: 'Fili kovalar; 6...Bc8 7.Nf3 ile tekrar olabilir (Motor: +0.47).' },
        { move: '6.Ne5', text: 'Merkeze at; 6...Nbd7 7.Qb3 Qc7 (Motor: +0.42).' },
      ],
    },
    '6b': {
      text: '6...Bxd3: Siyah filleri değişir.',
      amac: 'Gelişimi kolaylaştırmak ve Beyazın en aktif filini de oyundan çıkarmak.',
      neden: 'Fili g6’ya çekmek de mümkündür ama Beyaz e4 ile tempo kazanabilir. Değişim sade ve sağlamdır; uzun vadeli bedeli, Siyahın kara kareli fili ile kara kareleri koruma yükünü taşımasıdır.',
      diger: [
        { move: '6...Bg6', text: 'Fili tutar; 7.O-O e6 8.c5 gibi devam eder (Motor: +0.29).' },
        { move: '6...e6', text: '7.Bxf5 exf5 sonrası Siyahın ikiz f-piyonları olur (Motor: +0.56).' },
      ],
    },
    '7w': {
      text: '7.Qxd3: vezirle geri alınır. Zorunludur; başka hamle bir taş kaybettirir.',
      amac: 'Vezir d3’te e4 karesini destekler ve b1-h7 çaprazında h7’ye bakar.',
      neden: 'Geri almamak (7.cxd5? ya da 7.Qb3?) bir fil kaybettirir (Motor: −3’ün altı). Vezir d3’te e4 kırılmasının en önemli destekçisidir.',
    },
    '7b': {
      text: '7...e6: Siyah merkezini sağlamlaştırır ve f8 filine yol açar.',
      amac: 'd5’i iki kez desteklemek ve rok yapmak.',
      neden: 'c8 fili artık olmadığı için ...e6 bir fil kapatmaz. Siyahın piyonları c6, d5, e6 ile beyaz karelere dizildi; bu yüzden kara kareli fili kara kareleri korumak için çok önemli olacak.',
      diger: [
        { move: '7...Nbd7', text: 'Önce gelişim; 8.e4 dxe4 9.Nxe4 e6 (Motor: +0.44).' },
        { move: '7...h6', text: 'Bg5’i önler ama yavaş (Motor: +0.49).' },
      ],
    },
    '8w': {
      text: '8.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvene almak ve kaleyi f1’den d1/e1’e getirmeye hazırlanmak.',
      neden: '8.e4 hemen de mümkündü ama 8...Nxe4 9.Nxe4 dxe4 10.Qxe4 sonrası Beyazın gelişimi geride kalır (Motor: +0.21). Önce rok, sonra e4 daha sağlamdır.',
      diger: [
        { move: '8.e4', text: '8...Nxe4 9.Nxe4 dxe4 10.Qxe4 ile merkez erken açılır (Motor: +0.21).' },
        { move: '8.a3', text: '...Bb4’ü önler ama tempo kaybıdır (Motor: +0.20).' },
      ],
    },
    '8b': {
      text: '8...Be7: fil e7’ye gelişir ve rokun önünü açar.',
      amac: 'Hızla rok yapmak ve d6/f6 karelerini korumak.',
      neden: 'Fil e7’de pasif ama sağlamdır; kara kareleri (d6, f6) savunur. Motor 8...Bb4 9.Nd2 ile c3 atını bağlamayı az farkla öne koyuyor; Bb4 filin daha aktif olduğu bir yerdir.',
      diger: [
        { move: '8...Bb4', text: '9.Nd2 Nbd7 10.e4 ile c3 atını bağlar (Motor: +0.34).' },
        { move: '8...Nbd7', text: 'Önce at; 9.e4 dxe4 10.Nxe4 Be7 (Motor: +0.41).' },
      ],
    },
    '9w': {
      text: '9.e4: Beyaz merkezi açar ve d5’e ikinci kez saldırır.',
      amac: 'Merkezde üstünlük kurmak ve c1 filini açmak. Siyahın beyaz kareli fili olmadığı için merkezdeki beyaz kareler (e4, d5) Beyaza daha kolay geçer.',
      neden: 'Motorun ilk tercihi budur (Motor: +0.38). e4 ile d4-e4 merkezi kurulur; Siyah ...dxe4 ile almak zorunda kalırsa merkez Beyaz taşlarına açılır.',
      diger: [
        { move: '9.Rd1', text: 'Önce kale, sonra e4; aynı plan (Motor: +0.24).' },
        { move: '9.Re1', text: 'e4’ü kale ile destekler (Motor: +0.22).' },
      ],
    },
    '9b': {
      text: '9...O-O: Siyah rok yapar ve merkezdeki gerilimi korur.',
      amac: 'Şahı güvene almak; ...dxe4 değişimini en uygun ana bırakmak.',
      neden: 'Motor 9...dxe4, 9...O-O ve 9...Nxe4’ü aynı değerlendiriyor (+0.4). Morozevich gerilimi korumayı seçti; Beyazın e5 ile at kovalaması da şimdilik tehlikeli değil.',
      diger: [
        { move: '9...dxe4', text: '10.Nxe4 Nbd7 11.Bf4 O-O; merkez hemen açılır (Motor: +0.41).' },
        { move: '9...Nxe4', text: '10.Nxe4 dxe4 11.Qxe4 O-O; değişimlerle rahatlama (Motor: +0.42).' },
      ],
    },
    '10w': {
      text: '10.Rd1: kale d-hattına gelir ve d4 piyonunu destekler.',
      amac: 'd-hattı açılırsa kaleyi hazır tutmak; d4’ü sağlamlaştırmak.',
      neden: 'Merkez açılacağı için kale d-hattında doğal yerindedir; ileride Rd3 ile üçüncü yataydan şah kanadına da geçecek. Motor 10.Bf4’ü az farkla öne koyuyor (Motor: +0.41, Rd1 +0.33).',
      diger: [
        { move: '10.Bf4', text: 'Önce fil; 10...dxe4 11.Nxe4 Nbd7 12.Rfd1 (Motor: +0.41).' },
        { move: '10.exd5', text: '10...exd5 11.c5 ile erken kilit (Motor: +0.28).' },
      ],
    },
    '10b': {
      text: '10...b5: Siyah c4’e saldırır ve vezir kanadında yer kazanmaya çalışır.',
      amac: '5...a6’nın devamı: ...bxc4 ya da ...dxc4 ile Beyazın merkezini zayıflatmak.',
      neden: 'Mantıklı bir plan ama Beyazın c5 cevabına izin verir. Motor 10...Re8, 10...Qc7 ve 10...dxe4’ü biraz daha iyi buluyor (+0.27–0.35, maç hamlesi +0.48); onlarda vezir kanadı esnek kalır.',
      diger: [
        { move: '10...dxe4', text: '11.Nxe4 Nbd7 12.Bf4 a5; Siyah sağlam ve esnek (Motor: +0.35).' },
        { move: '10...Re8', text: 'Bekleme hamlesi; 11.g3 dxe4 12.Nxe4 Nbd7 (Motor: +0.27).' },
        { move: '10...a5', text: 'Vezir kanadını a-piyonuyla genişletmek (Motor: +0.29 civarı).' },
      ],
    },
    '11w': {
      text: '11.c5: c-piyonu ilerler ve vezir kanadını kilitler.',
      amac: 'Siyahın ...dxc4 ve ...c5 kırılmalarını yok etmek, d6 karesini zayıflatmak ve c5/d4 zinciri kurmak.',
      neden: 'Siyahın beyaz kareli fili olmadığı ve piyonları beyaz karelerde olduğu için Beyaz kara kareleri (d6, c5, b6) ele geçirmek ister. Motor 11.cxd5 cxd5 12.e5’i biraz daha iyi buluyor (Motor: +0.56, maç hamlesi +0.36), ama c5 oyunun bütün planını belirledi: vezirler değişince c5 korunan geçer piyon olacak.',
      diger: [
        { move: '11.cxd5', text: '11...cxd5 12.e5 Nfd7 13.Ne2 ile Fransız tipi yapı ve şah kanadında yer (Motor: +0.56).' },
        { move: '11.b3', text: '11...b4 12.e5 bxc3 13.exf6 Bxf6 ile karmaşık oyun (Motor: +0.32).' },
      ],
    },
    '11b': {
      text: '11...dxe4: Siyah merkezde değişir.',
      amac: 'Merkezi açmak ve taş değişimleriyle rahatlamak.',
      neden: 'c5’ten sonra Siyahın merkezde gerilimi tutmasının anlamı kalmaz; e4-e5 tehdidi de vardır. 11...b4? 12.e5 bxc3 13.exf6 Bxf6 Beyaza daha iyi bir yapı verir (Motor: +0.63).',
      diger: [
        { move: '11...Nxe4', text: '12.Nxe4 dxe4 13.Qxe4 Qd5; aynı yapıya geçiş (Motor: +0.46).' },
        { move: '11...b4', text: '12.e5 bxc3 13.exf6 Bxf6 14.bxc3; Beyaz daha iyi (Motor: +0.63).' },
      ],
    },
    '12w': {
      text: '12.Nxe4: at piyonu geri alır.',
      amac: 'Materyali dengelemek ve atı merkeze getirmek.',
      neden: 'Zorunludur: vezirle geri almaya çalışmak (12.Qe2? ya da 12.Qe3?) 12...exf3 ile bir taş kaybettirir (Motor: −4.7).',
    },
    '12b': {
      text: '12...Nxe4: atlar değişir.',
      amac: 'Beyazın merkezdeki güçlü atını ortadan kaldırmak ve taş sayısını azaltmak.',
      neden: 'Daha az taşla Siyahın alan sıkıntısı azalır. 12...Nbd7 13.Bf4 Nd5 de mümkündü (Motor: +0.46) ama Beyazın atı d6’ya atlayabilirdi.',
      diger: [
        { move: '12...Nbd7', text: '13.Bf4 Nd5 14.Be5; Beyaz d6 karesine göz diker (Motor: +0.46).' },
        { move: '12...Nd5', text: '13.Bg5 Nd7 14.Bxe7 ile kara kareli filler değişir (Motor: +0.62).' },
      ],
    },
    '13w': {
      text: '13.Qxe4: vezir geri alır ve merkezde güçlü durur.',
      amac: 'Materyali dengelemek; vezir e4’te a8 kalesine ve h7’ye bakar.',
      neden: 'Zorunlu geri alış: başka bir hamle bir taş kaybettirir (Motor: −3.7). Vezir e4’te merkezdeki en aktif taştır.',
    },
    '13b': {
      text: '13...Qd5: Siyah vezirlerin değişimini önerir.',
      amac: 'Beyazın en aktif taşını değişmek ve vezirsiz, daha sakin bir oyuna geçmek.',
      neden: 'Motorun ilk tercihi budur (Motor: +0.42). Ama bu karar yapıyı değiştirir: 14.Qxd5 cxd5 sonrası Beyazın c5 piyonu, d4 tarafından korunan geçer piyon olur. Morozevich e-piyonu fazlası ve c-hattıyla bunu dengelemeyi umdu.',
      diger: [
        { move: '13...Nd7', text: 'Vezirler kalır; 14.Rd3 Qc8 15.Qe2 Rd8 (Motor: +0.57).' },
        { move: '13...Re8', text: '14.a4 Nd7 15.Bf4 Qc8 ile vezir kanadında gerilim (Motor: +0.64).' },
      ],
    },
    '14w': {
      text: '14.Qxd5: Kramnik vezirleri değişir.',
      amac: 'Yapısal avantajlarla (c5/d4, d6 deliği, iyi kara kareli fil) oyunsonuna geçmek.',
      neden: 'Motor veziri tutmayı (14.Qe1, 14.Qe2, 14.Qc2: +0.36–0.44) az farkla öne koyuyor, değişim +0.24. Kramnik’in seçimi bir stil tercihi: vezirsiz oyunda Siyahın karşı oyun şansı azalır ve korunan c5 piyonu daha değerli hale gelir.',
      diger: [
        { move: '14.Qe1', text: 'Vezirleri tutar; 14...Nd7 15.Bf4 Rfe8 16.a4 (Motor: +0.44).' },
        { move: '14.Qe2', text: 'Benzer; 14...Nd7 15.a4 ile b5’i sorgulamak (Motor: +0.36).' },
      ],
    },
    '14b': {
      text: '14...cxd5: c-piyonuyla geri alınır; c-hattı açılır.',
      amac: 'c-hattını Siyah kaleleri için açmak ve d5’te sağlam bir piyon tutmak.',
      neden: '14...exd5? Siyahın e-piyonunu da d5’e getirip yapıyı pasifleştirir ve e-hattını Beyaza verir (Motor: +1.07). 14...Rc8?? ise veziri hediye eder.',
      diger: [
        { move: '14...exd5', text: '15.Re1 Re8 16.a4 b4; e-hattı Beyazın, Siyah pasif (Motor: +1.07).' },
      ],
    },
    '15w': {
      text: '15.Bf4: fil b8-h2 çaprazına gelişir.',
      amac: 'd6 deliğine ve b8’e bakmak; filini c5/d4 zincirinin önünde aktif bir yere koymak.',
      neden: 'Bu fil Beyazın “iyi” filidir: piyonları c5 ve d4’te kara karelerde olsa da Siyahın zayıflıkları (d6, b6, f6) da kara karelerdedir. Motor 15.Rd3 ile 15.Bf4’ü eşit görüyor (+0.28).',
      diger: [
        { move: '15.Rd3', text: 'Önce kale; 15...Nc6 16.Bf4 h5 (Motor: +0.28).' },
        { move: '15.g4', text: 'Şah kanadında yer kazanmak; erken (Motor: +0.10).' },
      ],
    },
    '15b': {
      text: '15...Nc6: at gelişir; b4, d4 ve e5 karelerine bakar.',
      amac: 'Atı oyuna sokmak ve d4 piyonuna baskı yapmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.28). 15...Bf6 16.g4 ile Beyaz şah kanadında yer kazanır (+0.57); 15...h5 16.Bxb8 atı alır ve c-hattı kalesi için zaman kaybettirir.',
      diger: [
        { move: '15...Bf6', text: '16.g4 Nc6 17.h4 ile Beyaz şah kanadında genişler (Motor: +0.57).' },
        { move: '15...Nd7', text: 'At d7’den f6/b8’e; daha pasif.' },
      ],
    },
    '16w': {
      text: '16.Ne5: at merkezdeki güçlü kareye yerleşir.',
      amac: 'c6 atını değişmeye zorlamak ya da onu kovalamak; e5’ten d7, f7, c6’ya baskı.',
      neden: '16...Nxe5 17.Bxe5 olursa Beyazın fili e5’te rakipsiz bir yere yerleşir. Motor 16.Rd3’ü az farkla öne koyuyor (+0.36, maç hamlesi +0.20); fark küçük ve iki hamle de aynı planı izler.',
      diger: [
        { move: '16.Rd3', text: 'Kaleyi üçüncü yataya getirmek; 16...Rfe8 17.g4 (Motor: +0.36).' },
        { move: '16.h4', text: 'Şah kanadında yer; 16...h5 17.Ne5 (Motor: +0.14).' },
      ],
    },
    '16b': {
      text: '16...Nb8: at b8’e döner; d7 üzerinden oyuna girmeyi planlar.',
      amac: 'Atları değişmeden e5 atını sorgulamak; ileride ...Nd7 ile e5’i ve c5’i hedeflemek.',
      neden: '16...Nxe5 17.Bxe5 ile Beyazın fili e5’te çok güçlü olurdu (Motor: +0.46). 16...Rfc8? 17.Nxc6 Rxc6 18.b4 ile c5 piyonu sağlamlaşır ve Siyahın kara kareleri çöker (Motor: +0.93). Geri çekilme pasif görünse de motorun ilk tercihi (Motor: +0.21).',
      diger: [
        { move: '16...Nxe5', text: '17.Bxe5 f6 18.Bc7; fil Siyahın kampına yerleşir (Motor: +0.46).' },
        { move: '16...Na5', text: '17.b4 Nc4 18.a4 ile at c4’e gelir ama vezir kanadı açılır (Motor: +0.64).' },
      ],
    },
    '17w': {
      text: '17.Rd3: kale üçüncü yataya çıkar.',
      amac: 'Kaleyi g3 ya da h3 üzerinden şah kanadına geçirmeye hazırlamak.',
      neden: 'Merkez kapalı ve d-hattı açık değil; kale d1’de iş yapamaz. Üçüncü yatay, kalenin şah kanadına geçmesi için doğal yoldur. Motor 17.Nf3 ve 17.Ng4 ile neredeyse aynı değerlendiriyor (+0.16–0.23).',
      diger: [
        { move: '17.Nf3', text: 'Atı tekrar f3’e; 17...Nc6 18.Rd3 ile benzer (Motor: +0.20).' },
        { move: '17.Ng4', text: 'Hemen g4; 17...Nc6 18.Ne5 Nb8 ile tekrar olabilir (Motor: +0.16).' },
      ],
    },
    '17b': {
      text: '17...Rc8: kale c-hattına gelir.',
      amac: 'Açık c-hattını almak ve c5 piyonuna baskı yapmak.',
      neden: 'Doğal görünür ama c5, d4 tarafından korunduğu için c-hattı sınırlıdır. Motor 17...f6! ile e5 atını kovmayı ve şahı f7’ye getirmeyi öneriyor (Motor: +0.16, maç hamlesi +0.35).',
      diger: [
        { move: '17...f6', text: '18.Nf3 Nc6 19.Re1 Kf7; at kovulur, e5 karesi kapanır (Motor: +0.16).' },
        { move: '17...g5', text: '18.Bg3 f6 19.Nf3 Kf7; daha keskin bir kovalamaca (Motor: +0.21).' },
      ],
    },
    '18w': {
      text: '18.Re1: ikinci kale e-hattına gelir.',
      amac: 'e-hattında e6’ya baskı ve Re3 ile kaleleri üçüncü yatayda ikiye katlamak.',
      neden: 'Bütün Beyaz taşları şah kanadına ve merkeze dönüyor. Motor 18.g4 ile aynı değerlendiriyor (+0.37).',
      diger: [
        { move: '18.g4', text: '18...f6 19.Nf3 Nc6 20.Re1 ile şah kanadında yer (Motor: +0.37).' },
        { move: '18.Nf3', text: '18...Nc6 19.Ne5; tekrar hamlesi (Motor: +0.29).' },
      ],
    },
    '18b': {
      text: '18...Bf6: fil e5 atına ve d4’e baskı yapar.',
      amac: 'e5 atını değişmek ya da kovmak; fili aktif bir çapraza koymak.',
      neden: 'Aktif görünse de fil f6’da Ng4 ile saldırıya açıktır. Motor 18...Bd8! (ileride ...Bc7 ile Beyazın iyi filini değişmek) ya da 18...h6’yı öneriyor (Motor: +0.34–0.37, maç hamlesi +0.51).',
      diger: [
        { move: '18...Bd8', text: '19.g4 h6 20.Kg2 Bc7; kara kareli filler değişmeye gider (Motor: +0.37).' },
        { move: '18...h6', text: '19.g4 Bd8 20.Kg2 Bc7; aynı plan, önce şaha kaçış karesi (Motor: +0.34).' },
      ],
    },
    '19w': {
      text: '19.Ng4: at g4’e çekilir ve f6 filine saldırır.',
      amac: 'Siyahın kara kareli filini almak ya da onu kovmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.45). Nxf6+ tehdidi var: f6 fili giderse Siyahın kara kareleri savunacak taşı kalmaz ve şahın önü g-piyonuyla almak zorunda kalınca dağılır.',
      diger: [
        { move: '19.g4', text: '19...h6 20.Nf3 g5 ile şah kanadında gerilim (Motor: +0.39).' },
        { move: '19.a3', text: 'Bekleme; 19...a5 20.Ng4 Bd8 (Motor: +0.44).' },
      ],
    },
    '19b': {
      text: '19...Nc6?: at oyuna girer ama f6 fili korunmaz.',
      amac: 'b8’deki pasif atı c6’ya getirip d4’e ve b4’e baskı yapmak.',
      neden: 'Morozevich atı aktifleştirmeyi fil kaybından önemli saydı. Oysa 19...Bd8! 20.Bxb8 Raxb8 21.f4 ile fil korunur (Motor: +0.47) ve ileride ...Bc7 ile değişilebilirdi. Maç hamlesi motorda küçük bir fark (+0.52) ama oyunun yapısal kaderini belirledi.',
      diger: [
        { move: '19...Bd8', text: '20.Bxb8 Raxb8 21.f4 h5; Siyah kara kareli filini korur (Motor: +0.47).' },
        { move: '19...Be7', text: '20.Bxb8 Raxb8 21.g3; fil korunur ama b8 atı gider (Motor: +0.78).' },
      ],
    },
    '20w': {
      text: '20.Nxf6+!: at, Siyahın kara kareli filini alır.',
      amac: 'Kara karelerdeki son Siyah savunucuyu ortadan kaldırmak ve şahın önündeki piyonları dağıtmak.',
      neden: 'At ile fil değişimi normalde eşittir, ama burada Beyazın kalan fili kara karelerde rakipsiz kalır; Siyahın kalan atı onu durduramaz. 20.Be5 filleri değiştirip bütün avantajı bırakırdı (Motor: 0.00; Nxf6+ +0.57).',
      diger: [
        { move: '20.Be5', text: '20...Be7 21.Bf4; filler kalır ama Beyaz bir şey kazanmaz (Motor: 0.00).' },
        { move: '20.Be3', text: '20...Bd8 21.Bf4 Ne7; Siyah fili kurtarır (Motor: −0.10).' },
      ],
    },
    '20b': {
      text: '20...gxf6: piyonla geri alınır; şahın önü dağılır.',
      amac: 'Materyali dengelemek.',
      neden: 'Zorunlu: 20...Kh8 21.Nd7 (ya da 20...Kf8 21.Bd6+ Ne7 22.Nd7+) taş kaybettirir (Motor: +5’in üstü). Bu yüzden Siyah ikiz f-piyonları ve yalnız h7 piyonuyla kalır.',
    },
    '21w': {
      text: '21.Bg3: fil g3’e çekilir; ileride h4 ya da d6’ya gidecek.',
      amac: 'Fili ...e5 ya da ...Nb4 gibi hamlelerden korumak ve h4-f6 çaprazını hazırlamak.',
      neden: 'Motor burada 21.Ree3! Kh8 22.Rh3 Rg8 23.Rh5 ile kaleleri hemen şah kanadına getirmeyi öneriyor (Motor: +0.48); 21.Bg3 avantajı neredeyse sıfırlıyor (Motor: 0.00). Kramnik önce filin yerini güvene almayı seçti.',
      diger: [
        { move: '21.Ree3', text: '21...Kh8 22.Rh3 Rg8 23.Rh5; h7 ve f6’ya baskı (Motor: +0.48).' },
        { move: '21.g4', text: '21...Kg7 22.h4 h6 ile şah kanadında yer (Motor: +0.27).' },
      ],
    },
    '21b': {
      text: '21...Kg7: şah g7’ye gelir ve f6 piyonunu korur.',
      amac: 'Şahı savunmaya katmak ve f6’yı sağlamlaştırmak.',
      neden: 'Doğal ama şah g-hattında Rg3+ şahlarına açık kalır. Motor 21...h6! 22.Bf4 Kh7 ile dengeyi öneriyor (Motor: 0.00, maç hamlesi +0.45); h6 piyonu g5’i tutar ve şaha h7’de güvenli bir yer açar.',
      diger: [
        { move: '21...h6', text: '22.Bf4 Kh7 23.Ree3 Rg8; Siyah dengede (Motor: 0.00).' },
        { move: '21...h5', text: '22.Bd6 Kh7 23.Ree3 Rg8 (Motor: +0.39).' },
      ],
    },
    '22w': {
      text: '22.Bh4: fil h4’ten f6 piyonuna baskı yapar.',
      amac: 'f6’yı sabit bir hedef yapmak ve Siyahı pasif savunmaya zorlamak.',
      neden: 'Motorun ilk tercihi (Motor: +0.46). f6 şah tarafından korunur ama Rg3+ ile şah oradan uzaklaşırsa f6 düşer; Siyahın ...f5 ya da ...Rg8 hamleleri de taktik sorunlar doğurur.',
      diger: [
        { move: '22.Bd6', text: '22...h6 23.Ree3 Rg8 24.Rh3 (Motor: +0.20).' },
        { move: '22.Ree3', text: '22...f5 23.Bf4 Rg8 (Motor: +0.14).' },
      ],
    },
    '22b': {
      text: '22...Ne7: at e7’den g6 ve f5’e yönelir.',
      amac: 'Atı şah kanadına getirip h4 filine saldırmak ve f5’e yerleşmek.',
      neden: 'Motorun ilk tercihi (Motor: +0.57). 22...Rg8 23.Ree3 Ne7 24.Rh3 (Motor: +0.86) ve 22...f5 23.Rg3+ Kh6 24.Bg5+ (Motor: +1.11) daha kötüydü.',
      diger: [
        { move: '22...Rg8', text: '23.Ree3 Ne7 24.Rh3; kale baskısı artar (Motor: +0.86).' },
        { move: '22...f5', text: '23.Rg3+ Kh6 24.Bg5+ Kg6; şah açıkta (Motor: +1.11).' },
      ],
    },
    '23w': {
      text: '23.g4: piyon ilerler ve f5 karesini kontrol eder.',
      amac: 'Siyah atının f5 karesini almak ve ileride g-hattını açmak.',
      neden: 'Stratejik bir hamle: at f5’e gelemezse g6 ve h4’e gitmek zorunda kalır. Motor yine 23.Ree3 h5 24.Rg3+ Ng6 25.Rdf3’ü öneriyor (Motor: +0.43, g4 +0.24); g4 kendi şahını da biraz açar.',
      diger: [
        { move: '23.Ree3', text: '23...h5 24.Rg3+ Ng6 25.Rdf3; f6 baskı altında (Motor: +0.43).' },
        { move: '23.Rg3+', text: '23...Ng6 24.Rh3 Rh8 25.g4 (Motor: +0.35).' },
      ],
    },
    '23b': {
      text: '23...Ng6: at g6’ya gelir ve h4 filine saldırır.',
      amac: 'Fili kovmak ve atı h4 ya da f4 karelerine hazırlamak.',
      neden: 'Motor burada 23...h5! 24.Rf3 hxg4 25.Rf4 Nf5 ile g4 piyonunu hemen sorgulamayı öneriyor (Motor: +0.36, maç hamlesi +0.60): at f5’e yerleşir ve h-hattı Siyah kalesine açılır.',
      diger: [
        { move: '23...h5', text: '24.Rf3 hxg4 25.Rf4 Nf5; at f5’te güçlü (Motor: +0.36).' },
        { move: '23...Rg8', text: '24.Rf3 Kf8 25.h3 h5; pasif (Motor: +0.82).' },
      ],
    },
    '24w': {
      text: '24.Bg3: fil g3’e geri döner.',
      amac: 'Fili korumak ve b8-h2 çaprazından d6’ya gitmeye hazırlamak.',
      neden: 'Fil saldırı altındaydı ve 24.f4? Nxh4 bir fil kaybettirir (Motor: −3.00). 24.Rh3 e5! ile Siyahın merkezi canlanır (Motor: +0.34). Bg3 en sağlamıdır.',
      diger: [
        { move: '24.Rh3', text: '24...e5 25.Bg3 exd4; Siyah karşı oyun bulur (Motor: +0.34).' },
        { move: '24.f4?', text: '24...Nxh4 ile fil kaybedilir (Motor: −3.00).' },
      ],
    },
    '24b': {
      text: '24...a5: Siyah ...b4 ilerleyişine hazırlanır.',
      amac: 'Vezir kanadında piyon çoğunluğunu harekete geçirmek; ...b4 ile Beyazın b2/a2 piyonlarını sorgulamak.',
      neden: 'Mantıklı ama yavaş: Beyazın fili hemen d6’ya gelir. Motor 24...Ne7 25.Kh1 Rg8 ile atı f5’e götürmeyi biraz daha iyi buluyor (Motor: +0.50, maç hamlesi +0.76).',
      diger: [
        { move: '24...Ne7', text: '25.Kh1 Rg8 26.h3 h5; at yine f5’e yönelir (Motor: +0.50).' },
        { move: '24...h5', text: '25.gxh5 Ne7 26.Kh1 Nf5 (Motor: +0.78).' },
      ],
    },
    '25w': {
      text: '25.Bd6: fil Siyahın kampındaki deliğe yerleşir.',
      amac: 'c5 piyonunun koruduğu d6 karesinden e7, f8, c7, b8 karelerini kontrol etmek ve Siyahı bağlamak.',
      neden: 'd6 karesi, 11.c5’in yarattığı deliktir; fil orada Siyah atı ve kaleleri tarafından kovulamaz. Motor 25.Rf3’ü az farkla öne koyuyor (+0.92, Bd6 +0.81).',
      diger: [
        { move: '25.Rf3', text: '25...b4 26.Bd6 Ra7 27.Rh3; f6 ve h7’ye baskı (Motor: +0.92).' },
        { move: '25.Rb3', text: '25...b4 26.Bd6 h5 (Motor: +0.75).' },
      ],
    },
    '25b': {
      text: '25...h5: Siyah g4 piyonunu sorgular.',
      amac: 'h-hattını açmak ve at için h4/f4 karelerini almak.',
      neden: 'Motorun ilk tercihi (Motor: +0.84). Pasif kalmak (25...Re8 26.Rb3 ya da 25...Ra7) Beyaza rahat bir kale baskısı verirdi (+1.2).',
      diger: [
        { move: '25...Re8', text: '26.Rb3 h5 27.gxh5 Nh4 (Motor: +1.22).' },
        { move: '25...Ra7', text: '26.Rh3 Ne7 27.Bxe7 Rxe7 (Motor: +1.26).' },
      ],
    },
    '26w': {
      text: '26.gxh5: Beyaz piyonu alır; g-hattı açılır.',
      amac: 'Bir piyon kazanmak ve g-hattını kalelerine açmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.85). Şah g-hattında olduğu için açık hat Beyaz kalesine Rg3+ şahları verir. 26.h3 hxg4 27.hxg4 de eşit değerdeydi (+0.82).',
      diger: [
        { move: '26.h3', text: '26...hxg4 27.hxg4 Rh8 28.f3; piyon yapısı sağlam (Motor: +0.82).' },
        { move: '26.f3', text: '26...Ra7 27.Rb3 b4 (Motor: +0.68).' },
      ],
    },
    '26b': {
      text: '26...Nh4: at h4’e gelir ve f3, g2 karelerine bakar.',
      amac: 'Atı aktif bir kareye getirmek ve ...Nf5 ile d4’e, d6’ya saldırmak.',
      neden: 'Tek iyi hamle: at g6’da h5 piyonu tarafından saldırı altındaydı. 26...Nf8 (Motor: +3.46) ya da 26...Nh8 (Motor: +4.26) atı oyundan çıkarırdı.',
      diger: [
        { move: '26...Nf8', text: '27.Kh1 Kh8 28.Rg1; at pasif, şah açık (Motor: +3.46).' },
      ],
    },
    '27w': {
      text: '27.Rg3+: kale açık g-hattından şah çeker.',
      amac: 'Siyah şahını f6 piyonundan uzaklaştırmak ve Be7 ile f6’ya saldırmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.78); 27.Bf4 ve 27.Kf1 de neredeyse aynı (+0.70). Şah h6’ya gidince f6 artık korunmaz ve Be7 ile f6’ya saldırılabilir.',
      diger: [
        { move: '27.Bf4', text: '27...Nf5 28.Kh1 Kh7 29.Rc1 (Motor: +0.71).' },
        { move: '27.Kf1', text: '27...Nf5 28.Bf4 Kh7 (Motor: +0.70).' },
      ],
    },
    '27b': {
      text: '27...Kh6: şah h6’ya gider ve h5 piyonuna saldırır.',
      amac: 'h5 piyonunu geri kazanmak ve şahı g-hattından çıkarmak.',
      neden: 'En iyi kare (Motor: +0.74). 27...Kh7 28.Be7 Nf5 29.Bxf6 ile h5 piyonu korunur (Motor: +1.89); 27...Kh8 28.Be7 Nf5 29.Bxf6+ şahla gelir (Motor: +2.93).',
      diger: [
        { move: '27...Kh7', text: '28.Be7 Nf5 29.Bxf6; şah h5’i alamaz (Motor: +1.89).' },
        { move: '27...Kh8', text: '28.Be7 Nf5 29.Bxf6+ Kh7 (Motor: +2.93).' },
      ],
    },
    '28w': {
      text: '28.Be7: fil e7’ye gelir ve f6 piyonuna saldırır.',
      amac: 'f6’yı almak ve fili şahın dibine yerleştirmek.',
      neden: 'Motorun ilk tercihi (Motor: +0.84). 28.Bf4+ Kh7 ya da 28.Rh3 fili daha pasif bırakır (+0.47–0.49). Be7 ...Nf5 çatalına izin verir, ama Kramnik bunun 29.Bxf6 ile cevaplanabileceğini hesaplamıştı.',
      diger: [
        { move: '28.Bf4+', text: '28...Kh7 29.Kh1 Nf5 30.Rd3 (Motor: +0.47).' },
        { move: '28.Rh3', text: '28...Nf5 29.Bf4+ Kh7 30.Rd1 (Motor: +0.49).' },
      ],
    },
    '28b': {
      text: '28...Nf5: at hem g3 kalesine hem e7 filine saldırır.',
      amac: 'İki Beyaz taşına çatal yaparak materyal kazanmak.',
      neden: 'En iyi hamle (Motor: +0.86). 28...Kxh5 29.Bxf6 Nf5 30.Rg5+ (Motor: +1.64) ve 28...Rg8 29.Kh1 Nf5 30.Rxg8 (Motor: +1.27) daha kötüydü.',
      diger: [
        { move: '28...Kxh5', text: '29.Bxf6 Nf5 30.Rg5+ Kh6; şah açıkta (Motor: +1.64).' },
        { move: '28...Rg8', text: '29.Kh1 Nf5 30.Rxg8 Rxg8 (Motor: +1.27).' },
      ],
    },
    '29w': {
      text: '29.Bxf6!: kalite fedası. Fil f6 piyonunu alır, kaleyi bırakır.',
      amac: 'Fili şahın dibinde rakipsiz bir kareye yerleştirmek: d4’ü korumak, g5 ve g7’yi tutup şahı h-hattına hapsetmek.',
      neden: 'Kale ve fil aynı anda kurtarılamaz. 29.Bd6? Nxd4 sonrası d4 düşer ve Siyah üstündür (Motor: −1.28). Bxf6 ile Beyaz kale yerine fil ve bir piyon alır, kara karelerin tek hakimi olur (Motor: +0.77).',
      diger: [
        { move: '29.Bd6', text: '29...Nxd4 30.Rd3 Nf5 31.Bf4+; Siyah piyon önde (Motor: −1.28).' },
        { move: '29.a4', text: '29...Nxe7 30.axb5 Rcb8; Beyaz taş kaybeder (Motor: −2.17).' },
      ],
    },
    '29b': {
      text: '29...Nxg3: Siyah kaleyi alır.',
      amac: 'Kaliteyi kazanmak.',
      neden: 'En iyi hamle (Motor: +0.84). 29...Kxh5 30.Rg5+ ve 29...Rg8 30.Rxg8 ile Siyah kalite bile kazanamaz (+1.2–1.5).',
      diger: [
        { move: '29...Kxh5', text: '30.Rg5+ Kh6 31.Rd1 Rg8; Beyaz kaleyi korur (Motor: +1.54).' },
        { move: '29...Rg8', text: '30.Rxg8 Rxg8+ 31.Kh1 Kxh5 (Motor: +1.21).' },
      ],
    },
    '30w': {
      text: '30.fxg3: f-piyonuyla geri alınır; f-hattı açılır.',
      amac: 'f-hattını kaleye açmak (Rf1 ile f7’ye baskı) ve h-piyonunu g4-h4 yürüyüşü için tutmak.',
      neden: 'Motor: fxg3 +0.96, hxg3 +0.54. f-hattı açılınca Beyaz kalesi f6 filini arkadan korur ve f7’ye bakar. 30.Bg7+?? Kxg7 31.hxg3 ise fili hediye eder (Motor: −3.92).',
      diger: [
        { move: '30.hxg3', text: '30...Kxh5 31.Re3 b4 32.Rf3; daha az aktif (Motor: +0.54).' },
      ],
    },
    '30b': {
      text: '30...Rg8: kale g-hattına gelir.',
      amac: 'g-hattından g3 piyonuna ve Beyaz şahına baskı yapmak.',
      neden: 'Motor 30...Kxh5’i hemen almayı az farkla öne koyuyor (Motor: +0.88, maç hamlesi +1.09). 30...e5? 31.Rxe5 bir piyon daha kaybettirir, çünkü d4’ü f6 fili korur (Motor: +2.70).',
      diger: [
        { move: '30...Kxh5', text: '31.Be5 a4 32.Rf1 f5; şah aktif (Motor: +0.88).' },
        { move: '30...e5?', text: '31.Rxe5 Re8 32.g4; d4, f6 filiyle korunur (Motor: +2.70).' },
      ],
    },
    '31w': {
      text: '31.Kg2: şah g2’ye gelir ve g-hattını kapatır.',
      amac: 'Şahı ...Rg8 baskısından korumak ve ileride g3-h4’e ilerletmek.',
      neden: 'Motorun ilk tercihi (Motor: +1.15); 31.Rf1 ve 31.Be5 de aynı değerde. Oyunsonunda şah aktif bir taştır: g2’den g3’e, oradan h4/f4’e gidecek.',
      diger: [
        { move: '31.Rf1', text: '31...Ra6 32.Kg2 Kxh5 33.h3 (Motor: +1.12).' },
        { move: '31.Be5', text: '31...Ra6 32.Kg2 Kxh5 (Motor: +1.09).' },
      ],
    },
    '31b': {
      text: '31...Kxh5: Siyah h5 piyonunu alır.',
      amac: 'Materyali artırmak: Siyah artık bir kalite önde, Beyaz bir piyon önde.',
      neden: 'Motorun ilk tercihi (Motor: +1.09). Ama şah h5’te g4+ ve f6 filinin kontrolündeki karelerle sıkışık kalır.',
      diger: [
        { move: '31...b4', text: '32.h3 Kxh5 33.Rf1 Kg6 (Motor: +1.23).' },
        { move: '31...a4', text: '32.h3 Kxh5 33.Rf1 (Motor: +1.36).' },
      ],
    },
    '32w': {
      text: '32.h3: g4’ü hazırlar ve şahın g4 karesini alır.',
      amac: 'g3-g4+ ile şahı geri itmek ve piyonları ilerletmek.',
      neden: 'Plan açık ama motor önce 32.Rf1’i öneriyor (Motor: +1.14, h3 +0.80); çünkü 32...Kg6 f6 filine saldıracak ve Beyaz zaten Rf1 oynamak zorunda kalacak.',
      diger: [
        { move: '32.Rf1', text: '32...Ra6 33.h3 Kg6 34.Be5 (Motor: +1.14).' },
        { move: '32.Be5', text: '32...Rac8 33.h3 Kg6 34.Rf1 (Motor: +1.10).' },
      ],
    },
    '32b': {
      text: '32...Kg6: şah g6’ya döner ve f6 filine saldırır.',
      amac: 'Fili kovmak ya da Beyaz kalesini savunmaya bağlamak.',
      neden: 'Motorun ilk tercihi (Motor: +0.74). 32...Ra6 33.g4+ Kg6 34.g5 ile Beyaz piyonları hızla ilerler (Motor: +1.57).',
      diger: [
        { move: '32...a4', text: '33.Rf1 Kg6 34.g4 e5 (Motor: +1.34).' },
        { move: '32...Ra6', text: '33.g4+ Kg6 34.g5 Re8 (Motor: +1.57).' },
      ],
    },
    '33w': {
      text: '33.Rf1: kale f-hattına gelir ve f6 filini korur.',
      amac: 'Fili f6’da tutmak ve f-hattında f7’ye baskı yapmak.',
      neden: 'Fil f6’dan çekilirse (33.Be5 ya da 33.Be7) şah kapandan çıkar ve avantaj neredeyse kaybolur (Motor: +0.20). Rf1 ile fil yerinde kalır (Motor: +0.78).',
      diger: [
        { move: '33.Be5', text: '33...f6 34.Bd6 Rge8; şah serbest kalır (Motor: +0.20).' },
        { move: '33.Be7', text: '33...Rge8 34.Bd6 f6 (Motor: +0.21).' },
      ],
    },
    '33b': {
      text: '33...Kh7?: şah h7’ye çekilir.',
      amac: 'Şahı g4+ ve g5 tehditlerinden uzaklaştırmak.',
      neden: 'Pasif bir hamle: şah köşeye kapanır ve Beyazın piyon yürüyüşü hızlanır. 33...e5! 34.g4 e4 35.Rf5 ile Siyah merkez piyonlarını yürütüp kalelerine hat açabilirdi (Motor: +0.78). Maç hamlesinden sonra Motor: +2.46.',
      diger: [
        { move: '33...e5', text: '34.g4 e4 35.Rf5 Rae8; Siyah merkezde karşı oyun bulur (Motor: +0.78).' },
        { move: '33...Ra6', text: '34.Be5 f5 35.Kf3 Rc8; fil kovulur (Motor: +1.17).' },
      ],
    },
    '34w': {
      text: '34.g4!: g-piyonu ilerler.',
      amac: 'g5 ve h4-h5 ile şah kanadı piyonlarını yürütmek; Siyah şahını tamamen kapatmak.',
      neden: 'Motorun ilk tercihi (Motor: +2.17). Şah h7’ye çekildiği için g4 artık şah tehdidi almaz. 34.Be5 ya da 34.Kf3 daha yavaştır (+1.5–1.7).',
      diger: [
        { move: '34.Be5', text: '34...Ra7 35.h4 Kh6 (Motor: +1.66).' },
        { move: '34.Kf3', text: '34...Rg6 35.Kg2 b4 36.g4 (Motor: +1.51).' },
      ],
    },
    '34b': {
      text: '34...b4: Siyah b-piyonuyla karşı oyun arar.',
      amac: '...b3 ile b-hattını açmak ve kalelere oyun bulmak.',
      neden: 'Motor 34...Ra6! 35.Kg3 e5 36.Bxe5 Kg6 ile f6 filine baskıyı daha dirençli buluyor (Motor: +2.46, maç hamlesi +3.30). Vezir kanadındaki piyon hamleleri Beyazın a3 cevabıyla kolayca durdurulur.',
      diger: [
        { move: '34...Ra6', text: '35.Kg3 e5 36.Bxe5 Kg6; filin yeri değişir (Motor: +2.46).' },
        { move: '34...Rg6', text: '35.Kg3 Rag8 36.Rf4 Rh6 (Motor: +3.00).' },
      ],
    },
    '35w': {
      text: '35.Kg3: şah piyonları desteklemek için ilerler.',
      amac: 'Şahı h4 ya da f4’e getirmek ve g5/h5 ilerleyişlerini desteklemek.',
      neden: 'Motorun ilk tercihi (Motor: +3.27). 35.Kf3 şahı merkeze götürür ama piyonlardan uzaklaştırır (+2.22); 35.g5? b3 36.a3 e5 ile erken (+1.73).',
      diger: [
        { move: '35.Kf3', text: '35...Kg6 36.Ke3 a4 (Motor: +2.22).' },
        { move: '35.g5', text: '35...b3 36.a3 e5 37.h4; piyon erken ilerler (Motor: +1.73).' },
      ],
    },
    '35b': {
      text: '35...b3: piyon b3’e ilerler.',
      amac: 'Beyazın a-piyonunu sorgulamak ve b-hattını açmaya çalışmak.',
      neden: 'Motor 35...Rge8 ve 35...Ra6’yı aynı değerlendiriyor (+3.2). Siyahın iyi bir planı kalmamıştır; b3 en azından Beyaza bir karar verdirir.',
      diger: [
        { move: '35...Rge8', text: '36.h4 Ra6 37.g5 e5 (Motor: +3.22).' },
        { move: '35...Ra6', text: '36.h4 Re8 37.h5 e5 (Motor: +3.25).' },
      ],
    },
    '36w': {
      text: '36.a3!: b3 piyonu sabitlenir ve vezir kanadı kapanır.',
      amac: 'Siyah kalelerine b-hattını açmamak.',
      neden: '36.axb3? Rgb8 37.Rf3 a4 ile b-hattı Siyaha açılır (Motor: +2.18). 36.a3 ile b3 piyonu ileride b2’ye karşı hareketsiz kalır (Motor: +3.47).',
      diger: [
        { move: '36.axb3', text: '36...Rgb8 37.Rf3 a4 38.bxa4; b-hattı açılır (Motor: +2.18).' },
        { move: '36.a4', text: '36...Ra7 37.h4 Rb8 (Motor: +2.75).' },
      ],
    },
    '36b': {
      text: '36...Rac8: kale c-hattına gelir.',
      amac: 'c5 piyonuna baskı yapmak ve kaleye yeni bir hat bulmak.',
      neden: 'c5, d4 tarafından korunduğu için baskı boşa çıkar. Motor 36...Ra7 37.h4 e5 ile ...e5 kırılmasını hazırlamayı öneriyor (Motor: +3.58, maç hamlesi +4.00).',
      diger: [
        { move: '36...Ra7', text: '37.h4 e5 38.Bxe5 Rg6 (Motor: +3.58).' },
        { move: '36...Rge8', text: '37.h4 Ra7 38.h5 e5 (Motor: +3.71).' },
      ],
    },
    '37w': {
      text: '37.h4: h-piyonu ilerler.',
      amac: 'h5 ve g5 ile piyonları yürütüp Siyah şahını boğmak.',
      neden: 'Motorun ilk tercihi (Motor: +4.22). 37.Kf4 ya da 37.a4 daha yavaştır (+2.5–2.8). Piyonlar ilerledikçe Siyah kalelerinin g- ve h-hatlarındaki kareleri daralır.',
      diger: [
        { move: '37.Kf4', text: '37...Kg6 38.Ke5 Rc6 39.h4 (Motor: +2.83).' },
        { move: '37.a4', text: '37...Rgf8 38.h4 Rb8 (Motor: +2.53).' },
      ],
    },
    '37b': {
      text: '37...Rg6?: kale g6’ya gelir ve f6 filine saldırır.',
      amac: 'f6 filini kalite iadesiyle ortadan kaldırmak ya da onu kovmak.',
      neden: 'Kale g6’da h5 piyonuna açık kalır. Motor 37...Ra8 ya da 37...Rge8’i öneriyor (+4.3, maç hamlesi +4.61); Siyah yine kaybediyordu ama kale tuzağa düşmezdi.',
      diger: [
        { move: '37...Ra8', text: '38.h5 Rae8 39.Kh4 Rg7 (Motor: +4.31).' },
        { move: '37...Rge8', text: '38.h5 e5 39.Bxe5 Kg8 (Motor: +4.36).' },
      ],
    },
    '38w': {
      text: '38.h5!: g6 kalesine saldırılır.',
      amac: 'Kaleyi tuzağa düşürmek: 38...Rh6 39.Bg5 ile kale fil karşılığında kazanılır.',
      neden: 'Kalenin güvenli karesi yoktur: 38...Rh6 39.Bg5 Rc7 40.Bxh6 Kxh6 sonrası Beyaz bir kale ve iki bağlı geçer piyonla kalır (Motor: +3.96); 38...Rxf6 39.Rxf6 ya da 38...Rg7 39.Bxg7 de kayıptır (+4.55). Motor 38.g5’i de çok güçlü buluyor (+4.81). Morozevich terk etti.',
      diger: [
        { move: '38.g5', text: '38...e5 39.Bxe5 Re6 40.Rxf7+; aynı derecede kazanır (Motor: +4.81).' },
        { move: '38.Be5', text: '38...f5 39.g5 Rgg8 (Motor: +4.17).' },
      ],
    },
  },
  sources: [
    { title: 'The Week in Chess 349 (Dortmund 2001, 4. tur ve sıralama)', url: 'https://theweekinchess.com/html/twic349.html' },
    { title: 'ChessBase (ES): Noticias de Dortmund', url: 'https://es.chessbase.com/post/noticias-de-dortmund' },
    { title: 'ChessBase (ES): Kramnik gana en Dortmund una vez más', url: 'https://es.chessbase.com/post/kramnik-gana-en-dortmund-una-vez-ms' },
    { title: 'Wikipedia: Dortmund Sparkassen Chess Meeting', url: 'https://en.wikipedia.org/wiki/Dortmund_Sparkassen_Chess_Meeting' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  exercises: [
    { id: 'kmo-1', kind: 'tekrar', plan: true, title: 'Kara kareli fili almak',
      source: 'Kramnik – Morozevich, Dortmund 2001 (20. hamle)',
      fen: 'r1r3k1/5ppp/p1n1pb2/1pPp4/3P1BN1/3R4/PP3PPP/4R1K1 w - - 10 20',
      prompt: 'Siyahın piyonları beyaz karelerde, kara kareli fili f6’da. Beyazın atı g4’te. Kramnik’in planı neydi?',
      hint: 'Siyahın kara kareleri savunan tek taşı hangisi?',
      line: ['Nxf6+'],
      explanation: '**20.Nxf6+! gxf6** At, Siyahın kara kareli filini alır ve şahın önündeki piyonlar dağılır. Artık Beyazın fili kara karelerde rakipsizdir. Bu bir plan hamlesidir; fark çok büyük değil: Motor: Nxf6+ +0.5, sonraki en iyi 20.Be5 0.0.',
      link: 'Kara karelerdeki son savunucuyu almak, Beyaz filinin ileride d6 ve f6’ya yerleşmesini sağladı.' },
    { id: 'kmo-2', kind: 'tekrar', plan: false, title: 'Kale yerine f6 fili',
      source: 'Kramnik – Morozevich, Dortmund 2001 (29. hamle)',
      fen: 'r1r5/4Bp2/4pp1k/ppPp1n1P/3P4/6R1/PP3P1P/4R1K1 w - - 5 29',
      prompt: 'Siyahın f5 atı hem g3 kalesine hem e7 filine saldırıyor. İkisini birden kurtarmak mümkün değil. Beyaz ne yapmalı?',
      hint: 'Fil, d4 piyonunu korurken Siyah şahını da kapatabileceği bir kareye gidebilir.',
      line: ['Bxf6', 'Nxg3', 'fxg3'],
      accept: { 2: ['hxg3'] },
      explanation: '**29.Bxf6! Nxg3 30.fxg3** Beyaz kaliteyi verir ama fil f6’ya yerleşir: d4’ü korur ve h6’daki şahı kapatır. 29.Bd6? Nxd4 sonrası Siyah üstündür. Motor: Bxf6 +0.8, sonraki en iyi 29.Bd6 −1.3. 30.hxg3 de kabul edilir (fxg3 +0.8, hxg3 +0.6).',
      link: 'Rakipsiz kara kareli fil, bir kaleden daha değerli hale geldi.' },
    { id: 'kmo-3', kind: 'transfer', plan: false, title: 'f6 filini almak',
      source: 'Khismatullin – Dreev, Avrupa Kulüpler Kupası, Eilat 2012 (23. hamle)',
      fen: '3rr1k1/qb3pp1/2p1pb1p/p1P5/6N1/1P1B4/P3QPPP/2R1R1K1 w - - 0 23',
      prompt: 'Yine bir Slav: Beyazın c5 piyonu vezir kanadını kilitliyor, atı g4’te. Siyahın kara kareli fili f6’da şahı savunuyor. Hamle sizde.',
      hint: 'Kramnik’in 20. hamlesini hatırlayın.',
      line: ['Nxf6+'],
      explanation: '**23.Nxf6+! gxf6** At, şahı savunan kara kareli fili alır ve piyonlar dağılır; ardından vezir g4 veya e3 üzerinden h6’ya gelir. Motor: Nxf6+ +3.1, sonraki en iyi 23.Qe4 +2.3.',
      link: 'Kramnik aynı atla aynı fili alıp oyun sonunda kara karelere hakim oldu; Khismatullin ise aynı hamleyle doğrudan şaha saldırdı.' },
    { id: 'kmo-4', kind: 'transfer', plan: false, title: 'c5 kilidi',
      source: 'Aronian – Carlsen, Norway Chess, Stavanger 2017 (13. hamle)',
      fen: 'r1br2k1/1p1n1ppp/p1p1pn2/3p4/2PP4/qPN1PN2/2BB1PPP/3Q1RK1 w - - 0 13',
      prompt: 'Siyah a3’te kaleyi aldı ve kalite önde. Vezir a3’te, Beyazın c4 piyonu baskı altında. Beyaz nasıl devam etmeli?',
      hint: 'Kramnik ...b5’e karşı hangi piyon hamlesini oynamıştı?',
      line: ['c5'],
      explanation: '**13.c5!** Vezir kanadı kilitlenir: c4 piyonu ...dxc4’ten kurtulur ve a3 veziri oyunun dışında kalır. 13...Qa5? 14.Nxd5! (+3.2). Motor: c5 +0.8, sonraki en iyi 13.b4 −0.8.',
      link: 'Kramnik c5 ile vezir kanadını kilitledi ve Siyahın piyon kırılmalarını önledi; Aronian aynı hamleyle kalite karşılığında Siyah vezirini dışarıda bıraktı.' },
  ],
};
