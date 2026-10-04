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

Her maç tek bir varyanta sayılır: kendisini diğerlerinden ayıran hamleyle (tablodaki "Ayırt edici hamle"); farklı hamle sırasıyla aynı konuma gelen maçlar da sayılır. Oran, açılışın listedeki varyantlarına giren maçlar içindeki paydır, yani bir açılışın oranlarının toplamı %100'dür. Listede olmayan bir yola giden maçlar sayılmaz.

### Alekhine Savunması (`data/alekhine.json`, `data/alekhine.pgn`)

Varyantlara giren maç: genel 9.204, usta 430.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 2.Nc3 d5 3.exd5 | B02 | 2...d5 | %20,6 · 1.899 | %8,8 · 38 |  |
| 4...g6 Alburt Varyantı | B05 | 4...g6 | %13,6 · 1.251 | %11,6 · 50 |  |
| 5.exd6 cxd6 | B03 | 5...cxd6 | %11,0 · 1.010 | %3,0 · 13 |  |
| 5.exd6 exd6 | B03 | 5...exd6 | %8,9 · 823 | %13,7 · 59 |  |
| 4...Bg4 5.Be2 c6 | B05 | 5...c6 | %7,7 · 712 | %0,23 · 1 |  |
| 5...dxe5 6.fxe5 Nc6 ana hattı | B03 | 6...Nc6 | %6,6 · 607 | %2,3 · 10 |  |
| 4...Bg4: 7.c4 ve gxf3 yapısı | B05 | 7.c4 | %6,0 · 548 | %1,6 · 7 |  |
| 2.Nc3 e5: Viyana/Dört At yapısı | C47 | 2...e5 | %5,7 · 524 | %5,3 · 23 |  |
| 5.Bc4 e6 6.Nc3 | B02 | 5.Bc4 | %3,1 · 288 | %0,00 · 0 |  |
| 4...Nb6 5.a4 | B04 | 4...Nb6 | %3,0 · 277 | %0,47 · 2 |  |
| 4...Nc6 5.c4 Nb6 6.e6 | B04 | 4...Nc6 | %2,7 · 246 | %0,93 · 4 |  |
| 4...dxe5 5.Nxe5 c6 | B05 | 5...c6 | %2,4 · 216 | %39,5 · 170 |  |
| 5.Nc3 Nxc3 6.dxc3 | B02 | 5.Nc3 | %2,3 · 214 | %0,23 · 1 |  |
| 4...Bg4: 7.h3 ve 8.c4 ana hattı | B05 | 7.h3 | %2,2 · 200 | %1,4 · 6 |  |
| 5...dxe5 6.fxe5 Bf5 | B03 | 6...Bf5 | %1,7 · 157 | %9,5 · 41 |  |
| 4...dxe5 5.Nxe5 Nd7?! 6.Nxf7! | B04 | 5...Nd7 | %1,3 · 116 | %0,47 · 2 | tuzak |
| 5...g6 fiyanketto | B03 | 5...g6 | %0,97 · 89 | %0,70 · 3 |  |
| 2...Ne4?! ve atın hapsi | B02 | 2...Ne4 | %0,29 · 27 | %0,00 · 0 | tuzak |

### Caro-Kann Savunması (`data/caro-kann.json`, `data/caro-kann.pgn`)

Varyantlara giren maç: genel 18.315, usta 2.585.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Panov: 5...e6 ve izole piyon | B14 | 5...e6 | %16,4 · 2.998 | %6,2 · 160 |  |
| Değişim: 4.Bd3 ve Bf4 | B13 | 4.Bd3 | %12,2 · 2.228 | %12,1 · 312 |  |
| 5...gxf6 Bronstein-Larsen | B16 | 5...gxf6 | %9,1 · 1.669 | %1,0 · 26 |  |
| İki At Varyantı: 2.Nc3 d5 3.Nf3 | B11 | 3.Nf3 | %8,8 · 1.612 | %11,7 · 303 |  |
| Klasik ana hat: h4-h5 ve uzun rok | B19 | 10...e6 | %8,0 · 1.463 | %11,1 · 288 |  |
| Panov: 5...Nc6 6.Nf3 Bg4 keskin hat | B13 | 5...Nc6 | %7,8 · 1.432 | %6,3 · 162 |  |
| 5.Bc4 ve Ng5 | B17 | 5.Bc4 | %6,6 · 1.210 | %3,2 · 83 |  |
| 4.Nc3 e6 5.g4 Bayonet saldırısı | B12 | 5.g4 | %5,8 · 1.053 | %3,4 · 88 |  |
| 5.Ng5 ana hattı | B17 | 5.Ng5 | %5,0 · 907 | %5,3 · 138 |  |
| Fantezi Varyantı: 3.f3 | B12 | 3.f3 | %4,2 · 778 | %4,4 · 113 |  |
| 5...exf6 Tartakower | B15 | 5...exf6 | %4,2 · 769 | %6,0 · 155 |  |
| 3...c5 | B12 | 3...c5 | %3,4 · 615 | %9,2 · 239 |  |
| Short sistemi: 5...Nd7 ve Nh4 | B12 | 5...Nd7 | %3,0 · 542 | %7,9 · 204 |  |
| Klasik: 10...Qc7 ve karşılıklı uzun rok | B19 | 10...Qc7 | %3,0 · 540 | %0,35 · 9 |  |
| Short sistemi: 5...c5 | B12 | 5...c5 | %2,5 · 456 | %11,8 · 305 |  |
| Karpov: 5.Qe2 Ngf6?? 6.Nd6# | B17 | 5.Qe2 | %0,23 · 43 | %0,00 · 0 | tuzak |

