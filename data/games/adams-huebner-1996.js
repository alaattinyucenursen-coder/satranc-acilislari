// Adams – Hübner, Hoogovens turnuvası, Wijk aan Zee 1996 (11. tur). Kaynak: PgnMentor (Adams.pgn).
export default {
  id: 'adams-huebner-1996',
  theme: 'd5 kırılması ve d7’ye yürüyen piyon',
  white: 'Michael Adams', black: 'Robert Hübner',
  whiteShort: 'Adams', blackShort: 'Hübner',
  event: 'Hoogovens turnuvası', site: 'Wijk aan Zee', year: 1996, eco: 'B22',
  variation: 'Sicilya Alapin, 2...d5 3.exd5 Qxd5 4.d4 Nf6 5.Nf3 Bg4',
  result: '1-0',
  pgn: `1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Nbd2 Nc6 7. Bc4 Bxf3 8. gxf3 Qg5 9. Ne4 Qf5 10. Qe2 e6 11. Ng3 Qh3 12. d5 Nd8 13. Bb5+ Nd7 14. Bf4 a6 15. Bxd7+ Kxd7 16. O-O-O Ke8 17. Rhe1 Be7 18. d6 Bf6 19. d7+ Kf8 20. Rd5 g6 21. Bd6+ Kg8 22. Nh5 Bg7 23. Rxc5 Nc6 24. Rxc6 bxc6 25. Qxa6 Bh6+ 26. f4 Rd8 27. Qc8 Qh4 28. Bc7 Rf8 29. d8=Q Qxh5 30. Qxf8+ Bxf8 31. Bd6 1-0`,

  summary: 'Oyun, Hoogovens 1996’nın 11. turunda (26 Ocak 1996) oynandı ve 31 hamlede **Beyazın (Adams) galibiyetiyle** bitti. Alapin’in 2...d5 kolunda Hübner 7...Bxf3 ile f3 atını alıp Beyazın piyon yapısını bozdu; Adams vezir değişimine razı olmayıp 8.gxf3 ile dengesiz bir oyun seçti. Motor bu anda Siyahı biraz daha iyi görüyordu (8...Qf5 ile −0.6), ama Hübner veziriyle g5, f5 ve h3 arasında gidip gelerek üç tempo kaybetti ve şahını merkezde bıraktı. Adams bunu **12.d5!** ile cezalandırdı: e6 piyonu Qe2’nin e-hattı boyunca e8’deki şaha bağlı olduğu için d5’i alması kuraldışıydı. Ardından 13.Bb5+, 15.Bxd7+ ve 16.O-O-O ile Siyahın şahını d-hattının karşısında yakaladı, d-piyonunu d6’ya ve şah çekerek **19.d7+** ile yedinci yataya sürdü. Siyahın şahı g8’e, h8 kalesi oyun dışına itildi. Son bölümde Adams d8 karesinin bekçilerini tek tek ortadan kaldırdı: **24.Rxc6!** ile atı aldı, 27.Qc8 ve 28.Bc7 ile d8’e ikinci ve üçüncü kez saldırdı, 29.d8=Q ile piyonu vezire çıkardı ve 31.Bd6 ile f8 filini bağlayarak Hübner’i terke zorladı.',
  intro: '**2.c3 (Alapin)** Sicilya’ya karşı en sağlam “anti-Sicilya” silahlarındandır: Beyaz 3.d4 ile tam bir piyon merkezi kurmak ister ve ...cxd4 gelirse cxd4 ile alır. Wikipedia’nın Alapin maddesinde Sveşnikov, Rozentalis, Tiviakov, Pavasović ve Sermek bu açılışın sürekli savunucuları olarak anılır. Siyahın iki ana cevabı 2...Nf6 ve 2...d5’tir. **2...d5 3.exd5 Qxd5** kolunda Siyah vezirini erken oyuna sokar; normalde bu tehlikelidir, ama c3 piyonu b1 atının c3’e gelip vezire tempo kazanmasını engellediği için vezir d5’te rahat durur. 4.d4 Nf6 5.Nf3 sonrası **5...Bg4** en canlı cevaplardandır: fil f3 atını bağlar, d4’e baskıyı artırır ve gerekirse ...Bxf3 ile Beyazın şah kanadı yapısını bozar. Beyaz burada 6.Be2 (sakin), 6.dxc5 (vezir değişimiyle bir piyon kazanan keskin oyunsonu yolu) ya da bu oyundaki gibi 6.Nbd2 ile Bc4’ü hazırlayıp vezire tempo kazanmayı seçebilir. Bu oyun, bir oyuncunun veziriyle tempo kaybedip şahını merkezde bırakmasının bu açılışta ne kadar çabuk cezalandırılabileceğini gösteren öğretici bir örnektir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Tempo kazanmak:** Nbd2-e4-g3 ve Bc4 ile Siyahın erken çıkan vezirine üst üste saldırıp gelişimde öne geçmek (Siyah 8–11. hamlelerde vezirini üç kez oynamak zorunda kaldı).',
      '**gxf3 yapısını kullanmak:** 8.gxf3 ile vezirleri tahtada tutmak; f3 piyonu e4 ve g4 karelerini kontrol eder, yarı açık g-hattı da ileride Rg1+ gibi kaynaklar verir (22...gxh5? 23.Rg1+).',
      '**Bağlı piyondan yararlanıp d5 kırılması:** Qe2 ile e-hattına yerleşip e6 piyonunu e8’deki şaha bağlamak; böylece 12.d5 alınamaz ve c6 atı kovalanır.',
      '**Şahı merkezde tutmak:** 13.Bb5+ ve 15.Bxd7+ ile Siyahın şahını rok yapamaz duruma düşürmek; uzun rokla d-hattını, Rhe1 ile e-hattını almak.',
      '**İleri geçer piyonu yürütmek:** d-piyonunu tempo kazanarak d6 (file saldırı) ve d7+ (şah) ile yedinci yataya getirmek; d7 piyonu e8 ve c8 karelerini tutar, Siyahın şahını f8-g8’e iter.',
      '**d8’in bekçilerini yok etmek:** 24.Rxc6 ile kale vererek d8’i savunan atı almak, sonra Qc8 ve Bc7 ile d8’e üst üste baskı kurup piyonu vezire çıkarmak.',
      '**Son taktik:** taş farkı dengelendiğinde bile 31.Bd6 ile Qc8’in 8. yatay boyunca kurduğu bağı kullanıp f8 filini kazanmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**Merkeze erken karşılık:** 2...d5 ve 3...Qxd5 ile Beyazın ideal e4-d4 merkezini kurmasını engellemek.',
      '**d4’e baskı:** 5...Bg4 ve 6...Nc6 ile d4 piyonuna yüklenmek; gerektiğinde ...Bxf3 ile savunucuyu ortadan kaldırmak.',
      '**Yapıyı bozmak:** 7...Bxf3 sonrası 8.gxf3 ile Beyazın şah kanadında çiftlenmiş, yalnız piyonlar oluştu; doğru oynansaydı (8...Qf5!, 8...Qh5) Siyah f3 ve h2 zayıflıklarına baskı yapıp uzun roka geçebilirdi.',
      '**Veziri h3’e getirmek:** Qh3 ile h2’ye bakmak ve f1 karesini kontrol ederek Beyazın kısa rok yapmasını önlemek. Bu plan gerçekleşti ama fazla tempoya mal oldu.',
      '**Gelişimi tamamlamak:** ...e6, ...Be7 ve şahı güvenli bir yere götürmek. Hübner bunun için zaman bulamadı; 12.d5’ten sonra şah merkezde kaldı.',
      '**Sonradan savunma:** ...g6 ve ...Kg8 ile şaha yer açmak, ...Nc6 ve ...Rd8 ile d8 karesini savunmak; ama h8 kalesi oyun dışında kaldığı için savunma bir taş eksik yapıldı.',
    ] },
  },
  critical: [
    { move: '8w', title: '8.gxf3: Adams vezirleri tahtada tutuyor', text: 'Doğal 8.Qxf3 Qxf3 9.Nxf3 eşit bir oyunsonuna götürüyordu (Motor: +0.1). Adams bunun yerine 8.gxf3 ile piyon yapısını bozdu ama vezirleri tahtada tuttu, e4-g4 karelerini kontrol altına aldı ve g-hattını yarı açtı. Motor bu kararı objektif olarak biraz şüpheli buluyor (Motor: −0.6, en iyi savunmayla), yani Adams kazanma şansı için risk aldı. Sonraki hamlede Hübner’in hatası bu riski haklı çıkardı.' },
    { move: '8b', title: '8...Qg5? vezir yine yürüyor', text: 'Bc4’ün saldırısındaki vezir için doğru kare 8...Qf5’ti (Motor: −0.6): vezir f3 piyonuna ve c2-h7 çaprazına bakar, 9.dxc5 O-O-O ile Siyah d-hattından baskı kurar. 8...Qh5 de eşitliği tutuyordu (Motor: ≈0.0). 8...Qg5 ise 9.Ne4 ile hemen tempo kaybettirdi; at hem veziri hem f6 atını vurdu ve oyun Beyaza döndü (Motor: +1.1/+1.2).' },
    { move: '11b', title: '11...Qh3: dördüncü vezir hamlesi', text: 'Ng3’ün saldırısı altında vezirin başka iyi karesi yoktu: 11...Qg6? 12.d5! (Motor: +4.8) ve 11...Nxd4? 12.cxd4 (Motor: +5.7) çok daha kötüydü. Qh3 h2’ye bakar ve f1 karesini tutarak Beyazın kısa rokunu engeller. Ama Siyah onbir hamlede vezirini dört kez oynamış, şah kanadını hiç geliştirmemişti; şahı e8’de kaldı (Motor: +2.8).' },
    { move: '12w', title: '12.d5! merkez kırılması', text: 'Alapin’in d4 merkezinin asıl amacı burada ortaya çıkar. e6 piyonu Qe2’nin e-hattı boyunca e8’deki şaha **mutlak bağlıdır**, yani 12...exd5 kurallara göre oynanamaz. c6 atı saldırı altındadır ve d-hattı açılmak üzeredir. Motor: 12.d5 +3.0; sakin 12.Bb5 ya da 12.dxc5 ise yaklaşık eşitlik (−0.1) verir. Tek hamlelik bir fark, üç piyonluk bir avantaj.' },
    { move: '12b', title: '12...Nd8? at geri çekiliyor', text: 'At e6 ve f7’yi savunur, ama d8’de hem a8 kalesiyle şahın bağlantısını keser hem de şahın d8’e kaçışını kapatır. Motorun tercihi 12...Na5’ti: 13.Bb5+ Kd8 14.dxe6 Qxe6 15.Bf4 Qxe2+ 16.Bxe2 ile vezirler değişir ve Siyah zor ama savunulabilir bir oyunsonuna girer (Motor: +3.0). 12...Nd8 sonrası Beyazın saldırısı vezirlerle devam eder (Motor: +4.1).' },
    { move: '15w', title: '15.Bxd7+ ve 16.O-O-O', text: 'Fil geri çekilmek yerine d7 atını alır; Kxd7 sonrası şah d-hattındadır ve 16.O-O-O ile karşısına kale gelir. 17.dxe6+ açarak şah tehdidi yüzünden şah e8’e geri döner ve e6 piyonu bu kez Rhe1 ile yine bağlanır. Motor: 15.Bxd7+ +4.2, 15.Ba4 +2.0, 15.Bd3 +1.8.' },
    { move: '19w', title: '19.d7+ piyon yedinci yatayda', text: 'Piyon şah çekerek d7’ye ulaşır, e8 ve c8 karelerini tutar. 19...Ke7? 20.Qc4 ile c5’i alıp c8’e girer (Motor: +6.8); bu yüzden şah f8’e gider ve h8 kalesi kendi şahının arkasında hapis kalır. Bu andan sonra Siyah fiilen bir kale eksik savunur.' },
    { move: '24w', title: '24.Rxc6! d8’in bekçisini almak', text: 'c6’daki at d8 karesini koruyan tek taştı. Adams kaleyi ata verir: 24...bxc6 25.Qxa6 sonrası vezir hem a8 kalesine saldırır hem de c8’e gelip d-piyonunu destekler. Motor: 24.Rxc6 +4.8; 24.Nxg7 +4.0 ve 24.f4 +4.0 de kazanır ama çok daha yavaştır.' },
    { move: '29w', title: '29.d8=Q ve 31.Bd6', text: 'Uzun yürüyüş biter. 29...Rxd8 30.Qxd8+ Qxd8 31.Bxd8 gxh5 sonrası Beyaz bir taş fazlasıyla kazanır (Motor: +5.7). Hübner 29...Qxh5 ile atı aldı; 30.Qxf8+ Bxf8 31.Bd6! sonrası f8 fili Qc8’in 8. yatay boyunca kurduğu bağ yüzünden kaybediliyor (Motor: +5.6) ve Siyah terk etti.' },
  ],
  lessons: [
    'Alapin’in 2...d5 kolunda vezirle alan Siyah, vezirini mümkün olduğunca az oynamalıdır: Hübner 3–11. hamlelerde veziriyle dört hamle yaptı (Qxd5, Qg5, Qf5, Qh3) ve şah kanadını hiç geliştiremedi.',
    'Rakibin şahı merkezdeyken merkez piyonunun kırılması (burada 12.d5) en güçlü silahtır; özellikle karşıdaki piyon **bağlıysa** bu kırılma bedavaya gelir.',
    'Piyon yapısını bozan bir değişim (8.gxf3) vezirler tahtadayken gelişim ve hatlar karşılığında kabul edilebilir; ama bu objektif bir risktir ve rakip doğru oynarsa ters tepebilir.',
    'İleri geçer piyonu tempo kazanarak yürütün: 18.d6 file, 19.d7+ şaha saldırarak ilerledi. Şah çekerek gelen piyon rakibin şahını kötü karelere iter ve kalesini oyuna sokamaz hale getirir.',
    'Piyonun vezir olacağı kareyi savunan taşları tek tek ortadan kaldırın; gerekirse 24.Rxc6 gibi kale vermek bile değer.',
    'Bir karede “saldırı – savunma sayısı” hesabı yapın: d8’e Beyaz Qc8, Bc7 ve d7 piyonuyla saldırdı, Siyah ise sadece kale ve vezirle savunabildi.',
    'Kazanılmış pozisyonda bile son taktiği arayın: 31.Bd6, Qc8’in 8. yatayda kurduğu bağı kullanarak tek hamlede maddi dengeyi Beyaz lehine bozdu.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 1-0: Michael Adams (Beyaz) kazandı. 31.Bd6 sonrası f8 fili Qc8’e karşı g8’deki şaha bağlıydı ve 32.Bxf8 tehdidi vardı; 31...Kg7 de 32.Be5+ ile vezir ya da h8 kalesi kaybettirdiği için Hübner terk etti (Motor: +5.6). TWIC’in turnuva kayıtlarına göre oyun 26 Ocak 1996’da, 11. turda oynandı.' },
    { q: 'Adams neden 8.Qxf3 yerine 8.gxf3 oynadı?', a: '8.Qxf3 Qxf3 9.Nxf3 sonrası vezirler değişir ve oyun eşit, sakin bir oyunsonuna döner (Motor: +0.1). 8.gxf3 ile Adams vezirleri tahtada tuttu, f3 piyonuyla e4 ve g4 karelerini kontrol altına aldı ve Siyahın açıkta duran vezirine Ne4-g3 ile tempo kazanma şansını korudu. Motor bunu en iyi savunmaya karşı biraz şüpheli buluyor (−0.6), yani bu bir kazanma girişimiydi; 8...Qg5? sonrası işe yaradı.' },
    { q: 'Hübner’in asıl hatası neydi?', a: '8...Qg5? vezire yeni bir tempo kaybettirdi: 9.Ne4 hem veziri hem f6 atını vurdu (Motor: −0.6’dan +1.2’ye). Ardından 9...Qf5 (9...Qh5 daha iyiydi, +1.1) ve 10...e6 (10...Nxe4 11.fxe4 Qh3 ile +1.9) ile Siyah her hamlede biraz daha geriledi. Asıl sorun hamlelerin toplamıydı: vezir dört kez yer değiştirirken f8 fili ve h8 kalesi hiç oynamadı.' },
    { q: '12...exd5 neden oynanamadı?', a: 'e6 piyonu Beyazın e2’deki veziriyle e8’deki Siyah şahı arasında duruyordu. Piyon d5’e giderse e-hattı açılır ve vezir şaha şah çekerdi; kendi şahını şaha açan hamle kuraldışıdır. Bu “mutlak bağ” 12.d5’i bedava yaptı ve c6 atını kaçmaya zorladı.' },
    { q: '12...Nd8 yerine ne oynanmalıydı?', a: 'Motor 12...Na5’i öneriyor: 13.Bb5+ Kd8 14.dxe6 Qxe6 15.Bf4 Qxe2+ 16.Bxe2 ile vezirler değişir; Siyahın şahı d8’de kalır ama saldırı biter ve oyun +3.0 civarında, zor ama direnilebilir bir oyunsonudur. 12...Nd8 ise vezirleri tahtada tuttu, şahın d-hattından kaçışını kapattı ve 13.Bb5+ ile Beyazın saldırısını hızlandırdı (+4.1).' },
    { q: 'Beyaz neden kısa değil uzun rok yaptı?', a: 'Siyahın h3’teki veziri f1 karesini kontrol ediyordu, bu yüzden kısa rok zaten kurallara göre mümkün değildi (şah f1’den geçemez). Uzun rok hem şahı güvenli tarafa götürdü hem de kaleyi d-hattına, Siyahın d7’deki şahının karşısına getirdi; 17.dxe6+ tehdidiyle şah e8’e geri dönmek zorunda kaldı.' },
    { q: 'd-piyonu nasıl d8’e kadar yürüyebildi?', a: 'Her adım tempoyla geldi: 18.d6 e7 filine saldırdı, 19.d7+ şah çekti. d7’deki piyon c8 ve e8 karelerini tuttuğu için Siyahın kaleleri arka yatayda birleşemedi; h8 kalesi g8’e kaçan şahın arkasında hapis kaldı. Son aşamada d8’i savunan at 24.Rxc6 ile alındı, sonra 27.Qc8 ve 28.Bc7 ile d8’e yeni saldırılar eklendi.' },
    { q: '20.Rd5 sonrası 20...exd5 neden alınamadı?', a: '20...exd5?? 21.Qe8# ile mat olur: e-hattı açılınca e2 veziri e8’e gelir, bu kareyi d7 piyonu ve e1 kalesi destekler, şahın kaçacağı g7 karesinde de kendi piyonu durur. Motor 20.Bd6+ ya da 20.Qe3’ü biraz daha güçlü buluyor (+4.1/+4.2’ye karşı oyun hamlesi +3.2), ama Rd5 de c5 piyonunu alıp c-hattına geçme fikriyle tutarlıydı.' },
    { q: 'Siyah son bölümde bir yerde kurtulabilir miydi?', a: 'Hayır; 12. hamleden sonra motor hiçbir aşamada +3’ün altına inmiyor. Daha dirençli yollar vardı: 25...Bh6+ yerine 25...Rd8 (Motor: +4.8’e karşı +5.8) ya da 29...Qxh5 yerine 29...Rxd8 30.Qxd8+ Qxd8 31.Bxd8 (taş eksiğiyle, +5.7). Ama 27...Qxh5? gibi açgözlü bir hamle 28.Qxd8+ ile beş hamlede mat olurdu.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: şah piyonu iki kare ilerleyerek merkezi (d5 ve f5 karelerini) kontrol eder ve f1 filiyle vezire yol açar.',
      amac: 'Merkezde yer kaplamak ve hızlı gelişim. Adams kariyeri boyunca hemen hep 1.e4 oynamış, açık ve yarı açık oyunlarda uzman bir oyuncudur.',
      neden: 'Bu oyunda 1.e4’ün asıl karşılığı Sicilya’ya karşı c3 sistemiyle d4 merkezi kurmak olacak. Motor bütün ana ilk hamleleri birbirine yakın görür.',
      diger: [
        { move: '1.d4', text: 'Vezir piyonu açılışları; daha kapalı, konumsal oyunlar (Motor: +0.25).' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç, çoğunlukla d4 sistemlerine geçer (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine yan taraftan baskı kurar.',
      amac: 'Simetrik olmayan bir yapıyla kazanma şansı aramak: Siyah ileride c-piyonunu d-piyonuyla değiştirip merkezde bir piyon fazlası (iki merkez piyonu) elde etmek ister.',
      neden: 'Hübner geniş bir repertuvara sahip, derin hazırlanan bir oyuncuydu; Sicilya ona karşı oyunu dengesiz tutma imkânı verir. Beyaz 2.c3 ile bu dengesizliği azaltmaya çalışacak.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar; Ruy Lopez ve İtalyan yapıları (Motor: +0.24).' },
        { move: '1...e6', text: 'Fransız Savunması; Siyah d5 ile merkezi geri ister (Motor: +0.35).' },
      ],
    },
    '2w': {
      text: '2.c3: Alapin Varyantı. Beyaz bir sonraki hamlede d4 oynamayı ve ...cxd4’e cxd4 ile karşılık vermeyi hazırlar.',
      amac: 'e4 ve d4 piyonlarından oluşan klasik bir merkez kurmak; açık Sicilya’nın keskin teorisine (Najdorf, Dragon, Sveşnikov) girmeden oynamak.',
      neden: 'Açık Sicilya’da 2.Nf3 ve 3.d4 sonrası Beyaz d4 piyonunu atla değişir ve Siyah iki merkez piyonuyla kalır. 2.c3 bunu önler. Bedeli, b1 atının doğal c3 karesini kaybetmesidir; bu yüzden at bu oyunda d2’den gelişecek.',
      diger: [
        { move: '2.Nf3', text: 'Ana yol; 3.d4 ile açık Sicilya (Motor: +0.38). Siyahın en iyi hazırlandığı alan.' },
        { move: '2.Nc3', text: 'Kapalı Sicilya; daha yavaş, g3-Bg2 ya da f4 sistemleri (Motor: +0.35).' },
        { move: '2.d4', text: 'Smith-Morra kumarına (2...cxd4 3.c3) geçebilir; piyon karşılığı gelişim (Motor: +0.25).' },
      ],
    },
    '2b': {
      text: '2...d5: Siyah merkezde hemen karşılık verir ve e4 piyonuna saldırır.',
      amac: 'Beyazın d4’ü oynayıp ideal merkezi kurmasına izin vermemek; e4 piyonunu değiştirip merkezi sadeleştirmek.',
      neden: 'c3 piyonu b1 atının c3’e gelmesini engellediği için Siyah vezirle d5’te alabilir ve vezir orada kolayca kovalanmaz. Wikipedia 2...d5’i 2...Nf6’nın yanında ana cevap olarak anar.',
      diger: [
        { move: '2...Nf6', text: 'Diğer ana yol: 3.e5 Nd5 ile Alekhine’e benzer yapılar (Motor yaklaşık eşit).' },
        { move: '2...Nc6', text: 'Esnek; 3.d4 d5 4.exd5 Qxd5 ile çoğu zaman aynı yapıya döner (Motor: +0.19).' },
        { move: '2...e6', text: 'Fransız benzeri yapılara yönelir; 3.d4 d5 4.e5 ile İlerleme Fransız’ına geçebilir (Motor: +0.25).' },
      ],
    },
    '3w': {
      text: '3.exd5: Beyaz d5’te değişir.',
      amac: 'Siyahın vezirini erken oyuna çekmek ve ardından ona taşlarla tempo kazanmak.',
      neden: '3.e5 Fransız İlerleme yapısına benzer bir oyun verir ama Siyahın c8 fili dışarıda kalabilir (...Bf5 / ...Bg4). Değişim en doğal ve en iyi yoldur.',
      diger: [
        { move: '3.e5', text: 'Kapalı merkez; Siyah 3...Nc6 ve ...Bf5 ile rahat gelişir (Motor: −0.12).' },
        { move: '3.Bb5+', text: 'Filleri değiştirmeye yöneliktir; Siyah 3...Bd7 ile rahat eşitler (Motor: −0.1).' },
      ],
    },
    '3b': {
      text: '3...Qxd5: Siyah vezirle alır; vezir d5’ten merkezi ve d4 karesini kontrol eder.',
      amac: 'Merkezi korumak ve Beyazın d4 piyonuna baskıyı hemen başlatmak.',
      neden: 'Normal açılışlarda erken vezir hamlesi Nc3 ile tempo kaybettirir, ama burada c3 karesi Beyazın kendi piyonuyla dolu. 3...Nf6 piyon kumarıdır ve Siyahın yeterli karşılık alıp almadığı tartışmalıdır.',
      diger: [
        { move: '3...Nf6', text: 'Piyonu geri almayı erteler; 4.Bb5+ Bd7 5.Bxd7+ Qxd7 ile Beyaz biraz rahat (Motor: +0.39).' },
      ],
    },
    '4w': {
      text: '4.d4: Beyaz merkez piyonunu kurar.',
      amac: 'c3 sisteminin asıl hedefi olan d4 merkezini oturtmak; ...cxd4 gelirse cxd4 ile iki piyonlu merkezi ya da tek kalmış d4 piyonunu almak.',
      neden: 'Önce 4.Nf3 de oynanabilirdi, sonuç çoğunlukla aynı yapıya döner. 4.d4 doğrudan merkezi talep eder.',
      diger: [
        { move: '4.Nf3', text: 'Eşdeğer hamle sırası; 4...Nc6 5.d4 ile aynı yapıya gelir (Motor: +0.28).' },
        { move: '4.Na3', text: 'Atı a3-c4/b5 yoluyla oyuna sokmayı hedefler (Motor: +0.25).' },
      ],
    },
    '4b': {
      text: '4...Nf6: at gelişir, d5 vezirini destekler ve e4 karesini kontrol eder.',
      amac: 'Gelişimi sürdürmek ve hangi yapıya gireceğine (…e6 ya da …Bg4) sonra karar vermek.',
      neden: '4...cxd4 erken bir karar olurdu ve 5.cxd4 sonrası Beyaz rahat Nc3’e tempo kazanabilir. 4...Nc6 de çok oynanır; Wikipedia bu iki hamleyi ana yollar olarak anar.',
      diger: [
        { move: '4...Nc6', text: 'Ana alternatif; 5.Nf3 ya da 5.dxc5 ile oynanır (Motor: +0.32).' },
        { move: '4...cxd4', text: '5.cxd4 sonrası Nc3’e tempo verir (Motor: +0.39).' },
      ],
    },
    '5w': {
      text: '5.Nf3: at gelişir ve d4 piyonunu destekler.',
      amac: 'Merkezi korumak ve şah kanadını rok için hazırlamak.',
      neden: 'En doğal gelişim. 5.dxc5 vezir değişimine yönelir ve sonuç daha kurudur; 5.Na3 ise çok iddiasızdır.',
      diger: [
        { move: '5.dxc5', text: '5...Qxc5 ve Siyah rahat gelişir (Motor: +0.13).' },
        { move: '5.Na3', text: 'Nb5 fikriyle ilginç ama zararsız (Motor: +0.02).' },
      ],
    },
    '5b': {
      text: '5...Bg4: fil f3 atını bağlar ve onun d4’ü savunmasını tehdit altına alır.',
      amac: 'd4 piyonuna baskıyı artırmak; gerekirse ...Bxf3 ile Beyazın piyon yapısını bozmak. Fil pasif e6 piyonunun arkasında hapsolmadan oyuna girer.',
      neden: '5...e6 daha sağlamdır ama c8 filini kapatır. Wikipedia 5...e6 ve 5...Bg4’ü bu pozisyondaki iki ana hamle olarak sayar. Bg4’ün dezavantajı vezir kanadının (b7) zayıflamasıdır; Qb3 fikirleri bundan doğar.',
      diger: [
        { move: '5...e6', text: 'Sağlam; fil e7’ye gelişir, Siyah tek kalmış d-piyonu yapılarına hazırdır (Motor: +0.42).' },
        { move: '5...Nc6', text: 'Önce at; 6.dxc5 Qxd1+ 7.Kxd1 e5 ile keskin oyunsonu (Motor: +0.28).' },
      ],
    },
    '6w': {
      text: '6.Nbd2: at d2’ye gelişir, f3 atını destekler ve Bc4 hamlesine yol açar.',
      amac: 'Bc4 ile d5 vezirine tempo kazanmak; ...Bxf3’e de Nxf3 ile yapı bozulmadan alma imkânını hazırlamak.',
      neden: 'c3 karesi dolu olduğu için atın doğal yeri d2’dir. 6.Be2 daha sakin, 6.dxc5 ise chess.com’daki c3 Sicilya makalesinde incelenen 6...Qxd1+ 7.Kxd1 keskin oyunsonuna yönelir. Adams vezirleri tahtada tutan yolu seçti.',
      diger: [
        { move: '6.Be2', text: '6...e6 7.h3 Bh5 8.O-O ile sakin, klasik oyun (Motor: +0.24).' },
        { move: '6.dxc5', text: '6...Qxd1+ 7.Kxd1 e5 8.b4 ile Beyaz piyonu tutmaya çalışır; makaleye göre pratikte Beyaz daha çok kazanır ama Siyah iyi hazırlıkla tutabilir (Motor: +0.31).' },
      ],
    },
    '6b': {
      text: '6...Nc6: at gelişir ve d4’e üçüncü kez baskı kurar (c5 piyonu, d5 veziri ve c6 atı).',
      amac: 'd4 piyonunu düşürme tehdidiyle Beyazı savunmaya zorlamak.',
      neden: 'Motor bu hamleyi en iyi buluyor. 6...e6 da iyidir, ama 6...Nbd7 7.Qb3 ile b7’yi ve d5 vezirini zorlar.',
      diger: [
        { move: '6...e6', text: '7.Qa4+ Nbd7 8.Bc4 gibi yollarla oyun dengede (Motor: +0.35).' },
        { move: '6...Nbd7', text: '7.Qb3 ile b7 baskısı; Siyah biraz pasif (Motor: +0.45).' },
      ],
    },
    '7w': {
      text: '7.Bc4: fil d5’teki Siyah vezirine saldırır.',
      amac: 'Tempo kazanarak gelişmek ve f7’ye bakan aktif bir çapraz almak.',
      neden: 'Motor 7.dxc5’i biraz daha iyi buluyor (+0.34; 7...e5 8.Bc4 Qd7), çünkü 7.Bc4 Siyaha ...Bxf3 ile vezir değişimine gitme imkânı verir. Ama Bc4 en doğal gelişim hamlesi ve Adams’ın daha sonra 8.gxf3 ile oyunu dengesizleştirmesini mümkün kıldı.',
      diger: [
        { move: '7.dxc5', text: '7...e5 8.Bc4 Qd7 9.h3 ile Beyaz piyonu tutmaya çalışır (Motor: +0.34).' },
        { move: '7.h3', text: '7...Bxf3 8.Nxf3 e6 ile Siyah rahat (Motor: −0.02).' },
      ],
    },
    '7b': {
      text: '7...Bxf3: Siyah vezirini kaçırmadan önce f3 atını alır; vezir hâlâ Bc4’ün saldırısı altında.',
      amac: 'Ara hamleyle Beyazı f3’te almaya zorlamak: ya vezirler değişir ya da Beyazın piyon yapısı bozulur.',
      neden: 'Doğrudan vezir hamleleri kötüydü: 7...Qh5? 8.Qb3 b7 ve f7’ye çift saldırı yapar (Motor: +0.82). Bxf3 en iyi hamle; Motor: +0.06.',
      diger: [
        { move: '7...Qd7', text: '8.dxc5 e5 ile Siyah biraz pasif (Motor: +0.33).' },
        { move: '7...Qh5', text: '8.Qb3 ile b7 düşer (Motor: +0.82).' },
      ],
    },
    '8w': {
      text: '8.gxf3: Adams g-piyonuyla alır. Vezirler tahtada kalır, d5 veziri hâlâ saldırı altındadır.',
      amac: 'Kazanma şansı için oyunu dengesiz tutmak: f3 piyonu e4 ve g4 karelerini kontrol eder, g-hattı yarı açılır, d2 atı e4’e çıkıp vezire yeni saldırılar yapmaya hazırdır.',
      neden: '8.Qxf3 Qxf3 9.Nxf3 sonrası vezirsiz, eşit bir oyun kalır (Motor: +0.1). Adams yapısını bozma pahasına vezirleri tuttu. Motor bu kararı objektif olarak biraz riskli buluyor (−0.6, 8...Qf5! ile), çünkü h2 ve f3 zayıflar ve Beyazın şahı rok yapamazsa açıkta kalabilir.',
      diger: [
        { move: '8.Qxf3', text: '8...Qxf3 9.Nxf3 cxd4 10.Nxd4 ile eşit oyunsonu (Motor: +0.1).' },
        { move: '8.Bxd5', text: '8...Bxd1 9.Bxc6+ bxc6 10.Kxd1 ile vezirler gider, eşitlik (Motor: +0.08).' },
        { move: '8.Qb3', text: '8...Na5 9.Qb5+ Qd7 ile karmaşık ama dengeli (Motor: +0.07).' },
      ],
    },
    '8b': {
      text: '8...Qg5?: vezir g5’e çekilir; g-hattına ve d2 atına bakar.',
      amac: 'Beyazın açık şah kanadına baskı yapmak ve kısa roku zorlaştırmak.',
      neden: 'Hata. g5’teki vezir Ne4 ile hemen kovalanabilir; Siyah yeni bir tempo kaybeder. 8...Qf5 f3 piyonuna ve c2-h7 çaprazına bakar ve 9.dxc5 O-O-O ile Siyah d-hattından iyi oyun alır (Motor: −0.6). 8...Qh5 de f3’e baskı yapar (Motor: ≈0.0). Oyun hamlesiyle değerlendirme +1.2’ye çıkar.',
      diger: [
        { move: '8...Qf5', text: '9.dxc5 O-O-O 10.Qa4 e6 ile Siyah gelişimde önde, Beyazın yapısı zayıf (Motor: −0.6).' },
        { move: '8...Qh5', text: '9.Qb3 O-O-O 10.Bxf7 g6 ile karmaşık denge (Motor: ≈0.0).' },
        { move: '8...Qd7', text: 'Daha pasif; 9.dxc5 O-O-O 10.Qe2 (Motor: +0.3).' },
      ],
    },
    '9w': {
      text: '9.Ne4: at merkeze sıçrar ve aynı anda g5 vezirine ve f6 atına saldırır; c5 de tehdit altındadır.',
      amac: 'Vezire tempo kazanarak gelişmek ve atı merkezde güçlü bir kareye yerleştirmek; f3 piyonu atı destekler.',
      neden: 'Bu tempo, 8.gxf3’ün asıl fikriydi. 9.d5 de iyidir ama vezir değil at saldırı altına girer. 9.dxc5 Qxc5 ile Siyah vezirini rahat bir kareye götürür.',
      diger: [
        { move: '9.d5', text: '9...Ne5 10.Bb5+ Nfd7 11.Nc4 ile Beyaz biraz iyi (Motor: +0.9).' },
        { move: '9.dxc5', text: '9...Qxc5 10.Qe2 e6 11.Ne4 ile denge (Motor: 0.0).' },
      ],
    },
    '9b': {
      text: '9...Qf5: vezir f5’e çekilir ve e4 atına baskı yapar.',
      amac: 'e4 atını f6 atıyla birlikte hedeflemek ve f3 piyonuna bakmak.',
      neden: 'f5 vezir için hâlâ açık bir karedir; Ng3 ile yeniden kovalanabilir. Motor 9...Qh5’i daha iyi buluyor (10.Ng3 Qh4 ile, +1.1), çünkü h5’ten h4’e giden vezir h2’ye baskıyı korur. 9...Qg6? 10.Nxc5 piyon kaybettirir (+2.1).',
      diger: [
        { move: '9...Qh5', text: '10.Ng3 Qh4 11.Qb3 O-O-O ile Siyah direnir (Motor: +1.1).' },
        { move: '9...Qg6', text: '10.Nxc5 e5 11.Nxb7 ile Beyaz piyon kazanır (Motor: +2.1).' },
      ],
    },
    '10w': {
      text: '10.Qe2: vezir e-hattına gelir; e4 atını destekler ve uzun roka yol açar.',
      amac: 'Merkezi sağlamlaştırmak ve e-hattını kontrol etmek. Bu hat daha sonra e6 piyonunu e8’deki şaha bağlayacak.',
      neden: 'Motorun ilk tercihi. 10.Nxc5 piyon kazanır ama Siyah gelişimini tamamlar (+1.5). 10.Ng3 ise erken; vezir d7 ya da c8’e çekilir (+1.0). Qe2’nin asıl gücü bir sonraki hamlede, ...e6 sonrası ortaya çıkar.',
      diger: [
        { move: '10.Nxc5', text: '10...e6 11.Bd3 Qd5 ile Beyaz piyon fazlası ama Siyah aktif (Motor: +1.5).' },
        { move: '10.Ng3', text: '10...Qc8 11.dxc5 e6 ile Siyah toparlanır (Motor: +1.0).' },
      ],
    },
    '10b': {
      text: '10...e6: Siyah f8 filine yol açar ve d5 karesini kontrol eder.',
      amac: 'Şah kanadını geliştirip şahı güvenceye almak.',
      neden: 'Mantıklı görünür ama e6 piyonu e-hattında, Qe2 ile e8 şahı arasında kalır; bu bağ 12.d5’i mümkün kılacak. Motor 10...Nxe4 11.fxe4 Qh3’ü öneriyor (+1.9): atlar değişince Beyazın tempo kaynağı azalır. 10...O-O-O de daha iyiydi (+2.2), çünkü şah merkezden uzaklaşır.',
      diger: [
        { move: '10...Nxe4', text: '11.fxe4 Qh3 12.d5 Ne5 ile Siyah hâlâ savaşır (Motor: +1.9).' },
        { move: '10...O-O-O', text: 'Şahı hemen merkezden kaçırır; 11.Ng5 Rd5 gibi karmaşık bir oyun (Motor: +2.2).' },
      ],
    },
    '11w': {
      text: '11.Ng3: at vezire üçüncü kez saldırır.',
      amac: 'Siyahın veziri nereye giderse gitsin bir tempo daha kazanmak ve h5/f5 karelerini kontrol etmek.',
      neden: 'Motorun açık ara ilk tercihi (+2.9). 11.Nxf6+ gxf6 atları değişir ve tempo kaynağı kaybolur (+0.7); 11.dxc5 Bxc5 de Siyahın gelişimini kolaylaştırır (+0.4).',
      diger: [
        { move: '11.Nxf6+', text: '11...gxf6 12.d5 Ne5 ile Siyah toparlanır (Motor: +0.7).' },
        { move: '11.dxc5', text: '11...Bxc5 12.Nxc5 Qxc5 ile Siyah gelişimi tamamlar (Motor: +0.4).' },
      ],
    },
    '11b': {
      text: '11...Qh3: vezir h3’e gider; h2 piyonuna ve g3 atına bakar, f1 karesini kontrol eder.',
      amac: 'Beyazın kısa rokunu engellemek (şah f1’den geçemez) ve şah kanadındaki zayıflıklara baskı yapmak.',
      neden: 'Başka kareler çok daha kötüydü: 11...Qg6? 12.d5! Ne5 13.Qxe5 (Motor: +4.8), 11...Nxd4? 12.cxd4 Qh3 13.d5 (Motor: +5.7). Qh3 en iyisiydi (+2.8), ama bu Siyahın onbir hamlede dördüncü vezir hamlesi ve şah kanadı hâlâ gelişmedi.',
      diger: [
        { move: '11...Qg6', text: '12.d5! Ne5 13.Qxe5 ile Beyaz kazanır, e6 bağlı (Motor: +4.8).' },
        { move: '11...Nxd4', text: '12.cxd4 Qh3 13.d5 ile taş kaybı (Motor: +5.7).' },
      ],
    },
    '12w': {
      text: '12.d5!: merkez piyonu ilerler, c6 atına saldırır ve d-hattını açmaya hazırlanır.',
      amac: 'Şahı merkezde kalan rakibe karşı hatları açmak. Alapin’in kurduğu d4 piyonu burada saldırı silahına dönüşür.',
      neden: 'e6 piyonu Qe2’nin e-hattı boyunca e8’deki şaha mutlak bağlıdır, yani 12...exd5 kuraldışıdır. At kaçmak zorundadır ve sonra d5xe6 ya da Bb5+ gibi tehditler gelir. Sakin 12.Bb5 ve 12.dxc5 avantajı tamamen kaybeder (Motor: −0.1); 12.d5 ise +3.0 verir.',
      diger: [
        { move: '12.Bb5', text: '12...cxd4 13.Qc4 Bd6 ile Siyah toparlanır (Motor: −0.1).' },
        { move: '12.dxc5', text: '12...Bxc5 13.Bd2 O-O ile Siyah şahını kurtarır (Motor: −0.1).' },
      ],
    },
    '12b': {
      text: '12...Nd8?: at geri çekilir; e6 ve f7’yi savunur.',
      amac: 'e6 piyonunu korumak ve dxe6 ile hatların açılmasını engellemek.',
      neden: 'Hata. At d8’de şahın d8’e kaçışını kapatır ve a8 kalesini kendi şahından ayırır. 12...Na5 13.Bb5+ Kd8 14.dxe6 Qxe6 15.Bf4 Qxe2+ 16.Bxe2 ile vezirleri değiştirmek, zor ama direnilebilir bir oyunsonu verirdi (Motor: +3.0). 12...Nd8 sonrası Motor: +4.1.',
      diger: [
        { move: '12...Na5', text: '13.Bb5+ Kd8 14.dxe6 Qxe6 15.Bf4 Qxe2+ ile vezirler değişir (Motor: +3.0).' },
        { move: '12...a6', text: '13.dxc6 b5 14.Bb3 ile Beyaz bir taş fazla (Motor: +4.4).' },
        { move: '12...Ne7', text: '13.dxe6 O-O-O 14.exf7 ile Beyaz kazanır (Motor: +3.6).' },
      ],
    },
    '13w': {
      text: '13.Bb5+: fil şah çeker.',
      amac: 'Siyahı ya şahını oynatmaya (rok hakkını kaybetmeye) ya da f6 atını d7’ye getirip şah kanadını savunmasız bırakmaya zorlamak.',
      neden: 'Motorun ilk tercihi (+4.2). 13.Bf4 de güçlüdür (+3.5) ama Siyaha ...a6 ve ...Be7 için zaman tanır. Şah çekmek tempoyu korur.',
      diger: [
        { move: '13.Bf4', text: '13...a6 14.O-O-O Be7 15.d6 ile güçlü saldırı (Motor: +3.5).' },
        { move: '13.Bg5', text: '13...Be7 14.Bb5+ Kf8 ile Siyahın şahı f8’e kaçar (Motor: +2.4).' },
      ],
    },
    '13b': {
      text: '13...Nd7: f6 atı araya girer.',
      amac: 'Şahı e8’de tutup rok hakkını korumak.',
      neden: 'En iyi savunma (Motor: +4.4). 13...Ke7? 14.d6+! Kxd6 15.Bf4+ şahı açığa çıkarır (Motor: +8.1); 13...Nc6? 14.dxc6 taş kaybettirir (+5.5). Ama atın d7’ye gelmesi Bxd7+ fikrini hazırlar.',
      diger: [
        { move: '13...Ke7', text: '14.d6+ Kxd6 15.Bf4+ Ke7 16.Qe5 ile şah avı (Motor: +8.1).' },
        { move: '13...Nc6', text: '14.dxc6 ile at gider (Motor: +5.5).' },
      ],
    },
    '14w': {
      text: '14.Bf4: fil gelişir ve b8-h2 çaprazını, özellikle c7 ve d6 karelerini tutar.',
      amac: 'Uzun rokun önünü açmak ve ilerleyecek d-piyonunu d6’da desteklemek.',
      neden: 'Gelişimi tamamlayan en doğal hamle (+3.6). 14.Be3 c5 piyonuna bakar ama 14...exd5 ile d-hattı Siyaha da açılır (+2.9). 14.Qe4 e6’ya baskı yapar (+2.8).',
      diger: [
        { move: '14.Be3', text: '14...exd5 15.O-O-O a6 ile Siyah biraz rahatlar (Motor: +2.9).' },
        { move: '14.Qe4', text: '14...Be7 15.Bxd7+ Kxd7 16.Bf4 (Motor: +2.8).' },
      ],
    },
    '14b': {
      text: '14...a6: Siyah b5 filini sorgular.',
      amac: 'Fili geri çekilmeye zorlamak ya da değiştirmek; c6 karesine şahı ya da atı getirme imkânı açmak.',
      neden: 'Motorun en iyi hamlesi (+4.1), ama durumu kurtarmaz. 14...g5? 15.Be5 Rg8 16.O-O-O ile çok daha kötü (+5.6); 14...Qh4? 15.Qe3 (+5.8).',
      diger: [
        { move: '14...g5', text: '15.Be5 Rg8 16.O-O-O exd5 ile Beyaz saldırısı ezici (Motor: +5.6).' },
        { move: '14...Qh4', text: '15.Qe3 c4 16.Bg5 ile Beyaz kazanır (Motor: +5.8).' },
      ],
    },
    '15w': {
      text: '15.Bxd7+!: fil savunucu atı alır ve şahı d7’ye çeker.',
      amac: 'Şahı d-hattına getirmek ve uzun rokla karşısına kale yerleştirmek.',
      neden: 'Fil geri çekilirse Siyah ...b5 ve ...Be7 ile toparlanır: 15.Ba4 b5 16.Bc2 (Motor: +2.0), 15.Bd3 g6 (Motor: +1.8). Değişim avantajı iki katına çıkarır (+4.2), çünkü şah d-hattında ve e-hattında sürekli bağlara açık kalır.',
      diger: [
        { move: '15.Ba4', text: '15...b5 16.Bc2 g6 17.O-O-O ile Siyah toparlanmaya başlar (Motor: +2.0).' },
        { move: '15.Bd3', text: '15...g6 16.Qe3 Be7 ile Siyah gelişir (Motor: +1.8).' },
      ],
    },
    '15b': {
      text: '15...Kxd7: şah alır.',
      amac: 'Taşı geri almak; başka makul seçenek yok.',
      neden: '15...Ke7 de mümkündü ama 16.dxe6 Nxe6 17.O-O-O ile şah e-hattında daha da açık kalır (Motor: +6.6). Kxd7 en iyisi (+4.4).',
      diger: [
        { move: '15...Ke7', text: '16.dxe6 Nxe6 17.O-O-O Rd8 ile şah e-hattında (Motor: +6.6).' },
      ],
    },
    '16w': {
      text: '16.O-O-O: uzun rok; d1 kalesi d-hattında Siyahın d7’deki şahının karşısına gelir.',
      amac: 'Şahı vezir kanadına götürmek (kısa rok, Qh3 f1’i tuttuğu için zaten mümkün değildi) ve 17.dxe6+ tehdidi yaratmak.',
      neden: 'Tehdit 17.dxe6+: piyon şah çeker ve d-hattı açılır. 16.Qe4 (+3.3) ve 16.Rd1 (+2.4) daha zayıf; rok hem şahı güvenceye alır hem de bir kaleyi tek hamlede oyuna sokar (+4.3).',
      diger: [
        { move: '16.Qe4', text: '16...Ke8 17.O-O-O h5 ile Siyah zaman kazanır (Motor: +3.3).' },
        { move: '16.Rd1', text: '16...exd5 17.Rxd5+ Kc8 ile şah c8’e kaçar (Motor: +2.4).' },
      ],
    },
    '16b': {
      text: '16...Ke8: şah e8’e geri döner ve d-hattından çıkar.',
      amac: 'dxe6+ tehdidinden kurtulmak.',
      neden: 'En iyi savunma (+4.4). Ama e8’de şah yine e-hattındadır ve e6 piyonu bir sonraki hamlede Rhe1 ile tekrar bağlanacak. 16...c4 piyon verip vezire yol açmaya çalışır (+5.1); 16...Be7 17.Qe5 ile daha kötü (+4.7).',
      diger: [
        { move: '16...Be7', text: '17.Qe5 Qh4 18.dxe6+ Ke8 ile Beyaz baskıyı artırır (Motor: +4.7).' },
        { move: '16...c4', text: '17.Qxc4 e5 18.Bxe5 ile piyon gider (Motor: +5.1).' },
      ],
    },
    '17w': {
      text: '17.Rhe1: ikinci kale e-hattına gelir; e6 piyonu artık vezir ve kalenin baskısı altında, e8’deki şaha bağlı.',
      amac: 'Bütün taşları oyuna sokmak ve d5-d6 ilerleyişi için hazırlık yapmak.',
      neden: 'Motorun ilk tercihi (+4.4). Beyazın bütün taşları aktif; Siyahın h8 kalesi ve f8 fili hâlâ yerinden kıpırdamadı. 17.Qd3 (+3.8) ve 17.Qe3 (+3.5) daha zayıf.',
      diger: [
        { move: '17.Qd3', text: '17...Qh4 18.Qe3 h6 ile Siyah biraz nefes alır (Motor: +3.8).' },
        { move: '17.Qe3', text: '17...h5 18.Rhg1 c4 (Motor: +3.5).' },
      ],
    },
    '17b': {
      text: '17...Be7: fil sonunda gelişir.',
      amac: 'Şaha f8’e geçme yolu açmak ve h8 kalesini oyuna sokmaya hazırlanmak.',
      neden: 'Motor 17...Be7 ve 17...Qh4’ü eşit görüyor (+4.5). Fil e7’de d6 ilerleyişiyle kovalanacak, ama gelişmek zorundaydı. 17...h6? 18.dxe6 fxe6 19.Qe4 ile çok kötü (+4.8).',
      diger: [
        { move: '17...Qh4', text: '18.Qd2 Qe7 19.Nf5 ile baskı sürer (Motor: +4.5).' },
        { move: '17...h6', text: '18.dxe6 fxe6 19.Qe4 ile e6 düşer (Motor: +4.8).' },
      ],
    },
    '18w': {
      text: '18.d6!: piyon tempoyla ilerler ve e7 filine saldırır.',
      amac: 'İleri geçer piyonu yedinci yataya yaklaştırmak ve Siyahın taşlarını sıkıştırmak.',
      neden: 'Motor 18.Qe3’ü biraz daha iyi buluyor (+4.7 / +4.4), çünkü c5’i hedefler. Ama d6 basit ve güçlü bir plan: piyon artık c7 ve e7 karelerini tutar, d7+ hazırlanır.',
      diger: [
        { move: '18.Qe3', text: '18...Kf8 19.d6 Bh4 20.Qxc5 ile önce piyon kazanmak (Motor: +4.7).' },
        { move: '18.Qe5', text: '18...Qh4 19.Ne4 Kf8 (Motor: +4.1).' },
      ],
    },
    '18b': {
      text: '18...Bf6: fil f6’ya çekilir; b2 ve uzun çaprazı hedefler.',
      amac: 'Fili aktif tutmak ve d8’deki atı yükten kurtarmak.',
      neden: 'En iyi hamle (+4.6). 18...Bh4 benzer (+4.6). 18...Qh4? 19.Qe3 Nc6 20.dxe7 ile taş kaybı (+5.8).',
      diger: [
        { move: '18...Bh4', text: '19.d7+ Kf8 20.Qe5 Kg8 (Motor: +4.6).' },
        { move: '18...Qh4', text: '19.Qe3 Nc6 20.dxe7 (Motor: +5.8).' },
      ],
    },
    '19w': {
      text: '19.d7+!: piyon şah çekerek yedinci yataya ulaşır.',
      amac: 'e8 ve c8 karelerini kontrol etmek, şahı f8’e iterek h8 kalesini hapsetmek.',
      neden: 'Motorun ilk tercihi (+4.5). Piyon d7’de d8 karesindeki atı sürekli bağlı tutar, Siyahın kaleleri arka yatayda birleşemez. 19.Qe3 Kd7 ile şahın piyonu ablukaya almasına izin verir (+3.8).',
      diger: [
        { move: '19.Ne4', text: '19...Bh4 20.d7+ Kf8 21.Qe3 ile benzer (Motor: +4.4).' },
        { move: '19.Qe3', text: '19...Kd7 20.Qxc5 Nc6 ile şah piyonu durdurur (Motor: +3.8).' },
      ],
    },
    '19b': {
      text: '19...Kf8: şah f8’e kaçar.',
      amac: 'Şahı d7 piyonundan ve e-hattından uzaklaştırmak.',
      neden: '19...Ke7 daha kötüydü: 20.Qc4! Kf8 21.Qxc5+ Kg8 22.Qc8 ile vezir arka yataya girer (Motor: +6.8). Kf8 en iyi (+4.6), ama h8 kalesi artık şahın arkasında hapis.',
      diger: [
        { move: '19...Ke7', text: '20.Qc4 Kf8 21.Qxc5+ Kg8 22.Qc8 (Motor: +6.8).' },
      ],
    },
    '20w': {
      text: '20.Rd5: kale d5’e çıkar; c5 piyonuna ve h5 karesine bakar.',
      amac: 'Rxc5 ile c-hattına geçmek ve c8’e girmek; kaleyi beşinci yatayda yatay olarak kullanmak.',
      neden: '20...exd5?? 21.Qe8# olur, çünkü e8’i d7 piyonu ve e1 kalesi korur, g7 kendi piyonuyla dolu. Ama motor bu hamleyi oyunun en az doğru Beyaz hamlesi sayıyor (+3.2): 20.Qe3 (+4.2) ve 20.Bd6+ (+4.1) şahı daha hızlı sıkıştırırdı.',
      diger: [
        { move: '20.Qe3', text: '20...Be7 21.Bd6 Bxd6 22.Rxd6 ile c5’e baskı (Motor: +4.2).' },
        { move: '20.Bd6+', text: '20...Kg8 21.Ne4 Qf5 22.Nxf6+ ile oyunda olduğu gibi şah g8’e itilir (Motor: +4.1).' },
      ],
    },
    '20b': {
      text: '20...g6: Siyah şahına g7 karesini açar.',
      amac: 'Bd6+ gibi şahlara karşı kaçış yeri yapmak ve h8 kalesini g7 üzerinden oyuna sokma umudu.',
      neden: '20...exd5?? hemen mat olur (21.Qe8#). Motor 20...Nc6 (+3.3) ya da 20...h5’i (+3.3) biraz daha iyi buluyor; ...g6 f6 filinin ve şah kanadı karelerinin zayıflamasına yol açar (+3.7).',
      diger: [
        { move: '20...Nc6', text: '21.Bd6+ Be7 22.Rh5 Qg2 ile Siyah biraz direnir (Motor: +3.3).' },
        { move: '20...exd5', text: '21.Qe8# mat.' },
      ],
    },
    '21w': {
      text: '21.Bd6+: fil şah çeker ve şahı g8’e iter.',
      amac: 'Şahı h8 kalesinin önüne itip o kaleyi tamamen hapsetmek; fili d-piyonunun yanına getirmek.',
      neden: 'Motorun ilk tercihi (+3.9). Fil d6’da f8 ve e7 karelerini tutar, şah f-hattından kaçamaz. 21.Rxc5 (+3.6) ve 21.Ne4 (+3.7) daha yavaş.',
      diger: [
        { move: '21.Ne4', text: '21...Be7 22.Nd6 Nc6 (Motor: +3.7).' },
        { move: '21.Rxc5', text: '21...Nc6 22.Ne4 Be7 (Motor: +3.6).' },
      ],
    },
    '21b': {
      text: '21...Kg8: şah g8’e gider.',
      amac: 'Şahtan çıkmak; diğer kareler hemen kaybettirir.',
      neden: '21...Kg7? 22.Nh5+! Qxh5 23.Rxh5 vezir kaybettirir (Motor: +6.1); 21...Be7 22.Qe5 ile vezir merkezden h8’e bakar ve saldırı ezici hale gelir (+5.9). Kg8 tek ciddi hamle (+3.8).',
      diger: [
        { move: '21...Kg7', text: '22.Nh5+ Qxh5 23.Rxh5 ile vezir gider (Motor: +6.1).' },
        { move: '21...Be7', text: '22.Qe5 Qh6+ 23.Rd2 Rg8 (Motor: +5.9).' },
      ],
    },
    '22w': {
      text: '22.Nh5: at f6 filine saldırır.',
      amac: 'Siyahın tek aktif savunucusunu (f6 filini) kovalamak ya da değiştirmek; h8 kalesini daha da kilitlemek.',
      neden: '22...gxh5? 23.Rg1+ Qg4 24.fxg4 ile vezir gider (Motor: +8.0): yarı açık g-hattı burada işe yarar. Motor 22.Rd2 ve 22.Ne4’ü biraz daha iyi buluyor (+4.0 / +3.8), ama fark küçük.',
      diger: [
        { move: '22.Rd2', text: '22...Bh4 23.Ne4 h6 24.f4 ile sağlam (Motor: +4.0).' },
        { move: '22.Ne4', text: '22...Bh4 23.Rd2 h6 (Motor: +3.9).' },
      ],
    },
    '22b': {
      text: '22...Bg7: fil g7’ye çekilir.',
      amac: 'Fili korumak ve şahın yanında savunmada tutmak.',
      neden: 'En iyi hamle (+3.9). 22...gxh5? 23.Rg1+ (Motor: +8.0); 22...Qxh5? 23.Rxh5 vezir kaybettirir (+6.1); 22...Qh4 23.Nxf6+ (+4.3).',
      diger: [
        { move: '22...gxh5', text: '23.Rg1+ Qg4 24.fxg4 ile vezir gider (Motor: +8.0).' },
        { move: '22...Qh4', text: '23.Nxf6+ Qxf6 24.Rxc5 Nc6 (Motor: +4.3).' },
      ],
    },
    '23w': {
      text: '23.Rxc5: kale c5 piyonunu alır ve c-hattına geçer.',
      amac: 'Rc8 ile arka yataya girmek ve d8 atını iki kez vurmak.',
      neden: 'Motorun ilk tercihi (+4.6). 23.Nxg7 Kxg7 (+4.0) ve 23.f4 (+3.9) daha zayıf; c-hattını açmak Rxc6 kombinasyonunu hazırlar.',
      diger: [
        { move: '23.Nxg7', text: '23...Kxg7 24.Rxc5 Nc6 25.Rd1 ile şah h8 kalesini serbest bırakır (Motor: +4.0).' },
        { move: '23.f4', text: '23...Nc6 24.Rxc5 h6 (Motor: +3.9).' },
      ],
    },
    '23b': {
      text: '23...Nc6: at c6’ya gelir; c-hattını kapatır ve d8 karesini savunur.',
      amac: 'Rc8’i önlemek ve piyonun vezire çıkacağı d8 karesini tutmak.',
      neden: 'En iyi savunma (+4.7). 23...Bh6+ 24.f4 Nc6 25.Nf6+ (+5.2); 23...h6 24.Nf4 Qh4 25.Rc8 (+5.4).',
      diger: [
        { move: '23...Bh6+', text: '24.f4 Nc6 25.Nf6+ Kg7 ile Beyaz yine kazanır (Motor: +5.2).' },
        { move: '23...h6', text: '24.Nf4 Qh4 25.Rc8 ile d8 düşer (Motor: +5.4).' },
      ],
    },
    '24w': {
      text: '24.Rxc6!: kale, d8’in bekçisi olan atı alır.',
      amac: 'd8 karesini savunan tek taşı ortadan kaldırıp d7 piyonunun vezire çıkmasının önünü açmak.',
      neden: 'Kale ata verilir ama vezir a6’yı ve c-hattını alır, c8 üzerinden piyonu destekler. Motor: +4.8; 24.Nxg7 (+4.0) ve 24.f4 (+4.0) de kazanır ama Siyahın savunması daha uzun sürer.',
      diger: [
        { move: '24.Nxg7', text: '24...Kxg7 25.Bc7 Rhd8 ile h8 kalesi oyuna girer (Motor: +4.0).' },
        { move: '24.f4', text: '24...h6 25.Nxg7 Kxg7 26.Rd1 (Motor: +4.0).' },
      ],
    },
    '24b': {
      text: '24...bxc6: piyonla alınır.',
      amac: 'Kaleyi almak; Siyah artık bir kale fazlasıyla görünüyor ama h8 kalesi oyunda değil.',
      neden: 'Almamak daha kötüydü: 24...Bh6+ 25.f4 bxc6 26.Nf6+ (+5.8), 24...h6 25.Nxg7 (+6.6).',
      diger: [
        { move: '24...Bh6+', text: '25.f4 bxc6 26.Nf6+ Kg7 ile benzer ama daha kötü (Motor: +5.8).' },
      ],
    },
    '25w': {
      text: '25.Qxa6: vezir a6 piyonunu alır; a8 kalesine ve c6 piyonuna saldırır.',
      amac: 'Veziri c8’e getirip d-piyonunu desteklemek ve d8’e baskıyı artırmak.',
      neden: 'Motorun ilk tercihi (+4.9). 25.Nxg7 Kxg7 26.Qe5+ f6 (+3.8) ve 25.Nf4 Qf5 (+2.1) çok daha zayıf; vezir hem a8’i tehdit edip tempo kazanır hem de c8 yolunu açar.',
      diger: [
        { move: '25.Nxg7', text: '25...Kxg7 26.Qe5+ f6 27.Qxe6 (Motor: +3.8).' },
        { move: '25.Nf4', text: '25...Qf5 26.Qxa6 Rd8 ile Siyah toparlanır (Motor: +2.1).' },
      ],
    },
    '25b': {
      text: '25...Bh6+: fil şah çeker.',
      amac: 'Tempo kazanmak ve c1-h6 çaprazından Beyazın şahına baskı yapmak.',
      neden: 'Motor 25...Rd8’i öneriyor (+4.8): kale hemen d8’e gelir ve 26.Nxg7 Kxg7 27.Qxc6 ile oyun uzar. Bh6+ sonrası 26.f4 gelir ve fil şah kanadında tıkanır (+5.8). 25...h6? 26.Qxa8+ Kh7 27.d8=R (+5.5).',
      diger: [
        { move: '25...Rd8', text: '26.Nxg7 Kxg7 27.Qxc6 Qh4 28.Be5+ f6 ile Siyah biraz direnir (Motor: +4.8).' },
        { move: '25...h6', text: '26.Qxa8+ Kh7 27.d8=R ile kale gider (Motor: +5.5).' },
      ],
    },
    '26w': {
      text: '26.f4: piyon araya girer ve şahı örter.',
      amac: 'Şahı yerinde tutarak tempo kaybetmemek; f4 piyonu Bd6 ve Nh5 tarafından korunur.',
      neden: 'Tek iyi hamle (+5.6). 26.Kc2 ya da 26.Kb1 sonrası 26...Qf5+ ile Siyah şah çekerek tempo kazanır ve vezirini merkeze getirir (+4.1 / +3.9).',
      diger: [
        { move: '26.Kc2', text: '26...Qf5+ 27.Re4 Rd8 ile Siyah vezirini aktive eder (Motor: +4.1).' },
        { move: '26.Kb1', text: '26...Qf5+ 27.Ka1 Rd8 (Motor: +3.9).' },
      ],
    },
    '26b': {
      text: '26...Rd8: kale d8’e gelir ve piyonun önünü keser.',
      amac: 'd7 piyonunu ablukaya almak; d8 karesini savunmak.',
      neden: 'Tek ciddi savunma (+5.7). 26...Bxf4+? 27.Bxf4 ile fil gider (+6.7); 26...Rf8? 27.Bxf8 ile kale kaybedilir (+9.6).',
      diger: [
        { move: '26...Bxf4+', text: '27.Bxf4 Rf8 28.Nf6+ ile fil kaybı (Motor: +6.7).' },
        { move: '26...Rf8', text: '27.Bxf8 ile kale gider (Motor: +9.6).' },
      ],
    },
    '27w': {
      text: '27.Qc8: vezir c8’e gelir; d8 kalesine saldırır ve piyonu destekler.',
      amac: 'd8 karesine baskıyı artırmak: kale artık vezir tarafından vurulurken d7 piyonu da onu tehdit eder.',
      neden: 'Motorun ilk tercihi (+5.9). Tehdit Qxd8+. 27.Qb6 (+5.5) ve 27.Qa5 (+5.0) da d8’e bakar ama c8’deki vezir 8. yatayı da kontrol eder.',
      diger: [
        { move: '27.Qb6', text: '27...Qh4 28.Be5 Bxf4+ (Motor: +5.5).' },
        { move: '27.Qa5', text: '27...Qh4 28.Be5 Bxf4+ 29.Bxf4 (Motor: +5.0).' },
      ],
    },
    '27b': {
      text: '27...Qh4: vezir h4’e gelir; h4-d8 çaprazından d8 kalesini savunur ve h5 atına saldırır.',
      amac: 'd8’i ikinci kez savunmak ve aynı zamanda karşı tehdit yaratmak.',
      neden: 'En iyi savunma (+6.0). 27...Qxh5? açgözlülük: 28.Qxd8+ Kg7 29.Qxh8+ Kxh8 30.d8=Q+ Kg7 31.Bf8+ Kh8 32.Bxh6# (Motor: beş hamlede mat). 27...Bxf4+ 28.Bxf4 (+7.4).',
      diger: [
        { move: '27...Qxh5', text: '28.Qxd8+ Kg7 29.Qxh8+ Kxh8 30.d8=Q+ ve beş hamlede mat.' },
        { move: '27...Bxf4+', text: '28.Bxf4 Qh4 29.Bc7 Rf8 30.d8=Q ile fil kaybı (Motor: +7.4).' },
      ],
    },
    '28w': {
      text: '28.Bc7: fil c7’ye gelir ve d8 kalesine üçüncü saldırıyı ekler.',
      amac: 'd8’de sayı üstünlüğü kurmak: saldıranlar Qc8, Bc7 (ve d7 piyonu), savunan sadece Qh4.',
      neden: 'Motor 28.Be5’i biraz daha iyi buluyor (+6.0 / +5.1): fil hem f6 hem d4 karelerini tutar. Ama Bc7 doğrudan ve zorlayıcı; Siyahın kalesi kaçmak zorunda.',
      diger: [
        { move: '28.Be5', text: '28...Kf8 29.Bf6 Bxf4+ 30.Kb1 ile Beyaz kazanır (Motor: +6.0).' },
        { move: '28.Qc7', text: '28...Bf8 29.Be5 Be7 ile Siyah toparlanır (Motor: +3.4).' },
      ],
    },
    '28b': {
      text: '28...Rf8: kale f8’e kaçar.',
      amac: 'Kaleyi kurtarmak ve f8’den arka yatayı tutmaya devam etmek.',
      neden: 'En iyi hamle (+5.3). 28...Bxf4+ 29.Nxf4 (+5.9); 28...Qxf4+ 29.Bxf4 Bxf4+ 30.Nxf4 (+7.0).',
      diger: [
        { move: '28...Bxf4+', text: '29.Nxf4 Kg7 30.Be5+ Kh6 ile Beyaz kazanır (Motor: +5.9).' },
        { move: '28...Qxf4+', text: '29.Bxf4 Bxf4+ 30.Nxf4 ile vezir kaybı (Motor: +7.0).' },
      ],
    },
    '29w': {
      text: '29.d8=Q: piyon vezir olur.',
      amac: 'Uzun yürüyüşü tamamlamak; yeni vezir f8 kalesine saldırır.',
      neden: '29...Qxd8 30.Bxd8 ve 29...Rxd8 30.Qxd8+ Qxd8 31.Bxd8 Beyaza en az bir taş fazlası verir. Motor 29.Bd6’yı biraz daha güçlü buluyor (+5.8 / +5.4), ama vezir çıkarmak en açık yol.',
      diger: [
        { move: '29.Bd6', text: '29...Rd8 30.Be5 Bxf4+ 31.Bxf4 ile Beyaz kazanır (Motor: +5.8).' },
        { move: '29.d8=R', text: '29...Qxf2 30.Nf6+ Kg7 ile benzer (Motor: +5.2).' },
      ],
    },
    '29b': {
      text: '29...Qxh5: vezir h5 atını alır.',
      amac: 'Kaybedilen piyonun karşılığında bir taş almak.',
      neden: '29...Rxd8 30.Qxd8+ Qxd8 31.Bxd8 gxh5 ile Siyah bir taş eksikle direnirdi (Motor: +5.7). Oyun hamlesi de benzer değerde (+5.5), ama 30.Qxf8+ ve 31.Bd6 taktiğine izin verir.',
      diger: [
        { move: '29...Rxd8', text: '30.Qxd8+ Qxd8 31.Bxd8 gxh5 32.Bf6 ile bir taş fazla (Motor: +5.7).' },
        { move: '29...Qxd8', text: '30.Bxd8 ile Beyaz bir vezir fazla (Motor: +6.7).' },
      ],
    },
    '30w': {
      text: '30.Qxf8+: Beyaz f8 kalesini alır.',
      amac: 'Kaleyi almak ve 31.Bd6 bağını hazırlamak.',
      neden: 'Motor 30.Rxe6’yı daha güçlü buluyor (+6.0 / +5.6): 30...Qc5 31.Bd6 ile Siyah yine kaybeder. Ama oyun hamlesi de kesin kazanır ve hesap gerektirmez.',
      diger: [
        { move: '30.Rxe6', text: '30...Qc5 31.Bd6 Qxd6 32.Rxd6 ile Beyaz kazanır (Motor: +6.0).' },
        { move: '30.Rd1', text: '30...Qf5 31.Qb8 g5 (Motor: +5.2).' },
      ],
    },
    '30b': {
      text: '30...Bxf8: fil alır.',
      amac: 'Veziri geri almak; tek yasal hamle budur, çünkü f8’i c8 veziri de koruduğu için şah alamaz.',
      neden: 'Zorunlu hamle. Maddi denge yeniden kurulur (vezir, kale ve fil karşılıklı), ama f8 fili ve g8 şahı c8 vezirinin hattında kalır.',
    },
    '31w': {
      text: '31.Bd6!: fil f8 filine saldırır. Fil, c8 vezirine karşı g8’deki şaha bağlıdır.',
      amac: '32.Bxf8 ile taşı kazanmak; Siyah fili koruyamaz ve bağdan kurtaramaz.',
      neden: '31...Kg7 bağı çözer ama 32.Be5+ gelir: 32...Kh6 33.Bxh8 kaleyi, 32...Qxe5 33.Rxe5 veziri kaybettirir (Motor: +5.6). 31.Rd1 (+4.1) ve 31.Be5 (+4.1) daha zayıf. Hübner burada terk etti.',
      diger: [
        { move: '31.Rd1', text: '31...Qf5 32.Be5 f6 ile Siyah toparlanır (Motor: +4.1).' },
        { move: '31.Be5', text: '31...Qxh2 32.Rd1 Qxf2 33.Bxh8 (Motor: +4.1).' },
      ],
    },
  },
  sources: [
    { title: 'Wikipedia: Hoogovens Wijk aan Zee Chess Tournament 1996', url: 'https://en.wikipedia.org/wiki/Hoogovens_Wijk_aan_Zee_Chess_Tournament_1996' },
    { title: 'The Week in Chess 68 (Hoogovens 1996 sonuçları, 11. tur)', url: 'https://theweekinchess.com/html/twic68.html' },
    { title: 'Wikipedia: Sicilian Defence, Alapin Variation', url: 'https://en.wikipedia.org/wiki/Sicilian_Defence,_Alapin_Variation' },
    { title: 'Chess.com: From Opening to Endgame – the c3 Sicilian', url: 'https://www.chess.com/article/view/from-opening-to-endgame-the-c3-sicilian' },
  ],
  exercises: [
    { id: 'ahu-1', kind: 'tekrar', plan: false, title: 'Merkez kırılması',
      source: 'Adams – Hübner, Wijk aan Zee 1996 (12. hamle)',
      fen: 'r3kb1r/pp3ppp/2n1pn2/2p5/2BP4/2P2PNq/PP2QP1P/R1B1K2R w KQkq - 2 12',
      prompt: 'Siyahın veziri h3’e gitti ve şahı hâlâ e8’de. Beyazın veziri e2’de, e-hattında. Merkezde en güçlü hamle hangisi?',
      hint: 'e6 piyonu e-hattında ne durumda? d4 piyonu ilerlerse onu alabilir mi?',
      line: ['d5'],
      explanation: '**12.d5!** e6 piyonu Qe2’nin e-hattındaki bağı yüzünden d5’i alamaz. c6 atı saldırı altında ve 12...Na5 13.Bb5+ ya da 12...Nd8 13.Bb5+ sonrası Siyahın şahı merkezde kalır. Motor: d5 +2.9, sonraki en iyi 12.Bg5 +0.1.',
      link: 'Alapin’in amacı d4 merkezidir; şah merkezde kalınca bu piyon d5 ile hatları açar.' },
    { id: 'ahu-2', kind: 'tekrar', plan: false, title: 'Şahı d-hattına çekmek',
      source: 'Adams – Hübner, Wijk aan Zee 1996 (15. hamle)',
      fen: 'r2nkb1r/1p1n1ppp/p3p3/1BpP4/5B2/2P2PNq/PP2QP1P/R3K2R w KQkq - 0 15',
      prompt: 'Siyah ...a6 ile b5 filini sorguladı. Beyaz henüz rok yapmadı; Siyahın şahı e8’de, d7’deki at ve d8’deki at onu çevreliyor. Hamle sizde.',
      hint: 'Fil geri çekilmek yerine şah çekebilir; sonra Beyazın şahı hangi tarafa rok yapar?',
      line: ['Bxd7+', 'Kxd7', 'O-O-O'],
      accept: { 2: ['Qe4'] },
      explanation: '**15.Bxd7+! Kxd7 16.O-O-O** Fil savunucuyu alır, şah d7’ye gelir ve uzun rokla d1 kalesi d-hattında şahın karşısına yerleşir; d5 piyonu artık d6’ya ilerleyebilir. Motor: Bxd7+ +4.1, sonraki en iyi 15.Ba4 +2.0; 16.O-O-O +4.3, 16.Qe4 +3.6.',
      link: '12.d5 ile açılan d-hattını uzun rokla Beyaz ele geçirdi.' },
    { id: 'ahu-3', kind: 'transfer', plan: false, title: 'Tek kalmış piyonla d5',
      source: 'Motwani – Tiviakov, Gausdal 1992 (18. hamle)',
      fen: '2rq1rk1/pb2bp1p/1p2pnp1/n5B1/3P3Q/P1NB1N2/1P3PPP/3RR1K1 w - - 0 18',
      prompt: 'Alapin’den çıkan bir yapı: Beyazın d4’te tek kalmış piyonu var. g5 fili f6 atını bağlıyor, kaleler d1 ve e1’de. Beyaz merkezde ne yapmalı?',
      hint: 'e6 piyonu d5’i alırsa e-hattında hangi taş açıkta kalır?',
      line: ['d5'],
      explanation: '**18.d5!** 18...exd5 19.Rxe7! Qxe7 20.Bxf6 ile Beyaz taş kazanır (+5.7). 18...Bxd5 19.Nxd5 Nxd5 20.Ba6 ile Beyaz yine çok üstündür. Motor: d5 +4.3, sonraki en iyi 18.Be4 +1.3.',
      link: 'Adams d5’i e6 piyonu bağlı olduğu için oynadı; burada da d5 kırılması e-hattında e7 filini açıkta bırakıyor.' },
    { id: 'ahu-4', kind: 'transfer', plan: false, title: 'Şahı merkezde tutmak',
      source: 'Blatny – Ljubojevic, Antwerpen 1994 (20. hamle)',
      fen: 'r1q1kb1r/1p3ppp/pB2p3/5n2/8/1BP1Q2P/PP4P1/R3K2R w KQkq - 0 20',
      prompt: 'Alapin’de 2...d5 kolundan bir oyun. f5 atı e3 vezirine saldırıyor ve Siyahın şahı henüz rok yapmadı. Vezir kaçmadan önce ne yapılabilir?',
      hint: 'Önce şah çekin: b6 fili d8 karesini tutuyor.',
      line: ['Ba4+'],
      explanation: '**20.Ba4+!** b6 fili d8’i tuttuğu için şah oraya gidemez; 20...Qc6 ya da 20...Qd7 ile araya girmek veziri kaybettirir (+6 / +7). 20...Ke7 sonrası şah rok hakkını kaybeder ve merkezde kalır, Beyaz da 21.Qd3 ve 22.Qd7+ ile saldırır. Motor: Ba4+ +3.3, sonraki en iyi 20.Qf3 +0.2.',
      link: 'Adams 13.Bb5+ ve 15.Bxd7+ ile Hübner’in şahını merkezde tuttu; Blatny de fil şahıyla Ljubojevic’in şahını rok yapamaz hale getirdi.' },
  ],
};
