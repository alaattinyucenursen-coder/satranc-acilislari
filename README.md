# Satranç Açılışları

Satranç açılışlarını varyantlarıyla çalışmak için veri ve (ileride) etkileşimli bir uygulama.

Plan:
1. **Varyant ağaçları**: açılışlar, ana varyantlar ve Türkçe hamle açıklamaları (bu depo, `data/`).
2. **Etkileşimli tahta**: ağaçta gezinme, hamle yapma, açıklamaları görme.
3. **Antrenman modu**: varyantları oynayıp doğru hamleyi tahmin etme.

## Mevcut açılışlar

### İspanyol Açılışı (Ruy Lopez) (`data/ispanyol.json`, `data/ispanyol.pgn`)

| Varyant | ECO | Not |
|---|---|---|
| Kapalı İspanyol: Chigorin Varyantı | C97 |  |
| Kapalı İspanyol: Breyer Varyantı | C95 |  |
| Kapalı İspanyol: Zaitsev Varyantı | C92 |  |
| Marshall Saldırısı: Ana Hat | C89 |  |
| Açık İspanyol: Karpov'un 11.Ng5 hamlesi | C82 |  |
| Berlin Savunması: Berlin Duvarı | C67 |  |
| Değişim Varyantı | C69 |  |
| Schliemann (Jaenisch) Gambiti | C63 |  |
| Tuzak: Nuh'un Gemisi Tuzağı | C71 | tuzak |

### Sicilya Savunması: Alapin Varyantı (`data/sicilya-alapin.json`, `data/sicilya-alapin.pgn`)

| Varyant | ECO | Not |
|---|---|---|
| 2...d5: 5...Bg4 ana hattı | B22 |  |
| 2...d5: 5...e6 ve izole piyon | B22 |  |
| 2...Nf6: 5.cxd4 d6 ana hattı | B22 |  |
| 2...Nf6: 5.Nf3 Nc6 6.Bc4 | B22 |  |
| 2...e6: Fransız tarzı yapı | B22 |  |
| 2...d5: 4...Nc6 ve 8...Qa5 | B22 |  |
| 2...d5 3.exd5 Nf6: gambit fikri | B22 |  |
| 2...Nf6: 4.Nf3 Nc6 5.Bc4 keskin hat | B22 |  |
| 2...Nc6: 6...e5 hattı | B22 |  |
| 2...e5: kapalı yapı | B22 |  |
| 2...d6: Ejderha tarzı kuruluş | B22 |  |
| 2...g6: fiyanketto ve 4...d5 | B22 |  |

### Sicilya Savunması: Kan Varyantı (`data/sicilya-kan.json`, `data/sicilya-kan.pgn`)

| Varyant | ECO | Not |
|---|---|---|
| 5.Bd3 Nf6 6.O-O Qc7: Maróczy yapısı | B42 |  |
| 5.Bd3 Nc6 6.Nxc6 dxc6 | B42 |  |
| 5.Nc3 Qc7: Klasik gelişim | B43 |  |
| 5.c4: Kirpi (Hedgehog) yapısı | B41 |  |
| 3.d3: Kral Hint Saldırısı düzeni | B40 |  |
| 3.c3: Fransız ilerleme yapısı | B40 |  |
| 3.Nc3 a6 4.g3: kapalı düzen | B40 |  |
| 3.b3: fiyanketto | B40 |  |
| 2.Nc3: Kapalı Sicilya | B23 |  |
| 2.f4: Grand Prix Saldırısı | B21 |  |
| 2.d4: Smith-Morra Gambiti | B21 |  |
| Tuzak: Sibirya Tuzağı (Smith-Morra) | B21 | tuzak |

### Slav Savunması (`data/slav.json`, `data/slav.pgn`)

| Varyant | ECO | Not |
|---|---|---|
| Ana Hat (Çek Varyantı) | D19 |  |
| Ana hat: 6.Ne5 (Krause Saldırısı) | D17 |  |
| Chebanenko Varyantı: 4...a6 | D15 |  |
| 4.e3 Bf5 ve Nh4 ile fil avı | D11 |  |
| Değişim Varyantı | D14 |  |

### Smith-Morra Gambiti (`data/smith-morra.json`, `data/smith-morra.pgn`)

| Varyant | ECO | Not |
|---|---|---|
| Kabul: Klasik savunma (5...d6 ve ...e5) | B21 |  |
| Kabul: ...e6, ...a6 ve ...Nge7 düzeni | B21 |  |
| Ret: 3...Nf6 (Alapin'e geçiş) | B21 |  |
| Ret: 3...d3 | B21 |  |
| Tuzak: Sibirya Tuzağı | B21 | tuzak |
| Tuzak: e5 ve Bxf7+ ile vezir kaybı | B21 | tuzak |

### Vezir Gambiti (`data/vezir-gambiti.json`, `data/vezir-gambiti.pgn`)

| Varyant | ECO | Not |
|---|---|---|
| Reddedilmiş Vezir Gambiti: Ortodoks Savunma (Capablanca manevrası) | D67 |  |
| Reddedilmiş Vezir Gambiti: Tartakower Savunması | D58 |  |
| Reddedilmiş Vezir Gambiti: Lasker Savunması | D56 |  |
| Reddedilmiş Vezir Gambiti: Değişim Varyantı (azınlık saldırısı) | D36 |  |
| Tuzak: Fil Tuzağı (Elephant Trap) | D51 | tuzak |
| Slav Savunması: Ana Hat (Çek Varyantı) | D19 |  |
| Slav Savunması: Değişim Varyantı | D14 |  |
| Yarı-Slav: Meran Varyantı | D48 |  |
| Yarı-Slav: Botvinnik Sistemi | D44 |  |
| Yarı-Slav: Moskova Varyantı | D43 |  |
| Kabul Edilmiş Vezir Gambiti: Klasik Varyant | D27 |  |
| Kabul Edilmiş Vezir Gambiti: Merkez Varyantı (3.e4) | D20 |  |
| Tuzak: Gambit piyonunu tutmaya çalışmak | D20 | tuzak |
| Albin Karşı Gambiti: Ana Hat | D09 |  |
| Tuzak: Lasker Tuzağı (Albin Karşı Gambiti) | D08 | tuzak |

### Yarı-Slav Savunması (`data/yari-slav.json`, `data/yari-slav.pgn`)

| Varyant | ECO | Not |
|---|---|---|
| Meran Varyantı | D48 |  |
| Anti-Meran: 6.Qc2 | D45 |  |
| Botvinnik Sistemi | D44 |  |
| Moskova Varyantı | D43 |  |
| Anti-Moskova Gambiti | D43 |  |

## Dosyalar

- `data/kaynak/<açılış>.json`: **elle düzenlenen kaynak**. Her varyant hamle dizisi olarak yazılır; açıklamalar `"4...e6"` gibi hamle etiketleriyle eşlenir. Ortak hamlelerin açıklaması tek bir varyantta yazılması yeterli.
- `data/<açılış>.json`: üretilen varyant ağacı (tahta ve antrenman modu bunu okur).
- `data/<açılış>.pgn`: üretilen PGN, her varyant ayrı bir oyun. Lichess'te "Çalışma > PGN içe aktar" ile bölümler halinde açılabilir.
- `data/acilislar.json`: üretilen açılış listesi (uygulama hangi açılışların olduğunu buradan okur).
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
      "leaf": "d2d4.d7d5.c2c4..."  // varyantın son düğümünün id'si
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
