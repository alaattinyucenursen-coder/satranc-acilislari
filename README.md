# Satranç Açılışları

Satranç açılışlarını varyantlarıyla çalışmak için veri ve (ileride) etkileşimli bir uygulama.

Plan:
1. **Varyant ağaçları**: açılışlar, ana varyantlar ve Türkçe hamle açıklamaları (bu depo, `data/`).
2. **Etkileşimli tahta**: ağaçta gezinme, hamle yapma, açıklamaları görme.
3. **Antrenman modu**: varyantları oynayıp doğru hamleyi tahmin etme.

## Mevcut açılışlar

Varyantlar oynanma sayısına göre sıralıdır (genel veritabanı). Sayılar `tools/oynanma-say.mjs` ile iki maç arşivinden hesaplanır:
- **Genel:** Her seviyeden turnuva maçları (rozim/ChessData mega-clean, 1086 bin maç)
- **Usta:** İki oyuncusu da en az 2600 Elo olan maçlar (rozim/ChessData mega2600, 138 bin maç)

Bir varyant, kendisini diğerlerinden ayıran hamleyle sayılır (tablodaki "Ayırt edici hamle"); farklı hamle sırasıyla aynı konuma gelen maçlar da sayılır. Oran, açılışın ortak başlangıç konumuna ulaşan maçlar içindeki paydır; Kan sayfasında yan yollar da olduğu için taban 1.e4 c5'tir.

### Sicilya Savunması: Alapin Varyantı (`data/sicilya-alapin.json`, `data/sicilya-alapin.pgn`)

Oranın tabanı: genel 17.623, usta 682 maç.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 2...Nf6: 5.Nf3 Nc6 6.Bc4 | B22 | 5.Nf3 | %15,2 · 2.683 | %7,2 · 49 |  |
| 2...d5: 5...Bg4 ana hattı | B22 | 5...Bg4 | %6,8 · 1.190 | %3,8 · 26 |  |
| 2...Nf6: 5.cxd4 d6 ana hattı | B22 | 5.cxd4 | %6,7 · 1.187 | %1,5 · 10 |  |
| 2...d5: 5...e6 ve izole piyon | B22 | 5...e6 | %5,4 · 955 | %10,1 · 69 |  |
| 2...e6: Fransız tarzı yapı | B22 | 4.exd5 | %5,1 · 894 | %3,5 · 24 |  |
| 2...d5: 4...Nc6 ve 8...Qa5 | B22 | 5...Bg4 | %4,2 · 733 | %1,2 · 8 |  |
| 2...d6: Ejderha tarzı kuruluş | B22 | 4.Bd3 | %3,9 · 678 | %2,8 · 19 |  |
| 2...g6: fiyanketto ve 4...d5 | B22 | 2...g6 | %3,5 · 623 | %0,73 · 5 |  |
| 2...e6 3.d4 d5 4.e5: Fransız ilerleme | B22 | 4.e5 | %2,9 · 511 | %1,0 · 7 |  |
| 2...Nf6: 4.Nf3 Nc6 5.Bc4 keskin hat | B22 | 5.Bc4 | %2,4 · 425 | %18,9 · 129 |  |
| 2...d5: 4...cxd4 5.cxd4 Nc6 6.Nf3 Bg4 (oyunsonu) | B22 | 4...cxd4 | %2,3 · 411 | %0,59 · 4 |  |
| 2...e5: kapalı yapı | B22 | 2...e5 | %2,1 · 368 | %1,2 · 8 |  |
| 2...d6 3.d4 Nf6 4.dxc5: keskin gambit | B22 | 4.dxc5 | %1,5 · 268 | %0,44 · 3 |  |
| 2...Nc6: 6...e5 hattı | B22 | 2...Nc6 | %1,5 · 268 | %0,15 · 1 |  |
| 2...d5: 4...g6 (Barmen) | B22 | 4...g6 | %1,5 · 265 | %2,0 · 14 |  |
| 2...d5: 4...Nc6 5.Nf3 cxd4 6.cxd4 e5 (Milner-Barry) | B22 | 5...cxd4 | %1,3 · 229 | %0,73 · 5 |  |
| 2...d5 3.exd5 Nf6: gambit fikri | B22 | 3...Nf6 | %0,47 · 82 | %3,4 · 23 |  |
| 2...d5 3.e5: Fransız ilerleme yapısı | B22 | 3.e5 | %0,28 · 50 | %0,00 · 0 |  |
| 2...Nf6: 4.Nf3 Nc6 5.Na3 (Heidenfeld) | B22 | 5.Na3 | %0,19 · 33 | %0,29 · 2 |  |

