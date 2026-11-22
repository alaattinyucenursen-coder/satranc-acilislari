// Kramnik – Anand, Dünya Şampiyonası maçı, Bonn 2008 (10. oyun). Kaynak: PgnMentor (Kramnik.pgn).
export default {
  id: 'kramnik-anand-2008',
  theme: 'Zayıf vezir kanadı piyonları ve yedinci yatay',
  white: 'Vladimir Kramnik', black: 'Viswanathan Anand',
  whiteShort: 'Kramnik', blackShort: 'Anand',
  event: 'Dünya Şampiyonası maçı, 10. oyun', site: 'Bonn', year: 2008, eco: 'E21',
  variation: 'Nimzo-Hint Savunması, 4.Nf3 c5 5.g3', result: '1-0',
  pgn: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. g3 cxd4 6. Nxd4 O-O 7. Bg2 d5 8. cxd5 Nxd5 9. Qb3 Qa5 10. Bd2 Nc6 11. Nxc6 bxc6 12. O-O Bxc3 13. bxc3 Ba6 14. Rfd1 Qc5 15. e4 Bc4 16. Qa4 Nb6 17. Qb4 Qh5 18. Re1 c5 19. Qa5 Rfc8 20. Be3 Be2 21. Bf4 e5 22. Be3 Bg4 23. Qa6 f6 24. a4 Qf7 25. Bf1 Be6 26. Rab1 c4 27. a5 Na4 28. Rb7 Qe8 29. Qd6 1-0`,

  summary: 'Bonn 2008 Dünya Şampiyonası maçının 10. oyunu (27 Ekim 2008) ve Kramnik’in bu maçtaki **tek galibiyeti**. Anand 6–3 öndeydi; bu yenilgiyle skor 6–4’e indi, ama 11. oyundaki beraberlik Anand’a unvanı getirdi. Kramnik, Nimzo-Hint’e karşı **4.Nf3 c5 5.g3** ile Katalan’a benzeyen, g2 filinin uzun çapraza baktığı bir kuruluş seçti. Oyun 17. hamleye kadar Anand’ın da bildiği teoriyi izledi (Kasparov – Anand, Wijk aan Zee 2000’de aynı konum oynanmıştı). **18.Re1** yeni hamleydi; Susan Polgar’ın FIDE sitesindeki canlı yorumuna göre Anand burada yaklaşık yarım saat düşündü. Konum uzun süre eşit kaldı (Motor: 0.00 civarı), ama Siyahın taşları dağınıktı: vezir h5’te oyun dışı, fil e2-g4 arasında gidip geliyor, at b6’da desteksiz. Kramnik **21.Bf4!** ile ...e5’i kışkırtıp h5 vezirinin beşinci yataydan c5’i korumasını kesti, **23.Qa6!** ile a7, b6, b7 ve c4 karelerini tuttu. Anand’ın **23...f6?** hamlesinden sonra (Motor: +0.07’den +1.3’e) **24.a4!, 25.Bf1!, 26.Rab1** geldi; 26...c4? piyonu kendi kendine zayıflattı, **27.a5 Na4 28.Rb7 Qe8 29.Qd6!** sonrası Siyahın a7 ve c4 piyonları savunulamaz hale geldi ve Anand terk etti.',
  intro: 'Nimzo-Hint’te 4.Nf3, Beyazın piyon yapısını henüz belirlemeyen esnek bir hamledir; 4...c5 5.g3 ile oyun “Romanishin varyantı” ya da İngiliz açılışıyla karışık (hibrit) yapılara gider. Beyazın fikri, fili g2’ye koyup uzun çaprazdan Siyahın vezir kanadına (c6, a8) baskı yapmaktır. Siyah 5...cxd4 6.Nxd4 O-O 7.Bg2 d5 ile merkezi açar; 8.cxd5 Nxd5 9.Qb3 Qa5 10.Bd2 Nc6 11.Nxc6 bxc6 sonrası taşlar hızla değişir ve iki tarafın da c-piyonları zayıflar. Bu yapıda kimin piyonlarının daha kolay hedef olduğu ve kimin taşlarının daha uyumlu olduğu oyunu belirler. Bu oyun, eşit görünen bir konumda küçük taş iyileştirmeleriyle (Re1, Bf4-e3, Qa6, a4, Bf1, Rab1) rakibi nasıl sıkıştırılabileceğinin ve tek bir gevşek hamlenin (23...f6) nasıl cezalandırıldığının örneğidir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'g3-Bg2 ile **uzun çaprazı** açmak; 11.Nxc6 bxc6 sonrası c6 ve a8’e baskı yapmak. İleride fili 25.Bf1 ile f1-a6 çaprazına geçirip **c4 karesini** kontrol etmek.',
      'At değişimleriyle Siyahın vezir kanadı piyonlarını (a7, c6/c5) tek ve zayıf bırakmak; kendi c3 piyonunun da zayıf olduğunu bilerek oyunu bu piyonlara karşı daha hızlı oynamak.',
      '**18.Re1** ile e4 piyonunu desteklemek ve h5 vezirinin d1-h5 çaprazındaki baskısını boşa çıkarmak; Siyahın veziri şah kanadında oyun dışı kalsın.',
      'Kara kareli fili Be3-f4-e3 ile oynatıp c5’e baskı yapmak, 21.Bf4 ile Siyahı ...e5’e zorlayarak vezirin c5’i beşinci yataydan korumasını kesmek.',
      'Veziri **a5 ve a6’ya** yerleştirerek a7, b6, b7 ve c4 karelerini tutmak; Siyahın atını ve kalelerini pasif savunmaya bağlamak.',
      '**a4-a5** ile b6 atını kenara (a4) itmek; at oradan c3 dışında hiçbir şeye dokunamaz.',
      'Kaleyi **açık b-hattından** b7’ye sokmak ve vezirin d6’ya dönüşüyle a7, c4 ve e6’ya aynı anda baskı kurmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...cxd4 ve ...d5 ile merkezi açıp gelişimi tamamlamak; ...Qa5 ile c3 atındaki bağı sürdürmek.',
      '...Bxc3 ile Beyazın piyon yapısını da bozmak; c3 ve a2 piyonlarını hedef almak.',
      'Fili ...Ba6-c4 ile aktif bir kareye koymak, Beyazın ağır taşlarını c4’ten engellemek; gerekirse ...Be2 ile d1 ve f3 karelerine baskı yapmak.',
      '...Qh5 ile vezir değişiminden kaçmak ve şah kanadında karşı oyun aramak (...Bf3, ...Be2-f3 ile g2 filini değişmek gibi).',
      '...c6-c5 ile zayıf c-piyonunu ilerletip c6 zayıflığından kurtulmak, atı ...Nc4 ile ideal kareye getirmek.',
      'Kaleleri c- ve b-hatlarına getirip açık b-hattına karşı çıkmak (...Rab8); Beyaz kalesinin b7’ye girmesini önlemek.',
      'f- ve e-piyonlarıyla (...e5, ...f5) merkezde karşı oyun aramak, ama kara kareleri gereksiz yere zayıflatmamak.',
    ] },
  },
  critical: [
    { move: '11w', title: 'Nxc6: Siyahın piyon yapısını bozmak', text: 'At değişimiyle Siyahın b-piyonu c6’ya gelir. Siyahın a7 ve c6 piyonları artık tek kalmış ve uzun çaprazdaki g2 filinin hedefi. 11...bxc6 zorunlu: 11...Bxc3? 12.Nxa5 ya da 11...Qc5? Siyaha taş kaybettirir (Motor: +6 civarı), çünkü c6 atı a5 vezirine saldırıyor. Bunun karşılığında Beyaz da 12...Bxc3 13.bxc3 sonrası c3’te zayıf bir piyonla kalacak; oyun bu iki zayıflığın yarışıdır.' },
    { move: '18w', title: 'Re1: yeni hamle', text: 'Kramnik basın toplantısında bunun yeni bir hamle olduğunu, “ezici değil ama Siyaha seçim yaptırıyor” olduğunu söyledi (Ian Rogers, Chess Life Online). Daha önce 18.Be3 (Kasparov – Anand, Wijk aan Zee 2000) ve 18.Bf4 (Bacrot – Carlsen, Biel 2008) oynanmıştı. Kale e4 piyonunu korur ve h5 vezirinin d1-h5 çaprazındaki baskısını boşa çıkarır. Motor konumu eşit görüyor (+0.07), ama Polgar’a göre Anand burada yaklaşık 30 dakika harcadı.' },
    { move: '21w', title: 'Bf4: tempo kaybı gibi görünen ince hamle', text: 'Malcolm Pein ChessBase analizinde bunu “ilginç; Kramnik Siyahın vezirinin oyundan kesilmesi için bir tempo harcıyor” diye niteler. Fil e5’e baskı yapar; Siyah 21...e5 ile cevap verince e5 piyonu h5 vezirinin beşinci yataydan c5’e bakışını keser. Yusupov 21...Bf3 ile g2 filini değişmeyi önerdi (Motor: eşit civarı). Rogers 21...e5’i “çok bağlayıcı” buluyor.' },
    { move: '23w', title: 'Qa6!: sinsi vezir hamlesi', text: 'Pein bunu “güzel bir sinsi (creeping) hamle; somut tehdidi yok ama a7, b7, b6 ve c4 karelerini gözetliyor” diye anlatır. 22...Bg4 sonrası c4’te fil yok; 23...Nc4? 24.Qxc4 bir taş kaybettirir (Motor: +5). Vezir a6’dan hem a7’ye bakar hem de atın en iyi karesini (c4) yasaklar.' },
    { move: '23b', title: '...f6? belirleyici hata', text: 'Kramnik basın toplantısında 23...f6’yı “belirleyici hata” olarak niteledi; en çok 23...Be6 24.Bf1 Qf3’ten çekindiğini söyledi. Motor 23...h6 (0.00) ya da 23...Be6 24.Bf1 Nd7 (+0.07) ile Siyahın dayandığını gösteriyor. ...f6 sonrası e6 ve g6 zayıflar, f7 karesi vezir için tek yer olur ve en önemlisi Siyahın a4-a5’e karşı zamanı yoktur: Motor +1.3.' },
    { move: '25w', title: 'Bf1!: c4 karesine taktiksel hakimiyet', text: 'Pein bu hamleye iki ünlem verir: “Kramnik c4’ün kontrolünü keskin taktiklerle alıyor.” Fil f1-c4 çaprazından c4’e bakar; c4’ün arkasında f7 vezir ve g8 şah var. Bu yüzden 25...Nc4? 26.Bxc4 ile fil c4’ü alırken f7 vezirini de vurur (Motor: +7.5). Siyahın ideal at karesi taktik olarak kapandı.' },
    { move: '26b', title: '...c4? Siyah c4’te zamanında abluka kuramıyor', text: 'Kramnik’in sözleriyle “Siyah c4’te abluka kurmaya yetişemiyor.” Pein bunu maçın gerginliğinin yol açtığı bir hata sayar. 26...c4 sonrası piyon e6 filinin önünü kapatır ve f1 filinin hedefi olur; 27.a5 atı a4’e iter (Motor: +1.1’den +2.4’e). Daha iyisi 26...Rab8 27.a5 Nc4 28.Rxb8 Rxb8 29.Bxc5 idi (Motor: +1.1); Siyah piyon kaybeder ama savaşı sürdürür.' },
    { move: '29w', title: 'Qd6!: son hamle', text: 'Vezir a6’dan d6’ya döner: e6 filine, e5’e ve c5 üzerinden c4’e bakar. Tehditler Qb4 ile a4 atını ve c4’ü almak, Re7 ile vezire ve file saldırmak. Pein: “Re7 ve Qb7 ikisi birden önlenemez; a7 piyonu düşer.” 29...Nxc3 30.Re7 (Motor: +4.3) bir taş kazandırır; 29...Bf7 30.Qb4 (Motor: +2.7) sonrası Siyah neredeyse hiçbir taşını kıpırdatamaz. Anand terk etti.' },
  ],
  lessons: [
    'g3-Bg2 kuruluşunda uzun çapraz, rakibin vezir kanadındaki tek kalmış piyonlarına (c6, a7) sürekli baskı yapar; fil gerekirse f1’e dönüp başka bir çaprazda (f1-a6) yeni bir göreve geçebilir.',
    'Eşit bir konumda da “sinsi” hamlelerle (21.Bf4, 23.Qa6) rakibin taşlarının uyumu bozulabilir; somut tehdit olmasa bile kilit kareleri tutmak rakibi zor kararlara iter.',
    'Bir piyon hamlesi (23...f6) geri alınamaz: kareleri zayıflatır, vezire yer bırakmaz ve rakibe zaman kazandırır. Konum gergin ise önce taş iyileştirmesine (…h6, …Be6, …Nd7) bakın.',
    'Atı kenara iten piyon ilerleyişleri (a4-a5) onu oyun dışı bırakır; kenardaki at ancak taktik bir fırsat (…Nxc3) beklerken işe yarar.',
    'Zayıf piyonlu taraf ideal ablukaj karesini (burada c4) taşla tutmalıdır; piyonu oraya sürmek (26...c4) karenin avantajını rakibe verir ve piyonu daha kolay hedef yapar.',
    'Açık b-hattındaki kale yedinci yataya girince, vezirin merkeze dönüşüyle (Qd6) birlikte çifte tehditler doğar; bir taşla değil, kale, vezir ve fil birlikte baskı yapılır.',
    'Maçta bir oyuncunun yeni bir hamle karşısında harcadığı zaman (18.Re1’de yarım saat) ileride saat baskısı ve hatalı kararlar olarak geri dönebilir.',
  ],
  notes: {
    '1w': {
      text: '1.d4 ile Kramnik vezir piyonu açılışını seçer.',
      amac: 'Merkezde e5 ve c5 karelerini kontrol etmek, c4 ile vezir kanadında alan kazanmaya hazırlanmak.',
      neden: 'Maçta Kramnik’in açılışları zorlanmıştı; Polgar FIDE sitesindeki yorumunda 1.e4’ün “Kramnik’in tarzı olmadığını” hatırlatır. Kramnik bildiği yapılara, kapalı ve konumsal oyunlara döndü.',
      diger: [
        { move: '1.e4', text: 'Daha keskin oyun (Motor: +0.29); Wikipedia’ya göre bu maçta 1.e4 yalnızca 11. oyunda görüldü.' },
        { move: '1.Nf3', text: 'Esnek, aynı yapılara gidebilir (Motor: +0.22).' },
      ],
    },
    '1b': {
      text: '1...Nf6 ile Anand Hint savunmalarını seçer.',
      amac: 'e4 karesini kontrol etmek ve merkeze piyonla bağlanmadan Beyazın kuruluşunu görmek.',
      neden: '1...Nf6 en esnek cevaptır; Nimzo-Hint, Vezir-Hint ve Kral-Hint’e yol açık kalır.',
      diger: [
        { move: '1...d5', text: 'Vezir Gambiti ya da Slav; Anand maçın önceki oyunlarında Slav yapılarını kullanmıştı (Motor: +0.32).' },
        { move: '1...c6', text: 'Doğrudan Slav kuruluşu (Motor: +0.43).' },
      ],
    },
    '2w': {
      text: '2.c4 ile d5 karesine ikinci baskı gelir.',
      amac: 'Merkezde alan kazanmak ve Nc3 ile e4 ilerleyişini hazırlamak.',
      neden: 'Vezir piyonu açılışlarının ana hamlesi; Beyaz Siyahın ...d5 ile klasik merkeze girmesini zorlaştırır.',
      diger: [
        { move: '2.Nf3', text: 'Motorun hafif tercihi (+0.30); Nimzo-Hint’i atlatmak isteyen oyuncular sık kullanır.' },
        { move: '2.e3', text: 'Sakin bir Colle/Londra tarzı kuruluş (Motor: +0.10).' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah fili b4’e açar.',
      amac: 'Nc3 gelirse ...Bb4 ile Nimzo-Hint, Nf3 gelirse ...b6 ile Vezir-Hint ya da ...d5 ile Vezir Gambiti oynayabilmek.',
      neden: '...e6 sağlam bir hamledir; merkezi ...d5 ile destekler ve kara kareli file yol açar.',
      diger: [
        { move: '2...g6', text: 'Kral-Hint ya da Grünfeld (Motor: +0.41); daha dinamik, ama Anand konumsal yolu seçti.' },
        { move: '2...c6', text: 'Slav’a geçiş (Motor: +0.42).' },
      ],
    },
    '3w': {
      text: '3.Nc3 ile Beyaz Nimzo-Hint’e izin verir.',
      amac: 'e4 ilerleyişini desteklemek ve atı en doğal karesine getirmek.',
      neden: 'Kramnik Nimzo-Hint’e karşı yıllarca hazırlık yapmış bir oyuncudur. 3.Nf3 ya da 3.g3 ile Bb4’ü atlatmak mümkündü, ama 3.Nc3 en iddialı hamledir.',
      diger: [
        { move: '3.g3', text: 'Katalan (Motor: +0.44); Kramnik’in de çok oynadığı bir sistem, ama 3...Bb4+ ile Siyahın serbest bir seçeneği var.' },
        { move: '3.Nf3', text: 'Vezir-Hint’e yol açar (Motor: +0.39).' },
      ],
    },
    '3b': {
      text: '3...Bb4 ile Nimzo-Hint Savunması kurulur.',
      amac: 'c3 atını bağlayarak e4 ilerleyişini engellemek; gerekirse ...Bxc3 ile Beyaza ikiye katlanmış piyon vermek.',
      neden: 'Nimzo-Hint en sağlam savunmalardan biridir. ChessBase raporuna göre Anand bu oyunda “sürpriz bir Nimzo’yu kötü oynadı”; yorumcu Yusupov da Kramnik’in 5.g3 tercihini “çok akıllıca” buldu (chess.com).',
      diger: [
        { move: '3...d5', text: 'Vezir Gambiti Reddi (Motor: +0.33).' },
        { move: '3...c5', text: 'Benoni yapılarına geçiş; Beyaz 4.d5 ile alan kazanır.' },
      ],
    },
    '4w': {
      text: '4.Nf3 ile Beyaz atı gelişir ve piyon yapısını henüz belirlemez.',
      amac: 'Gelişimi tamamlamak, ...Bxc3 gelirse bxc3 ile merkezi sağlamlaştırmak ve g3 ya da Bg5 gibi farklı kuruluşlara açık kalmak.',
      neden: '4.Qc2 ve 4.e3 en popüler cevaplardır; 4.Nf3 ise Kasparov’un 1985 maçında Karpov’a karşı sık kullandığı “Kasparov varyantı”dır. Bu hamlenin ardından 4...c5 5.g3 ile Romanishin yapısı doğar.',
      diger: [
        { move: '4.Qc2', text: 'Klasik sistem; ...Bxc3’te vezirle alıp piyon yapısını korur (Motor: +0.30).' },
        { move: '4.e3', text: 'Rubinstein sistemi; Botvinnik’in Capablanca’yı yendiği oyundaki kuruluş (Motor: +0.21).' },
        { move: '4.Bg5', text: 'Leningrad sistemi; daha keskin bir bağ oyunu.' },
      ],
    },
    '4b': {
      text: '4...c5 ile Siyah d4 piyonuna baskı yapar.',
      amac: 'Merkezi ...cxd4 ile açmak, Beyazın atını d4’e çekmek ve gelişim avantajını kullanmak.',
      neden: '...c5 Nimzo-Hint’in en dinamik cevaplarından biridir; 5.g3 sonrası oyun “İngiliz hibrit” yapılarına gider. 4...b6 ile Vezir-Hint’e benzer bir kuruluş ya da 4...d5 ile Ragozin de mümkündü.',
      diger: [
        { move: '4...b6', text: 'Motorun ilk tercihi (+0.21); fil b7’den e4’e bakar.' },
        { move: '4...Bxc3+', text: 'Hemen piyon yapısını bozmak (Motor: +0.29); fil çifti Beyaza geçer.' },
        { move: '4...d5', text: 'Ragozin savunması; klasik merkez.' },
      ],
    },
    '5w': {
      text: '5.g3 ile Beyaz fili g2’ye getirmeye hazırlanır.',
      amac: 'Fili uzun çaprazda (a8-h1) konumlandırarak Siyahın vezir kanadına baskı yapmak; d4 kare açıldığında atla merkezi tutmak.',
      neden: 'Bu “Romanishin” kuruluşu, Beyazın piyon yapısını bozmadan oynanır ve 2008’de moda bir sistemdi (Ian Rogers bunu “trend bir yol” diye niteler). 5.e3 daha sakin, 5.Bd2 ise bağı hemen kırar ama Siyaha kolay oyun verir.',
      diger: [
        { move: '5.e3', text: 'Rubinstein yapısına geçiş (Motor: +0.20).' },
        { move: '5.Bd2', text: 'Bağı kırmak (Motor: +0.11); 5...cxd4 6.Nxd4 Nc6 sonrası Siyah rahat.' },
      ],
    },
    '5b': {
      text: '5...cxd4 ile Siyah merkezi açar.',
      amac: 'Beyazın atını d4’e çekmek ve ...d5 ile merkezi açmaya hazırlanmak.',
      neden: 'Bu sistemin ana hattıdır; 5...Ne4 ve 5...Nc6 de oynanır. cxd4 ile Siyah, Beyazın merkezi kurmasını önler ve oyunu açık konuma çeker.',
      diger: [
        { move: '5...Nc6', text: 'd4’e baskıyı sürdürmek (Motor: +0.25).' },
        { move: '5...Ne4', text: 'c3 bağını kullanıp e4’e at yerleştirmek (Motor: +0.27).' },
      ],
    },
    '6w': {
      text: '6.Nxd4 ile at merkezde alır.',
      amac: 'Atı d4’te güçlü bir merkez karesine yerleştirmek ve uzun çaprazla birlikte c6’ya baskı yapmak.',
      neden: 'Vezirle almak (6.Qxd4) veziri erken oyuna sokar ve ...Nc6 ile tempo kaybettirir. 6.a3? ise piyonu feda eder: 6...Bxc3+ 7.bxc3 dxc3 (Motor: −1.0).',
      diger: [
        { move: '6.Qxd4', text: '6...Nc6 ile vezir tempo kaybeder (Motor: 0.00).' },
        { move: '6.a3?', text: '6...Bxc3+ 7.bxc3 dxc3 ile piyon kaybı (Motor: −1.0).' },
      ],
    },
    '6b': {
      text: '6...O-O ile Siyah şahını güvenceye alır.',
      amac: 'Şahı korumak, kaleyi oyuna sokmak ve ...d5 için hazırlanmak.',
      neden: 'Merkez açılmak üzere; ...d5 sonrası e-hattı ve çaprazlar açılacak, şahın e8’de kalması tehlikeli olur. 6...Ne4 daha aktiftir ama erken bir at seferi Beyaza Qd3 ile tempo kazandırır.',
      diger: [
        { move: '6...Ne4', text: 'Motorun hafif tercihi (+0.21); 7.Qd3 Bxc3+ 8.bxc3 Nc5 ile keskin oyun.' },
        { move: '6...Nc6', text: 'Önce gelişim (Motor: +0.37).' },
      ],
    },
    '7w': {
      text: '7.Bg2 ile fil uzun çapraza yerleşir.',
      amac: 'a8-h1 çaprazını açmak; c6 ve b7 karelerine baskı yapmak ve rokeye hazırlanmak.',
      neden: '5.g3’ün mantıksal devamıdır. 7.Bd2 bağı kırar ama fil d2’de pasif kalır; 7.Qb3 ise 7...Bxc3+ ile hemen değişime götürür.',
      diger: [
        { move: '7.Bd2', text: 'Bağı kırmak (Motor: 0.00).' },
        { move: '7.Qb3', text: '7...Bxc3+ 8.Qxc3 d5 ile Siyah rahat (Motor: −0.10).' },
      ],
    },
    '7b': {
      text: '7...d5 ile Siyah merkezi açar.',
      amac: 'c4 piyonuna saldırmak, merkezde yer almak ve taşları serbest bırakmak.',
      neden: 'Gelişimi tamamlamış olan Siyah, merkezi açarak fil çiftinden ve hızlı gelişimden yararlanmak ister. 7...Nc6 daha yavaştır ve Beyaza merkezi tutma zamanı verir.',
      diger: [
        { move: '7...Nc6', text: '8.O-O sonrası Beyaz biraz daha iyi (Motor: +0.59).' },
        { move: '7...h6', text: 'Bekleme hamlesi (Motor: +0.44).' },
      ],
    },
    '8w': {
      text: '8.cxd5 ile Beyaz merkezde değişir.',
      amac: 'c4 piyonunun düşmesini önlemek ve Siyahı d5’e bir taşla almaya zorlamak.',
      neden: '8.O-O dxc4 9.Qa4 ile piyonu geri almak mümkündür ama Siyaha zaman verir. 8.cxd5 en doğrudan cevaptır; şimdi 8...Nxd5 sonrası d5 atı ve b4 fili Qb3 ile hedef olacak.',
      diger: [
        { move: '8.O-O', text: '8...dxc4 9.Qa4 ile piyon geri alınır (Motor: +0.11).' },
        { move: '8.Qb3', text: 'Önce vezirle baskı (Motor: +0.17).' },
      ],
    },
    '8b': {
      text: '8...Nxd5 ile at merkeze döner.',
      amac: 'Merkezde güçlü bir at yerleştirmek ve c3 üzerine baskıyı artırmak.',
      neden: '8...exd5 Siyaha tek kalmış d5 piyonu bırakır ve g2 filinin hedefi olur (Motor: +0.63). Atla almak yapıyı sağlam tutar.',
      diger: [
        { move: '8...exd5', text: 'Tek kalmış d-piyonu; g2 fili d5’e bakar (Motor: +0.63).' },
        { move: '8...Bxc3+', text: 'Önce değişmek, sonra 9.bxc3 exd5 (Motor: +0.66).' },
      ],
    },
    '9w': {
      text: '9.Qb3 ile vezir b4 filine ve d5 atına baskı yapar.',
      amac: 'Siyahın taşlarını üstüne yüklenerek tempo kazanmak; Bxd5 tehdidiyle Siyahı somut kararlar almaya zorlamak.',
      neden: 'Pein bu hattın “uzun ve zorlayıcı bir varyant, teorinin derine indiği bir yol” olduğunu söyler. 9.Bd2 daha sakindir ama Siyaha 9...Bxc3 10.bxc3 e5 ile rahat oyun verir.',
      diger: [
        { move: '9.Bd2', text: '9...Bxc3 10.bxc3 e5 ile Siyah rahat (Motor: +0.09).' },
        { move: '9.Qd2', text: 'Daha pasif (Motor: 0.00).' },
      ],
    },
    '9b': {
      text: '9...Qa5 ile vezir b4 filini korur ve c3 bağını sürdürür.',
      amac: 'Fili korumak, c3 atına ikinci baskıyı yapmak ve ...Nxc3 tehdidini yaratmak.',
      neden: '9...Qb6 vezir değişimine götürür (10.Bxd5 exd5 11.Be3 ile Beyaz biraz daha iyi, Motor: +0.39). 9...Qa5 daha keskindir ve teoride ana hattır.',
      diger: [
        { move: '9...Qb6', text: '10.Bxd5 exd5 11.Be3 ile Beyaz hafif iyi (Motor: +0.39).' },
        { move: '9...Nc6', text: 'Önce gelişim (Motor: +0.44).' },
      ],
    },
    '10w': {
      text: '10.Bd2 ile bağ kırılır.',
      amac: 'c3 atını korumak ve fili gelişim yoluna sokmak.',
      neden: 'Polgar 10.Bd2’nin bu konumda en çok oynanan hamle olduğunu söyler. 10.O-O piyon feda eder: 10...Nxc3 11.bxc3 Bxc3 (Motor: +0.17). 10.Bxd5 ise fili verir ve Siyaha rahat oyun bırakır (Motor: −0.02).',
      diger: [
        { move: '10.O-O', text: 'Piyon feda (Motor: +0.17); 10...Nxc3 11.bxc3 Bxc3 12.Bb2.' },
        { move: '10.Bxd5', text: '10...Bxc3+ 11.bxc3 exd5 (Motor: −0.02).' },
      ],
    },
    '10b': {
      text: '10...Nc6 ile at d4 atına saldırır.',
      amac: 'Gelişimi tamamlamak, d4 atını değişime zorlamak ve c3 bağını ...Nxd4 ile kullanmak.',
      neden: 'Polgar bunu Siyahın en iyi seçimi sayar; motor da onaylıyor (+0.19). 10...Nd7 ve 10...Na6 daha yavaştır ve Beyaza Rc1 ile c3 bağını kırma zamanı verir.',
      diger: [
        { move: '10...Nd7', text: '11.Rc1 ile Beyaz biraz daha iyi (Motor: +0.55).' },
        { move: '10...Na6', text: 'At kenarda (Motor: +0.71).' },
      ],
    },
    '11w': {
      text: '11.Nxc6 ile atlar değişir; Siyahın piyon yapısı bozulur.',
      amac: 'Siyahın b-piyonunu c6’ya çekmek, a7 ve c6’yı tek kalmış piyonlar haline getirmek ve uzun çaprazı açmak.',
      neden: '11.Nc2 ve 11.Nf3 atı geri çeker ama Siyaha rahat gelişim verir (Motor: +0.05 ve −0.09). Nxc6 Beyazın tek iddialı yoludur ve yapıyı kalıcı olarak değiştirir.',
      diger: [
        { move: '11.Nc2', text: '11...Bxc3 12.bxc3 Nb6 ile Siyah rahat (Motor: +0.05).' },
        { move: '11.Nf3', text: '11...Rd8 ile Siyah aktif (Motor: −0.09).' },
      ],
    },
    '11b': {
      text: '11...bxc6 zorunlu.',
      amac: 'Taşı geri almak ve b-hattını açmak.',
      neden: 'c6 atı a5 vezirine saldırıyor; 11...Bxc3? 12.Nxa5 ya da 11...Qc5? 12.Nxb4 Siyaha taş kaybettirir (Motor: +6 civarı). bxc6 tek hamle; karşılığında b-hattı açılır ve fil c8’den a6’ya geçebilir.',
    },
    '12w': {
      text: '12.O-O ile Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleyi f1’den d1’e ya da e1’e getirmeye hazırlanmak.',
      neden: '12.Qa4 vezir değişimine götürür (Motor: +0.08). Pein 12...Rb8? 13.Nxd5 cxd5 14.a3! hattıyla rokeden sonra Siyahın acele etmemesi gerektiğini gösterir (Motor: +2.1).',
      diger: [
        { move: '12.Qa4', text: '12...Nxc3 13.Qxa5 Bxa5 14.Bxc3 ile eşit oyun sonu (Motor: +0.08).' },
        { move: '12.a3', text: 'Fili sorgulamak (Motor: −0.01).' },
      ],
    },
    '12b': {
      text: '12...Bxc3 ile Siyah c3 atını alır.',
      amac: 'Beyazın piyon yapısını bozmak; c3’te zayıf bir piyon bırakmak.',
      neden: 'Fil b4’te hedefti; değişimle Siyah c3’ü kalıcı bir zayıflık yapar. Pein 12...Rb8? 13.Nxd5 cxd5 14.a3! Bxd2 15.Qxb8 (Motor: +2.1) ve 12...Ba6 13.Nxd5 Bxd2 14.Ne7+ hatlarını verir; ikisi de Siyah için kötü.',
      diger: [
        { move: '12...Rb8?', text: '13.Nxd5 cxd5 14.a3! Bxd2 15.Qxb8 ile Beyaz kazanır (Motor: +2.1).' },
        { move: '12...Bd7', text: 'Pasif (Motor: +0.56).' },
      ],
    },
    '13w': {
      text: '13.bxc3 ile piyonla alınır; iki tarafın da c-piyonu zayıf.',
      amac: 'b-hattını açmak ve c3 piyonuyla d4 karesini kontrol etmek.',
      neden: '13.Bxc3 Nxc3 14.bxc3 aynı yapıya döner (Motor: +0.12). 13.Bxd5? ise 13...Bxd2 ile bir taş kaybettirir (Motor: −2.5).',
      diger: [
        { move: '13.Bxc3', text: '13...Nxc3 14.bxc3 ile aynı yapı (Motor: +0.12).' },
        { move: '13.Bxd5?', text: '13...Bxd2 ile taş kaybı (Motor: −2.5).' },
      ],
    },
    '13b': {
      text: '13...Ba6 ile fil a6’dan e2 ve c4 karelerine bakar.',
      amac: 'Fili aktif bir çapraza koymak ve e2 piyonunu hedef almak.',
      neden: 'Fil c8’de pasifti. 13...c5 erken bir ilerleyiştir ve 14.Rfd1 c4 15.Qxc4 ile piyon düşer (Motor: +0.78). 13...e5 ise d5 atını desteksiz bırakır (Motor: +1.31).',
      diger: [
        { move: '13...c5', text: '14.Rfd1 c4 15.Qxc4 ile piyon kaybı (Motor: +0.78).' },
        { move: '13...e5', text: 'd5 atı zayıflar (Motor: +1.31).' },
      ],
    },
    '14w': {
      text: '14.Rfd1 ile kale d-hattına gelir.',
      amac: 'd5 atına baskı yapmak ve c3-c4 ile atı kovmayı tehdit etmek.',
      neden: 'Pein bu hamlenin c3-c4 tehdidini taşıdığını söyler. 14.Qc2 ve 14.Rfe1 de oynanabilir ama d-hattı Siyahın atını doğrudan sorgular.',
      diger: [
        { move: '14.Qc2', text: 'Vezir çekilir (Motor: −0.10).' },
        { move: '14.Rfe1', text: 'e4 hazırlığı (Motor: −0.10).' },
      ],
    },
    '14b': {
      text: '14...Qc5 ile vezir c3 piyonuna ve c-hattına bakar.',
      amac: 'c3 piyonuna baskı yapmak ve c4 ilerleyişini engellemek.',
      neden: 'Pein 14...Bxe2? 15.c4 hattının Beyaz için daha iyi olduğunun gösterildiğini yazar; motor da Beyazı açık üstün görüyor (+1.3). 14...Rab8 15.c4 ile Beyaz biraz daha iyi (+0.32).',
      diger: [
        { move: '14...Bxe2?', text: '15.c4 ile kale ve at baskı altında (Motor: +1.3).' },
        { move: '14...Rab8', text: '15.c4 ile Beyaz hafif iyi (Motor: +0.32).' },
      ],
    },
    '15w': {
      text: '15.e4 ile d5 atı kovalanır ve merkez Beyaza geçer.',
      amac: 'Atı merkezden uzaklaştırmak, e4 piyonuyla d5 ve f5 karelerini kontrol etmek.',
      neden: 'Motor 15.c4 (+0.11) ve 15.e4’ü (+0.08) eşit görüyor. Beyaz e4 ile merkezde alan alır ama d3 ve c4 karelerini biraz zayıflatır; Siyahın fili hemen c4’e gelecek.',
      diger: [
        { move: '15.c4', text: '15...Qxc4 16.e4 Nb6 ile dinamik denge (Motor: +0.11).' },
        { move: '15.Bf3', text: 'Daha sakin (Motor: 0.00).' },
      ],
    },
    '15b': {
      text: '15...Bc4 ile fil vezire saldırır.',
      amac: 'Fili ideal karesine koymak; c4’te fil hem d3’ü kontrol eder hem de Beyazın a2 piyonuna bakar.',
      neden: '15...Nb6 16.Be3 Qh5 17.Bxb6 ile at değişilir (Motor: +0.46). 15...Nf6 atı pasif bırakır (Motor: +0.82). Bc4 tempo kazanır.',
      diger: [
        { move: '15...Nb6', text: '16.Be3 Qh5 17.Bxb6 ile Beyaz hafif iyi (Motor: +0.46).' },
        { move: '15...Nf6', text: 'At pasif (Motor: +0.82).' },
      ],
    },
    '16w': {
      text: '16.Qa4 ile vezir c6 piyonuna saldırır.',
      amac: 'c6 piyonuna g2 filiyle birlikte ikinci baskı yapmak ve d5 atını sorgulamak.',
      neden: 'Motor 16.Qa4, Qc2 ve Qb2’yi eşit görüyor. Qa4 en aktifidir: hem c6’ya hem de ileride a7’ye bakar.',
      diger: [
        { move: '16.Qc2', text: 'Daha pasif (Motor: +0.04).' },
        { move: '16.Qb2', text: 'b-hattında kalmak (Motor: 0.00).' },
      ],
    },
    '16b': {
      text: '16...Nb6 ile at veziri kovalar.',
      amac: 'Veziri tekrar kovalayarak tempo kazanmak ve c6’yı dolaylı korumak.',
      neden: '16...Nf6 17.Qb4 Qxb4 18.cxb4 ile Beyaz daha iyi bir oyun sonuna gider (Motor: +0.88). 16...Nc7 ise pasif (Motor: +1.47).',
      diger: [
        { move: '16...Nf6', text: '17.Qb4 Qxb4 18.cxb4 ile Beyaz iyi (Motor: +0.88).' },
        { move: '16...Nc7', text: 'At pasif (Motor: +1.47).' },
      ],
    },
    '17w': {
      text: '17.Qb4 ile vezir b4’e döner ve vezir değişimi önerir.',
      amac: 'Vezirleri değişip Siyahın zayıf c6 ve a7 piyonlarını oyun sonunda hedef almak.',
      neden: '17.Be3?? 17...Nxa4 ile vezir kaybettirir (Motor: −4.5). 17.Qc2 de eşittir ama Qb4 Siyahı vezir değişimi ya da vezir çekme kararına zorlar.',
      diger: [
        { move: '17.Qc2', text: 'Eşit (Motor: −0.07).' },
        { move: '17.Be3??', text: '17...Nxa4 ile vezir kaybı (Motor: −4.5).' },
      ],
    },
    '17b': {
      text: '17...Qh5 ile Siyah değişimden kaçar ve veziri şah kanadına götürür.',
      amac: 'Vezirleri tahtada tutmak ve şah kanadında (...Be2-f3, d1-h5 çaprazı) karşı oyun aramak.',
      neden: 'Pein 17...Qxb4 18.cxb4 Rfd8 19.Be3 hattında Beyazın açık avantajı olduğunu yazar; Beyazın filleri güçlü ve c6 piyonu zayıf (Motor: +0.50). Dennis Demit chess.com bloğunda Anand’ın burada 2000’deki Kasparov oyununu izlediğini not eder.',
      diger: [
        { move: '17...Qxb4', text: '18.cxb4 Rfd8 19.Be3 ile Beyaz açık iyi (Motor: +0.50).' },
        { move: '17...Qb5', text: 'Vezir değişimini erteleme (Motor: +0.45).' },
      ],
    },
    '18w': {
      text: '18.Re1 yeni hamle: kale e4 piyonunu korur.',
      amac: 'e4 piyonunu sağlamlaştırmak, d1-h5 çaprazındaki baskıdan kaleyi çıkarmak ve fili d2’den serbest bırakmak.',
      neden: 'Kramnik: “Ezici bir yenilik değil ama Siyaha seçim yaptırıyor” (Ian Rogers, Chess Life Online). Daha önce 18.Be3 (Kasparov – Anand, Wijk aan Zee 2000) ve 18.Bf4 (Bacrot – Carlsen, Biel 2008) oynanmıştı. Polgar’a göre Anand bu hamle karşısında yaklaşık yarım saat düşündü; maçta ilk kez bu kadar uzun süre harcadı.',
      diger: [
        { move: '18.Be3', text: 'Kasparov – Anand 2000: 20.Bxb6 axb6 21.Qd6 sonrası Pein’e göre Siyah zorlandı ama berabere kaldı (Motor: +0.0 civarı).' },
        { move: '18.Bf4', text: 'Bacrot – Carlsen, Biel 2008: 18...c5 19.Qb2 Be2 (Motor: −0.08).' },
        { move: '18.h3', text: 'g4 hazırlığı (Motor: −0.05).' },
      ],
    },
    '18b': {
      text: '18...c5 ile c6 piyonu ilerler ve zayıflıktan kurtulur.',
      amac: 'c6’daki tek kalmış piyonu g2 filinin çaprazından çıkarmak ve b4 vezirini kovmak.',
      neden: 'Polgar bunu “Anand yenilik karşısında sağlam bir hamle buldu” diye yorumlar. Pein 18...Rfc8’in sonradan Short ve Leko tarafından oynandığını, Siyahın orada iyi durumda olduğunu yazar. 18...Be2 19.h3 ile Beyaz g4 tehdidi kazanır (Motor: +0.29).',
      diger: [
        { move: '18...Rfc8', text: 'Önce kale; Short ve Leko’nun sonraki oyunlarında Siyah iyiydi (Motor: +0.02).' },
        { move: '18...Be2', text: '19.h3 ile g4 tehdidi (Motor: +0.29).' },
      ],
    },
    '19w': {
      text: '19.Qa5 ile vezir a7 ve c5’e bakar.',
      amac: 'Vezir kanadındaki iki zayıf piyona (a7, c5) aynı anda baskı yapmak.',
      neden: 'Vezir a5’te güvende ve aktif; 19.Qa3 de eşittir ama a5 karesi b6 atını da sorgular. 19.Qb2 pasiftir (Motor: −0.20).',
      diger: [
        { move: '19.Qa3', text: 'Eşit (Motor: 0.00).' },
        { move: '19.Qb2', text: 'Pasif (Motor: −0.20).' },
      ],
    },
    '19b': {
      text: '19...Rfc8 ile kale c-hattına gelir ve c5’i korur.',
      amac: 'c5 piyonunu sağlamlaştırmak ve c-hattını kontrol etmek.',
      neden: 'Motor 19...Be2 ve 19...Rfc8’i eşit görür. Kale c5’i korur ama f-hattından ayrılır; bu, ileride şah kanadının biraz zayıflamasına neden olacak.',
      diger: [
        { move: '19...Be2', text: 'Fili aktif tutmak (Motor: 0.00).' },
        { move: '19...h6', text: 'Şaha nefes alanı (Motor: +0.03).' },
      ],
    },
    '20w': {
      text: '20.Be3 ile fil c5 piyonuna saldırır.',
      amac: 'c5’e ikinci baskı yapmak ve b6 atını almakla tehdit etmek.',
      neden: 'Fil d2’de pasifti. 20.Bf4 de eşittir; 20.h3 ise erken (Motor: −0.07).',
      diger: [
        { move: '20.Bf4', text: 'Eşit (Motor: 0.00).' },
        { move: '20.h3', text: 'Erken (Motor: −0.07).' },
      ],
    },
    '20b': {
      text: '20...Be2 ile fil e2’ye girer.',
      amac: 'd1 ve f3 karelerine bakmak; ...Bf3 ile g2 filini değişmeye hazırlanmak.',
      neden: 'Pein, Siyahın filinin yeni bir yere geçmesi gerektiğini söyler. Motor 20...Rc7 (−0.01) ve 20...h6’yı biraz daha iyi buluyor; fil e2’de ileride Beyazın planlarına yardım edecek bir hedef olabilir.',
      diger: [
        { move: '20...Rc7', text: 'Kaleleri ikilemek (Motor: −0.01).' },
        { move: '20...h6', text: 'Şaha nefes alanı (Motor: 0.00).' },
      ],
    },
    '21w': {
      text: '21.Bf4 ile fil f4’e gelir.',
      amac: 'Siyahı ...e5 ile cevap vermeye zorlamak; böylece e5 piyonu h5 vezirinin beşinci yataydan c5’i korumasını kessin.',
      neden: 'Pein: “İlginç; Kramnik Siyahın vezirinin oyundan kesilmesi için bir tempo harcıyor.” Motor 21.h3’ü biraz daha iyi buluyor (+0.17), ama Bf4 psikolojik ve yapısal bir sorudur.',
      diger: [
        { move: '21.h3', text: 'g4 hazırlığı (Motor: +0.17).' },
        { move: '21.Rac1', text: 'Eşit (Motor: 0.00).' },
      ],
    },
    '21b': {
      text: '21...e5 ile fil kovalanır.',
      amac: 'Fili geri itip merkezde yer kazanmak.',
      neden: 'Rogers bu hamleyi “çok bağlayıcı” bulur; Yusupov 21...Bf3 ile g2 filini değişmeyi önerdi. Demit’in verdiği 21...Bf3 22.Qa6 Bxg2 23.Kxg2 e5 24.Be3 f5 hattında motor +0.39 veriyor. ...e5 sonrası h5 veziri artık c5’e bakamaz.',
      diger: [
        { move: '21...Bf3', text: 'Yusupov’un önerisi; fil değişimi (Motor: +0.07).' },
        { move: '21...Nc4', text: 'Atı aktifleştirmek (Motor: 0.00).' },
      ],
    },
    '22w': {
      text: '22.Be3 ile fil e3’e döner ve c5’e yine saldırır.',
      amac: 'c5’e baskıyı sürdürmek; ...e5 sonrası Siyahın kara kareleri zayıfladı.',
      neden: 'Pein ve Demit 22.Bxe5’in eşitliğe gittiğini yazar; motor 22.Bxe5 Nc4 23.Qa6 Qxe5 24.Rxe2 hattında +0.38 veriyor. Kramnik daha sağlam yolu seçti; Demit bu hamleyi “c5 piyonunu gıdıklamak” diye niteler.',
      diger: [
        { move: '22.Bxe5', text: 'Piyon almak; 22...Nc4 sonrası karmaşa (Motor: +0.38).' },
        { move: '22.Bc1', text: 'Pasif (Motor: −0.48).' },
      ],
    },
    '22b': {
      text: '22...Bg4 ile fil g4’e çekilir.',
      amac: 'Fili e2’den çıkarmak ve ...Bf3 fikrini korumak.',
      neden: 'Rogers bunu “iki hatanın ilki” diye niteler. Pein, Anand’ın bir sonraki hamleyi (23.Qa6) küçümsediğini, bu yüzden 22...Nc4’ü oynamadığını yazar. Bg4 sonrası c4 karesi filsiz kalır ve Qa6 ile tutulabilir.',
      diger: [
        { move: '22...Nc4', text: '23.Qa6 Bd3 ile eşit (Motor: 0.00); Demit’in aktardığına göre Anand bu hatta kendini biraz kötü görüyordu.' },
        { move: '22...Bd3', text: 'Fili c4’ü koruyacak şekilde tutmak (Motor: 0.00).' },
      ],
    },
    '23w': {
      text: '23.Qa6 ile vezir a6’ya yerleşir.',
      amac: 'a7, b7, b6 ve c4 karelerini gözetlemek; Siyahın atını c4’ten mahrum bırakmak.',
      neden: 'Pein: “Güzel bir sinsi hamle; somut tehdit yok ama kilit kareleri gözetliyor.” Polgar ve Demit 23.Bxc5’in 23...Nc4 yüzünden daha kötü olduğunu söyler; motor da onaylıyor (−0.28).',
      diger: [
        { move: '23.Bxc5?', text: '23...Nc4 ile Siyah karşı oyun (Motor: −0.28).' },
        { move: '23.Qb5', text: 'Eşit (Motor: +0.10).' },
      ],
    },
    '23b': {
      text: '23...f6? kara kareleri ve e6’yı zayıflatır.',
      amac: 'e5 piyonunu sağlamlaştırmak ve vezire f7 karesini açmak.',
      neden: 'Kramnik: “Belirleyici hata.” En çok 23...Be6 24.Bf1 Qf3’ten çekindiğini söyledi (Rogers). Motor 23...h6 (0.00) ya da 23...Be6 24.Bf1 Nd7 (+0.07) ile Siyahın dayandığını gösteriyor; maç hamlesinden sonra +1.3.',
      diger: [
        { move: '23...h6', text: 'Motorun ilk tercihi (0.00).' },
        { move: '23...Be6', text: '24.Bf1 Nd7 ile eşit (Motor: +0.07); Kramnik’in korktuğu 24...Qf3 ise motora göre +0.72.' },
        { move: '23...Nc4?', text: '24.Qxc4 ile taş kaybı (Motor: +5.1).' },
      ],
    },
    '24w': {
      text: '24.a4! ile a5 ilerleyişi hazırlanır ve b6 atı sorgulanacak.',
      amac: 'a5 ile atı kenara itmek ve a7’yi hedef almak.',
      neden: 'Pein: “Siyahın atının istikrarı yok.” Motor 24.a4’ü (+1.10) 24.Rab1’den (+0.28) belirgin daha güçlü buluyor; zaman Beyazın lehine.',
      diger: [
        { move: '24.Rab1', text: 'Daha yavaş (Motor: +0.28).' },
        { move: '24.h4', text: 'Şah kanadında alan (Motor: +0.17).' },
      ],
    },
    '24b': {
      text: '24...Qf7 ile vezir f7’den c4 ve a2’ye bakar.',
      amac: 'Veziri oyuna geri getirmek ve c4 karesini desteklemek.',
      neden: 'Vezir h5’te oyun dışıydı. 24...Rc7 25.a5 Nd7 ile Siyah pasif (Motor: +1.28); 24...Qe8 daha kötü (+1.60).',
      diger: [
        { move: '24...Rc7', text: '25.a5 Nd7 (Motor: +1.28).' },
        { move: '24...Qe8', text: '25.a5 Nd7 (Motor: +1.60).' },
      ],
    },
    '25w': {
      text: '25.Bf1! ile fil c4 karesini kontrol eder.',
      amac: 'Fili f1-a6 çaprazına geçirmek; c4’ü taktik olarak yasaklamak.',
      neden: 'Pein bu hamleye iki ünlem verir: “Kramnik c4’ün kontrolünü keskin taktiklerle alıyor.” 25...Nc4? 26.Bxc4 fil c4’ü alırken f7 vezirini de vurur (Motor: +7.5).',
      diger: [
        { move: '25.Rab1', text: '25...Nc4 ile at c4’e yerleşir (Motor: +0.50–0.70).' },
        { move: '25.a5', text: '25...Nc4 ile Siyah dengeyi kurar (Motor: +0.10).' },
      ],
    },
    '25b': {
      text: '25...Be6 ile fil e6’ya döner.',
      amac: 'c4 karesini korumak ve fili merkeze getirmek.',
      neden: 'Motor 25...Kh8 (+1.50) ile maç hamlesini (+1.58) yakın görüyor. 25...Nc4? 26.Bxc4 ile kaybeder (Motor: +7.5).',
      diger: [
        { move: '25...Kh8', text: 'Şahı çapraz dışına çekmek (Motor: +1.50).' },
        { move: '25...Nc4?', text: '26.Bxc4 ile fil f7 vezirini vurur (Motor: +7.5).' },
      ],
    },
    '26w': {
      text: '26.Rab1 ile kale açık b-hattına gelir.',
      amac: 'b-hattını kontrol etmek, b6 atına baskı yapmak ve b7’ye girmeye hazırlanmak.',
      neden: 'Pein ve Demit bu hamleyi güçlü bulur. Motor 26.Reb1’i biraz daha iyi görüyor (+1.51 / +1.05); e1 kalesi e4’ü korur, a1 kalesi ise a5’i destekler.',
      diger: [
        { move: '26.Reb1', text: 'Motorun tercihi (+1.51); a1 kalesi a5’i destekler.' },
        { move: '26.a5', text: '26...Nc4 ile at c4’e girer (Motor: +0.01).' },
      ],
    },
    '26b': {
      text: '26...c4? piyonu kendi kendine zayıflatır.',
      amac: 'c4 karesini piyonla tutmak ve e6 filini korumak.',
      neden: 'Kramnik: “Siyah c4’te abluka kurmaya yetişemiyor” (Rogers). Pein bunu maçın gerginliğinin yol açtığı bir hata sayar. Motor 26...Rab8 27.a5 Nc4 28.Rxb8 Rxb8 29.Bxc5 (+1.1) ya da 26...f5 (+0.9) öneriyor; maç hamlesinden sonra +1.9.',
      diger: [
        { move: '26...Rab8', text: '27.a5 Nc4 28.Rxb8 Rxb8 29.Bxc5 (Motor: +1.1).' },
        { move: '26...f5', text: '27.a5 f4 28.Bxf4 exf4 29.axb6 (Motor: +0.9); Pein bunu kaybeden bir hat olarak verir, motor Beyazı daha iyi ama kazanmış saymıyor.' },
        { move: '26...Bc4?', text: '27.Bxc4 Qxc4 28.Rxb6 (Motor: +4.7).' },
      ],
    },
    '27w': {
      text: '27.a5 ile at kovalanır.',
      amac: 'Atı kenara (a4) itmek ve a7’yi zayıflatmak.',
      neden: 'Pein: “Siyah artık kaybetmiş.” Motor 27.a5’i (+2.39) 27.Red1 (+1.61) ve 27.Rec1’den (+1.46) çok daha güçlü buluyor.',
      diger: [
        { move: '27.Red1', text: 'd-hattında baskı (Motor: +1.61).' },
        { move: '27.Rec1', text: 'c4’e baskı (Motor: +1.46).' },
      ],
    },
    '27b': {
      text: '27...Na4 ile at a4’e gider ve kenarda kalır.',
      amac: 'c3 piyonuna saldırmak ve ...Nxc3 ile karşı oyun aramak.',
      neden: 'Pein 27...Nd7 28.Rb7 hattının da kazanılmış olduğunu yazar; motor 27...Nd7’yi (+2.38) maç hamlesine (+2.56) yakın görüyor. 27...h5? 28.axb6 ile taş kaybı (Motor: +3.66).',
      diger: [
        { move: '27...Nd7', text: '28.Rb7 Nb8 29.Rxf7 Nxa6 (Motor: +2.38).' },
        { move: '27...h5?', text: '28.axb6 ile taş kaybı (Motor: +3.66).' },
      ],
    },
    '28w': {
      text: '28.Rb7! ile kale yedinci yataya girer.',
      amac: 'f7 vezirine ve a7 piyonuna saldırmak; Siyahı tamamen pasif savunmaya itmek.',
      neden: 'Polgar: “Kramnik zaferin kokusunu alıyor.” 28.Rb4 28...Nc5 ile Siyaha nefes verir (Motor: +1.16); 28.Rec1 daha da yavaş (+0.52).',
      diger: [
        { move: '28.Rb4', text: '28...Nc5 29.Bxc5 Rxc5 (Motor: +1.16).' },
        { move: '28.Rec1', text: 'c4’e baskı (Motor: +0.52).' },
      ],
    },
    '28b': {
      text: '28...Qe8 ile vezir e8’e çekilir.',
      amac: 'Veziri saldırıdan kurtarmak ve e6 filini korumak.',
      neden: 'Vezir f7’de saldırı altındaydı. 28...Qxb7? 29.Qxb7 Nxc3 ile Siyah kale için yetersiz telafi alır (Motor: +5.10); 28...h6? 29.Rxf7 (+5.37).',
      diger: [
        { move: '28...Qxb7?', text: '29.Qxb7 Nxc3 30.Qa6 (Motor: +5.10).' },
        { move: '28...h6?', text: '29.Rxf7 (Motor: +5.37).' },
      ],
    },
    '29w': {
      text: '29.Qd6! ile vezir merkeze döner.',
      amac: 'e6 filine, e5’e ve c4’e aynı anda baskı yapmak; Qb4 ve Re7 tehditlerini hazırlamak.',
      neden: 'Pein: “Re7 ve Qb7 ikisi birden önlenemez; a7 piyonu düşer.” Rogers: 29...Nxc3 30.Re7 bir taş kazandırır. 29...Bf7 30.Qb4 (Motor: +2.67) ya da 29...Rd8 30.Qb4 (+3.30) sonrası Siyah neredeyse kıpırdayamaz. 29.Rxa7? ise 29...Nxc3 ile atı oyuna sokar (Motor: +0.78). Anand terk etti.',
      diger: [
        { move: '29.Rxa7?', text: '29...Nxc3 ile at oyuna döner (Motor: +0.78).' },
        { move: '29.Rc1', text: '29...Nc5 ile Siyah nefes alır (Motor: +1.62).' },
      ],
    },
  },
  qa: [
    { q: 'Kramnik neden 4.Nf3 ve 5.g3 seçti?', a: 'Yusupov bu seçimi “çok akıllıca” buldu (chess.com). 5.g3 ile Beyaz fili uzun çapraza koyar ve 11.Nxc6 bxc6 sonrası Siyahın c6 ve a7 piyonlarına baskı yapar. Uzun çapraz Katalan’daki gibi çalışır; Polgar’a göre Anand 18.Re1 yeniliği karşısında hazırlıksız yakalandı ve uzun düşündü.' },
    { q: '18.Re1 neden önemliydi?', a: 'Bu yeni hamle, Kasparov – Anand 2000 (18.Be3) ve Bacrot – Carlsen 2008 (18.Bf4) oyunlarından ayrıldı. Kale e4’ü korur ve h5 vezirinin d1-h5 çaprazındaki baskısını boşa çıkarır. Kramnik bunu “ezici değil ama seçim yaptıran” bir yenilik olarak niteledi; Polgar’a göre Anand burada yaklaşık yarım saat düşündü.' },
    { q: '21.Bf4 neden “tempo kaybı” değil?', a: 'Fil f4’e gidip e3’e geri döner, yani iki tempo harcar gibi görünür. Ama Siyahı 21...e5’e zorlayarak h5 vezirinin beşinci yataydan c5’i korumasını keser. Pein bunu “Siyahın vezirinin oyundan kesilmesi için harcanan tempo” diye anlatır.' },
    { q: 'Siyahın asıl hatası nerede?', a: 'Kramnik’e göre 23...f6 belirleyici hataydı; motor da +0.07’den +1.3’e sıçrama gösteriyor. 23...h6 ya da 23...Be6 24.Bf1 Nd7 ile Siyah dengeyi tutuyordu. Rogers 22...Bg4’ü de “iki hatanın ilki” sayar, çünkü c4 karesini filsiz bıraktı.' },
    { q: '25.Bf1 neden iki ünlem aldı?', a: 'Fil f1-c4 çaprazından c4’e bakar ve arkasında f7 vezir ile g8 şah vardır. Bu yüzden 25...Nc4? 26.Bxc4 ile fil hem atı alır hem de vezire saldırır (Motor: +7.5). Siyahın en iyi at karesi taktik olarak kapandı.' },
    { q: 'Siyah 26. hamlede nasıl daha iyi savunabilirdi?', a: '26...Rab8 27.a5 Nc4 28.Rxb8 Rxb8 29.Bxc5 ile Siyah bir piyon kaybeder ama taşları aktif kalır (Motor: +1.1). 26...f5 de motora göre benzer (+0.9). 26...c4? ise piyonu kendi kendine zayıflattı ve atı kenara gönderdi (+1.9, sonra +2.4).' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Siyahın taşları dağınıktı: vezir h5’te oyun dışı, fil e2-g4 arasında gidip geldi, at b6’da desteksiz kaldı. Beyaz ise her hamlede bir taşını iyileştirdi (Re1, Bf4-e3, Qa6, a4, Bf1, Rab1). Siyahın zayıf a7 ve c5/c4 piyonları sonunda bu baskıya dayanamadı.' },
    { q: 'Neden 29.Qd6 sonrası Anand terk etti?', a: 'Tehditler çok fazlaydı: Qb4 ile a4 atı ve c4 düşer, Re7 vezire ve file saldırır. 29...Nxc3 30.Re7 bir taş kazandırır (Motor: +4.3); 29...Bf7 30.Qb4 sonrası Siyah hiçbir taşını oynatamaz. Skor 6–4’e indi ama Anand bir sonraki oyunda beraberlikle unvanı korudu.' },
  ],
  sources: [
    { title: 'ChessBase: WCC Bonn – Analysis of game ten (Malcolm Pein)', url: 'https://en.chessbase.com/post/wcc-bonn-analysis-of-game-ten' },
    { title: 'ChessBase: WCC R10 – Kramnik draws blood, score now 6:4', url: 'https://en.chessbase.com/post/wcc-r10-kramnik-draws-blood-score-now-6-4' },
    { title: 'Chess Life Online (Ian Rogers): Kramnik wins game 10', url: 'https://uschess.org/content/view/8828/477' },
    { title: 'FIDE: Kramnik Finally Wins, Anand Still Leads 6-4 (Susan Polgar)', url: 'https://old.fide.com/component/content/article/1-fide-news/3450-kramnik-wins.html' },
    { title: 'Chess.com: World Championship – Kramnik scores first win', url: 'https://www.chess.com/news/view/world-championship-kramnik-scores-first-win' },
    { title: 'Chess.com blog (denz): WCC 2008 game 10', url: 'https://www.chess.com/blog/denz/wcc-2008-game-10' },
    { title: 'Wikipedia: World Chess Championship 2008', url: 'https://en.wikipedia.org/wiki/World_Chess_Championship_2008' },
  ],
  exercises: [
    { id: 'ka-1', kind: 'tekrar', plan: false, title: 'Rb7: yedinci yatay',
      source: 'Kramnik – Anand, Bonn 2008 (28. hamle)',
      fen: 'r1r3k1/p4qpp/Q3bp2/P3p3/n1p1P3/2P1B1P1/5P1P/1R2RBK1 w - - 1 28',
      prompt: 'Siyahın atı a4’e itildi. Beyazın veziri a6’da, kalesi b1’de. Kale nereye girer?',
      hint: 'b-hattı açık; yedinci yatayda a7 piyonu var.',
      line: ['Rb7'],
      explanation: '**28.Rb7!** Kale yedinci yataya girer ve f7’deki veziri ve a7 piyonunu hedef alır. Motor: Rb7 +3.8, 28.Rb4 +1.4.',
      link: 'Açık b-hattı yedinci yataya giden yol oldu.' },
    { id: 'ka-2', kind: 'tekrar', plan: false, title: 'Vezir merkeze döner',
      source: 'Kramnik – Anand, Bonn 2008 (29. hamle)',
      fen: 'r1r1q1k1/pR4pp/Q3bp2/P3p3/n1p1P3/2P1B1P1/5P1P/4RBK1 w - - 3 29',
      prompt: 'Siyahın veziri e8’e çekildi. Beyazın veziri a6’da. Siyahın c4 ve a7 piyonlarını kazanmak için vezir nereye gitmeli?',
      hint: 'Vezir d6’dan hem e6 filine hem e5’e bakar.',
      line: ['Qd6'],
      explanation: '**29.Qd6!** Vezir merkeze döner; Bxc4 ve Bxa7 tehditleri savunulamaz. Motor: Qd6 +4.1, sonraki en iyi hamle +2.1.',
      link: 'Zayıf piyonlara baskı bir taşla değil, kale, vezir ve fil birlikte yapılır.' },
    { id: 'ka-3', kind: 'transfer', plan: false, title: 'Kale dördüncü yatayda',
      source: 'Kasparov – Karpov, 1985, 1. oyun (25. hamle)',
      fen: '2r1k3/p4ppp/bp1rp3/8/1RPP4/3K2P1/P4PBP/1R6 w - - 0 25',
      prompt: 'Yine 4.Nf3 ve yine Karpov. Vezirler değişti. Siyahın a6 fili ve b6 piyonu vezir kanadında. Beyazın kalesi b4’te. Kale nereye gider?',
      hint: 'Kale a-hattından a6 filine saldırabilir.',
      line: ['Ra4'],
      explanation: '**25.Ra4!** Kale a6 filine saldırır ve a7 piyonunu hedef alır. Motor: Ra4 +2.1, sonraki en iyi hamle +0.3.',
      link: 'Kramnik kalesini b7’ye, Kasparov a4’e getirdi; ikisinde de hedef Siyahın vezir kanadındaki zayıf piyon ve taşlar.' },
    { id: 'ka-4', kind: 'transfer', plan: false, title: 'Kale beşinci yatayda',
      source: 'Kasparov – Karpov, 1985, 1. oyun (38. hamle)',
      fen: '8/1r2kp2/1P2p3/6rp/1R1P2P1/3K1P2/8/2R5 w - - 1 38',
      prompt: 'Kale oyun sonu. Beyazın b6’da geçer piyonu var. Siyahın kalesi b7’de onu durduruyor. En güçlü kale hamlesi hangisi?',
      hint: 'Kale c-hattından beşinci yataya çıkıp g5 kalesine karşı çıkabilir.',
      line: ['Rc5'],
      explanation: '**38.Rc5!** Kale beşinci yatayda Siyahın kalesini değişmeye zorlar; şah c4-b5 ile b-piyonuna yardım edecek. Motor: Rc5 +3.8, sonraki en iyi hamle +2.0.',
      link: 'Zayıf piyonları kazanmak ve geçer piyonu desteklemek için aktif kale şart.' },
  ],
};
