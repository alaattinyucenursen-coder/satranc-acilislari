// Mats Persson – Gata Kamsky, Avrupa Kulüpler Kupası, Eilat 2012 (3. tur). Kaynak: PgnMentor (Kamsky.pgn).
export default {
  id: 'persson-kamsky-2012',
  theme: '...b4 ile c3 atını kovmak ve h-piyonunu sonuna kadar itmek',
  white: 'Mats Persson', black: 'Gata Kamsky',
  whiteShort: 'Persson', blackShort: 'Kamsky',
  event: 'Avrupa Kulüpler Kupası', site: 'Eilat', year: 2012, eco: 'B40',
  variation: 'Sicilya Savunması, 2.Nf3 e6 3.Nc3 a6 4.g3 b5: kapalı kuruluş', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. Nc3 a6 4. g3 b5 5. Bg2 Bb7 6. d3 Nc6 7. O-O Nge7 8. Be3 Ng6 9. a4 b4 10. Ne2 Be7 11. d4 cxd4 12. Nexd4 Na5 13. Nd2 O-O 14. f4 Rc8 15. N4b3 f5 16. e5 Bxg2 17. Kxg2 d6 18. exd6 Bxd6 19. Rf2 Be7 20. Nxa5 Qxa5 21. Nb3 Qc7 22. Bd4 Bf6 23. Bxf6 Rxf6 24. Qf3 e5 25. Qd5+ Qf7 26. Rd1 exf4 27. gxf4 Re6 28. Qd7 Qxd7 29. Rxd7 Re4 30. Kg3 h5 31. h4 Re3+ 32. Rf3 Rxf3+ 33. Kxf3 Nxh4+ 34. Kg3 Ng6 35. Nd4 h4+ 36. Kf3 h3 37. Nxf5 h2 38. Kg2 Rxc2+ 39. Kh1 Nxf4 40. Rxg7+ Kf8 41. Rg4 Nd3 42. Rd4 Ne5 43. Rxb4 Nf3 44. Rb8+ Kf7 45. Ng3 Rc1+ 46. Kg2 Rg1+ 47. Kf2 Nh4 0-1`,

  summary: 'Eilat’taki 2012 Avrupa Kulüpler Kupası’nın 3. turunda SOCAR Azerbaycan, Oslo Schakselskap’ı 6–0 yendi; bu skorun bir puanı, 5. masada 2755 reytingli Gata Kamsky’nin 2234 reytingli İsveçli Mats Persson’a karşı kazandığı bu uzun oyundan geldi. Sonuç **0-1: Siyahla Kamsky kazandı.** Persson Kapalı Sicilya tipi bir g3–Bg2–d3 kuruluşu seçti; Kamsky bir yıl önce Ehlvest’e karşı da oynadığı **...e6, ...a6, ...b5, ...Bb7** düzeniyle cevap verdi. 9.a4’e **9...b4** ile c3 atını kovdu, Beyazın f4 hamlesine **15...f5** ile set çekti ve 16.e5 uzun çaprazı kapatınca ...Bxg2 ile Beyazın en iyi filini değişti. Orta oyun dengede kaldı; Kamsky’nin asıl silahı sabır oldu: 24...e5 ile merkezi açtı, kaleleri ve atı aktif tuttu, 30...h5 ile şah kanadında piyon çoğunluğunu harekete geçirdi ve 33...Nxh4+ ile **geçer h-piyonu** yarattı. Bu piyon 37...h2’ye kadar ilerleyip Beyazın şahını h1 köşesine hapsetti. Persson uzun süre doğru savundu (motor 44. hamlede oyunu yine eşit görüyor), ama 41.Rg4?! ile ilk kez geriye düştü ve **45.Ng3??** ile kalesini h-hattından uzakta bırakınca 45...Rc1+ 46.Kg2 Rg1+ 47.Kf2 Nh4 ile oyun bitti.',
  intro: 'Oyun modülün başlığındaki 2.Nc3 e6 3.g3 a6 sırasıyla değil, **1.e4 c5 2.Nf3 e6 3.Nc3 a6 4.g3 b5 5.Bg2 Bb7** sırasıyla başladı; 6.d3 ve 7.O-O sonrası taşlar modüldeki yapıya oturdu: Beyazda Nc3, g3, Bg2, d3, Siyahta ...e6, ...a6, ...b5, ...Bb7. Beyaz 3...a6’dan sonra 4.d4 ile Kan Sicilyası’na girebilirdi; 4.g3 ile teori yerine kapalı, manevralı bir oyun istedi. Kapalı Sicilya’da Beyazın klasik planı şah kanadında f4–f5 ile oynamak, Siyahınki ise vezir kanadında piyonlarla karşı oyun kurmaktır; burada Siyahın ...b5–b4 ve uzun çapraz filiyle bunu çok erken yapabilmesi bu kuruluşun cazibesidir. Kamsky’nin fikirleri üç tane: **...b4** ile c3 atını kovup e4 ve d5 üzerindeki kontrolünü azaltmak, **...Bb7** ile e4’e baskı yapıp gerekirse g2 filiyle değişmek ve Beyaz f4 oynadığında **...f5** ile f4–f5 saldırısını baştan durdurmak. Oyunun ikinci yarısı ise bir oyun sonu dersi: kale ve at oyun sonunda kenardaki geçer piyonun gücü ve rakibin taşlarının bir tek hatayla nasıl dağılabileceği.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Açık Sicilya teorisinden kaçınıp g3–Bg2–d3–O-O ile sağlam bir kuruluş kurmak; Be3 ile c5’e bakıp d4 ilerleyişini hazırlamak (motor açılışta 4.d4 ve 6.d4’ü biraz daha iyi buluyor).',
      '9.a4 ile b5 piyonunu sorgulamak; ...b4 gelince atı e2 üzerinden d4’e getirmek. Motor burada 9.h4 ya da 9.Nd2’yi (yaklaşık +0.65) tercih ediyor: h4–h5 ile g6 atını kovalamak daha tehlikeliydi.',
      '11.d4 ile merkezi açıp d4’teki atla c6 ve e6’ya baskı yapmak; 13.Nf5!? gibi taktik fırsatlara dikkat etmek (motor: +0.3).',
      '14.f4 ile alan kazanıp f4–f5 ile e6’ya ve g6 atına saldırmak; Siyah ...f5 ile karşılık verince 16.e5 ile d6 ve f6 karelerini almak — ama bu, kendi g2 filinin çaprazını kapatır.',
      'Orta oyunda d-hattını kaleyle almak ve d5’e vezir yerleştirmek (25.Qd5+, 26.Rd1); motor 25.fxe5’i daha sağlam buluyor.',
      'Oyun sonunda f4 ve h4 piyonlarını korumak, kaleyi yedinci yatayda aktif tutmak; geçer h-piyonu doğunca kaleyi **piyonun arkasına ya da h-hattına** getirmek (45.Rh8 ya da 45.Rc8 eşitliği koruyordu).',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...e6–...a6–...b5–...Bb7 ile esnek bir kuruluş: d4 gelirse Kan Sicilyası’na, gelmezse vezir kanadında alan kazanmaya hazır olmak.',
      '**...b4** ile c3 atını kovmak (9...b4); at e2’ye ya da b1’e gidince Siyah e4 ve d5 üzerindeki baskıyı artırır, ...Na5–c4 gibi atlamalar için kareler açılır.',
      'Atları g6’ya (f4 ve h4’ü tutar, ...f5’e yol açar) ve a5’e (c4 karesine) koymak; uzun çaprazdaki Bb7 ile e4’e bakmak.',
      'Beyazın f4’üne **...f5** ile karşılık vermek; 16.e5 gelince ...Bxg2 ile filleri değişip ...d6 ile e5 zincirini kırmak.',
      'Merkezde ...e5 ile geri kalmış e6 piyonundan kurtulmak ve f4’e baskı kurmak; 25...Kh8! ile vezirleri tahtada tutmak daha da güçlüydü (motor: −1.4).',
      'Kale oyun sonunda h- ve g-piyonlarını ilerletip (30...h5) Beyaz şahını sıkıştırmak, h4 piyonunu kazanıp **geçer h-piyonunu** yedinci yataya kadar itmek.',
      'Piyon h2’ye gelince kale ve atla birinci ve ikinci yatayda şahlar aramak; Beyazın taşları korumasız kalırsa ...Rc1+–...Rg1+ ve ...Nh4 ile mat ya da taş kazanmak.',
    ] },
  },
  critical: [
    { move: '9b', title: '9...b4: c3 atını kovmak', text: 'Beyaz 9.a4 ile b5 piyonuna saldırdı. 9...bxa4? 10.Nxa4 sonrası Beyazın atı c5’e ve b6’ya bakar, e5 ile uzun çaprazı da açar (Motor: +1.9). 9...Qb6 (+0.9) ve 9...Be7 10.axb5 axb5 11.Rxa8 (+1.0) a-hattını Beyaza verir. **9...b4** (+0.4) ise piyonu korunan bir kareye iter ve c3 atını merkezden uzaklaştırır: at artık d5 ve e4’ü desteklemez. Bu kuruluşun tipik cevabıdır; modüldeki Sigurjonsson – Portisch (1976) oyununda da aynı fikir var.' },
    { move: '13w', title: '13.Nd2: kaçan 13.Nf5!?', text: 'Siyah 12...Na5 ile atını kenara götürdü ve şahı hâlâ e8’de. Motor burada **13.Nf5!** fedasını gösteriyor: 13...exf5 14.exf5 O-O 15.fxg6 hxg6 sonrası malzeme eşitlenir, ama g2 filinin çaprazı açılır ve Siyahın şah kanadı zayıflar (Motor: +0.3). Persson sağlam 13.Nd2’yi (−0.1) seçti; at c4’ü tutar ve f4 hazırlanır, ama Siyah rahatça rok yaptı ve eşitliği yakaladı.' },
    { move: '15b', title: '15...f5: f4–f5’e set', text: 'Beyaz 14.f4 ile f5 ilerleyişini hazırlıyordu; f5 gelseydi e6 ve g6 atı hedef olurdu. Kamsky **15...f5** ile f5 karesini kalıcı olarak kapattı ve e4’e bir kez daha saldırdı. Beyaz 16.e5 ile cevap verince uzun çapraz kapandı ve 16...Bxg2 17.Kxg2 d6 ile Siyah hemen zinciri kırdı. Motor 15...Re8 ve 15...f5’i eşit görüyor (−0.1); f5 daha keskin ve daha net bir plandır.' },
    { move: '25w', title: '25.Qd5+ ve 25...Qf7: iki taraf da en iyisini kaçırdı', text: '24...e5 sonrası Beyazın en iyi yolu 25.fxe5 Nxe5 26.Qf4 idi (Motor: −0.8). 25.Qd5+ şah çeker ama vezir d5’te tek başına kalır; Siyah **25...Kh8!** ile vezirleri tahtada tutsaydı 26.fxe5 Nxe5 27.Re2 Ng4 ile atın f2 ve h2’ye atlayışları Beyazı zor durumda bırakırdı (Motor: −1.1/−1.4). Kamsky 25...Qf7 ile vezir değişimini önerdi ve oyun eşitlendi (0.0).' },
    { move: '33b', title: '33...Nxh4+: geçer piyon doğuyor', text: 'Kaleler 32...Rxf3+ ile değişince Beyazın h4 piyonu korumasız kaldı. 33...Nxh4+ şahla piyonu alır; artık h-hattında Beyaz piyonu yoktur ve h5 piyonu **geçer piyondur**. Motor 33...Rxc2’yi (−0.4) ve maç hamlesini (−0.3) aynı görüyor, ama maç hamlesinin pratik değeri büyük: Beyaz kalan bütün oyun boyunca bu piyonu izlemek zorunda kaldı.' },
    { move: '37b', title: '37...h2: piyon yedinci yatayda', text: 'Beyaz 37.Nxf5 ile f5’i aldı ve kale d7 ile g7’yi tehdit ediyor. Kamsky g7’yi korumak (37...Kf8, −0.05) yerine **37...h2** ile piyonu iter: 38.Kg2 zorunludur (38.Rd1? −2.6) ve 38...Rxc2+ 39.Kh1 ile Beyazın şahı h1’e, piyonun önüne hapsolur. Motor: 37...h2 −0.8. Beyaz g7’yi alacak, ama şahı oyun dışı kalacaktır.' },
    { move: '41w', title: '41.Rg4?! ilk gerçek kayıp', text: 'Beyaz 40.Rxg7+ ile piyonu geri aldı ve oyun eşitti. Doğru devam **41.Ra7!** idi: 41...Rxb2 42.Rxa6 ile a-piyonu geçer olur, Beyaz karşı oyun bulur (Motor: −0.15). 41.Rg4 f4 atına saldırır ama b2 piyonunu ve vezir kanadını bırakır; 41...Nd3 sonrası motor −1.6 diyor. Kamsky 42...Ne5?! ile (42...Rd2! −1.8 yerine) avantajı geri verdi (−0.3).' },
    { move: '45w', title: '45.Ng3?? kale h-hattından uzakta', text: 'Siyahın h2 piyonu h1’e bir kare uzakta; onu tutan tek şey Beyazın h1’deki şahı. **45.Rh8!** (−0.3) kaleyi piyonun arkasına getirir: 45...Rc1+ 46.Kg2 Rg1+ 47.Kxf3 sonrası h1 karesi kaleyle korunduğu için piyon vezir olamaz; 45.Rc8 (−0.2) de kaleleri değişerek eşitliği korur. Maçtaki 45.Ng3?? atı g-hattına, Siyah kalesinin önüne koyar: 45...Rc1+ 46.Kg2 Rg1+ ve 47.Kxf3 Rxg3+ 48.Kxg3 h1=Q kaybeder (Motor: −3.8).' },
  ],
  lessons: [
    'Kapalı Sicilya tipi g3–Bg2–d3 kuruluşunda Beyaz a4 ile b5’i sorgularsa Siyahın tipik cevabı **...b4**’tür: değişmek a-hattını ve uzun çaprazı Beyaza açar, ilerlemek ise c3 atını merkezden uzaklaştırır.',
    'Beyazın f4–f5 planına karşı **...f5** ile set çekmek etkili bir yöntemdir; Beyaz e5 ile cevap verirse kendi g2 filinin çaprazını kapatır ve Siyah ...Bxg2 ile değişip ...d6 ile zinciri kırar.',
    'Rakip hata yapmıyorsa bile oyunu tahtada tutmak kazanç getirebilir: Kamsky eşit bir kale-at oyun sonunda piyon çoğunluğunu ilerleterek (30...h5, 35...h4+) rakibine sürekli soru sordu.',
    'Kenardaki geçer piyon yedinci yataya gelince rakibin şahını köşeye hapseder; o andan sonra her şah çekişi, her çatal tehlikelidir.',
    'Geçer piyona karşı kalenin en iyi yeri piyonun **arkası** ya da vezirleneceği hattır (45.Rh8!). Kale başka işlerle uğraşırsa küçük bir taktik oyunu bitirir.',
    'Bir taşı başka bir taşın (burada g3 atının) önüne koymadan önce rakibin şahlarını sayın: 45.Ng3?? atı hem kale şahına hem de ...Rxg3 değişimine açık bıraktı.',
    'Avantajı kaçırınca paniğe kapılmamak gerekir: Kamsky 25...Qf7 ve 42...Ne5 ile iki kez kazanç şansını kaçırdı, ama sabırla oynamaya devam etti ve rakibin hatasını bekledi.',
  ],
  qa: [
    { q: 'Kim kazandı ve kazananın oyunu nasıl kurduğu özetle nedir?', a: 'Sonuç 0-1: Siyahla Gata Kamsky kazandı. Açılışta ...b4 ile c3 atını kovdu, ...f5 ile Beyazın f4–f5 saldırısını durdurdu ve ...Bxg2 ile filleri değişip ...d6 ile merkezi açtı. Oyun sonunda 30...h5 ile şah kanadı piyonlarını yürüttü, 33...Nxh4+ ile geçer piyon yarattı ve 37...h2 ile Beyaz şahını h1’e hapsetti. 45.Ng3?? hatasını 45...Rc1+ 46.Kg2 Rg1+ 47.Kf2 Nh4 ile hemen cezalandırdı.' },
    { q: 'Beyaz neden 4.d4 ile Açık Sicilya’ya girmedi?', a: '4.d4 cxd4 5.Nxd4 sonrası Kan Sicilyası’na girilir; bu, Siyahın çok iyi bildiği ve teorisi derin bir alan. Motor 4.d4’ü biraz daha iyi buluyor (+0.46’ya karşı +0.38), ama fark küçük. Persson 4.g3 ile daha az teori isteyen, manevralı bir Kapalı Sicilya oyunu seçti; daha güçlü bir rakibe karşı bu anlaşılır bir pratik tercih.' },
    { q: 'Siyah neden atını f6 yerine e7–g6 üzerinden geliştirdi?', a: 'Kan tipi kuruluşlarda ...Nf6 çoğu zaman e5 ile kovalanır ve at kötü bir kareye gider. 7...Nge7 ve 8...Ng6 ile at f4 ve e5 karelerini tutar, f-piyonunun önünü açık bırakır (15...f5 böyle mümkün oldu) ve uzun çaprazı kapatmaz. Bedeli, atın g6’da h4–h5 ile kovalanabilmesidir; motor bu yüzden 9.h4’ü öneriyordu.' },
    { q: '9.a4 iyi bir hamle miydi?', a: 'Motor 9.a4’ü pek beğenmiyor (+0.33); 9.h4 ve 9.Nd2 ile (+0.65 civarı) Beyaz şah kanadında daha tehlikeli olurdu. 9.a4 b5’i sorgular, ama 9...b4 sonrası c3 atı geri çekilmek zorunda kalır ve b4 piyonu Beyazın vezir kanadını sıkıştırır. a4 piyonu da ileride ...Na5–c4 gibi atlamalar için b3 karesini zayıflatır.' },
    { q: 'Siyah 15...f5 ile e6 piyonunu zayıflatmadı mı?', a: 'Evet, e6 piyonu bir süre geri kalmış (backward) piyon oldu ve Beyaz 16.e5 ile d6 ve f6’yı aldı. Ama Siyah iki şey kazandı: f4–f5 saldırısı tamamen durdu ve 16.e5 Beyazın g2 filinin çaprazını kapattığı için 16...Bxg2 ile Beyazın en iyi taşı değişildi. Ardından 17...d6 ile e5 zinciri kırıldı, e6 piyonu 24...e5 ile ilerledi ve zayıflık ortadan kalktı.' },
    { q: 'Siyah orta oyunda nerede kazanç şansını kaçırdı?', a: '25.Qd5+ sonrası **25...Kh8!** güçlüydü: vezirler tahtada kalır, 26.fxe5 Nxe5 27.Re2 Ng4 ile at f2 ve h2’ye atlar, Beyazın şahı açık kalırdı (Motor: −1.1/−1.4). Kamsky 25...Qf7 ile vezir değişimini önerdi ve motor oyunu yine eşit gördü (0.0). Muhtemelen daha az riskli, kendi kontrolündeki bir oyun sonunu tercih etti; bunun nedenini bilmiyoruz.' },
    { q: 'Beyazın 27.gxf4 hamlesi neden önemliydi?', a: 'Motor 27.Qxf7+ Rxf7 28.gxf4’ü biraz daha iyi buluyor, ama fark küçük (−0.12’ye karşı −0.25). Asıl önemli olan yapı değişikliğiydi: g-piyonu f4’e gidince Beyazın h-piyonu yalnız kaldı ve şahın etrafı açıldı. Siyah 30...h5 ve 31...Re3+ ile tam bu zayıflıklara oynadı ve 33...Nxh4+ ile h-piyonunu kazandı.' },
    { q: 'Persson oyun sonunda nerede kurtulabilirdi?', a: 'İki yerde. 41. hamlede 41.Ra7! Rxb2 42.Rxa6 ile a-piyonunu geçer yapıp eşitliği korurdu (Motor: −0.15); 41.Rg4 sonrası durum −1.6’ya düştü. Kamsky 42...Ne5?! ile bunu geri verince 44. hamlede oyun yine eşitti; o noktada **45.Rh8!** (kale h-hattında, h1’i korur) ya da 45.Rc8 ile kale değişimi (−0.2/−0.3) beraberliği getirirdi.' },
    { q: '45.Ng3 neden hemen kaybettiriyor?', a: 'At g3’te Siyah kalesinin g-hattında duruyor ve Beyazın kalesi b8’de, h1 karesinden uzak. 45...Rc1+ 46.Kg2 (46.Nf1?? 4 hamlede mat) Rg1+ sonrası 47.Kxf3 Rxg3+ 48.Kxg3 h1=Q ile Siyah vezir alır. 47.Kf2 ile atı korumak da yetmez: 47...Nh4! g2 karesini tutar, ...Rg2+ ve ...h1=Q tehdit edilir (Motor: −5.5). Persson burada terk etti.' },
  ],
  sources: [
    { title: 'ChessBase: ECCC Eilat – ...and then there were three (3. tur raporu, SOCAR – Oslo Schakselskap 6–0, Kamsky – Persson)', url: 'https://en.chessbase.com/post/eccc-eilat-and-then-there-were-three' },
    { title: 'ChessBase: ECCC Eilat – Socar overtakes Saint-Petersburg, wins Gold', url: 'https://en.chessbase.com/post/eccc-eilat-socar-overtakes-saint-petersburg-wins-gold' },
    { title: 'OlimpBase: Oslo Schakselskap, Eilat 2012 (Mats Persson’un sonuçları)', url: 'https://www.olimpbase.org/2012c/2012osls.html' },
    { title: 'OlimpBase: SOCAR Baku, Eilat 2012 (Kamsky’nin sonuçları)', url: 'https://olimpbase.org/2012c/2012soca.html' },
    { title: 'Exeter Chess Club: The Closed Sicilian (Kapalı Sicilya’da planlar)', url: 'https://exeterchessclub.org.uk/content/closed-sicilian' },
    { title: 'Chessiverse: Sicilian Defense – Closed Variation', url: 'https://chessiverse.com/resources/openings/closed-sicilian' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Beyaz merkeze şah piyonuyla çıkar; vezire ve f1 filine yol açar.',
      amac: 'Merkezde alan almak ve taşları hızlı geliştirmek.',
      neden: 'Persson 1.e4 oyuncusu; Sicilya gelince Açık Sicilya mı yoksa kapalı bir kuruluş mu seçeceğine sonraki hamlelerde karar verecek.',
      diger: [
        { move: '1.d4', text: 'Kapalı oyunlara gider (Motor: +0.2); Kamsky’nin Sicilya hazırlığını tamamen devre dışı bırakırdı.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); çoğu zaman d4’lü yapılara döner.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine kanattan, c-piyonuyla bakar.',
      amac: 'Simetriyi bozmak ve iki tarafa da kazanma şansı veren dengesiz bir oyun kurmak.',
      neden: 'Kendisinden 500 puan düşük bir rakibe karşı Kamsky’nin beraberlik değil galibiyet araması gerekiyordu; Sicilya buna en uygun açılışlardan biridir.',
      diger: [
        { move: '1...e5', text: 'Simetrik açık oyunlar (Motor: +0.2); daha az dengesizlik demektir.' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.35); oyunda Siyahın ...e6’lı yapısı zaten biraz buna benzeyecek.' },
      ],
    },
    '2w': {
      text: '2.Nf3: At gelişir, d4’e ve e5’e bakar.',
      amac: 'Açık Sicilya’ya (d4) da kapalı kuruluşa (g3) da yol bırakmak.',
      neden: '2.Nf3 en esnek hamledir; modülün başlığındaki 2.Nc3 hemen kapalı kuruluşu ilan ederdi. Persson önce Siyahın kuruluşunu görmek istedi.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya’nın klasik başlangıcı (Motor: +0.34); 2...e6 3.g3 a6 ile modülün sırasına girilir.' },
        { move: '2.c3', text: 'Alapin (Motor: +0.33); d4’ü piyonla destekler ve teoriden kaçınır.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini destekler ve f8 filine yol açar.',
      amac: 'Kan, Taimanov ve Paulsen gibi ...e6’lı Sicilya sistemlerinin esnekliğini korumak.',
      neden: '2...e6 Beyazın Bb5 tipi anti-Sicilya’larını daha az etkili kılar ve Siyahın kuruluşunu son ana kadar gizler. Kamsky’nin modüldeki Ehlvest oyununda da (2011) aynı hamle sırası var.',
      diger: [
        { move: '2...d6', text: 'Najdorf/Dragon yolu (Motor: +0.47); 3.Bb5+ gibi yan yollara izin verir.' },
        { move: '2...Nc6', text: 'Klasik yol (Motor: +0.33); 3.Bb5 Rossolimo’ya izin verir.' },
      ],
    },
    '3w': {
      text: '3.Nc3: Beyaz d4’ü erteleyip atını geliştirir; e4’ü korur ve d5’e bakar.',
      amac: 'Siyahın hangi kuruluşu seçeceğini görmeden merkez yapısını belirlememek.',
      neden: 'Bu hamle hem 4.d4 ile Açık Sicilya’ya dönmeye hem de g3’lü kapalı oyuna izin verir. Siyahın ...d5 kırılmasını da zorlaştırır.',
      diger: [
        { move: '3.d4', text: 'Açık Sicilya (Motor: +0.34): 3...cxd4 4.Nxd4 a6 ile Kan’a girilir.' },
        { move: '3.c3', text: 'Alapin’e geçiş (Motor: +0.28); 3...d5 ile Siyah rahat eşitlik arar.' },
      ],
    },
    '3b': {
      text: '3...a6: Siyah b5 karesini kontrol eder ve ...b5 ilerleyişini hazırlar.',
      amac: 'Vezir kanadında ...b5 ile alan almak; d4 gelirse Kan Sicilyası’na, gelmezse ...b5–b4 planına hazır olmak.',
      neden: 'Açık Sicilya’da ...a6, Beyazın atının b5’e gelmesini önler; burada ise asıl işi ...b5’e destek olmaktır. 3...Nc6 bir Taimanov’a izin verirdi; Kamsky’nin seçimi daha esnek.',
      diger: [
        { move: '3...Nc6', text: '4.d4 cxd4 5.Nxd4 ile Taimanov (Motor: +0.37); klasik ve sağlam.' },
        { move: '3...d6', text: 'Scheveningen tipi (Motor: +0.66); Beyaza d4 ile rahat bir Açık Sicilya verir.' },
      ],
    },
    '4w': {
      text: '4.g3: Beyaz kapalı kuruluşu seçer; fil g2’den uzun çaprazda e4’ü destekleyecek.',
      amac: 'Kan teorisinden kaçınıp g3–Bg2–d3–O-O ile sağlam, manevralı bir yapı kurmak; ileride f4 ile şah kanadında oynamak.',
      neden: 'Motor 4.d4’ü biraz daha iyi buluyor (+0.46), ama 4.g3 (+0.38) Beyaza daha az teori ve daha tanıdık planlar verir. Bedeli, ...b5–b4 ile c3 atının erken kovalanabilmesidir.',
      diger: [
        { move: '4.d4', text: '4...cxd4 5.Nxd4 ile Kan Sicilyası (Motor: +0.46): Siyahın en iyi bildiği alana girmek demektir.' },
        { move: '4.a3', text: '...b4’ü önceden önler (Motor: +0.19); ama bir tempo harcar ve 4...b5 5.g3 Bb7 sonrası Siyah yine rahattır.' },
      ],
    },
    '4b': {
      text: '4...b5: Siyah vezir kanadında alan alır.',
      amac: '...Bb7 ile uzun çaprazı tutmak ve ...b4 ile c3 atını kovmak.',
      neden: 'Beyaz d4’ü ertelediği için Siyah merkezde hemen bir şey yapmak zorunda değil; zamanını vezir kanadında kullanıyor. Kamsky aynı kuruluşu 2011’de Ehlvest’e karşı da oynamıştı.',
      diger: [
        { move: '4...Qc7', text: 'Motorun ilk tercihi (+0.26): e5’i tutar, ...Nc6 ve ...d6 ile Paulsen tipi bir kuruluşa gider.' },
        { move: '4...d6', text: 'Sağlam bir Scheveningen yapısı (Motor: +0.38); daha pasif.' },
        { move: '4...d5', text: 'Merkezde hemen kırılma: 5.exd5 exd5 6.d4 Nc6 7.Bg2 (Motor: +0.64); merkez açılır ve Siyahın d5 piyonu hedef olur. Kamsky daha yavaş yolu seçti.' },
      ],
    },
    '5w': {
      text: '5.Bg2: Fil uzun çaprazda; e4’ü korur ve ileride b7 filiyle karşı karşıya gelir.',
      amac: 'Kuruluşu tamamlamak ve rok yapmaya hazırlanmak.',
      neden: 'g3’ün mantıklı devamıdır. 5.d4 de mümkündü, ama Persson kapalı planına sadık kaldı.',
      diger: [
        { move: '5.d3', text: 'Aynı yapıya ulaşır (Motor: +0.37); hamle sırası farkı.' },
        { move: '5.d4', text: '5...cxd4 6.Nxd4 Bb7 ile g3’lü bir Açık Sicilya (Motor: +0.36).' },
      ],
    },
    '5b': {
      text: '5...Bb7: Fil uzun çaprazda e4’e bakar ve g2 filine karşı çıkar. Modülün yapısı oluştu.',
      amac: 'e4 piyonuna baskı yapmak; Beyaz e5 oynarsa ya da çapraz açılırsa g2 filiyle değişmek.',
      neden: 'Motor da en iyi hamle olarak bunu gösteriyor (+0.38). Fil b7’de ...d5 kırılmasını da destekler. Diğer geliştirmeler (5...Ne7 +0.54, 5...Nc6 +0.57) daha zayıf.',
      diger: [
        { move: '5...Ne7', text: 'At önce gelişir (Motor: +0.54); fil b7’ye sonra gelir, ama Beyaz d4 ile merkezi açabilir.' },
        { move: '5...Nc6', text: 'Motor: +0.57; at c6’da b5 piyonunu korumaz ve a4 fikirleri güçlenir.' },
      ],
    },
    '6w': {
      text: '6.d3: Beyaz e4’ü piyonla sağlamlaştırır.',
      amac: 'Uzun çaprazdaki baskıya karşı e4’ü korumak ve Be3, Nd2 ya da f4 gibi planlara alan açmak.',
      neden: 'Motor 6.d4’ü (+0.44) öneriyor: 6...cxd4 7.Nxd4 b4 8.Na4 ile oyun açılır. Persson d3 (+0.27) ile kapalı yapıyı korudu; e4’ün sürekli korunması gerektiğinden bu sağlam ama biraz pasif bir seçim.',
      diger: [
        { move: '6.d4', text: '6...cxd4 7.Nxd4 b4 8.Na4 (Motor: +0.44); at kenarda, ama Beyaz merkezde aktif.' },
        { move: '6.Qe2', text: 'e4’ü vezirle korur (Motor: +0.16); vezir erken bağlanır.' },
      ],
    },
    '6b': {
      text: '6...Nc6: At d4 ve e5 karelerine bakar.',
      amac: 'Merkezi kontrol etmek ve ileride ...Na5 ya da ...Nd4 gibi atlamalara hazırlanmak.',
      neden: 'Ehlvest’e karşı Kamsky burada 6...d6 oynamıştı. 6...Nc6 daha aktif, ama motor 6...Be7 (+0.18) ve 6...d6’yı (+0.21) biraz daha sağlam buluyor (6...Nc6 +0.43). At c6’da Beyazın d4 ilerleyişini zorlaştırır.',
      diger: [
        { move: '6...d6', text: 'Ehlvest – Kamsky (2011) oyunundaki hamle (Motor: +0.21); e5 karesini tutar.' },
        { move: '6...Be7', text: 'Motorun ilk tercihi (+0.18): önce rok, sonra ...d6.' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini f-hattına getirip f4 planını hazırlamak.',
      neden: 'Kapalı Sicilya’da Beyazın kalesi f-hattında f4–f5 ilerleyişini destekler. Motor da en iyi hamle olarak rok gösteriyor (+0.36).',
      diger: [
        { move: '7.Bf4', text: 'd6’ya baskı yapar (Motor: +0.23); fil ...e5 ile kovulabilir.' },
        { move: '7.Be3', text: 'Önce fil; rok bir sonraki hamle. Benzer yapılara döner.' },
      ],
    },
    '7b': {
      text: '7...Nge7: At e7’ye gelir; hedefi g6.',
      amac: 'Atı g6’ya getirip f4 ve e5 karelerini tutmak; f7 piyonunun önünü kapatmamak.',
      neden: '7...Nf6 8.e5 ile kovalanırdı (Motor: +1.35). e7 üzerinden giden at ...f5 ilerleyişine yol bırakır; 15...f5 böyle mümkün olacak. Motor 7...Rc8, 7...Qc7 ve 7...d6’yı (+0.45 civarı) biraz daha iyi buluyor (7...Nge7 +0.59).',
      diger: [
        { move: '7...d6', text: 'Sağlam (Motor: +0.46); e5’i tutar ve ...Nf6 için zemin hazırlar.' },
        { move: '7...Qc7', text: 'Vezir c7’de e5’i ve c-hattını tutar (Motor: +0.45).' },
        { move: '7...Nf6', text: '8.e5 Ng8 ile at geri döner (Motor: +1.35); Kan kuruluşlarında bu yüzden ...Nf6 çoğu zaman ertelenir.' },
      ],
    },
    '8w': {
      text: '8.Be3: Fil c5 piyonuna bakar ve d4 ilerleyişini destekler.',
      amac: 'Merkezde d4 ile oyunu açmaya hazırlanmak ve kara karelerde aktif olmak.',
      neden: 'Motor 8.Ne2 (+0.62) ve 8.h4’ü (+0.50) de öneriyor; Be3 (+0.51) aynı düzeyde. Fil e3’te ileride ...Ng6’nın ...Nf4 ya da ...Nh4 sıçramalarına karşı da koruma sağlar.',
      diger: [
        { move: '8.Ne2', text: '...b4’ten önce atı yeniden düzenler (Motor: +0.62); c3 ve d4 için yol açar.' },
        { move: '8.h4', text: 'g6’ya gelecek ata karşı önceden h4–h5 (Motor: +0.50).' },
      ],
    },
    '8b': {
      text: '8...Ng6: At g6’ya gelir; f4 ve e5’i kontrol eder.',
      amac: 'Beyazın f4 ilerleyişini zorlaştırmak ve e5 karesini tutmak.',
      neden: 'At burada f4–f5 planına karşı ilk savunmadır. Motor 8...d6’yı (+0.52) biraz daha iyi buluyor; Ng6 (+0.60) h4–h5 ile kovalanma riskini taşır. 8...Nc8? (+0.82) ise 9.e5 ile uzun çaprazı açtırırdı.',
      diger: [
        { move: '8...d6', text: 'Motorun ilk tercihi (+0.52): e5’i tutar; at e7’de kalır.' },
        { move: '8...Nc8', text: 'Motor: +0.82; 9.e5 Na5 10.Ng5 Bxg2 sonrası Beyaz aktif.' },
      ],
    },
    '9w': {
      text: '9.a4: Beyaz b5 piyonuna saldırır.',
      amac: 'Siyahın vezir kanadı piyonlarını sorgulamak; ...bxa4 ile değişim gelirse a-hattını açmak.',
      neden: 'Motor bu hamleyi beğenmiyor (+0.33): 9.h4 (+0.69) ile g6 atını kovmak ya da 9.Nd2 (+0.65) ile f4’ü hazırlamak daha güçlüydü. 9.a4 Siyaha ...b4 ile tempo kazandırır ve b3 karesini zayıflatır.',
      diger: [
        { move: '9.h4', text: 'Motorun ilk tercihi (+0.69): 9...d6 10.Nd2 Be7 11.f4 ile şah kanadında piyonlar ilerler; g6 atı h5 ile kovulabilir.' },
        { move: '9.Nd2', text: 'f4 için yol açar (Motor: +0.65); kapalı Sicilya’nın klasik planı.' },
      ],
    },
    '9b': {
      text: '9...b4!: Siyah değişmez, ilerler; c3 atı kovulur.',
      amac: 'c3 atını merkezden uzaklaştırmak; at artık d5 ve e4’ü desteklemez ve Siyahın ...Na5–c4 gibi atlamaları için yer açılır.',
      neden: '9...bxa4? 10.Nxa4 sonrası Beyazın atı c5’e bakar, e5 ile uzun çapraz açılır (Motor: +1.9). 9...Qb6 (+0.9) ve 9...Be7 10.axb5 axb5 11.Rxa8 (+1.0) a-hattını Beyaza verir. 9...b4 (+0.4) bu kuruluşun bilinen cevabıdır.',
      diger: [
        { move: '9...bxa4', text: '10.Nxa4 d6 11.e5 (Motor: +1.9): at a4’ten c5’e bakar, uzun çapraz açılır ve a6 zayıf kalır.' },
        { move: '9...Qb6', text: 'b5’i korur (Motor: +0.9); 10.h4 h5 11.Ne2 sonrası vezir b6’da açıkta kalır.' },
        { move: '9...Be7', text: '10.axb5 axb5 11.Rxa8 Qxa8 12.Nxb5 (Motor: +1.0); Siyah piyon kaybeder.' },
      ],
    },
    '10w': {
      text: '10.Ne2: At e2’ye çekilir; buradan d4’e ya da c1’e gidebilir.',
      amac: 'Atı yeniden merkeze getirmek ve d4 ilerleyişini desteklemek.',
      neden: 'Motor 10.Ne2 ve 10.Nb1’i eşit görüyor (+0.42). 10.Na2 (+0.12) b4’e saldırır, ama 10...Be7 11.c3 bxc3 12.bxc3 sonrası at kenarda kalır. e2’de at f4 ve d4’e de bakar.',
      diger: [
        { move: '10.Nb1', text: 'Ehlvest – Kamsky’deki gibi Nb1–d2 manevrası (Motor: +0.42).' },
        { move: '10.Na2', text: 'b4’e saldırır (Motor: +0.12); c3 ile piyonu değişmeyi planlar, ama at a2’de kötüdür.' },
      ],
    },
    '10b': {
      text: '10...Be7: Fil e7’ye gelir; Siyah rok yapmaya hazırlanır.',
      amac: 'Gelişimi tamamlamak ve h4–h5 fikirlerine karşı g5 karesini tutmak.',
      neden: 'Motor 10...Rc8 ve 10...Be7’yi eşit görüyor (+0.4). Fil e7’de h4 karesini de kontrol eder; Beyazın h4–h5 planı daha zor olur.',
      diger: [
        { move: '10...Rc8', text: 'c-hattını önceden tutar (Motor: +0.39); rok bir hamle gecikir.' },
        { move: '10...d5', text: 'Merkezde hemen kırılma (Motor: +0.50); 11.exd5 Qxd5 12.d4 sonrası vezir açıkta.' },
      ],
    },
    '11w': {
      text: '11.d4: Beyaz merkezi açar.',
      amac: 'd4’te değişimden sonra atı d4’e yerleştirip c6 ve e6’ya baskı yapmak.',
      neden: 'Motor 11.c3 (+0.30) ile b4’ü sorgulamayı ya da 11.h4’ü (+0.29) tercih ediyor; 11.d4 (+0.18) Beyazın küçük avantajının bir kısmını harcar. Merkezi açmak Siyahın gelişmiş taşlarının, özellikle Bb7’nin, işine yarar.',
      diger: [
        { move: '11.c3', text: 'b4 piyonunu sorgular (Motor: +0.30): 11...O-O 12.h4 d5 sonrası gergin bir merkez.' },
        { move: '11.h4', text: 'g6 atını kovmaya hazırlanır (Motor: +0.29); 11...Nge5 ile at merkeze döner.' },
      ],
    },
    '11b': {
      text: '11...cxd4: Siyah d4’te değişir.',
      amac: 'Merkezi açıp c-hattını Siyahın kalesine kazandırmak.',
      neden: 'En doğal ve en iyi hamle (Motor: +0.06). 11...Nxd4 (+0.20) atları değiştirir ama Beyazın filini d4’e getirir; 11...Rc8 12.dxc5 (+0.36) ise c5’te piyon kaybettirir.',
      diger: [
        { move: '11...Nxd4', text: '12.Nexd4 cxd4 13.Bxd4 (Motor: +0.20): Beyazın fili d4’te güçlü.' },
        { move: '11...Rc8', text: '12.dxc5 (Motor: +0.36); Siyah piyonu geri almak için zaman harcar.' },
      ],
    },
    '12w': {
      text: '12.Nexd4: e2 atı d4’e gelir ve c6 atına baskı yapar.',
      amac: 'Merkezde güçlü bir at kurmak; Nxc6 ya da Nf5 gibi fikirlerle Siyahı rahatsız etmek.',
      neden: 'Doğru alım (Motor: +0.06). 12.Nfxd4? (−0.40) f3 atını merkezden uzaklaştırır ve 12...Nce5 ile Siyah f3 ve g4 karelerine atlar; 12.Bxd4? (−0.80) ise filini atla değişmek zorunda kalır.',
      diger: [
        { move: '12.Nfxd4', text: '12...Nce5 13.f4 Ng4 (Motor: −0.40); Siyahın atları aktif olur.' },
        { move: '12.Bxd4', text: '12...Nxd4 13.Qxd4 O-O (Motor: −0.80); Beyaz iyi filini kaybeder.' },
      ],
    },
    '12b': {
      text: '12...Na5: At kenara gider; c4 karesine bakar ve uzun çaprazda Bb7’nin önünü açar.',
      amac: '...Nc4 ile e3 filine ve b2’ye saldırmak; aynı zamanda Bb7’nin e4 üzerindeki baskısını artırmak.',
      neden: 'Motor 12...O-O’yu (0.00) daha iyi buluyor; Na5 (+0.26) şah e8’de dururken taktik bir fırsat verir: 13.Nf5!. Kamsky atı c6’dan kaldırarak Nxc6 değişimini de önledi.',
      diger: [
        { move: '12...O-O', text: 'Motorun ilk tercihi (0.00): önce şahı güvenceye almak; 13.Nb3 a5 ile Siyah rahattır.' },
        { move: '12...Nxd4', text: '13.Bxd4 O-O (Motor: +0.11); Beyazın fili d4’e yerleşir.' },
      ],
    },
    '13w': {
      text: '13.Nd2: At d2’ye çekilir; c4 ve b3 karelerini tutar, g2 filinin çaprazını açar.',
      amac: '...Nc4’ü önlemek ve f-piyonunu serbest bırakıp f4 ilerleyişini hazırlamak.',
      neden: 'Sağlam bir hamle (Motor: −0.08), ama fırsatı kaçırır. **13.Nf5!** 13...exf5 14.exf5 O-O 15.fxg6 hxg6 ile malzeme eşitlenir, Bg2’nin çaprazı açılır ve Siyahın şah kanadı zayıflar (Motor: +0.30). Persson riskli değil, planlı yolu seçti.',
      diger: [
        { move: '13.Nf5', text: '13...exf5 14.exf5 O-O 15.fxg6 hxg6 16.Re1 (Motor: +0.30): Beyaz uzun çaprazı açar ve e-hattını kullanır.' },
        { move: '13.h4', text: 'g6 atını kovmaya hazırlanır (Motor: +0.19); 13...Nc4 14.h5 Nxe3 15.fxe3 ile fil gider.' },
      ],
    },
    '13b': {
      text: '13...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini ...f5 için f-hattına getirmek.',
      neden: 'Motorun ilk tercihi (−0.14). Şah e8’de kalırsa Nf5 fikirleri yine gelebilirdi; rok sonrası ...f5 ve ...Rc8 ile Siyahın bütün taşları oyuna girer.',
      diger: [
        { move: '13...Rc8', text: 'Önce c-hattı (Motor: −0.12); şah bir hamle daha merkezde kalır.' },
        { move: '13...Ne5', text: 'At merkeze döner (Motor: +0.02); 14.N4b3 sonrası a5 atı açıkta.' },
      ],
    },
    '14w': {
      text: '14.f4: Beyaz şah kanadında ilerler; e5 karesini alır ve f4–f5 ile e6’ya saldırmayı hazırlar.',
      amac: 'f5 ile e6 piyonunu ve g6 atını hedef almak; Kapalı Sicilya’nın klasik şah kanadı planı.',
      neden: 'Motor 14.N4b3 (−0.10) ve 14.Qe2’yi (−0.12) biraz daha sağlam buluyor; 14.f4 (−0.17) e3 filinin önünü kapatmasa da g1–a7 çaprazını ve e4’ü zayıflatır. 14...Bc5! ile Siyah bu çaprazda baskı kurabilirdi.',
      diger: [
        { move: '14.N4b3', text: '14...d5 15.exd5 Bxd5 (Motor: −0.10); a5 atına saldırır ve merkez açılır.' },
        { move: '14.Qe2', text: 'Vezir e4’ü korur, kaleler c1 ve d1’e gelir (Motor: −0.12).' },
      ],
    },
    '14b': {
      text: '14...Rc8: Kale c-hattına gelir; c2’ye ve c4 karesine bakar.',
      amac: 'Açık c-hattını tutmak ve ...Nc4 sıçramasına destek vermek.',
      neden: 'Motor 14...Rc8’i en iyi hamle olarak gösteriyor (−0.21). 14...Bc5 (−0.06) d4 atını ve g1–a7 çaprazını hedef alırdı, ama 15.Bf2 e5 16.Nf5 ile Beyaz kurtulur.',
      diger: [
        { move: '14...Bc5', text: '15.Bf2 e5 16.Nf5 (Motor: −0.06); merkez açılır ama Beyazın atı f5’te güçlü.' },
        { move: '14...Re8', text: 'e-hattına hazırlık (Motor: −0.18); ...d5 kırılması için.' },
      ],
    },
    '15w': {
      text: '15.N4b3: At b3’e çekilir ve a5 atına saldırır.',
      amac: 'a5 atını değiştirmek ya da geri çekilmeye zorlamak; c5 ve d4 karelerini kontrol etmek.',
      neden: 'Motorun ilk tercihi (−0.20). 15.f5? 15...Ne5! ile e5 karesini Siyaha verir (Motor: −1.17). 15.Rc1 (−0.32) c2’yi önceden korur, 15.Kh1 (−0.45) çok yavaş.',
      diger: [
        { move: '15.Rc1', text: 'c-hattını önceden korur (Motor: −0.32); 15...Bc5 16.Qe2 Qb6 ile Siyah aktif.' },
        { move: '15.f5', text: '15...Ne5! (Motor: −1.17): at merkezdeki e5 karesine yerleşir, Beyazın e4 ve e3’ü zayıf kalır; f5 piyonu bir şey kazanmaz.' },
      ],
    },
    '15b': {
      text: '15...f5!: Siyah f5 karesini kapatır ve e4’e saldırır.',
      amac: 'Beyazın f4–f5 saldırısını kalıcı olarak durdurmak; e4’ü değiştirmeye ya da Beyazı e5’e zorlamaya çalışmak.',
      neden: 'Motor 15...Re8 (−0.16) ve 15...f5’i (−0.12) eşit görüyor. Kamsky daha net planı seçti: Beyaz e5 oynarsa uzun çapraz kapanır, Bg2 iş görmez ve ...Bxg2 ile değişilir; fxe4 değişimi olursa Siyah c4 ve e4’ü kullanır.',
      diger: [
        { move: '15...Re8', text: 'Motorun ilk tercihi (−0.16): 16.Rc1 Nxb3 17.cxb3 Rxc1 ile basitleşme.' },
        { move: '15...Nxb3', text: '16.cxb3 Bc5 (Motor: −0.2 civarı); Beyazın b-piyonları ikiye katlanır, c-hattı açılır.' },
      ],
    },
    '16w': {
      text: '16.e5: Beyaz e-piyonunu ilerletir; d6 ve f6 karelerini alır.',
      amac: 'f5 piyonunu sabitlemek, d4 karesini taşlarla kullanmak ve Siyahın e6 piyonunu geri bırakmak.',
      neden: 'Motor 16.Rf2’yi (+0.08) ya da 16.Rc1’i (−0.03) biraz daha iyi buluyor; 16.e5 (−0.07) kendi g2 filinin çaprazını kapatır ve Siyahın filleri değişmesine izin verir. Yine de fark küçük.',
      diger: [
        { move: '16.Rf2', text: '16...Nxb3 17.cxb3 fxe4 18.Nxe4 (Motor: +0.08); e4 değişilir ve Beyazın atı merkezde.' },
        { move: '16.Rc1', text: '16...fxe4 17.Nxa5 Qxa5 18.Nxe4 (Motor: −0.03); c2’yi korur.' },
      ],
    },
    '16b': {
      text: '16...Bxg2: Filler değişir.',
      amac: 'Beyazın kuruluşunun en önemli taşını değiştirmek ve şahın etrafındaki beyaz kareleri (f3, h3) zayıflatmak.',
      neden: 'Motorun ilk tercihi (−0.09). Çapraz kapandığı için Bg2 artık e4’ü korumuyor; değişim Siyahın b7 filinin de kapalı çaprazda boşa kalmasını önler. 16...d6 (+0.27) hemen 17.exd6 Bxd6 18.Bxb7 ile fili b7’den alırdı.',
      diger: [
        { move: '16...Nxb3', text: '17.cxb3 Bxg2 18.Kxg2 Bc5 (Motor: +0.06); benzer bir yapı.' },
        { move: '16...d6', text: '17.exd6 Bxd6 18.Bxb7 Nxb7 (Motor: +0.27); Siyahın atı b7’de pasif.' },
      ],
    },
    '17w': {
      text: '17.Kxg2: Şah fili geri alır.',
      amac: 'Malzemeyi eşitlemek; tek iyi hamle.',
      neden: '17.Nxa5? Bxf1 kalite kaybettirir (Motor: −5.0); 17.Rf2? Bb7 de bir taş eksik bırakır. Şah g2’de biraz açık kalır, ama Siyahın bu kareleri hemen kullanacak taşı yok.',
    },
    '17b': {
      text: '17...d6: Siyah e5 zincirini kırar.',
      amac: 'e5 piyonunu değiştirip e6 piyonunu geri kalmış piyon olmaktan kurtarmak ve fillere çapraz açmak.',
      neden: 'Motor 17...Nc4 (−0.23), 17...d6 (−0.12) ve 17...Re8’i (−0.10) yakın görüyor. ...d6 en mantıklı plan: Beyaz e5’i tutamaz, değişim sonrası Siyahın fili d6’ya ya da e7’ye gelir ve e-piyonu ileride ...e5 ile hareket edebilir.',
      diger: [
        { move: '17...Nc4', text: '18.Nxc4 Rxc4 19.Kg1 Qc7 (Motor: −0.23); at değişimi c-hattında baskı getirir.' },
        { move: '17...Re8', text: 'Önce kale e-hattına (Motor: −0.10); ...d6 sonra gelir.' },
      ],
    },
    '18w': {
      text: '18.exd6: Beyaz d6’da alır.',
      amac: 'Merkezi açmak ve Siyahın d6’ya gelecek taşına Nc4 ile saldırmayı hazırlamak.',
      neden: '18.Nxa5 Qxa5 19.exd6 aynı yere varır (Motor: −0.17). 18.Nf3? ise 18...dxe5 19.Nxa5 exf4 ile Siyah piyon kazanır (−1.8).',
      diger: [
        { move: '18.Nxa5', text: '18...Qxa5 19.exd6 Bxd6 (Motor: −0.17); hamle sırası farkı.' },
        { move: '18.Nf3', text: '18...dxe5 19.Nxa5 exf4 (Motor: −1.8); f4 düşer.' },
      ],
    },
    '18b': {
      text: '18...Bxd6: Fil d6’ya gelir; f4 piyonuna bakar.',
      amac: 'Fili aktif bir kareye getirmek ve f4’e baskı kurmak.',
      neden: 'Tek iyi hamle (Motor: −0.14). 18...Qxd6? 19.Nxa5 Qd5+ 20.Nf3 Qxa5 (+0.76) Beyaza aktif taşlar verir; 18...Bf6? (+1.58) ise d6 piyonunu geçer bırakır.',
      diger: [
        { move: '18...Qxd6', text: '19.Nxa5 Qd5+ 20.Nf3 Qxa5 (Motor: +0.76); Beyazın atı ve fili merkezde.' },
        { move: '18...Bf6', text: 'd6 piyonu tahtada kalır (Motor: +1.58).' },
      ],
    },
    '19w': {
      text: '19.Rf2: Kale f2’ye gelir; ikinci yatayı ve c2’yi korur.',
      amac: 'c2’yi kale ile savunmak ve kaleyi d2 üzerinden d-hattına getirmeye hazırlanmak.',
      neden: 'Motor 19.Nxa5 Qxa5 20.Nc4’ü (−0.07) biraz daha iyi buluyor: at c4’ten d6 filine ve vezire saldırır. 19.Rf2 (−0.33) savunmacı ama sağlam bir seçim.',
      diger: [
        { move: '19.Nxa5', text: '19...Qxa5 20.Nc4 (Motor: −0.07); at d6 filine saldırır ve Beyaz aktifleşir.' },
        { move: '19.Kg1', text: 'Şah g2’den ayrılır (Motor: −0.30); 19...Re8 ile Siyah e-hattını alır.' },
      ],
    },
    '19b': {
      text: '19...Be7: Fil e7’ye çekilir.',
      amac: 'Nxa5 ve Nc4 ile gelecek saldırıdan önce fili güvenli bir kareye almak.',
      neden: 'Motor 19...Bb8 (−0.28), 19...Be7 (−0.21) ve 19...Nxb3’ü (−0.13) yakın görüyor. Fil d6’da kalsaydı Nxa5 Qxa5 Nc4 hem file hem vezire saldırırdı.',
      diger: [
        { move: '19...Bb8', text: 'Fil b8’de f4’e bakmaya devam eder (Motor: −0.28).' },
        { move: '19...Nxb3', text: '20.cxb3 Bc5 (Motor: −0.13); Beyazın piyonları ikiye katlanır, ama c-hattı açılır.' },
      ],
    },
    '20w': {
      text: '20.Nxa5: Beyaz a5 atını alır.',
      amac: 'Siyahın c4’e gidebilecek atını değiştirmek ve b3 atını serbest bırakmak.',
      neden: 'Motor 20.Bd4’ü (−0.19) biraz daha iyi buluyor, ama fark küçük (20.Nxa5 −0.25). Değişimden sonra Siyahın veziri a5’te açıkta kalır ve Beyaz Nb3 ile tempo kazanır.',
      diger: [
        { move: '20.Bd4', text: '20...Qd7 21.c3 Nc6 (Motor: −0.19); fil merkezde, at değişimi ertelenir.' },
        { move: '20.Kg1', text: '20...e5 21.fxe5 Nxe5 (Motor: −0.22); merkez açılır.' },
      ],
    },
    '20b': {
      text: '20...Qxa5: Vezirle geri alınır.',
      amac: 'Malzemeyi eşitlemek.',
      neden: 'Tek iyi hamle (Motor: −0.28). 20...Qd5+? 21.Nf3 Qxa5 (+1.28) zaman kaybettirir; 20...e5? 21.Ndc4 (+3.5) ise bir taş kaybettirir.',
      diger: [
        { move: '20...Qd5+', text: '21.Nf3 Qxa5 22.Qd7 (Motor: +1.28); Beyaz vezirle d7’ye girer.' },
      ],
    },
    '21w': {
      text: '21.Nb3: At b3’ten vezire saldırır.',
      amac: 'Tempo kazanmak ve atı d4 karesine yönlendirmek.',
      neden: 'Motor 21.Nf3 (−0.25) ve 21.Bd4’ü (−0.27) biraz daha iyi buluyor; b3’teki at merkeze uzak (21.Nb3 −0.40). At ileride d4’e gelemedi, çünkü fil oraya gitti.',
      diger: [
        { move: '21.Nf3', text: '21...Rfd8 22.Bd4 Qd5 (Motor: −0.25); at merkezde, d4 ve e5’e bakar.' },
        { move: '21.Bd4', text: '21...Qd5+ 22.Nf3 Rfd8 (Motor: −0.27); fil önce gelir.' },
      ],
    },
    '21b': {
      text: '21...Qc7: Vezir c7’ye gelir; c2 ve f4’e bakar.',
      amac: 'c-hattında c2’ye ve çapraz üzerinden f4’e baskı yapmak.',
      neden: 'Motorun ilk tercihi (−0.57). 21...Qd8 (−0.15) pasif, 21...Qd5+? 22.Qxd5 exd5 (+0.76) ise d5’te izole bir piyon bırakır.',
      diger: [
        { move: '21...Qd8', text: 'Vezir geri çekilir (Motor: −0.15); 22.Kg1 Rc4 ile Siyah yine aktif ama daha az baskılı.' },
        { move: '21...Qd5+', text: '22.Qxd5 exd5 (Motor: +0.76); Siyahın d5 piyonu zayıf kalır.' },
      ],
    },
    '22w': {
      text: '22.Bd4: Fil d4’te güçlü bir merkez karesine gelir.',
      amac: 'Uzun çaprazı tutmak, g7’ye bakmak ve e5 karesini kontrol etmek.',
      neden: 'Motorun ilk tercihi (−0.42), 22.Qf3 ile aynı. Fil d4’te Siyahın ...e5 kırılmasını da engeller.',
      diger: [
        { move: '22.Qf3', text: '22...Rfd8 23.Re1 (Motor: −0.42); benzer bir kuruluş.' },
        { move: '22.Qe2', text: '22...Qc6+ 23.Kg1 (Motor: −0.51); şah g1’e gitmek zorunda.' },
      ],
    },
    '22b': {
      text: '22...Bf6: Siyah kara kareli filleri değişmeyi önerir.',
      amac: 'Beyazın d4’teki güçlü filini değiştirmek ve ...e5 için yolu açmak.',
      neden: 'Motor 22...Rfd8 (−0.43) ve 22...Bd6’yı (−0.32) tercih ediyor; 22...Bf6 (−0.03) avantajın bir kısmını verir, çünkü fil değişimi Beyazın sorunlarını azaltır. Kamsky’nin fikri, merkezde ...e5 için d4 filini ortadan kaldırmak.',
      diger: [
        { move: '22...Rfd8', text: 'Motorun ilk tercihi (−0.43): 23.Qf3 Rd5 ile kale d-hattında aktif.' },
        { move: '22...Bd6', text: 'f4’e baskı (Motor: −0.32): 23.Qe2 e5 24.fxe5 Nxe5 ile merkez açılır.' },
      ],
    },
    '23w': {
      text: '23.Bxf6: Filler değişir.',
      amac: 'Siyahın filini değiştirerek yapıyı basitleştirmek.',
      neden: 'Motor 23.Qe2’yi (−0.02) biraz daha iyi buluyor: 23...Qc6+ 24.Kg1 Rfd8 sonrası değişim Beyazın istediği anda olur. 23.Bxf6 (−0.24) Siyaha ...Rxf6 ile kaleyi üçüncü yataya çıkarma şansı verir.',
      diger: [
        { move: '23.Qe2', text: '23...Qc6+ 24.Kg1 Rfd8 25.Bxf6 (Motor: −0.02); vezir e2’de e6’ya bakar.' },
        { move: '23.Qf3', text: '23...e5 24.fxe5 Nxe5 25.Qd5+ (Motor: −0.26).' },
      ],
    },
    '23b': {
      text: '23...Rxf6: Kale f6’dan alır; üçüncü yataya çıkar.',
      amac: 'Kaleyi aktif tutmak; f6’dan d6 ya da e6’ya gidebilir.',
      neden: 'Motorun ilk tercihi (−0.39). 23...gxf6 (−0.21) şahın önünü açar ama e5’i tutar; 23...Qc6+? 24.Qf3 gxf6 (+0.21) ise Siyahın yapısını bozar.',
      diger: [
        { move: '23...gxf6', text: '24.Qe2 Qc6+ 25.Kg1 e5 (Motor: −0.21); merkez güçlü, ama şah açık.' },
      ],
    },
    '24w': {
      text: '24.Qf3: Vezir f3’e gelir; uzun çaprazda a8’e ve d5’e bakar.',
      amac: 'Veziri merkeze getirip Qd5 ya da Qb7 gibi girişlere hazırlanmak.',
      neden: 'Derin analizde motor 24.Kg1 (−0.29) ve 24.Qd4’ü (−0.35) tercih ediyor; 24.Qf3 (−0.86) 24...e5’e izin verir ve vezir d5’e gitmek zorunda kalır. 24.Qd4 hem e5’i tutar hem de vezirleri merkezde tutar.',
      diger: [
        { move: '24.Kg1', text: '24...Rd8 25.Qf3 e5 26.fxe5 (Motor: −0.29); şah g1’de daha güvenli.' },
        { move: '24.Qd4', text: '24...e5 25.fxe5 Nxe5 26.Raf1 (Motor: −0.35); vezir d4’te e5’i değişime zorlar.' },
      ],
    },
    '24b': {
      text: '24...e5!: Siyah merkez piyonunu ilerletir; f4’e saldırır.',
      amac: 'Geri kalmış e6 piyonundan kurtulmak, e-hattını açmak ve f4 piyonunu zorlamak.',
      neden: 'Motorun ilk tercihi (−0.89). Fil d4’ten ayrıldığı için artık e5 karesini kontrol eden bir Beyaz taşı kalmadı; Siyah merkezde ilk kez inisiyatifi alır.',
      diger: [
        { move: '24...Kh8', text: 'Şahı önceden güvenceye alır (Motor: −0.63); 25.Re1 e5 26.fxe5 Nxe5.' },
        { move: '24...Rd8', text: 'd-hattı (Motor: −0.13); 25.Rd1 ile kaleler değişir ve baskı azalır.' },
      ],
    },
    '25w': {
      text: '25.Qd5+: Vezir şah çeker.',
      amac: 'Merkezde aktif kalmak ve vezir değişimini zorlamak.',
      neden: 'Motor 25.fxe5’i (−0.82) tercih ediyor: 25...Nxe5 26.Qf4 ile vezir f-hattında savunmaya katılır. 25.Qd5+ (−1.48) şık görünür, ama Siyah 25...Kh8 ile vezirleri tutarsa vezir d5’te işe yaramaz kalır.',
      diger: [
        { move: '25.fxe5', text: '25...Nxe5 26.Qf4 Qb7+ 27.Kg1 (Motor: −0.82); en sağlam yol.' },
        { move: '25.c3', text: '25...exf4 26.cxb4 Re8 (Motor: −1.79); merkez açılır ve f4 düşer.' },
      ],
    },
    '25b': {
      text: '25...Qf7: Siyah vezir değişimini önerir.',
      amac: 'Vezirleri değişip piyon yapısının daha iyi olduğu bir oyun sonuna geçmek.',
      neden: 'Motora göre bu bir kaçan fırsat: **25...Kh8!** 26.fxe5 Nxe5 27.Re2 Ng4 ile vezirler tahtada kalır, at f2 ve h2’ye atlar (Motor: −1.1/−1.4). 25...Qf7 (−0.05) oyunu eşitler. Kamsky daha güvenli bir oyun sonunu tercih etti; zaman durumu hakkında bir bilgimiz yok.',
      diger: [
        { move: '25...Kh8', text: '26.fxe5 Nxe5 27.Re2 Ng4 28.Rae1 f4 (Motor: −1.1/−1.4); Beyazın şahı açıkta kalır.' },
        { move: '25...Rf7', text: '26.fxe5 Rd8 27.Qc5 (Motor: −0.23); kale f7’de savunmacı.' },
      ],
    },
    '26w': {
      text: '26.Rd1: Kale d-hattına gelir.',
      amac: 'Açık d-hattını almak; vezir değişiminden sonra kaleyle d7’ye girmek.',
      neden: 'Motorun ilk tercihi (0.00). 26.Qxf7+ (−0.02) aynı yere varabilir; 26.c4? (−1.97) ise 26...bxc3 ile b2 piyonunu zayıflatır.',
      diger: [
        { move: '26.Qxf7+', text: '26...Kxf7 27.Rd1 (Motor: −0.02); benzer bir oyun sonu.' },
        { move: '26.c4', text: '26...bxc3 27.Qxf7+ Kxf7 28.bxc3 (Motor: −1.97); vezir kanadı piyonları zayıf.' },
      ],
    },
    '26b': {
      text: '26...exf4: Siyah f4’te değişir.',
      amac: 'Beyazın şahının önündeki piyon yapısını bozmak; Beyaz gxf4 ile alırsa h-piyonu yalnız kalır.',
      neden: 'Motorun ilk tercihi (−0.13). 26...Qxd5+ 27.Rxd5 exf4 (+0.02) Beyazın kalesini d5’e getirir; 26...e4 (+0.24) ise piyonu sabit bir hedef yapar.',
      diger: [
        { move: '26...Qxd5+', text: '27.Rxd5 exf4 28.gxf4 (Motor: +0.02); Beyazın kalesi d5’te aktif.' },
        { move: '26...e4', text: '27.Qxf7+ Rxf7 28.Rd6 (Motor: +0.24); e4 piyonu hedef olur.' },
      ],
    },
    '27w': {
      text: '27.gxf4: Beyaz g-piyonuyla alır.',
      amac: 'Merkezde f4 piyonunu tutmak ve e5 karesini kontrol etmek.',
      neden: 'Motor 27.Qxf7+ Rxf7 28.gxf4’ü (−0.12) biraz daha iyi buluyor (27.gxf4 −0.25). gxf4 g-hattını açar ve h-piyonunu yalnız bırakır; Kamsky bu zayıflığa sonra oynayacak. 27.Rd4? (−1.06) 27...Qxd5+ ile piyon kaybettirir.',
      diger: [
        { move: '27.Qxf7+', text: '27...Rxf7 28.gxf4 Re7 (Motor: −0.12); önce vezir değişimi.' },
        { move: '27.Rd4', text: '27...Qxd5+ 28.Rxd5 fxg3 29.hxg3 (Motor: −1.06); Beyaz piyon eksik.' },
      ],
    },
    '27b': {
      text: '27...Re6: Kale e6’da e-hattını tutar.',
      amac: 'e-hattını almak ve Beyazın veziri d7’ye girerse e2 ya da e4’e kale getirmek.',
      neden: 'Motorun ilk tercihi (−0.27). Kale e6’da d6 karesini de korur ve ileride ...Re4 ile f4’e saldırır.',
      diger: [
        { move: '27...Rc4', text: '28.Qxf7+ Kxf7 29.Rd7+ (Motor: −0.20); kale c4’ten f4’e bakar.' },
        { move: '27...Rc7', text: 'Yedinci yatayı korur (Motor: −0.07); pasif.' },
      ],
    },
    '28w': {
      text: '28.Qd7: Vezir d7’ye girer ve vezir değişimi önerir.',
      amac: 'Vezirleri değişip kaleyi yedinci yataya getirmek.',
      neden: 'Motor 28.Nc5’i (−0.25) ve maç hamlesini (−0.29) aynı görüyor: 28.Nc5 Re6 kalesine saldırır. 28.h3? (−0.60) 28...Rxc2 ile piyon kaybettirir.',
      diger: [
        { move: '28.Nc5', text: '28...Rec6 29.Qxf7+ Kxf7 30.Rd7+ (Motor: −0.25); at c5’te aktif.' },
        { move: '28.h3', text: '28...Rxc2 29.Qd8+ (Motor: −0.60); c2 düşer.' },
      ],
    },
    '28b': {
      text: '28...Qxd7: Vezirler değişir.',
      amac: 'Kale ve at oyun sonuna geçmek; Beyazın yapısı (f4 ve h2 piyonları) daha zayıf.',
      neden: 'Motorun ilk tercihi (−0.42). 28...Rc4 (−0.32) vezirleri tutar, 28...Nh4+ (−0.23) ise şahı f1’e iter ama sonuç aynı.',
      diger: [
        { move: '28...Rc4', text: '29.Qxf7+ Kxf7 30.Rd4 (Motor: −0.32).' },
        { move: '28...Nh4+', text: '29.Kf1 Qxd7 30.Rxd7 (Motor: −0.23); şah f1’e gider.' },
      ],
    },
    '29w': {
      text: '29.Rxd7: Kale vezirle geri alır; yedinci yatayda.',
      amac: 'Malzemeyi eşitlemek; kale d7’de a6’ya ve g7’ye bakar.',
      neden: 'Tek hamle: 29.Rfd2? 29...Nxf4+ ile taş kaybettirir (Motor: −9.0).',
    },
    '29b': {
      text: '29...Re4: Kale e4’ten f4 ve b4’e bakar.',
      amac: 'f4 piyonuna baskı yapmak ve b4 piyonunu korumak.',
      neden: 'Motorun ilk tercihi (−0.37). 29...Re3 (−0.19) b3 atına saldırır, 29...Re7 (0.00) kaleleri değişip oyunu eşitler.',
      diger: [
        { move: '29...Re3', text: '30.Nd4 Nh4+ 31.Kf1 (Motor: −0.19); atlar aktif ama Beyaz da tutuyor.' },
        { move: '29...Re7', text: '30.Rxe7 Nxe7 (Motor: 0.00); kalelerin biri gider ve baskı azalır.' },
      ],
    },
    '30w': {
      text: '30.Kg3: Şah g3’e gelir ve f4’ü korur.',
      amac: 'Şahı oyuna sokmak ve f4 piyonunu desteklemek.',
      neden: 'Motor 30.Rd4’ü (−0.41) biraz daha iyi buluyor: 30...Rce8 31.Rxe4 ile kaleler değişir. 30.Kg3 (−0.57) şahı g3’e getirir, ama Siyahın ...h5–h4+ fikirlerine hedef yapar. 30.Kf1? (−1.17) f4’ü bırakır.',
      diger: [
        { move: '30.Rd4', text: '30...Rce8 31.Rxe4 Rxe4 32.Kg3 (Motor: −0.41); bir çift kale değişir.' },
        { move: '30.Kf1', text: '30...Nxf4 31.Rfd2 Rec4 (Motor: −1.17); f4 düşer.' },
      ],
    },
    '30b': {
      text: '30...h5: Siyah h-piyonunu ilerletir.',
      amac: '...h4+ ile Beyaz şahını g3’ten itmek ve şah kanadında alan kazanmak.',
      neden: 'Motorun ilk tercihi (−0.70). Siyahın şah kanadında piyon çoğunluğu (g ve h) Beyazın tek f-piyonuna karşı çalışmaya başlıyor; ...h4+ tehdidi Beyazı h4 ile cevap vermeye zorlar.',
      diger: [
        { move: '30...Rcc4', text: '31.Rd8+ Kf7 32.Nd2 (Motor: −0.22); kaleler f4’e baskı yapar, ama h5 planı daha güçlü.' },
        { move: '30...Re3+', text: '31.Rf3 Re1 32.Nd4 (Motor: −0.09); erken şah.' },
      ],
    },
    '31w': {
      text: '31.h4: Beyaz ...h4+’ü önler.',
      amac: 'Şahın g3’ten itilmesini engellemek ve h5 piyonunu sabitlemek.',
      neden: 'Motor 31.Rd4’ü (−0.73) biraz daha iyi buluyor; 31.h4 (−0.82) h4 piyonunu zayıf bırakır ve ...Nxh4 fikri doğar. 31.Nd2? (−1.32) ise 31...h4+ ile şahı h3’e iter.',
      diger: [
        { move: '31.Rd4', text: '31...Re3+ 32.Kg2 Nh4+ 33.Kf1 (Motor: −0.73); kale merkezde, ama şah geri çekilir.' },
        { move: '31.Nd2', text: '31...h4+ 32.Kh3 Re3+ (Motor: −1.32); şah kenara hapsolur.' },
      ],
    },
    '31b': {
      text: '31...Re3+: Kale şah çeker.',
      amac: 'Beyazı kale değişimine ya da şahın geri çekilmesine zorlamak; h4 piyonunu hedef almak.',
      neden: 'Motorun ilk tercihi (−0.90). Şah çekildikten sonra Siyah ...Nxh4 ile piyonu kazanma tehdidi taşır. 31...Nf8 (−0.13) ve 31...a5 (0.00) çok yavaş.',
      diger: [
        { move: '31...Nf8', text: '32.Rd5 Re3+ 33.Kh2 (Motor: −0.13); at h7’ye yönelir, ama zaman kaybı.' },
        { move: '31...a5', text: 'Vezir kanadını sağlamlaştırır (Motor: 0.00); baskı kaybolur.' },
      ],
    },
    '32w': {
      text: '32.Rf3: Kale f3’e gelir ve kale değişimi önerir.',
      amac: 'Siyahın aktif kalesini değiştirmek ve şahı g3’te tutmak.',
      neden: 'Motorun ilk tercihi (−0.78). 32.Kh2? (−1.41) 32...Nxh4 ile piyon kaybettirir, 32.Kg2 (−1.63) de 32...Nxh4+ ile aynı sonuca varır.',
      diger: [
        { move: '32.Kh2', text: '32...Nxh4 33.Nd4 Rc4 (Motor: −1.41); h4 düşer.' },
        { move: '32.Kg2', text: '32...Nxh4+ 33.Kh2 Nf3+ (Motor: −1.63).' },
      ],
    },
    '32b': {
      text: '32...Rxf3+: Kaleler değişir.',
      amac: 'Kale değişiminden sonra h4 piyonunu atla şah çekerek almak.',
      neden: 'Motor 32...Re1’i (−0.59) biraz daha iyi buluyor: 33.Nd4 Rg1+ 34.Kf2 Rg4 ile kaleler tahtada kalır. 32...Rxf3+ (−0.23) avantajı küçültür, ama somut bir piyon kazanır ve geçer piyon yaratır.',
      diger: [
        { move: '32...Re1', text: '33.Nd4 Rg1+ 34.Kf2 Rg4 (Motor: −0.59); kale g4’ten h4 ve f4’e baskı yapar.' },
        { move: '32...Re4', text: '33.Nd4 Re1 (Motor: 0.00); kale geri döner, baskı kaybolur.' },
      ],
    },
    '33w': {
      text: '33.Kxf3: Şah kaleyi geri alır.',
      amac: 'Malzemeyi eşitlemek.',
      neden: 'Tek hamle: 33.Kg2? 33...Nxh4+ 34.Kh2 Rxf4 ile Beyaz kale eksik kalır (Motor: −7.0).',
    },
    '33b': {
      text: '33...Nxh4+!: At şah çekerek h4 piyonunu alır.',
      amac: 'h-hattındaki Beyaz piyonunu ortadan kaldırıp h5 piyonunu **geçer piyon** yapmak.',
      neden: 'Motor 33...Rxc2’yi (−0.39) ve maç hamlesini (−0.30) aynı görüyor; 33...Rc4 (−0.02) daha zayıf. Kamsky’nin seçimi oyunun karakterini değiştirdi: Beyazın kalan bütün taşları artık h-piyonunu izlemek zorunda.',
      diger: [
        { move: '33...Rxc2', text: '34.Nd4 Rd2 35.Ke3 Rd1 (Motor: −0.39); piyon kazanır, ama geçer h-piyonu doğmaz.' },
        { move: '33...Rc4', text: '34.Nd4 Nxh4+ 35.Kf2 (Motor: −0.02); Beyazın atı f5’e saldırır.' },
      ],
    },
    '34w': {
      text: '34.Kg3: Şah g3’e gelir ve h4 atına saldırır.',
      amac: 'Atı geri çekilmeye zorlamak ve h-piyonunu durdurmak için şahı yakında tutmak.',
      neden: 'Motorun ilk tercihi (−0.34). 34.Ke3? (−2.07) ve 34.Ke2? (−2.39) şahı uzaklaştırır ve 34...Rxc2 ile vezir kanadı piyonları düşer.',
      diger: [
        { move: '34.Ke3', text: '34...Rxc2 35.Nd4 Rxb2 (Motor: −2.07); iki piyon düşer.' },
        { move: '34.Ke2', text: '34...Rxc2+ 35.Kd3 Rxb2 (Motor: −2.39).' },
      ],
    },
    '34b': {
      text: '34...Ng6: At g6’ya döner ve f4’e bakar.',
      amac: 'Atı güvenceye almak ve ...h4+ ile h-piyonunu ilerletmeyi hazırlamak.',
      neden: 'Motorun ilk tercihi (−0.36). 34...Rxc2?? 35.Kxh4 bir taş kaybettirir (+1.93); 34...g5 (+0.22) ise şahın önünü açar.',
      diger: [
        { move: '34...Rxc2', text: '35.Kxh4 Rxb2 36.Nd2 (Motor: +1.93); Beyaz taş kazanır.' },
        { move: '34...g5', text: '35.fxg5 Ng6 36.Rd6 (Motor: +0.22); Siyahın f5 piyonu zayıflar.' },
      ],
    },
    '35w': {
      text: '35.Nd4: At d4’ten f5 piyonuna saldırır.',
      amac: 'f5 piyonunu kazanıp g7’yi tehdit etmek; karşı oyun bulmak.',
      neden: 'Motorun ilk tercihi (−0.15). 35.Rd6 (−0.91) ve 35.Kf3 (−0.97) daha pasif; at merkezde hem f5’e hem de e6 ve c6 karelerine bakar.',
      diger: [
        { move: '35.Rd6', text: '35...h4+ 36.Kf3 Kh7 (Motor: −0.91); kale a6’ya saldırır ama h-piyonu ilerler.' },
        { move: '35.Kf3', text: '35...Nf8 36.Ra7 Rxc2 (Motor: −0.97); c2 düşer.' },
      ],
    },
    '35b': {
      text: '35...h4+: Piyon şah çekerek ilerler.',
      amac: 'Geçer piyonu ilerletirken Beyaz şahını g3’ten itmek.',
      neden: 'Motorun ilk tercihi (−0.32). Piyon her adımda tempo kazanıyor; f5 piyonunu korumaktan daha önemli.',
      diger: [
        { move: '35...Rc4', text: '36.Nxf5 h4+ 37.Nxh4 Nxf4 (Motor: −0.10); f-piyonları değişir.' },
        { move: '35...Kf8', text: '36.Ra7 h4+ 37.Kf3 (Motor: 0.00); şah merkeze, ama piyon bekler.' },
      ],
    },
    '36w': {
      text: '36.Kf3: Şah f3’e çekilir.',
      amac: 'f4 piyonunu korumak ve atla f5’i almaya hazırlanmak.',
      neden: 'Derin analizde motor **36.Kh3!** (−0.19) öneriyor: 36...Nxf4+ 37.Kxh4 Rc4 38.Nxf5 ile şah piyonu durdurur. 36.Kf3 (−0.73) piyonun önünden çekilir ve h3–h2 ilerleyişine izin verir.',
      diger: [
        { move: '36.Kh3', text: '36...Nxf4+ 37.Kxh4 Rc4 38.Nxf5 (Motor: −0.19); şah piyonu alır.' },
        { move: '36.Kf2', text: '36...Nxf4 37.Nxf5 Rxc2+ 38.Kf3 (Motor: −1.27); c2 düşer.' },
      ],
    },
    '36b': {
      text: '36...h3: Piyon h3’e gelir.',
      amac: 'Piyonu vezirlenme karesine yaklaştırıp Beyaz şahını g2 ve h1’e bağlamak.',
      neden: 'Motor 36...Rc4’ü (−1.00) biraz daha iyi buluyor; 36...h3 (−0.79) de güçlü. 36...Nf8 (0.00) çok pasif.',
      diger: [
        { move: '36...Rc4', text: '37.a5 Kh7 38.Rd6 h3 (Motor: −1.00); önce kale aktifleşir.' },
        { move: '36...Nf8', text: '37.Ra7 Rc4 38.Nxf5 (Motor: 0.00); at savunmaya döner.' },
      ],
    },
    '37w': {
      text: '37.Nxf5: At f5’i alır ve g7’yi tehdit eder.',
      amac: 'Piyonu geri almak ve Rxg7+ ile karşı oyun bulmak.',
      neden: 'Motor 37.Kg3 (−0.72) ve 37.Ne6’yı (−0.83) biraz daha iyi buluyor: şah piyona yakın kalır. 37.Nxf5 (−1.28) piyonu alır, ama 37...h2’ye izin verir.',
      diger: [
        { move: '37.Kg3', text: '37...Nxf4 38.Nxf5 Rxc2 39.Rxg7+ (Motor: −0.72); şah h-piyonunu durdurur.' },
        { move: '37.Ne6', text: '37...h2 38.Kg2 Rxc2+ 39.Kh1 (Motor: −0.83); at e6’dan g7’ye bakar.' },
      ],
    },
    '37b': {
      text: '37...h2!: Piyon yedinci yatayda.',
      amac: 'Beyaz şahını h1’e kadar çekmek ve 38...Rxc2+ ile şahla piyon kazanmak.',
      neden: 'Motorun ilk tercihi (−0.79). 37...Kf8 (−0.05) g7’yi korur, ama piyonun gücünü kullanmaz. Piyon h2’de Beyazın şahını köşeye bağlar; o andan itibaren Siyahın her şahı tehlikeli.',
      diger: [
        { move: '37...Kf8', text: '38.Nxg7 Rc6 39.Kg3 Nxf4 (Motor: −0.05); denge.' },
        { move: '37...Rc6', text: '38.Rxg7+ Kh8 39.Rb7 h2 (Motor: 0.00).' },
      ],
    },
    '38w': {
      text: '38.Kg2: Şah piyonu durdurur.',
      amac: 'h1 karesini kontrol etmek.',
      neden: 'Tek iyi hamle: 38.Rd1? 38...Rxc2 39.b3 Rc3+ (Motor: −2.6), 38.Ng3? 38...Rxc2 (−3.8) kaybeder.',
      diger: [
        { move: '38.Rd1', text: '38...Rxc2 39.b3 Rc3+ 40.Kg2 (Motor: −2.6); kale pasif kalır.' },
      ],
    },
    '38b': {
      text: '38...Rxc2+: Kale şahla c2’yi alır.',
      amac: 'Piyon kazanmak ve şahı h1’e itmek.',
      neden: 'Motorun ilk tercihi (−0.97). 38...Nxf4+ 39.Kxh2 (−0.17) h-piyonunu kaybettirir; 38...b3 (0.00) yavaş.',
      diger: [
        { move: '38...Nxf4+', text: '39.Kxh2 Rxc2+ 40.Kg3 (Motor: −0.17); h-piyonu gider.' },
        { move: '38...b3', text: '39.cxb3 Rc2+ 40.Kh1 Nxf4 (Motor: 0.00).' },
      ],
    },
    '39w': {
      text: '39.Kh1: Şah h1’e gider.',
      amac: 'h-piyonunu durdurmak; başka kare yok.',
      neden: 'Tek hamle: 39.Kf3?? 39...h1=Q+ ile 10 hamlede mat (Motor), 39.Rd2? (−7.29) ise kale değişimi sonrası kaybeder.',
    },
    '39b': {
      text: '39...Nxf4: At f4’ü alır.',
      amac: 'Piyon kazanmak ve atı f4 üzerinden d3, e2 ya da g2’ye yönlendirmek.',
      neden: 'Derin analizde motor 39...Kf8’i (−0.85) daha iyi buluyor: önce g7’yi korumak. 39...Nxf4 (−0.19) Beyaza 40.Rxg7+ ile piyonu geri alma şansı verir.',
      diger: [
        { move: '39...Kf8', text: '40.b3 Nxf4 41.Nxg7 Rc3 (Motor: −0.85); g7 korunur ve Beyazın taşları pasif.' },
        { move: '39...Kh8', text: '40.b3 Nxf4 41.Rxg7 (Motor: −0.26).' },
      ],
    },
    '40w': {
      text: '40.Rxg7+: Kale g7’yi şahla alır.',
      amac: 'Piyonu geri almak ve Siyahın şahını geriye itmek.',
      neden: 'Motorun ilk tercihi (−0.18). 40.b3? (−2.61) ve 40.Nxg7? (−3.30) daha kötü.',
      diger: [
        { move: '40.Nxg7', text: '40...Rxb2 41.a5 Rf2 (Motor: −3.30); at g7’de oyun dışı.' },
      ],
    },
    '40b': {
      text: '40...Kf8: Şah f8’e gider.',
      amac: 'Şahı merkeze yaklaştırmak ve f7 üzerinden oyuna katmak.',
      neden: 'Motorun ilk tercihi (−0.23); 40...Kh8 (−0.12) şahı köşeye götürür.',
      diger: [
        { move: '40...Kh8', text: '41.b3 Rc3 42.Rg3 (Motor: −0.12); şah köşede pasif.' },
      ],
    },
    '41w': {
      text: '41.Rg4?!: Kale g4’ten f4 atına saldırır.',
      amac: 'Atı kovmak ve h2 piyonuna g-hattından baskı yapmak.',
      neden: 'Derin analizde motor **41.Ra7!** (−0.15) öneriyor: 41...Rxb2 42.Rxa6 Nd3 43.a5 ile a-piyonu geçer olur. 41.Rg4 (−1.75) vezir kanadını bırakır ve Siyaha ...Nd3 ile b2’ye saldırma şansı verir.',
      diger: [
        { move: '41.Ra7', text: '41...Rxb2 42.Rxa6 Nd3 43.a5 (Motor: −0.15); a-piyonu karşı oyun verir.' },
        { move: '41.Rb7', text: '41...Rxb2 42.Rb8+ Kf7 (Motor: −2.28); kale pasif kalır.' },
      ],
    },
    '41b': {
      text: '41...Nd3: At d3’e gelir; b2’ye ve f2 karesine bakar.',
      amac: '...Nf2+ ya da ...Nxb2 tehditleriyle Beyazı zorlamak.',
      neden: 'Motorun ilk tercihi (−1.60). 41...Rf2 (−0.64) ve 41...Nh3 (−0.18) daha zayıf.',
      diger: [
        { move: '41...Rf2', text: '42.Nd4 Nd3 43.Rg3 (Motor: −0.64).' },
        { move: '41...Nh3', text: '42.Rg6 Rxb2 43.Rxa6 (Motor: −0.18); a-piyonu karşı oyun verir.' },
      ],
    },
    '42w': {
      text: '42.Rd4: Kale d4’ten ata saldırır.',
      amac: 'Atı kovmak ve b4 piyonuna saldırmak.',
      neden: 'Motorun ilk tercihi (−1.86). 42.Rg6 (−2.36) ve 42.Rg3 (−2.46) daha kötü.',
      diger: [
        { move: '42.Rg6', text: '42...Rxb2 43.Rf6+ Kg8 (Motor: −2.36).' },
      ],
    },
    '42b': {
      text: '42...Ne5?!: At e5’e çekilir.',
      amac: 'Atı f3’e getirip ...Rc1+ ile mat ağı kurmak.',
      neden: 'Motor **42...Rd2!** (−1.76) öneriyor: 43.b3 Kf7 44.Rd6 Nf2+ ile kaleleri değişir, b2 ya da b3 düşer. 42...Ne5 (−0.30) b4’ü korumaz ve avantaj kaybolur.',
      diger: [
        { move: '42...Rd2', text: '43.b3 Kf7 44.Rd6 Nf2+ (Motor: −1.76); kale değişimi Siyaha kazanç getirir.' },
        { move: '42...Ne1', text: '43.Rd1 Ng2 44.Rd6 (Motor: −0.12).' },
      ],
    },
    '43w': {
      text: '43.Rxb4: Kale b4’ü alır.',
      amac: 'Piyonu kazanmak ve vezir kanadında karşı oyun bulmak.',
      neden: 'Tek iyi hamle (Motor: −0.31). 43.Rd8+? (−2.89) ve 43.Ne3? (−3.17) kaybeder.',
    },
    '43b': {
      text: '43...Nf3: At f3’e gelir.',
      amac: '...Rc1+ ile mat tehdidi kurmak; h2 piyonunu desteklemek.',
      neden: 'Motorun ilk tercihi (−0.22). At f3’te g1 ve h2 karelerini tutar; Beyaz şahı h1’de tamamen hapsolur.',
      diger: [
        { move: '43...a5', text: '44.Rf4 Rxb2 45.Ne3+ (Motor: −0.10).' },
        { move: '43...Rf2', text: '44.Ne3 Kf7 45.Re4 (Motor: −0.02).' },
      ],
    },
    '44w': {
      text: '44.Rb8+: Kale şah çeker.',
      amac: '...Rc1+ matını önlemek için kaleyi birinci yataya yakın tutmak.',
      neden: 'Tek iyi hamle (Motor: −0.28). 44.Ng3? (−3.69) ve 44.Rh4?? (−6.36) kaybeder.',
    },
    '44b': {
      text: '44...Kf7: Şah f7’ye gider.',
      amac: 'Şahı merkeze getirmek.',
      neden: 'Tek hamle: 44...Rc8?? 45.Rxc8+ kale kaybettirir (Motor: +6.7).',
    },
    '45w': {
      text: '45.Ng3??: Ağır hata. At g3’e gelir.',
      amac: 'Atı h1’e yaklaştırıp h2 piyonunu almak.',
      neden: '**45.Rh8!** (−0.30) kaleyi h-hattına getirir: 45...Rc1+ 46.Kg2 Rg1+ 47.Kxf3 sonrası h1 karesi kaleyle korunur. 45.Rc8 (−0.19) de kaleleri değişerek eşitliği korur. 45.Ng3?? atı g-hattına koyar: 45...Rc1+ 46.Kg2 Rg1+ ve 47.Kxf3 Rxg3+ 48.Kxg3 h1=Q (Motor: −3.80).',
      diger: [
        { move: '45.Rh8', text: '45...Rc1+ 46.Kg2 Rg1+ 47.Kxf3 h1=R 48.Rxh1 Rxh1 (Motor: −0.26); piyon vezir olamaz.' },
        { move: '45.Rc8', text: '45...Rxb2 46.Rc1 Ke6 (Motor: −0.19); Beyazın kalesi birinci yatayda.' },
      ],
    },
    '45b': {
      text: '45...Rc1+: Kale şah çeker.',
      amac: 'Şahı g2’ye zorlamak ve ...Rg1+ ile g3 atına saldırmak.',
      neden: 'Motorun ilk tercihi (−4.51). 45...Ke6? (−0.25) fırsatı kaçırır.',
      diger: [
        { move: '45...Kg7', text: '46.Rb7+ Kg6 47.Rb8 Rc1+ (Motor: −3.64); aynı fikir, ama yavaş.' },
      ],
    },
    '46w': {
      text: '46.Kg2: Şah g2’ye gider.',
      amac: 'Mattan kaçmak.',
      neden: 'Tek hamle: 46.Nf1?? 46...Rxf1+ 47.Kg2 h1=Q+ ile 4 hamlede mat.',
    },
    '46b': {
      text: '46...Rg1+!: Kale g-hattından şah çeker ve g3 atına saldırır.',
      amac: 'Beyazı ya 47.Kxf3 Rxg3+ ile vezir kaybına ya da 47.Kf2 ile atı korumaya zorlamak.',
      neden: 'Motorun ilk tercihi (−4.94). 46...Nd4 (−0.06) 47.Kxh2 ile piyonu kaybettirir.',
      diger: [
        { move: '46...Nd4', text: '47.Kxh2 Ke6 (Motor: −0.06); avantaj kaybolur.' },
      ],
    },
    '47w': {
      text: '47.Kf2: Şah f2’de atı korur.',
      amac: 'g3 atını korumak.',
      neden: '47.Kxf3 Rxg3+ 48.Kxg3 h1=Q (Motor: −5.10) de kaybeder; 47.Kh3 (−5.80) ise 47...Rxg3+ 48.Kxg3 h1=Q ile aynı sonuca varır.',
      diger: [
        { move: '47.Kxf3', text: '47...Rxg3+ 48.Kxg3 h1=Q (Motor: −5.10); vezire karşı kale.' },
      ],
    },
    '47b': {
      text: '47...Nh4!: At g2 karesini tutar; Persson terk etti.',
      amac: '...Rg2+ ile g3 atını almak ve ...h1=Q ile piyonu vezirlemek.',
      neden: 'Motorun ilk tercihi (−5.55). 47...Rxg3 (−4.01) da kazanır, ama 47...Nh4 daha güçlü: 48.Rh8 Rg2+ 49.Ke1 Rxg3.',
      diger: [
        { move: '47...Rxg3', text: '48.Rh8 Rg8 49.Rh5 (Motor: −4.01); at gider, ama kazanç daha yavaş.' },
      ],
    },
  },
  exercises: [
    { id: 'pka-1', kind: 'tekrar', plan: false, title: 'Piyon h2’ye',
      source: 'Persson – Kamsky, Eilat 2012 (37. hamle)',
      fen: '2r3k1/3R2p1/p5n1/5N2/Pp3P2/5K1p/1PP5/8 b - - 0 37',
      prompt: 'Siyahın h3’te geçer piyonu var. Beyazın atı f5’i aldı ve kale d7’de g7’yi tehdit ediyor. Hamle Siyahta.',
      hint: 'Piyon bir kare daha ilerlerse Beyazın şahı ne yapmak zorunda kalır?',
      line: ['h2', 'Kg2', 'Rxc2+'],
      explanation: '**37...h2! 38.Kg2 Rxc2+** Şah piyonu durdurmak için g2’ye gitmek zorundadır; Siyah c2’yi şahla alır ve şah h1’e itilir. Motor: ...h2 −1.0, sonraki en iyi 37...Kf8 −0.1.',
      link: 'Geçer piyon ilerledikçe rakibin şahı ve taşları ona bağlanır; Kamsky bu fırsatla c2 piyonunu kazandı.' },
    { id: 'pka-2', kind: 'tekrar', plan: false, title: 'Şah ve at birlikte',
      source: 'Persson – Kamsky, Eilat 2012 (46. hamle)',
      fen: '1R6/5k2/p7/8/P7/5nN1/1P4Kp/2r5 b - - 6 46',
      prompt: 'Beyaz 45.Ng3?? oynadı ve 45...Rc1+ 46.Kg2 geldi. Siyahın h2 piyonu h1’e çok yakın. Hamle Siyahta.',
      hint: 'Kale g-hattından şah çekerse g3 atına da saldırır.',
      line: ['Rg1+', 'Kf2', 'Nh4'],
      accept: { 2: ['Rxg3'] },
      explanation: '**46...Rg1+! 47.Kf2 Nh4!** 47.Kxf3 Rxg3+ 48.Kxg3 h1=Q kaybeder. 47...Nh4 g2’yi tutar; ...Rg2+ ile g3 atı düşer. Motor: ...Rg1+ −4.3, sonraki en iyi 0.0; 47...Nh4 −5.4, 47...Rxg3 −4.1 (o da kazanır).',
      link: 'Geçer h-piyonu Beyazın şahını bağladı; kale şahı ve at kombinasyonu işi bitirdi.' },
    { id: 'pka-3', kind: 'transfer', plan: true, title: '...b4 ile atı kovmak',
      source: 'Sigurjonsson – Portisch, Las Palmas 1976 (8. hamle)',
      fen: 'rn1qk1nr/1b2bppp/p2pp3/1pp5/P3P3/2NP1NP1/1PP2PBP/R1BQ1RK1 b kq - 0 8',
      prompt: 'Aynı kuruluş: Beyaz Nc3, g3, Bg2, d3; Siyah ...e6, ...a6, ...b5, ...Bb7. Beyaz a4 ile b5 piyonuna saldırdı. Siyah ne yapmalı?',
      hint: 'Değişmek a-hattını açar ve e5 ile uzun çaprazı açar. Piyonu başka nereye götürebilirsiniz?',
      line: ['b4'],
      explanation: '**8...b4!** c3 atı kovulur (9.Nb1). 8...bxa4? 9.e5! ile uzun çapraz açılır ve Beyaz üstün olur. Motor: ...b4 −0.1, 8...Qb6 +0.6, 8...bxa4 +1.1. Bu bir plan hamlesi: fark büyük değil ama kuruluşun doğru cevabı.',
      link: 'Kamsky de 9.a4’e 9...b4 ile cevap verdi; iki oyunda da c3 atı merkezden uzaklaştı.' },
    { id: 'pka-4', kind: 'transfer', plan: false, title: 'Kale şahı, at saldırıya',
      source: 'Henneberger – Alekhine, Zürih 1934 (51. hamle)',
      fen: '8/1R3p2/5nk1/5Rp1/6P1/1P3K2/5P2/1r4r1 b - - 4 51',
      prompt: 'Alekhine 50...Rg1+ ile şahı f3’e itti. Siyahın kaleleri birinci yatayda, at f6’da. Hamle Siyahta.',
      hint: 'At bir piyon alıp Beyazın şahına yaklaşabilir.',
      line: ['Nxg4', 'Ra5', 'Rbe1'],
      explanation: '**51...Nxg4! 52.Ra5 Rbe1** At piyonu alıp şahın yanına gelir; kaleler ve at birlikte şahın etrafında mat ağı örer. Motor: ...Nxg4 −5.7, sonraki en iyi 51...Rh1 −4.4; 52...Rbe1 sonrası motor mat görüyor.',
      link: 'Kamsky ...Rg1+ ile şahı itip atını Nh4 ile oyuna kattı; Alekhine de kale şahından sonra atı şahın yanına getirdi.' },
  ],
};
