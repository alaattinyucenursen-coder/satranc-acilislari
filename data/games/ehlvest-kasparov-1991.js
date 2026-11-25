// Ehlvest – Kasparov, Linares turnuvası, Linares 1991 (10. tur). Kaynak: PgnMentor (Kasparov.pgn).
export default {
  id: 'ehlvest-kasparov-1991',
  theme: 'Çifte c-piyonları, uzun rok ve h-piyonu hücumu',
  white: 'Jaan Ehlvest', black: 'Garri Kasparov',
  whiteShort: 'Ehlvest', blackShort: 'Kasparov',
  event: 'Linares turnuvası', site: 'Linares', year: 1991, eco: 'B41',
  variation: 'Sicilya Savunması, Kan varyantı, 5.c4 (Maroczy kuruluşu)', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 Nf6 6. Nc3 Qc7 7. Bd3 Be7 8. f4 d6 9. Qe2 Nc6 10. Nf3 Nd7 11. a3 Bf6 12. Be3 Bxc3+ 13. bxc3 e5 14. f5 Ncb8 15. O-O Nc5 16. Bc2 Nbd7 17. Rfd1 Nf6 18. Nd2 Bd7 19. Bg5 Bc6 20. Qf3 O-O-O 21. Re1 h6 22. Bh4 Rdg8 23. Kh1 Nfd7 24. Nf1 g5 25. Bf2 h5 26. Qd1 h4 27. Qb1 Nf6 28. Bxc5 dxc5 29. Ne3 Qa5 30. Qb2 h3 31. g3 Nxe4 32. Bxe4 Bxe4+ 33. Kg1 Rd8 34. Ng4 Bxf5 35. Nxe5 Qc7 36. Qf2 Be6 37. Rab1 Rd6 38. Rb2 Rhd8 39. Rbe2 f6 40. Ng6 Bxc4 0-1`,

  summary: 'Linares 1991’in 10. turunda Kasparov, Kan varyantında Ehlvest’in c4-e4-f4 piyonlarıyla kurduğu geniş merkeze karşı **kara kareler** üzerine bir plan kurdu. 12.Be3’ün küçük gevşekliğini 12...Bxc3+! ile cezalandırdı: kara kareli filini c3 atıyla değişip Beyaza a3, c3 ve c4’te kopuk, çifte piyonlar bıraktı. 13...e5 ile merkezi kapattı; Beyazın b- ve d-piyonu olmadığı için c5 karesi Siyah atlarının kalıcı üssü oldu. Beyaz 14.f5 ile şah kanadında yer kazanınca Kasparov şahını **uzun rokla** vezir kanadına götürdü ve g- ile h-piyonlarını (...g5, ...h5-h4-h3) Beyaz şahının üstüne sürdü. Beyazın 23.Kh1’i şahı c6 filinin a8-h1 çaprazına soktu; sekiz hamle sonra 30...h3! 31.g3 Nxe4! 32.Bxe4 Bxe4+ kombinasyonu bu çaprazda işledi ve Siyah piyon kazandı. Ardından f5 piyonu da düştü, Siyahın kaleleri açık d-hattını aldı ve oyunun başından beri hedef olan c4 piyonu 40...Bxc4 ile alınınca Ehlvest terk etti.',
  intro: '4...a6 ile Siyah Kan (Paulsen) varyantını seçer: b5 karesini Beyaz atlarından korur, ileride ...b5 ile vezir kanadında yer açmayı hazırlar ve taşlarının yerine Beyazın kuruluşunu gördükten sonra karar verir. 5.c4 bu esnekliğe karşı en ciddi cevaplardan biridir: e4 ve c4 piyonlarıyla d5 karesini kilitleyen **Maroczy kuruluşu**. Bu yapıda Siyah genellikle ...d6, ...Qc7 ve ...b6 ile “kirpi” düzeninde bekler ve ...b5 ya da ...d5 kırılmalarını kollar. Kasparov ise farklı bir yol seçti: Beyazın c3 atını kara kareli filiyle değişip vezir kanadındaki piyonlarını bozdu, sonra ...e5 ile merkezi kapatıp oyunu at–fil karşılaştırmasına ve şah kanadı piyon hücumuna çevirdi. Turnuvayı Ivanchuk 9½/13 ile kazandı, Kasparov 9 puanla ikinci oldu; Ehlvest ise 3½ puanla 13. sırada kaldı.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'c4 ve e4 piyonlarıyla d5 karesini tutmak (Maroczy kuruluşu), Siyahı pasif bir kirpi yapısına mahkûm etmek.',
      '8.f4 ile merkezde e5 ilerleyişini ya da f5 ile şah kanadında yer kazanmayı hazırlamak; 14.f5 ile c8 filinin f5-h3 çaprazını kapatıp e6 ve g6’yı kontrol etmek.',
      'Çifte c-piyonları ortaya çıktıktan sonra fil çiftini kullanmak: Bg5-h4 ile f6 atını bağlamak, Bc2-a4 ile beyaz kareleri işlemek.',
      'Atı Nd2-f1-e3 üzerinden d5 karesine getirmek: Siyahın d-piyonu d6’da kaldıkça d5 Beyazın en iyi karesidir.',
      'a3-a4-a5 ile vezir kanadında yer kazanıp b-hattını açmak ve uzun rok yapmış Siyah şahına karşı oyun kurmak. Beyaz bunu geç ve yavaş yaptı; 23.Kh1 gibi hamlelerle zaman kaybetti.',
      'Siyahın g- ve h-piyonları ilerlerken şah kanadını kapalı tutmak (fxg6 değişimini zamanında yapmak, g3 karesini korumak). Beyaz 31.g3 ile h1-a8 çaprazında zayıflık yarattı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**12...Bxc3+** ile Beyaza a3, c3 ve c4’te kopuk piyonlar bırakmak. c4 piyonu bir daha piyonla korunamaz ve oyunun son hamlesinde düşer.',
      '**13...e5** ile merkezi kapatmak: Beyazın e3 fili kendi piyonlarının arkasında kalır, c5 karesi ise b- ve d-piyonu olmayan Beyazın asla piyonla kovalayamayacağı bir at üssü olur.',
      'Atları c5 ve f6’ya yerleştirmek (…Ncb8-d7, …Nc5, …Nf6): c5’teki at d3 ve e4’e, f6’daki at e4 ve d5’e baskı yapar.',
      'Fili d7-c6’ya getirip a8-h1 uzun çaprazından e4 piyonuna ve h1’deki Beyaz şahına bakmak.',
      '**Uzun rok** yapıp g- ve h-piyonlarıyla (…h6, …g5, …h5-h4-h3) Beyaz şahına hücum etmek: şahlar farklı kanatlarda olduğu için bu piyonlar Siyah şahını korumak zorunda değildir.',
      'Taktik an gelince e4’ü almak (31...Nxe4!) ve kazanılan materyal ile açık d-hattını kalelerle almak; sonunda zayıf c4 piyonunu toplamak.',
    ] },
  },
  critical: [
    { move: '12w', title: '12.Be3?! fil yanlış kareye', text: 'Beyaz fili e3’e koyar ve c3 atını korumasız bırakır: artık ...Bxc3+ geldiğinde fil c3’te geri alamaz, b-piyonuyla almak zorunda kalır. Motor 12.Bd2’yi öneriyordu (+0.4): o zaman ...Bxc3 Bxc3 ile piyon yapısı sağlam kalırdı. Maç hamlesinden sonra değerlendirme −0.3’e döner; Beyazın açılış avantajı tek hamlede kaybolur.' },
    { move: '12b', title: '12...Bxc3+! kara kareli fil yerine kalıcı zayıflıklar', text: 'Kasparov genellikle değerli sayılan kara kareli filini verir. Karşılığında Beyaz a3–c3–c4’te kopuk piyonlarla kalır; özellikle c4 bir daha piyonla korunamaz. Motor bu hamleyi tek iyi devam olarak görür: Bxc3+ −0.4, sonraki en iyi 12...Na5 ve 12...Nc5 yaklaşık +0.6. Fark bir piyondan fazladır.' },
    { move: '13b', title: '13...e5: merkezi kapatmak ve c5 üssü', text: 'Siyah f4 piyonunu merkezden ayırır. 14.fxe5 Nxe5 sonrası e5 karesi Siyahın olur; 14.f5 sonrası ise merkez kapanır ve Beyazın e3 fili kendi piyonlarının arkasına gömülür. En önemlisi: Beyazın b- ve d-piyonu olmadığı için c5’e gelen bir Siyah atı hiçbir zaman piyonla kovalanamaz. Motor: −0.3, en iyi hamle.' },
    { move: '20b', title: '20...O-O-O: şahlar karşı kanatlarda', text: 'Beyaz f5 ile şah kanadında yer kazandığı ve fil çifti oradan baskı kurduğu için Siyah şahını c8’e götürür. Böylece g- ve h-piyonları savunmadan kurtulur ve Beyaz şahına karşı bir hücum ordusuna dönüşür. Beyazın vezir kanadında karşı hücum için açık b-hattı ve a-piyonu var, ama c3–c4 piyonları kendi taşlarının önünü kesiyor. Motor: −0.5, en iyi hamle.' },
    { move: '23w', title: '23.Kh1? şah uzun çaprazda', text: 'Beyaz şahı h1’e çeker; şah hem g-hattındaki Siyah kalesinin baskısından uzaklaşmak ister hem de g1 karesini taşlara bırakmak ister. Ama artık c6 filinin a8-h1 çaprazındadır. Motor 23.Bxf6 gxf6 ya da 23.Rad1’i öneriyordu (yaklaşık −0.5); maç hamlesi −1.2. Bu ayrıntı sekiz hamle sonra 31...Nxe4 kombinasyonunu mümkün kılar: fil şah çekerek geri alacaktır.' },
    { move: '28w', title: '28.Bxc5: güçlü atı değişmek, d-hattını açmak', text: 'Beyaz c5’teki atı nihayet fille alır. Bu değişim Beyazın son kara kareli taşını verir ve 28...dxc5 sonrası d-hattı Siyahın kalelerine açılır; d5 karesi Beyaz atına kalsa da Siyahın c6 fili onu değişmeye hazırdır. Motor 28.a4’ü hafifçe tercih ediyor (−1.1’e karşı −1.3), ama Beyazın durumu zaten zordu.' },
    { move: '30b', title: '30...h3! çaprazı ele geçiren piyon', text: 'h-piyonu h3’e gelir ve ...hxg2+ ile tehdit eder. 31.g3 sonrası h3 piyonu g2 karesini kontrol eder: Beyaz artık h1-a8 çaprazına Ng2 ya da Qg2 ile taş koyamaz. Acele edilen 30...Nxe4 31.Bxe4 Bxe4 ise şahsız olur ve 32.Nd5! ile Beyaz direnir (Motor: −0.8). Motor: 30...h3 −2.0, açık ara en iyi.' },
    { move: '31b', title: '31...Nxe4! uzun çaprazda taktik', text: '31...Nxe4 32.Bxe4 Bxe4+ ile fil şah çekerek geri alır ve Siyah sağlam bir piyon kazanır. 33.Ng2? Bxg2+ (−5.8) ve 33.Qg2?? hxg2+ (−10) kaybeder; tek hamle 33.Kg1’dir. Beyazın 32.Kg1 ile atı almaması da 32...Nd2 sonrası daha kötüdür (−2.6). Motor: Nxe4 −2.1, sonraki en iyi 31...Rd8 −0.6.' },
    { move: '40b', title: '40...Bxc4: oyunun başındaki zayıflık düşüyor', text: '12...Bxc3+ ile yaratılan çifte piyonlardan c4 de düşer ve fil aynı anda e2 kalesine saldırır. Siyah iki piyon öndedir, kaleleri d-hattına hâkimdir ve h3 piyonu Beyaz şahını sıkıştırır. Motor: Bxc4 −4.4, sonraki en iyi 40...Bg4 −2.9. Ehlvest terk etti.' },
  ],
  lessons: [
    'Maroczy yapısında Beyazın c3 atı, c4 ve e4 piyonlarının en önemli koruyucusudur. Siyah ...Bxc3+ ile bu atı alıp piyon yapısını bozabiliyorsa, kara kareli filini vermesi çoğu zaman değer: kopuk c-piyonları uzun vadeli hedeftir.',
    'Fili hangi kareye koyduğunuz rakibin değişim imkânlarını belirler: 12.Bd2 olsaydı ...Bxc3 Bxc3 ile yapı sağlam kalırdı; 12.Be3 bxc3 zorunluluğunu doğurdu.',
    '...e5 ile merkezi kapatmak, b- ve d-piyonu olmayan rakibe karşı c5 karesini atlar için kalıcı bir üs yapar. Piyonla kovalanamayan bir at, fil kadar değerli olabilir.',
    'Şahlar farklı kanatlara rok yapınca piyonlarla hücum en doğal plandır: …h6, …g5, …h5-h4-h3. Bu piyonlar kendi şahınızı korumak zorunda değildir.',
    'Piyon hücumu her zaman mat getirmez; çoğu zaman rakip şahın önündeki kareleri zayıflatır. 30...h3 31.g3 sonrası g2 karesi Siyahın kontrolüne geçti ve uzun çapraz savunmasız kaldı.',
    'Uzun çaprazda duran şah (h1) ve aynı çapraza bakan fil: …Nxe4 gibi bir alım, “fil şah çekerek geri alır” taktiğiyle desteklenebilir. Şahınızı rakip filin çaprazına sokmadan önce iki kez düşünün.',
    'Kazandığınız piyonu sadeleştirerek değil, zayıflıklara baskıyla büyütün: Kasparov piyon kazandıktan sonra d-hattını aldı, f-piyonunu topladı ve sonunda c4’ü aldı.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 0-1: Garri Kasparov (Siyah) kazandı. 40...Bxc4 ile Beyazın zayıf c4 piyonu düştü ve fil e2 kalesine saldırdı; Siyah iki piyon öndeydi, kaleleri d-hattına hâkimdi ve h3 piyonu Beyaz şahını sıkıştırıyordu (Motor: −4.4). Ehlvest bu noktada terk etti. 365Chess’in turnuva kaydına göre oyun 10. turda oynandı.' },
    { q: 'Kasparov neden 12...Bxc3+ ile değerli kara kareli filini verdi?', a: 'Çünkü 12.Be3 sonrası Beyaz c3’te fille geri alamıyordu ve 13.bxc3 zorunluydu. Bu Beyaza a3, c3 ve c4’te kopuk piyonlar bıraktı; c4 bir daha piyonla korunamaz. Ayrıca Siyah hemen 13...e5 ile kara kareleri piyonlarıyla tuttuğu için filin yokluğu hissedilmedi. Motor bu değişimi açık ara en iyi buluyor: −0.4’e karşı 12...Na5 ile +0.6.' },
    { q: 'Beyaz 12. hamlede ne yapmalıydı?', a: 'Motor 12.Bd2’yi öneriyor (+0.4). O zaman ...Bxc3 gelirse 13.Bxc3 ile fil geri alır ve piyon yapısı bozulmaz; Beyaz Maroczy kuruluşunun alan avantajını korur. 12.Be3 hem fili kendi f4 ve e4 piyonlarının önünde etkisiz bir kareye koydu hem de c3 atını sadece b-piyonuyla korunur halde bıraktı.' },
    { q: 'Siyah neden kısa değil uzun rok yaptı?', a: '14.f5 sonrası Beyaz şah kanadında yer kazanmıştı; Bg5, Qf3 ve ileride g4-g5 gibi fikirlerle kısa rok yapmış bir Siyah şahı hedef olurdu. Vezir kanadında ise Beyazın piyonları c3–c4’te sabit ve zayıftı, b-hattı açık olsa da Beyaz taşları orada hızlı bir hücum kuramıyordu. Uzun rok ayrıca g- ve h-piyonlarını serbest bıraktı: 24...g5 ve 25...h5 ile hücum ancak bu sayede mümkün oldu.' },
    { q: '23.Kh1 neden hata sayılıyor?', a: 'Kendi başına bir şey kaybettirmez, ama şahı c6 filinin a8-h1 çaprazına sokar. O çaprazda Beyazın e4 piyonu ve c2 fili dışında engel yoktu; 31...Nxe4 32.Bxe4 Bxe4+ kombinasyonu fil şah çekerek geri aldığı için çalıştı. Motor 23.Bxf6 gxf6 ya da 23.Rad1’i yaklaşık −0.5 görüyor; maç hamlesi −1.2. Beyaz 24.Nf1 ile atı e3’e götürmek istiyordu ve bunun için şaha g1’den çekilmesi gerektiğini düşünmüş olabilir.' },
    { q: '30...h3’ün önemi neydi, neden hemen 30...Nxe4 oynanmadı?', a: '30...Nxe4 31.Bxe4 Bxe4 sonrası fil şah çekmez, çünkü g2 piyonu hâlâ çaprazı kapatır; Beyaz 32.Nd5! ile e3 atını merkeze getirir ve 32...Bxd5 33.cxd5 sonrası durum sadece −0.8’dir. 30...h3 ise g2 piyonunu tehdit eder; 31.g3 sonrası g2 karesi boşalır ve h3 piyonu tarafından kontrol edilir. Artık 31...Nxe4 32.Bxe4 Bxe4+ şahla gelir ve Beyaz ne Ng2 ne Qg2 ile araya taş koyabilir.' },
    { q: 'Beyaz 31. hamlede g3 yerine ne oynayabilirdi?', a: 'Motor 31.Nd5, 31.Kg1 ve 31.Rab1’i g3 ile neredeyse eşit görüyor (hepsi yaklaşık −2.0/−2.2). Örneğin 31.Kg1 hxg2 32.Nd5 sonrası g2 piyonu Beyaz şahının önünde bir kalkan gibi kalır ama Siyahın kaleleri g- ve h-hatlarında baskı kurar. Yani 30...h3’ten sonra Beyaz zaten zor durumdaydı; asıl kayıp daha önce, 23.Kh1 ve 27.Qb1 gibi yavaş hamlelerle olmuştu.' },
    { q: 'Siyahın kazancını tamamlama tekniği nasıldı?', a: 'Piyon kazandıktan sonra Kasparov taşlarını en iyi hatlara yerleştirdi: 33...Rd8 ile açık d-hattını aldı, 34...Bxf5 ile ikinci piyonu topladı, 36...Be6 ile fili hem c4’e hem f7’yi korumaya ayarladı. 37...Rd6 ve 38...Rhd8 ile kaleleri ikiledi, 39...f6 ile e5 atını kovaladı ve 40...Bxc4 ile c4 piyonunu tempo kazanarak aldı. Hiçbir aşamada gereksiz risk almadı.' },
    { q: 'Beyaz bir noktada kurtulabilir miydi?', a: 'Motor 12. hamleden sonra Beyazı hiçbir zaman avantajlı görmüyor, ama 22. hamleye kadar oyun −0.5 civarında, dengeye yakındı. 23.Kh1 yerine 23.Bxf6 gxf6 24.Nf1 ile at e3’e ve d5’e gelirken şah g1’de güvende kalırdı. 27.Qb1 yerine 27.a4, 30.Qb2 yerine de 30.Nd5 Bxd5 31.cxd5 Qxc3 32.Bd3 (−1.5) daha dirençliydi. 31...Nxe4’ten sonra ise maddi kayıp ve zayıf piyonlar yüzünden kurtuluş zordu.' },
  ],
  sources: [
    { title: '365Chess: Linares 9th 1991 turnuva sayfası (Ehlvest – Kasparov, 10. tur)', url: 'https://www.365chess.com/tournaments/Linares_9th_1991/18643' },
    { title: 'Chessgames.com: Linares 1991 turnuva sayfası ve çapraz tablo', url: 'https://chessgames.com/perl/chess.pl?tid=94061' },
    { title: 'ABC Color – Zenón Franco: Torneos memorables (3), Ciudad de Linares 1991', url: 'https://www.abc.com.py/deportes/polideportivo/2023/03/15/ajedrez-por-zenon-franco-torneos-memorables-3-ciudad-de-linares-1991/' },
    { title: 'Wikipedia: Linares International Chess Tournament', url: 'https://en.wikipedia.org/wiki/Linares_International_Chess_Tournament' },
    { title: 'Wikipedia: Maróczy Bind', url: 'https://en.wikipedia.org/wiki/Mar%C3%B3czy_Bind' },
    { title: 'Hercules Chess: The Sicilian Kan', url: 'https://herculeschess.com/?p=886' },
  ],
  notes: {
    '1w': {
      text: '1.e4: şah piyonu iki kare ilerler, d5 ve f5 karelerini kontrol eder, f1 filine ve vezire yol açar.',
      amac: 'Merkezde yer kaplamak ve taşları hızla geliştirmek.',
      neden: 'Ehlvest 1.e4 ile açık Sicilya’ya girmeyi göze alır; Kasparov’un Sicilya’daki derin hazırlığına karşı bu cesur bir tercihtir. Motor bütün ana ilk hamleleri birbirine yakın görür.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; daha kapalı, konumsal oyun (Motor: +0.2).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç, çoğu zaman d4 sistemlerine döner (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine yandan baskı kurar.',
      amac: 'Simetrik olmayan bir yapıyla kazanma şansı aramak: c-piyonunu Beyazın d-piyonuyla değiştirip merkezde iki piyona karşı bir piyon fazlası elde etmek.',
      neden: 'Kasparov kariyeri boyunca 1.e4’e karşı neredeyse hep Sicilya ile oynadı; dengesiz yapılar onun dinamik oyununa uyar.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; Ruy Lopez ve İtalyan yapıları (Motor: +0.2).' },
        { move: '1...e6', text: 'Fransız Savunması; Siyah ...d5 ile merkezi ister (Motor: +0.35).' },
      ],
    },
    '2w': {
      text: '2.Nf3: at gelişir ve d4 ilerleyişini hazırlar.',
      amac: 'Açık Sicilya’ya girmek: d4 ile merkezi açıp gelişim üstünlüğüyle oynamak.',
      neden: 'Ana yoldur ve en çok şans veren seçenektir. Motor da bu hamleyi en iyi buluyor (+0.46).',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya ya da Grand Prix saldırısına hazırlık (Motor: +0.34).' },
        { move: '2.c3', text: 'Alapin: d4 merkezini piyonla desteklemek (Motor: +0.33).' },
      ],
    },
    '2b': {
      text: '2...e6: Siyah d5 karesini kontrol eder ve f8 filine e7–d6–c5–b4 çaprazını açar.',
      amac: 'Kan, Taimanov ve Scheveningen gibi esnek kuruluşlara kapı açmak; d-piyonunu nereye koyacağına sonra karar vermek.',
      neden: '2...d6 ve 2...Nc6’ya göre daha esnektir: Siyahın fili b4’e gelip c3 atını bağlayabilir. Bu oyunda f8 filinin c3’e uzanması tam da kritik an olacak.',
      diger: [
        { move: '2...d6', text: 'Najdorf, Dragon ve Klasik sistemlere yol (Motor: +0.47). Kasparov’un en sık oynadığı yol.' },
        { move: '2...Nc6', text: 'Sveşnikov ve Klasik sistemler (Motor: +0.33).' },
      ],
    },
    '3w': {
      text: '3.d4: Beyaz merkezi açar ve c5 piyonuna saldırır.',
      amac: 'Merkezde piyon değişip d-hattını açmak, taşları serbest bırakmak.',
      neden: 'Açık Sicilya’nın tutarlı devamı. 3.Nc3 ya da 3.c3 daha sakin yollardır.',
      diger: [
        { move: '3.Nc3', text: 'Önce at; d4’ü bir hamle erteler (Motor: +0.34).' },
        { move: '3.c3', text: 'Alapin’e geçiş; Siyah ...d5 ile kolayca eşitler (Motor: +0.28).' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah d4’te değişir; c-hattı Siyahın, d-hattı Beyazın olur.',
      amac: 'Merkezde iki piyona (d ve e) karşı Beyazın tek e-piyonu kalır; uzun vadede bu Siyahın lehinedir.',
      neden: 'Doğal ve en iyi hamle. 3...a6 ya da 3...d5 gibi hamleler Beyaza 4.d5 veya açık bir merkez verir.',
      diger: [
        { move: '3...a6', text: 'Değişimi ertelemek; 4.d5 ile Beyaz alan kazanır (Motor: +0.83).' },
        { move: '3...d5', text: 'Merkezi hemen açmak; 4.exd5 exd5 5.Bb5+ ile Siyahın d5 piyonu tek kalır (Motor: +0.97).' },
      ],
    },
    '4w': {
      text: '4.Nxd4: at piyonu geri alır ve merkeze yerleşir.',
      amac: 'Merkezde güçlü bir at tutmak ve c3 atı ile gelişimi sürdürmek.',
      neden: 'Zorunluya yakın; piyonu geri almanın doğal yolu budur.',
    },
    '4b': {
      text: '4...a6: Kan (Paulsen) varyantı. Siyah b5 karesini korur ve ...b5 ilerleyişini hazırlar.',
      amac: 'Beyaz atının b5’e gelmesini önlemek ve ileride ...b5-b4 ile vezir kanadında yer kazanmak; taşları Beyaz planını gösterdikten sonra yerleştirmek.',
      neden: 'Kan’ın ruhu esnekliktir: Siyah henüz atlarını ve d-piyonunu bağlamaz. Bedeli, gelişimde biraz geri kalmak ve Beyaza 5.c4 gibi bir alan kuruluşu izni vermektir.',
      diger: [
        { move: '4...Nf6', text: 'Dört at ya da Pin varyantı; 5.Nc3 Nc6 gibi yapılar (Motor: +0.47).' },
        { move: '4...Nc6', text: 'Taimanov varyantı; at d4 atına baskı yapar (Motor: +0.50).' },
      ],
    },
    '5w': {
      text: '5.c4: Beyaz e4 ve c4 piyonlarıyla d5 karesini kilitler; Maroczy kuruluşu.',
      amac: 'Siyahın ...d5 ve ...b5 kırılmalarını zorlaştırıp onu pasif bir kirpi yapısına itmek ve alan avantajıyla oynamak.',
      neden: 'Kan’da ...a6 Siyaha ...b5 fırsatı verir; 5.c4 bunu hemen önler. Bedeli d4 atının ve c3’e gelecek atın korumasının zayıflaması ve d4 karesinin piyonla desteklenmemesidir. Motor bu hamleyi en iyi görüyor (+0.60).',
      diger: [
        { move: '5.Bd3', text: 'Ana yol: fil e4’ü korur, Beyaz önce rok yapar, c4’ü sonra oynayabilir (Motor: +0.58).' },
        { move: '5.Nc3', text: 'Klasik gelişim; Siyah 5...Qc7 ya da 5...b5 ile oynar (Motor: yaklaşık +0.5).' },
      ],
    },
    '5b': {
      text: '5...Nf6: at gelişir ve e4 piyonuna saldırır.',
      amac: 'Beyazı e4’ü korumaya zorlamak; Nc3 sonrası ...Bb4 ile bu atı bağlama imkânını hazırlamak.',
      neden: 'Maroczy yapısında Siyahın en tutarlı karşı oyunu c3 atına baskıdır, çünkü o at hem e4’ü hem d5’i korur. Motor 5...Nf6’yı en iyi buluyor (+0.42).',
      diger: [
        { move: '5...Bb4+', text: 'Hemen şah; 6.Nc3 Nf6 7.Bd2 sonrası benzer yapılar (Motor: +0.52).' },
        { move: '5...Qc7', text: 'Önce vezir; 6.Nc3 Nf6 ile aynı yapıya dönebilir (Motor: +0.56).' },
      ],
    },
    '6w': {
      text: '6.Nc3: at c3’e gelir, e4’ü korur ve d5 karesini kontrol eder.',
      amac: 'Maroczy kuruluşunu tamamlamak: c4, e4 ve Nc3 üçlüsüyle d5’i kilitlemek.',
      neden: 'Diğer hamleler (6.Qd3, 6.Bd3) Siyaha ...d5 ile merkezi açma fırsatı verir. Motor: +0.49, açık ara en iyi.',
      diger: [
        { move: '6.Bd3', text: '6...Nc6 7.Nf3 d5 ile Siyah merkezi açar ve rahat eşitlik alır (Motor: +0.13).' },
        { move: '6.Qd3', text: 'Vezirle e4’ü korumak; 6...d5 ile yine merkez açılır (Motor: +0.24).' },
      ],
    },
    '6b': {
      text: '6...Qc7: vezir c7’ye gelir; c4 piyonuna, e5 karesine ve c-hattına bakar.',
      amac: 'Beyazın e5 ilerleyişini önlemek ve c4 piyonuna baskı kurmak; ...Bb4 ya da ...Bc5 için zemin hazırlamak.',
      neden: 'Kan’ın tipik vezir hamlesidir. 6...Bb4 hemen bağlamak motorun hafifçe tercihidir (+0.39), ama Kasparov önce veziri getirip filin nereye gideceğini sonraya bıraktı.',
      diger: [
        { move: '6...Bb4', text: 'Doğrudan bağ: 7.Bd3 Bxc3+ 8.bxc3 d6 ile oyundaki fikre benzer, çifte piyonlu yapılar (Motor: +0.39).' },
        { move: '6...d5', text: 'Merkezi hemen açmak; 7.cxd5 exd5 8.exd5 Nxd5 sonrası Siyahın piyonu tek kalır (Motor: +0.66).' },
      ],
    },
    '7w': {
      text: '7.Bd3: fil d3’e gelişir ve e4’ü korur.',
      amac: 'e4 piyonunu sağlamlaştırıp rok hazırlamak; ileride f4 ile şah kanadında oynamak.',
      neden: 'Doğal bir gelişim, ama motor 7.a3’ü belirgin biçimde tercih ediyor (+0.66’ya karşı +0.28): a3, ...Bb4 bağını önceden engeller. 7.Bd3 sonrası d3 fili ...Nc5 ya da ...Nb4 ile kolayca hedef olur.',
      diger: [
        { move: '7.a3', text: 'Profilaktik: ...Bb4’ü önler; sonra Be3 ve Be2 (Motor: +0.66).' },
        { move: '7.Be2', text: 'Daha sakin fil yeri; 7...Bb4 8.Qd3 ile c3 korunur (Motor: +0.54).' },
      ],
    },
    '7b': {
      text: '7...Be7: fil e7’ye gelişir; Siyah kısa rok seçeneğini hazırlar.',
      amac: 'Sağlam bir kirpi kuruluşu: Be7, d6, Nc6 ve O-O.',
      neden: 'Motor 7...Nc6 ya da 7...Bb4’ü biraz daha aktif buluyor (+0.44/+0.49’a karşı +0.76). Kasparov filini e7’de tutarak ...Bf6 ile uzun çapraza geçme imkânını sakladı; bu fikir 11. hamlede ortaya çıkacak.',
      diger: [
        { move: '7...Nc6', text: 'At d4’e baskı yapar; 8.Be3 Ne5 ile c4’e uzanır (Motor: +0.44).' },
        { move: '7...Bb4', text: 'c3 atını bağlamak; 8.Ne2 Nc6 ile oyun dengeli (Motor: +0.49).' },
        { move: '7...Bc5', text: 'd4 atına saldırmak; 8.Nb3 Ba7 ile fil uzun çaprazda (Motor: +0.52).' },
      ],
    },
    '8w': {
      text: '8.f4: f-piyonu iki kare ilerler, e5 karesini kontrol eder.',
      amac: 'e4-e5 ile merkezde ilerlemek ya da f4-f5 ile şah kanadında yer kazanmak; kısa rok sonrası f-hattını kullanmak.',
      neden: 'Motor bu hamleyi en iyi buluyor (+0.84): Siyah henüz rok yapmadı ve e5 tehdidi f6 atını kovalar. Bedeli, e3 karesinin ve g1-a7 çaprazının zayıflaması; 12. hamlede bu önemli olacak.',
      diger: [
        { move: '8.Be3', text: 'Önce gelişim; 8...Nc6 9.O-O ile sakin bir Maroczy (Motor: +0.79).' },
        { move: '8.O-O', text: 'Rok; f4’ü sonraya bırakır (Motor: yaklaşık +0.7).' },
      ],
    },
    '8b': {
      text: '8...d6: Siyah e5 karesini kontrol eder ve tipik bir Scheveningen/kirpi yapısına geçer.',
      amac: 'e4-e5 ilerleyişini önlemek ve d6–e6 piyonlarıyla sağlam bir merkez kurmak.',
      neden: '8...O-O? 9.e5 ile f6 atını kovalar (Motor: +1.08). 8...d6 bu tehdidi önler; motor 8...Nc6 ile neredeyse aynı görüyor.',
      diger: [
        { move: '8...Nc6', text: '9.Nxc6 Qxc6 ile değişim; Siyah ...b5 fikrini canlandırır (Motor: +0.78).' },
        { move: '8...O-O', text: '9.e5 ile at kovalanır ve Beyaz alan kazanır (Motor: +1.08).' },
      ],
    },
    '9w': {
      text: '9.Qe2: vezir e2’ye gelir; e4’ü ve c4’ü korur, uzun rok seçeneğini de açık tutar.',
      amac: 'e4-e5 hazırlığını güçlendirmek ve c4 piyonunu ...Qc7’nin baskısından korumak.',
      neden: 'Motor 9.Be3, 9.Qe2 ve 9.O-O’yu eşit görüyor (+0.76/+0.80). Vezir e2’de ileride Qf2 ya da Qf3 ile şah kanadına geçebilir.',
      diger: [
        { move: '9.Be3', text: '9...e5 10.Nde2 Be6 ile Siyah kara kareleri tutar (Motor: +0.80).' },
        { move: '9.O-O', text: '9...O-O 10.Qe2 e5 11.Nf3 ile benzer oyun (Motor: +0.76).' },
      ],
    },
    '9b': {
      text: '9...Nc6: at c6’ya gelişir ve d4 atına baskı yapar.',
      amac: 'd4 atını değişime zorlamak ya da geri çekmek; ...Nb4 ile d3 filine uzanmak.',
      neden: 'Motor 9...e5’i hafifçe tercih ediyor (+0.62’ye karşı +0.73), ama Kasparov önce atını getirdi; ...e5 fikri 13. hamlede, çok daha uygun bir anda gelecek.',
      diger: [
        { move: '9...e5', text: '10.Nf3 Bg4 ile hemen merkezi kapatmak (Motor: +0.62).' },
        { move: '9...O-O', text: 'Kısa rok; 10.O-O e5 11.Nf3 Bg4 ile benzer yapılar (Motor: +0.84).' },
      ],
    },
    '10w': {
      text: '10.Nf3: at f3’e çekilir ve değişimden kaçınır.',
      amac: 'Taşları tahtada tutup alan avantajını korumak; e5 karesine bir taş daha eklemek.',
      neden: 'Alan sahibi taraf genellikle değişimden kaçınır. Motor 10.Nxc6’yı biraz tercih ediyor (+0.75): 10...bxc6 sonrası Siyahın piyonları zayıflar. 10.Nf3 sonrası 10...b5! keskin bir yol olabilirdi.',
      diger: [
        { move: '10.Nxc6', text: '10...bxc6 11.O-O Bb7 ile Siyahın c-piyonları zayıflar (Motor: +0.75).' },
        { move: '10.Nc2', text: 'At b4 ve e3’ü kontrol eder (Motor: +0.56).' },
      ],
    },
    '10b': {
      text: '10...Nd7: at d7’ye çekilir; f6 karesini file bırakır ve c5’e yönelir.',
      amac: 'Nd7-c5 ile d3 filine ve e4’e baskı yapmak; ...Bf6 ile filini uzun çapraza getirmek.',
      neden: 'Motor 10...b5’i daha keskin buluyor (10...b5 11.cxb5 Nb4 12.Bb1 axb5, +0.56). Kasparov taktik kargaşa yerine yapısal bir plan seçti: c5 karesi ve c3 atı.',
      diger: [
        { move: '10...b5', text: 'Piyon fedası: 11.cxb5 Nb4 12.Bb1 axb5 ile Siyahın taşları aktifleşir (Motor: +0.56).' },
        { move: '10...O-O', text: 'Rok; 11.a3 Na5 ile c4’e baskı (Motor: +0.60).' },
      ],
    },
    '11w': {
      text: '11.a3: Beyaz b4 karesini kontrol eder; ...Nb4 ve ...Bb4 yasaklanır.',
      amac: 'd3 filini ...Nb4 saldırısından korumak ve ileride b4 ilerleyişiyle vezir kanadında yer kazanmak.',
      neden: 'Motor 11.Be3’ü tercih ediyor (+0.80’e karşı +0.38). a3 hamlesi bir tempo harcar ve 11...Bf6 sonrası c3 atı sorununu çözmez; ayrıca ileride a3 piyonu da kopuk bir zayıflık olacak.',
      diger: [
        { move: '11.Be3', text: '11...Nc5 12.O-O O-O 13.Rad1 ile sağlam gelişim (Motor: +0.80).' },
        { move: '11.O-O', text: '11...Bf6 12.Qe1 ile c3 atını dolaylı korumak (Motor: +0.72).' },
      ],
    },
    '11b': {
      text: '11...Bf6: fil f6’ya gelir ve uzun çaprazdan c3 atına bakar.',
      amac: 'c3 atını hedef almak; Beyaz fili yanlış yere koyarsa ...Bxc3+ ile piyon yapısını bozmak.',
      neden: 'Motor 11...Bf6’yı en iyi buluyor (+0.46). Fil e5 ilerleyişini de engeller ve d4 karesine bakar. 11...b6 ise 12.b4 ile Beyaza vezir kanadında yer verir (+0.92).',
      diger: [
        { move: '11...Na5', text: 'c4’e baskı; 12.Be3 Nc5 13.Bc2 ile Beyaz sağlam (Motor: +0.63).' },
        { move: '11...b6', text: 'Kirpi düzeni; 12.b4 Bf6 13.Bb2 ile Beyaz yapıyı korur (Motor: +0.92).' },
      ],
    },
    '12w': {
      text: '12.Be3?! fil e3’e gelişir, ama c3 atının korumasına katılmaz.',
      amac: 'Fili gelişirip rok hazırlamak; g1-a7 çaprazını ve c5 karesini kontrol etmek.',
      neden: 'Bu hamle oyunun ilk dönüm noktası. Fil d2’de olsaydı ...Bxc3 Bxc3 ile yapı sağlam kalırdı. e3’teki fil c3’ü koruyamaz; 12...Bxc3+ sonrası bxc3 zorunlu hale gelir. Motor: +0.4’ten −0.3’e.',
      diger: [
        { move: '12.Bd2', text: 'c3’ü fille korumak: 12...Na5 13.Rd1 Nb3 14.Be3 ile Beyaz avantajı korur (Motor: +0.38).' },
        { move: '12.Nd1', text: 'Atı geri çekmek; 12...Nc5 13.Bc2 b5 ile oyun dengeli (Motor: +0.04).' },
      ],
    },
    '12b': {
      text: '12...Bxc3+! Kasparov kara kareli filini c3 atıyla değişir; Beyazın şahı şah altındadır.',
      amac: 'Beyaza a3, c3 ve c4’te kopuk, çifte piyonlar bırakmak; özellikle c4’ü kalıcı bir hedef yapmak.',
      neden: 'Kara kareli fil normalde değerlidir, ama 13...e5 ile Siyah kara kareleri piyonlarıyla tutacağı için yokluğu hissedilmez. Beyazın e3 fili ise kendi piyonlarının arkasında kalacak. Motor bu hamleyi açık ara en iyi buluyor: −0.4; diğer hamleler +0.6 civarında.',
      diger: [
        { move: '12...Na5', text: '13.Bd4 Bxd4 14.Nxd4 sonrası Beyaz alan avantajını korur (Motor: +0.62).' },
        { move: '12...Nc5', text: '13.Rc1 Nb3 14.Rb1 ile at kovalanır (Motor: +0.65).' },
      ],
    },
    '13w': {
      text: '13.bxc3: Beyaz b-piyonuyla almak zorundadır.',
      amac: 'Taşı geri almak.',
      neden: 'Zorunlu: 13.Kf1 ya da 13.Kf2 ile şah kaçarsa c3 fili alınmadan kalır ve 13...Bf6 ile Siyah bir taş önde olur (Motor: −4.5 / −4.8). Fil e3’te olduğu için başka geri alma yolu yoktur.',
    },
    '13b': {
      text: '13...e5: Siyah merkezi kapatır ve f4 piyonuna saldırır.',
      amac: 'Kara kareleri piyonlarla tutmak, Beyazın e3 filini etkisizleştirmek ve c5 karesini atlar için kalıcı bir üs yapmak.',
      neden: 'Beyazın b- ve d-piyonu yok; c5’e gelen bir Siyah atı hiçbir zaman piyonla kovalanamaz. 14.fxe5 Nxe5 sonrası e5’teki at da merkezde güçlü olur. Motor: −0.25, en iyi hamle.',
      diger: [
        { move: '13...f6', text: 'e5’i piyonla tutmak, ama f6 karesi kapanır (Motor: +0.14).' },
        { move: '13...Na5', text: 'c4’e saldırmak; 14.e5 dxe5 15.fxe5 ile Beyazın merkezi canlanır (Motor: +0.37).' },
      ],
    },
    '14w': {
      text: '14.f5: f-piyonu ilerler ve merkezi kapatır.',
      amac: 'Şah kanadında yer kazanmak, c8 filinin f5-h3 çaprazını kapatmak ve ileride g4-g5 ile hücum etmek.',
      neden: 'Motor bu hamleyi en iyi buluyor (−0.21). 14.O-O exf4 15.Bxf4 Nce5 ile Siyah e5 karesini alır (−0.49). Bedeli: e5 Siyahın sabit piyonu olur, e3 fili kendi piyonlarının önünde ama hedefsiz kalır.',
      diger: [
        { move: '14.O-O', text: '14...exf4 15.Bxf4 Nce5 ile Siyahın atı e5’e yerleşir (Motor: −0.49).' },
        { move: '14.Nh4', text: '14...exf4 15.Bxf4 Nc5 ile Siyah rahat (Motor: −0.56).' },
      ],
    },
    '14b': {
      text: '14...Ncb8: at b8’e geri çekilir; d7 üzerinden yeniden düzenlenecek.',
      amac: 'Atları c5 ve f6 gibi ideal karelere getirmek: biri Nd7-c5’ten, diğeri Nb8-d7-f6’dan.',
      neden: 'c6’daki at kapalı merkezde iş yapmıyordu. Motor 14...Nc5 ve 14...Na5’i biraz daha iyi görüyor (−0.14/−0.13’e karşı +0.21), çünkü geri çekilme bir tempo kaybıdır; ama Kasparov’un yeniden düzenleme planı yapısal olarak sağlamdır.',
      diger: [
        { move: '14...Nc5', text: '15.Bxc5 dxc5 16.O-O Bd7 ile Siyah c5 piyonuyla kara kareleri tutar (Motor: −0.14).' },
        { move: '14...Na5', text: 'c4’e baskı; 15.Nd2 Nc5 16.Bxc5 Qxc5 (Motor: −0.13).' },
      ],
    },
    '15w': {
      text: '15.O-O: Beyaz kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini oyuna sokmak.',
      neden: 'Motor 15.Qf2’yi hafifçe tercih ediyor (+0.14): 15...Nc5 16.Bxc5 dxc5 17.Qh4 ile kara karelerde baskı. Rok doğal ama Beyazın şahı ileride Siyahın piyon hücumunun hedefi olacak.',
      diger: [
        { move: '15.Qf2', text: '15...Nc5 16.Bxc5 dxc5 17.Qh4 ile e7 ve d8’e bakmak (Motor: +0.14).' },
        { move: '15.Nd2', text: 'Atı e4’ün savunmasına getirmek; 15...Nc5 16.O-O ile aynı oyun (Motor: 0.00).' },
      ],
    },
    '15b': {
      text: '15...Nc5: at c5’e gelir ve d3 filine saldırır.',
      amac: 'Atı kalıcı üssüne yerleştirmek; d3 filini geri çekmeye zorlamak ve e4’e baskı yapmak.',
      neden: 'Motor 15...Nc5’i en iyi buluyor (0.00). At burada piyonla kovalanamaz; Beyazın tek değişim yolu kara kareli filini vermektir (Bxc5).',
      diger: [
        { move: '15...Nf6', text: '16.c5! dxc5 17.a4 ile Beyaz c5 karesini açar (Motor: +0.17).' },
        { move: '15...b6', text: 'Kirpi; 16.Rab1 Nc5 17.f6 ile Beyaz şah kanadında açılım arar (Motor: +0.31).' },
      ],
    },
    '16w': {
      text: '16.Bc2: fil c2’ye çekilir ve e4’ü korumaya devam eder.',
      amac: 'Fili ...Nxd3 değişiminden korumak; ileride Ba4 ile beyaz kareleri işlemek.',
      neden: 'Motor 16.Nd2’yi tercih ediyor (+0.10): at e4’ü korur ve Rf3-g3 ile kale şah kanadına gelir. Bc2 biraz pasif; fil e4 piyonunun arkasında kalır.',
      diger: [
        { move: '16.Nd2', text: '16...Nbd7 17.Rf3 Nf6 18.Rg3 ile kale g-hattında (Motor: +0.10).' },
        { move: '16.Ne1', text: 'At c2’ye yönelir (Motor: −0.09).' },
      ],
    },
    '16b': {
      text: '16...Nbd7: ikinci at d7’ye gelir; sırada f6 karesi var.',
      amac: 'Atı f6’ya getirip e4’e baskıyı ikiye çıkarmak.',
      neden: 'Motor bu hamleyi açık ara en iyi buluyor (−0.13); 16...h6 ya da 16...Nc6 +0.6/+0.8. Siyah taşlarını sabit hedeflere (e4, c4) karşı uyumla yerleştirir.',
      diger: [
        { move: '16...h6', text: '17.f6! gxf6 18.Nd4 ile Beyaz şah kanadını açar (Motor: +0.57).' },
        { move: '16...Nc6', text: 'At geri döner ama işe yaramaz; 17.Rad1 f6 (Motor: +0.78).' },
      ],
    },
    '17w': {
      text: '17.Rfd1: kale d1’e gelir ve d6 piyonuna bakar.',
      amac: 'd-hattında d6 zayıflığına baskı kurmak.',
      neden: 'Motor 17.Rad1, 17.Qf2 ve 17.Rfd1’i eşit görüyor (−0.21/−0.24). f-kalesini d1’e almak, f-hattını boşaltır ama Beyaz zaten f5 ile f-hattını kapatmıştı.',
      diger: [
        { move: '17.Rad1', text: '17...b6 18.Nd2 Bb7 19.Qg4 ile şah kanadına baskı (Motor: −0.21).' },
        { move: '17.Qf2', text: 'Vezir g3-h4’e yönelir (Motor: −0.23).' },
      ],
    },
    '17b': {
      text: '17...Nf6: at f6’ya gelir ve e4’e baskıyı artırır.',
      amac: 'e4’ü ikinci kez saldırıya almak; d5 karesini de kontrol etmek.',
      neden: 'Motor 17...b6’yı biraz tercih ediyor (−0.37), ama Nf6 Kasparov’un planının doğal tamamlayıcısıdır. 17...b5 ise 18.Qd2 ile d6’ya baskı verir (0.00).',
      diger: [
        { move: '17...b6', text: '18.Rd2 Bb7 19.Rad1 Bxe4 ile Siyah piyon kazanabilir (Motor: −0.37).' },
        { move: '17...b5', text: 'Vezir kanadını açmak; 18.Qd2 Bb7 19.Qxd6 ile Beyaz piyonu geri alır (Motor: 0.00).' },
      ],
    },
    '18w': {
      text: '18.Nd2: at d2’ye çekilir ve e4’ü korur.',
      amac: 'Nd2-f1-e3-d5 manevrasıyla atı d5 karesine getirmek.',
      neden: 'd5 Beyazın en iyi karesi; Siyahın d-piyonu d6’da kaldıkça orada at sağlam durur. Motor 18.Bf2’yi eşit görüyor (−0.28/−0.35).',
      diger: [
        { move: '18.Bf2', text: '18...Bd7 19.a4 O-O-O 20.a5 ile vezir kanadında yer (Motor: −0.28).' },
        { move: '18.Bg5', text: 'f6 atını bağlamak; oyunda bir hamle sonra gelecek (Motor: −0.35).' },
      ],
    },
    '18b': {
      text: '18...Bd7: fil d7’ye gelişir; c6’ya ve uzun çapraza gidecek.',
      amac: 'Son küçük taşı geliştirmek ve a8-h1 çaprazında e4’e baskıyı üçe çıkarmak.',
      neden: 'Motor 18...Bd7’yi en iyi buluyor (−0.17). Fil c8’de f5 piyonunun arkasında işsizdi; c6’da hem e4’e hem de ileride g2 ve h1 karelerine bakacak.',
      diger: [
        { move: '18...h6', text: '19.h3 Bd7 20.a4 ile benzer oyun (Motor: −0.10).' },
        { move: '18...h5', text: 'Hemen piyon hücumu; 19.h3 Bd7 (Motor: 0.00).' },
      ],
    },
    '19w': {
      text: '19.Bg5: fil g5’e gelir ve f6 atına baskı yapar; Siyah uzun rok yaparsa aynı çapraz d8 kalesine uzanacak.',
      amac: 'f6 atına baskı yapmak; Bxf6 ile e4’ün en önemli saldıranını ortadan kaldırma seçeneği.',
      neden: 'Motor 19.Bg5’i en iyi buluyor (−0.30). e3 fili oyunun başından beri işsizdi; g5’te en azından bir hedefi var.',
      diger: [
        { move: '19.a4', text: '19...a5 20.h3 O-O-O ile benzer oyun (Motor: −0.39).' },
        { move: '19.Rdb1', text: 'b-hattında oyun (Motor: −0.42).' },
      ],
    },
    '19b': {
      text: '19...Bc6: fil c6’da e4 piyonuna ve a8-h1 çaprazına bakar.',
      amac: 'e4’ü üçüncü kez saldırıya almak ve uzun çaprazı ele geçirmek.',
      neden: 'Motor 19...h5 ve 19...Bc6’yı eşit görüyor (−0.59/−0.57). Fil c6’da Beyazın Ba4 fikrini de karşılar ve ileride çok önemli olacak.',
      diger: [
        { move: '19...h5', text: '20.a4 a5 21.h3 Bc6 ile aynı plan (Motor: −0.59).' },
        { move: '19...h6', text: '20.Bh4 Bc6 21.a4 a5 (Motor: −0.48).' },
      ],
    },
    '20w': {
      text: '20.Qf3: vezir f3’e gelir; e4’ü korur ve f6 atına baskıyı artırır.',
      amac: 'Bxf6 tehdidini güçlendirmek: f6 alınırsa vezir f3’ten şah kanadına baskı yapar.',
      neden: 'Motor 20.h3, 20.a4 ya da 20.Rab1’i biraz tercih ediyor (yaklaşık −0.5’e karşı −0.66). Vezir f3’te g-hattındaki Siyah kaleleri ve ...g5-g4 ilerleyişine açık hale gelir.',
      diger: [
        { move: '20.h3', text: '20...O-O-O 21.a4 a5 22.Kh2 ile şaha kaçış karesi (Motor: −0.51).' },
        { move: '20.a4', text: '20...a5 21.h3 O-O-O ile vezir kanadını kilitlemek (Motor: −0.51).' },
      ],
    },
    '20b': {
      text: '20...O-O-O: Siyah uzun rok yapar.',
      amac: 'Şahı şah kanadındaki hücumdan uzaklaştırmak ve g- ile h-piyonlarını hücuma serbest bırakmak.',
      neden: 'Beyazın f5 piyonu, g5 fili ve f3 veziri şah kanadına bakıyor; orada kısa rok riskliydi. Vezir kanadında ise Beyazın c3–c4 piyonları kendi taşlarını tıkıyor. Motor: −0.51, en iyi hamle.',
      diger: [
        { move: '20...h5', text: 'Önce piyon; 21.Bh4 O-O-O 22.h3 Rdg8 ile aynı plan (Motor: −0.48).' },
        { move: '20...Rg8', text: 'Şahı ortada bırakmak; 21.h3 Nfd7 22.Qh5 ile Beyaz aktifleşir (Motor: −0.22).' },
      ],
    },
    '21w': {
      text: '21.Re1: kale e1’e gelir ve e4 piyonunu korur.',
      amac: 'e4’ü üçüncü kez korumak ve d1 karesini vezire bırakmak.',
      neden: 'Motor 21.Bxf6 gxf6 22.h3 ya da 21.h3’ü tercih ediyor (−0.26/−0.27’ye karşı −0.56). Re1 pasif bir savunma hamlesi; Beyazın inisiyatif kurmak yerine Siyahın planına tepki verdiğini gösterir.',
      diger: [
        { move: '21.Bxf6', text: '21...gxf6 22.h3 h5 23.Kh2 ile f6 atı ortadan kalkar, g-hattı açılır ama Siyahın piyonları dağınık (Motor: −0.26).' },
        { move: '21.h3', text: '21...h6 22.Bxf6 gxf6 23.a4 (Motor: −0.27).' },
      ],
    },
    '21b': {
      text: '21...h6: Siyah g5 filine sorar ve ...g5 ilerleyişini hazırlar.',
      amac: 'Fili ya değişmeye ya da h4’e çekilmeye zorlamak; sonra ...g5 ile tempo kazanmak.',
      neden: 'Motor 21...h5’i biraz tercih ediyor (−0.44’e karşı −0.30). ...h6 ve ...g5 ile Siyah fili şah kanadından süpürmek ister; ...h5 ise h-piyonunu doğrudan h4-h3’e yollar.',
      diger: [
        { move: '21...h5', text: '22.h3 Rdg8 23.Bxf6 gxf6 ile g-hattı açılır (Motor: −0.44).' },
        { move: '21...Rdg8', text: '22.Bxf6 gxf6 23.h3 Qb6 (Motor: −0.33).' },
      ],
    },
    '22w': {
      text: '22.Bh4: fil h4’e çekilir ve f6 atını d8 kalesine bağlar.',
      amac: 'Fil çiftini korumak ve f6 atı üzerindeki baskıyı sürdürmek.',
      neden: 'Motor 22.Bxf6’yı hafifçe tercih ediyor (−0.19’a karşı −0.37): 22...gxf6 23.Nf1 sonrası Siyahın piyonları dağılır. Bh4 ise fili ...g5’in hedefi yapar; Siyah piyonlarını tempo kazanarak ilerletecek.',
      diger: [
        { move: '22.Bxf6', text: '22...gxf6 23.Nf1 Rdg8 24.h3 ile g-hattı açılır ama Siyahın şah kanadı piyonları zayıflar (Motor: −0.19).' },
        { move: '22.Be3', text: 'Geri çekilmek; 22...Kb8 23.Bf2 h5 ile Siyah hücuma devam eder (Motor: −0.63).' },
      ],
    },
    '22b': {
      text: '22...Rdg8: kale d8’den g8’e geçer; hem bağdan kurtulur hem de g-piyonunun arkasına geçer.',
      amac: '...g5 ilerleyişini kaleyle desteklemek ve g-hattı açıldığında hücuma hazır olmak.',
      neden: 'd8’deki kale h4 filinin bağı altındaydı. Motor 22...Rdg8’i en iyi buluyor (−0.42). Kale g8’de, piyon g5’e gidince g-hattının sahibi olacak.',
      diger: [
        { move: '22...h5', text: '23.Nf1 Rdg8 24.Rad1 Kb8 ile benzer plan (Motor: −0.34).' },
        { move: '22...Kb8', text: 'Önce şah güvenliği; 23.Bxf6 gxf6 24.Nf1 h5 (Motor: −0.20).' },
      ],
    },
    '23w': {
      text: '23.Kh1? şah h1’e çekilir.',
      amac: 'Şahı g-hattından uzaklaştırmak ve g1 karesini boşaltmak; ileride Nf1 ile atın yolunu açmak.',
      neden: 'Şah artık c6 filinin a8-h1 çaprazındadır; aradaki tek engeller e4 piyonu ve g2 piyonudur. Motor 23.Bxf6 gxf6 24.Nf1 (−0.49) ya da 23.Rad1’i (−0.67) öneriyor; maç hamlesi −1.17. Bu ayrıntı 31...Nxe4 kombinasyonunun temelidir.',
      diger: [
        { move: '23.Bxf6', text: '23...gxf6 24.Nf1 Qb6 25.Rab1 ile f6 atı ortadan kalkar, at e3-d5 yolunu bulur (Motor: −0.49).' },
        { move: '23.Rad1', text: '23...Nh7 24.Bf2 Ng5 25.Qg3 ile şah g1’de kalır (Motor: −0.67).' },
      ],
    },
    '23b': {
      text: '23...Nfd7: at f6’dan d7’ye çekilir; bağdan kurtulur ve g-piyonunun yolunu açar.',
      amac: '...g5 ile h4 filini kovalamak ve ardından ...h5-h4 ile piyon hücumunu sürdürmek.',
      neden: 'Motor 23...Nfd7’yi açık ara en iyi buluyor (−1.16). f6’daki at g-piyonunun önündeydi ve bağlıydı; d7’den ileride b6 ya da f6’ya tekrar gelebilir.',
      diger: [
        { move: '23...Nh7', text: '24.Bf2 Kb8 25.Bxc5 dxc5 ile at h7’de pasif kalır (Motor: −0.67).' },
        { move: '23...h5', text: '24.Rad1 Kb8 25.h3 Nfd7 ile benzer oyun (Motor: −0.65).' },
      ],
    },
    '24w': {
      text: '24.Nf1: at f1’e gelir; e3 ve d5 hedefinde.',
      amac: 'Nf1-e3-d5 manevrasını tamamlamak: d5’teki bir at Siyahın c6 filiyle değişmeye zorlanabilir ve merkezde güçlü durur.',
      neden: 'Motor 24.Bf2 ile eşit görüyor (−1.02/−1.03). Bu manevra 18. hamleden beri plandaydı; ama at e3’e ulaşana kadar Siyahın piyonları çok yol alacak.',
      diger: [
        { move: '24.Bf2', text: '24...g5 25.fxg6 fxg6 26.Nf1 ile fil önceden güvenli kareye (Motor: −1.02).' },
        { move: '24.Nb3', text: 'c5 atını değişmeye zorlamak: 24...Nxb3 25.Bxb3 Nc5 26.Bc2 (Motor: −1.11).' },
      ],
    },
    '24b': {
      text: '24...g5! g-piyonu iki kare ilerler ve h4 filine saldırır.',
      amac: 'Piyon hücumunu tempo kazanarak başlatmak; fili şah kanadından uzaklaştırmak.',
      neden: 'Motor 24...g5’i en iyi buluyor (−1.06). 25.fxg6 en passant alırsa 25...fxg6 sonrası f-hattı açılır ve Siyahın kaleleri f8 ve g8’den baskı kurar. Uzun rok yapılmış olduğu için bu piyonun ilerlemesi Siyah şahını zayıflatmaz.',
      diger: [
        { move: '24...g6', text: '25.Be7 Nb6 26.Bf6 Rh7 ile fil aktif kalır (Motor: −0.80).' },
        { move: '24...Kb8', text: 'Önce şahı a8-b8 köşesine almak (Motor: −0.47).' },
      ],
    },
    '25w': {
      text: '25.Bf2: fil f2’ye çekilir; c5 atına ve g1-a7 çaprazına bakar.',
      amac: 'Fili korumak ve c5 atını Bxc5 ile değiştirme seçeneğini canlı tutmak.',
      neden: 'Motor 25.fxg6’yı hafifçe tercih ediyor (−0.97’ye karşı −1.14): en passant ile f-hattını açmak Siyahın piyon zincirini dağıtır. 25.Bg3? ise 25...h5 ile tempo kaybettirir (−1.72).',
      diger: [
        { move: '25.fxg6', text: '25...fxg6 26.Bf2 g5 27.Rad1 ile Beyaz f-hattında oyun kurar (Motor: −0.97).' },
        { move: '25.Bg3', text: 'Fil g3’te ...h5-h4 ile yeniden kovalanır (Motor: −1.72).' },
      ],
    },
    '25b': {
      text: '25...h5: h-piyonu da ilerler; ...h4 ve ...h3 hedefinde.',
      amac: 'g- ve h-piyonlarıyla birlikte ilerleyip Beyaz şahının önündeki g2 ve h2 piyonlarını sorgulamak.',
      neden: 'Motor 25...h5’i en iyi buluyor (−1.18). ...g4 hemen oynanırsa g-piyonu tek başına kalır; önce h-piyonunu getirmek hücumu ikili yapar.',
      diger: [
        { move: '25...Kb8', text: '26.Qe2 h5 27.Rad1 Nf6 ile önce şahı sağlamlaştırmak (Motor: −0.90).' },
        { move: '25...Rg7', text: '26.Ne3 h5 27.Nd5 ile Beyazın atı d5’e erken ulaşır (Motor: −0.76).' },
      ],
    },
    '26w': {
      text: '26.Qd1: vezir d1’e çekilir ve d1-h5 çaprazından h5 piyonuna bakar.',
      amac: 'Veziri ...g4 tehdidinden kurtarmak ve h5 piyonuna baskı kurmak.',
      neden: '...g4 gelirse f3’teki vezir kovalanacaktı. Motor 26.Qe2 ile 26.Qd1’i eşit görüyor (−1.12/−1.19). Beyaz savunmada; inisiyatif tamamen Siyahta.',
      diger: [
        { move: '26.Qe2', text: '26...h4 27.a4 g4 28.a5 ile vezir kanadında karşı oyun (Motor: −1.12).' },
        { move: '26.a4', text: '26...g4 27.Qe2 h4 28.a5 (Motor: −1.22).' },
      ],
    },
    '26b': {
      text: '26...h4: h-piyonu h4’e gelir; g3 karesini kontrol eder ve h3’e ilerlemeye hazırlanır.',
      amac: 'Bir sonraki aşamada ...h3 ile g2 piyonunu sorgulamak ve Beyaz şahının etrafındaki kareleri zayıflatmak.',
      neden: 'Motor 26...h4’ü en iyi buluyor (−1.42). h4 piyonu Beyazın g3 ile şah kanadını kapatmasını da önler.',
      diger: [
        { move: '26...Nf6', text: '27.Bxc5 dxc5 28.Qd2 h4 ile benzer oyun (Motor: −1.08).' },
        { move: '26...Rh7', text: '27.Qd2 h4 28.Rad1 g4 (Motor: −1.05).' },
      ],
    },
    '27w': {
      text: '27.Qb1: vezir b1’e gider; b-hattından b7’ye bakar.',
      amac: 'Vezir kanadında Siyah şahına karşı oyun aramak; Qb1-b2 veya a4-a5 ile b-hattını açmak.',
      neden: 'Motor 27.a4’ü tercih ediyor (−1.17’ye karşı −1.51): a-piyonunu ilerletmek daha doğrudan karşı oyundur. Qb1 vezirin şah kanadından uzaklaşması demektir ve Siyahın hücumuna karşı savunmayı zayıflatır.',
      diger: [
        { move: '27.a4', text: '27...a5 28.Kg1 g4 29.Bxc5 ile vezir kanadında yer kazanmak (Motor: −1.17).' },
        { move: '27.Bxc5', text: '27...Nxc5 28.h3 g4 29.hxg4 ile şah kanadını açık tutmak (Motor: −1.47).' },
      ],
    },
    '27b': {
      text: '27...Nf6: at f6’ya döner ve e4’e baskıyı yeniler.',
      amac: 'e4’ü yeniden hedef almak; d7’deki at artık ...g5 için gerekli değildir.',
      neden: 'Motor 27...g4’ü hafifçe tercih ediyor (−1.55’e karşı −1.24), ama Nf6 e4 baskısını artırarak 31. hamledeki kombinasyonun taşını yerine koyar.',
      diger: [
        { move: '27...g4', text: '28.Bxc5 Nxc5 29.Ne3 Kb8 ile piyon hücumu sürer (Motor: −1.55).' },
        { move: '27...Qa5', text: '28.Qb4 Qc7 29.Bxc5 Nxc5 ile vezirler yer değiştirir (Motor: −1.39).' },
      ],
    },
    '28w': {
      text: '28.Bxc5: Beyaz c5’teki güçlü atı fille alır.',
      amac: 'Siyahın en iyi taşını ortadan kaldırmak ve e4 üzerindeki baskıyı azaltmak.',
      neden: 'c5’teki at piyonla kovalanamıyordu ve e4’e baskı yapıyordu. Motor 28.a4’ü hafifçe tercih ediyor (−1.10’a karşı −1.27). Değişim Beyazın kara kareli filini verir; artık Siyahın kara kareleri tamamen güvendedir ve d-hattı açılır.',
      diger: [
        { move: '28.a4', text: '28...Bd7 29.a5 g4 30.Bg1 ile vezir kanadında yer kazanmak (Motor: −1.10).' },
        { move: '28.Kg1', text: '28...Bd7 29.Bxc5 Qxc5+ 30.Ne3 (Motor: −1.44).' },
      ],
    },
    '28b': {
      text: '28...dxc5: Siyah piyonla geri alır; d-hattı açılır.',
      amac: 'Taşı geri almak ve d-hattını kalelerine açmak.',
      neden: 'Tek iyi hamle: 28...h3? fil c5’te kalırken bir taş verir; 29.Bf2 sonrası Siyah bir taş eksik (Motor: +2.26). 28...dxc5 sonrası c5 piyonu c4’ü sabitler ve d6 zayıflığı ortadan kalkar.',
      diger: [
        { move: '28...h3?', text: 'Taş eksik kalır: 29.Bf2 hxg2+ 30.Kxg2 (Motor: +2.26).' },
      ],
    },
    '29w': {
      text: '29.Ne3: at e3’e gelir; d5 karesine gitmeyi hedefler.',
      amac: 'Atı d5’e yerleştirip c6 filini değişime zorlamak ve uzun çaprazı kapatmak.',
      neden: 'Motor 29.a4’ü biraz tercih ediyor (−1.38’e karşı −1.48). Nd5 gelirse ...Bxd5 cxd5 sonrası Beyazın c-piyonları düzelir; bu yüzden Siyah hızlı olmalıdır.',
      diger: [
        { move: '29.a4', text: '29...Qa5 30.Ra3 Rd8 31.Re2 ile a-piyonunu korumak (Motor: −1.38).' },
        { move: '29.Kg1', text: '29...Qa5 30.Qb3 h3 31.g3 (Motor: −1.55).' },
      ],
    },
    '29b': {
      text: '29...Qa5: vezir a5’ten c3 ve a3 piyonlarına saldırır.',
      amac: 'Beyazın zayıf vezir kanadı piyonlarını hedef alıp Beyaz vezirini savunmaya bağlamak.',
      neden: 'Motor 29...h3 ile eşit görüyor (−1.46). Vezir hamlesi Beyazı 30.Qb2 ile pasif savunmaya iter; 30.Nd5 Bxd5 31.cxd5 Qxc3 ise bir piyon verir.',
      diger: [
        { move: '29...h3', text: 'Hemen piyon hücumu: 30.g3 Qa5 31.Nd5 Bxd5 (Motor: −1.46).' },
        { move: '29...g4', text: '30.a4 Qa5 31.Ra3 ile Beyaz savunur (Motor: −0.91).' },
      ],
    },
    '30w': {
      text: '30.Qb2: vezir b2’de c3 ve a3 piyonlarını korur.',
      amac: 'Vezir kanadı piyonlarını savunmak ve b-hattında b7’ye bakmak.',
      neden: 'Motor 30.Nd5 ya da 30.Bd3’ü tercih ediyor (−1.51’e karşı −1.85): 30.Nd5 Bxd5 31.cxd5 Qxc3 32.Bd3 sonrası Beyaz bir piyon verir ama c4 zayıflığı ortadan kalkar ve d5 piyonu Siyahın uzun çaprazını kapatır.',
      diger: [
        { move: '30.Nd5', text: '30...Bxd5 31.cxd5 Qxc3 32.Bd3 ile piyon karşılığı uzun çaprazı kapatmak (Motor: −1.51).' },
        { move: '30.Bd3', text: '30...Qxc3 31.Nd5 Bxd5 32.cxd5 ile benzer fikir (Motor: −1.51).' },
      ],
    },
    '30b': {
      text: '30...h3! h-piyonu h3’e gelir ve ...hxg2+ ile tehdit eder.',
      amac: 'g2 piyonunu yerinden etmek: Beyaz ya g3 ile g2 karesini boşaltacak ya da hxg2’ye izin verecek. Her iki durumda da uzun çapraz zayıflar.',
      neden: 'Hemen 30...Nxe4 31.Bxe4 Bxe4 şah çekmez; Beyaz 32.Nd5! ile direnir (Motor: −0.81). 30...h3 31.g3 sonrası h3 piyonu g2’yi kontrol eder; artık 31...Nxe4 32.Bxe4 Bxe4+ şahla gelir. Motor: −1.98, açık ara en iyi.',
      diger: [
        { move: '30...Nxe4', text: '31.Bxe4 Bxe4 32.Nd5! Bxd5 33.cxd5 sonrası fil şah çekmediği için Beyaz dengeye yaklaşır (Motor: −0.81).' },
        { move: '30...Rd8', text: '31.Nd5 Bxd5 32.cxd5 ile at d5’e ulaşır (Motor: −0.72).' },
      ],
    },
    '31w': {
      text: '31.g3: g-piyonu bir kare ilerler; g-hattını kapalı tutar.',
      amac: 'h3 piyonunun g2’yi almasını önlemek ve şah kanadını kilitlemek.',
      neden: 'Motor 31.Nd5, 31.Rab1 ve 31.g3’ü eşit görüyor (−2.24). Ama g3’ün bedeli ağır: g2 karesi boşalır ve h3 piyonunun kontrolüne geçer, h1-a8 çaprazında e4’ten başka engel kalmaz. 31.Kg1 hxg2 32.Nd5 ise şahın önünde bir piyon kalkanı bırakır.',
      diger: [
        { move: '31.Nd5', text: '31...hxg2+ 32.Kxg2 Bxd5 33.cxd5 ile at uzun çaprazı kapatır, ama Beyaz şahı açıktadır (Motor: −2.24).' },
        { move: '31.Kg1', text: '31...hxg2 32.Nd5 Qd8 ile g2 piyonu şahı korur (Motor: yaklaşık −1.9).' },
      ],
    },
    '31b': {
      text: '31...Nxe4! at e4 piyonunu alır.',
      amac: 'Uzun çaprazı açmak ve piyon kazanmak: 32.Bxe4 Bxe4+ ile fil şah çekerek geri alır.',
      neden: 'Bu taktik üç ayrıntıya dayanır: şah h1’de (23.Kh1), g2 karesi h3 piyonunun kontrolünde (30...h3) ve c6 fili çaprazda. 33.Ng2? Bxg2+ ya da 33.Qg2?? hxg2+ ile araya taş konamaz. Motor: −2.06; sonraki en iyi 31...Rh6 / 31...Rd8 yalnızca −0.6.',
      diger: [
        { move: '31...Rd8', text: '32.Nd5 Ne8 33.Bd3 Kb8 ile Beyazın atı d5’e oturur (Motor: −0.60).' },
        { move: '31...Rh6', text: '32.Kg1 Rd8 33.Nd5 Bxd5 ile yavaş bir plan (Motor: −0.61).' },
      ],
    },
    '32w': {
      text: '32.Bxe4: Beyaz atı alır.',
      amac: 'Taşı geri almak; en azından materyal kaybını bir piyonla sınırlamak.',
      neden: 'Motor bunu en iyi buluyor (−2.17). 32.Kg1 ile şahı çaprazdan çekmek 32...Nd2! sonrası daha kötüdür: at c4’e ve f1/f3 karelerine saldırır (−2.59). 32.Nd5 Bxd5 33.cxd5 Nd6 ise Beyazı piyon eksik ve yapısız bırakır (−2.65).',
      diger: [
        { move: '32.Kg1', text: '32...Nd2 33.Re2 Rd8 ile at Beyaz kampında kalır (Motor: −2.59).' },
        { move: '32.Nd5', text: '32...Bxd5 33.cxd5 Nd6 ile Siyah piyon önde ve at mükemmel karede (Motor: −2.65).' },
      ],
    },
    '32b': {
      text: '32...Bxe4+: fil şah çekerek geri alır; Siyah bir piyon kazandı.',
      amac: 'Taşı geri almak ve fili uzun çaprazda en aktif kareye yerleştirmek.',
      neden: 'Zorunlu: başka her hamle bir taş kaybettirir (örneğin 32...Kc7 33.Bd5, Motor: +4.3). e4’teki fil artık hem şahı hem b1-h7 çaprazını kontrol eder.',
    },
    '33w': {
      text: '33.Kg1: şah g1’e çekilir; tek hamle.',
      amac: 'Şahtan kurtulmak.',
      neden: 'Zorunlu: 33.Ng2 Bxg2+ 34.Kg1 sonrası Siyah bir taş önde (Motor: −5.78), 33.Qg2?? hxg2+ ise vezir kaybettirir (−10.07). h3 piyonunun g2’yi tutmasının sonucu budur.',
      diger: [
        { move: '33.Ng2?', text: '33...Bxg2+ 34.Kg1 ile Siyah taş kazanır (Motor: −5.78).' },
        { move: '33.Qg2??', text: '33...hxg2+ vezir kaybettirir (Motor: −10.07).' },
      ],
    },
    '33b': {
      text: '33...Rd8: kale açık d-hattına gelir.',
      amac: 'd-hattını ele geçirmek ve ...Rd2 ya da ...Rd3 ile Beyaz kampına girmek.',
      neden: 'Motor 33...Rd8’i en iyi buluyor (−2.39). g8’deki kale g-hattı kapalı olduğu için işsizdi; d-hattı oyunun tek açık hattıdır. 33...Kb8 ya da 33...Re8 avantajı yarıya indirir.',
      diger: [
        { move: '33...Kb8', text: '34.f6 Re8 35.Rad1 Bc6 ile önce şah güvenliği (Motor: −1.77).' },
        { move: '33...Re8', text: '34.Rab1 Bxb1 35.Rxb1 Qc7 ile değişim fırsatı (Motor: −1.60).' },
      ],
    },
    '34w': {
      text: '34.Ng4: at g4’ten e5 piyonuna saldırır.',
      amac: 'Kaybedilen piyonu e5’i alarak geri kazanmak ve atı aktif bir kareye getirmek.',
      neden: 'Motor 34.Rad1, 34.f6 ve 34.Ng4’ü eşit görüyor (yaklaşık −2.2/−2.4). Ancak Ng4 f5 piyonunu korumasız bırakır: 34...Bxf5 hem piyonu alır hem g4 atına saldırır.',
      diger: [
        { move: '34.Rad1', text: '34...f6 35.Rxd8+ Rxd8 36.Ng4 ile d-hattında kaleleri değişmek (Motor: −2.21).' },
        { move: '34.f6', text: 'f-piyonunu ileri itip f7’yi sabitlemek: 34...Rhe8 35.Rad1 Bf3 (Motor: −2.21).' },
      ],
    },
    '34b': {
      text: '34...Bxf5: fil f5 piyonunu alır ve g4 atına saldırır.',
      amac: 'İkinci piyonu kazanmak; fil f5’ten h3 piyonunu da destekler.',
      neden: 'Motor 34...Bxf5’i en iyi buluyor (−2.41). 35.Nxe5 ile Beyaz bir piyon geri alacak, ama net sonuçta Siyah yine bir piyon önde kalır ve Beyazın zayıf f-piyonu ortadan kalkar.',
      diger: [
        { move: '34...Bg2', text: '35.Nxe5 Qc7 36.f6 ile f-piyonu canlı kalır (Motor: −1.48).' },
        { move: '34...Bc6', text: '35.Nxe5 Qc7 36.Qf2 Ba4 (Motor: −1.33).' },
      ],
    },
    '35w': {
      text: '35.Nxe5: at e5 piyonunu alır; Beyaz bir piyon geri kazanır.',
      amac: 'Materyal farkını bir piyona indirmek ve atı merkeze yerleştirmek.',
      neden: 'Motor 35.Nxe5’i en iyi buluyor (−2.28). 35.Nf6 Rh6 36.Nd5 Bd3 ise e5 piyonunu bırakır (−2.79).',
      diger: [
        { move: '35.Nf6', text: '35...Rh6 36.Nd5 Bd3 ile Siyah iki piyon önde kalır (Motor: −2.79).' },
        { move: '35.Ne3', text: '35...Bd3 36.Ng4 e4 ile e-piyonu ilerler (Motor: −3.44).' },
      ],
    },
    '35b': {
      text: '35...Qc7: vezir c7’ye döner ve e5 atına baskı yapar.',
      amac: 'e5 atını c7-e5 çaprazından hedef almak ve veziri merkeze, şahın yakınına getirmek.',
      neden: 'Motor 35...Rhf8’i hafifçe tercih ediyor (−2.34’e karşı −2.24). a5’teki vezir oyundan uzaktı; c7’de hem e5’e hem g3’e bakar.',
      diger: [
        { move: '35...Rhf8', text: '36.g4 Be6 37.Re3 Qc7 ile kale f-hattında (Motor: −2.34).' },
        { move: '35...Rh7', text: '36.Qf2 Be6 37.Rad1 Qc7 ile f7’yi korumak (Motor: −1.72).' },
      ],
    },
    '36w': {
      text: '36.Qf2: vezir f2’ye gelir; f5 filine, c5 piyonuna ve f7’ye bakar.',
      amac: 'Fili kovalamak, Qf6 ile f7 ve g5 piyonlarına saldırmak.',
      neden: 'Motor 36.Qf2’yi en iyi buluyor (−2.13). 36.g4? ise 36...Rhe8 37.gxf5 Rxe5 ile e5 atı düşer (−3.70).',
      diger: [
        { move: '36.Re3', text: '36...Be6 37.Qf2 Kb8 38.Rf1 ile kaleyi üçüncü yatayda kullanmak (Motor: −2.53).' },
        { move: '36.g4?', text: '36...Rhe8 37.gxf5 Rxe5 ile e5 atı kaybedilir (Motor: −3.70).' },
      ],
    },
    '36b': {
      text: '36...Be6: fil e6’ya çekilir; c4 piyonuna bakar ve f7’yi korur.',
      amac: 'Fili hem savunmaya (f7) hem saldırıya (c4) hizmet eden bir kareye koymak.',
      neden: 'Motor 36...Be6’yı en iyi buluyor (−2.20). 36...Bg6 37.Qf6 ile g5 ve f7 baskı altına girer (−1.61), 36...Bh7 ise daha da pasiftir (−0.97).',
      diger: [
        { move: '36...Bg6', text: '37.Qf6 Qd6 38.Qxd6 ile vezirler değişir, Siyahın avantajı azalır (Motor: −1.61).' },
        { move: '36...Bh7', text: '37.Qf6 Bg6 38.Nxg6 fxg6 ile Beyaz aktifleşir (Motor: −0.97).' },
      ],
    },
    '37w': {
      text: '37.Rab1: kale b-hattına gelir ve b7’ye bakar.',
      amac: 'Siyah şahına karşı b-hattında oyun aramak.',
      neden: 'Motor 37.Qf6’yı açıkça tercih ediyor (−2.24’e karşı −2.99): 37...Rhg8 38.Nxf7 Qxf7 39.Rxe6 ile Beyaz materyali dengeler. Rab1 b7’yi ancak tek taşla tehdit eder ve Siyahın d-hattında ikilenmesine zaman verir.',
      diger: [
        { move: '37.Qf6', text: '37...Rhg8 38.Nxf7 Qxf7 39.Rxe6 ile Beyaz piyonu geri alır (Motor: −2.24).' },
        { move: '37.Re3', text: '37...Kb8 38.Rf1 Rhf8 ile f-hattını korumak (Motor: −2.78).' },
      ],
    },
    '37b': {
      text: '37...Rd6: kale d6’ya gelir; altıncı yatayı korur ve d-hattında ikilenmeye hazırlanır.',
      amac: 'Kaleleri d6 ve d8’de ikileyip ...Rd2 ya da ...Rd1 ile Beyaz kampına girmek.',
      neden: 'Motor 37...Rhe8 ile eşit görüyor (−2.87/−2.86). d6’daki kale b6 karesini de kontrol eder ve Beyazın b-hattı oyununu frenler.',
      diger: [
        { move: '37...Rhe8', text: '38.Re2 Kb8 39.Rbe1 Ka7 ile şahı köşeye almak (Motor: −2.87).' },
        { move: '37...Kb8', text: '38.Qf6 Rhf8 39.Rb2 Ka8 (Motor: −2.71).' },
      ],
    },
    '38w': {
      text: '38.Rb2: kale b2’ye çekilir; ikinci yatayı korur.',
      amac: 'Siyah kalelerinin d2’ye girmesini önlemek.',
      neden: 'Motor 38.Nf3’ü hafifçe tercih ediyor (−2.97’ye karşı −3.08): at d2 karesini korur ve Ng5 ile e6 filine yönelir. Rb2 ise kalenin b-hattı fikrinden vazgeçilmesi anlamına gelir.',
      diger: [
        { move: '38.Nf3', text: '38...g4 39.Ng5 Rhd8 ile at aktif kalır (Motor: −2.97).' },
        { move: '38.Re2', text: '38...Rhd8 39.Qf3 Rd2 ile Siyah ikinci yataya girer (Motor: −3.29).' },
      ],
    },
    '38b': {
      text: '38...Rhd8: kaleler d-hattında ikilenir.',
      amac: '...Rd1 ya da ...Rd2 ile Beyaz kampına girmek ve arka yatayı tehdit etmek.',
      neden: 'Motor 38...Rhd8’i açık ara en iyi buluyor (−3.25). h8’deki kale h3 piyonunun arkasında işsizdi; d-hattında iki kale tek açık hattın mutlak sahibidir.',
      diger: [
        { move: '38...Re8', text: '39.Reb1 b6 40.Re1 Red8 ile tempo kaybı (Motor: −2.56).' },
        { move: '38...Rg8', text: '39.Reb1 b6 40.a4 (Motor: −2.48).' },
      ],
    },
    '39w': {
      text: '39.Rbe2: kale e2’ye gelir; kaleler e-hattında ikilenir.',
      amac: 'e5 atını desteklemek ve ikinci yatayı korumak.',
      neden: 'Motor 39.a4 ya da 39.Qf3’ü tercih ediyor (−3.30/−3.35’e karşı −3.65). Rbe2 sonrası 39...f6 ile at kovalanınca e2 kalesi c4’ü alan filin hedefi olacak.',
      diger: [
        { move: '39.a4', text: '39...Rd1 40.Re2 Kb8 41.g4 ile a-piyonunu ilerletmek (Motor: −3.30).' },
        { move: '39.Qf3', text: '39...Kb8 40.a4 f5 41.Qe3 ile c4’ü dolaylı korumak (Motor: −3.35).' },
      ],
    },
    '39b': {
      text: '39...f6: f-piyonu e5 atını kovalar.',
      amac: 'Atı merkezden atmak; at gidince e6 filinin c4’e yolu açılır ve e2 kalesi hedef olur.',
      neden: 'Motor 39...f6’yı en iyi buluyor (−4.14). 40.Qxf6 Bg4! sonrası fil e2 kalesine saldırır ve 41.Nxg4 Rxf6 42.Nxf6 ile Siyah veziri kale-fil-piyon karşılığı alır.',
      diger: [
        { move: '39...Kb8', text: '40.Qf3 f6 41.Nc6+ Qxc6 ile benzer sonuç, ama daha karmaşık (Motor: −3.96).' },
        { move: '39...Rd1', text: '40.g4 Kb8 41.a4 ile kaleler değişir (Motor: −3.21).' },
      ],
    },
    '40w': {
      text: '40.Ng6: at g6’ya kaçar; Ne7+ ile şah çekmeyi hedefler.',
      amac: 'Atı kurtarmak ve Siyah şahına yakın bir karede karşı oyun aramak.',
      neden: 'Motor 40.Qxf6’yı biraz tercih ediyor (−3.99’a karşı −4.24): 40...Bg4 41.Nxg4 Rxf6 42.Nxf6 ile Beyaz vezir yerine kale, at ve piyonla kalır. 40.Ng6 sonrası 40...Bxc4 hem piyonu alır hem e2 kalesine saldırır.',
      diger: [
        { move: '40.Qxf6', text: '40...Bg4 41.Nxg4 Rxf6 42.Nxf6 ile Beyaz vezir karşılığı kale ve at alır (Motor: −3.99).' },
        { move: '40.Nf3', text: '40...Bxc4 41.Re8 Qc6 42.Rxd8+ ile c4 yine düşer (Motor: −4.28).' },
      ],
    },
    '40b': {
      text: '40...Bxc4! zayıf c4 piyonu düşer ve fil e2 kalesine saldırır.',
      amac: 'Oyunun başından beri hedef olan c4’ü almak, iki piyon farkına ulaşmak ve tempo kazanmak.',
      neden: 'Motor 40...Bxc4’ü açık ara en iyi buluyor (−4.37); sonraki en iyi 40...Bg4 −2.87. 12...Bxc3+ ile yaratılan zayıflık sonunda düştü. Beyaz terk etti: kale kaçmak zorundadır, Siyahın ikilenmiş kaleleri d-hattından Beyaz kampına girmeye hazırdır ve h3 piyonu Beyaz şahını sıkıştırır.',
      diger: [
        { move: '40...Bg4', text: '41.Ne7+ Kb8 42.Rb2 Be6 ile tekrar e6’ya dönüş (Motor: −2.87).' },
        { move: '40...Qf7', text: '41.Rxe6 Rxe6 42.Qf5 Qxg6 ile karmaşa (Motor: −2.68).' },
      ],
    },
  },
  exercises: [
    { id: 'eks-1', kind: 'tekrar', plan: false, title: 'h-piyonu son adımda',
      source: 'Ehlvest – Kasparov, Linares 1991 (30. hamle)',
      fen: '2k3rr/1p3p2/p1b2n2/q1p1pPp1/2P1P2p/P1P1N3/1QB3PP/R3R2K b - - 3 30',
      prompt: 'Siyah uzun rok yaptı ve g- ile h-piyonlarını ilerletti. Beyaz şahı h1’de, c6 fili ise aynı uzun çapraza bakıyor. Hücum nasıl sürer?',
      hint: 'h4 piyonu bir adım daha atarsa Beyaz şahının önündeki g2 piyonu ne yapacak?',
      line: ['h3'],
      explanation: '**30...h3!** Piyon ...hxg2+ ile tehdit eder. 31.g3 sonrası g2 karesi ve h1-a8 çaprazı zayıflar; maçta hemen 31...Nxe4! 32.Bxe4 Bxe4+ geldi. Acele edilen 30...Nxe4 31.Bxe4 Bxe4 ise şahlı olmaz ve 32.Nd5 ile Beyaz direnebilir. Motor: h3 −2.2, sonraki en iyi 30...Nxe4 −0.8.',
      link: 'Uzun rokun anlamı buydu: g- ve h-piyonları şahı korumak zorunda değil, Beyaz şahına hücum edebilir.' },
    { id: 'eks-2', kind: 'tekrar', plan: false, title: 'Çifte piyonun sonu',
      source: 'Ehlvest – Kasparov, Linares 1991 (40. hamle)',
      fen: '2kr4/1pq5/p2rbpN1/2p3p1/2P5/P1P3Pp/4RQ1P/4R1K1 b - - 1 40',
      prompt: 'Siyah bir piyon önde ve kaleleri d-hattında. Beyazın atı g6’ya kaçtı. Oyunun başından beri zayıf olan Beyaz piyonu hangisi?',
      hint: 'e6 fili hem bir piyon alıp hem de bir kaleye saldırabilir.',
      line: ['Bxc4'],
      explanation: '**40...Bxc4!** 12...Bxc3+ ile yaratılan çifte piyonlardan c4 düşer ve fil e2 kalesine saldırır. Beyaz terk etti. Motor: Bxc4 −4.2, sonraki en iyi 40...Bg4 −2.9.',
      link: 'Kasparov’un 12. hamlede fili atla değişmesinin uzun vadeli kazancı: sabit c4 piyonu sonunda düştü.' },
    { id: 'eks-3', kind: 'transfer', plan: false, title: 'h3 ile g-hattını açmak',
      source: 'Valiente – Larsen, GEBA turnuvası, Buenos Aires 1991 (27. hamle)',
      fen: '1kb3rr/pp6/8/2N5/2PppP1p/8/PP3PP1/2R1R1K1 b - - 0 27',
      prompt: 'Vezirler değişti ama Siyahın kaleleri g- ve h-hatlarında, Beyaz şahı g1’de. Beyazın atı e4 piyonuna saldırıyor. Siyah ne yapmalı?',
      hint: 'h-piyonu bir adım ilerlerse g2 piyonu iki taraftan saldırı altında kalır.',
      line: ['h3', 'Nxe4', 'Rxg2+'],
      explanation: '**27...h3!** 28.Nxe4 Rxg2+ ve kale şah çekerek ikinci yataya girer; ...Bg4 ile fil de hücuma katılır. 28.g3 h2+! daha da kötüdür (motor −8.6). Motor: h3 −3.9, sonraki en iyi 27...Bh3 −0.7.',
      link: 'Kasparov 30...h3 ile Beyaz şahının önündeki piyonları zayıflattı; Larsen aynı ilerleyişle g-hattını kalesine açtı.' },
    { id: 'eks-4', kind: 'transfer', plan: false, title: 'Uzun çaprazda e4 alımı',
      source: 'Browne – Polugayevski, Las Palmas 1974 (29. hamle)',
      fen: '2r1rbk1/1bq2p1p/p4Pp1/1pnP2P1/4B3/P1N2N1Q/1PP4P/4RR1K b - - 0 29',
      prompt: 'Beyaz şahı h1’de, Siyahın b7 fili uzun çaprazda. Beyazın e4 fili bu çaprazı kapatıyor ve d5 piyonunu koruyor. Hamle Siyahta.',
      hint: 'e4 karesindeki engeli kaldırırsanız b7 fili neye ulaşır?',
      line: ['Nxe4', 'Rxe4', 'Rxe4'],
      explanation: '**29...Nxe4! 30.Rxe4 Rxe4 31.Nxe4 Bxd5** ve uzun çapraz açılır: b7 fili f3 atına ve h1 şahına bakar. Motor: Nxe4 −3.6, sonraki en iyi 29...Qd8 −1.5.',
      link: 'Kasparov’un 31...Nxe4’ünde de şah h1’de, fil uzun çaprazdaydı; at e4’ü alınca fil çaprazı açtı.' },
  ],
};