### Fransız Savunması (`data/fransiz.json`, `data/fransiz.pgn`)

Varyantlara giren maç: genel 39.846, usta 3.108.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Tarrasch: 3...Nf6 4.e5 Nfd7 | C06 | 3...Nf6 | %19,2 · 7.636 | %3,3 · 102 |  |
| Değişim: 4.c4 | C01 | 3.exd5 | %13,0 · 5.188 | %8,3 · 257 |  |
| Şah Hint Atağı: 2.d3 | C00 | 2.d3 | %12,6 · 5.014 | %5,2 · 163 |  |
| Klasik: 4.e5 Nfd7 5.f4 Steinitz | C11 | 5.f4 | %6,6 · 2.639 | %22,8 · 709 |  |
| Rubinstein: 4...Nd7 | C10 | 3...dxe4 | %6,4 · 2.556 | %11,2 · 348 |  |
| İlerleme: 5...Qb6 6.a3 | C02 | 6.a3 | %5,4 · 2.152 | %4,5 · 140 |  |
| Tarrasch: 4...exd5 izole piyon | C09 | 4...exd5 | %5,1 · 2.029 | %4,1 · 128 |  |
| Klasik: 4.Bg5 dxe4 Burn Varyantı | C11 | 4...dxe4 | %5,1 · 2.028 | %12,6 · 392 |  |
| İlerleme: 5...Bd7 6.Be2 ve Na3-c2 | C02 | 5...Bd7 | %4,5 · 1.792 | %6,4 · 199 |  |
| McCutcheon: 4.Bg5 Bb4 | C12 | 4...Bb4 | %4,0 · 1.611 | %2,2 · 69 |  |
| Winawer: 4...Ne7 ve ...b6 | C16 | 4...Ne7 | %4,0 · 1.605 | %2,7 · 83 |  |
| Tarrasch: 3...c5 4.exd5 Qxd5 | C07 | 4...Qxd5 | %3,8 · 1.499 | %7,0 · 216 |  |
| Tarrasch: 3...Be7 | C03 | 3...Be7 | %2,8 · 1.106 | %3,7 · 114 |  |
| Winawer: 7.Qg4 O-O | C18 | 7...O-O | %2,5 · 980 | %2,3 · 71 |  |
| Winawer: 5...Ba5 6.b4 | C17 | 5...Ba5 | %2,3 · 934 | %2,7 · 83 |  |
| Winawer: 7.Qg4 Qc7 Zehirli Piyon | C18 | 8.Qxg7 | %1,9 · 778 | %0,93 · 29 |  |
| Milner-Barry Gambiti | C02 | 8.O-O | %0,75 · 298 | %0,16 · 5 |  |
| İlerleme: 7...Nxd4?? 9.Bb5+! vezir kazanır | C02 | 7...Nxd4 | %0,00 · 1 | %0,00 · 0 | tuzak |

### Modern Savunma (`data/modern.json`, `data/modern.pgn`)

Varyantlara giren maç: genel 10.495, usta 540.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 3.Nc3 c6 4.f4 d5 5.e5 h5: Kapalı merkez | B06 | 3...c6 | %27,0 · 2.838 | %24,6 · 133 |  |
| 4.Nf3 a6 5.a4: Sağlam gelişim | B06 | 4.Nf3 | %12,4 · 1.304 | %12,8 · 69 |  |
| 3.c4 d6 4.Nc3 Nc6 5.Be3 e5 6.d5: Kapalı merkez | B06 | 4...Nc6 | %11,7 · 1.227 | %8,3 · 45 |  |
| 2...d6 3.Nc3 c6 4.f4: …Qb6 fikri | B06 | 2...d6 | %11,2 · 1.176 | %16,3 · 88 |  |
| 4.Be3 c6 5.Qd2 b5 6.Bd3: Bh6 ile fil değişimi | B06 | 4...c6 | %8,6 · 899 | %6,7 · 36 |  |
| 3.c4 d6 4.Nc3 e5 5.Nf3 exd4 | B06 | 4...e5 | %7,3 · 764 | %8,0 · 43 |  |
| 2...c6 3.Nc3 d5 4.h3: Caro-Kann benzeri | B06 | 2...c6 | %6,6 · 689 | %2,8 · 15 |  |
| 4.Be3 Nf6 5.f3: 150 Saldırısı yapısı | B07 | 4...Nf6 | %6,4 · 667 | %3,3 · 18 |  |
| 4.f4 a6 5.Nf3 b5 6.Bd3: e5 ile alan | B06 | 4...a6 | %3,2 · 335 | %5,4 · 29 |  |
| 4.Be3 a6 5.Qd2 b5 6.f3: Uzun rok ve h-piyonu saldırısı | B06 | 5...b5 | %3,0 · 320 | %9,3 · 50 |  |
| 4.Be3 a6 5.Qd2 Nd7 6.f4: Geniş merkez | B06 | 5...Nd7 | %2,1 · 223 | %2,6 · 14 |  |
| 3...c5 4.dxc5 Qa5 5.Bd2: Ana hat | B06 | 6...Na6 | %0,26 · 27 | %0,00 · 0 |  |
| 4.f4 c5: Pterodactyl fikirleri | B06 | 4...c5 | %0,24 · 25 | %0,00 · 0 |  |
| Tuzak: 6...Bxb2?? ve vezir kapanı | B06 | 6...Bxb2 | %0,01 · 1 | %0,00 · 0 | tuzak |