### Sicilya Savunması: Kan Varyantı (`data/sicilya-kan.json`, `data/sicilya-kan.pgn`)

Oranın tabanı: genel 224.695, usta 20.443 maç.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 2.Nc3: Kapalı Sicilya | B23 | 2.Nc3 | %9,8 · 22.125 | %6,3 · 1.287 |  |
| 5.Nc3 Qc7: Klasik gelişim | B43 | 5...Qc7 | %1,8 · 4.049 | %0,76 · 155 |  |
| 3.Nc3 a6 4.g3: kapalı düzen | B40 | 3.Nc3 | %1,4 · 3.137 | %0,88 · 180 |  |
| 3.d3: Kral Hint Saldırısı düzeni | B40 | 3.d3 | %1,2 · 2.603 | %0,71 · 145 |  |
| 2.f4: Grand Prix Saldırısı | B21 | 2.f4 | %1,1 · 2.454 | %0,09 · 19 |  |
| 5.Bd3 Bc5 (Polugaevsky) | B42 | 5...Bc5 | %0,74 · 1.667 | %1,2 · 246 |  |
| 3.b3: fiyanketto | B40 | 3.b3 | %0,55 · 1.241 | %0,69 · 142 |  |
| 5.Bd3 Nf6 6.O-O Qc7: Maróczy yapısı | B42 | 6...Qc7 | %0,42 · 934 | %0,24 · 49 |  |
| 5.Bd3 Nc6 6.Nxc6 dxc6 | B42 | 5...Nc6 | %0,26 · 587 | %0,02 · 4 |  |
| 5.c4 Nf6 6.Nc3 Bb4 (Bronstein) | B41 | 6...Bb4 | %0,18 · 407 | %0,35 · 72 |  |
| 5.Nc3 b5 6.Bd3 Qb6 (Kanat Saldırısı) | B43 | 7.Nb3 | %0,10 · 224 | %0,06 · 12 |  |
| 3.c3: Fransız ilerleme yapısı | B40 | 5.d4 | %0,09 · 203 | %0,11 · 22 |  |
| 2.d4: Smith-Morra Gambiti | B21 | 6...a6 | %0,08 · 190 | %0,00 · 1 |  |
| 5.c4: Kirpi (Hedgehog) yapısı | B41 | 7...b6 | %0,07 · 157 | %0,23 · 48 |  |
| 5.Bd3 Nf6 6.O-O d6 7.c4 g6 (Gipslis) | B42 | 7...g6 | %0,06 · 130 | %0,02 · 4 |  |
| 5.Nc3 b5 6.g3 (At Varyantı) | B43 | 6.g3 | %0,04 · 101 | %0,01 · 3 |  |
| Kanat Saldırısı: 7.Be3 Bc5 8.Nce2 | B43 | 7.Be3 | %0,03 · 74 | %0,02 · 5 |  |
| Tuzak: Sibirya Tuzağı (Smith-Morra) | B21 | 9.h3 | %0,00 · 7 | %0,00 · 0 | tuzak |

### Slav Savunması (`data/slav.json`, `data/slav.pgn`)

Oranın tabanı: genel 31.589, usta 7.756 maç.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Chebanenko Varyantı: 4...a6 | D15 | 4...a6 | %9,4 · 2.976 | %11,6 · 896 |  |
| Değişim: 8.Qb3 Bb4 (Trifunovic) | D14 | 4.cxd5 | %4,8 · 1.509 | %2,5 · 198 |  |
| 4.e3 Bf5 ve Nh4 ile fil avı | D11 | 5.Nc3 | %4,1 · 1.299 | %9,7 · 753 |  |
| Değişim Varyantı | D14 | 5.Bf4 | %2,9 · 922 | %3,4 · 264 |  |
| Krause: 6...Nbd7 (Carlsbad, Morozevich) | D17 | 6...Nbd7 | %2,8 · 877 | %4,3 · 331 |  |
| Schlechter Slav: 4...g6 | D15 | 4...g6 | %1,9 · 615 | %0,19 · 15 |  |
| Steiner Varyantı: 5...Bg4 | D16 | 5...Bg4 | %1,7 · 528 | %0,30 · 23 |  |
| Geller Gambiti: 5.e4 b5 | D15 | 5.e4 | %1,5 · 466 | %0,72 · 56 |  |
| Alekhine Varyantı: 5.e3 b5 | D15 | 5.e3 | %1,2 · 380 | %0,23 · 18 |  |
| Sakin Varyant: 5.cxd5 ve 6.Qb3 (Landau) | D12 | 5.cxd5 | %1,2 · 369 | %0,44 · 34 |  |
| Krause: 7...Bb4 fedası (Wiesbaden) | D17 | 7...Bb4 | %1,1 · 336 | %1,0 · 81 |  |
| Ana Hat (Çek Varyantı) | D19 | 9...Nbd7 | %0,75 · 238 | %0,35 · 27 |  |
| Smyslov Varyantı: 5...Na6 | D16 | 5...Na6 | %0,74 · 235 | %0,19 · 15 |  |
| Hollanda Varyantı: 9...Ne4 10.g4 (Sämisch) | D19 | 9...Ne4 | %0,32 · 101 | %0,23 · 18 |  |
| Ana hat: 6.Ne5 (Krause Saldırısı) | D17 | 7...c5 | %0,26 · 82 | %0,36 · 28 |  |
| Lasker Varyantı: 6.e3 Na6 | D17 | 6...Na6 | %0,12 · 38 | %0,00 · 0 |  |

