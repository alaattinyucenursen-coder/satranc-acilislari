// Karpov – Tal, Bugojno 1980. Kaynak: PgnMentor (Karpov.pgn).
export default {
  id: 'karpov-tal-1980',
  theme: 'Meran: e4-d5 ile merkez patlaması',
  white: 'Anatoli Karpov', black: 'Mihail Tal',
  whiteShort: 'Karpov', blackShort: 'Tal',
  event: 'Bugojno turnuvası', site: 'Bugojno', year: 1980, eco: 'D48',
  variation: 'Yarı Slav Savunması, Meran Varyantı', result: '1-0',
  pgn: `1. c4 e6 2. Nc3 d5 3. d4 c6 4. e3 Nf6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. d5 c4 11. dxe6 cxd3 12. exd7+ Qxd7 13. O-O Bb7 14. Re1 Bb4 15. Ne5 Qe6 16. Nxd3 Bxc3 17. Nf4 Qd7 18. bxc3 Nxe4 19. Qxd7+ Kxd7 20. Ba3 Rhe8 21. Red1+ Kc7 22. f3 Nf6 23. Bd6+ Kb6 24. c4 Rac8 25. cxb5 axb5 26. a4 Rcd8 27. axb5 Rd7 28. Rd4 Red8 29. Rad1 Rc8 30. Be5 Re7 31. Rd6+ Kxb5 32. Rb1+ Kc4 33. Rd4+ Kc5 34. Nd3+ 1-0`,

  summary: 'Bugojno 1980’in 8. turunda oynanan bu oyun, Klasik Meran’ın en keskin kollarından birinde (9.e4 c5 10.d5 c4 11.dxe6 cxd3 12.exd7+, Reynolds tipi 10.d5 yapısı) geçti. Taraflar karşılıklı taş aldı; Beyaz 16.Nxd3! ve 17.Nf4! ara hamlesiyle materyali dengeledi ve 19.Qxd7+ ile vezirleri değişti. Ortaya çıkan oyunsonu dengeli görünse de (Motor: yaklaşık +0.5) Siyahın şahı rok yapamadan d7’de kalmıştı. Karpov bu küçük ama kalıcı kusuru adım adım büyüttü: Ba3 ve Bd6+ ile şahı vezir kanadına itti, c4 ve a4 kırılmalarıyla o kanadı açtı. Tal’in 26...Rcd8 hatası (doğrusu 26...Red8, Motor: +0.6) c7 karesini ve c-hattını bıraktı; bundan sonra Beyazın kaleleri, fili ve atı Siyah şahını c5’te ağa düşürdü. Turnuvayı 8/11 ile Karpov kazandı, Tal 5 puanda kaldı.',
  intro: 'Karpov 1.c4 ile başlıyor ama hamle sırası kısa sürede Vezir Gambiti’ne dönüyor. Tal ...e6, ...d5 ve ...c6 ile Yarı Slav kurulumunu seçiyor; 6...dxc4 7.Bxc4 b5 ile Meran Varyantı başlıyor. Meran’ın ana sorusu şudur: Siyah vezir kanadında ...b5, ...a6, ...c5 ile alan ve tempo kazanırken Beyaz merkezde e4 ile ne kadar hızlı vuruş yapabilir? Bu oyunda Beyaz 10.d5 ile en keskin yolu seçti ve Tal de 10...c4 ile karşılık verdi: tahtada dört hamle içinde iki taş el değiştirdi. Asıl dersi ise sonrası veriyor: vezirler gittikten sonra bile merkezde kalan bir şah, sabırlı bir oyuncunun elinde kazanç sebebidir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**e4 ve d5** ile merkezi hızla açmak: Siyah vezir kanadında piyon sürerken gelişimini tamamlamamışken çatışmaya girmek.',
      '11.dxe6 ve 12.exd7+ ile Siyahın rok hakkını fiilen almak; şahı merkezde tutup e- ve d-hatlarını açmak (13.O-O, 14.Re1).',
      'd3’e kadar gelmiş ileri piyonu taşlarla kuşatıp almak (15.Ne5, 16.Nxd3) ve 17.Nf4! ara hamlesiyle taşı geri kazanmak.',
      'Vezirleri değişip (19.Qxd7+) şahı merkezde kalmış rakibe karşı oyunsonu oynamak: burada vezir yoktur ama şah hâlâ hedeftir.',
      'Fil ile **a3-d6** çaprazını kullanmak: önce şahın f8/e7 karelerini kesmek, sonra 23.Bd6+ ile onu b6’ya itmek.',
      '**c4 ve a4** piyon kırılmalarıyla Siyah şahının önündeki vezir kanadı piyonlarını sökmek ve a/b-hatlarını kaleler için açmak.',
      'Kaleleri d-hattında ikileyip (28.Rd4, 29.Rad1), fil e5 ve at f4/d3 ile birlikte şahı tahtanın ortasında ağa almak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '6...dxc4 ve 7...b5 ile fili tempo kazanarak kovmak, fili b7’ye getirip uzun çaprazdan e4’e baskı yapmak.',
      '8...a6 ve 9...c5 ile Beyazın d4 piyonuna vurmak ve merkezde kendi payını almak.',
      '10...c4 ile keskin yolu seçmek: d3 filini kovup tahtada karşılıklı alımlar yaratmak, d3’te ileri bir piyonla Beyazı rahatsız etmek.',
      '...Bb4 ve ...Bxc3 ile e4’ün savunucusunu kaldırıp e4 piyonunu almak (18...Nxe4), böylece materyali dengelemek.',
      'Vezirler gittikten sonra şahı merkezde aktif bir taş olarak kullanmak; uzun çaprazdaki fil ve vezir kanadı piyonlarıyla dengeyi tutmak.',
      'Kalelerle c-hattını ve c7 karesini kontrol etmek, ...g5 gibi hamlelerle f4 atını rahatsız etmek; dengeyi korumanın anahtarı buydu (26...Red8 veya 26...g5).',
    ] },
  },
  critical: [
    { move: '10w', title: '10.d5: en keskin yol', text: 'Beyazın burada iki ana seçeneği var: 10.e5 (Blumenfeld yolu; 10...cxd4 11.Nxb5 ile taş fedası) ve 10.d5. Karpov merkezi kapatıp e6’ya baskı kuran d5’i seçti. Motor iki hamleyi de neredeyse eşit görüyor (e5 +0.4, d5 +0.3). d5 sonrası Siyahın d5’i alması zordur, çünkü e4 piyonu karşılık verir; Siyah ya ...Qc7 gibi sakin bir hamleyle e6’daki alımı kabul eder ya da Tal gibi 10...c4 ile ateşi yükseltir.' },
    { move: '11b', title: '11...cxd3: taş taşa karşı', text: 'Tal sakin 11...fxe6 yerine (Motor: +0.3; Karpov–Kramnik, Linares 1994’te Siyah bunu seçti) fili aldı. 12.exd7+ sonrası taşlar yeniden eşitlenir, ama tablo değişmiştir: Siyahın d3’te ileri, fakat savunması zor bir piyonu, Beyazın ise rok yapma imkânı ve açık merkezi vardır. Siyahın şahı ise artık kısa rok yapamayacak kadar açıktadır. 11...Nc5? ise 12.exf7+ ile kötüdür (Motor: +1.3).' },
    { move: '16w', title: '16.Nxd3! ve 17.Nf4!', text: 'Beyaz ileri piyonu alır. 16...Bxc3 ile Siyah taş alır gibi olur, ama 17.Nf4! ara hamlesi vezire saldırır; vezir kaçtıktan sonra 18.bxc3 ile taş geri gelir. Motor 16.Nxd3’ü +0.6 olarak görüyor; 16.Nf3 (−0.5) veya 16.Bf4 (−0.6) gibi hamleler Siyaha d3 piyonunu tutma şansı verir ve dengeyi Siyah lehine çevirir. 17.Nf4 yerine hemen 17.bxc3 de oynanabilirdi (+0.1), ancak ara hamle Beyazın atını daha aktif bir kareye getirir.' },
    { move: '19w', title: '19.Qxd7+: şah merkezde kalıyor', text: 'Materyal eşit; Siyah e4’ü, Beyaz d3’ü aldı. Karpov vezirleri değişerek oyunu, rakibinin taktik hayal gücünün en az işe yaradığı bir oyunsonuna taşıdı. 19...Kxd7 zorunlu (19...Kf8?? 20.Ba3+ ile kaybeder) ve şah d-hattında kalır. Motor sadece +0.5 diyor, ama Beyazın fil çifti, açık d-hattı ve Siyah şahının kaçacak güvenli bir köşesi olmaması uzun vadeli bir inisiyatif sağlar.' },
    { move: '21b', title: '21...Kc7: küçük ama kalıcı bir yanlış', text: 'Tal şahı c7’ye getirdi; burada 23.Bd6+ ile tempo kazanılarak b6’ya itilebilir. Motor 21...Kc8’i daha sağlam buluyor (+0.35 karşı +0.6): c8’de şah d6’dan şah yemez ve fil b7’yi korumaya devam eder. Bu küçük fark, sonraki c4 ve a4 kırılmalarında şahın vezir kanadında hedef olmasının ilk adımıdır.' },
    { move: '26b', title: '26...Rcd8? Oyunu kaybettiren hata', text: 'Karpov’un 26.a4 hamlesi b5 piyonuna saldırıp a-hattını açmayı amaçlar. Siyahın doğru cevabı 26...Red8 (Motor: +0.6) ya da 26...g5 (+0.7) idi. Tal yanlış kaleyi oynadı: c8’deki kale c-hattını ve c7 karesini bırakınca 27.Rac1! (sonra 28.Bc7+ çatalı) ile Beyaz kazanabilirdi (+2.8). chessgames.com’daki motor yorumları da bu iki kale hamlesi arasındaki büyük farka dikkat çekiyor. Oyunda Beyaz 27.axb5 ile de belirgin avantaj aldı (+2.2).' },
    { move: '30w', title: '30.Be5: d7 kalesinin tek savunucusuna saldırı', text: 'Siyahın d7 kalesi bir kez d4 kalesi, bir kez de d1 kalesi tarafından hedeflenir ve onu yalnızca f6 atı korur. 30.Be5 bu atı tehdit eder: Bxf6 gxf6 Rxd7 tehdidi. 30...Rxd4 31.Bxd4+ sonrası Siyah bir piyon eksik ve şahı açıkta bir oyunsonunda kalır (+3.9); Tal’in 30...Re7 hamlesi ise şahı doğrudan saldırıya açtı (+5.3).' },
    { move: '31w', title: '31.Rd6+: şah ağı', text: 'Kale altıncı yataya gelir, şah b5 piyonunu almak zorunda kalır ve tahtanın ortasına çekilir. 32.Rb1+ ve 33.Rd4+ ile şah c5’e kadar itilir; 34.Nd3+ sonrası motor zorunlu bir mat görüyor (#8). 32...Ka5 ile şah daha uzun dayanabilirdi (+5.4) ama yine de umutsuzdu. İlginç ayrıntı: 33.Rd2! hatta daha hızlı mat ediyordu (#5).' },
  ],
  lessons: [
    'Meran’da Siyah vezir kanadında alan kazanırken Beyaz **e4 ve d5** ile merkezi hemen açmalıdır; gecikirse ...c5 ile Siyah rahatça eşitler.',
    'Keskin açılış yollarında asıl soru kimin daha çok taş aldığı değil, alımlar bittiğinde **kimin şahının güvende olduğudur**: 12.exd7+ sonrası Siyah şahı merkezde kaldı.',
    'Hesaplarda **ara hamleleri** (17.Nf4!) unutmayın: önce vezire saldırıp sonra taşı geri almak, hem materyali hem de inisiyatifi korur.',
    'Vezirler değişilse bile **merkezde kalan şah** oyunsonunda hedeftir; fil şahları (Bd6+) ve kaleler açık hatlarda onu kovalayabilir.',
    'Kazanmak için **piyon kırılmaları** gerekir: Karpov c4 ve a4 ile Siyah şahının önündeki piyon kalkanını söktü ve kalelerine yeni hatlar açtı.',
    'Hangi kalenin nereye gideceği çoğu zaman bütün oyunu belirler: 26...Rcd8? c7 karesini ve c-hattını savunmasız bıraktı, 26...Red8 ise dengeyi koruyordu.',
    'Bir savunucuya iki kez saldırmak (30.Be5 ile f6 atına) ve şahları zorlayıcı hamlelerle sürmek, Karpov’un sade ama acımasız oyunsonu tekniğinin özüdür.',
  ],
  qa: [
    { q: 'Karpov neden 10.e5 değil de 10.d5 oynadı?', a: '10.e5 cxd4 11.Nxb5 Blumenfeld yolu, Beyazın taş fedasıyla devam eden ve çok iyi bilinen bir teorik çizgidir (Motor: +0.4). 10.d5 ise merkezi kapatır ve e6 piyonuna doğrudan baskı kurar; Siyah d5’i e4 piyonu yüzünden kolayca alamaz. Motor iki hamleyi neredeyse eşit görüyor (d5 +0.3). d5 yapısı Siyahın merkezini parçalama ve şahını merkezde bırakma fikrine dayanır; Karpov da bu tipi 1994’te Kramnik’e karşı yeniden kullandı.' },
    { q: 'Tal neden 11...fxe6 yerine 11...cxd3 ile fili aldı?', a: '11...fxe6 sağlam ama pasif bir yoldur: Siyahın e6’da zayıf bir piyonu kalır ve Beyaz 12.Bc2 ile rahat oynar (Motor: +0.3). Tal karakterine uygun olarak taşı almayı ve 12.exd7+ sonrası d3’te ileri bir piyonla dinamik bir oyun kurmayı seçti (Motor: +0.3, yani pratikte eşit). Bedeli ise şahın merkezde kalmasıydı; bu bedel oyunsonunda ortaya çıktı.' },
    { q: '17.Nf4 neden 17.bxc3’ten daha iyiydi?', a: '17.bxc3 hemen taşı alır, ama Siyah 17...O-O-O ile şahını kurtarır ve oyun dengelenir (Motor: +0.1). 17.Nf4! önce vezire saldırır; vezir d7’ye gidince Siyah artık uzun rok için zaman bulamaz, çünkü Beyaz 18.bxc3 ve 19.Qxd7+ ile hemen vezirleri değişir. Böylece şah merkezde kalır ve at f4’te aktif bir karede durur.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Materyal 18...Nxe4 sonrası eşitti ve motor oyunsonunu yalnızca +0.5 görüyordu. Avantaj üç küçük unsurdan geldi: Siyah şahının merkezde kalması, Beyazın açık d-hattı ve a3-d6 çaprazını kullanan fili. Karpov bu unsurları Ba3, Red1+, Bd6+ ve c4-a4 kırılmalarıyla birleştirerek şahı b6’ya, oradan da vezir kanadının açılan hatlarına itti.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En net an 26. hamledir: 26...Red8! (Motor: +0.6) ya da 26...g5 (+0.7) ile Siyah dengeyi koruyordu. Oyundaki 26...Rcd8? c-hattını bıraktı ve 27.Rac1! ile Bc7+ tehdidine yol açtı (+2.8). Daha önce de 21...Kc7 yerine 21...Kc8 (+0.35) şahı Bd6+ şahından korurdu.' },
    { q: '26...Rcd8 neden bu kadar kötüydü, iki kale hamlesi arasında ne fark var?', a: 'c8’deki kale hem c-hattını hem c7 karesini koruyordu. Kale d8’e gidince Beyazın 27.Rac1! hamlesi c-hattını alır ve 28.Bc7+ ile şahla d8 kalesini çatallama tehdidi doğar: 27...Rd7 28.Bc7+ Ka7 29.Rxd7 Nxd7 30.axb5 ile Beyaz kazanır (+2.8). 26...Red8 ise e8 kalesini oynar ve c8 kalesini yerinde bırakır; o zaman Bc7+ hamlesi Rxc7 ile karşılanır.' },
    { q: 'Karpov neden 19.Qxd7+ ile vezirleri değişti, saldırıya devam etmedi?', a: 'Vezirlerle oynarsa Siyah 19...O-O’ya zaman bulamaz ama taşları hızla gelişir ve Tal taktik karmaşadan beslenirdi. Vezirler değişince Siyah şahı rok yapma hakkını tamamen yitirir ve merkezde kalır, Beyazın fil çifti ise oyunsonunda daha da değerlenir. Motor da 19.Qxd7+’yı en iyi hamle olarak gösteriyor (+0.55); 19.f3 Qxd1 benzer ama daha az kesin.' },
    { q: 'Son ağ nasıl kapandı, Siyah şahı neden kaçamadı?', a: '31.Rd6+ Kxb5 32.Rb1+ Kc4 33.Rd4+ Kc5 34.Nd3+ ile şah c5’te; Beyazın kaleleri b- ve d-hatlarında, fili e5’te ve atı d3’te tüm kaçış karelerini kontrol eder. Motor bundan sonra 34...Kc6 35.Rc1+ Kb6 36.Rb4+ Ka7 37.Ra1+ gibi zorunlu bir mat görüyor. Tal bu yüzden terk etti.' },
  ],
  notes: {
    '1w': {
      text: '1.c4 ile Karpov İngiliz Açılışı’yla başlıyor; d5 karesini yandan kontrol eder ve d-piyonunun hareketini sonraya bırakır.',
      amac: 'Esnek bir başlangıçla rakibin kurulumunu görmek ve oyunu gerekirse Vezir Gambiti yapılarına taşımak.',
      neden: '1.c4 sonra d4 hamlesiyle Vezir Gambiti’ne dönülebilir; bu hamle sırası Siyaha Nimzo-Hint veya Grünfeld gibi bazı seçenekleri daraltır. Karpov kariyerinde 1.e4 ve 1.d4’ü daha sık oynasa da 1.c4 ile de pek çok oyunda Vezir Gambiti yapılarına geçmiştir.',
      diger: [
        { move: '1.e4', text: 'Motorun ilk tercihi (+0.4), ama Tal’e karşı açık ve taktik oyunlara davet eder.' },
        { move: '1.d4', text: 'Doğrudan Vezir Gambiti yapıları (+0.2); oyunda zaten 3.d4 ile bu yapıya dönülecek.' },
      ],
    },
    '1b': {
      text: '1...e6: Siyah esnek bir hamleyle hem ...d5’i hem de Fransız/Vezir Gambiti tipi yapıları hazırlar.',
      amac: '...d5 ile merkezi tutmak ve Beyazın İngiliz Açılışı’nı Vezir Gambiti yapısına çekmek.',
      neden: '1...e6 sonrası Beyaz 2.d4 oynarsa Vezir Gambiti Reddi’ne geçilir; Tal böylece iyi bildiği klasik yapıları hedefler. Simetrik 1...c5 veya 1...e5’e göre daha sağlam bir yoldur.',
      diger: [
        { move: '1...c5', text: 'Simetrik İngiliz (Motor: +0.2); daha uzun bir manevra oyunu.' },
        { move: '1...e5', text: 'Ters Sicilya; Beyaz g3-Bg2 ile oynar (+0.2).' },
      ],
    },
    '2w': {
      text: '2.Nc3 ile at gelişir ve d5 ile e4 karelerini kontrol eder.',
      amac: 'e4 hamlesini destekleyecek ve merkezde baskı kuracak taşı hemen oyuna sokmak.',
      neden: 'Nc3 sonrası Beyaz hem 3.e4 (merkezi kurmak) hem de 3.d4 (Vezir Gambiti) seçeneklerini elinde tutar. 2.Nf3 (+0.45) daha esnektir ama Karpov c3 atını önce getirerek ...d5’e baskı yapar.',
      diger: [
        { move: '2.Nf3', text: 'Motorun en sevdiği hamle (+0.45); Réti/İngiliz esnekliğini korur.' },
        { move: '2.d4', text: 'Doğrudan Vezir Gambiti (+0.3); 2...Bb4+ gibi seçenekler verir.' },
      ],
    },
    '2b': {
      text: '2...d5 ile Siyah merkeze piyon koyar ve c4’e karşı durur.',
      amac: 'Merkezde pay almak ve Beyazın e4 ile tam merkez kurmasını engellemek.',
      neden: '2...d5 en klasik cevaptır; 2...Bb4 (+0.3) Nimzo tipi bir oyun, 2...c5 ise (+0.4) Simetrik İngiliz’e yakın bir yapı verir. Tal Vezir Gambiti yapısına girmeyi seçiyor.',
      diger: [
        { move: '2...Bb4', text: 'c3 atını bağlayan esnek bir hamle (Motor: +0.3).' },
        { move: '2...c5', text: 'Daha dinamik ama Beyaz e4 ile alan alabilir (+0.4).' },
      ],
    },
    '3w': {
      text: '3.d4 ile oyun Vezir Gambiti Reddi’ne döner.',
      amac: 'Merkezi d4 ve c4 piyonlarıyla kurmak, klasik Vezir Gambiti planlarına girmek.',
      neden: 'Motor 3.d4’ü (+0.3) en iyi hamle olarak görüyor. 3.cxd5 exd5 4.d4 de benzer yapılara gider ama Siyahın c8 filini serbest bırakır.',
      diger: [
        { move: '3.cxd5', text: '3...exd5 4.d4 ile Değişim yapısı (+0.3); Siyahın c8 fili özgürleşir.' },
        { move: '3.e4', text: 'Daha keskin ama 3...dxe4 sonrası e4 piyonu hedef olur.' },
      ],
    },
    '3b': {
      text: '3...c6: ...e6 ile birlikte Yarı Slav kurulumu. d5 piyonu ikinci kez desteklenir.',
      amac: 'Sağlam bir merkez kurmak ve ileride ...dxc4 ile ...b5 hamlelerine zemin hazırlamak.',
      neden: 'Yarı Slav, Siyaha hem sağlam bir merkez hem de c4’ü alıp vezir kanadında genişleme imkânı verir. Motor 3...Nf6’yı biraz daha iyi buluyor (+0.3 karşı +0.5), ama c6 Meran tipi keskin oyunları hedefler; Tal bu dinamik yapıyı tercih etti.',
      diger: [
        { move: '3...Nf6', text: 'Klasik Vezir Gambiti Reddi (Motor: +0.3); 4.cxd5 exd5 5.Bg5 ile Değişim Varyantı.' },
        { move: '3...Be7', text: 'Hamle sırası inceliği; Beyazın Bg5 açılımlarını azaltır (+0.4).' },
      ],
    },
    '4w': {
      text: '4.e3 ile d4 piyonu desteklenir ve f1 filine d3 karesi açılır.',
      amac: 'Sakin gelişim: Bd3, Nf3 ve O-O ile ardından e4 vuruşunu hazırlamak.',
      neden: '4.e4 (Motor: +0.6) Marshall Gambiti’ne benzer keskin bir yoldur ve Tal’e taktik fırsatlar verir. Karpov sağlam 4.e3’ü seçerek Meran tipi pozisyonlara yöneliyor.',
      diger: [
        { move: '4.e4', text: 'Marshall Gambiti fikri: 4...dxe4 5.Nxe4 (+0.6); çok keskin ve teorik.' },
        { move: '4.Nf3', text: 'Normal hamle sırası (+0.4); 4...dxc4 ile Noteboom/Abrahams yollarına izin verir.' },
      ],
    },
    '4b': {
      text: '4...Nf6 ile at gelişir ve e4 karesini kontrol eder.',
      amac: 'Gelişimi sürdürmek ve Beyazın e4 hamlesini zorlaştırmak.',
      neden: 'Motor 4...Nd7’yi biraz daha esnek görüyor (+0.3), ama Nf6 Yarı Slav’ın standart hamlesidir ve Meran’a giden ana yoldur.',
      diger: [
        { move: '4...Nd7', text: 'Önce d7 atı, f6 sonra (+0.3); bazı Beyaz kurulumlarını engeller.' },
        { move: '4...Be7', text: 'Daha sakin bir yol (+0.5).' },
      ],
    },
    '5w': {
      text: '5.Nf3 ile ikinci at gelişir; pozisyon artık Yarı Slav’ın 5.e3 ana yoludur.',
      amac: 'Şah kanadı taşlarını geliştirip rok yapmak ve e4 için hazırlık yapmak.',
      neden: '5.Qc2 (+0.25) Anti-Meran tipi bir kurulumdur. Nf3 ile Beyaz en klasik yolu seçiyor; böylece 5...Nbd7 6.Bd3 sonrası Meran’a girilir.',
      diger: [
        { move: '5.Qc2', text: 'Anti-Meran tipi kurulum (+0.25); e4’ü vezirle destekler.' },
        { move: '5.b3', text: 'Daha sakin bir yol (+0.1).' },
      ],
    },
    '5b': {
      text: '5...Nbd7: at d7’den e5 ve c5 karelerini destekler.',
      amac: 'İleride ...e5 veya ...c5 merkez vuruşlarını hazırlamak ve f6 atını desteklemek.',
      neden: 'Motor 5...Nbd7’yi (+0.2) en iyi görüyor. 5...Bd6 (Motor: +0.4) daha aktif bir fil yeri arar ama e4 vuruşuna karşı daha hassastır.',
      diger: [
        { move: '5...Bd6', text: 'Aktif fil ama 6.Bd3 ve e4 ile Beyaz tempo kazanabilir (+0.4).' },
        { move: '5...Be7', text: 'Pasif ama sağlam (+0.4).' },
      ],
    },
    '6w': {
      text: '6.Bd3 ile fil d3’e gelişir ve e4 vuruşunu hazırlar.',
      amac: 'Rok yapmaya hazırlanmak ve e4 piyon hamlesini desteklemek.',
      neden: 'Bd3 Siyahı 6...dxc4 7.Bxc4 b5 yoluna davet eder; Meran Varyantı’nın başlangıcıdır. 6.Qc2 (+0.2) ise Anti-Meran’dır ve Siyahın ...dxc4 ile tempo kazanmasını önler.',
      diger: [
        { move: '6.Qc2', text: 'Anti-Meran (+0.2); 6...Bd6 7.Bd3 ile oyun devam eder.' },
        { move: '6.Be2', text: 'Daha sakin; fil e2’den ...dxc4 sonrası tempo kaybetmez.' },
      ],
    },
    '6b': {
      text: '6...dxc4: Siyah c4’ü alır; Beyaz fili ikinci kez hamle yapmak zorunda kalır.',
      amac: 'Fili tempo ile kovmak, ardından ...b5 ile vezir kanadında genişlemek.',
      neden: 'Bu hamle Meran’ın temelidir: Siyah merkezdeki d5 piyonunu bırakır ama karşılığında tempo kazanıp ...b5, ...Bb7, ...c5 ile oyun kurar. Motor dxc4’ü açık farkla en iyi görüyor (+0.2); 6...Bb4 (+0.4) daha pasif bir alternatiftir.',
      diger: [
        { move: '6...Bb4', text: 'Romih Varyantı (+0.4); 7.Qb3 veya a3 ile Beyaz fil çiftini hedefler.' },
        { move: '6...Bd6', text: 'Chigorin/Bisguier tipi, sağlam ama pasif.' },
      ],
    },
    '7w': {
      text: '7.Bxc4: fil piyonu geri alır.',
      amac: 'Materyali dengelemek; fili aktif bir kareye getirmek.',
      neden: 'Zorunluya yakın bir hamle; 7.Bc2 veya 7.Bb1 piyonu geri almaz ve Siyahın üstünlüğüne yol açar (−0.6/−0.8).',
    },
    '7b': {
      text: '7...b5: Meran Varyantı. Fil tempo ile kovulur ve b7 karesi fil için açılır.',
      amac: 'Vezir kanadında alan kazanmak, fili b7’den uzun çapraza getirmek ve ...c5’i hazırlamak.',
      neden: 'Varyant adını Meran 1924’ten alır; Grünfeld burada Rubinstein’a karşı bu yapıyla kazanmıştı. Motor 7...b5’i (+0.2) açık farkla en iyi görüyor; 7...c5 (+0.5) daha az aktif kalır.',
      diger: [
        { move: '7...c5', text: 'Doğrudan merkeze vuruş ama tempo kazanılmaz (+0.5).' },
        { move: '7...Be7', text: 'Sakin; Beyaz a4 ve e4 ile serbestçe oynar (+0.5).' },
      ],
    },
    '8w': {
      text: '8.Bd3 ile fil d3’e döner ve e4’ü destekler.',
      amac: 'Fili ana çapraza getirmek, e4 hamlesini hazırlamak ve rok yapmak.',
      neden: 'Bd3 Meran’ın ana yoludur (+0.2); 8.Be2 ve 8.Bb3 (Motor: +0.0) daha az iddialıdır. d3’teki fil e4 vuruşunu destekler ve b1-h7 çaprazında Siyahın şahına bakar.',
      diger: [
        { move: '8.Be2', text: 'Daha sakin; e4 hazırlığı yavaşlar (+0.0).' },
        { move: '8.Bb3', text: 'Fil a2-g8 çaprazında, ama ...b4 ve ...c5 ile Siyah rahat oynar (+0.0).' },
      ],
    },
    '8b': {
      text: '8...a6: Klasik Meran. b5 piyonu korunur ve ...c5 hazırlanır.',
      amac: '...c5 ile merkeze vurduğunda b5 piyonunun Nxb5 ile alınmamasını sağlamak.',
      neden: 'Wikipedia’daki Yarı Slav maddesine göre 8...a6 Klasik Meran’dır; Beyaz buna hemen 9.e4 ile merkezde karşılık vermelidir, aksi halde ...c5 ile Siyah kolayca eşitler. 8...Bb7 (Modern Meran, Motor: +0.15) ve 8...b4 (Motor: +0.3) de oynanır.',
      diger: [
        { move: '8...Bb7', text: 'Modern/Geliştirilmiş Meran (+0.15); Larsen 1960’ların sonunda bu yolu popülerleştirdi.' },
        { move: '8...b4', text: 'Atı kovar: 9.Ne4 Nxe4 10.Bxe4 (+0.3).' },
      ],
    },
    '9w': {
      text: '9.e4: Beyaz merkezi açıyor.',
      amac: 'Siyah vezir kanadında hamle yaparken merkezde inisiyatifi almak ve e5 ya da d5 ile Siyahın merkezini parçalamak.',
      neden: 'Bu, Meran’ın ana fikridir: Siyahın ...c5’ini beklemeden merkezde vurmak. Motor 9.e4’ü (+0.16) en iyi görüyor. 9.O-O Siyaha ...c5’i rahatça yapma fırsatı verir.',
      diger: [
        { move: '9.O-O', text: '9...c5 ile Siyah rahat eşitler (Reynolds yapısı ileride 10.e4 c5 11.d5 ile de gelebilir).' },
        { move: '9.a4', text: 'b5 piyonunu sorgular (+0.1); 9...b4 10.Ne4 ile oyun daha sakin geçer.' },
      ],
    },
    '9b': {
      text: '9...c5: Siyah d4’e vurur ve merkezde payını ister.',
      amac: 'd4 piyonunu ortadan kaldırmak, b7’ye gelecek filin uzun çaprazını açmak.',
      neden: 'Bu, Klasik Meran’ın can alıcı hamlesidir (Motor: +0.3). 9...b4 de oynanır (+0.4), ama 9...Qa5? 10.e5 b4 11.exf6 ile kötüdür (+1.1).',
      diger: [
        { move: '9...b4', text: '10.Na4 c5 ile oynanır (+0.4); daha sakin bir yol.' },
        { move: '9...Qa5?', text: '10.e5 b4 11.exf6 bxc3 ile Beyaz kazanç sağlar (+1.1).' },
      ],
    },
    '10w': {
      text: '10.d5: piyon ilerler, e6’ya baskı yapar ve merkezi kapatır.',
      amac: 'Siyahın merkezini bölmek, dxe6 ile Siyahın piyon yapısını bozmak ve şahını merkezde tutmak.',
      neden: 'İki ana yol var: 10.e5 cxd4 11.Nxb5 ile Blumenfeld Varyantı (Motor: +0.4) ve 10.d5 (+0.3). Wikipedia’ya göre 10.d5 çoğunlukla Reynolds Saldırısı yapılarına dönüşür ve Siyah d5’i kolayca alamaz, çünkü e4 piyonu karşılık verir. Karpov keskin ama yapısal olarak net olan d5’i seçti.',
      diger: [
        { move: '10.e5', text: 'Blumenfeld: 10...cxd4 11.Nxb5 axb5 12.exf6 (+0.4); çok iyi bilinen keskin teori.' },
        { move: '10.Be3', text: 'Yavaş; 10...cxd4 11.Bxd4 Bc5 ile Siyah iyi oynar (−0.2).' },
      ],
    },
    '10b': {
      text: '10...c4: Tal fili kovar ve keskin yolu seçer.',
      amac: 'd3 filini kovmak, merkezde karmaşa yaratmak ve 11.dxe6 sonrası cxd3 ile taş almak.',
      neden: 'Motor 10...c4, 10...Qc7 ve 10...Bb7’yi neredeyse eşit görüyor (hepsi +0.25). Tal bu üç seçenekten en kesin ve en keskin olanını seçti: artık iki taraf da taş alabilir ve sakin bir oyun imkânsızlaşır.',
      diger: [
        { move: '10...Qc7', text: 'Sakin gelişim (+0.25); 11.O-O Bb7 12.dxe6 fxe6 ile e6 zayıflığı kalır.' },
        { move: '10...Bb7', text: 'Fil gelişir (+0.25); 11.dxe6 fxe6 12.Bc2 c4 benzer yapılara gider.' },
      ],
    },
    '11w': {
      text: '11.dxe6: Beyaz e6’yı alır; fil gidecek ama d7 atı da düşecek.',
      amac: 'Siyahın piyon yapısını kırmak ve exd7+ ile şahın rok yapmasını engellemek.',
      neden: 'Motor 11.dxe6’yı (+0.34) en iyi görüyor. 11.Bc2 (+0.2) fili korur ama Siyah 11...e5 ile merkezi kapatır ve rahatlar.',
      diger: [
        { move: '11.Bc2', text: '11...e5 12.O-O Qc7 ile Siyah merkezi kapatır (+0.2); Reynolds yapısı.' },
        { move: '11.Bb1', text: 'Fil kaçar ama pasif kalır (−0.2).' },
      ],
    },
    '11b': {
      text: '11...cxd3: Siyah fili alır; d3’te ileri bir piyon kalır.',
      amac: 'Taş almak ve d3’teki piyonla Beyazın kampını rahatsız etmek.',
      neden: 'Daha sakin 11...fxe6 de mümkündü (Motor: +0.3); Karpov–Kramnik, Linares 1994’te Kramnik bu yolu seçti ve e6’da zayıf bir piyonla kaldı. Tal taşı almayı ve dinamik oyunu tercih etti (+0.3). 11...Nc5? ise 12.exf7+ Ke7 13.Bc2 ile kötüdür (+1.3).',
      diger: [
        { move: '11...fxe6', text: 'Sağlam ama e6 zayıf kalır: 12.Bc2 Qc7 13.O-O Bb7 (+0.3).' },
        { move: '11...Nc5?', text: '12.exf7+ Ke7 13.Bc2 ile Siyahın şahı açılır (+1.3).' },
      ],
    },
    '12w': {
      text: '12.exd7+: Beyaz atı şahla alır; taşlar eşitlenir.',
      amac: 'Materyali dengelemek ve Siyahı tempo kaybettirecek şekilde geri almaya zorlamak.',
      neden: 'Tek iyi hamle (+0.44). 12.exf7+ Kxf7 13.e5 (−0.5) ve 12.e5? (−1.2) taşı geri almaz ve Beyazı kötü durumda bırakır.',
      diger: [
        { move: '12.exf7+', text: '12...Kxf7 13.e5 Qe7 sonrası Siyah taş fazlası tutar (−0.5).' },
      ],
    },
    '12b': {
      text: '12...Qxd7: vezir geri alır. Materyal eşit.',
      amac: 'Taşı en doğal şekilde geri almak ve d3 piyonunu vezirle desteklemek.',
      neden: 'Motor Qxd7’yi (+0.5) en iyi görüyor. 12...Nxd7? 13.Qxd3 ile d3 piyonu düşer ve vezirler değişir (+1.3); 12...Bxd7 13.e5 b4 14.exf6 ile Beyaz avantaj alır (+0.9).',
      diger: [
        { move: '12...Nxd7?', text: '13.Qxd3 ile d3 piyonu gider (+1.3).' },
        { move: '12...Bxd7', text: '13.e5 b4 14.exf6 bxc3 15.Qxd3 (+0.9).' },
      ],
    },
    '13w': {
      text: '13.O-O: Beyaz rok yapar.',
      amac: 'Şahını güvenceye almak ve kaleleri merkeze getirmek; Siyah şahının merkezde kalmasından yararlanmak.',
      neden: 'Motor O-O’yu (+0.6) en iyi görüyor. 13.Ne5 (+0.35) d3’e hemen saldırır, ama şah güvenliği önce gelir; chessgames.com yorumcuları da 13.Ne5 ile 13.O-O’yu karşılaştırmış.',
      diger: [
        { move: '13.Ne5', text: '13...Qb7 14.O-O Be7 15.Nxd3 (+0.35); biraz daha az kesin.' },
        { move: '13.Bg5', text: '13...Bb7 14.O-O Be7 (+0.1).' },
      ],
    },
    '13b': {
      text: '13...Bb7: fil uzun çaprazda e4’e baskı yapar.',
      amac: 'Fili geliştirmek ve e4 piyonunu hedef almak.',
      neden: 'Motor 13...Bb7 ve 13...Be7’yi (+0.5) eşit görüyor. Bb7 e4’e doğrudan baskı yapar; 13...Bb4 (+0.7) ise 14.Ne5 ile Beyaz için daha iyidir.',
      diger: [
        { move: '13...Be7', text: '14.Ne5 Qb7 15.Nxd3 b4 (+0.5); kısa rok hazırlar.' },
        { move: '13...Bb4', text: '14.Ne5 Qe6 15.Nxd3 Bxc3 (+0.7).' },
      ],
    },
    '14w': {
      text: '14.Re1: kale e1’de; e4’ü korur ve e-hattına baskı yapar.',
      amac: 'e4 piyonunu korumak, e-hattını kontrol etmek ve Siyah şahının merkezde kalmasını kullanmak.',
      neden: 'chessgames.com sayfasındaki yorumlara göre Gligoriç’in “Ayın Oyunu” köşesinde 14.Re1 teorik yenilik olarak geçiyor. Motor 14.Bg5 (+0.5) ve 14.Re1’i (+0.5) eşit görüyor. Re1 hem e4’ü korur hem de ...Bb4-xc3 fikrine karşı hazırlık yapar.',
      diger: [
        { move: '14.Bg5', text: '14...Be7 15.Re1 Rd8 16.e5 (+0.5).' },
        { move: '14.Ne5', text: '14...Qd4 15.Nf3 Qd8 (+0.3).' },
      ],
    },
    '14b': {
      text: '14...Bb4: fil b4’ten c3 atına baskı yapar.',
      amac: 'e4’ün savunucusu c3 atını değişip e4’ü almak.',
      neden: 'Motor 14...Bc5 (+0.4) ve 14...Bb4’ü (+0.5) eşit görüyor. Bb4 doğrudan Bxc3 ve Nxe4 tehdidi yaratır; Bc5 ise f2’ye bakar.',
      diger: [
        { move: '14...Bc5', text: '15.Be3 Bxe3 16.Rxe3 Rd8 (+0.4).' },
        { move: '14...Be7', text: '15.e5 Nd5 16.Ne4 O-O (+0.5).' },
      ],
    },
    '15w': {
      text: '15.Ne5: at vezire saldırır ve d3 piyonuna bakar.',
      amac: 'Vezire tempo kazanarak d3 piyonunu almak.',
      neden: 'Motor 15.Bg5 (+0.4) ve 15.Ne5’i (+0.4) eşit görüyor. Ne5 d3 piyonunu doğrudan hedef alır ve Siyahı zorlu kararlara iter.',
      diger: [
        { move: '15.Bg5', text: '15...O-O 16.Bxf6 gxf6 17.Re3 (+0.4).' },
        { move: '15.Re3', text: '15...Bxc3 16.bxc3 O-O (0.0).' },
      ],
    },
    '15b': {
      text: '15...Qe6: vezir e6’ya; e-hattında.',
      amac: 'Vezir e-hattında e4’e bakmaya devam eder ve d3 piyonunu desteklemeye çalışır.',
      neden: 'Motor 15...Qd6’yı biraz daha iyi buluyor (+0.3 karşı +0.4). Qe6 e4 piyonuna baskıyı sürdürür ama 17.Nf4 ile saldırıya açık kalır.',
      diger: [
        { move: '15...Qd6', text: '16.Bf4 Bxc3 17.Nxd3 Qd7 (+0.3).' },
        { move: '15...Qc7', text: '16.Nxd3 Bxc3 17.Bf4 Qd7 (+0.5).' },
      ],
    },
    '16w': {
      text: '16.Nxd3!: ileri piyon temizlendi.',
      amac: 'd3 piyonunu ortadan kaldırmak ve atı aktif bir kareye getirmek.',
      neden: 'Motor Nxd3’ü (+0.6) açık farkla en iyi görüyor. 16.Nf3 (−0.5) ve 16.Bf4 (−0.6) Siyaha d3 piyonunu tutma şansı verir.',
      diger: [
        { move: '16.Nf3', text: '16...O-O 17.Qxd3 Rfd8 ile Siyah aktif (−0.5).' },
        { move: '16.Bf4', text: '16...Rd8 17.Re3 d2 ile piyon tehlikeli (−0.6).' },
      ],
    },
    '16b': {
      text: '16...Bxc3: Siyah c3 atını alır.',
      amac: 'e4’ün savunucusunu kaldırmak ve materyali dengede tutmak.',
      neden: 'Tek makul hamle (+0.4). 16...Rd8 (+1.7) ve 16...Be7 (+1.9) Beyazın gelişimini kolaylaştırır.',
      diger: [
        { move: '16...Rd8', text: '17.Nd5 Bd6 18.Bg5 (+1.7).' },
        { move: '16...Be7', text: '17.Nf4 Qd7 18.Qb3 (+1.9).' },
      ],
    },
    '17w': {
      text: '17.Nf4!: ara hamle; vezire saldırı.',
      amac: 'Vezire tempo kazanarak saldırmak, sonra bxc3 ile taşı geri almak.',
      neden: 'Motor Nf4’ü (+0.3) en iyi görüyor. 17.bxc3 (+0.1) hemen alır ama Siyah 17...O-O-O ile şahını güvenceye alır.',
      diger: [
        { move: '17.bxc3', text: '17...O-O-O 18.f3 Qc4 (+0.1); şah güvende.' },
        { move: '17.Nc5?', text: '17...Qc6 18.Nxb7 Bxe1 (−2.2).' },
      ],
    },
    '17b': {
      text: '17...Qd7: vezir d7’ye çekilir ve d-hattında Beyazın veziriyle karşı karşıya gelir.',
      amac: 'Veziri güvenli bir kareye çekerken d1 vezirine karşı durmak; 18.bxc3 sonrası ...Nxe4 ile e4 piyonunu almaya hazırlanmak.',
      neden: 'c3’teki fil zaten kurtarılamaz, bu yüzden Siyah veziri en iyi yere koymaya bakar. Motor Qd7’yi en iyi görüyor (+0.4). 17...Qc4 ve 17...Qc6 (her ikisi +0.6) c3 piyonunu hedef alır, ama Beyaz 18.bxc3 O-O 19.f3 ile e4’ü sağlamlaştırır ve fil çiftiyle rahat oynar. d7’deki vezir ise vezir değişimini kabul etmek pahasına e4’ü kazanmayı sağlar.',
      diger: [
        { move: '17...Qc4', text: '18.bxc3 O-O 19.f3 Qxc3 20.Be3 (Motor: +0.6); Siyah c3’ü alır ama e4 kalır ve Beyazın filleri güçlenir.' },
        { move: '17...Qc6', text: '18.bxc3 O-O 19.f3 Qxc3 (+0.6); benzer tablo, Beyaz rahat.' },
      ],
    },
    '18w': {
      text: '18.bxc3: Beyaz fili geri alır; taşlar yeniden eşit.',
      amac: 'Ara hamlenin karşılığını tahsil etmek: c3’teki fil alınır ve materyal dengelenir.',
      neden: 'Pratikte zorunlu (+0.6). 18.Qxd7+ önce de oynanabilirdi (+0.5) ama 18.Rf1?? Be5 ile fil kurtulur ve Beyaz bir taş eksik kalır (−4.1). c-piyonları ikilenir, fakat Beyazın kazancı açık b-hattı ve a3-f8 çaprazına gidecek c1 filidir.',
      diger: [
        { move: '18.Qxd7+', text: '18...Kxd7 19.bxc3 Nxe4 20.Ba3 ile aynı yapıya döner (+0.5).' },
      ],
    },
    '18b': {
      text: '18...Nxe4: Siyah e4 piyonunu alır. Materyal tam eşit.',
      amac: 'd3’te kaybettiği piyonun karşılığını almak ve atı merkezde güçlü bir kareye yerleştirmek.',
      neden: 'Motor Nxe4’ü en iyi görüyor (+0.6); at e4’te c3’e ve f2’ye bakar ve b7 filiyle desteklenir. 18...O-O şahı kurtarır ama bir piyon eksik kalır (19.f3 Qc7 20.Bd2, +1.0). Tal piyonu almayı seçti; bunun bedeli, vezir değişiminden sonra şahın merkezde kalmasıdır.',
      diger: [
        { move: '18...O-O', text: '19.f3 Qc7 20.Bd2 Rfd8 (+1.0); şah güvende ama Siyah piyon eksik.' },
        { move: '18...Qxd1', text: '19.Rxd1 Nxe4 20.Ba3 Rd8 (+1.0); Beyazın kalesi tempo kazanarak d-hattına gelir.' },
      ],
    },
    '19w': {
      text: '19.Qxd7+: Karpov vezirleri değişir; Siyah şahı rok yapamadan merkezde kalıyor.',
      amac: 'Taktik karmaşayı azaltıp, Siyahın merkezde kalmış şahını sabırla hedef alabileceği bir oyunsonuna geçmek.',
      neden: 'Bu tipik bir Karpov kararıdır: vezirler gidince Tal’in taktik hayal gücü sınırlanır, Siyahın rok hakkı anlamını yitirir ve Beyazın fil çifti oyunsonunda değer kazanır. Motor Qxd7+’yı (+0.55) en iyi görüyor. 19.f3 Qxd1 20.Rxd1 Nxc3 21.Re1+ de benzer (+0.5), ama Siyaha c3 piyonunu verir.',
      diger: [
        { move: '19.f3', text: '19...Qxd1 20.Rxd1 Nxc3 21.Re1+ (+0.5); Siyah bir piyonu geri alır.' },
        { move: '19.Bb2', text: '19...Qxd1 20.Raxd1 O-O (+0.1); Siyah şahını kurtarır ve rahatlar.' },
      ],
    },
    '19b': {
      text: '19...Kxd7: zorunlu geri alış; şah d7’de, açık d-hattının üzerinde.',
      amac: 'Veziri geri almak.',
      neden: 'Başka hamle yok: 19...Kf8?? veziri almaz ve Beyaz bir vezir fazlasıyla kalır (+10.5). Şah artık hem d-hattında hem de Ba3-d6 çaprazının yakınında; sonraki hamlelerin hepsi bu şahın etrafında dönecek.',
    },
    '20w': {
      text: '20.Ba3: fil a3-f8 çaprazına gelir; e7 ve f8 karelerini keser.',
      amac: 'Şahın şah kanadına, güvenli bölgeye kaçmasını engellemek ve fili d6 gibi ileri karelere hazırlamak.',
      neden: 'Ba3 hem çift c-piyonunun önündeki c1 filini aktifleştirir hem de Siyah kalelerinin e-hattında rahatça birleşmesini zorlaştırır (e7 kontrol altında). Motor Ba3’ü en iyi görüyor (+0.4); 20.c4 ve 20.f3 de benzerdir (+0.4), ama fil önce aktif kareye gelir.',
      diger: [
        { move: '20.c4', text: '20...Rhc8 21.cxb5 axb5 22.f3 (+0.4); çift piyonu çözer ama fil pasif kalır.' },
        { move: '20.f3', text: '20...Nxc3 21.Bb2 Rhc8 22.Re3 (+0.4); Siyah c3 piyonunu alır.' },
      ],
    },
    '20b': {
      text: '20...Rhe8: h8 kalesi e8’e, açık e-hattına gelir.',
      amac: 'Kaleyi oyuna sokmak ve e1 kalesine karşı e-hattında durmak; e4 atını desteklemek.',
      neden: 'h8 kalesi aksi halde uzun süre oyun dışı kalırdı. Motor 20...Rad8 (+0.4) ve 20...Rhe8’i (+0.4) eşit görüyor; Rad8 d-hattına hemen itiraz eder ve şahın önüne kale koyar. 20...Rac8 (+0.6) ise 21.Bb4 sonrası daha zayıftır.',
      diger: [
        { move: '20...Rad8', text: '21.Bb4 Nd6 22.Nh5 Rhg8 (+0.4); d-hattına itiraz.' },
        { move: '20...Rac8', text: '21.Bb4 Rhe8 22.a4 Kc6 (+0.6).' },
      ],
    },
    '21w': {
      text: '21.Red1+: kale tempo kazanarak d-hattına gelir ve şaha şah çeker.',
      amac: 'Açık d-hattını almak ve şahı d7’den uzaklaştırarak vezir kanadına itmek.',
      neden: 'e1 kalesi e-hattında e8 kalesine karşı fazla iş yapmıyordu; d-hattında hem şahı rahatsız eder hem de d6/d7 karelerine hükmeder. Motor Red1+’i en iyi görüyor (+0.5); 21.c4 (+0.1) Siyaha 21...Nc3 ile aktiflik verir.',
      diger: [
        { move: '21.c4', text: '21...Nc3 22.Nd3 Kc7 23.Ne5 (+0.1); Siyahın atı c3’e yerleşir.' },
        { move: '21.Rec1', text: '21...g5 22.Nh5 g4 (0.0); pasif.' },
      ],
    },
    '21b': {
      text: '21...Kc7: şah c7’ye gider.',
      amac: 'Şahı d-hattından çıkarmak ve b7 filine, b6/c6 karelerine yakın tutmak.',
      neden: 'Siyah şahın vezir kanadında piyonlarının arkasında güvende olacağını düşünür. Ancak c7’de şah 23.Bd6+ ile tempo kaybeder. Motor 21...Kc8’i daha sağlam buluyor (+0.35 karşı +0.6): c8’de fil şah çekemez ve şah b7 filini korur.',
      diger: [
        { move: '21...Kc8', text: '22.f3 Nf6 23.c4 Bc6 24.Bb2 (+0.35); şah Bd6+ şahından korunur.' },
        { move: '21...Kc6', text: '22.f3 Nf6 23.c4 Rac8 (+0.9); şah c-hattında daha da açık kalır.' },
      ],
    },
    '22w': {
      text: '22.f3: e4 atı kovulur.',
      amac: 'Siyahın merkezdeki en iyi taşını geri çekilmeye zorlamak ve e4 karesini Siyah taşlarına kapatmak.',
      neden: 'At e4’te c3’e ve d2’ye baskı yapıyordu. f3 sonrası at f6’ya döner ve Beyaz Bd6+ ile c4 planına devam eder. Motor f3’ü açık farkla en iyi görüyor (+0.6); 22.c4 (+0.1) ve 22.h4 (−0.1) atı merkezde bırakır.',
      diger: [
        { move: '22.c4', text: '22...g5 23.Ne2 Red8 (+0.1); at e4’te kalır.' },
        { move: '22.h4', text: '22...Rad8 23.f3 Nd6 (−0.1).' },
      ],
    },
    '22b': {
      text: '22...Nf6: at f6’ya çekilir.',
      amac: 'Atı güvenli bir kareye çekmek; d5 ve e4 karelerini kontrol etmeye devam etmek.',
      neden: 'Motor Nf6’yı en iyi görüyor (+0.6). 22...Ng5 (+1.1) atı kenara yaklaştırır; 22...b4? ise 23.cxb4 Nf6 24.Rac1+ ile piyon kaybettirir (+2.9).',
      diger: [
        { move: '22...Ng5', text: '23.Bd6+ Kb6 24.c4 Ne6 (+1.1); at daha az aktif.' },
        { move: '22...b4?', text: '23.cxb4 Nf6 24.Rac1+ Kb6 (+2.9); piyon gider ve c-hattı açılır.' },
      ],
    },
    '23w': {
      text: '23.Bd6+: fil şah çekerek şahı b6’ya iter.',
      amac: 'Şahı vezir kanadına, ileride c4 ve a4 ile açılacak hatlara doğru sürmek; fili d6’da güçlü bir ileri kareye yerleştirmek.',
      neden: 'd6’daki fil hem şahı keser hem de Siyah kalelerini rahatsız eder (e7, c7, b8 kareleri). Motor Bd6+ ve 23.c4’ü (+0.6) eşit görüyor; Karpov şahı önce tempo kazanarak kötü bir kareye itmeyi tercih etti. 23.Bb4 (+0.3) daha pasiftir.',
      diger: [
        { move: '23.c4', text: '23...Rad8 24.Rdc1 Kb8 25.cxb5 (+0.6).' },
        { move: '23.Bb4', text: '23...Rac8 24.a4 Bc6 (+0.3).' },
      ],
    },
    '23b': {
      text: '23...Kb6: şah b6’ya çekilir.',
      amac: 'Şahı a6/b5 piyonlarının arkasına almak ve b7 filini korumaya devam etmek.',
      neden: 'Motor Kb6’yı en iyi görüyor (+0.7). 23...Kc6 (+0.9) şahı c-hattına, 24.c4 sonrası açılacak bir hatta koyar; 23...Kc8 (+1.5) ise 24.c4 ile b5 piyonunu zor durumda bırakır.',
      diger: [
        { move: '23...Kc6', text: '24.c4 bxc4 25.Rac1 Rac8 (+0.9); şah c-hattında.' },
        { move: '23...Kc8', text: '24.c4 Bc6 25.Rac1 Kb7 (+1.5).' },
      ],
    },
    '24w': {
      text: '24.c4: çift piyon ilerler, b5’e saldırır ve hatları açar.',
      amac: 'Siyah şahının önündeki b5-a6 piyon kalkanını sökmeye başlamak ve zayıf c-piyonunu değiştirmek.',
      neden: 'Beyazın c3 piyonu zayıftı; c4 ile hem onu değiştirir hem de b-hattını kaleler için açar. Motor c4’ü en iyi görüyor (+0.7); 24.a4 (+0.25) önce a-hattını açar ama c3 zayıflığı kalır.',
      diger: [
        { move: '24.a4', text: '24...Rad8 25.h4 Kc6 26.axb5+ (+0.25).' },
        { move: '24.Nd3', text: '24...Nd5 25.Bc5+ Kc7 (+0.2); fil d6’dan ayrılır.' },
      ],
    },
    '24b': {
      text: '24...Rac8: a8 kalesi c-hattına gelir.',
      amac: 'c-hattını kontrol etmek ve c4 piyonuna baskı yaparak kalenin aktifliğini artırmak.',
      neden: 'Motor Rac8’i en iyi görüyor (+0.5–0.8). 24...bxc4 (+0.75–1.0) 25.Rab1+ ile b-hattını açar ve şahı hemen saldırıya açık bırakır.',
      diger: [
        { move: '24...bxc4', text: '25.Rab1+ Kc6 26.Rb4 Rac8 (+0.75); şah b-hattında açıkta.' },
        { move: '24...Red8', text: '25.Nd3 Rac8 26.c5+ Ka7 (+1.0).' },
      ],
    },
    '25w': {
      text: '25.cxb5: piyonlar değişilir.',
      amac: 'c-piyonunu b5 ile değişip vezir kanadını açmak ve a4 için zemin hazırlamak.',
      neden: 'Motor cxb5’i en iyi görüyor (+0.7). 25.c5+ (+0.3) yapıyı kapatır ve şaha ihtiyacı olan nefesi verir; 25.Rac1? Rxc4 ile piyon kaybettirir (−0.65).',
      diger: [
        { move: '25.c5+', text: '25...Ka7 26.a4 Bc6 27.axb5 (+0.3); yapı kapanır.' },
        { move: '25.Rac1?', text: '25...Rxc4 26.Rxc4 bxc4 (−0.65).' },
      ],
    },
    '25b': {
      text: '25...axb5: Siyah piyonu geri alır.',
      amac: 'Materyali dengelemek.',
      neden: 'Zorunlu: 25...g5? 26.bxa6 Bxa6 27.Nd3 sonrası Beyaz bir piyon fazlası tutar (+1.5). Şimdi b5 piyonu tek başına ve a-hattı yarı açık.',
    },
    '26w': {
      text: '26.a4!: vezir kanadı açılıyor; b5 piyonuna saldırı.',
      amac: 'a-hattını açmak, b5 piyonunu yalnız bırakmak ve şahın önündeki son siperi kaldırmak.',
      neden: 'Motor a4’ü açık farkla en iyi görüyor (+0.8). Beyaz piyon kırılmasıyla kalelerine yeni hat açar; 26.h4 (+0.2) ve 26.a3 (+0.2) çok yavaştır ve Siyaha 26...Rc4 ile aktiflik verir.',
      diger: [
        { move: '26.h4', text: '26...Rc4 27.Nd3 Nd5 (+0.2); Siyah kalesi aktifleşir.' },
        { move: '26.a3', text: '26...Rc2 27.h4 Bc6 (+0.2).' },
      ],
    },
    '26b': {
      text: '26...Rcd8?: oyunu kaybettiren hata; c8 kalesi c-hattını bırakır.',
      amac: 'd6 filine baskı yapmak ve d-hattında Beyaz kalelerine itiraz etmek.',
      neden: 'Fikir anlaşılır, ama yanlış kale oynandı. c8 kalesi c7 karesini koruyordu; o gidince 27.Rac1! sonra 28.Bc7+ ile şah ve d8 kalesi çatallanabilir (+2.8). Motor 26...Red8’i (+0.6) veya 26...g5’i (+0.9) öneriyor; chessgames.com’daki motor yorumları da iki kale hamlesi arasındaki büyük farka dikkat çekiyor.',
      diger: [
        { move: '26...Red8', text: '27.axb5 Ne8 28.Be5 Rxd1+ (+0.6); c8 kalesi c7’yi korumaya devam eder.' },
        { move: '26...g5', text: '27.Nd3 Nd5 28.a5+ Ka7 (+0.9); atı kovar ve aktiflik arar.' },
        { move: '26...bxa4', text: '27.Rxa4 Bc6 28.Rb1+ Bb5 (+1.0); a-hattı Beyaza geçer.' },
      ],
    },
    '27w': {
      text: '27.axb5: Beyaz b5’i alır ve piyon kazanır.',
      amac: 'Bir piyon kazanmak ve b-hattını şaha karşı açık tutmak.',
      neden: 'Doğal ve yeterince güçlü bir hamle (+2.2), ama motor 27.Rac1!’i daha kesin buluyor: 27...Rd7 28.Bc7+ Ka7 29.Rxd7 Nxd7 30.axb5 (+2.8). Karpov sade yolu seçti; piyon fazlası ve açık şah zaten kazanç için yeterliydi.',
      diger: [
        { move: '27.Rac1', text: '27...Rd7 28.Bc7+ Ka7 29.Rxd7 Nxd7 (+2.8); c7 karesindeki çatal.' },
        { move: '27.Rab1', text: '27...Bc6 28.axb5 Bxb5 29.Rd4 (+2.3).' },
      ],
    },
    '27b': {
      text: '27...Rd7: kale d7’ye gelir; d6 filine ikinci kez baskı.',
      amac: 'd6 filini kovmak ve d-hattında kaleleri ikilemek.',
      neden: 'Motor Rd7, 27...h6 ve 27...Ra8’i neredeyse eşit görüyor (+2.0–2.2): pozisyon artık zor. 27...Ra8 a-hattını almayı dener (28.Rab1 Rac8), ama şahın açıklığı sürer.',
      diger: [
        { move: '27...Ra8', text: '28.Rab1 Rac8 29.h3 (+2.0); a-hattını alır.' },
        { move: '27...h6', text: '28.Rd4 Rc8 29.Bb4 (+2.2).' },
      ],
    },
    '28w': {
      text: '28.Rd4: kale dördüncü yataya çıkar ve d6 filini korur.',
      amac: 'd-hattında kaleleri ikilemek, b4/c4 karelerini kontrol ederek şahı kesmek.',
      neden: 'Motor Rd4’ü en iyi görüyor (+2.25). 28.Ba3 (+1.1) veya 28.Bb4 filin d6 karesini bırakır ve 28...Rxd1+ ile Siyah rahatlar.',
      diger: [
        { move: '28.Ba3', text: '28...Red8 29.Rdb1 Nd5 (+1.1); d-hattı Siyaha geçer.' },
        { move: '28.Bb4', text: '28...Rxd1+ 29.Rxd1 Kxb5 (+1.1).' },
      ],
    },
    '28b': {
      text: '28...Red8: Siyah da d-hattında kalelerini ikiler.',
      amac: 'd6 filine üçüncü kez baskı yaparak onu değişmeye ya da geri çekilmeye zorlamak.',
      neden: 'Motor 28...g5’i biraz daha iyi buluyor (+2.0): 29.Nd3 Re6 30.Bc5+ ile atı kovup aktiflik arar. Red8 ise d-hattında ağırlaşır ama c-hattını yine boş bırakır.',
      diger: [
        { move: '28...g5', text: '29.Nd3 Re6 30.Bc5+ Kc7 (+2.0).' },
        { move: '28...Rc8', text: '29.Rad1 g5 30.Nd3 (+2.6).' },
      ],
    },
    '29w': {
      text: '29.Rad1: a1 kalesi de d-hattına gelir; d6 filini üçüncü kez korur.',
      amac: 'd-hattında üstünlük kurmak ve d7’deki Siyah kalesini sabitlemek.',
      neden: 'Tek iyi hamle (+3.2): 29.Nh5? Rxd6 30.Rxd6+ Rxd6 sonrası fil düşer (−1.9). Rad1 sonrası d6 filini almak Siyaha taş kaybettirir.',
      diger: [
        { move: '29.Nh5?', text: '29...Rxd6 30.Rxd6+ Rxd6 31.Nxg7 (−1.9).' },
      ],
    },
    '29b': {
      text: '29...Rc8: Siyah c-hattına döner.',
      amac: 'c-hattını alıp ...Rc2 gibi karşı oyun aramak.',
      neden: 'Bu hamle d7 kalesini yalnızca f6 atının korumasında bırakır; 30.Be5 bunu cezalandırır (+3.9). Motor 29...Re8’i (+3.0) daha iyi buluyor: 30.h4 Ba8 ile Siyah dayanır.',
      diger: [
        { move: '29...Re8', text: '30.h4 Ba8 31.Rc1 (+3.0).' },
        { move: '29...Rh8', text: '30.Nd3 Bd5 31.Bc5+ Kb7 (+3.7).' },
      ],
    },
    '30w': {
      text: '30.Be5: fil f6 atına saldırır.',
      amac: 'd7 kalesinin tek savunucusunu ortadan kaldırmak: Bxf6 gxf6 Rxd7 tehdidi.',
      neden: 'Motor Be5’i en iyi görüyor (+3.8). Fil d6’dan e5’e geçerken d-hattını da açar, böylece d4 ve d1 kaleleri d7’ye doğrudan bakar. 30.h4 (+3.0) daha yavaştır.',
      diger: [
        { move: '30.h4', text: '30...Ba8 31.h5 h6 32.Be5 (+3.0).' },
        { move: '30.Nd3', text: '30...Bd5 31.Be5 Bb3 (+2.1).' },
      ],
    },
    '30b': {
      text: '30...Re7: kale e7’ye geçer ve e5 filine bakar.',
      amac: 'd7’deki kaleyi kurtarmak ve e5 filine baskı yapmak.',
      neden: 'Bu hamle d-hattını tamamen Beyaza bırakır ve 31.Rd6+ şahını mümkün kılar (+5.3). Motor 30...Rxd4’ü daha dayanıklı buluyor: 31.Bxd4+ Ka5 32.Bxf6 gxf6 33.Rd7 ile Beyaz b7 ve f7’ye çifte saldırır (+3.9).',
      diger: [
        { move: '30...Rxd4', text: '31.Bxd4+ Ka5 32.Bxf6 gxf6 33.Rd7 (+3.9); Siyah dayanır ama kayıptadır.' },
        { move: '30...Bxf3', text: '31.Rxd7 Bxd1 32.Rxd1 (+4.7).' },
      ],
    },
    '31w': {
      text: '31.Rd6+!: kale şah çeker; şah b5 piyonunu almak zorunda kalır.',
      amac: 'Şahı tahtanın ortasına çekmek ve kale-fil-at koordinasyonuyla mat ağı kurmak.',
      neden: 'Motor Rd6+’yı en iyi görüyor (+5.3). 31.Bxf6 gxf6 32.Rd6+ (+3.5) önce materyal alır ama saldırının hızını düşürür. Karpov şahı açığa çıkarmayı materyalden önemli buldu.',
      diger: [
        { move: '31.Bxf6', text: '31...gxf6 32.Rd6+ Kxb5 33.Rxf6 (+3.5).' },
        { move: '31.Re1', text: '31...Ba8 32.Rd6+ Kb7 (+3.7).' },
      ],
    },
    '31b': {
      text: '31...Kxb5: şah b5 piyonunu alır.',
      amac: 'Şahtan kaçarken bir piyon da kazanmak.',
      neden: 'Motor Kxb5 ve 31...Ka5’i (+5.5) eşit görüyor; 31...Kc5 32.Nd3+ (+6.0) daha kötüdür. Her durumda şah açıkta kalır.',
      diger: [
        { move: '31...Ka5', text: '32.Ra1+ Kxb5 33.Rb1+ Ka5 (+5.5); benzer.' },
      ],
    },
    '32w': {
      text: '32.Rb1+: d1 kalesi b-hattına geçer ve şaha şah çeker.',
      amac: 'Şahı b-hattından uzaklaştırıp c4/c5 karelerine, Beyaz taşlarının kontrolündeki bölgeye sürmek.',
      neden: 'Motor Rb1+’i en iyi görüyor (+5.6). 32.Bd4 (+3.9) ve 32.Bxf6 (+3.5) saldırının hızını düşürür.',
      diger: [
        { move: '32.Bxf6', text: '32...gxf6 33.Rxf6 Rc6 (+3.5).' },
      ],
    },
    '32b': {
      text: '32...Kc4?: şah c4’e gider ve mat ağına girer.',
      amac: 'Şahı merkeze çekerek kurtarmaya çalışmak.',
      neden: 'Motor 32...Ka5’i (+5.4) çok daha dayanıklı buluyor: 33.Rd2 Rc1+ 34.Rxc1 Rxe5 ile Siyah materyal kaybeder ama mat olmaz. 32...Kc4 sonrası motor zorunlu mat görüyor (#9); 32...Ka4 de mat yer (#6).',
      diger: [
        { move: '32...Ka5', text: '33.Rd2 Rc1+ 34.Rxc1 Rxe5 (+5.4); daha uzun direnç.' },
      ],
    },
    '33w': {
      text: '33.Rd4+: şah c5’e geri itilir.',
      amac: 'Şahın c3-d3 yönüne kaçmasını engelleyip ağı daraltmak.',
      neden: 'Motor Rd4+ ile #9 görüyor; ilginç biçimde 33.Rd2! daha da hızlı mat ediyordu (#5). Karpov’un seçtiği yol da açık bir kazançtır: 33...Kc3 34.Rd3+ ile şah hemen mat olur.',
      diger: [
        { move: '33.Rd2', text: '33...Be4 34.Rc1+ Bc2 35.Rdxc2+ ile hızlı mat (#5).' },
      ],
    },
    '33b': {
      text: '33...Kc5: şah c5’e döner; tek uzun dayanan kare.',
      amac: 'Şahı kurtarmaya çalışmak.',
      neden: '33...Kc3 34.Rd3+ Kc2 35.Rb2+ ile 3 hamlede mat (#3); Kc5 de matı yalnızca geciktirir (#8).',
      diger: [
        { move: '33...Kc3', text: '34.Rd3+ Kc2 35.Rb2+ Kc1 ile hemen mat (#3); şah birinci yatağa itilir.' },
      ],
    },
    '34w': {
      text: '34.Nd3+: at da şaha katılır; şah ağa düştü. Tal terk etti.',
      amac: 'Mat ağını kapatmak: at b4 ve e5 karelerini, kaleler b- ve d-hatlarını, fil d6-c7 karelerini kontrol eder.',
      neden: 'Motor zorunlu mat görüyor (#8): 34...Kc6 35.Rc1+ Kb6 36.Rb4+ Ka7 37.Ra1+ Ba6 ve mat yakındır. Vezirsiz bir oyunsonunda dört taşın uyumlu çalışmasıyla gelen bu mat, merkezde kalmış şahın 15 hamle önce başlayan sorununun sonucudur.',
      diger: [
        { move: '34.Rc1+', text: '34...Kb6 35.Rb1+ Ka5 36.Rd2 (Motor: +5.4); hâlâ kazanır ama mat yerine materyal kazancına döner.' },
        { move: '34.Rd2', text: '34...Rxe5 35.Nd3+ Kd5 36.Nxe5+ Kxe5 (+4.8); Beyaz kazanır ama oyun uzar.' },
      ],
    },
  },
  exercises: [
    { id: 'kt-1', kind: 'tekrar', plan: false, title: 'İleri piyonu temizleyin',
      source: 'Karpov – Tal, Bugojno 1980 (16. hamle)',
      fen: 'r3k2r/1b3ppp/p3qn2/1p2N3/1b2P3/2Np4/PP3PPP/R1BQR1K1 w kq - 6 16',
      prompt: 'Siyahın d3 piyonu Beyazın kampının ortasında. Ne oynarsınız?',
      hint: 'e5 atı d3’e gidebilir.',
      line: ['Nxd3', 'Bxc3', 'Nf4'],
      accept: { 2: ['bxc3'] },
      explanation: '**16.Nxd3!** Bxc3 **17.Nf4!** Ara hamle vezire saldırır; vezir çekildikten sonra 18.bxc3 ile Beyaz taşını geri alır. Motor: Nxd3 +0.6; diğer hamlelerde Siyah daha iyi.',
      link: 'Meran’ın keskin yolunda kazanılan zaman, hızlı gelişim ve açık hatlarla değerlendirilir.' },
    { id: 'kt-2', kind: 'tekrar', plan: false, title: 'Şahı ortaya itin',
      source: 'Karpov – Tal, Bugojno 1980 (31. hamle)',
      fen: '2r5/1b2rppp/1k3n2/1P2B3/3R1N2/5P2/6PP/3R2K1 w - - 7 31',
      prompt: 'Siyah şahı b6’da açıkta. Saldırıyı başlatan şahı bulun.',
      hint: 'd-hattındaki kalelerden biri altıncı yataya gelebilir.',
      line: ['Rd6+'],
      explanation: '**31.Rd6+!** Şah b5’i almak zorunda kalır; 32.Rb1+ ve 33.Rd4+ ile tahtanın ortasına itilir. Motor: Rd6+ +5.5, sonraki en iyi hamle +4.0.',
      link: 'Vezirler değişildiğinde merkezde kalan şah, açık hatlarda kalelerin hedefidir.' },
    { id: 'kt-3', kind: 'transfer', plan: false, title: 'Kramnik’e karşı aynı açılış',
      source: 'Karpov – Kramnik, Linares 1994 (14. hamle)',
      fen: 'r3kb1r/1bqn2pp/p3pn2/1p6/2p1P3/2N2N2/PPB2PPP/R1BQ1RK1 w kq - 4 14',
      prompt: 'Aynı Meran, aynı 9.e4 c5 10.d5 c4. Bu kez Siyah 11...fxe6 ile aldı ve e6’da zayıf bir piyonu var. Ne oynarsınız?',
      hint: 'At e6’ya saldırabilir.',
      line: ['Ng5'],
      explanation: '**14.Ng5!** At e6 piyonuna saldırır ve ileride e5 ile birlikte bu zayıflığa yüklenir. Karpov daha sonra e5 ve Nxe6 ile bu zayıflığı kullandı. Motor: Ng5 +0.4, sonraki en iyi hamle +0.1.',
      link: 'Tal maçında şah merkezde kaldı; Kramnik maçında merkezde zayıf e6 piyonu kaldı. Meran’da e4-d5 kırılması iki maçta da Siyahın merkezini zayıflattı.' },
    { id: 'kt-4', kind: 'transfer', plan: false, title: 'Zayıf piyonu alın',
      source: 'Karpov – Kramnik, Linares 1994 (21. hamle)',
      fen: 'r4rk1/1b4pp/p3pn2/1pb3N1/2p5/2N5/PPB2PPP/3RR1K1 w - - 0 21',
      prompt: 'Vezirler değişildi, Siyahın e6 piyonu hâlâ zayıf. Ne oynarsınız?',
      hint: 'g5 atı e6’ya saldırıyor ve e1 kalesi destekliyor.',
      line: ['Nxe6'],
      explanation: '**21.Nxe6!** Beyaz piyonu alır ve at f8 kalesine ve c5 filine saldırır. Diğer hamlelerde Siyahın taşları aktifleşir (motor: Nxe6 +0.2, sonraki en iyi hamle −0.7).',
      link: 'Karpov iki maçta da e4-d5 kırılmasının bıraktığı zayıflığı oyunsonuna kadar takip etti: Tal’de merkezde kalan şah, Kramnik’te e6 piyonu.' },
  ],
  sources: [
    { title: 'chessgames.com: Karpov vs Tal, Bugojno 1980 (oyun sayfası ve yorumlar)', url: 'https://www.chessgames.com/perl/chessgame?gid=1068154' },
    { title: 'chessgames.com: Bugojno 1980 turnuva sayfası', url: 'https://www.chessgames.com/perl/chess.pl?tid=12709' },
    { title: 'Wikipedia: Semi-Slav Defense (Meran bölümü)', url: 'https://en.wikipedia.org/wiki/Semi-Slav_Defense' },
    { title: '365chess: D49 Meran, Blumenfeld varyantı', url: 'https://www.365chess.com/eco/D49_Queen%27s_Gambit_Declined_semi-Slav_Meran_Blumenfeld_variation' },
  ],
};
