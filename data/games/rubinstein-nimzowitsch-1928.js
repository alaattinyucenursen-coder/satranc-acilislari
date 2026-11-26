// Rubinstein – Nimzowitsch, Berlin 1928. Kaynak: PgnMentor (Rubinstein.pgn).
export default {
  id: 'rubinstein-nimzowitsch-1928',
  theme: 'Kapalı merkez ve f4 kırılması',
  white: 'Akiba Rubinstein', black: 'Aron Nimzowitsch',
  whiteShort: 'Rubinstein', blackShort: 'Nimzowitsch',
  event: 'Berliner Tageblatt turnuvası', site: 'Berlin', year: 1928, eco: 'E32',
  variation: 'Nimzo-Hint Savunması, Klasik (4.Qc2) sistem', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d6 5. e3 c5 6. Bd3 Nc6 7. Ne2 e5 8. d5 Bxc3+ 9. Qxc3 Ne7 10. Qc2 O-O 11. O-O Ng6 12. Ng3 Re8 13. f3 Bd7 14. Bd2 a6 15. h3 b5 16. b3 Qb6 17. Kh2 a5 18. Rab1 b4 19. f4 exf4 20. exf4 Nf8 21. Bc1 Qd8 22. Qf2 a4 23. Bb2 Ng6 24. Rbd1 axb3 25. axb3 Ra7 26. Rde1 Rxe1 27. Rxe1 Nf8 28. Bxf6 Qxf6 29. Ne4 Qh6 30. f5 Ra3 31. Rb1 Ra6 32. g4 f6 33. Kg3 Bc8 34. Re1 Bb7 35. Qe2 Nd7 36. Nxd6 Rxd6 37. Qe8+ Nf8 38. Re7 g6 39. Qf7+ Kh8 40. Re8 Rd8 41. Qxf6+ Kg8 42. Qe6+ Kg7 43. f6+ 1-0`,

  summary: 'Nimzo-Hint’in yaratıcısı Nimzowitsch’e karşı Rubinstein’ın sabırlı ve öğretici zaferi. Siyah 4...d6 ve 7...e5 ile merkezi kapattı, 8...Bxc3+ ile fil çiftini verdi ve piyonlarını kara karelere (c5, d6, e5) dizerek Beyazın fillerini piyon duvarının arkasında bırakmayı umdu. Rubinstein kendi notlarında 7...e5’i stratejik bir hata sayar; motor da bu hamleyle Beyazın avantajının +0.3’ten +1.1’e çıktığını gösteriyor. Beyaz acele etmedi: önce f3, h3, b3 ve Kh2 ile her türlü karşı oyunu önledi, 13.f4’ün erken olduğunu (13...exf4 14.exf4 Ng4) bildiği için bekledi ve ancak her şey hazır olunca **19.f4!** kırılmasıyla e-hattını açtı. Fil c1-b2 dolambacıyla uzun çapraza çıktı, 28.Bxf6 ile e4 karesinin bekçisi olan at yok edildi ve Siyah vezir h6 gibi kötü bir kareye itildi. 30.f5 ve 32.g4 ile şah kanadında alan kazanan Beyaz, Siyahın 34...Bb7 ve 35...Nd7 hatalarını **36.Nxd6!** kombinezonuyla cezalandırdı; e-hattından giren vezir ve kale Siyah şahını 43. hamlede teslim aldı.',
  intro: 'Nimzo-Hint Savunması’nda (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4) Siyah, c3 atını bağlayarak Beyazın e4 hamlesini engeller ve gerekirse filini ata verip Beyaza ikiye katlanmış c-piyonları bırakır. 4.Qc2 (Klasik sistem) bu değişimi vezirle karşılayarak piyon yapısını bozdurmamayı ve fil çiftini “bedavaya” almayı hedefler; bedeli vezirin erkenden oynaması ve şah kanadı gelişiminin gecikmesidir. Nimzowitsch bu oyunda alışılmış 4...O-O, 4...c5 ya da 4...d5 yerine 4...d6 ve ...e5 ile merkezi kilitleyen bir kuruluş seçti: fil çiftine karşı kapalı merkez ve kara kare blokajı — kendi “Sistemim” kitabındaki fikirlerin tipik bir uygulaması. Rubinstein ise kapalı merkezde fil çiftini canlandırmanın yolunun bir **piyon kırılması** olduğunu gösterdi. Oyun, 1928 Berlin turnuvasında oynandı (Capablanca birinci, Nimzowitsch ikinci oldu); Rubinstein’ın notları ve Razuvaev’in yorumları bu analizin temel kaynaklarıdır.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '4.Qc2 ile c3’te ikiye katlanmış piyon almadan **fil çiftini** kazanmak; 8...Bxc3+ sonrası 9.Qxc3 ile yapıyı sağlam tutmak.',
      'Merkez kapandıktan sonra atı e2-g3 yoluyla şah kanadına getirmek ve f-piyonunu serbest bırakmak (bu yüzden 7.Ne2, 7.Nf3 değil).',
      'Önce **önleyici hamleler**: 13.f3 (…Ng4 ve …Ne4’ü kapatır), 15.h3, 16.b3 (c4’ü sağlamlaştırır, vezir kanadını kapalı tutar) ve 17.Kh2. Rubinstein, 13.f4’ün 13...exf4 14.exf4 Ng4 yüzünden erken olduğunu yazar.',
      'Hazırlık tamamlanınca **19.f4!** ile e5 blokajını kırmak, e-hattını açmak ve fillere çapraz kazandırmak.',
      'Kara kareli fili c1-b2 dolambacıyla (c3 karesi b4 piyonu yüzünden kapalı) **uzun çapraza** çıkarmak; 22.Qf2 ile h4’ü tutup 22.Bb2? Ng4+ taktiğini önlemek.',
      '28.Bxf6 ile e4’ün bekçisini kaldırmak, atı **e4’e** yerleştirip d6, c5 ve f6’ya baskı yapmak.',
      '30.f5, 32.g4 ve h4-g5 tehditleriyle şah kanadında alan kazanıp Siyah veziri h6’da hapsetmek, sonra e-hattından (Qe2-e8, Re1-e7) girmek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Fili c3’te verip piyonları **kara karelere** (c5, d6, e5) koyarak Beyazın kara kareli filini kısıtlamak ve merkezi kapalı tutmak.',
      'Atı e7-g6 yoluyla şah kanadına getirip f4 karesine ve Beyazın f4 kırılmasına karşı baskı kurmak.',
      '...a6, ...b5, ...a5 ile vezir kanadında karşı oyun aramak; Razuvaev ve diğer yorumcular b-hattını açmanın (…bxc4) daha umutlu olduğunu düşünür, Nimzowitsch ise 18...b4 ile a-hattını seçti.',
      'e-hattı açılınca kaleyi e8’de tutmak, Nf8-g6 ve ...Nd7-e5 manevralarıyla e5 karesini taşlarla bloke etmek.',
      'Fil çiftinden biri gidince (28.Bxf6) d6 piyonunu ve e6 karesini savunmak; ...f6 ile g5’i kapatıp Beyaz atının g5’e sıçramasını önlemek.',
      'Pasif savunmada sabır: ...Bc8 ve ...Nd7-e5 ile atı merkeze getirmek — 34...Bb7 ve 35...Nd7 ile bu sabır bozuldu.',
    ] },
  },
  critical: [
    { move: '7b', title: '7...e5?: merkezi kapatmanın bedeli', text: 'Nimzowitsch merkezi kilitlemeye karar verir. Rubinstein bu hamleyi stratejik bir hata sayar: Siyahın taşları sıkışır ve vezir kanadındaki şansları azalır. Motor da aynı fikirde: 7...d5 ile Siyah neredeyse eşit (Motor: +0.3), 7...e5 sonrası 8.d5 ile Beyaz belirgin üstün (Motor: +1.1). Kapalı merkezde Beyaz istediği zaman f-piyonuyla kırılma yapabilecek, Siyahın ise benzer bir kaldıracı yok.' },
    { move: '13w', title: '13.f3: sabırlı hazırlık', text: 'Rubinstein f-piyonunu iki adımda ilerletir. 13.f4? erkendi: 13...exf4 14.exf4 Ng4! ile at h2’yi tehdit eder ve Siyahın taşları canlanır (Motor: 15.Ne2 sonrası yalnızca +0.5). f3 önce g4 ve e4 karelerini Siyah atlarından alır; f4 ancak h3, b3 ve Kh2 gibi önleyici hamlelerden sonra gelecek.' },
    { move: '19w', title: '19.f4! kırılma', text: 'Uzun hazırlığın meyvesi. f4 ile e5 sorgulanır; 19...exf4 20.exf4 sonrası e-hattı açılır, Beyazın fil çifti çapraz bulur ve f4-f5 ile Siyah atları kovalanır. Motor bu anda f4’ü ilk sırada görüyor (+0.8); 19...a4 ile Siyah biraz daha dirençli olabilirdi ama yapının temel sorunu çözülmezdi. Kapalı merkezde fil çiftini canlandırmanın yolu her zaman bir piyon kırılmasıdır.' },
    { move: '22w', title: '22.Qf2: taktik bir tuzağı önlemek', text: 'Doğal görünen 22.Bb2? Rubinstein’ın notlarına göre büyük bir hata olurdu: 22...Ng4+! 23.hxg4 Qh4+ 24.Kg1 Qxg3 ve Siyah piyonu geri alıp saldırıya geçer (Motor: +0.3; 23.Kg1 Ne3 de olur). 22.Qf2 h4 karesini tutar, f4 piyonunu korur ve fili b2’ye ancak bundan sonra getirir (Motor: +1.2).' },
    { move: '28w', title: '28.Bxf6: fil çiftinden bilinçli vazgeçiş', text: 'Rubinstein iyi yerleşmiş filini f6 atıyla değişir. Notlarında amacın Siyah veziri d6’yı savunmak için kötü bir kareye itmek olduğunu ve bunun meyvesinin 30. hamlede görüleceğini yazar. Gerçekten 28...Qxf6 29.Ne4 sonrası vezirin tek iyi karesi h6’dır (29...Qg6? 30.Nxc5, 29...Qd8? 30.Nxd6). Motor 28.Bb1’i biraz daha iyi görse de (+1.9’a karşı +1.7), Bxf6 planı insani açıdan çok net.' },
    { move: '30w', title: '30.f5: alan, kapalı fil ve hapsedilmiş vezir', text: 'Piyon f5’e ilerler: d7 filinin c8-h3 çaprazını keser, e6 ve g6 karelerini Siyahtan alır ve f5-f6 tehdidi oluşturur. e4’teki at artık bir piyonla kovulamaz. Motor bu hamleyi açık ara en iyi buluyor (+1.8; 30.Ng5 +1.1). Sonraki 32.g4 ile Beyaz g5 ve Be2 fikirleriyle h6’daki veziri tuzağa düşürmeyi tehdit edecek.' },
    { move: '34b', title: '34...Bb7? savunma dağılıyor', text: 'Rubinstein 34.Re1’i 34...Nd7 35.Nxd6 fikriyle oynadığını yazar; ama motor bu iddiaya katılmaz (34...Nd7 35.Nxd6 Rxd6 sonrası yalnızca +0.6) ve 34...Nd7’yi en iyi savunma sayar (+1.2). Nimzowitsch bunun yerine filini b7’ye gönderip d5’e baskı yapmak istedi, ama fil c8’den ayrılınca e6 ve e8 kareleri sahipsiz kaldı. Motor: +3.5. 35.Qe2! ile Beyaz hem e-hattından girişi hem de h4-g5 ile vezir avını tehdit eder.' },
    { move: '36w', title: '36.Nxd6! son darbe', text: '35...Nd7 hatasından sonra (Motor: +5.6) at d6 piyonunu alır. 36...Rxd6 37.Qe8+ Nf8 38.Re7 sonrası vezir sekizinci, kale yedinci yatayda Siyah şahını sıkıştırır. Motor 36.h4’ü daha da güçlü buluyor (+6.0’a karşı +4.7) ama Rubinstein’ın seçimi en net ve en kısa yoldur; 36...Ne5 37.Nxb7 de Beyaza bir taş fazlası bırakırdı.' },
  ],
  lessons: [
    'Nimzo-Hint’te 4.Qc2’nin anlamı: fil c3’te değişirse vezirle alıp piyon yapısını sağlam tutmak ve e4 karesini kontrol etmek. Bunun bedeli zaman kaybıdır; Siyah bunu ancak merkezi açarak (…c5, …d5) cezalandırabilir, ...e5 ile kapatarak değil.',
    'Merkez kapalıyken fil çiftinin gücü ancak bir **piyon kırılmasıyla** (burada f4) ortaya çıkar. Kırılmanın zamanlaması çok önemlidir: 13.f4 erkendi, 19.f4 tam zamanındaydı.',
    'Saldırıdan önce **önleyici hamleler** (f3, h3, b3, Kh2) rakibin karşı oyununu ortadan kaldırır. Rubinstein’ın 13–18. hamleleri bu sabrın ders kitabı örneğidir.',
    'Bir taşın yolunu hesaplayın: c3 karesi b4 piyonuyla kapalı olduğu için fil d2-c1-b2 dolambacını yaptı; ama 22.Bb2? hemen oynansaydı 22...Ng4+ taktiği vardı. Plan doğru olsa bile her hamlede rakibin taktik cevabını kontrol edin.',
    'Fil çiftinden vazgeçmek bazen doğrudur: 28.Bxf6 ile e4’ün bekçisi gitti, merkezdeki at ve kötü kareye itilen vezir fil çiftinden daha önemli hale geldi.',
    'Piyon ilerleyişleri (30.f5, 32.g4) hem alan kazandırır hem de rakip taşları (d7 fili, h6 veziri) hapseder. Hapsedilmiş taşlar savunmada da işe yaramaz.',
    'Kazanırken de dikkat: 41.Rxd8?? Qe3+ sürekli şahla beraberlik verirdi. Son darbede bile rakibin şah çekme imkânlarını sayın.',
  ],
  notes: {
    '1w': {
      text: 'Rubinstein vezir piyonuyla başlar ve d4 ile merkezin bir karesini işgal eder.',
      amac: 'Kapalı, konumsal bir oyun kurmak; Rubinstein’ın kariyerinde 1.d4 ana silahıydı.',
      neden: 'Nimzowitsch blokaj ve kapalı yapıların ustasıydı; Rubinstein ise uzun vadeli planları ve oyunsonu tekniğiyle tanınıyordu. 1.d4 her iki tarafın da sevdiği yapısal mücadeleye kapı açar.',
      diger: [
        { move: '1.e4', text: 'Motorun hafifçe tercih ettiği hamle (Motor: +0.4). Nimzowitsch 1.e4’e karşı Fransız Savunması’nın büyük uzmanıydı; Rubinstein bu tartışmaya girmek yerine kendi alanında oynamayı seçti.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); genellikle aynı yapılara geçer ama Beyaza c4-d4 dışında da seçenek bırakır.' },
      ],
    },
    '1b': {
      text: 'Nimzowitsch 1...Nf6 ile merkezi önce taşla kontrol eder; d5’i hemen oynamaz.',
      amac: 'Hipermodern anlayış: merkezi piyonla doldurmak yerine uzaktan kontrol etmek ve seçenekleri (Nimzo-Hint, Vezir Hint, Vezir Gambiti) açık tutmak.',
      neden: 'Nimzowitsch hipermodern okulun önderiydi; 1...Nf6 Beyazın e4 hamlesini engeller ve Siyaha savunmasını Beyazın kuruluşuna göre seçme imkânı verir.',
      diger: [
        { move: '1...d5', text: 'Klasik cevap (Motor: +0.35); Vezir Gambiti yapılarına götürür ve Siyah merkezde hemen yer tutar.' },
        { move: '1...c6', text: 'Slav’a yönelik bir hamle (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: 'Beyaz c-piyonuyla merkezin d5 karesine ikinci bir baskı ekler.',
      amac: 'Vezir piyonu açılışlarının temel fikri: c4 ile hem alan kazanmak hem de Nc3 için yer açmadan önce merkezi genişletmek.',
      neden: 'c4 d5 karesini kontrol eder ve Siyahın ...d5 oynamasını zorlaştırır; ayrıca Nc3’ten sonra e4 ile tam merkez kurma tehdidi doğar.',
      diger: [
        { move: '2.Nf3', text: 'Daha esnek (Motor: +0.4); Nimzo-Hint’e izin vermez ama Siyaha Vezir Hint ya da Kral Hint imkânı bırakır.' },
        { move: '2.e3', text: 'Sakin ama pasif (Motor: +0.18); c1 filini kapatır ve merkez için c4 kadar baskı kurmaz.' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah f8 filine b4 ve e7 çaprazlarını açar.',
      amac: 'Fil b4’e gelerek Nc3’ü bağlayacak (Nimzo-Hint) ya da gerekirse ...d5 ile klasik yapılara geçilecek.',
      neden: 'e6, Kral Hint’in (2...g6) aksine merkezde sağlam kalır ve ...Bb4 fikrini hazırlar; Nimzowitsch’in adını taşıyan sistemin ilk adımı.',
      diger: [
        { move: '2...g6', text: 'Kral Hint/Grünfeld yolu (Motor: +0.35); 1920’lerde henüz yeni ve tartışmalıydı.' },
        { move: '2...c6', text: 'Slav’a geçiş (Motor: +0.4).' },
      ],
    },
    '3w': {
      text: 'At c3’e gelir; hem d5’i hem e4’ü kontrol eder.',
      amac: 'e2-e4 ile merkezi tamamen ele geçirmeyi tehdit etmek.',
      neden: 'Nc3 en doğal geliştirme hamlesidir ve e4 planını destekler; bunun bedeli Siyaha Nimzo-Hint (…Bb4) imkânı vermektir. Rubinstein bu tartışmaya girmeyi kabul eder.',
      diger: [
        { move: '3.Nf3', text: 'Nimzo-Hint’ten kaçınır (Motor: +0.4); 3...b6 ile Vezir Hint ya da 3...d5 ile Vezir Gambiti gelir.' },
        { move: '3.g3', text: 'Katalan fikri (Motor: +0.4); 1928’de henüz yaygın değildi.' },
      ],
    },
    '3b': {
      text: 'Nimzo-Hint Savunması: fil c3 atını bağlar.',
      amac: 'Beyazın e4 hamlesini engellemek; gerekirse fili ata verip Beyaza ikiye katlanmış c-piyonları bırakmak.',
      neden: 'Bağlı at e4’ü koruyamaz; böylece Siyah merkezde piyon değil taş baskısıyla oynar. Bu savunmayı sistemli hale getiren Nimzowitsch’in kendisidir; motor da en iyi hamle olarak görüyor (Motor: +0.2).',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Reddi (Motor: +0.3); daha klasik ama daha pasif.' },
        { move: '3...c5', text: 'Benoni yapısına davet (Motor: +0.5); 4.d5 ile Beyaz alan kazanır.' },
      ],
    },
    '4w': {
      text: 'Klasik sistem (4.Qc2): vezir c2’de e4’ü tutar ve fil c3’te değişirse vezirle alınır.',
      amac: 'Beyaz fil çiftini kazanmak istiyor ama karşılığında ikiye katlanmış c-piyonları kabul etmek istemiyor.',
      neden: 'Bu sistemin bedeli vezirin erkenden oynaması ve şah kanadı gelişiminin gecikmesidir; Siyah merkezi hızla açarsa bundan yararlanabilir. Motor bu konumda 4.Qc2’yi en iyi hamle olarak gösteriyor (+0.35). İlginç olan, 4.e3 sisteminin bugün “Rubinstein varyantı” diye anılmasıdır; burada Rubinstein onun yerine vezir hamlesini seçti.',
      diger: [
        { move: '4.e3', text: 'Rubinstein sistemi (Motor: +0.25). Beyaz önce gelişir; ...Bxc3+ bxc3 ile ikiye katlanmış piyonları kabul eder ama merkezde piyon çoğunluğu alır.' },
        { move: '4.Nf3', text: 'Esnek (Motor: +0.25); 4...b6 ya da 4...c5 ile oyun Vezir Hint yapılarına kayabilir.' },
        { move: '4.a3', text: 'Sämisch: filin hemen değişmesini zorlar, c3 piyonları ikiye katlanır ama Beyaz büyük merkez ve fil çifti alır.' },
      ],
    },
    '4b': {
      text: 'Nimzowitsch 4...d6 ile alışılmadık bir yol seçer; hedefi ...c5 ve ...e5 ile merkezi kara karelerde kilitlemek.',
      amac: 'Fil çiftini verdikten sonra Beyazın fillerini piyon duvarının arkasında bırakacak kapalı bir yapı kurmak.',
      neden: 'Rubinstein notlarında 4...d6’yı uygunsuz bulur; bir notta Beyazın e2-e4 ile merkezi işgal edebileceği vurgulanır. Razuvaev de teorinin 4...c5 ya da 4...d5’i önerdiğini hatırlatır. Motor farkı küçük görüyor (4...O-O +0.25, 4...d6 +0.36), ama ...d6 Siyahın merkezi açarak 4.Qc2’nin zaman kaybını cezalandırma şansını azaltır.',
      diger: [
        { move: '4...O-O', text: 'Bugünkü ana hat (Motor: +0.25); 5.a3 Bxc3+ 6.Qxc3 b6 ile Siyah hızla gelişir.' },
        { move: '4...c5', text: 'd4’e hemen baskı (Razuvaev’in önerilerinden); 5.dxc5 sonrası Siyah gelişmede öne geçer.' },
        { move: '4...d5', text: 'Merkezi açan cevap (Motor: +0.37); vezirin c2’de kaybettiği zamanı değerlendirmeye çalışır. Botvinnik’in sevdiği hatlardan.' },
      ],
    },
    '5w': {
      text: '5.e3 ile d4 desteklenir ve f1 filinin yolu açılır.',
      amac: 'Sağlam bir merkez kurup Bd3 ve Ne2 ile şah kanadını geliştirmek.',
      neden: 'Daha iddialı 5.e4 merkezi hemen işgal ederdi ama c3 atı hâlâ bağlı ve Siyah ...e5/...Nc6 ile d4’e baskı kurar; çalışmada bu hamlenin veri tabanında kötü skor verdiği not edilir. e3 daha sakin ama sağlamdır (Motor: +0.35).',
      diger: [
        { move: '5.e4', text: 'Notlarda 4...d6’ya cevap olarak sözü geçen merkez işgali; ama c3 atı bağlıyken e4 piyonu hedef olabilir ve Siyah ...e5 ile kolayca karşılık verir.' },
        { move: '5.Bg5', text: 'Fili zincirin dışına çıkarır (Motor: +0.34); 5...h6 6.Bh4 Bxc3+ 7.bxc3 ile farklı bir yapı.' },
      ],
    },
    '5b': {
      text: '5...c5 ile Siyah d4’e baskı yapar ve ileride c5-d6-e5 zincirinin ilk halkasını koyar.',
      amac: 'd4’ü sorgulamak; Beyaz d5 oynarsa merkezi kapalı bir yapıya, dxc5 oynarsa açık bir oyuna yönelmek.',
      neden: 'Siyah henüz rok yapmadı ama c5 merkez mücadelesine hemen katılır. Motor 5...O-O ile 5...c5’i eşit görüyor (+0.33/+0.34).',
      diger: [
        { move: '5...O-O', text: 'Önce şah güvenliği (Motor: +0.33); 6.Bd3 c5 ile benzer yapılar.' },
        { move: '5...e5', text: 'Merkezi hemen kapatma girişimi; 6.dxe5 dxe5 ile vezirler değişir, Siyah fil çiftini kaybetmeden önce yapısını sabitlemiş olur.' },
      ],
    },
    '6w': {
      text: 'Fil d3’e gelir; h7’ye ve e4 karesine bakar.',
      amac: 'Şah kanadını geliştirmek ve rok yapmak; Bd3 ileride h7’ye karşı saldırıda da işe yarar.',
      neden: 'Bd3 ile Beyaz hem e4’ü ikinci kez kontrol eder hem de Ne2 ve O-O’ya hazırlanır. Motor 6.dxc5’i biraz daha iyi buluyor (+0.50), çünkü d6 piyonu geri alırken Siyahın merkezi gevşer; Rubinstein ise gerilimi korumayı seçti.',
      diger: [
        { move: '6.dxc5', text: 'Motorun ilk tercihi (Motor: +0.50): 6...dxc5 7.a3 ile Beyaz fil çiftini rahatça alır.' },
        { move: '6.Nf3', text: 'Klasik geliştirme (Motor: +0.36); ama f-piyonunun önünü kapatır.' },
      ],
    },
    '6b': {
      text: '6...Nc6 ile d4’e baskı üçüncü taşa çıkar.',
      amac: 'd4’ü kazanmayı tehdit etmek ve Beyazı karar vermeye zorlamak (d5 ya da dxc5).',
      neden: 'At c6’dan hem d4’e hem e5’e bakar; ...e5 ile kapalı yapı kurulursa e7-g6 yoluyla şah kanadına geçecek. Motor bunu en iyi hamle olarak görüyor (+0.37).',
      diger: [
        { move: '6...d5', text: 'Merkezi açan alternatif (Motor: +0.41); 7.Nf3 cxd4 8.exd4 dxc4 ile izole piyonlu oyun.' },
        { move: '6...O-O', text: 'Sakin rok (Motor: +0.45); 7.a3 Bxc3+ 8.Qxc3 cxd4 ile Beyaz fil çiftini alır.' },
      ],
    },
    '7w': {
      text: 'At e2’ye gelir; c3 atı ikinci kez desteklenir ve f-piyonunun önü açık kalır.',
      amac: 'Kapalı merkezde f2-f4 kırılmasını mümkün tutmak ve atı g3 üzerinden şah kanadına göndermek.',
      neden: 'Nf3 doğal olsa da f-piyonunu kilitlerdi; Ne2 ise ...Bxc3+ değişiminde Nxc3 ile alma imkânı da verir. Bu küçük ayrıntı oyunun bütün stratejisini belirleyecek: 19.f4 ancak at f3’te olmadığı için mümkün oldu.',
      diger: [
        { move: '7.Nf3', text: 'Motorun biraz tercih ettiği geliştirme (Motor: +0.43); ama f4 planı ortadan kalkar.' },
        { move: '7.dxc5', text: 'Motorun ilk tercihi (Motor: +0.46): 7...dxc5 8.a3 Bxc3+ 9.Qxc3 ile fil çifti ve açık merkez.' },
      ],
    },
    '7b': {
      text: 'Siyah merkezi kapatmaya karar verir: 7...e5 ile c5-d6-e5 zinciri tamamlanır.',
      amac: 'Beyazın fillerini piyon duvarının arkasında bırakmak; d5’ten sonra merkezin kilitlenmesiyle atları blokaj karelerine yerleştirmek.',
      neden: 'Rubinstein bu hamleyi stratejik olarak yanlış bulur: Siyahın taşları sıkışık ve hareketsiz kalır, vezir kanadındaki şansları azalır. Motor da çok net: 7...d5 ile neredeyse eşitlik (+0.30), 7...e5 sonrası +1.15. Sorun şu: kapalı merkezde Beyazın f-piyonu kırılması için bir kaldıracı var (f3-f4), Siyahın ise ...f5 yapması atları g6/e7’de olduğu için çok zor.',
      diger: [
        { move: '7...d5', text: 'Motorun açık tercihi (Motor: +0.30): 8.O-O O-O 9.Rd1 dxc4 10.Bxc4 cxd4 ile Siyah merkezi açar ve 4.Qc2’nin kaybettirdiği zamandan yararlanır.' },
        { move: '7...Ba5', text: 'Fili tutmak (Motor: +0.60); 8.a3 Bb6 ile fil çifti korunur ama zaman kaybedilir.' },
        { move: '7...O-O', text: 'Bekleyiş (Motor: +0.64); 8.a3 Bxc3+ 9.Qxc3 ile Beyaz fil çiftini yine kazanır.' },
      ],
    },
    '8w': {
      text: '8.d5 ile Beyaz alan kazanır ve c6 atını kovalar. Merkez artık kapalı.',
      amac: 'Merkezi kilitleyip d5 piyonuyla Siyahın konumunu sıkıştırmak; açık hatların olmadığı oyunda fil çiftini ileride bir kırılmayla canlandırmak.',
      neden: '8.dxe5? 8...Bxc3+ 9.Nxc3 dxe5 ile Siyaha rahat bir oyun verirdi (Motor: +0.67). d5 tempoyla atı kovalar ve Siyahın açılış hatasını cezalandırmanın en iyi yoludur (Motor: +0.98).',
      diger: [
        { move: '8.dxc5', text: 'Merkezi açar (Motor: +0.82); 8...dxc5 9.a3 ile fil çifti, ama Siyahın e5-c5 piyonları merkezi kontrol eder.' },
        { move: '8.dxe5', text: 'Değişim (Motor: +0.67); 8...Bxc3+ 9.Nxc3 Nxe5 ile Siyah serbestleşir.' },
      ],
    },
    '8b': {
      text: 'Fil c3 atını alır ve şah çeker. Beyaz fil çiftini kazanır.',
      amac: 'Kapalı merkezde atların fillerden kötü olmayacağını, hatta kara kareli Beyaz filin kendi piyonlarının arkasında “kötü fil” olacağını umuyor.',
      neden: 'Fil b4’te Beyazın a3 hamlesiyle zaten sorgulanacaktı; Nimzowitsch onu hemen vermeyi seçer. Motor 8...Bxc3+, 8...e4 ve 8...Ne7’yi eşit görüyor (+1.3 civarı).',
      diger: [
        { move: '8...e4', text: 'Piyon fedası (Motor: +1.26): 9.Bxe4 Nxe4 10.Qxe4+ Ne5 ile Siyah bir piyon karşılığında atını e5’e yerleştirir; riskli ama dinamik.' },
        { move: '8...Ne7', text: 'Fili tutar (Motor: +1.3–1.45); 9.O-O Bd7 10.f4 ile Beyaz kırılmayı hemen yapar.' },
      ],
    },
    '9w': {
      text: 'Vezirle alınır; piyon yapısı sağlam kalır.',
      amac: '4.Qc2’nin bütün fikri: fil çifti, sağlam piyonlar.',
      neden: 'Notlarda 9.Nxc3’ün 9...Nb4 ile Siyaha d3 filini alıp sadeleşme imkânı vereceği belirtilir; motor da bunu onaylıyor (Motor: 9.Nxc3 +0.44, 9.Qxc3 +1.24). 9.bxc3? 9...e4 ile Siyaha oyun verirdi.',
      diger: [
        { move: '9.Nxc3', text: 'Motor: +0.44. 9...Nb4 10.Qd2 Nxd3+ 11.Qxd3 ile Siyah fil çiftini ortadan kaldırır.' },
        { move: '9.bxc3', text: 'Motor: +0.19. 9...e4 10.Bxe4 Ne5 ile Siyah c4’e ve e4’e baskı kurar.' },
      ],
    },
    '9b': {
      text: 'At c6’dan e7’ye çekilir; buradan g6’ya gidecek.',
      amac: 'Kapalı yapıda atı şah kanadına götürmek: g6’dan f4 ve h4 karelerine bakacak ve Beyazın f4 kırılmasını zorlaştıracak.',
      neden: 'c6 atı d5 piyonuyla kovalanmıştı; b4 karesi Bd3’ü almak için cazip görünse de Beyaz Bb1 ile kaçar (9...Nb4 Motor: +1.52). e7-g6 manevrası kapalı merkezde Siyahın standart planıdır (Motor: +1.20).',
      diger: [
        { move: '9...Nb4', text: 'Motor: +1.52. 10.Bb1 b5 11.b3 ile at b4’te tek başına kalır.' },
        { move: '9...Nb8', text: 'Motor: +1.63. At d7 üzerinden c5/e5’e gelecekti ama 10.e4 ile Beyaz merkezi sabitler.' },
      ],
    },
    '10w': {
      text: 'Vezir c2’ye döner ve e4’ü tutar.',
      amac: 'Notlarda bu hamlenin ...Nf5 ve ...Bf5 gibi hamleleri önlemek için oynandığı belirtilir; c2’deki vezir b1-h7 çaprazında Bd3’ü de destekler.',
      neden: 'Vezir c3’te ...Ne4 ya da ...Nf5-d4 gibi tempolara açıktı. Ancak motor bu hamleyi yavaş buluyor (Motor: +0.53): 10.a4 (+1.08) ...b5’i önler, 10.e4 (+1.04) merkezi kesin olarak sabitler.',
      diger: [
        { move: '10.a4', text: 'Motorun ilk tercihi (Motor: +1.08): Siyahın ...b5 karşı oyununu baştan önler.' },
        { move: '10.e4', text: 'Merkezi kilitler (Motor: +1.04); 10...Ng6 11.f3 ile Beyaz sağlam bir yapı kurar ama f4 kırılması zorlaşır.' },
      ],
    },
    '10b': {
      text: 'Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini oyuna sokmak.',
      neden: 'Doğal bir hamle, ama motor burada fırsatı kaçırdığını gösteriyor: 10...b5! 11.e4 bxc4 12.Bxc4 ile Siyah vezir kanadında hemen karşı oyun alırdı (Motor: +0.59). Rok sonrası Beyaz yeniden +1.05.',
      diger: [
        { move: '10...b5', text: 'Motorun tercihi (Motor: +0.59): c4’e saldırır, b-hattını açar ve Beyazın vezir kanadını zayıflatır.' },
        { move: '10...e4', text: 'Fedayla aktiflik (Motor: +0.95); 11.Bxe4 Nxe4 12.Qxe4 Bf5 ile gelişme önü.' },
      ],
    },
    '11w': {
      text: 'Beyaz da rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini f-hattına yerleştirmek; ileride f3-f4 kırılmasını destekleyecek.',
      neden: 'Rok ve f1’deki kale f-piyonu kırılmasının parçasıdır. Motor 11.Nc3 (+0.97) ve 11.a4 (+0.89) ile ...b5’i engellemeyi daha iyi buluyor; 11.O-O sonrası Siyah yine 11...b5 ile karşı oyun bulabilirdi (Motor: +0.59).',
      diger: [
        { move: '11.Nc3', text: 'Motor: +0.97. At c3’ten b5 karesine bakar ve ...b5’i zorlaştırır; sonra a4 ile vezir kanadı kapanır.' },
        { move: '11.a4', text: 'Motor: +0.89. ...b5’i önler; Siyah ...e4 fedasıyla aktiflik arayabilir.' },
      ],
    },
    '11b': {
      text: 'At g6’ya gelir; f4 ve h4 karelerine bakar.',
      amac: 'Şah kanadında taş toplamak ve Beyazın f4 kırılmasını önceden zorlaştırmak.',
      neden: 'Rubinstein 11...Ng6’yı eleştirir ve ...f5’i hazırlamak için 11...Ne8’i önerir; ancak motor bu öneriye taktik bir itiraz getiriyor: 11...Ne8? 12.Bxh7+! Kh8 ile Beyaz bir piyon kazanır (Motor: +2.2), çünkü f6 atı gidince h7 korumasız kalır. Motorun tercihi yine 11...b5 (+0.56).',
      diger: [
        { move: '11...b5', text: 'Motor: +0.56. 12.e4 bxc4 13.Bxc4 Ng6 ile Siyah b-hattını açar; vezir kanadındaki karşı oyun yapının doğru yorumu.' },
        { move: '11...Ne8', text: 'Rubinstein’ın önerisi ama hemen oynanınca 12.Bxh7+ Kh8 13.Bd3 ile piyon gider (Motor: +2.2).' },
      ],
    },
    '12w': {
      text: 'At g3’e gelir; f5, e4 ve h5 karelerini kontrol eder.',
      amac: 'Siyah atların f4/h4’e ve beyaz kareli filin f5’e gelmesini engellemek; f-piyonunu serbest bırakmak.',
      neden: 'At e2’de c3’ü bekliyordu; artık o iş bittiği için g3’te daha aktif. Motor 12.Bd2, 12.Nc3 ve 12.Ng3’ü eşit görüyor (+0.9).',
      diger: [
        { move: '12.Bd2', text: 'Motor: +0.92. Önce fil gelişir; 12...Nh5 13.f4 f5 14.g4 ile keskin bir şah kanadı mücadelesi.' },
        { move: '12.Nc3', text: 'Motor: +0.89. At vezir kanadına döner; ...b5’i engeller.' },
      ],
    },
    '12b': {
      text: 'Kale e8’e gelir; e5 piyonunun arkasında ileride açılacak e-hattını önceden tutar.',
      amac: 'f4 kırılmasından sonra e-hattında hazır olmak ve e5’i desteklemek.',
      neden: 'Mantıklı ama yavaş: motor 12...h5 (+1.01) ile şah kanadında aktiflik ya da 12...b5 (+1.06) ile karşı oyunu tercih ediyor (12...Re8 +1.27). Siyah karşı oyunu geciktirdikçe Beyaz önleyici hamlelerini rahatça yapıyor.',
      diger: [
        { move: '12...h5', text: 'Motor: +1.01. 13.Bxg6 fxg6 14.Qxg6 h4 ile Siyah bir piyon karşılığında Beyaz atını kovalar.' },
        { move: '12...b5', text: 'Motor: +1.06. 13.cxb5 Nxd5 14.Bd2 a6 ile vezir kanadı açılır.' },
      ],
    },
    '13w': {
      text: '13.f3 ile Beyaz g4 ve e4 karelerini Siyah atlardan alır ve f4’e hazırlanır.',
      amac: 'f-piyonunu iki adımda ilerletmek: önce rakibin taktik imkânlarını kapatmak, sonra f4.',
      neden: 'Rubinstein, hemen 13.f4’ün erken olduğunu yazar: 13...exf4 14.exf4 Ng4! ile at h2’yi tehdit eder ve Siyahın taşları canlanır. Motor bunu doğruluyor: bu hatta Beyazın avantajı +0.5’e düşer. f3 en iyi hamle değil (Motor: 13.Bd2 +1.45, 13.a4 +1.42, 13.f3 +1.00), ama planın mantığı açık.',
      diger: [
        { move: '13.f4', text: 'Erken (Rubinstein): 13...exf4 14.exf4 Ng4 15.Ne2 Qh4 ile Siyah aktifleşir (Motor: +0.50).' },
        { move: '13.a4', text: 'Motor: +1.42. ...b5’i önler; vezir kanadını kapatıp sonra şah kanadına dönmek.' },
        { move: '13.Bd2', text: 'Motor: +1.45. Önce geliştirme; f3/f4 kararı ertelenir.' },
      ],
    },
    '13b': {
      text: 'Fil d7’ye gelişir ve vezir kanadı ilerleyişini destekler.',
      amac: '...a6 ve ...b5 ile vezir kanadında karşı oyun hazırlamak; Ra8 ile c8’in bağlantısını kurmak.',
      neden: 'Fil d7’de sağlam ama pasif; c8-h3 çaprazında kalarak ileride f5 karesine bakacak. Motor doğrudan 13...b5’i (+1.00) daha iyi buluyor; her tempo önemli.',
      diger: [
        { move: '13...b5', text: 'Motor: +1.00. 14.b3 Nf8 15.f4 exf4 ile hemen hareket.' },
        { move: '13...Nf8', text: 'Motor: +1.19. At h7/d7 üzerinden yeniden yerleşir; ...h5-h4 ile g3 atı kovalanabilir.' },
      ],
    },
    '14w': {
      text: 'Fil d2’ye gelir. Kara kareli fil henüz pasif, ama kale bağlantısı kurulur.',
      amac: 'Gelişimi tamamlamak; fil ileride e1, c1 ya da b2 üzerinden aktif kareler arayacak.',
      neden: 'Fil c1’de kalelerin birleşmesini engelliyordu. Motor 14.a4’ü biraz daha iyi görüyor (+1.38’e karşı +1.30) çünkü ...b5’i önler.',
      diger: [
        { move: '14.a4', text: 'Motor: +1.38. 14...Nf8 15.Bf5 ile beyaz kareli filleri değiştirmek de mümkün.' },
        { move: '14.b3', text: 'Motor: +1.33. c4’ü önceden destekler.' },
      ],
    },
    '14b': {
      text: '14...a6 ile ...b5 hazırlanır.',
      amac: 'Vezir kanadında b5 kırılmasıyla c4’ü sorgulamak ve hat açmak.',
      neden: 'Siyahın tek gerçek karşı oyun bölgesi vezir kanadı. Hemen 14...b5 de (Motor: +1.17) 15.cxb5 Rb8 ile bir piyon karşılığında hat açardı; Nimzowitsch önce a6 ile b5’i sağlamlaştırır (Motor: +1.23).',
      diger: [
        { move: '14...b5', text: 'Motor: +1.17. 15.cxb5 Rb8 16.e4 Bxb5 ile piyon geri alınır.' },
        { move: '14...Nf8', text: 'Motor: +1.36. Şah kanadını savunmaya yönelik.' },
      ],
    },
    '15w': {
      text: 'Önleyici hamle: h3 ile g4 karesi tamamen kontrol altına alınır ve şah için kaçış karesi açılır.',
      amac: 'f4 kırılmasından sonra ...Ng4 gibi atlayışları önlemek; şahı h2’ye götürmeye hazırlanmak.',
      neden: 'Rubinstein’ın 13.f4 hakkındaki notu (…Ng4!) bu hamlenin nedenini açıklıyor: f-piyonu ilerleyince g4 karesi zayıflayacak. Motor 15.b3 ile eşit görüyor (+1.27/+1.23).',
      diger: [
        { move: '15.b3', text: 'Motor: +1.27. Önce vezir kanadını sağlamlaştırır; aynı plan farklı sırayla.' },
        { move: '15.a4', text: 'Motor: +1.20. 15...b5 16.axb5 axb5 17.cxb5 ile a-hattı açılır, Siyahın kalesine oyun verir.' },
      ],
    },
    '15b': {
      text: 'Siyah vezir kanadında 15...b5 ile ilerler.',
      amac: 'c4’e saldırmak; Beyaz cxb5 oynarsa b-hattını açmak, b3 oynarsa ...b4 ile alan kazanmak.',
      neden: 'Planın mantıklı devamı ve motorun ilk tercihi (Motor: +1.03). Bekleyiş hamleleri (15...Rb8 +1.36, 15...Qe7 +1.42) Beyaza a4 ile vezir kanadını kapatma şansı verirdi.',
      diger: [
        { move: '15...Rb8', text: 'Motor: +1.36. b5’i hazırlar ama bir tempo kaybeder.' },
        { move: '15...Qe7', text: 'Motor: +1.42. 16.a4 b5 17.axb5 axb5 18.cxb5 ile Beyaz bir piyon kazanabilir.' },
      ],
    },
    '16w': {
      text: '16.b3 ile c4 piyonu desteklenir; Beyaz vezir kanadında hat açılmasını istemez.',
      amac: 'Siyahın karşı oyununu durdurmak; Beyazın asıl planı şah kanadında olduğu için vezir kanadını kapalı tutmak.',
      neden: '16.cxb5 axb5 Siyaha a-hattını ve b-hattını açardı. Motor b3’ü en iyi hamle olarak görüyor (+1.21); 16.a4? bxc4 17.Qxc4 (+0.63) ya da 16.Be1? bxc4 (+0.67) Siyahın planına yardım ederdi.',
      diger: [
        { move: '16.a4', text: 'Motor: +0.63. 16...bxc4 17.Qxc4 a5 ile Siyah b-hattını ve b4 karesini alır.' },
        { move: '16.Be1', text: 'Motor: +0.67. 16...bxc4 17.Bxc4 h5 ile Siyah iki kanatta aktif.' },
      ],
    },
    '16b': {
      text: 'Vezir b6’ya gelir; c5’i destekler ve b-piyonunun ilerleyişine yardım eder.',
      amac: '...a5-a4 ile a-hattını açmaya hazırlanmak ve vezirle vezir kanadına baskı yapmak.',
      neden: 'Vezir b6’da g1-a7 çaprazında görünse de c5 piyonu bu çaprazı kapatıyor; vezir 21. hamlede d8’e dönmek zorunda kalacak. Motor 16...b4 (+1.17) ya da 16...Qe7’yi (+1.20) tercih ediyor; 16...Qb6 +1.60.',
      diger: [
        { move: '16...b4', text: 'Motor: +1.17. Vezir kanadını hemen kapatır ve ...a5-a4 ile a-hattına yönelir.' },
        { move: '16...Qe7', text: 'Motor: +1.20. Vezir e-hattında kalır ve f4 kırılmasına karşı e5’i destekler.' },
      ],
    },
    '17w': {
      text: 'Şah h2’ye gider; g1-a7 çaprazından ve birinci yataydan uzaklaşır, g3 atını ve h3’ü destekler.',
      amac: 'f4 kırılmasından önce son önlem: e-hattı açıldığında ...Qe3+ ya da çapraz şahları gibi taktiklere yer bırakmamak.',
      neden: 'Rubinstein kırılmadan önce her ayrıntıyı hazırlar. Ancak motor 17.a4’ü (+1.61) daha güçlü buluyor: Siyah vezir kanadında henüz serbestken onu kapatmak daha önemli. Kh2’nin bir de taktik dezavantajı olacak: 22.Bb2? Ng4+ fikri şahın h2’de olmasından doğar.',
      diger: [
        { move: '17.a4', text: 'Motor: +1.61. 17...Qd8 18.axb5 axb5 19.cxb5 ile Beyaz bir piyon kazanır ya da vezir kanadını açar.' },
        { move: '17.Rae1', text: 'Motor: +1.47. Kaleyi e-hattına önceden getirir.' },
      ],
    },
    '17b': {
      text: 'a-piyonu ilerler; hedef ...a4 ile a-hattını açmak.',
      amac: 'b5 piyonunu desteklemek ve ...a4 ile b3’e saldırmak.',
      neden: 'Mantıklı karşı oyun, ama motor 17...Qd8 ile veziri e-hattına döndürmeyi biraz daha iyi görüyor (+1.17’ye karşı +1.32).',
      diger: [
        { move: '17...Qd8', text: 'Motor: +1.17. Vezir merkeze döner; ...Qe7 ile e5’i destekler.' },
        { move: '17...b4', text: 'Motor: +1.50. Önce vezir kanadını kapatır; 18.a3 ile Beyaz a-hattını açar.' },
      ],
    },
    '18w': {
      text: 'Kale b1’e gelir; b-hattı açılırsa hazır olur.',
      amac: 'Olası ...bxc4 bxc4 ile açılacak b-hattına karşı önlem almak.',
      neden: 'Motor bu hamleyi gereksiz buluyor (Motor: +0.79): 18.a3! (+1.31) ya da 18.a4 (+1.22) ile vezir kanadında Beyaz doğrudan inisiyatif alırdı. Rubinstein’ın önceliği karşı oyunu önlemekti; kale b1’den sonra d1 ve e1’e kayacak.',
      diger: [
        { move: '18.a3', text: 'Motor: +1.31. 18...Qb8 19.Rab1 Ra7 20.f4 ile Beyaz hem vezir kanadında hem şah kanadında hazır.' },
        { move: '18.a4', text: 'Motor: +1.22. 18...b4 19.Rae1 ile vezir kanadı kapanır ama Beyazın a-piyonu sabitlenir.' },
      ],
    },
    '18b': {
      text: '18...b4 ile vezir kanadı kapanır. Siyahın hat açma şansı a-hattına kalır.',
      amac: 'c3 karesini Beyaz filinden almak ve ...a4 ile a-hattını açmak.',
      neden: 'Rubinstein a-hattından gelecek saldırının dar ve umutsuz olduğunu yazar; yorumcular b-hattını açmanın (…bxc4) Siyaha daha fazla karşı oyun vereceğini düşünür. Motor bu konuda farklı düşünüyor: 18...b4 en iyi hamle (+1.00), 18...bxc4 19.bxc4 ise b-hattını Beyaz kalesine teslim eder (+1.86). b4’ün gerçek yararı: c3 karesi kapanır, Beyazın fili b2’ye ancak c1 üzerinden gidebilir.',
      diger: [
        { move: '18...bxc4', text: 'Motor: +1.86. 19.bxc4 Qd8 20.Bc3 ile b-hattı ve c3 karesi Beyazın olur.' },
        { move: '18...a4', text: 'Motor: +1.09. 19.a3 axb3 20.Rxb3 b4 ile benzer yapılar.' },
      ],
    },
    '19w': {
      text: 'Kırılma: 19.f4! ile e5 sorgulanır ve e-hattı açılır.',
      amac: 'Kapalı merkezde fil çiftini canlandırmak; e-hattını açmak ve f4-f5 ile g6 atını kovalamak.',
      neden: 'Bütün hazırlık bu an içindi: f3, h3 ve Kh2 sayesinde 19...exf4 20.exf4 sonrası ...Ng4 taktiği yok. Siyah vezir kanadını kapattığı için (…b4) karşı oyunu yavaş. Motor f4’ü en iyi hamle olarak görüyor (+0.83), 19.a4 ve 19.a3 benzer.',
      diger: [
        { move: '19.a4', text: 'Motor: +0.81. Vezir kanadını kesin olarak kapatır; f4 sonra gelir.' },
        { move: '19.a3', text: 'Motor: +0.77. a-hattını Beyazın lehine açmaya çalışır.' },
      ],
    },
    '19b': {
      text: 'Siyah f4’te değişir.',
      amac: 'f4-f5 ile g6 atının kovalanmasını önlemek ve Beyazın e3 piyonunu merkezden uzaklaştırmak.',
      neden: 'e5’i tutmak zordu: 19...Qd8 20.f5 Nf8 21.e4 ile Beyaz şah kanadında alan kazanırdı (Motor: +0.96). Motor 19...a4’ü (+0.79) biraz daha iyi buluyor: önce vezir kanadında karşı oyunu hızlandırmak.',
      diger: [
        { move: '19...a4', text: 'Motor: +0.79. 20.Rbe1 axb3 21.axb3 exf4 22.exf4 Rxe1 ile a-hattı Siyahın.' },
        { move: '19...Qd8', text: 'Motor: +0.96. 20.f5 Nf8 21.e4 ile kapalı merkez kalır ama Beyaz şah kanadında baskın.' },
      ],
    },
    '20w': {
      text: 'Piyonla alınır; e-hattı açıldı.',
      amac: 'f4 piyonunu merkezde tutmak ve f4-f5 ilerleyişini hazırlamak.',
      neden: 'Neredeyse zorunlu: 20.Rxf4? 20...Nxf4 21.exf4 ile kale g6 atına gider (Motor: −2.0); 20.Nf5? de 20...Bxf5 ile taş kaybettirir (Motor: −2.0).',
      diger: [
        { move: '20.Rxf4', text: 'Hata: 20...Nxf4 ile kale kaybedilir (Motor: −2.00).' },
      ],
    },
    '20b': {
      text: 'At f8’e çekilir; f4-f5 tehdidinden kaçar ve e6’yı savunur.',
      amac: 'Atı yeniden yerleştirmek: f8’den d7, g6 ya da h7 karelerine gidebilir.',
      neden: 'g6’daki at f5 ile kovalanacaktı. Motor 20...Qd8 (+1.03) ve 20...a4’ü (+1.11) biraz daha iyi görüyor; at f8’de savunmada sağlam ama aktif değil.',
      diger: [
        { move: '20...Qd8', text: 'Motor: +1.03. Vezir önce merkeze döner; at g6’da kalır.' },
        { move: '20...a4', text: 'Motor: +1.11. Vezir kanadında karşı oyunu hızlandırır.' },
      ],
    },
    '21w': {
      text: 'Fil c1’e döner; hedefi b2 ve uzun çapraz.',
      amac: 'Kara kareli fili d2’deki pasif yerinden alıp a1-h8 çaprazına çıkarmak; orada f6 atına ve g7’ye bakacak.',
      neden: 'c3 karesi b4 piyonuyla kapalı olduğu için tek yol c1-b2’dir. Motor bu dolambacı en iyi hamle olarak görüyor (+1.22).',
      diger: [
        { move: '21.f5', text: 'Motor: +1.15. Hemen alan kazanır ama e5 karesini Siyah atlarına bırakır.' },
        { move: '21.Rbd1', text: 'Motor: +1.16. Kaleyi merkeze getirir.' },
      ],
    },
    '21b': {
      text: 'Vezir d8’e, merkeze döner.',
      amac: 'Veziri e-hattına ve şah kanadına yaklaştırmak; ...Qe7 ya da ...Qh4 imkânlarını hazırlamak.',
      neden: 'b6’daki vezir artık hiçbir şey yapmıyordu (c5 piyonu çaprazı kapatıyor). Motor 21...a4 ile eşit görüyor (+1.17/+1.19).',
      diger: [
        { move: '21...a4', text: 'Motor: +1.17. 22.Bb2 Qd8 23.Qf2 h5 ile benzer.' },
        { move: '21...Ng6', text: 'Motor: +1.49. 22.f5 Ne5 23.Bg5 ile at kovalanır.' },
      ],
    },
    '22w': {
      text: 'Vezir f2’ye gelir; f4’ü destekler ve h4 karesini kontrol eder.',
      amac: 'Fili b2’ye götürmeden önce taktik bir zayıflığı kapatmak.',
      neden: 'Rubinstein notlarında hemen 22.Bb2’nin büyük bir hata olacağını yazar: 22...Ng4+! 23.hxg4 Qh4+ 24.Kg1 Qxg3 (ya da 23.Kg1 Ne3). Motor bunu onaylıyor: avantaj +0.27’ye düşer. Qf2 ile h4 karesi korunur (Motor: +1.20; 22.f5 +1.30 de iyi).',
      diger: [
        { move: '22.Bb2', text: 'Hata (Rubinstein): 22...Ng4+! 23.hxg4 Qh4+ 24.Kg1 Qxg3 (Motor: +0.27).' },
        { move: '22.f5', text: 'Motor: +1.30. 22...a4 23.Qf2 h6 24.Bf4 ile fil c1-h6 çaprazından aktifleşir.' },
      ],
    },
    '22b': {
      text: '22...a4 ile a-hattı açılmaya zorlanır.',
      amac: 'b3’e saldırmak ve a-hattını Siyah kalelerine açmak.',
      neden: 'Siyahın tek karşı oyunu. Motor 22...h5 (+1.11) ile g3 atını kovalamayı da düşünüyor; 22...a4 +1.21.',
      diger: [
        { move: '22...h5', text: 'Motor: +1.11. 23.f5 h4 24.Ne2 ile at geri itilir.' },
        { move: '22...Ng6', text: 'Motor: +1.47. 23.Bb2 a4 24.Kh1 ile Beyaz uzun çaprazı kurar.' },
      ],
    },
    '23w': {
      text: 'Fil b2’ye ulaşır; uzun çaprazda f6 atına ve g7’ye bakar.',
      amac: 'Bxf6 tehdidiyle Siyahın piyon yapısını bozmak ve e4 karesinin bekçisini kaldırmak.',
      neden: 'Artık 22...Ng4+ taktiği yok çünkü vezir h4’ü tutuyor. Motor 23.Bb2 ve 23.f5’i eşit görüyor (+1.17).',
      diger: [
        { move: '23.f5', text: 'Motor: +1.17. 23...h6 24.Bf4 ile fil başka bir çaprazdan aktifleşir.' },
        { move: '23.Qf3', text: 'Motor: +0.75. 23...axb3 24.axb3 Ng6 ile a-hattı Siyaha kalır.' },
      ],
    },
    '23b': {
      text: 'At g6’ya döner ve f4’e baskı yapar.',
      amac: 'f4 piyonunu hedef almak ve f4-f5 ilerleyişini zorlaştırmak.',
      neden: 'Motor bu hamleyi beğenmiyor (Motor: +1.53); 23...h5 (+1.16) ile g3 atını kovalamak ya da 23...axb3 (+1.25) ile a-hattını hemen açmak daha iyiydi.',
      diger: [
        { move: '23...h5', text: 'Motor: +1.16. 24.f5 axb3 25.axb3 h4 ile g3 atı kovalanır.' },
        { move: '23...axb3', text: 'Motor: +1.25. 24.axb3 h5 ile karşı oyun.' },
      ],
    },
    '24w': {
      text: 'Kale b1’den d1’e geçer; a-hattı açılınca e-hattına kayacak.',
      amac: 'Kaleyi merkeze getirmek; b-hattı artık açılmayacağı için b1’de işi kalmadı.',
      neden: 'Motor 24.Kg1 (+1.52) ya da doğrudan 24.Rbe1/Rfe1’i (+1.44) biraz daha iyi görüyor; 24.Rbd1 +1.22. Fark küçük.',
      diger: [
        { move: '24.Rbe1', text: 'Motor: +1.44. Kaleyi doğrudan e-hattına getirir; 24...Rxe1 25.Rxe1 h5 26.f5.' },
        { move: '24.Kg1', text: 'Motor: +1.52. Şahı ...Ng4+ gibi taktiklerden uzaklaştırır.' },
      ],
    },
    '24b': {
      text: 'Siyah b3’te değişip a-hattını açar.',
      amac: 'a-hattını Siyah kalelerine açmak; ...Ra2 ile ikinci yataya girmeyi hedeflemek.',
      neden: 'Motorun ilk tercihi (Motor: +1.13). Bekleyiş Beyaza a4 karesini sabitleme fırsatı verirdi.',
      diger: [
        { move: '24...h5', text: 'Motor: +1.27. 25.Bxf6 Qxf6 26.Ne4 ile at merkeze gelir.' },
        { move: '24...h6', text: 'Motor: +1.50.' },
      ],
    },
    '25w': {
      text: 'b-piyonuyla alınır; c4 desteklenmeye devam eder.',
      amac: 'Piyon yapısını korumak ve c4’ü sağlam tutmak.',
      neden: 'Zorunluya yakın: 25.Bxf6 Qxf6 26.axb3 Qh4 Siyaha karşı oyun verirdi (Motor: +0.14).',
      diger: [
        { move: '25.Bxf6', text: 'Motor: +0.14. Önce at alınır ama 25...Qxf6 26.axb3 Qh4 ile Siyah aktifleşir.' },
      ],
    },
    '25b': {
      text: 'Kale a7’ye gelir; a-hattını ve yedinci yatayı birlikte tutar.',
      amac: 'Yedinci yatayda d7’yi ve f7’yi savunmak, gerekirse ...Rea8 ile a-hattında katlanmak.',
      neden: 'Motor bu hamleyi gereksiz bulur (Motor: +1.92): 25...h5! (+1.24) ile şah kanadında aktiflik ya da 25...Ra2 (+1.30) ile ikinci yataya giriş daha iyiydi.',
      diger: [
        { move: '25...Ra2', text: 'Motor: +1.30. 26.Ra1 Rxa1 27.Bxa1 h6 ile kaleler değişir, Siyah rahatlar.' },
        { move: '25...h5', text: 'Motor: +1.24. 26.Bxf6 Qxf6 27.Nxh5 Qh4 ile Siyah piyon karşılığında aktif.' },
      ],
    },
    '26w': {
      text: 'Kale e-hattına gelir ve e8 kalesine karşı çıkar.',
      amac: 'Açık e-hattını ele geçirmek.',
      neden: 'Doğal ve güçlü (Motor: +1.77). Motor 26.Bb1’i (+2.03) bir tık daha iyi görüyor: fil b1-h7 çaprazında kalır ve d3 karesi atın manevrasına boşalır.',
      diger: [
        { move: '26.Bb1', text: 'Motor: +2.03. 26...h5 27.Bxf6 Qxf6 28.Ne4 ile at merkeze gelir.' },
        { move: '26.Kg1', text: 'Motor: +1.82.' },
      ],
    },
    '26b': {
      text: 'Kaleler değişir.',
      amac: 'e-hattında Beyaz baskısını azaltmak ve sadeleşmek.',
      neden: 'Motorun ilk tercihi (Motor: +1.75); 26...h5 27.Rxe8+ Bxe8 (+2.00) daha pasif olurdu.',
      diger: [
        { move: '26...h5', text: 'Motor: +2.00. 27.Rxe8+ Bxe8 ile fil e8’de pasif kalır.' },
      ],
    },
    '27w': {
      text: 'Beyaz kaleyle alır ve e-hattını tutar.',
      amac: 'e-hattında kaleyle kalıcı kontrol.',
      neden: '27.Qxe1 (+1.19) veziri pasif bir kareye götürürdü; 27.Bxg6?? ise 27...Rxf1 ile kale kaybettirir (Motor: −4.39).',
      diger: [
        { move: '27.Qxe1', text: 'Motor: +1.19. Vezir f4’ü korumayı bırakır.' },
      ],
    },
    '27b': {
      text: 'At f8’e döner ve e6 karesini savunur.',
      amac: 'Re7 ve Re6 girişlerine karşı e6 karesini tutmak.',
      neden: 'Motor 27...h6 (+1.67) ve 27...Nf8 (+1.76) arasında küçük fark görüyor. At g6’da f4 ile kovalanma tehdidindeydi.',
      diger: [
        { move: '27...h6', text: 'Motor: +1.67. 28.f5 Nf8 29.Qf4 Ra6 ile benzer.' },
        { move: '27...Ra6', text: 'Motor: +1.79. Kale altıncı yatayda savunmaya katılır.' },
      ],
    },
    '28w': {
      text: '28.Bxf6: Rubinstein iyi yerleşmiş filini f6 atıyla değişir.',
      amac: 'e4 karesinin bekçisini kaldırmak ve Siyah veziri d6’yı savunmak için kötü bir kareye itmek.',
      neden: 'Rubinstein notlarında bu değişimin doğru olduğunu, amacın veziri kötü bir kareye zorlamak olduğunu ve meyvesinin 30. hamlede görüleceğini yazar. Motor 28.Bb1’i (+1.94) biraz daha iyi buluyor ama 28.Bxf6 (+1.69) planı açık ve güçlü: Ne4 sonrası d6 ve c5 zayıf.',
      diger: [
        { move: '28.Bb1', text: 'Motor: +1.94. 28...Ra6 29.Nf1 ile Beyaz yavaş manevrasını sürdürür.' },
        { move: '28.Nf1', text: 'Motor: +1.69. At e3 üzerinden merkeze gelir.' },
      ],
    },
    '28b': {
      text: 'Vezirle alınır.',
      amac: 'Piyon yapısını bozmamak.',
      neden: 'Neredeyse zorunlu: 28...gxf6? 29.Nh5 ile şah açılır (Motor: +4.62); 28...Ra2? 29.Qxa2 Qxf6 ise kale kaybettirir.',
      diger: [
        { move: '28...gxf6', text: 'Motor: +4.62. 29.Nh5 Kh8 30.f5 ile Siyah şahı açık.' },
      ],
    },
    '29w': {
      text: 'At e4’e gelir; vezire saldırır, d6 ve c5’i tehdit eder.',
      amac: 'Merkezde güçlü bir yer edinmek ve veziri kötü bir kareye zorlamak.',
      neden: 'Motorun açık tercihi (Motor: +2.07); 29.Nh5 (+0.48) veziri h6’ya gönderip baskıyı azaltırdı.',
      diger: [
        { move: '29.Nh5', text: 'Motor: +0.48. 29...Qh6 30.Qh4 Ra3 ile Siyah karşı oyun bulur.' },
        { move: '29.Re2', text: 'Motor: +0.32. Yavaş; Siyah ...Ra3 ile b3’e saldırır.' },
      ],
    },
    '29b': {
      text: 'Vezir h6’ya çekilir ve f4’e baskı yapar.',
      amac: 'Veziri tehdit altından çıkarmak ve f4 piyonunu hedef almak.',
      neden: 'Tek iyi kare: 29...Qg6? 30.Nxc5 (Motor: +2.36), 29...Qd8? 30.Nxd6 (Motor: +2.90). Rubinstein’ın 28. hamledeki notu tam olarak buydu: vezir h6’da kenarda ve Beyaz piyonları onu hapsedebilir.',
      diger: [
        { move: '29...Qg6', text: 'Motor: +2.36. 30.Nxc5 Qh6 31.Nxd7 Rxd7 ile piyon gider.' },
        { move: '29...Qd8', text: 'Motor: +2.90. 30.Nxd6 ile d6 düşer.' },
      ],
    },
    '30w': {
      text: '30.f5 ile piyon ilerler; d7 filinin çaprazını keser ve e6 ile g6 karelerini Siyahtan alır.',
      amac: 'Alan kazanmak, Siyahın beyaz kareli filini hapsetmek ve f5-f6 ile şaha saldırı tehdidi oluşturmak.',
      neden: 'Rubinstein’ın 28. hamledeki notunun meyvesi. Motor bu hamleyi açık ara en iyi buluyor (+1.80 derinlik 20), 30.Ng5 +1.13. e4’teki at artık bir piyonla kovulamaz.',
      diger: [
        { move: '30.Ng5', text: 'Motor: +1.13. 30...f5 31.Re7 Qf6 ile Siyah karşı oyun bulur.' },
        { move: '30.Ng3', text: 'Motor: +0.20. Pasif; vezir h4’e gelir.' },
      ],
    },
    '30b': {
      text: 'Kale a3’e gelir ve b3 piyonuna saldırır.',
      amac: 'Beyazı vezir kanadında savunmaya zorlamak.',
      neden: 'Motor 30...Ra3 ve 30...Ra6’yı eşit görüyor (+1.55). 30...Ra8? ise 31.f6 ile şaha saldırıya kapı açar (Motor: +2.70).',
      diger: [
        { move: '30...Ra6', text: 'Motor: +1.55. 31.g4 f6 32.Kg3 Bc8 ile oyunda olan benzer konumlar.' },
        { move: '30...Ra8', text: 'Motor: +2.70. 31.f6 Ra3 32.fxg7 ile şah açılır.' },
      ],
    },
    '31w': {
      text: 'Kale b1’e döner ve b3’ü savunur.',
      amac: 'Vezir kanadını savunmak, sonra kaleyi yeniden e-hattına getirmek.',
      neden: 'Motor 31.Bc2 (+1.56) ve 31.Rb1’i (+1.52) eşit görüyor; 31.g4? 31...Rxb3 ile piyon kaybettirirdi (Motor: +1.02).',
      diger: [
        { move: '31.Bc2', text: 'Motor: +1.56. 31...Ra2 32.g4 Ba4 ile benzer.' },
        { move: '31.g4', text: 'Motor: +1.02. 31...Rxb3 32.g5 Qh5 ile Siyah piyon kazanır.' },
      ],
    },
    '31b': {
      text: 'Kale a6’ya döner; altıncı yatayda d6 ve f6’yı savunur.',
      amac: 'Kaleyi savunmaya getirmek; d6 piyonu ve f6 karesi kritik.',
      neden: 'Motor 31...Ra6 ve 31...Ba4’ü eşit görüyor (+1.44); 31...Bc8? ise 32.f6 ile şaha saldırı verirdi (Motor: +2.01).',
      diger: [
        { move: '31...Ba4', text: 'Motor: +1.44. 32.Bc2 Bd7 33.Re1 Ra2 ile benzer.' },
        { move: '31...Bc8', text: 'Motor: +2.01. 32.f6 Nd7 33.Re1 Ne5 ile şah kanadı açılır.' },
      ],
    },
    '32w': {
      text: '32.g4 ile f5 piyonu desteklenir.',
      amac: 'Siyahın ...Bxf5 fikrini önlemek ve g4-g5 ile h6’daki veziri tuzağa düşürmeyi tehdit etmek.',
      neden: 'Rubinstein notlarında, kötü yerleşmiş Siyah vezirin malzemeye mal olacağını, çünkü g4-g5 ve Be2 tehditlerinin olduğunu yazar. Motor bunu onaylıyor: 32...Ba4? 33.g5 Qh5 34.Be2 ile vezir kaybedilir (Motor: +5.42). 32.g4 motorun ilk tercihi (+1.69).',
      diger: [
        { move: '32.Re1', text: 'Motor: +1.67. 32...Ra3 33.Rb1 Ra6 ile tekrara yakın.' },
        { move: '32.Rf1', text: 'Motor: +1.66. Kaleyi f-hattına getirir.' },
      ],
    },
    '32b': {
      text: '32...f6 ile g5 karesi kapatılır; Beyazın g5 ve Ng5 fikirleri ortadan kalkar.',
      amac: 'Veziri hapsedilmekten kurtarmak ve f-piyonunun ilerleyişini durdurmak.',
      neden: 'Motorun ilk tercihi (Motor: +1.39); 32...g5 33.fxg6 hxg6 (+2.05) şahı açardı, 32...Bxf5? 33.gxf5 ise taş kaybettirir (+2.70). Bedeli: e6 karesi kalıcı olarak zayıflar ve d6 artık yalnızca kaleyle korunur. Razuvaev bu yapının Tarrasch – Marco (1898) oyunundaki uğursuz bir konuma benzediğini not eder.',
      diger: [
        { move: '32...g5', text: 'Motor: +2.05. 33.fxg6 hxg6 34.Rf1 f5 ile şah açılır.' },
        { move: '32...Bxf5', text: 'Motor: +2.70. 33.gxf5 Nd7 34.Qg3 ile taş kaybedilir.' },
      ],
    },
    '33w': {
      text: 'Şah g3’e çıkar; h4 karesini tutar ve h3-h4 ilerleyişini hazırlar.',
      amac: 'h4 ve g5 ile şah kanadında piyon saldırısı kurmak; şah g3’te piyonları destekler.',
      neden: 'Cesur bir hamle: şah merkeze yaklaşır ama Siyahın aktif taşı yok. Motor derinlik 20’de 33.Bf1’i (+1.90) biraz daha iyi görüyor: fil e2-h5 çaprazına gelir. 33.Kg3 +1.54.',
      diger: [
        { move: '33.Bf1', text: 'Motor: +1.90. 33...Be8 34.Qg3 Nd7 35.Nxd6 ile d6 düşer.' },
        { move: '33.Qg3', text: 'Motor: +1.60. 33...Ra2+ 34.Kh1 Rb2 ile Siyah aktifleşir.' },
      ],
    },
    '33b': {
      text: 'Fil c8’e döner.',
      amac: 'Rubinstein’ın notlarına göre d7 karesini ata boşaltmak: at d7 üzerinden e5’e gelecek.',
      neden: 'Motorun ilk tercihi (Motor: +1.37). Fil c8’de e6’yı da korur. 33...Be8 (+2.10) ya da 33...Ra3 (+2.50) daha kötü.',
      diger: [
        { move: '33...Be8', text: 'Motor: +2.10. 34.Re1 Ra3 35.Bc2 ile fil pasif.' },
        { move: '33...Ra3', text: 'Motor: +2.50. 34.Qe2 Ra8 35.h4 ile Beyaz e-hattından girer.' },
      ],
    },
    '34w': {
      text: 'Kale e-hattına geri döner; hedef e6 ve e8 kareleri.',
      amac: 'Rubinstein bunu “karşı plan” olarak niteler: 34...Nd7 gelirse 35.Nxd6! ile cevap verecekti.',
      neden: 'Motor bu iddiaya katılmıyor: 34...Nd7 35.Nxd6 Rxd6 36.Re8+ Kf7 sonrası Beyazın avantajı +0.55’e düşer, çünkü c8 fili e-hattını tutuyor. Motorun tercihi 34.h4 (+2.20) ya da 34.Be2 (+1.86); 34.Re1 +1.23.',
      diger: [
        { move: '34.h4', text: 'Motor: +2.20. 34...Nd7 35.Be2 g5 36.fxg6 ile şah kanadı açılır.' },
        { move: '34.Qe2', text: 'Motor: +1.71. 34...Nd7 35.h4 g5 36.fxg6 ile benzer.' },
      ],
    },
    '34b': {
      text: 'Hata: 34...Bb7? Fil c8’den ayrılır ve d5’e baskı kurmaya çalışır.',
      amac: 'd5 piyonunu hedef almak ve fili aktif bir çapraza getirmek.',
      neden: 'Fil c8’den ayrılınca e6 ve e8 kareleri sahipsiz kalır; Beyaz hemen Qe2 ile e-hattına geçer. Motor: +3.52; en iyisi 34...Nd7 (+1.15), çünkü c8 fili e8 ve e6’yı korumaya devam eder.',
      diger: [
        { move: '34...Nd7', text: 'Motor: +1.15. 35.h4 Ne5 36.Qe2 g5 ile at e5’te güçlü bir blokajcı.' },
        { move: '34...Bd7', text: 'Motor: +2.62. 35.Qe2 Ra3 36.Rb1 ile pasif.' },
      ],
    },
    '35w': {
      text: 'Vezir e2’ye gelir; e-hattından Qe8 ve Qe6+ girişleri tehdit edilir.',
      amac: 'Rubinstein’ın notlarına göre iki amaç: atın d6’ya sıçramasını hazırlamak ve h3-h4, g4-g5 ile Siyah veziri yakalamakla tehdit etmek.',
      neden: 'Motorun ilk tercihi (Motor: +4.11). 35.h4 (+3.62) da güçlü ama Qe2 hem şah kanadında hem e-hattında aynı anda tehdit oluşturur.',
      diger: [
        { move: '35.h4', text: 'Motor: +3.62. 35...Ra3 36.Bc2 Ra2 37.Nxd6 ile benzer.' },
        { move: '35.Bc2', text: 'Motor: +2.77. 35...Bc8 36.Qe2 Bd7 ile Siyah fili geri döndürür.' },
      ],
    },
    '35b': {
      text: 'At d7’ye gelir; e5’e gitmek istiyor ama f8 karesinden ayrılır.',
      amac: 'Atı e5’e getirip merkezi bloke etmek.',
      neden: 'Rubinstein, Siyahın önceki hamlenin önemini küçümsediğini ve aktif bir savunmanın önerilmesinin zor olduğunu yazar. Motor: +5.64; 35...Ra8 (+4.09) ya da 35...Bc8 (+4.15) daha dirençliydi ama Siyahın durumu zaten çok zor.',
      diger: [
        { move: '35...Ra8', text: 'Motor: +4.09. 36.h4 Re8 37.Nxf6+ Qxf6 ile malzeme gider.' },
        { move: '35...Bc8', text: 'Motor: +4.15. 36.h4 Bxf5 37.gxf5 Ra7 ile fil bir piyona verilir ama vezir nefes alır.' },
      ],
    },
    '36w': {
      text: 'Bitirici darbe: 36.Nxd6! At d6 piyonunu alır.',
      amac: 'd6 piyonunu kaldırıp e-hattından girişi açmak; 36...Rxd6 37.Qe8+ ile Siyah şahını sıkıştırmak.',
      neden: 'At b7 filine de saldırır ve Rubinstein’ın 34. hamlede planladığı fikir şimdi çalışıyor çünkü c8 fili e8’i korumuyor. Motor 36.h4’ü (+6.01) daha güçlü görse de Nxd6 (+4.69) en net yol.',
      diger: [
        { move: '36.h4', text: 'Motor: +6.01. 36...Ne5 37.g5 ile vezir hapsolur.' },
        { move: '36.Bc2', text: 'Motor: +3.65. 36...Bc8 37.Nxd6 Rxd6 38.Qe8+ ile benzer.' },
      ],
    },
    '36b': {
      text: 'Siyah atı kaleyle alır.',
      amac: 'Taş kazanmak; Beyaz bir piyon karşılığında at vermiş gibi görünüyor.',
      neden: 'Ama sıradaki şah her şeyi değiştirir. Motor: +6.86; 36...Ne5 37.Nxb7 (+5.28) bir taş kaybettirir ama daha uzun direnirdi.',
      diger: [
        { move: '36...Ne5', text: 'Motor: +5.28. 37.Nxb7 g6 38.fxg6 hxg6 ile Siyah bir taş geride.' },
        { move: '36...Nf8', text: 'Motor: +6.11. 37.Qe8 Ra8 38.Qf7+ Kh8 ile Siyah sıkışır.' },
      ],
    },
    '37w': {
      text: 'Vezir e8’den şah çeker.',
      amac: 'Siyahı f8’e at koymaya zorlamak ve e-hattından girmek.',
      neden: 'Tek kazanan hamle: 37.h4? 37...Nf8 ile Siyah toparlanır (Motor: −0.43), 37.Qe8+ ise +5.84. Bu, 19.f4 ile açılan e-hattının meyvesidir.',
      diger: [
        { move: '37.h4', text: 'Motor: −0.43. 37...Nf8 38.Qf2 Rd8 ile Siyah bir taş fazla.' },
      ],
    },
    '37b': {
      text: 'At f8’e dönmek zorundadır.',
      amac: 'Şahı kapatmak.',
      neden: 'Tek yasal hamle: f7 ve f8 kareleri vezirin kontrolünde, h7’de kendi piyonu var; şahı yalnızca at araya girerek kapatabilir (Motor: +5.89). At f8’de bağlı kalır ve 38.Re7 ile baskı artar.',
    },
    '38w': {
      text: 'Kale yedinci yataya girer.',
      amac: 'Qf7+ ve Qxf8+ tehditleriyle Siyah şahını kapatmak.',
      neden: 'Motorun tek kazanan hamlesi (+5.77): 38.Qb8? 38...Rd7 (−1.09), 38.Re3? (−1.35) Siyahı kurtarırdı.',
      diger: [
        { move: '38.Qb8', text: 'Motor: −1.09. 38...Rd7 ile Siyah toparlanır.' },
        { move: '38.Re3', text: 'Motor: −1.35. Kale geri çekilir, tehdit kaybolur.' },
      ],
    },
    '38b': {
      text: '38...g6 ile f7’ye girişi azaltmaya çalışır.',
      amac: 'Qf7+ sonrası şahı h8’e kaçırmak ve g7’yi savunmak.',
      neden: 'Siyah zaten kaybetmiş durumda: 38...Rd8 39.Qxd8 (+5.57) ya da 38...Bxd5 (+5.89) benzer. g6 +5.84–6.22.',
      diger: [
        { move: '38...Rd8', text: 'Motor: +5.57. 39.Qxd8 g5 40.fxg6 ile Beyaz bir kale fazla.' },
        { move: '38...Qe3+', text: 'Motor: +7.01. 39.Rxe3 Rd7 ile vezir gider.' },
      ],
    },
    '39w': {
      text: 'Vezir f7’den şah çeker.',
      amac: 'Şahı köşeye sürmek ve Re8 ile f8 atını bağlamak.',
      neden: 'Motorun ilk tercihi (+6.57); 39.fxg6 (+5.91) de kazanır ama daha yavaş.',
      diger: [
        { move: '39.fxg6', text: 'Motor: +5.91. 39...hxg6 40.Qf7+ Kh8 41.Re8 ile benzer.' },
      ],
    },
    '39b': {
      text: 'Şah köşeye gider.',
      amac: 'Şahtan kaçmak.',
      neden: 'Tek yasal hamle (Motor: +6.19).',
    },
    '40w': {
      text: 'Kale e8’e gelir ve f8 atını bağlar.',
      amac: 'Rxf8+ ve Qxf8+ tehditleriyle şahı mat etmek ya da malzeme kazanmak.',
      neden: 'Motorun ilk tercihi (+6.62). 40.g5? (+1.96) 40...Bxd5 ile Siyaha karşı oyun verirdi.',
      diger: [
        { move: '40.fxg6', text: 'Motor: +5.88. 40...hxg6 41.Re8 Rd8 ile benzer.' },
        { move: '40.g5', text: 'Motor: +1.96. 40...Bxd5 ile Siyah karşı oyun bulur.' },
      ],
    },
    '40b': {
      text: 'Kale d8 ile savunur.',
      amac: 'f8 atını desteklemek.',
      neden: 'Motor 40...Rd8 ve 40...Bxd5’i eşit görüyor (+7.35). 40...Qe3+? 41.Rxe3 ile mat gelir (8 hamlede mat).',
      diger: [
        { move: '40...Bxd5', text: 'Motor: +7.38. 41.Rxf8+ Qxf8 42.Qxf8+ ile malzeme gider.' },
        { move: '40...Qe3+', text: 'Motor: 8 hamlede mat. 41.Rxe3 ile vezir gider.' },
      ],
    },
    '41w': {
      text: 'Vezir f6 piyonunu şahla alır.',
      amac: 'Şahı açmak ve sürekli şah imkânlarını önlemek.',
      neden: 'Rubinstein notlarında 41.Rxd8?? 41...Qe3+ ile sürekli şah olacağını yazar; motor bunu onaylıyor (Motor: 0.00). 41.Qxf6+ +7.16.',
      diger: [
        { move: '41.Rxd8', text: 'Hata: 41...Qe3+ 42.Kg2 Qd2+ ile sürekli şah (Motor: 0.00).' },
        { move: '41.Re2', text: 'Motor: +0.68. Kale e-hattında kalır ama tehdit kaybolur.' },
      ],
    },
    '41b': {
      text: 'Şah g8’e döner.',
      amac: 'Şahtan kaçmak.',
      neden: 'Motor 41...Kg8’i en iyi görüyor (+6.71); 41...Qg7 (+9.33) vezir kaybettirir.',
      diger: [
        { move: '41...Qg7', text: 'Motor: +9.33. 42.Qxd8 Kg8 43.f6 ile malzeme gider.' },
      ],
    },
    '42w': {
      text: 'Vezir e6’dan şah çekmeye devam eder.',
      amac: 'Şahı açık tutmak ve f6+ hazırlamak.',
      neden: 'Motorun ilk tercihi (+8.24); 42.Qxd8 (+7.52) da kazanır.',
      diger: [
        { move: '42.Qxd8', text: 'Motor: +7.52. 42...gxf5 43.Bxf5 ile Beyaz bir kale fazla.' },
        { move: '42.fxg6', text: 'Motor: +5.96. Daha yavaş.' },
      ],
    },
    '42b': {
      text: 'Şah g7’ye çıkar.',
      amac: 'Şahtan kaçmak.',
      neden: 'Motor 42...Kg7 ve 42...Kh8’i eşit görüyor (+8.2).',
      diger: [
        { move: '42...Kh8', text: 'Motor: +8.17. 43.Qf6+ Kg8 44.Qxd8 ile benzer.' },
      ],
    },
    '43w': {
      text: '43.f6+ ile şah açık kalır ve mat yaklaşır. Nimzowitsch terk etti.',
      amac: 'Şahı tamamen açmak ve mat ağı örmek.',
      neden: 'Motor 43.f6+ sonrası 8 hamlede mat buluyor; 43.Qe7+ (+8.88) da kazanır.',
      diger: [
        { move: '43.Qe7+', text: 'Motor: +8.88. 43...Kg8 44.Qxd8 ile Beyaz bir kale fazla.' },
      ],
    },
  },
  qa: [
    { q: 'Siyah neden 7...e5 oynadı, 7...d5 değil?', a: 'Nimzowitsch merkezi kapatıp Beyazın fillerini piyon duvarının arkasında bırakmak istedi. Rubinstein bu kararı stratejik bir hata sayar; motor da 7...d5 ile eşitliğe yakın (+0.3), 7...e5 ile belirgin Beyaz üstünlüğü (+1.15) görüyor. Kapalı merkezde Beyazın f-piyonu kırılması için bir kaldıracı var, Siyahın yok.' },
    { q: 'Beyaz neden 13.f4 oynamadı?', a: 'Rubinstein’a göre erkendi: 13...exf4 14.exf4 Ng4! ile at h2’yi tehdit eder ve Siyah taşlarını canlandırır. Motor bu hatta Beyazın avantajını +0.5’e düşürüyor. Önce f3, h3 ve Kh2 ile bu taktiği ortadan kaldırmak gerekiyordu.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Kapalı merkezde Beyazın f-piyonu kırılması (19.f4) e-hattını açtı ve fil çiftini canlandırdı. Siyahın ise benzer bir kaldıracı yoktu. Sonra 28.Bxf6 ile e4’ün bekçisi gitti, 29.Ne4 ile at merkeze yerleşti ve Siyah vezir h6’ya itildi. 30.f5 ve 32.g4 ile Beyaz şah kanadında alan kazandı.' },
    { q: '22.Bb2 neden hemen oynanmadı?', a: 'Rubinstein’ın notlarına göre 22.Bb2?? 22...Ng4+! 23.hxg4 Qh4+ 24.Kg1 Qxg3 ile Siyah karşı oyun alırdı. Motor bunu onaylıyor (+0.27). 22.Qf2 h4 karesini kapattı ve fil ancak bundan sonra b2’ye geldi.' },
    { q: 'Rubinstein neden 28.Bxf6 ile fil çiftinden vazgeçti?', a: 'Rubinstein notlarında amacın Siyah veziri d6’yı savunmak için kötü bir kareye itmek olduğunu yazar. 28...Qxf6 29.Ne4 sonrası vezirin tek iyi karesi h6’ydı; orada 32.g4 ile hapsedilme tehlikesi doğdu. Motor 28.Bb1’i biraz daha iyi buluyor (+1.9’a karşı +1.7) ama plan net.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'Açılışta 7...d5 ile eşitliğe yakın bir oyun alabilirdi. Ortaoyunda 10...b5 ve 11...b5 ile vezir kanadında hızlı karşı oyun motorun tercihiydi. Son kritik an 34. hamleydi: 34...Nd7 (+1.15) ile savunma devam ederdi, 34...Bb7? sonrası Beyaz +3.5’e çıktı.' },
    { q: '34.Re1 sonrası 34...Nd7 35.Nxd6 gerçekten güçlü müydü?', a: 'Rubinstein notlarında 34...Nd7’ye 35.Nxd6! ile cevap vereceğini yazar. Ama motor buna katılmıyor: 35...Rxd6 36.Re8+ Kf7 sonrası c8 fili e-hattını tuttuğu için Beyazın avantajı +0.55’e düşer. Kombinezon ancak 34...Bb7 ile fil c8’den ayrıldıktan sonra çalıştı.' },
    { q: '41. hamlede neden 41.Rxd8 değil 41.Qxf6+?', a: 'Rubinstein notlarında 41.Rxd8?? 41...Qe3+ ile sürekli şah olacağını yazar. Motor bunu onaylıyor (0.00): 42.Kg2 Qd2+ ile şah kaçamaz. 41.Qxf6+ ise şahı açar ve +7’lik bir avantajla kazanır.' },
  ],
  sources: [
    { title: 'Lichess çalışması: Rubinstein – Nimzowitsch, Berlin 1928 (Rubinstein ve Razuvaev notları)', url: 'https://lichess.org/study/embed/9kND28Fa/pXSP07hP' },
    { title: 'Wikipedia: Nimzo-Indian Defence', url: 'https://en.wikipedia.org/wiki/Nimzo-Indian_Defence' },
    { title: 'Chess.com: Nimzo-Indian Defense, Classical Variation', url: 'https://www.chess.com/openings/Nimzo-Indian-Defense-Classical-Variation' },
    { title: '365Chess: Berlin Tageblatt 1928', url: 'https://www.365chess.com/tournaments/Berlin_Tageblatt_1928/27966' },
  ],
  exercises: [
    { id: 'rn-1', kind: 'tekrar', plan: true, title: 'f5 ile alan',
      source: 'Rubinstein – Nimzowitsch, Berlin 1928 (30. hamle)',
      fen: '5nk1/r2b1ppp/3p3q/2pP4/1pP1NP2/1P1B3P/5QPK/4R3 w - - 2 30',
      prompt: 'Beyazın atı e4’e yerleşti. Siyahın d7 fili c8-h3 çaprazından f5 karesine bakıyor. Rubinstein’ın alan kazanan piyon hamlesi hangisi?',
      hint: 'f-piyonu bir kare daha ilerleyebilir.',
      line: ['f5'],
      accept: { 0: ['Ng5'] },
      explanation: '**30.f5!** Piyon d7 filinin çaprazını keser, e6 karesini Beyaza verir ve e4 atı artık piyonla kovalanamaz. Motor 30.Ng5’i de oynanabilir buluyor ama daha zayıf (f5 +1.8, Ng5 +1.1).',
      link: 'Kapalı merkezde f-piyonu hem alan kazandırır hem de rakip filin önünü keser.' },
    { id: 'rn-2', kind: 'tekrar', plan: false, title: 'Sekizinci yataydan giriş',
      source: 'Rubinstein – Nimzowitsch, Berlin 1928 (37. hamle)',
      fen: '6k1/1b1n2pp/3r1p1q/2pP1P2/1pP3P1/1P1B2KP/4Q3/4R3 w - - 0 37',
      prompt: 'Rubinstein 36.Nxd6 ile bir at verdi ve Siyah kaleyle aldı. Şimdi vezir ve kale Siyah şahına nasıl girer? İki hamlelik devamı bulun.',
      hint: 'Önce şah çekin; at f8’e dönmek zorunda kalacak.',
      line: ['Qe8+', 'Nf8', 'Re7'],
      explanation: '**37.Qe8+ Nf8 38.Re7!** Vezir sekizinci yatayda f8 atını bağlar, kale yedinci yataya girer. Qf7+ ve Qxf8+ tehditleri savunulamaz. Motor: 37.Qe8+ +7.3, başka hamleler eşitliğe yakın; 38.Re7 +11.7.',
      link: 'e-hattının açılması (19.f4) bu anı hazırladı: kale e-hattından yedinci yataya girdi.' },
    { id: 'rn-3', kind: 'transfer', plan: false, title: 'Blokajı at fedasıyla kırmak',
      source: 'Alekhine – Nimzowitsch, New York 1927 (22. hamle)',
      fen: '2k1r3/p2nrp2/1pb1q1pp/2p1p2n/2P5/2QNPPB1/PPBR2PP/2KR4 w - - 14 22',
      prompt: 'Yine 4.Qc2 sistemi ve yine Nimzowitsch. Siyahın piyonları c5 ve e5’te kara karelere kurulmuş, taşları blokaj yapıyor. Alekhine bu yapıyı nasıl kırdı?',
      hint: 'c5 piyonu atla alınabilir; d-hattındaki kaleleri düşünün.',
      line: ['Nxc5'],
      explanation: '**22.Nxc5!** 22...Nxc5 23.Rd6! sonrası d-hattındaki kaleler vezire saldırır; Siyah veziri kaleyle değişmek zorunda kalır. Motor: Nxc5 +3.1, sonraki en iyi hamle +2.0.',
      link: 'Rubinstein f4 piyon kırılmasıyla, Alekhine at fedasıyla aynı amaca ulaştı: Nimzowitsch’in kara karelerdeki piyon duvarını açmak.' },
    { id: 'rn-4', kind: 'transfer', plan: false, title: 'f4 ile merkez atı kovalamak',
      source: 'Mikenas – Tal, SSCB Şampiyonası, Erivan 1962 (16. hamle)',
      fen: 'r4rk1/pb1pqppp/4p3/2p1n3/Q1P5/2N1P3/PP2BPPP/R2R2K1 w - - 0 16',
      prompt: 'Siyahın atı e5’te merkeze yerleşmiş ve c4 piyonuna, d3 ile f3 karelerine bakıyor. Beyaz bu atı nasıl yerinden eder?',
      hint: 'Atı piyonla kovalayın; f-piyonu hâlâ yerinde.',
      line: ['f4'],
      explanation: '**16.f4!** At e5’ten çekilmek zorunda kalır ve Beyaz merkezde alan kazanır. Motor: f4 +0.4, sonraki en iyi hamle 0.0.',
      link: 'Rubinstein’ın 19.f4 hamlesi gibi: f-piyonu merkezdeki kara kare blokajını sorgular.' },
  ],
};
