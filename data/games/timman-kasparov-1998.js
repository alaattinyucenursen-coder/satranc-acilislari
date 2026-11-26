// Timman – Kasparov, EuroTel Trophy, Prag 1998. Kaynak: PgnMentor (Kasparov.pgn).
export default {
  id: 'timman-kasparov-1998',
  theme: 'İleri piyonlar: b3 kaması ve d-piyonunun yürüyüşü',
  white: 'Jan Timman', black: 'Garri Kasparov',
  whiteShort: 'Timman', blackShort: 'Kasparov',
  event: 'EuroTel Trophy maçı, 2. oyun', site: 'Prag', year: 1998, eco: 'D15',
  variation: 'Slav Savunması, 4...dxc4 5.e3 b5',
  result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e3 b5 6. a4 b4 7. Nb1 Ba6 8. Qc2 b3 9. Qd1 e6 10. Be2 c5 11. O-O Nc6 12. Ne5 Rc8 13. Na3 cxd4 14. Naxc4 Qd5 15. Bf3 Ne4 16. Nxc6 Rxc6 17. Nd2 f5 18. Re1 d3 19. Nxb3 e5 20. Bd2 Rb6 21. Bxe4 fxe4 22. Nc1 Rxb2 23. Bc3 d2 24. Rf1 Bxf1 25. Bxb2 Bc4 26. Ne2 Bb3 27. Nc3 Bxd1 28. Nxd5 Bb3 29. Nc3 Bb4 30. Nd1 O-O 0-1`,

  summary: 'Bu oyun, Eylül 1998’de Prag’da oynanan altı oyunluk EuroTel Trophy maçının 2. oyunudur; Kasparov maçı 4–2 kazandı ve iki galibiyetinden biri budur. Kasparov Siyahla kazandı. Timman Slav’ın ana yolu 5.a4 yerine sakin **5.e3**’ü seçti. Kasparov **5...b5** ile c4 piyonunu tuttu, **6...b4** ile c3 atını geri yolladı ve **8.Qc2**’ye **8...b3!** ile karşılık verdi. Vezir tempo kaybederek d1’e döndü, b3 piyonu da Beyazın vezir kanadına kama gibi oturdu. Siyah sonra **...c5** ve **13...cxd4** ile merkezi açtı. Vezirini d5’te tuttu, Beyaz fil d5’e saldırınca **15...Ne4!** ile araya at koydu. Ardından d-piyonunu **18...d3!** ile ileri sürdü ve **19...e5** ile destekledi. **23...d2!** kale ile atı çatalladı ve Siyah kalitesini geri kazandı. Timman **26.Ne2?** ile b3 karesinin denetimini bırakınca **26...Bb3!** gelip vezirleri değiştirdi. Vezirlerin gidişiyle d2 piyonu Beyaz taşlarının hepsini bağladı. 30...O-O’dan sonra Beyazın yapacak bir şeyi kalmamıştı.',
  intro: 'Slav Savunması’nın “saf” yolunda (4...dxc4) Siyah c4’te bir piyon alır, Beyaz da bu piyonu geri almaya çalışır. Ana yol 5.a4’tür: bu hamle ...b5’i önler ve 6.e4 ile 7.Bxc4’ü hazırlar. Timman’ın seçtiği 5.e3 (Alekhine Varyantı) daha sakin bir yoldur ama ...b5’e izin verir. Raymond Keene The Spectator köşesinde 5.e3 yüzünden piyonu geri kazanmanın zorlaştığını yazdı ve 5.a4’ün tercih edilmesi gerektiğini söyledi. 6.a4 b4 7.Nb1 Ba6 sonrası Siyahın vezir kanadı piyonları ileridedir, Beyazın ise sağlam bir merkezi ve gelişme kolaylığı vardır. Oyun bu iki kozun yarışıdır. Kasparov piyonlarını daha da ileri sürdü (b3, sonra d3–d2) ve Beyazın merkezi taşlarla tutmasına hiç fırsat vermedi.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'c4 piyonunu geri kazanmak: f1 fili, Qc2 ve b1 atı (a3 ya da d2 üzerinden) c4’e baskı yapar. 8.Qc2 bu planın en direkt ama en riskli yoluydu; 8...b3 veziri geri gönderdi.',
      'Siyahın ileri piyonlarını (b3, sonra d4–d3) zamanla toplamak. 19.Nxb3 ile b3 piyonu alındı ama bu arada d-piyonu çok ilerlemişti.',
      'Ne5 ile merkeze yerleşip c6 atına ve açık c-hattına baskı yapmak, Bf3 ile uzun çaprazda c6’yı bağlamak. 15.Bf3 bu fikrin zirvesiydi ama 15...Ne4 her şeyi savuşturdu.',
      'Serbest d-piyonunu taşlarla bloke etmek: ideal kare d4’tü (Nb3–d4). 19...e5 bu kareyi elinden aldı, d3/d2 piyonunu durdurmak için taşlar savunmaya geçti.',
      'Malzemeyi koruyup piyon ve kale eksiğini taşlarla telafi etmek. Kritik anda 26.h3 ile sabırla beklemek gerekirdi; 26.Ne2? b3’ü bırakıp vezir değişimine izin verdi.',
      'Şahını güvende tutmak: Beyazın şahı hiç tehlikeye girmedi. Oyunu kaybettiren saldırı değil, Siyahın piyonlarıydı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...b5–b4–b3 ile c4 piyonunu tutmak, Beyazın atını geri sürmek ve vezir kanadında yer kazanmak. 8...b3! Beyazın vezirine tempo ile saldırarak bu planı tamamladı.',
      '...e6, ...c5 ve ...cxd4 ile merkezi açmak: Beyazın d4 piyonunu değiştirip yerine kendi ileri d-piyonunu koymak.',
      'Taşları merkezde tutmak: veziri d5’e, atı e4’e getirmek. 15...Ne4 ile c6 atını korumayı sürdürmek, 17...f5 ile e4 atını desteklemek.',
      'd-piyonunu ileri sürmek: 18...d3 ile Beyazın kampına girmek, 19...e5 ile d4 karesini kontrol edip blokajı önlemek, 21...fxe4 ile piyonu desteklemek ve 23...d2 ile çatal yapmak.',
      'a6 filinin a6–f1 çaprazından yararlanmak: d3 piyonu ilerleyince çapraz açılır ve f1’deki kale hedef olur (24...Bxf1).',
      'Vezirleri değiştirmek: vezirler gidince d2 piyonunu durduracak en güçlü taş tahtadan gider. 26...Bb3! ve 27...Bxd1 bunu sağladı.',
      'Bitirişte acele etmemek: 25...Bc4 ile vezir çıkarmak yerine tehdidi canlı tutmak, en sonda 30...O-O ile kaleyi oyuna sokmak.',
    ] },
  },
  critical: [
    { move: '5w', title: '5.e3: sakin ama tavizli', text: 'Ana yol 5.a4 Bf5’tir (Çek Varyantı); a4 hamlesi ...b5’i önler. 5.e3 ile Beyaz c4’ü f1 filiyle almayı umar ama Siyah 5...b5! ile piyonu tutar. Motor 5.a4’ü +0.2, 5.e3’ü −0.35 olarak değerlendiriyor. Keene, 5.e3 ile piyonu geri almanın zorlaştığını ve 5.a4’ün tercih edilmesi gerektiğini yazdı. Oyunun bütün öyküsü Siyahın tuttuğu bu vezir kanadı piyonlarından doğdu.' },
    { move: '8b', title: '8...b3! piyon kaması', text: '8.Qc2 hem c4’e hem de Beyazın b-piyonuna baskı kurmak istedi. Kasparov piyonu bir adım daha sürdü ve veziri vurdu. Vezir d1’e dönmek zorunda kaldı (9.Qd2 −1.1, 9.Qf5 −1.4 daha kötü). Böylece Siyah bir tempo kazandı ve b3’e kalıcı bir piyon yerleştirdi. Bu piyon a2 ve c2 karelerini kontrol eder, b1 atının gelişimini zorlaştırır. Motor 8...b3’ü −0.4 ile açık farkla en iyi buluyor. 8...e6 9.Bxc4 sonrası oyun eşitti (+0.1).' },
    { move: '13b', title: '13...cxd4: merkezi açma zamanı', text: 'Beyaz 13.Na3 ile c4 piyonunu ikinci atla da almaya hazırlanır. Siyah bu anı d4’te değişmek için kullanır: 14.Naxc4 sonrası d4’teki piyon hem e3’ü vurur hem de c4 atını geri püskürtmeye hazırdır. Motor: 13...cxd4 −1.1, 13...Qd5 ise yalnızca 0.0 (14.Nxc6 Rxc6). Kasparov’un piyon yapısı değişti: artık Siyahın b3’te ve d4’te iki ileri piyonu var.' },
    { move: '15b', title: '15...Ne4! araya giren at', text: '15.Bf3 d5’teki veziri vurur; vezir d5’ten ayrılırsa c6 atı korumasız kalır ve 16.Bxc6+ gelir (c6–d7–e8 çaprazı). 15...Qd8? 16.Bxc6+ (+4.1) ve 15...Qc5? 16.Bxc6+ (+2.4) kaybeder. Kasparov atı e4’e koyar: vezir yerinde kalır, at merkezde güçlü bir kareye oturur ve f3 filinin çaprazı kapanır. Motor: 15...Ne4 −1.1, ondan sonraki en iyi hamle 15...Nxe5 +2.2. Yani tek iyi hamle buydu.' },
    { move: '18b', title: '18...d3! serbest piyon yürür', text: 'Beyaz 18.Re1 ile kalesini a6 filinin çaprazından kurtardı. Kasparov d4’te değişmek yerine piyonu d3’e sürdü. Piyon Beyazın kampının derinliğine girer, e2 ve c2 karelerini kontrol eder, Beyazın taşlarını savunmaya bağlar. Motor: 18...d3 −2.0, 18...dxe3 ise yalnızca −0.65. Keene, Beyaz b3 piyonunu geri alsa bile serbest d-piyonunun “bir canavar” olduğunu yazdı.' },
    { move: '19b', title: '19...e5: blokaj karesine izin yok', text: 'Serbest piyonu durdurmanın en iyi yolu önüne bir at koymaktır. Beyazın b3 atı d4’e gelmek istiyordu. 19...e5 bu kareyi kontrol eder, piyonun arkasına destek verir ve f8 filine c5/b4 yolunu açar. 19...Rb6 20.Nd4 sonrası Siyahın avantajı küçülürdü (−1.8). Oyundaki 19...e5 ise −2.3.' },
    { move: '23b', title: '23...d2! çatal', text: 'Piyon d2’ye ilerler ve aynı anda e1 kalesini ve c1 atını vurur. Keene bu hamleye ünlem verdi ve 23.Bc3 sonrası Siyahın zorlayıcı bir kazanç yolu olduğunu yazdı. 24.Bxb2 dxe1=Q+ 25.Qxe1 Bb4! sonrası vezir kurtulamaz (Motor: −5.7). 24.Bxd2 Rxd2 de −4.4. Timman’ın 24.Rf1’i “en az kötü” seçimdi ama a6–f1 çaprazı artık açıktı ve kale gitti. Motor 23...Rc2’yi de aynı güçte buluyor (−3.4); d2 en zorlayıcı yoldu.' },
    { move: '26w', title: '26.Ne2? b3 karesi bırakıldı', text: 'c1 atı b3 karesini koruyordu. 26.Ne2 ile at bu görevi bıraktı ve 26...Bb3! geldi. d1’deki vezir artık kaçamaz: vezir d1’den çıkarsa piyon d1’de vezir olur. 27.Qf1 d1=R ve 27.Qb1 d1=Q+ daha kötüdür, 27.Nc3 ile vezirleri değiştirmek zorunludur. Motor: 26.Ne2 −5.0. 26.h3 (−3.9) ya da 26.Bc3 (−4.2) ile Beyaz direnmeye devam edebilirdi.' },
  ],
  lessons: [
    'Slav’da ...dxc4 ve ...b5 ile piyon tutulursa ileri piyonlar (b4–b3) rakibin vezir kanadını sıkıştırır. Beyaz için 5.a4 bu yüzden ana yoldur: ...b5’i baştan engeller.',
    'Vezire tempo ile saldıran bir piyon hamlesi (8...b3) hem zaman hem yer kazandırır. Rakibin veziri geri dönerken siz gelişmeye devam edersiniz.',
    'Bağlanan ya da korumasız kalacak bir taşı kurtarmak için veziri çekmek yerine araya bir taş koymayı düşünün (15...Ne4). İyi bir araya giriş hem savunur hem de merkeze yerleşir.',
    'Serbest piyonun önündeki kareyi kontrol etmek (19...e5 ile d4) rakibin blokaj taşını engeller. Blokajsız bir piyon her an ilerleme tehdidi taşır.',
    'İkinci yataya ulaşan bir piyon çatal yapabilir (23...d2) ve rakibin bütün taşlarını bağlar. Tehdit çoğu zaman uygulamasından güçlüdür: 25...Bc4 ile Siyah vezir çıkarmayı bekletti.',
    'Serbest piyonu olan taraf için vezir değişimi çoğu zaman iyidir. Savunan taraf ise kendi taşlarının hangi kareleri koruduğunu unutmamalıdır: 26.Ne2? b3’ü bırakınca vezir değişimi zorunlu hale geldi.',
    'Rok yapmak için asla geç değildir: 30...O-O ile Kasparov kalesini tek hamlede oyuna soktu. Keene bunu “şaşırtıcı bir geç rok örneği” olarak andı.',
  ],
  notes: {
    '1w': {
      text: '1.d4: vezir piyonu iki kare ilerler, e5 ve c5 karelerini kontrol eder.',
      amac: 'Merkezde yer kaplamak ve c1 filinin yolunu açmak.',
      neden: 'Timman kariyeri boyunca 1.d4 ve 1.e4’ü birlikte oynadı. Kasparov’a karşı daha konumsal ve sakin bir mücadele için 1.d4 doğal seçimdi.',
      diger: [
        { move: '1.e4', text: 'Kasparov’un Sicilya’sına girmek demekti. Motor 1.e4’ü biraz daha yüksek görür (+0.4) ama fark pratikte önemsizdir.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıçtır ve çoğu zaman aynı yapılara geçer (Motor: +0.16).' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah merkezde simetrik karşılık verir.',
      amac: 'e4 karesini kontrol edip Beyazın 2.e4 ile tam merkez kurmasını engellemek.',
      neden: 'Kasparov 1.d4’e karşı genellikle 1...Nf6 ile Grünfeld ya da Kral Hint oynardı; 1990’ların sonunda Slav da repertuvarına girmişti. 1...d5 ile klasik merkez kontrolü sağlanır.',
      diger: [
        { move: '1...Nf6', text: 'Kasparov’un asıl repertuvarı (Grünfeld, Kral Hint, Nimzo-Hint). Motor eşit görüyor (+0.3).' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. c-piyonu d5’e saldırır.',
      amac: 'Siyahın merkez piyonunu değişime zorlamak ya da onu c4’ten baskı altında tutmak.',
      neden: 'Bu “gambit” gerçek bir piyon feda değildir: Beyaz c4’ü çoğu zaman geri alır. Önemli olan Siyahı d5 için karar vermeye zorlamaktır.',
      diger: [
        { move: '2.Nf3', text: 'Önce at gelişir, c4 sonra gelir. Motor: +0.2.' },
        { move: '2.Bf4', text: 'Londra Sistemi: daha az teorik, daha yavaş bir kurulum.' },
      ],
    },
    '2b': {
      text: '2...c6: Slav Savunması. d5 piyonu c-piyonuyla desteklenir.',
      amac: 'd5’i sağlamlaştırırken c8 filinin önünü kapamamak; ileride ...dxc4 ve ...b5 seçeneklerini açık tutmak.',
      neden: '2...e6 (Ortodoks savunma) c8 filini piyon zincirinin arkasına hapseder. Slav’da bu fil f5 ya da g4’e çıkabilir. Bu oyunda ise fil a6’ya gidecek, çünkü c6 piyonu ...b5’i destekliyor.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi. Sağlam ama c8 fili pasif kalır. Motor: +0.34.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü. Siyah piyonu hemen alır ama ...b5 ile tutmaya çalışmaz. Motor: +0.27.' },
      ],
    },
    '3w': {
      text: '3.Nf3: at gelişir ve e5’i kontrol eder.',
      amac: 'Gelişmeyi sürdürürken d4’ü desteklemek ve rok hazırlamak.',
      neden: '3.Nc3 hemen ...dxc4 ve ...b5’e karşı daha az esnektir; 3.Nf3 ana hamle sayılır. 3.cxd5 ise Değişme Slav’ına girer ve oyunu sadeleştirir.',
      diger: [
        { move: '3.Nc3', text: 'Motorun ilk tercihi (+0.44). 3...e6 ile Yarı-Slav’a ya da 3...dxc4’e geçilebilir.' },
        { move: '3.cxd5', text: 'Değişme Slav’ı: simetrik ve sakin, kazanma şansı az (+0.36).' },
      ],
    },
    '3b': {
      text: '3...Nf6: at gelişir ve d5’i bir kez daha destekler.',
      amac: 'Gelişmeyi sürdürmek ve e4 karesini kontrol etmek.',
      neden: 'Bu, Slav’ın ana yoludur. 3...dxc4 hemen alınırsa Beyaz 4.e3 ile c4’ü kolayca geri alır. Önce at gelişir, piyon alışı Nc3’ten sonra gelir.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav kurulumuna yaklaşır ama c8 filinin çaprazı kapanır (+0.44).' },
        { move: '3...dxc4', text: 'Erken alış: 4.e3 b5 5.a4 ile Beyaz piyonu daha rahat geri kazanır (+0.48).' },
      ],
    },
    '4w': {
      text: '4.Nc3: ikinci at da d5’e baskı yapar.',
      amac: 'd5’e baskıyı artırmak ve e4 ilerlemesini hazırlamak.',
      neden: 'Ana yoldur. 4.e3 sakin bir yoldur ve ...Bf5 ile Siyah filini rahatça geliştirir. 4.Nc3 sonrası Siyah bir karar vermek zorundadır: ...dxc4, ...e6 ya da ...a6 (Chebanenko).',
      diger: [
        { move: '4.e3', text: 'Sakin kurulum: 4...Bf5 ile Siyah c8 filini rahatça geliştirir (+0.29).' },
        { move: '4.cxd5', text: 'Değişme Slav’ı. Simetrik yapıya geçilir (+0.29).' },
      ],
    },
    '4b': {
      text: '4...dxc4: Siyah c4 piyonunu alır. Saf (ana yol) Slav.',
      amac: 'Beyazın merkezini zayıflatmak ve piyonu geri alması için Beyaza zaman harcatmak. Bu arada c8 filini f5 ya da g4’e geliştirmek.',
      neden: 'Ana yolda Siyah 5.a4 sonrası 5...Bf5 ile filini geliştirir ve 6.e4’ü engeller. Beyaz e3 oynarsa Siyahın ...b5 ile piyonu tutma imkânı doğar. Kasparov’un bu oyundaki bütün stratejisi bu piyon üzerine kuruldu.',
      diger: [
        { move: '4...e6', text: 'Yarı-Slav’a girer (Meran, Botvinnik sistemi). Motor: +0.41.' },
        { move: '4...a6', text: 'Chebanenko Slav’ı. ...b5 hazırlanır, Siyah c4’ü almadan önce bekler.' },
      ],
    },
    '5w': {
      text: '5.e3: Alekhine Varyantı. Beyaz f1 filiyle c4’ü geri almak ister.',
      amac: 'Sağlam bir merkez kurmak ve Bxc4 ile malzemeyi geri kazanmak.',
      neden: 'Bu hamle ...b5’e izin verir: c4 piyonu b5 ile korunur. Bu yüzden ana yol 5.a4’tür. Keene The Spectator’daki notlarında 5.e3’ün piyonu geri kazanmayı zorlaştırdığını yazdı ve 5.a4’ü önerdi. Motor da aynı fikirde: 5.e3 sonrası değerlendirme Siyahın lehine döner (−0.35).',
      diger: [
        { move: '5.a4', text: 'Çek Varyantı, Slav’ın ana yolu. ...b5’i önler ve 6.e4’ü hazırlar. 5...Bf5 6.e3 e6 7.Bxc4 ile dengeli bir oyun gelir. Motor: +0.2.' },
        { move: '5.e4', text: 'Geller Gambiti: 5...b5 6.e5 Nd5 7.a4 e6 ile keskin bir oyun. Wikipedia’ya göre bu yol genellikle Siyahın lehine görülür.' },
        { move: '5.g3', text: 'Katalan tarzı bir kurulum: fil g2’den uzun çaprazda c4’e ve vezir kanadına baskı yapar (+0.1).' },
      ],
    },
    '5b': {
      text: '5...b5: Siyah c4 piyonunu b-piyonuyla tutar.',
      amac: 'Fazla piyonu korumak ve vezir kanadında yer kazanmak. Beyaz piyonu geri almak için zaman harcamak zorunda kalacak.',
      neden: '5.e3’ün tam olarak izin verdiği hamle budur. 5...Bf5 ya da 5...Bg4 de oynanabilir, ama 6.Bxc4 sonrası Beyaz piyonu rahatça geri alır ve gelişme avantajı kazanır (Motor: +0.6). Kasparov keskin ve dinamik bir oyun istediği için 5...b5’i seçti.',
      diger: [
        { move: '5...Bf5', text: '6.Bxc4 e6 7.O-O ile Beyaz piyonu geri alır ve rahat bir oyun kurar. Motor: +0.59.' },
        { move: '5...Bg4', text: '6.h3 Bh5 7.Bxc4 benzer bir Beyaz üstünlüğü verir (+0.62).' },
      ],
    },
    '6w': {
      text: '6.a4: a-piyonu b5 piyonunu sorgular.',
      amac: 'b5–c4 zincirinin tabanına saldırmak; Siyahı ya ...b4 ile ilerlemeye ya da zincirini zayıflatmaya zorlamak.',
      neden: 'Piyonu geri kazanmanın tek gerçek yolu budur. 6.Be2 ya da 6.Ne5 gibi yavaş hamleler Siyaha ...Bb7, ...a6 ile zinciri sağlamlaştırma zamanı verir (Motor: −0.4). 6.a4 ile Beyaz hemen netlik ister.',
      diger: [
        { move: '6.Be2', text: '6...Bb7 7.a4 a6 ile Siyah zincirini korur. Motor: −0.36.' },
        { move: '6.Ne5', text: '6...e6 7.a4 b4 8.Nb1 ile oyundaki yapılara benzer ama daha az kontrollü bir oyun (−0.44).' },
      ],
    },
    '6b': {
      text: '6...b4: piyon ilerler ve c3 atına saldırır.',
      amac: 'Atı c3’ten uzaklaştırmak, e4 ilerlemesini ve d5 karesine baskıyı azaltmak.',
      neden: '6...a6 ya da 6...Qb6 ile zinciri korumak mümkündür ama 7.axb5 cxb5 sonrası Siyahın vezir kanadı açılır ve piyon yapısı bozulur. Motor 6...Qb6’yı +0.55, 6...Qa5’i +0.74 görüyor. 6...b4 en doğal ve en iyi yoldur (0.0).',
      diger: [
        { move: '6...Qb6', text: '7.axb5 cxb5 8.b3 ile Beyaz c4 zincirini kırar. Motor: +0.55.' },
        { move: '6...Qa5', text: '7.Bd2 b4 8.Na2 ile vezir a5’te tuhaf durur (+0.74).' },
      ],
    },
    '7w': {
      text: '7.Nb1: at b1’e geri döner.',
      amac: 'Atı ileride d2 ya da a3 üzerinden c4’e getirip piyonu geri almak.',
      neden: '7.Na2 daha aktif görünür: at b4 piyonuna saldırır ve 7...e6 8.Bxc4 ile Beyaz piyonu hemen geri alır (Motor: −0.07). 7.Nb1 de teoride oynanır ama 7...Ba6 ile Siyah c4’ü sağlama alır. Nb1’den sonra at d2 üzerinden c4’e yönelebilir; bu yüzden hamle mantıklıdır ama yavaştır.',
      diger: [
        { move: '7.Na2', text: '7...e6 8.Bxc4 Bb7 9.Qe2 ile Beyaz piyonu geri alır, a2 atı b4’ü baskı altında tutar. Motorun ilk tercihi (−0.07).' },
        { move: '7.Ne2', text: '7...Ba6 8.Nf4 ile at merkeze yaklaşır ama c4 yine sağlam kalır (−0.35).' },
      ],
    },
    '7b': {
      text: '7...Ba6: fil a6’dan c4 piyonunu korur.',
      amac: 'c4’ü ikinci kez savunmak ve a6–f1 çaprazına yerleşmek. Bu çapraz ileride f1’deki kaleye karşı önemli olacak.',
      neden: 'Slav’da c8 filinin genelde f5 ya da g4’e gelmesi beklenir. Burada ise b5 piyonu gittiği için a6 çaprazı açıktır ve fil hem c4’ü korur hem de f1’e bakar. Wikipedia’nın verdiği teori yolu 7...Ba6 8.Nbd2 c3 9.bxc3 Bxf1 10.Nxf1 bxc3’tür. 7...e6 8.Bxc4 sonrası Beyaz piyonunu geri alır (+0.07).',
      diger: [
        { move: '7...e6', text: '8.Bxc4 c5 9.O-O ile Beyaz piyonu geri kazanır ve oyun dengelenir. Motor: +0.07.' },
        { move: '7...c5', text: 'Merkeze hemen saldırır ama 8.Bxc4 e6 9.O-O ile yine piyon geri alınır (+0.07).' },
      ],
    },
    '8w': {
      text: '8.Qc2: vezir c4 piyonuna ikinci kez saldırır.',
      amac: 'Bxc4’ü hazırlamak; vezirle c-hattında baskı kurmak.',
      neden: 'Plan mantıklı görünür ama vezir b3 karesine yakındır ve 8...b3 ile tempo kazanarak sürülebilir. Daha sağlam olan 8.Nbd2’dir: 8...c3 9.bxc3 bxc3 sonrası oyun eşittir (Motor: −0.1). 8.Ne5 de iyi bir seçimdi (+0.06). Maç hamlesi −0.66’ya düşürür.',
      diger: [
        { move: '8.Nbd2', text: '8...c3 9.bxc3 bxc3 10.Nb1 (ya da 10.Nc4) ile Beyaz c3 piyonunu daha sonra toplamaya çalışır. Wikipedia’daki teori yolu. Motor: −0.1.' },
        { move: '8.Ne5', text: 'At c4’e saldırır: 8...e6 9.Bxc4 ile Beyaz piyonu geri alır. Motor: +0.06.' },
        { move: '8.Be2', text: 'Sakin gelişme: 8...e6 9.O-O ile oyun kapalı kalır (−0.35).' },
      ],
    },
    '8b': {
      text: '8...b3!: piyon vezire saldırır.',
      amac: 'Veziri geri göndererek tempo kazanmak ve b3’e kalıcı bir piyon kaması yerleştirmek.',
      neden: 'b3 piyonu a2 ve c2 karelerini kontrol eder, Beyazın b1 atının ve a1 kalesinin rahat oyununu bozar. Beyaz bu piyonu almak için uzun süre zaman harcayacak. 8...e6 9.Bxc4 sonrası oyun eşit olurdu (+0.26). 8...Nbd7 de +0.2’dir. Motor 8...b3’ü açık farkla en iyi buluyor (−0.4).',
      diger: [
        { move: '8...e6', text: '9.Bxc4 Bxc4 10.Qxc4 Nbd7 ile Beyaz piyonu geri kazanır, oyun eşittir. Motor: +0.26.' },
        { move: '8...Nbd7', text: '9.Bxc4 Bxc4 10.Qxc4 e6 ile benzer bir denge (+0.2).' },
      ],
    },
    '9w': {
      text: '9.Qd1: vezir başladığı kareye geri döner.',
      amac: 'Veziri güvenli bir kareye çekmek ve c1 filinin yolunu kapatmamak.',
      neden: 'c2 artık b3 piyonunun kontrolündedir. 9.Qd2 c1 filini kapatır (Motor: −1.1), 9.Qf5 ise 9...e6 10.Qf4 ile vezir zaman kaybeder (−1.4). Beyaz vezirle iki tempo kaybetmiş oldu ama d1 en sağlam kareydi.',
      diger: [
        { move: '9.Qd2', text: 'c1 filinin yolunu kapatır; 9...e6 10.Be2 Qc7 sonrası Siyah rahattır. Motor: −1.09.' },
        { move: '9.Qf5', text: 'Aktif görünür ama 9...e6 10.Qf4 Nbd7 ile vezir hedef olur (−1.44).' },
      ],
    },
    '9b': {
      text: '9...e6: f8 fili için çapraz açılır.',
      amac: 'Gelişmeyi tamamlamak, rok hazırlamak ve ...c5 ile merkeze saldırmaya hazırlanmak.',
      neden: 'Siyah piyon fazlasını korumak için önce taşlarını geliştirmelidir. ...e6 aynı zamanda d5 karesini kontrol eder ve ileride vezir d5’e geldiğinde onu destekler. 9...g6 ya da 9...Nd5 de oynanabilirdi ama motora göre biraz daha zayıftır (−0.05/0.0).',
      diger: [
        { move: '9...g6', text: 'Fil g7’ye gider, uzun çaprazda d4’e baskı yapar. Motor: −0.05.' },
        { move: '9...Nd5', text: 'At b4’e gitmeye hazırlanır, 10.Na3 Nb4 11.Bd2 e6 (0.0).' },
      ],
    },
    '10w': {
      text: '10.Be2: fil e2’ye gelişir.',
      amac: 'Rok yapmak ve c4 piyonunu ileride geri almaya hazırlanmak.',
      neden: '10.Bxc4? mümkün değildir, çünkü a6 fili piyonu korur. Fil e2’den hem rok hazırlar hem de ileride f3’e geçebilir. Keene, Adorjan – Torre (Toluca 1982) oyununda burada 10.Nbd2 oynandığını hatırlattı. Motor 10.Be2’yi en iyi buluyor (−0.36); 10.Nbd2 −1.25’tir.',
      diger: [
        { move: '10.Nbd2', text: 'Adorjan – Torre, Toluca 1982’de oynanan hamle (Keene’nin notu). Motor bunu daha zayıf buluyor: 10...Qd5 11.Be2 Nbd7 ile Siyah rahattır (−1.25).' },
        { move: '10.Ne5', text: '10...c5 11.Na3 cxd4 12.Naxc4 ile oyundakine benzer ama daha erken bir çatışma (−0.53).' },
      ],
    },
    '10b': {
      text: '10...c5: c-piyonu d4’e saldırır.',
      amac: 'Merkezi açmak ve Beyazın d4 piyonunu değişime zorlamak. Siyah kendi taşlarını gelişmiş tutarken merkezde değişim ister.',
      neden: 'Siyah sadece c4’ü savunursa Beyaz zamanla onu kazanır. ...c5 ile Siyah dinamik bir yol seçer: ...cxd4 sonrası d-hattı açılır, a6 fili ve vezir aktifleşir. 10...Bb4+ de mümkündü (−0.22) ama Kasparov merkezi öncelikli gördü.',
      diger: [
        { move: '10...Bb4+', text: '11.Bd2 c5 12.Bxb4 cxb4 ile fil değişir, oyun biraz sakinleşir. Motor: −0.22.' },
        { move: '10...Be7', text: 'Önce rok: 11.Nbd2 c5 12.O-O O-O, oyun eşitlenir (+0.03).' },
      ],
    },
    '11w': {
      text: '11.O-O: Beyaz rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleyi merkeze bağlamak.',
      neden: 'Beyaz gelişmesini tamamlamak ister. 11.Nbd2 biraz daha kesin olabilirdi (−0.21): at hemen c4’e baskı yapar. 11.Na3? ise 11...cxd4 12.Nxc4 dxe3 13.Qxd8+ ile gereksiz değişimlere yol açar (−0.43).',
      diger: [
        { move: '11.Nbd2', text: '11...Nc6 12.Nxc4 cxd4 13.exd4 ile at c4’ü geri alır. Motor: −0.21.' },
        { move: '11.Na3', text: '11...cxd4 12.Nxc4 dxe3 13.Qxd8+ ile vezirler değişir, Siyah rahattır (−0.43).' },
      ],
    },
    '11b': {
      text: '11...Nc6: at c6’dan d4’e baskı yapar.',
      amac: 'd4’e üçüncü baskıyı eklemek ve gelişmeyi sürdürmek.',
      neden: 'At c6’da hem d4’ü hem de e5’i kontrol eder. Bu kare ileride Bf3 ile bağlanma ve Ne5 ile saldırı hedefi olacak, ama Kasparov bu riski hesapladı. 11...Be7 ile önce rok yapmak mümkündü ama daha pasifti (0.0).',
      diger: [
        { move: '11...Be7', text: '12.Nbd2 O-O 13.Bxc4 Bxc4 14.Nxc4 ile Beyaz piyonu geri alır (0.0).' },
        { move: '11...Qc8', text: 'Vezir c-hattında c4’ü korur: 12.Nc3 Nbd7 (−0.24).' },
      ],
    },
    '12w': {
      text: '12.Ne5: at e5’te merkeze yerleşir.',
      amac: 'c4’e ve c6 atına baskı kurmak; ileride Bf3 ile c6’yı bağlamak.',
      neden: 'Aktif görünür ama Siyahın ...cxd4 planına karşı tam bir cevap değildir. Motor 12.Na3’ü tercih ediyor (−0.25): at hemen c4’e yönelir. 12.Ne5 sonrası değerlendirme −0.8’e iner.',
      diger: [
        { move: '12.Na3', text: '12...cxd4 13.Nxc4 Qd5 14.Nd6+ ile Beyaz aktif bir oyun bulur. Motor: −0.25.' },
        { move: '12.Nbd2', text: '12...Na5 13.Ne5 cxd4 14.Ndxc4 ile oyun dengeye yakın kalır (−0.45).' },
      ],
    },
    '12b': {
      text: '12...Rc8: kale c-hattına gelir.',
      amac: 'c6 atını ikinci kez korumak ve c-hattını kontrol etmek.',
      neden: 'Ne5 c6’ya baskı yapıyordu. ...Rc8 ile c6 desteklenir ve ileride açılacak c-hattında kale aktif olur. 12...Qc7 de benzer (−0.74). 12...Qc8 ve 12...Na5 daha zayıftır (−0.16/−0.28).',
      diger: [
        { move: '12...Qc7', text: '13.Bxc4 Bxc4 14.Nxc4 cxd4 ile vezir c-hattında, oyun yine Siyahın biraz lehine (−0.74).' },
        { move: '12...Na5', text: '13.Bd2 cxd4 14.exd4 Qxd4 ile Siyah piyon alır ama atı kenarda kalır (−0.28).' },
      ],
    },
    '13w': {
      text: '13.Na3: at a3’ten c4’e gelir.',
      amac: 'c4 piyonuna ikinci atla da saldırmak ve onu geri almak.',
      neden: 'Beyaz c4’ü bir an önce kazanmak ister. Ama bu hamle Siyaha ...cxd4 ile merkezde değişme zamanı verir. 13.Nxc4 daha kesindi (−0.87): 13...cxd4 14.Nd6+ Bxd6 15.Bxa6 ile Beyaz a6 filini değişir.',
      diger: [
        { move: '13.Nxc4', text: '13...cxd4 14.Nd6+ Bxd6 15.Bxa6 ile Beyaz a6 filini değişir ve f1 kalesi güvene kavuşur. Motor: −0.87.' },
        { move: '13.Bxc4', text: '13...Bxc4 14.Nxc4 cxd4 15.Qxb3 ile b3 piyonu da alınır ama d4 piyonu güçlüdür (−1.09).' },
      ],
    },
    '13b': {
      text: '13...cxd4: Siyah d4’te değişir.',
      amac: 'Merkezi açmak ve d-hattında ileri bir piyon edinmek.',
      neden: 'Beyaz c4’ü geri almak üzeredir. Siyah bu anı değerlendirir: d4’teki yeni piyon e3’e baskı yapar ve ...d3 tehdidini taşır. 13...Qd5? 14.Nxc6 Rxc6 sonrası denge (0.0). 13...Be7 de −0.2’dir. Motor 13...cxd4’ü açık farkla en iyi buluyor (−1.1).',
      diger: [
        { move: '13...Qd5', text: '14.Nxc6 Rxc6 15.Bf3 Ne4 16.Nb5 ile Beyaz eşitliği bulur. Motor: 0.0.' },
        { move: '13...Be7', text: '14.Bxc4 Bxc4 15.Naxc4 cxd4 ile Beyaz piyonu geri alır (−0.2).' },
      ],
    },
    '14w': {
      text: '14.Naxc4: Beyaz c4 piyonunu atla geri alır.',
      amac: 'Malzemeyi eşitlemek ve atı c4’te aktifleştirmek.',
      neden: 'Bu hamle planın devamıdır. 14.Bxc4 Bxc4 15.Nexc4 da benzerdir (−1.26). 14.Nxc6? Rxc6 15.Qxd4 Qxd4 16.exd4 ise kötü bir son oyun getirir (−2.0).',
      diger: [
        { move: '14.Bxc4', text: '14...Bxc4 15.Nexc4 Qd5 16.Qxb3 ile b3 piyonu alınır ama Siyahın taşları aktiftir (−1.26).' },
        { move: '14.Nxc6', text: '14...Rxc6 15.Qxd4 Qxd4 16.exd4 sonrası Beyazın piyon yapısı zayıf, Siyah rahat (−2.03).' },
      ],
    },
    '14b': {
      text: '14...Qd5: vezir d5’e gelir.',
      amac: 'c4 atına ve g2’ye baskı kurmak, d4 piyonunu desteklemek ve c6 atını korumak.',
      neden: 'Vezir merkezde güçlüdür ve birden çok görevi yerine getirir. 14...dxe3? 15.Qxd8+ Kxd8 16.Nxf7+ sonrası Beyaz piyonu geri alır (−0.77). 14...Bxc4 15.Nxc4 Bc5 ise a6 filini değiştirir (−0.65).',
      diger: [
        { move: '14...dxe3', text: '15.Qxd8+ Kxd8 16.Nxf7+ Ke7 ile vezirler gider, Siyahın avantajı küçülür. Motor: −0.77.' },
        { move: '14...Bxc4', text: '15.Nxc4 Bc5 16.Qxb3 O-O: Siyah aktif ama a6 filinin gücü kaybolur (−0.65).' },
      ],
    },
    '15w': {
      text: '15.Bf3: fil d5 vezirine saldırır.',
      amac: 'Veziri d5’ten uzaklaştırıp c6 atını bağlamak; vezir giderse 16.Bxc6+ ile taş kazanmak.',
      neden: 'Beyazın en zorlayıcı hamlesidir. 15.Nd6+? Bxd6 16.Bxa6 Qxe5 sonrası Siyah taş kazanır (−2.1). 15.Nxc6 Rxc6 de Siyaha kolay bir oyun verir (−2.1). Bf3 Siyahı tek hamleye zorlar.',
      diger: [
        { move: '15.Nd6+', text: '15...Bxd6 16.Bxa6 Qxe5 17.f4 ile Beyaz taşı geri alamaz. Motor: −2.09.' },
        { move: '15.Nxc6', text: '15...Rxc6 16.Nd2 dxe3 17.fxe3 ile Beyazın merkezi zayıflar (−2.14).' },
      ],
    },
    '15b': {
      text: '15...Ne4!: at f3–d5 arasına girer.',
      amac: 'Veziri d5’te tutarak c6 atını korumayı sürdürmek ve atı merkeze yerleştirmek.',
      neden: 'Vezir çekilirse c6 atı korumasız kalır ve 16.Bxc6+ gelir: 15...Qd8? 16.Bxc6+ (+4.1), 15...Qc5? 16.Bxc6+ (+2.4). Ne4 hem saldırıyı keser hem de at e4’te d2 ve f2’ye bakar. Motor: −1.1; sonraki en iyi hamle 15...Nxe5 +2.2. Bu oyunun en önemli savunma hamlesidir.',
      diger: [
        { move: '15...Qd8', text: '16.Bxc6+ Rxc6 17.Nxc6 ile Beyaz kale kazanır. Motor: +4.09.' },
        { move: '15...Nxe5', text: '16.Bxd5 Nxc4 17.Bxc4 Bxc4 ile Beyaz vezire karşı iki taş alır. Motor: +2.15.' },
      ],
    },
    '16w': {
      text: '16.Nxc6: Beyaz c6 atını alır.',
      amac: 'c6’daki savunmacıyı değişmek ve Siyahın kalesini c6’ya çekmek.',
      neden: '16.exd4 de aynı değerdedir (−1.2): 16...Nxd4 17.Be3 ile merkez açılır. 16.Bxe4? Qxe4 sonrası Siyahın veziri merkeze yerleşir ve e5 atı tehlikeye girer (−3.1).',
      diger: [
        { move: '16.exd4', text: '16...Nxd4 17.Be3 Nxf3+ 18.Qxf3 ile taşlar değişir, Siyah hafif üstün (−1.21).' },
        { move: '16.Bxe4', text: '16...Qxe4 17.exd4 Nxe5 ile Siyahın veziri çok aktif. Motor: −3.07.' },
      ],
    },
    '16b': {
      text: '16...Rxc6: kale geri alır.',
      amac: 'Malzemeyi eşitlemek ve kaleyi c-hattında aktif tutmak.',
      neden: '16...Qxc6? 17.Ne5 ile vezir yeniden saldırı altına girer ve d4 düşer (−0.05). 16...Bxc4? 17.Nxa7 ile Beyaz piyon kazanır (+0.16). Kale ile almak, vezirin d5’te kalmasını sağlar.',
      diger: [
        { move: '16...Qxc6', text: '17.Ne5 Qd5 18.exd4 ile Beyaz merkezi geri kazanır. Motor: −0.05.' },
        { move: '16...Bxc4', text: '17.Nxa7 Ra8 18.Qxd4 ile Beyaz oyunu dengeler (+0.16).' },
      ],
    },
    '17w': {
      text: '17.Nd2: at d2’den e4 atına saldırır.',
      amac: 'e4 atını değişmek ya da geri püskürtmek; b3 piyonunu ileride Nxb3 ile toplamak.',
      neden: 'Bu hamlenin bedeli vardır: c4 boşalınca a6 filinin çaprazı f1’e kadar açılır. 17.Na5 aynı değerdedir (−1.4) ve çaprazı kapalı tutar. 17.Bxe4? Qxe4 ise Siyahın vezirini merkeze getirir (−2.5). Keene bu noktada Beyazın açılışının “bir felaketler kataloğu” olduğunu, Siyahın daha iyi merkezlenip geliştiğini yazdı.',
      diger: [
        { move: '17.Na5', text: '17...Rc8 18.exd4 Bb4 19.Nxb3 ile b3 piyonu alınır. Motor: −1.42.' },
        { move: '17.Bxe4', text: '17...Qxe4 18.Nd2 Qc2 ile Siyahın veziri Beyazın kampına girer (−2.50).' },
      ],
    },
    '17b': {
      text: '17...f5: f-piyonu e4 atını destekler.',
      amac: 'Atı e4’te tutmak; a6 filinin f1’e saldırısını korumak.',
      neden: 'Atın geri çekilmesi c6 kalesi üzerindeki baskıyı ve merkez kontrolünü kaybettirirdi. 17...Bd3 eşitliğe yol açar (+0.24). 17...dxe3? 18.Nxe4 ile taş kaybettirir (+2.1). f5’in kendine özgü bir zayıflığı vardır (e6 ve e8–h5 çaprazı) ama Kasparov taşların aktifliğini öncelikli gördü. Motor: −1.4.',
      diger: [
        { move: '17...Bd3', text: '18.Bxe4 Bxe4 19.Nxe4 Qxe4 ile taşlar değişir, oyun eşit. Motor: +0.24.' },
        { move: '17...dxe3', text: '18.Nxe4 Qxd1 19.Rxd1 e2 ile Siyah piyonları için taş verir. Motor: +2.12.' },
      ],
    },
    '18w': {
      text: '18.Re1: kale a6 filinin çaprazından çekilir.',
      amac: 'f1’deki kaleyi kurtarmak ve e-hattında e3’ü desteklemek.',
      neden: '18.exd4 Bxf1 19.Nxf1 ile Beyaz kaliteyi verir ama merkezi açar (−1.4). Bu motorun hafifçe tercih ettiği yol. 18.Nxb3? Bxf1 19.Kxf1 d3 ile kalite gider ve d-piyonu ilerler (−2.4). Timman kaliteyi korumayı seçti.',
      diger: [
        { move: '18.exd4', text: '18...Bxf1 19.Nxf1 Be7 20.Ne3 ile Beyaz kalite karşılığı merkez ve piyon alır. Motor: −1.41.' },
        { move: '18.Nxb3', text: '18...Bxf1 19.Kxf1 d3 20.Nd4 ile kalite kaybı kesinleşir (−2.38).' },
      ],
    },
    '18b': {
      text: '18...d3!: serbest piyon d3’e ilerler.',
      amac: 'Piyonu Beyazın kampına sokmak, c2 ve e2 karelerini kontrol etmek ve Beyazın taşlarını savunmaya bağlamak.',
      neden: 'Değişmek (18...dxe3) piyonun gücünü harcar: 19.Rxe3 Bc5 20.Rxe4 ile denge (−0.65). 18...Bb4 de −0.56’dır. d3 piyonu a6 filinin çaprazını geçici olarak kapatır ama piyon daha sonra ilerleyince çapraz yeniden açılacak. Keene: Beyaz b3’ü geri alsa bile serbest d-piyonu “bir canavar”. Motor: −2.0.',
      diger: [
        { move: '18...dxe3', text: '19.Rxe3 Bc5 20.Rxe4 fxe4 ile Siyahın avantajı küçülür. Motor: −0.65.' },
        { move: '18...Bb4', text: '19.exd4 Bd3 20.Nxe4 Bxe4 ile oyun sadeleşir (−0.56).' },
      ],
    },
    '19w': {
      text: '19.Nxb3: Beyaz b3 piyonunu alır.',
      amac: 'Malzemeyi eşitlemek ve atı d4’e getirip d3 piyonunu bloke etmek.',
      neden: '19.Qxb3 de mümkündür ve motor onu biraz daha iyi buluyor (−1.9): 19...Rb6 20.Qxd5 exd5 ile vezirler gider. Atla alış mantıklıdır: at b3’ten d4’e gelip blokaj yapabilir. Ama Siyahın cevabı bu planı hemen engelledi. 19.Bxe4 fxe4 20.Nxb3 ise d3 piyonunu destekleyen bir e4 piyonu yaratır (−2.6).',
      diger: [
        { move: '19.Qxb3', text: '19...Rb6 20.Qxd5 exd5 21.a5 ile vezirler gider. Motor: −1.87.' },
        { move: '19.Bxe4', text: '19...fxe4 20.Nxb3 e5 ile d3 piyonu sağlam bir zincirle desteklenir (−2.62).' },
      ],
    },
    '19b': {
      text: '19...e5: e-piyonu ilerler ve d4 karesini kontrol eder.',
      amac: 'Beyazın Nd4 ile blokaj yapmasını engellemek, d3 piyonunu arkadan desteklemek ve f8 filinin yolunu açmak.',
      neden: 'Serbest piyonu durdurmanın klasik yolu, önüne bir at koymaktır. 19...Rb6? 20.Nd4 ile at tam bu kareye gelir (−1.8). 19...e5 bu kareyi baştan elinden alır. Ayrıca f8 fili c5 ve b4’e açılır. Motor: −2.3.',
      diger: [
        { move: '19...Rb6', text: '20.Nd4 Bd6 21.Bxe4 fxe4 ile at d4’te piyonu bloke eder. Motor: −1.82.' },
        { move: '19...Bb4', text: '20.Bd2 Bxd2 21.Nxd2 Rc2 ile Siyah aktif kalır (−2.17).' },
      ],
    },
    '20w': {
      text: '20.Bd2: fil d2’ye gelişir.',
      amac: 'c1 filini oyuna sokmak, e1 ve c3 karelerini kontrol etmek ve d-piyonunun ilerleyeceği kareyi gözetlemek.',
      neden: 'Ama b2 piyonu korumasız kalır: ...Rb6 ve ...Rxb2 tehdidi doğar. 20.Rb1 b2’yi önceden korur ve motor onu tercih ediyor (−2.2). 20.Bd2 −3.0’a iner.',
      diger: [
        { move: '20.Rb1', text: '20...Rb6 21.Bxe4 fxe4 22.Nd2 ile b2 korunur. Motor: −2.23.' },
        { move: '20.a5', text: '20...Rc2 21.Nd2 Bb4 ile Siyah c-hattında aktif (−2.71).' },
      ],
    },
    '20b': {
      text: '20...Rb6: kale b3 atına ve b-hattına bakar.',
      amac: 'b3 atını bağlamak ve b2 piyonunu hedef almak.',
      neden: 'b2 piyonu korumasızdır, kale b-hattında Beyazın vezir kanadını açar. 20...Rc2 da mümkündü (−1.9) ama Rb6 daha zorlayıcı: b3 atı hem saldırı altında hem de b2’yi korumak zorunda. 20...Bd6 ise çok yavaştır (−1.0).',
      diger: [
        { move: '20...Rc2', text: '21.Na5 Rxb2 22.Rb1 Rxb1 ile kaleler değişir. Motor: −1.91.' },
        { move: '20...Bd6', text: '21.Bc3 O-O 22.Nd2 ile Beyaz konumunu sağlamlaştırır (−1.04).' },
      ],
    },
    '21w': {
      text: '21.Bxe4: Beyaz e4 atını alır.',
      amac: 'Siyahın merkezdeki en güçlü taşını değişmek.',
      neden: 'e4 atı d2, c3 ve f2’ye baskı yapıyordu. Ama 21...fxe4 ile d3 piyonu bir zincirle desteklenecek. 21.Na5 de benzer değerdedir (−3.0). 21.Nc1 Rxb2 ise malzeme kaybettirir (−3.35).',
      diger: [
        { move: '21.Na5', text: '21...Bb4 22.Nb3 Bd6 23.Na5 ile at ileri geri gider. Motor: −3.01.' },
        { move: '21.Nc1', text: '21...Rxb2 22.Nxd3 Bxd3 ile Siyah üstün (−3.35).' },
      ],
    },
    '21b': {
      text: '21...fxe4: f-piyonuyla alınır.',
      amac: 'd3 piyonunu e4 ile desteklemek ve e5–e4–d3 piyon zincirini kurmak.',
      neden: '21...Qxe4? 22.Nd4 sonrası at blokaj karesine gelir ve oyun eşitlenir (0.0). 21...fxe4 ile d3 piyonu artık sadece taşlarla değil piyonla da korunur ve vezir d5’te kalır. Motor: −3.2.',
      diger: [
        { move: '21...Qxe4', text: '22.Nd4 Be7 23.f3 ile at d4’te blokaj yapar. Motor: 0.0.' },
        { move: '21...Qxb3', text: '22.Bxf5 ile Beyaz taşı geri alır ve piyon kazanır (+1.47).' },
      ],
    },
    '22w': {
      text: '22.Nc1: at c1’e çekilir.',
      amac: 'd3 piyonuna saldırmak (Nxd3 tehdidi) ve b6 kalesinin saldırısından kurtulmak.',
      neden: 'At b3’te bağlıydı. 22.Na5 Bb4 sonrası d2 filini değişme tehdidi gelir (−3.5). 22.Rc1 Rxb3 ise bir taş kaybettirir (−3.9). Nc1 en iyi kaynaklı savunmaydı.',
      diger: [
        { move: '22.Na5', text: '22...Bb4 23.Bxb4 Rxb4 24.Nc6 ile Beyaz direnir ama Siyah üstün. Motor: −3.52.' },
        { move: '22.Rc1', text: '22...Rxb3 23.Rc7 h5 24.Qc1 ile Beyaz taş için karşı saldırı arar (−3.85).' },
      ],
    },
    '22b': {
      text: '22...Rxb2: kale b2 piyonunu alır ve d2 filine saldırır.',
      amac: 'Bir piyon kazanmak ve kaleyi Beyazın ikinci yatayına sokmak.',
      neden: 'Kale b2’de hem d2 filine hem de ikinci yataya baskı yapar. 22...Qf7 ve 22...Be7 daha yavaştır (−2.65/−2.53). Rxb2 en direkt yoldur ve d-piyonunu destekleyen bir taş daha ekler.',
      diger: [
        { move: '22...Qf7', text: '23.Na2 Be7 24.Nc3 O-O ile Siyah önce gelişimini tamamlar. Motor: −2.65.' },
        { move: '22...Be7', text: '23.Na2 O-O 24.Nc3 Qf7 ile benzer bir üstünlük (−2.53).' },
      ],
    },
    '23w': {
      text: '23.Bc3: fil c3’ten b2 kalesine ve e5 piyonuna saldırır.',
      amac: 'Kaleyi geri püskürtmek ve e5 piyonunu baskı altına almak.',
      neden: 'Beyazın en iyi şansıdır (−3.4). Keene ise Beyazın bu hamleyle bir nefes alacağını umduğunu, ama Siyahın zorlayıcı bir kazanç yolunun olduğunu yazdı. 23.Na2 Rxa2 ve 23.Nxd3 exd3 daha kötüdür (−3.9/−3.6).',
      diger: [
        { move: '23.Na2', text: '23...Rxa2 24.Rxa2 Qxa2 25.Qh5+ ile Beyaz kısa bir saldırı kurar ama malzeme eksiği büyüktür. Motor: −3.93.' },
        { move: '23.Nxd3', text: '23...exd3 24.e4 Qe6 ile d3 piyonu yine ilerler (−3.62).' },
      ],
    },
    '23b': {
      text: '23...d2!: piyon d2’ye ilerler ve aynı anda e1 kalesine ve c1 atına saldırır.',
      amac: 'Çatal ile malzeme kazanmak; piyonu Beyazın ikinci yatayına getirip bütün Beyaz taşlarını bağlamak.',
      neden: 'Bu hamle d3 karesini boşaltır ve a6–f1 çaprazını yeniden açar. Kale kaçmak zorundadır ama f1 artık filin kontrolündedir. 24.Bxb2 dxe1=Q+ 25.Qxe1 Bb4! sonrası vezir kurtulamaz (Keene’nin varyantı; Motor: −5.7). Keene hamleye ünlem verdi. Motor 23...Rc2’yi de eşdeğer görür (−3.4) ama d2 en net yoldur.',
      diger: [
        { move: '23...Rc2', text: '24.Bd2 Be7 25.Ne2 O-O ile Siyah piyonu daha sonra ilerletir. Motor: −3.41.' },
        { move: '23...Rb7', text: '24.Qg4 Be7 25.Qxg7 ile Beyaz karşı oyun bulur (−2.31).' },
      ],
    },
    '24w': {
      text: '24.Rf1: kale f1’e kaçar.',
      amac: 'Kaleyi e1’den kurtarmak ve d2 piyonunu durdurmaya çalışmak.',
      neden: 'Keene burada “acı gerçek ortaya çıkıyor” dedi. Kale f1’de a6 filinin çaprazındadır, ama diğer seçenekler daha kötüdür: 24.Bxd2 Rxd2 25.Qg4 ile Beyaz bir taş kaybeder (−4.4). 24.Bxb2 dxe1=Q+ 25.Qxe1 Bb4! ile vezir kaçamaz, çünkü kaçarsa Qd1+ mat olur (−5.7). Rf1 en az kötü yoldu (−3.6).',
      diger: [
        { move: '24.Bxd2', text: '24...Rxd2 25.Qg4 Bd6 26.Ne2 O-O ile Siyah bir taş fazlasıyla kazanır. Motor: −4.37.' },
        { move: '24.Bxb2', text: '24...dxe1=Q+ 25.Qxe1 Bb4! ile vezir bağlıdır: Qxb4 Qd1+ mat. Motor: −5.72.' },
      ],
    },
    '24b': {
      text: '24...Bxf1: fil f1 kalesini alır.',
      amac: 'Kaleyi alarak malzemeyi kazanmak, d2 piyonu c1 atını tehdit etmeyi sürdürür.',
      neden: 'Bu basit bir hesap: b2’deki kale de saldırı altındadır, Siyah önce Beyazın kalesini alır. 24...Rb6 ya da 24...Rb7 ile b2 kalesini kurtarmak mümkündür (−3.3), ama Bxf1 en doğrudan yoldur ve f1’den sonra fil c4 ve b3 karelerini kullanacak. Motor: −3.6.',
      diger: [
        { move: '24...Rb6', text: '25.a5 Rc6 26.Qxd2 Qxd2 ile Beyaz d2 piyonunu toplar. Motor: −3.36.' },
        { move: '24...Rb7', text: '25.Qxd2 Qxd2 26.Bxd2 Bxf1 ile vezirler gider ve Siyah kalite fazlasıyla kalır (−3.35).' },
      ],
    },
    '25w': {
      text: '25.Bxb2: Beyaz b2 kalesini alır.',
      amac: 'Kaybettiği kalenin karşılığını almak.',
      neden: 'Tek hamledir. 25.Kxf1? dxc1=Q ile piyon vezir olur (−5.5). 25.Qh5+ g6 26.Qd1 ise zaman kaybıdır (−5.4). Bxb2 ile malzeme dengelendi: iki taraf da birer kale ve iki hafif taşa sahip, ama d2 piyonu tahtada.',
      diger: [
        { move: '25.Kxf1', text: '25...dxc1=Q 26.Rxc1 Qxd1+ 27.Rxd1 Rc2 ile Siyah bir taş fazlasıyla kazanır. Motor: −5.48.' },
        { move: '25.Qh5+', text: '25...g6 26.Qd1 Bb4 ile Siyah zaman kazanır (−5.44).' },
      ],
    },
    '25b': {
      text: '25...Bc4: fil c4’e çekilir.',
      amac: 'Fili güvenli bir kareye getirmek, b3 ve d3 karelerini kontrol etmek ve d2 piyonunu canlı bir tehdit olarak tutmak.',
      neden: 'Hemen 25...dxc1=Q 26.Qxc1 ile piyon değişirse Beyaz rahatlar (−2.7). Piyon d2’de kaldıkça c1 atı ve d1 veziri bağlı kalır: tehdit uygulamasından güçlüdür. Fil c4’ten b3’e gelip vezire saldırmaya hazırdır. Motor: −3.9.',
      diger: [
        { move: '25...dxc1=Q', text: '26.Qxc1 Bc4 27.Qc3 Be7 ile Beyaz konumunu toparlar. Motor: −2.69.' },
        { move: '25...Bb4?', text: 'Doğal gelişme gibi görünür ama f1 fili asılı kalır: 26.Na2! Ba5 27.Qxf1 ile Beyaz taşı alır ve öne geçer. Motor: +1.19.' },
      ],
    },
    '26w': {
      text: '26.Ne2?: at e2’ye gider.',
      amac: 'Atı c3’e getirip d5 vezirine saldırmak ve d1 karesini kontrol etmek.',
      neden: 'Ama at c1’den ayrılınca b3 karesinin denetimi kaybolur ve 26...Bb3! gelir. d1’deki vezir artık bağlıdır: vezir d1’den kaçarsa piyon d1’e yükselir. 26.h3 ile şaha nefes karesi açmak (−3.9) ya da 26.Bc3 ile dxc1 değişimini zorlamak (−4.2) çok daha dayanıklıydı. Motor: −5.0.',
      diger: [
        { move: '26.h3', text: '26...Bb4 27.Ba3 Bxa3 28.Rxa3 ile Beyaz direnir. Motor: −3.89.' },
        { move: '26.Bc3', text: '26...dxc1=Q 27.Qxc1 Bd6 28.h3 O-O ile piyon tahtadan gider ama Siyah yine üstün (−4.17).' },
        { move: '26.h4', text: '26...Be7 27.Ba3 Bxa3 28.Rxa3 ile benzer bir direnç (−4.13).' },
      ],
    },
    '26b': {
      text: '26...Bb3!: fil d1 vezirine saldırır.',
      amac: 'Veziri değişime zorlamak; vezirler gidince d2 piyonu daha da güçlenir.',
      neden: 'Vezir kaçamaz: 27.Qf1 d1=R, 27.Qb1 d1=Q+ ile Siyah fazla malzeme kazanır. Bu yüzden Beyaz vezirini vermek zorundadır. 26...Qd3 ve 26...h5 daha yavaştır (−3.2/−3.1). Motor: −4.9.',
      diger: [
        { move: '26...Qd3', text: '27.Nc3 h5 28.Nb1 ile Beyaz bir an rahatlar. Motor: −3.19.' },
        { move: '26...h5', text: '27.Nc3 Qd3 28.Nxe4 ile Beyaz bir piyon toplar (−3.13).' },
      ],
    },
    '27w': {
      text: '27.Nc3: at c3’ten d5 vezirine saldırır.',
      amac: 'Vezir karşılığında vezir almak.',
      neden: 'Zorunlu hamledir. 27.Qf1 d1=R 28.Rxd1 Qxd1 ile Beyaz kale kaybeder (−5.7). 27.Qb1 d1=Q+ daha da kötüdür (−6.5). Nc3 en az kayıplı yoldur.',
      diger: [
        { move: '27.Qf1', text: '27...d1=R 28.Rxd1 Qxd1 29.Qxd1 Bxd1 ile Siyah bir taş fazlasıyla kalır. Motor: −5.66.' },
        { move: '27.Qb1', text: '27...d1=Q+ 28.Qxd1 Bxd1 29.Nc3 Qd2 ile Siyah iki taş fazlasıyla kalır (−6.54).' },
      ],
    },
    '27b': {
      text: '27...Bxd1: Siyah veziri alır.',
      amac: 'Vezirleri değiştirmek ve d2 piyonunun önündeki en güçlü engeli kaldırmak.',
      neden: 'Vezir d5’te saldırı altındadır. 27...Qc4 ya da 27...Qb7 ile vezir kaçarsa 28.Qxd2 ile Beyaz piyonu toplar ve oyun eşitlenir (+0.6/+1.1). Bxd1 tek doğru hamledir. Motor: −4.8.',
      diger: [
        { move: '27...Qc4', text: '28.Qxd2 Bb4 29.Qe2 ile Beyaz piyonu alır ve oyun dengelenir. Motor: +0.57.' },
      ],
    },
    '28w': {
      text: '28.Nxd5: Beyaz da veziri alır.',
      amac: 'Malzemeyi eşitlemek.',
      neden: 'Zorunlu geri alıştır. 28.Nxd1? Qb3 ya da 28.Rxd1? Qd3 ile Siyah vezirini korur ve bir vezir fazlasıyla kalır (−6.3/−6.7).',
      diger: [
        { move: '28.Nxd1', text: '28...Qb3 29.Bc3 Qc2 30.Bxd2 ile Siyah vezir fazlasıyla kazanır. Motor: −6.28.' },
      ],
    },
    '28b': {
      text: '28...Bb3: fil b3’e döner.',
      amac: 'd1 karesini kontrol etmek ve d2 piyonunun yükselişini desteklemek.',
      neden: 'Fil b3’ten d1’i gözetler: Beyaz d1’e taş koyarsa fil onu alabilir. 28...Bc2 de eşdeğerdir (−4.9). 28...Bh5 ise d1’den uzaklaşır (−4.55). Siyahın planı d1 karesini hep kontrol altında tutmaktır. Motor: −4.8.',
      diger: [
        { move: '28...Bc2', text: '29.Nc3 Bb4 30.Nd1 O-O ile oyundakiyle aynı yapı. Motor: −4.92.' },
        { move: '28...Bh5', text: '29.Nc3 Bb4 30.Nd5 ile Beyazın atı daha aktif kalır (−4.55).' },
      ],
    },
    '29w': {
      text: '29.Nc3: at c3’e döner ve d1 karesine bakar.',
      amac: 'd1 karesini kontrol ederek piyonun yükselişini engellemek.',
      neden: 'd5’teki at Siyahın taşlarının hedefidir ve d1’i korumaz. 29.Bxe5? d1=Q+ 30.Rxd1 Bxd1 ile bir taş gider (−5.3). 29.a5 d1=R+ benzer şekilde kaybettirir (−5.4).',
      diger: [
        { move: '29.Bxe5', text: '29...d1=Q+ 30.Rxd1 Bxd1 31.Nc3 ile Siyah bir fil fazlasıyla kalır. Motor: −5.33.' },
        { move: '29.a5', text: '29...d1=R+ 30.Rxd1 Bxd1 31.Nc7+ ile Beyaz bir şah çeker ama taşı kurtaramaz (−5.36).' },
      ],
    },
    '29b': {
      text: '29...Bb4: fil b4’ten c3 atına saldırır.',
      amac: 'd1’i koruyan atı uzaklaştırmak; ...Bxc3 ile savunmacıyı değiştirmek.',
      neden: 'c3 atı d1’in tek koruyucusudur. Bb4 bu atı bağlar ve Beyazı yeni bir karar almaya zorlar. 29...Kf7 ya da 29...Kd7 de iyidir (−4.65/−4.38) ama Bb4 gelişmeyi tamamlar ve rok yolunu açar. Motor: −5.0.',
      diger: [
        { move: '29...Kf7', text: '30.Bc1 dxc1=R+ 31.Rxc1 Be7 ile Siyah bir taş fazlasıyla kalır. Motor: −4.65.' },
        { move: '29...Kd7', text: '30.Bc1 d1=R+ 31.Nxd1 Bxd1 ile Siyah yine üstün (−4.38).' },
      ],
    },
    '30w': {
      text: '30.Nd1: at d1’e gelir ve piyonun önünü keser.',
      amac: 'Piyonun yükselme karesini doğrudan bloke etmek.',
      neden: 'At d1’de piyonu durdurur ama tamamen pasif kalır ve b3 filinin hedefidir. 30.Nxe4? d1=R+ 31.Rxd1 Bxd1 ile bir taş gider (−5.2). 30.Kh1 de bir şey değiştirmez (−5.4).',
      diger: [
        { move: '30.Nxe4', text: '30...d1=R+ 31.Rxd1 Bxd1 32.a5 ile Siyah bir taş fazlasıyla kalır. Motor: −5.21.' },
        { move: '30.Kh1', text: '30...O-O 31.Nd1 a5 ile oyundakine benzer bir konum (−5.40).' },
      ],
    },
    '30b': {
      text: '30...O-O: Siyah rok yapar. Timman terk etti.',
      amac: 'Şahı güvene almak ve kaleyi f-hattından ya da c-hattından oyuna sokmak.',
      neden: 'Keene bunu “şaşırtıcı bir geç rok örneği” olarak andı. Siyahın kalesi ...Rc8–c1 ya da ...Rf8–f1 ile Beyazın birinci yatayına girecek. Beyazın taşları d1’e bağlıdır. 31.Bxe5 Rc8 32.Bb2 Bxd1 33.Rxd1 Rc2 sonrası Siyah b2 filini toplar (Motor: −6.1). Keene de Beyazın çaresiz olduğunu ve Siyahın en az bir taş kazanacağını yazdı. Motor: −5.0.',
      diger: [
        { move: '30...Ke7', text: '31.f4 Rc8 32.Kf2 Ke6 ile şah merkezde aktif. Motor: −4.86.' },
        { move: '30...Kd7', text: '31.f4 Rc8 32.fxe5 Ke6 ile benzer bir kazanma yolu (−4.86).' },
      ],
    },
  },
  qa: [
    { q: 'Beyazın sorunları açılışta nerede başladı?', a: '5.e3 ile. Bu hamle ...b5’e izin verdi ve Siyah c4 piyonunu tuttu. Ana yol 5.a4 (Motor: +0.2) bu fikri baştan önler. Keene de 5.e3’ün piyonu geri kazanmayı zorlaştırdığını ve 5.a4’ün tercih edilmesi gerektiğini yazdı. 8.Qc2 ise sorunu büyüttü, çünkü 8...b3 ile vezir tempo kaybetti.' },
    { q: 'Siyah neden 8...b3 oynadı, 8...e6 değil?', a: '8...e6 9.Bxc4 sonrası Beyaz piyonu geri alır ve oyun eşitlenir (+0.26). 8...b3 ise veziri vurur ve c2 karesini kontrol eder. Vezir d1’e dönerken Siyah bir tempo kazanır ve b3’e uzun süre Beyazı rahatsız edecek bir piyon yerleştirir. Motor bu hamleyi −0.4 ile en iyi buluyor.' },
    { q: '15...Ne4 neden tek hamleydi?', a: 'Bf3 fili d5 vezirine saldırıyordu ve c6 atı aynı çaprazda e8 şahıyla diziliydi. Vezir çekilirse 16.Bxc6+ gelir: 15...Qd8? 16.Bxc6+ +4.1, 15...Qc5? 16.Bxc6+ +2.4. Ne4 araya girer, vezir yerinde kalır ve c6’yı korumayı sürdürür. Sonraki en iyi hamle 15...Nxe5 bile +2.2’dir.' },
    { q: 'Siyah neden 18...dxe3 ile değişmedi?', a: '18...dxe3 19.Rxe3 Bc5 20.Rxe4 ile oyun dengeye yakın kalırdı (−0.65). 18...d3 ise piyonu Beyazın kampına sokar ve Beyaz taşlarını savunmaya bağlar (−2.0). Serbest bir piyon, rakibin taşlarını bağladığı sürece değişmekten çok daha değerlidir.' },
    { q: '19...e5 hamlesinin amacı neydi?', a: 'Beyaz b3 atını d4’e getirip piyonu bloke etmek istiyordu. 19...e5 d4 karesini kontrol eder ve blokajı önler. Ayrıca e-piyonu d3’ü arkadan destekler ve f8 filinin önünü açar. 19...Rb6 20.Nd4 ile at bu kareye gelirdi (−1.8).' },
    { q: '23...d2 sonrası Beyaz neden kaliteyi kurtaramadı?', a: 'Piyon hem e1 kalesine hem de c1 atına saldırıyordu. 24.Bxb2 dxe1=Q+ 25.Qxe1 Bb4! ile vezir kaybedilir, çünkü Qxb4 Qd1+ mattır (−5.7). 24.Bxd2 Rxd2 ise bir taş kaybettirir (−4.4). 24.Rf1 tek savunmaydı ama d3 boşaldığı için a6 fili f1’e kadar görüyordu ve kale gitti.' },
    { q: 'Siyah neden 25...dxc1=Q ile hemen vezir çıkarmadı?', a: 'Hemen değişim (25...dxc1=Q 26.Qxc1) Beyazı rahatlatırdı (−2.7). Piyon d2’de kaldıkça c1 atı ve d1 veziri bağlı kalır. 25...Bc4 ile Siyah tehdidi canlı tuttu ve b3 karesine göz dikti (−3.9). Bu “tehdit uygulamasından güçlüdür” ilkesinin güzel bir örneği.' },
    { q: 'Beyaz nerede direnebilirdi?', a: '26. hamlede. 26.Ne2? b3 karesinin denetimini bıraktı ve 26...Bb3! ile vezirler değişti (−5.0). 26.h3 (−3.9) ya da 26.Bc3 dxc1=Q 27.Qxc1 (−4.2) ile Beyaz kötü ama hâlâ savaşılabilir bir oyun tutardı. Daha önce 13.Nxc4 (−0.87) ve 20.Rb1 (−2.2) de daha dayanıklı yollardı.' },
    { q: 'Neden 30...O-O sonrası Timman terk etti?', a: 'Siyahın kalesi f8’den ya da c8’den birinci yataya girecek. Beyazın atı d1’de bağlı, fili b2’de saldırı altında. 31.Bxe5 Rc8 32.Bb2 Bxd1 33.Rxd1 Rc2 ile Siyah b2 filini toplar (Motor: −6.1). d2 piyonu yüzünden Beyaz taşlarının hiçbiri serbest değil.' },
  ],
  sources: [
    { title: 'The Spectator (Raymond Keene), 3 Ekim 1998: Timman – Kasparov notları', url: 'https://archive.spectator.co.uk/article/3rd-october-1998/68/chess' },
    { title: 'The Week in Chess 201: Kasparov – Timman, EuroTel Trophy Prag 1998', url: 'https://theweekinchess.com/html/twic201.html' },
    { title: 'Quah Seng Sun, 18 Eylül 1998: The grand match is off (maç ve oyun skorları)', url: 'https://quahsengsun4chess.blogspot.com/1998/09/the-grand-match-is-off.html' },
    { title: 'Wikipedia: Slav Defense (5.e3 Alekhine Varyantı, 7.Nb1 Ba6 yolu)', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  exercises: [
    { id: 'tks-1', kind: 'tekrar', plan: false, title: 'Vezir saldırı altında',
      source: 'Timman – Kasparov, Prag 1998 (15. hamle)',
      fen: '2r1kb1r/p4ppp/b1n1pn2/3qN3/P1Np4/1p2PB2/1P3PPP/R1BQ1RK1 b k - 2 15',
      prompt: 'Beyazın f3 fili d5 vezirine saldırıyor. c6 atı e5 atının saldırısı altında ve e8 şahıyla aynı çaprazda. Siyah ne yapmalı?',
      hint: 'Veziri çekmek yerine fil ile vezir arasına bir taş koyabilir misiniz?',
      line: ['Ne4'],
      explanation: '**15...Ne4!** At araya girer; vezir d5’te kalır ve c6 atını korumayı sürdürür. Vezir çekilirse 16.Bxc6+ kazanır. Motor: ...Ne4 −1.3, sonraki en iyi 15...Nxe5 +2.2.',
      link: 'Siyah merkezi taşlarla tutar; e4 atı daha sonra ...f5 ile desteklenecek.' },
    { id: 'tks-2', kind: 'tekrar', plan: false, title: 'Serbest piyon ilerliyor',
      source: 'Timman – Kasparov, Prag 1998 (18. hamle)',
      fen: '4kb1r/p5pp/b1r1p3/3q1p2/P2pn3/1p2PB2/1P1N1PPP/R1BQR1K1 b k - 1 18',
      prompt: 'Siyahın d4’te ileri bir piyonu, e4’te güçlü bir atı ve b3’te bir kaması var. Beyaz e3 ile d4’e baskı yapıyor. Siyahın en güçlü devamı nedir?',
      hint: 'd4 piyonu değişmek yerine daha da ileri gidebilir.',
      line: ['d3'],
      explanation: '**18...d3!** Piyon serbest kalır ve Beyazın kampına girer; Beyazın taşları onu durdurmakla uğraşacak. Motor: ...d3 −1.9, sonraki en iyi 18...dxe3 −0.7.',
      link: 'Bu piyon sonra d2’ye ilerleyip kale ile atı çatallayacak.' },
    { id: 'tks-3', kind: 'transfer', plan: false, title: 'd2 piyonu ve vezir',
      source: 'Miles – Kasparov, Basel maçı 1986 (21. hamle)',
      fen: '3q1b1r/5pp1/p3pk1p/4n3/4B2P/3p4/PP3PP1/2RQR1K1 b - - 0 21',
      prompt: 'Siyahın d3’te serbest bir piyonu var. Beyazın kaleleri c1 ve e1’de. Siyah piyonunu nasıl kullanır?',
      hint: 'Piyon bir kare daha ilerlerse iki kaleye saldırır.',
      line: ['d2', 'Rf1', 'Qd4'],
      explanation: '**21...d2!** Piyon c1 ve e1 kalelerine saldırır. 22.Rf1 sonrası **22...Qd4!** ile vezir e4 filine saldırır ve d2 piyonunu destekler. Motor: ...d2 −2.6, sonraki en iyi +0.9; 22...Qd4 −2.4, sonraki en iyi +1.0.',
      link: 'Timman – Kasparov’da da d2 piyonu kale ile atı çatalladı; burada iki kaleye saldırıyor.' },
    { id: 'tks-4', kind: 'transfer', plan: false, title: 'Serbest piyonu sürmek',
      source: 'Lautier – Karpov, Dos Hermanas 1995 (21. hamle)',
      fen: '2r1r1k1/p2q1ppp/Q4n2/1N6/1bNp4/6P1/PP3P1P/2RR2K1 b - - 6 21',
      prompt: 'Siyahın d4’te serbest bir piyonu var. Beyazın atları b5 ve c4’te, kaleleri c1 ve d1’de. Siyah için en güçlü devam hangisi?',
      hint: 'Piyonun önündeki kare boş ve bir kez ilerledikten sonra c-hattındaki değişimler onu daha da güçlendirir.',
      line: ['d3', 'Ne3', 'Rxc1'],
      explanation: '**21...d3!** Piyon ilerler; 22.Ne3 sonrası **22...Rxc1 23.Rxc1 d2** ile piyon d2’ye ulaşır. Motor: ...d3 −3.7, sonraki en iyi 21...Ne4 −1.6; 22...Rxc1 −4.6, sonraki en iyi −2.3.',
      link: 'Kasparov gibi Karpov da d-piyonunu Beyazın ikinci yatayına kadar sürdü ve taşlarla destekledi.' },
  ],
};
