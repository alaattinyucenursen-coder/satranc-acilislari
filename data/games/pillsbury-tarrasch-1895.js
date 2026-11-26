// Pillsbury – Tarrasch, Hastings 1895. Kaynak: PgnMentor (Pillsbury.pgn); hamleler chess.js ile doğrulandı.
export default {
  id: 'pillsbury-tarrasch-1895',
  theme: 'Pillsbury atağı',
  white: 'Harry Nelson Pillsbury', black: 'Siegbert Tarrasch',
  whiteShort: 'Pillsbury', blackShort: 'Tarrasch',
  event: 'Hastings', site: 'Hastings', year: 1895, eco: 'D55',
  variation: 'Vezir Gambiti Reddi, Ortodoks Savunma', result: '1-0',
  pgn: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. Nf3 Nbd7 6. Rc1 O-O 7. e3 b6 8. cxd5 exd5 9. Bd3 Bb7 10. O-O c5 11. Re1 c4 12. Bb1 a6 13. Ne5 b5 14. f4 Re8 15. Qf3 Nf8 16. Ne2 Ne4 17. Bxe7 Rxe7 18. Bxe4 dxe4 19. Qg3 f6 20. Ng4 Kh8 21. f5 Qd7 22. Rf1 Rd8 23. Rf4 Qd6 24. Qh4 Rde8 25. Nc3 Bd5 26. Nf2 Qc6 27. Rf1 b4 28. Ne2 Qa4 29. Ng4 Nd7 30. R4f2 Kg8 31. Nc1 c3 32. b3 Qc6 33. h3 a5 34. Nh2 a4 35. g4 axb3 36. axb3 Ra8 37. g5 Ra3 38. Ng4 Bxb3 39. Rg2 Kh8 40. gxf6 gxf6 41. Nxb3 Rxb3 42. Nh6 Rg7 43. Rxg7 Kxg7 44. Qg3+ Kxh6 45. Kh1 Qd5 46. Rg1 Qxf5 47. Qh4+ Qh5 48. Qf4+ Qg5 49. Rxg5 fxg5 50. Qd6+ Kh5 51. Qxd7 c2 52. Qxh7# 1-0`,

  summary: 'Hastings 1895’in 2. turunda (6 Ağustos) oynanan ve turnuvanın en ünlü maçı sayılan karşılaşma. Irving Chernev bu maçı “gelmiş geçmiş en büyük ikinci maç” diye anar. Tarrasch 11...c4 ile merkezdeki gerilimi kapatır ve vezir kanadında 3’e 2 piyon çoğunluğu kurar; Pillsbury buna Ne5 + f4 kurulumu, f4-f5 ile f6 piyonunu sabitleme ve sonunda g4-g5 piyon fırtınasıyla cevap verir. İki taraf da kendi kanadında oynadığı için maç bir **hız yarışıdır**. Motor, 27. ve 31. hamlelerdeki Beyaz hatalarından sonra Siyahı açıkça üstün görüyor (Motor: −1.9 civarı). Pillsbury yine de saldırısını dağıtmadan sürdürdü; Tarrasch 38...Bxb3 ile g-hattının açılmasına izin verdi ve 40...gxf6 ile şahının önünü tamamen açtı. Bundan sonra 42.Nh6!, 44.Qg3+ ve sessiz 45.Kh1! ile mat ağı kuruldu. Pillsbury, 22 yaşında ve dışarıdan bir aday olarak girdiği turnuvayı 16½/21 ile kazandı; Tarrasch 14 puanla dördüncü oldu.',
  intro: 'Vezir Gambiti Reddi’nin Ortodoks Savunması; Pillsbury’nin 4.Bg5’i o yıllarda hâlâ yeni sayılan, gücünü ilk gösteren oyunculardan birinin Pillsbury olduğu bir hamledir. Tarrasch 7...b6 ve ...Bb7 ile dönemin en popüler kurulumunu seçer, 8.cxd5 exd5 sonrası “asılı olmayan” ama dar bir merkez yapısı oluşur. Maçın asıl hikâyesi 11...c4 ile başlar: Siyah vezir kanadında piyon çoğunluğuyla geçer piyon üretmeye çalışırken Beyaz e5 karesini, f-piyonunu ve sonra g-piyonunu Siyah şahına doğru sürer. Bu maç, “piyon çoğunluğu mu, aktif taşlar mı?” sorusunun klasik örneği olarak hâlâ öğretilir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Atı **e5**’e yerleştirip **f4** ile desteklemek (Pillsbury kurulumu). Siyah ...c4 oynadıktan sonra d4 piyonu sağlamdır ve e5 atını korur; at ancak ...f6 ile, şah kanadını zayıflatma pahasına kovulabilir.',
      'b1-h7 çaprazındaki fil ve f3-g3-h4 rotasındaki vezirle h7’ye baskı yapmak; Siyah ...Ne4 ile değişim önerdiğinde değişmeyi kabul edip yerine piyon zinciriyle saldırmak.',
      '**f4-f5** ile f6 piyonunu yerinde sabitlemek: e6 ve g6 kareleri Siyah taşlarına kapanır, Siyah ...f5 ile rahatlayamaz ve f6 sürekli hedef olur.',
      'Kaleleri f-hattında ve dördüncü yatayda (Rf1-f4-h4/g4) şah kanadına taşımak; atları g4 ve h6 karelerine yönlendirmek.',
      'Vezir kanadında yalnızca gerekli savunmayı yapmak (R4f2, Nc1, b3) ve tüm enerjiyi şah kanadına harcamak.',
      'Son koz olarak **h3-g4-g5** ile g-hattını açmak; açılan hatta kale (Rg2, Rg1) ve vezirle (Qg3+) şaha ulaşmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...c4** ile gerilimi bozup vezir kanadında a-b-c piyonlarıyla **3’e 2 çoğunluk** kurmak; bu, dönemin ustalarının çoğuna göre Siyaha uzun vadeli üstünlük veren bir yapıydı.',
      '...a6, ...b5, ...b4 ve ...c3 ile piyonları yürütüp c3’te korunan bir geçer piyon elde etmek; vezir (…Qa4) ve kaleyle (…Ra8-a3) a2 ve b3’e baskı yapmak.',
      '...Ne4 ile Beyazın saldıran taşlarını, özellikle g5 filini ve b1 filini değiştirmek; değişimler saldırının gücünü azaltır.',
      '...Nf8 (ve sonra ...Nd7-f6) ile h7’yi ve g6’yı korumak; ...f6 ile e5 atını kovmak ama ardından f6’yı sağlam tutmak.',
      'd5 karesine fili yerleştirmek (...Bd5): fil hem e4 piyonunu korur hem a2-g8 çaprazında b3 ve a2’ye bakar.',
      'Şah kanadı hatları açılmadan materyal kapmamak: 38...fxg5 gibi hatları kapalı tutan hamlelerle önce saldırıyı durdurmak, sonra vezir kanadında kazanmak.',
    ] },
  },
  critical: [
    { move: '11b', title: 'Tarrasch ...c4 ile yarışı başlatıyor', text: 'Siyah c5-d4 gerilimini ...c4 ile kapatır ve Beyaz filini b1’e geri iter. Kazancı: vezir kanadında a-b-c piyon çoğunluğu ve ...b5-b4, ...c3 ile somut bir yürüyüş planı. Bedeli: d4 artık baskı altında değildir, Beyaz e5 karesini ve f4 ilerleyişini rahatça kullanabilir. Hillery’nin yorumladığı gibi, dönemin ustaları bu çoğunluğun Siyaha avantaj vereceğini düşünüyordu; Pillsbury aktif taşların daha önemli olduğunu gösterdi. Motor ise hamleyi oynanabilir buluyor (Motor: +0.3, 11...Ne4 +0.25 ile neredeyse aynı).' },
    { move: '14w', title: 'Pillsbury kurulumu: Ne5 + f4', text: 'e5’teki at d4 ve f4 piyonlarıyla desteklenir; Siyah onu ancak ...f6 ile, kendi şahının önünü zayıflatarak kovabilir. f4 piyonu da ileride f5’e gidip f6’yı sabitleyecektir. Bedeli: e3 geri kalmış bir piyon olur ve e4 karesi Siyah atına açılır. Motor 14.f4’ü eşit görüyor (Motor: 0.00); 14.h3 biraz daha iyi (+0.20) ama Pillsbury’nin planı açık ve tutarlıdır.' },
    { move: '21w', title: 'f5! piyon kıskacı', text: '19...f6 ve 20.Ng4 sonrası Beyaz 21.f5 ile f6 piyonunu yerinde sabitler. e6 ve g6 kareleri Siyah taşlarına kapanır, Siyah ...f5 ile rahatlayamaz ve f6 Ng4, Qh4 ve f-hattındaki kalelerin ortak hedefi olur. Motor burada tek iyi hamlenin f5 olduğunu gösteriyor (Motor: +0.1; 21.h3 −0.3). Maçın geri kalanında bütün Beyaz saldırısı bu piyonun üzerine kurulur.' },
    { move: '31w', title: '31.Nc1? Siyah kazanacak duruma geçiyor', text: 'a2 piyonunu korumak için at saldırıdan geri çekilir. Motor 31.Nf4! ile atın Ng6+ fikriyle saldırıya katılmasını gösteriyor (Motor: 0.00); oyundaki hamleden sonra 31...c3! ile Siyah korunan bir geçer piyon alır (Motor: −1.8). Macdonald’ın notları da bu hamleyi ağır biçimde eleştirir. Bundan sonra Beyaz ancak g-piyonu fırtınasıyla şans arayabilir.' },
    { move: '38b', title: '...Bxb3? açgözlü alım', text: 'Siyah piyon alırken g-hattının açılmasına izin verir. Doğrusu 38...fxg5! 39.Qxg5 Nf6 idi; hatlar kapalı kalır, Siyahın vezir kanadı üstünlüğü sürerdi (Motor: −1.6). Oyundaki hamleden sonra 39.Rg2! ve gxf6 tehdidiyle denge geri gelir (Motor: +0.3/+0.6). Bir görgü tanığı, E.G. Taylor’ın, seyircilerin bu sıralarda “görülecek bir şey kalmadı” diye salondan ayrılmaya başladığını yazdığı aktarılır; asıl dram ise tam bu noktada başladı.' },
    { move: '40b', title: '...gxf6? belirleyici hata', text: '40...Nxf6 doğruydu: at h7’yi ve g8’i korur, g-hattında Beyaz kalesinin önünde bir taş kalır (Motor: +0.7, pratikte dengeli). Piyonla almak g-hattını tamamen açar; Beyaz kalesi g2’den g7’ye, vezir h4’ten f6 ve h7’ye bakar (Motor: +2.1/+4.1). Bu, savunan tarafın “hatları kapalı tut” ilkesini ikinci kez çiğnemesidir.' },
    { move: '42w', title: 'Nh6! şah ağı', text: 'At g8 ve f7’yi kontrol eder; tehdit 43.Rg8#’tir. 42...Re8 olursa 43.Nf7# gelir. Siyah 42...Rg7 ile kapatmak zorunda kalır, 43.Rxg7 Kxg7 44.Qg3+! ile vezir g-hattına girer. Motor Nh6’yı +3.2 değerlendiriyor; diğer hamlelerde (42.Ne5 gibi) avantaj tamamen kaybolur (Motor: 0.0).' },
    { move: '45w', title: 'Kh1! sessiz hamle', text: 'Siyah şahı h6’da, Beyaz bir at eksik. Pillsbury şah çekmek yerine şahını köşeye çeker: g1 karesi kaleye açılır ve Rg1 ile Qg4+/Qh4# tehdit edilir (örneğin 45...c2? 46.Rg1 Kh5 47.Qg4+ Kh6 48.Qh4#). Rakibin b1’den gelecek şahı da önceden engellenmiş olur. Siyah veziri vermek zorunda kalır ve oyun kazanılan bir vezir sonuna döner.' },
  ],
  lessons: [
    'Siyah ...c4 oynadığında merkezdeki gerilim biter; Beyaz şah kanadında, Siyah vezir kanadında oynar. Böyle yarışlarda **hız** ve hatların ne zaman açıldığı her şeydir; bir tempo kaybı (27.Rf1, 31.Nc1) bütün dengeyi değiştirebilir.',
    'Ne5 + f4 kurulumu at kovulsa bile işe yarar: at g4’e geçer, f4-f5 ile f6 piyonu sabitlenir. **Sabitlenmiş bir piyon**, saldıranın bütün taşları için ortak hedef olur.',
    'Savunan taraf saldırı hatları açılmadan önce materyal almamalıdır: 38...Bxb3 ve 40...gxf6 (yerine 38...fxg5 ve 40...Nxf6) Siyaha maçı kaybettirdi.',
    'Kaybetmekte olan taraf için en iyi pratik şans, planına sadık kalıp rakibe zor sorular sormaktır. Pillsbury motorun −2 gördüğü konumda bile g-piyonu fırtınasını hazırladı ve rakibini hata yapmaya zorladı.',
    'Saldırıda **sessiz hamleler** (45.Kh1) bazen en güçlü devamdır: şah çekmek yerine yeni bir taşı (kaleyi) oyuna sokar ve rakibin karşı şahlarını önceden engeller.',
    'Taş değişimi saldırganı her zaman zayıflatmaz: 17.Bxe7 ve 18.Bxe4 sonrası Beyaz taşları azaldı ama e4 piyonu Siyah taşlarını kapattı ve f-piyonu yürüyüşü ön plana çıktı.',
    'Vezir kanadındaki geçer piyon ne kadar güçlü olursa olsun, mat tehdidi önce gelir: 51...c2 vezir yapmaya bir hamle uzaktayken 52.Qxh7# geldi.',
  ],
  notes: {
    '1w': {
      text: '1.d4: Beyaz merkezi vezir piyonuyla tutar; piyon e5 ve c5 karelerini kontrol eder ve c1 filine yol açar.',
      amac: 'Merkezde yer kaplamak ve ardından c4 ile d5’e baskı kurmak.',
      neden: 'Pillsbury hem 1.e4 hem 1.d4 oynayan bir oyuncuydu; Vezir Gambiti onun Hastings’teki silahlarından biriydi. 1.d4 daha kapalı, planlı bir oyun vaat eder.',
      diger: [
        { move: '1.e4', text: 'Dönemin daha yaygın açılışı; açık oyunlar ve İspanyol gibi hatlar (Motor: +0.4).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; sıklıkla aynı yapılara geçer (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah simetrik cevap verir ve merkezde e4 karesini kontrol eder.',
      amac: 'Merkezde eşit pay almak ve Beyazın e4 ile genişlemesini önlemek.',
      neden: 'Tarrasch klasik okulun temsilcisiydi; merkezi piyonla tutmak onun ilkelerine uyar. Hint savunmaları (1...Nf6) o yıllarda henüz yaygın değildi.',
      diger: [
        { move: '1...Nf6', text: 'Modern Hint sistemlerine giden esnek hamle (Motor: +0.3).' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. c4 piyonu d5’e saldırır.',
      amac: 'd5 piyonunu merkezden uzaklaştırmak ya da Siyahı e6/c6 ile savunmaya zorlamak.',
      neden: 'Siyah 2...dxc4 alırsa Beyaz e4 ile merkezi genişletir ve piyonu genellikle geri kazanır. Gambit “gerçek” bir feda değildir.',
      diger: [
        { move: '2.Nf3', text: 'Daha sakin, c4’ü sonraya bırakır (Motor: +0.2).' },
        { move: '2.Bf4', text: 'Londra tipi kurulum; c4 baskısından vazgeçer.' },
      ],
    },
    '2b': {
      text: '2...e6: Vezir Gambiti Reddi. d5 piyonu e6 ile sağlamca korunur.',
      amac: 'Merkezi korumak ve f8 filini Be7 ile geliştirmek.',
      neden: 'Bedeli, c8 filinin önünün kapanmasıdır; Tarrasch bu sorunu ...b6 ve ...Bb7 ile çözecek. Tarrasch’ın adını taşıyan 3...c5 savunması (Tarrasch Savunması) bu maçta seçilmedi.',
      diger: [
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü; Macdonald’ın notlarına göre oynanabilir ama Siyah piyonu uzun süre tutamaz (Motor: +0.27).' },
        { move: '2...c6', text: 'Slav Savunması; c8 filinin önü açık kalır (Motor: +0.3).' },
      ],
    },
    '3w': {
      text: '3.Nc3: At d5’e baskıyı artırır ve e4 karesini kontrol eder.',
      amac: 'd5 üzerindeki baskıyı ikiye çıkarmak ve ileride e4 kırılmasını hazırlamak.',
      neden: 'Nc3, Bg5 ile f6 atını bağlamayı anlamlı kılar: bağlı at d5’i koruyamazsa c3 atı d5’e baskı yapar.',
      diger: [
        { move: '3.Nf3', text: 'Bazı keskin hatları (Nimzo yapıları gibi) önleyen sıra (Motor: +0.4).' },
        { move: '3.cxd5', text: 'Değişim Varyantı; yapıyı hemen netleştirir (Motor: +0.1).' },
      ],
    },
    '3b': {
      text: '3...Nf6: Siyah gelişir; at d5’i korur ve e4’ü kontrol eder.',
      amac: 'Gelişimi tamamlamak ve kısa rok hazırlamak.',
      neden: 'En doğal hamle. ...Be7 ve ...O-O ile Ortodoks kurulum oluşturulacak.',
      diger: [
        { move: '3...Be7', text: 'Bg5 bağını önceden engelleyen modern sıra.' },
        { move: '3...c5', text: 'Tarrasch Savunması; Siyah izole piyon karşılığında serbest taş oyunu alır.' },
      ],
    },
    '4w': {
      text: '4.Bg5: Fil, d5’in savunucusu olan f6 atını bağlar.',
      amac: 'Siyahın d5 üzerindeki kontrolünü azaltmak ve gelişimini zorlaştırmak.',
      neden: 'Macdonald’ın notlarına göre bu hamlenin gücünü ilk gösteren Pillsbury’dir; bugün rutin sayılır ve 20. yüzyılın en sık oynanan devamı olmuştur.',
      diger: [
        { move: '4.Nf3', text: 'Bg5’i bir hamle erteler (Motor: +0.26).' },
        { move: '4.cxd5', text: 'Değişim yapısı; motor en ufak farkla bunu öne koyuyor (Motor: +0.37).' },
      ],
    },
    '4b': {
      text: '4...Be7: Bağı kaldırır; fil f6 atının arkasına geçer.',
      amac: 'Bağdan kurtulup kısa roku hazırlamak.',
      neden: 'Ortodoks Savunmanın temel hamlesi. Fil e7’de pasif görünür ama Siyahın şahını sağlamlaştırır.',
      diger: [
        { move: '4...Nbd7', text: 'Cambridge Springs ve Elefant tuzağı fikirlerine giden sıra.' },
        { move: '4...c5', text: 'Merkezde erken karşı saldırı (Motor: +0.39).' },
      ],
    },
    '5w': {
      text: '5.Nf3: Doğal gelişim; at e5 karesine bakar.',
      amac: 'Kısa roka hazırlanmak ve ileride Ne5 ile saldırı karesini kullanmak.',
      neden: 'Bu at maçın kahramanı olacak: 13.Ne5 ile merkezde güçlü bir kareye inecek.',
      diger: [
        { move: '5.e3', text: 'Önce merkezi sağlamlaştırır; aynı yapılara geçer (Motor: +0.21).' },
      ],
    },
    '5b': {
      text: '5...Nbd7: At d7’den f6’yı destekler ve ...c5 kırılmasına yardım eder.',
      amac: 'Gelişimi tamamlamak, f6 atını bağdan sonra yeniden korumak.',
      neden: 'Klasik Ortodoks kurulum. Bu at ileride f8’e geçip h7’yi savunacak.',
      diger: [
        { move: '5...O-O', text: 'Önce rok; motor çok ufak farkla tercih ediyor (Motor: +0.16).' },
        { move: '5...h6', text: 'Fili sorgulamak; modern Tartakower fikirlerine yol açar (Motor: +0.17).' },
      ],
    },
    '6w': {
      text: '6.Rc1: Pillsbury kaleyi erken c-hattına koyar.',
      amac: 'c-hattı açılırsa (…dxc4 ya da …c5 sonrası) kaleyi hazır tutmak.',
      neden: 'Ortodoks Savunmada Rc1 ana hatlardan biridir; Siyahın …c5 fikrini ve c7’deki potansiyel zayıflığı hedef alır.',
      diger: [
        { move: '6.e3', text: 'Önce merkez; motor biraz öne koyuyor (Motor: +0.32).' },
        { move: '6.Qc2', text: 'Vezir c-hattına; Rubinstein’ın sık seçtiği kurulum (Motor: +0.25).' },
      ],
    },
    '6b': {
      text: '6...O-O: Siyah şahını güvenceye alır.',
      amac: 'Şahı kenara alıp kaleleri birleştirmek.',
      neden: 'Gelişim bitti, sıra merkezi oyunda. Rok aynı zamanda gelecekteki ...c5 kırılması için hazırlıktır.',
      diger: [
        { move: '6...c6', text: 'Kapalı, sağlam kurulum; sonra ...dxc4 ve Capablanca’nın ...Nd5 manevrası (Motor: +0.35).' },
      ],
    },
    '7w': {
      text: '7.e3: d4 desteklenir ve f1 filinin önü açılır.',
      amac: 'Merkezi sağlamlaştırıp Bd3 ile gelişimi tamamlamak.',
      neden: 'Bu yapıda e3 kaçınılmazdır; motor da en iyi hamle olarak görüyor (Motor: +0.27).',
      diger: [
        { move: '7.cxd5', text: 'Yapıyı hemen netleştirir (Motor: +0.15).' },
      ],
    },
    '7b': {
      text: '7...b6: Siyah filini b7’ye çıkarmaya hazırlanır.',
      amac: 'Kapalı c8 filine uzun çaprazda iş bulmak ve ...c5 ile merkezi tartışmak.',
      neden: 'Macdonald’ın notlarına göre bu kurulum o dönemde Vezir Gambiti Reddi’ne karşı en popüler savunmaydı. Modern Tartakower Varyantı ise önce ...h6 ile fili sorgular; burada h6 oynanmadığı için ilerideki bazı taktikler farklı işler.',
      diger: [
        { move: '7...h6', text: 'Önce fili soran modern sıra; motor biraz tercih ediyor (Motor: +0.24).' },
        { move: '7...c6', text: 'Ortodoks ana hat; ...dxc4 ve ...Nd5 ile rahatlama (Motor: +0.27).' },
      ],
    },
    '8w': {
      text: '8.cxd5: Beyaz merkezdeki gerilimi değişimle çözer.',
      amac: 'Siyahın ...dxc4 ve ...Bb7 ile g2’ye uzanan çaprazı açmasını önlemek.',
      neden: 'Değişimden sonra b7 fili kendi d5 piyonuna çarpar. Ayrıca 8...Nxd5 artık taktik olarak kötüdür (aşağıya bakın), bu yüzden Siyah yapı seçiminde özgür değildir.',
      diger: [
        { move: '8.Qc2', text: 'Gerilimi korur; Siyah …dxc4 ile rahatlayabilir (Motor: +0.17).' },
        { move: '8.Bd3', text: 'Gelişim; ama …dxc4 Bxc4 …Bb7 ile Siyahın fili açılır.' },
      ],
    },
    '8b': {
      text: '8...exd5: Siyah piyonla alır; e-hattı yarı açılır ve klasik “Carlsbad” benzeri yapı oluşur.',
      amac: 'Merkezde d5 piyonunu tutmak ve ...c5 ile aktif oyun aramak.',
      neden: 'Bu hamle neredeyse zorunludur: 8...Nxd5? 9.Nxd5 exd5 10.Bxe7 Qxe7 11.Rxc7 ile c7 düşer, çünkü d7 atı vezirin c7’yi korumasını engeller (Motor: +1.5/+1.8). Modern Tartakower’de (…h6 Bh4 araya girmişken) 8...Nxd5 normal bir devamdır.',
      diger: [
        { move: '8...Nxd5', text: '9.Nxd5 exd5 10.Bxe7 Qxe7 11.Rxc7 ve Beyaz piyon kazanır (Motor: +1.8).' },
      ],
    },
    '9w': {
      text: '9.Bd3: Fil d3’ten h7’yi hedefler.',
      amac: 'Şah kanadı saldırısının ilk taşını yerleştirmek ve rok hazırlamak.',
      neden: 'Bd3, b1-h7 çaprazını kullanır; ilerideki Ne5, f4 ve Qf3-h3 planıyla uyumludur.',
      diger: [
        { move: '9.Qa4', text: 'a7 ve c6’yı hedefleyen ilginç bir fikir; motorun ilk tercihi (Motor: +0.41).' },
        { move: '9.Be2', text: 'Daha sakin; fil …c5-c4 ile itilmez (Motor: +0.35).' },
      ],
    },
    '9b': {
      text: '9...Bb7: Fil uzun çaprazda.',
      amac: '...c5 sonrası d5’i desteklemek ve gerekirse ...c4 ile vezir kanadında oynamak.',
      neden: 'Fil şimdilik d5 piyonunun arkasında pasif görünse de, d5 sağlamlaştıkça Siyahın merkezini korur.',
      diger: [
        { move: '9...c5', text: 'Önce merkez kırılması; aşağı yukarı aynı (Motor: +0.36).' },
      ],
    },
    '10w': {
      text: '10.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye alıp f1 kalesini oyuna hazırlamak.',
      neden: 'Gelişim tamamlandı. Kısa rok, f4-f5 planında f-hattındaki kaleyi de hazır tutar.',
      diger: [
        { move: '10.Qc2', text: 'Önce h7’ye ikinci bir bakış; motor ufak farkla tercih ediyor (Motor: +0.37).' },
        { move: '10.Bf5', text: 'Fili değişime sunmak ve Siyahın d7 atını sorgulamak (Motor: +0.33).' },
      ],
    },
    '10b': {
      text: '10...c5: Siyah merkezde karşı oyun arar; c5 ile d4’e baskı.',
      amac: 'c-piyonunun geri kalmasını önlemek ve merkezde gerilim yaratmak.',
      neden: 'Macdonald bunu stratejik bir zorunluluk sayar: aksi halde c7 piyonu Beyazın c1 kalesine karşı geri kalmış ve zayıf olurdu.',
      diger: [
        { move: '10...Re8', text: 'Önce kale; c5’i sonraya bırakır (Motor: +0.40).' },
        { move: '10...Ne4', text: 'Hemen değişim arayışı (Motor: +0.42).' },
      ],
    },
    '11w': {
      text: '11.Re1: Kale e-hattına geçer.',
      amac: 'Merkezde olası bir açılma (e4) için kaleyi hazırlamak.',
      neden: 'Macdonald bunu tempo kaybı sayar, çünkü kale 22. hamlede f1’e geri dönecek. Motor da 11.Bf5 ya da 11.Qc2’yi ufak farkla öne koyuyor.',
      diger: [
        { move: '11.Bf5', text: 'd7 atını değişime zorlayıp ...c4 sonrası filin itilmesini önler (Motor: +0.39).' },
        { move: '11.Qc2', text: 'h7’ye baskı ve c-hattında gerilim (Motor: +0.38).' },
      ],
    },
    '11b': {
      text: '11...c4: Kritik karar. Tarrasch gerilimi bozar ve vezir kanadında piyon çoğunluğu kurar.',
      amac: '...a6, ...b5, ...b4 ile vezir kanadı piyonlarını yürütüp sonunda geçer piyon elde etmek.',
      neden: 'Hamle aynı zamanda tempoyla Beyaz filini b1’e geri iter. Bedeli: d4 artık baskı altında değildir ve e5 karesi Beyaz atı için kalıcı bir üs olur. Dönemin anlayışında çoğunluk Siyaha avantaj sayılırdı; motor iki planı da eşit görüyor.',
      diger: [
        { move: '11...Ne4', text: 'Önce taş değişimi; gerilim korunur (Motor: +0.25).' },
        { move: '11...a6', text: 'Gerilimi koruyup vezir kanadında beklemek (Motor: +0.34).' },
      ],
    },
    '12w': {
      text: '12.Bb1: Fil b1-h7 çaprazında kalır.',
      amac: 'h7’ye bakmayı sürdürüp vezirle birlikte bataryaya hazırlanmak.',
      neden: 'Bc2 de aynı çaprazdadır ama b1’de fil …b5-b4 ile rahatsız edilmez. Motor 12.Bc2’yi az farkla öne koyuyor (+0.35 / +0.29).',
      diger: [
        { move: '12.Bc2', text: 'Kale a1’i boğmadan aynı çapraz (Motor: +0.35).' },
        { move: '12.Bf5', text: 'Fili aktif tutup d7 atını sorgulamak (Motor: +0.34).' },
      ],
    },
    '12b': {
      text: '12...a6: ...b5 hazırlığı.',
      amac: 'b5 piyonunu a6 ile destekleyip çoğunluğu yürütmeye başlamak.',
      neden: 'Doğrudan 12...b5? 13.Nxb5 ile piyon kaybettirir (Motor: +0.6). Önce a6 gerekir.',
      diger: [
        { move: '12...b5', text: '13.Nxb5 Qb6 14.a4 ve Beyaz piyon kazanır (Motor: +0.59).' },
        { move: '12...Re8', text: 'Önce merkez; …Nf8 manevrasına hazırlık (Motor: +0.34).' },
      ],
    },
    '13w': {
      text: '13.Ne5: At e5’e iner. d4 piyonu tarafından korunur ve Siyah piyonları onu kovamaz.',
      amac: 'Merkezde kalıcı bir üs kurup f4 ile şah kanadı saldırısını hazırlamak.',
      neden: '...c4 sonrası d4 sağlamdır, bu yüzden e5 atı uzun süre orada kalabilir. Motor da en iyi hamle olarak görüyor (Motor: +0.21).',
      diger: [
        { move: '13.a4', text: 'Siyahın …b5’ini engellemeye çalışmak; vezir kanadında oyun (Motor: +0.10).' },
        { move: '13.a3', text: 'Siyah …b4’e hazırlık (Motor: +0.10).' },
      ],
    },
    '13b': {
      text: '13...b5: Siyah planını sürdürür.',
      amac: '...b4 ile c3 atını kovup vezir kanadında hat açmak.',
      neden: 'Motor bunu doğru buluyor (Motor: +0.16); 13...Re8 ya da 13...h6 daha yavaş ve Beyaza f4 için zaman verir (+0.55/+0.61).',
      diger: [
        { move: '13...Re8', text: 'Önce kale; Beyaz 14.f4 ile kurulumu tamamlar (Motor: +0.55).' },
        { move: '13...Nxe5', text: '14.dxe5 sonrası e5 piyonu f6 atını kovar; Siyah şah kanadında yer kaybeder.' },
      ],
    },
    '14w': {
      text: '14.f4: Pillsbury kurulumu tamam: at e5’te, f4 piyonu destekte.',
      amac: 'e5 atını sağlamlaştırmak ve f4-f5 ile şah kanadına ilerlemek; f-hattını kalelere hazırlamak.',
      neden: 'At …Nxe5 ile alınırsa fxe5 ile f-hattı açılır. Macdonald, hamlenin e3’ü geri kalmış bir piyon bıraktığını not eder. Motor 14.h3’ü biraz öne koyuyor (+0.20) ama 14.f4 de eşit (0.00).',
      diger: [
        { move: '14.h3', text: 'Bekleyiş; g4 karesini kontrol eder (Motor: +0.20).' },
        { move: '14.Qf3', text: 'Önce vezir; f4’ü bir hamle erteler (Motor: +0.11).' },
      ],
    },
    '14b': {
      text: '14...Re8: Kale e-hattına; e3’e bakar ve f8 karesini at için boşaltır.',
      amac: '...Nf8 ile şah kanadına savunucu getirmek.',
      neden: 'Plan mantıklı ama yavaştır. Motor 14...Ne4! ile hemen değişim yapmayı öneriyor: 15.Nxd7 Qxd7 16.Bxe7 Qxe7 ile Beyazın saldıran taşları azalır (Motor: 0.00; oyundaki hamle +0.53).',
      diger: [
        { move: '14...Ne4', text: '15.Nxd7 Qxd7 16.Bxe7 Qxe7 ve denge (Motor: 0.00).' },
        { move: '14...b4', text: '15.Na4 ile vezir kanadında hemen oyun (Motor: +0.12).' },
      ],
    },
    '15w': {
      text: '15.Qf3: Vezir şah kanadına geçer.',
      amac: 'Qh3 ya da Qg3 ile h7 ve g7’ye baskı kurmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.53). Vezir f3’ten d5’e de bakar ve e4 karesini kontrol eder.',
      diger: [
        { move: '15.a3', text: 'Vezir kanadında …b4’e karşı önlem (Motor: +0.48).' },
        { move: '15.a4', text: '…b5 piyonunu sorgulamak (Motor: +0.40).' },
      ],
    },
    '15b': {
      text: '15...Nf8: At f8’e çekilir: h7’yi korur ve g6’ya gidebilir.',
      amac: 'Şah kanadını taşla savunmak; klasik savunma manevrası.',
      neden: 'Macdonald’a göre 15...h6 16.Bh4 Beyaza ufak üstünlük verirdi. Motor 15...Ne4 ile değişimi yine eşit güçte görüyor.',
      diger: [
        { move: '15...Ne4', text: '16.Bxe7 Qxe7 ile değişim (Motor: +0.52).' },
        { move: '15...h6', text: '16.Bh4 ve fil bağı sürer (Motor: +0.55).' },
      ],
    },
    '16w': {
      text: '16.Ne2: At e2’den g3 ya da f4 üzerinden saldırıya katılacak.',
      amac: 'Vezir kanadında işi kalmayan atı şah kanadına taşımak.',
      neden: 'Ama hamle Siyaha …Ne4 için tam zamanı verir. Motor 16.Rf1 ya da 16.Qg3’ü daha iyi buluyor (+0.55); oyunda değerlendirme +0.09’a iner. Macdonald da 16.Qg3!? önerir.',
      diger: [
        { move: '16.Rf1', text: 'Kaleyi önceden f-hattına almak (Motor: +0.55).' },
        { move: '16.Qg3', text: '16...Ne4 17.Bxe4 dxe4 18.Red1 ile Beyaz biraz daha iyi (Motor: +0.53).' },
      ],
    },
    '16b': {
      text: '16...Ne4!: At e4’e çıkar; g5 filini ve c3’ü rahatsız eder.',
      amac: 'Saldırıyı yavaşlatmak için taş değişmek; özellikle Beyazın b1 ve g5 fillerini ortadan kaldırmak.',
      neden: 'Macdonald’ın notlarına göre değişimler Beyazın şah kanadı şansını azalttığı için Siyaha uygundur ve şanslar eşitlenir. Ayrıca …f6 ile e5 atını kovmak tehdidi doğar. Motor da en iyi hamle olarak görüyor (Motor: +0.10).',
      diger: [
        { move: '16...Rc8', text: 'Vezir kanadında oyun; Beyaz 17.Ng3 ile taşlarını toplar (Motor: +0.39).' },
      ],
    },
    '17w': {
      text: '17.Bxe7: Beyaz filini değişir.',
      amac: 'Siyahın …f6 sonrası parça kazanma fikrini önlemek ve e7 filini ortadan kaldırmak.',
      neden: 'Macdonald’a göre Siyah …f6 ile g5 filini ve e5 atını aynı anda tehdit edecekti. Bu değişim neredeyse zorunlu (Motor: +0.05).',
      diger: [
        { move: '17.Bxe4', text: 'Önce at; sonuç benzer (Motor: 0.00).' },
      ],
    },
    '17b': {
      text: '17...Rxe7: Kale alır ve e-hattında kalır.',
      amac: 'e7’den yedinci yatayı korumak ve vezirin vezir kanadında serbest kalmasını sağlamak.',
      neden: 'Motor 17...Qxe7’yi biraz daha iyi görüyor (−0.20); Macdonald da 17...Qxe7 18.Bxe4 dxe4 19.Qg3 ile denge verir. Kaleyle almak e8’deki kaleyi ve veziri esnek tutar.',
      diger: [
        { move: '17...Qxe7', text: '18.Bxe4 dxe4 19.Qg3 Qd6 ve denge (Motor: −0.20).' },
      ],
    },
    '18w': {
      text: '18.Bxe4: Beyaz e4 atını da değişir.',
      amac: 'Siyahın en aktif taşını ortadan kaldırmak.',
      neden: 'Macdonald’a göre Pillsbury filini isteksizce verdi, çünkü e4 atını başka yolla kovmak mümkün değildi. Hillery ise değişimlerin, b7 filinin şah kanadı savunmasına yardım edemediği için Beyaza uygun olduğunu söyler.',
      diger: [
        { move: '18.Ng4', text: 'Değişimden kaçmak; Siyah …Nd2 ile rahatlar (Motor: −0.15).' },
        { move: '18.Qh3', text: '18...f6 ile at kovulur (Motor: −0.28).' },
      ],
    },
    '18b': {
      text: '18...dxe4: Siyah piyonla alır; e4 piyonu f3 ve d3 karelerini kontrol eder.',
      amac: 'Veziri kovmak ve d5 karesini fili için boşaltmak.',
      neden: 'Zorunlu bir geri alım: 18...f6? 19.Bc2 fxe5 20.fxe5 ile Beyaz parça kazanır (Motor: +3.0). Macdonald’a göre bu alım Beyaza d4’te korunan bir geçer piyon verir; ama b7 filinin çaprazı açılır.',
      diger: [
        { move: '18...f6', text: '19.Bc2 fxe5 20.fxe5 ve Beyaz kazançlı (Motor: +3.0).' },
      ],
    },
    '19w': {
      text: '19.Qg3: Vezir g3’ten g7’ye baskı kurar ve e5 atını destekler.',
      amac: 'Vezirle g-hattında baskı; e3 piyonunu da arkadan korumak.',
      neden: 'Motorun ilk tercihi (Motor: +0.05). Macdonald iki tarafın da kazançlı çıktığını söyler: Siyahın vezir kanadı oyunu yavaşladı, Beyazın e3 piyonu korundu.',
      diger: [
        { move: '19.Qh3', text: '19...f6 20.Ng4 ve vezir g-hattından uzakta (Motor: −0.22).' },
        { move: '19.Qh5', text: '19...f6 ile at kovulur, vezir pasif (Motor: −0.31).' },
      ],
    },
    '19b': {
      text: '19...f6: Siyah atı kovar.',
      amac: 'e5’teki güçlü atı merkezden uzaklaştırmak ve Beyazın f-piyonunun f6’ya kadar gelmesini önlemek.',
      neden: 'Bedeli: e6 ve g6 kareleri zayıfladı ve f6 piyonu ileride hedef olacak. Motor 19...Kh8 ile aynı değeri veriyor (0.00); ikisi de oynanabilir.',
      diger: [
        { move: '19...Kh8', text: '20.f5 f6 21.Ng4 Qd7 ve benzer yapı (Motor: 0.00).' },
        { move: '19...Bd5', text: 'Fili merkezde tutmak (Motor: +0.15).' },
      ],
    },
    '20w': {
      text: '20.Ng4: Tek iyi kare. At g4’ten f6 ve h6’ya bakar.',
      amac: 'Atı saldırıda tutmak ve Nxf6+ tehdidi yaratmak.',
      neden: 'Diğer hamleler Beyazın girişimini bitirir: 20.f5? fxe5 21.dxe5 Qc7 ile Siyah parça kazanır (Motor: −1.5). Macdonald da Ng4’ün Nxf6+ tehdit ettiğini not eder.',
      diger: [
        { move: '20.f5', text: '20...fxe5 21.dxe5 Qc7 ve Siyah parça kazanır (Motor: −1.52).' },
        { move: '20.Nc4', text: 'At saldırıdan kopar; Siyahın vezir kanadı oyunu hızlanır.' },
      ],
    },
    '20b': {
      text: '20...Kh8: Şah g-hattından ve g8-a2 çaprazından çekilir.',
      amac: 'Olası Nh6+ ve vezir şahlarından kaçmak; g8 karesini at için boşaltmak.',
      neden: 'Motorun ilk tercihi (Motor: +0.02). Şah h8’de g-hattının açılmasına karşı daha güvenlidir.',
      diger: [
        { move: '20...Rc7', text: 'Kaleyi c-hattına (Motor: +0.30).' },
      ],
    },
    '21w': {
      text: '21.f5!: f6 piyonu sabitlenir; e6 ve g6 kareleri artık Beyazın.',
      amac: 'Siyahın ...f5 ile rahatlamasını engellemek ve f6’yı kalıcı bir hedef yapmak.',
      neden: 'Macdonald’a göre f5 Siyahın şah kanadını sıkıştırır ve f4 karesini bir taşa açar (sonra Rf4 gelecek). Motor da tek iyi hamle olarak görüyor (Motor: +0.10; 21.h3 −0.29, 21.h4 −0.38).',
      diger: [
        { move: '21.h3', text: 'Yavaş; Siyah …Qd6 ve …b3 fikirleriyle hızlanır (Motor: −0.29).' },
        { move: '21.h4', text: 'Piyon fırtınası erken; f-piyonu desteksiz kalır (Motor: −0.38).' },
      ],
    },
    '21b': {
      text: '21...Qd7: Vezir f5 piyonuna baskı yapar ve d-hattına bağlanır.',
      amac: 'f5’i hedef almak ve gerekirse …Qd6 ile f6’yı ikinci kez korumak.',
      neden: 'Macdonald, hamlenin …f5 kırılmasını da hazırladığını yazar. Motor en iyi hamle olarak görüyor (Motor: −0.04).',
      diger: [
        { move: '21...Bd5', text: 'Önce fil merkeze (Motor: 0.00).' },
      ],
    },
    '22w': {
      text: '22.Rf1: Kale f-hattına döner.',
      amac: 'f5 piyonunu desteklemek ve Rf4-h4/g4 manevrasına hazırlanmak.',
      neden: 'Macdonald, 11.Re1’in tempo kaybı olduğunu bu hamleyle gösterir. Motor 22.Qf4’ü az farkla öne koyuyor (+0.04 / −0.08).',
      diger: [
        { move: '22.Qf4', text: 'Vezir f-hattında; Nf2-h3 rotası (Motor: +0.04).' },
        { move: '22.h4', text: 'Erken piyon atağı; 22...h5 ile durur (Motor: −0.64).' },
      ],
    },
    '22b': {
      text: '22...Rd8: Siyah …Qd6 ile f6’yı ikinci kez korumak için d-hattını hazırlar.',
      amac: 'f6’yı savunmak ve d4 piyonuna baskı kurmak.',
      neden: 'Plan pasif. Motor 22...Bd5! ile filin merkeze gelmesini öneriyor (Motor: −0.17; oyundaki hamle +0.40).',
      diger: [
        { move: '22...Bd5', text: '23.Qh4 a5 ile Siyah vezir kanadında hızlanır (Motor: −0.17).' },
        { move: '22...a5', text: 'Vezir kanadı piyonlarını hemen yürütmek (Motor: +0.12).' },
      ],
    },
    '23w': {
      text: '23.Rf4: Kale dördüncü yataya çıkar.',
      amac: 'e4 piyonunu hedef almak ve kaleyi h4/g4 üzerinden şah kanadına taşımak.',
      neden: 'Macdonald hamlenin Siyahın izole e-piyonunu hedeflediğini yazar ve 23.Qh4 Bd5’i eşit bulur. Motor ise 23.Qe1!? ile vezirin a5’e geçip vezir kanadını durdurmasını tercih ediyor (Motor: +0.36; oyundaki hamle −0.15).',
      diger: [
        { move: '23.Qe1', text: 'Vezir a5’e geçip …a5’i engeller (Motor: +0.36).' },
        { move: '23.h4', text: 'h-piyonuyla destek (Motor: +0.27).' },
      ],
    },
    '23b': {
      text: '23...Qd6: Vezir f4 kalesine ve g3’e bakar.',
      amac: 'f6’yı korumak ve vezir değişimi önermek.',
      neden: 'Macdonald’a göre konum artık eşit. Motor 23...a5! ile vezir kanadında hızlanmayı öneriyor (Motor: −0.14).',
      diger: [
        { move: '23...a5', text: '24.Qe1 Ra8 ile çoğunluk ilerler (Motor: −0.14).' },
        { move: '23...Bd5', text: 'Fili merkeze (Motor: −0.05).' },
      ],
    },
    '24w': {
      text: '24.Qh4: Vezir h4’te; h7 ve f6 hedefte.',
      amac: 'Bütün taşları şah kanadına toplamak; vezir değişiminden kaçınmak.',
      neden: 'Saldırgan ama vezir kanadını savunmasız bırakır. Motor 24.Nf2’yi biraz öne koyuyor (+0.11 / −0.26).',
      diger: [
        { move: '24.Nf2', text: 'At e4’e ve h3-g4’e (Motor: +0.11).' },
        { move: '24.a3', text: 'Vezir kanadını önceden sağlamlaştırmak (Motor: 0.00).' },
      ],
    },
    '24b': {
      text: '24...Rde8: Kale e-hattına geri döner.',
      amac: 'e4 piyonunu desteklemek ve e7 kalesiyle ikiye katlamak.',
      neden: 'Tarrasch tempoları savunmaya harcıyor. Motor 24...Rc8 ile vezir kanadında hızlı oynamayı öneriyor (Motor: −0.27). Macdonald 24...Nd7 25.Rf2’yi eşit bulur.',
      diger: [
        { move: '24...Rc8', text: '25.Rff1 b4 ile vezir kanadı yürüyüşü (Motor: −0.27).' },
        { move: '24...a5', text: 'Piyonları hemen yürütmek (Motor: −0.07).' },
      ],
    },
    '25w': {
      text: '25.Nc3: At c3 üzerinden f2-g4 rotasına gider.',
      amac: 'e4 piyonuna baskıyı artırmak ve atı şah kanadına yönlendirmek.',
      neden: 'At c3’te …b4 ile tempo kaybettirebilir. Motor 25.Rff1’i daha sağlam buluyor (Motor: +0.27; oyundaki hamle −0.54).',
      diger: [
        { move: '25.Rff1', text: 'Kale ikinci yatayı korur, Nf4 sonra (Motor: +0.27).' },
        { move: '25.Rf2', text: 'Macdonald’ın önerisi: 25...Rc7 ve Beyaz biraz iyi (Motor: +0.14).' },
      ],
    },
    '25b': {
      text: '25...Bd5: Fil d5’e yerleşir.',
      amac: 'e4 piyonunu korumak ve a2-g8 çaprazında a2’ye bakmak.',
      neden: 'Macdonald’a göre fil d5’ten sonra …Qc6 ile e4 korunur. Motor 25...b4! ile atı hemen kovmayı daha güçlü buluyor (Motor: −0.56).',
      diger: [
        { move: '25...b4', text: '26.Ne2 Rc7 ve Siyah daha iyi (Motor: −0.56).' },
        { move: '25...Nd7', text: 'Macdonald’ın önerisi; Siyah biraz iyi (Motor: −0.31).' },
      ],
    },
    '26w': {
      text: '26.Nf2: At f2’de; e4 piyonuna ve g4’e yönelir.',
      amac: 'e4’ü kazanmayı tehdit etmek ve Ng4 ile f6’ya baskı yapmak.',
      neden: 'Macdonald’a göre e4 üzerinde ağır baskı kurar. Motor da en iyi hamle olarak görüyor (Motor: −0.09).',
      diger: [
        { move: '26.a4', text: '26...Qc6 ve b5 değişince vezir kanadı açılır (Motor: −0.25).' },
      ],
    },
    '26b': {
      text: '26...Qc6: Vezir c6’dan e4’ü korur ve a4’e geçmeye hazırlanır.',
      amac: 'e4’ü savunup vezir kanadında …b4 ve …Qa4 planını hazırlamak.',
      neden: 'Motor 26...a5’i daha iyi buluyor (Motor: −0.10; oyundaki hamle +0.39); vezir c6’da hedef olabilir.',
      diger: [
        { move: '26...a5', text: '27.Nh3 b4 ile piyonlar yürür (Motor: −0.10).' },
        { move: '26...b4', text: '27.Nfxe4 Bxe4 28.Nxe4 Qc6 (Motor: +0.08).' },
      ],
    },
    '27w': {
      text: '27.Rf1: Kale f1’e çekilerek ikinci yatayı korur.',
      amac: 'a2 ve b2’yi …Qa4 ve …b4 tehditlerine karşı önceden korumak.',
      neden: 'Macdonald, Beyazın vezir kanadından taş çekerken dikkatli olması gerektiğini yazar. Motor ise 27.Nxd5! Qxd5 ile Siyahın güçlü filini değişmeyi öneriyor (Motor: +0.30; oyundaki hamle −1.09).',
      diger: [
        { move: '27.Nxd5', text: '27...Qxd5 28.Nh3 ve denge (Motor: +0.30).' },
        { move: '27.g4', text: 'Piyon atağı erken başlar (Motor: +0.11).' },
      ],
    },
    '27b': {
      text: '27...b4: Siyah çoğunluğunu yürütür; c3 atı kovulur.',
      amac: 'Beyaz atı vezir kanadından uzaklaştırıp …c3 ve …Qa4 planını hızlandırmak.',
      neden: 'Mantıklı ama Beyaza 28.Nxd5 şansını verir. Motor 27...Bf7 ya da 27...Bg8 ile önce filin değişimden kaçmasını daha güçlü görüyor (Motor: −1.15).',
      diger: [
        { move: '27...Bf7', text: 'Fil değişimden kaçar; Beyaz atı c3’te kötü kalır (Motor: −1.15).' },
        { move: '27...Bg8', text: 'Aynı fikir (Motor: −1.15).' },
      ],
    },
    '28w': {
      text: '28.Ne2?: At e2’ye çekilir; d4’ü korur.',
      amac: 'Atı şah kanadına (f4/g3) yönlendirmek.',
      neden: 'Macdonald bunu hata sayar ve 28.Nxd5 Qxd5 29.Nh3 Qb5’i eşit bulur. Motor aynı fikirde: 28.Nxd5 −0.44, oyundaki hamle −2.04. Siyahın d5 fili artık değişilemez.',
      diger: [
        { move: '28.Nxd5', text: '28...Qxd5 29.Nh3 ve Siyah biraz iyi (Motor: −0.44).' },
        { move: '28.Nb1', text: '28...c3 29.Rc1 c2 ve Siyah çok iyi (Motor: −3.2).' },
      ],
    },
    '28b': {
      text: '28...Qa4: Vezir a2’ye saldırır.',
      amac: 'a2’yi kazanmak ve vezir kanadında hat açmak.',
      neden: 'Hillery’ye göre Siyahın planı işliyor gibi görünür ama Beyazın bütün taşları Siyah şahına dönük. Motor 28...c3! ile hemen geçer piyon almayı daha da güçlü buluyor (Motor: −2.07); Macdonald da 28...c3 29.bxc3 sonrası Siyahın sağlam avantajını not eder.',
      diger: [
        { move: '28...c3', text: '29.bxc3 bxc3 30.Nh3 c2 ve Siyah çok iyi (Motor: −2.07).' },
        { move: '28...a5', text: 'Piyonu destekleyerek yürütmek (Motor: −1.41).' },
      ],
    },
    '29w': {
      text: '29.Ng4: At g4’e döner; h6 ve f6 hedefte.',
      amac: 'f6’ya baskı kurarak …Qxa2 alımını taktik olarak yasaklamak.',
      neden: 'Motorun ilk tercihi (Motor: −1.27). Şimdi 29...Qxa2? 30.Nxf6! ile kaybeder (Motor: +3.4); Macdonald ve Hillery bu fikri gösterir.',
      diger: [
        { move: '29.Nd1', text: 'At savunmaya; 29...Qxa2 ile Siyah piyon kazanır (Motor: −1.56).' },
        { move: '29.h3', text: '29...Qc2 ile b2 düşer (Motor: −1.75).' },
      ],
    },
    '29b': {
      text: '29...Nd7: At d7’den f6’yı korur.',
      amac: 'f6’yı sağlamlaştırıp …Qxa2 alımını mümkün kılmak.',
      neden: 'Doğrudan 29...Qxa2? 30.Nxf6! gxf6 31.Qxf6+ ile kaybeder (Motor: +3.4). Motor 29...Rf7 ile de f6’yı korumayı biraz daha iyi buluyor (Motor: −1.29).',
      diger: [
        { move: '29...Rf7', text: '30.R4f2 Qxa2 31.Nf4 ve Siyah piyon önde (Motor: −1.29).' },
        { move: '29...Qxa2?', text: '30.Nxf6! gxf6 31.Qxf6+ ve Beyaz kazanır (Motor: +3.4).' },
      ],
    },
    '30w': {
      text: '30.R4f2!: Kale ikinci yatayı (a2’yi) savunmaya gelir.',
      amac: 'a2’yi dolaylı yoldan korumak ve gerekirse Nf4-g6 ile karşı saldırı.',
      neden: 'Macdonald hamleyi “a-piyonunu kombinasyonla korur” diye över. Motor da en iyi hamle olarak görüyor (Motor: −0.68).',
      diger: [
        { move: '30.h3', text: '30...Qxa2 ile Siyah piyon kazanır (Motor: −1.03).' },
      ],
    },
    '30b': {
      text: '30...Kg8: Şah g8’e döner.',
      amac: 'Ng6+ çatallarına ve h7’ye karşı şahı önceden yerleştirmek.',
      neden: 'Fazla temkinli. Motor 30...Qxa2! 31.Nf4 Qa5 ile piyon almayı öneriyor (Motor: −0.69). Hillery ve Macdonald 30...Qxa2 31.Nf4 Bf7? 32.Ng6+ ile Beyazın saldırısını gösterir; motor bu kolu gerçekten Beyaz lehine buluyor (+1.1), ama 31...Qa5 ile Siyah iyi kalırdı.',
      diger: [
        { move: '30...Qxa2', text: '31.Nf4 Qa5! ve Siyah piyon önde (Motor: −0.69).' },
        { move: '30...Rf7', text: '31.Nf4 Qc6 32.Ng6+ Kg8 ve denge (Motor: 0.00).' },
      ],
    },
    '31w': {
      text: '31.Nc1?: At a2 ve b3’ü korumak için c1’e çekilir.',
      amac: 'Vezir kanadını savunmak ve …c3’e karşı b3’ü desteklemek.',
      neden: 'Macdonald bu hamleye ?? verir. At saldırıdan geri çekilir ve Siyah 31...c3! ile korunan geçer piyon alır. Motor 31.Nf4! Qc6 32.Ng6 ile dengeyi korumayı öneriyor (Motor: 0.00; oyundaki hamle −1.89).',
      diger: [
        { move: '31.Nf4', text: '31...Qc6 32.Ng6 ve Beyazın şah kanadı baskısı dengeler (Motor: 0.00).' },
        { move: '31.Qg3', text: 'Vezir g-hattına (Motor: −0.08).' },
      ],
    },
    '31b': {
      text: '31...c3!: Siyahın piyonları ilerliyor.',
      amac: 'c3’te b4 ile korunan bir geçer piyon elde etmek ve b2’ye baskı yapmak.',
      neden: 'Macdonald’a göre Siyah artık açıkça daha iyi. Motor da en iyi hamle olarak görüyor (Motor: −1.80).',
      diger: [
        { move: '31...Bf7', text: 'Önce fil; daha yavaş (Motor: −1.49).' },
      ],
    },
    '32w': {
      text: '32.b3: Beyaz piyonları kapatır.',
      amac: 'Vezir kanadında hat açılmasını önlemek ve c3 piyonunu yerinde tutmak.',
      neden: 'bxc3 alırsa Siyah …bxc3 ile c-hattında çok güçlü bir piyon alır. Macdonald, iki tarafın planlarının artık netleştiğini söyler: Siyah a-piyonunu, Beyaz g-piyonunu yürütecek. Motor 32.h3’ü biraz öne koyuyor (−1.68 / −2.32).',
      diger: [
        { move: '32.h3', text: 'Önce g4 hazırlığı (Motor: −1.68).' },
        { move: '32.bxc3', text: '32...bxc3 ve c-piyonu tehlikeli (Motor: −1.91).' },
      ],
    },
    '32b': {
      text: '32...Qc6: Vezir merkeze ve uzun çapraza döner.',
      amac: 'c3’ü desteklemek ve …a5-a4 ile a-hattını açmaya hazırlanmak.',
      neden: 'Vezir a4’te b3 piyonuyla kovulmuştu. Motor 32...Qb5’i aynı güçte görüyor (−2.18 / −2.06).',
      diger: [
        { move: '32...Qb5', text: 'Vezir f1 kalesine bakar (Motor: −2.18).' },
      ],
    },
    '33w': {
      text: '33.h3: g4 ilerleyişi hazırlanır.',
      amac: 'g-piyonu fırtınasıyla g-hattını açmak; Beyazın son kozu.',
      neden: 'Macdonald bunu yavaş bulur ve 33.Ne2’yi önerir; motor ise farkı görmüyor (h3 −2.21, Ne2 −2.30, a3 −2.19). Beyazın başka gerçek planı yok.',
      diger: [
        { move: '33.Ne2', text: 'At f4’e gider (Motor: −2.30).' },
        { move: '33.a3', text: 'Vezir kanadında piyon değişimi (Motor: −2.19).' },
      ],
    },
    '33b': {
      text: '33...a5: Siyah a-piyonuyla yeni hat açmak istiyor.',
      amac: '…a4 ile b3’e saldırıp a-hattını kalesine açmak.',
      neden: 'Mantıklı plan; motor 33...Ra8 ile aynı değeri veriyor (−2.10).',
      diger: [
        { move: '33...Ra8', text: 'Önce kale a-hattına (Motor: −2.10).' },
      ],
    },
    '34w': {
      text: '34.Nh2: At h2’ye çekilir; g4 ilerleyişine yer açar.',
      amac: 'g4-g5’i desteklemek ve atı sonra g4’e getirmek.',
      neden: 'Macdonald hamleyi Beyazın “dahiyane fikrinin” başlangıcı olarak görür. Motor da en iyi hamle olarak buluyor (Motor: −2.05).',
      diger: [
        { move: '34.Rc2', text: 'Vezir kanadında savunma (Motor: −2.42).' },
      ],
    },
    '34b': {
      text: '34...a4: Siyah b3 piyonuna saldırır.',
      amac: 'a-hattını açmak ve b3’ü zayıflatmak.',
      neden: 'Motorun ilk tercihi (Motor: −2.39).',
      diger: [
        { move: '34...Qd6', text: 'Vezirle şah kanadına dikkat (Motor: −2.32).' },
      ],
    },
    '35w': {
      text: '35.g4!: Beyaz da kendi kanadında hat açmaya başlar.',
      amac: 'g5 ile f6’yı sorgulayıp g-hattını açmak.',
      neden: 'Motorun ilk tercihi (Motor: −2.44). İki taraf da her şeyi ortaya koydu; hangi hattın önce açılacağı sonucu belirleyecek.',
      diger: [
        { move: '35.Kh1', text: 'Önce şah; daha yavaş (Motor: −2.55).' },
      ],
    },
    '35b': {
      text: '35...axb3: Siyah a-hattını açar.',
      amac: 'a-hattını kalesine açmak.',
      neden: 'Macdonald 35...h6!? ile önce şah kanadını sağlamlaştırmayı önerir; motor iki hamleyi eşit görüyor (−2.40 / −2.33).',
      diger: [
        { move: '35...h6', text: 'g5’e karşı önlem (Motor: −2.40).' },
      ],
    },
    '36w': {
      text: '36.axb3: Beyaz geri alır.',
      amac: 'Materyali dengede tutmak.',
      neden: 'Zorunlu: 36.Ne2? bxa2 ile a-piyonu vezir olmaya koşar (Motor: −6.2).',
      diger: [
        { move: '36.Nxb3', text: 'At saldırıdan uzaklaşır (Motor: −2.42).' },
      ],
    },
    '36b': {
      text: '36...Ra8: Kale açık a-hattını alır.',
      amac: '…Ra3 ile b3’e saldırmak.',
      neden: 'Motor 36...h6! ile önce g5’i engellemeyi öneriyor (Motor: −2.11; oyundaki hamle −1.54). Macdonald da 36...h6!? der.',
      diger: [
        { move: '36...h6', text: '37.Qg3 Ra8 38.h4 Ra3 ve Siyah kazançlı (Motor: −2.11).' },
      ],
    },
    '37w': {
      text: '37.g5!: Şah kanadında hat açılıyor.',
      amac: 'gxf6 ile g-hattını açmak ve f6’yı kırmak.',
      neden: 'Motorun ilk tercihi (Motor: −1.55). Beklemek Siyaha …h6 ile hatları kapatma şansı verirdi.',
      diger: [
        { move: '37.Qg3', text: 'Önce vezir g-hattına (Motor: −2.14).' },
      ],
    },
    '37b': {
      text: '37...Ra3: Kale a3’ten b3 ve e3’e saldırır.',
      amac: 'b3’ü kazanmak ve c3 piyonunu desteklemek.',
      neden: 'Motor 37...fxg5 38.Qxg5 Nf6 ya da 37...Qd6 ile önce şah kanadını sağlamlaştırmayı öneriyor (Motor: −1.66).',
      diger: [
        { move: '37...fxg5', text: '38.Qxg5 Qf6 ve hatlar kapalı (Motor: −1.66).' },
        { move: '37...Qd6', text: '38.Ng4 fxg5 39.Qxg5 Nf6 (Motor: −1.66).' },
      ],
    },
    '38w': {
      text: '38.Ng4: At g4’e döner ve f6’ya ikinci kez baskı yapar.',
      amac: 'gxf6 sonrası f6’yı kırmak; Ne5 ile at bağını kullanmak.',
      neden: 'Macdonald’a göre bu hamle Siyah atı bağlamaya ve Ne5’e hazırlık yapar. Motor da en iyi hamle olarak görüyor (Motor: −1.23).',
      diger: [
        { move: '38.Rg2', text: 'Önce kale g-hattına (Motor: −1.55).' },
      ],
    },
    '38b': {
      text: '38...Bxb3?: Siyah b3’ü alır ama g-hattının açılmasına izin verir.',
      amac: 'Materyal kazanmak ve c3 piyonunu desteklemek.',
      neden: 'Doğrusu 38...fxg5! 39.Qxg5 Nf6 idi; hatlar kapalı kalır (Motor: −1.58). Macdonald bu hamleyi Siyahın inisiyatifini kaybettiren hata sayar; seyircilerin bu sıralarda salondan ayrılmaya başladığını aktarır. Bazı yorumcular 38...Rxb3’ü önerir, ama Macdonald onun da kötü olduğunu düşünür.',
      diger: [
        { move: '38...fxg5', text: '39.Qxg5 Nf6 40.Kh1 Qd6 ve Siyah açıkça daha iyi (Motor: −1.58).' },
        { move: '38...Qd6', text: 'Fritz’in önerisi; şah kanadını korur (Motor: −1.24).' },
      ],
    },
    '39w': {
      text: '39.Rg2!: f2’deki kale g-hattına geçer ve g5 piyonunun arkasına yerleşir. Artık gxf6 ile hat açıldığında kale doğrudan g7’ye bakacak.',
      amac: 'g-hattını açmadan önce ağır taşı hattın arkasına koymak; böylece gxf6 hem g7’ye baskı hem de g4 atının desteklenmesi anlamına gelir.',
      neden: 'Sıra önemlidir: 39.gxf6? Nxf6 sonrası at f6’yı tutar ve g-hattı kapanır (Motor: −1.18); 39.Nxb3? Rxb3 ise Beyazın saldırı atını vezir kanadına harcar (Motor: −0.91). Macdonald’a göre 39.Rg2 gxf6 ile parça kazanmayı tehdit eder; motor bu hamleyi değerlendirmeyi −1.5’ten +0.6’ya çeviren tek devam olarak görüyor.',
      diger: [
        { move: '39.Nxb3', text: '39...Rxb3 40.Kh1 c2 ve Siyahın c-piyonu çok hızlı (Motor: −0.91).' },
        { move: '39.gxf6', text: '39...Nxf6 40.Rg2 Kf8 41.Nxb3 ve hat kapalı kaldığı için Siyah iyi (Motor: −1.18).' },
      ],
    },
    '39b': {
      text: '39...Kh8: Şah g-hattından köşeye kaçar.',
      amac: 'gxf6 sonrası g-hattındaki kale ve vezir şahlarından şahı uzak tutmak; g8’i boş bırakıp f6’yı atla geri almaya hazırlanmak.',
      neden: 'Neredeyse zorunlu: 39...Kf8? 40.Nxb3 fxg5 41.Qxh7 ile Beyaz kazanır (Motor: +3.69), 39...fxg5? 40.Qxg5 ve g7 üzerinde baskı çok güçlü (Motor: +3.78), 39...Qd6 40.gxf6 gxf6 41.Nxb3 de kaybeder (Motor: +3.1). Kh8 ile değerlendirme +0.6’da, yani Siyah hâlâ oyunda.',
      diger: [
        { move: '39...Kf8', text: '40.Nxb3 Rf7 41.g6 h6 ve f-hattı Beyazın (Motor: +3.69).' },
        { move: '39...fxg5', text: '40.Qxg5 Rf7 41.Nxb3 Rxb3 ve g7 düşmek üzere (Motor: +3.78).' },
      ],
    },
    '40w': {
      text: '40.gxf6: Beyaz g-hattını açar ve f6 piyonunu ortadan kaldırır.',
      amac: 'g-hattını kaleye açmak ve Siyahı f6’yı bir taşla geri almaya zorlamak; Siyah piyonla alırsa şahın önü tamamen açılır.',
      neden: 'Motor 40.Nxb3 Rxb3 41.gxf6 Nxf6 42.Ne5 sırasını eşit güçte görüyor (ikisi de +0.63). Hattı hemen açmak Siyaha yanlış alımla hata yapma fırsatı verdi. 40.Ne2? ise fxg5 ile hattı Siyahın kapatmasına izin verirdi (Motor: −1.99).',
      diger: [
        { move: '40.Nxb3', text: '40...Rxb3 41.gxf6 Nxf6 42.Ne5 ve dengeli (Motor: +0.63).' },
        { move: '40.Ne2', text: '40...fxg5 41.Qxg5 Nf6 ve Siyah hatları kapatır (Motor: −1.99).' },
      ],
    },
    '40b': {
      text: '40...gxf6?: Siyah piyonla alır ve g-hattını tamamen açar.',
      amac: 'Atı d7’de tutup e5 karesini kontrol etmek ve materyal dengesini korumak.',
      neden: 'Belirleyici hata. 40...Nxf6! ile at h7’yi ve g8’i korur, g-hattında Beyaz kalesinin önünde bir taş kalırdı (Motor: +0.77, pratikte dengeli). Piyonla almak g7’yi kaleye, f6’yı vezire açar (Motor: +4.06). 40...Rf7? ise 41.fxg7+ Rxg7 42.f6 ile daha da kötüdür (Motor: +4.99).',
      diger: [
        { move: '40...Nxf6', text: '41.Ne5 Qd6 42.Nxb3 Rxb3 ve Siyah savunur (Motor: +0.77).' },
        { move: '40...Rf7', text: '41.fxg7+ Rxg7 42.f6 ve Beyaz kazanır (Motor: +4.99).' },
      ],
    },
    '41w': {
      text: '41.Nxb3: Beyaz b3’teki fili alır.',
      amac: 'Siyahın c3 piyonunu destekleyen ve a2-g8 çaprazında g8’e bakan fili ortadan kaldırmak; atı c1’den oyuna sokmak.',
      neden: 'Mantıklı ve yeterli bir hamle, ama motor 41.Ne5! ile daha güçlü devamı gösteriyor: 41...Nxe5 42.dxe5 ve e-piyonu e6’ya koşar, f6 da düşer (Motor: +4.10; oyundaki hamle +2.91). 41.Kh1 ise daha zayıf (Motor: +1.89).',
      diger: [
        { move: '41.Ne5', text: '41...Nxe5 42.dxe5 Raa7 43.e6 ve Beyaz kazanır (Motor: +4.10).' },
        { move: '41.Kh1', text: '41...Bd5 42.Ne2 c2 ve Siyah karşı oyun bulur (Motor: +1.89).' },
      ],
    },
    '41b': {
      text: '41...Rxb3: Kale b3’te geri alır; materyal eşitlenir.',
      amac: 'Kaybedilen fili geri almak ve c3 piyonunu kaleyle desteklemek.',
      neden: 'Macdonald bu hamleye ?? verir ve 41...Rg7 önerir; motor ise Rxb3’ü en iyi hamle olarak görüyor (Motor: +2.99). 41...Rg7 42.Ne5! Rxg2+ 43.Kxg2 Nxe5 ile Siyah bir taş eksik kalır (Motor: +3.68); 41...c2 42.Nc5 de kötüdür (Motor: +3.15).',
      diger: [
        { move: '41...Rg7', text: '42.Ne5 Rxg2+ 43.Kxg2 Nxe5 44.dxe5 ve Siyah taş eksik (Motor: +3.68).' },
        { move: '41...c2', text: '42.Nc5 Rg7 43.Rxc2 ve c-piyonu düşer (Motor: +3.15).' },
      ],
    },
    '42w': {
      text: '42.Nh6!: At h6’ya sıçrar; g8 ve f7 karelerini kontrol eder.',
      amac: 'Rg8 matını tehdit edip Siyahı g-hattını kapatmaya zorlamak; ardından kale değişimiyle g7’yi açmak.',
      neden: 'Tehdit 43.Rg8#; 42...Re8 olursa 43.Nf7# gelir. Motor bunu tek kazanan hamle olarak görüyor (Motor: +3.20). 42.Ne5 Nxe5 43.dxe5 c2 sonrası Siyahın c-piyonu dengeler (Motor: +0.04); 42.Kh1 de yavaş (Motor: 0.00).',
      diger: [
        { move: '42.Ne5', text: '42...Nxe5 43.dxe5 c2 44.Qg3 ve Siyah kurtulur (Motor: +0.04).' },
        { move: '42.Kh1', text: '42...Rb2 43.Rgg1 Qd6 ve denge (Motor: 0.00).' },
      ],
    },
    '42b': {
      text: '42...Rg7: Siyah kaleyi g7’ye koyarak g-hattını kapatır.',
      amac: 'Rg8 matını önlemek.',
      neden: 'Zorunlu: 42...Re8? 43.Nf7# ile, 42...Qe6? ise 43.fxe6 sonrası birkaç hamlede mat ile biter. 42...Qc4 43.Qg4! Qxf1+ 44.Kxf1 ile Siyah veziri kaybeder (Motor: +5.07). Rg7 ile Siyah kale değişimine razı olur ama şahını açık bırakır (Motor: +3.96).',
      diger: [
        { move: '42...Qc4', text: '43.Qg4 Qxf1+ 44.Kxf1 ve Beyaz kazanır (Motor: +5.07).' },
        { move: '42...Re8', text: '43.Nf7# mat.' },
      ],
    },
    '43w': {
      text: '43.Rxg7: Kale g7’deki kaleyle değişilir.',
      amac: 'g-hattındaki tek savunucuyu ortadan kaldırıp şahı g7’ye çekmek; vezirin g3 ya da g4’ten şah çekmesine yol açmak.',
      neden: 'Motor tek iyi hamle olarak görüyor (Motor: +2.46). 43.Qh5? Rxg2+ 44.Kxg2 Qc4 ile Siyah karşı saldırıya geçer (Motor: 0.00); 43.Kh1? Rxg2 44.Kxg2 Qc4 ise Siyah lehine (Motor: −1.54).',
      diger: [
        { move: '43.Qh5', text: '43...Rxg2+ 44.Kxg2 Qc4 ve denge (Motor: 0.00).' },
        { move: '43.Kh1', text: '43...Rxg2 44.Kxg2 Qc4 ve Siyah daha iyi (Motor: −1.54).' },
      ],
    },
    '43b': {
      text: '43...Kxg7: Siyah şahla geri alır.',
      amac: 'Kaleyi geri alıp materyali korumak.',
      neden: 'Zorunlu: başka her hamle mat ya da büyük materyal kaybıdır. 43...Qc4? 44.Rxd7 Qxf1+ 45.Kxf1 Rb1+ ile Siyah birkaç hamlede mat olur (Motor: 6 hamlede mat), 43...Qe6? 44.fxe6 ve 5 hamlede mat. Şah g7’ye gelince açıkta kalır ama Siyahın başka seçeneği yoktur.',
      diger: [
        { move: '43...Qc4', text: '44.Rxd7 Qxf1+ 45.Kxf1 Rb1+ ve Beyaz mat eder (Motor: 6 hamlede mat).' },
      ],
    },
    '44w': {
      text: '44.Qg3+!: Vezir g-hattından şah çeker.',
      amac: 'Siyah şahını h6’daki atı almaya zorlayıp şahı h6’da, açık bir konumda bırakmak.',
      neden: 'Macdonald bunu !! ile işaretler. 44...Kf8 olursa 45.Qg8+ Ke7 46.Qxb3 ile b3 kalesi düşer (Motor: +3.23). Motor 44.Qg4+’ü de neredeyse aynı güçte görüyor (+2.64); 44.Kh1? ise şahsız olduğu için Siyaha 44...Kf8 ile kaçma şansı verir (Motor: −0.10).',
      diger: [
        { move: '44.Qg4+', text: '44...Kxh6 45.Kh1 Qd5 46.Rg1 ile aynı fikir (Motor: +2.64).' },
        { move: '44.Kh1', text: '44...Kf8 45.Qg3 Ra3 ve şah kaçar (Motor: −0.10).' },
      ],
    },
    '44b': {
      text: '44...Kxh6: Şah h6’daki atı alır.',
      amac: 'En azından bir taş kazanmak ve materyal üstünlüğüyle savunmaya geçmek.',
      neden: 'Zorunlu sayılır: 44...Kh8?? 45.Qg8# mat; 44...Kf8 45.Qg8+ Ke7 46.Qxb3 ile kale düşer (Motor: +3.23). Hillery de Kxh6’nın zorunlu olduğunu, Kf8’in kaleyi kaybettirdiğini yazar. Şah h6’da artık yalnızca vezir, kale ve f5 piyonuyla çevrilidir.',
      diger: [
        { move: '44...Kf8', text: '45.Qg8+ Ke7 46.Qxb3 ve Siyah kale kaybeder (Motor: +3.23).' },
        { move: '44...Kh8', text: '45.Qg8# mat.' },
      ],
    },
    '45w': {
      text: '45.Kh1!: Beyaz şahını köşeye çeker; g1 karesi kaleye açılır.',
      amac: 'Rg1 ile mat ağını kapatmak; aynı zamanda Siyahın …Rb1+ ve …Qc4/Qd5 şahlarına karşı şahı güvenceye almak.',
      neden: 'Hillery bunu “sessiz ama ölümcül” diye tanımlar. Tehdit 46.Rg1 ve ardından Qg4+/Qh4#: örneğin 45...c2? 46.Rg1 Kh5 47.Qg4+ Kh6 48.Qh4#. 45.Kg2? Qc4 46.Qf4+ Kg7 ile Siyah şahı kaçar ve karşı saldırıya geçer (Motor: −3.73); 45.Rf4? ise Siyaha 45...Rb1+ 46.Kg2 Rb2+ ile sürekli şah verir (Motor: 0.00).',
      diger: [
        { move: '45.Kg2', text: '45...Qc4 46.Qf4+ Kg7 47.Rg1+ ve Siyah kaçar (Motor: −3.73).' },
        { move: '45.Rf4', text: '45...Rb1+ 46.Kg2 Rb2+ ile sürekli şah (Motor: 0.00).' },
      ],
    },
    '45b': {
      text: '45...Qd5: Vezir d5’e gelir; f5 piyonuna ve g-hattına bakar.',
      amac: 'Mat ağının kilit taşı olan f5 piyonunu almaya hazırlanmak ve g8, g5 karelerini kontrol etmek.',
      neden: 'Siyahın tek gerçek savunma planı: mat tehdidini durdurmak için vezirini sonunda feda etmek zorunda kalacak. 45...Qc4 aynı değerde (Motor: +3.18), 45...Qb5 biraz daha kötü (+3.30). 45...c2? ise 46.Rg1 sonrası mat ile biter (yukarıya bakın).',
      diger: [
        { move: '45...Qc4', text: '46.Rg1 Qf7 47.Qh4+ Qh5 ve aynı sonuç (Motor: +3.18).' },
        { move: '45...c2', text: '46.Rg1 Kh5 47.Qg4+ Kh6 48.Qh4# mat.' },
      ],
    },
    '46w': {
      text: '46.Rg1: Kale g-hattına; mat ağı kapanıyor.',
      amac: 'Qh4+ ve Qg5# gibi tehditlerle Siyahı vezirini vermeye zorlamak.',
      neden: 'Motor tek kazanan hamle olarak görüyor (Motor: +3.22). 46.Qg4 c2 47.Rg1 sonrası Siyahın c-piyonu vezir olmaya çok yakındır (Motor: 0.00); 46.Qh4+? Kg7 47.Rg1+ Kf7 ile şah f7’den kaçar (Motor: −2.68).',
      diger: [
        { move: '46.Qg4', text: '46...c2 47.Rg1 Qf7 ve denge (Motor: 0.00).' },
        { move: '46.Qh4+', text: '46...Kg7 47.Rg1+ Kf7 ve şah kaçar (Motor: −2.68).' },
      ],
    },
    '46b': {
      text: '46...Qxf5: Siyah f5 piyonunu alır.',
      amac: 'Qg6 matını önlemek ve veziri h5’e araya girebilecek bir kareye getirmek.',
      neden: 'Motor 46...Qf7’yi neredeyse aynı güçte görüyor (+3.29 / +3.42); iki durumda da 47.Qh4+ Qh5 48.Qf4+ ile vezir değişimi gelir. 46...Kh5?? 47.Qg4+ Kh6 48.Qh4# mat.',
      diger: [
        { move: '46...Qf7', text: '47.Qh4+ Qh5 48.Qf4+ Qg5 49.Rxg5 ve benzer son (Motor: +3.29).' },
        { move: '46...Kh5', text: '47.Qg4+ Kh6 48.Qh4# mat.' },
      ],
    },
    '47w': {
      text: '47.Qh4+: Şah. Vezir h4’ten şaha gelir.',
      amac: 'Siyahı veziri h5’e araya koymaya zorlamak ve vezir değişimine giden şah serisini başlatmak.',
      neden: 'Motor tek kazanan hamle olarak görüyor (Motor: +3.58). 47.Rg2? Rb1+ 48.Kh2 Rb2 ile Siyah kale değişimini zorlar (Motor: −6.07); 47.Qg7+ Kh5 48.Qg3 c2 ise c-piyonunu vezir yapar (Motor: −6.69).',
      diger: [
        { move: '47.Rg2', text: '47...Rb1+ 48.Kh2 Rb2 49.Rxb2 ve Siyah kazanır (Motor: −6.07).' },
        { move: '47.Qg7+', text: '47...Kh5 48.Qg3 c2 ve piyon vezir olur (Motor: −6.69).' },
      ],
    },
    '47b': {
      text: '47...Qh5: Siyah vezirini araya koyar.',
      amac: 'Şahtan kurtulmak.',
      neden: 'Tek yasal savunma: h7’de kendi piyonu var, g5, g6 ve g7 kareleri g1 kalesinin kontrolünde; geriye yalnızca araya vezir koymak kalır. Motor bu hamleyi tek seçenek olarak gösteriyor (Motor: +3.48).',
    },
    '48w': {
      text: '48.Qf4+: Yine şah; vezir f4’ten g5 karesini kontrol eder.',
      amac: 'Siyahı veziri g5’e koymaya zorlamak, sonra kaleyle almak.',
      neden: 'Motor tek kazanan hamle olarak görüyor (Motor: +3.76). 48.Qxh5+? Kxh5 49.Rc1 Rb2 ile Siyahın c-piyonu çok güçlüdür (Motor: −6.62); 48.Qg4? Qxg4 49.hxg4 Kg5 de kaybeder (Motor: −7.06).',
      diger: [
        { move: '48.Qxh5+', text: '48...Kxh5 49.Rc1 Rb2 50.Kg1 ve c-piyonu kazanır (Motor: −6.62).' },
        { move: '48.Qg4', text: '48...Qxg4 49.hxg4 Kg5 ve Siyah kazanır (Motor: −7.06).' },
      ],
    },
    '48b': {
      text: '48...Qg5: Tek hamle; Siyah veziri g5’e girer.',
      amac: 'Şahı engellemek.',
      neden: 'Zorunlu: g6 ve g7 g1 kalesinin kontrolünde, h7’de kendi piyonu, h5’te kendi veziri var; tek savunma f4-h6 çaprazına vezir koymak. Motor tek seçenek olarak gösteriyor (Motor: +3.76).',
    },
    '49w': {
      text: '49.Rxg5: Beyaz kaleyle veziri alır.',
      amac: 'Vezir karşılığında kale vererek kazanan bir vezir sonuna geçmek.',
      neden: 'Motor tek kazanan hamle olarak görüyor (Motor: +3.76). 49.Qxe4? Rb1 50.Qxb1 Qxe3 ile Siyah dengeyi bulur (Motor: −0.51); 49.Qf1? Qxe3 ise Siyahı kazanır duruma getirir (Motor: −6.95).',
      diger: [
        { move: '49.Qxe4', text: '49...Rb1 50.Qxb1 Qxe3 ve denge (Motor: −0.51).' },
        { move: '49.Qf1', text: '49...Qxe3 50.Qc1 Qxc1 51.Rxc1 ve Siyah kazanır (Motor: −6.95).' },
      ],
    },
    '49b': {
      text: '49...fxg5: Siyah kaleyi piyonla geri alır.',
      amac: 'Materyali geri almak ve şaha f6 karesini açmak.',
      neden: 'Tek makul hamle: 49...Rb1+? 50.Rg1+ Kh5 51.Qg4+ ile 3 hamlede mat, 49...c2?? 50.Qh4# mat. fxg5 sonrası Beyazda vezir, Siyahta kale ve tehlikeli c-piyonu var; ama Beyaz şahı güvende ve Siyahın atı korumasız (Motor: +3.76).',
      diger: [
        { move: '49...Rb1+', text: '50.Rg1+ Kh5 51.Qg4+ Kh6 ve 3 hamlede mat.' },
        { move: '49...c2', text: '50.Qh4# mat.' },
      ],
    },
    '50w': {
      text: '50.Qd6+: Vezir şah çekerken d7 atına da saldırır.',
      amac: 'Çatal: şahla birlikte korumasız d7 atını kazanmak.',
      neden: 'Motor tek kazanan hamle olarak görüyor (Motor: +3.76). 50.Qf5 ya da 50.Qf7 c2 51.Qe6+ ile Beyaz yalnızca şah çekebilir ve Siyahın piyonu vezir olur, sonuç berabere (Motor: 0.00).',
      diger: [
        { move: '50.Qf5', text: '50...c2 51.Qe6+ Kh5 52.Qe8+ ile sürekli şah (Motor: 0.00).' },
        { move: '50.Qf7', text: '50...c2 51.Qe6+ ve yine sürekli şah (Motor: 0.00).' },
      ],
    },
    '50b': {
      text: '50...Kh5: Şah h5’e kaçar.',
      amac: 'Atı korumak mümkün olmadığı için şahı c-piyonunu destekleyecek bir konuma getirmek.',
      neden: 'Motorun ilk tercihi (Motor: +3.76). 50...Kg7 51.Qxd7+ Kf6 ile şah merkeze gelir ama Beyaz şah çekerek b3 kalesini toplar (Motor: +4.23); 50...Nf6 51.Qxf6+ ise hem atı hem şahı kaybettirir (Motor: +5.09).',
      diger: [
        { move: '50...Kg7', text: '51.Qxd7+ Kf6 52.Qd6+ Kf7 ve Beyaz kazanır (Motor: +4.23).' },
        { move: '50...Nf6', text: '51.Qxf6+ Kh5 52.Qf7+ ve Beyaz kazanır (Motor: +5.09).' },
      ],
    },
    '51w': {
      text: '51.Qxd7: Beyaz atı alır.',
      amac: 'Materyal üstünlüğünü vezire karşı kale + piyona çevirmek ve h7’ye mat tehdidi kurmak.',
      neden: 'Motor en iyi hamle olarak görüyor (Motor: +3.76). 51.Kg2 ya da 51.Kh2 Rb2+ 52.Kg3 c2 ile önce şahı güvenceye almak da kazanır ama daha zayıftır (Motor: +2.90/+2.87). Atı alınca Qxh7# tehdidi doğar.',
      diger: [
        { move: '51.Kg2', text: '51...Rb2+ 52.Kg3 c2 53.Qxd7 (Motor: +2.90).' },
        { move: '51.Kh2', text: '51...Rb2+ 52.Kg3 c2 53.Qxd7 (Motor: +2.87).' },
      ],
    },
    '51b': {
      text: '51...c2??: Siyah geçer piyonunu c2’ye ilerletir.',
      amac: 'Bir sonraki hamlede c1’de vezir yapmak.',
      neden: 'h7 piyonu korumasız kaldığı için 52.Qxh7# matına izin verir. Macdonald’a göre tek şans 51...Rb1+ 52.Kg2 Rb2+ 53.Kg3 Kg6 idi; Beyaz yine 54.Qc6+ Kf5 55.d5 ile kazanır (Motor: +3.76). 51...Kh6 52.Qe6+ ile b3 kalesi düşer (Motor: +4.71).',
      diger: [
        { move: '51...Rb1+', text: '52.Kg2 Kg6 53.d5 ve Beyaz kazanır ama oyun sürer (Motor: +3.76).' },
        { move: '51...Kh6', text: '52.Qe6+ Kg7 53.Qxb3 ve Beyaz kazanır (Motor: +4.71).' },
      ],
    },
    '52w': {
      text: '52.Qxh7#: Mat. Vezir h7’ye girer; h5’teki şahın g4, g6 ve h4 kareleri de kapalı.',
      amac: 'Oyunu bitirmek.',
      neden: 'Siyahın c-piyonu vezir olmaya bir hamle uzaktayken mat geldi. Maçın bütün hikâyesi bu son hamlede özetlenir: Beyazın şah kanadı saldırısı Siyahın vezir kanadı geçer piyonundan tam bir tempo hızlıydı. Diğer hamleler (52.Kg2 Kg6 53.Qc6+ gibi) de kazanırdı ama mat varken gereksiz (Motor: +4.28).',
      diger: [
        { move: '52.Kg2', text: '52...Kg6 53.Qc6+ Kf7 54.Qxc2 ve kazanır (Motor: +4.28).' },
      ],
    },
  },
  qa: [
    { q: 'Siyah neden 11...c4 oynadı?', a: 'Vezir kanadında piyon çoğunluğu kurmak ve geçer piyon üretmek için. Bu, dönemin ustalarına göre Siyaha avantaj veren bir yapıydı. Bedeli, d4’ün rahatlaması ve e5’in Beyaz atına kalıcı bir üs olmasıydı.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Motor uzun süre Siyahı daha iyi görüyor. Beyazın avantajı, Siyahın 38...Bxb3 ve 40...gxf6 hatalarından geldi. Bu hatalar g-hattını açtı ve Beyazın taşları Siyah şahına ulaştı.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: '38...fxg5 39.Qxg5 Nf6 ile hatlar kapalı kalırdı (Motor: −1.58). 40...Nxf6 ile at h7 ve g8’i korurdu (Motor: +0.77). İki hamle de Siyahı oyunda tutardı.' },
    { q: 'Beyaz neden 21.f5 oynadı?', a: 'f6 piyonunu sabitlemek için. e6 ve g6 kareleri Siyah taşlarına kapandı ve Siyah …f5 ile rahatlayamadı. Motor bu hamleyi tek iyi devam olarak görüyor.' },
    { q: '45.Kh1 neden bu kadar güçlü?', a: 'Şah çekmek yerine Beyaz şahını köşeye çeker. g1 karesi kaleye açılır ve Rg1 ile mat tehdit edilir. Siyah veziri vermek zorunda kalır.' },
    { q: 'Beyaz nerede hata yaptı?', a: '27.Rf1 ve 31.Nc1 ile. Motor 27.Nxd5 ve 31.Nf4’ü öneriyor; ikisi de dengeyi korurdu. Bu hatalardan sonra Siyah açıkça üstündü.' },
    { q: 'Siyah neden 8...exd5 aldı, 8...Nxd5 değil?', a: '8...Nxd5? 9.Nxd5 exd5 10.Bxe7 Qxe7 11.Rxc7 ile c7 düşer, çünkü d7 atı vezirin c7’yi korumasını engeller (Motor: +1.8).' },
    { q: 'Beyaz oyunu nasıl kazanılan sona çevirdi?', a: '42.Nh6! ile Rg8# tehdit edildi ve Siyah 42...Rg7 ile kale değişimine razı oldu. 43.Rxg7 Kxg7 44.Qg3+ Kxh6 sonrası şah h6’da açıkta kaldı; 45.Kh1! ve 46.Rg1 ile mat ağı kuruldu. Siyah vezirini 47...Qh5 48.Qf4+ Qg5 49.Rxg5 ile vermek zorunda kaldı, 50.Qd6+ çatalı da d7 atını kazandırdı (Motor: +3.76).' },
    { q: 'Sonda Siyah nerede direnebilirdi?', a: '40...Nxf6! en son gerçek kurtuluş şansıydı (Motor: +0.77, pratikte dengeli). 40...gxf6’dan sonra motor Beyazı kazanır görüyor; 41...Rxb3 bile en iyi savunmaydı. En sonda 51...c2?? yerine 51...Rb1+ 52.Kg2 ile oyun sürerdi, ama Beyaz yine kazanırdı (Motor: +3.76).' },
    { q: 'Sonda Beyaz hangi hamlelerde dikkatli olmak zorundaydı?', a: 'Siyahın c-piyonu ve b3 kalesi yüzünden neredeyse her Beyaz hamlesi tekti. 45.Kg2? Qc4 (Motor: −3.73), 47.Rg2? Rb1+ (Motor: −6.07) ya da 48.Qxh5+? Kxh5 (Motor: −6.62) oyunu tersine çevirirdi; 50.Qf5? c2 ise sürekli şaha götürürdü (Motor: 0.00). Pillsbury hepsinde zorlayıcı şah ya da tehdit hamlelerini bularak Siyaha c-piyonunu ilerletecek zaman bırakmadı.' },
  ],
  sources: [
    { title: 'Blind-Chess listesi: Annotated Game #001 Pillsbury–Tarrasch (R.J. Macdonald notları)', url: 'https://www.freelists.org/post/blind-chess/Annotated-Game-001-PillsburyTarrasch-Hastings-1895' },
    { title: 'Western Chess (John Hillery): Pillsbury–Tarrasch, Hastings 1895', url: 'https://westernchess.blogspot.com/2008/08/pillsbury-tarrasch-hastings-1895.html' },
    { title: 'Chess.com blog (NimzoRoy): Pillsbury Pummels Tarrasch! Hastings 1895', url: 'https://chess.com/blog/NimzoRoy/pillsbury-pummels-tarrasch-hastings-1895-qgd' },
    { title: 'Hastings 1895 turnuva sitesi (irlchess.com): Pillsbury – Tarrasch', url: 'https://irlchess.com/hastings/hastings1895_allfiles_v1.1/games_hastings1895/g17.htm' },
    { title: 'Wikipedia: Hastings 1895 chess tournament', url: 'https://en.wikipedia.org/wiki/Hastings_1895_chess_tournament' },
    { title: 'Wikipedia: Queen’s Gambit Declined', url: 'https://en.wikipedia.org/wiki/Queen%27s_Gambit_Declined' },
  ],
  exercises: [
    { id: 'pt-1', kind: 'tekrar', plan: false, title: 'At kovuldu, nereye?',
      source: 'Pillsbury – Tarrasch, Hastings 1895 (20. hamle)',
      fen: 'r2q1nk1/1b2r1pp/p4p2/1p2N3/2pPpP2/4P1Q1/PP2N1PP/2R1R1K1 w - - 0 20',
      prompt: 'Siyah ...f6 ile e5’teki atı kovdu. Atı saldırıdan koparmadan nereye götürürsünüz?',
      hint: 'At hem f6 piyonuna hem h6 karesine bakmalı.',
      line: ['Ng4'],
      explanation: '**20.Ng4!** At hem f6’ya hem h6’ya baskı yapar ve Qg3 ile birlikte şah kanadında kalır. Motor diğer bütün at çekilişlerinde Siyahı açıkça daha iyi görüyor; burada saldırıdan kopan her hamle Siyahın vezir kanadı planına zaman verir.',
      link: 'Pillsbury kurulumunda at e5’ten kovulunca g4 üzerinden saldırıya devam eder; f4-f5 ile f6 piyonu sabitlenecek.' },
    { id: 'pt-2', kind: 'tekrar', plan: false, title: 'Açılan g-hattında son darbe',
      source: 'Pillsbury – Tarrasch, Hastings 1895 (42. hamle)',
      fen: '7k/3nr2p/2q2p2/5P2/1p1Pp1NQ/1rp1P2P/6R1/5RK1 w - - 0 42',
      prompt: 'g-hattı açıldı. Siyahın şahını bağlayan zorlayıcı devamı bulun.',
      hint: 'Rg8 matını tehdit eden bir at hamlesi var.',
      line: ['Nh6', 'Rg7', 'Rxg7'],
      explanation: '**42.Nh6!** g8 ve f7 karelerini kontrol eder; tehdit **43.Rg8#**. Siyah 42...Rg7 ile kapatmak zorunda kalır, **43.Rxg7** ile g-hattındaki savunucu gider ve vezir şaha ulaşır. Diğer hamlelerde Beyazın avantajı tamamen kaybolur (motor: Nh6 +4.4, sonraki en iyi hamle 0.0).',
      link: 'Maçın kritik anı: ...gxf6 hatasıyla açılan g-hattı ve h6 karesi Beyazın taşlarına geçti.' },
    { id: 'pt-3', kind: 'transfer', plan: false, title: 'f-hattında kalenin fedası',
      source: 'Pillsbury – Marco, Paris 1900 (19. hamle)',
      fen: 'r4rk1/1b1qbp2/p4np1/3p2B1/2pP3Q/2p1P3/PPB3PP/R4RK1 w - - 0 19',
      prompt: 'Aynı kurulum (Ne5, f4-f5) beş yıl sonra başka bir maçta. f5 piyonu değişildi ve f-hattı açıldı. Saldırıyı nasıl sürdürürsünüz?',
      hint: 'f6’daki at hem h7’yi hem de şahı koruyor. Onu ortadan kaldırın.',
      line: ['Rxf6'],
      explanation: '**19.Rxf6!** Kale, şahın tek savunucusunu alır. 19...Bxf6 20.Bxf6 sonrası Qh8 matı tehdidi var; Siyahın vezir kanadındaki piyon kazancı burada önemsiz kalır. Motor: Rxf6 +6.0, sonraki en iyi hamle +3.0.',
      link: 'Tarrasch maçında f4-f5 piyonu f6’yı sabitledi; burada aynı f-piyonu hat açmak için değişildi ve f-hattındaki kale doğrudan f6’ya vurdu.' },
    { id: 'pt-4', kind: 'transfer', plan: false, title: 'g6 fedasıyla şahı açmak',
      source: 'Pillsbury – Marco, Paris 1900 (21. hamle)',
      fen: '5rk1/1b1qbp2/r4Rp1/p2p2B1/2pP3Q/2p1P3/PPB3PP/5RK1 w - - 2 21',
      prompt: 'Siyah ...Ra6 ile f6 kalesine saldırdı. Beyaz mat ağını nasıl kurar?',
      hint: 'c2 filinin çaprazı g6’ya kadar açık.',
      line: ['Bxg6', 'fxg6', 'Rxf8+', 'Bxf8', 'Rxf8+'],
      explanation: '**21.Bxg6!** fxg6 **22.Rxf8+** Bxf8 **23.Rxf8+** ve Siyah terk etti: 23...Kxf8 24.Qh8+ ile vezir kaybedilir ya da şah mat olur. Fil fedası g-hattını açar, f-hattındaki iki kale f8’de birleşir.',
      link: 'Pillsbury’nin iki maçında da kurulum aynıydı: e5 atı, f4-f5 ilerleyişi, b1-h7 çaprazındaki fil ve h-hattındaki vezir. Fark: burada Siyah şahını ...g6 ile zayıflatmıştı ve fil fedası hemen işe yaradı.' },
  ],
};