### Nimzo-Hint Savunması (`data/nimzo-hint.json`, `data/nimzo-hint.pgn`)

Varyantlara giren maç: genel 15.753, usta 2.572.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 4...c5 5.dxc5 O-O: Erken vezir değişimi | E39 | 4...c5 | %16,5 · 2.599 | %7,5 · 193 |  |
| 4...b6: Fiyanketto kuruluşu | E43 | 4...b6 | %13,2 · 2.084 | %5,6 · 145 |  |
| 4...O-O 5.a3 Bxc3+ 6.Qxc3 b6: 7.Bg5 ve 8.f3 | E32 | 6...b6 | %12,1 · 1.899 | %14,5 · 372 |  |
| 4.f3 d5 5.a3: Sämisch'e geçiş | E20 | 4.f3 | %9,8 · 1.546 | %13,4 · 345 |  |
| 4.Bg5 h6 5.Bh4 c5 6.d5 | E31 | 4.Bg5 | %9,1 · 1.435 | %1,6 · 40 |  |
| 4.a3 Sämisch: Capablanca kuruluşu | E29 | 4.a3 | %8,3 · 1.303 | %4,0 · 104 |  |
| Ana hat: 7...Nc6 8.a3 Bxc3 9.bxc3 | E59 | 7...Nc6 | %6,3 · 994 | %4,3 · 110 |  |
| 4.Nf3 b6 5.Bg5 | E21 | 4...b6 | %4,9 · 771 | %11,7 · 302 |  |
| 4.Nf3 c5 5.g3: Romanishin Varyantı | E20 | 5.g3 | %4,1 · 642 | %8,6 · 221 |  |
| Karpov yapısı: 7...dxc4 8.Bxc4 cxd4 9.exd4 b6 | E54 | 9...b6 | %3,5 · 553 | %7,8 · 201 |  |
| 4...d5 5.cxd5 exd5: Azınlık saldırısı yapısı | E35 | 5...exd5 | %3,4 · 541 | %6,7 · 172 |  |
| 4.g3 Kasparov Varyantı | E20 | 4.g3 | %3,4 · 530 | %3,4 · 88 |  |
| 4...c5 Hübner Varyantı | E41 | 7...d6 | %3,2 · 504 | %1,4 · 35 |  |
| 4.Qb3 Spielmann Varyantı | E23 | 4.Qb3 | %2,0 · 315 | %0,43 · 11 |  |
| 4...O-O 5.a3 Bxc3+ 6.Qxc3 d5 | E36 | 6...d5 | %0,23 · 37 | %9,1 · 233 |  |

### Petrov (Rus) Savunması (`data/petrov.json`, `data/petrov.pgn`)

Varyantlara giren maç: genel 7.992, usta 2.217.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 3.d4 Nxe4 4.Bd3 d5 5.Nxe5 | C43 | 3...Nxe4 | %19,0 · 1.516 | %22,4 · 497 |  |
| 3.Nc3 Nc6 4.Bb5: İspanyol Dört At | C49 | 4...Bb4 | %15,6 · 1.245 | %7,4 · 164 |  |
| 6...Bd6: aktif fil | C42 | 6...Bd6 | %10,7 · 851 | %14,4 · 320 |  |
| 5.Qe2: vezir değişimi ve uzun rok | C42 | 5.Qe2 | %10,3 · 827 | %4,4 · 97 |  |
| 5.Nc3 Nxc3 6.dxc3 Be7: zıt rok planı | C42 | 6...Be7 | %9,4 · 748 | %21,7 · 481 |  |
| 6...Nc6 7.O-O Be7 8.c4 Nb4: Jaenisch Varyantı | C42 | 8...Nb4 | %8,9 · 708 | %13,3 · 294 |  |
| 6...Be7: sade gelişim | C42 | 6...Be7 | %5,7 · 452 | %4,5 · 99 |  |
| 8.Re1 Bg4 9.c3 f5: klasik sistem | C42 | 8.Re1 | %5,5 · 442 | %4,8 · 107 |  |
| 3.d4 exd4 4.e5 Ne4 5.Qxd4 | C43 | 3...exd4 | %5,5 · 439 | %1,4 · 30 |  |
| 5.c4: Kaufmann Hücumu | C42 | 5.c4 | %2,9 · 234 | %1,3 · 28 |  |
| 8.c4 Nf6: geri çekilme ve izole piyon | C42 | 8...Nf6 | %2,4 · 190 | %1,9 · 42 |  |
| 3.Nxe5 d6 4.Nxf7: Cochrane Gambiti | C42 | 4.Nxf7 | %2,3 · 185 | %0,23 · 5 |  |
| 3...Nxe4 4.Qe2 Qe7: siyahın en iyi savunması | C42 | 4...Qe7 | %0,99 · 79 | %1,2 · 27 |  |
| 6...Nc6 ve iki taraf da uzun rok | C42 | 6...Nc6 | %0,84 · 67 | %1,1 · 25 |  |
| 3...Nxe4? 4.Qe2 Nf6?? 5.Nc6+: vezir kaybı | C42 | 4...Nf6 | %0,06 · 5 | %0,00 · 0 | tuzak |
| Stafford: 5.d3 Bc5 6.Be2! ile güvenli savunma | C42 | 6.Be2 | %0,04 · 3 | %0,05 · 1 |  |
| Stafford: 6.Bg5?? Nxe4! ve mat | C42 | 6.Bg5 | %0,01 · 1 | %0,00 · 0 | tuzak |