### Smith-Morra Gambiti (`data/smith-morra.json`, `data/smith-morra.pgn`)

Oranın tabanı: genel 3.524, usta 30 maç.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Ret: 3...Nf6 (Alapin'e geçiş) | B21 | 3...Nf6 | %18,1 · 636 | %26,7 · 8 |  |
| Kabul: Klasik savunma (5...d6 ve ...e5) | B21 | 6...e6 | %16,3 · 575 | %13,3 · 4 |  |
| Ret: 3...d3 | B21 | 3...d3 | %10,3 · 364 | %20,0 · 6 |  |
| Ret: 3...d5 | B21 | 3...d5 | %8,2 · 290 | %3,3 · 1 |  |
| Tuzak: e5 ve Bxf7+ ile vezir kaybı | B21 | 4...d6 | %6,4 · 224 | %3,3 · 1 | tuzak |
| Fiyanketto Savunması: ...g6 | B21 | 5...g6 | %3,1 · 110 | %3,3 · 1 |  |
| Tuzak: 7.e5 Nxe5?? 9.Bxf7+ | B21 | 6...Nf6 | %2,9 · 101 | %0,00 · 0 | tuzak |
| Kabul: ...e6, ...a6 ve ...Nge7 düzeni | B21 | 7...Nge7 | %2,5 · 89 | %3,3 · 1 |  |
| Larsen Savunması: 6...Qc7 7.Qe2 a6 8.O-O Bd6 | B21 | 7.Qe2 | %1,7 · 60 | %0,00 · 0 |  |
| Açmaz Savunması: 6...Bb4 | B21 | 6...Bb4 | %1,1 · 40 | %0,00 · 0 |  |
| Gecikmeli Morphy Savunması: ...b5 ve ...Bc5 | B21 | 7...b5 | %0,82 · 29 | %0,00 · 0 |  |
| Ret: 3...e5 | B21 | 3...e5 | %0,65 · 23 | %0,00 · 0 |  |
| Chicago Savunması: ...b5 ve ...Ra7 | B21 | 9...Ra7 | %0,62 · 22 | %0,00 · 0 |  |
| Tuzak: Sibirya Tuzağı | B21 | 9.h3 | %0,20 · 7 | %0,00 · 0 | tuzak |
| Finegold Savunması: ...Be7 ve ...Nf6 | B21 | 8...Nf6 | %0,09 · 3 | %0,00 · 0 |  |

### Vezir Gambiti (`data/vezir-gambiti.json`, `data/vezir-gambiti.pgn`)

Oranın tabanı: genel 81.075, usta 17.187 maç.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Slav Savunması: Ana Hat (Çek Varyantı) | D19 | 5...Bf5 | %5,7 · 4.593 | %5,3 · 914 |  |
| Yarı-Slav: Meran Varyantı | D48 | 7...b5 | %4,1 · 3.349 | %3,2 · 551 |  |
| Alatortsev Varyantı (3...Be7) ve 7.g4 | D35 | 3...Be7 | %3,7 · 2.990 | %3,8 · 659 |  |
| Tarrasch Savunması: Ana Hat | D34 | 3...c5 | %3,4 · 2.764 | %1,1 · 192 |  |
| Reddedilmiş Vezir Gambiti: Tartakower Savunması | D58 | 7...b6 | %3,4 · 2.715 | %2,2 · 383 |  |
| Reddedilmiş Vezir Gambiti: 5.Bf4 (Harrwitz Saldırısı) | D37 | 5.Bf4 | %3,0 · 2.395 | %6,5 · 1.117 |  |
| Reddedilmiş Vezir Gambiti: Ragozin Savunması | D38 | 4...Bb4 | %2,7 · 2.219 | %9,3 · 1.591 |  |
| Chigorin Savunması (2...Nc6) | D07 | 2...Nc6 | %2,1 · 1.733 | %0,35 · 60 |  |
| Reddedilmiş Vezir Gambiti: Cambridge Springs Savunması | D52 | 6...Qa5 | %2,0 · 1.604 | %1,1 · 197 |  |
| Yarı-Slav: Moskova Varyantı | D43 | 5...h6 | %2,0 · 1.598 | %4,0 · 693 |  |
| Yarı-Tarrasch Savunması | D41 | 4...c5 | %1,8 · 1.458 | %4,5 · 779 |  |
| Yarı-Slav: Botvinnik Sistemi | D44 | 5...dxc4 | %1,7 · 1.346 | %0,98 · 168 |  |
| Reddedilmiş Vezir Gambiti: Viyana Varyantı | D39 | 4...dxc4 | %1,4 · 1.099 | %3,6 · 623 |  |
| Slav Savunması: Değişim Varyantı | D14 | 5.Bf4 | %1,1 · 922 | %1,5 · 264 |  |
| Değişim Varyantı: Nge2 ve f3 planı | D36 | 6.e3 | %1,1 · 854 | %3,2 · 546 |  |
| Kabul Edilmiş Vezir Gambiti: Klasik Varyant | D27 | 7.a4 | %0,92 · 746 | %0,26 · 45 |  |
| Kabul Edilmiş Vezir Gambiti: 7.Qe2 (Smyslov Varyantı) | D28 | 7.Qe2 | %0,89 · 724 | %0,27 · 46 |  |
| Reddedilmiş Vezir Gambiti: Lasker Savunması | D56 | 7...Ne4 | %0,89 · 719 | %1,0 · 174 |  |
| Albin Karşı Gambiti: Ana Hat | D09 | 5.g3 | %0,76 · 617 | %0,03 · 6 |  |
| Kabul Edilmiş Vezir Gambiti: Merkez Varyantı (3.e4) | D20 | 3...e5 | %0,71 · 573 | %1,4 · 239 |  |
| Reddedilmiş Vezir Gambiti: Ortodoks Savunma (Capablanca manevrası) | D67 | 9...Nd5 | %0,69 · 560 | %0,08 · 14 |  |
| Reddedilmiş Vezir Gambiti: Değişim Varyantı (azınlık saldırısı) | D36 | 6.Qc2 | %0,57 · 463 | %0,77 · 132 |  |
| Tuzak: Fil Tuzağı (Elephant Trap) | D51 | 6.Nxd5 | %0,04 · 35 | %0,00 · 0 | tuzak |
| Kabul Edilmiş Vezir Gambiti: 3.e4 b5 kalite fedası | D20 | 3...b5 | %0,04 · 30 | %0,25 · 43 |  |
| Tuzak: Lasker Tuzağı (Albin Karşı Gambiti) | D08 | 4.e3 | %0,02 · 20 | %0,00 · 0 | tuzak |
| Tuzak: Gambit piyonunu tutmaya çalışmak | D20 | 3...b5 | %0,02 · 15 | %0,02 · 3 | tuzak |

### Yarı-Slav Savunması (`data/yari-slav.json`, `data/yari-slav.pgn`)

Oranın tabanı: genel 33.110, usta 7.915 maç.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 5...Nbd7: Cambridge Springs'e geçiş | D52 | 5...Nbd7 | %4,1 · 1.344 | %4,4 · 349 |  |
| Noteboom Varyantı (Abrahams) | D31 | 4...dxc4 | %3,3 · 1.088 | %0,44 · 35 |  |
| Moskova Varyantı | D43 | 7.e3 | %2,4 · 805 | %4,1 · 326 |  |
| Botvinnik Sistemi | D44 | 9...hxg5 | %2,2 · 741 | %1,8 · 142 |  |
| Anti-Meran: 6.Qc2 | D45 | 7.Bd3 | %2,1 · 696 | %4,7 · 370 |  |
| Shabalov-Shirov Gambiti: 6.Qc2 Bd6 7.g4 | D45 | 7.g4 | %2,0 · 675 | %1,4 · 109 |  |
| Marshall Gambiti: 4.e4 | D31 | 4.e4 | %1,9 · 631 | %0,91 · 72 |  |
| Meran Varyantı | D48 | 9.O-O | %1,8 · 580 | %1,4 · 112 |  |
| Anti-Moskova Gambiti | D43 | 6.Bh4 | %1,7 · 574 | %3,8 · 297 |  |
| Meran: 8...a6 9.e4 c5 10.d5 (Reynolds) | D48 | 10.d5 | %1,3 · 425 | %0,44 · 35 |  |
| Meran: 8...Bb7 (Wade) ve 12.O-O (Kaidanov) | D47 | 9.e4 | %1,2 · 415 | %0,85 · 67 |  |
| Meran: 10.e5 cxd4 11.Nxb5 (Blumenfeld, Rellstab) | D49 | 11.Nxb5 | %1,1 · 346 | %0,51 · 40 |  |
| Meran: 8...b4 (Lundin) | D47 | 8...b4 | %0,83 · 276 | %0,77 · 61 |  |
| Meran: 8...Bd6 (Chigorin) | D46 | 8...Bd6 | %0,50 · 167 | %1,2 · 97 |  |
| Botvinnik: 9.exf6 (Ekström) | D44 | 9.exf6 | %0,45 · 149 | %0,05 · 4 |  |
| Moskova: 7.Qb3 (Hastings) | D43 | 7.Qb3 | %0,37 · 123 | %0,62 · 49 |  |
| Stoltz: 7.e4 merkez varyantı | D45 | 7.e4 | %0,36 · 118 | %0,14 · 11 |  |
| Botvinnik: 9...Nd5 (Alatortsev) | D44 | 9...Nd5 | %0,17 · 55 | %0,01 · 1 |  |

### İspanyol Açılışı (Ruy Lopez) (`data/ispanyol.json`, `data/ispanyol.pgn`)

Oranın tabanı: genel 48.186, usta 13.585 maç.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Modern Arkhangelsk: 5...b5 6.Bb3 Bc5 | C78 | 5...b5 | %7,7 · 3.694 | %4,5 · 618 |  |
| Kapalı İspanyol: Chigorin Varyantı | C97 | 9...Na5 | %5,6 · 2.707 | %2,7 · 361 |  |
| Schliemann (Jaenisch) Gambiti | C63 | 3...f5 | %4,9 · 2.379 | %0,96 · 130 |  |
| Klasik (Cordel) Savunma: 3...Bc5 | C64 | 3...Bc5 | %3,6 · 1.732 | %0,52 · 71 |  |
| Değişim Varyantı | C69 | 5...f6 | %2,6 · 1.258 | %0,71 · 97 |  |
| Berlin Savunması: Berlin Duvarı | C67 | 8.Qxd8+ | %2,5 · 1.189 | %8,6 · 1.162 |  |
| Anti-Marshall: 8.a4 | C88 | 8.a4 | %2,4 · 1.162 | %3,6 · 491 |  |
| Kapalı İspanyol: Zaitsev Varyantı | C92 | 9...Bb7 | %2,4 · 1.138 | %2,5 · 346 |  |
| Kapalı İspanyol: Breyer Varyantı | C95 | 9...Nb8 | %2,3 · 1.128 | %3,5 · 479 |  |
| Gecikmeli Steinitz Savunması: 4...d6 5.c3 | C74 | 5.c3 | %2,2 · 1.083 | %1,1 · 150 |  |
| Anti-Berlin: 4.d3 | C65 | 4.d3 | %2,0 · 966 | %16,3 · 2.212 |  |
| Bird Savunması: 3...Nd4 | C61 | 3...Nd4 | %1,9 · 936 | %0,15 · 21 |  |
| Anti-Marshall: 8.h3 | C88 | 8.h3 | %1,8 · 888 | %3,3 · 453 |  |
| Marshall Saldırısı: Ana Hat | C89 | 8...d5 | %1,6 · 787 | %2,9 · 390 |  |
| Değişim Varyantı: 5...Bg4 | C69 | 5...Bg4 | %1,5 · 734 | %0,54 · 74 |  |
| Açık İspanyol: Karpov'un 11.Ng5 hamlesi | C82 | 9.Nbd2 | %1,5 · 716 | %2,1 · 284 |  |
| Worrall Saldırısı: 6.Qe2 | C86 | 6.Qe2 | %1,2 · 598 | %0,31 · 42 |  |
| Kapalı İspanyol: Karpov (Keres) Varyantı 9...Nd7 | C92 | 9...Nd7 | %0,91 · 439 | %0,54 · 73 |  |
| Kapalı İspanyol: Smyslov Varyantı 9...h6 | C93 | 9...h6 | %0,77 · 369 | %0,17 · 23 |  |
| Açık İspanyol: Dilworth Saldırısı | C83 | 11...Nxf2 | %0,11 · 52 | %0,21 · 29 |  |
| Tuzak: Nuh'un Gemisi Tuzağı | C71 | 8.Qxd4 | %0,02 · 12 | %0,01 · 1 | tuzak |

## Dosyalar

- `data/kaynak/<açılış>.json`: **elle düzenlenen kaynak**. Her varyant hamle dizisi olarak yazılır; açıklamalar `"4...e6"` gibi hamle etiketleriyle eşlenir. Ortak hamlelerin açıklaması tek bir varyantta yazılması yeterli.
- `data/<açılış>.json`: üretilen varyant ağacı (tahta ve antrenman modu bunu okur).
- `data/<açılış>.pgn`: üretilen PGN, her varyant ayrı bir oyun. Lichess'te "Çalışma > PGN içe aktar" ile bölümler halinde açılabilir.
- `data/acilislar.json`: üretilen açılış listesi (uygulama hangi açılışların olduğunu buradan okur).
- `data/oynanma.json`: üretilen oynanma sayıları (veritabanı → açılış → varyant: maç sayısı, oran, ayırt edici hamle). `npm run build` varyantları buna göre sıralar ve sayıları `data/<açılış>.json` içindeki her varyanta `played` olarak ekler.
- `tools/oynanma-say.mjs`: PGN arşivinden oynanma sayılarını hesaplar: `node tools/oynanma-say.mjs --ad genel --kaynak "Açıklama" oyunlar.pgn`, ardından `npm run build`.
- `tools/build-openings.mjs`: kaynakları okur, her hamleyi [chess.js](https://github.com/jhlywa/chess.js) ile doğrular, çıktıları üretir.

```sh
npm install
npm run build   # doğrula ve data/*.json + data/*.pgn üret
npm run check   # yalnızca doğrula
```

Kaynağı değiştirdikten sonra `npm run build` çalıştır; geçersiz hamle, yanlış yazılmış SAN, varyantta geçmeyen bir açıklama etiketi ya da iki varyantın aynı hamleye farklı açıklama vermesi hata verir.

## Ağaç biçimi (`data/<açılış>.json`)

```jsonc
{
  "id": "vezir-gambiti",
  "name": "Vezir Gambiti",
  "eco": "D06-D69",
  "description": "...",
  "startFen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  "lines": [                       // antrenman modu için: her varyant baştan sona
    {
      "id": "ret-ortodoks",
      "group": "Reddedilmiş Vezir Gambiti", // listede gruplamak için
      "name": "Reddedilmiş Vezir Gambiti: Ortodoks Savunma ...",
      "eco": "D67",
      "trap": false,               // true: tuzak varyantı
      "moves": ["d4", "d5", "c4", ...],
      "leaf": "d2d4.d7d5.c2c4...", // varyantın son düğümünün id'si
      "played": {                  // isteğe bağlı: data/oynanma.json varsa
        "genel": { "mac": 2395, "oran": 2.95, "hamle": "5.Bf4" },
        "usta": { "mac": 1117, "oran": 6.5, "hamle": "5.Bf4" }
      }
    }
  ],
  "tree": {                        // tahta için: kök = başlangıç konumu
    "id": "root",
    "fen": "...",
    "children": [
      {
        "id": "d2d4",              // kökten bu düğüme UCI hamleleri, noktayla ayrılmış (kalıcı)
        "ply": 1,                  // yarım hamle sayısı
        "moveNumber": 1,
        "color": "w",              // hamleyi yapan taraf
        "san": "d4",
        "uci": "d2d4",
        "fen": "...",              // hamleden sonraki konum
        "comment": "Türkçe açıklama (isteğe bağlı)",
        "symbol": "??",            // isteğe bağlı: ! ? !! ?? !? ?!
        "opening": { "name": "Reddedilmiş Vezir Gambiti", "eco": "D30" }, // isteğe bağlı: bu hamleyle başlayan açılış adı
        "children": [ ... ]        // ilk çocuk ana devam
      }
    ]
  }
}
```

Düğüm id'leri hamle yolundan türetildiği için kaynağa yeni varyant eklenince mevcut id'ler değişmez; antrenman ilerlemesi bunlara göre saklanabilir.
