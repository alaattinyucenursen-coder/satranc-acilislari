# Satranç Açılışları

Satranç açılışlarını varyantlarıyla çalışmak için veri ve (ileride) etkileşimli bir uygulama.

Plan:
1. **Varyant ağaçları**: açılışlar, ana varyantlar ve Türkçe hamle açıklamaları (bu depo, `data/`).
2. **Etkileşimli tahta**: ağaçta gezinme, hamle yapma, açıklamaları görme.
3. **Antrenman modu**: varyantları oynayıp doğru hamleyi tahmin etme.

## Mevcut açılışlar

### Vezir Gambiti (`data/vezir-gambiti.json`, `data/vezir-gambiti.pgn`)

| Varyant | ECO | Not |
|---|---|---|
| Reddedilmiş VG: Ortodoks Savunma (Capablanca manevrası) | D67 | |
| Reddedilmiş VG: Tartakower Savunması | D58 | |
| Reddedilmiş VG: Lasker Savunması | D56 | |
| Reddedilmiş VG: Değişim Varyantı (azınlık saldırısı) | D36 | |
| Fil Tuzağı (Elephant Trap) | D51 | tuzak |
| Slav: Ana Hat (Çek Varyantı) | D19 | |
| Slav: Değişim Varyantı | D14 | |
| Yarı-Slav: Meran | D48 | |
| Yarı-Slav: Botvinnik Sistemi | D44 | |
| Yarı-Slav: Moskova | D43 | |
| Kabul Edilmiş VG: Klasik | D27 | |
| Kabul Edilmiş VG: Merkez Varyantı (3.e4) | D20 | |
| Kabul'de piyonu tutmaya çalışmak | D20 | tuzak |
| Albin Karşı Gambiti: Ana Hat | D09 | |
| Lasker Tuzağı (Albin) | D08 | tuzak |

### Sicilya Savunması: Alapin Varyantı (`data/sicilya-alapin.json`, `data/sicilya-alapin.pgn`)

| Varyant | ECO |
|---|---|
| 2...d5: 5...Bg4 ana hattı | B22 |
| 2...d5: 5...e6 ve izole piyon | B22 |
| 2...Nf6: 5.cxd4 d6 ana hattı | B22 |
| 2...Nf6: 5.Nf3 Nc6 6.Bc4 | B22 |
| 2...e6: Fransız tarzı yapı | B22 |

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
