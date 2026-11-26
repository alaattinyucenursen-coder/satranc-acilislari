// Portisch – Petrosyan, Moskova turnuvası, Moskova 1967. Kaynak: PgnMentor (Portisch.pgn).
export default {
  id: 'portisch-petrosian-1967',
  theme: 'e5 kaması ve şah kanadında taş saldırısı',
  white: 'Lajos Portisch', black: 'Tigran Petrosyan',
  whiteShort: 'Portisch', blackShort: 'Petrosyan',
  event: 'Moskova turnuvası', site: 'Moskova', year: 1967, eco: 'D13',
  variation: 'Slav Savunması, Değişim varyantı (3.cxd5 cxd5), 6.Bf4', result: '1-0',
  pgn: `1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 e6 7. e3 Bd6 8. Bg3 O-O 9. Bd3 Re8 10. Ne5 Bxe5 11. dxe5 Nd7 12. f4 Qb6 13. O-O Qxe3+ 14. Kh1 Qb6 15. Qh5 Nf8 16. Rf3 Ng6 17. Bf2 Qd8 18. Nb5 Nce7 19. Nd6 Bd7 20. Bh4 Qb6 21. Rh3 h6 22. Bf6 Qxb2 23. Rf1 Nf5 24. Bxf5 1-0`,

  summary: 'Güçlü Moskova 1967 turnuvasında **Beyaz (Portisch) kazandı** ve dönemin dünya şampiyonu Petrosyan yalnızca 24 hamlede terk etti. Simetrik ve “berabere kokan” Değişim Slavında Petrosyan 6...Bf5 yerine 6...e6 ile c8 filini piyon zincirinin arkasına kapattı. 9...Re8’den sonra Portisch **10.Ne5!** ile atını merkeze oturttu; 10...Bxe5 11.dxe5 sonrası e5’te bir **piyon kaması** doğdu ve 12.f4 bu kamayı sağlamlaştırdı. f6 karesini kaybeden Siyah, şah kanadının en iyi savunucusu olan atı oradan sonsuza dek uzak kalmış oldu. Petrosyan 12...Qb6 ile e3 ve b2’ye baskı kurup **13...Qxe3+** ile bir piyon aldı (Motor: +1.6; 13...Nc5 ile yalnızca +0.7–1.0). Vezir şahından uzaklaşınca Portisch 14.Kh1 ile şahını güvenceye aldı ve taşlarını tek tek şah kanadına yığdı: Qh5, Rf3-h3, Bf2-h4-f6 ve at b5 üzerinden d6’ya. 19...Bd7?’den sonra (Motor: +3.4) **20.Bh4!** şahın savunucusu e7 atına saldırdı; e8 kalesini almakla zaman kaybetmedi. **22.Bf6!** alınamaz bir fildi: 22...gxf6 23.Qxh6 dört hamlede mat ediyordu. Petrosyan’ın 22...Qxb2 ile açtığı karşı oyun 23.Rf1! ile söndü; 24.Bxf5 sonrası g7’nin düşmesi kaçınılmazdı ve Siyah terk etti.',
  intro: '**Slav Savunmasında** (1.d4 d5 2.c4 c6) Siyah d5’i bir piyonla destekler ve Vezir Gambiti Kabul Edilmeyen’den farklı olarak c8 filinin önünü e6 ile kapatmak zorunda kalmaz; Slavın bütün felsefesi bu filin f5 ya da g4’e çıkabilmesidir. **3.cxd5 cxd5 Değişim varyantında** yapı tamamen simetrik olur ve tek açık hat c-hattıdır. Wikipedia bu kolu Siyah için “Slavın keyfini kaçıran sistem” olarak anar: Beyazın elinde yalnızca bir tempo vardır, oyun çoğu zaman beraberliğe kayar ve Siyahın kazanma şansı azdır. 4.Nc3 Nf6 5.Nf3 Nc6 6.Bf4 sonrası ana yol **6...Bf5** ile tam simetridir (7.e3 e6 8.Qb3 ya da 8.Bb5 gibi devamlar). Petrosyan ise eski ama sağlam **6...e6** kurulumunu seçti; böylece c8 fili içeride kaldı ve Siyah pasif ama sağlam bir yapıyla oyuna girdi. 1967 tarihli bir Spectator satranç köşesi (Philidor imzalı) burada 6...Bf5’in “daha basit eşitleyici yol” olduğunu, Portisch’e daha önce birkaç kez ağır yenilen Petrosyan’ın belki beraberliğe razı olmak istemediğini, ama “dengeyi düzeltmek için yanlış anı seçtiğini” yazar. Petrosyan’ın kendisi de Portisch’i en zor rakiplerinden biri olarak anmıştır. Oyunun öğrettiği asıl şey şudur: Değişim Slavının simetrisi, Ne5–dxe5–f4 gibi tek bir yapı değişikliğiyle bozulabilir ve sakin görünen bir açılıştan doğrudan şah saldırısı doğabilir.',
  plans: {
    white: { title: 'Beyazın planı', points: [
      'Kara kareli fili 6.Bf4 ile e3’ten önce dışarı çıkarmak ve 8.Bg3 ile ...Bd6 değişim teklifini reddetmek: fil b8-h2 köşegeninde kalarak e5 karesini kontrol eder.',
      '**10.Ne5** ile atı merkeze oturtmak. Siyah atı alırsa 11.dxe5 ile e5’te f6 atını kovalayan bir piyon kaması kurmak; bu, simetrik yapıyı Beyaz lehine bozan anahtar değişikliktir.',
      '**12.f4** ile kamayı desteklemek: Siyahın atları artık f6’ya dönemez, f-hattı ileride Beyazın kalesi için açılır ve Beyaz şah kanadında alan kazanır.',
      'Gelişim üstünlüğü uğruna e3 piyonunu vermek (13.O-O!), sonra 14.Kh1 ile şahı şah çekmelerden kurtarıp saldırıya zaman ayırmak.',
      'Taşları şah kanadına yığmak: vezir h5’e, kale üçüncü yatay üzerinden f3’ten h3’e, at b5 üzerinden **d6 karesine**, fil f2-h4 üzerinden **f6’ya**.',
      'Savunucuları teker teker hedef almak: 20.Bh4 ile e7 atına saldırmak, 24.Bxf5 ile f5 atını ortadan kaldırmak; materyal (20.Nxe8) yerine şaha odaklanmak.',
      'Rakibin karşı oyununu (…Qxb2, ...Rc8–c1) kale değişimine izin vermeyecek biçimde karşılamak: 23.Rf1 ile kaleyi hem kurtarmak hem saldırıda tutmak.',
    ] },
    black: { title: 'Siyahın planı', points: [
      'Simetrik yapıda sağlam kalmak, c-hattında ve ...Bd6 ile kara kareli fil değişiminde eşitlik aramak.',
      '...Re8 ve ...e5 kırılmasıyla merkezi açmak; ancak 9...Re8 ağır bir hazırlıktı ve 10.Ne5’e karşı yeterli değildi (Motor: +0.8).',
      'e5 kaması kurulunca ...Nd7 ve ...Qb6 ile e3 ve b2 piyonlarına baskı yapmak, kamayı ...Nc5 ya da ...f6 ile sorgulamak.',
      'Daha sağlıklı yol: 12...Nc5 ya da 13...Nc5 ile atı d3 filine karşı kullanıp beyaz kareli Beyaz filini değişmek (Motor: yaklaşık +0.6–1.0).',
      'Atları f8 ve g6 üzerinden şahın yanına getirip h7 ve g7’yi savunmak. Ama vezir piyon toplamak için e3’e ve b2’ye gidince şah kanadı yalnız kaldı.',
      'Geç aşamada ...Qxb2 ile a1 kalesine ve ilk yataya karşı saldırı arayıp ...Rc8–c1 ile kale değişimi sağlamak; Portisch 23.Rf1 ile buna izin vermedi.',
    ] },
  },
  critical: [
    { move: '10w', title: 'Ne5!: simetri bozuluyor', text: 'At e5’e yerleşir ve ...e5 kırılmasını engeller. Siyah atı kendi yerinde bırakırsa at hem c6’ya baskı yapar hem de f4 ile desteklenip uzun süre orada kalır; 10...Bxe5 ile alırsa 11.dxe5 sonrası e5’te bir piyon kaması doğar ve f6 atı kovalanır. Motor: +0.6; ama asıl değeri, oyunun karakterini simetrik bir manevra oyunundan şah kanadı saldırısına çevirmesidir.' },
    { move: '12w', title: 'f4: kama sağlamlaşıyor', text: 'f4 piyonu e5’i destekler. Bundan sonra Siyahın atları f6’ya dönemez; şah kanadının en doğal savunucusu kalıcı olarak oyundan çıkar. Ayrıca f-hattı ve üçüncü yatay Beyazın kalesi için hazırlanır (ileride Rf3-h3). Motor: +0.8. 12.O-O ise 12...Ndxe5 13.Bxe5 Nxe5 14.Bxh7+ ile denge civarında (+0.3) kalırdı.' },
    { move: '13b', title: '...Qxe3+: zehirli piyon', text: 'Petrosyan e3 piyonunu şah çekerek alır, ama bu piyon zehirlidir. Vezir şahından uzaklaşır, Beyaz ise 14.Kh1 sonrası açık f-hattı ve e3 filinin kalktığı karelerle saldırıya geçer. Motor: 13...Qxe3+ +1.6; daha iyisi 13...Nc5 (+0.7–1.0) ile d3 filine saldırıp onu değiştirmekti. Spectator köşesi, Siyahın 9...Re8’i oynarken Beyazın 13. hamlesini gözden kaçırmış olabileceğini yazar.' },
    { move: '14w', title: 'Kh1: tek doğru hamle', text: 'Şah çekmeye karşı üç cevap vardı ve yalnızca 14.Kh1 iyiydi. 14.Bf2? Qxf4 Siyaha iki piyon ve iyi oyun verir (Motor: −1.6); 14.Rf2 Nc5 ise dengeye yakın (−0.3 ile +0.1 arası). Kh1’den sonra şah güvende, f-hattı Beyazın, vezir ise e3’te tehdit altında: Siyah bir tempo daha kaybedecek (Motor: +1.3–1.5).' },
    { move: '19b', title: '...Bd7? saldırıya zaman vermek', text: 'd6 atı e8 kalesine ve f7’ye saldırıyor. Petrosyan 19...Bd7 ile gelişip kaleyi feda etmeyi kabul eder, ama bu Beyaza 20.Bh4 için zaman verir. Motor: 19...Bd7 +3.4; daha dirençli 19...Rf8 (+2.3). Spectator köşesi 19...Rf8’e karşı 20.Rh3 h6 21.Bh4 ve Bf6 ile “hızla ölümcül” bir saldırı öngörür; motor bu hat için daha temkinli (21...Nxh4 ile yaklaşık +1.0), ama Beyazın yine de açık üstün olduğunu onaylar.' },
    { move: '20w', title: 'Bh4!: kale yerine şah', text: 'Portisch e8 kalesini almaz; fil h4’ten e7 atına, yani şahın savunucusuna saldırır. 20.Nxe8 Qxe8 ile Beyaz materyal kazanırdı ama saldırı dağılırdı (Motor: yaklaşık +1.8). 20.Bh4 sonrası değerlendirme +4.5’e çıkar: e7 atı giderse Bf6 ve Qxh7 tehditleri durdurulamaz, at kalırsa fil f6’ya gelir.' },
    { move: '22w', title: 'Bf6!: alınamayan fil', text: 'Fil f6’ya gelir ve g7’ye baskı yapar. 22...gxf6 alırsa 23.Qxh6 Qxd6 24.Bxg6 Nxg6 25.exf6 ve 26.Qg7# – motor dört hamlede mat görüyor. Fil alınamadığı için f6’da kalıcı bir silah olur: Bxg7, Nxf7 ve Qxh6 tehditleri her hamle yeniden doğar. Motor: +4.6.' },
    { move: '23w', title: 'Rf1!: kale hem kurtuluyor hem saldırıyor', text: '22...Qxb2 a1 kalesine saldırdı. Kalenin nereye gideceği oyunu belirledi: 23.Rb1? Rec8 ile Siyah ...Rc1’i tehdit eder ve denge geri gelir (Motor: yaklaşık 0.0); Spectator köşesi de Petrosyan’ın tam olarak 23.Rb1 Rec8’i umduğunu yazar. 23.Rd1 de ...Rc1 yüzünden yalnızca +0.9’dur. 23.Rf1 (Motor: +4.8) ya da 23.Rg1 (+5.1) ise kaleyi hem güvene alır hem de f4’ü ve şah kanadını destekler.' },
  ],
  lessons: [
    'Değişim Slavının simetrik yapısı “ölü” değildir: **Ne5** ve dxe5 ile yapı değişir; e5 kaması f6 karesini Siyahın atlarına kapatır ve oyun şah kanadı saldırısına döner.',
    'Bir piyon kamasını (e5) bir arka piyonla (f4) desteklemek, kamayı hem sağlamlaştırır hem de f-hattını ve üçüncü yatayı kalelere açar: Rf3-h3 geçişi bu yapının tipik saldırı yoludur.',
    'Şahın savunması zayıfken uzaktaki bir piyonu almak tehlikelidir: 13...Qxe3+ ve 22...Qxb2 vezire iki uzun yolculuk yaptırdı, Beyaz her seferinde şah kanadında bir taş daha topladı.',
    'Şah çekmeye karşı hangi kareye gidileceği hesaplanmalıdır: 14.Kh1 tek iyi hamleydi; 14.Bf2? Qxf4 ya da 14.Rf2 Nc5 avantajı tamamen dağıtırdı.',
    'Saldırıda taşlar birlikte çalışmalı: vezir h5’te, kale h3’te, at d6’da, fil f6’da – her biri şahın etrafındaki farklı bir kareye (h6, h7, f7, g7) baskı yapıyor.',
    'Rakibin kalesini almak cazip olsa da şaha saldırı daha güçlü olabilir: 20.Nxe8 yaklaşık +1.8, 20.Bh4 ise +4.5. Önce savunucuları ortadan kaldırın.',
    'Karşı saldırıya cevap verirken taşınızı saldırıdan koparmayın: 23.Rf1 kaleyi kurtardı ama şah kanadında tuttu; 23.Rb1? ise Siyaha ...Rc1 ile kurtuluş verirdi.',
  ],
  qa: [
    { q: 'Petrosyan neden 6...Bf5 yerine 6...e6 oynadı ve bu ne değiştirdi?', a: '6...Bf5 ile Siyah c8 filini piyon zincirinin dışına çıkarır ve tam simetrik, eşitliğe çok yakın bir pozisyon elde ederdi (Motor: +0.2). 6...e6 da sağlam bir hamledir (+0.4), ama c8 filini içeride bırakır ve Siyaha merkezi ...e5 ile açma yükümlülüğü getirir. 1967 tarihli Spectator köşesi, Portisch’e daha önce birkaç kez yenilen Petrosyan’ın belki beraberliğe razı olmamak için bu daha karmaşık yolu seçtiğini tahmin eder. Sonuçta d7’de kalan fil, oyunun sonuna kadar pasif bir izleyici oldu.' },
    { q: 'Beyaz neden 8.Bxd6 yerine 8.Bg3 oynadı?', a: '8.Bxd6 Qxd6 ile kara kareli filler değişir ve Siyahın sorunu, yani e5 karesinin kontrolü, çözülür (Motor: +0.2). 8.Bg3 ile fil b8-h2 köşegeninde kalır, e5’i kontrol etmeyi sürdürür ve ileride Ne5 ile birlikte merkezi tutar. Siyah 8...Bxg3 hxg3 ile alsa bile Beyazın h-hattı açılırdı. Bu fil daha sonra f2, h4 ve f6 üzerinden saldırının yıldızı oldu.' },
    { q: '10.Ne5’ten sonra Siyah neden atı aldı?', a: 'At e5’te çok güçlüydü: c6’ya baskı yapıyor, ...e5 kırılmasını engelliyor ve f4 ile desteklenmeye hazır duruyordu. 10...Be7 (+0.6) ya da 10...Bb4 (+0.7) gibi alternatifler atı yerinde bırakıp Siyahı pasif bırakırdı. 10...Bxe5 objektif olarak en iyi hamleydi (+0.5), ama 11.dxe5 ile e5 kamasının doğmasına razı olmak demekti. Asıl hata daha önce, 9...Re8’deydi: motor 9...Bxg3 hxg3 ile neredeyse tam eşitlik (+0.3) görüyor.' },
    { q: 'e5 kaması neden bu kadar önemliydi?', a: 'e5 piyonu f6 ve d6 karelerini kontrol eder. f6’dan kovalanan at d7’ye çekildi ve 12.f4’ten sonra bir daha f6’ya dönemedi; f6 karesi şah kanadının en iyi savunma karesidir. Aynı zamanda e5 piyonu d6’ya gelecek Beyaz atını ve f6’ya gelecek Beyaz filini destekledi. Kısacası kama, Siyahın savunmasını zayıflatırken Beyazın saldırı taşlarına sağlam ileri kareler verdi.' },
    { q: 'Siyah neden 13...Qxe3+ ile piyonu aldı ve neden bu yanlıştı?', a: 'Piyon bedavaya görünüyordu ve şah çekerek alınıyordu. Ama vezir şahından uzaklaştı ve 14.Kh1 sonrası tempo kaybederek 14...Qb6 ile geri dönmek zorunda kaldı. Bu arada Beyaz 15.Qh5 ve 16.Rf3 ile taşlarını saldırıya soktu. Motor 13...Qxe3+ için +1.6, 13...Nc5 için +0.7–1.0 veriyor: at d3 filine saldırıp onu değişecek, Beyazın saldırı potansiyelini azaltacaktı.' },
    { q: 'Portisch 20. hamlede neden e8 kalesini almadı?', a: '20.Nxe8 Qxe8 ile Beyaz kaleye karşı at kazanırdı, ama saldırının en iyi taşı olan d6 atı oyundan çıkar ve Siyah nefes alırdı (Motor: yaklaşık +1.8). 20.Bh4 ise e7 atına, yani g6 atıyla birlikte şahı koruyan taşa saldırdı ve Bf6 ile Rh3’ü hazırladı (Motor: +4.5). d6 atı zaten kaçmıyordu; kale alma fırsatı sonra da duruyordu. Saldırıda materyal değil, savunucuların sayısı önemlidir.' },
    { q: '22.Bf6’dan sonra Siyah neden fili alamadı?', a: '22...gxf6 23.Qxh6 ile vezir h-hattından g7’ye ve h7’ye inmekle tehdit eder. Motor bunu dört hamlede mat görüyor: 23...Qxd6 24.Bxg6 Nxg6 25.exf6 ve Qg7#. Yani fil f6’da “zehirli” durur: alınamaz ama her hamle Bxg7 ya da Nxf7 gibi tehditler üretir.' },
    { q: 'Siyah nerede kurtulabilirdi?', a: 'En açık iki an 9. ve 13. hamlelerdir. 9...Bxg3 hxg3 (+0.3) ya da 13...Nc5 (+0.7–1.0) ile Siyah oyunda kalırdı. 13...Qxe3+’ten sonra bile 14...a6 (+1.3) ya da 15...g6 (+1.3) ile direnç sürebilirdi. 18...Nce7 (+3.5) ve 19...Bd7 (+3.4) hamleleriyle ise avantaj kazanılmış seviyeye çıktı; 18...Rf8 ve 19...Rf8 (her ikisi de yaklaşık +2.3) daha dayanıklıydı.' },
    { q: 'Petrosyan neden 24. hamleden sonra terk etti?', a: '24.Bxf5’ten sonra 24...exf5 25.Bxg7 g7’yi düşürür ve Qxh6 ile mat tehdidi doğar (Motor: yaklaşık +7.5). 24...Bb5 25.Bxg6 ise Bxf7+ ile şahı açar (+7.5). Beyazın tüm taşları şahın etrafındaydı, Siyahın veziri ise b2’de oyunun dışındaydı; Siyahın ne savunması ne de yeterli karşı oyunu kalmıştı.' },
  ],
  notes: {
    '1w': {
      text: 'Beyaz vezir piyonuyla açar ve merkezde e5 ile c5 karelerini kontrol eder.',
      amac: 'Merkeze bir piyon yerleştirip c4 ile Vezir Gambiti yapılarına yönelmek.',
      neden: 'Portisch kariyeri boyunca 1.d4’le derin pozisyonel oyunlar oynamayı severdi. d4 piyonu e4’ün aksine vezir tarafından korunur, bu da daha sağlam ve stratejik bir oyuna yol açar.',
      diger: [
        { move: '1.e4', text: 'Açık oyunlara ve Sicilyaya yol açar (Motor: +0.4). Petrosyan’a karşı Fransız ya da Caro-Kann gibi sağlam savunmalarla karşılaşmak mümkündü.' },
        { move: '1.Nf3', text: 'Esnek bir başlangıç (Motor: +0.2); çoğu zaman aynı Vezir Gambiti yapılarına geçer.' },
      ],
    },
    '1b': {
      text: 'Siyah d5 ile merkezdeki payını ister ve d4’e simetrik cevap verir.',
      amac: 'e4 karesini kontrol etmek ve klasik Vezir Gambiti yapılarına girmek.',
      neden: 'Petrosyan sağlam, klasik yapıları severdi. 1...d5 merkezde kalıcı bir piyon bırakır ve Beyazın e4 ilerleyişini zorlaştırır.',
      diger: [
        { move: '1...Nf6', text: 'Hint savunmalarına esneklik bırakır (Motor: +0.3): Nimzo-Hint, Kral Hint ya da Grünfeld.' },
        { move: '1...c6', text: 'Slav’a hamle sırası değiştirerek girme denemesi; 2.e4 ile Caro-Kann’a geçmeye izin verir (+0.4).' },
      ],
    },
    '2w': {
      text: 'Vezir Gambiti: c4 piyonu d5’e saldırır.',
      amac: 'Siyahın merkez piyonunu yerinden etmek ya da onu c4 ile değiştirip c-hattını açmak.',
      neden: 'Beyaz d5’i doğrudan sorgulamak ister; c-piyonu merkeze yaklaşarak d4 piyonuna destek olan bir yapı kurar. Bu, 1.d4’ün en ilkeli devamıdır.',
      diger: [
        { move: '2.Nf3', text: 'Daha esnek (Motor: +0.2); Siyaha 2...Bf5 gibi seçenekler bırakır.' },
        { move: '2.Bf4', text: 'Londra Sistemi tarzı sakin bir kurulum; merkezde gerginlik yaratmaz.' },
      ],
    },
    '2b': {
      text: 'Slav Savunması: Siyah d5’i c6 piyonuyla destekler.',
      amac: 'd5’i piyonla korurken c8 filinin yolunu açık bırakmak.',
      neden: 'Vezir Gambiti Kabul Edilmeyen’de (2...e6) c8 fili e6 piyonunun arkasında kalır. Slav’ın fikri bu sorunu önlemek ve fili f5 ya da g4’e çıkarabilmektir. Petrosyan bu oyunda bu avantajı ironik biçimde 6...e6 ile kendisi bıraktı.',
      diger: [
        { move: '2...e6', text: 'Vezir Gambiti Kabul Edilmeyen (Motor: +0.3): sağlam ama c8 fili pasif kalır.' },
        { move: '2...dxc4', text: 'Vezir Gambiti Kabul (Motor: +0.3): merkezi bırakır ama hızlı gelişim ve ...c5 ile karşı oyun alır.' },
      ],
    },
    '3w': {
      text: 'Değişim varyantı: Beyaz d5’te değişir ve yapıyı simetrik hale getirir.',
      amac: 'Merkezdeki gerilimi erkenden çözüp c-hattını açmak; Beyazın tek avantajı hamle sırası olacak.',
      neden: 'Değişim Slavı Siyahın en hareketli kollarını (Meran, Chebanenko, 4...dxc4 gibi) devre dışı bırakır. Wikipedia bu sistemi “Slavın keyfini kaçıran sistem” olarak anar. Portisch simetrik bir yapıda bile küçük üstünlükleri büyütebileceğine güveniyordu.',
      diger: [
        { move: '3.Nc3', text: 'Ana yol (Motor: +0.4): 3...Nf6 4.e3 ya da 4.Nf3 sonrası Meran ve Yarı-Slav yapıları gelir.' },
        { move: '3.Nf3', text: '3...Nf6 4.Nc3 dxc4 5.a4 ile Slav ana yoluna gider (+0.4); keskin ve teorik.' },
      ],
    },
    '3b': {
      text: 'Siyah c-piyonuyla geri alır; iki tarafın da d-piyonu merkezde durur.',
      amac: 'Merkezi d5 piyonuyla korumak ve simetrik yapıyı kabul etmek.',
      neden: 'Bu neredeyse zorunludur: 3...Nf6 4.dxc6 Nxc6 Siyaha bir piyon kaybettirir ya da Beyaza rahat bir oyun verir (Motor: +0.7), 3...Bf5? 4.dxc6 ise ciddi bir hatadır (+1.2).',
      diger: [
        { move: '3...Nf6', text: '4.dxc6 Nxc6 ile Siyah bir piyon karşılığında gelişim alır, ama Motor +0.7 diyor.' },
      ],
    },
    '4w': {
      text: 'At c3’e gelişir ve d5’e baskı yapar.',
      amac: 'Gelişmek ve d5 piyonunu hedef almak; ileride Nb5 ya da e4 fikirleri için hazır olmak.',
      neden: 'At c3’te hem d5’e hem de e4 ve b5 karelerine bakar. Bu oyunda bu at b5 üzerinden d6’ya gidip saldırının en güçlü taşlarından biri olacaktır.',
      diger: [
        { move: '4.Bf4', text: 'Fili hemen dışarı çıkaran hamle sırası (Motor: +0.3); Siyahın ...e5 fikirlerini önler.' },
        { move: '4.Nf3', text: 'Daha sakin bir hamle sırası (+0.3); Wikipedia’ya göre beraberlik isteyen Beyaz genellikle 4.Nf3 ile başlar.' },
      ],
    },
    '4b': {
      text: 'At f6’ya gelişir ve d5’i destekler.',
      amac: 'Gelişmek, e4 karesini kontrol etmek ve rok yapmaya hazırlanmak.',
      neden: 'En doğal ve sağlam hamle. Siyah simetrik yapıda kolay gelişmek ve beraberlik payını korumak ister.',
      diger: [
        { move: '4...e5!?', text: 'Keskin bir piyon fedası: 5.dxe5 d4 6.Ne4 (Motor: +0.3). Motor bunu bile yeterli buluyor, ama Petrosyan’ın tarzına uymaz.' },
        { move: '4...e6', text: 'c8 filini erkenden kapatan sakin kurulum (+0.5).' },
      ],
    },
    '5w': {
      text: 'Beyaz ikinci atını f3’e geliştirir; at e5 karesine bakar.',
      amac: 'Gelişmeyi tamamlamak ve ileride Ne5 ile merkeze yerleşmek.',
      neden: 'Bu oyunda belirleyici olan Ne5 fikri bu hamleyle hazırlanır. f3 atı ayrıca d4’ü destekler ve şah kanadını korur.',
      diger: [
        { move: '5.Bf4', text: 'Önce fili çıkarmak (Motor: +0.3); bu da yaygın bir hamle sırasıdır.' },
        { move: '5.e3', text: 'Daha sakin (+0.2); ama c1 filini içeride bırakır.' },
      ],
    },
    '5b': {
      text: 'At c6’ya gelir; d4’e baskı yapar ve e5’i kontrol eder.',
      amac: 'Tam simetrik yapıyı korumak ve d4 ile e5 karelerinde söz sahibi olmak.',
      neden: 'Simetrik yapıda bu atın en iyi karesi c6’dır. Değişim Slavı çalışmalarında da c6 atının açık c-hattını kapatma görevi vurgulanır.',
      diger: [
        { move: '5...Bd7', text: 'Esnek bir hamle (Motor: +0.3), ama c8 filini pasif bir kareye koyar.' },
        { move: '5...e6', text: '6.Bg5 ile bağlamaya izin verir (+0.4).' },
      ],
    },
    '6w': {
      text: '6.Bf4: fil e3 piyonundan önce dışarı çıkar ve e5 karesini kontrol eder.',
      amac: 'Kara kareli fili piyon zincirinin dışına çıkarmak ve b8-h2 köşegenini ele geçirmek.',
      neden: 'Değişim Slavının ana hamlesi budur. Fil önce çıkıp sonra e3 oynanırsa Beyazın iki fili de aktif olur. f4 fili Siyahın ...e5 kırılmasını da zorlaştırır.',
      diger: [
        { move: '6.e3', text: 'Fili içeride bırakan sakin kurulum (Motor: +0.2).' },
        { move: '6.Bg5', text: 'f6 atını bağlamaya yönelik alternatif; Siyah ...Ne4 ya da ...e6 ile rahat eder.' },
      ],
    },
    '6b': {
      text: '6...e6: sağlam ama pasif bir seçim. c8 fili piyonların arkasında kalır.',
      amac: 'Merkezi sağlamlaştırmak, ...Bd6 ile kara kareli filleri değişmek ve hızla rok yapmak.',
      neden: '6...Bf5 ile tam simetri ve hemen hemen eşitlik vardı (Motor: +0.2). 1967 tarihli Spectator köşesi 6...Bf5’i “daha basit eşitleyici yol” olarak anar ve Petrosyan’ın belki beraberlikten kaçmak istediğini tahmin eder. 6...e6 de kötü değildir (+0.4), ama Siyahı c8 fili sorunuyla baş başa bırakır.',
      diger: [
        { move: '6...Bf5', text: 'Ana yol, tam simetri (Motor: +0.2). 7.e3 e6 sonrası 8.Qb3 Bb4 (Trifunović varyantı) ya da 8.Bb5 gibi kollar gelir.' },
        { move: '6...a6', text: 'Nb5 ve Bb5 fikirlerini önler (+0.3); Değişim Slavında sık görülen bir bekleme hamlesi.' },
        { move: '6...Nh5', text: 'f4 filini sorgular (+0.3); 7.Bd2 sonrası at geri döner.' },
      ],
    },
    '7w': {
      text: 'e3 ile d4 desteklenir ve f1 filinin yolu açılır.',
      amac: 'Gelişmeyi tamamlamak: Bd3 ve O-O hazırlığı.',
      neden: 'f4 fili zaten dışarıda olduğu için e3 artık hiçbir taşı kapatmaz. Bu, 6.Bf4’ün asıl ödülüdür: Siyah ...e6’yı fil içerideyken oynadı, Beyaz e3’ü fil dışarıdayken.',
      diger: [
        { move: '7.h3', text: 'Fil için h2 kaçış karesi hazırlar (Motor: +0.3), ama bir tempo harcar.' },
        { move: '7.Rc1', text: 'Erken kale hamlesi (+0.1); 7...Qb6 ile b2’ye baskı gelir.' },
      ],
    },
    '7b': {
      text: 'Fil d6’ya gelir ve f4 filine değişim teklif eder.',
      amac: 'Beyazın aktif kara kareli filini değişmek ve e5 karesini kontrol etmek.',
      neden: 'Siyahın kötü fili c8’dekiydi, ama f8 fili de Beyazın güçlü f4 filine karşı ideal bir değişim taşıdır. Değişirse Siyah ...e5 ile rahatlayabilir.',
      diger: [
        { move: '7...Be7', text: 'Daha mütevazı (Motor: +0.4); filleri değişmez ve Ne5’e daha az hedef sunar.' },
        { move: '7...a6', text: 'Önce Bb5 ve Nb5 karelerini kontrol eder (+0.5).' },
      ],
    },
    '8w': {
      text: '8.Bg3: Beyaz fili değişmek yerine geri çeker ve köşegeni korur.',
      amac: 'Kara kareli fili sahada tutmak ve e5 karesinin kontrolünü sürdürmek.',
      neden: '8.Bxd6 Qxd6 Siyahın sorununu çözerdi (Motor: +0.2). Bg3 sonrası Siyah 8...Bxg3 oynasa bile hxg3 ile h-hattı Beyazın kalesine açılır. Fil daha sonra f2, h4 ve f6 üzerinden saldırının merkezine gidecek.',
      diger: [
        { move: '8.Bg5', text: 'Motorun hafif tercihi (+0.5): f6 atını bağlar.' },
        { move: '8.Bxd6', text: 'Değişim, Siyaha rahat bir oyun verir (+0.2).' },
      ],
    },
    '8b': {
      text: 'Siyah rok yapar.',
      amac: 'Şahı güvene almak ve f8 kalesini oyuna sokmak.',
      neden: 'Doğal ve sağlam. Ama motor bu anda 8...Bxg3 hxg3 ile değişimi biraz daha iyi buluyor (+0.3); fil sahada kaldıkça Beyazın e5 kontrolü sürer.',
      diger: [
        { move: '8...Bxg3', text: '9.hxg3 ile kara kareli filler değişir, Beyazın h-hattı açılır ama Siyahın e5 sorunu azalır (Motor: +0.3).' },
        { move: '8...Qc7', text: 'f4 karesine ve e5’e baskı (+0.4).' },
      ],
    },
    '9w': {
      text: 'Fil d3’e gelişir ve h7’ye bakar.',
      amac: 'Gelişmeyi tamamlayıp rok yapmak; b1-h7 köşegeninde şah kanadına baskı kurmak.',
      neden: 'd3 fili Siyahın şahına bakan en tehlikeli taş olacak: Qh5 ile birlikte h7’yi hedef alacak. Beyaz rokunu geciktirerek önce taşlarını en iyi karelere yerleştiriyor.',
      diger: [
        { move: '9.Bh4', text: 'f6 atını bağlar (Motor: +0.4).' },
        { move: '9.Rc1', text: 'c-hattını önce ele geçirmek (+0.3).' },
      ],
    },
    '9b': {
      text: 'Kale e8’e gelir ve ...e5 kırılmasını hazırlar.',
      amac: 'Merkezde ...e5 ile oyunu açmak ve c8 filini serbest bırakmak.',
      neden: 'Fikir mantıklı, ama yavaş: Beyaz hemen 10.Ne5 ile e5 karesini işgal eder. Motor 9...Re8 için +0.8 veriyor. Spectator köşesi, Siyahın bu yolu seçerken Beyazın 13. hamlesini gözden kaçırmış olabileceğini yazar.',
      diger: [
        { move: '9...Bxg3', text: '10.hxg3 ile değişim (Motor: +0.3); Beyazın e5 kontrolü azalır.' },
        { move: '9...h6', text: 'Şaha luft açar (+0.4); 10.Ne5 Bxe5 11.dxe5 Nd7 yine benzer bir yapıya gider ama h7 daha sağlamdır.' },
        { move: '9...a6', text: 'Nb5’i önler (+0.4).' },
      ],
    },
    '10w': {
      text: '10.Ne5! At merkeze yerleşir ve ...e5 kırılmasını engeller.',
      amac: 'e5 karesini işgal etmek; at alınırsa dxe5 ile f6 atını kovalayan bir piyon kaması kurmak.',
      neden: 'Re8’in amacı ...e5’ti; Ne5 bunu kökten engeller. At alınmazsa f4 ile desteklenip çok güçlü bir merkez atı olur; alınırsa yapı Beyaz lehine değişir. Motor: +0.6.',
      diger: [
        { move: '10.Bh4', text: 'f6 atını bağlar (Motor: +0.6), ama 10...e5! ile Siyah planını gerçekleştirir.' },
        { move: '10.Rc1', text: 'Sakin (+0.6); 10...Bxg3 11.hxg3 e5 ile Siyah merkezi açar.' },
      ],
    },
    '10b': {
      text: 'Siyah e5 atını alır.',
      amac: 'Merkezdeki güçlü atı ortadan kaldırmak.',
      neden: 'At yerinde kalırsa c6’ya baskı yapar ve f4 ile desteklenir. 10...Be7 ya da 10...Bb4 Siyahı daha pasif bırakır. 10...Bxe5 objektif olarak en iyisi (Motor: +0.5), ama bedeli e5 kamasıdır.',
      diger: [
        { move: '10...Be7', text: '11.f4 ile at e5’te sağlamlaşır (Motor: +0.6).' },
        { move: '10...Bb4', text: '11.O-O Nxe5 12.dxe5 Bxc3 ile yapı yine bozulur (+0.7).' },
      ],
    },
    '11w': {
      text: 'Beyaz d-piyonuyla geri alır; e5 piyonu f6 atına saldırır.',
      amac: 'e5’te bir piyon kaması kurmak ve f6 atını kovalamak.',
      neden: '11.Bxe5 de mümkündü (Motor: +0.5), ama dxe5 tempo kazanır ve f6 karesini Siyahın atına kapatır. 11.Bxh7+? ise yanlış bir şah fedasıdır: 11...Nxh7 12.dxe5 ve Beyaz bir taş eksik kalır (−3.6).',
      diger: [
        { move: '11.Bxe5', text: '11...Nxe5 12.dxe5 Nd7 13.f4 ile benzer yapı (+0.5), ama Beyaz kara kareli filini verir.' },
        { move: '11.Bxh7+?', text: 'Erken fedalar işe yaramaz: Motor −3.6.' },
      ],
    },
    '11b': {
      text: 'At d7’ye çekilir. Bu neredeyse tek iyi hamle.',
      amac: 'Atı kurtarmak ve e5 piyonunu ...Nc5 ya da ...f6 ile sorgulamaya hazırlanmak.',
      neden: '11...d4 12.exd4 Nd5 merkezi açar ama Siyah bir piyon kaybeder (Motor: +1.5); 11...Ne4 12.Bxe4 dxe4 ise e4 piyonunu zayıf bırakır (+1.9). d7’deki at c5’e geçip d3 filine saldırabilir.',
      diger: [
        { move: '11...d4', text: '12.exd4 Nd5 13.O-O ile Beyaz bir piyon kazanır (Motor: +1.5).' },
        { move: '11...Ne4', text: '12.Bxe4 dxe4 13.O-O Qxd1 ile e4 piyonu zayıf kalır (+1.9).' },
      ],
    },
    '12w': {
      text: '12.f4 ile e5 kaması desteklenir. Siyahın atları artık f6’ya gelemez.',
      amac: 'e5’i sağlamlaştırmak, f6 karesini kalıcı olarak Siyaha kapatmak ve f-hattını açmaya hazırlanmak.',
      neden: 'Bu yapının anahtar hamlesi. 12.O-O 12...Ndxe5 13.Bxe5 Nxe5 14.Bxh7+ ile yalnızca dengeyi korurdu (Motor: +0.3). f4 sonrası Beyaz şah kanadında alan kazanır, Rf3 gibi kale geçişleri mümkün olur. Bedeli: e3 piyonu zayıflar.',
      diger: [
        { move: '12.O-O', text: '12...Ndxe5 ile Siyah piyonu alır; 13.Bxe5 Nxe5 14.Bxh7+ Kxh7 sonrası denge (Motor: +0.3).' },
        { move: '12.Qb1', text: 'h7’yi hedef alır (+0.4), ama 12...f6 ile kama sorgulanır.' },
      ],
    },
    '12b': {
      text: 'Vezir b6’dan e3 ve b2 piyonlarına baskı yapar.',
      amac: 'f4 sonrası zayıflayan e3 piyonunu ve korumasız b2’yi hedef almak.',
      neden: 'Petrosyan Beyazın zayıflıklarını hemen sorgular. Ama vezir şah kanadından uzaklaşır. Motor 12...Nc5 (+0.55) ile d3 filine saldırmayı daha iyi buluyor; Qb6 sonrası +1.0.',
      diger: [
        { move: '12...Nc5', text: '13.Bb1 Qb6 ile d3 filini rahatsız eder (Motor: +0.6).' },
        { move: '12...f5', text: '13.O-O Nc5 14.Nb5 (+0.9); kamayı durdurur ama e6’yı zayıflatır.' },
        { move: '12...Rf8', text: '...f6 ile kamayı sorgulamaya hazırlanır (+0.8).' },
      ],
    },
    '13w': {
      text: '13.O-O! Beyaz rok yapar ve e3 piyonunu feda eder.',
      amac: 'Gelişmeyi tamamlamak, f-hattında kaleyi aktifleştirmek ve piyon karşılığında hızlı bir şah kanadı saldırısı başlatmak.',
      neden: 'Spectator köşesine göre Beyaz burada Siyahın beklediğinden “çok daha iyi bir hamle” bulur. 13.Qd2 ya da 13.Nb5 piyonu korurdu ama gelişimi geciktirirdi (Motor: +0.3–0.5). O-O ile +0.75 ve Siyahın vezirine yeni hedefler.',
      diger: [
        { move: '13.Nb5', text: '13...Nc5 14.O-O Nxd3 15.Qxd3 ile d3 fili değişir (Motor: +0.5).' },
        { move: '13.Qd2', text: 'e3’ü korur ama pasif (+0.3).' },
      ],
    },
    '13b': {
      text: 'Siyah e3 piyonunu şah çekerek alır.',
      amac: 'Materyal kazanmak ve Beyazın şahını rahatsız etmek.',
      neden: 'Bu oyunun kader hamlesi. Vezir e3’te merkezde ama şahtan uzak; Beyaz tempo kazanarak saldırıya geçer. Motor: +1.6. 13...Nc5 (+0.7–1.0) ile d3 filine saldırmak ve onu değişmek çok daha sağlıklıydı.',
      diger: [
        { move: '13...Nc5', text: '14.Bc2 Bd7 15.Be1 ile Beyaz biraz üstün (Motor: +0.7–1.0), ama d3 filinin saldırı gücü azalır.' },
        { move: '13...a6', text: 'Nb5’i önler (+1.1).' },
        { move: '13...Rf8', text: '...f6 hazırlığı (+1.1–1.3).' },
      ],
    },
    '14w': {
      text: '14.Kh1: tek doğru hamle. Şah köşeye çekilir.',
      amac: 'Şahı şah çekmelerden korumak ve vezire tempo kazanmak.',
      neden: '14.Bf2? Qxf4 Siyaha iki piyon ve sağlam bir oyun verir (Motor: −1.6). 14.Rf2 14...Nc5 ile dengeye yakın (−0.3 ile +0.1). Kh1 sonrası Beyaz hem f-hattını hem de e3’ten çıkan veziri hedef alır.',
      diger: [
        { move: '14.Rf2', text: '14...Nc5 15.Bb1 b6 ile Siyah rahat (Motor: yaklaşık 0.0).' },
        { move: '14.Bf2?', text: '14...Qxf4 ve Siyah iki piyon önde (−1.6).' },
      ],
    },
    '14b': {
      text: 'Vezir b6’ya geri döner ve b2’ye bakar.',
      amac: 'Veziri tehdit altından çıkarıp b2 baskısını sürdürmek.',
      neden: 'Vezir e3’te Bf2 ya da Rf3 ile kovalanacaktı. Motor 14...a6’yı biraz daha iyi buluyor (+1.3): önce Nb5’i önlemek. Qb6 ile değerlendirme +1.7.',
      diger: [
        { move: '14...a6', text: '15.Rf3 Qc5 16.Bf2 ile Beyaz baskısını sürdürür (Motor: +1.3).' },
        { move: '14...Nf8', text: 'Hemen şah kanadını savunur (+1.7).' },
      ],
    },
    '15w': {
      text: 'Vezir h5’e gelir; d3 filiyle birlikte h7’yi hedef alır.',
      amac: 'Şah kanadında saldırı başlatmak ve Qxh7+ tehdidiyle Siyahı savunmaya zorlamak.',
      neden: 'Vezir d1’den şah kanadına geçer. e5 kaması Siyahın atlarını f6’dan uzak tuttuğu için h7’nin savunulması zor. Motor 15.Bf2 ve 15.Nb5’i biraz daha iyi buluyor (+1.6/+1.7), ama Qh5 da açık bir plan.',
      diger: [
        { move: '15.Bf2', text: 'Vezire tempo kazanır: 15...Qd8 16.Nb5 (Motor: +1.7).' },
        { move: '15.Nb5', text: 'At d6’ya yönelir (+1.6).' },
      ],
    },
    '15b': {
      text: 'At f8’e gelir ve h7’yi savunur.',
      amac: 'Şah kanadına bir savunucu getirmek.',
      neden: 'Qxh7+ tehdidi vardı. Motor 15...g6 16.Qh6 ile benzer değerlendirme veriyor (+1.3); 15...h6? ise 16.Nb5 ile daha kötü (+1.9). Nf8 atı g6’ya geçip f4 ve h4’e bakabilir.',
      diger: [
        { move: '15...g6', text: '16.Qh6 Qb4 17.Nb5 (Motor: +1.3); şah kanadında koyu karelerde zayıflık doğar.' },
        { move: '15...h6', text: '16.Nb5 Rf8 17.Bf2 ile Beyaz üstün (+1.9).' },
      ],
    },
    '16w': {
      text: 'Rf3: kale üçüncü yataydan h3 ya da g3’e gelmeye hazırlanır.',
      amac: 'Kaleyi saldırıya katmak ve aynı zamanda c3 atını korumak.',
      neden: 'Spectator köşesi 16.Rf3’ün dolaylı olarak 16...Qxb2’yi karşıladığını yazar: 17.Rb1 Qxc3? 18.Bxh7+ ve ardından Rxc3. Motor bunu onaylıyor (+3.9). Kale f3’ten hem c3’ü hem şah kanadını kontrol eder.',
      diger: [
        { move: '16.Nb5', text: 'Hemen d6’ya yönelir (Motor: +1.5).' },
        { move: '16.Bf2', text: '16...Qxb2 ile Siyah piyonu alır (+1.2).' },
      ],
    },
    '16b': {
      text: 'At g6’ya gelir; f4 ve h4 karelerine bakar.',
      amac: 'Şahı savunmak ve f4 piyonuna baskı yapmak.',
      neden: 'g6 atı h4 ve f4 karelerini kontrol eder, h8’i de korur. 16...Qxb2 17.Rb1 ile Siyah çok kötüye gider (Motor: +3.2). 16...a6 ya da 16...Re7 daha da kötü (+2.4/+2.6).',
      diger: [
        { move: '16...Qxb2?', text: '17.Rb1 Qa3 18.Nxd5 ve Beyaz kazanıyor (Motor: +3.2).' },
        { move: '16...a6', text: '17.Bf2 g6 18.Qh6 (+2.4).' },
      ],
    },
    '17w': {
      text: 'Fil f2’den b6 vezirine saldırır.',
      amac: 'Tempo kazanmak ve fili h4 karesine yönelmeye hazırlamak.',
      neden: 'Bf2 hem vezire saldırır hem de f4’ü destekler. Fil ileride h4 ve f6’ya gidecek. Motor: +2.3; en iyi hamle.',
      diger: [
        { move: '17.Nb5', text: '17...Bd7 18.Bf2 d4 (Motor: +1.7).' },
        { move: '17.Raf1', text: '17...Qxb2 ile Siyah piyonu alır (+1.4).' },
      ],
    },
    '17b': {
      text: 'Vezir d8’e çekilir ve şah kanadını savunmaya döner.',
      amac: 'Veziri güvene almak ve şahın yanında tutmak.',
      neden: '17...Qxb2? 18.Rb1 Qxc3 19.Rh3 ile Beyaz hızla kazanır (Motor: +3.0). 17...Qc7 de daha kötü (+2.7). Qd8 en dirençli.',
      diger: [
        { move: '17...Qxb2?', text: '18.Rb1 Qxc3 19.Rh3 (Motor: +3.0).' },
        { move: '17...Qc7', text: '18.Nb5 Qd7 19.Nd6 (+2.7).' },
      ],
    },
    '18w': {
      text: 'At b5 üzerinden d6 karesine yönelir.',
      amac: 'Atı e5 kamasının desteklediği d6 karesine yerleştirmek.',
      neden: 'd6 karesi e5 piyonuyla korunur ve Siyahın kara kareli fili olmadığı için at oradan kovalanamaz. Motor: +2.1; en iyi hamle.',
      diger: [
        { move: '18.Bc5', text: 'Fil c5’ten e7’yi kontrol eder (Motor: +1.7).' },
        { move: '18.a4', text: 'Yavaş (+1.5).' },
      ],
    },
    '18b': {
      text: 'At e7’ye gelir; d5’i ve f5’i kontrol eder.',
      amac: 'Atı şah kanadı savunmasına getirmek ve Nd6’ya karşı f5’ten karşı oyun aramak.',
      neden: 'Motor 18...Rf8’i daha iyi buluyor (+2.3): kale Nd6’dan önce kaçar. Nce7 sonrası Nd6 tempo kazanarak e8 kalesine saldırır (+3.5).',
      diger: [
        { move: '18...Rf8', text: '19.Nd6 Nce7 20.Bh4 f5 ile Siyah direnir (Motor: +2.3).' },
        { move: '18...Re7', text: '19.Rh3 h6 20.Bxg6 (+2.7).' },
      ],
    },
    '19w': {
      text: 'At d6’ya yerleşir; e8 kalesine, b7 ve f7’ye saldırır.',
      amac: 'Güçlü bir at karesi edinmek ve Siyahın kalesini kovalamak.',
      neden: 'At d6’da e5 piyonuyla korunur ve Siyahın fili kalmadığı için ortadan kaldırılamaz. Motor 19.Bh4’ü daha da güçlü buluyor (+3.2), ama Nd6 da kazanılmış seviyede (+2.2).',
      diger: [
        { move: '19.Bh4', text: 'Önce e7 atına saldırır (Motor: +3.2).' },
        { move: '19.Nd4', text: 'Merkez atı (+1.9).' },
      ],
    },
    '19b': {
      text: 'Hata. Siyah c8 filini geliştirip e8 kalesini feda etmeyi kabul eder.',
      amac: 'c8 filini nihayet oyuna sokup a8 kalesini c8’e bağlamak; Nxe8 sonrası Qxe8 ile kaliteyi verip konumu toparlamak.',
      neden: 'Motor 19...Rf8 ile kaleyi kurtarmayı öneriyor (+2.3). Spectator köşesi 19...Rf8 20.Rh3 h6 21.Bh4 ve Bf6 ile “hızla ölümcül” diyor; motor bu hatta 21...Nxh4 ile Siyahın direnebileceğini gösteriyor (+1.0). Bd7 sonrası +3.4.',
      diger: [
        { move: '19...Rf8', text: '20.Bh4 f5 21.Bg5 ile Beyaz üstün (Motor: +2.3).' },
        { move: '19...Nf5', text: '20.Nxe8 Qxe8 21.g4 (+3.2).' },
      ],
    },
    '20w': {
      text: 'Bh4! Fil e7 atına, yani şahın savunucusuna saldırır.',
      amac: 'Şah kanadı savunucularını ortadan kaldırmak ve Bf6 ile g7’ye baskı hazırlamak.',
      neden: '20.Nxe8 Qxe8 materyal kazanırdı ama saldırıyı söndürürdü (Motor: +1.8). 20.Bh4 ile +4.5; e7 atı giderse h7 ve g7 savunmasız kalır.',
      diger: [
        { move: '20.Nxe8', text: '20...Qxe8 21.Bc5 h6 (Motor: +1.8).' },
        { move: '20.Rh3', text: '20...h6 21.Bh4 Nxh4 22.Qxf7+ (+3.1).' },
      ],
    },
    '20b': {
      text: 'Vezir d8’den b6’ya gelir; b2 piyonuna ve dolaylı olarak f2-b6 köşegenine bakar.',
      amac: 'Bir karşı oyun kaynağı (…Qxb2 ile a1 kalesine saldırı) yaratmak; vezir d8’de pasif bir savunucu olmaktan çıkmak istiyor.',
      neden: 'Siyahın gerçek bir savunması yok: 20...Qa5 ve 20...Bc6 de motor için +4.3/+4.4. 20...Nxh4? 21.Qxh4 ise g6 atını da verir ve h-hattını Beyaza tamamen açar. Petrosyan pasif kalıp ezilmektense en azından b2’yi tehdit eden ve Beyazı zamanla sınırlayan hamleyi seçti. Bedeli: vezir yine şahtan uzaklaştı ve Bf6 artık daha da güçlü.',
      diger: [
        { move: '20...Qa5', text: '21.Rh3 h6 22.Bf6 (Motor: +4.3).' },
        { move: '20...Bc6', text: '21.Rh3 h6 22.Bf6 (+4.4).' },
      ],
    },
    '21w': {
      text: 'Kale f3’ten h3’e geçer. Tehdit Bxe7 ile savunucuyu alıp h7’ye vezir ve kaleyle birlikte saldırmak.',
      amac: 'h-hattında vezir ve kaleyle h7’ye çift baskı kurmak; d3 filiyle birlikte h7’ye üç taş bakacak.',
      neden: '16.Rf3 tam olarak bu geçiş için oynanmıştı: e5-f4 kaması üçüncü yatayı Siyahın taşlarından korur, kale engelsiz yan geçer. Rh3, 21...Qxb2’ye de aldırmaz, çünkü Beyazın şah saldırısı a1 kalesinden çok daha değerlidir. Motor 21.Bf6’yı aynı derecede güçlü buluyor (+4.2); iki hamle de aynı hedefe, h7 ve g7’ye gider.',
      diger: [
        { move: '21.Bf6', text: '21...Qxb2 22.Raf1 h6 23.Rh3 (Motor: +4.2).' },
        { move: '21.Rg1', text: 'Daha yavaş (+2.8).' },
      ],
    },
    '21b': {
      text: '...h6 ile h7 karesi rahatlatılır, ama h6 piyonu yeni bir hedef olur.',
      amac: 'Bxe7 Nxe7 Qxh7+ gibi doğrudan mat tehditlerini durdurmak ve şaha h7 kaçış karesi açmak.',
      neden: 'Siyahın h7’yi korumanın başka kolay yolu yoktu: f6’ya at gelemez (e5 kaması), f8’e ise e8 kalesi yüzünden at dönemez. Ama h6 piyonu şimdi Qxh6 fikrine hedef olur ve g7’nin tek koruyucusu şah kalır; bu, 22.Bf6’yı mümkün kılan zayıflıktır. Motor 21...Qxb2’yi biraz daha iyi buluyor (+4.2); 21...Qxd6? 22.exd6 ise vezir yerine yalnızca bir at alır ve tamamen kaybeder (+5.7).',
      diger: [
        { move: '21...Qxb2', text: '22.Rf1 h6 23.Bf6 (Motor: +4.2).' },
        { move: '21...Qxd6?', text: '22.exd6 (+5.7).' },
      ],
    },
    '22w': {
      text: 'Bf6! 22...gxf6 alırsa 23.Qxh6 ve dört hamlede mat.',
      amac: 'g7’ye baskı yapmak ve Bxg7, Qxh6 tehditleri yaratmak; filin alınamayacağı bir “zehirli kare” bulmak.',
      neden: 'Fil alınamaz: 22...gxf6 23.Qxh6 Qxd6 24.Bxg6 Nxg6 25.exf6 ve Qg7# (motor dört hamlede mat görüyor). Bu, 21...h6’nın yarattığı zayıflığın doğrudan sonucudur: h6 piyonu artık g7’yi değil, vezire kapı olur. e5 piyonu fili destekler, d6 atı f7’yi, vezir h6’yı, kale h-hattını tutar; dört taşın uyumu. Motor: +4.6; en iyi hamle.',
      diger: [
        { move: '22.Nxf7', text: '22...Qxb2 23.Nxh6+ gxh6 24.Rg1 (Motor: +4.4).' },
        { move: '22.Rf1', text: '22...Nf5 23.Bf6 (+3.8).' },
      ],
    },
    '22b': {
      text: 'Siyah b2 piyonunu alır; vezir a1 kalesine saldırır ve ilk yatayı tehdit eder.',
      amac: 'Karşı oyun aramak: Beyazın kalesini kaçmaya zorlamak, mümkünse ...Rc8–c1 ile kale değişimi sağlayıp saldırıyı yavaşlatmak.',
      neden: 'Spectator köşesi bunu “son bir umut hamlesi” olarak niteler: Petrosyan 23.Rb1 Rec8 umuyordu; motor da bu hatta dengenin geri geldiğini gösteriyor (yaklaşık 0.0). Pasif savunma zaten kaybediyordu, bu yüzden pratik şans buydu. Ama vezir şimdi şahtan olabildiğince uzakta. Motor: +4.5–5.0; 22...gxf6? ise dört hamlede mat.',
      diger: [
        { move: '22...gxf6?', text: '23.Qxh6 ve dört hamlede mat.' },
        { move: '22...Qf2', text: '23.Rf1 Qxf1+ 24.Bxf1 (Motor: +4.9).' },
      ],
    },
    '23w': {
      text: 'Rf1: kale a1’den f1’e kaçar, f4 piyonunu korur ve şah kanadında kalır.',
      amac: 'Kaleyi kurtarmak, ilk yatayı ...Rc1’e karşı kapalı tutmak ve şah kanadındaki saldırıyı sürdürmek.',
      neden: 'Kalenin hangi kareye gideceği bütün avantajı belirliyordu. 23.Rb1? Rec8 ile Siyah ...Rc1 ile kaleleri değiştirir ve denge geri gelir (Motor: yaklaşık 0.0); 23.Rd1 de ...Rc1 yüzünden yalnızca +0.9. f1’deki kale ise d3 filiyle birlikte c1-f1 hattını korur, f4’ü tutar ve gerekirse Rxf7 ya da Rf3 ile saldırıya katılır. Rf1 +4.8, Rg1 +5.1.',
      diger: [
        { move: '23.Rg1', text: '23...Rac8 24.Bxg7 (Motor: +5.1).' },
        { move: '23.Rb1?', text: '23...Rec8 ve ...Rc1 ile denge (yaklaşık 0.0).' },
      ],
    },
    '23b': {
      text: 'At e7’den f5’e gelir; d6 atına, h4’e ve g3’e bakar.',
      amac: 'd6 atına saldırıp onu değiştirmek ve h-hattını kapatmak; e7 atı zaten f6 filinin tehdidi altındaydı.',
      neden: 'At e7’de Bxe7 ile alınacaktı, Siyah onu aktif bir kareye götürdü. Ama f5 karesi d3 filinin menzilindedir: 24.Bxf5 exf5 sonrası g7’nin korunacak hiçbir taşı kalmaz. Motor 23...Bc6’yı (+5.5) ya da 23...Qd2’yi (+5.4) biraz daha dirençli buluyor; Nf5 sonrası +5.8–6.9. Her durumda Siyahın konumu kaybedilmiş.',
      diger: [
        { move: '23...Bc6', text: '24.Rg3 Rf8 25.Bxe7 (Motor: +5.5).' },
        { move: '23...Qd2', text: '24.Bxg7 Qxd3 25.Rxd3 (+5.4).' },
      ],
    },
    '24w': {
      text: 'Beyaz f5 atını alır. Petrosyan terk etti.',
      amac: 'Son savunucuyu ortadan kaldırmak, d6 atını korumak ve g7’nin düşmesini garanti etmek.',
      neden: 'f5 atı hem d6 atına saldırıyor hem de h-hattını kapatmaya hazırlanıyordu. 24...exf5 25.Bxg7 Qb5 26.Nxb5 Kxg7 27.Qxh6+ ile Beyaz kazanıyor (Motor: +7.5); 24...Bb5 25.Bxg6 ise Bxf7+ ile şahı açar (+7.5). Motor 24.Bxg7 Nxg7 25.Qxh6’yı da aynı güçte buluyor (+7.5). Siyahın veziri b2’de, savunucusu kalmamış şahın etrafında beş Beyaz taşı var; terk mantıklıydı.',
      diger: [
        { move: '24.Bxg7', text: '24...Nxg7 25.Qxh6 (Motor: +7.5).' },
        { move: '24.Nxf7', text: 'Daha zayıf (+4.4–5.9).' },
      ],
    },
  },
  sources: [
    { title: 'The Spectator arşivi, 6 Ekim 1967: Chess No. 355 (Philidor)', url: 'https://archive.spectator.co.uk/article/6th-october-1967/29/chess-no-355' },
    { title: 'Chess.com blog (simaginfan): Petrosian’s other difficult opponent', url: 'https://www.chess.com/blog/simaginfan/petrosians-other-difficult-opponent' },
    { title: 'Wikipedia: Slav Defense', url: 'https://en.wikipedia.org/wiki/Slav_Defense' },
    { title: 'Master in Chess: Exchange Slav – Strategy and Tactics (PDF)', url: 'https://masterinchess.com/Media/2024/07/Exchange%20Slav%20Strategy%20and%20Tactics.pdf' },
  ],
  exercises: [
    { id: 'ppe-1', kind: 'tekrar', plan: false, title: 'Şahın savunucusuna saldırı',
      source: 'Portisch – Petrosyan, Moskova 1967 (20. hamle)',
      fen: 'r2qr1k1/pp1bnppp/3Np1n1/3pP2Q/5P2/3B1R2/PP3BPP/R6K w - - 12 20',
      prompt: 'Beyazın atı d6’da ve e8 kalesine saldırıyor. Vezir h5’te, kale f3’te. Siyahın şahını e7 atı ve g6 atı savunuyor. Beyazın en güçlü devamı hangisi?',
      hint: 'Kaleyi almak yerine şahın savunucularından birine saldırın.',
      line: ['Bh4'],
      explanation: '**20.Bh4!** Fil e7 atına saldırır. Bu at giderse h7 ve g7 savunmasız kalır; Rh3 ve Bf6 gelecek. Motor: Bh4 +4.7, sonraki en iyi hamle 20.Rh3 +3.0; 20.Nxe8 ise yalnızca yaklaşık +1.3.',
      link: 'e5 kaması f6 karesini Siyaha kapattı; Beyaz şimdi kalan savunucuları teker teker hedef alıyor.' },
    { id: 'ppe-2', kind: 'tekrar', plan: false, title: 'Kale nereye?',
      source: 'Portisch – Petrosyan, Moskova 1967 (23. hamle)',
      fen: 'r3r1k1/pp1bnpp1/3NpBnp/3pP2Q/5P2/3B3R/Pq4PP/R6K w - - 0 23',
      prompt: 'Beyazın fili f6’da; alınırsa Qxh6 ile mat gelir. Siyahın veziri b2 piyonunu aldı ve a1 kalesine saldırıyor. Kaleyi nereye götürürsünüz?',
      hint: 'Kale hem kurtulsun hem de şah kanadındaki saldırıya katılsın. ...Rc1 ile kale değişimine izin vermeyin.',
      line: ['Rf1'],
      accept: { 0: ['Rg1'] },
      explanation: '**23.Rf1!** Kale f4’ü korur ve şah kanadında kalır. 23.Rg1 de aynı derecede güçlü. 23.Rd1? Rec8 sonrası ...Rc1 ile kaleler değişir ve saldırı yavaşlar. Motor: Rg1 +6.0, Rf1 +4.9, 23.Rd1 +0.9.',
      link: 'Saldırıda her taşın görevi var: kale hem kendini kurtarıyor hem de saldırıya destek veriyor.' },
    { id: 'ppe-3', kind: 'transfer', plan: false, title: 'Bf6! ve şah açılıyor',
      source: 'Arnason – Dreev, Reykjavik açık turnuvası 1990 (21. hamle)',
      fen: '4rrk1/2q2pp1/p1b1p3/1p1pP1BQ/2n5/P1P5/1P3PPP/R3R1K1 w - - 2 21',
      prompt: 'Beyazın e5 piyonu, h5’te veziri ve g5’te fili var. Siyahın c4 atı e5 piyonuna saldırıyor. Beyaz saldırıyı nasıl sonuçlandırır?',
      hint: 'Fil g7 piyonunun önüne gelsin; ...gxf6 sonrası vezir şah çeker ve e5 piyonu geri alır.',
      line: ['Bf6', 'gxf6', 'Qg4+', 'Kh7', 'exf6'],
      explanation: '**21.Bf6! gxf6 22.Qg4+ Kh7 23.exf6** ve Siyahın şahı matdan kurtulamaz (motor 23.exf6 sonrası 10 hamlede mat görüyor). Motor: Bf6 +5.3, sonraki en iyi hamle 21.f4 −2.5.',
      link: 'Portisch’in 22.Bf6 hamlesi gibi: e5 piyonunun desteklediği fil f6’ya gelir ve g7’yi açar.' },
    { id: 'ppe-4', kind: 'transfer', plan: false, title: 'Kale h-hattına',
      source: 'Spasski – Mititelu, Leningrad 1960 (20. hamle)',
      fen: 'r4rk1/pp1b1qp1/4p2p/3pP3/5PQ1/3BR3/P1P3PP/5RK1 w - - 5 20',
      prompt: 'Beyazın e5-f4 piyonları, g4’te veziri ve d3’te fili var. Kale e3’te. Siyah ...h6 oynamış. Beyaz saldırıya hangi taşı katar?',
      hint: 'Kale üçüncü yataydan h-hattına geçebilir; h6 piyonu hedef.',
      line: ['Rh3'],
      explanation: '**20.Rh3!** Kale h6 piyonuna saldırır ve Rxh6 tehdit eder; örneğin 20...a6 21.Rxh6 kazanır. Motor: Rh3 +4.8, sonraki en iyi hamle 20.Rg3 +3.1.',
      link: 'Portisch de kalesini f3’ten h3’e getirdi ve ...h6 piyonunu hedef aldı; e5-f4 kaması bu kale geçişini mümkün kılıyor.' },
  ],
};