### Pirc Savunması (`data/pirc.json`, `data/pirc.pgn`)

Varyantlara giren maç: genel 11.013, usta 647.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 4.Nf3 Nbd7: Hanham kuruluşu | C41 | 4...Nbd7 | %19,3 · 2.126 | %44,7 · 289 |  |
| 4.Bg5 Bg7 5.Qd2: uzun rok planı | B07 | 4.Bg5 | %11,2 · 1.236 | %8,7 · 56 |  |
| 5...c5 6.Bb5+: keskin ana hat | B09 | 5...c5 | %10,8 · 1.188 | %8,0 · 52 |  |
| 6...c6 7.a4: vezir kanadını kısıtlama | B08 | 6...c6 | %10,7 · 1.180 | %9,0 · 58 |  |
| 6...Bg4 7.Be3 Nc6: …e5 planı | B08 | 6...Bg4 | %8,2 · 901 | %4,3 · 28 |  |
| 3...c6 4.f4 Qa5: e4 üzerinde baskı | B07 | 4.f4 | %8,1 · 891 | %1,7 · 11 |  |
| 4.dxe5: vezirsiz oyun | C41 | 4.dxe5 | %6,7 · 732 | %9,4 · 61 |  |
| 6.Bd3 Nc6 7.e5: merkez ilerleyişi | B09 | 6...Nc6 | %6,6 · 730 | %3,1 · 20 |  |
| 5...O-O 6.Bd3 Na6: …c5 hazırlığı | B09 | 6...Na6 | %5,3 · 582 | %5,4 · 35 |  |
| 3...c6 4.Nf3 Bg4: sakin yol | B07 | 4.Nf3 | %5,0 · 554 | %1,6 · 10 |  |
| 4...Bg7 5.Qd2 c6 6.Bh6: fil değişimi | B07 | 5...c6 | %2,2 · 242 | %2,2 · 14 |  |
| 4...c6 5.Qd2 b5 6.Bd3: sağlam kuruluş | B07 | 6.Bd3 | %1,9 · 213 | %0,77 · 5 |  |
| 4...c6 5.Qd2 b5 6.f3: piyon yürüyüşü | B07 | 6.f3 | %1,3 · 143 | %0,31 · 2 |  |
| 5...O-O 6.O-O-O: klasik saldırı | B07 | 5...O-O | %1,1 · 118 | %0,46 · 3 |  |
| 5...Ng4: filin peşine düşen at | B07 | 5...Ng4 | %0,84 · 92 | %0,46 · 3 |  |
| 4.Bc4 Bg7 5.Qe2: e5 ilerleyişi | B07 | 5...c6 | %0,77 · 85 | %0,00 · 0 |  |
| Tuzak: 5...Nxe4? çatal hilesi işe yaramaz | B07 | 5...Nxe4 | %0,00 · 0 | %0,00 · 0 | tuzak |

### Sicilya Savunması: Alapin Varyantı (`data/sicilya-alapin.json`, `data/sicilya-alapin.pgn`)

Varyantlara giren maç: genel 11.826, usta 405.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 2...Nf6: 5.Nf3 Nc6 6.Bc4 | B22 | 5.Nf3 | %22,7 · 2.683 | %12,1 · 49 |  |
| 2...d5: 5...Bg4 ana hattı | B22 | 5...Bg4 | %10,1 · 1.190 | %6,4 · 26 |  |
| 2...Nf6: 5.cxd4 d6 ana hattı | B22 | 5.cxd4 | %10,0 · 1.187 | %2,5 · 10 |  |
| 2...d5: 5...e6 ve izole piyon | B22 | 5...e6 | %8,1 · 955 | %17,0 · 69 |  |
| 2...e6: Fransız tarzı yapı | B22 | 4.exd5 | %7,6 · 894 | %5,9 · 24 |  |
| 2...d5: 4...Nc6 ve 8...Qa5 | B22 | 5...Bg4 | %6,2 · 733 | %2,0 · 8 |  |
| 2...d6: Ejderha tarzı kuruluş | B22 | 4.Bd3 | %5,7 · 678 | %4,7 · 19 |  |
| 2...g6: fiyanketto ve 4...d5 | B22 | 2...g6 | %5,3 · 623 | %1,2 · 5 |  |
| 2...e6 3.d4 d5 4.e5: Fransız ilerleme | B22 | 4.e5 | %4,3 · 511 | %1,7 · 7 |  |
| 2...Nf6: 4.Nf3 Nc6 5.Bc4 keskin hat | B22 | 5.Bc4 | %3,6 · 425 | %31,9 · 129 |  |
| 2...d5: 4...cxd4 5.cxd4 Nc6 6.Nf3 Bg4 (oyunsonu) | B22 | 4...cxd4 | %3,5 · 411 | %0,99 · 4 |  |
| 2...e5: kapalı yapı | B22 | 2...e5 | %3,1 · 368 | %2,0 · 8 |  |
| 2...d6 3.d4 Nf6 4.dxc5: keskin gambit | B22 | 4.dxc5 | %2,3 · 268 | %0,74 · 3 |  |
| 2...d5: 4...g6 (Barmen) | B22 | 4...g6 | %2,2 · 265 | %3,5 · 14 |  |
| 2...Nc6: 6...e5 hattı | B22 | 2...Nc6 | %2,1 · 248 | %0,00 · 0 |  |
| 2...d5: 4...Nc6 5.Nf3 cxd4 6.cxd4 e5 (Milner-Barry) | B22 | 5...cxd4 | %1,9 · 229 | %1,2 · 5 |  |
| 2...d5 3.exd5 Nf6: gambit fikri | B22 | 3...Nf6 | %0,63 · 75 | %5,7 · 23 |  |
| 2...d5 3.e5: Fransız ilerleme yapısı | B22 | 3.e5 | %0,42 · 50 | %0,00 · 0 |  |
| 2...Nf6: 4.Nf3 Nc6 5.Na3 (Heidenfeld) | B22 | 5.Na3 | %0,28 · 33 | %0,49 · 2 |  |

