// Anand – Morozevich, Dortmund turnuvası, Dortmund 2001 (6. tur). Kaynak: PgnMentor (Anand.pgn, Morozevich.pgn).
export default {
  id: 'anand-morozevich-2001',
  theme: 'Ra7–c7 kalesi ve ikilenmiş f-piyonlarına baskı',
  white: 'Viswanathan Anand', black: 'Alexander Morozevich',
  whiteShort: 'Anand', blackShort: 'Morozevich',
  event: 'Dortmund turnuvası', site: 'Dortmund', year: 2001, eco: 'D11',
  variation: 'Slav Savunması, Chebanenko 4...a6 (4.e3, 5.Bd3 Bg4 6.Qb3)', result: '0-1',
  pgn: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 a6 5. Bd3 Bg4 6. Qb3 Bxf3 7. gxf3 Ra7 8. Nc3 e6 9. Qc2 Be7 10. Bd2 O-O 11. O-O-O Nbd7 12. cxd5 cxd5 13. e4 Kh8 14. e5 Nh5 15. Bxh7 b5 16. Kb1 Rc7 17. Qd3 Bg5 18. f4 Bxf4 19. Bxf4 Nxf4 20. Qe3 Qh4 21. Bc2 Rfc8 22. Bd3 Nb6 23. Ne2 Nxd3 24. Rxd3 Nc4 25. Qf3 Qe4 26. Qxe4 dxe4 27. Rh3+ Kg8 28. Rd1 Nxb2 0-1`,

  summary: 'Sonuç 0-1: oyunu **Morozevich (Siyah)** kazandı. Chebanenko Slav’ında (4...a6) Anand sakin 4.e3 ve 5.Bd3 ile oynadı; Morozevich 5...Bg4 ile filini dışarı çıkardı, 6.Qb3’e karşı filini f3’te verip Beyazın f-piyonlarını ikiledi ve b7’yi **7...Ra7** ile yandan korudu. Anand açık g-hattı ve fil çiftine güvenerek uzun rok yaptı, 13.e4-14.e5 ile alan kazandı ve 15.Bxh7 ile bir piyon aldı. Motor bu piyon alışını cazip ama şüpheli buluyor: fil h7’de hapsoldu ve Siyah zamanı vezir kanadında kullandı. a7 kalesi yedinci yatay boyunca **c7’ye** geçti, ...b5 ile karşı oyun başladı, 18...Bxf4 ile piyon geri alındı. Asıl dönüm 20.Qe3? (20.Qg3 ile denge) ve 21.Bc2 oldu: 20...Qh4 ve 21...Rfc8 sonrası Siyahın taşları bütün tahtaya hâkim oldu. Morozevich 23...Nxd3 ile Beyazın tek iyi filini aldı, atını c4’e yerleştirdi ve vezirleri değiştirerek kaleleri c-hattında, atı c4’te olan çok rahat bir oyun sonuna geçti. 28.Rd1? b2’yi korumasız bıraktı ve 28...Nxb2! oyunu bitirdi (Motor: −3.7). Bu yenilgi, Anand’ın bu turnuvada sıfır galibiyetle sonuncu kaldığı (6 beraberlik, 4 yenilgi) kötü bir turnuvanın parçasıydı.',
  intro: 'Dortmund 2001, altı oyunculu çift devreli bir süper turnuvaydı (Kramnik, Topalov, Leko, Morozevich, Adams, Anand). Kramnik ve Topalov 6.5 puanla bitirdi, Kramnik tie-break ile birinci oldu; Anand 3 puanla sonuncu kaldı. Bu oyun ikinci devrenin başında oynandı. Açılış **Chebanenko Slav’ı**: Siyah 4...a6 ile, c8 filini ...e6 arkasına kilitlemeden vezir kanadını ...b5 ile geliştirmek ister. Beyaz 4.e3 ile keskin ana yollardan kaçar. 5.Bd3’ten sonra Siyahın klasik ...Bf5 hamlesi mümkün değildir (fil korumasız kalır ve Bxf5 ile düşer), bu yüzden fil **g4’e** çıkar. 6.Qb3 ise Slav’ın bilinen sorusunu sorar: c8 fili dışarıda olunca b7 kim korur? Morozevich’in cevabı iki katmanlıdır: önce 6...Bxf3 7.gxf3 ile Beyazın piyon yapısını bozmak, sonra a6 piyonunun boşalttığı kareden **7...Ra7** ile b7’yi yandan savunmak. Bologan’ın Chebanenko kitabı üzerine yazılan bir incelemede de belirtildiği gibi bu sistemde bazen “...Ra8-a7 ile b7’yi Qb3’e karşı korumak” iyi bir çözümdür, bazen ise kale a7’de pasif kalır. Bu oyunda kale önce pasif görünse de yedinci yatay boyunca c7’ye geçip oyunu kazandıran taşlardan biri oldu.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Fil çiftini ve ikilenmiş f-piyonlarının kontrol ettiği e4 karesini kullanarak **e3-e4** ile merkezde ilerlemek; f3 piyonu e4’ü destekler, açık g-hattı ise kalelere yol verir.',
      '**Uzun rok** yapıp g-hattından (Rhg1, Rdg1) ve b1-h7 çaprazından (Bd3 + Qc2) kısa rok yapmış Siyah şaha saldırmak.',
      '**e4-e5** ile f6 atını kovmak, şah kanadındaki savunmayı zayıflatmak ve h7 piyonunu fil-vezir bataryasıyla hedef almak (oyunda 15.Bxh7).',
      'Kara kareli filiyle f4 ve e3 karelerini tutmak, ikilenmiş f-piyonlarını taşlarla korumak; f-piyonları ilerlerse (f4) savunmasız hedefe dönüşebileceklerini unutmamak.',
      'Daha sağlam bir seçenek olarak vezir kanadında **c4-c5** ile alan kazanmak: motor 9., 10. ve 11. hamlelerde c5’i en iyi buldu (yaklaşık +0.4), çünkü bu Siyahın ...b5 ve c-hattı oyununu baştan zorlaştırır.',
      'Piyon kazandıktan sonra (15.Bxh7) h7 filini kurtarmak ve şahı c-hattından uzaklaştırmak (16.Kb1); oyunda bu savunma görevleri saldırıdan daha fazla zaman aldı.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Fili f3’te verip **Beyazın piyon yapısını bozmak**: ikilenmiş f-piyonları ve izole h-piyonu oyun sonunda kalıcı hedeflerdir.',
      'b7’yi **...Ra7** ile yandan korumak, ardından bu kaleyi yedinci yatay boyunca **c7’ye** getirip c-hattına bağlamak.',
      'Beyaz uzun rok yaptıysa **...b5-b4** ile c3 atını kovmak ve c-hattını açmak; c2’deki vezir ve c3 atı aynı hatta durdukça bu tehdit büyür.',
      'Şah kanadındaki saldırıya karşı sakin kalmak (13...Kh8, 14...Nh5) ve h7 piyonunu verip karşılığında zaman ve aktif taşlar almak.',
      'Kaybedilen piyonu **ikilenmiş f-piyonlarından geri almak** (18...Bxf4) ve atı f4 gibi güçlü bir kareye yerleştirmek.',
      'Beyazın tek iyi taşı olan beyaz kareli fili atla değişmek (23...Nxd3) ve diğer atı **c4’e** yerleştirmek; burada fil yoktur ve at kovulamaz.',
      'Vezirleri değişip (25...Qe4) b2, f2 ve h2 piyonlarına karşı kaleler ve atla rahat bir **oyun sonu** oynamak.',
    ] },
  },
  critical: [
    { move: '7b', title: '...Ra7: b7’yi yandan savunmak', text: 'Chebanenko’da 4...a6 oynandığı için a7 karesi boştur ve kale b7’yi yandan korur. Siyahın piyon yapısı bozulmaz (6...b5 gibi bir hamle c6’yı zayıflatırdı). Motor 7...Qc7’yi biraz daha doğru buluyor (Motor: +0.3, oyunda +0.6), çünkü kale a7’de bir süre pasif kalır. Ama Morozevich’in fikri uzun vadeliydi: kale yedinci yatay boyunca c7’ye geçecek ve c-hattında, uzun rok yapmış şaha karşı oyunun en aktif taşlarından biri olacaktı.' },
    { move: '15w', title: '15.Bxh7: cazip ama şüpheli piyon', text: 'Anand c2 vezirinin desteğiyle h7 piyonunu aldı. Ama fil h7’de hapsoldu: ...Kxh7 tehdidi yüzünden vezir sürekli b1-h7 çaprazında kalmak zorunda kaldı. Siyah bu zamanı 15...b5, 16...Rc7, 17...Bg5 ile kullandı. Motor 15.Ne2 (Ng3 ile h5 atına baskı) veya 15.Kb1 ile Beyazı açıkça üstün buluyor (Motor: +0.7); piyon alışından sonra denge (Motor: +0.1).' },
    { move: '18b', title: '...Bxf4! piyonu geri almak', text: 'Beyaz 18.f4 ile g5 filini kovmak istedi, ama Siyah ikilenmiş f-piyonlarından birini aldı. 19.Bxf4 Nxf4 sonrası at d3 vezirine saldırır ve malzeme eşitlenir. Hamle sırası önemlidir: 18...Nxf4? 19.Bxf4 Bxf4 20.Qh3 (Motor: +0.8) sonrası Beyazın veziri h-hattına geçer ve Siyah şahı tehlikeye girer.' },
    { move: '20w', title: '20.Qe3? dengeyi kaybeden hamle', text: 'f4 atına saldıran üç vezir hamlesi vardı. 20.Qg3 g7’ye ve atı hedef alır; 20...Nh5 21.Bc2 Nxg3 22.hxg3+ ile h-hattından şah çekilir ve oyun eşittir (Motor: 0.0). 20.Qe3 ise vezire h4 karesini bıraktı: 20...Qh4! atı korudu, h7 filine ve f2’ye saldırdı (Motor: −0.5, ardından −0.6).' },
    { move: '21b', title: '...Rfc8: ikinci kale de c-hattına', text: 'Kaleler c7 ve c8’de ikilenince c3 atı c2 filine bağlı hâle gelir ve ...b4 tehdidi doğar: 22.Rhg1? b4 23.h3 bxc3 sonrası Siyah taş kazanır (Motor: −2.0). Daha basit görünen 21...Kg8 veya 21...Nb6 ise üstünlüğü büyük ölçüde dağıtırdı (Motor: yaklaşık −0.3/−0.5). Morozevich şahının güvenliğinden çok taşlarının aktifliğini düşündü.' },
    { move: '23b', title: '...Nxd3: iyi fili değişmek', text: 'Siyah, Beyazın b1-h7 çaprazındaki tek iyi taşını atıyla alır. Böylece b6 atı c4’e rakipsiz yerleşir: c4’e saldırabilecek beyaz kareli fil kalmaz. Motor: ...Nxd3 −2.0; 23...Nxe2 24.Qxe2 Nc4 ise yalnızca −0.5, çünkü o zaman d3 fili c4 atını hemen alabilir.' },
    { move: '25b', title: '...Qe4: kazanılmış bir oyun sonuna geçiş', text: 'Siyah vezir değişimi önerir. 26.Qxe4 dxe4 sonrası e4 piyonu d3 ve f3 karelerini tutar, c4 atı b2, d2 ve a3 karelerine bakar, kaleler ise c-hattını elinde tutar. Beyazın vezirden kaçması (26.Rd1 veya 26.Ka1) 26...Nxb2 ile daha da kötü olurdu (Motor: −3.5). Motor ...Qe4 ile 25...b4 veya ...Kg8’i hemen hemen eşit görüyor (−2.1 civarı); Morozevich en anlaşılır yolu seçti.' },
    { move: '28b', title: '...Nxb2! şahın önündeki piyon', text: '28.Rd1? (28.a3 veya 28.Nc3 ile Motor: −2.2) sonrası at b2 piyonunu alır. 29.Kxb2 Rc2+ 30.Ka3 Rxe2 ile Siyah taşını geri alır, bir piyon önde kalır ve kalesi ikinci yatayda f2’yi yer (Motor: −3.7). 29.Rc1 Rxc1+ 30.Nxc1 Nd1 sonrası f2 de düşer. Anand terk etti.' },
  ],
  lessons: [
    'Chebanenko’da ...a6 hamlesi, b7’ye yapılan Qb3 baskısına karşı **...Ra7** savunmasını mümkün kılar; bu kale sonra yedinci yatay boyunca c7’ye geçip c-hattında etkili olabilir.',
    'Slav’da fil c8’den çıktıktan sonra b7 zayıftır; 5.Bd3’ten sonra ...Bf5 korumasız fili kaybettirir, bu yüzden fil g4’e gider ve Qb3’e ...Bxf3 ile cevap verilir.',
    '...Bxf3 ile ikilenen f-piyonları kalıcı hedeflerdir; ilerledikleri anda (18.f4) taşlarla alınabilirler.',
    'Kenardaki bir piyonu almak (15.Bxh7) taşınızı hapsedebilir ve vezirinizi savunmaya bağlayabilir; rakibin karşı oyunu için kaybedilen zamanı hesaplayın.',
    'Rakibin şahı uzun rok yaptıysa c-hattına ikilenen kaleler ve ...b5-b4 ilerleyişi, c3 atını ve c2’deki taşları bağlayan güçlü bir karşı oyundur.',
    'Rakibin iyi filini atla almak (23...Nxd3), diğer atınız için kovulamayan bir ileri kare (c4) bırakır.',
    'Oyun sonunda şahın önündeki piyonlar (b2) da hedef olabilir: ...Nxb2 sonrası Kxb2 gelirse kale şah çekerek taşı geri alır.',
  ],
  qa: [
    { q: 'Oyunu kim kazandı ve nasıl bitti?', a: 'Sonuç 0-1: Alexander Morozevich (Siyah) kazandı. 28.Rd1? sonrası 28...Nxb2! geldi; 29.Kxb2 Rc2+ 30.Ka3 Rxe2 ile Siyah taşını geri alıp bir piyon önde ve çok aktif kalelerle kalırdı (Motor: −3.7). Anand bu noktada terk etti.' },
    { q: 'Morozevich neden 5...Bf5 değil 5...Bg4 oynadı?', a: 'Beyazın fili d3’te olduğu için 5...Bf5?? 6.Bxf5 korumasız fili kaybettirir (Motor: +5.3); Slav’da ...Bf5 genellikle Beyazın fili d3’e gelmeden ya da ...e6 ile birlikte oynanır. g4’te fil f3 atını bağlar ve aktif kalır. Fiyatı ise b7’nin zayıflamasıdır; 6.Qb3 tam olarak bunu sorar.' },
    { q: 'Siyah b7’yi neden 7...Ra7 ile korudu, 7...Qc7 ya da 7...b5 ile değil?', a: 'Motor 7...Qc7’yi biraz daha iyi buluyor (+0.3’e karşı +0.6). Ama vezir c7’de c-hattına açılacak bir kalenin önünü kapatabilir ve ileride Beyazın c4-c5 veya Nb5 gibi hamleleriyle tempo kaybedebilirdi. 7...b5 ise 8.cxd5 cxd5 (ya da 8...Nxd5) sonrası c6 ve a6’yı zayıflatırdı (Motor: +0.6/+0.9). Ra7 piyon yapısını bozmadan b7’yi korur ve kale yedinci yatayda c7’ye geçmeye hazır bekler; oyun bu planın işe yaradığını gösterdi.' },
    { q: '15.Bxh7 bir hata mıydı?', a: 'Tam bir hata değil ama motorun tercihi değil: 15.Bxh7 sonrası Motor +0.1, 15.Ne2 veya 15.Kb1 ile +0.7. Sorun, fil h7’de kapana kısılmış gibi durdu ve veziri b1-h7 çaprazında kalmaya mecbur bıraktı. Siyah bu sırada ...b5, ...Rc7 ve ...Bg5 ile taşlarını aktifleştirdi ve 18...Bxf4 ile piyonu geri aldı.' },
    { q: 'Beyazın avantajı nerede kayboldu?', a: 'İlk 19 hamlede oyun genel olarak dengedeydi. 20.Qe3? (20.Qg3 ile Motor: 0.0) vezire h4 karesini bıraktı; 20...Qh4 hem f4 atını korudu hem h7 filine saldırdı (−0.6). 21.Bc2 (21.Bd3 Nxd3 ile filleri değişmek, −0.6) ve 23.Ne2 (23.Qg3, −1.3) gibi küçük yanlışlıklar Siyahın üstünlüğünü −2’ye çıkardı. Son hata 28.Rd1? oldu.' },
    { q: 'Siyah neden 23...Nxe2 değil 23...Nxd3 oynadı?', a: '23...Nxe2 24.Qxe2 Nc4 sonrası d3 fili hâlâ tahtadadır ve 25.Bxc4 ile güçlü atı alabilir (Motor: −0.5). 23...Nxd3 ise Beyazın c4 karesini kontrol edebilecek tek taşını ortadan kaldırır; böylece b6 atı c4’e kalıcı olarak yerleşir (Motor: −2.0). Kural: rakibin, iyi karenizi tutan taşını alın.' },
    { q: 'Morozevich neden vezirleri değişti? Saldırı daha iyi değil miydi?', a: 'Beyazın şahı b1’de zayıftı, ama vezirsiz oyun sonu daha da açıktı: b2, f2 ve h2 piyonları zayıf, Siyahın kaleleri c-hattında, atı c4’te ve 26...dxe4 sonrası e4 piyonu d3 ve f3’ü tutuyordu. Motor 25...Qe4 ile 25...b4 veya 25...Kg8 arasında neredeyse fark görmüyor (−2.1 civarı), yani Morozevich riski azaltan ve hatayı zorlaştıran yolu seçti.' },
    { q: 'Beyaz son durumda nasıl daha iyi savunabilirdi?', a: '28.a3 (b2’yi gelecekte b3 ile koruma imkânı) veya 28.Nc3 ile Motor −2.2 gösteriyor. Örneğin 28.a3 Nxb2 29.Ng3 Na4 30.Nxe4 sonrası Beyaz piyonunu geri alır. 28.Rd1? ise e2 atını savunmasız bıraktı ve ...Nxb2 Kxb2 Rc2+ taktiğine izin verdi.' },
  ],
  notes: {
    '1w': {
      text: '1.d4: vezir piyonu açılışı. Piyon merkeze çıkar, e5 ve c5 karelerini kontrol eder.',
      amac: 'Merkezi tutmak ve ardından c4 ile Vezir Gambiti kurmak.',
      neden: 'Anand hem 1.e4 hem 1.d4 oynayan bir oyuncudur. Vezir Gambiti, Morozevich’in Slav’ına karşı sağlam ve uzun vadeli bir baskı verir.',
      diger: [
        { move: '1.e4', text: 'Anand’ın ana silahı. Motor bunu biraz daha iyi buluyor (+0.4), ama aradaki fark pratikte önemsiz.' },
        { move: '1.Nf3', text: 'Esnek bir hamle; d4 ile aynı yapılara dönebilir (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: '1...d5: Siyah merkezde aynı simetrik cevabı verir ve e4 karesini tutar.',
      amac: 'Klasik merkez yapısı kurup ardından ...c6 ile Slav’a geçmek.',
      neden: 'Morozevich çok yönlüdür ve 1...d5 ile Vezir Gambiti yapılarına (Slav, Chigorin) girmeyi sever. ...d5 merkezde hemen yer alır.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına esneklik bırakır (Motor: +0.3).' },
        { move: '1...e6', text: 'Fransız veya Vezir Gambiti Kabul Edilmemiş yapısına geçiş.' },
      ],
    },
    '2w': {
      text: '2.c4: Vezir Gambiti. c-piyonu d5 piyonuna saldırır.',
      amac: 'd5’i merkezden uzaklaştırmak ve c-hattını açmak.',
      neden: 'Siyah ...dxc4 alırsa Beyaz e4 ile merkezi kurar; almazsa d5 ve c-hattı sürekli baskı altında kalır. Bu en ilkesel devamdır (Motor: +0.3).',
      diger: [
        { move: '2.Nf3', text: 'Önce at; c4 sonraya kalır (Motor: +0.2).' },
        { move: '2.Bf4', text: 'Londra Sistemi: daha sakin, merkez baskısı az.' },
      ],
    },
    '2b': {
      text: '2...c6: Slav Savunması. d5 piyonu c-piyonuyla desteklenir.',
      amac: 'd5’i ...e6 oynamadan korumak; böylece c8 fili serbest kalır.',
      neden: 'Vezir Gambiti Kabul Edilmemiş’te (2...e6) c8 fili e6 piyonunun arkasında hapsolur. Slav’da fil dışarı çıkabilir. Bunun bedeli, ileride b7 piyonunun korunmasının zorlaşmasıdır; bu oyunda bu konu çok önemli olacak.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Kabul Edilmemiş; c8 fili kapanır (Motor: +0.3).' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabul: merkez Beyaza bırakılır ama Siyah hızlı gelişir (Motor: +0.3).' },
        { move: '2...Nc6', text: 'Chigorin Savunması; Morozevich bunu da oynar ve bu savunma üzerine bir kitap yazmıştır.' },
      ],
    },
    '3w': {
      text: '3.Nf3: at gelişir, e5 karesini kontrol eder ve d4’ü destekler.',
      amac: 'Gelişmek ve esnek kalmak: atın c3’e gelip gelmeyeceği sonraya bırakılır.',
      neden: '3.Nc3 sonrası Siyah ...dxc4 veya ...e6 ile Yarı-Slav’a farklı yollar seçebilir. 3.Nf3 bazı keskin sistemleri (örneğin Winawer karşı gambiti 3...e5) önler.',
      diger: [
        { move: '3.Nc3', text: 'En popüler devam; 3...e5 Winawer karşı gambitine izin verir (Motor: +0.4).' },
        { move: '3.cxd5', text: 'Değişme Slav’ı: simetrik ve sakin yapı (Motor: +0.4).' },
      ],
    },
    '3b': {
      text: '3...Nf6: at gelişir ve d5 ile e4’ü kontrol eder.',
      amac: 'Normal gelişim; ...a6 veya ...Bf5 kararını bir hamle sonraya bırakmak.',
      neden: 'Bu, Slav’ın ana yoludur. 3...dxc4 piyonu hemen alır ama 4.e3 b5 5.a4 ile Beyaz piyonu geri kazanır.',
      diger: [
        { move: '3...e6', text: 'Yarı-Slav yapısına doğru; c8 fili yine kapanır (Motor: +0.4).' },
        { move: '3...dxc4', text: 'Piyonu tutmak zordur; Beyaz e3 ve a4 ile geri alır (Motor: +0.5).' },
      ],
    },
    '4w': {
      text: '4.e3: sakin ve sağlam bir kuruluş (“Yavaş Slav”). Beyaz c4 piyonunu korur ve fili d3’e çıkarmaya hazırlanır.',
      amac: 'Keskin 4.Nc3 dxc4 ana yollarından kaçmak ve Siyahın c8 filine sorular sormak.',
      neden: '4.e3 ile Beyazın kara kareli fili c1’de kapanır, ama c4 piyonu korunur ve ...dxc4 artık piyon kazanmaz. Anand böylece Morozevich’in hazırlıklı olduğu ana yollar yerine kendi bildiği bir yapıya girer.',
      diger: [
        { move: '4.Nc3', text: 'Ana yol; 4...dxc4 5.a4 Bf5 gibi keskin teori (Motor: +0.3).' },
        { move: '4.cxd5', text: 'Değişme yapısı; simetri ve sakin bir oyun (Motor: +0.3).' },
      ],
    },
    '4b': {
      text: '4...a6: Chebanenko hamlesi. Siyah ...b5 ile vezir kanadında alan kazanmayı düşünür.',
      amac: 'c8 filini kapatmadan vezir kanadını geliştirmek; uygun anda ...b5 veya ...dxc4 ve ...b5 oynamak. Ayrıca a7 karesi kale için boşalır.',
      neden: 'Bu sistem 1990’larda Moldovalı antrenör Chebanenko’nun okulundan yaygınlaştı. 4.e3’e karşı ...Bf5 en yaygın cevaptır; 4...a6 ise Siyahın b7 sorununu daha sonra ...Ra7 gibi alışılmadık yollarla çözmesine izin verir. Motor 4...Bf5’i biraz daha iyi buluyor (+0.3’e karşı +0.4).',
      diger: [
        { move: '4...Bf5', text: 'En yaygın cevap: 5.Nc3 e6 6.Nh4 ile Beyaz fil çifti alır (Motor: +0.3).' },
        { move: '4...Bg4', text: 'Fil hemen g4’e; 5.Qb3 ile b7 sorusu doğar (Motor: +0.4).' },
        { move: '4...e6', text: 'Yarı-Slav yapısı; c8 fili kapanır.' },
      ],
    },
    '5w': {
      text: '5.Bd3: fil d3’e gelişir ve b1-h7 çaprazına yerleşir.',
      amac: 'Kısa rok için hazırlık ve Siyahın c8 filine ...Bf5 karesini yasaklamak.',
      neden: 'Fil d3’te dururken ...Bf5 oynanamaz, çünkü fil korumasız kalır. Böylece Siyah ya fili g4’e çıkarmalı ya da kapalı tutmalıdır. Motor 5.Nbd2 veya 5.Nc3’ü biraz daha iyi buluyor (+0.3’e karşı +0.2), çünkü 5.Bd3 c4’ü korumasız bırakır ve ...dxc4 Bxc4 ile tempo kaybettirebilir.',
      diger: [
        { move: '5.Nbd2', text: 'c4’ü atla destekler; ...Bf5’e Nh4 ile cevap hazırlanır (Motor: +0.4).' },
        { move: '5.Nc3', text: 'Normal gelişim; 5...b5 ile Chebanenko’nun tipik yapıları (Motor: +0.3).' },
        { move: '5.c5', text: 'Vezir kanadında alanı hemen kapatmak; Chebanenko’ya karşı bilinen bir fikir.' },
      ],
    },
    '5b': {
      text: '5...Bg4: fil g4’e çıkar ve f3 atını bağlar.',
      amac: 'Fili e6 piyonunun önüne, aktif bir kareye çıkarmak: Slav’ın temel fikri budur.',
      neden: '5...Bf5?? 6.Bxf5 bir taş kaybettirir (Motor: +5.3). Fil g4’te ise f3 atını bağlar ve ...Bxf3 ile Beyazın piyon yapısını bozma imkânı verir. Bedeli b7’nin zayıflamasıdır.',
      diger: [
        { move: '5...dxc4', text: '6.Bxc4 c5 ile Kraliçe Gambiti Kabul’e benzer bir yapı; motorun ilk tercihi (Motor: +0.2).' },
        { move: '5...e6', text: 'Sağlam ama c8 fili kapanır (Motor: +0.5).' },
        { move: '5...Bf5?', text: '6.Bxf5 ile fil korumasız kalır ve düşer (Motor: +5.3).' },
      ],
    },
    '6w': {
      text: '6.Qb3: vezir b7 piyonuna saldırır. Fil g4’e çıktığı için b7 artık c8 filiyle korunmuyor.',
      amac: 'Siyahı b7’yi savunmaya zorlamak veya filini f3’te vermeye mecbur bırakmak.',
      neden: 'Bu, fili erken çıkan Slav’a karşı klasik cevaptır. Vezir b3’ten hem b7’ye hem d5’e baskı yapar. Motor 6.Nbd2 veya 6.h3’ü biraz daha iyi buluyor (+0.3’e karşı +0.2); 6.Qb3 sonrası Siyah ...Bxf3 ile kolay oyun bulabilir.',
      diger: [
        { move: '6.Nbd2', text: 'Sakin gelişim; 6...e6 7.Qc2 ile yavaş bir oyun (Motor: +0.3).' },
        { move: '6.h3', text: 'Fili sorgulamak: 6...Bh5 7.Nbd2 (Motor: +0.3).' },
      ],
    },
    '6b': {
      text: '6...Bxf3: Siyah fili f3’te verir. Beyaz g-piyonuyla alacak ve piyon yapısı bozulacak.',
      amac: 'b7’ye yapılan baskıyı ...Ra7 ile karşılamadan önce fili değişip Beyazın piyonlarını ikilemek.',
      neden: '6...Ra7? hemen oynanırsa 7.Ne5 fili kovalar (Motor: +0.6). 6...Bxf3 7.Qxb7 Bxg2 8.Rg1 de eşit (Motor: −0.1), ama Beyaz mantıklı olarak gxf3 oynar. Morozevich fil çiftini verip karşılığında sağlam bir piyon yapısına karşı bozuk bir yapı alır; bu tipik bir Slav takasıdır.',
      diger: [
        { move: '6...Qc7', text: '7.Ne5 Be6 ile fil geri çekilir; motorun eşit gördüğü seçenek (Motor: +0.2).' },
        { move: '6...Ra7', text: '7.Ne5 ile fil kovalanır; Siyah filini değişme şansını kaybeder (Motor: +0.6).' },
      ],
    },
    '7w': {
      text: '7.gxf3: Anand g-piyonuyla alır. f-piyonları ikilenir, ama g-hattı açılır ve e4 ilerleyişi desteklenir.',
      amac: 'Açık g-hattını kalelerle kullanmak ve f3 piyonuyla e4’ü desteklemek.',
      neden: '7.Qxb7 Bxg2 8.Rg1 Nbd7 9.Rxg2 sonrası oyun karışık ama eşittir (Motor: −0.1). gxf3 ile Beyaz yapısını bozar, ama fil çiftini ve merkez piyon çoğunluğunu korur. Bu yapı uzun rokla birleşince dinamik bir oyun verir.',
      diger: [
        { move: '7.Qxb7', text: '7...Bxg2 8.Rg1 Nbd7 9.Rxg2 ile malzeme dengelenir; oyun eşit (Motor: −0.1).' },
      ],
    },
    '7b': {
      text: '7...Ra7! a6 piyonu sayesinde kale b7’yi yandan korur.',
      amac: 'b7’yi piyon yapısını bozmadan savunmak ve kaleyi ileride yedinci yatay boyunca c7’ye götürmek.',
      neden: 'Chebanenko sisteminin bilinen bir fikridir. Kale a7’de bir süre pasif görünür ve motor 7...Qc7’yi biraz daha iyi buluyor (+0.3’e karşı +0.6). Ama vezir c7’ye gelirse c-hattında Beyazın taşlarıyla tempo kaybedebilir. 7...b5 ise c6’yı zayıflatır. Kale yedinci yatayda d7, e7 veya c7’ye kayabilir; oyun bu esnekliği gösterecek.',
      diger: [
        { move: '7...Qc7', text: '8.Nc3 dxc4 9.Bxc4 e6 ile normal gelişim; motorun ilk tercihi (Motor: +0.3).' },
        { move: '7...Qc8', text: 'Vezir b7’yi korur ama c8’de az aktif (Motor: +0.5).' },
        { move: '7...b5', text: '8.cxd5 cxd5 9.a4 b4 ile vezir kanadı zayıflar (Motor: +0.6).' },
      ],
    },
    '8w': {
      text: '8.Nc3: at gelişir ve d5’e baskı yapar.',
      amac: 'Gelişimi tamamlamak ve e4 ilerleyişini desteklemek.',
      neden: 'At c3’ten d5’e, e4’e ve b5’e bakar. Motor 8.e4’ü de aynı seviyede görüyor (+0.6); Anand önce gelişmeyi seçer.',
      diger: [
        { move: '8.e4', text: 'Merkezi hemen açmak: 8...dxc4 9.Bxc4 e6 10.Be3 (Motor: +0.6).' },
        { move: '8.c5', text: 'Vezir kanadını kapatmak; ...b6 kırılmasını engeller (Motor: +0.4).' },
      ],
    },
    '8b': {
      text: '8...e6: Siyah e6 ile merkezi sağlamlaştırır ve f8 filine yol açar.',
      amac: 'd5’i sağlam tutmak ve kısa rok için hazırlanmak.',
      neden: 'Fil artık tahtada olmadığından e6 oynamakta bir sakınca yoktur. 8...dxc4 9.Bxc4 merkezi Beyaza bırakır (Motor: +0.6). e6 ile Siyah klasik bir Slav yapısı kurar.',
      diger: [
        { move: '8...dxc4', text: '9.Bxc4 e6 10.a4 ile Beyaz rahat gelişir (Motor: +0.6).' },
        { move: '8...g6', text: 'Fili g7’ye çıkarmak; 9.e4 sonrası merkez güçlenir (Motor: +0.7).' },
      ],
    },
    '9w': {
      text: '9.Qc2: vezir c2’ye döner ve b1-h7 çaprazında h7’ye bakar.',
      amac: 'Bd3 ile bataryayı kurmak, e4’ü desteklemek ve uzun roka hazırlanmak.',
      neden: 'Vezir b3’te artık bir şey yapmıyordu. c2’de h7’ye bakar ve d3 filiyle birleşir. Ama motor 9.c5’i belirgin şekilde daha iyi buluyor (+0.5’e karşı +0.1): c5 ile Beyaz vezir kanadını kapatır ve Siyahın ...dxc4 ve ...c5 kırılmalarını önler.',
      diger: [
        { move: '9.c5', text: 'Vezir kanadında alan: 9...Nbd7 10.Bd2 b6 11.cxb6 ile baskı sürer (Motor: +0.5).' },
        { move: '9.O-O', text: 'Kısa rok: 9...dxc4 10.Bxc4 b5 (Motor: +0.2).' },
      ],
    },
    '9b': {
      text: '9...Be7: fil e7’ye gelişir.',
      amac: 'Kısa roku hazırlamak ve şah kanadını savunmak.',
      neden: 'Fil e7’de f6 atını destekler ve d6’ya göre daha korunaklıdır. Motor 9...dxc4 10.Bxc4 c5 ile merkezi hemen açmayı daha iyi buluyor (Motor: +0.1’e karşı +0.4), çünkü bu Beyazın fil çiftine karşı merkezi erkenden kırar.',
      diger: [
        { move: '9...dxc4', text: '10.Bxc4 c5 11.dxc5 Bxc5 ile merkez açılır (Motor: +0.1).' },
        { move: '9...c5', text: 'Merkezi doğrudan kırmak: 10.cxd5 cxd4 11.exd4 Nxd5 (Motor: +0.4).' },
      ],
    },
    '10w': {
      text: '10.Bd2: fil gelişir; Beyaz uzun roka hazırlanır.',
      amac: 'Uzun rok yolunu açmak ve kara kareli fili d2’den e3, f4 veya c3’e yönlendirebilmek.',
      neden: 'e3 piyonu yüzünden fil c1’den başka yere gidemez. Motor 10.b3, 10.O-O veya 10.c5’i biraz daha iyi görüyor (+0.4’e karşı +0.2); 10.Bd2 ise uzun rok planına bağlılığı gösterir.',
      diger: [
        { move: '10.c5', text: 'Vezir kanadını kapatıp sonra şah kanadında oynamak (Motor: +0.4).' },
        { move: '10.O-O', text: 'Güvenli rok: 10...b6 11.b3 (Motor: +0.4).' },
      ],
    },
    '10b': {
      text: '10...O-O: Siyah kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve kaleyi f8’e bağlamak.',
      neden: 'Beyaz uzun rok yaparsa şahlar karşı kanatlarda olacak; bu karşılıklı saldırı anlamına gelir. Siyah, g-hattı açık olmasına rağmen rok yapar çünkü şahı merkezde tutmak daha tehlikelidir. Motor 10...dxc4’ü biraz daha iyi buluyor (+0.3’e karşı +0.3).',
      diger: [
        { move: '10...dxc4', text: '11.Bxc4 Nbd7 12.e4 b5 ile tempo kazanarak gelişmek (Motor: +0.3).' },
        { move: '10...Nbd7', text: '11.cxd5 cxd5 12.e4 ile merkez açılır (Motor: +0.5).' },
      ],
    },
    '11w': {
      text: '11.O-O-O: uzun rok. Şahlar karşı kanatlarda; Beyaz g-hattından saldırmayı düşünür.',
      amac: 'Kaleleri g-hattına (Rhg1, Rdg1) getirip Siyah şaha saldırmak.',
      neden: 'Bu cesur bir karar: c-hattı yakında açılabilir ve Beyazın şahı c1’de Siyahın ...b5-b4 ve ...Rc7 planına açıktır. Motor 11.c5’i öneriyor (+0.4), 11.O-O-O sonrası ise denge (−0.2). Anand dinamik ve iki taraflı bir oyun istedi.',
      diger: [
        { move: '11.c5', text: '11...Nbd7 12.Na4 ile vezir kanadını kapatıp ...b5 planını önlemek (Motor: +0.4).' },
        { move: '11.O-O', text: 'Sakin seçenek: 11...dxc4 12.Bxc4 Nbd7 (Motor: +0.2).' },
      ],
    },
    '11b': {
      text: '11...Nbd7: at d7’ye gelişir.',
      amac: 'Gelişimi tamamlamak ve f6 atını desteklemek.',
      neden: 'At d7’den b6’ya ve c4’e gidebilir, ayrıca e5 karesini kontrol eder. Motor 11...dxc4’ü biraz daha iyi buluyor (−0.3’e karşı 0.0), çünkü bu c-hattını açar ve Beyazın şahına doğrudan baskı verir.',
      diger: [
        { move: '11...dxc4', text: '12.Bxc4 b5 13.Bd3 Nbd7 ile c-hattı açılır (Motor: −0.3).' },
        { move: '11...Qc7', text: '12.c5 ile vezir kanadı kapanır (Motor: +0.4).' },
      ],
    },
    '12w': {
      text: '12.cxd5: Beyaz d5’te değişir; c-hattı açılır.',
      amac: 'Merkezi netleştirmek ve e4 ile ilerlemeye zemin hazırlamak.',
      neden: 'Beyaz c4 piyonunu tutmak istemez, çünkü ...dxc4 ile fil tempo kaybeder. Değişme sonrası e4 ile merkez kırılabilir. Motor 12.c5’i biraz daha iyi buluyor (+0.2); 12.b3 ise ...dxc4 ve ...Ba3+ ile kötüdür (−0.5).',
      diger: [
        { move: '12.c5', text: 'Vezir kanadını kapatmak: 12...b6 13.Na4 (Motor: +0.2).' },
        { move: '12.b3', text: '12...dxc4 13.bxc4 Ba3+ ile şah açıkta kalır (Motor: −0.5).' },
      ],
    },
    '12b': {
      text: '12...cxd5: Siyah c-piyonuyla alır. c-hattı artık Beyazın şahına doğru açık.',
      amac: 'c-hattını açmak ve merkezde d5 piyonunu tutmak.',
      neden: '12...exd5? 13.e4 g6 14.e5 ile şah kanadı zayıflar (Motor: +1.7). 12...Nxd5? 13.Nxd5 cxd5 14.Bxh7+ ile h7 düşer (Motor: +1.3). cxd5 hem güvenli hem de c-hattını Siyah kalelerine açar.',
      diger: [
        { move: '12...Nxd5?', text: '13.Nxd5 cxd5 14.Bxh7+ Kh8 ile piyon kaybı (Motor: +1.3).' },
        { move: '12...exd5?', text: '13.e4 g6 14.e5 Nh5 ile Beyaz güçlü baskı kurar (Motor: +1.7).' },
      ],
    },
    '13w': {
      text: '13.e4: Beyaz merkezde ilerler ve d5’e baskı yapar.',
      amac: 'e5 ile f6 atını kovmak ve b1-h7 çaprazını açmak.',
      neden: 'f3 piyonu e4’ü destekler; bu gxf3 alışının bir sonucudur. Motor 13.e4, 13.Kb1 ve 13.Rdg1’i hemen hemen eşit buluyor (0.0 ile +0.2 arası). Anand en aktif yolu seçti.',
      diger: [
        { move: '13.Kb1', text: 'Önce şahı güvenceye almak: 13...b5 14.Rdg1 Rc7 (Motor: +0.1).' },
        { move: '13.Rdg1', text: 'g-hattına kale getirmek: 13...b5 14.Kb1 Rc7 (Motor: +0.2).' },
      ],
    },
    '13b': {
      text: '13...Kh8: şah h8’e gider.',
      amac: 'g-hattından gelebilecek şah çekmeleri ve h7’ye yapılacak bataryalı saldırıları önceden önlemek.',
      neden: 'Bu sakin bir hamle ama motor 13...b5’i açıkça daha iyi buluyor (0.0’a karşı +1.1): 13...b5 14.e5 Nh5 15.Bxh7+ Kh8 sonrası Siyah karşı oyunu bir tempo daha erken başlatır. Kh8 ile Siyah bir tempo kaybeder.',
      diger: [
        { move: '13...b5', text: '14.e5 Nh5 15.Bxh7+ Kh8 ile karşı oyun hemen başlar (Motor: 0.0).' },
        { move: '13...g6', text: '14.Kb1 b5 15.h4 ile şah kanadı zayıflar (Motor: +0.6).' },
        { move: '13...dxe4', text: '14.fxe4 b5 15.Kb1 ile Beyaz merkezi tutar (Motor: +0.8).' },
      ],
    },
    '14w': {
      text: '14.e5: f6 atı kovulur; Beyaz merkezde alan kazanır.',
      amac: 'f6 atını şah kanadının savunmasından uzaklaştırmak ve h7’yi hedef almak.',
      neden: 'e5 sonrası at g8, e8 veya h5’e gitmelidir ve h7 korumasız kalır. Motor 14.Kb1’i de aynı seviyede görüyor (+1.0’a karşı +0.9).',
      diger: [
        { move: '14.Kb1', text: '14...b5 15.e5 Nh5 16.Ne2 ile hem şah güvende hem e5 hazır (Motor: +1.0).' },
        { move: '14.Ne2', text: 'Daha yavaş: 14...b5 15.Kb1 Nb6 (Motor: +0.3).' },
      ],
    },
    '14b': {
      text: '14...Nh5: at h5’e gider.',
      amac: 'Atı aktif tutmak ve f4 karesine yönelmek.',
      neden: '14...Ng8 veya 14...Ne8 daha pasif olurdu ve 15.Bxh7 ile piyon kaybı yine olurdu (Motor: +1.6/+2.0). h5’ten at f4’e gelebilir ve Beyazın kara kareli filine karşı aktif olur.',
      diger: [
        { move: '14...Ng8', text: '15.Bxh7 b5 16.Bxg8 ile şah kanadı açılır (Motor: +1.6).' },
        { move: '14...Ne8', text: '15.Bxh7 b5 16.Kb1 ile at pasif kalır (Motor: +2.0).' },
      ],
    },
    '15w': {
      text: '15.Bxh7: fil h7 piyonunu alır. c2 veziri b1-h7 çaprazından fili korur.',
      amac: 'Bir piyon kazanmak ve h-hattını açmak.',
      neden: 'Cazip görünüyor ama motor bunu şüpheli buluyor: 15.Ne2 (Ng3 ile h5 atına baskı) veya 15.Kb1 ile +0.7, Bxh7 sonrası +0.1. Fil h7’de hapsolur ve vezir onu korumak için b1-h7 çaprazına bağlanır. Siyah bu zamanı vezir kanadında kullanacak.',
      diger: [
        { move: '15.Ne2', text: '15...g6 16.Ng3 ile h5 atı kovulur ve Beyaz şah kanadında baskıyı sürdürür (Motor: +0.7).' },
        { move: '15.Kb1', text: '15...g6 16.h4 b5 17.Bh6 ile güvenli üstünlük (Motor: +0.7).' },
      ],
    },
    '15b': {
      text: '15...b5: Siyah piyonu geri almakla uğraşmaz; vezir kanadında karşı oyuna başlar.',
      amac: '...b4 ile c3 atını kovmak ve c-hattını açmak.',
      neden: 'Siyah bir piyon geride ama Beyazın fili h7’de pasif. 15...Bg5 16.Bd3 Nf4 sonrası Beyaz rahatlar (Motor: +1.4). ...b5 Beyaza şahını korumak için zaman harcatır.',
      diger: [
        { move: '15...Bg5', text: '16.Bd3 Nf4 17.Kb1 b5 ile Beyaz fili kurtarır (Motor: +1.4).' },
        { move: '15...Qa8', text: '16.Kb1 b5 17.Bd3 ile Beyaz piyonu korur (Motor: +1.6).' },
      ],
    },
    '16w': {
      text: '16.Kb1: şah b1’e çekilir ve c-hattından uzaklaşır.',
      amac: 'Şahı c-hattından ve olası ...Rc7 baskısından kurtarmak; a2 piyonunu korumak.',
      neden: 'c-hattı açık ve Siyah kaleyi c7’ye getirmeye hazır. 16.Rdg1? b4 17.Nxd5 Nxe5 ile Siyah karşı saldırıya geçer (Motor: −0.3). 16.Kb1 en sağlam devam (0.0).',
      diger: [
        { move: '16.Rdg1', text: '16...b4 17.Nxd5 Nxe5 ile Siyah aktifleşir (Motor: −0.3).' },
        { move: '16.a3', text: '...b4’ü önler; 16...Rc7 17.Bd3 (Motor: −0.1).' },
      ],
    },
    '16b': {
      text: '16...Rc7! a7 kalesi yedinci yatay boyunca c-hattına gelir.',
      amac: 'c2 veziri ve c3 atı aynı hatta durduğundan ...b4 ile taş kazanma tehdidi yaratmak.',
      neden: 'Bu, 7...Ra7’nin karşılığıdır: kale artık en aktif hatta. 16...b4? 17.Ne2 b3 18.axb3 ise Siyahın piyonunu kaybettirir ve Beyazın şahı güvende kalır (Motor: +1.2). Morozevich önce kaleyi getirir, sonra ilerler.',
      diger: [
        { move: '16...b4?', text: '17.Ne2 b3 18.axb3 ile piyon gider ve Beyazın şahı güvenli kalır (Motor: +1.2).' },
        { move: '16...Nb6', text: '17.f4 b4 18.Ne2 ile Beyaz f4’ü korur (Motor: +1.3).' },
      ],
    },
    '17w': {
      text: '17.Qd3: vezir d3’e çekilir; c-hattından çıkar ve h7 filini korumayı sürdürür.',
      amac: '...b4 tehdidini zayıflatmak ve b1-h7 çaprazında h7 filini korumak.',
      neden: '17.Bg6? fxg6 18.Qxg6 Nf4 ile fedası çalışmaz (Motor: −0.7). 17.a3 de aynı seviyede (0.0) ama Qd3 hem fili korur hem de vezir c-hattından çıkar.',
      diger: [
        { move: '17.a3', text: '17...a5 18.Qd3 b4 19.Nb5 ile ...b4’e cevap (Motor: 0.0).' },
        { move: '17.Bg6?', text: '17...fxg6 18.Qxg6 Nf4 ile fedanın karşılığı yok (Motor: −0.7).' },
      ],
    },
    '17b': {
      text: '17...Bg5: fil g5’e gelir ve d2 filine saldırır.',
      amac: 'Beyazın kara kareli filini değişmek ve f4 karesini kontrol etmek.',
      neden: 'Beyazın kara kareli fili, f4 ve e3’ü koruyan ana savunucudur. Siyah bu fili değişirse h5 atı f4’e rahat yerleşir. 17...Nb6 da yakın (Motor: +0.8’e karşı +0.6), 17...Bh4 ise daha zayıf (+1.3).',
      diger: [
        { move: '17...Nb6', text: '18.Rhg1 Nc4 19.Be3 b4 ile c4 karesine yönelmek (Motor: +0.8).' },
        { move: '17...Bh4', text: '18.Ne2 Nb6 19.Ng3 ile Beyaz savunur (Motor: +1.3).' },
      ],
    },
    '18w': {
      text: '18.f4: Beyaz filini kovmak ister.',
      amac: 'g5 filini geri çekilmeye zorlamak ve kara kareli filleri değişmekten kaçınmak.',
      neden: 'Ama f4 piyonu sadece d2 filiyle korunur. Siyah 18...Bxf4 ile piyonu geri alabilir. Motor 18.f4 ve 18.Be3’ü yakın buluyor (0.0’a karşı −0.2); 18.Bf5? ise 18...Bxd2 ile kötü (−1.0).',
      diger: [
        { move: '18.Be3', text: '18...Bxe3 19.fxe3 Nb6 ile f-piyonları yine ikilenir (Motor: −0.2).' },
        { move: '18.Bf5?', text: '18...Bxd2 19.Qxd2 exf5 ile taş kaybı (Motor: −1.0).' },
      ],
    },
    '18b': {
      text: '18...Bxf4! Siyah ikilenmiş f-piyonlarından birini alır.',
      amac: 'Kaybettiği h7 piyonunu geri almak ve atı f4’e getirmek.',
      neden: 'Hamle sırası önemli: 18...Nxf4? 19.Bxf4 Bxf4 20.Qh3 sonrası Beyazın veziri h-hattına geçer ve Siyah şahı tehlikeye girer (Motor: +0.8). Fille almak, atın f4’e gelmesini sağlar.',
      diger: [
        { move: '18...Nxf4?', text: '19.Bxf4 Bxf4 20.Qh3 Qg5 ile h-hattı açık kalır (Motor: +0.8).' },
        { move: '18...Bh6', text: '19.Qh3 g6 20.Bxg6 fxg6 ile Siyah şahı açılır (Motor: +1.2).' },
      ],
    },
    '19w': {
      text: '19.Bxf4: filler değişir.',
      amac: 'Kara kareli filleri değişmek ve malzemeyi korumak.',
      neden: 'Beyaz başka bir şey yapamaz: 19.Nxd5 exd5 20.Ba5 ile aynı seviye (Motor: 0.0), 19.Qh3 ise daha zayıf (−0.3).',
      diger: [
        { move: '19.Nxd5', text: '19...exd5 20.Ba5 Bh6 21.Bf5 ile karışık bir oyun (Motor: 0.0).' },
      ],
    },
    '19b': {
      text: '19...Nxf4: at f4’ten geri alır ve d3 vezirine saldırır. Malzeme eşit.',
      amac: 'Taşı geri almak ve vezire tempo kazanmak.',
      neden: 'Zorunlu geri alış: 19...f5? 20.Bd2 ile Siyah taş kaybeder (Motor: +2.3). At f4’te güçlü bir merkezi kareye yerleşir.',
      diger: [
        { move: '19...f5?', text: '20.Bd2 Kxh7 ile Siyah taş eksiği kalır (Motor: +2.3).' },
      ],
    },
    '20w': {
      text: '20.Qe3?: vezir e3’e gider ve f4 atını hedef alır.',
      amac: 'Atı kovmak ve vezirle şah kanadına dönmek.',
      neden: 'Bu oyunun ilk büyük hatası. 20.Qg3! hem atı hem g7’yi vurur: 20...Nh5 21.Bc2 Nxg3 22.hxg3+ ile h-hattından şah çekilir ve oyun eşittir (Motor: 0.0). 20.Qe3 ise vezire h4 karesini bırakır.',
      diger: [
        { move: '20.Qg3', text: '20...Nh5 21.Bc2 Nxg3 22.hxg3+ ile denge (Motor: 0.0).' },
        { move: '20.Qf3', text: '20...Qh4 21.Bc2 b4 22.Rhg1 ile de eşit (Motor: 0.0).' },
      ],
    },
    '20b': {
      text: '20...Qh4! Vezir f4 atını korur, h7 filine ve f2 piyonuna saldırır.',
      amac: 'Atı korumak ve h7 filini kazanma tehdidi yaratmak.',
      neden: '20...Kxh7? 21.Qxf4 f6 22.Qg3 sonrası Beyazın veziri aktif kalır (Motor: +0.5). Qh4 aynı anda üç işi yapar: atı korur, fili ve f2’yi tehdit eder.',
      diger: [
        { move: '20...Kxh7?', text: '21.Qxf4 f6 22.Qg3 ile Beyaz rahatlar (Motor: +0.5).' },
        { move: '20...f6', text: '21.Qxf4 Kxh7 22.Qg3 ile yine Beyaz iyi (Motor: +0.5).' },
      ],
    },
    '21w': {
      text: '21.Bc2: fil c2’ye döner.',
      amac: 'Fili h7’den kurtarmak ve b1-h7 çaprazında tutmak.',
      neden: 'Motor 21.Bd3 Nxd3 22.Qxd3 ile filleri hemen değişmeyi öneriyor (−0.6); oyunda −1.2. c2’de fil c-hattında durur ve ileride ...Rfc8 ile c3 atına bağlanır. 21.Be4? dxe4 ise taş kaybettirir (−3.7).',
      diger: [
        { move: '21.Bd3', text: '21...Nxd3 22.Qxd3 Nb6 23.Rhg1 ile filler değişir (Motor: −0.6).' },
        { move: '21.Be4?', text: '21...dxe4 22.Nxe4 Nd5 ile taş kaybı (Motor: −3.7).' },
      ],
    },
    '21b': {
      text: '21...Rfc8: diğer kale de c-hattına gelir; kaleler ikilenir.',
      amac: 'c3 atını c2 filine bağlamak ve ...b4 ile taş kazanma tehdidi yaratmak.',
      neden: 'Şimdi 22.Rhg1? b4 23.h3 bxc3 ile Siyah taş kazanır (Motor: −2.0). 21...Kg8 veya 21...Nb6 daha sakin ama üstünlüğün büyük kısmını bırakır (Motor: −0.3/−0.6). Rfc8 en enerjik hamle (−1.4).',
      diger: [
        { move: '21...Nb6', text: '22.Qf3 Nc4 23.Rhg1 f5 ile normal bir oyun (Motor: −0.6).' },
        { move: '21...Kg8', text: '22.Ne2 Nxe2 23.Qxe2 g6 ile denge yakın (Motor: −0.3).' },
      ],
    },
    '22w': {
      text: '22.Bd3: fil d3’e geri döner ve c-hattındaki bağı kırar.',
      amac: 'c3 atını bağdan kurtarmak ve b1-h7 çaprazını tutmak.',
      neden: '21.Bc2 ile kaybedilen tempo burada geri dönüyor. 22.Qg3 Qh6 23.Bd3 de aynı seviyede (−1.2). Beyaz pasif ama sağlam bir savunma kurar.',
      diger: [
        { move: '22.Qg3', text: '22...Qh6 23.Bd3 Nb6 24.Ne2 ile aynı yapı (Motor: −1.2).' },
        { move: '22.Bb3', text: '22...Nb6 23.Rhg1 Nc4 ile fil b3’te pasif (Motor: −1.5).' },
      ],
    },
    '22b': {
      text: '22...Nb6: at b6’ya gider; c4 karesine yönelir.',
      amac: 'Atı c4’e getirmek; buradan b2, d2 ve a3’e baskı yapmak.',
      neden: 'c4, Beyazın piyonlarıyla kovulamaz. 22...Nxd3 23.Qxd3 Nb6 de aynı değerde (Motor: −1.3); Siyah önce atı hazırlamayı seçti.',
      diger: [
        { move: '22...Nxd3', text: '23.Qxd3 Nb6 24.f4 Kg8 ile filler hemen değişir (Motor: −1.3).' },
        { move: '22...Kg8', text: '23.Qg3 Qh6 24.Ne2 ile biraz daha zayıf (Motor: −1.0).' },
      ],
    },
    '23w': {
      text: '23.Ne2: at e2’ye çekilir ve f4 atına meydan okur.',
      amac: 'f4 atını değişmek veya kovmak.',
      neden: 'Ama bu, c4 karesine yönelen b6 atına karşı tek savunucu olan d3 filini savunmasız bırakır. 23.Qg3 Qh6 24.Ne2 ile daha iyi (Motor: −1.3); oyunda −1.7.',
      diger: [
        { move: '23.Qg3', text: '23...Qh6 24.Ne2 Nxd3 25.Qxd3 ile vezirler aktif kalır (Motor: −1.3).' },
        { move: '23.a3', text: '23...Nc4 24.Bxc4 Rxc4 ile c-hattı açık kalır (Motor: −1.6).' },
      ],
    },
    '23b': {
      text: '23...Nxd3! Siyah, Beyazın iyi filini alır.',
      amac: 'c4 karesini kontrol edebilecek tek taşı yok etmek.',
      neden: '23...Nxe2? 24.Qxe2 Nc4 sonrası d3 fili 25.Bxc4 ile atı alabilir (Motor: −0.5). Nxd3 ile c4 karesi kalıcı olarak Siyah atına kalır (Motor: −2.0).',
      diger: [
        { move: '23...Nxe2', text: '24.Qxe2 Nc4 25.Rhg1 ile fil kalır ve c4 atına saldırabilir (Motor: −0.5).' },
        { move: '23...Nh3', text: '24.Qg3 g5 ile Siyah taşı kenara kaçar (Motor: +0.1).' },
      ],
    },
    '24w': {
      text: '24.Rxd3: kale d3’ten alır.',
      amac: 'Taşı geri almak ve kaleyi üçüncü yataya getirmek.',
      neden: '24.Qxd3 Rc2 25.f4 ile aynı seviyede (−2.0), ama vezir d3’te c2 kalesine karşı zayıf kalır. Kale d3’ten h3’e ve g3’e geçebilir.',
      diger: [
        { move: '24.Qxd3', text: '24...Rc2 25.f4 Qh7 ile Siyah aktif (Motor: −2.0).' },
        { move: '24.Qg3', text: '24...Qe4 25.Qxd3 Qxd3+ ile vezirler değişir (Motor: −2.2).' },
      ],
    },
    '24b': {
      text: '24...Nc4: at c4’e yerleşir ve e3 vezirine saldırır.',
      amac: 'Atı en iyi kareye yerleştirmek ve vezire tempo kazanmak.',
      neden: 'c4’te at fil tarafından kovulamaz ve b2, d2, a3 karelerine bakar. Motor 24...Nc4’ü en iyi buluyor (−2.2); 24...Qh7 veya 24...Kg8 daha zayıf (−1.7/−1.6).',
      diger: [
        { move: '24...Qh7', text: '25.Nf4 Nc4 26.Qe2 ile at biraz geç gelir (Motor: −1.7).' },
        { move: '24...Kg8', text: '25.b3 b4 26.Nf4 ile Beyaz c4’ü kapatır (Motor: −1.6).' },
      ],
    },
    '25w': {
      text: '25.Qf3: vezir f3’e gelir ve f7’ye bakar.',
      amac: 'Veziri aktif tutmak ve şah kanadında karşı oyun aramak.',
      neden: '25.Qf4 de aynı seviyede (−2.1); 25.Qh3? ise vezirleri Siyah lehine değiştirir (−2.6). Qf3 f7’ye ve d5’e bakar.',
      diger: [
        { move: '25.Qf4', text: '25...Qh7 26.Rd1 Kg8 27.Qf3 ile aynı yapı (Motor: −2.1).' },
        { move: '25.Qh3', text: '25...Qxh3 26.Rxh3+ Kg8 ile oyun sonu kötü (Motor: −2.6).' },
      ],
    },
    '25b': {
      text: '25...Qe4: Siyah vezir değişimi önerir.',
      amac: 'Kazanılmış bir oyun sonuna geçmek: kaleler c-hattında, at c4’te.',
      neden: 'Beyazın vezirden kaçması (26.Rd1 veya 26.Ka1) 26...Nxb2 ile daha kötü olur (Motor: −3.5). Motor 25...b4 ve 25...Kg8’i de yakın buluyor (−2.3/−2.1); Morozevich en net yolu seçti.',
      diger: [
        { move: '25...b4', text: '26.Rg1 Qe4 27.Qxe4 dxe4 ile aynı oyun sonu (Motor: −2.3).' },
        { move: '25...Kg8', text: '26.Ka1 b4 27.Rg1 Qe4 ile benzer (Motor: −2.1).' },
      ],
    },
    '26w': {
      text: '26.Qxe4: Beyaz vezirleri değişir.',
      amac: 'Zorunlu değişim; başka her hamle malzeme kaybettirir.',
      neden: '26.Rd1? Nxb2 27.Kxb2 Rc2+ ile Siyah kazanır (Motor: −3.5); 26.Ka1 Nxb2 de benzer (−3.5).',
      diger: [
        { move: '26.Rd1?', text: '26...Nxb2 27.Kxb2 Rc2+ 28.Kb1 ile Siyah kazanır (Motor: −3.5).' },
        { move: '26.Ka1?', text: '26...Nxb2 27.Qxe4 dxe4 28.Re3 ile piyon kaybı (Motor: −3.5).' },
      ],
    },
    '26b': {
      text: '26...dxe4: piyonla alınır.',
      amac: 'e4 piyonuyla d3 ve f3 karelerini kontrol etmek.',
      neden: 'Zorunlu geri alış: 26...Na3+? 27.Rxa3 dxe4 ile Siyah taş kaybeder (Motor: +5.3). e4 piyonu Beyazın kalesine d3 ve f3’ü yasaklar.',
      diger: [
        { move: '26...Na3+?', text: '27.Rxa3 dxe4 28.Rc3 ile taş kaybı (Motor: +5.3).' },
      ],
    },
    '27w': {
      text: '27.Rh3+: kale şah çeker.',
      amac: 'Kaleyi h-hattına getirmek ve Siyah şahını g8’e geri göndermek.',
      neden: '27.Rc3 ile aynı seviye (−2.4). Beyaz kaleyi aktif tutmak ister.',
      diger: [
        { move: '27.Rc3', text: '27...b4 28.Rcc1 Nd2+ 29.Ka1 ile c-hattı değişir (Motor: −2.4).' },
        { move: '27.Rg3', text: '27...Nd2+ 28.Ka1 Rc2 ile Siyah aktif (Motor: −2.6).' },
      ],
    },
    '27b': {
      text: '27...Kg8: şah g8’e döner.',
      amac: 'Şah çekmeden çıkmak; tek yasal hamle.',
      neden: 'g8 şahın tek karesidir. Şah f8’e veya e7’ye yaklaşıp oyun sonunda aktifleşebilir.',
    },
    '28w': {
      text: '28.Rd1?: kale d1’e gelir.',
      amac: 'd-hattını kontrol etmek ve ...Nd2+ çatalını önlemek.',
      neden: 'Ama b2 piyonu korumasız kalır. 28.a3 veya 28.Nc3 ile Motor −2.2, Rd1 sonrası −3.4. 28.a3 Nxb2 29.Ng3 Na4 30.Nxe4 sonrası Beyaz piyonunu geri alır.',
      diger: [
        { move: '28.a3', text: '28...Nxb2 29.Ng3 Na4 30.Nxe4 ile piyon geri alınır (Motor: −2.2).' },
        { move: '28.Nc3', text: '28...Na3+ 29.Ka1 Rc4 ile Siyah üstün ama Beyaz direnir (Motor: −2.2).' },
      ],
    },
    '28b': {
      text: '28...Nxb2! At şahın önündeki piyonu alır.',
      amac: 'Taktikle piyon kazanmak ve Beyazın şahını açmak.',
      neden: '29.Kxb2 Rc2+ 30.Ka3 Rxe2 ile Siyah taşını geri alır ve bir piyon önde kalır (Motor: −3.7). 29.Rc1 Rxc1+ 30.Nxc1 Nd1 sonrası f2 de düşer. Anand terk etti.',
      diger: [
        { move: '28...b4', text: '29.Rh4 Nxb2 30.Kxb2 Rc2+ ile daha yavaş (Motor: −2.0).' },
        { move: '28...Rd7', text: '29.Rh4 Nxe5 30.Rxe4 ile Beyaz direnir (Motor: −1.4).' },
      ],
    },
  },
  exercises: [
    { id: 'amo-1', kind: 'tekrar', plan: false, title: 'Vezir h4’e',
      source: 'Anand – Morozevich, Dortmund 2001 (20. hamle)',
      fen: '3q1r1k/2rn1ppB/p3p3/1p1pP3/3P1n2/2N1Q3/PP3P1P/1K1R3R b - - 1 20',
      prompt: 'Siyah f4 piyonunu geri aldı. Beyazın veziri e3’ten f4 atına saldırıyor, fili ise hâlâ h7’de. Siyahın en iyi hamlesi hangisi?',
      hint: 'Atı koruyan bir hamle aynı zamanda h7 filine de saldırabilir.',
      line: ['Qh4'],
      explanation: '**20...Qh4!** Vezir f4 atını korur, h7 filine ve f2 piyonuna saldırır. 20...Kxh7? 21.Qxf4 sonrası Beyaz iyi durumdadır. Motor: ...Qh4 −0.6, sonraki en iyi hamle +0.6.',
      link: 'İkilenmiş f-piyonlarından birini aldıktan sonra Siyahın taşları f4 ve f2 çevresinde aktifleşti.' },
    { id: 'amo-2', kind: 'tekrar', plan: false, title: '...Nxb2!',
      source: 'Anand – Morozevich, Dortmund 2001 (28. hamle)',
      fen: '2r3k1/2r2pp1/p3p3/1p2P3/2nPp3/7R/PP2NP1P/1K1R4 b - - 3 28',
      prompt: 'Vezirler değişti. Siyahın kaleleri c-hattında, atı c4’te. Beyaz son hamlede kalesini d1’e getirdi. Siyahın en güçlü hamlesi ne?',
      hint: 'At şahın önündeki piyonu alırsa ve şah onu geri alırsa, c-hattındaki kale ne yapar?',
      line: ['Nxb2'],
      explanation: '**28...Nxb2!** 29.Kxb2 Rc2+ 30.Kb3 Rxe2 ile Siyah taşını geri alır, bir piyon önde kalır ve kaleleri aktiftir; 29.Rc1 Rxc1+ 30.Nxc1 Nd1 sonrası f2 de düşer. Motor: ...Nxb2 −3.3, 28...b4 −1.7.',
      link: 'c4’e yerleşen at ve c-hattındaki kaleler birlikte uzun rok yapmış şahın piyonlarına saldırdı.' },
    { id: 'amo-3', kind: 'transfer', plan: false, title: 'f4 piyonunu almak',
      source: 'Hillarp Persson – So, Corus C turnuvası, Wijk aan Zee 2009 (17. hamle)',
      fen: '1r3rk1/1p2qppp/pQnbpn2/P1Np4/3P1P2/3BP3/1P1BKP1P/R6R b - - 0 17',
      prompt: 'Aynı açılış: Siyah fili f3’te verdi ve Beyazın f-piyonları ikilendi. Şimdi f4 piyonu yalnızca e3 piyonuyla korunuyor ve Beyaz şahı e2’de. 17...Bxf4? 18.exf4 Nxd4+ çalışmıyor, çünkü vezir b6’da. Siyah ne yapmalı?',
      hint: 'Önce veziri, ...Nxd4+ çatalının vuracağı bir kareye gönderin.',
      line: ['Bc7', 'Qb3', 'Bxf4'],
      explanation: '**17...Bc7! 18.Qb3 Bxf4!** Fil vezire saldırır; vezir b3’e çekilince 19.exf4? Nxd4+ şahı ve veziri birlikte çatallar. Böylece f4 piyonu düşer. Motor: ...Bc7 −2.5, sonraki en iyi hamle −0.9; 18.Qb3’ten sonra ...Bxf4 −2.4, sonraki en iyi −0.7.',
      link: 'Morozevich ikilenmiş f-piyonunu 18...Bxf4 ile aldı; So da aynı açılışta f4 piyonunu küçük bir taktikle kazandı.' },
    { id: 'amo-4', kind: 'transfer', plan: false, title: 'Şahın önündeki b2 piyonu',
      source: 'Aleksandrov – Sokolov, Karpov turnuvası, Poikovsky 2004 (31. hamle)',
      fen: '2kr4/1p3p2/2p5/p3p3/n2PNnP1/Pq6/1PR2Q2/1K1R1B1r b - - 2 31',
      prompt: 'Beyaz şahı b1’de. Siyahın veziri b3’te, atları a4 ve f4’te, kalesi h1’de. Siyah şahın önündeki savunmayı nasıl kırar?',
      hint: 'b3 veziri b2 karesini koruyor; at oraya gelirse d1 kalesine de saldırır.',
      line: ['Nxb2'],
      explanation: '**31...Nxb2!** At b2 piyonunu alır, vezir b3 onu korur ve d1 kalesine saldırır; 32.Rxb2 Qxd1+ kaleyi kazanır. Motor: ...Nxb2 −5.9, sonraki en iyi hamle −4.7.',
      link: 'Morozevich de 28...Nxb2 ile b1’deki şahın önündeki piyonu aldı; iki oyunda da at b2’de başka bir taşla korunuyor veya geri alınırsa kale şah çekerek kazancı tamamlıyor.' },
  ],
  sources: [
    { title: 'Chessgames.com: Dortmund Sparkassen 2001 turnuva sayfası', url: 'https://www.chessgames.com/perl/chess.pl?tid=96992' },
    { title: 'ChessBase (İspanyolca): Kramnik gana en Dortmund una vez más', url: 'https://es.chessbase.com/post/kramnik-gana-en-dortmund-una-vez-ms' },
    { title: 'Chess.com: Review – The Chebanenko Slav according to Bologan', url: 'https://www.chess.com/news/view/review-the-chebanenko-slav-according-to-bologan' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
    { title: 'Modern Chess: GM Repertoire against the Slav, Part 3 – Chebanenko (önizleme)', url: 'https://www.modern-chess.com/course/gm-repertoire-against-the-slav-part-3-squeeze-the-chebanenko-slav/87632/?theme=1' },
  ],
};
