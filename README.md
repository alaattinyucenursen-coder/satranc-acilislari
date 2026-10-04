# Satranç Açılışları: Usta Maçlarıyla Çalışma

Belirli açılışları usta maçları üzerinden çalışmak için tarayıcıda çalışan bir program. Her maçta:

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
