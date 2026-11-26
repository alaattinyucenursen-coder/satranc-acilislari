// Sergey Klimenko – Vadim Milov, Ukrayna Takımlar Şampiyonası, Simferopol 1991. Kaynak: PgnMentor (Milov.pgn).
export default {
  id: 'klimenko-milov-1991',
  theme: 'Vezirsiz oyunda c2 çatalı: ...Nb4 ve ...Ng4!',
  white: 'Sergey Klimenko', black: 'Vadim Milov',
  whiteShort: 'Klimenko', blackShort: 'Milov',
  event: 'Ukrayna Takımlar Şampiyonası', site: 'Simferopol', year: 1991, eco: 'B23',
  variation: 'Sicilya Savunması, Kapalı sistem: 2.Nc3 e6 3.g3 d5 4.Bg2', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. Bg2 Nf6 5. d3 dxe4 6. dxe4 Qxd1+ 7. Nxd1 Nc6 8. f4 Bd7 9. Bd2 Nb4 10. Ne3 Ng4 11. Nxg4 Nxc2+ 12. Kd1 Nxa1 13. Kc1 Ba4 14. Ne3 Rd8 15. Nf3 Be7 16. Re1 Rd3 17. Bf1 Rxe3 18. Rxe3 Nc2 19. Rc3 Nb4 20. Ra3 Bc6 21. Rxa7 O-O 22. Ne5 Bxe4 23. a3 f6 24. Nc4 Nc2 25. Na5 Nd4 26. Nxb7 Nb3+ 27. Kd1 Rb8 28. Na5 Nxd2 29. Kxd2 Bd8 30. Nc4 f5 31. Bd3 Bd5 32. Kc2 Bf6 33. b3 Bd4 34. h3 h5 35. Nd2 Bf2 36. Rd7 Ra8 37. Be2 Bxg3 38. Rc7 Bxf4 39. Nc4 h4 40. Nb6 Be4+ 41. Kc3 Rb8 0-1`,

  summary: 'Oyun 41 hamlede **Siyahın (Vadim Milov) galibiyetiyle** bitti (0-1). Kapalı Sicilya’nın 2.Nc3 e6 3.g3 d5 kolunda (365Chess bu yapıyı “Korçnoy varyantı” olarak sınıflar) Milov 5...dxe4 6.dxe4 Qxd1+ ile vezirleri erkenden değişti. Vezirsiz oyunda Beyaz iki küçük gevşeklik yaptı: 8.f4 ve 9.Bd2 ile c3 piyonunu oynamadı, böylece Siyahın c6 atına **b4 karesini** bıraktı ve c2 piyonunu yalnız bıraktı. Milov 9...Nb4 ile c2’ye baktı; Beyaz 10.Ne3 ile c2’yi savununca **10...Ng4!** ile tam bu savunucuya saldırdı. 11.Nxg4 Nxc2+ çatalı a1 kalesini kazandırdı ve Siyah bir kalite öne geçti (Motor: −0.7). Ama a1’e giren at orada hapis kaldı: c2’yi şah, b3’ü a2 piyonu tutuyordu. Klimenko 16.Re1 ve 17.Bf1 ile atı yakalamaya hazırlanınca Milov doğru anda **17...Rxe3!** ile kaliteyi geri verdi ve 18...Nc2 ile atını kurtardı. Oyun dengelendi (Motor: 0.0); 28...Nxd2 sonrası Siyah iki fil, Beyaz at+fil ile kaldı. Beyaz a-piyonuyla küçük bir üstünlük yakalamıştı (33.a4 ile Motor: +0.7), ama bu fırsatı 33.b3 ve 34.h3 ile kaçırdı, sonra **35.Nd2?** ile c4 karesini boşaltıp 35...c4! taktiğine izin verdi. Milov bunu görmedi, fakat 37.Be2? sonrası filleri g3 ve f4 piyonlarını topladı; 38...Bxf4 hem d2 atını hem c7 kalesini vurdu. Karşılıklı hatalardan sonra 41...Rb8 ile hem b6 atı hem c7 kalesi tehdit altında kalınca Beyaz terk etti.',
  intro: '**1.e4 c5 2.Nc3** Kapalı Sicilya’nın başlangıcıdır: Beyaz erken d4 oynamaz, g3-Bg2, d3 ve f4 ile şah kanadında yer kaplamayı tercih eder. Smislov ve Spasski bu sistemle tanınmış, rakiplerini yavaş bir şah kanadı baskısıyla yenmişlerdir. Siyahın 2...e6 cevabı esnektir: hem açık Sicilya’ya (Nf3 ve d4) geçişe hazırdır hem de **...d5** kırılmasını hazırlar. Beyaz 3.g3 oynayınca Siyah 3...d5! ile Bg2 gelmeden merkezde hak iddia eder. 365Chess veri tabanında bu konumda en sık oynanan hamle 4.exd5’tir (1107 oyun), 4.Bg2 ise 431 oyunla ikinci sıradadır; chess.com’daki iki teori yazısı da (Mr Perry’nin blogu ve “Sicilian-phobia” makalesi) Beyaza 4.exd5’i önerir. 4.Bg2 sonrası Siyahın üç yolu vardır: **4...d4** ile alan kazanıp c3 atını kovalamak (motorun ilk tercihi), **4...dxe4** ile merkezi hemen açmak ya da bu oyundaki gibi **4...Nf6** ile önce gelişmek. Milov 5.d3 sonrası **5...dxe4 6.dxe4 Qxd1+** ile vezirleri değişti: d-hattı açıldı, Beyazın atı d1’e geri döndü ve ortaya, Beyazın c2 piyonunun ve geç gelişen vezir kanadının zayıf kaldığı vezirsiz bir orta oyun çıktı. O sırada 18-19 yaşında olan Milov (1972 doğumlu; 1993’te GM oldu, sonraki yıllarda İsviçre adına oynayıp 2705 Elo’ya kadar yükseldi) bu sakin konumda taktik bir fırsatı nasıl yarattığını gösteriyor.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Kapalı Sicilya kuruluşu:** g3-Bg2, d3 ve f4 ile şah kanadında alan almak, ileride e4-e5 ile Siyahın f6 atını kovalamak. Vezirler değişince bu planın saldırı değeri azaldı; f4 piyonu daha sonra g3 ile birlikte hedef oldu.',
      '**c3 ile b4-d4 karelerini kapatmak:** Vezirsiz oyunda en önemli konumsal görev buydu. Motor 8.c3 veya 8.Ne3’ü öneriyordu; 8.f4 ve 9.Bd2 ile c3 gecikti ve Siyahın atı b4’e yerleşip c2’ye çatal tehdidi kurdu.',
      '**a1’deki atı yakalamak:** Kalite kaybından sonra Beyazın kurtuluşu, köşedeki atı kazanmaktı: Kc1 ile c2’yi tutmak, Ne3 ile c2’yi ikinci kez savunmak, Re1 ile e4’ü koruyup Kb1-Kxa1’i hazırlamak, Bf1 ile d3 kalesine saldırmak.',
      '**Kale ile yedinci yatay:** Kaliteyi geri aldıktan sonra Ra3xa7 ile Siyahın vezir kanadı piyonlarına yüklenmek, sonra Na5xb7 ile b-piyonunu da toplamak.',
      '**Dış geçer piyon:** Oyun sonunda a- ve b-piyonları Siyahın tek c5 piyonuna karşı çoğunluktaydı. Doğru plan a3-a4-a5 ile geçer piyon yaratmaktı (33.a4 Motor: +0.7); 33.b3 ve 34.h3 bu tempoyu kaybettirdi.',
      '**c4 atını yerinde tutmak:** c4’teki at Siyahın ...c4 kırılmasını engelliyor ve d4-a7 çaprazını kapalı tutuyordu. 35.Nd2? bu bağlantıyı bozdu.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**Merkeze erken karşılık:** 2...e6 ve 3...d5 ile Bg2 yerleşmeden merkezde hak iddia etmek; 5...dxe4 ve 6...Qxd1+ ile vezirleri değişip Beyazın şah kanadı saldırı planlarını baştan söndürmek.',
      '**Atı b4’e getirmek:** ...Nc6-b4 ile c2 ve a2’ye baskı; vezirsiz oyunda c2 karesi şah ile a1 kalesine çatal karesidir.',
      '**Savunucuyu saptırmak:** c2’yi koruyan e3 atına **10...Ng4!** ile saldırmak. Beyaz atı alırsa çatal, almazsa piyon kaybı (11.Rc1 Nxe3 12.Bxe3 Nxa2).',
      '**Köşedeki atı kurtarmak:** ...Ba4 ile c2 ve b3 kaçış karelerini desteklemek, ...Rd8-d3 ile c2’nin ikinci savunucusu e3 atına saldırmak ve gerektiğinde kaliteyi (17...Rxe3) geri vermek.',
      '**Kaybedilen piyonu geri almak:** Rxa7’ye karşı ...Bc6 ve ...Bxe4 ile merkez piyonunu almak; ...f6 ile e5 atını kovalamak.',
      '**Fil çiftini kullanmak:** ...Nxd2 ile iki file kavuşmak, ...f5 ile piyonları beyaz karelere koyup e4-d5 fillerine sağlam bir yer açmak, sonra kara kareli fil ile ...Bf6-d4-f2 yolunu izleyip g3-f4 piyonlarına saldırmak.',
      '**Geçer piyon yaratmak:** g3 ve f4 düştükten sonra h-piyonunu (...h5-h4) ilerletmek ve taş kazanan çatalları kurmak (...Bxf4 ile c7 ve d2’ye çift saldırı).',
    ] },
  },
  critical: [
    { move: '9w', title: '9.Bd2: c2 yalnız kalıyor', text: 'Beyaz filini geliştirir ama c3 piyonunu oynamaz. Motor 9.c3 veya 9.Ne3’ü öneriyordu (her ikisi Motor: +0.1); 9.Bd2 sonrası Motor −0.4. Sebep basit: 9...Nb4 artık doğrudan ...Nxc2+ çatalıyla tehdit ediyor, e1’deki şah c2’yi korumuyor. Beyaz 10.Ne3 ile savunmak zorunda kalacak ve bu da 10...Ng4!’ye zemin hazırlayacak. 10.Bxb4 cxb4 (Motor: −0.4) daha az kötüydü ama fil çiftini bırakmak anlamına geliyordu.' },
    { move: '10b', title: '10...Ng4! savunucuyu saptırmak', text: 'At, c2’nin tek savunucusu olan e3 atına saldırır. 11.Nxg4 alınırsa 11...Nxc2+ şah ile a1 kalesine çatal yapar; alınmazsa 11.Rc1 Nxe3 12.Bxe3 Nxa2 ile bir piyon düşer (Motor: −0.8). Motor 10...Ng4’ü −0.7 değerlendiriyor; sakin 10...Bc6 veya 10...Ba4 ise +0.2 civarında, yani bu tek hamle eşitliği Siyah lehine çeviriyor.' },
    { move: '13w', title: '13.Kc1: a1’deki at tuzakta', text: 'Siyah kaleyi kazandı ama a1’deki atın çıkış kareleri yok: c2 şah tarafından, b3 a2 piyonu tarafından tutuluyor. Beyaz Kb1 ve Kxa1 ile atı alabilirse maddi denge geri gelir. Bu yüzden Siyahın sonraki on hamlesi bu atı kurtarmak, Beyazınki ise onu yakalamak üzerine kurulu. Motor 13.Kc1’i tek iyi hamle görüyor (−0.75); 13.Ne3 −1.1, 13.Nf3? Ba4+ −1.5.' },
    { move: '15b', title: '15...Be7: kaçan fırsat', text: 'Milov gelişimi tamamladı ama atın kurtuluşunu erteledi. Motor 15...c4 (16.Kb1 Bc6 17.Bc3 Bxe4+ 18.Kxa1) veya 15...Bc6 ile Siyahı −0.5 civarında görüyordu; 15...Be7 sonrası 16.Re1! ile Beyaz e4’ü korudu ve Kb1-Kxa1 tehdidi gerçek oldu (Motor: −0.1). Burada Siyahın avantajı neredeyse tamamen eridi.' },
    { move: '17b', title: '17...Rxe3! kaliteyi geri vermek', text: '17.Bf1 d3 kalesine saldırınca Milov kaleyi geri çekmek yerine e3 atına verdi. Böylece c2’nin ikinci savunucusu ortadan kalktı ve 18...Nc2 ile at köşeden çıktı. Motor 17...Rxe3’ü tek hamle olarak görüyor (0.0); 17...c4 18.Bxd3 cxd3 +0.5, 17...Rd8 18.Kb1 ile at düşer (+1.2). 18.Bxe3 ile geri almak da Beyaz için kötüydü: 18...Nc2 hem e1 kalesine hem e3 filine çatal yapar (−1.5).' },
    { move: '18b', title: '18...Nc2! at kaçıyor', text: 'At a4 filinin desteğiyle c2’ye çıkar ve e3 kalesine saldırır; ardından b4 veya d4 karesine gider. Başka bir hamlede Beyaz Kb1 ile atı alır: Motor 18...Nc2 0.0, 18...Bf6 veya 18...f6 ise +2.7. Burada maddi denge kuruldu: iki tarafın da birer kale, iki fil ve bir atı var.' },
    { move: '35w', title: '35.Nd2? ve kaçan 35...c4!', text: 'Bu ana kadar Beyaz biraz daha iyiydi; doğru plan 35.a4! ile geçer piyonu yürütmekti (Motor: 0.0). At c4’ten çekilince Siyahın c5 piyonu yürüyebilir hâle geldi: **35...c4! 36.bxc4 Bxa7** ile d4 filinin a7’ye giden çaprazı açılır ve Siyah kaleyi kazanırdı (Motor: −3.2). Milov 35...Bf2 oynadı; bu da g3 piyonuna saldırıp avantajı korudu (−1.1).' },
    { move: '37w', title: '37.Be2? piyonlar düşüyor', text: '36...Ra8 ile Siyah avantajını geri vermişti; motor 37.Bxf5! Bxb3+ 38.Kxb3 exf5 39.Rd3 ile tam eşitlik görüyor (0.0). 37.Be2 h5’e baktı ama g3 korumasız kaldı: 37...Bxg3 ve 38...Bxf4 ile Siyahın fili iki piyon topladı, f4’teki fil c7 ve d2’ye çatal yaptı (Motor: −2.2, sonra −4.5).' },
    { move: '39w', title: 'Karşılıklı gözden kaçırılan kale', text: '38...Bxf4 sonrası c7 kalesi tehdit altındaydı. 39.Nc4? kaleyi korumadı (en iyisi 39.Rxc5 Rxa3, Motor: −4.3), 39...h4? de kaleyi almadı (39...Bxc7 Motor: −6.6). 40.Nb6 Be4+ 41.Kc3 Rb8 sonrası ise Beyaz hem b6 atını hem c7 kalesini kurtaramadı. Hataların 35–41. hamlelerde toplanması, klasik zaman kontrolünün 40. hamle olmasıyla ilgili olabilir; ama saat durumuyla ilgili bir kaynak bulamadık.' },
  ],
  lessons: [
    'Kapalı Sicilya’da 3.g3 d5 yapısında Siyah ...dxe4 ve ...Qxd1+ ile vezirleri değişip rahat bir oyun elde edebilir; vezirsiz oyunda Beyazın şah kanadı planları değerini yitirir, geç gelişen vezir kanadı ise zayıf kalır.',
    'Vezirsiz oyunda c2 (Siyah için c7) karesi şah ile a1 kalesine çatal karesidir. Beyazın burada c3 ile b4 ve d4 karelerini kapatması gerekiyordu; bir tek piyon hamlesinin gecikmesi kaliteye mal oldu.',
    'Bir taktiği engelleyen savunucuya saldırın: 10...Ng4! e3 atını ya almaya zorladı (çatal) ya da yerinde bırakıp başka bir şeyi (a2 piyonunu) kaybettirdi.',
    'Kazanılan malzemenin bedelini hesaplayın: a1’de sıkışan at bir süre Siyah için yük oldu. Doğru anda kaliteyi geri vermek (17...Rxe3) taşı tamamen kaybetmekten iyidir.',
    'Oyun sonunda dış geçer piyon çok değerlidir: Beyaz 33.a4 ile avantaj alabilirdi; yerine yavaş hamleler (33.b3, 34.h3) seçmek inisiyatifi rakibe verdi.',
    'Bir taşın görevini unutmayın: c4’teki at ...c4 piyon hamlesini ve d4-a7 çaprazının açılmasını engelliyordu. 35.Nd2? bu görevi bıraktı ve tek bir piyon hamlesi kaleyi tehdit eder hâle geldi.',
    'İki fil, sabit ve korumasız piyonlara (g3, f4) karşı çok güçlüdür; fil çifti olan taraf piyonları toplarken çoğu zaman çatallarla (38...Bxf4) taş da kazanır.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 0-1: Vadim Milov (Siyah) kazandı. 41...Rb8 sonrası Siyahın kalesi b6 atına, f4 fili de c7 kalesine saldırıyordu. Beyaz ikisini birden kurtaramıyordu: 42.Rc8+ Rxc8 43.Nxc8 sonrası bile Siyah bir taş öndedir ve h-piyonu da tehlikelidir (Motor: −5.4). Klimenko terk etti.' },
    { q: 'Siyahın avantajı ilk olarak nereden geldi?', a: 'Beyazın 8.f4 ve 9.Bd2 hamlelerinden: ikisi de c3 piyonunu ertelediği için Siyahın atı b4’e yerleşip c2’ye baktı. 10.Ne3 c2’yi korudu ama 10...Ng4! bu savunucuyu hedef aldı. 11.Nxg4 Nxc2+ 12.Kd1 Nxa1 ile Siyah bir kalite kazandı (Motor: −0.7/−0.8).' },
    { q: 'Siyah kalite önde olduğu hâlde neden avantajını koruyamadı?', a: 'Çünkü a1’deki at köşede hapisti; kazandığı kalitenin bir kısmını bu atın yakalanma tehlikesi siliyordu. 13...Ba4, 14...Rd8 ve özellikle 15...Be7 yavaş kaldı: motor 14...c4 veya 15...c4 ile atı kurtarmayı ve −0.5/−1.0 civarında avantaj tutmayı öneriyor. 16.Re1 ve 17.Bf1 sonrası Siyah kaliteyi geri vermek zorunda kaldı ve oyun dengelendi.' },
    { q: 'Milov neden 17...Rxe3 ile kaliteyi geri verdi?', a: '17.Bf1 d3 kalesine saldırıyordu ve kale çekilirse Beyaz Kb1-Kxa1 ile atı alacaktı (17...Rd8 18.Kb1, Motor: +1.2). 17...Rxe3 18.Rxe3 Nc2 ile c2’yi tutan at ortadan kalktı, Siyahın atı köşeden çıktı ve e3 kalesine saldırarak tempo kazandı. Böylece Siyah bir kale vermiş, ama bir at ve sağlıklı bir pozisyon kurtarmıştı (Motor: 0.0).' },
    { q: 'Beyaz 21.Rxa7 ile piyon kazandı; bu neden kalıcı olmadı?', a: 'Kale a7’ye giderken e4 piyonunun koruyucusu kalmamıştı: g2 fili f1’e çekilmiş, e1 kalesi e3’te değişmişti. 20...Bc6 bu yüzden e4’e baktı ve 22...Bxe4 ile piyon geri alındı. 22...Rb8? gibi bir hamle 23.Nxc6 ile taş kaybettirirdi (Motor: +2.7).' },
    { q: 'Oyun sonunda Beyazın elinde ne vardı ve nasıl kaçırdı?', a: 'Vezir kanadında a- ve b-piyonları Siyahın tek c5 piyonuna karşı çoğunluktaydı; bu, dış geçer piyon demekti. Motor 33.a4! (+0.7) ile a-piyonunu a5-a6’ya yürütmeyi öneriyor. Klimenko 33.b3 ve 34.h3 oynadı; Siyah ...Bd4 ve ...h5 ile karşı oyun kurdu, değerlendirme sıfıra indi. 35.Nd2? ise kaybettiren hamle oldu.' },
    { q: '35...c4! neden bu kadar güçlü olurdu?', a: 'd4’teki Siyah fil a7 kalesine bakıyordu ama aradaki c5 piyonu çaprazı kapatıyordu. 35.Nd2 sonrası c4 karesi boşaldı; 35...c4 hem d3 filine saldırır hem de 36.bxc4 Bxa7 ile çaprazı açarak kaleyi kazanır (Motor: −3.2). 36.Bxc4 de 36...Bxc4 37.Nxc4 Bxa7 ile aynı sonuca gider.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'İki yerde: 35.a4 ile (Motor: 0.0) ve 36...Ra8 sonrası 37.Bxf5! ile. İkinci yolda 37...exf5? 38.Rxd5 ile Beyaz fili geri alır ve piyon önde kalır; Siyah 37...Bxb3+ 38.Kxb3 exf5 39.Rd3 ile eşitliğe razı olmalıydı. 37.Be2? g3’ü korumasız bıraktı ve sonrasında Beyazın konumu −2 ile −6 arasında seyretti.' },
    { q: 'Siyahın oyun sonu planı neydi?', a: 'Fil çiftini kullanmak. 30...f5 ile piyonlarını beyaz karelere koydu; beyaz kareli fil e4-d5’te sağlam durdu, kara kareli fil ise f6-d4-f2 yoluyla g3 ve f4 piyonlarına yöneldi. 34...h5 ile g4 kırılmasını engelledi ve h-piyonunu yürütmeye hazırlandı. Beyazın piyonları düşünce fil çifti hem geçer piyonu destekledi hem de 38...Bxf4 gibi çatallar kurdu.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: şah piyonu merkeze iki kare ilerler, d5 ve f5 karelerini kontrol eder ve f1 filiyle vezire yol açar.',
      amac: 'Merkezde yer kaplamak ve hızlı gelişmek. Bu oyunda Beyaz, d4’ü erken oynamadan kapalı bir yapı kuracak.',
      neden: 'Motor ana ilk hamleleri birbirine çok yakın görür; seçim üsluba bağlıdır. 1.e4 Siyaha Sicilya’ya girme fırsatı verir.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; daha konumsal oyunlar (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek başlangıç; çoğu zaman d4 sistemlerine döner (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine yandan baskı kurar ve simetrik olmayan bir yapı ister.',
      amac: 'Kazanma şansı olan dengesiz bir oyun elde etmek; ileride c-piyonunu Beyazın d-piyonuyla değiştirip merkezde iki piyon tutmak.',
      neden: 'Sicilya 1.e4’e karşı en çok oynanan cevaptır ve Siyaha aktif karşı oyun verir. Beyaz 2.Nc3 ile açık Sicilya teorisinden kaçmayı seçecek.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar: İspanyol, İtalyan (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması; ...d5 ile merkezi hemen ister (Motor: +0.35). Bu oyunda Siyahın kurduğu yapı da Fransız’ı andıracak.' },
      ],
    },
    '2w': {
      text: '2.Nc3: Kapalı Sicilya. At gelişir, e4’ü destekler ve d5’e bakar; Beyaz şimdilik Nf3 ve d4 oynamayacak.',
      amac: 'Açık Sicilya’nın yoğun teorisinden (Najdorf, Dragon, Sveşnikov) uzak durmak; g3-Bg2, d3 ve f4 ile yavaş ama sağlam bir şah kanadı planı kurmak.',
      neden: 'Smislov ve Spasski’nin sık kullandığı bu sistemde Beyaz merkezi kapalı tutup şah kanadında alan alır. Ama 2.Nc3, ...d5 kırılmasını tam engellemez; Siyah bunu 2...e6 ve 3...d5 ile kullanacak.',
      diger: [
        { move: '2.Nf3', text: 'Ana yol; 3.d4 ile açık Sicilya (Motor: +0.46). Motorun ilk tercihi.' },
        { move: '2.c3', text: 'Alapin: 3.d4 ile tam merkez kurmak (Motor: +0.33).' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah e-piyonunu bir kare oynar; f8 filine yol açar ve ...d5 kırılmasını destekler.',
      amac: 'Beyazın ne yapacağına göre esnek kalmak: Nf3 ve d4 gelirse Taimanov/Kan tipi açık Sicilya, g3 gelirse ...d5 ile merkezde karşılık.',
      neden: '2...Nc6 ve 2...d6 Kapalı Sicilya’nın klasik cevaplarıdır ve uzun bir manevra oyununa götürür. 2...e6 ise Bg2 yerleşmeden ...d5 oynayabilmek için seçilir; chess.com’daki “Sicilian-phobia” yazısı da 2...e6’yı 2.Nc3’e karşı popüler bir cevap olarak anar.',
      diger: [
        { move: '2...Nc6', text: '3.g3 g6 4.Bg2 Bg7 ile Kapalı Sicilya ana yolu (Motor: +0.44).' },
        { move: '2...d6', text: 'Sağlam; ...e5 veya ...g6 ile devam eder (Motor: +0.35).' },
        { move: '2...a6', text: 'Esnek; ...b5 ile vezir kanadında yer almak (Motor: +0.40).' },
      ],
    },
    '3w': {
      text: '3.g3: Beyaz filini g2’ye getirmeye hazırlanır; uzun çaprazdan e4 ve d5’e baskı kuracak.',
      amac: 'Kapalı Sicilya’nın fianketto kuruluşunu tamamlamak: Bg2, d3, f4, Nge2/Nf3 ve kısa rok.',
      neden: 'Bu hamle Siyaha tam istediği fırsatı verir: fil henüz g2’de değilken 3...d5 oynanabilir. Motor bu yüzden 3.Nf3 veya 3.Nge2 ile açık Sicilya’ya geçişi tercih ediyor; 3.g3 sonrası değerlendirme sıfıra iner.',
      diger: [
        { move: '3.Nf3', text: '3...a6 4.d4 cxd4 5.Nxd4 ile açık Sicilya’ya geçiş (Motor: +0.33).' },
        { move: '3.Nge2', text: '4.d4 planıyla; f-piyonunun önünü kapatmaz (Motor: +0.37).' },
      ],
    },
    '3b': {
      text: '3...d5!: Siyah merkezde hemen hak iddia eder ve e4 piyonuna saldırır.',
      amac: 'Bg2 gelmeden önce merkezi açmak veya Beyazı karar vermeye zorlamak; Kapalı Sicilya’nın sakin yapısını Fransız benzeri bir yapıya çevirmek.',
      neden: 'Motor 3...d5’i en iyi hamle olarak görüyor (0.0). 365Chess bu konumu “Kapalı Sicilya, Korçnoy varyantı” (B23) olarak sınıflar. Beyaz şimdi 4.exd5 ile merkezi açmak, 4.Bg2 ile e4’ü korumak ya da 4.d3 ile piyon zinciri kurmak arasında seçim yapmalı.',
      diger: [
        { move: '3...Nc6', text: '4.Bg2 sonrası ...d5 artık zor; Siyah ...d6 veya ...Nf6 ile daha yavaş oynar (Motor: +0.12).' },
        { move: '3...Nf6', text: '4.e5 Nd5 5.Nxd5 exd5 ile Beyaz biraz alan alır (Motor: +0.27).' },
      ],
    },
    '4w': {
      text: '4.Bg2: Fil uzun çapraza gelir ve e4 piyonunu korur. Beyaz merkezi gerginlik içinde tutar.',
      amac: 'Kapalı Sicilya kuruluşuna sadık kalmak; ...dxe4 gelirse Nxe4 veya Bxe4 ile geri almak, ...d4 gelirse atı e2’ye çekip f4 ile şah kanadında oynamak.',
      neden: '365Chess’e göre bu konumda en çok oynanan hamle 4.exd5’tir (1107 oyun), 4.Bg2 ise 431 oyunla ikinci. Mr Perry’nin chess.com blogu da 4.exd5’i Beyazın en doğru cevabı olarak gösterir. Motor da hemfikir: 4.exd5 −0.04, 4.Bg2 −0.19, çünkü Bg2 sonrası Siyah ...d4 ile alan kazanabilir.',
      diger: [
        { move: '4.exd5', text: '4...exd5 5.d4 cxd4 6.Qxd4 ile Siyaha yalnız d5 piyonu bırakılır (Motor: −0.04).' },
        { move: '4.f4', text: '4...dxe4 5.Nxe4 Be7 ile Fransız’a benzer bir yapı (Motor: −0.09).' },
      ],
    },
    '4b': {
      text: '4...Nf6: At gelişir ve e4’e ikinci kez saldırır.',
      amac: 'Önce gelişmek, merkezle ilgili kararı Beyazın hamlesine göre vermek. e4 artık iki kez saldırı altında (d5 ve f6), iki kez korunuyor (c3 ve g2).',
      neden: 'Motor 4...d4’ü az farkla daha iyi buluyor (−0.18): 5.Nce2 h5!? ile Siyah alan alır. Milov daha esnek bir hamle seçti; 4...dxe4 5.Nxe4 ise Beyazın atına iyi bir merkez karesi verirdi (+0.27).',
      diger: [
        { move: '4...d4', text: '5.Nce2 h5 6.d3 h4 ile Siyah alan kazanır ve şah kanadında oyun başlatır (Motor: −0.18).' },
        { move: '4...dxe4', text: '5.Nxe4 Nc6 6.d3 Be7 ile at merkezde iyi durur (Motor: +0.27).' },
      ],
    },
    '5w': {
      text: '5.d3: e4 piyonunu üçüncü kez destekler ve c1 filine yol açar.',
      amac: 'Merkezi sağlamlaştırmak ve Kapalı Sicilya’nın klasik piyon yapısını (d3-e4-f4) kurmak.',
      neden: 'Bu hamle Siyaha 5...dxe4 6.dxe4 Qxd1+ ile vezirleri değişme imkânı verir; Beyaz bu durumda rok hakkını korumak için atla almak zorunda kalacak. 5.e5 Nfd7 6.f4 ile Fransız yapısı da mümkündü.',
      diger: [
        { move: '5.e5', text: '5...Nfd7 6.f4 Be7 7.Nf3 ile İlerleme Fransız’ına benzer yapı (Motor: +0.02). Motorun ilk tercihi.' },
        { move: '5.f4', text: '5...dxe4 6.Nxe4 Be7 ile e4’teki at merkezi tutar (Motor: −0.20).' },
      ],
    },
    '5b': {
      text: '5...dxe4: Siyah merkezde değişim yapar ve d-hattını açar.',
      amac: 'Bir sonraki hamlede ...Qxd1+ ile vezirleri değişmek. Böylece Beyazın şah kanadı saldırısı (f4-f5, Qh5 gibi planlar) baştan ortadan kalkar.',
      neden: 'Motor 5...d4 (−0.09) veya 5...Nc6’yı biraz daha iyi buluyor; 5...dxe4 küçük bir taviz (+0.17). Ama Milov’un seçimi pratik: vezirsiz bir orta oyunda Beyazın c2 piyonu ve geç gelişen vezir kanadı hedef olacak.',
      diger: [
        { move: '5...d4', text: '6.Nce2 Nc6 7.f4 b5 ile Siyah vezir kanadında alan alır (Motor: −0.09).' },
        { move: '5...Nc6', text: '6.exd5 exd5 7.Bg5 Be7 ile Siyahın c5-d5 piyonları merkezde (Motor: −0.03).' },
      ],
    },
    '6w': {
      text: '6.dxe4: Beyaz d-piyonuyla geri alır.',
      amac: 'Merkezde e4 piyonunu korumak ve piyon yapısını sağlam tutmak.',
      neden: '6.Nxe4 Nxe4 7.Bxe4 (Motor: +0.03) vezirleri tahtada tutardı ama Beyazın e-piyonunu kaybetmesiyle merkez boşalırdı. 6.dxe4 doğal, fakat vezir değişimine izin veriyor.',
      diger: [
        { move: '6.Nxe4', text: '6...Nxe4 7.Bxe4 Bd6 ile vezirler tahtada kalır (Motor: +0.03).' },
        { move: '6.Bf4', text: '6...exd3 7.Nf3 Nc6 ile Beyaz piyon kaybeder (Motor: −0.77).' },
      ],
    },
    '6b': {
      text: '6...Qxd1+: Vezirler şah çekilerek değişir.',
      amac: 'Beyazı rok hakkı ile at arasında karar vermeye zorlamak ve vezirsiz bir oyuna geçmek.',
      neden: 'Bu hamle neredeyse zorunlu: 6...Nc6? 7.Qxd8+ Kxd8 sonrası Siyahın şahı d8’de kalır ve e5 tehdidiyle Beyaz üstün olur (Motor: +0.78). Vezirleri Siyah değiştirince şahını e8’de tutabilir.',
      diger: [
        { move: '6...Nc6', text: '7.Qxd8+ Kxd8 8.Bf4 e5 ile Siyahın şahı merkezde kalır (Motor: +0.78).' },
        { move: '6...Nfd7', text: '7.Nf3 Nc6 8.Qe2 ile Beyaz rahat gelişir (Motor: +0.82).' },
      ],
    },
    '7w': {
      text: '7.Nxd1: At vezirle geri alır; şah e1’de kalır ve rok hakkı korunur.',
      amac: 'Atı daha sonra e3’e getirip c4, d5 ve f5 karelerini kontrol etmek; şahı roka hazır tutmak.',
      neden: '7.Kxd1 de eşit (Motor: +0.01), ama şah rok hakkını kaybeder. Nxd1’in bedeli ise c3 karesinin boşalması ve c2 piyonunun yalnızca şahın uzaktan bakmadığı bir kare olmasıdır; bu ayrıntı oyunun kaderini belirleyecek.',
      diger: [
        { move: '7.Kxd1', text: '7...Nc6 8.f4 Nd4 ile Siyahın atı d4’e yerleşir; şah c2’yi korur (Motor: +0.01).' },
      ],
    },
    '7b': {
      text: '7...Nc6: At gelişir; b4 ve d4 karelerine bakar.',
      amac: 'Atı b4 veya d4’e getirip c2 piyonuna baskı kurmak. d1’deki at c3’ü artık kontrol etmediği için bu kareler Siyahın atına açık.',
      neden: 'Motor 7...Bd7’yi az farkla öneriyor (+0.04), 7...Nc6 +0.14. Fark küçük; Milov hemen atın b4-d4 karelerine yönelmesini seçti.',
      diger: [
        { move: '7...Bd7', text: '8.Ne3 Bc6 9.f3 ile fil uzun çaprazda Bg2’ye karşı durur (Motor: +0.04).' },
        { move: '7...Be7', text: '8.Ne3 Nc6 9.f4 e5 (Motor: +0.27).' },
      ],
    },
    '8w': {
      text: '8.f4: Beyaz f-piyonunu ilerletir; e5 ve g5 karelerini kontrol eder.',
      amac: 'Kapalı Sicilya’nın tipik alan kazanma hamlesi: e5 ile f6 atını kovalamak ve şah kanadında yer almak.',
      neden: 'Vezirler değiştikten sonra bu plan önemini kaybetti; asıl sorun vezir kanadıydı. Motor 8.Ne3 veya **8.c3**’ü öneriyor (+0.1): c3, Siyahın atına b4 ve d4 karelerini kapatırdı. 8.f4 sonrası Motor −0.4.',
      diger: [
        { move: '8.c3', text: 'b4 ve d4’ü kapatır: 8...Bd7 9.f4 Na5 10.Nf2 ile Beyazın vezir kanadı sağlam (Motor: +0.05).' },
        { move: '8.Ne3', text: 'At hemen c2’yi ve d5-f5’i kontrol eder: 8...h5 9.b3 (Motor: +0.08).' },
      ],
    },
    '8b': {
      text: '8...Bd7: Fil d7’ye gelişir; c6 ve a4’e giden çaprazı açar ve uzun roku hazırlar.',
      amac: 'Fil ileride a4’ten c2 ve d1 karelerini kontrol edecek; ayrıca ...O-O-O ile kale d-hattına gelebilir.',
      neden: 'Motor 8...Nb4!’ü hemen oynamayı öneriyor (−0.14): 9.Kd2 ile Beyaz c2’yi şahla korumak zorunda kalır. Milov önce filini geliştirdi; bu Beyaza 9.c3 fırsatı verdi, ama Klimenko kullanmadı.',
      diger: [
        { move: '8...Nb4', text: '9.Kd2 Bd7 10.a3 Nc6 ile Beyazın şahı merkezde kalır (Motor: −0.14).' },
        { move: '8...Nd4', text: '9.Kd2 e5 10.c3 Nc6 (Motor: −0.07).' },
      ],
    },
    '9w': {
      text: '9.Bd2: Fil d2’ye gelişir; b4 karesini kontrol eder ve kaleleri birleştirmeye hazırlanır.',
      amac: 'Gelişimi tamamlamak ve ...Nb4’e karşı Bxb4 imkânı bulundurmak.',
      neden: 'Bu oyunun ilk ciddi hatası. c2 piyonunu kimse korumuyor ve 9...Nb4 artık doğrudan ...Nxc2+ çatalını tehdit ediyor. Motor 9.c3 veya 9.Ne3’ü öneriyordu (+0.1); 9.Bd2 sonrası −0.4.',
      diger: [
        { move: '9.c3', text: 'b4 ve d4 kapanır: 9...e5 10.f5 Na5 11.Nf3 (Motor: +0.06).' },
        { move: '9.Ne3', text: 'c2 önceden korunur: 9...h5 10.e5 Ng4 11.c3 (Motor: +0.05).' },
      ],
    },
    '9b': {
      text: '9...Nb4!: At c2 ve a2 piyonlarına saldırır.',
      amac: 'Vezirsiz oyunda c2 karesi şah ve a1 kalesine çatal karesidir; at ...Nxc2+ ile kaleyi kazanmayı tehdit ediyor.',
      neden: 'Motor bunu en iyi hamle görüyor (−0.46). Beyaz şimdi ya filini ata verecek (10.Bxb4 cxb4) ya da c2’yi bir taşla koruyacak. 9...O-O-O veya 9...h5 eşitlik getirirdi.',
      diger: [
        { move: '9...O-O-O', text: '10.Nh3 Ng4 11.c3 f6 ile sakin bir oyun (Motor: +0.03).' },
        { move: '9...h5', text: '10.e5 Nd5 11.c3 h4 (Motor: +0.10).' },
      ],
    },
    '10w': {
      text: '10.Ne3: At e3’e gelir ve c2 piyonunu korur.',
      amac: 'Çatal tehdidini karşılamak ve atı aktif bir kareye (c4, d5, f5’e bakan) getirmek.',
      neden: 'Doğal görünür, ama c2’yi tek bir savunucuya emanet eder ve o savunucu saldırıya açıktır. Motor 10.Bxb4 cxb4 11.e5 Nd5 12.Ne2 ile −0.41’i (Siyahın fil çifti olur ama tehlike biter) biraz daha iyi buluyor. 10.Rc1? Nxa2 ise piyon kaybettirir (−1.5).',
      diger: [
        { move: '10.Bxb4', text: '10...cxb4 11.e5 Nd5 12.Ne2 Rc8 ile Siyahın fil çifti var ama taktik bitti (Motor: −0.41).' },
        { move: '10.Rc1', text: '10...Nxa2 11.Ra1 Nb4 12.Bxb4 cxb4 ile Siyah piyon kazanır (Motor: −1.5).' },
      ],
    },
    '10b': {
      text: '10...Ng4!: f6 atı, c2’nin tek savunucusu olan e3 atına saldırır.',
      amac: 'Savunucuyu saptırmak: 11.Nxg4 alınırsa e3’ten c2’ye bakan at ortadan kalkar ve 11...Nxc2+ çatalı gelir.',
      neden: 'Beyaz atı almazsa da kayıp vardır: 11.Rc1 Nxe3 12.Bxe3 Nxa2 bir piyon kazanır (−0.8). Motor 10...Ng4’ü −0.73 görüyor; 10...Bc6 veya 10...Ba4 ise +0.2 civarında. Bu oyunun en öğretici anı burasıdır.',
      diger: [
        { move: '10...Bc6', text: '11.a3 Na6 12.e5 Bxg2 ile at geri çekilir, oyun eşit (Motor: +0.15).' },
        { move: '10...Ba4', text: '11.Rc1 Bc6 12.a3 Na6 (Motor: +0.25).' },
      ],
    },
    '11w': {
      text: '11.Nxg4: Beyaz atı alır ve bir taş kazanır, ama c2’nin savunucusu ortadan kalkar.',
      amac: 'Kaybı en aza indirmek: at için kale vermek, bir piyonu bedavaya vermekten daha karmaşık bir oyun bırakır.',
      neden: 'Motor 11.Nxg4 (−0.71) ile 11.Rc1 Nxe3 12.Bxe3 Nxa2 (−0.78) arasında çok küçük fark görüyor. 11.O-O-O? Nf2 ise d1 kalesini de kazandırır (−2.0).',
      diger: [
        { move: '11.Rc1', text: '11...Nxe3 12.Bxe3 Nxa2 13.Rd1 ile Beyaz bir piyon eksik (Motor: −0.78).' },
        { move: '11.O-O-O', text: '11...Nf2 12.a3 Nxd1 ile Siyah kaleyi kazanır (Motor: −2.0).' },
      ],
    },
    '11b': {
      text: '11...Nxc2+: At şah çekerken a1 kalesine de saldırır; çatal.',
      amac: 'Kaleyi kazanmak; Siyah f6 atını vermişti, şimdi a1 kalesini alarak bir kalite öne geçecek.',
      neden: 'Tek hamle: başka bir şey oynanırsa Beyaz e3’e döner ve Siyah bir taş eksik kalır (11...Ba4 12.Ne3 Motor: +4.5).',
      diger: [
        { move: '11...Ba4', text: '12.Ne3 Nxc2+ 13.Nxc2 Bxc2 ile Siyah bir taş eksik kalır (Motor: +4.45).' },
      ],
    },
    '12w': {
      text: '12.Kd1: Şah d1’e gider ve c2’deki ata saldırır.',
      amac: 'Şahı c1’e getirip a1’e giren atın c2 kaçış karesini kapatmak.',
      neden: 'Motor 12.Kd1’i en iyi görüyor (−0.80): şah vezir kanadına yakın olunca atı yakalama şansı doğar. 12.Kf2 (−1.19) ve 12.Ke2 (−1.69) şahı uzaklaştırır.',
      diger: [
        { move: '12.Kf2', text: '12...Nxa1 13.Ne3 Ba4 14.b3 ile at kurtulmaya yaklaşır (Motor: −1.19).' },
        { move: '12.Ke2', text: '12...Nxa1 13.Kd1 Ba4+ 14.Kc1 ile tempo kaybı (Motor: −1.69).' },
      ],
    },
    '12b': {
      text: '12...Nxa1: At kaleyi alır. Siyah bir kalite öne geçer (kale karşılığı at).',
      amac: 'Kazanılan malzemeyi almak. Bundan sonraki sorun a1’deki atın oradan nasıl çıkacağıdır.',
      neden: 'Tek mantıklı hamle: 12...h5? 13.Kxc2 hxg4 ile Siyah taş eksik kalır (Motor: +3.1).',
      diger: [
        { move: '12...h5', text: '13.Kxc2 hxg4 14.h3 ile Beyaz bir taş fazlası (Motor: +3.14).' },
      ],
    },
    '13w': {
      text: '13.Kc1: Şah c2’yi kontrol eder; a1’deki atın bütün çıkış kareleri kapanır.',
      amac: 'Atı köşede hapsetmek ve Kb1-Kxa1 ile geri almayı hazırlamak. b3 karesini a2 piyonu, c2’yi şah tutuyor.',
      neden: 'Motor tek iyi hamle görüyor (−0.75). 13.Ne3 c4 14.Kc1 de olur (−1.1), ama 13.Nf3? Ba4+ ile şah tempo kaybeder (−1.5).',
      diger: [
        { move: '13.Ne3', text: '13...c4 14.Kc1 Rd8 15.Nf3 (Motor: −1.11).' },
        { move: '13.Nf3', text: '13...Ba4+ 14.Kc1 c4 15.Ne3 ile şah tempo kaybeder (Motor: −1.52).' },
      ],
    },
    '13b': {
      text: '13...Ba4: Fil c2, b3 ve d1 karelerini kontrol eder.',
      amac: 'Atın kaçış karelerini desteklemek: b3’e giden at axb3 Bxb3 ile kurtarılabilir, c2’ye çıkmak da kolaylaşır. Ayrıca Kd1 kaçışını keser.',
      neden: 'Motor 13...h5 (−0.74) veya 13...Rd8’i (−0.73) biraz daha iyi buluyor; maç hamlesi −0.40. 13...h5 g4 atını kovalayıp tempo kazanırdı; 13...Rd8 ise önce kaleyi açık hatta getirirdi.',
      diger: [
        { move: '13...h5', text: '14.Ne5 Ba4 15.Ngf3 h4 ile g4 atı kovalanır (Motor: −0.74).' },
        { move: '13...Rd8', text: '14.Nf3 Bc6 15.Ba5 b6 ile kale açık hatta (Motor: −0.73).' },
      ],
    },
    '14w': {
      text: '14.Ne3: At e3’e döner ve c2’yi ikinci kez kontrol eder.',
      amac: 'Atın c2 üzerinden kaçmasını kesin olarak engellemek ve d5-c4 karelerine bakmak.',
      neden: 'Motor tek iyi hamle görüyor (−0.43). 14.b3? Nxb3+ 15.axb3 Bxb3 ile Siyah atını piyonlar karşılığında kurtarır (−1.75).',
      diger: [
        { move: '14.b3', text: '14...Nxb3+ 15.axb3 Bxb3 ile Siyah iki piyon alır ve kalite önde kalır (Motor: −1.75).' },
        { move: '14.Ne2', text: '14...Bc2 15.Nc3 c4 (Motor: −1.11).' },
      ],
    },
    '14b': {
      text: '14...Rd8: Kale açık d-hattına gelir.',
      amac: 'd-hattını almak ve ...Rd3 ile e3 atına (c2’nin savunucusuna) saldırmayı hazırlamak.',
      neden: 'Motor 14...c4!’ü öneriyor (−1.07): ...Bc5 ile e3’e saldırmayı ve c4 piyonunun desteğiyle ...Nb3’ü hazırlar. 14...Rd8 de iyi (−0.69), ama atın kurtuluşunu yavaşlatıyor.',
      diger: [
        { move: '14...c4', text: '15.Kb1 Rd8 16.Nf3 Bc6 ile c4 piyonu b3’ü destekler (Motor: −1.07).' },
        { move: '14...O-O-O', text: '15.Nf3 Be7 16.Re1 Rd3 (Motor: −0.37).' },
      ],
    },
    '15w': {
      text: '15.Nf3: Diğer at da gelişir; e5 ve d4’e bakar.',
      amac: 'h1 kalesini oyuna sokmak için yol açmak ve bütün taşları atı yakalamaya hazırlamak.',
      neden: 'Motor tek iyi hamle görüyor (−0.89). 15.b3? yine Nxb3+ ile kurtuluş verir (−1.75), 15.Nc4 Rd4 de zayıf (−1.96).',
      diger: [
        { move: '15.b3', text: '15...Nxb3+ 16.axb3 Bxb3 17.e5 (Motor: −1.75).' },
        { move: '15.Nc4', text: '15...Rd4 16.b3 Nxb3+ (Motor: −1.96).' },
      ],
    },
    '15b': {
      text: '15...Be7: Fil gelişir ve şah kanadında roku hazırlar.',
      amac: 'Gelişimi tamamlayıp h8 kalesini oyuna sokmak.',
      neden: 'Bu hamle atın kurtuluşunu erteledi ve Beyaza 16.Re1 ile e4’ü koruyup Kb1 tehdidini kurma zamanı verdi. Motor 15...c4 veya 15...Bc6 ile −0.46 görüyordu; maç hamlesi −0.09. Siyahın avantajının çoğu burada eridi.',
      diger: [
        { move: '15...c4', text: '16.Kb1 Bc6 17.Bc3 Bxe4+ 18.Kxa1 ile at geri verilir ama Siyah e4 piyonunu alır ve iki kalesiyle aktif kalır (Motor: −0.46).' },
        { move: '15...Bc6', text: 'e4’e baskı: 16.Ne5 Ba4 17.Nf3 c4 (Motor: −0.46).' },
      ],
    },
    '16w': {
      text: '16.Re1: Kale e1’e gelir ve e4 piyonunu korur.',
      amac: 'e4 korununca Kb1 ve Kxa1 tehdidi gerçek olur; ayrıca Bf1 ile fil d3 karesine bakabilir.',
      neden: 'Motor en iyi hamle görüyor (−0.19). 16.Kb1? Bc6 17.Kxa1 Bxe4 ise Siyahın filini çok aktif bırakırdı (−0.91).',
      diger: [
        { move: '16.Kb1', text: '16...Bc6 17.Kxa1 Bxe4 ile f3 atı ve g2 fili baskı altında (Motor: −0.91).' },
        { move: '16.Rf1', text: '16...O-O 17.Re1 Rd3 (Motor: −0.83).' },
      ],
    },
    '16b': {
      text: '16...Rd3: Kale d3’e çıkar ve e3 atına saldırır.',
      amac: 'c2’nin savunucusu e3 atını baskı altına almak; gerekirse ...Rxe3 ile onu ortadan kaldırmak.',
      neden: 'Motor 16...c4 (−0.24) ve 16...Bc6’yı (−0.20) eşdeğer görüyor; 16...Rd3 −0.09. 16...c4 17.Kb1 Nb3 18.axb3 cxb3 ile at verilip güçlü bir b3 piyonu elde edilirdi.',
      diger: [
        { move: '16...c4', text: '17.Kb1 Nb3 18.axb3 cxb3 ile b3 piyonu Beyazın şahını sıkıştırır (Motor: −0.24).' },
        { move: '16...Bc6', text: '17.Nc4 O-O 18.Kb1 b5 (Motor: −0.20).' },
      ],
    },
    '17w': {
      text: '17.Bf1: Fil f1’e çekilir ve d3 kalesine saldırır.',
      amac: 'Kaleyi geri çekmeye zorlamak; kale çekilirse Kb1-Kxa1 ile at alınacak.',
      neden: 'Motor en iyi hamle görüyor (−0.11). 17.Kb1 Rxe3 18.Rxe3 Nc2 aynı yapıya gider ama tempo kaybıyla (−0.80).',
      diger: [
        { move: '17.Kb1', text: '17...Rxe3 18.Rxe3 Nc2 19.Rc3 (Motor: −0.80).' },
        { move: '17.Ne5', text: '17...Rxe3 18.Rxe3 Nc2 19.Rd3 (Motor: −0.71).' },
      ],
    },
    '17b': {
      text: '17...Rxe3!: Siyah kaleyi e3 atına verir; kaliteyi geri öder.',
      amac: 'c2’nin ikinci savunucusunu ortadan kaldırmak ve 18...Nc2 ile atı köşeden kurtarmak.',
      neden: 'Motor tek hamle görüyor (−0.05). Kale çekilirse at düşer: 17...Rd8 18.Kb1 (+1.2); 17...c4 18.Bxd3 cxd3 ise yetersiz (+0.5).',
      diger: [
        { move: '17...c4', text: '18.Bxd3 cxd3 19.Bc3 Nc2 ile Siyah kaleyi kaybeder, piyon d3’te zayıf (Motor: +0.50).' },
        { move: '17...Rd8', text: '18.Kb1 O-O 19.Kxa1 ile Beyaz atı alır (Motor: +1.20).' },
      ],
    },
    '18w': {
      text: '18.Rxe3: Beyaz kaleyle geri alır.',
      amac: 'Malzemeyi geri almak ve kaleyi c2’yi kontrol edebileceği yatayda tutmak.',
      neden: '18.Bxe3? Nc2! e1 kalesine ve e3 filine çatal yapar (−1.54); 18.Bb5+? Bxb5 19.Rxe3 Ba4 ise filini kaybeder (−3.66). Bu yüzden kale ile almak zorunlu.',
      diger: [
        { move: '18.Bxe3', text: '18...Nc2 ile e1 kalesine ve e3 filine çatal (Motor: −1.54).' },
      ],
    },
    '18b': {
      text: '18...Nc2!: At a4 filinin desteğiyle köşeden çıkar ve e3 kalesine saldırır.',
      amac: 'Atı kurtarmak; c2’den sonra b4 veya d4 karesine gidecek.',
      neden: 'Motor tek hamle görüyor (0.00). Başka bir hamlede Beyaz Kb1 ile atı yakalar: 18...Bf6 19.b3 (+2.66), 18...f6 (+2.70).',
      diger: [
        { move: '18...Bf6', text: '19.b3 Bc6 20.Ne5 ile at kaçamaz (Motor: +2.66).' },
        { move: '18...f6', text: '19.b3 Bc6 20.Bc4 Kd7 21.Kb2 ile at düşer (Motor: +2.70).' },
      ],
    },
    '19w': {
      text: '19.Rc3: Kale c3’e gelip c2’deki ata saldırır.',
      amac: 'Atı tekrar geri çekilmeye zorlamak ve kaleyi c-hattında aktif tutmak.',
      neden: 'Motor en iyi hamle görüyor (+0.04). 19.Rd3 Nd4 20.Nxd4 cxd4 de eşit (−0.11); 19.Re2? Nd4 ise Siyahın atına harika bir kare verir (−1.37).',
      diger: [
        { move: '19.Rd3', text: '19...Nd4 20.Nxd4 cxd4 21.Rxd4 (Motor: −0.11).' },
        { move: '19.Re2', text: '19...Nd4 20.Nxd4 cxd4 ile d4 piyonu güçlü (Motor: −1.37).' },
      ],
    },
    '19b': {
      text: '19...Nb4: At b4’e gider; a2 ve d3 karelerine bakar.',
      amac: 'Atı güvenli ve aktif bir kareye yerleştirmek; a2 piyonuna baskı.',
      neden: 'Motor 19...Nd4 ile eşdeğer görüyor (+0.07). 19...f5? 20.exf5 Nb4 21.Ra3 ise piyon kaybettirir (+2.61).',
      diger: [
        { move: '19...Nd4', text: '20.Nxd4 cxd4 21.Rc7 Bc6 (Motor: +0.07).' },
        { move: '19...f5', text: '20.exf5 Nb4 21.Ra3 Bc6 ile Siyah piyon kaybeder (Motor: +2.61).' },
      ],
    },
    '20w': {
      text: '20.Ra3: Kale a3’e gelir; a4 filine saldırır ve a7 piyonuna bakar.',
      amac: 'Fili kovalayıp a7 piyonunu almak ve kaleyi yedinci yataya sokmak.',
      neden: 'Motor tek iyi hamle görüyor (+0.07). 20.Bc4 Bd7 21.a3 Nc6 (−0.68) veya 20.Kb1 (−0.76) Siyaha rahat bir oyun bırakır.',
      diger: [
        { move: '20.Bc4', text: '20...Bd7 21.a3 Nc6 22.Rb3 (Motor: −0.68).' },
        { move: '20.Kb1', text: '20...Bc6 21.Re3 f6 22.a3 (Motor: −0.76).' },
      ],
    },
    '20b': {
      text: '20...Bc6: Fil c6’ya çekilir ve e4 piyonuna bakar.',
      amac: 'a7 kaybedilirse karşılığında e4’ü almak: g2 fili f1’e gittiği ve e1 kalesi değiştiği için e4 korumasız.',
      neden: 'Motor tek hamle görüyor (+0.10). 20...Bc2? 21.Bxb4 cxb4 22.Rxa7 Bxe4 ile Beyaz yedinci yatayda çok aktif (+2.30); 20...b5? 21.b3 c4 ise fili tuzağa düşürür (+2.62).',
      diger: [
        { move: '20...Bc2', text: '21.Bxb4 cxb4 22.Rxa7 Bxe4 ile Beyazın kalesi b7’ye de saldırır (Motor: +2.30).' },
        { move: '20...b5', text: '21.b3 c4 22.bxa4 ile fil kaybedilir (Motor: +2.62).' },
      ],
    },
    '21w': {
      text: '21.Rxa7: Kale a7 piyonunu alır ve yedinci yataya girer.',
      amac: 'Bir piyon kazanmak ve b7 piyonuna baskı kurmak.',
      neden: 'Motor en iyi hamle görüyor (0.00). 21.Ne5 a6 22.Nxc6 Nxc6 Siyahın vezir kanadını sağlam bırakır (−0.33).',
      diger: [
        { move: '21.Ne5', text: '21...a6 22.Nxc6 Nxc6 23.Rb3 (Motor: −0.33).' },
        { move: '21.Bxb4', text: '21...cxb4 22.Rxa7 O-O ile Siyahın fil çifti var (Motor: −0.88).' },
      ],
    },
    '21b': {
      text: '21...O-O: Siyah rok yapar; şah güvenceye alınır ve kale f-hattına gelir.',
      amac: 'Şahı e7 filinin önünden çekip kaleyi oyuna sokmak; e4’ü almak için zaman kazanmak.',
      neden: 'Motor en iyi hamle görüyor (−0.08). 21...Kd7 22.a3 Na2+ (+0.80) ve 21...f6 22.a3 Na6 23.Ra8+ (+1.10) şahı veya atı kötü bırakır.',
      diger: [
        { move: '21...Kd7', text: '22.a3 Na2+ 23.Kd1 Bf6 ile at a2’de hapis (Motor: +0.80).' },
        { move: '21...f6', text: '22.a3 Na6 23.Ra8+ Bd8 ile Siyah bağlanır (Motor: +1.10).' },
      ],
    },
    '22w': {
      text: '22.Ne5: At e5’e gelir; c6 filine ve f7’ye bakar.',
      amac: 'Fili değiştirerek e4’ü kurtarmak ya da en azından fili kovalamak.',
      neden: 'Motor 22.Ne5 ve 22.a3’ü eşit görüyor (0.00). 22.Ne1 (−0.38) daha pasiftir.',
      diger: [
        { move: '22.a3', text: '22...Bxe4 23.Ne1 Nd5 24.Rxb7 (Motor: −0.02).' },
        { move: '22.Ne1', text: '22...Bd8 23.Bg2 Bb6 24.Ra3 (Motor: −0.38).' },
      ],
    },
    '22b': {
      text: '22...Bxe4: Fil e4 piyonunu alır ve Nxc6 tehdidinden de kurtulur.',
      amac: 'Kaybedilen piyonu geri almak; fili merkeze, b1-h7 çaprazına yerleştirmek.',
      neden: 'Motor tek hamle görüyor (−0.08). 22...Rb8? 23.Nxc6 ile taş kaybettirir (+2.74), 22...h5? de benzer (+2.93).',
      diger: [
        { move: '22...Rb8', text: '23.Nxc6 Nxc6 24.Rc7 ile Beyaz taş kazanır (Motor: +2.74).' },
      ],
    },
    '23w': {
      text: '23.a3: Piyon b4 atını kovalar.',
      amac: 'Atı b4’ten çıkarmak; d3 ve c2 karelerine giden yolunu zorlaştırmak.',
      neden: 'Motor en iyi hamle görüyor (−0.12). 23.Bb5 f6 24.Nd7 (−0.77) ve 23.Bc4 Bd6 (−1.04) taşları kötü konumlandırır.',
      diger: [
        { move: '23.Bb5', text: '23...f6 24.Nd7 Rd8 25.Bc4 (Motor: −0.77).' },
        { move: '23.Bc4', text: '23...Bd6 24.Bb5 Bb8 25.Ra5 (Motor: −1.04).' },
      ],
    },
    '23b': {
      text: '23...f6: Piyon e5 atını kovalar.',
      amac: 'Önce Beyazın aktif atını uzaklaştırmak; b4 atı sonra kaçacak.',
      neden: 'Motor tek iyi hamle görüyor (−0.24). 23...Nd5? 24.Rxb7 Ne3 25.Rxe7 (+0.83), 23...Nc6? 24.Rxb7 (+1.35) piyon kaybettirir.',
      diger: [
        { move: '23...Nd5', text: '24.Rxb7 Ne3 25.Rxe7 Nxf1 ile Beyaz piyon önde (Motor: +0.83).' },
        { move: '23...Nc6', text: '24.Rxb7 Rb8 25.Rc7 Nxe5 (Motor: +1.35).' },
      ],
    },
    '24w': {
      text: '24.Nc4: At c4’e çekilir; b6 ve a5 karelerine bakar.',
      amac: 'Atı vezir kanadına getirip b7 piyonuna saldırmak (Na5xb7).',
      neden: 'Motor 24.Nd7’yi az farkla öneriyor (+0.04): 24...Rd8 25.Bc4 Kf7 26.f5. 24.Nc4 de hemen hemen eşit (−0.03); 24.Ng4 (−0.50) ise atı kenara iter.',
      diger: [
        { move: '24.Nd7', text: '24...Rd8 25.Bc4 Kf7 26.f5 (Motor: +0.04).' },
        { move: '24.Ng4', text: '24...h5 25.Nf2 Na2+ (Motor: −0.50).' },
      ],
    },
    '24b': {
      text: '24...Nc2: At c2’ye gelir; a3, d4 ve e3 karelerine bakar.',
      amac: 'Atı d4’e getirip b3 ve e2 karelerinden çatal aramak.',
      neden: 'Motor en iyi hamle görüyor (−0.16). 24...Nd3+ 25.Bxd3 Bxd3 26.Rxb7 Bxc4 eşitlik verir (+0.28), 24...Na6 (+0.86) ise atı oyun dışına iter.',
      diger: [
        { move: '24...Nd3+', text: '25.Bxd3 Bxd3 26.Rxb7 Bxc4 (Motor: +0.28).' },
        { move: '24...Na6', text: '25.Na5 Nc7 26.Nxb7 (Motor: +0.86).' },
      ],
    },
    '25w': {
      text: '25.Na5: At b7 piyonuna saldırır.',
      amac: 'b7’yi almak ve vezir kanadında iki bağlı piyon (a3-b2) ile geçer piyon yaratmak.',
      neden: 'Motor en iyi hamle görüyor (−0.18). 25.Bc3 Nd4 26.Bxd4 cxd4 (−0.73) Siyaha güçlü bir d-piyonu verir.',
      diger: [
        { move: '25.Bc3', text: '25...Nd4 26.Bxd4 cxd4 27.Kd2 (Motor: −0.73).' },
        { move: '25.f5', text: '25...exf5 26.Na5 Rc8 (Motor: −0.82).' },
      ],
    },
    '25b': {
      text: '25...Nd4: At d4’e gelir; b3 ve e2 karelerinden şah çekmeyi hedefler.',
      amac: '...Nb3+ ile d2 filine saldırmak ve fil çiftini elde etmek.',
      neden: 'Motor 25...Rb8’i öneriyor (−0.39): 26.Nxb7 Nxa3! ile Siyah a3 piyonunu alır. 25...Nd4 b7’yi bırakıyor (+0.19).',
      diger: [
        { move: '25...Rb8', text: '26.Nxb7 Nxa3 27.Na5 Kf7 ile piyonlar eşit (Motor: −0.39).' },
        { move: '25...Rc8', text: '26.Nxb7 Nd4 27.Na5 Kf8 (Motor: +0.34).' },
      ],
    },
    '26w': {
      text: '26.Nxb7: At b7 piyonunu alır.',
      amac: 'Piyon kazanmak ve c5 piyonuna baskı kurmak.',
      neden: 'Motor en iyi hamle görüyor (+0.20). 26.Bc4 Rb8 (−0.96) veya 26.Bc3 Rd8 (−1.02) b7’yi bırakır ve Siyaha inisiyatif verir.',
      diger: [
        { move: '26.Bc4', text: '26...Rb8 27.f5 Kf8 28.fxe6 (Motor: −0.96).' },
        { move: '26.Bc3', text: '26...Rd8 27.Bxd4 cxd4 28.Bc4 (Motor: −1.02).' },
      ],
    },
    '26b': {
      text: '26...Nb3+: At şah çekerek d2 filine saldırır.',
      amac: 'Fili değiştirip fil çiftine kavuşmak.',
      neden: 'Motor 26...Rf7’yi çok az farkla öneriyor (+0.13); 26...Nb3+ +0.20. Pratik olarak ikisi de aynı değerde.',
      diger: [
        { move: '26...Rf7', text: '27.Na5 Bd8 28.Rxf7 Kxf7 (Motor: +0.13).' },
        { move: '26...Rb8', text: '27.Na5 Kf8 28.Bc4 Nb5 (Motor: +0.25).' },
      ],
    },
    '27w': {
      text: '27.Kd1: Şah d1’e çekilir; tek iyi kare.',
      amac: 'Şahı korumak ve d2 filini savunmak.',
      neden: 'Başka bir kare kötüdür: Kc2 veya Kb1 sonrası şah atın ve filin hattına girer. Motor tek hamle görüyor (+0.20).',
    },
    '27b': {
      text: '27...Rb8: Kale b-hattına gelir ve b7 atına saldırır.',
      amac: 'Atı geri çekilmeye zorlamak ve b2 piyonuna bakmak.',
      neden: 'Motor 27...Nxd2 ile aynı değerde görüyor (+0.21 / +0.23). 27...Bd5 28.Na5 ise (+0.46) biraz daha pasiftir.',
      diger: [
        { move: '27...Nxd2', text: '28.Kxd2 Rb8 29.Na5 Kf8 (Motor: +0.21).' },
        { move: '27...Bd5', text: '28.Na5 Nxd2 29.Kxd2 Rf7 (Motor: +0.46).' },
      ],
    },
    '28w': {
      text: '28.Na5: At a5’e döner.',
      amac: 'Atı kurtarmak; a5’ten c4 ve c6’ya bakacak.',
      neden: 'Motor tek iyi hamle görüyor (+0.27). 28.Bc4? Nxd2 29.Kxd2 Bxb7 taş kaybettirir (−2.97); 28.Ba6 Bf3+ (−0.71) şahı rahatsız eder.',
      diger: [
        { move: '28.Bc4', text: '28...Nxd2 29.Kxd2 Bxb7 ile Beyaz taş kaybeder (Motor: −2.97).' },
        { move: '28.Ba6', text: '28...Bf3+ 29.Ke1 Bd5 (Motor: −0.71).' },
      ],
    },
    '28b': {
      text: '28...Nxd2: At d2 filini alır.',
      amac: 'Fil çiftine kavuşmak; iki fil açık konumda at+fil ikilisinden genelde daha güçlüdür.',
      neden: 'Motor en iyi hamle görüyor (+0.31). 28...Nxa5? 29.Bxa5 Beyazın filini güçlü bırakır (+0.78).',
      diger: [
        { move: '28...Bf3+', text: '29.Ke1 Nxd2 30.Kxd2 Kf8 (Motor: +0.41).' },
        { move: '28...Nxa5', text: '29.Bxa5 Kf8 30.Kc1 Bd5 (Motor: +0.78).' },
      ],
    },
    '29w': {
      text: '29.Kxd2: Şah geri alır.',
      amac: 'Malzemeyi eşitlemek. Şimdi Beyaz kale+fil+at, Siyah kale+iki fil; piyonlar 5’e 5.',
      neden: 'Zorunlu: 29.Bh3? f5 30.Rxe7 Rxb2 (−2.87) veya 29.Bd3? Rd8 (−3.11) taş kaybettirir.',
      diger: [
        { move: '29.Bh3', text: '29...f5 30.Rxe7 Rxb2 ile Siyah çok aktif (Motor: −2.87).' },
      ],
    },
    '29b': {
      text: '29...Bd8: Fil d8’e gelir ve a5 atına saldırır.',
      amac: 'Atı yine kovalamak ve fili b6-c7 çaprazında aktifleştirmek.',
      neden: 'Motor 29...Kf8’i (+0.32) ve 29...Bd8’i (+0.35) eşdeğer görüyor. Konum dengede: Beyazın kalesi aktif, a-piyonu potansiyel geçer piyon; Siyahın iki fili var.',
      diger: [
        { move: '29...Kf8', text: '30.Kc3 g5 31.Nc4 Rb7 (Motor: +0.32).' },
        { move: '29...Bf8', text: '30.Kc1 g5 31.fxg5 fxg5 (Motor: +0.44).' },
      ],
    },
    '30w': {
      text: '30.Nc4: At c4’e gelir; merkeze ve b6-d6-e5 karelerine bakar.',
      amac: 'Atı en iyi karesine yerleştirmek; c4’te Siyahın c5 piyonunu bloke eder.',
      neden: 'Motor en iyi hamle görüyor (+0.28). 30.Kc3 de iyi (+0.25); 30.Kc1 Ra8 ise kale değişimine izin verir (+0.09).',
      diger: [
        { move: '30.Kc3', text: '30...Bd5 31.Nc4 g5 32.Bd3 (Motor: +0.25).' },
      ],
    },
    '30b': {
      text: '30...f5: Piyon f5’e ilerler; e4 filini destekler ve f6’yı fil için boşaltır.',
      amac: 'Piyonları beyaz karelere koyup kara kareli fili (d8) özgürleştirmek; e4-d5 karelerini beyaz kareli fil için sağlamlaştırmak.',
      neden: 'Motor 30...g5’i öneriyor (+0.28): f4 piyonunu hemen sorgulamak. 30...f5 e6 piyonunu zayıflatır ve Beyaza küçük bir üstünlük verir (+0.61).',
      diger: [
        { move: '30...g5', text: '31.Bd3 Bd5 32.fxg5 fxg5 ile f4 piyonu değişir (Motor: +0.28).' },
        { move: '30...Kf8', text: '31.Bd3 Bd5 32.a4 f5 (Motor: +0.32).' },
      ],
    },
    '31w': {
      text: '31.Bd3: Fil d3’e gelir ve e4 filine değişim teklif eder.',
      amac: 'Siyahın güçlü beyaz kareli filini değiştirip fil çiftini bozmak.',
      neden: 'Motor en iyi hamle görüyor (+0.68). 31.a4 de iyi (+0.39); 31.Kc3 Bf6+ (+0.21) ise şahı rahatsız eder.',
      diger: [
        { move: '31.a4', text: '31...Kf8 32.Kc3 Rb7 33.Ra8 (Motor: +0.39).' },
      ],
    },
    '31b': {
      text: '31...Bd5: Fil değişimden kaçar ve c4 atına baskı kurar.',
      amac: 'Fil çiftini korumak; d5’ten a2-g8 çaprazına ve c4’e bakmak.',
      neden: 'Motor en iyi hamle görüyor (+0.57). 31...Bxd3 32.Kxd3 fil çiftini bitirirdi.',
      diger: [
        { move: '31...Rb7', text: '32.Rxb7 Bxb7 33.Ne5 g5 (Motor: +0.64).' },
        { move: '31...Bc6', text: '32.Ne5 Bd5 33.Kc1 g5 (Motor: +0.68).' },
      ],
    },
    '32w': {
      text: '32.Kc2: Şah c2’ye gider; b3 ve d3’ü destekler.',
      amac: 'Şahı vezir kanadı piyonlarının yanına getirmek ve b3 ile atı desteklemeye hazırlanmak.',
      neden: 'Motor en iyi hamle görüyor (+0.61). 32.a4 Rb4 33.a5 Bxc4 (+0.21) atı değiştirir.',
      diger: [
        { move: '32.a4', text: '32...Rb4 33.a5 Bxc4 34.Bxc4 (Motor: +0.21).' },
        { move: '32.Rd7', text: '32...Bf6 33.a4 Rb4 (Motor: +0.12).' },
      ],
    },
    '32b': {
      text: '32...Bf6: Fil f6’ya gelir; d4 ve b2 karelerine bakar.',
      amac: 'Kara kareli fili uzun çapraza getirip b2 ve d4’ü kontrol etmek, ileride ...Bd4-f2 ile g3’e yönelmek.',
      neden: 'Motor 32...g5’i (+0.58) ve 32...h6’yı (+0.69) biraz daha iyi buluyor; 32...Bf6 sonrası +0.86. Bu, oyunun Beyaz için en iyi anıdır.',
      diger: [
        { move: '32...g5', text: '33.fxg5 Bxg5 34.a4 Bd8 (Motor: +0.58).' },
        { move: '32...Ra8', text: '33.Rxa8 Bxa8 34.Ne5 g5 (Motor: +0.74).' },
      ],
    },
    '33w': {
      text: '33.b3: Piyon c4 atını destekler.',
      amac: 'Atı c4’te sağlamlaştırmak ve b2’yi f6 filinin hedefinden çıkarmak.',
      neden: 'Motor **33.a4!**’ü öneriyor (+0.72): 33...Bd4 34.a5 Bg1 35.a6 ile geçer piyon hızla ilerler. 33.b3 yavaş (+0.30) ve Siyaha ...Bd4 ile karşı oyun zamanı verir.',
      diger: [
        { move: '33.a4', text: '33...Bd4 34.a5 Bg1 35.a6 ile a-piyonu tehlikeli (Motor: +0.72).' },
        { move: '33.Ne5', text: '33...g6 34.Rc7 Bd8 35.Rd7 (Motor: +0.47).' },
      ],
    },
    '33b': {
      text: '33...Bd4: Fil d4’e yerleşir; g1-a7 çaprazına bakar.',
      amac: 'Fili merkezde aktif tutmak ve ...Bf2 ile g3’e saldırmayı hazırlamak.',
      neden: 'Motor 33...Kf8 ile aynı değerde görüyor (+0.30 / +0.33). Fil a7 kalesine de bakıyor ama aradaki c5 piyonu çaprazı kapatıyor; bu ayrıntı 35. hamlede önemli olacak.',
      diger: [
        { move: '33...Kf8', text: '34.a4 Rb7 35.Rxb7 Bxb7 (Motor: +0.30).' },
        { move: '33...Bd8', text: '34.a4 Kf8 35.Ne5 Rxb3 (Motor: +0.48).' },
      ],
    },
    '34w': {
      text: '34.h3: Piyon g4 karesini hazırlar.',
      amac: 'g4 ile f5 piyonunu değiştirmek ve Siyahın e6 piyonunu zayıflatmak.',
      neden: 'Motor yine 34.a4’ü öneriyor (+0.26). 34.h3 sonrası değerlendirme sıfıra iner (−0.04), çünkü Siyah ...h5 ile g4’ü engelleyebilir ve g3 piyonu zayıflar.',
      diger: [
        { move: '34.a4', text: '34...Kf8 35.a5 Ra8 36.Rxa8+ (Motor: +0.26).' },
        { move: '34.Rd7', text: '34...Bg1 35.a4 Kf8 36.a5 (Motor: 0.00).' },
      ],
    },
    '34b': {
      text: '34...h5: Piyon h5’e gider; g4’ü kontrol eder.',
      amac: 'Beyazın g4 kırılmasını engellemek ve h4 ile g3 piyonuna yüklenmeyi hazırlamak.',
      neden: 'Motor 34...Bf2’yi (−0.03) ve 34...h5’i (−0.01) eşit görüyor. h5 sağlam bir seçim; f5 piyonu korunuyor.',
      diger: [
        { move: '34...Bf2', text: '35.g4 fxg4 36.hxg4 hxg4 (Motor: −0.03).' },
        { move: '34...Kf8', text: '35.a4 Rb7 36.Rxb7 Bxb7 (Motor: +0.11).' },
      ],
    },
    '35w': {
      text: '35.Nd2?: At c4’ten d2’ye çekilir.',
      amac: 'Atı f3’e getirip g5 veya d4 karelerine yöneltmek olabilir.',
      neden: 'Ciddi hata (Motor: −2.98). At c4’ü boşaltınca Siyahın c5 piyonu yürüyebilir: 35...c4! hem d3 filine saldırır hem de d4-a7 çaprazını açar. Motor 35.a4!’ü öneriyordu (0.00): 35...Bf2 36.a5 Bxg3 37.Nb6 ile a-piyonu karşı oyun verir.',
      diger: [
        { move: '35.a4', text: '35...Bf2 36.a5 Bxg3 37.Nb6 Bg2 ile denge (Motor: 0.00).' },
        { move: '35.Re7', text: '35...Bf2 36.a4 Bxg3 37.a5 (Motor: −0.42).' },
      ],
    },
    '35b': {
      text: '35...Bf2: Fil f2’ye gelip g3 piyonuna saldırır.',
      amac: 'Beyazın zayıf şah kanadı piyonlarını hedef almak: önce g3, sonra f4.',
      neden: 'İyi bir hamle (Motor: −1.08), ama en iyisi değil. Motor **35...c4!**’ü öneriyordu: 36.bxc4 Bxa7 37.cxd5 Rc8+ ile Siyah kaleyi kazanır (−3.17). Milov bu taktiği gözden kaçırdı.',
      diger: [
        { move: '35...c4', text: '36.bxc4 Bxa7 37.cxd5 Rc8+ 38.Kb3 exd5 ile Siyah kalite önde (Motor: −3.17).' },
        { move: '35...h4', text: '36.gxh4 c4 37.bxc4 Bxa7 (Motor: −2.19).' },
      ],
    },
    '36w': {
      text: '36.Rd7: Kale d7’ye gelip d5 filine saldırır.',
      amac: 'd5 filine saldırmak: fil yalnızca e6 piyonuyla korunuyor, bu yüzden ileride Bxf5 gelirse ...exf5 alınamaz (Rxd5).',
      neden: 'Motor en iyi hamle görüyor (−1.10). 36.Ra4 Bxg3 (−1.47) ve 36.Bc4 Bxc4 (−1.64) daha kötü.',
      diger: [
        { move: '36.Ra4', text: '36...Bxg3 37.Bc4 Re8 (Motor: −1.47).' },
        { move: '36.Bc4', text: '36...Bxc4 37.Nxc4 Bxg3 38.Re7 (Motor: −1.64).' },
      ],
    },
    '36b': {
      text: '36...Ra8: Kale a-hattına gelir ve a3 piyonuna bakar.',
      amac: 'a3 piyonunu kazanmak ve Beyazın geçer piyon umudunu bitirmek.',
      neden: 'Avantajı geri verir (Motor: 0.00). Motor 36...Bxg3’ü öneriyordu (−1.22): 37.Bxf5 Bxb3+ 38.Nxb3 exf5 ile Siyah piyon önde kalır.',
      diger: [
        { move: '36...Bxg3', text: '37.Bxf5 Bxb3+ 38.Nxb3 exf5 39.a4 Bxf4 (Motor: −1.22).' },
        { move: '36...g6', text: '37.Bc4 Bxg3 38.Bxd5 exd5 (Motor: −0.87).' },
      ],
    },
    '37w': {
      text: '37.Be2?: Fil e2’ye çekilir ve h5 piyonuna bakar.',
      amac: 'h5’i almak ve fili b3’ün savunmasına hazır tutmak.',
      neden: 'Hata (Motor: −2.38). g3 piyonu korumasız kalır. Motor **37.Bxf5!**’i öneriyordu (0.00): 37...exf5? 38.Rxd5 ile Beyaz fili geri alıp piyon önde kalır, bu yüzden Siyah 37...Bxb3+ 38.Kxb3 exf5 39.Rd3 ile eşitliğe razı olmalıydı.',
      diger: [
        { move: '37.Bxf5', text: '37...Bxb3+ 38.Kxb3 exf5 39.Rd3 Kf7 40.Nf3 ile denge (Motor: 0.00).' },
        { move: '37.a4', text: '37...Bxg3 38.Bxf5 Bxb3+ 39.Nxb3 exf5 (Motor: −0.81).' },
      ],
    },
    '37b': {
      text: '37...Bxg3: Fil g3 piyonunu alır.',
      amac: 'Bir piyon kazanmak ve f4’e saldırmak; h-piyonu geçer piyon olma yolunda.',
      neden: 'Motor 37...Rxa3 ile hemen hemen aynı değerde görüyor (−2.63 / −2.19). Bxg3 şah kanadında h-piyonunun önünü açtığı için mantıklı.',
      diger: [
        { move: '37...Rxa3', text: '38.Bxh5 Ra2+ 39.Kd3 Be1 ile Siyah piyonu geri alır (Motor: −2.63).' },
        { move: '37...g6', text: '38.Nc4 Bxg3 39.Ne5 (Motor: −1.27).' },
      ],
    },
    '38w': {
      text: '38.Rc7: Kale c7’ye gelip c5 piyonuna saldırır.',
      amac: 'c5’i alıp karşı oyun aramak.',
      neden: 'Hata (Motor: −4.21): kale g3 filinin çaprazına (g3-f4-e5-d6-c7) giriyor; aradaki f4 piyonu düşünce fil c7 ve d2’ye çatal yapar. Motor 38.Bxh5 (−2.33) veya 38.a4’ü (−2.44) öneriyordu.',
      diger: [
        { move: '38.Bxh5', text: '38...Rxa3 39.Nc4 Ra2+ 40.Kb1 (Motor: −2.33).' },
        { move: '38.a4', text: '38...Bxf4 39.Bxh5 Bxd2 40.Kxd2 (Motor: −2.44).' },
      ],
    },
    '38b': {
      text: '38...Bxf4: Fil f4 piyonunu alır; hem d2 atına hem c7 kalesine saldırır.',
      amac: 'Çatal: Beyaz iki taştan birini kaybedecek.',
      neden: 'Motor en iyi hamle görüyor (−4.45). 38...Rxa3 (−4.14) de güçlü ama Bxf4 hem piyon alır hem de iki taşı birden tehdit eder.',
      diger: [
        { move: '38...Rxa3', text: '39.Kb2 Ra8 40.Rxc5 Bxf4 (Motor: −4.14).' },
      ],
    },
    '39w': {
      text: '39.Nc4?: At c4’e gider ve d2’den kurtulur.',
      amac: 'Atı kurtarmak ve b6-e5 karelerine bakmak.',
      neden: 'Hata (Motor: −6.77): c7 kalesi hâlâ f4 filinin saldırısında ve korunmuyor. Motor 39.Rxc5’i öneriyordu (−4.33): 39...Rxa3 40.Kb2 Ra7 ile Beyaz piyon eksik ama taşları tamam.',
      diger: [
        { move: '39.Rxc5', text: '39...Rxa3 40.Kb2 Ra7 41.Nb1 ile malzeme kaybı bir piyonla sınırlı (Motor: −4.33).' },
        { move: '39.Rd7', text: '39...Rxa3 40.Kb2 Ra8 41.Bc4 (Motor: −5.14).' },
      ],
    },
    '39b': {
      text: '39...h4?!: h-piyonu ilerler.',
      amac: 'Geçer piyonu yürütmek; h3 piyonuna ve g3 karesine baskı.',
      neden: 'Hâlâ kazanıyor (Motor: −3.85) ama Siyah c7 kalesini almayı gözden kaçırdı. Motor 39...Bxc7 40.Bxh5 Bxc4 41.bxc4 Rxa3’ü öneriyordu (−6.62).',
      diger: [
        { move: '39...Bxc7', text: '40.Bxh5 Bxc4 41.bxc4 Rxa3 ile Siyah kale önde (Motor: −6.62).' },
        { move: '39...Be4+', text: '40.Kb2 Bxc7 41.Bxh5 Rd8 (Motor: −6.40).' },
      ],
    },
    '40w': {
      text: '40.Nb6: At b6’ya gelir; a8 kalesine ve d5 filine saldırır.',
      amac: 'Çift saldırıyla karşı şans aramak.',
      neden: 'Motor 40.Rd7’yi öneriyordu (−4.04): kaleyi f4 filinin çaprazından çıkarıp d5’e saldırmak. 40.Nb6 c7 kalesini hâlâ askıda bırakıyor (−6.06).',
      diger: [
        { move: '40.Rd7', text: '40...g5 41.a4 g4 42.Rxd5 (Motor: −4.04).' },
        { move: '40.Rxc5', text: '40...g5 41.Kc3 Rd8 42.a4 (Motor: −4.47).' },
      ],
    },
    '40b': {
      text: '40...Be4+: Fil şah çekerek tehditten kurtulur.',
      amac: 'Tempo kazanarak fili korumak; c7 kalesi yine tehdit altında.',
      neden: 'Motor 40...Bxc7 (−6.03) ile aynı değerde görüyor (−5.77). 40...Rxa3? 41.Nxd5 Bxc7 (−3.35) ise fili verir.',
      diger: [
        { move: '40...Bxc7', text: '41.Nxa8 Bxa8 42.Bc4 Kf7 ile Siyah iki fil karşılığı tek fil (Motor: −6.03).' },
        { move: '40...Rxa3', text: '41.Nxd5 Bxc7 42.Nxc7 Ra2+ (Motor: −3.35).' },
      ],
    },
    '41w': {
      text: '41.Kc3: Şah şahtan kaçar.',
      amac: 'Şahı c5 piyonuna ve vezir kanadına yakın tutmak.',
      neden: '41.Kd1 ve 41.Bd3 de aynı değerde (Motor: −5.96). Hangi kareye giderse gitsin Beyaz c7 kalesini kurtaramaz.',
      diger: [
        { move: '41.Kd1', text: '41...Bxc7 42.Nxa8 Bxa8 43.Bc4 (Motor: −5.96).' },
      ],
    },
    '41b': {
      text: '41...Rb8: Kale b6 atına saldırır; c7 kalesi zaten f4 filinin hedefinde.',
      amac: 'İki taşa aynı anda saldırmak: Beyaz ya atını ya kalesini kaybedecek.',
      neden: 'Motor 41...Bxc7’yi biraz daha güçlü buluyor (−6.00 / −4.38), ama 41...Rb8 de karar verir: 42.Rc8+ Rxc8 43.Nxc8 sonrası Siyah bir taş öndedir ve h-piyonu ilerler (Motor: −5.4). Klimenko terk etti.',
      diger: [
        { move: '41...Bxc7', text: '42.Nxa8 Bxa8 43.Kc4 Kf7 ile Siyah fil önde (Motor: −6.00).' },
        { move: '41...Be5+', text: '42.Kc4 Bxc7 43.Nxa8 Bxa8 (Motor: −5.74).' },
      ],
    },
  },
  sources: [
    { title: '365Chess: B23 Sicilian closed, Korchnoi variation (1.e4 c5 2.Nc3 e6 3.g3 d5)', url: 'https://www.365chess.com/eco/B23_Sicilian_closed_Korchnoi_variation' },
    { title: 'chess.com – Mr Perry’s Theorytalk: Mastering the Korchnoi Defense against the Closed Sicilian', url: 'https://www.chess.com/blog/Mr_Perry/mr-perry-s-theorytalk-mastering-the-korchnoi-defense-against-the-closed-sicilian' },
    { title: 'chess.com – Sicilian-phobia Part Two: Closed Sicilian', url: 'https://www.chess.com/article/view/sicilian-phobia-part-two---closed-sicilian' },
    { title: 'chess.com – Vasily Smyslov and the Closed Sicilian', url: 'https://www.chess.com/article/view/vassily-smyslov-and-the-closed-sicilian' },
    { title: 'Wikipedia: Vadim Milov', url: 'https://en.wikipedia.org/wiki/Vadim_Milov' },
  ],
  exercises: [
    { id: 'kml-1', kind: 'tekrar', plan: false, title: '...Ng4! ve c2 çatalı',
      source: 'Klimenko – Milov, Simferopol 1991 (10. hamle)',
      fen: 'r3kb1r/pp1b1ppp/4pn2/2p5/1n2PP2/4N1P1/PPPB2BP/R3K1NR b KQkq - 4 10',
      prompt: 'Vezirler değişti. Siyahın b4 atı c2’ye bakıyor, ama c2’yi e3 atı koruyor. Siyah bu savunucuyu nasıl etkisiz bırakır?',
      hint: 'e3 atına saldırın; Beyaz onu alırsa c2’de ne olur?',
      line: ['Ng4', 'Nxg4', 'Nxc2+'],
      explanation: '**10...Ng4! 11.Nxg4 Nxc2+** ve at şah ile a1 kalesine çatal yapar; 12.Kd1 Nxa1 sonrası Siyah bir kalite kazanır. Motor: ...Ng4 −0.7, sonraki en iyi ...Ba4 +0.1. Beyaz atı almazsa da piyon düşer: 11.Rc1 Nxe3 12.Bxe3 Nxa2 (−0.9).',
      link: 'Çatalın önündeki engel bir savunucuydu; ...Ng4 o savunucuyu saptırdı.' },
    { id: 'kml-2', kind: 'tekrar', plan: false, title: 'Atı tuzaktan kurtarmak',
      source: 'Klimenko – Milov, Simferopol 1991 (18. hamle)',
      fen: '4k2r/pp2bppp/4p3/2p5/b3PP2/4RNP1/PP1B3P/n1K2B2 b k - 0 18',
      prompt: 'Siyah kaliteyi geri verdi ve e3’teki atı ortadan kaldırdı. a1’deki at hâlâ köşede. Hamle sizde.',
      hint: 'a4 fili c2 karesini kontrol ediyor.',
      line: ['Nc2', 'Rc3', 'Nb4'],
      accept: { 2: ['Nd4'] },
      explanation: '**18...Nc2!** At a4 filinin desteğiyle köşeden çıkar; 19.Rc3 Nb4 (veya 19...Nd4) ile güvenli bir kareye ulaşır. Motor: ...Nc2 −0.2, sonraki en iyi ...f6 +2.7 (at yakalanır).',
      link: '17...Rxe3 ile kaliteyi geri vermenin amacı tam olarak bu hamleydi.' },
    { id: 'kml-3', kind: 'transfer', plan: false, title: 'Savunucuyu almak, sonra çatal',
      source: 'Hübner – Karpov, Tilburg turnuvası 1977 (23. hamle)',
      fen: 'r1r5/p2k3p/1p2pppb/3n4/8/P2PP1P1/1B1N1PKP/2R2R2 b - - 0 23',
      prompt: 'Vezirler çoktan değişti. Beyazın şahı g2’de, kalesi f1’de. Siyahın d5 atı e3 karesine bakıyor ama orada bir piyon var.',
      hint: 'e3 piyonunu fil ile alırsanız f2 piyonu geri alır mı? Sonra at nereye gelir?',
      line: ['Bxe3', 'fxe3', 'Nxe3+'],
      explanation: '**23...Bxe3! 24.fxe3 Nxe3+** ve at şah ile f1 kalesine çatal yapar; 25.Kf3 Nxf1 26.Nxf1 Rxc1 ile Siyah piyon ve kalite kazanır. Motor: ...Bxe3 −2.0, sonraki en iyi ...b5 −0.3.',
      link: 'Milov ...Ng4 ile c2’nin savunucusunu saptırdı; Karpov ...Bxe3 ile çatal karesindeki piyonu yok etti. İkisinde de vezirsiz oyunda at çatalı kaleyi kazandı.' },
    { id: 'kml-4', kind: 'transfer', plan: false, title: 'Çatal karesine yol açmak',
      source: 'Ciric – Keres, Yugoslavya-SSCB maçı, Belgrad 1961 (25. hamle)',
      fen: '2rr2k1/p3b3/4p3/1p1nNpp1/4N3/2PR2P1/PP3P2/3R2K1 w - - 0 25',
      prompt: 'Vezirler değişti. Siyah ...f5 ile e4 atına saldırdı. Beyaz atı geri mi çekmeli, yoksa daha güçlü bir hamle mi var?',
      hint: 'e5 atı e7 filine saldırabileceği bir kareye gitsin; e7’den şah çekip c8 kalesine bakabilir.',
      line: ['Ng6'],
      explanation: '**25.Ng6!** At e7 filine saldırır; 25...fxe4 26.Nxe7+ şah çekerken c8 kalesine ve d5 atına çatal yapar. Motor: Ng6 +1.0, sonraki en iyi 25.Nd2 −0.4.',
      link: 'Milov gibi Ciric de vezirsiz bir konumda atını şah çekeceği ve kaleye çatal yapacağı kareye yönlendirdi.' },
  ],
};
