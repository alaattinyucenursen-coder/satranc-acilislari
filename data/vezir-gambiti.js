// Vezir Gambiti modülü: Beyazın kazandığı dört usta maçı ve alıştırmaları.
import pillsburyTarrasch from './games/pillsbury-tarrasch-1895.js';
import smyslovKeres from './games/smyslov-keres-1948.js';
import botvinnikKeres from './games/botvinnik-keres-1952.js';
import karpovKasparov from './games/karpov-kasparov-1984.js';

export default {
  id: 'vezir-gambiti',
  name: 'Vezir Gambiti',
  intro: '1.d4 d5 2.c4 ile başlayan Vezir Gambiti’nde Beyazın dört ana planını, her birini Beyazın kazandığı bir usta maçıyla çalışın: **şah kanadı saldırısı**, **azınlık saldırısı**, **merkez kırılması** ve **tek kalmış piyona baskı**. Her maçta iki tarafın planı, hamle hamle açıklama ve kritik anlar var; alıştırmalar aynı fikri hem maçın kendisinde hem başka bir ustanın maçında sorar.',
  games: [pillsburyTarrasch, smyslovKeres, botvinnikKeres, karpovKasparov],
};
