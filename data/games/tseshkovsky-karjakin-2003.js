// Tseshkovsky – Karjakin, Hastings Premier, Hastings 2003 (8. tur). Kaynak: PgnMentor (Karjakin.pgn).
export default {
  id: 'tseshkovsky-karjakin-2003',
  theme: 'Uzun çaprazda e4 baskısı ve zayıflamış g3’e ...Nxg3',
  white: 'Vitaly Tseshkovsky', black: 'Sergey Karjakin',
  whiteShort: 'Tseshkovsky', blackShort: 'Karjakin',
  event: 'Hastings Premier turnuvası', site: 'Hastings', year: 2003, eco: 'B23',
  variation: 'Sicilya Savunması, 2.Nc3 a6 3.g3 b5 (g3-Bg2 kuruluşu)', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 a6 3. g3 b5 4. Bg2 Bb7 5. Nge2 e6 6. O-O Be7 7. a3 d6 8. d4 cxd4 9. Nxd4 Nd7 10. a4 b4 11. Na2 a5 12. c3 bxc3 13. Nxc3 Nc5 14. Be3 Nf6 15. Ndb5 Ncxe4 16. Nxe4 Bxe4 17. Bxe4 Nxe4 18. Qg4 Ng5 19. h4 h5 20. Qe2 Nh7 21. Qxh5 O-O 22. Rac1 Nf6 23. Qf3 Nd5 24. Bd4 Rc8 25. h5 f5 26. Rce1 Qd7 27. Re2 Nf6 28. Qb3 d5 29. h6 g6 30. Qe3 Ne4 31. h7+ Kxh7 32. Kg2 Bf6 33. Rh1+ Kg8 34. Bxf6 Rxf6 35. f3 Nxg3 36. Qe5 Nxe2 37. Qxf6 Nf4+ 38. Kf2 Qg7 39. Qxg7+ Kxg7 40. Ke3 e5 41. Kd2 d4 0-1`,

  summary: 'Sonuç 0-1: **Sergey Karjakin (Siyah) kazandı.** Oyun, 78. Hastings Premier turnuvasının (28 Aralık 2002 – 5 Ocak 2003) 8. turunda oynandı; o sırada 12 yaşında olan Karjakin, 1978’de Tal ile birlikte ve 1986’da tek başına SSCB şampiyonu olmuş 58 yaşındaki Tseshkovsky’yi yendi. Siyah ...a6, ...b5, ...Bb7 ve ...e6 ile Sicilya’nın “kirpi + uzun çapraz” yapısını kurdu. Beyaz 8.d4 ile oyunu açınca Karjakin ...b5-b4 ile c3 atını a2’ye kovdu, atlarını c5 ve f6’ya getirdi ve e4 piyonuna üç taşla saldırdı: **15...Ncxe4** ile piyon düştü. Tseshkovsky piyonu Qg4, h4 ve Qxh5 ile geri aldı, sonra h-piyonunu h7’ye kadar sürdü; Siyah bu saldırıya ...f5, ...Qd7, ...d5 ve ...g6 ile sakin ve doğru cevaplar verdi, 31...Kxh7 ile de piyonu alıp bir piyon öne geçti. Motor pozisyonu 34. hamlede tam eşit (0.00) görüyordu; ama **35.f3?** g3 piyonunun tek piyon savunucusunu kaldırdı. **35...Nxg3!** (36.Kxg3 f4+!), 36...Nxe2 ve ara şah **37...Nf4+!** ile Karjakin vezirleri değişip iki piyon fazlalı bir at-kale oyun sonuna geçti; 41...d4 sonrası Beyaz pes etti (Motor: −4.2).',
  intro: 'Bu oyun 1.e4 c5 2.Nc3 a6 3.g3 b5 4.Bg2 Bb7 5.Nge2 e6 sırasıyla başladı; modülün 2.Nc3 e6 3.g3 a6 sırası değil, ama 5...e6 ile aynı yapıya ulaşıldı: Beyazda Nc3, g3, Bg2 ve Nge2, Siyahta ...e6, ...a6, ...b5 ve ...Bb7. 2...a6’lı hamle sırasının bir inceliği vardır: Siyah ...Nc6 ya da ...d6 ile kendini bağlamadan önce vezir kanadında alan alır ve b7 filini Beyazın g2 filine karşı uzun çapraza yerleştirir. Klasik Kapalı Sicilya’da Beyaz d3, f4 ve f5 ile şah kanadına yüklenir, Siyah da ...b5-b4 ile vezir kanadında karşı oyun arar. Tseshkovsky bunun yerine 8.d4 ile merkezi açtı ve oyun açık Sicilya’nın “Paulsen/Kan” yapılarına benzedi; ama Beyazın atı c3’te kaldığı ve fili g2’de durduğu için **e4 piyonu** Siyahın tüm saldırılarının hedefi oldu. Oyun üç aşamada izlenebilir: (1) açılışta Siyahın e4’e baskısı ve 15...Ncxe4, (2) Beyazın h-piyonu saldırısına karşı Siyahın merkez kurması (...f5, ...d5, ...Ne4), (3) 35.f3? hatasından sonra kısa ve kesin bir taktik dizi. Aynı 2.Nc3 a6 3.g3 b5 4.Bg2 Bb7 sırası bu modüldeki Narciso Dublan – Morozevich (Barselona 2015) maçında da görülür.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '7.a3 ve 10.a4 ile Siyahın b5 piyonunu sorgulamak; vezir kanadında Siyahın kazandığı alanı geri almak ve a-hattını açmayı denemek.',
      '8.d4 ile merkezi açıp Kapalı Sicilya’dan açık Sicilya’ya geçmek: Nd4 atı hem b5’e hem e6’ya bakar, d6 piyonu da Ndb5 ile hedef olur.',
      'Piyon kaybından sonra taşları aktif tutmak: 18.Qg4 ile g7’ye ve e4 atına baskı, 19.h4 ile atı kovalamak, 21.Qxh5 ile materyali eşitlemek.',
      'h-piyonunu h5-h6-h7’ye sürüp Siyahın şah önünü açmak; sonra Kg2 ve Rh1 ile h-hattında kale oyunu kurmak.',
      'Kaleleri e-hattına getirip (26.Rce1, 27.Re2) zayıf e6 piyonuna baskı yapmak; Qb3 ve Qe3 ile bu baskıyı vezirle desteklemek.',
      'Siyahın e4 atını kovmak için f3 oynamak istemek — ama bu, g3 piyonunu savunan tek piyonu ilerletmek demekti. 35.Qd4 ile önce pozisyonu sağlamlaştırmak gerekiyordu.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...a6, ...b5 ve ...Bb7 ile vezir kanadında alan almak ve **uzun çaprazdan e4’e** baskı kurmak; ...e6 ve ...d6 ile merkezde sağlam bir “kirpi” kurmak.',
      '...b4 ile c3 atını kovup e4’ün savunucusunu azaltmak; ...Nd7-c5 ve ...Nf6 ile e4’e üçüncü kez saldırmak ve piyonu kazanmak.',
      'Beyazın Qg4-h4 karşı oyununa ...h5 ve ...Nh7 ile dayanmak; materyali geri verse de rok yapıp şahı güvene almak.',
      '...f5 ve ...d5 ile e4 karesini bir ileri karakol yapmak ve atı oraya yerleştirmek; at e4’ten g3, f2, d2 ve c3 karelerine bakar.',
      'Beyazın h-piyonu ilerleyişine sakin karşılık vermek: ...Qd7 ile e6’yı korumak, ...g6 ile şah önünü kapalı tutmak, 31...Kxh7 ile piyonu alıp ...Bf6 ile d4 filini değiştirmek.',
      'f-piyonu ilerleyince zayıflayan **g3’e** saldırmak; taktiğin sonunda ara şahla (37...Nf4+) tehditleri karşılayıp vezirleri değişerek iki piyon fazlalı oyun sonuna geçmek.',
    ] },
  },
  critical: [
    { move: '10b', title: '...b4: c3 atını kovmak', text: 'Beyaz 10.a4 ile b5 piyonuna saldırdı. Siyah 10...bxa4 ile piyon yapısını bozmak yerine 10...b4 ile ilerledi: at c3’ten a2’ye çekilmek zorunda kaldı ve e4 piyonunun en önemli savunucusu bir süreliğine oyundan çıktı. Motor 10...b4 (+0.7) ile 10...bxa4’ü (+0.7) eşit görüyor; ama 10...Qc8? 11.axb5 ile bir piyon kaybettirir (+1.2). Bu hamle, Siyahın bütün oyununu (e4’e baskı) başlatan hamledir.' },
    { move: '14w', title: '14.Be3: Beyazın kaçırdığı fırsat', text: 'Beyaz gelişimini tamamlamak için doğal 14.Be3’ü seçti, ama bu Siyaha 14...Nf6 ile e4’e üçüncü kez saldırma zamanı verdi. Motor 14.Ndb5’i (+0.9) ve 14.Nb3’ü (+0.8) daha iyi buluyor: ikisinde de Beyaz önce Siyahın c5 atını ya da d6 piyonunu sorgular, sonra e5 ile b7 filinin çaprazını kapatır ve filleri değişir. 14.Be3 sonrası değerlendirme +0.5’e iner ve e4 sorunu çözülmez.' },
    { move: '15b', title: '...Ncxe4: uzun çaprazın ödülü', text: 'e4 piyonuna c5 atı, f6 atı ve b7 fili saldırıyordu; Beyaz onu yalnızca c3 atı ve g2 fili ile savunabiliyordu. Siyah piyonu alır; 16.Nxe4 Bxe4 17.Bxe4 Nxe4 sonrası bir piyon fazlası vardır. Bu sırada önemli bir incelik var: 16...Bxe4! (16...Nxe4? değil). Fil e4’e gelince Beyaz g2 filini değişmek zorunda kalır; 16...Nxe4? 17.Bxe4 Bxe4 18.Qd4 ile vezir hem e4 filine hem g7’ye saldırır (Motor: +2.2).' },
    { move: '20b', title: '...Nh7: piyonu geri vermek, şahı kurtarmak', text: 'Beyaz 18.Qg4 ve 19.h4 ile g5 atını kovaladı; 19...h5 atı tuttu ama h5 piyonu zayıf kaldı. 20...O-O?? 21.hxg5 ile taş kaybettirirdi (+3.8). Karjakin 20...Nh7 ile atı geri çekti ve h5 piyonunu bilerek bıraktı: 21.Qxh5 O-O sonrası materyal eşit, ama Siyahın şahı güvende ve taşları sağlam. Motor 20...Ne4’ü (+0.6) neredeyse aynı buluyor.' },
    { move: '26b', title: '...Qd7: e6’yı tutan tek hamle', text: '25...f5 e6 piyonunu zayıflattı ve Beyaz 26.Rce1 ile oraya yüklendi. Motor 26...Qd7’yi tek iyi hamle olarak görüyor (−0.1): 26...Nf6? ya da 26...Nc7? 27.Rxe6 ile Beyaz piyonu alır ve Siyahın şahı açılır (+3.5 dolayında). Genç Karjakin burada tehdidi doğru okudu; bu, sonraki ...Nf6-...d5-...Ne4 planının ön koşuluydu.' },
    { move: '31b', title: '...Kxh7: piyonu almak', text: 'Beyazın h-piyonu h7’ye kadar geldi. Motor tek iyi yanıtın 31...Kxh7 olduğunu söylüyor (+0.3); 31...Kf7 bir piyonu almadan şahı merkeze yürütür ve 32.Kg2 sonrası h7 piyonu Siyahın kalelerini bağlar (+1.8 ile +2.2 arası). Kxh7 sonrası Siyah bir piyon fazladır; Beyazın tazminatı Kg2 ve Rh1+ ile açılan h-hattıdır.' },
    { move: '35w', title: '35.f3? g3 savunmasız kalıyor', text: 'Beyaz e4 atını kovmak istedi, ama f2 piyonu g3’ü koruyan tek piyondu. Motor 35.Qd4’ü öneriyor (0.00): vezir merkezde f6 kalesine ve a7’ye bakar, Beyaz bir piyon eksik olsa da aktif taşlarıyla dengeyi tutar. Maç hamlesinden sonra değerlendirme −2.3’e, birkaç hamle sonra −3.5’e düşer. Hata, bir “doğal” hamlenin hangi kareyi savunmasız bıraktığını sormamaktan doğdu.' },
    { move: '37b', title: '...Nf4+! ara şah', text: '35...Nxg3! 36.Qe5 Nxe2 37.Qxf6 sonrası Beyaz f6 kalesini aldı ve Qxe6+ ile Qxg6+ tehdit ediyor. 37...Nf4+ şahla birlikte e6 ve g6 karelerini korur (Motor: −3.7); 37...Qg7?? ise 38.Qxe6+ ile c8 kalesini de kaybettirir (+5.8). 38.Kf2 Qg7! ile vezirler değişir ve Siyah iki piyon fazlasıyla at-kale oyun sonuna geçer. 38.Kg3 de 38...Nh5+! 39.Rxh5 gxh5 ile kaybeder (−3.9).' },
  ],
  lessons: [
    'Bu yapıda Siyahın ...b5-b4 hamlesi c3 atını kovar ve e4 piyonunun savunmasını zayıflatır. Beyaz a3-a4 ile b5’i sorgularsa, ...b4 çoğu zaman en etkili cevaptır.',
    'b7 fili uzun çaprazda durduğu sürece e4’e yapılan her ek saldırı (...Nc5, ...Nf6) bir taktik fırsatı yaratabilir. Saldıran ve savunan taşları tek tek saymak (3’e 2) piyonu kazanıp kazanamayacağınızı söyler.',
    'Alma sırası önemlidir: 16...Bxe4! Beyazın g2 filini değişmeye zorladı; 16...Nxe4? ise fili e4’te havada bırakıp 18.Qd4 çatalına izin verirdi.',
    'Kazanılmış bir piyonu geri vermek bazen en sağlam yoldur: 20...Nh7 ile Karjakin h5’i bıraktı ama şahını güvene aldı ve taşlarını koordine etti.',
    '...d5 ve ...f5 piyonlarıyla desteklenen e4 karesi, Siyahın atı için güçlü bir merkez karesidir: at buradan g3, f2, d2 ve c3’e bakar ve rakibin piyon hamlelerini cezalandırmaya hazırdır.',
    'Kenar piyonuyla saldırı (h4-h5-h6-h7) şahın önünü de açar. Bir piyon hamlesi yapmadan önce “bu piyon hangi kareyi koruyordu?” diye sorun: 35.f3? g3’ün son savunucusunu kaldırdı.',
    'Bir taşın alındığı karmaşık durumlarda önce ara şahı arayın: 37...Nf4+ hem şah çekti hem de e6 ile g6 karelerini korudu; sonra vezir değişimi kazanılmış bir oyun sonu getirdi.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 0-1: Sergey Karjakin (Siyah) kazandı. 35.f3? hatasından sonra 35...Nxg3! 36.Qe5 Nxe2 37.Qxf6 Nf4+ 38.Kf2 Qg7 39.Qxg7+ Kxg7 ile Siyah iki piyon fazlalı bir at-kale oyun sonuna geçti. 40.Ke3 e5 41.Kd2 d4 sonrası Siyahın bağlantılı merkez piyonları yürümeye başladı ve Beyaz pes etti (Motor: −4.2). Oyun 78. Hastings Premier’in 8. turunda oynandı; Karjakin turnuvayı 5 puanla 4.–5. sırada bitirdi, Tseshkovsky ise 2 puanla sonuncu oldu.' },
    { q: 'Siyah neden 2...a6 ve 3...b5 ile başladı, klasik 2...Nc6 ve ...g6 yerine?', a: 'Klasik Kapalı Sicilya’da (2...Nc6 3.g3 g6 4.Bg2 Bg7 5.d3) Beyaz f4-f5 ile şah kanadında rahatça saldırır. ...a6 ve ...b5 ile Siyah vezir kanadında hemen alan alır, ...b4 ile c3 atını kovma tehdidini masaya koyar ve fili b7’den g2 filine karşı uzun çapraza yerleştirir. Böylece e4 piyonu daha ilk hamlelerden bir hedef olur. Motor bunu klasik hamlelerle aynı düzeyde görüyor (3...b5 +0.4, 3...d6 +0.2).' },
    { q: 'Beyaz neden 8.d4 ile merkezi açtı, Kapalı Sicilya’daki gibi d3 oynamadı?', a: 'Siyah henüz rok yapmamıştı ve ...Nf6 ile ...Nc6 oynamamıştı; Tseshkovsky gelişim avantajını kullanmak için oyunu açmak istedi. Motor da 8.d4’ü en iyi hamle olarak görüyor (+0.6), 8.f4 ise yalnızca +0.1. Ama oyun açılınca e4 piyonu artık d3 ile korunmuyordu; bu, sonraki ...b4, ...Nc5 ve ...Nf6 hamleleriyle Siyahın hedefi oldu.' },
    { q: 'Siyah e4 piyonunu nasıl kazandı?', a: '10...b4 ile c3 atı a2’ye kovuldu, 13.Nxc3 ile geri gelse de Siyah zaman kazanmıştı. 13...Nc5 ve 14...Nf6 ile e4’e üç taş (c5 atı, f6 atı, b7 fili) saldırdı, Beyaz ise yalnızca iki taşla (c3 atı, g2 fili) savunabiliyordu. 15.Ndb5 piyonu savunmak yerine d6’ya saldırdı ve 15...Ncxe4 16.Nxe4 Bxe4 17.Bxe4 Nxe4 ile piyon düştü. Motor Beyazın 14.Ndb5 ya da 14.Nb3 ile bu baskıyı önceden kırabileceğini söylüyor (+0.8/+0.9).' },
    { q: 'Siyah piyon kazandıktan sonra neden bir süre sıkıntı çekti?', a: 'Siyahın şahı hâlâ e8’deydi ve 18.Qg4 hem e4 atına hem g7’ye saldırdı. 18...Ng5 19.h4 h5 sonrası at g5’te kırılgan duruyordu; 20...O-O?? 21.hxg5 ile taş kaybettirirdi (+3.8). Karjakin 20...Nh7 ile piyonu geri verip rok yaptı; 21.Qxh5 O-O sonrası materyal eşit ve oyun dengeli (+0.4).' },
    { q: 'Beyazın h-piyonu saldırısı neden işe yaramadı?', a: 'Siyah her adımda doğru cevabı buldu: 25.h5’e 25...f5 ile merkez kurdu, 26.Rce1’e 26...Qd7 ile e6’yı korudu, 29.h6’ya 29...g6 ile şah önünü kapalı tuttu ve 31.h7+’ya 31...Kxh7 ile piyonu aldı. Sonunda Beyaz bir piyon eksikti; tazminatı yalnızca açık h-hattıydı ve 32...Bf6 ile filler değişince bu da azaldı. Motor 34. hamlede pozisyonu tam eşit (0.00) görüyordu, yani saldırı ne kazandırdı ne de kaybettirdi.' },
    { q: '35.f3 neden hata, Beyaz ne oynamalıydı?', a: 'f2 piyonu g3’ü koruyan tek piyondu; f3 sonrası g3’ü yalnızca g2 şahı korudu. 35...Nxg3! sonrası 36.Kxg3 f4+! şaha şah çekerek e3 vezirine saldırır (Motor: −4.4), at g3’te de e2 ve h1 kalelerine bakar. Motor 35.Qd4’ü öneriyor (0.00): vezir merkezde durur, f6 kalesine ve g7’ye bakar ve f3’ü daha sonra, at kovulabilecek bir anda oynamaya saklar.' },
    { q: 'Siyah 37. hamlede neden 37...Qg7 değil, önce 37...Nf4+ oynadı?', a: '37.Qxf6 sonrası Beyazın veziri e6 ve g6 piyonlarına saldırıyordu. 37...Qg7?? 38.Qxe6+ ile Beyaz bir piyonu şahla alır, sonra c8 kalesini de vurur (Motor: +5.8). 37...Nf4+ ile at şah çekerek e6 ve g6’yı korur; şah kaçtıktan sonra 38...Qg7 ile vezir değişimi sorunsuz gelir. Bu ara şah, kombinasyonun kazanç getiren son halkasıdır.' },
    { q: 'Oyun sonu neden Siyah için kazanılmış?', a: '39...Kxg7 sonrası iki tarafta da bir kale ve bir at var, ama Siyahın beş piyonuna (a5, d5, e6/e5, f5, g6) karşı Beyazın üç piyonu (a4, b2, f3) kaldı. Siyahın merkezde bağlantılı d ve e piyonları var, f4 atı da Beyazın piyonlarına baskı yapıyor. Motor −4.1 ile −4.5 arasında bir değerlendirme veriyor; 40...e5 ve 41...d4 ile piyonlar ilerlemeye başlayınca Beyazın savunacak bir şeyi kalmadı.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: şah piyonu iki kare ilerler, d5 ve f5 karelerini kontrol eder, f1 filine ve vezire yol açar.',
      amac: 'Merkezde yer kaplamak ve hızlı gelişmek. Tseshkovsky beyazla hemen her zaman 1.e4 oynayan bir oyuncuydu.',
      neden: 'Sicilya’ya karşı bu oyunda Beyaz klasik açık Sicilya (2.Nf3 ve 3.d4) yerine önce Kapalı Sicilya kuruluşunu seçecek; 1.e4 her iki yolu da açık tutar.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışı; bu modülün konusu dışında kalır. Motor: +0.2.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; 1...c5 2.e4 ile aynı Sicilya’ya da dönebilir. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah c-piyonuyla d4 karesini kontrol eder ve simetrik olmayan bir mücadele seçer.',
      amac: 'Beyaz d4 oynarsa c-piyonunu merkez piyonuyla değişip yarı açık c-hattı ve merkezde fazladan bir piyon kazanmak.',
      neden: 'Karjakin gençliğinde de Sicilya ile kazanmak için oynayan bir oyuncuydu; 1...e5’e göre daha dengesiz ve kazanma şansı yüksek pozisyonlar doğurur.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; daha simetrik bir mücadele. Motor: +0.2.' },
        { move: '1...e6', text: 'Fransız Savunması; ...d5 ile merkezde hemen karşılık verir. Motor: +0.35.' },
      ],
    },
    '2w': {
      text: '2.Nc3: at gelişir ve e4 piyonunu savunur; Beyaz henüz Nf3 ve d4’ü oynamaz.',
      amac: 'Kapalı Sicilya’ya ya da Grand Prix (f4) sistemlerine yönelmek; isterse sonra d4 ile açık Sicilya’ya da geçebilir.',
      neden: '2.Nc3, Siyahın ...e6 ve ...a6’lı (Kan/Taimanov) kuruluşlarına karşı esnek bir seçimdir: Beyaz d4 oynamadan önce Siyahın kuruluşunu görmek ister. Motor 2.Nf3’ü biraz daha iyi buluyor (+0.5 / +0.3).',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya giden ana yol: 2...e6 3.d4 cxd4 4.Nxd4 a6 ile Kan Varyantı. Motor: +0.5.' },
        { move: '2.c3', text: 'Alapin: Beyaz d4’ü piyonla desteklemeye hazırlanır. Motor: +0.3.' },
      ],
    },
    '2b': {
      text: '2...a6: Siyah b5 karesini hazırlar ve b5’i Beyazın atına ya da filine kapatır.',
      amac: 'Henüz ...Nc6, ...d6 ya da ...e6 ile kendini bağlamadan ...b5 ve ...Bb7 ile vezir kanadında alan almak.',
      neden: '2...a6 nadir ama mantıklı bir hamledir: Beyaz 3.Nf3 ve 4.d4 ile açık Sicilya’ya dönerse Siyah Najdorf ya da Kan yapılarına geçebilir; Beyaz g3 ile kapalı oynarsa ...b5 ile hemen vezir kanadında oyun kurar. Motor: +0.4.',
      diger: [
        { move: '2...Nc6', text: 'Klasik Kapalı Sicilya: 3.g3 g6 4.Bg2 Bg7 5.d3 d6 ile Smislov – Botvinnik gibi maçlarda görülen yapı. Motor: +0.4.' },
        { move: '2...e6', text: 'Modülün hamle sırası: 3.g3 a6 4.Bg2 ile aynı fikirlere ulaşılır; Siyah ...d5’i de bir seçenek olarak tutar.' },
        { move: '2...d6', text: 'Esnek bir hamle; ...g6 ya da ...e5 ile devam eder. Motor: +0.35.' },
      ],
    },
    '3w': {
      text: '3.g3: Beyaz fili g2’ye getirmeye hazırlanır; fil uzun çaprazda e4 piyonunu destekleyecek.',
      amac: 'Kapalı Sicilya kuruluşu: Bg2, d3 ve f4 ile şah kanadında oyun kurmak ya da daha sonra d4 ile merkezi açmak.',
      neden: '2...a6’ya karşı g3 oynayan Beyaz, Siyahın ...b5-...Bb7 planına karşı e4’ü g2 filiyle sağlamlaştırmak ister. Motor 3.Nf3, 3.Nge2 ve 3.g3’ü hemen hemen eşit görüyor (+0.4).',
      diger: [
        { move: '3.Nf3', text: '3...b5 4.d4 cxd4 5.Nxd4 ile açık Sicilya’ya dönülür. Motor: +0.4.' },
        { move: '3.Nge2', text: 'd4’ü at desteğiyle oynamaya hazırlanır; Nc3 ile e4’ü korur. Motor: +0.4.' },
      ],
    },
    '3b': {
      text: '3...b5: Siyah vezir kanadında alan alır; ...b4 ile c3 atını kovma tehdidi oluşur.',
      amac: 'Fili b7’ye getirmek ve uzun çaprazdan e4 piyonuna baskı yapmak; vezir kanadında piyon çoğunluğuyla ilerlemek.',
      neden: 'Beyaz g3 ile kapalı oynadığı için hemen d4 ile b5’i cezalandıracak bir ritmi yoktur; Siyah bu yüzden ...b5’i gecikmeden oynar. Motor 3...d6’yı biraz daha sağlam (+0.2), 3...b5’i +0.4 görüyor.',
      diger: [
        { move: '3...d6', text: 'Daha sakin; ...Nf6 ve ...g6 ile kapalı kuruluşa geçer. Motor: +0.2.' },
        { move: '3...e6', text: 'Önce merkez; ...b5 bir hamle sonra gelir, aynı yapıya dönülür. Motor: +0.4.' },
      ],
    },
    '4w': {
      text: '4.Bg2: fil uzun çapraza gelişir ve e4 piyonunu korur; aynı zamanda a8’e kadar çaprazı tutar.',
      amac: 'Siyahın b7’ye gelecek filine karşı uzun çaprazda karşı ağırlık kurmak ve rok yapmaya hazırlanmak.',
      neden: '3.g3’ün mantıklı devamı. Fil g2’de olmazsa e4 piyonu ...Bb7 ile hemen baskı altına girer. Motor 4.Bg2, 4.Nf3 ve 4.Nge2’yi eşit görüyor (+0.5).',
      diger: [
        { move: '4.Nf3', text: '4...e6 5.Bg2 Bb7 ile aynı yapı; Beyaz d4 oynamaya daha hazırdır. Motor: +0.5.' },
        { move: '4.d4', text: '4...cxd4 5.Qxd4 Bb7 6.Bg2 e6 ile vezir erken merkeze çıkar ve ...Nc6 ile tempo kaybetme riski taşır. Motor: 0.0.' },
      ],
    },
    '4b': {
      text: '4...Bb7: fil uzun çapraza gelir ve e4 piyonuna baskı yapar.',
      amac: 'e4’ü sürekli bir hedef yapmak; Beyaz d3 oynamazsa piyon ancak taşlarla korunabilir.',
      neden: 'Bu yapının can damarı b7 filidir: g2 filine karşı durur ve Beyaz e4’ü ilerletemez (e5 sonrası d5 karesi zayıflar). Motor 4...Bb7, 4...e6 ve 4...Nc6’yı eşit görüyor (+0.6).',
      diger: [
        { move: '4...e6', text: 'Önce merkez piyonu; 5.Nge2 Bb7 ile aynı yere varılır. Motor: +0.6.' },
        { move: '4...Nc6', text: 'At gelişir; ama ...b4 sonrası c6 atı a5 ya da e5’e gitmekte zorlanabilir. Motor: +0.6.' },
      ],
    },
    '5w': {
      text: '5.Nge2: at e2’den gelişir; f-piyonu serbest kalır ve at d4 ya da f4’e gidebilir.',
      amac: 'd4 ile merkezi açmaya hazırlanmak ve gerekirse f4 ile şah kanadında piyon ilerletmek.',
      neden: 'Nf3 f-piyonunun önünü kapatırdı; Nge2 hem f4 seçeneğini korur hem de d4’ü desteklemeye hazırdır. Bu modüldeki Narciso Dublan – Morozevich (2015) maçında Beyaz 5.Nh3 ile benzer bir fikir izledi. Motor: Nge2 ve Nf3 +0.5, Nh3 +0.4.',
      diger: [
        { move: '5.Nf3', text: 'Daha klasik; 5...e6 6.d4 cxd4 7.Nxd4 ile açık Sicilya yapısı. Motor: +0.5.' },
        { move: '5.Nh3', text: 'At f4’e yönelir ve f-piyonunu serbest bırakır; Narciso Dublan – Morozevich, Barselona 2015. Motor: +0.4.' },
      ],
    },
    '5b': {
      text: '5...e6: modülün yapısı oluştu; Siyahta ...e6, ...a6, ...b5 ve ...Bb7.',
      amac: 'd5 karesini kontrol etmek, f8 filine yol açmak ve ileride ...d5 kırılmasını hazırlamak.',
      neden: 'e6 piyonu b7 filinin e4 baskısını destekler (gerekirse ...d5 ile e4’e piyonla da saldırılabilir) ve Beyazın Nd5 sıçrayışlarını önler. Motor bunu en iyi hamle olarak görüyor (+0.3); 5...Nc6 6.d4 ise +0.5.',
      diger: [
        { move: '5...Nc6', text: '6.d4 cxd4 7.Nxd4 ile Beyaz hemen merkezi açar. Motor: +0.5.' },
        { move: '5...h5', text: 'Saldırgan bir kenar piyonu hamlesi; motor bunu da oynanabilir buluyor (+0.5), ama gelişimi geciktirir.' },
      ],
    },
    '6w': {
      text: '6.O-O: Beyaz rok yapar ve şahını güvene alır.',
      amac: 'Gelişimi tamamlamak, f1 kalesini oyuna sokmak ve d4 ile merkezi açmaya hazır olmak.',
      neden: 'Siyah henüz şah kanadını geliştirmediği için Beyaz acele etmeden önce şahını güvene alır. Motor 6.O-O ve 6.d4’ü eşit görüyor (+0.25).',
      diger: [
        { move: '6.d4', text: '6...cxd4 7.Nxd4 Nf6 ile hemen açık Sicilya. Motor: +0.25.' },
        { move: '6.a3', text: '...b4’ü önler ama zaman kaybettirir. Motor: +0.1.' },
      ],
    },
    '6b': {
      text: '6...Be7: fil e7’ye gelişir; Siyah rok yapmaya hazırlanır.',
      amac: 'Şah kanadını tamamlamak; at f6’ya gelince e4’e ek baskı kurmak.',
      neden: 'Motor burada 6...Nf6’yı tercih ediyor (+0.2 ile +0.4): at hemen e4’e saldırır, 7.e5 Bxg2 8.Kxg2 Ng4 ile Siyah rahat bir oyuna geçer. 6...Be7 biraz pasiftir (+0.8), çünkü Beyaza 7.d4 ile merkezi rahatça açma imkânı verir.',
      diger: [
        { move: '6...Nf6', text: '7.e5 Bxg2 8.Kxg2 Ng4 ile Siyah e5 piyonuna baskı yapar. Motor: +0.2.' },
        { move: '6...b4', text: '7.Na4 Nf6 8.d3 ile at kenara gider ama Siyah e4’e baskıyı hemen başlatır. Motor: +0.4.' },
      ],
    },
    '7w': {
      text: '7.a3: Beyaz ...b4 ilerleyişini önler ve c3 atının yerini korur.',
      amac: 'Önce vezir kanadını sağlamlaştırıp sonra d4 ile merkezi açmak; at c3’te kaldıkça e4 korunur.',
      neden: 'Beyaz ...b4 sonrası atın a4 ya da b1’e gitmesini istemedi. Motor 7.d4’ü belirgin biçimde daha iyi buluyor (+0.7): 7...cxd4 8.Nxd4 sonrası Siyahın f6 atı henüz gelişmemiştir. 7.a3 ile değerlendirme +0.35’e iner.',
      diger: [
        { move: '7.d4', text: '7...cxd4 8.Nxd4 Nc6 9.Nxc6 Bxc6 10.Re1 ile Beyaz merkezde rahat. Motor: +0.7.' },
        { move: '7.Re1', text: 'e4’ü kaleyle destekler; sonra d4 gelir. Motor: +0.4 / +0.6.' },
      ],
    },
    '7b': {
      text: '7...d6: Siyah e5 karesini kontrol eder ve d7 karesini atına açar.',
      amac: 'Kirpi yapısını kurmak (a6, b5, d6, e6) ve at için Nd7-c5 yolunu hazırlamak.',
      neden: 'd6 piyonu Beyazın e5 sıçrayışını önler ve b8 atına d7 karesini açar; buradan at c5 ile e4’e saldıracak. Motor 7...Nc6 ve 7...Qc7’yi biraz daha iyi görüyor (+0.3), fark küçük (+0.4).',
      diger: [
        { move: '7...Nc6', text: '8.d4 cxd4 9.Nxd4 Qc7 ile Taimanov tarzı bir yapı. Motor: +0.3.' },
        { move: '7...Qc7', text: 'Vezir c-hattına gelir ve e5’i tutar. Motor: +0.3.' },
      ],
    },
    '8w': {
      text: '8.d4: Beyaz merkezi açar; oyun Kapalı Sicilya’dan açık Sicilya yapısına döner.',
      amac: 'Siyahın gelişim geriliğini kullanmak; Nd4 ile e6 ve b5’e baskı yapmak.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (+0.6). 8.f4 (+0.1) gibi klasik Kapalı Sicilya planı burada yavaştır, çünkü Siyah ...Nd7 ve ...b4 ile vezir kanadında hızla oyun kurar. Bedeli: e4 artık d3 piyonuyla korunmaz.',
      diger: [
        { move: '8.f4', text: 'Klasik kapalı plan; 8...Nd7 9.d3 Rb8 ile Siyah vezir kanadında rahattır. Motor: +0.1.' },
        { move: '8.Re1', text: 'Sakin bir hazırlık; 8...Qc7 9.d4 ile aynı yapı. Motor: +0.2.' },
      ],
    },
    '8b': {
      text: '8...cxd4: Siyah c-piyonuyla d4’ü alır.',
      amac: 'Sicilya’nın temel takası: c-piyonu merkez piyonuyla değişir, c-hattı Siyaha açılır.',
      neden: 'Almamak (8...Nd7 9.d5 e5) Beyaza merkezde alan bırakırdı (+0.7). Motor 8...cxd4’ü en iyi görüyor (+0.5).',
      diger: [
        { move: '8...Nd7', text: '9.d5 e5 10.Qe1 ile Beyaz kapalı merkezde alan avantajı alır. Motor: +0.7.' },
      ],
    },
    '9w': {
      text: '9.Nxd4: at d4’te geri alır ve merkeze yerleşir.',
      amac: 'Atı merkezde tutmak; d4’ten b5 ve e6 karelerine baskı yapmak.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (+0.3). 9.Na2? (−0.3) ya da 9.Qxd4 (−0.6) Siyaha zaman kazandırır; vezir d4’te ...Nc6 ile tempo kaybeder.',
      diger: [
        { move: '9.Qxd4', text: '9...Nf6 10.Qd1 Qc7 ile vezir geri çekilmek zorunda kalır. Motor: −0.6.' },
        { move: '9.Na2', text: 'b4’ü önceden önler ama d4’ü geri almayı geciktirir. Motor: −0.3.' },
      ],
    },
    '9b': {
      text: '9...Nd7: at d7’ye gelir; c5 karesine gidip e4’e saldıracak.',
      amac: 'e4 baskısını taşlarla artırmak: Nd7-c5 ve ...Ngf6 ile e4’e üç taş getirmek.',
      neden: 'At d7’de e5’i de korur ve Beyazın e5 kırılmasını zorlaştırır. Motor 9...Qd7 ya da 9...Qc8’i biraz daha iyi görüyor (+0.3): vezir b5 piyonunu önceden korur ve 10.a4’e hazırlıklıdır. 9...Nd7 +0.6.',
      diger: [
        { move: '9...Qc8', text: '10.a4 b4 11.Na2 Nf6 ile vezir c-hattında durur ve b7 filini destekler. Motor: +0.35.' },
        { move: '9...Qd7', text: '10.Re1 Nc6 11.a4 b4 ile benzer bir yapı. Motor: +0.3.' },
        { move: '9...h5', text: 'Kenar piyonuyla şah kanadında alan; 10.a4 b4 11.Na2 d5 ile Siyah merkezi de açabilir. Motor: +0.4.' },
      ],
    },
    '10w': {
      text: '10.a4: Beyaz b5 piyonuna saldırır ve vezir kanadını açmak ister.',
      amac: 'Siyahı b5 konusunda karar vermeye zorlamak: ...bxa4 piyon yapısını bozar, ...b4 ise c3 atını kovar ama c4 karesini zayıflatır.',
      neden: '7.a3’ün mantıklı devamı. Motor 10.a4’ü en iyi hamle olarak görüyor (+0.5); 10.Re1 (+0.3) ya da 10.Qe2 (+0.2) daha yavaştır.',
      diger: [
        { move: '10.Re1', text: 'e4’ü kaleyle destekler; Siyah 10...Qc7 ile devam eder. Motor: +0.3.' },
        { move: '10.Qe2', text: 'e6’ya Nxe6 fedası fikrini hazırlar ama Siyah 10...Ngf6 ile karşılar. Motor: +0.2.' },
      ],
    },
    '10b': {
      text: '10...b4!: Siyah ilerler ve c3 atını kovar; at a2 ya da e2’ye çekilmek zorunda.',
      amac: 'e4 piyonunun en önemli savunucusunu uzaklaştırmak ve ...Nc5 ile e4’e saldırıya hız kazandırmak.',
      neden: '10...bxa4 11.Rxa4 ile Siyahın a-piyonu yalnız kalırdı ve Beyazın kalesi a-hattında aktifleşirdi. Motor iki hamleyi eşit görüyor (+0.7); 10...Qc8? 11.axb5 ise piyon kaybettirir (+1.2). Karjakin oyunun ruhuna uygun hamleyi, e4’e baskıyı artıranı seçti.',
      diger: [
        { move: '10...bxa4', text: '11.Rxa4 Rb8 12.Qe2 Ngf6 ile Siyah b-hattını açar ama a6 zayıf kalır. Motor: +0.7.' },
        { move: '10...Qc8', text: '11.axb5 Ngf6 12.Qe2 ile Beyaz bir piyon kazanır. Motor: +1.2.' },
      ],
    },
    '11w': {
      text: '11.Na2: at a2’ye çekilir; buradan b4 piyonunu alabilir ya da c3 ile geri gelebilir.',
      amac: 'b4 piyonuna saldırıp c3 ile Siyahın vezir kanadı piyonlarını değiştirmek ve atı c3’e geri getirmek.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (+0.8). 11.Nce2 (+0.1) ya da 11.Nb1 (−0.05) atı daha kötü kareye götürür; a2’de at b4’e saldırır ve c3’ün yolunu açık tutar.',
      diger: [
        { move: '11.Nce2', text: '11...h5 12.h4 Nc5 13.c3 ile at e2’de kalabalık yapar. Motor: +0.1.' },
        { move: '11.Nb1', text: '11...Ngf6 12.e5 Nd5 ile Siyah merkezde rahat. Motor: −0.05.' },
      ],
    },
    '11b': {
      text: '11...a5: b4 piyonu a5 ile desteklenir.',
      amac: 'b4 piyonunu tutmak ve c3 atının rahat dönmesini zorlaştırmak; a-piyonu da Beyazın a4’ünü dondurur.',
      neden: 'Na2 b4’e saldırıyordu; Siyah onu piyonla korur. Motor 11...Qb6’yı biraz daha iyi buluyor (+0.7): vezir hem b4’ü hem d4 atına baskıyı destekler. 11...a5 ile değerlendirme +1.0, çünkü b5 karesi Beyazın atına kalıcı olarak açılır.',
      diger: [
        { move: '11...Qb6', text: '12.Re1 Ne5 13.Nb3 h5 ile vezir aktif ve b4 korunur. Motor: +0.7.' },
        { move: '11...h5', text: '12.Nxb4 Rc8 13.c3 Nc5 ile Siyah piyon karşılığında aktif oyun arar. Motor: +0.8.' },
      ],
    },
    '12w': {
      text: '12.c3: Beyaz b4 piyonunu değişip atını c3’e geri getirmek ister.',
      amac: 'Vezir kanadını açmak, c-hattını kalelerine kazandırmak ve e4’ü yeniden atla korumak.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (+0.9): b4 piyonu değişince Siyahın vezir kanadı çoğunluğu dağılır ve b5 karesi Beyazın atına açılır. 12.Re1 (+0.5) ve 12.Be3 (+0.4) bu fırsatı kaçırır.',
      diger: [
        { move: '12.Re1', text: '12...Nc5 13.c3 bxc3 14.Nxc3 ile benzer yapı, ama Siyahın atı önce c5’e ulaşır. Motor: +0.5.' },
        { move: '12.Be3', text: '12...Ngf6 13.e5 Nd5 ile Siyah d5’e yerleşir. Motor: +0.4.' },
      ],
    },
    '12b': {
      text: '12...bxc3: Siyah c3’te değişir.',
      amac: 'Beyazın c3 piyonunu almasına izin vermemek; piyonlar değişince oyun açılır.',
      neden: 'Motor 12...bxc3’ü en iyi görüyor (+0.7). Değişmemek (12...Ngf6 13.cxb4 Nxe4 14.b5) Beyaza b-hattında tehlikeli bir geçer piyon verir (+1.0).',
      diger: [
        { move: '12...Ngf6', text: '13.cxb4 Nxe4 14.b5 ile Beyazın b-piyonu ilerler. Motor: +1.0.' },
        { move: '12...h5', text: '13.cxb4 h4 14.b5 ile Beyaz vezir kanadında hızla ilerler. Motor: +1.2.' },
      ],
    },
    '13w': {
      text: '13.Nxc3: at c3’e döner ve e4’ü yeniden savunur.',
      amac: 'Atı merkeze geri getirmek; c3’ten b5’e sıçrama ve e4’ü koruma.',
      neden: 'Motor bunu en iyi görüyor (+1.0). 13.bxc3 piyon yapısını bozar, 13.Rb1 (+0.4) ya da 13.Nb5 (+0.3) de e4’ü korumasız bırakır.',
      diger: [
        { move: '13.bxc3', text: '13...Nc5 14.Qg4 Nf6 ile a4 ve c3 yalnız piyonlar olur, e4 de atla korunmaz. Motor: −0.2.' },
        { move: '13.Nb5', text: '13...Qb8 14.Bf4 Ne5 ile Siyah e4’e baskıyı sürdürür. Motor: +0.3.' },
      ],
    },
    '13b': {
      text: '13...Nc5: at c5’e gelir; b7 filiyle birlikte e4’e ikinci kez saldırır ve a4 piyonuna da bakar.',
      amac: '...Ngf6 ile e4’e üçüncü saldırıyı hazırlamak.',
      neden: 'c5 atın en iyi karesidir: a4 ve e4’e baskı yapar, d3 karesini de kontrol eder. Motor bunu en iyi görüyor (+0.8); 13...Ne5 14.f4 Nc6 ise zaman kaybettirir (+1.2).',
      diger: [
        { move: '13...Qb6', text: '14.Ncb5 Ngf6 15.Be3 Nc5 ile benzer, vezir aktif. Motor: +0.9.' },
        { move: '13...Ne5', text: '14.f4 Nc6 15.Nxc6 Bxc6 ile at geri döner. Motor: +1.2.' },
      ],
    },
    '14w': {
      text: '14.Be3: fil gelişir ve c5 atına bakar.',
      amac: 'Gelişimi tamamlamak, kaleleri bağlamak ve Bxc5 ile e4’ün saldıranlarından birini değişme tehdidi kurmak.',
      neden: 'Doğal bir hamle, ama motor burada 14.Ndb5’i (+0.9) ya da 14.Nb3’ü (+0.8) tercih ediyor: 14.Nb3 Nf6 15.Nxc5 dxc5 16.e5 ile Beyaz e4 sorununu e5 ilerleyişiyle çözer ve b7 filini değiştirir. 14.Be3 sonrası Siyah 14...Nf6 ile e4’e üçüncü kez saldırır (+0.5).',
      diger: [
        { move: '14.Ndb5', text: '14...Nf6 15.e5 dxe5 16.Bxb7 Nxb7 17.Qf3 ile Beyaz uzun çaprazdan avantaj alır. Motor: +0.9.' },
        { move: '14.Nb3', text: '14...Nf6 15.Nxc5 dxc5 16.e5 Bxg2 17.Kxg2 Qxd1 ile Beyaz biraz üstün oyun sonuna geçer. Motor: +0.8.' },
      ],
    },
    '14b': {
      text: '14...Nf6: at gelişir ve e4’e üçüncü kez saldırır; Beyaz onu yalnızca iki taşla savunur.',
      amac: 'e4 piyonunu kazanmak; aynı zamanda rok için şah kanadını tamamlamak.',
      neden: 'Saldıran taşlar (c5 atı, f6 atı, b7 fili) savunanlardan (c3 atı, g2 fili) fazla. Motor 14...Nf6’yı en iyi görüyor (+0.45). 14...Rb8 (+1.2) zaman kaybeder ve 15.Ncb5 ile Beyaz d6’ya yüklenir.',
      diger: [
        { move: '14...Qb6', text: '15.Ncb5 Nf6 16.Nb3 O-O ile vezir aktif ama e4 baskısı bir hamle gecikir. Motor: +0.6.' },
        { move: '14...Rb8', text: '15.Ncb5 Nf6 16.e5 dxe5 ile Beyaz merkezi açar. Motor: +1.2.' },
      ],
    },
    '15w': {
      text: '15.Ndb5: Beyaz e4’ü savunmak yerine atını b5’e getirip d6 piyonuna saldırır.',
      amac: 'Karşı saldırı: d6’ya baskı ve Nc7+ ya da Bb6 gibi fikirlerle Siyahın gelişmemiş şahını rahatsız etmek.',
      neden: 'e4’ü savunmak zordu: 15.Qe2 (0.00) pasif kalır, 15.f3 ise g3’ü zayıflatır. Motor 15.e5’i biraz daha iyi buluyor (+0.4): 15...dxe5 16.Bxb7 Nxb7 ile b7 fili değişir. Tseshkovsky piyonu bırakıp taşlarını aktifleştirmeyi seçti (+0.3).',
      diger: [
        { move: '15.e5', text: '15...dxe5 16.Bxb7 Nxb7 17.Nc6 ile Beyaz uzun çaprazı açar ve aktif kalır. Motor: +0.4.' },
        { move: '15.Qe2', text: '15...O-O 16.e5 dxe5 17.Bxb7 ile benzer, ama Siyah rok yapmıştır. Motor: 0.0.' },
      ],
    },
    '15b': {
      text: '15...Ncxe4!: Siyah e4 piyonunu alır.',
      amac: 'Uzun çapraz baskısının meyvesini toplamak: bir piyon kazanmak ve g2 filini değişmeye zorlamak.',
      neden: 'Doğru at alıyor: c5 atı alır, böylece f6 atı d5 ve e4’ü kontrol etmeye devam eder ve d6 piyonu Be7 ve vezirle korunur. Motor 15...Ncxe4 ve 15...Bxe4’ü eşit görüyor (+0.3); 15...Qb6 16.Bxc5 dxc5 17.e5 ise Beyaza inisiyatif verir (+0.45).',
      diger: [
        { move: '15...Bxe4', text: '16.Nxe4 Ncxe4 17.Qc2 Rc8 ile Siyah aynı piyonu başka sırayla alır. Motor: +0.3.' },
        { move: '15...Qb6', text: '16.Bxc5 dxc5 17.e5 Nd7 18.Bxb7 Qxb7 19.Nd6+ ile Beyaz aktif. Motor: +0.45.' },
      ],
    },
    '16w': {
      text: '16.Nxe4: Beyaz e4 atını alır.',
      amac: 'Taşları değiştirip Siyahın e4’teki baskısını azaltmak; b7 filiyle g2 filinin değişimine yönelmek.',
      neden: 'Motor 16.Nxe4 ve 16.Bxe4’ü eşit görüyor (+0.25). 16.Qc2 (+0.1) atı e4’te bırakır ve Siyah merkezde kalıcı bir at kazanır.',
      diger: [
        { move: '16.Bxe4', text: '16...Bxe4 17.Nxe4 Nxe4 18.Qg4 ile maçtaki pozisyona benzer. Motor: +0.25.' },
        { move: '16.Qc2', text: '16...Rc8 17.Qd3 d5 ile Siyahın atı e4’te sağlamlaşır. Motor: +0.1.' },
      ],
    },
    '16b': {
      text: '16...Bxe4!: fil alır; Beyaz g2 filini e4’te değişmeye zorlanır.',
      amac: 'Önce fili değiştirip sonra atla e4’e yerleşmek; Beyazın açık şahını g2 filinden mahrum bırakmak.',
      neden: '16...Nxe4? 17.Bxe4 Bxe4 18.Qd4! ile vezir e4 filine ve g7’ye aynı anda saldırır (Motor: +2.2). 16...Bxe4 ile fil değişimi zorlanır ve at son sözü söyler. Motor bunu tek iyi hamle olarak görüyor (+0.3).',
      diger: [
        { move: '16...Nxe4', text: '17.Bxe4 Bxe4 18.Qd4 ile çatal: Beyaz piyonu geri alır ve g7 düşer. Motor: +2.2.' },
        { move: '16...Nd5', text: '17.Bg5 f6 18.Bd2 ile Siyah taş kaybetme tehlikesine girer. Motor: +5.0.' },
      ],
    },
    '17w': {
      text: '17.Bxe4: Beyaz filleri değişir.',
      amac: 'e4 filini ortadan kaldırmak; aksi halde fil g2’ye baskı yapıp şahı açardı.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (+0.3). 17.Qe2 (−0.75) ya da 17.Rc1 (−0.8) sonrası Siyah 17...O-O ve ...Bxg2 ile hem piyonu tutar hem de uzun çaprazı açar.',
      diger: [
        { move: '17.Qe2', text: '17...O-O 18.Rac1 Bxg2 19.Kxg2 ile Siyah bir piyon fazla ve rahat. Motor: −0.75.' },
      ],
    },
    '17b': {
      text: '17...Nxe4: at e4’te; Siyah bir piyon fazladır.',
      amac: 'Materyali geri almak ve atı merkezde tutmak.',
      neden: 'Zorunlu geri alış: 17...d5? 18.Bf3 ile Siyah bir taş eksik kalırdı (Motor: +5.0).',
    },
    '18w': {
      text: '18.Qg4: vezir hem e4 atına hem g7 piyonuna saldırır.',
      amac: 'Siyahın rok yapmamış şahından yararlanmak; piyonu geri almak için tempo kazanmak.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (+0.2). 18.Qc2 (0.00) atı kovar ama g7’ye baskı yoktur; 18.Qd4 (−0.5) ise 18...Nf6 ile karşılanır. Qg4 sonrası Siyah 18...Nf6? 19.Qxg7 Rg8 20.Qh6 ile şah kanadını kaybeder (+0.95).',
      diger: [
        { move: '18.Qc2', text: '18...Nc5 19.Rad1 Qb6 ile Siyah piyonunu korur. Motor: 0.0.' },
        { move: '18.Qd4', text: '18...Nf6 19.Rac1 O-O ile Siyah rahatça rok yapar. Motor: −0.5.' },
      ],
    },
    '18b': {
      text: '18...Ng5: at e4’ten g5’e çekilir; hem g7’yi dolaylı korur hem de h3 ve f3’e bakar.',
      amac: 'Atı kurtarırken g7’ye gelen baskıyı karşılamak; Qxg7 sonrası ...Bf6 ile veziri yakalama tehdidi.',
      neden: 'Motor 18...Ng5’i tek iyi hamle olarak görüyor (+0.25): 18...Nf6? 19.Qxg7 Rg8 20.Qh6 (+0.95) ve 18...d5? 19.Qxg7 Bf6 20.Qh6 (+1.8) piyonu geri verir ve şahı açar.',
      diger: [
        { move: '18...Nf6', text: '19.Qxg7 Rg8 20.Qh6 Rg6 21.Qf4 ile Siyah rok hakkını fiilen kaybeder. Motor: +0.95.' },
        { move: '18...d5', text: '19.Qxg7 Bf6 20.Qh6 Bg5 21.Bxg5 ile Beyaz piyonu geri alır. Motor: +1.8.' },
      ],
    },
    '19w': {
      text: '19.h4: Beyaz g5 atını kovalamak ister.',
      amac: 'Atı rahatsız edip Siyahı şah kanadında zayıflığa zorlamak; mümkünse piyonu geri almak.',
      neden: 'Tseshkovsky hemen somut bir hedef aradı. Motor 19.Rac1’i (+0.25) biraz daha iyi buluyor: kale c-hattına gelir, sonra 19...h5 20.Qe2 O-O 21.Rc6 gibi baskı fikirleri var. 19.h4 sonrası değerlendirme +0.1.',
      diger: [
        { move: '19.Rac1', text: '19...h5 20.Qe2 O-O 21.Rc6 ile Beyaz c-hattında baskı yapar. Motor: +0.25.' },
        { move: '19.Rfc1', text: '19...h5 20.Qe2 O-O 21.Qxh5 ile benzer, piyon geri gelir. Motor: +0.2.' },
      ],
    },
    '19b': {
      text: '19...h5!: piyon g4 vezirine saldırır ve g5 atını destekler.',
      amac: 'Atı yerinde tutmak ve veziri tempoyla geri çekilmeye zorlamak.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (+0.1). 19...f5? 20.Qh5+ g6 21.Qe2 ile e6 ve g6 zayıflar (+1.5); 19...h6? ise 20.hxg5 hxg5 ile atı bir piyona verir (+4.1).',
      diger: [
        { move: '19...f5', text: '20.Qh5+ g6 21.Qe2 Ne4 ile Siyahın şah önü dağılır. Motor: +1.5.' },
        { move: '19...h6', text: '20.hxg5 hxg5 ile Siyah atı bir piyon karşılığında kaybeder; h6 piyonu atı ancak bir piyonla geri alabilir. Motor: +4.1.' },
      ],
    },
    '20w': {
      text: '20.Qe2: vezir e2’ye çekilir ve h5 piyonuna bakar.',
      amac: 'h5 piyonunu kazanmak; g5 atını hxg5 tehdidiyle bağlı tutmak.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (+0.1). 20.Qc4? 20...Nf3+ 21.Kg2 Ne5 ile tempo kaybettirir (−0.2); 20.Qd1 (0.00) ise h5’e baskı yapmaz.',
      diger: [
        { move: '20.Qd1', text: '20...Ne4 21.Qc2 Nc5 ile Siyah piyonunu korur. Motor: 0.0.' },
        { move: '20.Qc4', text: '20...Nf3+ 21.Kg2 Ne5 ile at tempoyla merkeze döner. Motor: −0.2.' },
      ],
    },
    '20b': {
      text: '20...Nh7: at h7’ye çekilir; Siyah h5 piyonunu geri vermeye razı olur.',
      amac: 'Atı güvene almak ve hemen rok yapmak; şah güvenliğini materyalden üstün tutmak.',
      neden: '20...O-O?? 21.hxg5 Bxg5 sonrası Siyah taş kaybeder (+3.8). Motor 20...Ne4’ü (+0.6) neredeyse aynı görüyor: 21.Bf4 Nf6 22.Nxd6+ ile Beyaz piyonu geri alır. Karjakin daha basit yolu seçti (+0.5).',
      diger: [
        { move: '20...Ne4', text: '21.Bf4 Nf6 22.Nxd6+ Bxd6 23.Bxd6 ile Beyaz d6 piyonunu alır. Motor: +0.6.' },
        { move: '20...O-O', text: '21.hxg5 Bxg5 22.Rad1 Bxe3 ile Siyah bir taş eksik kalır. Motor: +3.8.' },
      ],
    },
    '21w': {
      text: '21.Qxh5: vezir h5’i alır; piyon sayısı eşitlenir.',
      amac: 'Materyali eşitlemek ve vezirle Siyahın şah kanadına yakın durmak.',
      neden: 'Motor 21.Qxh5 ve 21.Rac1’i eşit görüyor (+0.5); piyon kaçmaz ama önce alınması en basit yoldur.',
      diger: [
        { move: '21.Rac1', text: '21...O-O 22.Qxh5 Nf6 ile aynı pozisyona varılır. Motor: +0.5.' },
      ],
    },
    '21b': {
      text: '21...O-O: Siyah rok yapar; şah güvende ve kaleler bağlanır.',
      amac: 'Şah güvenliğini sağlamak; f8 kalesini oyuna sokmak.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (+0.4). 21...d5 (+0.6) ve 21...Qd7 (+0.7) rok yapmayı geciktirir ve h-hattı açıkken şahı merkezde bırakır.',
      diger: [
        { move: '21...d5', text: '22.Qe2 O-O 23.Rfc1 Nf6 ile benzer, ama d5 erken sabitlenir. Motor: +0.6.' },
        { move: '21...Qd7', text: '22.Rac1 O-O 23.Rc7 ile Beyazın kalesi yedinci sıraya girer. Motor: +0.7.' },
      ],
    },
    '22w': {
      text: '22.Rac1: kale c-hattına gelir.',
      amac: 'Açık c-hattını almak ve Rc7 ile yedinci sıraya girmeyi tehdit etmek.',
      neden: 'Motor 22.Qe2, 22.Rfc1 ve 22.Rac1’i eşit görüyor (+0.4). a1 kalesi oyuna girerken f1 kalesi şah kanadında kalır.',
      diger: [
        { move: '22.Qe2', text: '22...Nf6 23.Rfc1 Nd5 24.Bd2 ile vezir önce güvene çekilir. Motor: +0.4.' },
        { move: '22.Rfc1', text: '22...Nf6 23.Qe2 Nd5 ile benzer. Motor: +0.4.' },
      ],
    },
    '22b': {
      text: '22...Nf6: at f6’ya döner ve h5 vezirine saldırır.',
      amac: 'Atı en iyi karesine getirmek ve veziri tempoyla kovmak; at d5 ve e4’e de bakar.',
      neden: 'Motor 22...Nf6 ve 22...d5’i eşit görüyor (+0.3). 22...Rb8 (+0.7) atı h7’de pasif bırakır.',
      diger: [
        { move: '22...d5', text: '23.Qe2 Nf6 24.Kg2 Ne4 ile merkez piyonu önce gelir. Motor: +0.3.' },
        { move: '22...Rb8', text: '23.Qe2 Nf6 24.Rfd1 ile Beyaz d6’ya baskı yapar. Motor: +0.7.' },
      ],
    },
    '23w': {
      text: '23.Qf3: vezir f3’e çekilir; uzun çaprazdan a8’e bakar.',
      amac: 'Vezir merkeze yakın kalır ve a8 kalesine baskı yapar; b7 karesi Beyazın taşlarına açılabilir.',
      neden: 'Motor 23.Qe2’yi biraz daha iyi buluyor (+0.35): 23...d5 24.Rc6 ile kale aktifleşir. 23.Qf3 (+0.2) vezire ...Nd5 ve ...e5 gibi hamlelerle tempo kaybettirme riski taşır.',
      diger: [
        { move: '23.Qe2', text: '23...d5 24.Rc6 Rc8 25.Na7 ile Beyaz c-hattında baskı yapar. Motor: +0.35.' },
        { move: '23.Qd1', text: '23...d5 24.Qe2 Ne4 25.Kg2 ile vezir sakin bir kareye döner. Motor: +0.1.' },
      ],
    },
    '23b': {
      text: '23...Nd5: at d5’e yerleşir ve e3 filine saldırır.',
      amac: 'Fili değişmek ya da kovmak; at d5’te b4, c3 ve f4’e bakar.',
      neden: 'Motor 23...d5’i daha iyi buluyor (+0.3): merkezi önce piyonla sabitleyip sonra ...Ne4 oynamak. 23...Nd5 (+0.7) atı aktif yapar ama d6 piyonunu ve d5 karesini bir süre esnek bırakır; Beyaz 24.Bd2 ile daha iyi bir duruma geçebilirdi.',
      diger: [
        { move: '23...d5', text: '24.Rc6 Rc8 25.Rxc8 Qxc8 ile c-hattı değişir ve Siyah rahat eşitler. Motor: +0.3.' },
        { move: '23...Rc8', text: '24.Na7 Rxc1 25.Rxc1 Nd5 ile Siyah c-hattını değiştirir. Motor: +0.5.' },
      ],
    },
    '24w': {
      text: '24.Bd4: fil d4’e gelir ve uzun çaprazda g7’ye bakar.',
      amac: 'Fili değişime vermemek ve Siyahın şahına karşı a1-h8 çaprazını tutmak.',
      neden: 'Motor 24.Bd2’yi tercih ediyor (+0.75): 24...Nb4 25.Rfd1 ile Beyaz a5 ve d6 zayıflıklarına baskı yapar. 24.Bd4 (+0.4) aktif görünür ama Siyaha ...Bf6 ile fil değişimi imkânı verir.',
      diger: [
        { move: '24.Bd2', text: '24...Nb4 25.Rfd1 d5 26.Qg4 ile Beyaz a5 piyonuna ve şah kanadına baskı yapar. Motor: +0.75.' },
        { move: '24.b3', text: '24...Nxe3 25.Qxe3 d5 ile filler değişir, oyun eşitlenir. Motor: +0.1.' },
      ],
    },
    '24b': {
      text: '24...Rc8: kale c-hattına gelir ve Beyazın c1 kalesiyle karşılaşır.',
      amac: 'c-hattını değiştirmek ya da kontrol etmek; Beyazın Rc7 fikrini önlemek.',
      neden: 'Motor 24...Bf6 (+0.4) ve 24...Rc8’i (+0.5) yakın görüyor. Rc8 Beyazın tek açık hattını tartışır ve a8’deki kaleyi vezir f3’ün çaprazından çıkarır.',
      diger: [
        { move: '24...Bf6', text: '25.Rfd1 Bxd4 26.Rxd4 Rc8 ile filler değişir, d6 korunur. Motor: +0.4.' },
        { move: '24...Qd7', text: '25.b3 Rac8 26.Rc4 Nf6 ile Siyah c-hattını sonra alır. Motor: +0.5.' },
      ],
    },
    '25w': {
      text: '25.h5: Beyaz h-piyonunu Siyahın şahına doğru sürer.',
      amac: 'h6 ile g7’yi zayıflatmak ve Bd4 ile birlikte uzun çaprazda şaha baskı kurmak.',
      neden: 'Saldırgan ama tartışmalı bir hamle. Motor 25.b3’ü (+0.4) ya da 25.Na7 ile c-hattında oyunu (+0.3) tercih ediyor. 25.h5 (+0.15) kendi şahının önünü de açar; sonraki hamlelerde bu h-piyonu kaybedilecek ve g3 zayıf kalacak.',
      diger: [
        { move: '25.b3', text: '25...Rxc1 26.Rxc1 Bf6 27.Qe4 ile Beyaz merkezde sağlam ve biraz üstün. Motor: +0.4.' },
        { move: '25.Na7', text: '25...Rc7 26.Nb5 Rxc1 27.Rxc1 ile c-hattı değişir. Motor: +0.3.' },
      ],
    },
    '25b': {
      text: '25...f5: Siyah e4 karesini kontrol eder ve şah kanadında alan alır.',
      amac: 'e4’e bir atı ileri karakol olarak yerleştirmek; Beyazın vezirini f3’ten uzak tutmak ve g4 karesini kontrol etmek.',
      neden: 'Cesur bir karar: e6 piyonu zayıflar, ama e4 karesi Siyahın olur. Motor 25...Bf6’yı (+0.2) biraz daha sağlam buluyor; 25...f5 +0.4. Bu hamle ileride e4 atının ve ...f4+ fikrinin temelini atar.',
      diger: [
        { move: '25...Bf6', text: '26.Rxc8 Qxc8 27.Nxd6 Qd7 ile Siyah piyonu geri alır, filler değişir. Motor: +0.2.' },
        { move: '25...Rxc1', text: '26.Rxc1 Bf6 27.Rc4 Bxd4 ile değişimlerle eşitlik. Motor: +0.2.' },
      ],
    },
    '26w': {
      text: '26.Rce1: kale e-hattına geçip e6’ya baskı yapar.',
      amac: '...f5 ile zayıflayan e6 piyonunu hedef almak; Rxe6 tehdidiyle Siyahı pasif savunmaya zorlamak.',
      neden: 'Fikir doğal, ama c-hattını Siyaha bırakır. Motor 26.Rcd1 (+0.4) ya da 26.b3’ü (+0.4) tercih ediyor; maç hamlesinden sonra değerlendirme −0.3, çünkü Siyah 26...Qd7 ile e6’yı korur ve c-hattını ele geçirir.',
      diger: [
        { move: '26.Rcd1', text: '26...Qd7 27.Rfe1 Rf7 28.b3 ile Beyaz d6’ya ve e6’ya aynı anda baskı yapar. Motor: +0.4.' },
        { move: '26.b3', text: '26...Qd7 27.Rfd1 Rxc1 28.Rxc1 ile Beyaz c-hattını korur. Motor: +0.4.' },
      ],
    },
    '26b': {
      text: '26...Qd7!: vezir e6 piyonunu korur ve c-hattındaki kaleyi destekler.',
      amac: 'Tehdit altındaki e6’yı savunmak ve ...Nf6 ile at manevrasına zaman kazanmak.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (−0.1). 26...Nf6? 27.Rxe6 ve 26...Nc7? 27.Bb6 f4 28.Nxc7 sonrası Beyaz piyon kazanır ve Siyahın şahı açılır (+3.5 dolayında); 26...f4? de 27.Rxe6 ile kaybeder (+3.4).',
      diger: [
        { move: '26...Nf6', text: '27.Rxe6 Qd7 28.Qxf5 d5 29.h6 ile Beyaz iki piyon ve saldırı kazanır. Motor: +3.7.' },
        { move: '26...f4', text: '27.Rxe6 Nf6 28.Qxf4 ile e6 düşer, şah açılır. Motor: +3.4.' },
      ],
    },
    '27w': {
      text: '27.Re2: kale e2’ye gelir; e-hattında kaleler ikilenebilir ve ikinci sıra korunur.',
      amac: 'Rfe1 ile e6’ya ikinci kez baskı yapmak; ayrıca c2 karesini Siyahın kalesine kapatmak.',
      neden: 'Motor 27.Rd1’i biraz daha iyi buluyor (0.00): d6’ya baskı yapar ve 27...Nf6 28.Bxf6 Rxf6 29.Rc1 ile c-hattını geri alır. 27.Re2 (−0.25) e-hattındaki baskıyı sürdürür ama f1 kalesini h-hattına gönderme planına hizmet eder.',
      diger: [
        { move: '27.Rd1', text: '27...Nf6 28.Bxf6 Rxf6 29.Rc1 ile Beyaz c-hattını tartışır. Motor: 0.0.' },
        { move: '27.Kg2', text: '27...Rf7 28.Rd1 Rcf8 29.Kh3 ile şah h-hattını hazırlar. Motor: −0.1.' },
      ],
    },
    '27b': {
      text: '27...Nf6: at f6’ya döner ve e4 karesine yönelir; h5 piyonuna da bakar.',
      amac: 'Atı ...Ne4 ile merkezde ileri karakola yerleştirmek; d5 karesini piyona açmak.',
      neden: 'At d5’te b4 ve c3’e bakıyordu ama e4’e gitmesi için önce d5’i piyona bırakması gerekiyordu. Motor 27...Nf6’yı en iyi görüyor (+0.1); 27...f4 28.Qg4 Bf6 (+0.5) erken bir açılımdır.',
      diger: [
        { move: '27...f4', text: '28.Qg4 Bf6 29.h6 fxg3 ile oyun açılır ama Siyahın şahı da açıkta. Motor: +0.5.' },
        { move: '27...Bg5', text: '28.Rfe1 Rc1 29.Rxc1 Bxc1 ile fil aktifleşir ama e6 zayıf kalır. Motor: +0.5.' },
      ],
    },
    '28w': {
      text: '28.Qb3: vezir b3-e6 çaprazından e6 piyonuna saldırır.',
      amac: 'e6’ya üçüncü kez baskı yapmak; vezir, kale ve b5 atı birlikte Siyahın merkezini zorlamak.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (+0.2). 28.Rd1 (−0.15) 28...Ne4 ile karşılanır; 28.Bxf6 (−0.2) Siyahın kötü filini değil, iyi atını değiştirir ama Siyahın kalesini f-hattında aktifleştirir.',
      diger: [
        { move: '28.Rd1', text: '28...Ne4 29.h6 gxh6 30.Rxe4 ile karmaşık bir oyun. Motor: −0.15.' },
        { move: '28.Bxf6', text: '28...Rxf6 29.Rd1 d5 30.Kg2 ile Siyah rahat. Motor: −0.2.' },
      ],
    },
    '28b': {
      text: '28...d5!: piyon b3-e6 çaprazını kapatır ve e4 karesini destekler.',
      amac: 'e6’yı dolaylı olarak korumak ve e4 atı için sağlam bir destek noktası kurmak; d6 zayıflığından da kurtulmak.',
      neden: 'Motor bunu en iyi görüyor (+0.1). 28...Ne4 (+0.2) de olur, ama 28...Kf7? (+1.0) şahı e-hattına sokar. d5 ile Siyahın piyon zinciri (d5-e6-f5) tamamlanır ve e4 karesi kalıcı olarak onun olur.',
      diger: [
        { move: '28...Ne4', text: '29.Kg2 Ng5 30.f3 Bf6 ile at aktif ama e6 hâlâ zayıf. Motor: +0.2.' },
        { move: '28...Kf7', text: '29.Rfe1 Ne4 30.Kg2 d5 ile şah e-hattında Beyazın kalelerine yakın kalır. Motor: +1.0.' },
      ],
    },
    '29w': {
      text: '29.h6: Beyaz g7’ye baskı yapar ve Siyahın şah önünü bozmak ister.',
      amac: 'hxg7 ya da h7+ ile şahı açmak; Bd4 ile birlikte uzun çaprazda mat motifleri aramak.',
      neden: 'Motor 29.h6’yı en iyi görüyor (+0.1); 29.Kg2 (0.00) ve 29.Be5 (−0.4) daha az aktiftir. Beyaz saldırısının mantığını sonuna kadar sürdürür.',
      diger: [
        { move: '29.Kg2', text: '29...f4 30.Qf3 Ne4 31.gxf4 ile oyun açılır. Motor: 0.0.' },
        { move: '29.Be5', text: '29...Nxh5 30.Kg2 Rc4 ile Siyah h-piyonunu alır. Motor: −0.4.' },
      ],
    },
    '29b': {
      text: '29...g6: g-piyonu ilerler; şah önü kapalı kalır.',
      amac: 'Uzun çaprazı (g7) kapalı tutmak ve h6 piyonunu ileride almak için hedef olarak bırakmak.',
      neden: '29...gxh6? (+0.4) şahın önünü açar; 29...Ne4 (+0.1) daha aktiftir ama 30.Bxg7 Rf7 ile karmaşık bir oyun çıkar. Karjakin sağlam yolu seçti (+0.2): h6 piyonu Siyahın şahını korumaya da yarar.',
      diger: [
        { move: '29...Ne4', text: '30.Bxg7 Rf7 31.Rc2 Rxc2 ile Beyaz g7 piyonunu alır ama fil tuzağa düşebilir. Motor: +0.1.' },
        { move: '29...gxh6', text: '30.Qe3 Rc6 31.f3 Nh7 ile Siyahın şahı açık kalır. Motor: +0.4.' },
      ],
    },
    '30w': {
      text: '30.Qe3: vezir e3’e gelir ve e6’ya bakar; h6 piyonunu da dolaylı destekler.',
      amac: 'Veziri merkeze ve şah kanadına yakın tutmak; Qg5 ya da h7+ fikirlerine hazırlanmak.',
      neden: 'Motor 30.Be5’i (+0.5) ve 30.f3’ü (+0.5) biraz daha iyi buluyor: 30.f3 Siyahın atını e4’ten uzak tutardı. 30.Qe3 (+0.3) Siyaha 30...Ne4 ile ideal kareyi verir.',
      diger: [
        { move: '30.f3', text: '30...Nh5 31.Qe3 Rc6 32.h7+ ile Beyaz e4’ü önceden kapatır. Motor: +0.5.' },
        { move: '30.Be5', text: '30...Kh7 31.Nd4 Bc5 32.Bxf6 ile filler ve atlar değişir. Motor: +0.5.' },
      ],
    },
    '30b': {
      text: '30...Ne4: at e4’e yerleşir; d5 ve f5 piyonları onu destekler, at g3, f2 ve d2’ye bakar.',
      amac: 'Merkezde güçlü bir at kurmak; Beyazın piyon hamlelerini (özellikle f3) cezalandırmaya hazır olmak.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (+0.3). 30...Kh7? 31.Qxe6 (+1.8) e6’yı kaybettirir; 30...Rc6 (+0.9) pasiftir.',
      diger: [
        { move: '30...Kh7', text: '31.Qxe6 Qxe6 32.Rxe6 ile Beyaz piyonu geri alır ve kalesi yedinci sıraya yaklaşır. Motor: +1.8.' },
        { move: '30...Rc6', text: '31.Rc1 Rxc1+ 32.Qxc1 Ne4 ile Beyaz c-hattını alır. Motor: +0.9.' },
      ],
    },
    '31w': {
      text: '31.h7+: Beyaz piyonu şah çekerek son kareye kadar sürer.',
      amac: 'Piyonu vererek h-hattını açmak; Kg2 ve Rh1 ile şaha karşı kale saldırısı kurmak.',
      neden: 'Motor 31.h7+’yı en iyi görüyor (+0.3): piyon h6’da kalırsa Siyah onu sonra ...Kh7 ile bedavaya alırdı. 31.Kg2 (−0.1) ve 31.Be5 (−0.1) daha zayıftır.',
      diger: [
        { move: '31.Kg2', text: '31...Kh7 32.f3 Nxg3 33.Qxe6 ile karmaşık oyun, ama Siyah g3’ü kazanır. Motor: −0.1.' },
        { move: '31.Be5', text: '31...Kh7 32.Qa7 Qxa7 33.Nxa7 ile vezirler değişir. Motor: −0.1.' },
      ],
    },
    '31b': {
      text: '31...Kxh7: şah piyonu alır; Siyah bir piyon öne geçer.',
      amac: 'Materyal kazanmak ve h7 piyonunun Siyahın kalelerini bağlamasını önlemek.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (+0.3). 31...Kf7 32.Kg2 Bg5 33.Qd3 sonrası h7 piyonu yerinde kalır ve h8’e terfi tehdidi Siyahı sürekli meşgul eder (+1.8 ile +2.2 arası).',
      diger: [
        { move: '31...Kf7', text: '32.Kg2 Bg5 33.Qd3 Bf6 34.f3 ile h7 piyonu Siyahın kalelerini bağlar. Motor: +2.0.' },
      ],
    },
    '32w': {
      text: '32.Kg2: şah g2’ye gider ve h-hattını f1 kalesine açar; Rh1+ geliyor.',
      amac: 'h-hattında kale oyunu kurmak; piyon karşılığında Siyahın şahına baskı yapmak.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (+0.3). 32.f3? 32...Nxg3 33.Rh2+ Nh5 ile Siyah bir piyon daha alır (−0.25); 32.Qd3 (−0.4) ise h-hattı planını geciktirir.',
      diger: [
        { move: '32.f3', text: '32...Nxg3 33.Rh2+ Nh5 34.Kh1 ile Siyah iki piyon öne geçer. Motor: −0.25.' },
        { move: '32.Qd3', text: '32...Bf6 33.Bxf6 Rxf6 34.Kg2 ile benzer, ama tempo kaybı. Motor: −0.4.' },
      ],
    },
    '32b': {
      text: '32...Bf6: Siyah d4 filini değişmeye hazırlanır.',
      amac: 'Beyazın en tehlikeli saldırı taşını (uzun çapraz fili) değiştirmek ve şahın önündeki kareleri korumak.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (+0.1). 32...Kg8? 33.Qh6 (+1.1) Beyazın veziri h-hattına girer; 32...Bg5 33.Rh1+ Kg8 34.Rh8+ (+0.5) şahı rahatsız eder.',
      diger: [
        { move: '32...Kg8', text: '33.Qh6 Bf6 34.f3 e5 ile Beyazın veziri şaha çok yakın. Motor: +1.1.' },
        { move: '32...Bg5', text: '33.Rh1+ Kg8 34.Rh8+ Kf7 ile şah f7’de açıkta kalır. Motor: +0.5.' },
      ],
    },
    '33w': {
      text: '33.Rh1+: kale h-hattından şah çeker.',
      amac: 'Şahı g8’e geri itmek ve h-hattını kontrol etmek.',
      neden: 'Motor 33.Rh1+ ve 33.Bxf6’yı eşit görüyor (0.00); iki hamle de aynı pozisyona gider. 33.f3? 33...e5 34.Rh1+ Kg8 (−0.8) ise g3’ü zayıflatır.',
      diger: [
        { move: '33.Bxf6', text: '33...Rxf6 34.Rh1+ Kg8 35.Qd4 ile aynı yere varılır. Motor: 0.0.' },
        { move: '33.f3', text: '33...e5 34.Rh1+ Kg8 35.Qh6 ile Siyahın merkez piyonları ilerler. Motor: −0.8.' },
      ],
    },
    '33b': {
      text: '33...Kg8: şah g8’e döner.',
      amac: 'Şahı h-hattından çıkarmak ve g7 karesini veziri için boş tutmak.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (0.00). 33...Kg7?? 34.Qh6+ Kg8 35.Rxe4! sonrası vezir h6’da, kale h-hattında ve fil d4’te Siyahın şahına yüklenir; Siyah e4 kalesini geri alırsa h-hattında mat ağı kurulur (Motor: +5.0).',
      diger: [
        { move: '33...Kg7', text: '34.Qh6+ Kg8 35.Rxe4 Qg7 ile Beyaz atı kazanır. Motor: +5.0.' },
      ],
    },
    '34w': {
      text: '34.Bxf6: Beyaz filleri değişir.',
      amac: 'f6 filinin d4 filini almasını ya da g5’ten Beyazın veziriyle oynamasını önlemek.',
      neden: 'Motor bunu en iyi görüyor (0.00). 34.Qh6 Qg7 35.Qxg7+ (−0.6) vezir değişimi bir piyon eksik oyun sonuna götürür; 34.Bc3? Nxc3 (−1.1) ise taş değişimini Siyahın lehine yapar.',
      diger: [
        { move: '34.Qh6', text: '34...Qg7 35.Qxg7+ Kxg7 36.Be3 ile Beyaz bir piyon eksik oyun sonuna geçer. Motor: −0.6.' },
        { move: '34.Bc3', text: '34...Nxc3 35.bxc3 e5 ile Siyahın merkez piyonları güçlenir. Motor: −1.1.' },
      ],
    },
    '34b': {
      text: '34...Rxf6: kale geri alır; f6 kalesi f-hattını ve altıncı sırayı tutar.',
      amac: 'Kaleyi aktif bir kareye getirmek; e6 ve g6 piyonlarını yatay olarak korumak.',
      neden: '34...Nxf6? 35.Qg5 Qg7 36.Rh6 (+1.45) e4 karesini boşaltır ve Beyazın taşları şah kanadına girer; 34...f4?? 35.Rh8+ ile kaybeder (+5.0). Motor 34...Rxf6’yı en iyi görüyor (0.00).',
      diger: [
        { move: '34...Nxf6', text: '35.Qg5 Qg7 36.Rh6 Nh7 ile Beyaz g6’ya baskı yapar. Motor: +1.45.' },
      ],
    },
    '35w': {
      text: '35.f3?: Beyaz e4 atını kovmak ister, ama f2 piyonu g3’ü koruyan tek piyondu.',
      amac: 'Merkezdeki güçlü atı uzaklaştırmak ve e-hattını kalelerine açmak.',
      neden: 'Hamle doğal görünse de f3 sonrası g3’ü yalnızca g2 şahı korur ve 35...Nxg3! taktiği doğar. Motor 35.Qd4’ü öneriyor (0.00): vezir merkezde f6 kalesine ve g7’ye bakar, Beyaz piyon eksik olsa da aktif taşlarıyla dengeyi tutar. Maç hamlesinden sonra değerlendirme −2.3’e düşer.',
      diger: [
        { move: '35.Qd4', text: '35...Kg7 36.f3 Ng5 37.b3 ile f3 at kovulduktan sonra güvenle oynanır. Motor: 0.0.' },
        { move: '35.Qh6', text: '35...Qg7 36.Qxg7+ Kxg7 37.f3 ile bir piyon eksik ama savunulabilir oyun sonu. Motor: −0.3.' },
        { move: '35.Qd3', text: '35...e5 36.f3 Nc5 37.Qd2 ile at geri çekilir. Motor: −0.3.' },
      ],
    },
    '35b': {
      text: '35...Nxg3!: at g3 piyonunu alır; at g3’te e2 ve h1 kalelerine saldırır.',
      amac: 'g3’ün zayıflığından yararlanıp materyal kazanmak ve Beyazın şahını açmak.',
      neden: '36.Kxg3? 36...f4+! ile şaha şah çekip e3 vezirine saldırır: 37.Qxf4 Rxf4 38.Kxf4 Qf7+ sonrası Siyah kesin üstündür (−4.4). Motor bunu tek iyi hamle olarak görüyor (−3.0 / −3.5); sonraki en iyi 35...e5 36.Qh6 ile Beyaz üstün olur (+0.9 / +1.1).',
      diger: [
        { move: '35...e5', text: '36.Qh6 Qg7 37.Qxg7+ Kxg7 38.fxe4 ile Beyaz atı kazanır. Motor: +1.1.' },
      ],
    },
    '36w': {
      text: '36.Qe5: vezir korumasız f6 kalesine saldırır.',
      amac: 'Karşı tehditle materyali geri almak: Siyah g3 atıyla e2 kalesini alırsa Beyaz f6 kalesini alacak.',
      neden: '36.Kxg3? 36...f4+ (−4.4) ve 36.Rh8+? 36...Kxh8 37.Qh6+ Qh7 (−4.7) daha da kötüdür. Motor 36.Qe5 (−3.2) ve 36.Nd4’ü (−3.3) en dirençli hamleler olarak görüyor; ikisi de bir kale kaybını önlemez ama materyali dengelemeye çalışır.',
      diger: [
        { move: '36.Kxg3', text: '36...f4+ 37.Qxf4 Rxf4 38.Kxf4 Qf7+ ile Siyah kale ve f-piyonu karşılığında Beyazın vezirini alır; vezir, açıktaki şaha karşı kesin üstünlük getirir. Motor: −4.4.' },
        { move: '36.Nd4', text: '36...Nxh1 37.f4 g5 38.fxg5 Rg6 ile Siyah bir kale fazladır. Motor: −3.3.' },
      ],
    },
    '36b': {
      text: '36...Nxe2: at e2 kalesini alır.',
      amac: 'Bir kale kazanmak; at e2’den f4 ve d4 karelerine sıçramaya hazırdır.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (−3.7). 36...Nxh1? 37.Qxf6 Rc1 38.Nd4 sonrası at h1’de tuzaktadır ve Beyaz üstündür (+2.9). e2 kalesini almak, atı oyunda tutar ve f4+ ile ara şah imkânı yaratır.',
      diger: [
        { move: '36...Nxh1', text: '37.Qxf6 Rc1 38.Nd4 Qc7 ile at h1’de kapana kısılır. Motor: +2.9.' },
        { move: '36...Nh5', text: '37.Rxh5 gxh5 38.Qxf6 ile Beyaz f6 kalesini alır; Siyahın şahı açık, e6 da düşmek üzere. Motor: +3.3.' },
      ],
    },
    '37w': {
      text: '37.Qxf6: vezir f6 kalesini alır ve Qxe6+ ile Qxg6+ tehdit eder.',
      amac: 'Materyali geri almak ve Siyahın açık şahına karşı tehdit yaratmak.',
      neden: 'Motor 37.Qxf6 (−3.6), 37.b4 (−3.6) ve 37.Qxe2’yi (−3.8) yakın görüyor; hepsi kaybeder. Qxf6 en doğal ve tehlikeli denemedir: Siyah yanlış bir hamle yaparsa (37...Qg7??) Beyaz kazanır.',
      diger: [
        { move: '37.Qxe2', text: '37...d4 38.Qe5 Rc2+ 39.Kf1 ile Siyah bir kale fazla ve aktif. Motor: −3.8.' },
        { move: '37.b4', text: '37...Nf4+ 38.Qxf4 g5 ile Beyaz bir taş daha kaybeder. Motor: −3.6.' },
      ],
    },
    '37b': {
      text: '37...Nf4+!: ara şah; at hem şah çeker hem e6 ile g6 karelerini korur.',
      amac: 'Beyazın Qxe6+ ve Qxg6+ tehditlerini karşılamak; sonra ...Qg7 ile vezirleri değiştirmek.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (−3.7). 37...Qg7?? 38.Qxe6+ Kf8 39.Qxc8+ (+5.8) ve 37...Qh7?? 38.Qxe6+ Qf7 39.Qxc8+ (+8.2) kaybeder. Ara şah, kombinasyonun kazanç getiren son halkasıdır.',
      diger: [
        { move: '37...Qg7', text: '38.Qxe6+ Kf8 39.Qxc8+ Ke7 ile Beyaz bir kale ve piyon kazanır. Motor: +5.8.' },
        { move: '37...Qh7', text: '38.Qxe6+ Qf7 39.Qxc8+ Qf8 ile aynı fikir. Motor: +8.2.' },
      ],
    },
    '38w': {
      text: '38.Kf2: şah f2’ye gider.',
      amac: 'Şahı merkeze yaklaştırmak ve f4 atına yakın tutmak; ileride Ke3 ile atı rahatsız etmek.',
      neden: 'Motor 38.Kg3’ü biraz daha dirençli buluyor (−3.9): 38...Nh5+ 39.Rxh5 gxh5 ile Beyaz kaleyi verir ama vezir aktif kalır. 38.Kf2 (−4.6) vezir değişimine izin verir; 38.Kh2? 38...Qh7+ (−5.0) daha da kötüdür.',
      diger: [
        { move: '38.Kg3', text: '38...Nh5+ 39.Rxh5 gxh5 40.Kf2 ile Beyaz kaleyi verir ama Siyahın şahı açık kalır. Motor: −3.9.' },
        { move: '38.Kh2', text: '38...Qh7+ 39.Kg1 Qg7 ile vezirler yine değişir. Motor: −5.0.' },
      ],
    },
    '38b': {
      text: '38...Qg7: Siyah vezirlerin değişimini önerir; Beyaz kaçamaz.',
      amac: 'Beyazın tek aktif taşını (veziri) değiştirmek ve iki piyon fazlalı oyun sonuna geçmek.',
      neden: 'Motor bunu en iyi görüyor (−4.2). 38...Rc2+ (−2.8) aktif görünür ama vezirler tahtada kalır; 38...Nh5?? ise 39.Qxg6+ (+2.8) g6’nın korumasını kaldırır.',
      diger: [
        { move: '38...Rc2+', text: '39.Kg3 Nh5+ 40.Rxh5 f4+ ile karmaşık oyun, ama vezirler tahtada kalır. Motor: −2.8.' },
        { move: '38...Nh5', text: '39.Qxg6+ Ng7 40.Qh7+ Kf8 ile Siyahın şahı açık kalır. Motor: +2.8.' },
      ],
    },
    '39w': {
      text: '39.Qxg7+: vezirler değişir.',
      amac: 'Vezirlerin değişimini kabul etmek; aksi halde vezir kaçarken daha fazla materyal kaybedilir.',
      neden: 'Motor bunu en iyi görüyor (−4.3). 39.Qd4? 39...Rc2+ (−5.7) ve 39.Qh4? 39...Rc2+ (−6.1) Siyahın kalesini ikinci sıraya sokar.',
      diger: [
        { move: '39.Qd4', text: '39...Rc2+ 40.Ke1 Rc1+ 41.Kd2 ile Siyahın kalesi ve atı Beyazın şahını avlar. Motor: −5.7.' },
      ],
    },
    '39b': {
      text: '39...Kxg7: şah geri alır. Kaleler ve atlar eşit, Siyahın iki piyon fazlası var.',
      amac: 'Materyali geri almak; şah oyun sonunda merkeze yaklaşacak.',
      neden: 'Zorunlu geri alış: başka bir hamle vezir kaybettirirdi. Motor: −4.3.',
    },
    '40w': {
      text: '40.Ke3: Beyaz şahını merkeze getirir ve f4 atına saldırır.',
      amac: 'Şahı Siyahın merkez piyonlarının önüne yerleştirmek; atı f4’ten kovmak.',
      neden: 'Oyun sonunda şah aktif olmalıdır. Motor 40.Ke3’ü en iyi görüyor (−4.5); 40.Rb1 (−4.7) pasiftir, 40.b4? 40...Rc2+ (−4.9) ise piyonu ve şahı açar.',
      diger: [
        { move: '40.Rb1', text: '40...e5 41.Ke1 Rc4 ile Siyahın kalesi a4’e saldırır. Motor: −4.7.' },
        { move: '40.b4', text: '40...Rc2+ 41.Kg3 Ne2+ 42.Kf2 ile Siyahın taşları içeri girer. Motor: −4.9.' },
      ],
    },
    '40b': {
      text: '40...e5: Siyah merkez piyonlarını ilerletir; f4 atını e5 ile destekler.',
      amac: 'Bağlantılı d ve e piyonlarını yürütmek; atı f4’te sağlamlaştırmak.',
      neden: 'Merkez piyonları oyun sonunda kazancın anahtarıdır. Motor 40...e5, 40...g5 ve 40...Rc4’ü eşit görüyor (−4.0 / −4.1).',
      diger: [
        { move: '40...g5', text: '41.Kd2 Rc4 42.b3 Rb4 ile Siyah atı g5 piyonuyla destekler. Motor: −4.1.' },
        { move: '40...Rc4', text: '41.b3 Rb4 42.Rb1 e5 ile a4 ve b3 piyonlarına baskı. Motor: −4.0.' },
      ],
    },
    '41w': {
      text: '41.Kd2: şah d2’ye geçer.',
      amac: 'Şahı Siyahın kalesinin c-hattındaki girişine (c2) karşı koymak ve d-piyonunu durdurmak.',
      neden: 'Motor bunu en iyi görüyor (−4.4). 41.Na3 (−4.6) atı kenara götürür, 41.b4? (−5.2) 41...Rc4 ile piyonları kaybettirir.',
      diger: [
        { move: '41.Na3', text: '41...Ne6 42.Rd1 Rd8 ile Siyah merkez piyonlarını ilerletir. Motor: −4.6.' },
        { move: '41.b4', text: '41...Rc4 42.Rb1 axb4 ile Siyah bir piyon daha kazanır. Motor: −5.2.' },
      ],
    },
    '41b': {
      text: '41...d4: Siyahın iki merkez piyonu ilerliyor. Beyaz burada pes etti (0-1).',
      amac: 'Bağlantılı geçer piyonları yürütmek; ...e4 ile birlikte Beyazın şahını geri itmek.',
      neden: 'Motor 41...Rc4 (−4.35), 41...e4 (−4.2) ve 41...d4’ü (−4.2) eşit görüyor; hepsi kazanır. İki piyon fazla, bağlantılı merkez piyonları ve aktif taşlarla Siyahın kazancı yalnızca zaman meselesiydi.',
      diger: [
        { move: '41...Rc4', text: '42.b3 Rb4 43.Kc2 Kf6 ile önce Beyazın piyonları bağlanır. Motor: −4.35.' },
        { move: '41...e4', text: '42.b4 Rc4 43.Rb1 exf3 ile f-piyonu da düşer. Motor: −4.2.' },
      ],
    },
  },
  exercises: [
    { id: 'tka-1', kind: 'tekrar', plan: false, title: 'g3’ün savunucusu gitti',
      source: 'Tseshkovsky – Karjakin, Hastings 2003 (35. hamle)',
      fen: '2r3k1/3q4/4prp1/pN1p1p2/P3n3/4QPP1/1P2R1K1/7R b - - 0 35',
      prompt: 'Beyaz 35.f3 ile e4 atını kovaladı. Ama f2’deki piyon bir kareyi koruyordu. Siyah ne yapar?',
      hint: 'g3 piyonunu yalnızca şah koruyor. Kxg3 olursa f-piyonunuz neye saldırır?',
      line: ['Nxg3', 'Qe5', 'Nxe2'],
      explanation: '**35...Nxg3!** 36.Kxg3 olursa 36...f4+! şaha ve e3 vezirine saldırır. Maçta 36.Qe5 Nxe2 ile Siyah bir kale kazandı. Motor: ...Nxg3 −3.5, sonraki en iyi 35...e5 +1.2.',
      link: 'Beyazın h-piyonu saldırısı ve 35.f3 g3 piyonunu yalnız bıraktı; Siyahın e4 atı bu zayıflığı hemen kullandı.' },
    { id: 'tka-2', kind: 'tekrar', plan: false, title: 'Ara şah',
      source: 'Tseshkovsky – Karjakin, Hastings 2003 (37. hamle)',
      fen: '2r3k1/3q4/4pQp1/pN1p1p2/P7/5P2/1P2n1K1/7R b - - 0 37',
      prompt: 'Siyah e2 kalesini aldı, Beyaz da f6 kalesini aldı. Beyazın veziri Qxe6+ ve Qxg6+ tehdit ediyor. Siyah ne yapar?',
      hint: 'e2 atı şah çekerek hem e6’yı hem g6’yı koruyabileceği bir kareye gidebilir mi?',
      line: ['Nf4+', 'Kf2', 'Qg7'],
      explanation: '**37...Nf4+!** At şah çeker ve e6 ile g6 karelerini korur. **38.Kf2 Qg7!** ile vezirler değişir ve Siyah iki piyon fazlasıyla bir oyun sonuna geçer. 37...Qg7?? 38.Qxe6+ ile kaybederdi. Motor: ...Nf4+ −4.4, sonraki en iyi +7.0; 38. hamlede ...Qg7 −4.4, sonraki en iyi ...Rc2+ −3.0.',
      link: 'Taşlar değiştikten sonra rakibin tehditlerini ara şahla önlemek, 35...Nxg3 kombinasyonunun son adımıydı.' },
    { id: 'tka-3', kind: 'transfer', plan: false, title: 'g3’te açılan hat',
      source: 'Shamkovich – Tal, SSCB Şampiyonası, Bakü 1961 (35. hamle)',
      fen: '6rk/p5rp/1p1p4/2p2n2/P4P2/1bPP2B1/1P4BP/R4RK1 b - - 2 35',
      prompt: 'Siyahın kaleleri g-hattında ikilenmiş. Beyazın şahının önünde g3’te bir fil ve g2’de bir fil var. Hamle Siyahta.',
      hint: 'f5 atı g3 filini alırsa g-hattı ne olur?',
      line: ['Nxg3', 'hxg3', 'Rxg3'],
      explanation: '**35...Nxg3! 36.hxg3 Rxg3** ve g2 fili g-hattında iki kaleye karşı bağlı kalır; Beyazın şahı açıktır. Motor: ...Nxg3 −5.3, sonraki en iyi 35...h5 −0.9; 36...Rxg3 −5.5, sonraki en iyi 0.0.',
      link: 'Karjakin atıyla g3 piyonunu alıp Beyazın şah önünü açtı; Tal da atını g3’te değişip g-hattını Beyazın şahına açtı.' },
    { id: 'tka-4', kind: 'transfer', plan: false, title: 'Uzun çapraz ve e4',
      source: 'Ehlvest – Kasparov, Linares turnuvası 1991 (31. hamle)',
      fen: '2k3rr/1p3p2/p1b2n2/q1p1pPp1/2P1P3/P1P1N1Pp/1QB4P/R3R2K b - - 0 31',
      prompt: 'Siyahın c6 fili uzun çaprazda h1’deki şaha bakıyor, ama e4 piyonu yolu kapatıyor. Hamle Siyahta.',
      hint: 'e4 piyonunu f6 atı ile alırsanız c6 fili ne zaman devreye girer?',
      line: ['Nxe4', 'Bxe4', 'Bxe4+'],
      explanation: '**31...Nxe4! 32.Bxe4 Bxe4+** ve fil şahla e4’e gelir; Siyah bir piyon kazanır ve uzun çapraz açılır. Motor: ...Nxe4 −2.3, sonraki en iyi 31...Rd8 −0.7.',
      link: 'Karjakin b7 fili ve atlarıyla e4 piyonuna baskı yapıp 15...Ncxe4 ile onu aldı; Kasparov da c6 filinin desteğiyle e4’ü alıp uzun çaprazı açtı.' },
  ],
  sources: [
    { title: 'ChessBase: Peter Heine Nielsen wins Hastings (2002/03 Premier raporu)', url: 'https://en.chessbase.com/post/peter-heine-nielsen-wins-hastings' },
    { title: 'BritBase: Hastings 2002/03 Premier – çapraz tablo', url: 'https://saund.org.uk/britbase/pgn/200212hast-viewer.html' },
    { title: 'Chess-Sector (OlimpBase arşivi): Hastings 2002/03', url: 'https://www.olimpbase.org/data/Chess_Sector/hast0203.htm' },
    { title: 'Wikipedia: Vitaly Tseshkovsky', url: 'https://en.wikipedia.org/wiki/Vitaly_Tseshkovsky' },
    { title: 'Exeter Chess Club: The Closed Sicilian', url: 'https://exeterchessclub.org.uk/content/closed-sicilian' },
  ],
};