### Sicilya Savunması: Kan Varyantı (`data/sicilya-kan.json`, `data/sicilya-kan.pgn`)

Varyantlara giren maç: genel 39.471, usta 2.350.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 2.Nc3: Kapalı Sicilya | B23 | 2.Nc3 | %55,6 · 21.929 | %53,9 · 1.266 |  |
| 5.Nc3 Qc7: Klasik gelişim | B43 | 5...Qc7 | %10,3 · 4.049 | %6,6 · 155 |  |
| 3.d3: Kral Hint Saldırısı düzeni | B40 | 3.d3 | %6,6 · 2.603 | %6,2 · 145 |  |
| 3.Nc3 a6 4.g3: kapalı düzen | B40 | 3.Nc3 | %6,4 · 2.514 | %6,7 · 157 |  |
| 2.f4: Grand Prix Saldırısı | B21 | 2.f4 | %6,2 · 2.454 | %0,81 · 19 |  |
| 5.Bd3 Bc5 (Polugaevsky) | B42 | 5...Bc5 | %4,2 · 1.667 | %10,5 · 246 |  |
| 3.b3: fiyanketto | B40 | 3.b3 | %3,1 · 1.241 | %6,0 · 142 |  |
| 5.Bd3 Nf6 6.O-O Qc7: Maróczy yapısı | B42 | 6...Qc7 | %2,4 · 934 | %2,1 · 49 |  |
| 5.Bd3 Nc6 6.Nxc6 dxc6 | B42 | 5...Nc6 | %1,5 · 587 | %0,17 · 4 |  |
| 5.c4 Nf6 6.Nc3 Bb4 (Bronstein) | B41 | 6...Bb4 | %1,0 · 407 | %3,1 · 72 |  |
| 5.Nc3 b5 6.Bd3 Qb6 (Kanat Saldırısı) | B43 | 7.Nb3 | %0,57 · 224 | %0,51 · 12 |  |
| 3.c3: Fransız ilerleme yapısı | B40 | 5.d4 | %0,51 · 203 | %0,94 · 22 |  |
| 2.d4: Smith-Morra Gambiti | B21 | 6...a6 | %0,48 · 190 | %0,04 · 1 |  |
| 5.c4: Kirpi (Hedgehog) yapısı | B41 | 7...b6 | %0,40 · 157 | %2,0 · 48 |  |
| 5.Bd3 Nf6 6.O-O d6 7.c4 g6 (Gipslis) | B42 | 7...g6 | %0,33 · 130 | %0,17 · 4 |  |
| 5.Nc3 b5 6.g3 (At Varyantı) | B43 | 6.g3 | %0,26 · 101 | %0,13 · 3 |  |
| Kanat Saldırısı: 7.Be3 Bc5 8.Nce2 | B43 | 7.Be3 | %0,19 · 74 | %0,21 · 5 |  |
| Tuzak: Sibirya Tuzağı (Smith-Morra) | B21 | 9.h3 | %0,02 · 7 | %0,00 · 0 | tuzak |

### Slav Savunması (`data/slav.json`, `data/slav.pgn`)

Varyantlara giren maç: genel 10.971, usta 2.757.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Chebanenko Varyantı: 4...a6 | D15 | 4...a6 | %27,1 · 2.976 | %32,5 · 896 |  |
| Değişim: 8.Qb3 Bb4 (Trifunovic) | D14 | 4.cxd5 | %13,8 · 1.509 | %7,2 · 198 |  |
| 4.e3 Bf5 ve Nh4 ile fil avı | D11 | 5.Nc3 | %11,8 · 1.299 | %27,3 · 753 |  |
| Değişim Varyantı | D14 | 5.Bf4 | %8,4 · 922 | %9,6 · 264 |  |
| Krause: 6...Nbd7 (Carlsbad, Morozevich) | D17 | 6...Nbd7 | %8,0 · 877 | %12,0 · 331 |  |
| Schlechter Slav: 4...g6 | D15 | 4...g6 | %5,6 · 615 | %0,54 · 15 |  |
| Steiner Varyantı: 5...Bg4 | D16 | 5...Bg4 | %4,8 · 528 | %0,83 · 23 |  |
| Geller Gambiti: 5.e4 b5 | D15 | 5.e4 | %4,2 · 466 | %2,0 · 56 |  |
| Alekhine Varyantı: 5.e3 b5 | D15 | 5.e3 | %3,5 · 380 | %0,65 · 18 |  |
| Sakin Varyant: 5.cxd5 ve 6.Qb3 (Landau) | D12 | 5.cxd5 | %3,4 · 369 | %1,2 · 34 |  |
| Krause: 7...Bb4 fedası (Wiesbaden) | D17 | 7...Bb4 | %3,1 · 336 | %2,9 · 81 |  |
| Ana Hat (Çek Varyantı) | D19 | 9...Nbd7 | %2,2 · 238 | %0,98 · 27 |  |
| Smyslov Varyantı: 5...Na6 | D16 | 5...Na6 | %2,1 · 235 | %0,54 · 15 |  |
| Hollanda Varyantı: 9...Ne4 10.g4 (Sämisch) | D19 | 9...Ne4 | %0,92 · 101 | %0,65 · 18 |  |
| Ana hat: 6.Ne5 (Krause Saldırısı) | D17 | 7...c5 | %0,75 · 82 | %1,0 · 28 |  |
| Lasker Varyantı: 6.e3 Na6 | D17 | 6...Na6 | %0,35 · 38 | %0,00 · 0 |  |

