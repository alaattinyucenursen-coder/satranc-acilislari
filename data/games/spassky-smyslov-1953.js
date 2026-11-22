// Spasski – Smislov, Bükreş 1953. Kaynak: PgnMentor (Smyslov.pgn).
export default {
  id: 'spassky-smyslov-1953',
  theme: 'Leningrad sistemi: d5 alanı ve e5 kırılması',
  white: 'Boris Spasski', black: 'Vasili Smislov',
  whiteShort: 'Spasski', blackShort: 'Smislov',
  event: 'Bükreş turnuvası', site: 'Bükreş', year: 1953, eco: 'E31',
  variation: 'Nimzo-Hint Savunması, Leningrad (4.Bg5) sistemi', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 c5 6. d5 exd5 7. cxd5 d6 8. e3 Nbd7 9. Bb5 O-O 10. Ne2 Ne5 11. O-O Ng6 12. Bg3 Nh5 13. Bd3 Nxg3 14. Nxg3 Ne5 15. Be2 Bxc3 16. bxc3 Qh4 17. f4 Ng4 18. Bxg4 Bxg4 19. Qa4 Bc8 20. e4 Qg4 21. Qc2 h5 22. Rf2 b5 23. e5 h4 24. Nf1 Bf5 25. Qd2 dxe5 26. fxe5 Bg6 27. Re1 h3 28. d6 Be4 29. Ne3 Qe6 30. Rf4 Bxg2 31. Nf5 Rfe8 32. Re3 Rad8 33. Nxg7 Rxd6 34. Nxe6 1-0`,

  summary: 'On altı yaşındaki Spasski’nin ilk uluslararası turnuvasında, bir yıl sonra dünya şampiyonluğu maçı oynayacak olan Smislov’u yendiği ünlü oyun. Bükreş 1953’ü Spasski’nin hocası Aleksandr Tolush kazandı; Petrosyan ikinci, Smislov üçüncü oldu, Spasski ise 4–6. sırayı paylaşıp Uluslararası Usta unvanını aldı. Spasski, hocası Vladimir Zak’tan öğrendiği ve ömür boyu sadık kalacağı **Leningrad sistemini (4.Bg5)** oynadı. 6.d5 ve 6...exd5 7.cxd5 d6 ile oyun bir tür **Benoni yapısına** döndü; Siyahın b4’teki fili ise bu yapıda yersiz kaldı. Smislov iki atını g6 ve h5 üzerinden dolaştırıp Beyazın kara kareli filini aldı, ama 15...Bxc3 ile fil çiftini geri verince Beyaz **f4-e4** ile merkezi genişletti. Oyun 25. hamleye kadar dengeye yakındı (Motor: +0.6). Kırılma noktası **25...dxe5?** oldu: Siyah merkezi kendisi açtı, Beyazın d5 piyonu e5 piyonunun desteğinde **geçer piyon** haline geldi (Motor: +1.5). Ardından Siyah ...h4-h3 ve ...Bxg2 ile şah kanadında karşı oyun aradı, fakat d6’ya ilerleyen piyon Siyahın kalelerini bağladı, at f5’e yerleşti ve **33.Nxg7!** çatalı veziri kazandı.',
  intro: 'Nimzo-Hint’te Beyaz genellikle 4.e3 (Rubinstein), 4.Qc2 (Klasik) ya da 4.a3 (Sämisch) oynar. 4.Bg5 daha nadir ve daha keskin bir seçimdir: fil f6 atını bağlar, Siyahın e4 karesi üzerindeki kontrolünü azaltır ve çoğu zaman d4-d5 ile alan kazanmaya hazırlanır. Sistemin adı, teorisini geliştiren Leningradlı oyunculardan gelir; Spasski en önemli savunucusuydu. Siyahın ana cevapları 4...h6 5.Bh4 c5 6.d5 sonrasında **6...d6** (ve ...Bxc3+, ...e5 ile kapalı yapı), **6...b5** gambiti ya da bu oyundaki gibi **6...exd5** ile Benoni yapısıdır. Benoni yapısında Siyahın normalde g7’de duran fili burada b4’tedir ve er geç c3 atıyla değişilmek zorunda kalır; Beyaz ise h4-g3 filiyle Siyahın kara karelerine baskı yapar. Oyunu izlerken şunlara bakın: d5 piyonu Siyahın taşlarını nasıl kısıtlıyor, Beyaz e5 kırılmasını ne zaman yapıyor ve Siyahın şah kanadı saldırısı neden geç kalıyor?',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**d5** ile merkezde alan kazanmak: c6 ve e6 karelerini kontrol etmek, Siyahın b8 atına ve c8 filine doğal kare bırakmamak.',
      'Atı **e2**’ye geliştirmek: c3 atını korumak (…Bxc3+ ile piyonların bozulmasını önlemek) ve atı g3 üzerinden f5’e yönlendirmek.',
      'Fil çiftini kaybettikten sonra merkez piyonlarıyla telafi aramak: **f4** ile e5’teki atı kovmak, **e4** ile merkezi genişletmek.',
      '**e4-e5 kırılmasıyla** d6 piyonunu sorgulamak; değişim sonrası d5 piyonunu destekli **geçer piyon** yapmak.',
      'Geçer piyonu **d6**’ya kadar ilerletmek ve Siyahın kalelerini, vezirini onun önünde bağlı tutmak.',
      'Atı **Nf1-e3-f5** yoluyla merkeze getirmek; f5’ten d6’yı desteklemek ve e7/g7 karelerine saldırmak.',
      'Kaleleri **Rf4, Re3** ile üçüncü-dördüncü yataylardan şah kanadına kaydırıp g7’yi hedef almak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...c5 ve ...exd5 ile Benoni yapısına geçmek, ...d6 ile merkezi kara karelerde tutmak.',
      'd7 atını **e5**’e, oradan g6’ya getirip Beyazın kara kareli filine saldırmak; ...Nh5 ile bu fili almak.',
      'Fil çiftini korumak (15...f5 gibi hamlelerle merkezi kilitlemek) — Smislov bunun yerine 15...Bxc3 ile fili verdi.',
      'Vezir kanadında 3’e 2 çoğunluğu (**a7-b7-c5** – a2-c3) ...b5-b4 ile harekete geçirmek.',
      '...Qh4, ...h5-h4-h3 ile Beyazın g3 atını kovmak ve g2’ye baskı kurmak.',
      'd6 piyonunu yerinde tutmak: Beyazın d-piyonu, önünde d6 piyonu durdukça geçer değildir. 25...dxe5? bu ilkeyi bozdu.',
    ] },
  },
  critical: [
    { move: '6w', title: 'd5: Leningrad’ın ana fikri', text: 'Beyaz 6.d5 ile merkezde alan alır ve c5 piyonunu yapıya kilitler. Motor sakin 6.e3’ü biraz daha iyi buluyor (Motor: +0.2’ye karşı −0.2), ama d5 oyunu Spasski’nin sevdiği yapıya götürür: Siyah ya 6...d6 ile kapalı bir yapıya, ya 6...b5 gambitine, ya da bu oyundaki 6...exd5 ile Benoni yapısına girmek zorunda kalır. Benoni’de Siyahın fili g7 yerine b4’te durur ve değişilmeyi bekler.' },
    { move: '15b', title: '15...Bxc3?!: fil çifti geri veriliyor', text: 'Smislov 13...Nxg3 ile fil çiftini kazanmıştı, ama iki hamle sonra b4 filini c3 atıyla değişti. Beyazın c-piyonları ikiye katlandı, fakat c3 piyonu d4 karesini korur ve Beyaz f4-e4 ile merkezi rahatça kurar. Motor 15...f5’i öneriyor (Motor: +0.0): Siyah hem fil çiftini korur hem de e4 ilerleyişini engeller. Oyundan sonra değerlendirme +0.4’e çıktı.' },
    { move: '17w', title: '17.f4: merkez harekete geçiyor', text: 'Beyaz e5’teki atı kovar ve f4-e4 piyon ikilisini kurmaya başlar (Motor: +0.8). 17...Ng4 ile at h2 ve e3’e baskı yapar; 18.Bxg4 zorunludur, çünkü 18.Rf3? Qxh2+ (Motor: −4.0) ya da 18.h3? Nxe3 (Motor: −4.7) Beyazı kaybettirir. Değişimlerden sonra Beyazın atı Siyahın filine karşı kalır, ama merkezde piyon üstünlüğü ve alan Beyazdadır.' },
    { move: '23w', title: '23.e5: kırılma', text: 'Beyaz d6 piyonuna saldırır. Motor önce 23.Rf3 ya da 23.Re1 ile hazırlığı biraz daha iyi buluyor (+0.8’e karşı +0.6), ama e5 tematik hamledir: Siyah dxe5 oynarsa d5 piyonu geçer olur, oynamazsa e5 piyonu d6’yı ve Siyahın merkezini sürekli baskı altında tutar.' },
    { move: '25b', title: '25...dxe5?: oyunun kırılma noktası', text: 'Siyah merkezde değişti ve Beyazın d-piyonunu serbest bıraktı. 26.fxe5 sonrası d5 piyonu artık geçerdir ve e5 piyonu d6 karesini korur. Motor 25...Qg6, 25...Rfe8 ya da 25...Rad8 ile beklemeyi öneriyor (Motor: +0.6 civarı); oyundaki hamleden sonra değerlendirme +1.5’e fırladı. Siyahın sağlam d6 piyonu, Beyazın d-piyonunu durduran tek engeldi.' },
    { move: '28w', title: '28.d6: geçer piyon ilerliyor', text: 'Piyon d6’ya ulaşır; Siyahın kaleleri ve veziri bu piyonu durdurmakla meşgul kalır. Motor burada 28.Ne3!’ü daha güçlü buluyor (Motor: +2.5): at önce g4’teki vezire saldırır ve d5/f5 karelerine gelir, piyon sonra ilerler. Oyundaki 28.d6 de avantajı korur (Motor: +1.5).' },
    { move: '31w', title: '31.Nf5: at hedefe yerleşiyor', text: 'At f5’te d6 piyonunu korur, e7 ve g7 karelerine bakar ve Ne7+ çatallarını tehdit eder (Motor: +3.3). Siyah g2’de piyon almış ve Beyaz şahının yanına filini sokmuştur, ama taşları dağınıktır. 31...Rfe8? (Motor: +4.9) ve 32...Rad8? (Motor: +6.3) savunmayı daha da zayıflattı.' },
    { move: '33w', title: '33.Nxg7!: çatal', text: 'At g7’yi alır ve hem e6’daki vezire hem e8’deki kaleye saldırır. 33...Kxg7 34.Rg3+ Qg6 35.Rxf7+! Kxf7 36.Qf4+ ve 37.Rxg6+ ile Siyahın veziri yine düşer (Motor: +6.6). Oyunda 33...Rxd6 34.Nxe6 geldi; vezir gitti ve Smislov terk etti.' },
  ],
  lessons: [
    'Leningrad sisteminde **d5** ile kazanılan alan, Siyahın atlarını kenar karelere (g6, h5) ve fillerini pasif karelere iter.',
    'Benoni yapısında Siyahın kara kareli fili g7’de değilse, Siyah kara karelerde zayıf kalır; b4’teki fil eninde sonunda c3 atıyla değişilmek zorunda kalır.',
    'Fil çiftini kazanmak yetmez, onu korumak gerekir: 15...Bxc3 ile Smislov kazandığı avantajı iki hamlede geri verdi.',
    'Fil çiftini veren taraf, **merkezde piyon gücü ve alanla** telafi aramalıdır: Beyazın f4-e4-e5 piyonları Siyahın fillerini etkisiz bıraktı.',
    'Rakibin önündeki blokaj piyonunu (d6) kendi elinizle değişmeyin: 25...dxe5? Beyazın d-piyonunu geçer piyona çevirdi.',
    'Destekli bir geçer piyon rakibin taşlarını bağlar; bağlanan taşlar şah kanadını savunamaz ve **Nxg7** gibi taktikler doğar.',
    'Rakip kanat saldırısına geçtiğinde (…h4-h3, …Bxg2) merkezdeki tehditleri sürdürmek çoğu zaman en iyi savunmadır.',
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkezi vezir piyonuyla açar ve e5, c5 karelerini kontrol eder.',
      amac: 'Merkezde sağlam bir piyon kurmak, ardından c4 ile genişlemek.',
      neden: 'Spasski kariyeri boyunca hem 1.e4 hem 1.d4 oynadı; Leningrad sistemine ulaşmak için 1.d4 gerekir. Motor 1.e4, 1.d4 ve 1.Nf3’ü hemen hemen eşit görür.',
      diger: [
        { move: '1.e4', text: 'Spasski’nin özellikle ileriki yıllarda sık seçtiği açık oyun (Motor: +0.3); Nimzo-Hint’e hiç ulaşılmaz.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); Siyaha Nimzo-Hint yerine başka sistemler seçme imkânı da verir.' },
      ],
    },
    '1b': {
      text: '1...Nf6 ile Siyah atını geliştirir ve e4 karesini kontrol eder.',
      amac: 'Hint savunmalarına (Nimzo-Hint, Vezir-Hint, Kral-Hint) kapıyı açık tutmak.',
      neden: 'Smislov hem 1...d5 hem 1...Nf6 oynayan çok yönlü bir oyuncuydu. 1...Nf6 Beyazın e4 ilerlemesini hemen engeller ve merkezi taşlarla kontrol etme fikrine dayanır.',
      diger: [
        { move: '1...d5', text: 'Klasik Vezir Gambiti yolu (Motor: +0.3); merkezi doğrudan piyonla tutar.' },
        { move: '1...c6', text: 'Slav yapısına hazırlık (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: '2.c4 ile Beyaz d5 karesine ikinci kez baskı yapar ve vezir kanadında alan alır.',
      amac: 'Merkezi piyonlarla genişletmek ve ileride d4-d5 ilerlemesine zemin hazırlamak.',
      neden: 'Ana hat budur. 2.c4 olmadan Leningrad sistemindeki d5 alan kazanma planı mümkün olmaz; c4 piyonu daha sonra cxd5 ile merkeze girecek.',
      diger: [
        { move: '2.Nf3', text: 'Motor bunu biraz daha esnek görür (Motor: +0.3), ama 3.Nc3 ve 4.Bg5 sırası farklılaşır.' },
        { move: '2.Bg5', text: 'Trompowsky (Motor: +0.1 civarı); fil yine g5’e gelir ama c4 olmadan Nimzo yapısı oluşmaz.' },
      ],
    },
    '2b': {
      text: '2...e6, f8 filinin yolunu açar ve d5 karesini korur.',
      amac: '...Bb4 ile Nimzo-Hint’e ya da ...b6 ile Vezir-Hint’e hazırlanmak.',
      neden: 'Smislov burada Kral-Hint (2...g6) yerine daha klasik e6 yapısını seçti. e6 piyonu ileride ...c5 ve ...exd5 ile Benoni yapısına geçişi de mümkün kılar.',
      diger: [
        { move: '2...g6', text: 'Kral-Hint ya da Grünfeld (Motor: +0.4); fil g7’ye gider.' },
        { move: '2...c5', text: 'Doğrudan Benoni; 3.d5 ile Beyaz alan alır.' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile Beyaz atını geliştirir ve e4 ilerlemesini hazırlar.',
      amac: 'e2-e4 ile büyük merkez kurmak; d5 karesine üçüncü kez baskı yapmak.',
      neden: '3.Nc3 Siyaha Nimzo-Hint’e girme izni verir. Spasski bundan çekinmiyordu, çünkü Nimzo’ya karşı 4.Bg5 hazırlığı vardı. Motor 3.g3 (Katalan) ya da 3.Nf3’ü biraz daha üstün sayar.',
      diger: [
        { move: '3.Nf3', text: 'Nimzo-Hint’ten kaçınır; Siyah genellikle 3...b6 (Vezir-Hint) ya da 3...d5 oynar (Motor: +0.4).' },
        { move: '3.g3', text: 'Katalan yapısı (Motor: +0.4); fil g2’den uzun köşegene bakar.' },
      ],
    },
    '3b': {
      text: '3...Bb4 ile Nimzo-Hint Savunması: fil c3 atını bağlar.',
      amac: 'Beyazın e4 ilerlemesini engellemek, gerekirse ...Bxc3 ile Beyazın piyon yapısını bozmak.',
      neden: 'Nimzo-Hint, Siyahın en sağlam ve esnek savunmalarından biridir: merkezi piyonla değil taşlarla kontrol eder. Bedeli, ileride fil çiftini verme ihtimalidir — bu oyunda tam olarak bu tema belirleyici oldu.',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Reddi’ne geçiş (Motor: +0.3); 4.Bg5 sonrasında klasik hatlar.' },
        { move: '3...c5', text: 'Benoni’ye yakın yapılar; 4.d5 ile Beyaz alan alır.' },
      ],
    },
    '4w': {
      text: '4.Bg5, Leningrad sistemi: fil f6 atını bağlar.',
      amac: 'Bağ yoluyla Siyahın e4 ve d5 üzerindeki kontrolünü azaltmak, ardından d5 ile alan kazanmak.',
      neden: 'Chess.com’daki Spasski ve Leningrad Varyantı yazısına göre Spasski bu sistemi hocası Vladimir Zak’tan öğrendi ve uzun kariyerinde onunla çok yüksek skor yaptı. Sistem teorik olarak Nimzo’yu zorlamaz (Motor: 0.0, 4.Qc2 ise +0.3), ama Siyahı alışık olmadığı, dengesiz yapılara sokar. Wikipedia’nın da belirttiği gibi adı, teorisini geliştiren Leningradlı oyunculardan gelir.',
      diger: [
        { move: '4.e3', text: 'Rubinstein sistemi (Motor: +0.2); Beyaz sağlam gelişir, Bd3 ve Nge2/Nf3 ile devam eder.' },
        { move: '4.Qc2', text: 'Klasik sistem (Motor: +0.3); Beyaz ...Bxc3’ü vezirle almaya hazırlanır ve piyon yapısı bozulmaz.' },
        { move: '4.Nf3', text: 'Esnek gelişim (Motor: +0.2); Vezir-Hint ve Ragozin yapılarına geçiş olabilir.' },
      ],
    },
    '4b': {
      text: '4...h6 ile Siyah fili hemen sorgular.',
      amac: 'Beyazı ya değişime (Bxf6) ya da h4’e çekilmeye zorlamak; ileride ...g5 ile bağı tamamen kırma hakkı kazanmak.',
      neden: 'Fil h4’e çekilirse ...g5 her zaman bir seçenek olarak kalır. Motor 4...c5’i biraz daha iyi görür (Motor: −0.05), çünkü Beyazın 5.d5’ine hemen karşı çıkar; 4...h6 ise önce filin niyetini sorar.',
      diger: [
        { move: '4...c5', text: 'Emms’in Nimzo kitabında ayrıca incelenen hat: 5.d5 d6 6.e3 sonrasında Siyah ...Bxc3+ ve ...e5 ya da ...Qe7 ile oynar (Motor: −0.05).' },
        { move: '4...Bxc3+', text: 'Hemen fil çiftini vermek (Motor: +0.2); Beyazın c-piyonları ikiye katlanır ama Beyazın iki fili kalır.' },
      ],
    },
    '5w': {
      text: '5.Bh4 ile fil bağı korur.',
      amac: 'f6 atı üzerindeki baskıyı sürdürmek ve kara kareli fili oyunda tutmak.',
      neden: '5.Bxf6 Qxf6 sonrası Siyahın hem fil çifti hem gelişme rahatlığı olur. 5.Bh4, Leningrad sisteminin karakterini korur; bedeli, ...g5 ile filin g3’e itilebilmesidir.',
      diger: [
        { move: '5.Bxf6', text: '5...Qxf6 sonrası Siyah rahat gelişir ve iki fili olur (Motor: eşit civarı).' },
        { move: '5.Bd2', text: 'Geri çekilme (Motor: 0.0); bağ biter ve fil pasifleşir.' },
      ],
    },
    '5b': {
      text: '5...c5 ile Siyah d4 piyonuna saldırır.',
      amac: 'Beyazı karar vermeye zorlamak: d5 ile alan mı alacak, yoksa e3 ile merkezi mi koruyacak?',
      neden: 'Nimzo-Hint’te ...c5 klasik merkez karşı darbesidir. Bağlı at nedeniyle Siyah merkeze piyonla baskı yapmak ister. Motor da 5...c5’i ilk sırada görür (Motor: +0.1).',
      diger: [
        { move: '5...b6', text: 'Vezir-Hint tarzı kurulum (Motor: +0.1); fil b7’den e4’e bakar.' },
        { move: '5...g5', text: 'Bağı hemen kırmak (Motor: +0.2); 6.Bg3 Ne4 ile keskin oyun, ama şah kanadı zayıflar.' },
      ],
    },
    '6w': {
      text: '6.d5 ile Beyaz merkezde alan kazanır. Leningrad sisteminin ana fikri budur.',
      amac: 'c6 ve e6 karelerini kontrol etmek, Siyahın b8 atına c6’yı kapatmak ve c5 piyonunu yapıya kilitlemek.',
      neden: 'd5 sonrası Siyahın b4’teki fili yalnız kalır: Benoni yapısında fil g7’de olmalıdır. Motor sakin 6.e3’ü biraz daha iyi buluyor (Motor: +0.2, 6.d5 için −0.2), ama Spasski net bir yapı ve plan istiyordu.',
      diger: [
        { move: '6.e3', text: 'Merkezi korur (Motor: +0.2); 6...cxd4 7.exd4 Nc6 ile izole piyonlu yapılar çıkabilir.' },
        { move: '6.Rc1', text: 'c3’ü önceden korumak (Motor: −0.3); 6...cxd4 7.Qxd4 g5 ile Siyah rahatlar.' },
      ],
    },
    '6b': {
      text: '6...exd5 ile Siyah merkezde değişir ve Benoni yapısına girer.',
      amac: 'e-hattını açmak ve Beyazın d5 piyonunu bir hedef haline getirmek.',
      neden: 'Wikipedia’ya göre ana hat 6...d6 7.e3 Bxc3+ 8.bxc3 e5 ile kapalı yapıdır; 1970’lerde 6...b5 gambiti de popüler oldu. Smislov açık oyunu seçti. Chess.com yazısı bu oyunun tipik bir Benoni yapısına döndüğünü, kâğıt üzerinde Siyah için iyi göründüğünü ama b4’teki yersiz fil yüzünden sorunlar çıktığını belirtiyor. Motor 6...d6’yı biraz daha iyi görür (Motor: −0.3’e karşı −0.25).',
      diger: [
        { move: '6...d6', text: 'Ana hat (Motor: −0.3): 7.e3 Bxc3+ 8.bxc3 e5 ile Hübner varyantına benzeyen kapalı yapı; Beyazın fili zincirin dışında kalır.' },
        { move: '6...b5', text: 'Blumenfeld tarzı gambit; Tal’ın 1973’te Tallinn’de Spasski’yi bu hatla yenmesinden sonra popüler oldu.' },
        { move: '6...Bxc3+', text: 'Önce değişmek (Motor: −0.2); 7.bxc3 d6 ve ...Qe7, ...e5.' },
      ],
    },
    '7w': {
      text: '7.cxd5 ile Beyaz c-piyonuyla geri alır; d5 piyonu artık Beyazın en güçlü varlığıdır.',
      amac: 'Merkezde ileri bir piyon tutmak ve Siyahın e6/c6 karelerini kontrol etmek.',
      neden: 'Neredeyse zorunlu: 7.e3? dxc4 8.Bxc4 d5 sonrası Siyah merkezi ele geçirir (Motor: −0.9). Atla almak (Nxd5) ise ...Be7 ve ...d6 ile Siyaha rahat oyun verir.',
      diger: [
        { move: '7.e3', text: '7...dxc4 8.Bxc4 d5 ile Siyah piyonu korur ve merkezde üstün olur (Motor: −0.9).' },
        { move: '7.a3', text: '7...Bxc3+ 8.bxc3 dxc4 ile Siyah piyon kazanır (Motor: −1.7).' },
      ],
    },
    '7b': {
      text: '7...d6 ile Siyah merkezi sabitler ve d5 piyonunu durdurur.',
      amac: 'Beyazın d-piyonunu bloke etmek, e5 karesini atları için hazırlamak.',
      neden: 'Benoni’nin temel hamlesi: d6 piyonu durdukça Beyazın d-piyonu geçer piyon değildir. Bu fikir oyunun tamamı için önemlidir; 25...dxe5? tam da bu blokajı bozacak. Motor 7...d6’yı ilk sırada görür (Motor: +0.15).',
      diger: [
        { move: '7...O-O', text: 'Önce rok (Motor: +0.4); d6 yine gelecektir, ama Beyaz d6’yı engellemek için zaman kazanabilir.' },
        { move: '7...Ba5', text: 'Fili c3 bağında tutmak (Motor: +0.3); ama fil yapıdan daha da uzaklaşır.' },
      ],
    },
    '8w': {
      text: '8.e3 ile Beyaz f1 filinin yolunu açar ve d4 karesini korur.',
      amac: 'Fili gelişip rok yapmak, ardından atı e2 veya f3’e getirmek.',
      neden: 'Motor 8.e3’ü açık farkla en iyi görür (Motor: +0.15). 8.e4 olsaydı Beyazın merkezi büyür, ama f1 fili ve şah gelişimi gecikir; 8.Nf3 ise Benoni’de klasik olsa da burada at c3’ü korumaz ve ...Bxc3+ ile piyonlar bozulur.',
      diger: [
        { move: '8.Nf3', text: '8...O-O ve ...Bf5 ile Siyah rahat gelişir (Motor: −0.3).' },
        { move: '8.Rc1', text: 'c3’ü korur ama gelişmeyi geciktirir (Motor: −0.25).' },
      ],
    },
    '8b': {
      text: '8...Nbd7 ile Siyah b8 atını geliştirir; c6 karesi d5 piyonu yüzünden kapalıdır.',
      amac: 'Atı d7’den e5’e getirmek; e5 Benoni’de Siyah atlarının en iyi karesidir.',
      neden: 'b8 atının başka iyi karesi yoktur: c6’yı d5 piyonu kontrol eder, a6 kenardır. 8...O-O de aynı değerdedir (Motor: +0.1); Siyah hangi sırayla oynarsa oynasın ...Nbd7-e5 planı gelir.',
      diger: [
        { move: '8...O-O', text: 'Önce rok (Motor: +0.1); 9.Bd3 Nbd7 10.Ne2 Ne5 ile oyundakine benzer yapı.' },
        { move: '8...g5', text: 'Bağı kırmak (Motor: +0.1): 9.Bg3 h5 ile keskin oyun, ama Siyah şahı açılır.' },
      ],
    },
    '9w': {
      text: '9.Bb5 ile fil d7 atını e8’deki şaha bağlar.',
      amac: 'Siyahın ...Ne5 planını geciktirmek ve Siyahı rok yapmaya zorlamak.',
      neden: 'Motor burada 9.Bd3’ü tercih ediyor (Motor: +0.1, 9.Bb5 için −0.1). Bb5’in sakıncası, 9...Bxc3+ 10.bxc3 Qa5 sonrası c3’ün zayıflaması ve Beyazın Bxd7+ ile filini değişmek zorunda kalmasıdır. Spasski filini aktif bir kareye koyup Siyahın taşlarını bağlamayı seçti.',
      diger: [
        { move: '9.Bd3', text: 'Emms’in kitabında da benzer yapıda görülen kurulum: 9...Qa5 10.Ne2 Nxd5 11.O-O ve Beyaz piyon karşılığı gelişme üstünlüğü alır (Motor: +0.1).' },
        { move: '9.Bc4', text: '9...g5 10.Bg3 h5 ile Siyah şah kanadında hızla karşı oyun kurar (Motor: −0.5).' },
      ],
    },
    '9b': {
      text: '9...O-O ile Siyah rok yapar ve d7 atının bağını kaldırır.',
      amac: 'Şahı güvene almak ve d7 atını serbest bırakmak.',
      neden: 'Motor 9...Bxc3+! 10.bxc3 Qa5’i daha iyi görüyor (Motor: −0.3): vezir hem c3’e hem b5’e baskı yapar ve Beyaz 11.Bxd7+ ile filini değişmek zorunda kalır. Smislov fil çiftini korumayı tercih etti; bu, onun klasik ve sağlam üslubuna uygundu.',
      diger: [
        { move: '9...Bxc3+', text: '10.bxc3 Qa5 11.Bxd7+ Nxd7 ve Siyah rahat bir oyun alır (Motor: −0.3).' },
        { move: '9...a6', text: 'Fili hemen sorgulamak (Motor: +0.0); 10.Bd3 O-O 11.Ne2 Ne5 ile aynı yapıya döner.' },
      ],
    },
    '10w': {
      text: '10.Ne2 ile Beyaz atını geliştirir ve c3 atını korur.',
      amac: '...Bxc3+ ile piyonların bozulmasını önlemek; atı ileride g3 üzerinden f5’e götürmek.',
      neden: 'Rok yapılmamışken c3 atı sadece b2 piyonu tarafından korunuyordu. 10.Bd3? Bxc3+ 11.bxc3 Qa5 sonrası c3 zayıf kalır ve fil iki tempo kaybetmiş olur (Motor: −0.6). Motor 10.Ne2’yi tek iyi hamle olarak görür (Motor: 0.0).',
      diger: [
        { move: '10.Bd3', text: '10...Bxc3+ 11.bxc3 Qa5 ve c3 piyonu baskı altında (Motor: −0.6).' },
        { move: '10.Qc2', text: '10...Bxc3+ 11.bxc3 a6 ile Beyaz fili değişmek zorunda kalır (Motor: −0.6).' },
      ],
    },
    '10b': {
      text: '10...Ne5 ile at bağdan kurtulup merkezdeki ideal karesine yerleşir.',
      amac: 'd3 ve f3 karelerini kontrol etmek, ileride ...Ng6 ile h4 filine saldırmak.',
      neden: 'Benoni yapısında e5 atı merkezin en güçlü taşıdır, çünkü Beyaz onu piyonla (f4) hemen kovamaz. Motor da 10...Ne5’i ilk sırada görür (Motor: 0.0).',
      diger: [
        { move: '10...Ba5', text: 'Fili ...a6 ile kovulmaktan korumak (Motor: 0.0).' },
        { move: '10...a6', text: '11.Bd3 Ne5 12.O-O Ng6 ile benzer oyun (Motor: 0.0).' },
      ],
    },
    '11w': {
      text: '11.O-O ile Beyaz şahını güvene alır.',
      amac: 'Gelişmeyi tamamlamak ve kaleleri merkeze bağlamak.',
      neden: 'Motor 11.Bd3, 11.a3 ve 11.O-O’yu eşit görür (Motor: −0.1). Rok, e5 atına karşı f2-f4 planını da hazırlar, çünkü kale f-hattına gelir.',
      diger: [
        { move: '11.a3', text: 'Fili sorgulamak (Motor: −0.1); 11...Ba5 12.O-O Ng6 ile benzer.' },
        { move: '11.Bd3', text: 'Fili güvenli kareye almak (Motor: −0.1); 11...Bg4 ile Siyah aktif olur.' },
      ],
    },
    '11b': {
      text: '11...Ng6 ile at h4 filine saldırır.',
      amac: 'Beyazın kara kareli filini ya değişime zorlamak ya da g3’e itip ...Nh5 ile almak.',
      neden: 'Beyazın h4 fili Siyahın en tehlikeli rakibidir: f6 atını bağlar ve d6’ya ileride baskı yapabilir. Siyahın kendi kara kareli fili b4’te yapı dışında olduğu için bu fili değişmek mantıklıdır (Motor: −0.1, en iyi hamle).',
      diger: [
        { move: '11...Ba5', text: 'Önce fili korumak (Motor: −0.1); ...Ng6 sonra gelir.' },
        { move: '11...a6', text: 'b5 filini kovmak (Motor: 0.0).' },
      ],
    },
    '12w': {
      text: '12.Bg3 ile fil çekilir ve kara karelerde kalır.',
      amac: 'Fili korumak ve d6 piyonuna uzaktan baskıyı sürdürmek.',
      neden: '12.Bxf6 Qxf6 sonrası Siyahın iki fili olur (Motor: −0.3). 12.g3?? ise 12...Nxh4 13.gxh4 ile Beyazın şah kanadı piyonlarını parçalar (Motor: −2.6). 12.Bg3 tek mantıklı hamledir.',
      diger: [
        { move: '12.Bxf6', text: '12...Qxf6 ve Siyah fil çiftini alır (Motor: −0.3).' },
        { move: '12.g3', text: '12...Nxh4 13.gxh4 ile Beyazın şahı açılır (Motor: −2.6).' },
      ],
    },
    '12b': {
      text: '12...Nh5 ile ikinci at da g3 filine saldırır.',
      amac: 'Beyazın kara kareli filini almak ve fil çiftini kazanmak.',
      neden: 'Smislov’un planı tutarlıdır: iki at g3 filini hedef alır. Ancak at kenara gider ve tempo harcar. Motor 12...Ba5 ya da 12...a6’yı biraz daha iyi görür (Motor: −0.1, oyundaki hamle +0.0).',
      diger: [
        { move: '12...Ba5', text: 'Fili ...a3 tehdidinden korumak (Motor: −0.1); 13.Bd3 a6 ile vezir kanadı genişler.' },
        { move: '12...Bf5', text: 'Fili aktif kareye getirmek (Motor: 0.0); Beyazın Bd3’ünü karşılamaya hazırlanır.' },
      ],
    },
    '13w': {
      text: '13.Bd3 ile fil b5’ten çekilip d3’e döner.',
      amac: 'Fili ...a6 tehdidinden kurtarmak ve g6 atına, h7’ye doğru köşegene yerleştirmek.',
      neden: 'Beyaz g3 filini iki atın saldırısından kurtaramayacağını kabul eder; bunun yerine diğer filini iyi kareye getirir. Motor da 13.Bd3’ü ilk sırada görür (Motor: +0.2).',
      diger: [
        { move: '13.h3', text: '13...Nxg3 14.Nxg3 a6 15.Bd3 ile benzer (Motor: +0.1).' },
        { move: '13.f4', text: 'Merkezi hemen genişletmek (Motor: 0.0); ama e3 zayıflar.' },
      ],
    },
    '13b': {
      text: '13...Nxg3 ile Siyah Beyazın kara kareli filini alır ve fil çiftini kazanır.',
      amac: 'Uzun vadede iki filin gücünden yararlanmak.',
      neden: 'Planın mantıklı sonucu. Motor önce 13...a6 oynamayı biraz daha iyi görüyor (Motor: 0.0’a karşı +0.2): değişim hep mümkündür, ama önce vezir kanadında alan almak faydalıdır.',
      diger: [
        { move: '13...a6', text: 'Önce vezir kanadı (Motor: 0.0); 14.h3 Nxg3 15.Nxg3 f5 ile Siyah iyi.' },
        { move: '13...Ba5', text: '14.f4 f5 15.Bf2 Nf6 ile kapalı yapı (Motor: +0.2).' },
      ],
    },
    '14w': {
      text: '14.Nxg3 ile Beyaz e2 atıyla geri alır.',
      amac: 'Piyon yapısını bozmadan almak; at g3’ten f5 ve e4 karelerine bakar.',
      neden: 'Diğer almalar yapıyı bozar: 14.hxg3 Ne5 sonrası at d3 filine saldırır (Motor: −0.6), 14.fxg3? ise e3’ü zayıflatır (Motor: −1.3). Atla almak açıkça en iyisidir (Motor: +0.1).',
      diger: [
        { move: '14.hxg3', text: '14...Ne5 ile fil sorgulanır, Beyaz rahat değildir (Motor: −0.6).' },
        { move: '14.fxg3', text: '14...Qe7 ve e3 zayıflar (Motor: −1.3).' },
      ],
    },
    '14b': {
      text: '14...Ne5 ile kalan at merkeze döner ve d3 filine saldırır.',
      amac: 'Beyazın iyi filini ya değişime zorlamak ya da pasif kareye itmek.',
      neden: 'Motor 14...f5’i daha iyi görüyor (Motor: +0.1): Siyah f5 ile e4 ilerlemesini ve Nf5 sıçramasını engeller, f-hattını açar. Oyundaki hamle de iyi (Motor: +0.2), ama Beyaz bundan sonra f4 ile atı kovabilecek.',
      diger: [
        { move: '14...f5', text: 'e4 ve f5 karelerini kapatır (Motor: +0.1); 15.f4 Bd7 ile dengeli oyun.' },
        { move: '14...Bd7', text: 'Gelişmek (Motor: +0.1); 15.Qc2 Nh4 ile at şah kanadında aktif olur.' },
      ],
    },
    '15w': {
      text: '15.Be2 ile fil çekilir.',
      amac: 'Fili korumak ve f2-f4 sonrası Bxg4 ya da Bh5 imkânlarını saklı tutmak.',
      neden: '15.Bf5 Bxf5 16.Nxf5 sonrası Siyahın e5 atı Beyazın filinden daha iyi olur (Motor: 0.0). 15.Be2 en iyisidir (Motor: +0.2); 15.Bc2 de oynanabilirdi.',
      diger: [
        { move: '15.Bc2', text: 'Fili b1-h7 köşegeninde tutar (Motor: +0.2); 15...Qh4 ile benzer oyun.' },
        { move: '15.Bf5', text: 'Fili değişmek (Motor: 0.0); Beyazın fil çifti telafisi azalır.' },
      ],
    },
    '15b': {
      text: '15...Bxc3?! ile Siyah b4 filini c3 atıyla değişir; Beyazın c-piyonları ikiye katlanır.',
      amac: 'Beyazın piyon yapısını bozmak ve d5 piyonunun savunucusunu ortadan kaldırmak.',
      neden: 'Bu değişim kazanılan fil çiftini geri verir. c3 piyonu d4’ü korur ve Beyaz f4-e4 ile merkezi rahatça kurar. Motor 15...f5 (Motor: +0.0) ya da 15...Nd7’yi (Motor: +0.1) öneriyor; oyundaki hamle değerlendirmeyi +0.4’e çıkardı.',
      diger: [
        { move: '15...f5', text: 'Fil çiftini korur ve e4’ü engeller (Motor: 0.0): 16.Qc2 Ng6 17.a3 Ba5.' },
        { move: '15...Nd7', text: 'At f6’ya dönmeye hazırlanır (Motor: +0.1); 16.a3 Ba5 ile fil korunur.' },
        { move: '15...Ba5', text: 'Fili saklamak (Motor: +0.2); 16.Kh1 Nd7 17.e4.' },
      ],
    },
    '16w': {
      text: '16.bxc3 ile Beyaz piyonla geri alır.',
      amac: 'Merkezi güçlendirmek: c3 piyonu d4 karesini korur ve b-hattı Beyazın kalesine açılır.',
      neden: 'Ara hamle 16.f4? 16...Bxb2 ile bir piyon kaybettirir (Motor: −1.2). Şimdi her iki tarafta bir at ve bir fil kaldı; Beyazın c-piyonları ikiye katlandı ama merkezi daha güçlü (Motor: +0.4).',
      diger: [
        { move: '16.f4', text: '16...Bxb2 17.Rb1 Qf6 ile Siyah piyon fazlasıyla kalır (Motor: −1.2).' },
      ],
    },
    '16b': {
      text: '16...Qh4 ile vezir şah kanadına çıkar ve g3 atına baskı yapar.',
      amac: 'Beyazın f4 ilerlemesini cezalandırmaya hazırlanmak: ...Ng4 ile h2 ve e3’ü hedef almak.',
      neden: 'Motor 16...Qh4’ü en iyi görüyor (Motor: +0.5). Pasif 16...Ng6 ya da 16...f5 ise Beyaza f4-e4 için zaman verir (Motor: +0.9).',
      diger: [
        { move: '16...f5', text: '17.f4 Ng6 18.a4 ve Beyaz merkezde üstün (Motor: +0.9).' },
        { move: '16...Ng6', text: '17.f4 f5 18.a4 (Motor: +0.9).' },
      ],
    },
    '17w': {
      text: '17.f4 ile Beyaz e5 atını kovar ve merkez piyonlarını harekete geçirir.',
      amac: 'e3-e4 ile güçlü bir merkez kurmak ve Siyahın atını merkezden uzaklaştırmak.',
      neden: 'Fil çiftini kaybeden taraf için telafi merkezdeki piyon gücüdür. Motor 17.f4’ü açık farkla en iyi görür (Motor: +0.8; 17.f3 ve 17.a4 +0.5).',
      diger: [
        { move: '17.f3', text: 'Daha sakin (Motor: +0.5); 17...Rb8 18.a4 Bd7 19.f4.' },
        { move: '17.a4', text: 'Vezir kanadında alan (Motor: +0.5); ama ...Ng4 ile at aktif kalır.' },
      ],
    },
    '17b': {
      text: '17...Ng4 ile at h2 ve e3 karelerine saldırır.',
      amac: 'Vezirle birlikte h2’ye baskı yapmak ve Beyazı filini atla değişmeye zorlamak.',
      neden: 'At geri çekilseydi Beyazın merkezi kendiliğinden ilerlerdi: 17...Nd7 18.e4 (Motor: +1.0) ya da 17...Ng6 18.f5 (Motor: +1.0). 17...Ng4 en aktif ve en iyi hamledir (Motor: +0.65).',
      diger: [
        { move: '17...Nd7', text: '18.e4 Re8 19.Qd3 ve Beyaz merkezde rahat (Motor: +1.0).' },
        { move: '17...Ng6', text: '18.f5 Ne5 19.Rf4 Qg5 ile at yine kovalanır (Motor: +1.0).' },
      ],
    },
    '18w': {
      text: '18.Bxg4 ile fil atı alır.',
      amac: 'Tehlikeli atı ortadan kaldırmak ve h2 ile e3’ü güvenceye almak.',
      neden: 'Pratikte zorunlu: 18.Rf3? Qxh2+ 19.Kf1 sonrası Beyazın şahı açılır (Motor: −4.0), 18.h3? ise 18...Nxe3 ile kaliteyi verir (Motor: −4.7). Değişimden sonra Beyazın atı Siyahın filine karşı kalır.',
      diger: [
        { move: '18.Rf3', text: '18...Qxh2+ 19.Kf1 Re8 ve Beyaz şahı tehlikede (Motor: −4.0).' },
        { move: '18.h3', text: '18...Nxe3 19.Qe1 Nxf1 ile Siyah kalite kazanır (Motor: −4.7).' },
      ],
    },
    '18b': {
      text: '18...Bxg4 ile Siyah fille geri alır ve d1’deki vezire saldırır.',
      amac: 'Taş dengesini korumak ve tempo kazanmak.',
      neden: 'Zorunlu geri alış; 18...Qxg4 de eşdeğerdir (Motor: +0.8), ama vezir değişimi Siyahın karşı oyun şansını azaltır. Fille almak Beyazın vezirini yerinden oynatır.',
      diger: [
        { move: '18...Qxg4', text: '19.Qxg4 Bxg4 20.f5 ile Beyaz oyun sonunda biraz üstün (Motor: +0.8).' },
      ],
    },
    '19w': {
      text: '19.Qa4 ile vezir saldırıdan kaçar ve a7’ye bakar.',
      amac: 'a7 piyonunu ve dördüncü yatayı kontrol etmek, ileride Qc2 ile e4’ü desteklemek.',
      neden: 'Vezir kenarda biraz dağınık kalır; Motor 19.Qd3 (Motor: +0.65) ya da 19.Qb3’ü (+0.5) daha iyi görüyor, çünkü bu kareler e4 ilerlemesini destekler. 19.Qa4 için motor +0.3 veriyor.',
      diger: [
        { move: '19.Qd3', text: 'Vezir merkezde, e4’ü destekler (Motor: +0.65): 19...f5 20.a4 Rae8.' },
        { move: '19.Qb3', text: 'b7’ye baskı (Motor: +0.5); 19...Rab8 20.f5.' },
      ],
    },
    '19b': {
      text: '19...Bc8 ile fil geri çekilir.',
      amac: 'Fili h3 gibi bir hamleyle kovulmaktan korumak ve b7-d7 karelerini savunmak.',
      neden: 'Bu çekilme zaman kaybıdır. Motor 19...Qe7’yi öneriyor (Motor: +0.3): vezir merkeze döner, fil g4’te aktif kalır. Oyundaki hamle değerlendirmeyi +0.9’a çıkardı; Beyaz bir tempo kazanıp e4’ü oynar.',
      diger: [
        { move: '19...Qe7', text: '20.Rae1 Bd7 21.Qd1 b5 ile Siyahın oyunu sağlam (Motor: +0.3).' },
        { move: '19...Rae8', text: 'Kaleyi e-hattına getirmek (Motor: +0.5); e4 ilerlemesine karşı.' },
      ],
    },
    '20w': {
      text: '20.e4 ile Beyaz merkezi genişletir.',
      amac: 'e4-f4 piyon ikilisini kurmak; ileride e5 veya f5 ile ilerlemek.',
      neden: 'Bu Beyazın fil çiftine karşı telafisidir: merkez piyonları Siyahın filini kısıtlar. Motor 20.Rae1’i neredeyse eşit görür (Motor: +0.7’ye karşı +0.6); 20.c4 ise d4 karesini Siyaha bırakır (Motor: +0.3).',
      diger: [
        { move: '20.Rae1', text: 'Önce kale (Motor: +0.7); 20...Qe7 21.e4 f6.' },
        { move: '20.c4', text: 'c3’ü harekete geçirmek (Motor: +0.3), ama ...f5 ile Siyah rahatlar.' },
      ],
    },
    '20b': {
      text: '20...Qg4 ile vezir g4’e gelir ve e4’e, d1 karesine baskı yapar.',
      amac: 'Beyazın şah kanadını rahatsız etmek ve ...h5-h4 ile g3 atını kovmak.',
      neden: 'Vezir yine kenarda kalır ve ileride kovalanabilir. Motor 20...Qe7’yi öneriyor (Motor: +0.6): vezir e5 ilerlemesini ve d6’yı korur. Oyundaki hamle değerlendirmeyi +1.1’e çıkardı.',
      diger: [
        { move: '20...Qe7', text: 'Merkezi korumak (Motor: +0.6): 21.Rfe1 Bd7 22.Qd1 b5.' },
        { move: '20...f5', text: 'Merkezi kırmak (Motor: +0.8): 21.Rae1 fxe4 22.Rxe4.' },
      ],
    },
    '21w': {
      text: '21.Qc2 ile vezir e4’ü korur ve şah kanadının savunmasına yaklaşır.',
      amac: 'e4 piyonunu sağlamlaştırıp e5 ilerlemesini hazırlamak.',
      neden: 'Motor 21.f5 (Motor: +1.1) ya da 21.Rf3’ü (+1.1) biraz daha iyi görüyor: f5 Siyahın c8 filini kapatır ve e6/g6 karelerini kontrol eder. 21.Qc2 de sağlamdır (Motor: +1.0).',
      diger: [
        { move: '21.f5', text: 'Alan kazanır, c8 filini kapatır (Motor: +1.1): 21...Rd8 22.Rae1 Bd7.' },
        { move: '21.Rf3', text: 'Kaleyi üçüncü yataya getirmek (Motor: +1.1); g3’ü korur ve e3/g3’e geçebilir.' },
      ],
    },
    '21b': {
      text: '21...h5 ile Siyah h-piyonunu ilerletir; hedef ...h4 ile g3 atını kovmaktır.',
      amac: 'Şah kanadında karşı oyun kurmak ve Beyazın atını zayıf karelere itmek.',
      neden: 'Siyah, Beyazın merkezde ilerlemesine karşı kanatta hamle arar. Motor 21...f6 ile merkezi kırmayı biraz daha iyi görüyor (Motor: +1.0): 22.e5 fxe5 23.fxe5 Rxf1+ ile kaleler değişir. 21...h5 için motor +1.2 veriyor.',
      diger: [
        { move: '21...f6', text: 'Merkezde direnmek (Motor: +1.0); 22.f5 Bd7 23.Ne2 Rae8.' },
        { move: '21...Re8', text: 'Kaleyi e-hattına getirmek (Motor: +1.1); e5’i engellemeye hazırlanır.' },
      ],
    },
    '22w': {
      text: '22.Rf2 ile kale ikinci yatayı savunur.',
      amac: 'g2 ve h2’yi korumak, ...h4-h3 saldırısına önceden hazırlık yapmak.',
      neden: 'Biraz pasif bir hamle. Motor 22.Rf3’ü tercih ediyor (Motor: +1.1): kale g3 atını korur, üçüncü yatayda e3 veya g3’e geçebilir ve ...h4’ten sonra atın çekilmesine gerek kalmaz. 22.Rf2 için motor +0.65 veriyor.',
      diger: [
        { move: '22.Rf3', text: 'Aktif kale (Motor: +1.1): 22...Re8 23.Re1 Qg6 24.h3.' },
        { move: '22.f5', text: 'Alan kazanmak (Motor: +0.9); 22...b5 23.Rf3 h4 24.Nf1.' },
      ],
    },
    '22b': {
      text: '22...b5 ile Siyah vezir kanadı çoğunluğunu harekete geçirir.',
      amac: '...b4 ile c3 piyonunu sorgulamak ve vezir kanadında geçer piyon yaratmak.',
      neden: 'Siyahın a7-b7-c5 piyonları Beyazın a2-c3 piyonlarına karşı 3’e 2 üstündür. Ancak bu plan yavaştır; merkezde Beyazın e5 tehdidi daha hızlıdır. Motor 22...Bd7 ile önce gelişmeyi biraz daha iyi görüyor (Motor: +0.6’ya karşı +0.8).',
      diger: [
        { move: '22...Bd7', text: 'Fili gelişmek (Motor: +0.6); 23.Re1 Rae8 ile e5’e karşı hazırlık.' },
        { move: '22...Re8', text: 'e-hattına kale (Motor: +0.8); 23.Re1 Rb8.' },
      ],
    },
    '23w': {
      text: '23.e5 ile Beyaz merkezde kırılma yapar ve d6 piyonuna saldırır.',
      amac: 'd6 piyonunu ortadan kaldırıp d5’i geçer piyon yapmak; Siyahın fil ve vezirini merkezden uzak tutmak.',
      neden: 'Tematik kırılma: Siyah dxe5 oynarsa d-piyonu geçer olur, oynamazsa e5 piyonu d6’ya baskı yapmaya devam eder. Motor önce 23.Rf3 ya da 23.Re1 ile hazırlığı biraz daha iyi görüyor (Motor: +0.8’e karşı +0.6), ama plan doğrudur.',
      diger: [
        { move: '23.Rf3', text: 'Önce kale (Motor: +0.8): 23...Re8 24.h3 Qg6 25.Re1.' },
        { move: '23.Re1', text: 'e5’i destekleyip sonra ilerlemek (Motor: +0.7).' },
      ],
    },
    '23b': {
      text: '23...h4 ile Siyah g3 atını kovar.',
      amac: 'Atı merkezden ve f5 karesinden uzaklaştırmak, h3 ile g2’ye baskı hazırlamak.',
      neden: 'Motor 23...h4’ü en iyi hamleler arasında görür (Motor: +0.6). Önemli olan Siyahın 23...dxe5 oynamamasıdır: d6 piyonu yerinde kaldıkça Beyazın d-piyonu geçer değildir.',
      diger: [
        { move: '23...Re8', text: 'e5 piyonuna baskı (Motor: +0.6); 24.Re1 h4 25.Nf1.' },
        { move: '23...Rd8', text: 'd6’yı korumak (Motor: +0.9); biraz pasif.' },
      ],
    },
    '24w': {
      text: '24.Nf1 ile at geri çekilir; buradan e3’e ve g3’e dönebilir.',
      amac: 'Atı yeniden yönlendirmek: e3’ten d5, f5 ve g4 karelerine bakacak.',
      neden: 'Atın en iyi geri çekilme karesi budur (Motor: +0.6). 24.Ne4 Bf5 25.Qe2 dxe5 sonrası e4 atı bağlanır (Motor: +0.35); 24.Nh1? ise atı oyundan çıkarır (Motor: −0.4).',
      diger: [
        { move: '24.Ne4', text: 'Merkeze gitmek (Motor: +0.35); ama 24...Bf5 ile at bağlanır.' },
        { move: '24.Nh1', text: 'At köşeye gider (Motor: −0.4); 24...dxe5 25.fxe5 Bb7 ile Siyah iyi.' },
      ],
    },
    '24b': {
      text: '24...Bf5 ile fil gelişir ve c2’deki vezire saldırır.',
      amac: 'Tempo kazanmak ve fili b1-h7 köşegeninde aktif hale getirmek.',
      neden: 'Motor 24...Bf5, 24...Qh5 ve 24...Re8’i eşit görür (Motor: +0.6). Fil nihayet c8’den çıkmıştır, ama bunun için 19...Bc8 ile kaybedilen zaman geri gelmez.',
      diger: [
        { move: '24...Qh5', text: 'Veziri şah kanadında tutmak (Motor: +0.6); 25.Re1 Re8 26.Rfe2 Bf5.' },
        { move: '24...Re8', text: 'e5’e baskı (Motor: +0.6).' },
      ],
    },
    '25w': {
      text: '25.Qd2 ile vezir d-piyonunu destekler ve d6’ya, h6’ya bakar.',
      amac: 'd-hattında baskıyı artırmak ve f4 piyonunu korumak.',
      neden: 'Motor bunu tek iyi hamle olarak görür (Motor: +0.6). 25.h3 Qh5 26.Qd2 dxe5 ile f4 düşer (Motor: +0.1); 25.Ne3? Bxc2 ise veziri kaybettirir.',
      diger: [
        { move: '25.h3', text: '25...Qh5 26.Qd2 dxe5 ve Beyazın merkezi zayıflar (Motor: +0.1).' },
        { move: '25.Qb2', text: '25...dxe5 26.Ne3 Qh5 ile Siyah iyi (Motor: +0.1).' },
      ],
    },
    '25b': {
      text: '25...dxe5? ile Siyah merkezde değişir.',
      amac: 'e5 piyonunu ortadan kaldırıp Beyazın merkezini dağıtmak.',
      neden: 'Bu oyunun kilit hatasıdır: değişimden sonra d5 piyonu geçer piyon olur ve e5 piyonu d6 karesini destekler. Motor 25...Qg6, 25...Rfe8 ya da 25...Rad8 ile beklemeyi öneriyor (Motor: +0.6 civarı); oyundaki hamle değerlendirmeyi +1.5’e çıkardı.',
      diger: [
        { move: '25...Qg6', text: 'Beklemek (Motor: +0.6): 26.Ne3 Rfe8 27.Re1 Rad8 ve d6 piyonu blokajı korur.' },
        { move: '25...Rfe8', text: 'e5’e baskı (Motor: +0.6); 26.Re1 Qg6 27.Ne3 Rad8.' },
        { move: '25...Rad8', text: 'd-hattını kontrol etmek (Motor: +0.65).' },
      ],
    },
    '26w': {
      text: '26.fxe5 ile f-piyonuyla alınır; e5 piyonu d6 karesini destekler.',
      amac: 'Destekli geçer piyonu oluşturmak ve f-hattını kaleye açmak.',
      neden: 'Doğru alış (Motor: +1.6). 26.Ne3 Qh5 27.d6 de güçlüdür (+1.2), ama fxe5 hem merkezi korur hem de f-hattını açar. 26.a4? exf4 ise bir piyonu verir (Motor: +0.6).',
      diger: [
        { move: '26.Ne3', text: '26...Qh5 27.d6 Rad8 28.fxe5 (Motor: +1.2).' },
        { move: '26.a4', text: '26...exf4 27.axb5 g5 ve Siyah piyonu korur (Motor: +0.6).' },
      ],
    },
    '26b': {
      text: '26...Bg6 ile fil g6’ya çekilir.',
      amac: 'Fili ...Be4 ile hem d5’e hem g2’ye bakacak şekilde yönlendirmek.',
      neden: 'Motor 26...Bd7 ile fili d-piyonunun önüne yerleştirmeyi biraz daha iyi görür (Motor: +1.4’e karşı +1.5); fil d7’den d-piyonunu durdurur. Siyahın en iyi şansı geçer piyonu blokaj altında tutmaktır.',
      diger: [
        { move: '26...Bd7', text: 'Blokaj filini hazırlamak (Motor: +1.4); 27.Re1 h3 28.Ng3 Rae8.' },
        { move: '26...Qh5', text: 'Veziri şah kanadında tutmak (Motor: +1.5); 27.Re1 Rad8 28.d6 Be6.' },
      ],
    },
    '27w': {
      text: '27.Re1 ile kale e1’e gelir ve e5 piyonunu destekler.',
      amac: 'e5 piyonunu sağlamlaştırmak, d6 ilerlemesi sonrası e-hattında baskı yapmak.',
      neden: 'Motor 27.h3’ü biraz daha iyi görüyor (Motor: +1.6’ya karşı +1.4): h3 ile Siyahın ...h3 ilerlemesi önlenir ve g2 korunur. Spasski e5’i desteklemeyi öncelikli saydı.',
      diger: [
        { move: '27.h3', text: '...h3’ü önler (Motor: +1.6): 27...Qe4 28.Re1 Qd3 29.d6.' },
        { move: '27.Ne3', text: 'Ata tempo (Motor: +1.5): 27...Qd7 28.h3 Rad8.' },
      ],
    },
    '27b': {
      text: '27...h3? ile Siyah g2 piyonuna saldırır.',
      amac: 'Beyazın şah kanadını zayıflatmak ve ...Be4 ile g2’de ikinci saldırıyı hazırlamak.',
      neden: 'Bu saldırı d6 ilerlemesine zaman verir. Motor 27...b4 (Motor: +1.3) ya da 27...Rfe8 (+1.7) ile merkezde savunmayı önerir; oyundaki hamle değerlendirmeyi +2.2’ye çıkardı.',
      diger: [
        { move: '27...b4', text: 'Vezir kanadında karşı oyun (Motor: +1.3): 28.d6 Rfe8 29.Ne3 bxc3.' },
        { move: '27...Rfe8', text: 'e5’e baskı ve d6’ya hazırlık (Motor: +1.7); 28.h3 Qd7 29.Re3.' },
      ],
    },
    '28w': {
      text: '28.d6 ile geçer piyon ilerler.',
      amac: 'Piyonu d6’ya yerleştirip Siyahın kalelerini ve vezirini onu durdurmaya mecbur etmek.',
      neden: 'Motor 28.Ne3!’ü daha güçlü buluyor (Motor: +2.5): at g4’teki vezire saldırır, 28...Qg5 29.Nf5 ile hedef kareye ulaşır ve piyon sonra ilerler. Oyundaki 28.d6 de avantajı korur (Motor: +1.5).',
      diger: [
        { move: '28.Ne3', text: 'Tempo ile at (Motor: +2.5): 28...Qg5 29.Nf5 Qd8 30.g4.' },
        { move: '28.Re3', text: 'Kaleyi aktif etmek (Motor: +1.3); 28...Qg5 29.d6 Rad8.' },
      ],
    },
    '28b': {
      text: '28...Be4 ile fil merkeze gelir ve g2 piyonuna ikinci kez saldırır.',
      amac: '...Bxg2 ile Beyaz şahının etrafını açmak; aynı zamanda d5 karesini kontrol etmek.',
      neden: 'Motor 28...Be4, 28...Rfe8 ve 28...b4’ü yakın görür (Motor: +2.1 – +2.2). Siyah artık karşı saldırıya güvenmek zorundadır, çünkü d6 piyonu ona pasif bir savunma bırakmaz.',
      diger: [
        { move: '28...Rfe8', text: 'e5’e baskı (Motor: +2.1): 29.Ne3 Qg5 30.Nd5 Rxe5.' },
        { move: '28...b4', text: 'c3’ü sorgulamak (Motor: +2.2); 29.Ne3 bxc3 30.Qxc3 Qe6.' },
      ],
    },
    '29w': {
      text: '29.Ne3 ile at e3’e gelir ve g4’teki vezire saldırır.',
      amac: 'Atı f5 ve d5 karelerine yaklaştırmak, aynı zamanda tempo kazanmak.',
      neden: 'Motor 29.Ng3’ü biraz daha iyi görür (Motor: +2.1’e karşı +2.0), ama 29.Ne3 de doğal ve güçlüdür. At e3’ten hem d5’e hem f5’e gidebilir.',
      diger: [
        { move: '29.Ng3', text: 'Fili sorgulamak (Motor: +2.1); 29...Bg6 30.Ne2 Be4 31.Qf4.' },
        { move: '29.Re3', text: 'Kale aktif (Motor: +1.8): 29...Rae8 30.Rg3 Qe6.' },
      ],
    },
    '29b': {
      text: '29...Qe6 ile vezir e6’ya gelir ve d7 karesini kontrol eder.',
      amac: 'd-piyonunu durdurmak ve e5 piyonuna baskı yapmak.',
      neden: 'Motor 29...Qg5’i biraz daha iyi görüyor (Motor: +2.0’a karşı +2.4): 30.Nd5 Qxd2 31.Rxd2 Bxd5 ile vezirler değişir ve Siyah biraz rahatlar. Oyundaki hamleyle vezir piyonun önünde kalır ama hedef haline gelir.',
      diger: [
        { move: '29...Qg5', text: 'Vezir değişimi aramak (Motor: +2.0): 30.Nd5 Qxd2 31.Rxd2 Bxd5.' },
        { move: '29...Qg6', text: 'Şah kanadında kalmak (Motor: +2.3); 30.Rf4 Rae8 31.Rg4.' },
      ],
    },
    '30w': {
      text: '30.Rf4 ile kale e4 filine saldırır ve dördüncü yatayı kontrol eder.',
      amac: 'Kaleyi şah kanadına (g4) kaydırmaya hazırlamak ve fili rahatsız etmek.',
      neden: 'Motor 30.Rf4’ü açık farkla en iyi görür (Motor: +2.6). 30.Rff1 pasiftir (+1.4), 30.a4? ise 30...bxa4 ile vezir kanadını açar (+1.0).',
      diger: [
        { move: '30.Rff1', text: 'Pasif savunma (Motor: +1.4); 30...b4 31.Rf4 Qxe5.' },
        { move: '30.a4', text: 'Vezir kanadını açmak (Motor: +1.0); bu yanlış kanatta oyun.' },
      ],
    },
    '30b': {
      text: '30...Bxg2 ile fil g2 piyonunu alır.',
      amac: 'Piyon kazanmak ve Beyaz şahının etrafını açmak; h3 piyonuyla birlikte tehdit oluşturmak.',
      neden: 'Motor 30...Bxg2’yi en iyi hamle olarak görür (Motor: +2.8). Ancak fil ve h3 piyonu Beyaz şahını tek başlarına tehdit edemez; Siyahın diğer taşları d6 piyonuyla meşguldür.',
      diger: [
        { move: '30...Qg6', text: 'Şah kanadını savunmak (Motor: +3.4); 31.Rg4 Qh7 32.Rf1.' },
        { move: '30...f5', text: 'Merkeze darbe (Motor: +3.7); 31.exf6 Rxf6 32.Ng4 ve Beyaz kazanır.' },
      ],
    },
    '31w': {
      text: '31.Nf5! ile at hedef kareye yerleşir.',
      amac: 'd6 piyonunu korumak, e7 ve g7 karelerine saldırmak; Ne7+ ve Nxg7 tehditlerini hazırlamak.',
      neden: 'Motor 31.Nf5’i en iyi görür (Motor: +3.3); 31.Ng4 neredeyse eşdeğerdir (+3.2). At f5’te Siyahın kalelerini ve şahını aynı anda baskı altına alır.',
      diger: [
        { move: '31.Ng4', text: 'At g4’ten f6’ya (Motor: +3.2): 31...Qg6 32.Re3 Rfd8.' },
        { move: '31.Nxg2', text: 'Fili almak (Motor: +1.8); 31...hxg2 ile Beyazın şahı açılır.' },
      ],
    },
    '31b': {
      text: '31...Rfe8? ile kale e8’e gelir ve e5 piyonuna baskı yapar.',
      amac: 'Merkezde Beyazın taşlarını rahatsız etmek, ...Rad8 ile d6’yı almak.',
      neden: 'Kale e8’e gidince Siyahın son yatayı ve g7 savunması zayıflar; Nxg7 sonrası e8 kalesi de çatal hedefi olacak. Motor 31...Rae8 ya da 31...Rfb8’i biraz daha iyi görür (Motor: +4.2’ye karşı +4.9).',
      diger: [
        { move: '31...Rae8', text: 'f8 kalesini yerinde tutmak (Motor: +4.2); 32.Re3 g6 33.Qf2.' },
        { move: '31...Rfb8', text: 'Vezir kanadında karşı oyun (Motor: +4.2); 32.Qd3 Rb7.' },
      ],
    },
    '32w': {
      text: '32.Re3 ile kale üçüncü yataya gelir; g3’e geçmeye ve h3’e saldırmaya hazırlanır.',
      amac: 'Kaleyi g-hattına getirip g7’yi hedef almak; e-hattında da e5’i korumak.',
      neden: 'Motor 32.Re3’ü açık farkla en iyi görür (Motor: +5.0). Kale g3’e geçerse Rxg7+ tehdidi doğar; Siyahın en iyi cevabı 32...Qd5 ile vezir değişimi aramaktır (Motor: +5.1).',
      diger: [
        { move: '32.Qd3', text: 'h3’e saldırmak (Motor: +3.2): 32...c4 33.Qg3 Qg6.' },
        { move: '32.Qd1', text: 'Vezir h5’e gitmeye hazırlanır (Motor: +2.7); yavaş.' },
      ],
    },
    '32b': {
      text: '32...Rad8? ile kale d8’den d6 piyonuna saldırır.',
      amac: 'd6 piyonunu kazanmak ve Beyazın en güçlü kozunu ortadan kaldırmak.',
      neden: 'Bu hamle Nxg7 çatalına izin verir. Motor 32...Qd5’i öneriyor (Motor: +5.1): 33.Qxd5 Bxd5 ile vezirler değişir ve Siyah daha uzun direnir.',
      diger: [
        { move: '32...Qd5', text: 'Vezir değişimi (Motor: +5.1): 33.Qxd5 Bxd5 34.Ne7+ Rxe7 35.dxe7.' },
        { move: '32...Be4', text: 'Fili geri getirmek (Motor: +5.4); 33.Rexe4 Qg6+ 34.Kf1 ve Siyah bir fil eksik kalır.' },
      ],
    },
    '33w': {
      text: '33.Nxg7! ile at g7’yi alır ve e6’daki vezire, e8’deki kaleye saldırır.',
      amac: 'Çatal ile vezir ya da kale kazanmak ve Siyahın şah kanadını tamamen açmak.',
      neden: 'Motor bunu en iyi görür (Motor: +6.4). 33...Kxg7 34.Rg3+ Qg6 35.Rxf7+! Kxf7 36.Qf4+ ve 37.Rxg6+ ile vezir yine kazanılır (Motor: +6.6). Bu kombinasyon d6 piyonunun Siyah kalelerini bağlamasının doğrudan sonucudur.',
      diger: [
        { move: '33.Rg3', text: '33...Qxe5 34.Rxg7+ Qxg7 35.Nxg7 (Motor: +5.0).' },
        { move: '33.Qf2', text: 'Baskıyı artırmak (Motor: +4.5); 33...b4 34.Qh4.' },
      ],
    },
    '33b': {
      text: '33...Rxd6 ile Siyah d6 piyonunu alır, ama veziri kaybeder.',
      amac: 'Piyonu alarak bir miktar materyal geri kazanmak.',
      neden: 'Siyahın iyi bir hamlesi kalmamıştır. 33...Qd5 34.Qxd5 Bxd5 35.Nxe8 Rxe8 ile vezirler değişir ama Beyaz kalite önde kalır (Motor: +6.8). Oyundaki hamleden sonra motor Beyaz için zorla mat görüyor (#17).',
      diger: [
        { move: '33...Qd5', text: '34.Qxd5 Bxd5 35.Nxe8 Rxe8 ve Beyaz kalite önde (Motor: +6.8).' },
        { move: '33...Qg6', text: '34.Nxe8 Bf3+ 35.Kf1 ve Beyaz kale önde (Motor: +7.5).' },
      ],
    },
    '34w': {
      text: '34.Nxe6 ile at veziri alır; Smislov terk etti.',
      amac: 'Vezir kazanarak oyunu bitirmek.',
      neden: 'Zorunlu ve en iyi hamle (Motor: +14). 34...Rexe6 35.exd6 sonrası d-piyonu yine d7’ye ilerler; Siyahın savunması kalmaz.',
      diger: [
        { move: '34.exd6', text: '34...Qxe3+ 35.Qxe3 Rxe3 ile oyun dengeye gelir (Motor: +0.4).' },
      ],
    },
  },
  qa: [
    { q: 'Beyaz neden 6.d5 oynadı, 6.e3 değil?', a: '6.d5 ile Beyaz merkezde alan kazanır ve Siyahın b4 filini yapı dışında bırakır. Motor 6.e3’ü biraz daha iyi görse de (+0.2’ye karşı −0.2), Spasski Leningrad sisteminin karakteristik yapısını istiyordu. d5 sonrası Siyah ya kapalı yapıya, ya gambite ya da Benoni yapısına girmek zorundadır.' },
    { q: 'Siyahın 6...exd5 seçimi neden Benoni yapısına benzer, ama farklı?', a: 'Normal Benoni’de Siyahın kara kareli fili g7’dedir ve d4, e5 karelerini korur. Burada fil b4’tedir ve çoğu zaman c3 atıyla değişilmek zorunda kalır. Bu nedenle Siyah kara karelerde zayıf kalır; chess.com yazısı da bu oyunda b4 filinin yersizliğinin sorun yarattığını vurgular.' },
    { q: 'Smislov fil çiftini neden geri verdi (15...Bxc3)?', a: 'Smislov c3 piyonlarını ikiye katlamak ve d5’in savunucusunu almak istedi. Ancak c3 piyonu d4’ü korur ve Beyaz f4-e4 ile merkezi rahatça kurar. Motor 15...f5’i önerir (Motor: 0.0): Siyah fil çiftini korur ve e4 ilerlemesini engeller.' },
    { q: 'Beyaz 18.Bxg4 yerine başka bir şey oynayabilir miydi?', a: 'Hayır. 18.Rf3? Qxh2+ 19.Kf1 sonrası Beyaz şahı açılır (Motor: −4.0), 18.h3? ise 18...Nxe3 ile kaliteyi verir (Motor: −4.7). Atı almak zorunluydu.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Avantaj 25...dxe5? hatasından geldi. Bu değişimle d5 piyonu geçer piyon oldu ve e5 piyonu onu destekledi. Ondan önce oyun dengeye yakındı (Motor: +0.6); sonra değerlendirme +1.5’e çıktı ve Beyaz d6 ilerlemesiyle Siyahın kalelerini bağladı.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: '25...Qg6 ya da 25...Rfe8 ile d6 blokajını koruyabilirdi (Motor: +0.6). Sonra 27...b4 (Motor: +1.3) ile vezir kanadında karşı oyun arayabilirdi. 32...Qd5 ile vezirleri değiştirmek de daha uzun direnç sağlardı (Motor: +5.1), ama o noktada oyun zaten kaybedilmişti.' },
    { q: 'Siyahın şah kanadı saldırısı (...h5-h4-h3, ...Bxg2) neden işe yaramadı?', a: 'Saldırı için yeterli taş yoktu: Siyahın kaleleri ve veziri d6 piyonunu durdurmakla meşguldü. Fil ve h3 piyonu tek başlarına Beyaz şahını tehdit edemedi. Beyaz ise merkezde (Rf4, Re3, Nf5) taşlarını şah kanadına kaydırdı ve g7’ye saldırdı.' },
    { q: '33.Nxg7 sonrası Siyah şahla alsaydı ne olurdu?', a: '33...Kxg7 34.Rg3+ Qg6 35.Rxf7+! Kxf7 36.Qf4+ Ke6 37.Rxg6+ ile Beyaz veziri yine kazanır (Motor: +6.6). Şah açıktadır ve Beyazın taşları hücuma hazırdır.' },
  ],
  sources: [
    { title: 'Chess.com: Boris Spassky and the Leningrad Variation of the Nimzo-Indian', url: 'https://www.chess.com/article/view/boris-spassky-and-the-leningrad-variation-of-the-nimzo-indian' },
    { title: 'ChessBase: The Superbet Chess Classic starts – A Chess History of Bucharest', url: 'https://en.chessbase.com/post/the-superbet-chess-classic-starts-a-chess-history-of-bucharest' },
    { title: 'Wikipedia: Boris Spassky', url: 'https://en.wikipedia.org/wiki/Boris_Spasky' },
    { title: 'Wikipedia: Alexander Tolush', url: 'https://en.wikipedia.org/wiki/Alexander_Tolush' },
    { title: 'Wikipedia: Nimzo-Indian Defence (Leningrad Variation)', url: 'https://en.wikipedia.org/wiki/Nimzo-Indian_Defence' },
    { title: 'John Emms: Nimzo-Indian Defence (Leningrad bölümü, archive.org)', url: 'https://archive.org/download/CHESSGrandmaster/Nimzo-IndianDefence-byJohnEmms.pdf' },
  ],
  exercises: [
    { id: 'ss-1', kind: 'tekrar', plan: true, title: 'At merkeze',
      source: 'Spasski – Smislov, Bükreş 1953 (31. hamle)',
      fen: 'r4rk1/p4pp1/3Pq3/1pp1P3/5R2/2P1N2p/P2Q2bP/4R1K1 w - - 0 31',
      prompt: 'Beyazın d6’da geçer piyonu, e5’te destek piyonu var. Siyah g2’yi aldı. e3 atı nereye gitmeli?',
      hint: 'At d6’yı destekleyip e7 ve g7’ye saldırabileceği bir kareye gitsin.',
      line: ['Nf5'],
      accept: { 0: ['Ng4'] },
      explanation: '**31.Nf5!** At d6’yı destekler, e7 ve g7’ye bakar. Motor 31.Ng4’ü de neredeyse aynı güçte görüyor (Nf5 +3.9, Ng4 +3.6).',
      link: 'Geçer piyonun önünü at destekler: Siyahın taşları hem piyonu hem şahı savunamaz.' },
    { id: 'ss-2', kind: 'tekrar', plan: false, title: 'Nxg7! çatal',
      source: 'Spasski – Smislov, Bükreş 1953 (33. hamle)',
      fen: '3rr1k1/p4pp1/3Pq3/1pp1PN2/5R2/2P1R2p/P2Q2bP/6K1 w - - 4 33',
      prompt: 'Siyah ...Rad8 ile d6 piyonuna saldırdı. Spasski’nin bitirici hamlesini bulun.',
      hint: 'f5’teki at g7’yi alırsa hangi taşlara saldırır?',
      line: ['Nxg7'],
      explanation: '**33.Nxg7!** At e6’daki vezire ve e8’deki kaleye saldırır; 33...Rxd6 34.Nxe6 ile vezir düşer. Motor: Nxg7 +6.8, sonraki en iyi hamle +4.9.',
      link: 'Geçer piyon (d6) Siyahın kalelerini bağladı; at bu bağdan yararlandı.' },
    { id: 'ss-3', kind: 'transfer', plan: false, title: 'Leningrad’da c5’i sorgulamak',
      source: 'Spasski – Keres, Adaylar çeyrek finali, Riga 1965 (24. hamle)',
      fen: 'r1bbr1k1/pp1nqpn1/3p4/2pP2p1/NPP1p3/P1N1P3/3QB1PP/R3BRK1 w - - 5 24',
      prompt: 'Yine Leningrad sistemi ve yine Spasski. Beyazın d5 piyonu alan veriyor. Siyahın c5 piyonu b4 piyonuyla karşı karşıya. Hamle sizde.',
      hint: 'b-piyonuyla c5’i alın.',
      line: ['bxc5'],
      explanation: '**24.bxc5!** Siyahın piyon zinciri dağılır; ...Nxc5 sonrası Beyaz atla değişip d-piyonunu geçer yapacak. Motor: bxc5 +2.4, sonraki en iyi hamleler 0.0.',
      link: 'Smislov maçında e5 kırılması d-piyonunu serbest bıraktı; Keres maçında c5 piyonunun alınması aynı işi görüyor.' },
    { id: 'ss-4', kind: 'transfer', plan: false, title: 'd6 için yolu açmak',
      source: 'Spasski – Keres, Adaylar çeyrek finali, Riga 1965 (25. hamle)',
      fen: 'r1bbr1k1/pp2qpn1/3p4/2nP2p1/N1P1p3/P1N1P3/3QB1PP/R3BRK1 w - - 0 25',
      prompt: 'Siyah 24...Nxc5 ile geri aldı. Siyahın d6 piyonu d5 piyonunu durduruyor. Beyaz nasıl ilerler?',
      hint: 'c5 atını değişin; d6 piyonu alınca d5 ilerleyebilir.',
      line: ['Nxc5'],
      explanation: '**25.Nxc5! dxc5 26.d6** ve d-piyonu Siyah taşlarının arasına girer. Motor: Nxc5 +2.7, sonraki en iyi hamle +0.6.',
      link: 'İki maçta da Spasski, Leningrad sisteminin d5 piyonunu d6’ya kadar ilerletti.' },
  ],
};
