// Petrosyan – Spasski, Moskova 1971. Kaynak: PgnMentor (Petrosian.pgn).
export default {
  id: 'petrosian-spassky-1971',
  theme: 'Kabul edilmiş gambit: Beyazın d5 kırılması',
  white: 'Tigran Petrosyan', black: 'Boris Spasski',
  whiteShort: 'Petrosyan', blackShort: 'Spasski',
  event: 'Moskova turnuvası', site: 'Moskova', year: 1971, eco: 'D27',
  variation: 'Vezir Gambiti Kabulü, Klasik Varyant', result: '1-0',
  pgn: `1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. a4 Nc6 8. Qe2 cxd4 9. Rd1 Be7 10. exd4 O-O 11. Nc3 Nd5 12. Qe4 Ncb4 13. Ne5 Ra7 14. Bb3 Nf6 15. Qh4 b6 16. Qg3 Bb7 17. Bh6 Ne8 18. Rac1 Kh8 19. d5 exd5 20. Be3 Ra8 21. Nc4 Nd6 22. Bxb6 Qb8 23. Na5 Nf5 24. Qxb8 Raxb8 25. Nxb7 Rxb7 26. a5 Bg5 27. Rb1 d4 28. Nd5 Nc6 29. Ba4 Rc8 30. f4 Nce7 31. Rbc1 Rcb8 32. fxg5 Nxd5 33. Bc6 Rxb6 34. axb6 Nde3 35. b7 Nxd1 36. Rxd1 g6 37. g4 Ng7 38. Rxd4 Ne6 39. Rd7 1-0`,

  summary: 'Moskova’daki 1971 Alekhine Anma Turnuvası’nda eski dünya şampiyonu Petrosyan, o sırada unvanı elinde tutan Spasski’yi Vezir Gambiti Kabulü’nün Klasik Varyantı’nda yendi. Siyah c4 piyonunu alıp ...c5 ile merkezi bozdu; 8...cxd4 ve 10.exd4 sonrası Beyaz d4’te tek kalmış (izole) bir piyonla kaldı. Petrosyan bu piyonun verdiği alanı ders kitabı gibi kullandı: atı e5’e, veziri e4–h4–g3 yoluyla şah kanadına getirdi, 17.Bh6 ile g7’ye baskı kurdu ve Siyahın taşlarını savunmaya çekti. Spasski 18...Kh8 ile g7’deki bağı çözer çözmez 19.d5! geldi: izole piyon kendini feda edip hatları açtı, 20.Be3 b6 piyonuna ve a7 kalesine yöneldi. 21...Nd6? ve 22...Qb8? hatalarından sonra b6 düştü, vezirler değişildi ve Beyaz iki fil, b6’ya yerleşmiş bir fil ve Siyahın zayıf piyonlarıyla üstün bir oyunsonuna girdi. 31...Rcb8 sonrası 32.fxg5 ve 33.Bc6 ile kalite kazanan Petrosyan, b7’ye kadar ilerleyen piyonla oyunu 39. hamlede bitirdi.',
  intro: 'Alekhine Anma Turnuvası (Moskova, 24 Kasım – 18 Aralık 1971) dönemin en güçlü turnuvalarından biriydi: Karpov ve Stein 11/17 ile birinciliği paylaştı, Smislov 10½ ile üçüncü oldu; Petrosyan 10 puanla Tukmakov’la birlikte dördüncü, dünya şampiyonu Spasski ise 9½ puanla Tal’la aynı sırada kaldı. Petrosyan bu turnuvaya Buenos Aires’te Fischer’e karşı kaybettiği Adaylar finalinin hemen ardından geldi. Oyun, Steinitz’in 1886’da Zukertort’a karşı ortaya koyduğu fikre dayanan klasik bir yapıya döner: Beyaz gambit piyonunu geri alır, Siyah ...c5 ve ...cxd4 ile d4’te izole bir piyon bırakır. Bu yapıda soru hep aynıdır: izole piyonun sahibi taşlarının aktifliğini saldırıya çevirebilecek mi, yoksa savunan taraf d5’i bloke edip taş değişimleriyle oyunsonuna mı gidecek? Petrosyan, savunma ustası olarak tanınsa da burada izole piyonun saldırı tarafını oynuyor.',
  plans: {
    white: { title: 'Beyazın planı: izole piyonla saldırı ve doğru anda d5', points: [
      'Klasik kurulumu tamamlamak: Qe2, Rd1, Nc3 ve sonra Rac1. Exeter Satranç Kulübü’nün izole piyon yazısında aktarılan Nimzowitsch tavsiyesi de tam budur: vezir e2’de, kaleler c1 ve d1’de, fil e3’te.',
      'd4 piyonunun desteklediği **e5 karesine** atı yerleştirmek (13.Ne5) ve bu karakoldan f7, c6 ve g4 karelerine baskı yapmak.',
      'Veziri e4–h4–g3 yoluyla şah kanadına götürüp **17.Bh6** ile g7’ye yüklenmek; Siyahın atlarını (Nf6–e8) pasif savunma karelerine geri itmek.',
      'Siyahın taşları şah kanadına çekilip g7’deki bağ çözüldüğü anda **19.d5!** ile merkezi açmak: izole piyon değişilir ama fil, kale ve atlar için hatlar açılır.',
      'Açılan a7–g1 çaprazı ve d-hattı sayesinde **b6 piyonunu** hedef almak (20.Be3, 21.Nc4, 22.Bxb6); d-hattındaki Rd1’in d8 vezirine bakması sayesinde Nc4’ün alınamamasından yararlanmak.',
      'Vezirler değişildikten sonra **26.a5** ile b6 filini kalıcı olarak desteklemek, a6’yı sabitlemek ve Siyahın zayıf izole d-piyonunu hedef almak.',
      'Oyunsonunda küçük taktiklerle (32.fxg5, 33.Bc6) materyal kazanmak ve b-piyonunu b7’ye kadar sürerek Siyahın kalesini b8’e hapsetmek.',
    ] },
    black: { title: 'Siyahın planı: d5’i bloke et, taş değiş, piyonu sonra al', points: [
      'd5 karesini atla tutarak izole piyonu **bloke etmek** (11...Nd5); bu kare Beyazın hiçbir piyonu tarafından kovulamaz.',
      '7.a4’ün zayıflattığı **b4 karesini** kullanmak (12...Ncb4): at hem d5’i destekler hem de c2 ve d3 karelerine bakar.',
      'Taş değişimleriyle Beyazın saldırı potansiyelini azaltmak; her değişim izole piyonu biraz daha zayıflatır.',
      '...b6 ve ...Bb7 ile fili uzun çapraza çıkarıp d5’e ve merkeze baskı yapmak; bunu yaparken a8 kalesini çaprazdan çekmek (13...Ra7 fikri).',
      'Şah kanadındaki baskıya karşı sağlam durmak: ...Ne8 ile g7’yi korumak, ...Kh8 ile g-hattındaki bağı çözmek.',
      'Beyaz d5 oynadığında vezir kanadını (b6, a6) korumayı unutmamak: b6 piyonu bu yapıda Siyahın en hassas noktasıdır.',
      'Oyunsonunda d-piyonunu ve aktif taşları kullanarak karşı oyun aramak (27...d4, 34...Nde3 çatalı).',
    ] },
  },
  critical: [
    { move: '9w', title: '9.Rd1: önce kale, sonra piyon', text: '8...cxd4 sonrası 9.exd4? Nxd4! 10.Nxd4 Qxd4 ile Siyah bir piyon kazanır, çünkü e2’deki vezir d4’ü korumaz (Motor: −0.4). Petrosyan önce 9.Rd1 ile kaleyi d-hattına getirir: artık d4 piyonu geri alınırken kale d8 vezirine bakar ve ...Nxd4 kombinasyonları işlemez. Bu hamle sırası, izole piyonlu yapılarda sık görülen bir inceliktir; Beyaz zaten d-hattında olması gereken kaleyi tempo kaybetmeden yerleştirmiş olur.' },
    { move: '13b', title: '13...Ra7: garip ama amaçlı bir kale', text: 'Siyah kaleyi a7’ye çekerek ...b6 sonrasında e4 vezirinin uzun çaprazdan (e4–d5–c6–b7–a8) a8 kalesine bakma ihtimalini ortadan kaldırır ve yedinci yatayı (b7, f7) yandan korumayı planlar. Ama kale a7’de pasif kalır ve ileride a7–g1 çaprazında Beyazın filine hedef olur; 20...Ra8 ile geri dönmesi bu kurulumun başarısızlığını gösterir. Motor 13...b6 ya da 13...Bd6’yı biraz daha iyi buluyor (Motor: +0.4, Ra7 +0.56).' },
    { move: '17w', title: '17.Bh6: g7’de bağ', text: 'Fil h6’ya gelince g7 piyonu hem g3 vezirinin g-hattı boyunca g8 şahına bağlı hem de filin saldırısı altındadır; ...gxh6 mümkün değil. Siyah 17...Ne8 ile g7’yi korumak zorunda; 17...g6? 18.Bxf8 kaliteyi, 17...Nh5? 18.Qg4 atı kaybettirir (Motor: her ikisinde de +1.7 civarı). Böylece Siyahın en iyi savunma atı f6’dan e8’e, oyunun dışına itilir.' },
    { move: '18b', title: '18...Kh8 ve kırılmanın zamanı', text: 'Şah h8’e gidince g7 piyonunun bağı çözülür ve ...gxh6 tehdidi doğar; yani Beyazın fili h6’da artık kalamaz. Bu doğal görünen hamle aslında Petrosyan’a d5 için ideal anı verir: 19.d5 exd5 20.Be3 ile fil tempo kazanarak geri çekilir ve aynı anda b6 piyonuna ve a7 kalesine saldırır. Motor 18...Ra8’i öneriyor (Motor: +0.4); Kh8 sonrası değerlendirme +1.0’ın üstüne çıkıyor.' },
    { move: '19w', title: '19.d5! izole piyonun son görevi', text: 'İzole piyonun sahibi için klasik kural: piyon ya saldırıya alan sağlar ya da doğru anda d5 ile kendini feda edip hatları açar. Petrosyan’ın bütün taşları hazırdı (kaleler c1 ve d1’de, fil b3’te d5’e bakıyor, at e5’te) ve Siyahın taşları şah kanadına dağılmıştı. 19...exd5 sonrası d-hattı ve a7–g1 çaprazı açılır. Motor 19.d5’i en iyi hamle olarak gösteriyor (Motor: +1.1), 19.Be3 de güçlü (+0.9).' },
    { move: '21w', title: '21.Nc4! alınamayan at', text: 'At d5 piyonunun saldırısı altındaki c4’e gider, ama 21...dxc4?? 22.Rxd8 ile Siyah vezirini kaybeder: d5 piyonu, d1 kalesiyle d8 veziri arasındaki tek engeldi (Motor: +3.0). At c4’ten b6’ya ikinci kez saldırır; Be3 ve Nc4 birlikte b6’yı iki kez hedef alır. 21.Nc4’ten başka her hamle avantajın büyük kısmını kaybettirir (21.Ne4 +0.4).' },
    { move: '21b', title: '21...Nd6? ve 22.Bxb6', text: 'At d6’ya gelip c4 atına saldırır ama b6’yı korumaz. 22.Bxb6 ile piyon düşer ve fil d8 vezirine saldırır; 22...Nxc4 23.Bxd8 ya da 22...dxc4 23.Bxd8 ile Beyaz vezir kazanır. Motor 21...b5 22.axb5 axb5 23.Nb6 ya da 21...Nf6 ile Siyahın direnebileceğini gösteriyor (Motor: +1.2/+1.3); oyundaki hamleyle değerlendirme +1.75’e çıkıyor.' },
    { move: '32w', title: '32.fxg5 ve 33.Bc6: oyunsonu taktiği', text: '31...Rcb8 ile Siyah c-hattını bırakınca Petrosyan g5 filini alır: 32...Nxd5 33.Bc6! ve fil hem b7 kalesine hem d5 atına saldırır, c1 kalesi de fili korur. Siyah 33...Rxb6 34.axb6 ile kaliteyi geri vermek zorunda kalır ve b-piyonu b7’ye kadar ilerler. Burada hamle sırası önemliydi: 31.fxg5? Nxd5 sonrası Bc6 c8 kalesi tarafından alınırdı (Motor: +0.7); önce 31.Rbc1 ile kale c-hattına geldi ve c6’yı korudu.' },
  ],
  lessons: [
    'İzole piyonun sahibi **taş değişiminden kaçınmalı ve saldırmalı**: e5 karakolu, vezirin şah kanadına geçişi (Qe4–h4–g3) ve Bh6 gibi hamleler bu yapının tipik silahlarıdır.',
    '**d5 kırılması** ancak taşlar hazır olduğunda işe yarar: kaleler d- ve c-hattında, fil d5’e bakıyor, rakibin taşları başka kanatta. Petrosyan 19.d5’i tam Siyahın şahı h8’e kaçıp vezir kanadı savunmasız kaldığında oynadı.',
    'Hamle sırası önemlidir: 9.exd4? Nxd4 piyon kaybettirirdi; 9.Rd1 önce kaleyi yerleştirip sonra piyonu geri aldı. Oyunsonunda da 31.Rbc1’den sonra 32.fxg5 çalıştı, önce değil.',
    'Bir piyonun bir taşı “korur” gibi görünmesi yetmez: 21.Nc4 d5 piyonunun saldırısı altındaydı ama dxc4 d-hattını açıp Rxd8’e izin verdiği için alınamazdı. Hat açan alışlara her zaman dikkat edin.',
    'Savunan tarafın en hassas noktası çoğu zaman piyon zayıflığıdır: 15...b6 ile yaratılan b6 piyonu, d5 kırılmasından sonra Siyahın taşlarının hiçbiri tarafından yeterince korunamadı.',
    'Kalitesiz bir parçaya dikkat: 13...Ra7 ile yan tarafa giden kale hem oyun dışında kaldı hem de a7–g1 çaprazında hedef oldu. Garip kurulumların bir bedeli vardır.',
    'Oyunsonunda ilerlemiş bir geçer piyon, rakibin taşlarını felç eder: b7’deki piyon Siyahın kalesini b8’e bağladı; Beyazın kalesi ve fili ise serbestçe d4’ü alıp yedinci yataya girdi.',
  ],
  qa: [
    { q: 'Petrosyan neden 7.a4 oynadı? Bu hamle b4 karesini zayıflatmıyor mu?', a: '7.a4, Siyahın ...b5 ile vezir kanadında alan kazanıp c4 filini kovmasını engeller. Wikipedia’nın Vezir Gambiti Kabulü maddesine göre bu hamleyi Botvinnik 1963’te Petrosyan’a karşı oynadığı dünya şampiyonluğu maçında kullanmıştı. Bedeli gerçekten b4 karesidir: Siyah 12...Ncb4 ile atını oraya yerleştirdi. Ama a-piyonu oyunun ilerisinde Beyazın en önemli silahlarından biri oldu: 26.a5 ile a6 piyonunu sabitledi ve b6’daki güçlü fili kalıcı olarak destekledi.' },
    { q: 'Beyaz neden 9.exd4 ile piyonu hemen geri almadı?', a: 'Çünkü 9.exd4? Nxd4! 10.Nxd4 Qxd4 ile Siyah bir piyon kazanır: e2’deki vezir d4’ü korumaz ve d-hattında Beyazın kalesi yoktur (Motor: −0.4). 9.Rd1 önce kaleyi d-hattına getirir; sonra 10.exd4 ile piyon geri alındığında d1 kalesi d4’ü destekler ve d8 vezirine bakar. 9.Nxd4 de aynı nedenle zayıf: 9...Nxd4 10.exd4 Qxd4.' },
    { q: 'Siyah neden 13...Ra7 gibi garip bir hamle oynadı?', a: 'Siyah ...b6 ve ...Bb7 planlıyordu. Ama b-piyonu b6’ya gidip d5’teki at yerinden oynarsa, e4 veziri uzun çaprazdan a8 kalesine bakacaktı; ayrıca b7 ve f7 karelerini yandan korumak için kale yedinci yatayda işe yarayabilirdi. Sorun, kalenin a7’de pasif kalması ve 19.d5 sonrası açılan a7–g1 çaprazında Be3’ün hedefi olmasıydı. Motor 13...b6’yı (Motor: +0.4) daha iyi buluyor; 20...Ra8 ile kalenin geri dönmesi kaybedilen zamanı gösteriyor.' },
    { q: '19.d5 neden tam o anda oynandı, daha önce ya da sonra değil?', a: 'Spasski 18...Kh8 ile g7 piyonunun g-hattındaki bağını çözdü; artık ...gxh6 tehdidi vardı ve h6 filinin geri çekilmesi gerekiyordu. 19.d5 exd5 20.Be3 ile fil bu geri çekilişi tempo kazanarak yaptı: b6 piyonuna ve onun arkasındaki a7 kalesine saldırdı. Aynı zamanda Siyahın atları e8 ve b4’te dağınıktı, şah kanadından vezir kanadına zamanında dönemezdi. Motor 18.Rac1’den sonra 19.d5’i en iyi hamle olarak gösteriyor (Motor: +1.1).' },
    { q: 'Siyah 19.d5’i başka türlü alabilir miydi?', a: '19...Bxd5 20.Nxd5 Nxd5 ya da 19...Nxd5 de mümkündü; motor 19...Bxd5’i en dayanıklı buluyor (Motor: +1.0, oyundaki exd5 +1.1). Fark küçük; asıl sorun Siyahın vezir kanadındaki zayıflıklardı. Hangi taşla alırsa alsın, b6 piyonu ve a7 kalesi Beyazın Be3 hamlesine açık kalıyordu.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En önemli an 21. hamleydi. 21...Nd6? b6’yı korumadı ve 22.Bxb6 ile piyon tempo kazanarak düştü (fil d8 vezirine saldırdı). 21...b5! 22.axb5 axb5 23.Nb6 ya da 21...Nf6 ile Siyah materyalini koruyup savaşmaya devam edebilirdi (Motor: +1.2 civarı). Hemen ardından 22...Qb8? yerine 22...Qd7 de daha dayanıklıydı (Motor: +1.6, oyunda +2.6).' },
    { q: '23.Na5 en iyi hamle miydi?', a: 'Hayır. Motor 23.Ne3!’ü çok daha güçlü buluyor (Motor: +2.6): at d5 piyonuna saldırır ve Siyah hem d5’i hem de vezir kanadını korumakta zorlanır. 23.Na5 b7 filine saldırdı ve 23...Nf5 24.Qxb8 Raxb8 25.Nxb7 ile vezirleri değişip iki fil ve Siyahın zayıf d5 piyonuyla üstün bir oyunsonuna girdi (Motor: +1.7). Petrosyan’ın tarzına uygun bir seçim: riski azaltan, açık ve kontrol edilebilir bir yol.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Açılıştan sonra Beyazın taşları çok daha aktifti: at e5’te, vezir g3’te, fil h6’da, kaleler merkezde. Siyahın taşları ise savunma için şah kanadına çekilmişti (Ne8, Kh8) ve kale a7’de oyun dışıydı. 19.d5 bu aktiflik farkını somut kazanca çevirdi: b6 piyonu düştü, vezirler değişildi; Beyaz iki fil, b6’da güçlü bir fil ve Siyahın zayıf d5 ve a6 piyonlarıyla oyunsonuna girdi. Kısacası avantaj, izole piyonun verdiği alanın doğru anda hat açmaya dönüştürülmesinden doğdu.' },
    { q: 'Oyunsonunda Petrosyan materyali nasıl kazandı?', a: '30.f4 ile g5 filini kovdu. Siyah fili koruyacak zamanı bulamadı, çünkü 31.Rbc1 sonrası 31...Rcb8? c-hattını bıraktı. 32.fxg5 Nxd5 33.Bc6! fil b7 kalesine ve d5 atına saldırdı, c1 kalesi de fili korudu. Siyah 33...Rxb6 34.axb6 ile kaliteyi verdi; b-piyonu b7’ye geldi, 38.Rxd4 ile Beyaz bir piyon daha aldı ve 39.Rd7 ile kale yedinci yataya girince Spasski terk etti.' },
  ],
  sources: [
    { title: 'Chessgames.com: Moscow (1971) – Alekhine Memorial turnuva sayfası ve çapraz tablo', url: 'https://chessgames.com/perl/chess.pl?tid=79436' },
    { title: 'Wikipedia: 1971 in chess (Alekhine Memorial sonuçları)', url: 'https://en.wikipedia.org/wiki/1971_in_chess' },
    { title: 'Chess.com: Karpov Comes Into His Own (Alekhine Memorial 1971)', url: 'https://www.chess.com/article/karpov-comes-into-his-own' },
    { title: 'Wikipedia: Queen’s Gambit Accepted (Klasik Varyant, 7.a4 ve 7.Qe2)', url: 'https://en.wikipedia.org/wiki/Queen%27s_Gambit_Accepted' },
    { title: 'Exeter Chess Club: The Queen’s Gambit Accepted / Isolated Queen’s Pawn', url: 'https://exeterchessclub.org.uk/content/queens-gambit-acceptedisolated-queens-pawn' },
  ],
  notes: {
    '1w': {
      text: 'Petrosyan vezir piyonuyla açar ve merkezde d4 karesini tutar.',
      amac: 'c4 ile Vezir Gambiti’ne geçip Siyahın d5 piyonuna baskı yapmak.',
      neden: 'Petrosyan kariyeri boyunca kapalı ve yarı kapalı açılışları tercih etti; 1.d4 ona Siyahın cevabına göre esnek bir kurulum seçme imkânı verir.',
      diger: [
        { move: '1.e4', text: 'Motor biraz daha iyi buluyor (Motor: +0.4), ama oyunu açık açılışlara götürür.' },
        { move: '1.Nf3', text: 'Daha esnek bir hamle sırası (Motor: +0.2); d4 ve c4’ü sonra oynayarak aynı yapılara geçebilir.' },
      ],
    },
    '1b': {
      text: 'Spasski simetrik cevap verir ve d5 ile merkezde yer alır.',
      amac: 'e4 karesini kontrol etmek ve Vezir Gambiti yapılarına girmek.',
      neden: 'Spasski hem Vezir Gambiti Reddi’ni hem Kabulü’nü iyi bilen çok yönlü bir oyuncuydu; ...d5 klasik ve sağlam bir seçimdir.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına esneklik bırakır (Motor: +0.3).' },
      ],
    },
    '2w': {
      text: 'Vezir Gambiti: Beyaz c-piyonunu feda eder gibi yapar ve d5’e baskı kurar.',
      amac: 'Siyahın d5 piyonunu merkezden uzaklaştırmak ya da ...dxc4 ile merkezden vazgeçmeye zorlamak.',
      neden: 'Gambit gerçek bir feda değildir: Siyah c4 piyonunu tutmaya çalışırsa (...b5) vezir kanadında zayıflıklar doğar, bu yüzden Beyaz piyonu genelde rahatça geri alır.',
      diger: [
        { move: '2.Nf3', text: 'Gambiti erteler (Motor: +0.2); Siyaha ...Bf5 gibi seçenekler bırakır.' },
      ],
    },
    '2b': {
      text: 'Vezir Gambiti Kabulü: Siyah c4 piyonunu alır.',
      amac: 'Piyonu tutmak değil; Beyazın merkezi e4 ile kurmasına zaman tanımadan ...c5 ve ...e6 ile hızlı gelişip d4’e saldırmak.',
      neden: 'Kabul edilmiş gambitte Siyah merkezi bir süre bırakır ama karşılığında serbest bir gelişim ve ...c5 ile d4’e vurma şansı elde eder. Wikipedia’nın maddesine göre modern fikirler Steinitz’in 1886 Zukertort maçına dayanır, Alekhine Siyah için yeni fikirler ekledi.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi (Motor: +0.3); daha sağlam ama daha pasif.' },
        { move: '2...c6', text: 'Slav Savunması (Motor: +0.3); d5’i korur ve c8 filine yol açık kalır.' },
      ],
    },
    '3w': {
      text: 'Beyaz atını f3’e çıkarır.',
      amac: 'e5 karesini kontrol edip ...e5 karşı vuruşunu engellemek ve rok için hazırlanmak.',
      neden: '3.e4 daha keskin bir merkez kurar ama Siyaha ...e5 ya da ...Nf6 gibi karşı oyun verir. 3.Nf3 sakin ve sağlamdır; Petrosyan’ın tarzına uygun.',
      diger: [
        { move: '3.e4', text: 'Merkezi hemen kurar (Motor: +0.3); 3...e5 4.Nf3 exd4 5.Bxc4 gibi açık oyunlara gider.' },
        { move: '3.e3', text: 'Önce piyonu geri almaya hazırlanır (Motor: +0.3); 3...e5 ile Siyah merkeze vurabilir.' },
      ],
    },
    '3b': {
      text: 'Siyah atını f6’ya geliştirir.',
      amac: 'e4 karesini kontrol edip Beyazın e4 ile merkez kurmasını zorlaştırmak.',
      neden: 'Klasik Varyant’ın ana yolu budur; ...e6 ve ...c5 ile devam edilecek.',
      diger: [
        { move: '3...a6', text: 'Önce ...b5 hazırlığı (Motor: +0.3); daha sonra ...Bg4 ya da ...b5 ile oynanabilir.' },
        { move: '3...e6', text: 'Hamle sırası değişikliği (Motor: +0.3); genelde aynı yapıya döner.' },
      ],
    },
    '4w': {
      text: 'e3 ile f1 filine yol açılır ve c4 piyonu geri alınmaya hazırlanır.',
      amac: 'Bxc4 ile piyonu geri almak ve hızla rok yapmak.',
      neden: '4.e3 sağlam bir seçimdir; c1 filinin önünü kapatır ama Beyaz merkezde d4’ü güvence altına alır. Daha keskin seçenekler (4.Qa4+, 4.Nc3) oyunu farklı yönlere götürür.',
      diger: [
        { move: '4.Nc3', text: 'e4’ü hazırlar (Motor: +0.35); 4...a6 5.e4 b5 ile çok keskin oyunlar.' },
        { move: '4.Qa4+', text: 'Piyonu vezirle geri alır (Motor: +0.1) ama vezir erken oyuna girer.' },
      ],
    },
    '4b': {
      text: 'Siyah ...e6 ile f8 filine yol açar.',
      amac: 'Gelişimi tamamlamak ve ...c5 ile d4’e saldırmaya hazırlanmak.',
      neden: '...e6 c8 filini kapatır ama Siyah bu fili ileride ...b6–Bb7 ile uzun çapraza çıkarmayı planlar (oyunda 16...Bb7).',
      diger: [
        { move: '4...Bg4', text: 'Fili zincirin dışına çıkarır (Motor: +0.4 civarı), ama f3 atına erken bağlanır.' },
        { move: '4...a6', text: 'Önce ...b5 ihtimali (Motor: +0.3).' },
      ],
    },
    '5w': {
      text: 'Beyaz c4 piyonunu filiyle geri alır; materyal eşit.',
      amac: 'Fili aktif bir kareye getirmek: c4’ten f7’ye ve d5’e bakar.',
      neden: 'Piyonu geri almak için en doğal an budur; erteleme Siyaha ...b5 ile piyonu tutma fırsatı verir.',
      diger: [
        { move: '5.Nc3', text: 'Gelişimi önce tamamlar (Motor: +0.2); piyon daha sonra alınabilir.' },
      ],
    },
    '5b': {
      text: '...c5: Siyah d4 piyonuna vurur.',
      amac: 'Beyazın merkezini zayıflatmak; ...cxd4 sonrası Beyazı izole bir d-piyonuyla bırakmak ya da merkezde rahatlamak.',
      neden: 'Klasik Varyant’ın temel fikri budur. Siyah piyonu hemen ...cxd4 ile almaz; önce ...a6 ve ...Nc6 ile hazırlık yapar.',
      diger: [
        { move: '5...a6', text: 'Hamle sırası değişikliği (Motor: +0.4).' },
        { move: '5...Be7', text: 'Daha pasif (Motor: +0.5); Beyaza rahat bir merkez bırakır.' },
      ],
    },
    '6w': {
      text: 'Beyaz kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini d1’e getirmeye hazırlanmak.',
      neden: 'Klasik Varyant’ta Beyaz merkezi açık bırakmamak için önce şahını güvenceye alır; Qe2 ve Rd1 bu kurulumun devamıdır.',
      diger: [
        { move: '6.Nc3', text: 'Gelişimi önce tamamlar (Motor: +0.2).' },
        { move: '6.a4', text: 'Hemen ...b5’i engeller (Motor: +0.1); rokunu sonra yapar.' },
      ],
    },
    '6b': {
      text: '...a6: Siyah ...b5 ile c4 filini kovmayı hazırlar.',
      amac: 'Vezir kanadında alan kazanmak ve c8 filini b7’ye çıkarmak için ...b5 hazırlığı.',
      neden: 'Wikipedia’ya göre bu hamle ana yolun temelidir: Siyah d4’e baskı yaparken ...b5 tehdidiyle Beyazı bir karar vermeye zorlar.',
      diger: [
        { move: '6...Nc6', text: 'Doğrudan gelişim (Motor: +0.3); 7.Qe2 a6 ile benzer yapılara döner.' },
        { move: '6...cxd4', text: 'Steinitz Varyantı: hemen izole piyon yaratır; Wikipedia’ya göre Beyaza çok serbest oyun verdiği için az oynanır.' },
      ],
    },
    '7w': {
      text: 'a4 ile ...b5 engellenir.',
      amac: 'Siyahın vezir kanadında alan kazanmasını ve c4 filini kovmasını önlemek.',
      neden: 'Wikipedia’ya göre 7.a4’ü Botvinnik 1963’te Petrosyan’a karşı oynadığı dünya şampiyonluğu maçında kullanmıştı; Petrosyan bu fikri şimdi Beyazla benimsiyor. Bedeli b4 karesinin zayıflaması, ama a-piyonu ileride a5 ile b6’yı sabitleme imkânı verecek.',
      diger: [
        { move: '7.Qe2', text: 'Eski ana yol (Motor: +0.3); Wikipedia’ya göre Siyah 7...b5 ile eşitliği kolayca sağlar.' },
        { move: '7.dxc5', text: 'Vezir değişimine gider (Motor: +0.3); çoğu zaman hızlı bir beraberlik.' },
        { move: '7.Bb3', text: '7...b5 gelirse 8.a4 ile cevap vermeye hazırlanır (Motor: +0.3).' },
      ],
    },
    '7b': {
      text: 'Siyah atını c6’ya çıkarır ve d4’e ikinci kez baskı yapar.',
      amac: 'd4 piyonunu ...cxd4 ile almaya hazırlanmak; at ileride b4’e (a4’ün zayıflattığı kare) gidebilir.',
      neden: '...b5 artık mümkün olmadığı için Siyah taşlarını geliştirir. Motor da 7...Nc6’yı en iyi hamle olarak gösteriyor (Motor: +0.26).',
      diger: [
        { move: '7...cxd4', text: 'Hemen alış (Motor: +0.3); 8.exd4 Be7 9.Qe2 Nc6 ile benzer yapılar.' },
        { move: '7...Qc7', text: 'Önce vezir (Motor: +0.3); c-hattında baskı.' },
      ],
    },
    '8w': {
      text: 'Vezir e2’ye gelir ve Rd1 için d1 karesini boşaltır.',
      amac: 'd-hattında kaleyle baskı kurmak ve veziri şah kanadına geçebileceği bir kareye getirmek.',
      neden: 'Exeter Satranç Kulübü’nün izole piyon yazısında Nimzowitsch’in önerdiği kurulum budur: Qe2 ve Rd1. Motor da 8.Qe2’yi en iyi gösteriyor (Motor: +0.2).',
      diger: [
        { move: '8.Nc3', text: 'Gelişim (Motor: +0.1); 8...Be7 ile Siyah rahat oynar.' },
        { move: '8.h3', text: 'Profilaktik (Motor: +0.1); ...Bg4’ü önler ama zaman kaybettirir.' },
      ],
    },
    '8b': {
      text: 'Siyah d4’ü alır.',
      amac: 'Beyazı ya izole piyonla geri almaya ya da atla alıp merkezi açmaya zorlamak.',
      neden: '...cxd4 Siyahın açılış planının doruk noktasıdır: izole piyon yapısı oluşur. Motor 8...cxd4’ü en iyi gösteriyor (Motor: +0.27).',
      diger: [
        { move: '8...Be7', text: 'Önce gelişim (Motor: +0.3); 9.Rd1 Qc7 ile gerilim sürer.' },
        { move: '8...Qc7', text: 'c-hattında vezir (Motor: +0.3).' },
      ],
    },
    '9w': {
      text: 'Rd1: Beyaz piyonu hemen geri almaz, önce kaleyi d-hattına getirir.',
      amac: 'd4 piyonu geri alındığında kalenin d-hattında hazır olması ve d8 vezirine bakması.',
      neden: '9.exd4? Nxd4! 10.Nxd4 Qxd4 ile Siyah bir piyon kazanır (Motor: −0.4), çünkü e2 veziri d4’ü korumaz. 9.Rd1 bu taktiği önler: kale d-hattında olunca ...Nxd4 sonrası Rxd4 mümkün olur.',
      diger: [
        { move: '9.exd4', text: '9...Nxd4! 10.Nxd4 Qxd4 ile bir piyon kaybeder (Motor: −0.4).' },
        { move: '9.Nxd4', text: '9...Nxd4 10.exd4 Qxd4 ile yine piyon gider (Motor: −0.3).' },
      ],
    },
    '9b': {
      text: 'Siyah fili e7’ye geliştirir ve rok yapmaya hazırlanır.',
      amac: 'Şahı güvenceye almak; d4 piyonunun geri alınmasına engel olmadan gelişimi tamamlamak.',
      neden: 'Siyah d4’ü tutmaya çalışmaz, çünkü 9...e5 gibi denemeler merkezi açar. Klasik izole piyon yapısını kabul edip d5’i bloke etmeyi planlar.',
      diger: [
        { move: '9...Na5', text: 'Motorun ilk tercihi (Motor: +0.14): c4 filine saldırır, 10.Ba2 Bd7 11.Nxd4 ile oyun dengeli.' },
        { move: '9...Bd6', text: 'Fili daha aktif kareye koyar (Motor: +0.24); b8–h2 çaprazına bakar.' },
      ],
    },
    '10w': {
      text: 'Beyaz piyonla geri alır: d4 artık izole bir piyondur.',
      amac: 'Merkezde bir piyon tutmak; e5 ve c5 karelerini kontrol edip taşlara alan sağlamak.',
      neden: '10.Nxd4 merkezi tamamen açar ve Beyazın inisiyatifi azalır (Motor: 0.0). 10.exd4 ile Beyaz izole piyonun zayıflığını kabul eder ama karşılığında e5 karakolunu ve aktif taşları kazanır (Motor: +0.22).',
      diger: [
        { move: '10.Nxd4', text: 'Simetrik yapı (Motor: 0.0); 10...Qc7 11.Nxc6 Qxc6 ile Siyah rahat eşitler.' },
        { move: '10.Nc3', text: 'Önce gelişim (Motor: +0.16); piyon bir hamle sonra alınır.' },
      ],
    },
    '10b': {
      text: 'Siyah kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini oyuna sokmak.',
      neden: 'Doğal ve sağlam bir hamle; ama Beyazın şah kanadı saldırısı için hedef de oluşturur. Motor 10...Bd7’yi küçük bir farkla tercih ediyor.',
      diger: [
        { move: '10...Bd7', text: 'Fili geliştirir (Motor: +0.29); 11.Nc3 O-O 12.Ne5 Be8 ile sağlam bir kurulum.' },
        { move: '10...Qc7', text: 'c-hattında baskı (Motor: +0.4).' },
      ],
    },
    '11w': {
      text: 'Beyaz atını c3’e geliştirir; at d5 ve e4 karelerine bakar.',
      amac: 'Gelişimi tamamlamak ve d5 karesine baskı yaparak ...Nd5 blokajını zorlaştırmak.',
      neden: '11.Nc3 en doğal hamledir (Motor: +0.43); diğer hamleler (11.Bf4, 11.h3) avantajı neredeyse sıfıra indirir.',
      diger: [
        { move: '11.Bf4', text: '11...Nd5 ile Siyah fili kovalar (Motor: 0.0).' },
        { move: '11.h3', text: 'Profilaktik (Motor: 0.0); Siyah 11...b6 ile rahat gelişir.' },
      ],
    },
    '11b': {
      text: 'At d5’e: izole piyonun önündeki blokaj karesi.',
      amac: 'd4 piyonunun ilerlemesini durdurmak ve c3 atıyla değişim fırsatı aramak.',
      neden: 'd5 karesi Beyazın hiçbir piyonu tarafından kovulamaz; klasik blokaj karesi budur. Ama motor 11...Nb4’ü küçük bir farkla tercih ediyor (Motor: +0.34 vs +0.44).',
      diger: [
        { move: '11...Nb4', text: 'Önce b4’e (Motor: +0.34); 12.Ne5 b6 ile at d5’e daha sonra gelebilir.' },
        { move: '11...Bd7', text: 'Gelişim (Motor: +0.4); 12.Ne5 Be8 ile sağlam.' },
      ],
    },
    '12w': {
      text: 'Qe4: vezir şah kanadına geçmek için e4’e gelir.',
      amac: 'Veziri g4, h4 ya da g3 karelerinden şah kanadına yöneltmek; e4’ten h7 ve b7’ye de bakmak.',
      neden: 'İzole piyonlu yapılarda vezirin şah kanadına transferi tipik bir saldırı planıdır. Motor 12.Bb3’ü küçük bir farkla tercih ediyor (Motor: +0.48 vs +0.30), ama Petrosyan’ın planı tutarlı.',
      diger: [
        { move: '12.Bb3', text: 'Fili önce güvenceye alır (Motor: +0.48); 12...Ncb4 13.Ne5 Bd7 14.Qg4 ile benzer saldırı.' },
        { move: '12.h3', text: 'Profilaktik (Motor: +0.43); ...Bg4’ü önler.' },
      ],
    },
    '12b': {
      text: 'At b4’e: a4’ün zayıflattığı kareye.',
      amac: 'd5’teki atı desteklemek ve c2 ile d3 karelerine bakmak.',
      neden: 'b4 karesi 7.a4’ün bedelidir; Siyah bunu hemen kullanır. Motor 12...Nf6 ile vezire saldırmayı da aynı güçte buluyor (Motor: +0.31).',
      diger: [
        { move: '12...Nf6', text: 'Vezire saldırır (Motor: +0.31); 13.Qe2 Nb4 ile benzer yapı.' },
        { move: '12...Re8', text: 'Daha pasif (Motor: +0.5).' },
      ],
    },
    '13w': {
      text: 'Ne5: at izole piyonun desteklediği karakola gelir.',
      amac: 'e5’ten f7, d7, c6 ve g4 karelerine baskı yapmak; vezirin şah kanadına geçişini desteklemek.',
      neden: 'e5 karesi izole piyonun en büyük kazancıdır: d4 piyonu atı korur, Siyah atı piyonla kovamaz. Motor 13.Ne5’i en iyi gösteriyor (Motor: +0.37).',
      diger: [
        { move: '13.Qg4', text: 'Doğrudan saldırı (Motor: +0.34); 13...Kh8 14.Bb3 ile benzer.' },
        { move: '13.Bb3', text: 'Daha yavaş (Motor: +0.1); 13...Nf6 ile Siyah vezire tempo kazanır.' },
      ],
    },
    '13b': {
      text: 'Kale a7’ye: Siyah kaleyi a8’den yan tarafa çeker.',
      amac: '...b6 ve ...Bb7 sonrasında a8 kalesinin e4–a8 çaprazından uzak olmasını sağlamak ve yedinci yatayı yandan korumak.',
      neden: '13...b6 hemen oynansa bile kale a8’de tehlikede değildi (Motor: +0.4). Ra7 fikri ilginç ama kale a7’de pasif kalır ve ileride a7–g1 çaprazında Beyazın filine hedef olur. 20...Ra8 ile geri dönmesi bu kurulumun bedelini gösterir.',
      diger: [
        { move: '13...b6', text: 'Doğrudan (Motor: +0.4); 14.Qg4 Kh8 ile Siyah sağlam.' },
        { move: '13...Bd6', text: 'Fili aktif kareye koyar (Motor: +0.4); e5 atına baskı yapar.' },
      ],
    },
    '14w': {
      text: 'Fil b3’e çekilir; d5’e ve dolaylı olarak f7’ye bakar.',
      amac: 'Fili ...Nb6 ya da ...b5 gibi saldırılardan korumak ve d5 blokajına baskı yapmak.',
      neden: 'c4’teki fil Siyahın ...Nb6 ile tempo kazanmasına açıktı. b3’te hem güvende hem de d5’e baskı yapar. Motor 14.Qg4 ve 14.Bd3’ü biraz daha iyi buluyor (Motor: +0.6 vs +0.41).',
      diger: [
        { move: '14.Qg4', text: 'Şah kanadı baskısını sürdürür (Motor: +0.6); 14...Kh8 15.Bb3 f6 16.Nd3.' },
        { move: '14.Bd3', text: 'Fili h7’ye yöneltir (Motor: +0.58); 14...Nf6 15.Qh4 b6 16.Bg5.' },
      ],
    },
    '14b': {
      text: 'At f6’ya çekilir; vezire saldırır ve şahı savunur.',
      amac: 'Tempo kazanmak ve şah kanadını savunmak.',
      neden: 'Siyah d5 blokajından geçici olarak vazgeçer ama veziri kovar. Motor 14...Nf6’yı en iyi hamle olarak gösteriyor (Motor: +0.36).',
      diger: [
        { move: '14...b6', text: '15.Nxd5 exd5 16.Qf3 Rc7 ile yapı değişir (Motor: +0.4).' },
        { move: '14...Bd7', text: 'Gelişim (Motor: +0.6); 15.Qg4 Nf6 16.Qg3 Bc6 ile Beyaz biraz daha iyi.' },
      ],
    },
    '15w': {
      text: 'Vezir h4’e: h7’ye ve şah kanadına baskı.',
      amac: 'Veziri şah kanadında tutmak ve g3’e geçerek g7’ye baskı kurmak.',
      neden: 'Vezir e4’ten kovuldu ama şah kanadında kalmak istiyor. Motor 15.Qf3 ile 15.Qh4’ü aynı güçte görüyor (Motor: +0.4).',
      diger: [
        { move: '15.Qf3', text: 'Aynı güçte (Motor: +0.43); 15...b6 16.Qg3 Nh5 17.Qh3.' },
        { move: '15.Qf4', text: 'Biraz daha zayıf (Motor: +0.3).' },
      ],
    },
    '15b': {
      text: 'Siyah ...b6 ile filini b7’ye çıkarmayı hazırlar.',
      amac: 'c8 filini uzun çapraza getirip d5’e ve merkeze baskı yapmak.',
      neden: '...b6 Siyahın gelişimini tamamlar ama b6 piyonunu ileride bir hedefe dönüştürür. Motor 15...b6’yı en iyi gösteriyor (Motor: +0.4).',
      diger: [
        { move: '15...Bd7', text: 'Fil d7–c6 yolunu izler (Motor: +0.49); 16.Qg3 Bc6 17.Bh6 Ne8.' },
        { move: '15...Nfd5', text: 'Hemen blokaja dönüş (Motor: +0.84); 16.Qg3 Kh8 17.a5 ile Beyaz üstün.' },
      ],
    },
    '16w': {
      text: 'Vezir g3’e: g7 hedefte.',
      amac: 'g-hattından g7’ye baskı yapmak ve Bh6 için hazırlanmak.',
      neden: 'g3’te vezir hem g7’ye hem de e5 atına destek olur. Motor 16.Qg3’ü en iyi gösteriyor (Motor: +0.28).',
      diger: [
        { move: '16.Re1', text: 'Aynı güçte (Motor: +0.27); kale e-hattında.' },
        { move: '16.Bd2', text: 'Fili geliştirir (Motor: +0.23).' },
      ],
    },
    '16b': {
      text: 'Fil b7’ye çıkar: uzun çapraz.',
      amac: 'd5 ve e4 karelerine baskı yapmak; f3 ve g2’ye uzaktan bakmak.',
      neden: 'Fil artık aktif ama Siyahın şah kanadı savunması zayıflar. Motor 16...Nh5’i tercih ediyor (Motor: +0.28 vs +0.56): at vezire saldırır ve Bh6’yı engeller.',
      diger: [
        { move: '16...Nh5', text: 'Vezire saldırır (Motor: +0.28); 17.Qh3 Nf6 18.Be3 ile tekrar.' },
        { move: '16...Kh8', text: 'Şahı önce köşeye alır (Motor: +0.48); 17.Be3 Bd6 18.d5.' },
      ],
    },
    '17w': {
      text: 'Bh6: g7’ye baskı; g7 piyonu g3 vezirine bağlı olduğu için alınamaz.',
      amac: 'Siyahın f6 atını geri çekilmeye zorlamak ve şah kanadını zayıflatmak.',
      neden: 'g7 piyonu g-hattında g8 şahına bağlıdır, bu yüzden ...gxh6 mümkün değildir. Siyah atını e8’e çekmek zorunda kalır. Motor 17.Bh6’yı en iyi gösteriyor (Motor: +0.61).',
      diger: [
        { move: '17.a5', text: 'Vezir kanadında baskı (Motor: +0.46); 17...Bd5 18.Bxd5 exd5.' },
        { move: '17.Re1', text: 'Daha yavaş (Motor: +0.25).' },
      ],
    },
    '17b': {
      text: 'At e8’e çekilir; g7’yi savunur ama merkezden uzaklaşır.',
      amac: 'g7’yi korumak ve ...gxh6 yerine savunmayı sağlamlaştırmak.',
      neden: 'Diğer hamleler kaybettirir: 17...g6? 18.Bxf8 kaliteyi alır, 17...Nh5? 18.Qg4 atı kaybettirir (Motor: her ikisinde +1.7 civarı). Ne8 tek iyi hamledir (Motor: +0.58).',
      diger: [
        { move: '17...g6', text: '18.Bxf8 Bxf8 ile kalite kaybı (Motor: +1.7).' },
        { move: '17...Nh5', text: '18.Qg4 ile at tuzağa düşer (Motor: +1.8).' },
      ],
    },
    '18w': {
      text: 'Kale c1’e: Beyazın bütün taşları hazır.',
      amac: 'c-hattını kontrol etmek ve d5 kırılması için son hazırlığı yapmak.',
      neden: 'Rac1 ile Beyaz c-hattını alır ve Siyahın ...Nd5 sonrası c3 atıyla değişim olasılıklarını kontrol eder. Motor 18.d5’i biraz daha iyi buluyor (Motor: +0.62 vs +0.55), ama fark küçük.',
      diger: [
        { move: '18.d5', text: 'Hemen kırılma (Motor: +0.62); 18...Nxd5 19.Be3 Nef6 20.Nxd5.' },
        { move: '18.Be3', text: 'Fil önce geri (Motor: +0.57); 18...Nf6 19.Bh6 ile tekrar.' },
      ],
    },
    '18b': {
      text: 'Şah h8’e: g7’deki bağ çözülür.',
      amac: '...gxh6 tehdidi yaratmak ve h6 filini geri çekilmeye zorlamak.',
      neden: 'Şah h8’e gidince g7 piyonu artık bağlı değildir; ama bu, Beyaza d5 için ideal anı verir. 19.d5 exd5 20.Be3 ile fil tempo kazanarak geri çekilir. Motor 18...Ra8’i öneriyor (Motor: +0.36 vs +0.98).',
      diger: [
        { move: '18...Ra8', text: 'Kaleyi geri getirir (Motor: +0.36); 19.Bf4 Nf6 20.Bh6 ile Beyaz biraz daha iyi.' },
        { move: '18...Nd5', text: 'Blokaja dönüş (Motor: +0.6); 19.Nxd5 Bxd5 20.Bxd5 Qxd5.' },
      ],
    },
    '19w': {
      text: 'd5! İzole piyon ilerler ve hatları açar.',
      amac: 'd-hattını ve a7–g1 çaprazını açmak; Siyahın vezir kanadındaki zayıflıkları (b6, a7) hedef almak.',
      neden: 'Siyahın taşları şah kanadında, vezir kanadı savunmasız. 19...exd5 20.Be3 ile fil b6’ya ve a7 kalesine saldırır. Motor 19.d5’i en iyi gösteriyor (Motor: +1.14), 19.Be3 de güçlü (+0.9).',
      diger: [
        { move: '19.Be3', text: 'Önce fil (Motor: +0.91); 19...Nf6 20.a5 Nbd5 21.Bxd5.' },
        { move: '19.Bd2', text: 'Daha zayıf (Motor: +0.34); Siyah 19...Nf6 ile toparlanır.' },
      ],
    },
    '19b': {
      text: 'Siyah piyonla alır.',
      amac: 'Materyali geri almak ve d5’te bir piyon tutmak.',
      neden: 'Üç alış yolu vardı; motor 19...Bxd5’i küçük bir farkla tercih ediyor (Motor: +1.0 vs +1.12). Siyahın sorunu hangi taşla alacağı değil, vezir kanadındaki zayıflıklardı.',
      diger: [
        { move: '19...Bxd5', text: '20.Nxd5 exd5 21.Bd2 Rc7 (Motor: +1.0).' },
        { move: '19...Nxd5', text: '20.Nxd5 exd5 21.Be3 Nf6 (Motor: +1.28).' },
      ],
    },
    '20w': {
      text: 'Be3: fil geri çekilir ve b6 piyonuna saldırır.',
      amac: 'b6’yı ve arkasındaki a7 kalesini hedef almak; fil h6’dan ...gxh6 tehdidinden kurtulur.',
      neden: 'Fil h6’da artık tehdit altındaydı (...gxh6). Be3 hem geri çekilir hem de b6’ya saldırır: Bxb6 sonrası fil hem a7 kalesine hem d8 vezirine bakacaktır. Diğer hamleler avantajı kaybettirir (20.Bd2 +0.15).',
      diger: [
        { move: '20.Bd2', text: '20...Nf6 ile Siyah toparlanır (Motor: +0.15).' },
        { move: '20.Bf4', text: '20...Nf6 21.Bg5 Bd6 (Motor: +0.07).' },
      ],
    },
    '20b': {
      text: 'Kale a8’e geri döner.',
      amac: 'Bxb6 sonrası kalenin saldırı altında kalmasını önlemek.',
      neden: 'Kale a7’de b6–a7 çaprazında tehlikedeydi. Ama bu, 13...Ra7’nin kaybettirdiği zamanı gösterir. Motor 20...Bd6’yı biraz daha iyi buluyor (Motor: +1.08 vs +1.39).',
      diger: [
        { move: '20...Bd6', text: 'Fili aktif kareye getirir (Motor: +1.08); 21.a5 Qe7 22.axb6 Ra8.' },
        { move: '20...Nf6', text: '21.a5 Ra8 22.Bxb6 Qd6 (Motor: +1.8).' },
      ],
    },
    '21w': {
      text: 'Nc4! At b6’ya ikinci kez saldırır; ...dxc4 mümkün değil.',
      amac: 'b6’yı iki kez hedef almak (Be3 ve Nc4) ve vezir kanadında baskıyı artırmak.',
      neden: '21...dxc4?? 22.Rxd8 ile Siyah vezirini kaybeder: d5 piyonu d1 kalesiyle d8 veziri arasındaki tek engeldi (Motor: +3.0). Diğer hamleler avantajı büyük ölçüde kaybettirir (21.Ne4 +0.4).',
      diger: [
        { move: '21.Ne4', text: '21...Rc8 22.Rc3 Nd6 ile Siyah toparlanır (Motor: +0.41).' },
        { move: '21.Nd3', text: '21...Nf6 22.Bd4 (Motor: +0.25).' },
      ],
    },
    '21b': {
      text: 'At d6’ya: c4 atına saldırır ama b6’yı korumaz.',
      amac: 'c4 atını kovmak ve f5 karesine geçmek.',
      neden: 'Ciddi bir hata. 22.Bxb6 ile piyon düşer ve fil d8 vezirine saldırır; 22...Nxc4 ya da 22...dxc4 sonrası 23.Bxd8 gelir. Motor 21...b5 ya da 21...Nf6’yı öneriyor (Motor: +1.2/+1.3 vs +1.75).',
      diger: [
        { move: '21...b5', text: '22.axb5 axb5 23.Nb6 Bd6 24.Qh3 Rb8 (Motor: +1.19).' },
        { move: '21...Nf6', text: '22.Nxb6 Rb8 23.a5 h6 (Motor: +1.32).' },
        { move: '21...f5', text: '22.Bxb6 Qd7 23.Na5 Rc8 (Motor: +1.23).' },
      ],
    },
    '22w': {
      text: 'Bxb6: zayıf piyon düşer ve fil d8 vezirine saldırır.',
      amac: 'Piyon kazanmak ve vezir kanadında geçer bir a-piyonu yaratmak.',
      neden: '22...Nxc4 ya da 22...dxc4 sonrası 23.Bxd8 ile Beyaz vezir kazanır. Motor 22.Bxb6’yı açık farkla en iyi gösteriyor (Motor: +1.53); diğer hamleler avantajı sıfıra indirir.',
      diger: [
        { move: '22.Nxd6', text: '22...Bxd6 23.Qh3 Bc5 (Motor: +0.05).' },
        { move: '22.Nxb6', text: '22...Nf5 23.Qh3 Nxe3 (Motor: 0.0).' },
      ],
    },
    '22b': {
      text: 'Vezir b8’e: g3 veziriyle değişim teklif eder (d6 atı arada).',
      amac: 'Vezirleri değişip Beyazın saldırı gücünü azaltmak; at f5’e gidince b8–g3 çaprazı açılacak.',
      neden: 'Hata. 22...Qd7 daha dayanıklıydı (Motor: +1.59 vs +2.59). Qb8 sonrası 23.Ne3 ile Beyaz d5’e saldırır ve Siyah hem d5’i hem vezir kanadını korumakta zorlanır.',
      diger: [
        { move: '22...Qd7', text: '23.Ne3 Rac8 24.Ra1 f5 (Motor: +1.59).' },
        { move: '22...dxc4', text: '23.Bxd8 ile vezir kaybı (Motor: +4.4).' },
      ],
    },
    '23w': {
      text: 'At a5’ten b7 filine saldırır.',
      amac: 'Siyahın uzun çapraz filini değişmek ve vezir kanadında baskıyı sürdürmek.',
      neden: 'Motor 23.Ne3’ü çok daha güçlü buluyor (Motor: +2.59 vs +1.72): at d5’e saldırır. Petrosyan daha basit bir yol seçti: b7 filini kovaladı ve vezirleri değişip üstün bir oyunsonuna girdi.',
      diger: [
        { move: '23.Ne3', text: '23...Re8 24.Bxd5 a5 25.Bd4 (Motor: +2.59).' },
        { move: '23.Nxd6', text: '23...Bxd6 24.Qh4 Bf4 (Motor: +0.98).' },
      ],
    },
    '23b': {
      text: 'At f5’e: vezire saldırır ve b8–g3 çaprazını açar.',
      amac: 'Vezir değişimine zorlamak.',
      neden: 'Motor 23...Bc8’i tercih ediyor (Motor: +1.59 vs +2.44): fil b7’den kurtulur ve Siyah materyal kaybını sınırlar.',
      diger: [
        { move: '23...Bc8', text: '24.Bc5 Nf5 25.Qxb8 Rxb8 (Motor: +1.59).' },
        { move: '23...h6', text: '24.Bc5 Nf5 25.Qxb8 Raxb8 (Motor: +2.11).' },
      ],
    },
    '24w': {
      text: 'Vezir değişimi.',
      amac: 'Saldırı gücünü oyunsonu avantajına çevirmek.',
      neden: 'Vezir saldırı altındaydı; Qxb8 en iyi hamledir (Motor: +2.2). Vezirler değişilince Beyazın b7 filini alma ve a-piyonunu ilerletme planı kolaylaşır.',
      diger: [
        { move: '24.Qf3', text: '24...Bc8 25.Nxd5 (Motor: +1.53).' },
      ],
    },
    '24b': {
      text: 'Siyah a8 kalesiyle geri alır; kale b-hattına gelir ve b7 filini korur.',
      amac: 'b7 filini savunmak ve kaleyi b-hattında b6 filine karşı aktif tutmak.',
      neden: 'b7 fili a5 atının saldırısı altındaydı; a8 kalesiyle almak onu hemen korur. 24...Rfxb8 de oynanabilirdi (Motor: +2.9) ama f8 kalesi şah kanadında daha işe yarar. 24...Bc6?? 25.Qf4 gibi hamleler ise materyal kaybettirir (Motor: +7.9).',
      diger: [
        { move: '24...Rfxb8', text: '25.Nxb7 Bg5 26.Ra1 Rxb7 ile benzer, biraz daha kötü bir oyunsonu (Motor: +2.9).' },
      ],
    },
    '25w': {
      text: 'Beyaz b7 filini atla alır.',
      amac: 'Siyahın d5 piyonunu koruyan en iyi taşı, uzun çapraz filini oyundan çıkarmak.',
      neden: 'b7 fili d5’in en sağlam savunucusuydu. Onu değişince d5 izole ve zayıf bir piyon olarak kalır, Beyazın iki fili de (b3 ve b6) Siyahın atlarına karşı üstünlük sağlar. Motor 25.Nxb7’yi en iyi gösteriyor (Motor: +2.64).',
      diger: [
        { move: '25.Ba7', text: 'Fili korur ama 25...Ra8 26.Bb6 Bc8 ile tekrar başa döner (Motor: +2.47).' },
        { move: '25.Bc7', text: '25...Rbc8 26.Nxd5 Nxd5 27.Bxd5 ile karmaşıklaşır (Motor: +1.72).' },
      ],
    },
    '25b': {
      text: 'Siyah kaleyle geri alır. Materyal eşit, ama yapı Beyazın lehine.',
      amac: 'Taşı geri almak; başka seçenek yok.',
      neden: 'Zorunlu geri alış. Piyon sayısı eşit (beşer piyon) ama Siyahın d5’te izole bir piyonu, a6’da zayıf bir piyonu var; Beyazın ise iki fili ve b6’da güçlü bir fili var. Değerlendirme +2.5 civarında: materyal değil, konum farkı.',
    },
    '26w': {
      text: 'a5: piyon b6 filini destekler ve a6 piyonunu sabitler.',
      amac: 'b6 filini kalıcı olarak korumak; Siyahın ...a5 ile vezir kanadında açılmasını engellemek.',
      neden: 'Fil b6’da Siyahın kalesine ve d4/c5 karelerine bakan çok güçlü bir taş; a5 piyonu onu sağlam bir karakola dönüştürür. a6 piyonu da a5 tarafından sabitlenip ileride hedef olur. 26.Ba5? fili zayıf bir kareye çeker ve 26...d4 ile Siyah canlanır (Motor: +0.98, oyunda +2.55).',
      diger: [
        { move: '26.Ba5', text: '26...d4 27.Nd5 Nxd5 28.Bxd5 ile Siyah merkezde aktifleşir (Motor: +0.98).' },
        { move: '26.g4', text: 'f5 atını kovmak ister ama 26...Rxb6 27.gxf5 ile Siyah fili geri kazanır (Motor: +0.07).' },
      ],
    },
    '26b': {
      text: 'Siyah filini g5’e getirir ve c1 kalesine saldırır.',
      amac: 'Pasif e7 filini aktifleştirmek ve c1–h6 çaprazında Beyazın kalesini rahatsız etmek.',
      neden: 'e7’de fil b4 atını ve d6 karesini korumak dışında işe yaramıyordu. g5’te tempo kazanır ve f4/e3 karelerine baskı yapar. Motor da 26...Bg5’i en iyi gösteriyor (Motor: +2.78).',
      diger: [
        { move: '26...d4', text: '27.Nd5 Nxd5 28.Bxd5 Rbb8 ile d-piyonu ilerler ama Beyazın fili d5’e yerleşir (Motor: +2.95).' },
        { move: '26...Rbb8', text: 'Pasif (Motor: +3.5); 27.Nxd5 ile d5 düşer.' },
      ],
    },
    '27w': {
      text: 'Kale b1’e çekilir; b2 piyonunu korur ve b-hattında kalır.',
      amac: 'Kaleyi g5 filinin saldırısından kurtarmak ve b2 piyonunu desteklemek.',
      neden: '27.Nxd5? Bxc1 ile Beyaz kaliteyi kaybeder ve avantaj neredeyse sıfıra iner (Motor: +0.18). Kalenin b1’de kalması, ileride b-piyonunun ilerlemesi için de yararlıdır. Motor 27.Rb1’i en iyi gösteriyor (Motor: +2.77).',
      diger: [
        { move: '27.Nxd5', text: '27...Bxc1 ile kalite kaybı (Motor: +0.18).' },
        { move: '27.Ra1', text: '27...Ne7 28.Ra4 ile kale a-hattında aktif (Motor: +2.64).' },
      ],
    },
    '27b': {
      text: 'Siyah izole piyonunu d4’e ilerletir ve c3 atına saldırır.',
      amac: 'Zayıf d5 piyonunu daha az korunması gereken bir kareye götürmek ve Beyazın atını kovmak.',
      neden: 'd5’te piyon Bxd5 ve Nxd5 tehditleri altındaydı. d4’e giderek c3 atını kovalar, ama piyon d4’te de korumasız kalır ve d5 karesini Beyazın atına bırakır. Motor 27...Bd8 ile b6 filini değişmeyi biraz daha iyi buluyor (Motor: +2.56 vs +2.86).',
      diger: [
        { move: '27...Bd8', text: 'Güçlü b6 filini değişmeye çalışır: 28.Nxd5 Bxb6 29.Nxb6 (Motor: +2.56).' },
        { move: '27...Ne7', text: '28.Bxd5 Nbxd5 29.Nxd5 Nxd5 ile d5 değişilir (Motor: +2.68).' },
      ],
    },
    '28w': {
      text: 'At d5’e: piyonun bıraktığı güçlü kareye.',
      amac: 'b4 atına saldırmak, merkezde kovulamayan bir karakol kurmak ve e7/c7 karelerine bakmak.',
      neden: '27...d4 sonrası d5 karesi Siyahın hiçbir piyonu tarafından korunamaz. At burada hem b4 atına saldırır hem de Siyahın taşlarını kısıtlar. Motor 28.Nd5’i en iyi gösteriyor (Motor: +2.76).',
      diger: [
        { move: '28.Ne4', text: '28...Be7 29.Rbc1 ile at daha az etkili (Motor: +2.11).' },
        { move: '28.Na4', text: '28...Rc8 29.h4 (Motor: +1.83).' },
      ],
    },
    '28b': {
      text: 'At b4’ten c6’ya çekilir; a5 piyonuna ve e7 karesine bakar.',
      amac: 'Saldırı altındaki atı kurtarmak ve a5 piyonuna baskı yapmak.',
      neden: '28...Nxd5 29.Bxd5 sonrası Beyazın fili d5’te çok güçlü olur (Motor: +3.3). c6’da at hem a5’e hem d4’e destek verir. Motor 28...Nc6’yı en iyi gösteriyor (Motor: +2.87).',
      diger: [
        { move: '28...Nxd5', text: '29.Bxd5 Rbb8 30.b4 ile Beyazın fili d5’e yerleşir (Motor: +3.3).' },
      ],
    },
    '29w': {
      text: 'Fil a4’e: c6 atını bağlar.',
      amac: 'c6 atına baskı yapmak; ileride Bxc6 ile değişip a5 piyonuna yönelik baskıyı ortadan kaldırmak.',
      neden: 'b3’te fil d5 atının arkasında kalıyordu. a4’te c6 atını hedef alır ve Siyahı bir karar vermeye zorlar. Motor 29.Ba4’ü en iyi gösteriyor (Motor: +2.97).',
      diger: [
        { move: '29.Bc4', text: '29...Rd7 30.b4 ile b-piyonu ilerler (Motor: +2.9).' },
        { move: '29.Bc2', text: 'f5 atına baskı (Motor: +2.75).' },
      ],
    },
    '29b': {
      text: 'Kale c-hattına gelir ve c6 atını korur.',
      amac: 'Bağlı atı desteklemek ve c-hattını kontrol etmek.',
      neden: 'At a4 filinin saldırısı altında ve tek korunuyordu. Rc8 hem atı korur hem de c1 karesine bakar. Motor 29...Rc8’i en iyi gösteriyor (Motor: +3.07).',
      diger: [
        { move: '29...Na7', text: 'Atı geri çeker (Motor: +3.28); 30.Nb4 ile Beyaz a6’ya yüklenir.' },
      ],
    },
    '30w': {
      text: 'f4 ile g5 fili kovulur.',
      amac: 'Fili kovmak ve f5 atına baskı yapmak; ileride fxg5 tehdidini hazırlamak.',
      neden: 'Petrosyan Siyahın aktif filini rahatsız eder; fil f4 piyonunu alamaz çünkü 30...Bxf4 sonrası Beyazın d5 atı f4’e saldırır. Motor 30.Bxc6 Rxc6 31.Nb4’ü biraz daha iyi buluyor (Motor: +2.92 vs +2.30), ama 30.f4 de güçlü.',
      diger: [
        { move: '30.Bxc6', text: '30...Rxc6 31.Nb4 Rbxb6 32.axb6 ile a6’ya yüklenir (Motor: +2.92).' },
        { move: '30.h4', text: '30...Bxh4 31.Rbc1 (Motor: +2.58).' },
      ],
    },
    '30b': {
      text: 'At e7’ye: d5 atına saldırır ve g5 filini dolaylı korur.',
      amac: 'd5 atını değişmek; fxg5 sonrası ...Nxd5 ile materyali geri almayı hazırlamak.',
      neden: 'Fil g5’ten çekilemez gibi görünse de Nce7 ile Siyah kendi karşı tehdidini yaratır: 31.fxg5? Nxd5 sonrası Bc6, c8 kalesi tarafından alınabilirdi. Motor 30...Nce7’yi en iyi gösteriyor (Motor: +2.52).',
      diger: [
        { move: '30...Bh4', text: '31.Rbc1 Nfe7 32.Nxe7 Nxe7 (Motor: +3.3).' },
        { move: '30...Bf6', text: '31.Nxf6 gxf6 32.Rbc1 (Motor: +3.5).' },
      ],
    },
    '31w': {
      text: 'Kale c1’e: c-hattına itiraz eder.',
      amac: 'c8 kalesini değişmeye zorlamak ve c6 karesini korumak; fxg5’i hazırlamak.',
      neden: '31.fxg5? Nxd5 sonrası Beyaz avantajın büyük kısmını kaybeder (Motor: +0.74), çünkü Bc6 c8 kalesi tarafından alınır. Rbc1 ile kale c-hattına gelince bu sorun ortadan kalkar. Motor 31.Rbc1’i en iyi gösteriyor (Motor: +2.81).',
      diger: [
        { move: '31.fxg5', text: '31...Nxd5 32.Bxd4 Nxd4 33.Rxd4 Nc3 ile Siyah karşı oyun bulur (Motor: +0.74).' },
        { move: '31.Nxe7', text: '31...Bxe7 32.Rbc1 Rxc1 33.Rxc1 (Motor: +2.81).' },
      ],
    },
    '31b': {
      text: 'Kale b8’e çekilir; c-hattını bırakır.',
      amac: 'b6 filine baskı yapmak.',
      neden: 'Hata. c-hattı bırakılınca 32.fxg5 Nxd5 33.Bc6! işler: c6’daki fil c1 kalesiyle korunur. 31...Rxc1 32.Rxc1 Rb8 ile Siyah direnebilirdi (Motor: +2.42 vs +2.79).',
      diger: [
        { move: '31...Rxc1', text: '32.Rxc1 Rb8 33.Nxe7 Bxe7 (Motor: +2.42).' },
        { move: '31...Bh4', text: '32.Nxe7 Nxe7 33.Rxc8+ Nxc8 (Motor: +3.57).' },
      ],
    },
    '32w': {
      text: 'Beyaz g5 filini alır.',
      amac: 'Fili almak ve ardından Bc6 taktiğini kurmak.',
      neden: 'Siyah 32...Nxd5 ile atı geri alacak, ama 33.Bc6! ile fil b7 kalesine ve d5 atına saldırır. Motor 32.fxg5’i açık farkla en iyi gösteriyor (Motor: +4.18).',
      diger: [
        { move: '32.Nxe7', text: '32...Bxe7 33.Bc6 Rxb6 34.axb6 (Motor: +2.52).' },
      ],
    },
    '32b': {
      text: 'Siyah d5 atını alır; materyal yeniden eşitlenir.',
      amac: 'Taşı geri almak.',
      neden: 'Başka seçenek yok: 32...Kg8 33.Nxe7+ ile Beyaz bir taş önde kalır (Motor: +5.5).',
    },
    '33w': {
      text: 'Bc6! fil b7 kalesine ve d5 atına aynı anda saldırır.',
      amac: 'Çatal ile kalite kazanmak.',
      neden: 'c6’daki fil c1 kalesiyle korunur. Siyah ya kaleyi ya atı kaybeder. 33.Bxd4? Nf4 sonrası Beyaz avantajın çoğunu kaybeder (Motor: +1.29 vs +3.96).',
      diger: [
        { move: '33.Bxd4', text: '33...Nf4 34.Rc2 Nxd4 35.Rxd4 (Motor: +1.29).' },
      ],
    },
    '33b': {
      text: 'Siyah kaleyi b6 filiyle değişir.',
      amac: 'Güçlü b6 filini yok edip b-hattında karşı oyun aramak.',
      neden: 'Kale kaybedilecekti; Siyah en azından b6 filini alır. Motor 33...Nxb6 34.Bxb7 Rxb7 35.Rc6’yı biraz daha iyi buluyor (Motor: +3.77 vs +4.39).',
      diger: [
        { move: '33...Nxb6', text: '34.Bxb7 Rxb7 35.Rc6 h6 36.Rxb6 (Motor: +3.87).' },
      ],
    },
    '34w': {
      text: 'Piyonla alır; b-piyonu artık geçer ve b7’ye yakın.',
      amac: 'b6’da geçer bir piyon yaratmak; Siyahın kalesini b8’e bağlamak.',
      neden: '34.Bxd5? Rxb2 ile Beyaz b-piyonunu kaybeder ve avantaj kaybolur (Motor: −0.16). 34.axb6 en iyi hamledir (Motor: +4.45).',
      diger: [
        { move: '34.Bxd5', text: '34...Rxb2 35.Be4 R2b5 ile Siyah eşitler (Motor: −0.16).' },
      ],
    },
    '34b': {
      text: 'At e3’ten d1 kalesine saldırır.',
      amac: 'Kale kazanmak ya da Beyazı b-piyonunu ilerletmekten vazgeçirmek.',
      neden: 'b6 piyonu b7’ye ve b8’e doğru ilerlemeye hazırken Siyahın en somut karşı oyunu, Beyazın bir kalesini çatalla kazanmaktır. Böylece Beyaz ya kaleyi kurtarıp zaman kaybeder ya da kaliteyi geri verir. Motor 34...Nxb6 ile tehlikeli piyonu hemen almayı biraz daha iyi buluyor (Motor: +4.25 vs +4.46).',
      diger: [
        { move: '34...Nxb6', text: '35.Be4 Ne3 36.Rxd4 (Motor: +4.25).' },
      ],
    },
    '35w': {
      text: 'b7: piyon vezire çıkmaya bir adım uzakta; d1 kalesi feda edilir.',
      amac: 'Siyahın kalesini b8’e kalıcı olarak bağlamak.',
      neden: 'Motor 35.Be4 ya da 35.Bd7’yi biraz daha iyi buluyor (Motor: +4.55/+4.60 vs +3.28): fil önce f5 atını alır. Petrosyan doğrudan piyonu ilerletti; kazanç yine de açık.',
      diger: [
        { move: '35.Be4', text: '35...Nxd1 36.Bxf5 Kg8 37.b7 (Motor: +4.49).' },
      ],
    },
    '35b': {
      text: 'Siyah d1 kalesini alır.',
      amac: 'Materyal kazanmak.',
      neden: 'Zorunlu. Diğer hamleler (35...g6, 35...h6) daha da kötü (Motor: +5.1/+5.6).',
    },
    '36w': {
      text: 'Beyaz kaleyle geri alır.',
      amac: 'Materyali geri almak; kale + fil karşısında kale + at.',
      neden: 'Zorunlu. Materyal eşit, ama b7 piyonu Siyahın kalesini b8’e bağlar ve Beyazın kalesi serbesttir.',
    },
    '36b': {
      text: 'Siyah g6 ile şahına kaçış karesi açar.',
      amac: 'Arka yatay matını önlemek ve f5 atını korumak.',
      neden: 'Siyahın kalesi b8’e bağlı olduğu için arka yatayda mat tehlikesi her zaman vardır (Rd8+ gibi). g6 hem kaçış karesi açar hem de f5 atına destek verir, ama g6 karesini zayıflatıp g5 piyonuyla f6 karesini Beyaza bırakır. Motor 36...h5’i biraz daha iyi buluyor (Motor: +3.98 vs +4.28); konum her durumda kaybedilmiş.',
      diger: [
        { move: '36...h5', text: '37.Kf2 Kh7 38.Ra1 (Motor: +3.98).' },
      ],
    },
    '37w': {
      text: 'g4 ile f5 atı kovulur.',
      amac: 'Atı merkezden uzaklaştırmak ve d4 piyonunu korumasız bırakmak.',
      neden: 'At d4’ü koruyordu. Kovulunca 38.Rxd4 mümkün olur. Motor 37.g4’ü en iyi gösteriyor (Motor: +4.41).',
      diger: [
        { move: '37.Bf3', text: '37...a5 38.Rc1 Nd6 (Motor: +3.75).' },
      ],
    },
    '37b': {
      text: 'At g7’ye çekilir.',
      amac: 'Atı güvenli bir kareye çekmek.',
      neden: 'Motor 37...Nd6’yı biraz daha iyi buluyor (Motor: +4.26 vs +5.18): at b7 piyonuna saldırır.',
      diger: [
        { move: '37...Nd6', text: '38.Rxd4 Nxb7 39.Rb4 Rc8 40.Bxb7 (Motor: +4.26).' },
      ],
    },
    '38w': {
      text: 'Kale d4 piyonunu alır.',
      amac: 'Bir piyon kazanmak ve kaleyi yedinci yataya getirmeye hazırlanmak.',
      neden: 'd4 piyonu Siyahın son karşı oyun umuduydu; onu alınca Beyaz bir piyon önde kalır ve kale d-hattından yedinci yataya girmeye hazırlanır. Motor önce 38.Bf3 ile fili güvenli kareye çekip piyonu sonra almayı biraz daha iyi buluyor (Motor: +5.00 vs +4.59); fark pratikte önemsiz.',
      diger: [
        { move: '38.Bf3', text: '38...Ne8 39.Rxd4 Kg7 40.Rd7 (Motor: +5.00).' },
      ],
    },
    '38b': {
      text: 'At e6’ya: d8 ve c7 karelerini kontrol eder.',
      amac: 'Beyazın kalesinin d8’e girmesini önlemek.',
      neden: 'Rd7 ve ardından Rd8+ ya da Rc7–c8 ile b8 kalesini değişip piyonu vezire çıkarmak Beyazın ana tehdidiydi. Ne6 at d8 ve c7 karelerini kapatır; böylece kale b8’de b-piyonunu durdurmaya devam edebilir. Motor 38...Ne6’yı en iyi gösteriyor (Motor: +4.71), ama bu sadece direnişi uzatır.',
      diger: [
        { move: '38...Kg8', text: '39.Rd7 Ne6 40.Bd5 Nd8 ile benzer bir pasiflik (Motor: +4.90).' },
        { move: '38...h5', text: '39.Be4 hxg4 40.Rc4 ile Beyazın kalesi c8’e girer (Motor: +5.37).' },
      ],
    },
    '39w': {
      text: 'Rd7: kale yedinci yatayda. Spasski terk etti.',
      amac: 'f7’ye saldırmak ve b7 piyonunu desteklemek; Siyahı tamamen felç etmek.',
      neden: 'Siyahın kalesi b8’e bağlı, at d8’i korumak zorunda. Beyaz Bd5 ve Rxf7 ile piyonları toplayacak. Motor 39.Rd7’yi en iyi gösteriyor (Motor: +4.73).',
      diger: [
        { move: '39.Rc4', text: '39...Nd8 40.Bf3 (Motor: +4.63).' },
      ],
    },
  },
  exercises: [
    { id: 'ps-1', kind: 'tekrar', plan: true, title: 'Tek piyonu ilerletin',
      source: 'Petrosyan – Spasski, Moskova 1971 (19. hamle)',
      fen: '3qnr1k/rb2bppp/pp2p2B/4N3/Pn1P4/1BN3Q1/1P3PPP/2RR2K1 w - - 6 19',
      prompt: 'Beyazın bütün taşları şah kanadında, Siyahın atı e8’e çekildi. Petrosyan merkezi nasıl açtı?',
      hint: 'Tek kalmış piyonun ilerleyebileceği bir kare var.',
      line: ['d5'],
      explanation: '**19.d5!** Siyah ...exd5 ile alır, Beyaz 20.Be3 ile b6 piyonuna saldırır ve açılan hatlar Siyahın vezir kanadındaki zayıflıkları ortaya çıkarır. Motor 19.Be3’ü de aynı güçte görüyor (+1.2, d5 +1.1).',
      link: 'Tek piyonun sahibi için en güçlü an, rakibin taşları başka yere çekildiği andır. Petrosyan d5 ile oyunu açtı.' },
    { id: 'ps-2', kind: 'tekrar', plan: false, title: 'Zayıf piyonu alın',
      source: 'Petrosyan – Spasski, Moskova 1971 (22. hamle)',
      fen: 'r2q1r1k/1b2bppp/pp1n4/3p4/PnN5/1BN1B1Q1/1P3PPP/2RR2K1 w - - 4 22',
      prompt: 'Merkez açıldı, Siyah ...Nd6 ile c4 atına saldırdı. Ne oynarsınız?',
      hint: 'b6 piyonu kaç kez korunuyor?',
      line: ['Bxb6'],
      explanation: '**22.Bxb6!** Piyon düşer ve fil d8 vezirine saldırır. 22...Nxc4 23.Bxd8 ile Beyaz materyal kazanır. Diğer hamlelerde avantaj kaybolur (motor: Bxb6 +1.6, sonraki en iyi hamle 0.0).',
      link: 'd5 kırılmasının ödülü: Siyahın savunmaya çekilmiş taşları vezir kanadını koruyamadı.' },
    { id: 'ps-3', kind: 'transfer', plan: false, title: 'Smislov’un d5 kırılması',
      source: 'Smislov – Karpov, SSCB Şampiyonası, Leningrad 1971 (21. hamle)',
      fen: '2r1r1k1/1b3p1p/ppn1pbpB/7q/3P4/PB2QN2/1P3PPP/3RR1K1 w - - 4 21',
      prompt: 'Yine Beyazın tek piyonu d4’te, bu kez Yarı Tarrasch’tan. Siyahın veziri h5’e gitti. Tek piyonu nasıl kullanırsınız?',
      hint: 'Piyon e6 ile tıkanmış gibi görünüyor, ama d5 karesi korumasız mı?',
      line: ['d5'],
      explanation: '**21.d5!** Piyon c6 atına saldırır ve e6 piyonunu bağlar. 21...exd5 22.Bxd5 ya da 21...Nd8 22.d6 ile piyon yedinci yataya kadar ilerler. Motor: d5 +4.2, sonraki en iyi hamle +1.4.',
      link: 'Petrosyan d5 ile hatları açtı; Smislov d5 ile geçer piyon yarattı. Aynı kırılma, farklı sonuç: burada piyon d7’ye kadar ilerleyip oyunu bitirdi.' },
    { id: 'ps-4', kind: 'transfer', plan: false, title: 'Piyon d7’ye',
      source: 'Smislov – Karpov, SSCB Şampiyonası, Leningrad 1971 (23. hamle)',
      fen: '3nr1k1/1b3p1p/pp1PpbpB/2r4q/8/PB2QN2/1P3PPP/3RR1K1 w - - 1 23',
      prompt: 'Geçer piyon d6’da. Siyah ...Rc5 ile kaleyi oyuna soktu. Piyonu nasıl kullanırsınız?',
      hint: 'Piyon e8 kalesine saldırabilir.',
      line: ['d7'],
      explanation: '**23.d7!** Piyon e8 kalesine saldırır; Siyah kaleyi çekince Beyazın veziri b8 üzerinden d8’e baskı yapar. Smislov birkaç hamle sonra piyonu d8’de vezire çıkardı. Motor: d7 +1.8, sonraki en iyi hamle +0.8.',
      link: 'Petrosyan’ın maçında tek piyon d5’te değişildi; Smislov’un maçında yedinci yataya kadar ilerledi. İki maçta da kırılma, Siyahın taşları başka yerdeyken yapıldı.' },
  ],
};