### Smith-Morra Gambiti (`data/smith-morra.json`, `data/smith-morra.pgn`)

Varyantlara giren maç: genel 2.494, usta 22.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Ret: 3...Nf6 (Alapin'e geçiş) | B21 | 3...Nf6 | %25,5 · 636 | %36,4 · 8 |  |
| Kabul: Klasik savunma (5...d6 ve ...e5) | B21 | 6...e6 | %22,6 · 565 | %18,2 · 4 |  |
| Ret: 3...d3 | B21 | 3...d3 | %14,6 · 364 | %27,3 · 6 |  |
| Ret: 3...d5 | B21 | 3...d5 | %11,6 · 290 | %4,5 · 1 |  |
| Tuzak: e5 ve Bxf7+ ile vezir kaybı | B21 | 4...d6 | %6,3 · 158 | %4,5 · 1 | tuzak |
| Fiyanketto Savunması: ...g6 | B21 | 5...g6 | %4,4 · 110 | %4,5 · 1 |  |
| Tuzak: 7.e5 Nxe5?? 9.Bxf7+ | B21 | 6...Nf6 | %4,0 · 101 | %0,00 · 0 | tuzak |
| Kabul: ...e6, ...a6 ve ...Nge7 düzeni | B21 | 7...Nge7 | %3,6 · 89 | %4,5 · 1 |  |
| Larsen Savunması: 6...Qc7 7.Qe2 a6 8.O-O Bd6 | B21 | 7.Qe2 | %2,4 · 59 | %0,00 · 0 |  |
| Açmaz Savunması: 6...Bb4 | B21 | 6...Bb4 | %1,6 · 40 | %0,00 · 0 |  |
| Gecikmeli Morphy Savunması: ...b5 ve ...Bc5 | B21 | 7...b5 | %1,1 · 27 | %0,00 · 0 |  |
| Ret: 3...e5 | B21 | 3...e5 | %0,92 · 23 | %0,00 · 0 |  |
| Chicago Savunması: ...b5 ve ...Ra7 | B21 | 9...Ra7 | %0,88 · 22 | %0,00 · 0 |  |
| Tuzak: Sibirya Tuzağı | B21 | 9.h3 | %0,28 · 7 | %0,00 · 0 | tuzak |
| Finegold Savunması: ...Be7 ve ...Nf6 | B21 | 8...Nf6 | %0,12 · 3 | %0,00 · 0 |  |

### Vezir Gambiti (`data/vezir-gambiti.json`, `data/vezir-gambiti.pgn`)

Varyantlara giren maç: genel 35.061, usta 9.225.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Slav Savunması: Ana Hat (Çek Varyantı) | D19 | 5...Bf5 | %13,1 · 4.593 | %9,9 · 914 |  |
| Yarı-Slav: Meran Varyantı | D48 | 7...b5 | %9,6 · 3.349 | %6,0 · 551 |  |
| Tarrasch Savunması: Ana Hat | D34 | 3...c5 | %7,9 · 2.764 | %2,1 · 192 |  |
| Reddedilmiş Vezir Gambiti: Tartakower Savunması | D58 | 7...b6 | %7,7 · 2.715 | %4,2 · 383 |  |
| Reddedilmiş Vezir Gambiti: 5.Bf4 (Harrwitz Saldırısı) | D37 | 5.Bf4 | %6,8 · 2.395 | %12,1 · 1.117 |  |
| Reddedilmiş Vezir Gambiti: Ragozin Savunması | D38 | 4...Bb4 | %6,3 · 2.219 | %17,2 · 1.591 |  |
| Alatortsev Varyantı (3...Be7) ve 7.g4 | D35 | 3...Be7 | %5,5 · 1.914 | %4,8 · 445 |  |
| Chigorin Savunması (2...Nc6) | D07 | 2...Nc6 | %4,9 · 1.729 | %0,65 · 60 |  |
| Reddedilmiş Vezir Gambiti: Cambridge Springs Savunması | D52 | 6...Qa5 | %4,6 · 1.604 | %2,1 · 197 |  |
| Yarı-Slav: Moskova Varyantı | D43 | 5...h6 | %4,6 · 1.598 | %7,5 · 693 |  |
| Yarı-Tarrasch Savunması | D41 | 4...c5 | %4,2 · 1.458 | %8,4 · 779 |  |
| Yarı-Slav: Botvinnik Sistemi | D44 | 5...dxc4 | %3,8 · 1.346 | %1,8 · 168 |  |
| Reddedilmiş Vezir Gambiti: Viyana Varyantı | D39 | 4...dxc4 | %3,1 · 1.099 | %6,8 · 623 |  |
| Slav Savunması: Değişim Varyantı | D14 | 5.Bf4 | %2,6 · 922 | %2,9 · 264 |  |
| Değişim Varyantı: Nge2 ve f3 planı | D36 | 6.e3 | %2,4 · 854 | %5,9 · 546 |  |
| Kabul Edilmiş Vezir Gambiti: Klasik Varyant | D27 | 7.a4 | %2,1 · 746 | %0,49 · 45 |  |
| Kabul Edilmiş Vezir Gambiti: 7.Qe2 (Smyslov Varyantı) | D28 | 7.Qe2 | %2,1 · 724 | %0,50 · 46 |  |
| Reddedilmiş Vezir Gambiti: Lasker Savunması | D56 | 7...Ne4 | %2,0 · 719 | %1,9 · 174 |  |
| Albin Karşı Gambiti: Ana Hat | D09 | 5.g3 | %1,8 · 617 | %0,07 · 6 |  |
| Kabul Edilmiş Vezir Gambiti: Merkez Varyantı (3.e4) | D20 | 3...e5 | %1,6 · 573 | %2,6 · 239 |  |
| Reddedilmiş Vezir Gambiti: Ortodoks Savunma (Capablanca manevrası) | D67 | 9...Nd5 | %1,6 · 560 | %0,15 · 14 |  |
| Reddedilmiş Vezir Gambiti: Değişim Varyantı (azınlık saldırısı) | D36 | 6.Qc2 | %1,3 · 463 | %1,4 · 132 |  |
| Tuzak: Fil Tuzağı (Elephant Trap) | D51 | 6.Nxd5 | %0,10 · 35 | %0,00 · 0 | tuzak |
| Kabul Edilmiş Vezir Gambiti: 3.e4 b5 kalite fedası | D20 | 3...b5 | %0,09 · 30 | %0,47 · 43 |  |
| Tuzak: Lasker Tuzağı (Albin Karşı Gambiti) | D08 | 4.e3 | %0,06 · 20 | %0,00 · 0 | tuzak |
| Tuzak: Gambit piyonunu tutmaya çalışmak | D20 | 3...b5 | %0,04 · 15 | %0,03 · 3 | tuzak |

### Yarı-Slav Savunması (`data/yari-slav.json`, `data/yari-slav.pgn`)

Varyantlara giren maç: genel 9.194, usta 2.166.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| 5...Nbd7: Cambridge Springs'e geçiş | D52 | 5...Nbd7 | %14,6 · 1.344 | %16,1 · 349 |  |
| Noteboom Varyantı (Abrahams) | D31 | 4...dxc4 | %11,8 · 1.087 | %1,6 · 34 |  |
| Moskova Varyantı | D43 | 7.e3 | %8,8 · 805 | %15,1 · 326 |  |
| Botvinnik Sistemi | D44 | 9...hxg5 | %8,1 · 741 | %6,6 · 142 |  |
| Anti-Meran: 6.Qc2 | D45 | 7.Bd3 | %7,6 · 696 | %17,1 · 370 |  |
| Shabalov-Shirov Gambiti: 6.Qc2 Bd6 7.g4 | D45 | 7.g4 | %7,3 · 675 | %5,0 · 109 |  |
| Marshall Gambiti: 4.e4 | D31 | 4.e4 | %6,9 · 631 | %3,3 · 72 |  |
| Meran Varyantı | D48 | 9.O-O | %6,3 · 580 | %5,2 · 112 |  |
| Anti-Moskova Gambiti | D43 | 6.Bh4 | %6,1 · 561 | %13,2 · 287 |  |
| Meran: 8...a6 9.e4 c5 10.d5 (Reynolds) | D48 | 10.d5 | %4,6 · 425 | %1,6 · 35 |  |
| Meran: 8...Bb7 (Wade) ve 12.O-O (Kaidanov) | D47 | 9.e4 | %4,5 · 415 | %3,1 · 67 |  |
| Meran: 10.e5 cxd4 11.Nxb5 (Blumenfeld, Rellstab) | D49 | 11.Nxb5 | %3,8 · 346 | %1,9 · 40 |  |
| Meran: 8...b4 (Lundin) | D47 | 8...b4 | %3,0 · 276 | %2,8 · 61 |  |
| Meran: 8...Bd6 (Chigorin) | D46 | 8...Bd6 | %1,8 · 167 | %4,5 · 97 |  |
| Botvinnik: 9.exf6 (Ekström) | D44 | 9.exf6 | %1,6 · 149 | %0,18 · 4 |  |
| Moskova: 7.Qb3 (Hastings) | D43 | 7.Qb3 | %1,3 · 123 | %2,3 · 49 |  |
| Stoltz: 7.e4 merkez varyantı | D45 | 7.e4 | %1,3 · 118 | %0,51 · 11 |  |
| Botvinnik: 9...Nd5 (Alatortsev) | D44 | 9...Nd5 | %0,60 · 55 | %0,05 · 1 |  |

### İskandinav Savunması (`data/iskandinav.json`, `data/iskandinav.pgn`)

Varyantlara giren maç: genel 4.925, usta 189.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Modern: 4...g6 fiyanketto | B01 | 4...g6 | %14,2 · 702 | %1,1 · 2 |  |
| 5...c6 ve 6...Bg4: h3-g4-Ne5 saldırısı | B01 | 5...c6 | %14,0 · 689 | %21,7 · 41 |  |
| 3...Qd6 4...a6: g3 fiyanketto | B01 | 5...a6 | %12,8 · 629 | %10,1 · 19 |  |
| 5...Bg4: fil değişimi ve uzun rok | B01 | 5...Bg4 | %11,5 · 567 | %2,6 · 5 |  |
| Modern: 4...Bg4 ve klasik merkez | B01 | 4...Bg4 | %10,7 · 527 | %3,2 · 6 |  |
| 3...c6 İskandinav Gambiti: Panov yapısı | B01 | 3...c6 | %10,7 · 526 | %1,6 · 3 |  |
| İzlanda Gambiti: 3...e6 4.d4 | B01 | 3...e6 | %6,8 · 336 | %0,53 · 1 |  |
| Portekiz: 4.Be2 ile sakin yol | B01 | 4.Be2 | %4,0 · 197 | %2,6 · 5 |  |
| 5...Bf5 6.Bc4: Nd5 fikri | B01 | 6.Bc4 | %3,9 · 192 | %13,2 · 25 |  |
| Portekiz: 4.f3 ile piyonu tutma | B01 | 4.f3 | %3,2 · 160 | %0,00 · 0 |  |
| 3...Qd6 5...c6: Bg5 ve uzun rok | B01 | 5...c6 | %2,6 · 127 | %29,1 · 55 |  |
| 5...Bf5 6.Bd2: uzun rok kuruluşu | B01 | 6.Bd2 | %2,6 · 126 | %6,3 · 12 |  |
| 3...Qe5+: Be2 ve hızlı gelişim | B01 | 3...Qe5+ | %1,2 · 59 | %0,53 · 1 |  |
| 3...Qd8: 7.Ne5 ve g4-h4 saldırısı | B01 | 5...c6 | %0,89 · 44 | %3,7 · 7 |  |
| Zehirli d4 piyonu: 7...Qxd4?? 8.Qxb7! | B01 | 5...Bg4 | %0,89 · 44 | %3,7 · 7 | tuzak |

### İspanyol Açılışı (Ruy Lopez) (`data/ispanyol.json`, `data/ispanyol.pgn`)

Varyantlara giren maç: genel 23.006, usta 7.474.

| Varyant | ECO | Ayırt edici hamle | Genel | Usta (2600+) | Not |
|---|---|---|---|---|---|
| Modern Arkhangelsk: 5...b5 6.Bb3 Bc5 | C78 | 5...b5 | %13,2 · 3.027 | %8,2 · 614 |  |
| Kapalı İspanyol: Chigorin Varyantı | C97 | 9...Na5 | %11,8 · 2.707 | %4,8 · 361 |  |
| Schliemann (Jaenisch) Gambiti | C63 | 3...f5 | %10,3 · 2.379 | %1,7 · 130 |  |
| Klasik (Cordel) Savunma: 3...Bc5 | C64 | 3...Bc5 | %7,5 · 1.732 | %0,95 · 71 |  |
| Değişim Varyantı | C69 | 5...f6 | %5,5 · 1.258 | %1,3 · 97 |  |
| Berlin Savunması: Berlin Duvarı | C67 | 8.Qxd8+ | %5,2 · 1.189 | %15,6 · 1.162 |  |
| Anti-Marshall: 8.a4 | C88 | 8.a4 | %5,0 · 1.162 | %6,6 · 491 |  |
| Kapalı İspanyol: Zaitsev Varyantı | C92 | 9...Bb7 | %5,0 · 1.138 | %4,6 · 346 |  |
| Kapalı İspanyol: Breyer Varyantı | C95 | 9...Nb8 | %4,9 · 1.128 | %6,4 · 479 |  |
| Gecikmeli Steinitz Savunması: 4...d6 5.c3 | C74 | 5.c3 | %4,7 · 1.082 | %2,0 · 150 |  |
| Anti-Berlin: 4.d3 | C65 | 4.d3 | %4,2 · 966 | %29,6 · 2.212 |  |
| Bird Savunması: 3...Nd4 | C61 | 3...Nd4 | %4,1 · 936 | %0,28 · 21 |  |
| Marshall Saldırısı: Ana Hat | C89 | 8...d5 | %3,4 · 787 | %5,2 · 390 |  |
| Değişim Varyantı: 5...Bg4 | C69 | 5...Bg4 | %3,2 · 734 | %0,99 · 74 |  |
| Açık İspanyol: Karpov'un 11.Ng5 hamlesi | C82 | 9.Nbd2 | %3,1 · 713 | %3,8 · 284 |  |
| Anti-Marshall: 8.h3 | C88 | 8.h3 | %2,6 · 598 | %5,7 · 424 |  |
| Worrall Saldırısı: 6.Qe2 | C86 | 6.Qe2 | %2,6 · 598 | %0,56 · 42 |  |
| Kapalı İspanyol: Karpov (Keres) Varyantı 9...Nd7 | C92 | 9...Nd7 | %1,9 · 439 | %0,98 · 73 |  |
| Kapalı İspanyol: Smyslov Varyantı 9...h6 | C93 | 9...h6 | %1,6 · 369 | %0,31 · 23 |  |
| Açık İspanyol: Dilworth Saldırısı | C83 | 11...Nxf2 | %0,23 · 52 | %0,39 · 29 |  |
| Tuzak: Nuh'un Gemisi Tuzağı | C71 | 8.Qxd4 | %0,05 · 12 | %0,01 · 1 | tuzak |

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
