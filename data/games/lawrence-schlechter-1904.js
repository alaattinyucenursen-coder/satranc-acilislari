// Thomas Francis Lawrence – Carl Schlechter, Cambridge Springs turnuvası, Cambridge Springs 1904 (12. tur). Kaynak: PgnMentor (Schlechter.pgn).
export default {
  id: 'lawrence-schlechter-1904',
  theme: '...d4 ve ...e5 ile alan, sonra g-hattından şaha saldırı',
  white: 'Thomas Francis Lawrence', black: 'Carl Schlechter',
  whiteShort: 'Lawrence', blackShort: 'Schlechter',
  event: 'Cambridge Springs turnuvası, 12. tur', site: 'Cambridge Springs', year: 1904, eco: 'B23',
  variation: 'Kapalı Sicilya, 2.Nc3 e6 3.g3 d5 4.Bg2 Nf6',
  result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. Bg2 Nf6 5. d3 Be7 6. Nge2 Nc6 7. O-O d4 8. Nb1 h5 9. h3 e5 10. f4 Bd7 11. Nd2 Qc8 12. f5 g6 13. fxg6 fxg6 14. Nc4 Qc7 15. Bg5 O-O 16. Qd2 b5 17. Na3 Qa5 18. Qc1 Nh7 19. Bh6 Rxf1+ 20. Bxf1 g5 21. c4 b4 22. Nc2 Qc7 23. h4 gxh4 24. Qd2 Kh8 25. Ne1 Rg8 26. Kh2 Qd6 27. gxh4 Rg6 28. Bg5 Nxg5 29. hxg5 Bxg5 30. Qc2 Qf6 31. Bg2 Qf2 32. Ng1 Bf4+ 33. Kh1 Qh4+ 0-1`,


  summary: 'Cambridge Springs 1904’ün 12. turunda (13 Mayıs) Schlechter, kapalı Sicilya’ya **3...d5** ile karşılık verdi (bugünkü adıyla Korçnoy varyantı). Lawrence’ın 7.O-O hamlesinden sonra **7...d4** ile c3 atını b1’e geri gönderdi, **8...h5** ile g4 ilerleyişini frenledi ve **9...e5** ile d4–e5 zincirini kurdu: bu, Şah Hint’in renkleri değiştirilmiş hâlidir ve Siyah fazladan bir merkez alanıyla oynar. Beyazın tek aktif fikri f4-f5’ti; ama **12.f5** e5 karesini Siyaha bıraktı, 13.fxg6 fxg6 ise f-hattını Siyaha da açtı. Asıl kırılma 19. hamlede geldi: Lawrence 19.Bxe7 ile sade bir oyunu seçmek yerine **19.Bh6?** oynadı, Schlechter kaleleri değişip **20...g5!** ile bu fili h6’ya hapsetti. Ardından vezir kanadında **21...b4** ile alan aldı, 23.h4 gxh4 ile g-hattını açtı, şahını h8’e, kalesini g8’e getirdi. 27...Rg6 ile kapana kısılmış fil düşmek üzereyken Lawrence onu 28.Bg5 ile verdi; **28...Nxg5! 29.hxg5 Bxg5** bir piyon kazandırdı ve Beyaz şahının önünde tek bir piyon bırakmadı. Kara karelerde Siyahın fili ve veziri hükmetti; **32.Ng1??** sonrası **32...Bf4+ 33.Kh1 Qh4+** matı zorladı ve Lawrence terk etti. Siyahın zaferi, sabırlı bir konumsal oyunun (alan, zincir, iyi-kötü fil farkı) doğal biçimde şah saldırısına dönüşmesinin güzel bir örneğidir.',
  intro: '1.e4 c5 2.Nc3 e6 3.g3 d5 dizisi 365Chess veritabanında “kapalı Sicilya, Korçnoy varyantı” (B23) adıyla geçer. Siyahın fikri basittir: Beyaz g3-Bg2-d3 kuruluşunu tamamlamadan merkezde hemen ...d5 ile hak iddia etmek. Beyazın burada üç ana yanıtı vardır: en sık oynanan **4.exd5** (merkezi açar; 4...exd5 5.d4 ile izole piyon yapıları doğabilir), **4.d3** ve bu oyundaki **4.Bg2**. 4.Bg2 e4 piyonunu uzun çaprazdan korur ama ...d4 ilerleyişine izin verir; Siyah o zaman c3 atını tempo kazanarak kovalar ve merkezde alan sahibi olur. Bu oyunda Schlechter ...d4’ü önce gelişmeyi tamamlayıp Beyaz rok yaptıktan sonra oynadı ve ...e5 ile bir piyon zinciri kurdu; ortaya çıkan yapı, Beyazın f4-f5 ile, Siyahın ise vezir kanadında ...b5-b4 ve şah kanadında ...h5/...g5 ile oynadığı ters çevrilmiş bir Şah Hint’tir. Motor açılışın ilk on hamlesini eşite yakın görüyor (yaklaşık −0.3/−0.5); farkı açılış değil, Beyazın 12–21. hamleler arasındaki planlama hataları yarattı. Lawrence, Londra’nın güçlü bir kulüp oyuncusuydu (City of London kulübünün altı kez şampiyonu) ve bu turnuva, bu düzeydeki ilk uluslararası sınavıydı; Schlechter ise “Steinitz teorisinin parlak temsilcisi” sayılan, önce konumsal üstünlük biriktirip sonra saldıran bir ustaydı. Bu oyun o tarifin ders kitabı örneği.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'g3-Bg2, d3, Nge2 ve rokla kapalı Sicilya kuruluşu kurmak; e4 piyonunu g2 filiyle desteklemek ve merkezi kapalı tutmak.',
      '...d4 sonrası c3 atını Nb1-d2-c4 yoluyla yeniden yerleştirmek; c4 atı e5 ve d6 karelerine baskı yapar, b5 ilerleyişiyle kovalanırsa a3 üzerinden c2’ye dolaşır.',
      'Ters Şah Hint yapısının tek gerçek kırılma hamlesi olan **f4** ile e5 zincirine saldırmak; burada doğru devam çoğu zaman **fxe5** ile e5 karesini açmak ve Nf4-d5 manevralarına yer bulmaktır (12.fxe5 Motor: +0.2).',
      'f5 ilerleyişiyle şah kanadında alan almak istediyse, f-hattı açıldıktan sonra kaleyi değişime bırakmamak ve atlarını f4/d5’e bağlamak (15.Nf4! fikri).',
      'Kara kareli fili g5’te e7 filiyle değişmek (19.Bxe7); Siyahın iyi kara kareli filinden kurtulmak, kendi şahının etrafındaki kara kareleri korumanın en emin yolu.',
      'Siyahın ...g5’inden sonra h3-h4 ile g-hattını kendi lehine açmak ya da şahı h1/h2’ye çekip Ng3-f5 ile savunmayı örgütlemek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**3...d5** ile Beyaz kuruluşunu tamamlamadan merkezde hak iddia etmek; Beyaz rok yapıp f-piyonunu henüz oynamamışken **7...d4** ile c3 atını tempo kaybettirerek kovalamak.',
      '**...e5** ile d4–e5 zincirini kurmak: Siyah, Şah Hint’in Beyaz tarafını bir tempo eksiğiyle ama merkezde ek alanla oynar; d4 piyonu Beyaz atlarına c3 ve e3 karelerini kapatır.',
      '**...h5** ile g4 ilerleyişini önlemek, gerekirse ...h4 ile g3 piyonunu yoklamak; şahını f-hattı açılınca rokla güvenceye almak ve f-hattında kaleleri değişmek.',
      '**...b5-b4** ile vezir kanadında alan almak, c4 ve a3’teki Beyaz atlarını kovalamak ve Beyazın c4 hamlesinden sonra vezir kanadını kilitlemek.',
      'Beyazın kara kareli filini **...g5** ile h6’ya hapsetmek; böylece aslında “bir taş eksiği” ile oynayan rakibe karşı geri kalan kuvvetlerle saldırmak.',
      'g-hattını açmak (...gxh4), şahı h8’e, kaleyi g8–g6’ya getirmek ve kara karelerde fil + vezir ile Beyaz şahına girmek (...Nxg5, ...Bxg5, ...Qf6-f2, ...Bf4+, ...Qh4+).',
    ] },
  },
  critical: [
    { move: '7b', title: '...d4: alan ve tempo', text: 'Beyaz rok yaptıktan sonra Siyah d4’e ilerler. c3 atının en doğal çekilme karesi e2 dolu olduğu için at b1’e döner (8.Nb5 a6 ya da 8.Na4 de mümkündü, ikisi de daha iyi değil). Siyah merkezde alan kazanır ve ...e5 ile zinciri kurmaya hazırlanır. Motor rok yerine 7.exd5 exd5 8.Bg5’i öneriyordu (+0.1): merkezi açmak, ...d4’ün yaratacağı kapalı yapıyı engellerdi. Maç hamlesinden sonra Motor: −0.5; Siyah zaten rahat.' },
    { move: '12w', title: '12.f5: e5 karesini vermek', text: 'Ters Şah Hint yapısında Beyazın f-piyonu iki şey yapabilir: e5’te alıp hatları açmak ya da f5’e ilerleyip şah kanadında alan almak. 12.fxe5 Nxe5 13.Nf4 ile Beyaz atını f4’e, sonra d5/g6’ya bağlar ve Motor’a göre küçük bir avantaj alır (+0.2). 12.f5 ise e5 karesini sonsuza dek Siyaha bırakır ve 12...g6 ile hemen sorgulanır (Motor: −0.6). Lawrence’ın oyunu buradan itibaren yavaş yavaş kaydı.' },
    { move: '15w', title: '15.Nf4! fırsatı kaçıyor', text: 'Siyah henüz rok yapmamışken Beyazın taktik bir imkânı vardı: 15.Nf4! exf4 16.Bxf4 Qc8 17.Nd6+ Bxd6 18.Bxd6 ve Siyah şahı merkezde kalır, Beyaz f-hattında kalesiyle f6’ya baskı kurar; Motor bunu eşit görüyor (−0.1). Maçtaki 15.Bg5 ise sakin görünse de Siyahın rok yapmasına izin verdi ve Motor’a göre Siyah küçük bir üstünlükle devam etti (−0.7/−0.9).' },
    { move: '19w', title: 'Bh6? fil kendi kendine hapse giriyor', text: 'Partinin kilit anı. 19.Bxe7 Nxe7 20.c3 ile Beyaz kara kareli filini Siyahın iyi filiyle değişir; Siyah üstün ama oyun dengede tutulabilir (Motor: −1.1/−1.2). 19.Bh6? Rxf1+ 20.Bxf1 g5! sonrası ise fil h6’da kalır: geri dönüş yolu g5 piyonuyla kapalıdır ve yıllarca orada oturup oyuna katılmaz. Motor maç hamlesinden sonra −2.2, iki hamle sonra −2.9 gösteriyor.' },
    { move: '20b', title: '...g5!: fili kapatmak', text: 'Tek bir piyon hamlesi Beyazın en aktif taşını oyun dışı bırakır. g5 piyonu h4 ile sökülmeye çalışılırsa g-hattı Siyahın lehine açılır; h4 oynanmazsa fil sonsuza dek h6’da kalır. Motor 20...g5’i (−2.8) en iyi hamle olarak gösteriyor; 20...c4 (−2.4) de iyi ama planla daha az uyumlu.' },
    { move: '24w', title: '24.Qd2? g-hattını Siyaha bırakmak', text: 'Beyaz 23.h4 ile g5’i sökmeye çalıştı (Motor’a göre tek makul hamle; 23.a3 ya da 23.g4 −4.9). 23...gxh4 sonrası 24.gxh4 ya da 24.Ne1 gerekliydi (Motor: −3.1/−3.4). 24.Qd2 ile Beyaz bir tempo kaybetti, Siyah 24...Kh8 ve 25...Rg8 ile g-hattını ele geçirdi (Motor: −4.1 → −4.6).' },
    { move: '28b', title: '...Nxg5! hangi taşla almalı?', text: '27...Rg6 sonrası h6 filinin kaçacak yeri yoktu; Lawrence onu 28.Bg5 ile en azından bir taşla değiştirmek istedi. Doğru alım 28...Nxg5!: 29.hxg5 Bxg5 ve Siyah hem bir piyon kazanır, hem fil çiftini korur, hem de Beyaz şahının önünde hiç piyon kalmaz (Motor: −5.3). 28...Bxg5 29.hxg5 Nxg5 (−3.4) ya da 28...Rxg5 (−2.7) Siyahın en iyi saldırı taşlarından birini değişirdi.' },
    { move: '32w', title: 'Ng1?? ve mat ağı', text: 'Oyun zaten kayıptı: 32.Ng3 Qf4 33.Bh3 ile Beyaz direnebilirdi ama Motor −6.9 gösteriyor. 32.Ng1?? ise Beyaz şahının son kaçış yolunu kapattı: 32...Bf4+ 33.Kh1 Qh4+ 34.Nh3 Bxh3 35.Kg1 Be3+ ve mat. 34.Bh3 Bxh3 35.Ngf3 Bg2+ 36.Kg1 Be3+ 37.Qf2 Bxf2# de mattır. Lawrence 33...Qh4+ sonrasında terk etti.' },
  ],
  lessons: [
    '2.Nc3 e6 3.g3 d5 yapısında Siyah, Beyaz kuruluşunu tamamlamadan merkezde hak iddia eder. Beyaz merkezi açmak istemiyorsa (4.exd5 ya da 7.exd5 yerine kapalı kuruluşta ısrar ederse) ...d4 ile c3 atının tempo kaybetmesine ve Siyahın alan kazanmasına razı olmalıdır.',
    '...d4–...e5 zinciri kurulduğunda yapı ters çevrilmiş bir Şah Hint’tir. Beyazın kırılma hamlesi f4’tür; ancak ardından **fxe5** ile hatları açmak çoğu zaman f5 ile kilitlemekten iyidir, çünkü f5 e5 karesini rakibe kalıcı olarak verir.',
    'f-hattı açıldığında kaleleri değişmek, şah kanadında daha az alanı olan taraf için savunmanın en kolay yoludur; Schlechter 19...Rxf1+ ile Beyazın tek açık hattını etkisizleştirdi.',
    'İyi kara kareli filini (e7’deki Siyah fili gibi) değişmek ile kendi filini rakip şahına doğru göndermek arasında seçim yaparken, filin geri dönüş yolunu hesaplayın: 19.Bh6? sonrası tek bir ...g5 hamlesi fili oyun dışı bıraktı.',
    'Rakibin bir taşı hapsolmuşsa, o kanattaki hatları açmak geri kalan kuvvetlerdeki üstünlüğü kullanmanın yoludur: ...gxh4, ...Kh8, ...Rg8-g6 planı tam olarak buydu.',
    'Değişim yaparken hangi taşla alacağınızı, sonra ortaya çıkacak hatlar ve kalan taşların gücü belirler: 28...Nxg5! saldırıda en değerli olan kara kareli fili korudu ve g-hattını tamamen açtı.',
    'Şahının önündeki f-, g- ve h-piyonları gitmiş bir şaha karşı kara karelerde fil ve vezir birlikte (…Bf4+ ve …Qh4+) mat ağı kurar; savunan tarafın her taşı şahın kaçış karelerini kapatmamaya dikkat etmelidir (32.Ng1??).',
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkezi şah piyonuyla tutar ve fil ile vezire yol açar.',
      amac: 'Merkezde d5 ve f5 karelerini kontrol etmek, hızlı gelişip rok yapmak.',
      neden: 'Lawrence’ın döneminde 1.e4 en yaygın açılış hamlesiydi ve Lawrence kapalı, sağlam kuruluşları seven bir oyuncuydu; e4’ü sonradan g3-Bg2 ile destekleyecek. Motor bu hamleyi en iyi buluyor (+0.4).',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışı; Siyahın ...d5 ile kurduğu Vezir Gambiti yapıları (turnuvaya adını veren Cambridge Springs savunması da buradan çıkar). Motor: +0.2.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; hamle sırasına göre d4 ya da e4 yapılarına geçer. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: '1...c5 ile Sicilya Savunması: Siyah d4 karesini yandan, c-piyonuyla kontrol eder.',
      amac: 'Simetrik olmayan bir yapı kurup Beyazın d4 ilerleyişine karşı c-hattını ve vezir kanadı çoğunluğunu kullanmak.',
      neden: 'Sicilya, simetrik olmayan yapısıyla daha zayıf bir rakibe karşı kazanma şansı arayan Siyah için uygun bir seçimdir. Motor 1...e5 (+0.2) ile 1...c5’i (+0.3) neredeyse eşit görüyor.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; dönemin en klasik yanıtı. Simetrik yapı nedeniyle Siyahın kazanma şansı daha az. Motor: +0.2.' },
        { move: '1...e6', text: 'Fransız Savunması; ...d5 ile merkezi hemen sorgular. Motor: +0.35.' },
      ],
    },
    '2w': {
      text: '2.Nc3 ile at gelişir ve d5 karesini kontrol eder; Beyaz d4’ü hemen oynamaz.',
      amac: 'Kapalı Sicilya’ya hazırlık: g3-Bg2, d3 ve f4 ile şah kanadında oynamak, açık Sicilya’nın teorik keskin varyantlarından kaçmak.',
      neden: '2.Nc3, Siyahın hangi kuruluşu seçeceğini görmeden atı gelişir ve ...d5’i zorlaştırır. Motor 2.Nf3’ü biraz daha iyi buluyor (+0.5), ama fark küçük; Lawrence kapalı ve konumsal bir oyunu tercih etti.',
      diger: [
        { move: '2.Nf3', text: '3.d4 ile açık Sicilya’ya hazırlık; en keskin ve en çok oynanan yol. Motor: +0.5.' },
        { move: '2.c3', text: 'Alapin Varyantı: d4’ü piyonla destekleyip merkez kurmak. Motor: +0.3.' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah ...d5’i hazırlar ve kara kareli file e7 yolunu açar.',
      amac: 'Beyaz kapalı kuruluşa geçerse merkezde ...d5 ile Fransız tarzı bir yapı kurmak.',
      neden: 'e6, en esnek hamlelerden biridir: Beyaz 3.Nf3 ve 4.d4 ile açık oyuna geçerse Siyah Taimanov/Kan yapıları kurabilir, 3.g3 ile kapalı oynarsa ...d5 ile merkeze girer. Motor 2...d6 ve 2...Nc6’yı aynı düzeyde görüyor (+0.35/+0.45).',
      diger: [
        { move: '2...Nc6', text: 'Kapalı Sicilya’nın ana yolu; 3.g3 g6 4.Bg2 Bg7 5.d3 d6 ile klasik simetrik yapı (Spasski ve Smislov’un sevdiği kuruluş). Motor: +0.45.' },
        { move: '2...d6', text: 'Esnek bir hamle; 3.Nge2 e5 ya da ...g6 ile devam. Motor: +0.35.' },
      ],
    },
    '3w': {
      text: '3.g3: fil g2’ye gelecek; kapalı Sicilya kuruluşu.',
      amac: 'Fili uzun çapraza yerleştirip e4 piyonunu desteklemek, d3 ve f4 ile şah kanadında alan almak.',
      neden: 'Bu hamle Siyaha merkezde hemen ...d5 imkânı verir, çünkü g2 fili henüz e4’ü korumuyor. Bu yüzden Motor 3.Nf3 (açık Sicilya’ya dönüş, +0.5) ya da 3.Nge2’yi (+0.3) tercih ediyor; 3.g3 sonrası dengedir (0.0).',
      diger: [
        { move: '3.Nf3', text: '4.d4 ile açık Sicilya’ya, Taimanov/Kan yapılarına geçiş. Motor: +0.5.' },
        { move: '3.Nge2', text: 'g3 hamlesini erteleyip esnek kalmak; d4 ya da g3 seçeneği açık. Motor: +0.3.' },
      ],
    },
    '3b': {
      text: '3...d5! Siyah Beyazın kuruluşunu tamamlamasını beklemeden merkeze saldırır.',
      amac: 'e4 piyonunu sorgulamak; Beyaz exd5 oynarsa açık merkezde rahat gelişmek, oynamazsa ...d4 ile alan almak.',
      neden: 'Bu tam olarak 3.g3’ün zayıflığından yararlanan hamledir: Bg2 henüz gelmediği için e4 yalnızca c3 atıyla korunur. 365Chess bu sırayı “Korçnoy varyantı” olarak adlandırır ve istatistiklerde Siyah iyi skor yapar. Motor: 0.0.',
      diger: [
        { move: '3...Nc6', text: 'Klasik kuruluş; 4.Bg2 Nf6 5.d3 d5 ile benzer yapılara geçebilir ama Beyazın Bg2’si gelmiş olur. Motor: +0.1.' },
        { move: '3...Nf6', text: '4.e5 Nd5 5.Nxd5 exd5 ile Beyaz alan kazanır. Motor: +0.3.' },
      ],
    },
    '4w': {
      text: '4.Bg2 e4’ü uzun çaprazdan destekler ve Beyazın kuruluşunu tamamlar.',
      amac: 'Merkezi korumak ve ...dxe4 sonrası Nxe4 ile atı merkeze getirmek; kapalı kuruluşu sürdürmek.',
      neden: 'Bu hamleyle Beyaz merkezi açmayı reddeder ve Siyaha ...d4 ile alan alma şansı verir. 365Chess veritabanında en çok oynanan yanıt 4.exd5’tir; Motor da 4.exd5 exd5 5.d4’ü en sağlam yol olarak görüyor (0.0). 4.Bg2 sonrası Motor: −0.2.',
      diger: [
        { move: '4.exd5', text: '4...exd5 5.d4 cxd4 6.Qxd4 ile merkez açılır; Siyahın d5 piyonu izole kalabilir. En popüler devam. Motor: 0.0.' },
        { move: '4.d3', text: 'e4’ü piyonla korur; 4...d4 5.Nce2 sonrası benzer kapalı yapılar. Motor: −0.1.' },
        { move: '4.f4', text: 'Grand Prix tarzı; 4...dxe4 5.Nxe4 Be7 ile Siyah rahat. Motor: −0.1.' },
      ],
    },
    '4b': {
      text: '4...Nf6: Siyah önce gelişir ve e4’e baskıyı artırır; ...d4 kararını sonraya bırakır.',
      amac: 'Merkezdeki gerilimi koruyarak Beyazı bir karar vermeye zorlamak; rok yapmaya hazırlanmak.',
      neden: 'Hemen 4...d4 5.Nce2 sonrası at e2’den kolayca yeniden yerleşir (Motor: −0.2). Schlechter önce gelişip Beyazın Nge2 ve rok yapmasını bekledi; böylece ...d4 geldiğinde at e2 karesine dönemeyecek ve b1’e gitmek zorunda kalacaktı. 4...dxe4 5.Nxe4 merkezi açar (+0.3).',
      diger: [
        { move: '4...d4', text: '5.Nce2 e5 6.d3 ile Siyah alan alır ama Beyaz atı e2’den g3/f4’e rahatça dolaşır. Motor: −0.2.' },
        { move: '4...dxe4', text: '5.Nxe4 Nc6 6.d3 ile açık bir oyun; g2 fili uzun çaprazda güçlenir. Motor: +0.3.' },
      ],
    },
    '5w': {
      text: '5.d3 ile e4 piyonu bir kez daha desteklenir; Beyaz merkezde kapalı yapıda ısrar eder.',
      amac: 'Merkezi sağlamlaştırıp Nge2, O-O ve f4 planına geçmek.',
      neden: 'Beyaz exd5 ile merkezi açmayı istemedi. Motor 5.e5 Nfd7 6.f4’ü (Fransız tarzı alan, +0.0) ya da 5.exd5’i benzer görüyor; 5.d3 sonrası −0.1, yani hâlâ denge.',
      diger: [
        { move: '5.e5', text: 'Atı d7’ye kovup Fransız ilerleyiş yapısına geçmek: 5...Nfd7 6.f4. Motor: 0.0.' },
        { move: '5.exd5', text: '5...exd5 6.d4 ile merkezi açmak; Siyahın d5 piyonu hedef olabilir. Motor: 0.0.' },
      ],
    },
    '5b': {
      text: 'Fil e7’ye gelişir; Siyah kısa rok için hazırlanır.',
      amac: 'Gelişmeyi tamamlamak ve şahı güvenceye almak; e7 fili d8–h4 çaprazında kara karelerde ileride önemli rol oynayacak.',
      neden: 'Fil d6’ya gelse e5 ilerleyişiyle kovalanabilir ya da ...e5 sonrası d6 piyonunu kapatır; e7 en sağlam yer. Motor 5...d4 ve 5...Nc6’yı da aynı düzeyde görüyor (−0.1/0.0).',
      diger: [
        { move: '5...d4', text: '6.Nce2 e5 ile hemen alan almak; at e2’den yeniden yerleşir. Motor: −0.1.' },
        { move: '5...Nc6', text: '6.exd5 exd5 7.Bg5 Be7 ile benzer yapı. Motor: 0.0.' },
      ],
    },
    '6w': {
      text: 'At e2’ye gelişir; f-piyonu f4 için serbest kalır.',
      amac: 'Kapalı Sicilya’nın klasik kuruluşu: Nge2, O-O, f4; at e2’den ileride f4 ya da g3’e gidebilir.',
      neden: 'Bu hamlenin bir yan etkisi var: e2 karesini doldurduğu için ...d4 geldiğinde c3 atı artık e2’ye çekilemez. Motor 6.e5 ya da 6.exd5’i öneriyordu (0.0); 6.Nge2 sonrası −0.3.',
      diger: [
        { move: '6.e5', text: '6...Nfd7 7.f4 Nc6 8.Nf3 ile alan; Fransız ilerleyiş yapısına benzer. Motor: 0.0.' },
        { move: '6.exd5', text: '6...exd5 7.Bg5 Nc6 8.Nge2 ile merkezi açmak. Motor: 0.0.' },
        { move: '6.f4', text: '6...d4 7.Nce2 b5 8.Nf3; at e2’ye dönebildiği için daha esnek. Motor: −0.2.' },
      ],
    },
    '6b': {
      text: 'At c6’ya gelişir; d4 ve e5 karelerini kontrol eder.',
      amac: '...d4 ve ...e5 için hazırlık; Siyahın tüm taşları zincirin destekçisi olacak.',
      neden: 'Motor hemen 6...d4’ü biraz daha iyi buluyor (−0.4): 7.Nb1 e5 ile aynı yapı bir tempo önce gelir. Schlechter gelişmeyi tercih etti; çünkü Beyaz 7.exd5 oynasa bile 7...exd5 ile rahat bir oyun alacaktı.',
      diger: [
        { move: '6...d4', text: '7.Nb1 e5 8.h3 h5 ile oyundaki yapıya bir tempo önce varılır. Motor: −0.4.' },
        { move: '6...O-O', text: '7.exd5 exd5 8.Bg5 d4 ile benzer oyun. Motor: +0.1.' },
      ],
    },
    '7w': {
      text: 'Beyaz rok yapar ve şahını güvenceye alır.',
      amac: 'Şahı emniyete alıp f4 ilerleyişine geçmek; kale f1’de f-hattına hazırdır.',
      neden: 'Rok doğal görünür ama ...d4’e izin verir; at e2’ye dönemeyeceği için tempo kaybedecek. Motor 7.exd5 exd5 8.Bg5’i öneriyordu (+0.1): merkezi açmak ...d4’ün gücünü azaltırdı. Rok sonrası Motor: −0.3.',
      diger: [
        { move: '7.exd5', text: '7...exd5 8.Bg5 O-O 9.O-O ile Siyahın d5 piyonu baskı altında; denge. Motor: +0.1.' },
        { move: '7.f4', text: '7...d4 8.Nb1 c4! ile Siyah vezir kanadında hemen oyun bulur. Motor: −0.4.' },
      ],
    },
    '7b': {
      text: '7...d4! c3 atı kovalanır; Siyah merkezde alan kazanır.',
      amac: 'Beyazın atını kötü bir kareye göndermek ve d4 ile c3/e3 karelerini kontrol eden bir merkez piyonu kurmak.',
      neden: 'Zamanlama mükemmel: Beyaz rok yaptığı ve e2 dolu olduğu için at yalnızca b1, b5 ya da a4 gibi kötü karelere gidebilir. Motor bu hamleyi en iyi buluyor (−0.5); 7...O-O 8.exd5 exd5 eşitliğe izin verirdi.',
      diger: [
        { move: '7...O-O', text: '8.exd5 exd5 9.Bg5 d4 ile benzer ama Beyaz merkezi açmayı başarır. Motor: 0.0.' },
        { move: '7...dxe4', text: 'Merkezi açar; 8.Nxe4 Nxe4 9.Bxe4 sonrası Beyaz fili merkezde güçlenir ve Siyahın alan üstünlüğü kaybolur. Motor: +0.3.' },
      ],
    },
    '8w': {
      text: 'At b1’e çekilir; ileride d2 üzerinden c4’e gitmeyi planlar.',
      amac: 'Atı yeniden yerleştirmek: Nb1-d2-c4 ile e5 ve d6’ya baskı, ya da Na3-c4.',
      neden: 'At için iyi kare yoktur. 8.Nb5 a6 9.Na3 ile at kenara gider (−0.5), 8.Na4 ise atı uzun süre dışarıda bırakır (−0.65). b1, en azından d2 üzerinden merkeze dönüşü açık tutar. Motor: 8.Nb1 en iyi (−0.5).',
      diger: [
        { move: '8.Nb5', text: '8...a6 9.Na3 e5 10.f4 ile at a3’e gider; benzer. Motor: −0.5.' },
        { move: '8.Na4', text: '8...h5 9.h3 e5 10.b3; at a4’te kenarda kalır. Motor: −0.65.' },
      ],
    },
    '8b': {
      text: '8...h5: Siyah g4 ilerleyişini önler ve gerekirse ...h4 ile g3 piyonunu yoklar.',
      amac: 'Beyazın şah kanadında f4-g4 ile piyon fırtınasını frenlemek; ...h4 ile g3’e kaldıraç yaratmak.',
      neden: 'Ters Şah Hint yapısında Beyazın tek planı şah kanadında oynamaktır; ...h5 bu planı önceden bozar. Siyah henüz rok yapmamıştır, bu yüzden h-piyonunu itmek kendi şahını zayıflatmaz. Motor 8...e5 ile aynı düzeyde görüyor (−0.4).',
      diger: [
        { move: '8...e5', text: '9.f4 h5 10.h3 ile oyuna dönüş; aynı yapı. Motor: −0.4.' },
        { move: '8...O-O', text: '9.a4 e5 10.b3 ile daha sakin bir oyun; ...h5 imkânı kaybolur. Motor: −0.1.' },
      ],
    },
    '9w': {
      text: '9.h3 ile ...h4’e karşı g4 hazırlanır.',
      amac: '...h4 gelirse g4 ile şah kanadını kapatmak; g4 karesini Siyah atına ve filine vermemek.',
      neden: 'Beyaz ...h4-hxg3 ile g-hattının açılmasını önlemek ister. Motor bu hamleyi en iyi buluyor (−0.3); 9.f4 de aynı düzeyde.',
      diger: [
        { move: '9.f4', text: '9...e5 10.h3 h4 11.g4 ile aynı yapı. Motor: −0.35.' },
        { move: '9.Na3', text: '9...h4 10.f4 e5 11.Nc4; Siyah ...hxg3 ile hattı açabilir. Motor: −0.6.' },
      ],
    },
    '9b': {
      text: '9...e5: d4-e5 zinciri kurulur; ters çevrilmiş bir Şah Hint yapısı.',
      amac: 'Merkezi sabitlemek ve f4 karesini kontrol etmek; Beyazın f4 kırılmasına karşı e5’i güçlü bir dayanak yapmak.',
      neden: 'Siyah, Şah Hint’in Beyaz tarafını oynar: d4 piyonu Beyazın c3 ve e3 karelerini alır, Beyazın tek kırılma hamlesi f4 kalır. Motor 9...e5’i en iyi gösteriyor (−0.4); 9...h4 ve 9...Nh7 de benzer.',
      diger: [
        { move: '9...h4', text: '10.g4 e5 11.f4 g5 ile benzer yapı. Motor: −0.35.' },
        { move: '9...Nh7', text: '10.f4 e5 11.Nd2 g5 ile şah kanadına hemen müdahale. Motor: −0.4.' },
      ],
    },
    '10w': {
      text: '10.f4: Beyazın bu yapıdaki doğal hamlesi; e5 zincirine saldırır.',
      amac: 'f-hattını açmak ya da f5 ile şah kanadında alan almak; e5 piyonunu sorgulamak.',
      neden: 'f4 olmadan Beyazın aktif hiçbir planı yoktur; vezir kanadında Siyah ...c4 ve ...b5 ile daha hızlıdır. Motor 10.f4’ü en iyi buluyor (−0.4).',
      diger: [
        { move: '10.Na3', text: '10...h4 11.g4 Nh7 12.f4; at önce c4’e gider. Motor: −0.4.' },
        { move: '10.c3', text: 'Vezir kanadında d4’ü sorgulamak; 10...h4 11.g4 O-O. Motor: −0.5.' },
      ],
    },
    '10b': {
      text: 'Fil d7’ye gelişir; c8-h3 çaprazı vezire kalacak.',
      amac: 'Gelişmeyi tamamlamak ve vezire c8’den h3 piyonuna bakma imkânı açmak; uzun rok seçeneğini korumak.',
      neden: 'Motor 10...h4’ü daha iyi buluyordu (−0.4): 11.g4 g5 ile şah kanadı kapanır ve Beyazın f-piyonu tek başına kalır. 10...Bd7 sonrası Motor: −0.1; küçük bir gevşeklik, ama ciddi değil.',
      diger: [
        { move: '10...h4', text: '11.g4 g5! 12.fxg5 Nh7 ile Siyah kara kareleri ele geçirir. Motor: −0.4.' },
        { move: '10...Nh7', text: '11.a4 h4 12.g4 g5; at g5’e yönelir. Motor: −0.2.' },
      ],
    },
    '11w': {
      text: 'At d2’den c4’e yönelir.',
      amac: 'b1’deki atı oyuna sokmak; c4’ten e5’e ve d6’ya baskı kurmak.',
      neden: 'Motor 11.c3’ü (−0.2) ve 11.Na3’ü aynı düzeyde görüyor. d2 karesi ayrıca f3’e ve e4’e destek sağlar.',
      diger: [
        { move: '11.c3', text: 'd4 piyonunu sorgulamak; 11...Qc8 12.Kh2 h4 13.g4. Motor: −0.2.' },
        { move: '11.Na3', text: 'Atı a3-c4 yoluyla getirmek; 11...h4 12.g4 Nh7. Motor: −0.2.' },
      ],
    },
    '11b': {
      text: 'Vezir c8’e gelir; c8-h3 çaprazından h3 piyonuna bakar ve c7’ye geçebilir.',
      amac: 'h3 piyonuna baskı yaparak Beyazın g4 hamlesini zorlaştırmak; vezir c7’den e5’i destekleyebilir.',
      neden: 'Motor bu hamleyi en iyi buluyor (−0.2). ...Bxh3 tehdidi, Beyazın şah kanadında rahat hareket etmesini engeller.',
      diger: [
        { move: '11...h4', text: '12.g4 g5 13.fxg5 Nh7 ile kara kareler. Motor: −0.2.' },
        { move: '11...Nh7', text: '12.Nf3 h4 13.g4 g5; ama Beyaz f5 ile karşılık verir. Motor: +0.2.' },
      ],
    },
    '12w': {
      text: '12.f5 ile Beyaz şah kanadında alan alır, ama e5 karesi kalıcı olarak Siyaha kalır.',
      amac: 'g6 ve e6 karelerini kontrol etmek; ileride g4-g5 ile şah kanadında piyon fırtınası.',
      neden: 'Bu yapıda f5 çoğu zaman yanlıştır: Siyah zinciri artık kırılmaz, e5 güçlü bir dayanak olur. Motor 12.fxe5 Nxe5 13.Nf4’ü öneriyordu (+0.2): hatlar açılır ve Beyaz atı d5’e ya da g6’ya yönelir. 12.f5 sonrası Motor: −0.6.',
      diger: [
        { move: '12.fxe5', text: '12...Nxe5 13.Nf4 g5 14.Nd5 ile Beyaz aktif oyun alır. Motor: +0.2.' },
        { move: '12.Nc4', text: '12...Bxh3! 13.Nxe5 Nxe5 14.fxe5 Bxg2 ile Siyah g2 filini değişip Beyaz şahının çevresini zayıflatır. Motor: −0.9.' },
      ],
    },
    '12b': {
      text: '12...g6 ile f5 piyonu hemen sorgulanır.',
      amac: 'Beyazın şah kanadında alan kazanmasına izin vermemek; f-hattının açılmasını kendi lehine kullanmak.',
      neden: 'Siyah henüz rok yapmamıştır, bu yüzden g6 kendi şahını zayıflatmaz. f5 piyonu Beyaza alan verir; sökülmesi gerekir. Motor 12...g6’yı en iyi görüyor (−0.5).',
      diger: [
        { move: '12...Qc7', text: '13.a4 g6 14.Nc4 gxf5 ile benzer. Motor: −0.25.' },
        { move: '12...g5', text: 'Şah kanadını kapatmak; 13.a4 g4 14.h4. Motor: −0.25.' },
      ],
    },
    '13w': {
      text: 'Beyaz g6’da alır.',
      amac: 'f-hattını açmak ve Siyahın piyon yapısını değiştirmek.',
      neden: 'Bu değişim f-hattını yalnızca Beyaza değil Siyaha da açar ve Siyah yakında f8’den kaleyle karşılık verecek. Motor 13.Nc4’ü öneriyordu (−0.7): gerilimi korumak ve Siyahı karar vermeye zorlamak.',
      diger: [
        { move: '13.Nc4', text: '13...b5 14.Na3 a6 15.c3 ile gerilim korunur. Motor: −0.7.' },
        { move: '13.Rf2', text: '13...Rg8 14.a3 Qc7 15.fxg6 ile f-hattına hazırlık. Motor: −0.8.' },
      ],
    },
    '13b': {
      text: '13...fxg6: f-piyonuyla alınır; f-hattı açılır ve Siyah f8’e rok yapacak.',
      amac: 'Merkeze doğru almak; f-hattını kendi kalesi için açmak.',
      neden: 'f-piyonuyla almak e5’i korur ve f-hattını Siyahın kalesine açar. 13...Bxh3 14.Rxf6 Bxg2 15.gxf7+ karmaşık ve daha kötü (−0.7); 13...Kf8? 14.gxf7 ile denge (0.0). Motor: −0.9/−1.0.',
      diger: [
        { move: '13...Bxh3', text: '14.Rxf6 Bxg2 15.gxf7+ Kf8 ile karmaşık oyun; Beyaz f7 piyonuyla tehlikeli. Motor: −0.7.' },
        { move: '13...Kf8', text: '14.gxf7 Bxh3 15.Nf3; Siyah şahı açılır. Motor: 0.0.' },
      ],
    },
    '14w': {
      text: 'At c4’e gelir; e5 ve d6’ya baskı yapar.',
      amac: 'Atı en iyi kareye getirip e5’i sorgulamak ve Nd6+ ihtimalini oluşturmak.',
      neden: 'Motor 14.Nc4’ü en iyi buluyor (−0.9). 14.Kh2 ya da 14.h4 daha kötü (−1.4/−1.5).',
      diger: [
        { move: '14.Kh2', text: '14...h4 15.g4 Bxg4! fedasıyla Siyah h3 ve g4 karelerinden şaha saldırır. Motor: −1.4.' },
        { move: '14.h4', text: '14...Ng4 15.Nf3 O-O; g4 karesi Siyaha kalır. Motor: −1.5.' },
      ],
    },
    '14b': {
      text: 'Vezir c7’ye gelir ve e5’i destekler.',
      amac: 'e5 zincirini savunmak ve Nd6+ fikrini önlemek; uzun rok seçeneğini de açık tutmak.',
      neden: 'Motor 14...Qd8, 14...Nh7 ve 14...Qc7’yi neredeyse eşit görüyor (−1.0). 14...O-O ise daha az doğru (−0.8). Qc7, 15.Nf4 taktiğine bir imkân bırakır.',
      diger: [
        { move: '14...O-O', text: '15.Kh2 b5 16.Nd2 g5 ile sağlam. Motor: −0.8.' },
        { move: '14...Nh7', text: '15.Bh6 Qc7 16.c3 Ng5; at g5’e gelir. Motor: −0.9.' },
      ],
    },
    '15w': {
      text: '15.Bg5: fil f6 atını bağlar.',
      amac: 'Siyahın f6 atına baskı yapmak ve kara kareli fili aktif hale getirmek.',
      neden: 'Beyaz taktik bir fırsatı kaçırdı: 15.Nf4! exf4 16.Bxf4 Qc8 17.Nd6+ Bxd6 18.Bxd6 ile Siyah şahı merkezde kalır ve Beyaz feda edilen taş karşılığında yeterli inisiyatife sahip olur (Motor: −0.1). 15.Bg5 sonrası −0.7.',
      diger: [
        { move: '15.Nf4', text: '15...exf4 16.Bxf4 Qc8 17.Nd6+ Bxd6 18.Bxd6 Nh7 ile Beyaz taş eksiğine rağmen inisiyatife sahip; denge. Motor: −0.1.' },
        { move: '15.c3', text: '15...Be6 16.b4 Nd7; vezir kanadında oyun. Motor: −0.8.' },
      ],
    },
    '15b': {
      text: 'Siyah rok yapar; kale açık f-hattına gelir.',
      amac: 'Şahı güvenceye alıp f-hattında Beyaz kalesine karşı durmak.',
      neden: 'Motor 15...O-O’yu en iyi buluyor (−0.8). 15...Rf8 ya da 15...Nh7 de mümkündü ama rok hem şahı korur hem kaleyi oyuna sokar.',
      diger: [
        { move: '15...Rf8', text: '16.Bh6 Rf7 17.c3 Be6; şah e8’de kalır. Motor: −0.55.' },
        { move: '15...Nh7', text: '16.Bxe7 Kxe7 17.c3 b5; Siyah şahı merkezde. Motor: −0.25.' },
      ],
    },
    '16w': {
      text: 'Vezir d2’ye gelir; h6 karesine bakar.',
      amac: 'Bh6 için hazırlık; vezir ile kalenin f-hattında birleşmesi.',
      neden: 'Motor 16.Bh6 (−0.7) ve 16.a4’ü (−0.8) biraz daha iyi buluyor; 16.Qd2 −0.9. Vezir d2’de ileride ...Qa5 ile değişime zorlanabilir.',
      diger: [
        { move: '16.Bh6', text: '16...Rf7 17.a4 Kh7 18.Qd2; fil daha erken h6’ya gider. Motor: −0.7.' },
        { move: '16.a4', text: 'Vezir kanadında ...b5’i önlemek; 16...Nh7 17.Bxe7. Motor: −0.8.' },
      ],
    },
    '16b': {
      text: '16...b5! c4 atı kovalanır ve vezir kanadında alan alınır.',
      amac: 'c4 atını kötü bir kareye göndermek ve vezir kanadında ...b4 ile genişlemek.',
      neden: 'Motor 16...b5’i en iyi buluyor (−0.9). At c4’ten çekilirse Siyahın e5 ve d6 üzerindeki baskı kaybolur.',
      diger: [
        { move: '16...Rf7', text: '17.a4 Be6 18.b3 Nh7; sağlam ama pasif. Motor: −0.7.' },
        { move: '16...Be6', text: '17.Bh6 Rf7 18.a4 Kh7; filin c4 atına baskısı. Motor: −0.7.' },
      ],
    },
    '17w': {
      text: 'At a3’e gider.',
      amac: 'Atı ...b4 ile kovalanabilecek ama c2 üzerinden yeniden yerleşebilecek bir kareye götürmek.',
      neden: 'Motor 17.Na3’ü açık farkla en iyi buluyor (−0.85). 17.Bxf6 Bxf6 sonrası Siyah fil çiftiyle üstün (−1.6); 17.Nf4 exf4 18.Bxf4 ise artık işe yaramaz (−1.8), çünkü şah rok yapmıştır.',
      diger: [
        { move: '17.Bxf6', text: '17...Bxf6 18.Na3 a6 19.Qh6 ile Siyah fil çiftiyle üstün. Motor: −1.6.' },
        { move: '17.Nf4', text: '17...exf4 18.Bxf4 Qd8 19.e5; şah rok yaptığı için feda başarısız. Motor: −1.8.' },
      ],
    },
    '17b': {
      text: 'Vezir a5’e gelir; a3 atına ve a2’ye bakar, d2 vezirine değişim önerir.',
      amac: 'Vezir değişimine zorlayarak Beyazın şah kanadı saldırı potansiyelini azaltmak ya da vezir kanadında baskı kurmak.',
      neden: 'Motor 17...Rab8 (−0.8) ya da 17...Qb6’yı hafifçe tercih ediyor; 17...Qa5 −0.4. Vezir değişimi Siyahın lehine bir oyunsonu getirirdi, ama Beyaz değişimden kaçar.',
      diger: [
        { move: '17...Rab8', text: '18.c3 Be6 19.Nc2 b4; vezir kanadında baskı. Motor: −0.8.' },
        { move: '17...Qb6', text: '18.c3 Rac8 19.Nc2 b4 20.cxd4. Motor: −0.85.' },
      ],
    },
    '18w': {
      text: '18.Qc1 vezir değişimini önler ve h6’ya bakmayı sürdürür.',
      amac: 'Vezirleri tahtada tutarak şah kanadında saldırı şansını korumak; Bh6 için hazırlık.',
      neden: 'Bu pasif hamle Siyaha rahat bir oyun verdi. Motor 18.c3’ü öneriyordu (−0.65): vezir kanadında karşı oyun ve atın c2’ye gelmesi. 18.Qxa5 Nxa5 19.c3 de oynanabilirdi (−0.8). Maç hamlesi −1.3.',
      diger: [
        { move: '18.c3', text: '18...Nh7 19.Bxe7 Nxe7 20.Kh2; vezir kanadı açılır. Motor: −0.65.' },
        { move: '18.Qxa5', text: '18...Nxa5 19.c3 Kg7 20.Nc2; vezirsiz oyunda Beyaz daha rahat savunur. Motor: −0.8.' },
      ],
    },
    '18b': {
      text: 'At h7’ye çekilir ve g5 filine saldırır.',
      amac: 'Beyaz filini değişime ya da çekilmeye zorlamak; at h7’den g5’e gidebilir.',
      neden: 'Motor 18...c4’ü biraz daha iyi buluyordu (−1.4): vezir kanadında hemen açılım. 18...Nh7 −1.2; fark küçük ve Beyazı hemen bir karar vermeye zorladı.',
      diger: [
        { move: '18...c4', text: '19.Nb1 Nh7 20.Bxe7 Rxf1+; vezir kanadında açılım. Motor: −1.4.' },
        { move: '18...Qb6', text: '19.Qd2 Nh7 20.Bxe7 Nxe7; vezir değişimi tekrar önerilir. Motor: −1.0.' },
      ],
    },
    '19w': {
      text: 'Hata. 19.Bh6? fil şaha doğru gider ama orada hapsolacak.',
      amac: 'Siyah şahına yakın durup f8 kalesine saldırmak ve kara karelerde baskı kurmak.',
      neden: 'Doğru hamle 19.Bxe7! idi: Beyaz kara kareli filini Siyahın iyi filiyle değişir ve Siyahın kara karelerdeki üstünlüğünü azaltır (Motor: −1.1). 19.Bh6? Rxf1+ sonrası ...g5 ile fil oyundan çıkar. Maç hamlesi −2.2.',
      diger: [
        { move: '19.Bxe7', text: '19...Nxe7 20.c3 Rxf1+ 21.Bxf1 Qb6 22.Qd2 g5 ile Siyah üstün ama Beyaz direnebilir. Motor: −1.1/−1.2.' },
        { move: '19.Rxf8+', text: '19...Rxf8 20.Bxe7 Nxe7 21.Nb1 Qa6; kale değişimi önce. Motor: −1.4.' },
      ],
    },
    '19b': {
      text: 'Siyah f-hattında kaleleri değişir.',
      amac: 'Beyazın f-hattındaki tek aktif kalesini değişmek ve h6 filini desteksiz bırakmak.',
      neden: 'Motor 19...Rxf1+’i en iyi buluyor (−2.2). 19...Rf7 20.Rxf7 Kxf7 ile kale değişimi Beyazın lehine kalır (−1.5).',
      diger: [
        { move: '19...Rf7', text: '20.Rxf7 Kxf7 21.Bd2 Qb6; Beyaz fil geri döner. Motor: −1.5.' },
        { move: '19...Rf6', text: '20.Rxf6 Bxf6 21.c3 Qb6; daha az etkili. Motor: −1.4.' },
      ],
    },
    '20w': {
      text: 'Fille alınır; fil f1’e döner.',
      amac: 'Fili savunmaya getirmek; c4 ve d3’ü korumak.',
      neden: 'Motor 20.Qxf1’i öneriyordu (−2.0): vezir f-hattını tutar ve f7/f8 karelerine bakar. Fille alınca g2 boşalır ve Beyaz şahının etrafı zayıflar. Maç hamlesi −2.9.',
      diger: [
        { move: '20.Qxf1', text: '20...Nd8 21.Bc1 Ne6 22.c3 Rf8 23.Qd1; Beyaz vezir f-hattında aktif. Motor: −2.0/−2.2.' },
        { move: '20.Kxf1', text: '20...g5 21.h4 gxh4 22.Bf3 Kh8; şah merkeze yakın kalır. Motor: −2.8/−2.9.' },
      ],
    },
    '20b': {
      text: '20...g5! h6 fili geri dönemez; g5 piyonu h4 ilerleyişini de karşılar.',
      amac: 'h6 filini kalıcı olarak oyun dışı bırakmak; şah kanadında piyonları ilerleterek Beyaz şahına baskı.',
      neden: 'g5 filin tek kaçış yolunu kapatır: f8 kalesi gitmiştir, g7’den çıkış ...Kxg7 ile karşılanır. Motor 20...g5’i en iyi buluyor (−2.8); 20...c4 (−2.4) daha az amaçlı.',
      diger: [
        { move: '20...c4', text: '21.Nb1 g5 22.h4 Nd8; vezir kanadında açılım önce. Motor: −2.4.' },
        { move: '20...Qb6', text: '21.Bd2 c4 22.Kh1 Be6; fil d2’ye kurtulur. Motor: −2.4.' },
      ],
    },
    '21w': {
      text: '21.c4 ile Beyaz vezir kanadını kapatmak ister.',
      amac: '...c4 hamlesini önlemek ve d4 piyonunu sabitlemek; at c2 için yer açmak.',
      neden: 'Motor 21.h4’ü öneriyordu (−2.85): g5’i hemen sökmeye çalışmak, h6 filini kurtarma şansı verir. 21.c4 Siyahın ...b4 ile vezir kanadını kilitlemesine izin verdi ve b4 piyonu a3 atını kovaladı. Maç hamlesi −3.4.',
      diger: [
        { move: '21.h4', text: '21...gxh4 22.Kh1 Kh8 23.Qd2; g-hattı açılır ama fil h6’da güvende kalır. Motor: −2.85.' },
        { move: '21.Kh1', text: '21...Nd8 22.h4 Nf7 23.hxg5; şah g-hattından çekilir. Motor: −2.9.' },
      ],
    },
    '21b': {
      text: '21...b4: a3 atı kovalanır ve vezir kanadı Siyah lehine kilitlenir.',
      amac: 'Beyaz atını c2’ye ya da b1’e itmek; vezir kanadında Beyazın karşı oyununu tamamen öldürmek.',
      neden: 'Motor 21...b4’ü en iyi buluyor (−3.3). 21...Nd8 ile at f7’ye dolaşabilirdi (−3.25), ama b4 önce vezir kanadını kapatır, sonra Siyah şah kanadına dönebilir.',
      diger: [
        { move: '21...Nd8', text: '22.h4 Nf7 23.Bxg5 Nfxg5; at f7 üzerinden g5’e gelir. Motor: −3.25.' },
        { move: '21...Qb6', text: '22.h4 b4 23.Nb5 gxh4; aynı fikir ama farklı sıra. Motor: −3.1.' },
      ],
    },
    '22w': {
      text: 'At c2’ye çekilir.',
      amac: 'Atı e1 üzerinden g2/f3’e getirmek ya da b4’ü sorgulamak.',
      neden: 'Motor 22.Nc2’yi en iyi buluyor (−3.6). 22.Nb5 Nd8 23.h4 Nf7 ile at b5’te güzel görünür ama yalnızdır (−3.8).',
      diger: [
        { move: '22.Nb5', text: '22...Nd8 23.h4 Nf7 24.Bxg5; at b5’te aktif ama yalnız. Motor: −3.8.' },
        { move: '22.Nb1', text: '22...Kh8 23.Kh1 Rg8 24.h4; at b1’den d2’ye. Motor: −4.0.' },
      ],
    },
    '22b': {
      text: 'Vezir c7’ye döner.',
      amac: 'Veziri merkeze ve şah kanadına yakın tutmak; e5’i desteklemek ve h2 karesine çapraz baskı.',
      neden: 'Motor 22...Kh8’i öneriyordu (−3.9): g8 karesini kaleye açmak ve g-hattı planını hızlandırmak. 22...Qc7 −3.2; fark var ama plan aynı.',
      diger: [
        { move: '22...Kh8', text: '23.Kh1 Rg8 24.h4 gxh4 25.gxh4 Bxh4; g-hattı hemen açılır. Motor: −3.9.' },
        { move: '22...Nd8', text: '23.h4 Nf7 24.hxg5 Nhxg5; at f7’den h6 filine saldırır. Motor: −3.25.' },
      ],
    },
    '23w': {
      text: '23.h4: Beyaz g5 piyonunu sökmeye çalışır.',
      amac: 'h6 filini kurtarmak ve g-hattında şahını korumak.',
      neden: 'Motor bunu tek iyi hamle olarak görüyor (−3.2). 23.a3 b3 ya da 23.g4 h4 ile Siyah h6 filini tamamen kapatır ve −4.9 gösterir.',
      diger: [
        { move: '23.a3', text: '23...b3 24.h4 Qd6 25.hxg5; vezir kanadında zaman kaybı. Motor: −4.9.' },
        { move: '23.g4', text: '23...h4 24.Bg2 Qd6 25.Kh1; fil h6’da kalıcı olarak hapsolur. Motor: −4.9.' },
      ],
    },
    '23b': {
      text: 'Siyah h4’te alır; g-hattı açılmaya başlar.',
      amac: 'Beyaz şahının önünde g-hattını açmak ve h6 filini desteksiz bırakmak.',
      neden: 'Motor 23...gxh4’ü en iyi buluyor (−3.3). 23...Kh8 24.Bxg5 Nxg5 25.hxg5 ile fil kurtulur (−2.5).',
      diger: [
        { move: '23...Kh8', text: '24.Bxg5 Nxg5 25.hxg5 Rg8; fil kurtulur. Motor: −2.5.' },
        { move: '23...Qd6', text: '24.hxg5 Kh8 25.Kh1 Rg8; benzer ama daha yavaş. Motor: −2.5.' },
      ],
    },
    '24w': {
      text: 'Vezir d2’ye gelir.',
      amac: 'h6 filini korumak ve f-hattında veziri aktif tutmak.',
      neden: 'Motor 24.gxh4’ü (−3.2) ya da 24.Ne1’i (−3.1) öneriyordu: hemen piyonu geri almak ve atı şah kanadına getirmek. 24.Qd2 bir tempo kaybetti; Siyah ...Kh8 ve ...Rg8 ile g-hattını aldı. Maç hamlesi −4.1.',
      diger: [
        { move: '24.gxh4', text: '24...Bxh4 25.Ne1 Bg4 26.Ng2 Qe7; Beyaz savunma kurar. Motor: −3.2/−3.4.' },
        { move: '24.Ne1', text: '24...Kh8 25.gxh4 Rg8+ 26.Kh1 Bxh4; at g2’ye gelir. Motor: −3.1.' },
      ],
    },
    '24b': {
      text: 'Şah h8’e gider; g8 karesi kaleye kalır.',
      amac: 'Kaleyi g8’e getirip g-hattını tutmak; şahı g-hattından ve h6 filinin baskısından uzaklaştırmak.',
      neden: 'Motor 24...Kh8’i en iyi buluyor (−4.3). 24...Qd6 da iyi (−4.0), ama g8 karesinin boşalması kale için şart.',
      diger: [
        { move: '24...Qd6', text: '25.gxh4 Kh8 26.Kh1 Rg8; aynı plan farklı sırayla. Motor: −4.0.' },
        { move: '24...Bg4', text: '25.gxh4 Bxh4 26.Kh1 Kh8; fil aktif ama g-hattı geç açılır. Motor: −3.2.' },
      ],
    },
    '25w': {
      text: 'At e1’e çekilir; g2 ve f3 karelerine yönelir.',
      amac: 'Atı şah kanadı savunmasına getirmek.',
      neden: 'Motor 25.Kh1 (−4.5) ve 25.Ne1’i (−4.6) eşit görüyor. 25.gxh4 Bxh4 ile Siyahın fili aktifleşir (−4.7).',
      diger: [
        { move: '25.Kh1', text: '25...Qd6 26.gxh4 Bxh4 27.Ng1; şah g-hattından çekilir. Motor: −4.5.' },
        { move: '25.gxh4', text: '25...Bxh4 26.Kh1 Qd6 27.Ng1; fil h4’te güçlü. Motor: −4.7.' },
      ],
    },
    '25b': {
      text: 'Kale g8’e gelir ve g-hattını tutar.',
      amac: 'g-hattından Beyaz şahına ve g3 piyonuna baskı kurmak.',
      neden: 'Motor 25...Rg8’i en iyi buluyor (−5.1). 25...hxg3 26.a3 bxa3 ile Siyah vezir kanadında oyalanır (−4.5).',
      diger: [
        { move: '25...Qd6', text: '26.gxh4 Rg8+ 27.Kh1 Bxh4; aynı plan. Motor: −4.6.' },
        { move: '25...hxg3', text: '26.a3 bxa3 27.Nxg3 Rg8; g-hattı açılır ama Beyaz atı g3’e gelir. Motor: −4.5.' },
      ],
    },
    '26w': {
      text: 'Şah h2’ye gider ve h-piyonunu destekler.',
      amac: 'Şahı g-hattından çekmek ve g3’ü korumak.',
      neden: 'Motor 26.Kh2’yi en iyi buluyor (−4.6). 26.Nf3 hxg3 ile Siyah g3’te piyon kazanır (−5.0).',
      diger: [
        { move: '26.a3', text: '26...bxa3 27.Rxa3 Qd6 28.Ra6; vezir kanadında karşı oyun. Motor: −4.8.' },
        { move: '26.Nf3', text: '26...hxg3 27.a3 bxa3 28.Rxa3; g3 piyonu düşer. Motor: −5.0.' },
      ],
    },
    '26b': {
      text: 'Vezir d6’ya gelir; g6 karesine ve şah kanadına bakar.',
      amac: 'Veziri g-hattı saldırısına katmak; ...Rg6 için destek.',
      neden: 'Motor 26...Qd6 ile 26...Rg6’yı eşit görüyor (−4.5). Vezir d6’dan h2’ye çapraz baskı yapar ve f6’ya geçebilir.',
      diger: [
        { move: '26...Rg6', text: '27.gxh4 Qd6 28.Nf3 Rxh6; fil hemen düşer. Motor: −4.5.' },
        { move: '26...Bg4', text: '27.Ng2 Qd8 28.gxh4 Bxh4; fil aktif. Motor: −4.8.' },
      ],
    },
    '27w': {
      text: 'Beyaz h4’te alır; şahın önü açılmıştır.',
      amac: 'Piyonu geri almak ve h-piyonuyla g5’i kontrol etmek.',
      neden: 'Motor 27.gxh4’ü en iyi buluyor (−4.8). 27.Nf3 hxg3+ 28.Nxg3 Qg6 ile Siyah g-hattında saldırır (−5.1).',
      diger: [
        { move: '27.Nf3', text: '27...hxg3+ 28.Nxg3 Qg6 29.Nf5; g3 piyonu düşer. Motor: −5.1.' },
        { move: '27.Bh3', text: '27...hxg3+ 28.Nxg3 Bxh3 29.Kxh3; fil değişir ama şah açılır. Motor: −5.5.' },
      ],
    },
    '27b': {
      text: '27...Rg6: kale h6 filine saldırır ve g-hattını tutar.',
      amac: 'Hapsolmuş h6 filini kazanmak; g-hattından Beyaz şahına baskı.',
      neden: 'Fil artık kaçamaz: g5 h4 piyonuyla korunsa da ...Nxg5 ile alınır; g7 ise ...Rxg7 ile karşılanır. Motor 27...Rg6 ile 27...Bxh4’ü eşit görüyor (−4.6).',
      diger: [
        { move: '27...Bxh4', text: '28.Nf3 Qf6 29.Bg2 Rg6; fil aktif, h6 fili yine düşer. Motor: −4.5.' },
        { move: '27...Bg4', text: '28.Ng2 Nd8 29.Ng3 Nf7; daha yavaş. Motor: −4.2.' },
      ],
    },
    '28w': {
      text: 'Fil g5’e kaçar.',
      amac: 'Fili en azından bir taşla değiştirmek.',
      neden: 'Fil zaten kayıptı. Motor 28.Nf3 Rxh6 29.Ng3’ü öneriyordu (−4.6): taş verilir ama g-hattı kapalı kalır. 28.Bg5 Nxg5 29.hxg5 Bxg5 ise şahın önünü tamamen açar (−5.35).',
      diger: [
        { move: '28.Nf3', text: '28...Rxh6 29.Ng3 Rf6 30.Be2; taş eksik ama şah korunur. Motor: −4.6.' },
        { move: '28.Ng2', text: '28...Rxh6 29.Ng3 Qg6 30.Be2; benzer. Motor: −4.8.' },
      ],
    },
    '28b': {
      text: '28...Nxg5! Siyah fili atla alır.',
      amac: '29.hxg5 Bxg5 ile piyon kazanmak, fil çiftini korumak ve g-hattını tamamen açmak.',
      neden: 'Atla almak, kara kareli fili saldırı için saklar. 28...Bxg5 29.hxg5 Nxg5 (−3.4) ya da 28...Rxg5 29.hxg5 Bxg5 (−2.7) daha az etkilidir. Motor: −5.3.',
      diger: [
        { move: '28...Bxg5', text: '29.hxg5 Nxg5 30.Ng1 Qf6; fil gider, saldırı zayıflar. Motor: −3.4.' },
        { move: '28...Rxg5', text: '29.hxg5 Bxg5 30.Qc2 Qf6; kale verilir. Motor: −2.7.' },
      ],
    },
    '29w': {
      text: 'h-piyonuyla alınır.',
      amac: 'Taşı geri almak.',
      neden: 'Motor 29.Bg2 ve 29.Ng3’ü eşit görüyor (−5.2); ancak taş eksiği kalır. 29.hxg5 −5.3; taşı geri almak doğal ama şahı açar.',
      diger: [
        { move: '29.Bg2', text: '29...Nf7 30.Nf3 b3 31.Ng3; taş eksik ama şah korunur. Motor: −5.2.' },
        { move: '29.Ng3', text: '29...Nh7 30.Nf3 Bg4 31.Bg2; benzer. Motor: −5.2.' },
      ],
    },
    '29b': {
      text: 'Fil g5’i alır; Siyah bir piyon önde ve fil çiftiyle saldırıyor.',
      amac: 'Kara kareli fili aktif hale getirmek; Beyaz şahına f4 ve h4 karelerinden yaklaşmak.',
      neden: 'Motor 29...Bxg5’i en iyi buluyor (−5.8). 29...Bg4 (−4.1) ya da 29...Nd8 (−2.6) daha zayıf.',
      diger: [
        { move: '29...Bg4', text: '30.Ng2 Bxg5 31.Qe1 h4; fil önce g4’e. Motor: −4.1.' },
        { move: '29...Nd8', text: '30.Nf3 Nf7 31.Bg2 Bxg5; çok yavaş. Motor: −2.6.' },
      ],
    },
    '30w': {
      text: 'Vezir c2’ye gelir.',
      amac: 'Veziri g5 filinin saldırısından kurtarmak ve vezir kanadında savunmayı sürdürmek.',
      neden: 'Motor 30.Qd1’i öneriyordu (−5.6): vezir şah kanadına yakın kalır. 30.Qc2 −6.3; vezir şahtan uzaklaşır.',
      diger: [
        { move: '30.Qd1', text: '30...Qf6 31.Bg2 Bg4 32.Nf3; vezir şah kanadında. Motor: −5.6.' },
        { move: '30.Qxg5', text: '30...Rxg5 31.Nf3 Rg7 32.Bh3; vezir verilir. Motor: −6.5.' },
      ],
    },
    '30b': {
      text: 'Vezir f6’ya gelir; f-hattına ve f2’ye yönelir.',
      amac: 'Açık f-hattından Beyaz şahına girmek.',
      neden: 'Motor 30...Qf6’yı en iyi buluyor (−6.7). 30...Qf8 da iyi (−6.55); 30...Be3 (−5.4) daha az.',
      diger: [
        { move: '30...Qf8', text: '31.Bg2 Qf2 32.Ng3 Qf4; aynı plan. Motor: −6.55.' },
        { move: '30...Be3', text: '31.Ng2 Qf6 32.Ng1 h4; fil e3’te güçlü ama vezir gecikir. Motor: −5.4.' },
      ],
    },
    '31w': {
      text: 'Fil g2’ye gelir ve şahı korumaya çalışır.',
      amac: 'g2 ve f3 karelerini tutmak; Siyah vezirinin f2’ye girmesini zorlaştırmak.',
      neden: 'Motor 31.Bg2’yi en iyi buluyor (−6.55). 31.Ng3 Bf4 (−7.4) ya da 31.Bh3 Qf2+ (−8.4) daha kötü.',
      diger: [
        { move: '31.Ng3', text: '31...Bf4 32.Kh1 Bxg3 33.Ng2; g3 düşer. Motor: −7.4.' },
        { move: '31.Bh3', text: '31...Qf2+ 32.Kh1 Bxh3 33.Ng3; vezir f2’ye girer. Motor: −8.4.' },
      ],
    },
    '31b': {
      text: '31...Qf2: vezir şahın yanına girer.',
      amac: 'g2 filine ve h2 şahına doğrudan baskı kurmak; Bf4+ ile mat ağı.',
      neden: 'Motor 31...Qf2’yi en iyi buluyor (−7.1). 31...Bg4 (−6.6) da kazanıyor ama vezir girişi daha doğrudan.',
      diger: [
        { move: '31...Bg4', text: '32.Nf3 Bxf3 33.Rf1 Bf4+; fil önce. Motor: −6.6.' },
        { move: '31...b3', text: '32.axb3 Bg4 33.Nf3; vezir kanadında oyalanma. Motor: −6.2.' },
      ],
    },
    '32w': {
      text: 'Ağır hata. 32.Ng1?? mata izin verir.',
      amac: 'Atı g1’e getirip h3 ve f3 karelerini korumak.',
      neden: 'At g1’e gelince şahın kaçış karesi kapanır; Bf4+ ve Qh4+ ile mat ağı kurulur. Motor 32.Ng3’ü öneriyordu (−6.9): Qf4 33.Bh3 ile direnmek. 32.Ng1 sonrası mat (10 hamlede).',
      diger: [
        { move: '32.Ng3', text: '32...Qf4 33.Bh3 Qh4 34.Qg2 Bf4; Beyaz direnir ama kayıp. Motor: −6.9.' },
        { move: '32.Nf3', text: '32...Bc1 33.Ng3 Qxc2 34.Rxc1 Qxc1; vezir düşer. Motor: −10.5.' },
      ],
    },
    '32b': {
      text: '32...Bf4+! Fil şah çeker; şah h1’e gitmek zorunda.',
      amac: 'Şahı köşeye sıkıştırmak ve vezire h4’ten şah çekme imkânı açmak.',
      neden: 'Motor 32...Bf4+’yı mat (9 hamlede) olarak gösteriyor. 32...Qh4+ 33.Nh3 Bf4+ ile de kazanır (−14.1) ama daha yavaş.',
      diger: [
        { move: '32...Qh4+', text: '33.Nh3 Bf4+ 34.Kg1 Bxh3; kazanır ama mat değil. Motor: −14.1.' },
        { move: '32...Bd2', text: '33.Ngf3 Rxg2+ 34.Nxg2 Bf4+; karmaşık. Motor: −6.9.' },
      ],
    },
    '33w': {
      text: 'Şah h1’e gider.',
      amac: 'Tek yasal kaçış.',
      neden: 'g1 ve g3 kareleri Siyah taşlarınca kontrol edilir; h1 tek karedir. Motor: mat (8 hamlede).',
      diger: [],
    },
    '33b': {
      text: '33...Qh4+! Vezir şah çeker ve mat ağını kapatır.',
      amac: '34.Nh3 Bxh3 35.Kg1 Be3+ ile mat; 34.Bh3 Bxh3 35.Ngf3 Bg2+ 36.Kg1 Be3+ 37.Qf2 Bxf2# de mattır.',
      neden: 'Motor 33...Qh4+’yı mat (8 hamlede) olarak gösteriyor. Lawrence bu hamleden sonra terk etti.',
      diger: [
        { move: '33...Rxg2', text: '34.Qxf2 Rxf2 35.Ng2 Bg4; kazanır ama mat değil. Motor: −6.2.' },
        { move: '33...Bd2', text: '34.Ngf3 Bxe1 35.Qxf2 Bxf2; vezir değişimiyle kazanır. Motor: −5.5.' },
      ],
    },
  },
  qa: [
    { q: 'Siyah neden 3...d5 oynadı, 3...Nc6 değil?', a: '3.g3 sonrası Beyazın g2 fili henüz e4’ü korumuyor; ...d5 bu anı yakalayıp merkezde hemen hak iddia eder. 3...Nc6 ile Beyaz 4.Bg2 oynayıp e4’ü sağlamlaştırırdı ve Siyahın merkezde etkinliği azalırdı. Motor 3...d5’i en iyi buluyor (0.0).' },
    { q: 'Siyah neden ...d4’ü 7. hamleye kadar bekledi?', a: 'Hemen 4...d4 5.Nce2 sonrası at e2’den rahatça yeniden yerleşir. Schlechter önce Beyazın Nge2 ve O-O oynamasını bekledi; böylece 7...d4 geldiğinde at e2’ye dönemedi ve b1’e gitmek zorunda kaldı. Bu bir tempo kazancıdır.' },
    { q: 'Beyazın 12.f5 hamlesi neden yanlıştı?', a: 'Ters Şah Hint yapısında f5, e5 karesini kalıcı olarak Siyaha verir ve zinciri kırılmaz hale getirir. 12.fxe5 Nxe5 13.Nf4 ile hatlar açılır ve Beyaz aktif oyun alır (Motor: +0.2). 12.f5 sonrası Motor −0.6.' },
    { q: '19.Bh6 neden ciddi bir hataydı?', a: 'Fil h6’da Siyah şahına yakın görünür ama geri dönüş yolu yoktur. 19...Rxf1+ 20.Bxf1 g5! sonrası fil hapsolur ve oyundan çıkar. 19.Bxe7 ile Beyaz iyi filini değişip dengeye yakın kalırdı (Motor: −1.1); 19.Bh6 −2.2, iki hamle sonra −2.9.' },
    { q: 'Siyah neden 28...Nxg5 ile aldı, 28...Bxg5 ile değil?', a: 'Atla almak, saldırıda en değerli olan kara kareli fili korur. 29.hxg5 Bxg5 ile fil hem piyon kazanır hem de f4 ve h4 karelerinden şaha yaklaşır. 28...Bxg5 29.hxg5 Nxg5 ile fil gider ve saldırı zayıflar (Motor: −3.4 vs −5.3).' },
    { q: 'Beyazın avantajı nerede kayboldu?', a: 'Açılışta Beyaz eşitti; fark 12.f5 (e5 karesini vermek) ve 15.Bg5 (15.Nf4! fırsatını kaçırmak) ile başladı. Asıl kırılma 19.Bh6? oldu: fil hapsoldu ve Beyaz fiilen bir taş eksik oynadı. 24.Qd2 ve 32.Ng1?? ise kaybı hızlandırdı.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: '15.Nf4! exf4 16.Bxf4 Qc8 17.Nd6+ Bxd6 18.Bxd6 ile Beyaz eşit bir oyun alırdı (Motor: −0.1). 19.Bxe7 Nxe7 20.c3 ile de Beyaz direnebilirdi (−1.1). Bu iki anın ardından oyun kayıptı.' },
    { q: 'Schlechter’in planının özü neydi?', a: 'Merkezde alan (...d4, ...e5), şah kanadında Beyazın piyon fırtınasını frenlemek (...h5) ve vezir kanadında oyun (...b5-b4). Beyazın fili hapsolunca Siyah g-hattını açtı (...gxh4, ...Kh8, ...Rg8) ve kara karelerde fil + vezirle mat ağı kurdu.' },
  ],
  sources: [
    { title: 'Cambridge Springs 1904: Round 12 (cs1904.com)', url: 'https://cs1904.com/round12.htm' },
    { title: 'Cambridge Springs 1904: Players (cs1904.com)', url: 'https://cs1904.com/players.htm' },
    { title: 'Wikipedia: 1904 Cambridge Springs International Chess Congress', url: 'https://en.wikipedia.org/wiki/1904_Cambridge_Springs_International_Chess_Congress' },
    { title: 'British Chess News: Minor Pieces 42 – Thomas Francis Lawrence Part 2', url: 'https://britishchessnews.com/2022/08/19/minor-pieces-42-thomas-francis-lawrence-part-2/' },
    { title: '365Chess: B23 Sicilian closed, Korchnoi variation', url: 'https://www.365chess.com/eco/B23_Sicilian_closed_Korchnoi_variation' },
  ],
  exercises: [
    { id: 'lsc-1', kind: 'tekrar', plan: false, title: 'g-hattını açmak: Nxg5',
      source: 'Lawrence – Schlechter, Cambridge Springs 1904 (28. hamle)',
      fen: '7k/p2bb2n/2nq2r1/2p1p1Bp/1pPpP2P/3P4/PP1QN2K/R3NB2 b - - 2 28',
      prompt: 'Beyazın fili h6’dan g5’e kaçtı. Beyaz şahı h2’de, önündeki piyonlar yok. Siyah g5’teki fille nasıl ilgilenmeli?',
      hint: 'Hangi taşla alırsanız Beyazın h-piyonu geri aldıktan sonra ikinci bir alım mümkün olur?',
      line: ['Nxg5', 'hxg5', 'Bxg5'],
      explanation: '**28...Nxg5! 29.hxg5 Bxg5** ve Siyah bir piyon kazanır, fil çiftini korur ve g-hattı Beyaz şahına açılır. Motor: 28...Nxg5 −5.2, 28...Bxg5 −4.0; 29...Bxg5 −6.3, 29...Bg4 −5.0.',
      link: '...g5 ile kapatılan fil sonunda verildi; Siyah değişimi g-hattını açacak şekilde yaptı.' },
    { id: 'lsc-2', kind: 'tekrar', plan: false, title: 'Bf4+ ve Qh4+',
      source: 'Lawrence – Schlechter, Cambridge Springs 1904 (32. hamle)',
      fen: '7k/p2b4/2n3r1/2p1p1bp/1pPpP3/3P4/PPQ2qBK/R3N1N1 b - - 5 32',
      prompt: 'Lawrence 32.Ng1 oynadı. Siyahın veziri f2’de, fili g5’te, kalesi g-hattında. Kazanan seriyi bulun.',
      hint: 'Fil şah çeksin; şah köşeye gidince vezir h-hattından gelir.',
      line: ['Bf4+', 'Kh1', 'Qh4+'],
      explanation: '**32...Bf4+ 33.Kh1 Qh4+** ve 34.Nh3 Bxh3 35.Kg1 Be3+ ile mat. Motor: 32...Bf4+ mat (7 hamlede), 32...Qh4+ −14.3.',
      link: 'Beyazın f- ve g-piyonları gidince kara kareler (f4, h4) Siyahın fil ve vezirine kaldı.' },
    { id: 'lsc-3', kind: 'transfer', plan: false, title: 'f5’te at fedası ve Qh4+',
      source: 'Smislov – Szabo, Budapeşte–Moskova maçı 1949 (18. hamle)',
      fen: '1rbq1r2/p3n1bk/3p3p/1pp1pP2/3nP3/3P2N1/PPPB2BK/R1QN1R2 b - - 0 18',
      prompt: 'Kapalı Sicilya’da Beyaz f4-f5 ile şah kanadında alan aldı; şahı h2’de. Siyahın d4’te güçlü bir atı var. Siyah şaha nasıl ulaşır?',
      hint: 'f5 piyonunu alırsanız e4 piyonu yerinden çıkar; sonra vezir h4’ten şah çeker.',
      line: ['Nexf5', 'exf5', 'Qh4+'],
      explanation: '**18...Nexf5! 19.exf5 Qh4+** ve 20.Bh3 sonrası Siyahın taşları açılan f-hattından Beyaz şahına yönelir; feda edilen at karşılığında güçlü bir saldırı var. Motor: 18...Nexf5 −2.8, sonraki en iyi 18...Nd5 0.0; 19...Qh4+ −3.2, 19...e4 0.0.',
      link: 'Schlechter gibi Szabo da Beyazın f4-f5 ilerleyişiyle zayıflayan şaha karşı kara kareleri ve h4’ten vezir şahını kullandı.' },
    { id: 'lsc-4', kind: 'transfer', plan: false, title: 'g5’te alıp hatları açmak',
      source: 'Ljubojevic – Van der Wiel, Tilburg turnuvası 1983 (30. hamle)',
      fen: '5r2/p3n1k1/2q1n3/1rp1PpN1/3p1P2/P2P2K1/1P1Q1N2/4RR2 b - - 0 30',
      prompt: 'Kapalı Sicilya yapısı: Siyahın d4 piyonu var, Beyaz şahı g3’te. Beyazın atı g5’te. Siyah saldırıyı nasıl başlatır?',
      hint: 'g5 atını alın; f4 piyonu geri alınca f-piyonunuz şahla ilerleyebilir.',
      line: ['Nxg5', 'fxg5', 'f4+', 'Kh2', 'Qf3'],
      explanation: '**30...Nxg5! 31.fxg5 f4+ 32.Kh2 Qf3** ve vezir şahın yanına girer. Motor: 30...Nxg5 −4.8, sonraki en iyi −0.4; 31...f4+ −5.8, 31...Qb7 −1.8; 32...Qf3 −6.9, 32...Rh8+ −2.9.',
      link: 'Schlechter 28...Nxg5 ile g-hattını açtı; Van der Wiel de g5’te alıp f-hattını ve Beyaz şahının önünü açtı.' },
  ],
};
