// Werner Hug – Viktor Korçnoy, Biel turnuvası, Biel 1986. Kaynak: PgnMentor (Korchnoi.pgn).
export default {
  id: 'hug-korchnoi-1986',
  theme: '...d4 ile alan, beyaz kareler ve at akını',
  white: 'Werner Hug', black: 'Viktor Korçnoy',
  whiteShort: 'Hug', blackShort: 'Korçnoy',
  event: 'Biel turnuvası', site: 'Biel', year: 1986, eco: 'B23',
  variation: 'Sicilya Savunması, Kapalı sistem, 2.Nc3 e6 3.g3 d5 4.d3',
  result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. d3 Nc6 5. exd5 exd5 6. Bg2 d4 7. Ne4 Nf6 8. Ne2 Nxe4 9. Bxe4 Bd6 10. O-O Bg4 11. Bg2 Qd7 12. f3 Bf5 13. g4 Be6 14. Nf4 Bxf4 15. Bxf4 h5 16. Qd2 O-O-O 17. a3 f6 18. h3 hxg4 19. fxg4 Bd5 20. Rae1 Rde8 21. Rxe8+ Rxe8 22. Re1 Rxe1+ 23. Qxe1 Bxg2 24. Kxg2 Qd5+ 25. Kf2 Kd7 26. b3 g5 27. Bg3 b5 28. Qe2 a5 29. Qf3 Qxf3+ 30. Kxf3 a4 31. bxa4 bxa4 32. Ke4 Nb4 33. h4 gxh4 34. Bxh4 Ke6 35. g5 Nxc2 36. gxf6 Nxa3 37. f7 Kxf7 38. Kd5 Nc2 39. Kc4 Ne3+ 40. Kxc5 a3 0-1`,

  summary: 'Siyah (Korçnoy) kazandı. Korçnoy, adını taşıyan Kapalı Sicilya sistemine (2.Nc3 e6 3.g3 d5) uygun olarak önce **6...d4** ile merkezde alan aldı ve c3 atını yerinden etti. Ardından ...Nxe4 ile değişti, fillerini d6 ve g4’e getirdi; Beyaz bu fili kovalamak için 12.f3 ve 13.g4 oynadı, ama bu ilerleyiş şahının çevresindeki beyaz kareleri zayıflattı. Korçnoy ...h5 ile g4’ü sorguladı, uzun rok yaptı ve **19...Bd5** ile Beyazın g2 filini değişti. Kaleler e-hattında gidince oyun vezir oyun sonuna, 29.Qf3 Qxf3+ ile de at–fil oyun sonuna döndü. Motor bu oyun sonunu hâlâ eşit görüyordu, ama Siyahın vezir kanadı piyonları (a4, c5) ve d4’teki kama piyonu uzun vadeli kozlardı. Hug **32.Ke4?** ile şahını c2 piyonundan uzaklaştırınca **32...Nb4!** geldi: at c2’ye saldırdı ve 33.axb4 a3 sonrası a-piyonu vezir olacağı için alınamadı. **34...Ke6!** ile atı bilerek feda eden Korçnoy, c2 ve a3’ü toplayıp a-piyonunu yürüttü; d4 piyonu filin a1’e giden çaprazını kapattığı için piyon durdurulamadı.',
  intro: 'Bu oyun 1986 Biel uluslararası turnuvasında oynandı (12 kişilik devre turnuvası; 365Chess’e göre Polugayevski ve Lobron 7/11 ile birinciliği paylaştı, Korçnoy 5 puanla ortaların altında kaldı, Hug ise 1,5 puanla son sırada bitirdi). Beyazda 1971 Dünya Gençler Şampiyonu İsviçreli Uluslararası Usta Werner Hug, Siyahta o yılların en güçlü oyuncularından Viktor Korçnoy vardı. Açılışta hamle sırası 4.Bg2 değil, **4.d3 Nc6 5.exd5 exd5 6.Bg2** oldu: Beyaz önce e4’ü d3 ile destekledi, sonra d5’te değişti ve fili g2’ye getirdi. Sonuçta modülün 4.Bg2 hattından da çıkabilen, Siyahın c5–d5 piyonlarıyla merkezde alan sahibi olduğu yapı oluştu. Korçnoy hemen **6...d4** ile c3 atını kovaladı; bu, sistemin en tipik fikridir. Oyunun asıl dersi ise sonda: eşit görünen bir at–fil oyun sonunda sabit piyonlar ve uç geçer piyon fikri, tek bir şah hamlesiyle oyunu belirledi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'g3–Bg2 ile uzun çaprazı açmak ve exd5 sonrası d5 piyonuna baskı kurmak; ...d4 gelince bu çapraz b7 ve c6’ya yönelir.',
      '...d4 ile kovalanan atı e4’e getirip merkezde tutmak; ikinci atı e2–f4 yoluyla d5 ve e6 karelerine yönlendirmek.',
      'Siyahın g4 filini f3 ve g4 ile kovalayıp şah kanadında alan almak. Bu planın bedeli: e3, f3, h3 ve özellikle beyaz kareler zayıflar; g2 fili değişirse bu zayıflık kalıcı olur.',
      'Kara kareli fili f4’te aktif tutmak (b8–h2 çaprazı) ve kaleleri tek açık hat olan e-hattına getirmek.',
      'a3 ile ...Nb4 sıçrayışını önlemek; ancak bu piyon sonradan vezir kanadında sabit bir hedefe dönüşür.',
      'Oyun sonunda şahı d2–c2 bölgesinde tutarak vezir kanadı piyonlarını korumak ve gerekirse c4! ile ...dxc3 alarak Siyahın d4 kamasını tasfiye etmek.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**...d4** ile alan kazanmak, c3 atını kovalamak ve e3/c3 karelerini Beyazdan almak; g2 filinin d5’e baskısını boşa çıkarmak.',
      'Alan avantajı varken taş değiştirerek (...Nxe4) kalan taşlara yer açmak; filleri d6 ve g4’te aktif yerleştirmek.',
      'Beyaz şah kanadında piyon sürünce (f3, g4) ...h5 ile karşılık vermek, h-hattını açmak ve şahı uzun roka götürüp kanatlardaki savaştan uzak tutmak.',
      '...Bd5 ile Beyazın g2 filini değişmek; böylece a8–h1 çaprazı ve d5–e4 kareleri vezire kalır.',
      'Kaleleri değişip oyun sonuna geçmek: Siyahın şahı daha güvenli, piyon yapısı daha sağlam ve d4 kaması Beyazın fil çaprazını kapatıyor.',
      'Oyun sonunda ...b5, ...a5, ...a4 ile vezir kanadında alan alıp Beyazın a3 ve c2 piyonlarını sabitlemek; at ile bu piyonlara akın yapmak.',
      'Uç (a-) geçer piyonunu, filin kontrol edemediği bir hatta yaratmak: d4 piyonu a1–h8 çaprazını kapattığı için kara kareli fil a1’i durduramaz.',
    ] },
  },
  critical: [
    { move: '6b', title: '6...d4: alan kazanmak ve atı kovalamak', text: 'Siyah d-piyonunu ilerletip c3 atını kovalar. Bu hamleyle g2 filinin d5’e baskısı boşa çıkar, d4 piyonu da c3 ve e3 karelerini Beyazdan alır. Karşılığında e4 karesi Beyaz ata kalır ve b7–a8 çaprazı açılır. Motor 6...Nf6’yı çok az daha iyi buluyor (Motor: +0.1 / +0.2), yani fark yok; Korçnoy bu sistemin en karakteristik fikrini seçti.' },
    { move: '12w', title: '12.f3: fili kovalamanın bedeli', text: 'Beyaz g4 filini kovalamak için f3 oynadı ve arkasından 13.g4 geldi. Bu piyonlar Beyaza alan kazandırdı, ama e3, g3 ve h3 kareleri ile g2 filinin arkası zayıfladı. Motor 12.Bxc6 bxc6 13.f3’ü daha iyi buluyor (Motor: −0.3), oyundaki f3 ise −0.8. Asıl stratejik sorun: g2 fili değişirse Beyazın şah kanadındaki beyaz kareleri savunacak taşı kalmayacaktı.' },
    { move: '19b', title: '19...Bd5: g2 filini değişmek', text: 'f3–g4 ilerleyişinden sonra Beyazın beyaz kareleri zayıfladı. Siyah filini d5’e getirip g2 filini değişmeyi önerir; Bxd5 Qxd5 olursa da Siyahın veziri uzun çaprazda merkezileşir. Motor bu hamleyi en iyi buluyor (Motor: +0.2); 19...Rde8 ve 19...Rhe8 +0.6 civarında Beyaza biraz daha fazla şans verirdi.' },
    { move: '24b', title: '24...Qd5+: boşalan çaprazda vezir', text: 'Filler ve kaleler değişti. Siyahın veziri boşalan a8–h1 çaprazında şah çekerek merkeze yerleşir; Beyazın şahı g2’de rahat değildir. Konum eşittir (Motor: 0.0), ama Siyahın veziri daha aktif ve piyon yapısı daha sağlamdır.' },
    { move: '29w', title: '29.Qf3: vezir değişimi Siyahın işine yarar', text: 'Beyaz vezirleri değişmeyi önerdi. Motor 29.Qe1 veya 29.h4’ü (Motor: 0.0) tercih ediyor; değişimden sonra oyun sonu yine dengeye yakın (Motor: −0.2), ama artık Siyahın vezir kanadındaki alanı ve d4 kaması ön plana çıkıyor. Vezirler tahtadayken Beyazın şah çekme ve karşı oyun imkânları vardı.' },
    { move: '32w', title: '32.Ke4? şah c2’yi yalnız bırakıyor', text: 'Beyaz şahını merkeze, aktif görünen e4’e getirdi; ama c2 ve a3 piyonlarının tek savunucusu şahtı. Motor 32.Ke2 veya 32.Bf2 ile beraberliğe yakın bir konum gösteriyor (Motor: −0.2): şah d2–c2’ye gelir, gerekirse c4! ile ...dxc3 alarak d4 kaması tasfiye edilir. Oyundaki hamleden sonra konum −2.4’e düşüyor.' },
    { move: '32b', title: '32...Nb4! dokunulmaz at', text: 'At b4’te c2 piyonuna (ve d3’e) saldırır; c2 düşünce at oradan a3’ü de alacaktır. Atı almak mümkün değil: 33.axb4 a3 sonrası a-piyonu vezir olur (Motor: −4.7). Motor: 32...Nb4 −2.2; 32...Na7 ve 32...Ke6 gibi diğer hamleler 0.0 civarında kalır. Tek bir hamle, eşit oyun sonunu kazanılmışa çevirir.' },
    { move: '34b', title: '34...Ke6! atı feda etmek', text: 'Siyah b4 atını korumaz, onun yerine şahını e6’ya getirir: f6 piyonunu savunur ve Beyaz şahının d5’e girmesini engeller. 35.axb4 a3 sonrası d4 piyonu filin a1’e giden çaprazını kapattığı için a-piyonu durdurulamaz (Motor: −4.5). Doğal görünen 34...Nxc2 ise 35.Kd5 ile Beyaza karşı oyun verirdi (Motor: −0.7).' },
  ],
  lessons: [
    'Kapalı Sicilya’nın 3.g3 d5 yapısında Siyahın ana fikri **...d4** ile alan almak ve c3 atını kovalamaktır; böylece g2 filinin uzun çaprazdaki baskısı da boşa çıkar.',
    'Alan avantajına sahip taraf taş değiştirdikçe rahatlar (…Nxe4): kalan taşlar daha kolay hareket eder, sıkışık taraf ise karşı oyun bulmakta zorlanır.',
    'Bir fili kovalamak için piyon sürmek (f3, g4) kalıcı zayıflık yaratır. g2 fili değiştiğinde bu beyaz kareler sahipsiz kalır; Korçnoy bunu ...Bd5 ile hemen kullandı.',
    'Vezir değişimine karar verirken oyun sonunun yapısına bakın: Siyahın vezir kanadında daha ilerlemiş piyonları ve d4 kaması vardı; vezirler gidince bu kozlar belirleyici oldu.',
    'At–fil oyun sonunda şahın aktif olması her zaman doğru değildir: Beyazın şahı e4’e gidince c2 ve a3 korumasız kaldı. Önce kendi zayıf piyonlarınızı güvenceye alın.',
    'Bir taş “asılı” görünse de alınamayabilir: 32...Nb4’ü almak a-piyonunun vezir olmasına izin verirdi. Taktiklerde rakibin alma hamlesinden sonra ne olacağını mutlaka hesaplayın.',
    'Uç geçer piyon, rakibin filinin kontrol edemediği bir hatta ilerliyorsa bir taştan değerli olabilir; burada d4 piyonu filin a1’e giden yolunu kapattı.',
  ],
  qa: [
    { q: 'Siyah neden 6...d4 oynadı, 6...Nf6 ile gelişmek varken?', a: '6...d4, g2 filinin d5 piyonuna baskısını ortadan kaldırır ve c3 atını tempo kaybettirerek yerinden eder. Ayrıca d4 piyonu c3 ve e3 karelerini Beyazdan alır; Beyazın c3 veya f4–f5 gibi doğal planları zorlaşır. Motor 6...Nf6 ile 6...d4’ü neredeyse eşit görüyor (+0.1 / +0.2); Korçnoy daha keskin, alan kazandıran yolu seçti.' },
    { q: 'Beyaz 7.Ne4 yerine ne oynayabilirdi?', a: 'Motorun ilk tercihi 7.Qe2+! (Motor: +0.35): Siyah ya fili e7’ye koyup bir tempo kaybeder ya da veziri değişmek zorunda kalır, ardından Beyaz atını yine e4’e getirir. 7.Ne4 de makul (Motor: +0.1), ama at orada ...Nf6 ile hemen değişime açıldı.' },
    { q: '12.f3 ve 13.g4 neden sorunluydu?', a: 'Bu iki hamle g4 filini kovaladı, ama Beyazın şahının önündeki piyonları ilerletip beyaz kareleri zayıflattı. Motor 12.Bxc6 bxc6 13.f3’ü daha iyi buluyor (−0.3 / −0.8): önce c6 atını değişip Siyahın piyon yapısını bozmak daha mantıklıydı. Oyunda Siyah ...h5 ile g4’ü sorguladı ve ...Bd5 ile g2 filini değişince zayıflıklar belirgin hale geldi.' },
    { q: 'Siyah 14...Bxf4 ile neden fil çiftini verdi?', a: 'f4’teki at e6 filine saldırıyor ve Nxe6 ile Siyahın piyon yapısını bozmayı tehdit ediyordu. 14...O-O 15.Nxe6 fxe6 olsaydı Siyah hem fil çiftini kaybedecek hem de e6’da zayıf bir piyonla kalacaktı (Motor: −0.2). 14...Bxf4 15.Bxf4 sonrası Siyahın beyaz kareli fili kaldı ve bu fil sonra d5’e giderek oyunun en önemli değişimini yaptı (Motor: −0.5).' },
    { q: '17...f6 hamlesinin amacı neydi?', a: 'f6, f4 filinin g5’e gelip d8 kalesini rahatsız etmesini önler, e5 ve g5 karelerini kontrol eder ve g7 piyonunu destekler. Ayrıca Siyahın piyonlarını kara karelere koyarak beyaz kareleri vezir ve file bırakır. Motor 17...hxg4 18.fxg4 Bxg4’ü biraz daha iyi buluyor (−0.2), ama 17...f6 de dengeli (+0.1).' },
    { q: 'Neden 21...Rxe8 zorunluydu?', a: '21...Qxe8? olsaydı d7’deki vezir d5 filinin savunmasını bırakırdı: 22.Bxd5 ile Beyaz bir taş kazanır (Motor: +5.4). Kale ile geri almak hem e-hattını tutar hem de d5 filini vezirin korumasında bırakır (Motor: 0.0).' },
    { q: 'Vezirler değişince oyun sonu kimin işine yaradı?', a: 'Motor 29...Qxf3+ 30.Kxf3 sonrası konumu dengeye yakın görüyor (−0.2), ama yapı Siyaha uygun: Siyahın a5–b5–c5 piyonları vezir kanadında alan alıyor, d4 piyonu Beyazın kara kareli filinin a1–h8 çaprazını kapatıyor, at ise sabit Beyaz piyonlarına (a3, c2) saldırmak için ideal bir taş. Beyazın tek kozu şah kanadındaki g4 ve h3 piyonları.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'En net yer 32. hamle: 32.Ke2 veya 32.Bf2 ile konum eşit kalıyordu (Motor: −0.2). Örneğin 32.Ke2 Nb4 33.Kd2 Nd5 34.c4! dxc3+ 35.Kc2 ile Beyaz d4 kamasını tasfiye eder (Motor: −0.1). 32.Ke4? Nb4! sonrası bile 33.Bf2 (Motor: −2.8) oyundaki 33.h4’ten (−4.3) daha dirençliydi.' },
    { q: '32...Nb4 neden alınamıyordu?', a: '33.axb4 a3 sonrası a-piyonu a2 ve a1’e yürür. Beyazın şahı e4’te çok uzakta, kara kareli fili ise a1’i kontrol edemez çünkü f6–a1 çaprazını Siyahın d4 piyonu kapatıyor. Motor bu hattı −4.7 gösteriyor (34.bxc5 a2 35.Kf5 a1=Q).' },
    { q: 'Korçnoy neden 34...Nxc2 yerine 34...Ke6 oynadı?', a: '34...Nxc2 35.Kd5! Nxa3 36.Kxc5 sonrası Beyazın şahı Siyahın vezir kanadı piyonlarına ulaşır ve oyun dengeye yaklaşır (Motor: −0.7). 34...Ke6 ise d5 karesini kapatır, f6’yı korur ve atı zehirli bırakır: 35.axb4 a3 36.bxc5 a2 ile piyon vezir olur. Siyah önce kendi şahıyla Beyaz şahının yolunu kesti, sonra piyonları topladı (Motor: −4.5).' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Şah piyonu açılışı; Beyaz merkezi tutar, fil ve veziri açar.',
      amac: 'd5 ve f5 karelerini kontrol etmek, hızlı gelişim için çaprazları açmak.',
      neden: 'Hug, hem açık Sicilya’ya hem de Kapalı sisteme gidebilen esnek bir başlangıç seçti.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; daha kapalı, konumsal oyunlar. Motor: +0.2.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; hamle sırasına göre İngiliz veya Vezir Piyonu yapılarına geçer. Motor: +0.2.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine yanlardan bakar.',
      amac: 'Beyazın d4 ile kurmak istediği merkezi c-piyonuyla önlemek ve asimetrik bir oyun kurmak.',
      neden: 'Korçnoy kariyeri boyunca hem Fransız hem Sicilya’ya güvenmişti; Sicilya, Beyazın merkezini bir kanat piyonuyla sorgulayıp kazanma şansını korur.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; daha simetrik ve dengeli. Motor: +0.2.' },
        { move: '1...e6', text: 'Fransız Savunması; Korçnoy’un sık başvurduğu bir diğer açılış. Motor: +0.35.' },
      ],
    },
    '2w': {
      text: '2.Nc3: Beyaz hemen d4 oynamaz; Kapalı Sicilya’ya hazırlanır.',
      amac: 'd5 karesini kontrol edip g3–Bg2, d3, f4 gibi sakin bir kurulumla şah kanadında oynamak.',
      neden: 'Açık Sicilya’nın keskin teorisinden kaçınmak isteyenlerin seçimi. Bu sistemi Spasski ve Smislov gibi dünya şampiyonları da kullandı.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya hazırlık (3.d4). Motor: +0.45; motorun ilk tercihi.' },
        { move: '2.c3', text: 'Alapin sistemi; d4’ü piyonla desteklemek. Motor: +0.3.' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah ...d5 kırılmasını hazırlar.',
      amac: 'Merkezde hemen ...d5 ile karşı oyun kurmak ve f8 filinin yolunu açmak.',
      neden: 'Kapalı Sicilya’da Beyaz şah kanadında oynar; Siyah için en etkili karşılık merkezde piyon kırmaktır. 2...e6 bu fikre doğrudan hizmet eder.',
      diger: [
        { move: '2...Nc6', text: 'Klasik Kapalı Sicilya; genellikle ...g6, ...Bg7, ...d6 ile yavaş bir yapı. Motor: +0.4.' },
        { move: '2...d6', text: 'Esnek; ...e5 veya ...g6 sistemlerine geçebilir. Motor: +0.35.' },
      ],
    },
    '3w': {
      text: '3.g3: Fil g2’ye gelecek ve uzun çaprazdan merkeze bakacak.',
      amac: 'Kapalı Sicilya’nın tipik kurulumunu sürdürmek; Bg2 ile e4 ve d5’i desteklemek.',
      neden: 'Bu hamle Siyaha ...d5 ile merkezi açma fırsatı verir; Beyaz exd5 sonrası Bg2 ile d5 piyonuna baskı yapmayı umar. Motor 3.Nf3 ve 3.Nge2’yi (+0.45) biraz daha iddialı buluyor.',
      diger: [
        { move: '3.Nf3', text: 'Açık Sicilya’ya dönebilir (4.d4). Motor: +0.5.' },
        { move: '3.Nge2', text: 'd4 ile açık oyun hazırlığı; Nc3’ü ...d5’e karşı korumaya devam eder. Motor: +0.4.' },
      ],
    },
    '3b': {
      text: '3...d5: Korçnoy’un adını taşıyan sistem; Siyah merkezde hemen karşılık verir.',
      amac: 'g2 fili yerleşmeden merkezi açmak, Beyazı e4 piyonu hakkında karar vermeye zorlamak.',
      neden: 'Beyaz şah kanadında yavaş kurulum yaparken Siyah merkeze vurur; Beyaz şah kanadında hücum ederken merkezde karşı oyun klasik bir ilkedir. 365Chess bu yapıyı B23 “Korçnoy varyantı” olarak listeliyor; istatistikte Siyah biraz daha fazla kazanıyor.',
      diger: [
        { move: '3...Nc6', text: 'Daha klasik; 4.Bg2 sonrası ...d5 artık zor, Siyah ...d6 yapısına geçer. Motor: 0.0.' },
        { move: '3...Nf6', text: 'Nadir; 4.e5 Nd5 ile keskin oyun. Motor: +0.1.' },
      ],
    },
    '4w': {
      text: '4.d3: Beyaz e4’ü d3 ile destekler; fil henüz g2’ye gitmedi.',
      amac: 'e4 piyonunu koruyup merkezi tutmak ve hangi yapıya gireceğini bir hamle daha ertelemek.',
      neden: 'Modülün ana hattı 4.Bg2’dir (4...d4 5.Nce2). 4.d3, 4.exd5 ve 4.Bg2 ile birlikte en sık üç devamdan biri; oyunda 5.exd5 ile yine açık yapıya dönüldü.',
      diger: [
        { move: '4.exd5', text: 'Çoğu kaynağın en doğru bulduğu devam; 4...exd5 5.d4 ile Beyaz merkezi açar. Motor: +0.05.' },
        { move: '4.Bg2', text: 'Modülün ana hattı; 4...d4 5.Nce2 ile Siyah alan kazanır. Motor: −0.05.' },
      ],
    },
    '4b': {
      text: '4...Nc6: At gelişir ve d4 karesine bakar.',
      amac: '...d4 ilerleyişini desteklemek ve merkezdeki gerilimi korumak.',
      neden: 'Siyah, hangi piyonla alacağını Beyaza bırakır. 4...d4 hemen de mümkündü ve motor onu çok az daha iyi buluyor; Korçnoy önce gelişmeyi seçti.',
      diger: [
        { move: '4...d4', text: '5.Nce2 sonrası 4.Bg2 d4 hattına benzer; Siyah alan kazanır. Motor: −0.25.' },
        { move: '4...Nf6', text: 'e4’e baskı; 5.e5 Nfd7 ile Fransız yapılarına benzer oyun. Motor: 0.0.' },
      ],
    },
    '5w': {
      text: '5.exd5: Beyaz merkezde değişir.',
      amac: 'Gerilimi çözüp e-hattını açmak; Bg2 ile d5 piyonunu hedef almak.',
      neden: '5.Bg2 d4 olursa at e2’ye çekilir ve Siyah fazla alan alır; exd5 en azından ...d4’ten önce d5’i hedef haline getirir. Motor bunu en iyi buluyor (0.0).',
      diger: [
        { move: '5.Bg2', text: '5...d4 6.Nce2 ile modülün ana yapısına döner; Siyah merkezde rahat. Motor: −0.15.' },
        { move: '5.f4', text: 'Grand Prix ruhunda; 5...d4 6.Nce2 e5 ile Siyah merkezi kilitler. Motor: −0.15.' },
      ],
    },
    '5b': {
      text: '5...exd5: Piyonla geri alınır; e-hattı açılır, Siyahın c5–d5 ikilisi merkezde kalır.',
      amac: 'Merkezi piyonla tutmak ve c8 filinin çaprazını açmak.',
      neden: 'Atla almak uygun değil: 5...Nd4 veya 5...Na5 6.dxe6 ile Beyaz bir piyon kazanır (Motor: +1.2 / +1.6). Geri almak neredeyse zorunlu.',
      diger: [
        { move: '5...Nd4', text: '6.dxe6 Bxe6 ile Siyah bir piyon eksik kalır. Motor: +1.2.' },
      ],
    },
    '6w': {
      text: '6.Bg2: Fil g2’ye gelir ve d5 piyonuna baskı yapar.',
      amac: 'Uzun çaprazı açmak, d5’i hedef almak ve rok hazırlamak.',
      neden: '4.d3 ve 5.exd5’ten sonra planın doğal devamı; Nc3 ve Bg2 birlikte d5’e iki kez saldırır. Motor: 0.0.',
      diger: [
        { move: '6.Nge2', text: '6...d4 7.Ne4 ile benzer oyun; fil g2’ye sonra gelir. Motor: −0.15.' },
        { move: '6.Nf3', text: '6...Nf6 7.Bg2 d4 ile Siyah alan kazanır. Motor: −0.3.' },
      ],
    },
    '6b': {
      text: '6...d4: Piyon ilerler ve c3 atını kovalar.',
      amac: 'g2 filinin d5’e baskısını boşa çıkarmak, alan kazanmak ve c3/e3 karelerini Beyazdan almak.',
      neden: 'Bu yapıda Siyahın en karakteristik fikri. Karşılığında e4 karesi Beyazın atına kalır ve uzun çapraz c6–b7’ye uzanır; Korçnoy bu bedeli alan avantajı için kabul etti. Motor 6...Nf6’yı neredeyse eşit görüyor (+0.1 / +0.2).',
      diger: [
        { move: '6...Nf6', text: '7.Bg5 Be7 ile normal gelişim; d5 piyonu baskı altında kalır ama sağlam. Motor: +0.1.' },
        { move: '6...Nge7', text: 'd5’i atla destekler; 7.Nge2 d4 8.Ne4 ile benzer yapı. Motor: +0.4.' },
      ],
    },
    '7w': {
      text: '7.Ne4: At merkezde e4’e yerleşir.',
      amac: 'Atı aktif bir kareye getirmek; d6, c5 ve f6 karelerine baskı yapmak.',
      neden: 'd4 piyonu c3’ü kapattığı için e4 atın en iyi karesi; artık Siyah piyonları tarafından kovalanamaz. Motor 7.Qe2+’yi biraz daha iyi buluyor: Siyah fili e7’ye koymak zorunda kalır ve gelişimi aksar.',
      diger: [
        { move: '7.Qe2+', text: '7...Be7 8.Ne4 f5 9.Ng5 Nf6 ile Siyahın e6 ve e5 kareleri zayıflar. Motor: +0.35.' },
        { move: '7.Nd5', text: 'At merkezde güçlü görünür ama 7...Bd6 8.Ne2 Nge7 ile değişilir. Motor: −0.05.' },
      ],
    },
    '7b': {
      text: '7...Nf6: At gelişir ve e4 atına karşı çıkar.',
      amac: 'Beyazın güçlü atını değişmek veya kovalamak; rok için şah kanadını açmak.',
      neden: 'Merkezdeki at Siyahı rahatsız ediyordu; alan sahibi taraf olarak Siyah değişimden memnun olur. Motor bunu en iyi buluyor (0.0).',
      diger: [
        { move: '7...f5', text: '8.Ng5 sonrası e6 ve e5 zayıflar. Motor: +0.35.' },
        { move: '7...Be7', text: '8.Qe2 ile e-hattında baskı; Siyahın şahı rahatsız. Motor: +0.4.' },
      ],
    },
    '8w': {
      text: '8.Ne2: Diğer at e2’ye gelişir ve d4 piyonuna bakar.',
      amac: 'Atı f4’e getirmek ve d4 piyonuna baskı yapmak; rok hazırlamak.',
      neden: 'Beyaz e4 atını korumaya devam eder ama Nxe4 değişimine izin verir. Motor 8.Bg5 veya 8.Nxf6+ ile hemen değişimi biraz daha iyi buluyor (0.0 / −0.2).',
      diger: [
        { move: '8.Bg5', text: '8...Be7 9.Bxf6 Bxf6 ile Beyaz atını e4’te tutar. Motor: 0.0.' },
        { move: '8.Nxf6+', text: '8...Qxf6 9.Qe2+ Be7 ile Siyahın gelişimi bir tempo gecikir. Motor: 0.0.' },
      ],
    },
    '8b': {
      text: '8...Nxe4: Siyah merkezdeki atı değişir.',
      amac: 'Beyazın en aktif taşını ortadan kaldırmak ve kendi taşlarına yer açmak.',
      neden: 'Beyaz filiyle geri alırsa fil e4’te yine çekilmek zorunda kalacak; dxe4 ile alırsa piyon yapısı sabitlenir. Alan sahibi tarafın değişim istemesi mantıklı. Motor: −0.25, en iyi hamle.',
      diger: [
        { move: '8...h6', text: 'Bg5’i önler; 9.Nxf6+ Qxf6 10.Nf4 ile benzer. Motor: −0.15.' },
        { move: '8...Be7', text: 'Değişimi Beyaza bırakır: 9.Nxf6+ Bxf6. Motor: +0.1.' },
      ],
    },
    '9w': {
      text: '9.Bxe4: Fil geri alır; c6 atına ve b7’ye bakar.',
      amac: 'Taşı geri almak ve uzun çaprazı aktif tutmak.',
      neden: 'Doğal ve en iyi alış (Motor: −0.25). 9.dxe4 piyon yapısını bozar; 9.Nxd4? ise 9...cxd4 10.Bxe4 sonrası Beyaz bir taş eksik kalır (Motor: −4.2).',
      diger: [
        { move: '9.dxe4', text: 'Merkezi piyonla tutar ama fil pasifleşir. Motor: −0.35.' },
      ],
    },
    '9b': {
      text: '9...Bd6: Fil d6’ya gelişir; h2’ye ve şah kanadına bakar.',
      amac: 'Rok için şah kanadını boşaltmak ve f4’e gelecek atı kontrol etmek.',
      neden: 'Fil d6’da hem d4 karesini dolaylı destekler hem de Beyazın Nf4 planına karşı hazırdır. Motor: −0.2, en iyi hamle.',
      diger: [
        { move: '9...Rb8', text: 'b7’yi önceden korur; 10.O-O Bd6 ile aynı yapıya döner. Motor: −0.15.' },
        { move: '9...h6', text: 'Bg5’i önler, ama bir tempo harcar. Motor: −0.2.' },
      ],
    },
    '10w': {
      text: '10.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini oyuna sokmak.',
      neden: 'Merkez yarı açık, gecikmek riskli. Motor 10.Bf4 ve 10.Nf4’ü de eşdeğer görüyor (−0.25).',
      diger: [
        { move: '10.Nf4', text: 'Atı hemen aktif kareye getirir; 10...O-O 11.O-O ile benzer. Motor: −0.25.' },
        { move: '10.Bf4', text: 'd6 filini değişmeyi önerir. Motor: −0.25.' },
      ],
    },
    '10b': {
      text: '10...Bg4: Fil aktif bir kareye gelir ve e2 atını bağlar.',
      amac: 'e2 atını d1 vezirine karşı bağlamak, Nf4 planını engellemek ve Beyazı karar vermeye zorlamak.',
      neden: 'Korçnoy rok yapmadan önce fili aktifleştirdi. Bu fil Beyazı f3 oynamaya kışkırtacak; ancak 11.Bxc6+ bxc6 ile piyon yapısının bozulmasına da izin verir. Motor 10...O-O’yu çok az daha iyi buluyor (−0.2 / −0.05).',
      diger: [
        { move: '10...O-O', text: 'Güvenli; 11.Nf4 Ne5 12.h3 ile dengeli oyun. Motor: −0.2.' },
        { move: '10...Rb8', text: 'b7’yi korur, uzun çaprazdaki baskıyı nötralize eder. Motor: −0.1.' },
      ],
    },
    '11w': {
      text: '11.Bg2: Fil g2’ye döner.',
      amac: 'Fili korumak ve uzun çaprazda tutmak; e4’teki fil ...f5 veya ...Bf5 ile kovalanabilirdi.',
      neden: 'Hug fil çiftini korumayı seçti, ama bir tempo harcadı. Motor 11.Bxc6+! bxc6 12.f3’ü daha iyi buluyor (0.0 / −0.4): c6 atı gider ve Siyahın piyon yapısı bozulur.',
      diger: [
        { move: '11.Bxc6+', text: '11...bxc6 12.f3 Bd7 13.Re1: Siyahın c-piyonları katlanır, eşitlik. Motor: 0.0.' },
        { move: '11.f3', text: 'Fili hemen sorgular; 11...Bd7 12.c3 dxc3 13.bxc3 ile merkez açılır. Motor: −0.25.' },
      ],
    },
    '11b': {
      text: '11...Qd7: Vezir d7’ye gelir; uzun rok yolu açılır.',
      amac: 'c6 atını ve g4 filini korumak, ...O-O-O ve ...Bh3 seçeneklerini hazırlamak.',
      neden: 'Vezir d7’den hem g4 filini destekler hem de f3 gelirse ...Bh3 ile g2 filini değişme fikrini mümkün kılar. Motor: −0.35, en iyi hamle.',
      diger: [
        { move: '11...Qf6', text: 'b2’ye baskı; 12.Re1 O-O 13.h3 ile benzer. Motor: −0.35.' },
        { move: '11...O-O', text: 'Kısa rok; 12.h3 Bd7 13.Nf4 ile normal. Motor: −0.2.' },
      ],
    },
    '12w': {
      text: '12.f3: Beyaz g4 filini kovalar.',
      amac: 'Fili g4’ten uzaklaştırmak ve g4 ile şah kanadında alan kazanmak.',
      neden: 'Bağlanmadan kurtulmak istiyordu, ama f3 e3 ve g3’ü zayıflatır, g2 filinin önünü kapatır. Motor 12.Bxc6 bxc6 13.f3 Bh3 14.Rf2’yi tercih ediyor (−0.3 / −0.8). Bu hamle oyunun stratejik dönüm noktalarından biri.',
      diger: [
        { move: '12.Bxc6', text: '12...bxc6 13.f3 Bh3 14.Rf2: Siyahın c-piyonları zayıf, oyun dengeli. Motor: −0.35.' },
        { move: '12.Re1', text: '12...O-O-O 13.f3 Bf5 14.g4 Bg6 ile oyundakine benzer ama Beyazın kalesi aktif. Motor: −1.25.' },
      ],
    },
    '12b': {
      text: '12...Bf5: Fil f5’e çekilir.',
      amac: 'Fili aktif tutmak ve d3’e baskı yapmak; Beyazı g4 ile daha da ilerlemeye kışkırtmak.',
      neden: 'Motor 12...Bh3’ü daha iyi buluyor (−0.8 / −0.4): g2 filini hemen değişmek f3’ün açtığı beyaz kareleri sahipsiz bırakırdı. Korçnoy fili tahtada tutmayı tercih etti; bu fikri 19...Bd5 ile sonra gerçekleştirdi.',
      diger: [
        { move: '12...Bh3', text: '13.Nf4 Bxg2 14.Nxg2 O-O-O: Beyazın beyaz kareleri hemen zayıflar. Motor: −0.8.' },
        { move: '12...Be6', text: '13.Nf4 Bxf4 14.Bxf4 O-O ile oyundaki yapıya benzer. Motor: −0.45.' },
      ],
    },
    '13w': {
      text: '13.g4: Fil yeniden kovalanır; Beyazın şah kanadı açılıyor.',
      amac: 'Fili f5’ten de kovalamak ve şah kanadında alan almak.',
      neden: 'f3’ten sonra tutarlı devam; Motor bunu en iyi buluyor (−0.5). 13.Bf4? ise 13...h5 ile Beyazın fili ve şah kanadı zor durumda kalır (−1.0).',
      diger: [
        { move: '13.Bf4', text: '13...h5 14.Bxd6 Qxd6 ile Siyah h-piyonuyla saldırır. Motor: −1.0.' },
        { move: '13.Nf4', text: '13...O-O-O 14.Nh5 f6 sonrası at h5’te sıkışır. Motor: −1.1.' },
      ],
    },
    '13b': {
      text: '13...Be6: Fil e6’ya gelir; d5 ve c4 karelerine bakar.',
      amac: 'Fili merkeze yakın ve korumalı bir kareye koymak; ileride ...Bd5 ile g2 filini değişmek.',
      neden: '13...Bg6 da eşdeğer (−0.5), ama e6’daki fil d5’e daha yakın. 13...h5?? ise 14.gxf5 ile bir taş kaybettirir (+3.1).',
      diger: [
        { move: '13...Bg6', text: '14.Nf4 O-O-O 15.Nxg6 hxg6 ile h-hattı açılır. Motor: −0.5.' },
        { move: '13...h5', text: '14.gxf5 ile fil düşer. Motor: +3.1.' },
      ],
    },
    '14w': {
      text: '14.Nf4: At f4’ten e6 filine saldırır.',
      amac: 'e6 filini değişmek veya Siyahı fil çiftinden vazgeçirmek; atı aktif kareye getirmek.',
      neden: 'At e2’de pasifti; f4 ondan sonra en iyi kare. Motor: −0.5, en iyi hamle.',
      diger: [
        { move: '14.Re1', text: '14...Bc7 15.Bf4 h5 ile Siyah şah kanadında hızlı. Motor: −1.0.' },
        { move: '14.Ng3', text: '14...O-O-O 15.Nh5 f6 ile at kenarda kalır. Motor: −1.1.' },
      ],
    },
    '14b': {
      text: '14...Bxf4: Siyah kara kareli filini ata verir.',
      amac: 'Beyazın rahatsız edici atını kaldırmak ve beyaz kareli fili korumak.',
      neden: '14...O-O 15.Nxe6 fxe6 olsaydı Siyah hem fil çiftini kaybeder hem de e6’da zayıf bir piyon kalırdı (Motor: −0.2). Korçnoy beyaz kareli fili korudu; bu fil sonra d5’e giderek g2 filini değişecekti. Motor: −0.5.',
      diger: [
        { move: '14...O-O', text: '15.Nxe6 fxe6 16.f4 ile e6 piyonu hedef. Motor: −0.2.' },
        { move: '14...Qc7', text: '15.Nxe6 fxe6 16.f4 ile aynı yapı. Motor: 0.0.' },
      ],
    },
    '15w': {
      text: '15.Bxf4: Fil geri alır.',
      amac: 'Taşı geri almak; filin b8–h2 çaprazına yerleşmesi.',
      neden: 'Zorunlu: başka bir hamle yapılırsa Siyah bir taş fazla kalır (örneğin 15.Qe2 Bc7, Motor: −5.4).',
    },
    '15b': {
      text: '15...h5: Siyah g4 piyonunu sorgular.',
      amac: 'h-hattını açmak ve Beyazın şah kanadındaki piyonlarını hedef haline getirmek.',
      neden: 'Beyaz f3–g4 ile şah kanadını zayıflattı; Siyah bu piyonlara hemen vuruyor. Şah henüz e8’de olduğu için uzun rokla h-hattı kalesini oyunda tutmayı planlıyor. Motor 15...O-O ve 15...Nb4’ü biraz daha iyi buluyor (−0.5 / −0.4).',
      diger: [
        { move: '15...O-O', text: '16.Qd2 Nb4 17.Rfe1 Rae8 ile e-hattında mücadele. Motor: −0.5.' },
        { move: '15...Nb4', text: 'c2’ye baskı; 16.Qd2 O-O ile at aktif. Motor: −0.5.' },
      ],
    },
    '16w': {
      text: '16.Qd2: Vezir d2’ye gelir; kaleler birleşir.',
      amac: 'Kaleleri e-hattına getirmek ve f4 filini desteklemek.',
      neden: 'Motor 16.Qe2 ve 16.Qd2’yi eşdeğer görüyor (−0.4). 16.gxh5 h-hattını Siyaha açardı.',
      diger: [
        { move: '16.Qe2', text: 'Vezir e-hattına gelir; 16...f6 17.h3 Kf7 18.Qf2 ile aynı denge. Motor: −0.4.' },
        { move: '16.h3', text: 'g4’ü önceden destekler; 16...f6 17.Qd2 Kf7 ile aynı. Motor: −0.4.' },
      ],
    },
    '16b': {
      text: '16...O-O-O: Siyah uzun rok yapar.',
      amac: 'Şahı kanatlardan uzaklaştırmak ve h8 kalesini h-hattında tutmak.',
      neden: 'Kısa rok Beyazın açılan şah kanadına (g4, f-hattı) yakın olurdu; uzun rokla Siyahın şahı c8’de güvende. Motor 16...hxg4 17.fxg4 Bxg4 18.Rae1+ Kf8’i biraz daha iyi buluyor (−0.6 / −0.2): bir piyon kazanılır ama şah f8’de takılır.',
      diger: [
        { move: '16...hxg4', text: '17.fxg4 Bxg4 18.Rae1+ Kf8: piyon kazanılır, ama şah rok yapamaz. Motor: −0.6.' },
        { move: '16...f6', text: '17.h3 Kf7 ile şah merkezde. Motor: −0.3.' },
      ],
    },
    '17w': {
      text: '17.a3: Beyaz ...Nb4 sıçrayışını önler.',
      amac: 'c2 ve a2’ye saldırabilecek atın b4 karesini kontrol etmek.',
      neden: 'Mantıklı bir önlem, ama a3 piyonu ileride sabit bir hedef olacak. Motor 17.h3’ü biraz daha iyi buluyor (0.0 / −0.2): önce g4’ü destekleyip h-hattını kapalı tutmak.',
      diger: [
        { move: '17.h3', text: '17...b6 18.a3 a5 ile benzer, ama g4 destekli. Motor: 0.0.' },
        { move: '17.Rfe1', text: 'e-hattını tutar; 17...hxg4 18.fxg4 Bxg4 19.a3 ile Siyah piyon kazanır. Motor: −0.15.' },
      ],
    },
    '17b': {
      text: '17...f6: e5 ve g5 kareleri kontrol edilir.',
      amac: 'f4 filinin g5’e gelip d8 kalesine dokunmasını önlemek ve g7’yi desteklemek.',
      neden: 'Piyonlarını kara karelere koyan Siyah, beyaz kareleri vezir ve file bırakıyor. Motor 17...hxg4 18.fxg4 Bxg4’ü biraz daha iyi buluyor (−0.2 / +0.1); fark küçük.',
      diger: [
        { move: '17...hxg4', text: '18.fxg4 Bxg4 19.Bg3 f6 ile Siyah piyon kazanır. Motor: −0.2.' },
        { move: '17...b5', text: 'Vezir kanadında alan; 18.h3 Bd5 19.Bg3 f6 ile benzer. Motor: +0.1.' },
      ],
    },
    '18w': {
      text: '18.h3: g4 piyonu desteklenir.',
      amac: 'h-hattını açmadan g4’ü tutmak; ...hxg4 sonrası piyonla geri alabilmek.',
      neden: 'Motor bunu en iyi buluyor (+0.1). 18.gxh5 Rxh5 ise h-hattını Siyahın kalesine verirdi.',
      diger: [
        { move: '18.gxh5', text: '18...Rxh5 19.Bg3 b6 ile Siyahın kalesi aktif. Motor: −0.1.' },
        { move: '18.Rae1', text: '18...hxg4 19.b4 gxf3 20.Bxf3: şah kanadı açılır. Motor: −0.3.' },
      ],
    },
    '18b': {
      text: '18...hxg4: Siyah g4’te değişir.',
      amac: 'h-hattını açmak ve Beyazın şah kanadı piyon yapısını bozmak.',
      neden: 'Siyah gerilimi korumak yerine çözmeyi seçti; bu sayede ...Bd5 için zemin hazırlanır. Motor 18...Bd5’i biraz daha iyi buluyor (+0.15 / +0.25); her iki hamle dengeli.',
      diger: [
        { move: '18...Bd5', text: 'Hemen fil değişimi; 19.b4 hxg4 20.hxg4 c4 ile vezir kanadında oyun. Motor: +0.15.' },
        { move: '18...a6', text: 'Bekleme; 19.Bg3 Bd5 20.b4 ile Beyaz vezir kanadında oynar. Motor: +0.2.' },
      ],
    },
    '19w': {
      text: '19.fxg4: f-piyonuyla alınır; f-hattı Beyazın kalesine açılır.',
      amac: 'h-hattını kapalı tutmak ve f1 kalesini oyuna sokmak.',
      neden: '19.hxg4 h-hattını Siyaha açardı (0.0). 19.Rae1?? ise 19...gxh3 ile Beyazın şahı açılır (−2.6). Motor 19.fxg4’ü en iyi buluyor (+0.3).',
      diger: [
        { move: '19.hxg4', text: '19...Ne7 20.Qa5 b6 ile h-hattı Siyahın. Motor: 0.0.' },
        { move: '19.Rae1', text: '19...gxh3 ile Beyazın şah kanadı çöker. Motor: −2.6.' },
      ],
    },
    '19b': {
      text: '19...Bd5!: Fil g2 filini değişmeyi önerir.',
      amac: 'Beyazın beyaz kareleri savunan tek taşını değişmek; a8–h1 çaprazını vezire açmak.',
      neden: 'f3–g4 sonrası Beyazın beyaz kareleri zayıfladı; g2 fili gidince bu zayıflık kalıcı olur. Bxd5 Qxd5 olursa da Siyahın veziri merkezde güçlü. Motor en iyi hamle olarak görüyor (+0.2); 19...Rde8 +0.6.',
      diger: [
        { move: '19...Rde8', text: '20.b4 Bd5 21.bxc5 ile Beyaz vezir kanadında karşı oyun bulur. Motor: +0.55.' },
        { move: '19...Rhe8', text: '20.Bg3 Bd5 21.Rf5 ile Beyazın kalesi aktif. Motor: +0.65.' },
      ],
    },
    '20w': {
      text: '20.Rae1: Kale e-hattına gelir.',
      amac: 'Tek açık hattı ele geçirmek ve e7/e8 karelerine baskı yapmak.',
      neden: 'Motor bunu en iyi buluyor (+0.25). 20.b4 ile vezir kanadında piyon kırmak da mümkündü, ama 20...Rh7 ile Siyah sağlam kalır (0.0).',
      diger: [
        { move: '20.Bh2', text: 'Fili korunaklı kareye alır; 20...Bxg2 21.Qxg2 Rde8 ile aynı. Motor: +0.2.' },
        { move: '20.b4', text: '20...Rh7 21.Bxd5 Qxd5 22.b5 ile keskin oyun. Motor: 0.0.' },
      ],
    },
    '20b': {
      text: '20...Rde8: Siyah da kalesini e-hattına getirir.',
      amac: 'e-hattını Beyaza bırakmamak ve kale değişimine hazır olmak.',
      neden: 'Alan sahibi taraf olarak Siyah değişimden memnun; kaleler gidince d4 kaması ve sağlam yapı öne çıkar. Motor 20...Rde8, 20...Bxg2 ve 20...Rhe8’i eşdeğer görüyor (+0.25).',
      diger: [
        { move: '20...Bxg2', text: '21.Qxg2 Rde8 22.Bg3 Rxe1 ile aynı yapı. Motor: +0.25.' },
        { move: '20...Rhe8', text: 'h-hattını bırakır; 21.Bxd5 Qxd5 22.Bg3 ile benzer. Motor: +0.25.' },
      ],
    },
    '21w': {
      text: '21.Rxe8+: Kaleler değişir.',
      amac: 'e-hattında değişimle Siyahın baskısını azaltmak.',
      neden: 'Hug değişimle sadeleşmeyi seçti; ama her değişim Siyahın sağlam yapısını öne çıkarır. Motor 21.Bg3 ile gerilimi korumayı biraz daha iyi buluyor (+0.2 / 0.0).',
      diger: [
        { move: '21.Bg3', text: '21...Bxg2 22.Qxg2 Rxe1 23.Rxe1 ile Beyaz e-hattını alır. Motor: +0.25.' },
        { move: '21.Bxd5', text: '21...Qxd5 22.Bg3 Rxe1 23.Rxe1 ile dengeli. Motor: +0.15.' },
      ],
    },
    '21b': {
      text: '21...Rxe8: Kale geri alır.',
      amac: 'e-hattını tutmak ve d5 filini vezirin korumasında bırakmak.',
      neden: '21...Qxe8? d5 filini korumasız bırakırdı: 22.Bxd5 ile Beyaz bir taş kazanır (+5.4). 21...Qd8? ise 22.Rxh8 ile daha da kötü (+7.4). Kale ile almak zorunlu.',
      diger: [
        { move: '21...Qxe8', text: '22.Bxd5 ile fil düşer. Motor: +5.4.' },
      ],
    },
    '22w': {
      text: '22.Re1: Beyaz ikinci kaleleri de değişmeyi önerir.',
      amac: 'e-hattını Siyaha bırakmamak ve sadeleşerek beraberliğe yaklaşmak.',
      neden: 'Siyahın kalesi e3’e girmekle tehdit ediyordu; Re1 bunu önler. Motor 22.Bh2, 22.Bg3 ve 22.Bxd5’i eşdeğer görüyor (0.0).',
      diger: [
        { move: '22.Bxd5', text: '22...Qxd5 23.Qg2 Qxg2+ 24.Kxg2: erken vezir değişimi, eşit. Motor: 0.0.' },
        { move: '22.Bg3', text: '22...Re3 23.Bf4 Re8 ile tekrar. Motor: 0.0.' },
      ],
    },
    '22b': {
      text: '22...Rxe1+: Kaleler değişir.',
      amac: 'Ağır taşları azaltıp oyun sonuna yaklaşmak.',
      neden: 'Siyah değişimden kaçmaz; kaleler gidince Beyazın e-hattı karşı oyunu biter. Motor: 0.0.',
      diger: [
        { move: '22...Bxg2', text: '23.Rxe8+ Qxe8 24.Qxg2 Qe1+: benzer. Motor: 0.0.' },
        { move: '22...Re6', text: '23.Rxe6 Qxe6 24.Bxd5 Qxd5 ile aynı. Motor: +0.05.' },
      ],
    },
    '23w': {
      text: '23.Qxe1: Vezir geri alır.',
      amac: 'Taşı geri almak.',
      neden: 'Zorunlu: 23.Bf1? veya 23.Kh2? ile Beyaz bir kale eksik kalır (−5.8).',
    },
    '23b': {
      text: '23...Bxg2: g2 fili değişilir.',
      amac: 'Beyazın şahının etrafındaki beyaz kareleri savunan taşı ortadan kaldırmak.',
      neden: 'Bu değişimle Beyazın f3–g4 ile yarattığı zayıflıklar kalıcı hale geliyor ve a8–h1 çaprazı vezire açılıyor. Motor 23...Bxg2 ve 23...g5’i eşdeğer görüyor (0.0).',
      diger: [
        { move: '23...g5', text: '24.Bxd5 Qxd5 25.Qe8+ Nd8 ile benzer. Motor: 0.0.' },
        { move: '23...Ne7', text: 'At d5’e gelir; 24.Bxd5 Nxd5 25.Bd2 ile at merkezde. Motor: 0.0.' },
      ],
    },
    '24w': {
      text: '24.Kxg2: Şah geri alır.',
      amac: 'Taşı geri almak.',
      neden: 'Zorunlu; başka bir hamle bir taş kaybettirir (örneğin 24.Qh4 Bd5, −4.8).',
    },
    '24b': {
      text: '24...Qd5+: Vezir boşalan a8–h1 çaprazında şah çeker.',
      amac: 'Veziri merkeze yerleştirmek ve Beyazın şahını rahatsız etmek.',
      neden: 'g2 fili gittiğine göre d5 Siyah vezir için ideal kare: hem e4’ü hem de uzun çaprazı kontrol eder. Motor 24...g5 ve 24...Qd5+’yı eşdeğer görüyor (0.0).',
      diger: [
        { move: '24...g5', text: '25.Bg3 Qd5+ 26.Kf2 Kd7 ile aynı yapı. Motor: −0.1.' },
        { move: '24...Ne7', text: '25.Qe4 g5 26.Bg3 Nd5 ile at merkeze gelir. Motor: +0.15.' },
      ],
    },
    '25w': {
      text: '25.Kf2: Şah f2’ye gider.',
      amac: 'Şahı şah çekmelerden uzaklaştırmak ve merkeze yaklaştırmak.',
      neden: 'Motor 25.Kf2 ve 25.Kg3’ü eşdeğer görüyor (0.0). 25.Kg1 de mümkün, ama şah merkeze uzak kalır.',
      diger: [
        { move: '25.Kg3', text: '25...g5 26.Qe8+ Nd8 27.Bd2: Beyazın veziri aktif. Motor: 0.0.' },
        { move: '25.Kg1', text: '25...Kd7 26.Qe2 g5 27.Bg3: pasif ama sağlam. Motor: −0.05.' },
      ],
    },
    '25b': {
      text: '25...Kd7: Şah d7’ye gelir.',
      amac: 'Şahı e-hattındaki şah çekmelerden korumak ve oyun sonuna hazırlamak.',
      neden: 'c8’de Qe8+ gibi şah çekmelere açık olan şah, d7’de hem e8’i hem de e6’yı kontrol eder. Motor: 0.0, en iyi hamle.',
      diger: [
        { move: '25...g5', text: '26.Qe8+ Qd8 27.Qxd8+ Kxd8: vezirler hemen gider. Motor: +0.1.' },
        { move: '25...Kd8', text: 'Benzer fikir; 26.h4 g5 27.Bg3 ile aynı. Motor: +0.05.' },
      ],
    },
    '26w': {
      text: '26.b3: c4 karesi kontrol edilir.',
      amac: 'Siyahın ...c4 ile vezir kanadında ilerlemesini önlemek.',
      neden: 'Ancak b3 piyonu da ileride ...a5–a4 ile hedef olacak. Motor 26.h4’ü biraz daha iyi buluyor (0.0 / −0.05): şah kanadında piyon değişip geçer piyon şansı yaratmak.',
      diger: [
        { move: '26.h4', text: '26...g5 27.hxg5 fxg5 28.Bd2 ile şah kanadı sadeleşir. Motor: 0.0.' },
        { move: '26.Qe2', text: '26...g5 27.Bg3 Ne5 ile benzer. Motor: −0.05.' },
      ],
    },
    '26b': {
      text: '26...g5: f4 filine saldırılır ve şah kanadı piyonları sabitlenir.',
      amac: 'Fili kovalamak ve h4 ilerleyişini zorlaştırmak; şah kanadında piyonları kara karelere koymak.',
      neden: 'g5 piyonu, Beyazın g4 ve h3 piyonlarını yerinde sabitler; Beyaz ileride h4 ile geçer piyon yaratmak isterse g5 ile değişim olacak. Motor: −0.1, en iyi hamle.',
      diger: [
        { move: '26...b6', text: '27.h4 g5 28.hxg5 fxg5 ile şah kanadı sadeleşir. Motor: 0.0.' },
        { move: '26...Qf7', text: '27.Qe4 g5 28.Bg3 Qe6 ile vezir değişimi önerilir. Motor: 0.0.' },
      ],
    },
    '27w': {
      text: '27.Bg3: Fil g3’e çekilir.',
      amac: 'Fili korumak ve b8–h2 çaprazında tutmak.',
      neden: 'Motor bunu en iyi buluyor (−0.05). Fil g3’te h4 ilerleyişini destekler ve c7–b8 karelerine bakar.',
      diger: [
        { move: '27.Bh2', text: '27...b5 28.Bg3 a6 ile aynı. Motor: −0.1.' },
        { move: '27.Bc1', text: '27...b5 28.Qf1 ile pasif. Motor: −0.25.' },
      ],
    },
    '27b': {
      text: '27...b5: Vezir kanadında alan kazanılır.',
      amac: '...a5–a4 ile b3 piyonuna saldırmak ve Beyazın vezir kanadı piyonlarını sabitlemek.',
      neden: 'Siyahın vezir kanadında alan avantajı oyunun kazanma planı. Motor 27...b6, 27...a6 ve 27...b5’i eşdeğer görüyor (0.0).',
      diger: [
        { move: '27...b6', text: '28.Qe2 Ne5 29.Kg1 ile at merkeze gelir. Motor: −0.05.' },
        { move: '27...Ne5', text: '28.Bxe5 fxe5: piyon yapısı değişir, at gider. Motor: −0.05.' },
      ],
    },
    '28w': {
      text: '28.Qe2: Vezir e2’ye gelir.',
      amac: 'e-hattını tutmak ve Siyahın vezirinin e4’e girmesini önlemek.',
      neden: 'Motor bunu en iyi buluyor (0.0). Vezir e2’den hem b5’e hem de e8’e bakar.',
      diger: [
        { move: '28.Qd2', text: '28...Qh1 ile Siyahın veziri Beyazın şahını rahatsız eder. Motor: −0.1.' },
        { move: '28.Bh2', text: 'Bekleme; 28...a6 29.Bg3 a5 ile aynı. Motor: −0.15.' },
      ],
    },
    '28b': {
      text: '28...a5: Siyah ...a4 ile b3 piyonuna saldırmaya hazırlanır.',
      amac: 'b3 piyonunu değişip Beyazın a3 ve c2 piyonlarını yalnız bırakmak.',
      neden: '...a4 geldiğinde Beyaz ya bxa4 ile alıp a3’ü izole kalır ya da b3’ü tutar. Motor 28...Ne7, 28...Qe6 ve 28...Ne5’i eşdeğer görüyor (0.0).',
      diger: [
        { move: '28...Ne7', text: '29.h4 gxh4 30.Bxh4 Qe6 ile benzer. Motor: 0.0.' },
        { move: '28...Qe6', text: 'Vezir değişimi önerir: 29.Qxe6+ Kxe6 30.Kf3 Kd5. Motor: 0.0.' },
      ],
    },
    '29w': {
      text: '29.Qf3: Beyaz vezir değişimini önerir.',
      amac: 'Sadeleşmek ve beraberliğe yaklaşmak.',
      neden: 'Vezirler gidince Siyahın vezir kanadındaki alan avantajı ve d4 kaması öne çıkar; Beyazın karşı oyun şansı da azalır. Motor 29.Qe1 veya 29.h4’ü tercih ediyor (0.0 / −0.2).',
      diger: [
        { move: '29.Qe1', text: '29...f5 30.gxf5 Qxf5+ 31.Kg2 ile Beyazın veziri aktif kalır. Motor: 0.0.' },
        { move: '29.h4', text: '29...gxh4 30.Bxh4 Qe6 31.a4 ile şah kanadında geçer piyon şansı. Motor: 0.0.' },
      ],
    },
    '29b': {
      text: '29...Qxf3+: Vezirler değişir; at–fil oyun sonu başlar.',
      amac: 'Oyun sonuna geçip vezir kanadındaki alan avantajını kullanmak.',
      neden: 'Oyun sonunun yapısı Siyaha uygun: piyonları ileri, at sabit hedeflere saldırabiliyor. Motor 29...Qxf3+ (−0.25) ile 29...Ke6’yı (0.0) yakın görüyor.',
      diger: [
        { move: '29...Ke6', text: '30.a4 bxa4 31.bxa4 Nb4 ile vezirler tahtada kalır. Motor: 0.0.' },
        { move: '29...Qe6', text: '30.a4 bxa4 31.bxa4 Nb4 ile benzer. Motor: 0.0.' },
      ],
    },
    '30w': {
      text: '30.Kxf3: Şah geri alır.',
      amac: 'Taşı geri almak ve şahı merkeze yaklaştırmak.',
      neden: 'Zorunlu; şah başka kareye giderse Siyahın veziri g3 filini alır.',
    },
    '30b': {
      text: '30...a4: b3 piyonuna saldırılır.',
      amac: 'Beyazın vezir kanadı piyon yapısını bozmak; a3 ve c2’yi sabit hedefler haline getirmek.',
      neden: 'Motor en iyi hamle olarak görüyor (−0.15). 30...b4 31.a4 ile vezir kanadı kilitlenirdi (0.0).',
      diger: [
        { move: '30...b4', text: '31.a4 Ne7 32.Ke4 ile vezir kanadı kapanır. Motor: 0.0.' },
        { move: '30...Ne7', text: '31.a4 b4 32.Ke4 Kc6: daha yavaş. Motor: +0.1.' },
      ],
    },
    '31w': {
      text: '31.bxa4: Beyaz a4’te değişir.',
      amac: 'b3 piyonunu kurtarmak ve vezir kanadında tek bir piyon adası bırakmak.',
      neden: 'Zorunluya yakın: 31.Ke2? b4 ile Siyah vezir kanadını yarar (−3.5); 31.Bf4? ise 31...gxf4 ile taş kaybettirir.',
      diger: [
        { move: '31.Ke2', text: '31...b4 32.Kd1 bxa3 ile a-piyonu ilerler. Motor: −3.5.' },
      ],
    },
    '31b': {
      text: '31...bxa4: Piyonla geri alınır; Beyazın a3 ve c2 piyonları zayıf kalır.',
      amac: 'a4 piyonuyla a3’ü sabitlemek ve atın b4 veya b5’ten bu piyonlara saldırmasını hazırlamak.',
      neden: 'Zorunlu: 31...b4? 32.axb4 Nxb4 33.a5 ile Beyazın a-piyonu tehlikeli olurdu (+4.0). 31...bxa4 ile Siyahın a4 piyonu bir koz olur.',
      diger: [
        { move: '31...b4', text: '32.axb4 Nxb4 33.a5 ile Beyazın a-piyonu ilerler. Motor: +4.0.' },
      ],
    },
    '32w': {
      text: '32.Ke4?: Şah merkeze gider ama c2 ve a3’ü korumasız bırakır.',
      amac: 'Şahı aktif bir kareye getirmek ve Siyahın d5 karesine girmesini önlemek.',
      neden: 'Oyunun kaybettiren hatası. Şah c2’nin tek savunucusuydu. Motor 32.Ke2 veya 32.Bf2’yi öneriyor (−0.2): şah d2–c2’ye gelir; 32...Nb4 33.Kd2 Nd5 34.c4! dxc3+ 35.Kc2 ile d4 kaması tasfiye edilir. Oyundaki hamleden sonra konum −2.4.',
      diger: [
        { move: '32.Ke2', text: '32...Nb4 33.Kd2 Nd5 34.c4 dxc3+ 35.Kc2: eşitlik. Motor: −0.15.' },
        { move: '32.Bf2', text: '32...Na7 33.c4 dxc3 34.Ke2 Kd6 35.Kd1: eşitlik. Motor: −0.15.' },
        { move: '32.h4', text: '32...gxh4 33.Bxh4 Ke6 ile Siyah biraz daha iyi. Motor: −0.6.' },
      ],
    },
    '32b': {
      text: '32...Nb4!: At c2’ye (ve d3’e) saldırır.',
      amac: 'c2 piyonunu almak, oradan a3’e geçip a-piyonunu serbest bırakmak.',
      neden: 'At alınamaz: 33.axb4 a3 sonrası a-piyonu vezir olur, çünkü Beyazın şahı uzakta ve fil a1’i kontrol edemiyor (Motor: −4.7). Diğer hamleler (32...Na7, 32...Ke6) 0.0 civarında; Nb4 tek kazandırıcı hamle (Motor: −2.2).',
      diger: [
        { move: '32...Na7', text: '33.Kd5 Nb5 34.Kxc5 Nxa3 35.Kxd4: Beyaz şahı piyonları toplar. Motor: 0.0.' },
        { move: '32...Ke6', text: '33.Bc7 Ne7 34.Bb6 Kd6: denge. Motor: −0.1.' },
      ],
    },
    '33w': {
      text: '33.h4: Beyaz karşı oyun arar.',
      amac: 'Şah kanadında piyon değişip bir geçer piyon yaratmak.',
      neden: 'Ancak bu hamle c2’yi korumaz. Motor 33.Bf2’yi öneriyor (−2.8): 33...Nxc2 34.Kd5 Nxa3 35.Kxc5 ile Beyaz şahı Siyahın piyonlarına ulaşır. 33.axb4? a3 ise kesin kayıp (−4.7). Oyundaki hamle: −4.3.',
      diger: [
        { move: '33.Bf2', text: '33...Nxc2 34.Kd5 Nxa3 35.Kxc5: Beyaz direniyor. Motor: −2.8.' },
        { move: '33.axb4', text: '33...a3 34.bxc5 a2 35.Kf5 a1=Q: piyon vezir olur. Motor: −4.7.' },
      ],
    },
    '33b': {
      text: '33...gxh4: Siyah h4’te alır.',
      amac: 'Şah kanadında piyon değişip Beyazın geçer piyon şansını azaltmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−4.6). 33...Nxc2 34.Kd5 ile Beyaz şahı c5’e ulaşırdı (−1.6).',
      diger: [
        { move: '33...Nxc2', text: '34.Kd5 Nxa3 35.Kxc5 ile Beyaz şahı aktif. Motor: −1.6.' },
        { move: '33...Ke6', text: '34.h5 Nxc2 35.Bd6 ile h-piyonu tehlikeli. Motor: −1.8.' },
      ],
    },
    '34w': {
      text: '34.Bxh4: Fil geri alır ve f6’ya saldırır.',
      amac: 'Piyonu geri almak ve f6’yı hedef almak.',
      neden: 'Doğal alış (Motor: −4.4). 34.Be1? veya 34.Bb8? daha da kötü (−5.9 / −6.0).',
      diger: [
        { move: '34.Be1', text: '34...h3 35.Kf3 Nxc2 ile Siyahın h-piyonu ve at akını birlikte gelir. Motor: −5.9.' },
      ],
    },
    '34b': {
      text: '34...Ke6!: Siyah atı korumaz, şahını merkeze getirir.',
      amac: 'f6’yı korumak, Beyaz şahının d5’e girmesini önlemek ve atı zehirli bırakmak.',
      neden: '35.axb4 a3 36.bxc5 a2 sonrası d4 piyonu filin a1’e giden çaprazını kapattığı için piyon vezir olur (Motor: −4.5). 34...Nxc2 ise 35.Kd5! ile Beyaza karşı oyun verirdi (−0.7).',
      diger: [
        { move: '34...Nxc2', text: '35.Kd5 Nxa3 36.Kxc5 Nc2 37.Kc4: Beyaz şahı aktif. Motor: −0.7.' },
        { move: '34...Ke7', text: '35.g5 Ke6 36.gxf6 Nxc2 37.f7: denge. Motor: −0.1.' },
      ],
    },
    '35w': {
      text: '35.g5: Beyaz bir geçer piyon yaratmaya çalışır.',
      amac: 'f6’yı değişip f-piyonunu yürütmek.',
      neden: 'Beyazın tek şansı şah kanadında geçer piyon. 35.axb4 a3 36.bxc5 a2 ile kayıp (−4.7). Motor 35.g5 ile 35.axb4’ü yakın görüyor.',
      diger: [
        { move: '35.axb4', text: '35...a3 36.bxc5 a2 37.c6 a1=Q: piyon vezir olur. Motor: −4.7.' },
        { move: '35.Kf3', text: '35...Nxc2 36.Ke2 Nxa3 37.Kd2: pasif. Motor: −5.2.' },
      ],
    },
    '35b': {
      text: '35...Nxc2: At c2 piyonunu alır.',
      amac: 'c2’yi almak ve oradan a3’e geçmek.',
      neden: 'Motor en iyi hamle olarak görüyor (−5.6). 35...fxg5 36.Bxg5 Nxc2 37.Bc1 ile fil a3’ü korur (−2.1).',
      diger: [
        { move: '35...fxg5', text: '36.Bxg5 Nxc2 37.Bc1 ile fil a3’ü korur. Motor: −2.1.' },
        { move: '35...f5+', text: '36.Kf4 Nxc2 37.g6 ile g-piyonu tehlikeli. Motor: −2.1.' },
      ],
    },
    '36w': {
      text: '36.gxf6: Beyaz f6’da alır; f-piyonu ilerliyor.',
      amac: 'f-piyonunu vezire yürütmek.',
      neden: 'Motor 36.g6’yı biraz daha iyi buluyor (−6.0 / −6.4), ama ikisi de kayıp.',
      diger: [
        { move: '36.g6', text: '36...Nxa3 37.Kf3 Nc2 38.Ke2: kayıp. Motor: −6.0.' },
      ],
    },
    '36b': {
      text: '36...Nxa3: At a3 piyonunu da alır; Siyahın a-piyonu geçer piyon olur.',
      amac: 'a-piyonunu serbest bırakmak.',
      neden: 'f-piyonu tehlikeli görünse de şah e6’dan f7’yi kontrol ediyor. Motor: −5.9. 36...Nb4 veya 36...Ne3 ise dengeye yakın (−0.1).',
      diger: [
        { move: '36...Nb4', text: '37.f7 Kxf7 38.Bg5 Nxd3: denge. Motor: −0.1.' },
        { move: '36...Ne3', text: '37.f7 Kxf7 38.Bg5 Nc2: denge. Motor: −0.1.' },
      ],
    },
    '37w': {
      text: '37.f7: Son bir deneme.',
      amac: 'Siyahın şahını f-piyonuyla meşgul etmek.',
      neden: 'Motor 37.Kf4’ü biraz daha iyi buluyor (−4.7 / −4.9), ama ikisi de kayıp.',
      diger: [
        { move: '37.Kf4', text: '37...Nc2 38.Kg5 Kf7 39.Bg3: kayıp. Motor: −4.7.' },
      ],
    },
    '37b': {
      text: '37...Kxf7: Şah piyonu alır.',
      amac: 'Beyazın son geçer piyonunu ortadan kaldırmak.',
      neden: 'Zorunlu: 37...Nc4? 38.f8=Q ile Beyaz vezir yapar (+5.0).',
    },
    '38w': {
      text: '38.Kd5: Şah d5’e gelip c5 piyonuna yönelir.',
      amac: 'c5 ve d4 piyonlarını almak, a-piyonunu durdurmaya çalışmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−4.8). Beyazın tek şansı şahını vezir kanadına götürmek.',
      diger: [
        { move: '38.Bg5', text: '38...Nc2 39.Kd5 a3 40.Bc1: kayıp. Motor: −5.6.' },
      ],
    },
    '38b': {
      text: '38...Nc2: At c2’ye döner.',
      amac: 'd4 piyonunu korumak ve a3–a1 karelerini kontrol etmek.',
      neden: 'At c2’den d4’ü korur ve a-piyonunun ilerleyişini destekler. Motor: −5.2, en iyi hamle. 38...Kg6? ise 39.Kxc5 ile Beyaz şahı a-piyonunu durdurur (−0.1).',
      diger: [
        { move: '38...Kg6', text: '39.Kxc5 Nc2 40.Kc4: Beyaz şahı a-piyonunu durdurur. Motor: −0.1.' },
        { move: '38...Nb5', text: '39.Bg5 a3 40.Bc1 Nc3+: yine kazanır. Motor: −4.5.' },
      ],
    },
    '39w': {
      text: '39.Kc4: Şah c4 ile a-piyonunu durdurmaya çalışır.',
      amac: 'b3–a2 karelerine ulaşmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−5.1).',
      diger: [
        { move: '39.Bg5', text: '39...a3 40.Bc1 Nb4+ ile piyon yürür. Motor: −6.0.' },
      ],
    },
    '39b': {
      text: '39...Ne3+: At şah çeker.',
      amac: 'Beyaz şahını b3’ten uzaklaştırmak.',
      neden: 'Motor 39...Ke6’yı daha güçlü buluyor (−5.9 / −5.1), ama bu hamle de kazanır: 40.Kxc5 a3 sonrası şah a-piyonunu yakalayamaz.',
      diger: [
        { move: '39...Ke6', text: '40.Bg3 a3 41.Kb3 Nb4 ile kazanır. Motor: −5.9.' },
        { move: '39...a3', text: '40.Kb3 Nb4 41.Kxa3 Nxd3: kazanır. Motor: −5.7.' },
      ],
    },
    '40w': {
      text: '40.Kxc5: Şah c5 piyonunu alır.',
      amac: 'd4 piyonunu da alıp filin a1’e yolunu açmak.',
      neden: 'Motor en iyi hamle olarak görüyor (−5.2), ama çok geç.',
      diger: [
        { move: '40.Kb5', text: '40...a3 41.Bf6 Kxf6 42.Ka4: kayıp. Motor: −6.8.' },
      ],
    },
    '40b': {
      text: '40...a3: Piyon durdurulamaz; Hug terk etti.',
      amac: 'a-piyonunu vezire yürütmek.',
      neden: '41.Kxd4 a2 sonrası şah d4’te filin f6–a1 çaprazını kapatır; 42...a1=Q gelir. Motor: −5.1.',
    },
  },
  exercises: [
    { id: 'hko-1', kind: 'tekrar', plan: false, title: 'At akını: ...Nb4!',
      source: 'Hug – Korçnoy, Biel 1986 (32. hamle)',
      fen: '8/3k4/2n2p2/2p3p1/p2pK1P1/P2P2BP/2P5/8 b - - 1 32',
      prompt: 'At-fil oyun sonu. Beyaz şahını e4’e getirdi. Beyazın a3 ve c2 piyonları vezir kanadında. Siyahın en güçlü devamını oynayın.',
      hint: 'At hangi karede iki piyona birden saldırır? Beyaz atı alırsa a-piyonu ne yapar?',
      line: ['Nb4', 'h4', 'gxh4', 'Bxh4', 'Ke6'],
      explanation: '**32...Nb4!** At c2’ye (ve d3’e) saldırır; c2 düşünce oradan a3’ü de alacaktır. 33.axb4 a3 sonrası piyon vezir olur. **33.h4 gxh4 34.Bxh4 Ke6!** Siyah atı korumaz, çünkü 35.axb4 a3 36.Bxf6 a2 sonrası d4 piyonu a1 çaprazını kapatır. Motor: Nb4 −2.7, sonraki en iyi 0.0; 34...Ke6 −4.0, 34...Nxc2 −0.6.',
      link: 'Şah merkeze gidince vezir kanadındaki sabit piyonlar atın hedefi oldu.' },
    { id: 'hko-2', kind: 'tekrar', plan: false, title: 'Geçer piyon yaratmak',
      source: 'Hug – Korçnoy, Biel 1986 (36. hamle)',
      fen: '8/8/4kP2/2p5/p2pK2B/P2P4/2n5/8 b - - 0 36',
      prompt: 'Beyazın f6 piyonu ilerliyor. Siyahın atı c2’de. Siyah hangi hamleyle kazanır?',
      hint: 'a4 piyonunun önündeki engeli kaldırın.',
      line: ['Nxa3', 'f7', 'Kxf7'],
      explanation: '**36...Nxa3!** At a3’ü alır ve a-piyonu geçer piyon olur; **37.f7 Kxf7** sonrası Beyazın fili a-piyonunu durduramaz. Motor: Nxa3 −4.9, 36...Kf7 −0.1.',
      link: 'Vezir kanadındaki piyon çoğunluğu, atın a3 piyonunu almasıyla durdurulamaz bir geçer piyona dönüştü.' },
    { id: 'hko-3', kind: 'transfer', plan: false, title: '...d4 ile atı kovalamak',
      source: 'Medina – Portisch, Wijk aan Zee 1969 (22. hamle)',
      fen: '4rrk1/p2q1nbp/b3p1p1/2ppP3/2P2P2/4NBP1/P2B3P/1R1Q1R1K b - - 0 22',
      prompt: 'Kapalı Sicilya’dan çıkan bir orta oyun. Beyazın atı e3’te, c4 piyonu Siyahın a6 filinin çaprazında. Siyah hamlesini yapsın.',
      hint: 'd-piyonu ilerlerse e3 atı nereye gider ve c4 ne olur?',
      line: ['d4'],
      explanation: '**22...d4!** Piyon e3 atına saldırır; at kaçınca c4 piyonu düşer (23.Ng4 Bxc4). Motor: d4 −1.6, sonraki en iyi 22...g5 +0.1.',
      link: 'Korçnoy 6...d4 ile c3 atını kovaladı; Portisch aynı ilerleyişle e3 atını kovaladı ve filine c4’ü açtı.' },
    { id: 'hko-4', kind: 'transfer', plan: false, title: '...d4 ile karşı saldırı',
      source: 'Tiviakov – Kotronias, Fransa Takımlar Şampiyonası, Clichy 2007 (13. hamle)',
      fen: 'r2qkb1r/1b3pp1/p3pn2/1pppP2p/5P2/1PNP4/1PP3PP/R1BQ1RKN b kq - 0 13',
      prompt: 'Kapalı Sicilya. Beyaz e5 ile f6 atına saldırdı. Siyah atı çekmek yerine ne yapabilir?',
      hint: 'Siz de Beyazın bir atına saldırın.',
      line: ['d4'],
      explanation: '**13...d4!** Piyon c3 atına saldırır; 14.exf6 dxc3 sonrası Siyah taşını geri alır ve Beyazın piyon yapısı bozulur. Oyunda 14.Ne2 Qd5 ile Siyahın veziri uzun çaprazda güçlü bir kareye yerleşti. Motor: d4 −1.1, sonraki en iyi 13...b4 −0.3.',
      link: 'Korçnoy’un 6...d4 hamlesi gibi, d-piyonu c3 atını kovalar ve merkezde alan kazanır.' },
  ],
  sources: [
    { title: '365Chess: Biel 1986 turnuva tablosu', url: 'https://www.365chess.com/tournaments/Biel_1986/20047' },
    { title: '365Chess: B23 Sicilya, Kapalı, Korçnoy varyantı (2.Nc3 e6 3.g3 d5)', url: 'https://www.365chess.com/eco/B23_Sicilian_closed_Korchnoi_variation' },
    { title: 'Chess.com (Mr_Perry): Mastering the Korchnoi Defense against the Closed Sicilian', url: 'https://www.chess.com/blog/Mr_Perry/mr-perry-s-theorytalk-mastering-the-korchnoi-defense-against-the-closed-sicilian' },
    { title: 'Wikipedia: Werner Hug', url: 'https://en.wikipedia.org/wiki/Werner_Hug' },
    { title: 'OlimpBase: Biel uluslararası turnuvaları', url: 'https://www.olimpbase.org/ind-it/biel.html' },
  ],
};
