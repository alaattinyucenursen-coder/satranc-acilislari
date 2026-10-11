// Vezir Gambiti modülü: Beyazın kazandığı on usta maçı (kronolojik sırayla) ve alıştırmaları.
import pillsburyTarrasch from './games/pillsbury-tarrasch-1895.js';
import capablancaLasker from './games/capablanca-lasker-1924.js';
import smyslovKeres from './games/smyslov-keres-1948.js';
import botvinnikKeres from './games/botvinnik-keres-1952.js';
import polugaevskyTal from './games/polugaevsky-tal-1969.js';
import petrosianSpassky from './games/petrosian-spassky-1971.js';
import fischerSpassky from './games/fischer-spassky-1972.js';
import karpovTal from './games/karpov-tal-1980.js';
import karpovKasparov from './games/karpov-kasparov-1984.js';
import kasparovSmyslov from './games/kasparov-smyslov-1984.js';

export default {
  id: 'vezir-gambiti',
  name: 'Vezir Gambiti',
  intro: '1.d4 d5 2.c4 ile başlayan Vezir Gambiti’ni, Beyazın kazandığı on usta maçıyla çalışın. Maçlar Vezir Gambiti Reddi, Kabulü, Slav ve Yarı Slav yapılarından seçildi ve her biri Beyazın farklı bir planını gösteriyor: **şah kanadı saldırısı**, **azınlık saldırısı**, **merkez kırılması**, **tek kalmış ve asılı piyonlar**, **fedalar** ve **geçer piyonlar**. Her maçta iki tarafın planı, hamle hamle açıklama ve kritik anlar var; alıştırmalar aynı fikri hem maçın kendisinde hem başka bir ustanın maçında sorar.',
  games: [pillsburyTarrasch, capablancaLasker, smyslovKeres, botvinnikKeres, polugaevskyTal,
    petrosianSpassky, fischerSpassky, karpovTal, karpovKasparov, kasparovSmyslov],
};
