// Spasski – Fischer, Dünya Şampiyonası maçı, Reykjavik 1972 (21. oyun). Kaynak: PgnMentor (Fischer.pgn).
export default {
  id: 'spassky-fischer-1972',
  theme: '...c4 ve ...Bxh2+ ile kaleyi ikinci yataya sokmak',
  white: 'Boris Spasski', black: 'Robert James Fischer',
  whiteShort: 'Spasski', blackShort: 'Fischer',
  event: 'Dünya Şampiyonası maçı, 21. oyun', site: 'Reykjavik', year: 1972, eco: 'B46',
  variation: 'Sicilya Kan Savunması, 5.Nc3 Nc6 6.Be3', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 Nc6 6. Be3 Nf6 7. Bd3 d5 8. exd5 exd5 9. O-O Bd6 10. Nxc6 bxc6 11. Bd4 O-O 12. Qf3 Be6 13. Rfe1 c5 14. Bxf6 Qxf6 15. Qxf6 gxf6 16. Rad1 Rfd8 17. Be2 Rab8 18. b3 c4 19. Nxd5 Bxd5 20. Rxd5 Bxh2+ 21. Kxh2 Rxd5 22. Bxc4 Rd2 23. Bxa6 Rxc2 24. Re2 Rxe2 25. Bxe2 Rd8 26. a4 Rd2 27. Bc4 Ra2 28. Kg3 Kf8 29. Kf3 Ke7 30. g4 f5 31. gxf5 f6 32. Bg8 h6 33. Kg3 Kd6 34. Kf3 Ra1 35. Kg2 Ke5 36. Be6 Kf4 37. Bd7 Rb1 38. Be6 Rb2 39. Bc4 Ra2 40. Be6 h5 41. Bd7 0-1`,

  summary: 'Reykjavik maçının 21. ve son oyunu (31 Ağustos 1972). Fischer maçta 11½–8½ öndeydi ve şampiyonluk için bir puana ihtiyacı vardı. Sicilya’da 4...a6 (Kan) ile başlayıp 5...Nc6 ile Taimanov tipine geçti, 7.Bd3’e ise 7...d5 ile merkezi hemen açtı; Robert Byrne’e göre 8...exd5 maçın yeniliğiydi. Beyaz atları değişince Siyahın c6-d5 piyon ikilisi oluştu, 13...c5 ile bunlar **asılı piyonlara** dönüştü ve vezirler 15. hamlede değişti. Fischer 18. hamlede yaklaşık bir saat düşünüp **18...c4!** oynadı: ...Bb4 tehdidi karşısında Spasski 19.Nxd5 ile kalite verdi, 20...Bxh2+! ara hamlesinden sonra ortaya kale karşılığında fil + bir piyonun bulunduğu, motora göre eşit bir oyun sonu çıktı. Spasski bu oyun sonunu iki hatayla kaybetti: **30.g4?** f5’te zayıf, tek bir piyon yarattı, **34.Kf3?** ise Siyah şahına ...Ke5-f4 yolunu açtı. Oyun 40. hamleden sonra ertelendi, Spasski 41.Bd7’yi zarfa koydu ve ertesi gün devam etmeden telefonla terk etti. Fischer maçı 12½–8½ kazanıp 11. dünya şampiyonu oldu.',
  intro: 'Siyah 4...a6 ile Kan sistemine girer: piyonlar esnek kalır, b5 karesi kontrol edilir ve Siyah ...Nc6, ...Qc7 veya ...d5 arasında seçimini sonraya bırakır. Spasski 5.Nc3 oynayınca Fischer 5...Nc6 ile Taimanov tipine geçti (chess.com’un 50. yıl yazısı da bunu “Taimanov’a transpozisyon” olarak anlatır) ve 11. oyunda kaybettiği Najdorf zehirli piyon varyantına dönmedi. 6.Be3 Nf6 7.Bd3 kuruluşunda Beyazın fili d3’te e4’ü korur ama d4 atı sadece e3 filine dayanır; Fischer bunu 7...d5! ile cezalandırır: merkez açılır, e-hattı açılınca Beyaz taşları d4-e3-d3 üçgeninde birbirine sıkışır. Oyunun asıl dersi ise oyun sonundadır: kale-fil oyun sonunda piyon yapısını bozmamak ve rakip şahın giriş karelerini kapatmak.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Açılışta hızlı gelişip (Be3, Bd3, O-O) Siyahın erken ...d5’ini izole piyona çevirmek; ama 10.Nxc6 sonrası Siyahın c6-d5 ikilisi oluştu ve bu plan zayıfladı.',
      'Bd4 ve Bxf6 ile f6 atını değişip Siyahın şah kanadı piyonlarını ikilemek (15...gxf6) ve d5 piyonunun en önemli koruyucusunu yok etmek.',
      'Kaleleri d- ve e-hatlarına koyup (Rad1, Rfe1) asılı c5-d5 piyonlarına baskı yapmak; Be2-f3 ile d5’e üçüncü saldırıyı hazırlamak.',
      '18...c4 sonrası ...Bb4 tehdidini 19.Nxd5 kalite fedasıyla etkisizleştirip bir piyon karşılığında kalite eksiğiyle eşit bir oyun sonu kurmak.',
      'Oyun sonunda kale ikinci yataydan baskı yaparken f2’yi şahla korumak ve vezir kanadındaki a- ve b-piyonlarını fille destekleyerek Siyah kalesini bağlamak.',
      'Piyonları g3-f4 ile bir zincir halinde tutmak ve şahı g3’te bırakmak: Byrne’e ve motora göre bu kuruluşla (30.Kg3/30.g3 ve f4) beraberlik kolaydı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Kan/Taimanov esnekliğini kullanıp Beyazın 7.Bd3 kuruluşuna karşı **7...d5** ile merkezi hemen açmak ve 8...exd5 ile e-hattını açıp Beyaz taşlarının sıkışıklığından yararlanmak.',
      'Fil çiftini, açık b-hattını (...Rab8 ile b2’ye baskı) ve Beyazın h2 karesine bakan d6 filini kullanarak, vezirsiz oyunda bile inisiyatifi elde tutmak.',
      'Asılı piyonları pasif savunmak yerine **18...c4!** ile ilerletmek: b3’e saldırmak, ...Bb4 ile Nc3-e1 hattını hedef almak ve Beyazı somut karar vermeye zorlamak.',
      '19.Nxd5 sonrası **20...Bxh2+!** ara hamlesiyle materyali hesaplı biçimde geri almak ve kaleyi hemen **ikinci yataya** (...Rd2, ...Rxc2, ...Ra2) sokmak.',
      'Kale karşılığında fil + piyonun bulunduğu oyun sonunda f2 piyonunu sürekli hedef tutarak Beyaz şahını savunmaya bağlamak.',
      'Beyaz piyon yapısını bozunca (30.g4 f5!) f5’teki tek piyonu sabitlemek (31...f6) ve şahı **...Kd6-e5-f4** ile içeri sokmak; ardından ...h5-h4 ve ...Kg4 ile şah kanadında geçer piyon yaratmak.',
    ] },
  },
  critical: [
    { move: '8b', title: '8...exd5: maçın yeniliği', text: 'Robert Byrne (Chess Life & Review, Ocak 1973) 8...exd5’i yenilik olarak gösterip “mükemmel” diyor: daha önce oynanan 8...Nxd5 Siyaha daha kötü bir oyun veriyordu. Piyonla almak d5’te izole piyon bırakır ama e-hattını açar ve c8 filine yol verir; Beyazın d4 atı, e3 fili ve d3 fili e-hattında birbirinin önünü kesecek biçimde sıkışık kalır. Motor 8...Nxd5 (+0.78) ile 8...exd5’i (+0.66) yakın görse de pratikte Siyah çok rahat bir oyun aldı.' },
    { move: '12w', title: '12.Qf3: inisiyatifin el değiştirmesi', text: 'Spasski veziri f3’e getirip f6 atına ve d5’e baskı kurdu, ancak vezir burada ...Ng4/...Nd7 ve ...Be6-...c5 ile zaman kaybettirilecek bir hedef oldu. Motor 12.Na4’ü (c5 karesini kontrol eden ve ...c5’i zorlaştıran plan; Motor: +0.2) önerir; 12.Qf3 sonrası değerlendirme ilk kez Siyah lehine döner (Motor: −0.5). Buradan sonra Beyaz vezirleri değişerek dengeyi kurtarmaya çalışmak zorunda kaldı.' },
    { move: '18b', title: '18...c4!: gerginliği somut hesapla çözmek', text: 'Lawrence Stevens’ın kayıtlarına göre Fischer bu hamle için 58 dakika düşündü. ...c4, b3’e saldırır ve asıl tehdit ...Bb4’tür: fil c3 atını e1 kalesine bağlayıp ...cxb3/...Bxc3 ile materyal kazanmayı hedefler. 19.bxc4? Bb4! (Motor: −1.35) ve 19.Na4? Bf5! (Byrne’in verdiği hamle; Motor: −1.1) Beyaz için kötüdür. Bu yüzden Spasski kalite fedasına karar verdi. Motor ...c4’ü 18...Be5 ve 18...Bc7 ile aynı düzeyde (yaklaşık −0.1) görüyor; yani hamle zorlayıcıydı ama kazandırıcı değildi.' },
    { move: '19w', title: '19.Nxd5: kalite fedası “günü kurtarıyor”', text: 'Byrne’in deyişiyle “kalite fedası günü kurtarıyor”. 19.Nxd5 Bxd5 20.Rxd5 sonrası Beyaz bir piyon ve bir fil karşılığında at ve kale verir; 20...Bxh2+ 21.Kxh2 Rxd5 22.Bxc4 sonrası bilanço: Beyazın kalesi ve fili, Siyahın iki kalesi; ama Beyazın bir piyonu fazla (5’e 4). Motor bu oyun sonunu tam eşit görüyor (0.0). 19.Rxd5 aynı yere çıkar; 19.Rf1? ise ...Be5 ve ...Bf5 ile Siyaha büyük avantaj verir (Motor: −1.0).' },
    { move: '20b', title: '20...Bxh2+! iki kale arasındaki fil', text: 'd6 fili d5 kalesi ile d8 kalesi arasında kalmıştı; fil şah çekerek ve bir piyon alarak çekilir, ardından d8 kalesi d5’i alır. 20...cxb3 21.axb3 Bxh2+ de aynı yere yakın sonuç verir (Motor: +0.03), ama 20...Bb4? 21.Red1 Rxd5 22.Rxd5 sonrası Beyaz üstündür (Motor: +2.55). Bu ara hamle olmadan Siyah d5’teki kaleyi geri alamazdı.' },
    { move: '30w', title: '30.g4?: kalıcı zayıflık yaratmak', text: 'Byrne bu hamleyi “maç yorgunluğuna” bağlıyor ve 30.Kg3’ün ardından f4 ile Siyahın kazanamayacağını yazıyor. Motor da aynı fikirde: 30.g3 −0.01, 30.Kg3 −0.04; 30.g4 −0.45. 30...f5! 31.gxf5 f6 sonrası Beyazın f2 ve f5 piyonları birbirinden kopuk iki tek piyona dönüşür; f5 kalıcı bir hedef olur ve Siyah şahı e5-f4 karelerini kullanabilir hale gelir.' },
    { move: '34w', title: '34.Kf3?: şah kapıyı açıyor', text: 'Byrne’e göre Spasski artık “sersemlemiş bir adam gibi” oynuyordu ve 34.f4! (e5 ve g5’i kontrol eden, f-piyonunu şahın önüne kalkan yapan hamle) hâlâ beraberlik getirirdi. Motor: 34.f4 −0.1, 34.Kf3 −1.1. 34...Ra1! ile kale Beyaz şahını ...Rg1 tehdidiyle g2’ye geri iter; Beyaz tempo kaybederken Siyah şahı ...Ke5-f4 ile içeri girer.' },
    { move: '41w', title: '41.Bd7: zarftaki hamle ve terk', text: 'Spasski 41.Bd7’yi zarfa koydu. Byrne’e göre Siyah 41...Kg4 ile kazanır ve 41.Kh3 de Beyazı kurtarmazdı; Fischer kapanış ziyafetinde bile zarftaki hamlenin varyantlarını analiz ediyordu. Motor: 41.Bd7 −2.7 (41...h4 veya 41...Kg4), 41.Kh3 −1.0. Spasski 1 Eylül’de baş hakem Lothar Schmid’i telefonla arayıp terk etti; Euwe telefonla terkin geçerli olduğuna karar verdi.' },
  ],
  lessons: [
    'Kan/Taimanov yapılarında Beyaz taşlarını d4-e3-d3 üçgenine sıkıştırırsa **...d5** kırılması çok güçlüdür; e-hattı açılınca bu taşların hareket alanı daralır.',
    'Asılı piyonlar (c5-d5) savunulmaya çalışılınca pasifleşir; doğru anda biri ilerlerse (...c4) rakip somut ve hesaplanması zor kararlar vermek zorunda kalır. Fischer bu kararı vermek için bir saat düşündü.',
    'İki kale arasında kalan bir taş, şah çekerek çekilirse (**...Bxh2+**) arkadaki kale öndeki kaleyi alır. Ara hamleleri her zaman zorunlu geri almalardan önce kontrol edin.',
    'Kale ikinci yataya girince rakip piyonlara arkadan saldırır, şahı savunmaya bağlar ve fili pasif görevlere iter.',
    'Kale karşı fil oyun sonunda fil tarafı piyonlarını **birbirini koruyan bir zincirde** tutmalıdır: 30.g4? sonrası f2 ve f5 tek tek kaldı ve beraberlik gitti.',
    'Oyun sonunda şahın giriş kareleri her şeydir: 34.f4 ile e5/g5 kapanabilirdi; 34.Kf3? şahı yanlış kareye götürüp ...Ra1 ile tempo kaybettirdi ve Siyah şahı f4’e girdi.',
    'Uzun maçların sonunda yorgunluk hataları artırır: Spasski açılıştaki sıkıntıyı savunmayla atlattıktan sonra eşit oyun sonunu iki tek hamleyle kaybetti.',
  ],
  qa: [
    { q: 'Fischer neden 2...e6 ve 4...a6 oynadı, maçta denediği Najdorf’u değil?', a: 'Najdorf zehirli piyon varyantı 11. oyunda Spasski’nin 14.Nb1 yeniliğiyle ağır bir yenilgiyle bitmişti. Son oyunda Fischer’in bir puana, yani sağlam bir oyuna ihtiyacı vardı. Kan (4...a6) ve Taimanov (…Nc6) yapıları esnektir: Siyah hangi kuruluşa gideceğini Beyazın hamlelerine göre seçer. Spasski’nin 5.Nc3 ve 7.Bd3 kuruluşu ...d5 kırılmasına uygun düşünce Fischer merkezi hemen açtı.' },
    { q: '7...d5 neden bu kadar etkiliydi?', a: 'Beyazın d4 atı yalnızca e3 filine dayanıyordu ve d3 fili e-hattında açıkta duruyordu. 8.exd5 exd5 sonrası e-hattı açıldı: ...Qe7+ veya ...Re8 gibi hamleler e3 filini ve d4 atını aynı hatta sıkıştırır. Byrne’e göre 8...exd5 yeni bir hamleydi ve Beyaz taşlarının izole piyona karşı kötü yerleştiğini gösteriyordu. Motor ilk değerlendirmede Beyazı hâlâ biraz önde görse de (+0.5), Spasski kısa süre içinde inisiyatifi kaybetti.' },
    { q: 'Byrne 10.Nxc6’ya hata dedi; motor ne diyor?', a: 'Byrne 10.Nxc6’nın Siyahın merkezini c6-d5 ikilisiyle güçlendirdiğini ve 10.Be2 veya 10.Bf5’in daha iyi olduğunu yazıyor. Motor bu konuda ondan ayrılıyor: 10.Nxc6 +0.15, 10.Be2 −0.12, 10.Bf5 −0.21 (derinlik 18). Yani hamle stratejik olarak tartışmalı ama somut bir hata değil; asıl dengesizlik 12.Qf3 ile başlıyor.' },
    { q: '18...c4’ten sonra Beyaz neden kalite vermek zorunda kaldı?', a: 'Asıl tehdit ...Bb4’tü: fil c3 atını e1 kalesine bağlar ve ...cxb3, ...Bxc3 gibi hamlelerle materyal kazandırır. 19.bxc4? Bb4! 20.Nxd5 Bxe1 sonrası Siyah kalite kazanır (Motor: −1.35); 19.Na4? Bf5! ile c2 çökmektedir (Motor: −1.1); 19.Rf1? ise ...Be5 ve ...Bf5 ile kötüdür (Motor: −1.0). 19.Nxd5 (veya 19.Rxd5) piyonu alıp oyunu eşit bir oyun sonuna çevirir.' },
    { q: '22. hamleden sonraki oyun sonunda kim üstündü?', a: 'Kimse: motor 22.Bxc4’ten 29. hamleye kadar değerlendirmeyi 0.0 ile −0.15 arasında tutuyor. Siyahın kalesi fil karşısında daha güçlü bir taş, ama Beyazın bir piyonu fazla ve tüm piyonlar şah kanadında ve vezir kanadında bölünmüş. Beyaz piyon yapısını bozmadan şahını g3’te, piyonlarını f4-g3’te tutsaydı Siyahın giriş karesi olmazdı.' },
    { q: '30.g4 neden bu kadar kötüydü?', a: 'Bu hamle 30...f5! ile karşılandı: 31.gxf5 sonrası Beyazın g-piyonu yok oldu, f2 ve f5 birbirinden kopuk kaldı; 31...f6 ile Siyah f5’i sabitleyip ona e5-f4 karelerinden saldırma planı kurdu. 31.Kg3? fxg4 32.Kxg4 Rxf2 daha da kötüydü (Motor: −1.7). Byrne bunu maç yorgunluğuna bağladı ve 30.Kg3 ile f4’ün beraberliği koruyacağını yazdı; motor da 30.g3/30.Kg3’ü 0.0 civarında buluyor.' },
    { q: 'Spasski nerede kurtulabilirdi?', a: 'Son ve açık fırsat 34. hamleydi: 34.f4! şahın e5/g5 karelerini piyonla kontrol eder; Byrne de motor da (−0.1) bunu beraberlik olarak görüyor. 34.Kf3? Ra1! sonrası şah g2’ye dönmek zorunda kaldı ve Siyah şahı f4’e ulaştı (Motor: −1.1). Sonraki hamlelerde de 39.Bd5/39.Bf7 (−1.6) ve 41.Kh3 (−1.0) zarftaki 41.Bd7’den (−2.7) daha dirençliydi.' },
    { q: 'Fischer oyun sonunu nasıl kazanmayı planlıyordu?', a: 'Kale ikinci yatayda kalıp f2’yi bağlarken şah ...Kd6-e5-f4 ile içeri girer. Ardından ...h5-h4 ve ...Kg4 ile Beyaz şahı geri itilir, f5 piyonu alınır ve Siyahın h- ve f-piyonları geçer piyon olur. Motorun gösterdiği tipik hat: 41.Bd7 Kg4 42.Bc6 h4 43.Bf3+ Kxf5; Beyazın fili hem vezir kanadı piyonlarını hem şah kanadını tek başına savunamaz.' },
    { q: 'Oyun nasıl sona erdi?', a: 'Oyun 31 Ağustos’ta 40. hamleden sonra ertelendi; Spasski 41.Bd7’yi zarfa koydu. 1 Eylül’de Spasski devam etmek yerine baş hakem Lothar Schmid’i telefonla arayıp terk etti; Euwe bunun geçerli olduğuna karar verdi. Byrne, seyircilerin Fischer’in oyun sonu tekniğini göremediği için hayal kırıklığına uğradığını yazıyor. Fischer maçı 12½–8½ kazandı.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Spasski’nin maç boyunca beyazla temel silahı. Piyon merkezde d5 ve f5’i kontrol eder, f1 filine ve vezire yol açar.',
      amac: 'Merkezi hemen işgal etmek ve açık, taktik oyunlara yönelmek.',
      neden: 'Spasski maçta 1.e4 ile Fischer’in Sicilya’sına karşı birkaç kez iyi pozisyonlar almıştı; skor geride olduğu için kazanma şansı yüksek, keskin oyunlar istiyordu.',
      diger: [
        { move: '1.d4', text: 'Maçta Spasski bazı oyunlarda 1.d4’ü de denedi; daha konumsal oyunlara götürür (Motor: +0.25).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.22); Sicilya’dan kaçınır ama Spasski’nin açık oyun tarzına daha az uygundur.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine yandan baskı yapar ve simetrik olmayan bir yapı kurar.',
      amac: 'Beyaz d4 oynarsa c-piyonunu merkez piyonuyla değişip yarı açık c-hattı ve merkezde piyon çoğunluğu elde etmek.',
      neden: 'Sicilya, Fischer’in hayatı boyunca 1.e4’e karşı ana silahıydı; kazanma şansı veren dengesiz yapılar yaratır. Son oyunda bile Fischer sağlam ama pasif olmayan bir savunma seçti.',
      diger: [
        { move: '1...e5', text: 'Daha simetrik ve sakin oyunlar; motor biraz daha iyi görüyor (+0.24) ama Fischer bu maçta ...e5 ile hiç oynamadı.' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.35); Fischer’in repertuvarında yer almıyordu.' },
      ],
    },
    '2w': {
      text: '2.Nf3: Açık Sicilya’nın ana hamlesi. At gelişir ve d4 ilerleyişini hazırlar.',
      amac: 'd4 ile merkezi açıp gelişim üstünlüğüyle oynamak.',
      neden: 'Açık Sicilya en keskin ve en çok incelenmiş yoldur; Spasski maçta Fischer’in Najdorf’una da bu yoldan girmişti.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya (Motor: +0.35); Spasski’nin bir dönem sevdiği ama bu maçta tercih etmediği konumsal bir yol.' },
        { move: '2.c3', text: 'Alapin: d4’ü piyonla desteklemek; daha az iddialı.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini kontrol eder ve f8 filine e7, d6, c5 veya b4 yollarını açar.',
      amac: 'Kan, Taimanov veya Scheveningen yapılarına esnek biçimde girmek; ileride ...d5 kırılmasına hazırlanmak.',
      neden: 'Fischer bu maçta ağırlıklı olarak 2...d6 (Najdorf) oynamıştı; 11. oyunda zehirli piyon varyantında kaybedince son oyunda daha az incelenmiş bir yola saptı. ...e6 sonrası ...d5 tek hamlede mümkün hale gelir ki bu oyunda belirleyici oldu.',
      diger: [
        { move: '2...d6', text: 'Najdorf/Dragon yolu (Motor: +0.50); Fischer’in favorisi ama 11. oyunda Spasski’nin hazırlığına çarpmıştı.' },
        { move: '2...Nc6', text: 'Klasik Sicilya veya Sveşnikov yapılarına gider (Motor: +0.32).' },
      ],
    },
    '3w': {
      text: '3.d4: Merkez açılır; Beyaz d4 piyonunu c5 piyonuyla değiştirir.',
      amac: 'Merkezde e4 piyonuyla kalıp taşlarını hızla geliştirmek ve açık hatları kullanmak.',
      neden: 'Açık Sicilya’nın mantığı budur: Beyaz bir merkez piyonunu kanat piyonuyla değiştirip gelişimde öne geçer, Siyah ise merkezde piyon çoğunluğu kazanır.',
      diger: [
        { move: '3.Nc3', text: 'Önce at (Motor: +0.45); Siyahın ...a6/...Nc6 seçimlerini kısıtlar ama d4 yine gelir.' },
        { move: '3.c3', text: 'Alapin tipine geçiş; merkezi piyonla tutar ama keskinlik azalır.' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah merkez piyonunu alır; c-hattı yarı açık hale gelir.',
      amac: 'Merkezde iki piyona (d7 ve e6) karşı Beyazın tek e4 piyonunu bırakmak.',
      neden: 'Sicilya’nın temel değişimi. Değişmemek (3...a6?) Beyaza 4.d5 ile alan kazandırır (Motor: +0.73).',
      diger: [
        { move: '3...a6', text: '4.d5 ile Beyaz merkezde alan kazanır (Motor: +0.73).' },
        { move: '3...d5', text: '4.exd5 exd5 5.Bb5+ sonrası Siyahın izole piyonu ve gelişim sorunu kalır (Motor: +0.88).' },
      ],
    },
    '4w': {
      text: '4.Nxd4: At merkezde piyonu geri alır.',
      amac: 'Atı merkezde güçlü bir karede tutup Nc3, Be3/Be2 ile hızlı gelişmek.',
      neden: 'Veziriyle almak (4.Qxd4) ...Nc6 ile tempo kaybettirir (Motor: +0.11); atla almak hem gelişim hem merkez kontrolü sağlar.',
      diger: [
        { move: '4.Qxd4', text: 'Vezir erken merkeze gelir ve ...Nc6 ile kovalanır (Motor: +0.11).' },
      ],
    },
    '4b': {
      text: '4...a6: Kan (Paulsen) sistemi. Siyah b5 karesini kontrol eder ve Beyaz atının Nb5 sıçrayışını önler.',
      amac: 'Esnek kalmak: ...Qc7, ...b5, ...Nc6 veya ...d5’ten hangisinin uygun olduğuna Beyazın kuruluşuna göre karar vermek.',
      neden: 'Byrne’in notlarına göre Fischer bu Sicilya tipine karşı beyazla birçok galibiyet almıştı ama siyahla nadiren oynamıştı; Spasski’nin hazırlığından kaçmak için iyi bir seçimdi. 4...a6 ile Nb5-d6 sıçraması ortadan kalkar, bu da ...Nc6 ve ...Bb4/...Bd6 planlarını güvenli kılar.',
      diger: [
        { move: '4...Nc6', text: 'Doğrudan Taimanov; 5.Nb5 ile d6 karesine baskı yapılabilir (Motor: +0.42).' },
        { move: '4...Nf6', text: '5.Nc3 ile Scheveningen/Dört At yapıları (Motor: +0.42).' },
      ],
    },
    '5w': {
      text: '5.Nc3: At e4’ü korur ve d5 karesini kontrol eder.',
      amac: 'Doğal gelişimi sürdürüp Siyahı netleşmeye zorlamak.',
      neden: 'Byrne’e göre Fischer’in kendisinin Kan’a karşı alışkanlığı 5.Bd3’tü; Petrosyan da ona Buenos Aires’te c4’lü kuruluşla oynamıştı. Spasski daha doğal ama ...Nc6/...Bb4 fikirlerine izin veren 5.Nc3’ü seçti (Motor: +0.19).',
      diger: [
        { move: '5.Bd3', text: 'Fischer’in kendi tercih ettiği hamle: e4’ü fille korur ve c4 ile Maroczy kuruluşunu açık tutar (Motor: +0.49).' },
        { move: '5.c4', text: 'Maroczy bağı: d5’i kontrol eder ve Siyahı sıkıştırır (Motor: +0.43).' },
      ],
    },
    '5b': {
      text: '5...Nc6: Siyah atı merkeze getirir ve oyunu Taimanov tipine çevirir.',
      amac: 'd4 atını sorgulamak, ...Nf6 ve ...Bb4/...Bd6 ile hızla gelişmek.',
      neden: 'chess.com’un yazısında da belirtildiği gibi Fischer Taimanov’a transpozisyonla girdi. ...a6 hamlesi önceden oynandığı için Beyazın 6.Ndb5 yolu kapalıdır; Siyah bu sayede tipik Taimanov’dan daha rahat gelişir.',
      diger: [
        { move: '5...Qc7', text: 'Klasik Kan/Paulsen kuruluşu (Motor: +0.41); vezir e5 ve c-hattını kontrol eder.' },
        { move: '5...b5', text: 'Vezir kanadında alan kazanmak ve ...Bb7 ile e4’e baskı (Motor: +0.45).' },
      ],
    },
    '6w': {
      text: '6.Be3: Fil d4 atını korur ve vezir kanadına bakar.',
      amac: 'Qd2 ve büyük rok gibi saldırgan kuruluşlara veya Bd3 ve kısa roka gitmek.',
      neden: 'Be3 en yaygın kuruluşlardan biridir; ama fil e3’te e-hattının açılması durumunda d4 atıyla birlikte hedef olur. Bu oyunda tam da bu oldu.',
      diger: [
        { move: '6.Nxc6', text: 'bxc6 sonrası e5 ve Qf3/Qg3 fikirleri (Motor: +0.51).' },
        { move: '6.Be2', text: 'Sakin ana hat; ardından O-O ve f4.' },
        { move: '6.Bf4', text: 'd6 karesine baskı (Motor: +0.55).' },
      ],
    },
    '6b': {
      text: '6...Nf6: At e4’e baskı yapar ve şah kanadını rok için hazırlar.',
      amac: 'Gelişimi tamamlamak ve ...Bb4 ile e4’e ek baskı kurmak; gerekirse ...d5.',
      neden: '...Nf6, e4’e saldırarak Beyazı bir karar vermeye zorlar: piyon ya f3 ya Bd3 ya da Nxc6/e5 ile korunmalı. Spasski Bd3’ü seçti ve bu ...d5’e imkân verdi.',
      diger: [
        { move: '6...Qc7', text: 'Paulsen kuruluşu; Qd2 ve O-O-O sonrası keskin oyunlar (Motor: +0.43).' },
        { move: '6...Nge7', text: 'Taimanov’un tipik at manevrası, ama burada 7.Nb3 sonrası ...d5 sorunlu (Motor: +0.78).' },
      ],
    },
    '7w': {
      text: '7.Bd3: Fil e4’ü korur ve şah kanadına bakar.',
      amac: 'Kısa rok yapıp Qe2/f4 ile merkezi tutmak.',
      neden: 'chess.com yazısına göre Spasski yedinci hamlede dengesini yitirmişti. Bd3 e4’ü korur, ama d-hattında fil ile d4 atı yan yana gelir ve e-hattı açılırsa e3 fili açıkta kalır; ...d5 tam bunu hedefler (Motor: +0.34).',
      diger: [
        { move: '7.a3', text: '...Bb4’ü önleyen sakin hamle (Motor: +0.52).' },
        { move: '7.Qd2', text: 'f3 ve O-O-O ile İngiliz atağı tipi; keskin oyun (Motor: +0.42).' },
        { move: '7.Nxc6', text: '7...bxc6 8.e5 Nd5 9.Nxd5 cxd5 ile Beyaz alan kazanır ve ...d5 kırılmasını önceden boşa çıkarır (Motor: +0.30).' },
      ],
    },
    '7b': {
      text: '7...d5!: Siyah merkezi hemen açar; e4 piyonu değişime zorlanır.',
      amac: 'e-hattını açıp Beyazın d4 atı ile e3 filini aynı hatta yakalamak ve taşlarını serbest bırakmak.',
      neden: 'Beyaz henüz rok yapmamıştı ve d4 atı sadece e3 filiyle korunuyordu; ...d5 sonrası ...e5 veya ...Qe7 gibi hatlar Beyaza sorun çıkarır. Motor bu hamleyi Beyaza küçük bir artı veren hamle olarak görüyor (derinlik 20’de +0.47), ama pratikte Beyaz taşlarının uyumsuzluğu ortaya çıktı.',
      diger: [
        { move: '7...Qc7', text: 'Klasik Paulsen kuruluşu (Motor: +0.31); daha yavaş ama sağlam.' },
        { move: '7...e5', text: '8.Nb3 Bb4 ile e4’e baskı (Motor: +0.34); d5 karesi zayıflar.' },
      ],
    },
    '8w': {
      text: '8.exd5: Beyaz d5’te değişir.',
      amac: 'Merkezi açıp Siyahta izole bir d-piyonu bırakmak.',
      neden: 'e4’ü 8.e5 ile ilerletmek ...Nd7 ve ...Qc7/...f6 ile hedef olurdu; 8.exd5 en mantıklı yol.',
      diger: [
        { move: '8.f4', text: 'e4’ü piyonla korumak (Motor: +0.37); şah kanadı zayıflar.' },
        { move: '8.O-O', text: '8...Bd6 9.Nxc6 bxc6 ile oyuna benzer yapılar (Motor: +0.31).' },
      ],
    },
    '8b': {
      text: '8...exd5!: Byrne’e göre bu hamle maçın yeniliğiydi; Siyah piyonla alır ve e-hattını açar.',
      amac: 'c8 filine yol açmak, e-hattını kullanmak ve izole d5 piyonunun verdiği alan (e4, c4 kareleri) ile aktif taş oyunu kurmak.',
      neden: 'Byrne: “mükemmel; daha önce oynanan 8...Nxd5 Siyaha daha kötü bir oyun veriyordu, şimdi Beyazın hafif taşları izole piyona karşı kötü yerleşmiş durumda.” 8...Nxd5 9.Nxd5 sonrası Siyahın merkezde piyonu kalmazdı; 8...Nxd4? ise 9.Bxd4 ile Beyaza fil çifti ve merkez verir.',
      diger: [
        { move: '8...Nxd5', text: 'Eski hamle; taşlar değişir ve Beyaz merkezde rahat oynar (Motor: +0.78).' },
        { move: '8...Nxd4', text: '9.Bxd4 Qxd5? veya ...exd5 sonrası Beyaz fil çiftini korur (Motor: +1.05).' },
      ],
    },
    '9w': {
      text: '9.O-O: Beyaz kısa rok yapar.',
      amac: 'Şahı güvenceye alıp kaleyi e1’e getirmek ve d5’e baskı yapmak.',
      neden: 'Doğal görünse de motor burada 9.Qd2 ve büyük rokla daha iddialı bir oyunu tercih ediyor (Motor: +0.66); 9.O-O sonrası değerlendirme +0.16’ya düşer, çünkü ...Bd6 ile Siyahın fili h2’yi hedef alır.',
      diger: [
        { move: '9.Qd2', text: 'O-O-O ile karşı kanatlara rok ve d5’e baskı; motorun tercihi (+0.66).' },
        { move: '9.h3', text: '...Bg4 ve ...Ng4’ü önler, sonra Qd2 (Motor: +0.49).' },
      ],
    },
    '9b': {
      text: '9...Bd6: Fil aktif kareye gelir; b8-h2 çaprazında h2’ye bakar.',
      amac: 'Rok yapmak, ...Re8 ile e-hattını kullanmak ve şah kanadında baskı kurmak.',
      neden: 'd6’daki fil hem f4 karesini kontrol eder hem de ileride ...Bxh2+ taktiklerine zemin hazırlar (oyunda 20...Bxh2+ ile gerçekleşti). 9...Be7 daha pasiftir (Motor: +0.49).',
      diger: [
        { move: '9...Bb4', text: 'c3 atını bağlar (Motor: +0.32), ama 10.Nxc6 bxc6 11.Na4 ile fil boşa çıkabilir.' },
        { move: '9...Be7', text: 'Güvenli ama pasif (Motor: +0.49).' },
      ],
    },
    '10w': {
      text: '10.Nxc6: Beyaz atları değişir.',
      amac: 'Siyahın c6 atını yok edip d4 karesini fil için boşaltmak (11.Bd4).',
      neden: 'Byrne bu hamleye “?” veriyor: Siyahın merkezi c6-d5 ikilisiyle güçlenir; ona göre 10.Be2 veya 10.Bf5 daha iyiydi, 10.h3 ise ...Bc7 ve ...Qd6’ya izin verirdi. Motor burada Byrne’den ayrılıyor: 10.Nxc6 +0.15, 10.Be2 −0.12, 10.Bf5 −0.21 (derinlik 18); yani hamle stratejik olarak tartışmalı ama somut bir hata değil.',
      diger: [
        { move: '10.Be2', text: 'Byrne’in önerisi; motor 10...O-O 11.Qd2 Re8 ile Siyahı rahat görüyor (−0.12).' },
        { move: '10.h3', text: '...Bg4/...Ng4’ü önler (Motor: +0.15), ama Byrne’e göre ...Bc7 ve ...Qd6 ile b8-h2 çaprazında baskı gelir.' },
        { move: '10.Re1+', text: 'Önce şah çekmek; 10...Be6 sonrası benzer yapılar (Motor: +0.15).' },
      ],
    },
    '10b': {
      text: '10...bxc6: Siyah b-piyonuyla geri alır. c6-d5 piyonları merkezi tutar, b-hattı açılır.',
      amac: 'Merkez piyonlarını desteklemek ve açık b-hattını kaleyle kullanmak.',
      neden: 'Zorunlu geri alma: 10...Qc7? veya 10...Bxh2+? taşı geri almadığı için kaybeder (Motor: +4.1/+4.2). Piyonla almak izole d5’i c6 ile destekler.',
    },
    '11w': {
      text: '11.Bd4: Fil d4’e gelir; f6 atına ve g7 karesine bakar.',
      amac: 'Bxf6 tehdidiyle Siyahın şah kanadı yapısını bozmak ve d5’in koruyucusunu yok etmek.',
      neden: 'd4 karesi, Siyahın piyonla saldıramayacağı (c-piyonu c6’da) güçlü bir merkez karesidir; fil buradan hem f6’yı hem a7-g1 çaprazını kontrol eder (Motor: +0.16).',
      diger: [
        { move: '11.Qd2', text: 'Bf4 ile fil değişimini hazırlamak (Motor: +0.13).' },
        { move: '11.h3', text: '...Bg4 ve ...Ng4’ü önceden önlemek (Motor: +0.07).' },
      ],
    },
    '11b': {
      text: '11...O-O: Siyah rok yapar.',
      amac: 'Şahı güvenceye alıp kaleleri b- ve e-hatlarına getirmek.',
      neden: 'Siyahın gelişimi neredeyse tamam; rok ile kaleler birleşir. 11...a5 gibi vezir kanadı hamleleri 12.Qe1+ ile Siyahı rahatsız eder (Motor: +0.36).',
      diger: [
        { move: '11...Be6', text: 'Önce d5’i korumak (Motor: +0.11); oyuna benzer.' },
        { move: '11...a5', text: 'Vezir kanadında alan, ama 12.Qe1+ ile şah merkezde kalır (Motor: +0.36).' },
      ],
    },
    '12w': {
      text: '12.Qf3: Vezir f6 atına ve d5’e baskı yapar.',
      amac: 'Bxf6 ile f6’yı değiştirip d5’i düşürmek; vezir şah kanadına da bakar.',
      neden: 'Tehdit gerçek ama vezir f3’te ...Ng4 veya ...Nd7 ve ...Be6-...c5 ile zaman kaybettirilecek bir hedef olur. Motor bu hamleden sonra değerlendirmeyi ilk kez Siyah lehine çeviriyor (−0.5); 12.Na4 ile c5 karesini kontrol etmek ...c5’i zorlaştırırdı (Motor: +0.2).',
      diger: [
        { move: '12.Na4', text: 'c5 karesini kontrol eder, ...c5’i durdurur (Motor: +0.26, derinlik 18).' },
        { move: '12.Re1', text: 'e-hattını almak (Motor: −0.09); ...Ng4 ile Siyah aktif.' },
      ],
    },
    '12b': {
      text: '12...Be6: Fil d5’i korur.',
      amac: 'd5’i sağlamlaştırıp ...c5 ile merkez piyonlarını ilerletmeye hazırlanmak.',
      neden: 'Bxf6 tehdidi karşısında d5’e ikinci koruyucu gerekir. Motor 12...Nd7 (atı korumak ve vezir değişimini önlemek; −0.47) ve 12...Ng4’ü (−0.45) biraz daha iyi buluyor; Fischer basit ve sağlam olanı seçti.',
      diger: [
        { move: '12...Nd7', text: 'Atı değişimden kaçırır, ...Ne5 ile vezire saldırma fikri (Motor: −0.47).' },
        { move: '12...Ng4', text: 'h2’ye ve vezire karşı aktif oyun; 13.h3 Qg5 ile (Motor: −0.45).' },
      ],
    },
    '13w': {
      text: '13.Rfe1: Kale e-hattına gelir ve e6 filine bakar.',
      amac: 'e6 filini baskı altına alıp d5’in koruyucularını azaltmak.',
      neden: 'Beyaz gelişimini tamamlar; kale e-hattında filin önünü keser. 13.Na4 (−0.22) ve 13.Bxf6 (−0.30) aynı düzeyde; asıl sorun Siyahın ...c5 ile tempo kazanacak olması.',
      diger: [
        { move: '13.Na4', text: 'c5 karesini tutmak (Motor: −0.22).' },
        { move: '13.Bxf6', text: 'Hemen değişmek; 13...Qxf6 14.Qxf6 gxf6 ile oyuna benzer (Motor: −0.30).' },
      ],
    },
    '13b': {
      text: '13...c5: Fil sorgulanır; c5-d5’te asılı piyonlar oluşur.',
      amac: 'Tempo kazanarak d4 filini kovmak ve merkezde piyon gücüyle oynamak; ileride ...c4 veya ...d4 ilerleyişlerini hazırlamak.',
      neden: 'Fil kaçmak zorundadır; Bxf6 ile değişirse Siyah veziriyle alıp vezir değişimine razı olur. Asılı piyonlar kendi aralarında korunmaz ama dinamik bir merkez sunar (Motor: −0.35).',
      diger: [
        { move: '13...Re8', text: 'Önce e-hattına kale (Motor: −0.32).' },
        { move: '13...h6', text: 'Hazırlık hamlesi (Motor: −0.25); daha yavaş.' },
      ],
    },
    '14w': {
      text: '14.Bxf6: Beyaz f6 atını alır; d5’in koruyucularından biri gider.',
      amac: 'Vezir değişimine gidip Siyahın şah kanadı piyonlarını ikilemek ve d5’e baskıyla oyun sonu oynamak.',
      neden: 'Fil kaçacak iyi kare bulamaz: 14.Be5 (−0.40) mümkün ama ...Bxe5 sonrası Siyahın merkezi güçlenir. 14.Nxd5?? cxd4 15.Nxf6+ Qxf6 16.Qxf6 gxf6 Siyaha taş kazandırır (Motor: −3.75).',
      diger: [
        { move: '14.Be5', text: 'Fil değişimi teklif etmek (Motor: −0.40).' },
        { move: '14.Nxd5', text: 'Taktik görünür ama 14...cxd4! ile Siyah taş kazanır (Motor: −3.75).' },
      ],
    },
    '14b': {
      text: '14...Qxf6: Siyah veziriyle alır ve vezir değişimini kabul eder.',
      amac: 'Piyon yapısını korumak ve vezirsiz oyunda fil çifti ile aktif kaleleri kullanmak.',
      neden: 'Zorunlu sayılır: 14...gxf6? 15.Qh5 ile h7 ve d5’e çifte saldırı (Motor: +3.43); 14...Qd7? 15.Qh5 h6 sonrası benzer sorunlar (Motor: +4.78).',
    },
    '15w': {
      text: '15.Qxf6: Vezirler değişir.',
      amac: 'Siyahın şah kanadı piyonlarını ikilemek ve d5/c5’e karşı sakin bir oyun sonu oynamak.',
      neden: 'Vezir değişmezse 15.Be2? (−0.34) veya 15.Bf1 Qxf3 16.gxf3 (−0.56) Beyazın kendi yapısını bozar. 15.Qxf6 en temiz yol.',
      diger: [
        { move: '15.Be2', text: 'Vezirleri tutmak; 15...Rab8 ile Siyah b2’ye baskı yapar (Motor: −0.34).' },
        { move: '15.Bf1', text: '15...Qxf3 16.gxf3 sonrası Beyazın piyonları bozulur (Motor: −0.56).' },
      ],
    },
    '15b': {
      text: '15...gxf6: Siyah piyonla alır; f-piyonları ikilenir ama g-hattı açılır ve fil çifti kalır.',
      amac: 'Materyali dengelemek; ikilenmiş f-piyonları e5 ve g5 karelerini kontrol eder.',
      neden: 'Zorunlu geri alma: 15...Bxh2+? 16.Kxh2 gxf6 sonrası Siyah bir fil karşılığında bir piyon almış olur (Motor: +4.86).',
    },
    '16w': {
      text: '16.Rad1: Kale d-hattına gelir; d5 piyonu hedefte.',
      amac: 'Nc3, Rd1 ve ileride Bf3/Be2-f3 ile d5’e üçlü baskı kurmak.',
      neden: 'Asılı piyonlara karşı en doğal plan, onları taşlarla kuşatmaktır. Motor 16.Bf1 ve 16.g3’ü de aynı düzeyde görüyor (−0.26 ile −0.33 arası).',
      diger: [
        { move: '16.Bf1', text: 'Fili güvenli kareye almak ve d-hattını açmak (Motor: −0.30).' },
        { move: '16.g3', text: 'h2’yi ve f4’ü korumak, şaha luft açmak (Motor: −0.33).' },
      ],
    },
    '16b': {
      text: '16...Rfd8: Kale d8’de d5’i korur.',
      amac: 'd5’i savunup sonra a8 kalesini b-hattına getirerek b2’ye baskı kurmak.',
      neden: 'd5’e iki saldırı (Nc3, Rd1) vardır; kale ile korumak zorunludur. Motor 16...Be5 (fili merkeze getirmek; −0.24) ve 16...Bc7’yi de eşdeğer buluyor.',
      diger: [
        { move: '16...Be5', text: 'Fili güçlü merkez karesine almak (Motor: −0.24).' },
        { move: '16...Bc7', text: 'Fili a5-e1 çaprazına hazırlamak (Motor: −0.16).' },
      ],
    },
    '17w': {
      text: '17.Be2: Fil e2’ye çekilir; d-hattını açar ve f3 üzerinden d5’e bakmaya hazırlanır.',
      amac: 'Bf3 ile d5’e üçüncü saldırıyı kurmak.',
      neden: 'd3’teki fil d-hattını tıkıyordu. Motor 17.Bf1’i biraz daha iyi buluyor (−0.11): fil f1’de g2’yi korur ve ...c4 sonrası Bxc4 imkânını tutar.',
      diger: [
        { move: '17.Bf1', text: 'Fili korunaklı tutmak (Motor: −0.11).' },
        { move: '17.b3', text: 'Önce ...c4’ü önlemek (Motor: −0.17).' },
      ],
    },
    '17b': {
      text: '17...Rab8: Kale b-hattında b2 piyonuna baskı yapar.',
      amac: 'b2’yi zayıf bir hedef yapıp Beyazı b3 oynamaya zorlamak; sonra ...c4 ile bu piyona saldırmak.',
      neden: 'Bf3 tehdidi d5’i düşürmeye yönelikti; Fischer pasif savunma yerine karşı baskı kurdu. b3 oynanınca ...c4 kırılması daha da etkili hale gelir (Motor: −0.09).',
      diger: [
        { move: '17...Be5', text: 'Fili merkeze getirip c3 atını bağlamak (Motor: −0.02).' },
        { move: '17...Ra7', text: 'Kaleyi ikinci yataydan d-hattına götürme fikri (Motor: +0.03).' },
      ],
    },
    '18w': {
      text: '18.b3: b2 piyonu ilerler ve c4 karesi kontrol edilir.',
      amac: 'b2’yi koruma ihtiyacından kurtulmak ve ...c4’ü önlemek.',
      neden: 'b2 başka şekilde rahat korunamaz: 18.g3 (−0.58) ve 18.Na4 (−0.69) motorun gözünde daha kötü. Ama b3 c4 karesine bir hedef yaratır; Fischer hemen bunu kullandı (Motor: −0.05).',
      diger: [
        { move: '18.Na4', text: 'At kenarda pasif kalır; 18...c4 ile Siyah üstün (Motor: −0.69).' },
        { move: '18.g3', text: 'Bf3 için hazırlık, ama b2 korumasız (Motor: −0.58).' },
      ],
    },
    '18b': {
      text: '18...c4!: Siyah gerginliği çözer; b3’e saldırır ve d5’i görünüşte savunmasız bırakır.',
      amac: '...Bb4 tehdidi kurmak (c3 atını e1 kalesine bağlayıp materyal kazanmak) ve ...cxb3 ile b-hattını açmak.',
      neden: 'Lawrence Stevens’ın zaman kayıtlarına göre (ChessBase) Fischer bu hamleye 58 dakika harcadı; Byrne de hamleye “!” veriyor. Sonrasında 19.bxc4? Bb4! (−1.35), 19.Na4? Bf5! (−1.1) ve 19.Rf1? Be5 (−1.0) Beyaz için kötüdür; Beyazın tek iyi yolu kalite fedasıdır. Motor ...c4’ü 18...Be5 ve 18...Bc7 ile eşdeğer görüyor (yaklaşık −0.1).',
      diger: [
        { move: '18...Be5', text: 'Fili merkeze getirmek (Motor: −0.07); daha yavaş ama aynı düzeyde.' },
        { move: '18...Bc7', text: '...Ba5 ile c3 atını bağlama planı (Motor: −0.12).' },
      ],
    },
    '19w': {
      text: '19.Nxd5: Beyaz d5 piyonunu alır; kalite fedasına hazırdır.',
      amac: 'Tehlikeli ...Bb4 tehdidini ortadan kaldırmak ve bir piyon karşılığında kaliteyi vererek dengeli bir oyun sonu kurmak.',
      neden: 'Byrne: “Kalite fedası günü kurtarıyor!” 19.Na4? Bf5! (−1.1) ve 19.bxc4? Bb4! 20.Nxd5 Bxe1 (−1.35) Beyazı kötü duruma düşürür. 19.Nxd5 ve 19.Rxd5 aynı konuma çıkar (Motor: her ikisi yaklaşık 0.0).',
      diger: [
        { move: '19.Rxd5', text: '19...Bxd5 20.Nxd5 Bxh2+ 21.Kxh2 Rxd5 ile aynı oyun sonu (Motor: −0.04).' },
        { move: '19.Na4', text: 'Byrne’e göre ...Bf5 ile kaybeder: c2 düşer (Motor: −1.09).' },
        { move: '19.bxc4', text: '19...Bb4! sonrası Beyaz kalite kaybeder (Motor: −1.35).' },
      ],
    },
    '19b': {
      text: '19...Bxd5: Fil d5 atını alır.',
      amac: 'Merkezdeki atı yok edip 20.Rxd5 sonrası ...Bxh2+ ara hamlesini hazırlamak.',
      neden: 'Sıralama önemli: önce fille almak gerekir. 19...Bxh2+? 20.Kxh2 Rxd5 21.Rxd5 Bxd5 sonrası Beyaz piyon fazlasıyla üstün (+1.11); 19...cxb3? 20.Nxf6+ Kg7 21.Nh5+ ile Beyaz üstün (+1.41).',
      diger: [
        { move: '19...Bxh2+', text: 'Yanlış sıra: 20.Kxh2 Rxd5 21.Rxd5 Bxd5 sonrası Beyaz üstün (Motor: +1.11).' },
        { move: '19...cxb3', text: '20.Nxf6+ ile at şah çekerek kaçar (Motor: +1.41).' },
      ],
    },
    '20w': {
      text: '20.Rxd5: Kale d5’ten geri alır. d6 fili d5 kalesi ile d8 kalesinin arasında kaldı.',
      amac: 'Materyali geri almak; d6 filini bağlamış görünmek.',
      neden: 'Zorunlu: 20.Rd4? cxb3 (−3.73) veya 20.Bxc4? Bxc4 21.bxc4 Bb4 (−3.94) Beyazı bir taş eksik bırakır.',
    },
    '20b': {
      text: '20...Bxh2+!: Fil şah çekerek d-hattından çekilir; şimdi d8 kalesi d5 kalesine saldırıyor.',
      amac: 'Ara hamleyle d5 kalesini geri almak ve bir piyon da kazanmak.',
      neden: 'Fil iki kale arasında kalmıştı; normal bir çekilme (20...Bb4?) 21.Red1 Rxd5 22.Rxd5 ile Beyaza kalesini korutur (Motor: +2.55). Şah çekerek çekilince Beyaz kendi kalesini savunacak zamanı bulamaz. 20...cxb3 21.axb3 Bxh2+ de mümkündü (Motor: +0.03).',
      diger: [
        { move: '20...cxb3', text: '21.axb3 Bxh2+ 22.Kxh2 Rxd5 ile benzer oyun sonu (Motor: +0.03).' },
        { move: '20...Bb4', text: '21.Red1 ile kale korunur; Siyah bir taş eksik (Motor: +2.55).' },
      ],
    },
    '21w': {
      text: '21.Kxh2: Şah fili alır.',
      amac: 'Filin karşılığını almak; aksi halde Beyaz bir taş eksik kalır.',
      neden: 'Zorunlu: 21.Kf1? Rxd5 (−3.04) veya 21.Kh1? Rxd5 22.Kxh2 (−3.86) sonrası Siyah fili de kurtarır ya da tempo kazanır.',
    },
    '21b': {
      text: '21...Rxd5: Kale d5’i alır.',
      amac: 'Materyali dengelemek: Siyahın iki kalesine karşı Beyazın kalesi ve fili.',
      neden: 'Zorunlu ve doğal: 21...cxb3? 22.Rxd8+ ile Beyaz kaleyi önce alır (Motor: +5.49).',
    },
    '22w': {
      text: '22.Bxc4: Fil c4 piyonunu alır ve kaleye tempo kazanır.',
      amac: 'Kalite eksiği karşılığında bir piyon fazlası sağlamak (beşe dört piyon) ve fili aktifleştirmek.',
      neden: 'Bu piyonu almak oyunun dengesi için şarttı: 22.Rc1? cxb3 (−1.08) veya 22.Bf1? Rd2 (−1.20) sonrası Siyah hem piyonu tutar hem ikinci yataya girer.',
      diger: [
        { move: '22.Rc1', text: '22...cxb3 23.axb3 Rc8 ile Siyah üstün (Motor: −1.08).' },
        { move: '22.Bf1', text: '22...Rd2 sonra Bxc4 Rxc2 ile Siyah aktif (Motor: −1.20).' },
      ],
    },
    '22b': {
      text: '22...Rd2: Kale ikinci yataya girer; c2 ve f2 hedefte.',
      amac: 'Beyazın piyonlarına arkadan saldırmak ve materyali geri kazanmak.',
      neden: 'Kale ikinci yatayda en aktif halini alır ve Beyazın fili hem a6’yı alıp hem de piyonları savunamaz. 22...Rh5+ (+0.26) veya 22...Rc5 (+0.31) daha pasiftir.',
      diger: [
        { move: '22...Rh5+', text: '23.Kg1 Re5 ile kale e-hattını değiştirir (Motor: +0.26).' },
        { move: '22...Rc5', text: 'Fili sıkıştırmak (Motor: +0.31); Beyaz rahat savunur.' },
      ],
    },
    '23w': {
      text: '23.Bxa6: Fil a6 piyonunu alır.',
      amac: 'Piyon fazlasını korumak: c2 düşse de a6’nın alınmasıyla denge sürer.',
      neden: 'c2 ve f2 aynı anda korunamaz; Spasski karşı saldırıyı seçti. 23.Bd3 Rxf2 (0.0) da eşit; 23.Re2 Rxe2 24.Bxe2 a5 biraz daha zayıf (−0.23).',
      diger: [
        { move: '23.Bd3', text: 'c2’yi korur, 23...Rxf2 ile f-piyonu düşer (Motor: 0.00).' },
        { move: '23.Re2', text: 'Kale değişimi; Siyahın a-piyonu kalır (Motor: −0.23).' },
      ],
    },
    '23b': {
      text: '23...Rxc2: Kale c2’yi alır; Beyazın a2 ve f2 piyonları hâlâ ikinci yatayda.',
      amac: 'Piyonu geri alıp ikinci yataydaki baskıyı sürdürmek.',
      neden: 'c2 korumasızdır ve kale a2/f2’ye saldırmaya devam eder. 23...Rxf2? 24.Bd3 sonrası Beyazın vezir kanadı piyonları çok güçlenir (Motor: +1.30).',
      diger: [
        { move: '23...Ra8', text: 'Fili kovalamak (Motor: +0.19); 24.Bd3 Rxa2 sonrası Beyaz biraz rahat.' },
        { move: '23...Rxf2', text: '24.Bd3 ile Beyazın a- ve c-piyonları ilerler (Motor: +1.30).' },
      ],
    },
    '24w': {
      text: '24.Re2: Beyaz kalesiyle ikinci yatayı savunmak ister ve kale değişimi önerir.',
      amac: 'Siyahın aktif kalesini değişip fil + dört piyonun kale + üç piyona karşı oynadığı bir oyun sonuna gitmek.',
      neden: 'Kale değişimi Beyaz için mantıklı: tek kale kalınca Siyahın iki yönlü baskısı azalır. 24.Re7? Rxa2 (−0.82) ve 24.Bc4 Rxa2 (−0.89) bir piyon kaybettirir.',
      diger: [
        { move: '24.Re7', text: 'Aktif görünür ama 24...Rxa2 ile piyon düşer (Motor: −0.82).' },
        { move: '24.Bc4', text: 'a2’yi bırakır (Motor: −0.89).' },
      ],
    },
    '24b': {
      text: '24...Rxe2: Siyah kaleleri değişir.',
      amac: 'Beyazın kalesini yok edip kendi kalesini yeniden ikinci yataya göndermek.',
      neden: 'Değişim kaçınılmaz değildi (24...Rbc8 da eşit), ama Siyahın kalesi tek başına filden daha güçlüdür ve f2/a2’ye yeniden saldırabilir. 24...Rc1 biraz daha zayıf (+0.16).',
      diger: [
        { move: '24...Rbc8', text: 'Kaleleri tutmak; 25.a4 Rxe2 26.Bxe2 ile aynı yere çıkabilir (Motor: 0.00).' },
        { move: '24...Rc1', text: 'Değişimden kaçmak (Motor: +0.16).' },
      ],
    },
    '25w': {
      text: '25.Bxe2: Fille geri almak zorunlu.',
      amac: 'Kale eksiğini önlemek; fil e2’den c4’e veya f3’e gidebilir.',
      neden: 'Başka hamle bir kaleyi bedava bırakır (25.f4? Motor: −5.84).',
    },
    '25b': {
      text: '25...Rd8: Kale d-hattına gelir ve yeniden ikinci yataya yönelir.',
      amac: '...Rd2 ile f2 ve a2’ye saldırmak.',
      neden: 'Kale ikinci yataya yeniden girmek için en kısa yol. Bilanço: Siyahın kalesi Beyazın filine karşı, Beyazın a2-b3-f2-g2 piyonlarına karşı Siyahın f7-f6-h7 piyonları; motor eşit (−0.07).',
      diger: [
        { move: '25...Kf8', text: 'Önce şahı merkeze getirmek (Motor: 0.00).' },
        { move: '25...Re8', text: 'Fili kovalamak ve ...Re1-a1 (Motor: 0.00).' },
      ],
    },
    '26w': {
      text: '26.a4: a-piyonu ilerler; Beyaz vezir kanadında geçer piyon yaratmaya bakar.',
      amac: 'a2’yi ikinci yataydan çıkarıp kale saldırısından korumak ve a5-a6 ile Siyah kalesini bağlamak.',
      neden: 'Piyon a2’de kaldığı sürece ...Rd2 ile saldırıya açıktı. 26.Bc4 (−0.09) aynı düzeyde; 26.Bf3? Rd2 ise Beyazı pasifleştirir (−0.93).',
      diger: [
        { move: '26.Bc4', text: 'Önce fili aktifleştirmek; f7’ye baskı (Motor: −0.09).' },
        { move: '26.Bf3', text: '26...Rd2 ile f2 baskı altında (Motor: −0.93).' },
      ],
    },
    '26b': {
      text: '26...Rd2: Kale yeniden ikinci yataya girer.',
      amac: 'f2’ye ve Beyaz filine saldırıp Beyazı pasif savunmaya itmek.',
      neden: 'Planlı ve tutarlı: kale ikinci yatayda en etkili haldedir. 26...Kf8 da eşit (0.00); 26...Rd5 daha az aktif (+0.12).',
      diger: [
        { move: '26...Kf8', text: 'Önce şahı merkeze getirmek (Motor: 0.00).' },
        { move: '26...Rd5', text: '...Rh5+ fikirleri (Motor: +0.12).' },
      ],
    },
    '27w': {
      text: '27.Bc4: Fil c4’e gelir ve f7 piyonuna bakar.',
      amac: 'Fili aktif kareye almak ve ...Rxf2’ye karşı a5 ile karşı oyunu hazırlamak.',
      neden: 'Fil e2’de saldırıya açıktı. 27.Bf3 Rb2 (−0.81) ve 27.Bb5 Rxf2 (−1.14) daha kötü.',
      diger: [
        { move: '27.Bf3', text: '27...Rb2 ile b3 baskı altında (Motor: −0.81).' },
        { move: '27.Bb5', text: '27...Rxf2 ile f-piyonu kaybedilir (Motor: −1.14).' },
      ],
    },
    '27b': {
      text: '27...Ra2: Kale a2’de a4 piyonunu durdurur ve f2’ye ikinci yataydan bakmaya devam eder.',
      amac: 'Beyazın vezir kanadı piyonlarını kontrol altında tutarken f2’yi bağlı tutmak.',
      neden: 'Byrne bu hamleye “!” veriyor. Motor 27...Rxf2’yi de oynanabilir buluyor (28.a5 Rb2 ile −0.10); ancak o zaman a-piyonu hızla ilerler ve Siyah kalesi tamamen pasif kalır. ...Ra2 ile Fischer kazanma şansını riske atmadan korudu.',
      diger: [
        { move: '27...Rxf2', text: '28.a5 Rb2 29.a6 ile a-piyonu tehlikeli; motor yine eşit (−0.10).' },
        { move: '27...Kf8', text: 'Önce şah (Motor: 0.00).' },
      ],
    },
    '28w': {
      text: '28.Kg3: Şah g3’te f2’yi korur.',
      amac: 'Şahı oyuna sokmak ve f2’yi kalıcı olarak savunmak.',
      neden: 'Oyun sonunda şah aktif bir taştır. 28.f4 ve 28.f3 de aynı değerde (−0.02): Beyaz piyonları f4-g3 zincirine getirirse Siyahın girecek karesi kalmaz.',
      diger: [
        { move: '28.f4', text: 'f-piyonunu ikinci yataydan çıkarmak (Motor: −0.02).' },
        { move: '28.f3', text: 'Benzer fikir, şah f2’ye gelebilir (Motor: −0.02).' },
      ],
    },
    '28b': {
      text: '28...Kf8: Siyah şahını merkeze getirmeye başlar.',
      amac: 'Şahı e7-d6-e5 yoluyla aktifleştirmek.',
      neden: 'Oyun sonunda şahı ilk merkeze getiren genellikle üstünlük kurar. 28...Kg7 ve 28...f5 de eşit (yaklaşık −0.1).',
      diger: [
        { move: '28...Kg7', text: 'Şahı g6-g5 yönüne götürmek (Motor: −0.12).' },
        { move: '28...f5', text: 'f-piyonunu ilerletmek (Motor: −0.10).' },
      ],
    },
    '29w': {
      text: '29.Kf3: Beyaz şahı da merkeze yaklaşır.',
      amac: 'Şahı e3’e getirip Siyah şahının d-e hatlarına ilerleyişini karşılamak.',
      neden: 'Motor bu hamleyi en iyi buluyor (−0.12). 29.f4 de iyi (−0.14).',
      diger: [
        { move: '29.f4', text: 'Piyon zincirini kurmak (Motor: −0.14).' },
        { move: '29.Bd3', text: 'Fil h7’ye bakar (Motor: −0.18).' },
      ],
    },
    '29b': {
      text: '29...Ke7: Şah e7’de; d6-e5 üzerinden ilerleyecek.',
      amac: 'Şahı merkeze getirip Beyaz şahını karşılamak.',
      neden: 'Planın doğal devamı. 29...f5 de eşit (−0.05).',
      diger: [
        { move: '29...f5', text: 'f4’ü kontrol etmek (Motor: −0.05).' },
        { move: '29...h6', text: 'Hazırlık hamlesi (Motor: 0.00).' },
      ],
    },
    '30w': {
      text: '30.g4?: Beyaz g4 ile şah kanadında yer açmak ister ama piyon yapısını zayıflatır.',
      amac: 'Siyahın ...f5 ilerleyişini önlemek ve şah kanadında alan kazanmak.',
      neden: 'Byrne bu hamleye “??” veriyor ve “maç yorgunluğu” diyor: Siyaha ilk kez bir geçer piyon (ve zayıf f5 hedefi) yaratma şansı verdi. 30...f5! sonrası 31.gxf5 f6 ile f5 tek kalır; 31.g5 de Siyaha geçer piyon kazandırırdı. Byrne’e göre 30.Kg3 ve f4 ile Siyah kazanamazdı. Motor: 30.g3 −0.01, 30.Kg3 −0.04; 30.g4 −0.45.',
      diger: [
        { move: '30.g3', text: 'Piyonları kompakt tutmak; ...f5’e Ke3 ile karşılık (Motor: −0.01).' },
        { move: '30.Kg3', text: 'Byrne’in önerisi: şah g3’e, sonra f4 (Motor: −0.04).' },
      ],
    },
    '30b': {
      text: '30...f5!: Siyah g4 piyonuna hemen saldırır.',
      amac: 'g4 piyonunu değiştirip Beyazın piyonlarını f2 ve f5’te tek bırakmak.',
      neden: 'Byrne “!” veriyor. 30...h6 (−0.16) daha yavaş olurdu; ...f5 hemen yapıyı bozar. 31.Kf4 fxg4 32.Kxg4 Rxf2 kötüdür; Beyaz almak zorunda kalır.',
      diger: [
        { move: '30...h6', text: 'g5’i önlemek (Motor: −0.16), ama Beyaz Kg3 ile toparlanır.' },
        { move: '30...Rb2', text: 'b3’e saldırmak (Motor: −0.11).' },
      ],
    },
    '31w': {
      text: '31.gxf5: Beyaz alır; f5’te tek kalmış bir piyon oluşur.',
      amac: 'Materyali korumak.',
      neden: 'Diğer hamleler daha kötü: 31.Kg3? fxg4 32.Kxg4 Rxf2 (−1.67) veya 31.Kf4? fxg4 (−1.94) Siyaha piyon kazandırır.',
      diger: [
        { move: '31.Kg3', text: '31...fxg4 32.Kxg4 Rxf2 ile piyon düşer (Motor: −1.67).' },
      ],
    },
    '31b': {
      text: '31...f6: Piyon f6’da kalır; f5 piyonu sabit bir hedef olur.',
      amac: 'f5’i ...Ke5-f4 veya ...Kd6-e5 ile almak; e5 karesini kontrol altında tutmak.',
      neden: 'f7’deki piyon ilerlerse f5’i hareketsiz bırakır ve e5’i şah için güvenli kılar. Motor 31...Ra1 ve 31...Ra3’ü biraz daha iyi buluyor (yaklaşık −0.55): önce kaleyi aktifleştirip f6’yı sonraya bırakmak.',
      diger: [
        { move: '31...Ra1', text: 'Kaleyi aktifleştirmek; 32.Kg4 f6 (Motor: −0.57).' },
        { move: '31...Kf6', text: 'Şahla f5’e doğrudan yürümek (Motor: −0.52).' },
      ],
    },
    '32w': {
      text: '32.Bg8: Fil g8’den h7 piyonuna saldırır.',
      amac: 'h7’yi alarak veya Siyahı h6’ya zorlayarak karşı oyun yaratmak.',
      neden: 'Fil aktif kalmalı; motor bu hamleyi en iyi buluyor (−0.18). 32.Kg3 (−0.25) ve 32.Kg2 (−0.33) de mümkün.',
      diger: [
        { move: '32.Kg3', text: 'Şahı f4’e hazırlamak (Motor: −0.25).' },
        { move: '32.Kg2', text: 'f2’yi korumak (Motor: −0.33).' },
      ],
    },
    '32b': {
      text: '32...h6: h-piyonu kurtulur.',
      amac: 'h7’yi korumak ve g5 karesini kontrol etmek.',
      neden: 'h7 düşerse Siyahın tek şah kanadı piyonu f6 kalır. Motor 32...Kf8 (fili kovmak; −0.45) ile daha aktif bir yol görüyor.',
      diger: [
        { move: '32...Kf8', text: 'Fili kovar: 33.Be6 Ke8 (Motor: −0.45).' },
        { move: '32...Rb2', text: 'b3’e saldırmak (Motor: −0.32).' },
      ],
    },
    '33w': {
      text: '33.Kg3: Şah g3’e gelir.',
      amac: 'Şahı f4’e ve g4’e yakın tutup f5’i dolaylı korumak.',
      neden: 'Motor bu hamleyi en iyi buluyor (−0.18). Bu şah konumu doğrudur; sonraki 34.Kf3? bunu bozacaktır.',
      diger: [
        { move: '33.Be6', text: 'Fili f5’in koruyucusu yapmak (Motor: −0.19).' },
        { move: '33.Kg2', text: 'Benzer (Motor: −0.19).' },
      ],
    },
    '33b': {
      text: '33...Kd6: Şah d6’dan e5’e yönelir.',
      amac: 'Şahı e5 üzerinden f4’e götürmek.',
      neden: 'Planın devamı. 33...Ra1 (−0.24) aynı değerde.',
      diger: [
        { move: '33...Ra1', text: 'Kaleyi a1’e (Motor: −0.24).' },
        { move: '33...Kd7', text: 'Şah yavaşça (Motor: −0.21).' },
      ],
    },
    '34w': {
      text: '34.Kf3?: Ciddi hata. Şah g3’ten f3’e geçer ve Siyah şahına e5-f4 yolunu açar.',
      amac: 'Şahı merkeze yaklaştırmak ve e4/e3 karelerini tutmak.',
      neden: 'Byrne bu hamleye “??” veriyor ve Spasski’nin “sersemlemiş bir adam gibi” oynadığını yazıyor: 34.f4! şahın e5 ve g5’e girişini piyonla kapatır ve beraberliği korur. Motor: 34.f4 −0.10 (derinlik 20), 34.Kf3 −1.11. Kf3 sonrası ...Ra1 ile kale Rg1 tehdidi kurar ve şah g2’ye geri dönmek zorunda kalır.',
      diger: [
        { move: '34.f4', text: 'Byrne’in beraberlik hamlesi: 34...Kc7 35.Bc4 ile Siyah şahı içeri giremez (Motor: −0.10).' },
        { move: '34.Be6', text: 'f5’i korumak (Motor: −0.24).' },
      ],
    },
    '34b': {
      text: '34...Ra1!: Kale a1’e çekilir; ...Rg1 ile Beyaz şahını arka yataydan rahatsız edecek.',
      amac: 'Beyaz şahını g2’ye geri itmek ve Siyah şahına ...Ke5-f4 için zaman kazanmak.',
      neden: 'Motor bu hamleyi açık farkla en iyi buluyor (−1.21); 34...Ke5 ise 35.Be6 ile Beyazın toparlanmasına izin verir (−0.27). Fischer hemen tempo kazanan hamleyi buldu.',
      diger: [
        { move: '34...Ke5', text: '35.Be6 h5 36.Kg3 ile Beyaz toparlanır (Motor: −0.27).' },
        { move: '34...h5', text: 'Beyaz Kg3 ile kapanır (Motor: −0.24).' },
      ],
    },
    '35w': {
      text: '35.Kg2: Şah g2’ye gelir.',
      amac: '...Rg1 ve ...Rf1 tehditlerini önlemek.',
      neden: 'Diğer hamleler daha kötü: 35.Bf7 Rg1 36.a5 Rg7 (−1.57) veya 35.Kf4 Rg1 (−1.79). Beyaz bir tempo kaybetmiş oldu.',
      diger: [
        { move: '35.Bf7', text: '35...Rg1 ile kale g7’ye gelir (Motor: −1.57).' },
        { move: '35.Kf4', text: '35...Rg1 ile Beyaz şahı kesilir (Motor: −1.79).' },
      ],
    },
    '35b': {
      text: '35...Ke5!: Şah merkezden f4’e doğru ilerler.',
      amac: 'Şahı f4’e sokup f5 ve f2 piyonlarına saldırmak.',
      neden: 'Beyaz şahı g2’de kaldığı için f4 boştur. Motor: 35...Ke5 −0.89, 35...Re1 −0.25. Fischer aktif şahla kazanma şansını hemen kullandı.',
      diger: [
        { move: '35...Re1', text: 'Kale e-hattını alır (Motor: −0.25).' },
        { move: '35...Rc1', text: 'Benzer (Motor: −0.25).' },
      ],
    },
    '36w': {
      text: '36.Be6: Fil e6’da f5 piyonunu korur.',
      amac: 'f5’i korumak ve Siyah şahının f5’i almasını önlemek.',
      neden: 'Zorunlu sayılır: 36.Bc4? Kxf5 (−1.58) veya 36.Kf3 Kxf5 (−1.67) piyonu kaybettirir.',
      diger: [
        { move: '36.Bc4', text: '36...Kxf5 ile piyon düşer (Motor: −1.58).' },
        { move: '36.Kf3', text: '36...Kxf5 (Motor: −1.67).' },
      ],
    },
    '36b': {
      text: '36...Kf4: Şah f4’te; f5 ve f2 piyonlarına yaklaşır.',
      amac: 'Beyazı tamamen pasifleştirmek; ...Rb1-b2 ile f2’ye saldırmak.',
      neden: 'Motor: 36...Kf4 −0.89, 36...h5 −0.34. Şah f4’te hem f5’i hem f2’yi baskı altına alır.',
      diger: [
        { move: '36...h5', text: '37.Kg3 ile Beyaz direnir (Motor: −0.34).' },
        { move: '36...Re1', text: 'Kaleyi e-hattına (Motor: −0.33).' },
      ],
    },
    '37w': {
      text: '37.Bd7: Fil d7’den f5’i korumaya devam eder.',
      amac: 'f5’i korumak ve şahı g2’de tutmak.',
      neden: 'Motor 37.Kh3 ile aynı düzeyi görüyor (−1.40); 37.Bc8? Ra3 (−1.84) daha kötü.',
      diger: [
        { move: '37.Kh3', text: '37...Rh1+ 38.Kg2 Rd1 (Motor: −1.40).' },
        { move: '37.Bc8', text: '37...Ra3 ile b3 baskı altında (Motor: −1.84).' },
      ],
    },
    '37b': {
      text: '37...Rb1: Kale b1’den b3 piyonuna yönelir.',
      amac: 'Fili b3’ü korumaya zorlamak ve f5’in koruyuculuğundan uzaklaştırmak.',
      neden: 'İki zayıflık ilkesi: Siyah f5 ve b3’e aynı anda saldırır. Motor: 37...Rb1 −1.37, 37...Rd1 −1.18.',
      diger: [
        { move: '37...Rd1', text: '38.Bc6 Rd6 ile fil kovalanır (Motor: −1.18).' },
        { move: '37...Ra3', text: '38.b4 ile Beyaz kurtulur (Motor: −0.77).' },
      ],
    },
    '38w': {
      text: '38.Be6: Fil e6’ya geri döner.',
      amac: 'f5’i korumak.',
      neden: 'b3 düşse bile f5’i korumak öncelikli. 38.Kh3? Rxb3+ (−2.15) ve 38.a5? Rxb3 (−2.92) daha kötü.',
      diger: [
        { move: '38.Kh3', text: '38...Rxb3+ şahla (Motor: −2.15).' },
        { move: '38.a5', text: '38...Rxb3 39.a6 Rd3 (Motor: −2.92).' },
      ],
    },
    '38b': {
      text: '38...Rb2: Kale b2’den f2 piyonuna saldırır.',
      amac: 'f2’ye baskı yapıp Beyaz şahını savunmaya bağlamak.',
      neden: 'Motor 38...Rb2 ve 38...Rd1’i eşit buluyor (−1.45). Kale ikinci yatayda en güçlü halinde.',
      diger: [
        { move: '38...Rd1', text: '39.Bc4 Ra1 (Motor: −1.45).' },
        { move: '38...Ra1', text: 'Kale a-hattına dönüş (Motor: −1.31).' },
      ],
    },
    '39w': {
      text: '39.Bc4: Fil c4’e gelir.',
      amac: 'b3’ü korumak ve fili aktif tutmak.',
      neden: 'Motor 39.Bf7 veya 39.Bd5’i öneriyor (−1.59); 39.Bc4 sonrası değerlendirme −1.94’e düşer, çünkü f5 bir süreliğine korumasız kalır.',
      diger: [
        { move: '39.Bd5', text: '39...Ra2 40.Bc6 Kxf5 (Motor: −1.59).' },
        { move: '39.Bf7', text: '39...Kg4 40.Bd5 Ra2 (Motor: −1.59).' },
      ],
    },
    '39b': {
      text: '39...Ra2: Kale a2’ye döner.',
      amac: 'a4 piyonunu baskı altında tutmak ve f2’ye ikinci yataydan bakmaya devam etmek.',
      neden: 'Motor bu hamleyi açık farkla en iyi buluyor (−1.95); 39...Kxf5? 40.a5 (−0.42) a-piyonunu çok tehlikeli yapar.',
      diger: [
        { move: '39...Kxf5', text: '40.a5 ile a-piyonu ilerler (Motor: −0.42).' },
        { move: '39...h5', text: '40.a5 (Motor: −0.42).' },
      ],
    },
    '40w': {
      text: '40.Be6: Fil yine e6’ya döner.',
      amac: 'f5’i korumak ve zaman kontrolüne ulaşmak.',
      neden: 'Motor 40.Kh3’ü de aynı düzeyde görüyor (−1.50). Spasski bu hamleyle 40 hamle kontrolünü geçti.',
      diger: [
        { move: '40.Kh3', text: '40...Kxf5 41.Kg3 Ke5 (Motor: −1.50).' },
        { move: '40.Bd5', text: '40...Ra3 (Motor: −1.60).' },
      ],
    },
    '40b': {
      text: '40...h5: Piyon ilerler ve şahın g4 karesini destekler.',
      amac: '...Kg4 ve ...h4 ile şah kanadında geçer piyon yaratmak.',
      neden: 'Motor 40...Kg4’ü biraz daha iyi buluyor (−1.50), ama 40...h5 de güçlü (−1.22). Bu hamleden sonra oyun ertelendi.',
      diger: [
        { move: '40...Kg4', text: '41.Bd5 Kxf5 (Motor: −1.50).' },
        { move: '40...Rd2', text: '41.Bc4 Ra2 (Motor: −1.50).' },
      ],
    },
    '41w': {
      text: '41.Bd7: Spasski’nin zarfa koyduğu hamle. Oyun bu noktada ertelendi; Spasski devam etmeden telefonla terk etti.',
      amac: 'f5’i korumak.',
      neden: 'Byrne’e göre Siyah 41...Kg4 ile kazanır; 41.Kh3 de Beyazı kurtarmazdı. Motor 41.Kh3’ü daha dirençli buluyor (−1.01, derinlik 20); 41.Bd7 sonrası değerlendirme −2.7’dir (41...h4 veya 41...Kg4).',
      diger: [
        { move: '41.Kh3', text: '41...Kg5 42.Bc4 Kxf5 (Motor: −1.01).' },
        { move: '41.Bd5', text: '41...Kxf5 (Motor: −1.80).' },
      ],
    },
  },
  sources: [
    { title: 'ChessBase: Bobby Fischer in Iceland – 45 years ago (13)', url: 'https://en.chessbase.com/post/bobby-fischer-in-iceland-45-years-ago-15' },
    { title: 'ChessBase: 50 years ago Bobby Fischer is the 11th world champion', url: 'https://en.chessbase.com/post/50-years-ago-bobby-fischer-is-the-11th-world-champion' },
    { title: 'Chess.com: Bobby Fischer Wins Match Of The Century', url: 'https://www.chess.com/article/view/50-year-anniversary-fischer-spassky-game-21' },
    { title: 'Chess.com: Fischer-Spassky 1972 Highlights', url: 'https://www.chess.com/article/fischer-spassky-1972-highlights' },
    { title: 'Wikipedia: World Chess Championship 1972', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1972' },
    { title: 'Exeter Chess Club: Taimanov’s Legacy', url: 'https://www.exeterchessclub.org.uk/content/taimanovs-legacy' },
  ],
  exercises: [
    { id: 'sfi-1', kind: 'tekrar', plan: false, title: 'Bxd5 ve ...Bxh2+ ara hamlesi',
      source: 'Spasski – Fischer, 1972, 21. oyun (19. hamle)',
      fen: '1r1r2k1/5p1p/p2bbp2/3N4/2p5/1P6/P1P1BPPP/3RR1K1 b - - 0 19',
      prompt: 'Spasski 19.Nxd5 ile d5 piyonunu aldı. Siyahın e6 fili ve d6 fili var; d8 kalesi d-hattında. Siyah materyali nasıl geri kazanır?',
      hint: 'Önce atı alın. Kale d5’ten geri alınca d6 fili iki kalenin arasında kalır: fil şah çekerek çekilebilir mi?',
      line: ['Bxd5', 'Rxd5', 'Bxh2+'],
      accept: { 2: ['cxb3'] },
      explanation: '**19...Bxd5! 20.Rxd5 Bxh2+!** Fil şah çekerek d-hattından çekilir; 21.Kxh2 Rxd5 ile Siyah kaleyi geri alır. Motor: 19...Bxd5 0.0, sonraki en iyi 19...Bxh2+ +1.2. 20. hamlede motor ...Bxh2+ (0.0) ile ...cxb3’ü (+0.1) eşit görüyor; 20...Bb4? ise +1.8.',
      link: 'İki kale arasında kalan fil, şah çekerek çekilince arkadaki kale öndeki kaleyi alır.' },
    { id: 'sfi-2', kind: 'tekrar', plan: true, title: 'Şah f4’e',
      source: 'Spasski – Fischer, 1972, 21. oyun (35. hamle)',
      fen: '6B1/8/3k1p1p/5P2/P7/1P6/5PK1/r7 b - - 5 35',
      prompt: 'Kale-fil oyun sonu. Beyazın f5 piyonu tek kalmış; fil g8’de, şah g2’de. Siyah planını nasıl ilerletir?',
      hint: 'Siyah şahı merkezden f5 piyonuna ve Beyaz şahına yaklaşabilir.',
      line: ['Ke5', 'Be6', 'Kf4'],
      explanation: '**35...Ke5! 36.Be6 Kf4** Şah merkezden f4’e girer; f5 ve f2 piyonları baskı altında. Motor: 35...Ke5 −1.2, sonraki en iyi 35...Ra3 −0.4; 36...Kf4 −1.0, sonraki en iyi −0.4. Bu bir plan hamlesidir: oyun sonunda aktif şah belirleyicidir.',
      link: '34.Kf3? hatası Siyah şahına bu yolu açtı; Fischer hemen kullandı.' },
    { id: 'sfi-3', kind: 'transfer', plan: false, title: 'Fil şah çekerek çekilir',
      source: 'Bagirov – Polugayevski, SSCB Şampiyonası, Bakü 1961 (35. hamle)',
      fen: 'r1r3k1/2b2ppp/2R1p3/P7/3Bp3/8/R4PPP/6K1 b - - 0 35',
      prompt: 'Beyazın kalesi c6’da. Siyahın c8 kalesi ile c6 kalesi arasında c7 fili duruyor. Hamle Siyahta.',
      hint: 'Fil c-hattından çekilirse c8 kalesi c6’yı alabilir. Çekilirken şah çekebilir mi?',
      line: ['Bxh2+', 'Kxh2', 'Rxc6'],
      explanation: '**35...Bxh2+! 36.Kxh2 Rxc6** Fil şah çekerek c-hattından çekilir ve bir piyon alır; ardından kale c6’yı alır ve Siyah bir kale fazla kalır. Motor: Bxh2+ −4.8, sonraki en iyi hamle −0.2.',
      link: 'Fischer 20...Bxh2+ ile d-hattında aynı şeyi yaptı: iki kale arasındaki fil şah çekerek çekildi.' },
    { id: 'sfi-4', kind: 'transfer', plan: false, title: 'Kale ikinci yataya',
      source: 'Fichtl – Stein, Kislovodsk 1964 (31. hamle)',
      fen: '2r5/4kppp/p7/1p2p3/4P3/Pb1P3P/1P1KN1P1/1R6 b - - 0 31',
      prompt: 'Siyahın kalesi açık c-hattında, fili b3’te. Beyazın şahı d2’de, atı e2’de. Siyah kalesini nasıl aktifleştirir?',
      hint: 'Kale ikinci yataya şahla girerse hangi piyonlara saldırır?',
      line: ['Rc2+'],
      explanation: '**31...Rc2+!** Kale şah çekerek ikinci yataya girer ve b2 piyonuna saldırır; 32.Kd1? Rxb2+ sonrası e2 atı da düşer. Motor: Rc2+ −2.3, sonraki en iyi hamle 0.0.',
      link: 'Fischer de 22...Rd2 ve 23...Rxc2 ile kalesini ikinci yataya soktu ve Beyazın piyonlarına arkadan saldırdı.' },
  ],
};
