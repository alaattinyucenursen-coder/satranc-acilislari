// Topalov – Kramnik, Dünya Şampiyonası maçı, Elista 2006 (9. oyun). Kaynak: PgnMentor (Topalov.pgn).
export default {
  id: 'topalov-kramnik-2006',
  theme: 'Fil çifti, e5 ile alan ve f7’ye toplu saldırı',
  white: 'Veselin Topalov', black: 'Vladimir Kramnik',
  whiteShort: 'Topalov', blackShort: 'Kramnik',
  event: 'Dünya Şampiyonası maçı, 9. oyun', site: 'Elista', year: 2006, eco: 'D12',
  variation: 'Slav Savunması, 4.e3 Bf5 5.Nc3 e6 6.Nh4', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. Nc3 e6 6. Nh4 Bg6 7. Nxg6 hxg6 8. a3 Nbd7 9. g3 Be7 10. f4 dxc4 11. Bxc4 O-O 12. e4 b5 13. Be2 b4 14. axb4 Bxb4 15. Bf3 Qb6 16. O-O e5 17. Be3 Rad8 18. Na4 Qb8 19. Qc2 exf4 20. Bxf4 Qb7 21. Rad1 Rfe8 22. Bg5 Be7 23. Kh1 Nh7 24. Be3 Bg5 25. Bg1 Nhf8 26. h4 Be7 27. e5 Nb8 28. Nc3 Bb4 29. Qg2 Qc8 30. Rc1 Bxc3 31. bxc3 Ne6 32. Bg4 Qc7 33. Rcd1 Nd7 34. Qa2 Nb6 35. Rf3 Nf8 36. Rdf1 Re7 37. Be3 Nh7 38. Rxf7 Nd5 39. R7f3 1-0`,

  summary: 'Oyunu Beyazlarla **Veselin Topalov** kazandı (1-0) ve maçta ilk kez öne geçti (4-4’ten 5-4’e). Kramnik, Slavın 4.e3 kolunda önceki oyunlardan ayrılıp **4...Bf5** oynadı; Topalov **6.Nh4** ile bu fili aldı ve fil çiftini kazandı. Ardından teoride neredeyse hiç görülmemiş **8.a3** ve **10.f4** ile bir piyon duvarı kurdu: f4 ve a3, c5 ile merkezi kilitleme ve Siyahın ...e5 kırılmasını önleme fikrine hizmet ediyordu. Kramnik **10...dxc4** ve **13...b4** ile vezir kanadında hareket aradı; motor bu hamleleri hâlâ dengeli buluyor, ama yorumcular Siyahın yapısının bozulduğunu ve Beyazın fillerine yol açıldığını vurguladı. İlk gerçek kayma **15...Qb6** oldu (15...c5 ile denge, oyunda +0.6), ardından **19...exf4** ile Siyah, Beyazın e4 piyonunu tek ve güçlü bir merkez piyonu olarak bıraktı. Topalov aceleye kaçmadı: merkezi itmek yerine Bg5, Kh1, Bg1 ve **26.h4** ile kanatlarda baskı kurdu, değişimlerden kaçtı. **24...Bg5?** fillerden birini değiştirme denemesiydi; Beyaz fili g1’e çekince Siyahın taşları dağınık kaldı (+1.2’den +2.1’e). **27.e5!** atları f6 ve d6’dan yoksun bıraktı. Son bölümde vezir **34.Qa2** ile a2-g8 çaprazına, kaleler f-hattına geldi. **35...Nf8?** e6 atını, yani çaprazı kapatan taşı geri çekti (+1.5’ten +2.9’a); **37.Be3!** Bg5 tehdidiyle son taşı da oyuna soktu ve **38.Rxf7!** piyonu aldı: 38...Rxf7 39.Rxf7 Qxf7 40.Be6 vezir şaha bağlanırdı. 39.R7f3 sonrası Kramnik terk etti; motor 39.Be6’yı daha da güçlü buluyor (+5.1).',
  intro: '**Maçın durumu.** Elista’daki birleşme maçı, tuvalet tartışması ve Kramnik’in oynamayı reddettiği 5. oyunun hükmen Topalov’a verilmesiyle gerilimli geçiyordu. Wikipedia’nın maç sayfasına göre 9. oyundan önce skor 4-4’tü; Topalov 8. oyunu Siyahla kazanmıştı ve bu oyunla ilk kez öne geçti. Kramnik bir sonraki oyunu (10.) kazanarak eşitliği yeniden sağlayacaktı.\n\n**Açılış: Yavaş Slav (4.e3).** Slav Savunmasında Siyah d5’i ...c6 ile destekler ve Vezir Gambitinin klasik derdi olan c8 filini ...e6’dan önce ...Bf5 ile zincirin dışına çıkarır. 4.e3 ile Beyaz c4’ü korur: ...dxc4 gelirse fil c4’ü geri alır. Wikipedia’nın Slav maddesine göre burada en yaygın devam 4...Bf5 5.Nc3 e6 **6.Nh4**’tür: Beyaz fil çiftini alır, Siyah ise sağlam bir yapı ve çoğu zaman ...e5 ile karşı oyun elde eder. Quality Chess blogundaki bir yazı da bu tür konumlarda Beyazın fil çiftini sabırla kullanmaya çalıştığını, tipik planının f2-f4 ve şah kanadında ilerleme olduğunu anlatır. Bu oyun o planın ders kitabı örneğidir.\n\n**Topalovun yeniliği.** Mihail Marin’in ChessBase analizine göre **8.a3** daha önce neredeyse hiç oynanmamıştı; USCF’nin raporu bunun Topalovun 2005’te kullandığı 8.Bd2’nin yerine geldiğini ve **10.f4**’ün Topalovun yardımcısı Vallejo’nun buluşu olduğunu yazar. Bu piyon hamleleri (a3, g3, f4) Susan Polgar’ın eleştirdiği gibi çok tempo harcar; ama Beyazın piyonları kara karelere yerleşince beyaz kareli fil serbest kalır ve Siyahın en doğal kırılması ...e5 zorlaşır.\n\n**Oyunun seyri.** Kramnik açık oyunu seçti (...dxc4, ...b5-b4, ...e5), ama karşılığında Beyaza e4’te güçlü bir merkez piyonu ve iki fil bıraktı. Topalov orta oyunda acele etmeden kanatlarda baskı kurdu, sonra e5 ile alan aldı ve f7’ye vezir ve iki kaleyle yüklendi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**6.Nh4 ve 7.Nxg6** ile Siyahın en iyi taşı olan beyaz kareli fili alıp fil çiftini kazanmak; karşılığında Siyaha verilen yarı açık h-hattına g3 ile önlem almak.',
      '**a3, g3 ve f4** ile piyonları kara karelere koymak: a3 ...Bb4’ü önler ve b4’ü destekler, f4 ...e5 kırılmasını zorlaştırır ve c5 ile merkezi kilitleme tehdidi yaratır. Bu sayede beyaz kareli fil serbest kalır.',
      '...dxc4 sonrası **12.e4** ile f4-e4 piyon ikilisini kurmak; Siyah ...e5 ile kırarsa e4’ü tek, güçlü bir merkez piyonu olarak tutmak ve d4’ü fil ve kaleyle korumak.',
      'Marin’in vurguladığı gibi merkezi erken itmeyip **kanatlarda tehdit yaratmak**: Bg5 ile bağ, Kh1 ile şahı g1-a7 çaprazından çekmek, Bg1 ile d4’ü sağlamlaştırmak, h4-h5 ile g6’ya baskı. Fil çiftini korumak için değişimlerden kaçmak.',
      'Doğru anda **27.e5** ile Siyahın atlarından f6 ve d6 karelerini almak, c6 piyonunu f3 filiyle sabitlemek.',
      'Veziri **a2-g8 çaprazına** (Qa2), kaleleri **f-hattına** (Rf3, Rdf1) getirip f7’ye toplu saldırmak; e6 atı çekildiği anda f7’de vurmak.',
      'g1’de bekleyen fili **Be3-g5** yoluyla son anda oyuna sokmak: Bg5 Siyahın e7 kalesine ve d8’e bakar, savunma çöker.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '4...Bf5 ile filini zincirin dışına çıkarmak; Nh4 sonrası fili verip **...hxg6** ile h-hattını açmak ve sağlam bir piyon yapısı kurmak.',
      'Marin’in önerdiği gibi **10...a5** ile 11.c5’e karşı ...b6 kırılmasını hazır tutmak (motor bunu Siyah için iyi buluyor: 11.c5 b6 sonrası −0.8). Oyunda ise 10...dxc4 ile merkezden vazgeçildi.',
      '...b5-b4 ile c3 atını kovup e4’ü zayıflatmak ve vezir kanadında hareket elde etmek; ama bu Siyahın a7 ve c6 piyonlarını yalnız bırakır.',
      '**...c5** kırılmasıyla Beyazın d4’ünü sorgulamak (15...c5 motor için tam denge); Kramnik bunun yerine ...Qb6 ve ...e5’i seçti.',
      '...e5 ile d-hattını açıp e4’e baskı yapmak; burada 19...exd4 ile merkezi açmak 19...exf4’ten daha iyiydi.',
      'Kara kareli filleri değişerek (...Bg5) Beyazın fil çiftini azaltmak; Topalov bu değişimi reddetti.',
      'Atları **e6 ve d5** karelerine yerleştirip a2-g8 çaprazını kapatmak ve f7’yi savunmak; e6 atı yerinde kaldıkça Beyazın kombinasyonu yoktu.',
    ] },
  },
  critical: [
    { move: '6w', title: '6.Nh4: fil çiftine giden yol', text: 'At f5 filine saldırır. Siyah fili g6’ya ya da e4’e çekebilir, ama 7.Nxg6 ile Beyaz fil çiftini her durumda alır. Bu çizginin bütün felsefesi budur: Beyaz uzun vadeli bir avantaj (iki fil) için Siyaha sağlam bir yapı ve yarı açık h-hattı verir. Wikipedia’nın Slav maddesi bunu 4.e3 kolunun en yaygın devamı olarak anar.' },
    { move: '10w', title: '10.f4: kilitleme fikri', text: 'Marin’e göre a3 ve f4 birlikte 11.c5 ile merkezi kilitlemeyi tehdit eder; o zaman ...e5 artık mümkün olmaz ve Beyaz karşı oyunsuz bir alan avantajı elde eder. Motor 10.Be2’yi biraz daha iyi buluyor (+0.3; oyunda yaklaşık 0.0), Polgar da bu kadar piyon hamlesini eleştirdi. Ama hamle Kramnik’i hemen bir karar vermeye zorladı.' },
    { move: '13b', title: '13...b4: aktif ama riskli', text: 'Marin bu hamleyi “büyük bir stratejik risk” olarak niteledi: c4 karesi zayıflar, f3’e gelecek filin önü açılır ve Siyahın piyonları dağılır; baskı sonuç vermezse Siyahın konumu umutsuz olur. Marin 13...Qb6’yı daha sağlam buldu. Motor burada yorumcularla aynı fikirde değil: 13...b4 +0.0, 13...Qb6 ise 14.e5 Ne8 15.Be3 sonrası +0.9. Riskli hamle somut olarak cezalandırılamıyor.' },
    { move: '15b', title: '15...Qb6?!: kaçan an', text: 'Motorun ilk kez net bir fark gösterdiği yer. 15...c5! ile Siyah d4’ü hemen sorgular: 16.Be3 Nb6 17.dxc5 Nc4 ve oyun dengede (0.0). Oyundaki 15...Qb6 sonrası +0.6. e3e5.com yorumcusu 15...c5’in incelenmesi gerektiğini ama Siyahın Beyaz fillerine hat açmaktan çekindiğini yazar.' },
    { move: '19b', title: '19...exf4?!: e4’ü serbest bırakmak', text: 'Polgar ve USCF raporu bu hamleyi eleştirdi. 19...exd4 20.Bxd4 Nb6 ile Siyah Beyazın merkez piyonlarından birini ortadan kaldırır ve d-hattında etkin kalır (+0.7). Oyunda ise 20.Bxf4 ile Beyazın fili b8 vezirine bakar, e4 piyonu merkezde tek ama güçlü kalır ve e5 ilerleyişi her an mümkündür (+1.1).' },
    { move: '24b', title: '24...Bg5?: değişim olmayınca', text: 'Siyah kara kareli filleri değiştirip Beyazın fil çiftini azaltmak istedi. Ama Topalov 25.Bg1 ile reddetti ve g5 fili, 26.h4 ile tekrar kovalanacak bir hedef oldu. Motor 24...Ndf6’yı öneriyor (+1.4); maç hamlesinden sonra +2.1. Bu, oyunun ikinci büyük kaymasıdır.' },
    { move: '27w', title: '27.e5!: alan ve kapalı kareler', text: 'Marin hamleyi iyi zamanlanmış buluyor; Polgar da onu oyunun anahtar hamlesi sayıyor. Piyon f6 ve d6’yı alır, c6’ya f3 filiyle birlikte baskı yapar ve Siyah c6’yı korumak için 27...Nb8 gibi bir geri çekilişe razı olur. Motor: 27.e5 +2.0, en yakın alternatif 27.Bg2 +1.7.' },
    { move: '35b', title: '35...Nf8?: çaprazı açan hata', text: 'e6 atı hem d4’e baskı yapıyor hem de a2-g8 çaprazını kapatıyordu. At çekilince vezir f7’ye bakar ve 36.Rdf1 ile üç taş f7’ye toplanır. e3e5.com bunu “zaten kaybetmeye yakın bir konumda belirleyici hata” olarak niteledi. Motor 35...Qe7 (+1.5) ya da 35...c5 36.d5 Nf8 (+1.6) ile direnişi öneriyor; oyunda +2.9.' },
    { move: '38w', title: '38.Rxf7!: bağ fikri', text: '37.Be3 sonrası Siyah 38.Bg5’i önlemek için 37...Nh7 oynadı ve at e6’yı tamamen bıraktı. 38.Rxf7! 38...Rxf7 39.Rxf7 Qxf7 40.Be6 ile vezir şaha bağlanır: 40...Rd7 41.Bxf7+ Rxf7 sonrası Beyaz iki kale ve fil karşılığında vezir, kale ve bir piyon almış olur (Motor: +5.0). Kramnik almadı, 38...Nd5 oynadı; burada 39.Be6! daha da güçlüydü (39...Rxe6 40.Rxc7), Topalov 39.R7f3 ile sakin devam etti ve Kramnik terk etti.' },
  ],
  lessons: [
    'Fil çifti uzun vadeli bir avantajdır: Beyaz onu hemen kullanmaya çalışmadı, piyonlarını kara karelere koyup fillerine çapraz açtı ve değişimlerden (24...Bg5, 30...Bxc3’e kadar) kaçtı.',
    'Alan avantajında acele etmemek: Marin’in vurguladığı gibi merkez piyonları erken itilirse rakibin atlarına sağlam kareler kalır. Topalov önce kanatlarda hazırlık yaptı (Kh1, Bg1, h4), e5’i ancak atlar d5’e gelemeyecekken oynadı.',
    'Gerginliği çözerken hangi piyonla alındığına dikkat: 19...exd4 Beyazın merkezini azaltırdı; 19...exf4 ise rakibe e4’te güçlü bir piyon ve etkin bir fil bıraktı.',
    'Bir taş önemli bir çaprazı kapatıyorsa (burada e6 atı a2-g8’i), o taşı geri çekmeden önce arkasında neyin açığa çıkacağını hesaplayın.',
    'Bir hedefe saldıranları ve savunanları sayın: f7’ye Qa2, Rf3 ve Rf1 bakıyordu; savunmada şah, vezir ve kale vardı. Son taş (Be3-g5) eklenince denge bozuldu.',
    'Bağ, değişimi kazanca çevirir: 38...Rxf7 39.Rxf7 Qxf7 40.Be6 fikri, 39.Be6 Rxe6 40.Rxc7 fikri gibi, taşların bir çizgi üzerinde dizilmesinden doğar.',
    'Pasif bir taşı (g1 fili) en son anda oyuna sokmak çoğu zaman kazandıran hamledir: 37.Be3 motorun açık farkla birinci tercihi.',
  ],
  notes: {
    '1w': {
      text: 'Vezir piyonu açılışı. d4 piyonu e5 ve c5 karelerini kontrol eder ve c1 filine yol açar.',
      amac: 'Topalov çoğunlukla 1.e4 oynasa da bu maçta Kramnik’in Slavına karşı 1.d4’ü seçti; kapalı ve stratejik bir oyuna hazırlıklıydı.',
      neden: 'd4 piyonu vezirle korunur, bu yüzden 1.e4’ten farklı olarak merkezde erken bir saldırı hedefi yoktur. Beyaz c4 ile merkezde ikinci bir baskı kurmayı planlar.',
      diger: [
        { move: '1.e4', text: 'Topalovun asıl silahı; Kramnik’e karşı Berlin ve Rus Savunması gibi çok sağlam sistemlerle karşılaşırdı. Motor: +0.3.' },
        { move: '1.Nf3', text: 'Esnek başlangıç; çoğu zaman aynı yapılara geçer. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: 'Siyah merkezde aynı piyonla karşılık verir ve e4 karesini kontrol eder.',
      amac: 'Klasik bir merkez kurmak ve Slav ya da Vezir Gambiti Reddi yapılarına yönelmek.',
      neden: 'Kramnik maç boyunca 1...d5 ile Slav ve Vezir Gambiti yapılarını tercih etti; bu sistemler onun repertuvarının temelidir.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına (Nimzo-Hint, Kral Hint, Grünfeld) giden yol. Motor: +0.3.' },
      ],
    },
    '2w': {
      text: 'Vezir Gambiti: c4 piyonu d5’e baskı yapar.',
      amac: 'Siyahı d5’i bir piyonla desteklemeye ya da merkezden vazgeçmeye zorlamak.',
      neden: 'c4 ile Beyaz kanattan merkeze saldırır; ...dxc4 gelirse e4 ile tam bir piyon merkezi kurabilir.',
      diger: [
        { move: '2.Nf3', text: 'Önce gelişip c4’ü sonraya saklamak. Motor: +0.4.' },
        { move: '2.Bf4', text: 'Londra Sistemi; daha sakin bir kurulum.' },
      ],
    },
    '2b': {
      text: 'Slav Savunması: d5 ...c6 ile desteklenir ve c8 filinin yolu kapanmaz.',
      amac: 'Merkezi sağlam tutarken beyaz kareli fili ...e6’dan önce dışarı çıkarmak.',
      neden: '2...e6 (Vezir Gambiti Reddi) da sağlamdır ama c8 filini piyon zincirinin içine hapseder. Slav bu sorunu çözer; bedeli b8 atının doğal c6 karesini kaybetmesidir.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi; Kramnik’in de sık oynadığı sistem. Motor: +0.3.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü; merkezi bırakıp hızlı gelişmeye yönelir. Motor: +0.3.' },
      ],
    },
    '3w': {
      text: 'At gelişir, e5 karesini kontrol eder ve d4’ü destekler.',
      amac: 'Gelişmeyi sürdürüp Siyahın ...dxc4 ve ...b5 ile piyon tutma fikirlerine karşı esnek kalmak.',
      neden: '3.Nc3 de ana hamledir, ama 3.Nf3 ile Beyaz 3...dxc4 sonrası e3 ve Bxc4 ile piyonu rahatça geri almayı garantiler.',
      diger: [
        { move: '3.Nc3', text: 'Daha keskin; 3...e6 ile Yarı Slava ya da 3...dxc4 ile Beyazın e4 oynayabildiği konumlara gider. Motor: +0.4.' },
        { move: '3.cxd5', text: 'Değişim Slavı; simetrik ve sakin. Motor: +0.35.' },
      ],
    },
    '3b': {
      text: 'At f6’dan d5’i ve e4’ü korur.',
      amac: 'Gelişmeyi tamamlamak ve ...dxc4 ya da ...Bf5 için zemin hazırlamak.',
      neden: 'Slavın ana hamlesi. 3...e6 Yarı Slava, 3...dxc4 ise erken bir piyon kazanma denemesine gider.',
      diger: [
        { move: '3...e6', text: 'Yarı Slava (ya da Meran yapısına) yönelir; c8 fili yine içeride kalır. Motor: +0.5.' },
        { move: '3...dxc4', text: 'Piyonu alıp ...b5 ile tutmaya çalışmak; 4.e3 ya da 4.a4 ile Beyaz piyonu geri alır.' },
      ],
    },
    '4w': {
      text: 'Sakin 4.e3: c4 korunur, ama c1 filinin yolu kapanır. Buna “Yavaş Slav” denir.',
      amac: 'Ana kolların (4.Nc3 dxc4 5.a4) derin teorisinden kaçmak ve sağlam bir kurulumla Siyahı yeni bir konuma çekmek.',
      neden: '4.e3 sonrası ...dxc4 her zaman Bxc4 ile karşılanır, bu yüzden Siyah piyon tutma fikirlerinden vazgeçmek zorundadır. Bunun bedeli c1 filinin geçici olarak kapanmasıdır.',
      diger: [
        { move: '4.Nc3', text: 'Ana kol: 4...dxc4 5.a4 Bf5. İlk oyunda Topalov 3.Nc3 sırasıyla bu yapıyı oynamıştı. Motor: +0.3.' },
        { move: '4.cxd5', text: 'Değişim Slavı. Motor: +0.3.' },
      ],
    },
    '4b': {
      text: 'Fil, ...e6 oynanmadan önce zincirin dışına çıkar. Slavın ana fikri budur.',
      amac: 'c8 filini etkin bir çapraza (b1-h7) koymak ve sonra ...e6 ile sağlam bir yapı kurmak.',
      neden: 'Marin’in ChessBase analizine göre Kramnik burada önceki oyunlardan ayrıldı. 4...Bf5 en doğal hamledir, ama Beyaza Nh4 ile fili kovalama fırsatı verir; 4...a6 (Chebanenko) ve 4...e6 bu sorunu yaşamaz.',
      diger: [
        { move: '4...a6', text: 'Chebanenko Slavı: önce ...b5 ile vezir kanadında yer açar; Wikipedia 1990’larda yaygınlaştığını yazar. Motor: +0.4.' },
        { move: '4...e6', text: 'Yarı Slav’a geçiş; c8 fili içeride kalır. Motor: +0.3.' },
        { move: '4...Bg4', text: 'Fili g4’e koymak; Wikipedia 5.cxd5 cxd5 6.Qb3 Qc7 sonrası Siyahın iyi olduğunu yazar.' },
      ],
    },
    '5w': {
      text: 'At gelişir ve d5’e baskı ekler.',
      amac: 'Gelişmeyi sürdürmek ve Nh4 fikrini hazır tutmak.',
      neden: 'Hemen 5.Nh4 de oynanır ama 5...Be6 ya da 5...Bg4 gibi cevaplar Siyaha seçenek verir. 5.Nc3 sonrası ...e6 doğaldır ve Nh4’ün ardından fil kaçamaz.',
      diger: [
        { move: '5.Nh4', text: 'Erken kovalama; 5...Be6 6.cxd5 cxd5 ile Siyahın fili e6’da kalır. Motor: +0.1.' },
        { move: '5.Bd3', text: 'Fili değişmeye davet etmek; 5...Bg6 ya da 5...Bxd3 ile sakin konumlar. Motor: +0.2.' },
      ],
    },
    '5b': {
      text: '...e6 ile d5 sağlamlaşır ve f8 filinin yolu açılır.',
      amac: 'Gelişmeyi tamamlamak; f8 filini e7, d6 ya da b4’e çıkarmak.',
      neden: 'Bu yapı Slavın “ideal kurulumu”dur: fil dışarıda, piyonlar c6-d5-e6’da. Beyazın Nh4 hamlesini önlemek için ...h6 ya da ...Bg6 erken oynanmaz; Siyah fil çiftini vermeyi kabul eder.',
      diger: [
        { move: '5...a6', text: 'Önce ...b5 fikri; Beyaz 6.Bd3 ile filleri değiştirir. Motor: +0.4.' },
        { move: '5...Nbd7', text: '6.Nh4 Be4 7.f3 Bg6 ile Beyaz hem fil çiftini hem f3-e4 merkezini alır. Motor: +0.5.' },
      ],
    },
    '6w': {
      text: '6.Nh4! At f5 filine saldırır; Beyaz fil çiftini almayı hedefler.',
      amac: 'Siyahın en iyi taşını, beyaz kareli fili, at karşılığında almak ve uzun vadeli bir avantaj olarak fil çiftini kazanmak.',
      neden: 'Polgar’ın yorumuna göre Beyaz hemen Siyahın beyaz kareli filini hedef alır. Kenardaki at tehlikede değildir, çünkü Siyah onu alamaz; fil g6’ya kaçsa da Nxg6 her zaman mümkün. Wikipedia bunu 4.e3 kolunun en yaygın devamı olarak anar.',
      diger: [
        { move: '6.Bd3', text: 'Fil değişimine davet; Beyaz fil çiftini almaz, oyun daha sakindir. Motor: +0.1.' },
        { move: '6.cxd5', text: 'Önce merkezi netleştirmek; 6...exd5 sonrası Siyahın fili f5’te çok iyi durur. Motor: 0.0.' },
      ],
    },
    '6b': {
      text: 'Fil g6’ya çekilir; Siyah fili vermek zorunda kalacağını kabul eder.',
      amac: 'Fil alındığında ...hxg6 ile h-hattını açmak ve sağlam bir yapı elde etmek.',
      neden: 'g6 en doğal karedir: fil alınınca h-piyonu merkeze doğru alır ve h-hattı Siyah kaleye açılır. 6...Bg4 ise 7.Qb3 ile b7’ye baskıya izin verir; Quality Chess blogu bu kolun (Kaufman’ın 7...Bh5 fikriyle) artık pek itibar görmediğini yazar.',
      diger: [
        { move: '6...Be4', text: '7.f3 Bg6 ile fil yine g6’ya gider ama Beyaz f3 ile e4’ü kontrol etmiş olur. Motor: +0.3.' },
        { move: '6...Bg4', text: '7.Qb3 Qb6 8.h3 Bh5 9.g4 ile Beyaz fili yine yakalar. Motor: +0.6.' },
      ],
    },
    '7w': {
      text: 'At fili alır; Beyaz fil çiftini kazandı.',
      amac: 'Fil çiftini hemen garantiye almak.',
      neden: 'Fili beklemek Siyaha ...Nbd7 ve ...Bd6 ile h4 atını tehdit etme fırsatı verir. Motor 7.Bd2 ve 7.Qb3’ü de aynı seviyede görüyor; fark sadece hamle sırasıdır.',
      diger: [
        { move: '7.Qb3', text: 'Önce b7’ye baskı: 7...Qc7 8.g3 ile Nxg6 sonraya kalır. Motor: +0.3.' },
        { move: '7.Bd2', text: 'Esnek bekleme hamlesi; 7...Nbd7 8.Nxg6 hxg6 9.Qc2 benzeri yapılar. Motor: +0.3.' },
      ],
    },
    '7b': {
      text: 'Doğru taraftan alınır: h-hattı açılır ve piyon merkeze doğru gelir.',
      amac: 'Yapıyı sağlam tutmak ve h-hattını Siyah kalesi için yarı açık yapmak; g6 piyonu f5 ve h5 karelerini kontrol eder.',
      neden: '“Merkeze doğru al” kuralı burada çok net: 7...fxg6 e6 piyonunu zayıflatır ve şahın önünü açar. h-hattı ise Beyaz kısa rok yaparsa h2’ye karşı bir koz olur; Beyazın 9.g3’ü bu yüzden gelir.',
      diger: [
        { move: '7...fxg6', text: 'e6 geri kalır ve a2-g8 çaprazı açılır; 8.Qb3 Qb6 9.c5 ile Beyaz rahat üstün. Motor: +1.1.' },
      ],
    },
    '8w': {
      text: '8.a3: ...Bb4 ile c3 atına baskıyı önler ve b4 karesini hazırlar.',
      amac: 'Beyazın piyon yapısını kara karelere kurmak; c5 ile kilitleme planında b4’ü desteklemek.',
      neden: 'Marin’e göre bu hamle daha önce neredeyse hiç oynanmamıştı; Topalovun Siyahla Slavda sık oynadığı ...a6 fikrinin diğer taraftan uygulamasıydı. Polgar normalde 8.g3, 8.Bd2 ya da 8.Qb3 oynandığını, USCF raporu da Topalovun 2005’te 8.Bd2 kullandığını yazar. Marin’e göre a3 sonradan f4 ve c5 planlarını destekledi.',
      diger: [
        { move: '8.Qb3', text: 'b7’ye baskı; 8...Qc7 9.g3 Be7 10.Bg2 ile klasik kurulum. Motor: +0.25.' },
        { move: '8.Bd2', text: 'Topalovun 2005’teki tercihi; 8...Be7 9.h4 dxc4 10.Qf3 gibi keskin devamlar. Motor: +0.2.' },
        { move: '8.g3', text: 'Önce h2’yi korumak; a3 için daha sonra karar vermek. Motor: +0.2.' },
      ],
    },
    '8b': {
      text: 'At d7’ye gelişir; ...dxc4 ve ...e5 ya da ...c5 hazırlanır.',
      amac: 'Merkez kırılmalarını (...e5 ya da ...c5) desteklemek ve gerekirse b6 üzerinden d5’e gitmek.',
      neden: 'Slavda b8 atının doğal karesi c6 doludur, bu yüzden d7 tek mantıklı yerdir. Siyah fili henüz e7 mi d6 mı karar vermeden bekletir.',
      diger: [
        { move: '8...Be7', text: 'Aynı yapıya farklı hamle sırasıyla gider. Motor: +0.2.' },
        { move: '8...a6', text: '...b5 ile vezir kanadında yer açma; 9.Qb3 b5 10.c5 e5 keskinleşir. Motor: +0.3.' },
      ],
    },
    '9w': {
      text: 'g3: h-hattındaki baskıya karşı h2’yi korur ve f4’ü hazırlar.',
      amac: 'Kısa rokun güvenliğini sağlamak ve f2-f4 ile kara karelerde piyon duvarını tamamlamak.',
      neden: 'Açık h-hattı yüzünden h2 doğal bir hedeftir; g3 bunu önler. Fil g2’ye de gidebilir, ama Topalov fili f1’de tutup ...dxc4 sonrası Bxc4’ü hazır tuttu.',
      diger: [
        { move: '9.Bd2', text: 'Gelişme hamlesi; 9...Be7 10.h4 ile şah kanadında başka bir yapı. Motor: +0.2.' },
        { move: '9.Qb3', text: 'b7’ye baskı; 9...Qb6 10.Qa2 ile vezirlerin değişmemesi denenebilir. Motor: +0.1.' },
      ],
    },
    '9b': {
      text: 'Fil e7’ye gelişir, rok hazırlanır.',
      amac: 'Şahı güvenceye almak ve ...dxc4 ile ...e5 ya da ...c5 kırılmalarına hazırlanmak.',
      neden: 'e7 sağlam bir karedir; 9...Bd6 ise 10.f4 ve e4-e5 gibi piyon ilerleyişleriyle kovalanabilirdi. Motor e7 ile d6 arasında belirgin fark görmüyor.',
      diger: [
        { move: '9...Bd6', text: '10.Qb3 Qb6 11.Qa2 dxc4 benzeri devamlar; fil daha etkin ama hedef. Motor: +0.2.' },
        { move: '9...a6', text: 'Önce ...b5 fikri; 10.Bg2 dxc4 11.Qe2 e5. Motor: +0.3.' },
      ],
    },
    '10w': {
      text: '10.f4: e5’i kontrol eder ve piyon duvarını f4-e3-d4’e uzatır.',
      amac: 'Siyahın ...e5 kırılmasını önlemek ve 11.c5 ile merkezi kilitleyip alan avantajı kurmak.',
      neden: 'Marin’in ChessBase analizine göre Beyaz piyonlarını kara karelere koyarak beyaz kareli filini serbest bırakıyor; a3 ve f4 birlikte 11.c5 tehdidini yaratıyor, ...b6 gelirse 11.b4 hazır. USCF raporu fikrin Vallejo’ya ait olduğunu yazar. Polgar ise çok fazla piyon hamlesini eleştirdi ve motor da 10.Be2’yi biraz daha iyi buluyor.',
      diger: [
        { move: '10.Be2', text: 'Sakin gelişme; 10...a6 11.O-O b5 12.b3 ile küçük bir avantaj. Motor: +0.3 (oyunda 0.0).' },
        { move: '10.Bd3', text: 'Fil d3’te; 10...O-O 11.O-O Re8 12.Kg2. Motor: +0.2.' },
        { move: '10.Qc2', text: '10...O-O 11.h4 dxc4 12.Bxc4 ile h-hattına karşı saldırı fikri. Motor: +0.1.' },
      ],
    },
    '10b': {
      text: 'Siyah c4’te alır; Beyazın filine bir tempo harcatır ama merkezden vazgeçer.',
      amac: 'c5 kilitlemesini önlemek ve hızlı gelişmeyle merkezde hareket alanı açmak.',
      neden: 'Marin bu kararı “riskli” buldu: merkez bu kadar kolay bırakılınca Beyaz e4 ile iki piyonlu bir merkez kurar. Marin 10...a5’i dikkate değer buldu (11.c5 b6 fikriyle). Polgar da neden Beyazın fili f1’den çıkana kadar beklenmediğini sordu: fil e2’ye gitmiş olsaydı ...dxc4 Beyaza bir tempo daha kaybettirirdi. Motor ise 10...dxc4’ü en iyi hamleler arasında görüyor (−0.05).',
      diger: [
        { move: '10...a5', text: 'Marin’in önerisi. Kilitleme gelirse 11.c5 b6! ve Beyazın yapısı sarsılır: 12.cxb6 Qxb6 13.g4 sonrası Motor: −0.8. Beyaz büyük olasılıkla c5’i oynamaz.' },
        { move: '10...O-O', text: 'Beklemek; 11.c5 a5 12.Rb1 b6 13.b4 Ne4 ile Siyah karşı oyun bulur. Motor: −0.1.' },
        { move: '10...c5', text: 'Hemen kırmak: 11.cxd5 Nxd5 12.Nxd5 exd5 ile simetrik bir yapı. Motor: 0.0.' },
      ],
    },
    '11w': {
      text: 'Fil c4’ü geri alır.',
      amac: 'Malzemeyi eşitlemek ve fili a2-g8 çaprazına yerleştirmek.',
      neden: 'Zorunluya yakın: 11.Bg2 ya da 11.Qe2 ile piyonu geri almayı ertelemek Siyaha ...b5 ile piyonu tutma fırsatı verir (Motor: −0.4 ve daha kötü).',
      diger: [
        { move: '11.Bg2', text: '11...Rc8 12.O-O b5 ile Siyah c4 piyonunu tutar. Motor: −0.4.' },
      ],
    },
    '11b': {
      text: 'Siyah rok yapar.',
      amac: 'Şahı güvene almak ve kaleyi f8’den merkeze bağlamak.',
      neden: 'Doğal hamle, ama yorumcular daha esnek bir hamle istedi: USCF raporu 11...O-O’yu ?! ile işaretleyip 11...Nb6 önerdi, Polgar da 11...Nb6 ve ...Nbd5 ile atı merkeze yerleştirmeyi tercih etti. Motor ise farkı çok küçük görüyor (11...Rc8 −0.1, 11...Nb6 +0.05, oyun +0.06).',
      diger: [
        { move: '11...Nb6', text: 'Polgar’ın önerisi: 12.Be2 O-O 13.Bf3 Qc7 ve at d5’e gelebilir; e4 ilerleyişi zorlaşır. Motor: +0.05.' },
        { move: '11...Rc8', text: 'Önce ...c5’i hazırlamak: 12.O-O O-O 13.e4 c5. Motor: −0.1.' },
        { move: '11...c5', text: '12.d5 exd5 13.Nxd5 O-O ile merkez açılır. Motor: 0.0.' },
      ],
    },
    '12w': {
      text: '12.e4: f4 ve e4 yan yana; Beyaz merkezde iki piyonla alan kazanır.',
      amac: 'Fil çiftine bir de merkez üstünlüğü eklemek ve e5 ilerleyişini tehdit etmek.',
      neden: 'Marin burada, Beyazın merkez avantajının bir Grünfeld’dekinden büyük olup olmadığını sorar ve Siyahın birkaç tempo gelişme üstünlüğünün yeterli olmadığını düşünür. e4 ile Beyaz e5 sonrası f6 atını kovma tehdidi de yaratır. Bedeli, şahın merkezde biraz daha uzun kalmasıdır.',
      diger: [
        { move: '12.g4', text: 'Keskin bir piyon saldırısı: 12...c5 13.g5 Nh5 ile kaotik bir oyun. Motor: −0.1.' },
        { move: '12.Qe2', text: 'Gelişmeye devam; 12...Nb6 13.Bd3 c5 ile Siyah merkezi kırar. Motor: −0.2.' },
      ],
    },
    '12b': {
      text: '...b5 ile fil kovalanır ve ...b4 ile c3 atına saldırı hazırlanır.',
      amac: 'Tempoyla vezir kanadında yer açmak, c3 atını uzaklaştırıp e4’ü zayıflatmak.',
      neden: 'Siyah, Beyazın şahı merkezdeyken hareket arıyor. Ama USCF raporu bu hamleyi ?! ile işaretledi, Polgar da “yanlış planın başlangıcı” dedi ve 12...Rc8 ya da 12...Nb6’yı önerdi: c6 piyonu yalnız kalır ve vezir kanadındaki piyonlar hedef olur. Motor üç hamleyi de dengeli buluyor.',
      diger: [
        { move: '12...Rc8', text: '13.e5 Nd5 14.Bxd5 cxd5 ile Siyah c-hattında rahat. Motor: 0.0.' },
        { move: '12...Nb6', text: '13.Bb3 Rc8 14.Be3 c5 ile klasik kırılma. Motor: +0.1.' },
      ],
    },
    '13w': {
      text: 'Fil e2’ye çekilir; sonra f3’e gidip e4’ü destekleyecek.',
      amac: 'Fili uzun çapraza (f3-c6) yerleştirip e4’ü korumak ve c6 piyonuna baskı kurmak.',
      neden: 'Marin’e göre a3’ün bir faydası burada görülür: fil en iyi karesine (f3) daha hızlı ulaşır. 13.Bd3 ya da 13.Bb3 sonrası ...b4 filin işini zorlaştırır.',
      diger: [
        { move: '13.Bd3', text: '13...b4 14.axb4 Bxb4 15.O-O ile fil d3’te pasif kalır. Motor: −0.1.' },
        { move: '13.Bb3', text: '13...b4 14.axb4 Bxb4 15.e5 ile fil a2-g8 çaprazında ama e4 desteksiz. Motor: −0.1.' },
      ],
    },
    '13b': {
      text: '...b4 ile c3 atına saldırılır.',
      amac: 'Atı kovup e4’ü zayıflatmak ve fili b4’e getirip c3’e baskı kurmak.',
      neden: 'Marin bu “görünüşte aktif” hamleyi büyük bir stratejik risk saydı: Siyahın yapısı dağılır, c4 karesi zayıflar ve f3 filine yeni hatlar açılır; baskı işe yaramazsa Siyah umutsuz kalır. Marin 13...Qb6’yı daha sağlam buldu. Motor ise 13...b4’ü en iyi hamle olarak görüyor (+0.0), 13...Qb6’ya 14.e5 ile cevap veriyor (+0.9).',
      diger: [
        { move: '13...Qb6', text: 'Marin’in önerisi; ama 14.e5 Ne8 15.Be3 Nc7 16.h4 ile Beyaz alan kazanır. Motor: +0.9.' },
        { move: '13...Nb6', text: '14.h4 c5 15.e5 Nh5 ile karışık bir oyun. Motor: +0.2.' },
      ],
    },
    '14w': {
      text: 'Tek iyi hamle: a-piyonu b4’te alır.',
      amac: 'a-hattını Beyaz kalesi için açmak ve atı c3’te tutmak.',
      neden: 'At kaçarsa e4 düşer ya da b-piyonları Siyaha geçer: 14.Na2? bxa3 ile Siyah üstün (Motor: −1.6), 14.Nb1 Nxe4 de kötü. axb4 sonrası a7 piyonu a1 kalesinin hedefi olur.',
      diger: [
        { move: '14.Na2', text: '14...bxa3 15.Nc3 axb2 16.Bxb2 ile Siyah bir piyon fazla. Motor: −1.6.' },
        { move: '14.Nb1', text: '14...Nxe4 ile merkez piyonu düşer. Motor: −1.8.' },
      ],
    },
    '14b': {
      text: 'Fil b4’ten alır ve c3 atını bağlar.',
      amac: 'c3 atına baskı kurup e4’ü dolaylı olarak hedef almak.',
      neden: 'Bağ önemli: c3 atı oynayamazsa e4’ü korumak zorlaşır. 14...Nb6 ya da 14...a5 ile piyonu geri almayı ertelemek Beyaza b5 ya da e5 ile hamle kazandırır.',
      diger: [
        { move: '14...Nb6', text: '15.Qd3 Bxb4 16.O-O c5; Beyaz rahat geliştiği için Motor: +0.55.' },
        { move: '14...a5', text: '15.e5 Ne8 16.b5 ile Beyaz piyonu tutar. Motor: +1.15.' },
      ],
    },
    '15w': {
      text: 'Fil f3’te e4’ü korur ve uzun çaprazda c6’ya bakar.',
      amac: 'Bağlı c3 atının yükünü almak ve c6 piyonunu kalıcı bir hedef yapmak.',
      neden: 'Polgar bu hamleyi en iyi hamle sayıyor; motor da katılıyor (+0.0). 15.e5 Nd5 ya da 15.O-O Bxc3 bxc3 Nxe4 Siyaha karşı oyun verirdi.',
      diger: [
        { move: '15.e5', text: '15...Nd5 16.Qd3 Nc5! ile Siyah merkez karelerini ele geçirir. Motor: −0.4.' },
        { move: '15.O-O', text: '15...Bxc3 16.bxc3 Nxe4 ile e4 düşer. Motor: −0.35.' },
      ],
    },
    '15b': {
      text: 'Vezir b6’dan b2’ye ve d4’e bakar.',
      amac: 'd4 üzerindeki baskıyı artırmak ve ...e5 ya da ...c5 için hazırlık yapmak.',
      neden: 'Bu oyunda motorun ilk gördüğü gerçek kayma. 15...c5! ile Siyah merkezi hemen sorgular ve dengeyi korurdu. e3e5.com yorumcusu 15...c5’in incelenmesi gerektiğini ama Siyahın fillere hat açmaktan çekindiğini yazar; Kramnik’in ...Qb6-b8-b7 manevrası da sonradan zaman kaybına döndü.',
      diger: [
        { move: '15...c5', text: '16.Be3 Nb6 17.dxc5 Nc4 ile Siyahın taşları canlanır, Beyazın e3 fili saldırı altında. Motor: 0.0 (oyunda +0.6).' },
        { move: '15...Nb6', text: '16.O-O a5 17.Kg2 a4 ile vezir kanadında piyon ilerletmek. Motor: +0.3.' },
        { move: '15...Rb8', text: 'b-hattını işgal; 16.O-O c5 17.d5. Motor: +0.3.' },
      ],
    },
    '16w': {
      text: 'Beyaz rok yapar; şah güvene alınır, f1 kalesi f-hattına bağlanır.',
      amac: 'Gelişmeyi tamamlamak ve f-hattını kale için hazırlamak.',
      neden: 'Şah daha fazla merkezde kalırsa ...c5 ya da ...e5 ile hatlar açılır. Rok sonrası g1 şahı b6 vezirinin çaprazındadır, ama d4 sağlam korunuyor. 16.Be3 c5 17.e5 Nd5 Siyahı rahatlatırdı.',
      diger: [
        { move: '16.Be3', text: '16...c5 17.e5 Nd5 18.Bxd5 exd5 ile Siyah merkezde dengeyi kurar. Motor: +0.3.' },
        { move: '16.Kf2', text: 'Elle rok; 16...e5 ile merkez açılırsa şah açıkta kalır. Motor: +0.1.' },
      ],
    },
    '16b': {
      text: '...e5 ile merkeze meydan okunur.',
      amac: 'd4’e üç taşla (vezir, e5 piyonu, ileride kale) baskı yaparak Beyaz merkezini çözmek ve d-hattını açmak.',
      neden: 'Marin bunu Siyahın planladığı karşı oyun olarak anar, ama Beyazın merkez yapısını bozmadan karşılayacak kaynakları olduğunu ekler. Motor 16...Rad8 ya da 16...c5’i biraz daha iyi buluyor.',
      diger: [
        { move: '16...Rad8', text: '17.Kh1 c5 18.e5 Bxc3 19.bxc3 ile Siyah merkezde daha esnek. Motor: +0.5.' },
        { move: '16...c5', text: '17.e5 Bxc3 18.bxc3 Nd5 ile at d5’e yerleşir. Motor: +0.6.' },
      ],
    },
    '17w': {
      text: '17.Be3: fil d4’ü korur ve b6 vezirinin çaprazına girer.',
      amac: 'Merkezi tutmak, ...exd4’e karşı fille almak ve şahın g1-a7 çaprazındaki riskini azaltmak.',
      neden: 'USCF raporu hamleye ! veriyor ve Kramnik’in “Oyun burada neredeyse kararlaştı” dediğini aktarıyor. Motor da açık farkla birinci tercih (+0.7); 17.Kh1 ya da 17.Kg2 ...exd4 sonrası Siyaha rahat bir oyun verirdi.',
      diger: [
        { move: '17.Kh1', text: '17...exd4 18.Na4 Qb5 19.e5 ile karmaşa; Siyahın d4 piyonu güçlü. Motor: +0.2.' },
        { move: '17.Kg2', text: '17...Rfd8 18.Be3 exd4 19.Bxd4 ile benzer ama bir tempo geç. Motor: +0.2.' },
      ],
    },
    '17b': {
      text: 'Kale d-hattına gelir; d4 baskı altında.',
      amac: 'Merkezin açılmasına hazırlanmak ve ...exd4 sonrası d-hattını kontrol etmek.',
      neden: 'a8 kalesi oyuna girer, f8 kalesi şah kanadında kalır. Motor ...Rad8, ...Rfd8 ve ...exd4’ü eşdeğer görüyor (yaklaşık +0.7).',
      diger: [
        { move: '17...Rfd8', text: '18.Na4 Qb7 19.Qb3 ile benzer konum. Motor: +0.75.' },
        { move: '17...exd4', text: '18.Na4 Qb5 19.Bxd4 Bc5 ile merkez hemen açılır. Motor: +0.75.' },
      ],
    },
    '18w': {
      text: '18.Na4! At vezire saldırır ve c5 karesine bakar; aynı zamanda c3’teki bağdan kurtulur.',
      amac: 'Bağdan kurtulmak, Siyah vezirini b6’dan kovmak ve atı c5 üzerinden etkin bir kareye getirmek.',
      neden: 'Polgar hamleyi güçlü bulur. Marin, Siyahın burada d4 bağını bırakmak zorunda kaldığını ve bunun Beyaz için yönetilebilir olduğunu yazar. 18.Qc2 de aynı değerde, ama Na4 tempo kazanır.',
      diger: [
        { move: '18.Qc2', text: '18...exd4 19.Na4 Qb8 20.Bxd4 ile hamle sırası değişir. Motor: +0.8.' },
        { move: '18.Kh1', text: '18...exd4 19.Bxd4 c5 20.Bxf6 ile filler değişir. Motor: +0.6.' },
      ],
    },
    '18b': {
      text: 'Vezir b8’e çekilir.',
      amac: 'Veziri b-hattında tutmak ve b8-g3 çaprazından f4 ve g3’e bakmak.',
      neden: 'Marin bu hamleyi “biraz gizemli” buldu ve 18...Qb5 önerdi (19.Qc2 exd4 20.Bxd4 c5 ve ...Nb6). USCF raporu da 18...Qb8’i belki en iyi değil sayıyor. Motor ise 18...Qb8’i en iyi görüyor (+0.65); Marin’in 18...Qb5 çizgisinde 21.Nc3 sonrası +1.5 veriyor.',
      diger: [
        { move: '18...Qb5', text: 'Marin’in önerisi: 19.Qc2 exd4 20.Bxd4 c5 21.Nc3 Qc4 22.Bf2 ve Beyazın merkezi güçlü. Motor: +1.0 (çizgi sonunda +1.5).' },
        { move: '18...Qb7', text: '19.Qc2 exf4 20.gxf4 Rfe8 ile e4’e baskı. Motor: +0.7.' },
      ],
    },
    '19w': {
      text: 'Vezir c2’de c-hattına ve e4’e bakar, a1 kalesini serbest bırakır.',
      amac: 'e4’ü korumak, d-hattına kale getirmek için d1’i boşaltmak.',
      neden: '19.Qe2 ...exd4 sonrası e-hattında Siyah kalesine maruz kalırdı. c2’de vezir hem e4’ü korur hem de c6’ya bakar.',
      diger: [
        { move: '19.Qc1', text: '19...exd4 20.Bxd4 Nb6 21.Bc5 ile benzer, ama vezir daha pasif. Motor: +0.6.' },
        { move: '19.Qe2', text: '19...exd4 20.Bxd4 Nb6 ile Siyah rahat. Motor: +0.35.' },
      ],
    },
    '19b': {
      text: 'Siyah f4’te alır; merkezde gerginlik çözülür.',
      amac: 'f4 piyonunu ortadan kaldırıp e4’ü yalnız bırakmak ve e-hattında baskı kurmak.',
      neden: 'Polgar bunu bir hata saydı ve 19...exd4’ü önerdi; USCF raporu da hamleyi “pek istenmeyen” olarak niteledi. e3e5.com yorumcusu Siyahın gxf4 ile alınmayı daha tehlikeli bulmuş olabileceğini tahmin eder. 19...exd4 Beyazın merkezini azaltırdı; oyundaki hamle ise Beyaza Bxf4 ile etkin bir fil verdi.',
      diger: [
        { move: '19...exd4', text: '20.Bxd4 Nb6 21.Rfd1 Nxa4 ile Siyah atı değiştirir ve Beyazın merkezi tek piyona iner. Motor: +0.7 (oyunda +1.1).' },
        { move: '19...Nh7', text: '20.dxe5 ile Beyaz bir piyon kazanır. Motor: +2.85.' },
      ],
    },
    '20w': {
      text: 'Fil f4’ten alır ve b8 vezirine bakar.',
      amac: 'Fili tempoyla etkin bir çapraza koymak ve şahın önünü bozmamak.',
      neden: 'Polgar 20.gxf4’ün de iyi olduğunu ama oyundaki hamlenin şahı zayıflatmadığını yazar. Marin, 20.gxf4 Rfe8 sonrası ...Nxe4 tehdidi doğacağını ve Bf2’nin f4’ü kaybettireceğini belirtir. Motor: 20.Bxf4 +1.1, 20.gxf4 +0.4.',
      diger: [
        { move: '20.gxf4', text: '20...Rfe8 21.e5 Nd5 22.Bxd5 cxd5 ile e4 tehdidi kalkar ama şah açılır. Motor: +0.4.' },
        { move: '20.Bf2', text: '20...fxg3 21.Bxg3 ile Beyazın merkezi zayıflar. Motor: −0.15.' },
      ],
    },
    '20b': {
      text: 'Vezir b7’ye gelir ve uzun çaprazda e4’e baskı yapar.',
      amac: 'Fil saldırısından kaçarken e4’e baskı kurmak.',
      neden: 'Polgar “güzel bir hamle değil!” diyor, çünkü vezir f3 filinin çaprazına giriyor; o 20...Qb5’i tercih etti. e3e5.com yorumcusu da Qb6-b8-b7 manevrasının bir tempo kaybı gibi göründüğünü yazar. Motor b5 ile b7 arasında çok fark görmüyor (+1.15 ile +1.2).',
      diger: [
        { move: '20...Qb5', text: 'Polgar’ın tercihi: 21.Rac1 Rfe8 22.e5 Nd5. Motor: +1.15.' },
        { move: '20...Qc8', text: '21.Rac1 Nb6 22.Nxb6 axb6 ile atlar değişir. Motor: +1.35.' },
      ],
    },
    '21w': {
      text: 'Kale d-hattına gelir ve d4’ü korur.',
      amac: 'Tek kalan merkez piyonunu (d4) sağlamlaştırmak ve d-hattında Siyah kalesine karşı durmak.',
      neden: 'd4 korunursa Beyaz e5 ilerleyişini sakin bir şekilde hazırlayabilir. Motor 21.Bg5’i biraz daha keskin buluyor, ama Topalov önce yapıyı tamamladı.',
      diger: [
        { move: '21.Bg5', text: 'Hemen bağ: 21...Rc8 22.Rad1 Nb6 23.Nc3. Motor: +1.2.' },
        { move: '21.Rac1', text: 'c6’ya baskı: 21...Nb6 22.Nxb6 axb6 23.Be3. Motor: +1.1.' },
      ],
    },
    '21b': {
      text: 'Kale e-hattına gelir; e4 hedefte.',
      amac: 'e4’e baskıyı artırmak; Beyaz e5 oynarsa e5 piyonuna da bakmak.',
      neden: 'Siyah e4’ü zorlamak istiyor: b7 vezir, f6 at ve e8 kale e4’e bakıyor. Motor 21...Nb6 ile atı c4/d5 karelerine yöneltmeyi aynı seviyede görüyor.',
      diger: [
        { move: '21...Nb6', text: '22.Nc3 a5 23.Bg5 Rb8 ile vezir kanadında karşı oyun. Motor: +1.1.' },
        { move: '21...a5', text: '22.Bg5 Be7 23.h4 Nb6. Motor: +1.3.' },
      ],
    },
    '22w': {
      text: 'Fil g5’te f6 atını bağlar.',
      amac: 'e4’e baskı yapan atı bağlayıp e5 tehdidini güçlendirmek.',
      neden: 'Polgar’a göre fil atı bağlar ve e5’i tehdit eder. Marin bu bölümde Beyazın planını açıklar: merkez piyonlarını itmek Siyahın atlarına sağlam kareler verir, bu yüzden Beyaz kanatlarda tehdit yaratmalı ve merkezi sağlam tutmalı. Motor ise 22.Nc3 ile atı oyuna sokmayı daha iyi buluyor (+1.15; oyunda +0.7).',
      diger: [
        { move: '22.Nc3', text: '22...Nf8 23.e5 Nd5 24.Nxd5 cxd5 ile Beyazın filleri güçlü. Motor: +1.15.' },
        { move: '22.e5', text: '22...Nd5 23.Nc3 Nxf4 24.gxf4 ile fil gider. Motor: +1.1.' },
      ],
    },
    '22b': {
      text: 'Fil e7’ye geri döner ve bağı kaldırır.',
      amac: 'f6 atını rahatlatmak ve Bxf6 tehdidine karşı önlem almak.',
      neden: 'Doğal ama pasif. Motor 22...Nf8!’i (+0.6) daha iyi buluyor: 23.e5 Ne6 ile at e6’ya gelir ve d4’e baskı yapar; 24.Bxc6 Qc7 sonrası Siyah aktif.',
      diger: [
        { move: '22...Nf8', text: '23.e5 Ne6! 24.Bxc6 Qc7 ile Siyahın taşları etkin. Motor: +0.6.' },
        { move: '22...Rb8', text: '23.e5 Nd5 24.Nc3 Be7. Motor: +1.2.' },
      ],
    },
    '23w': {
      text: 'Şah köşeye gider; g1-a7 çaprazından ve olası şahlardan uzaklaşır.',
      amac: 'İleride ...Qb6+ ya da ...Bc5 gibi şahlara karşı önlem almak ve g1 karesini file bırakmak.',
      neden: 'Polgar bu önleyici hamleyi över ve 23.Nc3’ün de iyi olduğunu ekler; e3e5.com yorumcusu da 23.Kh1 gibi önleyici hamleleri yararlı bulur. g1 karesi daha sonra 25.Bg1 ile file yuva olacak.',
      diger: [
        { move: '23.Bc1', text: '23...Nf8 24.e5 Nd5 25.h4: fil kara karelerde kalır. Motor: +1.2.' },
        { move: '23.h4', text: '23...Nf8 24.e5 Nd5 25.Bc1. Motor: +1.2.' },
      ],
    },
    '23b': {
      text: 'At h7’den g5 filine saldırır.',
      amac: 'Bağlayan fili kovmak ve gerekirse ...Bxg5 ile kara kareli filleri değişmek.',
      neden: 'Siyah fil çiftini azaltmak istiyor. Ama at h7’de oyunun dışında kalır; motor 23...Nb6’yı daha iyi buluyor (+1.0): 24.e5 Nfd5 ile atlar merkeze gelir.',
      diger: [
        { move: '23...Nb6', text: '24.e5 Nfd5 25.Nc5 Qc8 ile atlar d5’te. Motor: +1.0.' },
        { move: '23...a5', text: '24.Nc3 Nf8 25.Bc1 Bb4. Motor: +1.05.' },
      ],
    },
    '24w': {
      text: 'Fil e3’e çekilir.',
      amac: 'Fili korumak ve d4’ü desteklemek; değişimi reddetmek.',
      neden: '24.Bxe7 Rxe7 ile fil çiftinden vazgeçmek Siyahı rahatlatırdı (+0.9). Marin’in dediği gibi değişimler Siyahın işine yarar, bu yüzden Beyaz filini korur.',
      diger: [
        { move: '24.Bf4', text: '24...Nhf6 25.Nc3 Nf8 26.h4. Motor: +1.25.' },
        { move: '24.Bxe7', text: '24...Rxe7 25.e5 Qb4 ile Siyah rahatlar. Motor: +0.9.' },
      ],
    },
    '24b': {
      text: '...Bg5 ile kara kareli filler değişmek istenir.',
      amac: 'Beyazın fil çiftini azaltmak ve Beyazın kara karelerdeki kontrolünü zayıflatmak.',
      neden: 'Fikir mantıklı, ama Beyaz değişimi reddedebilir ve g5 fili h4 ile kovalanacak bir hedef olur. Motor bunu oyunun ikinci büyük kayması olarak görüyor: 24...Ndf6 ile at merkeze dönmeliydi.',
      diger: [
        { move: '24...Ndf6', text: '25.Nc3 a5 26.Bc1 Bb4 ile Siyah taşlarını toplar. Motor: +1.4 (oyunda +2.1).' },
        { move: '24...c5', text: '25.Nxc5 Bxc5 26.dxc5 Ne5 ile bir piyon verilip at e5’e yerleşir. Motor: +1.5.' },
      ],
    },
    '25w': {
      text: 'Beyaz fil değişimini reddeder; fil g1’de d4’ü korur.',
      amac: 'Fil çiftini korumak ve d4’ü sağlamlaştırmak; h4 ile g5 filini kovma fırsatını hazırlamak.',
      neden: 'Marin’e göre değişimler Siyahı rahatlatırdı, bu yüzden Beyaz kaçar. g1 pasif görünür ama 23.Kh1 sayesinde güvenlidir ve d4’ü tutar. 25.Bf4 Bxf4 26.gxf4 ise fil çiftini bitirirdi (+0.7).',
      diger: [
        { move: '25.Bf2', text: '25...Nhf6 26.Bg1 Bh6 ile aynı yere bir tempo geç varılır. Motor: +1.6.' },
        { move: '25.Bf4', text: '25...Bxf4 26.gxf4 Ndf6 ile değişim olur ve Beyaz şahı açılır. Motor: +0.7.' },
      ],
    },
    '25b': {
      text: 'At f8’e geçer; e6’ya gidecek.',
      amac: 'Atı e6 üzerinden d4’e ve a2-g8 çaprazına yönlendirmek.',
      neden: 'h7 atı oyuna dönmek zorundaydı. e6 ideal kare: d4’e ve f4’e bakar ve f7’nin önünü kapatır. Motor 25...Rc8 ya da 25...Be7’yi biraz daha sağlam görüyor.',
      diger: [
        { move: '25...Rc8', text: '26.e5 Be7 27.Rc1 Bg5 ile c-hattında savunma. Motor: +2.0.' },
        { move: '25...Ndf6', text: '26.Nc5 Qb8 27.Qa4 Qc7 ile c6 baskı altında. Motor: +2.2.' },
      ],
    },
    '26w': {
      text: 'h4 ile g5 fili kovalanır ve şah kanadında alan kazanılır.',
      amac: 'Fili geri itmek, h5 ile g6’ya saldırıyı hazırlamak ve kara kareleri kontrol etmek.',
      neden: 'Marin’e göre h4 fili kısıtlar ve h5’i hazırlar; bu, merkezi itmeden kanatta tehdit yaratma planının parçası. Motor 26.e5’i de eşdeğer buluyor.',
      diger: [
        { move: '26.e5', text: '26...Rc8 27.h4 Be7 28.Rc1 ile aynı yapıya gelinir. Motor: +2.2.' },
        { move: '26.Bg2', text: '26...Ne6 27.e5 Rc8 28.Rf3. Motor: +1.8.' },
      ],
    },
    '26b': {
      text: 'Fil e7’ye çekilir.',
      amac: 'Fili güvenli bir kareye çekip f6 ve d6’yı kontrol etmek.',
      neden: 'Diğer kareler kötü: 26...Bf6 27.e5 Bxe5 28.dxe5 Nxe5 ile Siyah fil için iki piyon alır ama kaybeder (+3.1), 26...Bh6 de filin oyun dışında kalmasına yol açar (+2.4).',
      diger: [
        { move: '26...Bh6', text: '27.e5 Rc8 28.Nc3 ile fil h6’da işe yaramaz. Motor: +2.4.' },
        { move: '26...Bf6', text: '27.e5 Bxe5 28.dxe5 Nxe5 ile fil iki piyona verilir. Motor: +3.1.' },
      ],
    },
    '27w': {
      text: '27.e5! Siyahın atları f6 ve d6 karelerini kaybeder; Beyazın alan üstünlüğü büyür.',
      amac: 'Alan kazanmak, c6 piyonunu f3 filiyle birlikte sabitlemek ve Siyahın taşlarını geri itmek.',
      neden: 'Marin’e göre hamle iyi zamanlanmıştır, çünkü Siyahın atları artık d5’e ulaşamaz ve Siyah c6’yı korumak için daha da geri çekilmek zorunda kalır. Polgar bunu oyunun anahtar hamlesi sayar, USCF raporu Siyahın pasifliğe mahkum olduğunu yazar. Motor: +2.0, sonraki en iyi 27.Bg2 +1.7.',
      diger: [
        { move: '27.Bg2', text: '27...Ne6 28.e5 Rc8 29.Be4 ile e5 yine gelir ama Siyahın atı e6’ya yerleşmiş olur. Motor: +1.7.' },
        { move: '27.Nc3', text: '27...Nb6 28.Bg2 Qd7 ile at b6’dan c4/d5’e yönelir. Motor: +1.4.' },
      ],
    },
    '27b': {
      text: 'At b8’e çekilir; c6’yı korur.',
      amac: 'c6 piyonunu savunmak; Bxc6 tehdidini karşılamak.',
      neden: 'e5 sonrası f3 fili ve c2 vezir c6’ya bakıyor. 27...Ne6? 28.Bxc6 ile piyon kaybedilir (+3.0). Motor 27...Rc8’i biraz daha iyi buluyor (+2.0): kale c6’yı korur ve at d7’de kalır.',
      diger: [
        { move: '27...Rc8', text: '28.Nc3 Bb4 29.Qb3 Re7 ile c6 kaleyle korunur. Motor: +2.0.' },
        { move: '27...Ne6', text: '28.Bxc6 Rc8 29.Bxb7 Rxc2 ile Beyaz bir piyon fazla. Motor: +3.0.' },
      ],
    },
    '28w': {
      text: 'At oyuna döner; d5, e4 ve b5 karelerine bakar.',
      amac: 'Kenardaki atı merkeze getirmek ve Ne4-d6 ya da Ne4-f6 fikirlerini hazırlamak.',
      neden: 'a4’teki at Siyahın atları geri çekildiği için artık c5’te iş göremez; c3 üzerinden e4’e gitmek en doğal yol. Motor bu hamleyi en iyi buluyor (+2.45).',
      diger: [
        { move: '28.Be4', text: '28...Qd7 29.Kg2 Bb4 30.Qb3 ile fil b1-h7 çaprazında. Motor: +2.3.' },
        { move: '28.Be3', text: '28...Bb4 29.Qc4 Ne6 30.Nc3. Motor: +2.2.' },
      ],
    },
    '28b': {
      text: 'Fil c3 atını bağlar.',
      amac: 'Atın e4’e gitmesini zorlaştırmak ve ...Bxc3 ile Beyazın vezir kanadı piyonlarını bozmak.',
      neden: 'Siyah taşlarını etkinleştirmeye çalışıyor, ama fil b4’te Beyaz taşlarıyla değişilmeye açık. Motor 28...Qc8 ya da 28...Ne6’yı biraz daha iyi buluyor (+2.3/+2.4; oyunda +2.6).',
      diger: [
        { move: '28...Qc8', text: '29.Bg2 Ne6 30.Qe2 Rf8 ile at e6’ya yerleşir. Motor: +2.3.' },
        { move: '28...Ne6', text: '29.Qe2 Rf8 30.Be4 Qc8. Motor: +2.4.' },
      ],
    },
    '29w': {
      text: 'Vezir g2’de uzun çaprazı güçlendirir ve c6’yı hedef alır.',
      amac: 'f3 filinin arkasında bir batarya kurup c6’ya ve d5’e baskı yapmak; d4-d5 kırılmasını hazırlamak.',
      neden: 'e3e5.com yorumcusu bu hamleyi d4-d5 tehdidiyle birlikte güçlü bir alternatif plan olarak görür. Motor ise 29.Ne4’ü belirgin biçimde daha iyi buluyor (+2.8; oyunda +1.8): at bağdan kurtulur ve d6/f6’ya göz diker.',
      diger: [
        { move: '29.Ne4', text: '29...Be7 30.Be2 Qc8 31.Kg2 ile at merkeze yerleşir ve c3’teki bağ biter. Motor: +2.8.' },
        { move: '29.Qb3', text: '29...a5 30.Ne4 Rd7 31.Bg2. Motor: +2.6.' },
      ],
    },
    '29b': {
      text: 'Vezir c8’e çekilir.',
      amac: 'Veziri b7’deki çaprazdan çekmek ve e6, f5 ve h3 karelerine bakmak.',
      neden: 'Vezir b7’de f3-g2 bataryasının ucunda duruyordu. Motor ise hemen 29...Bxc3 30.bxc3 Qb3 ile Beyazın zayıflayan vezir kanadı piyonlarına saldırıyı öneriyor (+1.9; oyunda +2.6).',
      diger: [
        { move: '29...Bxc3', text: '30.bxc3 Qb3 31.Rc1 c5 ile Siyahın veziri etkin. Motor: +1.9.' },
        { move: '29...a5', text: '30.Ne4 Nh7 31.Nf2 Qc7. Motor: +2.5.' },
      ],
    },
    '30w': {
      text: 'Kale c-hattına gelir ve c3 atını korur.',
      amac: 'Atı korumak ve ...Bxc3 sonrası c-hattını kale için kullanmak.',
      neden: 'Beyaz atın değişilmesini istemiyor gibi görünür, ama Siyah alırsa bxc3 ile fil çifti kalır. Motor yine 30.Ne4’ü daha iyi buluyor (+2.7; oyunda +2.2).',
      diger: [
        { move: '30.Ne4', text: '30...Nbd7 31.Rc1 Nh7 32.Nf2: at b4 filinden kaçar. Motor: +2.7.' },
        { move: '30.Be3', text: '30...Qe6 31.Be4 Rd7 32.Qf3. Motor: +2.2.' },
      ],
    },
    '30b': {
      text: 'Siyah atı alır; Beyazın c-piyonları ikilenir.',
      amac: 'Beyazın atını ortadan kaldırıp vezir kanadı piyonlarını bozmak ve e4/d5 karelerini Beyaz atından kurtarmak.',
      neden: 'Marin bu değişimi “koşulsuz stratejik teslimiyet” olarak niteler: Siyah kara kareli filini verir ve Beyazın iki fili tahtada kalır. Motor burada Marin’le aynı fikirde değil: 30...Bxc3 en iyi hamle (+2.1), alternatifler 30...a5 ve 30...Qb7 daha kötü. Konum zaten zordu; değişim ancak durumun ne kadar kötü olduğunu gösterir.',
      diger: [
        { move: '30...a5', text: '31.Nd5 Qd7 32.Nf4 Re7 ile at d5 üzerinden f4’e gelir. Motor: +2.3.' },
        { move: '30...Qb7', text: '31.Be3 Ne6 32.Rcd1 Re7. Motor: +2.4.' },
      ],
    },
    '31w': {
      text: 'Piyonla alınır; fil çifti tahtada kalır.',
      amac: 'Fil çiftini korumak ve c3 piyonuyla d4’ü desteklemek.',
      neden: '31.Rxc3 Qb7 ile kale pasif kalır (+1.4). 31.e6? ise 31...Nxe6 32.bxc3 c5 ile avantajı tamamen verir (0.0).',
      diger: [
        { move: '31.Rxc3', text: '31...Qb7 32.Bd1 Re7 33.Bb3 ile Siyah dengeyi biraz toparlar. Motor: +1.4.' },
        { move: '31.e6', text: '31...Nxe6 32.bxc3 c5 ile Beyazın merkezi dağılır. Motor: 0.0.' },
      ],
    },
    '31b': {
      text: 'At e6’ya gelir; d4’e baskı yapar ve a2-g8 çaprazını kapatır.',
      amac: 'Atı en iyi karesine yerleştirmek: d4 ve f4’e bakmak, f7’yi Beyaz vezirinin çaprazından korumak.',
      neden: 'e6 atı Siyahın savunmasının temel taşı olacak. Motor 31...Qe6 ya da 31...c5’i biraz daha iyi buluyor (+2.0 ile +2.1), ama fikir doğru.',
      diger: [
        { move: '31...Qe6', text: '32.Rc2 Rc8 33.Rcf2 Nbd7 ile vezir e6’da. Motor: +2.0.' },
        { move: '31...c5', text: '32.Be3 a5 33.Bg5 Rd7 ile c-piyonu aktif. Motor: +2.1.' },
      ],
    },
    '32w': {
      text: 'Fil g4’ten e6 atına baskı yapar.',
      amac: 'e6 atını Bxe6 tehdidiyle rahatsız etmek; at gitmek zorunda kalırsa a2-g8 çaprazı açılır.',
      neden: 'Bu hamle ileride vezir a2’ye gelince e6’nın tam bir yük olmasını sağlar. Motor 32.Be3’ü (+2.7) daha iyi buluyor: g1 fili hemen oyuna girer.',
      diger: [
        { move: '32.Be3', text: '32...Qa6 33.Be4 Qc4 34.Qf3 ile fil hemen etkin. Motor: +2.7.' },
        { move: '32.Be4', text: '32...Nf8 33.Rc2 c5 34.Be3. Motor: +2.6.' },
      ],
    },
    '32b': {
      text: 'Vezir c7’ye gelir ve e5 piyonuna baskı yapar.',
      amac: 'e5’i hedef almak ve c6 piyonunu korumak.',
      neden: 'e5 piyonu Beyazın alan üstünlüğünün temeli; ona baskı yapmak doğal. Motor 32...Nd7’yi biraz daha iyi buluyor (+2.0).',
      diger: [
        { move: '32...Nd7', text: '33.Ra1 a6 34.Bf3 c5 ile at b6’ya gelir. Motor: +2.0.' },
        { move: '32...Re7', text: '33.c4 Qa6 34.d5 ile Beyaz merkezi açar. Motor: +2.1.' },
      ],
    },
    '33w': {
      text: 'Kale d-hattına döner ve d4’ü korur.',
      amac: 'd4’ü sağlamlaştırmak, ...c5 kırılmasına karşı d-hattında hazır olmak.',
      neden: 'd4 e6 atının hedefi. Motor 33.Rc2’yi biraz daha iyi buluyor (+2.3), ama Topalov kaleyi f-hattına yönlendirme planını hazır tutuyor.',
      diger: [
        { move: '33.Rc2', text: '33...Re7 34.Bf3 a5 35.Be3. Motor: +2.3.' },
        { move: '33.h5', text: '33...gxh5 34.Bxh5 g6 35.Bg4 ile Siyahın şah kanadı açılır. Motor: +2.0.' },
      ],
    },
    '33b': {
      text: 'At d7’ye gelir; b6 ve d5 karelerine yönelir.',
      amac: 'b8’deki pasif atı b6 üzerinden d5’e getirmek.',
      neden: 'At b8’de hiçbir şey yapmıyordu. Motor bu hamleyi en iyi görüyor (+1.9).',
      diger: [
        { move: '33...Re7', text: '34.Bf3 Qa5 35.Qc2 Qc7 ile bekleme. Motor: +2.0.' },
        { move: '33...a5', text: '34.Rd2 Nd7 35.Rdf2 f6. Motor: +2.2.' },
      ],
    },
    '34w': {
      text: '34.Qa2! Vezir a2-g8 çaprazına girer; e6 atının arkasındaki f7 hedef olur.',
      amac: 'f7’ye karşı uzun vadeli bir baskı kurmak; e6 atı çekilirse f7 doğrudan saldırı altında kalır.',
      neden: 'Motor 34.Bf3’ü biraz daha iyi buluyor (+1.8; oyunda +1.6), ama Qa2 Siyaha somut bir sorun yaratıyor: e6 atı artık yerinden oynayamaz. Bu yükü Kramnik birkaç hamle sonra unutacaktı.',
      diger: [
        { move: '34.Bf3', text: '34...c5 35.Bd5 a5 36.Rd2 ile fil d5’e yerleşir. Motor: +1.8.' },
        { move: '34.Be3', text: '34...Nb6 35.Bf3 Nc4 36.Bg1. Motor: +1.6.' },
      ],
    },
    '34b': {
      text: 'At b6’ya gelir; d5 karesine gidecek.',
      amac: 'Atı d5’e yerleştirip c3 ve e3’e baskı yapmak.',
      neden: 'Motor bu hamleyi en iyi buluyor (+1.4). Diğer seçenekler (34...a5, 34...Rb8) Beyaza f-hattında rahat hazırlık imkânı verir.',
      diger: [
        { move: '34...a5', text: '35.Rf2 Ndf8 36.Bf3 Ra8. Motor: +1.7.' },
        { move: '34...Rb8', text: '35.Rd2 Re7 36.Rdf2 Ndf8. Motor: +1.8.' },
      ],
    },
    '35w': {
      text: 'Kale f3’e gelir; f-hattında ikilenme hazırlanır.',
      amac: 'Rdf1 ile iki kaleyi f-hattına koyup f7’ye üçlü saldırı kurmak.',
      neden: 'f1 kalesi zaten f-hattında; f3’e gelen kale ikinciyi f1’e çağırıyor. Motor 35.Rd3 ile aynı değerde görüyor (+1.6). Bu noktada Siyahın doğru savunmayla hâlâ direnç gösterme şansı vardı.',
      diger: [
        { move: '35.Rd3', text: '35...c5 36.d5 Nf8 37.d6 ile aynı fikir başka kareden. Motor: +1.6.' },
        { move: '35.Qg2', text: '35...a5 36.Bf3 Nd5 37.c4. Motor: +1.2.' },
      ],
    },
    '35b': {
      text: 'Hata. At e6’dan çekilince vezirin f7’ye giden çaprazı açılır.',
      amac: 'Atı f8 üzerinden h7’ye ya da d7’ye götürüp şahı korumak; belki ...Nd5 için yer açmak.',
      neden: 'e3e5.com bunu “zaten kaybetmeye yakın bir konumda belirleyici hata” olarak niteler, USCF raporu da ? işareti verir ve küçük bir kombinasyona izin verdiğini yazar. e6 atı hem d4’e baskı yapıyor hem de çaprazı kapatıyordu; şimdi f7’ye vezir ve iki kale bakacak. Motor 35...Qe7 ya da 35...c5 ile direnişi öneriyor.',
      diger: [
        { move: '35...Qe7', text: '36.Rdf1 Rf8 37.Kg2 Nd5 ile f7 kale ve vezirle korunur. Motor: +1.5 (oyunda +2.9).' },
        { move: '35...c5', text: '36.d5 Nf8 37.d6 Qb7 38.Rf1 Rxe5 ile Siyah piyon kazanır ama f7 zayıflar. Motor: +1.6.' },
        { move: '35...Rd7', text: '36.c4 c5 37.d5 Nf8. Motor: +1.7.' },
      ],
    },
    '36w': {
      text: 'Kaleler f-hattında ikilenir: f7’ye vezir ve iki kale bakıyor.',
      amac: 'f7’ye üçlü saldırı kurmak: Rxf7 tehdidi.',
      neden: 'Motorun açık farkla en iyi hamlesi (+3.25). 36.Be3 Ne6 ile atın geri dönmesine izin verirdi (+2.3).',
      diger: [
        { move: '36.Be3', text: '36...Ne6 ile at geri döner ve çapraz kapanır. Motor: +2.3.' },
        { move: '36.Ra1', text: '36...Nd5 37.Raf1 Re7 38.c4. Motor: +1.9.' },
      ],
    },
    '36b': {
      text: 'Tek iyi savunma: kale e7’den f7’yi korur.',
      amac: 'f7’ye bakan taşlara karşı savunucu sayısını artırmak (şah, vezir, kale).',
      neden: 'f7’de saldıranlar: Qa2, Rf3, Rf1. Savunanlar: Kg8, Qc7 ve şimdi Re7. 36...Nd5? 37.Rxf7 Qxf7 38.Rxf7 Kxf7 (+3.8) ya da 36...Ne6? 37.Rxf7 Qxf7 38.Rxf7 Kxf7 39.Qxa7+ (+4.6) ile malzeme kaybedilir.',
      diger: [
        { move: '36...Nd5', text: '37.Rxf7 Qxf7 38.Rxf7 Kxf7 39.c4 ile Beyaz malzemede önde. Motor: +3.8.' },
        { move: '36...Ne6', text: '37.Rxf7 Qxf7 38.Rxf7 Kxf7 39.Qxa7+ Nd7 40.Qb7 ile Beyaz piyonları toplar. Motor: +4.6.' },
      ],
    },
    '37w': {
      text: '37.Be3! Pasif fil oyuna girer ve Bg5 tehdidi doğar.',
      amac: 'Son taşı oyuna sokmak: Bg5 ile e7 kalesine ve d8’e (şiş) saldırmak, f7’nin savunucusu e7 kalesini uzaklaştırmak.',
      neden: 'Marin’e göre Beyazın son taşı saldırıya katılır, Bg5’i tehdit eder ve “Siyah birden tamamen kaybetmiş”tir. ScienceBlogs yazısı da Bg5’in Siyah kaleleri şişe aldığını belirtir. Motor: +3.1, en yakın alternatif 37.Bh3 +1.9.',
      diger: [
        { move: '37.Bh3', text: '37...Nd5 38.c4 Nb4 39.Qd2 ile at b4’e kaçar. Motor: +1.9.' },
        { move: '37.c4', text: '37...Nh7 38.Bh3 c5 39.d5. Motor: +1.6.' },
      ],
    },
    '37b': {
      text: 'At h7’ye gider; Bg5’i önler ama artık e6 karesini kontrol etmiyor.',
      amac: '38.Bg5 şişini engellemek.',
      neden: 'ScienceBlogs yazısı bunu Bg5’i durdurmak için çaresiz bir deneme olarak niteler. At h7’ye gidince f7’nin dolaylı savunması (Ne6 fikri) ortadan kalkar ve Rxf7 kombinasyonu çalışır. Motor 37...Rdd7’yi öneriyor: 38.Bg5 Re6 ile kaleler birbirini korur.',
      diger: [
        { move: '37...Rdd7', text: '38.Bg5 Re6 39.h5 Nd5 40.c4 Nb4 ile Siyah hâlâ direnir. Motor: +3.4 (oyunda +4.6).' },
        { move: '37...Nd5', text: '38.Bg5 Rdd7 39.Bxe7 Rxe7 ile kalite kaybedilir. Motor: +3.9.' },
      ],
    },
    '38w': {
      text: '38.Rxf7! f7 piyonu düşer; kale alınırsa vezir şaha bağlanır.',
      amac: 'f7’yi alıp Siyahın şah kanadını açmak; 38...Rxf7 39.Rxf7 Qxf7 40.Be6 bağıyla veziri kazanmak.',
      neden: 'Polgar bunu Beyazın stratejik oyununun taktik doruğu olarak niteler. Hesap basittir: 38...Rxf7 39.Rxf7 Qxf7 40.Be6 Rd7 41.Bxf7+ Rxf7 ile Beyaz iki kale ve fil verip vezir, kale ve piyon alır (Motor: +5.0). Bu da 40.Be6’nın, a2 vezirinin f7’ye baktığı çaprazda çalıştığı bir bağdır.',
      diger: [
        { move: '38.Bc1', text: '38...c5 39.Ba3 Qc6 40.Bxc5 ile fil a3-f8 çaprazından gelir. Motor: +3.3.' },
        { move: '38.h5', text: '38...gxh5 39.Rxf7 Nd5 40.Bxh5 ile benzer saldırı. Motor: +3.0.' },
      ],
    },
    '38b': {
      text: 'Siyah kaleyi almaz; at d5’e gelir ve e3 filine saldırır.',
      amac: 'Bağı önlemek için kaleyi almamak ve atı merkeze getirip karşı oyun aramak.',
      neden: '38...Rxf7 39.Rxf7 Qxf7 40.Be6 vezir kaybettirir; 38...Kh8 39.Bg5 ise daha da kötü (+6.0). 38...Nd5 ile Siyah piyon eksiğiyle direnmeye çalışır, ama e7 kalesi c7 vezirine bağlı kalır.',
      diger: [
        { move: '38...Rxf7', text: '39.Rxf7 Qxf7 40.Be6 Rd7 41.Bxf7+ Rxf7 ile Beyaz iki kale ve fil karşılığında vezir, kale ve piyon almış olur. Motor: +5.0.' },
        { move: '38...Kh8', text: '39.Bg5 Rxf7 40.Rxf7 Qb8 ile Siyah malzeme kaybeder. Motor: +6.0.' },
      ],
    },
    '39w': {
      text: 'Kale f3’e döner ve Beyaz bir piyon fazlasıyla baskıyı sürdürür. Kramnik terk etti.',
      amac: 'Kaleyi güvenceye almak, f-hattındaki ikilemeyi korumak ve piyon fazlası ile saldırıyı sürdürmek.',
      neden: 'Topalov sakin devamı seçti; ScienceBlogs yazısı bunu “onun tarzına uymayan ama yine de çok etkili” bir seçim olarak niteler. Polgar ve ScienceBlogs 39.Be6’nın objektif olarak daha güçlü olduğunu yazar: 39...Rxe6 40.Rxc7 Nxc7 41.Qxa7 ile e7 kalesinin c7 vezirini koruduğu ortaya çıkar. USCF raporuna göre Kramnik oyundan sonra “Çok iyi oynasaydım bile bir şey değişmezdi” dedi.',
      diger: [
        { move: '39.Be6', text: '39...Kh8 40.Bg5 Ndf6 41.Rxe7 Qxe7 42.exf6 gxf6 ile Beyaz malzeme kazanır; 39...Rxe6 40.Rxc7 Nxc7 41.Qxa7 de kaybeder. Motor: +5.1.' },
        { move: '39.R7f2', text: '39...Rf8 40.Bc1 Rxf2 41.Qxf2 ile kaleler değişir. Motor: +4.2.' },
      ],
    },
  },
  qa: [
    { q: 'Beyaz neden 6.Nh4 ile atını kenara götürüp fil için verdi?', a: 'Slavda Siyahın asıl övündüğü taş ...Bf5 ile dışarı çıkan beyaz kareli fildir. 6.Nh4 bu fili kovalar ve 7.Nxg6 ile alır; Beyaz fil çiftini kazanır. Karşılığında Siyah 7...hxg6 ile sağlam bir yapı ve yarı açık h-hattı elde eder. Bu bir uzun vade yatırımıdır: konum açıldıkça iki fil daha değerli hale gelir. Wikipedia’nın Slav maddesi bunu 4.e3 kolunun en yaygın devamı olarak anar.' },
    { q: 'Topalov neden bu kadar çok piyon hamlesi (a3, g3, f4) yaptı?', a: 'Marin’e göre piyonlar kara karelere yerleşince Beyazın beyaz kareli fili serbest kalır; a3 ve f4 birlikte 11.c5 ile merkezi kilitlemeyi tehdit eder ve Siyahın ...e5 kırılmasını zorlaştırır. Polgar ise bu kadar tempo harcamayı eleştirdi; motor da 10.Be2’yi biraz daha iyi buluyor (+0.3’e karşı 0.0). Oyun Topalovu haklı çıkardı, ama açılış konumu objektif olarak dengedeydi.' },
    { q: 'Kramnik neden 10...dxc4 oynadı ve daha iyi bir hamlesi var mıydı?', a: 'Siyah c5 kilitlemesini önlemek ve gelişme avantajını kullanmak istedi. Marin bu kararı riskli buldu ve 10...a5’i önerdi: 11.c5 gelirse 11...b6! ile Siyahın oyunu iyidir (Motor: −0.8). Polgar da Beyazın fili f1’den çıkana kadar beklemeyi önerdi, çünkü o zaman ...dxc4 Beyaza bir tempo daha kaybettirirdi. Motor 10...dxc4’ü yine de dengeli buluyor (−0.05).' },
    { q: '13...b4 gerçekten hata mıydı?', a: 'Marin bunu büyük bir stratejik risk saydı: Siyahın piyonları dağılır, c4 karesi zayıflar ve f3 filine yeni hatlar açılır. Ama motor, Marin’in önerdiği 13...Qb6’ya 14.e5 Ne8 15.Be3 ile cevap veriyor (+0.9) ve 13...b4’ü en iyi hamle olarak görüyor (+0.0). Yani hamle somut olarak cezalandırılamıyor; asıl sorun sonraki hamlelerde (15...Qb6, 19...exf4) Siyahın bu riski karşılayacak hareketi bulamamasıydı.' },
    { q: 'Siyah 19. hamlede neden exd4 yerine exf4 ile almamalıydı?', a: '19...exd4 20.Bxd4 Nb6 sonrası Beyazın merkezinde yalnız e4 kalır ve Siyah ...Nxa4 ile atı değiştirip d-hattında etkin olur (Motor: +0.7). 19...exf4 20.Bxf4 ise Beyaza hem tempoyla gelen etkin bir fil (b8 vezirine saldırı) hem de d4-e4 ikilisini bırakır; e5 ilerleyişi her an tehdit olur (+1.1). Polgar ve USCF raporu bu hamleyi eleştirdi.' },
    { q: 'Topalov neden e5’i hemen değil de 27. hamlede oynadı?', a: 'Marin’in açıkladığı gibi merkez piyonları erken itilirse Siyahın atları d5 gibi sağlam karelere yerleşir. Topalov önce Bg5, Kh1, Bg1 ve h4 ile kanatlarda hazırlık yaptı ve Siyahın atlarını h7, f8 gibi pasif karelere itti. 27.e5 geldiğinde atlar artık d5’e ulaşamıyordu ve Siyah c6’yı korumak için 27...Nb8 oynamak zorunda kaldı. Motor 27.e5’i en iyi hamle olarak gösteriyor (+2.0).' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Üç kalıcı unsurdan: fil çifti, merkezde e5 piyonunun sağladığı alan ve Siyahın zayıf vezir kanadı piyonları (a7, c6). Bunlara Siyahın yaptığı küçük kaymalar eklendi: 15...Qb6 (15...c5 ile denge vardı), 19...exf4 ve özellikle 24...Bg5 (+1.2’den +2.1’e). Bundan sonra Siyahın atları savunma görevleri arasında koşturdu, Beyazın taşları ise f7’ye toplandı.' },
    { q: '35...Nf8 neden kaybettiren hata sayılıyor?', a: 'e6 atı iki iş yapıyordu: d4’e baskı ve a2-g8 çaprazını kapatmak. At çekilince Qa2 doğrudan f7’ye baktı ve 36.Rdf1 ile f7’ye üç taş yüklendi. Siyah 36...Re7 ile savundu, ama 37.Be3 ve Bg5 tehdidi savunucuları dağıttı. Motor 35...Qe7 (+1.5) ya da 35...c5 (+1.6) ile direnişi öneriyor; oyunda değerlendirme +2.9’a çıktı.' },
    { q: '38.Rxf7 sonrası Siyah neden kaleyi almadı?', a: '38...Rxf7 39.Rxf7 Qxf7 40.Be6! ile vezir g8 şahına bağlanır: 40...Rd7 41.Bxf7+ Rxf7 sonrası Beyaz iki kale ve fil karşılığında vezir, kale ve piyon almış olur (Motor: +5.0). Bu yüzden Kramnik 38...Nd5 ile piyon eksiğine razı oldu. Ama burada da 39.Be6! kazanırdı: 39...Rxe6 40.Rxc7 çünkü e7 kalesi c7 vezirini yedinci yatayda koruyordu.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En net anlar 15. ve 24. hamlelerdi. 15...c5! 16.Be3 Nb6 17.dxc5 Nc4 ile Siyah tam eşitliği koruyordu (Motor: 0.0). 24...Ndf6 ile at merkeze dönseydi avantaj +1.4’te kalırdı. Daha geç olarak 35...Qe7 ile e6 atı yerinde tutulsaydı Siyah hâlâ direnebilirdi (+1.5). Wikipedia’nın maç sayfası Kramnik’in konumunun zaman sıkıntısı içinde kötüleştiğini yazar.' },
  ],
  sources: [
    { title: 'ChessBase: Elista 2006 – Topalov wins game nine (Mihail Marin’in analizi)', url: 'https://en.chessbase.com/post/elista-2006-topalov-wins-game-nine' },
    { title: 'The Chess Drum: Topalov – Kramnik, 9. oyun (Marin’in notları)', url: 'https://www.thechessdrum.net/palview3/topalov-kramnik9g.htm' },
    { title: 'Chess Daily News: Susan Polgar’ın 9. oyun analizi', url: 'https://chessdailynews.com/?p=47646' },
    { title: 'US Chess: Elista 9. oyun raporu', url: 'https://uschess.org/content/view/6282/157' },
    { title: 'e3e5.com: Topalov – Kramnik, IX. oyun yorumları', url: 'https://e3e5.com/article.php?id=1251' },
    { title: 'ScienceBlogs: Topalov wins again', url: 'https://scienceblogs.com/evolutionblog/2006/10/07/topalov-wins-again' },
    { title: 'Wikipedia: World Chess Championship 2006', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_2006' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
    { title: 'Quality Chess Blog: Slavda Nh4 fikri üzerine', url: 'https://blog.qualitychess.co.uk/?p=258' },
  ],
  exercises: [
    { id: 'tkr-1', kind: 'tekrar', plan: true, title: 'Alan kazanmak: e5',
      source: 'Topalov – Kramnik, Elista 2006 (27. hamle)',
      fen: '3rrnk1/pq1nbpp1/2p3p1/8/N2PP2P/5BP1/1PQ5/3R1RBK w - - 1 27',
      prompt: 'Beyazın d4 ve e4 piyonları merkezde yan yana. Siyahın atları f8 ve d7’de ve iyi kareler arıyor. Beyaz bu yapıyı nasıl kullanır?',
      hint: 'Bir piyon ilerlemesi Siyahın atlarından f6 ve d6 karelerini alabilir.',
      line: ['e5'],
      explanation: '**27.e5!** Piyon f6 ve d6 karelerini alır; Siyahın atları geri çekilmek zorunda kalır ve Beyazın alan üstünlüğü büyür. Bu bir plan hamlesidir: Motor: e5 +2.1, sonraki en iyi hamle 27.Bg2 +1.7.',
      link: 'f4 ve e4 ile kazanılan merkez, e5 ilerleyişiyle kalıcı bir alan üstünlüğüne dönüştü.' },
    { id: 'tkr-2', kind: 'tekrar', plan: false, title: 'Son taş oyuna, sonra f7',
      source: 'Topalov – Kramnik, Elista 2006 (37. hamle)',
      fen: '3r1nk1/p1q1rpp1/1np3p1/4P3/3P2BP/2P2RP1/Q7/5RBK w - - 11 37',
      prompt: 'Beyazın veziri a2-g8 çaprazında, kaleleri f-hattında ikilenmiş. Yalnızca g1’deki fil oyunun dışında. İki hamlelik bir plan bulun.',
      hint: 'Önce pasif fili etkin bir kareye getirin. Siyahın atı e6’yı bırakırsa f7’ye bakan taşları sayın.',
      line: ['Be3', 'Nh7', 'Rxf7'],
      explanation: '**37.Be3!** fil oyuna girer (Motor: Be3 +2.9, sonraki en iyi 37.h5 +2.0). 37...Nh7 sonrası at e6 karesini bırakır ve **38.Rxf7!** gelir: 38...Rxf7 39.Rxf7 Qxf7 40.Be6 vezir şaha bağlanır. Motor: Rxf7 +4.4, sonraki en iyi 38.Bc1 +3.6.',
      link: 'f-hattındaki kaleler ve a2-g8 çaprazındaki vezir f7’ye toplu baskı kurdu; savunucu at gidince piyon düştü.' },
    { id: 'tkr-3', kind: 'transfer', plan: false, title: 'f7’de feda ve f-hattına ikinci kale',
      source: 'Bacrot – Aronian, Avrupa Takımlar Şampiyonası, Novi Sad 2009 (24. hamle)',
      fen: 'r2q2k1/1b1n1p1r/p2PB3/1pp3p1/P1p5/2P5/2Q3PP/R4RK1 w - - 4 24',
      prompt: 'Beyazın fili e6’dan f7 üzerinden Siyahın şahına bakıyor, kalesi f-hattında. f7’yi şah ve h7 kalesi koruyor. Hamle sizde.',
      hint: 'f7’de değişimden sonra Siyahın kalesi bağlı kalır. İkinci kale nereye gelir?',
      line: ['Rxf7', 'Rxf7', 'Rf1'],
      explanation: '**24.Rxf7! Rxf7 25.Rf1!** e6 fili f7 kalesini şaha bağlar ve ikinci kale bağlı kaleye saldırır; 25...Nf6 26.Qg6+ Kh8 27.Bxf7 ile Beyaz malzemeyi geri alır ve saldırı sürer. Motor: Rxf7 +3.1, sonraki en iyi 24.Qg6+ −0.9; 25.Rf1 +4.0, sonraki en iyi −1.1.',
      link: 'Topalov da f-hattındaki kaleler ve a2-g8 çaprazındaki taşla f7’yi hedef aldı; buradaki bağ, Topalovun 40.Be6 fikrinin aynısıdır.' },
    { id: 'tkr-4', kind: 'transfer', plan: false, title: 'f7’yi almak, sonra fili',
      source: 'Taimanov – Beilin, SSCB Şampiyonası yarı finali, Moskova 1955 (28. hamle)',
      fen: '5rk1/1Q1R1p1p/p3r3/4p1q1/1P3b2/P6P/1B4P1/5R1K w - - 3 28',
      prompt: 'Beyazın kalesi yedinci yatayda, öbür kalesi f-hattında. Siyahın f4 fili f-hattını kapatıyor ve e6 kalesini f7 piyonu koruyor. Hamle sizde.',
      hint: 'f7 piyonu iki kez saldırı altında mı? Kale alınırsa vezir hangi şahı çekebilir?',
      line: ['Rxf7', 'Qg3', 'R1xf4'],
      explanation: '**28.Rxf7!** 28...Rxf7 29.Qc8+ Kg7 30.Qxe6 ile Beyaz kale kazanır. Oyunda 28...Qg3 ile Qh2 matı tehdit edildi; **29.R1xf4!** tehdidi kaldıran fili alır. Motor: Rxf7 +2.1, sonraki en iyi 28.Qf3 0.0; R1xf4 +6.6, sonraki en iyi 0.0.',
      link: 'Topalov gibi Taimanov da f-hattındaki kalelerle f7’yi aldı; savunmada kalan taş bir kombinasyonla düştü.' },
  ],
};
