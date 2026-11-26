// Pavel Eljanov – Gata Kamsky, Rusya Takımlar Şampiyonası, Dagomys 2008 (5. tur). Kaynak: PgnMentor (Kamsky.pgn).
export default {
  id: 'eljanov-kamsky-2008',
  theme: 'c5 ile alan, h-hattı ve kale kaldırma',
  white: 'Pavel Eljanov', black: 'Gata Kamsky',
  whiteShort: 'Eljanov', blackShort: 'Kamsky',
  event: 'Rusya Takımlar Şampiyonası, 5. tur', site: 'Dagomys', year: 2008, eco: 'D15',
  variation: 'Slav Savunması, Chebanenko varyantı (4...a6 5.c5)', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. c5 g6 6. h3 Bg7 7. Bf4 O-O 8. e3 Bf5 9. Qb3 Ra7 10. Be2 Be4 11. O-O Bxf3 12. Bxf3 Nbd7 13. Rad1 Qc8 14. Rfe1 e6 15. e4 dxe4 16. Bxe4 a5 17. Bf3 Ra6 18. a3 Rd8 19. Bg3 Ne8 20. Qc2 Ndf6 21. Na4 Nd7 22. h4 Nc7 23. h5 Nb5 24. Qc4 Nc7 25. hxg6 hxg6 26. Qe2 Nd5 27. Bxd5 cxd5 28. Bh4 Rf8 29. Nc3 b6 30. Be7 Re8 31. Bd6 bxc5 32. dxc5 Bxc3 33. bxc3 Rc6 34. Rd3 Nxc5 35. Rh3 e5 36. Bxc5 Rxc5 37. Qe3 f6 38. Qh6 Kf7 39. Qh7+ Ke6 40. Qxg6 e4 41. Rh5 Rh8 42. Rf5 Rf8 43. Rd1 Qd7 44. Rh5 Kd6 45. c4 Qe6 46. Qg3+ Kd7 47. Rhxd5+ Rxd5 48. Rxd5+ 1-0`,

  summary: 'Rusya Takımlar Şampiyonası’nda (Dagomys, Nisan 2008) Eljanov, Kamsky’nin sevdiği a6-Slavına (Chebanenko) **5.c5** ile cevap verdi: vezir kanadını kilitledi, b6 karesini zayıflattı ve alan kazandı. Kamsky ...g6-Bg7 ve ...Bf5 kuruluşunu seçti; Beyaz **9.Qb3** ile b7’ye baskı yapınca kale a7’ye bağlandı, Siyahın beyaz kareli fili de 11...Bxf3 ile f3 atına değişildi. Böylece Beyazın elinde fil çifti kaldı. Eljanov kaleleri d1-e1’e yerleştirip **15.e4** ile merkezi açtı, ardından **22.h4-23.h5** ile fiyanketto şahına yürüdü. Siyahın 22...Nc7? (22...h5 gerekiyordu) ve özellikle **32...Bxc3?** hamleleri belirleyici oldu: g7’nin bekçisi kara kareli fil gidince **34.Rd3! ve 35.Rh3!** ile kale üçüncü yataydan h-hattına kaldırıldı, **38.Qh6 ve 39.Qh7+** Siyah şahını merkeze sürdü. Beyaz g6’yı aldı, d5 piyonunu üç taşla kuşattı ve 47.Rhxd5+ ile kesin kazancı aldı. Ural maçı yine de 3½–2½ kazandı.',
  intro: 'Slav Savunmasında 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 sonrası **4...a6** Chebanenko varyantıdır. Siyah c8 filini kapatmadan bekler ve ...b5 ile vezir kanadında yer açmayı, gerekirse c4’ü almayı hazırlar. Beyazın en ilkeli cevabı sayılan **5.c5**, bu fikri kökünden keser: ...b5 sonrası c5 piyonu kalır, b6 karesi zayıflar ve Beyaz vezir kanadında alan kazanır. Wikipedia’nın Slav maddesinin özetlediği gibi bu yapıda Siyahın oyunu artık **...e5 ve ...b6 kırılmalarına** bağlıdır; Beyaz da çoğu zaman fili f4’e getirip e5, d6, c7 ve b8 kara karelerini tutar. Kamsky bu partide merkez kırılmalarından önce fiyanketto (...g6, ...Bg7) ve ...Bf5 kuruluşunu seçti. Bu sağlam görünür, ama fil c8’den çıkınca b7 korumasız kalır (9.Qb3!) ve Siyah kara kareli filini ileride verirse şah kanadında yalnızca piyonlar kalır. Partinin bütün hikâyesi bu iki ayrıntıdan çıkar: c5 ile kazanılan alan ve g7 filinin değeri.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**5.c5** ile vezir kanadını kilitlemek: ...b5 ve ...dxc4 fikirlerini öldürmek, b6 karesini ileride bir at (Na4-b6) için hedef yapmak.',
      '**6.h3 ve 7.Bf4** ile kara kareli fili güvenle dışarı çıkarmak: h3 sayesinde ...Nh5 gelirse fil h2’ye çekilebilir, ...Bg4 ve ...Ng4 de olmaz.',
      'Siyahın fili f5’e çıkınca **9.Qb3** ile b7’ye baskı yapmak ve kaleyi a7’ye bağlamak; ardından ...Be4xf3 değişiminden sonra fil çiftini korumak.',
      'Kaleleri **d1 ve e1’e** dizip **15.e4** ile merkezi açmak; açık merkezde iki fil ve daha iyi yerleşmiş taşlarla oynamak.',
      '**22.h4-23.h5** ile fiyanketto şahının önündeki g6 piyonuna dayanmak ve h-hattını açmak (25.hxg6 hxg6).',
      'Siyahın kara kareli fili gidince **Rd3-h3** ile kaleyi üçüncü yataydan h-hattına kaldırmak; **Be5/Qe5 ve Rh8** mat motiflerini kurmak.',
      'Şahı merkeze sürdükten sonra (**Qh6, Qh7+, Qxg6**) zayıf d5 piyonunu c4, Rd1 ve Rh5 ile üç kez saldırarak düşürmek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...g6 ve ...Bg7 ile şahı sağlamlaştırmak ve uzun çaprazdan d4’e baskı yapmak; c5 piyonunun tabanını sorgulamak.',
      'Fili kapatmadan **...Bf5** ile çıkarmak; Qb3’e karşı b7’yi **...Ra7** ile korumak (Chebanenko yapılarının tanıdık bir manevrası).',
      '**...Be4xf3** ile f3 atını alıp Beyazın e4 ilerleyişini geciktirmek; bunun bedeli fil çiftini rakibe vermektir.',
      '...e6 ile d5’i desteklemek, ...a5 ve ...Ra6 ile a7 kalesini oyuna sokmak.',
      'Atları ...Ne8-c7-d5 yoluyla merkezin en iyi karesi d5’e getirmek.',
      'Gecikmeli **...b6 ve ...bxc5** ile Beyazın c5 kalesini kırıp kendi taşlarına alan açmak.',
      'Ama 22...Nc7? ile h-piyonunu durdurma şansını (22...h5) kaçırdı ve **32...Bxc3?** ile g7’nin bekçisini verdi; bundan sonra şah kanadındaki kara kareler savunulamadı.',
    ] },
  },
  critical: [
    { move: '5w', title: '5.c5: vezir kanadını kilitlemek', text: 'Chebanenko’nun ...b5 fikrine karşı en ilkeli cevap. Modern Chess’in kursunda bu hamle “en ilkeli” olarak anılır, çünkü ...a6 b6 karesinin kontrolünü zayıflatmıştır. Beyaz alan kazanır, ama merkezde esnekliğini verir: bundan sonra Siyahın oyunu ...e5 ve ...b6 kırılmalarına bağlıdır. Kamsky her ikisini de uzun süre ertelediği için Beyaz alan avantajını sakin sakin şah kanadı saldırısına çevirebildi. Motor: +0.55.' },
    { move: '9w', title: '9.Qb3: Bf5’in bedeli b7', text: 'Fil f5’e gittiği anda b7 yalnızca vezirle korunuyordu. 9.Qb3 Siyahı 9...Ra7 gibi çirkin bir savunmaya zorlar (9...Nbd7 10.Qxb7 Ne4 11.Bc7 Qc8 piyon verir, Motor: +1.0). a7 kalesi uzun süre pasif kalacak ve sonradan ...a5-Ra6 ile yeniden oyuna girmek için birkaç tempo harcayacak. Motor: Qb3 +0.97.' },
    { move: '15w', title: '15.e4: merkez fil çifti için açılıyor', text: 'Kaleler d1 ve e1’deyken Beyaz merkezi açar. 15...dxe4 16.Bxe4 sonrası Beyazın fil çifti açık çaprazlarda çalışır; c5 piyonu d6 karesini fil için bir ileri karakol yapar. Siyah ...Nd5 ile en iyi kareye yerleşmeye çalışsa da taşları daha geridedir. Motor: e4 +0.96 (15.Bd6 +1.04 de aynı fikirdeydi).' },
    { move: '22b', title: '22...Nc7?: h-piyonunu durdurma anı kaçtı', text: 'Beyaz 22.h4 oynayınca Siyahın en temiz cevabı 22...h5! idi: piyon h4’te durur ve g6 sağlam kalır (Motor: +0.94). Kamsky 22...Nc7 ile atı d5’e götürmeyi seçti; 23.h5! ile piyon g6’ya dayandı ve değerlendirme +1.7’ye çıktı. Fiyanketto şahına karşı h-piyonu ilerlerken savunanın ilk sorusu her zaman “...h5 mümkün mü?” olmalıdır.' },
    { move: '27w', title: '27.Bxd5: avantajın yarısı geri verildi', text: 'Motor 27.Nc3 (+1.14) veya 27.Rd3 (+1.11) ile baskıyı sürdürmeyi tercih ediyor. 27.Bxd5 iki fili bıraktı ve değerlendirme +0.51’e düştü; ama Siyah 27...cxd5 ile alınca (27...exd5 +0.56 daha iyiydi) c-hattı kapandı ve c5 piyonu canlı kaldı. 28.Bh4-29.Nc3-30.Be7-31.Bd6 sonrası oyun yaklaşık dengede, Siyah için savunulabilir bir pozisyondu.' },
    { move: '32b', title: '32...Bxc3?: g7’nin bekçisi gidiyor', text: 'Partinin kırılma anı. 31...bxc5 32.dxc5 sonrası Motor 32...Rd8 (+0.44) veya 32...d4 (+0.82) öneriyor. Kamsky c5 piyonunu kazanmak için c3 atını aldı: 33.bxc3 Rc6 ile piyon gerçekten düştü, ama Siyah şahın etrafında kara kareleri koruyacak tek taşını verdi. Beyazın d6 fili ve veziri artık h8-a1 çaprazında rakipsiz. Değerlendirme +0.44’ten +1.66’ya fırladı.' },
    { move: '34w', title: '34.Rd3! ve 35.Rh3!: kale kaldırma', text: 'Beyaz c5 piyonunu savunmaz; d1 kalesini üçüncü yatay üzerinden h-hattına götürür. 34.Rd3 Nxc5 35.Rh3! sonrası tehdit Be5 ve Rh8 matıdır: e5’teki fil h8’i korur, kale h8’den hem g8’i hem f8’i keser. 35...Rxd6? 36.Qe5! üç hamlede mat ettiği için Siyah 35...e5 ile e5 karesini kapatmak zorunda kaldı. Motor: 34.Rd3 +2.00, 34.c4 sadece +0.09; 35.Rh3 +2.05, 35.Bxc5 −0.25.' },
    { move: '38w', title: '38.Qh6 ve 39.Qh7+: şah merkeze sürülüyor', text: 'Kara kareli fil yokken h6 karesi vezire açıktır. 37.Qe3 f6 38.Qh6 Kf7 39.Qh7+ Ke6 (39...Kf8? 40.Qxg6 +6.4) 40.Qxg6 ile g6 düşer ve Siyah şahı e6’da, piyonların önünde kalır. Motor: 38.Qh6 +2.69 (38.Rb1 +1.04), 39.Qh7+ +3.20 (39.Rb1 +0.20). Bu saldırı h3 kalesi olmadan çalışmazdı: h7 karesini kale destekler.' },
    { move: '47w', title: '47.Rhxd5+: d5’in düşüşü ve terk', text: 'c4, Rd1 ve Rh5’in üçlü saldırısıyla d5 piyonu tutulamaz. 47.Rhxd5+ Rxd5 48.Rxd5+ sonrası her şah hamlesi kaybeder: 48...Ke7 49.Qc7+ Ke8 50.Rd8 mat; 48...Kc8 49.Rc5+ Kd7 50.Qc7+ ile vezir değişip kale oyunsonu kazanılır; 48...Kc6 49.Qb3 ile d5 kalesi ve b-hattı üzerinden açmaz. Kamsky terk etti (Motor: +6.3).' },
  ],
  lessons: [
    'Chebanenko Slavında **5.c5** vezir kanadını kilitler; Siyah ...e5 veya ...b6 kırılmalarını zamanında yapmazsa Beyazın alanı serbestçe şah kanadına aktarılır.',
    'Slavda fil c8’den f5’e çıkınca b7 zayıflar; **Qb3** bu zayıflığı hemen sorgular ve Siyahı ...Ra7 gibi pasif savunmalara iter.',
    'Fiyanketto şahına karşı **h4-h5** klasik saldırı yoludur; savunan taraf ...h5 ile piyonu durdurma şansını kaçırmamalıdır (22...h5!).',
    'Fiyanketto fili şahın en önemli savunucusudur: **...Bxc3** gibi bir değişim bir piyon kazandırsa bile g7, h6, f6 ve h8 karelerini rakibe bırakır.',
    'Kale, piyon zincirinin önündeki üçüncü yataydan (**Rd3-h3**) birkaç tempoda şah kanadına kaldırılabilir; burada c5 piyonu kale kaldırmanın bedeli olarak seve seve verildi.',
    'Saldırı mat getirmese de amacına ulaşır: şah merkeze sürülünce zayıf piyonlar (g6, sonra d5) **çoklu saldırıyla** toplanır.',
    'Saldırırken kaba hesap yetmez: 36.Qe3? Rxd6 37.Qh6 Qxh3 gibi bir ayrıntı (c8 vezirinin h3’ü görmesi) bütün saldırıyı boşa çıkarabilirdi; Eljanov önce 36.Bxc5 ile tehdidi temizledi.',
  ],
  notes: {
    '1w': {
      text: '1.d4: vezir piyonu iki kare ilerler ve merkezde e5 ile c5 karelerini kontrol eder.',
      amac: 'Merkezi tutmak ve c4 ile Vezir Gambiti yapısını hazırlamak.',
      neden: 'Eljanov 1.d4 oyuncusudur; bu partide Kamsky’nin Slav repertuvarına karşı hazırladığı 5.c5 sistemine giden yol buradan geçer.',
      diger: [
        { move: '1.e4', text: 'Motor biraz daha yüksek görüyor (+0.39), ama oyun Caro-Kann veya açık oyunlara gider; Slav çalışması burada işe yaramazdı.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (+0.16); çoğu zaman aynı Vezir Gambiti yapılarına geçer.' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah merkezdeki d5 karesini piyonla tutar ve e4 ilerleyişini zorlaştırır.',
      amac: 'Klasik bir merkez kurmak ve Slav ya da Vezir Gambiti Reddi yapısına girmek.',
      neden: 'd5 ile başlamak Slav yapısına giden yoldur; chess.com’un bu turnuva hakkındaki haberinde a6-Slav Kamsky’nin “gözde açılışı” olarak anılır.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına esnek giriş (+0.32); Kamsky’nin bu dönemdeki ana tercihi değildi.' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. c-piyonu d5’e saldırır.',
      amac: 'Siyahın merkez piyonunu sorgulamak ve c-hattını açma imkânı yaratmak.',
      neden: 'd5’i kenardan zorlamanın en doğal yolu budur; Beyaz ...dxc4 gelirse piyonu e3-Bxc4 veya e4 ile geri almayı planlar.',
      diger: [
        { move: '2.Nf3', text: 'Önce at (+0.20): Siyahın bazı sistemlerini (Albin, Chigorin) atlatmak isteyenlerin seçimi.' },
        { move: '2.Bf4', text: 'London Sistemi: daha sakin, c4 kavgasından kaçınan bir kuruluş.' },
      ],
    },
    '2b': {
      text: '2...c6: Slav Savunması. d5 piyonla desteklenir ve c8 filinin yolu kapanmaz.',
      amac: 'd5’i sağlam tutup c8 filini ileride f5 veya g4’e çıkarabilmek.',
      neden: 'Vezir Gambiti Reddi’nin (2...e6) temel sorunu kapanan c8 filidir; Slav bu sorunu doğrudan çözer. Bedeli, c6 piyonunun atın doğal karesini kapatmasıdır.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi (+0.34): sağlam ama c8 fili bir süre kapalı kalır.' },
        { move: '2...dxc4', text: 'Kabul Edilmiş Vezir Gambiti (Motor: +0.27): merkezi verip hızlı gelişim arar.' },
      ],
    },
    '3w': {
      text: '3.Nf3: at gelişir, e5 karesini kontrol eder ve d4’ü destekler.',
      amac: 'Ana hat Slavına girmek; Siyahın ...e5 kırılmalarını önceden zorlaştırmak.',
      neden: 'Atı önce f3’e getirmek ...e5 fikrine karşı en sağlam yoldur; 3.Nc3 sonrası Siyahın ...dxc4 ve ...e5 gibi alternatifleri daha fazladır.',
      diger: [
        { move: '3.Nc3', text: 'Motor biraz önde görüyor (+0.44), ama 3...e5 veya 3...dxc4 gibi ek seçenekler verir.' },
        { move: '3.cxd5', text: 'Değişim Slavı (+0.36): simetrik ve sakin yapılar.' },
      ],
    },
    '3b': {
      text: '3...Nf6: at f6’dan d5’i ve e4 karesini destekler.',
      amac: 'Gelişmek ve Beyazın e4 ilerleyişini engellemek.',
      neden: 'Slavın ana hamlesi; Siyah önce atı getirip fil için doğru zamanı bekler.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav’a (Semi-Slav) giden yol (+0.44); c8 fili e6 arkasında kalır.' },
        { move: '3...dxc4', text: 'Erken piyon alma (+0.48): 4.e3 b5 5.a4 ile Beyaz piyonu rahatça geri kazanır.' },
      ],
    },
    '4w': {
      text: '4.Nc3: ikinci at gelişir ve d5’e baskıyı artırır.',
      amac: 'd5’e iki taşla baskı kurup Siyahı karar vermeye zorlamak.',
      neden: 'Ana hat. 4.e3 c1 filini kapatır; Nc3 ise Bf4 veya Bg5 ile esnek kalmayı sağlar ve partideki c5 planına uygun düşer.',
      diger: [
        { move: '4.e3', text: 'Yavaş Slav (+0.29): sağlam ama c1 fili kapanır; ...Bf5 serbestçe gelir.' },
        { move: '4.cxd5', text: 'Değişim yapısı (+0.29): Siyah ...cxd5 ile simetrik bir oyun alır.' },
      ],
    },
    '4b': {
      text: '4...a6: Chebanenko varyantı. Siyah ...b5 ile vezir kanadında yer açmayı ve gerekirse c4’ü almayı hazırlar.',
      amac: 'Fili c8’de bekletip Beyazın kuruluşuna göre karar vermek: ...b5, ...Bf5, ...Bg4 veya ...e6 gibi esnek devamlar.',
      neden: 'Ana hat 4...dxc4 5.a4 sonrası Siyah b4’ü zayıflatmış olur; Chebanenko bunun yerine önce ...a6 ile bekler. Kamsky bu sistemi bu dönemde düzenli oynuyordu. Bedeli: b6 karesinin kontrolü zayıflar, 5.c5 bunu hemen kullanır.',
      diger: [
        { move: '4...dxc4', text: 'Ana hat Slav (Motor: +0.25): 5.a4 Bf5 6.e3 e6 7.Bxc4 ile klasik yapılar.' },
        { move: '4...e6', text: 'Yarı-Slav (+0.41): Botvinnik ve Meran gibi keskin sistemlere gider.' },
        { move: '4...g6', text: 'Schlechter sistemi (+0.46): partideki fiyanketto fikri, ama ...a6 olmadan.' },
      ],
    },
    '5w': {
      text: '5.c5: Beyaz c-piyonunu ileri iter; ...b5 ve ...dxc4 fikirleri ortadan kalkar, vezir kanadı kilitlenir.',
      amac: 'Alan kazanmak, b6 karesini zayıflatmak ve Siyahın vezir kanadında karşı oyununu dondurmak.',
      neden: 'Modern Chess kursunda 5.c5 “en ilkeli hamle” olarak anılır, çünkü ...a6 b6’nın kontrolünü zayıflatmıştır. Bedeli merkezdeki esnekliktir: d4 artık c-piyonuyla desteklenmez ve Siyah ...e5 veya ...b6 ile yapıyı kırmaya çalışır. ChessBase’in Chebanenko incelemesine göre 5.c5 birkaç yıl öncesine kadar ana hat sayılıyordu.',
      diger: [
        { move: '5.e3', text: 'Daha esnek (+0.35); Modern Chess kursu bunu önerir: 5...Bf5 6.Qb3 veya 5...b5 6.b3 ile oyun.' },
        { move: '5.a4', text: '...b5’i doğrudan önler; Carlsen–Kamsky (Wijk aan Zee 2009) bu yoldan gitti, ama b4 karesi zayıflar.' },
        { move: '5.cxd5', text: 'Değişim (+0.37): 5...cxd5 6.Bf4 ile sakin ama ...a6 sonrası b5 karesi hafif zayıf.' },
      ],
    },
    '5b': {
      text: '5...g6: Kamsky fiyanketto kuruluşunu seçer; fil g7’den uzun çapraza ve d4’e bakacak.',
      amac: 'Şahı sağlam bir fiyankettoya koymak ve c5-d4 zincirinin tabanı d4’ü uzun çaprazdan sorgulamak.',
      neden: 'c5 sonrası merkez kapalı olduğu için Siyah yavaş bir kuruluşu göze alabilir. Ama bu hamle ...e5 kırılmasını erteler ve şahı ileride bir h-piyonu saldırısına hedef yapar. Motor 5...Nbd7’yi (...e5 hazırlığı) daha iyi buluyor.',
      diger: [
        { move: '5...Nbd7', text: 'Motor’un tercihi (+0.25): 6.Qc2 e5 7.dxe5 ile hemen merkez kırılması.' },
        { move: '5...Bf5', text: 'Wikipedia’daki örnek hat 6.Bf4 Nbd7 7.e3 Nh5! ile f4 filini sorgulamak (+0.50); ChessBase’e göre Kritz bunu düzenli oynar.' },
        { move: '5...b6', text: 'Hemen c5’i sorgulamak (+0.50): 6.cxb6 Qxb6 7.Na4 Qc7 ile Beyaz c5 karesini alır.' },
      ],
    },
    '6w': {
      text: '6.h3: küçük ama önemli bir hamle; ...Bg4 ve ...Ng4 kareleri alınır, fil f4’e geldiğinde h2’ye çekilme yeri olur.',
      amac: 'Bf4’ü ...Nh5 saldırısına karşı güvenceye almak ve Siyahın c8 filine g4 karesini vermemek.',
      neden: 'c5 yapılarında Beyazın kara kareli fili çok değerlidir; e5’i tutar. Hemen 6.Bf4 oynansa 6...Nh5 ile fil değişime zorlanır. h3 bu fikri önceden keser. İleride bu piyon h4-h5 saldırısının da öncüsü olacak.',
      diger: [
        { move: '6.Bg5', text: 'Motor’un küçük farkla ilk tercihi (+0.42): filin f6 atına baskısı, ama e5 karesini tutmaz.' },
        { move: '6.Bf4', text: 'Doğrudan; 6...Nh5 7.Bg5 h6 ile fil yer değiştirmek zorunda kalır.' },
        { move: '6.g3', text: 'Kendi fiyankettosu (+0.35): sakin, Na4-b6 baskısıyla birleşir.' },
      ],
    },
    '6b': {
      text: '6...Bg7: fil uzun çapraza yerleşir.',
      amac: 'd4’e baskı yapmak ve şahın önündeki kara kareleri (f6, g7, h6) korumak.',
      neden: '5...g6’nın doğal devamı. Bu fil partinin sonuna kadar Siyahın en önemli savunucusu olacak; 32. hamlede verilmesi oyunu kaybettirdi.',
      diger: [
        { move: '6...Nbd7', text: 'Aynı değerde (+0.48); önce ata yer açıp filin karesini sonra seçmek.' },
        { move: '6...Ne4', text: 'Atı merkeze atlatıp c3’e baskı yapmak (+0.48); Beyaz Bf4 ve Rc1 ile hazırdır.' },
      ],
    },
    '7w': {
      text: '7.Bf4: fil f4’te e5, d6, c7 ve b8 kara karelerini kontrol eder.',
      amac: 'Siyahın ...e5 kırılmasını zorlaştırmak ve ileride d6 karesini filin ileri karakolu yapmak.',
      neden: 'Wikipedia’nın da vurguladığı gibi bu yapıda Bf4 Beyazın tipik kuruluşudur: e5 kontrol edilirse Siyahın en önemli kırılması duraksar. h3 sayesinde ...Nh5’e karşı Bh2 hazır.',
      diger: [
        { move: '7.a3', text: 'Bekleme (+0.29); b4 karesini tutar ama gelişimi geciktirir.' },
        { move: '7.Qc2', text: 'Vezir e4’ü destekler (+0.17); 7...O-O 8.Bf4 Bf5 ile Siyah tempo kazanır.' },
      ],
    },
    '7b': {
      text: '7...O-O: Siyah şahını güvenli kaleye alır.',
      amac: 'Gelişimi tamamlamak ve kaleyi f8’den merkeze bağlamak.',
      neden: 'Doğal bir hamle, ama Motor 7...Nbd7 (+0.47) veya 7...Ne4 (+0.50) ile önce merkezde iş yapmayı tercih ediyor. Rok erken yapılınca şah kanadı ileride h-piyonu saldırısı için net bir hedef olur.',
      diger: [
        { move: '7...Nbd7', text: 'Önce ...e5 hazırlığı (+0.47): 8.e3 Ne4 9.Rc1 O-O.' },
        { move: '7...Ne4', text: 'c3 atına baskı (+0.50): 8.e3 Nd7 9.Rc1 O-O ile ...e5’e hazırlık.' },
      ],
    },
    '8w': {
      text: '8.e3: d4 piyonu desteklenir ve f1 filine yol açılır.',
      amac: 'c5-d4 zincirini sağlamlaştırmak ve rok için hazırlanmak.',
      neden: 'c5 sonrası d4 artık c-piyonuyla desteklenmez; e3 bu boşluğu doldurur. f4 fili önceden dışarı çıktığı için e3 onu kapatmaz.',
      diger: [
        { move: '8.Rc1', text: 'c-hattına hazırlık (+0.45); 8...Nbd7 9.e3 Ne4 ile benzer oyun.' },
        { move: '8.Bh2', text: 'Filin erken geri çekilişi (+0.23); gereksiz bir tempo.' },
      ],
    },
    '8b': {
      text: '8...Bf5: fil c8’den f5’e çıkar ve b1-h7 çaprazına yerleşir.',
      amac: 'Kapalı yapıdaki “sorunlu” fili dışarı çıkarmak; ...Be4 ile f3 atını değişmeye hazırlanmak.',
      neden: 'Slavın temel fikri filin dışarıda gelişmesidir. Ama fil gidince b7 yalnızca vezirle korunur ve Qb3 hemen gelir. Motor 8...Nfd7 (+0.56; ...e5 fikri) ve 8...Nbd7’yi (+0.66) daha iyi buluyor.',
      diger: [
        { move: '8...Nfd7', text: 'Motor’un tercihi (+0.56): uzun çaprazı açıp ...e5’e hazırlanmak; 9.Bg5 h6 10.Bh4 g5 ile keskin oyun.' },
        { move: '8...Nbd7', text: '+0.66: önce gelişim; 9.Bd3 Nh5 10.Bh2 e5 ile kırılma yolu.' },
        { move: '8...b6', text: '+0.67: c5’i hemen sorgulamak; 9.cxb6 Qxb6 10.Be2 ile b2’ye baskı.' },
      ],
    },
    '9w': {
      text: '9.Qb3!: vezir b7 piyonuna saldırır.',
      amac: 'Fil vezir kanadından ayrıldığı anda b7 zayıflığını sorgulamak ve Siyahı pasif bir savunmaya zorlamak.',
      neden: 'Slavın ...Bf5 kuruluşlarına karşı klasik reçete. ChessBase’in Carlsen–Kamsky analizinde, 5.a4 Bf5 6.Qb3 Ra7 hattında Gelfand–Morozevich partisinde Beyazın vezir kanadı baskısının “ezici” olduğu yazılır; burada da aynı motif. Motor bu hamleyi en iyi buluyor (+0.97).',
      diger: [
        { move: '9.Be2', text: '+0.78: sakin gelişim; 9...Nbd7 10.O-O Ne4 ile Siyah rahat bir oyun alır.' },
        { move: '9.Ne5', text: '+0.57: fili tehdit etmeden merkeze atlar; 9...Bc8 ile Siyah ...Nfd7 hazırlar.' },
      ],
    },
    '9b': {
      text: '9...Ra7: kale a7’den b7’yi savunur.',
      amac: 'Piyonu vermeden b7’yi korumak; vezir d8’de kalabilsin.',
      neden: 'Chebanenko yapılarında ...a6 sayesinde mümkün olan tanıdık bir savunma. Kale bir süre pasif kalacak, ama Motor bunu en iyi buluyor (+0.75). 9...Nbd7 10.Qxb7 Ne4 11.Bc7 Qc8 piyonu vererek biraz oyun arar ama Motor’a göre telafisi yetersiz (+0.98).',
      diger: [
        { move: '9...Qc8', text: '+0.81: vezirle savunmak; 10.Be2 Nbd7 11.O-O Ne4 ile kale a8’de kalır.' },
        { move: '9...Nbd7', text: 'Piyon fedası (+0.98): 10.Qxb7 Ne4 11.Bc7 Qc8, Siyah gelişim için piyon verir.' },
      ],
    },
    '10w': {
      text: '10.Be2: fil gelişir ve Beyaz rok yapmaya hazırlanır.',
      amac: 'Gelişimi tamamlamak ve şahı güvenceye almak.',
      neden: 'e2’deki fil f3 atını destekler; ...Be4xf3 gelirse Bxf3 ile geri alınabilir ve fil uzun çapraza yerleşir. Motor 10.Nh4’ü (+0.83) biraz daha keskin buluyor: f5 filini kovalayıp fil çiftini almak.',
      diger: [
        { move: '10.Nh4', text: '+0.83: 10...Be6 11.Bd3 Nbd7 12.Qc2 ile fili yerinden etmek.' },
        { move: '10.Rd1', text: '+0.63: önce merkez kalesi; aynı planlara geçer.' },
      ],
    },
    '10b': {
      text: '10...Be4: fil e4’e yerleşir ve f3 atına bakar.',
      amac: 'f3 atını değişip Beyazın e4 ilerleyişini geciktirmek ve d5’i atla destekleyebilmek.',
      neden: 'Fil f5’te Nh4 ile kovalanabilir; e4’te ise merkezde güçlüdür ve ...Bxf3 seçeneği hazırdır. Motor’a göre en iyi hamle (+0.66).',
      diger: [
        { move: '10...Nbd7', text: '+0.70: gelişim; 11.O-O h5 ile filin yerini korumak.' },
        { move: '10...Ne4', text: '+0.85: at merkeze; 11.O-O Nd7 12.g4 Be6 ile Beyaz alan kazanır.' },
      ],
    },
    '11w': {
      text: '11.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye alıp kaleleri merkeze bağlamak.',
      neden: 'Doğal ve sağlam. Motor 11.Ng5’i (+0.78; 11...Bxg2 12.Rg1 Be4 13.f3 ile fili yakalamaya çalışmak) veya 11.Rd1’i biraz daha iyi buluyor, ama Eljanov açık şah kanadıyla macera aramadı.',
      diger: [
        { move: '11.Ng5', text: '+0.78: e4 filini sorgulamak; 11...Bxg2 12.Rg1 Be4 13.f3 keskin bir oyun.' },
        { move: '11.Rd1', text: '+0.68: 11...a5 12.O-O Bxf3 13.Bxf3 ile partiye benzer.' },
        { move: '11.Qb6', text: '+0.65: vezir değişimine davet; 11...Qxb6 12.cxb6 Ra8 ile b6’da piyon kalır ama Beyazın saldırı şansı azalır.' },
      ],
    },
    '11b': {
      text: '11...Bxf3: Siyah fili atla değişir.',
      amac: 'e4 ilerleyişini destekleyen atı ortadan kaldırmak ve merkezde daha az taş bırakmak.',
      neden: 'Motor bunu en iyi buluyor (+0.51), çünkü alternatifler kötü: 11...Nbd7? 12.Ng5! (+1.22) ile fil tuzağa düşer; 11...Nh5 12.Bxb8 (+0.99) ile kale a7’de daha da kötü olur. Bedeli: Beyaz fil çiftini alır ve bu açık bir merkezde uzun vadeli bir artıdır.',
      diger: [
        { move: '11...Nbd7', text: 'Hata (+1.22): 12.Ng5! fili kovalar, ...a5 13.Bh2 b6 sonrası Siyah zorda.' },
        { move: '11...Nh5', text: '+0.99: 12.Bxb8 Qxb8 13.Nd2 ile e4 fili kovalanır.' },
      ],
    },
    '12w': {
      text: '12.Bxf3: fil geri alır ve uzun çapraza yerleşir.',
      amac: 'Fil çiftini korumak ve d5 ile e4 karelerine baskı yapmak.',
      neden: 'Piyonla almak (12.gxf3) şahı açardı; filde almak hem yapıyı sağlam tutar hem e4 ilerleyişini destekler.',
      diger: [
        { move: '12.gxf3', text: '+0.23: merkezde f-piyonu kazanır ama şah önü zayıflar.' },
        { move: '12.Bxb8', text: '−0.65: önce b8 atını almak tempo kaybettirir; 12...Qxb8 13.Bxf3 e5 ile Siyah merkezi kırar.' },
      ],
    },
    '12b': {
      text: '12...Nbd7: at d7’ye gelişir.',
      amac: '...e5 veya ...b6 kırılmalarını desteklemek ve d8 vezirine yol açmak.',
      neden: 'Doğal gelişim (+0.61). Motor 12...Nfd7’yi (+0.41) daha iyi buluyor: 13.Bg5 Bf6 14.Bxf6 Nxf6 ile Siyah, c5 yapısında Beyazın en değerli taşı olan kara kareli fili değiştirir. Partide bu fil kalıp ileride yanlış taşla değiştirildi.',
      diger: [
        { move: '12...Nfd7', text: '+0.41: g7 filinin çaprazını açar; 13.Bg5 Bf6 14.Bxf6 Nxf6 ile kara kareli filler değişir.' },
        { move: '12...a5', text: '+0.68: önce a7 kalesine yol; 13.Rad1 Nbd7 ile aynı kuruluş.' },
      ],
    },
    '13w': {
      text: '13.Rad1: kale d1’e gelir; d4’ü destekler ve e4 hazırlığına katılır.',
      amac: 'Merkez kırılmasından önce kaleleri d ve e hatlarına dizmek.',
      neden: 'e4 oynandıktan sonra d-hattı açılacak; kale önceden orada olursa d4 ve d5 baskısı hazırdır. a1 kalesinin kullanılması, f1 kalesini e1 için serbest bırakır.',
      diger: [
        { move: '13.e4', text: '+0.49: hemen merkez; 13...dxe4 14.Bxe4 Nxe4 15.Nxe4 ile fil çifti gider.' },
        { move: '13.Rfd1', text: '+0.38: aynı fikir, ama f1 kalesi e1 yerine d1’e gelir ve a1 kalesi geride kalır.' },
      ],
    },
    '13b': {
      text: '13...Qc8: vezir c8’den b7’yi korur ve a7 kalesini serbest bırakmayı hedefler.',
      amac: 'Kalenin b7 savunma görevini veziri üstlenerek bitirmek.',
      neden: 'Mantıklı ama yavaş. Motor 13...e6 (+0.71) veya 13...a5 (+0.72) ile merkezi hemen güçlendirmeyi tercih ediyor; 13...Qc8 değerlendirmeyi +0.95’e çıkarır. Vezir c8’de bir avantaj da sağlayacak: c8-h3 çaprazını görür (36. hamleyle ilgili not).',
      diger: [
        { move: '13...e6', text: '+0.71: d5’i desteklemek; 14.Bg3 a5 15.Na4 Re8.' },
        { move: '13...a5', text: '+0.72: önce a-piyonu; 14.Rfe1 e6 15.Na4 ile kale a6’dan oyuna girebilir.' },
        { move: '13...Re8', text: '+0.72: e-hattına hazırlık; 14.e4 dxe4 15.Bxe4 e6.' },
      ],
    },
    '14w': {
      text: '14.Rfe1: ikinci kale e1’e gelir; e4 ilerleyişi artık hazır.',
      amac: 'e4’ü kale desteğiyle oynamak ve e-hattını açmaya hazırlanmak.',
      neden: 'e4 sonrası ...dxe4 Bxe4 ile açılacak merkezde kaleler hazır olmalı. Motor 14.g4’ü (+0.93) de öneriyor: alan kazanma ve ileride g5 ile f6 atını kovma fikri.',
      diger: [
        { move: '14.g4', text: '+0.93: şah kanadında alan; 14...h6 15.Bg3 a5 16.Bg2.' },
        { move: '14.Bh2', text: '+0.71: filin önceden geri çekilişi; daha yavaş.' },
      ],
    },
    '14b': {
      text: '14...e6: d5 piyonu desteklenir ve f4 filinin d6’ya bakışı kapatılmaya çalışılır.',
      amac: 'e4 kırılmasına karşı merkezi sağlamlaştırmak ve d5’i atlar için sağlam bir kare yapmak.',
      neden: 'Doğal, ama ...e5 kırılmasından vazgeçmek demektir; bundan sonra Siyahın tek kırılması ...b6 kalır. Motor 14...Re8’i (+0.78) biraz daha iyi buluyor: e4 sonrası ...Nxe4 ve ...e5 fikrini canlı tutar.',
      diger: [
        { move: '14...Re8', text: '+0.78: 15.e4 Nxe4 16.Bxe4 dxe4 17.Nxe4 ile ...e5 hâlâ mümkün.' },
        { move: '14...Ra8', text: '+0.86: kaleyi a8’e geri getirmek; 15.Na4 Re8 16.Bh2 h5.' },
        { move: '14...a5', text: '+0.96: 15.g4 h5 16.Kg2 Re8 ile şah kanadında gerginlik.' },
      ],
    },
    '15w': {
      text: '15.e4: Beyaz merkezi açar.',
      amac: 'Kaleleri ve fil çiftini açık oyuna sokmak; d6 karesini fil için ileri karakol yapmak.',
      neden: 'Kaleler d1-e1’de, fil f3’te: hazırlık tamam. 15...dxe4 16.Bxe4 sonrası f3 fili e4’e gelir, d5’e ve b7’ye bakar. Motor 15.Bd6 (+1.04) ve 15.g4’ü (+1.02) de aynı düzeyde buluyor; e4 (+0.96) en doğrudan yoldur.',
      diger: [
        { move: '15.Bd6', text: '+1.04: önce fili d6’ya yerleştirip f8 kalesini bağlamak; 15...Re8 16.g4 h6 17.e4.' },
        { move: '15.g4', text: '+1.02: alan kazanma; 15...Re8 16.Bd6 h6 17.e4.' },
      ],
    },
    '15b': {
      text: '15...dxe4: Siyah merkezde değişir.',
      amac: 'e4 piyonunun d5’i zorlamasına izin vermeden merkezi sadeleştirmek.',
      neden: 'Beklemek (15...Ne8? 16.h4 dxe4 17.Nxe4, +1.61) Beyaza e5 ilerleyişi verirdi. 15...Nxe4 16.Bxe4 dxe4 17.g4 de mümkündü (+1.14), ama e4 piyonu zayıf kalır.',
      diger: [
        { move: '15...Nxe4', text: '+1.14: 16.Bxe4 dxe4 17.g4 b6 ile e4 piyonu hedef olur.' },
        { move: '15...Ne8', text: '+1.61: pasif; 16.h4 dxe4 17.Nxe4 Ndf6 ile Beyaz çok rahat.' },
      ],
    },
    '16w': {
      text: '16.Bxe4: fil e4’te geri alır ve merkezde güçlü durur.',
      amac: 'Fil çiftini korumak ve b7 ile h7’ye bakan aktif bir fil kurmak.',
      neden: '16.Nxe4 (+0.42) Nxe4 ile fil çiftini kaybettirirdi; fil ile almak Beyazın ana kozunu korur (+0.97).',
      diger: [
        { move: '16.Nxe4', text: '+0.42: 16...Nxe4 17.Bxe4 Ra8 ile fil çifti gider ve Siyah rahatlar.' },
        { move: '16.Be2', text: '+0.12: piyonu almadan geri çekilmek tempo kaybıdır.' },
      ],
    },
    '16b': {
      text: '16...a5: a-piyonu ilerler; a7 kalesi a6 üzerinden oyuna girmek ister, b4 karesi kontrol edilir.',
      amac: 'Pasif a7 kalesini yatay olarak (a6-b6/c6 yoluyla) oyuna sokmak.',
      neden: '9...Ra7’nin bedelini ödeme zamanı. Motor 16...Nd5’i (+0.78) daha iyi buluyor: önce atı en iyi kareye koyup sonra kaleyi düzeltmek.',
      diger: [
        { move: '16...Nd5', text: '+0.78: 17.Bd6 Re8 18.Bf3 Qd8 ile at merkezde sağlam.' },
        { move: '16...Qd8', text: '+0.84: veziri d8’e geri getirip kale için b7’yi yeniden korumak.' },
      ],
    },
    '17w': {
      text: '17.Bf3: fil f3’e çekilir ve uzun çaprazda kalır.',
      amac: 'Fili ...Nxe4 değişiminden korumak ve d5 karesine bakmak.',
      neden: 'e4’te fil ...Nxe4 ile değişilebilirdi; f3’ten aynı çaprazı görür ve güvenli kalır. Motor 17.Bd6 (+0.92) ve 17.Bf3’ü (+0.89) eşit görüyor.',
      diger: [
        { move: '17.Bd6', text: '+0.92: önce d6 karakolu; 17...Re8 18.Bf3 Nd5 19.Ne4.' },
        { move: '17.a3', text: '+0.84: b4 karesini önceden almak.' },
      ],
    },
    '17b': {
      text: '17...Ra6: kale a6’ya çıkar; yataydan b6 ve c6 karelerine bakar.',
      amac: 'a7’de hapsolmuş kaleyi altıncı yataydan oyuna sokmak.',
      neden: 'Plan doğru, ama sıra yanlış. Motor 17...Nd5’i (+0.79) çok daha iyi buluyor; 17...Ra6 değerlendirmeyi +1.39’a çıkarır, çünkü kale a6’da da pek bir şey yapamaz (b6 c5 piyonuyla kontrol altında).',
      diger: [
        { move: '17...Nd5', text: '+0.79: 18.Bd6 Re8 19.Ne4 a4 ile at merkezde, Siyahın oyunu sağlam.' },
        { move: '17...Qd8', text: '+0.93: veziri d-hattına geri getirmek.' },
      ],
    },
    '18w': {
      text: '18.a3: a-piyonu b4 karesini kontrol eder.',
      amac: '...a4-a3 veya ...Nb4 gibi vezir kanadı fikirlerini önceden durdurmak; Na4 manevrasına zemin hazırlamak.',
      neden: 'Sakin bir profilaksi. Motor 18.g4’ü (+1.34) biraz daha keskin buluyor: alan kazanıp g5 ile f6 atını kovmak. Eljanov önce vezir kanadını kapatıp sonra şah kanadına dönmeyi tercih etti.',
      diger: [
        { move: '18.g4', text: '+1.34: 18...Nd5 19.Nxd5 cxd5 20.Be2 ile şah kanadında alan.' },
        { move: '18.Bd6', text: '+1.16: 18...Rd8 19.Bg3 Ra8 20.a3.' },
      ],
    },
    '18b': {
      text: '18...Rd8: kale d8’e gelir ve d-hattına bakar.',
      amac: 'd4 piyonuna baskı yapmak ve Beyazın d-hattındaki kalesine karşılık vermek.',
      neden: 'Bf4’ün d6’ya gelmesini de zorlaştırır. Motor 18...Nd5’i (+1.08) yine biraz daha iyi buluyor; Siyah atları d5’e getirmekte geç kalıyor.',
      diger: [
        { move: '18...Nd5', text: '+1.08: 19.Nxd5 exd5 20.Bd6 Rd8 ile sağlam bir merkez.' },
        { move: '18...Ra7', text: '+1.09: kaleyi geri götürmek; tutarsız ama sağlam.' },
      ],
    },
    '19w': {
      text: '19.Bg3: fil g3’e çekilir ve b8-h2 çaprazında kalır.',
      amac: '...Nd5 ile tempo kazanılmasını önceden engellemek.',
      neden: '...Nd5 hem f4 filine hem c3 atına saldırırdı; fil g3’te bu tehdidin dışındadır ve d6-c7 çaprazını korur. Motor 19.Bh2’yi (+1.25) aynı amaçla biraz daha iyi buluyor.',
      diger: [
        { move: '19.Bh2', text: '+1.25: aynı fikir, fil g-piyonunun ilerlemesine engel olmaz.' },
        { move: '19.g4', text: '+1.21: 19...Nd5 20.Nxd5 exd5 21.g5 ile alan.' },
      ],
    },
    '19b': {
      text: '19...Ne8: at e8’e geri çekilir ve c7 üzerinden d5’e yönelir.',
      amac: 'f6 atına d5 yolunu açmak ve diğer atı c7-d5 yoluyla merkeze getirmek.',
      neden: 'Siyahın taşları yer bulmakta zorlanıyor: d7 atı f6’ya, e8 atı c7’ye geçecek. Motor 19...Ra7 (+1.09) veya 19...Ra8’i (+1.17) eşdeğer görüyor; Siyah bekleme manevraları yapıyor.',
      diger: [
        { move: '19...Ra7', text: '+1.09: 20.Be2 Nd5 21.Ne4 a4.' },
        { move: '19...Ra8', text: '+1.17: kale geri döner, 20.Bh2 Bf8 21.Qc2 b6.' },
      ],
    },
    '20w': {
      text: '20.Qc2: vezir c2’ye çekilir ve b1-h7 çaprazından şah kanadına bakar.',
      amac: 'Veziri şah kanadına yakın bir kareye getirmek; ileride Qc1-h6 veya Qe2-e4 manevralarına hazırlık.',
      neden: 'b3’te vezir artık b7’ye baskı yapmıyor (vezir c8’de), ve ...Nc7-b5 gibi fikirler yüzünden c2 daha güvenlidir. Motor en iyi hamle olarak görüyor (+1.24).',
      diger: [
        { move: '20.Bh4', text: '+1.21: 20...Bf6 21.Bg3 Bg7 ile tekrar.' },
        { move: '20.Bh2', text: '+1.14: 20...Ndf6 21.g4 h6 22.Rd3.' },
      ],
    },
    '20b': {
      text: '20...Ndf6: d7 atı f6’ya gelir ve şahı savunur.',
      amac: 'd5 ve e4 karelerini kontrol etmek, h7’yi korumak.',
      neden: 'Motor’un ilk tercihi (+1.04). Siyah taşlarını şah kanadında topluyor; bu ileride h4-h5 saldırısına karşı faydalı olabilirdi.',
      diger: [
        { move: '20...Ra8', text: '+1.11: 21.Qc1 Nc7 22.Qf4 e5 ile merkez kırılması denenir.' },
        { move: '20...Ra7', text: '+1.17: 21.Re3 Nc7 22.Na4.' },
      ],
    },
    '21w': {
      text: '21.Na4: at kenara gider ve b6 karesine bakar.',
      amac: 'b6 zayıflığını sorgulamak ve ...b6 kırılmasını tamamen engellemek.',
      neden: 'b6 karesinin zayıflığı doğrudan 5.c5’in sonucudur; at oraya giderse a6 kalesi ve c8 veziriyle çatal kurar. Motor en iyi hamle olarak görüyor (+1.16). 21...Nc7? 22.Nb6! Rxb6 23.cxb6 kalite kazandırırdı.',
      diger: [
        { move: '21.Be5', text: '+1.04: e5’te fil uzun çaprazda Bg7 ile yüzleşir.' },
        { move: '21.Qc1', text: '+1.03: vezir h6 karesine yönelir; 21...Rd7 22.Be5.' },
      ],
    },
    '21b': {
      text: '21...Nd7: at yeniden d7’ye döner ve b6’yı korur.',
      amac: 'Na4-b6 fikrine karşı b6 karesini tutmak.',
      neden: '21...Nc7? 22.Nb6! hemen kalite kaybettirirdi (+1.49). Motor 21...Nd5 (+1.02) ile atı merkeze koymayı da öneriyor: 22.Bxd5 cxd5 sonrası Beyaz fil çiftini verir. Siyahın atları gidip geliyor; bu yapıda iyi kare bulamıyorlar.',
      diger: [
        { move: '21...Nd5', text: '+1.02: 22.Bxd5 cxd5 23.Qd3 Qc6 ile Siyah fil çiftini bozar.' },
        { move: '21...Nc7', text: 'Hata (+1.49): 22.Nb6! Rxb6 23.cxb6 ile kalite gider.' },
      ],
    },
    '22w': {
      text: '22.h4!?: Beyaz h-piyonunu fiyanketto şahına doğru yürütür.',
      amac: 'h5 ile g6’ya dayanmak, hxg6 ile h-hattını açmak ve şahın önünü zayıflatmak.',
      neden: 'Merkez ve vezir kanadı kilitli, Siyahın karşı oyunu yok: bu tam h-piyonu saldırısının zamanıdır. h3 piyonu 6. hamlede zaten bir kare ilerlemişti. Motor 22.Bh4 (+1.22) ve 22.Rd3’ü (+1.17) biraz daha iyi buluyor (h4 +0.85), çünkü Siyahın 22...h5 cevabı var; ama pratik olarak hamle rakibe zor bir soru sorar.',
      diger: [
        { move: '22.Bh4', text: '+1.22: 22...Bf6 23.Bg3 Bg7 24.Rd3 ile kale kaldırma hazırlığı.' },
        { move: '22.Rd3', text: '+1.17: kaleyi önceden üçüncü yataya getirmek; 22...Nc7 23.Bh4 Re8 24.Nc3.' },
      ],
    },
    '22b': {
      text: '22...Nc7?: at c7’ye gelir, d5 veya b5’e gitmek ister; ama h-piyonu durdurulmaz.',
      amac: 'Atı merkeze getirip ...Nd5 ile sağlam bir kare kurmak.',
      neden: 'Bu partideki ilk ciddi yanlışlık. 22...h5! (+0.94) piyonu h4’te durdururdu: 23.Bf4 Nef6 24.Bg5 Re8 ile g6 sağlam kalır. 22...Nc7 sonrası 23.h5 rahatça gelir ve değerlendirme +1.71’e çıkar. Siyah taş manevrasıyla meşgulken asıl tehlikeyi kaçırdı.',
      diger: [
        { move: '22...h5', text: 'Motor’un tercihi (+0.94): 23.Bf4 Nef6 24.Bg5 Re8, piyon g6 karşısında durur.' },
        { move: '22...Nef6', text: '+1.31: 23.h5 g5 24.b3 Nd5 ile h-hattını kapalı tutmak, ama g5 zayıf.' },
      ],
    },
    '23w': {
      text: '23.h5: piyon g6’ya dayanır; h-hattı açılmak üzere.',
      amac: 'hxg6 ile h-hattını açmak ve Siyah şahının önündeki piyon yapısını bozmak.',
      neden: 'Siyah ...h5’i kaçırdığına göre Beyaz piyonu hemen ileri atar. Motor en iyi hamle olarak görüyor (+1.52); 23.Nc3 h5! ile Siyah son anda kapıyı kapatırdı (+1.25).',
      diger: [
        { move: '23.Nc3', text: '+1.25: 23...h5! ile Siyah piyonu durdurur.' },
        { move: '23.Be2', text: '+1.09: 23...Nb5 24.Qc4 h5 ile aynı sorun.' },
      ],
    },
    '23b': {
      text: '23...Nb5: at b5’ten d4’e baskı yapmak ister.',
      amac: 'd4 piyonuna saldırıp Beyazı savunmaya zorlamak ve dikkati merkeze çekmek.',
      neden: 'Karşı oyun arayışı, ama b5’te at sadece d4’e bakar ve şahtan uzaklaşır. Motor 23...Nd5’i (+1.56) daha iyi buluyor: merkezde kalıp f6 ve h5 karelerine bakmak. Partideki hamle +1.80.',
      diger: [
        { move: '23...Nd5', text: '+1.56: 24.Nc3 N7f6 25.Qc1 b5, at merkezde şahı savunur.' },
        { move: '23...Re8', text: '+1.87: 24.Nc3 Nf6 25.Qc1 ile Beyaz h6’ya hazırlanır.' },
      ],
    },
    '24w': {
      text: '24.Qc4: vezir c4’e gelir; d4’ü korur, b5 atını sorgular ve d5-e6 çaprazına bakar.',
      amac: 'Nb5’in d4 baskısını etkisiz bırakmak ve e6 zayıflığını hedeflemek.',
      neden: 'Vezir c4’te hem savunur hem saldırır; ...Nxd4 artık Qxd4 ile karşılanır. Motor en iyi hamle olarak görüyor (+1.85).',
      diger: [
        { move: '24.Qe4', text: '+1.61: 24...g5 25.h6 Bxh6 26.Qe3 ile karmaşık oyun.' },
        { move: '24.Bh4', text: '+1.54: 24...Nxd4 25.Qe4 Nxf3+ 26.Qxf3, piyon gider ama oyun açılır.' },
      ],
    },
    '24b': {
      text: '24...Nc7: at c7’ye geri döner.',
      amac: 'e6’yı ve d5 karesini yeniden korumak.',
      neden: 'b5’te atın yapacağı bir şey kalmadı. Motor 24...g5 (+1.61) ile h-hattını kapalı tutmayı biraz daha iyi buluyor: 25.Be4 Nf6 26.Bc2 Nxh5. Siyah bekledi ve Beyaza hxg6 seçeneği verdi.',
      diger: [
        { move: '24...g5', text: '+1.61: h-hattını kapatmak; 25.Be4 Nf6 26.Bc2 Nxh5 ile h5 piyonu bile düşebilir.' },
        { move: '24...Ra8', text: '+1.90: kaleyi a8’e getirmek; 25.Bh4 Re8 26.Nc3.' },
      ],
    },
    '25w': {
      text: '25.hxg6: Beyaz h-hattını açar.',
      amac: 'h-hattını kale ve vezir için bir saldırı yolu yapmak.',
      neden: 'Mantıklı ama aceleci. Motor önce 25.Qc1 (+1.78) veya 25.Bh4 (+1.78) ile taşları hazırlamayı tercih ediyor; değişim gerginliği bozar ve Siyaha nefes aldırır (+1.21). Yine de açılan h-hattı oyunun sonunda belirleyici olacak.',
      diger: [
        { move: '25.Qc1', text: '+1.78: vezir h6 karesine bakar; 25...Nd5 26.Bxd5 cxd5 27.Nc3.' },
        { move: '25.Bh4', text: '+1.78: fil d8 kalesine ve f6’ya baskı; 25...Bf6 26.Bg3 Nd5 27.Qc1.' },
      ],
    },
    '25b': {
      text: '25...hxg6: h-piyonuyla alınır.',
      amac: 'Şahın önünde f7-g6 yapısını korumak.',
      neden: 'Zorunlu. 25...fxg6? 26.Bxc7 Qxc7 27.Qxe6+ e6 piyonunu ve şah güvenliğini kaybettirir (+4.63); 25...Rf8? 26.gxf7+ Rxf7 27.Bxc7 de aynı şekilde kötü (+4.50).',
      diger: [
        { move: '25...fxg6', text: '+4.63: 26.Bxc7 Qxc7 27.Qxe6+ Kh8, e6 düşer ve şah açık.' },
      ],
    },
    '26w': {
      text: '26.Qe2: vezir e2’ye çekilir ve e-hattından e6’ya bakar.',
      amac: 'Veziri e2-e4 veya e3-h6 yoluna hazırlamak; ...Nd5-b4 benzeri fikirlerden uzaklaşmak.',
      neden: 'c4’te vezir ...Nd5 ve ...b5 ile tempo kaybedebilirdi. Motor 26.Qc1’i (+1.34) h6 karesine yönelmek için biraz daha iyi buluyor; Qe2 de yakın (+1.20).',
      diger: [
        { move: '26.Qc1', text: '+1.34: 26...Nd5 27.Nc3 N7f6 28.Be5 ile Qh6 hazırlığı.' },
        { move: '26.Nc3', text: '+1.29: atı merkeze geri getirmek; 26...Nf6 27.Be5.' },
      ],
    },
    '26b': {
      text: '26...Nd5: at d5’e yerleşir; merkezin en güçlü karesi.',
      amac: 'c3 ve e3 karelerine bakmak, f6 karesini korumak ve d5’ten şahı savunmak.',
      neden: 'Siyahın atları uzun yolculuktan sonra sonunda iyi bir kareye ulaştı. Motor 26...Ra8 (+1.17) ile neredeyse aynı görüyor (+1.18).',
      diger: [
        { move: '26...Ra8', text: '+1.17: 27.Nc3 Nf6 28.Be5 Ncd5, kale yeniden a8’de.' },
        { move: '26...Nb5', text: '+1.32: 27.Qe3 Nf6 28.Be5 ile d4 baskısı, ama şah kanadı zayıf.' },
      ],
    },
    '27w': {
      text: '27.Bxd5?!: Beyaz fili d5 atıyla değişir.',
      amac: 'Siyahın en iyi savunucusunu ortadan kaldırmak.',
      neden: 'Atın d5’teki gücü Eljanov’u rahatsız etti, ama bu değişim fil çiftini verir. Motor 27.Nc3 (+1.14), 27.Rd3 (+1.11) veya 27.Bd6’yı (+1.05) tercih ediyor; partideki hamleyle değerlendirme +0.51’e düşer. Kale kaldırma fikri (Rd3) burada hazırdı ama ertelendi.',
      diger: [
        { move: '27.Nc3', text: '+1.14: 27...N7f6 28.Be5 Nd7 29.Bd6, fil çifti korunur.' },
        { move: '27.Rd3', text: '+1.11: kale kaldırma; 27...b6 28.Qd2 bxc5 29.dxc5.' },
        { move: '27.Bd6', text: '+1.05: önce karakol; 27...b5 28.Nc3 N7f6 29.g3.' },
      ],
    },
    '27b': {
      text: '27...cxd5: c-piyonuyla alınır; Siyahın d5’te sağlam bir piyonu olur.',
      amac: 'c-hattını açmak ve ...b6 ile c5’i sorgulayacak bir yapı kurmak.',
      neden: 'Motor 27...exd5’i (+0.56) daha iyi buluyor: e6 zayıflığı ortadan kalkar, c6 piyonu yerinde kalır ve d5 iki piyonla desteklenir. 27...cxd5 sonrası değerlendirme +1.05; e6 ve d5 piyonları ileride hedef olacak. 27...b5?? ise 28.Bxe6 ile hemen kaybeder (+4.20).',
      diger: [
        { move: '27...exd5', text: '+0.56: 28.b3 Ra8 29.Qd2 Re8, e-hattı Siyahın.' },
        { move: '27...b5', text: '+4.20: 28.Bxe6 fxe6 29.Qxe6+ Kh7, şah çöker.' },
      ],
    },
    '28w': {
      text: '28.Bh4: fil h4’e gelir; d8 kalesine ve e7-f6 kara karelerine bakar.',
      amac: 'd8 kalesini kovalayıp Be7-d6 manevrasıyla kara kareleri ele geçirmek.',
      neden: 'Fil, Siyahın kara kareli filiyle kavga eden tek taştır. Motor 28.Nc3’ü (+1.13) daha iyi buluyor: atı oyuna getirip Nb5 ile d6’ya bakmak. Partideki hamle +0.82.',
      diger: [
        { move: '28.Nc3', text: '+1.13: 28...Ra8 29.Nb5 Qc6 30.b3, at d6’ya geliyor.' },
        { move: '28.Rd3', text: '+0.99: 28...e5 29.dxe5 Nxc5 30.Nxc5, kale kaldırma.' },
      ],
    },
    '28b': {
      text: '28...Rf8: kale f8’e geçer ve f7-f6 karelerini korur.',
      amac: 'Bh4’ün d8 kalesine saldırısından kurtulmak ve şahın yanında kalmak.',
      neden: 'Motor’un tercihi (+0.78). 28...Re8 29.Nc3 Qc6 30.b4 (+1.49) veya 28...Bf6 (+1.98) daha kötüydü.',
      diger: [
        { move: '28...Re8', text: '+1.49: 29.Nc3 Qc6 30.b4 axb4 ile vezir kanadı açılır.' },
        { move: '28...Bf6', text: '+1.98: 29.Nb6 Qc7 30.Bg3 ile b6 atı güçlü.' },
      ],
    },
    '29w': {
      text: '29.Nc3: at c3’e döner; d5 piyonuna baskı yapar ve b5 karesine bakar.',
      amac: 'a4’te dışarıda kalan atı merkeze geri getirmek.',
      neden: 'Na4’ün görevi (b6’yı tutmak) bitti; at artık d5 ve b5’e karşı daha işe yarar. Motor 29.Be7’yi (+0.92) biraz daha iyi buluyor; Nc3 +0.76.',
      diger: [
        { move: '29.Be7', text: '+0.92: 29...Re8 30.Bd6 Qc6 31.Nc3, sırayı değiştirmek.' },
        { move: '29.Bg3', text: '+0.74: 29...Qc6 30.Nc3 Raa8 31.b4.' },
      ],
    },
    '29b': {
      text: '29...b6: Siyah sonunda c5 piyonunu sorgular.',
      amac: '...bxc5 ile kilitli vezir kanadını açmak ve a6 kalesine hat bulmak.',
      neden: 'Yapının beklenen kırılması, ama çok geç geldi. Motor’un en iyi hamlesi (+0.63); 29...Qc6 (+0.88) veya 29...Ra8 (+0.98) daha pasif.',
      diger: [
        { move: '29...Qc6', text: '+0.88: 30.Be7 Re8 31.Bd6 Raa8, Siyah bekler.' },
        { move: '29...Ra8', text: '+0.98: 30.Be7 Re8 31.Bd6 Qc6.' },
      ],
    },
    '30w': {
      text: '30.Be7: fil e7’den f8 kalesine saldırır.',
      amac: 'Kaleyi yerinden edip fili d6 karesine ulaştırmak.',
      neden: 'Motor 30.c6’yı (+0.69) daha iyi buluyor: 30...Nb8 31.Be7 Re8 32.Bg5 ile c6’da ilerlemiş bir piyon. Eljanov piyon yerine fili aktifleştirdi (+0.47). 30.Rc1? bxc5 31.dxc5 Rc6 ile Siyah rahatlardı (+0.06).',
      diger: [
        { move: '30.c6', text: '+0.69: 30...Nb8 31.Be7 Re8 32.Bg5, c6 piyonu Siyahın vezir kanadını boğar.' },
        { move: '30.Rc1', text: '+0.06: 30...bxc5 31.dxc5 Rc6 32.Be7, Siyah eşitler.' },
      ],
    },
    '30b': {
      text: '30...Re8: kale e8’e çekilir ve fili sorgular.',
      amac: 'Kaleyi kurtarmak ve Be7’yi geri çekilmeye zorlamak.',
      neden: '30...Ra8?? 31.Bxf8 kalite kaybettirirdi (+2.15). Motor önce 30...bxc5 31.dxc5 Re8 32.Bd6 (+0.39) sırasını biraz daha iyi buluyor; fark küçük (+0.56).',
      diger: [
        { move: '30...bxc5', text: '+0.39: 31.dxc5 Re8 32.Bd6 Rd8, değişim önce yapılır.' },
        { move: '30...Ra8', text: 'Hata (+2.15): 31.Bxf8 Kxf8 32.Qf3, kalite gider.' },
      ],
    },
    '31w': {
      text: '31.Bd6: fil d6’ya yerleşir; c5 piyonunu destekler ve Siyahın taşlarını böler.',
      amac: 'd6’da kara karelerin hâkimi olan bir fil kurmak; e5, c7, b8 ve f8 karelerini kontrol etmek.',
      neden: '5.c5’in uzun vadeli meyvesi: d6 karesi Beyazın bir ileri karakoludur. Motor en iyi hamle olarak görüyor (+0.72).',
      diger: [
        { move: '31.Bg5', text: '+0.61: 31...Rf8 32.c6 Nb8 33.Nb5.' },
        { move: '31.c6', text: '+0.44: 31...Rxe7 32.Nxd5 exd5 33.Qxe7, karmaşık.' },
      ],
    },
    '31b': {
      text: '31...bxc5: Siyah c5’te değişir.',
      amac: 'Vezir kanadını açmak ve c5 piyonunu yalnız bırakmak.',
      neden: 'Motor’un tercihi (+0.49). Bekleme hamleleri (31...Rd8? 32.c6 Qxc6 33.Qxa6, +1.24) daha kötü olurdu.',
      diger: [
        { move: '31...Ra8', text: '+0.78: 32.Nb5 Qc6 33.b4, Beyaz vezir kanadını kendi açar.' },
        { move: '31...Rd8', text: '+1.24: 32.c6! Qxc6 33.Qxa6 Qxd6, kalite gider.' },
      ],
    },
    '32w': {
      text: '32.dxc5: Beyaz piyonla geri alır; d6 fili c5 piyonuyla birlikte güçlü kalır.',
      amac: 'd6 filini c5 piyonuyla desteklemek ve d-hattını açmak.',
      neden: 'Zorunlu sayılır: 32.Bxc5? Nxc5 33.dxc5 (−0.77) fili verir; 32.Nb5? cxd4 (−1.13) piyon kaybettirir.',
      diger: [
        { move: '32.Bxc5', text: '−0.77: 32...Nxc5 33.dxc5 Rd8, kara kareli fil gider ve Siyah rahatlar.' },
      ],
    },
    '32b': {
      text: '32...Bxc3?: Siyah kara kareli filini c3 atına verir.',
      amac: 'c3 atını ortadan kaldırıp c5 piyonunu kazanmak.',
      neden: 'Partinin kırılma anı. Kamsky bir piyon için fiyanketto filini verdi; bundan sonra şahın etrafındaki kara kareler (g7, h6, f6, h8) yalnızca piyonlarla korunacak ve d6 fili ile Beyaz vezir bu karelerde rakipsiz olacak. Motor 32...Rd8 (+0.44) veya 32...d4’ü (+0.82) öneriyor; partideki hamle +1.66.',
      diger: [
        { move: '32...Rd8', text: 'Motor’un tercihi (+0.44): 33.Rc1 a4 34.Qb5 Qc6, d6 fili sorgulanır, oyun dengeye yakın.' },
        { move: '32...d4', text: '+0.82: 33.Ne4 a4 34.Ng5 Rc6, merkezde serbest piyon.' },
        { move: '32...Ra8', text: '+1.04: 33.Nb5 Qc6 34.b4 axb4, pasif.' },
      ],
    },
    '33w': {
      text: '33.bxc3: b-piyonuyla geri alınır.',
      amac: 'Taşı geri almak ve e1 kalesini korumak.',
      neden: 'Zorunlu: 33.Rd3? veya 33.Rf1? Bxe1 (yaklaşık −4.4) ile c3 fili e1 kalesini alır. Piyon yapısı bozulur (a3, c3), ama artık önemli olan kara karelerdir.',
      diger: [
        { move: '33.Rd3', text: '−4.50: 33...Bxe1 34.Qxe1 Rxd6, fil kaleyi yer.' },
      ],
    },
    '33b': {
      text: '33...Rc6: kale c6’dan c5 piyonuna saldırır.',
      amac: 'Fil verilmesinin karşılığını almak: c5 piyonunu kazanmak.',
      neden: 'Planın tutarlı devamı (+1.81). c5 iki kez saldırı altında (Rc6 ve d7 atı), yalnızca d6 filiyle korunuyor. 33...Kg7 (+2.02) veya 33...Rxd6 34.cxd6 (+2.32) daha kötüydü.',
      diger: [
        { move: '33...Kg7', text: '+2.02: 34.c4 dxc4 35.Qxc4 Qc6, şahı önceden h-hattından uzaklaştırmak.' },
        { move: '33...Rxd6', text: '+2.32: 34.cxd6 Qc6 35.Qd2 Rb8, kalite vererek d6 filinden kurtulmak.' },
      ],
    },
    '34w': {
      text: '34.Rd3!: kale üçüncü yataya çıkar; hedef h3.',
      amac: 'Kaleyi h-hattına kaldırmak ve Siyah şahına karşı vezir-kale-fil saldırısı kurmak.',
      neden: 'c5 piyonu zaten tutulamıyor; Beyaz onu savunmak yerine tempoyu saldırıya harcar. d3 karesi ayrıca d5 piyonuna baskıyı korur. Motor: 34.Rd3 +2.00; 34.c4 Nxc5 35.Be5 (+0.09) ve 34.Rxd5 (+0.04) ise avantajı tamamen verir.',
      diger: [
        { move: '34.c4', text: '+0.09: 34...Nxc5 35.Be5 Nd7 36.Ba1, Siyah rahat.' },
        { move: '34.Rxd5', text: '+0.04: 34...Nxc5 35.Bf4 exd5 36.Qxe8+ Qxe8, malzeme dengelenir.' },
      ],
    },
    '34b': {
      text: '34...Nxc5: Siyah c5 piyonunu alır.',
      amac: 'Fili vermenin karşılığında bir piyon kazanmak ve atı merkeze getirmek.',
      neden: 'Tutarlı ama tehlikeli: at d7’den ayrılınca f6 ve e5 kareleri daha da zayıflar. Motor 34...Qd8 (+1.96; vezir f6’ya gelip kara kareleri tutar) ve 34...Kg7’yi (+2.04) biraz daha iyi buluyor.',
      diger: [
        { move: '34...Qd8', text: '+1.96: 35.Qe3 Qf6 36.Rxd5 Rcc8, vezir f6’dan savunur.' },
        { move: '34...Kg7', text: '+2.04: 35.c4 dxc4 36.Rh3 Rxc5, şah h8’i korur.' },
      ],
    },
    '35w': {
      text: '35.Rh3!: kale h-hattına geçer.',
      amac: 'Be5 veya Qe5 ile h8’i kontrol edip Rh8 matını kurmak.',
      neden: 'Tehdit 36.Be5 ve 37.Rh8#: e5 fili h8’i korur, kale h8’den g8 ile f8’i keser. 35...Rxd6? 36.Qe5! ise üç hamlede mat eder (36...Kf8 37.Qf6 ve Rh8#). Motor: 35.Rh3 +2.05; 35.Bxc5 Rxc5 36.Qe5 d4 (−0.25) ise saldırıyı söndürür.',
      diger: [
        { move: '35.Bxc5', text: '−0.25: 35...Rxc5 36.Qe5 d4 37.Qxd4, Siyah bir piyon önde.' },
        { move: '35.Rxd5', text: '−0.57: 35...Rd8 36.Rxc5 Rxc5 37.Bxc5, malzeme gider.' },
      ],
    },
    '35b': {
      text: '35...e5: Siyah e5 karesini piyonla kapatır.',
      amac: 'Be5 ve Qe5 fikirlerini engellemek ve d6 filine yeni bir saldırı eklemek.',
      neden: 'Neredeyse zorunlu. 35...Rxd6? 36.Qe5! mat ile biter; 35...Qd7? 36.Be5 f6 37.Bxf6 (+4.3/+4.9 civarı) şahı açar. e5 piyonu h8 tehdidini keser ve fil artık c5 atını almak zorunda kalır.',
      diger: [
        { move: '35...Rxd6', text: '#3: 36.Qe5 Kf8 37.Qf6 Qc7 38.Rh8 mat.' },
        { move: '35...Qd7', text: 'Yaklaşık +4.3: 36.Be5 f6 37.Bxf6 e5 38.Bxe5, şah kanadı çöker.' },
      ],
    },
    '36w': {
      text: '36.Bxc5: fil c5 atını alır.',
      amac: 'Saldırıya engel olan atı ortadan kaldırmak ve veziri e3-h6 yoluna hazırlamak.',
      neden: 'd6 fili zaten Rc6’nın saldırısı altındaydı. Önemli bir ayrıntı: 36.Qe3? Rxd6 37.Qh6 Qxh3! (c8 veziri h3’ü görür) saldırıyı bitirirdi (+0.53). Motor: 36.Bxc5 +2.45.',
      diger: [
        { move: '36.Qe3', text: '+0.53: 36...Rxd6 37.Qh6 Qxh3 38.Qxh3, c8 veziri h3’ü korur.' },
        { move: '36.Qd2', text: '+0.13: 36...Qxh3 37.gxh3 Rxd6, kale gider.' },
      ],
    },
    '36b': {
      text: '36...Rxc5: kale geri alır.',
      amac: 'Taşı geri almak; malzeme dengelenir ve Siyah bir piyon önde kalır.',
      neden: 'Zorunlu. 36...f5 (+3.95) veya 36...Qd7 (+4.32) bir taş eksik bırakırdı.',
      diger: [
        { move: '36...f5', text: '+3.95: 37.Bd4 Rce6 38.Be3 f4, taş eksik.' },
      ],
    },
    '37w': {
      text: '37.Qe3: vezir e3’ten h6’ya yönelir ve c5 kalesine saldırır.',
      amac: 'Qh6 ile h-hattında vezir-kale bataryası kurmak.',
      neden: 'Vezir tempo kazanarak gelir: c5 kalesi saldırı altında. Motor en iyi hamle olarak görüyor (+2.47); 37.Qd2 de yakın (+2.32). 37.Qf3? Qf5 ile Siyah h3 ve f3’ü savunurdu (−0.07).',
      diger: [
        { move: '37.Qd2', text: '+2.32: 37...f5 38.Qh6 Kf7 39.Rg3, aynı fikir.' },
        { move: '37.Qf3', text: '−0.07: 37...Qf5 38.Qe3 Rcc8, Siyah savunur.' },
      ],
    },
    '37b': {
      text: '37...f6: f-piyonu bir kare ilerler; şaha f7 kaçış karesi açılır.',
      amac: 'Qh6 sonrası Qh8 matına karşı şaha kaçış yolu sağlamak.',
      neden: 'Şah g8’de Qh6 ve Qh8# tehdidi altındaydı. Motor 37...f5’i (+2.52) aynı görüyor: f5’te piyon e4 karesini de tutar. f6 g6’yı biraz daha zayıflatır (+2.57).',
      diger: [
        { move: '37...f5', text: '+2.52: 38.Qh6 Kf7 39.Rg3 Rg8, g6’yı savunmak.' },
        { move: '37...Rc7', text: '+2.99: 38.Qh6 f6 39.Rg3 Rg7, savunma pasif.' },
      ],
    },
    '38w': {
      text: '38.Qh6: vezir kara karelerden şahın önüne girer.',
      amac: 'Qh7+ veya Qh8+ ile şahı merkeze sürmek ve g6’yı hedeflemek.',
      neden: 'Kara kareli fil olmadığı için h6’ya hiçbir taş itiraz edemez. Motor: 38.Qh6 +2.69; 38.Rb1 (+1.04) veya 38.a4 (+0.22) çok yavaştır.',
      diger: [
        { move: '38.Rb1', text: '+1.04: 38...g5 39.Rb6 Rf8, Siyah şah kanadını kapatır.' },
      ],
    },
    '38b': {
      text: '38...Kf7: şah f7’ye kaçar.',
      amac: 'Qh8 ve Qg7 matlarından uzaklaşmak.',
      neden: 'Motor 38...Re7’yi (+2.90) eşdeğer görüyor: önce kaleyi yedinci yataya getirip h7’yi korumak. 38...Kf7 de yakın (+2.95), ama şah yine de 39.Qh7+ ile merkeze sürülür.',
      diger: [
        { move: '38...Re7', text: '+2.90: 39.Rb1 Kf7 40.Qh7+ Ke6, benzer bir oyun.' },
        { move: '38...Rc7', text: '+3.34: 39.Rg3 Ree7 40.Rxg6+ Rg7, g6 düşer.' },
      ],
    },
    '39w': {
      text: '39.Qh7+!: şah çekilir; şah merkeze sürülür.',
      amac: 'Şahı e6’ya iterek g6’yı savunmasız bırakmak ve şahı açık merkezde yakalamak.',
      neden: 'h3 kalesi h7’yi destekler. Motor: 39.Qh7+ +3.20; 39.Rb1 (+0.20) veya 39.Qh4 (+0.06) bütün saldırıyı söndürürdü. Burada şah çekmek tek doğru yoldu.',
      diger: [
        { move: '39.Rb1', text: '+0.20: 39...Rg8 40.Qe3 Kg7, Siyah toparlanır.' },
        { move: '39.Qh4', text: '+0.06: 39...Rxc3 40.Rxc3 Qxc3, Siyah piyon kazanır.' },
      ],
    },
    '39b': {
      text: '39...Ke6: şah e6’ya çıkar.',
      amac: 'Mattan kaçmak; g6’yı korumak artık mümkün değil.',
      neden: 'Neredeyse zorunlu: 39...Kf8? 40.Qxg6 Re6 41.Rh8+ ile değerlendirme +6.43’e çıkar. Ke6 sonrası şah açıkta ama ağır taşlar henüz yakın değil (+3.09).',
      diger: [
        { move: '39...Kf8', text: '+6.43: 40.Qxg6 Re6 41.Rh8+ Ke7, malzeme kaybı kaçınılmaz.' },
      ],
    },
    '40w': {
      text: '40.Qxg6: vezir g6 piyonunu alır ve f6’ya saldırır.',
      amac: 'Malzemeyi eşitlemek ve şahın etrafındaki son piyonu (f6) hedeflemek.',
      neden: 'Piyon geri kazanılır, vezir g6’dan e8, f6 ve e4’e bakar. Motor: +3.24; 40.Rf3 (+1.35) veya 40.Rh6 (+0.90) çok daha zayıf.',
      diger: [
        { move: '40.Rf3', text: '+1.35: 40...e4 41.Qxg6 Rf8, f-hattı kapanır.' },
        { move: '40.Rh6', text: '+0.90: 40...Rxc3 41.Qxg6 Rf8, Siyah c3’ü alır.' },
      ],
    },
    '40b': {
      text: '40...e4: e-piyonu ilerler.',
      amac: 'Vezirin c8-h3 çaprazını korumak, f3 karesini kontrol etmek ve şaha e5 karesini açmak.',
      neden: 'Savunmada aktif bir girişim; e4 piyonu Beyazın Rf3 gibi fikirlerini kapatır. Motor 40...Rc4 (+3.04) ve 40...e4’ü (+3.21) yakın görüyor.',
      diger: [
        { move: '40...Rc4', text: '+3.04: 41.Rh5 Kd6 42.Qxf6+ Re6, kale dördüncü yatayı tutar.' },
        { move: '40...Kd6', text: '+3.28: 41.Qxf6+ Re6 42.Qg5, f6 düşer.' },
      ],
    },
    '41w': {
      text: '41.Rh5: kale h5’e gelir; d5 ve f5 karelerine bakar.',
      amac: 'Beşinci yataydan d5 piyonuna saldırmak ve Rf5 ile f6’ya yönelmek.',
      neden: 'Kale h3’te işini bitirdi; artık yataydan merkez piyonlarına baskı yapacak. Motor 41.Rh7 (+3.55) ve 41.Rb1’i (+3.54) biraz daha güçlü buluyor: yedinci yatayda kale şahı daha da sıkıştırır. Rh5 de güçlü (+2.88).',
      diger: [
        { move: '41.Rh7', text: '+3.55: 41...Re7 42.Rh5 Qf8 43.Rxe4+, e4 düşer.' },
        { move: '41.Rb1', text: '+3.54: 41...Rf8 42.Rh7 Rxc3 43.Qg4+, ikinci kale oyuna girer.' },
      ],
    },
    '41b': {
      text: '41...Rh8: Siyah h-hattına karşı çıkar.',
      amac: 'h5 kalesini değişime davet etmek ve h-hattını kapatmak.',
      neden: 'Motor’un en iyi hamlesi (+2.67). 41...Rg8? 42.Qf5+ (+3.52) veya 41...Rf8? 42.c4! (+4.35) daha kötüydü.',
      diger: [
        { move: '41...Rg8', text: '+3.52: 42.Qf5+ Kd6 43.Qf4+ Ke6, şah kovalanır.' },
        { move: '41...Rf8', text: '+4.35: 42.c4 Rxc4 43.Qf5+ Ke7, d5 düşer.' },
      ],
    },
    '42w': {
      text: '42.Rf5: kale f5’ten f6 piyonuna saldırır.',
      amac: 'Değişimden kaçınıp f6’yı vezir ve kaleyle ikinci kez saldırmak.',
      neden: '42.Rxh8? Qxh8 (+0.91) Siyahın veziri aktifleştirirdi; saldıran taraf ağır taşlarını korumalı. Motor: 42.Rf5 +3.23.',
      diger: [
        { move: '42.Rxh8', text: '+0.91: 42...Qxh8 43.f3 Rc4, Siyah vezirle karşı saldırı arar.' },
        { move: '42.Rg5', text: '+2.17: 42...Qc7 43.Rf5 Qh2+, Siyah şah çeker.' },
      ],
    },
    '42b': {
      text: '42...Rf8: kale f8’e döner ve f6’yı korur.',
      amac: 'f6’yı tutmak ve şahın yanındaki son piyonu korumak.',
      neden: 'Zorunluya yakın (+3.21). 42...Qf8? 43.Rb1 (+4.58) b-hattından ikinci kaleyi getirir.',
      diger: [
        { move: '42...Qd8', text: '+3.35: 43.Rb1 Rf8 44.Rh5 Kd6, vezirle savunma.' },
        { move: '42...Qf8', text: '+4.58: 43.Rb1 Rxc3 44.Qg4, ikinci kale girer.' },
      ],
    },
    '43w': {
      text: '43.Rd1: ikinci kale d1’e gelip d5 piyonuna saldırır.',
      amac: 'Saldırıya son taşı katmak ve d5’i hedef almak.',
      neden: 'e1 kalesi oyunun dışında kalmıştı; d-hattında d5’e baskı yapar ve ileride Rd6+ fikirlerini hazırlar. Motor: 43.Rd1 +3.21; 43.Rh5 (+2.24) veya 43.Qh5 (+1.57) daha zayıf.',
      diger: [
        { move: '43.Rh5', text: '+2.24: 43...Kd6 44.Rd1 Qe8, Siyah toparlanır.' },
      ],
    },
    '43b': {
      text: '43...Qd7: vezir d7’den d5’i korur.',
      amac: 'd5 piyonunu tutmak ve şahı savunmak.',
      neden: 'Motor 43...Qd8’i (+3.22) biraz daha iyi buluyor: 44.c4 Rxc4 45.Qg4 e3. Partideki hamle +3.69.',
      diger: [
        { move: '43...Qd8', text: '+3.22: 44.c4 Rxc4 45.Qg4 e3, Siyah karşı oyun arar.' },
        { move: '43...Qb7', text: '+3.44: 44.Qg4 Ke7 45.c4 e3.' },
      ],
    },
    '44w': {
      text: '44.Rh5: kale h5’e döner; d5’e ikinci kez baskı hazırlanır.',
      amac: 'd5 piyonunu yataydan ve dikeyden çapraz ateşe almak.',
      neden: 'f5’te kale f6’yı zorluyordu ama d5 yataydan daha önemli. Motor: 44.Rh5 +4.03; 44.c4 (+3.01) erken.',
      diger: [
        { move: '44.c4', text: '+3.01: 44...Rxc4 45.Rh5 Rc7, Siyah c-hattını kullanır.' },
        { move: '44.Qg4', text: '+2.24: 44...Ke7 45.Qh5 Qe6, vezir değişimi tehlikesi.' },
      ],
    },
    '44b': {
      text: '44...Kd6: şah d6’ya gider ve d5’i korur.',
      amac: 'd5 piyonuna bir savunucu daha eklemek.',
      neden: 'Şah d6’da Qg3+ çaprazına girer (g3-f4-e5-d6). Motor 44...Qc6’yı (+4.12) biraz daha iyi buluyor; partideki hamle +4.81. Pozisyon zaten kaybedilmiş durumda.',
      diger: [
        { move: '44...Qc6', text: '+4.12: 45.Rh7 Qe8 46.Qg4+ Kd6, uzun süre direnmek.' },
        { move: '44...Qb5', text: '+4.49: 45.Rh7 Qe2 46.Rb1 Rxc3, karşı saldırı.' },
      ],
    },
    '45w': {
      text: '45.c4!: d5 piyonuna üçüncü kez saldırılır.',
      amac: 'd5’i c4, Rd1 ve Rh5 ile kuşatıp düşürmek.',
      neden: 'Piyon c3’te pasifti; c4’te hem d5’e saldırır hem c5 kalesinin yolunu daraltır. Motor: +4.96; 45.Qxe4 (+4.67) de kazanır ama daha yavaş.',
      diger: [
        { move: '45.Qxe4', text: '+4.67: 45...Qe6 46.Qd3 Rg8 47.c4, piyon alınır.' },
        { move: '45.Qh6', text: '+3.10: 45...Ke7 46.Qe3 Qb5, Siyah nefes alır.' },
      ],
    },
    '45b': {
      text: '45...Qe6: vezir e6’ya gelir ve d5’i korur.',
      amac: 'd5’e bir savunucu daha eklemek.',
      neden: 'Ama e6’daki vezir şahın kaçış karesini kapatır ve Qg3+ ile şah d7’ye gitmek zorunda kalır. Motor 45...Kc6 (+5.29) veya 45...Qc8’i (+5.64) biraz daha iyi buluyor; partideki hamle +6.10.',
      diger: [
        { move: '45...Kc6', text: '+5.29: 46.cxd5+ Kb6 47.Qxe4 Rb5, piyon gider.' },
        { move: '45...Qe7', text: '+5.87: 46.Rh7 Qe8 47.Qg3+ Ke6.' },
      ],
    },
    '46w': {
      text: '46.Qg3+: şah çekilir.',
      amac: 'Şahı d7’ye iterek d-hattına sokmak; Rhxd5+ şahlı olsun.',
      neden: 'Şah d-hattına girince Beyazın d5’i alması şahla gelir ve Siyah geri almayı istediği gibi yapamaz. Motor: +6.58; 46.cxd5 (+6.40) de kazanır.',
      diger: [
        { move: '46.cxd5', text: '+6.40: 46...Qxd5 47.Rhxd5+ Rxd5 48.Rxd5+, vezir kale için gider.' },
        { move: '46.Rhxd5+', text: '+5.48: 46...Rxd5 47.Rxd5+ Kc6 48.Qg3, sıra değişikliği biraz zayıf.' },
      ],
    },
    '46b': {
      text: '46...Kd7: şah d7’ye çekilir.',
      amac: 'Şahtan kaçmak.',
      neden: 'Tüm şah hamleleri kaybeder: 46...Kc6 47.cxd5+ (+6.74), 46...Ke7 47.cxd5 (+6.95). Kd7 en uzun direniştir.',
      diger: [
        { move: '46...Kc6', text: '+6.74: 47.cxd5+ Qxd5 48.Rdxd5 Rxd5, vezir kale için gider.' },
      ],
    },
    '47w': {
      text: '47.Rhxd5+: kale d5’i şah çekerek alır.',
      amac: 'd5 piyonunu kazanmak ve Siyahın son savunma noktasını yıkmak.',
      neden: 'Üçlü saldırının sonucu. Motor 47.cxd5’i (+6.78) biraz daha güçlü buluyor, ama partideki hamle de tamamen kazanır (+6.22).',
      diger: [
        { move: '47.cxd5', text: '+6.78: 47...Qf7 48.Qh3+ Kd8 49.Rh7, vezir saldırısı.' },
        { move: '47.Rdxd5+', text: '+6.36: 47...Rxd5 48.Rxd5+ Kc6 49.Qb3, aynı fikir.' },
      ],
    },
    '47b': {
      text: '47...Rxd5: Siyah kaleyle alır.',
      amac: 'Kaleyi geri almak.',
      neden: '47...Ke8? 48.Qg6+ ile on bir hamlede mat; 47...Qxd5 48.cxd5 (+7.43) veziri verir. Kaleyle almak tek mantıklı hamledir.',
      diger: [
        { move: '47...Ke8', text: 'Mat (11 hamlede): 48.Qg6+ Ke7 49.Rxc5.' },
        { move: '47...Qxd5', text: '+7.43: 48.cxd5 Rf7 49.Qg6, vezir gider.' },
      ],
    },
    '48w': {
      text: '48.Rxd5+: kale geri alır ve şah çeker. Kamsky terk etti.',
      amac: 'Bir piyon fazlasıyla kalmak ve Siyah şahına son darbeyi indirmek.',
      neden: '48...Qxd5 49.cxd5 veziri kale için verir; her şah hamlesi de kaybeder: 48...Ke7 49.Qc7+ Ke8 50.Rd8 mat, 48...Kc8 49.Rc5+ Kd7 50.Qc7+ Ke8 51.Rxa5 ile vezirler değişip kale oyunsonu kazanılır, 48...Kc6 49.Qb3 ile kale ve vezir yine baskıyı sürdürür. Motor: +6.32. 48.Qg7+? Rf7 ise avantajı tamamen verirdi.',
      diger: [
        { move: '48.cxd5', text: '+4.60: 48...Qe5 49.Qg7+ Qe7, kazançlı ama daha yavaş.' },
        { move: '48.Qg7+', text: '+0.06: 48...Rf7 49.cxd5 Rxg7 50.dxe6+ Kxe6, avantaj gider.' },
      ],
    },
  },
  qa: [
    { q: 'Beyaz neden 5.c5 oynadı; bu hamle neyi değiştirdi?', a: '4...a6 ile Siyah ...b5 ve ...dxc4 fikirlerini hazırlıyordu. 5.c5 bu fikirleri öldürür ve b6 karesini kalıcı bir zayıflığa çevirir (21.Na4 ile at oraya yöneldi). Karşılığında Beyaz merkezde esnekliğini kaybeder ve Siyahın oyunu ...e5 ile ...b6 kırılmalarına kalır. Kamsky ...e5’ten vazgeçti (14...e6), ...b6’yı da ancak 29. hamlede oynadı; bu yüzden Beyazın alan avantajı uzun süre bozulmadı.' },
    { q: 'Siyah neden 9...Ra7 gibi pasif bir hamle oynadı?', a: '8...Bf5 sonrası b7 yalnızca vezirle korunuyordu ve 9.Qb3 ona saldırdı. 9...Nbd7 10.Qxb7 Ne4 11.Bc7 Qc8 piyonu verirdi (Motor: +0.98), 9...Qc8 ise veziri pasifleştirirdi. Motor 9...Ra7’yi en iyi buluyor (+0.75), ama kale ancak 16...a5 ve 17...Ra6 ile, yani birkaç tempo sonra yeniden oyuna girebildi.' },
    { q: 'Siyah neden 11...Bxf3 ile fil çiftini verdi?', a: 'Alternatifler daha kötüydü: 11...Nbd7? 12.Ng5! ile e4 fili kovalanır (+1.22), 11...Nh5 12.Bxb8 (+0.99) de Siyahın vezir kanadını bozar. 11...Bxf3 e4 ilerleyişini destekleyen atı ortadan kaldırdı (+0.51). Bedeli, merkez açıldığında iki filin Beyaza uzun vadeli bir artı vermesiydi.' },
    { q: 'Siyah h4-h5 saldırısını nasıl durdurabilirdi?', a: '22.h4 oynandığında 22...h5! piyonu h4’te durdururdu (Motor: +0.94); g6 sağlam kalır ve h-hattı açılmaz. Kamsky 22...Nc7 ile atı d5’e götürmeyi seçti ve 23.h5 sonrası değerlendirme +1.7’ye çıktı. 24...g5 de h-hattını kapalı tutmanın bir yoluydu (+1.61).' },
    { q: '32...Bxc3 neden bu kadar kötüydü? Sonuçta bir piyon kazandı.', a: 'Bxc3 ile Siyah c5 piyonunu kazandı (34...Nxc5), ama g7’deki fiyanketto filini verdi. Bu fil h8, g7, f6 ve h6 karelerinin tek bekçisiydi. Fil gidince Beyazın d6 fili ve veziri bu karelerde rakipsiz kaldı: 35.Rh3 ile Be5/Qe5 ve Rh8 mat tehditleri, 38.Qh6 ve 39.Qh7+ geldi. Motor: 32...Rd8 +0.44, 32...Bxc3 +1.66; birkaç hamle sonra +2’nin üstü.' },
    { q: '34.Rd3’ün amacı neydi ve neden c5 piyonu savunulmadı?', a: 'Kale üçüncü yatay üzerinden h3’e, yani açık h-hattına gidecekti. c5 piyonu zaten tutulamıyordu (Rc6 ve d7 atı saldırıyordu); 34.c4 Nxc5 35.Be5 ile savunmak sadece +0.09 verir. Beyaz piyonu verip tempoyu şaha harcadı: 34.Rd3 +2.00, 35.Rh3 +2.05.' },
    { q: 'Siyah 35...Rxd6 ile d6 filini neden almadı?', a: 'Çünkü 36.Qe5! hemen mat getirir: 36...Kf8 37.Qf6 ve 38.Rh8 mat. e5’teki vezir h8’i korur ve h3 kalesi h8’e girer. Bu yüzden Siyah 35...e5 ile e5 karesini kapatmak zorunda kaldı ve Beyaz 36.Bxc5 ile malzemeyi geri aldı.' },
    { q: '36. hamlede Beyaz neden doğrudan 36.Qe3 ile saldırmadı?', a: '36.Qe3? Rxd6 37.Qh6 Qxh3! sonrası c8 veziri c8-h3 çaprazı üzerinden h3 kalesini alır ve saldırı biter (Motor: +0.53). Eljanov önce 36.Bxc5 ile atı aldı, 36...Rxc5 sonrası vezir 37.Qe3 ile c5 kalesine saldırarak tempo kazanarak geldi.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Üç kaynaktan: 5.c5 ile kazanılan alan ve b6/d6 kareleri, 11...Bxf3 sonrası elde kalan fil çifti ve en önemlisi 32...Bxc3? ile şah kanadındaki kara karelerin savunmasız kalması. h4-h5 ile açılan h-hattı, kale kaldırma (Rd3-h3) ile birleşince Siyah şahı merkeze sürüldü ve zayıf piyonlar (g6, sonra d5) tek tek düştü.' },
    { q: 'Beyaz nerede daha iyi oynayabilirdi?', a: 'Motor’a göre 25.hxg6 biraz acele (25.Qc1 +1.78’e karşı +1.21) ve özellikle 27.Bxd5 avantajın yarısını verdi (27.Nc3 +1.14’e karşı +0.51). Sonraki birkaç hamlede oyun neredeyse dengeye geldi. Ama Siyahın 32...Bxc3 hatasından sonra Eljanov hiçbir şans tanımadı: 34.Rd3, 35.Rh3, 36.Bxc5, 38.Qh6 ve 39.Qh7+ Motor’un ilk tercihleriydi.' },
  ],
  sources: [
    { title: 'ChessBase: Russian Team Championships 2008 in Sochi', url: 'https://en.chessbase.com/post/ruian-team-championships-2008-in-sochi' },
    { title: 'Chess Daily News: Interesting results from 2 of the top teams at the Russian Team Championship', url: 'https://chessdailynews.com/?p=40228' },
    { title: 'OlimpBase: 15th Russian Premier League 2008 – Economist-SGSEU-1 Saratov', url: 'https://www.olimpbase.org/2008ru/2008eksa.html' },
    { title: 'Chess.com: Good start for Ural, Economist1', url: 'https://www.chess.com/news/view/good-start-for-ural-economist1' },
    { title: 'Wikipedia: Slav Defense (Chebanenko, 5.c5)', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
    { title: 'ChessBase: Carlsen – Kamsky, Wijk aan Zee 2009, D15 (Shipov analizi)', url: 'https://en.chessbase.com/portals/4/files/news/2009/wijk/games/shipov08g0.htm' },
    { title: 'Modern Chess: GM Repertoire against the Slav – Squeeze the Chebanenko Slav', url: 'https://www.modern-chess.com/course/gm-repertoire-against-the-slav-part-3-squeeze-the-chebanenko-slav/87632/' },
    { title: 'ChessBase: The Chebanenko Slav in 60 minutes', url: 'https://en.chessbase.com/post/the-chebanenko-slav-in-60-minutes' },
  ],
  exercises: [
    { id: 'ekm-1', kind: 'tekrar', plan: false, title: 'Kale üçüncü yataydan h-hattına',
      source: 'Eljanov – Kamsky, Dagomys 2008 (34. hamle)',
      fen: '2q1r1k1/3n1p2/2rBp1p1/p1Pp4/8/P1P5/4QPP1/3RR1K1 w - - 1 34',
      prompt: 'Siyahın kara kareli fili değişti ve h-hattı açık. Siyah c5 piyonuna saldırıyor. Beyaz c5 için mi oynamalı, yoksa başka bir hedef mi var?',
      hint: 'd1 kalesi üçüncü yatay üzerinden h-hattına ulaşabilir.',
      line: ['Rd3', 'Nxc5', 'Rh3'],
      explanation: '**34.Rd3! Nxc5 35.Rh3!** Beyaz c5 piyonunu verir ve kalesini h-hattına kaldırır; Qe5 ve Rh8+ tehditleri başlar. Motor: Rd3 +1.7, sonraki en iyi hamle 34.c4 +0.2; 35.Rh3 +2.2, 35.Bxc5 −0.2.',
      link: 'h4-h5 ile açılan h-hattı, kale oraya gelince bir saldırı yoluna döner.' },
    { id: 'ekm-2', kind: 'tekrar', plan: false, title: 'Vezir h6’dan h7’ye',
      source: 'Eljanov – Kamsky, Dagomys 2008 (38. hamle)',
      fen: '2q1r1k1/8/5pp1/p1rpp3/8/P1P1Q2R/5PP1/4R1K1 w - - 0 38',
      prompt: 'Beyazın kalesi h3’te. Siyahın fiyanketto fili yok ve şahın çevresindeki kara kareler zayıf. Vezir nereye gitmeli?',
      hint: 'Vezir kara karelerden şahın önüne girsin; sonra şah çekerek şahı merkeze sürün.',
      line: ['Qh6', 'Kf7', 'Qh7+'],
      explanation: '**38.Qh6! Kf7 39.Qh7+!** Ke6 40.Qxg6 ile Siyah şahı merkezde açıkta kalır ve g6 piyonu düşer. Motor: Qh6 +2.3, sonraki en iyi 38.Rb1 +0.8; 39.Qh7+ +2.6, 39.Rb1 +0.3.',
      link: 'Kara kareli fil gidince h6 karesi vezire açılır; Rh3 kalesi h7’yi destekler.' },
    { id: 'ekm-3', kind: 'transfer', plan: false, title: 'Rh3: vezir h6’da bekliyor',
      source: 'Shirov – Nyback, Olimpiyat, İstanbul 2012 (36. hamle)',
      fen: '4q1k1/5p1p/2rprRpQ/1p2p1P1/4P3/1PPR4/5PP1/6K1 w - - 3 36',
      prompt: 'Beyazın veziri h6’da, kalesi f6’da. Siyahın kara kareli fili yok. d3 kalesi oyuna nasıl katılır?',
      hint: 'Eljanov’un 35. hamlesini hatırlayın: kale üçüncü yataydan h-hattına.',
      line: ['Rh3'],
      explanation: '**36.Rh3!** Tehdit 37.Qxh7+ ve f7’ye ikinci saldırı. Oyunda 36...d5 37.Qxh7+ Kf8 38.Rhf3 geldi ve Siyah terk etti. Motor: Rh3 +6.2, sonraki en iyi 36.Rff3 +1.2.',
      link: 'Eljanov gibi Shirov da d3 kalesini üçüncü yataydan h3’e kaldırdı; vezir h6’da zaten bekliyordu.' },
    { id: 'ekm-4', kind: 'transfer', plan: false, title: 'h-hattı açıldı: Rh3 ve Qh6',
      source: 'Kasparov – Hübner, Hamburg maçı 1985 (34. hamle)',
      fen: '3r2k1/6r1/1ppq2p1/1b1nNp2/1P1P4/1R6/3Q1PP1/3BR1K1 w - - 2 34',
      prompt: 'Bir Vezir Gambiti Reddi: Beyaz h4-h5 ve hxg6 ile h-hattını açtı. Siyahın kara kareli fili değişmiş. b3 kalesi ne yapmalı?',
      hint: 'Üçüncü yatay açık; kale h-hattına, ardından vezir h6’ya.',
      line: ['Rh3', 'Qxb4', 'Qh6'],
      explanation: '**34.Rh3! Qxb4 35.Qh6!** Beyaz e1 kalesini bile verir; 35...Qxe1+ 36.Kh2 sonrası Qh8+ ve Nxg6+ tehditleri karşılanamaz. Motor: Rh3 +3.2, sonraki en iyi 34.Rg3 +1.7; 35.Qh6 +4.1, 35.Qxb4 +0.7.',
      link: 'Eljanov’daki gibi: h4-h5 ile h-hattı açıldı, kale üçüncü yataydan h3’e geldi ve vezir kara karelerden h6’ya girdi.' },
  ],
};
