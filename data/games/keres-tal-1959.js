// Keres – Tal, Adaylar turnuvası, Bled/Zagreb/Belgrad 1959 (17. tur). Kaynak: PgnMentor (Keres.pgn).
export default {
  id: 'keres-tal-1959',
  theme: 'Merkezdeki vezir, piyon avı ve geçer d-piyonu',
  white: 'Paul Keres', black: 'Mihail Tal',
  whiteShort: 'Keres', blackShort: 'Tal',
  event: 'Adaylar turnuvası, 17. tur', site: 'Bled/Zagreb/Belgrad', year: 1959, eco: 'B42',
  variation: 'Sicilya Savunması, Kan (Paulsen) varyantı, 5.Bd3 Nc6 6.Nxc6 dxc6', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Nc6 6. Nxc6 dxc6 7. O-O e5 8. Nd2 Qc7 9. a4 Nf6 10. Qf3 Bc5 11. Nc4 O-O 12. Ne3 Re8 13. Bc4 Be6 14. Bxe6 Rxe6 15. Nf5 g6 16. Nh6+ Kg7 17. Rd1 Rd8 18. Rxd8 Qxd8 19. Bg5 Qd4 20. h4 Qxb2 21. Rd1 Bd4 22. Rd3 Qxc2 23. Rxd4 exd4 24. e5 Kf8 25. exf6 Qc3 26. Qg4 Qe1+ 27. Kh2 Qxf2 28. Qh3 Qe1 29. Qb3 b5 30. axb5 cxb5 31. Qa3+ b4 32. Qb3 Qe5+ 33. Kh1 Qe1+ 34. Kh2 Qe5+ 35. Kh1 Qd6 36. Kg1 d3 37. Qd1 Qc5+ 38. Kh1 Qc2 39. Qf3 d2 40. Bxd2 Qxd2 0-1`,

  summary: 'Oyunu Siyahlarla **Mihail Tal** kazandı (0-1). Bu, 1959 Adaylar turnuvasının 17. turunda oynanan ve sonradan turnuvanın kaderini belirleyen oyun sayıldı: ChessBase’teki Havanur yazısına göre Tal tura yarım puan önde girmişti, oyundan sonra fark bir buçuk puana çıktı. Açılış bir Kan (Paulsen) Sicilyası’ydı: Keres 6.Nxc6 ile atları değişti, Tal **6...dxc6** ile alıp d-hattını açtı ve **7...e5, 10...Bc5** ile kara kareleri tuttu. Keres atını Nd2-c4-e3-f5-h6 yolundan Siyah şahının dibine soktu, ama d-hattında kaleler değiştikten sonra **19.Bg5?** (Havanur: “ölümcül hata”) d4 karesini sahipsiz bıraktı. Tal **19...Qd4!** ile vezirini merkeze kurdu, **b2 ve c2 piyonlarını** topladı ve **21...Bd4!** ile d-hattını kapattı. Bir piyon eksik kalmamak için Keres **23.Rxd4** ile kalesini verdi ve 24.e5 ile şaha saldırdı; Tal **24...Kf8!** ve **25...Qc3!** ile tehditleri soğukkanlılıkla karşıladı, f2 piyonunu da alarak kale + üç piyona karşı iki hafif taşlık bir dengesizlik kurdu. Son bölümde merkezdeki **geçer d-piyonu** vezir desteğiyle d3 ve d2’ye yürüdü; 37.Qd1? ve 39.Qf3? hatalarından sonra 39...d2! fili kazandı ve Keres terk etti.',
  intro: 'Oyun, 1959 Eylül–Ekim aylarında Bled, Zagreb ve Belgrad’da oynanan, sekiz oyunculu ve dört devreli (28 tur) Adaylar turnuvasından. Kazanan Botvinnik’e dünya şampiyonluğu için meydan okuyacaktı. Tal 20/28 ile birinci, Keres 18,5 ile ikinci oldu; ilginç olan, Keres’in ikili maçta Tal’ı 3–1 yenmesidir — Tal’ın Keres’e karşı tek galibiyeti bu oyundur ve tam da bu yüzden belirleyici oldu. chess24’ün Keres dizisinde aktarıldığına göre Tal bu oyunu turnuvanın en önemli oyunu olarak gösterdi; aynı yazıda alıntılanan Heuer, Keres’in saldırılarının “gösterişli ama sinirli” olduğunu, Keres’in beraberliğe razı olması gereken yerde kazanmak için oynadığını yazar. Açılış açısından oyun, Kan varyantının 5.Bd3 Nc6 6.Nxc6 dxc6 kolunu öğretir: Siyah b-piyonuyla almak yerine d-piyonuyla alarak d-hattını açar, c8 filini serbest bırakır ve ...e5 ile simetrik, kara karelere dayalı bir yapı kurar. Bugünkü teoride 5...Nc6 biraz kesinliksiz sayılır (5...Bc5 veya 5...Qb6 tercih edilir), ama Tal’ın kurduğu yapı Beyaza da kolay bir üstünlük vermez.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Atı uzun bir yolculukla şah kanadına götürmek:** Nd2-c4-e3-f5 ve 16.Nh6+ ile at Siyah şahının dibine yerleşti; vezir f3’ten ve kara kareli fil g5’ten bu atı desteklerken g7 ve f7 çevresinde mat motifleri aranır.',
      '**Vezir kanadını kilitlemek:** 9.a4 Siyahın ...b5 ilerleyişini durdurdu; böylece c4’e gelen at kovalanmadı ve Siyah vezir kanadında alan kazanamadı.',
      '**Açık d-hattını almak:** 17.Rd1 ile kale açık hatta çıktı; amaç Rd7/Rd8 ile yedinci ve sekizinci yatayda Siyah şahına karşı mat ağı örmekti. Siyah 17...Rd8 ile karşı çıkınca kaleler değişti.',
      '**d4 karesini kontrol altında tutmak (yapılamayan):** Doğru plan 19.g4 (Motor: +0.3) ya da 19.c3 ile d4’ü korumak, sonra g4-g5 ile f6 atını kovalamaktı. 19.Bg5 bu dengeyi bozdu.',
      '**Piyon eksiğini saldırıyla telafi etmek:** b2 ve c2 düştükten sonra 23.Rxd4! exd4 24.e5 ile kalesini verip f6 atını sökmek ve h6 atı + g5 fili + f6 piyonuyla Siyah şahını kafese almak.',
      '**Vezirle mat ağını tamamlamak:** f6 piyonu g7’yi, h6 atı g8 ve f7’yi tutarken Qf4-b8+ veya Qg3-b8+ ile arka yataya girmek; Siyahın her yanlış hamlesine karşı Qxf7 ya da Qb8+ motifleri hazırdı.',
      '**Geçer piyonu durdurmak:** Saldırı tükenince doğru savunma 36.Bd2 ve 37.Qc4 gibi hamlelerle d-piyonunu bloke etmekti; Keres bunun yerine kazanma şansı aradı ve piyonun önünü açık bıraktı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**dxc6 ve ...e5 ile kara kareleri ele geçirmek:** 6...dxc6 d-hattını açtı ve c8 filini serbest bıraktı; 7...e5 d4 ve f4 karelerini kontrol etti, Beyazın e4-e5 ilerleyişini kesin olarak durdurdu.',
      '**Fili c5’e, veziri merkeze getirmek:** 10...Bc5 a7-g1 çaprazında f2’ye baktı; d-hattında kaleler değişince 19...Qd4! ile vezir de aynı kara kareye yerleşti ve b2, e4, f2’yi birlikte hedef aldı.',
      '**Beyaz kaleyi d-hattından engellemek:** 21...Bd4! fili açık hattın ortasına koydu; böylece Rd8 ile arka yataya girme fikri kapandı ve fil hem f2’ye baskıyı sürdürdü hem de vezirin piyon avını korudu.',
      '**Piyon toplamak:** Vezir 20...Qxb2 ve 22...Qxc2 ile iki piyonu aldı, 27...Qxf2 ile üçüncüyü ekledi; sonunda Siyah iki hafif taşa karşı kale ve üç fazla piyonla kaldı.',
      '**Kale fedasından sonra şahı doğru kareye götürmek:** 24...Kf8! ile şah e5 piyonunun exf6+ ve Bxf6+ şahlarından önceden kaçtı; 25...Qc3! ise vezir değişimi teklif ederek Qf4-b8+ saldırısını durdurdu.',
      '**Vezir şahlarıyla zaman kazanmak ve arka yatayı tutmak:** ...Qe1+, ...Qe5+ gibi şahlarla Beyaz şahı h1-h2 arasında oynatıp Beyaz vezirinin saldırı karelerine geçmesini engellemek.',
      '**Geçer piyonları yürütmek:** 29...b5 ile vezir kanadında da bir geçer piyon yaratıldı; asıl koz d-piyonu ...d3 ve 39...d2! ile ilerleyip Beyazı fil vermeye zorladı.',
    ] },
  },
  critical: [
    { move: '6b', title: '6...dxc6: yapıyı seçmek', text: 'Siyah 6...bxc6 ile merkeze doğru alıp ...d5 fikrini koruyabilirdi (Motor: +0.6, hemen hemen aynı). Tal ise 6...dxc6 ile d-hattını açtı ve c8 filine yol verdi. Bu, Siyaha merkezde daha az piyon ama daha rahat taşlar ve d-hattında kale değişimleri sağlayan bir tercihtir. Oyunun bütün öyküsü bu açık d-hattında geçecek: kaleler orada değişti, vezir d4’e orada yerleşti, fil d4’te hattı orada kapattı ve sonunda kazanan piyon da d-piyonu oldu.' },
    { move: '19w', title: '19.Bg5? d4 karesini bırakmak', text: 'Havanur’un ChessBase analizinde bu hamle “ölümcül hata” olarak işaretlenir: fil c1’den çıkınca d4 karesi kimsenin kontrolünde kalmaz ve Siyah vezir oraya gelir. Motor da aynı fikirde: 19.g4! (g5 ile f6 atını kovalama fikri) +0.3, 19.c3 (d4’ü piyonla tutmak) −0.2, oyun hamlesi 19.Bg5 ise −0.5 ile −0.8 arasında. Bg5 h6 atını korumak için düşünülmüştü, ama at zaten c1 filiyle korunuyordu; fil g5’e gidince Beyazın b2 ve e4 piyonları da zayıfladı.' },
    { move: '19b', title: '19...Qd4! vezir merkezde', text: 'Vezir d4’te üç şeyi birden tehdit eder: ...Qxb2, ...Qxe4 ve c5 fili ile birlikte f2 üzerinden ...Qxf2+. Havanur bu hamleyi ünlem işaretiyle verir. Motor: 19...Qd4 −0.3; 19...Qb6 +0.2, 19...Qc7 +0.35. Beyaz 20.h4 ile g5 filini destekleyip şahına kaçış karesi açmak zorunda kaldı (20.Rf1 −0.9, 20.Re1 −1.3) ve b2 piyonu düştü.' },
    { move: '21b', title: '21...Bd4! d-hattını kapatmak', text: 'Beyaz 21.Rd1 ile Rd7 ve Rd8 tehditlerine hazırlandı. 21...Bd4! fili açık hattın ortasına koydu; fil e5 piyonuyla korunur ve f2’ye baskıyı sürdürür. Açgözlü 21...Qxc2? 22.Rd8! ile cezalandırılır: Rd8-g8 ve Qxf7 mat tehditleri yüzünden Siyah 22...Qxf2+ 23.Qxf2 Bxf2+ 24.Kxf2 ile vezirleri değişmek zorunda kalır, ama son oyunda Beyaz kalesi yedinci yatayda kalır (Motor: +2.2). 21...Bd6? de 22.g4 ile kötüdür (+1.6 – +2.3).' },
    { move: '23w', title: '23.Rxd4! zorunlu kale fedası', text: 'Bir piyon eksik olan Keres pasif kalırsa ikinci piyonu da kaybedip ağır bir son oyuna düşecekti (23.a5 −1.6, 23.Kh2 −2.1). 23.Rxd4! exd4 24.e5 ile f6 atına saldırır; at nereye giderse gitsin Beyazın Qxf7+ veya Qxf6+ ile mat atakları başlar. Motor bu fedayı tek iyi hamle sayar ve oyunu yeniden eşitler (0.0). Havanur da fedayı ünlemle verir.' },
    { move: '24b', title: '24...Kf8! önceden kaçmak', text: 'Atı kurtarmak her yolda mat yer: 24...Nd5? 25.Qxf7+ Kh8 26.Qf8#, 24...Nd7? 25.Qxf7+ Kh8 26.Qg8#, 24...Rxe5? 25.Qxf6+ Kf8 26.Qxf7#. Tal atı bırakıp şahı f8’e çekti; böylece e5xf6 ve Bxf6 artık şah olmaz ve Siyah bir tempo kazanır. Havanur bunu “parlak oyun” diye niteler ve Beyazın saldırısının bundan sonra söndüğünü yazar. Motor: 24...Kf8 −0.35 ile −0.55; 24...Qc3 0.0.' },
    { move: '25b', title: '25...Qc3! paradoksal savunma', text: 'f6 piyonu ve h6 atı Siyah şahını kafese aldı; Beyaz Qg3 veya Qf4 ile b8’e şah çekmek istiyor. Örneğin 25...d3? 26.Qg3! ve Qb8+ tehdidi kazanır (Motor: +6.0). 25...Qc3! vezir değişimi teklif eder ve g3-b8 çaprazını keser: 26.Qf4 Qe1+ 27.Kh2 Qe5 vezirleri değişir ve Siyahın son oyunu kazanılmış olur (−2.9). Motor 25...Qc3’ü tek açık kazanç denemesi sayar (−1.2 ile −1.4; 25...Qe4 ve 25...Qb1+ yaklaşık 0.0).' },
    { move: '37w', title: '37.Qd1? piyonun önünde yanlış kare', text: 'd3 piyonu artık iki adım uzakta. Havanur 37.Qc4! önerir; motor da 37.Qc4 Ke8 38.Bd2 ile vezirin c4’ten hem d3’e hem b4’e baktığı savunmayı en iyi bulur (−3.2). Oyun hamlesi 37.Qd1’den sonra 37...Qc5+ ve 38...Qc2 ile Siyah vezir d1 karesini de kontrol eder (−4.7 ile −5.0); 39.Qf3? ile vezir son kareyi bırakınca 39...d2! oyunu bitirdi.' },
  ],
  lessons: [
    'Kan varyantında 6.Nxc6 dxc6 sonrası ...e5 ve ...Bc5, Siyaha kara karelerde sağlam bir oyun verir; açık d-hattı ise iki taraf için de en önemli yol olur.',
    'Bir taşın tek bir kareyi kontrol etme görevi olabilir: 19.Bg5 ile c1 fili d4’ü bırakınca rakip vezir oraya yerleşip üç piyona birden baktı.',
    'Açık hatta giren rakip kaleyi, hattın ortasına korunan bir taş koyarak (21...Bd4!) durdurmak, piyon toplamaktan önce gelir: önce güvenlik, sonra madde.',
    'Kale fedasına karşı savunmada taşı kurtarmaya çalışmak yerine şahı tehdit edilecek kareden önceden çekmek (24...Kf8!) çoğu zaman tek kurtuluştur; somut olarak Qxf7+ motiflerini hesaplamak gerekir.',
    'Saldırı altındaki tarafın en iyi silahı genellikle vezir değişimi teklifidir: 25...Qc3! saldırgan veziri ya değişime ya da daha pasif bir kareye zorladı.',
    'Kale ve piyonlara karşı iki hafif taş varken, hafif taşların sahibi geçer piyonları bloke etmeyi ihmal ederse piyonlar vezir desteğiyle hızla belirleyici olur.',
    'Turnuva baskısı ve psikoloji de oyunun parçasıdır: bu oyunda Keres’in kazanma isteği riskli kararlara, Tal’ın pratik açgözlülüğü ise soğukkanlı hesaplara dönüştü.',
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Keres şah piyonunu iki kare ilerletir, d5 ve f5 karelerini kontrol eder ve fil ile veziri açar.',
      amac: 'Merkezi hemen işgal etmek ve hızlı gelişim ile kısa rok yapmak.',
      neden: 'Keres hayatı boyunca hem 1.e4 hem 1.d4 oynadı; Tal gibi taktik bir rakibe karşı açık oyunlar Keres’in de güçlü olduğu alandı.',
      diger: [
        { move: '1.d4', text: 'Kapalı oyunlara götürür; Tal’ın Modern Benoni’si gibi keskin savunmalara karşı da kullanılırdı (Motor: +0.2).' },
        { move: '1.c4', text: 'İngiliz açılışı; daha manevra ağırlıklı bir oyun verir.' },
      ],
    },
    '1b': {
      text: '1...c5 ile Tal Sicilya Savunması’nı seçer: d4 karesini yandan kontrol eder.',
      amac: 'Asimetrik bir yapı kurarak kazanma şansını korumak; açık c-hattını ileride kullanmak.',
      neden: 'Tal turnuvada kazanmak zorundaymış gibi oynayan bir oyuncuydu; 1...e5 daha simetrik oyunlar verirken Sicilya her iki tarafa da şans tanır.',
      diger: [
        { move: '1...e5', text: 'Klasik açık oyun; motor en sağlam cevap olarak görür (+0.2).' },
        { move: '1...e6', text: 'Fransız savunması; daha kapalı yapılara gider (+0.35).' },
      ],
    },
    '2w': {
      text: '2.Nf3 ile at gelişir ve d4 ilerleyişini hazırlar.',
      amac: 'Açık Sicilya’ya geçmek: 3.d4 ile c5 piyonunu değişip merkezde ve gelişimde üstünlük almak.',
      neden: 'Açık Sicilya en keskin ve en çok çalışılmış koldur; Keres gibi teorik bilgisi güçlü bir oyuncu için doğal seçim.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya’ya ya da sonrasında açık oyuna gider (+0.35).' },
        { move: '2.c3', text: 'Alapin; d4’ü piyonla destekler ve teorik tartışmalardan kaçınır (+0.3).' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah d5 karesini kontrol eder ve f8 filine e7, d6, c5 veya b4 kareleri açılır.',
      amac: 'Esnek bir yapı kurmak: Kan, Taimanov veya Scheveningen sistemlerinden birine geçme seçeneğini korumak.',
      neden: '2...d6 (Najdorf/Dragon) ya da 2...Nc6’ya göre 2...e6 kara kareli fil için daha fazla seçenek bırakır; Tal bu turnuvada farklı Sicilya kolları denedi.',
      diger: [
        { move: '2...d6', text: 'Najdorf, Dragon ve Scheveningen yolları (+0.45).' },
        { move: '2...Nc6', text: 'Klasik ve Sveshnikov kolları; motor en çok bunu sever (+0.3).' },
      ],
    },
    '3w': {
      text: '3.d4 ile Beyaz merkezi açar ve c5 piyonunu değişmeye zorlar.',
      amac: 'd-hattını açmak ve atı d4’te merkezileştirmek.',
      neden: 'Açık Sicilya’nın tanımlayıcı hamlesi; Beyaz gelişim ve alan avantajı karşılığında merkez piyonlarından birini verir.',
      diger: [
        { move: '3.Nc3', text: 'd4’ü bir hamle erteler; genellikle aynı yapılara döner (+0.35).' },
        { move: '3.c3', text: 'Alapin’e benzer bir yapı; daha az keskin (+0.3).' },
      ],
    },
    '3b': {
      text: '3...cxd4 ile Siyah değişir; kanat piyonunu merkez piyonuyla takas eder.',
      amac: 'Merkezde iki piyon (d7, e6) karşı bir piyon (e4) çoğunluğu elde etmek.',
      neden: 'Bu değişim Sicilya’nın temel fikridir; 3...a6 veya 3...d5 gibi hamleler Beyaza 4.d5 ya da açık merkez avantajı verir (Motor: +0.8, +1.0).',
      diger: [
        { move: '3...d5', text: '4.exd5 exd5 5.Bb5+ ile Beyaz rahat bir oyun alır (+1.0).' },
      ],
    },
    '4w': {
      text: '4.Nxd4 ile at d4’te geri alır.',
      amac: 'Merkezi atı korumak ve Nc3, Bd3/Be2 ile gelişimi tamamlamak.',
      neden: 'Zorunlu sayılabilir: piyon kazanılmazsa Beyaz geride kalır. 4.Nxd4 merkezdeki atla c6, e6 ve b5 karelerine baskı kurar.',
    },
    '4b': {
      text: '4...a6 Kan (Paulsen) varyantıdır: b5 karesini kontrol eder ve ...b5 ilerleyişini hazırlar.',
      amac: 'Beyaz atın b5’e gelmesini önlemek ve Siyahın ...Nf6, ...d6, ...Nc6 hamlelerini esnek biçimde bekletmek; vezir c7’ye, fil b7’ye gelebilir.',
      neden: 'Kan’da Siyah atlarını erken göstermez; böylece Beyazın Nc3-e5 ya da Nb5 fikirleri boşa çıkar. 4...Nf6 ve 4...Nc6 motorun biraz daha sevdiği ama daha çok teori gerektiren yollardır.',
      diger: [
        { move: '4...Nf6', text: '5.Nc3 ile dört at veya Scheveningen yapılarına gider (+0.5).' },
        { move: '4...Nc6', text: 'Taimanov varyantı; ...Qc7 ve ...a6 ile benzer fikirler (+0.5).' },
      ],
    },
    '5w': {
      text: '5.Bd3 ile fil d3’e gelişir ve e4 piyonunu korur.',
      amac: 'e4’ü filiyle koruyup c-piyonunu serbest bırakmak; c4 ile Maroczy yapısına geçme ya da Qe2/Nd2 ile kurulumu tamamlama seçeneği.',
      neden: '5.Nc3 en popüler hamledir, ama Siyahın ...b5-b4 ile atı kovalaması mümkündür. 5.Bd3 bu fikri boşa çıkarır ve c-piyonunun önünü kapatmaz.',
      diger: [
        { move: '5.c4', text: 'Maroczy Bağı: c4-e4 ile d5’i kilitler; motorun ilk tercihi (+0.6).' },
        { move: '5.Nc3', text: 'Ana yol; 5...Qc7 ve 5...b5 ile keskin oyunlar (yaklaşık +0.5).' },
      ],
    },
    '5b': {
      text: '5...Nc6 ile at gelişir ve d4 atına saldırır.',
      amac: 'Atı merkeze getirmek ve Beyazı atları değişmeye ya da atı geri çekmeye zorlamak.',
      neden: 'Havanur’un ChessBase analizinde 5...Nc6 bugünkü teoriye göre kesinliksiz sayılır; 5...Bc5 (Beyaz atı kovalayıp a7-g1 çaprazını almak) ve 5...Qb6 tercih edilir. Nc6’nın sakıncası 6.Nxc6 ile Siyahın piyon yapısının bozulmasıdır.',
      diger: [
        { move: '5...Bc5', text: '6.Nb3 Ba7 ile fil uzun çaprazda f2’ye bakar; motorun ilk tercihi (+0.5).' },
        { move: '5...Nf6', text: '6.O-O d6 7.c4 ile Maroczy yapısına gider (+0.5).' },
        { move: '5...Qb6', text: 'Atı kovalar ve b2’ye bakar; Havanur’un önerdiği ikinci yol.' },
      ],
    },
    '6w': {
      text: '6.Nxc6 ile Beyaz atları değişir.',
      amac: 'Siyahı c6’dan almaya zorlayarak piyon yapısını değiştirmek ve hamle kaybını önlemek.',
      neden: 'At d4’ten geri çekilirse (6.Nb3 veya 6.Nf3) tempo kaybedilir; 6.c3 ise ...e5 ile Siyaha merkezde tempo kazandırır (+0.1). 6.Nxc6 motorun da ilk tercihidir.',
      diger: [
        { move: '6.Be3', text: 'Atı korur; 6...Nf6 7.Nxc6 dxc6 8.Nd2 benzer yapılara gider (+0.4).' },
        { move: '6.c3', text: '6...e5 7.Nc2 d5 ile Siyah merkezde rahatlar (+0.1).' },
      ],
    },
    '6b': {
      text: '6...dxc6 ile Siyah d-piyonuyla alır; d-hattı açılır ve c8 filinin önü açılır.',
      amac: 'Taşlarını hızla geliştirmek ve ...e5 ile kara karelere dayanan sağlam bir merkez kurmak.',
      neden: '6...bxc6 merkeze doğru alır ve ...d5 için piyon tutar, ama c8 fili geç gelişir. dxc6 ise vezir değişimine hazır, sade ama aktif bir oyun verir; Tal’ın tercihi d-hattının ileride kendi lehine açılmasıyla haklı çıktı.',
      diger: [
        { move: '6...bxc6', text: '7.O-O Qc7 8.Re1 d6 ile klasik bir Sicilya yapısı; motor eşit derecede iyi görür (+0.6).' },
        { move: '6...Qb6', text: 'Ara hamle olarak çalışmaz: 7.Nd4 ile at döner, Siyah tempo kaybeder (+0.9).' },
      ],
    },
    '7w': {
      text: '7.O-O ile Beyaz kısa rok yapar.',
      amac: 'Şahı güvenliğe almak ve f1 kalesini merkeze bağlamak.',
      neden: 'Merkezde piyonlar simetrik olduğundan acele gerektiren bir plan yok; rok en doğal hamle. 7.f4 (Siyahın ...e5’ini önleyip alan almak) ve 7.Nd2 (Nc4 yolunu hemen başlatmak) da oynanabilirdi.',
      diger: [
        { move: '7.f4', text: '...e5’i engelleyip şah kanadında alan alır (+0.6).' },
        { move: '7.Nd2', text: 'At c4’e hemen yola çıkar; motor en çok bunu sever (+0.6).' },
      ],
    },
    '7b': {
      text: '7...e5 ile Siyah merkez piyonunu ileri atar ve d4 ile f4 karelerini kontrol eder.',
      amac: 'Beyazın e4-e5 ilerleyişini kalıcı olarak durdurmak ve kara kareli fili c5’e getirmeye hazırlanmak.',
      neden: 'dxc6 yapısında Siyahın en büyük sorunu e6’daki piyonun d5 dışında işlevsiz kalmasıdır; ...e5 bu piyona görev verir. Motor da 7...e5’i açık ara en iyi bulur (7...Qc7 +0.7, 7...Bd6 +0.8). Bedeli d5 ve f5 karelerinin zayıflamasıdır; Keres’in atı ileride f5’e gelecek.',
      diger: [
        { move: '7...Qc7', text: 'Beklemeci; 8.a4 Nf6 9.Qe2 ile Beyaz rahat bir üstünlük alır (+0.7).' },
        { move: '7...Bd6', text: '8.f4 e5 9.f5 ile Beyaz şah kanadında alan kazanır (+0.8).' },
      ],
    },
    '8w': {
      text: '8.Nd2 ile at, c3 yerine d2’ye gelişir ve c4’e gitmeye hazırlanır.',
      amac: 'Atı c4’ten e5 piyonuna ve d6/b6 karelerine, sonra e3 üzerinden f5’e yönlendirmek.',
      neden: 'c3’teki at c-piyonunu kapatır ve ...Bb4 bağına açık olurdu; d2’den at hem c4 hem f3 üzerinden şah kanadına gidebilir. Motor 8.Qf3 ile aynı değeri verir.',
      diger: [
        { move: '8.Qf3', text: 'Önce veziri gelişir; benzer kurulumlara döner (+0.6).' },
        { move: '8.Be3', text: 'c5 karesine karşı fil getirir; 8...Nf6 9.h3 Bd6 (+0.5).' },
      ],
    },
    '8b': {
      text: '8...Qc7 ile vezir c7’de e5 piyonunu korur ve d-hattından çekilir.',
      amac: 'e5’i sağlamlaştırmak ve uzun ya da kısa rok seçeneğini açık tutmak.',
      neden: 'Beyaz Nc4 ile e5’e saldıracak; vezir önceden korumayı sağlar. 8...Bd6 da e5’i korur, ama fil c5’teki aktif kareden mahrum kalır.',
      diger: [
        { move: '8...Bd6', text: '9.Nc4 Bc7 10.a4 ile benzer yapı; fil daha pasif (+0.5).' },
        { move: '8...Be6', text: '9.Qf3 Nf6 10.Qg3 ile g7’ye baskı (+0.7).' },
      ],
    },
    '9w': {
      text: '9.a4 ile Beyaz a-piyonunu ilerletir.',
      amac: 'Siyahın ...b5 ilerleyişini önlemek; böylece c4’e gelecek at kovalanmaz ve Siyah vezir kanadında alan kazanmaz.',
      neden: '9.Nc4 b5 10.Ne3 ile at hemen geri döner; a4 bu tempoyu Siyaha vermez. Bedeli b4 karesinin zayıflaması ve a-piyonunun ileride hedef olmasıdır.',
      diger: [
        { move: '9.Nc4', text: '9...b5 10.Ne3 Nf6 ile at e3’e varır ama Siyah vezir kanadında alan alır (+0.5).' },
        { move: '9.Qf3', text: 'Önce vezir; 9...Nf6 10.Nc4 b5 11.Ne3 (+0.5).' },
      ],
    },
    '9b': {
      text: '9...Nf6 ile at gelişir ve e4 piyonuna baskı yapar.',
      amac: 'Kısa roku hazırlamak ve e4’ü hedef alarak Beyaz taşlarını bu piyonu korumaya bağlamak.',
      neden: 'Şah atı en doğal gelişim karesindedir; 9...Bc5 de oynanabilirdi, ama at önce gelince Beyazın Qf3-g3 fikirlerine karşı g7 de korunur.',
      diger: [
        { move: '9...Bc5', text: '10.Qf3 Nf6 11.Nc4 ile aynı yapıya döner (+0.5).' },
        { move: '9...Bb4', text: '10.Nc4 Nf6 11.Qf3 b5 ile fil d2 atına bakmaz, daha az etkili (+0.6).' },
      ],
    },
    '10w': {
      text: '10.Qf3 ile vezir f3’e gelir, e4’ü korur ve şah kanadına bakar.',
      amac: 'Vezirle Qg3 veya Qh3 üzerinden g7 ve h7’ye baskı kurmak; at f5’e geldiğinde vezir onu destekleyecek.',
      neden: 'e4 piyonunun d3 filinden başka bir koruyucusu olmalı ki fil serbest kalsın. 10.Nc4 da iyiydi; Keres önce veziri yerleştirmeyi seçti.',
      diger: [
        { move: '10.Nc4', text: '10...Bc5 11.Qf3 b5 12.Ne3 (+0.55).' },
        { move: '10.h3', text: 'Bg4 fikrini önler; 10...Bb4 11.Qe2 O-O (+0.35).' },
      ],
    },
    '10b': {
      text: '10...Bc5 ile fil a7-g1 çaprazına gelir.',
      amac: 'Fil kara karelerde aktif: f2’yi hedef alır ve d4 karesini kontrol eder.',
      neden: '...e5 yapısında Siyahın kara kareli fili en iyi c5’tedir; e7 veya d6’da pasif kalırdı (10...Be7 +0.7). 10...Bb4 d2 atına bakar ama Beyaz Nc4 ile bu bağdan kurtulur.',
      diger: [
        { move: '10...Bb4', text: '11.Nc4 Be6 12.Qg3 ile g7’ye baskı; Siyah uzun roka yönelir (+0.55).' },
        { move: '10...Be7', text: 'Pasif; 11.a5 O-O 12.Nc4 Be6 (+0.7).' },
      ],
    },
    '11w': {
      text: '11.Nc4 ile at c4’e gelir, e5 piyonuna saldırır ve b6/d6 karelerine bakar.',
      amac: 'Atın uzun yolculuğunu sürdürmek: c4’ten e3’e, oradan f5’e.',
      neden: 'At d2’de d-hattını ve c1 filini kapatıyordu; c4’e gelince hem e5’e baskı kurar hem de fil ile kale bağlantısı açılır. Motor bunu en iyi hamle olarak görür.',
      diger: [
        { move: '11.a5', text: 'Vezir kanadında alan alır; 11...Be6 12.Nc4 O-O-O (+0.4).' },
        { move: '11.Bc4', text: 'Fili aktif kareye getirir; 11...O-O 12.h3 (+0.4).' },
      ],
    },
    '11b': {
      text: '11...O-O ile Siyah kısa rok yapar.',
      amac: 'Şahı güvenliğe almak ve f8 kalesini oyuna sokmak.',
      neden: 'Motor 11...b5!? 12.Ne3 Bd7 ile alan kazanmayı biraz daha iyi bulur (+0.35); ama bu, a4 piyonuna karşı vezir kanadını zayıflatır. Tal sakin rok yapıp e5’i Re8 ile korumayı seçti.',
      diger: [
        { move: '11...b5', text: '12.axb5? axb5 kale a-hattını alır; 12.Ne3 Bd7 13.Nf5 ile dengeli (+0.35).' },
        { move: '11...Be6', text: '12.Qg3 Nxe4 13.Bxe4 Bxc4 ile taktik değişimler (+0.4).' },
      ],
    },
    '12w': {
      text: '12.Ne3 ile at e3’e gelir ve f5 karesine yönelir.',
      amac: 'Atı f5’e yerleştirip g7 ve h6 karelerine baskı kurmak; vezir ve kara kareli fil ile şah saldırısı.',
      neden: 'Keres’in planının devamıdır, ama motor 12.Qg3! (g7 ve e5’e aynı anda baskı, +0.7) veya 12.Bg5 (+0.6) ile daha fazlasını görür. Ne3 at için mantıklı bir kare olsa da c5 filine karşı c1 filinin yolunu bir süre kapatır.',
      diger: [
        { move: '12.Qg3', text: '12...Re8 13.a5 Nh5 14.Qg5 ile Siyah taşları rahatsız edilir (+0.7).' },
        { move: '12.Bg5', text: '12...Ne8 13.a5 h6 14.Nb6 ile vezir kanadında baskı (+0.6).' },
      ],
    },
    '12b': {
      text: '12...Re8 ile kale e8’e gelir ve e5’i ikinci kez korur.',
      amac: 'Merkez piyonunu sağlamlaştırıp vezirin c7’deki korumaya bağlı kalmasını önlemek.',
      neden: 'At f5’e gelince e5 tek başına hedef olabilirdi; kale e-hattında hem korur hem de ileride e6’dan şah kanadına geçebilir. Motor 12...a5 ile eşit değer verir.',
      diger: [
        { move: '12...a5', text: 'Vezir kanadını sabitler; 13.h3 Re8 14.Nf5 (+0.25).' },
        { move: '12...Be6', text: '13.Nf5 Bxf5 14.Qxf5 Rad8 ile beyaz kareli fil değişir (+0.3).' },
      ],
    },
    '13w': {
      text: '13.Bc4 ile Beyaz filini c4’e getirip f7’ye bakar ve beyaz kareli fillerin değişimini önerir.',
      amac: 'Fili daha aktif bir çapraza koymak; Siyah ...Be6 oynarsa değişimle e6 karesini açmak.',
      neden: 'd3’te fil yalnızca e4’ü koruyordu; c4’te f7’ye baskı yapar. Ancak bu, Siyahın sorunlu beyaz kareli filini değiştirmesine izin verir; motor 13.a5 (+0.3) veya 13.h3’ü (+0.2) biraz daha iyi bulur.',
      diger: [
        { move: '13.a5', text: 'b6 karesini alır, 13...Qe7 14.c3 ile sakin baskı (+0.3).' },
        { move: '13.Nf5', text: '13...Bxf5 14.Qxf5 Rad8 ile Siyah d-hattını alır (+0.15).' },
      ],
    },
    '13b': {
      text: '13...Be6 ile fil e6’ya gelir ve değişimi kabul eder.',
      amac: 'Gelişimi tamamlamak ve Beyazın en aktif hafif taşını (c4 filini) değiştirmek.',
      neden: 'Siyahın c8 fili hareket alanı bulmakta zorlanıyordu; e6’da hem gelişir hem de Bc4’ü nötrleştirir. 13...Bd7 daha pasiftir (+0.2). Motor 13...Be6’yı açık ara en iyi görür (0.0).',
      diger: [
        { move: '13...Bd7', text: '14.h3 Rad8 15.Ng4 ile Beyaz atları f6’ya karşı değişir (+0.2).' },
        { move: '13...a5', text: '14.Nf5 Bxf5 15.Qxf5 Rad8 (+0.25).' },
      ],
    },
    '14w': {
      text: '14.Bxe6 ile filler değişir.',
      amac: 'Siyahın kalesini e6’ya çekmek ya da f-piyonuyla almaya zorlayıp yapıyı bozmak.',
      neden: 'Fil geri çekilirse (14.Be2 veya 14.Bd3) tempo kaybedilir; Keres değişip f5’i atına bırakmayı seçti. Üç hamle de motora göre eşittir (yaklaşık 0.0).',
      diger: [
        { move: '14.Be2', text: '14...Bf8 15.Nf5 h5 ile benzer oyun (0.0).' },
        { move: '14.Bd3', text: '14...a5 15.Rd1 Rad8 (0.0).' },
      ],
    },
    '14b': {
      text: '14...Rxe6 ile kale alır ve üçüncü yatayda aktif bir konuma gelir.',
      amac: 'Kaleyi e6’dan hem e5’i korumak hem de gerekirse d6 veya şah kanadına geçirmek için kullanmak.',
      neden: '14...fxe6 f-hattını açar ama e6’da çift piyon yaratır (+0.4). 14...Bxe3?? ara hamlesi 15.Bxf7+! ile kötüdür (+0.9). Kaleyle almak en temiz yoldur.',
      diger: [
        { move: '14...fxe6', text: '15.Ng4 Nxg4 16.Qxg4 Qf7 ile yapı bozulur (+0.4).' },
        { move: '14...Bxe3', text: '15.Bxf7+! Qxf7 16.Qxe3 ile Beyaz piyon kazanır (+0.9).' },
      ],
    },
    '15w': {
      text: '15.Nf5 ile at nihayet f5’e varır ve g7 ile h6 karelerine bakar.',
      amac: 'Nh6+ veya Qg3 ile g7 üzerinde baskı kurmak; Siyahı ...g6 ile şah kanadını zayıflatmaya zorlamak.',
      neden: 'Bu, 8.Nd2 ile başlayan at yolculuğunun hedefiydi. Motor 15.a5 veya 15.c3 gibi sakin hamleleri (0.0) biraz daha iyi bulur, çünkü at f5’ten ...g6 ile kovulunca h6’da biraz sıkışacaktır.',
      diger: [
        { move: '15.a5', text: '15...Rd8 16.Nf5 h5 17.c3 ile önce vezir kanadını sabitler (0.0).' },
        { move: '15.c3', text: 'd4’ü kapatır ve ...Bxe3 değişimini kabullenir (0.0).' },
      ],
    },
    '15b': {
      text: '15...g6 ile Siyah atı f5’ten kovar.',
      amac: 'Beyaz atı geri çekilmeye ya da h6’ya sıçramaya zorlamak.',
      neden: '15...h5!? (motor eşit: 0.0) atı f5’te bırakır ama ...g6 tehdidini korur. Tal ...g6 ile hemen karar verdi; bunun bedeli f6 ve h6 karelerinin zayıflamasıdır, ama at h6’da şahla saldırıya açık kalacaktır.',
      diger: [
        { move: '15...h5', text: '16.a5 Bb4 17.h3 g6 ile at önce sabitlenir (0.0).' },
        { move: '15...Rd8', text: '16.Bg5 g6 17.Nh6+ Kg7 ile oyuna döner (0.0).' },
      ],
    },
    '16w': {
      text: '16.Nh6+ ile at h6’ya şah çeker; c1 fili onu korur.',
      amac: 'Atı Siyah şahının dibinde tutup f7 ve g8 karelerini kontrol etmek; ileride Bg5 ve f6’ya gelecek bir piyonla mat ağı kurmak.',
      neden: 'Geri çekilmeler pasif kalırdı (16.Ne3 −0.2, 16.Ng3 −0.4). h6’da at sıkışık görünür, ama Siyah onu almak için şahını ve atını harcamak zorundadır. Motor bunu tek iyi hamle sayar.',
      diger: [
        { move: '16.Ne3', text: '16...Rd8 17.c3 Bxe3 18.Bxe3 ile Siyah d-hattını alır (−0.2).' },
        { move: '16.Ng3', text: '16...h5 17.h3 Nh7 ile at şah kanadında işlevsiz kalır (−0.4).' },
      ],
    },
    '16b': {
      text: '16...Kg7 ile şah g7’ye gelir ve h6 atına saldırır.',
      amac: 'Atı rahatsız etmek; ...Ng8 ile atı değişmeye hazırlanmak.',
      neden: 'Şah g7’de f6 atını ve f7’yi korur; 16...Kf8 (+0.3) ve 16...Kh8 (+0.5) h6 atını rahat bırakırdı.',
      diger: [
        { move: '16...Kf8', text: '17.Rd1 Ng8 18.Bg5 ile Beyaz atı korumaya alır (+0.3).' },
        { move: '16...Kh8', text: '17.Bg5 Kg7 ile zaman kaybı (+0.5).' },
      ],
    },
    '17w': {
      text: '17.Rd1 ile kale açık d-hattına gelir.',
      amac: 'd-hattını ele geçirip Rd7 veya Rd8 ile yedinci ve sekizinci yataya girmek.',
      neden: 'Açık hattı ilk alan taraf üstünlük kurar. Motor 17.Bg5 (atı korumak, +0.1) ve 17.c3’ü de yaklaşık eşit bulur; Keres hattı Siyahtan önce aldı.',
      diger: [
        { move: '17.Bg5', text: '17...Ng8 18.Qh3 Nxh6 19.Bxh6+ ile at değişir (+0.1).' },
        { move: '17.c3', text: 'd4’ü kapatır; 17...Rd8 18.Bg5 Be7 19.g4 (0.0).' },
      ],
    },
    '17b': {
      text: '17...Rd8 ile Siyah d-hattında kaleyle karşı çıkar.',
      amac: 'Hattı Beyaza bırakmamak ve kaleleri değiştirerek Beyazın saldırı potansiyelini azaltmak.',
      neden: 'Motor 17...Ng8 ile h6 atını hemen değişmeyi biraz daha iyi görür (0.0); Tal önce hattı tartıştı. 17...Rf8? pasiftir (+0.4).',
      diger: [
        { move: '17...Ng8', text: '18.Nxg8 Rxg8 19.Bg5 h6 ile tehlikeli at ortadan kalkar (0.0).' },
        { move: '17...Rf8', text: '18.Bg5 Ng8 19.Nxg8 Kxg8 ile hat Beyaza kalır (+0.4).' },
      ],
    },
    '18w': {
      text: '18.Rxd8 ile kaleler değişir.',
      amac: 'Siyahı veziriyle almaya zorlamak; sonra Bg5 ile atı korumaya almak.',
      neden: 'Kale çekilirse (18.Re1 −0.2) Siyah hattı alır. 18.Bg5 Rd4 karmaşık bir oyun verirdi. Değişim sadeleştirici ve doğal.',
      diger: [
        { move: '18.Bg5', text: '18...Rd4 19.c3 Rxe4 20.b4 ile keskin bir oyun (0.0).' },
        { move: '18.Re1', text: '18...Ng8 19.Nxg8 Rxg8 ile d-hattı Siyahta (−0.2).' },
      ],
    },
    '18b': {
      text: '18...Qxd8 ile vezir alır; d-hattı artık Siyah vezirinindir.',
      amac: 'Veziri d-hattına yerleştirmek ve d4’e geçmeye hazırlamak.',
      neden: 'Zorunludur; 18...Bxf2+?? 19.Qxf2 ile Siyah bir kale eksik kalır (+5.0). Önemli olan, vezirin artık d-hattının sahibi olmasıdır.',
    },
    '19w': {
      text: '19.Bg5? ile fil g5’e gelir ve f6 atını bağlarken h6 atını korur.',
      amac: 'h6 atını sağlamlaştırıp f6 atına baskı yapmak; Qh3 veya Qf4 ile şah saldırısını sürdürmek.',
      neden: 'Havanur’un ChessBase analizinde bu hamle “ölümcül hata” olarak işaretlenir, çünkü c1 fili d4 karesini dolaylı olarak kontrol ediyordu (Be3 ihtimali) ve fil g5’e gidince d4 boş kalır. Motor da 19.g4!’ü (g5 ile atı kovalama, +0.3) veya 19.c3’ü (−0.2) tercih eder; 19.Bg5 −0.5 ile −0.8 arası.',
      diger: [
        { move: '19.g4', text: '19...Qd7 20.g5 Nh5 (Havanur: 19...Qe7 20.g5 Nd7) ile at kenara itilir ve h6 atı güçlenir (+0.3).' },
        { move: '19.c3', text: 'd4’ü piyonla tutar; Havanur’un verdiği 19...Nxe4 20.Qxf7+ Kh8 21.Be3 Bxe3 22.fxe3 hattı yaklaşık eşittir (Motor: +0.1).' },
        { move: '19.Rb1', text: 'b2’yi önceden korur ama pasif; 19...Qa5 ile a4 düşer (−0.5).' },
      ],
    },
    '19b': {
      text: '19...Qd4! ile vezir d4’e merkezileşir.',
      amac: 'b2, e4 ve (c5 fili ile birlikte) f2’yi aynı anda hedef almak.',
      neden: 'Havanur bu hamleyi ünlemle verir: tehditler ...Qxb2, ...Qxe4 ve ...Qxf2+’dır ve Beyaz bunların hepsini karşılayamaz. Motor da açık ara en iyi hamle olarak görür (−0.3); 19...Qb6 +0.2, 19...Qc7 +0.35.',
      diger: [
        { move: '19...Qb6', text: '20.b3 Rd6 21.h4 ile Beyaz b2’yi korur ve dengeyi bulur (+0.2).' },
        { move: '19...Qc7', text: '20.Rd1 Rd6 21.Rd2 ile Beyaz d-hattını geri alır (+0.35).' },
      ],
    },
    '20w': {
      text: '20.h4 ile g5 filini piyonla destekler ve şaha h2 kaçış karesi açar.',
      amac: 'Fili sabitlemek (böylece h6 atı da sağlam kalır) ve arka yatay matlarına karşı önlem almak.',
      neden: 'b2’yi korumak artık mümkün değildi; Keres en azından şah kanadındaki taşlarını sağlamlaştırdı. 20.Rf1 (f2’yi korumak, −0.9) ve 20.Re1 (−1.3) daha kötüdür. Motor 20.h4’ü en iyi bulur (−0.3).',
      diger: [
        { move: '20.Rf1', text: '20...Qxb2 21.c3 Rd6 22.h4 ile Beyaz daha pasif bir pozisyonda piyon eksiği (−0.9).' },
        { move: '20.Re1', text: '20...Qxb2 21.c3 Qa2 ile a4 de tehlikede (−1.3).' },
      ],
    },
    '20b': {
      text: '20...Qxb2 ile vezir b2 piyonunu alır.',
      amac: 'Madde kazanmak ve vezir kanadında iki bağlantılı geçer piyon çoğunluğu hazırlamak; vezir ayrıca c2 ve a1 kalesine bakar.',
      neden: 'Tal’ın pratik açgözlülüğü: vezir merkezden uzaklaşsa da Beyazın a1 kalesine saldırdığı için tempo kazanır. Motor 20...Rd6 ile eşit görür (0.0).',
      diger: [
        { move: '20...Rd6', text: '21.c3 Qc4 22.Re1 Qe6 ile sakin bir oyun (0.0).' },
        { move: '20...Qd7', text: 'Gereksiz geri çekiliş; 21.Rd1 Qe8 ile Beyaz d-hattını alır (+0.8).' },
      ],
    },
    '21w': {
      text: '21.Rd1 ile kale saldırıdan kaçarak d-hattına gelir.',
      amac: 'Rd7 ve Rd8 ile Siyah şahına karşı arka yatay saldırısı başlatmak.',
      neden: 'Kale a1’de saldırı altındaydı; d1 tek aktif karedir. 21.Re1 ve 21.Rc1 pasif kalır (her ikisi −1.3). Motor 21.Rd1’i tek iyi hamle sayar.',
      diger: [
        { move: '21.Re1', text: '21...Bd4 22.Rc1 Qc3 23.Qxc3 ile Siyah iyi bir son oyuna girer (−1.3).' },
        { move: '21.Rc1', text: '21...Rd6 22.a5 Qa3 23.Qxa3 Bxa3 (−1.3).' },
      ],
    },
    '21b': {
      text: '21...Bd4! ile fil d-hattının ortasına yerleşir.',
      amac: 'Beyaz kalenin d7 ve d8’e girmesini engellemek; fil e5 piyonuyla korunur ve f2’ye baskıyı sürdürür.',
      neden: 'Açgözlü 21...Qxc2? 22.Rd8! ile cezalandırılır: Beyaz Rg8+ ve Qxf7 ile mat tehdit eder, Siyah 22...Qxf2+ 23.Qxf2 Bxf2+ 24.Kxf2 ile vezirleri değişmek zorunda kalır ve kötü bir kale son oyununa düşer (Motor: +2.2; Havanur da bu hattı verir). 21...Bd6? 22.g4 ise f6 atını kovalar (+1.6). Bd4 her iki sorunu çözer (−0.0 ile −0.2).',
      diger: [
        { move: '21...Qxc2', text: '22.Rd8! Qxf2+ 23.Qxf2 Bxf2+ 24.Kxf2 Rd6 25.Rb8 b5 26.Rb7 ile Beyaz kalesi yedinci yatayda (+2.2).' },
        { move: '21...Bd6', text: '22.g4 Qxc2 23.a5 ile g5 tehdidi f6’yı düşürür (+1.6 – +2.3).' },
        { move: '21...Be7', text: '22.Rd7 ile kale yedinci yataya girer (+2.4).' },
      ],
    },
    '22w': {
      text: '22.Rd3 ile kale üçüncü yataya çıkar.',
      amac: 'Kaleyi b3 veya c3 üzerinden aktifleştirmek ve gerekirse Rxd4 fedasını hazırlamak.',
      neden: 'Kale d1’de pasifti ve c2 piyonunu koruyamıyordu. Rd3 hem b3’ten b7’ye bakmayı hem de d4 filine baskıyı sürdürmeyi sağlar. Motor 22.a5 ile yaklaşık eşit görür (0.0); 22.Kh2 ise 22...c5 ile Siyahı rahatlatır (−0.7).',
      diger: [
        { move: '22.a5', text: '22...c5 23.Rc1 Bc3 24.Rd1 ile bekleyiş (0.0).' },
        { move: '22.Kh2', text: '22...c5 23.Rd2 b5 ile Siyahın vezir kanadı ilerler (−0.7).' },
      ],
    },
    '22b': {
      text: '22...Qxc2 ile vezir c2 piyonunu da alır.',
      amac: 'İkinci piyonu kazanmak; vezir c2’den e4’e de bakar.',
      neden: 'Beyaz artık kalesini fedaya mecbur olacak; Tal bunu hesaplamış ve kabul etmiştir. 22...c5 (+0.6) ve 22...Rd6 (+1.0) Beyaza Rb3 ile karşı oyun verirdi. Motor 22...Qxc2’yi en iyi bulur (0.0).',
      diger: [
        { move: '22...c5', text: '23.c3 c4 24.Rxd4 exd4 ile Beyaz saldırıyı daha iyi koşullarda başlatır (+0.6).' },
        { move: '22...Rd6', text: '23.Rb3 Qa1+ 24.Kh2 b5 ile Beyaz kalesi aktifleşir (+1.0).' },
      ],
    },
    '23w': {
      text: '23.Rxd4! ile Keres kalesini fil için verir.',
      amac: 'd4 filini ortadan kaldırıp 24.e5 ile f6 atını sökmek; ardından h6 atı, g5 fili ve vezirle Siyah şahına saldırmak.',
      neden: 'İki piyon eksik ve pasif kalan bir Beyazın şansı yoktu: 23.a5 Qb1+ 24.Rd1 Qb4 (−1.6), 23.Kh2 c5 (−2.1). Feda, motorun tek gördüğü kurtuluştur ve oyunu dengeye döndürür (0.0). Havanur da bu hamleyi ünlemle verir.',
      diger: [
        { move: '23.a5', text: '23...Qb1+ 24.Rd1 Qb4 25.Bd2 ile Siyah iki piyon fazla (−1.6).' },
        { move: '23.Kh2', text: '23...c5 24.a5 b5 ile vezir kanadı piyonları yürür (−2.1).' },
      ],
    },
    '23b': {
      text: '23...exd4 ile Siyah piyonla alır; d4’te geçer bir piyon oluşur.',
      amac: 'Feda edilen kaleyi almak ve geçer bir d-piyonu kazanmak.',
      neden: 'Zorunlu: 23...Qb1+? 24.Rd1 ve 23...Kf8? 24.Rd7 ile Beyaz kazanır (+6.2 – +6.4). Ancak piyonla almak e-hattını açar ve e5 ilerleyişine yol verir.',
    },
    '24w': {
      text: '24.e5 ile piyon f6 atına saldırır.',
      amac: 'Atı yerinden sökerek Siyah şahının önünü açmak; f6 karesine piyon ya da fille girmek.',
      neden: 'Kale fedasının devamı budur. At kaçarsa Qxf7+ ile mat gelir (24...Nd5 25.Qxf7+ Kh8 26.Qf8#). 24.Qf4 (−2.8) ve 24.g4 (−3.5) saldırıyı yavaşlatırdı. Motor 24.e5’i tek iyi hamle sayar (0.0).',
      diger: [
        { move: '24.Qf4', text: '24...Qc5 25.Qb8 d3 26.Qxb7 ile Siyahın piyonu yürür (−2.8).' },
        { move: '24.g4', text: '24...Qc5 25.Bd2 Qe7 ile tehditler ortadan kalkar (−3.5).' },
      ],
    },
    '24b': {
      text: '24...Kf8! ile Siyah atı bırakır ve şahını f8’e çeker.',
      amac: 'exf6 ve Bxf6’nın şah olmasını önlemek; şahı f7’yi koruyan kareye getirmek.',
      neden: 'Atı kurtarmak her yolda mat yer: 24...Nd5 25.Qxf7+ Kh8 26.Qf8#; 24...Nd7 25.Qxf7+ Kh8 26.Qg8#; 24...Rxe5 25.Qxf6+ Kf8 26.Qxf7#. Havanur bu hamleyi “parlak oyun” olarak niteler. Motor: 24...Kf8 −0.35 ile −0.55; 24...Qc3 25.Bxf6+ Kf8 26.Qf4 d3 de yaklaşık eşit (0.0).',
      diger: [
        { move: '24...Qc3', text: '25.Bxf6+ Kf8 26.Qf4 d3 27.Bh8 ile karşılıklı şanslar (0.0).' },
        { move: '24...Qc5', text: '25.exf6+ Kf8 26.Bd2 Ke8 27.Qg3 ile Beyaz biraz daha iyi (+0.1 – +0.4).' },
        { move: '24...Nd5', text: '25.Qxf7+ Kh8 26.Qf8# mat.' },
      ],
    },
    '25w': {
      text: '25.exf6 ile Beyaz atı piyonla alır; f6 piyonu şahı kafese alır.',
      amac: 'f6 piyonu ile g7 ve e7 karelerini tutmak; Qf4 veya Qg3 ile b8’e şah çekip mat aramak.',
      neden: 'Keres saldırıyı canlı tutmak istedi. Havanur, Clarke’ın analizine dayanarak 25.Bxf6’yı “?” ile verir (25...Qc1+ 26.Kh2 Qxh6 27.Bg5 Qg7 28.Bf6 Rxf6 29.exf6 Qh6 30.Qe4 Kg8 31.Qxd4 Qf8); ancak motor bu hattın sonunu yaklaşık beraberlik (−0.3) görür ve 25.Bxf6’yı oyun hamlesinden daha iyi bulur (−0.8’e karşı −1.2). Yani Keres saldırı uğruna beraberlik yolunu bıraktı.',
      diger: [
        { move: '25.Bxf6', text: '25...Qc1+ 26.Kh2 Qxh6 27.Bg5 Qg7 28.Bf6 Rxf6 29.exf6 ile vezir son oyunu, Motor: −0.3 ile −0.8 (beraberliğe yakın).' },
        { move: '25.Kh2', text: '25...Qe4 26.Qa3+ Ke8 27.Bxf6 ile benzer, biraz daha kötü (−1.2 ile −1.5).' },
      ],
    },
    '25b': {
      text: '25...Qc3! ile Siyah vezir f3 vezirine saldırır.',
      amac: 'Vezir değişimini teklif ederek Beyazın Qg3/Qf4-b8+ saldırısını kesmek.',
      neden: 'Çoğu doğal hamle kaybeder: 25...d3? 26.Qg3! ve Qb8+ tehdidiyle Beyaz kazanır (+6.0). Vezir c3’ten g3 ve f6’ya karşı c3-h8 çaprazını tutar ve değişim teklif eder; Beyaz vezir değişirse 26.Qxc3 dxc3 ile c-piyonu durdurulamaz (−4.0). chess24’te aktarılan Heuer’in “paradoksal savunma hamlesi” muhtemelen bu bölümü kastediyor, ama yazı hamleyi açıkça belirtmiyor. Motor: 25...Qc3 −1.2 ile −1.4; 25...Qe4 ve 25...Qb1+ yaklaşık 0.0.',
      diger: [
        { move: '25...Qe4', text: '26.Qg3 Qe1+ 27.Kh2 Qe5 28.f4 ile Beyaz tehditleri sürer (−0.1 ile −0.2).' },
        { move: '25...Qb1+', text: '26.Kh2 Qe4 27.Qg3 Qe5 28.f4 ile benzer, eşit (0.0).' },
        { move: '25...d3', text: '26.Qg3! ve Qb8+ tehdidi; Siyah şahı kurtaramaz (+6.0).' },
      ],
    },
    '26w': {
      text: '26.Qg4 ile vezir değişimden kaçar ve şah kanadında kalır.',
      amac: 'Qg3 veya Qd7 ile saldırıyı canlı tutmak; c8 ve d7 karelerine bakmak.',
      neden: 'Vezir değişimi kaybettirir: 26.Qxc3 dxc3 27.Kf1 b5 ile c-piyonu yürür (−4.0). 26.Qf4 Qe1+ 27.Kh2 Qe5 de vezirleri değişir (−2.9). 26.h5? Qxf3 (−4.1). Motor 26.Qg4’ü tek mantıklı hamle sayar (−1.5).',
      diger: [
        { move: '26.Qf4', text: '26...Qe1+ 27.Kh2 Qe5 28.Qxe5 Rxe5 ile Siyah kale + piyonlarla kazanır (−2.9).' },
        { move: '26.Qxc3', text: '26...dxc3 27.Kf1 b5 ile c-piyonu vezir olur (−4.0).' },
      ],
    },
    '26b': {
      text: '26...Qe1+ ile Siyah vezir şah çekerek Beyazın arka yatayına girer.',
      amac: 'f2 piyonunu almak için tempo kazanmak ve Beyaz şahını h2’ye zorlamak.',
      neden: 'Motor 26...Ke8 (−1.8) ve 26...d3’ü (−1.6) eşdeğer bulur; Tal en somut yolu seçti: önce şah, sonra f2. Böylece Beyaz vezirinin şah saldırısı için gerekli zamanı kalmaz.',
      diger: [
        { move: '26...Ke8', text: '27.f4 d3 28.f5 Re1+ ile Siyah önce şahı güvenliğe alır (−1.8).' },
        { move: '26...d3', text: '27.Qg3 Qe1+ 28.Kh2 Qe5 ile vezir değişimi zorlanır (−1.6).' },
      ],
    },
    '27w': {
      text: '27.Kh2 ile şah h2’ye çekilir.',
      amac: 'Şahtan kaçmak; h4 piyonunun açtığı kare burada işe yarar.',
      neden: 'Zorunlu: 27.Kh2 tek yasal hamledir, çünkü e1 veziri birinci yatayın tamamını tutar ve f2 piyonu f-hattını kapatır. 20.h4’ün bir amacı da tam olarak bu kaçış karesiydi; o hamle olmasaydı şah çekiş mat olurdu.',
    },
    '27b': {
      text: '27...Qxf2 ile vezir f2 piyonunu da alır.',
      amac: 'Üçüncü piyonu kazanmak ve Beyaz şahının çevresini açmak; vezir f2’den g1, g3 ve d4’e bakar.',
      neden: 'Artık Siyahın iki hafif taşa karşı kale ve üç fazla piyonu var. 27...Qe5+ (−0.4) ve 27...Ke8 (−0.3) daha az iddialıdır. Motor 27...Qxf2’yi en iyi bulur (−1.4).',
      diger: [
        { move: '27...Qe5+', text: '28.f4 Qe2 29.Qh3 d3 ile Beyaz f-piyonunu kurtarır (−0.4).' },
        { move: '27...Ke8', text: '28.Qg3 Qe5 29.f4 ile Beyaz dengeyi bulur (−0.3).' },
      ],
    },
    '28w': {
      text: '28.Qh3 ile vezir h3’e çekilir; e6 kalesine ve c8’e bakar.',
      amac: 'Qc8+ veya Qxe6 ihtimalleriyle Siyah kalesini bağlamak; şahını korumak.',
      neden: 'Vezir g4’te ...Qf4+ gibi değişim tekliflerine açıktı. h3’ten hem e6’ya hem de b3 üzerinden vezir kanadına geçiş mümkün. 28.a5 (−1.8) ve 28.h5 (−2.1) daha kötü. Motor en iyi olarak görür (−1.5).',
      diger: [
        { move: '28.a5', text: '28...Qe2 29.Qxd4 Qe5+ ile vezir değişimi zorlanır (−1.8).' },
        { move: '28.h5', text: '28...Qe2 29.hxg6 hxg6 30.Qg3 ile Siyah şahı rahatlar (−2.1).' },
      ],
    },
    '28b': {
      text: '28...Qe1 ile vezir e1’e çekilir ve arka yatayı tutar.',
      amac: 'Beyazın Qc8+ şahına karşı e8 karesini kontrol etmek ve ...Qe5+ fikirlerini hazırlamak.',
      neden: 'f2’den sonra vezirin yeni bir görevi var: e-hattında kendi kalesini desteklemek. Motor 28...Qe1’i en iyi görür (−1.5 ile −1.8); 28...Ke8 29.Qb3 Re2 30.Qh3 hamle tekrarına gidebilirdi (0.0).',
      diger: [
        { move: '28...Qe2', text: '29.Qa3+ Ke8 30.Qb4 b5 ile Beyaz vezir şah çeker (−1.0).' },
        { move: '28...Ke8', text: '29.Qb3 Re2 30.Qh3 ile tekrar; Siyah kazanma şansını bırakır (0.0).' },
      ],
    },
    '29w': {
      text: '29.Qb3 ile vezir b3’ten b7 piyonuna ve f7’ye bakar.',
      amac: 'Siyahın korumasız b7 piyonunu hedef almak; Qb8+ ihtimalini canlandırmak.',
      neden: 'Saldırı tükendiğinde Beyazın tek şansı madde geri almaktır. 29.Qf3 (−1.9) ve 29.Qa3+ (−2.3) daha zayıftır. Motor en iyi olarak görür (−1.7).',
      diger: [
        { move: '29.Qf3', text: '29...Qe5+ 30.Kg1 Qe4 31.Qb3 ile aynı fikre daha geç gelir (−1.9).' },
        { move: '29.Qa3+', text: '29...Ke8 30.Qb3 Qe5+ 31.Kh1 ile tempo kaybı (−2.3).' },
      ],
    },
    '29b': {
      text: '29...b5 ile Siyah b7 piyonunu ilerletir.',
      amac: 'Saldırı altındaki piyonu kurtarmak ve vezir kanadında ikinci bir geçer piyon yaratmak.',
      neden: 'b7 korumasızdı. 29...b6? 30.Qxb6 ile piyon düşer (0.0). Motor 29...Qe5+’i de eşit görür (−1.8). ...b5 ile a4 piyonu değişime zorlanır ve Siyah c- ya da b-hattında geçer piyon kazanır.',
      diger: [
        { move: '29...Qe5+', text: '30.Kg1 Qe1+ 31.Kh2 b5 ile aynı plana döner (−1.8).' },
        { move: '29...b6', text: '30.Qxb6 Qe5+ 31.Kh3 Re8 ile piyon kaybı (0.0).' },
      ],
    },
    '30w': {
      text: '30.axb5 ile Beyaz değişir.',
      amac: 'a-piyonunun alınmasını önlemek ve Siyahın piyon yapısını dağıtmak.',
      neden: 'a4 piyonu ...bxa4 ile kaybedilecekti. 30.Qc2 (−2.1) ve 30.Qa2 (−2.4) b5-b4 ile Siyaha bağlantılı geçer piyonlar verirdi. Motor 30.axb5’i en iyi bulur (−1.6).',
      diger: [
        { move: '30.Qc2', text: '30...Qe5+ 31.Kg1 b4 32.Qc4 ile Siyahın b ve c piyonları ilerler (−2.1).' },
        { move: '30.Qa2', text: '30...Qe5+ 31.Kh3 b4 (−2.4).' },
      ],
    },
    '30b': {
      text: '30...cxb5 ile c-piyonuyla alınır; Siyahın b- ve d-piyonları geçer piyon olur.',
      amac: 'İki ayrı geçer piyonla Beyaz taşlarını iki cepheye bölmek.',
      neden: '30...axb5? değil, çünkü c-piyonu ile almak d-piyonunu c-piyonundan bağımsız bırakır ve b-piyonu da geçer olur. 30...Qe5+ (−0.5) ve 30...Qc3 (−0.2) Beyaza b5’i geri alma şansı verir. Motor en iyi görür (−1.7).',
      diger: [
        { move: '30...Qe5+', text: '31.Kh3 cxb5 32.Qf3 Qe4 ile Beyaz vezir merkeze döner (−0.5).' },
        { move: '30...Qc3', text: '31.Qa2 cxb5 32.Qd5 ile Beyaz vezir aktifleşir (−0.2).' },
      ],
    },
    '31w': {
      text: '31.Qa3+ ile vezir a3’ten şah çeker.',
      amac: 'a3-f8 çaprazından şah çekerek Siyah şahını rahatsız etmek ve b4 karesini kontrol etmek.',
      neden: 'Motor 31.Qc2 (−1.5) ve 31.Qf3’ü (−1.5) hemen hemen eşit görür. Keres şahla b-piyonunu b4’e itmeye zorladı; bu piyon b4’te vezir için hedef olabilirdi.',
      diger: [
        { move: '31.Qc2', text: '31...Qc3 32.Qf2 Qc7+ 33.Kh1 ile vezir merkezde (−1.5).' },
        { move: '31.Qf3', text: '31...Qe4 32.Qg3 Qe5 33.Bf4 ile şah kanadı baskısı (−1.5).' },
      ],
    },
    '31b': {
      text: '31...b4 ile piyon ilerler ve şahı kapatır.',
      amac: 'Şahı engellerken b-piyonunu bir adım daha ileri götürmek.',
      neden: '31...Ke8 (−1.7) de iyidir. 31...Qb4?? 32.Qxb4+ ile vezir şahla birlikte düşer (+7.5). Tal piyonu ileri atmayı seçti; ...b4 a3-f8 çaprazını kapatır.',
      diger: [
        { move: '31...Ke8', text: '32.Qf3 Qe4 33.Qg3 Qe5 ile benzer (−1.7).' },
        { move: '31...Qb4', text: '32.Qxb4+ şah olduğu için Siyah veziri kaybeder (+7.5).' },
      ],
    },
    '32w': {
      text: '32.Qb3 ile vezir b3’e döner ve b4 piyonuna, f7’ye bakar.',
      amac: 'b4 piyonunu ve f7’yi aynı anda hedef almak.',
      neden: 'Bu hamle hata sayılabilir: vezir şah kanadından uzaklaşır ve Siyah ...Qe5+ ile tempo kazanır. Motor 32.Qf3 (−1.9) veya 32.Qa4’ü (−2.0) tercih eder; 32.Qb3 −2.9.',
      diger: [
        { move: '32.Qf3', text: '32...Qe4 33.Qg3 Qe5 34.Bf4 ile vezir şah kanadında kalır (−1.9).' },
        { move: '32.Qa4', text: '32...Qe5+ 33.Kh3 Qb5 34.Qd1 ile d-piyonu bloke edilir (−2.0).' },
      ],
    },
    '32b': {
      text: '32...Qe5+ ile vezir e5’ten şah çeker; e5 karesi hem f6’ya hem d-piyonuna bakar.',
      amac: 'Tempo kazanmak, Beyaz şahını h1’e göndermek ve vezir ile d-piyonunu birlikte ilerletmek.',
      neden: 'Vezir e5’te merkezde; hem f6 piyonuna saldırır hem de d4-d3 ilerleyişini destekler. Motor en iyi olarak görür (−3.1); 32...d3 33.Qxd3 de iyidir (−2.9).',
      diger: [
        { move: '32...d3', text: '33.Qxd3 Qe5+ 34.Kg1 Qc5+ ile piyon değişilir (−2.9).' },
        { move: '32...a5', text: '33.Qc4 Qc3 34.Qd5 ile Beyaz vezir aktifleşir (−1.3).' },
      ],
    },
    '33w': {
      text: '33.Kh1 ile şah h1’e gider.',
      amac: 'Şahtan kaçmak.',
      neden: 'Zorunlu bir şah hamlesi; 33.Kg1 ile eşit (−3.3). 33.g3? ise Qe2+ ile şahı açığa çıkarır (−4.5).',
      diger: [
        { move: '33.Kg1', text: 'Eşdeğer: 33...Qe1+ 34.Kh2 d3 (−3.3).' },
        { move: '33.g3', text: '33...Qe2+ 34.Kh3 Qf1+ 35.Kg4 ile şah açıkta (−4.5).' },
      ],
    },
    '33b': {
      text: '33...Qe1+ ile vezir yeniden şah çeker.',
      amac: 'Beyaz şahını h2’ye geri göndermek; vezirin arka yataydaki kontrolünü korumak.',
      neden: 'Motor 33...Qe1+’i en iyi hamle olarak görür (−3.5); vezir hem şahı rahatsız eder hem de e-hattında kaleyi destekler.',
      diger: [
        { move: '33...Qb5', text: '34.Bd2 a5 35.Kh2 d3 ile daha yavaş (−2.2).' },
        { move: '33...Qc5', text: '34.Bd2 a5 35.Qf3 Qc6 (−1.4).' },
      ],
    },
    '34w': {
      text: '34.Kh2 ile şah h2’ye döner.',
      amac: 'Şahtan kaçmak.',
      neden: 'Zorunlu: 34.Kh2 tek yasal hamledir.',
    },
    '34b': {
      text: '34...Qe5+ ile Siyah şah çekmeyi sürdürür.',
      amac: 'Hamle tekrarıyla zaman kazanmak ve en uygun anı beklemek.',
      neden: 'Motor 34...d3!’ü (−3.1) en iyi bulur; 34...Qe5+ (−2.4) daha az güçlüdür. Tal’ın neden hemen piyonu ilerletmediği kaynaklarda açıklanmıyor; pratik açıdan şahlar Beyazın hiçbir şey yapamadığını görmek için zaman kazandırır.',
      diger: [
        { move: '34...d3', text: '35.Qa2 Qe5+ 36.Kh3 Qd4 ile piyon hemen ilerler (−3.1).' },
        { move: '34...a5', text: '35.Qc4 Qc3 36.Qd5 ile Beyaz vezir aktifleşir (−1.5).' },
      ],
    },
    '35w': {
      text: '35.Kh1 ile şah h1’e gider.',
      amac: 'Şahtan kaçmak.',
      neden: '35.Kg1 de eşit (−2.3); 35.Qg3?? Qxg3+ 36.Kxg3 b3 ile b-piyonu durdurulamaz (−5.8).',
      diger: [
        { move: '35.Kg1', text: 'Eşdeğer: 35...Qb5 36.Bd2 Rxf6 (−2.3).' },
        { move: '35.Qg3', text: '35...Qxg3+ 36.Kxg3 b3 ile piyon vezir olur (−5.8).' },
      ],
    },
    '35b': {
      text: '35...Qd6 ile vezir d6’dan d-piyonunu destekler ve ...d3 ilerleyişini hazırlar.',
      amac: 'Veziri d-piyonunun arkasına koymak; ...d3 ve ...d2 için yol açmak.',
      neden: 'Plan doğru, ama vezir f6 piyonuna olan baskısını kaybeder ve Beyaz vezir şah kanadına dönebilir. Motor 35...Qb8 (−2.1) veya 35...Qb5’i (−2.0) daha güçlü bulur; 35...Qd6 −1.3 ile −2.0.',
      diger: [
        { move: '35...Qb8', text: '36.Bd2 a5 37.Kg1 Qb7 ile önce b-piyonunu güvenceye alır (−2.1).' },
        { move: '35...Qb5', text: '36.Bd2 a5 37.Qf3 Qc6 ile vezir uzun çaprazda (−2.0).' },
      ],
    },
    '36w': {
      text: '36.Kg1 ile şah g1’e çıkar.',
      amac: 'Şahı merkeze yaklaştırmak ve olası vezir şahlarından korumak.',
      neden: 'Motor 36.Kg1 ve 36.Bd2’yi eşit görür (−2.0); Bd2 filin d-piyonunu durdurmasını sağlar. Kritik olan bir sonraki hamledir.',
      diger: [
        { move: '36.Bd2', text: '36...Rxf6 37.Qc4 Kg7 38.Kg1 ile fil d-piyonunu bloke eder (−2.4).' },
        { move: '36.Qb1', text: '36...b3 37.Bd2 Qb6 ile b-piyonu ilerler (−3.6).' },
      ],
    },
    '36b': {
      text: '36...d3 ile geçer piyon ilerler.',
      amac: 'Piyonu d2’ye yaklaştırmak; Beyaz taşlarını savunmaya zorlamak.',
      neden: 'Havanur 36...Qc5!’i (önce veziri c5’e getirip karşı oyunu önlemek) de önerir. Motor 36...d3’ü en iyi hamle olarak görür (−2.7); 36...a5 (−2.1) ve 36...Qc5 (−1.7) daha yavaştır.',
      diger: [
        { move: '36...Qc5+', text: '37.Bd2 a5 38.Qf3 Qc6 ile yavaş ama sağlam (−1.7).' },
        { move: '36...a5', text: '37.Qf3 Qc6 38.Qg3 Qb6 (−2.1).' },
      ],
    },
    '37w': {
      text: '37.Qd1? ile vezir d1’de piyonu durdurmaya çalışır.',
      amac: 'Piyonun önüne geçip d2 ve d1 karelerini kontrol etmek.',
      neden: 'Vezir pasif bir blokajcı olur ve Siyah vezir c5-c2 ile d1’i ikinci kez hedef alır. Havanur 37.Qc4!’ü önerir (37...Ke8 veya 37...Qb6+ 38.Kh1 Qb5 39.Qc8+ Re8 40.Qc1). Motor: 37.Qc4 −3.2, 37.Qd1 −4.7 ile −5.0.',
      diger: [
        { move: '37.Qc4', text: '37...Ke8 38.Bd2 Qc6 39.Qb3 ile vezir hem d3’e hem b4’e bakar (−3.2).' },
        { move: '37.Bd2', text: '37...Qd4+ 38.Kh2 Qxh4+ 39.Kg1 ile h4 düşer (−4.7).' },
      ],
    },
    '37b': {
      text: '37...Qc5+ ile vezir c5’ten şah çeker ve c2 karesine yönelir.',
      amac: 'Tempo kazanıp vezirini c2’ye getirmek ve d-piyonunu ikinci kez desteklemek.',
      neden: 'Motor 37...b3! (38.Qxb3 d2 39.Bxd2 Qxd2, −5.4) ve 37...Re2’yi (−5.4) biraz daha güçlü görür. Tal’ın hamlesi de kazanır (−4.6).',
      diger: [
        { move: '37...b3', text: '38.Qxb3 d2 39.Bxd2 Qxd2 ile Siyah bir taş kazanır (−5.4).' },
        { move: '37...Re2', text: '38.Qf1 d2 39.Nf5 Qe5 ile piyon d1’e dayanır (−5.4).' },
      ],
    },
    '38w': {
      text: '38.Kh1 ile şah h1’e gider.',
      amac: 'Şahtan kaçmak.',
      neden: 'En iyi kare: 38.Kh2? Qd6+ 39.Kh3 d2 ile piyon ilerler (−5.3); 38.Kf1?? Re2 ile mat ağı (−8.1).',
      diger: [
        { move: '38.Kh2', text: '38...Qd6+ 39.Kh3 d2 40.Qxd2 (−5.3).' },
        { move: '38.Kf1', text: '38...Re2 39.Ng4 Qf5+ ile Beyaz şahı tehlikede (−8.1).' },
      ],
    },
    '38b': {
      text: '38...Qc2 ile vezir c2’de d1 vezirine saldırır ve d-piyonunu destekler.',
      amac: 'Vezir değişimini teklif etmek: değişirse ...dxc2 ile piyon vezir olur; değişmezse Beyaz vezir d1’i bırakmak zorunda kalır.',
      neden: 'Motor 38...Qd4 (−5.0) ve 38...Re2’yi (−5.4) daha güçlü görür; 38...Qc2 −3.3 civarı. Ama oyun hamlesi de Beyaza tek bir doğru savunma bırakır.',
      diger: [
        { move: '38...Re2', text: '39.Ng4 Qd4 40.Ne3 Rxe3 ile taş kazanılır (−5.4).' },
        { move: '38...Qd4', text: '39.Ng4 Re2 40.Ne3 Rxe3 (−5.0).' },
      ],
    },
    '39w': {
      text: '39.Qf3? ile vezir f3’e çekilir.',
      amac: 'Vezir değişiminden kaçmak ve f7’ye bakarak karşı oyun aramak.',
      neden: 'Vezir d1’i bırakınca ...d2 ile piyon vezir olmakla tehdit eder. Motor 39.Qg4!’ü önerir (−3.6 ile −4.9): 39...Qc3 40.Nf5 d2 41.Bh6+ ile Beyaz en azından şah çeker. 39.Qf3 −6.2.',
      diger: [
        { move: '39.Qg4', text: '39...Qc3 40.Kh2 d2 41.Bf4 ile Beyaz direnir (−3.6 ile −4.9).' },
        { move: '39.Qg1', text: '39...d2 40.Bxd2 Qxd2 41.Qc5+ ile yine bir taş eksik (−5.6).' },
      ],
    },
    '39b': {
      text: '39...d2! ile piyon d1’de vezir olmakla tehdit eder.',
      amac: 'Beyazı fili vermeye zorlamak.',
      neden: 'Piyon d1’e çıkarsa Beyaz vezirini kaybeder ya da mat olur; tek savunma 40.Bxd2’dir. Motor açık ara en iyi hamle olarak görür (−5.9); 39...Qc6 ve 39...Qc8 sadece −2’dir.',
      diger: [
        { move: '39...Qc6', text: '40.Qg3 Qb6 41.Nf5 gxf5 ile karmaşık (−2.2).' },
        { move: '39...Qc8', text: '40.Qxd3 Ke8 41.Qf3 Qc6 ile Beyaz piyonu alır (−1.8).' },
      ],
    },
    '40w': {
      text: '40.Bxd2 ile fil piyonu alır.',
      amac: 'Piyonun vezir olmasını önlemek.',
      neden: 'Zorunlu: 40.Kh2 d1=Q (−9.2) ve 40.Qa8+ Re8 41.Bxd2 Qxd2 (−7.4) daha kötü. Fil d2’de alınacak, ama başka çare yok.',
      diger: [
        { move: '40.Qa8+', text: '40...Re8 41.Bxd2 Qxd2 42.Qf3 ile aynı sonuç, daha kötü (−7.4).' },
        { move: '40.Kh2', text: '40...d1=Q ile Siyah ikinci vezir alır (−9.2).' },
      ],
    },
    '40b': {
      text: '40...Qxd2 ile vezir fili alır; Siyah vezir + kale + beş piyona karşı Beyazın vezir + at + üç piyonu kalır ve h6 atı da düşmek üzere (...Qxh6). Keres terk etti.',
      amac: 'Taşı geri alıp kesin madde üstünlüğüne ulaşmak.',
      neden: 'Beyazın elinde vezir, at ve üç piyon kalır; Siyahın vezir, kale ve beş piyonu var, ayrıca Qd2-h6 çaprazı h6 atına saldırır. 40...Qb1+ ve 40...Qe4 gibi hamleler kazancı bırakırdı (−0.8, −0.3). Motor: 40...Qxd2 −6.2.',
      diger: [
        { move: '40...Qb1+', text: '41.Kh2 Qe4 42.Qf2 ile Beyaz filini korur (−0.8).' },
      ],
    },
  },
  qa: [
    { q: 'Bu oyun neden turnuvanın kaderini belirledi?', a: 'ChessBase’teki Havanur yazısına göre Tal 17. tura yarım puan önde girdi; chess24’e göre oyundan sonra Keres bir buçuk puan geride kaldı. Keres turnuvada Tal’ı üç kez yendi ama bu tek yenilgi farkı açtı; Tal 20/28 ile birinci, Keres 18,5 ile ikinci oldu. Tal da bu oyunu turnuvanın en önemli oyunu olarak gösterdi.' },
    { q: 'Siyah neden 6...dxc6 ile aldı, 6...bxc6 değil?', a: '6...bxc6 merkeze doğru alır ve ...d5 için piyonu korur, ama c8 fili geç gelişir. 6...dxc6 ile d-hattı açılır, fil serbest kalır ve 7...e5 ile kara karelere dayalı sağlam bir yapı kurulur. Motor iki hamleyi de hemen hemen eşit görür (+0.6); Tal’ın tercihi, oyunun d-hattında kazanılmasıyla haklı çıktı.' },
    { q: 'Keres neden atını Nd2-c4-e3-f5-h6 yoluyla götürdü?', a: 'Siyahın ...e5 hamlesi f5 karesini zayıflattı; Beyaz atı için en iyi hedef burasıydı. 9.a4 ile ...b5 engellendiği için at c4’te kovalanmadı. f5’ten at g7 ve h6’ya bakar ve 15...g6’dan sonra 16.Nh6+ ile Siyah şahının dibine yerleşti. Ancak motor 12.Qg3 gibi daha doğrudan hamleleri (+0.7) biraz daha güçlü buluyordu.' },
    { q: '19.Bg5 neden hata sayılıyor?', a: 'Fil c1’de d4 karesini Be3 üzerinden kontrol edebiliyordu; g5’e gidince d4 boş kaldı ve 19...Qd4! ile Siyah vezir oraya yerleşti, b2, e4 ve f2’yi aynı anda hedef aldı. Havanur bu hamleyi “ölümcül hata” olarak işaretler. Doğrusu 19.g4 (Motor: +0.3) ya da 19.c3 (−0.2) idi; 19.Bg5 −0.5 ile −0.8 arası.' },
    { q: 'Siyah neden 21...Qxc2 oynamadı?', a: '21...Qxc2? 22.Rd8! ile Beyaz arka yataya girer ve Rg8+ ile Qxf7 mat tehditleri başlar; Siyah 22...Qxf2+ 23.Qxf2 Bxf2+ 24.Kxf2 ile vezirleri değişmek zorunda kalır ve kalesi yedinci yatayda olan Beyaz üstün olur (Motor: +2.2). 21...Bd4! önce hattı kapattı; c2 piyonu bir hamle sonra yine de düştü.' },
    { q: 'Keres neden 23.Rxd4 ile kalesini verdi?', a: 'İki piyon eksik ve pasif kalırsa Beyaz yavaş yavaş kaybedecekti (23.a5 −1.6, 23.Kh2 −2.1). 23.Rxd4! exd4 24.e5 ile f6 atı sökülür; atı kurtarmaya çalışmak Qxf7+ ile mat yer. Motor bu fedayı tek doğru yol sayar ve dengeyi yeniden kurar (0.0).' },
    { q: 'Tal kale fedasına karşı nasıl savundu?', a: 'Önce 24...Kf8! ile şahı exf6 ve Bxf6 şahlarından önceden çekti; atı kurtarmak 24...Nd5 25.Qxf7+ Kh8 26.Qf8# gibi matlara gidiyordu. Sonra 25...Qc3! ile vezir değişimi teklif ederek Qg3/Qf4-b8+ saldırısını kesti; 25...d3? 26.Qg3! kaybederdi. Ardından ...Qe1+ ve ...Qxf2 ile tempo kazanarak f2’yi de aldı.' },
    { q: 'Beyaz nerede beraberliği kaçırdı?', a: 'Motor 25.Bxf6’yı (−0.3 ile −0.8) oyun hamlesi 25.exf6’dan (−1.2 ile −1.6) daha iyi görür; 25...Qc1+ 26.Kh2 Qxh6 27.Bg5 Qg7 28.Bf6 Rxf6 29.exf6 sonrası vezir son oyunu beraberliğe yakındır. Havanur, Clarke’a dayanarak 25.Bxf6’ya “?” koyar; motor bu konuda kaynakla aynı fikirde değil. Daha sonra 37.Qc4 ve 39.Qg4 direnişi uzatırdı, ama o noktada Siyah zaten kazanıyordu.' },
    { q: 'Kale ve üç piyona karşı iki hafif taş neden kaybetti?', a: 'Siyahın piyonları geçer piyonlardı ve vezir onları destekliyordu; Beyazın h6 atı ise kenarda ve saldırı tükenince işlevsizdi. Beyaz vezir d-piyonunu bloke etmeye çalışırken Siyah vezir şahlarla tempo kazandı (...Qe5+, ...Qc5+) ve 38...Qc2 ile d1’i ikinci kez hedef aldı. 39...d2! ile piyon bir taşa değişildi.' },
  ],
  sources: [
    { title: 'ChessBase: Mikhail Tal – Triumph and Tragedy (Part II), N. Havanur', url: 'https://en.chessbase.com/post/mikhail-tal-triumph-and-tragedy-part-ii' },
    { title: 'chess24: Paul Keres VI – The eternal second', url: 'https://chess24.com/en/read/news/paul-keres-vi-the-eternal-second' },
    { title: 'ChessBase: The Candidates Tournaments 1959 and 1962', url: 'https://en.chessbase.com/post/the-candidates-tournaments-1959-and-1962' },
    { title: 'chess.com blog: B43 Sicilian, Kan Variation', url: 'https://www.chess.com/blog/kleelof/b43-sicilian-kan-variation' },
  ],
  exercises: [
    { id: 'kta-1', kind: 'tekrar', plan: false, title: 'd-hattını kapatmak',
      source: 'Keres – Tal, Adaylar turnuvası 1959 (21. hamle)',
      fen: '8/1p3pkp/p1p1rnpN/2b1p1B1/P3P2P/5Q2/1qP2PP1/3R2K1 b - - 1 21',
      prompt: 'Siyah b2 piyonunu aldı. Beyaz kalesini d1’e getirdi ve Rd8 ile arka yataya girmek istiyor. Siyahın en iyi hamlesi hangisi?',
      hint: 'c5 filiyle d-hattını kapatın; fil merkezde de güçlü olacak.',
      line: ['Bd4'],
      explanation: '**21...Bd4!** Fil d-hattını kapatır ve merkeze yerleşir. 21...Qxc2? 22.Rd8 ve 21...Bd6? 22.g4 Beyaza güçlü saldırı verir. Motor: Bd4 −0.2, 21...Bd6 +2.3, 21...Qxc2 +2.6.',
      link: 'Kaleler değişince Tal’ın vezir ve fili merkezde kara kareleri tuttu.' },
    { id: 'kta-2', kind: 'tekrar', plan: false, title: 'Geçer piyonun son adımı',
      source: 'Keres – Tal, Adaylar turnuvası 1959 (39. hamle)',
      fen: '5k2/5p1p/p3rPpN/6B1/1p5P/3p1Q2/2q3P1/7K b - - 5 39',
      prompt: 'Siyahın d3’te geçer bir piyonu var ve vezir c2’de onu destekliyor. Beyaz 39.Qf3 ile vezirini d1’den çekti. Oyunu bitirin.',
      hint: 'Piyon d1 karesine bir adım uzakta.',
      line: ['d2', 'Bxd2', 'Qxd2'],
      explanation: '**39...d2! 40.Bxd2 Qxd2** Piyon vezir olmakla tehdit eder; Beyaz fili verir ve Siyah bir taş fazlası ile kalır. Motor: d2 −6.7, 39...Qc8 −3.0; 40...Qxd2 −6.6, 40...Qb1+ −0.7.',
      link: 'Tal’ın b2 ve c2 piyonlarını toplayıp kazandığı d-piyonu oyunu bitirdi.' },
    { id: 'kta-3', kind: 'transfer', plan: false, title: 'd2: piyon ve at çatalı',
      source: 'Smislov – Kotov, Çigorin Anma turnuvası, Moskova 1947 (40. hamle)',
      fen: '8/5pb1/2nBk3/p1Prp1P1/1p5P/1P1pR3/P4N2/5K2 b - - 2 40',
      prompt: 'Siyahın d3’te geçer bir piyonu var. Beyazın fili d6’da, kalesi e3’te, şahı f1’de. Siyah ne oynamalı?',
      hint: 'Piyon vezir olursa ve at alırsa, c6 atı hangi karelere sıçrar?',
      line: ['d2'],
      explanation: '**40...d2!** Piyon d1’de vezir olmakla tehdit eder. 41.Ke2 d1=Q+ 42.Nxd1 Nd4+ 43.Kf2 Nf5 sonrası at d6 filine ve e3 kalesine saldırır. Motor: d2 −1.4, sonraki en iyi 40...Rd4 +0.3.',
      link: 'Tal’ın 39...d2 hamlesi gibi, ikinci yataya gelen d-piyonu rakibi taş vermeye zorlar.' },
    { id: 'kta-4', kind: 'transfer', plan: false, title: 'Vezir c2 piyonunu alıyor',
      source: 'Sibarevic – Kasparov, Banja Luka 1979 (31. hamle)',
      fen: '2r3k1/5p1p/6p1/2b1Qp2/4b3/8/2P1B1PP/Rq4BK b - - 3 31',
      prompt: 'Siyah vezir b1’de a1 kalesinin saldırısı altında. Vezir nereye gitmeli?',
      hint: 'Vezir kaçarken bir piyon alabilir ve korumasız bir taşa saldırabilir.',
      line: ['Qxc2', 'Bxc5', 'Qxe2'],
      explanation: '**31...Qxc2! 32.Bxc5 Qxe2** Vezir c2 piyonunu alırken e2 filine saldırır; Siyah bir taş kazanır. Motor: Qxc2 −4.0, sonraki en iyi 31...Qb4 −2.6; 32...Qxe2 −6.0.',
      link: 'Tal’ın veziri de b2 ve c2 piyonlarını toplarken Beyazın taşlarına baskı yaptı.' },
  ],
};
