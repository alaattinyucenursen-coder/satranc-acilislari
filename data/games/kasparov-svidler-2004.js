// Kasparov – Svidler, Rusya Şampiyonası, Moskova 2004 (8. tur). Kaynak: PgnMentor (Kasparov.pgn).
export default {
  id: 'kasparov-svidler-2004',
  theme: 'Zayıf vezir kanadına karşı vezirsiz oyun sonu',
  white: 'Garri Kasparov', black: 'Peter Svidler',
  whiteShort: 'Kasparov', blackShort: 'Svidler',
  event: 'Rusya Şampiyonası', site: 'Moskova', year: 2004, eco: 'D10',
  variation: 'Slav Savunması, 3.Nc3 dxc4 4.e4 b5 5.a4',
  result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. Nc3 dxc4 4. e4 b5 5. a4 b4 6. Na2 Nf6 7. e5 Nd5 8. Bxc4 e6 9. Nf3 Be7 10. Bd2 a5 11. Nc1 Nd7 12. Nb3 h6 13. O-O Qb6 14. Qe2 Ba6 15. Rfc1 O-O 16. Bxa6 Qxa6 17. Qxa6 Rxa6 18. Kf1 Rc8 19. Ke2 Kf8 20. Rc2 Ke8 21. Be3 N5b6 22. Ne1 h5 23. Nd3 Nd5 24. g3 f6 25. Rac1 Kf7 26. exf6 gxf6 27. Nf4 Nxf4+ 28. Bxf4 Nf8 29. Nc5 Bxc5 30. Rxc5 f5 31. Bg5 Nd7 32. R5c2 Kg6 33. h4 Kf7 34. f3 c5 35. dxc5 Rac6 36. Rd1 Nb6 37. Be3 Nxa4 38. Ra1 b3 39. Rd2 Nxc5 40. Rxa5 Na6 41. Rb5 Rb8 42. Rd7+ Ke8 43. Rxb8+ Nxb8 44. Rb7 Rc2+ 45. Kf1 Nd7 46. Rxb3 Ke7 47. Bg5+ Kd6 48. Rd3+ Kc6 49. Rd2 Rc4 50. Ke2 e5 51. Be7 e4 52. Rd6+ Kc7 53. Rd5 Rc2+ 54. Ke3 Rxb2 55. Rxf5 exf3 56. Kxf3 Rb3+ 57. Kf4 1-0`,

  summary: 'Svidler, kariyerinde bilinen ilk kez 1.d4’e 1...d5 ile karşılık verip Slav’a girdi ve 3...dxc4 4.e4 b5 ile fazla piyonu tutmaya çalıştı. Kasparov **5.a4** ile ...b5 zincirini sorguladı, 6.Na2 ve **7.e5** ile Siyahın atını d5’e itip c4 piyonunu 8.Bxc4 ile geri aldı. Ortaya çıkan yapıda Siyahın a5, b4 ve geri kalmış c6 piyonları kalıcı hedeflerdi; Svidler’in yenilik olarak oynadığı **12...h6** ...c5 kurtuluşunu erteledi (Motor: 12...c5 ile +0.3, oyunda +0.7). Kasparov 16.Bxa6 ve 17.Qxa6 ile filleri ve vezirleri değişti, şahını e2’ye getirdi, kalelerini c-hattında ikiledi ve **30.Rxc5** ile kalesini c5 karesine oturttu. Siyah 34...c5 ile bir piyon vererek aktifleşti, 36.Rd1’den sonra oyun neredeyse dengelendi; ama Kasparov a- ve b-piyonlarını toplayarak bir piyon fazlasını yeniden kazandı. Zaman sıkıntısının da gölgesinde Svidler önce 50...e5, sonra **51...e4?** ile e5 karesini boşalttı: **52.Rd6+! Kc7 53.Rd5!** kaleyi beşinci yataya çıkardı, f5 ve h5 düştü ve Siyah 57. hamlede terk etti.',
  intro: 'Bu oyun 2004 Rusya Şampiyonası Süper Finali’nin 8. turunda (Moskova, 24 Kasım 2004) oynandı. ChessBase’in Misha Savinov’a ait izlenim yazısına göre Svidler bu turda Kasparov’u yenmek zorundaydı ve normalde Grünfeld oynayan Svidler 1.d4’e ilk kez 1...d5 ile karşılık verdi; Kasparov ona “Ciddi misin?” der gibi baktı. Slav Savunmasında 2...c6 d5’i destekler. 3.Nc3 dxc4 sırasında Beyaz Nf3’ü erken oynamadığı için **4.e4** ile merkezi hemen kurabilir; Siyah 4...b5 ile piyonu tutmaya çalışır, Beyaz 5.a4 ile zinciri sorgular ve 5...b4 6.Na2 sonrası at hem b4’e baskı yapar hem de c1-b3 yoluyla oyuna döner. 7.e5 Nd5 8.Bxc4 sonrası Beyazın e5 piyonu alan sağlar, Siyahın d5 atı ise iyi bir merkez karesindedir. Bu yapının özü şudur: Siyah zamanında ...c5 kırılmasını yapabilirse rahatlar; yapamazsa c6 geri kalmış piyon, c5 ise Beyaz taşları için bir yerleşme noktası olur. Kasparov oyunu vezirsiz bir oyun sonuna taşıyıp bu küçük ama kalıcı avantajı sabırla büyüttü. ChessBase raporu onun oyununun kusursuz olmadığını, ama Svidler’inkinden daha iyi olduğunu yazıyor; motor da 36. hamle civarında Beyazın avantajının +0.5’e kadar indiğini, son hatanın ise 51...e4 olduğunu gösteriyor.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**5.a4** ile ...b5 zincirini bozmak, 5...b4 sonrası c4 piyonunu desteksiz bırakmak ve 8.Bxc4 ile geri almak.',
      '**7.e5** ile tempo kazanıp alan almak; e5 piyonuyla Siyahın f6 ve d6 karelerini elinden almak, d4 piyonuyla da c5 ve e5’i tutmak.',
      'Atı Na2-c1-b3 yoluyla vezir kanadına getirmek: b3’teki at a5 ve c5’e bakar, b4 piyonunu ise Bd2 ve Na2 baskısıyla sabitlemek.',
      'Siyahın en iyi taşı olan beyaz kareli fili **16.Bxa6** ile değişmek ve **17.Qxa6** ile vezirleri de değişip zayıf piyonların önemli olduğu bir oyun sonuna geçmek.',
      'Şahı f1-e2 yoluyla merkeze getirmek, kaleleri c-hattında ikilemek (Rc2, Rac1) ve c6 piyonuna baskıyı korumak; uygun anda bir taşı **c5** karesine oturtmak.',
      'Şah kanadında g3, h4 ve f3 ile piyonları koyu karelere değil, Siyahın taşlarının yolunu kesecek şekilde kurmak; g5’teki fili h4 ile desteklemek.',
      'Oyun sonunda kaleyi aktif tutmak: piyon toplamak (Rxa5, Rxb3), şah çekerek tempo kazanmak ve **52.Rd6+ – 53.Rd5** gibi yatay saldırılarla piyonları yandan almak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      '...dxc4 ve ...b5 ile fazla piyonu tutmak; a4 gelince ...b4 ile Beyazın atını kenara itip Beyazın gelişimini bozmak.',
      'Atı d5’e yerleştirmek: e5 piyonunun önündeki bu kare Siyahın en sağlam karesi; ...e6 ile desteklemek.',
      '**...c5** kırılmasıyla c6 zayıflığından kurtulmak ve vezir kanadında karşı oyun almak; motor bunu 11. ve 12. hamlelerde ve 19–20. hamlelerde öneriyor, Svidler ise geciktirdi.',
      '...Ba6 ile pasif beyaz kareli fili Beyazın c4 filiyle değişmek; mümkünse değişimi ...Bxc4 ile kendi seçtiği anda yapmak.',
      '...h5 ve ...f6 ile şah kanadında alan almak ve e5 piyonunu sorgulamak; ...e5 ile merkezi açıp e6 zayıflığından kurtulmak (motorun 28...e5 önerisi).',
      'Pasif savunmadan kurtulmak için 34...c5 ile piyon vererek taşları aktifleştirmek ve a4, c5 piyonlarını geri kazanmak.',
      'Oyun sonunda piyonları ileri sürmeden önce arkada kalan kareleri düşünmek; 50...e5 ve 51...e4 bu kuralı çiğnedi.',
    ] },
  },
  critical: [
    { move: '5w', title: '5.a4: zinciri sorgulamak', text: 'Beyaz ...b5 zincirine a-piyonuyla saldırır. a4 olmasaydı Siyah ...e6, ...Nf6 ve ...Bb7 ile fazla piyonu rahatça tutabilirdi (5.Nf3 −0.15). 5...b4 sonrası c4 piyonunu artık hiçbir piyon korumaz; Siyahın a- ve b-piyonları ise ilerde, Beyazın kolay ulaşabileceği hedefler olarak kalır. 5...a6? 6.axb5 cxb5 7.Nxb5! ise a-hattı açıldığı için Beyaza yarar (Motor: +0.6).' },
    { move: '12b', title: '12...h6: yenilik, ama ...c5 fırsatı kaçıyor', text: 'ChessBase’e göre 12...h6 Svidler’in yeni hamlesiydi. Hamle Ng5 ve Bg5 gibi fikirleri önler, ama yapının asıl sorusuna cevap vermez. Motor 12...c5! 13.Nxc5 Nxc5 14.dxc5 Bxc5 ya da 12...O-O ile ...c5 hazırlığını öneriyor (+0.3). Oyundan sonra değerlendirme +0.7’ye çıkıyor ve Siyah ...c5’i bir daha uzun süre rahatça oynayamıyor.' },
    { move: '16w', title: '16.Bxa6: oyun sonuna geçiş', text: 'Beyaz Siyahın iyi filini değişir ve 17.Qxa6 ile vezirleri de değişir. Vezirler gidince Beyazın şahı e2’ye gelebilir; e5’in sağladığı alan, c6 piyonunun geri kalması ve a5-b4 piyonlarının korunma ihtiyacı daha da önem kazanır. Motor: +0.8. Bir hamle önce 15.Bxa6 daha kesindi (+0.8 karşı 15.Rfc1 +0.5), çünkü 15.Rfc1 sonrası Siyah 15...Bxc4 ile değişimi kendisi yapabilirdi.' },
    { move: '28b', title: '28...Nf8: ...e5 kurtuluşu kaçıyor', text: 'Taşlar değiştikten sonra Siyahın en büyük derdi e6 piyonudur. Motor 28...e5! 29.dxe5 fxe5 30.Be3 c5 ile merkezi açmayı ve zayıflıktan kurtulmayı öneriyor (+1.1). Svidler’in 28...Nf8’i savunmacı bir manevraydı ve Beyaza 29.Nc5 ile tematik kareyi kullanma fırsatı verdi.' },
    { move: '30w', title: '30.Rxc5: hangi taşla geri almalı?', text: 'Kasparov c5’teki fili kaleyle alır. Kale c5’te a5 ve c6’ya bakar, d4 piyonu yerinde kalarak e5 karesini tutmaya devam eder. 30.dxc5? ise d4’ü kaldırır ve Siyaha 30...e5 ile merkezde serbestlik verir (Motor: Rxc5 +0.8, dxc5 −0.3). Değişimde doğru taşla geri almak, yapının hangi kareleri koruduğuna bakılarak seçilir.' },
    { move: '36w', title: '36.Rd1: şaşırtıcı bir piyon fedası', text: 'ChessBase raporu bu hamleyi bir sürpriz olarak niteliyor: Kasparov “açık” 36.Be3 yerine c5 piyonunu bıraktı. Rapor 36...Nxc5’in ardından Beyazın kazanma şanslarını büyük ölçüde kaybetmiş göründüğünü, Svidler’in ise 37.Rdc1 bağlamasından çekindiği için 36...Nb6 oynadığını yazıyor. Motor bu korkuyu doğruluyor: 36...Nxc5? 37.Rdc1! Nb3 38.Rxc6 (+0.9). Motor 36.Rd1 (+0.6) ile 36.Be3’ü (+0.5) aşağı yukarı eşit, 36.Rd2’yi (+1.1) ise en iyi buluyor; Rd2 b2’yi korurken aynı bağlama fikrini saklar.' },
    { move: '51b', title: '51...e4? beşinci yatay açılıyor', text: 'Siyahın e5 piyonu beşinci yataydaki kale yolunu kapatıyordu. Piyon e4’e gidince d5–f5 hattı açılır ve Beyazın kalesi d5’ten f5 ve h5’e saldırabilir. Motor 51...Nb6 (+1.5) ya da 51...Kc7’yi (+1.7) öneriyor; oyundaki hamleden sonra değerlendirme +2.8’e fırlıyor. Bir hamle önceki 50...e5 de (+1.7; 50...Nb6 +0.6) bu kötü planın başlangıcıydı.' },
    { move: '52w', title: '52.Rd6+! ve 53.Rd5', text: 'Kale şah çekerken d7 atına da saldırır; şah c7’ye gitmek zorundadır (52...Kb5 53.Rxd7 ya da 52...Kc5 53.Rxd7+ bir taş kaybettirir). Ardından 53.Rd5 f5’e saldırır ve h5 de sıradadır. Siyah b2 piyonunu alabilir, ama Beyaz f5’i alıp şahıyla f3’ü geri kazanır ve fil ile iki bağlantılı şah kanadı piyonuyla kazanan bir oyun sonuna ulaşır. Motor: 52.Rd6+ +3.0 (sonraki en iyi 52.b3 +0.6), 53.Rd5 +3.2 (53.Re6 +2.0).' },
  ],
  lessons: [
    '...dxc4 ve ...b5 ile piyon tutan Slav kuruluşlarında **a4** zinciri sorgular; Siyah ...b4 oynamak zorunda kalırsa c4 desteksiz kalır ve a- ile b-piyonları ileride hedefe dönüşür.',
    'Geri kalmış piyona sahip taraf için kırılma hamlesi (burada ...c5) zamanında yapılmalıdır. Svidler 12...h6 ve 19...Kf8 gibi yavaş hamleler oynayınca Beyaz c5’i sabitledi.',
    'Rakibin piyonları zayıfsa taş değişimleri, özellikle vezir değişimi, bu zayıflıkları büyütür ve şahın merkeze gelmesine izin verir (16.Bxa6, 17.Qxa6, 18.Kf1-19.Ke2).',
    'Geri kalmış piyonun önündeki kareye (c5) yerleşen taşı rakip aldığında, geri alırken yapıyı bozmayın: 30.Rxc5 d4 piyonunu koruyup e5’i tutmaya devam etti, 30.dxc5 ise ...e5’e izin verirdi.',
    'Pasif savunma uzun vadede kaybettirir; 34...c5 gibi bir piyon fedası taşları aktifleştirerek gerçek şans yaratabilir. Svidler bu sayede 36. hamlede oyunu neredeyse dengeledi.',
    'Oyun sonunda kale şah çekerek tempo kazanır ve yatay boyunca piyonlara saldırır: 52.Rd6+ atı da tehdit ederek şahı c7’ye itti, 53.Rd5 beşinci yatayı kullandı.',
    'Piyon ilerletmek arkasında kareler bırakır: 51...e4 sonrası e5 karesi boşaldı ve f5, h5 piyonları kale saldırısına açık kaldı.',
  ],
  qa: [
    { q: 'Siyah neden 4...b5 ile piyonu tuttu, 4...e5 oynamadı?', a: '4...e5 de oynanabilir bir sistemdir: 5.dxe5 Qxd1+ 6.Kxd1 sonrası vezirler erkenden değişir ve Beyazın şahı rok hakkını kaybeder (Motor: +0.5). 4...b5 daha keskin ve iddialıdır; Siyah fazla piyonu tutup Beyazı c4’ü geri almak için zaman harcamaya zorlar. Motor 4...b5’i en iyi hamle olarak görüyor (+0.3). Yalnızca 4...e6 gibi pasif bir hamle kötüdür (+1.3), çünkü Beyaz piyonu karşılık vermeden geri alır.' },
    { q: 'Beyaz neden 6.Na2 oynadı, 6.Nb1 değil?', a: 'Vikipedi’nin Slav maddesine göre 4.e4 b5 5.a4 b4 sonrası ana devam 6.Na2’dir. a2’deki at b4 piyonuna doğrudan baskı yapar ve c1-b3 yoluyla oyuna döner; oyunda tam bu oldu (11.Nc1, 12.Nb3). Motor 6.Nb1’i biraz daha iyi buluyor (+0.4 karşı +0.2); orada at d2 üzerinden c4’e gider, ama Siyah ...Ba6 ile c4’ü tutmaya çalışır.' },
    { q: 'Siyah neden 12...h6 yerine 12...c5 oynamalıydı?', a: 'Yapıdaki tek gerçek sorun c6’nın geri kalmasıydı. 12...c5 13.Nxc5 Nxc5 14.dxc5 Bxc5 ile Siyah bu piyonu değiştirip taşlarını serbest bırakırdı (Motor: +0.3). 12...h6 şah kanadında küçük bir önlemdi; sonrasında Beyaz 13.O-O ve 14.Qe2 ile vezir ve fil değişimlerini hazırladı ve c5 karesi Beyazın kontrolüne geçti (+0.7).' },
    { q: 'Kasparov neden vezirleri değişti? Saldırı şansından vazgeçmedi mi?', a: 'Siyahın şahı güvendeydi ve Beyazın şah kanadında açık bir saldırı planı yoktu. Buna karşılık Siyahın a5, b4 ve c6 piyonları kalıcı zayıflıklardı ve bunlar oyun sonunda daha çok önem kazanır. Vezirler gidince Beyazın şahı e2’ye gelip merkez karelerini korudu, kaleler de c-hattında rahatça çalıştı. Motor değişimden sonra +0.9 civarında bir değerlendirme veriyor.' },
    { q: 'Beyazın avantajı tam olarak nereden geldi?', a: 'Üç kaynaktan: e5 piyonunun sağladığı alan (Siyahın taşları f6 ve d6’yı kullanamadı), c6’nın geri kalması ve c5 karesinin Beyaza kalması, ve a5-b4 piyonlarının sürekli korunma ihtiyacı. Siyahın 26...gxf6 sonrası e6 piyonu da yeni bir zayıflık oldu. Bunlar tek tek küçük şeylerdi; Kasparov bunları vezirsiz bir oyun sonunda birleştirdi ve avantajı 20–28. hamleler arasında +1.0 civarında tuttu.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En iyi fırsatlar 12...c5 (+0.3), 19...c5 ya da 19...Raa8 (+0.7) ve 28...e5 (+1.1) idi. Oyunun ilerleyen bölümünde 34...c5 fedası ve 36.Rd1’in ardından değerlendirme +0.5’e indi; 40...e5 ve 46...Ne5 gibi hamlelerle Siyah dengeye yakın kalabilirdi. Asıl kayıp 50...e5 (50...Nb6 ile +0.6) ve 51...e4 (51...Nb6 ile +1.5) ile geldi.' },
    { q: 'Kasparov 36. hamlede neden c5 piyonunu bıraktı?', a: 'ChessBase raporu bunu bir sürpriz olarak niteliyor: herkes 36.Be3’ü bekliyordu. 36.Rd1’in gizli fikri 36...Nxc5? 37.Rdc1! bağlamasıydı: c5’teki at c6 kalesinin önünde sabitlenir ve 37...Nb3 38.Rxc6 Nd4+ 39.Ke3 Nxc6 sonrası Beyaz üstün kalır (Motor: +0.9). Svidler bunu gördü ve 36...Nb6 oynadı. Motor aynı fikrin 36.Rd2 ile daha güçlü olduğunu söylüyor (+1.1), çünkü orada b2 piyonu da korunur.' },
    { q: '49. hamlede kaleleri değişmek daha mı iyiydi?', a: 'Motor 49.Rc3+! Rxc3 50.bxc3’ü biraz daha iyi buluyor (+1.1): fil-at oyun sonunda Beyaz bir piyon önde kalır ve fil iki kanatta oynanan bir oyunda attan üstündür. Kasparov kaleleri tutmayı seçti (49.Rd2, +0.9); bu da kazanma şansını korudu, çünkü Siyahın piyonları zayıftı ve kale onlara saldırmaya devam edebiliyordu. Sonuçta 52.Rd6+ ve 53.Rd5 tam da kalenin aktifliği sayesinde mümkün oldu.' },
    { q: '51...e4 neden bu kadar kötüydü?', a: 'e5 piyonu d5–f5 arasındaki yolu kapatıyordu; piyon e4’e geçince beşinci yatay açıldı. 52.Rd6+ şah çekerken d7 atını tehdit ettiği için şah c7’ye gitmek zorunda kaldı ve 53.Rd5 f5 ile h5’e saldırdı. Siyah b2’yi alarak karşılık aradı, ama Beyaz f5’i aldı, f3’te değişim sonrası şahını aktifleştirdi ve h5 de düştü. Motor değerlendirmesi +1.3’ten +2.8’e çıktı.' },
  ],
  sources: [
    { title: 'ChessBase: Super Final R8 – Kasparov defeats Svidler', url: 'https://en.chessbase.com/post/super-final-r8-kasparov-defeats-svidler' },
    { title: 'ChessBase: Impressions of the Super Final – Part three (Misha Savinov)', url: 'https://en.chessbase.com/post/impreions-of-the-super-final-part-three' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
  ],
  notes: {
    '1w': {
      text: 'Vezir piyonu iki kare ilerler, merkezde e5 ve c5 karelerini kontrol eder ve c1 filinin yolunu açar.',
      amac: 'Merkezi tutmak ve c4 ile Vezir Gambiti yapısına geçmek.',
      neden: 'Svidler’in o dönemki ana silahı 1.d4’e karşı Grünfeld’di. Savinov’un ChessBase yazısına göre Beyaz büyük olasılıkla Grünfeld’e karşı bir şey hazırlamıştı, ama bunun ne olduğu hiç öğrenilemedi.',
      diger: [
        { move: '1.e4', text: 'Kasparov’un kariyeri boyunca en çok kullandığı ilk hamle (Motor: +0.4). Bu turnuvada 1.d4’ü seçti.' },
        { move: '1.Nf3', text: 'Esnek bir hamle; çoğu zaman aynı yapılara döner (Motor: +0.2).' },
      ],
    },
    '1b': {
      text: 'Siyah merkezde d5 ile simetrik karşılık verir.',
      amac: 'Merkezde bir piyonla yer tutmak ve Beyazın e4 ilerleyişini engellemek.',
      neden: 'Bu bir sürprizdi: Savinov’a göre Svidler bilinen kariyerinde ilk kez 1.d4’e 1...d5 ile karşılık verdi ve Kasparov ona “Ciddi misin?” der gibi baktı. Svidler, Beyazın Grünfeld hazırlığından kaçmak için klasik bir yapı seçti.',
      diger: [
        { move: '1...Nf6', text: 'Svidler’in alışık olduğu hamle; 2.c4 g6 3.Nc3 d5 ile Grünfeld’e gider (Motor: +0.3). Kasparov’un hazırlığına girmemek için oynanmadı.' },
        { move: '1...c6', text: 'Hemen Slav ya da Caro-Kann yapısını hedefler; 2.e4 ile Caro-Kann’a dönüşebilir (Motor: +0.4).' },
      ],
    },
    '2w': {
      text: 'Vezir Gambiti: c4 piyonu d5’e saldırır.',
      amac: 'Siyahın merkez piyonunu sorgulamak ve vezir kanadında alan kazanmak.',
      neden: 'Beyaz d5’e baskı yaparak Siyahı merkezde bir karar vermeye zorlar: d5’i tutmak (...e6 ya da ...c6) ya da ...dxc4 ile merkezi bırakmak.',
      diger: [
        { move: '2.Nf3', text: 'Daha esnek; c4’ü sonraya bırakır (Motor: +0.2).' },
        { move: '2.Bf4', text: 'Londra Sistemi tarzı sakin bir kuruluş; Kasparov’un tarzına uymaz.' },
      ],
    },
    '2b': {
      text: 'Slav Savunması: d5 piyonu c6 ile desteklenir.',
      amac: 'd5’i tutarken c8 filinin yolunu kapatmamak; gerekirse ...dxc4 ve ...b5 ile piyonu tutma fikirlerine zemin hazırlamak.',
      neden: '2...e6 (Vezir Gambiti Reddi) c8 filini kapatır; 2...c6 bu fili serbest bırakır ve c6 piyonu sonradan ...b5 ile vezir kanadında genişlemeyi destekler. Svidler bu oyunda tam olarak bu fikri, ...dxc4 ve ...b5’i kullandı.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Reddi; sağlam ama c8 fili kapanır (Motor: +0.3).' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabulü; Beyaz e3 ya da e4 ile piyonu rahatça geri alır (Motor: +0.3).' },
      ],
    },
    '3w': {
      text: 'At c3’e gelişir ve d5’e baskıyı artırır.',
      amac: 'e4 ilerleyişini desteklemek ve gerekirse Nf3’ü geciktirerek f-piyonunu ve e-piyonunu serbest bırakmak.',
      neden: '3.Nf3’ten sonra Siyah ...dxc4 oynayınca Beyaz genellikle 4.Nc3 ya da 4.e3 ile yavaş bir oyuna girer. 3.Nc3 ise ...dxc4’e izin verir ama karşılığında 4.e4 ile tam merkezi hemen kurma imkânı tanır.',
      diger: [
        { move: '3.Nf3', text: 'Ana yol; 3...Nf6 4.Nc3 dxc4 5.a4 klasik Slav (Motor: +0.4).' },
        { move: '3.cxd5', text: 'Değişme Slav; simetrik ve sakin yapı (Motor: +0.4).' },
      ],
    },
    '3b': {
      text: 'Siyah c4 piyonunu alır ve onu tutmayı düşünür.',
      amac: 'Beyazın merkez piyonlarını oynamasına izin verip karşılığında bir piyon kazanmak ya da en azından Beyazı geri almak için zaman harcamaya zorlamak.',
      neden: 'Nf3 henüz oynanmadığı için Siyah, Beyazın a4’ünden sonra ...e5 ya da ...b5 gibi fikirlere sahiptir. Svidler sakin 3...Nf6 yerine keskin yolu seçti; bu, Kasparov’u hazırlık dışına çıkarmaya yönelik bir tercihti.',
      diger: [
        { move: '3...Nf6', text: 'Klasik yol; 4.e3 ya da 4.Nf3 ile ana Slav yapılarına döner (Motor: +0.4).' },
        { move: '3...e6', text: 'Yarı-Slav’a dönen hamle sırası; 4.e4 ile Marshall Gambiti tarzı oyunlara izin verir (Motor: +0.4).' },
      ],
    },
    '4w': {
      text: '4.e4: Beyaz geniş bir merkez kurar ve c4 piyonunu sonra geri almayı planlar.',
      amac: 'd4-e4 merkezinin gücüyle Siyahın taşlarını geriye itmek; Bxc4 ile piyonu geri almak.',
      neden: 'Vikipedi’nin Slav maddesine göre bu konumda iki ana devam 4.e4 ve 4.e3’tür. 4.e4 en iddialısıdır: Beyaz piyon kaybını merkezin gücüyle telafi eder. Motor üç seçeneği hemen hemen eşit görüyor (+0.3).',
      diger: [
        { move: '4.e3', text: '4...b5 5.a4 b4 6.Ne4 ile at merkezde kalır; daha sakin ama sağlam (Motor: +0.3).' },
        { move: '4.Nf3', text: 'Klasik Slav’a döner; 4...b5 5.a4 b4 6.Ne4 gibi devamlar (Motor: +0.3).' },
        { move: '4.a4', text: 'Vikipedi’ye göre bu hamleye 4...e5 iyi bir cevaptır; Beyaz merkezi kurmadan önce Siyah ...e5 ile karşı vuruş yapar.' },
      ],
    },
    '4b': {
      text: 'Siyah ...b5 ile c4 piyonunu korur.',
      amac: 'Fazla piyonu tutmak ve Beyazı geri almak için vezir kanadında zaman harcamaya zorlamak.',
      neden: 'Vikipedi bu konumda oyunun genellikle 4...b5 5.a4 b4 ile sürdüğünü yazıyor. Motor da 4...b5’i en iyi hamle olarak görüyor (+0.3). Pasif bir hamle Beyazın merkezini bedavaya bırakırdı.',
      diger: [
        { move: '4...e5', text: '5.dxe5 Qxd1+ 6.Kxd1 ile vezirler erkenden değişir; Siyah merkezde karşı vuruş yapar (Motor: +0.5). Daha sakin ama sağlam bir alternatif.' },
        { move: '4...e6', text: 'Çok pasif: 5.Bxc4 sonrası Beyaz hem piyonu geri alır hem de geniş merkezi kalır (Motor: +1.3).' },
      ],
    },
    '5w': {
      text: '5.a4 ile b5 piyonuna saldırılır; Siyahın piyon zinciri sorgulanır.',
      amac: 'c4’ü koruyan b5 piyonunu yerinden etmek ve c4’ü desteksiz bırakmak.',
      neden: 'a4 olmadan Siyah ...e6, ...Nf6 ve ...Bb7 ile fazla piyonu rahatça tutabilir. a4, Siyahı ...b4 ile atı kovalamaya zorlar; bu da Siyahın a- ve b-piyonlarını, Beyazın taşlarının ulaşabileceği ileri karelere taşır.',
      diger: [
        { move: '5.Nf3', text: 'Siyah ...e6 ve ...Nf6 ile piyonu tutar (Motor: −0.15). Beyaz merkez karşılığında yeterli telafi bulamaz.' },
        { move: '5.Be2', text: 'Benzer şekilde yavaş; 5...e6 ve ...e5 ile Siyah iyi oynar (Motor: −0.1).' },
      ],
    },
    '5b': {
      text: 'Piyon b4’e ilerler ve c3 atını kovalar.',
      amac: 'Atı merkezden uzaklaştırmak ve Beyazın e4 piyonunun desteğini azaltmak.',
      neden: 'a4xb5 tehdidi vardı; ...b4 bu tehdidi ortadan kaldırır ve tempo kazanır. Diğer savunmalar a-hattını Beyaza açar.',
      diger: [
        { move: '5...a6', text: '6.axb5 cxb5 7.Nxb5! axb5 8.Rxa8 ile Beyaz a-hattını açar ve üstün kalır (Motor: +0.6).' },
        { move: '5...Ba6', text: '6.axb5 Bxb5 sonrası fil açıkta kalır, Beyaz rahatça gelişir (Motor: +1.4).' },
        { move: '5...Qb6', text: '6.Be3 ile vezir tempo kaybeder (Motor: +0.7).' },
      ],
    },
    '6w': {
      text: 'At a2’ye çekilir; buradan b4 piyonuna baskı yapar.',
      amac: 'b4’ü hedef almak ve atı ileride c1-b3 yoluyla vezir kanadındaki iyi karelere getirmek.',
      neden: 'Vikipedi’ye göre 4.e4 sonrası bu konumdaki ana seçenek 6.Na2’dir. At kenarda görünse de b4’e baskı Siyahı ...a5 ile piyonu korumaya zorlar; oyunda at 11.Nc1 ve 12.Nb3 ile b3’e ulaştı.',
      diger: [
        { move: '6.Nb1', text: 'Motorun hafif tercihi (+0.4): at d2’den c4’e gidebilir; Siyah ...Ba6 ile c4’ü tutmaya çalışır.' },
        { move: '6.Nce2', text: 'At g3 ya da f4’e yönelir, ama b4’e baskı yoktur (Motor: +0.1).' },
      ],
    },
    '6b': {
      text: 'At gelişir ve e4 piyonuna saldırır.',
      amac: 'Beyazın merkezini hemen sorgulamak; Beyaz Bxc4 ile vakit kaybetmeden önce merkezde karşılık almak.',
      neden: 'e4 piyonu yalnızca dolaylı olarak korunuyor; ...Nf6 Beyazı ya e5 ile ilerlemeye ya da başka bir korumaya zorlar. Motor 6...Nf6’yı en iyi hamle olarak görüyor (+0.1).',
      diger: [
        { move: '6...e6', text: '7.Bxc4 Nf6 8.e5 Nd5 ile çoğu zaman oyundaki yapıya döner (Motor: +0.2).' },
        { move: '6...a5', text: 'b4’ü hemen korur; 7.Bxc4 Nf6 8.e5 Nd5 ile benzer yapılar (Motor: +0.3).' },
      ],
    },
    '7w': {
      text: '7.e5 ile alan kazanılır ve f6 atı tempo kaybıyla kovalanır.',
      amac: 'Merkezde alan almak, Siyahın şah kanadı taşlarını f6 ve d6 karelerinden uzak tutmak ve Bxc4 için zaman kazanmak.',
      neden: 'e4 saldırı altındaydı. 7.e5 hem bu sorunu çözer hem de tempo kazanır. Diğer hamleler e4 piyonunu kaybettirir.',
      diger: [
        { move: '7.Nf3', text: '7...Nxe4 sonrası Siyah merkez piyonunu alır (Motor: −0.1).' },
        { move: '7.Bxc4', text: '7...Nxe4 ile aynı sorun (Motor: −0.2).' },
      ],
    },
    '7b': {
      text: 'At d5’e gelir; e5 piyonunun önündeki bu kare Siyahın en iyi karesi.',
      amac: 'Atı merkezde, piyonla kovalanamayacağı bir kareye yerleştirmek.',
      neden: 'd5’te at e3, c3 ve b4 karelerini kontrol eder ve hiçbir Beyaz piyon onu kovalayamaz (c-piyonu gitti, e-piyonu e5’te). Diğer kareler atı pasifleştirir.',
      diger: [
        { move: '7...Ng8', text: 'Çok pasif; 8.Bxc4 e6 9.Be3 ile Beyaz büyük alan avantajı alır (Motor: +1.1).' },
        { move: '7...b3', text: 'a2 atını kapatmak için piyon fedası; 8.Nc3 Nd5 9.Bxc4 sonrası yetersiz (Motor: +1.1).' },
      ],
    },
    '8w': {
      text: 'Beyaz c4 piyonunu filiyle geri alır ve materyal eşitlenir.',
      amac: 'Piyonu geri almak ve fili d5 atına bakan aktif bir kareye getirmek.',
      neden: 'c4 artık hiçbir piyon tarafından korunmuyor; şimdi almak doğaldır. Gecikirse Siyah ...Be6 ya da ...b3 ile piyonu tutar.',
      diger: [
        { move: '8.Be3', text: '8...Be6 ile Siyah c4’ü tutar ve ...b3 fikri gelir (Motor: −0.6).' },
        { move: '8.Bd2', text: '8...b3! 9.Nc3 Nb4 sonrası Siyahın taşları aktifleşir (Motor: −0.9).' },
      ],
    },
    '8b': {
      text: '...e6 ile d5 atı desteklenir ve f8 filinin yolu açılır.',
      amac: 'Merkezdeki atı sağlamlaştırmak ve şah kanadını rok için hazırlamak.',
      neden: 'Bxd5 cxd5 sonrası yapının bozulmasını önlemek ve atı ikinci kez korumak gerekir. Motor 8...e6’yı en iyi hamle olarak görüyor (+0.1).',
      diger: [
        { move: '8...a5', text: 'b4’ü hemen korur ama gelişimi geciktirir; 9.Be3 ile Beyaz rahat (Motor: +0.35).' },
        { move: '8...Qb6', text: 'd4’e baskı yapar, ama 9.Nf3 e6 10.O-O sonrası vezir erken çıkmış olur (Motor: +0.4).' },
      ],
    },
    '9w': {
      text: 'At f3’e gelir ve d4 ile e5 piyonlarını destekler.',
      amac: 'Merkez piyonlarını sağlamlaştırmak ve rok hazırlamak.',
      neden: 'd4 ve e5, Beyazın tüm avantajının temelidir; Nf3 ikisini birden destekler. Motor da bu hamleyi en iyi buluyor (+0.15).',
      diger: [
        { move: '9.Qg4', text: 'g7’ye baskı yapar, ama 9...Ba6 ile Siyah fil değişimini yapar (Motor: +0.0).' },
        { move: '9.Be3', text: 'd4’ü destekler, ama Nxe3 ile fil çifti Siyaha geçebilir (Motor: −0.1).' },
      ],
    },
    '9b': {
      text: 'Fil e7’ye gelişir ve rok hazırlanır.',
      amac: 'Şahı güvenceye almak ve b4 piyonunu dolaylı olarak korumak.',
      neden: 'Fil e7’den b4’ü korur; bu Bd2 ve Na2 baskısına karşı önemlidir. Motor hemen 9...Ba6 ile pasif filin değişimini ve ...c5’i öneriyor (+0.1); Svidler önce gelişimi tamamlamayı seçti.',
      diger: [
        { move: '9...Ba6', text: '10.Bxa6 Nxa6 11.Be3 c5 ile Siyah hem filini değişir hem de ...c5’e ulaşır (Motor: +0.1).' },
        { move: '9...a5', text: 'b4’ü korur; 10.Bg5 Qb6 sonrası benzer yapılar (Motor: +0.1).' },
      ],
    },
    '10w': {
      text: 'Fil d2’ye gelir ve b4 piyonuna bakar.',
      amac: 'Na2 ile birlikte b4’e baskı kurmak ve fili Nd5’in saldırısından uzak tutmak.',
      neden: 'Fil e3’te Nxe3 ile değişilebilirdi; d2’de ise b4’e baskı yapar ve a2 atının c1’e gitmesine izin verir. Motor en iyi hamle olarak görüyor (+0.3).',
      diger: [
        { move: '10.Be3', text: '10...O-O 11.Nc1 c5 ile Siyah rahat oynar (Motor: −0.1).' },
        { move: '10.h4', text: 'Şah kanadında alan; 10...Nd7 11.Bg5 a5 ile Siyah karşılık bulur (Motor: −0.1).' },
      ],
    },
    '10b': {
      text: '...a5 ile b4 piyonu desteklenir.',
      amac: 'b4’ü kalıcı olarak korumak ve Beyazın Bxb4 tehdidini önlemek.',
      neden: 'b4’e Bd2 ve Na2 baskı yapıyor. ...a5 piyonu sağlamlaştırır, ama a5 piyonunu da ileride bir hedef yapar. Motor (derinlik 18) 10...Ba6, 10...O-O ve 10...a5’i hemen hemen eşit buluyor (+0.3/+0.4).',
      diger: [
        { move: '10...O-O', text: '11.Nc1 c5 12.dxc5 Bb7 ile Siyah ...c5’i hemen oynar (Motor: +0.2).' },
        { move: '10...Ba6', text: '11.Qc2 Bxc4 12.Qxc4 a5 ile fil değişimi önce yapılır (Motor: +0.3).' },
      ],
    },
    '11w': {
      text: 'At a2’den c1’e döner; b3’e gidecek.',
      amac: 'Kenardaki atı oyuna sokmak; b3’ten a5 ve c5 karelerine baskı yapmak.',
      neden: 'b4 artık sağlam korunduğu için a2’deki atın görevi bitti. b3 karesi atın en iyi yeri; Siyahın zayıf a5 piyonuna ve c5 kırılma karesine bakar. Motor en iyi hamle olarak görüyor (+0.3).',
      diger: [
        { move: '11.Bd3', text: '11...Ba6 ile Siyah fil değişimini yapar (Motor: +0.1).' },
        { move: '11.Qc2', text: '11...Nd7 12.Nc1 c5 ile Siyah rahatlar (Motor: −0.05).' },
      ],
    },
    '11b': {
      text: 'İkinci at gelişir; d7’den c5 ve b6 karelerine bakar.',
      amac: '...c5 kırılmasını desteklemek ve gerekirse ...N7b6 ile c4 filine saldırmak.',
      neden: 'd7’deki at ...c5 sonrası c5’e geri alma imkânı verir. Motor bu hamleyi ve 11...Ba6’yı hemen hemen eşit görüyor (+0.3).',
      diger: [
        { move: '11...Ba6', text: '12.Bxa6 Nxa6 13.Nb3 c5 ile önce fil değişimi (Motor: +0.3).' },
        { move: '11...O-O', text: '12.Qe2 c5 13.dxc5 Bxc5 ile ...c5’e geçilir (Motor: +0.4).' },
      ],
    },
    '12w': {
      text: 'At b3’e ulaşır ve c5 ile a5 karelerine bakar.',
      amac: 'c5 karesini kontrol ederek ...c5 kırılmasını zorlaştırmak; a5 piyonunu hedef almak.',
      neden: 'Plan tamamlanıyor: Na2-c1-b3. Siyah ...c5 oynarsa d4xc5 ve Nxc5 ile at merkeze gelir. Motor bu hamleyi en iyi buluyor (+0.35).',
      diger: [
        { move: '12.Bd3', text: '12...c5 13.Nb3 Ba6 ile Siyah fil değişimini yapar (Motor: +0.3).' },
        { move: '12.Qc2', text: '12...c5 13.Nb3 N5b6 ile Siyah aktifleşir (Motor: +0.0).' },
      ],
    },
    '12b': {
      text: '12...h6: ChessBase’e göre Svidler’in yeni hamlesi. Siyah g5 karesini kontrol altına alır.',
      amac: 'Beyazın Ng5 ve Bg5 gibi fikirlerini önlemek ve rok sonrası şaha bir kaçış karesi hazırlamak.',
      neden: 'Hamle sağlam görünür ama yapının asıl sorusu ...c5’tir. Motor 12...c5 13.Nxc5 Nxc5 14.dxc5 Bxc5 ile c6 zayıflığından hemen kurtulmayı (+0.3) ya da 12...O-O’yu (+0.3) öneriyor. Oyundan sonra değerlendirme +0.7’ye çıkıyor ve Beyaz c5’i kontrol etmeye başlıyor.',
      diger: [
        { move: '12...c5', text: '13.Nxc5 Nxc5 14.dxc5 Bxc5 ile geri kalmış piyon ortadan kalkar ve Siyahın taşları serbestleşir (Motor: +0.3).' },
        { move: '12...O-O', text: '13.O-O c5 14.Bxd5 exd5 15.dxc5 Nxc5 ile ...c5 bir hamle sonra yapılır (Motor: +0.3).' },
        { move: '12...Bb7', text: 'Fil c6’yı korur ama pasif kalır; 13.O-O O-O 14.Bd3 c5 (Motor: +0.5).' },
      ],
    },
    '13w': {
      text: 'Beyaz kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f1 kalesini c-hattına getirmeye hazırlamak.',
      neden: 'Gelişim tamamlanıyor; Beyaz Siyahın yavaş hamlesinden yararlanarak hiçbir risk almadan rok yapar. Motor en iyi hamle olarak görüyor (+0.6).',
      diger: [
        { move: '13.Qe2', text: '13...Qb6 14.O-O Ba6 15.Bxa6 ile benzer yapılar (Motor: +0.6).' },
        { move: '13.Qc2', text: 'Vezir c-hattında; 13...Qb6 14.O-O Ba6 (Motor: +0.4).' },
      ],
    },
    '13b': {
      text: 'Vezir b6’ya gelir; b4 piyonunu destekler ve d4’e bakar.',
      amac: 'Vezir kanadını güçlendirmek ve ...Ba6 ile fil değişimine hazırlanmak.',
      neden: 'b6’daki vezir hem b4’ü korur hem de d4’e baskı yapar; böylece Siyahın taşları Beyazın merkezine karşı bir karşı ağırlık oluşturur. Motor üç seçeneği eşit görüyor (+0.8); ...c5 artık ilk üç arasında değil, çünkü Beyazın taşları c5’i daha iyi kontrol ediyor.',
      diger: [
        { move: '13...Ba6', text: '14.Bxa6 Rxa6 15.Qe2 Ra7 ile fil hemen değişilir (Motor: +0.8).' },
        { move: '13...O-O', text: '14.Qe2 Qb6 15.Rfc1 Ba6 ile oyundakine benzer (Motor: +0.8).' },
      ],
    },
    '14w': {
      text: 'Vezir e2’ye gelir ve c4 filini korur.',
      amac: '...Ba6 sonrası fil değişiminde Qxa6 ile vezir değişimi imkânı yaratmak; e-hattında merkezi desteklemek.',
      neden: 'Vezir e2’de c4 filini korur ve a6’ya bakar. Böylece Beyaz, değişimleri kendi istediği şekilde yönetir. Motor en iyi hamle olarak görüyor (+0.8).',
      diger: [
        { move: '14.Be3', text: '14...Ba6 15.Nfd2 O-O ile Beyazın taşları daha az uyumlu (Motor: +0.45).' },
        { move: '14.Qb1', text: 'Qe4 fikriyle; 14...O-O 15.Qe4 Ba6 (Motor: +0.35).' },
      ],
    },
    '14b': {
      text: 'Fil a6’ya gelir; Siyah pasif filini Beyazın c4 filiyle değişmek ister.',
      amac: 'c8’deki kötü fili değişmek ve Beyazın en aktif küçük taşını ortadan kaldırmak.',
      neden: 'c6, e6 ve b4 piyonlarının arkasında kalan fil Siyahın en kötü taşıdır. Değişim mantıklıdır; ama hangi sırayla yapılacağı önemli olacak. Motor 14...O-O ve 14...Ba6’yı eşit görüyor (+0.7).',
      diger: [
        { move: '14...O-O', text: '15.Rfc1 Ba6 16.Bxa6 Rxa6 ile benzer yapılar (Motor: +0.7).' },
        { move: '14...Bb7', text: 'Fil c6’yı korur ama pasif kalır; 15.Rfc1 O-O 16.Rc2 (Motor: +0.8).' },
      ],
    },
    '15w': {
      text: 'Kale c-hattına gelir ve c6 piyonuna bakar.',
      amac: 'Geri kalmış c6 piyonunun önündeki hattı ele geçirmek.',
      neden: 'Plan doğru, sıralama küçük bir hata: motor hemen 15.Bxa6’yı öneriyor (+0.8), çünkü 15.Rfc1 sonrası Siyah 15...Bxc4 16.Rxc4 ile değişimi kendisi yapabilir ve vezirleri tahtada tutabilirdi (+0.5).',
      diger: [
        { move: '15.Bxa6', text: '15...Qxa6 16.Qxa6 Rxa6 17.Rfc1 ile Beyaz değişimleri hemen yapar (Motor: +0.8).' },
        { move: '15.Rac1', text: '15...Bxc4 16.Qxc4 Rc8 ile Siyah rahatlar (Motor: +0.2).' },
      ],
    },
    '15b': {
      text: 'Siyah rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini oyuna hazırlamak.',
      neden: 'Rok doğaldır ama değişimin şeklini Beyaza bırakır. Motor 15...Bxc4! 16.Rxc4 O-O 17.Qe4 Qa6’yı biraz daha iyi buluyor (+0.6 karşı +0.8): Siyah değişimi kendi seçer ve Beyaz kaleyi c4’te biraz garip bir karede almak zorunda kalır.',
      diger: [
        { move: '15...Bxc4', text: '16.Rxc4 O-O 17.Qe4 Qa6 ile Siyah vezirleri tahtada tutar (Motor: +0.6).' },
        { move: '15...Ra7', text: '16.Bxa6 Qxa6 17.Qxa6 Rxa6 ile oyundakine benzer bir oyun sonu (Motor: +0.9).' },
      ],
    },
    '16w': {
      text: '16.Bxa6: Beyaz filleri değişir ve vezir değişimini hazırlar.',
      amac: 'Siyahın en iyi değişim fırsatını ortadan kaldırmak ve oyunu vezirsiz bir oyun sonuna taşımak.',
      neden: 'Vezirler değişirse e5 piyonunun sağladığı alan ve c6, a5, b4 zayıflıkları ön plana çıkar; Beyazın şahı da merkeze gelebilir. Motor en iyi hamle olarak görüyor (+0.8).',
      diger: [
        { move: '16.Qe4', text: '16...Bxc4 17.Rxc4 Qa6 ile Siyah değişimi kendisi yapar (Motor: +0.5).' },
        { move: '16.Be3', text: '16...Bxc4 17.Rxc4 Qa6 18.Qf1 ile Beyazın taşları geri çekilir (Motor: +0.4).' },
      ],
    },
    '16b': {
      text: 'Siyah veziriyle geri alır ve vezir değişimine izin verir.',
      amac: 'Fili geri almak ve Beyazın vezirini a6’da değişmeye zorlamak.',
      neden: 'Motor 16...Rxa6 ile vezirleri tutmayı (+0.8) ve 16...Qxa6’yı aşağı yukarı eşit görüyor. Svidler vezirlerin gittiği bir oyun sonunu kabul etti; tuzak dikkat: 16...Nxe5?? 17.Nxe5 Qxa6 18.Qxa6 Rxa6 19.Nxc6 ile Beyaz kazanır (+5.6).',
      diger: [
        { move: '16...Rxa6', text: '17.Be3 Rc8 18.Nfd2 ile vezirler tahtada kalır (Motor: +0.8).' },
        { move: '16...Nxe5', text: 'Taktik hata: 17.Nxe5 Qxa6 18.Qxa6 Rxa6 19.Nxc6 (Motor: +5.6).' },
      ],
    },
    '17w': {
      text: 'Vezirler değişir; oyun Siyahın vezir kanadı zayıflıklarının önemli olduğu bir oyun sonuna gider.',
      amac: 'Şahı merkeze getirip c-hattında baskıyı sürdürmek.',
      neden: 'Vezirler gittiğinde Siyahın karşı oyun şansları azalır, Beyazın kalıcı avantajları kalır. Değişim yapılmazsa Siyah ...Qb6 ya da ...Qxe2 ile değişimin zamanını seçerdi. Motor: +0.9.',
      diger: [
        { move: '17.Qc4', text: '17...Qxc4 18.Rxc4 Rfc8 ile kale c4’te aktif değildir (Motor: +0.25).' },
        { move: '17.Kf1', text: '17...Qb6 ile Siyahın veziri yeniden aktif olur (Motor: +0.3).' },
      ],
    },
    '17b': {
      text: 'Kale geri alır; a6’da biraz pasif durur.',
      amac: 'Materyali eşitlemek.',
      neden: 'Zorunlu geri alma: başka hamle bir vezir kaybettirir. Kale a6’da a5 ve c6’yı yan taraftan korur ama aktif değildir.',
    },
    '18w': {
      text: 'Vezirler olmadığı için şah merkeze yürür.',
      amac: 'Şahı e2’ye getirip d3, d2 ve c-hattı karelerini korumak.',
      neden: 'Vezirsiz oyunda şah güçlü bir taştır; merkezden piyonları ve kareleri korur. Motor 18.Be3, 18.Rc2 ve 18.Kf1’i eşit görüyor (+0.9).',
      diger: [
        { move: '18.Be3', text: '18...Rc8 19.Rc2 g5 ile benzer yapı (Motor: +1.0).' },
        { move: '18.Rc2', text: '18...Rc8 19.Be3 ile kale hemen ikilenmeye hazırlanır (Motor: +1.0).' },
      ],
    },
    '18b': {
      text: 'Kale c8’e gelir ve c6’yı destekler.',
      amac: 'c6 piyonunu korumak ve ...c5 kırılmasına hazırlanmak.',
      neden: 'c6, Beyazın kalelerinin hedefi. Kale c8’de hem korur hem de ...c5 sonrası c-hattında aktifleşir. Motor alternatifleri eşit görüyor (+1.0).',
      diger: [
        { move: '18...Kh7', text: '19.Rc2 Rc8 20.Be3 Rc7 ile benzer (Motor: +1.0).' },
        { move: '18...g5', text: 'Şah kanadında alan; 19.Rc2 Rc8 20.h3 (Motor: +1.0).' },
      ],
    },
    '19w': {
      text: 'Şah e2’ye gelir.',
      amac: 'Şahı d3 ve c-hattı karelerine yakın tutmak; kalelerin c-hattında rahatça hareket etmesine izin vermek.',
      neden: 'Plan mantıklı, ama küçük bir doğruluk kaybı: motor 19.Be3 ya da 19.Rc2’yi öneriyor (+0.9), çünkü 19.Ke2 sonrası Siyah 19...c5! 20.dxc5 Nxc5 21.Nfd4 ile kırılmayı yapabilirdi (+0.7).',
      diger: [
        { move: '19.Be3', text: '19...Kh7 20.Rc2 g5 21.Ke2 ile ...c5’i daha iyi kontrol eder (Motor: +0.9).' },
        { move: '19.Rc2', text: '19...Ra7 20.Be3 c5 21.dxc5 (Motor: +0.9).' },
      ],
    },
    '19b': {
      text: 'Siyah şahını merkeze getirir.',
      amac: 'Şahı oyun sonu için aktifleştirmek ve d7, e7 karelerini korumak.',
      neden: 'Şahın merkeze gelmesi oyun sonu için doğrudur, ama fırsat kaçıyor: motor 19...c5! 20.dxc5 Nxc5 21.Nfd4 Rc7 ile kırılmayı (+0.7) ya da 19...Raa8’i öneriyor. 19...Kf8 sonrası değerlendirme +1.0’a çıkıyor.',
      diger: [
        { move: '19...c5', text: '20.dxc5 Nxc5 21.Nfd4 Rc7 ile Siyah geri kalmış piyondan kurtulur (Motor: +0.7).' },
        { move: '19...Raa8', text: 'Kaleyi aktifleştirir; 20.Rc2 c5 21.dxc5 Nxc5 (Motor: +0.7).' },
      ],
    },
    '20w': {
      text: 'Kale c2’ye gelir; diğer kale c1’e gelip kaleler ikilenecek.',
      amac: 'c-hattında baskıyı ikiye katlamak ve c6’yı sabitlemek.',
      neden: 'c2’deki kale b2’yi de korur; böylece Beyazın kaleleri hem saldırı hem savunma görevi yapar. Motor en iyi hamle olarak görüyor (+1.0).',
      diger: [
        { move: '20.Be3', text: '20...Raa8 21.Rc2 Ke8 ile aynı yapıya döner (Motor: +1.0).' },
        { move: '20.Rc4', text: 'Kale aktif ama Nb6 ile saldırıya açık (Motor: +0.9).' },
      ],
    },
    '20b': {
      text: 'Şah e8’e devam eder.',
      amac: 'Şahı d7 ve c-hattına yakın tutmak.',
      neden: 'Siyah savunmayı merkezileştiriyor. Motor 20...Ra7, 20...Raa8 ve 20...c5’i biraz daha iyi buluyor (+1.0/+1.1); ...c5 hâlâ mümkün ama Beyazın taşları c5’i daha iyi kontrol ediyor.',
      diger: [
        { move: '20...c5', text: '21.dxc5 Nxc5 22.Nfd4 Rc7 ile Siyah kırılmayı yapar (Motor: +1.1).' },
        { move: '20...Ra7', text: '21.Be3 g5 22.Nfd2 Kg7 (Motor: +1.0).' },
      ],
    },
    '21w': {
      text: 'Fil e3’e gelir ve d4 piyonunu destekler.',
      amac: 'd4’ü sağlamlaştırmak ve c5 karesini fil ile de kontrol etmek.',
      neden: 'Fil artık b4’e baskı yapmak yerine merkezi korur; Siyahın ...c5 kırılması daha da zorlaşır. Motor en iyi hamle olarak görüyor (+1.1).',
      diger: [
        { move: '21.Kd3', text: '21...Raa8 22.Be3 h5 ile benzer, ama şah açıkta (Motor: +0.7).' },
        { move: '21.Rac1', text: '21...N5b6 22.Ra1 c5 ile Siyah kırılmayı yapar (Motor: +0.7).' },
      ],
    },
    '21b': {
      text: 'At d5’ten b6’ya gider; a4 ve c4 karelerine bakar.',
      amac: '...Nc4 ile Beyazın taşlarına saldırmak ya da a4 piyonuna baskı yapmak.',
      neden: 'At d5’te sağlam ama pasif; b6’dan c4’e gelerek e3 filine ve b2’ye saldırabilir. Motor 21...Raa8 ve 21...h5’i biraz daha iyi buluyor (+1.0 karşı +1.1); fark küçük.',
      diger: [
        { move: '21...Raa8', text: 'Pasif kaleyi aktifleştirir; 22.Nfd2 N5b6 23.g3 h5 (Motor: +1.0).' },
        { move: '21...h5', text: 'Şah kanadında alan; 22.Nfd2 N5b6 23.g3 (Motor: +1.0).' },
      ],
    },
    '22w': {
      text: 'At f3’ten e1’e çekilir; d3’e gidecek.',
      amac: 'Atı d3’e getirip c5 ve f4 karelerine yöneltmek.',
      neden: 'f3’teki at d4 ve e5’i korur ama c5’e ulaşamaz. d3’te at hem c5’e (b3 atıyla birlikte) hem de f4’e bakar. Motor 22.g3 ve 22.h3’ü eşit görüyor (+1.1).',
      diger: [
        { move: '22.g3', text: '22...h5 23.h3 Raa8 24.Nfd2 ile at d2 yoluyla oynar (Motor: +1.1).' },
        { move: '22.h3', text: '22...Raa8 23.Ne1 Nd5 ile aynı manevra (Motor: +1.1).' },
      ],
    },
    '22b': {
      text: '...h5 ile şah kanadında alan alınır ve g4 karesi kontrol edilir.',
      amac: 'Beyazın g4 ilerleyişini önlemek ve şah kanadında piyonları ilerletmeye hazırlanmak.',
      neden: 'Siyah g4 karesini kontrol ederek Beyazın f-g-h piyonlarıyla alan almasını zorlaştırmak ister. Motor 22...Raa8 ve 22...Nd5’i eşit görüyor (+1.1).',
      diger: [
        { move: '22...Raa8', text: '23.h3 Nd5 24.Nd3 Rc7 (Motor: +1.1).' },
        { move: '22...Nd5', text: '23.Nd3 h5 24.h3 h4 ile oyundakine benzer (Motor: +1.1).' },
      ],
    },
    '23w': {
      text: 'At d3’e gelir; c5 ve f4 karelerine bakar.',
      amac: 'Nc5 ya da Nf4 ile Siyahın zayıflıklarına (c6, e6, h5) saldırmaya hazırlanmak.',
      neden: 'd3’teki at merkezi korur ve iki yönde de oynayabilir. Motor en iyi hamle olarak görüyor (+1.05).',
      diger: [
        { move: '23.g3', text: '23...Nd5 24.Nd3 Raa8 ile aynı yapı (Motor: +1.0).' },
        { move: '23.Rcc1', text: '23...f6 24.Nd3 Kf7 ile Siyah f6 hamlesini yapar (Motor: +0.9).' },
      ],
    },
    '23b': {
      text: 'At d5’e döner.',
      amac: 'Atı en iyi karesine geri getirmek ve e3 filine baskı yapmak.',
      neden: 'b6’daki at a4’ü alamadı; d5’te merkezi kontrol eder ve Nxe3 fikri ile Beyazın filini tehdit eder. Motor en iyi hamle olarak görüyor (+1.0).',
      diger: [
        { move: '23...Raa8', text: '24.g3 Nd5 25.h3 f6 (Motor: +1.0).' },
        { move: '23...f6', text: '24.exf6 gxf6 25.Nf4 e5 ile merkez açılır (Motor: +1.1).' },
      ],
    },
    '24w': {
      text: 'g3 ile f4 karesi desteklenir ve h5 piyonunun ...h4 ilerleyişi önlenir.',
      amac: 'Nf4 sonrası atı sağlam tutmak ve şah kanadında piyonları güvenli kurmak.',
      neden: 'g3, f4 karesini ikinci kez destekler ve ...h4-h3 fikrini engeller. Motor 24.h3, 24.Rg1 ve 24.h4’ü eşit görüyor (+0.9).',
      diger: [
        { move: '24.h3', text: '24...h4 25.g3 hxg3 26.fxg3 ile piyon yapısı değişir (Motor: +0.9).' },
        { move: '24.h4', text: 'h5 piyonunu sabitler; 24...Raa8 25.Kf3 (Motor: +0.9).' },
      ],
    },
    '24b': {
      text: '...f6 ile e5 piyonu sorgulanır.',
      amac: 'Beyazın merkezini zayıflatmak ve şah kanadında hatları açmak.',
      neden: 'e5 piyonu Siyahın taşlarını sıkıştırıyor. ...f6 bunu sorgular, ama exf6 sonrası e6 zayıf kalabilir. Motor 24...Raa8’i eşit görüyor (+0.9).',
      diger: [
        { move: '24...Raa8', text: '25.h3 f6 26.Rac1 N7b6 ile aynı hamle bir tempo sonra (Motor: +0.9).' },
        { move: '24...Ra7', text: '25.Bd2 N7b6 26.Ndc5 Nd7 ile pasif (Motor: +1.05).' },
      ],
    },
    '25w': {
      text: 'Kaleler c-hattında ikilenir.',
      amac: 'c6’ya baskıyı ikiye katlamak ve c-hattını tamamen ele geçirmek.',
      neden: 'c6 piyonu iki kale tarafından saldırı altında; Siyah onu korumak zorunda kalır. Motor en iyi hamle olarak görüyor (+0.9).',
      diger: [
        { move: '25.Rh1', text: '25...Kf7 26.h3 N7b6 ile şah kanadında oynar (Motor: +0.9).' },
        { move: '25.h3', text: '25...Kf7 26.Rac1 N7b6 (Motor: +0.85).' },
      ],
    },
    '25b': {
      text: 'Şah f7’ye gelir ve f6 ile e6’yı destekler.',
      amac: 'exf6 sonrası e6 ve f6’yı korumak.',
      neden: 'Şah merkeze yakın ama a6’daki kale hâlâ pasif. Motor 25...Raa8’i öneriyor (+0.9); 25...Kf7 sonrası değerlendirme +1.4’e çıkıyor, çünkü Beyaz 26.Kd2 ya da 26.Kf3 ile gerilimi koruyup c6’ya baskıyı artırabilir.',
      diger: [
        { move: '25...Raa8', text: '26.Nf4 Nxf4+ 27.gxf4 Nb6 ile kale aktif kalır (Motor: +0.9).' },
        { move: '25...N7b6', text: '26.Nbc5 Bxc5 27.Nxc5 Ra7 ile Beyaz atı c5’e oturtur (Motor: +1.1).' },
      ],
    },
    '26w': {
      text: 'Beyaz f6’da değişir; Siyahın e6 piyonu zayıf kalır.',
      amac: 'Gerilimi çözüp e6 zayıflığını kalıcı hale getirmek; Nf4 ile e6 ve h5’e saldırmak.',
      neden: 'Kasparov yapıyı netleştirmeyi seçti. Motor gerilimi korumayı biraz daha iyi buluyor: 26.Kd2 ya da 26.Kf3 (+1.4) sonrası Siyah f6’da değişmek zorunda kalırdı. 26.exf6 sonrası değerlendirme +1.0.',
      diger: [
        { move: '26.Kd2', text: '26...N7b6 27.Rxc6 Rxc6 28.Rxc6 Ra8 29.exf6 gxf6 ile Beyaz baskıyı korur (Motor: +1.4).' },
        { move: '26.Kf3', text: '26...Rc7 27.Ke2 ile bekler; Siyah önce değişmek zorunda (Motor: +1.4).' },
      ],
    },
    '26b': {
      text: 'Piyonla alınır; g-hattı açılır.',
      amac: 'e5’i kontrol etmek ve şah kanadında piyon kütlesini korumak.',
      neden: '26...gxf6 en iyi geri almadır (+1.0). Diğerleri Beyaza tematik kareleri verir.',
      diger: [
        { move: '26...Bxf6', text: '27.Nbc5 Nxc5 28.Rxc5 ile Beyaz c5’i kullanır (Motor: +1.7).' },
        { move: '26...Nxe3', text: '27.fxe3 gxf6 28.e4 ile Beyazın merkezi güçlenir (Motor: +1.6).' },
      ],
    },
    '27w': {
      text: 'At f4’e gelir; e6, h5 ve d5’e saldırır.',
      amac: 'Siyahın zayıf piyonlarına baskı yapmak ve atları değişmeye zorlamak.',
      neden: 'f4’teki at e6’ya ve h5’e bakar. Siyah atları değişirse Beyazın fili b8-h2 çaprazında aktifleşir. Motor 27.Kf3’ü biraz daha iyi buluyor (+1.1 karşı +0.9).',
      diger: [
        { move: '27.Kf3', text: '27...Bd6 28.h3 Be7 29.g4 ile şah kanadında alan (Motor: +1.1).' },
        { move: '27.Kf1', text: '27...Bd6 28.Kg2 e5 (Motor: +1.0).' },
      ],
    },
    '27b': {
      text: 'Siyah atları şah çekerek değişir.',
      amac: 'Beyazın aktif atını ortadan kaldırmak.',
      neden: 'f4’teki at e6 ve h5’i tehdit ediyordu. Değişim doğaldır ama d5’teki iyi atı da kaybettirir. Motor 27...N7b6’yı biraz daha iyi buluyor (+0.7): 28.Nxd5 Nxd5 ile Siyah atını d5’te tutar.',
      diger: [
        { move: '27...N7b6', text: '28.Nxd5 Nxd5 29.h3 Raa8 ile Siyahın atı d5’te kalır (Motor: +0.7).' },
        { move: '27...Bd6', text: '28.Nxh5 N7b6 29.Ra1 ile h5 düşer (Motor: +1.1).' },
      ],
    },
    '28w': {
      text: 'Fil geri alır ve b8-h2 çaprazında durur.',
      amac: 'Fili aktif bir çaprazda tutmak ve piyon yapısını bozmamak.',
      neden: '28.Bxf4 en iyisi (+1.0); 28.gxf4 piyonları çiftleştirir (+0.65). Geri almamak bir taş kaybettirir (28.Kf3? −4.0).',
      diger: [
        { move: '28.gxf4', text: 'Çift piyon; 28...Bd6 29.Nd2 Nf8 (Motor: +0.65).' },
      ],
    },
    '28b': {
      text: 'At f8’e çekilir; e6’yı korur ve g6 ya da d7’ye gidecek.',
      amac: 'e6 zayıflığını savunmak.',
      neden: 'Savunmacı bir manevra. Motor 28...e5! 29.dxe5 fxe5 30.Be3 c5 ile merkezi açmayı ve e6 zayıflığından kurtulmayı öneriyor (+1.1). Siyahın taşları aktifleşir ve c6 da ...c5 ile hareket eder.',
      diger: [
        { move: '28...e5', text: '29.dxe5 fxe5 30.Be3 c5 31.Nd2 Ke6 ile Siyah merkezi açar (Motor: +1.1).' },
        { move: '28...Bf8', text: '29.Nd2 e5 30.dxe5 fxe5 ile aynı fikir (Motor: +1.2).' },
      ],
    },
    '29w': {
      text: 'At c5’e girer; geri kalmış c6 piyonunun önündeki tematik kare.',
      amac: 'Siyahı atı filiyle almaya zorlamak ve c5’e bir kaleyi oturtmak.',
      neden: 'Kasparov tematik bir fikirle c5’i hemen kullandı. Motor atı tutmayı biraz daha iyi buluyor: 29.Nd2, 29.h3 ya da 29.Be3 (+1.2) sonrası Siyahın pasif kalması sürer. 29.Nc5 sonrası +0.8.',
      diger: [
        { move: '29.Nd2', text: '29...Nd7 30.Be3 Bd6 31.b3 ile at e4’e yönelir (Motor: +1.25).' },
        { move: '29.Be3', text: '29...Nd7 30.h3 f5 31.Bf4 (Motor: +1.15).' },
      ],
    },
    '29b': {
      text: 'Siyah atı filiyle alır.',
      amac: 'c5’teki güçlü atı ortadan kaldırmak.',
      neden: 'At c5’te kalırsa a6 kalesini ve e6 piyonunu tehdit eder. Almak en iyisi (+0.8); diğerleri atın orada kalmasına izin verir.',
      diger: [
        { move: '29...Ra7', text: '30.Be3 Raa8 31.h3 Ng6 ile at c5’te kalır (Motor: +1.4).' },
        { move: '29...Raa8', text: '30.Be3 Ng6 31.h3 Bf8 (Motor: +1.4).' },
      ],
    },
    '30w': {
      text: '30.Rxc5! Kale c5’e oturur ve a5 ile c6’ya baskı yapar.',
      amac: 'd4 piyonunu yerinde tutarak e5 karesini kontrol etmek; kaleyi c5’e yerleştirmek.',
      neden: '30.dxc5? d4’ü kaldırır ve Siyaha 30...e5 ile merkezi açma imkânı verir (Motor: −0.3). 30.Rxc5 ise yapıyı korur (+0.8). 30.d5? Bd4 bir taş kaybettirir.',
      diger: [
        { move: '30.dxc5', text: '30...e5 31.Be3 Rd8 32.f4 ile Siyah aktifleşir (Motor: −0.3).' },
        { move: '30.d5', text: '30...Bd4 ile fil kaçar ve Beyaz bir taş geride kalır (Motor: −3.5).' },
      ],
    },
    '30b': {
      text: '...f5 ile f6 zayıflığından kurtulur ve e4’e bakar.',
      amac: 'Piyonu açık bir kareye sürmek ve f6 karesini ata bırakmak.',
      neden: 'f6’daki piyon Beyazın filine hedef oluyordu; f5’te e4 karesini kontrol eder. Motor en iyi hamle olarak görüyor (+0.95).',
      diger: [
        { move: '30...Kg6', text: '31.Bd6 Nd7 32.R5c4 f5 (Motor: +1.0).' },
        { move: '30...h4', text: '31.Be3 hxg3 32.hxg3 f5 ile h-piyonu değişir ama zayıflık kalır (Motor: +1.4).' },
      ],
    },
    '31w': {
      text: 'Fil g5’e gelir; e7 ve d8 karelerini kontrol eder.',
      amac: 'Siyahın şah kanadını sıkıştırmak ve atın f6’ya gelmesini zorlaştırmak.',
      neden: 'Fil g5’ten d8 ve e7’ye bakar. Motor 31.R5c2, 31.h3 ve 31.Kd3’ü biraz daha iyi buluyor (+0.9 karşı +0.8).',
      diger: [
        { move: '31.R5c2', text: '31...Ke8 32.Kd3 Nd7 33.Bg5 (Motor: +0.9).' },
        { move: '31.h3', text: '31...Nd7 32.R5c2 c5 33.dxc5 (Motor: +0.9).' },
      ],
    },
    '31b': {
      text: 'At d7’ye gelir; c5 kalesine saldırır ve f6’ya bakar.',
      amac: 'Kaleyi c5’ten uzaklaştırmak ve ...c5 kırılmasını hazırlamak.',
      neden: 'At c5’teki kaleyi tehdit eder. Motor en iyi hamle olarak görüyor (+0.7).',
      diger: [
        { move: '31...Nh7', text: '32.Bf4 Nf6 33.h3 Nd5 ile at d5’e döner (Motor: +0.8).' },
        { move: '31...Kg6', text: '32.Bf4 Nd7 33.R5c2 Kf7 (Motor: +0.9).' },
      ],
    },
    '32w': {
      text: 'Kale c2’ye çekilir.',
      amac: 'Kaleyi güvenli bir kareye getirmek ve b2’yi korumak.',
      neden: '32.R5c2 en iyisi (+0.7). Tuzak: 32.Rd1?? Nxc5 33.dxc5 ile Beyaz bir kalite kaybeder (−0.6).',
      diger: [
        { move: '32.R5c4', text: '32...c5 33.Be3 Rac6 34.dxc5 (Motor: +0.7).' },
        { move: '32.Rd1', text: '32...Nxc5 33.dxc5 ile kalite kaybı (Motor: −0.6).' },
      ],
    },
    '32b': {
      text: 'Şah g6’ya gelir ve g5 filini sorgular.',
      amac: 'Fili kovalamak ve şahı aktifleştirmek.',
      neden: 'Şah filine saldırır ama Beyaz h4 ile kolayca savunur. Motor 32...Rb6 ya da 32...c5’i biraz daha iyi buluyor (+0.85/+0.95 karşı +1.0).',
      diger: [
        { move: '32...Rb6', text: '33.f3 Ra6 34.Kd3 e5 ile Siyah aktifleşir (Motor: +0.85).' },
        { move: '32...c5', text: '33.dxc5 Rac6 34.Rd2 Nf6 ile kırılma (Motor: +0.95).' },
      ],
    },
    '33w': {
      text: 'h4 ile g5 fili desteklenir.',
      amac: 'Fili g5’te sağlam tutmak ve h5 piyonunu sabitlemek.',
      neden: 'Fil saldırı altında; h4 onu korur ve h5 piyonunu hareketsiz bırakır. Motor en iyi hamle olarak görüyor (+1.0).',
      diger: [
        { move: '33.Be7', text: '33...Kf7 34.Bg5 Ke8 35.h4 ile aynı yere döner (Motor: +1.0).' },
        { move: '33.Bf4', text: '33...Kf6 34.Bd6 c5 35.Bxc5 (Motor: +0.9).' },
      ],
    },
    '33b': {
      text: 'Şah f7’ye döner.',
      amac: 'Şahı merkeze yakın tutmak ve e6’yı korumak.',
      neden: 'g6’daki şah fili kovalayamadı; merkeze döner. Motor üç seçeneği eşit görüyor (+0.9).',
      diger: [
        { move: '33...Kg7', text: '34.Kd3 Kf7 35.Bf4 Nf6 (Motor: +0.9).' },
        { move: '33...Rb6', text: '34.f3 Ra6 35.Bf4 Kf7 (Motor: +0.9).' },
      ],
    },
    '34w': {
      text: 'f3 ile e4 ve g4 kareleri kontrol edilir.',
      amac: 'Siyahın taşlarının e4 karesine gelmesini önlemek ve ileride g4 kırılmasını hazırlamak.',
      neden: 'f3, Siyahın atına e4 ve g4’ü kapatır. Motor en iyi hamle olarak görüyor (+0.9).',
      diger: [
        { move: '34.Bf4', text: '34...c5 35.dxc5 Rac6 36.Be3 ile kırılma gelir (Motor: +0.7).' },
        { move: '34.Be3', text: '34...Nf6 35.Bf4 Nd5 ile at d5’e döner (Motor: +0.7).' },
      ],
    },
    '34b': {
      text: 'Siyah sonunda ...c5 oynar ve bir piyon verir.',
      amac: 'Pasif savunmadan kurtulmak, kaleleri c-hattında aktifleştirmek ve atı oyuna sokmak.',
      neden: 'Siyah uzun süredir bekliyordu ve Beyazın baskısı artıyordu. Bu feda kalelerini c-hattında ikiler ve atı c5 ile a4’e yönlendirir. Motor bekleme hamlelerini biraz daha iyi buluyor (34...Kg6 +0.8 karşı +1.0), ama oyun gösterdi ki bu aktiflik Siyaha ciddi şanslar verdi.',
      diger: [
        { move: '34...Kg6', text: '35.b3 Kf7 36.Rc4 Nf6 ile bekler (Motor: +0.8).' },
        { move: '34...Nf6', text: '35.Rc5 Nd7 36.R5c4 Nf6 ile tekrar (Motor: +0.8).' },
      ],
    },
    '35w': {
      text: 'Beyaz piyonu alır.',
      amac: 'Bir piyon kazanmak.',
      neden: 'Feda kabul edilir. 35.dxc5 en iyisi (+0.9); diğerleri Siyaha merkezde fazla serbestlik verir.',
      diger: [
        { move: '35.Be3', text: '35...Rac6 36.dxc5 e5 37.Kd3 ile Siyah merkezde aktif (Motor: +0.5).' },
        { move: '35.Bf4', text: '35...Rac6 36.Rc4 Re8 (Motor: +0.4).' },
      ],
    },
    '35b': {
      text: 'Kale c6’ya gelir; kaleler c-hattında ikilenir ve c5 piyonuna bakar.',
      amac: 'c5 piyonunu geri almak.',
      neden: 'c5 piyonu c-hattında iki kale tarafından saldırı altında. Motor en iyi hamle olarak görüyor (+1.0).',
      diger: [
        { move: '35...Rc7', text: '36.Rd2 Ke8 37.Be3 Rac6 (Motor: +1.4).' },
        { move: '35...Rcc6', text: '36.Rd1 Ke8 37.Be3 Rc7 (Motor: +1.7).' },
      ],
    },
    '36w': {
      text: '36.Rd1: Kasparov c5 piyonunu doğrudan savunmaz ve kaleyi d-hattına getirir.',
      amac: 'Kaleyi d-hattına çekerek ...Nxc5’e Rdc1 bağlamasıyla cevap vermek ve d7 atını hedef almak.',
      neden: 'ChessBase raporu bunu bir sürpriz olarak niteliyor: herkes “açık” 36.Be3’ü bekliyordu. Rapora göre 36...Nxc5 sonrası Beyaz kazanma şanslarını büyük ölçüde kaybetmiş görünüyordu. Motor ise 36...Nxc5? 37.Rdc1! ile Beyazın üstün olduğunu gösteriyor (+0.9) ve 36.Rd2’yi (+1.1) en iyi buluyor, çünkü orada b2 de korunur. Rapora göre bu bölümde iki oyuncu da zaman sıkıntısındaydı.',
      diger: [
        { move: '36.Rd2', text: '36...Nf6 37.Be3 Nd5 38.Bf2; 36...Nxc5? 37.Rdc2 ile aynı bağlama (Motor: +1.1).' },
        { move: '36.Be3', text: 'ChessBase’in “açık” hamle dediği seçenek; 36...e5 37.Rd1 Ke6 (Motor: +0.5).' },
      ],
    },
    '36b': {
      text: 'At b6’dan a4 piyonuna saldırır.',
      amac: 'Bağlamadan kaçınmak ve a4 piyonunu kazanmak.',
      neden: 'ChessBase’e göre Svidler 37.Rdc1 bağlamasından çekindiği için 36...Nxc5 yerine 36...Nb6 oynadı. Motor bu kararı doğruluyor: 36...Nb6 en iyi (+0.5), 36...Nxc5? 37.Rdc1 Nb3 38.Rxc6 (+0.9).',
      diger: [
        { move: '36...Nxc5', text: '37.Rdc1! Nb3 38.Rxc6 Nd4+ 39.Ke3 Nxc6 ile Beyaz üstün (Motor: +0.9).' },
        { move: '36...Ke8', text: '37.Be3 Nb6 38.g4 fxg4 (Motor: +0.9).' },
      ],
    },
    '37w': {
      text: 'Fil e3’e döner ve c5 piyonunu destekler.',
      amac: 'c5’i korumak ve b6 atını gözetlemek.',
      neden: 'c5 artık iki kez saldırı altındaydı; Be3 onu korur. Motor en iyi hamle olarak görüyor (+0.6).',
      diger: [
        { move: '37.Kf1', text: '37...Nxa4 38.Ra1 Nxc5 39.Rac1 ile Beyaz iki piyon kaybeder (Motor: +0.15).' },
        { move: '37.Rdc1', text: '37...e5 38.Be3 Ke6 39.b3 (Motor: +0.0).' },
      ],
    },
    '37b': {
      text: 'At a4 piyonunu alır.',
      amac: 'Materyali eşitlemek.',
      neden: 'ChessBase’e göre bu hamle Siyah için en iyi fikir olmayabilirdi; Kasparov bundan sonra yavaş yavaş avantajı geri aldı. Motor ise 37...R6c7 (+0.6) ile 37...Nxa4 (+0.6) arasında neredeyse fark görmüyor.',
      diger: [
        { move: '37...R6c7', text: '38.b3 Nd5 39.Rxd5 exd5 40.Kd3 ile oyun dengeye yakın (Motor: +0.6).' },
        { move: '37...Kg6', text: '38.b3 Nd5 39.Rxd5 exd5 (Motor: +0.9).' },
      ],
    },
    '38w': {
      text: 'Kale a1’den a4 atına ve a5 piyonuna saldırır.',
      amac: 'a-hattında baskı kurarak Siyahın zayıf a5 piyonunu kazanmak.',
      neden: 'At a4’te kenarda; Ra1 hem ata hem a5’e saldırır. Motor en iyi hamle olarak görüyor (+0.6); 38.Rd7+ çok daha az etkili (+0.2).',
      diger: [
        { move: '38.Rd7+', text: '38...Kg6 39.Ra7 Nxc5 40.Rxa5 Nb3 ile Siyah aktifleşir (Motor: +0.2).' },
        { move: '38.g4', text: '38...hxg4 39.fxg4 b3 ile Siyahın b-piyonu ilerler (Motor: +0.0).' },
      ],
    },
    '38b': {
      text: '...b3 ile piyon c2 kalesine saldırır.',
      amac: 'Kaleyi c2’den uzaklaştırıp atı kurtarmak.',
      neden: 'Atı korumak için en iyi yol bu. Motor en iyi hamle olarak görüyor (+0.7).',
      diger: [
        { move: '38...Nb6', text: '39.Rxa5 e5 40.Bf2 Ke6 ile a5 düşer (Motor: +1.7).' },
        { move: '38...f4', text: '39.Rxa4 fxe3 40.Rxa5 ile Beyaz piyonu ve hamleyi kazanır (Motor: +3.2).' },
      ],
    },
    '39w': {
      text: 'Kale d2’ye çekilir ve b2’yi korur.',
      amac: 'b2 piyonunu korumak ve kaleyi d-hattında tutmak.',
      neden: 'Kale saldırı altında; d2 onu güvenli bir kareye getirir ve b2’yi korur. Motor en iyi hamle olarak görüyor (+0.7).',
      diger: [
        { move: '39.Rcc1', text: '39...Nxc5 40.Rxa5 Nd7 ile Siyah rahat (Motor: +0.2).' },
        { move: '39.Rc4', text: '39...Nxb2 40.Rc3 a4 ile b2 düşer (Motor: −0.2).' },
      ],
    },
    '39b': {
      text: 'At c5 piyonunu alır.',
      amac: 'Bir piyon önde geçmek.',
      neden: 'Siyah şimdi bir piyon önde, ama a5 düşecek. Motor en iyi hamle olarak görüyor (+0.6).',
      diger: [
        { move: '39...f4', text: '40.Bxf4 e5 41.Be3 Nxc5 ile Siyah bir piyon kaybeder (Motor: +2.6).' },
        { move: '39...Nc3+', text: '40.bxc3 ile at kaybolur (Motor: +3.8).' },
      ],
    },
    '40w': {
      text: 'Kale a5 piyonunu alır; piyonlar yeniden eşit.',
      amac: 'Materyali eşitlemek ve kaleyi aktif tutmak.',
      neden: 'a5 korumasız. Rxa5 hem piyonu alır hem de kaleyi beşinci yatayda aktifleştirir. Motor en iyi hamle olarak görüyor (+0.6).',
      diger: [
        { move: '40.Bf2', text: '40...a4 41.Bxc5 Rxc5 42.Rxa4 ile oyun dengeye gider (Motor: +0.0).' },
      ],
    },
    '40b': {
      text: 'At a6’ya çekilir; b8 ve c7 karelerini tutar.',
      amac: 'Atı güvenli bir kareye getirmek ve b3 piyonunu korumaya hazırlanmak.',
      neden: 'At c5’te Beyazın kalesi ve filiyle saldırı altında. Motor 40...e5’i biraz daha iyi buluyor (+0.5 karşı +0.7).',
      diger: [
        { move: '40...e5', text: '41.Rb5 Ke6 42.Bf2 Nd7 ile Siyah merkezde aktif (Motor: +0.5).' },
        { move: '40...Ke7', text: '41.Rb5 e5 42.Rd5 Nd7 (Motor: +0.75).' },
      ],
    },
    '41w': {
      text: 'Kale b5’e gelir ve b3 piyonuna saldırır.',
      amac: 'b3 piyonunu kazanmak.',
      neden: 'b3 Siyahın son vezir kanadı piyonu ve zayıf. Motor 41.g4 ile şah kanadında da hat açmayı biraz daha iyi buluyor (+0.9 karşı +0.8).',
      diger: [
        { move: '41.g4', text: '41...hxg4 42.fxg4 fxg4 43.Rd7+ ile kaleler aktifleşir (Motor: +0.9).' },
        { move: '41.Rd7+', text: '41...Kg6 42.Bd2 Rb6 43.g4 (Motor: +0.7).' },
      ],
    },
    '41b': {
      text: 'Siyah kaleleri değişmeyi önerir.',
      amac: 'b3’ü korumak ve Beyazın aktif kalesini değişmek.',
      neden: 'Rb8, b3’ü korur ve b5 kalesine karşı çıkar. Motor 41...Nc7’yi eşit görüyor (+0.6).',
      diger: [
        { move: '41...Nc7', text: '42.Rb7 Ke8 43.Rxb3 Nd5 ile at d5’e gelir (Motor: +0.6).' },
        { move: '41...Nc5', text: '42.Bd4 R6c7 43.Be5 Ra7 (Motor: +0.9).' },
      ],
    },
    '42w': {
      text: 'Kale yedinci yataya girerek şah çeker.',
      amac: 'Şahı geriye itmek ve kale değişiminden sonra b7’ye gelme imkânı yaratmak.',
      neden: 'Şah çekmek tempo kazandırır ve Siyahın şahını geri sürer. Motor en iyi hamle olarak görüyor (+0.5).',
      diger: [
        { move: '42.Ra5', text: '42...Nb4 43.Ra7+ Kg6 44.Bf4 (Motor: +0.4).' },
        { move: '42.Rxb8', text: '42...Nxb8 43.Bf4 Na6 44.Be5 (Motor: +0.3).' },
      ],
    },
    '42b': {
      text: 'Şah e8’e çekilir.',
      amac: 'Şahı güvenli bir kareye getirmek ve d7 kalesine saldırmak.',
      neden: 'Diğer kareler daha kötü: 42...Kg6 43.Rxb8 Nxb8 44.Rb7 (+1.4), 42...Kf6 43.Bd4+ (+2.2).',
      diger: [
        { move: '42...Kg6', text: '43.Rxb8 Nxb8 44.Rb7 Rc2+ ile şah uzakta (Motor: +1.4).' },
        { move: '42...Kf6', text: '43.Bd4+ Kg6 44.Rxb8 ile Beyaz tempo kazanır (Motor: +2.2).' },
      ],
    },
    '43w': {
      text: 'Kaleler değişir.',
      amac: 'Kale değişimiyle b-hattına girmek.',
      neden: 'd7 kalesi saldırı altında; değişim Beyaza b7’ye gelme imkânı verir. Motor en iyi hamle olarak görüyor (+0.5).',
      diger: [
        { move: '43.Rdb7', text: '43...Rc2+ 44.Ke1 Rxb7 45.Rxb7 ile denge (Motor: +0.0).' },
      ],
    },
    '43b': {
      text: 'At geri alır.',
      amac: 'Materyali eşitlemek.',
      neden: 'Zorunlu: 43...Kxd7 44.Rb7+ ile Beyaz üstün kalır (+1.4), 43...Rc8?? bir kale kaybettirir.',
    },
    '44w': {
      text: 'Kale b7’de b8 atına ve b-hattı boyunca b3 piyonuna saldırır.',
      amac: 'b3 piyonunu kazanmak.',
      neden: 'Rb7 çifte saldırıdır: at ve b3. Motor en iyi hamle olarak görüyor (+0.5).',
      diger: [
        { move: '44.Rd3', text: '44...Rc2+ 45.Rd2 Rc4 46.Bd4 (Motor: +0.2).' },
        { move: '44.Rd1', text: '44...Rc2+ 45.Rd2 Nc6 ile kaleler değişir (Motor: +0.2).' },
      ],
    },
    '44b': {
      text: 'Siyah kalesiyle şah çeker.',
      amac: 'Tempo kazanmak ve Beyazın şahını geriye sürmek.',
      neden: 'b3’ü korumak mümkün değil; şah çekerek karşı oyun aranır. Motor en iyi hamle olarak görüyor (+0.5).',
      diger: [
        { move: '44...Nd7', text: '45.Rxb3 Rc2+ 46.Bd2 Ne5 (Motor: +1.1).' },
        { move: '44...Rc8', text: '45.Rxb3 Nd7 46.Rb5 Ke7 (Motor: +1.4).' },
      ],
    },
    '45w': {
      text: 'Şah f1’e çekilir.',
      amac: 'Şahı güvenli bir kareye getirmek ve f-piyonunu korumak.',
      neden: '45.Kf1 ve 45.Ke1 eşit (+0.5); 45.Kd1 daha zayıf (+0.2).',
      diger: [
        { move: '45.Ke1', text: '45...Nc6 46.Rxb3 Ne5 47.Bd4 (Motor: +0.5).' },
        { move: '45.Kd1', text: '45...Nc6 46.Rxb3 Rg2 47.Bf4 ile Siyahın kalesi aktif (Motor: +0.2).' },
      ],
    },
    '45b': {
      text: 'At d7’ye gelir, ama b3 korunamıyor.',
      amac: 'Atı merkeze getirmek.',
      neden: 'b3 düşecek; Siyah atı aktif bir kareye getirir. Motor en iyi hamle olarak görüyor (+0.4).',
      diger: [
        { move: '45...Nc6', text: '46.Rxb3 Na5 47.Rb8+ Kd7 (Motor: +0.45).' },
        { move: '45...Na6', text: '46.Rxb3 Nc7 47.Bf4 Nd5 (Motor: +0.55).' },
      ],
    },
    '46w': {
      text: 'Beyaz b3 piyonunu alır ve bir piyon önde.',
      amac: 'Materyal avantajını geri kazanmak.',
      neden: 'ChessBase’e göre Beyaz bu hamleyle materyal üstünlüğünü yeniden kazandı ve saldırıya geçti. Motor en iyi hamle olarak görüyor (+0.5).',
      diger: [
        { move: '46.Bd4', text: '46...e5 47.Bc3 Nc5 48.Rb8+ (Motor: +0.2).' },
        { move: '46.g4', text: '46...fxg4 47.fxg4 hxg4 48.Rxb3 (Motor: −0.1).' },
      ],
    },
    '46b': {
      text: 'Şah merkeze gelir.',
      amac: 'Şahı aktifleştirmek.',
      neden: 'Şah e7’de merkezi korur. Motor 46...Ne5’i biraz daha iyi buluyor (+0.5 karşı +0.7).',
      diger: [
        { move: '46...Ne5', text: '47.Bd4 Nc6 48.Bg7 Ne7 ile at aktif (Motor: +0.5).' },
        { move: '46...e5', text: '47.f4 Ke7 48.fxe5 Nxe5 (Motor: +0.7).' },
      ],
    },
    '47w': {
      text: 'Fil şah çeker.',
      amac: 'Şahı geriye itmek veya kenara yöneltmek.',
      neden: 'Şah çekmek tempo kazandırır. Motor en iyi hamle olarak görüyor (+0.8).',
      diger: [
        { move: '47.Ke1', text: '47...Ne5 48.Bg5+ Kf7 49.Kf1 (Motor: +0.55).' },
        { move: '47.Bd4', text: '47...Rc1+ 48.Ke2 Rc2+ 49.Ke1 (Motor: +0.35).' },
      ],
    },
    '47b': {
      text: 'Şah d6’ya gider.',
      amac: 'Şahı merkeze getirmek.',
      neden: 'Kf7 ve Kd6 eşit (+0.7). Svidler şahını vezir kanadına yöneltti.',
      diger: [
        { move: '47...Kf7', text: '48.Rb7 Ke8 49.Bf4 Nf6 (Motor: +0.7).' },
        { move: '47...Ke8', text: '48.Rb7 Rh2 49.Rb5 Rc2 (Motor: +0.75).' },
      ],
    },
    '48w': {
      text: 'Kale d-hattından şah çeker.',
      amac: 'Şahı c-hattına itmek.',
      neden: 'Şah çekmek tempo kazandırır ve Siyahın kalesini sınırlar. Motor en iyi hamle olarak görüyor (+1.0).',
      diger: [
        { move: '48.Ke1', text: '48...Rh2 49.Kf1 e5 50.Rd3+ (Motor: +0.4).' },
        { move: '48.Kg1', text: '48...e5 49.g4 hxg4 50.fxg4 (Motor: +0.2).' },
      ],
    },
    '48b': {
      text: 'Şah c6’ya gider.',
      amac: 'Şahı aktif tutmak.',
      neden: '48...Kc6 en iyisi (+1.2). 48...Kc5?? 49.Rxd7 bir taş kaybettirir (+4.7).',
      diger: [
        { move: '48...Kc7', text: '49.Rd2 Rc4 50.Be7 Rc6 (Motor: +1.6).' },
        { move: '48...Kc5', text: '49.Rxd7 ile at düşer (Motor: +4.7).' },
      ],
    },
    '49w': {
      text: 'Kale d2’de b2 piyonunu korur ve d-hattını tutar.',
      amac: 'b2’yi korumak ve d-hattında baskıyı sürdürmek.',
      neden: 'Kaleler tahtada kalır; Beyaz aktif kalesiyle Siyahın piyonlarına baskıyı sürdürmek ister. Motor 49.Rc3+! Rxc3 50.bxc3 ile fil-at oyun sonuna geçmeyi biraz daha iyi buluyor (+1.1 karşı +0.9).',
      diger: [
        { move: '49.Rc3+', text: '49...Rxc3 50.bxc3 Kd5 51.Kf2 ile Beyaz bir piyon önde fil-at oyun sonu (Motor: +1.1).' },
        { move: '49.b4', text: '49...Rb2 50.Be7 Ne5 51.Rd6+ (Motor: +0.8).' },
      ],
    },
    '49b': {
      text: 'Kale c4’e gelir; h4 ve b4’e bakar.',
      amac: 'h4 piyonuna baskı yapmak ve kaleyi aktif tutmak.',
      neden: 'c4’teki kale yatay boyunca h4’e saldırır. Motor en iyi hamle olarak görüyor (+0.9).',
      diger: [
        { move: '49...Rc1+', text: '50.Kg2 Rc4 51.Be7 Ne5 (Motor: +1.1).' },
        { move: '49...Rc5', text: '50.Be7 Rc1+ 51.Ke2 Kc7 (Motor: +1.7).' },
      ],
    },
    '50w': {
      text: 'Şah e2’ye gelir ve d3 karesini kontrol eder.',
      amac: 'Şahı merkeze yaklaştırmak.',
      neden: 'Şah merkeze döner, ama motor 50.Be7 ya da 50.Rd1’i daha iyi buluyor (+1.1 karşı +0.5). 50.Be7 sonrası Rd6+ ve Rxe6 tehdidi vardır.',
      diger: [
        { move: '50.Be7', text: '50...Ne5 51.Rd6+ Kc7 52.Rxe6 ile e6 düşer (Motor: +1.1).' },
        { move: '50.Rd1', text: '50...e5 51.Rc1 Rxc1+ 52.Bxc1 ile fil-at oyun sonu (Motor: +1.1).' },
      ],
    },
    '50b': {
      text: '...e5 ile piyon ilerler.',
      amac: 'e6 zayıflığından kurtulmak ve şahı d5’e getirmeye hazırlanmak.',
      neden: 'Plan mantıklı görünür, ama piyon e5’te f5’i desteksiz bırakır ve d6 karesini Beyaza verir. Motor 50...Nb6’yı öneriyor (+0.6); oyundaki hamleden sonra değerlendirme +1.7’ye çıkıyor.',
      diger: [
        { move: '50...Nb6', text: '51.b3 Rb4 52.Rb2 e5 ile Siyah b3’e baskı yapar (Motor: +0.6).' },
        { move: '50...Ne5', text: '51.Bf6 Nf7 52.Bc3 e5 (Motor: +0.8).' },
      ],
    },
    '51w': {
      text: 'Fil e7’ye gelir; d6, c5 ve f8 karelerini kontrol eder.',
      amac: 'Rd6+ için d6 karesini hazırlamak ve Siyahın atını sınırlamak.',
      neden: 'Fil e7’de d6’yı kontrol eder ve kalenin şah çekmesine destek verir. Motor en iyi hamle olarak görüyor (+1.3).',
      diger: [
        { move: '51.Kd1', text: '51...Rb4 52.Kc2 Rb8 53.Rd1 (Motor: +0.9).' },
        { move: '51.Kf2', text: '51...Nb6 52.Bf6 Rc5 53.g4 (Motor: +0.9).' },
      ],
    },
    '51b': {
      text: 'Hata: 51...e4? piyonu ilerletir ve e5 karesini boşaltır.',
      amac: 'Piyonu ilerletip Beyazın f3 piyonuna saldırmak ve karşı oyun yaratmak.',
      neden: 'Piyon e4’e gidince d5–f5 hattı açılır ve beşinci yatay Beyazın kalesine açık kalır. Motor 51...Nb6 (+1.5) ya da 51...Kc7’yi (+1.7) öneriyor; oyundaki hamleden sonra +2.8.',
      diger: [
        { move: '51...Nb6', text: '52.Rd6+ Kb5 53.Bf6 Rc2+ 54.Kd3 Rxb2 ile Siyah karşı oyun bulur (Motor: +1.5).' },
        { move: '51...Kc7', text: '52.b4 f4 53.gxf4 Rxf4 54.Rd5 ile oyun sürer (Motor: +1.7).' },
      ],
    },
    '52w': {
      text: '52.Rd6+! Kale şah çekerken d7 atına saldırır.',
      amac: 'Şahı c7’ye zorlayıp 53.Rd5 ile beşinci yatayı kullanmak.',
      neden: 'Şah c-hattından başka bir yere giderse at düşer. Motor +3.0; başka hamleler +0.6’nın altında.',
      diger: [
        { move: '52.b3', text: '52...exf3+ 53.Kxf3 Re4 54.Bd6 ile Siyah dengeye yakın (Motor: +0.55).' },
        { move: '52.Ke1', text: '52...exf3 53.Kf2 Re4 (Motor: +0.4).' },
      ],
    },
    '52b': {
      text: 'Tek hamle: şah c7’ye gider ve d7 atını korur.',
      amac: 'Atı kurtarmak.',
      neden: 'Zorunlu: 52...Kb5 53.Rxd7 (+5.2), 52...Kc5 53.Rxd7+ (+5.5).',
    },
    '53w': {
      text: '53.Rd5! Kale beşinci yatay boyunca f5 piyonuna saldırır.',
      amac: 'f5 ve h5 piyonlarını kazanmak.',
      neden: 'e5 boşaldığı için kale d5’ten f5 ve h5’e ulaşır. Motor +3.2; 53.Re6 +2.0.',
      diger: [
        { move: '53.Re6', text: '53...Rc2+ 54.Ke3 exf3 55.Kxf3 (Motor: +2.0).' },
        { move: '53.Rh6', text: '53...exf3+ 54.Kf2 Rd4 55.Bg5 (Motor: +1.4).' },
      ],
    },
    '53b': {
      text: 'Siyah kalesiyle şah çeker ve b2’ye yönelir.',
      amac: 'Karşı oyun için b2 piyonunu almak.',
      neden: 'f5 ve h5 korunamaz; Siyah b2’yi alarak karşılık arar. Tüm seçenekler kaybediyor (+3.4 ile +3.8 arası).',
      diger: [
        { move: '53...exf3+', text: '54.Kxf3 Rc1 55.Bg5 Rf1+ (Motor: +3.5).' },
        { move: '53...Nb6', text: '54.Rxf5 Rc2+ 55.Ke3 exf3 (Motor: +3.8).' },
      ],
    },
    '54w': {
      text: 'Şah e3’e gelir ve e4 piyonuna saldırır.',
      amac: 'Şahı aktif tutmak ve f3-e4 piyonlarına yakın durmak.',
      neden: 'Ke3 en iyisi (+3.4). Kf1 ya da Kd1 sonrası Siyah karşı oyun bulur (+1.2/+0.6).',
      diger: [
        { move: '54.Kf1', text: '54...Rxb2 55.fxe4 fxe4 56.Rxh5 (Motor: +1.2).' },
        { move: '54.Kd1', text: '54...Rxb2 55.fxe4 fxe4 (Motor: +0.6).' },
      ],
    },
    '54b': {
      text: 'Kale b2 piyonunu alır.',
      amac: 'Bir piyon geri almak.',
      neden: 'Siyah son karşı oyun şansını arıyor. Tüm seçenekler eşit derecede kaybediyor (+3.5).',
      diger: [
        { move: '54...exf3', text: '55.Kxf3 Rxb2 56.Rxf5 Rb3+ (Motor: +3.5).' },
        { move: '54...Rg2', text: '55.Rxf5 Rxg3 56.Kxe4 (Motor: +3.7).' },
      ],
    },
    '55w': {
      text: 'Kale f5 piyonunu alır.',
      amac: 'Bir piyon kazanmak ve h5’i hedef almak.',
      neden: 'Rxf5 en iyisi (+3.5). 55.fxe4 daha zayıf (+1.2).',
      diger: [
        { move: '55.fxe4', text: '55...Rb3+ 56.Kf2 fxe4 57.Rxh5 (Motor: +1.2).' },
        { move: '55.Kf4', text: '55...Rf2 56.Rxf5 Rxf3+ (Motor: +0.6).' },
      ],
    },
    '55b': {
      text: 'Siyah f3’te değişir.',
      amac: 'Beyazın piyonunu değişmek.',
      neden: 'Diğer seçenekler daha kötü (+3.8/+4.1).',
      diger: [
        { move: '55...Rg2', text: '56.Rg5 exf3 57.Kxf3 Rg1 (Motor: +3.8).' },
        { move: '55...Rb1', text: '56.fxe4 Re1+ 57.Kf4 Rf1+ (Motor: +4.1).' },
      ],
    },
    '56w': {
      text: 'Şah geri alır.',
      amac: 'Materyali korumak.',
      neden: 'Kxf3 en iyisi (+3.7). 56.Bc5? f2! ile f-piyonu tehlikeli olur (+0.2).',
      diger: [
        { move: '56.Rxf3', text: '56...Kc6 57.Ba3 Rb5 58.Ke4 (Motor: +1.3).' },
        { move: '56.Bc5', text: '56...f2 57.Bd4 Rb5 ile f-piyonu tehlikeli (Motor: +0.2).' },
      ],
    },
    '56b': {
      text: 'Kale şah çeker.',
      amac: 'Beyazın şahını geriye itmek.',
      neden: 'Siyah h5’i korumak için son bir denemede bulunur. Tüm seçenekler kaybediyor (+3.6).',
      diger: [
        { move: '56...Rb1', text: '57.Rxh5 Rf1+ 58.Kg2 Rf7 (Motor: +3.7).' },
        { move: '56...Nb6', text: '57.Rxh5 Kd7 58.Bg5 (Motor: +3.8).' },
      ],
    },
    '57w': {
      text: 'Şah f4’e gelir. h5 piyonu da düşecek; Beyaz fil ve iki piyonla kalacak. Svidler terk etti.',
      amac: 'Şahı aktif tutmak ve h5’i kazanmak.',
      neden: 'Kf4 en iyisi (+3.7). Rxh5 sonrası Beyazın g ve h piyonları bağlantılı ve fil ile destekleniyor; Siyahın karşı oyun şansı yok.',
      diger: [
        { move: '57.Kg2', text: '57...Re3 58.Bg5 Ra3 59.Bf4+ (Motor: +3.4).' },
        { move: '57.Kf2', text: '57...Nb6 58.Rxh5 Kd7 59.Bg5 (Motor: +3.0).' },
      ],
    },
  },
  exercises: [
    { id: 'ksv-1', kind: 'tekrar', plan: false, title: 'Hangi taşla geri almalı?',
      source: 'Kasparov – Svidler, Moskova 2004 (30. hamle)',
      fen: '2r2n2/5k2/r1p1pp2/p1b4p/Pp1P1B2/6P1/1PR1KP1P/2R5 w - - 0 30',
      prompt: 'Siyah c5’teki atı filiyle aldı. Siyahın a5 ve c6 piyonları zayıf, d4 piyonu ise e5 karesini tutuyor. Beyaz nasıl geri almalı?',
      hint: 'd4 piyonu yerinde kalsın; c5’e gelen taş a5 ve c6’ya baskı yapabilir.',
      line: ['Rxc5'],
      explanation: '**30.Rxc5!** Kale c5’te a5 ve c6 piyonlarına baskı yapar, d4 piyonu da e5 ve c5 karelerini tutmaya devam eder. 30.dxc5? sonrası Siyah ...e5 ile merkezi açar ve taşlarını aktifleştirir. Motor: Rxc5 +0.7, sonraki en iyi hamle dxc5 −0.3.',
      link: 'Geri kalmış c6 piyonunun önündeki c5 karesi Beyazın taşları için bir yerleşme noktasıdır.' },
    { id: 'ksv-2', kind: 'tekrar', plan: false, title: 'Şah çek, sonra beşinci yatay',
      source: 'Kasparov – Svidler, Moskova 2004 (52. hamle)',
      fen: '8/3nB3/2k5/5p1p/2r1p2P/5PP1/1P1RK3/8 w - - 0 52',
      prompt: 'Siyah 51...e4 oynadı ve e5 karesi boşaldı. Beyazın kalesi d2’de, fili e7’de. Beyazın kalesini en aktif şekilde oynayın.',
      hint: 'd6’dan şah çekerken d7 atına da saldırılabilir. Sonra kale beşinci yatayda neye saldırır?',
      line: ['Rd6+', 'Kc7', 'Rd5'],
      explanation: '**52.Rd6+! Kc7 53.Rd5!** Şah çeken kale d7 atına da saldırır, bu yüzden şah c7’ye gitmek zorundadır (52...Kb5 53.Rxd7). Sonra kale beşinci yatay boyunca f5’e saldırır. Motor: Rd6+ +3.5, sonraki en iyi 52.b3 +0.8; 53.Rd5 +3.5, sonraki en iyi 53.Re6 +1.8.',
      link: 'Oyun sonunda kale şah çekerek tempo kazanır ve piyonlara yandan saldırır.' },
    { id: 'ksv-3', kind: 'transfer', plan: false, title: 'e5 piyonunun desteklediği kare',
      source: 'Mamedyarov – Arngrimsson, Reykjavik Açık turnuvası 2006 (28. hamle)',
      fen: 'r5k1/qb3pp1/2n1p2p/pB2P3/PpN2Q2/4P3/1P4PP/2R3K1 w - - 3 28',
      prompt: 'Bu oyun da 4.e4 b5 5.a4 b4 6.Na2 koluyla başladı. Beyazın e5 piyonu Siyahın taşlarını sıkıştırıyor; c6 atını yalnızca b7 fili koruyor. Beyazın en güçlü hamlesi hangisi?',
      hint: 'At e5 piyonunun desteklediği bir kareye giderse b7 ve f7’ye saldırır.',
      line: ['Nd6'],
      explanation: '**28.Nd6!** At b7 filine ve f7’ye saldırır. Fil c6 atını korumayı bırakırsa Bxc6 ve Rxc6 bir taş kazanır: 28...Rf8 29.Bxc6 Bxc6 30.Rxc6. Motor: Nd6 +4.6, sonraki en iyi hamle 28.Rd1 +1.4.',
      link: 'Kasparov’un 7.e5 hamlesi gibi, e5 piyonu alan kazanır ve Beyazın atına önündeki kareleri verir; Kasparov c5’e, Mamedyarov d6’ya yerleşti.' },
    { id: 'ksv-4', kind: 'transfer', plan: false, title: 'Şah çek, piyonu al',
      source: 'Gelfand – Shirov, Tal Memorial, Moskova 2010 (43. hamle)',
      fen: '8/6p1/pp4k1/7p/P4p1P/1P1R1P2/4r1PK/8 w - - 0 43',
      prompt: 'Kale oyun sonu. Siyahın a6 ve b6 piyonları ilerde, şahı g6’da. Beyazın kalesi d3’te. Beyaz kalesini nasıl kullanmalı?',
      hint: 'Altıncı yataydan şah çekin; şah kaçınca kale aynı yatayda neyi alabilir?',
      line: ['Rd6+', 'Kf5', 'Rxb6'],
      explanation: '**43.Rd6+! Kf5 44.Rxb6** ve Beyaz bir piyon kazanır; a6 piyonu da zayıf kalır. Motor: Rd6+ +2.3, sonraki en iyi hamle 43.Rd8 +0.3; 44.Rxb6 +2.2, 44.Rd5+ +0.1.',
      link: 'Kasparov 52.Rd6+ ile tempo kazanıp 53.Rd5 ile beşinci yataydaki piyonlara saldırdı; Gelfand da şah çekip altıncı yatayda b6’yı aldı.' },
  ],
};
