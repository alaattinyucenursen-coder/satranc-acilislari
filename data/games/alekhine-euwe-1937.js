// Alekhine – Euwe, Dünya Şampiyonası maçı, Hollanda 1937 (8. oyun). Kaynak: PgnMentor (Alekhine.pgn).
export default {
  id: 'alekhine-euwe-1937',
  theme: 'Fil çifti ve merkezde kalan şah',
  white: 'Aleksandr Alekhine', black: 'Max Euwe',
  whiteShort: 'Alekhine', blackShort: 'Euwe',
  event: 'Dünya Şampiyonası maçı, 8. oyun', site: 'Hollanda', year: 1937, eco: 'E34',
  variation: 'Nimzo-Hint Savunması, Klasik sistem, 4...d5', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 Qxd5 6. e3 c5 7. a3 Bxc3+ 8. bxc3 Nbd7 9. f3 cxd4 10. cxd4 Nb6 11. Ne2 Bd7 12. Nf4 Qd6 13. Bd2 Rc8 14. Qb2 Nfd5 15. Nxd5 exd5 16. Bb4 Qe6 17. Kf2 Na4 18. Qd2 b6 19. Ba6 Rb8 20. e4 b5 21. Qf4 Rb6 22. exd5 Qxd5 23. Rhe1+ Be6 24. Rac1 f6 25. Rc7 Kd8 26. Rxa7 1-0`,

  summary: 'Alekhine’in unvanı geri aldığı 1937 rövanş maçının 8. oyunu; Alekhine’in üst üste üçüncü galibiyeti ve maçta 5–3 öne geçtiği oyun. Euwe Nimzo-Hint’in Klasik sisteminde (4.Qc2) **4...d5** ile merkezi erkenden açtı, fil çiftini Beyaza bıraktı ve kısa rok yapmayı erteledi. Alekhine iki ince hamleyle oyunu kendi lehine çevirdi: **16.Bb4!** ile kara kareli fili a3–f8 çaprazına yerleştirip Siyahın kısa rokunu yasakladı, **17.Kf2!** ile de kendi şahını roksuz güvenceye aldı. Siyahın doğru cevabı ...f5/...f6 ve ...Kf7 ile kendi “yapay rokunu” yapmaktı; Euwe ise 17...Na4 ve özellikle **18...b6?** ile vakit kaybetti (motor: +0.8’den +3.0’a). 19.Ba6 kaleyi c-hattından kovaladı, **20.e4!** merkezi açtı ve e8’de kalan şah açık e- ve c-hatlarında Beyazın kalelerine dayanamadı. 25.Rc7 ve 26.Rxa7 sonrası mat ağı kaçınılmazdı; Euwe 26. hamlede terk etti.',
  intro: 'Nimzo-Hint’te 4.Qc2, Beyazın “c3’te katmerli piyon istemiyorum, fil çiftini temiz bir yapıyla alacağım” demesidir. Bunun bedeli zamandır: vezir erkenden oynar ve ileride tekrar oynamak zorunda kalabilir. Euwe bu yüzden **4...d5** (Noa varyantı) ile merkezi hemen açarak gelişim üstünlüğünü kullanmak istedi; 5...Qxd5 ile vezir merkezde aktif durur ama tempo ile kovalanmaya da açıktır. Maçta bu açılış dört kez (8., 10., 12. ve 20. oyunlar) tahtaya geldi. Bu oyunda izlenecek tema basit ama derindir: **kimin şahı daha önce güvenceye girer?** Beyaz şahını f2’ye koyup kalelerini bağlarken, Siyahın şahı b4 fili yüzünden e8’de kaldı ve merkez açıldığı anda oyun bitti.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '4.Qc2 ve 7.a3 ile **fil çiftini** almak; ...Bxc3 sonrası bxc3 ile c3–d4 piyonlarını merkeze toplamak ve b-hattını vezir için açmak.',
      '9.f3 ile e4 karesini Siyahın taşlarına kapatmak ve ileride **e4 kırılmasını** hazırlamak; o kırılma geldiğinde fillerin çaprazları açılacak.',
      '11.Ne2–12.Nf4 ile atı tempo kazanarak oyuna sokmak ve Siyah vezirini d5’ten kovmak.',
      'Kara kareli fili d2 üzerinden **b4’e** getirip a3–f8 çaprazını tutmak: f8 kontrol edilince Siyah kısa rok yapamaz, şah merkezde kalır.',
      'Şahı **f2’de** güvenceye almak (yapay rok); böylece h1 kalesi e1’e, a1 kalesi c1’e gelir ve iki kale de açık hatlara bağlanır.',
      'Siyahın her gevşek hamlesini tempo ile cezalandırmak (19.Ba6 kaleyi kovalar, 21.Qf4 b8 kalesine saldırır) ve son olarak kaleleri yedinci yataya sokmak (25.Rc7, 26.Rxa7).',
    ] },
    black: { title: 'Siyahın planı', points: [
      '4...d5 ve 6...c5 ile merkezi hızla açmak; Beyaz vezirinin c2’de geçirdiği zamandan yararlanarak **gelişim üstünlüğünü** somut baskıya çevirmek.',
      'Veziri d5’te aktif tutup ...cxd4 sonrası d4 piyonunu ve açılan c-hattını hedef almak.',
      'Atları b6 ve d5’e getirmek; c4 ve e3 karelerinde Beyazı rahatsız etmek, d5’teki at ile f4 atına karşı koymak.',
      'Kaleyi c-hattına koyup Beyazın vezir kanadındaki gevşek piyonlarına (a3) ve c-hattındaki girişlere baskı yapmak.',
      'Fil b4’e gelince **...f5 ya da ...f6 ve ...Kf7** ile şahı f7’ye kaçırıp kaleleri bağlamak; ...f5 aynı zamanda e4 kırılmasını da kalıcı olarak durdurur.',
      'Merkezi kapalı tutmak: Siyahın kurtuluşu e4’ün hiç oynanamamasıdır; d5 piyonu ve ...f5 bu yüzden kritik.',
    ] },
  },
  critical: [
    { move: '9w', title: '9.f3: e4 için uzun vadeli hazırlık', text: 'Beyaz f3 ile hem Siyah vezirinin ve atının e4’e girmesini engeller hem de e3–e4 ilerleyişini hazırlar. Motor bu hamleyi konumun en iyisi sayıyor (+0.7). Bedeli şahın biraz açılması ve g1–a7 çaprazının zayıflamasıdır; ama bu f3 piyonu sonradan 17.Kf2 ile kurulan “yapay rokun” da parçası olacak. Fil çiftinin gücü ancak merkez açıldığında ortaya çıkar ve e4 tam olarak o kapıdır.' },
    { move: '16w', title: '16.Bb4! rok yasaklandı', text: 'Fil d6’daki vezire saldırarak tempo kazanır ve a3–f8 çaprazına yerleşir. Artık f8 karesi kontrol altında olduğu için Siyah kısa rok yapamaz; uzun rok hakkı ise kale c8’e gittiğinde kaybolmuştu. Motor 16.Qb4’ü çok az daha iyi buluyor (+0.45’e +0.34), ama Bb4’ün yarattığı sorun Siyah için pratikte çok zordur: şah ya merkezde kalacak ya da ...f5/...f6 ve ...Kf7 ile zahmetli bir yolla güvenceye girecek.' },
    { move: '17w', title: '17.Kf2! roksuz güvenli şah', text: 'Beyaz rok yapmaz çünkü f1 filinin yerinden oynaması bile gerekmeden şah f2’de rahat eder: e3 ve f3 piyonları önünü kapatır, vezirler tahtada olsa bile Siyahın bu şaha ulaşacak hattı yoktur. Daha önemlisi h1 kalesi bir hamlede e1’e gelebilir. Böylece iki taraf arasındaki fark netleşir: Beyazın şahı güvende ve kaleleri bağlanmak üzere, Siyahın şahı ise merkezde. Motor: +0.3, yani konum hâlâ dengeye yakın; fark Siyahın bir sonraki birkaç hamlesinde açılacak.' },
    { move: '18b', title: '18...b6? kritik zaman kaybı', text: 'Oyunun asıl hatası. Motor 18...f5 (+0.8) ile hem e4’ü kalıcı olarak durdurmayı hem de ...Kf7 için yol açmayı öneriyor; 18...f6 ve 18...Nb6 de benzer değerde. 18...b6 ise a4 atını korumaya çalışırken a6 karesini Beyaz filine bırakır: b7 piyonu artık a6’yı tutmaz. 19.Ba6 c8 kalesini kovalar ve Siyah c-hattını terk etmek zorunda kalır. Motor: +3.0.' },
    { move: '19b', title: '19...Rb8? c-hattı terk edildi', text: 'Kale b8’e çekilince c-hattı tamamen Beyaza kalır ve kale b8’de ileride 21.Qf4 ile tempo kaybettiren bir hedef olur. Motor en iyi savunma olarak 19...Rc4! 20.Bxc4 dxc4 ile kalite vermeyi gösteriyor (+3.0): Siyah bir kalite eksik kalır ama d5 piyonu c4’e geçtiği için e4 kırılması zararsızlaşır. 19...Rb8 sonrası motor +4.7 diyor.' },
    { move: '20w', title: '20.e4! merkez açılıyor', text: 'Dokuzuncu hamlede hazırlanan kırılma nihayet gelir. Siyah şahı e8’de ve b4 fili yüzünden f8’e de geçemezken e4, d5 piyonuna saldırır ve e-hattını açar. 20...dxe4 21.Rhe1 sonrası e-hattı Siyah şahının önüne açılır (motor: +4.2); oyundaki 20...b5 ise 21.Qf4 ve 22.exd5 ile daha da kötüleşir. Motor: e4 +4.8.' },
    { move: '23w', title: '23.Rhe1+: bağlanan kaleler oyuna giriyor', text: '17.Kf2’nin meyvesi: h1 kalesi tek hamlede açık e-hattına gelir ve şah çeker. 23...Be6 zorunludur (23...Kd8 ya da 23...Qe6 çok daha hızlı kaybeder). Ardından 24.Rac1 ile ikinci kale de c-hattına gelir; Beyaz bütün taşlarını kullanırken Siyahın h8 kalesi oyunun sonuna kadar hiç oynamamıştır.' },
    { move: '25w', title: '25.Rc7: yedinci yatay ve mat ağı', text: 'Kale yedinci yataya girer; Re7+, Rxg7 ve Qc7 gibi tehditler aynı anda gelir. Motor: +11 ve 25...Kd8 sonrası mat görüyor. 26.Rxa7 ile Qb8+ ve Ra8+ tehditleri çözülmez hale gelir; Euwe terk etti. Bu sonuç, açılışta kazanılan fil çiftinin ve 16.Bb4 ile merkeze çakılan şahın doğal karşılığıdır.' },
  ],
  lessons: [
    'Rakibin şahı merkezde kaldığında **merkezi açmak** (burada 20.e4) her şeyden önce gelir; piyon kırılması önceden (9.f3) hazırlanmışsa etkisi çok daha büyük olur.',
    'Kara kareli fil b4 ya da a3’ten f8’i kontrol ederek **rok yapmayı yasaklayabilir**; bu durumda savunan taraf ...f5/...f6 ve ...Kf7 gibi bir “yapay rok” planını hemen uygulamalıdır.',
    'Vezirler tahtadayken bile şahı bazen roksuz güvenceye alabilirsiniz (17.Kf2): önemli olan şahın önünde piyon olması ve kalelerin bağlanabilmesidir.',
    'Şahınız tehlikedeyken vezir kanadında piyon hamlesi (18...b6) yapmak tempo kaybıdır ve çoğu zaman yeni bir zayıf kare (a6) yaratır.',
    'Açık bir hattı (c-hattı) savaşmadan terk etmek yerine bazen **kalite vermek** daha iyi savunmadır (19...Rc4!).',
    'Fil çifti açık konumlarda en güçlü halindedir: Ba6 ve Bb4, birbirine çok uzak iki çaprazdan Siyahın kalelerini ve şahını birlikte felç etti.',
    'Bir açılışta vezirle erken merkeze çıkmak (5...Qxd5) gelişim kazandırır ama vezir kovalandıkça (12.Nf4, 16.Bb4) o tempolar rakibe geçer.',
  ],
  qa: [
    { q: 'Euwe neden 4...d5 oynadı ve 5...Qxd5 ile neden vezirle aldı?', a: '4.Qc2 Beyazın veziriyle zaman kaybetmesi demektir; 4...d5 bu zamanı kullanıp merkezi hemen açmayı amaçlar (Vikipedi’ye göre bu hamleyi daha sonra Botvinnik de sık oynadı). 5...exd5 daha sağlam bir yapı verirdi (motor +0.2, Beyaz 6.Bg5 ile oynar); 5...Qxd5 ise veziri aktif tutup ...c5 ile d4’e hızlı baskı kurmayı hedefler. Bedeli, vezirin ileride Nf4 gibi hamlelerle tempo kaybettirilmesidir.' },
    { q: 'Siyah neden hiç rok yapmadı?', a: 'Siyah önce taşlarını (Nb6, Bd7, Nf4’e karşı Qd6) yerleştirmeyi seçti; motor 8...O-O ya da 11...O-O (+0.6) gibi erken rokları biraz daha iyi buluyor. 12...Qd6’dan sonra ise rok taktik olarak imkânsızlaştı: örneğin 13...O-O? 14.Bb4! Qb8 15.Bxf8 (+2.9) kalite kaybettirir. 16.Bb4 sonrası f8 karesi kalıcı olarak kontrol altına girdi. O andan sonra şahı güvenceye almanın tek yolu ...f5/...f6 ve ...Kf7 idi.' },
    { q: 'Beyaz neden rok yapmadı da 17.Kf2 oynadı?', a: 'f1 fili henüz yerinde olduğu için kısa rok iki hamle daha isterdi; Kf2 ise tek hamlede aynı işi görür. f2’de şahın önünde e3 ve f3 piyonları vardır ve Siyahın bu şaha saldıracak açık hattı yoktur. Üstelik h1 kalesi doğrudan e1’e gelebilir; oyunda 23.Rhe1+ tam olarak bu yüzden mümkün oldu.' },
    { q: 'Siyah 17. ve 18. hamlelerde ne oynamalıydı?', a: 'Motorun önerisi her iki hamlede de ...f5 ya da ...f6 ve ardından ...Kf7: 17...f5 18.Bd3 Nc4 (+0.25) ya da 18...f5 19.Bd3 Nb6 (+0.8). Bu plan hem şahı f7’ye götürür hem de e4 kırılmasını durdurur; özellikle ...f5 sonrası e4 için Beyazın önce f-piyonunu değiştirmesi gerekir. Euwe bunun yerine 17...Na4 ve 18...b6 ile vezir kanadında oynadı ve iki değerli tempoyu kaybetti.' },
    { q: '18...b6 neden bu kadar kötüydü? Tek bir piyon hamlesi.', a: 'Çünkü b7 piyonu a6 karesini koruyordu. 18...b6 sonrası 19.Ba6! c8 kalesine saldırır ve kale c-hattını terk etmek zorunda kalır; Beyaz c-hattını ve tempo kazanır. Motor değerlendirmesi +0.8’den +3.0’a fırlıyor; hamle, konumun ihtiyaç duyduğu ...f5/...Kf7 planına hiçbir katkı yapmıyor.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Malzeme değil, **şah güvenliği farkı**ndan. Beyaz fil çiftini aldı (7.a3, 8.bxc3), 9.f3 ile e4’ü hazırladı, 16.Bb4 ile Siyahın rokunu engelledi ve 17.Kf2 ile kendi şahını güvenceye aldı. Siyah iki hamle boşa geçirince (17...Na4, 18...b6) bu yapısal fark taktik bir saldırıya dönüştü: 20.e4 ile hatlar açıldığında Beyazın kaleleri e- ve c-hatlarına gelirken Siyahın h8 kalesi hiç oyuna giremedi.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En net an 18. hamleydi: 18...f5 ile motor sadece +0.8 diyor. 19. hamlede de 19...Rc4! 20.Bxc4 dxc4 ile kalite verip merkezi kapatmak (+3.0) en dirençli yoldu; oyundaki 19...Rb8 sonrası (+4.7) konum artık kaybedilmişti. 22. hamlede 22...Nb2 ile karışıklık aramak da (+5.0) sonucu değiştirmezdi.' },
    { q: '20...b5 yerine 20...dxe4 daha mı iyiydi?', a: 'Biraz daha dirençliydi ama kurtarmıyordu: 20...dxe4 21.Rhe1 f5 22.Qf4 sonrası motor yaklaşık +4.2 diyor. Siyahın sorunu taktik değil yapısaldı; şah e8’de ve h8 kalesi oyun dışıyken merkez açıldığında hiçbir hamle yeterli olmaz. 20...b5 ise b4 filini tehdit etmeye çalıştı ama 21.Qf4 b8’deki kaleye saldırarak yeni bir tempo kazandı.' },
  ],
  sources: [
    { title: 'Wikipedia: World Chess Championship 1937', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_1937' },
    { title: 'Chessgames.com: Alekhine – Euwe World Championship Rematch 1937 (oyun listesi)', url: 'https://www.chessgames.com/perl/chess.pl?tid=54136' },
    { title: 'Chess.com blog (kahns): A Century of Chess – Alekhine-Euwe 1937 (Part I)', url: 'https://www.chess.com/blog/kahns/a-century-of-chess-alekhine-euwe-1937-part-i' },
    { title: 'Chess.com: Clash of Champions – Alekhine vs. Euwe (1937 Rematch)', url: 'https://www.chess.com/article/view/clash-of-champions-alekhine-vs-euwe-1937-rematch' },
    { title: 'Wikipedia: Nimzo-Indian Defence', url: 'https://en.wikipedia.org/wiki/Nimzo-Indian_Defence' },
    { title: 'ChessBase: Kasimdzhanov – Meet the Nimzo-Indian with 4.Qc2 (inceleme)', url: 'https://en.chessbase.com/post/kasimzhanov-meet-the-nimzo-indian-with-4qc2' },
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Beyaz merkeze vezir piyonuyla girer ve c1 filinin yolunu açar.',
      amac: 'Merkezde d4 piyonunu sağlam bir dayanak yapıp ardından c4 ile vezir kanadında alan kazanmak.',
      neden: 'Alekhine bu maçta beyazlarla hemen hep 1.d4 (ya da d4’e dönüşen sıralar) oynadı; d4 açılışları onun pozisyonel baskı kurma tarzına uygundu. d4 piyonu e4’ün aksine vezir tarafından korunduğu için erken taktiklere daha az açıktır.',
      diger: [
        { move: '1.e4', text: 'Motor 1.e4’ü bir tık daha iyi buluyor (+0.4) ama fark pratikte anlamsız. Euwe 1.e4’e karşı da hazırlıklı bir oyuncuydu.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (+0.2); çoğu zaman aynı d4–c4 yapısına dönüşür.' },
      ],
    },
    '1b': {
      text: '1...Nf6 ile Siyah at e4’ü kontrol eder ve piyon yapısını henüz belirlemez.',
      amac: 'Beyazın 2.e4 ile tam merkez kurmasını engellemek ve Hint savunmalarından birini seçme esnekliğini korumak.',
      neden: 'Bu maçta Euwe ağırlıklı olarak 1...d5 (Slav) oynadı; 8. oyunda 1...Nf6 ile Nimzo-Hint’e yöneldi. 1...Nf6 hem Nimzo-Hint hem de Vezir-Hint seçeneklerini açık tutar.',
      diger: [
        { move: '1...d5', text: 'Klasik cevap (+0.35); maçın birçok oyununda Slav’a döndü.' },
        { move: '1...e6', text: 'Fransız ya da Nimzo-Hint’e geçiş arayan bir sıra; Beyaz 2.e4 ile Fransız’a sokabilir.' },
      ],
    },
    '2w': {
      text: '2.c4 ile Beyaz d5 karesine ikinci kez baskı yapar ve vezir kanadında yer kazanır.',
      amac: 'Siyahın ...d5 ile merkezde rahatça yerleşmesini zorlaştırmak; Nc3 ile e4 için zemin hazırlamak.',
      neden: '2.c4, d4 açılışlarının ana yoludur (+0.4). c-piyonunu atın önüne çıkararak at sonra c3’e gelebilir ve hem d5’i hem e4’ü tutar.',
      diger: [
        { move: '2.Nf3', text: 'Nimzo-Hint’ten kaçınmak isteyen oyuncuların tercihi (+0.4); 2...e6 3.c4 b6 ile Vezir-Hint’e gider.' },
        { move: '2.Bg5', text: 'Trompowsky tipi bir yan yol; merkezde daha az iddialıdır.' },
      ],
    },
    '2b': {
      text: '2...e6 ile f8 filinin yolu açılır ve d5 karesi desteklenir.',
      amac: 'Bir sonraki hamlede ...Bb4 ile Nimzo-Hint’e ya da ...d5 ile Vezir Gambiti’ne geçme imkânı hazırlamak.',
      neden: 'Siyah piyon yapısını sağlam tutar; e6 piyonu d5’i destekler ve fil için b4 çaprazını açar. 2...g6 (Kral-Hint/Grünfeld) daha dinamik ama daha riskli yapılara götürür.',
      diger: [
        { move: '2...g6', text: 'Kral-Hint ya da Grünfeld (+0.35); Euwe bu tip yapıları bu maçta seçmedi.' },
        { move: '2...c6', text: 'Slav’a geçiş arayan sıra (+0.4).' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile at e4 ve d5 karelerini kontrol eder; Beyaz e4 ilerleyişini tehdit eder.',
      amac: 'Merkezi tam kontrol etmek ve ileride e2–e4 ile büyük bir piyon merkezi kurmak.',
      neden: '3.Nc3 Siyaha Nimzo-Hint’e girme izni verir; Alekhine bunu kabul etti. 3.Nf3 ya da 3.g3 ile Nimzo-Hint’ten kaçılabilir (motor bunları biraz daha iyi buluyor: +0.4), ama Nc3 en iddialı gelişimdir.',
      diger: [
        { move: '3.Nf3', text: '3...Bb4+ ya da 3...b6 (Vezir-Hint) gelir; Nimzo-Hint kurulmaz (+0.4).' },
        { move: '3.g3', text: 'Katalan yapısı (+0.4); fil g2’den uzun çaprazı tutar.' },
      ],
    },
    '3b': {
      text: '3...Bb4 ile Nimzo-Hint Savunması kurulur: fil c3 atını bağlar.',
      amac: 'c3 atını bağlayarak e4 kontrolünü zayıflatmak ve gerekirse Bxc3 ile Beyazın piyon yapısını bozmak.',
      neden: 'Nimzowitsch’in fikridir: Siyah merkezi piyonlarla değil taşlarla kontrol eder. Motor bu hamleyi en iyi buluyor (+0.2); 3...d5 Vezir Gambiti’ne döner.',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Reddi (+0.3); daha klasik bir yapı.' },
        { move: '3...c5', text: 'Benoni tipi yapılar (+0.5); Beyaz 4.d5 ile alan kazanır.' },
      ],
    },
    '4w': {
      text: '4.Qc2, Klasik (Capablanca) sistemi: vezir e4’ü kontrol eder ve ...Bxc3 sonrası vezirle geri alma imkânı verir.',
      amac: 'Fil çiftini, c3’te katmerli piyon kabul etmeden almak; e4 ilerleyişini desteklemek.',
      neden: 'Vikipedi’nin özetiyle Beyaz “fil çiftini piyon yapısını bozmadan almayı” amaçlar. Bedeli vezirin erken oynaması ve d4’ün korumasız kalmasıdır; bu yüzden Siyah genellikle oyunu hızla açmaya çalışır. Motor 4.Qc2’yi en iyi seçenek sayıyor (+0.35).',
      diger: [
        { move: '4.e3', text: 'Rubinstein sistemi (+0.2); Beyaz sağlam gelişir ama c3’te katmerli piyonu kabul edebilir.' },
        { move: '4.Nf3', text: 'Esnek gelişim (+0.25); 4...b6 ya da 4...c5 ile Siyah rahat oyun bulur.' },
        { move: '4.a3', text: 'Sämisch: fil çifti hemen alınır ama c3 piyonları katmerlenir.' },
      ],
    },
    '4b': {
      text: '4...d5 ile Siyah merkezde hemen hak iddia eder (Noa varyantı).',
      amac: 'Beyaz veziri c2’de zaman kaybederken merkezi açmak ve gelişim üstünlüğünü kullanmak.',
      neden: 'ChessBase’in Kasimdzhanov incelemesinde de vurgulandığı gibi bu yapılarda Siyah gelişimde öndedir ve Beyaz vezirini c3’e tekrar oynayarak zaman kaybeder. Motor 4...O-O’yu bir tık daha iyi buluyor (+0.25’e +0.37), fark küçük.',
      diger: [
        { move: '4...O-O', text: 'En yaygın cevap (+0.25): önce şah güvenceye alınır, merkez kararı ertelenir.' },
        { move: '4...c5', text: 'c2’deki vezirin d4’ü artık korumamasından yararlanır; 5.dxc5 ile keskin oyun.' },
        { move: '4...Nc6', text: 'Zürih (Milner-Barry) varyantı; ...d6 ve ...e5 ile merkez kurulur.' },
      ],
    },
    '5w': {
      text: '5.cxd5 ile Beyaz merkezde değişim yapar ve Siyaha nasıl geri alacağını seçtirir.',
      amac: 'Siyahı ya vezirle (aktif ama hedef olan vezir) ya da e-piyonuyla (sabit yapı) almaya zorlamak.',
      neden: 'Motor 5.a3’ü biraz daha iyi buluyor (+0.2); oyundaki 5.cxd5 sonrası değerlendirme 0.00. Alekhine merkezi erken netleştirip vezirle alırsa Siyah vezirini tempo ile kovalamayı planladı.',
      diger: [
        { move: '5.a3', text: 'Fili hemen sorgular (+0.2): 5...Bxc3+ 6.Qxc3 ile Beyaz fil çiftini temiz yapıyla alır; ana yol budur.' },
        { move: '5.e3', text: 'Sakin gelişim (0.1); 5...c5 ile Siyah rahat oyun bulur.' },
      ],
    },
    '5b': {
      text: '5...Qxd5 ile vezirle alınır; vezir d5’te merkezi kontrol eder ve g2’ye bakar.',
      amac: 'Veziri aktif tutup ...c5 ile d4’e hızla baskı kurmak; e-hattını kapatmamak.',
      neden: 'Euwe aktif oyunu seçti. 5...exd5 daha sağlamdır (motor +0.2) ama Beyaz 6.Bg5 ile bağlayarak oynar ve yapı sabitlenir. Vezirle almanın riski, d5’teki vezirin ileride e4 ya da Nf4 gibi hamlelerle tempo kaybettirilmesidir.',
      diger: [
        { move: '5...exd5', text: 'Daha sağlam (+0.2); 6.Bg5 h6 7.Bh4 c5 gibi keskin ana yollara götürür.' },
        { move: '5...c5', text: 'Kumar tipi bir ara hamle (+0.35); 6.dxc6 Qxd4 ile vezir merkeze gelir.' },
      ],
    },
    '6w': {
      text: '6.e3 ile d4 desteklenir ve f1 filinin yolu açılır.',
      amac: 'Merkezi sağlamlaştırıp ...c5 ve ...Qxd4 gibi baskılara karşı hazırlıklı olmak.',
      neden: 'Motor 6.e3’ü en iyi buluyor (+0.4). 6.Nf3 Qf5 ile Siyah vezir değişimine gidebilir; e3 hem d4’ü tutar hem de ilerideki e4 planının ilk adımıdır.',
      diger: [
        { move: '6.Nf3', text: '6...Qf5 7.Qxf5 exf5 ile vezirler değişir (+0.3); Beyazın avantajı küçülür.' },
        { move: '6.a3', text: 'Önce fili sorgulamak (+0.2): 6...Bxc3+ 7.bxc3 c5 ile oyundakine benzer yapı.' },
      ],
    },
    '6b': {
      text: '6...c5 ile Siyah d4 piyonuna saldırır.',
      amac: 'Merkezi açmak ve c-hattını kaleyle kullanmak için hazırlamak.',
      neden: 'Gelişim üstünlüğü olan taraf oyunu açmalıdır; motor da 6...c5’i en iyi sayıyor (+0.2). 6...e5 merkezde iddialı ama f8 filini b4’te asılı bırakır ve d4 sonrası taktiklere açıktır (+0.45).',
      diger: [
        { move: '6...e5', text: 'Merkez kırılması (+0.45); 7.Bd2 Bxc3 8.bxc3 sonrası Beyaz rahattır.' },
        { move: '6...Qe4', text: 'Vezir değişimi arayışı (+0.45); 7.Qb3 ile Beyaz kaçınır.' },
      ],
    },
    '7w': {
      text: '7.a3 ile b4 fili sorgulanır; Siyah ya fili değişecek ya da geri çekecek.',
      amac: 'Fil çiftini kazanmak; bxc3 ile alırsa c3–d4 piyonlarını merkezde toplamak ve b-hattını açmak.',
      neden: 'Motor 7.Bd2’yi biraz daha iyi buluyor (+0.3’e +0.15), ama Alekhine’in seçimi plana uygundur: ...Bxc3+ sonrası bxc3 ile c-piyonu merkeze yaklaşır ve b-hattı vezir için açılır. 7...cxd4 8.axb4 dxc3 gibi denemeler Beyaz lehine çalışır.',
      diger: [
        { move: '7.Bd2', text: '7...Bxc3 8.Bxc3 sonrası fil c3’te güçlü durur (+0.3).' },
        { move: '7.dxc5', text: '7...O-O 8.Bd2 Qxc5 ile Siyah gelişim üstünlüğünü korur (+0.2).' },
      ],
    },
    '7b': {
      text: '7...Bxc3+ ile fil atı alır; Beyaz fil çiftini kazanır.',
      amac: 'Beyazın piyon yapısını en azından şekil olarak bozmak ve vezirini korumak.',
      neden: 'Diğer seçenekler kötü: 7...cxd4 8.axb4 dxc3 9.bxc3 sonrası Beyaz a-hattını açar (+0.7), 7...Qf5 ise ağır bir tempo kaybıdır (+1.2). Motor 7...Bxc3+’yı açık ara en iyi buluyor (+0.1).',
      diger: [
        { move: '7...cxd4', text: '8.axb4 dxc3 9.bxc3 ile Beyaz a-hattını ve merkezi kazanır (+0.7).' },
        { move: '7...Qa5', text: 'Fili korumaya çalışır ama b4 ile tempo kaybettirilir.' },
      ],
    },
    '8w': {
      text: '8.bxc3 ile piyonla alınır. Beyaz c3 ve d4 ile merkezi güçlendirir ve b-hattını açar.',
      amac: 'Piyon yapısını merkeze toplamak, b-hattını vezir için açmak ve fil çiftiyle uzun vadeli oyun kurmak.',
      neden: 'Motor 8.bxc3 ve 8.Qxc3’ü neredeyse eşit görüyor (+0.1). Piyonla almak c3 piyonunu d4’ün yanına getirir; vezir c2’de kalır ve b-hattı ileride Qb2 ile b7’ye baskı için kullanılır.',
      diger: [
        { move: '8.Qxc3', text: '4.Qc2’nin asıl fikri (+0.06): yapı bozulmaz, ama vezir ...Ne4 ya da ...cxd4 ile tekrar tempo kaybedebilir.' },
      ],
    },
    '8b': {
      text: '8...Nbd7 ile at d7’ye gelir; b6 karesine ve c5’e destek verir.',
      amac: 'Atı b6 üzerinden c4 ve d5’e götürmek, c5 piyonunu desteklemek.',
      neden: 'Motor 8...b6 (fili b7’ye getirmek), 8...cxd4 ya da 8...O-O’yu daha iyi buluyor (+0.1); 8...Nbd7 sonrası +0.7. Sorun, c8 filinin yolunun kapanması ve Siyahın hem rok yapmayıp hem de 9.f3 sonrası merkezde net bir hedef bulamamasıdır.',
      diger: [
        { move: '8...b6', text: 'Fil b7’den e4’e ve g2’ye bakar; 9.f3 cxd4 10.cxd4 O-O sonrası denge (+0.1).' },
        { move: '8...O-O', text: 'Önce rok (+0.1): şahın güvenliği, ileride gelecek Bb4 fikrini baştan anlamsız kılar.' },
      ],
    },
    '9w': {
      text: '9.f3! ile Beyaz e4 karesini Siyahın vezirine ve atına kapatır.',
      amac: 'e3–e4 ilerleyişini hazırlamak; merkez açıldığında fil çiftinin çaprazlarını açmak.',
      neden: 'Motor 9.f3’ü konumun en iyi hamlesi sayıyor (+0.7). ...Qe4 ya da ...Ne4 gibi rahatlatıcı hamleler artık imkânsız. Bedeli g1–a7 çaprazının zayıflaması, ama bu f3 piyonu daha sonra f2’ye gelecek şaha da kalkan olacak.',
      diger: [
        { move: '9.a4', text: 'Vezir kanadında alan kazanır (+0.5) ama e4 kontrolünü Siyaha bırakır.' },
        { move: '9.Qb2', text: 'b7’ye baskı (+0.4); 9...O-O 10.f3 ile benzer yapı.' },
      ],
    },
    '9b': {
      text: '9...cxd4 ile Siyah merkezde değişim yapar ve c-hattını açar.',
      amac: 'c-hattını kale için açmak ve Beyazın c-piyonunu merkeze çekip vezir kanadında zayıflık yaratmak.',
      neden: 'Motor 9...cxd4’ü en iyi buluyor (+0.7). 9...O-O 10.e4 sonrası vezir tempo kaybeder ve Beyaz merkezi tam kurar (+0.8).',
      diger: [
        { move: '9...O-O', text: '10.e4 Qc6 11.Qb2 ile Beyazın merkezi kurulur (+0.8).' },
        { move: '9...Qc6', text: 'Veziri c-hattına taşır (+0.8); 10.Qb2 ile Beyaz rahat oynar.' },
      ],
    },
    '10w': {
      text: '10.cxd4 ile c-piyonuyla alınır; Beyazın merkezi d4 ve e3 piyonlarıyla sağlam.',
      amac: 'Merkezi korumak ve e3–e4 planını canlı tutmak.',
      neden: 'Diğer almalar çok kötü: 10.exd4 merkezi ve e4 planını bozar (−0.2), 10.e4 ise 10...Qc6 ile piyon kaybettirir (−0.7). 10.cxd4 motorun açık ara ilk tercihi (+0.6).',
      diger: [
        { move: '10.exd4', text: '10...e5 ile Siyah merkezde karşı oyun bulur (−0.2).' },
        { move: '10.e4', text: '10...Qc6 11.Ra2 dxc3 ile Beyaz piyon kaybeder (−0.7).' },
      ],
    },
    '10b': {
      text: '10...Nb6 ile at b6’dan c4 ve d5 karelerine bakar.',
      amac: 'Atı d5’e ya da c4’e getirip Beyazın kara karelerdeki zayıflıklarını hedef almak; c8 filinin yolunu açmak.',
      neden: 'Motor 10...Nb6’yı en iyi buluyor (+0.7). Aynı zamanda d7 karesi boşalır ve c8 fili ...Bd7 ile gelişebilir.',
      diger: [
        { move: '10...O-O', text: 'Önce rok (+0.8): 11.a4 Rd8 12.Bc4 ile Beyaz tempo kazanır.' },
        { move: '10...e5', text: 'Merkezi açma denemesi (+0.8); 11.Bc4 Qc6 sonrası Beyazın filleri aktifleşir.' },
      ],
    },
    '11w': {
      text: '11.Ne2 ile at e2 üzerinden f4’e gidecek ve d5’teki veziri kovalayacak.',
      amac: 'Atı geliştirirken tempo kazanmak; f4’ten d5 ve e6’ya baskı yapmak.',
      neden: 'Motor 11.Qb2 ya da 11.Bd3’ü daha iyi buluyor (+0.7’ye +0.4). Ne2 f1 filinin yolunu bir süre kapatır, ama Alekhine’in fikri net: Nf4 vezire saldıracak ve Siyah tempo kaybedecek.',
      diger: [
        { move: '11.Qb2', text: 'b7 ve kara çaprazı tutar (+0.7); 11...Bd7 12.e4 Qc6 13.Bd3 ile merkez kurulur.' },
        { move: '11.Bd3', text: 'Fili geliştirip rok hazırlar (+0.7).' },
      ],
    },
    '11b': {
      text: '11...Bd7 ile fil gelişir ve c-hattındaki kaleye yol açar.',
      amac: 'Vezir kanadını tamamlamak, ...Rc8 ile c-hattını almak; ...Ba4 ile c2’deki veziri rahatsız etmek.',
      neden: 'Motor 11...Qd8 ya da 11...O-O’yu daha iyi buluyor (+0.5 ve +0.6); 11...Bd7 sonrası 12.e4 ile vezir tempo kaybedebilir (+0.8). Euwe yine rok yapmayı erteledi.',
      diger: [
        { move: '11...O-O', text: 'Şahı güvenceye alır (+0.6); 12.a4 Bd7 13.a5 Na4 ile oyun dengeli.' },
        { move: '11...Qd8', text: 'Veziri önceden geri çeker (+0.5); 12.Qb2 O-O 13.e4 ile Beyaz merkez kurar.' },
      ],
    },
    '12w': {
      text: '12.Nf4 ile at tempo kazanarak vezire saldırır.',
      amac: 'Veziri merkezden uzaklaştırmak ve f4’teki atla e6 ve d5’e baskı yapmak.',
      neden: 'Motor 12.e4’ü bir tık daha iyi buluyor (+0.85; 12...Qc4 ile vezir değişimi gelir). Alekhine vezirleri tahtada tutmayı tercih etti; vezirler kalınca Siyahın merkezde kalan şahı daha büyük bir sorun olur.',
      diger: [
        { move: '12.e4', text: '12...Qc4 13.Qxc4 Nxc4 ile vezirler değişir (+0.85); avantaj sürer ama saldırı şansı azalır.' },
        { move: '12.Nc3', text: 'Atı geri getirir (+0.3) ama tempo kazanmaz.' },
      ],
    },
    '12b': {
      text: '12...Qd6 ile vezir d6’ya çekilir; hem b4’e hem de h2’ye bakar.',
      amac: 'Veziri güvenli ama aktif bir yere çekmek; ...Rc8 ve ...Nfd5 ile oyunu sürdürmek.',
      neden: 'Motor 12...Qd6 ve 12...Qc6’yı eşit görüyor (+0.7). Ama d6’daki vezirin gizli bir bedeli var: d2 fili b4’e geldiğinde vezire tempo ile saldırır; bu yüzden vezir d6’da kaldıkça kısa rok Bb4 ile kalite kaybettirecek. 12...Qc6 vezir değişimine gider (13.Qxc6 Bxc6); 12...Qa5+ ise 13.Bd2 ile kovalanır (+0.9).',
      diger: [
        { move: '12...Qc6', text: '13.Qxc6 Bxc6 ile vezirler değişir (+0.7); Siyahın şah sorunu küçülür.' },
        { move: '12...Qa5+', text: '13.Bd2 Qa4 14.Qxa4 Bxa4 (+0.9); Beyaz fili tempo ile gelişir.' },
      ],
    },
    '13w': {
      text: '13.Bd2 ile fil d2’ye gelir; yolu b4’e uzanıyor.',
      amac: 'Kara kareli fili a3–f8 çaprazına hazırlamak; vezir kanadını bağlamak.',
      neden: 'Motor 13.a4’ü biraz daha iyi buluyor (+0.65’e +0.5). Ama Bd2–b4 manevrası, d6’daki vezire karşı gelecek tempo ve f8 kontrolü düşünüldüğünde oyunun geri kalanını belirleyen bir hazırlıktır.',
      diger: [
        { move: '13.a4', text: '13...Nfd5 14.a5 Rc8 ile Beyaz vezir kanadında alan kazanır (+0.65).' },
        { move: '13.Qd2', text: '13...O-O 14.e4 ile merkez (+0.45); Siyah bu sırada rok yapabilir.' },
      ],
    },
    '13b': {
      text: '13...Rc8 ile kale açık c-hattına gelir ve c2’deki veziri hedef alır.',
      amac: 'c-hattını kontrol edip Beyazın vezirini rahatsız etmek; ...Nc4 gibi girişleri desteklemek.',
      neden: 'Motor 13...Rc8’i en iyi buluyor (+0.4). Ama dikkat: kale c8’e gidince uzun rok hakkı kaybolur, şahın tek çıkışı kısa rok kalır. O da şu an taktik olarak imkânsız: vezir d6’dayken ...O-O, Bb4 ile kalite kaybettirir. Alekhine bu kapıyı 16.Bb4 ile kalıcı olarak kapatacak.',
      diger: [
        { move: '13...Nfd5', text: '14.Nxd5 Qxd5 15.Qb2 O-O ile Siyah rok yapar (+0.4).' },
        { move: '13...O-O?', text: '14.Bb4! Qb8 15.Bxf8 Qxf8 (+2.9): vezir d6’dayken Bb4 hem vezire hem f8 kalesine saldırır ve kalite kazanır.' },
      ],
    },
    '14w': {
      text: '14.Qb2 ile vezir c-hattından çıkar; b7’ye bakar ve b4’e gelecek fili destekler.',
      amac: 'c-hattındaki kale baskısından kurtulmak ve vezir kanadındaki kara kareleri tutmak.',
      neden: 'Motor 14.Qb2’yi en iyi buluyor (+0.4). Vezir b2’de b-hattını kullanır, d4’ü dolaylı korur ve Bb4 için a3–b4 desteği verir.',
      diger: [
        { move: '14.Qb3', text: '14...e5 15.dxe5 Qxe5 ile Siyah merkezde aktifleşir (+0.3).' },
        { move: '14.Qb1', text: '14...Nfd5 15.Nxd5 Qxd5 (+0.2); vezir pasif kalır.' },
      ],
    },
    '14b': {
      text: '14...Nfd5 ile at d5’e gelir ve f4 atına karşı çıkar.',
      amac: 'Beyazın en aktif taşı olan f4 atını değiştirmek ve d5’i bir taşla tutmak.',
      neden: 'Motor 14...Nfd5’i en iyi buluyor (+0.3). 14...Qb8 ya da 14...Ba4 daha pasif (+0.65 ve +0.9).',
      diger: [
        { move: '14...Qb8', text: '15.Rb1 O-O 16.Bd3 (+0.65); vezir pasif.' },
        { move: '14...O-O?', text: 'Yine aynı taktik: 15.Bb4! Qc6 16.Bxf8 Kxf8 (+2.4). Vezir d6’da kaldıkça Siyah rok yapamaz.' },
      ],
    },
    '15w': {
      text: '15.Nxd5 ile Beyaz atları değişir.',
      amac: 'd5’teki güçlü atı ortadan kaldırmak ve Siyahı d5’e piyonla almaya zorlayarak e-hattını açmak.',
      neden: 'Motor 15.Nxd5’i en iyi buluyor (+0.3). 15.Bb4 Nxb4 16.axb4 sonrası Siyah rahatça rok yapar (0.0). Değişim sonrası d5 piyonu Siyah için bir yük olacak ve e-hattı açılacak.',
      diger: [
        { move: '15.Bb4', text: '15...Nxb4 16.axb4 O-O (0.0); Beyazın baskısı kaybolur.' },
        { move: '15.Nh5', text: '15...O-O 16.Bd3 (−0.2); at kenara gider.' },
      ],
    },
    '15b': {
      text: '15...exd5 ile piyonla alınır; Siyahın d5’te sağlam bir piyonu olur ama e-hattı açılır.',
      amac: 'Merkezde d5 piyonuyla e4 kırılmasına karşı durmak ve c4 karesini at için korumak.',
      neden: 'Motor 15...exd5’i en iyi buluyor (+0.4). 15...Qxd5 16.e4 ile vezir yine tempo kaybeder (+0.6); 15...Nxd5 ise 16.Qxb7 ile piyon kaybettirir (+1.0).',
      diger: [
        { move: '15...Qxd5', text: '16.e4 Qh5 17.Qb4 ile Beyaz tempo kazanır (+0.6).' },
        { move: '15...Nxd5', text: '16.Qxb7 O-O 17.Qxa7 ile Beyaz piyon kazanır (+1.0).' },
      ],
    },
    '16w': {
      text: '16.Bb4! ile fil vezire saldırır ve f8 karesini kontrol eder. Siyah artık kısa rok yapamaz.',
      amac: 'Siyah şahını merkeze çakmak; a3–f8 çaprazını kalıcı olarak tutmak.',
      neden: 'Motor 16.Qb4’ü çok az daha iyi buluyor (+0.45’e +0.35) ama Bb4 pratikte çok daha zor bir soru sorar. Fil tempo kazanarak gelir, kale c8’e gittiği için uzun rok hakkı da yok; Siyah ya şahını merkezde tutacak ya da ...f5/...f6 ve ...Kf7 ile zahmetli bir yol izleyecek.',
      diger: [
        { move: '16.Qb4', text: '16...Qg6 17.Rc1 ile vezirler değişime zorlanır (+0.45); saldırı potansiyeli azalır.' },
        { move: '16.Bd3', text: '16...O-O 17.O-O (+0.3): Siyah rok yapar ve sorun ortadan kalkar.' },
      ],
    },
    '16b': {
      text: '16...Qe6 ile vezir e6’ya gider ve e-hattında e3’e baskı yapar.',
      amac: 'Veziri merkezde tutmak, e3’e baskıyla Beyazın şahını rahatsız etmek ve e4’ü durdurmak.',
      neden: 'Motor 16...Qe6’yı en iyi buluyor (+0.2). Vezir e3 piyonuna saldırır; Beyaz bunu Kf2 ile kolayca karşılar.',
      diger: [
        { move: '16...Qg6', text: '17.Rc1 Rxc1+ 18.Qxc1 f5 (+0.3); Siyah g2’ye baskı yapar.' },
        { move: '16...Qh6', text: '17.Kf2 f5 18.Bd3 Kf7 (+0.4); f7’ye şah planı.' },
      ],
    },
    '17w': {
      text: '17.Kf2! ile şah f2’ye gelir. Rok gerekmez; e3 korunur ve h1 kalesi oyuna girebilir.',
      amac: 'Şahı güvenceye alıp kaleleri birbirine bağlamak; Siyahın vezirinin e3 baskısını boşa çıkarmak.',
      neden: 'Motor 17.Kf2’yi en iyi buluyor (+0.3). 17.Qf2 ya da 17.Qd2 pasif kalır (+0.1 ve 0.0). Kısa rok için önce f1 filinin oynaması gerekirdi; Kf2 tek hamlede aynı işi görür ve şah f2’de e3–f3 piyonlarının arkasında rahattır.',
      diger: [
        { move: '17.Qf2', text: '17...a5 18.Bxa5 O-O ile Siyah piyon karşılığı rok yapar (+0.1).' },
        { move: '17.Qd2', text: '17...f6 18.Kf2 Kf7 (0.0); Siyah yapay rokunu yapar.' },
      ],
    },
    '17b': {
      text: '17...Na4 ile at a4’e gelir; b2’deki vezire saldırır ve c3’e bakar.',
      amac: 'Beyaz vezirini kovalamak ve c3’e at girişi hazırlamak.',
      neden: 'İlk ciddi yanlış: motor 17...f5 ya da 17...f6 ile ...Kf7 yapay rokunu öneriyor (+0.25); 17...Na4 sonrası +0.9. At kenara gider, Beyaz vezir d2’ye tempo kaybetmeden çekilir ve Siyah şahı hâlâ e8’dedir.',
      diger: [
        { move: '17...f5', text: '18.Bd3 Nc4 19.Bxc4 Rxc4 (+0.25): f5 e4’ü durdurur, şah f7’ye gidebilir.' },
        { move: '17...f6', text: '18.Rc1 Rxc1 19.Qxc1 Kf7 (+0.25): şah güvenceye girer.' },
      ],
    },
    '18w': {
      text: '18.Qd2 ile vezir d2’ye çekilir ve e3 ile c3’ü korur.',
      amac: 'Veziri hem savunmada (e3, c3) hem de ileride f4/g5 yönünde saldırıda kullanmak.',
      neden: 'Motor 18.Qd2’yi en iyi buluyor (+0.8). 18.Qb3 ya da 18.Qb1 daha pasif (+0.7 ve +0.55). d2’den vezir hem Nc3 girişini önler hem de Qf4 gibi saldırı hamlelerine hazırdır.',
      diger: [
        { move: '18.Qb3', text: '18...f5 19.Bd3 Kf7 (+0.7); Siyah yapay rokunu tamamlar.' },
        { move: '18.Qb1', text: '18...f5 19.Bd3 Kf7 (+0.55); vezir pasif.' },
      ],
    },
    '18b': {
      text: '18...b6? ile Siyah a4 atına destek arar ama a6 karesini Beyaz filine bırakır.',
      amac: 'a4 atını sabitlemek ve ...Nc3 ya da ...Nb2 gibi girişleri desteklemek.',
      neden: 'Oyunun asıl hatası. b7 piyonu a6’yı korurken Ba6 imkânsızdı; 18...b6 sonrası 19.Ba6 kaleyi c-hattından kovalar. Motor 18...f5 (+0.8) ile e4’ü durdurmayı ve ...Kf7 yolunu açmayı öneriyor; 18...b6 sonrası değerlendirme +3.0’a çıkıyor.',
      diger: [
        { move: '18...f5', text: '19.Bd3 Nb6 20.Rhe1 Nc4 (+0.8): e4 kırılması durur, şah f7’ye geçer.' },
        { move: '18...f6', text: '19.Bd3 Kf7 20.Rhe1 Rhe8 (+0.9): yapay rok tamamlanır.' },
        { move: '18...Nb6', text: '19.Rc1 Rxc1 20.Qxc1 a5 (+1.0); at merkeze döner.' },
      ],
    },
    '19w': {
      text: '19.Ba6 ile fil a6’dan c8 kalesine saldırır.',
      amac: 'Kaleyi c-hattından kovalamak, c-hattını kendi kalesine almak ve Siyahın vezir kanadını felç etmek.',
      neden: 'Motor 19.Ba6’yı en iyi buluyor (+2.8–3.0). 19.e4 de güçlü (+2.7) ama önce Ba6 ile tempo kazanmak daha net: kale c-hattını terk ederse Beyaz hattı alır, kalırsa kalite kaybedilir.',
      diger: [
        { move: '19.e4', text: '19...Qh6 20.Qxh6 gxh6 21.Re1 (+2.7); vezirler değişir.' },
        { move: '19.Re1', text: '19...f5 20.e4 fxe4 21.Ba6 (+2.4).' },
      ],
    },
    '19b': {
      text: '19...Rb8? ile kale b8’e çekilir ve c-hattı Beyaza bırakılır.',
      amac: 'Kaleyi kurtarmak ve b-hattında ...b5 ile b4 filine karşı oyun aramak.',
      neden: 'Motor en dirençli savunma olarak 19...Rc4! 20.Bxc4 dxc4 (+3.0) ile kalite vermeyi gösteriyor: d5 piyonu c4’e geçince e4 kırılmasının hedefi kalmaz. 19...Rb8 sonrası +4.7; kale b8’de 21.Qf4 için hedef olacak.',
      diger: [
        { move: '19...Rc4', text: '20.Bxc4 dxc4 21.Rab1 f6 (+3.0): kalite eksik ama merkez kapalı kalır.' },
        { move: '19...Rc6', text: '20.e4 Qh6 21.Qxh6 Rxh6 (+3.3); vezirler değişir.' },
        { move: '19...Rc7', text: '20.e4 b5 21.Rhc1 Rxc1 (+3.5).' },
      ],
    },
    '20w': {
      text: '20.e4! ile Beyaz d5’e saldırır ve merkezi açar.',
      amac: 'e-hattını açıp Siyah şahını hedef almak; fillerin çaprazlarını genişletmek.',
      neden: 'Motor 20.e4’ü en iyi buluyor (+4.8). 9.f3 ile başlayan hazırlık şimdi meyvesini verir: şah e8’de ve b4 fili yüzünden f8’e geçemez. 20.Rhe1 de güçlü (+4.4) ama e4 daha doğrudan.',
      diger: [
        { move: '20.Rhe1', text: '20...Qh6 21.Qc2 f5 22.Qc7 (+4.4).' },
        { move: '20.Rac1', text: '20...Bc8 21.Rxc8+ Rxc8 22.Bb5+ (+3.6).' },
      ],
    },
    '20b': {
      text: '20...b5 ile Siyah a6 filinin geri çekilme yolunu kapatır ve b4 filine karşı ...Rb6 hazırlar.',
      amac: 'a6’daki fili hapsetmek, ...Qxa6 ile malzeme kazanma şansı aramak.',
      neden: 'Motor 20...dxe4’ü biraz daha dirençli buluyor (+4.3–4.7); 21.Rhe1 f5 22.Qf4 sonrası da Beyaz kazanır. 20...b5 a6 filini sıkıştırır ama 21.Qf4 b8 kalesine saldırarak tempo kazanır.',
      diger: [
        { move: '20...dxe4', text: '21.Rhe1 f5 22.Qf4 (+4.2): e-hattı açılır, şah merkezde kalır.' },
        { move: '20...Nc5', text: '21.exd5 Qxd5 22.dxc5 (+5.3).' },
      ],
    },
    '21w': {
      text: '21.Qf4 ile vezir f4’ten b8 kalesine saldırır.',
      amac: 'Kaleyi kovalayarak tempo kazanmak ve veziri saldırı için aktif bir kareye getirmek.',
      neden: 'Motor 21.Rhe1 ve 21.exd5’i çok az daha iyi buluyor (+5.2’ye +4.9); hepsi kazanıyor. Qf4 b8 kalesine saldırır; 21...Rc8 22.Bxc8 kalite kaybettirir.',
      diger: [
        { move: '21.Rhe1', text: '21...Qxa6 22.Qf4 Rc8 23.exd5+ (+5.2).' },
        { move: '21.exd5', text: '21...Qxa6 22.Qf4 Qb7 23.Rhe1+ (+5.1).' },
      ],
    },
    '21b': {
      text: '21...Rb6 ile kale b6’ya gider ve a6 filine saldırır.',
      amac: 'Kaleyi kurtarırken a6 filine ikinci kez saldırmak.',
      neden: 'Motor 21...Rb6’yı en iyi buluyor (+4.8). 21...Rc8 22.Bxc8 kalite kaybettirir (+6.1); 21...Qb6 da daha kötü (+5.9).',
      diger: [
        { move: '21...Rc8', text: '22.Bxc8 Nb2 23.Qd2 (+6.1).' },
        { move: '21...Qb6', text: '22.exd5 Nb2 23.Rhe1+ (+5.9).' },
      ],
    },
    '22w': {
      text: '22.exd5 ile Beyaz d5’i alır; e-hattı tamamen açılır.',
      amac: 'Merkezi açmak, vezire saldırmak ve Rhe1+ ile şaha şah çekmeye hazırlanmak.',
      neden: 'Motor 22.exd5’i en iyi buluyor (+4.8). Vezir e6’da saldırı altındadır ve e-hattı açılır. 22.Rhe1 (+3.7) ya da 22.Rae1 (+3.5) daha yavaş.',
      diger: [
        { move: '22.Rhe1', text: '22...Nb2 23.Kf1 Nd3 (+3.7).' },
        { move: '22.Rae1', text: '22...Nb2 23.Qd2 Kd8 (+3.5).' },
      ],
    },
    '22b': {
      text: '22...Qxd5 ile vezirle alınır.',
      amac: 'Merkezde piyonu geri almak ve veziri d5’te aktif tutmak.',
      neden: 'Motor 22...Nb2 (+5.0) ile karışıklık aramayı öneriyor: 23.dxe6 Nd3+ 24.Ke3 Nxf4 sonrası vezir geri alınır ama Beyaz yine kazanır. 22...Qxd5 sonrası +6.7.',
      diger: [
        { move: '22...Nb2', text: '23.dxe6 Nd3+ 24.Ke3 Nxf4 (+5.0); vezirler değişir ama Beyaz kazanır.' },
        { move: '22...Qf6', text: '23.Rhe1+ Kd8 24.Be7+ (+7.2).' },
      ],
    },
    '23w': {
      text: '23.Rhe1+ ile kale e-hattından şah çeker.',
      amac: '17.Kf2’nin sağladığı bağlantıyı kullanarak h1 kalesini tek hamlede açık hatta getirmek.',
      neden: 'Motor 23.Rhe1+’yı açık ara en iyi buluyor (+6.7). 23.Rae1+ sonrası Rxe6+ fxe6 ile malzeme dengelenir (+4.8).',
      diger: [
        { move: '23.Rae1+', text: '23...Be6 24.Rxe6+ fxe6 25.Rc1 (+4.8).' },
        { move: '23.Rhc1', text: '23...Nb2 24.Kg1 Nd3 (+4.0).' },
      ],
    },
    '23b': {
      text: '23...Be6 ile fil araya girer.',
      amac: 'Şahı korumak ve e-hattını kapatmak.',
      neden: 'Zorunlu: 23...Kd8 24.Rac1 Nc5 sonrası Beyaz mat ağı kurar (+43) ve 23...Qe6 24.d5 ile vezir kaybedilir (+10). Be6 en az kayıplı yoldur (+7.1).',
      diger: [
        { move: '23...Kd8', text: '24.Rac1 Nc5 25.dxc5 (+43): mat ağı.' },
        { move: '23...Qe6', text: '24.d5 Nb2 25.Qd4 (+10).' },
      ],
    },
    '24w': {
      text: '24.Rac1 ile ikinci kale açık c-hattına gelir. Rc8+ ve Rc7 tehdit altında.',
      amac: 'Bütün taşları saldırıya katmak; c-hattını ve yedinci yatayı ele geçirmek.',
      neden: 'Motor 24.Rac1’i en iyi buluyor (+7.2). 24.Rxe6+ fxe6 sonrası avantaj azalır (+5.2); 24.Kg1 ise yavaş (+4.7).',
      diger: [
        { move: '24.Rxe6+', text: '24...fxe6 25.Rc1 Rc6 26.Qb8+ (+5.2).' },
        { move: '24.Kg1', text: '24...Rxa6 25.Qb8+ Kd7 (+4.7).' },
      ],
    },
    '24b': {
      text: '24...f6 ile Siyah f7 karesini şaha açmak ve g5’i kontrol etmek ister.',
      amac: 'Şahı f7’ye kaçırmak ve Qb8+ gibi şahlara karşı bir sığınak yaratmak.',
      neden: 'Motor 24...Nc5 (+7.5) ile c-hattını kapatmayı öneriyor: 25.Bxc5 Rxa6 26.Qb8+ Kd7 sonrası Beyaz yine kazanır. 24...f6 sonrası +9.3; c7 karesi tamamen boş kalır.',
      diger: [
        { move: '24...Nc5', text: '25.Bxc5 Rxa6 26.Qb8+ Kd7 (+7.5).' },
        { move: '24...Rd6', text: '25.Bxd6 Nb6 26.Bb4 f6 (+10.4).' },
      ],
    },
    '25w': {
      text: '25.Rc7 ile kale yedinci yataya girer.',
      amac: 'Yedinci yatayda a7 ve g7’ye saldırmak, şahı d7’den kesmek ve Re7+ ile mat ağı kurmak.',
      neden: 'Motor 25.Rc7’yi en iyi buluyor (+11); 25.Bc8 (+7.4) ya da 25.Rc8+ (+6.1) çok daha yavaş. Kale, b4 fili ve f4 veziriyle birlikte şahın etrafındaki bütün kareleri tutar.',
      diger: [
        { move: '25.Bc8', text: '25...h5 26.Qc7 Qd8 27.Bxe6 (+7.4).' },
        { move: '25.Rc8+', text: '25...Kf7 26.Rxh8 Nb2 (+6.1).' },
      ],
    },
    '25b': {
      text: '25...Kd8 ile şah d8’e kaçar.',
      amac: 'Re7+ ve Rxg7 tehditlerinden şahı kurtarmak.',
      neden: 'Siyahın iyi bir seçeneği yoktur: motor 25...Kd8 sonrası mat görüyor (16 hamlede). 25...Nc3 ya da 25...Nc5 da +40 civarında kaybeder; şah hangi kareye giderse gitsin Beyazın kalesi, veziri ve filleri onu kuşatır.',
      diger: [
        { move: '25...Nc3', text: '26.Re7+ Kf8 27.Rb7+ (+40): mat ağı.' },
        { move: '25...Nc5', text: '26.Bxc5 Qxc5 27.dxc5 (+51): vezir kaybedilir.' },
      ],
    },
    '26w': {
      text: '26.Rxa7 ile kale a7’yi alır. Qb8+ ve Ra8+ tehditleri karşısında Siyahın savunması yok; Euwe terk etti.',
      amac: 'Yedinci yatayda şahı kesmek ve Qb8+/Ra8+ ile matı hazırlamak.',
      neden: 'Motor 26.Rxa7’yi en iyi buluyor (14 hamlede mat). 26.Rxg7 de kazanır ama daha uzun sürer; 26.Be7+ ise avantajı azaltır (+15). Motorun ana devamı 26...Rd6 27.Bxd6 Nb2 28.Be7+ ile de bitiyor; Euwe burada terk etti.',
      diger: [
        { move: '26.Rxg7', text: '26...Bf7 27.Ba5 Kd7 (mat 24 hamlede).' },
        { move: '26.Be7+', text: '26...Ke8 27.Bb4 h5 (+15).' },
      ],
    },
  },
  exercises: [
    { id: 'ae-1', kind: 'tekrar', plan: false, title: 'Şah merkezdeyken merkezi aç',
      source: 'Alekhine – Euwe, 1937, 8. oyun (20. hamle)',
      fen: '1r2k2r/p2b1ppp/Bp2q3/3p4/nB1P4/P3PP2/3Q1KPP/R6R w k - 2 20',
      prompt: 'Siyahın şahı e8’de ve b4 fili yüzünden rok yapamıyor. Siyahın merkezdeki tek savunucusu d5 piyonu. Alekhine’in hamlesini bulun.',
      hint: 'd5’e bir piyonla saldırın.',
      line: ['e4'],
      explanation: '**20.e4!** Merkez açılır; ...dxe4 sonrası e-hattı Siyah şahına açılır. Motor: e4 +5.0, sonraki en iyi hamle +4.2.',
      link: 'Rakibin şahı merkezde kaldığında hatları açan piyon kırılması en güçlü silahtır.' },
    { id: 'ae-2', kind: 'tekrar', plan: false, title: 'Yedinci yatay',
      source: 'Alekhine – Euwe, 1937, 8. oyun (25. hamle)',
      fen: '4k2r/p5pp/Br2bp2/1p1q4/nB1P1Q2/P4P2/5KPP/2R1R3 w k - 0 25',
      prompt: 'Siyahın şahı hâlâ e8’de. Beyazın kaleleri c- ve e-hatlarında. Oyunu bitiren kale hamlesi hangisi?',
      hint: 'Kale yedinci yataya girebilir.',
      line: ['Rc7'],
      explanation: '**25.Rc7!** Kale yedinci yatayda g7 ve a7’ye saldırır, şaha d7 karesini kapatır. Motor: Rc7 +19.6, sonraki en iyi hamle +8.9.',
      link: 'Açılan c-hattı, fil çiftinin kontrol ettiği karelerle birleşince Siyah şahı kaçacak yer bulamaz.' },
    { id: 'ae-3', kind: 'transfer', plan: false, title: 'Fil b4’te: f8 karesi kontrol altında',
      source: 'Rubinstein – Nimzowitsch, Bad Kissingen 1928 (21. hamle)',
      fen: 'r3r1k1/5ppp/2Nn4/B4b2/3p4/4PP2/PP4PP/2R1K2R w K - 0 21',
      prompt: 'Bu kez rakip Nimzowitsch. Beyazın atı c6’da, fili a5’te. Alekhine’in 16.Bb4 hamlesindeki gibi fil a3-f8 çaprazına geçerse ne olur?',
      hint: 'Fil b4’e gelir ve d6 atına saldırır.',
      line: ['Bb4'],
      explanation: '**21.Bb4!** Fil d6 atına saldırır; 21...Nb5 22.Ne7+ Rxe7 23.Bxe7 ile Beyaz kaliteyi kazanır. Motor: Bb4 +3.8, sonraki en iyi hamle +2.7.',
      link: 'Alekhine filini b4’e koyup roku engelledi; Rubinstein aynı çaprazı d6 atına ve e7 karesine baskı için kullandı.' },
    { id: 'ae-4', kind: 'transfer', plan: false, title: 'Fil çiftiyle bağ',
      source: 'Alekhine – Nimzowitsch, New York 1927 (28. hamle)',
      fen: '2k1r3/pn3p2/1pr3pp/4p3/1PP5/2Q1PPP1/P1B3P1/2K5 w - - 0 28',
      prompt: 'Siyahın kaleleri c6 ve e8’de, ikisi de a4-e8 çaprazında. Beyazın vezir ve fili var. Malzeme kazandıran hamleyi bulun.',
      hint: 'Fil a4’ten c6 kalesine saldırırsa kale çekilebilir mi?',
      line: ['Ba4'],
      explanation: '**28.Ba4!** Fil c6 kalesine saldırır ve onu e8 kalesine bağlar. Siyah ...Ree6 ile savunur ama 29.Bxc6 ile Beyaz kaliteyi kazanır. Motor: Ba4 +3.4, sonraki en iyi hamle +1.7.',
      link: 'Alekhine Euwe’ye karşı da şahın kaçamadığı bir konumda fillerin gücünü kullandı. Şah güvende değilse filler bağ ve şahlarla malzeme kazanır.' },
  ],
};
