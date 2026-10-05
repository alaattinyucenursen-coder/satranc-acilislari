# Satranç Açılışları: Usta Maçlarıyla Çalışma

Belirli açılışları (şimdilik Vezir Gambiti ve Nimzo-Hint Savunması) usta maçları üzerinden çalışmak için tarayıcıda çalışan bir program. Her maçta:

- iki tarafın genel planı,
- hamle hamle açıklama (Beyaz ve Siyah için ayrı ayrı),
- kritik anlar,
- maçtan akılda kalacaklar,
- tekrar alıştırmaları: aynı fikrin hem maçın kendisinde hem de başka bir ustanın maçında farklı şekilde uygulandığı pozisyonlar,
- tarayıcıda çalışan Stockfish 19 motoru (değerlendirme çubuğu, en iyi iki devam, ok ile en iyi hamle).

İnceleme sırasında maçtan farklı bir hamle oynarsanız deneme moduna geçilir; motor yeni pozisyonu değerlendirir.

## Modüller

### Vezir Gambiti (Beyazın kazandığı maçlar)

| Tema | Maç | Alıştırma kaynakları |
| --- | --- | --- |
| Pillsbury atağı (Ne5, f4-f5) | Pillsbury – Tarrasch, Hastings 1895 | Pillsbury – Marco, Paris 1900 |
| Slav değişim yapısı: at fedası ve geçer piyonlar | Capablanca – Lasker, New York 1924 | Botvinnik – Tal, 1961, 11. oyun |
| Azınlık saldırısı (b4-b5) | Smislov – Keres, Moskova 1948 | Petrosyan – Furman, 1959 |
| Merkez kırılması (Nge2, f3, e4) | Botvinnik – Keres, Moskova 1952 | Kasparov – Andersson, Belfort 1988 |
| Piyon merkezi ve h7 fedası | Polugayevski – Tal, Moskova 1969 | Spasski – Petrosyan, 1969, 5. oyun |
| Kabul edilmiş gambit: d5 kırılması | Petrosyan – Spasski, Moskova 1971 | Smislov – Karpov, 1971 |
| Asılı piyonlar ve f-hattı | Fischer – Spasski, Reykjavik 1972, 6. oyun | Karpov – Spasski, 1974 |
| Meran: e4-d5 ile merkez patlaması | Karpov – Tal, Bugojno 1980 | Karpov – Kramnik, 1994 |
| Tek kalmış piyona baskı (Tarrasch Savunması) | Karpov – Kasparov, 1984, 7. oyun | Karpov – Illescas, Leon 1993 |
| Cambridge Springs: asılı piyonlarla ilerleme | Kasparov – Smislov, Vilnius 1984, 3. oyun | Capablanca – Alekhine, 1927, 7. oyun |

### Nimzo-Hint Savunması (Beyazın kazandığı maçlar)

| Tema | Maç | Alıştırma kaynakları |
| --- | --- | --- |
| Kapalı merkez ve f4 kırılması (4.Qc2) | Rubinstein – Nimzowitsch, Berlin 1928 | Alekhine – Nimzowitsch, New York 1927; Mikenas – Tal, Erivan 1962 |
| Fil çifti ve merkezde kalan şah | Alekhine – Euwe, 1937, 8. oyun | Rubinstein – Nimzowitsch, Bad Kissingen 1928; Alekhine – Nimzowitsch, New York 1927 |
| İkiye katlanmış piyonlar ve e4 ilerleyişi | Botvinnik – Capablanca, AVRO 1938 | Lilienthal – Smislov, Pärnu 1947 |
| Fil çifti, c5 kırılması ve şah saldırısı | Botvinnik – Keres, Moskova 1948 | Carlsen – Ivanchuk, 2011 |
| Leningrad sistemi: d5 alanı ve e5 kırılması | Spasski – Smislov, Bükreş 1953 | Spasski – Keres, Riga 1965 |
| Rubinstein ana hattı: b-hattı ve fil çifti | Petrosyan – Spasski, 1966, 20. oyun | Bondarevski – Botvinnik, Moskova 1940; Petrosyan – Spasski, 1969, 10. oyun |
| Tek kalmış piyon: d5 kırılması | Kasparov – Karpov, 1985, 11. oyun | Polugayevski – Petrosyan, Leningrad 1960; Spasski – Petrosyan, 1975 |
| Tek kalmış piyonla saldırı: e6’da fil fedası | Kramnik – Kasparov, Londra 2000 | Polugayevski – Petrosyan, Leningrad 1960; Geller – Smislov, Moskova 1961 |
| Zayıf vezir kanadı piyonları ve yedinci yatay | Kramnik – Anand, Bonn 2008 | Kasparov – Karpov, 1985, 1. oyun |
| e4 ve d5 kırılmalarıyla merkezi açmak | Carlsen – Anand, Moskova 2013 | Spasski – Petrosyan, 1975; Aronian – Karpov, Hoogeveen 2003 |

Maç kayıtları [PgnMentor](https://www.pgnmentor.com/) oyuncu arşivlerinden alındı. Açıklamalardaki motor değerlendirmeleri ve alıştırma çözümleri Stockfish ile kontrol edildi.

## Çalıştırma

Motor bir Web Worker ve WebAssembly dosyası kullandığı için sayfa `file://` ile değil, bir web sunucusu üzerinden açılmalı:

```sh
python3 -m http.server 8000
# sonra tarayıcıda http://localhost:8000
```

GitHub Pages ile de yayınlanabilir (Ayarlar → Pages → `main` dalı, kök klasör).

## Veri doğrulama

```sh
node tools/check-data.mjs
```

Her PGN'in geçerli olduğunu, her yarım hamlenin açıklaması bulunduğunu, kritik anların maçta yer aldığını ve alıştırma hatlarının yasal olduğunu kontrol eder.

## Yeni açılış eklemek

`data/games/` altına aynı yapıda maç dosyaları ekleyin ve bunları içe aktaran yeni bir modül dosyası oluşturun (`data/vezir-gambiti.js` örneğine bakın).

## Lisanslar

- Stockfish.js 19 (`vendor/stockfish/`): GPLv3, `vendor/stockfish/COPYING.txt`
- chess.js (`vendor/chess.js`): BSD-2, `vendor/chess.js.LICENSE`
- Taş görselleri (`assets/pieces/cburnett/`): Lichess'in cburnett seti, Colin M.L. Burnett, GPLv2+
