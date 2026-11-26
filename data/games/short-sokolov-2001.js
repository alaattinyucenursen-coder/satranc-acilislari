// Nigel Short – Andrei Sokolov, Avrupa Bireysel Şampiyonası, Ohri 2001 (5. tur). Kaynak: PgnMentor (Short.pgn).
export default {
  id: 'short-sokolov-2001',
  theme: 'Uzun çapraz, kalite fedası ve zayıflamış beyaz şah',
  white: 'Nigel Short', black: 'Andrei Sokolov',
  whiteShort: 'Short', blackShort: 'Sokolov',
  event: 'Avrupa Bireysel Şampiyonası, 5. tur', site: 'Ohri', year: 2001, eco: 'B24',
  variation: 'Kapalı Sicilya, 2.Nc3 e6 3.g3 d5 4.d3 Nf6 5.Bg2', result: '0-1',
  pgn: `1. e4 c5 2. Nc3 e6 3. g3 d5 4. d3 Nf6 5. Bg2 Be7 6. f4 Nc6 7. Bd2 Rb8 8. Nf3 b5 9. Ne5 Bb7 10. Nxb5 dxe4 11. O-O O-O 12. a4 a6 13. Nc3 Ba8 14. Nxc6 Bxc6 15. Qc1 Rb4 16. Re1 Rd4 17. Be3 exd3 18. Bxd4 Bxg2 19. Be3 Ba8 20. cxd3 Qxd3 21. Qd1 Qf5 22. Qe2 Ng4 23. Rad1 Bf6 24. Bf2 Nxf2 25. Qxf2 h5 26. h4 Bd4 27. Rxd4 cxd4 28. Qxd4 Qh3 29. Kf2 Qg2+ 30. Ke3 Qxg3+ 31. Kd2 Qxh4 32. Qe5 Rd8+ 33. Kc2 Qf2+ 34. Re2 Qd4 35. Qxh5 Qd3+ 36. Kb3 Bf3 0-1`,

  summary: 'Oyun, 2001 Ohri Avrupa Bireysel Şampiyonası’nın 5. turunda oynandı ve 36 hamlede **Siyahın (Andrei Sokolov) galibiyetiyle** bitti. Turnuva tablosunda Short 2676, Sokolov 2568 Elo ile görünüyor; yani kazanan, kâğıt üzerinde zayıf olan taraftı. Short kapalı Sicilya’nın g3–Bg2–d3–f4 kuruluşunu seçti ve 9.Ne5 ile 10.Nxb5 sayesinde bir piyon kazandı. Sokolov bu piyonu geri almaya uğraşmadı; **10...dxe4!** ile merkezi açtı, d-hattını ve a8–h1 uzun çaprazını kendi taşlarına verdi. 16.Re1? (16.Nxe4 ile eşitlik vardı) sonrasında kalesini d4’e getirdi ve **17...exd3!** ile o kaleyi bıraktı: d3 piyonu d2’ye yürümekle tehdit ederken c6 fili g2’ye saldırıyordu. **18...Bxg2** ile Beyazın şah filini aldı ve kalite eksiğine karşılık bir piyon, beyaz karelerde kalıcı üstünlük ve yalnız kalmış bir beyaz şah elde etti. Siyah sonra filini a8’de uzun çaprazda tuttu, ...Ng4xf2 ile Beyazın kara kareli filini de değişti ve ...h5 ile g3’e yüklendi. **26.h4?** g3 piyonunu desteksiz bırakınca **26...Bd4!** f2 vezirini g1 şahına bağladı; 27.Rxd4 cxd4 28.Qxd4 sonrası malzeme eşitlendi ama **28...Qh3!** ile vezir g3 ve h4 piyonlarını topladı, beyaz şahı c2–b3’e kadar sürdü. 35.Qxh5? üzerine 35...Qd3+ ve 36...Bf3 ile e2 kalesi kurtarılamaz hâle geldi ve Short terk etti.',
  intro: 'Bu oyun modülün ana sırası 4.Bg2 ile değil, **4.d3 Nf6 5.Bg2** ile oynandı; fil bir hamle sonra g2’ye geldiği için 5. hamleden sonra aynı yapı oluşur: Beyazın g2 fili ve d3–e4 piyonları, Siyahın e6–d5 merkezi. 2...e6 ile Siyah, Fransız Savunması’na benzer bir piyon merkezini (...d5) kurmaya hazırlanır; Beyaz g3 oynadığı için e4 piyonu artık f3’teki bir atla değil, d3 piyonu ve g2 filiyle korunacaktır. Beyazın elinde iki ana fikir vardır: ya exd5 ile merkezi açıp gelişme avantajına oynamak ya da d3 ile e4’ü tutup kapalı Sicilya’nın klasik şah kanadı planına (f4, Nf3, O-O, bazen e5 ve g4–f5) girmek. Short ikinciyi seçti. Kapalı Sicilya’da Siyahın standart karşı oyunu **...Rb8, ...b5–b4** ile vezir kanadında yer kazanmaktır; Sokolov bunu yaptı ama ...d5 piyonu sayesinde ek bir silahı vardı: Beyaz f4 oynayınca e4 yalnızca d3 piyonuyla korunuyordu ve **...dxe4** her an d-hattını ve b7 filinin uzun çaprazını açabiliyordu. Oyunun tamamı bu tek fikrin üzerine kuruludur: uzun çapraz açılır, g2 fili değişir ve f4–g3 piyonlarıyla çıplak kalan beyaz şah beyaz karelerde savunmasız düşer.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'g3–Bg2 ve d3 ile e4’ü desteklemek, sonra **6.f4** ile şah kanadında yer kazanmak; ileride e5 ile f6 atını kovmak ya da f5 kırılması hazırlamak. Bu, Smislov ve Spasski’nin yaygınlaştırdığı kapalı Sicilya kuruluşunun ...e6–d5 karşısındaki biçimidir.',
      '7.Bd2 ve 8.Nf3 ile gelişip **9.Ne5** ile merkeze bir at oturtmak: at c6’ya baskı yapar, g2 filinin çaprazını açar ve f4 piyonunun desteğiyle güçlü durur.',
      '**10.Nxb5** ile Siyahın ...b5 hamlesini piyon alarak cezalandırmaya çalışmak. Ancak bu hamle, b5 atını oyundan uzaklaştırdı ve ...dxe4 ile d-hattının açılmasına izin verdi (motor 10.exd5 ile yaklaşık eşitliği tercih ediyor).',
      'Doğru savunma fikri: Siyahın e4 piyonunu **16.Nxe4** ile değişip uzun çaprazı kapatmak ve g2 filini korumak. Short bunu kaçırdı; bir kez 17...exd3 ve 18...Bxg2 gelince oyun Siyahın planına göre akmaya başladı.',
      'Kalite kazandıktan sonra kaleleri d-hattında aktifleştirmek (23.Rad1, Rd6/Rd7 fikri), kara kareli filini ve f4–g3 piyonlarını koruyarak şahın etrafını kapalı tutmak. Kale artı oyunsonu yolunda Beyazın tek umudu buydu.',
      'Hata: **26.h4?** ile g3 piyonunu tamamen desteksiz bırakmak. Bu hamleden sonra ...Bd4 bağı ve ...Qh3–g2–g3 vezir yürüyüşü bir anda kazandı (motor −2.1’den −4.5’e).',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...Nf6, ...Be7, ...Nc6 ile sağlam gelişmek; ...d5 piyonuyla e4’e baskı yapıp Beyazı sürekli “e4’ü nasıl tutacağım” sorusuyla meşgul etmek.',
      '**...Rb8 ve ...b5** ile kapalı Sicilya’nın tipik vezir kanadı karşı oyununu başlatmak; ...b4 ile c3 atını kovup e4’ün bir savunucusunu daha uzaklaştırmak.',
      'Piyon verip **...dxe4** ile d-hattını ve a8–h1 uzun çaprazını açmak; fili b7’den a8’e çekerek Q+B “batarya” fikriyle (…Qa8 gibi) g2’ye yüklenmek.',
      'Kaleyi dördüncü yatayda (…Rb4–d4) aktifleştirip d3 piyonunu hedef almak; **17...exd3!** ile kale karşılığında g2 filini almak. Beyaz kareli fili gitmiş, f4 ve g3 oynanmış bir şah için beyaz kareler kalıcı zayıflıktır.',
      'Kaleyi bırakmanın karşılığını somutlaştırmak: d3 piyonunu da alarak piyon sayısını eşitlemek (20...Qxd3), sonra ...Ng4xf2 ile Beyazın en iyi savunma taşı olan kara kareli fili değişmek.',
      '...h5–h4 ile g3’e yüklenmek ve **...Bd4 + ...Qh3** ile şahın etrafındaki g3 ve h4 piyonlarını toplamak; sonra beyaz şahı merkeze ve vezir kanadına sürerek vezir, kale ve fille avlamak.',
    ] },
  },
  critical: [
    { move: '10b', title: '10...dxe4!: piyon değil, hatlar', text: 'Beyaz 10.Nxb5 ile bir piyon aldı ve a7’yi tehdit ediyor gibi görünüyor. Sokolov b5’i geri almaya ya da a7’yi korumaya uğraşmadı; d5 piyonuyla e4’ü aldı. Bununla d-hattı açıldı, b7 fili artık c6 atının arkasından g2’ye bakıyor ve 11.dxe4? Nxe5 12.fxe5 Nxe4 ile d2 filine baskı gelir (Motor: −2.1). Motor 10...dxe4’ü en iyi hamle olarak görüyor (−0.6); 10...O-O 11.exd5 sonrası Siyahın bu dinamizmi kaybolurdu (−0.2).' },
    { move: '15b', title: '15...Rb4: kale dördüncü yataya', text: 'Motor burada 15...c4! 16.dxe4 Qb6+ 17.Be3 Qb7’yi açık ara en iyi buluyor (−0.9); 15...Rb4 tek başına avantajın büyük kısmını bırakıyor (−0.1). Çünkü 16.Nxe4! ile Beyaz e4’ü değişip uzun çaprazı kapatabilirdi. Yine de kalenin b4’ten d4’e geçmesi, oyunun geri kalanındaki ...exd3 fikrinin ön hazırlığıdır.' },
    { move: '16w', title: '16.Re1? eşitliği kaçırmak', text: 'Motor 16.Nxe4 Nxe4 17.dxe4 Rxe4 18.Rf2 ile tam eşitlik veriyor (0.00): e4 piyonu değişince Siyahın c6 filinin önünde Beyazın g2 fili durur ve uzun çaprazda karşılıklı denge kurulur. Maç hamlesi e4’ü yerinde bıraktı; Siyah 16...Rd4 ile d3’e yüklendi ve motor −1.1’e geçti. Bu, oyunun ilk gerçek dönüm noktasıdır.' },
    { move: '17b', title: '17...exd3!: kale bırakılıyor', text: 'Be3 kaleye saldırdı; Siyah kaleyi kurtarmadı. d3 piyonu d2’ye yürüyüp Beyazı darmadağın etmekle tehdit ediyor, c6 fili de e4 piyonu kalkınca g2’ye saldırıyor. 18.Bxd4 Bxg2! sonrasında Siyah kalite eksik ama bir piyon artı, g2 filini almış ve beyaz karelerde kalıcı baskı kurmuş durumda (Motor: −2.0). Daha temkinli 17...Rb4 (−0.5) ya da 17...Rd7 (−0.2) bu fırsatı kaçırırdı. Beyazın en iyi savunması 18.Bxc6 d2 19.Bxd2 Rxd2 idi (−1.3).' },
    { move: '22b', title: '22...Ng4: kara kareli filin değişimi', text: 'Motor 22...h5! 23.h4 Rb8 24.Rad1 Qh3’ü daha güçlü buluyor (−3.3): h-piyonu g3’e yürüyerek doğrudan şaha saldırır. Sokolov at ile e3 filini değişmeyi seçti (−2.0); bu daha yavaş ama mantıklı bir yol, çünkü Beyazın kara kareli fili d4 karesini ve g1–a7 çaprazını savunan tek taştı. Değişimden sonra Bf6–d4 hamlesi mümkün oldu.' },
    { move: '26w', title: '26.h4? g3 desteksiz kalıyor', text: 'Motor 26.Rd6 (−2.1), 26.Qe3 (−2.1) ya da 26.Rd7 (−2.2) ile kale aktifliğini öneriyor; Beyaz sıkıntıda ama direniyor. Short ise ...h4’ü engellemek için piyonunu h4’e sürdü. Sonuç: g3 piyonunu hiçbir piyon korumuyor, g3 ve h4 de beyaz karelerin içinde yalnız. Motor −4.5’e atlıyor; partinin kaybettiren hatası budur.' },
    { move: '26b', title: '26...Bd4!: veziri şaha bağlamak', text: 'Fil d4’te f2 vezirini g1 şahına bağlar. Vezir kaçamaz, 27.Ne4 Bxf2+ ya da 27.Qxd4 cxd4 vezir kaybettirir (−6.5/−6.7); Beyaz kaleyle almak zorunda. 27.Rxd4 cxd4 28.Qxd4 sonrası malzeme eşitlenir, ama **28...Qh3!** ile vezir korumasız g3 piyonuna saldırır ve Qg2+, Qxg3+, Qxh4 ile iki piyon toplanır. Motor: 26...Bd4 −4.6; 26...Qh3 daha zayıf (−3.7).' },
    { move: '36b', title: '36...Bf3: son darbe', text: 'Fil e2 kalesine saldırır ve aynı zamanda h5 vezirine çapraz açar. 37.Qxf3 Qxf3 vezir kaybettirir (−6.0), 37.Re3 Rb8+ de vezir kaybettirir (−7.5); en iyi 37.Qh2 Bxe2 38.Qxe2 Rb8+ bile Siyaha vezir ve ezici bir saldırı bırakır (−5.3). Motor 36...Bd5+ 37.Ka3 Qc4’ü de en az bu kadar güçlü görüyor; iki yol da kazanıyor. Short terk etti.' },
  ],
  lessons: [
    '3.g3 d5 yapısında 4.d3 ve 5.Bg2 sırası, 4.Bg2 ile aynı yapıya çıkar; Siyahın planları (...Nf6, ...Be7, ...Nc6, ...Rb8, ...b5) değişmez. Beyaz exd5 oynamadıkça Siyah e4’e ne zaman ...dxe4 ile vuracağına kendisi karar verir.',
    'Beyaz f4 oynadığında e4 yalnızca d3 ile korunur; **...dxe4** d-hattını ve a8–h1 uzun çaprazını açar. Bu yüzden kapalı Sicilya’da f4 planı, ...d5 kurulmuş bir merkeze karşı dikkat ister.',
    'Bir piyon kapmak (10.Nxb5) için atı kenara göndermek, rakibe merkezde tempo ve hat verir. 10.exd5 ile merkezi sadeleştirmek daha sağlamdı.',
    'Uzun çaprazdaki rakip fil tehlikeli olduğunda, onu engelleyen piyonu değiştirmek (16.Nxe4) çoğu zaman en iyi savunmadır; e4 piyonunu yerinde bırakmak Siyaha ...exd3 imkânı verdi.',
    'g2 filinin değişmesi, g3 ve f4 piyonlu bir şahın çevresinde beyaz kareleri kalıcı olarak zayıflatır. Kalite fedası, karşılığında bir piyon ve rakip şaha karşı uzun süreli inisiyatif veriyorsa oynanabilir.',
    'Şahın önündeki piyonları gereksiz yere oynamak (26.h4?) korunmasız hedefler yaratır; burada g3 piyonu bir anda savunucusuz kaldı.',
    'Bağ fikri: vezir ile şah aynı çapraz üzerindeyse (f2–g1, e3–g1) ...Bd4 gibi bir fil hamlesi malzeme kazanır ya da en azından savunucuları değiştirip şahı açar.',
  ],
  qa: [
    { q: 'Siyah 10.Nxb5’ten sonra neden piyonu geri almaya çalışmadı?', a: 'Çünkü 10...dxe4 piyon geri almaktan daha değerliydi: d-hattını açtı, b7 filini c6 atının arkasından g2’ye yöneltti ve Beyazın b5 atını oyundan uzak bıraktı. 11.dxe4? ile geri almak 11...Nxe5 12.fxe5 Nxe4 sonrası d2 filini zor durumda bırakırdı (Motor: −2.1). Motor 10...dxe4’ü −0.6 ile en iyi buluyor; 10...O-O 11.exd5 ise yalnızca −0.2.' },
    { q: 'Beyaz 10.Nxb5 yerine ne oynamalıydı?', a: 'Motor 10.exd5 Nxd5 11.O-O Nxe5 12.fxe5 Nxc3 13.bxc3 ile yaklaşık eşitlik veriyor (−0.2). Bu yolda merkez sadeleşir ve uzun çapraz açılsa bile Beyazın g2 fili yerinde kalır. 10.Nxc6 Bxc6 11.e5 de oynanabilirdi (−0.3). Short’un seçimi bir piyon kazandı ama Siyaha hatları ve gelişme önceliğini verdi.' },
    { q: 'Siyah neden 13...Ba8 oynadı, 13...c4 değil?', a: 'Motor 13...c4 14.Be3 cxd3 15.cxd3 h5’i biraz daha iyi buluyor (−0.9 / −0.7). Ama 13...Ba8 da derin bir fikir taşıyor: 14.Nxc6 sonrası fil c6’dan geri alınca uzun çaprazda kalır ve ileride ...Qa8 gibi vezir–fil bataryası mümkün olur. Ayrıca fil b7’den çekilince b-hattındaki kale b4’e serbestçe gelebilir. Fark küçük, plan aynı: g2’ye karşı uzun çapraz.' },
    { q: '17...exd3 neden kale bırakmaya değdi?', a: 'Çünkü karşılığında üç şey aldı: g2 filini (18...Bxg2), bir piyonu ve d3’te Beyazı bağlayan güçlü bir piyonu (sonra 20...Qxd3 ile ikinciyi de aldı). 19.Kxg2? Qa8+ 20.Kg1 cxd4 ile Siyah fili de geri kazanırdı (Motor: −3.3). Beyazın en iyi savunması 18.Bxc6 d2 19.Bxd2 Rxd2 idi, ama o da Siyaha kale aktivitesi ve d-hattı veriyordu (−1.3).' },
    { q: 'Beyazın avantajı nerede kayboldu ve Siyahın üstünlüğü tam olarak nereden geldi?', a: 'Oyun 16. hamleye kadar dengeliydi; 16.Nxe4 ile e4 piyonunu değişseydi motor 0.00 gösteriyordu. 16.Re1? ve 17.Be3 sonrasında Siyah ...exd3 ve ...Bxg2 ile g2 filini aldı. Bundan sonra Siyahın üstünlüğü malzemeden değil yapıdan geliyordu: Beyazın beyaz kareli fili yoktu, f4–g3 piyonları şahın önünde beyaz kareleri bırakmıştı ve Siyahın a8 fili ile veziri bu kareleri kontrol ediyordu.' },
    { q: '26.h4 neden ağır bir hataydı, Beyaz ne yapmalıydı?', a: 'h4 ile Beyaz ...h4 ilerleyişini durdurmak istedi ama g3 piyonunun son destekçisini (h2 piyonunu) uzaklaştırdı. Artık g3’ü yalnızca vezir ve şah koruyabiliyordu; 26...Bd4! veziri bağlayınca bu koruma çöktü ve 28...Qh3 ile g3 düştü (Motor: −4.5). 26.Rd6 ya da 26.Qe3 ile kaleyi aktif tutmak gerekiyordu (−2.1); Beyaz yine kötüydü ama direnebilirdi.' },
    { q: 'Siyah neden 22...h5 yerine 22...Ng4 oynadı?', a: 'Motor 22...h5’i daha güçlü buluyor (−3.3 / −2.0): h-piyonu h4’e yürüyüp g3’ü doğrudan zorlar. Sokolov’un 22...Ng4’ü ise önce Beyazın kara kareli filini değişmeyi amaçlıyordu; bu fil d4 karesini ve g1–a7 çaprazını savunuyordu. Değişimden sonra (24...Nxf2) Siyahın kara kareli fili d4’e rakipsiz gelebildi ve 26...Bd4 bağı mümkün oldu. Yani biraz daha yavaş ama sonunda partiyi kazandıran fikir.' },
    { q: 'Beyaz nerede kurtulabilirdi?', a: 'En net an 16. hamleydi: 16.Nxe4 Nxe4 17.dxe4 Rxe4 18.Rf2 ile eşitlik (0.00). 18. hamlede 18.Bxc6 d2 19.Bxd2 Rxd2 (−1.3) maçtaki 18.Bxd4’ten (−2.2) daha dirençliydi. 21.Qd2 (−1.9) ve 24.Qd3 (−1.4) de maç hamlelerinden daha iyiydi. Son şans 26. hamlede h4 yerine kale aktifliğiydi; ondan sonra pozisyon kazanılmış bir saldırıya dönüştü.' },
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkezde yer alır, vezir ve şah filinin yollarını açar.',
      amac: 'Merkezi ele geçirmek ve hızlı gelişmek; Short kariyeri boyunca ağırlıklı olarak 1.e4 oyuncusudur.',
      neden: 'En doğrudan açılış hamlesi; d5 ve f5 karelerini kontrol eder. Motor 1.e4, 1.d4 ve 1.Nf3’ü neredeyse eşit görüyor (+0.3 civarı).',
      diger: [
        { move: '1.d4', text: 'Kapalı oyunlara götürür; Motor: +0.25. Bu modülün konusu dışında kalır.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç; Motor: +0.22. Sicilya’ya karşı geçiş imkânları sunar.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesine kanattan baskı yapar.',
      amac: 'Asimetrik bir yapıyla kazanma şansı aramak; Beyaz d4 oynarsa ...cxd4 ile merkez piyonu karşılığında kanat piyonu vermek.',
      neden: 'Sokolov gibi aktif bir oyuncu için Sicilya, 1...e5’e göre daha dengesiz ve kazanmaya uygun pozisyonlar verir. Motor: +0.32, 1...e5’le (+0.24) neredeyse aynı.',
      diger: [
        { move: '1...e5', text: 'Simetrik açık oyunlar; Motor: +0.24. Daha az dengesizlik.' },
        { move: '1...e6', text: 'Fransız Savunması; Motor: +0.35. İlginç biçimde Sokolov oyunda Fransız’a benzer bir merkez kuracak.' },
      ],
    },
    '2w': {
      text: '2.Nc3: Beyaz açık Sicilya’ya (2.Nf3 ve 3.d4) girmez, kapalı Sicilya yoluna sapar.',
      amac: 'd4’ü hemen oynamadan d5 karesini kontrol etmek ve g3–Bg2–d3–f4 kuruluşuna hazırlanmak.',
      neden: 'Kapalı Sicilya, Siyahın büyük teorik hazırlığını (Najdorf, Sveşnikov vb.) atlatır ve sakin bir manevra oyununa götürür. Motor 2.Nc3’ü (+0.35) 2.Nf3 (+0.38) kadar iyi görüyor.',
      diger: [
        { move: '2.Nf3', text: 'Açık Sicilya’ya hazırlık; Motor: +0.38. En çok oynanan yol.' },
        { move: '2.c3', text: 'Alapin; d4 ile tam merkez kurmayı hedefler. Başka bir anti-Sicilya sistemi.' },
      ],
    },
    '2b': {
      text: '2...e6 ile Siyah ...d5 hamlesini hazırlar; Fransız Savunması’na benzer bir merkez kurmak ister.',
      amac: 'Beyaz d4’ü geciktirdiği için merkeze ...d5 ile kendisi el koymak; d5 karesini e6 piyonuyla desteklemek.',
      neden: 'Kapalı Sicilya’da en yaygın cevap 2...Nc6’dır (Motor: +0.35), ama 2...e6 Beyazın g3–Bg2 planını doğrudan sorgular: fil g2’ye geldiğinde ...d5 ile uzun çaprazı kapatmak mümkündür. Motor: +0.46.',
      diger: [
        { move: '2...Nc6', text: 'Kapalı Sicilya’nın ana yolu; 3.g3 g6 4.Bg2 Bg7 5.d3 d6 ile klasik yapı. Motor: +0.35.' },
        { move: '2...d6', text: 'Esnek; ...Nf6 ve ...g6 ile Draqon tarzı kuruluş. Motor: +0.36.' },
      ],
    },
    '3w': {
      text: '3.g3: fil g2’ye gelip e4’ü ve uzun çaprazı destekleyecek.',
      amac: 'Kapalı Sicilya’nın standart fianketto kuruluşu; ...d5 gelirse e4’ü g2 filiyle tutmak.',
      neden: 'Short merkezde gerilimi korumak ve sakin bir manevra oyunu istiyor. Ancak ...e6’ya karşı g3, Siyahın hemen ...d5 oynamasına izin verir; motor 3.Nf3 ile açık Sicilya’ya dönmeyi daha iddialı buluyor (+0.44 / −0.1).',
      diger: [
        { move: '3.Nf3', text: 'Açık Sicilya’ya (…e6 kolları, 3...a6 4.g3 gibi) geçiş; Motor: +0.44.' },
        { move: '3.Nge2', text: '3...d5 4.exd5 exd5 5.d4 ile izole piyonlu yapılar; Motor: +0.41. Hansen’in Bukalemun (Chameleon) kitabında işlenen yol.' },
      ],
    },
    '3b': {
      text: '3...d5! Siyah merkezi hemen ele alır ve e4’e baskı yapar.',
      amac: 'g2 filinin uzun çaprazını d5 piyonuyla kapatmak ve Beyazı e4 için karar vermeye zorlamak (exd5, Bg2 ya da d3).',
      neden: 'Fil daha g2’ye gelmeden ...d5 oynamak en doğrusudur: 4.exd5 exd5 sonrası Siyah serbest gelişir, 4.Bg2 d4 ise c3 atını kovar. Motor 3...d5’i en iyi buluyor (0.00).',
      diger: [
        { move: '3...Nc6', text: 'Daha yavaş; Beyaz 4.Bg2 ile ...d5’i zorlaştırabilir. Motor: +0.07.' },
        { move: '3...Nf6', text: '4.e5 Nd5 5.Nxd5 exd5 ile Beyaz yer kazanır; Motor: +0.28.' },
      ],
    },
    '4w': {
      text: '4.d3 ile e4 desteklenir. Modülün ana sırasında 4.Bg2 oynanır; burada fil bir hamle sonra gelecek ve aynı yapı oluşacak.',
      amac: 'Merkezi kapalı tutmak ve f4 planına uygun bir d3–e4 zinciri kurmak.',
      neden: 'Short, exd5 ile simetrik ve sakin bir yapıya girmek istemedi; d3 ile gerilimi korudu. Bedeli: e4 artık yalnızca d3 ile korunuyor ve ...dxe4 her an hatları açabilir. Motor bütün seçenekleri yakın görüyor (−0.06).',
      diger: [
        { move: '4.exd5', text: '4...exd5 5.d4 ile açık merkez; Motor: 0.00. Beyaz gelişme avantajına oynar.' },
        { move: '4.Bg2', text: 'Modülün ana yolu; 4...d4 5.Nce2 Nc6 6.d3 ile Siyah yer kazanır. Motor: −0.02.' },
      ],
    },
    '4b': {
      text: '4...Nf6: at e4’e baskıyı artırır ve rok için gelişir.',
      amac: 'e4’e ikinci kez saldırmak; Beyazın exd5’i daha cazip hâle gelirse ...Nxd5 ile merkezde bir at almak.',
      neden: 'Doğal gelişme; 4...d4 ile c3 atını kovmak da (−0.07) mümkündü, ama Sokolov merkezi kapatmak yerine gerilimi korudu. Böylece ileride ...dxe4 seçeneği elinde kaldı. Motor: −0.05.',
      diger: [
        { move: '4...d4', text: '5.Nce2 ile Beyazın atı geri gider; Motor: −0.07. Merkez kapanır, uzun çapraz fikri kaybolur.' },
        { move: '4...Be7', text: 'Esnek; Motor: −0.07. Aynı yapıya çıkar.' },
      ],
    },
    '5w': {
      text: '5.Bg2: fil uzun çapraza gelir; artık 4.Bg2 dizilişindeki yapıyla aynı yapı tahtada.',
      amac: 'e4’ü ikinci kez korumak ve rok için hazırlanmak.',
      neden: '5.e5 Nfd7 de mümkündü ama Beyaz önce gelişmeyi tamamlamak istedi. Motor 5.Bg2’yi (−0.08) 5.exd5 (+0.02) ile neredeyse eşit görüyor.',
      diger: [
        { move: '5.exd5', text: '5...exd5 6.Bg5 Be7 7.Bg2 ile izole olmayan simetrik merkez; Motor: +0.02.' },
        { move: '5.a4', text: '...b5’i önceden engeller; Motor: −0.17.' },
      ],
    },
    '5b': {
      text: '5...Be7: fil e7’ye gelişir; Siyah sakin bir şekilde roka hazırlanır.',
      amac: 'Şahı güvene almak, e7 filiyle f6 atını ve g5 karesini korumak.',
      neden: 'Fransız tarzı yapıda filin doğal yeri e7’dir; g7’ye fianketto e6–d5 piyonlarıyla uyumsuz olurdu. 5...d4 (−0.03) ya da 5...Nc6 (0.00) da eşit seçeneklerdi.',
      diger: [
        { move: '5...d4', text: '6.Nce2 Nc6 7.f4 ile kapalı merkez; Motor: −0.03.' },
        { move: '5...Nc6', text: '6.exd5 exd5 7.Bg5 Be7 ile simetri; Motor: 0.00.' },
      ],
    },
    '6w': {
      text: '6.f4: Beyaz kapalı Sicilya’nın saldırı kuruluşunu seçer; e5 ile f6 atını kovalamak ve şah kanadında yer kazanmak ister.',
      amac: 'e5 ile f6 atını kovup Siyahın şah kanadını savunmasız bırakmak; gerekirse g4–f5 ile piyon fırtınası.',
      neden: 'Kapalı Sicilya’nın ruhu budur; ama ...d5 kurulmuş bir yapıda f4, e4’ü yalnız d3’e bırakır ve şahın etrafındaki beyaz kareleri zayıflatır. Motor 6.e5 Nfd7 7.f4 ile önce yer kazanmayı biraz daha iyi buluyor (+0.06 / −0.10).',
      diger: [
        { move: '6.e5', text: '6...Nfd7 7.f4 Nc6 ile Fransız tarzı kapalı yapı; Motor: +0.06. Beyaz e4 sorununu kökten çözer.' },
        { move: '6.exd5', text: '6...exd5 7.Bg5 ile sakin; Motor: 0.00.' },
      ],
    },
    '6b': {
      text: '6...Nc6: at c6’dan d4 ve e5 karelerine bakar.',
      amac: 'Gelişmeyi tamamlamak, d4’e baskı yapmak ve Beyazın e5’ine karşı d4/b4 karelerini hazırlamak.',
      neden: 'Motor 6...Nc6’yı en iyi buluyor (−0.25). 6...d4 7.Nb1 de mümkündü (−0.12), ama Siyah merkezi kapatmak yerine ...dxe4 seçeneğini sakladı.',
      diger: [
        { move: '6...d4', text: '7.Nb1 Nc6 8.Nf3 e5 ile merkez kapanır; Motor: −0.12.' },
        { move: '6...h5', text: 'Şah kanadında yer kapma fikri; Motor: −0.03.' },
      ],
    },
    '7w': {
      text: '7.Bd2: fil d2’ye gelişir; esnek ama oldukça pasif bir kare.',
      amac: 'c3 atını desteklemek, vezirle Q–B bağlantısı kurmak ve gerekirse ...d4 sonrası atın e2’ye çekilmesine izin vermek.',
      neden: 'Bd2, e3 karesini serbest bırakır ama filin c1–h6 çaprazından hızla çıkamaması bir dezavantaj. Motor 7.Nf3 dxe4 8.dxe4 Qxd1+ ile sadeleşmeyi daha iyi buluyor (−0.18 / −0.38).',
      diger: [
        { move: '7.Nf3', text: '7...dxe4 8.dxe4 Qxd1+ 9.Nxd1 ile eşit oyunsonu; Motor: −0.18.' },
        { move: '7.h3', text: 'g4 hazırlığı; Motor: −0.21.' },
      ],
    },
    '7b': {
      text: '7...Rb8 ile Siyah ...b5–b4 ilerleyişini hazırlar ve c3 atını kovalamak ister.',
      amac: 'Kapalı Sicilya’daki klasik vezir kanadı karşı oyunu: ...b5–b4 ile c3 atını kovup e4’ün bir savunucusunu daha uzaklaştırmak.',
      neden: 'Kale b-hattında b2’ye de bakar. Hemen 7...b5 8.e5 b4 9.exf6 bxc3 karmaşık olurdu (−0.19); Rb8 önce kaleyi güvenli kareye alır. 7...d4 (−0.26) biraz daha iyiydi.',
      diger: [
        { move: '7...d4', text: '8.Nce2 a5 9.e5 Nd5 ile yer kazanma; Motor: −0.26.' },
        { move: '7...O-O', text: 'Önce rok; 8.e5 Nd7 9.Nf3 Rb8. Motor: −0.17.' },
      ],
    },
    '8w': {
      text: '8.Nf3: at f3’e gelişir; e5 karesine bakar.',
      amac: 'Roku hazırlamak ve Ne5 ile merkeze bir at sokmak.',
      neden: '8.a4 (−0.13) ...b5’i engellerdi; Short gelişmeyi tercih etti ve ...b5’e Ne5 ile cevap vermeyi planladı. Motor: −0.23.',
      diger: [
        { move: '8.a4', text: '8...a6 9.Nf3 dxe4 10.dxe4 ile ...b5 frenlenir; Motor: −0.13.' },
        { move: '8.e5', text: '8...Ng8 ile at geri çekilir ama Beyazın gelişmesi geride; Motor: −0.38.' },
      ],
    },
    '8b': {
      text: '8...b5: vezir kanadı karşı oyunu başlar; ...b4 tehdit ediliyor.',
      amac: '...b4 ile c3 atını kovup e4’ü zayıflatmak ve ...dxe4’ü daha etkili hâle getirmek.',
      neden: 'b5 piyonu korumasız görünür (Nxb5), ama Siyah bunun karşılığında merkezde ...dxe4 ile hat açmayı planlıyor. Motor 8...dxe4 (−0.35) ile 8...b5’i (−0.32) eşdeğer görüyor.',
      diger: [
        { move: '8...dxe4', text: '9.dxe4 b5 10.O-O O-O ile önce merkezi açmak; Motor: −0.35.' },
        { move: '8...d4', text: '9.Ne2 b5 ile kapalı merkez; Motor: −0.15.' },
      ],
    },
    '9w': {
      text: '9.Ne5: at e5’e gelir ve c6 atına saldırır.',
      amac: 'At merkezde güçlü bir karakola yerleşir; Nxc6 ile Siyahın d4/e5 kontrolünü azaltmak ve g2 filinin çaprazını açmak.',
      neden: 'f4 piyonu e5’i destekler; at kovulamaz (…f6 Siyahın yapısını bozar). Aynı zamanda b5 piyonuna Nxb5 hazırlanır. Motor: −0.37, 9.e5 (−0.34) ile aynı.',
      diger: [
        { move: '9.e5', text: '9...Nd7 10.O-O O-O 11.Ne2 ile kapalı yapı; Motor: −0.34.' },
        { move: '9.exd5', text: '9...exd5 10.Ne5 Qd6 ile merkez açılır; Motor: −0.41.' },
      ],
    },
    '9b': {
      text: '9...Bb7: fil b7’ye gelir; c6 atını korur ve uzun çaprazda g2’ye bakar.',
      amac: 'Fil, ...dxe4 sonrası açılacak a8–h1 çaprazına önceden yerleşir.',
      neden: 'Oyunun bütün stratejisini belirleyen hamle: b5 piyonunu korumaktan çok uzun çaprazı hazırlar. 9...Nd4 (−0.05) ve 9...Na5 (+0.04) daha pasifti. Motor 9...Bb7’yi en iyi buluyor (−0.44).',
      diger: [
        { move: '9...Nd4', text: '10.exd5 Bb7 11.Nc6 ile Beyaz kurtulur; Motor: −0.05.' },
        { move: '9...Na5', text: 'b5’i korumak için atı kenara götürür; 10.exd5 exd5 11.O-O. Motor: +0.04.' },
      ],
    },
    '10w': {
      text: '10.Nxb5: Beyaz b5 piyonunu alır.',
      amac: 'Malzeme kazanmak ve a7 piyonuna baskı yapmak.',
      neden: 'Cazip ama yanlış: at b5’te kenara gider, e4 ise artık c3 atıyla korunmaz ve ...dxe4 serbestçe gelir. Motor 10.exd5 Nxd5 11.O-O Nxe5 12.fxe5 Nxc3 13.bxc3 ile eşitliğe yakın oyunu öneriyor (−0.2); maç hamlesi −0.9.',
      diger: [
        { move: '10.exd5', text: '10...Nxd5 11.O-O Nxe5 12.fxe5 Nxc3 13.bxc3 Bxg2 14.Kxg2; Motor: −0.2. Merkez sadeleşir, g2 filinin yerini şah alır ama tehlike yok.' },
        { move: '10.Nxc6', text: '10...Bxc6 11.e5 Nd7 12.Qf3 b4 ile kapalı yapı; Motor: −0.3.' },
      ],
    },
    '10b': {
      text: '10...dxe4! Siyah merkezde alır: d-hattı açılır ve b7 fili c6 atının arkasından g2’ye bakar. Piyon karşılığında aktif oyun.',
      amac: 'Merkezi açmak, d-hattını vezir ve kaleye vermek; b5’teki atın uzaklığından ve Beyazın şahının merkezde kalmasından yararlanmak.',
      neden: '11.dxe4? Nxe5 12.fxe5 Nxe4 ile d2 filine baskı gelir ve Siyah piyonu geri kazanır (−2.1). 10...O-O 11.exd5 Nxe5 12.fxe5 Bxd5 daha sakin ama zayıftır (−0.2). Motor 10...dxe4’ü en iyi buluyor (−0.6).',
      diger: [
        { move: '10...O-O', text: '11.exd5 Nxe5 12.fxe5 Bxd5 ile Beyaz kurtulur; Motor: −0.2.' },
        { move: '10...Qb6', text: 'b5 atına ve b2’ye bakar; 11.a4 O-O 12.Nxc6. Motor: −0.1.' },
      ],
    },
    '11w': {
      text: '11.O-O: Beyaz rok yapar.',
      amac: 'Şahı merkezden çıkarmak; d-hattı açılmışken şahın e1’de kalması tehlikeliydi.',
      neden: '11.dxe4? Nxe5 12.fxe5 Nxe4 kötüdür (−2.1); 11.Na3 Nxe5 12.fxe5 e3! 13.Bxb7 exd2+ karmaşıktır (−0.7). Rok en temiz çözüm. Motor: −0.6.',
      diger: [
        { move: '11.dxe4', text: '11...Nxe5 12.fxe5 Nxe4 ile d2 fili ve e5 piyonu askıda; Motor: −2.1.' },
        { move: '11.Na3', text: '11...Nxe5 12.fxe5 e3! 13.Bxb7 exd2+ 14.Kxd2 Rxb7; Motor: −0.7.' },
      ],
    },
    '11b': {
      text: '11...O-O: Siyah da rok yapar.',
      amac: 'Şahı güvene almak ve f8 kalesini oyuna hazırlamak.',
      neden: 'Merkez açılmışken şahı e8’de bırakmak gereksiz risktir. 11...h5!? (−0.8) şah kanadında agresif bir fikirdi ama rok daha sağlam. Motor: −0.7.',
      diger: [
        { move: '11...h5', text: 'h4 ile g3’e saldırı fikri; Motor: −0.8.' },
        { move: '11...Qb6', text: '12.a4 a6 13.Na3 exd3; Motor: −0.6.' },
      ],
    },
    '12w': {
      text: '12.a4: b5 atı desteklenir.',
      amac: '...a6 gelince atın b5’te kalabilmesini sağlamak ve vezir kanadında yer tutmak.',
      neden: 'At ...a6 ile kovulacağı için Beyaz onu desteklemek istedi; ama a4 b4 karesini zayıflatır (Siyahın kalesi oraya gelecek). Motor 12.Na3 Nd4’ü biraz daha iyi buluyor (−0.7 / −0.9).',
      diger: [
        { move: '12.Na3', text: '12...Nd4 13.dxe4 Bxe4 14.Bxe4 Nxe4; Motor: −0.7.' },
        { move: '12.Nc3', text: '12...Qd4+ 13.Kh1 c4 ile Siyah aktif; Motor: −0.85.' },
      ],
    },
    '12b': {
      text: '12...a6: at kovalanır.',
      amac: 'b5 atını geri çekilmeye zorlamak ve tempo kazanmak.',
      neden: 'At b5’te kalırsa a7 ve d6 karelerine baskı yapar; a6 onu c3’e ya da a3’e göndermeye zorlar. 12...c4 13.Be3 a6 de (−0.86) aynı değerdeydi. Motor: −0.8.',
      diger: [
        { move: '12...c4', text: '13.Be3 a6 14.Nc3 cxd3 ile merkez açılır; Motor: −0.86.' },
        { move: '12...h6', text: 'Gereksiz yavaş; 13.Bc3 a6 14.Na3. Motor: −0.4.' },
      ],
    },
    '13w': {
      text: '13.Nc3: at c3’e döner.',
      amac: 'e4 piyonuna baskı yapmak ve merkeze dönmek.',
      neden: 'At c3’ten e4’e bakar ve d5 karesini kontrol eder. 13.Na3 Nd4 14.c3 (−0.6) biraz daha iyiydi; 13.Nxc6? Bxc6 ise e5’teki güçlü atı erken verir (−1.0). Motor: −0.8.',
      diger: [
        { move: '13.Na3', text: '13...Nd4 14.c3 e3 15.Bxe3 Nf5; Motor: −0.6.' },
        { move: '13.Nxc6', text: '13...Bxc6 14.Na3 Qd4+ 15.Kh1; Motor: −1.0.' },
      ],
    },
    '13b': {
      text: '13...Ba8: fil a8’e çekilir; Nxc6 sonrası fil uzun çaprazda kalacak.',
      amac: 'Fili c6’dan geri alınabilecek bir kareye koymak ve b-hattını kalenin ...Rb4 için açmak; ileride Q+B bataryası (…Qa8 / ...Qd5) fikri.',
      neden: 'Fil b7’de b-hattındaki kaleyi engelliyordu. Motor 13...c4 14.Be3 cxd3 15.cxd3 h5’i biraz daha iyi buluyor (−0.9 / −0.7), ama Ba8 de aynı planın parçası.',
      diger: [
        { move: '13...c4', text: '14.Be3 cxd3 15.cxd3 h5 ile merkezi açmak; Motor: −0.9.' },
        { move: '13...Qd4+', text: '14.Kh1 c4 15.Nxc4 exd3; Motor: −0.9.' },
      ],
    },
    '14w': {
      text: '14.Nxc6: Beyaz c6 atını değişir.',
      amac: 'e4 ve d4’ü savunan Siyah atını ortadan kaldırmak; ...Nxe5 ile Beyazın yapısının bozulmasını önlemek.',
      neden: 'At e5’te uzun kalamazdı; ...Nxe5 fxe5 sonrası e5 piyonu zayıf olurdu. Motor 14.Nxc6’yı en iyi buluyor (−0.54); 14.Bc1? Nxe5 15.fxe5 Nd7 ise kötü (−0.8).',
      diger: [
        { move: '14.Rf2', text: '14...h5 15.Nxc6 Bxc6 16.Nxe4; Motor: −0.6.' },
        { move: '14.Bc1', text: '14...Nxe5 15.fxe5 Nd7 16.Bxe4; Motor: −0.8.' },
      ],
    },
    '14b': {
      text: '14...Bxc6: fil geri alır; tek hamle. Malzeme eşitlendi: Beyaz b5’i almıştı, Siyah e4’ü aldı (ama e4 piyonu hâlâ d3 ile değişebilir).',
      amac: 'Fil c6’dan a8–h1 çaprazında kalır ve g2’ye bakar.',
      neden: 'Zorunlu: 14...Qd7?? ya da 14...Qd6?? 15.Nxb8 kale kaybettirir (+5.0).',
    },
    '15w': {
      text: '15.Qc1: vezir c1’e gelir; b2’yi korur ve e1’i kaleye bırakır.',
      amac: 'Veziri d-hattından (Siyahın ...Qd4+ ve kale baskısından) uzaklaştırmak ve Bd2–e3 hamlesini hazırlamak.',
      neden: 'Beyaz d-hattının açılmasından çekindi. Motor 15.Bc1 c4 16.dxc4 Bc5+ 17.Kh1’i biraz daha iyi buluyor (−0.6 / −0.85); 15.dxe4 Qd4+ 16.Rf2 de benzer (−0.9).',
      diger: [
        { move: '15.Bc1', text: '15...c4 16.dxc4 Bc5+ 17.Kh1; Motor: −0.6.' },
        { move: '15.dxe4', text: '15...Qd4+ 16.Rf2 h5 17.h3; Motor: −0.9.' },
      ],
    },
    '15b': {
      text: '15...Rb4: kale b4’e gelir; dördüncü yatayda e4 ve d4 karelerine bakar.',
      amac: 'Kaleyi e4’ü korumak ve d4’e geçerek d3’e baskı yapmak için aktifleştirmek; 12.a4’ün zayıflattığı b4 karesini kullanmak.',
      neden: 'Yaratıcı ama doğru değil: 16.Nxe4! ile Beyaz eşitlerdi. Motor 15...c4! 16.dxe4 Qb6+ 17.Be3 Qb7’yi açık ara en iyi buluyor (−0.9); maç hamlesinden sonra −0.1.',
      diger: [
        { move: '15...c4', text: '16.dxe4 Qb6+ 17.Be3 Qb7 ile e4 piyonu ve g2 üzerine baskı; Motor: −0.9.' },
        { move: '15...Qd4+', text: '16.Be3 Qb4 17.dxe4 Nxe4; Motor: −0.8.' },
      ],
    },
    '16w': {
      text: '16.Re1? kale e1’e gelir ama e4 piyonu yerinde durur.',
      amac: 'e-hattında e4’e baskı yapmak ve kaleyi aktif bir hatta koymak.',
      neden: 'Hata: uzun çaprazı kapatan e4 piyonunu değişmek gerekiyordu. 16.Nxe4 Nxe4 17.dxe4 Rxe4 18.Rf2 ile motor tam eşitlik veriyor (0.00). Maç hamlesi Siyaha ...Rd4 ve ...exd3 fikrini verdi (−1.1).',
      diger: [
        { move: '16.Nxe4', text: '16...Nxe4 17.dxe4 Rxe4 18.Rf2 ile g2 fili c6 filine karşı durur; Motor: 0.00.' },
        { move: '16.dxe4', text: '16...Qd4+ 17.Kh1 Qd7 18.e5; Motor: −0.3.' },
      ],
    },
    '16b': {
      text: '16...Rd4: kale d4’e geçer ve d3 piyonuna baskı yapar.',
      amac: 'e4 piyonunu d3’e karşı desteklemek ve d3’e iki kez saldırmak; ...exd3 sonrası e-hattını ve c6 filinin çaprazını açmak.',
      neden: 'Kale d4’te Beyazın kara kareli filine açık görünür, ama Siyah bunu zaten hesaplamış: Be3’e ...exd3 ile cevap verecek. Motor 16...Rd4’ü en iyi buluyor (−1.3).',
      diger: [
        { move: '16...Qd4+', text: '17.Be3 Qd7 18.Nxe4 ile Beyaz e4’ü değişir; Motor: −0.5.' },
        { move: '16...e3', text: '17.Rxe3 Bxg2 18.Kxg2 Qa8+; Motor: −0.5.' },
      ],
    },
    '17w': {
      text: '17.Be3: fil kaleye saldırır.',
      amac: 'Siyahın kalesini kovup tempo kazanmak.',
      neden: 'Doğal görünür ve motor da bunu en iyi buluyor (−1.2); ama Siyahın 17...exd3 kombinasyonuna yol verir. 17.Nxe4 Bxe4 18.Bxe4 Nxe4 19.Rxe4 Rxe4 benzer değerde (−1.25).',
      diger: [
        { move: '17.Nxe4', text: '17...Bxe4 18.Bxe4 Nxe4 19.Rxe4 Rxe4 20.dxe4; Motor: −1.25.' },
        { move: '17.b3', text: '17...exd3 18.Bxc6 c4; Motor: −1.3.' },
      ],
    },
    '17b': {
      text: '17...exd3! Siyah kaleyi bırakır: d3 piyonu d2’ye yürümeyi tehdit eder ve c6 fili g2’ye saldırır.',
      amac: 'Kale karşılığında Beyazın g2 filini almak, beyaz kareli şah savunmasını kırmak ve d3’te güçlü bir piyon bırakmak.',
      neden: 'e4 piyonu kalkınca c6 filinin önü açılır; aynı anda d3 piyonu d2’ye geçmeyi (kale ve vezir çatalı) tehdit eder. 17...Rb4 (−0.5) ya da 17...Rd7 (−0.2) pasif kalırdı. Motor: −1.3, partinin stratejik dönüm noktası.',
      diger: [
        { move: '17...Rb4', text: '18.Nxe4 Nxe4 19.dxe4 Bxe4 ile Beyaz uzun çaprazı kapatır; Motor: −0.5.' },
        { move: '17...Rd7', text: '18.Nxe4 Nxe4 19.dxe4 Qa8; Motor: −0.2.' },
      ],
    },
    '18w': {
      text: '18.Bxd4: Beyaz kaleyi alır.',
      amac: 'Kaliteyi almak; Beyaz bunu hamle sırasında en doğal yol olarak gördü.',
      neden: 'Motor 18.Bxc6 d2 19.Bxd2 Rxd2’yi öneriyor (−1.3): Beyaz önce tehlikeli c6 filini yok eder ve Siyahın uzun çapraz oyunu ortadan kalkar. Maç hamlesinden sonra g2 fili düşer (−2.2).',
      diger: [
        { move: '18.Bxc6', text: '18...d2 19.Bxd2 Rxd2 20.Kh1; Siyah kale aktif ama uzun çapraz yok. Motor: −1.3.' },
        { move: '18.Qd2', text: '18...Bxg2 19.Qxg2 dxc2 ile Siyah çok aktif; Motor: −2.5.' },
      ],
    },
    '18b': {
      text: '18...Bxg2! fil g2’yi alır.',
      amac: 'Beyaz şahın en önemli savunucusunu ortadan kaldırmak; beyaz karelerde kalıcı üstünlük kurmak.',
      neden: '19.Kxg2? Qa8+ 20.Kg1 cxd4 ile d4 fili düşer (−3.3). 18...cxd4 (−1.0) bu üstünlüğü kurmazdı; 18...Qxd4+? 19.Qe3 ise eşitlik verir (0.00). Motor: −2.0.',
      diger: [
        { move: '18...cxd4', text: '19.Ne4 Nxe4 20.Bxe4 Bxe4 ile g2 fili değişir ama Beyaz rahatlar; Motor: −1.0.' },
        { move: '18...Qxd4+', text: '19.Qe3 Ng4 20.Qxd4 cxd4 ile malzeme dengelenir; Motor: 0.00.' },
      ],
    },
    '19w': {
      text: '19.Be3: fil e3’e döner; d2 karesini korur.',
      amac: 'd3 piyonunun d2’ye yürümesini engellemek ve fili kurtarmak.',
      neden: '19.Kxg2? Qa8+ ile fil kaybedilir (−3.3); 19.Bxf6 d2 20.Qxd2 Qxd2 de (−2.1) benzer değerde. Be3 hem d2’yi tutar hem de fili güvenliğe alır. Motor: −2.35.',
      diger: [
        { move: '19.Kxg2', text: '19...Qa8+ 20.Kg1 cxd4 21.Nd1; Siyah fili geri kazanır. Motor: −3.3.' },
        { move: '19.Bxf6', text: '19...d2 20.Qxd2 Qxd2 21.Rad1 Qxc2; Motor: −2.1.' },
      ],
    },
    '19b': {
      text: '19...Ba8: fil a8’e çekilir ve uzun çaprazda kalır; beyaz şahın önü beyaz karelerde zayıf.',
      amac: 'Fili g2’den güvenli bir kareye çekip a8–h1 çaprazını kontrol etmeye devam etmek.',
      neden: 'Fil g2’de kalırsa Kxg2 ile alınabilirdi. a8 en güvenli kare; fil buradan e4, f3 ve g2’ye bakmaya devam eder. 19...Bf3 (−1.75) daha zayıftı. Motor: −2.5.',
      diger: [
        { move: '19...Bb7', text: '20.cxd3 c4; Motor: −2.3.' },
        { move: '19...Bf3', text: '20.cxd3 Qxd3 21.Qb1 ile fil saldırıya açık; Motor: −1.75.' },
      ],
    },
    '20w': {
      text: '20.cxd3: Beyaz d3 piyonunu alır.',
      amac: 'Tehlikeli d3 piyonunu ortadan kaldırmak.',
      neden: 'd3 piyonu sürekli ...d2 tehdidi yapıyordu; onu almak mantıklı. 20.h3 (−2.55) şahı h2’ye götürür ama piyonu bırakır. Motor: −2.4, en iyi hamle.',
      diger: [
        { move: '20.h3', text: '20...c4 21.Kh2; Motor: −2.55.' },
        { move: '20.Qd2', text: '20...c4 21.cxd3 cxd3; Motor: −2.6.' },
      ],
    },
    '20b': {
      text: '20...Qxd3: vezir d3’ü alır. Siyah artık kalite karşılığında bir piyonla oynuyor.',
      amac: 'Malzemeyi dengelemek ve veziri merkeze, beyaz karelere getirmek.',
      neden: 'Motor 20...Qd7! 21.Qc2 Ng4 22.h3 Qc6’yı daha güçlü buluyor (−3.2): vezir a8 filiyle uzun çaprazda batarya kurar. Maç hamlesi piyon alır ama veziri merkezde biraz açıkta bırakır (−2.0).',
      diger: [
        { move: '20...Qd7', text: '21.Qc2 Ng4 22.h3 Qc6 ile uzun çaprazda batarya; Motor: −3.2.' },
        { move: '20...c4', text: '21.h3 cxd3 22.Kh2; Motor: −2.6.' },
      ],
    },
    '21w': {
      text: '21.Qd1: vezir d1’den d-hattına çıkar.',
      amac: 'Siyah veziri kovmak ve vezir değişimini önermek.',
      neden: 'Vezir değişimi Beyazın kalite fazlasını değerli kılardı. Ama motor 21.Qd2 Qg6 22.Rad1 h5’i (−1.9) ya da 21.Re2’yi (−1.9) öneriyor; maç hamlesinden sonra −2.7.',
      diger: [
        { move: '21.Qd2', text: '21...Qg6 22.Rad1 h5 23.Qd3; Motor: −1.9.' },
        { move: '21.Re2', text: '21...h5 22.h3 h4 23.g4; Motor: −1.9.' },
      ],
    },
    '21b': {
      text: '21...Qf5: vezir f5’e çekilir; b1–h7 çaprazında ve beyaz karelerde kalır.',
      amac: 'Vezir değişiminden kaçmak ve beyaz şaha karşı saldırıda kalmak.',
      neden: 'Vezir değişimi Siyahın saldırı şansını yok ederdi. f5’ten vezir h3, g4 ve d3’e gidebilir. 21...Qc4 (−1.5) daha pasif. Motor: −2.9.',
      diger: [
        { move: '21...Qg6', text: '22.Qe2 h5 23.Rad1 h4; Motor: −2.85.' },
        { move: '21...Qc4', text: '22.Qe2 Qb4 23.h3; Motor: −1.5.' },
      ],
    },
    '22w': {
      text: '22.Qe2: vezir e2’ye gelir; e-hattını ve a6 piyonunu tutar.',
      amac: 'Veziri merkezde tutmak ve d-hattına kale getirmek.',
      neden: 'Motor 22.Qe2’yi (−3.1) 22.Re2 Ng4 23.Qb1 (−2.7) ile yakın görüyor. Beyaz a6’ya da baskı yapıyor.',
      diger: [
        { move: '22.Re2', text: '22...Ng4 23.Qb1 Qh5 24.Qc2; Motor: −2.7.' },
        { move: '22.Qb1', text: '22...Qh5 23.Qd1 Ng4; Motor: −3.35.' },
      ],
    },
    '22b': {
      text: '22...Ng4: at e3 filine yönelir.',
      amac: 'Beyazın kara kareli filini değişmek; d4 karesini ve g1–a7 çaprazını Siyah filine bırakmak.',
      neden: 'Motor 22...h5! 23.h4 Rb8 24.Rad1 Qh3’ü daha güçlü buluyor (−3.3): h-piyonu doğrudan g3’e yürür. Sokolov daha yavaş ama mantıklı bir yolu seçti (−2.0).',
      diger: [
        { move: '22...h5', text: '23.h4 Rb8 24.Rad1 Qh3 ile g3 baskı altında; Motor: −3.3.' },
        { move: '22...Ne4', text: '23.Qc2 Nxg3 24.Qxf5 Nxf5; Motor: −1.9.' },
      ],
    },
    '23w': {
      text: '23.Rad1: kale d-hattına gelir.',
      amac: 'Açık d-hattını ele geçirmek ve Rd7 ile Siyahın yedinci yatayına girmek.',
      neden: 'Kalite fazlasını değerlendirmenin yolu kaleleri aktif oynamaktır. Motor 23.Rad1’i en iyi buluyor (−1.8); 23.Bf2 (−2.4) ya da 23.Red1 (−2.7) daha zayıf.',
      diger: [
        { move: '23.Bf2', text: '23...h5 24.Ne4 h4; Motor: −2.4.' },
        { move: '23.Red1', text: '23...Bf6 24.Bf2 Nxf2 25.Qxf2; Motor: −2.7.' },
      ],
    },
    '23b': {
      text: '23...Bf6: fil f6’ya gelir; uzun çaprazda c3 atına ve d4 karesine bakar.',
      amac: 'Kara kareli fili d4’e götürmeye hazırlanmak ve c3 atına baskı yapmak.',
      neden: 'Fil e7’de pasifti; f6’dan d4 ve c3’e bakar. Motor: −1.7, en iyi hamle.',
      diger: [
        { move: '23...h6', text: '24.Qd3 Qh5 25.Qe2 Bf6; Motor: −1.6.' },
        { move: '23...Nxe3', text: '24.Qxe3 Bf6 25.Ne4 Bd4; Motor: −1.4.' },
      ],
    },
    '24w': {
      text: '24.Bf2: fil f2’ye çekilir.',
      amac: 'Fili at saldırısından kurtarmak ve d4’ü korumak.',
      neden: 'Motor 24.Qd3 Nxe3 25.Qxe3 Qh5 26.Ne4’ü öneriyor (−1.4): vezir merkezde kalır. Maç hamlesi Siyahın ...Nxf2 ile fili değişmesine izin verdi (−2.1).',
      diger: [
        { move: '24.Qd3', text: '24...Nxe3 25.Qxe3 Qh5 26.Ne4; Motor: −1.4.' },
        { move: '24.Rd2', text: '24...Bxc3 25.bxc3 Qe4; Motor: −2.9.' },
      ],
    },
    '24b': {
      text: '24...Nxf2: at fili alır; tek güçlü hamle.',
      amac: 'Beyazın kara kareli filini yok etmek; d4 karesi Siyah filine kalır.',
      neden: '24...Kh8 (−1.6) ya da 24...Rb8 (−0.9) atı Beyaza bırakırdı. Motor: −2.0, en iyi.',
      diger: [
        { move: '24...Rb8', text: '25.Ne4 Nxf2 26.Nxf6+ gxf6 ile Siyahın şahı açılır; Motor: −0.9.' },
        { move: '24...Kh8', text: '25.Rd7 Nxf2 26.Qxf2; Motor: −1.6.' },
      ],
    },
    '25w': {
      text: '25.Qxf2: vezirle alınır.',
      amac: 'Şahı yerinde tutmak ve veziri f2’de g3’ü korumak için kullanmak.',
      neden: '25.Kxf2? Bd4+ 26.Rxd4 cxd4 ile malzeme kaybedilir (−4.2); 25.Rd2?? Nh3+ ise daha kötü (−6.2). Vezirle almak zorunlu.',
      diger: [
        { move: '25.Kxf2', text: '25...Bd4+ 26.Rxd4 cxd4 27.Ne4; Motor: −4.2.' },
      ],
    },
    '25b': {
      text: '25...h5: h-piyonu h4’e gidip g3’e baskı yapmak ister.',
      amac: 'g3 piyonunu ...h4 ile zorlamak ve beyaz şahın önündeki piyon yapısını kırmak.',
      neden: 'Bd4 bağı da tehdit ediliyor; h5 ek bir saldırı yolu açar. Motor 25...Rb8 (−2.2), 25...h5 (−2.2) ve 25...h6’yı (−2.0) yakın görüyor.',
      diger: [
        { move: '25...Rb8', text: '26.Rd6 h5 27.Red1 h4; Motor: −2.2.' },
        { move: '25...h6', text: '26.Rd6 Rb8 27.Red1; Motor: −2.0.' },
      ],
    },
    '26w': {
      text: '26.h4? Ağır hata: Beyaz ...h4’ü engeller ama g3 piyonunu desteksiz bırakır.',
      amac: 'Siyahın h-piyonunu durdurmak.',
      neden: 'h4 ile g3’ü artık hiçbir piyon korumuyor; ...Bd4 bağı ve ...Qh3 bir anda kazanır. Motor 26.Rd6 h4 27.Re2’yi (−2.1) ya da 26.Qe3’ü (−2.1) öneriyor; maç hamlesinden sonra −4.5.',
      diger: [
        { move: '26.Rd6', text: '26...h4 27.Re2 Bd4 28.Rxd4; Motor: −2.1.' },
        { move: '26.Qe3', text: '26...Qh3 27.Re2 h4 28.Ne4; Motor: −2.1.' },
      ],
    },
    '26b': {
      text: '26...Bd4! fil f2 vezirini g1 şahına bağlar.',
      amac: 'Veziri bağlayarak kaliteyi geri kazanmak ve g3’ün son savunucusunu oyalamak.',
      neden: 'Vezir kaçamaz; Beyaz kaleyle almak zorunda. 26...Qh3 27.Qh2 Bd4+ (−3.7) daha zayıf. Motor: −4.6, en iyi.',
      diger: [
        { move: '26...Qh3', text: '27.Qh2 Bd4+ 28.Rxd4 Qxh2+; Motor: −3.7.' },
        { move: '26...Rb8', text: '27.Kh2 Bd4 28.Qd2; Motor: −2.2.' },
      ],
    },
    '27w': {
      text: '27.Rxd4: Beyaz kalesiyle d4 filini alır ve bağdan kurtulur; böylece kaliteyi geri verir.',
      amac: 'Vezirini kurtarmak. Bağlı vezirle başka bir hamle malzemeyi daha da kötü kaybettirirdi.',
      neden: 'Fiilen zorunlu bir hamle: 27.Ne4 Bxf2+ 28.Nxf2 Qc2 veziri kaybettirir (−6.5), 27.Qxd4 cxd4 28.Rxd4 Qh3 de aynı sonuca gider (−6.7). Rxd4 ile Beyaz en azından malzemeyi eşitliyor ama 26.h4’ün yarattığı g3 zayıflığı yerinde duruyor.',
      diger: [
        { move: '27.Ne4', text: '27...Bxf2+ 28.Nxf2 Qc2 ile Siyah vezir karşılığında yalnızca fil verir; Motor: −6.5.' },
        { move: '27.Qxd4', text: '27...cxd4 28.Rxd4 Qh3 29.Ne4 ile vezir karşılığında kale ve fil; Motor: −6.7.' },
      ],
    },
    '27b': {
      text: '27...cxd4: c5 piyonu d4’teki kaleyi alır ve aynı anda f2 vezirine saldırır.',
      amac: 'Kaliteyi geri kazanıp malzemeyi eşitlemek; d4 piyonu ayrıca c3 atını kovmakla tehdit ediyor.',
      neden: 'Zorunlu geri alış: 27...Qh3? 28.Rde4 f5 29.Qh2 sonrası Beyaz kalesini koruyup Siyahın bütün avantajını siler (−0.1). Kaleyi almak hem malzemeyi dengeler hem de vezire tempo kazanır. Motor: −4.75.',
    },
    '28w': {
      text: '28.Qxd4: vezir d4 piyonunu alır; malzeme eşitlendi, ama beyaz şahın önünde yalnızca g3 ve h4 piyonları var.',
      amac: 'Bir piyon kazanıp veziri merkeze, uzun çapraza getirmek; a8 filinin baskısına karşı d4’ten savunma yapmak.',
      neden: 'Vezir f2’den ayrılınca g3 korumasız kalır; bu yüzden hamle kolay ama riskli. Alternatif 28.Ne2 Qd5 29.Kh2 d3 de (−4.7) Siyahın d-piyonu ve beyaz kareler yüzünden kötü. Beyazın sıkıntısı tek bir hamlede değil, yapısındadır.',
      diger: [
        { move: '28.Ne2', text: '28...Qd5 29.Kh2 d3 30.Nc3 ile d3 piyonu güçlü; Motor: −4.7.' },
        { move: '28.Nb1', text: '28...Rc8 29.Na3 Qh3 30.Qh2; Motor: −5.4.' },
      ],
    },
    '28b': {
      text: '28...Qh3! vezir g3 piyonuna saldırır; ...Qxg3+ ya da ...Qg2+ tehdidi var.',
      amac: 'Beyaz şahın etrafındaki son piyonları toplamak; a8 filinin g2 karesine baktığı bir pozisyonda şahı açığa çıkarmak.',
      neden: 'g3 piyonunu artık ne bir piyon ne de f2’deki vezir koruyor; 26.h4’ün cezası burada kesilir. 28...Rb8 29.Qa7 (−2.4) ya da 28...Qg4 29.Qf2 (−1.7) Beyaza nefes aldırırdı. Motor: −4.9, en iyi hamle.',
      diger: [
        { move: '28...Rb8', text: '29.Qa7 Rd8 30.Qf2 ile Beyaz savunmayı toplar; Motor: −2.4.' },
        { move: '28...Qg4', text: '29.Qf2 Qh3 30.Qh2 ile vezir g3’ü korur; Motor: −1.7.' },
      ],
    },
    '29w': {
      text: '29.Kf2: şah f2’ye çıkar ve g3’ü korur.',
      amac: 'g3 piyonunu şahla savunmak ve şahı g-hattındaki vezir şahlarından uzaklaştırmak.',
      neden: '29.Re2 Qxg3+ 30.Kf1 (−5.1) ya da 29.Ne4 f5 (−5.7) daha kötü; g3 zaten tutulamıyor, Kf2 en azından şahı merkeze kaçırır. Ama a8 filinin g2’ye bakması yüzünden şah orada da şah çekilmeye açıktır. Motor: −4.9.',
      diger: [
        { move: '29.Re2', text: '29...Qxg3+ 30.Kf1 Rb8 31.Rd2; Motor: −5.1.' },
        { move: '29.Ne4', text: '29...f5 30.Qc3 Bxe4 31.Rxe4; Motor: −5.7.' },
      ],
    },
    '29b': {
      text: '29...Qg2+: vezir a8 filinin desteğiyle g2’ye girip şah çeker.',
      amac: 'Şahı e3’e sürmek ve ardından g3’ü şahla almak.',
      neden: 'g2 karesi uzun çaprazda a8 filinin koruması altında; bu, 18...Bxg2 ile başlayan beyaz kare stratejisinin doğal sonucu. 29...Qh2+ 30.Ke3 Qxg3+ (−4.9) aynı değerde; 29...Rb8 (−4.0) daha yavaş.',
      diger: [
        { move: '29...Qh2+', text: '30.Ke3 Qxg3+ 31.Kd2 Qxh4 ile aynı sonuç; Motor: −4.9.' },
        { move: '29...Rb8', text: '30.Ne2 Qg2+ 31.Ke3 Bf3; Motor: −4.0.' },
      ],
    },
    '30w': {
      text: '30.Ke3: şah e3’e gider.',
      amac: 'Şahdan kaçmak; e1 ve f1 karelerine dönmek g-hattı ve a8 filinin çaprazında daha tehlikeli olurdu.',
      neden: 'Zorunlu: motor yalnızca bu hamleyi gösteriyor (−5.05). Şah artık merkezde, e-hattında ve d-hattının yakınında; Siyah kalesini d8’e getirdiğinde bu bir hedef olacak.',
    },
    '30b': {
      text: '30...Qxg3+: vezir g3 piyonunu şah çekerek alır.',
      amac: 'Malzeme fazlasına geçmek ve şahı daha da vezir kanadına sürmek.',
      neden: 'Şahla alınca Beyazın karşı saldırıya zamanı kalmaz. 30...Rc8 31.Re2 (−4.5) ya da 30...Rb8 31.Ne2 Bf3 (−4.1) sırayı değiştirir ama Beyaza bir tempo verir. Motor: −5.0, en iyi.',
      diger: [
        { move: '30...Rc8', text: '31.Re2 Qxg3+ 32.Kd2 Qxh4; Motor: −4.5.' },
        { move: '30...Rb8', text: '31.Ne2 Bf3 32.Kd2 Bg4; Motor: −4.1.' },
      ],
    },
    '31w': {
      text: '31.Kd2: şah d2’ye kaçar.',
      amac: 'Şahı vezir kanadına, c2–b1 bölgesine götürmek.',
      neden: '31.Ke2 Bf3+ 32.Kd2 Qxh4 (−5.3) filin şahla tempo kazanmasına izin verir. Kd2 en dirençli kaçış, ama d-hattında Siyahın kalesi yakında şah çekecek. Motor: −5.0.',
      diger: [
        { move: '31.Ke2', text: '31...Bf3+ 32.Kd2 Qxh4 ile fil tempo kazanır; Motor: −5.3.' },
      ],
    },
    '31b': {
      text: '31...Qxh4: vezir h4 piyonunu da alır; Siyah artık iki piyon önde ve h-piyonu serbest.',
      amac: 'Malzeme fazlasını artırmak; h5 piyonunu ileride vezire çıkabilecek bir geçer piyon hâline getirmek.',
      neden: 'Şah güvenliği geri planda kalmışken iki piyon fazlası, saldırıyla birlikte kazanmak için yeter. 31...Bf3 32.b4 (−4.5) ya da 31...Qh2+ 32.Kc1 (−4.2) daha az net. Motor: −5.0, en iyi.',
      diger: [
        { move: '31...Bf3', text: '32.b4 Qxh4 33.Qe3 Bg4; Motor: −4.5.' },
        { move: '31...Qh2+', text: '32.Kc1 Bf3 33.Re3; Motor: −4.2.' },
      ],
    },
    '32w': {
      text: '32.Qe5: vezir e5’e gelir; merkezden h5 ve b8 karelerine bakar.',
      amac: 'Veziri aktifleştirip h5 piyonunu almak ya da Siyahın kalesinin hareketini kısıtlamak.',
      neden: 'Pasif bir savunma uzun vadede umutsuz; Short karşı oyun aradı. 32.Qe3 Rd8+ 33.Kc2 Qf6 (−4.9) biraz daha sağlamdı; 32.Ne4? Qxf4+ ise bir piyon daha verir (−5.6). Motor: −5.1.',
      diger: [
        { move: '32.Qe3', text: '32...Rd8+ 33.Kc2 Qf6 34.Qb6; Motor: −4.9.' },
        { move: '32.Ne4', text: '32...Qxf4+ 33.Kc3 a5 34.Nd6; Motor: −5.6.' },
      ],
    },
    '32b': {
      text: '32...Rd8+: kale d-hattına şah çekerek gelir.',
      amac: 'Son pasif taşı (f8 kalesini) oyuna sokmak ve şahı c2–b3’e sürmek.',
      neden: 'Saldırıda her taşın katılması gerekir; Rd8+ tempo kazanarak kaleyi açık hatta getirir. 32...Qg4 33.Qg5 Qxg5 34.fxg5 (−5.1) vezir değişip oyunsonuna gider, bu da kazanır ama Short’a daha az pratik zorluk yaratır. Motor: −4.9.',
      diger: [
        { move: '32...Qg4', text: '33.Qg5 Qxg5 34.fxg5 Rb8 ile kazanılmış oyunsonu; Motor: −5.1.' },
        { move: '32...Qf2+', text: '33.Re2 Qb6 34.Kc1 Bf3; Motor: −5.05.' },
      ],
    },
    '33w': {
      text: '33.Kc2: şah c2’ye gider.',
      amac: 'Şahı d-hattından çıkarıp vezir kanadında güvenli bir köşe aramak.',
      neden: '33.Nd5? Bxd5 34.Qd4 bir taş kaybettirir (−7.0); 33.Kc1 Bf3 34.Kb1 (−5.0) aynı değerde. c2’de şah b3–a2’ye kaçabilir. Motor: −4.8.',
      diger: [
        { move: '33.Nd5', text: '33...Bxd5 34.Qd4 Rc8 ile taş gider; Motor: −7.0.' },
        { move: '33.Kc1', text: '33...Bf3 34.Kb1 Qf2 35.Re3; Motor: −5.0.' },
      ],
    },
    '33b': {
      text: '33...Qf2+: vezir şah çeker ve e1 kalesini e2’ye zorlar.',
      amac: 'Beyaz kaleyi pasif bir savunma karesine bağlamak ve şaha baskıyı sürdürmek.',
      neden: 'Kale e2’ye gelince a8 filinin ...Bf3 ile ona saldırması mümkün olur; partinin sonunda tam bu oldu. 33...Qg4 34.Qc7 (−4.9) ya da 33...Bf3 34.Kb3 (−4.8) eşdeğer. Motor: −4.65.',
      diger: [
        { move: '33...Qg4', text: '34.Qc7 Rf8 35.b4 h4; Motor: −4.9.' },
        { move: '33...Bf3', text: '34.Kb3 Qf2 35.Qc7 Qd4; Motor: −4.8.' },
      ],
    },
    '34w': {
      text: '34.Re2: kale e2’ye gelip şahı keser.',
      amac: 'Şahdan kurtulmak ve ikinci yatayı korumak.',
      neden: '34.Kb3 Qb6+ 35.Kc2 h4 (−4.8) benzer; 34.Kc1 Qd2+ 35.Kb1 Bf3 (−4.9) şahı daha da kenara iter. Re2 doğal ama kaleyi a8 filinin ...Bf3 saldırısına açık bırakıyor. Motor: −4.85.',
      diger: [
        { move: '34.Kb3', text: '34...Qb6+ 35.Kc2 h4 36.Qg5; Motor: −4.8.' },
        { move: '34.Kc1', text: '34...Qd2+ 35.Kb1 Bf3 36.Rg1; Motor: −4.9.' },
      ],
    },
    '34b': {
      text: '34...Qd4: vezir d4’e merkezlenir; d-hattında kale ile birlikte çalışır.',
      amac: 'Vezir değişimini önermek (değişim kazanılmış bir kale oyunsonu verir) ya da Beyaz kaçarsa ...Qd3+ ile şaha girmek.',
      neden: 'Vezir d4’ten hem e5 vezirine hem d3 ve b2 karelerine bakar. 34...Qg3 35.Re3 Qg6+ (−4.8) ya da 34...Qf3 (−4.6) daha az etkili. Motor: −5.0, en iyi.',
      diger: [
        { move: '34...Qg3', text: '35.Re3 Qg6+ 36.Kb3 h4; Motor: −4.8.' },
        { move: '34...Qf3', text: '35.Kb3 h4 36.Ka2 Qg4; Motor: −4.6.' },
      ],
    },
    '35w': {
      text: '35.Qxh5?: vezir h5 piyonunu alır.',
      amac: 'Bir piyon geri almak ve Siyahın geçer h-piyonunu yok etmek.',
      neden: 'Vezir merkezden uzaklaşır; d3, b1 ve e2 kareleri savunmasız kalır ve ...Qd3+ ile ...Bf3 gelir. Motor 35.Qxd4 Rxd4 36.f5 (−4.9) ya da 35.Rh2 (−4.8) ile direnmeyi öneriyor; maç hamlesinden sonra −5.9.',
      diger: [
        { move: '35.Qxd4', text: '35...Rxd4 36.f5 h4 37.fxe6 fxe6 ile kale oyunsonu, Siyah piyon fazlasıyla kazanmalı; Motor: −4.9.' },
        { move: '35.Rh2', text: '35...Qd3+ 36.Kb3 Bd5+ ile saldırı sürer; Motor: −4.8.' },
      ],
    },
    '35b': {
      text: '35...Qd3+! tek güçlü hamle; vezir şah çeker ve fil f3’e gelmeye hazırlanır.',
      amac: 'Şahı b3’e ya da c1’e sürmek ve ...Bf3 ile e2 kalesine saldırmak.',
      neden: 'Bu şahtan sonra fil hem e2 kalesine hem h5 vezirine çapraz açarak saldırabilir. 35...Qxf4 36.Rh2 Qf5+ (−3.7) ya da 35...g6 36.Qe5 (−2.5) avantajın büyük kısmını bırakırdı. Motor: −5.2.',
      diger: [
        { move: '35...Qxf4', text: '36.Rh2 Qf5+ 37.Qxf5 exf5 ile oyunsonu; Motor: −3.7.' },
        { move: '35...g6', text: '36.Qe5 Bf3 37.Rh2 Qxe5; Motor: −2.5.' },
      ],
    },
    '36w': {
      text: '36.Kb3: şah b3’e kaçar.',
      amac: 'Şahdan kurtulmak ve şahı a2–a3’e götürmek.',
      neden: '36.Kc1 Bf3 37.Qe5 Bxe2 38.Qxe2 (−5.2) daha dirençliydi; Kb3 sonrası 36...Bd5+ ya da 36...Bf3 ile Siyah hemen kesin kazanır (−5.4 ile −7.0 arası).',
      diger: [
        { move: '36.Kc1', text: '36...Bf3 37.Qe5 Bxe2 38.Qxe2 Qd6; Siyah taş önde; Motor: −5.2.' },
      ],
    },
    '36b': {
      text: '36...Bf3: fil e2 kalesine saldırır ve h5 vezirini de hedef alır. Short terk etti.',
      amac: 'e2 kalesini kazanmak; kale çekilirse ...Bxh5, vezir fili alırsa ...Qxf3.',
      neden: '37.Qxf3 Qxf3 vezir kaybettirir (−6.0), 37.Re3 Rb8+ de vezir kaybettirir (−7.5); en iyi 37.Qh2 Bxe2 38.Qxe2 Rb8+ bile taş kaybıdır (−5.3). 36...Bd5+ 37.Ka3 Qc4 de aynı derecede kazanıyordu. Motor: −5.3.',
      diger: [
        { move: '36...Bd5+', text: '37.Ka3 Qc4 ile şah a3’te ağa alınır; Motor: −5.4.' },
        { move: '36...Rb8+', text: '37.Ka2 Bf3 38.Qe5 Rb4; Motor: −4.1.' },
      ],
    },
  },
  sources: [
    { title: 'The Week in Chess 345 (Ohri 2001 Avrupa Şampiyonası sonuçları, 5. tur)', url: 'https://theweekinchess.com/html/twic345.html' },
    { title: 'chess.at: 2001 Avrupa Şampiyonaları kronolojisi (final sıralaması)', url: 'https://www.chess.at/chronik/chronik2001/01europameisterschaften.pdf' },
    { title: 'chess.com: Sicilian-phobia Part Two – Closed Sicilian', url: 'https://www.chess.com/article/view/sicilian-phobia-part-two---closed-sicilian' },
    { title: 'Exeter Chess Club: The Closed Sicilian', url: 'https://exeterchessclub.org.uk/content/closed-sicilian' },
    { title: 'C. Hansen, The Chameleon Variation (New in Chess örnek bölüm, 2...e6 3.Nge2 d5)', url: 'https://www.newinchess.com/media/wysiwyg/product_pdf/3725.pdf' },
  ],
  exercises: [
    { id: 'sso-1', kind: 'tekrar', plan: false, title: 'Kaleyi bırak, g2’yi al',
      source: 'Short – Sokolov, Ohri 2001 (17. hamle)',
      fen: '3q1rk1/4bppp/p1b1pn2/2p5/P2rpP2/2NPB1P1/1PP3BP/R1Q1R1K1 b - - 5 17',
      prompt: 'Beyazın e3 fili d4 kalesine saldırıyor. Siyahın c6 fili uzun çaprazda, e4 piyonu d3 piyonuna dayanıyor. Hamle sizde.',
      hint: 'Kaleyi kurtarmak zorunda mısınız? e4 piyonu alırsa hangi hat açılır?',
      line: ['exd3', 'Bxd4', 'Bxg2'],
      explanation: '**17...exd3!** Kale bırakılır: d3 piyonu d2’ye yürümeyi tehdit eder ve c6 fili g2’ye saldırır. **18.Bxd4 Bxg2!** ile Siyah g2 filini alır; kalite karşılığında bir piyon ve beyaz karelerde kalıcı baskı. Motor: 17...exd3 −1.5, sonraki en iyi 17...Rb4 −0.5; 18...Bxg2 −2.0, sonraki en iyi 18...cxd4 −0.7.',
      link: '...dxe4 ile açılan uzun çapraz burada meyvesini veriyor: g2 fili gidince beyaz şah beyaz karelerde savunmasız.' },
    { id: 'sso-2', kind: 'tekrar', plan: false, title: 'Bağ ve vezir saldırısı',
      source: 'Short – Sokolov, Ohri 2001 (26. hamle)',
      fen: 'b4rk1/5pp1/p3pb2/2p2q1p/P4P1P/2N3P1/1P3Q2/3RR1K1 b - - 0 26',
      prompt: 'Beyaz son hamlede h4 oynadı. Beyazın veziri f2’de, şahı g1’de. Siyah kalite karşılığında bir piyonla oynuyor. Hamle sizde.',
      hint: 'f2 ile g1 aynı çaprazda. Sonra g3 piyonunu kim koruyor?',
      line: ['Bd4', 'Rxd4', 'cxd4', 'Qxd4', 'Qh3'],
      explanation: '**26...Bd4!** veziri şaha bağlar; **27.Rxd4 cxd4 28.Qxd4 Qh3!** ve vezir korumasız g3 piyonuna saldırır; ardından h4 de düşer. Motor: 26...Bd4 −4.7, sonraki en iyi 26...Qh3 −3.5; 28...Qh3 −4.8, sonraki en iyi 28...Rb8 −2.0.',
      link: 'g2 filinin değişmesi ve 26.h4 ile şahın çevresi zayıfladı; Siyah fil ve veziriyle bu zayıflığı hemen kullandı.' },
    { id: 'sso-3', kind: 'transfer', plan: false, title: 'Uzun çaprazdaki fil d4’te',
      source: 'Ivanchuk – Shirov, M-Tel Masters, Sofya 2009 (19. hamle)',
      fen: '2rr2k1/pp1q1pbp/6p1/2np4/3B4/1PN1QP2/P5PP/3R1RK1 b - - 1 19',
      prompt: 'Sicilya’dan çıkan bir oyun. Beyaz f3 oynadı; veziri e3’te, şahı g1’de, kara kareli fili d4’te. Siyahın g7 fili uzun çaprazda. Hamle sizde.',
      hint: 'd4, e3 ve g1 aynı çaprazda. Filler değişince Beyazın kara kareleri kimi korur?',
      line: ['Bxd4', 'Rxd4', 'Qc6'],
      explanation: '**19...Bxd4!** Beyazın kara kareli filini alır; e3 veziri g1 şahına bağlı olduğu için 20.Nxd5? Qxd5 malzeme kaybettirir (−7.0). **20.Rxd4 Qc6!** ile vezir c-hattında c3 atına baskı yapar ve ...Ne6 ile d4 kalesini kovalamaya hazırlanır. Motor: 19...Bxd4 −1.8, sonraki en iyi 19...Qe6 −0.5; 20...Qc6 −1.4, sonraki en iyi 20...Ne6 −0.2.',
      link: 'Sokolov 26...Bd4 ile f2 vezirini g1 şahına bağladı; Shirov da uzun çaprazdaki filiyle d4’te aynı çaprazı kullanıp beyaz şahın kara karelerini savunmasız bıraktı.' },
    { id: 'sso-4', kind: 'transfer', plan: false, title: 'Bağla piyon kazanmak',
      source: 'Tosan – Christiansen, Buenos Aires 1975 (20. hamle)',
      fen: '4rrk1/ppqbn1bp/2n1p3/2p5/3P1NP1/3PQ3/PP5P/R1BN1RKB b - - 0 20',
      prompt: 'Kapalı Sicilya, g3-Bg2-f4 kuruluşu. Beyaz az önce c3xd4 ile geri aldı. Beyazın veziri e3’te, şahı g1’de. Hamle sizde.',
      hint: 'g7 filinin çaprazında e3 ile g1 aynı hatta.',
      line: ['Bxd4'],
      explanation: '**20...Bxd4!** Fil piyonu alır ve e3 vezirini g1 şahına bağlar; 21.Rf2 Bxe3 sonrası Siyah fil karşılığında veziri kazanır. Beyaz burada terk etti. Motor: 20...Bxd4 −5.7, sonraki en iyi 20...Rf7 −3.7.',
      link: 'Short – Sokolov’da 26...Bd4 f2 vezirini bağladı; burada aynı çaprazdaki bağ e3 vezirini yakalıyor.' },
  ],
};
