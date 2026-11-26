// Tal – Hübner, Bölgelerarası turnuva, Leningrad 1973 (4. tur). Kaynak: PgnMentor (Tal.pgn).
export default {
  id: 'tal-huebner-1973',
  theme: 'Saldırıyı söndürüp açık g-hattında karşı saldırı',
  white: 'Mihail Tal', black: 'Robert Hübner',
  whiteShort: 'Tal', blackShort: 'Hübner',
  event: 'Bölgelerarası turnuva', site: 'Leningrad', year: 1973, eco: 'B43',
  variation: 'Sicilya Savunması, Kan (Paulsen) varyantı, 5.Nc3 Qc7 6.Be2 b5', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 Qc7 6. Be2 b5 7. a3 Bb7 8. f4 Nc6 9. Be3 Nxd4 10. Qxd4 Ne7 11. Rd1 Rd8 12. O-O Nc6 13. Qd2 Be7 14. Qe1 d6 15. f5 O-O 16. f6 Bxf6 17. Rxf6 gxf6 18. Qh4 Qe7 19. Rd3 f5 20. Bg5 f6 21. Bh6 fxe4 22. Rg3+ Kh8 23. Bg7+ Qxg7 24. Rxg7 Kxg7 25. Nxe4 Ne5 26. Ng3 Ng6 27. Qd4 Kh8 28. Nh5 Ne5 29. Qh4 Rd7 30. Nxf6 Rg7 31. Qh6 Rxg2+ 32. Kf1 Rf7 33. Bh5 Ng4 34. Bxg4 Rxg4 0-1`,
  summary: 'Oyun Haziran 1973’te Leningrad Bölgelerarası turnuvasının 4. turunda oynandı ve 34 hamlede **Siyahın (Hübner) galibiyetiyle** bitti. Kan varyantında Hübner esnek kuruluşunu (...Qc7, ...b5, ...Bb7) kurdu, 9...Nxd4 ve 10...Ne7-c6 manevrasıyla Beyaz vezirini iki kez kovaladı. Tal ise klasik bir şah saldırısı seçti: 15.f5 ve **16.f6!?** ile f-piyonunu Siyahın rok yapmış şahının önüne sürdü, 17.Rxf6 ile kale verip g-hattını açtı. Motor bu fedayı eşit buluyor (Motor: 0.00), yani Tal hiçbir şey kaybetmedi ama Siyah doğru savununca da kazanç yoktu. Hübner tam bunu yaptı: **18...Qe7, 19...f5 ve 20...f6!** ile piyonlarını çaprazların önüne koydu, 20...f6’da tek kurtarıcı hamleyi buldu. 21...fxe4 ile işi biraz karıştırdı (21...Kh8 ile kaleyi geri vermek daha temizdi), Tal da 22.Rg3+ ve **23.Bg7+!** ile veziri kale ve fil karşılığında geri aldı. Ortaya iki kale, fil ve at ile vezir, fil ve at arasında dengesiz bir oyun çıktı (Motor: yaklaşık +0.7). Burada saldırı biter ve sabırlı manevra başlar; Tal sabırsızlandı: 29.Qh4?! ve özellikle **30.Nxf6?** ile e4 atını oyundan çekince b7 filinin uzun çaprazı g2’ye açıldı. Hübner aynı g-hattını bu kez kendi lehine kullandı: **30...Rg7!, 31...Rxg2+ ve 32...Rf7!** ile f6 atını şaha bağladı, 33...Ng4 ile de atın düşüşünü kesinleştirdi. Tal’ın açtığı hat, sonunda kendi şahının mezarı oldu.',
  intro: 'Bu oyun 1973 Leningrad Bölgelerarası turnuvasından. Wikipedia’nın 1974 Adaylar maçları sayfasına göre 18 oyunculu tek devreli bu turnuvadan Korçnoy, Karpov ve Robert Byrne Adaylar’a çıktı; Hübner 10 puanla Larsen’le 5.–6. oldu, eski dünya şampiyonu Tal ise 8,5 puanla 8.–10. sırada kaldı. **Kan (Paulsen) varyantı** (1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6) Siyaha en esnek Sicilya kuruluşlarından birini verir: ChessBase’in Ilya Kan yazısında belirtildiği gibi Sovyetler’de Kan’ın, Almanya’da Paulsen’in adıyla anılır ve Taimanov kuruluşlarıyla sık sık iç içe geçer. Siyah ...Nf6 ve ...d6’yı erteler, önce ...Qc7 ile e5 karesini, ...b5 ve ...Bb7 ile e4 piyonunu hedef alır. Beyazın en doğal planı burada f4 ile alan almak ve şah kanadında piyon hücumu yapmaktır. Bu oyun her iki tarafın planını saf hâliyle gösterir: Tal f-piyonunu f6’ya kadar sürüp kale feda eder, Hübner ise piyon hamleleri ve doğru zamanda malzeme iadesiyle saldırıyı söndürür. Ardından gelen oyunsonu benzeri bölüm, “açılan hat herkesindir” dersini çok net verir. Oyunun en ayrıntılı kamuya açık yorumu, David R. Sands’in Hübner’in ölümü üzerine yazdığı Washington Times yazısıdır; Sands orada Hübner’in kendi notlarından da aktarmalar yapar.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**Alan ve piyon hücumu:** 8.f4 ve 15.f5 ile şah kanadında piyon çoğunluğunu ileri sürmek; f5-f6 ile g7 ve h7’nin önünü açmak. Bu, Kan’da Siyahın şahını erken rok yaptırmaya karşı en tipik plandır.',
      '**Veziri saldırıya taşımak:** Vezir d4’ten kovalandıktan sonra d2-e1 üzerinden h4’e gelir; 14.Qe1 hem f2 hem g3-h4 yolunu açar. Motor 15.Qf2’yi (Motor: +0.68) piyon hücumundan önce taşları hazırlamak için daha güçlü buluyor.',
      '**Kale fedasıyla hat açmak:** 16.f6!? ve 17.Rxf6 ile g7 piyonunu yerinden çıkarıp g-hattını açmak; ardından Rd3-g3 ile ikinci kaleyi üçüncü yataydan saldırıya sokmak.',
      '**Kara kareler ve f8 kalesi:** Bg5-h6 ile hem Siyahın veziri hem f8 kalesi hedef alınır; 23.Bg7+! bu kara kare baskısının taktik zirvesidir.',
      '**Saldırı bitince sabır:** Vezir değişip saldırı sönünce Beyazın doğru planı a4 ile vezir kanadını açmak, atı e4’te tutup b7 filinin çaprazını kapatmak ve g2’yi korumaktı (Motor: 30.a4 +0.87). 30.Nxf6? bu dengeyi bozdu.',
      '**Şah güvenliğini unutmamak:** Kalelerini veren taraf kendi şahının önündeki g-hattının da açık olduğunu hatırlamalı; 31.g3 veya 31.Ng4 ile g2’yi kapatmak zorunluydu.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '**Esnek Kan kuruluşu:** ...a6, ...Qc7, ...b5, ...Bb7 ile vezir kanadında alan almak ve e4’e baskı kurmak; ...Nf6 ve ...d6’yı ertelemek.',
      '**Tempo kazanmak:** 9...Nxd4 ve 10...Ne7-c6 ile Beyaz vezirini merkezden kovalamak; 11...Rd8 ile d-hattını önceden kapatmak.',
      '**Piyonlarla savunmak:** Saldırı geldiğinde 19...f5 ve 20...f6 ile Beyazın filinin ve vezirinin çaprazlarını kapatmak; savunmayı taşlarla değil piyonlarla kurmak.',
      '**Malzemeyi geri vermek:** Kale fazlasıyla açgözlü olmamak; 23...Qxg7 ile veziri kale ve fil karşılığında verip saldırıyı bitirmek (motor 21...Kh8 22.Bxf8 Rxf8 ile daha da erken iadeyi öneriyordu).',
      '**g-hattını devralmak:** Vezirler gidince Tal’ın açtığı g-hattı Siyahın olur; ...Rg7 ve b7 filinin uzun çaprazı birlikte g2’ye yüklenir.',
      '**Bağ ve koordinasyon:** 31...Rxg2+ ile şahı f-hattına itmek, 32...Rf7! ile f6 atını şaha bağlamak ve 33...Ng4 ile bağlı ata bir kez daha saldırmak.',
    ] },
  },
  critical: [
    { move: '15w', title: '15.f5: piyon hücumu başlıyor', text: 'Tal piyon hücumunu hemen başlattı. Sands, Washington Times’taki yazısında 15.Qf2’nin (f-piyonunu ilerletmeye hazırlanan hamle) daha da güçlü olabileceğini yazıyor; motor da aynı görüşte: 15.Qf2 +0.68, maç hamlesi yaklaşık 0.00. Fark şu: Qf2 önce b6 karesine ve şah kanadına baskı kurar, f5 ise Siyaha ...O-O ile rahatça şahını kaçırma fırsatı verir.' },
    { move: '16w', title: '16.f6!? Tal tarzı fedanın kapısı', text: 'Tal f-piyonunu f6’ya sürer; 16...Bxf6 17.Rxf6 gxf6 ile kale verir ve g-hattını açar. Derinlik 20’de motor bunu tamamen sağlam buluyor (Motor: 0.00; 16.Qf2 −0.08, 16.Bg4 −0.14). Yani bu bir blöf değil, ama zorla kazanç da yok: Siyah doğru savunursa oyun dengede kalır. Sands, 17.Rxf6’yı “Beyazın gerçekçi olarak üstünlük için oynayabileceği tek yol” diye niteliyor.' },
    { move: '20b', title: '20...f6! tek kurtarıcı hamle', text: 'Beyaz fili g5’te vezire saldırıyor, 21.Rg3+ de geliyor. 20...f6! fili kovalar, g7’yi korur ve veziri yerinde bırakır (Motor: −0.32). 20...Rd7? 21.Bxe7 (+6.7) ve 20...Rfe8? 21.Rg3 Qxg5 22.Qxg5+ (+8.0) kaybeder. Savunma burada bir taşla değil, bir piyonla kurulur.' },
    { move: '21b', title: '21...fxe4?! gereksiz karmaşa', text: 'Motorun tercihi 21...Kh8 22.Bxf8 Rxf8: Siyah kaleyi geri verir ve iki piyon artı fil çifti yerine sağlam bir yapı alır (Motor: −0.23). Sands’in aktardığına göre 21...Rf7 ise 22.Bh5 ile karşılaşır ve kale yine kaybedilir; motor bunu doğruluyor (22.Bh5 +1.15). Maç hamlesi 22.Rg3+ ve 23.Bg7+! kombinasyonuna izin verdi (+0.85).' },
    { move: '23w', title: '23.Bg7+! Tal’ın hayal gücü', text: 'Fil g7’ye gelip şah çeker; Siyah veziriyle almak zorunda, çünkü 23...Kg8?? 24.Bxf6+ Kf7 25.Bh5 mattır. Sands, 23.Bxf8? Rxf8 24.Nxe4 Nd4 25.Bd3 Nf5 ile Beyazın düpedüz kötü olacağını yazıyor; motor da 23.Bxf8’i −2.75 görüyor. 23.Bg7+ ise veziri alır ve Beyazı hafif üstün bırakır (+0.70).' },
    { move: '30w', title: '30.Nxf6? g-hattını unutmak', text: 'At f6 piyonunu alır, ama e4 karesinden ayrılınca b7 filinin uzun çaprazı g2’ye kadar açılır ve f8 kalesi g-hattına geçer. Sands de 30.a4 gibi sakin bir hamleyi tercih ediyor; motor: 30.a4 +0.87, maç hamlesi sonrası 30...Rg7! ile −3.10. Dört puanlık bir dönüş tek hamlede geldi.' },
    { move: '30b', title: '30...Rg7! roller değişiyor', text: 'Kale g-hattına geçer; b7 fili ile birlikte g2’ye iki kez saldırır ve f6 atı da f8 kalesinin hâlâ altında. Sands’in deyişiyle “birden saldıran taraf Siyahtır.” Motor: 30...Rg7 −3.10, sonraki en iyi hamle 30...Rc7 0.00. 31.Ng4 Bxg2! ve 31.g3 Rgf7 de Beyazı kurtarmıyor.' },
    { move: '32b', title: '32...Rf7! bağ ve mat savunması', text: 'Şah f1’de, at f6’da: 32...Rf7! atı şaha bağlar, h7’deki mat tehdidini (Qxh7) kapatır ve 33...Rg6 ile ata ikinci kez saldırmayı hazırlar (Sands’in sıraladığı üç işlev). Motor: −4.90. 32...Rxf6+?? 33.Qxf6+ ise Beyaza kazandırırdı (+4.84).' },
  ],
  lessons: [
    'Kan varyantında Siyah ...Nf6’yı erteleyip ...Nxd4 ve ...Ne7-c6 gibi manevralarla Beyaz vezirini merkezden kovalayarak tempo kazanabilir; esneklik bu açılışın ruhudur.',
    'Piyon hücumundan önce taşları hazırlamak çoğu zaman daha güçlüdür: motorun 15.Qf2 tercihi, 15.f5’in Siyaha rahat rok fırsatı verdiğini gösterir.',
    'Saldırıya karşı en iyi savunma çoğu zaman bir piyon hamlesidir: 19...f5 ve 20...f6 saldıran taşların çaprazlarını tek hamlede kapattı.',
    'Kale fazlasına sarılmak yerine malzemeyi doğru anda geri vermek (21...Kh8 22.Bxf8 veya 23...Qxg7) saldırıyı söndürmenin en hızlı yoludur.',
    'Saldıranın açtığı hat savunanın da hattıdır: vezirler gidince g-hattı Siyahın kalelerine ve b7 filinin çaprazına geçti.',
    'Bir atın kritik bir çaprazı kapatma görevi varsa (e4 atı b7-g2 çaprazını kesiyordu), onu bir piyon için oradan ayırmak bütün dengeyi bozabilir.',
    'Şah ile bir taş aynı hatta durunca bağ (32...Rf7) ve bağlı taşa yeniden saldırmak (33...Ng4) en basit kazanç yöntemidir.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 0-1: Robert Hübner (Siyah) kazandı. 34...Rxg4 sonrası Siyahın iki kalesi f6’daki bağlı ata saldırıyor; at kaçamaz, çünkü f-hattında Beyaz şahı f1’de duruyor. Sands’in yazısında gösterildiği gibi 35.Ke1 Rg6 36.Qe3 Rgxf6 ile Siyah bir kale fazlasıyla kalır (Motor: −5.2), bu yüzden Tal terk etti.' },
    { q: 'Tal’ın 16.f6 ve 17.Rxf6 fedası doğru muydu?', a: 'Motor derinlik 20’de fedayı tamamen sağlam buluyor: 16.f6 0.00, 17.Rxf6 0.00, alternatifler 16.Qf2 −0.08 ve 16.Bg4 −0.14. Yani Tal kaybetmedi, sadece kazanma şansını riskli bir yoldan aradı. 17.Rxf6 yerine geri çekilmek ise kötüydü: 17.a4 −1.53, 17.Kh1 −2.00. Feda sonrası Siyahın yalnızca tek tük doğru hamlesi (18...Qe7, 19...f5, 20...f6) vardı; Hübner hepsini buldu.' },
    { q: 'Hübner neden 20...f6 oynamak zorundaydı?', a: 'Fil g5’ten veziri vuruyor ve kale d3’ten g3’e şah çekmeye hazırdı. 20...f6 fili kovalar, g7 karesini bir piyonla korur ve vezirin e7’de kalmasını sağlar (Motor: −0.32). Veziri kurtaran diğer hamleler g-hattını savunmasız bırakır: 20...Rfe8 21.Rg3 Qxg5 22.Qxg5+ (+8.0), 20...Rd7 21.Bxe7 (+6.7).' },
    { q: '21...fxe4 bir hata mıydı?', a: 'Kesin bir hata değil ama en iyi hamle de değildi. 21...Kh8 22.Bxf8 Rxf8 ile Siyah kaleyi geri verir ve sağlam bir oyun alırdı (Motor: −0.23). 21...fxe4 ise 22.Rg3+ Kh8 23.Bg7+! kombinasyonuna izin verdi ve Beyaz veziri kale ve fil karşılığında alıp hafif üstün oldu (+0.85). Sands’in aktardığına göre 21...Rf7 de 22.Bh5 ile kaleyi kaybettirirdi (Motor: +1.15).' },
    { q: 'Vezir için iki kale ve fil neden yeterliydi?', a: '24...Kxg7 sonrası Siyahın iki kalesi, fili ve atı Beyazın vezir, fil ve atına karşı duruyor; malzeme kâğıt üzerinde Siyah lehine, ama Siyahın şahı açık ve piyonları dağınık. Motor durumu +0.7 civarında görüyor: Beyaz biraz rahat ama kazanç yok. Kaleler birbirini koruduğu ve g-hattı açık olduğu sürece Siyahın kendi saldırı şansları da vardı; Sands de Siyahın “oyunu dengede tutacak kadar karşılığı” olduğunu yazıyor.' },
    { q: 'Tal’ın asıl hatası neydi?', a: '30.Nxf6? oldu. At e4’te b7 filinin uzun çaprazını kapatıyordu; f6’ya gidince b7-g2 çaprazı açıldı ve f8 kalesi 30...Rg7! ile g-hattına geldi (Motor: +0.87’den −3.10’a). Öncesindeki 29.Qh4?! da küçük bir yanlıştı: Sands’in aktardığına göre Hübner notlarında 29.Qb6 Rd7 30.a4’ü iki taraflı oyunla daha iyi buluyor (Motor: 29.Qb6 +0.88, 29.h3 +1.03, maç hamlesi +0.56).' },
    { q: '31.Qh6 yerine Beyaz ne oynamalıydı?', a: 'En dirençli yol 31.g3 idi (Motor: −3.30), sonra 31.Ng4 ve 31.Kf1 (−3.62). Sands’in aktardığı varyantlarda 31.Ng4 Bxg2! 32.Kxg2 Nxg4 33.Bxg4 Rxg4+! 34.Qxg4 Rg8 ile Siyah piyon oyunsonunu kazanır, 31.g3 Rgf7 32.Ne4 Rf1+! ile de kombinasyon gelir. 31.Qh6 ise g2’yi tamamen bıraktı: 31...Rxg2+ ile −4.96.' },
    { q: '32.Kh1 neden oynanamazdı?', a: '32.Kh1 Rg6+! 33.Ne4 Bxe4+ 34.Bf3 Bxf3 mattır (Sands’in verdiği varyant; motor da üç hamlede mat buluyor). Kale açık şaha şah çeker, g6 kalesi vezire de saldırır, e4’e araya giren at da b7 filiyle alınır. Bu yüzden şah f1’e gitmek zorundaydı ve orada f-hattında bağa düştü.' },
    { q: 'Hübner nasıl bu kadar soğukkanlı savunabildi?', a: 'Her kritik anda tek doğru hamleyi piyonlarla buldu: 18...Qe7 f6’yı korudu, 19...f5 e4’e saldırdı ve vezirin önünü kapattı, 20...f6 fili kovaladı. Ardından malzeme fazlasına sarılmak yerine 23...Qxg7 ile veziri verdi ve oyunu kalelerin rahat oynadığı bir duruma çevirdi. Sands, Hübner’in “klasik bir Tal saldırısını yalnızca püskürtmekle kalmayıp” oyunun yönünü tersine çevirdiğini yazıyor.' },
  ],
  notes: {
    '1w': {
      text: '1.e4: Tal’ın ömür boyu en sevdiği açılış hamlesi. Merkezi alır, vezir ve fil için çaprazlar açar.',
      amac: 'Hızlı gelişim ve açık oyun. Tal’ın tarzı taktik ve saldırıydı; açık merkezli pozisyonlar ona en uygun olanlardı.',
      neden: 'Hübner’in Sicilya repertuvarına karşı en keskin yol 1.e4’tür. Adaylar’a çıkmak için galibiyet arayan bir oyuncuya dengesiz, saldırı şansı veren oyunlar uygundur.',
      diger: [
        { move: '1.d4', text: 'Daha pozisyonel bir oyun; motor 1.e4 ile aynı düzeyde görüyor (Motor: +0.25), ama Tal’ın taktik gücünü daha az kullanır.' },
        { move: '1.Nf3', text: 'Esnek bir giriş (Motor: +0.22); Siyahın kuruluşunu görüp sonra karar verir.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini kanattan kontrol eder ve simetrik olmayan bir yapı kurar.',
      amac: 'Kazanmak için dengesiz bir oyun aramak: Siyah ileride c-hattını açıp vezir kanadında karşı oyun kurar.',
      neden: 'Hübner, Tal gibi bir saldırgan karşısında bile edilgen bir savunmaya razı olmadı. Sicilya, Siyaha kazanma şansı veren en güvenilir savunmadır.',
      diger: [
        { move: '1...e5', text: 'Açık oyun (Motor: +0.24); daha simetrik bir yapı verir, Tal’ın İspanyol veya İskoç bilgisine karşı oynamak gerekirdi.' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.35); daha kapalı, ama Siyahın beyaz kare fili uzun süre pasif kalır.' },
      ],
    },
    '2w': {
      text: '2.Nf3: At gelişir, d4 ilerleyişini hazırlar ve e5 karesini kontrol eder.',
      amac: 'Açık Sicilya’ya geçmek için 3.d4’ü hazırlamak.',
      neden: 'Ana yol budur; Tal Açık Sicilya’da hem çok deneyimliydi hem de bu yapılardaki saldırı fırsatlarını çok iyi bilirdi.',
      diger: [
        { move: '2.Nc3', text: 'Kapalı Sicilya’ya veya Grand Prix saldırısına gider (Motor: +0.35); daha az teori, ama daha az açık oyun.' },
        { move: '2.c3', text: 'Alapin: Beyaz önce c3 ile d4’ü destekler; daha sakin bir oyun.' },
      ],
    },
    '2b': {
      text: '2...e6: Kan ve Taimanov kuruluşlarının hamlesi. Siyah d5 karesini kontrol eder ve f8 filinin önünü açar.',
      amac: 'Esnek bir yapı: Siyah henüz ...d6 veya ...Nc6 ile kendini bağlamaz, piyonunu d5’e ve filini b4 veya c5’e göndermeyi seçenek olarak tutar.',
      neden: 'Bu sıra, Beyazın 3.Bb5 gibi Rossolimo kurgularını ve ...d6’dan sonraki bazı keskin varyantları atlar; Siyah hangi Sicilya’ya gireceğine kendisi karar verir.',
      diger: [
        { move: '2...Nc6', text: 'Klasik veya Sveşnikov yapılarına gider (Motor: +0.32); 3.Bb5 ile Rossolimo’ya izin verir.' },
        { move: '2...d6', text: 'Najdorf ve Dragon yollarına açılan hamle (Motor: +0.50); çok fazla ezber teori ister.' },
      ],
    },
    '3w': {
      text: '3.d4: Merkezi açar ve c5 piyonuna değişim teklif eder.',
      amac: 'Açık Sicilya: Beyaz merkezde bir piyon fazlası (e4 karşı d7-e6) ve gelişim hızı kazanır.',
      neden: 'Beyazın d-hattını ve hızlı gelişimini kullanmasının en direkt yoludur; Tal’ın saldırı için ihtiyaç duyduğu açık hatlar bu hamleyle gelir.',
      diger: [
        { move: '3.Nc3', text: 'Önce at gelişir, d4 ertelenir (Motor: +0.45); Siyaha ...a6 veya ...d5 ile başka yollar seçme imkânı verir.' },
        { move: '3.c3', text: 'Alapin yapısına geçiş; daha sakin ve daha az iddialı.' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah merkez piyonunu kenar piyonuyla değişir.',
      amac: 'Merkezde iki piyona (d7 ve e6) karşı bir piyonla kalmak; uzun vadede bu, Siyahın sağlam merkez avantajıdır.',
      neden: 'Neredeyse zorunlu: 3...a6 4.d5 (Motor: +0.73) veya 3...d5 4.exd5 exd5 5.Bb5+ (+0.88) ile Siyah merkezi Beyaza bırakır.',
      diger: [
        { move: '3...d5', text: '4.exd5 exd5 5.Bb5+ ile Siyah izole piyonlu bir yapıya düşer (Motor: +0.88).' },
      ],
    },
    '4w': {
      text: '4.Nxd4: At merkezde geri alır.',
      amac: 'Atı merkezde tutmak ve Nc3, Be2/Bd3 ile gelişimi sürdürmek.',
      neden: 'Doğal geri alış. 4.Qxd4 erken vezir çıkışı ...Nc6 ile tempo kaybettirir (Motor: +0.11).',
      diger: [
        { move: '4.Qxd4', text: '4...Nc6 ile vezir hemen kovalanır (Motor: +0.11); Beyaz gelişim avantajını kaybeder.' },
      ],
    },
    '4b': {
      text: '4...a6: Kan (Paulsen) varyantı. Siyah b5 karesini kontrol eder ve ...b5 ile ...Qc7 için yer hazırlar.',
      amac: 'Beyazın atlarının b5’e sıçramasını önlemek ve ...b5-...Bb7 ile vezir kanadında alan almak; ...Nf6 ve ...d6 hamlelerini mümkün olduğunca geç oynamak.',
      neden: 'ChessBase’in Kan yazısına göre bu kuruluş Sovyetler’de Ilya Kan’ın, Almanya’da Paulsen’in adını taşır ve Taimanov yapılarıyla sık sık iç içe geçer. Hamle Siyaha en fazla esneklik verir: hangi kuruluşa gireceğini Beyazın seçimine göre belirler.',
      diger: [
        { move: '4...Nc6', text: 'Taimanov varyantı (Motor: +0.42); at önce c6’ya gelir, ...a6 sonra oynanır.' },
        { move: '4...Nf6', text: '5.Nc3 ile Dört At veya Scheveningen yapıları (Motor: +0.42); Siyah daha erken bağlanır.' },
      ],
    },
    '5w': {
      text: '5.Nc3: At gelişir, e4’ü korur ve d5 karesini kontrol eder.',
      amac: 'Doğal gelişim; Beyaz şahını rok yapıp merkezi ve şah kanadını hazırlamak ister.',
      neden: 'En yaygın hamledir. Motor 5.Bd3 (+0.49) ve 5.c4’ü (Maroczy yapısı, +0.43) biraz daha iyi buluyor; ama Nc3 Tal’ın açık, taktik oyununa daha uygun.',
      diger: [
        { move: '5.Bd3', text: 'Kan’a karşı en ciddi kuruluşlardan biri (Motor: +0.49): Beyaz c4’ü açık tutar ve e4’ü filiyle korur.' },
        { move: '5.c4', text: 'Maroczy bağı (Motor: +0.43): d5 karesini kontrol eder ve Siyahın ...b5 planını engeller.' },
      ],
    },
    '5b': {
      text: '5...Qc7: Vezir c7’de e5 karesini kontrol eder ve c-hattına yerleşir.',
      amac: 'e5 karesini kontrol ederek Beyazın ileride e5 ile Nf6 atını kovalamasını önlemek; c3 atı ve c2 piyonuna c-hattından baskı kurmak.',
      neden: 'Kan’ın ana hamlesidir: ...Nf6’dan önce e5 karesini kontrol etmek, ...Nf6 sonrası e4-e5 ile tempo kaybını önler. 5...b5 de oynanır (+0.45), ama önce vezir daha esnektir.',
      diger: [
        { move: '5...b5', text: 'Hemen vezir kanadında genişlemek (Motor: +0.45); 6.Bd3 sonrası e4 sağlam korunur.' },
        { move: '5...Nc6', text: 'Taimanov’a geçiş (Motor: +0.50).' },
      ],
    },
    '6w': {
      text: '6.Be2: Sakin bir gelişim. Fil e2’de şah kanadını korur ve rok için yolu açar.',
      amac: 'Kısa rok, sonra f4 ve gerekirse Bf3 ile e4’ü korumak; şah kanadında piyon hücumuna hazırlanmak.',
      neden: 'Tal burada keskin teori yerine sağlam bir kuruluş seçti. Motor 6.Qf3’ü (+0.48) ve 6.Bd3’ü (+0.43) daha iddialı buluyor; Be2 ile fark küçük (+0.08), ama bu oyunlarda planlar hamle sırasından daha önemlidir.',
      diger: [
        { move: '6.Qf3', text: 'Vezir f3’te e4’ü korur ve Qg3 ile g7’ye bakar (Motor: +0.48); Siyahın ...b5-...Bb7 planını zorlaştırır.' },
        { move: '6.Bd3', text: 'Fil e4’ü korur, Qe2 ve f4 ile güçlü bir merkez kurulur (Motor: +0.43).' },
      ],
    },
    '6b': {
      text: '6...b5: Siyah vezir kanadında alan alır; fil b7’ye gelip e4’e baskı yapacak.',
      amac: '...Bb7 ile uzun çaprazı almak ve ...b4 ile c3 atını kovalama tehdidiyle e4 piyonunun bekçisini zayıflatmak.',
      neden: 'Be2’den sonra e4 yalnızca c3 atıyla korunuyor; bu yüzden ...b5-b4 tehdidi etkilidir. Motor 6...b5’i en iyi hamle olarak görüyor (+0.22); 6...Nf6 (+0.33) daha klasik.',
      diger: [
        { move: '6...Nf6', text: 'Klasik gelişim (Motor: +0.33); 7.O-O Be7 8.f4 ile Scheveningen tipi bir yapı oluşur.' },
        { move: '6...Nc6', text: '7.Nxc6 bxc6 ile Siyah piyon yapısını bozmaya razı olur (Motor: +0.37).' },
      ],
    },
    '7w': {
      text: '7.a3: ...b4 ilerleyişini önler; c3 atı yerinde kalır ve e4 korunur.',
      amac: 'Atı c3’te tutup e4’ü sağlamlaştırmak, sonra f4 ile şah kanadında alan almak.',
      neden: 'Doğrudan 7.O-O b4 8.Na4 (Motor: +0.49) de mümkündü, ama at kenarda kalır. Tal önce ...b4 tehdidini kesip merkezi sağlamlaştırmayı seçti. Motor 7.O-O’yu biraz daha iyi buluyor (+0.47’ye karşı a3 yaklaşık +0.2).',
      diger: [
        { move: '7.O-O', text: '7...b4 8.Na4 Bb7 ile at kenara gider ama Beyaz gelişimde öndedir (Motor: +0.49).' },
        { move: '7.Qd3', text: 'Vezir g3’e gitmeye hazırlanır (Motor: +0.28); 7...Bb7 8.Qg3 Qxg3 ile vezirler değişebilir.' },
      ],
    },
    '7b': {
      text: '7...Bb7: Fil uzun çapraza yerleşir ve e4’e baskı yapar.',
      amac: 'e4 piyonunu hedef almak ve ileride a8-h1 çaprazında Beyaz şahına bakmak; bu fil oyunun sonunda g2’ye yüklenen taş olacak.',
      neden: 'Doğal ve en iyi hamle (Motor: +0.03). 7...Nf6 (+0.20) e5 ile kovalanabilir; 7...Be7 (+0.39) e4’e baskıyı geciktirir.',
      diger: [
        { move: '7...Nf6', text: '8.f4 Bb7 9.Bf3 ile Beyaz e4’ü korur (Motor: +0.20); e4-e5 tehdidi de her zaman var.' },
        { move: '7...Be7', text: '8.Qd3 Bb7 9.Qg3 ile vezir g7’ye bakar (Motor: +0.39).' },
      ],
    },
    '8w': {
      text: '8.f4: Beyaz e5 karesini kontrol eder, e4’ü destekler ve f5 ile piyon hücumuna hazırlanır.',
      amac: 'Şah kanadında alan almak ve ileride f4-f5 ile Siyahın e6 piyonunu ve şahını hedef almak.',
      neden: 'Motor 8.f4’ü en iyi hamle olarak görüyor (+0.10). Bu hamle Tal’ın bütün planının temelidir: f-piyonu f6’ya kadar yürüyecek. Aynı zamanda e4-e5 seçeneğiyle Siyahın ...Nf6’sını caydırır.',
      diger: [
        { move: '8.Qd3', text: 'Önce vezir gelişir (Motor: −0.01); 8...Nf6 9.f4 Nc6 ile benzer yapılar.' },
        { move: '8.O-O', text: '8...Nf6 9.Qd3 Be7 10.f4 (Motor: −0.16); hamle sırası Siyaha ...Nf6 için zaman verir.' },
      ],
    },
    '8b': {
      text: '8...Nc6: At c6’ya gelir ve d4 atına baskı yapar.',
      amac: 'd4 atını değiştirmeye zorlamak ve Beyaz vezirini merkeze çekip sonra tempo ile kovalamak.',
      neden: '8...Nf6 9.e5 ile at kovalanırdı (Motor: +0.03, ama oyun Beyazın istediği yöne gider). 8...Nc6 merkezde gerilim yaratır ve motorun ilk tercihi (+0.02).',
      diger: [
        { move: '8...Nf6', text: '9.e5 Nd5 10.Nxd5 Bxd5 ile Siyah sağlam kalır ama e5 piyonu alan kazandırır (Motor: +0.03).' },
        { move: '8...Be7', text: '9.O-O Nf6 10.e5 Ne4 ile karmaşık oyun (Motor: +0.14).' },
      ],
    },
    '9w': {
      text: '9.Be3: Fil d4 atını destekler ve kara karelerde gelişir.',
      amac: 'd4 atını korumak, uzun rok veya kısa rok seçeneklerini açık tutmak ve fili ileride b6 veya g5-h6 yönüne kullanmak.',
      neden: '9.Nb3 (Motor: +0.14) değişimden kaçınır ama atı merkezden uzaklaştırır. Be3 gelişimi tamamlar; Siyah 9...Nxd4 ile alırsa vezir merkeze gelir.',
      diger: [
        { move: '9.Nb3', text: '9...Na5 10.Nxa5 Qxa5 ile Siyah rahat gelişir (Motor: +0.14).' },
        { move: '9.Nxc6', text: '9...Bxc6 ile Siyahın fili c6’dan e4’e baskıyı artırır; Beyaz için iyi bir değişim değil.' },
      ],
    },
    '9b': {
      text: '9...Nxd4: Siyah d4 atını alır; Beyaz veziriyle geri alacak.',
      amac: 'Beyaz vezirini merkeze çekip ...Ne7-c6 ile tempo kazanarak kovalamak.',
      neden: 'Kan’ın tipik fikri budur: vezir d4’te güçlü görünür ama ...Nc6 ile kovalanır. Motor 9...Be7’yi (+0.06) biraz daha iyi buluyor, ama Hübner’in planı tutarlı (+0.26).',
      diger: [
        { move: '9...Be7', text: '10.O-O Nxd4 11.Bxd4 ile benzer yapılar, Siyah rok için zaman kazanır (Motor: +0.06).' },
        { move: '9...Na5', text: 'At b3 karesine gitmeyi ve c4’ü hedef alır (Motor: +0.12).' },
      ],
    },
    '10w': {
      text: '10.Qxd4: Vezir merkeze gelir ve g7’ye bakar.',
      amac: 'Vezir merkezden g7 piyonuna ve uzun çapraza baskı kurar; Beyaz gelişimini O-O veya O-O-O ile tamamlayacak.',
      neden: '10.Bxd4 Qxf4 ile bir piyon kaybettirir (Motor: −0.18). Vezirle almak zorunludur; tempo kaybı riski olsa da Beyaz gelişimde öndedir.',
      diger: [
        { move: '10.Bxd4', text: '10...Qxf4 ile Siyah f4 piyonunu alır (Motor: −0.18).' },
      ],
    },
    '10b': {
      text: '10...Ne7: At e7’ye gelir; buradan c6’ya dönüp vezire saldıracak veya f5’e gidebilecek.',
      amac: 'Tempo kazanmak: at c6’ya gelince vezir yeniden kaçmak zorunda kalır. Aynı zamanda ...Nf6’ya karşı e4-e5 tehdidinden kaçınılır.',
      neden: 'Motor 10...Rc8’i (+0.17) biraz daha iyi buluyor; 10...Nf6 ise 11.Bf3 veya e5 tehditleriyle karşılaşır (+0.32 ile +0.57 arası). Hübner’in hamlesi yavaş ama tutarlı (+0.47).',
      diger: [
        { move: '10...Rc8', text: 'c-hattını açık tutar; 11.Bf3 Be7 12.O-O-O Nf6 ile dengeli (Motor: +0.17).' },
        { move: '10...Nf6', text: '11.Bf3 ile e4 korunur, e5 tehdidi atı rahatsız eder (Motor: +0.32).' },
      ],
    },
    '11w': {
      text: '11.Rd1: Kale d-hattına gelir; d7 piyonuna ve ileride d6 karesine baskı yapar.',
      amac: 'Merkezi açmaya hazır olmak (e4-e5 sonrası d-hattı) ve kısa rokla şahı kanada götürüp f-piyonunu ilerletmek.',
      neden: 'Tal kısa rok yapıp f-hattını kullanmak istediği için uzun rok yerine Rd1’i seçti. Motor 11.O-O-O’yu da eşit buluyor (+0.53): 11...Nc6 12.Qb6 ile vezir değişimi Beyaz lehine.',
      diger: [
        { move: '11.O-O-O', text: '11...Nc6 12.Qb6 Qxb6 13.Bxb6 ile Beyaz rahat bir oyunsonu alır (Motor: +0.53).' },
        { move: '11.Bf3', text: 'e4’ü korur; 11...Rc8 12.O-O-O Nc6 13.Qb6 (Motor: +0.43).' },
      ],
    },
    '11b': {
      text: '11...Rd8: Siyah rok yapmadan d-hattını ve d7 piyonunu korur.',
      amac: 'd-hattındaki baskıyı önceden karşılamak ve ...d6 veya ...d5 seçeneklerini hazırlamak.',
      neden: 'Rd1’in d7’ye baskısına doğal bir cevap. Motor 11...Rc8’i (+0.47) ve 11...Nc6’yı (+0.51) biraz daha iyi buluyor; 11...Rd8 ile Siyah kısa roka bağlanır ve h8 kalesi oyun dışında kalabilir.',
      diger: [
        { move: '11...Rc8', text: 'c-hattına baskı; 12.f5 e5 13.Qd3 ile keskin oyun (Motor: +0.47).' },
        { move: '11...Nc6', text: 'Hemen veziri kovalar; 12.Qd2 Be7 13.O-O Rd8 ile oyundakine benzer (Motor: +0.51).' },
      ],
    },
    '12w': {
      text: '12.O-O: Beyaz kısa rok yapar; f1 kalesi f-hattında f4-f5 hücumunu destekleyecek.',
      amac: 'Şahı güvenliğe almak ve f-hattında kaleyi piyonun arkasına koymak.',
      neden: 'Motorun ilk tercihi (+0.62). 12.Bh5 veya 12.h4 gibi saldırı hamleleri şah merkezde iken erkendi (+0.22, +0.16).',
      diger: [
        { move: '12.Bh5', text: 'f7’ye baskı ama şah merkezde kalır (Motor: +0.22).' },
        { move: '12.h4', text: 'h-piyonu hücumu; 12...d5 ile merkez açılır (Motor: +0.16).' },
      ],
    },
    '12b': {
      text: '12...Nc6: At c6’ya gelir ve vezire saldırır; planlanan tempo kazanılır.',
      amac: 'Vezirin d4’teki güçlü yerini bozmak ve atı merkezde e5 ve d4 karelerine bakan iyi bir kareye koymak.',
      neden: '10...Ne7’nin mantıklı devamı ve motorun ilk tercihi (+0.64). 12...d5 13.f5 ile merkez Beyaz lehine açılır (+1.14).',
      diger: [
        { move: '12...d5', text: '13.f5 dxe4 14.fxe6 fxe6 15.Bh5+ ile Siyahın şahı tehlikeye düşer (Motor: +1.14).' },
        { move: '12...Ng8', text: 'At f6’ya yönelir ama bu çok yavaş (Motor: +1.20).' },
      ],
    },
    '13w': {
      text: '13.Qd2: Vezir d2’ye çekilir; d-hattında kale ile birlikte kalır.',
      amac: 'Veziri güvenli bir kareye koymak ve sonra e1 üzerinden şah kanadına (f2, g3, h4) götürmek.',
      neden: 'Motor 13.Qd3’ü biraz daha iyi buluyor (+0.67): 13...Be7 14.Nd5!? exd5 15.exd5 ile Beyaz tipik bir at fedasıyla e-hattını açar. Tal daha yavaş ama şah kanadı saldırısına yönelik planı seçti (+0.57).',
      diger: [
        { move: '13.Qd3', text: '13...Be7 14.Nd5 exd5 15.exd5 ile Beyaz parça feda edip e-hattını açar (Motor: +0.67).' },
        { move: '13.Qb6', text: 'Vezir değişimini zorlar; 13...Qxb6 14.Bxb6 Rc8 ile eşit oyun (Motor: +0.24).' },
      ],
    },
    '13b': {
      text: '13...Be7: Fil e7’ye gelişir; Siyah kısa roka hazırlanır.',
      amac: 'Gelişimi tamamlayıp şahı güvenliğe almak; fil e7’den g5 ve f6 karelerini korur.',
      neden: 'Motorun ilk tercihi (+0.52). 13...Rc8 (+0.78) fili geride bırakır, Siyah rokunu geciktirir.',
      diger: [
        { move: '13...Rc8', text: '14.Rf3 Be7 15.Rh3 ile Beyazın kalesi şah kanadına gelir (Motor: +0.78).' },
        { move: '13...Ra8', text: 'Kaleyi geri çekmek tempo kaybıdır (Motor: +1.07).' },
      ],
    },
    '14w': {
      text: '14.Qe1: Vezir e1’e gelir; f2, g3 ve h4 karelerine yol açılır.',
      amac: 'Veziri şah kanadına taşımak; Qf2 ile b6 karesine ve f-hattına, Qg3 veya Qh4 ile g7 ve h7’ye baskı.',
      neden: 'Motorun ilk tercihi (+0.51). Bu klasik bir Sicilya manevrasıdır: vezir d2’den e1 üzerinden şah kanadına geçer. 14.Nd5 (+0.39) parça fedası olarak hâlâ mümkündü ama daha az net.',
      diger: [
        { move: '14.Nd5', text: '14...exd5 15.exd5 Qc8 16.dxc6 ile karmaşık bir oyun (Motor: +0.39).' },
        { move: '14.Kh1', text: 'Önleyici şah hamlesi, sonra Qe1 (Motor: +0.32).' },
      ],
    },
    '14b': {
      text: '14...d6: Merkez sağlamlaşır; e5 karesi kontrol edilir ve c8-h3 çaprazı açılır.',
      amac: 'Scheveningen tipi “küçük merkez” kurmak: d6 ve e6 piyonları birlikte Beyazın e4-e5 ve f4-f5 hamlelerine karşı sağlam bir duvar oluşturur.',
      neden: 'Motor önce 14...O-O’yu (+0.48) tercih ediyor; 14...d6 sonrası en iyi devam 15.Qf2 ile Beyaz +0.73’e çıkabilirdi. ...d6 aynı zamanda e6’yı tek piyonla korunur hâle getirip 15.f5 fikrini çekici kıldı; ama maçta oynanan f5 bu fırsatı kullanmadı.',
      diger: [
        { move: '14...O-O', text: '15.Qf2 Qc8 16.Bb6 ile Beyaz biraz baskı kurar (Motor: +0.48).' },
        { move: '14...Rb8', text: '15.Qf2 O-O 16.e5 f6 ile karmaşık oyun (Motor: +0.57).' },
      ],
    },
    '15w': {
      text: '15.f5: Piyon hücumu başlar. Beyaz e6’ya baskı yapar ve f6 ilerleyişini hazırlar.',
      amac: 'Siyahın şahı rok yapmadan önce e6’yı zayıflatmak, rok yaptıktan sonra da f6 ile g7’yi hedef almak.',
      neden: 'Sands Washington Times yazısında 15.Qf2’nin (f-piyonunu ilerletmeye hazırlanan hamle) daha da güçlü olabileceğini belirtiyor; motor da aynı fikirde: 15.Qf2 +0.68, maç hamlesi yaklaşık 0.00. f5, Siyaha 15...O-O ile şahı hemen kaçırma fırsatı verdi.',
      diger: [
        { move: '15.Qf2', text: '15...Qb8 16.Bb6 Rd7 17.Rd3 ile Beyaz vezir kanadında ve merkezde baskı kurar (Motor: +0.68).' },
        { move: '15.Rf3', text: 'Kaleyi g3 veya h3 için hazırlar; 15...O-O 16.Qf2 (Motor: +0.57).' },
      ],
    },
    '15b': {
      text: '15...O-O: Siyah kısa rok yapar; şah artık g8’de.',
      amac: 'Şahı merkezden çıkarmak; f-hattının açılma ihtimaline karşı f8 kalesini oyuna sokmak.',
      neden: 'Tek iyi hamle: 15...Ne5 16.Qf2 (+1.01) ve 15...Bf6 16.Qf2 (+1.45) Siyahı zor duruma sokar. Rok, f6 hücumunun hedefini yaratır ama şah merkezde daha da tehlikede kalırdı.',
      diger: [
        { move: '15...Ne5', text: '16.Qf2 Rd7 17.fxe6 fxe6 ile e6 zayıflar (Motor: +1.01).' },
        { move: '15...Bf6', text: '16.Qf2 O-O 17.Bb6 ile Beyaz baskısı artar (Motor: +1.45).' },
      ],
    },
    '16w': {
      text: '16.f6!? Tal piyonu f6’ya sürer; e7 filine saldırır ve g7’nin önünü açmaya çalışır.',
      amac: 'Siyahın şah kanadını yarmak: 16...Bxf6 17.Rxf6 gxf6 ile g-hattı ve h6, g5 kareleri Beyazın taşlarına açılır.',
      neden: 'Tipik Tal: malzeme yerine inisiyatif. Motor derinlik 20’de bu fedayı tamamen sağlam görüyor (Motor: 0.00), alternatifler 16.Qf2 −0.08 ve 16.Bg4 −0.14. Yani Tal hiçbir şey kaybetmedi; ama zorla kazanç da yoktu.',
      diger: [
        { move: '16.Qf2', text: '16...Qc8 17.Bb6 Rde8 18.Qg3 ile yavaş baskı (Motor: −0.08).' },
        { move: '16.Bg4', text: '16...Ne5 17.Qg3 Nxg4 18.Qxg4 ile beyaz kare fil değişir (Motor: −0.14).' },
      ],
    },
    '16b': {
      text: '16...Bxf6: Siyah piyonu filiyle alır.',
      amac: 'g7 piyonunu yerinde tutup şahın önündeki yapıyı korumak.',
      neden: 'Motorun ilk tercihi (0.00). 16...gxf6 17.Bh6 Kh8 18.Bxf8 ile kale kaybedilir (+0.31); 16...d5? ise 17.fxe7 ile bir taş kaybettirir (+4.63).',
      diger: [
        { move: '16...gxf6', text: '17.Bh6 Kh8 18.Bxf8 Rxf8 ile Siyah kaleyi kaybeder (Motor: +0.31).' },
        { move: '16...d5', text: '17.fxe7 Nxe7 ile Siyah bir taş kaybeder (Motor: +4.63).' },
      ],
    },
    '17w': {
      text: '17.Rxf6!: Tal kaleyi fil ve piyon karşılığında verir; g7 piyonu f6’ya çekilir ve g-hattı açılır.',
      amac: 'Siyah şahının önünü açmak; Qh4, Bh6 ve Rd3-g3 ile saldırı kurmak.',
      neden: 'Sands bu hamleyi “Beyazın üstünlük için oynayabileceği gerçekçi tek yol” diye niteliyor. Motor da aynı: 17.Rxf6 0.00, geri çekilmek ise kötü: 17.a4 −1.53, 17.Kh1 −2.00.',
      diger: [
        { move: '17.a4', text: '17...b4 18.Rxf6 gxf6 19.Na2 ile Beyaz bir tempo kaybeder (Motor: −1.53).' },
        { move: '17.Kh1', text: '17...Be5 ile fil merkezde güçlü olur; Beyaz bir piyon eksiktir (Motor: −2.00).' },
      ],
    },
    '17b': {
      text: '17...gxf6: Zorunlu geri alış.',
      amac: 'Kaleyi almak: Siyah artık kalite önde (fil karşılığında kale), Beyazın ise bir piyon fazlası ve açık g-hattı var.',
      neden: '17...b4? 18.axb4 gxf6 (+2.01) ve 17...d5? (+4.10) sadece zarar verir. Kale fazlası Siyahın; şimdi tek iş saldırıya dayanmak.',
      diger: [
        { move: '17...b4', text: '18.axb4 gxf6 19.Bh6 ile Beyaz hem saldırı hem malzeme kazanır (Motor: +2.01).' },
      ],
    },
    '18w': {
      text: '18.Qh4: Vezir h4’te f6 piyonuna ve h7’ye saldırır.',
      amac: 'f6 piyonunu alıp g7’ye ve h8’e mat tehditleri kurmak; Bh6 ve Rd3-g3 ile saldırıyı tamamlamak.',
      neden: 'Motor 18.Bh6’yı (+0.11) ve 18.Qh4’ü (0.00) yaklaşık eşit buluyor. Qh4 en doğal hamle: f6’ya hemen saldırır ve Siyahı savunma hamleleri yapmaya zorlar.',
      diger: [
        { move: '18.Bh6', text: '18...Kh8 19.Qh4 Qe7 20.Rd3 ile benzer saldırı (Motor: +0.11).' },
        { move: '18.Qf2', text: '18...Qe7 19.Bh6 Kh8 20.Bxf8 ile Beyaz kaleyi geri alır (Motor: −0.19).' },
      ],
    },
    '18b': {
      text: '18...Qe7!: Vezir e7’de f6 piyonunu korur ve h4-d8 çaprazını kapatır.',
      amac: 'f6’yı korumak ve vezirle birlikte g7 ve h7’yi savunmak.',
      neden: 'Sands bu hamleyi ünlem işaretiyle veriyor. Motor 18...Ne5 19.Qxf6 Nd7 (0.00) ile eşit buluyor; 18...h5? ise 19.Rf1 ile kaybeder (+4.47). Qe7 en sağlam seçenek.',
      diger: [
        { move: '18...Ne5', text: '19.Qxf6 Nd7 20.Qh4 f6 ile Siyah piyonu verip taşla savunur (Motor: 0.00).' },
        { move: '18...h5', text: '19.Rf1 Ne5 20.Qxf6 ile Beyazın saldırısı tamamlanır (Motor: +4.47).' },
      ],
    },
    '19w': {
      text: '19.Rd3: Kale üçüncü yatayda g3 veya h3’e geçmeye hazırlanır.',
      amac: 'İkinci kaleyi saldırıya sokmak; Rg3+ ile g-hattında şah çekmek.',
      neden: 'Motor 19.Bh6’yı (0.00) biraz daha iyi buluyor; Rd3 Siyaha 19...f5 ile zaman verdi (−0.32). Tal kale ile saldırıyı hızlandırmak istedi.',
      diger: [
        { move: '19.Bh6', text: '19...Kh8 20.Rd3 f5 21.Qxe7 ile Beyaz kaleyi geri alır (Motor: 0.00).' },
        { move: '19.Rf1', text: '19...f5 20.Bg5 f6 21.Bh6 ile benzer (Motor: −0.82).' },
      ],
    },
    '19b': {
      text: '19...f5!: Piyon f5’e ilerler; e4’e saldırır ve f6 karesini boşaltır.',
      amac: 'Beyaz vezirinin f6 hedefini ortadan kaldırmak ve e4 piyonuna saldırarak Beyazı savunmaya zorlamak.',
      neden: 'Tek iyi hamle: 19...Ne5 20.Bd4 Nxd3 21.Bxf6 ile Beyaz kazanır (+1.20); 19...Rfe8 20.Bd4 (+5.24). f5 hem savunur hem karşı saldırı yapar (Motor: −0.37).',
      diger: [
        { move: '19...Ne5', text: '20.Bd4 Nxd3 21.Bxf6 Qxf6 ile Beyaz kaleyi geri alır ve saldırı devam eder (Motor: +1.20).' },
        { move: '19...Rfe8', text: '20.Bd4 Ne5 21.Rh3 Ng6 ile Beyaz kazanır (Motor: +5.24).' },
      ],
    },
    '20w': {
      text: '20.Bg5: Fil vezire saldırır; Rg3 tehdidi de var.',
      amac: 'Veziri e7’den kovalayıp g-hattına ve f6 karesine baskı kurmak.',
      neden: 'Tek iyi hamle (Motor: −0.32). 20.Bf2 Qxh4 (−1.46) ve 20.Qf2 Kh8 (−1.61) Beyazın saldırısını bitirir.',
      diger: [
        { move: '20.Bf2', text: '20...Qxh4 21.Bxh4 f4 ile vezirler değişir ve Siyah kale fazlasıyla kalır (Motor: −1.46).' },
        { move: '20.Qf2', text: '20...Kh8 21.exf5 f6 ile Siyah sağlamlaşır (Motor: −1.61).' },
      ],
    },
    '20b': {
      text: '20...f6!: Piyon fili kovalar ve g7 karesini korur.',
      amac: 'Fili g5’ten kovalamak, g7’yi korumak ve veziri e7’de tutmak.',
      neden: 'Tek kurtarıcı hamle (Motor: −0.32). 20...Rd7? 21.Bxe7 (+6.73) ve 20...Rfe8? 21.Rg3 Qxg5 22.Qxg5+ (+8.02) kaybeder. Bu hamle Hübner’in savunmasının kilit noktası.',
      diger: [
        { move: '20...Rfe8', text: '21.Rg3 Qxg5 22.Qxg5+ Kf8 ile Beyaz kazanır (Motor: +8.02).' },
        { move: '20...Rd7', text: '21.Bxe7 Nxe7 22.Rh3 ile Beyaz vezir kazanır (Motor: +6.73).' },
      ],
    },
    '21w': {
      text: '21.Bh6: Fil h6’ya gelir ve f8 kalesine saldırır.',
      amac: 'Kaleyi geri almak veya Siyahı kaleyi korumaya zorlamak; aynı zamanda g7 ve f8 karelerini kontrol etmek.',
      neden: 'Tek iyi hamle (Motor: −0.23). 21.Bd2 (−2.30) ve 21.Bf4 (−2.63) filin baskısını kaybeder.',
      diger: [
        { move: '21.Bd2', text: '21...Ne5 22.Rg3+ Kh8 ile Siyah sağlam kalır (Motor: −2.30).' },
        { move: '21.Bf4', text: '21...Ne5 22.Re3 Kh8 ile Siyah üstün (Motor: −2.63).' },
      ],
    },
    '21b': {
      text: '21...fxe4?!: Siyah e4’ü alır ve f8 kalesini savunmasız bırakır.',
      amac: 'Bir piyon daha kazanmak ve Beyazın c3 atını kovalamak; ama f8 kalesi tehlikede kalır.',
      neden: 'Motor 21...Kh8 22.Bxf8 Rxf8’i öneriyor (−0.23): Siyah kaleyi geri verir ve sağlam kalır. Sands’in aktardığına göre 21...Rf7 22.Bh5 ile kaleyi kaybettirir (Motor: +1.15). fxe4 ise 22.Rg3+ ve 23.Bg7+! kombinasyonuna izin verdi (+0.85).',
      diger: [
        { move: '21...Kh8', text: '22.Bxf8 Rxf8 23.exf5 Ne5 ile Siyah kaleyi geri verir ve dengeli oyun alır (Motor: −0.23).' },
        { move: '21...Rf7', text: '22.Bh5 Rg7 23.Bxg7 Kxg7 24.Rg3+ ile kale kaybedilir (Motor: +1.15).' },
      ],
    },
    '22w': {
      text: '22.Rg3+: Kale g-hattından şah çeker.',
      amac: 'Siyah şahını h8’e zorlamak ve Bg7+ kombinasyonunu hazırlamak.',
      neden: 'Tek iyi hamle (Motor: +0.82). 22.Nxe4 Ne5 23.Rg3+ Ng6 (−0.44) Siyaha savunma zamanı verir.',
      diger: [
        { move: '22.Nxe4', text: '22...Ne5 23.Rg3+ Ng6 24.Bxf8 ile karmaşık oyun, Siyah biraz önde (Motor: −0.44).' },
      ],
    },
    '22b': {
      text: '22...Kh8: Zorunlu şah hamlesi.',
      amac: 'Şahı tek güvenli kareye kaçırmak.',
      neden: '22...Qg7 23.Rxg7+ mat ile biter; 22...Kf7 23.Bh5 mattır. h8 tek karedir.',
    },
    '23w': {
      text: '23.Bg7+!: Fil g7’ye gelir; Siyah veziriyle almak zorunda.',
      amac: 'Veziri kale ve fil karşılığında almak; Siyahın kale fazlasını ortadan kaldırmak.',
      neden: 'Sands bunu Tal’ın “tükenmez hayal gücü” diye övüyor. 23.Bxf8? Rxf8 24.Nxe4 Nd4 25.Bd3 Nf5 ile Beyaz kötü (Motor: −2.75). Bg7+ ise vezir kazanır (+0.70).',
      diger: [
        { move: '23.Bxf8', text: '23...Rxf8 24.Nxe4 Nd4 25.Bd3 Nf5 ile Siyahın taşları aktif (Motor: −2.75).' },
        { move: '23.Nxe4', text: '23...Nd4 24.Bg7+ Qxg7 25.Rxg7 ile benzer ama daha az iyi (Motor: −0.10).' },
      ],
    },
    '23b': {
      text: '23...Qxg7: Zorunlu; Siyah veziri verir.',
      amac: 'Mattan kurtulmak; vezir karşılığında kale ve fil almak.',
      neden: '23...Kg8?? 24.Bxf6+ Kf7 25.Bh5 mattır (Sands bunu “estetik bir mat” diye niteliyor). Qxg7 tek hamle.',
    },
    '24w': {
      text: '24.Rxg7: Beyaz veziri alır.',
      amac: 'Vezir fazlasıyla saldırıyı sürdürmek.',
      neden: 'Zorunlu geri alış; 24.Nd5 (−4.76) veya 24.Bxb5 (−6.14) kale ile veziri kaybettirir.',
    },
    '24b': {
      text: '24...Kxg7: Şah kaleyi alır.',
      amac: 'Malzemeyi dengelemek: iki kale, fil ve at karşı vezir, fil ve at.',
      neden: 'Zorunlu: 24...h5 25.Rxb7 ile mat tehdidi gelir, 24...e3 25.Qxh7 mattır. Şimdi Siyahın şahı açık ama malzeme dengesi var (Motor: +0.95).',
    },
    '25w': {
      text: '25.Nxe4: At e4 piyonunu alır ve merkeze gelir.',
      amac: 'Piyonu geri almak ve atı d6, f6 veya g5’e baskı yapabilecek bir kareye koymak; aynı zamanda b7 filinin çaprazını kapatmak.',
      neden: 'Motor 25.Qg4+ Kh8 26.Qxe6’yı (+0.95) biraz daha iyi buluyor; Sands’in aktardığına göre Hübner notlarında bu durumda f-piyonu ilerleyişinin Beyaza gerçek sorunlar çıkaracağını yazıyor. 25.Qxe4 (+0.72) de mümkün.',
      diger: [
        { move: '25.Qg4+', text: '25...Kh8 26.Qxe6 Ne5 27.Bh5 ile Beyaz e6 piyonunu alır (Motor: +0.95).' },
        { move: '25.Qxe4', text: '25...e5 26.Bf3 ile vezir merkezde güçlü (Motor: +0.72).' },
      ],
    },
    '25b': {
      text: '25...Ne5: At e5’e gelir; merkezde güçlü bir karedir.',
      amac: 'Atı merkezde konumlandırmak ve f3, d3, g4 karelerini kontrol etmek; ileride g6 veya g4’e geçmek.',
      neden: 'Motor 25...Nd4’ü (+0.59) yaklaşık eşit buluyor. Ne5 atı şah kanadına yakın tutar ve savunmaya katkı sağlar (+0.65).',
      diger: [
        { move: '25...Nd4', text: '26.Bd3 Nf5 27.Qh5 Bxe4 ile at f5’te şahı savunur (Motor: +0.59).' },
        { move: '25...Ne7', text: '26.Nxd6 ile Beyaz bir piyon daha alır (Motor: +0.91).' },
      ],
    },
    '26w': {
      text: '26.Ng3: At g3’e çekilir ve h5 veya f5’e gitmeye hazırlanır.',
      amac: 'Atı şah kanadına taşıyıp f6 piyonuna ve Siyah şahına baskı yapmak.',
      neden: 'Motorun ilk tercihi (+0.67). 26.Bd3 Nxd3 (+0.10) ve 26.Nf2 (+0.02) Beyazın baskısını azaltır. Ama at e4’ten ayrılınca b7 filinin çaprazı yavaşça açılmaya başlar.',
      diger: [
        { move: '26.Bd3', text: '26...Nxd3 27.cxd3 Bxe4 ile Siyah atı değişir ve rahatlar (Motor: +0.10).' },
        { move: '26.Nf2', text: '26...Rf7 27.a4 Rc8 ile dengeli (Motor: +0.02).' },
      ],
    },
    '26b': {
      text: '26...Ng6: At g6’ya gelir; şahı savunur.',
      amac: 'Atı h4, f4 ve e5 karelerini kontrol eden bir savunma karesine koymak.',
      neden: 'Motor 26...Kh8’i (+0.78) ve 26...Rc8’i (+0.79) yaklaşık eşit buluyor. Ng6 savunmacı bir hamle; Beyazın Nh5+ ve Qh4 tehditlerine karşı şahı korur (+0.83).',
      diger: [
        { move: '26...Kh8', text: '27.a4 Rf7 28.axb5 axb5 ile Siyah şahını köşeye alır (Motor: +0.78).' },
        { move: '26...Rc8', text: '27.c3 Kh8 28.a4 Bd5 ile c-hattına baskı (Motor: +0.79).' },
      ],
    },
    '27w': {
      text: '27.Qd4: Vezir d4’e gelir; f6 piyonuna ve uzun çapraza bakar.',
      amac: 'f6 piyonuna baskı kurmak ve uzun a1-h8 çaprazından Siyah şahını hedef almak.',
      neden: 'Motor 27.Qb4’ü (+0.79) biraz daha iyi buluyor: vezir hem d6 piyonuna hem b5’e bakar. Qd4 merkezi bir kare, ama fark küçük (+0.69).',
      diger: [
        { move: '27.Qb4', text: '27...Rf7 28.a4 f5 29.Qd4+ ile Beyaz iki kanatta baskı kurar (Motor: +0.79).' },
        { move: '27.Nh5+', text: '27...Kh8 28.Qb4 Rf7 ile at h5’te aktif (Motor: +0.72).' },
      ],
    },
    '27b': {
      text: '27...Kh8: Şah h8’e çekilir ve g-hattını kalelere bırakır.',
      amac: 'Uzun çaprazdan çıkmak ve ileride ...Rg8 veya ...Rg7 ile g-hattını kullanmak.',
      neden: 'Motor 27...Kf7’yi (+0.75) biraz daha iyi buluyor; şah f7’de merkeze yakın kalır. Kh8 ise şahı uzun çapraz dışına alır ve g-hattını kalelere bırakır; bu ileride kritik olacak (+0.86).',
      diger: [
        { move: '27...Kf7', text: '28.a4 bxa4 29.Qxa4 Ke7 ile şah merkeze gelir (Motor: +0.75).' },
        { move: '27...Ne5', text: '28.a4 Bc6 29.a5 ile Beyaz vezir kanadında alan alır (Motor: +0.91).' },
      ],
    },
    '28w': {
      text: '28.Nh5: At f6 piyonuna saldırır.',
      amac: 'f6 piyonunu kazanmak ve Siyah şahının etrafındaki kareleri kontrol etmek.',
      neden: 'Motor 28.a4’ü (+0.83) tercih ediyor: vezir kanadını açmak Beyazın yapısal üstünlüğünü kullanır. Nh5 doğrudan ama atı kenara götürür (+0.71).',
      diger: [
        { move: '28.a4', text: '28...bxa4 29.Bg4 Bc8 30.Nh5 ile Beyaz iki kanatta oynar (Motor: +0.83).' },
        { move: '28.Bg4', text: '28...Bd5 29.Nh5 Ne5 ile fil aktif (Motor: +0.73).' },
      ],
    },
    '28b': {
      text: '28...Ne5: At e5’e döner; f6’yı dolaylı olarak korur ve f3’ü kontrol eder.',
      amac: 'Atı merkeze geri getirmek ve Beyazın g4, f3 karelerine baskı yapmak.',
      neden: 'Motor 28...e5’i (+0.56) daha iyi buluyor: piyon vezirin çaprazını kapatır ve d5’i hazırlar. Ne5 biraz pasif ama sağlam (+0.99).',
      diger: [
        { move: '28...e5', text: '29.Qb6 Rd7 30.g4 Nf4 ile Siyah merkezi sağlamlaştırır (Motor: +0.56).' },
        { move: '28...Rd7', text: '29.a4 e5 30.Qb4 bxa4 ile Siyah kaleyi yedinci yataya getirir (Motor: +0.65).' },
      ],
    },
    '29w': {
      text: '29.Qh4?!: Vezir h4’e döner ve f6 piyonuna saldırır.',
      amac: 'f6’ya ikinci kez saldırmak: hem at hem vezir f6’yı vuruyor.',
      neden: 'Sands’in aktardığına göre Hübner notlarında 29.Qb6 Rd7 30.a4’ü iki taraflı oyunla daha iyi buluyor. Motor da: 29.h3 +1.03, 29.a4 +0.99, 29.Qb6 +0.88; maç hamlesi +0.56. Qh4 Beyazı f6 hedefine kilitler ve g2’yi zayıflatır.',
      diger: [
        { move: '29.Qb6', text: '29...Rd7 30.h3 Kg8 31.Qe3 ile Beyaz iki kanatta baskı kurar (Motor: +0.88).' },
        { move: '29.h3', text: '29...Rd7 30.a4 Bd5 31.Bf1 ile Beyaz şahına hava açar ve vezir kanadını açar (Motor: +1.03).' },
      ],
    },
    '29b': {
      text: '29...Rd7: Kale yedinci yataya gelir; f7 ve g7’ye geçmeye hazırdır.',
      amac: 'Kaleyi şah kanadına getirmek ve ...Rg7 ile g-hattını almaya hazırlanmak.',
      neden: 'Motor 29...Ng6’yı (+0.53) daha iyi buluyor; f6 piyonu korunur. Rd7 f6’yı feda etmeye hazır; ama bu tuzak işe yarar, çünkü 30.Nxf6? ile Beyaz kaybeder (+0.87).',
      diger: [
        { move: '29...Ng6', text: '30.Qd4 e5 31.Qb6 Rd7 ile Siyah f6’yı korur (Motor: +0.53).' },
        { move: '29...Rf7', text: '30.Qb4 Ng6 31.Qb3 Bd5 ile Siyah sağlam (Motor: +0.60).' },
      ],
    },
    '30w': {
      text: '30.Nxf6?: At f6 piyonunu alır ve d7 kalesine saldırır.',
      amac: 'Bir piyon kazanmak ve Siyahın kalesini kovalamak.',
      neden: 'Ciddi hata: at e4 ve g3’ten ayrılınca b7 filinin uzun çaprazı g2’ye açılır. Sands de 30.a4’ü tercih ediyor; motor: 30.a4 +0.87, maç hamlesi sonrası 30...Rg7! ile −3.10.',
      diger: [
        { move: '30.a4', text: '30...bxa4 31.Qxa4 Rg8 32.g3 ile Beyaz vezir kanadında baskı kurar (Motor: +0.87).' },
        { move: '30.Nf4', text: '30...Re7 31.Qh6 Kg8 32.Nh5 ile at aktif ve g2 korunur (Motor: +0.83).' },
      ],
    },
    '30b': {
      text: '30...Rg7!: Kale g-hattına gelir; b7 filiyle birlikte g2’ye saldırır.',
      amac: 'g2 piyonunu almak ve Beyaz şahını açık hale getirmek; f6 atı da hâlâ f8 kalesinin saldırısı altında.',
      neden: 'Sands’in deyişiyle “birden saldıran taraf Siyahtır.” Motor: 30...Rg7 −3.10, sonraki en iyi 30...Rc7 0.00. Bu hamle oyunun dönüm noktası.',
      diger: [
        { move: '30...Rc7', text: '31.Qh6 Rg7 32.g3 Nf7 ile Siyah biraz geç kalır (Motor: 0.00).' },
        { move: '30...Rdf7', text: '31.Nh5 Rf2 32.Qxf2 Rxf2 ile vezir kale ile değişir (Motor: +0.06).' },
      ],
    },
    '31w': {
      text: '31.Qh6?: Vezir h7’ye saldırır.',
      amac: 'Qxh7 mat tehdidiyle Siyahı savunmaya zorlamak.',
      neden: 'g2’yi tamamen savunmasız bırakır. Motor 31.g3’ü (−3.30) en dirençli buluyor; Sands’in aktardığına göre 31.Ng4 Bxg2! 32.Kxg2 Nxg4 33.Bxg4 Rxg4+! 34.Qxg4 Rg8 ile Siyah piyon oyunsonunu kazanır. Maç hamlesi −4.96.',
      diger: [
        { move: '31.g3', text: '31...Rgf7 32.Nxh7 Rxh7 33.Qd4 ile Beyaz direnir ama Siyah üstün (Motor: −3.30).' },
        { move: '31.Ng4', text: '31...Bxg2! 32.Kxg2 Nxg4 33.Bxg4 Rxg4+ ile Siyah kazanır (Motor: −3.62).' },
      ],
    },
    '31b': {
      text: '31...Rxg2+!: Kale g2 piyonunu şah çekerek alır.',
      amac: 'Beyaz şahını açık hale getirmek ve f-hattına itmek.',
      neden: 'Şah kaleyi alamaz, çünkü g2 b7 filiyle korunuyor. Motor: −4.92; 31...Rff7 (−3.92) daha yavaş.',
      diger: [
        { move: '31...Rff7', text: '32.g3 Rg6 33.Qd2 Rgxf6 ile Siyah atı alır ama Beyaz direnir (Motor: −3.92).' },
        { move: '31...Nf7', text: '32.Qh5 Ne5 33.Ng4 ile Beyaz savunur (Motor: −2.17).' },
      ],
    },
    '32w': {
      text: '32.Kf1: Tek hamle; şah f1’e kaçar.',
      amac: 'Mattan kurtulmak.',
      neden: '32.Kh1 Rg6+! 33.Ne4 Bxe4+ 34.Bf3 Bxf3 mattır (Sands’in verdiği varyant; motor da üç hamlede mat buluyor).',
    },
    '32b': {
      text: '32...Rf7!: Kale f7’ye gelir; f6 atını şaha bağlar.',
      amac: 'Atı bağlamak, h7’deki mat tehdidini kapatmak ve ...Rg6 ile ata ikinci kez saldırmak.',
      neden: 'Sands bu hamlenin üç işlevini sıralıyor: h7 matını kapatır, bağı korur ve 33...Rg6 tehdidini yaratır. Motor: −4.90. 32...Rxf6+?? 33.Qxf6+ ise Beyaza kazandırırdı (+4.84).',
      diger: [
        { move: '32...Rxf6+', text: '33.Qxf6+ Rg7 34.Qd8+ Rg8 ile Beyaz vezir kazanır (Motor: +4.84).' },
        { move: '32...Rg7', text: '33.Ke1 Rff7 34.Ne8 Rg6 ile at kaçar (Motor: −0.05).' },
      ],
    },
    '33w': {
      text: '33.Bh5: Fil kaleye saldırır.',
      amac: 'f7 kalesini kovalamak ve bağı kırmak.',
      neden: 'Sands’in aktardığına göre 33.Ke1 Rg6 34.Qd2 Bd5 35.Nxd5 Rg1+ ile Siyah kazanır. Motor 33.Ke1’i (−4.84) en dirençli buluyor; Bh5 −6.29.',
      diger: [
        { move: '33.Ke1', text: '33...Rg1+ 34.Kd2 Rg6 35.Qe3 ile şah merkeze kaçar ama at düşer (Motor: −4.84).' },
        { move: '33.Qf4', text: '33...Kg7 34.Nh5+ Kf8 ile Siyah kazanır (Motor: −5.35).' },
      ],
    },
    '33b': {
      text: '33...Ng4!: At vezire ve f6 atına saldırır.',
      amac: 'Veziri kovalamak ve bağlı ata yeniden saldırmak.',
      neden: 'Sands bu hamleyi “oyunu etkili bir şekilde bitiren” hamle diye niteliyor. Motor 33...Rxh2’yi (−6.13) biraz daha iyi buluyor, ama Ng4 de kazanır (−5.13).',
      diger: [
        { move: '33...Rxh2', text: '34.b3 Bf3 35.Ke1 Rg7 ile Siyah kazanır (Motor: −6.13).' },
        { move: '33...Ng6', text: '34.Ke1 Rxf6 35.Qe3 Rxh2 ile Siyah kazanır (Motor: −5.36).' },
      ],
    },
    '34w': {
      text: '34.Bxg4: Tek hamle; fil atı alır.',
      amac: 'Veziri kurtarmak.',
      neden: '34.Bxf7 Nxh6 (−7.01) ve 34.c4 Nxh6 (−8.97) daha da kötü.',
    },
    '34b': {
      text: '34...Rxg4: Kale geri alır; f6 atı hâlâ bağlı ve düşecek.',
      amac: 'Atı kazanmak ve oyunu bitirmek.',
      neden: 'Sands’in verdiği gibi 35.Ke1 Rg6 36.Qe3 Rgxf6 ile Siyah bir kale fazlasıyla kalır (Motor: −5.20). Tal terk etti.',
      diger: [
        { move: '34...Be4', text: '35.h3 e5 36.Qg5 ile Beyaz kazanır, çünkü g4 kalesi düşer (Motor: +3.40).' },
      ],
    },
  },
  sources: [
    { title: 'Washington Times: Huebner appreciation (David R. Sands)', url: 'https://m.washingtontimes.com/news/2025/jan/14/huebner-appreciation-exploring-relationship-chessb/' },
    { title: 'Wikipedia: Candidates Matches 1974 (Leningrad Interzonal)', url: 'https://en.wikipedia.org/wiki/Candidates_Matches_1974' },
    { title: '365chess: Leningrad Interzonal 1973', url: 'https://www.365chess.com/tournaments/Leningrad_Interzonal_1973/23554' },
    { title: 'Chess.com: The Paulsen Sicilian – A History', url: 'https://www.chess.com/article/view/the-history-of-the-sicilian-paulsen' },
    { title: 'ChessBase: Who was Ilya Kan?', url: 'https://en.chessbase.com/post/who-was-ilya-kan' },
  ],
  exercises: [
    { id: 'thu-1', kind: 'tekrar', plan: false, title: 'Saldırıyı kapatan piyon',
      source: 'Tal – Hübner, Leningrad 1973 (20. hamle)',
      fen: '3r1rk1/1b2qp1p/p1npp3/1p3pB1/4P2Q/P1NR4/1PP1B1PP/6K1 b - - 1 20',
      prompt: 'Tal kale verip g-hattını açtı. Fili g5’te veziri kovalıyor, kalesi d3’ten g3’e geçmeye hazır. Siyahın tek savunması hangisi?',
      hint: 'Bir piyon hem fili kovalayabilir hem de g7 karesini koruyabilir.',
      line: ['f6'],
      explanation: '**20...f6!** Piyon fili kovalar ve g7 karesini korur; vezir de f6’dan uzaklaşmak zorunda kalmaz. Motor: ...f6 −0.27, sonraki en iyi hamle 20...Rfe8 +6.95 (21.Rg3 Qxg5 22.Qxg5+ ile Beyaz kazanır).',
      link: 'Saldırıya karşı piyon hamlesiyle çaprazları kapatmak, Hübner’in savunmasının ilk adımıydı.' },
    { id: 'thu-2', kind: 'tekrar', plan: false, title: 'g-hattı Siyahın',
      source: 'Tal – Hübner, Leningrad 1973 (30. hamle)',
      fen: '5r1k/1b1r3p/p2ppN2/1p2n3/7Q/P7/1PP1B1PP/6K1 b - - 0 30',
      prompt: 'Tal 30.Nxf6 ile bir piyon aldı. Siyahın iki kalesi, b7 fili ve e5 atı var; Beyaz şahı g1’de. Siyah g-hattını nasıl kullanır?',
      hint: 'b7 filinin uzun çaprazı artık g2’ye kadar açık. Bir kale de aynı kareye bakarsa ne olur?',
      line: ['Rg7', 'Qh6', 'Rxg2+', 'Kf1', 'Rf7'],
      explanation: '**30...Rg7!** kale ve b7 fili g2’ye bakar. 31.Qh6? sonrası **31...Rxg2+ 32.Kf1 Rf7!** ve f6 atı şaha bağlanıp kaybedilir. Motor: ...Rg7 −3.06, sonraki en iyi hamle 0.00; 31...Rxg2+ −4.99, 31...Rff7 −3.76; 32...Rf7 −4.75, 32...Rg7 −1.15.',
      link: 'Tal’ın kendi açtığı g-hattı vezirler değişince Siyahın kalelerine geçti.' },
    { id: 'thu-3', kind: 'transfer', plan: false, title: 'g2’de kale fedası',
      source: 'Ivanchuk – Topalov, Las Palmas 1996 (22. hamle)',
      fen: 'r3qbk1/2R3p1/p2pNR2/4n3/NP2b1r1/1Q2B3/PP4BP/6K1 b - - 0 22',
      prompt: 'Beyaz f6’da kaleyle Siyahın şah kanadını kırmaya çalışıyor. Siyahın kalesi g4’te, fili e4’te uzun çaprazda. Hamle Siyahta.',
      hint: 'Kale ve e4 fili aynı kareye, g2’ye bakıyor; şah kaleyi geri alamaz.',
      line: ['Rxg2+', 'Kf1', 'Qb5+'],
      explanation: '**22...Rxg2+!** Şah kaleyi alamaz (e4 fili koruyor). 23.Kh1 Rg3+ 24.Rf3 Bxf3 mattır; bu yüzden **23.Kf1 Qb5+!** ve Siyahın vezir ve kalesi açık şaha saldırır. Motor: Rxg2+ −7.03, sonraki en iyi hamle 22...Bxg2 −2.11; 23...Qb5+ −7.54, 23...d5 −6.07.',
      link: 'Hübner’in 31...Rxg2+ 32.Kf1 hamleleri gibi: g-hattındaki kale fille birlikte g2’yi alır ve şah f-hattına itilir.' },
    { id: 'thu-4', kind: 'transfer', plan: false, title: 'Açık g-hattından şah',
      source: 'Adams – Kramnik, Belgrad 1995 (26. hamle)',
      fen: '2r1k1r1/pp2pp2/1q6/3bR3/3N4/8/PPPQ1PP1/R5K1 b - - 0 26',
      prompt: 'Beyazın şahı g1’de, önündeki g2 piyonu yalnızca şahla korunuyor. Siyahın kalesi açık g-hattında, fili d5’te. Hamle Siyahta.',
      hint: 'g2 piyonunu kale alırsa d5 fili onu korur; şah nereye gidebilir?',
      line: ['Rxg2+'],
      explanation: '**26...Rxg2+!** Şah kaleyi alamaz (d5 fili koruyor). 27.Kh1 Rxf2+ ile Siyah kazanır; 27.Kf1 sonrası Siyahın kalesi ve veziri şaha saldırmaya devam eder (27...Qa6+ veya 27...Qg6). Motor: Rxg2+ −4.08, sonraki en iyi hamle 26...Rd8 −2.86.',
      link: 'Tal – Hübner oyunundaki gibi: kale açık g-hattında g2’yi alır, fil uzun çaprazdan destek verir ve Beyaz şahı f1’e kaçmak zorunda kalır.' },
  ],
};
