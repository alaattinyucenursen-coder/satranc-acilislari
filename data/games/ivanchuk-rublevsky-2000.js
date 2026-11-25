// Ivanchuk – Rublevsky, Avrupa Kulüpler Kupası, Neum 2000 (6. tur). Kaynak: PgnMentor (Ivanchuk.pgn).
export default {
  id: 'ivanchuk-rublevsky-2000',
  theme: 'g4 saldırısına ...d5 ile merkezden cevap',
  white: 'Vasil Ivanchuk', black: 'Sergey Rublevsky',
  whiteShort: 'Ivanchuk', blackShort: 'Rublevsky',
  event: 'Avrupa Kulüpler Kupası', site: 'Neum', year: 2000, eco: 'B84',
  variation: 'Sicilya Kan, Scheveningen yapısına geçiş (5.Be2 Nf6 6.Nc3 Qc7)', result: '0-1',
  pgn: `1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Be2 Nf6 6. Nc3 Qc7 7. O-O d6 8. a4 Be7 9. a5 O-O 10. Be3 Nbd7 11. g4 h6 12. f4 d5 13. exd5 Nxd5 14. Nxd5 exd5 15. Nf5 Nf6 16. Nxe7+ Qxe7 17. Ra3 Be6 18. Bf3 Rfe8 19. Bd4 Ne4 20. Re3 f5 21. c4 Rad8 22. cxd5 Bxd5 23. gxf5 Qf7 24. Rfe1 Qxf5 25. Qc2 Bc6 26. Bxe4 Rxe4 27. Rxe4 Qg6+ 28. Kf2 Rxd4 29. Qxc6 Qxc6 30. Rxd4 Qc5 31. Re4 Qxa5 32. b4 Qa3 33. Kg2 Qc3 34. Rd8+ Kh7 35. Rdd4 b6 36. f5 a5 37. bxa5 bxa5 38. Ra4 Qc5 39. Rf4 Qd5+ 40. Kg3 Qd3+ 41. Kg2 Qe3 42. Rf2 Qg5+ 43. Kf1 Qc1+ 0-1`,

  summary: 'Siyahın kazandığı bu oyunda (0-1) Rublevsky, Kan (Paulsen) açılışından Scheveningen yapısına geçti. Ivanchuk rok yaptıktan sonra a4-a5 ile vezir kanadını kilitledi, sonra **11.g4 ve 12.f4** ile şahının önündeki piyonları yürüttü. Rublevsky klasik Sicilya kuralına uydu ve kanattan gelen saldırıya **12...d5 ile merkezden** cevap verdi. Motor bu anda 13.e5!’in Beyaza belirgin bir üstünlük vereceğini gösteriyor (Motor: +1.0); Ivanchuk 13.exd5 ile merkezi açınca oyun eşitlendi ve ileri itilmiş g4-f4 piyonları bir saldırı aracı olmaktan çıkıp Beyaz şahın önünde birer zayıflığa dönüştü. Siyah taşları değiştirerek d5’teki tek piyonunu sağlamlaştırdı, atı **e4** ileri karakoluna oturttu ve 20...f5 ile destekledi. Karışık bir orta oyunun ardından 26.Bxe4? hatası taktik bir dizilime yol açtı: **27...Qg6+ ve 28...Rxd4!** ile Siyah malzemeyi kazançlı bir şekilde geri aldı, çünkü e4 kalesi g6-c2 çaprazını kapatıyordu. Vezire karşı iki kale oyun sonu uzun süre dengedeydi; Rublevsky sabırla şah çekip kalelere baskı yaptı ve 43.Kf1?? hatası, 43...Qc1+ çatalıyla bir kale kaybettirdi.',
  intro: 'Oyun, 2000 Avrupa Kulüpler Kupası’nın (Neum, Bosna-Hersek) 6. turunda oynandı; Ivanchuk Polonia Varşova takımının birinci masasındaydı. Rublevsky siyahla Kan, Paulsen ve Taimanov Sicilyalarının bilinen uzmanlarındandır. 4...a6 ile Kan açılışı başlar: Siyah, siyah kareli filinin ve b8 atının yerini belirlemeden önce b5 karesini kontrol eder ve ...Qc7 için yer açar. 5.Be2 sakin bir kuruluştur; Siyah ...Nf6, ...Qc7 ve ...d6 ile **Scheveningen yapısını** kurar: e6 ve d6 piyonları d5 ve e5 karelerini tutan küçük ama sağlam bir merkezdir. Beyaz bu yapıda genellikle iki şey yapar: a4(-a5) ile Siyahın vezir kanadı açılımını (...b5) durdurur ve g4-g5 ya da f4-f5 ile şah kanadında saldırır. Siyahın cevabı da bellidir: kanattan gelen saldırıya **merkezde ...d5 veya ...e5 kırılmasıyla** karşılık vermek. Bu oyun, bu kuralın uygulamasını, ama aynı zamanda zamanlamanın ne kadar önemli olduğunu (13.e5! imkânı) gösteriyor.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      '**a4-a5** ile Siyahın ...b5 ilerleyişini engellemek; b6 karesini zayıflatmak ve vezir kanadında Siyahın karşı oyununu donmuş hâlde tutmak.',
      '**g4, ardından f4 ve g5** ile şah kanadında piyon fırtınası: f6 atını kovalayıp Siyah şahın savunucusunu ortadan kaldırmak.',
      '...d5 kırılmasına **e5 ile cevap vermek** (13.e5!): merkezi kapalı tutup alan avantajını ve şah kanadı saldırısını korumak. Oyunda bunun yerine 13.exd5 ile merkez açıldı.',
      'Merkez açıldıktan sonra **15.Nf5** ile Siyahın kara kareli filini değişmek, ardından Bd4 ile merkezde güçlü bir fil kurmak ve d5’teki tek piyonu hedef almak.',
      '**Ra3-e3** kale manevrası ile üçüncü yataydan e-hattına geçmek; Rfe1 ile e-hattını ikileyip e4 atına karşı durmak.',
      '21.c4 ile d5 piyonuna saldırarak Siyahın merkezini çözmek ve f3 filinin çaprazını açmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Kan esnekliğini kullanmak: ...a6, ...Nf6, ...Qc7 ve ...d6 ile Scheveningen yapısını kurmak; Keres saldırısı (erken g4) olmadan oyunu sakin bir kuruluşa çekmek.',
      'Kanattan gelen g4-f4 saldırısına **...d5 ile merkezden** cevap vermek; merkez açılınca ileri itilmiş Beyaz piyonları zayıflık hâline gelir.',
      'Taşları değiştirip (14...exd5, 16...Qxe7) d5’teki tek piyonu taş aktifliğiyle telafi etmek; **e-hattını** kalelerle doldurmak.',
      'Atı **e4 ileri karakoluna** yerleştirmek: f- ve g-piyonları ilerlediği için Beyaz onu piyonla kovalayamaz; **20...f5** ile desteklemek.',
      'Beyaz şahın açıklığını vezirle kullanmak: g-hattı ve g6-c2 çaprazı üzerinden şah çekişleri (27...Qg6+).',
      'Vezire karşı iki kale oyun sonunda vezir kanadında geçer piyon (a-piyonu) kazanmak ve **şah çekerek çatal** aramak; korumasız bir kaleyi beklemek.',
    ] },
  },
  critical: [
    { move: '12b', title: '12...d5: merkezden cevap, ama zamanlama tartışmalı', text: 'Beyaz 11.g4 ve 12.f4 ile şah kanadında ilerledi; g5 gelirse f6 atı kovulacak. Rublevsky klasik reçeteyi uygular: kanat saldırısına merkezden cevap. Ama motor tam bu anda bir sorun görüyor: 13.e5! Ne4 14.Nxe4 dxe4 15.Qe1 sonrası merkez kapanır, e4 piyonu zayıf olsa da Beyaz alan ve saldırı kazanır (Motor: +1.0). Daha sağlam olan 12...Nh7’dir (Motor: +0.3/+0.5): at g5 karesini önceden korur ve Beyaz piyonları hedefsiz kalır. 12...b5 ise 13.g5 hxg5 14.fxg5 ile şah kanadını açar (Motor: +0.8).' },
    { move: '13w', title: '13.exd5? Beyaz ana fırsatı kaçırıyor', text: 'Ivanchuk merkezi açar. Bu doğal görünür, ama Beyazın g4-f4 piyonları merkez kapalıyken bir saldırı silahıdır; merkez açılınca ise şahın önünde birer delik bırakan zayıflıklara döner. Motor 13.e5!’i açık ara öneriyor (Motor: +1.0); oyun hamlesiyle değerlendirme hemen eşitliğe iner (Motor: 0.0). Buradan sonra oyunun karakteri değişir: artık şah kanadı saldırısı yok, taşların aktifliği önemli.' },
    { move: '19b', title: '19...Ne4: at ileri karakolda', text: 'At e4’e yerleşir. Beyazın f- ve g-piyonları ilerlediği için bu at artık piyonla kovalanamaz; ancak bir taşla değişilebilir. Motor 19...Bd7’yi biraz daha doğru buluyor (Motor: +0.1), çünkü e6 fili f5 piyon itişine açık duruyor: 20.f5 Bd7 21.Bxe4 dxe4 22.g5 ile Beyaz biraz inisiyatif alırdı (Motor: +0.3). Oyunda 20.Re3 ve 20...f5 ile at sağlamlaştı.' },
    { move: '20b', title: '20...f5: atın desteği ve g4’e baskı', text: 'Siyah e4 atını piyonla destekler ve aynı anda g4 piyonuna saldırır. Bunun bedeli e6 filinin önünün kapanması ve e5 ile g6 karelerinin zayıflamasıdır, ama Siyah için kritik olan atın merkezde kalmasıdır. Motor 20...Qc7’yi (c3 Qxa5) çok az daha iyi buluyor (Motor: +0.2 / oyun hamlesi +0.5); fark küçüktür.' },
    { move: '26w', title: '26.Bxe4? d4 fili korumasız kalıyor', text: 'Beyaz e4 atını alır, Siyah 26...Rxe4 ile geri alır, Beyaz 27.Rxe4 ile bir kale fazlası kalmış gibi görünür. Ama 27...Qg6+! e4 kalesine ikinci kez saldırır ve d4 fili savunmasız kalır. Motor 26.Bc3’ü (Qxf4 27.Bxe4 Rxe4 28.Rxe4 Qg5+ 29.Qg2) ya da 26.Rxe4’ü öneriyor: ikisi de eşit (Motor: 0.0). Oyun hamlesiyle Siyah küçük ama kalıcı bir üstünlük alır (Motor: −0.5).' },
    { move: '28b', title: '28...Rxd4! çaprazı kapatan kale', text: 'Kale d4 filini alır. 29.Rxd4? sonrası 29...Qxc2+ ile Beyazın veziri düşer, çünkü e4 kalesi g6-c2 çaprazını kapatıyordu (Motor: −5.8). Beyaz 29.Qxc6 Qxc6 30.Rxd4 ile vezire karşı iki kale oyun sonuna razı olmak zorunda. Siyahın diğer hamleleri kaybeder: 28...Qf7? 29.Rg1 ile Beyaz bir kale fazlasıyla kazanır (Motor: +4.1).' },
    { move: '38w', title: '38.Ra4: kalelerin dağılması başlıyor', text: 'Beyaz a5 geçer piyonunu durdurmak için kaleyi a-hattına gönderir. Bu kendi başına kötü değil (Motor: −0.1), ama kalelerin biri a4’te, diğeri f-hattında olunca birbirlerini korumazlar. Vezire karşı kalelerle oynarken en büyük tehlike tam olarak budur: vezir şah çekerek korumasız kaleye çatal yapar. 38.h4 ya da 38.Rf4 de eşitliği korurdu.' },
    { move: '43w', title: '43.Kf1?? çatala yürümek', text: 'Vezire karşı iki kale oyun sonu eşitti. Motor 43.Kh3’ü öneriyor (Motor: −0.1): 43...Qe3+ 44.Kg2 Qc5 45.Raf4 ile kaleler yeniden birbirine yaklaşır. 43.Kf3 bile f5 piyonunu verir ama kaleyi kurtarır (Motor: −1.0). Kf1’den sonra şah c1 ve c2 karelerinden gelen şahlara açılır, a4 kalesi de korumasızdır: 43...Qc1+ ve kale düşer (Motor: −5.6).' },
  ],
  lessons: [
    'Sicilya’da Beyaz şah kanadında piyonlarla saldırınca Siyahın en iyi cevabı çoğu zaman **merkez kırılmasıdır (...d5)**; ama zamanlama önemlidir: Beyaz e5 ile merkezi kapatabiliyorsa kırılma ters tepebilir (13.e5! Motor: +1.0).',
    'Merkez **kapalıyken** g4-f4 piyonları saldırı silahıdır; merkez **açılınca** aynı piyonlar şahın önünde zayıflık olur. Bu yüzden Beyaz ...d5’e çoğu zaman e5 ile cevap verir.',
    'Tek kalmış bir merkez piyonu (d5), taşlar aktifse sorun değildir: Siyah taş değişimleriyle d5’i sağlamlaştırdı ve e4’ü ileri karakol olarak kullandı.',
    'İleri karakoldaki at ancak piyonla kovalanamıyorsa güçlüdür; Beyazın f- ve g-piyonları geçtiği için e4 atı kalıcı bir taş oldu. ...f5 ile desteklemek onu daha da sağlamlaştırır.',
    'Bir taş başka bir taşın çaprazını kapatıyorsa (e4 kalesi g6-c2 çaprazında), onu yerinden oynatmak arkadaki taşı korumasız bırakır: 28...Rxd4! bu yüzden cezasız kaldı.',
    'Değişim yaparken, değişimden sonra hangi taşların korumasız kalacağını say: 26.Bxe4? d4 filinin tek savunucusunu ortadan kaldırdı.',
    'Vezire karşı iki kale oyun sonunda kaleleri **birbirini korur hâlde** tutmak ve şahı vezirin şah çekebileceği karelerden uzak tutmak gerekir; aksi hâlde tek bir şah çekişi çatala dönüşür (43...Qc1+).',
  ],
  notes: {
    '1w': {
      text: '1.e4 ile Beyaz merkezi şah piyonuyla tutar; d5 ve f5 karelerini kontrol eder, filine ve vezirine yol açar.',
      amac: 'Merkezde hızlı yer kaplamak ve açık, taktik bir oyuna kapı aralamak.',
      neden: 'Ivanchuk çok yönlü bir oyuncudur ve hem 1.e4 hem 1.d4 oynar. 1.e4, Sicilya gibi keskin savunmalara karşı taşları hızla geliştirme imkânı verir.',
      diger: [
        { move: '1.d4', text: 'Daha kapalı, konumsal oyunlar getirir (Motor: +0.2). Rublevsky’nin Sicilyasını tamamen devre dışı bırakır.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); ileride 1.e4 ya da 1.c4 yapılarına geçebilir.' },
      ],
    },
    '1b': {
      text: '1...c5: Sicilya Savunması. Siyah d4 karesini yandan kontrol eder ve simetriyi bozar.',
      amac: 'Beyaz d4 oynadığında c-piyonunu d-piyonuyla değişip merkezde iki piyona karşı bir piyonluk çoğunluk ve yarı açık c-hattı elde etmek.',
      neden: 'Rublevsky’nin 1.e4’e karşı ana silahı Sicilyanın Kan/Paulsen/Taimanov kollarıdır. Sicilya, Siyaha dengesiz, kazanma şansı olan oyunlar verir; 1...e5’ten daha az simetriktir.',
      diger: [
        { move: '1...e5', text: 'Açık oyunlar, İspanyol ya da İskoç yapıları (Motor: +0.2). Daha simetrik, beraberliğe daha yakın bir yol.' },
        { move: '1...e6', text: 'Fransız Savunması (Motor: +0.35); sağlam ama siyah kareli fil uzun süre pasif kalır.' },
      ],
    },
    '2w': {
      text: '2.Nf3: at gelişir, d4 ilerleyişine destek hazırlar.',
      amac: 'd4 ile merkezi açmak ve Açık Sicilyaya girmek.',
      neden: 'Açık Sicilya en keskin ve teorik yoldur; Beyaz gelişim önüne ve alan avantajına dayanır. 2.c3 (Alapin) ve 2.Nc3 (Kapalı Sicilya) daha sakin seçeneklerdir.',
      diger: [
        { move: '2.c3', text: 'Alapin: d4’ü piyonla desteklemek ister; 2...d5 ile Siyah kolayca eşitler (Motor: +0.3).' },
        { move: '2.Nc3', text: 'Kapalı Sicilya ya da Grand Prix saldırısı; daha az teorik, daha yavaş (Motor: +0.3).' },
      ],
    },
    '2b': {
      text: '2...e6: Kan ve Taimanov sistemlerinin ortak başlangıcı. Siyah d5 karesini kontrol eder ve f8 filine yol açar.',
      amac: 'Esnek kalmak: b8 atı, f8 fili ve d-piyonunun yeri sonraya bırakılır; Beyazın kuruluşuna göre karar verilir.',
      neden: '2...d6 (Najdorf, Ejderha, Scheveningen) ve 2...Nc6 (Klasik, Sveşnikov) yolları çok teoriktir. 2...e6 ile Siyah, Beyazın en keskin sistemlerinin (örneğin Keres saldırısı) bir kısmından kaçınabilir.',
      diger: [
        { move: '2...d6', text: 'Najdorf/Scheveningen/Ejderha yolu (Motor: +0.47); Beyaz 6.g4 Keres saldırısı gibi keskin sistemler seçebilir.' },
        { move: '2...Nc6', text: 'Klasik ve Sveşnikov sistemleri (Motor: +0.33); motor bunu en kolay yol olarak görüyor.' },
      ],
    },
    '3w': {
      text: '3.d4: Beyaz merkezi açar ve c5 piyonuna d-piyonunu sunar.',
      amac: 'Merkezde açık hatlar ve hızlı taş gelişimi.',
      neden: 'Açık Sicilyanın ana fikri budur. 3.c3 ya da 3.Nc3 daha sakin yollardır; Ivanchuk ana yoldan gider.',
      diger: [
        { move: '3.Nc3', text: 'Önce geliştirmek (Motor: +0.34); Siyah 3...Nc6 ile Taimanov tipine ya da 3...a6 ile esnek bir oyuna geçebilir.' },
        { move: '3.c3', text: 'Alapin yapısına geçiş (Motor: +0.28); 3...d5 ile Fransıza benzer yapılar.' },
      ],
    },
    '3b': {
      text: '3...cxd4: Siyah değişir; Açık Sicilya oluşur.',
      amac: 'Kenar piyonunu (c) merkez piyonuyla (d) değişmek ve c-hattını açmak.',
      neden: 'Değişmemek Beyaza merkezde tam bir alan avantajı verir: 3...a6? 4.d5 ile Beyaz büyük alan kazanır (Motor: +0.8); 3...d5 de 4.exd5 ile açılan merkezde Siyahın şahı zayıf kalır (Motor: +1.0).',
      diger: [
        { move: '3...d5', text: '4.exd5 exd5 5.Bb5+ ile Beyaz açık merkezde gelişim önüne sahip olur (Motor: +1.0).' },
      ],
    },
    '4w': {
      text: '4.Nxd4: at d4’te merkeze yerleşir.',
      amac: 'Merkezdeki piyonu geri almak ve atı merkezde güçlü bir karede tutmak.',
      neden: 'Bu neredeyse zorunludur: Beyaz bir piyon eksik kalmamak için d4’ü geri alır. Atın merkezdeki konumu Açık Sicilyanın temelidir.',
      diger: [
        { move: '4.Be2', text: 'Piyonu hemen geri almamak (Motor: +0.2); 4...Bb4+ gibi hamlelerle Siyah rahat gelişir, Beyaz ise merkez piyonunu geç alır.' },
      ],
    },
    '4b': {
      text: '4...a6: Kan (Paulsen) varyantı. Siyah b5 karesini kontrol eder; Beyazın Nb5 ve Bb5 sıçramalarını önler.',
      amac: 'Taşlarını henüz yerleştirmeden ...b5 genişlemesine ve ...Qc7 vezir gelişimine hazırlanmak; siyah kareli filin b4, c5, d6 ya da e7 kareleri arasında seçim hakkını korumak.',
      neden: 'chess.com’daki Paulsen tarihçesinin vurguladığı gibi, bu sistemin özü esnekliktir: fil b4, c5 veya d6’ya gidebilir. Rublevsky bu açılışın uzmanıdır. 4...Nc6 (Taimanov) ve 4...Nf6 başka yollardır.',
      diger: [
        { move: '4...Nc6', text: 'Taimanov varyantı (Motor: +0.50); at d4 atına baskı yapar, ama 5.Nb5 gibi sıçramalara izin verir.' },
        { move: '4...Nf6', text: '5.Nc3 ile Dört At ya da ...d6 ile Scheveningen yapılarına gider (Motor: +0.47); Beyaz 5.e5 gibi seçenekleri de kullanabilir.' },
      ],
    },
    '5w': {
      text: '5.Be2: Beyaz sakin bir kuruluş seçer: fil e2’de, ardından kısa rok.',
      amac: 'Gelişimi tamamlayıp sonra kanat saldırısı (f4/g4) ya da vezir kanadında a4 ile alan kazanmak.',
      neden: 'Ana yollar 5.Bd3 (fil e4’ü korur, Motor: +0.58) ve 5.c4 (Maroczy bağı, Motor: +0.60) yollarıdır. 5.Be2 daha az iddialıdır (Motor: +0.2), ama Siyahın ...Bb4 ya da ...Bc5 gibi Kan fikirlerine karşı esnek bir yapı verir ve Scheveningen tipi oyunlara yönelir.',
      diger: [
        { move: '5.Bd3', text: 'Kan’a karşı en popüler sistem: fil e4’ü korur, c4 ile Maroczy yapısı kurmaya hazırlanır (Motor: +0.58).' },
        { move: '5.c4', text: 'Maroczy bağı: d5’i kontrol eder, Siyahı Kirpi tipi yapılara iter (Motor: +0.60).' },
        { move: '5.Nc3', text: 'En doğal gelişim; 5...Qc7 ya da 5...b5 ile ana teori (Motor: +0.4 civarı).' },
      ],
    },
    '5b': {
      text: '5...Nf6: at gelişir ve e4 piyonuna baskı yapar.',
      amac: 'Beyazı e4’ü korumaya zorlamak (Nc3) ve kısa roku hazırlamak.',
      neden: 'Fil e2’ye gittiği için e4 piyonu korumasızdır; 5...Nf6 bunu doğrudan sorgular. Motor bunu en iyi hamle olarak görüyor (Motor: +0.28).',
      diger: [
        { move: '5...Qc7', text: 'Vezir önce gelir (Motor: +0.42); 6.c4 sonrası Siyah Kirpi tipi yapılara girer.' },
        { move: '5...b5', text: 'Hemen vezir kanadında genişlemek (Motor: +0.45); 6.c4 ile Beyaz b5 piyonunu sorgular.' },
      ],
    },
    '6w': {
      text: '6.Nc3: at e4’ü korur ve gelişir.',
      amac: 'e4’ü sağlamlaştırıp kısa roka geçmek.',
      neden: 'e4 saldırı altında; Nc3 hem koruma hem gelişimdir. Bu hamleyle oyun Scheveningen ve Taimanov yapılarına yaklaşır.',
      diger: [
        { move: '6.Qd3', text: 'Vezirle e4’ü korumak (Motor: +0.37); vezir g3’e gidip şah kanadına baskı yapabilir, ama erken vezir hareketi zaman kaybettirebilir.' },
        { move: '6.Bf3', text: 'e4’ü filin arkasından korumak (Motor: +0.16); daha pasif.' },
      ],
    },
    '6b': {
      text: '6...Qc7: vezir c7’de e5 karesini ve c-hattını kontrol eder; Kan’ın tipik vezir yeri.',
      amac: 'c3 atına ve c-hattına baskı hazırlamak; ...Bb4 fikrini desteklemek ve e5 karesini tutmak.',
      neden: 'Siyah hâlâ d-piyonunun ve filin yerini belirlemiyor. 6...d6 doğrudan Scheveningen olur; 6...Bb4 da Kan’ın bilinen fikridir. Motor 6...Qc7’yi en esnek ve en iyi görüyor (Motor: +0.31).',
      diger: [
        { move: '6...d6', text: 'Doğrudan Scheveningen (Motor: +0.43); 7.f4 Be7 8.Be3 O-O ile klasik sistem.' },
        { move: '6...e5', text: 'Merkezde hemen ...e5 (Motor: +0.53); 7.Nb3 Bb4 sonrası d5 karesi zayıflar.' },
      ],
    },
    '7w': {
      text: '7.O-O: Beyaz kısa rok yapar.',
      amac: 'Şahı güvenli kareye almak ve f1 kalesini f-hattına bağlamak; f4 için hazırlık.',
      neden: 'Gelişim tamamlanmak üzere; rok hem şahı korur hem f4 ilerleyişini kale ile destekler. Motor da bunu ilk sırada görüyor (Motor: +0.34).',
      diger: [
        { move: '7.a3', text: 'Önce ...Bb4’ü önlemek (Motor: +0.20); yavaş ama bazen kullanılır.' },
        { move: '7.Qd3', text: 'Vezir şah kanadına (Qg3) hazırlanır (Motor: +0.20); daha keskin.' },
      ],
    },
    '7b': {
      text: '7...d6: Siyah piyonunu d6’ya koyar ve oyun **Scheveningen yapısına** geçer: e6 ve d6 piyonları merkezi tutar.',
      amac: 'd5 ve e5 karelerini kontrol eden küçük ama sağlam bir merkez kurmak; ileride ...d5 ya da ...e5 kırılmalarını yedekte tutmak.',
      neden: 'Wikipedia’nın Scheveningen maddesi bu merkezi "sağlam bir savunma bariyeri" olarak tanımlar. Kan’dan bu yapıya geçmenin avantajı, Beyazın en tehlikeli sistemi olan Keres saldırısının (erken g4) artık zamansız olmasıdır.',
      diger: [
        { move: '7...Be7', text: 'Önce fil (Motor: +0.37); genellikle aynı yapıya döner.' },
        { move: '7...Bc5', text: 'Kan tipi aktif fil (Motor: +0.40); 8.Nb3 Ba7 9.Kh1 ile fil a7-g1 çaprazında baskı yapar.' },
      ],
    },
    '8w': {
      text: '8.a4: Beyaz ...b5 ilerleyişini önler.',
      amac: 'Siyahın vezir kanadındaki karşı oyununu (...b5-b4 ile c3 atını kovalama) durdurmak ve b5 karesini kendine almak.',
      neden: 'Scheveningen’in Klasik sisteminde a4 standart bir hamledir; Wikipedia ana yolu ...a6 7.O-O Be7 8.Be3 O-O 9.f4 Qc7 10.a4 olarak veriyor. Ivanchuk a4’ü f4’ten önce oynayarak Siyahın ...b5 fikrini hemen kapatır.',
      diger: [
        { move: '8.f4', text: 'Doğrudan şah kanadında alan kazanmak (Motor: +0.42); 8...Be7 9.Be3 ile ana klasik yapılar.' },
        { move: '8.Qd3', text: 'Vezir manevrası (Motor: +0.30); 8...b5 ile Siyah vezir kanadında hızla genişler.' },
      ],
    },
    '8b': {
      text: '8...Be7: fil e7’de gelişir ve kısa roku hazırlar.',
      amac: 'Gelişimi tamamlamak ve şahı güvenli kareye almak.',
      neden: 'Scheveningen’in standart fil yeri e7’dir: d6’yı korur ve f6 atını destekler. 8...b6 ile vezir kanadında Kirpi tipi kuruluş ya da 8...Nc6 da mümkündür.',
      diger: [
        { move: '8...b6', text: 'a5’i önlemek ve ...Bb7 hazırlamak (Motor: +0.37); 9.f4 Bb7 10.f5 e5 ile keskin bir oyun.' },
        { move: '8...Nc6', text: 'Klasik at yeri (Motor: +0.41); 9.Be3 Be7 10.f4 ile ana yol.' },
      ],
    },
    '9w': {
      text: '9.a5: Beyaz vezir kanadında alan kazanır; b6 karesi Beyazın kontrolüne girer.',
      amac: '...b6 ile Siyahın vezir kanadı yapısını esnetmesini önlemek ve b6 karesini Be3-b6 gibi manevralar için kullanmak.',
      neden: 'a5, Siyahın ...b5 açılımını kalıcı olarak zorlaştırır (…b5 her zaman axb6 ile cevaplanabilir). Ama piyon a5’te zayıflayabilir; bu oyunun sonunda da 31...Qxa5 ile düştü. Motor 9.Qd3 ve 9.f4’ü çok az daha iyi buluyor.',
      diger: [
        { move: '9.Qd3', text: 'Vezir şah kanadına (Qg3) hazırlanır (Motor: +0.28).' },
        { move: '9.f4', text: 'Merkezde ve şah kanadında alan (Motor: +0.25); 9...O-O 10.Qe1 ile klasik saldırı kuruluşu.' },
      ],
    },
    '9b': {
      text: '9...O-O: Siyah kısa rok yapar.',
      amac: 'Şahı güvenceye almak ve f8 kalesini oyuna sokmak.',
      neden: 'Rok, Beyazın g4-g5 saldırısının hedefi olacaktır; ama merkezde kalan şah da tehlikelidir. Motor rokla Nbd7’yi neredeyse eşit görüyor.',
      diger: [
        { move: '9...Nbd7', text: 'Önce at (Motor: +0.25); şah hâlâ merkezde olduğu için Beyazın g4 ile saldırısı daha az etkili olur.' },
        { move: '9...Nc6', text: '10.Nxc6 bxc6 sonrası Siyahın vezir kanadı piyonları zayıflar (Motor: +0.40).' },
      ],
    },
    '10w': {
      text: '10.Be3: fil e3’te d4 atını destekler ve b6 karesini gözetler.',
      amac: 'Gelişimi tamamlamak ve f4-g4 ile şah kanadı ilerleyişi için hazırlanmak.',
      neden: 'Be3 Scheveningen’in standart fil yeridir. Motor da en iyi hamle olarak görüyor (Motor: +0.35). Fil, ilerde Bb6 manevrasıyla a5 piyonunu ve c7’deki veziri de rahatsız edebilir.',
      diger: [
        { move: '10.Qd3', text: 'Vezir manevrası (Motor: +0.32); 10...Nbd7 11.Qg3 ile şah kanadına baskı.' },
        { move: '10.h3', text: 'g4 öncesi hazırlık (Motor: +0.28); daha yavaş.' },
      ],
    },
    '10b': {
      text: '10...Nbd7: at d7’de esnek durur; c5 ve e5 karelerine gidebilir.',
      amac: 'Atı c5’e götürerek e4’e baskı yapmak ya da e5’e göndermek; c6 karesini fil (…Bd7-c6) veya gerekirse diğer taşlar için boş bırakmak.',
      neden: '…Nc6 a5 piyonu nedeniyle daha az etkili: Nxc6 bxc6 sonrası Siyahın vezir kanadı zayıflar. d7’deki at, f6 kovalanınca f6’ya geri gelebilir. Motor bunu en iyi buluyor (Motor: +0.35).',
      diger: [
        { move: '10...h6', text: 'g5’i önceden önlemek (Motor: +0.47).' },
        { move: '10...Re8', text: 'Merkezi güçlendirmek ve Bf8 hazırlığı (Motor: +0.54); ama g4-g5 sonrası f6 atı zayıf kalır.' },
      ],
    },
    '11w': {
      text: '11.g4! Beyaz şah kanadında piyon fırtınasına başlar; g5 ile f6 atını kovalamak ister.',
      amac: 'f6 atını kovalayıp Siyah şahın en önemli savunucusunu ortadan kaldırmak; ardından f4-f5 ile e6’ya baskı.',
      neden: 'Merkez kapalı ve Siyahın vezir kanadı oyunu a5 ile durdurulmuş; bu durumda kanat saldırısı mantıklıdır. Motor g4’ü en iyi buluyor (Motor: +0.40). Wikipedia’nın da belirttiği gibi Klasik Scheveningen’de Beyazın planı g2-g4-g5 ile şah kanadı saldırısıdır.',
      diger: [
        { move: '11.Bd3', text: 'Daha sakin; fil e4’ü korur (Motor: +0.28).' },
        { move: '11.Nb3', text: 'Atı geri çekip ...d5 ve ...b5 fikirlerini önlemek (Motor: +0.27); 11...b5 12.axb6 Nxb6 ile Siyah aktif olur.' },
      ],
    },
    '11b': {
      text: '11...h6: g5 ilerleyişini zorlaştırır; g5 oynanırsa h-hattı açılarak cevap verilir.',
      amac: 'f6 atının yerini korumak ve g5 geldiğinde ...hxg5 ile piyon değişimi yapabilmek.',
      neden: 'Motor bunu en iyi görüyor (Motor: +0.36). Ancak h6 da bir zayıflıktır: g5 gelince h-hattı Beyaza açılabilir. 11...d5 hemen merkezde değişim yapmayı denerdi (Motor: +0.54), ama Beyaz piyonları henüz f4’e gelmedi ve merkezdeki değişim Beyazın lehine olur.',
      diger: [
        { move: '11...b5', text: '12.g5 Ne8 13.f4 Bb7 ile Beyaz f6 atını geri sürer ve saldırısını sürdürür (Motor: +0.42).' },
        { move: '11...d5', text: 'Merkezde hemen değişmek (Motor: +0.54): 12.exd5 Nxd5 13.Nxd5 exd5 ile Siyahın d5 piyonu zayıf.' },
      ],
    },
    '12w': {
      text: '12.f4: Beyaz g5’i destekler ve merkezde e5 imkânını hazırlar. Şahın önündeki piyonlar artık ileride.',
      amac: 'g5’i f-piyonuyla destekleyerek h6’yı sorgulamak ve e4-e5 ile merkezi ilerletmek.',
      neden: 'Motor f4’ü açık ara en iyi hamle olarak görüyor (Motor: +0.59, sonraki en iyi 12.h4 +0.1). Beyazın bütün saldırısı bu iki piyonla (f4 ve g4) yürür; ama bu, merkez açılırsa şahın önünde delikler oluşacağı anlamına da gelir.',
      diger: [
        { move: '12.h4', text: 'g5’i h-piyonuyla desteklemek (Motor: +0.09); 12...Nc5 ile Siyah e4’e baskı yapar.' },
        { move: '12.Bd3', text: 'e4’ü korumak (Motor: 0.0); saldırı yavaşlar.' },
      ],
    },
    '12b': {
      text: '12...d5: Siyah kanattan gelen saldırıya merkezden cevap verir; e4 piyonuna saldırır.',
      amac: 'Merkezi açarak Beyazın ileri itilmiş f4-g4 piyonlarını zayıflığa çevirmek ve taşlarını aktifleştirmek.',
      neden: 'Bu klasik bir kuraldır: kanat saldırısına merkezden cevap. Ama motor bu anda tehlike görüyor: 13.e5! Ne4 14.Nxe4 dxe4 15.Qe1 ile merkez kapanır ve Beyaz saldırısını sürdürür (Motor: +1.0). 12...Nh7 ile g5’i önceden kontrol etmek daha sağlamdı (Motor: +0.3/+0.5). Rublevsky muhtemelen 13.exd5’ten sonraki açık oyunu hesaplamış, e5 seçeneğini ise daha az önemsemiştir.',
      diger: [
        { move: '12...Nh7', text: 'g5 karesini at ile önceden korumak (Motor: +0.3/+0.5): 13.Qe1 b5 14.axb6 Nxb6 ile Siyah sağlam durur.' },
        { move: '12...b5', text: '13.g5 hxg5 14.fxg5 Ne8 15.Rf3 ile Beyaz h-hattına yönelir (Motor: +0.8).' },
        { move: '12...Nc5', text: 'e4’e baskı (Motor: +0.7): 13.Bf3 d5 14.e5 sonrası yine merkez kapanır.' },
      ],
    },
    '13w': {
      text: '13.exd5: Beyaz merkezde değişir. Bu, oyunun karakterini değiştiren karardır.',
      amac: 'Merkezi açarak taşları aktifleştirmek ve Siyaha d5’te tek piyon bırakmak.',
      neden: 'Doğal görünse de motor açıkça 13.e5!’i öneriyor (Motor: +1.0): 13...Ne4 14.Nxe4 dxe4 15.Qe1 sonrası e4 piyonu düşmeye mahkûm görünür ama Beyaz f5 ve g5 ile saldırısını sürdürür. Oyun hamlesiyle değerlendirme eşitliğe iner (Motor: 0.0). Merkez açılınca g4-f4 piyonları saldırı silahı değil, şahın önünde zayıflık olur.',
      diger: [
        { move: '13.e5', text: 'En güçlüsü: 13...Ne4 14.Nxe4 dxe4 15.Qe1 b5 16.Qg3 ile Beyaz şah kanadında saldırır (Motor: +1.0).' },
        { move: '13.g5', text: 'Hemen saldırmak hatalı: 13...Nxe4 14.gxh6 g6 ile Siyah piyonu kazanır ve merkez onundur (Motor: −0.5).' },
      ],
    },
    '13b': {
      text: '13...Nxd5: at d5’e gelir ve c3 atına ve e3 filine saldırır.',
      amac: 'Merkezde taş değişimleriyle Beyazın saldırısını söndürmek.',
      neden: 'Bu tek iyi geri alıştır (Motor: +0.1). 13...exd5? e-hattını açmaz ve Beyaza g5 ile saldırı verir; 13...Nc5 (Motor: +1.0) ve 13...e5 (Motor: +1.7) Beyaza merkezde fazla piyonla avantaj bırakır.',
      diger: [
        { move: '13...Nc5', text: '14.Bf3 Rd8 15.g5 hxg5 ile Beyaz bir piyon fazlası ve saldırıyla kalır (Motor: +1.0).' },
        { move: '13...e5', text: '14.Nf5 Bc5 sonrası d5 piyonu Beyazda kalır (Motor: +1.7).' },
      ],
    },
    '14w': {
      text: '14.Nxd5: atlar değişir.',
      amac: 'd5’teki güçlü atı ortadan kaldırmak; Siyahı d5’e piyonla almaya zorlamak.',
      neden: 'At e3 filine saldırıyordu; Beyaz değişmezse 14...Nxe3 ile güçlü filini kaybeder: 14.Qd2? Nxe3 15.Qxe3 Bc5 ile Siyah üstün (Motor: −1.1). Bu yüzden değişim neredeyse zorunludur.',
      diger: [
        { move: '14.Qd2', text: '14...Nxe3 15.Qxe3 Bc5 ile d4 atı bağlanır; Siyah üstün (Motor: −1.1).' },
        { move: '14.Qd3', text: 'Aynı problem: 14...Nxe3 15.Qxe3 Bc5 (Motor: −1.1).' },
      ],
    },
    '14b': {
      text: '14...exd5: Siyah piyonla geri alır; e-hattı açılır.',
      amac: 'Taşı geri almak ve açılan e-hattını kalelerle kullanmak.',
      neden: 'Zorunlu bir geri alış: başka bir hamle bir taş kaybettirir (örneğin 14...Qd6? 15.Nxe7+ Motor: +5.4). Siyahın d5’te tek bir piyonu kalır, ama e-hattı açılır ve taşları aktif.',
    },
    '15w': {
      text: '15.Nf5: at e7 filine saldırır ve siyah kareli fili değişmek ister.',
      amac: 'Siyahın iyi filini değişip kara kareleri kontrol etmek; d4’e güçlü bir fil yerleştirmek ve d5’i tek bırakmak.',
      neden: 'Motor bunu en iyi hamle olarak görüyor (Motor: −0.1). At d4’te ...Bc5 ile bağlanabilirdi; f5’e gidip filini değişerek bu tehlikeyi ortadan kaldırır. 15.Kh1 ya da 15.g5 Siyaha ...Bc5 fırsatı verir.',
      diger: [
        { move: '15.g5', text: '15...hxg5 16.Nf5 Re8 ile Beyazın şahı daha da açılır (Motor: −0.3).' },
        { move: '15.Kh1', text: '15...Re8 16.Bd3 Bc5 ile Siyah aktif (Motor: −0.6).' },
      ],
    },
    '15b': {
      text: '15...Nf6: at f6’ya döner, d5 piyonunu korur ve e4 karesini kontrol eder.',
      amac: 'd5’i sağlamlaştırmak ve atı ileride e4 ileri karakoluna götürmek.',
      neden: 'Filin değişimi önlenemez; Siyah bunun yerine atını en iyi kareye getirir. Motor 15...Re8’i de eşit görüyor; 15...Bc5 ise 16.Bxc5 Qxc5+ 17.Qd4 ile Beyaza oyun sonunda küçük üstünlük verir (Motor: +0.3).',
      diger: [
        { move: '15...Re8', text: 'Önce kale e-hattına (Motor: 0.0); 16.Nxe7+ Rxe7 17.Ra3 Nf6.' },
        { move: '15...Bc5', text: '16.Bxc5 Qxc5+ 17.Qd4 Qxd4+ ile d5 zayıf bir oyun sonu (Motor: +0.3).' },
      ],
    },
    '16w': {
      text: '16.Nxe7+: at fili alır ve şah çeker.',
      amac: 'Siyahın kara kareli filini oyundan çıkarmak; Bd4 ile kara karelerde hâkimiyet kurmak.',
      neden: 'Plan buydu. Atı geri çekmek zayıf: 16.Ng3? Bc5 17.Bxc5 Qxc5+ sonrası Siyah aktif (Motor: −0.8).',
      diger: [
        { move: '16.Ng3', text: '16...Bc5 ile Siyah kara kareli filini aktifleştirir (Motor: −0.8).' },
        { move: '16.Bd3', text: '16...Bc5 17.b4 Bxb4 ile Siyah bir piyon kazanır (Motor: −1.1).' },
      ],
    },
    '16b': {
      text: '16...Qxe7: vezir geri alır ve e-hattına yerleşir.',
      amac: 'Taşı geri almak; vezir e-hattında e3 filine ve e2 filine baskı yapar.',
      neden: 'Zorunlu geri alış (şah hamleleri bir taş kaybettirir: Motor: +5.4). Vezirin e7’deki konumu iyi: e-hattında ve kara karelerde aktif.',
    },
    '17w': {
      text: '17.Ra3: kale üçüncü yataydan e-hattına ve şah kanadına geçecek.',
      amac: 'a1 kalesini oyuna sokmak: Ra3-e3 ile e-hattını kontrol etmek ve Siyahın e-hattı baskısını dengelemek.',
      neden: 'a5 piyonu ilerlediği için a1 kalesi a-hattında iş yapamaz; üçüncü yatay ise boştur. Motor 17.Bd4’ü (Motor: 0.0) ve Ra3’ü neredeyse aynı görüyor.',
      diger: [
        { move: '17.Bd4', text: 'Fil önce merkeze (Motor: 0.0); 17...Re8 18.Rf2 Ne4 19.Rg2.' },
        { move: '17.Bf2', text: 'Fil d4’ü ve h4’ü kontrol eder (Motor: −0.2); daha pasif.' },
      ],
    },
    '17b': {
      text: '17...Be6: fil e6’da d5’i destekler.',
      amac: 'd5 piyonunu sağlamlaştırmak ve kaleleri birbirine bağlamak.',
      neden: 'Doğal görünür, ama motor küçük bir dezavantaj buluyor: fil e6’da f4-f5 ile kovalanabilir (Motor: +0.35). 17...Bd7 daha esnek: 18.g5 hxg5 19.fxg5 Ne4 20.Qxd5 Bc6 ile Siyah taşları çok aktif olur (Motor: −0.1).',
      diger: [
        { move: '17...Bd7', text: 'Fil f5 itişinden etkilenmez; c6’ya gidebilir (Motor: −0.1).' },
        { move: '17...Re8', text: '18.Bf3 Bd7 19.g5 Ne4 ile Siyah aktif (Motor: 0.0).' },
      ],
    },
    '18w': {
      text: '18.Bf3: fil f3’ten d5 piyonuna baskı yapar.',
      amac: 'd5’i hedef almak ve e4 karesini kontrol etmek.',
      neden: 'Beyaz Siyahın merkez piyonunu zayıflık olarak gösterir. Motor ise 18.Bd4’ü biraz daha iyi buluyor: 18...Ne4 19.f5 Bd7 20.Re3 ile e6 filinin kovalanması Beyaza alan kazandırır (Motor: +0.3).',
      diger: [
        { move: '18.Bd4', text: 'Fil önce merkeze; f5 tehdidiyle e6 filini kovalamaya hazırlanır (Motor: +0.3).' },
        { move: '18.Bb6', text: 'Fil b6’da d8 karesini kontrol eder (Motor: +0.3): 18...Rae8 19.Re3 Qb4 20.Rb3.' },
      ],
    },
    '18b': {
      text: '18...Rfe8: kale e-hattına gelir; e3 ve e4 karelerini hedefler.',
      amac: 'e-hattını kontrol etmek ve Ne4 manevrasını desteklemek.',
      neden: 'e-hattı Siyahın en önemli aktif hattıdır. Motor 18...Ne4 ve 18...Rac8’i de eşit görüyor (Motor: 0.0).',
      diger: [
        { move: '18...Ne4', text: 'Hemen at merkeze (Motor: 0.0): 19.f5 Bd7 20.Bxe4 dxe4.' },
        { move: '18...Rac8', text: 'c-hattını almak (Motor: 0.0); c2 piyonu hedef olur.' },
      ],
    },
    '19w': {
      text: '19.Bd4: fil d4’e merkeze yerleşir; f6 atına ve g7’ye bakar.',
      amac: 'Güçlü bir merkez fili kurmak; d4 Siyahın tek piyonunun önündeki ideal bloklama karesidir.',
      neden: 'd5 piyonunun önündeki d4 karesi Beyaz için kalıcı bir merkezdir; Siyahın kara kareli fili olmadığı için bu fil karşılıksız kalır. Motor bunu en iyi görüyor (Motor: 0.0).',
      diger: [
        { move: '19.Bb6', text: 'Fil b6’da d8’i kontrol eder (Motor: −0.1).' },
        { move: '19.Rb3', text: 'Kale b7’ye baskı yapar (Motor: −0.1); 19...Rac8 20.Bd4 Qc7.' },
      ],
    },
    '19b': {
      text: '19...Ne4: at e4 ileri karakoluna yerleşir.',
      amac: 'Atı merkezde güçlü bir kareye oturtmak; f2, c3 ve g3 karelerine baskı yapmak.',
      neden: 'Beyazın f-piyonu ilerlediği için at piyonla kovalanamaz; ancak Bxe4 ile değişilebilir. Ama e6 fili f5 itişine açık: 20.f5 Bd7 21.Bxe4 dxe4 22.g5 ile Beyaz inisiyatif alırdı. Motor 19...Bd7’yi biraz daha iyi buluyor (Motor: +0.1 / oyun hamlesi +0.5).',
      diger: [
        { move: '19...Bd7', text: 'Önce fili f5 itişinden kurtarmak (Motor: +0.1); sonra Ne4.' },
        { move: '19...Rac8', text: '20.Re3 Qd6 21.g5 hxg5 (Motor: +0.2).' },
        { move: '19...Qb4', text: 'a5 piyonuna saldırmak (Motor: +0.25): 20.Re3 Ne4 21.g5.' },
      ],
    },
    '20w': {
      text: '20.Re3: kale e3’te e-hattına gelir ve e4 atına karşı durur.',
      amac: 'e-hattını kontrol etmek ve e4 atını sorgulamak.',
      neden: 'Beyaz kalesini aktifleştirir. Motor 20.Bb6 ve 20.f5’i neredeyse aynı görüyor: 20.f5 Bd7 21.Bxe4 dxe4 22.g5 ile Beyaz atı değişip şah kanadında inisiyatif alırdı (Motor: +0.3). Oyun hamlesi de denktir (Motor: +0.3).',
      diger: [
        { move: '20.f5', text: 'e6 filini kovalayıp ...f5’i engellemek (Motor: +0.3): 20...Bd7 21.Bxe4 dxe4 22.g5.' },
        { move: '20.Bb6', text: 'Fil b6’da d8’i ve c7’yi kontrol eder (Motor: +0.35).' },
      ],
    },
    '20b': {
      text: '20...f5! Siyah e4 atını piyonla destekler ve aynı anda g4 piyonuna saldırır.',
      amac: 'e4 atını kalıcı bir merkez taşı yapmak; g4 piyonunu değişip Beyaz şahının etrafını açmak.',
      neden: 'Bu hamle Siyahın planının özüdür: at artık sadece Bxe4 ile değişilebilir. Bedeli e6 filinin kapanması ve e5 karesinin zayıflamasıdır. Motor 20...Qc7’yi çok az daha iyi buluyor (Motor: +0.2 / oyun hamlesi +0.5): 21.c3 Qxa5 22.g5 hxg5; fark küçüktür.',
      diger: [
        { move: '20...Qc7', text: 'a5 piyonuna saldırı (Motor: +0.2): 21.c3 Qxa5 22.g5 hxg5.' },
        { move: '20...Qb4', text: 'a5 ve b2’ye baskı (Motor: +0.25): 21.g5 g6 22.h4.' },
      ],
    },
    '21w': {
      text: '21.c4: Beyaz d5 piyonuna saldırır.',
      amac: 'Siyahın merkezini çözmek: d5 düşerse e4 atı desteğini kaybeder; f3 filinin çaprazı açılır.',
      neden: 'Motor c4’ü en iyi hamle olarak görüyor (Motor: +0.5). 21.gxf5 Bxf5 22.Rf2 daha sakin (Motor: +0.3). c4 ile Beyaz hemen merkezde gerilim yaratır ve Siyahı kesin kararlara zorlar.',
      diger: [
        { move: '21.gxf5', text: '21...Bxf5 22.Rf2 Rad8 23.Rg2 ile g-hattı Beyaza açılır (Motor: +0.3).' },
        { move: '21.c3', text: 'Daha sakin; e4 atına karşı Bg2 hazırlanır (Motor: +0.3).' },
      ],
    },
    '21b': {
      text: '21...Rad8: kale d-hattına gelir ve d5’i korur.',
      amac: 'd5 piyonunu tutmak; d-hattında d4 filine karşı durmak.',
      neden: 'Bu tek iyi hamledir (Motor: +0.3/+0.5). Diğerleri Beyaza üstünlük verir: 21...Qf7 22.Rfe1 fxg4 23.Bg2 Bf5 24.cxd5 (Motor: +1.1) ya da 21...Qb4 22.Bxe4 dxe4 23.gxf5 Bxc4 24.Qg4 (Motor: +1.1).',
      diger: [
        { move: '21...Qf7', text: '22.Rfe1 fxg4 23.Bg2 ile e4 atı yıkılır (Motor: +1.1).' },
        { move: '21...Qb4', text: '22.Bxe4 dxe4 23.gxf5 Bxc4 24.Qg4 ile Beyaz şahın etrafında üstün (Motor: +1.1).' },
      ],
    },
    '22w': {
      text: '22.cxd5: Beyaz d5’te değişir.',
      amac: 'Merkezi açarak f3 filinin çaprazını açmak ve Siyahın piyon desteğini yok etmek.',
      neden: 'Motor 22.gxf5’i biraz daha iyi buluyor: 22...Bxf5 23.cxd5 Rxd5 24.Qb3 ile Beyaz d5 kalesine ve b7’ye baskı yapar (Motor: +0.35 / oyun hamlesi +0.2). Fark küçük.',
      diger: [
        { move: '22.gxf5', text: 'Önce f5’i almak (Motor: +0.35): 22...Bxf5 23.cxd5 Rxd5 24.Qb3.' },
        { move: '22.Bb6', text: 'd8 kalesini kovalamak (Motor: +0.16).' },
      ],
    },
    '22b': {
      text: '22...Bxd5: fil d5’e gelir ve f3 filine karşı durur.',
      amac: 'Merkezi tutmak; fil d5’ten e4 atını destekler ve f3 filinin baskısını keser.',
      neden: 'Motor bunu en iyi görüyor (Motor: +0.05). 22...Rxd5 23.Qa4 Qd7 24.Qxd7 ile Beyaz biraz daha iyi bir oyun sonu alır (Motor: +0.3).',
      diger: [
        { move: '22...Rxd5', text: '23.Qa4 Qd7 24.Qxd7 Rxd7 ile Beyaz biraz daha iyi (Motor: +0.3).' },
        { move: '22...Qb4', text: '23.gxf5 Bxf5 24.Be5 ile Beyaz üstün (Motor: +0.5).' },
      ],
    },
    '23w': {
      text: '23.gxf5: Beyaz f5’te bir piyon kazanır.',
      amac: 'Malzeme kazanmak; e4 atının piyon desteğini ortadan kaldırmak.',
      neden: 'Motor bunu en iyi görüyor (Motor: +0.2/+0.3). Ama g-hattı açılır ve Beyazın şahı açık kalır; bu, sonraki ...Qg6+ fikirlerinin kaynağıdır. 23.Qc2? fxg4 ile Siyah üstün (Motor: −0.5).',
      diger: [
        { move: '23.Bb6', text: '23...Bc4 24.Bxd8 Rxd8 ile Siyah kale için fil ve inisiyatif alır (Motor: 0.0).' },
        { move: '23.Qc2', text: '23...fxg4 24.Bxe4 Bxe4 ile Siyah üstün (Motor: −0.5).' },
      ],
    },
    '23b': {
      text: '23...Qf7: vezir f7’den f5 piyonuna saldırır.',
      amac: 'Piyonu geri almak ve veziri f-hattında aktifleştirmek.',
      neden: 'Motor 23...Bc6’yı da benzer görüyor (Motor: +0.2): 24.Qb3+ Kh8 25.Rd1. Oyun hamlesi de denk (Motor: +0.25). 23...Qf8 daha pasif (Motor: +0.6).',
      diger: [
        { move: '23...Bc6', text: '24.Qb3+ Kh8 25.Rd1 Qf8 (Motor: +0.2).' },
        { move: '23...Qf8', text: '24.Qc2 Bc6 25.Be5 (Motor: +0.6).' },
      ],
    },
    '24w': {
      text: '24.Rfe1: kale e1’e gelir ve e-hattını ikiler.',
      amac: 'e4 atına iki kaleyle baskı yapmak.',
      neden: 'Motor 24.Qc2’yi biraz daha iyi buluyor: 24...Nf6 25.Rxe8+ Rxe8 26.h3 ile Beyaz piyonunu korur (Motor: +0.4 / oyun hamlesi 0.0). Rfe1 ile Beyaz f5 piyonunu bırakır.',
      diger: [
        { move: '24.Qc2', text: '24...Nf6 25.Rxe8+ Rxe8 26.h3 ile f5 piyonu korunur (Motor: +0.4).' },
        { move: '24.Bh5', text: '24...Qxf5 25.Bxe8 Rxe8 26.h3 ile Beyaz kale için fil kazanır (Motor: +0.35).' },
      ],
    },
    '24b': {
      text: '24...Qxf5: vezir piyonu geri alır.',
      amac: 'Malzemeyi dengelemek ve veziri g-hattında ve f-hattında aktif tutmak.',
      neden: 'Tek iyi hamle (Motor: 0.0). 24...Nf6? 25.Bxf6 Bxf3 26.Rxe8+ Rxe8 27.Rxe8+ Qxe8 28.Qxf3 ile Beyaz bir piyon fazlasıyla üstün (Motor: +1.2).',
      diger: [
        { move: '24...Nf6', text: '25.Bxf6 Bxf3 26.Rxe8+ ile Beyaz üstün (Motor: +1.2).' },
        { move: '24...Bc6', text: '25.Bxe4 Qc4 26.f6 ile Beyaz piyonu korur (Motor: +1.2).' },
      ],
    },
    '25w': {
      text: '25.Qc2: vezir c2’de e4 atına baskı yapar.',
      amac: 'e4 atına üçüncü kez saldırmak ve c-hattını kontrol etmek.',
      neden: 'Motor 25.Qd3 ve 25.Qe2’yi de eşit görüyor (Motor: 0.0). c2’de vezir ilerde g6-c2 çaprazında kalacak; bu, 28...Rxd4 taktiğinin bir unsuru olacak.',
      diger: [
        { move: '25.Qd3', text: '25...Qg6+ 26.Kf1 Ng3+ 27.hxg3 ile karmaşık oyun (Motor: 0.0).' },
        { move: '25.Qe2', text: '25...Nf6 26.Bxd5+ Qxd5 27.Bxf6 ile denge (Motor: 0.0).' },
      ],
    },
    '25b': {
      text: '25...Bc6: fil c6’ya çekilir ve e4 atını korur.',
      amac: 'e4 atını savunmak; fil c6’dan e4’ü ve h1’e kadar uzun çaprazı kontrol eder.',
      neden: 'At üç kez saldırı altında; fil çapraz üzerinden korur. Motor 25...Rd6’yı da eşit görüyor (Motor: 0.0). 25...Rd7? 26.Bxe4 Rxe4 27.Rxe4 Re7 ile Beyaz kazanır (Motor: +2.2).',
      diger: [
        { move: '25...Rd6', text: '26.Rxe4 Bxe4 27.Bxe4 Qg4+ 28.Kh1 Rxd4 ile denge (Motor: 0.0).' },
        { move: '25...Rd7', text: '26.Bxe4 ile Beyaz bir taş kazanır (Motor: +2.2).' },
      ],
    },
    '26w': {
      text: '26.Bxe4? Beyaz e4 atını alır, ama ardından d4 fili korumasız kalacak.',
      amac: 'Merkezdeki atı ortadan kaldırmak ve e-hattında üstünlük kurmak.',
      neden: 'Ivanchuk 26...Rxe4 27.Rxe4 sonrası bir kale fazlası kalacağını düşünmüş olabilir; ama 27...Qg6+ ile Siyah e4 kalesine ve d4 filine aynı anda baskı yapar. Motor 26.Bc3’ü öneriyor: 26...Qxf4 27.Bxe4 Rxe4 28.Rxe4 Qg5+ 29.Qg2 ile denge (Motor: 0.0). Oyun hamlesiyle Siyah küçük bir üstünlük alır (Motor: −0.5).',
      diger: [
        { move: '26.Bc3', text: 'Fili korumalı bir kareye çekmek (Motor: 0.0): 26...Qxf4 27.Bxe4 Rxe4 28.Rxe4 Qg5+ 29.Qg2.' },
        { move: '26.Rxe4', text: '26...Bxe4 27.Bxe4 Qg4+ 28.Kh1 Rxd4 29.Bh7+ ile denge (Motor: 0.0).' },
      ],
    },
    '26b': {
      text: '26...Rxe4: kale fili geri alır.',
      amac: 'Malzemeyi dengelemek ve kaleyi e4’te tutmak.',
      neden: 'Doğru geri alış (Motor: −0.4). 26...Bxe4? 27.Rxe4 Qg4+ 28.Qg2 ile Beyaz bir taş fazlasıyla kalır (Motor: +4.2), çünkü e-hattı Beyazın kontrolündedir.',
      diger: [
        { move: '26...Bxe4', text: '27.Rxe4 Qg4+ 28.Qg2 ile Beyaz kazanır (Motor: +4.2).' },
        { move: '26...Qg4+', text: '27.Qg2 Qxg2+ 28.Bxg2 Rxd4 ile Beyaz bir kale fazlası (Motor: +4.9).' },
      ],
    },
    '27w': {
      text: '27.Rxe4: Beyaz kaleyi alır; şimdilik bir kale fazlası var.',
      amac: 'Malzeme kazancını korumak.',
      neden: 'Zorunlu sayılır: 27.Qxe4? Bxe4 28.Rxe4 Qg4+ ile Siyah bir taş kazanır (Motor: −4.1). Oyun hamlesinde Beyaz malzemeyi geri vermek zorunda kalacak.',
      diger: [
        { move: '27.Qxe4', text: '27...Bxe4 28.Rxe4 Qg4+ ile Siyah taş fazlası (Motor: −4.1).' },
        { move: '27.Qc4+', text: '27...Kh7 28.Rxe4 Bxe4 ile Siyah üstün (Motor: −4.1).' },
      ],
    },
    '27b': {
      text: '27...Qg6+! Vezir şah çeker ve e4 kalesine ikinci kez saldırır.',
      amac: 'Beyaz şahını kaçmaya zorlamak; e4 kalesine (c6 fili ve g6 veziri) iki kez saldırmak ve d4 filini savunmasız bırakmak.',
      neden: 'Bu, Siyahın taktik fikridir: e4 kalesi hem d4 filini koruyor hem de g6-c2 çaprazını kapatıyor. Motor bunu en iyi görüyor (Motor: −0.5). 27...Qg4+ 28.Kf1 Qf3+ 29.Qf2 Bxe4 sadece eşitlik verir (Motor: 0.0).',
      diger: [
        { move: '27...Qg4+', text: '28.Kf1 Qf3+ 29.Qf2 Bxe4 ile denge (Motor: 0.0).' },
        { move: '27...Kh7', text: '28.Re7 Qxc2 29.Rxg7+ ile Beyaz kazanır (Motor: +3.1).' },
      ],
    },
    '28w': {
      text: '28.Kf2: şah f2’ye kaçar.',
      amac: 'Şahtan kurtulmak ve e3 karesini kontrol etmek.',
      neden: 'En iyi kaçış (Motor: −0.4). 28.Kf1 sonrası 28...Rxd4 29.Qxc6 Qxc6 30.Rxd4 ile Siyahın veziri birinci yatayda daha aktif olur (Motor: −1.0). 28.Qg2? Qxg2+ 29.Kxg2 Rxd4 ile Siyah bir kale fazlası (Motor: −3.1).',
      diger: [
        { move: '28.Kf1', text: '28...Rxd4 ile Siyah daha aktif (Motor: −1.0).' },
        { move: '28.Qg2', text: '28...Qxg2+ 29.Kxg2 Rxd4 ile Siyah kale fazlası (Motor: −3.1).' },
      ],
    },
    '28b': {
      text: '28...Rxd4! Kale d4 filini alır.',
      amac: 'Malzemeyi geri almak: 29.Rxd4? Qxc2+ ile Beyazın veziri düşer.',
      neden: 'e4 kalesi g6-c2 çaprazını kapatıyordu; d4’ü alması bu çaprazı açar: 29.Rxd4 Qxc2+ (Motor: −5.8). Diğer hamleler kaybeder: 28...Qf7? 29.Rg1 ile Beyaz bir kale fazlası (Motor: +4.1).',
      diger: [
        { move: '28...Qf7', text: '29.Rg1 ile Beyaz bir kale fazlasıyla kazanır (Motor: +4.1).' },
        { move: '28...Kh8', text: '29.Qd3 ile Beyaz kazanır (Motor: +4.1).' },
      ],
    },
    '29w': {
      text: '29.Qxc6: Beyazın en iyisi c6 filini almak.',
      amac: 'Malzeme kaybını sınırlamak: vezire karşı iki kale oyun sonuna geçmek.',
      neden: 'Zorunlu: 29.Rxd4? Qxc2+ veziri kaybeder; 29.Qb3+ Kh7 30.Qb6 Rxe4 ile Siyah kale fazlası (Motor: −5.0). Oyun hamlesiyle Beyaz kayıpsız kurtulur (Motor: −0.4).',
      diger: [
        { move: '29.Rxd4', text: '29...Qxc2+ ile Beyaz veziri kaybeder (Motor: −5.8).' },
        { move: '29.Qb3+', text: '29...Kh7 30.Qb6 Rxe4 ile Siyah kazanır (Motor: −5.0).' },
      ],
    },
    '29b': {
      text: '29...Qxc6: vezirler değişir.',
      amac: 'Vezirleri değişip d4 kalesini korumak.',
      neden: 'Motor 29...Rd2+’yı çok az daha iyi buluyor: 30.Ke3 Qxc6 31.Kxd2 Qd5+ 32.Ke3 Qb3+ ile Siyah b2’yi kazanır (Motor: −0.7). Oyun hamlesi de Siyaha küçük bir üstünlük bırakır (Motor: −0.5).',
      diger: [
        { move: '29...Rd2+', text: '30.Ke3 Qxc6 31.Kxd2 Qd5+ 32.Ke3 Qb3+ (Motor: −0.7).' },
        { move: '29...bxc6', text: '30.Rxd4 Qc2+ 31.Re2 ile denge (Motor: −0.2).' },
      ],
    },
    '30w': {
      text: '30.Rxd4: kale d4 kalesini alır. Vezire karşı iki kale: malzeme dengede.',
      amac: 'Malzemeyi dengelemek.',
      neden: 'Zorunlu geri alış; başka bir hamle bir kale kaybettirir (örneğin 30.f5? Qxe4 Motor: −5.7). Oyun sonunda Beyazın iki kalesi vezire denk, ama şahı açık.',
    },
    '30b': {
      text: '30...Qc5: vezir a5 piyonuna saldırır ve d4 kalesini bağlar.',
      amac: 'a5 piyonunu kazanmak ve d4 kalesine şah çekme tehdidiyle baskı yapmak.',
      neden: 'a5 piyonu ilerde ve sadece kaleyle korunabilir; aynı zamanda c5’ten vezir d4 kalesine ve şah kanadına bakar. Motor 30...Qc2+ ile önce şah çekmeyi de benzer görüyor (Motor: −0.4).',
      diger: [
        { move: '30...Qc2+', text: '31.Re2 Qc5 32.Rd2 Qxa5 (Motor: −0.4).' },
        { move: '30...Qc8', text: '31.b4 Qh3 ile şah kanadına baskı (Motor: −0.2).' },
      ],
    },
    '31w': {
      text: '31.Re4: kale e4’e gelir ve d4 kalesini korur.',
      amac: 'Kaleleri birbirine bağlamak ve vezirin şah çekip d4’ü almasını önlemek.',
      neden: 'Vezire karşı iki kale oyun sonunda kalelerin birbirini koruması temel kuraldır: korumasız bir kale, vezirin şah çekişlerinden birinde çatala düşer. d4 kalesi o anda c5 vezirinin hedefindeydi. Motor 31.Re8+ ile önce şah çekmeyi de benzer görüyor (Motor: −0.5).',
      diger: [
        { move: '31.Re8+', text: '31...Kh7 32.Re4 Qh5 (Motor: −0.5).' },
        { move: '31.Rd1', text: '31...Qxa5 32.h3 ile piyon kaybı (Motor: −0.5).' },
      ],
    },
    '31b': {
      text: '31...Qxa5: Siyah a5 piyonunu alır; vezir kanadında iki piyona karşı bir piyon.',
      amac: 'Piyon kazanmak ve vezir kanadında geçer piyon oluşturmak.',
      neden: 'a5 piyonu Beyazın 9.a5 ile ilerlettiği ve artık savunulamayan bir zayıflıktı. Siyah onu alarak vezir kanadında 2’ye 1 çoğunluk kurar; uzun vadede geçer piyon, iki kaleyi savunmaya bağlayacak en önemli koz olur. Motor 31...Qh5 ile h2’yi hedeflemeyi de benzer görüyor (Motor: −0.6): 32.Rb4 Qxh2+ 33.Kf3.',
      diger: [
        { move: '31...Qh5', text: '32.Rb4 Qxh2+ ile h2 piyonunu almak (Motor: −0.6).' },
        { move: '31...Qc2+', text: '32.Re2 Qc5 33.Rd2 Qxa5 (Motor: −0.5).' },
      ],
    },
    '32w': {
      text: '32.b4: piyon ilerler ve veziri kovalar.',
      amac: 'Veziri a5’ten uzaklaştırmak ve b-piyonunu kalelerle korumak.',
      neden: 'b2’deki piyon vezirin Qb2+ gibi manevralarına açıktı; b4’te ise dördüncü yataydaki kaleler tarafından korunabilir. Aynı zamanda tempo kazanır: vezir a5’ten çekilmek zorunda. Motor bunu en iyi görüyor (Motor: −0.4).',
      diger: [
        { move: '32.Kg3', text: '32...Qa1 33.Rd2 Qb1 (Motor: −0.6).' },
        { move: '32.Kg2', text: '32...Kh7 33.b4 Qa2+ (Motor: −0.6).' },
      ],
    },
    '32b': {
      text: '32...Qa3: vezir a3’ten b4 piyonuna baskı yapar.',
      amac: 'b4 piyonunu kazanmaya çalışmak ve vezirle b2/c3 karelerinden şah tehdidi yaratmak.',
      neden: 'Vezir a3’ten hem b4’e hem de üçüncü yatay boyunca Beyaz şaha (Qb2+, Qc3) bakar. Beyazın taşları dördüncü yatayda toplandığı için vezir onların arkasına sızmaya çalışır. Motor 32...Qc7 ve 32...Qh5’i de benzer görüyor (Motor: −0.4).',
      diger: [
        { move: '32...Qc7', text: '33.Re2 Qb6 34.Re4 a5 (Motor: −0.4).' },
        { move: '32...Qh5', text: '33.Kg3 Qg6+ 34.Kf2 (Motor: −0.4).' },
      ],
    },
    '33w': {
      text: '33.Kg2: şah g2’ye gelir.',
      amac: 'Şahı h2 piyonunun yakınına almak ve kaleleri serbest bırakmak.',
      neden: 'Şah f2’de vezirin şahlarına açıktı; g2’de h2 piyonunu korur ve f3/g3 karelerine çıkabilir. Bu tür oyun sonlarında şahın piyonlarının arkasında sağlam durması önemlidir. Motor 33.Rd7 ile b7’ye saldırmayı çok az daha iyi buluyor (Motor: −0.35).',
      diger: [
        { move: '33.Rd7', text: '33...Qb2+ 34.Kg3 Qb3+ ile şah çekişleri (Motor: −0.35).' },
        { move: '33.Rd8+', text: '33...Kh7 34.Rd7 (Motor: −0.5).' },
      ],
    },
    '33b': {
      text: '33...Qc3: vezir c3’te b4 piyonuna ve kalelere bakar.',
      amac: 'b4 piyonuna baskı ve kalelerin koordinasyonunu bozmak.',
      neden: 'c3’teki vezir b4 piyonunu tekrar sorgular ve Qc2+ ya da Qd2+ ile şah kanadına geçme imkânını saklar. Siyah acele etmez: bu oyun sonunda risk Beyazdadır, Siyah ise rakibe sürekli soru sorabilir. Motor 33...Qb2+ ile hemen şah çekmeyi biraz daha iyi buluyor (Motor: −0.4).',
      diger: [
        { move: '33...Qb2+', text: '34.Kg1 Qc1+ 35.Kg2 Qc2+ (Motor: −0.4).' },
        { move: '33...Qa2+', text: '34.Kg3 Qb1 (Motor: −0.4).' },
      ],
    },
    '34w': {
      text: '34.Rd8+: kale şah çeker.',
      amac: 'Şahı h7’ye sürmek ve d8’den b7’ye baskı yapmak.',
      neden: 'Şah çekmek tek başına bir şey kazanmaz; kale d8’de ilerde Rd7 ile b7’yi hedefleyebilir ama kaleler ayrılmış olur. Motor 34.f5’i biraz daha iyi buluyor (Motor: −0.2): 34...Qc2+ 35.Kg3 Qc1 36.Rf4 ile Beyaz f-piyonunu ilerletip kalelerini birbirine yakın tutar.',
      diger: [
        { move: '34.f5', text: '34...Qc2+ 35.Kg3 Qc1 36.Rf4 (Motor: −0.2).' },
        { move: '34.h3', text: '34...Qb2+ 35.Kg1 Qc1+ (Motor: −0.3).' },
      ],
    },
    '34b': {
      text: '34...Kh7: şah h7’ye gider.',
      amac: 'Şahtan kurtulmak ve birinci yataydan uzaklaşmak.',
      neden: 'Şah h7’de g-piyonunun arkasında güvenlidir ve kalelerin şahlarından uzaktır; f7 ise şahı e-hattındaki kaleye yaklaştırır. Motor h7’yi en iyi görüyor (Motor: −0.5); 34...Kf7 35.Rd7+ Kg6 de oynanabilirdi (Motor: −0.4).',
      diger: [
        { move: '34...Kf7', text: '35.Rd7+ Kg6 36.Ree7 b6 (Motor: −0.4).' },
      ],
    },
    '35w': {
      text: '35.Rdd4: kale d4’e döner; kaleler birbirini korur.',
      amac: 'Kaleleri birbirine bağlamak ve vezirin çatal fırsatlarını önlemek.',
      neden: 'd8’deki kale tek başına bir şey tehdit etmiyordu ve vezirin Qc2+ ya da Qd2+ şahlarında korumasız kalabilirdi. Rdd4 ile kaleler dördüncü yatayda yan yana durur ve b4’ü de korur. Motor 35.Rde8 ve 35.Rd7’yi de benzer görüyor (Motor: −0.5).',
      diger: [
        { move: '35.Rd7', text: '35...Qc2+ 36.Kf3 Qxh2 37.Rxb7 (Motor: −0.5).' },
        { move: '35.Rde8', text: '35...Qd2+ 36.Kg1 Qd1+ (Motor: −0.5).' },
      ],
    },
    '35b': {
      text: '35...b6: Siyah a- ve b-piyonlarını harekete geçirir.',
      amac: 'a5 ile b4 piyonunu değişip geçer piyon kazanmak.',
      neden: 'b7 piyonu yerinden kıpırdamazsa Siyahın fazla piyonu işe yaramaz; ...b6 ve ...a5 ile b4 piyonu değiştirilip a-hattında geçer piyon yaratılacak. Motor önce 35...Qc2+ ile şahı rahatsız etmeyi biraz daha iyi buluyor (Motor: −0.5 / oyun hamlesi −0.2).',
      diger: [
        { move: '35...Qc2+', text: '36.Kg3 Qc3+ 37.Kg2 Kg6 (Motor: −0.5).' },
        { move: '35...Kg6', text: '36.Rd7 Qc2+ 37.Kf3 b5 (Motor: −0.5).' },
      ],
    },
    '36w': {
      text: '36.f5: piyon ilerler ve g6 karesini kontrol eder.',
      amac: 'Siyahın şahını h7’de kapatmak ve f-piyonunu ilerletmek.',
      neden: 'f5 piyonu g6 karesini alarak Siyah şahının g6-f5 üzerinden oyuna girmesini engeller ve f6 ile g7’ye baskı tehdidi taşır. Pasif bekleme hamleleri (h3, h4) Siyah şaha ...Kg6 ile aktifleşme fırsatı verirdi. Motor bunu en iyi görüyor (Motor: −0.2).',
      diger: [
        { move: '36.h3', text: '36...Kg6 37.Re6+ Kf7 (Motor: −0.4).' },
        { move: '36.h4', text: '36...Kg6 37.Rd7 Kf5 (Motor: −0.5).' },
      ],
    },
    '36b': {
      text: '36...a5: b4 piyonu değişime zorlanır.',
      amac: 'a-hattında geçer piyon oluşturmak.',
      neden: 'Planın devamı: a5 b4 piyonuna saldırır ve değişim sonrası Siyahın a-hattında geçer piyonu olur. Bu geçer piyon Beyazın kalelerinden birini a-hattına bağlayacak ve kalelerin koordinasyonunu bozacaktır. Motor 36...Qb2+ ve 36...Qc6’yı da benzer görüyor (Motor: −0.2).',
      diger: [
        { move: '36...Qb2+', text: '37.Kg3 Qc1 38.Rf4 Qh1 (Motor: −0.2).' },
        { move: '36...Qc6', text: '37.Kf2 h5 38.Rf4 (Motor: −0.15).' },
      ],
    },
    '37w': {
      text: '37.bxa5: Beyaz değişir.',
      amac: 'b-piyonunu değişip Siyahın geçer piyonunu tek bırakmak.',
      neden: 'Motor bunu en iyi görüyor (Motor: −0.15). 37.Rf4? a4 ile Siyahın a-piyonu tehlikeli olur (Motor: −1.7).',
      diger: [
        { move: '37.f6', text: '37...a4 38.fxg7 h5 39.b5 (Motor: −0.4).' },
        { move: '37.Rf4', text: '37...a4 ile Siyahın piyonu hızla ilerler (Motor: −1.7).' },
      ],
    },
    '37b': {
      text: '37...bxa5: Siyah alır; a5’te geçer piyonu var.',
      amac: 'Geçer piyon oluşturmak.',
      neden: 'Doğal geri alış (Motor: −0.15). Şimdi a5 Siyahın tek ama tehlikeli kozu; Beyaz onu durdurmak için bir kalesini pasif bir göreve ayırmak zorunda kalacak. 37...Qc2+ ile önce şah çekmek de benzerdi.',
      diger: [
        { move: '37...Qc2+', text: '38.Kg3 bxa5 39.h4 Kg8 (Motor: −0.15).' },
      ],
    },
    '38w': {
      text: '38.Ra4: kale a4’ten a5 piyonunu durdurur.',
      amac: 'Geçer piyonu engellemek.',
      neden: 'Geçer piyonun önünü kesmek doğal bir refleks, ama a4’teki kale ileride diğer kale f-hattına geçip yatay değiştirince yalnız kalacak. Piyon henüz tehlikeli değildi; önce şah güvenliği ve f5 piyonu düzenlenebilirdi. Motor 38.h4’ü ve 38.Rf4’ü biraz daha iyi buluyor (Motor: −0.1).',
      diger: [
        { move: '38.h4', text: '38...Qc2+ 39.Kh3 Kg8 40.Rf4 (Motor: −0.1).' },
        { move: '38.Rf4', text: '38...Qc2+ 39.Kg1 Qb2 40.h4 (Motor: −0.1).' },
      ],
    },
    '38b': {
      text: '38...Qc5: vezir c5’e gelir ve kalelere bakar.',
      amac: 'Kalelere saldırmak ve f5 piyonunu hedeflemek.',
      neden: 'Vezir c5’ten beşinci yatay boyunca f5 piyonuna bakar ve c-hattı üzerinden şah kanadına geçmeye hazırdır; Beyaz f5’i korumak zorunda kalır. Motor 38...Qb2+ ile önce şah çekmeyi biraz daha iyi buluyor (Motor: −0.4 / oyun hamlesi −0.1).',
      diger: [
        { move: '38...Qb2+', text: '39.Kg3 Qc3+ 40.Kg2 Qd2+ (Motor: −0.4).' },
        { move: '38...Qd2+', text: '39.Kf3 Qd3+ 40.Kg2 Qd5 (Motor: −0.35).' },
      ],
    },
    '39w': {
      text: '39.Rf4: kale f4’te f5 piyonunu korur.',
      amac: 'f5 piyonunu korumak.',
      neden: 'f5 piyonu beşinci yatayda vezirin hedefindeydi. Rf4 onu korur ve kaleler a4 ile f4’te aynı yatayda kaldıkları için şimdilik birbirlerini korurlar. Bu bağın kopması ileride kaybın nedeni olacak. Motor bunu en iyi görüyor (Motor: −0.1); 39.h4 Qxf5 piyon kaybettirir (Motor: −0.3).',
      diger: [
        { move: '39.h4', text: '39...Qxf5 40.Rf4 Qg6+ (Motor: −0.3).' },
        { move: '39.Kg3', text: '39...Qxf5 40.h4 Qg6+ (Motor: −0.3).' },
      ],
    },
    '39b': {
      text: '39...Qd5+: vezir şah çeker.',
      amac: 'Şahı kovalamak ve kaleleri ayırmak.',
      neden: 'Siyahın kaybedecek bir şeyi yok: şah çekerek Beyazı sürekli doğru kareyi bulmaya zorlar. Pratik oyunda bu tür baskı çoğu zaman sonunda bir hataya yol açar. Motor 39...Qc2+ ve 39...Kg8’i de benzer görüyor (Motor: −0.1).',
      diger: [
        { move: '39...Qc2+', text: '40.Kg3 Qc1 41.Kg2 Qc6+ (Motor: −0.1).' },
        { move: '39...Kg8', text: '40.h4 Qc2+ 41.Kh3 Kf7 (Motor: −0.1).' },
      ],
    },
    '40w': {
      text: '40.Kg3: şah g3’e gider.',
      amac: 'Şahı f4 kalesinin yanına almak.',
      neden: 'Şah g3’te f4 kalesini korur ve h4 ile h-piyonunu ilerletme imkânı verir; birinci yatay ise vezir şahlarına açıktı. Motor 40.Rf3 ve 40.Kg1’i de eşit görüyor (Motor: −0.1).',
      diger: [
        { move: '40.Rf3', text: '40...Qd2+ 41.Kg3 Qd1 42.Re4 (Motor: −0.1).' },
        { move: '40.Kg1', text: '40...Qd1+ 41.Kg2 Qc2+ (Motor: −0.1).' },
      ],
    },
    '40b': {
      text: '40...Qd3+: vezir şah çekmeyi sürdürür.',
      amac: 'Şahı kovalamak ve kaleleri ayırmak.',
      neden: 'd3’ten şah çekmek Beyaz şahını tekrar g2’ye geri iter; Siyah, şahın hangi karede kalelerden uzak düşeceğini arıyor. Motor 40...Qh1 (h2’yi hedefleyerek) ve 40...Kg8 (şahı merkeze getirerek) seçeneklerini de benzer görüyor (Motor: −0.1).',
      diger: [
        { move: '40...Qh1', text: '41.Rae4 Qg1+ 42.Kh3 h5 (Motor: −0.1).' },
        { move: '40...Kg8', text: '41.h4 Qh1 42.Rae4 Kf7 (Motor: −0.1).' },
      ],
    },
    '41w': {
      text: '41.Kg2: şah g2’ye döner.',
      amac: 'Şahı birinci yataydan uzak tutmak ve h2 piyonunu korumak.',
      neden: 'Şah g2’de h2’yi korur ve birinci yataydaki şahlardan uzaktır. Motor 41.Rf3 ile kaleyi vezirin önüne koymayı çok az daha iyi buluyor (Motor: −0.06).',
      diger: [
        { move: '41.Rf3', text: '41...Qd1 42.Raf4 Qg1+ 43.Kh3 (Motor: −0.06).' },
        { move: '41.Kf2', text: '41...Qh3 42.Kg1 Qe3+ (Motor: −0.1).' },
      ],
    },
    '41b': {
      text: '41...Qe3: vezir e3’ten f4 kalesine baskı yapar.',
      amac: 'f4 kalesine baskı yapmak ve kaleleri ayırmak.',
      neden: 'e3’ten vezir f4 kalesine saldırır; kale a4 kalesi tarafından korunsa da Beyaz bir karar vermek zorundadır. Kale yatay değiştirirse kaleler arasındaki bağ kopar. Motor 41...Qc2+ ve 41...Qd2+’yı da benzer görüyor (Motor: −0.1).',
      diger: [
        { move: '41...Qc2+', text: '42.Kg3 Qc5 43.Kg2 Qc6+ (Motor: −0.1).' },
        { move: '41...Qd2+', text: '42.Rf2 Qg5+ 43.Kh3 Qe3+ (Motor: −0.1).' },
      ],
    },
    '42w': {
      text: '42.Rf2: kale f2’ye çekilir.',
      amac: 'Kaleyi saldırıdan kurtarmak ve h2’yi korumak.',
      neden: 'Kale f2’de h2’yi ve ikinci yatayı korur, ama artık a4 kalesiyle aynı yatayda değildir: a4 kalesi yalnız kalmıştır. Pozisyon hâlâ eşittir, fakat Beyaz bundan sonra şahını dikkatle yerleştirmek zorundadır. Motor 42.Rf3 ile kaleyi üçüncü yatayda tutmayı çok az daha iyi buluyor (Motor: −0.05).',
      diger: [
        { move: '42.Rf3', text: '42...Qd2+ 43.Rf2 Qg5+ 44.Kh3 (Motor: −0.05).' },
        { move: '42.h3', text: '42...Qc3 43.Ra2 Qc6+ 44.Rf3 (Motor: −0.1).' },
      ],
    },
    '42b': {
      text: '42...Qg5+: vezir şah çeker.',
      amac: 'Şahı kovalamak ve hata yaptırmak.',
      neden: 'Şah çekiş, Beyazı şahını nereye koyacağına karar vermeye zorlar: h3 güvenli, f1 ve h1 ise c1 şahına açıktır. Rublevsky rakibine son bir soru sorar ve Ivanchuk yanlış cevap verir. Motor 42...Qc5 ve 42...Qc3’ü de benzer görüyor (Motor: −0.1).',
      diger: [
        { move: '42...Qc5', text: '43.Rff4 Qc6+ 44.Kg3 Qc1 (Motor: −0.1).' },
        { move: '42...Qc3', text: '43.Raf4 Qf6 44.R2f3 Kg8 (Motor: −0.1).' },
      ],
    },
    '43w': {
      text: '43.Kf1?? Kesin hata: şah birinci yataya iner ve a4 kalesi korumasız kalır.',
      amac: 'Şahı g-hattından kaçırmak.',
      neden: 'Motor 43.Kh3’ü öneriyor (Motor: −0.1): 43...Qe3+ 44.Kg2 Qc5 45.Raf4. 43.Kf3 bile f5 piyonunu verir ama kaleyi korur (Motor: −1.0). 43.Kf1 ve 43.Kh1 ise 43...Qc1+ ile kale kaybettirir (Motor: −5.6).',
      diger: [
        { move: '43.Kh3', text: '43...Qe3+ 44.Kg2 Qc5 45.Raf4 ile denge (Motor: −0.1).' },
        { move: '43.Kf3', text: '43...Qxf5+ 44.Kg2 Qg5+ 45.Kh3 Qd5 ile Siyah bir piyon fazlası (Motor: −1.0).' },
      ],
    },
    '43b': {
      text: '43...Qc1+! Vezir şah çeker ve a4 kalesine çatal hazırlar.',
      amac: 'Şah çekerek korumasız a4 kalesini kazanmak.',
      neden: '44.Kg2 Qc6+ (c6-a4 çaprazı) ya da 44.Ke2 Qc2+ (c2-a4 çaprazı) ile vezir şah çekerken a4 kalesini alır (Motor: −5.8). Ivanchuk terk etti.',
      diger: [
        { move: '43...Qd8', text: '44.Kg2 Qg5+ ile tekrar (Motor: −0.1).' },
      ],
    },
  },
  qa: [
    { q: 'Siyah neden 12...d5 oynadı?', a: 'Beyaz g4 ve f4 ile şah kanadında saldırıya hazırlanıyordu; g5 gelirse f6 atı kovulacaktı. Siyah merkezi açarak Beyazın ilerlemiş piyonlarını zayıflığa çevirmek istedi. Ancak motor bu anda 13.e5!’in Beyaza belirgin bir üstünlük vereceğini gösteriyor (Motor: +1.0); 12...Nh7 daha sağlamdı (Motor: +0.3).' },
    { q: 'Beyaz 13.e5 oynasaydı ne olurdu?', a: '13.e5 Ne4 14.Nxe4 dxe4 15.Qe1 sonrası merkez kapanır. Siyahın e4 piyonu zayıftır ve Beyaz f5 ve g5 ile saldırısını sürdürür (Motor: +1.0). Oyunda 13.exd5 ile merkez açıldı ve Beyazın piyonları saldırı silahı olmaktan çıktı.' },
    { q: 'Siyahın e4 atı neden bu kadar güçlüydü?', a: 'Beyazın f- ve g-piyonları ilerlediği için e4 atı piyonla kovalanamazdı; ancak Bxe4 ile değişilebilirdi. 20...f5 ile piyon desteği alınca at kalıcı bir merkez taşı oldu. Beyaz 26.Bxe4 ile atı değişince d4 fili korumasız kaldı.' },
    { q: '26.Bxe4 neden hataydı?', a: 'Beyaz e4 atını alınca, 26...Rxe4 27.Rxe4 Qg6+ ile Siyah e4 kalesine iki kez (c6 fili ve g6 veziri) saldırır. e4 kalesi aynı zamanda d4 filini korur ve g6-c2 çaprazını kapatır; bu yüzden 28...Rxd4! cezasız kaldı. 26.Bc3 ile denge korunurdu (Motor: 0.0).' },
    { q: '28...Rxd4’ten sonra Beyaz neden 29.Rxd4 oynayamadı?', a: 'e4 kalesi g6-c2 çaprazını kapatıyordu. 29.Rxd4? sonrası çapraz açılır ve 29...Qxc2+ ile Beyazın veziri düşer (Motor: −5.8). Bu yüzden Beyaz 29.Qxc6 ile vezirleri değişmek zorunda kaldı.' },
    { q: 'Vezire karşı iki kale oyun sonu kimin lehineydi?', a: 'Motor oyun sonunu uzun süre dengede görüyor (Motor: −0.1 ile −0.5 arası). Siyahın veziri, Beyazın açık şahına şah çekerek baskı yapabiliyordu; Beyazın kaleleri ise birbirini koruduğu sürece güvendeydi. Siyahın a-piyonu geçer piyon olunca Beyaz kalesini a4’e göndermek zorunda kaldı ve kaleler ayrıldı.' },
    { q: '43.Kf1 neden kaybetti?', a: 'Şah birinci yataya inince 43...Qc1+ şah çeker; 44.Kg2 Qc6+ ya da 44.Ke2 Qc2+ ile vezir şah çekerken a4 kalesini alır (Motor: −5.6). 43.Kh3 ile Beyaz eşitliği korurdu (Motor: −0.1).' },
    { q: 'Siyahın kazanmasının asıl nedeni ne?', a: 'Rublevsky, Beyazın şah kanadı saldırısına merkezden cevap verdi ve oyunu açık, taş aktifliğine dayalı bir oyuna çevirdi. e4 atı ve e-hattı baskısı Beyazı zor kararlara zorladı; 26.Bxe4? ve 43.Kf1?? hatalarını cezalandırdı. Vezire karşı kale oyun sonunda sabırla şah çekip kalelerin ayrılmasını bekledi.' },
  ],
  sources: [
    { title: '365Chess: 16th European Club Cup 2000 (Neum) oyun listesi', url: 'https://www.365chess.com/tournaments/EUCup_16th_2000/6485' },
    { title: 'OlimpBase: 16th European Chess Club Cup, Neum 2000 – Polonia Warsaw', url: 'https://olimpbase.org/2000c/2000polw.html' },
    { title: 'Wikipedia: Sicilian Defence, Scheveningen Variation', url: 'https://en.wikipedia.org/wiki/Sicilian_Defence,_Scheveningen_Variation' },
    { title: 'chess.com: The Paulsen Sicilian – A History', url: 'https://www.chess.com/article/view/the-history-of-the-sicilian-paulsen' },
    { title: 'chess.com: The Paulsen Sicilian – A History, Part 2', url: 'https://www.chess.com/article/view/the-paulsen-sicilian-a-history-part-2' },
    { title: 'Wikipedia: Sergei Rublevsky', url: 'https://en.wikipedia.org/wiki/Sergei_Rublevsky' },
  ],
  exercises: [
    { id: 'iru-1', kind: 'tekrar', plan: false, title: 'Çaprazı kapatan kale',
      source: 'Ivanchuk – Rublevsky, Neum 2000 (28. hamle)',
      fen: '3r2k1/1p4p1/p1b3qp/P7/3BRP2/8/1PQ2K1P/4R3 b - - 2 28',
      prompt: 'Siyah 27...Qg6+ ile şah çekti ve şah f2’ye kaçtı. Beyazın e4 kalesi hem c6 filinin hem g6 vezirinin saldırısı altında. Siyah malzemeyi nasıl geri alır?',
      hint: 'd4 filini kim koruyor? O taş yerinden oynarsa c2’deki vezire ne olur?',
      line: ['Rxd4'],
      explanation: '**28...Rxd4!** Kale d4 filini alır. 29.Rxd4? Qxc2+ ile Beyaz veziri kaybeder, çünkü e4 kalesi g6-c2 çaprazını kapatıyordu. Oyunda 29.Qxc6 Qxc6 30.Rxd4 ile vezire karşı iki kale oyun sonu çıktı. Motor: ...Rxd4 −0.6, sonraki en iyi hamle +4.8.',
      link: 'Siyahın merkezdeki baskısı (e4 atı, e-hattı) 26.Bxe4 sonrası bir taktiğe dönüştü.' },
    { id: 'iru-2', kind: 'tekrar', plan: false, title: 'Korumasız kale',
      source: 'Ivanchuk – Rublevsky, Neum 2000 (43. hamle)',
      fen: '8/6pk/7p/p4Pq1/R7/8/5R1P/5K2 b - - 11 43',
      prompt: 'Vezire karşı iki kale oyun sonu. Beyaz şahı f1’e gitti. Beyazın kaleleri birbirini koruyor mu?',
      hint: 'Vezir şah çekerken aynı anda a4 kalesine de saldırabilir mi?',
      line: ['Qc1+'],
      explanation: '**43...Qc1+!** 44.Kg2 Qc6+ ya da 44.Ke2 Qc2+ ve vezir şah çekerken a4 kalesini alır. Motor: ...Qc1+ −6.5, sonraki en iyi hamle −0.1.',
      link: 'Vezire karşı kalelerle oynayan taraf kalelerini birbirine bağlı tutmalı; a4 kalesi korumasız kalınca çatal geldi.' },
    { id: 'iru-3', kind: 'transfer', plan: false, title: 'g4-h4 saldırısına ...d5',
      source: 'Kavalek – Larsen, Lugano turnuvası 1970 (10. hamle)',
      fen: 'r1b1kb1r/ppq2pp1/2nppn1p/8/4P1PP/1NN5/PPP1BP2/R1BQK1R1 b Qkq - 0 10',
      prompt: 'Scheveningen yapısında Beyaz g4, h4 ve Rg1 ile şah kanadında saldırıya geçti; g5 tehdit ediliyor. Siyah henüz rok yapmadı. Siyah nasıl karşılık verir?',
      hint: 'Kanattan gelen saldırıya en iyi cevap merkezdedir.',
      line: ['d5'],
      explanation: '**10...d5!** Siyah merkezi açar; 11.exd5 sonrası taşlar değişir ve Beyazın g4-h4 saldırısı hedefsiz kalır. Pasif hamleler g5 ile Beyaza inisiyatif verir. Motor: ...d5 0.0, sonraki en iyi 10...a6 +0.9.',
      link: 'Rublevsky de 11.g4 ve 12.f4 saldırısına 12...d5 ile merkezden cevap verdi.' },
    { id: 'iru-4', kind: 'transfer', plan: false, title: 'Vezir çatalı',
      source: 'Leko – A. Sokolov, Pamplona turnuvası 1993 (50. hamle)',
      fen: '8/5R2/p6p/1p4k1/6P1/1PP1R2P/P5q1/K7 b - - 0 50',
      prompt: 'Vezire karşı iki kale. Beyazın şahı a1 köşesinde. Siyahın şahı da tehlikede görünüyor. Hamle Siyahta.',
      hint: 'Beyazın kalelerinden biri korumasız. Şah çekerek ona ulaşabilir misiniz?',
      line: ['Qg1+', 'Kb2', 'Qxe3'],
      explanation: '**50...Qg1+! 51.Kb2 Qxe3** ve vezir şah çekerek e3 kalesini alır. Motor: ...Qg1+ −4.1, sonraki en iyi hamle 0.0.',
      link: 'Rublevsky’nin 43...Qc1+ çatalıyla aynı fikir: vezir, birbirini korumayan kalelerden birini şah çekerek alır.' },
  ],
};
